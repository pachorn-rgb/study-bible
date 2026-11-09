/* Pre-push check: run `node src/test/check.js` from the repo root (needs Playwright).
   1. Data: every MCQ/boss/case/Dx entry is well-formed and points at things that exist.
   2. Pages: every atlas in library.json and every chapter screen opens with no JS error and is not blank.
   Exit code 1 if anything fails. */
const fs = require("fs"), path = require("path"), http = require("http");
const DOCS = path.resolve(__dirname, "../../docs");
const J = f => JSON.parse(fs.readFileSync(path.join(DOCS, f), "utf8"));
const errs = []; const bad = m => errs.push(m);

/* ---------- 1. data ---------- */
const lib = J("library.json"), ix = J("q/index.json");
const chs = lib.sections.flatMap(s => s.chapters);
const mods = new Map(chs.flatMap(c => c.modules.map(m => [m.id, m])));
const items = new Map(chs.flatMap(c => c.checklist.map(x => [x.id, { ...x, ch: c.id }])));
const mcq = (q, where) => {
  if (!q || typeof q.q !== "string" || !q.q.trim()) return bad(`${where}: empty question`);
  if (!Array.isArray(q.o) || q.o.length < 2 || q.o.length > 5) bad(`${where}: needs 2–5 options`);
  if (!(Number.isInteger(q.a) && q.a >= 0 && q.a < q.o.length)) bad(`${where}: answer index out of range`);
  if (new Set(q.o).size !== q.o.length) bad(`${where}: duplicate options`);
  if (!q.e) bad(`${where}: missing explanation`);
};
for (const c of chs) {
  if (!c.subs.length) bad(`${c.id}: no disciplines`);
  for (const x of c.checklist) {
    if (!c.subs.includes(x.sub)) bad(`${x.id}: sub "${x.sub}" not in chapter ${c.id}`);
    if (x.link && !mods.has(x.link.m)) bad(`${x.id}: links to missing atlas ${x.link.m}`);
    if (x.link && x.link.h && mods.has(x.link.m) && (mods.get(x.link.m).topics || []).length && !mods.get(x.link.m).topics.some(t => t[1] === x.link.h)) bad(`${x.id}: atlas ${x.link.m} has no topic "${x.link.h}"`);
  }
  for (const m of c.modules) {
    if (!fs.existsSync(path.join(DOCS, m.href.split("#")[0]))) bad(`${m.id}: page ${m.href} missing`);
    if (m.thumb && !fs.existsSync(path.join(DOCS, m.thumb))) bad(`${m.id}: thumb ${m.thumb} missing`);
  }
}
let nq = 0;
for (const c of ix.parts) {
  const p = J(`q/${c}.json`);
  for (const [tid, qs] of Object.entries(p.topics || {})) {
    if (!items.has(tid)) bad(`q/${c}: topic ${tid} has no checklist item`);
    qs.forEach((q, i) => { mcq(q, `${tid}#${i}`); nq++ });
    if (qs.length < 2) bad(`${tid}: needs at least 2 MCQs`);
  }
  if (!p.boss && chs.find(x => x.id === c)?.checklist.length) bad(`${c}: chapter has topics but no boss`);
  if (p.boss) { if (!(p.boss.qs || []).length) bad(`${c}: boss without questions`); p.boss.qs.forEach((q, i) => mcq(q, `boss ${c}#${i}`));
    if (p.boss.pass > p.boss.qs.length) bad(`${c}: boss pass mark above question count`) }
  for (const k of p.cases || []) k.steps.forEach((s, i) => { mcq(s, `case ${k.id}#${i}`); if (!items.has(s.t)) bad(`case ${k.id}#${i}: topic ${s.t} missing`) });
  for (const d of p.dx || []) { if ((d.clues || []).length !== 6) bad(`dx ${d.id}: needs 6 clues`); if (d.link && !items.has(d.link) && !mods.has(d.link.split(":")[0])) bad(`dx ${d.id}: link ${d.link} missing`) }
}
const sw = fs.readFileSync(path.join(DOCS, "sw.js"), "utf8");
if (!/^const VERSION = "[^"]+";$/m.test(sw)) bad("sw.js: VERSION line missing or malformed");
{ const cl = J("changelog.json"), v = (sw.match(/^const VERSION = "([^"]+)";$/m) || [])[1];
  if (!cl.length || cl[0].v !== v) bad(`changelog.json: newest entry (${cl[0] && cl[0].v}) must match sw.js VERSION ${v} — write the patch notes`);
  cl.forEach(e => { if (!e.v || !(e.th || []).length) bad(`changelog.json: entry ${e.v} has no notes`) }) }
try { new Function(sw) } catch (e) { bad("sw.js: syntax error " + e.message) }
for (const f of ["q/index.json", ...ix.parts.map(c => `q/${c}.json`), ...fs.readdirSync(path.join(DOCS, "atlas")).map(f => "atlas/" + f), ...[...mods.values()].map(m => m.href.split("#")[0])])
  if (!sw.includes(`"${f}"`)) bad(`sw.js does not precache ${f}`);
{ const seen = new Map();
  for (const [tid, qs] of ix.parts.flatMap(c => Object.entries(J(`q/${c}.json`).topics || {}))) qs.forEach(q => { const k = q.q.trim().toLowerCase();
    if (seen.has(k)) bad(`duplicate question stem in ${tid} and ${seen.get(k)}: ${q.q.slice(0, 50)}`); else seen.set(k, tid) }) }
console.log(`data: ${chs.length} chapters · ${mods.size} atlases · ${items.size} topics · ${nq} MCQs`);

/* ---------- 2. pages ---------- */
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".webmanifest": "application/manifest+json" };
const srv = http.createServer((req, res) => { let f = path.join(DOCS, decodeURIComponent(req.url.split("?")[0])); if (f.endsWith("/")) f += "index.html";
  fs.readFile(f, (e, d) => { if (e) { res.writeHead(404); res.end(); return } res.writeHead(200, { "Content-Type": TYPES[path.extname(f)] || "application/octet-stream" }); res.end(d) }) });
srv.listen(0, async () => {
  const base = `http://127.0.0.1:${srv.address().port}/`;
  const { chromium } = require("playwright"); const b = await chromium.launch();
  const ctx = await b.newContext({ serviceWorkers: "block" });
  ctx.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  const open = async (url, ok) => { const p = await ctx.newPage(); const pe = []; p.on("pageerror", e => pe.push(e.message));
    try { await p.goto(base + url, { waitUntil: "load", timeout: 20000 }); await p.waitForTimeout(500); const r = await p.evaluate(ok); if (r !== true) bad(`${url}: ${r}`) }
    catch (e) { bad(`${url}: ${e.message.split("\n")[0]}`) }
    pe.forEach(m => bad(`${url}: JS error ${m}`)); await p.close() };
  const hrefs = [...new Set([...mods.values()].map(m => m.href.split("#")[0]))];
  for (const h of hrefs) await open(h, () => { const t = document.body.innerText.trim().length; if (t <= 300) return `looks blank (${t} chars)`;
    /* built atlases declare ATLAS.kind; pharmacology wording must not leak into other kinds */
    if (typeof ATLAS !== "undefined" && ATLAS.kind !== "pharm") { const m = document.body.innerText.match(/drug class|ยาต้นแบบ|drug map/i); if (m) return `${ATLAS.kind} atlas shows pharmacology wording "${m[0]}"` }
    return true });
  for (const c of chs) await open(`index.html#/c/${c.id}`, () => !!document.querySelector(".chead") || "chapter header missing");
  for (const r of ["index.html#/", "index.html#/review", "index.html#/library"]) await open(r, () => document.querySelector("#view").innerText.length > 50 || "blank view");
  console.log(`pages: ${hrefs.length} atlases + ${chs.length} chapters opened`);
  await b.close(); srv.close();
  if (errs.length) { console.log(`\n✗ ${errs.length} problem(s):`); errs.slice(0, 80).forEach(e => console.log(" - " + e)); process.exit(1) }
  console.log("✓ all checks passed");
});

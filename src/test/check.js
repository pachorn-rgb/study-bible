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
{ /* length tell: keyed option conspicuously the longest (see src/test/tells.py) */
  let n = 0, t = 0; for (const c of ix.parts) for (const qs of Object.values(J(`q/${c}.json`).topics || {})) qs.forEach(q => {
    const L = q.o.map(x => x.length), s = [...L].sort((a, b) => b - a); t++; if (L[q.a] === s[0] && s[0] > 1.25 * s[1]) n++ });
  if (n / t > 0.03) bad(`${n}/${t} MCQs have the answer as the clearly longest option (> 3%) — run python3 src/test/tells.py`) }
{ /* badge census: one badge token must mean ONE book across the whole repo.
     Two collisions have already been found and fixed this way —
       g  meant Gray's in kub-anatomy and Guyton in src/atlases/*  -> Gray's is now gr
       fa meant First Aid Step 1 AND Step 2 CK                     -> fa1 / fa2
     A page that defines a token locally must not give it a different book
     from the shared map in src/engine/atlas-core.js. */
  const SRC = path.join(__dirname, "..");
  const label = s => { const m = {}; for (const [, k, v] of s.matchAll(/(\w+):'<b class="sbb \w+">([^<]+)<\/b>'/g)) m[k] = v; return m };
  const shared = label(fs.readFileSync(path.join(SRC, "engine/atlas-core.js"), "utf8"));
  for (const f of fs.readdirSync(path.join(SRC, "atlases")).filter(x => x.endsWith(".js"))) {
    const local = label(fs.readFileSync(path.join(SRC, "atlases", f), "utf8"));
    for (const [k, v] of Object.entries(local))
      if (shared[k] && shared[k] !== v)
        bad(`badge collision: "${k}" is ${shared[k]} in the shared map but ${v} in ${f} — give it its own token`);
  } }

{ /* cards() and flowD() draw SVG: HTML tags inside an SVG <text> do not render and
     push the string outside its box. Only tbl() is real HTML, so only it may carry markup. */
  const SRC = path.join(__dirname, "..");
  for (const f of fs.readdirSync(path.join(SRC, "atlases")).filter(x => x.endsWith(".js"))) {
    const src = fs.readFileSync(path.join(SRC, "atlases", f), "utf8");
    for (const fn of ["cards", "flowD"]) {
      const re = new RegExp(fn + "\\(\\[", "g");
      let m;
      while ((m = re.exec(src))) {
        let i = m.index + m[0].length - 1, d = 0, j = i;
        for (; j < src.length; j++) {
          if (src[j] === "[") d++;
          else if (src[j] === "]" && --d === 0) break;
        }
        const blk = src.slice(i, j + 1);
        const tag = blk.match(/<\/?(b|i|br|span|em)\b[^>]*>/);
        if (tag) bad(`${f}: ${tag[0]} inside ${fn}() — that block is SVG, so the markup will not render; drop the tag or use tbl()`);
      }
    }
  } }

{ /* Language mix: Thai explains, English names. An atlas that drifts past 55% Thai has
     started translating terms that belong in English (CLAUDE.md > Style > Language). */
  const SRC = path.join(__dirname, "..");
  for (const f of fs.readdirSync(path.join(SRC, "atlases")).filter(x => x.endsWith(".js"))) {
    const src = fs.readFileSync(path.join(SRC, "atlases", f), "utf8");
    const th = (src.match(/[\u0E00-\u0E7F]/g) || []).length;
    const en = (src.match(/[A-Za-z]/g) || []).length;
    if (th + en < 500) continue;
    const pct = Math.round(100 * th / (th + en));
    /* THAI_DEBT: atlases written before this rule existed. A listed file may not get
       more Thai than it already has; every rewrite lowers its number until it is at 55
       and the entry goes. Anything not listed must be at or under 55 from the start. */
    const THAI_DEBT = {};
    const ceiling = THAI_DEBT[f] || 55;
    if (pct > ceiling) bad(`${f}: ${pct}% Thai characters, ceiling ${ceiling} — keep disease, drug, enzyme and structure names in English`);
    if (THAI_DEBT[f] && pct < ceiling) bad(`${f}: now ${pct}% Thai — lower THAI_DEBT to ${pct}${pct <= 55 ? " or remove the entry" : ""}`);
  } }

{ /* cards() must not be a stack of captioned text boxes: that costs more room than a
     list and says nothing the notes do not. Draw the real thing, use tbl(), or omit draw().
     The backlog is cleared: CARD_DEBT is empty, so any new block of text boxes fails. */
  const CARD_DEBT = {};
  const SRC = path.join(__dirname, "..");
  for (const f of fs.readdirSync(path.join(SRC, "atlases")).filter(x => x.endsWith(".js"))) {
    const src = fs.readFileSync(path.join(SRC, "atlases", f), "utf8");
    const re = /cards\(\[/g;
    let m, n = 0;
    while ((m = re.exec(src))) {
      let i = m.index + m[0].length - 1, d = 0, j = i;
      for (; j < src.length; j++) { if (src[j] === "[") d++; else if (src[j] === "]" && --d === 0) break }
      const blk = src.slice(i, j + 1);
      if ((blk.match(/\["[^"]{1,80}","[^"]{0,200}"/g) || []).length >= 3) n++;
    }
    const budget = CARD_DEBT[f] || 0;
    if (n > budget) bad(`${f}: ${n} cards() block(s) of captioned text boxes, budget ${budget} — draw the real thing, use tbl(), or drop draw() so the notes run full width`);
    if (n < budget) bad(`${f}: ${n} cards() block(s) left but CARD_DEBT still says ${budget} — lower it to ${n}${n ? "" : " and remove the entry"}`);
  } }
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
  { /* Regression for the blank-atlas bug: open an atlas, go back, then reopen it after the
       browser has discarded the hidden iframe's document. The viewer must reload it, not
       sit on a blank frame. */
    const p = await ctx.newPage(); const first = [...mods.values()][0];
    try {
      await p.goto(`${base}index.html#/v/${first.id}`, { waitUntil: "load", timeout: 20000 });
      await p.waitForTimeout(2500);
      await p.evaluate(() => document.getElementById("vback").click()); await p.waitForTimeout(600);
      await p.evaluate(() => document.getElementById("frame").contentWindow.location.replace("about:blank"));
      await p.waitForTimeout(500);
      await p.evaluate(id => { location.hash = "#/v/" + id }, first.id); await p.waitForTimeout(2500);
      const url = await p.evaluate(() => { try { return document.getElementById("frame").contentWindow.location.href } catch (e) { return "(blocked)" } });
      if (url.includes("about:blank")) bad(`viewer: reopening ${first.id} after its iframe document was discarded left a blank frame — openViewer must reload when the document is gone`);
    } catch (e) { bad(`viewer reopen check: ${e.message.split("\n")[0]}`) }
    await p.close();
  }
  console.log(`pages: ${hrefs.length} atlases + ${chs.length} chapters opened + viewer reopen`);
  await b.close(); srv.close();
  if (errs.length) { console.log(`\n✗ ${errs.length} problem(s):`); errs.slice(0, 80).forEach(e => console.log(" - " + e)); process.exit(1) }
  console.log("✓ all checks passed");
});

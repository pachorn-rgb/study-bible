/* Med Study Bible service worker.
   To publish an update: change VERSION (any new string). Installed apps
   download the new files in the background and show "New version" banner. */
const VERSION = "6.66";
const CACHE = "bible-" + VERSION;
const FONT_CACHE = "bible-fonts";
const FILES = [
 "./",
 "app.js",
 "design/sb.css",
 "icons/icon-180.png",
 "icons/icon-192.png",
 "icons/icon-512.png",
 "icons/icon-maskable-512.png",
 "index.html",
 "library.json",
 "manifest.json",
 "renal/kub-anatomy.html",
 "renal/kub-embryology.html",
 "renal/kub-histology.html",
 "renal/nephron-pathway.html",
 "search-index.json",
 "thumbs/kub-anatomy.jpg",
 "thumbs/kub-embryology.jpg",
 "thumbs/kub-histology.jpg",
 "thumbs/nephron-pathway.jpg",
 "resp/pharm-resp.html",
 "renal/pharm-renal.html",
 "thumbs/pharm-resp.jpg",
 "thumbs/pharm-renal.jpg",
 "msk/pharm-msk.html",
 "thumbs/pharm-msk.jpg",
 "neuro/pharm-neuro.html",
 "thumbs/pharm-neuro.jpg",
 "cvs/pharm-cvs.html",
 "thumbs/pharm-cvs.jpg",
 "heme/pharm-heme.html",
 "thumbs/pharm-heme.jpg",
 "gi/pharm-gi.html",
 "thumbs/pharm-gi.jpg",
 "endo/pharm-endo.html",
 "thumbs/pharm-endo.jpg",
 "psych/pharm-psych.html",
 "thumbs/pharm-psych.jpg",
 "repro/pharm-repro.html",
 "thumbs/pharm-repro.jpg",
 "pharm/pharm-gp.html",
 "thumbs/pharm-gp.jpg",
 "micro/pharm-micro.html",
 "thumbs/pharm-micro.jpg",
 "immuno/pharm-immuno.html",
 "thumbs/pharm-immuno.jpg",
 "pharm/pharm-tox.html",
 "thumbs/pharm-tox.jpg",
 "atlas/atlas.css",
 "atlas/core.js",
 "atlas/render.js",
 "q/index.json",
 "q/cvs.json",
 "q/endo.json",
 "q/gi.json",
 "q/heme.json",
 "q/immuno.json",
 "q/micro.json",
 "q/msk.json",
 "q/neuro.json",
 "q/pharm.json",
 "q/psych.json",
 "q/renal.json",
 "q/repro.json",
 "q/resp.json",
 "patho/patho-injury.html",
 "thumbs/patho-injury.jpg",
 "q/patho.json",
 "renal/renal-physio-1.html",
 "thumbs/renal-physio-1.jpg",
 "renal/renal-physio-2.html",
 "thumbs/renal-physio-2.jpg",
 "renal/renal-physio-3.html",
 "thumbs/renal-physio-3.jpg",
 "changelog.json",
 "renal/renal-patho-1.html",
 "thumbs/renal-patho-1.jpg",
 "renal/renal-patho-2.html",
 "thumbs/renal-patho-2.jpg",
 "renal/renal-patho-3.html",
 "thumbs/renal-patho-3.jpg",
 "atlas/renal-legacy.css",
 "cvs/cvs-physio-1.html",
 "thumbs/cvs-physio-1.jpg",
 "cvs/cvs-physio-2.html",
 "thumbs/cvs-physio-2.jpg",
 "cvs/cvs-patho-1.html",
 "thumbs/cvs-patho-1.jpg",
 "cvs/cvs-patho-2.html",
 "thumbs/cvs-patho-2.jpg",
 "cvs/cvs-patho-3.html",
 "thumbs/cvs-patho-3.jpg",
 "endo/endo-physio-1.html",
 "thumbs/endo-physio-1.jpg",
 "endo/endo-physio-2.html",
 "thumbs/endo-physio-2.jpg",
 "endo/endo-patho-1.html",
 "thumbs/endo-patho-1.jpg",
 "endo/endo-patho-2.html",
 "thumbs/endo-patho-2.jpg",
 "endo/endo-patho-3.html",
 "thumbs/endo-patho-3.jpg",
 "gi/gi-physio.html",
 "thumbs/gi-physio.jpg",
 "gi/gi-patho-1.html",
 "thumbs/gi-patho-1.jpg",
 "gi/gi-patho-2.html",
 "thumbs/gi-patho-2.jpg",
 "gi/gi-patho-3.html",
 "thumbs/gi-patho-3.jpg",
 "renal/renal-micro.html",
 "thumbs/renal-micro.jpg",
 "biochem/biochem-metab-1.html",
 "thumbs/biochem-metab-1.jpg",
 "q/biochem.json",
 "biochem/biochem-metab-2.html",
 "thumbs/biochem-metab-2.jpg",
 "biochem/biochem-metab-3.html",
 "thumbs/biochem-metab-3.jpg",
 "biochem/biochem-metab-4.html",
 "thumbs/biochem-metab-4.jpg",
 "biochem/biochem-molecular-1.html",
 "thumbs/biochem-molecular-1.jpg",
 "biochem/biochem-molecular-2.html",
 "thumbs/biochem-molecular-2.jpg",
 "biochem/biochem-genetics-1.html",
 "thumbs/biochem-genetics-1.jpg",
 "biochem/biochem-genetics-2.html",
 "thumbs/biochem-genetics-2.jpg",
 "biochem/biochem-cellular.html",
 "thumbs/biochem-cellular.jpg",
 "biochem/biochem-lab.html",
 "thumbs/biochem-lab.jpg",
 "renal/renal-lab.html",
 "thumbs/renal-lab.jpg",
 "renal/renal-clinical.html",
 "thumbs/renal-clinical.jpg"
];
/* figure images (renal/img/**) are cached the first time they are viewed, so installing stays light */
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, {cache: "reload"})))));
});
self.addEventListener("message", e => { if (e.data === "SKIP_WAITING") self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k.startsWith("bible-") && k !== CACHE && k !== FONT_CACHE).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.open(FONT_CACHE).then(async c => {
      const hit = await c.match(req); if (hit) return hit;
      try { const res = await fetch(req); c.put(req, res.clone()); return res; } catch (err) { return Response.error(); }
    }));
    return;
  }
  if (url.origin !== location.origin) return;
  e.respondWith(caches.match(req, {ignoreSearch: true}).then(hit => hit || fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => req.mode === "navigate" ? caches.match("index.html") : Response.error())));
});

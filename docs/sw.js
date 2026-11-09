/* Med Study Bible service worker.
   To publish an update: change VERSION (any new string). Installed apps
   download the new files in the background and show "New version" banner. */
const VERSION = "6.25";
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
 "renal/body-fluids.html",
 "renal/harrison-ch319.html",
 "renal/harrison-ch320.html",
 "renal/harrison-ch321.html",
 "renal/harrison-ch322.html",
 "renal/harrison-ch323.html",
 "renal/harrison-ch324.html",
 "renal/harrison-ch325.html",
 "renal/harrison-ch326.html",
 "renal/harrison-ch327.html",
 "renal/harrison-ch328.html",
 "renal/harrison-ch329.html",
 "renal/harrison-ch330.html",
 "renal/harrison-ch331.html",
 "renal/kub-anatomy.html",
 "renal/kub-embryology.html",
 "renal/kub-histology.html",
 "renal/nephron-pathway.html",
 "renal/renal-ch25.html",
 "renal/renal-ch26.html",
 "renal/renal-ch27.html",
 "renal/renal-ch28.html",
 "renal/renal-ch29.html",
 "renal/renal-ch30.html",
 "renal/renal-ch31.html",
 "renal/renal-physiology.html",
 "renal/robbins-ch20.html",
 "renal/robbins-ch21.html",
 "search-index.json",
 "thumbs/body-fluids.jpg",
 "thumbs/harrison-ch319.jpg",
 "thumbs/harrison-ch320.jpg",
 "thumbs/harrison-ch321.jpg",
 "thumbs/harrison-ch322.jpg",
 "thumbs/harrison-ch323.jpg",
 "thumbs/harrison-ch324.jpg",
 "thumbs/harrison-ch325.jpg",
 "thumbs/harrison-ch326.jpg",
 "thumbs/harrison-ch327.jpg",
 "thumbs/harrison-ch328.jpg",
 "thumbs/harrison-ch329.jpg",
 "thumbs/harrison-ch330.jpg",
 "thumbs/harrison-ch331.jpg",
 "thumbs/kub-anatomy.jpg",
 "thumbs/kub-embryology.jpg",
 "thumbs/kub-histology.jpg",
 "thumbs/nephron-pathway.jpg",
 "thumbs/renal-ch25.jpg",
 "thumbs/renal-ch26.jpg",
 "thumbs/renal-ch27.jpg",
 "thumbs/renal-ch28.jpg",
 "thumbs/renal-ch29.jpg",
 "thumbs/renal-ch30.jpg",
 "thumbs/renal-ch31.jpg",
 "thumbs/robbins-ch20.jpg",
 "thumbs/robbins-ch21.jpg",
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
 "q/patho.json"
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

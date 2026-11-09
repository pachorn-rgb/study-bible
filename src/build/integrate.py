"""Register built atlases in the app: thumbnail, library entry, search index, service-worker cache.

  python3 src/build/integrate.py pharm-cvs patho-injury
Run build.py first. Atlases whose meta has "draft": true are skipped (not published).
Needs Playwright (node) for thumbnails and search text.
"""
import sys, json, subprocess, datetime, pathlib, tempfile
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parents[2]
SRC, DOCS = ROOT / "src", ROOT / "docs"


def meta(aid):
    return json.loads((SRC / "atlases" / f"{aid}.json").read_text())


def main(ids):
    ids = [i for i in ids if not meta(i).get("draft")]
    if not ids:
        print("nothing to integrate (all drafts?)"); return
    tmp = pathlib.Path(tempfile.mkdtemp())
    js = """const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const out={};
for(const [m,f] of JSON.parse(process.argv[2])){const p=await b.newPage({viewport:{width:1280,height:720},colorScheme:'light'});
 const errs=[];p.on('pageerror',e=>errs.push(e.message));
 await p.goto('file://%s/'+f);await p.waitForTimeout(900);
 const el=await p.$('#t-map .mmwrap');await el.scrollIntoViewIfNeeded();await el.screenshot({path:'%s/'+m+'.png'});
 out[m]=await p.evaluate((m)=>{const tmp=document.createElement('div');return SEC.filter(s=>!s.mind).map(s=>{tmp.innerHTML=s.notes();return {m,h:s.id,t:s.t,x:((s.drugs||"")+" "+tmp.textContent).replace(/\\s+/g," ").trim().slice(0,1400),k:GN[s.k]}})},m);
 if(errs.length){console.log('ERR',m,errs);process.exitCode=1}await p.close()}
fs.writeFileSync('%s/idx.json',JSON.stringify(out));await b.close()})();""" % (DOCS, tmp, tmp)
    (tmp / "idx.js").write_text(js)
    subprocess.run(["node", str(tmp / "idx.js"), json.dumps([[i, f'{meta(i)["lib"]["folder"]}/{i}.html'] for i in ids])], check=True, cwd=ROOT)
    idx = json.loads((tmp / "idx.json").read_text())
    for i in ids:
        im = Image.open(tmp / f"{i}.png").convert("RGB"); w, h = im.size; t = 640 / 360
        if w / h > t: nw = int(h * t); im = im.crop(((w - nw) // 2, 0, (w - nw) // 2 + nw, h))
        else: nh = int(w / t); im = im.crop((0, 0, w, nh))
        im.resize((640, 360), Image.LANCZOS).save(DOCS / f"thumbs/{i}.jpg", quality=82)
    lib = json.loads((DOCS / "library.json").read_text())
    chap = lambda cid: [c for s in lib["sections"] for c in s["chapters"] if c["id"] == cid][0]
    for i in ids:
        r = meta(i)["lib"]; c = chap(r["cid"])
        old = next((x for x in c["modules"] if x["id"] == i), None)
        entry = {"id": i, "title": r["title"], "subs": r.get("subs", ["Pharmacology"]), "src": r["src"], "href": f'{r["folder"]}/{i}.html',
                 "thumb": f"thumbs/{i}.jpg", "desc": r["desc"], "tags": r.get("tags", ["pharmacology"]),
                 "topics": [["Drug class map" if meta(i)["kind"] == "pharm" else "Topic map", "map"]] + [[e["t"], e["h"]] for e in idx[i]],
                 "ref": {"b": r.get("refb", "katzung"), "l": r.get("refl", "K"), "ch": r["ch"], "sort": r["sort"]}}
        if old: c["modules"][c["modules"].index(old)] = entry
        else: c["modules"].append(entry)
        # shortcuts that mirror this atlas (e.g. pharm-micro-link) keep the same topics
        for s in lib["sections"]:
            for cc in s["chapters"]:
                for x in cc["modules"]:
                    if x["id"] == i + "-link": x["topics"] = entry["topics"]
    (DOCS / "library.json").write_text(json.dumps(lib, ensure_ascii=False, indent=1))
    si = json.loads((DOCS / "search-index.json").read_text())
    si["r"] = [e for e in si["r"] if e["m"] not in ids]
    for i in ids: si["r"] += [{"m": e["m"], "h": e["h"], "t": e["t"], "x": e["k"].upper() + " " + e["x"]} for e in idx[i]]
    si["built"] = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%S.000Z")
    (DOCS / "search-index.json").write_text(json.dumps(si, ensure_ascii=False, separators=(",", ":")))
    files = []
    for i in ids: files += [f'{meta(i)["lib"]["folder"]}/{i}.html', f"thumbs/{i}.jpg"] + [f"atlas/{c}" for c in meta(i).get("css", [])]
    sw_add(files)
    print("integrated", ids)


def sw_add(files, bump=True):
    """Add files to the service-worker precache list and bump VERSION so installed apps update."""
    sw = (DOCS / "sw.js").read_text()
    for f in files:
        if f'"{f}"' not in sw: sw = sw.replace("\n];", f',\n "{f}"\n];', 1)
    if bump:
        v = sw.split('const VERSION = "')[1].split('"')[0]; maj, mi = v.split(".")
        sw = sw.replace(f'const VERSION = "{v}";', f'const VERSION = "{maj}.{int(mi)+1}";')
        print("sw version", f"{maj}.{int(mi)+1}")
    (DOCS / "sw.js").write_text(sw)


if __name__ == "__main__":
    main(sys.argv[1:])

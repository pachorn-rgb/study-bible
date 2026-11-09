"""Build atlas pages from src/ into docs/.

  python3 src/build/build.py            # rebuild shared engine + every atlas
  python3 src/build/build.py pharm-cvs  # rebuild engine + only these atlases

Shared engine (written once, used by every built atlas):
  docs/atlas/atlas.css   base layout + atlas styles
  docs/atlas/core.js     drawing helpers, mind map, badges  (before the content)
  docs/atlas/render.js   navigation / rendering engine      (after the content)
Each page in docs/<folder>/<id>.html then only holds its hero text and its content script.
"""
import sys, json, re, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2]
SRC, DOCS = ROOT / "src", ROOT / "docs"

# Per-kind defaults: what the overview map is called and which pharmacology-only parts show.
KINDS = {
    "pharm":  {"root": "Pharmacology", "mmh": "drug classes", "mapT": "Drug class map", "leg": True,  "drugs": True},
    "patho":  {"root": "Pathology",    "mmh": "map",          "mapT": "Topic map",      "leg": False, "drugs": False},
    "physio": {"root": "Physiology",   "mmh": "map",          "mapT": "Topic map",      "leg": False, "drugs": False},
    "anat":   {"root": "Anatomy",      "mmh": "map",          "mapT": "Topic map",      "leg": False, "drugs": False},
    "histo":  {"root": "Histology",    "mmh": "map",          "mapT": "Topic map",      "leg": False, "drugs": False},
    "embryo": {"root": "Embryology",   "mmh": "map",          "mapT": "Topic map",      "leg": False, "drugs": False},
}


def kind_of(meta):
    k = meta.get("kind")
    assert k in KINDS, f"{meta.get('id')}: set \"kind\" to one of {list(KINDS)}"
    return k
ENG = SRC / "engine"


def must(old, new, txt):
    assert old in txt, "engine patch target missing: " + old[:70]
    return txt.replace(old, new)


def build_engine():
    out = DOCS / "atlas"; out.mkdir(exist_ok=True)
    (out / "atlas.css").write_text((ENG / "atlas-base.css").read_text() + "\n" + (ENG / "atlas-extra.css").read_text())
    (out / "core.js").write_text((ENG / "helpers.js").read_text() + "\n" + (ENG / "atlas-core.js").read_text())
    r = (ENG / "render-template.js").read_text()
    r = must('const SEENKEY="sb-phys-seen"', 'const SEENKEY="sb-"+ATLAS.id+"-seen"', r)
    r = re.sub(r'go\(location\.hash\.slice\(1\)\|\|"[^"]*"', 'go(location.hash.slice(1)||"map"', r)
    r = must('n.innerHTML=s.notes();n.querySelectorAll("h3").forEach((h,i)=>h.id="n-"+s.id+"-"+i);',
             'if(n){n.innerHTML=s.notes();n.querySelectorAll("h3").forEach((h,i)=>h.id="n-"+s.id+"-"+i);}', r)
    r = must('<div class="k">${GN[s.k]||s.k}</div><h2>${s.t}</h2>',
             '<div class="k" style="color:var(--g${GROUPS.indexOf(s.k)})">${GN[s.k]||s.k}</div><h2>${s.t}</h2>${s.drugs?`<div class="dchips">${s.drugs.split(" · ").map(d=>`<span>${d}</span>`).join("")}</div>`:""}', r)
    r = must('function renderGroup(gk){GRP=gk;', 'function renderGroup(gk){GRP=gk;document.querySelector(".shell").classList.toggle("ov",gk==="0");', r)
    r = must('$("#flow").innerHTML=`<header class="ghead">', '$("#flow").innerHTML=(gk==="0"?"":`<header class="ghead">', r)
    r = must('</div></header>`+list.map(topicHTML)', '</div></header>`)+list.map(topicHTML)', r)
    mind = ('function topicHTML(s){if(s.mind)return `<article class="topic" id="t-${s.id}" data-id="${s.id}"><section class="sb-card card mmcard">'
            '<div class="mmhead"><div><div class="k" style="color:var(--g0);font:700 .6875rem var(--sb-font);letter-spacing:.06em;text-transform:uppercase">Overview</div><h2>${ATLAS.sys} ${ATLAS.mmh}</h2></div>'
            '<p>แตะกลุ่มหรือหัวข้อเพื่อไปที่เนื้อหา · ✓ = อ่านแล้ว</p></div><div id="dia-${s.id}"></div>'
            '${!ATLAS.leg?"":`<div class="mmlegend">${Object.keys(LEG).map(k=>`<span><i style="background:var(${LEG[k][1]})"></i>${LEG[k][0]}</span>`).join("")}</div>`}</section></article>`;')
    r = must('function topicHTML(s){', mind, r)
    (out / "render.js").write_text(r)


def build_page(aid):
    meta = json.loads((SRC / "atlases" / f"{aid}.json").read_text())
    head = re.sub(r"<title>.*?</title>", f"<title>{meta['title_tag']}</title>", (ENG / "head.html").read_text())
    head += '<link rel="stylesheet" href="../atlas/atlas.css">\n'
    for c in meta.get("css", []):  # extra stylesheet from src/engine, copied to docs/atlas
        (DOCS / "atlas" / c).write_text((ENG / c).read_text()); head += f'<link rel="stylesheet" href="../atlas/{c}">\n'
    body = (ENG / "body.html").read_text()
    hero_old = body[body.find('<header class="sb-hero">'):body.find("</header>") + 9]
    srcs = "".join(f'<span class="sb-src"><i class="{c}">{l}</i>{t}</span>' for c, l, t in meta["sources"])
    hero = (f'<header class="sb-hero">\n    <div class="sb-eyebrow">{meta["eyebrow"]}</div>\n    <h1>{meta["h1"]}</h1>\n'
            f'    <p class="sb-lede">{meta["lede"]}</p>\n    <div class="sb-sources">{srcs}</div>\n    <div class="pstats" id="pstats"></div>\n  </header>')
    body = body.replace(hero_old, hero)
    k = kind_of(meta)
    cfg = {"id": aid, "kind": k, "sys": meta["sys"], **KINDS[k], **meta.get("override", {})}
    content = (SRC / "atlases" / f"{aid}.js").read_text()
    # "//@include file.js" pulls in shared section libraries (e.g. _renal-guyton-base.js)
    content = re.sub(r"^//@include (\S+)$", lambda m: (SRC / "atlases" / m.group(1)).read_text(), content, flags=re.M)
    page = (head + body +
            f'<script>const ATLAS={json.dumps(cfg, ensure_ascii=False)};</script>\n'
            '<script src="../atlas/core.js"></script>\n'
            f'<script>\n{content}\natlasFinish();\n</script>\n'
            '<script src="../atlas/render.js"></script>\n</body>\n</html>\n')
    folder = DOCS / meta["lib"]["folder"]; folder.mkdir(exist_ok=True)
    # drafts get a .draft.html name (git-ignored) so they never reach the published site
    out = folder / (f"{aid}.draft.html" if meta.get("draft") else f"{aid}.html")
    out.write_text(page)
    return out


if __name__ == "__main__":
    ids = sys.argv[1:] or sorted(p.stem for p in (SRC / "atlases").glob("*.json"))
    build_engine()
    for i in ids:
        p = build_page(i); print("built", p.relative_to(ROOT), p.stat().st_size // 1024, "KB")

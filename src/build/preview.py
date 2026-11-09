"""Make a single self-contained HTML file of a built atlas (styles and scripts inlined) to share as a preview.

  python3 src/build/preview.py renal-physio-1 [more ids] --out /some/dir
Uses docs/<folder>/<id>.html, or <id>.draft.html for drafts.
"""
import sys, re, json, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2]
DOCS, SRC = ROOT / "docs", ROOT / "src"


def preview(aid, out_dir):
    meta = json.loads((SRC / "atlases" / f"{aid}.json").read_text())
    folder = DOCS / meta["lib"]["folder"]
    page = folder / (f"{aid}.draft.html" if meta.get("draft") else f"{aid}.html")
    s = page.read_text()
    css = lambda f: "<style>" + (DOCS / f).read_text() + "</style>"
    js = lambda f: "<script>" + (DOCS / f).read_text().replace('new URL(".", document.currentScript.src)', 'new URL("./", location.href)') + "</script>"
    s = re.sub(r'<link[^>]*href="\.\./design/sb\.css"[^>]*>', lambda m: css("design/sb.css"), s)
    s = re.sub(r'<link[^>]*href="\.\./atlas/atlas\.css"[^>]*>', lambda m: css("atlas/atlas.css"), s)
    for f in ("app.js", "atlas/core.js", "atlas/render.js"):
        s = re.sub(r'<script[^>]*src="\.\./' + re.escape(f) + r'"[^>]*></script>', lambda m, f=f: js(f), s)
    for c in meta.get("css", []):
        s = re.sub(r'<link[^>]*href="\.\./atlas/' + re.escape(c) + r'"[^>]*>', lambda m, c=c: css("atlas/" + c), s)
    s = re.sub(r'<link[^>]*(manifest|icon-180)[^>]*>', "", s)
    out = pathlib.Path(out_dir) / f"{meta['h1'].replace(' ', '-').replace('&', 'and').replace('–', '-')}.html"
    out.write_text(s)
    return out


if __name__ == "__main__":
    a = sys.argv[1:]; out = a[a.index("--out") + 1] if "--out" in a else "."
    for i in [x for x in a if x != "--out" and x != out]:
        print(preview(i, out))

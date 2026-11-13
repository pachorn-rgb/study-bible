"""Build the standalone KUB pages (kub-anatomy, kub-histology) from src/.

    python3 src/build/build_kub.py             # both
    python3 src/build/build_kub.py kub-anatomy # one

These two pages do NOT use the shared atlas engine (core.js / render.js).
They are self-contained applications with their own CSS and renderer, so they
are assembled here rather than by build.py. The split is:

    src/engine/<id>.shell.html   page shell + <style>; @@SCRIPT@@ marks the inline script
    src/atlases/<id>.helpers.js  page-specific drawing helpers
    src/atlases/<id>.js          SEC.push content  <- THE EDITABLE SURFACE
    src/engine/<id>.render.js    page renderer

Assembling in that order reproduces the current docs/ page byte for byte.
"""
import sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2]
SRC, DOCS = ROOT / "src", ROOT / "docs"
IDS = ["kub-anatomy", "kub-histology", "kub-embryology", "nephron-pathway"]
OPEN_TAG, CLOSE_TAG = "<script>", "</script>"


def build_page(aid):
    """Assemble one page. kub-anatomy and kub-histology are split four ways
    (shell / helpers / content / renderer); kub-embryology and nephron-pathway
    are bespoke apps whose code and data interleave, so they keep one script
    file and are split shell / script only."""
    shell = (SRC / "engine" / f"{aid}.shell.html").read_text()
    assert "@@SCRIPT@@" in shell, f"{aid}: shell is missing the @@SCRIPT@@ marker"
    helpers = SRC / "atlases" / f"{aid}.helpers.js"
    render = SRC / "engine" / f"{aid}.render.js"
    script = (OPEN_TAG
              + (helpers.read_text() if helpers.exists() else "")
              + (SRC / "atlases" / f"{aid}.js").read_text()
              + (render.read_text() if render.exists() else "")
              + CLOSE_TAG)
    out = DOCS / "renal" / f"{aid}.html"
    out.write_text(shell.replace("@@SCRIPT@@", script))
    return out


if __name__ == "__main__":
    for i in sys.argv[1:] or IDS:
        p = build_page(i)
        print("built", p.relative_to(ROOT), p.stat().st_size // 1024, "KB")

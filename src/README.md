# src — how the atlases and question bank are made

Everything the app shows lives in `docs/` (GitHub Pages). This folder holds the **sources** that generate it.
Edit here, rebuild, check, then commit both `src/` and `docs/`.

```
src/
  engine/       shared atlas engine pieces (layout, drawing helpers, mind map, renderer)
  atlases/      one atlas = <id>.js (content) + <id>.json (hero text, sources, library entry, "draft")
  questions/    question generators: <name>.py per atlas + cases.py (Case Ladder)
  build/        build.py · integrate.py · questions.py
  test/         check.js (run before every push)
```

## Workflow for a new or edited atlas
```bash
python3 src/build/build.py <id>        # docs/atlas/* (shared engine) + docs/<folder>/<id>.html
python3 src/build/integrate.py <id>    # thumbnail, library.json entry, search index, sw.js cache + version bump
python3 src/build/questions.py        # review topics (checklist) + MCQs/boss/cases/Dx → docs/q/*.json
node src/test/check.js                 # data + page smoke test; must print "all checks passed"
```
`"draft": true` in an atlas's json keeps it out of the app (built locally for preview only).

## Atlas content (`atlases/<id>.js`)
Push sections with `SEC.push({id, k: groupKey, t: title, mm: mind-map label, drugs, act, leg, draw, notes})`,
name groups in `GN`, list supplementary sections in `const EXTRA=[...]` (shown as "เสริม").
Drawing helpers come from `engine/atlas-core.js` + `engine/helpers.js` (`T`, `psvg`, `cards`, `flowD`, `panel`, `pill`, `tbl`, …).
Source badges in notes: `S.k` Katzung · `S.p` Pharmacotherapy · `S.r` Robbins · `S.h` Harrison · `S.x` general knowledge.

## Shared engine
Built atlases load `docs/atlas/atlas.css`, `core.js` (before content) and `render.js` (after content),
so a fix in `src/engine/` reaches every built atlas after `build.py`.
The older hand-made renal atlases (Guyton, Harrison, Robbins Ch 20–21, KUB anatomy/histology/embryology, nephron pathway)
are standalone files in `docs/renal/` and are not generated from here.

## Question bank
`docs/q/index.json` lists the chapter parts; each `docs/q/<chapter>.json` holds `{topics, boss, cases, dx}`.
Renal's hand-written questions live directly in `docs/q/renal.json`; generators only replace their own ids.
See the docstring of `build/questions.py` for the generator format.

# Study Bible — project rules

The app lives in `docs/` (GitHub Pages). It exists to **review, test and challenge**, so every new atlas or new content must also feed the game layer — never ship an atlas alone.

**Benchmark = the Renal chapter.** Every system must end up with the same feature set as Renal: discipline tabs, review topics, MCQs, boss, several Case Ladder cases, Dx Daily entries (once pathology exists), resources.

## Workflow
Sources and build scripts are in `src/` — see `src/README.md`. Never hand-edit generated atlas pages in `docs/`; edit `src/` and rebuild. Run `node src/test/check.js` before every push.

## Checklist for every new atlas / content
1. **Atlas page** in `docs/<system>/`, plus module entry in `library.json` (thumb, topics, ref).
2. **Review topics**: one `checklist` item per atlas topic in the chapter (`{id:"<module>:<hash>", sub, t, link:{m,h}}`). Without these the chapter has no stars, review run, boss or scope entry.
3. **MCQs**: ≥ 2 per topic (generator in `src/questions/`, output `docs/q/<chapter>.json`) (`{q,o[4],a,e}`). These feed Review, Blitz, Survival, Ghost, Exam, Daily and the Mistake Bank.
4. **Boss**: one per chapter in `docs/q/<chapter>.json → boss` (`title{th,en}, case, pass, qs[6]`).
5. **Case Ladder**: at least one multi-step case per chapter in `src/questions/cases.py` (steps link `t` to a checklist id).
6. **Dx Daily** (`dx`/`dxl`) is for disease diagnosis — add entries when pathology content is added.
7. Search index, `sw.js` FILES + `VERSION` (done by `integrate.py`).
8. Independent fact-check of new content before pushing.

## References (integrate, no primary/secondary book)
Topic headings follow **First Aid for the USMLE Step 1**; content integrates these books, each fact badged with its source:
- Anatomy: Gray's Anatomy + Grant's Atlas + Netter
- Embryology: Langman + The Developing Human (Moore)
- Histology: Wheater + Junqueira + diFiore
- Physiology: Guyton & Hall + Boron
- Pathology: Robbins
- Pharmacology: Katzung + Pharmacotherapy (Principles & Practice)
The user will announce changes to this list.

## Patch notes
Every release (sw.js VERSION bump) needs a matching entry at the top of `docs/changelog.json` (`{v, date, th:[...]}`) written for the user in Thai.
The app shows unseen entries on open and the full history in Settings › มีอะไรใหม่. `check.js` fails if the newest entry ≠ VERSION.

## Style
- Chapters and headings follow First Aid (USMLE) order; extra content goes in a "เสริม" group.
- Same theme and standard across all atlases; no lecturer names anywhere.
- Polished, bug-free and fast beats more features.

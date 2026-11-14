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
Topic headings follow **First Aid for the USMLE Step 1**, with clinical topics added from **First Aid for the USMLE Step 2 CK**; content integrates these books, each fact badged with its source:
- Anatomy: Gray's Anatomy + Grant's Atlas + Netter
- Embryology: Langman + The Developing Human (Moore)
- Histology: Wheater + Junqueira + diFiore
- Physiology: Guyton & Hall + Boron
- Pathology: Robbins
- Pharmacology: Katzung + Pharmacotherapy (Principles & Practice)
- Every discipline: Harrison as a supplementary clinical source (badge H)
The user will announce changes to this list.

## Patch notes
Every release (sw.js VERSION bump) needs a matching entry at the top of `docs/changelog.json` (`{v, date, th:[...]}`) written for the user in Thai.
The app shows unseen entries on open and the full history in Settings › มีอะไรใหม่. `check.js` fails if the newest entry ≠ VERSION.

## Style
- Chapters and headings follow First Aid (USMLE) order; extra content goes in a "เสริม" group.
- Same theme and standard across all atlases; no lecturer names anywhere.
- Polished, bug-free and fast beats more features.

### Language
Thai explains, English names. Aim for **≈45% Thai characters** per atlas file;
`check.js` fails any atlas over 55%.
- **Always English**: disease names, drug names, enzymes, anatomical structures,
  cells, transporters, lab tests, signs and syndromes — anything a textbook or an
  exam question would print in English. Write `myocardial infarction`, not
  `กล้ามเนื้อหัวใจขาดเลือด`; `myelosuppression`, not `ไขกระดูกกด`.
- **Always English**: every topic title (`t:`), card label, table header, group
  name (`GN`) and figure caption.
- **Thai**: the connective prose that explains mechanism, reason and consequence —
  the part that makes the English terms make sense.

### Pictures
A `draw()` must earn its space. Decide per topic:
- **Draw the real thing** when the content has shape, position or containment —
  organelles, tissue layers, a route a substance takes. The picture then says
  something the notes cannot.
- **A table** (`tbl`) when the content is items × attributes. A table needs at
  least two genuinely comparable columns; one content column is a list, not a table.
- **No picture at all** when the content is a list of facts. Omit `draw`
  entirely — the engine then renders the notes full width with their own heading.
  This is the right answer more often than it looks.

A stack of captioned text boxes is never the answer: it costs more room than a list,
shrinks the text and tells the reader nothing new. The `cards()` helper that used to
draw them has been removed, and `check.js` fails any new block of them.

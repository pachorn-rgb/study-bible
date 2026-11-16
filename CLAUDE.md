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
- Microbiology & Parasitology: Murray's Medical Microbiology, with Sherris as a second
  bacteriology source and Paniker / Markell & Voge for parasitology; Harr for laboratory
  diagnosis. Guideline-dependent statements are flagged and cite IDSA, CLSI or EUCAST.
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
  name (`GN`) and figure caption — and every structure, property and process name
  inside a figure. A leader label is `English name` on the first line; only the gloss
  line under it is Thai. Write `antiphagocytic`, not `กันการถูกกลืนกิน`; `thin wall`,
  not `ผนังบาง`.
- **Thai**: the connective prose that explains mechanism, reason and consequence —
  the part that makes the English terms make sense.

### Abbreviations
`src/engine/abbr.js` holds every abbreviation the reader may meet:
- **`ABBR`** maps it to its expansion. The renderer spells it out **once per topic**,
  at its first appearance in the notes, as `expansion (ABBR)`. Anything that appears
  only in a table, a heading or the figure is listed in a small key under the notes.
  So write the abbreviation plainly in the source — do not expand it by hand.
- **`ABBR_OK`** is the never-expand list: ion and formula fragments, gene and protein
  symbols, trial names, and abbreviations read as words.
`check.js` fails on any abbreviation in a built page that is in neither list, so a new
abbreviation means one line in `abbr.js`. An author may also define one in place —
`Vein → Artery → Pelvis (VAP)` — and the check accepts that.
The rule covers **every chapter**.

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
draw them has been removed, and `check.js` fails any new block of them. Text that would
have gone in such a box goes under a thin rule (`.m-sep`) as a heading line plus a gloss
line, or on a leader line pointing at the thing it describes.

#### Figure language
Artistic quality counts. A figure is judged on whether it looks like the thing, not only
on whether it is labelled correctly. The standard was set by the glomerular-disease EM
figures and extended in `src/atlases/_micro-helpers.js` + `src/engine/micro.css`:
- **Draw the structure, not a swatch of it.** A membrane is a bilayer with heads and
  tails; a wall is woven strands with cross-links; a sugar is a ring; a phage has facets,
  a striated sheath and fibres. The reader should be able to see the difference between
  two things without reading the labels.
- **One wave function per cross-section.** Every layer undulates off the same baseline so
  the picture reads as one piece of tissue instead of stacked rectangles.
- **Nothing is geometrically perfect.** Cell outlines, blobs and loops come from a seeded
  wobble, so no two are identical and none is a plain ellipse.
- **Texture.** Cytoplasm gets grain and ribosomes; fills get a soft inner shade and one
  specular highlight. A flat tint reads as plastic.
- **One accent at a time** on a quiet ground. Where the teaching point is shape, every
  item takes the same colour so that shape is the only variable.
- **Labels are leader lines** to the structure they name: a thin line, a dot on the
  structure, the English name in bold, one Thai gloss line under it.
- **Comparisons are drawn together.** If the topic is "A versus B", A and B go in one
  figure on a shared baseline — never behind tool chips, because something you have to
  click to see is not a comparison.
- Per-chapter figure CSS goes in `src/engine/<chapter>.css` and is attached with
  `"css": ["<chapter>.css"]` in the atlas meta, so no other chapter is affected.

# Study Bible — project rules

The app lives in `docs/` (GitHub Pages). It exists to **review, test and challenge**, so every new atlas or new content must also feed the game layer — never ship an atlas alone.

## Checklist for every new atlas / content
1. **Atlas page** in `docs/<system>/`, plus module entry in `library.json` (thumb, topics, ref).
2. **Review topics**: one `checklist` item per atlas topic in the chapter (`{id:"<module>:<hash>", sub, t, link:{m,h}}`). Without these the chapter has no stars, review run, boss or scope entry.
3. **MCQs**: ≥ 2 per topic in `questions.json → topics[<id>]` (`{q,o[4],a,e}`). These feed Review, Blitz, Survival, Ghost, Exam, Daily and the Mistake Bank.
4. **Boss**: one per chapter in `questions.json → boss[<chapterId>]` (`title{th,en}, case, pass, qs[6]`).
5. **Case Ladder**: at least one multi-step case per chapter in `questions.json → cases` (steps link `t` to a checklist id).
6. **Dx Daily** (`dx`/`dxl`) is for disease diagnosis — add entries when pathology content is added.
7. Search index (`search-index.json`), `sw.js` FILES + bump `VERSION`.

## Style
- Chapters and headings follow First Aid (USMLE) order; extra content goes in a "เสริม" group.
- Same theme and standard across all atlases; no lecturer names anywhere.
- Polished, bug-free and fast beats more features.

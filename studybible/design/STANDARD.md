# Study Bible · atlas standard (v1)

Every atlas page in the app follows these rules so the whole library reads as one product.

## Files
- Link `../design/sb.css` and `../app.js` in every atlas. They supply the tokens, themes, text size, accent, and label quiz.
- Start every page with `<!doctype html>` and `<meta charset="utf-8">` so Thai text never garbles.

## Header (same on every atlas)
```html
<header class="sb-hero">
  <div class="sb-eyebrow">System · Discipline</div>   <!-- e.g. Renal · Physiology -->
  <h1>Atlas name</h1>
  <p class="sb-lede">One short paragraph: what the page shows and how to use it.</p>
  <div class="sb-sources"><span class="sb-src"><i class="guyton">G</i>Guyton &amp; Hall 13e · Ch 25</span></div>
</header>
```
Source badges: `guyton` G, `boron` B, `langman` L, `moore` M, `fa` FA, `grays` Gray, `lec` Lec, `junq` J (Junqueira), `wheat` W (Wheater), `difiore` dF (diFiore), `gen` Gen (general knowledge used to fill gaps).

## Colour
- UI uses only `--sb-*` tokens (bg, surface, surface2, ink, ink2, muted, line, accent).
- `--sb-accent` marks selection and focus only, never content.
- Content colours belong to the subject and stay the same across atlases:
  ions/substances (`--s-na`, `--s-k` …) in physiology pages, lineage/germ-layer colours in embryology pages.
- Every colour has a dark value; the app's light, dark and OLED themes must all stay readable.

## Type and size
- One font stack (`--sb-font`), weights 400/500/700/800. Mono (`--sb-mono`) only for data: weeks, CRL, values.
- UI text is in `rem` so the app's text-size setting scales it. Diagram text stays in SVG user units.

## Components
Cards: surface, 1px line, radius 18px, soft shadow. Toggles/chips: pill, pressed = ink fill.
Segmented controls: surface2 track, raised pressed segment. Tables: uppercase 11px headers, 1px row lines.

## Navigation inside an atlas
- Topics are listed **vertically**, grouped by organ/system, never in a horizontal scroller.
- 3 levels: group (collapsible, shows seen/total) → topic → sub-headings of the current topic's notes (jump links).
- Wide screens (≥1000px): sticky sidebar. Phones: a sticky bar "‹ [group · n/N, topic] ›" that opens the contents drawer.
- Every topic ends with ← previous / next → buttons so the atlas can be read in order.
- Seen topics get a check mark (stored per device).

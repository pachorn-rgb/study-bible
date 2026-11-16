# Scope references

Two machine-readable files that say what this app is supposed to cover. They are
reference data for planning and auditing a chapter — nothing here is shipped to
`docs/` and nothing here is read at build time.

## `medical-council-2024.json`

Part 1 ก. (Basic Medical Science Knowledge) of **เกณฑ์ความรู้ความสามารถในการประเมิน
เพื่อรับใบอนุญาตเป็นผู้ประกอบวิชาชีพเวชกรรม พ.ศ. 2567** — the Medical Council's
competency criteria, which is the blueprint the national licence exam is written from.

Every organ system in it has the same four parts, and they line up with the
disciplines this app already uses:

| code | the criteria's words | the app's modules |
|------|----------------------|-------------------|
| `.1` | โครงสร้าง การทำงาน และการเปลี่ยนแปลงที่สำคัญในแต่ละช่วงชีวิต | embryology · anatomy · histology · physiology |
| `.2` | สาเหตุ พยาธิกำเนิด พยาธิสรีรวิทยา พยาธิสภาพ การวินิจฉัยโรค | pathology |
| `.3` | การสืบค้นโรค รวมถึงการเก็บสิ่งส่งตรวจและการแปลผล | laboratory |
| `.4` | หลักการใช้กลุ่มยา…อย่างสมเหตุผล | pharmacology |

`.2` is itself always split the same six ways — hereditary/congenital/structural,
infectious/inflammatory/immunologic, traumatic/mechanical, neoplastic, metabolic/
regulatory, vascular. A pathology module that follows those six headings is
following the exam.

`chapters` maps each code prefix to the app's chapter ids.

**How it was made, and what is wrong with it.** The PDF is a flatbed scan with no
text layer, so the pages were rasterised at 250 dpi and read with tesseract
(`tha+eng`), then parsed by `parse-criteria.py`. OCR and the two-column disease
lists lose some leaf items and garble some words (`Lune parenchyma`, `turnor`).
Treat the leaf lists as **a floor, not a transcript**: when a chapter is being
built, read the page image for that code — every entry carries its `p` page
number — before relying on a single line.

## `lesson-plans.json`

The owner's own courses: each session title and the numbered learning objectives
under it, from the Siam University student guides, with `pdftotext -layout` and
`parse-lesson-plans.py`. Eleven courses, 211 sessions, about 1,500 objectives.
These are what his exams are actually set from, so they decide depth; the Medical
Council file decides breadth.

Worth knowing: the courses are **per system**, and each one carries its own
microbiology, laboratory and clinical-skills sessions. That is why the app keeps
`renal-micro`, `renal-lab` and `renal-clinical` inside the Renal chapter instead
of building one big Microbiology chapter, and new chapters should follow the same
shape.

## Keeping them current

Both files are regenerated from the source PDFs, not hand-edited. The parsers take
a directory of extracted text and write the JSON; see the top of each script.

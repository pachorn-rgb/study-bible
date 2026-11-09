/* Boron & Boulpaep (Medical Physiology, Ch 33–40) points integrated into the renal physiology sections.
   Each entry adds a short "molecular / quantitative detail" list to that section's notes, badged B. */
const BORON={
 overview:["ไตแต่ละข้างมี nephron ประมาณ 0.8–1.2 ล้านหน่วย · ไตได้เลือดราว 20% ของ cardiac output ทั้งที่หนักไม่ถึง 0.5% ของน้ำหนักตัว"],
 urineform:["<b>Glomerulotubular balance</b>: proximal tubule ดูดกลับ Na⁺ เป็นสัดส่วนคงที่ของปริมาณที่กรองมา แม้ GFR เปลี่ยน · ช่วยให้ Na⁺ ที่ไหลไปส่วนปลายไม่แกว่งตาม GFR"],
 gfr:["Slit diaphragm ระหว่าง foot process สร้างจากโปรตีน <b>nephrin</b> (และ podocin) · nephrin กลายพันธุ์ → congenital nephrotic syndrome แบบฟินแลนด์ (Finnish-type nephrosis)"],
 rbf:["เลือดที่ไปไต (RBF) ราว 90% เลี้ยง cortex · medulla ได้เพียงราว 10% ผ่าน vasa recta จึงมี O₂ ต่ำและไวต่อการขาดเลือด"],
 autoreg:["ตัวกลางของ tubuloglomerular feedback คือ <b>ATP/adenosine</b> จาก macula densa: NaCl มาก → adenosine จับ A1 receptor ที่ afferent arteriole → หดตัว → GFR ลด"],
 clearance:["ไตขับ PAH ออกได้ราว 90% ของที่มากับเลือด ไม่ใช่ 100% · clearance ของ PAH จึงเป็น effective RPF ซึ่งต่ำกว่า RPF จริงเล็กน้อย"],
 transport:["Glucose: <b>SGLT2</b> (ความจุสูง ความจับต่ำ) ใน S1–S2 ดูดกลับส่วนใหญ่ · <b>SGLT1</b> (ความจับสูง) ใน S3 เก็บส่วนที่เหลือ · ยา SGLT2 inhibitor อาศัยจุดนี้"],
 pct:["ทางเข้าหลักของ Na⁺ ด้าน apical ใน proximal tubule คือ <b>NHE3</b> (แลก Na⁺ กับ H⁺) · ทำให้ดูด Na⁺ กลับพร้อมกับ reclaim HCO₃⁻ · Ang II กระตุ้น NHE3"],
 loop:["TAL: K⁺ ที่เข้ามาทาง NKCC2 รั่วกลับลง lumen ผ่าน <b>ROMK</b> → lumen เป็นบวก → ดัน Ca²⁺ และ Mg²⁺ ผ่านช่องระหว่างเซลล์ที่สร้างจาก <b>claudin-16 และ 19</b>","TAL สร้าง Tamm–Horsfall protein (uromodulin) ซึ่งเป็นแกนของ urinary casts"],
 distal:["Principal cell: Na⁺ เข้าทาง <b>ENaC</b> และ K⁺ ออกทาง ROMK (และ BK channel เมื่อปัสสาวะไหลเร็ว) · aldosterone เพิ่มทั้ง ENaC และ Na⁺/K⁺-ATPase","β-intercalated cell ดูด Cl⁻ กลับและหลั่ง HCO₃⁻ ผ่าน <b>pendrin</b>"],
 tubular:["Bartter มีหลายชนิดตามยีน: NKCC2, ROMK, ClC-Kb, barttin · Gitelman = NCC กลายพันธุ์ · Liddle = ENaC ไม่ถูกย่อยสลาย (ทำงานเกิน)"],
 adh:["ADH จับ V2 receptor → cAMP → นำ <b>AQP2</b> ขึ้น apical membrane · น้ำออกด้าน basolateral ทาง AQP3/AQP4","Nephrogenic DI แต่กำเนิด: V2 receptor กลายพันธุ์ (X-linked) หรือ AQP2 กลายพันธุ์"],
 urea:["ADH กระตุ้น urea transporter <b>UT-A1</b> (apical) และ UT-A3 ใน inner medullary collecting duct → urea สะสมใน medulla ช่วยการทำปัสสาวะเข้มข้น"],
 capimg:["Ca²⁺ ใน DCT เข้าทาง <b>TRPV5</b> · PTH และ vitamin D เพิ่มการทำงานของ TRPV5","PO₄ ดูดกลับใน proximal tubule ทาง NaPi-IIa · ทั้ง PTH และ <b>FGF23</b> (จาก osteocyte, ใช้ Klotho เป็น co-receptor) ลด NaPi-IIa → ขับ PO₄ มากขึ้น"],
 renalacid:["Proximal tubule reclaim HCO₃⁻ ที่กรองมาราว 80% ผ่าน NHE3 และ H⁺-ATPase · ส่วนปลายสร้าง HCO₃⁻ ใหม่"],
 ammonia:["NH₄⁺ สร้างจาก <b>glutamine</b> ใน proximal tubule · ได้ HCO₃⁻ ใหม่ 2 ตัวต่อ glutamine 1 ตัว · acidosis เรื้อรังเพิ่มการสร้าง (ammoniagenesis)"],
};
function applyBoron(){SEC.forEach(s=>{const L=BORON[s.id];if(!L||!s.notes)return;const f=s.notes;
 s.notes=()=>f()+`<h3>ลงลึก: กลไกและตัวเลข</h3><ul>${L.map(x=>`<li>${x} ${S.b}</li>`).join("")}</ul>`})}

/* Renal Physiology III · Electrolytes & acid–base — First Aid order, Guyton sections + FA-only topics */
//@include _renal-guyton-base.js
//@include _renal-boron.js
Object.assign(GN,{a:"Potassium & electrolytes",b:"Acid–base"});
(()=>{const G={potassium:"a",capimg:"a",natremia:"a",buffers:"b",resp:"b",renalacid:"b",ammonia:"b",abd:"b"};
 const M={potassium:"K⁺ balance & shifts",capimg:"Ca²⁺ · PO₄ · Mg²⁺",natremia:"Hypo/hypernatremia",buffers:"Buffers · H–H",resp:"Respiratory control",renalacid:"Renal H⁺ & new HCO₃⁻",ammonia:"Phosphate & NH₃ buffers",abd:"Acid–base disorders"};
 const m=new Map(SEC.map(s=>[s.id,s]));SEC.length=0;Object.keys(G).forEach(id=>{const s=m.get(id);s.k=G[id];s.mm=M[id];SEC.push(s)})})();

/* ---------- First Aid topics not covered by the Guyton sections ---------- */
SEC.splice(SEC.findIndex(s=>s.id==="natremia")+1,0,{id:"lytes",k:"a",t:"Electrolyte disturbances",mm:"Low vs high: signs",leg:[],
 draw:()=>{const R=[["Na⁺","คลื่นไส้, ซึม, สับสน, ชัก, coma","กระสับกระส่าย, ซึม, coma"],["K⁺","U wave, T แบน, arrhythmia, ตะคริว, อ่อนแรง","peaked T, QRS กว้าง, arrhythmia, อ่อนแรง"],["Ca²⁺","tetany, Chvostek, Trousseau, ชัก, QT ยาว","นิ่ว, ปวดกระดูก, ปวดท้อง, ปัสสาวะบ่อย, ซึมเศร้า"],["Mg²⁺","tetany, torsades, K⁺ และ Ca²⁺ ต่ำตาม","reflex ลด, ซึม, หัวใจเต้นช้า, ความดันต่ำ"],["PO₄³⁻","กระดูกบาง, osteomalacia, rickets","นิ่ว, metastatic calcification, Ca²⁺ ต่ำ"]];
  let b=`<rect x="8" y="8" width="624" height="${52+R.length*56}" rx="14" style="fill:var(--sb-surface);stroke:var(--sb-line)"/>`+T(140,36,"ต่ำ",{c:"bh"})+T(470,36,"สูง",{c:"bh"});
  b+=`<rect x="70" y="20" width="0" height="0"/>`;
  R.forEach(([e,lo,hi],j)=>{const y=52+j*56;b+=`<rect x="18" y="${y}" width="46" height="46" rx="12" style="fill:var(--sb-accent);opacity:.9"/>`+`<text x="41" y="${y+28}" text-anchor="middle" style="font:800 13px var(--sb-font);fill:#fff">${e}</text>`+
   `<rect x="72" y="${y}" width="270" height="46" rx="10" style="fill:#E8F0FB"/>`+`<rect x="352" y="${y}" width="270" height="46" rx="10" style="fill:#FCE3EA"/>`+wrapT(82,y+20,lo,40,"s")+wrapT(362,y+20,hi,40,"s")});
  return svg(b,`0 0 640 ${62+R.length*56}`)},
 notes:()=>`<ul><li>Na⁺ ผิดปกติแสดงอาการทางสมองเป็นหลัก เพราะน้ำเคลื่อนเข้าออกเซลล์สมอง · แก้ hyponatremia เรื้อรังเร็วเกินไป → osmotic demyelination ${S.x}</li>
<li>K⁺ ผิดปกติ → หัวใจและกล้ามเนื้อ ดู ECG ก่อนเสมอ ${S.x}</li><li>Hypercalcemia: "stones, bones, groans, thrones, psychiatric overtones" ${S.x}</li>
<li>Mg²⁺ ต่ำทำให้ K⁺ ต่ำแก้ไม่หาย (ROMK รั่ว) และ Ca²⁺ ต่ำ (PTH หลั่งน้อย) → ต้องแก้ Mg²⁺ ก่อน ${S.x}</li></ul>`});

SEC.splice(SEC.findIndex(s=>s.id==="lytes")+1,0,{id:"nawork",k:"a",t:"Sodium disorders: clinical work-up",mm:"Na⁺ work-up (CK)",leg:[],
 draw:()=>{const box=(x,y,w,t,s,c)=>`<rect class="box ${c||""}" x="${x-w/2}" y="${y-20}" width="${w}" height="${s?44:34}" rx="10"/>`+T(x,y-1,t,{c:"bh"})+(s?T(x,y+15,s,{c:"s"}):"");
  const ln=(x1,y1,x2,y2)=>`<path d="M${x1},${y1} L${x2},${y2}" style="stroke:var(--sb-line);stroke-width:2;fill:none"/>`;let b="";
  b+=box(410,30,240,"Hyponatremia","วัด serum osmolality ก่อน","ar");
  b+=box(100,112,170,"Osm สูง > 295","glucose, mannitol")+box(290,112,180,"Osm ปกติ","lipid/protein สูง (pseudo)")+box(600,112,190,"Osm ต่ำ < 280","hypotonic → ดู volume","vn");
  b+=ln(410,54,100,92)+ln(410,54,290,92)+ln(410,54,600,92);
  b+=box(450,200,130,"Hypovolemic","")+box(600,200,130,"Euvolemic","")+box(750,200,130,"Hypervolemic","");b+=ln(600,136,450,180)+ln(600,136,600,180)+ln(600,136,750,180);
  b+=wrapT(388,238,"FENa < 1%: GI loss, burns, third space",22,"s")+wrapT(388,290,"> 2%: diuretics, 1° adrenal insufficiency",22,"s")+wrapT(538,238,"urine osm > 100: SIADH, hypothyroid, 2° adrenal insuff.",20,"s")+wrapT(538,290,"< 100: polydipsia, beer potomania",20,"s")+wrapT(688,238,"FENa < 1%: HF, cirrhosis, nephrotic",20,"s")+wrapT(688,290,"> 2%: AKI / CKD",20,"s");
  return svg(b,"0 0 830 340")},
 notes:()=>`<h3>Hyponatremia</h3><ul><li>เริ่มที่ <b>serum osmolality</b>: สูงแปลว่ามีสารอื่นดึงน้ำ (เช่น น้ำตาลสูง: Na⁺ ลดราว 1.6 mEq/L ต่อ glucose ที่เพิ่ม 100 mg/dL) · ปกติ = pseudohyponatremia ${S.fa2}</li>
<li>Hypotonic แยกตาม volume แล้วใช้ FENa หรือ urine osmolality ตามแผนภาพ ${S.fa2}</li>
<li>รักษา: hypovolemic ให้ NS · euvolemic/hypervolemic จำกัดน้ำ ± diuretic · ชักหรือ Na⁺ ต่ำมากให้ 3% saline ${S.fa2}</li>
<li><b>เรื้อรัง = เป็นมา ≥ 48 ชม. หรือไม่ทราบระยะเวลา</b> (ไม่ทราบ → ถือว่าเรื้อรังไว้ก่อน) ${S.gl}</li>
<li>อัตราแก้ในผู้ที่ความเสี่ยงทั่วไป: ไม่เกิน <b>10–12 mEq/L ต่อ 24 ชม.</b> และไม่เกิน <b>18 ต่อ 48 ชม.</b> ${S.gl}${S.g}</li>
<li>ผู้เสี่ยงสูงต่อ ODS (ติดสุรา ขาดอาหาร K⁺ ต่ำ ตับแข็ง): ไม่เกิน <b>8 mEq/L ต่อ 24 ชม.</b> ${S.gl}</li>
<li>First Aid Step 2 CK ระบุ <b>&lt; 8–10 mEq/L/วัน</b> สำหรับ chronic ที่นิยามว่า &gt; 72 ชม. — ตัวเลขและนิยามต่างจากแนวทาง อย่าสลับกัน ${S.fa2}</li></ul>
<h3>Hypernatremia</h3><ul><li>ส่วนใหญ่เกิดจาก<b>เสียน้ำ</b> มากกว่าได้ Na⁺ เกิน · คนที่ดื่มน้ำเองไม่ได้ (ทารก ผู้ป่วยใส่ท่อ ผู้สูงอายุติดเตียง) เสี่ยงสูง ${S.fa2}</li>
<li>Urine osm ต่ำ < 300 → DI (แยก central/nephrogenic ด้วย water deprivation + desmopressin) · สูง > 600 → เสียน้ำนอกไต หรือได้ Na⁺ เกิน ${S.fa2}</li>
<li>Free water deficit = TBW × (Na⁺/140 − 1) · แก้ภาวะเรื้อรังช้าๆ ไม่เกิน 0.5 mEq/L/ชม. (กัน cerebral edema) · ถ้า volume ต่ำและสัญญาณชีพไม่คงที่ ให้ NS ก่อน ${S.fa2}</li></ul>`});
SEC.splice(SEC.findIndex(s=>s.id==="abd")+1,0,{id:"rta",k:"b",t:"Renal tubular acidosis",mm:"RTA types 1 · 2 · 4",leg:[],
 draw:()=>cards([["Type 1 · distal","α-intercalated cell หลั่ง H⁺ ไม่ได้ · urine pH > 5.5 · K⁺ ต่ำ · นิ่ว calcium phosphate","vn"],["สาเหตุ type 1","amphotericin B, autoimmune (Sjögren, SLE, RA), analgesic nephropathy, congenital",""],["Type 2 · proximal","PCT ดูด HCO₃⁻ กลับน้อย · urine pH < 5.5 เมื่อ HCO₃⁻ ในเลือดต่ำลงแล้ว · K⁺ ต่ำ · rickets/osteomalacia","ar"],["สาเหตุ type 2","Fanconi syndrome, multiple myeloma, carbonic anhydrase inhibitors",""],["Type 4 · hyperkalemic","aldosterone ต่ำหรือดื้อ · K⁺ สูง → สร้าง NH₃ น้อย · urine pH < 5.5","gl"],["สาเหตุ type 4","diabetic hyporeninism, ACEi/ARB, NSAIDs, heparin, K⁺-sparing diuretics, trimethoprim",""]]),
 notes:()=>`<ul><li>ทุกชนิดเป็น <b>normal anion gap (hyperchloremic) metabolic acidosis</b> ${S.x}</li>
<li>จำ K⁺: type 1 และ 2 ต่ำ · type 4 สูง · แยก 1 กับ 2 ด้วย urine pH (type 1 ทำปัสสาวะเป็นกรดไม่ได้เลย) ${S.x}</li>
<li>Type 4 พบบ่อยที่สุดในผู้ใหญ่ โดยเฉพาะเบาหวานที่มีไตเสื่อม ${S.x}</li></ul>`});
applyBoron();

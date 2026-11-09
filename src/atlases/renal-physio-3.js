/* Renal Physiology III · Electrolytes & acid–base — First Aid order, Guyton sections + FA-only topics */
//@include _renal-guyton-base.js
Object.assign(GN,{a:"Potassium & electrolytes",b:"Acid–base",c:"Kidney disease (Guyton)"});
(()=>{const G={potassium:"a",capimg:"a",natremia:"a",buffers:"b",resp:"b",renalacid:"b",ammonia:"b",abd:"b",aki:"c",ckd:"c"};
 const M={potassium:"K⁺ balance & shifts",capimg:"Ca²⁺ · PO₄ · Mg²⁺",natremia:"Hypo/hypernatremia",buffers:"Buffers · H–H",resp:"Respiratory control",renalacid:"Renal H⁺ & new HCO₃⁻",ammonia:"Phosphate & NH₃ buffers",abd:"Acid–base disorders",aki:"AKI",ckd:"CKD"};
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

SEC.splice(SEC.findIndex(s=>s.id==="abd")+1,0,{id:"rta",k:"b",t:"Renal tubular acidosis",mm:"RTA types 1 · 2 · 4",leg:[],
 draw:()=>cards([["Type 1 · distal","α-intercalated cell หลั่ง H⁺ ไม่ได้ · urine pH > 5.5 · K⁺ ต่ำ · นิ่ว calcium phosphate","vn"],["สาเหตุ type 1","amphotericin B, autoimmune (Sjögren, SLE, RA), analgesic nephropathy, congenital",""],["Type 2 · proximal","PCT ดูด HCO₃⁻ กลับน้อย · urine pH < 5.5 เมื่อ HCO₃⁻ ในเลือดต่ำลงแล้ว · K⁺ ต่ำ · rickets/osteomalacia","ar"],["สาเหตุ type 2","Fanconi syndrome, multiple myeloma, carbonic anhydrase inhibitors",""],["Type 4 · hyperkalemic","aldosterone ต่ำหรือดื้อ · K⁺ สูง → สร้าง NH₃ น้อย · urine pH < 5.5","gl"],["สาเหตุ type 4","diabetic hyporeninism, ACEi/ARB, NSAIDs, heparin, K⁺-sparing diuretics, trimethoprim",""]]),
 notes:()=>`<ul><li>ทุกชนิดเป็น <b>normal anion gap (hyperchloremic) metabolic acidosis</b> ${S.x}</li>
<li>จำ K⁺: type 1 และ 2 ต่ำ · type 4 สูง · แยก 1 กับ 2 ด้วย urine pH (type 1 ทำปัสสาวะเป็นกรดไม่ได้เลย) ${S.x}</li>
<li>Type 4 พบบ่อยที่สุดในผู้ใหญ่ โดยเฉพาะเบาหวานที่มีไตเสื่อม ${S.x}</li></ul>`});

const EXTRA=["aki","ckd"];

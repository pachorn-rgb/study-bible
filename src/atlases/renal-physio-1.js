/* Renal Physiology I · Fluids, filtration & clearance — First Aid order, Guyton sections */
//@include _renal-guyton-base.js
//@include _renal-boron.js
/* B9.1.2(9) renal metabolism and oxygen consumption — named in the criteria, and the one
   number that explains why the kidney is both the hungriest organ per gram and the one that
   survives a fall in its own blood flow better than any other. */
SEC.push({id:"o2",k:"b",t:"Renal metabolism & oxygen consumption",mm:"Renal O₂ consumption",leg:[],
 draw:()=>{const A=axes(96,34,470,216,[0,20],[0,3],[0,5,10,15,20],[0,1,2,3],
   "Na⁺ reabsorption (mEq/min per 100 g kidney)","O₂ consumption");
  const basal=0.35, slope=(2.6-basal)/18;
  return psvg(A.g
   + line([[A.X(0),A.Y(basal)],[A.X(20),A.Y(basal)]],"",{dash:1})
   + line([[A.X(0),A.Y(basal)],[A.X(18),A.Y(basal+slope*18)]],"na")
   + `<circle class="ion" cx="${A.X(16)}" cy="${A.Y(basal+slope*16)}" r="7" style="fill:var(--s-na)"/>`
   + T(A.X(16)-10,A.Y(basal+slope*16)-14,"normal kidney",{a:"end",c:"bh"})
   + T(A.X(20),A.Y(basal)-10,"basal — keeping tubular cells alive",{a:"end",c:"s"})
   + `<circle class="ion" cx="${A.X(0)}" cy="${A.Y(basal)}" r="7" style="fill:var(--sb-bad)"/>`
   + T(A.X(0)+12,A.Y(basal)+22,"filtration stops → about one quarter of normal",{a:"start",c:"bad"}),
   "0 0 640 300")},
 notes:()=>`<ul>
<li>ไตได้เลือด <b>ราว 1,100 mL/min คิดเป็น 22% ของ cardiac output</b> ทั้งที่หนักรวมกันเพียง 0.4% ของน้ำหนักตัว — เลือดที่มากขนาดนี้ไม่ได้มีไว้เลี้ยงเนื้อไต แต่มีไว้<b>กรอง</b> ${S.g}</li>
<li>ออกซิเจนที่ไตใช้แทบทั้งหมดหมดไปกับ <b>active sodium reabsorption</b> ที่ท่อไต กราฟจึงเป็นเส้นตรง — ยิ่ง reabsorb sodium มาก ยิ่งใช้ออกซิเจนมาก และเพราะปริมาณ sodium ที่ถูก reabsorb ผูกกับ GFR โดยตรง <b>renal O₂ consumption จึงแปรตาม GFR</b> ${S.g}</li>
<li>จุดตัดแกนที่ไม่เป็นศูนย์คือหัวใจของเรื่อง เมื่อ glomerular filtration หยุดสนิท การ reabsorb sodium ก็หยุดตาม ออกซิเจนที่ใช้ลดลงเหลือ<b>ราวหนึ่งในสี่ของปกติ</b> ซึ่งเป็นความต้องการพื้นฐานของเซลล์ไตเองเท่านั้น ${S.g}</li>
<li>ผลตามมาคือ <b>ไตทนต่อการที่เลือดไปเลี้ยงลดลงได้ดีกว่าอวัยวะอื่น</b> เพราะงานที่ใช้ออกซิเจนลดลงไปพร้อมกับเลือดที่ลดลง แต่เมื่อเลือดลดต่ำกว่า <b>ราว 20–25% ของปกติ</b> ความต้องการพื้นฐานก็ไม่ได้รับการตอบสนอง เซลล์จึงเริ่มขาดออกซิเจน ${S.g}</li>
<li>เลือดที่ไหลใน <b>vasa recta</b> ของ medulla น้อยกว่าใน cortex มาก ทั้งที่ thick ascending limb ซึ่งอยู่ตรงนั้นเป็นส่วนที่ปั๊ม sodium หนักที่สุด — medulla จึงเป็นบริเวณที่<b>ทำงานหนักที่สุดในที่ที่ออกซิเจนน้อยที่สุด</b> และเสียหายก่อนเมื่อเลือดไปเลี้ยงลดลง ${S.g}</li>
<li>เพราะเหตุนี้การวัด <b>arteriovenous oxygen difference</b> ของไตจึงต่ำ ทั้งที่ใช้ออกซิเจนต่อกรัมสูง — เลือดไหลผ่านมากจนดึงออกซิเจนออกไปเพียงส่วนน้อยของที่ขนมา ${S.g}</li></ul>`});

/* keep this atlas's sections, regroup them into First Aid headings */
Object.assign(GN,{a:"Fluid compartments",b:"Filtration & blood flow",c:"Clearance",d:"Fluid regulation"});
(()=>{const G={balance:"a",compartments:"a",composition:"a",measure:"a",osmosis:"a",shifts:"a",
  overview:"b",urineform:"b",gfr:"b",rbf:"b",autoreg:"b",o2:"b",clearance:"c",edema:"d",micturition:"d"};
 const M={balance:"Water balance",compartments:"Compartments",composition:"ECF vs ICF",measure:"Measuring volumes",osmosis:"Osmolarity & tonicity",shifts:"Fluid shifts",
  overview:"Kidney functions",urineform:"Filtration · reabsorption · secretion",gfr:"GFR determinants",rbf:"Renal blood flow",autoreg:"Autoregulation & TGF",o2:"Renal O₂ consumption",clearance:"Clearance · GFR · ERPF",edema:"Edema",micturition:"Micturition"};
 const m=new Map(SEC.map(s=>[s.id,s]));SEC.length=0;Object.keys(G).forEach(id=>{const s=m.get(id);s.k=G[id];s.mm=M[id];SEC.push(s)})})();
const EXTRA=["edema","micturition"];
applyBoron();

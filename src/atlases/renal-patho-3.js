/* Renal Pathology III · Kidney injury & failure — First Aid order;
   sections from Robbins Ch 20 and Harrison Ch 319/321–325/328/329 + FA-only topics */
(()=>{
//@include _renal-patho-helpers.js
//@include _renal-robbins20.js
})();
(()=>{
//@include _renal-patho-helpers.js
//@include _renal-harrison.js
})();

SEC.push({id:"papnec",k:"b",t:"Renal papillary & diffuse cortical necrosis",leg:[],
 draw:()=>tbl(["Lesion or cause","Detail"],[
 ["Papillary necrosis","papilla ขาดเลือดแล้วหลุด → ปัสสาวะเป็นเลือด, ปวดสีข้าง, อาจอุดท่อไต"],
 ["Causes of papillary necrosis","sickle cell disease/trait, pyelonephritis เฉียบพลัน, analgesics (NSAIDs), เบาหวาน"],
 ["Diffuse cortical necrosis","cortex ทั้งสองข้างขาดเลือดทั่ว · หลอดเลือดหดเกร็ง + DIC"],
 ["Causes of cortical necrosis","ภาวะแทรกซ้อนทางสูติกรรม (รกลอกตัวก่อนกำหนด), septic shock"]]),
 notes:()=>`<ul><li>Medulla ส่วน papilla ได้เลือดน้อยอยู่แล้ว จึงขาดเลือดง่ายเมื่อมีปัจจัยร่วม ${S.x}</li><li>Papilla ที่หลุดอาจเห็นเป็นชิ้นเนื้อในปัสสาวะ หรือ "ring sign" ในภาพถ่ายรังสี ${S.x}</li><li>Diffuse cortical necrosis ทำให้ไตวายเฉียบพลันที่มักไม่ฟื้น ${S.x}</li></ul>`});

/* B9.2.5 anuria / oliguria / polyuria — the criteria names them as a group-1-2 problem, and
   the thresholds are the whole content, so the picture is the scale itself. */
SEC.push({id:"urineout",k:"a",t:"Anuria, oliguria & polyuria",mm:"Urine output",leg:[],
 draw:()=>{const L=v=>80+(Math.log10(v)-Math.log10(50))/(Math.log10(10000)-Math.log10(50))*500;
  const band=(a,b,c,lab)=>`<rect class="box ${c}" x="${L(a)}" y="100" width="${L(b)-L(a)}" height="36" rx="6"/>`+T((L(a)+L(b))/2,123,lab,{c:"bh"});
  const mid=L(5477);
  return psvg(
   T(320,42,"The number comes first — then ask why",{c:"h"})
   + band(50,100,"ar","anuria")+band(100,400,"gl","oliguria")+band(400,3000,"vn","normal")+band(3000,10000,"bl","polyuria")
   + `<path class="ax" d="M74,146 H586"/>`
   + [100,400,1000,3000,10000].map(v=>`<line class="gl" x1="${L(v)}" y1="98" x2="${L(v)}" y2="152"/>`+T(L(v),170,v.toLocaleString(),{c:"s m"})).join("")
   + T(320,196,"mL of urine in 24 hours",{c:"s"})
   + `<path class="ld" d="M${mid},138 L${mid},206 M360,232 H548 M360,232 L360,248 M548,232 L548,248"/>`
   + T(454,224,"measure urine osmolality",{c:"bh"})
   + T(360,266,"< 250 mosmol/L",{c:"s"})+T(360,286,"water diuresis",{c:"bh"})
   + T(548,266,"higher",{c:"s"})+T(548,286,"solute diuresis",{c:"bh"})
   + T(300,316,"anuria is almost never a slow medical cause — look for obstruction or a vascular catastrophe",{c:"bad"}),
   "0 0 640 332")},
notes:()=>mc("B9.2.5",1)+`<ul>
<li><b>ตัวเลขที่ต้องจำ</b> — <b>oliguria คือปัสสาวะน้อยกว่า 400 mL ใน 24 ชั่วโมง</b> และ <b>anuria คือแทบไม่มีปัสสาวะเลย คือน้อยกว่า 100 mL</b> ${S.h}</li>
<li>เหตุผลที่เส้นแบ่งอยู่ที่ 400 mL คือคนทั่วไปต้องขับของเสียที่ละลายน้ำได้ราว 600–800 mosmol ต่อวัน และไตเข้มข้นปัสสาวะได้สูงสุดราว 1,200 mosmol/L ปัสสาวะที่น้อยกว่านี้จึงขับของเสียออกไม่หมดไม่ว่าไตจะพยายามแค่ไหน ${S.h}</li>
<li><b>anuria แท้จริงบอกทางเดียว</b> — ไม่ใช่โรคไตค่อยเป็นค่อยไป แต่เป็นเหตุที่ปิดกั้นทันที ได้แก่ <b>การอุดกั้นทางเดินปัสสาวะทั้งสองข้าง</b> · หายนะทางหลอดเลือดอย่าง aortic dissection หรือหลอดเลือดแดงไตอุดตัน · renal vein thrombosis · cast nephropathy ใน myeloma · renal cortical necrosis · ATN ที่รุนแรง · RPGN ที่รุนแรง · และการใช้ NSAID ร่วมกับ ACE inhibitor หรือ ARB ${S.h}</li>
<li><b>polyuria คือมากกว่า 3,000 mL ต่อวัน</b> และต้องแยกจาก urinary frequency ที่ปัสสาวะบ่อยแต่ครั้งละน้อย ซึ่งประวัติอย่างเดียวมักแยกไม่ออก ต้องเก็บปัสสาวะ 24 ชั่วโมงจึงรู้ ${S.h}</li>
<li><b>แยก polyuria สองแบบด้วย urine osmolality</b> — ถ้าปัสสาวะเจือจาง คือต่ำกว่าราว 250 mosmol/L แปลว่าขับ<b>น้ำ</b> เกิดจากดื่มน้ำมากผิดปกติ หรือ ADH หลั่งไม่พอ หรือไตไม่ตอบสนองต่อ ADH · ถ้าปัสสาวะไม่เจือจางแปลว่าขับ<b>ตัวถูกละลาย</b> ${S.h}</li>
<li><b>solute diuresis ที่พบบ่อยมักเกิดจากการรักษาเอง</b> — mannitol · สารทึบรังสี · และอาหารโปรตีนสูงทางสายให้อาหารหรือทางหลอดเลือดที่เพิ่มการสร้าง urea · นอกจากนี้คือน้ำตาลในเลือดสูงจนล้นออกมาในปัสสาวะ ${S.h}</li>
<li>ในทางปฏิบัติ <b>ปริมาณปัสสาวะเป็นสัญญาณชีพของไต</b> — ใช้เป็นเกณฑ์หนึ่งในการวินิจฉัยและจัดระยะ AKI คู่กับ creatinine และเปลี่ยนแปลงให้เห็นก่อนผลเลือดเสมอ ${S.x}</li></ul>`});

/* B9.2.6 renal artery stenosis — the one vascular disorder the criteria names for the kidney.
   The drawing carries the asymmetry, which is the thing that makes the disease make sense. */
SEC.push({id:"ras",k:"d",t:"Renal artery stenosis",mm:"Renal artery stenosis",leg:[],
 draw:()=>psvg(
  `<rect class="box ar" x="300" y="40" width="30" height="250" rx="10"/>${T(315,28,"aorta",{c:"s m"})}
   <path d="M300,134 L252,140" style="stroke:var(--a-art);stroke-width:11;fill:none"/>
   <path d="M252,140 L234,142" style="stroke:var(--a-art);stroke-width:3.5;fill:none"/>
   <path d="M234,142 L206,146" style="stroke:var(--a-art);stroke-width:11;fill:none"/>
   ${T(243,120,"stenosis",{c:"bad"})}
   <ellipse class="box vn" cx="140" cy="150" rx="66" ry="80"/>
   ${T(140,138,"small and ischaemic",{c:"bh"})}${T(140,160,"renin ↑↑",{c:"bad"})}
   ${T(140,182,"arterioles protected",{c:"s"})}
   <path d="M330,150 L424,150" style="stroke:var(--a-art);stroke-width:11;fill:none"/>
   <ellipse class="box bl" cx="500" cy="150" rx="76" ry="94"/>
   ${T(500,138,"normal size",{c:"bh"})}${T(500,160,"takes the full pressure",{c:"s"})}
   ${T(500,182,"arteriolosclerosis",{c:"bad"})}
   ${T(320,290,"the kidney that causes the hypertension is the one spared from it",{c:"s"})}`,
  "0 0 640 304"),
 notes:()=>mc("B9.2.6",3)+`<ul>
<li><b>unilateral renal artery stenosis เป็นสาเหตุของความดันโลหิตสูงราว 2–5% ของผู้ป่วยทั้งหมด</b> และสำคัญเพราะเป็นกลุ่มน้อยที่<b>รักษาให้หายขาดได้ด้วยการผ่าตัด</b> ${S.r}</li>
<li><b>สาเหตุที่พบบ่อยที่สุดคือ atheromatous plaque ที่ปากหลอดเลือดแดงไต คิดเป็นราว 70%</b> พบในผู้ชายมากกว่า และเพิ่มขึ้นตามอายุและเบาหวาน · รองลงมาคือ <b>fibromuscular dysplasia</b> ซึ่งตรงกันข้ามคือพบในผู้หญิงและอายุน้อยกว่า มักอยู่ในช่วงอายุ 30–40 ปี ${S.r}</li>
<li><b>กลไกคือ renin</b> — ไตข้างที่ขาดเลือดอ่านว่าความดันต่ำจึงหลั่ง renin เพิ่ม การทดลองคลาสสิกของ Goldblatt แสดงว่าการรัดหลอดเลือดแดงไตในสุนัขทำให้ความดันสูงขึ้น และสูงขึ้นมากตามระดับที่รัด ${S.r}</li>
<li><b>ภาพทางพยาธิวิทยาคือความไม่สมมาตร</b> — ไตข้างที่ตีบเล็กลง มี ischaemic atrophy แบบกระจาย โกลเมอรูลัสอยู่ชิดกัน ท่อไตฝ่อ และมีพังผืดในเนื้อเยื่อระหว่างท่อ · แต่<b>หลอดเลือดแดงเล็กของไตข้างนั้นกลับถูกปกป้องจากความดันสูง</b>จึงมี arteriolosclerosis เพียงเล็กน้อย ส่วนไตอีกข้างที่รับความดันเต็ม ๆ กลับมี arteriolosclerosis รุนแรงกว่า ${S.r}</li>
<li><b>อาการทางคลินิกแทบไม่ต่างจากความดันโลหิตสูงทั่วไป</b> บางรายฟังได้ <b>bruit</b> บริเวณไต · การตรวจที่ช่วยได้คือ renin ในพลาสมาหรือในเลือดดำไต การตอบสนองต่อ ACE inhibitor การสแกนไต และ pyelography แต่<b>การยืนยันตำแหน่งที่ตีบต้องใช้ arteriography</b> ${S.r}</li>
<li>อัตราหายหลังผ่าตัดอยู่ที่ <b>70–80%</b> เมื่อเลือกผู้ป่วยอย่างเหมาะสม ${S.r}</li>
<li>เป็นโรค<b>กลุ่มที่ 3</b> ตามเกณฑ์แพทยสภา คือต้องนึกถึงและส่งต่อได้ ไม่ได้คาดหวังให้รักษาเอง — จุดที่ต้องนึกถึงคือความดันสูงที่คุมไม่ได้ด้วยยาหลายตัว ความดันสูงที่เริ่มในคนอายุน้อยหรืออายุมาก และ creatinine ที่ขึ้นหลังเริ่ม ACE inhibitor ${S.x}</li></ul>`});

Object.assign(GN,{a:"Acute kidney injury",b:"Interstitial & tubular injury",c:"Chronic kidney disease",d:"Renovascular disease",e:"Dialysis",f:"Kidney transplant"});
regroup({"ap-aki":"a","aki-def":"a","aki-cause":"a","aki-dx":"a","aki-mx":"a",urineout:"a",
 "tin-ain":"b",tin:"b",atn:"b",papnec:"b","tin-imm":"b","tin-chronic":"b",
 "ckd-stage":"c","ckd-lyte":"c","ckd-mbd":"c","ckd-sys":"c","ckd-slow":"c",
 nephrosclerosis:"d",ras:"d",tma:"d","tma-types":"d","tma-ssc":"d",
 hd:"e",hdcx:"e",pd:"e",ivn:"e","tx-imm":"f","tx-drug":"f","tx-inf":"f"},
 {"ap-aki":"Prerenal · intrinsic · postrenal","aki-def":"Definition & staging","aki-cause":"Causes","aki-dx":"Urinalysis & FENa","aki-mx":"Complications & management",urineout:"Urine output",
  "tin-ain":"Acute interstitial nephritis",tin:"Drug-induced TIN",atn:"Acute tubular necrosis",papnec:"Papillary & cortical necrosis","tin-imm":"Immune-mediated TIN","tin-chronic":"Chronic TIN",
  "ckd-stage":"CKD staging","ckd-lyte":"Electrolytes in CKD","ckd-mbd":"Renal osteodystrophy (CKD-MBD)","ckd-sys":"Consequences of renal failure","ckd-slow":"Slowing progression",
  nephrosclerosis:"Hypertensive nephrosclerosis",ras:"Renal artery stenosis",tma:"Vascular disease","tma-types":"Thrombotic microangiopathies","tma-ssc":"Scleroderma crisis · RVT",
  hd:"Hemodialysis",hdcx:"HD complications",pd:"Peritoneal dialysis",ivn:"Dialysis access","tx-imm":"Rejection","tx-drug":"Immunosuppression","tx-inf":"Infection & cancer after Tx"});
const EXTRA=["aki-mx","tin-imm","tin-chronic","ckd-slow","hd","hdcx","pd","ivn","tx-imm","tx-drug","tx-inf"];

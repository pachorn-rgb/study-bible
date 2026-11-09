/* Sections from the original harrison-ch319 atlas (all Harrison chapters for _renal-harrison). */

const tbl=(h,rows)=>`<table>${h?`<tr>${h.map(x=>`<th>${x}</th>`).join("")}</tr>`:""}${rows.map(r=>`<tr>${r.map(x=>`<td>${x}</td>`).join("")}</tr>`).join("")}</table>`;
/* stacked cards diagram: rows [[title, desc, tone]] */
function cards(R,o={}){const W=640,hh=o.h||(R.length>6?50:R.length>4?58:72),gap=o.gap||8;let b="",y=14;
 R.forEach(([n,dd,c])=>{b+=`<rect class="box ${c||""}" x="16" y="${y}" width="${W-32}" height="${hh}" rx="12"/>`+T(32,y+hh/2-3,n,{a:"start",c:"bh"})+T(32,y+hh/2+15,dd,{a:"start",c:"s"});y+=hh+gap});
 if(o.foot){b+=T(W/2,y+16,o.foot,{c:"h"});y+=26}return svg(b,`0 0 ${W} ${y+6}`)}
/* flow: steps left→right wrapping as boxes with arrows (vertical) */
function flow(R){let b="",y=14;R.forEach(([n,dd,c],i)=>{b+=`<rect class="box ${c||""}" x="80" y="${y}" width="480" height="56" rx="12"/>`+T(320,y+24,n,{c:"bh"})+T(320,y+43,dd,{c:"s"});
 if(i<R.length-1)b+=`<path class="arw" d="M320,${y+58} L320,${y+76}" marker-end="url(#ah)"/>`;y+=80});return svg(b,`0 0 640 ${y}`)}
/* horizontal bars [[label,value,display]] max */
function bars(R,max,o={}){let b="",y=16;R.forEach(([n,v,disp])=>{b+=T(16,y+14,n,{a:"start",c:"b"})+`<rect class="cbar on" x="16" y="${y+22}" width="${Math.max(4,v/max*560)}" height="20" rx="5"/>`+T(24+v/max*560,y+37,disp??v,{a:"start",c:"s"});y+=58});
 if(o.foot){b+=T(320,y+10,o.foot,{c:"s m"});y+=20}return svg(b,`0 0 640 ${y+4}`)}
function wrapT(x,y,s,n,c){const w=s.split(" ");const L=[];let cur="";w.forEach(t=>{if((cur+" "+t).trim().length>n&&cur){L.push(cur);cur=t}else cur=(cur+" "+t).trim()});if(cur)L.push(cur);
 return L.map((l,i)=>T(x,y+i*18,l,{a:"start",c})).join("")}
function cardsInline(y,R){return R.map(([a,b2],i)=>{const yy=y+i*34;return `<rect class="box" x="0" y="${yy}" width="640" height="30" rx="8"/>`+T(14,yy+20,a,{a:"start",c:"bh"})+T(626,yy+20,b2,{a:"end",c:"s"})}).join("")}

/* ================= Harrison 22e · Part 9 (Ch 319–331) ================= */
Object.assign(ST,{scr0:1.0,scr1:2.4,uo:0.4,uoh:8,una:12,pna:138,ucr:120,pcr:2.4,gG:"G3a",gA:"A2",txt:"early",stn:"caox",tma:"ttp"});
const HS=(ch,k,id,t,o)=>SEC.push(Object.assign({id,ch,k:ch+k,t,leg:[]},o));
const pill=(x,y,t,c)=>`<rect class="box ${c||""}" x="${x}" y="${y}" width="${Math.max(60,t.length*7+20)}" height="26" rx="13"/>`+T(x+Math.max(60,t.length*7+20)/2,y+18,t,{c:"s"});

/* ---------- 319 · Approach ---------- */
HS("319","a","ap-aki","Prerenal · intrinsic · postrenal",{
draw:()=>{let b="";const C=[["Prerenal","ประวัติขาดน้ำ/เสียเลือด, NSAID/ACEi/ARB, HF, cirrhosis","FENa ≤1% · U/P Cr ≥40 · UNa ≤10 · hyaline casts","vn"],["Intrinsic","sepsis, ischemia, nephrotoxins, GN, AIN, vascular","FENa 1–3% · U/P Cr ≤40 · UOsm ~iso · muddy brown casts","ar"],["Postrenal","BPH, stones, tumor, neurogenic bladder","hydronephrosis บน ultrasound · residual urine","gl"]];
 C.forEach(([n,a,c2,t],i)=>{const x=14+i*208;b+=`<rect class="box ${t}" x="${x}" y="14" width="196" height="250" rx="14"/>`+T(x+98,44,n,{c:"bb"})+wrapT(x+12,74,a,26,"s")+`<line x1="${x+12}" x2="${x+184}" y1="170" y2="170" style="stroke:var(--sb-line)"/>`+wrapT(x+12,192,c2,26,"s")});
 return svg(b,"0 0 640 280")},
notes:()=>`<h3>Table 319-1</h3><ul><li>เริ่มจากประวัติ ตรวจร่างกาย และ lab พื้นฐาน แล้วค่อยส่งตรวจเฉพาะ · ไม่ส่งตรวจกว้างๆ ก่อน ${S.h}</li>
 <li>Prerenal: FENa ≤1%, U/P creatinine ≥40, UNa ≤10 · intrinsic (ATN): FENa 1–3%, U/P Cr ≤40, urine osmolality ใกล้ plasma, muddy brown granular casts ${S.h}</li>
 <li>BUN/Cr ratio สูงใน prerenal เพราะ urea ถูกดูดกลับพร้อมน้ำ ${S.h}</li></ul>
 <h3>ผู้ป่วยโรค systemic</h3><ul><li>คัดกรอง microalbuminuria + eGFR ใน DM · คิดถึงไตเมื่อใช้ lithium, lead, aniline dyes (bladder cancer) ${S.h}</li></ul>`});
HS("319","a","ap-syn","Nephritic vs nephrotic: clinical clues",{
draw:()=>cards([["Nephritic","hematuria, RBC casts, HT, edema, azotemia · ดู C3/C4, ANCA, anti-GBM, ASO","ar"],["Nephrotic","proteinuria >3.5 g/วัน, albumin ต่ำ, edema, lipid สูง · thrombosis (RVT ใน membranous)","vn"],["Nephrotic crisis (เด็ก)","albumin <2 g/dL → ischemia ลำไส้ ปวดท้องเหมือน surgical abdomen","gl"],["ไตใหญ่ + proteinuria ใน CKD ระยะท้าย","diabetic nephropathy · amyloid · HIVAN · MN ที่มี RVT",""],["Secondary MN","NSAIDs, penicillamine, gold, mercury · solid tumor (lung, GI, breast, prostate) · syphilis, malaria, HBV",""]]),
notes:()=>`<ul><li>อายุ 20 ปีกับ nephrotic: MCD, FSGS หรือ MN ${S.h}</li>
 <li>Nephrotic เป็น hypercoagulable โดยเฉพาะ albumin &lt;2 g/dL · MN สัมพันธ์กับ <b>renal vein thrombosis</b> (เสีย antithrombin III, plasminogen, fibrinogen สูง) ${S.h}</li>
 <li>RVT: ปวดหลัง, ไตวาย, hematuria, ขาบวมมากขึ้น, pulmonary embolism ${S.h}</li>
 <li>Primary MN ~70% มี <b>anti-PLA2R</b> · หายเองได้บ่อยกว่า ${S.h}</li><li>Diabetic nephropathy เป็นเหตุให้เริ่ม dialysis มากที่สุด ${S.h}</li></ul>`});
HS("319","b","ap-hem","Hematuria & lower urinary tract",{
draw:()=>flow([["Hematuria (dipstick +)","แยก hemoglobinuria / myoglobinuria ด้วย microscopy",""],["มี RBC จริง?","exercise-induced: ตรวจซ้ำหลังพัก 1–2 สัปดาห์","vn"],["Glomerular?","RBC casts, dysmorphic RBC, proteinuria → thin BM, Alport, IgAN","ar"],["Non-glomerular","colic/flank pain → stone · clot → lower tract · ปวด + HT → embolus","gl"],["อายุ ≥40 เริ่มใหม่","urologic evaluation + cystoscopy",""]]),
notes:()=>`<ul><li>Flank pain + colic → นิ่วหรือการอุดตัน · flank pain ไม่มี colic → ไตบวม (obstruction, infection, AIN, acute GN) ${S.h}</li>
 <li>เลือดออกมากมี clot → ส่วนล่างมากกว่า · ปวดสีข้าง + HT อย่าลืม <b>arterial embolus/thrombosis</b> ${S.h}</li>
 <li>อาการ lower tract: dysuria, frequency, urgency, ปัสสาวะไม่สุด, hematuria ช่วงต้น, ลำปัสสาวะอ่อน ${S.h}</li>
 <li>Hematuria เรื้อรัง → thin BM, hereditary nephritis, IgAN · หาผลตรวจเก่า (ประกัน ทหาร) เพื่อยืนยันว่าเป็นมานาน ${S.h}</li></ul>`});

/* ---------- 320 · Cell biology ---------- */
HS("320","a","cb-seg","Segmental transport",{
draw:()=>cards([["Proximal tubule","~60% ของ Na⁺ และน้ำ · glucose (SGLT2), amino acids, HCO₃⁻, PO₄ · iso-osmotic","vn"],["Thin descending limb","ดูดน้ำ (AQP1) · สร้าง medullary gradient",""],["Thick ascending limb","NKCC2 ~25% ของ Na⁺ · กันน้ำ · Ca²⁺ Mg²⁺ paracellular · target ของ loop diuretics","ar"],["Distal convoluted tubule","NCC (thiazide) · Ca²⁺ ผ่าน TRPV5","gl"],["Collecting duct","principal: ENaC + ROMK (aldosterone) · AQP2 (vasopressin) · intercalated: H⁺/HCO₃⁻","vn"]]),
notes:()=>`<ul><li>GFR ถูกกำหนดโดย Starling forces, afferent/efferent tone, tubuloglomerular feedback และ RAS ${S.h}</li>
 <li>แต่ละ segment มี transporter เฉพาะ ซึ่งเป็นทั้งเป้าหมายยาและตำแหน่งของโรคกรรมพันธุ์ ${S.h}</li></ul>
 <div class="pearl">รายละเอียดกลไกดูใน Guyton Ch 27–28</div>`});
HS("320","a","cb-inh","Inherited tubular disorders (Table 320-1)",{
draw:()=>{const R=[["PT","Fanconi (Dent, cystinosis) · proximal RTA · cystinuria · renal glycosuria (SGLT2)"],["TAL","Bartter (NKCC2, ROMK, ClC-Kb, barttin, CaSR) → hypoK alkalosis, Ca²⁺ ในปัสสาวะสูง"],["DCT","Gitelman (NCC) → hypoK alkalosis, Mg ต่ำ, Ca²⁺ ในปัสสาวะต่ำ · Gordon (WNK) → HT, K สูง"],["CD","Liddle (ENaC gain) → HT, K ต่ำ · PHA-1 (ENaC/MR loss) · distal RTA · nephrogenic DI (V2R, AQP2)"]];
 let b="";R.forEach(([s,d],i)=>{const y=14+i*82;b+=`<rect class="box ${["vn","ar","gl","vn"][i]}" x="14" y="${y}" width="80" height="70" rx="12"/>`+T(54,y+42,s,{c:"bb"})+`<rect class="box" x="104" y="${y}" width="522" height="70" rx="12"/>`+wrapT(118,y+28,d,70,"s")});return svg(b,"0 0 640 346")},
notes:()=>`${tbl(["Disease","Gene","ลักษณะ"],[["Bartter","NKCC2, ROMK, ClC-Kb, BSND, CaSR","เหมือนกิน loop diuretic · hypercalciuria"],["Gitelman","SLC12A3 (NCC)","เหมือนกิน thiazide · hypomagnesemia, hypocalciuria"],["Liddle","SCNN1B/G (ENaC ↑)","HT, hypokalemia, renin/aldo ต่ำ · amiloride ได้ผล"],["Gordon (PHA-2)","WNK1/4, KLHL3, CUL3","HT, hyperkalemia, acidosis · thiazide ได้ผล"],["Nephrogenic DI","AVPR2 (X), AQP2","polyuria ไม่ตอบสนองต่อ vasopressin"]])}
 <p class="sb-note">ชื่อยีนตาม Table 320-1 ${S.h}</p>`});
HS("320","b","cb-na","Sodium & water balance",{
draw:()=>cards([["Plasma Na⁺ = tonicity","สะท้อนสมดุลน้ำ ไม่ใช่ปริมาณ Na⁺ ในร่างกาย","vn"],["ECF volume = total body Na⁺","คุมด้วย RAAS, sympathetic, ANP, pressure natriuresis","ar"],["Vasopressin","osmoreceptor (ไวต่อ ~1–2%) และ baroreceptor → AQP2 ใน CD","gl"],["Thirst","กลไกป้องกัน hypernatremia",""]]),
notes:()=>`<ul><li>Fig 320-4: plasma Na⁺ เป็นตัวแทนของ tonicity · ความผิดปกติของ Na⁺ คือความผิดปกติของน้ำ ${S.h}</li><li>ปริมาตร ECF ขึ้นกับปริมาณ Na⁺ ทั้งหมด ${S.h}</li></ul>`});

/* ---------- 321 · AKI ---------- */
HS("321","a","aki-def","Definition & KDIGO staging",{
ctrl:()=>sl("scr0","Baseline Cr",0.5,3,0.1,"mg/dL")+sl("scr1","Current Cr",0.5,8,0.1,"mg/dL")+sl("uo","UO",0,1.2,0.05,"mL/kg/h")+sl("uoh","นาน",0,30,1,"ชม."),wire:()=>wireSl(),
draw(){const r=ST.scr1/ST.scr0,d=ST.scr1-ST.scr0;let sc=0;if(r>=1.5||d>=0.3)sc=1;if(r>=2)sc=2;if(r>=3||ST.scr1>=4)sc=3;
 let su=0;if(ST.uo<0.5&&ST.uoh>=6)su=1;if(ST.uo<0.5&&ST.uoh>=12)su=2;if((ST.uo<0.3&&ST.uoh>=24)||(ST.uo===0&&ST.uoh>=12))su=3;const st=Math.max(sc,su);
 let b="";["Stage 1","Stage 2","Stage 3"].forEach((n,i)=>{const on=st===i+1,x=14+i*208;b+=`<rect class="box ${on?"ar":""}" x="${x}" y="14" width="196" height="190" rx="14"${on?' style="stroke:var(--sb-bad);stroke-width:3"':""}/>`+T(x+98,42,n,{c:"bb"})+wrapT(x+12,70,["Cr ×1.5–1.9 หรือ ↑ ≥0.3","Cr ×2.0–2.9","Cr ×3 หรือ ≥4.0 หรือเริ่ม RRT"][i],26,"s")+`<line x1="${x+12}" x2="${x+184}" y1="128" y2="128" style="stroke:var(--sb-line)"/>`+wrapT(x+12,150,["UO <0.5 นาน 6–12 ชม.","UO <0.5 ≥12 ชม.","UO <0.3 ≥24 ชม. หรือ anuria ≥12 ชม."][i],26,"s")});
 b+=`<rect class="gsum" x="0" y="218" width="640" height="66" rx="12"/>`+T(16,244,`Cr ×${f1(r)} (↑${f1(d)}) → stage ${sc||"–"} · UO → stage ${su||"–"}`,{a:"start",c:"b"})+T(16,268,st?`ผล: AKI stage ${st} (เลือกค่าที่สูงกว่า)`:"ยังไม่เข้าเกณฑ์ AKI",{a:"start",c:st?"bad":"h"});return svg(b,"0 0 640 290")},
notes:()=>`<h3>KDIGO definition</h3><ul><li>Cr เพิ่ม ≥0.3 mg/dL ใน 48 ชม. · หรือ ≥1.5 เท่าของ baseline ใน 7 วัน · หรือ UO &lt;0.5 mL/kg/h นาน &gt;6 ชม. ${S.h}</li>
 <li>AKI เป็น clinical diagnosis ไม่ใช่ structural · ไม่จำเป็นต้องมีเนื้อไตเสียหาย ${S.h}</li></ul>
 <h3>Epidemiology</h3><ul><li>5–7% ของผู้ป่วยใน · สูงถึง 30% ใน ICU · เพิ่ม &gt;4 เท่าตั้งแต่ 1988 ${S.h}</li><li>เพิ่มความเสี่ยง CKD และโรคหัวใจหลอดเลือดในอนาคต ${S.h}</li>
 <li>Community: volume depletion, HF, ยา, obstruction, malignancy · Hospital: <b>sepsis</b>, ผ่าตัดใหญ่, critical illness, nephrotoxins ${S.h}</li></ul>
 <div class="pearl">เลื่อนค่าเพื่อดูว่าผู้ป่วยอยู่ stage ไหน</div>`});
HS("321","a","aki-cause","Causes: prerenal · intrinsic · postrenal",{
draw:()=>{let b="";const col=(x,ttl,R,c)=>{b+=`<rect class="box ${c}" x="${x}" y="10" width="200" height="36" rx="10"/>`+T(x+100,33,ttl,{c:"bh"});R.forEach((n,i)=>{b+=`<rect class="box" x="${x}" y="${56+i*44}" width="200" height="38" rx="10"/>`+T(x+100,80+i*44,n,{c:"s"})})};
 col(10,"Prerenal (พบบ่อยสุด)",["Hypovolemia","↓ cardiac output","Systemic vasodilation (sepsis)","Cirrhosis / hepatorenal","NSAIDs · ACEi/ARB","Abdominal compartment"],"vn");
 col(220,"Intrinsic",["ATN: ischemia · sepsis","Nephrotoxins: contrast, aminoglycoside","Pigment: rhabdo · hemolysis","Tumor lysis · myeloma","GN · vasculitis · AIN","TMA · atheroemboli"],"ar");
 col(430,"Postrenal",["Bladder neck: BPH, ca","Ureters: stones, tumor","Urethral stricture","Neurogenic bladder","Retroperitoneal fibrosis","Blocked catheter"],"gl");return svg(b,"0 0 640 330")},
notes:()=>`<h3>Prerenal azotemia</h3><ul><li>รูปแบบ AKI ที่พบบ่อยที่สุด · เนื้อไตปกติ แก้ได้เมื่อ perfusion กลับมา ${S.h}</li>
 <li>Autoregulation: afferent dilate (PG, myogenic) + efferent constrict (Ang II) · <b>NSAIDs และ ACEi/ARB</b> ทำลายกลไกนี้ (Fig 321-2) ${S.h}</li>
 <li><b>Hepatorenal syndrome</b>: AKI ไม่ดีขึ้นแม้ให้สารน้ำและหยุด diuretic ${S.h}</li></ul>
 <h3>Intrinsic</h3><ul><li>Sepsis-associated และ ischemia-associated พบบ่อยสุด · มักซ้อนบนไตที่ reserve น้อย (อายุมาก, CKD) ${S.h}</li>
 <li><b>Contrast-associated AKI</b>: Cr ขึ้นใน 1–2 วัน peak 3–5 วัน หายใน 7 วัน ${S.h}</li>
 <li>Tubular toxins: aminoglycoside, cisplatin, tenofovir, vancomycin, zoledronate, ethylene glycol, aristolochic acid ${S.h}</li></ul>`});
HS("321","b","aki-dx","Diagnostics: urinalysis & FENa",{
ctrl:()=>sl("una","UNa",5,120,1,"")+sl("pna","PNa",120,150,1,"")+sl("ucr","UCr",10,200,5,"")+sl("pcr","PCr",0.5,8,0.1,""),wire:()=>wireSl(),
draw(){const fe=ST.una*ST.pcr/(ST.pna*ST.ucr)*100,ratio=ST.ucr/ST.pcr;let b="";
 b+=T(320,40,"FENa = (UNa × PCr) / (PNa × UCr) × 100",{c:"b"});
 b+=`<rect class="seg" x="40" y="70" width="${560*.25}" height="34" style="fill:var(--pa-vn)"/><rect class="seg" x="${40+560*.25}" y="70" width="${560*.75}" height="34" style="fill:var(--pa-ar)"/>`;
 const X=Math.min(4,fe)/4*560+40;b+=`<path d="M${X},62 L${X},112" style="stroke:var(--sb-ink);stroke-width:3"/>`+T(X,130,`${fe.toFixed(2)}%`,{c:"bb"});
 b+=T(40+70,92,"<1% prerenal",{c:"s"})+T(40+350,92,">1% (ATN, ทั่วไป >2%)",{c:"s"})+T(40,64,"0",{c:"s m"})+T(600,64,"≥4%",{c:"s m"});
 b+=`<rect class="gsum" x="0" y="150" width="640" height="60" rx="12"/>`+T(16,176,`U/P creatinine = ${f0(ratio)} → ${ratio>=40?"เข้ากับ prerenal (≥40)":"เข้ากับ intrinsic (<40)"}`,{a:"start",c:"b"})+T(16,198,"ข้อควรระวัง: CKD, diuretics → FENa สูงทั้งที่ prerenal · contrast, pigment, GN ระยะแรก → FENa ต่ำได้",{a:"start",c:"s"});
 b+=cardsInline(222,[["Hyaline casts","prerenal"],["Muddy brown granular, RTE casts","ATN"],["RBC casts, dysmorphic RBC","GN / vasculitis"],["WBC casts, eosinophils","AIN, pyelonephritis"],["Crystals","ethylene glycol, TLS, acyclovir"]]);return svg(b,"0 0 640 400")},
notes:()=>`<h3>Urine sediment (Fig 321-6)</h3><ul><li>ATN: pigmented <b>muddy brown granular casts</b> + tubular epithelial cell casts · ไม่พบได้ใน &gt;20% ${S.h}</li></ul>
 <h3>FENa</h3><ul><li>Prerenal &lt;1% · ATN &gt;1% · มีประโยชน์ที่สุดในผู้ป่วย oliguric ที่ไม่ได้ diuretic ${S.h}</li>
 <li>FENa ต่ำ ≠ volume depletion เสมอ: GN ระยะแรก, contrast, pigment nephropathy · FENa สูงทั้งที่ prerenal: CKD, diuretics ${S.h}</li></ul>
 <h3>อื่นๆ</h3><ul><li>Prerenal: BUN/Cr &gt;20, SG &gt;1.018, UOsm &gt;500 · ATN: UOsm &lt;500 (Table 321-2) ${S.h}</li>
 <li>BUN สูงเกินสัดส่วน: upper GI bleed, catabolism สูง ${S.h}</li><li>Rhabdomyolysis: urine heme + แต่ RBC น้อย, CK สูง · Myeloma: M spike, free light chain, anion gap ต่ำ ${S.h}</li></ul>`});
HS("321","c","aki-mx","Complications & management",{
draw:()=>cards([["Volume overload","oliguria → pulmonary edema · ระยะฟื้นมี polyuria","vn"],["Hyperkalemia","รุนแรงใน rhabdo, hemolysis, TLS · arrhythmia","ar"],["Metabolic acidosis","มัก anion gap สูง",""],["Uremia","BUN >100 + mental change, bleeding, pericarditis","gl"],["Dialysis indications","volume, K⁺, acidosis ที่รักษาไม่ได้ · toxin บางชนิด · uremic complications","ar"]]),
notes:()=>`<h3>Management by cause</h3><ul><li>Prerenal: แก้ hemodynamics · การตอบสนองต่อการแก้ไขคือการวินิจฉัยที่ดีที่สุด ${S.h}</li>
 <li>GN/vasculitis: immunosuppression ± plasmapheresis · AIN: หยุดยา · <b>scleroderma renal crisis: ACE inhibitor</b> · TTP: plasma exchange · aHUS: complement blockade ${S.h}</li>
 <li><b>Rhabdomyolysis</b>: ให้สารน้ำเร็วและมาก (อาจถึง 10 L/วัน) · alkaline fluid อาจช่วยแต่เสี่ยง hypocalcemia ${S.h}</li>
 <li>Postrenal: catheter, nephrostomy, ureteral stent → diuresis หลายวัน ${S.h}</li></ul>
 <h3>Dialysis</h3><ul><li>ข้อบ่งชี้: volume overload, hyperkalemia, acidosis ที่ medical management ไม่ได้ผล · toxic ingestion บางชนิด · uremic complications (asterixis, pericardial rub/effusion, encephalopathy, uremic bleeding) ${S.h}</li>
 <li>เริ่มเร็วกว่าไม่ได้เพิ่ม survival ใน RCT · หลายคนเริ่มเมื่อ BUN &gt;100 mg/dL และไม่มีสัญญาณฟื้น ${S.h}</li>
 <li>CRRT (CVVH, CVVHD, CVVHDF) เหมาะกับ hemodynamic ไม่เสถียร, cerebral edema · continuous ไม่ดีกว่า intermittent ในด้าน survival ${S.h}</li></ul>`});

/* ---------- 322 · CKD ---------- */
HS("322","a","ckd-stage","KDIGO staging: GFR × albuminuria",{tools:[["gG",[["G1","G1"],["G2","G2"],["G3a","G3a"],["G3b","G3b"],["G4","G4"],["G5","G5"]]],["gA",[["A1","A1"],["A2","A2"],["A3","A3"]]]],
draw(){const G=["G1","G2","G3a","G3b","G4","G5"],GL=["≥90","60–89","45–59","30–44","15–29","<15"],A=["A1","A2","A3"],AL=["<30","30–300",">300"];
 const risk=(g,a)=>{const s=g+a;return [0,0,1,2,3,3][g]+a};const col=["#22c55e","#facc15","#f97316","#dc2626","#7f1d1d"];const lab=["Low","Moderate","High","Very high","Very high"];
 let b="";A.forEach((a,j)=>b+=T(250+j*130,30,a,{c:"bh"})+T(250+j*130,48,AL[j]+" mg/g",{c:"s m"}));
 G.forEach((g,i)=>{const y=60+i*50;b+=T(70,y+30,g,{c:"bh"})+T(140,y+30,GL[i],{c:"s m"});A.forEach((a,j)=>{const r=Math.min(4,risk(i,j)),on=ST.gG===g&&ST.gA===a;b+=`<rect x="${190+j*130}" y="${y}" width="122" height="44" rx="8" style="fill:${col[r]};opacity:${on?1:.45};stroke:${on?"var(--sb-ink)":"none"};stroke-width:3"/>`})});
 const gi=G.indexOf(ST.gG),aj=A.indexOf(ST.gA),r=Math.min(4,risk(gi,aj));
 b+=`<rect class="gsum" x="0" y="370" width="640" height="56" rx="12"/>`+T(16,394,`${ST.gG}${ST.gA}: GFR ${GL[gi]} · ACR ${AL[aj]} → risk ${lab[r]}`,{a:"start",c:"b"})+T(16,414,"ความเสี่ยงตาย, CV death และ progression สูงขึ้นทั้งเมื่อ GFR ลดและ albuminuria เพิ่ม",{a:"start",c:"s"});return svg(b,"0 0 640 430")},
notes:()=>`<h3>นิยาม</h3><ul><li>CKD = ความผิดปกติของโครงสร้างหรือการทำงานของไตนาน &gt;3 เดือน · จัดตาม <b>GFR (G1–G5)</b> และ <b>albuminuria (A1–A3)</b> (Fig 322-1) ${S.h}</li>
 <li>eGFR คำนวณจาก creatinine ± cystatin C (Table 322-3) ${S.h}</li></ul>
 <h3>Progression</h3><ul><li>Nephron ลด → nephron ที่เหลือ hyperfiltration + intraglomerular hypertension → sclerosis (Fig 322-2) ${S.h}</li>
 <li>Risk factors (Table 322-1) และ monogenic loci เช่น APOL1 (Table 322-2) ${S.h}</li></ul>
 <div class="pearl">เลือก G และ A ด้านบนเพื่อดูความเสี่ยง (สีอ้างอิงแบบ KDIGO)</div>`});
HS("322","b","ckd-lyte","Fluid, electrolyte & acid–base",{
draw:()=>cards([["Na⁺ & water","Na⁺ คั่ง → ECF ขยาย, HT · hyponatremia ไม่บ่อย · loop diuretic ต้องใช้ dose สูง","vn"],["Potassium","ขับทาง distal (aldosterone) + GI ชดเชย · K สูงเมื่อ RAS inhibitor, MRA, acidosis, hemolysis","ar"],["Type 4 pattern","hyporeninemic hypoaldosteronism (DM), obstruction, sickle cell → K สูงก่อน GFR ลดมาก","gl"],["Metabolic acidosis","ammonia ลด → non-AG ระยะแรก · GFR ต่ำมาก → AG acidosis",""]]),
notes:()=>`<ul><li>ECF ขยายแบบ isonatric ถ้าดื่มน้ำไม่เกินความสามารถขับ · จำกัดเกลือ · chlorthalidone ใช้ได้แม้ stage 4 ${S.h}</li>
 <li>ยาที่ทำให้ K สูง: RAS inhibitors, spironolactone, amiloride, eplerenone, triamterene, nonsteroidal MRA · <b>gliflozins</b> ช่วยถ่วงสมดุล K ${S.h}</li>
 <li>Acidosis: ยังทำให้ปัสสาวะเป็นกรดได้ แต่สร้าง ammonia น้อย · net acid excretion อาจ &lt;30–40 mmol/วัน ${S.h}</li></ul>`});
HS("322","b","ckd-mbd","CKD–mineral bone disorder",{
draw:()=>flow([["GFR ↓ → phosphate คั่ง","FGF-23 ขึ้นเร็วมาก (osteocytes)","gl"],["Calcitriol ↓","phosphate + FGF-23 ยับยั้ง 1α-hydroxylase","vn"],["Ca²⁺ ↓ + PTH ↑","secondary hyperparathyroidism · Klotho ↓ → FGF-23 ยับยั้ง PTH ไม่ได้","ar"],["High turnover","osteitis fibrosa cystica","ar"],["Low turnover","adynamic bone disease · vascular calcification, calciphylaxis",""]]),
notes:()=>`<ul><li>PTH สูง → bone turnover สูง → <b>osteitis fibrosa cystica</b> ${S.h}</li><li><b>Adynamic bone disease</b> (PTH ต่ำ/ปกติ) พบมากขึ้น โดยเฉพาะ DM, ผู้สูงอายุ · เสี่ยงกระดูกหักและ vascular calcification ${S.h}</li>
 <li><b>Calciphylaxis</b>: ภาวะร้ายแรงเกือบเฉพาะในผู้ป่วยไตวายระยะท้าย · หลอดเลือดเล็กมี calcification → ผิวหนังตาย ${S.h}</li><li>FGF-23 สูงเป็นปัจจัยเสี่ยงอิสระของ LVH ${S.h}</li></ul>`});
HS("322","c","ckd-sys","CV, hematologic & other manifestations",{
draw:()=>cards([["Cardiovascular","สาเหตุตายอันดับ 1 · HT, LVH, accelerated atherosclerosis, pericarditis","ar"],["Anemia","normocytic normochromic เริ่ม stage 3 · เกือบทุกคนใน stage 4 · EPO ไม่พอ","vn"],["Bleeding","platelet dysfunction (uremia)",""],["Neuro","asterixis, restless legs, neuropathy, encephalopathy","gl"],["GI / skin / endocrine","anorexia, nausea, pruritus · insulin resistance, dyslipidemia",""]]),
notes:()=>`<h3>Anemia (Table 322-5)</h3><ul><li>สาเหตุ: EPO ไม่พอ, RBC อายุสั้น, bleeding, iron deficiency, hyperparathyroidism/marrow fibrosis, inflammation, folate/B12 ${S.h}</li>
 <li>ESA ลดการให้เลือด (ลดการติดเชื้อ, iron overload, alloantibodies ที่ขัดการปลูกถ่าย) · ต้องมี iron พอ (TSAT, ferritin) · CKD ไม่ฟอก/PD ลองให้กินก่อน ${S.h}</li>
 <li>ESA ไม่ตอบสนอง: inflammation, ฟอกไม่พอ, hyperparathyroidism รุนแรง, เสียเลือด, infection, malignancy ${S.h}</li>
 <li><b>HIF prolyl hydroxylase inhibitors</b>: เพิ่ม EPO และการดูดซึมเหล็ก ${S.h}</li></ul>
 <h3>Cardiovascular</h3><ul><li>สาเหตุหลักของ morbidity และ mortality · risk เฉพาะ CKD: anemia, hyperphosphatemia, hyperparathyroidism, FGF-23, sleep apnea, inflammation ${S.h}</li></ul>`});
HS("322","c","ckd-slow","Slowing progression & preparing for RRT",{
draw:()=>{let b="";b+=`<rect class="box vn" x="14" y="14" width="300" height="170" rx="14"/>`+T(164,42,"ACEi / ARB",{c:"bb"})+wrapT(30,70,"efferent dilate → glomerular pressure ↓ · ลด proteinuria · eGFR ลดได้ถึง 30% แบบไม่ก้าวหน้า · ห้ามใช้ร่วมกัน",40,"s");
 b+=`<rect class="box ar" x="326" y="14" width="300" height="170" rx="14"/>`+T(476,42,"SGLT2 inhibitors",{c:"bb"})+wrapT(342,70,"Na⁺ ถึง macula densa ↑ → TGF → afferent constrict · ใช้ได้ทั้ง DM และ non-DM · ลด CV events",40,"s");
 b+=`<rect class="box gl" x="14" y="196" width="612" height="72" rx="14"/>`+T(320,224,"BP target 130/80 ใน proteinuric CKD · nonsteroidal MRA",{c:"b"})+T(320,248,"เตรียม RRT: ให้ความรู้ไม่ช้ากว่า stage 4 · transplant ให้ผลดีที่สุด",{c:"s"});return svg(b,"0 0 640 280")},
notes:()=>`<ul><li>Intraglomerular hypertension เป็น maladaptive · ยิ่งลด proteinuria ได้มาก ยิ่งชะลอ GFR decline ได้มาก ${S.h}</li>
 <li>ACEi + ARB ร่วมกัน → AKI และ cardiac events มากขึ้น · Cr ขึ้นต่อเนื่อง → สงสัย renovascular disease ${S.h}</li>
 <li><b>Gliflozins</b> กระตุ้น TGF (Fig 322-5) ${S.h}</li></ul>
 <h3>ข้อบ่งชี้เริ่ม RRT</h3><ul><li>anorexia/nausea ที่ไม่มีสาเหตุอื่น, malnutrition, K สูงหรือ ECF overload ที่ดื้อต่อการรักษา · encephalopathy และ pericarditis เป็นอาการท้ายมาก ${S.h}</li>
 <li>Kidney transplant ให้การฟื้นฟูดีที่สุด เพราะ dialysis ทดแทนได้เพียงบางส่วนของการกรอง ไม่ทดแทน endocrine ${S.h}</li></ul>`});

/* ---------- 323 · Dialysis ---------- */
HS("323","a","hd","Hemodialysis",{
draw:()=>{let b="";b+=`<rect class="box" x="230" y="40" width="180" height="230" rx="20"/>`+T(320,30,"Dialyzer (hollow fiber)",{c:"bh"});
 for(let i=0;i<6;i++)b+=`<line x1="${255+i*26}" y1="50" x2="${255+i*26}" y2="260" style="stroke:var(--s-h);stroke-width:7;opacity:.55"/>`;
 b+=`<path class="arw" d="M60,280 C60,330 250,330 260,270" marker-end="url(#ah)"/><path class="arw" d="M380,40 C380,0 580,0 580,60" marker-end="url(#ah)"/>`+T(110,350,"blood จาก access (arterial)",{c:"s"})+T(560,90,"กลับผู้ป่วย (venous)",{c:"s"});
 b+=`<path class="arw" d="M600,240 L420,240" marker-end="url(#ah)" style="stroke:var(--s-h2o)"/><path class="arw" d="M220,70 L40,70" marker-end="url(#ah)" style="stroke:var(--s-h2o)"/>`+T(520,230,"dialysate (สวนทาง)",{c:"s"})+T(120,60,"ทิ้ง",{c:"s"});
 b+=B(20,110,190,120,"Diffusion",["ตาม concentration gradient","โมเลกุลใหญ่ ผ่านช้า"],"vn")+B(430,110,190,110,"Ultrafiltration",["แรงดัน → ดึงน้ำออก","(convection)"],"gl");return svg(b,"0 0 640 370")},
notes:()=>`<ul><li>DM เป็นสาเหตุ ESKD อันดับ 1 ในสหรัฐ (~45% ของรายใหม่) ${S.h}</li>
 <li>Hemodialysis อาศัย <b>diffusion</b> ผ่าน semipermeable membrane · dialyzer แบบ hollow-fiber · membrane สังเคราะห์ (polysulfone) biocompatible ${S.h}</li>
 <li>Dialysate: Na⁺, K⁺, Cl⁻, HCO₃⁻ (bicarbonate), Ca²⁺, Mg²⁺ · น้ำผ่าน reverse osmosis ${S.h}</li></ul>
 <h3>Vascular access</h3><ul><li><b>AV fistula</b> (Brescia–Cimino: radial artery–cephalic vein) · patency ยาวที่สุด ติดเชื้อน้อยที่สุด · ใช้เวลา mature ${S.h}</li>
 <li>AV graft → เมื่อ fistula ไม่ได้ · tunneled catheter ติดเชื้อมากที่สุด ${S.h}</li></ul>`});
HS("323","a","hdcx","Complications of hemodialysis",{
draw:()=>cards([["Hypotension","acute complication ที่พบบ่อยที่สุด (โดยเฉพาะ DM) · UF มาก, autonomic เสีย, ยาลดความดัน","ar"],["รักษา hypotension","หยุด UF · NSS 100–250 mL · ป้องกัน: ประเมิน dry weight, UF profiling, dialysate เย็น","vn"],["UF เร็วเกิน","&gt;13 mL/kg/h สัมพันธ์กับ CV death",""],["High-output HF","shunt ผ่าน access ใหญ่",""],["Muscle cramps · dialysis reactions","membrane / ethylene oxide",""]]),
notes:()=>`<ul><li>Hypotension เป็น acute complication ที่พบบ่อยที่สุด ${S.h}</li><li>หลีกเลี่ยงการดึงน้ำเร็ว &gt;13 mL/kg/h ${S.h}</li><li>ป้องกัน: sequential UF แล้วค่อย dialysis, ลดอุณหภูมิ dialysate, ไม่กินมื้อหนักระหว่างฟอก ${S.h}</li></ul>`});
HS("323","b","pd","Peritoneal dialysis",{
draw:()=>cards([["หลักการ","ใส่น้ำยา dextrose 1.5–3 L เข้าช่องท้อง · dwell 2–4 ชม. · peritoneum เป็น membrane","vn"],["CAPD","เปลี่ยนเองด้วยมือวันละหลายรอบ + night dwell",""],["CCPD / APD","เครื่อง cycler เปลี่ยนตอนกลางคืน","" ],["Icodextrin","ใช้กับ dwell ที่นานที่สุด (last fill)","gl"],["Peritonitis","WBC ≥100/mm³ และ neutrophil ≥50% · มักจาก sterile technique พลาด","ar"]]),
notes:()=>`<ul><li>ภาวะแทรกซ้อนหลัก: peritonitis, catheter infection (ไม่ใช่ peritonitis), น้ำหนักเพิ่ม/metabolic (glucose), residual uremia ${S.h}</li>
 <li>เกณฑ์ peritonitis ต่ำกว่า SBP เพราะ dextrose ในน้ำยา ${S.h}</li><li>สารที่เติมในน้ำยา: heparin (กัน fibrin อุดสาย), antibiotics ระหว่าง peritonitis ${S.h}</li></ul>`});

/* ---------- 324 · Interventional ---------- */
HS("324","a","ivn","Dialysis access: assessment & intervention",{
draw:()=>cards([["AVF","ราว 65% ของ access · ‘Fistula First, Catheter Last’ · mature 6–12 เดือนใน HT/DM","vn"],["AVG","&lt;20% · stenosis และ thrombosis บ่อยกว่า",""],["Outflow stenosis","pulsatility เพิ่ม ไม่นุ่มช่วง diastole · เสียงสูงที่จุดตีบ","ar"],["Inflow stenosis","systolic อ่อน · access ‘ว่าง’ ช่วง diastole","gl"],["Intervention","angioplasty ที่ stenosis · high flow → banding",""]]),
notes:()=>`<ul><li>ตรวจร่างกาย access: pulse, thrill, bruit ช่วยแยก inflow/outflow stenosis ${S.h}</li><li>Catheter thrombus เล็กน้อยไม่ต้องรักษา · intra-atrial thrombus &gt;2 cm อาจต้อง intervention ${S.h}</li>
 <li>Access flow สูงเกิน → <b>banding</b> สร้างการตีบที่ inflow ${S.h}</li></ul>`});

/* ---------- 325 · Transplant ---------- */
HS("325","a","tx-imm","Immunology of rejection",{
draw:()=>cards([["Hyperacute","preformed Ab (ABO, anti-HLA) · ป้องกันด้วย ABO matching + crossmatch","ar"],["T cell–mediated","CD4 ตอบสนอง class II (DR) · CD8 ทำลายผ่าน class I (A, B) · ต้องมี costimulation (CD28–CD80/86)","vn"],["Antibody-mediated","donor-specific Ab ต่อ HLA/non-HLA · C4d ใน peritubular capillaries","gl"],["HLA matching","จำนวน mismatch ที่ A, B, DR ยิ่งมากยิ่ง rejection มาก · HLA อยู่บน chromosome 6",""]]),
notes:()=>`<ul><li>ข้อห้ามทาง immunology ที่สำคัญ: preformed antibodies → <b>hyperacute rejection</b> · คัดด้วย ABO และ cytotoxic crossmatch ${S.h}</li>
 <li>Crossmatch ใช้ donor T cells (มี class I) · ไม่เกี่ยวกับความเสี่ยงของ T cell–mediated rejection ${S.h}</li>
 <li>HLA-identical ก็ rejection ได้จาก non-HLA antigens (เช่น LIMS-1) ${S.h}</li><li>Graft survival 1 ปี: deceased 94%, living 98% · 5 ปี: 76% และ 87% (Table 325-2) ${S.h}</li></ul>`});
HS("325","a","tx-drug","Maintenance immunosuppression",{
draw:()=>{const R=[["Glucocorticoids","ยับยั้ง transcription ของ IL-1, 2, 3, 6, TNF","HT, glucose, lipid, osteoporosis"],["Cyclosporine","cyclophilin + calcineurin → IL-2 ↓","nephrotoxic, HT, hirsutism, gum hyperplasia"],["Tacrolimus","FKBP-12 + calcineurin","คล้าย CsA · DM มากกว่า · ไม่มี hirsutism"],["Azathioprine","ยับยั้ง purine synthesis","marrow suppression"],["Mycophenolate","ยับยั้ง IMPDH","GI, marrow"],["Sirolimus/everolimus","FKBP-12 → mTOR","lipid, proteinuria, wound healing"],["Belatacept","จับ CD80/86 กัน CD28","PTLD (EBV−)"]];
 let b="";R.forEach(([n,m,s],i)=>{const y=12+i*52;b+=`<rect class="box ${i===1||i===2?"vn":""}" x="10" y="${y}" width="620" height="46" rx="10"/>`+T(22,y+19,n,{a:"start",c:"bh"})+T(22,y+37,m,{a:"start",c:"s"})+T(620,y+28,s,{a:"end",c:"s m"})});return svg(b,"0 0 640 380")},
notes:()=>`<h3>Table 325-3</h3><ul><li>Calcineurin inhibitors (cyclosporine, tacrolimus) เป็นแกนหลัก · ระวัง <b>CNI nephrotoxicity</b> ${S.h}</li>
 <li>หยุดหรือหลีกเลี่ยง steroid เร็วเพื่อลดผลต่อกระดูก ผิว และ glucose ${S.h}</li><li>mTOR inhibitors ใช้มากขึ้นในผู้ที่เป็นมะเร็งผิวหนังซ้ำ ${S.h}</li></ul>`});
HS("325","b","tx-inf","Infections & malignancy after transplant",{tools:[["txt",[["early","<1 เดือน"],["mid","1–6 เดือน"],["late",">6 เดือน"]]]],
draw(){const P={early:["Wound infection","Herpesvirus","Oral candidiasis","UTI"],mid:["Pneumocystis","CMV","Legionella","Listeria","Hepatitis B","Hepatitis C"],late:["Aspergillus","Nocardia","BK virus (polyoma)","Herpes zoster","Hepatitis B","Hepatitis C"]};
 let b="";["early","mid","late"].forEach((k,i)=>{const on=ST.txt===k,x=14+i*208;b+=`<rect class="box ${on?"ar":""}" x="${x}" y="14" width="196" height="40" rx="12"/>`+T(x+98,40,["Peritransplant <1 เดือน","Early 1–6 เดือน","Late >6 เดือน"][i],{c:"bh"});
  P[k].forEach((n,j)=>b+=`<rect class="box" x="${x}" y="${64+j*40}" width="196" height="34" rx="10" style="opacity:${on?1:.45}"/>`+T(x+98,86+j*40,n,{c:"s"}))});
 b+=`<rect class="gsum" x="0" y="320" width="640" height="60" rx="12"/>`+T(16,344,"Malignancy: มะเร็งผิวหนังและริมฝีปากพบบ่อยที่สุด",{a:"start",c:"b"})+T(16,366,"PTLD: เกิดช่วงแรก (<1 ปี) หรือหลัง 7–10 ปี · ส่วนใหญ่สัมพันธ์กับ EBV",{a:"start",c:"s"});return svg(b,"0 0 640 384")},
notes:()=>`<h3>Table 325-4</h3><ul><li>&lt;1 เดือน: wound, herpesvirus, oral candida, UTI · 1–6 เดือน: <b>PCP, CMV</b>, Legionella, Listeria, HBV, HCV · &gt;6 เดือน: Aspergillus, Nocardia, <b>BK virus</b>, zoster ${S.h}</li></ul>
 <h3>Malignancy</h3><ul><li>มะเร็งผิวหนังและริมฝีปากพบบ่อยที่สุด · ต้องเฝ้าระวังและกัน UV ${S.h}</li><li><b>PTLD</b>: ส่วนใหญ่ EBV · พยากรณ์แย่ ${S.h}</li></ul>`});

/* ---------- 326 · Glomerular ---------- */
HS("326","a","gd-prot","Measuring proteinuria",{
draw:()=>{const R=[["Normal","8–10","<30","<150","–"],["Microalbuminuria","30–300","30–300","–/>150","–/trace/1+"],["Proteinuria",">300",">300",">150","trace–3+"]];let b="";
 const H=["","Albumin mg/24h","ACR mg/g","Protein mg/24h","Dipstick"];H.forEach((h,j)=>b+=T(60+j*130,30,h,{c:"bh"}));
 R.forEach((r,i)=>{const y=46+i*62;b+=`<rect class="box ${["","gl","ar"][i]}" x="6" y="${y}" width="628" height="52" rx="12"/>`;r.forEach((c,j)=>b+=T(60+j*130,y+32,c,{c:j?"b":"bh"}))});
 b+=T(320,248,"Albumin = 20–60% ของโปรตีนทั้งหมดในปัสสาวะ · dipstick ไม่เห็น microalbuminuria",{c:"s m"});return svg(b,"0 0 640 260")},
notes:()=>`<ul><li>Table 326-1 · microalbuminuria 30–300 mg/วัน เป็นเครื่องหมายแรกของ diabetic nephropathy ${S.h}</li><li>Nephrotic-range &gt;3 g/วัน ${S.h}</li></ul>`});
HS("326","a","gd-pat","Clinical patterns of glomerular disease",{
draw:()=>cards([["Acute nephritic","PSGN, endocarditis, lupus, anti-GBM, IgAN, ANCA vasculitis, HSP, cryoglobulinemia, MPGN, C3G","ar"],["Pulmonary–renal","Goodpasture, GPA, MPA, HSP, cryoglobulinemia","ar"],["Nephrotic","MCD, FSGS, MN, MPGN, diabetic, amyloid, LCDD, fibrillary, Fabry","vn"],["Basement membrane","anti-GBM, Alport, thin BM, nail-patella",""],["Glomerular–vascular","atherosclerotic, hypertensive, cholesterol emboli, sickle cell, TMA, APS","gl"],["Infection-associated","streptococcus, endocarditis, HIV, HBV/HCV, syphilis, malaria, schistosomiasis",""]]),
notes:()=>`<ul><li>Harrison จัดโรค glomerulus เป็น 6 กลุ่มตาม syndrome (Table 326-2) ช่วยในการวินิจฉัยแยก ${S.h}</li><li>Kidney biopsy ยืนยันการวินิจฉัยในโรคส่วนใหญ่ ${S.h}</li></ul>
 <div class="pearl">พยาธิสภาพ EM / IF / LM ของแต่ละโรคดูใน Robbins Ch 20</div>`});
HS("326","b","gd-tx","Treatment by disease",{
draw:()=>{const R=[["Lupus III/IV","steroid + MMF หรือ cyclophosphamide · + voclosporin หรือ belimumab"],["Anti-GBM","plasmapheresis + prednisone + cyclophosphamide · hemoptysis ตอบสนองต่อ PLEX"],["ANCA vasculitis","induction: steroid + cyclophosphamide/rituximab · maintenance 1–2 ปี"],["IgA nephropathy","RAS blockade · targeted-release budesonide · SGLT2i, sparsentan"],["MCD","prednisone first-line · relapse: CNI, MMF, cyclophosphamide, rituximab"],["Membranous","risk-stratify: steroid + cyclophosphamide, CNI หรือ rituximab"],["C3 glomerulopathy","eculizumab (anti-C5) มีหลักฐานบางส่วน"],["Fabry","agalsidase α/β หรือ migalastat"]];
 let b="";R.forEach(([n,d],i)=>{const y=10+i*52;b+=`<rect class="box ${i%2?"":"vn"}" x="8" y="${y}" width="624" height="46" rx="10"/>`+T(20,y+20,n,{a:"start",c:"bh"})+T(20,y+38,d,{a:"start",c:"s"})});return svg(b,"0 0 640 430")},
notes:()=>`<ul><li><b>Lupus</b>: voclosporin ร่วมกับ steroid + MMF ใน class III/IV · belimumab เพิ่มใน maintenance ${S.h}</li>
 <li><b>Anti-GBM</b>: 8–10 ครั้งของ plasmapheresis + prednisone + cyclophosphamide ${S.h}</li>
 <li><b>ANCA</b>: plasmapheresis แนะนำเมื่อไตวายเร็ว, ปอดเลือดออก หรือมี anti-GBM ร่วม ${S.h}</li>
 <li><b>MCD</b>: steroid-dependent relapse เมื่อลดยา · anti-nephrin antibodies และการตอบสนองต่อ rituximab บ่งบทบาท B cell ${S.h}</li>
 <li>Recurrent FSGS หลัง transplant: plasmapheresis ได้ remission หลายราย ${S.h}</li></ul>`});

/* ---------- 327 · PKD ---------- */
HS("327","a","pkd-ad","ADPKD",{
draw:()=>{let b="";b+=`<rect class="box vn" x="14" y="14" width="300" height="150" rx="14"/>`+T(164,42,"Genetics",{c:"bb"})+wrapT(30,70,"PKD1 (16p13, polycystin-1) ~85% · PKD2 (4q21, polycystin-2) ~15% · cyst เกิดจาก second hit",38,"s");
 b+=`<rect class="box ar" x="326" y="14" width="300" height="150" rx="14"/>`+T(476,42,"Renal",{c:"bb"})+wrapT(342,70,"ปวดหลัง/สีข้าง ~60% · hematuria · cyst infection · stones · HT ก่อน GFR ลด · ESRD วัยกลางคนตอนปลาย",38,"s");
 b+=`<rect class="box gl" x="14" y="176" width="300" height="130" rx="14"/>`+T(164,204,"Extrarenal",{c:"bb"})+wrapT(30,232,"liver cysts (พบบ่อยสุด) · intracranial aneurysm 4–5 เท่า · diverticula · hernia",38,"s");
 b+=`<rect class="box" x="326" y="176" width="300" height="130" rx="14"/>`+T(476,204,"Diagnosis & Rx",{c:"bb"})+wrapT(342,232,"US: อายุ 30–59 ≥2 cysts แต่ละข้าง · ≥60 ≥4 cysts แต่ละข้าง · tolvaptan (V2 antagonist)",38,"s");return svg(b,"0 0 640 320")},
notes:()=>`<ul><li>Prevalence 1:400–1:1000 ทุกเชื้อชาติ ${S.h}</li><li>PKD2 อาการอ่อนกว่า เริ่มช้ากว่า จึงถูกวินิจฉัยน้อยกว่าความจริง ${S.h}</li>
 <li>Polycystins อยู่บน <b>primary cilium</b> ควบคุม Ca²⁺ signaling (Fig 327-1) ${S.h}</li>
 <li>Cyst infection และ acute pyelonephritis มักเป็น gram-negative ${S.h}</li><li>อายุ 30–59 ที่ไม่มี ≥2 cysts ในแต่ละข้าง → ตัดโรคออกได้ ${S.h}</li>
 <li><b>Tolvaptan</b> ยับยั้ง vasopressin V2 receptor → cAMP ลด → cyst โตช้าลง ${S.h}</li></ul>`});
HS("327","a","pkd-ar","ARPKD",{
draw:()=>cards([["Gene","PKHD1 (fibrocystin/polyductin) · ทุกรูปแบบทางคลินิก","vn"],["Prevalence","1 ใน 20,000 live births",""],["Classic","ไตโตตั้งแต่เกิด · renal insufficiency/ESRD ตั้งแต่แรกเกิด","ar"],["Liver","congenital hepatic fibrosis · portal hypertension","gl"],["HT","พบบ่อยแม้ไตทำงานปกติ",""]]),
notes:()=>`<ul><li>FPC ทำงานร่วมกับ PC2 ที่ cilia → กลไกการเกิดซีสต์คล้าย ADPKD ${S.h}</li><li>บางรายวินิจฉัยตอน 1 ปีและไตเสื่อมช้าเป็น 20 ปี ${S.h}</li></ul>`});
HS("327","b","pkd-oth","Other inherited cystic & tubular diseases",{
draw:()=>cards([["Tuberous sclerosis","TSC1/TSC2 · angiomyolipoma, cysts · RCC","gl"],["Von Hippel–Lindau","VHL · cysts + clear cell RCC (multifocal) · hemangioblastoma, pheo","ar"],["ADTKD","UMOD, MUC1, REN, HNF1B · CKD + gout · cysts น้อย","vn"],["Nephronophthisis","ciliopathy · ไตเล็ก fibrosis · cysts ที่ corticomedullary · ESRD ในเด็ก",""],["Medullary sponge kidney","collecting duct ขยาย · stones, hematuria",""],["CAKUT","congenital anomalies ของไตและทางเดินปัสสาวะ · สาเหตุหลักของ ESRD ในเด็ก",""]]),
notes:()=>`<ul><li>Table 327-1 รวมโรคที่มีซีสต์ ${S.h}</li><li>HNF1B: cysts + diabetes (MODY5) ${S.h}</li><li>Nephronophthisis: growth retardation, anemia · syndromic: ตาบอด, liver fibrosis, cerebellar ataxia ${S.h}</li></ul>`});

/* ---------- 328 · TIN ---------- */
HS("328","a","tin-ain","Acute interstitial nephritis",{
draw:()=>flow([["AKI ที่มีลักษณะ AIN","ยา: β-lactam, PPI, NSAID, sulfonamide, rifampin · infection · systemic","vn"],["หยุดยาที่สงสัย","supportive care + ติดตามใกล้ชิด",""],["ดีขึ้น","ติดตามต่อ","gl"],["ไม่ดีขึ้นใน 1 สัปดาห์ หรือแย่เร็ว","biopsy / corticosteroids","ar"]]),
notes:()=>`<h3>Clinical</h3><ul><li>Classic triad <b>fever, rash, eosinophilia</b> + oliguric AKI หลังได้ methicillin/β-lactam 7–10 วัน เป็นข้อยกเว้น ไม่ใช่กฎ ${S.h}</li>
 <li>Chronic TIN: polyuria (nephrogenic DI), proximal tubule defects (Fanconi), RTA ${S.h}</li>
 <li>PPIs อาจทำให้ TIN แบบค่อยเป็นค่อยไป → CKD ${S.h}</li></ul>
 <h3>Treatment (Fig 328-1)</h3><ul><li>หยุดยามักทำให้ดีขึ้น · steroid สำหรับกรณีรุนแรงใกล้ต้อง dialysis หรือแย่ลงแม้หยุดยา ${S.h}</li></ul>`});
HS("328","a","tin-imm","Systemic & immune-mediated TIN",{
draw:()=>cards([["Sjögren","lymphocytic TIN · distal RTA · nephrogenic DI · hypergammaglobulinemia","vn"],["TINU","TIN + uveitis · ตอบสนองต่อ steroid · พบเพิ่มในเด็กหลัง SARS-CoV-2",""],["Sarcoidosis","granulomatous IN · hypercalcemia","gl"],["IgG4-related","pancreatitis, cholangitis, retroperitoneal fibrosis · pseudotumor",""],["Immune checkpoint inhibitors","ไตได้รับผล 2% (เดี่ยว) – 5% (คู่) · มักใช้ PPI/NSAID ร่วม","ar"],["SLE","TIN ร่วมกับ GN",""]]),
notes:()=>`<h3>Absolute indications for steroids (Table 328-2)</h3><ul><li>Sjögren · sarcoidosis · SLE IN · TINU ในผู้ใหญ่ · IgG4-related · idiopathic/granulomatous IN ${S.h}</li></ul>
 <ul><li>ICI-associated AIN: steroid, หยุดยาที่เป็นตัวกระตุ้น, เว้น ICI จนไตฟื้น · กลับมาใช้ได้ในบางราย ${S.h}</li></ul>`});
HS("328","b","tin-chronic","Chronic tubulointerstitial nephropathies",{
draw:()=>cards([["Analgesic nephropathy","papillary necrosis · ไตเล็ก ขรุขระ · เสี่ยง urothelial ca","" ],["Aristolochic acid","Chinese herbal / Balkan · fibrosis + urothelial carcinoma","ar"],["Lithium","nephrogenic DI · chronic TIN + microcysts","vn"],["Lead","CKD + gout + HT (saturnine gout)",""],["Uric acid · hypercalcemia · hypoK","crystal / metabolic nephropathy","gl"],["Myeloma cast nephropathy","light chain + Tamm–Horsfall casts","ar"],["Calcineurin inhibitor","striped fibrosis, arteriolar hyalinosis",""]]),
notes:()=>`<h3>Papillary necrosis (Table 328-3)</h3><ul><li>Analgesic nephropathy · sickle cell · DM + UTI · NSAID นาน (พบน้อย) ${S.h}</li></ul>
 <ul><li><b>Aristolochic acid nephropathy</b>: เดิมพบในหญิงสาวกินสมุนไพรลดน้ำหนัก · Aristolochia เป็น carcinogen ${S.h}</li>
 <li><b>Light chain cast nephropathy</b>: tubule ฝ่อเต็มไปด้วย casts (Fig 328-3) ${S.h}</li><li><b>Reflux nephropathy</b>: VUR ในเด็ก → scarring (Fig 328-4) ${S.h}</li></ul>`});

/* ---------- 329 · TMA & renovascular ---------- */
HS("329","a","tma-types","Thrombotic microangiopathies",{tools:[["tma",[["ttp","TTP"],["stec","STEC-HUS"],["ahus","aHUS"],["drug","Drug / other"]]]],
draw(){const D={ttp:["TTP","ADAMTS13 <5–10% → ultra-large vWF multimers","congenital (Upshaw–Schulman) หรือ acquired autoantibody (iTTP)","Plasma exchange + immunosuppression ± caplacizumab · cTTP: ให้ plasma"],stec:["STEC-HUS","Shiga toxin E. coli (O157:H7)","bloody diarrhea ในเด็ก → AKI","Supportive · plasma exchange ไม่ได้ผล"],ahus:["Atypical HUS","alternative complement ผิดปกติ (factor H, I, MCP, C3, CFB)","ADAMTS13 ปกติ","Eculizumab / ravulizumab (anti-C5)"],drug:["Drug, cancer, HIV, scleroderma, APS, HELLP","endothelial injury โดยตรง","clopidogrel, quinine, gemcitabine, CNI","หยุดยา · รักษาโรคต้นเหตุ · C5 inhibitor ถ้าดื้อ"]}[ST.tma];
 let b=`<rect class="box ar" x="14" y="14" width="612" height="56" rx="14"/>`+T(320,48,"MAHA (schistocytes, LDH ↑, haptoglobin ↓, Coombs −) + thrombocytopenia + organ injury",{c:"bh"});
 b+=`<path class="arw" d="M320,72 L320,96" marker-end="url(#ah)"/>`;
 [["ชนิด",D[0]],["กลไก",D[1]],["ลักษณะ",D[2]],["การรักษา",D[3]]].forEach(([k,v],i)=>{const y=100+i*62;b+=`<rect class="box ${i===3?"vn":""}" x="14" y="${y}" width="612" height="54" rx="12"/>`+T(30,y+32,k,{a:"start",c:"bh"})+T(130,y+32,v,{a:"start",c:"s"})});return svg(b,"0 0 640 352")},
notes:()=>`<h3>TTP</h3><ul><li>นิยาม: MAHA + ADAMTS13 activity &lt;5–10% ${S.h}</li><li><b>Caplacizumab</b>: anti-vWF A1 domain · approved ใน iTTP ร่วมกับ plasma exchange + immunosuppression ${S.h}</li></ul>
 <h3>HUS</h3><ul><li>STEC-HUS: supportive · plasma exchange ไม่ได้ผล ${S.h}</li><li>aHUS: <b>eculizumab/ravulizumab</b> หยุด MAHA ฟื้นไตได้ ${S.h}</li></ul>
 <h3>Secondary</h3><ul><li>Drug-induced: หยุดยา (ไม่ตอบสนองต่อ PLEX) · Cancer-associated: รักษามะเร็ง · Catastrophic APS: anticoagulation + steroid + PLEX/IVIG ${S.h}</li><li>HSCT-associated TMA: เกณฑ์ใน Table 329-1 ${S.h}</li></ul>`});
HS("329","b","tma-ssc","Scleroderma renal crisis & renal vein thrombosis",{
draw:()=>cards([["Scleroderma renal crisis","diffuse SSc 12% · limited 2% · AKI + HT ฉับพลัน + sediment ปกติ","ar"],["Pathology","arcuate artery intimal/medial proliferation · เหมือน malignant HT",""],["Treatment","ACE inhibitor · ก่อนมียานี้ตาย >90% ใน 1 เดือน","vn"],["Outcome","~2/3 ต้อง dialysis · ฟื้น 50% (median 1 ปี)",""],["Renal vein thrombosis","nephrotic (โดยเฉพาะ MN), hypercoagulable, tumor · ปวดหลัง hematuria PE","gl"]]),
notes:()=>`<ul><li>MAHA พบได้ใน scleroderma renal crisis แต่ไม่จำเป็นต้องมีครบทุกข้อ ${S.h}</li><li>Sickle cell nephropathy และ HELLP ก็เป็น vascular injury ในบทนี้ ${S.h}</li></ul>`});

/* ---------- 330 · Nephrolithiasis ---------- */
HS("330","a","st-type","Stone types & urine pH",{tools:[["stn",[["caox","Ca oxalate"],["caph","Ca phosphate"],["uric","Uric acid"],["cys","Cystine"],["struv","Struvite"]]]],
draw(){const P={caox:[5,7.5,"ไม่ขึ้นกับ pH (ช่วง physiologic)","Ca ↑, oxalate ↑, citrate ↓ ในปัสสาวะ","bipyramidal (dihydrate)"],caph:[6.5,8,"pH ≥6.5","hypercalciuria, distal RTA","—"],uric:[4.5,5.5,"pH ≤5.5","gout, insulin resistance · radiolucent","—"],cys:[4.5,7,"ละลายดีขึ้นเมื่อ pH สูง","cystinuria (AR) · staghorn ได้ · เห็นใน X-ray","hexagonal"],struv:[8,9,"pH >8 (urease)","Proteus, Klebsiella, Providencia · staghorn","coffin-lid"]}[ST.stn];
 let b="";const X=v=>40+(v-4.5)/4.5*560;b+=`<rect x="40" y="40" width="560" height="26" rx="13" style="fill:url(#phgr)"/>`;for(let v=5;v<=9;v++)b+=T(X(v),88,v,{c:"s m"});b+=T(320,28,"Urine pH",{c:"s"});
 b+=`<rect x="${X(P[0])}" y="34" width="${X(P[1])-X(P[0])}" height="38" rx="8" style="fill:none;stroke:var(--sb-ink);stroke-width:3"/>`;
 [["pH",P[2]],["Risk",P[3]],["Crystal",P[4]]].forEach(([k,v],i)=>{const y=110+i*58;b+=`<rect class="box ${i===1?"vn":""}" x="14" y="${y}" width="612" height="50" rx="12"/>`+T(30,y+30,k,{a:"start",c:"bh"})+T(120,y+30,v,{a:"start",c:"s"})});
 return svg(`<defs><linearGradient id="phgr" x1="0" x2="1"><stop offset="0" stop-color="#ef4444"/><stop offset=".5" stop-color="#facc15"/><stop offset="1" stop-color="#6366f1"/></linearGradient></defs>`+b,"0 0 640 290")},
notes:()=>`<ul><li>Uric acid stones เมื่อ urine pH ≤5.5 · calcium phosphate เมื่อ pH ≥6.5 · cystine ละลายดีขึ้นเมื่อ pH สูง · calcium oxalate ไม่ขึ้นกับ pH ${S.h}</li>
 <li><b>Primary hyperoxaluria</b> (AR): ตับสร้าง oxalate มาก → stones + deposition ในอวัยวะ → ไตวาย ${S.h}</li>
 <li><b>Struvite</b> (infection, triple-phosphate): เกิดเฉพาะเมื่อมี urease bacteria · โตเร็วเป็น staghorn · ต้องเอาออกทั้งหมด ${S.h}</li>
 <li>Crystal: Ca oxalate dihydrate bipyramidal · cystine hexagonal (Fig 330-1) ${S.h}</li></ul>`});
HS("330","a","st-risk","Risk factors & diet",{
draw:()=>{let b="";b+=`<rect class="box ar" x="14" y="14" width="300" height="200" rx="14"/>`+T(164,42,"เพิ่มความเสี่ยง",{c:"bb"});["animal protein","oxalate","sodium","sucrose · fructose","calcium supplements"].forEach((t,i)=>b+=T(164,74+i*28,t,{c:"s"}));
 b+=`<rect class="box vn" x="326" y="14" width="300" height="200" rx="14"/>`+T(476,42,"ลดความเสี่ยง",{c:"bb"});["dietary calcium (!)","potassium","phytate","น้ำมาก (urine ≥2 L/วัน)"].forEach((t,i)=>b+=T(476,74+i*28,t,{c:"s"}));
 b+=`<rect class="gsum" x="0" y="226" width="640" height="56" rx="12"/>`+T(16,250,"Calcium ในอาหารสูง → นิ่วน้อยลง (จับ oxalate ในลำไส้) · แต่ calcium supplement อาจเพิ่ม",{a:"start",c:"b"})+T(16,272,"กลับเป็นซ้ำ >50% ใน 10 ปี หลังนิ่วก้อนแรก",{a:"start",c:"s"});return svg(b,"0 0 640 290")},
notes:()=>`<ul><li>ไม่ควรจำกัด calcium ในอาหาร · RCT และ cohort แสดงว่า calcium ในอาหารสูงลดความเสี่ยง ${S.h}</li><li>อาหาร oxalate สูง: spinach, rhubarb, potatoes ${S.h}</li>
 <li>24-h urine: volume, Ca, oxalate, citrate, uric acid, Na, K, PO₄, Mg, pH, creatinine ${S.h}</li></ul>`});
HS("330","b","st-mx","Acute colic & prevention",{
draw:()=>cards([["Imaging","noncontrast CT (low-dose) เป็นมาตรฐาน","vn"],["Acute","analgesia · alpha blocker เพิ่มการหลุดเอง","" ],["Urology ด่วน","obstruction + infection · ไตข้างเดียว · ปวดดื้อยา","ar"],["Prevention ทุกชนิด","urine ≥2 L/วัน","gl"],["Ca oxalate · uric acid","thiazide, citrate · alkalinize ± allopurinol",""],["Cystine · struvite","K citrate (ไม่ใช้ Na), tiopronin · ผ่าตัดเอาออก + acetohydroxamic acid",""]]),
notes:()=>`<ul><li>Low-dose renal-limited noncontrast CT ใช้กำหนด stone burden ${S.h}</li><li>Cystine: alkalinize ด้วย K citrate เพราะ Na เพิ่มการขับ cystine · น้ำมากเป็นหัวใจ ${S.h}</li>
 <li>Urease inhibitor (acetohydroxamic acid) ใช้ในบางรายที่ผ่าตัดไม่ได้ ${S.h}</li><li>Thiazide ลด urinary calcium, citrate เพิ่ม inhibitor · allopurinol ใน hyperuricosuria ${S.x}</li></ul>`});

/* ---------- 331 · Obstruction ---------- */
HS("331","a","uo-cause","Causes by level",{
draw(){let b="";const L=[["Kidney / UPJ","UPJ stenosis (เด็ก), stones, papillary necrosis, tumor"],["Ureter","stones, stricture, tumor, retroperitoneal fibrosis, pregnancy, iatrogenic"],["Bladder","neurogenic bladder, tumor, stones · lesions ระดับนี้ทำให้ bilateral"],["Bladder outlet / urethra","BPH, prostate ca, posterior urethral valves (เด็กชาย), stricture"]];
 L.forEach(([n,d],i)=>{const y=14+i*80;b+=`<rect class="box ${["vn","","gl","ar"][i]}" x="14" y="${y}" width="612" height="70" rx="12"/>`+T(30,y+28,n,{a:"start",c:"bh"})+T(30,y+52,d,{a:"start",c:"s"})});return svg(b,"0 0 640 340")},
notes:()=>`<ul><li>อุดเหนือ bladder → hydroureter/hydronephrosis ข้างเดียว · ที่ bladder หรือต่ำกว่า → ทั้งสองข้าง ${S.h}</li>
 <li>เด็ก: UPJ narrowing, ureter เข้า bladder ผิดที่ · <b>posterior urethral valves</b> สาเหตุ bilateral hydronephrosis ที่พบบ่อยที่สุดในเด็กชาย ${S.h}</li>
 <li>Flank pain เป็นอาการที่ทำให้มาพบแพทย์บ่อยที่สุด ${S.h}</li></ul>`});
HS("331","a","uo-phys","Pathophysiology",{
draw:()=>cards([["Hemodynamic","RBF ↑ ระยะแรก (PG, NO) → GFR ↓, medullary flow ↓","vn"],["Concentrating defect","acquired nephrogenic DI (ไม่ตอบสนอง vasopressin)",""],["Partial bilateral","distal RTA · hyperkalemia · salt wasting","ar"],["Acute partial bilateral","เลียนแบบ prerenal (BUN/Cr สูง, ปัสสาวะเข้มข้น, Na คั่ง)","gl"],["Chronic","CKD + ECF ขยาย → HT",""]]),
notes:()=>`<ul><li>Table 331-2 · complete bilateral obstruction → anuria ${S.h}</li><li>Azotemia เกิดเมื่อ bladder outlet obstruction, bilateral obstruction หรือข้างเดียวในคนมีไตข้างเดียว ${S.h}</li></ul>`});
HS("331","b","uo-dx","Diagnosis, relief & recovery",{
draw:()=>flow([["Unexplained renal failure","ใส่สายสวนปัสสาวะ",""],["มี diuresis","obstruction ใต้ bladder neck","gl"],["ไม่มี diuresis → ultrasound","hydronephrosis?","vn"],["มี hydronephrosis","CT หาตำแหน่งและสาเหตุ → urology","ar"],["Relief","GFR ฟื้นบางส่วนถ้าอุด 1–2 สัปดาห์ · >8 สัปดาห์ฟื้นยาก",""]]),
notes:()=>`<ul><li>Ultrasound อาจ <b>ไม่เห็น hydronephrosis</b> ถ้าอุด &lt;48 ชม., volume contraction, staghorn, retroperitoneal fibrosis, infiltrative disease ${S.h}</li>
 <li>Bladder volume ประเมินด้วย bedside ultrasound ${S.h}</li><li>Bilateral และการทำงานไม่เท่ากัน → เลือกข้างที่จะ decompress ก่อน ${S.h}</li>
 <li><b>Postobstructive diuresis</b>: หลังแก้ bilateral complete obstruction (ไม่ใช่ข้างเดียว) · ปัสสาวะ hypotonic มี Na, K, PO₄, Mg มาก · จาก ECF เกินที่ถูกแก้ไข, natriuretic factors, urea osmotic diuresis, nephrogenic DI · ส่วนใหญ่หยุดเองเมื่อ ECF กลับปกติ ${S.h}</li></ul>`});

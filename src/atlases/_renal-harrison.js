/* Sections from the original harrison-ch319 atlas (all Harrison chapters for _renal-harrison). */

const tbl=(h,rows)=>`<table>${h?`<tr>${h.map(x=>`<th>${x}</th>`).join("")}</tr>`:""}${rows.map(r=>`<tr>${r.map(x=>`<td>${x}</td>`).join("")}</tr>`).join("")}</table>`;
/* stacked cards diagram: rows [[title, desc, tone]] */
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
draw:()=>tbl(["Pattern","What points to it"],[
 ["Nephritic","hematuria, RBC casts, HT, edema, azotemia · ดู C3/C4, ANCA, anti-GBM, ASO"],
 ["Nephrotic","proteinuria >3.5 g/วัน, albumin ต่ำ, edema, lipid สูง · thrombosis (RVT ใน membranous)"],
 ["Nephrotic crisis in children","albumin <2 g/dL → ischemia ลำไส้ ปวดท้องเหมือน surgical abdomen"],
 ["Large kidneys with proteinuria in late CKD","diabetic nephropathy · amyloid · HIVAN · MN ที่มี RVT"],
 ["Secondary MN","NSAIDs, penicillamine, gold, mercury · solid tumor (lung, GI, breast, prostate) · syphilis, malaria, HBV"]]),
notes:()=>`<h3>Proteinuria is not nephrotic syndrome</h3><ul>
 <li>ผู้ป่วยมักสังเกตเองว่าบวมทั้งตัวและปัสสาวะเป็นฟอง ซึ่งเป็นอาการของ albuminuria · แต่ proteinuria ไม่ได้แปลว่าเป็น nephrotic syndrome ${S.h}</li>
 <li>Glomerular proteinuria ในเบาหวานเกิดหลังจากโรคหลอดเลือดเล็กดำเนินมาหลายปี — ซึ่งอธิบายว่าทำไมจึงมัก<b>พบ retinopathy ร่วมด้วย</b> · และมันทำนายว่าจะเกิดไตวายที่ดำเนินต่อและ nephrotic syndrome ตามมา ${S.h}</li>
 <li>สิ่งที่เร่งให้ไตเสื่อมเร็วขึ้น: ความดันสูง อ้วน และคุมน้ำตาลได้ไม่ดี · ความเสี่ยงอื่นได้แก่ partial nephrectomy, hepatitis C และ FSGS ${S.h}</li></ul>
 <h3>APOL1 — why a gene needs a second hit</h3><ul>
 <li>โรคไตจาก <b>APOL1</b> เกิดจาก risk variant สองตัวของยีนนี้ · แต่ยีนจะแสดงออกก็ต่อเมื่อมี <b>second hit</b> คือการติดเชื้อหรือการอักเสบมากระตุ้น ${S.h}</li>
 <li>เมื่อแสดงออกแล้วมันทำลาย podocyte และ glomerular endothelial cell โดยสร้างช่องในเซลล์เหล่านั้น จนเกิดความผิดปกติและ proteinuria ${S.h}</li></ul>
 <h3>Nephrotic syndrome in practice</h3><ul>
 <li>คนอายุ 20 ปีที่มาด้วย nephrotic syndrome ให้นึกถึง MCD, FSGS หรือ MN ${S.h}</li>
 <li>เด็กที่ serum albumin &lt;2 g/dL อาจเกิด tissue ischemia เป็น <b>nephrotic crisis</b> ที่ปวดท้องรุนแรงจนถูกเข้าใจผิดว่าเป็น surgical abdomen ${S.h}</li>
 <li>Nephrotic syndrome ทำให้เลือดแข็งตัวง่าย โดยเฉพาะเมื่อ albumin &lt;2 g/dL · MN เป็นตัวที่สัมพันธ์กับ <b>renal vein thrombosis</b> มากที่สุด เพราะเสีย antithrombin III และ plasminogen ทางปัสสาวะ ร่วมกับ hyperfibrinogenemia ${S.h}</li>
 <li>RVT มาด้วยปวดหลัง ไตวาย hematuria ขาบวมมากขึ้น หรือ pulmonary embolism ${S.h}</li>
 <li>Primary MN ราว <b>70% มี anti-PLA2R</b> ซึ่งเป็น antibody ต่อ antigen ที่ฝังอยู่ใน basement membrane ด้าน subepithelial · กลุ่มนี้หายเองได้บ่อยกว่า ${S.h}</li>
 <li><b>AL amyloid</b> มาจากการสะสม &lambda; light chain ส่วน <b>SAA</b> เป็นโปรตีนของโรคอักเสบเรื้อรัง เช่น rheumatoid arthritis, familial Mediterranean fever และวัณโรค ${S.h}</li>
 <li>Diabetic nephropathy เป็นเหตุให้เริ่ม dialysis มากที่สุด ${S.h}</li></ul>`});
HS("319","b","ap-hem","Hematuria & lower urinary tract",{
draw:()=>flow([["Hematuria (dipstick +)","แยก hemoglobinuria / myoglobinuria ด้วย microscopy",""],["มี RBC จริง?","exercise-induced: ตรวจซ้ำหลังพัก 1–2 สัปดาห์","vn"],["Glomerular?","RBC casts, dysmorphic RBC, proteinuria → thin BM, Alport, IgAN","ar"],["Non-glomerular","colic/flank pain → stone · clot → lower tract · ปวด + HT → embolus","gl"],["อายุ ≥40 เริ่มใหม่","urologic evaluation + cystoscopy",""]]),
notes:()=>`<ul><li>Flank pain + colic → นิ่วหรือการอุดตัน · flank pain ไม่มี colic → ไตบวม (obstruction, infection, AIN, acute GN) ${S.h}</li>
 <li>เลือดออกมากมี clot → ส่วนล่างมากกว่า · ปวดสีข้าง + HT อย่าลืม <b>arterial embolus/thrombosis</b> ${S.h}</li>
 <li>อาการ lower tract: dysuria, frequency, urgency, ปัสสาวะไม่สุด, hematuria ช่วงต้น, ลำปัสสาวะอ่อน ${S.h}</li>
 <li>Hematuria เรื้อรัง → thin BM, hereditary nephritis, IgAN · หาผลตรวจเก่า (ประกัน ทหาร) เพื่อยืนยันว่าเป็นมานาน ${S.h}</li></ul>`});

/* ---------- 320 · Cell biology ---------- */
HS("320","a","cb-seg","Segmental transport",{
draw:()=>tbl(["Segment","What it moves"],[
 ["Proximal tubule","~60% ของ Na⁺ และน้ำ · glucose (SGLT2), amino acids, HCO₃⁻, PO₄ · iso-osmotic"],
 ["Thin descending limb","ดูดน้ำ (AQP1) · สร้าง medullary gradient"],
 ["Thick ascending limb","NKCC2 ~25% ของ Na⁺ · กันน้ำ · Ca²⁺ Mg²⁺ paracellular · target ของ loop diuretics"],
 ["Distal convoluted tubule","NCC (thiazide) · Ca²⁺ ผ่าน TRPV5"],
 ["Collecting duct","principal: ENaC + ROMK (aldosterone) · AQP2 (vasopressin) · intercalated: H⁺/HCO₃⁻"]]),
notes:()=>`<h3>The division of labour along the nephron</h3><ul>
 <li><b>Proximal tubule</b> ทำหน้าที่ขนของปริมาณมากแบบ iso-osmotic คือน้ำตามโซเดียมไปทันที น้ำในท่อจึงลดปริมาณลงมากแต่ความเข้มข้นแทบไม่เปลี่ยน — ที่นี่จึงไม่ใช่จุดที่ร่างกายใช้ปรับความเข้มข้นของปัสสาวะ ${S.g}</li>
 <li><b>Loop of Henle</b> เป็นตัวสร้างความต่างของ osmolarity ในชั้น medulla ด้วย countercurrent multiplier จนถึงประมาณ 1200 mOsm/L ซึ่งเป็นทุนที่ collecting duct เอาไปใช้ดูดน้ำกลับทีหลัง ${S.g}</li>
 <li>น้ำที่ออกจาก loop เข้าสู่ distal convoluted tubule จึง<b>เจือจาง</b> เหลือราว 100 mOsm/L · ปลายท่อจึงเลือกได้ทั้งสองทาง คือปล่อยเจือจางออกไป หรือดูดน้ำกลับจนปัสสาวะเข้มข้น ${S.g}</li>
 <li><b>Distal nephron</b> ขน Na⁺ ปริมาณน้อยแต่อยู่ใต้การควบคุมของฮอร์โมน (aldosterone ผ่าน ENaC/ROMK · vasopressin ผ่าน AQP2) จึงเป็นจุดที่ร่างกายใช้ปรับละเอียด และเป็นจุดที่ยาและโรคพันธุกรรมส่วนใหญ่ลงมือ ${S.h}</li></ul>
 <h3>Why loop diuretics impair both concentrating and diluting</h3><ul>
 <li>เพราะ loop diuretic ไม่ได้แค่ขับ Na⁺ ออก แต่<b>ทำลาย countercurrent multiplier</b> ด้วย — medullary gradient จางลง ไตจึงทั้งทำปัสสาวะให้เข้มข้นไม่ได้ และทำให้เจือจางไม่ได้ ${S.g}</li>
 <li>GFR เองถูกกำหนดโดย Starling forces, afferent/efferent tone, tubuloglomerular feedback และ RAS ${S.h}</li></ul>
 <div class="pearl">transporter ของแต่ละ segment เป็นทั้งเป้ายาและตำแหน่งของโรคกรรมพันธุ์ — ดูหัวข้อถัดไป</div>`});
HS("320","a","cb-inh","Inherited tubular disorders (Table 320-1)",{
draw:()=>{const R=[["PT","Fanconi (Dent, cystinosis) · proximal RTA · cystinuria · renal glycosuria (SGLT2)"],["TAL","Bartter (NKCC2, ROMK, ClC-Kb, barttin, CaSR) → hypoK alkalosis, Ca²⁺ ในปัสสาวะสูง"],["DCT","Gitelman (NCC) → hypoK alkalosis, Mg ต่ำ, Ca²⁺ ในปัสสาวะต่ำ · Gordon (WNK) → HT, K สูง"],["CD","Liddle (ENaC gain) → HT, K ต่ำ · PHA-1 (ENaC/MR loss) · distal RTA · nephrogenic DI (V2R, AQP2)"]];
 let b="";R.forEach(([s,d],i)=>{const y=14+i*82;b+=`<rect class="box ${["vn","ar","gl","vn"][i]}" x="14" y="${y}" width="80" height="70" rx="12"/>`+T(54,y+42,s,{c:"bb"})+`<rect class="box" x="104" y="${y}" width="522" height="70" rx="12"/>`+wrapT(118,y+28,d,70,"s")});return svg(b,"0 0 640 346")},
notes:()=>`<h3>วิธีจำที่ได้ผลที่สุด</h3><ul>
<li>โรคท่อไตที่ถ่ายทอดทางพันธุกรรมแต่ละโรค<b>เลียนแบบยาขับปัสสาวะที่ออกฤทธิ์ตรงส่วนนั้นพอดี</b> ถ้ารู้ว่ายาตัวไหนทำอะไรกับเกลือแร่ ก็ทำนายผลเลือดของโรคได้ทันทีโดยไม่ต้องท่อง ${S.x}</li></ul>
<h3>Thick ascending limb และ distal tubule</h3><ul>
<li><b>Bartter syndrome</b> เสียการทำงานของ NKCC2 หรือโปรตีนที่ทำงานร่วมกัน — เหมือน<b>กิน loop diuretic ตลอดชีวิต</b> จึงได้โพแทสเซียมต่ำ เลือดเป็นด่าง และ<b>แคลเซียมในปัสสาวะสูง</b> เพราะ TAL เป็นที่ที่ดูดกลับแคลเซียมตามความต่างศักย์ ${S.h}</li>
<li><b>Gitelman syndrome</b> เสีย NCC ที่ DCT — เหมือน<b>กิน thiazide ตลอดชีวิต</b> จึงได้โพแทสเซียมต่ำและเลือดเป็นด่างเหมือนกัน แต่<b>แคลเซียมในปัสสาวะต่ำ</b>และแมกนีเซียมในเลือดต่ำ ซึ่งเป็นคู่ที่ใช้แยกจาก Bartter ได้ ${S.h}</li>
<li><b>Gordon syndrome</b> กลับทางกัน คือ NCC ทำงานมากเกินจากความผิดปกติของ WNK — ได้ความดันสูง <b>โพแทสเซียมสูง</b> และเลือดเป็นกรด · และเพราะต้นเหตุคือ NCC ที่ทำงานเกิน <b>thiazide จึงรักษาได้ตรงจุด</b> ${S.h}</li></ul>
<h3>Collecting duct</h3><ul>
<li><b>Liddle syndrome</b> — ENaC ทำงานมากเกิน จึงดูดโซเดียมกลับไม่หยุด ได้ความดันสูงกับโพแทสเซียมต่ำ แต่<b>renin และ aldosterone ต่ำ</b> เพราะร่างกายพยายามปิดระบบแล้วแต่ช่องยังเปิดอยู่ · รักษาด้วย <b>amiloride</b> ที่ปิดช่องโดยตรง ไม่ใช่ spironolactone ซึ่งออกฤทธิ์ที่ตัวรับ ${S.h}</li>
<li><b>Nephrogenic diabetes insipidus</b> จากความผิดปกติของ AVPR2 ซึ่งถ่ายทอดแบบ X-linked หรือของ AQP2 — ปัสสาวะมากและ<b>ไม่ตอบสนองต่อ vasopressin</b> ซึ่งเป็นจุดที่แยกจาก central DI ${S.h}</li></ul>
<h3>Proximal tubule</h3><ul>
<li><b>Fanconi syndrome</b> คือการสูญเสียทุกอย่างที่ PT ควรดูดกลับพร้อมกัน ทั้งกลูโคส กรดอะมิโน ฟอสเฟต และไบคาร์บอเนต · สาเหตุทางพันธุกรรมได้แก่ cystinosis และ Dent disease ${S.h}</li>
<li><b>Cystinuria</b> เสียตัวขนส่งที่รับกรดอะมิโนสี่ตัวร่วมกัน และ<b>renal glycosuria</b> เสีย SGLT2 ซึ่งทำให้มีน้ำตาลในปัสสาวะทั้งที่น้ำตาลในเลือดปกติ ${S.h}</li></ul>`});
HS("320","b","cb-na","Sodium & water balance",{
draw:()=>tbl(["Quantity","What it reflects"],[
 ["Plasma Na⁺ = tonicity","สะท้อนสมดุลน้ำ ไม่ใช่ปริมาณ Na⁺ ในร่างกาย"],
 ["ECF volume = total body Na⁺","คุมด้วย RAAS, sympathetic, ANP, pressure natriuresis"],
 ["Vasopressin","osmoreceptor (ไวต่อ ~1–2%) และ baroreceptor → AQP2 ใน CD"],
 ["Thirst","กลไกป้องกัน hypernatremia"]]),
notes:()=>`<h3>Two systems, not one</h3><ul>
 <li>Harrison ย้ำว่ากลไกที่คุม <b>osmoregulation</b> แยกจากกลไกที่คุม <b>extracellular volume</b> แม้จะใช้สรีรวิทยาร่วมกันอยู่บ้าง · การแยกสองเรื่องนี้ออกจากกันคือกุญแจของทั้งบท ${S.h}</li>
 <li>Plasma Na⁺ เป็นเพียง<b>ตัวแทน</b>ของ tonicity ซึ่งเท่ากับจำนวน effective osmole ทั้งตัวหารด้วย total body water · ดังนั้น<b>ความผิดปกติของ Na⁺ ในเลือดคือความผิดปกติของน้ำ ไม่ใช่ของเกลือ</b> ${S.h}</li>
 <li>น้ำในร่างกายเพิ่ม → hyponatremia, hypotonicity, water intoxication (เซลล์บวม) · น้ำลด → hypernatremia, hypertonicity, dehydration (เซลล์เหี่ยว) ทั้งสองทางทำให้เซลล์ทำงานผิดปกติ ${S.h}</li></ul>
 <h3>The water loop</h3><ul>
 <li>Total body water ลดลง → Na⁺ ในเลือดสูงขึ้น → กระหายน้ำทันที พร้อมกับหลั่ง vasopressin จาก posterior pituitary เพื่อลดการขับน้ำ · Na⁺ ต่ำลง → กด vasopressin → ขับน้ำออกมากขึ้น ${S.h}</li>
 <li>Osmoreceptor ไวมาก รับรู้การเปลี่ยนแปลงระดับ 1–2% · tonicity ปกติจึงถูกคุมแคบราว 280 mosmol/L ${S.h}</li></ul>
 <h3>The sodium loop</h3><ul>
 <li>ปริมาตรเลือดนอกเซลล์ถูกคุมด้วย <b>Na⁺ balance</b> โดยมี baroreceptor ในหลอดเลือดและฮอร์โมนเป็นตัวสั่งงาน ได้แก่ ANP, renin–angiotensin–aldosterone, adenosine, vasopressin และระบบ adrenergic ${S.h}</li>
 <li>กินเกลือเกินขับ (positive Na⁺ balance) → ปริมาตรเลือดเพิ่ม → ขับ Na⁺ ทางปัสสาวะมากขึ้นตามสัดส่วน · กลับกันถ้าขับเกินกิน ปริมาตรลด → ไตดูด Na⁺ กลับมากขึ้นและขับออกน้อยลง ${S.h}</li></ul>`});

/* ---------- 321 · AKI ---------- */
HS("321","a","aki-def","Definition & KDIGO staging",{
ctrl:()=>sl("scr0","Baseline Cr",0.5,3,0.1,"mg/dL")+sl("scr1","Current Cr",0.5,8,0.1,"mg/dL")+sl("uo","UO",0,1.2,0.05,"mL/kg/h")+sl("uoh","นาน",0,30,1,"ชม."),wire:()=>wireSl(),
draw(){const r=ST.scr1/ST.scr0,d=ST.scr1-ST.scr0;let sc=0;if(r>=1.5||d>=0.3)sc=1;if(r>=2)sc=2;if(r>=3||ST.scr1>=4)sc=3;
 let su=0;if(ST.uo<0.5&&ST.uoh>=6)su=1;if(ST.uo<0.5&&ST.uoh>=12)su=2;if((ST.uo<0.3&&ST.uoh>=24)||(ST.uo===0&&ST.uoh>=12))su=3;const st=Math.max(sc,su);
 let b="";["Stage 1","Stage 2","Stage 3"].forEach((n,i)=>{const on=st===i+1,x=14+i*208;b+=`<rect class="box ${on?"ar":""}" x="${x}" y="14" width="196" height="190" rx="14"${on?' style="stroke:var(--sb-bad);stroke-width:3"':""}/>`+T(x+98,42,n,{c:"bb"})+wrapT(x+12,70,["Cr ×1.5–1.9 หรือ ↑ ≥0.3","Cr ×2.0–2.9","Cr ×3 หรือ ≥4.0 หรือเริ่ม RRT"][i],26,"s")+`<line x1="${x+12}" x2="${x+184}" y1="128" y2="128" style="stroke:var(--sb-line)"/>`+wrapT(x+12,150,["UO <0.5 นาน 6–12 ชม.","UO <0.5 ≥12 ชม.","UO <0.3 ≥24 ชม. หรือ anuria ≥12 ชม."][i],26,"s")});
 b+=`<rect class="gsum" x="0" y="218" width="640" height="66" rx="12"/>`+T(16,244,`Cr ×${f1(r)} (↑${f1(d)}) → stage ${sc||"–"} · UO → stage ${su||"–"}`,{a:"start",c:"b"})+T(16,268,st?`ผล: AKI stage ${st} (เลือกค่าที่สูงกว่า)`:"ยังไม่เข้าเกณฑ์ AKI",{a:"start",c:st?"bad":"h"});return svg(b,"0 0 640 290")},
notes:()=>mc("B9.2.7",1)+`<h3>KDIGO definition</h3><ul><li>Cr เพิ่ม ≥0.3 mg/dL ใน 48 ชม. · หรือ ≥1.5 เท่าของ baseline ใน 7 วัน · หรือ UO &lt;0.5 mL/kg/h นาน &gt;6 ชม. ${S.h}</li>
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
draw:()=>tbl(["Complication","What to watch for"],[
 ["Volume overload","oliguria → pulmonary edema · ระยะฟื้นมี polyuria"],
 ["Hyperkalemia","รุนแรงใน rhabdo, hemolysis, TLS · arrhythmia"],
 ["Metabolic acidosis","มัก anion gap สูง"],
 ["Uremia","BUN >100 + mental change, bleeding, pericarditis"],
 ["Dialysis indications","volume, K⁺, acidosis ที่รักษาไม่ได้ · toxin บางชนิด · uremic complications"]]),
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
notes:()=>mc("B9.2.7",1)+`<h3>นิยาม</h3><ul><li>CKD = ความผิดปกติของโครงสร้างหรือการทำงานของไตนาน &gt;3 เดือน · จัดตาม <b>GFR (G1–G5)</b> และ <b>albuminuria (A1–A3)</b> (Fig 322-1) ${S.h}</li>
 <li>eGFR คำนวณจาก creatinine ± cystatin C (Table 322-3) ${S.h}</li></ul>
 <h3>Progression</h3><ul><li>Nephron ลด → nephron ที่เหลือ hyperfiltration + intraglomerular hypertension → sclerosis (Fig 322-2) ${S.h}</li>
 <li>Risk factors (Table 322-1) และ monogenic loci เช่น APOL1 (Table 322-2) ${S.h}</li></ul>
 <div class="pearl">เลือก G และ A ด้านบนเพื่อดูความเสี่ยง (สีอ้างอิงแบบ KDIGO)</div>`});
HS("322","b","ckd-lyte","Fluid, electrolyte & acid–base",{
draw:()=>tbl(["Problem","How it behaves in CKD"],[
 ["Na⁺ & water","Na⁺ คั่ง → ECF ขยาย, HT · hyponatremia ไม่บ่อย · loop diuretic ต้องใช้ dose สูง"],
 ["Potassium","ขับทาง distal (aldosterone) + GI ชดเชย · K สูงเมื่อ RAS inhibitor, MRA, acidosis, hemolysis"],
 ["Type 4 pattern","hyporeninemic hypoaldosteronism (DM), obstruction, sickle cell → K สูงก่อน GFR ลดมาก"],
 ["Metabolic acidosis","ammonia ลด → non-AG ระยะแรก · GFR ต่ำมาก → AG acidosis"]]),
notes:()=>mc("B9.2.5",1)+`<h3>Sodium and water</h3><ul>
 <li>ECF ขยายแบบ isonatric ถ้าผู้ป่วยดื่มน้ำไม่เกินความสามารถในการขับ — คือ Na⁺ คั่งแต่ระดับ Na⁺ ในเลือดยังปกติ · จำกัดเกลือคือหัวใจของการรักษา · chlorthalidone ยังใช้ได้แม้ stage 4 ${S.h}</li></ul>
 <h3>Potassium — a treatment dilemma</h3><ul>
 <li>ยาที่ทำให้ K สูงคือยาเดียวกับที่สั่งเพื่อ<b>ชะลอ CKD และปกป้องหัวใจ</b> — RAS inhibitors และ mineralocorticoid antagonist ทั้งชนิด steroidal และ nonsteroidal · จึงเป็นการชั่งน้ำหนัก ไม่ใช่การเลี่ยง ${S.h}</li>
 <li>ก่อนจะหยุดยาเหล่านั้น ให้ไล่แหล่ง potassium ที่ซ่อนอยู่ก่อน โดยเฉพาะ<b>เกลือแกงชนิดลดโซเดียม</b>ที่ใช้โพแทสเซียมแทน และอาหารเสริม ${S.h}</li>
 <li>เครื่องมือที่เหลือ: kaliuretic diuretic ขับ K ทางปัสสาวะ · potassium-binding resin (calcium resonium, sodium polystyrene และตัวใหม่อย่าง patiromer, sodium zirconium cyclosilicate) ขับ K ทางลำไส้ ${S.h}</li>
 <li><b>Intractable hyperkalemia</b> เป็นข้อบ่งชี้หนึ่งในการเริ่ม dialysis ใน CKD แม้จะพบไม่บ่อย ${S.h}</li></ul>
 <h3>Acidosis — treat earlier than you think</h3><ul>
 <li>ไตยังทำปัสสาวะให้เป็นกรดได้ แต่สร้าง ammonia ได้น้อยลง · net acid excretion อาจเหลือ &lt;30–40 mmol/วัน ${S.h}</li>
 <li>ให้ alkali เมื่อ serum bicarbonate ตกต่ำกว่า <b>20–23 mmol/L</b> เพื่อเลี่ยงภาวะ protein catabolic ที่เกิดได้แม้ acidosis จะไม่รุนแรง ${S.h}</li>
 <li>มีการศึกษาที่ชี้ว่าการให้ bicarbonate ใน CKD stage 3–5 สัมพันธ์กับการเข้าสู่ dialysis ช้าลง · แต่ต้องนับ<b>ปริมาณโซเดียม</b>ที่มาพร้อมกันด้วยเมื่อผู้ป่วยมี ECF ขยายอยู่แล้ว ${S.h}</li></ul>`});
HS("322","b","ckd-mbd","CKD–mineral bone disorder",{
draw:()=>flow([["GFR ↓ → phosphate คั่ง","FGF-23 ขึ้นเร็วมาก (osteocytes)","gl"],["Calcitriol ↓","phosphate + FGF-23 ยับยั้ง 1α-hydroxylase","vn"],["Ca²⁺ ↓ + PTH ↑","secondary hyperparathyroidism · Klotho ↓ → FGF-23 ยับยั้ง PTH ไม่ได้","ar"],["High turnover","osteitis fibrosa cystica","ar"],["Low turnover","adynamic bone disease · vascular calcification, calciphylaxis",""]]),
notes:()=>`<h3>The chain that starts with phosphate</h3><ul>
 <li>GFR ตก → ขับ phosphate ได้น้อยลง → <b>phosphate คั่ง</b> ซึ่งเป็นจุดเริ่มของทุกอย่างที่ตามมา ${S.h}</li>
 <li>Phosphate ที่คั่งกระตุ้นให้ osteocyte สร้าง <b>FGF-23</b> มากขึ้น กระตุ้น PTH และกระตุ้นให้ต่อม parathyroid โตขึ้นด้วย ${S.h}</li>
 <li>Ionized calcium ลดลงเพราะไตสร้าง <b>calcitriol</b> ได้น้อยลง — ทั้งจาก phosphate ที่คั่งและจาก FGF-23 ที่สูง ซึ่งยังเร่งการสลาย calcitriol อีกทาง ${S.h}</li>
 <li>Calcitriol ที่ต่ำดัน PTH ขึ้นสองทาง คือผ่าน hypocalcemia และโดยออกฤทธิ์ตรงที่การ transcribe ยีน PTH ${S.h}</li>
 <li>ปกติ FGF-23 จะช่วยยับยั้ง PTH ได้ แต่ฤทธิ์นั้นต้องพึ่ง <b>Klotho</b> ซึ่งลดลงใน CKD เบรกตัวนี้จึงหายไป ${S.h}</li>
 <li>วงจรนี้เริ่มเมื่อ GFR ต่ำกว่า 60 mL/min — บางการศึกษาชี้ว่า phosphate คั่งและ FGF-23 ขึ้นมา<b>ก่อน</b>ที่ GFR จะวัดได้ว่าลดลงเสียอีก ${S.h}</li></ul>
 <h3>Three bone lesions, not one</h3><ul>
 <li><b>High turnover</b> จาก PTH สูง → osteitis fibrosa cystica ซึ่งเป็นรอยโรคคลาสสิกของ secondary hyperparathyroidism ${S.h}</li>
 <li><b>Osteomalacia</b> จากฤทธิ์ vitamin D ที่ลดลง ${S.h}</li>
 <li><b>Adynamic bone disease</b> — turnover ต่ำโดยที่ PTH ต่ำหรือปกติ · พบมากขึ้น โดยเฉพาะในเบาหวานและผู้สูงอายุ · ผู้ป่วยคนเดียวมีหลายแบบผสมกันได้ ${S.h}</li>
 <li>กระดูกที่ turnover ต่ำอาจรับแคลเซียมที่กินเข้าไปไม่ได้ แคลเซียมจึงไปลงที่อื่นแทน ซึ่งเชื่อมกับ<b>vascular calcification</b> ที่พบใน media ของ coronary artery และลิ้นหัวใจ มากกว่าคนที่ไตปกติหลายเท่าตัว ${S.h}</li>
 <li><b>Calciphylaxis</b> เกือบพบเฉพาะในผู้ป่วยไตวายระยะท้าย — หลอดเลือดเล็กมี calcification จนผิวหนังตาย · <b>FGF-23</b> ที่สูงเป็นปัจจัยเสี่ยงอิสระของ LVH ${S.h}</li></ul>
 <h3>Where the drugs act on this chain</h3><ul>
 <li><b>Tenapanor</b> เป็น sodium–proton inhibitor ที่ลดการดูดซึม phosphate ทางลำไส้ ใช้คุม hyperphosphatemia ได้ ${S.h}</li>
 <li><b>Calcitriol</b> กด PTH ทั้งโดยตรงและโดยดัน ionized calcium ขึ้น · แต่ทำให้ hypercalcemia หรือ hyperphosphatemia ได้จากการดูดซึมทางลำไส้ที่เพิ่มขึ้น · analogue อย่าง <b>paricalcitol</b> กด PTH โดยทำให้แคลเซียมสูงน้อยกว่า ${S.h}</li></ul>`});
HS("322","c","ckd-sys","CV, hematologic & other manifestations",{
draw:()=>tbl(["System","Effect of uraemia"],[
 ["Cardiovascular","สาเหตุตายอันดับ 1 · HT, LVH, accelerated atherosclerosis, pericarditis"],
 ["Anemia","normocytic normochromic เริ่ม stage 3 · เกือบทุกคนใน stage 4 · EPO ไม่พอ"],
 ["Bleeding","platelet dysfunction (uremia)"],
 ["Neuro","asterixis, restless legs, neuropathy, encephalopathy"],
 ["GI / skin / endocrine","anorexia, nausea, pruritus · insulin resistance, dyslipidemia"]]),
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
draw:()=>tbl(["Problem","Detail"],[
 ["Hypotension","acute complication ที่พบบ่อยที่สุด (โดยเฉพาะ DM) · UF มาก, autonomic เสีย, ยาลดความดัน"],
 ["Treating hypotension","หยุด UF · NSS 100–250 mL · ป้องกัน: ประเมิน dry weight, UF profiling, dialysate เย็น"],
 ["Ultrafiltration that is too fast","&gt;13 mL/kg/h สัมพันธ์กับ CV death"],
 ["High-output HF","shunt ผ่าน access ใหญ่"],
 ["Muscle cramps · dialysis reactions","membrane / ethylene oxide"]]),
notes:()=>`<h3>Why intradialytic hypotension happens</h3><ul>
 <li>Hypotension เป็น acute complication ที่พบบ่อยที่สุดของ hemodialysis โดยเฉพาะในผู้ป่วยเบาหวาน ${S.h}</li>
 <li>ปัจจัยที่ทำให้เกิดคือ ดึงน้ำมากเกินโดยที่หลอดเลือด refill ไม่ทัน · การตอบสนองของ autonomic และ vasoactive เสีย · osmolar shift · ใช้ยาลดความดันมากเกิน และ cardiac reserve ที่เหลือน้อย ${S.h}</li></ul>
 <h3>Management and prevention</h3><ul>
 <li>เมื่อเกิดแล้ว: <b>หยุด ultrafiltration</b> แล้วให้ isotonic saline 100–250 mL · salt-poor albumin ใช้ได้แต่มักไม่มีใน outpatient ${S.h}</li>
 <li>ป้องกันโดยประเมิน <b>dry weight</b> ให้แม่น และใช้ ultrafiltration modeling คือ<b>ดึงน้ำมากในช่วงต้นมากกว่าช่วงท้าย</b>ของการฟอก ${S.h}</li>
 <li>เลี่ยงการดึงน้ำเร็วเกิน <b>&gt;13 mL/kg/h</b> ซึ่งสัมพันธ์กับผลลัพธ์ที่แย่รวมถึงการเสียชีวิตจากโรคหัวใจและหลอดเลือด ${S.h}</li>
 <li>วิธีเสริม: ทำ sequential ultrafiltration ก่อนแล้วค่อย dialysis · ลดอุณหภูมิ dialysate · ไม่กินมื้อหนักระหว่างฟอก · midodrine มีผู้แนะนำแต่หลักฐานยังไม่พอจะใช้เป็นกิจวัตร ${S.h}</li></ul>
 <h3>Cramps, reactions, high-output failure</h3><ul>
 <li><b>Muscle cramps</b> สาเหตุยังไม่ชัด แต่มักถูกกระตุ้นเมื่อดึงน้ำเร็วเกินหรือดึงต่ำกว่า dry weight ที่ประเมินไว้ · ป้องกันด้วยการลดปริมาณน้ำที่ดึง, ultrafiltration profiling และ sodium modeling ${S.h}</li>
 <li><b>Anaphylactoid reaction</b> ต่อ dialyzer พบมากที่สุดในการใช้ครั้งแรกและกับ membrane ชนิด bioincompatible ${S.h}</li>
 <li><b>High-output cardiac failure</b> เกิดจากเลือด shunt ผ่าน access · บางรายอาจต้องผูก fistula หรือ graft ทิ้ง ${S.h}</li></ul>`});
HS("323","b","pd","Peritoneal dialysis",{
draw:()=>tbl(["Aspect of peritoneal dialysis","Detail"],[
 ["The principle","ใส่น้ำยา dextrose 1.5–3 L เข้าช่องท้อง · dwell 2–4 ชม. · peritoneum เป็น membrane"],
 ["CAPD","เปลี่ยนเองด้วยมือวันละหลายรอบ + night dwell"],
 ["CCPD / APD","เครื่อง cycler เปลี่ยนตอนกลางคืน"],
 ["Icodextrin","ใช้กับ dwell ที่นานที่สุด (last fill)"],
 ["Peritonitis","WBC ≥100/mm³ และ neutrophil ≥50% · มักจาก sterile technique พลาด"]]),
notes:()=>`<h3>The one difference that explains everything else</h3><ul>
 <li>ใน hemodialysis การกำจัด solute อาศัย<b>ความต่างของความเข้มข้น</b> ส่วนการดึงน้ำอาศัย<b>แรงดันคร่อม membrane</b> · แต่ใน peritoneal dialysis <b>ความ hypertonic ของน้ำยาเป็นตัวขับทั้งสองอย่าง</b> ${S.h}</li>
 <li>ความ hypertonic นั้นมาจาก dextrose — ซึ่งเป็นเหตุผลว่าทำไมภาวะแทรกซ้อนของ PD จึงเป็นเรื่อง metabolic เสียเป็นส่วนใหญ่ ${S.h}</li>
 <li><b>Icodextrin</b> เป็น carbohydrate ที่ไม่ถูกดูดซึม ดึงน้ำได้ดีกว่า dextrose จึงใช้กับ dwell ที่นานที่สุด — last fill ของ CCPD หรือ dwell ยาวของ CAPD ${S.h}</li></ul>
 <h3>Metabolic cost</h3><ul>
 <li>Albumin และโปรตีนอื่นรั่วออกทาง peritoneum ไปพร้อมของเสีย · hypoproteinemia ที่ตามมาบังคับให้ต้อง<b>กินโปรตีนมากขึ้น</b>เพื่อรักษา nitrogen balance ${S.h}</li>
 <li>ร่างกายดูดซึม dextrose หลายร้อยกิโลแคลอรีต่อวัน จึงเกิด hyperglycemia และน้ำหนักขึ้น · ผู้ป่วยเบาหวานยังเสี่ยงต่อผลของ insulin resistance อื่น ๆ เช่น hypertriglyceridemia ${S.h}</li>
 <li>สารที่เติมในน้ำยาบ่อยที่สุดคือ <b>heparin</b> กัน fibrin อุดสาย และ antibiotics ระหว่าง peritonitis · ผู้ป่วยเบาหวานเติม insulin ได้ ${S.h}</li></ul>
 <h3>The catheter and its cuffs</h3><ul>
 <li>สายเป็น silicone rubber มีรูด้านข้างที่ปลาย และมี <b>Dacron cuff สองอัน</b> · แผลเป็นที่เกิดรอบ cuff ทำหน้าที่ยึดสายไว้ กันแบคทีเรียจากผิวหนังไต่เข้าช่องท้อง และกันน้ำยารั่วออกมาข้างนอก ${S.h}</li>
 <li>เกณฑ์ peritonitis (WBC ≥100/mm³, neutrophil ≥50%) ต่ำกว่าเกณฑ์ของ SBP ${S.h}</li></ul>`});

/* ---------- 324 · Interventional ---------- */
HS("324","a","ivn","Dialysis access: assessment & intervention",{
draw:()=>tbl(["Access or problem","Detail"],[
 ["AVF","ราว 65% ของ access · ‘Fistula First, Catheter Last’ · mature 6–12 เดือนใน HT/DM"],
 ["AVG","&lt;20% · stenosis และ thrombosis บ่อยกว่า"],
 ["Outflow stenosis","pulsatility เพิ่ม ไม่นุ่มช่วง diastole · เสียงสูงที่จุดตีบ"],
 ["Inflow stenosis","systolic อ่อน · access ‘ว่าง’ ช่วง diastole"],
 ["Intervention","angioplasty ที่ stenosis · high flow → banding"]]),
notes:()=>`<h3>Why the fistula moved up the arm</h3><ul>
 <li>สมัยแรกผู้ป่วยฟอกเลือดยังอายุน้อยและหลอดเลือดดี การทำ forearm Cimino AVF จึงเป็นเรื่องปกติ · เมื่อเบาหวานและความดันสูงกลายเป็นสาเหตุหลักของ CKD หลอดเลือดแย่ลง การใช้ AVG จึงเพิ่มขึ้นจน<b>ถึง 65% ในกลางทศวรรษ 1990</b> ${S.h}</li>
 <li>หลังการรณรงค์ <b>Fistula First</b> แล้ว Fistula First, Catheter Last · AVG ลดลงเหลือ &lt;20% และ AVF ขึ้นมาเกือบ 65% ${S.h}</li>
 <li>แต่สภาพหลอดเลือดยังเป็นปัญหา ทุกวันนี้ <b>75% ของ AVF ทำที่ต้นแขน</b> เพราะหลอดเลือดดำที่นั่นใหญ่กว่าตั้งแต่ต้น และหลอดเลือดแดงส่งเลือดได้แรงกว่าเพราะเส้นผ่านศูนย์กลางใหญ่กว่า ${S.h}</li></ul>
 <h3>How much flow an access must carry</h3><ul>
 <li>Access ต้องส่งเลือดได้อย่างน้อยเท่าความเร็วปั๊มที่ตั้งไว้ <b>บวกอีก 100–200 mL/min</b> เพื่อลด recirculation และกันไม่ให้ access แฟบ · ในทางปฏิบัติคือราว 600–800 mL/min ${S.h}</li>
 <li>Fistula ที่ใช้หลอดเลือดแดง &ge;2 mm กับหลอดเลือดดำ &ge;3 mm มักให้ flow &gt;500 mL/min เมื่อ systolic &gt;100 mmHg ${S.h}</li>
 <li>Brachial artery ขณะพักมี flow &lt;50 mL/min · หลังทำ anastomosis แล้ว AVF จะขึ้นไปถึง 800 mL/min ภายในไม่กี่สัปดาห์ ส่วน AVG ขึ้นถึง 1000 mL/min <b>ภายในไม่กี่นาที</b> ${S.h}</li>
 <li>Flow ที่เพิ่มเปลี่ยน shear stress ทำให้หลอดเลือดแดงขยายตัวตามเวลา — ใน AVG กระบวนการนี้ถูกจำกัดด้วยตัว graft เอง (เส้นผ่านศูนย์กลาง 6 mm ยาว 35–40 cm) flow จึงค้างอยู่ที่ 1200–1800 mL/min ${S.h}</li></ul>
 <h3>At the bedside</h3><ul>
 <li>การตรวจ access ด้วย pulse, thrill และ bruit แยก inflow จาก outflow stenosis ได้ ${S.h}</li>
 <li>Access ที่ flow สูงเกินแก้ด้วย <b>banding</b> คือสร้างการตีบที่ inflow โดยตั้งใจ ${S.h}</li>
 <li>Catheter thrombus เล็กน้อยไม่ต้องรักษา · ก้อนที่เกาะผนังมักจัดระเบียบตัวแล้วและดื้อต่อยาละลายลิ่ม · pulmonary embolism จาก catheter thrombus พบน้อยมาก อาจมีเพียง <b>intra-atrial thrombus &gt;2 cm</b> ที่ควรทำอะไรกับมัน ${S.h}</li>
 <li>การหมุนตำแหน่งแทงเข็มเป็นช่วง ๆ รักษาผิวหนังไว้ได้แม้ใช้ AVG มา 7 ปี · ส่วนการแทงซ้ำที่เดิมทำให้เกิดแผลทะลุผิวหนังได้ภายใน 3 ปี ${S.h}</li></ul>`});

/* ---------- 325 · Transplant ---------- */
HS("325","a","tx-imm","Immunology of rejection",{
draw:()=>tbl(["Type of rejection","Mechanism"],[
 ["Hyperacute","preformed Ab (ABO, anti-HLA) · ป้องกันด้วย ABO matching + crossmatch"],
 ["T cell–mediated","CD4 ตอบสนอง class II (DR) · CD8 ทำลายผ่าน class I (A, B) · ต้องมี costimulation (CD28–CD80/86)"],
 ["Antibody-mediated","donor-specific Ab ต่อ HLA/non-HLA · C4d ใน peritubular capillaries"],
 ["HLA matching","จำนวน mismatch ที่ A, B, DR ยิ่งมากยิ่ง rejection มาก · HLA อยู่บน chromosome 6"]]),
notes:()=>`<h3>Two recognition pathways — unique to transplantation</h3><ul>
 <li><b>Direct pathway</b>: T cell ของผู้รับมอง MHC ของ donor APC ทั้งโมเลกุลเลย — CD4 จับ class II, CD8 จับ class I แล้วกลายเป็น cytotoxic cell · ทางนี้<b>ไม่ใช่</b>วิธีที่ T cell รู้จัก antigen ตามปกติ ${S.h}</li>
 <li><b>Indirect pathway</b>: MHC ของ donor ถูกย่อยเป็น peptide แล้วนำเสนอโดย self-APC ของผู้รับ ซึ่งเป็นกระบวนการปกติทางสรีรวิทยา · การปลูกถ่ายจึงเป็นสถานการณ์เดียวที่มี T cell clone สองชุดทำงานพร้อมกัน ${S.h}</li>
 <li>เมื่อ CD4 helper ถูกกระตุ้นแล้ว มันช่วยทั้ง macrophage, cytotoxic T cell และ B cell ผ่าน cytokine และการสัมผัสโดยตรง ${S.h}</li></ul>
 <h3>Diagnosis and treatment</h3><ul>
 <li><b>Allograft biopsy</b> เป็น gold standard ของทั้ง T cell–mediated และ antibody-mediated rejection · TCMR วินิจฉัยจาก immune cell แทรกใน interstitium, tubule หรือหลอดเลือด ตาม <b>Banff classification</b> ${S.h}</li>
 <li>รักษา TCMR ด้วย methylprednisolone ขนาดสูง 500–1000 mg IV วันละครั้ง 3 วัน · ถ้าไม่ตอบสนองคือข้อบ่งชี้ให้ใช้ antibody therapy ซึ่งมักเป็น ATG ${S.h}</li>
 <li><b>AMR</b>: endothelial injury + C4d ใน peritubular capillaries ร่วมกับ donor-specific antibody ในเลือด · การรักษายังยาก ใช้ plasmapheresis, IVIG, rituximab (B cell) และ bortezomib (plasma cell) ${S.h}</li>
 <li>ตัวช่วยที่ไม่ต้อง biopsy: donor-derived cell-free DNA, urine chemokine เช่น CXCL9 และ urine exosome ${S.h}</li></ul>
 <h3>Screening before transplant</h3><ul>
 <li>Preformed antibodies → <b>hyperacute rejection</b> · คัดกรองด้วย ABO matching และ cytotoxic crossmatch ${S.h}</li>
 <li>Crossmatch ใช้ donor T cells (มี class I) · ไม่ได้บอกความเสี่ยงของ T cell–mediated rejection ${S.h}</li>
 <li>HLA-identical ก็ยัง rejection ได้จาก non-HLA antigens เช่น LIMS-1 ${S.h}</li>
 <li>Graft survival 1 ปี: deceased 94%, living 98% · 5 ปี: 76% และ 87% (Table 325-2) ${S.h}</li></ul>`});
HS("325","a","tx-drug","Maintenance immunosuppression",{
draw:()=>{const R=[["Glucocorticoids","ยับยั้ง transcription ของ IL-1, 2, 3, 6, TNF","HT, glucose, lipid, osteoporosis"],["Cyclosporine","cyclophilin + calcineurin → IL-2 ↓","nephrotoxic, HT, hirsutism, gum hyperplasia"],["Tacrolimus","FKBP-12 + calcineurin","คล้าย CsA · DM มากกว่า · ไม่มี hirsutism"],["Azathioprine","ยับยั้ง purine synthesis","marrow suppression"],["Mycophenolate","ยับยั้ง IMPDH","GI, marrow"],["Sirolimus/everolimus","FKBP-12 → mTOR","lipid, proteinuria, wound healing"],["Belatacept","จับ CD80/86 กัน CD28","PTLD (EBV−)"]];
 let b="";R.forEach(([n,m,s],i)=>{const y=12+i*52;b+=`<rect class="box ${i===1||i===2?"vn":""}" x="10" y="${y}" width="620" height="46" rx="10"/>`+T(22,y+19,n,{a:"start",c:"bh"})+T(22,y+37,m,{a:"start",c:"s"})+T(620,y+28,s,{a:"end",c:"s m"})});return svg(b,"0 0 640 380")},
notes:()=>`<h3>The calcineurin inhibitors</h3><ul>
 <li>ทั้งคู่ทำงานแบบเดียวกันคือสร้าง trimolecular complex แล้วบล็อก calcineurin จนสร้าง cytokine โดยเฉพาะ IL-2 ไม่ได้ — ต่างกันที่โปรตีนที่จับ: cyclosporine จับ <b>cyclophilin</b> ส่วน tacrolimus จับ <b>FKBP-12</b> ${S.h}</li>
 <li>ทั้งคู่ยัง<b>กระตุ้นการสร้าง TGF-β</b> ด้วย ซึ่งเป็นเหตุผลที่ CNI ไม่ได้กดภูมิอย่างเดียวแต่ทิ้ง fibrosis ไว้ในไตด้วย ${S.h}</li>
 <li>ผลข้างเคียงต่างกันพอให้เลือกยา: cyclosporine ให้ <b>hirsutism และเหงือกบวม</b> ซึ่ง tacrolimus แทบไม่ให้ · แต่ tacrolimus ทำให้<b>เป็นเบาหวาน</b>มากกว่า ${S.h}</li>
 <li>Cyclosporine ดูดซึมไม่แน่นอน รูปแบบ microemulsion คาดเดาระดับยาได้ดีกว่า · tacrolimus เป็น macrolide ที่ดูดซึมดี ${S.h}</li></ul>
 <h3>The rest of the toolbox</h3><ul>
 <li><b>Sirolimus/everolimus</b> จับ FKBP-12 เหมือน tacrolimus แต่ไปบล็อก p70 S6 kinase ในเส้นทางหลัง IL-2 receptor จึงหยุดการแบ่งตัวแทนที่จะหยุดการสร้าง cytokine ${S.h}</li>
 <li><b>Azathioprine</b> เป็น prodrug ของ mercaptopurine ยับยั้ง purine synthesis · กดไขกระดูกโดยกระทบ WBC &gt; RBC &gt; platelet ${S.h}</li>
 <li><b>Belatacept</b> จับ CD80/CD86 กัน CD28 คือตัดสัญญาณ costimulation โดยตรง · ราคาที่ต้องจ่ายคือ PTLD ${S.h}</li>
 <li>Steroid ใช้ทั้ง induction และ maintenance — methylprednisolone 250–500 mg ให้ทันทีก่อนหรือขณะผ่าตัด แล้วค่อย taper ${S.h}</li>
 <li>แนวโน้มปัจจุบันคือเลี่ยง steroid ให้เร็วเพื่อลดผลต่อกระดูก ผิวหนังและน้ำตาล · และใช้ mTOR inhibitor มากขึ้นในผู้ที่เป็นมะเร็งผิวหนังซ้ำ ${S.h}</li></ul>`});
HS("325","b","tx-inf","Infections & malignancy after transplant",{tools:[["txt",[["early","<1 เดือน"],["mid","1–6 เดือน"],["late",">6 เดือน"]]]],
draw(){const P={early:["Wound infection","Herpesvirus","Oral candidiasis","UTI"],mid:["Pneumocystis","CMV","Legionella","Listeria","Hepatitis B","Hepatitis C"],late:["Aspergillus","Nocardia","BK virus (polyoma)","Herpes zoster","Hepatitis B","Hepatitis C"]};
 let b="";["early","mid","late"].forEach((k,i)=>{const on=ST.txt===k,x=14+i*208;b+=`<rect class="box ${on?"ar":""}" x="${x}" y="14" width="196" height="40" rx="12"/>`+T(x+98,40,["Peritransplant <1 เดือน","Early 1–6 เดือน","Late >6 เดือน"][i],{c:"bh"});
  P[k].forEach((n,j)=>b+=`<rect class="box" x="${x}" y="${64+j*40}" width="196" height="34" rx="10" style="opacity:${on?1:.45}"/>`+T(x+98,86+j*40,n,{c:"s"}))});
 b+=`<rect class="gsum" x="0" y="320" width="640" height="60" rx="12"/>`+T(16,344,"Malignancy: มะเร็งผิวหนังและริมฝีปากพบบ่อยที่สุด",{a:"start",c:"b"})+T(16,366,"PTLD: เกิดช่วงแรก (<1 ปี) หรือหลัง 7–10 ปี · ส่วนใหญ่สัมพันธ์กับ EBV",{a:"start",c:"s"});return svg(b,"0 0 640 384")},
notes:()=>`<h3>Why the timetable has three windows</h3><ul>
 <li>&lt;1 เดือน: wound, herpesvirus, oral candida, UTI · 1–6 เดือน: <b>PCP, CMV</b>, Legionella, Listeria, HBV, HCV · &gt;6 เดือน: Aspergillus, Nocardia, <b>BK virus</b>, zoster ${S.h}</li></ul>
 <h3>CMV</h3><ul>
 <li>ผู้รับที่ seronegative แต่ได้ไตจาก donor ที่ seropositive เสี่ยงสูงสุด ${S.h}</li>
 <li>อาการมีได้ตั้งแต่ viremia ที่ไม่มีอาการ ไปจนถึง systemic syndrome (ไข้ leukopenia) และโรคเฉพาะอวัยวะ — hepatitis, gastroenteritis, retinopathy ${S.h}</li>
 <li>วินิจฉัยด้วย plasma viral load ร่วมกับ IgM ต่อ CMV ที่ขึ้น · <b>valganciclovir</b> ใช้ได้ทั้งป้องกันและรักษา · HSV ใช้ acyclovir ${S.h}</li></ul>
 <h3>BK virus — a dose problem, not a drug problem</h3><ul>
 <li>BK เป็น polyomavirus ที่หลบอยู่เงียบ ๆ ในไตและ urothelium แล้วตื่นขึ้นเมื่อถูกกดภูมิ · ถ้าปล่อยไว้ จะเกิด fibrosis ลุกลามและเสียไตภายใน 1 ปีในผู้ป่วยส่วนใหญ่ ${S.h}</li>
 <li>แต่เพราะความเสี่ยงผูกกับ<b>ระดับการกดภูมิโดยรวม</b> การจัดการหลักจึงคือตรวจ BK viral load สม่ำเสมอแล้ว<b>ลดยากดภูมิอย่างพอเหมาะ</b> ไม่ใช่เพิ่มยาต้านไวรัส ${S.h}</li>
 <li>Biopsy ช่วยดู interstitial nephritis, tubular cytopathic change และ viral antigen ในไตที่ปลูกถ่าย ${S.h}</li>
 <li>รายที่ยาก มีผู้ลอง leflunomide, cidofovir, quinolone (ออกฤทธิ์ต่อ polyoma helicase) และ IVIG แต่ผลไม่สม่ำเสมอ ${S.h}</li></ul>
 <h3>Malignancy</h3><ul><li>มะเร็งผิวหนังและริมฝีปากพบบ่อยที่สุด · ต้องเฝ้าระวังและกัน UV ${S.h}</li><li><b>PTLD</b>: ส่วนใหญ่ EBV · พยากรณ์แย่ ${S.h}</li></ul>`});

/* ---------- 326 · Glomerular ---------- */
HS("326","a","gd-prot","Measuring proteinuria",{
draw:()=>{const R=[["Normal","8–10","<30","<150","–"],["Microalbuminuria","30–300","30–300","–/>150","–/trace/1+"],["Proteinuria",">300",">300",">150","trace–3+"]];let b="";
 const H=["","Albumin mg/24h","ACR mg/g","Protein mg/24h","Dipstick"];H.forEach((h,j)=>b+=T(60+j*130,30,h,{c:"bh"}));
 R.forEach((r,i)=>{const y=46+i*62;b+=`<rect class="box ${["","gl","ar"][i]}" x="6" y="${y}" width="628" height="52" rx="12"/>`;r.forEach((c,j)=>b+=T(60+j*130,y+32,c,{c:j?"b":"bh"}))});
 b+=T(320,248,"Albumin = 20–60% ของโปรตีนทั้งหมดในปัสสาวะ · dipstick ไม่เห็น microalbuminuria",{c:"s m"});return svg(b,"0 0 640 260")},
notes:()=>`<h3>Why albumin, not total protein</h3><ul>
 <li>Albumin เป็นเพียง 20–60% ของโปรตีนทั้งหมดในปัสสาวะ แต่เป็นตัวที่รั่วก่อนเมื่อ filtration barrier เริ่มเสีย การวัด albumin จึงไวกว่าการวัด total protein ${S.h}</li>
 <li>Dipstick มองไม่เห็น microalbuminuria เลย — ถ้า dipstick ขึ้น albumin แปลว่าเลยขั้น microalbuminuria ไปแล้ว การคัดกรองจึงต้องใช้ albumin/creatinine ratio (ACR) หรือ radioimmunoassay ${S.h}</li>
 <li>Spot urine ACR &gt;30 mg/g = ต้องตามต่อ · albumin &gt;300 mg/24 h = frank proteinuria ซึ่งบอกว่าโรคไปไกลแล้ว ${S.h}</li></ul>
 <h3>Benign proteinuria vs real disease</h3><ul>
 <li><b>Transient (functional) proteinuria</b>: ไม่ต่อเนื่อง มักน้อยกว่า 1 g/24 h — ไข้ ออกกำลังกาย obesity, sleep apnea, ความเครียด และ heart failure อธิบายได้หมด ${S.h}</li>
 <li><b>Orthostatic proteinuria</b> (เจอเฉพาะตอนยืน) พยากรณ์โรคดี · แต่ isolated proteinuria ที่ยังอยู่ข้ามการมาตรวจหลายครั้ง เจอได้ใน glomerular lesion หลายชนิด ${S.h}</li>
 <li>Proteinuria ที่คงอยู่ &gt;1–2 g/24 h มักหมายถึงโรคที่ glomerulus · คนไข้มักไม่รู้ตัวจนกว่าจะบวมหรือเห็นปัสสาวะเป็นฟอง ${S.h}</li></ul>
 <h3>Screening in diabetes</h3><ul>
 <li>Microalbuminuria โผล่ 5–10 ปีหลังเริ่มเป็นเบาหวาน แล้วใช้เวลาอีก 5–10 ปีจึงกลายเป็น proteinuria พร้อม GFR ตก — แต่บางรายถอยกลับไปเป็น normoalbuminuria ได้ ${S.h}</li>
 <li>Type 1 เริ่มตรวจ 5 ปีหลังวินิจฉัยแล้วตรวจทุกปี · type 2 ตรวจตั้งแต่วันวินิจฉัยแล้วตรวจทุกปี ${S.h}</li>
 <li>Albuminuria เป็นตัวทำนาย GFR ตกเร็วที่ดีที่สุดเพียงตัวเดียว · ถ้ารักษาแล้ว albuminuria ลดลง ถือเป็นสัญญาณพยากรณ์โรคที่ดี ${S.h}</li></ul>`});
HS("326","a","gd-pat","Clinical patterns of glomerular disease",{
draw:()=>tbl(["Syndrome","Causes"],[
 ["Acute nephritic","PSGN, endocarditis, lupus, anti-GBM, IgAN, ANCA vasculitis, HSP, cryoglobulinemia, MPGN, C3G"],
 ["Pulmonary–renal","Goodpasture, GPA, MPA, HSP, cryoglobulinemia"],
 ["Nephrotic","MCD, FSGS, MN, MPGN, diabetic, amyloid, LCDD, fibrillary, Fabry"],
 ["Basement membrane","anti-GBM, Alport, thin BM, nail-patella"],
 ["Glomerular–vascular","atherosclerotic, hypertensive, cholesterol emboli, sickle cell, TMA, APS"],
 ["Infection-associated","streptococcus, endocarditis, HIV, HBV/HCV, syphilis, malaria, schistosomiasis"]]),
notes:()=>`<h3>Why group by syndrome first</h3><ul>
 <li>แต่ละ syndrome ตัดรายชื่อโรคที่เป็นไปได้ให้สั้นลงก่อนจะตัดสินใจ biopsy · Harrison เตือนว่ากลุ่มเหล่านี้ไม่ได้แยกขาดจากกัน คนไข้คนเดียวคาบเกี่ยวสองกลุ่มได้ ${S.h}</li></ul>
 <h3>Definitions that separate the groups</h3><ul>
 <li><b>Acute nephritic</b>: proteinuria 1–2 g/24 h + hematuria ที่มี RBC casts + pyuria + hypertension + คั่งน้ำ + creatinine ขึ้น · ถ้า creatinine ขึ้นเร็วเป็นสัปดาห์ = RPGN ซึ่งมี crescentic GN เป็นภาพพยาธิวิทยาคู่กัน ${S.h}</li>
 <li><b>Pulmonary–renal</b>: GN ที่มาพร้อม lung hemorrhage — Goodpasture, ANCA-associated vasculitis, lupus, cryoglobulinemia ${S.h}</li>
 <li><b>Nephrotic</b>: proteinuria &gt;3 g/24 h + hypertension + hypercholesterolemia + hypoalbuminemia + edema/anasarca + microscopic hematuria · ถ้ามีแต่โปรตีนรั่วมากโดยไม่มีอย่างอื่น เรียกเพียง nephrotic-range proteinuria ${S.h}</li>
 <li><b>Basement membrane</b>: GBM ผิดปกติโดยพันธุกรรม (Alport) หรือโดย autoimmune (anti-GBM) ${S.h}</li></ul>
 <h3>Clues from the sediment</h3><ul>
 <li>RBC เพียง 3–5 ตัวใน spun sediment ของปัสสาวะเช้าแรกก็น่าสงสัยแล้ว · gross hematuria พบน้อยมาก ยกเว้น IgA nephropathy และ sickle cell disease ${S.h}</li>
 <li>Microscopic hematuria ที่มี proteinuria น้อยกว่า 500 mg/24 h ต้องตัดรอยโรคทางกายวิภาคออกก่อน โดยเฉพาะมะเร็งทางเดินปัสสาวะในผู้ชายสูงอายุ ${S.h}</li>
 <li>PSGN และ MPGN มี pyuria ได้มาก ต้องแยกจากปัสสาวะที่ติดเชื้อ ${S.h}</li></ul>
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
notes:()=>mc("B9.2.1",3)+`<h3>สาเหตุ</h3><ul>
<li>พบ <b>1 ใน 400 ถึง 1 ใน 1,000 ของทารกเกิดมีชีพ</b> ทุกเชื้อชาติ และเป็นต้นเหตุของ <b>ESRD ที่ต้องฟอกเลือดราว 5–10% ของทั้งหมด</b> จึงไม่ใช่โรคหายาก ${S.r}</li>
<li><b>PKD1 บนโครโมโซม 16p13.3</b> คิดเป็นราว <b>85%</b> ของผู้ป่วย สร้าง <b>polycystin-1</b> ซึ่งเป็นโปรตีนขนาดใหญ่ 460 kD ฝังอยู่ในเยื่อหุ้มเซลล์ มีส่วนยื่นออกนอกเซลล์ยาวสำหรับจับกับเซลล์ข้างเคียงและกับ extracellular matrix ${S.r}</li>
<li><b>PKD2 บนโครโมโซม 4q21</b> เป็นสาเหตุของผู้ป่วยที่เหลือ สร้าง <b>polycystin-2</b> ซึ่งเป็น<b>ช่องไอออนที่ยอมให้ Ca²⁺ ผ่าน</b> พบได้ในทุกส่วนของท่อไต ${S.r}</li></ul>
<h3>พยาธิกำเนิด</h3><ul>
<li>เซลล์เยื่อบุท่อไตแต่ละเซลล์มี <b>primary cilium</b> หนึ่งเส้น ยาว 2–3 ไมโครเมตร ยื่นเข้าไปในรูท่อ ทำหน้าที่เป็น<b>ตัวรับแรง</b> คอยวัดการไหลของน้ำปัสสาวะและแรงเฉือนที่ผิวเซลล์ ${S.r}</li>
<li><b>polycystin-1 และ polycystin-2 อยู่ด้วยกันบน cilium นี้</b> และทำงานเป็นคู่ — เมื่อน้ำไหลผ่านทำให้ cilium โค้งงอ ช่อง Ca²⁺ จะเปิดและ Ca²⁺ ไหลเข้าเซลล์ ซึ่งเป็นสัญญาณที่กำหนดทิศทางของเซลล์และควบคุมไม่ให้แบ่งตัวเกิน ${S.r}</li>
<li>เมื่อยีนใดยีนหนึ่งเสีย <b>สัญญาณ Ca²⁺ ที่เกิดจากการไหลหายไป</b> เซลล์ท่อไตจึงแบ่งตัวผิดทิศและหลั่งสารเข้าไปในรูท่อ ท่อค่อย ๆ โป่งออกจนหลุดจาก nephron กลายเป็นถุงน้ำที่โตขึ้นเรื่อย ๆ ${S.r}</li>
<li>หลักฐานที่หนุนสมมติฐานนี้คือยีนอื่นที่ทำให้เกิดถุงน้ำในไต เช่นกลุ่ม nephrocystin ก็สร้างโปรตีนที่อยู่บน cilium หรือ basal body เช่นกัน ${S.r}</li></ul>
<h3>พยาธิสรีรวิทยาและอาการ</h3><ul>
<li>ถุงน้ำที่โตขึ้นเบียดเนื้อไตที่ยังดีอยู่ แต่<b>ยังมี nephron ที่ทำงานได้แทรกอยู่ระหว่างถุงน้ำ</b> ผู้ป่วยจำนวนมากจึง<b>ไม่มีอาการจนกระทั่งไตเริ่มวาย</b> ${S.r}</li>
<li>อาการที่พาผู้ป่วยมาพบแพทย์คือ<b>ปวด</b> จากเลือดออกในถุงน้ำหรือถุงน้ำที่โตขึ้น และ<b>ปวดบิดแบบนิ่ว</b>เมื่อก้อนเลือดถูกขับออกมาตามทางเดินปัสสาวะ ${S.r}</li>
<li><b>ไตโตจนคลำได้</b>ทางหน้าท้อง · <b>ความดันโลหิตสูงมาก่อนที่ GFR จะลด</b> เพราะถุงน้ำกดหลอดเลือดจนเกิดภาวะขาดเลือดเฉพาะที่และกระตุ้นระบบ renin ${S.h}</li>
<li>โปรตีนในปัสสาวะมักไม่เกิน 2 กรัมต่อวัน จึงไม่ใช่โรคของ glomerulus · ปัสสาวะมากเพราะไตเสียความสามารถในการเข้มข้นปัสสาวะ ${S.r}</li>
<li><b>อาการนอกไต</b> — ถุงน้ำที่ตับพบบ่อยที่สุดแต่ไม่ทำให้ตับวาย · <b>intracranial aneurysm</b> พบมากกว่าคนทั่วไป 4–5 เท่า · diverticula ของลำไส้ · ไส้เลื่อน ${S.h}</li></ul>
<h3>การพยากรณ์โรคและการวินิจฉัย</h3><ul>
<li><b>ชนิดของยีนบอกเวลาที่ไตจะวาย</b> — PKD1 มีโอกาสไตวายน้อยกว่า 5% เมื่ออายุ 40 ปี แต่เพิ่มเป็นมากกว่า 35% ที่อายุ 50 ปี มากกว่า 70% ที่ 60 ปี และมากกว่า 95% ที่ 70 ปี ส่วน <b>PKD2 ช้ากว่าราวสิบปี</b> คือน้อยกว่า 5% ที่อายุ 50 ปี 15% ที่ 60 ปี และ 45% ที่ 70 ปี ${S.r}</li>
<li>วินิจฉัยด้วย<b>อัลตราซาวด์ร่วมกับอายุ</b> — อายุ 30–59 ปีต้องมีถุงน้ำอย่างน้อย 2 ถุงในไตแต่ละข้าง และอายุ 60 ปีขึ้นไปต้องมีอย่างน้อย 4 ถุงแต่ละข้าง · ถ้าอายุ 30–59 ปีแล้วไม่ถึงเกณฑ์นี้ <b>ตัดโรคออกได้</b> ${S.h}</li>
<li>การติดเชื้อในถุงน้ำและ pyelonephritis มักเกิดจากแบคทีเรียแกรมลบ และต้องใช้ยาที่ซึมเข้าถุงน้ำได้ ${S.h}</li>
<li><b>Tolvaptan</b> ยับยั้ง vasopressin V2 receptor ทำให้ cAMP ในเซลล์ท่อไตลดลง ถุงน้ำจึงโตช้าลงและชะลอการเสื่อมของไต ${S.h}</li></ul>`});
HS("327","a","pkd-ar","ARPKD",{
draw:()=>tbl(["Feature","Detail"],[
 ["Gene","PKHD1 (fibrocystin/polyductin) · ทุกรูปแบบทางคลินิก"],
 ["Prevalence","1 ใน 20,000 live births"],
 ["Classic","ไตโตตั้งแต่เกิด · renal insufficiency/ESRD ตั้งแต่แรกเกิด"],
 ["Liver","congenital hepatic fibrosis · portal hypertension"],
 ["HT","พบบ่อยแม้ไตทำงานปกติ"]]),
notes:()=>`<h3>สาเหตุและพยาธิกำเนิด</h3><ul>
<li>เป็นคนละโรคกับ ADPKD ทั้งทางพันธุกรรมและทางคลินิก เกิดจากการกลายพันธุ์ของยีน <b>PKHD1 บนโครโมโซม 6p21–p23</b> ซึ่งแสดงออกทั้งในไตของทารกและผู้ใหญ่ รวมถึงในตับและตับอ่อน ${S.r}</li>
<li>PKHD1 สร้าง <b>fibrocystin</b> ซึ่งทำงานร่วมกับ polycystin-2 ที่ cilium — กลไกการเกิดถุงน้ำจึงเป็นเรื่องเดียวกับ ADPKD คือการรับรู้การไหลที่ cilium เสียไป แต่เพราะเป็น <b>autosomal recessive</b> ความผิดปกติจึงปรากฏตั้งแต่ในครรภ์ ${S.h}</li>
<li>พบราว <b>1 ใน 20,000 ของทารกเกิดมีชีพ</b> ${S.h}</li></ul>
<h3>พยาธิสภาพ</h3><ul>
<li>ไตโตทั้งสองข้างตั้งแต่แรกเกิด · ถุงน้ำ<b>เรียงตัวตั้งฉากกับผิวไต</b>เป็นแนวรัศมีจาก collecting duct และแทนที่ทั้ง medulla และ cortex จนแทบไม่เหลือโครงสร้างเดิม — ลักษณะนี้ต่างจาก ADPKD ที่ถุงน้ำกลมและกระจายไม่เป็นระเบียบ ${S.r}</li></ul>
<h3>อาการและการดำเนินโรค</h3><ul>
<li>แบ่งตามอายุที่ปรากฏอาการเป็นชนิด perinatal, neonatal, infantile และ juvenile · <b>สองชนิดแรกพบบ่อยที่สุด</b> มีอาการรุนแรงตั้งแต่แรกเกิดและทารกมักเสียชีวิตจากไตวายอย่างรวดเร็ว ${S.r}</li>
<li>ไตที่โตมากตั้งแต่ในครรภ์ทำให้<b>น้ำคร่ำน้อย</b> ปอดจึงเจริญไม่เต็มที่ สาเหตุการเสียชีวิตในระยะแรกเกิดจึงมักเป็นระบบหายใจ ไม่ใช่ไต ${S.x}</li>
<li><b>ผู้ที่รอดพ้นวัยทารกจะเกิดพยาธิสภาพที่ตับ</b> คือ congenital hepatic fibrosis ซึ่งนำไปสู่ portal hypertension และม้ามโต — ยิ่งรอดนานพยาธิสภาพที่ตับยิ่งเด่นกว่าที่ไต ${S.r}</li>
<li><b>ความดันโลหิตสูงพบบ่อยแม้ไตยังทำงานได้ปกติ</b> และบางรายวินิจฉัยเมื่ออายุราวหนึ่งขวบแล้วไตค่อย ๆ เสื่อมไปอีกยี่สิบปี ${S.h}</li></ul>`});
HS("327","b","pkd-oth","Other inherited cystic & tubular diseases",{
draw:()=>tbl(["Disease","Gene and features"],[
 ["Tuberous sclerosis","TSC1/TSC2 · angiomyolipoma, cysts · RCC"],
 ["Von Hippel–Lindau","VHL · cysts + clear cell RCC (multifocal) · hemangioblastoma, pheo"],
 ["ADTKD","UMOD, MUC1, REN, HNF1B · CKD + gout · cysts น้อย"],
 ["Nephronophthisis","ciliopathy · ไตเล็ก fibrosis · cysts ที่ corticomedullary · ESRD ในเด็ก"],
 ["Medullary sponge kidney","collecting duct ขยาย · stones, hematuria"],
 ["CAKUT","congenital anomalies ของไตและทางเดินปัสสาวะ · สาเหตุหลักของ ESRD ในเด็ก"]]),
notes:()=>`<h3>ทำไมต้องรู้จักกลุ่มนี้</h3><ul>
<li>ถุงน้ำในไตไม่ได้มีแต่ ADPKD · เมื่อเห็นถุงน้ำหลายใบคำถามถัดไปคือ<b>ถุงน้ำอยู่ตรงไหนและมาพร้อมอะไร</b> เพราะตำแหน่งและโรคร่วมเป็นตัวแยกกลุ่มนี้ออกจากกัน ${S.h}</li></ul>
<h3>กลุ่มที่มาพร้อมเนื้องอก</h3><ul>
<li><b>Tuberous sclerosis</b> (TSC1/TSC2) — angiomyolipoma หลายก้อนร่วมกับถุงน้ำ และเสี่ยงต่อ renal cell carcinoma ${S.h}</li>
<li><b>Von Hippel–Lindau</b> (VHL) — ถุงน้ำร่วมกับ <b>clear cell RCC ที่เกิดหลายตำแหน่งและสองข้าง</b> พร้อม hemangioblastoma และ pheochromocytoma · ผู้ป่วยกลุ่มนี้ต้องเฝ้าระวังมะเร็งไตตลอดชีวิต ${S.h}</li></ul>
<h3>กลุ่มที่ถุงน้ำอยู่ตรงรอยต่อ cortex กับ medulla</h3><ul>
<li><b>Nephronophthisis</b> เป็น ciliopathy ที่<b>ไตเล็กลง</b>ไม่ใช่โตขึ้น ถุงน้ำอยู่ที่รอยต่อ corticomedullary แต่<b>สิ่งที่ทำให้ไตวายคือพังผืดและการฝ่อของท่อไตใน cortex ไม่ใช่ถุงน้ำ</b> ${S.r}</li>
<li>เด็กมาด้วย<b>ปัสสาวะมากและดื่มน้ำมาก</b> เพราะท่อไตเสียความสามารถในการเข้มข้นปัสสาวะเป็นอย่างแรก ตามด้วยการสูญเสียโซเดียมและภาวะเลือดเป็นกรดจากท่อไต ${S.r}</li>
<li>เป็น<b>สาเหตุทางพันธุกรรมที่พบบ่อยที่สุดของ ESRD ในเด็กและวัยรุ่น</b> · ชนิดที่ถ่ายทอดแบบ autosomal recessive ในวัยเด็กพบบ่อยที่สุด และราว 15% มีรอยโรคที่ตาร่วมด้วยเรียก renal-retinal dysplasia ${S.r}</li>
<li>ชนิดที่เป็นกลุ่มอาการจะมาพร้อมตาบอด พังผืดในตับ หรือ cerebellar ataxia เช่น Senior-Loken, Joubert และ Bardet-Biedl ${S.h}</li></ul>
<h3>กลุ่มที่ไม่ทำให้ไตวาย</h3><ul>
<li><b>Medullary sponge kidney</b> คือ collecting duct ใน medulla ขยายเป็นถุงเล็ก ๆ หลายถุง พบในผู้ใหญ่และมักตรวจพบโดยบังเอิญจากภาพถ่ายรังสี · <b>การทำงานของไตปกติ</b> และไม่มีแผลเป็นที่ cortex เว้นแต่มี pyelonephritis ซ้อน · ปัญหาที่พบคือ<b>นิ่ว เลือดปนปัสสาวะ และการติดเชื้อซ้ำ</b> ${S.r}</li>
<li><b>Simple cysts</b> อยู่ที่ cortex ขนาด 1–5 เซนติเมตร ผนังบางใส มีของเหลวใสอยู่ภายใน บุด้วยเซลล์ลูกบาศก์ชั้นเดียว · พบบ่อยมากในการชันสูตรและ<b>ไม่มีความสำคัญทางคลินิก</b> ยกเว้นเมื่อมีเลือดออกเข้าไป ${S.r}</li></ul>
<h3>กลุ่มอื่นที่ควรรู้ชื่อ</h3><ul>
<li><b>ADTKD</b> (UMOD, MUC1, REN, HNF1B) — CKD ที่ค่อยเป็นค่อยไปพร้อมโรคเกาต์ โดยมีถุงน้ำน้อยมาก · ชนิด HNF1B มาพร้อมเบาหวาน MODY5 ${S.h}</li>
<li><b>CAKUT</b> คือความผิดปกติแต่กำเนิดของไตและทางเดินปัสสาวะ และเป็น<b>สาเหตุหลักของ ESRD ในเด็ก</b> ${S.h}</li>
<li><b>Acquired cystic disease</b> เกิดในผู้ป่วย ESRD ที่ฟอกเลือดมานาน — มีถุงน้ำขึ้นใหม่ทั้งใน cortex และ medulla ขนาด 0.1–4 เซนติเมตร บุด้วยเซลล์ท่อไตที่แบนหรือที่เพิ่มจำนวน และมัก<b>มีผลึก calcium oxalate อยู่ภายใน</b> · เชื่อว่าเกิดจากท่อไตถูกอุดด้วยพังผืดหรือด้วยผลึกเอง ${S.r}</li><li>ส่วนใหญ่ไม่มีอาการ แต่<b>ถุงน้ำเลือดออกได้จนปัสสาวะเป็นเลือด</b> · ที่สำคัญกว่านั้นคือ<b>ความเสี่ยงต่อ renal cell carcinoma สูงขึ้นได้ถึงร้อยเท่า และเกิดจริงใน 7% ของผู้ป่วยที่ติดตามไปสิบปี</b> จึงเป็นเหตุผลที่ต้องเฝ้าระวังมะเร็งไตในผู้ที่ฟอกเลือดมานาน ${S.r}</li></ul>`});

/* ---------- 328 · TIN ---------- */
HS("328","a","tin-ain","Acute interstitial nephritis",{
draw:()=>flow([["AKI ที่มีลักษณะ AIN","ยา: β-lactam, PPI, NSAID, sulfonamide, rifampin · infection · systemic","vn"],["หยุดยาที่สงสัย","supportive care + ติดตามใกล้ชิด",""],["ดีขึ้น","ติดตามต่อ","gl"],["ไม่ดีขึ้นใน 1 สัปดาห์ หรือแย่เร็ว","biopsy / corticosteroids","ar"]]),
notes:()=>`<h3>สาเหตุ</h3><ul>
<li>รายงานครั้งแรกจาก sulfonamides · ปัจจุบันพบบ่อยที่สุดจาก <b>penicillin สังเคราะห์</b> อย่าง methicillin และ ampicillin ตามด้วย <b>rifampin</b> · <b>thiazide</b> · <b>NSAID</b> · และยาอื่นอีกหลายตัวเช่น allopurinol, cimetidine และ <b>checkpoint inhibitor</b> ${S.r}</li>
<li>สิ่งที่ต้องจำคือ<b>กลุ่มยาที่สั่งกันทุกวัน</b> ไม่ใช่ยาแปลก ๆ — เมื่อ creatinine ขึ้นโดยไม่มีคำอธิบายในผู้ป่วยที่เพิ่งได้ยาใหม่ ต้องนึกถึงภาวะนี้ก่อน ${S.x}</li></ul>
<h3>พยาธิกำเนิด</h3><ul>
<li>หลายอย่างชี้ว่าเป็น<b>ปฏิกิริยาภูมิแพ้ต่อยาแบบเฉพาะบุคคล ไม่ใช่ความเป็นพิษตรง ๆ</b> — มีระยะแฝงก่อนเกิดอาการ มี eosinophil และผื่น <b>ไม่ขึ้นกับขนาดยา</b> และ<b>เกิดซ้ำทันทีเมื่อได้ยาเดิมหรือยาที่โครงสร้างใกล้กันอีกครั้ง</b> ${S.r}</li>
<li>ลำดับเหตุการณ์ที่น่าจะเป็นคือ <b>ยาทำตัวเป็น hapten จับกับโปรตีนบนผิวเซลล์ท่อไตหรือในเนื้อเยื่อรอบ ๆ</b> ทำให้โปรตีนของตัวเองกลายเป็นสิ่งแปลกปลอม แล้วภูมิคุ้มกันจึงเข้าทำลายเซลล์ท่อไตหรือ basement membrane ของมัน ${S.r}</li>
<li>บางรายเป็นแบบ <b>IgE</b> คือมี IgE ในเลือดสูง มี plasma cell ที่สร้าง IgE และ basophil ในรอยโรค ซึ่งเข้ากับ type I hypersensitivity ระยะหลัง · บางรายเป็นแบบ <b>T cell</b> คือพบเซลล์โมโนนิวเคลียร์หรือ granuloma ร่วมกับ skin test ที่ให้ผลบวก ซึ่งเข้ากับ type IV ${S.r}</li></ul>
<h3>อาการและการวินิจฉัย</h3><ul>
<li>เริ่ม <b>2 ถึง 40 วันหลังได้ยา</b> ซึ่งเป็นช่วงกว้างมากและเป็นเหตุที่มักถูกมองข้าม ${S.r}</li>
<li>สามอย่างคลาสสิกคือ <b>ไข้ · eosinophil ในเลือดสูง ซึ่งอาจพบแค่ชั่วคราว · และผื่น ซึ่งพบเพียงราว 25%</b> — ครบทั้งสามอย่างพบน้อย อย่ารอให้ครบ ${S.r}</li>
<li>ปัสสาวะพบ<b>เลือด โปรตีนเล็กน้อย และเม็ดเลือดขาว</b> ซึ่งมักมี eosinophil ปน ${S.r}</li>
<li><b>creatinine ที่สูงขึ้นหรือ AKI ร่วมกับปัสสาวะออกน้อยพบราวครึ่งหนึ่งของผู้ป่วย</b> ${S.r}</li>
<li>การรักษาสำคัญที่สุดคือ<b>หยุดยาต้นเหตุ</b> ซึ่งส่วนใหญ่ไตจะฟื้น — ยิ่งหยุดเร็วยิ่งฟื้นดี ${S.x}</li></ul>
<h3>ข้อควรระวังเรื่อง NSAID</h3><ul>
<li>NSAID ทำให้ไตเสียหายได้<b>หลายแบบ</b>ไม่ใช่แบบเดียว แม้แต่ละแบบจะพบไม่บ่อย แต่เพราะเป็นยาที่ใช้กันมากและมักให้ในผู้ป่วยที่มีโรคอื่นอยู่แล้ว จึงต้องนึกถึงไว้เสมอ ${S.r}</li></ul>`});
HS("328","a","tin-imm","Systemic & immune-mediated TIN",{
draw:()=>tbl(["Cause","Features"],[
 ["Sjögren","lymphocytic TIN · distal RTA · nephrogenic DI · hypergammaglobulinemia"],
 ["TINU","TIN + uveitis · ตอบสนองต่อ steroid · พบเพิ่มในเด็กหลัง SARS-CoV-2"],
 ["Sarcoidosis","granulomatous IN · hypercalcemia"],
 ["IgG4-related","pancreatitis, cholangitis, retroperitoneal fibrosis · pseudotumor"],
 ["Immune checkpoint inhibitors","ไตได้รับผล 2% (เดี่ยว) – 5% (คู่) · มักใช้ PPI/NSAID ร่วม"],
 ["SLE","TIN ร่วมกับ GN"]]),
notes:()=>`<h3>TINU — the eye and the kidney rarely arrive together</h3><ul>
 <li>TINU เป็นโรค autoimmune ทั้งระบบที่ยังไม่รู้สาเหตุ · คิดเป็น &lt;5% ของ AIN ทั้งหมด พบในผู้หญิงมากกว่าผู้ชาย 3 เท่า และอายุกลางที่เริ่มเป็นคือ 15 ปี ${S.h}</li>
 <li>ลักษณะเด่นคือ interstitial nephritis ที่มี lymphocyte เป็นหลัก ร่วมกับ <b>anterior uveitis ที่เจ็บ</b> มักเป็นสองข้าง มองไม่ชัดและสู้แสงไม่ได้ ${S.h}</li>
 <li>ที่ทำให้วินิจฉัยยากคือ อาการทางตามาก่อนหรือมาพร้อมโรคไต<b>เพียงหนึ่งในสาม</b>ของผู้ป่วยเท่านั้น ${S.h}</li>
 <li>สิ่งที่ควรทำให้นึกถึง: ไข้ เบื่ออาหาร น้ำหนักลด ปวดท้อง ปวดข้อ ร่วมกับ creatinine สูง sterile pyuria proteinuria เล็กน้อย ลักษณะของ Fanconi syndrome และ ESR สูง ${S.h}</li>
 <li>Serology ของโรค autoimmune ที่พบบ่อยกว่ามักให้ผลลบ · TINU จึงเป็น<b>การวินิจฉัยโดยการคัดออก</b> หลังพิจารณา Sjögren, Behçet, sarcoidosis และ SLE แล้ว ${S.h}</li>
 <li>ในเด็กอาการมักหายเอง แต่<b>ในผู้ใหญ่มักเป็นซ้ำ</b> — ซึ่งเป็นเหตุผลที่ผู้ใหญ่อยู่ในกลุ่มข้อบ่งชี้เด็ดขาดของการให้ steroid ${S.h}</li></ul>
 <h3>Steroids, then something to hold the remission</h3><ul>
 <li>ข้อบ่งชี้เด็ดขาดของ steroid (Table 328-2): Sjögren · sarcoidosis · lupus interstitial nephritis · TINU ในผู้ใหญ่ · IgG4-related · idiopathic และ granulomatous IN ${S.h}</li>
 <li>เริ่มด้วย glucocorticoid แต่หลายรายต้องมียา maintenance เช่น azathioprine, mycophenolate mofetil หรือ methotrexate เพื่อกันกลับเป็นซ้ำ ${S.h}</li></ul>
 <h3>Lupus and checkpoint inhibitors</h3><ul>
 <li>ใน lupus nephritis class III หรือ IV ส่วนใหญ่มี interstitial mononuclear inflammation ร่วมด้วย และราวครึ่งหนึ่งตรวจพบ immune complex ที่ <b>tubular basement membrane</b> ${S.h}</li>
 <li>บางรายการอักเสบที่ interstitium เด่นกว่า จึงมาด้วย azotemia และ <b>type IV RTA</b> แทนที่จะมาด้วยภาพของ glomerulonephritis ${S.h}</li>
 <li>ICI-associated AIN: ให้ steroid หยุดยาอื่นที่เป็นตัวกระตุ้น และเว้น ICI จนไตฟื้น · กลับมาใช้ต่อได้ในบางราย ${S.h}</li></ul>`});
HS("328","b","tin-chronic","Chronic tubulointerstitial nephropathies",{
draw:()=>tbl(["Exposure","Kidney injury"],[
 ["Analgesic nephropathy","papillary necrosis · ไตเล็ก ขรุขระ · เสี่ยง urothelial ca"],
 ["Aristolochic acid","Chinese herbal / Balkan · fibrosis + urothelial carcinoma"],
 ["Lithium","nephrogenic DI · chronic TIN + microcysts"],
 ["Lead","CKD + gout + HT (saturnine gout)"],
 ["Uric acid · hypercalcemia · hypoK","crystal / metabolic nephropathy"],
 ["Myeloma cast nephropathy","light chain + Tamm–Horsfall casts"],
 ["Calcineurin inhibitor","striped fibrosis, arteriolar hyalinosis"]]),
notes:()=>`<h3>นิยามและเบาะแสที่ใช้วินิจฉัย</h3><ul>
<li><b>Chronic pyelonephritis</b> คือภาวะที่มี<b>การอักเสบเรื้อรังและแผลเป็นของเนื้อเยื่อระหว่างท่อไต ซึ่งกินไปถึง calyces และ pelvis</b> ${S.r}</li>
<li>เบาะแสสำคัญที่สุดคือ — มีหลายโรคที่ทำให้เนื้อเยื่อระหว่างท่อไตเสียหายเรื้อรัง แต่<b>มีเพียง chronic pyelonephritis และ analgesic nephropathy เท่านั้นที่กิน calyces ด้วย</b> ความเสียหายของ pelvis และ calyces จึงเป็นจุดแยกที่มีค่า ${S.r}</li></ul>
<h3>ภาพที่เห็นด้วยตาเปล่า</h3><ul>
<li>ไต<b>มีแผลเป็นแบบไม่สม่ำเสมอ</b> และถ้าเป็นสองข้างก็<b>ไม่เท่ากันสองข้าง</b> ${S.r}</li>
<li>จุดเปรียบเทียบที่ต้องจำคือ <b>chronic glomerulonephritis มีแผลเป็นกระจายทั่วและสมมาตรทั้งสองข้าง</b> — ความไม่สมมาตรจึงชี้มาทาง pyelonephritis ${S.r}</li>
<li>ลักษณะเฉพาะคือ<b>แผลเป็นหยาบ ๆ แยกกันเป็นจุด ๆ พาดจาก cortex ถึง medulla ทับอยู่บน calyx ที่ขยาย ทู่ หรือผิดรูป</b> พร้อมกับ<b>papilla ที่แบนราบ</b> ${S.r}</li>
<li>แผลเป็นมีตั้งแต่หนึ่งถึงหลายจุด และ<b>ส่วนใหญ่อยู่ที่ขั้วบนและขั้วล่างของไต</b> ซึ่งเข้ากับตำแหน่งที่เกิด reflux บ่อยที่สุด — รูปร่างของรอยโรคจึงบอกกลไกของมันเอง ${S.r}</li></ul>
<h3>ความสำคัญทางคลินิก</h3><ul>
<li>เคยเป็นสาเหตุของผู้ป่วยใน<b>หน่วยปลูกถ่ายไตและฟอกเลือดถึง 10–20%</b> จนกระทั่งภาวะที่นำมาก่อนอย่าง reflux ถูกรู้จักและจัดการได้ดีขึ้น ${S.r}</li>
<li>ทุกวันนี้ยังเป็น<b>สาเหตุสำคัญของการทำลายไตในเด็กที่มีความผิดปกติรุนแรงของทางเดินปัสสาวะส่วนล่าง</b> ${S.r}</li></ul>`});

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
draw:()=>tbl(["Topic","Detail"],[
 ["Scleroderma renal crisis","diffuse SSc 12% · limited 2% · AKI + HT ฉับพลัน + sediment ปกติ"],
 ["Pathology","arcuate artery intimal/medial proliferation · เหมือน malignant HT"],
 ["Treatment","ACE inhibitor · ก่อนมียานี้ตาย >90% ใน 1 เดือน"],
 ["Outcome","~2/3 ต้อง dialysis · ฟื้น 50% (median 1 ปี)"],
 ["Renal vein thrombosis","nephrotic (โดยเฉพาะ MN), hypercoagulable, tumor · ปวดหลัง hematuria PE"]]),
notes:()=>`<h3>คำนี้ครอบคลุมอะไร</h3><ul>
<li><b>Thrombotic microangiopathy</b> เป็นคำรวมของกลุ่มอาการที่มีทั้ง <b>TTP</b> และ <b>HUS</b> อยู่ด้วยกัน ซึ่งเกิดจากเหตุที่หลากหลายแต่ลงเอยเหมือนกันคือ<b>ลิ่มเลือดในหลอดเลือดฝอยและใน arteriole</b> ของหลายอวัยวะ รวมทั้งของไต ${S.r}</li></ul>
<h3>สามอย่างที่เกิดจากลิ่มเลือดเดียวกัน</h3><ul>
<li>ลิ่มเลือดทำให้<b>การไหลของเลือดผิดปกติจนเม็ดเลือดแดงถูกเฉือนขาด</b> จึงเกิด microangiopathic hemolytic anemia และเห็น schistocyte ในสเมียร์ ${S.r}</li>
<li>ที่สำคัญกว่านั้นคือลิ่มเลือด<b>อุดหลอดเลือดขนาดเล็กจนเนื้อเยื่อขาดเลือดและอวัยวะทำงานผิดปกติ</b> ซึ่งในไตคือ AKI ${S.r}</li>
<li>และการที่<b>เกล็ดเลือดถูกใช้ไปอย่างกว้างขวาง</b>ทำให้เกล็ดเลือดต่ำ · สามอย่างนี้จึงไม่ใช่โรคสามโรค แต่เป็นผลสามทางของเหตุเดียว ${S.r}</li></ul>
<h3>แยกตามต้นเหตุ</h3><ul>
<li><b>Typical HUS</b> ซึ่งมีชื่ออื่นว่า epidemic, classic หรือ diarrhea-positive — สัมพันธ์กับ<b>การกินอาหารที่ปนเปื้อนแบคทีเรียที่สร้าง Shiga-like toxin</b> มากที่สุด ${S.r}</li>
<li><b>Atypical HUS ชนิดที่ถ่ายทอดทางพันธุกรรม</b> — ต้นเหตุของการบาดเจ็บของ endothelium คือ<b>การกระตุ้น complement ที่มากเกินและไม่เหมาะสม</b> จากความผิดปกติของโปรตีนที่ควบคุม complement ${S.r}</li>
<li>มีสิ่งกระตุ้นและภาวะอื่นอีกหลายอย่างที่ทำให้เกิดภาพคล้าย HUS ได้เป็นครั้งคราว ซึ่งเชื่อว่าผ่านการ<b>ทำร้าย endothelium</b> เช่นกัน ${S.r}</li></ul>
<h3>กลไกที่ปลายทาง</h3><ul>
<li>การบาดเจ็บของ endothelium นำไปสู่<b>การกระตุ้นเกล็ดเลือดและการเกิดลิ่มเลือด</b>ในหลอดเลือดขนาดเล็ก ${S.r}</li>
<li>มีหลักฐานว่า endothelium ที่เสียหาย<b>สร้าง prostaglandin I₂ และ nitric oxide ได้น้อยลง</b> ซึ่งทั้งสองตัวเป็นสารยับยั้งการเกาะกลุ่มของเกล็ดเลือด การขาดไปจึงยิ่งส่งเสริมการเกิดลิ่มเลือด ${S.r}</li></ul>`});

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
notes:()=>`<h3>กลไกเดียวที่อยู่เบื้องหลังนิ่วทุกชนิด</h3><ul>
<li>นิ่วเกิดเมื่อ<b>ความเข้มข้นของสารตั้งต้นในปัสสาวะสูงเกินกว่าที่จะละลายอยู่ได้</b> คือภาวะ supersaturation · ปัสสาวะที่มีปริมาณน้อยจึงเอื้อให้เกิดภาวะนี้ และเป็นเหตุผลที่คำแนะนำข้อแรกของทุกชนิดคือดื่มน้ำมาก ${S.r}</li>
<li>แต่ความอิ่มตัวเกินอย่างเดียวอธิบายไม่หมด เพราะ<b>คนจำนวนมากที่ปัสสาวะอิ่มตัวเกินก็ไม่เกิดนิ่ว</b> · สมมติฐานที่ใช้อธิบายคือคนที่เป็นนิ่ว<b>ขาดสารยับยั้งการก่อผลึก</b>ในปัสสาวะ ${S.r}</li></ul>
<h3>Calcium oxalate — ชนิดที่พบบ่อยที่สุด</h3><ul>
<li>ราว <b>5%</b> มาพร้อม<b>แคลเซียมในเลือดสูงและในปัสสาวะสูง</b> ซึ่งต้องตามหา hyperparathyroidism และสาเหตุอื่นของแคลเซียมสูง ${S.r}</li>
<li>กลุ่มที่ใหญ่กว่าคือ<b>แคลเซียมในปัสสาวะสูงโดยที่ในเลือดปกติ</b> ซึ่งมีได้สามทาง — ลำไส้ดูดซึมแคลเซียมมากเกิน · ท่อไตดูดกลับแคลเซียมได้ไม่ดี · และชนิดที่ไม่ทราบสาเหตุโดยที่ต่อมพาราไทรอยด์ทำงานปกติ ${S.r}</li>
<li><b>ถึง 20% ของนิ่ว calcium oxalate มาพร้อมการขับกรดยูริกมากเกิน</b> โดยอาจมีหรือไม่มีแคลเซียมในปัสสาวะสูงร่วม · กลไกคือ<b>ผลึกกรดยูริกใน collecting duct ทำหน้าที่เป็นแกนให้ calcium oxalate มาเกาะ</b> ${S.r}</li>
<li>อีก <b>5%</b> มาจาก<b>ออกซาเลตในปัสสาวะสูง</b> ซึ่งมีทั้งชนิดที่ถ่ายทอดทางพันธุกรรมและที่ได้รับมา ${S.r}</li>
<li><b>ซิเตรตในปัสสาวะต่ำ</b>ก็ทำให้เกิดนิ่วแคลเซียมได้ พบได้ทั้งแบบไม่ทราบสาเหตุ และแบบที่มาพร้อมภาวะเลือดเป็นกรดหรือท้องเสียเรื้อรัง — ซิเตรตเป็นสารยับยั้งตามธรรมชาติ เมื่อขาดไปจึงเกิดนิ่วง่าย ${S.r}</li>
<li>ส่วนหนึ่งหาสาเหตุไม่ได้เลย เรียกว่า <b>idiopathic calcium stone disease</b> ${S.r}</li></ul>
<h3>ชนิดอื่นกับเงื่อนไขของมัน</h3><ul>
<li><b>Magnesium ammonium phosphate หรือ struvite</b> เกิดหลังการติดเชื้อ<b>แบคทีเรียที่ย่อยยูเรียได้</b> เช่น Proteus และ staphylococci บางชนิด ซึ่งเปลี่ยนยูเรียเป็นแอมโมเนียจนปัสสาวะเป็นด่าง เกลือจึงตกตะกอน · เป็น<b>นิ่วที่โตที่สุด</b>เพราะยูเรียที่ขับออกมามีมาก ${S.r}</li>
<li><b>Uric acid stones</b> พบในผู้ที่กรดยูริกสูง แต่จุดที่ต้องจำคือ<b>มากกว่าครึ่งของผู้ป่วยนิ่วกรดยูริกไม่มีกรดยูริกสูงเลย</b> — สิ่งที่ร่วมกันคือ<b>แนวโน้มที่จะขับปัสสาวะที่มี pH ต่ำกว่า 5.5</b> · และต่างจากนิ่วแคลเซียมที่ทึบรังสี นิ่วชนิดนี้<b>ไม่ทึบรังสี</b> ${S.r}</li>
<li><b>Cystine stones</b> จาก cystinuria และ<b>ก่อตัวที่ pH ต่ำเช่นเดียวกัน</b> ซึ่งอธิบายว่าทำไมการทำให้ปัสสาวะเป็นด่างจึงใช้รักษาได้ทั้งสองชนิด ${S.r}</li></ul>`});
HS("330","b","st-mx","Acute colic & prevention",{
draw:()=>tbl(["Step","What to do"],[
 ["Imaging","noncontrast CT (low-dose) เป็นมาตรฐาน"],
 ["Acute","analgesia · alpha blocker เพิ่มการหลุดเอง"],
 ["Urgent urology referral","obstruction + infection · ไตข้างเดียว · ปวดดื้อยา"],
 ["Prevention, whatever the stone","urine ≥2 L/วัน"],
 ["Ca oxalate · uric acid","thiazide, citrate · alkalinize ± allopurinol"],
 ["Cystine · struvite","K citrate (ไม่ใช้ Na), tiopronin · ผ่าตัดเอาออก + acetohydroxamic acid"]]),
notes:()=>`<h3>ตำแหน่งและขนาด</h3><ul>
<li><b>นิ่วเป็นข้างเดียวราว 80% ของผู้ป่วย</b> ${S.r}</li>
<li>ตำแหน่งที่ก่อตัวบ่อยที่สุดคือ<b>ใน calyces และ renal pelvis</b> และในกระเพาะปัสสาวะ ${S.r}</li>
<li>นิ่วที่เกิดใน renal pelvis มักอยู่เล็ก โดย<b>เฉลี่ยราว 2 ถึง 3 มิลลิเมตร</b> ผิวอาจเรียบหรือเป็นก้อนขรุขระมีหนามแหลม · มักพบหลายก้อนในไตเดียวกัน ${S.r}</li>
<li>เมื่อเกลือพอกทับไปเรื่อย ๆ จะกลายเป็น<b>staghorn calculus</b> ที่แตกกิ่งเป็นรูปหล่อของระบบ pelvis และ calyces ทั้งหมด ${S.r}</li></ul>
<h3>อาการทั้งสามแบบ</h3><ul>
<li><b>ไม่มีอาการเลย</b> — พบโดยบังเอิญ ${S.r}</li>
<li><b>ปวดบิดรุนแรง</b> คือ renal colic ร่วมกับปวดท้อง ${S.r}</li>
<li><b>ไตเสียหายอย่างมีนัยสำคัญ</b> ซึ่งเป็นปลายทางที่ต้องป้องกัน ${S.r}</li>
<li>จุดที่มักเข้าใจผิดคือ<b>นิ่วก้อนใหญ่มักไม่ปวด</b> แต่มาด้วย<b>เลือดปนปัสสาวะ</b>แทน ส่วนก้อนเล็กที่เคลื่อนลงท่อไตคือก้อนที่ปวดที่สุด ${S.r}</li></ul>
<h3>ภาวะแทรกซ้อน</h3><ul>
<li>นิ่วเปิดทางให้<b>ติดเชื้อซ้อน</b>ได้สองทาง — จากการอุดกั้นที่ทำให้ปัสสาวะค้าง และจาก<b>การครูดบาดเยื่อบุ</b> ${S.r}</li>
<li>และเพราะ struvite เกิดจากการติดเชื้ออยู่แล้ว การติดเชื้อกับนิ่วจึง<b>ส่งเสริมกันเป็นวงจร</b> ${S.r}</li></ul>`});

/* ---------- 331 · Obstruction ---------- */
HS("331","a","uo-cause","Causes by level",{
draw(){let b="";const L=[["Kidney / UPJ","UPJ stenosis (เด็ก), stones, papillary necrosis, tumor"],["Ureter","stones, stricture, tumor, retroperitoneal fibrosis, pregnancy, iatrogenic"],["Bladder","neurogenic bladder, tumor, stones · lesions ระดับนี้ทำให้ bilateral"],["Bladder outlet / urethra","BPH, prostate ca, posterior urethral valves (เด็กชาย), stricture"]];
 L.forEach(([n,d],i)=>{const y=14+i*80;b+=`<rect class="box ${["vn","","gl","ar"][i]}" x="14" y="${y}" width="612" height="70" rx="12"/>`+T(30,y+28,n,{a:"start",c:"bh"})+T(30,y+52,d,{a:"start",c:"s"})});return svg(b,"0 0 640 340")},
notes:()=>`<h3>วิธีคิดเรื่องตำแหน่ง</h3><ul>
<li>การอุดกั้นเกิดได้ทุกจุด<b>ตั้งแต่ท่อปัสสาวะขึ้นไปจนถึง renal pelvis</b> และแบ่งเป็นสองแบบคือ<b>รอยโรคในตัวทางเดินปัสสาวะเอง</b> กับ<b>สิ่งที่กดจากภายนอก</b> ${S.r}</li>
<li>คำถามแรกที่ใช้ได้เสมอคือ<b>ข้างเดียวหรือสองข้าง</b> — รอยโรคเหนือกระเพาะปัสสาวะมักเป็นข้างเดียว ส่วนรอยโรคที่คอกระเพาะปัสสาวะ ต่อมลูกหมาก หรือท่อปัสสาวะจะกระทบทั้งสองข้าง และเป็นกลุ่มเดียวที่ทำให้เกิด<b>postrenal AKI</b> ${S.x}</li></ul>
<h3>ไล่จากบนลงล่าง</h3><ul>
<li><b>Renal pelvis</b> — นิ่ว · เนื้องอก · <b>ureteropelvic stricture</b> ซึ่งเป็นสาเหตุที่พบในเด็ก ${S.r}</li>
<li><b>Ureter จากภายใน</b> — นิ่ว · เนื้องอก · <b>ก้อนเลือด</b> · <b>papilla ที่หลุดลอก</b> ซึ่งโยงกลับไปหาเบาหวาน sickle cell และการใช้ยาแก้ปวดเกิน · และการอักเสบ ${S.r}</li>
<li><b>Ureter จากภายนอก</b> — <b>การตั้งครรภ์</b> · เนื้องอกของอวัยวะข้างเคียงโดยเฉพาะ<b>มะเร็งปากมดลูก</b> · และ <b>retroperitoneal fibrosis</b> ${S.r}</li>
<li><b>กระเพาะปัสสาวะ</b> — นิ่ว · เนื้องอก · และสาเหตุเชิงหน้าที่คือ<b>กระเพาะปัสสาวะพิการจากระบบประสาท</b> ทั้งจากไขสันหลังบาดเจ็บและจากเบาหวานที่เป็นมานาน ${S.r}</li>
<li><b>ต่อมลูกหมาก</b> — ต่อมโตชนิดไม่ร้าย และมะเร็งต่อมลูกหมาก ${S.r}</li>
<li><b>ท่อปัสสาวะ</b> — <b>posterior urethral valve</b> ในทารกเพศชาย · ท่อตีบ · เนื้องอกซึ่งพบน้อย ${S.r}</li>
<li>สาเหตุอื่นที่ไม่เข้ากับการไล่ตามระดับ — <b>vesicoureteral reflux</b> · <b>มดลูกหย่อนและกระเพาะปัสสาวะหย่อน</b> ${S.r}</li></ul>`});
HS("331","a","uo-phys","Pathophysiology",{
draw:()=>tbl(["Pattern","Effect on the kidney"],[
 ["Hemodynamic","RBF ↑ ระยะแรก (PG, NO) → GFR ↓, medullary flow ↓"],
 ["Concentrating defect","acquired nephrogenic DI (ไม่ตอบสนอง vasopressin)"],
 ["Partial bilateral","distal RTA · hyperkalemia · salt wasting"],
 ["Acute partial bilateral","เลียนแบบ prerenal (BUN/Cr สูง, ปัสสาวะเข้มข้น, Na คั่ง)"],
 ["Chronic","CKD + ECF ขยาย → HT"]]),
notes:()=>`<h3>ทำไมการอุดกั้นถึงทำลายไต</h3><ul>
<li>ลำดับเหตุการณ์เริ่มจาก<b>ความดันในระบบรวบรวมปัสสาวะสูงขึ้น</b> ซึ่งย้อนไปถึง Bowman space ทำให้แรงที่ต้านการกรองเพิ่มขึ้นและ GFR ตกลง ${S.x}</li>
<li>สิ่งที่ทำลายเนื้อไตจริง ๆ ไม่ใช่ความดันเพียงอย่างเดียว แต่เป็น<b>การอักเสบของเนื้อเยื่อระหว่างท่อไตที่ตามมา ซึ่งเกิดขึ้นแม้ไม่มีการติดเชื้อ</b> และลงเอยด้วยท่อไตฝ่อพร้อมพังผืดกระจายทั่ว cortex ${S.r}</li>
<li>นี่คือเหตุผลที่<b>เวลาสำคัญกว่าความรุนแรง</b> — การอุดกั้นบางส่วนที่ทิ้งไว้นานทำลายไตได้มากกว่าการอุดกั้นสมบูรณ์ที่แก้ได้เร็ว ${S.x}</li></ul>
<h3>ผลต่อท่อไตที่อธิบายอาการ</h3><ul>
<li>ท่อไตที่ถูกยืดและอักเสบ<b>เสียความสามารถในการเข้มข้นปัสสาวะก่อนเป็นอย่างแรก</b> ผู้ป่วยจึงปัสสาวะมากและตื่นปัสสาวะกลางคืน ทั้งที่กำลัง "อุดกั้น" อยู่ ซึ่งฟังดูขัดกันแต่เป็นภาพที่พบจริง ${S.x}</li>
<li>ตามมาด้วย<b>การเสียความสามารถในการขับกรดและโพแทสเซียม</b> จึงเกิดภาวะเลือดเป็นกรดแบบ anion gap ปกติ ร่วมกับโพแทสเซียมสูง ${S.x}</li>
<li>เมื่อแก้การอุดกั้นสองข้างแล้วจึงเกิด <b>post-obstructive diuresis</b> — ปัสสาวะออกมากจากทั้งยูเรียที่คั่งซึ่งลากน้ำตามออกมา และจากท่อไตที่ยังเข้มข้นปัสสาวะไม่ได้ · ต้องชดเชยน้ำและเกลือแร่และติดตามอย่างใกล้ชิด ${S.h}</li></ul>
<h3>ภาวะแทรกซ้อน</h3><ul>
<li>ปัสสาวะที่ค้างเป็น<b>อาหารเลี้ยงเชื้อ</b> การติดเชื้อซ้อนบนการอุดกั้นจึงเป็นภาวะฉุกเฉิน เพราะกลายเป็น pyonephrosis และ sepsis ได้เร็ว ${S.r}</li>
<li>การค้างยังทำให้<b>เกิดนิ่วง่ายขึ้น</b> และนิ่วก็ยิ่งอุดกั้นมากขึ้น เป็นวงจรที่ส่งเสริมกันเอง ${S.r}</li></ul>`});
HS("331","b","uo-dx","Diagnosis, relief & recovery",{
draw:()=>flow([["Unexplained renal failure","ใส่สายสวนปัสสาวะ",""],["มี diuresis","obstruction ใต้ bladder neck","gl"],["ไม่มี diuresis → ultrasound","hydronephrosis?","vn"],["มี hydronephrosis","CT หาตำแหน่งและสาเหตุ → urology","ar"],["Relief","GFR ฟื้นบางส่วนถ้าอุด 1–2 สัปดาห์ · >8 สัปดาห์ฟื้นยาก",""]]),
notes:()=>`<ul><li>Ultrasound อาจ <b>ไม่เห็น hydronephrosis</b> ถ้าอุด &lt;48 ชม., volume contraction, staghorn, retroperitoneal fibrosis, infiltrative disease ${S.h}</li>
 <li>Bladder volume ประเมินด้วย bedside ultrasound ${S.h}</li><li>Bilateral และการทำงานไม่เท่ากัน → เลือกข้างที่จะ decompress ก่อน ${S.h}</li>
 <li><b>Postobstructive diuresis</b>: หลังแก้ bilateral complete obstruction (ไม่ใช่ข้างเดียว) · ปัสสาวะ hypotonic มี Na, K, PO₄, Mg มาก · จาก ECF เกินที่ถูกแก้ไข, natriuretic factors, urea osmotic diuresis, nephrogenic DI · ส่วนใหญ่หยุดเองเมื่อ ECF กลับปกติ ${S.h}</li></ul>`});

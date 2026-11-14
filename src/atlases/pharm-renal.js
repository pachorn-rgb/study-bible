/* ================= Renal pharmacology ================= */
Object.assign(ST,{});
/* ---------- master nephron map: every drug sits on its transporter ---------- */
function nephronMap(){let b="";const hot=k=>on(k)?" hot":"";
 /* zones */
 b+=`<rect class="zone cx" x="10" y="14" width="740" height="170" rx="14"/><rect class="zone om" x="10" y="184" width="740" height="130"/><rect class="zone im" x="10" y="314" width="740" height="140" rx="14"/>`;
 b+=T(22,34,"Cortex",{a:"start",c:"s m"})+T(22,206,"Outer medulla",{a:"start",c:"s m"})+T(22,336,"Inner medulla",{a:"start",c:"s m"})+T(22,352,"osmolality ↑",{a:"start",c:"s m"});
 /* vessels + glomerulus */
 b+=`<path class="p-blood" d="M20,150 C50,140 60,120 72,104"/><path class="p-blood eff" d="M104,120 C112,146 116,160 120,176"/>`;
 b+=T(24,170,"afferent",{a:"start",c:"s m"})+T(126,186,"efferent (AT₁)",{a:"start",c:"s m"})+glow(114,150,"at1",11);
 b+=`<circle class="p-bow" cx="90" cy="92" r="38"/><circle class="p-glom" cx="88" cy="94" r="24"/>`+T(88,98,"Glom",{c:"s"});
 /* tube: PCT → thin descending → loop → TAL → DCT → CD */
 const tube="M126,88 C150,58 176,122 200,90 S246,58 270,92 S296,118 300,140 L300,396 C300,430 360,430 360,396 L360,160 C360,128 392,120 420,128 S470,140 500,118 S540,100 560,104";
 b+=`<path class="p-tubeo" d="${tube}"/><path class="p-tubei" d="${tube}"/><path class="p-tubeo" d="M560,96 L560,446"/><path class="p-tubei" d="M560,96 L560,446"/>`;
 b+=T(206,128,"PCT · 65% Na⁺",{c:"bh"})+T(292,300,"thin descending",{a:"end",c:"s"})+T(292,316,"(H₂O ออก)",{a:"end",c:"s m"});
 b+=T(368,372,"TAL · 15–25%",{a:"start",c:"bh"})+T(440,96,"DCT · 4–8%",{c:"bh"})+T(548,436,"Collecting duct · 2–5%",{a:"end",c:"bh"});
 /* targets */
 b+=glow(172,86,"ca")+rec(172,86,"",false)+T(172,66,"CA",{c:"s"});
 b+=glow(246,76,"sglt2")+rec(246,76,"",false)+T(246,56,"SGLT2",{c:"s"});
 b+=glow(300,230,"osm",14)+glow(200,90,"osm",14);
 b+=glow(360,262,"nkcc2")+rec(360,262,"NKCC2",true);
 b+=glow(470,132,"ncc")+rec(470,132,"",true)+T(470,158,"NCC",{c:"s"});
 b+=glow(560,198,"enac")+rec(560,198,"",true)+T(548,202,"ENaC",{a:"end",c:"s"});
 b+=glow(560,244,"mr")+`<rect class="p-enz${hot("mr")}" x="508" y="234" width="40" height="20" rx="6"/>`+T(528,248,"MR",{c:"s"})+T(548,272,"← aldosterone",{a:"end",c:"s m"});
 b+=glow(560,356,"v2")+rec(560,356,"",true)+T(548,350,"V₂ → AQP2",{a:"end",c:"s"})+T(548,366,"← ADH",{a:"end",c:"s m"});
 /* pills */
 b+=pill(150,30,"Acetazolamide","inh","ca");
 b+=pill(214,154,"SGLT2 inhibitors","inh","sglt2");
 b+=pill(212,214,"Mannitol","mod","osm");
 b+=pill(440,292,"Loop diuretics","inh","nkcc2");
 b+=pill(458,180,"Thiazides","inh","ncc");
 b+=pill(664,198,"Amiloride · Triamterene","bl","enac");
 b+=pill(664,244,"Spironolactone · Eplerenone","bl","mr");
 b+=pill(664,340,"Tolvaptan · Conivaptan","bl","v2");
 b+=pill(664,376,"Desmopressin","ag","v2d");
 b+=pill(92,238,"ACEi · ARB","bl","at1");
 if(on("v2d"))b+=glow(560,356,"v2d");
 return psvg(b,"0 0 760 464")}
const NMAP=keys=>()=>{HL=keys;return nephronMap()};
const NT=[["all","Show all drugs"]];

/* diuretic electrolyte grid (Katzung Table 15-2 + Ca/Mg text) */
function lyteGrid(){const C=["NaCl","NaHCO₃","K⁺","Body pH","Ca²⁺ ในปัสสาวะ"],R=[["CA inhibitors",["+","+++","+","↓ acidosis","↑"]],["Loop",["++++","0","+","↑ alkalosis","↑"]],["Thiazides",["++","+","+","↑ alkalosis","↓"]],["Loop + thiazide",["+++++","+","++","↑ alkalosis","—"]],["K⁺-sparing",["+","(+)","−","↓ acidosis","—"]]];
 const x0=170,cw=100,rh=50;let b="";C.forEach((c,i)=>b+=T(x0+cw*i+cw/2,30,c,{c:"bh"}));
 R.forEach(([n,v],j)=>{const y=44+j*rh;b+=T(20,y+30,n,{a:"start",c:"bh"});v.forEach((t,i)=>{const lvl=(t.match(/\+/g)||[]).length,neg=t==="−",x=x0+cw*i;
  const cls=i===3?(t.includes("acid")?"acid":"alk"):i===4?(t==="↑"?"up":t==="↓"?"dn":"z"):neg?"neg":"l"+Math.min(lvl,5);
  b+=`<rect class="lg ${cls}" x="${x+3}" y="${y+4}" width="${cw-6}" height="${rh-8}" rx="9"/>`+T(x+cw/2,y+30,t,{c:"bh"})})});
 b+=T(340,312,"+ = ขับออกเพิ่ม · − = ขับออกลดลง · 0 = ไม่เปลี่ยน",{c:"s m"});return psvg(b,"0 0 680 324")}

Object.assign(GN,{a:"Foundations",b:"Diuretics",c:"Water & RAAS",d:"Using diuretics",e:"Treating kidney disease",f:"Fluids, K⁺, Na⁺ & acid–base",g:"ทางเดินปัสสาวะส่วนล่าง"});

/* ---------- a · foundations ---------- */
SEC.push({id:"nephron",k:"a",t:"Nephron drug map",mm:"Nephron drug map",drugs:"",act:[],tools:NT,leg:["inh","bl","ag","mod"],draw:NMAP(["ca","sglt2","osm","nkcc2","ncc","enac","mr","v2","v2d","at1"]),
notes:()=>`<div class="pearl">ยาแต่ละกลุ่มวางอยู่บน transporter ที่มันออกฤทธิ์ · ในหัวข้ออื่น ยาของหัวข้อนั้นจะสว่าง กด <b>Show all drugs</b> เพื่อดูทั้งหมด</div>
 <h3>Na⁺ ถูกดูดกลับที่ไหน</h3>${tbl(["Segment","% filtered Na⁺","Transporter → ยา"],[["PCT","65% (+ HCO₃⁻ 85%, glucose ~100%)","NHE3/CA → acetazolamide · SGLT2 → gliflozin"],["Thin descending","น้ำอย่างเดียว","aquaporin (mannitol ต้าน)"],["TAL","15–25%","NKCC2 → loop diuretics"],["DCT","4–8%","NCC → thiazides"],["Collecting tubule","2–5%","ENaC → amiloride · MR → spironolactone · V₂ → vaptans"]])}${S.k}
 <h3>หลักที่ใช้ได้ทุกกลุ่ม</h3><ul><li>ยาส่วนใหญ่ต้อง <b>ถูกหลั่งเข้า lumen ที่ proximal tubule</b> (organic acid transporter) ถึงจะออกฤทธิ์ → NSAID, probenecid แข่งการหลั่ง ${S.k}</li>
 <li>ยาที่เพิ่ม Na⁺ ไปถึง collecting duct → K⁺ และ H⁺ ถูกหลั่งมากขึ้น → <b>hypokalemic metabolic alkalosis</b> ${S.k}</li><li>ยิ่งออกฤทธิ์ต้น nephron ส่วนปลายยิ่งชดเชยได้ ประสิทธิภาพจึงขึ้นกับ segment ที่ดูดกลับมากและส่วนปลายชดเชยไม่ทัน ${S.k}</li></ul>`});

SEC.push({id:"lytes",k:"a",t:"Urine & blood changes by diuretic",mm:"Electrolyte effects",drugs:"",act:[],leg:[],draw:lyteGrid,
notes:()=>`<h3>อ่านตาราง</h3><ul><li><b>Loop</b> ขับ NaCl มากที่สุด · Ca²⁺ และ Mg²⁺ ถูกขับมากขึ้น (เสีย lumen-positive potential) ${S.k}</li><li><b>Thiazide</b> ลดการขับ Ca²⁺ (ดูดกลับมากขึ้น) แต่ hypomagnesemia เกิดได้มากกว่า loop ${S.k}</li>
 <li><b>CA inhibitor</b> และ <b>K⁺-sparing</b> → hyperchloremic metabolic acidosis ${S.k}</li><li>Loop + thiazide → ขับ NaCl เสริมกันแรงมาก และเสีย K⁺ มาก ${S.k}</li></ul>
 <h3>Mnemonic ช่วยจำ</h3><ul><li>"Loops Lose Ca²⁺" · thiazide เก็บ Ca²⁺ ${S.x}</li><li>Hyper-GLUC ของ thiazide: hyperGlycemia, hyperLipidemia, hyperUricemia, hyperCalcemia ${S.x}</li></ul>`});

/* ---------- b · diuretics ---------- */
SEC.push({id:"cai",k:"b",t:"Carbonic anhydrase inhibitors",mm:"CA inhibitors",drugs:"acetazolamide · methazolamide · dorzolamide",act:["inh"],tools:NT,leg:["inh"],draw:NMAP(["ca"]),
notes:()=>`<h3>กลไก</h3><ul><li>ยับยั้ง carbonic anhydrase ใน PCT → ดูดกลับ NaHCO₃ ไม่ได้ → alkaline diuresis ${S.k}</li><li>ยับยั้งได้ ~85% ของ HCO₃⁻ ที่ PCT แต่ทั้งไต ~45% · ฤทธิ์ diuretic <b>หมดใน 2–3 วัน</b> (HCO₃⁻ ใน filtrate ลด) ${S.k}</li></ul>
 <h3>PK</h3><ul><li>Oral ดูดซึมดี · urine pH ขึ้นใน 30 นาที สูงสุด 2 ชม. อยู่ 12 ชม. · ขับทาง PCT S2 → ลดขนาดในไตเสื่อม ${S.k}</li></ul>
 <h3>ใช้เมื่อ</h3><ul><li><b>Glaucoma</b> (ลด aqueous humor) · topical dorzolamide, brinzolamide ${S.k}</li><li><b>Acute mountain sickness</b> (125 mg bid ก็พอ) · central sleep apnea ${S.k}</li>
 <li><b>Metabolic alkalosis</b> ในคนที่ให้ volume ไม่ได้ เช่น HF ที่ใช้ diuretic มาก ${S.k}</li><li>Urinary alkalinization (cystine pH 7–7.5, uric acid 6–6.5) แต่ได้ผลแค่ 2–3 วัน · idiopathic intracranial HTN, CSF leak ${S.k}</li></ul>
 <h3>ADR</h3><ul><li>Hyperchloremic metabolic acidosis · <b>calcium phosphate stones</b> · เสีย K⁺ และ phosphate ${S.k}</li><li>ง่วง, paresthesia · sulfonamide hypersensitivity (DRESS, bone marrow suppression) ${S.k}</li></ul>
 <div class="pearl">ห้ามใน <b>cirrhosis</b>: ปัสสาวะด่าง → NH₄⁺ เปลี่ยนเป็น NH₃ ถูกดูดกลับ → hyperammonemia, hepatic encephalopathy ${S.k}</div>`});

SEC.push({id:"sglt2",k:"b",t:"SGLT2 inhibitors",mm:"SGLT2 inhibitors",drugs:"dapagliflozin · empagliflozin · canagliflozin",act:["inh"],tools:NT,leg:["inh"],draw:NMAP(["sglt2"]),
notes:()=>`<h3>กลไก</h3><ul><li>SGLT2 ใน PCT ดูดกลับ glucose ~90% · ยาทำให้ขับ glucose ได้ 30–50% ของที่กรอง → glycosuria + natriuresis เล็กน้อย ${S.k}</li><li>Angiotensin II เพิ่มการสร้าง SGLT2 ผ่าน AT₁ ${S.k}</li></ul>
 <h3>ใช้เมื่อ</h3><ul><li><b>Cardio- และ renoprotection</b> ตอนนี้เป็นข้อบ่งใช้หลัก มากกว่าเบาหวาน ${S.k}</li><li>Dapagliflozin อนุมัติใน HFrEF ทั้งมีและไม่มีเบาหวาน ${S.k}</li><li>DM: HbA1c ลด 0.5–1% · น้ำหนักลด ~3 kg · SBP ลด ~5 mmHg ${S.k}</li></ul>
 <h3>ทำไมปกป้องไต</h3><ul><li>ลด intraglomerular pressure คล้าย ACEi → <b>GFR ลดช่วงแรก</b> แล้วชะลอ CKD ${S.k}</li></ul>
 <h3>ADR</h3><ul><li><b>Genital fungal infection</b> (ผู้หญิงเพิ่ม ~6 เท่า), UTI เพิ่มเล็กน้อย ${S.k}</li><li>Hypoglycemia น้อย · มีรายงาน AKI ${S.k}</li><li>Euglycemic DKA ${S.x}</li></ul>
 <div class="pearl">Rifampin ลด exposure ของ dapagliflozin ~22% ${S.k}</div>`});

SEC.push({id:"osmotic",k:"b",t:"Osmotic diuretics",mm:"Osmotic diuretics",drugs:"mannitol",act:["mod"],tools:NT,leg:["mod"],draw:NMAP(["osm"]),
notes:()=>`<h3>กลไก</h3><ul><li>ถูกกรองแต่ไม่ถูกดูดกลับ → ดึงน้ำไว้ใน <b>PCT และ thin descending limb</b> (ส่วนที่น้ำผ่านได้) · ต้าน ADH ใน collecting tubule ${S.k}</li><li>ขับน้ำมากกว่า Na⁺ → ในที่สุด hypernatremia ${S.k}</li></ul>
 <h3>PK</h3><ul><li>ต้องให้ <b>IV</b> (กินแล้วเป็น osmotic diarrhea) · ไม่ถูก metabolize ขับใน 30–60 นาที ${S.k}</li></ul>
 <h3>ใช้เมื่อ</h3><ul><li>ลด <b>intracranial pressure</b> และ intraocular pressure ก่อนผ่าตัดตา: 1–2 g/kg IV · ICP ลดใน 60–90 นาที ${S.k}</li><li>บางคนใช้กัน dialysis disequilibrium (หลักฐานน้อย) ${S.k}</li></ul>
 <h3>ADR</h3><ul><li><b>ECF expansion</b> ก่อนขับ → อันตรายใน HF (pulmonary edema) ${S.k}</li><li>Dehydration, hypernatremia, hyperkalemia · ไตวายมาก → mannitol ค้าง → hyponatremia ${S.k}</li><li><b>AKI</b> ~6–7% ${S.k}</li></ul>`});

SEC.push({id:"loop",k:"b",t:"Loop diuretics",mm:"Loop diuretics",drugs:"furosemide · bumetanide · torsemide · ethacrynic acid",act:["inh"],tools:NT,leg:["inh"],draw:NMAP(["nkcc2"]),
notes:()=>`<h3>กลไก</h3><ul><li>ยับยั้ง <b>NKCC2</b> ที่ TAL → ขับ NaCl มากที่สุด (efficacy สูงสุด) ${S.k}</li><li>เสีย lumen-positive potential → ขับ <b>Ca²⁺ และ Mg²⁺</b> มากขึ้น ${S.k}</li><li>เหนี่ยวนำ COX-2 → PGE₂ ช่วยฤทธิ์ · <b>NSAID ลดฤทธิ์</b> · ลด LV filling pressure ก่อนปัสสาวะออก ${S.k}</li></ul>
 <h3>ขนาดเทียบเท่า</h3>${tbl(["ยา","oral/วัน","เทียบเท่า"],[["Furosemide","20–80 mg","20 mg (bioavailability แปรผัน)"],["Torsemide","5–20 mg","10 mg · ออกฤทธิ์ 4–6 ชม."],["Bumetanide","0.5–2 mg","0.5 mg"],["Ethacrynic acid","50–200 mg","~50 mg · ไม่ใช่ sulfonamide"]])}${S.k}
 <h3>ใช้เมื่อ</h3><ul><li><b>Acute pulmonary edema</b> และ edema อื่น ๆ · HTN ที่มีไตเสื่อม ${S.k}</li><li><b>Hypercalcemia</b> (คู่กับ saline) · <b>hyperkalemia</b> · anion overdose (Br⁻, F⁻, I⁻) ${S.k}</li></ul>
 <h3>ADR</h3><ul><li><b>Hypokalemic metabolic alkalosis</b> · hypomagnesemia · hyperuricemia/gout · dehydration ${S.k}</li><li><b>Ototoxicity</b> (NKCC1 ในหูชั้นใน) โดยเฉพาะร่วม aminoglycoside ${S.k}</li><li>Sulfonamide allergy (rash, interstitial nephritis) · ใช้ ethacrynic acid แทน ${S.k}</li></ul>
 <div class="pearl">AKI: loop ช่วยเพิ่มปัสสาวะและขับ K⁺ แต่ <b>ไม่ป้องกันหรือย่นระยะ AKI</b> ${S.k}${S.p}</div>`});

SEC.push({id:"thiazide",k:"b",t:"Thiazides",mm:"Thiazides",drugs:"hydrochlorothiazide · chlorthalidone · indapamide · metolazone",act:["inh"],tools:NT,leg:["inh"],draw:NMAP(["ncc"]),
notes:()=>`<h3>กลไก</h3><ul><li>ยับยั้ง <b>NCC</b> ที่ DCT · <b>เพิ่ม</b> การดูดกลับ Ca²⁺ (Na⁺ ในเซลล์ลด → Na⁺/Ca²⁺ exchange เพิ่ม) ${S.k}</li><li>ฤทธิ์อาศัย prostaglandin เช่นกัน · NSAID ลดฤทธิ์ ${S.k}</li></ul>
 <h3>ยาในกลุ่ม</h3><ul><li>HCTZ 25–100 mg · chlorthalidone 25–50 mg (ออกฤทธิ์นาน, มีฤทธิ์ CA inhibitor) · chlorothiazide ตัวเดียวที่ให้ IV · indapamide ขับทางน้ำดีเป็นหลัก · metolazone = sulfonamide คล้าย thiazide ${S.k}</li></ul>
 <h3>ใช้เมื่อ</h3><ul><li>(1) Hypertension (2) heart failure (3) <b>นิ่วจาก idiopathic hypercalciuria</b> (4) <b>nephrogenic DI</b> ${S.k}</li></ul>
 <h3>ADR</h3><ul><li>Hypokalemic metabolic alkalosis · <b>hyponatremia</b> (ผู้หญิงสูงอายุ) ${S.k}</li><li>Hyperglycemia (HCTZ &gt;50 mg/d; ผ่าน K-ATP channel ใน β cell, แย่ลงเมื่อ K⁺ ต่ำ) · LDL ↑ 5–15% · uric acid ↑ · เปิดโปง hypercalcemia ${S.k}</li>
 <li>Sulfonamide allergy, photosensitivity · <b>skin cancer</b> เพิ่มขึ้น · hypomagnesemia ${S.k}</li></ul>
 <div class="pearl">ใช้ thiazide/amiloride รักษา <b>lithium-induced nephrogenic DI</b> แต่ต้องเฝ้าระดับ Li⁺ เพราะ diuretic ลดการขับ Li⁺ ${S.k}</div>`});

SEC.push({id:"ksparing",k:"b",t:"K⁺-sparing diuretics",mm:"K⁺-sparing diuretics",drugs:"spironolactone · eplerenone · finerenone · amiloride · triamterene",act:["bl"],tools:NT,leg:["bl"],draw:NMAP(["enac","mr"]),
notes:()=>`<h3>2 กลไก</h3><ul><li><b>MR antagonist</b>: spironolactone (steroid, active metabolite canrenone นาน), eplerenone (selective กว่า), finerenone (non-steroidal) ${S.k}</li><li><b>ENaC blocker</b>: amiloride (ไม่ถูก metabolize), triamterene (ตับ, ครึ่งชีวิตสั้น) ${S.k}</li></ul>
 <h3>ใช้เมื่อ</h3><ul><li><b>Hyperaldosteronism</b> ทั้ง primary (Conn) และ secondary (HF, cirrhosis, nephrotic) ${S.k}</li><li>HFrEF: spironolactone (RALES), eplerenone หลัง MI ลดตาย ~15% ${S.k}</li>
 <li>แก้ hypokalemia จาก loop/thiazide · <b>Liddle syndrome</b> → amiloride · Li⁺-induced NDI → amiloride ${S.k}</li><li>Spironolactone: acne, female-pattern hair loss · finerenone ลด albuminuria ใน CKD + DM ${S.k}</li></ul>
 <h3>ADR</h3><ul><li><b>Hyperkalemia</b> (เสี่ยงมากในไตเสื่อม หรือใช้ร่วม ACEi, ARB, β-blocker, NSAID, aliskiren) ${S.k}</li><li>Hyperchloremic metabolic acidosis (คล้าย type IV RTA) ${S.k}</li>
 <li>Spironolactone: <b>gynecomastia</b>, impotence (anti-androgen) · eplerenone ไม่มี ${S.k}</li><li>Triamterene: นิ่ว, AKI เมื่อใช้ร่วม indomethacin ${S.k}</li></ul>
 <div class="pearl">หยุด oral K⁺ เมื่อเริ่ม K⁺-sparing · eplerenone ระดับสูงขึ้นมากกับ CYP3A4 inhibitor ${S.k}</div>`});

/* ---------- c · water & RAAS ---------- */
SEC.push({id:"adh",k:"c",t:"ADH antagonists & agonists",mm:"ADH drugs (vaptans · DDAVP)",drugs:"tolvaptan · conivaptan · desmopressin · demeclocycline",act:["bl","ag"],tools:NT,leg:["bl","ag"],draw:NMAP(["v2","v2d"]),
notes:()=>`<h3>Vaptans (ADH receptor antagonists)</h3><ul><li><b>Tolvaptan</b> (oral, V₂ selective, t½ 12–24 ชม.) · <b>conivaptan</b> (IV, V₁a + V₂) ${S.k}</li><li>Demeclocycline, lithium ลด cAMP ที่ ADH กระตุ้น (กลไกไม่ชัด) ${S.k}</li></ul>
 <h3>ใช้เมื่อ</h3><ul><li><b>SIADH</b> เมื่อจำกัดน้ำไม่ได้ผล: tolvaptan 7.5–60 mg/d หรือ demeclocycline 600–1200 mg/d ${S.k}</li><li>Hyponatremia ใน HF (conivaptan ลด SVR ผ่าน V₁a) · cirrhosis ${S.k}</li><li><b>ADPKD</b>: tolvaptan ชะลอไตโตและไตเสื่อม ${S.k}</li></ul>
 <h3>ADR</h3><ul><li>Nephrogenic DI, <b>hypernatremia</b> ถ้าไม่เฝ้า Na⁺ · กระหายน้ำ ปากแห้ง ${S.k}</li><li>Tolvaptan: <b>LFT ↑</b> (ขนาดสูงใน ADPKD) · boxed warning ให้เริ่มใน รพ. · เลี่ยง strong CYP3A4 inhibitor ${S.k}${S.p}</li></ul>
 <h3>Desmopressin (V₂ agonist)</h3><ul><li>ADH หรือ analog ได้ผลเฉพาะ <b>central DI</b> · nephrogenic DI ใช้ thiazide ${S.k}</li><li>ใช้ใน nocturnal enuresis, hemophilia A/von Willebrand disease ${S.x}</li></ul>`});

SEC.push({id:"raas",k:"c",t:"ACE inhibitors, ARBs & aliskiren (kidney)",mm:"RAAS blockers",drugs:"enalapril · lisinopril · losartan · valsartan · aliskiren",act:["bl","inh"],tools:NT,leg:["bl"],draw:NMAP(["at1"]),
notes:()=>`<h3>กลไก</h3><ul><li><b>ACEi</b>: ยับยั้ง ACE → Ang II ↓ และ bradykinin ↑ · <b>ARB</b>: บล็อก AT₁ (ไม่มีผลต่อ bradykinin) · <b>aliskiren</b>: ยับยั้ง renin โดยตรง ${S.k}</li>
 <li>Efferent arteriole ขยาย → <b>intraglomerular pressure ↓</b> → ลด proteinuria และชะลอไตเสื่อม แม้ BP ไม่ลด ${S.k}</li></ul>
 <h3>ใช้ใน CKD</h3><ul><li>ยาความดันที่เลือกเป็นอันดับแรกใน CKD ที่มี albuminuria ${S.p}</li><li>ตรวจ SCr, K⁺, BP ภายใน 1 สัปดาห์หลังเริ่ม · <b>SCr ↑ &gt;30%</b>, K⁺ สูง หรือ BP ต่ำ → หยุด/เปลี่ยน ${S.p}</li><li>ปรับขนาดทุก 1–3 เดือนจนถึงขนาดสูงสุดที่ทนได้ ${S.p}</li></ul>
 <h3>ADR · ข้อห้าม</h3><ul><li>Hyperkalemia · <b>AKI ใน bilateral renal artery stenosis</b> หรือไตข้างเดียวตีบ ${S.k}</li><li>ACEi: <b>ไอแห้ง, angioedema</b> (bradykinin, substance P) · captopril: neutropenia, proteinuria, รสเปลี่ยน ${S.k}</li>
 <li><b>ห้ามในครรภ์</b> (fetal hypotension, anuria, renal failure) ${S.k}</li><li>ACEi + ARB หรือ + aliskiren: ไม่ได้ประโยชน์เพิ่มและมี ADR มากขึ้น ${S.k}</li></ul>
 <div class="pearl">ทุกตัวยกเว้น lisinopril เป็น prodrug · ACEi ส่วนใหญ่ขับทางไต (ยกเว้น fosinopril, moexipril) → ลดขนาด ${S.k}</div>`});

/* ---------- d · using diuretics ---------- */
SEC.push({id:"resist",k:"d",t:"Diuretic combinations & resistance",mm:"Combos & resistance",drugs:"metolazone · chlorothiazide IV",act:["inh"],leg:[],
draw:()=>flowD([["Dose ให้ถึง และถี่พอ","loop t½ สั้น 2–6 ชม. → Na⁺ retention ระหว่าง dose · พิจารณา continuous infusion"],["เพิ่ม thiazide (sequential blockade)","metolazone หรือ chlorothiazide IV · DCT ดูดกลับเพิ่มเมื่อ TAL ถูกบล็อก","gl"],["เฝ้าใกล้ชิด","น้ำออกมาก · เสีย K⁺ มาก อาจต้องให้ K⁺ IV","ar"],["Hypokalemia แก้ไม่ได้","จำกัด NaCl, KCl → เพิ่ม K⁺-sparing (ระวังไตเสื่อม + ACEi)","vn"]]),
notes:()=>`<h3>ทำไม loop + thiazide เสริมกัน</h3><ul><li>บล็อก TAL แล้ว DCT ดูดกลับมากขึ้น (และกลับกัน) · thiazide ยังมี natriuresis เล็กน้อยที่ proximal tubule ${S.k}</li><li>Metolazone นิยมใช้ แต่ thiazide อื่นขนาดเทียบเท่าก็น่าจะได้ผล ${S.k}</li>
 <li>Outpatient: เริ่ม metolazone 2.5 mg สัปดาห์ละครั้งแล้วค่อยเพิ่ม ${S.k}</li><li>ให้ thiazide 30–60 นาทีก่อน loop ${S.p}</li></ul>
 <h3>ใช้ diuretic ตามภาวะ</h3><ul><li><b>Edema</b>: ขับช้า ๆ ไม่ให้ effective arterial volume ลดจนอวัยวะขาดเลือด ${S.k}</li><li><b>Hypercalcemia</b>: saline + furosemide 80–120 mg IV, ปรับ saline ตามปัสสาวะ ${S.k}</li><li><b>Nephrogenic DI</b>: thiazide (+ จำกัดเกลือ) · Li⁺-induced: amiloride ${S.k}</li></ul>
 <div class="pearl">การเพิ่ม thiazide ให้ loop ได้ diuresis มากกว่าเพิ่ม spironolactone ${S.k}</div>`});

/* ---------- e · treating kidney disease ---------- */
SEC.push({id:"aki",k:"e",t:"AKI: drugs that help and drugs that harm",mm:"AKI",drugs:"",act:[],leg:[],
draw:()=>tbl(["Measure","Detail"],[
 ["Prerenal: isotonic crystalloid","0.9% NaCl เติม intravascular volume · D5W กระจายไปทุก compartment"],
 ["Loop diuretics","ใช้แก้ volume overload เท่านั้น · ไม่ป้องกัน AKI อาจทำให้แย่ลง"],
 ["Not recommended","low-dose dopamine (0.5–3 mcg/kg/min) · fenoldopam · ANP"],
 ["Stop or avoid nephrotoxic drugs","aminoglycoside · amphotericin B · NSAID · ACEi/ARB · calcineurin inhibitor · contrast"],
 ["Lowering the risk","aminoglycoside วันละครั้ง · lipid amphotericin · IV fluid ก่อน contrast"]]),
notes:()=>`<h3>ยาที่ทำให้ไตวาย</h3><ul><li>Prerenal ผ่าน hemodynamics: <b>NSAID</b> (ตัด prostaglandin ที่ขยาย afferent) · <b>ACEi/ARB</b> (efferent ขยาย) ${S.p}</li><li>ATN: aminoglycoside, contrast, amphotericin B · calcineurin inhibitor (cyclosporine, tacrolimus) ${S.p}</li></ul>
 <h3>ป้องกัน</h3><ul><li>Aminoglycoside: <b>extended-interval (once-daily)</b> ลด AKI · vancomycin + aminoglycoside เสี่ยงมากขึ้น ${S.p}</li><li>Amphotericin: lipid formulations ในคนเสี่ยง + NS ${S.p}</li>
 <li><b>Contrast-induced AKI</b>: IV isotonic NaCl หรือ NaHCO₃ เริ่ม 3–12 ชม. ก่อน · nonionic contrast ในคนเสี่ยง · N-acetylcysteine ผลไม่แน่นอน ${S.p}</li></ul>
 <h3>รักษา</h3><ul><li>Diuretic resistance: เพิ่มขนาด, ให้ continuous infusion หรือเพิ่ม metolazone/HCTZ ${S.p}</li><li>ปรับขนาดยาทุกตัวตามการทำงานของไตที่เปลี่ยนเร็ว ${S.p}</li></ul>`});

SEC.push({id:"ckd",k:"e",t:"CKD: slowing progression",mm:"CKD progression",drugs:"ACEi · ARB · SGLT2 inhibitors · finerenone",act:["bl","inh"],leg:[],
draw:()=>tbl(["Measure","Detail"],[
 ["ACE inhibitor or ARB","ลด proteinuria · ใช้ถึงขนาดสูงสุดที่ทนได้ · ไม่ใช้คู่กัน"],
 ["SGLT2 inhibitor","GFR ลดช่วงแรกแล้วชะลอ CKD · ใช้ได้ถึง GFR ~30 ในการศึกษา"],
 ["MR antagonist","eplerenone/finerenone ลด albuminuria ใน DM (ระวัง K⁺)"],
 ["Diabetes control","HbA1c เป้า <7% ลด albuminuria"],
 ["Referral to a nephrologist","CKD G4 → เตรียม renal replacement therapy"]]),
notes:()=>`<h3>ACEi/ARB</h3><ul><li>ยาความดันที่เลือกเป็นอันดับแรกใน CKD + albuminuria · ใช้ร่วมกันเต็มขนาดไม่แนะนำ ${S.p}</li><li>ติดตาม SCr, K⁺, BP ใน 1 สัปดาห์ · SCr ↑ &gt;30% ให้หยุด ${S.p}</li></ul>
 <h3>Renal & cardiac protection</h3><ul><li>SGLT2 inhibitor: ผล renoprotection เป็น class effect · CREDENCE, EMPA-REG รวมคน GFR ≥30 ${S.k}</li><li>MR antagonist ลด albuminuria ใน DM · finerenone hyperkalemia น้อยกว่า spironolactone ${S.k}</li></ul>
 <h3>ติดตาม</h3><ul><li>G3a ตรวจทุก 12 เดือนจนพบ albuminuria แล้วถี่ขึ้น 4–6 เดือน · ระยะหลัง ทุก 3–6 เดือน ${S.p}</li></ul>`});

SEC.push({id:"anemia",k:"e",t:"CKD: anemia (iron · ESA)",mm:"Anemia of CKD",drugs:"ferrous sulfate · iron sucrose · epoetin alfa · darbepoetin",act:["ag","mod"],leg:[],
draw:()=>flowD([["เช็ก TSat และ ferritin","TSat <30% และ ferritin <500 ng/mL → ให้ iron ก่อน"],["Iron","ไม่ dialysis: oral 200 mg elemental Fe/วัน 1–3 เดือน · HD: IV iron","vn"],["ESA ถ้า Hb ยังต่ำ","SC ดีกว่า IV · Hb ไม่ขึ้น 1 g/dL ใน 4 สัปดาห์ → เพิ่ม 25%","gl"],["อย่าให้สูงเกิน","Hb ไม่เกิน 11.5 g/dL · ขึ้นเร็วเกิน → ลด ESA 25%","ar"],["ติดตาม","Hb ทุกเดือน (dialysis) / 3 เดือน · iron ทุก 3 เดือน","" ]]),
notes:()=>`<h3>สาเหตุ</h3><ul><li>ไตสร้าง EPO 90% · nephron ลด → EPO ลด ${S.p}</li></ul>
 <h3>Iron</h3><ul><li><b>First-line</b> = เติม iron · oral ถูกกว่า ใช้ใน non-dialysis · HD เสียเหล็ก 1–2 g/ปี → IV ${S.p}</li><li>IV iron ทุกตัวอาจ anaphylaxis โดยเฉพาะ <b>iron dextran</b> (test dose 25 mg) ${S.p}</li></ul>
 <h3>ESA</h3><ul><li>Epoetin alfa, darbepoetin, CERA (methoxy PEG-epoetin β) ประสิทธิภาพเท่ากัน ${S.p}</li><li>ADR: <b>ความดันสูง</b> (ระวังถ้า &gt;180/100) · ชัก · pure red cell aplasia ${S.p}</li><li>ESA เพิ่มความต้องการเหล็ก → มักต้องให้ iron ต่อ ${S.p}</li></ul>`});

SEC.push({id:"mbd",k:"e",t:"CKD: mineral & bone disorder",mm:"CKD-MBD",drugs:"sevelamer · calcium acetate · lanthanum · calcitriol · cinacalcet",act:["mod","ag"],leg:[],
draw(){let b="";const box=(x,y,w,h,t,s,c="")=>`<rect class="box ${c}" x="${x}" y="${y}" width="${w}" height="${h}" rx="12"/>`+T(x+w/2,y+24,t,{c:"bh"})+(s?T(x+w/2,y+42,s,{c:"s m"}):"");
 b+=box(230,16,180,52,"GFR ↓","phosphate คั่ง · calcitriol ↓","ar")+arr("M320,70 L320,104")+box(200,106,240,52,"PTH ↑ (secondary HPT)","Ca²⁺ ↓ · PO₄ ↑ · 1,25-D ↓","ar")+arr("M320,160 L320,196")+box(230,198,180,46,"CKD-MBD","bone · vascular calcification","");
 b+=pill(110,70,"Phosphate binders","mod","x",true)+T(110,96,"sevelamer · lanthanum",{c:"s"})+T(110,112,"Ca acetate/carbonate",{c:"s"})+T(110,128,"ferric citrate",{c:"s"})+arr("M168,70 L228,40");
 b+=pill(540,90,"Vitamin D analogs","ag","x",true)+T(540,116,"calcitriol · paricalcitol",{c:"s"})+T(540,132,"doxercalciferol",{c:"s"})+arr("M486,98 L442,124");
 b+=pill(540,186,"Calcimimetics","ag","x",true)+T(540,212,"cinacalcet (PO)",{c:"s"})+T(540,228,"etelcalcetide (IV)",{c:"s"})+arr("M490,186 L442,140");
 return psvg(b,"0 0 640 256")},
notes:()=>`<h3>Phosphate binders (กินพร้อมอาหาร)</h3>${tbl(["กลุ่ม","จุดเด่น · ข้อเสีย"],[["Calcium acetate/carbonate","ถูก · Ca²⁺ สูง, vascular calcification"],["Sevelamer","ไม่มี Ca/Al · ลด LDL · GI ADR"],["Lanthanum","ไม่มี Ca · คลื่นไส้"],["Ferric citrate, sucroferric oxyhydroxide","iron-based · pill น้อยกว่า"],["Aluminum","ไม่ใช้ระยะยาว: encephalopathy, bone disease"]])}${S.p}
 <h3>Vitamin D</h3><ul><li>G3: ergocalciferol/cholecalciferol · G4–5: <b>activated</b> (calcitriol, doxercalciferol, paricalcitol) ลด PTH ${S.p}</li><li>เพิ่มการดูดซึม Ca และ PO₄ → hypercalcemia/hyperphosphatemia · ต้องให้ Ca, PO₄ ปกติก่อน ${S.p}</li></ul>
 <h3>Calcimimetics</h3><ul><li>เพิ่มความไวของ CaSR ที่ parathyroid → PTH ↓ และ Ca²⁺ ↓ · ใช้เมื่อ Ca/PO₄ สูง หรือใช้ vitamin D ไม่ได้ ${S.p}</li><li>Cinacalcet: คลื่นไส้อาเจียน · etelcalcetide IV หลัง HD · ระวังชัก (Ca ต่ำ) ${S.p}</li></ul>`});

/* ---------- f · fluids, K, Na, acid–base ---------- */
SEC.push({id:"hyperk",k:"f",t:"Hyperkalemia & hypokalemia",mm:"K⁺ disorders",drugs:"calcium chloride · insulin · albuterol · patiromer · KCl",act:["mod","ag"],leg:[],
draw:()=>flowD([["1 · Stabilize myocardium","K⁺ >7 หรือ ECG เปลี่ยน → calcium IV · onset 1–2 นาที อยู่ 10–30 นาที","ar"],["2 · Shift K⁺ เข้าเซลล์","insulin + dextrose (30 นาที, 2–6 ชม.) · albuterol ขนาดสูง · ± NaHCO₃","gl"],["3 · เอา K⁺ ออกจากร่างกาย","loop diuretic · SPS · patiromer · dialysis","vn"],["Hypokalemia: KCl","IV >10 mEq/hr ต้อง monitor ECG · สูงสุด 40 mEq/hr ทาง central line",""]]),
notes:()=>`<h3>Hyperkalemia 3 ขั้น</h3><ul><li><b>Calcium</b> (เช่น CaCl₂ 1 g) ไม่ได้ลด K⁺ แค่กัน arrhythmia · ระวัง hypercalcemia เมื่อให้ซ้ำ ${S.p}</li><li><b>Insulin + dextrose</b>: D50 25 g หรือ D10 + regular insulin 20 units · onset 30 นาที ${S.p}</li>
 <li>ขั้น 1–2 เป็นแค่ซื้อเวลา ต้องตามด้วยการขับ K⁺ ${S.p}</li><li><b>Sodium polystyrene sulfonate</b> 15–60 g/วัน · <b>colonic necrosis</b> (โดยเฉพาะกับ sorbitol) ${S.p}</li><li><b>Patiromer</b>: ใช้แบบไม่เร่งด่วน ผู้ป่วยนอก ${S.p} · sodium zirconium cyclosilicate ${S.k}</li></ul>
 <h3>ยาที่ทำให้ K⁺ สูง</h3><ul><li>K⁺-sparing, ACEi/ARB, aliskiren, β-blocker, NSAID โดยเฉพาะในไตเสื่อม ${S.k}</li></ul>
 <h3>Hypokalemia</h3><ul><li>สาเหตุยา: loop, thiazide, CA inhibitor, β₂ agonist ${S.k}</li><li>KCl IV: เกิน 10 mEq/hr ต้อง cardiac monitor · ความเข้มข้นสูงสุด 80 mEq/L ทาง central line ${S.p}</li></ul>`});

SEC.push({id:"sodium",k:"f",t:"Hyponatremia & hypernatremia",mm:"Na⁺ disorders",drugs:"3% NaCl · tolvaptan · conivaptan · 0.9% NaCl",act:["mod","bl"],leg:[],
draw:()=>tbl(["Disorder","Management"],[
 ["Hypovolemic hyponatremia","ให้ Na⁺ + น้ำ (0.9% NaCl) · คำนวณ Na⁺ deficit"],
 ["Euvolemic (SIADH) / hypervolemic","จำกัดน้ำ → vaptan (tolvaptan เริ่มใน รพ.) · demeclocycline"],
 ["Severe — Na⁺ below 110, or seizures or coma","3% NaCl · คำนวณ Na⁺ ที่จะเปลี่ยนต่อ 1 L"],
 ["Hypernatremia","คำนวณ TBW deficit · ให้ hypotonic fluid ใน 48–72 ชม."],
 ["Never correct too fast","hyper: ≤0.5 mEq/L/hr (≤6–8/24 ชม.) → cerebral edema"]]),
notes:()=>`<h3>Hyponatremia</h3><ul><li>Hypertonic saline ใช้เมื่อ Na⁺ &lt;110 และ/หรือมีอาการรุนแรง ${S.p}</li><li><b>Tolvaptan</b>: Na⁺ &lt;125 หรือมีอาการและจำกัดน้ำไม่ได้ผล · เริ่ม 15 mg ปรับถึง 60 mg · boxed warning เริ่มใน รพ. ${S.p}</li>
 <li>Conivaptan IV · ห้ามใช้ vaptan ใน hypovolemic ${S.p}</li><li>Thiazide เป็นสาเหตุที่พบบ่อยของ hyponatremia ใน รพ. ${S.k}</li></ul>
 <h3>Hypernatremia</h3><ul><li>สาเหตุ: เสียน้ำ, mannitol, DI (lithium, phenytoin), hypertonic saline เกิน ${S.p}</li><li>แก้เร็วเกิน → <b>cerebral edema</b>, ตาย ${S.p}</li></ul>
 <div class="pearl">แก้ hyponatremia เรื้อรังเร็วเกิน → osmotic demyelination ${S.x}</div>`});

SEC.push({id:"acidbase",k:"f",t:"Acid–base: drug therapy",mm:"Acid–base drugs",drugs:"sodium bicarbonate · citrate · acetazolamide",act:["mod","inh"],leg:[],
draw:()=>tbl(["Disorder","Management"],[
 ["Metabolic acidosis — treat the cause first","lactic, ketoacidosis มักไม่ต้องให้ NaHCO₃"],
 ["When to give NaHCO₃","pH <7.15 หรือไตสร้าง HCO₃⁻ ไม่ได้ · ไตวาย, RTA, ethylene glycol, methanol, salicylate"],
 ["Give only half the deficit","เป้า HCO₃⁻ >10 · ระวัง volume overload, Na⁺↑, K⁺↓, Ca²⁺↓"],
 ["Chronic acidosis","K citrate/citric acid หรือ Na citrate/citric acid"],
 ["Metabolic alkalosis","saline-responsive → NaCl + K⁺ · ต้องขับต่อ → acetazolamide 250 mg q6–12h"]]),
notes:()=>`<h3>Metabolic acidosis</h3><ul><li>บทบาทของ NaHCO₃ ยังถกเถียง · ใช้เมื่อ pH &lt;7.15 หรือไตสร้าง HCO₃⁻ ไม่ได้ ${S.p}</li><li>HCO₃⁻ deficit = [(2.4/HCO₃⁻) + 0.4] × น้ำหนัก × ΔHCO₃⁻ · ให้ไม่เกินครึ่งก่อน ติดตาม blood gas ${S.p}</li><li>THAM เลิกผลิตในสหรัฐ (2016) ${S.p}</li></ul>
 <h3>Metabolic alkalosis</h3><ul><li>Saline-responsive (diuretic, อาเจียน): NaCl + K⁺ · saline-resistant: แก้ mineralocorticoid excess ${S.p}</li><li><b>Acetazolamide</b> สำหรับคนที่ยังต้องขับน้ำแต่ HCO₃⁻ สูงขึ้น · ค่อย ๆ ได้ผล ไม่ใช่แก้เฉียบพลัน ${S.p}${S.k}</li></ul>
 <h3>ยาที่ทำให้เกิด</h3><ul><li>Acidosis: CA inhibitor, K⁺-sparing · alkalosis: loop, thiazide, corticosteroid ${S.k}${S.p}</li></ul>`});

SEC.push({id:"oab",k:"g",t:"ยารักษาปัสสาวะเล็ดและกระเพาะปัสสาวะไวเกิน",mm:"OAB & incontinence",drugs:"Oxybutynin · Tolterodine · Solifenacin · Mirabegron · Duloxetine · Desmopressin",act:["inh","ag"],leg:[],
draw:()=>tbl(["กลุ่มยา","ออกฤทธิ์อย่างไร","ใช้กับชนิดไหน"],[
 ["Antimuscarinic — oxybutynin, tolterodine, solifenacin","ปิดตัวรับ M₃ ที่กล้ามเนื้อ detrusor จึงลดการบีบตัวเอง","Urge incontinence และ OAB"],
 ["β₃ agonist — mirabegron","กระตุ้นตัวรับ β₃ ให้ detrusor คลายตัวขณะเก็บปัสสาวะ","Urge · ทางเลือกเมื่อทนฤทธิ์ antimuscarinic ไม่ไหว"],
 ["Duloxetine","เพิ่มแรงหูรูดผ่านทางไขสันหลัง","Stress incontinence"],
 ["α₁ blocker — tamsulosin","ลดแรงต้านที่คอกระเพาะปัสสาวะและต่อมลูกหมาก","Overflow จากต่อมลูกหมากโต"],
 ["Desmopressin","ลดปริมาณปัสสาวะกลางคืน","ปัสสาวะรดที่นอนในเด็ก และ nocturia"]]),
notes:()=>`<ul>
<li>Katzung: <b>oxybutynin ซึ่งค่อนข้างเลือกออกฤทธิ์ที่ตัวรับ M₃ ใช้บรรเทาการเกร็งของกระเพาะปัสสาวะหลังการผ่าตัดทางระบบปัสสาวะ เช่นการตัดต่อมลูกหมาก</b> ${S.k}</li>
<li>Katzung: ยานี้ <b>มีคุณค่าในการลดการถ่ายปัสสาวะโดยไม่ตั้งใจในผู้ป่วยโรคทางระบบประสาท เช่นเด็กที่มี meningomyelocele</b> และใช้ในผู้สูงอายุที่อยู่ในสถานพยาบาล โดยได้ผลพอสมควรแต่ <b>ทำให้เกิดพิษต่อระบบประสาทส่วนกลางอย่างมีนัยสำคัญ</b> ${S.k}</li>
<li>Katzung: <b>mirabegron ซึ่งเป็น β₃ agonist ใช้ทางคลินิกในการรักษาอาการของกระเพาะปัสสาวะไวเกิน คือปวดปัสสาวะเร่งด่วนและปัสสาวะบ่อย</b> ${S.k}</li>
<li>ข้อแตกต่างที่ตัดสินการเลือกยาในผู้สูงอายุ: <b>antimuscarinic ทำให้สับสน ปากแห้ง ท้องผูกและปัสสาวะคั่ง ส่วน mirabegron เลี่ยงผลเหล่านี้ได้แต่ทำให้ความดันสูงขึ้น</b> ${S.x}</li>
<li>Katzung ระบุว่า antimuscarinic เคยถูกใช้ในนิ่วทางเดินปัสสาวะเพื่อบรรเทาการเกร็งของท่อไตขณะนิ่วเคลื่อน แต่ <b>ประโยชน์ในภาวะนี้ยังเป็นที่ถกเถียง</b> ${S.k}</li>
<li>หลักที่ใช้เลือกยาได้ทั้งตาราง: <b>รักษาตามกลไกของการกลั้นไม่อยู่ ไม่ใช่ตามอาการ</b> — urge ลดการบีบตัว stress เพิ่มแรงหูรูด overflow ลดแรงต้าน ${S.x}</li></ul>`});

SEC.push({id:"utiabx",k:"g",t:"ยาปฏิชีวนะสำหรับการติดเชื้อทางเดินปัสสาวะ",mm:"UTI antibiotics",drugs:"Nitrofurantoin · Fosfomycin · TMP-SMX · Fluoroquinolone · Ceftriaxone",act:["inh"],leg:[],
draw:()=>tbl(["ยา","จุดเด่น","ข้อจำกัดที่ต้องรู้"],[
 ["Nitrofurantoin","ทางเลือกแรกของกระเพาะปัสสาวะอักเสบไม่ซับซ้อน · ดื้อยาเกิดช้า","เข้าเนื้อไตไม่ถึง จึง<b>ใช้ไม่ได้ในกรวยไตอักเสบ</b> · ห้ามเมื่อ GFR ต่ำ"],
 ["Fosfomycin","กินครั้งเดียวจบ","ฤทธิ์อ่อนกว่าเมื่อเชื้อมาก"],
 ["TMP-SMX","ราคาถูก เข้าเนื้อไตได้ดี","ดื้อยาสูงขึ้นมากในหลายพื้นที่"],
 ["Fluoroquinolone","เข้าเนื้อไตดี ใช้ในกรวยไตอักเสบ","ผลข้างเคียงเอ็นและประสาท จึงไม่ใช้กับเคสไม่ซับซ้อน"],
 ["Ceftriaxone by injection","กรวยไตอักเสบที่ต้องนอนโรงพยาบาล","ต้องปรับตามผลเพาะเชื้อ"]]),
notes:()=>`<ul>
<li>Katzung: <b>ในขนาดรักษา nitrofurantoin ฆ่าเชื้อได้ทั้งแกรมบวกและแกรมลบหลายชนิด แต่ P. aeruginosa และ Proteus หลายสายพันธุ์ดื้อโดยธรรมชาติ</b> ${S.k}</li>
<li>Katzung: ฤทธิ์ของยาสัมพันธ์กับ <b>การเปลี่ยนยาเป็นสารตัวกลางที่ว่องไวสูงภายในเซลล์แบคทีเรียโดยเอนไซม์ reductase ของเชื้อเอง</b> ซึ่งไปทำปฏิกิริยากับโปรตีนไรโบโซมหลายชนิดและรบกวนการสร้างโปรตีน RNA และ DNA ${S.k}</li>
<li>Katzung: <b>ไม่มีการดื้อยาข้ามกลุ่มระหว่าง nitrofurantoin กับยาต้านจุลชีพอื่น และการดื้อยาเกิดขึ้นช้า</b> ${S.k}</li>
<li>Katzung อธิบายเหตุผลที่ยานี้กลับมาสำคัญ ว่า <b>เมื่อการดื้อต่อ TMP-SMX และ fluoroquinolone ใน E. coli พบมากขึ้น nitrofurantoin จึงกลายเป็นยากินทางเลือกที่สำคัญสำหรับการติดเชื้อทางเดินปัสสาวะที่ไม่ซับซ้อน</b> ${S.k}</li>
<li>กฎที่ใช้ตัดสินใจเร็วที่สุด: <b>กระเพาะปัสสาวะอักเสบต้องการยาที่เข้มข้นในปัสสาวะ ส่วนกรวยไตอักเสบต้องการยาที่เข้าถึงเนื้อไต</b> จึงเป็นเหตุที่ nitrofurantoin ใช้กับอย่างแรกได้แต่อย่างหลังไม่ได้ ${S.x}</li>
<li>ภาวะมีเชื้อในปัสสาวะโดยไม่มีอาการไม่ต้องรักษา ยกเว้นในหญิงตั้งครรภ์และก่อนหัตถการทางระบบปัสสาวะที่จะทำให้เยื่อบุบาดเจ็บ ${S.x}</li></ul>`});

/* First Aid order */
(function(){const O=["nephron","lytes","osmotic","cai","loop","thiazide","ksparing","sglt2","raas","adh","resist","aki","ckd","anemia","mbd","hyperk","sodium","acidbase","oab","utiabx"];
 SEC.find(s=>s.id==="raas").k="c";GN.c="ACE inhibitors, ARBs & aliskiren";GN.xc="เสริม · ADH drugs";
 SEC.sort((a,b)=>O.indexOf(a.id)-O.indexOf(b.id))})();

const EXTRA=["sglt2", "adh", "resist", "aki", "ckd", "anemia", "mbd", "hyperk", "sodium", "acidbase", "oab", "utiabx"];

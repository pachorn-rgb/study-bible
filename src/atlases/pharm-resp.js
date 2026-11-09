/* ---------- master airway map: every drug sits on its target ---------- */
function airwayMap(){let b="";const W=760,hot=k=>on(k)?" hot":"";
 b+=`<rect class="p-lum" fill="url(#gLum)" x="10" y="10" width="${W-20}" height="32" rx="10"/>`+T(24,31,"Airway lumen",{a:"start",c:"bh"})+T(W-24,31,"allergen · virus · smoke · cold air",{a:"end",c:"s m"});
 for(let i=0;i<12;i++)b+=`<rect class="p-epi" fill="url(#gEpi)" x="${10+i*61.6}" y="44" width="58" height="30" rx="8"/>`;
 if(ST.labels)b+=T(40,63,"Epithelium",{a:"start",c:"s"});
 /* smooth muscle cell */
 b+=`<rect class="p-cellm" fill="url(#gCell)" x="130" y="116" width="270" height="200" rx="34"/>`+T(265,306,"Airway smooth muscle cell",{c:"s m"});
 b+=glow(200,116,"b2")+rec(200,116,"")+T(200,142,"β₂ → Gs → AC",{c:"s"})+arr("M200,148 L200,166")+T(156,184,"cAMP ↑ → PKA",{a:"start",c:"bh"})+T(156,200,"→ relaxation",{a:"start",c:"s"});
 b+=`<rect class="p-enz${hot("pde")}" x="300" y="176" width="58" height="24" rx="7"/>`+T(329,192,"PDE",{c:"bh"})+arr("M256,182 L296,186")+T(329,214,"cAMP → AMP",{c:"s m"});
 b+=glow(130,272,"m3")+rec(130,272,"",true)+T(146,264,"M₃ → Gq → IP₃",{a:"start",c:"s"})+T(146,280,"Ca²⁺ ↑ → contraction",{a:"start",c:"bh"});
 b+=`<path class="p-nerve" d="M30,420 L30,272 L114,272"/>`+`<circle class="p-ach" cx="120" cy="265" r="3"/><circle class="p-ach" cx="120" cy="279" r="3"/>`;
 if(ST.labels)b+=T(38,416,"Vagal efferent (ACh)",{a:"start",c:"s"});
 b+=glow(400,256,"cyslt")+rec(400,256,"",true)+T(390,278,"CysLT₁",{a:"end",c:"s"});
 b+=glow(400,298,"h1")+rec(400,298,"",true)+T(390,302,"H₁",{a:"end",c:"s"});
 b+=`<rect class="p-gr${hot("gr")}" fill="url(#gGr)" x="130" y="334" width="270" height="44" rx="12"/>`+T(265,352,"Glucocorticoid receptor (all airway cells)",{c:"bh"})+T(265,369,"↓ cytokine genes · ↓ eos/mast/T cells · ↑ β₂ response",{c:"s"});
 /* immune column */
 b+=arr("M566,74 L566,122")+T(558,100,"TSLP",{a:"end",c:"s"})+glow(566,96,"tslp",11);
 b+=cellC(566,150,26,"gTh2","Th2","ILC2");
 b+=arr("M593,154 L682,154")+T(638,170,"IL-5",{c:"s"});
 b+=glow(712,154,"il5r",34)+cellC(712,154,28,"gEos","Eos","IL-5Rα");
 b+=arr("M576,176 L628,286")+T(612,232,"IL-4 · IL-13",{a:"start",c:"s"})+T(612,248,"→ IgE switch, mucus",{a:"start",c:"s m"});
 b+=glow(640,350,"mast",50)+cellC(640,350,44,"gMast","Mast cell","FcεRI–IgE");
 [622,640,658].forEach(x=>b+=`<path class="p-ige" d="M${x},${304} l0,-10 m0,0 l-6,-8 m6,8 l6,-8"/>`);b+=glow(640,292,"ige",22);
 b+=arr("M598,336 L410,258")+T(470,268,"LTC₄/D₄",{c:"s"})+arr("M604,372 L410,300")+T(520,356,"histamine",{c:"s"});
 b+=`<rect class="p-enz${hot("lox")}" x="540" y="309" width="40" height="20" rx="6"/>`+T(560,323,"5-LO",{c:"s"});
 /* pills */
 b+=pill(200,96,"SABA · LABA","ag","b2");
 b+=pill(280,240,"Theophylline · Roflumilast","inh","pde");
 b+=pill(62,242,"SAMA · LAMA","bl","m3");
 b+=pill(480,224,"Montelukast · Zafirlukast","bl","cyslt");
 b+=pill(560,290,"Zileuton","inh","lox");
 b+=pill(462,332,"H₁ antihistamines","bl","h1");
 b+=pill(265,400,"ICS · systemic steroids","st","gr");
 b+=pill(470,98,"Tezepelumab","mab","tslp");
 b+=pill(664,112,"Mepolizumab · Reslizumab","mab","il5");
 b+=pill(706,202,"Benralizumab","mab","il5r");
 b+=pill(510,190,"Dupilumab","mab","il4r");
 b+=pill(712,296,"Omalizumab","mab","ige");
 b+=pill(640,412,"Cromolyn","mod","mast");
 return psvg(b,"0 0 760 432")}
const MAP=keys=>()=>{HL=keys;return airwayMap()};

/* ================= Respiratory pharmacology ================= */
Object.assign(ST,{ast:"pt",dev:"mdi"});
Object.assign(GN,{a:"Foundations",b:"Bronchodilators",c:"Anti-inflammatory controllers",d:"Biologics (targeted therapy)",e:"Upper airway, cough & CF",f:"Pulmonary arterial hypertension",g:"Treating asthma",h:"Treating COPD"});

/* ---------- a · foundations ---------- */
SEC.push({id:"targets",mm:"Drug target map",drugs:"",act:[],k:"a",t:"Pathogenesis & drug targets",tools:MAPTOOLS,leg:["ag","bl","inh","mab","st","mod"],draw:MAP(["b2","m3","pde","gr","cyslt","ige","il5","il5r","il4r","tslp","mast","lox"]),
notes:()=>`<div class="pearl">แผนที่นี้ใช้ซ้ำทุกหัวข้อ: ยาในหัวข้อนั้นจะสว่าง ที่เหลือจาง · กด <b>Show all drugs</b> เพื่อดูทั้งหมด</div>
 <h3>Early vs late asthmatic response</h3><ul><li><b>Early</b> (นาที): allergen จับ IgE บน mast cell → histamine, tryptase, LTC₄/D₄, PGD₂ → หลอดลมหดตัว + vascular leak ${S.k}</li>
 <li><b>Late</b> (3–6 ชม.): cytokine ของ T2 lymphocyte (IL-4, IL-5, IL-13) → eosinophil เข้ามา, IgE เพิ่ม, mucus มากขึ้น, bronchial reactivity สูงขึ้น ${S.k}</li>
 <li>Epithelium ที่โดน virus/allergen หลั่ง <b>TSLP, IL-25, IL-33</b> → กระตุ้น dendritic cell, ILC2 และ Th2 ${S.k}</li></ul>
 <h3>Bronchial hyperreactivity</h3><ul><li>หลอดลมหดง่ายต่อสิ่งกระตุ้นที่ไม่ใช่ allergen (น้ำกลั่น aerosol, ออกกำลังกาย, อากาศเย็น, ควันบุหรี่, SO₂) วัดด้วย <b>methacholine challenge</b> ${S.k}</li>
 <li>ส่วนหนึ่งผ่าน <b>vagal reflex</b> จึงใช้ antimuscarinic ได้ทั้งที่ไม่ได้คลายกล้ามเนื้อโดยตรง ${S.k}</li></ul>
 <h3>ยาทำงานที่จุดไหน</h3>${tbl(["เป้าหมาย","ยา"],[["คลายกล้ามเนื้อ","β₂ agonist, PDE inhibitor"],["ตัด vagal tone","SAMA, LAMA"],["ลดการอักเสบ","ICS, LTRA, cromolyn"],["ตัดสาร T2","anti-IgE, anti-IL-5/5R, anti-IL-4Rα, anti-TSLP"]])}
 <div class="pearl"><b>Reliever</b> = คลายหลอดลมเร็ว (SABA) · <b>Controller</b> = กันการกำเริบระยะยาว (ICS เป็นหลัก) ${S.k}</div>`});

SEC.push({id:"delivery",mm:"Inhaled delivery",drugs:"MDI · DPI · SMI · nebulizer",act:[],k:"a",t:"Inhaled delivery & devices",leg:[],tools:[["dev",[["mdi","MDI"],["dpi","DPI"],["smi","SMI"],["neb","Nebulizer"]]]],
draw(){const D={mdi:["Metered-dose inhaler (MDI)","ต้องประสานการกดกับการหายใจ · ใช้ร่วม spacer/VHC เพื่อลดการประสานและลด oropharyngeal deposit","หายใจช้า ลึก แล้วกลั้น ≥5 วินาที"],dpi:["Dry powder inhaler (DPI)","ยาออกด้วยแรงหายใจของผู้ป่วยเอง ต้องสูดแรงและเร็ว · ไม่ต้องประสานการกด","ไม่ใช้กับ spacer"],smi:["Soft mist inhaler (SMI)","ละอองช้าและนาน ประสานง่ายกว่า MDI · เช่น tiotropium (Respimat)","หายใจช้า ลึก"],neb:["Nebulizer","ละอองใหญ่กว่า ต้องให้ขนาดสูงกว่ามาก (albuterol 2.5–5 mg เทียบ 100–400 mcg) แต่ไม่ได้ผลดีกว่า","สำหรับคนที่ใช้ MDI ไม่ได้"]}[ST.dev];
 let b=`<rect class="box gl" x="16" y="14" width="608" height="92" rx="12"/>`+T(32,40,D[0],{a:"start",c:"b"})+wrapT(32,62,D[1],92,"s")+T(32,98,"Technique: "+D[2],{a:"start",c:"s m"});
 b+=T(32,140,"Aerosol 2–5 µm · เกิดอะไรขึ้นกับยาที่พ่น",{a:"start",c:"bh"});
 const seg=[[80,"--d-st","80–90% ตกที่ปากและคอ → กลืน"],[20,"--d-ag","10–20% ลงปอด"]];let x=32;seg.forEach(([p,c,l])=>{const w=576*p/100;b+=`<rect x="${x}" y="152" width="${w}" height="30" rx="4" style="fill:var(${c})"/>`+T(x+w/2,172,l,{c:"s w"});x+=w});
 b+=T(32,214,"<1–2 µm ลอยแล้วหายใจออก · ยาที่กลืนถูก first-pass ที่ตับ (ICS จึงมี systemic effect น้อย)",{a:"start",c:"s"});
 return psvg(b,"0 0 640 232")},
notes:()=>`<h3>ทำไมต้องพ่น</h3><ul><li>β agonist และ corticosteroid ให้ทาง inhalation ได้ผลเฉพาะที่สูงสุด, systemic toxicity ต่ำสุด ${S.k}</li>
 <li>อนุภาค 2–5 µm ก็ยังตกที่ปากและคอ <b>80–90%</b> · อนุภาค &lt;1–2 µm ลอยแล้วถูกหายใจออก ${S.k}</li>
 <li>การตกในหลอดลมเพิ่มขึ้นเมื่อ <b>หายใจเข้าช้าเกือบเต็มปอด แล้วกลั้นหายใจ ≥5 วินาที</b> ${S.k}</li></ul>
 <h3>อุปกรณ์</h3><ul><li>MDI ใช้ยาก จึงแนะนำ <b>spacer / valved holding chamber</b> ลดการต้องประสานการกด ${S.p}</li>
 <li>เด็กเล็กใช้ spacer + mask ${S.p}</li><li>Nebulizer สำหรับผู้ที่ประสานการใช้ MDI ไม่ได้ ${S.k}</li>
 <li>ICS solution (ciclesonide, beclomethasone) ได้อนุภาคเล็กกว่า → ลงปอดลึกกว่า, ตกในคอน้อยกว่า ${S.k}</li></ul>
 <div class="pearl">ก่อน step up ยาเสมอ: เช็ก <b>inhaler technique</b> และ <b>adherence</b> ก่อน ${S.p}</div>`});

/* ---------- b · bronchodilators ---------- */
SEC.push({id:"beta2",mm:"β₂ agonists",drugs:"albuterol · salmeterol · formoterol",act:["ag"],k:"b",t:"β₂ agonists (SABA · LABA)",tools:MAPTOOLS,leg:["ag"],draw:MAP(["b2"]),
notes:()=>`<h3>กลไก</h3><ul><li>จับ β₂ → Gs → adenylyl cyclase → <b>cAMP ↑</b> → คลาย airway smooth muscle ${S.k}</li><li>ยังยับยั้งการหลั่ง mediator จาก mast cell, ลด microvascular leak, เพิ่ม mucociliary transport ${S.k}</li></ul>
 <h3>ยาในกลุ่ม</h3>${tbl(["กลุ่ม","ยา","onset · duration"],[["SABA","albuterol (salbutamol), levalbuterol, terbutaline","สูงสุดใน 15 นาที · 3–4 ชม."],["LABA","salmeterol, formoterol","12 ชม. (formoterol เริ่มเร็ว)"],["Ultra-LABA","indacaterol, olodaterol, vilanterol","วันละครั้ง"],["Nonselective","epinephrine, isoproterenol, ephedrine","มี β₁ → ใจสั่น, arrhythmia"]])}
 <h3>PK</h3><ul><li>LABA ออกฤทธิ์นานเพราะ <b>lipid solubility สูง</b> ละลายอยู่ใน membrane ใกล้ receptor ${S.k}</li>
 <li>Levalbuterol = R-isomer (ตัวที่ออกฤทธิ์) แต่ไม่ได้ดีกว่า racemic albuterol ${S.k}</li><li>Terbutaline มีแบบ SC (และใช้ยับยั้งการหดตัวของมดลูกได้) ${S.k}</li></ul>
 <h3>ใช้เมื่อ</h3><ul><li><b>SABA = drug of choice</b> สำหรับ acute bronchospasm ${S.k}</li><li>ก่อนออกกำลังกาย 5–20 นาที กัน EIB ได้ 2–3 ชม. ${S.p}</li><li>LABA ใช้คู่กับ ICS ใน asthma · ใช้เดี่ยวได้ใน COPD ${S.k}</li></ul>
 <h3>ADR</h3><ul><li><b>Tremor</b>, tachycardia, <b>hypokalemia</b> (Na⁺/K⁺-ATPase ดึง K⁺ เข้าเซลล์) ${S.k}</li><li>Lactic acidosis, PaO₂ ลดชั่วคราว (V/Q) · overdose → arrhythmia ${S.k}</li><li>Tachyphylaxis: เสีย bronchoprotection เมื่อใช้ประจำ ${S.k}</li></ul>
 <div class="pearl"><b>ห้ามใช้ LABA เดี่ยวใน asthma</b> (ไม่มีฤทธิ์ต้านอักเสบ) · ใช้ SABA ≥2 หลอด/เดือน = เสี่ยงเสียชีวิตจาก asthma ${S.k}</div>
 <div class="pearl">DI: nirmatrelvir/ritonavir ทำให้ระดับ <b>salmeterol</b> สูง ห้ามใช้ร่วม ${S.k}</div>`});

SEC.push({id:"antimusc",mm:"Antimuscarinics",drugs:"ipratropium · tiotropium",act:["bl"],k:"b",t:"Antimuscarinics (SAMA · LAMA)",tools:MAPTOOLS,leg:["bl"],draw:MAP(["m3"]),
notes:()=>`<h3>กลไก</h3><ul><li>Competitive antagonist ที่ muscarinic receptor → ตัดผล ACh จาก vagus: กันการหดตัวของกล้ามเนื้อและ mucus ที่เพิ่มขึ้น ${S.k}</li>
 <li>LAMA จับ M1, M2, M3 เท่ากัน แต่ <b>หลุดจาก M2 เร็ว</b> (M2 บนปลายประสาทยับยั้งการหลั่ง ACh) → ได้ selectivity ทางปฏิบัติ ${S.k}</li></ul>
 <h3>ยาในกลุ่ม</h3>${tbl(["ยา","duration","หมายเหตุ"],[["Ipratropium (SAMA)","4–8 ชม.","quaternary → ดูดซึมน้อย ไม่เข้า CNS"],["Tiotropium","24 ชม.","ตัวเดียวที่อนุมัติใน asthma"],["Umeclidinium","24 ชม.","COPD"],["Aclidinium","12 ชม. (วันละ 2)","COPD"],["Glycopyrrolate","—","COPD"]])}
 <h3>ใช้เมื่อ</h3><ul><li><b>COPD</b>: ipratropium ได้ผลเท่า albuterol · LAMA เป็น maintenance และลด exacerbation ${S.k}</li>
 <li>Asthma: ทางเลือกในคนที่ทน β agonist ไม่ได้ · SABA + ipratropium ใน <b>ED</b> ลด admission ในการกำเริบรุนแรง ${S.k}${S.p}</li><li>Tiotropium add-on ใน asthma ที่คุมไม่ได้ด้วย ICS ± LABA ${S.p}</li></ul>
 <h3>ADR</h3><ul><li>ปากแห้ง (ลดด้วย spacer), ตามัว, <b>urinary retention</b> ${S.k}${S.p}</li><li>กังวลเรื่อง dementia ในผู้สูงอายุ · มีรายงาน CV event กับ ipratropium แต่ไม่พบใน tiotropium ${S.k}${S.p}</li></ul>
 <div class="pearl">อย่าใช้ <b>SAMA + LAMA</b> พร้อมกัน · ถ้าให้ ipratropium ช่วง COPD exacerbation ให้หยุด LAMA ไว้ก่อน ${S.k}${S.p}</div>`});

SEC.push({id:"pde",mm:"Methylxanthines · PDE4",drugs:"theophylline · roflumilast",act:["inh"],k:"b",t:"Methylxanthines & PDE4 inhibitors",tools:MAPTOOLS,leg:["inh"],draw:MAP(["pde"]),
notes:()=>`<h3>กลไก (theophylline)</h3><ul><li>ยับยั้ง <b>PDE</b> → cAMP ↑ (PDE3 → คลายกล้ามเนื้อ, PDE4 → ลด cytokine) ${S.k}</li><li><b>Adenosine receptor antagonist</b> ${S.k}</li><li>ขนาดต่ำเพิ่ม <b>histone deacetylation</b> → เสริมฤทธิ์ corticosteroid ${S.k}</li></ul>
 <h3>Pharmacodynamics</h3><ul><li>CNS: ตื่นตัว, ขนาดสูง → ชัก · หัวใจ: + chronotropic/inotropic, arrhythmia · ไต: diuretic อ่อน · เพิ่มแรงบีบ diaphragm ${S.k}</li>
 <li>Theophylline = 1,3-dimethylxanthine · caffeine = 1,3,7-trimethyl · aminophylline = theophylline + ethylenediamine ${S.k}</li></ul>
 <h3>ทำไมแทบไม่ใช้แล้ว</h3><ul><li><b>Narrow therapeutic index</b> ต้องวัดระดับยา · metabolism ต่างกันมาก · DI เยอะ ${S.k}</li><li>Toxicity: คลื่นไส้อาเจียน, tremor, arrhythmia, ชัก ${S.k}</li></ul>
 <h3>Roflumilast (oral PDE4 selective)</h3><ul><li>ลด exacerbation ของ <b>COPD</b> (ไม่อนุมัติใน asthma) · ไม่ได้ขยายหลอดลมโดยตรง ${S.k}${S.p}</li>
 <li>ใช้เมื่อ chronic bronchitis + FEV₁ &lt;50% + ยังกำเริบทั้งที่ใช้ long-acting 2–3 กลุ่ม ${S.p}</li>
 <li>ADR: ท้องเสีย, <b>น้ำหนักลด</b>, คลื่นไส้, ปวดหัว, นอนไม่หลับ, depression/suicidal ideation ${S.p}</li></ul>
 <div class="pearl">ห้ามใช้ roflumilast ร่วมกับ theophylline · เลี่ยงในคนผอม ${S.p}</div>`});

/* ---------- c · controllers ---------- */
SEC.push({id:"steroids",mm:"Corticosteroids",drugs:"fluticasone · budesonide · prednisone",act:["st"],k:"c",t:"Corticosteroids (ICS · systemic)",tools:MAPTOOLS,leg:["st"],draw:MAP(["gr"]),
notes:()=>`<h3>กลไก</h3><ul><li>เปลี่ยน gene expression → ลด cytokine อักเสบ · สำคัญที่สุดคือ <b>ลดการแทรกของ lymphocyte, eosinophil, mast cell</b> ${S.k}</li>
 <li>ไม่คลายกล้ามเนื้อโดยตรง แต่ลด hyperreactivity, ลดบวมของเยื่อบุ, เสริมฤทธิ์ β agonist ${S.k}</li></ul>
 <h3>ยาในกลุ่ม</h3><ul><li><b>ICS</b>: beclomethasone, budesonide, ciclesonide, flunisolide, fluticasone, mometasone, triamcinolone ${S.k}</li>
 <li>Fluticasone furoate แรงกว่า propionate ~2 เท่า ออกฤทธิ์นานกว่า → วันละครั้ง ${S.k}</li><li>Ciclesonide = prodrug ถูก esterase ในหลอดลมกระตุ้น → candidiasis น้อยกว่า ${S.k}</li></ul>
 <h3>ใช้เมื่อ</h3><ul><li><b>Controller of choice</b> ใน persistent asthma ทุกระดับ ทุกอายุ ${S.p}</li><li>ไม่รักษาหาย: หยุดยาแล้วอาการกลับใน 2–3 สัปดาห์ ${S.k}</li>
 <li>COPD: ใช้เฉพาะ severe/มี exacerbation/มี asthma ร่วม หรือ eosinophil สูง ${S.k}</li></ul>
 <h3>Systemic</h3><ul><li>Acute severe: <b>prednisone 30–60 mg/วัน</b> หรือ methylprednisolone 0.5–1 mg/kg IV q6–12h ${S.k}</li>
 <li>Onset 4–12 ชม. จึงให้เร็ว · oral = IV · ให้ 3–10 วัน ไม่ต้อง taper ${S.p}</li></ul>
 <h3>ADR</h3><ul><li>ICS: <b>oropharyngeal candidiasis</b>, dysphonia → บ้วนปากหลังพ่น, ใช้ spacer ${S.k}</li><li>ระยะยาว: osteoporosis, cataract · เด็กโตช้าลง ~1 cm ในปีแรกเท่านั้น ${S.k}</li><li>COPD: ICS เพิ่ม <b>pneumonia</b> ${S.k}${S.p}</li></ul>
 <div class="pearl">เปลี่ยนจาก oral steroid เรื้อรังมาเป็น ICS ต้อง <b>taper ช้า</b> กัน adrenal insufficiency ${S.k}</div>`});

SEC.push({id:"lt",mm:"Leukotriene modifiers",drugs:"montelukast · zafirlukast · zileuton",act:["bl", "inh"],k:"c",t:"Leukotriene modifiers",tools:MAPTOOLS,leg:["bl","inh"],draw:MAP(["cyslt","lox"]),
notes:()=>`<h3>กลไก</h3><ul><li><b>Zileuton</b>: ยับยั้ง 5-lipoxygenase → ไม่สร้าง leukotriene ${S.k}</li><li><b>Montelukast, zafirlukast</b>: antagonist ที่ LTD₄ receptor (CysLT₁) ${S.k}</li>
 <li>LTC₄/D₄ → bronchoconstriction, hyperreactivity, บวม, mucus · LTB₄ → ดึง neutrophil ${S.k}</li></ul>
 <h3>ขนาดยา (ผู้ใหญ่)</h3>${tbl(["ยา","ขนาด"],[["Montelukast","10 mg วันละครั้ง (เด็ก 4–5 mg) · ใช้ได้ตั้งแต่ 12 เดือน"],["Zafirlukast","20 mg วันละ 2"],["Zileuton SR","1200 mg วันละ 2"]])}
 <h3>ใช้เมื่อ</h3><ul><li>ทางเลือกแทน low-dose ICS (ด้อยกว่า ICS) · oral สะดวกในเด็ก ${S.k}</li><li>ได้ผลดีเป็นพิเศษใน <b>aspirin-exacerbated respiratory disease</b>, allergic rhinitis ร่วม, EIB ${S.k}${S.p}</li></ul>
 <h3>ADR</h3><ul><li>Montelukast: <b>boxed warning</b> neuropsychiatric (suicidality, ฝันร้าย, พฤติกรรมในเด็ก) ${S.k}</li><li>Zileuton, zafirlukast: <b>hepatotoxicity</b> (zileuton ต้องตรวจ LFT) · ผ่าน CYP2C9 มี DI ${S.p}</li><li>EGPA ที่เคยรายงาน น่าจะเป็นการเปิดโรคเมื่อลด prednisone ${S.k}</li></ul>
 <div class="pearl"><b>AERD</b> = asthma + nasal polyps + แพ้ NSAID ที่ยับยั้ง COX-1 → arachidonic acid ถูกเบนไปทาง leukotriene ${S.k}</div>`});

SEC.push({id:"cromolyn",mm:"Mast cell stabilizers",drugs:"cromolyn · nedocromil",act:["mod"],k:"c",t:"Mast cell stabilizers",tools:MAPTOOLS,leg:["mod"],draw:MAP(["mast"]),
notes:()=>`<h3>กลไก</h3><ul><li><b>Cromolyn, nedocromil</b>: ยับยั้งการ degranulation ของ mast cell · ไม่ขยายหลอดลมโดยตรง ${S.k}</li><li>กันได้ทั้ง antigen- และ exercise-induced bronchospasm ${S.k}</li></ul>
 <h3>ปัจจุบัน</h3><ul><li>ถูกแทนที่เกือบหมดใน asthma · ในสหรัฐเหลือแบบ nebulizer solution ${S.k}</li><li>ยังใช้: <b>nasal spray (OTC)</b> ใน allergic rhinitis, oral solution ใน mast cell disorder, ยาหยอดตา ${S.k}${S.p}</li></ul>`});

/* ---------- d · biologics ---------- */
SEC.push({id:"biologics",mm:"Asthma biologics",drugs:"omalizumab · mepolizumab · benralizumab · dupilumab · tezepelumab",act:["mab"],k:"d",t:"Monoclonal antibodies for severe asthma",tools:MAPTOOLS,leg:["mab"],draw:MAP(["ige","il5","il5r","il4r","tslp"]),
notes:()=>`<h3>ยาและเป้าหมาย</h3>${tbl(["ยา","target","ให้ยา"],[["Omalizumab","IgE (ส่วนที่จับ FcεR)","SC q2–4 wk · ขนาดตาม IgE + น้ำหนัก"],["Mepolizumab","IL-5","SC"],["Reslizumab","IL-5","IV q4 wk"],["Benralizumab","IL-5 receptor α","SC"],["Dupilumab","IL-4Rα (IL-4 + IL-13)","SC q2 wk"],["Tezepelumab","TSLP","SC q4 wk"]])}
 <h3>เลือกตาม phenotype</h3><ul><li><b>Omalizumab</b>: moderate–severe + แพ้ perennial aeroallergen (skin test/RAST +) · ลด exacerbation ที่ต้อง admit 88% ${S.k}</li>
 <li><b>Anti-IL-5/5R</b>: severe <b>eosinophilic</b> asthma ${S.k}</li><li><b>Dupilumab</b>: eosinophilic หรือ <b>OCS-dependent</b> (ไม่ต้องมี eos) ${S.k}</li><li><b>Tezepelumab</b>: severe asthma <b>ไม่ต้องมี biomarker</b> ${S.k}</li>
 <li>ทั้งหมดสำหรับคนที่คุมไม่ได้ด้วย ICS/LABA ${S.k}</li></ul>
 <h3>ADR · ข้อควรระวัง</h3><ul><li>Anaphylaxis (omalizumab, reslizumab ~0.3%) → เฝ้าดูหลังฉีด, ให้ epinephrine auto-injector ${S.k}${S.p}</li><li>Mepolizumab: <b>herpes zoster</b> → ฉีด zoster vaccine ก่อน 4 สัปดาห์ (อายุ ≥50) ${S.k}</li>
 <li>Dupilumab: eosinophilia ชั่วคราว (ระวังถ้า eos &gt;1500/µL) ${S.k}</li><li>Anti-IL-5: เลี่ยงใน helminth infection ${S.p}</li></ul>
 <div class="pearl">ข้อบ่งใช้อื่น: omalizumab → chronic urticaria, nasal polyps · mepolizumab → EGPA, HES · dupilumab → atopic dermatitis, EoE ${S.k}</div>`});

/* ---------- e · upper airway, cough, CF ---------- */
SEC.push({id:"antihist",mm:"Antihistamines · decongestants",drugs:"diphenhydramine · cetirizine · loratadine · pseudoephedrine · oxymetazoline",act:["bl", "ag"],k:"e",t:"H₁ antihistamines & decongestants",tools:MAPTOOLS,leg:["bl"],draw:MAP(["h1"]),
notes:()=>`<h3>H₁ antagonists</h3><ul><li>Competitive antagonist/inverse agonist ที่ H₁ · ไม่มีผลต่อกรดในกระเพาะ (H₂) ${S.k}</li>
 <li><b>1st gen</b> (diphenhydramine, chlorpheniramine, hydroxyzine, promethazine): เข้า CNS → ง่วง, anti-motion sickness, antimuscarinic, α-block, local anesthetic ${S.k}</li>
 <li><b>2nd gen</b> (cetirizine, loratadine/desloratadine, fexofenadine): lipid solubility ต่ำ, เป็น P-gp substrate → เข้า CNS น้อย · นาน 12–24 ชม. ${S.k}</li>
 <li>Active metabolite: hydroxyzine → cetirizine · terfenadine → fexofenadine · loratadine → desloratadine ${S.k}</li></ul>
 <h3>Allergic rhinitis: เลือกยา</h3><ul><li><b>First-line</b>: intranasal corticosteroid (ดีที่สุด รวมถึงคัดจมูก) และ oral antihistamine ${S.p}</li>
 <li>รอง: decongestant, cromolyn nasal, montelukast, ipratropium nasal (น้ำมูกไหล), saline irrigation ${S.p}</li></ul>
 <h3>Decongestants (α₁ agonist)</h3><ul><li>Oral: pseudoephedrine (behind-the-counter), phenylephrine (oral แทบไม่ได้ผล) · ADR: BP ↑, นอนไม่หลับ, urinary retention ใน BPH ${S.p}</li>
 <li>Nasal: oxymetazoline, phenylephrine, naphazoline · ใช้ <b>≤3 วัน</b> กัน <b>rhinitis medicamentosa</b> ${S.p}</li></ul>
 <div class="pearl">H₁ blocker ไม่ช่วย asthma · terfenadine, astemizole ถูกถอนเพราะ QT ยาว/arrhythmia ${S.k}</div>`});

SEC.push({id:"cough",mm:"Cough & mucus",drugs:"dextromethorphan · codeine · guaifenesin · N-acetylcysteine · dornase alfa",act:["mod"],k:"e",t:"Cough & mucus",leg:[],
draw(){let b="";
 b+=`<rect class="p-gr" fill="url(#gTh2)" x="30" y="20" width="260" height="64" rx="16"/>`+T(160,46,"Medullary cough center",{c:"bh"})+T(160,64,"รับสัญญาณจาก vagal afferent",{c:"s m"});
 b+=pill(110,108,"Dextromethorphan","mod","x",true)+pill(232,108,"Codeine","ag","x",true);
 b+=`<path class="p-nerve" d="M520,200 C520,120 420,52 296,52"/>`+T(470,112,"Vagal afferent",{a:"start",c:"s"})+T(470,128,"(irritant receptors)",{a:"start",c:"s m"});
 b+=`<rect class="p-lum" fill="url(#gLum)" x="20" y="200" width="600" height="56" rx="12"/>`+T(36,222,"Airway lumen",{a:"start",c:"bh"});
 b+=`<path class="p-mucus" d="M120,256 C150,226 190,232 220,246 C260,222 300,230 330,248 C370,226 420,232 450,250 C490,230 540,236 600,256 Z"/>`+T(360,242,"เสมหะเหนียว (mucin + DNA จาก neutrophil)",{c:"s"});
 for(let i=0;i<10;i++)b+=`<rect class="p-epi" fill="url(#gEpi)" x="${20+i*60.5}" y="258" width="57" height="30" rx="7"/>`;
 b+=pill(110,314,"Guaifenesin","mod","x",true)+pill(250,314,"N-acetylcysteine","mod","x",true)+pill(400,314,"Dornase alfa","mod","x",true)+pill(540,314,"Hypertonic saline","mod","x",true);
 b+=T(320,350,"กดไอที่สมอง ↑   ·   ทำให้เสมหะใสและออกง่าย ↓",{c:"h"});return psvg(b,"0 0 640 362")},
notes:()=>`<h3>Antitussives</h3><ul><li>Opioid เป็นยากดไอที่ได้ผลที่สุด ที่ขนาดต่ำกว่าระงับปวด · receptor ที่ใช้กดไอต่างจากที่ระงับปวด ${S.k}</li>
 <li><b>Dextromethorphan</b>: ไม่ติด ไม่ระงับปวด ท้องผูกน้อยกว่า codeine · ห้ามใช้ร่วม/ภายใน 2 สัปดาห์หลัง <b>MAOI</b> (serotonin syndrome) · FDA ห้ามใช้ในเด็ก &lt;6 ปี ${S.k}</li>
 <li><b>Codeine</b> ~15 mg ก็กดไอได้ · metabolism แปรผัน จึงทบทวนการใช้ในเด็ก ${S.k}</li></ul>
 <h3>Mucus</h3><ul><li><b>Dornase alfa</b> ลด exacerbation และเพิ่มสมรรถภาพปอดใน CF ${S.p}</li><li><b>Hypertonic saline</b> ต้องให้ bronchodilator ก่อน (bronchospasm) ${S.p}</li>
 <li><b>N-acetylcysteine</b> ลด exacerbation ใน COPD บางราย ${S.p} · เป็น antidote ของ acetaminophen ด้วย ${S.x}</li></ul>`});

SEC.push({id:"cftr",mm:"CFTR modulators",drugs:"ivacaftor · lumacaftor · tezacaftor",act:["ag", "mod"],k:"e",t:"CFTR modulators (cystic fibrosis)",leg:["ag","mod"],
draw(){let b="";
 const box=(x,y,w,h,t,s,c="")=>`<rect class="box ${c}" x="${x}" y="${y}" width="${w}" height="${h}" rx="12"/>`+T(x+w/2,y+24,t,{c:"bh"})+(s?T(x+w/2,y+42,s,{c:"s"}):"");
 b+=box(20,30,170,60,"ER: folding","Phe508del พับผิด")+arr("M192,60 L232,60")+box(234,30,170,60,"Golgi → trafficking","")+arr("M406,60 L446,60")+box(448,30,172,60,"Cell membrane","CFTR Cl⁻ channel");
 b+=`<rect class="p-cellm" fill="url(#gCell)" x="448" y="120" width="172" height="120" rx="16"/>`+`<rect class="p-rec" x="522" y="128" width="24" height="70" rx="8"/>`+T(534,222,"gate (gating mutation)",{c:"s"})+arr("M534,128 L534,104")+T(560,112,"Cl⁻ ออก",{a:"start",c:"s"});
 b+=pill(300,130,"Correctors: lumacaftor · tezacaftor","mod","x",true)+pill(300,160,"(elexacaftor)","mod","x",true)+arr("M300,118 L300,94");
 b+=pill(534,262,"Potentiator: ivacaftor","ag","x",true);
 b+=T(320,310,"Corrector = ช่วยพับ/ส่ง CFTR ถึงผิวเซลล์ · Potentiator = เปิด gate ให้ Cl⁻ ไหล",{c:"h"});
 return psvg(b,"0 0 640 330")},
notes:()=>`<h3>Ivacaftor (potentiator)</h3><ul><li>เปิด CFTR ที่อยู่บนผิวเซลล์แล้วใน <b>gating mutation</b> · FEV₁ ดีขึ้น ~10%, exacerbation ลด, น้ำหนักขึ้น ${S.p}</li>
 <li>ให้เดี่ยว <b>ไม่ได้ผล</b> ใน Phe508del homozygous · ต้องยืนยัน genotype ก่อนสั่งเสมอ ${S.p}</li><li>150 mg q12h กับอาหารมีไขมัน · ลดขนาดเมื่อใช้ CYP3A inhibitor · ห้ามใช้กับ strong CYP3A inducer · ตรวจ LFT ${S.p}</li></ul>
 <h3>Corrector + potentiator</h3><ul><li><b>Lumacaftor/ivacaftor</b>: Phe508del homozygous ≥6 ปี · lumacaftor เป็น strong CYP inducer → DI เยอะ ${S.p}</li><li><b>Tezacaftor/ivacaftor</b>: Phe508del homozygous ≥12 ปี ${S.p}</li>
 <li>Elexacaftor/tezacaftor/ivacaftor (triple) ออกหลัง PT 5e ใช้ได้กับคนที่มี Phe508del ≥1 allele ${S.x}</li></ul>
 <h3>การรักษา CF อื่น</h3><ul><li>Airway clearance + albuterol ก่อน → mucolytic (dornase alfa, hypertonic saline) ${S.p}</li><li>ไม่แนะนำ β₂ agonist/ICS ประจำถ้าไม่มี asthma หรือ ABPA ${S.p}</li></ul>`});

/* ---------- f · PAH ---------- */
SEC.push({id:"pah",mm:"PAH drugs",drugs:"bosentan · ambrisentan · sildenafil · riociguat · epoprostenol",act:["bl", "inh", "ag"],k:"f",t:"Pulmonary arterial hypertension",leg:["bl","ag","inh"],
draw(){let b="";HL=["era","sgc","pde5","ip"];
 b+=`<rect class="p-epi" fill="url(#gEpi)" x="20" y="20" width="720" height="70" rx="14"/>`+T(36,42,"Endothelial cell",{a:"start",c:"bh"});
 [[140,"ET-1","↑ ใน PAH"],[380,"NO","↓ ใน PAH"],[620,"PGI₂","↓ ใน PAH"]].forEach(([x,t,s])=>b+=T(x,62,t,{c:"b"})+T(x,80,s,{c:"s m"}));
 b+=`<rect class="p-cellm" fill="url(#gCell)" x="20" y="170" width="720" height="150" rx="20"/>`+T(36,312,"Pulmonary vascular smooth muscle",{a:"start",c:"s m"});
 b+=arr("M140,90 L140,166")+rec(140,176,"ETA · ETB",true)+T(140,214,"Ca²⁺ ↑ → constriction",{c:"s"})+T(140,232,"+ proliferation",{c:"s"});
 b+=arr("M380,90 L380,166")+`<rect class="p-enz" x="350" y="176" width="60" height="24" rx="7"/>`+T(380,192,"sGC",{c:"bh"})+T(380,222,"GTP → cGMP ↑ → relax",{c:"s"})+`<rect class="p-enz" x="455" y="230" width="60" height="24" rx="7"/>`+T(485,246,"PDE5",{c:"bh"})+arr("M430,224 L452,236")+T(485,272,"cGMP → GMP",{c:"s m"});
 b+=arr("M620,90 L620,166")+rec(620,176,"IP receptor",true)+T(620,214,"cAMP ↑ → relax",{c:"s"})+T(620,232,"anti-platelet",{c:"s"});
 b+=pill(140,128,"ERA: bosentan · ambrisentan · macitentan","bl","era")+pill(300,250,"Riociguat (sGC stim)","ag","sgc")+pill(485,292,"Sildenafil · Tadalafil","inh","pde5")+pill(620,128,"Epoprostenol · treprostinil · iloprost","ag","ip")+pill(640,262,"Selexipag (IP agonist)","ag","ip");
 return psvg(b,"0 0 760 340")},
notes:()=>`<h3>3 pathways</h3><ul><li><b>Endothelin ↑</b> → ERA: bosentan, macitentan (ETA+ETB), ambrisentan (ETA selective) ${S.k}</li><li><b>NO–cGMP ↓</b> → PDE5 inhibitor (sildenafil, tadalafil), riociguat (กระตุ้น sGC โดยไม่ต้องพึ่ง NO), inhaled NO ${S.k}</li>
 <li><b>Prostacyclin ↓</b> → epoprostenol, treprostinil, iloprost · selexipag = oral prodrug ที่เป็น IP receptor agonist ${S.k}</li><li>CCB (nifedipine, amlodipine, diltiazem) · O₂ และ anticoagulant ใช้บ่อย ${S.k}</li></ul>
 <h3>ADR ของ ERA</h3><ul><li><b>Teratogenic</b> → ห้ามในหญิงตั้งครรภ์ ต้องมี pregnancy test ลบก่อนสั่ง ${S.k}</li><li><b>Hepatotoxic</b> (bosentan ต้องตรวจ LFT ทุกเดือน; sitaxsentan ถูกถอนจากตลาด) ${S.k}</li><li>BP ต่ำ, หน้าแดง, บวม, ปวดหัว ${S.k}</li></ul>
 <div class="pearl">PAH เป็นข้อบ่งใช้เดียวที่อนุมัติของ ERA · ในหัวใจล้มเหลวไม่ได้ผล ${S.k}</div>`});

/* ---------- g · treating asthma ---------- */
SEC.push({id:"chronicasthma",mm:"Chronic asthma steps",drugs:"",act:[],k:"g",t:"Chronic asthma: stepwise therapy",leg:[],tools:[["ast",[["pt","PT 5e · GINA 2017"],["k","Katzung 16e · SMART"]]]],
draw(){const R=ST.ast==="pt"?[["Step 1","As-needed SABA · (พิจารณา low ICS ถ้าเสี่ยงกำเริบ)"],["Step 2","Low-dose ICS  · alt: LTRA, low ICS"],["Step 3","Low ICS + LABA  · alt: medium ICS, low ICS + LTRA"],["Step 4","Medium/high ICS + LABA  · alt: + tiotropium, high ICS + LTRA"],["Step 5","Refer: add tiotropium, anti-IgE, anti-IL-5  · alt: low OCS"]]
 :[["Mild intermittent","As-needed SABA · GINA: ICS ทุกครั้งที่ใช้ SABA / as-needed budesonide–formoterol"],["Persistent","Low-dose ICS daily  · alt: LTRA"],["Not controlled","ICS + LABA ดีกว่าเพิ่ม ICS 2 เท่า · SMART: ICS–formoterol เป็นทั้ง controller และ reliever"],["Persistent obstruction","+ Tiotropium (LAMA)"],["Severe, uncontrolled on ICS/LABA","Biologic ตาม phenotype · azithromycin"]];
 let b="";R.forEach(([t,s],i)=>{const x=20+i*18,y=14+(R.length-1-i)*62,w=600-i*18;b+=`<rect class="box${i>2?" ar":i>0?" gl":""}" x="${x}" y="${y}" width="${w}" height="54" rx="12"/>`+T(x+16,y+22,t,{a:"start",c:"bh"})+wrapT(x+16,y+40,s,Math.floor(w/6.4),"s")});
 b+=T(320,336,ST.ast==="pt"?"Reliever ทุก step = as-needed SABA":"ห้าม LABA เดี่ยวใน asthma ทุก step",{c:"h"});return psvg(b,"0 0 640 350")},
notes:()=>`<h3>หลักการ</h3><ul><li>ปรับความเข้มของยาตาม <b>severity</b> (เริ่มยา) และ <b>control</b> (ปรับยา) · ใช้ยาน้อยที่สุดที่คุมได้ ${S.p}</li><li>คิด 2 domain: <b>impairment</b> ตอนนี้ และ <b>risk</b> การกำเริบในอนาคต ${S.k}</li>
 <li>ต้องเพิ่มยาถ้าใช้ rescue &gt;2 ครั้ง/สัปดาห์, อาการกลางคืน &gt;2 ครั้ง/เดือน หรือ FEV₁ &lt;80% ${S.k}</li></ul>
 <h3>Step up / step down</h3><ul><li>ประเมินซ้ำใน 2–6 สัปดาห์ · เช็ก technique และ adherence ก่อน step up ${S.p}</li><li>คุมได้ ≥3 เดือน → ลอง step down ${S.p}</li>
 <li>FEV₁ &lt;50% → เริ่ม high-dose ICS + LABA ได้เลย แล้วลดหลัง ~3 เดือน ${S.k}</li></ul>
 <h3>ที่หนังสือ 2 เล่มต่างกัน</h3><ul><li>PT 5e อิง GINA 2017: step 1 ใช้ SABA เดี่ยวได้ ${S.p}</li><li>Katzung 16e: SMART อยู่ใน US guideline ตั้งแต่ 2020 · GINA แนะนำ ICS ทุกครั้งที่ใช้ bronchodilator แม้ในรายที่เบา ${S.k}</li></ul>
 <h3>กลุ่มพิเศษ</h3><ul><li>ตั้งครรภ์: <b>budesonide</b> มีข้อมูลมากที่สุด · <b>albuterol</b> เป็น drug of choice · asthma ที่คุมไม่ได้อันตรายต่อลูกมากกว่ายา ${S.p}</li><li>EIB: SABA ก่อนออกกำลังกาย 5–20 นาที ${S.p}</li></ul>`});

SEC.push({id:"acuteasthma",mm:"Acute asthma",drugs:"",act:[],k:"g",t:"Acute asthma exacerbation",leg:[],
draw:()=>flowD([["Home action plan","Albuterol สูงสุด 4 puffs ทุก 20 นาที × 1 ชม. · ไม่ดีขึ้น → ไป ED"],["ED: oxygen","SpO₂ ≥90% (≥95% เด็ก, ตั้งครรภ์, โรคหัวใจ) · FiO₂ ต่ำมักพอ","gl"],["SABA ถี่/ต่อเนื่อง + ipratropium","ipratropium ร่วมเฉพาะใน ED (moderate–severe)","gl"],["Systemic corticosteroid ให้เร็ว","prednisone 30–60 mg/d หรือ methylpred 0.5–1 mg/kg IV q6–12h","ar"],["ไม่ตอบสนอง 3–4 ชม. → admit","Mg, heliox · respiratory failure → intubation","ar"],["Discharge","SABA + OCS 3–10 วัน + ICS","vn"]]),
notes:()=>`<h3>ประเมิน</h3><ul><li>ต้องประเมินทางคลินิกต่อเนื่องและวัด lung function ซ้ำ ${S.k}</li><li>PEF zone: เขียว 80–100% · เหลือง 50–79% (เพิ่ม SABA ± OCS, โทรหาแพทย์) · แดง &lt;50% (SABA + OCS แล้วไป ED) ${S.p}</li></ul>
 <h3>ยา</h3><ul><li>Mild: SABA พ่นได้ผลเท่า SC epinephrine ${S.k}</li><li>Severe: O₂ + albuterol nebulized ถี่/ต่อเนื่อง + systemic steroid ${S.k}</li>
 <li>OCS ให้จน PEF ≥70% ของ personal best และอาการหาย · burst ≤10 วัน ไม่ต้อง taper ${S.p}</li><li>Admit: continuous SABA, systemic steroid, Mg, heliox ${S.p}</li></ul>
 <div class="pearl">Case Katzung: วัยรุ่นใช้ albuterol บ่อยมากหลังเป็นหวัด แล้ว "พ่นไม่ช่วย" = ต้องเร่งรักษาใน ED และปรับ controller ระยะยาว ${S.k}</div>`});

/* ---------- h · treating COPD ---------- */
SEC.push({id:"stablecopd",mm:"Stable COPD (GOLD)",drugs:"",act:[],k:"h",t:"Stable COPD: GOLD groups",leg:[],
draw(){let b="";const C=[[20,40,"C","อาการน้อย · เสี่ยงกำเริบสูง","1) LAMA","2) LAMA + LABA หรือ LABA + ICS","gl"],[330,40,"D","อาการมาก · เสี่ยงกำเริบสูง","1) LAMA หรือ LAMA + LABA","2) LAMA + LABA + ICS → roflumilast / macrolide","ar"],[20,190,"A","อาการน้อย · เสี่ยงต่ำ","1) Bronchodilator (เช่น SABA)","2) ทำต่อ หยุด หรือเปลี่ยนตัว",""],[330,190,"B","อาการมาก · เสี่ยงต่ำ","1) LABA หรือ LAMA","2) LAMA + LABA","vn"]];
 C.forEach(([x,y,g,s,l1,l2,c])=>b+=`<rect class="box ${c}" x="${x}" y="${y}" width="290" height="136" rx="14"/>`+T(x+16,y+30,"Group "+g,{a:"start",c:"bb"})+T(x+16,y+52,s,{a:"start",c:"s m"})+T(x+16,y+84,l1,{a:"start",c:"bh"})+wrapT(x+16,y+106,l2,44,"s"));
 b+=T(10,32,"↑ exacerbation ≥2/ปี หรือ admit ≥1",{a:"start",c:"s m"})+T(620,346,"อาการ (mMRC / CAT) →",{a:"end",c:"s m"});return psvg(b,"0 0 640 356")},
notes:()=>`<h3>ทุกคน</h3><ul><li>เลิกบุหรี่, เลี่ยงสิ่งระคายเคือง, pulmonary rehab, วัคซีน influenza/pneumococcus, SABA as-needed ${S.p}</li><li><b>LTOT</b> &gt;15 ชม./วัน ถ้า PaO₂ ≤55 mmHg หรือ SaO₂ ≤88% → ลดการตาย · เป้า SaO₂ ≥90% ${S.p}</li></ul>
 <h3>เลือกยา (PT Fig 15-2)</h3><ul><li>Monotherapy: <b>LAMA</b> ดีกว่า LABA ในการลด exacerbation ${S.p}</li><li>LAMA + LABA ดีกว่า LABA + ICS เพราะ ICS เพิ่ม pneumonia ${S.p}</li>
 <li>ICS ใช้เมื่อมี exacerbation · eosinophil ในเลือดช่วยบอกว่าน่าจะได้ประโยชน์ ${S.k}</li><li>ยังกำเริบ: <b>roflumilast</b> (chronic bronchitis + FEV₁ &lt;50%) หรือ <b>azithromycin</b> (อดีตผู้สูบ; ตรวจ ECG, การได้ยิน) ${S.p}</li></ul>
 <h3>อื่น ๆ</h3><ul><li><b>α₁-antitrypsin augmentation</b>: ผู้ไม่สูบที่ขาด AAT และ FEV₁ ≤65% ${S.p}</li><li>Theophylline ขนาดต่ำไม่ลด exacerbation ในการศึกษาใหญ่ · metoprolol ไม่ช่วยป้องกัน ${S.k}</li></ul>
 <div class="pearl">GOLD เวอร์ชันใหม่รวม C+D เป็นกลุ่ม <b>E</b> · ดู guideline ปัจจุบันประกอบ ${S.x}</div>`});

SEC.push({id:"copdexac",mm:"COPD exacerbation",drugs:"",act:[],k:"h",t:"COPD exacerbation",leg:[],
draw:()=>flowD([["Bronchodilator","SABA ± ipratropium (MDI ± spacer หรือ nebulizer) · หยุด LAMA ถ้าใช้ ipratropium"],["Controlled oxygen","titrate SpO₂ 88–92% · ตรวจ blood gas","gl"],["Systemic corticosteroid","prednisone 40 mg/วัน × 5 วัน (oral) · ดูน้ำตาล","ar"],["Antibiotic 5–7 วัน (ถ้าเข้าเกณฑ์)","เสมหะเป็นหนอง + (เสมหะมากขึ้น หรือ เหนื่อยมากขึ้น) หรือใส่ท่อ","ar"],["ก่อนกลับบ้าน","ต่อ maintenance · inhaler technique · วัคซีน · เลิกบุหรี่","vn"]]),
notes:()=>`<h3>ต่างจาก asthma exacerbation</h3><ul><li>อัตราตายสูงกว่า (อายุมาก, โรคหัวใจร่วม) แต่หลักรักษาคล้ายกัน ยกเว้นใช้ <b>antibiotic</b> เป็นประจำ ${S.k}</li></ul>
 <h3>Corticosteroid</h3><ul><li>ลดเวลาฟื้นตัว, relapse, treatment failure · ได้ผลมากขึ้นเมื่อ eosinophil &gt;2% ${S.p}</li><li>IV ใช้เมื่อกินไม่ได้เท่านั้น · nebulized budesonide เป็นทางเลือก ${S.p}</li></ul>
 <h3>Antibiotic</h3>${tbl(["เชื้อ","ยาที่ใช้บ่อย"],[["H. influenzae, S. pneumoniae, M. catarrhalis","amoxicillin ± β-lactamase inhibitor, azithromycin/clarithromycin, doxycycline"],["Pseudomonas","ciprofloxacin/levofloxacin, piperacillin–tazobactam, cefepime/ceftazidime, carbapenem"],["MRSA","vancomycin, linezolid"]])}
 <ul><li>Procalcitonin อาจช่วยตัดสินใจ ${S.p}</li><li>เสี่ยงกำเริบซ้ำสูงใน 8 สัปดาห์แรก ${S.p}</li></ul>`});

window.NAV={"prev":null,"next":null};

/* First Aid order */
(function(){const O=["targets","delivery","beta2","steroids","antimusc","lt","biologics","pde","cromolyn","antihist","cough","cftr","pah","chronicasthma","acuteasthma","stablecopd","copdexac"];
 ["beta2","steroids","antimusc","lt","biologics","pde","cromolyn"].forEach(id=>SEC.find(s=>s.id===id).k="b");
 GN.b="Asthma drugs";GN.e="H₁ blockers, cough & decongestants";delete GN.c;delete GN.d;
 SEC.sort((a,b)=>O.indexOf(a.id)-O.indexOf(b.id))})();

const EXTRA=["delivery", "cromolyn", "cftr", "chronicasthma", "acuteasthma", "stablecopd", "copdexac"];

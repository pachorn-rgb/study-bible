/* ================= Biochemistry — Metabolism 1: regulation, glycolysis, TCA, ETC ================= */
Object.assign(S,{lir:'<b class="sbb lir">LIR</b>',tbbio:'<b class="sbb tbbio">TB</b>',fa1:'<b class="sbb fa">FA1</b>',x:'<b class="sbb gen">Gen</b>'});
Object.assign(GN,{a:"Overview & regulation",b:"Glycolysis",c:"Pyruvate และ TCA",d:"Oxidative phosphorylation"});

SEC.push({id:"sites",k:"a",t:"Metabolic compartmentation",mm:"เส้นทางอยู่ที่ไหน",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* The cell carries the lesson: each pathway sits in the compartment it runs in, and the three
 that span both are drawn crossing the mitochondrial membrane instead of listed in a box. */
 `<rect class="box bl" x="24" y="30" width="592" height="312" rx="18"/>
 <text class="t h" x="44" y="56">Cytosol</text>
 <text class="s" x="44" y="78">Glycolysis · HMP shunt · fatty acid synthesis</text>
 <text class="s" x="44" y="96">cholesterol · protein · nucleotide synthesis</text>
 <text class="s" x="160" y="128" text-anchor="middle">Heme synthesis</text>
 <text class="s" x="320" y="128" text-anchor="middle">Urea cycle</text>
 <text class="s" x="470" y="128" text-anchor="middle">Gluconeogenesis</text>
 <path class="ld" d="M160,136 L160,172"/><path class="ld" d="M320,136 L320,172"/><path class="ld" d="M470,136 L470,172"/>
 <rect class="box ar" x="60" y="156" width="520" height="150" rx="46"/>
 <text class="t h" x="88" y="196">Mitochondrion</text>
 <text class="s" x="88" y="226">β-oxidation · TCA cycle · oxidative phosphorylation</text>
 <text class="s" x="88" y="250">pyruvate dehydrogenase · acetyl-CoA · ketogenesis</text>
 <text class="s" x="88" y="286" style="opacity:.78">ทั้งสามเส้นทางด้านบนเริ่มที่หนึ่งแล้วไปจบอีกที่หนึ่ง</text>
 <text class="s" x="320" y="372" text-anchor="middle" style="font-weight:600">No mitochondrion, no choice — the red cell runs on glycolysis alone</text>`,
 "0 0 640 400"),
notes:()=>`<ul>
<li>เส้นทางที่ <b>ใช้ออกซิเจนและสร้าง ATP</b> อยู่ใน mitochondria ส่วนเส้นทาง <b>สังเคราะห์</b> ส่วนใหญ่อยู่ใน cytoplasm ${S.fa1}</li>
<li>สามเส้นทางที่ข้ามไปมาระหว่างสองที่คือ <b>heme synthesis, urea cycle, gluconeogenesis</b> ${S.fa1}</li>
<li>เหตุผลที่ข้ามไปมา: ขั้นแรกกับขั้นสุดท้ายของ heme อยู่ใน mitochondria แต่ช่วงกลางอยู่ใน cytosol · urea cycle เริ่มที่ CPS I ใน mitochondria แล้วออกมาจบใน cytosol ${S.lir}</li>
<li>erythrocyte ไม่มี mitochondria จึงพึ่ง glycolysis อย่างเดียว และทำ β-oxidation หรือ TCA ไม่ได้เลย ${S.x}</li></ul>`});

SEC.push({id:"ratelim",k:"a",t:"Rate-determining enzymes",mm:"enzyme กำหนดอัตรา",drugs:"",act:[],leg:[],
draw:()=>tbl(["Pathway","Rate-limiting enzyme","Activator ⊕ / inhibitor ⊝"],[
 ["Glycolysis","Phosphofructokinase-1 (PFK-1)","⊕ AMP, fructose-2,6-BP · ⊝ ATP, citrate"],
 ["Gluconeogenesis","Fructose-1,6-bisphosphatase 1","⊝ AMP, fructose-2,6-BP"],
 ["TCA cycle","Isocitrate dehydrogenase","⊕ ADP · ⊝ ATP, NADH"],
 ["Glycogenesis","Glycogen synthase","⊕ G6P, insulin, cortisol · ⊝ epinephrine, glucagon"],
 ["Glycogenolysis","Glycogen phosphorylase","⊕ epinephrine, glucagon, AMP · ⊝ G6P, insulin, ATP"],
 ["HMP shunt","Glucose-6-phosphate dehydrogenase","⊕ NADP⁺ · ⊝ NADPH"],
 ["De novo pyrimidine","Carbamoyl phosphate synthetase II","⊕ ATP, PRPP · ⊝ UTP"],
 ["De novo purine","Glutamine-PRPP amidotransferase","⊕ PRPP · ⊝ AMP, IMP, GMP"],
 ["Urea cycle","Carbamoyl phosphate synthetase I","⊕ N-acetylglutamate"],
 ["Fatty acid synthesis","Acetyl-CoA carboxylase (ACC)","⊕ insulin, citrate · ⊝ glucagon, palmitoyl-CoA"],
 ["Fatty acid oxidation","Carnitine acyltransferase I","⊝ malonyl-CoA"],
 ["Ketogenesis","HMG-CoA synthase",""],
 ["Cholesterol synthesis","HMG-CoA reductase","⊕ insulin, thyroxine · ⊝ glucagon, cholesterol"]]),
notes:()=>`<ul>
<li>ตารางนี้คือแกนของทั้งบท — ถ้าจำได้ว่า enzyme ตัวไหนคุมเส้นทางไหน จะตอบคำถามเรื่องการควบคุมได้เกือบหมด ${S.fa1}</li>
<li>สังเกตคู่ตรงข้าม: <b>PFK-1</b> คุม glycolysis ส่วน <b>fructose-1,6-bisphosphatase</b> คุม gluconeogenesis และ <b>fructose-2,6-BP ตัวเดียวกัน</b> กระตุ้นตัวแรกแต่ยับยั้งตัวหลัง จึงสลับทิศทางได้ในขั้นเดียว ${S.lir}</li>
<li><b>CPS I</b> (urea cycle, ใน mitochondria) กับ <b>CPS II</b> (pyrimidine, ใน cytosol) ชื่อคล้ายกันแต่คนละเส้นทางคนละที่ ${S.x}</li>
<li><b>Malonyl-CoA</b> เป็นสารตัวกลางของการสร้าง fatty acid และยับยั้ง carnitine acyltransferase I จึงกันไม่ให้สร้างและสลาย fatty acid พร้อมกัน ${S.lir}</li></ul>`});

SEC.push({id:"carriers",k:"a",t:"Activated carriers & cofactors",drugs:"",act:[],leg:[],
draw:()=>tbl(["Carrier","Group carried","Vitamin"],[
 ["ATP","Phosphate","—"],
 ["NADH · FADH₂","Electrons for ATP (catabolism)","B3 · B2"],
 ["NADPH","Electrons for synthesis and antioxidant defence","B3"],
 ["CoA · lipoamide","Acyl","B5 · lipoic acid"],
 ["Biotin","CO₂ (carboxylation)","B7"],
 ["TPP","Aldehyde (decarboxylation)","B1"],
 ["SAM","Methyl","—"],
 ["Tetrahydrofolate","One-carbon units","B9"]]),
notes:()=>`<ul>
<li><b>NADPH กับ NADH ต่างหน้าที่กัน</b> — NADH ส่งอิเล็กตรอนเข้าห่วงโซ่หายใจเพื่อสร้าง ATP ส่วน NADPH ใช้ในการสังเคราะห์ (fatty acid cholesterol) และกำจัดอนุมูลอิสระ ${S.lir}</li>
<li>NADPH มาจาก <b>HMP shunt</b> เป็นหลัก จึงอธิบายว่าทำไมผู้ที่พร่อง G6PD ถึงทนความเครียดจากออกซิเดชันไม่ได้ ${S.lir}</li>
<li><b>enzyme ที่ใช้ biotin</b>: pyruvate carboxylase, acetyl-CoA carboxylase, propionyl-CoA carboxylase ${S.fa1}</li>
<li><b>enzyme ที่ใช้ TPP</b>: pyruvate dehydrogenase, α-ketoglutarate dehydrogenase, branched-chain ketoacid dehydrogenase, transketolase ${S.fa1}${S.lir}</li></ul>`});

SEC.push({id:"glyco",k:"b",t:"Glycolysis",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["Glucose → glucose-6-P","hexokinase / glucokinase · ใช้ ATP · ไม่ย้อนกลับ","ar"],
 ["Fructose-6-P → fructose-1,6-BP","PFK-1 · ใช้ ATP · ไม่ย้อนกลับ · ขั้นกำหนดอัตรา","vn"],
 ["Split into two 3-carbon molecules","aldolase A → G3P และ DHAP",""],
 ["G3P → 1,3-BPG","glyceraldehyde-3-P dehydrogenase · ได้ NADH","bl"],
 ["1,3-BPG → 3-PG","phosphoglycerate kinase · ได้ ATP","gl"],
 ["PEP → pyruvate","pyruvate kinase · ได้ ATP · ไม่ย้อนกลับ","vn"]]),
notes:()=>`<ul>
<li>ผลสุทธิต่อ glucose หนึ่งโมเลกุล: <b>ATP 2 ตัว และ NADH 2 ตัว</b> (ใช้ไป 2 สร้างได้ 4) ${S.lir}</li>
<li><b>ขั้นที่ย้อนกลับไม่ได้มีสามขั้น</b> — hexokinase/glucokinase, PFK-1 และ pyruvate kinase · gluconeogenesis จึงต้องใช้ enzyme คนละชุดเพื่ออ้อมสามขั้นนี้ ${S.fa1}${S.lir}</li>
<li>ขั้นกำหนดอัตราคือ <b>PFK-1</b> ไม่ใช่ hexokinase ${S.fa1}</li>
<li><b>Arsenic</b> แทนที่ phosphate ในขั้น glyceraldehyde-3-phosphate dehydrogenase ทำให้ได้สารที่สลายเองโดยไม่สร้าง ATP — glycolysis ยังเดินต่อแต่ไม่ได้พลังงาน ${S.lir}</li></ul>`});

SEC.push({id:"hkgk",k:"b",t:"Hexokinase vs glucokinase",drugs:"",act:[],leg:[],
draw:()=>tbl(["","Hexokinase","Glucokinase"],[
 ["อยู่ที่ไหน","เนื้อเยื่อเกือบทั้งหมด","ตับและเบตาเซลล์ของ pancreas"],
 ["Km","ต่ำ (จับ glucose แน่น)","สูง (จับหลวม)"],
 ["Vmax","ต่ำ","สูง"],
 ["ถูกเหนี่ยวนำด้วย insulin","ไม่","ใช่"],
 ["ถูกยับยั้งด้วย G6P","ใช่","ไม่ (ถูกยับยั้งด้วย fructose-6-P ผ่าน protein ควบคุม)"]]),
notes:()=>`<ul>
<li>Km ต่ำแปลว่า <b>ทำงานเต็มที่แม้น้ำตาลในเลือดต่ำ</b> — hexokinase จึงรับประกันว่าเนื้อเยื่อทั่วไปได้ glucose ใช้เสมอ ${S.lir}</li>
<li>Km สูงของ glucokinase แปลว่า <b>ตับจะเก็บ glucose ก็ต่อเมื่อน้ำตาลสูง</b> คือหลังมื้ออาหาร ทำให้ตับเป็นกันชนของน้ำตาลหลังกิน ${S.lir}</li>
<li>ในเบตาเซลล์ glucokinase ทำหน้าที่เป็น <b>ตัวรับรู้ระดับ glucose</b> ที่กำหนดว่าจะหลั่ง insulin เมื่อใด · mutation ที่ลดการทำงานทำให้เกิดเบาหวานชนิด MODY ${S.lir}${S.x}</li></ul>`});

SEC.push({id:"glycoreg",k:"b",t:"Glycolysis regulation & fructose-2,6-BP",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* One bifunctional enzyme, two states. Putting the fed and the fasting cell side by side is
    the point: the same molecule reads the hormone and sets the direction. */
 `<rect class="box bl" x="20" y="24" width="288" height="268" rx="14"/>
  ${T(164,52,"Fed — insulin",{c:"h"})}
  ${T(164,88,"PFK-2 active",{c:"bh"})}${arr("M164,98 L164,126")}
  ${T(164,146,"fructose-2,6-BP high",{c:"bh"})}${arr("M164,156 L164,184")}
  ${T(164,204,"PFK-1 accelerates",{c:"bh"})}${arr("M164,214 L164,242")}
  ${T(164,264,"glycolysis runs",{c:"h"})}
  <rect class="box ar" x="332" y="24" width="288" height="268" rx="14"/>
  ${T(476,52,"Fasting — glucagon",{c:"h"})}
  ${T(476,88,"PKA adds phosphate",{c:"bh"})}${arr("M476,98 L476,126")}
  ${T(476,146,"FBPase-2 active",{c:"bh"})}${arr("M476,156 L476,184")}
  ${T(476,204,"fructose-2,6-BP low",{c:"bh"})}${arr("M476,214 L476,242")}
  ${T(476,264,"gluconeogenesis runs",{c:"h"})}
  ${T(320,318,"PFK-1: ⊕ AMP and fructose-2,6-BP · ⊝ ATP and citrate",{c:"s"})}`,
 "0 0 640 332"),
notes:()=>`<ul>
<li><b>PFK-2 และ FBPase-2 เป็น protein ตัวเดียวกัน</b> ที่มีสองหน้าที่ · กลูคากอนกระตุ้น PKA ให้เติม phosphate ซึ่งปิดด้าน PFK-2 และเปิดด้าน FBPase-2 พร้อมกัน ${S.lir}</li>
<li>ผลคือ fructose-2,6-BP ลดลง จึงหยุดเร่ง PFK-1 และหยุดยับยั้ง fructose-1,6-bisphosphatase ไปพร้อมกัน — <b>สวิตช์ตัวเดียวสลับทิศทางทั้งสองเส้นทาง</b> ${S.lir}</li>
<li><b>Citrate</b> ยับยั้ง PFK-1 เพราะเป็นสัญญาณว่า TCA เต็มแล้ว และ citrate ที่ล้นออกมาใน cytosol ยังไปกระตุ้นการสร้าง fatty acid ต่อ ${S.lir}</li>
<li>ใน erythrocyte การเร่ง glycolysis จะเพิ่ม <b>2,3-BPG</b> ซึ่งลดความชอบออกซิเจนของฮีโมโกลบิน ${S.x}</li></ul>`});

SEC.push({id:"pdh",k:"c",t:"Pyruvate dehydrogenase complex",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* Three enzymes in one complex, each holding its own vitamin. Drawn in a row because the
    acyl group is physically handed along from E1 to E2 to E3. */
 `${T(140,36,"Pyruvate + CoA + NAD⁺",{c:"bh"})}${arr("M140,44 L140,54")}
  <rect class="box ar" x="24" y="56" width="592" height="150" rx="22"/>
  ${T(50,82,"Pyruvate dehydrogenase complex",{a:"start",c:"h"})}
  <rect class="box vn" x="60" y="108" width="160" height="76" rx="14"/>
  ${T(140,134,"E1",{c:"bh"})}${T(140,154,"TPP (B1)",{c:"s"})}${T(140,172,"decarboxylation",{c:"s"})}
  ${arr("M224,146 L236,146")}
  <rect class="box bl" x="240" y="108" width="160" height="76" rx="14"/>
  ${T(320,134,"E2",{c:"bh"})}${T(320,154,"lipoic acid · CoA (B5)",{c:"s"})}${T(320,172,"hands on the acyl group",{c:"s"})}
  ${arr("M404,146 L416,146")}
  <rect class="box gl" x="420" y="108" width="160" height="76" rx="14"/>
  ${T(500,134,"E3",{c:"bh"})}${T(500,154,"FAD (B2) · NAD⁺ (B3)",{c:"s"})}${T(500,172,"re-oxidises lipoamide",{c:"s"})}
  ${arr("M500,210 L500,228")}
  ${T(500,248,"Acetyl-CoA + CO₂ + NADH",{c:"bh"})}${T(500,268,"irreversible",{c:"s"})}
  ${T(150,248,"⊕ ADP, NAD⁺",{c:"s"})}${T(150,268,"⊝ ATP, NADH, acetyl-CoA",{c:"s"})}`,
 "0 0 640 288"),
notes:()=>`<ul>
<li>ขั้นนี้เป็น <b>สะพานที่ย้อนกลับไม่ได้</b> ระหว่าง glycolysis กับ TCA — จึงเป็นเหตุผลว่าทำไมมนุษย์เปลี่ยน fatty acid กลับเป็น glucose ไม่ได้ ${S.lir}${S.x}</li>
<li>Lippincott ระบุว่าคอมเพล็กซ์นี้มี <b>โค enzyme 5 ตัว</b> — E1 ใช้ TPP, E2 ใช้ lipoic acid กับ CoA, E3 ใช้ FAD กับ NAD⁺ ${S.lir}</li>
<li><b>α-ketoglutarate dehydrogenase ใช้โคแฟกเตอร์ชุดเดียวกันทั้งห้าตัว</b> จึงพังพร้อมกันเมื่อขาดไทอามีน ${S.lir}</li>
<li><b>deficiency ของ PDH</b> ที่หน่วย E1 เป็น "สาเหตุทางชีวเคมีที่พบบ่อยที่สุดของ congenital lactic acidosis" — pyruvate คั่งแล้วถูกเปลี่ยนเป็นแลกเตตและอะลานีน ${S.lir}</li>
<li>รักษาด้วยอาหารคีโตเจนิก คือเพิ่มไขมันและ amino acid กลุ่ม ketogenic (ไลซีนและลิวซีน) เพื่อเลี่ยงการต้องผ่านขั้นนี้ ${S.x}</li>
<li><b>สารหนูยับยั้ง lipoic acid</b> จึงกระทบทั้ง PDH และ α-ketoglutarate dehydrogenase ${S.lir}</li></ul>`});

SEC.push({id:"pyrfate",k:"c",t:"Fates of pyruvate · Cori & Cahill",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* Pyruvate is a junction, so it is drawn as one: four roads out of the same place, and the
    one the cell takes depends on oxygen, on energy and on where the nitrogen has to go. */
 `<rect class="box ar" x="252" y="146" width="136" height="40" rx="12"/>${T(320,172,"Pyruvate",{c:"bh"})}
  <rect class="box vn" x="40" y="36" width="170" height="40" rx="12"/>${T(125,62,"Acetyl-CoA",{c:"bh"})}
  ${arr("M276,150 L212,76")}${T(222,110,"PDH",{a:"end",c:"s m"})}
  <rect class="box bl" x="430" y="36" width="180" height="40" rx="12"/>${T(520,62,"Oxaloacetate",{c:"bh"})}
  ${arr("M364,150 L428,76")}${T(406,110,"pyruvate carboxylase (biotin)",{a:"start",c:"s m"})}
  <rect class="box gl" x="40" y="250" width="170" height="40" rx="12"/>${T(125,276,"Lactate",{c:"bh"})}
  ${arr("M276,184 L212,250")}${T(200,224,"LDH · regenerates NAD⁺",{a:"end",c:"s m"})}
  <rect class="box bl" x="430" y="250" width="180" height="40" rx="12"/>${T(520,276,"Alanine",{c:"bh"})}
  ${arr("M364,184 L428,250")}${T(440,224,"ALT · carries nitrogen",{a:"start",c:"s m"})}`,
 "0 0 640 310"),
notes:()=>`<ul>
<li><b>วง Cori</b> — กล้ามเนื้อที่ขาดออกซิเจนสร้างแลกเตต ส่งไปตับเปลี่ยนกลับเป็น glucose · ย้ายภาระการใช้พลังงานไปไว้ที่ตับ โดยสุทธิแล้วตับเสีย ATP ${S.lir}</li>
<li><b>วง Cahill (glucose–alanine)</b> — กล้ามเนื้อเติมหมู่อะมิโนให้ pyruvate กลายเป็นอะลานีน ส่งไปตับ ซึ่งได้ทั้งโครงคาร์บอนไว้สร้าง glucose และไนโตรเจนเข้า urea cycle ${S.lir}</li>
<li><b>Pyruvate carboxylase ใช้ biotin</b> และต้องมี acetyl-CoA เป็นตัวกระตุ้น — acetyl-CoA ที่สูงจึงเป็นสัญญาณว่าพลังงานพอแล้ว ให้เบนไปสร้าง glucose แทน ${S.lir}</li>
<li>erythrocyte ไม่มี mitochondria จึงเหลือปลายทางเดียวคือแลกเตต ${S.x}</li></ul>`});

SEC.push({id:"tca",k:"c",t:"TCA cycle",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["Acetyl-CoA + oxaloacetate → citrate","citrate synthase","vn"],
 ["Citrate → isocitrate","aconitase",""],
 ["Isocitrate → α-ketoglutarate","isocitrate dehydrogenase · ขั้นกำหนดอัตรา · ได้ NADH + CO₂","ar"],
 ["α-KG → succinyl-CoA","α-KG dehydrogenase · โคแฟกเตอร์เหมือน PDH · ได้ NADH + CO₂","ar"],
 ["Succinyl-CoA → succinate","ได้ GTP","gl"],
 ["Succinate → fumarate","succinate dehydrogenase (complex II) · ได้ FADH₂","bl"],
 ["Malate → oxaloacetate","ได้ NADH · ครบรอบ","bl"]]),
notes:()=>`<ul>
<li>ต่อ acetyl-CoA หนึ่งโมเลกุลได้ <b>NADH 3 · FADH₂ 1 · GTP 1 · CO₂ 2</b> ${S.lir}</li>
<li>ขั้นกำหนดอัตราคือ <b>isocitrate dehydrogenase</b> ซึ่ง ADP กระตุ้น ส่วน ATP และ NADH ยับยั้ง ${S.fa1}</li>
<li>TCA เป็นทั้งเส้นทางสลายและเส้นทางสังเคราะห์ — สารตัวกลางถูกดึงออกไปสร้างฮีม amino acid และ glucose จึงต้องมีปฏิกิริยา <b>anaplerotic</b> เติมกลับ โดยเฉพาะ pyruvate carboxylase ${S.lir}</li>
<li><b>Succinate dehydrogenase เป็น enzyme เดียวที่อยู่ทั้งใน TCA และในห่วงโซ่หายใจ</b> (complex II) และเป็นตัวเดียวที่ฝังอยู่ในเยื่อหุ้มชั้นใน ${S.lir}</li></ul>`});

SEC.push({id:"etc",k:"d",t:"Electron transport & oxidative phosphorylation",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["Complex I","NADH → CoQ · สูบโปรตอน","ar"],
 ["Complex II","succinate → CoQ · ไม่สูบโปรตอน","mod"],
 ["Complex III","CoQ → cytochrome c · สูบโปรตอน","ar"],
 ["Complex IV","cytochrome c → O₂ → น้ำ · สูบโปรตอน · มี copper","ar"],
 ["ATP synthase","โปรตอนไหลกลับเข้ามา → สร้าง ATP","gl"]]),
notes:()=>`<ul>
<li>อิเล็กตรอนไหลลงตามศักย์รีดอกซ์ พลังงานที่ได้ถูกใช้ <b>สูบโปรตอนออกนอกเยื่อหุ้มชั้นใน</b> สร้างเกรเดียนต์ แล้ว ATP synthase ก็ใช้เกรเดียนต์นั้นสร้าง ATP ${S.lir}</li>
<li>NADH เข้าที่ complex I จึงได้ ATP มากกว่า FADH₂ ซึ่งเข้าที่ complex II และข้ามจุดสูบโปรตอนจุดแรกไป ${S.lir}</li>
<li><b>Complex IV (cytochrome oxidase) มีอะตอม copper</b> ที่จำเป็นต่อการรีดิวซ์ออกซิเจนเป็นน้ำ ${S.lir}</li>
<li>ขั้นตอนนี้ <b>ต่อเนื่องกันเป็นลูกโซ่</b> — ถ้าตันที่จุดใดจุดหนึ่ง ทุกอย่างที่อยู่ก่อนหน้าจะอยู่ในรูปรีดิวซ์ และ ATP หยุดสร้างทันที ${S.x}</li></ul>`});

SEC.push({id:"etcpois",k:"d",t:"Electron transport poisons & uncouplers",drugs:"",act:[],leg:[],
draw:()=>tbl(["Class","Agent","Acts on"],[
 ["ยับยั้ง complex I","Rotenone, amytal","NADH → CoQ"],
 ["ยับยั้ง complex III","Antimycin A","CoQ → cytochrome c"],
 ["ยับยั้ง complex IV","Cyanide, carbon monoxide, azide","cytochrome oxidase"],
 ["ยับยั้ง ATP synthase","Oligomycin","ช่องโปรตอน"],
 ["Uncoupler","2,4-dinitrophenol, aspirin เกินขนาด, thermogenin","ทำให้โปรตอนรั่วกลับ"]]),
notes:()=>`<ul>
<li><b>ตัวยับยั้ง</b> ทำให้เกรเดียนต์โปรตอนหยุดสร้าง → ทั้งการไหลของอิเล็กตรอนและการสร้าง ATP หยุดพร้อมกัน ${S.lir}</li>
<li><b>Uncoupler ต่างออกไป</b> — 2,4-dinitrophenol เป็นตัวพาโปรตอนที่ละลายในไขมันและแพร่ผ่านเยื่อหุ้มได้เอง ทำให้โปรตอนรั่วกลับโดยไม่ผ่าน ATP synthase ${S.lir}</li>
<li>ผลคือ <b>อิเล็กตรอนไหลเร็วขึ้น ออกซิเจนถูกใช้มากขึ้น แต่ไม่ได้ ATP — พลังงานออกมาเป็นความร้อน</b> จึงเกิดไข้สูงและเหงื่อท่วม ${S.lir}</li>
<li><b>Thermogenin (UCP1)</b> ในไขมันสีน้ำตาลคือ uncoupler ตามธรรมชาติ ใช้สร้างความร้อนให้ทารกแรกเกิด ${S.lir}</li>
<li>แยกจากกันทางคลินิก: ตัวยับยั้งทำให้ <b>ขาดพลังงาน</b> ส่วน uncoupler ทำให้ <b>ตัวร้อนจัด</b> ทั้งที่กินออกซิเจนมากขึ้น ${S.x}</li></ul>`});

const EXTRA=[];

/* ================= Biochemistry — Metabolism 1: regulation, glycolysis, TCA, ETC ================= */
Object.assign(S,{lir:'<b class="sbb lir">LIR</b>',tbbio:'<b class="sbb tbbio">TB</b>',fa1:'<b class="sbb fa">FA1</b>',x:'<b class="sbb gen">Gen</b>'});
Object.assign(GN,{a:"ภาพรวมและการควบคุม",b:"Glycolysis",c:"Pyruvate และ TCA",d:"Oxidative phosphorylation"});

SEC.push({id:"sites",k:"a",t:"Metabolic compartmentation",mm:"เส้นทางอยู่ที่ไหน",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["Mitochondria","β-oxidation · สร้าง acetyl-CoA · TCA cycle · oxidative phosphorylation · ketogenesis","ar"],
 ["Cytoplasm","Glycolysis · HMP shunt · สร้างคอเลสเตอรอล กรดไขมัน โปรตีน และนิวคลีโอไทด์","bl"],
 ["ทั้งสองที่","Heme synthesis · urea cycle · gluconeogenesis","gl"]],
 {foot:"First Aid Step 1 · Metabolic compartmentation"}),
notes:()=>`<ul>
<li>เส้นทางที่ <b>ใช้ออกซิเจนและสร้าง ATP</b> อยู่ใน mitochondria ส่วนเส้นทาง <b>สังเคราะห์</b> ส่วนใหญ่อยู่ใน cytoplasm ${S.fa1}</li>
<li>สามเส้นทางที่ข้ามไปมาระหว่างสองที่คือ <b>heme synthesis, urea cycle, gluconeogenesis</b> ${S.fa1}</li>
<li>เหตุผลที่ข้ามไปมา: ขั้นแรกกับขั้นสุดท้ายของ heme อยู่ใน mitochondria แต่ช่วงกลางอยู่ใน cytosol · urea cycle เริ่มที่ CPS I ใน mitochondria แล้วออกมาจบใน cytosol ${S.lir}</li>
<li>เม็ดเลือดแดงไม่มี mitochondria จึงพึ่ง glycolysis อย่างเดียว และทำ β-oxidation หรือ TCA ไม่ได้เลย ${S.x}</li></ul>`});

SEC.push({id:"ratelim",k:"a",t:"Rate-determining enzymes",mm:"เอนไซม์กำหนดอัตรา",drugs:"",act:[],leg:[],
draw:()=>tbl(["เส้นทาง","เอนไซม์กำหนดอัตรา","ตัวกระตุ้น ⊕ / ตัวยับยั้ง ⊝"],[
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
<li>ตารางนี้คือแกนของทั้งบท — ถ้าจำได้ว่าเอนไซม์ตัวไหนคุมเส้นทางไหน จะตอบคำถามเรื่องการควบคุมได้เกือบหมด ${S.fa1}</li>
<li>สังเกตคู่ตรงข้าม: <b>PFK-1</b> คุม glycolysis ส่วน <b>fructose-1,6-bisphosphatase</b> คุม gluconeogenesis และ <b>fructose-2,6-BP ตัวเดียวกัน</b> กระตุ้นตัวแรกแต่ยับยั้งตัวหลัง จึงสลับทิศทางได้ในขั้นเดียว ${S.lir}</li>
<li><b>CPS I</b> (urea cycle, ใน mitochondria) กับ <b>CPS II</b> (pyrimidine, ใน cytosol) ชื่อคล้ายกันแต่คนละเส้นทางคนละที่ ${S.x}</li>
<li><b>Malonyl-CoA</b> เป็นสารตัวกลางของการสร้างกรดไขมัน และยับยั้ง carnitine acyltransferase I จึงกันไม่ให้สร้างและสลายกรดไขมันพร้อมกัน ${S.lir}</li></ul>`});

SEC.push({id:"carriers",k:"a",t:"Activated carriers & cofactors",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["ATP","หมู่ฟอสเฟต","vn"],
 ["NADH, FADH₂","อิเล็กตรอนสำหรับ ATP (catabolism)","ar"],
 ["NADPH","อิเล็กตรอนสำหรับการสังเคราะห์และต้านอนุมูลอิสระ (anabolism)","bl"],
 ["CoA, lipoamide","หมู่ acyl","gl"],
 ["Biotin","CO₂ (คาร์บอกซิเลชัน)","mod"],
 ["TPP (วิตามิน B1)","aldehyde สำหรับ decarboxylation","mod"],
 ["SAM","หมู่เมทิล","inh"],
 ["Tetrahydrofolate","หมู่คาร์บอนหนึ่งตัว","inh"]]),
notes:()=>`<ul>
<li><b>NADPH กับ NADH ต่างหน้าที่กัน</b> — NADH ส่งอิเล็กตรอนเข้าห่วงโซ่หายใจเพื่อสร้าง ATP ส่วน NADPH ใช้ในการสังเคราะห์ (กรดไขมัน คอเลสเตอรอล) และกำจัดอนุมูลอิสระ ${S.lir}</li>
<li>NADPH มาจาก <b>HMP shunt</b> เป็นหลัก จึงอธิบายว่าทำไมผู้ที่พร่อง G6PD ถึงทนความเครียดจากออกซิเดชันไม่ได้ ${S.lir}</li>
<li><b>เอนไซม์ที่ใช้ biotin</b>: pyruvate carboxylase, acetyl-CoA carboxylase, propionyl-CoA carboxylase ${S.fa1}</li>
<li><b>เอนไซม์ที่ใช้ TPP</b>: pyruvate dehydrogenase, α-ketoglutarate dehydrogenase, branched-chain ketoacid dehydrogenase, transketolase ${S.fa1}${S.lir}</li></ul>`});

SEC.push({id:"glyco",k:"b",t:"Glycolysis",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["Glucose → glucose-6-P","hexokinase / glucokinase · ใช้ ATP · ไม่ย้อนกลับ","ar"],
 ["Fructose-6-P → fructose-1,6-BP","PFK-1 · ใช้ ATP · ไม่ย้อนกลับ · ขั้นกำหนดอัตรา","vn"],
 ["แตกเป็นสองโมเลกุล 3 คาร์บอน","aldolase A → G3P และ DHAP",""],
 ["G3P → 1,3-BPG","glyceraldehyde-3-P dehydrogenase · ได้ NADH","bl"],
 ["1,3-BPG → 3-PG","phosphoglycerate kinase · ได้ ATP","gl"],
 ["PEP → pyruvate","pyruvate kinase · ได้ ATP · ไม่ย้อนกลับ","vn"]]),
notes:()=>`<ul>
<li>ผลสุทธิต่อกลูโคสหนึ่งโมเลกุล: <b>ATP 2 ตัว และ NADH 2 ตัว</b> (ใช้ไป 2 สร้างได้ 4) ${S.lir}</li>
<li><b>ขั้นที่ย้อนกลับไม่ได้มีสามขั้น</b> — hexokinase/glucokinase, PFK-1 และ pyruvate kinase · gluconeogenesis จึงต้องใช้เอนไซม์คนละชุดเพื่ออ้อมสามขั้นนี้ ${S.fa1}${S.lir}</li>
<li>ขั้นกำหนดอัตราคือ <b>PFK-1</b> ไม่ใช่ hexokinase ${S.fa1}</li>
<li><b>Arsenic</b> แทนที่ฟอสเฟตในขั้น glyceraldehyde-3-phosphate dehydrogenase ทำให้ได้สารที่สลายเองโดยไม่สร้าง ATP — glycolysis ยังเดินต่อแต่ไม่ได้พลังงาน ${S.lir}</li></ul>`});

SEC.push({id:"hkgk",k:"b",t:"Hexokinase vs glucokinase",drugs:"",act:[],leg:[],
draw:()=>tbl(["","Hexokinase","Glucokinase"],[
 ["อยู่ที่ไหน","เนื้อเยื่อเกือบทั้งหมด","ตับและเบตาเซลล์ของตับอ่อน"],
 ["Km","ต่ำ (จับกลูโคสแน่น)","สูง (จับหลวม)"],
 ["Vmax","ต่ำ","สูง"],
 ["ถูกเหนี่ยวนำด้วยอินซูลิน","ไม่","ใช่"],
 ["ถูกยับยั้งด้วย G6P","ใช่","ไม่ (ถูกยับยั้งด้วย fructose-6-P ผ่านโปรตีนควบคุม)"]]),
notes:()=>`<ul>
<li>Km ต่ำแปลว่า <b>ทำงานเต็มที่แม้น้ำตาลในเลือดต่ำ</b> — hexokinase จึงรับประกันว่าเนื้อเยื่อทั่วไปได้กลูโคสใช้เสมอ ${S.lir}</li>
<li>Km สูงของ glucokinase แปลว่า <b>ตับจะเก็บกลูโคสก็ต่อเมื่อน้ำตาลสูง</b> คือหลังมื้ออาหาร ทำให้ตับเป็นกันชนของน้ำตาลหลังกิน ${S.lir}</li>
<li>ในเบตาเซลล์ glucokinase ทำหน้าที่เป็น <b>ตัวรับรู้ระดับกลูโคส</b> ที่กำหนดว่าจะหลั่งอินซูลินเมื่อใด · การกลายพันธุ์ที่ลดการทำงานทำให้เกิดเบาหวานชนิด MODY ${S.lir}${S.x}</li></ul>`});

SEC.push({id:"glycoreg",k:"b",t:"Glycolysis regulation & fructose-2,6-BP",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["หลังกินอาหาร — อินซูลินสูง","PFK-2 ทำงาน → fructose-2,6-BP สูง → PFK-1 เร่ง → glycolysis เดิน","bl"],
 ["อดอาหาร — กลูคากอนสูง","PKA เติมฟอสเฟต → FBPase-2 ทำงาน → fructose-2,6-BP ต่ำ → gluconeogenesis เดิน","ar"],
 ["PFK-1 ⊕","AMP · fructose-2,6-bisphosphate","gl"],
 ["PFK-1 ⊝","ATP · citrate (สัญญาณว่าพลังงานพอแล้ว)","vn"]]),
notes:()=>`<ul>
<li><b>PFK-2 และ FBPase-2 เป็นโปรตีนตัวเดียวกัน</b> ที่มีสองหน้าที่ · กลูคากอนกระตุ้น PKA ให้เติมฟอสเฟต ซึ่งปิดด้าน PFK-2 และเปิดด้าน FBPase-2 พร้อมกัน ${S.lir}</li>
<li>ผลคือ fructose-2,6-BP ลดลง จึงหยุดเร่ง PFK-1 และหยุดยับยั้ง fructose-1,6-bisphosphatase ไปพร้อมกัน — <b>สวิตช์ตัวเดียวสลับทิศทางทั้งสองเส้นทาง</b> ${S.lir}</li>
<li><b>Citrate</b> ยับยั้ง PFK-1 เพราะเป็นสัญญาณว่า TCA เต็มแล้ว และ citrate ที่ล้นออกมาใน cytosol ยังไปกระตุ้นการสร้างกรดไขมันต่อ ${S.lir}</li>
<li>ในเม็ดเลือดแดง การเร่ง glycolysis จะเพิ่ม <b>2,3-BPG</b> ซึ่งลดความชอบออกซิเจนของฮีโมโกลบิน ${S.x}</li></ul>`});

SEC.push({id:"pdh",k:"c",t:"Pyruvate dehydrogenase complex",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["ทำอะไร","Pyruvate + CoA + NAD⁺ → acetyl-CoA + CO₂ + NADH · ย้อนกลับไม่ได้","vn"],
 ["E1 — TPP (B1)","decarboxylation","mod"],
 ["E2 — lipoic acid + CoA","ส่งหมู่ acyl","mod"],
 ["E3 — FAD (B2) + NAD⁺ (B3)","รีออกซิไดซ์ lipoamide","mod"],
 ["ต้องการ pantothenate (B5) ด้วย","เป็นส่วนประกอบของ CoA","gl"],
 ["ควบคุมโดย","⊕ ADP, NAD⁺ · ⊝ ATP, NADH, acetyl-CoA","bl"]],{foot:"โคแฟกเตอร์ 5 ตัว: B1 B2 B3 B5 และ lipoic acid"}),
notes:()=>`<ul>
<li>ขั้นนี้เป็น <b>สะพานที่ย้อนกลับไม่ได้</b> ระหว่าง glycolysis กับ TCA — จึงเป็นเหตุผลว่าทำไมมนุษย์เปลี่ยนกรดไขมันกลับเป็นกลูโคสไม่ได้ ${S.lir}${S.x}</li>
<li>Lippincott ระบุว่าคอมเพล็กซ์นี้มี <b>โคเอนไซม์ 5 ตัว</b> — E1 ใช้ TPP, E2 ใช้ lipoic acid กับ CoA, E3 ใช้ FAD กับ NAD⁺ ${S.lir}</li>
<li><b>α-ketoglutarate dehydrogenase ใช้โคแฟกเตอร์ชุดเดียวกันทั้งห้าตัว</b> จึงพังพร้อมกันเมื่อขาดไทอามีน ${S.lir}</li>
<li><b>ภาวะพร่อง PDH</b> ที่หน่วย E1 เป็น "สาเหตุทางชีวเคมีที่พบบ่อยที่สุดของ congenital lactic acidosis" — pyruvate คั่งแล้วถูกเปลี่ยนเป็นแลกเตตและอะลานีน ${S.lir}</li>
<li>รักษาด้วยอาหารคีโตเจนิก คือเพิ่มไขมันและกรดอะมิโนกลุ่ม ketogenic (ไลซีนและลิวซีน) เพื่อเลี่ยงการต้องผ่านขั้นนี้ ${S.x}</li>
<li><b>สารหนูยับยั้ง lipoic acid</b> จึงกระทบทั้ง PDH และ α-ketoglutarate dehydrogenase ${S.lir}</li></ul>`});

SEC.push({id:"pyrfate",k:"c",t:"ปลายทางของ pyruvate · Cori & Cahill",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["→ Acetyl-CoA","pyruvate dehydrogenase · เข้าสู่ TCA เพื่อสร้างพลังงาน","vn"],
 ["→ Oxaloacetate","pyruvate carboxylase (ใช้ biotin) · เติมสารให้ TCA และเริ่ม gluconeogenesis","ar"],
 ["→ Lactate","lactate dehydrogenase · เมื่อขาดออกซิเจน เพื่อรีไซเคิล NAD⁺","bl"],
 ["→ Alanine","ALT · ขนไนโตรเจนจากกล้ามเนื้อไปตับ","gl"]]),
notes:()=>`<ul>
<li><b>วง Cori</b> — กล้ามเนื้อที่ขาดออกซิเจนสร้างแลกเตต ส่งไปตับเปลี่ยนกลับเป็นกลูโคส · ย้ายภาระการใช้พลังงานไปไว้ที่ตับ โดยสุทธิแล้วตับเสีย ATP ${S.lir}</li>
<li><b>วง Cahill (glucose–alanine)</b> — กล้ามเนื้อเติมหมู่อะมิโนให้ pyruvate กลายเป็นอะลานีน ส่งไปตับ ซึ่งได้ทั้งโครงคาร์บอนไว้สร้างกลูโคสและไนโตรเจนเข้า urea cycle ${S.lir}</li>
<li><b>Pyruvate carboxylase ใช้ biotin</b> และต้องมี acetyl-CoA เป็นตัวกระตุ้น — acetyl-CoA ที่สูงจึงเป็นสัญญาณว่าพลังงานพอแล้ว ให้เบนไปสร้างกลูโคสแทน ${S.lir}</li>
<li>เม็ดเลือดแดงไม่มี mitochondria จึงเหลือปลายทางเดียวคือแลกเตต ${S.x}</li></ul>`});

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
<li>TCA เป็นทั้งเส้นทางสลายและเส้นทางสังเคราะห์ — สารตัวกลางถูกดึงออกไปสร้างฮีม กรดอะมิโน และกลูโคส จึงต้องมีปฏิกิริยา <b>anaplerotic</b> เติมกลับ โดยเฉพาะ pyruvate carboxylase ${S.lir}</li>
<li><b>Succinate dehydrogenase เป็นเอนไซม์เดียวที่อยู่ทั้งใน TCA และในห่วงโซ่หายใจ</b> (complex II) และเป็นตัวเดียวที่ฝังอยู่ในเยื่อหุ้มชั้นใน ${S.lir}</li></ul>`});

SEC.push({id:"etc",k:"d",t:"Electron transport & oxidative phosphorylation",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["Complex I","NADH → CoQ · สูบโปรตอน","ar"],
 ["Complex II","succinate → CoQ · ไม่สูบโปรตอน","mod"],
 ["Complex III","CoQ → cytochrome c · สูบโปรตอน","ar"],
 ["Complex IV","cytochrome c → O₂ → น้ำ · สูบโปรตอน · มีทองแดง","ar"],
 ["ATP synthase","โปรตอนไหลกลับเข้ามา → สร้าง ATP","gl"]]),
notes:()=>`<ul>
<li>อิเล็กตรอนไหลลงตามศักย์รีดอกซ์ พลังงานที่ได้ถูกใช้ <b>สูบโปรตอนออกนอกเยื่อหุ้มชั้นใน</b> สร้างเกรเดียนต์ แล้ว ATP synthase ก็ใช้เกรเดียนต์นั้นสร้าง ATP ${S.lir}</li>
<li>NADH เข้าที่ complex I จึงได้ ATP มากกว่า FADH₂ ซึ่งเข้าที่ complex II และข้ามจุดสูบโปรตอนจุดแรกไป ${S.lir}</li>
<li><b>Complex IV (cytochrome oxidase) มีอะตอมทองแดง</b> ที่จำเป็นต่อการรีดิวซ์ออกซิเจนเป็นน้ำ ${S.lir}</li>
<li>ขั้นตอนนี้ <b>ต่อเนื่องกันเป็นลูกโซ่</b> — ถ้าตันที่จุดใดจุดหนึ่ง ทุกอย่างที่อยู่ก่อนหน้าจะอยู่ในรูปรีดิวซ์ และ ATP หยุดสร้างทันที ${S.x}</li></ul>`});

SEC.push({id:"etcpois",k:"d",t:"สารพิษต่อห่วงโซ่หายใจ & uncouplers",drugs:"",act:[],leg:[],
draw:()=>tbl(["กลุ่ม","สาร","ออกฤทธิ์ที่"],[
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

/* ================= Biochemistry — Metabolism 2: amino acids & the urea cycle ================= */
Object.assign(S,{lir:'<b class="sbb lir">LIR</b>',tbbio:'<b class="sbb tbbio">TB</b>',fa1:'<b class="sbb fa">FA1</b>',x:'<b class="sbb gen">Gen</b>'});
Object.assign(GN,{a:"Amino acids & nitrogen",b:"Urea cycle",c:"Aminoacidopathies",d:"Organic acidaemias"});

SEC.push({id:"aa",k:"a",t:"Amino acid classification",mm:"แบ่งกลุ่ม amino acid",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* Position carries the keto/gluco split — including the four that are both, which no list can
    show — and colour carries essentiality, so one picture answers two questions at once. */
 `<circle cx="240" cy="190" r="135" style="fill:color-mix(in srgb,var(--a-vein) 20%,transparent);stroke:color-mix(in srgb,var(--a-vein) 60%,transparent);stroke-width:1.4"/>
  <circle cx="400" cy="190" r="135" style="fill:color-mix(in srgb,var(--a-art) 20%,transparent);stroke:color-mix(in srgb,var(--a-art) 60%,transparent);stroke-width:1.4"/>
  ${T(185,36,"Ketogenic",{c:"h"})}${T(455,36,"Glucogenic",{c:"h"})}
  ${T(185,170,"Leucine",{c:"bh bad"})}${T(185,196,"Lysine",{c:"bh bad"})}
  ${T(320,142,"Isoleucine",{c:"s bad"})}${T(320,172,"Phenylalanine",{c:"s bad"})}${T(320,202,"Threonine",{c:"s bad"})}${T(320,232,"Tryptophan",{c:"s bad"})}
  ${["Met","Val","His","Arg"].map((n,i)=>T(425,135+i*22,n,{c:"s bad"})).join("")}
  ${["Ala","Asn","Asp"].map((n,i)=>T(425,223+i*22,n,{c:"s"})).join("")}
  ${["Cys","Gln","Glu","Gly","Pro","Ser"].map((n,i)=>T(490,135+i*22,n,{c:"s"})).join("")}
  ${T(320,344,"red = essential (His and Arg in growing children)",{c:"s bad"})}`,
 "0 0 640 356"),
notes:()=>`<ul>
<li>Lippincott ระบุ essential amino acid ไว้ว่า <b>phenylalanine, threonine, valine, isoleucine, methionine, tryptophan, leucine, lysine</b> โดย histidine และ arginine จำเป็นในเด็กที่กำลังโต ${S.lir}${S.x}</li>
<li><b>Leucine กับ Lysine เป็น ketogenic ล้วน</b> — เปลี่ยนกลับเป็น glucose ไม่ได้เลย จำง่าย ๆ ว่าขึ้นต้นด้วย L ทั้งคู่ ${S.fa1}${S.x}</li>
<li><b>Arginine และ histidine</b> เป็นด่าง · ส่วน arginine ยังเป็นสารตัวกลางใน urea cycle ด้วย ${S.lir}</li>
<li>ในภาวะขาดอาหาร amino acid กลุ่ม glucogenic คือแหล่งคาร์บอนหลักของ gluconeogenesis ${S.x}</li>
<li><b>Aspartate และ glutamate เป็นกรด</b> — มีประจุลบที่ pH ของร่างกาย · ส่วน arginine, lysine และ histidine เป็นด่าง ${S.lir}</li></ul>`});

SEC.push({id:"nh3",k:"a",t:"Nitrogen transport & ammonia",mm:"ขนไนโตรเจน",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["Transamination","ALT และ AST ย้ายหมู่อะมิโนไปให้ α-ketoglutarate → glutamate","bl"],
 ["Oxidative deamination","glutamate dehydrogenase ปล่อย NH₃ ออกมาใน mitochondria ของตับ","ar"],
 ["Glutamine — the carrier from most tissues","glutamine synthetase จับ NH₃ ไว้ แล้วส่งทางเลือดอย่างปลอดภัย","gl"],
 ["Alanine — the carrier from muscle","วง Cahill ส่งทั้งไนโตรเจนและโครงคาร์บอนไปตับ","mod"],
 ["The liver turns it into urea","ขับออกทางไต","vn"]]),
notes:()=>`<ul>
<li><b>Transamination ไม่ได้กำจัดไนโตรเจน</b> — แค่รวบรวมมาไว้ที่ glutamate · ขั้นที่ปล่อยไนโตรเจนออกจริงคือ oxidative deamination ด้วย glutamate dehydrogenase ${S.lir}</li>
<li>Lippincott ระบุว่าไนโตรเจนจากแอมโมเนียนี้เองที่กลายเป็น <b>ไนโตรเจนตัวหนึ่งของยูเรีย</b> ${S.lir}</li>
<li><b>Glutamine เป็นรูปขนส่งแอมโมเนียที่ไม่เป็นพิษ</b> ในเลือด และเป็น amino acid อิสระที่มีมากที่สุดในร่างกาย ${S.lir}${S.x}</li>
<li>สมองไม่มี urea cycle จึงอาศัย glutamine synthetase ดักแอมโมเนีย — จึงอธิบายว่าทำไมแอมโมเนียสูงถึงทำให้สมองบวมและซึม ${S.x}</li></ul>`});

SEC.push({id:"urea",k:"b",t:"Urea cycle",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["NH₃ + CO₂ → carbamoyl phosphate","CPS I · ใน mitochondria · ขั้นกำหนดอัตรา · ต้องมี N-acetylglutamate","ar"],
 ["+ Ornithine → citrulline","ornithine transcarbamylase (OTC) · ยังอยู่ใน mitochondria","ar"],
 ["Citrulline leaves for the cytosol and meets aspartate","argininosuccinate synthetase","bl"],
 ["Argininosuccinate → arginine + fumarate","argininosuccinate lyase","bl"],
 ["Arginine → urea + ornithine","arginase · ornithine วนกลับเข้า mitochondria","gl"]]),
notes:()=>`<ul>
<li><b>ไนโตรเจนสองตัวของยูเรียมาคนละทาง</b> — ตัวแรกจากแอมโมเนียอิสระผ่าน CPS I ตัวที่สองจาก aspartate ${S.lir}</li>
<li>Lippincott: <b>CPS I ต้องมี N-acetylglutamate เป็นตัวกระตุ้นแบบ allosteric</b> ${S.lir}</li>
<li>N-acetylglutamate สร้างจาก glutamate กับ acetyl-CoA เมื่อกิน protein มาก — เป็นสัญญาณให้ urea cycle เร่งตามปริมาณ protein ที่เข้ามา ${S.x}</li>
<li><b>แยก CPS I กับ CPS II ให้ได้</b> — CPS I อยู่ใน mitochondria ใช้แอมโมเนีย ทำงานใน urea cycle ส่วน CPS II อยู่ใน cytosol ใช้ glutamine ทำงานในการสร้าง pyrimidine ${S.lir}</li>
<li><b>Fumarate</b> ที่ได้จากขั้น lyase เชื่อม urea cycle เข้ากับ TCA โดยตรง ${S.lir}</li></ul>`});

SEC.push({id:"hyperam",k:"b",t:"Hyperammonaemia",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* Ammonia poisons the brain by dragging alpha-ketoglutarate out of the TCA cycle to make
    glutamate and then glutamine: the energy cycle runs down and the astrocyte swells. */
 `<circle class="ld" cx="180" cy="176" r="92" style="stroke-width:2.4;stroke-dasharray:7 5"/>
  ${T(180,180,"TCA cycle",{c:"h"})}${T(180,198,"stalls",{c:"bad"})}
  ${T(180,104,"citrate",{c:"s m"})}${T(142,144,"oxaloacetate",{c:"s m"})}${T(196,242,"succinyl-CoA",{c:"s m"})}
  <rect class="box vn" x="238" y="158" width="104" height="36" rx="10"/>${T(290,181,"α-KG",{c:"bh"})}
  <rect class="box ar" x="372" y="158" width="112" height="36" rx="10"/>${T(428,181,"Glutamate",{c:"bh"})}
  <rect class="box ar" x="514" y="158" width="112" height="36" rx="10"/>${T(570,181,"Glutamine",{c:"bh"})}
  ${arr("M346,176 L368,176")}${arr("M488,176 L510,176")}
  ${T(357,150,"+NH₃",{c:"s"})}${T(499,150,"+NH₃",{c:"s"})}
  ${T(357,214,"GDH",{c:"s m"})}${T(499,214,"GS",{c:"s m"})}
  ${arr("M570,198 L570,236")}
  ${T(552,256,"osmotic load",{c:"s"})}${T(552,276,"astrocyte swelling",{c:"bad"})}`,
 "0 0 640 300"),
notes:()=>`<ul>
<li>กลไกสำคัญคือ <b>การดึง α-ketoglutarate ออกจาก TCA</b> ทำให้วงจรพลังงานของสมองหยุดชะงัก ไม่ใช่พิษของแอมโมเนียโดยตรงอย่างเดียว ${S.x}</li>
<li><b>ภาวะที่ได้มาภายหลัง</b> พบบ่อยกว่าแบบพันธุกรรมมาก — ตับแข็ง ตับวาย หรือ portosystemic shunt ${S.x}</li>
<li><b>Benzoate จับ glycine ส่วน phenylbutyrate จับ glutamine</b> แล้วขับออกทางปัสสาวะ จึงเปิดทางระบายไนโตรเจนที่ไม่ต้องผ่าน urea cycle ${S.x}</li>
<li>ในทารกที่มีแอมโมเนียสูงโดยไม่มีภาวะเลือดเป็นกรด ให้นึกถึงโรคของ urea cycle ก่อน ${S.x}</li>
<li><b>อาการ</b> — ซึม สับสน อาเจียน asterixis และสมองบวม · ทารกจะดูดนมไม่ดีและหายใจเร็ว ${S.x}</li>
<li><b>Lactulose</b> ทำให้ลำไส้เป็นกรด NH₃ จึงกลายเป็น NH₄⁺ ที่ดูดกลับไม่ได้ · <b>rifaximin</b> ลดแบคทีเรียในลำไส้ที่ผลิตแอมโมเนีย · ใช้ร่วมกับการจำกัด protein ${S.x}</li></ul>`});

SEC.push({id:"otc",k:"b",t:"OTC deficiency",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* The lesson is containment: carbamoyl phosphate cannot go forward, so it leaves the
    mitochondrion and is spent on pyrimidines — which is where the orotic acid comes from. */
 `<rect class="box bl" x="20" y="24" width="572" height="292" rx="18"/>
  ${T(46,52,"Cytosol",{a:"start",c:"h"})}
  <rect class="box ar" x="44" y="72" width="344" height="152" rx="44"/>
  ${T(72,102,"Mitochondrion",{a:"start",c:"h"})}
  ${T(150,138,"NH₃ + HCO₃⁻ (CPS I)",{c:"s"})}
  ${arr("M150,146 L150,164")}
  ${T(150,182,"Carbamoyl phosphate",{c:"bh"})}
  ${arr("M226,178 L296,178")}${blk(261,178,"OTC",-14)}
  ${T(340,182,"Citrulline",{c:"bh"})}
  ${arr("M150,192 L150,250")}
  ${T(150,270,"Pyrimidine synthesis",{c:"bh"})}
  ${arr("M222,266 L290,266")}
  ${T(372,270,"Orotic acid in urine",{c:"bh"})}
  ${T(306,342,"blood NH₃ is high here — it is normal in hereditary orotic aciduria",{c:"s"})}`,
 "0 0 640 360"),
notes:()=>`<ul>
<li>เมื่อ OTC เสีย carbamoyl phosphate ที่คั่งจะถูกเบนไปเข้าเส้นทาง pyrimidine ทำให้ <b>orotic acid ออกมาในปัสสาวะ</b> ${S.lir}${S.x}</li>
<li><b>แยกจาก hereditary orotic aciduria</b> — ทั้งสองโรคมี orotic acid ในปัสสาวะเหมือนกัน แต่ Lippincott ชี้ว่าใช้ <b>ระดับแอมโมเนียในเลือด</b> เป็นตัวแยก: สูงใน OTC ปกติใน orotic aciduria ${S.lir}</li>
<li>อีกจุดแยกคือ orotic aciduria แท้จะมี <b>megaloblastic anemia ที่ไม่ตอบสนองต่อ B12 หรือโฟเลต</b> ซึ่ง OTC ไม่มี ${S.x}</li>
<li>เป็น X-linked จึงแสดงอาการรุนแรงในทารกชาย ส่วนหญิงพาหะอาจมีอาการเมื่อกิน protein มากหรือมีความเครียดทางเมแทบอลิก ${S.x}</li>
<li>เป็นโรคที่<b>พบบ่อยที่สุดในกลุ่ม urea cycle</b> ${S.x}</li></ul>`});

SEC.push({id:"aader",k:"c",t:"Amino acid derivatives",drugs:"",act:[],leg:[],
draw:()=>tbl(["Amino acid","Becomes"],[
 ["Phenylalanine → tyrosine","โดปามีน · นอร์เอพิเนฟริน · เอพิเนฟริน · เมลานิน · ไทรอกซิน"],
 ["Tryptophan","เซโรโทนิน → เมลาโทนิน · ไนอะซิน (B3) → NAD⁺"],
 ["Histidine","ฮิสตามีน"],
 ["Glycine","พอร์ไฟริน → ฮีม"],
 ["Glutamate","GABA · กลูตาไทโอน"],
 ["Arginine","ไนตริกออกไซด์ · ยูเรีย · ครีเอทีน"]]),
notes:()=>`<ul>
<li>เส้นทาง <b>phenylalanine → tyrosine</b> เป็นต้นทางของทั้งแคทีโคลามีน เมลานิน และฮอร์โมนไทรอยด์ จึงอธิบายว่าทำไมโรคในเส้นทางนี้ถึงมีอาการได้หลายระบบ ${S.lir}</li>
<li><b>Tryptophan แตกได้สองทาง</b> — ไปเซโรโทนิน หรือไปไนอะซิน · ถ้าดึงไปทางหนึ่งมากก็เหลือไปอีกทางน้อยลง จึงเกิดอาการแบบ pellagra ได้ใน carcinoid syndrome และ Hartnup disease ${S.x}</li>
<li>การสังเคราะห์แคทีโคลามีนต้องใช้ <b>tetrahydrobiopterin (BH4)</b> ตัวเดียวกับที่ phenylalanine hydroxylase ใช้ ${S.lir}</li></ul>`});

SEC.push({id:"pku",k:"c",t:"Phenylketonuria",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* Two different lesions give the same high phenylalanine — the enzyme itself, or the BH4 it
    borrows — and only the first one answers to diet. */
 `<rect class="box vn" x="50" y="58" width="160" height="40" rx="10"/>${T(130,83,"Phenylalanine",{c:"bh"})}
  ${arr("M214,78 L330,78")}${blk(272,78,"PAH",-16)}
  <rect class="box bl" x="352" y="58" width="108" height="40" rx="10"/>${T(406,83,"Tyrosine",{c:"bh"})}
  ${T(406,124,"melanin · catecholamines · T4",{c:"s"})}
  <rect class="box ar" x="206" y="150" width="72" height="32" rx="10"/>${T(242,171,"BH4",{c:"bh"})}
  <rect class="box ar" x="362" y="150" width="72" height="32" rx="10"/>${T(398,171,"BH2",{c:"bh"})}
  ${arr("M282,166 L358,166")}${T(320,144,"oxidised by PAH",{c:"s m"})}
  ${arr("M358,196 Q320,224 284,198")}${blk(320,212,"")}
  ${T(320,244,"dihydropteridine reductase",{c:"bad"})}
  <path class="ld" d="M226,148 L258,98"/>
  ${arr("M130,102 L130,230")}
  ${T(130,250,"Phenylketones in urine",{c:"bh"})}${T(130,268,"musty odour",{c:"s"})}`,
 "0 0 640 288"),
notes:()=>`<ul>
<li>Lippincott: PKU เกิดจาก <b>พร่อง phenylalanine hydroxylase</b> และภาวะ phenylalanine สูงยังเกิดได้จากการพร่อง enzyme ที่สร้างหรือรีดิวซ์โคแฟกเตอร์ของมัน ${S.lir}</li>
<li>ข้อแตกต่างสำคัญ: <b>แบบที่ขาด BH4 จะไม่ดีขึ้นแม้จำกัดอาหาร</b> เพราะ BH4 ยังจำเป็นต่อการสร้างโดปามีนและเซโรโทนินด้วย ต้องให้ BH4 กับสารตั้งต้นของสารสื่อประสาททดแทน ${S.lir}${S.x}</li>
<li><b>ไทโรซีนกลายเป็น essential amino acid</b> ในผู้ป่วย PKU เพราะสร้างเองไม่ได้ ${S.x}</li>
<li><b>Maternal PKU</b> — หญิงตั้งครรภ์ที่ไม่คุมอาหารทำให้ทารกมีศีรษะเล็ก หัวใจพิการ และ intellectual disability แม้ทารกจะไม่ได้เป็นโรค ${S.x}</li>
<li><b>อาการ</b> — intellectual disability ถ้าไม่รักษา · ชัก · ผิวและผมสีจางเพราะ melanin น้อย · กลิ่นตัวและปัสสาวะคล้ายหนู ${S.x}</li>
<li>รักษาโดยจำกัด phenylalanine และเติม tyrosine · ต้อง<b>ระวัง aspartame</b> เพราะมี phenylalanine อยู่ ${S.x}</li></ul>`});

SEC.push({id:"tyr",k:"c",t:"Alkaptonuria & albinism",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* One pathway, three lesions: PKU at the top, albinism at the branch to melanin and
    alkaptonuria near the end — position shows why the three diseases look nothing alike. */
 `<rect class="box vn" x="140" y="36" width="120" height="36" rx="10"/>${T(200,59,"Tyrosine",{c:"bh"})}
  ${arr("M200,76 L200,110")}${T(212,98,"2 steps",{a:"start",c:"s m"})}
  <rect class="box bl" x="120" y="114" width="160" height="36" rx="10"/>${T(200,137,"Homogentisic acid",{c:"bh"})}
  <path class="ld" d="M284,132 L330,132"/>${T(336,136,"darkens urine on standing",{a:"start",c:"s"})}
  ${arr("M200,154 L200,194")}${blk(200,174,"")}
  ${T(214,170,"homogentisate oxidase",{a:"start",c:"bad"})}${T(214,188,"Alkaptonuria · ochronosis",{a:"start",c:"s"})}
  <rect class="box bl" x="116" y="198" width="168" height="36" rx="10"/>${T(200,221,"Maleylacetoacetate",{c:"bh"})}
  ${arr("M200,238 L200,272")}
  <rect class="box gl" x="104" y="276" width="192" height="36" rx="10"/>${T(200,299,"Fumarate + acetoacetate",{c:"bh"})}
  ${arr("M264,54 L352,54")}${blk(308,54,"tyrosinase",-16)}
  <rect class="box ar" x="360" y="36" width="144" height="36" rx="10"/>${T(432,59,"DOPA → Melanin",{c:"bh"})}
  <path class="ld" d="M508,54 L530,54"/>${T(536,58,"Albinism",{a:"start",c:"bad"})}`,
 "0 0 640 330"),
notes:()=>`<ul>
<li>Lippincott จัด alkaptonuria ไว้คู่กับ PKU และ albinism ในฐานะ <b>ความผิดปกติของเส้นทาง phenylalanine และ tyrosine</b> ${S.lir}</li>
<li>Alkaptonuria inheritance แบบ autosomal recessive · อาการที่พ่อแม่สังเกตเห็นก่อนคือผ้าอ้อมเปื้อนสีเข้ม ${S.x}</li>
<li><b>Albinism เพิ่มความเสี่ยง skin cancer</b> เพราะขาดเมลานินที่ป้องกันรังสียูวี ${S.x}</li>
<li>เส้นทางเดียวกันแต่คนละขั้น: PKU อยู่ต้นทาง · albinism อยู่ที่แยกไปสร้างเมลานิน · alkaptonuria อยู่ปลายทางของการสลาย ${S.x}</li>
<li><b>Ochronosis</b> — เม็ดสีสะสมในกระดูกอ่อน ทำให้หูและตาคล้ำ และข้อเสื่อมก่อนวัย ${S.x}</li>
<li>Albinism เกิดได้ทั้งจากการพร่อง <b>tyrosinase</b> และจากความบกพร่องของการขนส่ง tyrosine เข้า melanocyte ${S.x}</li></ul>`});

SEC.push({id:"msud",k:"c",t:"Maple syrup urine disease",drugs:"",act:[],leg:[],
notes:()=>`<ul>
<li>Lippincott ระบุว่าคอมเพล็กซ์นี้ <b>ใช้ thiamine pyrophosphate</b> และการพร่องทำให้กรดคีโตของ amino acid สายกิ่งคั่งออกมาในปัสสาวะ ซึ่ง "กลิ่นหวานของมันเป็นที่มาของชื่อโรค" ${S.lir}</li>
<li>คอมเพล็กซ์นี้ใช้โคแฟกเตอร์ชุดเดียวกับ PDH และ α-ketoglutarate dehydrogenase — <b>ทั้งสามตัวเป็นญาติกัน</b> ${S.lir}</li>
<li><b>Leucine เป็นตัวที่อันตรายที่สุด</b> ต่อระบบประสาท การรักษาจึงเน้นจำกัด leucine เป็นพิเศษ ${S.x}</li>
<li>ผู้ป่วยบางรายตอบสนองต่อ <b>ไทอามีนขนาดสูง</b> ${S.x}</li>
<li><b>enzyme ที่เสียคือ branched-chain α-ketoacid dehydrogenase</b> ทำให้ isoleucine, leucine, valine และกรดคีโตของทั้งสามคั่ง ${S.lir}</li>
<li><b>อาการ</b> — ทารกดูดนมไม่ดี อาเจียน ตัวอ่อนสลับเกร็ง ชัก และสมองเสื่อม · ปัสสาวะกลิ่นหวานคล้ายน้ำเชื่อม ${S.x}</li></ul>`});

SEC.push({id:"hcy",k:"c",t:"Homocystinuria",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* Homocysteine sits at a fork — back to methionine, or on to cysteine. The three forms of the
    disease are three ways of closing one of those two doors. */
 `<rect class="box bl" x="240" y="30" width="160" height="36" rx="10"/>${T(320,53,"Methionine",{c:"bh"})}
  <rect class="box ar" x="240" y="132" width="168" height="36" rx="10"/>${T(324,155,"Homocysteine",{c:"bh"})}
  ${arr("M404,48 L470,48 L470,150 L414,150")}
  ${arr("M236,150 L170,150 L170,48 L236,48")}${blk(170,100,"")}
  ${T(182,94,"methionine synthase",{a:"start",c:"bad"})}${T(182,112,"needs B12 and folate",{a:"start",c:"s"})}
  ${T(478,100,"SAM · methylation",{a:"start",c:"s m"})}
  ${arr("M324,172 L324,214")}${blk(324,193,"")}
  ${T(340,188,"cystathionine β-synthase",{a:"start",c:"bad"})}${T(340,206,"needs B6 — one form answers to pyridoxine",{a:"start",c:"s"})}
  <rect class="box bl" x="236" y="218" width="176" height="36" rx="10"/>${T(324,241,"Cystathionine",{c:"bh"})}
  ${arr("M324,258 L324,294")}
  <rect class="box gl" x="256" y="298" width="136" height="36" rx="10"/>${T(324,321,"Cysteine",{c:"bh"})}
  ${T(320,356,"homocysteine and methionine rise · cysteine falls",{c:"s"})}`,
 "0 0 640 372"),
notes:()=>`<ul>
<li>Lippincott: <b>สาเหตุที่พบบ่อยที่สุดคือความบกพร่องของ cystathionine β-synthase</b> ซึ่งเปลี่ยน homocysteine เป็น cystathionine · ผลคือ homocysteine และ methionine ในเลือดและปัสสาวะสูง ส่วน cysteine ต่ำ ${S.lir}</li>
<li><b>Cysteine กลายเป็น essential amino acid</b> ในผู้ป่วยกลุ่มนี้ ${S.lir}${S.x}</li>
<li><b>แยกจาก Marfan ด้วยทิศทางของเลนส์</b> — homocystinuria เลนส์เคลื่อนลงล่างและเข้าใน ส่วน Marfan เคลื่อนขึ้นบนและออกนอก ${S.x}</li>
<li>ภาวะลิ่มเลือดอุดตันตั้งแต่อายุน้อยเป็นสาเหตุการตายที่สำคัญที่สุดของโรคนี้ ${S.x}</li>
<li>มีสามแบบ — พร่อง <b>cystathionine β-synthase</b> · enzyme ที่จับ B6 ได้ไม่ดีซึ่งตอบสนองต่อ pyridoxine ขนาดสูง · และพร่อง <b>methionine synthase</b> ที่ต้องใช้ B12 ${S.lir}${S.x}</li>
<li><b>อาการ</b> — เลนส์ตาเคลื่อน · รูปร่างสูงผอมแบบ Marfan · ลิ่มเลือดอุดตัน · intellectual disability ${S.x}</li></ul>`});

SEC.push({id:"cystin",k:"c",t:"Cystinuria",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* The defect is a place, not an enzyme: one carrier in the proximal tubule brush border.
    All four amino acids stay in the lumen, but only cystine is too insoluble to stay dissolved. */
 `<rect class="lumen" x="24" y="30" width="592" height="122" rx="12"/>
  ${T(48,56,"Tubular lumen",{a:"start",c:"h"})}
  <rect class="cell" x="24" y="172" width="592" height="92" rx="12"/>
  ${T(48,200,"Proximal tubule cell",{a:"start",c:"h"})}
  ${T(120,74,"COAL — one shared carrier",{c:"s m"})}
  ${T(120,98,"Cystine · Ornithine",{c:"bh"})}${T(120,120,"Arginine · Lysine",{c:"bh"})}
  ${arr("M206,122 L296,150")}
  <g class="tr"><circle cx="320" cy="162" r="19"/></g>${blk(320,162,"")}
  <path class="ld" d="M320,184 L320,198"/>
  ${T(320,216,"rBAT / b⁰,⁺AT",{c:"bh"})}${T(320,238,"carrier missing",{c:"s"})}
  <path class="stone" d="M504,92 L487,121 L453,121 L436,92 L453,63 L487,63Z"/>
  ${T(470,146,"hexagonal cystine crystal",{c:"s"})}
  ${T(320,290,"the other three stay soluble — only cystine makes stones",{c:"s"})}`,
 "0 0 640 306"),
notes:()=>`<ul>
<li>Lippincott อธิบายว่าตัวขนส่งนี้รับผิดชอบการดูดกลับ <b>cystine และ amino acid กลุ่มเบส คือ ornithine, arginine และ lysine</b> โดยย่อว่า "COAL" ${S.lir}</li>
<li>แม้จะเสียการดูดกลับ amino acid สี่ตัว แต่<b>มีอาการจากนิ่วเท่านั้น</b> เพราะร่างกายยังได้ amino acid พอจากการย่อยเปปไทด์ ${S.x}</li>
<li><b>ผลึกหกเหลี่ยม</b> ในปัสสาวะแทบจะยืนยันโรคได้ทันที ${S.x}</li>
<li>เป็นสาเหตุของนิ่วในเด็กที่ต้องนึกถึง เพราะนิ่วส่วนใหญ่ในวัยนี้ไม่ใช่ calcium ${S.x}</li>
<li>รักษาโดยดื่มน้ำมาก ทำให้ปัสสาวะเป็นด่าง และใช้ยาจับ cystine เช่น <b>penicillamine</b> หรือ tiopronin ${S.x}</li></ul>`});

SEC.push({id:"organic",k:"d",t:"Organic acidemia: propionic & methylmalonic",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["Starting material","amino acid VOMIT · fatty acid สายคี่ · cholesterol","bl"],
 ["→ Propionyl-CoA","ถ้าตันตรงนี้ = propionic acidemia","ar"],
 ["Propionyl-CoA carboxylase (biotin)","→ methylmalonyl-CoA","mod"],
 ["Methylmalonyl-CoA mutase (B12)","ถ้าตันตรงนี้ = methylmalonic acidemia","ar"],
 ["→ Succinyl-CoA","เข้าสู่ TCA และใช้สร้าง glucose ได้","gl"]]),
notes:()=>`<ul>
<li>Lippincott: fatty acid สายคี่สลายไปจนเหลือสามคาร์บอนเป็น propionyl-CoA ซึ่ง <b>เปลี่ยนเป็น methylmalonyl-CoA โดยปฏิกิริยาที่ต้องใช้ biotin</b> แล้วจึงเป็น succinyl-CoA ซึ่งเป็นสารตั้งต้นของ gluconeogenesis โดย methylmalonyl-CoA mutase ${S.lir}</li>
<li><b>VOMIT</b> = Valine, Odd-chain fatty acids, Methionine, Isoleucine, Threonine — ทุกตัวมาบรรจบที่ propionyl-CoA ${S.fa1}${S.x}</li>
<li>ทั้งสองโรคมาด้วย <b>ภาวะเลือดเป็นกรดจากช่องว่างประจุลบกว้าง ตับโต อาเจียน และซึม</b> ในช่วงแรกเกิด และแอมโมเนียอาจสูงร่วมด้วย ${S.x}</li>
<li><b>จุดแยกจากโรค urea cycle</b> — organic acidemia มีเลือดเป็นกรด ส่วนโรค urea cycle แอมโมเนียสูงโดยที่ pH ยังปกติ ${S.x}</li>
<li>Methylmalonic acidemia บางรายตอบสนองต่อ <b>B12 ขนาดสูง</b> เพราะเป็นความบกพร่องของการสร้างโคแฟกเตอร์ ไม่ใช่ตัว enzyme ${S.x}</li></ul>`});

const EXTRA=[];

/* ================= General Pathology · Cellular injury (Robbins 10e Ch 2) ================= */
Object.assign(GN,{a:"Adaptation & injury",b:"Cell death",c:"Ischemia & free radicals",d:"Deposits",e:"Mechanisms & aging"});
const pBox=(x,y,w,h,t,sub,c="")=>`<rect class="box ${c}" x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" rx="11"/>`+T(x,y+(sub?-3:5),t,{c:"bh"})+(sub?T(x,y+14,sub,{c:"s"}):"");
const pArw=(x1,y1,x2,y2)=>`<path d="M${x1},${y1} L${x2},${y2}" style="stroke:var(--sb-line);stroke-width:2;fill:none"/>`+`<path d="M${x2},${y2} l-5,-9 l10,0 z" style="fill:var(--sb-line)" transform="rotate(${Math.atan2(y2-y1,x2-x1)*180/Math.PI-90} ${x2} ${y2})"/>`;

/* spectrum: normal → adaptation / injury → death */
function spectrum(){let b="";
 b+=pBox(90,170,130,52,"Normal cell","homeostasis");
 b+=pBox(330,70,170,52,"Adaptation","hypertrophy · hyperplasia","gl")+pBox(330,170,170,52,"Reversible injury","swelling · fatty change","")+pBox(330,270,170,52,"Irreversible injury","membrane · mitochondria ✗","ar");
 b+=pBox(580,220,140,44,"Necrosis","pathologic · inflammation","ar")+pBox(580,320,140,44,"Apoptosis","regulated · no inflammation","vn");
 b+=pArw(156,160,244,80)+pArw(156,170,244,170)+pArw(330,197,330,242)+pArw(416,262,508,224)+pArw(416,280,508,316);
 b+=T(200,108,"stress",{c:"s m"})+T(200,160,"injury",{c:"s m"})+T(344,224,"severe / ต่อเนื่อง",{a:"start",c:"s m"})+T(330,30,"ถ้ารับมือไม่ไหว → injury",{c:"s"});
 return psvg(b,"0 0 680 360")}

SEC.push({id:"response",k:"a",t:"Cellular responses to stress",mm:"Stress responses",drugs:"",act:[],leg:[],draw:spectrum,
notes:()=>`<ul><li>เซลล์ปกติอยู่ในสมดุล (homeostasis) · เจอ stress → <b>adapt</b> · เกินขีดจำกัด → <b>injury</b> ${S.r}</li><li>Injury เบาหรือสั้น → กลับคืนได้ · รุนแรงหรือยาวนาน → ตายแบบ <b>necrosis</b> หรือ <b>apoptosis</b> ${S.r}</li><li>การเปลี่ยนแปลงทาง biochemical เกิดก่อนที่จะเห็นด้วย EM และ LM ตามลำดับ — เช่น MI: เซลล์ตายใน 20–40 นาที แต่ LM เห็นชัดหลังหลายชั่วโมง ${S.r}</li></ul>`});

SEC.push({id:"adapt",k:"a",t:"Cellular adaptations",mm:"Adaptations",drugs:"",act:[],leg:[],
draw:()=>cards([["Hypertrophy","↑ ขนาดเซลล์ (ไม่เพิ่มจำนวน) · cell ที่แบ่งตัวไม่ได้ เช่น cardiac & skeletal muscle","gl"],["Hyperplasia","↑ จำนวนเซลล์ · ต้องแบ่งตัวได้ · physiologic (เต้านมตั้งครรภ์) หรือ pathologic (endometrial hyperplasia, BPH)","gl"],["Atrophy","↓ ขนาด/จำนวน · protein synthesis ↓ · ubiquitin–proteasome ↑ · autophagy ↑","ar"],["Metaplasia","เปลี่ยนชนิดเซลล์แบบหนึ่งไปอีกแบบ ให้ทนต่อ stress ได้ดีกว่า · กลับคืนได้","vn"],["Dysplasia","เซลล์โตผิดปกติ ขาดระเบียบ · ไม่ใช่ adaptation แท้ · อาจนำไปสู่มะเร็ง",""]],{foot:"กลับคืนได้ถ้าเอา stress ออก · ยกเว้น dysplasia ระดับรุนแรงอาจไม่กลับ"}),
notes:()=>`<ul><li>เซลล์ปรับตัวต่อ stress ด้วยการเปลี่ยนขนาด จำนวน หรือชนิด ถ้าเกินขีดจำกัดจะเกิด injury ${S.r}</li>
<li><b>Hypertrophy</b>: กล้ามเนื้อหัวใจในความดันสูง (pathologic) · มดลูกตั้งครรภ์ (hypertrophy + hyperplasia) ${S.r}</li>
<li><b>Hyperplasia</b> จาก hormone/growth factor มากเกิน · endometrial hyperplasia เสี่ยงมะเร็ง แต่ BPH ไม่เพิ่มเสี่ยงมะเร็งต่อมลูกหมาก ${S.r}</li>
<li><b>Atrophy</b>: disuse, denervation, ischemia, ขาดสารอาหาร, ขาด hormone, แรงกด · กลไกคือ ↓ protein synthesis + ↑ ubiquitin–proteasome + autophagy ${S.r}</li>
<li><b>Metaplasia</b>: Barrett esophagus (squamous → columnar), bronchus ในคนสูบบุหรี่ (columnar → squamous), vitamin A deficiency (squamous metaplasia ของ conjunctiva) · เกิดจาก reprogramming ของ stem cell ${S.r}</li>
<li>Metaplasia ที่ stress ยังต่อเนื่อง → dysplasia → carcinoma ได้ ${S.r}</li></ul>`});

SEC.push({id:"injury",k:"a",t:"Reversible vs irreversible cell injury",mm:"Cell injury",drugs:"",act:[],leg:[],
draw:()=>flowD([["Reversible","ATP ↓ → Na⁺/K⁺-ATPase ล้ม → cellular swelling · ER dilation · blebs","gl"],["Reversible (ต่อ)","ribosome หลุด → protein synthesis ↓ · fatty change · glycogen ↓ (anaerobic)",""],["Point of no return","mitochondria ทำงานไม่ได้ถาวร + plasma membrane เสียหาย","ar"],["Irreversible","lysosome rupture · Ca²⁺ ไหลเข้า · nuclear pyknosis → karyorrhexis → karyolysis","vn"]]),
notes:()=>`${tbl(["","Reversible","Irreversible"],[["หลัก","ATP ↓, cell swelling","membrane damage, mitochondrial ATP failure"],["LM","swelling (hydropic change), fatty change, ↑ eosinophilia เล็กน้อย","eosinophilia ↑ (protein denature + RNA ↓), nuclear changes"],["EM","membrane blebs, microvilli หาย, mito บวม, ER ขยาย, myelin figures","amorphous densities ใน mitochondria, membrane ขาด"],["ผลต่อ serum","—","enzyme รั่ว: troponin (หัวใจ), ALT/AST (ตับ), lipase (ตับอ่อน)"]])}${S.r}
<ul><li>สองตัวที่บอกว่า "ไม่กลับแล้ว": <b>mitochondria ทำงานไม่ได้</b> แม้เลือดกลับมา และ <b>membrane เสียหาย</b> ${S.r}</li>
<li>Nuclear changes: <b>pyknosis</b> (หด เข้ม) → <b>karyorrhexis</b> (แตกเป็นชิ้น) → <b>karyolysis</b> (สลายจางหาย) ${S.r}</li></ul>`});

/* apoptosis pathways */
function apopMap(){let b="";
 b+=panel(10,10,700,330,"APOPTOSIS: three ways in → caspase cascade");
 b+=pBox(130,80,200,52,"Intrinsic (mitochondrial)","DNA damage · ขาด survival signal","gl")+pBox(130,160,200,52,"BAX/BAK ↑ · BCL-2 ↓","cytochrome c ออกจาก mito","")+pBox(130,240,200,44,"Apoptosome → caspase-9","","");
 b+=pBox(360,80,190,52,"Extrinsic (death receptor)","FasL–Fas · TNF–TNFR1","vn")+pBox(360,160,190,44,"FADD → caspase-8","","");
 b+=pBox(580,80,190,52,"Perforin / granzyme B","cytotoxic T, NK cells","ar")+pBox(580,160,190,44,"granzyme เข้าเซลล์","กระตุ้น caspase ตรง","");
 b+=pBox(360,300,300,44,"Executioner caspases 3, 6, 7","DNA ถูกตัด · cytoskeleton สลาย · apoptotic bodies","vn");
 b+=pArw(130,106,130,132)+pArw(130,186,130,216)+pArw(360,106,360,136)+pArw(580,106,580,136)+pArw(230,250,270,280)+pArw(360,182,360,276)+pArw(560,182,450,278);
 return psvg(b,"0 0 720 350")}
SEC.push({id:"apoptosis",k:"b",t:"Apoptosis",mm:"Apoptosis",drugs:"",act:[],leg:[],draw:apopMap,
notes:()=>`<ul><li>Regulated cell death ใช้ ATP · เซลล์หด chromatin รวมตัว (pyknosis) → blebbing → <b>apoptotic bodies</b> ถูก macrophage กิน · <b>ไม่มี inflammation</b> · membrane ยังอยู่ครบ ${S.r}</li>
<li>Phosphatidylserine พลิกออกด้านนอก = สัญญาณ "eat me" ${S.r}</li>
<li><b>Intrinsic</b>: ขาด growth factor/hormone, DNA damage, misfolded protein (ER stress) → BH3-only sensors → BAX/BAK เปิดรู mitochondria → cytochrome c ออก · BCL-2, BCL-XL ยับยั้ง ${S.r}</li>
<li><b>Extrinsic</b>: Fas–FasL (กำจัด lymphocyte ที่ทำปฏิกิริยากับตัวเอง — ถ้าบกพร่อง → autoimmune lymphoproliferative syndrome) · TNF ${S.r}</li>
<li>ตัวอย่าง physiologic: embryogenesis, endometrium ลอก, involution, negative selection ใน thymus · pathologic: DNA damage, viral hepatitis (Councilman bodies) ${S.r}</li>
<li>มะเร็งหลายชนิดหนีการตายด้วย ↑ BCL-2 เช่น follicular lymphoma t(14;18) ${S.r}</li></ul>`});

SEC.push({id:"necrosis",k:"b",t:"Necrosis: patterns",mm:"Necrosis",drugs:"",act:[],leg:[],
draw:()=>cards([["Coagulative","ischemia ของอวัยวะแข็ง (ยกเว้นสมอง) · โครงร่างคงอยู่ เซลล์ไร้นิวเคลียส · protein denature","ar"],["Liquefactive","สมอง (infarct), bacterial abscess · enzyme ย่อยจนเหลว · neutrophil","vn"],["Caseous","TB, fungi (Histoplasma) · ขาวยุ่ยคล้ายชีส · granuloma ล้อม",""],["Fat","pancreatitis (enzymatic) · trauma เต้านม (nonenzymatic) · saponification สีขาวชอล์ก",""],["Fibrinoid","vasculitis, malignant hypertension · immune complex + fibrin ในผนังหลอดเลือด · ชมพูสด","gl"],["Gangrenous","แขนขา/ลำไส้ขาดเลือด · dry = coagulative · wet = + infection (liquefactive)",""]]),
notes:()=>`<ul><li>Necrosis = เซลล์ตายจากการบาดเจ็บรุนแรง membrane แตก เนื้อหาในเซลล์รั่ว → <b>inflammation</b> ${S.r}</li>
<li>Coagulative necrosis อาจเห็น "ghost" outline ของเซลล์นานหลายวัน · brain infarct เป็น liquefactive เพราะ lysosomal enzyme มากและ ECM น้อย ${S.r}</li>
<li>Fat necrosis: lipase ปล่อย fatty acid → จับ Ca²⁺ → <b>saponification</b> (เป็น dystrophic calcification แบบหนึ่ง) ${S.r}</li>
<li>Necrotic tissue ที่ไม่ถูกกำจัด → ดึง Ca²⁺ → dystrophic calcification ${S.r}</li></ul>`});

SEC.push({id:"ischemia",k:"c",t:"Ischemia & areas at risk",mm:"Ischemia",drugs:"",act:[],leg:[],
draw:()=>flowD([["O₂ ↓ → oxidative phosphorylation ↓","ATP ↓ ภายในไม่กี่นาที","ar"],["Na⁺/K⁺-ATPase ล้ม","Na⁺ และน้ำเข้า → swelling (reversible)",""],["Anaerobic glycolysis ↑","lactate → pH ↓ → chromatin clumping · glycogen หมด",""],["Ribosome หลุด · protein synthesis ↓","ถ้ายังขาดเลือดต่อ → mito & membrane เสียถาวร","vn"],["Ca²⁺ overload · lysosome แตก","necrosis (และ apoptosis จาก cytochrome c)","ar"]]),
notes:()=>`<h3>บริเวณที่ไวต่อการขาดเลือด</h3>${tbl(["อวัยวะ","บริเวณ"],[["สมอง","ACA/MCA/PCA watershed, hippocampus (CA1), Purkinje cells"],["หัวใจ","subendocardium (LV)"],["ไต","straight segment ของ proximal tubule, thick ascending limb"],["ตับ","zone 3 (centrilobular)"],["ลำไส้ใหญ่","splenic flexure (SMA/IMA watershed), rectosigmoid"]])}${S.x}
<ul><li>Hypoxia (O₂ ↓) ต่างจาก ischemia (เลือดไม่ไป) — ischemia รุนแรงกว่าเพราะขาดทั้ง O₂, glucose และของเสียคั่ง ${S.r}</li>
<li>Neuron ทนขาดเลือดได้ไม่กี่นาที · cardiomyocyte ~20–40 นาที · fibroblast/fat cells ทนได้นานกว่า ${S.r}</li></ul>`});

SEC.push({id:"infarct",k:"c",t:"Infarcts & reperfusion injury",mm:"Infarcts",drugs:"",act:[],leg:[],
draw:()=>cards([["Red (hemorrhagic) infarct","อวัยวะเลือดเลี้ยงสองทางหรือหลวม: ปอด, ตับ, ลำไส้ · venous occlusion (testicular/ovarian torsion) · reperfusion","ar"],["Pale (anemic) infarct","อวัยวะแข็ง เลือดเลี้ยงทางเดียว (end-arterial): หัวใจ, ไต, ม้าม","gl"],["Reperfusion injury","เลือดกลับมา → ROS ใหม่ + Ca²⁺ overload + neutrophil + complement → injury เพิ่ม","vn"]]),
notes:()=>`<ul><li>Infarct มักเป็นรูปลิ่ม (wedge) ฐานอยู่ที่ผิวอวัยวะ ${S.r}</li>
<li>Reperfusion injury: mitochondria เปิด permeability transition pore, ROS จาก leukocyte และเซลล์ที่บาดเจ็บ, IgM จับ antigen ใหม่ในเนื้อเยื่อขาดเลือด → complement ${S.r}</li>
<li>ทางคลินิก: หลัง reperfusion ใน MI ด้วย thrombolysis/PCI อาจเห็น troponin สูงเพิ่มชั่วคราวและ contraction band necrosis ${S.r}</li></ul>`});

function rosMap(){let b="";
 b+=panel(10,10,700,300,"FREE RADICALS: เกิดจากไหน → ทำอะไร → กำจัดอย่างไร");
 b+=T(130,52,"GENERATION",{c:"bh"})+T(360,52,"DAMAGE",{c:"bh"})+T(590,52,"REMOVAL",{c:"bh"});
 [["radiation (H₂O → •OH)",""],["inflammation (NADPH oxidase)",""],["metabolism of drugs/chemicals",""],["Fenton: Fe²⁺ + H₂O₂ → •OH","ar"],["reperfusion",""]].forEach(([t,c],i)=>b+=pBox(130,90+i*46,210,36,t,"",c));
 [["lipid peroxidation → membrane","vn"],["protein oxidation → misfolding","vn"],["DNA strand breaks","vn"]].forEach(([t,c],i)=>b+=pBox(360,110+i*60,200,40,t,"",c));
 [["SOD: O₂•⁻ → H₂O₂","gl"],["catalase: H₂O₂ → H₂O","gl"],["glutathione peroxidase","gl"],["antioxidants: vit A, C, E","gl"]].forEach(([t,c],i)=>b+=pBox(590,96+i*50,200,38,t,"",c));
 return psvg(b,"0 0 720 320")}
SEC.push({id:"ros",k:"c",t:"Free radical injury",mm:"Free radicals",drugs:"",act:[],leg:[],draw:rosMap,
notes:()=>`<ul><li>Free radical = โมเลกุลที่มี electron คู่ไม่ครบ ไวต่อการทำปฏิกิริยา และก่อ chain reaction ${S.r}</li>
<li><b>Hydroxyl radical (•OH)</b> ทำลายที่สุด · Fe²⁺ เร่ง Fenton reaction จึงเกี่ยวกับ hemochromatosis ${S.r}</li>
<li>Oxidative stress เกี่ยวกับ aging, ischemia-reperfusion, chemical injury, inflammation, มะเร็ง และโรคเสื่อมของระบบประสาท ${S.r}</li>
<li>Retinopathy of prematurity และ bronchopulmonary dysplasia เกิดจาก O₂ สูงในทารก ${S.x}</li></ul>`});

SEC.push({id:"radiation",k:"c",t:"Ionizing radiation injury",mm:"Radiation",drugs:"",act:[],leg:[],
draw:()=>cards([["กลไก","DNA double-strand break โดยตรง + •OH จาก radiolysis ของน้ำ","vn"],["เซลล์ที่ไวที่สุด","แบ่งตัวเร็ว: bone marrow, GI epithelium, gonads, skin",""],["Acute radiation syndrome","nausea, vomiting, diarrhea, cytopenia, ผิวหนังเสียหาย","ar"],["Late effects","fibrosis, vascular damage (endarteritis), มะเร็ง (leukemia, thyroid)",""]]),
notes:()=>`<ul><li>ผลรังสีขึ้นกับ dose, อัตราการได้รับ และพื้นที่ที่ได้รับ ${S.x}</li><li>Radiation therapy อาศัยการที่เซลล์มะเร็งแบ่งตัวเร็วและ DNA repair บกพร่อง · O₂ เพิ่มความไวต่อรังสี (hypoxic tumor ดื้อกว่า) ${S.x}</li><li>Late radiation fibrosis เช่น pneumonitis หลังฉายรังสีทรวงอก ${S.x}</li></ul>`});

SEC.push({id:"calcif",k:"d",t:"Pathologic calcification",mm:"Calcification",drugs:"",act:[],leg:[],
draw:()=>cards([["Dystrophic","Ca²⁺ ในเลือดปกติ · ลงในเนื้อเยื่อที่ตาย/เสียหาย · เฉพาะที่","ar"],["ตัวอย่าง dystrophic","atheroma, ลิ้นหัวใจเสื่อม (aortic stenosis), TB granuloma, fat necrosis, psammoma bodies",""],["Metastatic","Ca²⁺ และ/หรือ PO₄ ในเลือดสูง · ลงในเนื้อเยื่อปกติ · กระจาย","vn"],["ตัวอย่าง metastatic","hyperparathyroidism, CKD (PO₄ ↑), vitamin D excess, bone destruction · ชอบลงปอด, ไต, gastric mucosa, หลอดเลือด",""]]),
notes:()=>`<ul><li>ย้อม H&E เป็นสีม่วงน้ำเงิน · ย้อม <b>von Kossa</b> หรือ alizarin red ${S.x}</li>
<li><b>Psammoma bodies</b> = dystrophic calcification แบบชั้นๆ: papillary thyroid carcinoma, serous ovarian carcinoma, meningioma, mesothelioma ${S.x}</li>
<li>Metastatic calcification ชอบเนื้อเยื่อที่ขับกรด (เกิดภาวะด่างภายใน) เช่น gastric mucosa, ไต, ปอด ${S.r}</li></ul>`});

SEC.push({id:"accum",k:"d",t:"Intracellular accumulations & pigments",mm:"Accumulations",drugs:"",act:[],leg:[],
draw:()=>cards([["Fatty change (steatosis)","triglyceride ในเซลล์ตับ · alcohol, obesity, DM, protein malnutrition",""],["Cholesterol","foam cells ใน atherosclerosis, xanthoma",""],["Protein","hyaline droplets ใน tubule (proteinuria), Russell bodies ใน plasma cell",""],["Lipofuscin","wear-and-tear pigment สีเหลืองน้ำตาล · lipid peroxidation · หัวใจ ตับ สมอง ผู้สูงอายุ","gl"],["Hemosiderin","Fe สะสม · Prussian blue · hemorrhage, hemochromatosis","ar"],["Melanin · carbon","melanocytes · anthracosis ในปอดคนเมือง",""]]),
notes:()=>`<ul><li>สะสมได้จาก: สร้างมาก/กำจัดช้า, พับผิด, ขาด enzyme (storage disease), สิ่งย่อยไม่ได้ ${S.r}</li><li>Lipofuscin บ่งถึง free radical injury ในอดีต ไม่ได้ทำร้ายเซลล์เอง ${S.r}</li><li>Hyaline = ลักษณะชมพูใสบน H&E (ไม่ใช่สารชนิดเดียว) ${S.r}</li></ul>`});

SEC.push({id:"amyloid",k:"d",t:"Amyloidosis",mm:"Amyloidosis",drugs:"",act:[],leg:[],
draw:()=>cards([["AL (primary)","Ig light chain · plasma cell dyscrasia (myeloma) · หัวใจ ไต ลิ้นโต · periorbital purpura","vn"],["AA (secondary)","serum amyloid A · โรคอักเสบเรื้อรัง (RA, IBD, TB, FMF) · ไต ตับ ม้าม","ar"],["ATTR","transthyretin · wild-type (ผู้สูงอายุ, หัวใจ) หรือ mutant (neuropathy, cardiomyopathy)",""],["Aβ2-microglobulin","dialysis ระยะยาว · carpal tunnel, ข้อ",""],["Localized","Aβ (Alzheimer) · amylin (T2DM islets) · calcitonin (medullary thyroid CA) · ANP (atria)","gl"]]),
notes:()=>`<ul><li>Protein พับผิดเป็น <b>β-pleated sheet</b> fibril สะสมนอกเซลล์ ${S.x}</li><li>ย้อม <b>Congo red</b> → apple-green birefringence ใต้ polarized light ${S.x}</li><li>อาการเด่น: nephrotic syndrome, restrictive cardiomyopathy (low voltage ECG), hepatosplenomegaly, macroglossia, neuropathy ${S.x}</li><li>วินิจฉัยด้วย biopsy (abdominal fat pad, rectum หรืออวัยวะที่เป็น) ${S.x}</li></ul>`});

SEC.push({id:"mech",k:"e",t:"Mechanisms of cell injury",mm:"Mechanisms",drugs:"",act:[],leg:[],
draw:()=>cards([["ATP depletion","Na⁺ pump ล้ม → swelling · glycolysis → lactate","ar"],["Mitochondrial damage","ATP ↓ · ROS · permeability transition pore · cytochrome c → apoptosis","vn"],["Ca²⁺ influx","activate phospholipase, protease, endonuclease, ATPase","vn"],["Membrane damage","plasma, lysosomal, mitochondrial membrane → necrosis",""],["DNA damage · misfolded proteins","p53 · unfolded protein response (ER stress) → apoptosis","gl"]]),
notes:()=>`<ul><li>ผลของ injury ขึ้นกับชนิด ระยะเวลา ความรุนแรง และสภาพเซลล์ (เช่น glycogen สำรอง, nutrition) ${S.r}</li>
<li><b>Unfolded protein response</b>: chaperone ↑, translation ↓ · ถ้ารับไม่ไหว → apoptosis · เกี่ยวกับ CF, α1-antitrypsin deficiency, neurodegeneration ${S.r}</li>
<li>Chemical injury: ตรง (เช่น HgCl₂ จับ SH group) หรือผ่าน metabolite (เช่น CCl₄ → free radical ผ่าน CYP450 ในตับ) ${S.r}</li></ul>`});

SEC.push({id:"otherdeath",k:"e",t:"Necroptosis, pyroptosis, ferroptosis & autophagy",mm:"Other death pathways",drugs:"",act:[],leg:[],
draw:()=>cards([["Necroptosis","TNFR1 หรือ viral sensor → RIPK1–RIPK3 → MLKL เจาะรู membrane · caspase-independent · คล้าย necrosis","vn"],["Pyroptosis","microbe → inflammasome → caspase-1 → IL-1β ↑ + cell death","ar"],["Ferroptosis","Fe-dependent lipid peroxidation · glutathione peroxidase 4 ล้ม",""],["Autophagy","autophagosome + lysosome ย่อยส่วนของเซลล์เอง · อยู่รอดตอนอดอาหาร","gl"]]),
notes:()=>`<ul><li>Necroptosis = programmed เหมือน apoptosis แต่หน้าตาและ inflammation เหมือน necrosis ${S.r}</li><li>Autophagy ผิดปกติเกี่ยวกับมะเร็ง, IBD (ATG16L1 ใน Crohn), โรคเสื่อมของสมอง ${S.r}</li></ul>`});

SEC.push({id:"aging",k:"e",t:"Cellular aging",mm:"Aging",drugs:"",act:[],leg:[],
draw:()=>cards([["DNA damage สะสม","DNA repair ลดลง · Werner syndrome (helicase defect) แก่ก่อนวัย","ar"],["Replicative senescence","telomere สั้นลงทุกการแบ่ง · stem cell & cancer ใช้ telomerase",""],["Protein homeostasis เสีย","chaperone & proteasome ทำงานลดลง → misfolded protein สะสม",""],["Nutrient sensing","IGF-1 signaling ↓ และ sirtuins ↑ จาก caloric restriction เกี่ยวกับอายุยืนในสัตว์ทดลอง","gl"]]),
notes:()=>`<ul><li>ความแก่เกิดจากหลายกลไกร่วมกัน: ความเสียหายสะสม + แบ่งตัวได้น้อยลง + ซ่อมแซมได้ช้าลง ${S.r}</li><li>Senescent cells หลั่ง inflammatory mediators (SASP) → inflammaging ${S.x}</li></ul>`});

const EXTRA=["mech","otherdeath","aging","accum"];

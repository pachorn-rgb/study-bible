/* ================= Gastrointestinal pharmacology ================= */
function giMap(){let b="";const row=(x,y,lab,key)=>glow(x,y,key)+rec(x,y,"",true)+T(x+16,y+4,lab,{a:"start",c:"s"});
 b+=panel(10,10,360,250,"PARIETAL CELL & MUCOSA");
 b+=row(36,72,"H₂ (histamine)","h2")+row(36,110,"M₃ (ACh)","m3")+row(36,148,"CCK₂ (gastrin)","g")+row(36,186,"EP₃ (PGE₂)","ep3");
 b+=nbh(270,128,128,30,"H⁺/K⁺-ATPase","proton pump","ppi","cellb");
 b+=pill(232,72,"H₂ blockers","bl","h2")+pill(270,170,"PPIs (-prazole)","inh","ppi")+pill(222,206,"Misoprostol","ag","ep3")+pill(190,240,"Antacids · Bismuth · Sucralfate","mod","muc");
 if(on("muc"))b+=`<rect class="hring" x="20" y="222" width="340" height="34" rx="10"/>`;
 b+=panel(380,10,370,250,"VOMITING: CTZ · vestibular · gut");
 b+=row(406,72,"5-HT₃","ht3")+row(406,110,"D₂","d2")+row(406,148,"NK₁ (substance P)","nk1")+row(406,186,"H₁ · M₁ (vestibular)","vest")+row(406,224,"CB₁","cb1");
 b+=pill(640,72,"Ondansetron","bl","ht3")+pill(626,110,"Metoclopramide · Prochlorperazine","bl","d2")+pill(640,148,"Aprepitant","bl","nk1")+pill(640,186,"Meclizine · Scopolamine","bl","vest")+pill(640,224,"Dronabinol","ag","cb1");
 b+=panel(10,270,740,200,"INTESTINE");
 b+=row(36,314,"μ-opioid (motility)","mu")+row(36,352,"SSTR","sst")+row(36,390,"5-HT₄","ht4")+row(36,428,"Colonic mucosa","asa");
 b+=pill(260,314,"Loperamide · Diphenoxylate","ag","mu")+pill(260,352,"Octreotide","ag","sst")+pill(260,390,"Prucalopride","ag","ht4")+pill(260,428,"Sulfasalazine · Mesalamine","mod","asa");
 b+=row(410,314,"ClC-2 · GC-C (secretion)","secr")+row(410,352,"NHE3","nhe3")+row(410,390,"Lumen: lipase · water","lum")+row(410,428,"α4β7 integrin","a4b7");
 b+=pill(664,314,"Lubiprostone · Linaclotide","ag","secr")+pill(650,352,"Tenapanor","inh","nhe3")+pill(650,390,"Orlistat · Laxatives","mod","lum")+pill(650,428,"Vedolizumab","mab","a4b7");
 return psvg(b,"0 0 760 480")}
const GM=MAPOF(giMap),MT=[["all","Show all drugs"]];

Object.assign(GN,{a:"Acid suppression & mucosal protection",b:"GI hormones",c:"Inflammatory bowel disease",d:"Diarrhea & vomiting",e:"Constipation & obesity",f:"Treating GI disease"});

SEC.push({id:"gimap",k:"a",t:"GI drug target map",mm:"GI drug map",drugs:"",act:[],tools:MT,leg:["bl","inh","ag","mod","mab"],draw:GM(["h2","ppi","ep3","muc","ht3","d2","nk1","vest","cb1","mu","sst","ht4","asa","secr","nhe3","lum","a4b7"]),
notes:()=>`<h3>การหลั่งกรด</h3><ul><li>Histamine (H₂, cAMP), ACh (M₃) และ gastrin (CCK₂, Ca²⁺) กระตุ้น parietal cell · PGE₂ (EP₃) ยับยั้ง · ทางสุดท้ายคือ <b>H⁺/K⁺-ATPase</b> ${S.k}</li><li>PPI บล็อกทางสุดท้ายจึงลดกรดได้มากที่สุดทั้งจากทุกตัวกระตุ้น ${S.k}</li></ul>
 <h3>การอาเจียน</h3><ul><li>CTZ (area postrema) รับ 5-HT₃, D₂, NK₁ · vestibular ผ่าน H₁, M₁ · vagal afferent จากลำไส้ผ่าน 5-HT₃ ${S.k}</li></ul>`});

SEC.push({id:"acid",k:"a",t:"H₂ blockers & proton pump inhibitors",mm:"H₂ blockers · PPIs",drugs:"famotidine · cimetidine · omeprazole · pantoprazole · esomeprazole",act:["bl","inh"],tools:MT,leg:["bl","inh"],draw:GM(["h2","ppi"]),
notes:()=>`<h3>H₂ blockers (-tidine)</h3><ul><li>Competitive antagonist ที่ H₂ → ลดกรดโดยเฉพาะกลางคืน ${S.k}</li><li><b>Cimetidine</b>: CYP inhibitor แรง, antiandrogen (gynecomastia), ผ่าน BBB (สับสน) และรก · ลดการหลั่ง creatinine ที่ไต ${S.k}</li><li>ปรับขนาดในไตเสื่อม ${S.k}</li></ul>
 <h3>PPIs (-prazole)</h3><ul><li>Prodrug ถูกกระตุ้นในกรด → <b>จับ H⁺/K⁺-ATPase แบบ irreversible</b> ${S.k}</li><li>กิน <b>30–60 นาทีก่อนอาหารเช้า</b> ${S.p}</li><li>ใช้: GERD, PUD, H. pylori, Zollinger-Ellison, กัน NSAID ulcer, stress ulcer ${S.k}</li></ul>
 <h3>ADR ระยะยาว</h3><ul><li><b>C. difficile</b>, pneumonia · <b>hypomagnesemia</b> · ดูดซึม B12, Fe, Ca ลด → <b>fracture</b> · AIN ${S.k}</li><li>Omeprazole ลดการกระตุ้น clopidogrel (CYP2C19) ${S.k}</li></ul>`});

SEC.push({id:"mucosal",k:"a",t:"Antacids, bismuth, sucralfate & misoprostol",mm:"Antacids · mucosal protectants",drugs:"aluminum hydroxide · magnesium hydroxide · calcium carbonate · bismuth · sucralfate · misoprostol",act:["mod","ag"],tools:MT,leg:["mod","ag"],draw:GM(["muc","ep3"]),
notes:()=>`<h3>Antacids</h3>${tbl(["ยา","ADR"],[["Aluminum hydroxide","<b>ท้องผูก</b>, hypophosphatemia, osteodystrophy, Al สะสมในไตวาย"],["Magnesium hydroxide","<b>ท้องเสีย</b>, hypermagnesemia (ไตวาย)"],["Calcium carbonate","hypercalcemia, milk-alkali syndrome, acid rebound"]])}${S.k}
 <ul><li>ทุกตัวรบกวนการดูดซึมยาอื่น (tetracycline, fluoroquinolone, iron) · อาจทำให้ hypokalemia ${S.k}</li></ul>
 <h3>Mucosal protectants</h3><ul><li><b>Bismuth subsalicylate</b>: เคลือบแผล ฆ่า H. pylori · ลิ้น/อุจจาระดำ ${S.k}</li><li><b>Sucralfate</b>: เกาะฐานแผลในสภาวะกรด → ไม่ควรให้พร้อมยาลดกรด · ท้องผูก ${S.k}</li><li><b>Misoprostol</b> (PGE₁ analog): ↑ mucus/HCO₃⁻, ↓ กรด · กัน NSAID ulcer · ท้องเสีย · <b>ห้ามในครรภ์</b> (abortifacient; ใช้ induce labor) ${S.k}</li></ul>`});

SEC.push({id:"octreotide",k:"b",t:"Octreotide",mm:"Octreotide",drugs:"octreotide · lanreotide",act:["ag"],tools:MT,leg:["ag"],draw:GM(["sst"]),
notes:()=>`<ul><li>Somatostatin analog (ออกฤทธิ์นานกว่า) → ยับยั้งการหลั่ง GH, insulin, glucagon, gastrin, VIP, serotonin ${S.k}</li><li>ใช้: <b>acute variceal bleeding</b>, acromegaly, <b>carcinoid syndrome</b>, VIPoma, glucagonoma, sulfonylurea overdose (hypoglycemia) ${S.k}</li><li>ADR: คลื่นไส้ ปวดท้อง <b>steatorrhea</b> · <b>gallstones</b> (CCK ↓) · hypo/hyperglycemia · bradycardia ${S.k}</li></ul>`});

SEC.push({id:"ibd",k:"c",t:"Sulfasalazine & IBD therapy",mm:"IBD drugs",drugs:"sulfasalazine · mesalamine · budesonide · azathioprine · infliximab · vedolizumab · ustekinumab",act:["mod","mab","st"],tools:MT,leg:["mod","mab"],draw:GM(["asa","a4b7"]),
notes:()=>`<h3>Aminosalicylates</h3><ul><li><b>Sulfasalazine</b> = sulfapyridine + 5-ASA เชื่อมด้วย azo bond → แบคทีเรียในลำไส้ใหญ่ตัด → 5-ASA ออกฤทธิ์เฉพาะที่ ${S.k}</li><li>ADR: (จาก sulfapyridine) คลื่นไส้ ปวดหัว <b>oligospermia</b> (กลับได้), sulfa allergy, hemolysis ใน G6PD, ดูดซึม folate ลด ${S.k}</li><li>Mesalamine, balsalazide, olsalazine: ไม่มี sulfa · ใช้ UC mild–moderate ${S.k}</li></ul>
 <h3>Steroid & immunomodulators</h3><ul><li>Prednisone ระยะสั้นตอน flare · <b>budesonide</b> (first-pass สูง systemic น้อย) ${S.k}</li><li>Azathioprine/6-MP, methotrexate สำหรับ maintenance ${S.k}</li></ul>
 <h3>Biologics</h3><ul><li>Anti-TNF (infliximab, adalimumab) · <b>vedolizumab</b> (α4β7 → gut-selective, PML น้อย) · ustekinumab (IL-12/23) · tofacitinib (UC) ${S.k}</li><li>ตรวจ TB, HBV ก่อนเริ่ม ${S.p}</li></ul>`});

SEC.push({id:"antidiar",k:"d",t:"Loperamide, diphenoxylate & antidiarrheals",mm:"Antidiarrheals",drugs:"loperamide · diphenoxylate/atropine · bismuth subsalicylate · rifaximin",act:["ag","mod"],tools:MT,leg:["ag"],draw:GM(["mu"]),
notes:()=>`<ul><li><b>Loperamide</b>: μ agonist ส่วนปลาย (P-gp กันไม่ให้เข้า CNS) → ลด peristalsis · ขนาดสูงมาก: QT ยาว, arrhythmia ${S.k}</li><li><b>Diphenoxylate</b> + atropine ปริมาณน้อย (กันใช้ผิด) ${S.k}</li><li>ห้ามใน bloody diarrhea / ไข้สูง (dysentery) · C. difficile ${S.k}</li><li>Bismuth subsalicylate: traveler's diarrhea ${S.k}</li><li>Rifaximin (ไม่ดูดซึม): traveler's diarrhea, IBS-D, hepatic encephalopathy ${S.k}${S.p}</li></ul>`});

SEC.push({id:"antiemetic",k:"d",t:"Antiemetics",mm:"Antiemetics",drugs:"ondansetron · granisetron · metoclopramide · prochlorperazine · aprepitant · dexamethasone · meclizine · scopolamine",act:["bl","ag"],tools:MT,leg:["bl","ag"],draw:GM(["ht3","d2","nk1","vest","cb1"]),
notes:()=>`${tbl(["ยา","target","ใช้","ADR"],[["Ondansetron, granisetron","5-HT₃","CINV, post-op, gastroenteritis","ปวดหัว ท้องผูก <b>QT ยาว</b>, serotonin syndrome"],["Metoclopramide","D₂ antagonist + 5-HT₄ (prokinetic)","<b>gastroparesis</b>, N/V","<b>EPS, tardive dyskinesia</b>, prolactin ↑ · ห้ามใน bowel obstruction, Parkinson"],["Prochlorperazine, promethazine","D₂ (+H₁)","N/V ทั่วไป","EPS, sedation"],["Aprepitant, fosaprepitant","NK₁","CINV (ระยะ delayed)","CYP3A4 interaction"],["Dexamethasone","—","ใช้ร่วมใน CINV",""],["Meclizine, scopolamine (patch)","H₁, M₁","motion sickness, vertigo","anticholinergic"],["Dronabinol","CB₁ agonist","CINV, เบื่ออาหารใน AIDS","psychotropic"]])}${S.k}`});

SEC.push({id:"laxative",k:"e",t:"Anticonstipation drugs",mm:"Laxatives · secretagogues",drugs:"psyllium · polyethylene glycol · lactulose · senna · bisacodyl · docusate · lubiprostone · linaclotide · prucalopride · tenapanor",act:["mod","ag","inh"],tools:MT,leg:["mod","ag","inh"],draw:GM(["lum","secr","ht4","nhe3"]),
notes:()=>`${tbl(["กลุ่ม","ยา","กลไก","ADR"],[["Bulk-forming","psyllium, methylcellulose","ดูดน้ำเพิ่มมวลอุจจาระ","ท้องอืด · ต้องดื่มน้ำพอ"],["Osmotic","PEG, lactulose, Mg citrate/hydroxide","ดึงน้ำเข้า lumen · lactulose ลด NH₃ (hepatic encephalopathy)","ท้องอืด ท้องเสีย, เกลือแร่"],["Stimulant","senna, bisacodyl","กระตุ้น enteric nerve","ปวดบีบ · <b>melanosis coli</b> (senna)"],["Emollient","docusate","ทำให้อุจจาระนุ่ม","อ่อน"],["Secretagogue","lubiprostone (ClC-2), linaclotide/plecanatide (GC-C → cGMP → CFTR)","Cl⁻/น้ำเข้า lumen","ท้องเสีย · คลื่นไส้ (lubiprostone)"],["Serotonergic","prucalopride","5-HT₄ agonist ↑ motility","ปวดหัว"],["NHE3 inhibitor","tenapanor","ลด Na⁺ absorption","ท้องเสีย"],["PAMORA","methylnaltrexone, naloxegol","μ antagonist ส่วนปลาย","opioid-induced constipation"]])}${S.k}`});

SEC.push({id:"orlistat",k:"e",t:"Orlistat & anti-obesity drugs",mm:"Orlistat · obesity",drugs:"orlistat · semaglutide · phentermine",act:["inh","ag"],tools:MT,leg:["inh"],draw:GM(["lum"]),
notes:()=>`<ul><li><b>Orlistat</b>: ยับยั้ง gastric และ pancreatic <b>lipase</b> → ไขมันดูดซึมลด ~30% ${S.k}</li><li>ADR: steatorrhea, oily spotting, flatulence · ขาด <b>vitamin A, D, E, K</b> → ให้ multivitamin ${S.k}</li><li>ยาอื่น: GLP-1 agonist (semaglutide, liraglutide), tirzepatide, phentermine (± topiramate), naltrexone/bupropion ${S.k}</li></ul>`});

SEC.push({id:"pud",k:"f",t:"GERD, PUD & H. pylori",mm:"GERD · PUD · H. pylori",drugs:"",act:[],leg:[],
draw:()=>cards([["GERD","lifestyle → H₂RA/PPI on demand → PPI วันละครั้ง 8 สัปดาห์","vn"],["NSAID ulcer","หยุด NSAID ถ้าทำได้ · PPI รักษา · ป้องกันด้วย PPI หรือ misoprostol","gl"],["H. pylori: bismuth quadruple","PPI + bismuth + metronidazole + tetracycline · 10–14 วัน","ar"],["H. pylori: clarithromycin triple","PPI + clarithromycin + amoxicillin (หรือ metronidazole) · เมื่อ resistance ต่ำ","ar"],["Confirm eradication","urea breath test หรือ stool antigen (หยุด PPI ก่อน)",""]]),
notes:()=>`<ul><li>Bismuth quadruple เป็นตัวเลือกที่แนะนำชัด โดยเฉพาะแพ้ penicillin หรือเคยใช้ macrolide ${S.p}</li><li>PPI ให้ก่อนอาหาร 30–60 นาที ${S.p}</li></ul>`});

SEC.push({id:"cirrhosis",k:"f",t:"Portal hypertension & cirrhosis",mm:"Cirrhosis drugs",drugs:"propranolol · nadolol · octreotide · lactulose · rifaximin · spironolactone",act:[],leg:[],
draw:()=>cards([["Varices: primary prophylaxis","nonselective β-blocker (propranolol, nadolol, carvedilol) หรือ banding","vn"],["Acute variceal bleed","octreotide + endoscopic band ligation + antibiotic prophylaxis (ceftriaxone)","ar"],["Ascites","จำกัดเกลือ · spironolactone ± furosemide","gl"],["Hepatic encephalopathy","lactulose ± rifaximin","gl"],["SBP","cefotaxime/ceftriaxone · albumin",""]]),
notes:()=>`<ul><li>Nonselective β-blocker ลด portal pressure (β₁: CO ↓, β₂ block: splanchnic vasoconstriction) ${S.k}</li><li>Lactulose → NH₃ เป็น NH₄⁺ ในลำไส้ใหญ่ · rifaximin ลดแบคทีเรียสร้าง NH₃ ${S.k}${S.p}</li><li>Spironolactone เป็น diuretic หลักใน ascites (secondary hyperaldosteronism) ${S.k}</li></ul>`});

const EXTRA=["pud", "cirrhosis"];

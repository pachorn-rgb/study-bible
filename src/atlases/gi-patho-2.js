/* ================= Gastrointestinal Pathology II · Small bowel & Colon =================
   First Aid Step 1 2025 (malabsorption → IBD → microscopic colitis/IBS → appendicitis → diverticula → Hirschsprung →
   obstruction → vascular → polyps → polyposis → Lynch → colorectal cancer) order
   Robbins & Cotran 10e Ch 17 (small intestine and colon) · Harrison 22e (GI bleeding) · FA Step 2 CK (screening)
   drawings are original schematics. */
//@include _cvs-patho-helpers.js
//@include _endo-patho-helpers.js
//@include _gi-patho-helpers.js
Object.assign(GN,{a:"Malabsorption",b:"Inflammatory & functional bowel disease",c:"Structural, obstructive & vascular",d:"Polyps & colorectal cancer"});
Object.assign(ST,{cel:"celiac",ma:"lact",ibd:"crohn",ux:"left",mc:"coll",ap:4,dv:"osis",hs:"short",ob:"intus",is:"colonic",ao:"angio",po:"tub",ps:"fap",ly:"lynch",as:2,ap2:"cin",cr:"right"});

/* ---------- 1. celiac disease ---------- */
const CEL={normal:{n:"ลำไส้เล็กปกติ",m:"normal",t:"villi สูง : crypt ≈ 3–5 : 1 · IEL น้อย"},celiac:{n:"Celiac disease (กินกลูเตน)",m:"celiac",t:"villous atrophy + crypt hyperplasia + intraepithelial lymphocytosis"},gfd:{n:"หลังงดกลูเตน 6–24 เดือน",m:"partial",t:"villi กลับมาใกล้ปกติ · antibody titer ลดลง"}};
function celD(){const d=CEL[ST.cel];let b=villi(8,8,300,210,d.m)+T(158,236,d.n,{c:"bh"})+wrapT(158,254,d.t,48,"s m",14,"middle");
 const S=[["Gluten → gliadin","peptide ทนต่อ protease",GI.gran],["tTG deamidate gliadin","ใน lamina propria",CV.gold],["HLA-DQ2 / DQ8","APC นำเสนอให้ CD4 T cell",CV.violet],["CD4 → cytokine · B cell → Ab","anti-tTG, anti-endomysial, anti-DGP",CV.acc],["CD8 IEL (IL-15, NKG2D)","ฆ่า enterocyte → villi หาย",CV.bad]];
 S.forEach(([t,s,c],i)=>{const y=8+i*52;b+=cardBox(326,y,308,44,t,[s],c);if(i<4)b+=Ar(480,y+44,480,y+52,CV.mut,1.4,{hs:5})});
 b+=T(8,286,"สัมพันธ์กับ",{a:"start",c:"bh"})+tagRow(8,306,626,[["dermatitis herpetiformis","#7A5BC7"],["iron deficiency anemia","#C2334A"],["osteoporosis","#8C6D46"],["type 1 DM","#C7892B"],["IgA nephropathy","#3E6FB0"],["EATL (T-cell lymphoma)","#5B3E8C"]]);
 return ESVG(b,"0 0 640 356")}

/* ---------- 2. other malabsorption ---------- */
const MA={lact:{n:"Lactose intolerance",m:"normal",c:"#C7892B",T:["ปกติ","stool pH ↓ · H₂ breath ⊕","—"],R:["lactase บน brush border ↓ → lactose ค้าง → osmotic diarrhea","villi ปกติ (ยกเว้นตามหลัง viral enteritis)","แบคทีเรียใน colon หมัก → แก๊ส ท้องอืด stool pH ต่ำ","congenital (AR, หายาก) · acquired พบบ่อยในคนเอเชีย/แอฟริกัน"]},
 panc:{n:"Pancreatic insufficiency",m:"normal",c:"#8C6D46",T:["ปกติ","fecal elastase ↓","—"],R:["chronic pancreatitis, cystic fibrosis, มะเร็งอุดท่อ","ย่อยไม่ได้ (intraluminal) → steatorrhea","ขาด vit A, D, E, K และ B12","mucosa ปกติ → D-xylose ดูดซึมได้"]},
 trop:{n:"Tropical sprue",m:"partial",c:"#2F8A78",T:["ผิดปกติ","—","ตอบสนองต่อ antibiotic"],R:["คนที่อยู่/ไปเขตร้อน · คล้าย celiac แต่ไม่เกี่ยวกับกลูเตน","villous atrophy ที่ duodenum, jejunum ลามถึง ileum","megaloblastic anemia: folate ↓ ก่อน แล้ว B12 ↓"]},
 whip:{n:"Whipple disease",m:"whipple",c:"#B566B5",T:["ผิดปกติ","PAS ⊕ macrophage","ตอบสนองต่อ antibiotic"],R:["Tropheryma whipplei (gram ⊕ actinomycete)","foamy macrophage PAS ⊕ (diastase-resistant) ใน lamina propria → อุด lymphatic","ชายสูงวัย · ข้ออักเสบ ไข้ ต่อมน้ำเหลืองโต · หัวใจ สมอง","ไม่ติดสี acid-fast (ต่างจาก MAI)"]}};
function malD(){const d=MA[ST.ma];let b=villi(8,8,300,200,d.m)+T(158,226,d.m==="normal"?"villi ปกติ":d.m==="whipple"?"villi กว้าง เต็มไปด้วย foamy macrophage":"villi เตี้ยลง",{c:"s m"});
 b+=iPanel(326,8,308,d.n,"",d.R,d.c);
 const y0=244,cols=["D-xylose test","ผลตรวจเด่น","การรักษาเฉพาะ"];b+=T(8,y0,"เปรียบเทียบการตรวจ",{a:"start",c:"bh"});
 const rows=[["lact","Lactose"],["panc","Pancreatic"],["trop","Tropical sprue"],["whip","Whipple"],["cel","Celiac"]];const TC={cel:["ผิดปกติ","IgA anti-tTG ⊕","gluten-free diet"]};
 cols.forEach((c,i)=>b+=T(150+i*160,y0+22,c,{a:"start",c:"s m"}));
 rows.forEach(([k,n],j)=>{const y=y0+32+j*28,on=k===ST.ma,v=k==="cel"?TC.cel:MA[k].T;b+=`<rect x="8" y="${y}" width="626" height="24" rx="8" style="fill:${on?`color-mix(in srgb,${MA[k].c} 20%,var(--sb-surface))`:"var(--sb-surface2)"};stroke:${on?MA[k].c:"none"}"/>`+T(18,y+16,n,{a:"start",c:on?"bh":"s"});
  v.forEach((x,i)=>b+=T(150+i*160,y+16,x,{a:"start",c:x==="ผิดปกติ"?"bh":"s"}))});
 return ESVG(b,`0 0 640 ${Math.max(y0+180,8+IPH+8)}`)}

/* ---------- 3. IBD ---------- */
const UX={proct:["rect"],left:["rect","sig","desc"],pan:["rect","sig","desc","spl","trans","hep","asc","cecum"]};
function ibdD(){const cr=ST.ibd==="crohn",c=cr?"#C2493A":"#3E6FB0";let seg={},o={};
 if(cr){seg={ti:c,cecum:c,trans:c};o.sbSkip=[[160,120],[200,150],[132,182]];o.sbSkipC=c}else UX[ST.ux].forEach(k=>seg[k]=c);
 let b=colonMap(0,6,1.02,Object.assign({seg},o));
 if(cr)b+=TD(160,18,"skip lesions · rectum มักปกติ",{s:10.5,c:"#7A2A20"});else b+=TD(160,18,ST.ux==="pan"?"pancolitis":ST.ux==="left"?"left-sided colitis":"ulcerative proctitis",{s:10.5,c:"#1F3F70"});
 b+=T(340,22,cr?"Crohn disease: transmural":"Ulcerative colitis: mucosa + submucosa",{a:"start",c:"bh"});
 b+=wallX(340,32,224,130,{id:31,lesion:{x0:350,x1:cr?420:554,depth:cr?"through":"sub",kind:cr?"inflam":"inflam"},gran:cr?[[402,120],[386,80]]:[]});
 if(cr)b+=`<path d="M440,${32+13} L447,${32+125}" style="stroke:#7A2A20;stroke-width:3"/>`+TD(452,160,"fissure",{s:9.5,a:"start"});
 const R=cr?[["ตำแหน่ง","ทุกที่ปากถึงทวาร · ileum ปลาย + colon บ่อยสุด"],["รูปแบบ","skip · cobblestone · creeping fat · string sign"],["จุลพยาธิ","noncaseating granuloma (~35%) · fissure ลึก"],["แทรกซ้อน","fistula, stricture, abscess, perianal · malabsorption"],["serology","ASCA ⊕ · บุหรี่เพิ่มความเสี่ยง"]]
  :[["ตำแหน่ง","rectum เสมอ ลามขึ้นต่อเนื่อง · backwash ileitis"],["รูปแบบ","ulcer กว้าง · pseudopolyp · lead pipe (haustra หาย)"],["จุลพยาธิ","crypt abscess · ไม่มี granuloma"],["แทรกซ้อน","toxic megacolon · มะเร็ง (pancolitis)"],["serology","p-ANCA (MPO) · PSC · บุหรี่อาจลดอาการ"]];
 R.forEach(([k,v],i)=>{const y=178+i*40;b+=`<rect x="340" y="${y}" width="294" height="36" rx="8" style="fill:color-mix(in srgb,${c} ${i%2?6:12}%,var(--sb-surface))"/>`+T(350,y+15,k,{a:"start",c:"bh"})+T(350,y+30,v,{a:"start",c:"s"})});
 b+=T(8,392,"Extraintestinal ทั้งคู่: ข้ออักเสบ, erythema nodosum, pyoderma gangrenosum, uveitis/episcleritis, aphthous ulcer",{a:"start",c:"s m"});
 return ESVG(b,"0 0 640 402")}

/* ---------- 4. microscopic colitis & IBS ---------- */
function colTile(x,y,w,h,mode){let b=slide(x,y,w,h);const r=rng(mode.length*13+1),n=Math.floor(w/34);
 b+=`<rect x="${x}" y="${y+28}" width="${w}" height="${h-28}" style="fill:${HE.col}"/>`;
 if(mode==="coll")b+=`<rect x="${x}" y="${y+26}" width="${w}" height="14" style="fill:#F4C2D5;stroke:#E59AB7"/>`;
 b+=`<path d="M${x},${y+24} H${x+w}" style="stroke:${HE.cyX};stroke-width:7"/>`;
 for(let i=0;i<n;i++){const cx=x+18+i*(w-24)/n;b+=`<path d="M${cx-9},${y+30} v${h*.62} q9,10 18,0 v${-h*.62}" style="fill:#F6D9E3;stroke:${HE.cyX};stroke-width:4"/>`;
  for(let k=0;k<5;k++)b+=`<ellipse cx="${cx}" cy="${y+42+k*h*.11}" rx="5" ry="6" style="fill:#fff;stroke:#D7B8C6;stroke-width:.6"/>`}
 const iel=mode==="lymph"?70:mode==="coll"?34:8;for(let i=0;i<iel;i++)b+=dot(x+r()*w,y+21+r()*6,1.6,HE.nuD);
 const lp=mode==="ibs"?40:110;for(let i=0;i<lp;i++)b+=dot(x+r()*w,y+44+r()*(h-60),1.5,HE.nu);
 return b+`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" style="fill:none;stroke:var(--sb-line)"/>`}
const MC={coll:{n:"Collagenous colitis",c:"#C7892B",R:["แถบ collagen ใต้ epithelium หนา + IEL เพิ่ม","หญิงวัยกลางคน–สูงอายุ","ท้องเสียเป็นน้ำเรื้อรัง ไม่มีเลือด น้ำหนักไม่ลด","ส่องกล้องดูปกติ → ต้อง biopsy"]},lymph:{n:"Lymphocytic colitis",c:"#7A5BC7",R:["IEL เพิ่มมาก (มักเกิน 1 ต่อ 5 colonocyte) · collagen ปกติ","สัมพันธ์ celiac และ autoimmune (Graves, RA)","NSAID และอาจ PPI ทำให้เกิดภาพคล้ายกัน"]},
 ibs:{n:"Irritable bowel syndrome",c:"#2F8A78",R:["ปวดท้องเป็นซ้ำ ≥ 1 วัน/สัปดาห์ ใน 3 เดือน + ≥ 2 ข้อ:","① สัมพันธ์กับการถ่าย ② ความถี่เปลี่ยน ③ ลักษณะอุจจาระเปลี่ยน","ไม่มีพยาธิสภาพ · หญิงวัยกลางคน · IBS-D / IBS-C / mixed","กลไก: brain–gut axis, ไวต่อการยืด, microbiome, bile acid · หลังติดเชื้อ"]}};
function mcD(){const d=MC[ST.mc];let b=colTile(8,8,300,220,ST.mc)+T(158,248,ST.mc==="coll"?"แถบชมพูหนาใต้ผิว = collagen":ST.mc==="lymph"?"จุดม่วงเข้มในผิว = IEL":"histology ปกติ",{c:"s m"});
 b+=iPanel(326,8,308,d.n,"",d.R,d.c);
 b+=`<rect x="8" y="266" width="626" height="62" rx="12" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(22,288,"Red flags ที่ไม่เข้ากับ IBS → ส่องกล้อง",{a:"start",c:"bh"})+T(22,310,"อายุ > 50 ปีเริ่มมีอาการ · เลือดออก · น้ำหนักลด · ซีด · อาการตอนกลางคืน · ประวัติครอบครัวมะเร็ง/IBD",{a:"start",c:"s"});
 return ESVG(b,`0 0 640 ${Math.max(334,8+IPH+8)}`)}

/* ---------- 5. appendicitis (time slider) ---------- */
function apD(){const h=+ST.ap,st=h<8?0:h<20?1:h<36?2:3;let b="";
 /* abdomen */
 b+=`<path d="M52,14 C40,90 30,170 46,240 C54,280 60,310 70,334 L250,334 C260,310 266,280 274,240 C290,170 280,90 268,14Z" style="fill:${EN.skin};stroke:${EN.skinD};stroke-width:1.6"/>`;
 b+=`<path d="M160,40 C130,70 90,96 58,104 M160,40 C190,70 230,96 262,104" style="fill:none;stroke:${EN.skinD};stroke-width:1.4;opacity:.7"/>`+T(160,32,"xiphoid",{c:"s m"});
 b+=`<path d="M58,252 C90,286 120,306 150,318 M262,252 C230,286 200,306 170,318" style="fill:none;stroke:${EN.skinD};stroke-width:1.2;opacity:.6;stroke-dasharray:4 3"/>`;
 b+=`<g style="opacity:.42">${colonMap(40,64,.75,{lab:false,seg:{app:st>=1?CV.bad:"#E0B48A"}})}</g>`;
 b+=`<circle cx="160" cy="170" r="5" style="fill:${EN.skinD}"/>`+TD(172,166,"umbilicus",{s:9.5,a:"start"});
 b+=`<circle cx="66" cy="262" r="5" style="fill:${EN.skinD}"/>`+TD(74,280,"ASIS ขวา",{s:9.5,a:"start"});
 b+=`<path d="M160,170 L66,262" style="stroke:${EN.skinD};stroke-width:1.2;stroke-dasharray:4 3"/>`;
 const mx=66+(160-66)/3,my=262-(262-170)/3;b+=`<circle cx="${mx}" cy="${my}" r="4" style="fill:${CV.violet}"/>`+TD(mx-8,my-8,"McBurney",{s:9.5,a:"end",c:"#4E3570"});
 const tt=Math.min(1,Math.max(0,(h-4)/12)),px=160+(mx-160)*tt,py=170+(my-170)*tt,R=48-20*tt;
 b+=`<circle cx="${px}" cy="${py}" r="${R}" style="fill:${CV.bad};opacity:${.18+.1*tt}"/><circle cx="${px}" cy="${py}" r="${R*.5}" style="fill:${CV.bad};opacity:.3"/>`;
 if(st===3)b+=`<path d="M52,110 C46,180 50,250 70,330 L250,330 C270,250 274,180 268,110Z" style="fill:${CV.bad};opacity:.14"/>`;
 b+=T(160,354,["ปวดรอบสะดือ (visceral T8–T10)","ปวดย้ายมา RLQ (parietal peritoneum)","ปวด RLQ + ไข้ + rebound","ทะลุ → peritonitis ทั่วท้อง"][st],{c:"bh"});
 /* appendix cross-section */
 const cx=470,cy=110,S=["Obstruction","Acute (neutrophil ถึง muscularis)","Suppurative / gangrenous","Perforation"];
 b+=T(340,22,"ภาพตัดขวางไส้ติ่ง",{a:"start",c:"bh"});
 const sw=st>=1?8:0;b+=`<circle cx="${cx}" cy="${cy}" r="${66+sw}" style="fill:${st>=2?"#C9A29A":GI.ser};stroke:${st>=1?CV.bad:"#C9A27A"};stroke-width:${st>=1?3:1.4}"/>`;
 b+=`<circle cx="${cx}" cy="${cy}" r="${54+sw*.6}" style="fill:${st>=2?"#9C5A50":GI.mus}"/><circle cx="${cx}" cy="${cy}" r="${38+sw*.4}" style="fill:${GI.sub}"/><circle cx="${cx}" cy="${cy}" r="${28+sw*.3}" style="fill:${GI.muc}"/>`;
 for(let i=0;i<6;i++){const a=i/6*6.28;b+=`<ellipse cx="${cx+Math.cos(a)*33}" cy="${cy+Math.sin(a)*33}" rx="7" ry="5" style="fill:#B5739B;opacity:.6"/>`}
 b+=`<circle cx="${cx}" cy="${cy}" r="${14+st*3}" style="fill:${st>=2?"#E9E2B6":GI.lum}"/>`;
 b+=`<path d="${sm([[cx-8,cy-4],[cx,cy-10],[cx+9,cy-3],[cx+6,cy+7],[cx-6,cy+8]])}" style="fill:#8C6D46;stroke:#5A4428"/>`+TD(cx,cy+30+st*3,"fecalith",{s:9.5,c:"#3B2D4A"});
 if(st>=1){const r=rng(5);for(let i=0;i<40+st*30;i++){const a=r()*6.28,d=30+r()*(30+sw);b+=dot(cx+Math.cos(a)*d,cy+Math.sin(a)*d,1.6,"#36296E")}}
 if(st===3)b+=`<path d="M${cx+50},${cy-30} l30,-14 M${cx+54},${cy-22} l34,-4" style="stroke:${CV.bad};stroke-width:3"/>`+`<path d="M${cx+44},${cy-40} q10,4 18,16" style="fill:none;stroke:#fff;stroke-width:6"/>`;
 S.forEach((s,i)=>{const y=200+i*30,on=i===st;b+=`<rect x="340" y="${y}" width="294" height="26" rx="13" style="fill:${on?CV.bad:"var(--sb-surface2)"};stroke:${on?CV.bad:"var(--sb-line)"}"/>`+`<text x="354" y="${y+17}" style="font:${on?750:600} 11.5px var(--sb-font);fill:${on?"#fff":"var(--sb-ink2)"}">${i+1}. ${s}</text>`});
 return ESVG(b,"0 0 640 362")}

/* ---------- 6. diverticula ---------- */
const DV={osis:{n:"Diverticulosis",k:"false",c:"#C7892B",R:["false diverticulum: mucosa + submucosa ดันผ่านช่องอ่อนที่ vasa recta แทงผ่าน muscularis","sigmoid บ่อยสุด · ~50% ของคนตะวันตกอายุ > 60","ความดันในลำไส้สูง + อาหารกากน้อย · taenia coli ทำให้ colon อ่อนกว่า","ส่วนใหญ่ไม่มีอาการ · เลือดออกไม่เจ็บ (hematochezia)"]},
 itis:{n:"Diverticulitis",k:"false",c:"#C2334A",R:["diverticulum อุดตัน → อักเสบ (ส่วนน้อยของ diverticulosis)","ปวด LLQ + ไข้ + WBC ↑ (\"left-sided appendicitis\")","แทรกซ้อน: abscess, fistula (colovesical → pneumaturia), stricture, perforation","ไม่ซับซ้อน → ประคับประคอง · ซับซ้อน → antibiotic"]},
 zenker:{n:"Zenker diverticulum",k:"false",c:"#7A5BC7",R:["false diverticulum ที่ Killian triangle (ระหว่าง thyropharyngeus กับ cricopharyngeus)","cricopharyngeus ทำงานไม่ประสาน → mucosa ดันออกด้านหลัง","กลืนลำบาก สำรอกอาหารเก่า ลมหายใจเหม็น สำลัก ก้อนที่คอ","ชายสูงอายุ"]},
 meckel:{n:"Meckel diverticulum",k:"true",c:"#2F8A78",R:["true diverticulum (ครบทุกชั้น) จาก vitelline duct ที่ไม่ปิด","ความผิดปกติแต่กำเนิดที่พบบ่อยที่สุดของทางเดินอาหาร","อาจมี gastric/pancreatic mucosa → แผล เลือดออกไม่เจ็บในเด็ก","ตรวจด้วย ⁹⁹ᵐTc-pertechnetate scan · ทำให้ intussusception/volvulus ได้"]}};
function divD(){const d=DV[ST.dv];let b=T(8,22,d.k==="true"?"True diverticulum: ครบทุกชั้น":"False diverticulum: แค่ mucosa + submucosa",{a:"start",c:"bh"});
 b+=wallX(8,32,230,120,{id:61,div:{x:122,kind:d.k},lab:true});
 if(ST.dv==="itis")b+=`<circle cx="122" cy="148" r="34" style="fill:${CV.bad};opacity:.22"/>`;
 if(ST.dv==="zenker"){b+=`<g transform="translate(330,6)"><path d="M70,0 C66,80 66,160 74,290" style="fill:none;stroke:${GI.mucD};stroke-width:46;stroke-linecap:round"/><path d="M70,0 C66,80 66,160 74,290" style="fill:none;stroke:${GI.sq};stroke-width:42;stroke-linecap:round"/>`+
  `<path d="M40,104 L100,96" style="stroke:${GI.mus};stroke-width:12;stroke-linecap:round"/>`+`<path d="M44,150 L102,150" style="stroke:${GI.musD};stroke-width:12;stroke-linecap:round"/>`+
  `<path d="${sm([[100,112],[132,118],[150,150],[136,186],[108,180],[98,146]])}" style="fill:${GI.sq};stroke:${GI.mucD};stroke-width:2"/>`+`<ellipse cx="124" cy="160" rx="12" ry="8" style="fill:#D9C59A"/>`+
  T(-8,100,"thyropharyngeus",{a:"end",c:"s m"})+T(-8,154,"cricopharyngeus",{a:"end",c:"s m"})+T(160,130,"Killian triangle",{a:"start",c:"s"})+TD(70,24,"pharynx",{s:10})+TD(74,270,"esophagus",{s:10})+`</g>`}
 else if(ST.dv==="meckel")b+=colonMap(300,8,1,{ring:[[124,214,22,"#2F8A78"]],seg:{ti:"#9CC9BE"},lab:true})+`<path d="M124,214 q4,-30 22,-36" transform="translate(300,8)" style="fill:none;stroke:#2F8A78;stroke-width:10;stroke-linecap:round"/>`+T(470,330,"~2 ฟุตจาก ileocecal valve · ด้าน antimesenteric",{c:"s m"});
 else b+=colonMap(300,8,1,{dots:polypDots(["sig","desc"],18,ST.dv==="itis"?"#C2334A":"#8C6D46",4,3),ring:ST.dv==="itis"?[[236,236,30,CV.bad]]:[]});
 if(ST.dv==="meckel"){b+=T(8,186,"Rule of 2's",{a:"start",c:"bh"});[["2%","ของประชากร"],["2 ฟุต","จาก ileocecal valve"],["2 นิ้ว","ยาว"],["2 เท่า","ในชาย"],["2 ปี","มีอาการก่อนอายุ"],["2 ชนิด","gastric / pancreatic"]].forEach(([a,s],i)=>{const x=8+(i%3)*96,y=196+Math.floor(i/3)*52;b+=`<rect x="${x}" y="${y}" width="90" height="46" rx="10" style="fill:color-mix(in srgb,#2F8A78 12%,var(--sb-surface));stroke:color-mix(in srgb,#2F8A78 45%,transparent)"/>`+T(x+45,y+20,a,{c:"bh"})+T(x+45,y+37,s,{c:"s m"})})}
 else b+=iPanel(8,176,284,d.n,"",d.R,d.c);
 const yb=ST.dv==="meckel"?310:176+IPH+10;if(ST.dv==="meckel")b+=iPanel(8,306,626,d.n,"",d.R,d.c);
 return ESVG(b,`0 0 640 ${Math.max(340,ST.dv==="meckel"?306+IPH+6:yb)}`)}

/* ---------- 7. Hirschsprung ---------- */
const HS={norm:{seg:{},narrow:[],wide:[],t:"ganglion cells ครบทั้ง Meissner และ Auerbach plexus ตลอดลำไส้"},short:{seg:{rect:"#7A5BC7"},narrow:["rect"],wide:["sig","desc"],t:"ส่วนใหญ่เป็นช่วงสั้นที่ rectum (± sigmoid) · ส่วนที่ไม่มี ganglion หดค้าง ส่วนต้นโป่ง (transition zone)"},long:{seg:{rect:"#7A5BC7",sig:"#7A5BC7",desc:"#7A5BC7"},narrow:["rect","sig","desc"],wide:["trans","asc"],t:"long-segment ลามขึ้นถึง colon ส่วนต้น · รุนแรงกว่า"}};
function plex(x,y,w,h,gang){let b=slide(x,y,w,h);const bands=[[.04,.24,GI.muc],[.24,.5,GI.sub],[.5,.66,GI.mus],[.7,.96,GI.mus]];bands.forEach(([a,c,col])=>b+=`<rect x="${x}" y="${y+a*h}" width="${w}" height="${(c-a)*h}" style="fill:${col}"/>`);
 const g=(gx,gy)=>gang?`<ellipse cx="${gx}" cy="${gy}" rx="12" ry="8" style="fill:#F4E3B6;stroke:#9A7420"/>`+`<circle cx="${gx-4}" cy="${gy}" r="3.4" style="fill:#B998D8;stroke:#4E3570;stroke-width:.6"/>`+`<circle cx="${gx+5}" cy="${gy+1}" r="3" style="fill:#B998D8;stroke:#4E3570;stroke-width:.6"/>`:`<path d="M${gx-10},${gy} q10,-6 20,0" style="fill:none;stroke:#C7A86A;stroke-width:3"/>`;
 for(let i=0;i<3;i++)b+=g(x+40+i*(w-60)/2,y+.36*h)+g(x+30+i*(w-60)/2,y+.68*h);
 return b+TD(x+6,y+.38*h-12,"Meissner",{s:9.5,a:"start"})+TD(x+6,y+.68*h-12,"Auerbach",{s:9.5,a:"start"})+`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" style="fill:none;stroke:var(--sb-line)"/>`}
function hsD(){const d=HS[ST.hs];let b=colonMap(0,6,1,{seg:d.seg,narrow:d.narrow,wide:d.wide});
 b+=plex(340,8,294,150,ST.hs==="norm")+T(487,176,ST.hs==="norm"?"rectal biopsy: มี ganglion cell":"rectal suction biopsy: ไม่มี ganglion cell",{c:"bh"});
 b+=`<rect x="340" y="190" width="294" height="140" rx="14" style="fill:color-mix(in srgb,#7A5BC7 8%,var(--sb-surface));stroke:color-mix(in srgb,#7A5BC7 40%,transparent)"/>`+wrapT(354,212,d.t,46,"s",15);
 b+=tagRow(354,282,270,[["ไม่ถ่าย meconium ใน 48 ชม.","#C2334A"],["RET","#7A5BC7"],["Down syndrome","#3E6FB0"]]);
 return ESVG(b,"0 0 640 336")}

/* ---------- 8. obstruction ---------- */
const OB={intus:{n:"Intussusception",c:"#C2334A",seg:{ti:"#C2334A"},ring:[[70,220,26]],img:"target",R:["ลำไส้ส่วนต้นมุดเข้าส่วนปลาย มักที่ ileocecal junction","สาเหตุอุดตันที่พบบ่อยสุดในเด็ก < 2 ปี · ส่วนใหญ่ idiopathic (Peyer patch โตหลังติดไวรัส, rotavirus vaccine)","lead point: เด็กโต Meckel, IgA vasculitis · ผู้ใหญ่ เนื้องอก","ปวดเป็นพัก ๆ อาเจียน ถ่าย currant jelly ก้อนรูปไส้กรอก · US: target sign","air/contrast enema ทั้งวินิจฉัยและรักษา"]},
 sig:{n:"Sigmoid volvulus",c:"#C7892B",twist:"sig",img:"bean",R:["ลำไส้บิดรอบ mesentery → อุดตัน + ขาดเลือด","sigmoid (ยาวห้อย) บ่อยที่สุด ตามด้วย cecum · ผู้สูงอายุ","X-ray: coffee bean sign","FA: gastric volvulus สัมพันธ์ paraesophageal hernia"]},
 mid:{n:"Malrotation + midgut volvulus",c:"#7A5BC7",twist:"cecum",img:"bilious",R:["midgut หมุนผิดตอนเป็นตัวอ่อน → small bowel อยู่ขวา colon อยู่ซ้าย","Ladd bands พาดผ่าน duodenum → อุดตัน","midgut volvulus ในทารก: อาเจียนน้ำดี = ฉุกเฉิน"]},
 sbo:{n:"Small bowel obstruction (adhesion)",c:"#3E6FB0",sb:"#9DB8DE",img:"fluid",R:["สาเหตุบ่อยสุด: adhesion หลังผ่าตัด · hernia · เนื้องอก","ปวดทันที อาเจียน ท้องอืด · ส่วนต้นโป่ง ส่วนปลายแฟบ","X-ray ยืน: air-fluid levels · strangulation → ขาดเลือด ทะลุ","รักษา: NG decompression, น้ำเกลือ, bowel rest"]},
 ileus:{n:"Ileus",c:"#8C6D46",sb:"#E8D2A6",img:"ileus",R:["ลำไส้ไม่เคลื่อนไหวโดยไม่มีสิ่งอุด","หลังผ่าตัดท้อง, opioid, hypokalemia, sepsis","ไม่ผายลม ท้องอืด เสียงลำไส้ลดลง","ภาพถ่าย: ลำไส้โป่งทั้งหมด ไม่มี transition zone"]}};
function xray(x,y,w,h,k){let b=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" style="fill:#1E2230;stroke:var(--sb-line)"/>`;const cx=x+w/2,cy=y+h/2,g="#C9CED8";
 if(k==="target")for(let i=4;i>0;i--)b+=`<circle cx="${cx}" cy="${cy}" r="${i*14}" style="fill:${i%2?"#6E7484":"#3A4050"};stroke:${g};stroke-width:1"/>`;
 if(k==="bean")b+=`<path d="M${cx-40},${cy+50} C${cx-70},${cy-60} ${cx-6},${cy-70} ${cx},${cy-10} C${cx+6},${cy-70} ${cx+70},${cy-60} ${cx+40},${cy+50}" style="fill:#4A5162;stroke:${g};stroke-width:2"/><path d="M${cx},${cy-10} L${cx},${cy+50}" style="stroke:${g};stroke-width:2"/>`;
 if(k==="fluid")for(let i=0;i<5;i++){const lx=x+20+i*(w-40)/5,ly=y+30+(i%2)*40+i*8;b+=`<path d="M${lx},${ly} a18,18 0 0 1 36,0 v14 h-36Z" style="fill:#4A5162;stroke:${g};stroke-width:1.4"/><path d="M${lx},${ly+6} h36" style="stroke:#fff;stroke-width:2"/><rect x="${lx}" y="${ly+6}" width="36" height="8" style="fill:#8890A0"/>`}
 if(k==="ileus"){for(let i=0;i<4;i++)b+=`<path d="M${x+20},${y+30+i*28} q${w/4},-16 ${w/2-20},0 t${w/2-20},0" style="fill:none;stroke:#5A6274;stroke-width:16;stroke-linecap:round"/>`;b+=`<path d="M${x+w-30},${y+20} V${y+h-20}" style="fill:none;stroke:#5A6274;stroke-width:18;stroke-linecap:round"/>`}
 if(k==="bilious")b+=`<path d="M${cx-50},${cy-30} q30,-30 60,0 q20,20 0,40" style="fill:none;stroke:#5A6274;stroke-width:22;stroke-linecap:round"/><path d="M${cx+10},${cy+10} q-10,30 -40,40" style="fill:none;stroke:#C9CED8;stroke-width:3;stroke-dasharray:4 3"/>`+`<text x="${cx}" y="${y+h-12}" text-anchor="middle" style="font:700 10px var(--sb-font);fill:#C9CED8">corkscrew duodenum</text>`;
 const lab={target:"US: target sign",bean:"X-ray: coffee bean",fluid:"X-ray ยืน: air-fluid levels",ileus:"โป่งทั่ว ไม่มี transition",bilious:"UGI series"}[k];
 return b+`<text x="${x+10}" y="${y+18}" style="font:700 10.5px var(--sb-font);fill:#E8ECF4">${lab}</text>`}
function obD(){const d=OB[ST.ob];let b=colonMap(0,6,.94,{seg:d.seg||{},twist:d.twist,ring:d.ring,sb:d.sb});
 b+=xray(318,8,316,150,d.img);b+=iPanel(318,170,316,d.n,"",d.R,d.c);
 return ESVG(b,`0 0 640 ${Math.max(300,170+IPH+6)}`)}

/* ---------- 9. ischemic bowel ---------- */
const IS={ami:{n:"Acute mesenteric ischemia",c:"#C2334A",ring:[],sb:"#D98A8A",R:["มักเป็น embolus อุด SMA (AF, MI ใหม่) · thrombus บน atherosclerosis","ปวดท้องรุนแรงไม่สมกับการตรวจร่างกาย → infarct ลำไส้เล็กยาวหลายเมตร","ถ่ายเป็นเลือด currant jelly · lactate ↑ · ตายสูง","ขาดเลือดแล้วให้เลือดกลับ: reperfusion injury ทำลายเพิ่ม"]},
 cmi:{n:"Chronic mesenteric ischemia",c:"#C7892B",ring:[],sb:"#EAC58C",R:["\"intestinal angina\" · atherosclerosis ของ celiac/SMA/IMA (SMA บ่อยสุด)","ปวดท้องหลังกิน 15–60 นาที → กลัวอาหาร น้ำหนักลด","collateral ระหว่าง arcade ทำให้ทนการตีบช้า ๆ ได้"]},
 colonic:{n:"Colonic (ischemic) colitis",c:"#7A5BC7",ring:[[262,52,26],[214,246,26]],R:["watershed: splenic flexure (SMA/IMA) และ rectosigmoid","ความดันต่ำทั่วร่างกาย → บาดเจ็บเฉพาะจุด watershed","ผู้สูงอายุ > 70 · ปวดเกร็ง LLQ ตามด้วยถ่ายเป็นเลือด","CT: thumbprinting · histology: surface epithelium ฝ่อ crypt ยังอยู่"]},
 nec:{n:"Necrotizing enterocolitis",c:"#3E6FB0",ring:[[76,222,28]],sb:"#BFD0EA",R:["ทารกคลอดก่อนกำหนด กินนมผง · เริ่มเมื่อเริ่มให้นม","necrosis ที่ terminal ileum และ colon ส่วนต้น","pneumatosis intestinalis, portal venous gas, free air","ภาวะฉุกเฉินทางเดินอาหารที่พบบ่อยที่สุดในทารกแรกเกิด"]}};
function isD(){const d=IS[ST.is];const sma="#9DB8DE",ima="#E8B98C";
 let b=colonMap(0,6,1,{seg:{ti:sma,cecum:sma,asc:sma,hep:sma,trans:sma,spl:ima,desc:ima,sig:ima,rect:"#E8D6A8"},sb:d.sb||"#C5D6EE",ring:d.ring});
 b+=`<rect x="8" y="324" width="12" height="12" rx="3" style="fill:${sma}"/>`+T(24,334,"SMA",{a:"start",c:"s"})+`<rect x="70" y="324" width="12" height="12" rx="3" style="fill:${ima}"/>`+T(86,334,"IMA",{a:"start",c:"s"})+`<rect x="130" y="324" width="12" height="12" rx="3" style="fill:#E8D6A8"/>`+T(146,334,"iliac/pudendal",{a:"start",c:"s"});
 b+=iPanel(340,8,294,d.n,"",d.R,d.c);
 const y0=IPH+22;b+=T(340,y0,"ความลึกของการตาย",{a:"start",c:"bh"});[["Mucosal","ไม่ลึกกว่า muscularis mucosae"],["Mural","mucosa + submucosa"],["Transmural","ทุกชั้น · มักจากอุดหลอดเลือดเฉียบพลัน"]].forEach(([n,s],i)=>b+=T(340,y0+22+i*20,n,{a:"start",c:"bh"})+T(430,y0+22+i*20,s,{a:"start",c:"s m"}));
 return ESVG(b,`0 0 640 ${Math.max(344,y0+76)}`)}

/* ---------- 10. angiodysplasia & other ---------- */
const AO={angio:{n:"Angiodysplasia",c:"#C2334A",o:{dots:[[64,236,"#C2334A",5],[70,212,"#C2334A",4],[60,190,"#C2334A",4]],ring:[[64,214,30,"#C2334A"]]},R:["หลอดเลือดใต้ mucosa ขยาย ผนังบาง คดเคี้ยว","cecum / colon ขวา (แรงตึงผนังสูงสุด) · อายุ > 60","เป็น ~20% ของเลือดออกทางเดินอาหารส่วนล่างครั้งใหญ่ในผู้สูงอายุ","สัมพันธ์ ESRD, von Willebrand, aortic stenosis (Heyde)"]},
 sibo:{n:"Small intestinal bacterial overgrowth",c:"#2F8A78",o:{sb:"#A9D8C8"},R:["กรดต่ำ (achlorhydria, PPI) · blind loop/adhesion/fistula · dysmotility · IgA deficiency","ท้องอืด แก๊ส ท้องเสียเป็นน้ำ · B12 ↓ (แบคทีเรียแย่ง)","ตรวจ carbohydrate breath test หรือเพาะเชื้อจาก small bowel"]},
 short:{n:"Short bowel syndrome",c:"#8C6D46",o:{seg:{ti:"#BBB"},sb:"#D8D2C8"},R:["ตัดลำไส้เล็กออกมาก (Crohn, มะเร็ง, บาดเจ็บ, volvulus)","ileum ส่วนปลายหาย → bile salt และไขมันดูดซึมไม่ได้","ท้องเสียหลังอาหาร ขาดน้ำ น้ำหนักลด ซีด · นิ่ว calcium oxalate"]},
 proct:{n:"Proctitis",c:"#7A5BC7",o:{seg:{rect:"#7A5BC7"}},R:["อักเสบของ rectal mucosa","ติดเชื้อ (gonorrhea, chlamydia, HSV, CMV, Shigella), IBD, ฉายแสง","tenesmus เลือดออก ปวดทวาร"]}};
function aoD(){const d=AO[ST.ao];let b=colonMap(0,6,1,d.o);b+=iPanel(340,8,294,d.n,"",d.R,d.c);
 if(ST.ao==="angio"){const y0=IPH+22;b+=T(340,y0,"ใต้กล้อง",{a:"start",c:"bh"});b+=wallX(340,y0+10,220,100,{id:101,lab:false})+[0,1,2].map(i=>`<ellipse cx="${380+i*60}" cy="${y0+10+30}" rx="18" ry="9" style="fill:${GI.blood};stroke:#7A1020"/>`).join("")}
 return ESVG(b,`0 0 640 ${Math.max(340,ST.ao==="angio"?IPH+150:IPH+20)}`)}

/* ---------- 11. colonic polyps ---------- */
const PO={hyp:{n:"Hyperplastic polyp",c:"#2F8A78",shape:"small",risk:0,R:["พบบ่อยที่สุด · เล็ก มักอยู่ rectosigmoid","crypt ส่วนบนหยักเป็นฟันเลื่อย (serrated) · ฐาน crypt ปกติ","ไม่มี malignant potential (ต้องแยกจาก sessile serrated)"]},
 tub:{n:"Tubular adenoma",c:"#C7892B",shape:"ped",risk:1,R:["neoplastic: มี dysplasia (นิวเคลียสยาว เข้ม ซ้อน)","มักเล็ก มีก้าน (pedunculated) · tubular glands","ทาง chromosomal instability: APC → KRAS"]},
 vil:{n:"Villous adenoma",c:"#C2334A",shape:"vil",risk:2,R:["ใหญ่ ไม่มีก้าน (sessile) ผิวเป็นนิ้วยาว","มีมะเร็งแฝงบ่อยกว่า tubular (สัมพันธ์ขนาดใหญ่)","\"villous is villainous\""]},
 ssl:{n:"Sessile serrated lesion",c:"#7A5BC7",shape:"flat",risk:2,R:["ลักษณะคล้าย hyperplastic แต่ serrated ถึงฐาน crypt + crypt ขยายแบนข้าง","colon ขวา · ไม่มี cytologic dysplasia แบบ adenoma","CIMP → MLH1 ถูก methylate → MSI · BRAF mutation"]},
 ham:{n:"Hamartomatous (juvenile / PJ)",c:"#3E6FB0",shape:"ped",risk:0,R:["juvenile: ก้านยาว ผิวเรียบสีแดง gland ขยายเป็น cyst · เด็ก < 5 ปี · เลือดออกทางทวาร","PJ: กิ่งก้านของ smooth muscle แทรก","เดี่ยว ๆ ไม่เสี่ยง · เป็นกลุ่มอาการ (syndromic) เสี่ยงมะเร็ง"]},
 inf:{n:"Inflammatory pseudopolyp",c:"#8C6D46",shape:"small",risk:0,R:["เกาะ mucosa ที่งอกใหม่ระหว่างแผลใน IBD","ไม่ใช่ neoplasm"]}};
function polypShape(x,y,sh,c){let b=`<path d="M${x-150},${y} H${x+150}" style="stroke:${GI.mucD};stroke-width:10;stroke-linecap:round"/><path d="M${x-150},${y} H${x+150}" style="stroke:${GI.muc};stroke-width:7;stroke-linecap:round"/>`;
 if(sh==="small")b+=`<path d="M${x-22},${y} Q${x},${y-30} ${x+22},${y}Z" style="fill:${GI.muc};stroke:${GI.mucD};stroke-width:1.4"/>`;
 if(sh==="ped")b+=`<path d="M${x-8},${y} L${x-6},${y-50} M${x+8},${y} L${x+6},${y-50}" style="stroke:${GI.mucD};stroke-width:2"/><rect x="${x-6}" y="${y-52}" width="12" height="52" style="fill:${GI.muc}"/>`+`<path d="${sm([[x-36,y-62],[x-24,y-98],[x+4,y-110],[x+34,y-92],[x+38,y-60],[x,y-48]])}" style="fill:${c};stroke:${GI.mucD};stroke-width:1.6"/>`;
 if(sh==="vil"){b+=`<path d="M${x-90},${y} Q${x},${y-40} ${x+90},${y}Z" style="fill:${c};opacity:.8"/>`;for(let i=0;i<14;i++){const fx=x-80+i*12.3,fh=24+Math.sin(i*.6)*10+(i>3&&i<10?18:0);b+=`<path d="M${fx},${y-6} q2,${-fh} 6,${-fh} q4,0 4,${fh}" style="fill:${c};stroke:${GI.mucD};stroke-width:1"/>`}}
 if(sh==="flat")b+=`<path d="M${x-80},${y} C${x-70},${y-22} ${x+70},${y-22} ${x+80},${y}Z" style="fill:${c};stroke:${GI.mucD};stroke-width:1.4;opacity:.85"/>`+`<path d="M${x-60},${y-14} q60,-10 120,0" style="fill:none;stroke:#E9D9A0;stroke-width:5;opacity:.8"/>`+TD(x,y-26,"mucus cap",{s:9.5});
 return b}
function poD(){const d=PO[ST.po];let b=`<rect x="8" y="8" width="300" height="170" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+polypShape(158,150,d.shape,d.c)+T(22,30,d.n,{a:"start",c:"bh"});
 b+=iPanel(326,8,308,d.n.split(" (")[0],"",d.R,d.c);
 const y0=Math.max(196,IPH+20);b+=T(8,y0+14,"ความเสี่ยงเป็นมะเร็ง (สูงขึ้นเมื่อ: ขนาด > 1 cm · villous · high-grade dysplasia)",{a:"start",c:"bh"});
 Object.entries(PO).forEach(([k,v],i)=>{const x=8+i*105,on=k===ST.po,lvl=["ไม่เสี่ยง","neoplastic","สูงกว่า"][v.risk];b+=`<rect x="${x}" y="${y0+26}" width="100" height="54" rx="10" style="fill:color-mix(in srgb,${v.c} ${on?28:8}%,var(--sb-surface));stroke:${on?v.c:"var(--sb-line)"};stroke-width:${on?2:1}"/>`+T(x+50,y0+46,v.n.split(" ")[0],{c:"s"})+T(x+50,y0+66,lvl,{c:"bh"})});
 return ESVG(b,`0 0 640 ${y0+88}`)}

/* ---------- 12. polyposis syndromes ---------- */
const PS={fap:{n:"Familial adenomatous polyposis",g:"APC (5q21) · AD",c:"#C2334A",dots:polypDots(["cecum","asc","trans","desc","sig","rect","hep","spl"],120,"#C2334A",7,2.6),R:["adenoma ≥ 100 ถึงหลายพัน เริ่มตั้งแต่วัยรุ่น (หลัง puberty) · ทุกส่วนของ colon รวม rectum","ไม่ตัด colon → มะเร็ง ~100% → prophylactic colectomy","adenoma ที่ ampulla และกระเพาะ (fundic gland polyp) · CHRPE"]},
 gard:{n:"Gardner syndrome",g:"APC · AD",c:"#C7892B",dots:polypDots(["cecum","asc","trans","desc","sig","rect"],100,"#C7892B",9,2.6),R:["FAP + osteoma (กะโหลก ขากรรไกร) + soft tissue tumor (desmoid, epidermal cyst)","ฟันเกิน/ฟันคุด · CHRPE"]},
 turcot:{n:"Turcot syndrome",g:"APC หรือ MMR",c:"#7A5BC7",dots:polypDots(["cecum","asc","trans","desc","sig"],60,"#7A5BC7",11,2.6),R:["polyposis + เนื้องอกสมอง","APC → medulloblastoma · Lynch (MMR) → glioblastoma","\"Turcot = turban\""]},
 pj:{n:"Peutz-Jeghers syndrome",g:"STK11 · AD",c:"#3E6FB0",dots:polypDots(["trans","asc"],5,"#3E6FB0",13,5).concat([[150,124,"#3E6FB0",6],[190,146,"#3E6FB0",6],[132,184,"#3E6FB0",6],[200,110,"#3E6FB0",5]]),R:["hamartoma หลายก้อน มากที่ลำไส้เล็ก · intussusception","จุดสีคล้ำที่ริมฝีปาก กระพุ้งแก้ม มือ อวัยวะเพศ","เสี่ยงมะเร็งตลอดชีวิต ~40%: colon, กระเพาะ, ลำไส้เล็ก, ตับอ่อน, เต้านม, รังไข่ · sex cord tumor ของอัณฑะ"]},
 juv:{n:"Juvenile polyposis",g:"SMAD4 / BMPR1A · AD",c:"#2F8A78",dots:polypDots(["rect","sig","desc"],14,"#2F8A78",15,4.4),R:["juvenile (hamartoma) polyp 3 ถึงหลายร้อยก้อน · เด็ก","เลือดออก ซีด · บางรายที่กระเพาะ/ลำไส้เล็ก","เสี่ยง colorectal cancer · ร่วม pulmonary AVM"]},
 map:{n:"MUTYH-associated polyposis",g:"MUTYH (base-excision repair) · AR",c:"#8C6D46",dots:polypDots(["cecum","asc","trans","desc","sig"],40,"#8C6D46",17,3),R:["adenoma < 100 · อายุมากกว่า FAP","มี hyperplastic/serrated ปน (KRAS)","duodenal adenoma · มะเร็งรังไข่ กระเพาะปัสสาวะ"]}};
function psD(){const d=PS[ST.ps];let b=colonMap(0,6,1,{dots:d.dots});b+=iPanel(334,8,300,d.n,d.g,d.R,d.c);
 if(ST.ps==="pj"){const y0=IPH+22;b+=`<g transform="translate(400,${y0})"><ellipse cx="80" cy="50" rx="62" ry="40" style="fill:${EN.skin};stroke:${EN.skinD}"/><path d="M42,60 Q80,86 118,60 Q80,74 42,60Z" style="fill:#C9707A;stroke:#9E4A54"/>`+[[54,64],[66,70],[80,72],[96,70],[108,64],[70,58],[90,58]].map(([px,py])=>dot(px,py,2.4,"#4A3626")).join("")+`</g>`+T(480,y0+108,"จุดสีคล้ำที่ริมฝีปาก",{c:"s m"})}
 return ESVG(b,`0 0 640 ${Math.max(340,ST.ps==="pj"?IPH+140:IPH+16)}`)}

/* ---------- 13. Lynch vs FAP: pedigrees ---------- */
const LY={lynch:{n:"Lynch syndrome (HNPCC)",c:"#7A5BC7",R:["MMR germline (MLH1, MSH2 บ่อยสุด; MSH6, PMS2) · AD","mutation สะสมเร็ว ~1000 เท่าที่ microsatellite → MSI-H","มะเร็ง colon อายุน้อยกว่าคนทั่วไป มักด้านขวา · polyp ไม่มาก","มะเร็งอื่น: endometrium (นอก colon พบบ่อยสุด), รังไข่, กระเพาะ, ทางเดินปัสสาวะ, ผิวหนัง","กลุ่มอาการทางพันธุกรรมของ CRC ที่พบบ่อยที่สุด (2–4% ของ CRC)"],ped:[["m",1,"CRC 44"],["f",0],["m",1,"CRC 46"],["f",0],["m",0],["f",2,"Endometrial 48"],["m",0],["f",1,"CRC 38"],["m",0],["f",3,"Ovarian 41"]]},
 fap:{n:"FAP",c:"#C2334A",R:["APC germline · AD · ~75% ถ่ายทอด ที่เหลือ de novo","polyp นับร้อยถึงพัน ตั้งแต่วัยรุ่น","มะเร็งเกือบ 100% ถ้าไม่ตัด colon","ด้านซ้ายพอ ๆ ทั่ว colon · CIN pathway"],ped:[["m",1,"CRC 35"],["f",0],["m",1,"Polyposis 19"],["f",0],["m",0],["f",1,"Polyposis 16"],["m",0],["f",0]]},
 map:{n:"MUTYH-associated polyposis",c:"#8C6D46",R:["Autosomal recessive: พ่อแม่เป็นพาหะไม่มีอาการ","พี่น้องเป็นได้ (1 ใน 4) แต่รุ่นพ่อแม่ไม่เป็น","polyp < 100 อายุมากกว่า FAP"],ped:[["m",4],["f",4],["m",1,"CRC 52"],["f",0],["m",0],["f",1,"Polyps 49"],["m",0],["f",0]]}};
function pedigree(x,y,ped,c){let b="";const sym=(px,py,sx,aff)=>{const fill=aff===1||aff===2||aff===3?c:aff===4?`url(#hatch)`:"var(--sb-surface)";
  return sx==="m"?`<rect x="${px-13}" y="${py-13}" width="26" height="26" style="fill:${fill};stroke:var(--sb-ink2);stroke-width:1.6"/>`:`<circle cx="${px}" cy="${py}" r="13" style="fill:${fill};stroke:var(--sb-ink2);stroke-width:1.6"/>`};
 b+=`<defs><pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" style="fill:var(--sb-surface)"/><path d="M0,0 V6" style="stroke:${c};stroke-width:3"/></pattern></defs>`;
 const G1=[[x+120,y+20],[x+200,y+20]],G2=[[x+60,y+110],[x+130,y+110],[x+190,y+110],[x+260,y+110]],G3=[[x+40,y+200],[x+100,y+200],[x+200,y+200],[x+260,y+200]];
 b+=`<path d="M${G1[0][0]+13},${y+20} H${G1[1][0]-13} M${x+160},${y+20} V${y+70} M${x+60},${y+70} H${x+260} M${x+60},${y+70} V${y+97} M${x+260},${y+70} V${y+97}" style="fill:none;stroke:var(--sb-ink2);stroke-width:1.4"/>`;
 b+=`<path d="M${x+73},${y+110} H${x+117} M${x+95},${y+110} V${y+160} M${x+40},${y+160} H${x+100} M${x+40},${y+160} V${y+187} M${x+100},${y+160} V${y+187} M${x+203},${y+110} H${x+247} M${x+225},${y+110} V${y+160} M${x+200},${y+160} H${x+260} M${x+200},${y+160} V${y+187} M${x+260},${y+160} V${y+187}" style="fill:none;stroke:var(--sb-ink2);stroke-width:1.4"/>`;
 const all=[...G1,...G2.slice(0,2),...G2.slice(2),...G3];const order=[G1[0],G1[1],G2[0],G2[1],G2[2],G2[3],G3[0],G3[1],G3[2],G3[3]];
 ped.concat([["m",0],["f",0]]).slice(0,10).forEach(([sx,aff,lab],i)=>{const [px,py]=order[i];b+=sym(px,py,sx,aff);if(lab)b+=T(px,py+28,lab,{c:"s"})});
 return b}
function lyD(){const d=LY[ST.ly];let b=`<rect x="8" y="8" width="320" height="268" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(22,30,"Pedigree ตัวอย่าง",{a:"start",c:"bh"});
 b+=pedigree(14,40,d.ped,d.c);b+=iPanel(340,8,294,d.n,"",d.R,d.c);
 if(ST.ly==="lynch")b+=`<rect x="8" y="288" width="626" height="54" rx="12" style="fill:color-mix(in srgb,${d.c} 9%,var(--sb-surface));stroke:color-mix(in srgb,${d.c} 40%,transparent)"/>`+T(22,310,"Amsterdam criteria \"3-2-1\"",{a:"start",c:"bh"})+T(22,330,"ญาติ ≥ 3 คนเป็นมะเร็งในกลุ่ม Lynch · ≥ 2 รุ่นติดกัน · ≥ 1 คนวินิจฉัยก่อนอายุ 50 · ไม่ใช่ FAP",{a:"start",c:"s"});
 return ESVG(b,`0 0 640 ${Math.max(ST.ly==="lynch"?350:286,IPH+16)}`)}

/* ---------- 14. adenoma–carcinoma sequence (interactive timeline) ---------- */
const AS={cin:{n:"Chromosomal instability (adenoma–carcinoma)",c:"#C2334A",steps:[["Normal colon","",""],["APC loss (2 hits)","β-catenin สะสม → Wnt ทำงาน","colon at risk"],["KRAS","growth signal · พบ 50% ของ adenoma > 1 cm","adenoma"],["SMAD4 / 18q · TP53","TGF-β ไม่ยับยั้ง · p53 หาย (70–80% ของมะเร็ง)","carcinoma"],["Invasion / metastasis","ทะลุ muscularis mucosae → lymph, ตับ","metastasis"]],k:"FAP · ~80% sporadic · มักด้านซ้าย"},
 msi:{n:"Mismatch repair / serrated (MSI · CIMP)",c:"#7A5BC7",steps:[["Normal colon","",""],["MMR loss / MLH1 methylation","germline (Lynch) หรือ CIMP (sporadic)","colon at risk"],["BRAF (serrated) · MSI","microsatellite ยืด-หด สะสม mutation","sessile serrated"],["TGFBR2, BAX","สูญเสียการยับยั้งการเจริญ + หนี apoptosis","carcinoma"],["Invasion","mucinous · lymphocyte รอบก้อน","metastasis"]],k:"Lynch · ~10–15% sporadic · มักด้านขวา"}};
function polypStage(x,y,w,k,c){const H=170,r=rng(41+k);let b=`<clipPath id="psc"><rect x="${x}" y="${y}" width="${w}" height="${H}" rx="12"/></clipPath><g clip-path="url(#psc)"><rect x="${x}" y="${y}" width="${w}" height="${H}" style="fill:${GI.lum}"/>`;
 const m0=y+70,mm=y+98,sb=y+120,mp=y+152;const cx=x+w/2;
 b+=`<rect x="${x}" y="${m0}" width="${w}" height="${mm-m0}" style="fill:${HE.col}"/><rect x="${x}" y="${mm}" width="${w}" height="3" style="fill:#C9706A"/><rect x="${x}" y="${mm+3}" width="${w}" height="${sb-mm-3}" style="fill:${GI.sub}"/><rect x="${x}" y="${sb}" width="${w}" height="${mp-sb}" style="fill:${GI.mus}"/><rect x="${x}" y="${mp}" width="${w}" height="${y+H-mp}" style="fill:${GI.ser}"/>`;
 const crypt=(gx,top,dep,dys,col)=>{let q=`<path d="M${gx-5},${top} v${dep} q5,7 10,0 v${-dep}" style="fill:${dys?`color-mix(in srgb,${col} 30%,#F6D9E3)`:"#F6D9E3"};stroke:${dys?col:HE.cyX};stroke-width:2.4"/>`;for(let j=0;j<dep/6;j++)q+=`<ellipse cx="${gx-5}" cy="${top+3+j*6}" rx="${dys?1.3:1.2}" ry="${dys?2.6:1.5}" style="fill:${dys?HE.nuD:HE.nu}"/><ellipse cx="${gx+5}" cy="${top+3+j*6}" rx="${dys?1.3:1.2}" ry="${dys?2.6:1.5}" style="fill:${dys?HE.nuD:HE.nu}"/>`;return q};
 const zone=k===0?0:k===1?24:k===2?52:64;
 for(let gx=x+10;gx<x+w;gx+=16){const inZ=Math.abs(gx-cx)<zone;if(k>=2&&inZ)continue;b+=crypt(gx,m0+2,mm-m0-6,k===1&&inZ,c)}
 if(k>=2){const ph=k===2?60:72,pw=k===2?56:70;b+=`<path d="M${cx-pw},${m0} C${cx-pw},${m0-ph} ${cx+pw},${m0-ph} ${cx+pw},${m0}Z" style="fill:color-mix(in srgb,${c} 22%,#F6D9E3);stroke:${c};stroke-width:2"/>`;
  for(let i=0;i<(k===2?14:20);i++){const a=r()*Math.PI,d=r()*.8;const gx=cx+Math.cos(a)*pw*d*.9,gy=m0-Math.sin(a)*ph*.7*d-6;b+=`<ellipse cx="${gx}" cy="${gy}" rx="6" ry="4.5" style="fill:#FBEFF3;stroke:${c};stroke-width:1.6"/>`+dot(gx-4,gy,1.3,HE.nuD)+dot(gx+4,gy,1.3,HE.nuD)}}
 if(k>=3){const deep=k===3?mp-8:mp+10;for(let i=0;i<(k===3?12:18);i++){const gx=cx-40+r()*80,gy=mm+6+r()*(deep-mm-6);b+=`<path d="${sm([[gx-7,gy],[gx-3,gy-5],[gx+6,gy-4],[gx+8,gy+2],[gx+1,gy+6],[gx-6,gy+4]])}" style="fill:#FBEFF3;stroke:${c};stroke-width:1.8"/>`}
  b+=`<path d="M${cx-46},${mm+2} C${cx-50},${deep} ${cx+50},${deep} ${cx+46},${mm+2}" style="fill:none;stroke:${c};stroke-width:1.4;stroke-dasharray:4 3"/>`}
 b+=`</g><rect x="${x}" y="${y}" width="${w}" height="${H}" rx="12" style="fill:none;stroke:var(--sb-line)"/>`;
 b+=T(x+w+6,m0+16,"mucosa",{a:"start",c:"s m"})+T(x+w+6,sb-4,"submucosa",{a:"start",c:"s m"})+T(x+w+6,mp-10,"muscularis",{a:"start",c:"s m"});
 if(k===4){b+=`<circle cx="${x+w-40}" cy="${y+40}" r="16" style="fill:#C9D6EA;stroke:#3E6FB0;stroke-width:1.6"/>`+dot(x+w-44,y+38,4,c)+dot(x+w-34,y+44,3,c)+TD(x+w-40,y+18,"lymph node",{s:9.5})+Ar(cx+30,mm+20,x+w-58,y+48,c,2,{hs:6});
  b+=`<path d="${sm([[x+20,y+22],[x+70,y+12],[x+96,y+24],[x+80,y+48],[x+30,y+50]])}" style="fill:${GI.liv};stroke:${GI.livD}"/>`+dot(x+56,y+30,5,c)+dot(x+74,y+36,4,c)+TW(x+56,y+64,"ตับ",{s:10})+Ar(cx-30,mm+20,x+84,y+44,c,2,{hs:6})}
 return b}
function asD(){const p=AS[ST.ap2],k=+ST.as;let b="";
 const x0=20,W=600,X=i=>x0+i*W/4;b+=`<path d="M${X(0)},40 H${X(4)}" style="stroke:var(--sb-line);stroke-width:6;stroke-linecap:round"/><path d="M${X(0)},40 H${X(k)}" style="stroke:${p.c};stroke-width:6;stroke-linecap:round"/>`;
 p.steps.forEach(([n,s,st],i)=>{const on=i<=k;b+=`<circle cx="${X(i)}" cy="40" r="${i===k?12:8}" style="fill:${on?p.c:"var(--sb-surface)"};stroke:${on?p.c:"var(--sb-line)"};stroke-width:2"/>`+T(X(i)+(i===0?-12:i===4?12:0),i%2?74:14,n,{c:i===k?"bh":"s m",a:i===0?"start":i===4?"end":"middle"})});
 b+=polypStage(8,96,232,k,p.c)+T(124,286,["เยื่อบุปกติ","dysplastic crypt (ยังแบน)","adenoma (polyp)","carcinoma บุกลึก","ลามไปต่อมน้ำเหลือง/ตับ"][k],{c:"bh"});
 const cur=p.steps[k];b+=`<rect x="326" y="96" width="308" height="170" rx="14" style="fill:color-mix(in srgb,${p.c} 9%,var(--sb-surface));stroke:color-mix(in srgb,${p.c} 45%,transparent)"/>`+T(342,122,p.n,{a:"start",c:"bh"})+T(342,150,"ขั้นที่ "+(k+1)+": "+cur[0],{a:"start",c:"bh"})+(cur[1]?wrapT(342,172,cur[1],46,"s",15):"")+T(342,252,p.k,{a:"start",c:"s m"});
 b+=T(8,316,"การสะสม mutation สำคัญกว่าลำดับที่แน่นอน · aspirin/NSAID (ยับยั้ง COX-2) ลดความเสี่ยง",{a:"start",c:"s m"});
 return ESVG(b,"0 0 640 326")}

/* ---------- 15. colorectal cancer ---------- */
const CR={right:{n:"มะเร็ง colon ขวา (cecum, ascending)",c:"#C7892B",seg:{cecum:"#C7892B",asc:"#C7892B"},R:["ก้อน exophytic ยื่นในลำไส้ที่กว้าง → ไม่ค่อยอุดตัน","เลือดออกแฝง → iron deficiency anemia อ่อนเพลีย น้ำหนักลด","มักเป็น MSI / serrated pathway"]},
 left:{n:"มะเร็ง colon ซ้าย (descending, sigmoid)",c:"#C2334A",seg:{desc:"#C2334A",sig:"#C2334A"},R:["ก้อนรอบวง napkin-ring (apple core บน barium) → อุดตัน","ถ่ายเปลี่ยน อุจจาระลำเล็ก ปวดเกร็ง ถ่ายเป็นเลือด","มักเป็น CIN pathway (APC)"]},
 rect:{n:"Rectal cancer",c:"#7A5BC7",seg:{rect:"#7A5BC7"},R:["rectosigmoid พบบ่อยที่สุด","hematochezia, tenesmus","rectum ส่วนล่างไม่ระบายเข้า portal → แพร่ไปปอดได้โดยข้ามตับ"]}};
function crD(){const d=CR[ST.cr];let b=colonMap(0,6,1,{seg:d.seg,ring:[[ST.cr==="right"?64:ST.cr==="left"?266:176,ST.cr==="right"?200:ST.cr==="left"?190:280,30,d.c]]});
 b+=iPanel(334,8,300,d.n,"",d.R,d.c);const y0=IPH+20;
 b+=`<rect x="334" y="${y0}" width="300" height="168" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(348,y0+22,"Screening (FA)",{a:"start",c:"bh"});
 [["ความเสี่ยงปกติ","เริ่ม 45 ปี · colonoscopy ทุก 10 ปี"],["ญาติสายตรงเป็น CRC","40 ปี หรือ 10 ปีก่อนอายุที่ญาติเป็น"],["IBD","8 ปีหลังเริ่มโรค"],["CEA","ใช้ติดตามการกลับเป็นซ้ำ ไม่ใช่คัดกรอง"]].forEach(([n,s],i)=>b+=T(348,y0+48+i*30,n,{a:"start",c:"bh"})+T(348,y0+62+i*30,s,{a:"start",c:"s m"}));
 b+=T(8,334,"Iron deficiency anemia ในชายสูงวัย/หญิงหมดประจำเดือน = มะเร็งทางเดินอาหารจนกว่าจะพิสูจน์ได้ว่าไม่ใช่",{a:"start",c:"s"});
 return ESVG(b,`0 0 640 ${Math.max(346,y0+176)}`)}

/* ================= sections ================= */
SEC.push({id:"celiac",k:"a",t:"Malabsorption & celiac disease",mm:"Celiac disease",leg:[],tools:[["cel",[["normal","Normal"],["celiac","Celiac"],["gfd","Gluten-free"]]]],draw:celD,
notes:()=>`<div class="pearl">ไตรภาค histology: <b>villous atrophy + crypt hyperplasia + intraepithelial lymphocytosis</b> · biopsy จาก duodenum ส่วนที่ 2 / jejunum ต้น ${S.r}</div>
<ul><li>Malabsorption: ท้องเสีย steatorrhea น้ำหนักลด ขาดวิตามินและแร่ธาตุ · คัดกรองไขมันในอุจจาระ (Sudan stain) ${S.fa}</li>
<li><b>Celiac disease</b>: immune-mediated ต่อ gluten (ข้าวสาลี ข้าวไรย์ ข้าวบาร์เลย์) ในผู้มีพันธุกรรมเสี่ยง · อุบัติการณ์ทั่วโลก 0.6–1% ${S.r}</li>
<li>Gliadin ทนต่อการย่อย → <b>tissue transglutaminase</b> deamidate → จับ <b>HLA-DQ2/DQ8</b> → CD4 T cell · IL-15 กระตุ้น CD8 IEL ผ่าน NKG2D–MIC-A ฆ่า enterocyte ${S.r}</li>
<li>เกือบทุกรายมี HLA-DQ2 หรือ DQ8 · ไม่มีอัลลีลนี้ช่วยตัดโรคได้ (negative predictive value) ${S.r}</li>
<li>Serology ไวที่สุด: <b>IgA anti-tTG</b> · มี anti-endomysial และ anti-deamidated gliadin · ถ้า IgA deficiency ใช้ IgG anti-tTG ${S.r} ${S.fa}</li>
<li>ผู้ใหญ่อายุ 30–60 ปี มักอาการไม่ชัด: ซีดจากขาดเหล็ก ท้องอืด อ่อนเพลีย · พบในหญิง 2 เท่า · เด็ก 6–24 เดือนหลังเริ่มอาหารที่มีกลูเตน ${S.r}</li>
<li><b>Dermatitis herpetiformis</b> พบได้ถึง 10% · สัมพันธ์ T1DM, thyroiditis, Sjögren, IgA nephropathy ${S.r}</li>
<li>รักษาด้วยงดกลูเตนเท่านั้น → อาการหาย antibody ลด histology กลับใน 6–24 เดือน ${S.r}</li>
<li>เสี่ยง <b>enteropathy-associated T-cell lymphoma</b> และ small bowel adenocarcinoma · อาการกลับมาทั้งที่งดกลูเตน → คิดถึงมะเร็งหรือ refractory sprue ${S.r}</li>
<li>FA: D-xylose test ผิดปกติ (mucosa เสีย) · มวลกระดูกลด ${S.fa}</li></ul>`});

SEC.push({id:"malabs",k:"a",t:"Lactose intolerance, pancreatic insufficiency, tropical sprue & Whipple disease",mm:"Lactose · sprue · Whipple",leg:[],tools:[["ma",[["lact","Lactose"],["panc","Pancreatic"],["trop","Tropical sprue"],["whip","Whipple"]]]],draw:malD,
notes:()=>`<div class="pearl"><b>D-xylose</b> ดูดซึมได้เองโดยไม่ต้องย่อย → ผิดปกติเมื่อ <b>mucosa</b> เสีย (celiac, sprue, Whipple) · ปกติเมื่อปัญหาอยู่ที่การย่อย (pancreas) ${S.fa}</div>
<ul><li><b>Lactase deficiency</b>: lactose ไม่ถูกย่อย → osmotic diarrhea · histology ปกติเพราะเป็นความผิดปกติทางชีวเคมี ${S.r}</li>
<li>Congenital lactase deficiency (AR) หายาก ท้องเสียระเบิดตั้งแต่ทารก · acquired พบบ่อยในคนอเมริกันพื้นเมือง แอฟริกันอเมริกัน จีน · หรือตามหลังลำไส้ติดเชื้อ ${S.r}</li>
<li>Lactose ถูกแบคทีเรียหมัก → แก๊ส stool pH ต่ำ · hydrogen breath test เพิ่ม &gt; 20 ppm ${S.fa}</li>
<li><b>Pancreatic insufficiency</b> (chronic pancreatitis, cystic fibrosis, มะเร็งอุดท่อ): ขาดการย่อยใน lumen → ไขมันและ vit A, D, E, K, B12 · fecal elastase ↓ ${S.fa} ${S.r}</li>
<li><b>Tropical sprue</b>: ผู้อยู่/เดินทางในเขตร้อน · คล้าย celiac แต่ตอบสนองต่อ antibiotic · folate ↓ แล้ว B12 ↓ → megaloblastic anemia ${S.fa}</li>
<li><b>Whipple disease</b>: Tropheryma whipplei (actinomycete) · macrophage ที่เต็มไปด้วยแบคทีเรียสะสมใน lamina propria และต่อมน้ำเหลือง → อุด lymphatic → malabsorption ${S.r}</li>
<li>Whipple: foamy macrophage <b>PAS ⊕ diastase-resistant</b> · acid-fast ⊖ (ต่างจาก mycobacterium) · villi กว้าง ผิว mucosa ขรุขระ ${S.r}</li>
<li>Whipple พบมากในชายผิวขาว (เกษตรกร) · triad ท้องเสีย น้ำหนักลด ปวดข้อ · อาการนอกลำไส้ (ข้อ ไข้ ต่อมน้ำเหลือง สมอง หัวใจ) อาจนำมาก่อนเป็นปี ${S.r}</li>
<li>FA mnemonic: Whipple มี <b>C</b>ardiac, <b>A</b>rthralgia, <b>N</b>eurologic · ท้องเสียมาทีหลัง ${S.fa}</li></ul>`});

SEC.push({id:"ibd",k:"b",t:"Inflammatory bowel disease: Crohn disease vs ulcerative colitis",mm:"Crohn vs UC",leg:[],tools:[["ibd",[["crohn","Crohn"],["uc","Ulcerative colitis"]]],["ux",[["proct","UC: proctitis"],["left","UC: left-sided"],["pan","UC: pancolitis"]]]],draw:ibdD,
notes:()=>`<div class="pearl">Crohn = <b>skip + transmural + granuloma</b> · UC = <b>rectum เสมอ ต่อเนื่องขึ้นไป + mucosa</b> ${S.r}</div>
<ul><li>IBD เกิดจากปฏิสัมพันธ์ของพันธุกรรม (เช่น NOD2 ใน Crohn), ภูมิคุ้มกันของ mucosa และ microbiota ที่ผิดปกติ · เริ่มบ่อยช่วงวัยรุ่นถึงอายุ 20 ต้น ๆ ${S.r}</li>
<li><b>Crohn</b>: terminal ileum + cecum บ่อยสุด แต่เป็นได้ทุกที่ · skip lesion · ulcer ลึกเป็นร่อง → cobblestone · ผนังหนาแข็ง → stricture · creeping fat ${S.r}</li>
<li>Crohn microscopic: crypt abscess, crypt distortion, <b>noncaseating granuloma ~35%</b> · fissure ลึกกลายเป็น fistula (ลำไส้–กระเพาะปัสสาวะ–ช่องคลอด–ผิวหนัง) ${S.r}</li>
<li>Crohn ที่ ileum กว้าง → ขาด B12, bile salt · บุหรี่เป็นปัจจัยเสี่ยงชัดเจน · ~20% มาเหมือนไส้ติ่งอักเสบ ${S.r}</li>
<li><b>UC</b>: เริ่มที่ rectum ลามขึ้นต่อเนื่อง (proctitis → pancolitis) · backwash ileitis ได้ · pseudopolyp · ไม่หนา ไม่ stricture ${S.r}</li>
<li>UC: อาการถ่ายเป็นเลือดมีมูก ปวดเบ่ง · รุนแรง → <b>toxic megacolon</b> เสี่ยงทะลุ · ตัด colon หายขาดทางลำไส้ ${S.r}</li>
<li>Extraintestinal: ข้ออักเสบ/spondylitis, erythema nodosum, pyoderma gangrenosum, uveitis, aphthous · UC สัมพันธ์ <b>PSC</b> และ p-ANCA · Crohn: ASCA ⊕ ${S.fa}</li>
<li>Crohn: นิ่ว calcium oxalate (ไขมันจับ Ca → oxalate ดูดซึมมาก) และนิ่วถุงน้ำดี ${S.fa}</li>
<li>เสี่ยงมะเร็งเพิ่มหลังเป็นโรค 8–10 ปี มากใน pancolitis · เริ่มส่องกล้องเฝ้าระวังที่ ~8 ปี (ถ้ามี PSC เริ่มทันที) ${S.r}</li>
<li>Fecal calprotectin ใช้ติดตามการอักเสบและแยกจาก IBS ${S.fa}</li></ul>`});

SEC.push({id:"ibs-mc",k:"b",t:"Microscopic colitis & irritable bowel syndrome",mm:"Microscopic colitis · IBS",leg:[],tools:[["mc",[["coll","Collagenous"],["lymph","Lymphocytic"],["ibs","IBS"]]]],draw:mcD,
notes:()=>`<ul><li><b>Microscopic colitis</b> = collagenous colitis + lymphocytic colitis · ท้องเสียเป็นน้ำเรื้อรังไม่มีเลือด น้ำหนักไม่ลด · ส่องกล้องดูปกติ ต้อง biopsy ${S.r}</li>
<li>Collagenous: แถบ collagen ใต้ epithelium หนา + IEL เพิ่ม · หญิงวัยกลางคน–สูงอายุ ${S.r}</li>
<li>Lymphocytic: collagen ปกติ · IEL มากกว่า (มัก &gt; 1 ต่อ 5 colonocyte) · สัมพันธ์ celiac และโรค autoimmune · NSAID/PPI ทำให้เกิดภาพคล้ายกัน ${S.r}</li>
<li><b>IBS</b>: ปวดท้องเรื้อรังเป็นซ้ำ ท้องอืด ระบบขับถ่ายเปลี่ยน โดย<b>ไม่มีพยาธิสภาพ</b>ทั้งจากกล้องและ histology ${S.r}</li>
<li>Rome IV: ปวดท้องซ้ำ ๆ สัมพันธ์ ≥ 2 ข้อ: เกี่ยวกับการถ่าย · ความถี่เปลี่ยน · ลักษณะอุจจาระเปลี่ยน ${S.fa}</li>
<li>กลไก: ความเครียด อาหาร microbiome ความไวของระบบประสาทลำไส้ motility ผิดปกติ · บางรายเริ่มหลังลำไส้ติดเชื้อ · bile acid malabsorption ใน IBS-D ${S.r}</li>
<li>พบมากอายุ 20–40 ปี เพศหญิง · ความชุก 5–10% · ต้องตัดโรคอื่นก่อน (ติดเชื้อ IBD) ${S.r}</li>
<li>สัมพันธ์ fibromyalgia, วิตกกังวล, ซึมเศร้า · รักษาแรกคือปรับวิถีชีวิตและอาหาร ${S.fa}</li></ul>`});

SEC.push({id:"appendicitis",k:"b",t:"Acute appendicitis",mm:"Appendicitis",leg:[],ctrl:()=>sl("ap","ชั่วโมงหลังเริ่มปวด",0,48,1,"ชม."),wire:()=>wireSl(),draw:apD,
notes:()=>`<div class="pearl">เลื่อนเวลา: ปวดเริ่ม<b>รอบสะดือ</b> (visceral afferent T8–T10) → ย้ายมา <b>RLQ / McBurney</b> เมื่ออักเสบถึง serosa ระคาย parietal peritoneum ${S.fa} ${S.r}</div>
<ul><li>พบบ่อยในวัยรุ่นและผู้ใหญ่ตอนต้น · ความเสี่ยงตลอดชีวิต 7% · ชายมากกว่าเล็กน้อย ${S.r}</li>
<li>เริ่มจาก<b>ความดันในไส้ติ่งสูง</b>จนเลือดดำไหลออกไม่ได้ · 50–80% มีสิ่งอุดตัน: <b>fecalith</b>, นิ่ว, เนื้องอก, พยาธิเข็มหมุด · lymphoid hyperplasia หลังติดไวรัส ${S.r}</li>
<li>FA: ผู้ใหญ่ fecalith · เด็ก lymphoid hyperplasia → closed-loop obstruction ${S.fa}</li>
<li>วินิจฉัยทางพยาธิ: neutrophil แทรกถึง <b>muscularis propria</b> (แค่ mucosa ไม่จำเพาะ) ${S.r}</li>
<li>ลำดับ: acute → suppurative (abscess ในผนัง) → gangrenous → rupture → peritonitis ${S.r}</li>
<li>อาการ: ปวดรอบสะดือแล้วย้าย RLQ, คลื่นไส้อาเจียน ไข้ต่ำ WBC สูง · McBurney point: 1/3 จาก ASIS ขวาไปสะดือ ${S.r} ${S.fa}</li>
<li>Signs: psoas, obturator, Rovsing (กด LLQ ปวด RLQ), guarding, rebound ${S.fa}</li>
<li>ไส้ติ่งหลัง cecum → ปวดสีข้าง/เชิงกราน · เด็กเล็กและผู้สูงอายุอาการไม่ชัด · แยกจาก mesenteric lymphadenitis (Yersinia), salpingitis, ectopic pregnancy, mittelschmerz, Meckel ${S.r}</li>
<li>รักษา: appendectomy ${S.fa}</li></ul>`});

SEC.push({id:"diverticula",k:"c",t:"Diverticula: diverticulosis, diverticulitis, Zenker & Meckel",mm:"Diverticula · Meckel",leg:[],tools:[["dv",[["osis","Diverticulosis"],["itis","Diverticulitis"],["zenker","Zenker"],["meckel","Meckel"]]]],draw:divD,
notes:()=>`<div class="pearl"><b>True</b> diverticulum มีครบทุกชั้น (Meckel) · <b>false</b> มีแค่ mucosa + submucosa ดันผ่านจุดอ่อนของกล้ามเนื้อ (colon, Zenker) ${S.fa} ${S.r}</div>
<ul><li>Colon diverticulum เกิดตรงที่ vasa recta แทงผ่านชั้น circular muscle · colon มีแค่ taeniae coli ไม่มีชั้น longitudinal คลุมเต็ม → จุดอ่อน ${S.r}</li>
<li>ความดันในลำไส้สูงจาก peristalsis ที่แรงเกิน + อาหารกากน้อย · sigmoid บ่อยสุด · ชาวตะวันตกอายุ &gt; 60 ปีเกือบ 50% ${S.r}</li>
<li>เอเชียและแอฟริกามักเป็น colon ด้านขวา (ต่างจากตะวันตก) ${S.r}</li>
<li>ส่วนใหญ่ไม่มีอาการ · ~20% ปวดเกร็ง ท้องผูกสลับท้องเสีย · <b>เลือดออกไม่เจ็บ</b> ${S.r} ${S.fa}</li>
<li><b>Diverticulitis</b>: diverticulum อุดตันแล้วอักเสบ · ผนังบางทะลุง่าย → abscess, sinus tract, peritonitis · ปวด LLQ ไข้ WBC สูง ${S.r} ${S.fa}</li>
<li>แทรกซ้อน: colovesical fistula (pneumaturia), stricture · ไม่ซับซ้อนรักษาประคับประคอง ซับซ้อนให้ antibiotic ${S.fa}</li>
<li><b>Zenker</b>: false diverticulum ที่ <b>Killian triangle</b> · กลืนลำบาก สำรอกอาหารเก่า ลมหายใจเหม็น สำลัก · ชายสูงวัย ${S.fa}</li>
<li><b>Meckel</b>: true diverticulum จาก vitelline duct ไม่ปิด · ความผิดปกติแต่กำเนิดที่พบบ่อยที่สุด · ด้าน antimesenteric ของ ileum ${S.r}</li>
<li>Meckel อาจมี gastric/pancreatic mucosa → แผล เลือดออก ปวดคล้ายไส้ติ่ง · มีอาการตลอดชีวิตเพียง ~4% · ตรวจด้วย <b>⁹⁹ᵐTc-pertechnetate</b> ${S.r} ${S.fa}</li></ul>`});

SEC.push({id:"hirschsprung",k:"c",t:"Hirschsprung disease",mm:"Hirschsprung",leg:[],tools:[["hs",[["norm","Normal"],["short","Short-segment"],["long","Long-segment"]]]],draw:hsD,
notes:()=>`<ul><li>Congenital aganglionic megacolon: <b>neural crest cells หยุดเคลื่อน</b>ก่อนถึงปลายลำไส้ (ไล่จาก cecum ไป rectum) → ไม่มีทั้ง Meissner และ Auerbach plexus ${S.r}</li>
<li>ส่วนที่ไม่มี ganglion หดค้าง ไม่มี peristalsis → อุดตันเชิงหน้าที่ · ส่วนต้นโป่ง (megacolon) · <b>rectum เกี่ยวข้องเสมอ</b> ${S.r}</li>
<li>~1 ใน 5000 การเกิด · ชายมากกว่า · ~10% อยู่ใน Down syndrome ${S.r}</li>
<li>Loss-of-function ของ <b>RET</b> พบในส่วนใหญ่ของรายที่ถ่ายทอดในครอบครัว และ ~15% ของ sporadic · EDNRB/EDN3 ก็เกี่ยวข้อง ${S.r}</li>
<li>อาการ: ไม่ถ่าย meconium ใน 48 ชม. → ท้องอืด อาเจียนน้ำดี ท้องผูกเรื้อรัง · ตรวจทวาร rectum ว่างแล้วอุจจาระพุ่ง (squirt sign) ${S.fa}</li>
<li>วินิจฉัย: <b>rectal suction biopsy</b> ไม่พบ ganglion cell · ภาพถ่ายเห็น transition zone ${S.fa}</li>
<li>อันตราย: enterocolitis, เสียสมดุลน้ำเกลือแร่, ทะลุ · รักษาโดยตัดส่วนที่ไม่มี ganglion แล้วต่อเข้ากับ rectum ${S.r}</li>
<li>Megacolon ที่เกิดภายหลัง: Chagas (ทำลาย ganglion เหมือนกัน), อุดตันจากก้อน, UC (toxic megacolon) ${S.r}</li></ul>`});

SEC.push({id:"obstruction",k:"c",t:"Intestinal obstruction: intussusception, volvulus, malrotation & ileus",mm:"Volvulus · intussusception",leg:[],tools:[["ob",[["intus","Intussusception"],["sig","Sigmoid volvulus"],["mid","Malrotation"],["sbo","SBO"],["ileus","Ileus"]]]],draw:obD,
notes:()=>`<ul><li>สาเหตุอุดตันเชิงกลหลัก 4 อย่าง: hernia, <b>adhesion</b>, volvulus, intussusception ${S.r}</li>
<li><b>Adhesion</b> หลังผ่าตัด/peritonitis เป็นสาเหตุบ่อยที่สุดของ SBO · สร้างวงปิดให้ลำไส้ไปติด (internal hernia) ${S.r} ${S.fa}</li>
<li><b>Volvulus</b>: ลำไส้บิดรอบ mesentery → ทั้งอุดตันและขาดเลือด · sigmoid บ่อยสุด ตามด้วย cecum, small bowel, กระเพาะ ${S.r}</li>
<li>Sigmoid volvulus: ผู้สูงอายุ · coffee bean sign · midgut volvulus: ทารก · gastric volvulus: paraesophageal hernia ${S.fa}</li>
<li><b>Malrotation</b>: midgut หมุนผิด → small bowel ด้านขวา colon ด้านซ้าย + Ladd bands → duodenal obstruction, volvulus ${S.fa}</li>
<li><b>Intussusception</b>: ส่วนต้นถูก peristalsis ดันมุดเข้าส่วนปลาย ลาก mesentery ตาม → อุดตันและ infarct · สาเหตุอุดตันบ่อยสุดในเด็ก &lt; 2 ปี ${S.r}</li>
<li>เด็ก: ส่วนใหญ่ idiopathic (Peyer patch โตหลังติดไวรัส, rotavirus vaccine) · ผู้ใหญ่: มีก้อนนำ ต้องผ่าตัด · CF ~1% เกิดได้ ${S.r}</li>
<li>Intussusception: ปวดเป็นพัก ๆ ถ่าย currant jelly ก้อนไส้กรอก target sign · enema ทั้งวินิจฉัยและรักษา ${S.fa} ${S.r}</li>
<li><b>Ileus</b>: ลำไส้ไม่เคลื่อนโดยไม่มีสิ่งอุด · หลังผ่าตัด opioid hypokalemia sepsis · ไม่มี transition zone ${S.fa}</li>
<li>SBO: X-ray ยืนเห็น air-fluid levels · รักษา NG decompression, ให้น้ำ, bowel rest ${S.fa}</li></ul>`});

SEC.push({id:"ischemia",k:"c",t:"Ischemic bowel disease",mm:"Mesenteric ischemia",leg:[],tools:[["is",[["ami","Acute mesenteric"],["cmi","Chronic mesenteric"],["colonic","Colonic ischemia"],["nec","NEC"]]]],draw:isD,
notes:()=>`<div class="pearl">Watershed = ปลายของสองระบบหลอดเลือด: <b>splenic flexure</b> (SMA/IMA) และ <b>rectosigmoid</b> (IMA/iliac-pudendal) ${S.r}</div>
<ul><li>Collateral ระหว่าง arcade ทำให้ทนการตีบช้า ๆ ได้ · การอุดเฉียบพลันของหลอดเลือดใหญ่ทำให้ลำไส้ตายหลายเมตร ${S.r}</li>
<li>สาเหตุอุดเฉียบพลัน: thrombosis บน atherosclerosis ที่ต้นหลอดเลือด, embolus จากหัวใจ/aorta · mesenteric venous thrombosis จาก hypercoagulable ${S.r}</li>
<li>Hypoperfusion โดยไม่อุด: หัวใจล้มเหลว ช็อก ขาดน้ำ ยาหดหลอดเลือด ${S.r}</li>
<li>ความเสียหายมาก<b>ช่วง reperfusion</b>: LPS รั่ว อนุมูลอิสระ neutrophil ${S.r}</li>
<li>Histology: <b>surface epithelium ฝ่อ แต่ crypt ยังอยู่</b> (เส้นเลือดฝอยไหลจาก crypt ขึ้นผิวแล้ววกกลับ) ${S.r}</li>
<li><b>Acute mesenteric ischemia</b>: มัก embolus ที่ SMA · ปวดไม่สมกับตรวจร่างกาย · ปัจจัย: AF, MI ใหม่, PAD, CHF ${S.fa}</li>
<li><b>Chronic mesenteric ischemia</b>: intestinal angina ปวดหลังอาหาร กลัวกิน น้ำหนักลด ${S.fa}</li>
<li><b>Colonic ischemia</b>: อายุ &gt; 70 · ปวดเกร็ง LLQ อยากถ่าย แล้วถ่ายเป็นเลือด · ~10% ต้องผ่าตัด ${S.r} · thumbprint sign ${S.fa}</li>
<li><b>NEC</b>: ภาวะฉุกเฉินทางเดินอาหารที่พบบ่อยที่สุดในทารกแรกเกิด โดยเฉพาะคลอดก่อนกำหนด เริ่มเมื่อเริ่มให้นม · pneumatosis intestinalis ${S.r} ${S.fa}</li></ul>`});

SEC.push({id:"angio-other",k:"c",t:"Angiodysplasia, bacterial overgrowth, short bowel & proctitis",mm:"Angiodysplasia · SIBO",leg:[],tools:[["ao",[["angio","Angiodysplasia"],["sibo","SIBO"],["short","Short bowel"],["proct","Proctitis"]]]],draw:aoD,
notes:()=>`<ul><li><b>Angiodysplasia</b>: หลอดเลือดใน mucosa/submucosa ขยาย ผนังบาง คด · cecum และ colon ขวา · อายุ &gt; 60 ${S.r}</li>
<li>ความชุก &lt; 1% แต่เป็น ~20% ของเลือดออกส่วนล่างครั้งใหญ่ในผู้สูงอายุ · ตั้งแต่ออกเรื้อรังเป็นพัก ๆ ถึงออกมาก ${S.r}</li>
<li>กลไก: การบีบตัวกด submucosal vein ซ้ำ ๆ → ขยายคด · cecum กว้างที่สุดแรงตึงผนังสูงสุด ${S.r}</li>
<li>สัมพันธ์ ESRD, von Willebrand disease, aortic stenosis · ยืนยันด้วย angiography ${S.fa} · Heyde syndrome ได้ประโยชน์จากเปลี่ยน aortic valve ${S.h}</li>
<li><b>SIBO</b>: กรดต่ำ (PPI), blind loop/adhesion, dysmotility, IgA deficiency · ท้องอืด ท้องเสีย ขาด B12 · ตรวจ breath test ${S.fa}</li>
<li><b>Short bowel syndrome</b>: หลังตัดลำไส้มาก · ileum ปลายหาย → bile salt/ไขมันดูดซึมไม่ได้ ท้องเสีย นิ่ว oxalate ${S.fa}</li>
<li><b>Proctitis</b>: ติดเชื้อ (gonorrhea, chlamydia, HSV, CMV), IBD, ฉายแสง · tenesmus เลือดออก ${S.fa}</li>
<li>Radiation enteritis: ระยะเฉียบพลันเบื่ออาหาร ปวดเกร็ง ท้องเสีย · เรื้อรังเป็น colitis · มี radiation fibroblast ${S.r}</li></ul>`});

SEC.push({id:"polyps",k:"d",t:"Colonic polyps: hyperplastic, adenomatous, serrated & hamartomatous",mm:"Colonic polyps",leg:[],tools:[["po",[["hyp","Hyperplastic"],["tub","Tubular"],["vil","Villous"],["ssl","Sessile serrated"],["ham","Hamartoma"],["inf","Pseudopolyp"]]]],draw:poD,
notes:()=>`<div class="pearl">ขนาดคือปัจจัยที่สัมพันธ์กับมะเร็งมากที่สุด · adenoma &lt; 1 cm แทบไม่มีมะเร็ง ${S.r} · villous ร้ายกว่า tubular ${S.fa}</div>
<ul><li>Polyp แบ่ง nonneoplastic (hyperplastic, inflammatory, hamartomatous) กับ neoplastic (adenoma, serrated) ${S.r}</li>
<li><b>Hyperplastic</b>: พบบ่อยที่สุด มักพบช่วงอายุ 50–70 (ทศวรรษที่ 6–7) · เซลล์ผลัดช้าทำให้ผิวเป็นฟันเลื่อย · ไม่มี malignant potential ${S.r}</li>
<li><b>Adenoma</b>: นิยามด้วย <b>dysplasia</b> (นิวเคลียสเข้ม ยาว ซ้อน) · ~30% ของคนตะวันตกเมื่ออายุ 60 · ส่วนใหญ่ไม่กลายเป็นมะเร็ง ${S.r}</li>
<li>Tubular (เล็ก มีก้าน) · villous (ใหญ่ sessile) · tubulovillous ปนกัน ${S.r}</li>
<li><b>Sessile serrated lesion</b>: คล้าย hyperplastic แต่หยักถึงฐาน crypt, crypt ขยาย แตกข้าง · colon ขวา · ไม่มี dysplasia แบบ adenoma แต่มี malignant potential ${S.r}</li>
<li>Serrated pathway: CIMP → MLH1 ถูกปิด → MSI + BRAF · ~20% ของ sporadic CRC ${S.fa}</li>
<li>Intramucosal carcinoma (บุก lamina propria) แทบไม่แพร่เพราะ mucosa ไม่มี lymphatic → ตัด polyp หายขาด · ทะลุ muscularis mucosae = invasive ${S.r}</li>
<li><b>Juvenile polyp</b>: hamartoma เด็ก &lt; 5 ปี ที่ rectum → เลือดออก · gland เป็น cyst · เดี่ยวไม่เสี่ยง ${S.r}</li>
<li>Inflammatory pseudopolyp ใน IBD และ solitary rectal ulcer syndrome ${S.r}</li></ul>`});

SEC.push({id:"polyposis",k:"d",t:"Polyposis syndromes: FAP, Gardner, Turcot, Peutz-Jeghers, juvenile & MUTYH",mm:"Polyposis syndromes",leg:[],tools:[["ps",[["fap","FAP"],["gard","Gardner"],["turcot","Turcot"],["pj","Peutz-Jeghers"],["juv","Juvenile"],["map","MUTYH"]]]],draw:psD,
notes:()=>`<ul><li><b>FAP</b>: AD · APC บน 5q21 (two-hit) · ~75% ถ่ายทอด ที่เหลือ de novo · adenoma อย่างน้อย 100 ถึงหลายพัน เริ่มตั้งแต่วัยรุ่น (หลัง puberty) ทุกส่วนรวม rectum ${S.r} ${S.fa}</li>
<li>FAP ไม่ผ่าตัด → มะเร็งเกือบ 100% → <b>prophylactic colectomy</b> · ยังเสี่ยง adenoma ที่ ampulla และกระเพาะ · CHRPE ตรวจได้ตั้งแต่เกิด ${S.r}</li>
<li><b>Gardner</b>: FAP + osteoma (กะโหลก ขากรรไกร), soft tissue tumor, CHRPE, ฟันเกิน ${S.fa}</li>
<li><b>Turcot</b>: FAP หรือ Lynch + เนื้องอกสมอง (medulloblastoma, glioma) · "Turban" ${S.fa}</li>
<li><b>Peutz-Jeghers</b>: AD · <b>STK11</b> · hamartoma ใหญ่มีก้านมาก<b>ที่ลำไส้เล็ก</b> + จุดสีคล้ำที่ริมฝีปาก กระพุ้งแก้ม มือ อวัยวะเพศ · intussusception ${S.r}</li>
<li>PJ: polyp มีกิ่ง smooth muscle แทรก · เสี่ยงมะเร็งตลอดชีวิต ~40% (colon, ตับอ่อน, เต้านม, ปอด, รังไข่, มดลูก, sex cord tumor) ${S.r}</li>
<li><b>Juvenile polyposis</b>: AD · juvenile polyp 3 ถึงหลายร้อยก้อน · เลือดออก · บางส่วนที่กระเพาะ/ลำไส้เล็กกลายเป็นมะเร็ง · pulmonary AVM ${S.r}</li>
<li><b>MUTYH-associated polyposis</b>: AR · base-excision repair · polyp &lt; 100 อายุมากกว่า มะเร็งช้ากว่า FAP · มี serrated/hyperplastic ปน ${S.r}</li>
<li>Cowden (PTEN) และ Cronkhite-Canada (ไม่ถ่ายทอด ผมร่วง เล็บฝ่อ) เป็น hamartomatous polyposis อื่น ${S.r}</li></ul>`});

SEC.push({id:"lynch",k:"d",t:"Lynch syndrome (HNPCC) vs FAP",mm:"Lynch vs FAP",leg:[],tools:[["ly",[["lynch","Lynch"],["fap","FAP"],["map","MUTYH (AR)"]]]],draw:lyD,
notes:()=>`<div class="pearl">FAP = polyp นับร้อย (APC, CIN) · Lynch = polyp น้อย แต่มะเร็งเร็วและหลายอวัยวะ (MMR, MSI) ${S.r}</div>
<ul><li>Lynch: ถ่ายทอด AD ของ mismatch repair gene · ส่วนใหญ่ <b>MSH2 หรือ MLH1</b> · ได้ allele ผิด 1 ชุด ชุดที่ 2 เสียภายหลัง ${S.r}</li>
<li>MMR เสีย → mutation สะสมเร็วถึง ~1000 เท่า ที่ microsatellite → <b>microsatellite instability</b> ${S.r}</li>
<li>2–4% ของ CRC · กลุ่มอาการพันธุกรรมของมะเร็ง colon ที่พบบ่อยที่สุด · เป็นตอนอายุน้อยกว่าคนทั่วไป มักที่ <b>colon ขวา</b> ${S.r}</li>
<li>มะเร็งหลายอวัยวะ: colorectum, endometrium, กระเพาะ, รังไข่, ureter, สมอง, ลำไส้เล็ก, ทางเดินน้ำดี, ตับอ่อน, ผิวหนัง ${S.r}</li>
<li>FA: ~80% เป็น CRC · proximal colon เกี่ยวข้องเสมอ · "Merrill Lynch has CEOS" (Colon, Endometrial, Ovarian, Skin) ${S.fa}</li>
<li>MSI ตรวจได้ด้วยการย้อม MMR protein (หายไป) หรือ molecular test · มะเร็ง MSI มัก mucinous มี lymphocyte รอบก้อน ${S.r}</li>
<li>ต้องหาผู้ป่วย Lynch เพราะมีผลต่อการตรวจคัดกรองญาติ มะเร็งชนิดที่สอง และการรักษา ${S.r}</li>
<li>Amsterdam criteria (3-2-1) ใช้คัดเลือกครอบครัวที่สงสัย Lynch ${S.x}</li></ul>`});

SEC.push({id:"adeno-ca",k:"d",t:"Adenoma–carcinoma sequence & molecular pathways",mm:"APC → KRAS → TP53",leg:[],tools:[["ap2",[["cin","Chromosomal instability"],["msi","MSI / serrated"]]]],ctrl:()=>sl("as","ขั้น",0,4,1,"/ 4"),wire:()=>wireSl(),draw:asD,
notes:()=>`<div class="pearl">เลื่อนขั้นทีละขั้น: APC หายก่อน (two hits) → KRAS → SMAD4/TP53 · <b>"Always Kill Polyps"</b> = APC, KRAS, P53 ${S.fa} ${S.r}</div>
<ul><li>Classic adenoma–carcinoma sequence = ~80% ของ sporadic CRC · ต้องเสีย APC ทั้งสองชุดจึงเกิด adenoma ${S.r}</li>
<li>APC ปกติจับ β-catenin ให้ถูกทำลาย · APC หาย → β-catenin เข้านิวเคลียสจับ TCF → MYC, cyclin D1 · มะเร็งที่ APC ปกติบางรายมี β-catenin mutation แทน ${S.r}</li>
<li><b>KRAS</b> พบ &lt; 10% ของ adenoma เล็ก แต่ 50% ของ adenoma &gt; 1 cm และ 50% ของมะเร็ง → เกิดช่วงหลัง ${S.r}</li>
<li>SMAD2/SMAD4 (18q, TGF-β) และ <b>TP53</b> (70–80% ของมะเร็ง แต่น้อยใน adenoma) → เกิดช่วงท้าย · chromosomal instability ${S.r}</li>
<li>การสะสม mutation สำคัญกว่าลำดับที่แน่นอน ${S.r}</li>
<li>MSI pathway: MMR เสีย → mutation ที่ microsatellite ของ TGFBR2, BAX, BRAF ฯลฯ ${S.r}</li>
<li>CIMP: MLH1 promoter ถูก methylate + <b>BRAF</b> · มักไม่มี KRAS/TP53 · พบใน sessile serrated lesion · colon ขวา ${S.r}</li>
<li>FA: CIN → FAP และ sporadic ส่วนใหญ่ (ซ้าย) · MSI → Lynch และ sporadic บางส่วน (ขวา) · COX-2 overexpression → NSAID อาจป้องกัน ${S.fa}</li>
<li>Aspirin/NSAID ป้องกันได้ · COX-2 สูงใน ~90% ของมะเร็ง ${S.r}</li></ul>`});

SEC.push({id:"crc",k:"d",t:"Colorectal cancer: presentation, spread & screening",mm:"Colorectal cancer",leg:[],tools:[["cr",[["right","Right colon"],["left","Left colon"],["rect","Rectum"]]]],draw:crD,
notes:()=>`<ul><li>Adenocarcinoma ของ colon เป็นมะเร็งที่พบบ่อยที่สุดของทางเดินอาหาร · อันดับ 2 ของการตายจากมะเร็งในสหรัฐฯ · สูงสุดอายุ 60–70 ปี ${S.r}</li>
<li>ปัจจัย: อาหารกากน้อย คาร์โบไฮเดรตขัดสี ไขมันสูง, เนื้อแปรรูป, บุหรี่, IBD, polyp, กลุ่มอาการพันธุกรรม · ~25% มีประวัติครอบครัว ${S.r} ${S.fa}</li>
<li><b>ขวา</b>: ก้อน exophytic ไม่ค่อยอุดตัน → อ่อนเพลียจาก iron deficiency anemia · <b>ซ้าย</b>: napkin-ring อุดตัน ถ่ายเปลี่ยน ปวดเกร็ง ${S.r}</li>
<li>ปัจจัยพยากรณ์สำคัญสุด: <b>ความลึกของการบุกรุก</b> และ<b>ต่อมน้ำเหลือง</b> (TNM) ${S.r}</li>
<li>แพร่ไป<b>ตับ</b>บ่อยที่สุด (portal drainage) · ปอด กระดูก · rectum ส่วนล่าง/anal ข้ามตับได้ ${S.r}</li>
<li>FA: rectosigmoid &gt; ascending &gt; descending · ส่วนใหญ่ไม่มีอาการ · อาจมาด้วย <b>S. gallolyticus (bovis)</b> bacteremia/endocarditis ${S.fa}</li>
<li>Screening: ความเสี่ยงปกติเริ่ม 45 ปี (colonoscopy หรือ FIT, FIT-DNA, CT colonography) · ญาติสายตรงเป็น CRC เริ่ม 40 หรือ 10 ปีก่อนญาติ · IBD 8 ปีหลังเริ่ม ${S.fa}</li>
<li><b>CEA</b> ใช้ติดตามการกลับเป็นซ้ำ ไม่ใช้คัดกรอง ${S.fa}</li>
<li>Barium enema: apple core lesion ${S.fa}</li></ul>`});

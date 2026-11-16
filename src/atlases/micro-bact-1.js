//@include _micro-helpers.js
Object.assign(S,{mu:'<b class="sbb murray">Mu</b>'});
Object.assign(GN,{a:"Staphylococcus",b:"Streptococcus and Enterococcus",c:"At the bench"});

/* ===================================================================
   Gram-positive cocci — Murray ch 18 (Staphylococcus) and ch 19
   (Streptococcus and Enterococcus).
   Figures follow the micro figure language: structures are drawn, a
   lesion sits at the depth it really occupies, labels are leader lines.
   =================================================================== */

SEC.push({id:"staph-bio",k:"a",t:"Staphylococcus: the genus and its two tests",mm:"Staph biology",leg:[],
draw:()=>{let b="";
 /* a grape-like cluster, drawn as cells rather than circles */
 const cx=120,cy=108,pts=[[-22,-20],[-2,-26],[18,-16],[-26,2],[-6,-4],[14,4],[-18,22],[2,18],[22,22]];
 pts.forEach(([dx,dy],i)=>{b+=`<path class="m-body" d="${mblob(cx+dx,cy+dy,13,12.4,i*7+3,.05)}"/>`
  +`<ellipse class="m-in" cx="${cx+dx+2}" cy="${cy+dy+3}" rx="9" ry="8"/>`
  +`<ellipse class="m-hi" cx="${cx+dx-4}" cy="${cy+dy-5}" rx="4" ry="3"/>`});
 b+=mL(cx,cy+74,"staphylé = bunch of grapes",{c:"s m"})
  +mL(cx,cy+106,"ผนังหนาและไม่มี outer membrane",{c:"s m"})
  +mL(cx,cy+124,"จึงอยู่บนพื้นผิวแห้งได้นาน",{c:"s m"});
 b+=`<path class="m-sep" d="M250,30 L250,330"/>`;

 /* catalase: a slide that fizzes */
 const sx=300,sy=70,SW=200;
 b+=mL(sx+SW/2,40,"Catalase",{c:"bh"})+mL(sx+SW/2,58,"แยก Staphylococcus ออกจาก Streptococcus",{c:"s m"});
 b+=`<rect x="${sx}" y="${sy}" width="${SW}" height="52" rx="6" class="m-tail"/>`;
 const dq=rng(17);
 for(let i=0;i<40;i++){const x=sx+12+dq()*(SW-24),y=sy+9+dq()*34,r=(1.6+dq()*4).toFixed(1);
  b+=`<circle class="m-hi" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}"/>`
   +`<circle class="m-face" style="fill:none" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}"/>`}
 b+=mL(sx+SW/2,142,"Staphylococcus is positive",{c:"bh"})
  +mL(sx+SW/2,160,"H₂O₂ → H₂O + O₂ · ฟองขึ้นทันที",{c:"s m"});
 b+=`<path class="m-sep" d="M262,184 L616,184"/>`;

 /* coagulase: two tubes, one clotted */
 b+=mL(sx+SW/2,208,"Coagulase",{c:"bh"})
  +mL(sx+SW/2,226,"จับ fibrinogen แล้วเปลี่ยนเป็น fibrin — เชื้อจึงจับกันเป็นก้อน",{c:"s m"});
 const ty=248;
 [["S. aureus","clot",true,0],["coagulase-negative","no clot",false,160]].forEach(([n,lab,clot,dx])=>{
  const x=300+dx;
  b+=`<path class="m-tail" d="M${x},${ty} L${x},${ty+54} q0,16 17,16 q17,0 17,-16 L${x+34},${ty} Z"/>`;
  if(clot)b+=`<path class="m-pus" d="${mblob(x+17,ty+40,15,17,9,.12)}"/>`;
  else b+=`<path d="M${x+4},${ty+28} L${x+30},${ty+28}" class="m-face"/>`;
  b+=mL(x+17,ty+90,lab,{c:clot?"bh":"s m"})+mL(x+17,ty+108,n,{c:"s m"})});
 return svg(b,"0 0 640 368")},
notes:()=>`<h3>Where it sits in the key</h3><ul>
 <li>Gram-positive cocci แยกกลุ่มกันด้วย <b>catalase</b> ซึ่งเป็นเอนไซม์ที่เปลี่ยน hydrogen peroxide เป็นน้ำกับออกซิเจน · catalase-positive ที่สำคัญคือ <b><i>Staphylococcus</i></b> ส่วน catalase-negative คือ <i>Streptococcus</i> และ <i>Enterococcus</i> ${S.mu}</li>
 <li>เซลล์โตราว 0.5–1.5 µm เรียงเป็น<b>กลุ่มคล้ายพวงองุ่น</b> แต่ในสิ่งส่งตรวจจริงมักเห็นเป็นเซลล์เดี่ยว คู่ หรือสายสั้น ๆ ${S.mu}</li>
 <li>มันโตได้ทั้งมีและไม่มีออกซิเจน ทนเกลือถึง 10% NaCl และโตได้ตั้งแต่ 18–40 °C — จึงแทบไม่มีสภาพแวดล้อมในโรงพยาบาลที่หยุดมันได้ ${S.mu}</li>
 <li>เพราะ<b>ผนังหนาและไม่มี outer membrane</b> มันอยู่บนพื้นผิวแห้งได้นาน และนี่คือเหตุผลที่ผ้าปูที่นอนและเสื้อผ้าเป็นพาหะได้ ${S.mu}</li></ul>
 <h3>Coagulase splits the genus in two</h3><ul>
 <li><b><i>S. aureus</i></b> เป็นสปีชีส์เดียวในคนที่สร้าง <b>coagulase</b> ได้เป็นปกติ · เมื่อเอาโคโลนีไปแขวนใน plasma coagulase จะจับกับปัจจัยในซีรัม แล้วเปลี่ยน fibrinogen เป็น fibrin จนเกิดลิ่ม ${S.mu}</li>
 <li>ที่เหลือเรียกรวมว่า <b>coagulase-negative staphylococci</b> ซึ่งก่อโรคได้น้อยกว่าและมักเป็น opportunistic infection ${S.mu}</li>
 <li>ชื่อ <i>aureus</i> แปลว่าทอง มาจากสี carotenoid ที่โคโลนีสร้างขึ้นระหว่างโต ${S.mu}</li>
 <li>แต่ละสปีชีส์มีที่อยู่ประจำ: <i>S. aureus</i> อยู่ที่ <b>anterior nares</b> · <i>S. capitis</i> อยู่ที่ที่มี sebaceous gland เช่นหน้าผาก · <i>S. haemolyticus</i> และ <i>S. hominis</i> อยู่ที่ที่มี apocrine gland เช่นรักแร้ ${S.mu}</li>
 <li>ผู้ใหญ่สุขภาพดีราว <b>15%</b> เป็น persistent nasopharyngeal carrier ของ <i>S. aureus</i> · สัดส่วนสูงกว่านี้ในผู้ป่วยในโรงพยาบาล บุคลากรการแพทย์ ผู้ที่มีผื่น eczema และผู้ที่ใช้เข็มเป็นประจำ ไม่ว่าจะเป็นผู้ใช้ยาเสพติด ผู้ป่วยเบาหวานที่ฉีดอินซูลิน หรือผู้ที่ฟอกไต ${S.mu}</li></ul>`});

SEC.push({id:"staph-vir",k:"a",t:"Staphylococcus aureus virulence factors",mm:"Staph virulence",leg:[],
draw:()=>tbl(["Factor","What it does"],[
 ["Capsule","ยับยั้ง chemotaxis และ phagocytosis · serotype 5 และ 8 พบในราว 75% ของการติดเชื้อในคน"],
 ["Slime layer","ช่วยให้เกาะกับสิ่งแปลกปลอม — สำคัญที่สุดสำหรับ coagulase-negative staphylococci"],
 ["Peptidoglycan","ให้ความแข็งแรง · มีฤทธิ์คล้าย endotoxin กระตุ้น pyrogen และดึง leukocyte มาจนเกิดฝี"],
 ["Teichoic acid","จับ fibronectin"],
 ["Protein A","จับ Fc ของ IgG1, IgG2, IgG4 จึงกันการกำจัดด้วยแอนติบอดี และกิน complement"],
 ["MSCRAMM proteins","เกาะกับ fibronectin, fibrinogen, elastin, collagen ของ host"],
 ["Cytotoxins (α β δ γ, P-V leukocidin)","เจาะเยื่อหุ้มเซลล์ · α toxin รวมตัวเป็น heptamer เจาะรู 1–2 nm · P-V leukocidin ผูกกับปอดอักเสบและแผลผิวหนังที่รุนแรง"],
 ["Exfoliative toxins (ETA, ETB)","serine protease ที่ตัด desmoglein-1 ใน stratum granulosum"],
 ["Enterotoxins","superantigen · ทนความร้อน 100 °C นาน 30 นาที และทนกรดในกระเพาะ"],
 ["Toxic shock syndrome toxin-1","superantigen · ทำให้ endothelium รั่วที่ความเข้มข้นต่ำ และตายที่ความเข้มข้นสูง"],
 ["Coagulase","เปลี่ยน fibrinogen เป็น fibrin · อาจสร้างปลอก fibrin รอบฝีเพื่อกันการถูกกลืนกิน"],
 ["Hyaluronidase · fibrinolysin · lipases · nucleases","ย่อยเนื้อเยื่อและลิ่มเลือด ช่วยให้เชื้อแพร่ออกไป"]]),
notes:()=>`<h3>Three jobs, not twelve</h3><ul>
 <li>ปัจจัยก่อโรคทั้งหมดของ <i>S. aureus</i> รับใช้เป้าหมายสามอย่างที่เชื้อก่อโรคส่วนใหญ่ต้องทำ: <b>หนีภูมิคุ้มกัน · เกาะกับเนื้อเยื่อ · ทำลายเนื้อเยื่อ</b> ${S.mu}</li>
 <li>หนีภูมิคุ้มกัน: capsule และ slime layer กันการถูกกลืนกิน ส่วน <b>protein A</b> จับแอนติบอดีกลับด้าน — คือจับที่ Fc ไม่ใช่ที่ Fab แอนติบอดีจึงหันผิดทางและ opsonization ล้มเหลว ${S.mu}</li>
 <li>เกาะเนื้อเยื่อ: โปรตีนผิวกลุ่ม <b>MSCRAMM</b> เชื่อมโควาเลนต์อยู่กับ peptidoglycan และเกาะกับโปรตีนในเมทริกซ์ของ host โดยตรง ${S.mu}</li>
 <li>ทำลายเนื้อเยื่อ: cytotoxin เจาะเยื่อหุ้มเซลล์ · เมื่อ neutrophil แตก เอนไซม์ใน lysosome ที่หลุดออกมาทำลายเนื้อเยื่อรอบ ๆ ต่อไปอีก ${S.mu}</li></ul>
 <h3>What turns the toxins on</h3><ul>
 <li>การแสดงออกของปัจจัยก่อโรคและการสร้าง biofilm ถูกคุมด้วย <b>accessory gene regulator (agr) operon</b> ซึ่งเป็นระบบ quorum sensing ${S.mu}</li>
 <li>เมื่อความหนาแน่นของเชื้อ<b>ต่ำ</b> ระบบนี้สั่งให้สร้างโปรตีนเกาะและตั้งรกราก · เมื่อความหนาแน่น<b>สูง</b> มันสลับไปสั่งให้บุกเนื้อเยื่อและสร้างเอนไซม์กับสารพิษ ${S.mu}</li>
 <li>น่าสนใจว่า <b>apolipoprotein B</b> ของ host จับกับ autoinducer peptide แล้วกดสัญญาณ agr ไว้ — ร่างกายจึงกดเชื้อประจำถิ่นให้อยู่ในระดับที่ไม่บุกรุก ${S.mu}</li></ul>`});

SEC.push({id:"staph-tox",k:"a",t:"The three toxin-mediated diseases",mm:"Toxin disease",leg:[],
draw:()=>{let b="";
 /* --- exfoliative toxin splits the granular layer, drawn in the skin -- */
 b+=mL(24,18,"Exfoliative toxin → scalded skin syndrome",{a:"start",c:"bh"});
 const sk=mskin(24,616,30,{seed:5,scale:.55});b+=sk.b;const Y=sk.y,wv=sk.wv;
 let sp=`M24,${Y.gran+wv(24)}`;for(let x=24;x<=616;x+=6)sp+=`L${x.toFixed(1)},${(Y.gran+wv(x)).toFixed(1)}`;
 b+=`<path class="m-split" d="${sp}"/>`;
 b+=`<path class="m-tail" style="fill:color-mix(in srgb,var(--sb-surface) 70%,transparent)" d="M210,${(Y.gran+wv(210)-1).toFixed(1)} q48,-24 104,-2 q-48,10 -104,2Z"/>`;
 b+=mlead2(314,Y.gran-12,352,Y.gran-34,["Split at the stratum granulosum","ตุ่มน้ำใส ไม่มีเชื้อและไม่มีเม็ดเลือดขาวข้างใน"],{a:"start"})
  +mL(24,Y.bot+22,"แผลหายใน 7–10 วันโดยไม่เป็นแผลเป็น เพราะลอกเฉพาะชั้นบนสุด",{a:"start",c:"s m"});

 /* --- superantigen clamps MHC II to the TCR from outside the groove --- */
 const SY=Y.bot+52;
 b+=`<path class="m-sep" d="M24,${SY-24} L616,${SY-24}"/>`
  +mL(24,SY+2,"Superantigen → toxic shock syndrome and food poisoning",{a:"start",c:"bh"});
 const cxm=250,my=SY+56,ty=SY+152;
 b+=`<path class="m-body" d="${mrod(cxm,my,250,28,7,.04)}"/>`+mL(cxm,my+5,"Macrophage",{c:"s m"})
  +`<path class="m-body2" d="${mrod(cxm,ty,250,28,11,.04)}"/>`+mL(cxm,ty+5,"T cell",{c:"s m"});
 b+=`<path class="m-tail" d="M${cxm-34},${my+28} l0,24 l14,0 l0,-24 Z M${cxm+20},${my+28} l0,24 l14,0 l0,-24 Z"/>`
  +`<path class="m-porin" d="M${cxm-34},${ty-28} l0,-24 l14,0 l0,24 Z M${cxm+20},${ty-28} l0,-24 l14,0 l0,24 Z"/>`;
 b+=mL(cxm-72,my+21,"MHC II",{c:"s m"})
  +mL(cxm-72,ty-13,"T-cell receptor Vβ",{c:"s m"});
 /* the toxin, gripping both chains from the side */
 const tx2=cxm+64;
 b+=`<path class="m-gene" d="${mblob(tx2,(my+ty)/2,16,24,13,.1)}"/>`
  +`<path class="m-pep" style="stroke-width:3.4" d="M${cxm+34},${my+40} L${tx2-10},${(my+ty)/2-14}"/>`
  +`<path class="m-pep" style="stroke-width:3.4" d="M${cxm+34},${ty-40} L${tx2-10},${(my+ty)/2+14}"/>`
  +mlead2(tx2+16,(my+ty)/2,tx2+54,(my+ty)/2-10,["Superantigen","หนีบนอกร่อง — ไม่ต้องมี antigen จำเพาะ"],{a:"start"});
 b+=mL(24,ty+44,"T cell ถูกกระตุ้นพร้อมกันเป็นจำนวนมหาศาล → IL-1β ทำให้เกิดไข้ · TNF-α และ TNF-β ทำให้ความดันตกและ shock",{a:"start",c:"s m"});
 return svg(b,"0 0 640 "+(ty+64))},
notes:()=>`<h3>Scalded skin syndrome</h3><ul>
 <li>Exfoliative toxin มีสองแบบ: <b>ETA</b> ทนความร้อนและยีนอยู่บน phage · <b>ETB</b> ไม่ทนความร้อนและยีนอยู่บนพลาสมิด ${S.mu}</li>
 <li>ทั้งคู่เป็น serine protease ที่ตัด <b>desmoglein-1</b> ซึ่งเป็น desmosome ที่ยึดเซลล์ใน <b>stratum granulosum</b> เข้าด้วยกัน ${S.mu}</li>
 <li>สารพิษนี้<b>ไม่ทำให้เซลล์แตกและไม่ก่อการอักเสบ</b> ในตุ่มน้ำจึงไม่มีทั้งเชื้อและเม็ดเลือดขาว — นี่คือเบาะแสวินิจฉัยที่สำคัญ ${S.mu}</li>
 <li>เริ่มจากผื่นแดงรอบปาก แล้วลามทั่วตัวใน 2 วัน · กดเบา ๆ แล้วผิวเลื่อน (<b>Nikolsky sign</b>) ตามด้วยตุ่มน้ำใหญ่และการลอก · ผิวกลับเป็นปกติใน 7–10 วันเมื่อแอนติบอดีต่อสารพิษขึ้น ${S.mu}</li>
 <li>พบในทารกและเด็กเล็กเป็นหลัก · สายพันธุ์ที่สร้างสารพิษนี้มีไม่ถึง 5% ${S.mu}</li></ul>
 <h3>Food poisoning</h3><ul>
 <li>Enterotoxin <b>A</b> เป็นตัวที่พบบ่อยที่สุดในอาหารเป็นพิษ · C และ D พบในผลิตภัณฑ์นมที่ปนเปื้อน ${S.mu}</li>
 <li>มัน<b>ทนความร้อน 100 °C นาน 30 นาที และทนเอนไซม์ย่อยในกระเพาะและลำไส้</b> ดังนั้นเมื่ออาหารปนเปื้อนและสารพิษถูกสร้างแล้ว การอุ่นซ้ำหรือกรดในกระเพาะช่วยอะไรไม่ได้ ${S.mu}</li>
 <li>อาการมาเร็วและหายเร็ว: อาเจียนรุนแรง ท้องเสีย ปวดท้อง หายภายใน 24 ชั่วโมง · การอาเจียนเชื่อว่ามาจากการที่ mast cell หลั่งสารสื่ออักเสบ ${S.mu}</li>
 <li>สายพันธุ์ที่สร้าง enterotoxin มีราว 30–50% ของ <i>S. aureus</i> ทั้งหมด ${S.mu}</li></ul>
 <h3>Toxic shock syndrome</h3><ul>
 <li><b>TSST-1</b> ทนทั้งความร้อนและการย่อยด้วยโปรตีเอส · พบใน 90% ของสายพันธุ์ที่ก่อ TSS ที่สัมพันธ์กับประจำเดือน และครึ่งหนึ่งของ TSS แบบอื่น ${S.mu}</li>
 <li>อีกครึ่งหนึ่งของ TSS ที่ไม่สัมพันธ์กับประจำเดือนเกิดจาก <b>enterotoxin B</b> และบางครั้ง enterotoxin C ${S.mu}</li>
 <li>การสร้าง TSST-1 ต้องการ<b>ออกซิเจนสูงและ pH เป็นกลาง</b> ซึ่งอธิบายว่าทำไม TSS จึงพบน้อยกว่าแผลติดเชื้อ <i>S. aureus</i> มาก — ในฝีนั้นสภาพค่อนข้างไร้ออกซิเจนและเป็นกรด ${S.mu}</li>
 <li>การติดเชื้ออยู่เฉพาะที่ในช่องคลอดหรือที่แผล แต่สารพิษ<b>ทะลุเยื่อเมือกออกมา</b> จึงเกิดอาการทั่วร่างกาย · ผู้ป่วยเสียชีวิตจาก hypovolemic shock และ multiorgan failure ${S.mu}</li></ul>`});

SEC.push({id:"staph-pyo",k:"a",t:"Pyogenic skin disease, by depth",mm:"Pyogenic disease",leg:[],
draw:()=>{let b="";
 const sk=mskin(24,616,34,{seed:7,scale:1});b+=sk.b;const Y=sk.y,wv=sk.wv;
 /* follicles at the four lesion sites */
 [196,300,440,482,524].forEach((x,i)=>{b+=mfoll(x,Y,0,wv,{w:6,bulb:10,out:13+i*3})});
 /* impetigo — a subcorneal pustule */
 b+=`<path class="m-pus" d="M78,${Y.corn+wv(78)} q22,-18 44,0 q-22,8 -44,0Z"/>`
  +mlead2(100,Y.corn-6,24,Y.bot+30,["Impetigo","ตุ่มหนองใต้ stratum corneum"],{a:"start"});
 /* folliculitis — pus inside the follicle mouth */
 b+=`<path class="m-pus" d="${mblob(196,Y.corn+16,10,13,5,.1)}"/>`
  +mlead2(196,Y.corn+16,176,Y.bot+30,["Folliculitis","ลงไปอยู่ในรูขุมขน"],{a:"start"});
 /* furuncle — a deep follicular abscess into the dermis */
 b+=`<path class="m-pus" d="${mblob(300,Y.derm-28,26,30,9,.09)}"/>`
  +mlead2(300,Y.derm-28,322,Y.bot+30,["Furuncle (boil)","ก้อนหนองลึกถึง dermis"],{a:"start"});
 /* carbuncle — coalescent abscesses reaching subcutis */
 b+=`<path class="m-pus" d="${mblob(482,Y.subq-18,62,34,13,.12)}"/>`
  +mlead2(482,Y.subq-18,470,Y.bot+30,["Carbuncle","หลายหัวเชื่อมกัน ถึงชั้นไขมัน"],{a:"start"});
 /* layer names down the left */
 b+=mL(612,Y.top-6,"Stratum corneum",{a:"end",c:"s m"})
  +mL(612,(Y.spin+Y.derm)/2,"Dermis",{a:"end",c:"s m"})
  +mL(612,(Y.derm+Y.subq)/2+4,"Subcutis",{a:"end",c:"s m"})
  +mL(612,(Y.subq+Y.fasc)/2+4,"Fascia",{a:"end",c:"s m"})
  +mL(612,(Y.fasc+Y.bot)/2+4,"Muscle",{a:"end",c:"s m"});
 return svg(b,"0 0 640 330")},
notes:()=>`<h3>The same organism, four depths</h3><ul>
 <li><b>Impetigo</b> คือการติดเชื้อผิวหนังเฉพาะที่ ลักษณะเป็นตุ่มหนองบนฐานแดง ${S.mu}</li>
 <li><b>Folliculitis</b> คือ impetigo ที่เกิดในรูขุมขน ${S.mu}</li>
 <li><b>Furuncle</b> หรือฝี คือก้อนหนองใต้ผิวหนังที่ใหญ่และเจ็บ ${S.mu}</li>
 <li><b>Carbuncle</b> คือ furuncle หลายหัวที่เชื่อมกันและลามลงชั้นใต้ผิวหนัง มาพร้อมอาการทั่วร่างกาย — ไข้ หนาวสั่น และ bacteremia ${S.mu}</li>
 <li>ลำดับนี้ไม่ใช่เรื่องของเชื้อคนละตัว แต่เป็น<b>ความลึกและการเชื่อมกันของฝี</b> และนั่นคือสิ่งที่ตัดสินว่าจะกรีดระบายหนองพอหรือไม่ ${S.mu}</li></ul>
 <h3>Deeper and further</h3><ul>
 <li><b>Bacteremia และ endocarditis</b> — เชื้อกระจายเข้ากระแสเลือดจากจุดติดเชื้อเดิม · endocarditis คือการทำลายเยื่อบุหัวใจ ${S.mu}</li>
 <li><b>Pneumonia และ empyema</b> — พบในเด็กเล็ก ผู้สูงอายุ และผู้ที่เพิ่งมีโรคปอด · ปัจจุบันมีรูปแบบ necrotizing pneumonia ที่มาพร้อม septic shock และอัตราตายสูง ${S.mu}</li>
 <li><b>Osteomyelitis</b> ทำลายกระดูก โดยเฉพาะที่ metaphysis ของกระดูกยาว · <b>septic arthritis</b> คือข้ออักเสบแดงเจ็บที่มีหนองในช่องข้อ ${S.mu}</li>
 <li>การมีสิ่งแปลกปลอมอยู่ — เสี้ยน ไหมเย็บ สายสวน ข้อเทียม ลิ้นหัวใจเทียม — ทำให้<b>เชื้อจำนวนน้อยมากก็ก่อโรคได้</b> ${S.mu}</li>
 <li>ผู้ที่มีความบกพร่องของการเคลื่อนที่หรือการกลืนกินของเม็ดเลือดขาว เช่น Job syndrome, Wiskott-Aldrich syndrome และ chronic granulomatous disease ติดเชื้อนี้ง่ายกว่าคนทั่วไป ${S.mu}</li></ul>`});

SEC.push({id:"mrsa",k:"a",t:"MRSA and why β-lactams stop working",mm:"MRSA",leg:[],
draw:()=>{let b="";
 const row=(y,title,sub,blocked)=>{let g=mL(26,y-64,title,{a:"start",c:blocked?"bh":"bad"})
   +mL(26,y-46,sub,{a:"start",c:"s m"});
  /* two glycan strands waiting to be cross-linked */
  const X0=250,X1=560;
  g+=mpgl(X0,X1,x=>y-26,1,0,7)+mpgl(X0,X1,x=>y+26,1,0,9);
  /* the enzyme sitting between them */
  const ex=380;
  g+=`<path class="${blocked?"m-body2":"m-body"}" d="${mblob(ex,y,26,20,blocked?11:17,.08)}"/>`
   +mL(ex,y+5,blocked?"PBP":"PBP2a",{c:"bh"});
  if(blocked){g+=`<path class="m-gene" d="${mblob(ex+2,y-24,11,9,23,.1)}"/>`
    +mlead2(ex+2,y-24,596,y-16,["β-lactam","จับที่ตำแหน่งเร่ง"],{a:"end"})
    +mL(405,y+46,"ผนังเชื่อมขวางไม่ได้ เซลล์แตก",{c:"bad"});}
  else{[0,1,2].forEach(i=>{const x=330+i*50;
    g+=`<path class="m-pep" style="stroke-width:3" d="M${x},${y-24} L${x+6},${y+24}"/>`});
   g+=`<path class="m-gene" style="opacity:.45" d="${mblob(ex+56,y-34,11,9,23,.1)}"/>`
    +mlead2(ex+56,y-34,596,y-16,["β-lactam","เกาะไม่ติด จึงเชื่อมขวางต่อได้"],{a:"end"});}
  return g};
 b+=row(100,"Methicillin-susceptible S. aureus","β-lactam จับ penicillin-binding protein ได้ตามปกติ",true)
  +`<path class="m-sep" d="M26,168 L614,168"/>`
  +row(246,"MRSA","mecA บน SCCmec สร้าง PBP2a ที่ยาเกาะได้ไม่ดี",false);
 return svg(b,"0 0 640 316")},
notes:()=>`<h3>One new enzyme, one lost drug class</h3><ul>
 <li>เอนไซม์ที่เร่งการสร้าง peptidoglycan เรียกรวมว่า <b>penicillin-binding proteins</b> เพราะมันคือเป้าของ penicillin และ β-lactam อื่น ๆ ${S.mu}</li>
 <li>การดื้อ methicillin และ penicillin กับ cephalosporin ที่เกี่ยวข้องเกิดจากการ<b>ได้ยีน mecA หรือ mecC มาใหม่</b> ซึ่งเข้ารหัส penicillin-binding protein ตัวใหม่ชื่อ <b>PBP2a</b> ที่มี affinity ต่อยากลุ่มนี้ต่ำ ${S.mu}</li>
 <li>ยีน mecA อยู่บน <b>staphylococcal cassette chromosome mec (SCCmec)</b> ซึ่งมีลำดับหลายแบบ ${S.mu}</li>
 <li>ผลคือผนังยังถูกเชื่อมขวางต่อไปได้ทั้งที่มียาอยู่ — ไม่ใช่การย่อยยาแบบ β-lactamase แต่เป็นการ<b>เปลี่ยนเป้า</b> ${S.mu}</li></ul>
 <h3>It left the hospital and came back</h3><ul>
 <li>ตั้งแต่ทศวรรษ 1980 MRSA แพร่เร็วในผู้ป่วยในโรงพยาบาลจนเปลี่ยนแนวทางการรักษาไปทั้งหมด ${S.mu}</li>
 <li>ปี 2003 เริ่มมีรายงานสายพันธุ์ใหม่ที่ก่อการระบาดของ<b>การติดเชื้อผิวหนังในชุมชน</b>และปอดอักเสบรุนแรง · สายพันธุ์ชุมชนเหล่านี้ไม่เกี่ยวกับสายพันธุ์ในโรงพยาบาลเลย และแต่ละประเทศมีสายพันธุ์ของตัวเอง ${S.mu}</li>
 <li>ในทศวรรษต่อมาสายพันธุ์ชุมชนย้ายเข้าโรงพยาบาล · ปัจจุบัน<b>ไม่มีสายพันธุ์ MRSA ใดที่พบเฉพาะที่ใดที่หนึ่ง</b> และ MRSA เป็นสาเหตุที่พบบ่อยที่สุดของการติดเชื้อผิวหนังและเนื้อเยื่ออ่อนที่ได้มาจากชุมชน ${S.mu}</li></ul>
 <h3>Treatment</h3><ul>
 <li>การติดเชื้อเฉพาะที่จัดการด้วยการ<b>กรีดและระบายหนอง</b> · ให้ยาปฏิชีวนะเมื่อมีการติดเชื้อทั่วร่างกาย ${S.mu}</li>
 <li>ยาที่ให้ไปก่อนผลเพาะเชื้อควรครอบคลุม MRSA ${S.mu}</li>
 <li>ทางกิน: trimethoprim-sulfamethoxazole, doxycycline หรือ minocycline, clindamycin, linezolid · ทางหลอดเลือดดำ <b>vancomycin</b> เป็นยาหลัก โดยมี daptomycin, tigecycline และ linezolid เป็นทางเลือก ${S.mu}</li>
 <li>อาหารเป็นพิษรักษาตามอาการ แต่ต้องตามหาแหล่งอาหารที่ปนเปื้อนเพื่อป้องกันรายต่อไป ${S.mu}</li></ul>`});

SEC.push({id:"cons",k:"a",t:"Coagulase-negative staphylococci",mm:"CoNS",leg:[],
draw:()=>{let b="";
 /* a catheter in cross-section with a biofilm growing on the lumen */
 const y=118,x0=40,x1=600;
 b+=mL(x0,40,"Catheter lumen",{a:"start",c:"bh"})
  +mL(x0,58,"S. epidermidis เกาะด้วย slime layer แล้วสร้าง biofilm คลุมตัวเอง",{a:"start",c:"s m"});
 b+=`<rect class="m-tail" x="${x0}" y="${y-52}" width="${x1-x0}" height="14" rx="4"/>`
  +`<rect class="m-tail" x="${x0}" y="${y+38}" width="${x1-x0}" height="14" rx="4"/>`;
 let eps=`M${x0},${y+38}`;for(let x=x0;x<=x1;x+=10)eps+=`L${x},${(y+14-11*Math.sin((x-x0)/78)-4*Math.sin((x-x0)/29)).toFixed(1)}`;
 b+=`<path class="m-eps" d="${eps}L${x1},${y+38}Z"/>`;
 const q=rng(31);
 for(let i=0;i<40;i++){const x=x0+12+q()*(x1-x0-24),yy=y+18+q()*18;
  b+=`<path class="m-body" style="stroke-width:1.4" d="${mblob(x,yy,6.5,6.2,i*5+3,.07)}"/>`}
 b+=mlead2(250,y+16,250,y-10,["Biofilm","ยาเข้าไม่ถึงและเม็ดเลือดขาวเข้าไม่ถึง"],{a:"start"})
  +mL(x0,y+78,"จึงต้องเอาสายออก การให้ยาอย่างเดียวมักไม่พอ",{a:"start",c:"s m"});
 /* the three species that matter, each with the site it owns */
 b+=`<path class="m-sep" d="M40,196 L600,196"/>`;
 [["S. epidermidis","สายสวน · shunt · ข้อเทียม","ลิ้นหัวใจเทียม",40],
  ["S. lugdunensis","endocarditis","ที่ดุกว่าที่ชื่อบอก",250],
  ["S. saprophyticus","urinary tract infection","ในหญิงสาววัยเจริญพันธุ์",430]].forEach(([n,d1,d2,x])=>{
  b+=mL(x,222,n,{a:"start",c:"bh"})+mL(x,240,d1,{a:"start",c:"s m"})+mL(x,258,d2,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 278")},
notes:()=>`<h3>Low virulence, high opportunity</h3><ul>
 <li>ทุกคนมี coagulase-negative staphylococci อยู่บนผิวหนัง · มันก่อโรคได้น้อยกว่า <i>S. aureus</i> มาก และส่วนใหญ่เป็น <b>opportunistic infection</b> ${S.mu}</li>
 <li>ปัจจัยเสี่ยงที่แท้จริงคือ<b>การมีสิ่งแปลกปลอม</b> · เชื้อกลุ่มนี้อยู่ทั่วไป จึงไม่มีข้อจำกัดเรื่องพื้นที่หรือฤดูกาล ${S.mu}</li>
 <li>สิ่งที่ทำให้มันอยู่รอดคือ <b>slime layer</b> — ฟิล์มละลายน้ำที่ประกอบด้วยน้ำตาลโมเลกุลเดี่ยว โปรตีนและเปปไทด์สั้น ๆ ซึ่งยึดเชื้อไว้กับสายสวน กราฟต์ ลิ้นหัวใจเทียม ข้อเทียมและ shunt ${S.mu}</li>
 <li>โรคที่พบ: <b>subacute endocarditis</b>, การติดเชื้อที่สิ่งแปลกปลอม และ urinary tract infection ${S.mu}</li></ul>
 <h3>Which species, which site</h3><ul>
 <li><b><i>S. epidermidis</i></b> — bacteremia, endocarditis, แผลผ่าตัด และการติดเชื้อฉวยโอกาสที่สายสวน shunt และอุปกรณ์เทียม ${S.mu}</li>
 <li><b><i>S. lugdunensis</i></b> — endocarditis · ชื่อมาจาก Lugdunum ซึ่งเป็นชื่อละตินของเมือง Lyon ที่แยกเชื้อได้ครั้งแรก ${S.mu}</li>
 <li><b><i>S. saprophyticus</i></b> — urinary tract infection โดยเฉพาะในหญิงสาววัยเจริญพันธุ์ที่มีเพศสัมพันธ์ ${S.mu}</li></ul>
 <h3>Treatment</h3><ul>
 <li>ยาที่เลือกคือ oxacillin หรือ penicillin ที่ทน penicillinase ตัวอื่น · ถ้าดื้อ oxacillin ให้ <b>vancomycin</b> ${S.mu}</li>
 <li><b>การเอาสิ่งแปลกปลอมออกมักจำเป็น</b>จึงจะรักษาสำเร็จ ${S.mu}</li>
 <li>การติดเชื้อที่ endocardium หรือ shunt ต้องรีบรักษาเพื่อกันการทำลายเนื้อเยื่อเพิ่มและกันการเกิด immune complex ${S.mu}</li></ul>`});

SEC.push({id:"strep-class",k:"b",t:"Classifying streptococci: hemolysis and Lancefield",mm:"Strep classification",leg:[],
draw:()=>{let b="";
 /* a blood agar plate, because that is where the first answer comes from */
 const cx=200,cy=146,R=108;
 b+=magar(cx,cy,R,[["m-beta",-Math.PI/2],["m-alpha",Math.PI/6],[null,Math.PI*5/6]],5);
 [-Math.PI/6,Math.PI/2,Math.PI*7/6].forEach(a2=>{
  b+=`<path class="m-face" d="M${cx},${cy} L${(cx+Math.cos(a2)*R).toFixed(1)},${(cy+Math.sin(a2)*R).toFixed(1)}"/>`});
 b+=mL(cx,cy-R-14,"Blood agar",{c:"bh"});
 b+=mlead2(cx+34,cy-58,350,70,["β-hemolysis","ใสหมด · streptolysin ย่อย hemoglobin จนหมด"],{a:"start"})
  +mlead2(cx+70,cy+38,350,124,["α-hemolysis","เขียวคล้ำ · hemoglobin ถูกออกซิไดส์ ไม่ได้แตก"],{a:"start"})
  +mlead2(cx-66,cy+44,30,cy+106,["γ · no hemolysis","วุ้นไม่เปลี่ยน"],{a:"start"});
 /* Lancefield: the second question, asked only of the β-hemolytic ones */
 b+=`<path class="m-sep" d="M24,290 L616,290"/>`
  +mL(24,318,"Lancefield group — asked only of the β-hemolytic ones",{a:"start",c:"bh"})
  +mL(24,336,"คาร์โบไฮเดรตประจำกลุ่มในผนังเซลล์ ตรวจด้วยแอนติบอดีได้ในไม่กี่นาที",{a:"start",c:"s m"});
 [["A","S. pyogenes",24],["B","S. agalactiae",164],["C, G","S. dysgalactiae",304],["D","Enterococcus",444]].forEach(([g,sp,x])=>{
  b+=`<path class="m-body2" d="${mblob(x+16,374,15,14,g.charCodeAt(0),.06)}"/>`+mL(x+16,379,g,{c:"bh"})
   +mL(x+40,379,sp,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 404")},
notes:()=>`<h3>Two questions, asked in order</h3><ul>
 <li>คำถามแรกคือ<b>แตกเม็ดเลือดแดงแบบไหน</b> ซึ่งอ่านได้จากจานเพาะเชื้อโดยตรง · <b>β</b> คือวงใสรอบโคโลนี <b>α</b> คือวงเขียวคล้ำ และ <b>γ</b> คือไม่เปลี่ยนแปลง ${S.mu}</li>
 <li>คำถามที่สองคือ <b>Lancefield group</b> ซึ่งเป็นคาร์โบไฮเดรตประจำกลุ่มในผนังเซลล์ · Rebecca Lancefield วางระบบนี้ไว้ในปี 1933 และตรวจได้ด้วยวิธีทางภูมิคุ้มกัน ${S.mu}</li>
 <li>ทุกวันนี้ Lancefield ใช้จริงกับไม่กี่กลุ่ม — หลัก ๆ คือ <b>A และ B</b> โดยมี C, F และ G ที่ยังสำคัญอยู่ ${S.mu}</li>
 <li>ตัวอย่างที่ใช้ทุกวัน: แอนติเจนประจำกลุ่มของ <i>S. pyogenes</i> ตรวจได้จาก throat swab โดยตรงด้วยชุดตรวจ point-of-care จึงเป็นการตรวจที่ทำกันในห้องตรวจผู้ป่วยนอก ${S.mu}</li></ul>
 <h3>Where the enterococci went</h3><ul>
 <li>เดิม enterococci ถูกจัดเป็น <b>group D streptococci</b> เพราะใช้แอนติเจน group D ร่วมกัน ซึ่งเป็น glycerol teichoic acid ${S.mu}</li>
 <li>ปี 1984 แยกออกมาเป็นสกุล <b><i>Enterococcus</i></b> ของตัวเอง ปัจจุบันมี 58 สปีชีส์ แต่ที่สำคัญทางคลินิกคือ <b><i>E. faecalis</i></b> และ <b><i>E. faecium</i></b> ${S.mu}</li>
 <li><i>E. gallinarum</i> และ <i>E. casseliflavus</i> อยู่ในลำไส้คนเป็นปกติ และสำคัญเพราะ<b>ดื้อ vancomycin โดยธรรมชาติ</b> ${S.mu}</li></ul>
 <h3>Why the scheme is confusing</h3><ul>
 <li>viridans streptococci บางสปีชีส์เป็นได้ทั้ง β-hemolytic, α-hemolytic และไม่แตกเลย จึงถูกจัดทั้งด้วย Lancefield group และด้วยชื่อ viridans พร้อมกัน ${S.mu}</li>
 <li>ทางออกคือ<b>อย่าจำระบบ ให้จำสปีชีส์</b> — โรคของแต่ละสปีชีส์นั้นชัดเจน แม้การจัดหมวดจะสับสน ${S.mu}</li></ul>`});

SEC.push({id:"gas-vir",k:"b",t:"Streptococcus pyogenes: the surface and what it secretes",mm:"S. pyogenes",leg:[],
draw:()=>{let b="";
 const cx=200,cy=150;
 /* chains, because that is how it is arranged */
 /* a chain, not a cluster — that is the contrast with Staphylococcus */
 b+=`<path class="m-cap" d="${mblob(cx,cy,110,52,31,.09)}"/>`;
 [...Array(7)].forEach((_,i)=>{const dx=-78+i*26,dy=16*Math.sin(dx/46);
  b+=`<path class="m-body2" d="${mblob(cx+dx,cy+dy,17,16.5,i*7+5,.05)}"/>`
   +`<ellipse class="m-in" cx="${cx+dx+3}" cy="${cy+dy+4}" rx="12" ry="10"/>`
   +`<ellipse class="m-hi" cx="${cx+dx-6}" cy="${cy+dy-6}" rx="5" ry="3.6"/>`});
 /* M protein: a coiled-coil standing out of the wall */
 const mq=rng(19);
 for(let i=0;i<24;i++){const a=i/24*Math.PI*2,x=cx+Math.cos(a)*92,y=cy+Math.sin(a)*40,L=20+mq()*8;
  const ex=x+Math.cos(a)*L,ey=y+Math.sin(a)*L;
  b+=`<path class="m-teic" d="M${x.toFixed(1)},${y.toFixed(1)} Q${((x+ex)/2+Math.sin(a)*5).toFixed(1)},${((y+ey)/2-Math.cos(a)*5).toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)}"/>`}
 b+=mlead2(cx,cy-54,330,54,["Hyaluronic acid capsule","เหมือน hyaluronic acid ของคน ภูมิคุ้มกันจึงมองไม่เห็น"],{a:"start"})
  +mlead2(cx+100,cy-24,330,100,["M protein","กัน C3b ไม่ให้เกาะ · ตัวกำหนด serotype"],{a:"start"})
  +mlead2(cx+84,cy+32,330,146,["C5a peptidase","ย่อย C5a จึงไม่มีสัญญาณเรียก neutrophil"],{a:"start"})
  +mlead2(cx-86,cy+34,330,192,["Lipoteichoic acid · F protein","เกาะ fibronectin บนผิวเซลล์ host"],{a:"start"});
 b+=`<path class="m-sep" d="M24,250 L616,250"/>`
  +mL(24,274,"Secreted",{a:"start",c:"bh"});
 [["Streptolysin O","ไวต่อออกซิเจน · กระตุ้นแอนติบอดี ASO ที่ใช้ยืนยันการติดเชื้อ",24],
  ["Streptolysin S","ทนออกซิเจน ไม่กระตุ้นแอนติบอดี · เป็นตัวที่ทำให้เห็น β-hemolysis",330]].forEach(([n,d,x])=>{
  b+=mL(x,300,n,{a:"start",c:"bh"})+mL(x,318,d,{a:"start",c:"s m"})});
 [["Pyrogenic exotoxins (SpeA–C, F)","superantigen · ผื่น scarlet fever, necrotizing fasciitis, STSS",24],
  ["Streptokinase · DNases","ละลายลิ่มและลดความหนืดของหนอง ช่วยให้เชื้อลาม",330]].forEach(([n,d,x])=>{
  b+=mL(x,348,n,{a:"start",c:"bh"})+mL(x,366,d,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 388")},
notes:()=>`<h3>Avoiding the phagocyte</h3><ul>
 <li>Capsule เป็น <b>hyaluronic acid ที่แยกไม่ออกจากของมนุษย์</b> จึงเป็น antigen ที่แย่มากและรบกวนการถูกกลืนกิน ${S.mu}</li>
 <li><b>M protein</b> เป็นโปรตีนสองสายพันกันเป็น alpha helix ยึดอยู่ที่ cytoplasmic membrane ทะลุผนังออกมา · ปลาย carboxyl ที่ฝังอยู่เหมือนกันทุกสายพันธุ์ แต่<b>ปลาย amino ที่โผล่ออกมาคือสิ่งที่ทำให้ serotype ต่างกัน</b> ${S.mu}</li>
 <li>M protein กัน phagocytosis โดย<b>บล็อกการเกาะของ C3b</b> และยังดึง factor H มาย่อย C3b ที่เกาะไปแล้ว ${S.mu}</li>
 <li><b>C5a peptidase</b> เป็น serine protease บนผิวที่ย่อย C5a ซึ่งเป็นตัวเรียก neutrophil — เชื้อจึงไม่ถูกกวาดออกตั้งแต่ต้น ${S.mu}</li>
 <li>M protein แบ่งเป็น class I และ class II · <b>เฉพาะ class I ที่มี antigen ร่วมโผล่อยู่เท่านั้นที่ก่อ rheumatic fever</b> แม้ทั้งสอง class จะก่อ suppurative infection และ glomerulonephritis ได้ ${S.mu}</li></ul>
 <h3>Sticking, then getting in</h3><ul>
 <li>การเกาะเริ่มจากแรงอ่อน ๆ ระหว่าง <b>lipoteichoic acid</b> กับตำแหน่งจับกรดไขมันบน fibronectin แล้วจึงตามด้วย M protein และ <b>F protein</b> ${S.mu}</li>
 <li><i>S. pyogenes</i> <b>บุกเข้าไปในเซลล์เยื่อบุได้</b> โดยอาศัย M protein และ F protein — เชื่อว่านี่คือเหตุผลของคออักเสบที่เป็นซ้ำ ๆ และของการลงลึกเข้าเนื้อเยื่อ ${S.mu}</li></ul>
 <h3>The two streptolysins are not interchangeable</h3><ul>
 <li><b>Streptolysin S</b> ทนออกซิเจน ยึดอยู่กับเซลล์ ไม่กระตุ้นภูมิคุ้มกัน และเป็นตัวที่ทำให้เกิด<b>วง β-hemolysis ที่เห็นบนจานเพาะเชื้อ</b> ${S.mu}</li>
 <li><b>Streptolysin O</b> ไวต่อออกซิเจน และ<b>กระตุ้นแอนติบอดี ASO</b> ได้ดี จึงใช้ยืนยันการติดเชื้อที่เพิ่งผ่านมา ${S.mu}</li>
 <li>แต่ streptolysin O ถูกยับยั้งอย่างถาวรด้วย cholesterol ในไขมันผิวหนัง · <b>ผู้ป่วยที่ติดเชื้อที่ผิวหนังจึงไม่สร้าง ASO</b> — กรณีนั้นต้องใช้ anti-DNase B แทน ${S.mu}</li></ul>`});

SEC.push({id:"gas-sup",k:"b",t:"Soft-tissue disease, by depth",mm:"GAS soft tissue",leg:[],
draw:()=>{let b="";
 const sk=mskin(24,536,34,{seed:11,scale:1});b+=sk.b;const Y=sk.y,wv=sk.wv;
 /* erysipelas — upper dermis, edge sharp but not straight */
 b+=`<path class="m-pus" d="${mblob(124,Y.spin+22,74,22,5,.14)}"/>`
  +mlead2(124,Y.spin+22,24,Y.bot+34,["Erysipelas","dermis ตื้น ขอบคมชัด"],{a:"start"});
 /* cellulitis — deeper dermis into subcutis, edge indistinct */
 b+=`<path class="m-pus" style="opacity:.82" d="${mblob(300,(Y.derm+Y.subq)/2-6,84,38,9,.2)}"/>`
  +mlead2(300,(Y.derm+Y.subq)/2-6,218,Y.bot+34,["Cellulitis","ลงถึงชั้นใต้ผิวหนัง ขอบไม่ชัด"],{a:"start"});
 /* necrotizing fasciitis — spreading along the fascial plane */
 b+=`<path class="m-pus" d="${mblob(452,Y.fasc+2,78,15,13,.22)}"/>`
  +`<path class="m-split" d="M${376},${(Y.fasc+wv(376)).toFixed(1)} L${528},${(Y.fasc+wv(528)).toFixed(1)}"/>`
  +mlead2(452,Y.fasc+2,406,Y.bot+34,["Necrotizing fasciitis","ลามไปตามแผ่น fascia"],{a:"start"});
 b+=mL(616,Y.top+2,"Epidermis",{a:"end",c:"s m"})
  +mL(616,(Y.spin+Y.derm)/2,"Dermis",{a:"end",c:"s m"})
  +mL(616,(Y.derm+Y.subq)/2+4,"Subcutis",{a:"end",c:"s m"})
  +mL(616,(Y.subq+Y.fasc)/2+4,"Fascia",{a:"end",c:"s m"})
  +mL(616,(Y.fasc+Y.bot)/2+4,"Muscle",{a:"end",c:"s m"});
 b+=mL(24,Y.bot+80,"Pyoderma (impetigo) อยู่ตื้นกว่านี้ทั้งหมด — ตุ่มใสกลายเป็นตุ่มหนองที่ผิว ไม่มีอาการทั่วร่างกาย",{a:"start",c:"s m"});
 return svg(b,"0 0 640 "+(Y.bot+100))},
notes:()=>`<h3>Pharyngitis is the common one</h3><ul>
 <li><i>S. pyogenes</i> เป็น<b>สาเหตุที่พบบ่อยที่สุดของคออักเสบจากแบคทีเรีย</b> · คอแดง มักมี exudate และต่อมน้ำเหลืองที่คอโตเด่น ${S.mu}</li>
 <li><b>Scarlet fever</b> คือภาวะแทรกซ้อนของคออักเสบ — ผื่นแดงเริ่มที่หน้าอกแล้วลามไปแขนขา เกิดจาก pyrogenic exotoxin ${S.mu}</li>
 <li>CDC ประเมินว่ามีโรคที่ไม่ลุกลามอย่างน้อย <b>10 ล้านรายต่อปี</b> โดยคออักเสบกับ pyoderma เป็นสองอันดับแรก ${S.mu}</li></ul>
 <h3>The skin ladder</h3><ul>
 <li><b>Pyoderma</b> เป็นการติดเชื้อผิวหนังเฉพาะที่ ตุ่มใสกลายเป็นตุ่มหนอง <b>ไม่มีอาการทั่วร่างกาย</b> ${S.mu}</li>
 <li><b>Erysipelas</b> ลงลึกกว่า มีอาการปวด บวมแดง ต่อมน้ำเหลืองโต และ<b>มีอาการทั่วร่างกาย</b> ${S.mu}</li>
 <li><b>Cellulitis</b> คือการติดเชื้อผิวหนังที่กินลงไปถึงชั้นใต้ผิวหนัง ${S.mu}</li>
 <li><b>Necrotizing fasciitis</b> คือการติดเชื้อชั้นลึกที่<b>ทำลายทั้งชั้นกล้ามเนื้อและชั้นไขมัน</b> — นี่คือที่มาของชื่อเล่น flesh-eating bacteria ${S.mu}</li></ul>
 <h3>Streptococcal toxic shock syndrome</h3><ul>
 <li>เป็นการติดเชื้อหลายระบบที่หน้าตาเหมือน toxic shock syndrome ของ staphylococcus แต่ต่างกันตรงที่<b>ผู้ป่วยส่วนใหญ่มีเชื้อในกระแสเลือดและมี fasciitis ร่วมด้วย</b> ${S.mu}</li>
 <li>Pyrogenic exotoxin ที่เป็นตัวการนั้น<b>สร้างโดยสายพันธุ์ที่มี phage</b> เหมือนกับสารพิษของ <i>Corynebacterium diphtheriae</i> ${S.mu}</li>
 <li>มีสี่ชนิดที่แยกกันได้ทางภูมิคุ้มกัน: SpeA, SpeB, SpeC และ SpeF · ทั้งหมดเป็น superantigen ${S.mu}</li>
 <li>โรคอื่นที่พบได้: puerperal sepsis, lymphangitis และ pneumonia ${S.mu}</li></ul>`});

SEC.push({id:"gas-seq",k:"b",t:"Rheumatic fever versus acute glomerulonephritis",mm:"GAS sequelae",leg:[],
draw:()=>tbl(["","Rheumatic fever","Acute glomerulonephritis"],[
 ["Follows","คออักเสบเท่านั้น","ได้ทั้งคออักเสบและการติดเชื้อที่ผิวหนัง"],
 ["Strains","class I M protein ที่มี antigen ร่วมโผล่อยู่ เช่น type 1, 3, 5, 6, 18","nephritogenic strain เฉพาะ และ serotype ต่างกันระหว่างคอกับผิวหนัง"],
 ["What is injured","pancarditis · ข้อ · หลอดเลือด · เนื้อเยื่อใต้ผิวหนัง","glomerulus"],
 ["Clinical picture","ลิ้นหัวใจถูกทำลายต่อเนื่อง · ปุ่มใต้ผิวหนัง · ข้ออักเสบย้ายที่ไปเรื่อย ๆ","บวม ความดันสูง ปัสสาวะมีเลือดและโปรตีน"],
 ["Recurrence","เป็นซ้ำได้ถ้าไม่ให้ยาป้องกัน ความเสี่ยงลดลงตามเวลา","ไม่เป็นรูปแบบของการเป็นซ้ำ"],
 ["Outcome","ความเสียหายที่ลิ้นหัวใจสะสม","เด็กมักหายสนิท · ผู้ใหญ่บางรายเสียการทำงานของไตอย่างถาวร"],
 ["Diagnosis","ไม่มีการตรวจจำเพาะ — ใช้อาการร่วมกับหลักฐานว่าเพิ่งติดเชื้อ","อาการร่วมกับหลักฐานว่าเพิ่งติดเชื้อ"]]),
notes:()=>`<h3>Both are the immune response, not the organism</h3><ul>
 <li>ทั้งสองโรคเป็น <b>nonsuppurative complication</b> — คือเกิดหลังการติดเชื้อหายไปแล้ว ไม่ใช่จากตัวเชื้อที่ยังอยู่ ${S.mu}</li>
 <li><b>Rheumatic fever</b> มีการอักเสบของหัวใจทั้งสามชั้น (pancarditis) ข้อ หลอดเลือด และเนื้อเยื่อใต้ผิวหนัง · ข้ออักเสบมีลักษณะ<b>ย้ายที่</b>จากข้อหนึ่งไปอีกข้อหนึ่ง ${S.mu}</li>
 <li>จุดที่ต้องแยกให้ชัด: rheumatic fever <b>ตามหลังคออักเสบเท่านั้น ไม่เคยตามหลังการติดเชื้อที่ผิวหนัง</b> ส่วน glomerulonephritis ตามหลังได้ทั้งสองแบบ ${S.mu}</li>
 <li>ผู้ป่วย rheumatic fever ราวหนึ่งในสาม<b>ไม่มีอาการคออักเสบหรือมีเพียงเล็กน้อย</b> — แต่สายพันธุ์ที่ก่อโรคนี้กระตุ้นแอนติบอดีอย่างแรงในผู้ป่วยคออักเสบทุกราย ${S.mu}</li></ul>
 <h3>Proving a recent infection</h3><ul>
 <li>เพราะไม่มีการตรวจจำเพาะสำหรับ rheumatic fever การวินิจฉัยจึงอาศัยอาการร่วมกับหลักฐานว่า<b>เพิ่งติดเชื้อ <i>S. pyogenes</i></b> ${S.mu}</li>
 <li>หลักฐานที่ใช้ได้: เพาะเชื้อจากคอขึ้นหรือตรวจกรดนิวคลีอิกได้ · ตรวจพบ group A antigen จาก throat swab · หรือ<b>ระดับ ASO, anti-DNase B หรือ anti-hyaluronidase ที่สูงขึ้น</b> ${S.mu}</li>
 <li>ถ้าไม่มีแอนติบอดีสูงขึ้นเลย นั่นเป็นหลักฐานที่<b>ค้านการวินิจฉัย rheumatic fever อย่างหนัก</b> ${S.mu}</li>
 <li>อุบัติการณ์ในสหรัฐลดจากกว่า 10,000 รายต่อปีในปี 1961 เหลือ 112 รายในปี 1994 · แต่ในประเทศกำลังพัฒนายังพบราว <b>100 รายต่อเด็กแสนคนต่อปี</b> ${S.mu}</li></ul>`});

SEC.push({id:"gbs",k:"b",t:"Streptococcus agalactiae and the neonate",mm:"Group B strep",leg:[],
draw:()=>{let b="";
 /* a timeline, because the whole topic is about when */
 const X0=70,X1=580,Y0=112;
 b+=`<path class="ax" d="M${X0},${Y0} L${X1+20},${Y0}" marker-end="url(#ah)"/>`;
 [[0,"Birth"],[.2,"Day 7"],[.52,"1 month"],[.88,"3 months"]].forEach(([f,lab])=>{
  const x=X0+(X1-X0)*f;
  b+=`<path class="m-face" d="M${x},${Y0-6} L${x},${Y0+6}"/>`+mL(x,Y0+24,lab,{c:"s m"})});
 const band=(f0,f1,y,cls)=>`<rect class="${cls}" x="${X0+(X1-X0)*f0}" y="${y}" width="${(X1-X0)*(f1-f0)}" height="30" rx="8"/>`;
 b+=band(0,.2,Y0-44,"m-porin")+mL(X0+(X1-X0)*.1,Y0-24,"Early-onset",{c:"bh"})
  +band(.2,.88,Y0-86,"m-tail")+mL(X0+(X1-X0)*.54,Y0-66,"Late-onset",{c:"bh"});
 /* each window gets its own block, so no leader line has to cross the figure */
 const blk=(y,cls,t2,when,lines)=>{let g=`<rect class="${cls}" x="24" y="${y-13}" width="16" height="16" rx="5"/>`
   +mL(50,y,t2,{a:"start",c:"bh"})+mL(50+t2.length*8.4,y,when,{a:"start",c:"s m"});
  lines.forEach((l,i)=>{g+=mL(50,y+22+i*18,l,{a:"start",c:"s m"})});return g};
 b+=blk(Y0+66,"m-porin","Early-onset","· ภายใน 7 วันแรก",
   ["ได้เชื้อในครรภ์หรือตอนคลอด · pneumonia, meningitis, sepsis",
    "ปอดได้รับผลกระทบเกือบทุกราย เยื่อหุ้มสมองอาจยังไม่แสดงอาการ จึงต้องเจาะหลังทุกราย"]);
 b+=blk(Y0+140,"m-tail","Late-onset","· 1 สัปดาห์ถึง 3 เดือน",
   ["ได้เชื้อจากแม่หรือทารกอื่นหลังคลอด · bacteremia with meningitis",
    "อัตราตายราว 3% แต่ผู้รอดมีภาวะแทรกซ้อนทางระบบประสาท 25–50%"]);
 b+=`<path class="m-sep" d="M24,${Y0+206} L616,${Y0+206}"/>`
  +mL(24,Y0+232,"Screening at 35–37 weeks",{a:"start",c:"bh"})
  +mL(24,Y0+252,"เพาะจาก rectal และ vaginal swab ในสื่อ selective enrichment หรือตรวจ PCR ก่อนคลอด",{a:"start",c:"s m"})
  +mL(24,Y0+270,"เพื่อตัดสินว่าจะให้ยาป้องกันระหว่างคลอดหรือไม่",{a:"start",c:"s m"});
 return svg(b,"0 0 640 "+(Y0+290))},
notes:()=>`<h3>The capsule is the virulence factor</h3><ul>
 <li>ปัจจัยก่อโรคที่สำคัญที่สุดของ <i>S. agalactiae</i> คือ <b>polysaccharide capsule</b> ที่กันการถูกกลืนกินจนกว่าผู้ป่วยจะสร้างแอนติบอดีจำเพาะต่อ type ได้ ${S.mu}</li>
 <li>แอนติบอดีต่อ capsular antigen เป็นตัวป้องกัน — ซึ่งอธิบายว่าทำไมโรคนี้จึงเป็นของทารก · <b>ถ้าแม่ไม่มีแอนติบอดี ทารกก็เสี่ยง</b> ${S.mu}</li>
 <li>มี capsular polysaccharide เก้า type (Ia, Ib, II–VIII) · <b>Ia, III และ V</b> พบบ่อยที่สุดทั้งในการเป็นพาหะและในโรค ${S.mu}</li>
 <li>การมีเชื้อที่อวัยวะเพศสัมพันธ์กับ<b>ความเสี่ยงคลอดก่อนกำหนดที่สูงขึ้น</b> และทารกคลอดก่อนกำหนดก็เสี่ยงต่อโรคมากกว่าด้วย ${S.mu}</li>
 <li>การฆ่าเชื้อนี้ต้องใช้ complement ทั้ง classical และ alternative pathway · ทารกคลอดก่อนกำหนดที่มีระดับ complement ต่ำตามวัยจึงเสี่ยงต่อการกระจายทั่วร่างกาย ${S.mu}</li></ul>
 <h3>Telling it from group A on the plate</h3><ul>
 <li>บน Gram stain <b>แยกจาก <i>S. pyogenes</i> ไม่ได้เลย</b> ${S.mu}</li>
 <li>บนจานเพาะเชื้อแยกได้: โคโลนีของ <i>S. agalactiae</i> <b>ใหญ่และมีวง β-hemolysis แคบ</b> ต่างจาก <i>S. pyogenes</i> ที่โคโลนีเล็กแต่วง hemolysis กว้าง ${S.mu}</li>
 <li>ราว 1–2% ไม่แตกเม็ดเลือดเลย ซึ่งอาจถูกประเมินต่ำเกินจริงเพราะสายพันธุ์ที่ไม่แตกเม็ดเลือดมักไม่ถูกส่งตรวจ group B antigen ${S.mu}</li>
 <li>ในการเพาะจากช่องคลอดต้องใช้ <b>selective enrichment broth</b> ที่เติมยาปฏิชีวนะ เช่น LIM broth ที่มี colistin และ nalidixic acid เพื่อกดเชื้ออื่น ${S.mu}</li></ul>
 <h3>Adults get it too</h3><ul>
 <li>ในหญิงตั้งครรภ์และหลังคลอด: <b>postpartum endometritis</b>, แผลติดเชื้อ และ urinary tract infection · การพยากรณ์โรคดีเมื่อรักษาเหมาะสม ${S.mu}</li>
 <li>ในผู้ใหญ่อื่น: bacteremia, pneumonia, การติดเชื้อที่กระดูกและข้อ และการติดเชื้อผิวหนังกับเนื้อเยื่ออ่อน ${S.mu}</li></ul>`});

SEC.push({id:"spn",k:"b",t:"Streptococcus pneumoniae",mm:"Pneumococcus",leg:[],
draw:()=>{let b="";
 /* lancet-shaped diplococci inside a shared capsule */
 const cx=150,cy=116;
 b+=`<path class="m-cap" d="${mblob(cx,cy,74,52,23,.06)}"/>`;
 [[-20,0,1],[20,0,-1]].forEach(([dx,,sg],i)=>{
  /* a lancet: round at the outer end, pointed where the two meet */
  const w=mwobC(i*9+7);let d="";
  for(let k=0;k<=64;k++){const a=k/64*Math.PI*2,c=Math.cos(a),s2=Math.sin(a);
   const taper=.52+.48*(1-sg*c)/2,r=1+w(a)*.05;
   d+=(k?"L":"M")+(cx+dx+c*26*r).toFixed(1)+","+(cy+s2*22*taper*r).toFixed(1)}
  b+=`<path class="m-body2" d="${d}Z"/>`
   +`<ellipse class="m-hi" cx="${cx+dx-sg*8}" cy="${cy-7}" rx="7" ry="4"/>`});
 b+=mlead2(cx,cy-50,250,58,["Polysaccharide capsule","ปัจจัยก่อโรคหลัก · เป็นตัวกำหนด serotype และเป็นเป้าของวัคซีน"],{a:"start"})
  +mlead2(cx+36,cy+18,250,104,["Lancet-shaped diplococci","ปลายนอกมน ปลายที่ชนกันแหลม"],{a:"start"})
  +mL(cx,cy+78,"โคโลนีแก่จะยุบตรงกลางเพราะ autolysis",{c:"s m"});
 /* where it goes from the oropharynx */
 b+=`<path class="m-sep" d="M24,206 L616,206"/>`
  +mL(24,230,"From the oropharynx it travels",{a:"start",c:"bh"});
 const ox=90,oy=300;
 b+=`<path class="m-body" d="${mblob(ox,oy,38,30,5,.07)}"/>`+mL(ox,oy+5,"Oropharynx",{c:"s m"});
 [["Middle ear","otitis media",250,258],["Sinuses","sinusitis",250,310],
  ["Lung","pneumonia · ไข้สูง หนาวสั่น เสมหะปนเลือด lobar consolidation",250,362],
  ["Meninges","meningitis · อัตราตายสูงและผู้รอดมักมีความพิการทางระบบประสาท",250,414]].forEach(([n,d,x,y])=>{
  b+=`<path class="m-cyc" marker-end="url(#ah)" d="M${ox+40},${oy} Q${(ox+x)/2},${(oy+y)/2} ${x-10},${y-5}"/>`
   +mL(x,y-5,n,{a:"start",c:"bh"})+mL(x,y+13,d,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 444")},
notes:()=>`<h3>What it looks like</h3><ul>
 <li>เป็น gram-positive coccus ที่มี capsule ขนาด 0.5–1.2 µm รูปไข่ เรียงเป็น<b>คู่ (diplococci)</b> หรือสายสั้น ${S.mu}</li>
 <li>เซลล์แก่<b>ฟอกสีออกง่ายจนอาจติดสีเป็น gram-negative</b> ซึ่งเป็นกับดักบน Gram stain ${S.mu}</li>
 <li>โคโลนีของสายพันธุ์ที่มี capsule ใหญ่ กลม และเมือก · สายพันธุ์ที่ไม่มี capsule เล็กและแบน · <b>ทุกโคโลนีจะยุบตรงกลางเมื่อแก่</b> เพราะ autolysis ${S.mu}</li>
 <li>บน blood agar ที่บ่มแบบมีอากาศจะเป็น <b>α-hemolytic</b> แต่ถ้าบ่มแบบไร้อากาศอาจเป็น β-hemolytic ${S.mu}</li></ul>
 <h3>Disease comes from the host response</h3><ul>
 <li>อาการของโรคเกิดจาก<b>การตอบสนองของ host เป็นหลัก ไม่ใช่จากสารพิษจำเพาะ</b> ${S.mu}</li>
 <li>การตั้งรกรากที่ oropharynx อาศัย surface protein adhesin · ร่างกายกันไม่ให้ลงปอดด้วยเมือกและ ciliated epithelium ${S.mu}</li>
 <li>เชื้อโต้กลับด้วย <b>secretory IgA protease</b> ซึ่งกันไม่ให้ IgA ดักเชื้อไว้ในเมือก และด้วย <b>pneumolysin</b> ซึ่งจับ cholesterol แล้วเจาะรูจนทำลายทั้ง ciliated epithelium และเซลล์ที่มากลืนกิน ${S.mu}</li>
 <li>teichoic acid กับชิ้นส่วน peptidoglycan กระตุ้น <b>alternative complement pathway</b> ได้ C5a ที่เรียกการอักเสบ · <b>amidase</b> ของเชื้อช่วยปล่อยชิ้นส่วนผนังออกมามากขึ้น · ส่วน pneumolysin กระตุ้น <b>classical pathway</b> ${S.mu}</li></ul>
 <h3>Diagnosis</h3><ul>
 <li>เพาะจากเสมหะได้เพียง<b>ครึ่งหนึ่ง</b>ของผู้ป่วยปอดอักเสบ เพราะเชื้อต้องการอาหารจำเพาะและถูกเชื้อในช่องปากขึ้นกลบ ${S.mu}</li>
 <li>สำหรับ sinusitis และ otitis ต้อง<b>ดูดจากโพรงไซนัสหรือหูชั้นกลางโดยตรง</b> · ห้ามเพาะจาก nasopharynx หรือหูชั้นนอก ${S.mu}</li>
 <li>การตรวจแอนติเจนใน CSF มีความไวเกือบ 100% ในผู้ป่วย meningitis แต่<b>ความไวและความจำเพาะต่ำถ้าตรวจจากปัสสาวะ</b> และไม่แนะนำในเด็ก ${S.mu}</li>
 <li>ชุดตรวจ multiplex PCR สำหรับเยื่อหุ้มสมองอักเสบจากทั้งแบคทีเรียและไวรัสใช้กันแพร่หลายขึ้นมาก และอาจเป็นการตรวจที่แม่นและเร็วที่สุดในปัจจุบัน ${S.mu}</li>
 <li><b>Bacteremia</b> พบในผู้ป่วย meningitis บ่อยกว่าในปอดอักเสบ หูชั้นกลางอักเสบหรือไซนัสอักเสบ · ผู้ป่วยที่<b>ไม่มีม้าม</b>อาจเกิด sepsis ที่รุนแรงมาก ${S.mu}</li></ul>`});

SEC.push({id:"vgs",k:"b",t:"Viridans streptococci",mm:"Viridans",leg:[],
draw:()=>tbl(["Group","Species","Disease"],[
 ["Anginosus","S. anginosus · S. constellatus · S. intermedius","ฝีในสมอง ช่องปากและช่องท้อง"],
 ["Mitis","S. mitis · S. oralis · (S. pneumoniae อยู่ในกลุ่มนี้)","subacute endocarditis · sepsis ในผู้ป่วย neutropenia · pneumonia · meningitis"],
 ["Mutans","S. mutans · S. sobrinus","ฟันผุ · bacteremia"],
 ["Salivarius","S. salivarius","bacteremia · endocarditis"],
 ["Bovis","S. gallolyticus subsp. gallolyticus","bacteremia ที่สัมพันธ์กับมะเร็งทางเดินอาหาร"],
 ["Bovis","S. gallolyticus subsp. pasteurianus","meningitis"],
 ["Ungrouped","S. suis","meningitis · bacteremia · streptococcal toxic shock syndrome"]]),
notes:()=>`<h3>Normal flora that turns up in blood</h3><ul>
 <li>viridans streptococci อยู่ประจำที่ oropharynx ทางเดินอาหารและทางเดินปัสสาวะและอวัยวะสืบพันธุ์ ${S.mu}</li>
 <li>มันเลือกกินมาก ต้องใช้อาหารเลี้ยงเชื้อที่เติมผลิตภัณฑ์จากเลือด และมักต้องการ <b>carbon dioxide 5–10%</b> ${S.mu}</li>
 <li>ชื่อ viridans มาจาก <b>α-hemolysis</b> ที่ทำให้วุ้นรอบโคโลนีเป็นสีเขียว ${S.mu}</li>
 <li><i>S. pneumoniae</i> ทางอนุกรมวิธานอยู่ในกลุ่ม mitis แต่แพทย์และนักจุลชีววิทยาไม่นับรวม จึงแยกพูดต่างหาก ${S.mu}</li></ul>
 <h3>Penicillin is no longer a given</h3><ul>
 <li>ส่วนใหญ่ยังไวต่อ penicillin ที่ <b>MIC ต่ำกว่า 0.1 µg/ml</b> ${S.mu}</li>
 <li>แต่สายพันธุ์ที่ดื้อปานกลาง (MIC 0.2–2 µg/ml) และดื้อสูง (MIC มากกว่า 2 µg/ml) พบบ่อยขึ้นมากใน<b>กลุ่ม mitis</b> ${S.mu}</li>
 <li>ดื้อปานกลางมักรักษาได้ด้วย penicillin ร่วมกับ aminoglycoside · ถ้าติดเชื้อรุนแรงต้องใช้ <b>cephalosporin ที่ครอบคลุมกว้างหรือ vancomycin</b> ${S.mu}</li></ul>
 <h3>The clinically useful groupings</h3><ul>
 <li><b>Anginosus group</b> คือกลุ่มที่ทำฝี — ในสมอง ในช่องปากและในช่องท้อง ${S.mu}</li>
 <li><b>Mitis และ salivarius group</b> คือกลุ่มที่ทำ subacute endocarditis ${S.mu}</li>
 <li><b>Mutans group</b> คือกลุ่มที่ทำฟันผุ ${S.mu}</li>
 <li><b>Bovis group</b> ที่ขึ้นในเลือดเป็นเบาะแสของ<b>มะเร็งทางเดินอาหาร</b> ซึ่งเป็นเหตุผลที่ต้องส่องกล้องต่อ ${S.mu}</li></ul>`});

SEC.push({id:"ent",k:"b",t:"Enterococcus and vancomycin resistance",mm:"Enterococcus",leg:[],
draw:()=>{let b="";
 /* the D-Ala-D-Ala terminus, and what VRE changes it to */
 const panel=(x0,title,sub,last,bound)=>{let g=mL(x0,34,title,{a:"start",c:bound?"bh":"bad"})
   +mL(x0,52,sub,{a:"start",c:"s m"});
  const sx=x0+70,sy=110;
  /* the pentapeptide stem, last two residues named */
  [0,1,2].forEach(i=>{g+=`<path class="m-pep" style="stroke-width:4" d="M${sx},${sy+i*26} L${sx},${sy+i*26+22}"/>`});
  g+=`<path class="m-ring2" d="${mblob(sx,sy+84,17,14,7,.07)}"/>`+mL(sx,sy+89,"D-Ala",{c:"s m"})
   +`<path class="${bound?"m-ring2":"m-porin"}" d="${mblob(sx,sy+124,17,14,11,.07)}"/>`+mL(sx,sy+129,last,{c:"s m"});
  /* vancomycin as a cup that grips, or fails to */
  const vx=sx+74,vy=sy+106;
  g+=`<path class="m-gene" style="${bound?"":"opacity:.4"}" d="M${vx-6},${vy-30} q34,0 34,30 q0,30 -34,30 q14,-30 0,-60Z"/>`
   +mL(vx+36,vy-42,"Vancomycin",{c:"s m"});
  if(bound)g+=`<path class="m-pep" style="stroke-width:2.6;stroke-dasharray:4 3" d="M${sx+18},${sy+90} L${vx-4},${vy-14} M${sx+18},${sy+124} L${vx-4},${vy+18}"/>`
    +mL(x0,sy+176,"จับได้ · การเชื่อมขวางหยุด",{a:"start",c:"bh"});
  else g+=mL(x0,sy+176,"จับไม่ได้ · ผนังสร้างต่อไปตามปกติ",{a:"start",c:"bad"});
  return g};
 b+=panel(24,"Susceptible enterococcus","ปลายสายเปปไทด์เป็น D-Ala-D-Ala","D-Ala",true)
  +`<path class="m-sep" d="M320,30 L320,310"/>`
  +panel(352,"Vancomycin-resistant enterococcus","ยีน van เปลี่ยนปลายสายเป็น D-Ala-D-Lac","D-Lac",false);
 return svg(b,"0 0 640 320")},
notes:()=>`<h3>Few virulence factors, and that is the point</h3><ul>
 <li>Enterococci <b>ไม่มีปัจจัยก่อโรคหลากหลายแบบ staphylococci หรือ streptococci</b> แต่กลับก่อโรคที่คุกคามชีวิตในผู้ป่วยในโรงพยาบาลได้ ${S.mu}</li>
 <li>ความรุนแรงมาจากสองอย่างเท่านั้น: (1) <b>เกาะเนื้อเยื่อและสร้าง biofilm</b> ได้ด้วยโปรตีนผิว glycolipid ที่เยื่อหุ้ม gelatinase และ pili และ (2) <b>การดื้อยา</b> ${S.mu}</li>
 <li>มันดื้อยาหลายตัว<b>โดยธรรมชาติ</b> เช่น oxacillin และ cephalosporin และยัง<b>รับยีนดื้อ</b>มาเพิ่มได้อีก เช่นต่อ aminoglycoside และ vancomycin ${S.mu}</li>
 <li>การกำจัดเชื้อออกจากเลือดและเนื้อเยื่ออาศัย neutrophil ที่เข้ามาเร็วและการ opsonize · ผู้ป่วยภูมิคุ้มกันบกพร่องจึงเสี่ยงเป็นพิเศษ ${S.mu}</li></ul>
 <h3>Almost nothing stops it from growing</h3><ul>
 <li>มันโตได้ทั้งมีและไม่มีออกซิเจน ที่อุณหภูมิ 10–45 °C ที่ pH 4.6–9.9 และในเกลือกับน้ำดีความเข้มข้นสูง — <b>แทบไม่มีเงื่อนไขทางคลินิกใดที่ยับยั้งมันได้</b> ${S.mu}</li>
 <li>มันหมักกลูโคสได้ l-lactic acid เป็นหลัก จึงถูกเรียกรวมว่า lactic acid bacteria ${S.mu}</li>
 <li>โคโลนีบน sheep blood agar ใหญ่ และอาจไม่แตกเม็ดเลือด เป็น α หรือนาน ๆ ครั้งเป็น β ${S.mu}</li></ul>
 <h3>Telling it from the pneumococcus</h3><ul>
 <li>บน Gram stain <b>หน้าตาเหมือน <i>S. pneumoniae</i></b> คือเรียงเป็นคู่และสายสั้น ${S.mu}</li>
 <li>แต่แยกได้ด้วยปฏิกิริยาง่าย ๆ: enterococci <b>ดื้อ optochin</b> (pneumococcus ไว) · <b>ไม่ละลายในน้ำดี</b> (pneumococcus ละลาย) · และ <b>PYR บวก</b> ${S.mu}</li>
 <li><i>Streptococcus</i> ตัวเดียวที่ PYR บวกคือ <i>S. pyogenes</i> · PYR เป็นการตรวจแบบหยดบนกระดาษที่อ่านผลได้ใน 5 นาที ${S.mu}</li>
 <li>Coccus ที่ catalase ลบและ PYR บวก เรียงเป็นคู่และสายสั้น <b>ถือว่าเป็น enterococci ไปก่อนได้</b> ${S.mu}</li></ul>
 <h3>Treatment is genuinely difficult</h3><ul>
 <li>ยาส่วนใหญ่<b>ไม่ฆ่าเชื้อนี้</b>ที่ความเข้มข้นที่ใช้ได้จริง — ได้แค่ยับยั้ง ${S.mu}</li>
 <li>การรักษาการติดเชื้อรุนแรงจึงใช้ <b>aminoglycoside ร่วมกับยาที่ออกฤทธิ์ที่ผนังเซลล์</b> เช่น ampicillin หรือ vancomycin เพื่อให้เสริมฤทธิ์กัน ${S.mu}</li>
 <li>แต่ nafcillin, oxacillin และ cephalosporin <b>ไม่มีฤทธิ์เลย</b> · ampicillin และ penicillin มักไม่ได้ผลกับ <i>E. faecium</i> · และการดื้อ vancomycin โดยเฉพาะใน <i>E. faecium</i> เป็นเรื่องปกติไปแล้ว ${S.mu}</li>
 <li>มากกว่า 25% ดื้อ aminoglycoside · การดื้อทั้ง aminoglycoside และ vancomycin น่ากังวลเป็นพิเศษเพราะ<b>อยู่บนพลาสมิดและส่งต่อให้เชื้ออื่นได้</b> ${S.mu}</li></ul>`});

SEC.push({id:"gpc-lab",k:"c",t:"Telling the gram-positive cocci apart",mm:"Bench key",leg:[],
draw:()=>{let b="";
 /* an indented key, which is how a bench key is actually read */
 const R=[[0,"Gram-positive cocci","",1],
  [1,"catalase +","Staphylococcus",1],
  [2,"coagulase +","S. aureus",0],
  [2,"coagulase −","S. epidermidis · S. saprophyticus",0],
  [1,"catalase −","Streptococcus · Enterococcus",1],
  [2,"β-hemolytic","ถาม Lancefield group ต่อ",2],
  [3,"group A · bacitracin S · PYR +","S. pyogenes",0],
  [3,"group B · CAMP + · hippurate +","S. agalactiae",0],
  [2,"α-hemolytic หรือไม่แตกเม็ดเลือด","",2],
  [3,"optochin S · bile soluble","S. pneumoniae",0],
  [3,"optochin R · bile insoluble · PYR −","viridans streptococci",0],
  [3,"optochin R · bile insoluble · PYR +","Enterococcus",0]];
 const IX=[24,46,76,112],Y0=32,DY=30,OX=360;
 /* the connecting rails, drawn first so the text sits on top */
 R.forEach(([d],i)=>{if(!d)return;
  let last=i;for(let j=i+1;j<R.length;j++){if(R[j][0]<d)break;if(R[j][0]===d)last=j}
  if(last!==i)return;                                     /* draw once, from the last child up */
  let first=i;for(let j=i-1;j>=0;j--){if(R[j][0]<d){first=j+1;break}if(R[j][0]===d)first=j}
  b+=`<path class="m-rule" d="M${IX[d]-10},${Y0+first*DY-6} L${IX[d]-10},${Y0+last*DY+4}"/>`});
 R.forEach(([d,test,org,kind],i)=>{const y=Y0+i*DY;
  if(d)b+=`<path class="m-rule" d="M${IX[d]-10},${y+4} L${IX[d]-3},${y+4}"/>`;
  b+=mL(IX[d],y+8,test,{a:"start",c:kind===1?"bh":"s"});
  if(org)b+=mL(OX,y+8,org,{a:"start",c:kind?"s m":"bh"})});
 b+=`<path class="m-sep" d="M24,${Y0+R.length*DY+6} L616,${Y0+R.length*DY+6}"/>`
  +mL(24,Y0+R.length*DY+32,"Gram stain แยก S. agalactiae จาก S. pyogenes ไม่ได้ และแยก Enterococcus จาก S. pneumoniae ไม่ได้",{a:"start",c:"s m"});
 return svg(b,"0 0 640 "+(Y0+R.length*DY+56))},
notes:()=>`<h3>The order the bench actually uses</h3><ul>
 <li>เริ่มจาก <b>catalase</b> เพราะมันแยก <i>Staphylococcus</i> ออกจาก <i>Streptococcus</i> และ <i>Enterococcus</i> ได้ในขั้นเดียว ${S.mu}</li>
 <li>ฝั่ง staphylococci ถามต่อด้วย <b>coagulase</b> ซึ่งแยก <i>S. aureus</i> ออกจากที่เหลือทั้งหมด ${S.mu}</li>
 <li>ฝั่ง streptococci ดู<b>รูปแบบการแตกเม็ดเลือดบนจาน</b>ก่อน แล้วจึงถาม Lancefield group เฉพาะตัวที่ β-hemolytic ${S.mu}</li>
 <li>สำหรับ α-hemolytic และตัวที่ไม่แตกเม็ดเลือด ใช้ <b>optochin</b> และ <b>การละลายในน้ำดี</b> แยก <i>S. pneumoniae</i> ออกมา — pneumococcus ไวต่อ optochin และละลายในน้ำดี ส่วน enterococci ดื้อและไม่ละลาย ${S.mu}</li>
 <li><b>PYR</b> เป็นการตรวจหยดที่อ่านใน 5 นาที · <i>Streptococcus</i> ตัวเดียวที่ PYR บวกคือ <i>S. pyogenes</i> และ enterococci ก็ PYR บวก ${S.mu}</li></ul>
 <h3>What a Gram stain can and cannot settle</h3><ul>
 <li>Gram stain บอก<b>รูปร่างและการเรียงตัว</b>ได้ และนั่นคือคำตอบแรกที่ได้ภายในสิบนาที ${S.mu}</li>
 <li>แต่มันแยก <i>S. agalactiae</i> จาก <i>S. pyogenes</i> <b>ไม่ได้</b> และแยก enterococci จาก <i>S. pneumoniae</i> <b>ไม่ได้</b> ${S.mu}</li>
 <li>สำหรับ <i>S. aureus</i> microscopy มีประโยชน์กับการติดเชื้อที่เป็นหนอง แต่<b>ไม่มีประโยชน์กับการติดเชื้อในเลือดหรือโรคที่เกิดจากสารพิษ</b> ${S.mu}</li>
 <li>อาหารเลี้ยงเชื้อแบบเลือกอย่าง chromogenic agar และ mannitol-salt agar ใช้แยก <i>S. aureus</i> จากสิ่งส่งตรวจที่ปนเปื้อนได้ ${S.mu}</li>
 <li>Nucleic acid amplification test ใช้คัดกรองการเป็นพาหะของทั้ง methicillin-sensitive S. aureus (MSSA) และ MRSA ${S.mu}</li></ul>`});

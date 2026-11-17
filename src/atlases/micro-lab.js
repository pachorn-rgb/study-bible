//@include _micro-helpers.js
Object.assign(S,{mu:'<b class="sbb murray">Mu</b>',gl:'<b class="sbb gen">GL</b>'});
Object.assign(GN,{a:"Microscopy",b:"Specimen and culture",c:"Identification and susceptibility"});

/* ===================================================================
   The laboratory sessions of 204-221 — Murray ch 4 (Microscopy and In
   Vitro Culture), ch 16 (Laboratory Diagnosis of Bacterial Diseases)
   and the definitions in ch 17. Category boundaries for susceptibility
   are guideline-dependent and are flagged as such.
   =================================================================== */

SEC.push({id:"gram",k:"a",t:"The Gram stain",mm:"Four reagents",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"ขั้นที่ตัดสินทุกอย่างคือขั้นล้างสี — ไม่ใช่ขั้นย้อม",{a:"start",c:"bh"});
 /* the four reagents, with both cell types side by side at every step */
 const cell=(cx,cy,fill,stroke,seed)=>`<path style="fill:${fill};stroke:${stroke};stroke-width:2" d="${mblob(cx,cy,21,19,seed,.1)}"/>`;
 const CV="color-mix(in srgb,#6B4FC8 52%,var(--sb-surface))",CVd="color-mix(in srgb,#4B2E9E 64%,var(--sb-surface))",
  RD="color-mix(in srgb,#C2334A 54%,var(--sb-surface))",NO="transparent",
  ink="color-mix(in srgb,var(--sb-ink) 40%,var(--sb-surface))";
 [["Crystal violet","ทั้งสองชนิด","ติดสีม่วง",CV,CV,136],
  ["Gram iodine","ไอโอดีนจับกับสีม่วง","เป็นสารประกอบเชิงซ้อน",CVd,CVd,268],
  ["Alcohol or acetone","ขั้นล้างสี","gram-negative เสียสีไป",CVd,NO,400],
  ["Safranin","ตัวย้อมทับ","ทำให้ gram-negative เป็นสีแดง",CVd,RD,532]
 ].forEach(([n,d,d2,cp,cn,x],i)=>{
  b+=cell(x,98,cp,"color-mix(in srgb,#4B2E9E 70%,var(--sb-surface))",i*7+5)
   +cell(x,158,cn,cn===NO?ink:"color-mix(in srgb,var(--sb-ink) 46%,var(--sb-surface))",i*7+11)
   +mL(x,208,n,{c:"bh"})+mL(x,228,d,{c:"s m"})+mL(x,246,d2,{c:"s m"});
  if(i<3)b+=`<path style="fill:none;stroke:color-mix(in srgb,var(--sb-ink) 26%,var(--sb-surface));stroke-width:2;stroke-linecap:round" d="M${x+40},128 l22,0"/>`
   +`<path style="fill:color-mix(in srgb,var(--sb-ink) 36%,var(--sb-surface));stroke:none" d="M${x+62},123.6 l9,4.4 l-9,4.4 z"/>`});
 b+=mL(24,98,"Gram-positive",{a:"start",c:"s m"})+mL(24,158,"Gram-negative",{a:"start",c:"s m"});
 /* why the decolorizer sorts them: the wall itself */
 b+=`<path class="m-sep" d="M24,276 L616,276"/>`
  +mL(24,302,"What the decolorizer meets",{a:"start",c:"bh"});
 const trapped=(x0,x1,yc,n,seed)=>{let g="";const q=rng(seed);
  for(let i=0;i<n;i++)g+=`<circle style="fill:${CVd};stroke:none" cx="${(x0+q()*(x1-x0)).toFixed(1)}" cy="${(yc-14+q()*28).toFixed(1)}" r="2.6"/>`;return g};
 /* gram-positive: one thick woven layer over the membrane */
 const wv1=x=>348+Math.sin(x/36)*3;
 b+=mpgl(24,290,wv1,6,8,9,{})+mbil(24,290,x=>wv1(x)+62,{})
  +trapped(30,284,wv1(150)+24,34,13);
 b+=mL(157,452,"Gram-positive",{c:"bh"})+mL(157,472,"ผนังหนา สีที่จับกับไอโอดีนจึงค้างอยู่ข้างใน",{c:"s m"});
 /* gram-negative: outer membrane dispersed, thin layer lets the complex wash out */
 const wv2=x=>348+Math.sin(x/36)*3;
 b+=mbil(350,616,x=>wv2(x)+4,{core:"m-ocore",head:"m-ohead",tail:"m-otail"})
  +mpgl(350,616,x=>wv2(x)+34,2,6,17,{})
  +mbil(350,616,x=>wv2(x)+62,{});
 /* the outer membrane coming apart where the solvent has reached it */
 for(let i=0;i<7;i++){const x=470+i*20;
  b+=`<path style="fill:none;stroke:color-mix(in srgb,var(--sb-ink) 30%,var(--sb-surface));stroke-width:1.2;stroke-dasharray:3 4" d="M${x},${(wv2(x)-6).toFixed(1)} l6,-12"/>`}
 const q2=rng(23);
 for(let i=0;i<9;i++){const x=440+q2()*170;
  b+=`<circle style="fill:${CVd};opacity:${(0.8-i*0.07).toFixed(2)};stroke:none" cx="${x.toFixed(1)}" cy="${(wv2(x)-18-q2()*26).toFixed(1)}" r="2.6"/>`}
 b+=mL(483,452,"Gram-negative",{c:"bh"})+mL(483,472,"ตัวทำละลายทำให้ outer membrane แตก",{c:"s m"})+mL(483,490,"สีจึงถูกล้างออกจากผนังที่บาง",{c:"s m"});
 return svg(b,"0 0 640 514")},
notes:()=>`<h3>How the stain works</h3><ul>
 <li>Gram stain เป็น<b>สีย้อมที่ใช้บ่อยที่สุดในห้องปฏิบัติการจุลชีววิทยา</b> และเป็นพื้นฐานของการแบ่งแบคทีเรียออกเป็นกลุ่มใหญ่ ${S.mu}</li>
 <li>หลังตรึงสิ่งส่งตรวจบนสไลด์ด้วย<b>ความร้อนหรือแอลกอฮอล์</b> จึงย้อมด้วย <b>crystal violet</b> แล้วเติม <b>iodine</b> ซึ่งจับกับสีย้อมหลักเป็นสารประกอบเชิงซ้อน ${S.mu}</li>
 <li>ระหว่างล้างสีด้วย<b>แอลกอฮอล์หรืออะซีโตน</b> สารประกอบนี้<b>ยังค้างอยู่ใน gram-positive แต่หลุดออกจาก gram-negative</b> ${S.mu}</li>
 <li>ตัวย้อมทับคือ <b>safranin</b> ซึ่งติดใน gram-negative จึงเห็นเป็นสีแดง ${S.mu}</li>
 <li>กลไกคือ สีที่ถูกไอโอดีนตกตะกอนไว้<b>ติดอยู่ในชั้น peptidoglycan ที่หนา</b>ของ gram-positive · ส่วนใน gram-negative ตัวล้างสี<b>ทำให้ outer membrane แตกกระจาย</b>แล้วชะสีออกจากชั้น peptidoglycan ที่บาง ${S.mu}</li></ul>
 <h3>Why the result is not always clean</h3><ul>
 <li>ระดับที่เชื้อเก็บสีไว้ขึ้นกับ<b>ตัวเชื้อเอง สภาพการเพาะเลี้ยง และฝีมือของคนย้อม</b> ${S.mu}</li>
 <li>เชื้อบางกลุ่มย้อมติดไม่ดีโดยธรรมชาติ — <i>Mycobacterium</i> เพราะชั้นไข, <i>Rickettsia</i> เพราะ peptidoglycan บางมาก, <i>Mycoplasma</i> เพราะไม่มีผนังเลย และ <i>Treponema</i> เพราะบางเกินกว่าจะเห็นด้วย brightfield microscopy ${S.mu}</li>
 <li><i>Acinetobacter</i> อาจ<b>เก็บ crystal violet ไว้จนดูคล้าย gram-positive cocci เป็นคู่</b> ${S.mu}</li>
 <li>เลือดของผู้ป่วย septic มีเชื้อน้อยมาก — <b>การย้อม Gram จากเลือดโดยตรงจึงไม่คุ้ม</b> ${S.mu}</li></ul>`});

SEC.push({id:"stains",k:"a",t:"The other stains and when to ask for them",mm:"Stain menu",leg:[],
notes:()=>`<h3>Direct stains</h3>
 ${tbl(["Stain","What it is for"],[
  ["10% KOH","ละลายโปรตีนเพื่อให้เห็นเชื้อราในสิ่งส่งตรวจ · เติม lactophenol cotton blue เพื่อย้อมได้"],
  ["India ink","ดัดแปลงจาก KOH โดยเติมหมึกเป็นพื้นหลัง ใช้กับ CSF และน้ำในร่างกายอื่น — แคปซูลพอลิแซ็กคาไรด์ของยีสต์เห็นเป็นวงใส"],
  ["Lugol iodine","เติมใน wet preparation ของงานปรสิต เพื่อแยก amoeba จากเม็ดเลือดขาวของผู้ป่วย"]])}
 <h3>Differential stains</h3>
 ${tbl(["Stain","What it is for"],[
  ["Gram stain","สีย้อมที่ใช้บ่อยที่สุด เป็นพื้นฐานของการแบ่งกลุ่มใหญ่"],
  ["Iron hematoxylin","ตรวจและแยกชนิด protozoa ในอุจจาระ · ไข่และตัวอ่อนของหนอนพยาธิเก็บสีมากเกินไป จึงดูจาก wet mount ง่ายกว่า"],
  ["Trichrome","ทางเลือกแทน iron hematoxylin สำหรับ protozoa — ตัวเชื้อมีนิวเคลียสและ inclusion body ชัด พื้นหลังเป็นสีเขียว"],
  ["Wright-Giemsa","ตรวจปรสิตในเลือดและ inclusion ของไวรัสกับ Chlamydia · เป็นสีย้อมผสมของ methylene blue และ eosin"],
  ["Methenamine silver","ทำในห้องปฏิบัติการพยาธิวิทยามากกว่า ใช้ตรวจเชื้อราในเนื้อเยื่อเป็นหลัก · การย้อมแบบไม่จำเพาะอาจทำให้อ่านสไลด์ไม่ได้เลย"],
  ["Toluidine blue O","ตรวจ <i>Pneumocystis</i> ในสิ่งส่งตรวจทางเดินหายใจ — ตัวเชื้อเป็นสีน้ำเงิน · trophozoite ไม่ติดสี"]])}
 <h3>Acid-fast stains</h3>
 ${tbl(["Stain","What it is for"],[
  ["Ziehl-Neelsen","hot acid-fast stain — <b>ต้องให้ความร้อน</b>เพื่อดัน carbolfuchsin เข้าไป · พื้นหลังย้อมทับ"],
  ["Kinyoun","cold acid-fast stain — <b>ไม่ต้องให้ความร้อน</b> หลักการเดียวกับ Ziehl-Neelsen"],
  ["Auramine-rhodamine","หลักการเดียวกัน แต่ใช้สีเรืองแสงเป็นสีย้อมหลัก · ใช้ potassium permanganate เป็นตัวย้อมทับ เชื้อเรืองเป็นสีเหลืองอมเขียวบนพื้นดำ"],
  ["Modified acid-fast","ใช้ตัวล้างสีที่อ่อนกว่า สำหรับเชื้อที่ติดสีอ่อน เช่น <i>Nocardia</i>, <i>Rhodococcus</i>, <i>Tsukamurella</i> และ <i>Cyclospora</i> — เรียกว่า partially acid-fast"]])}
 <h3>Fluorescent stains</h3>
 ${tbl(["Stain","What it is for"],[
  ["Acridine orange","ตรวจแบคทีเรียและเชื้อราในสิ่งส่งตรวจ · ที่ pH เหมาะสม เชื้อและสารจากเซลล์ติดสีส้มแดงบนพื้นเขียวอมเหลือง"],
  ["Auramine-rhodamine","เหมือนกลุ่ม acid-fast"]])}
 <h3>The point of the menu</h3><ul>
 <li>สไลด์หนึ่งแผ่นตอบได้เพียงคำถามเดียว — <b>ต้องรู้ก่อนว่าสงสัยเชื้ออะไร</b>จึงจะเลือกสีย้อมถูก ${S.mu}</li>
 <li><i>Treponema pallidum</i> เพาะเชื้อในห้องปฏิบัติการไม่ได้ และ<b>บางเกินกว่าจะเห็นด้วย brightfield microscopy</b> จึงต้องดูด้วย <b>darkfield</b> · เชื้อตายเร็วเมื่อถูกอากาศและความแห้ง การส่องจึงต้องทำ<b>ตอนที่เก็บสิ่งส่งตรวจ</b> ${S.mu}</li></ul>`});

SEC.push({id:"morphology",k:"a",t:"What the smear can already tell you",mm:"Morphology",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"รูปร่างกับการเรียงตัวแคบทางเลือกลงได้มาก ก่อนที่เพาะเชื้อจะขึ้นเสียอีก",{a:"start",c:"bh"});
 const GP="color-mix(in srgb,#6B4FC8 46%,var(--sb-surface))",GPs="color-mix(in srgb,#4B2E9E 66%,var(--sb-surface))",
  GN="color-mix(in srgb,#C2334A 46%,var(--sb-surface))",GNs="color-mix(in srgb,#9B1C31 66%,var(--sb-surface))";
 const coc=(x,y,r,s,f,st)=>`<path style="fill:${f};stroke:${st};stroke-width:1.3" d="${mblob(x,y,r,r*.96,s,.1)}"/>`;
 const rod=(x,y,L,R,rot,s,f,st)=>`<g transform="rotate(${rot} ${x.toFixed(1)} ${y.toFixed(1)})"><path style="fill:${f};stroke:${st};stroke-width:1.3" d="${mrod(x,y,L,R,s)}"/></g>`;
 const cellX=[126,320,514],cellY=[120,276,432];
 const panel=(i,draw2,name,gloss)=>{const x=cellX[i%3],y=cellY[Math.floor(i/3)];
  return draw2(x,y)+mL(x,y+54,name,{c:"bh"})+mL(x,y+74,gloss,{c:"s m"})};
 /* clusters */
 b+=panel(0,(x,y)=>{let g="";const q=rng(7);
  for(let i=0;i<11;i++){const a=q()*6.283,r=Math.sqrt(q())*20;g+=coc(x+Math.cos(a)*r,y+Math.sin(a)*r,8,i*5+3,GP,GPs)}return g},
  "Cocci in clusters","Staphylococcus");
 /* chains */
 b+=panel(1,(x,y)=>{let g="";for(let i=0;i<7;i++){const t=i/6;
  g+=coc(x-34+t*68,y-16+Math.sin(t*4.2)*16,8,i*7+5,GP,GPs)}return g},
  "Cocci in chains","Streptococcus");
 /* lancet-shaped diplococci */
 b+=panel(2,(x,y)=>{let g="";[[-14,-12,18],[14,10,-14],[-6,16,30]].forEach(([dx,dy,rt],i)=>{
  g+=`<g transform="rotate(${rt} ${(x+dx).toFixed(1)} ${(y+dy).toFixed(1)})">`
   +`<path style="fill:${GP};stroke:${GPs};stroke-width:1.3" d="M${x+dx-14},${y+dy} q4,-9 13,-9 q9,0 13,9 q-4,9 -13,9 q-9,0 -13,-9 z"/>`
   +`<path style="fill:none;stroke:${GPs};stroke-width:1.1" d="M${x+dx-1},${y+dy-8.4} l0,16.8"/></g>`});return g},
  "Lancet-shaped diplococci","Streptococcus pneumoniae");
 /* kidney-bean diplococci */
 b+=panel(3,(x,y)=>mdiplo(x-10,y-8,10,11,14,"m-body2")+mdiplo(x+14,y+12,10,19,-20,"m-body2"),
  "Kidney-bean diplococci","Neisseria");
 /* rods */
 b+=panel(4,(x,y)=>{let g="";[[-18,-14,8],[12,-6,-20],[-6,14,14],[20,16,30]].forEach(([dx,dy,rt],i)=>{
  g+=rod(x+dx,y+dy,30,7,rt,i*9+5,GN,GNs)});return g},
  "Rods","Enterobacterales");
 /* coccobacilli */
 b+=panel(5,(x,y)=>{let g="";const q=rng(29);
  for(let i=0;i<8;i++){const a=q()*6.283,r=Math.sqrt(q())*20;
   g+=rod(x+Math.cos(a)*r,y+Math.sin(a)*r,13,6,q()*160-80,i*7+3,GN,GNs)}return g},
  "Coccobacilli","Haemophilus · Brucella");
 /* curved and fusiform */
 b+=panel(6,(x,y)=>{let g="";[[-16,-12,0],[10,2,20],[-4,18,-14]].forEach(([dx,dy,rt],i)=>{
  g+=`<g transform="rotate(${rt} ${(x+dx).toFixed(1)} ${(y+dy).toFixed(1)})"><path style="fill:none;stroke:${GNs};stroke-width:5;stroke-linecap:round" d="M${x+dx-16},${y+dy+5} q16,-14 32,0"/></g>`});
  [[18,-18,24],[-22,-20,-30]].forEach(([dx,dy,rt])=>{g+=`<g transform="rotate(${rt} ${(x+dx).toFixed(1)} ${(y+dy).toFixed(1)})"><path style="fill:${GN};stroke:${GNs};stroke-width:1.2" d="M${x+dx-22},${y+dy} q11,-7 22,0 q-11,7 -22,0 z"/></g>`});return g},
  "Curved and fusiform","Campylobacter · Fusobacterium");
 /* branching filaments */
 b+=panel(7,(x,y)=>{let g="";const q=rng(37);
  const branch=(px,py,ang,len,depth)=>{const ex=px+Math.cos(ang)*len,ey=py+Math.sin(ang)*len;
   g+=`<path style="fill:none;stroke:${GPs};stroke-width:2.6;stroke-linecap:round" d="M${px.toFixed(1)},${py.toFixed(1)} L${ex.toFixed(1)},${ey.toFixed(1)}"/>`;
   if(depth>0){branch(ex,ey,ang+.5+q()*.3,len*.78,depth-1);branch(ex,ey,ang-.5-q()*.3,len*.78,depth-1)}};
  branch(x-4,y+20,-1.5,17,2);branch(x-4,y+20,-2.5,14,1);return g},
  "Branching filaments","Actinomyces · Nocardia");
 return svg(b,"0 0 640 532")},
notes:()=>`<h3>Why it is worth stopping at the smear</h3><ul>
 <li>การรักษาแบบ empirical <b>ปรับให้แคบลงได้ทันที</b>จากการระบุเชื้อเบื้องต้นด้วยรูปร่างใต้กล้อง ลักษณะโคโลนี และการทดสอบทางชีวเคมีไม่กี่อย่าง ${S.mu}</li>
 <li>ตัวอย่างที่ Murray ยกไว้: <i>S. aureus</i> คือ gram-positive cocci เป็นกลุ่ม โคโลนีใหญ่ <b>β-hemolytic</b> · <i>S. pyogenes</i> เป็นสายยาว โคโลนีเล็กแต่วง β-hemolysis กว้าง · <i>S. pneumoniae</i> เป็นคู่และสายสั้น โคโลนีเล็ก <b>α-hemolytic</b> และ<b>ละลายในน้ำดี</b> ${S.mu}</li>
 <li><i>Listeria monocytogenes</i> เป็นแท่งเล็ก gram-positive โคโลนีเล็ก β-hemolytic อ่อน ๆ และมี<b>การเคลื่อนไหวแบบ tumbling</b> ที่เป็นลักษณะเฉพาะ ${S.mu}</li>
 <li><i>Pseudomonas aeruginosa</i> ย้อมสม่ำเสมอ มักเรียงเป็นคู่ · โคโลนีแผ่กว้าง<b>เรืองสีเขียว</b> และ<b>มีกลิ่นคล้ายองุ่น</b> ${S.mu}</li>
 <li><i>Clostridium perfringens</i> เป็นแท่งใหญ่รูปสี่เหลี่ยม <b>ไม่เห็นสปอร์</b>ในสิ่งส่งตรวจ และมี<b>วง hemolysis สองชั้น</b> ${S.mu}</li>
 <li><i>Campylobacter</i> เป็นแท่งโค้งบาง ๆ และ<b>ไม่ขึ้นบนอาหารเลี้ยงเชื้อทั่วไป</b> ${S.mu}</li>
 <li><i>Brucella</i> และ <i>Francisella</i> เป็น coccobacilli ที่เล็กมาก และทั้งคู่เป็น<b>เชื้ออันตรายทางชีวภาพ</b>ที่ต้องแจ้งห้องปฏิบัติการ ${S.mu}</li>
 <li><i>Nocardia</i> ย้อมติดอ่อนทั้ง Gram และ modified acid-fast เป็น<b>เส้นสายบางแตกแขนง</b> โตช้า โคโลนีมีขน ${S.mu}</li></ul>`});

SEC.push({id:"specimen",k:"b",t:"A specimen that is not worth culturing",mm:"Specimen quality",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"สิ่งส่งตรวจที่เก็บไม่ดี ให้คำตอบที่ผิดได้อย่างมั่นใจ — ห้องปฏิบัติการจึงปฏิเสธมัน",{a:"start",c:"bh"});
 const field=(cx,cy,R,seed,good)=>{let g=`<circle style="fill:color-mix(in srgb,#6B4FC8 5%,var(--sb-surface));stroke:color-mix(in srgb,var(--sb-ink) 22%,var(--sb-surface));stroke-width:2" cx="${cx}" cy="${cy}" r="${R}"/>`;
  const q=rng(seed);
  if(good){
   /* neutrophils, and one organism in numbers */
   for(let i=0;i<7;i++){const a=q()*6.283,r=Math.sqrt(q())*(R-34);
    g+=mpmn(cx+Math.cos(a)*r,cy+Math.sin(a)*r,19,seed+i*7)}
   for(let i=0;i<34;i++){const a=q()*6.283,r=Math.sqrt(q())*(R-14);
    const x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;
    g+=`<path style="fill:color-mix(in srgb,#4B2E9E 62%,var(--sb-surface));stroke:none" d="${mblob(x,y,4.4,4.2,seed+i*3,.14)}"/>`
     +`<path style="fill:color-mix(in srgb,#4B2E9E 62%,var(--sb-surface));stroke:none" d="${mblob(x+7,y+2,4.4,4.2,seed+i*3+1,.14)}"/>`}
  }else{
   /* squamous epithelial cells: large, flat, angular, with a small nucleus */
   for(let i=0;i<5;i++){const a=i/5*6.283+q()*.5,r=q()*(R-54);
    const x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r,rt=q()*120-60;
    g+=`<g transform="rotate(${rt.toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})">`
     +`<path style="fill:color-mix(in srgb,#C98A6B 12%,var(--sb-surface));stroke:color-mix(in srgb,var(--sb-ink) 30%,var(--sb-surface));stroke-width:1.4" d="M${x-42},${y-6} L${x-22},${y-26} L${x+18},${y-28} L${x+42},${y-4} L${x+24},${y+24} L${x-18},${y+26} Z"/>`
     +`<path style="fill:color-mix(in srgb,#6B4FC8 22%,var(--sb-surface));stroke:color-mix(in srgb,#6B4FC8 46%,var(--sb-surface));stroke-width:1.1" d="${mblob(x,y,7,6,seed+i*5,.14)}"/></g>`}
   /* a muddle of different organisms, none predominant */
   for(let i=0;i<26;i++){const a=q()*6.283,r=Math.sqrt(q())*(R-14);
    const x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r,kind=i%3;
    if(kind===0)g+=`<path style="fill:color-mix(in srgb,#4B2E9E 50%,var(--sb-surface));stroke:none" d="${mblob(x,y,4,3.8,seed+i*3,.16)}"/>`;
    if(kind===1)g+=`<g transform="rotate(${(q()*160-80).toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"><path style="fill:color-mix(in srgb,#9B1C31 50%,var(--sb-surface));stroke:none" d="${mrod(x,y,13,3,seed+i*3)}"/></g>`;
    if(kind===2)g+=`<path style="fill:none;stroke:color-mix(in srgb,#2E7D6B 56%,var(--sb-surface));stroke-width:2.6;stroke-linecap:round" d="M${(x-10).toFixed(1)},${y.toFixed(1)} q5,-4 10,0 q5,4 10,0"/>`}
  }
  return g};
 b+=field(168,186,128,7,true)+field(470,186,128,23,false);
 b+=mL(168,344,"Worth culturing",{c:"bh"})+mL(168,364,"neutrophil จำนวนมาก และเชื้อชนิดเดียวที่เด่นชัด",{c:"s m"})
  +mL(470,344,"Rejected",{c:"bh"})+mL(470,364,"squamous epithelial cell จำนวนมาก",{c:"s m"})+mL(470,382,"และเชื้อปนกันโดยไม่มีตัวไหนเด่น",{c:"s m"});
 b+=`<path class="m-sep" d="M24,410 L616,410"/>`;
 [["Squamous epithelial cells mean saliva","สิ่งส่งตรวจปนน้ำลาย — เพาะไปก็ได้เชื้อประจำปาก ไม่ใช่เชื้อก่อโรค",24,436],
  ["Anaerobic lung infection","ถ้าสงสัย ต้องเก็บด้วย bronchoscope หรือเจาะปอดโดยตรง เพราะการปนเชื้อจากทางเดินหายใจส่วนบนทำให้สิ่งส่งตรวจไร้ค่า",24,488]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 524")},
notes:()=>`<h3>Sputum</h3><ul>
 <li>สิ่งส่งตรวจที่มี <b>squamous epithelial cell จำนวนมากและไม่มีเชื้อตัวใดเด่น</b>ร่วมกับเซลล์อักเสบ <b>ไม่ควรนำไปเพาะเชื้อ</b> ${S.mu}</li>
 <li>การมี squamous epithelial cell บอกว่า<b>สิ่งส่งตรวจปนเปื้อนน้ำลาย</b> ${S.mu}</li>
 <li>เลี่ยงได้ด้วยการเก็บผ่าน <b>bronchoscope ที่ออกแบบมาเฉพาะ หรือเจาะดูดจากปอดโดยตรง</b> · ถ้าสงสัยการติดเชื้อ anaerobe ในปอด <b>ต้องใช้วิธีเหล่านี้เท่านั้น</b> ${S.mu}</li>
 <li>เชื้อก่อโรคทางเดินหายใจส่วนล่างส่วนใหญ่<b>ขึ้นใน 2–3 วัน</b> แต่ mycobacteria และ <i>Nocardia</i> ต้องบ่มนานกว่านั้น ${S.mu}</li></ul>
 <h3>Blood</h3><ul>
 <li>ปัจจัยสำคัญที่สุดของผลเพาะเชื้อจากเลือดคือ<b>ปริมาตรเลือดที่เพาะ</b> — เพาะ 20 ml ได้ผลบวก<b>มากกว่าเพาะ 10 ml ถึง 40%</b> ${S.mu}</li>
 <li>เหตุผลคือ<b>ผู้ป่วย septic มากกว่าครึ่งมีเชื้อน้อยกว่าหนึ่งตัวต่อมิลลิลิตร</b> ${S.mu}</li>
 <li>ผู้ใหญ่เก็บราว <b>20 ml ต่อหนึ่ง blood culture</b> แบ่งใส่สองขวด ขวดละ 10 ml · เด็กและทารกเก็บน้อยลงตามสัดส่วน ${S.mu}</li>
 <li>แนะนำให้เก็บ <b>2–3 ชุด</b> · <b>จังหวะเวลาไม่สำคัญเท่า</b> แต่ควรเก็บก่อนให้ยาปฏิชีวนะถ้าทำได้ ${S.mu}</li>
 <li>ต้อง<b>ฆ่าเชื้อที่ผิวหนังอย่างระมัดระวัง</b> เพราะผู้ป่วยในโรงพยาบาลจำนวนมากติดเชื้อจากเชื้อที่อยู่บนผิวหนังตัวเอง ${S.mu}</li>
 <li>เชื้อที่มีความสำคัญทางคลินิกส่วนใหญ่ขึ้นใน <b>1–2 วันแรก</b> แต่ควรบ่มอย่างน้อย <b>5–7 วัน</b> · นานกว่านั้นมักไม่จำเป็น ${S.mu}</li>
 <li>Bacteremia และ fungemia รวมเรียกว่า <b>septicemia</b> · อาจเป็นแบบ<b>ต่อเนื่อง</b>ซึ่งพบในการติดเชื้อในหลอดเลือดเช่น endocarditis หรือแบบ<b>เป็นช่วง ๆ</b> ${S.mu}</li></ul>
 <h3>Cerebrospinal fluid</h3><ul>
 <li>เชื้อก่อโรคที่พบบ่อยบางตัว<b>ตายง่าย</b> เช่น <i>N. meningitidis</i> และ <i>S. pneumoniae</i> — CSF จึงต้อง<b>ส่งตรวจทันที</b> ${S.mu}</li>
 <li><b>ห้ามแช่เย็นและห้ามใส่ตู้อบโดยตรง</b>ไม่ว่ากรณีใด ${S.mu}</li>
 <li>ในห้องปฏิบัติการ CSF จะถูก<b>ปั่นให้เข้มข้นก่อน</b> แล้วใช้ตะกอนเพาะเชื้อและย้อม Gram ${S.mu}</li></ul>
 <h3>Urine</h3><ul>
 <li>เพราะท่อปัสสาวะมีเชื้อประจำถิ่น <b>ปัสสาวะส่วนแรกต้องทิ้งไป</b> ${S.mu}</li>
 <li>เชื้อก่อโรคเติบโตในปัสสาวะได้ จึงต้อง<b>ส่งทันที</b> หรือแช่เย็นหรือใส่สารกันเชื้อโต ${S.mu}</li>
 <li>ห้องปฏิบัติการหยอด <b>1–10 μl</b> ลงบนอาหารแต่ละชนิด เพื่อ<b>นับจำนวนเชื้อ</b>ได้ ${S.mu}</li>
 <li>ข้อยกเว้นที่ต้องจำ: สำหรับ<b>urethritis</b> ให้ตรวจ<b>ปัสสาวะส่วนแรก</b> ซึ่งตรงข้ามกับการตรวจ cystitis ${S.mu}</li>
 <li>รายละเอียดของ quantitative culture และเกณฑ์จำนวนเชื้ออยู่ในบท Renal ${S.mu}</li></ul>
 <h3>Other sites</h3><ul>
 <li>ฝีควรเก็บสิ่งส่งตรวจ<b>ทั้งจากตรงกลางและจากผนังของฝี</b> · การ<b>ดูดเอาแต่หนองมักไม่ได้ผล</b> เพราะเชื้อส่วนใหญ่แบ่งตัวอยู่ที่<b>ฐานของฝี ไม่ใช่ตรงกลาง</b> ${S.mu}</li>
 <li>ถ้าไม่ได้สิ่งคัดหลั่ง ให้ฉีดน้ำเกลือเข้าไปแล้วดูดกลับ — <b>ห้ามใช้น้ำเกลือที่ผสมสารกันเสียที่ฆ่าเชื้อ</b> ${S.mu}</li>
 <li>ชิ้นเนื้อควรเก็บจากหลายตำแหน่งที่เป็นตัวแทนของรอยโรค ${S.mu}</li>
 <li>สิ่งส่งตรวจสำหรับ anaerobe ต้องส่งใน<b>ภาชนะที่ไม่มีออกซิเจน</b> ${S.mu}</li>
 <li>สำหรับ <i>N. gonorrhoeae</i> และ <i>C. trachomatis</i> การเพาะเชื้อ<b>ช้าและไม่ไว</b>เพราะเชื้อตายเร็ว · วิธีที่ใช้กันมากที่สุดตอนนี้คือ <b>nucleic acid amplification</b> ${S.mu}</li></ul>`});

SEC.push({id:"media",k:"b",t:"What the plate is being asked to do",mm:"Culture media",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"อาหารเลี้ยงเชื้อแต่ละจานถูกออกแบบมาตอบคำถามคนละข้อ",{a:"start",c:"bh"});
 /* blood agar: enriched and nonselective, read by the hemolysis around the colonies */
 const bx=162,by=186,R=112;
 b+=magar(bx,by,R,[["m-beta",-Math.PI/2],["m-alpha",Math.PI/6],["",Math.PI*5/6]],11);
 [["β",bx,by-76],["α",bx+66,by+40],["γ",bx-66,by+40]].forEach(([t,x,y])=>{
  b+=`<circle style="fill:var(--sb-plate);stroke:color-mix(in srgb,var(--sb-ink) 24%,var(--sb-surface));stroke-width:1.2" cx="${x}" cy="${y}" r="14"/>`
   +mL(x,y+6,t,{c:"bh"})});
 /* MacConkey: selective and differential at once, split down the middle */
 const cx=470,cy=186;
 b+=`<circle class="m-agar" style="fill:color-mix(in srgb,#C8A24A 12%,var(--sb-surface))" cx="${cx}" cy="${cy}" r="${R}"/>`;
 const q=rng(29);
 for(let i=0,n=0;n<9&&i<80;i++){const a=Math.PI/2+q()*Math.PI,r=36+Math.sqrt(q())*(R-62);
  const x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;
  if(x>cx-18)continue;n++;
  b+=`<path style="fill:color-mix(in srgb,#9B1C31 44%,var(--sb-surface));stroke:color-mix(in srgb,#9B1C31 62%,var(--sb-surface));stroke-width:1.1" d="${mblob(x,y,8,7.4,i*5+3,.12)}"/>`}
 for(let i=0,n=0;n<9&&i<80;i++){const a=-Math.PI/2+q()*Math.PI,r=36+Math.sqrt(q())*(R-62);
  const x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;
  if(x<cx+18)continue;n++;
  b+=`<path style="fill:color-mix(in srgb,#E9E4DA 70%,var(--sb-surface));stroke:color-mix(in srgb,var(--sb-ink) 28%,var(--sb-surface));stroke-width:1.1" d="${mblob(x,y,8,7.4,i*5+7,.12)}"/>`}
 b+=`<path style="fill:none;stroke:color-mix(in srgb,var(--sb-ink) 22%,var(--sb-surface));stroke-width:1.4;stroke-dasharray:5 5" d="M${cx},${cy-R} L${cx},${cy+R}"/>`;
 [["Lactose +",cx-58,cy-80],["Lactose −",cx+58,cy-80]].forEach(([t,x,y])=>{
  b+=`<path style="fill:var(--sb-plate);stroke:color-mix(in srgb,var(--sb-ink) 24%,var(--sb-surface));stroke-width:1.2" d="M${x-38},${y-13} h76 a6,6 0 0 1 6,6 v14 a6,6 0 0 1 -6,6 h-76 a6,6 0 0 1 -6,-6 v-14 a6,6 0 0 1 6,-6 z"/>`
   +mL(x,y+6,t,{c:"bh"})});
 b+=mL(bx,330,"Blood agar — enriched, nonselective",{c:"bh"})
  +mL(cx,330,"MacConkey — selective and differential",{c:"bh"});
 b+=`<path class="m-sep" d="M24,360 L616,360"/>`;
 [["β-hemolysis","วงใสรอบโคโลนี · เม็ดเลือดแดงถูกสลายหมด",24,386],
  ["α-hemolysis","วงสีเขียวคล้ำ · สลายไม่หมด",24,438],
  ["γ — no hemolysis","วุ้นรอบโคโลนีไม่เปลี่ยน",24,490],
  ["Lactose fermented","กรดตกตะกอน bile salt และเปลี่ยน neutral red เป็นแดง",330,386],
  ["Lactose not fermented","โคโลนีไม่มีสี",330,438],
  ["Gram-positive bacteria are suppressed","bile salt และ crystal violet ในอาหารเป็นตัวกด",330,490]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 528")},
notes:()=>`<h3>Four jobs</h3>
 ${tbl(["Type","Examples"],[
  ["Enriched nonselective — เลี้ยงเชื้อส่วนใหญ่ที่ไม่เรื่องมาก","blood agar · chocolate agar · Mueller-Hinton agar · thioglycolate broth · Sabouraud dextrose agar"],
  ["Selective and differential — กดเชื้อที่ไม่ต้องการ แล้วแยกเชื้อที่เหลือด้วยสี","MacConkey agar · mannitol salt agar · xylose-lysine deoxycholate agar · Löwenstein-Jensen · Middlebrook · CHROMagar · inhibitory mold agar"]])}
 <h3>The ones worth knowing by what is in them</h3><ul>
 <li><b>Blood agar</b> มีสองส่วนหลักคือ <b>basal medium</b> เช่น tryptic soy, brain heart infusion หรือ Brucella base และ <b>เลือด</b> ของแกะ ม้าหรือกระต่าย ${S.mu}</li>
 <li><b>Chocolate agar</b> คือ blood agar ที่ดัดแปลงโดย<b>ให้ความร้อน</b>จนเลือดเปลี่ยนเป็นสีน้ำตาล — จึงเลี้ยงเชื้อที่ไม่ขึ้นบน blood agar ได้ เช่น <i>Haemophilus</i> และ <i>Neisseria</i> ที่ก่อโรคบางสายพันธุ์ ${S.mu}</li>
 <li><b>Mueller-Hinton agar</b> คืออาหารที่แนะนำสำหรับ<b>การทดสอบความไวต่อยาตามปกติ</b> · องค์ประกอบถูกกำหนดไว้ชัด ทั้งสารสกัดเนื้อและเคซีน เกลือ <b>divalent cation</b> และแป้งที่ละลายได้ ซึ่งจำเป็นต่อการให้ผลที่ทำซ้ำได้ ${S.mu}</li>
 <li><b>Thioglycolate broth</b> เป็นน้ำเลี้ยงเชื้อที่ใช้<b>ดึงเชื้อจำนวนน้อย</b>ทั้งที่ใช้และไม่ใช้ออกซิเจน · การเติม hemin และ vitamin K เพิ่มการขึ้นของ anaerobe ${S.mu}</li>
 <li><b>MacConkey agar</b> ประกอบด้วย peptone, <b>bile salt</b>, lactose, <b>neutral red</b> และ <b>crystal violet</b> · bile salt กับ crystal violet กดเชื้อ gram-positive · เชื้อที่หมัก lactose สร้างกรดซึ่งตกตะกอน bile salt และทำให้ neutral red เป็นสีแดง ${S.mu}</li>
 <li><b>Mannitol salt agar</b> เลือกเฉพาะ staphylococci เพราะมี<b>เกลือเข้มข้นสูง</b> · <i>S. aureus</i> หมัก mannitol ได้ จึงให้โคโลนีสีเหลือง ${S.mu}</li>
 <li><b>XLD agar</b> ใช้หา <i>Salmonella</i> และ <i>Shigella</i> ในอุจจาระ · <b>sodium deoxycholate</b> กดเชื้อที่ไม่ก่อโรคส่วนใหญ่ · ตัวที่ขึ้นและหมักน้ำตาลได้ให้โคโลนีเหลือง ส่วน <i>Shigella</i> หมักไม่ได้ โคโลนีจึง<b>เป็นสีแดง</b> ${S.mu}</li>
 <li><b>Löwenstein-Jensen</b> มี glycerol, แป้งมันฝรั่ง, เกลือ และ<b>ไข่ทั้งฟองที่ทำให้แข็งตัว</b> · เติม <b>malachite green</b> เพื่อกดเชื้อ gram-positive ${S.mu}</li>
 <li><b>Middlebrook</b> ใช้เลี้ยง mycobacteria เหมือนกัน แต่<b>ทำให้แข็งด้วยวุ้น</b>แทนไข่ ${S.mu}</li>
 <li><b>Sabouraud dextrose agar</b> ใช้แยกเชื้อรา · ลด pH และเติมยาปฏิชีวนะแล้วจะกลายเป็นอาหารเลือกสำหรับเชื้อราได้ ${S.mu}</li></ul>
 <h3>Practical notes</h3><ul>
 <li>อาหารส่วนใหญ่ในปัจจุบันผลิตโดยบริษัท จึง<b>ไม่ใช่อาหารที่เพิ่งเตรียมใหม่</b> — ปกติไม่เป็นปัญหา แต่กระทบการแยกเชื้อที่เรื่องมาก เช่น <i>Bordetella pertussis</i> ${S.mu}</li>
 <li>ถ้าสงสัยเชื้อก่อโรคในลำไส้ตัวใดตัวหนึ่ง <b>ต้องบอกห้องปฏิบัติการ</b> เพื่อให้เลือกอาหารเฉพาะ — เช่น <i>Vibrio</i> ขึ้นบนอาหารทั่วไปได้ แต่อาหารเลือกทำให้เจอเร็วกว่ามาก ${S.mu}</li>
 <li>บางเชื้อ<b>ไม่ถูกแยกด้วยขั้นตอนปกติ</b> เช่น enterotoxigenic <i>E. coli</i> ซึ่งขึ้นได้แต่แยกจาก <i>E. coli</i> ปกติไม่ออก ${S.mu}</li>
 <li>และบางโรคเกิดจาก<b>สารพิษในอาหาร ไม่ใช่เชื้อที่โตในลำไส้</b> เช่น <i>S. aureus</i> และ <i>B. cereus</i> — จึงต้องเลือกตรวจสารพิษแทนการเพาะเชื้อ ${S.mu}</li></ul>`});

SEC.push({id:"ident",k:"c",t:"From colony to name",mm:"The bench key",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"การย้อมบอกกลุ่ม การทดสอบไม่กี่อย่างบอกชื่อ — และแค่นี้ก็ปรับยาได้แล้ว",{a:"start",c:"bh"});
 const ink=(p)=>`color-mix(in srgb,var(--sb-ink) ${p}%,var(--sb-surface))`;
 const dot=(x,y,c)=>`<circle style="fill:${c};stroke:none" cx="${x}" cy="${y}" r="4"/>`;
 const elbow=(x0,y0,x1,y1)=>`<path style="fill:none;stroke:${ink(24)};stroke-width:1.4" d="M${x0},${y0} L${x0},${y1} L${x1},${y1}"/>`;
 const tree=(x0,col,root,rows)=>{let g=dot(x0,70,col)+mL(x0+14,76,root,{a:"start",c:"bh"});
  rows.forEach(([lvl,test,name,y])=>{const px=x0+(lvl-1)*30,cx2=x0+lvl*30;
   g+=elbow(px,lvl===1?74:rows.filter(r=>r[0]===lvl-1&&r[3]<y).slice(-1)[0][3]+4,cx2-10,y)
    +dot(cx2,y,col)+mL(cx2+14,y+6,name,{a:"start",c:lvl===2?"bh":"s"})
    +mL(cx2+14,y+24,test,{a:"start",c:"s m"})});
  return g};
 b+=tree(34,"color-mix(in srgb,#6B4FC8 60%,var(--sb-surface))","Gram-positive cocci",[
  [1,"catalase-positive","Staphylococcus",118],
  [2,"coagulase-positive · β-hemolytic","S. aureus",166],
  [2,"coagulase-negative","Coagulase-negative staphylococci",214],
  [1,"catalase-negative","Streptococcus · Enterococcus",262],
  [2,"small colonies, wide β-hemolysis","S. pyogenes",310],
  [2,"α-hemolytic · soluble in bile","S. pneumoniae",358],
  [2,"large colonies · PYR-positive","Enterococcus",406]]);
 b+=tree(340,"color-mix(in srgb,#C2334A 60%,var(--sb-surface))","Gram-negative rods",[
  [1,"oxidase-negative · grows on MacConkey","Enterobacterales",118],
  [2,"ferments lactose","E. coli · Klebsiella",166],
  [2,"does not ferment lactose","Salmonella · Shigella · Proteus",214],
  [1,"oxidase-positive","Nonfermenters and curved rods",262],
  [2,"green colonies · fruity smell","Pseudomonas aeruginosa",310],
  [2,"thin curved rods · special media only","Campylobacter",358],
  [2,"small coccobacilli · chocolate agar","Haemophilus",406]]);
 b+=`<path class="m-sep" d="M24,446 L616,446"/>`
  +mL(24,472,"Beyond the bench",{a:"start",c:"bh"})
  +mL(24,492,"ห้องปฏิบัติการใหญ่เปลี่ยนการทดสอบทางชีวเคมีหลายอย่างไปเป็นการอ่านลำดับยีน 16S rRNA หรือ MALDI mass spectrometry",{a:"start",c:"s m"});
 return svg(b,"0 0 640 516")},
notes:()=>`<h3>Five ways to find the organism</h3><ul>
 <li>Murray แบ่งวิธีตรวจหาแบคทีเรียในสิ่งส่งตรวจไว้ห้าแบบ: <b>(1) กล้องจุลทรรศน์ (2) ตรวจแอนติเจน (3) เพาะเชื้อ (4) ตรวจกรดนิวคลีอิกที่จำเพาะ และ (5) ตรวจแอนติบอดีของผู้ป่วย</b> ${S.mu}</li>
 <li>วิธีที่ใช้บ่อยที่สุดในการ<b>ระบุชนิด</b>ของเชื้อที่แยกได้จากการเพาะคือ<b>การทดสอบทางชีวเคมี</b> ${S.mu}</li>
 <li>ในโรงเรียนแพทย์ใหญ่และห้องปฏิบัติการอ้างอิง การทดสอบเหล่านี้ถูกแทนที่ด้วย<b>การอ่านลำดับยีนจำเพาะของแบคทีเรีย เช่น 16S rRNA</b> หรือเครื่องมือทาง proteomics อย่าง <b>MALDI mass spectrometry</b> ${S.mu}</li></ul>
 <h3>Preliminary identification, as Murray tabulates it</h3>
 ${tbl(["Organism","What it looks like"],[
  ["<i>Staphylococcus aureus</i>","gram-positive cocci เป็นกลุ่ม · โคโลนีใหญ่ β-hemolytic · catalase-positive, coagulase-positive"],
  ["<i>Streptococcus pyogenes</i>","gram-positive cocci เป็นสายยาว · โคโลนีเล็กแต่วง β-hemolysis กว้าง · catalase-negative, PYR-positive"],
  ["<i>S. pneumoniae</i>","gram-positive cocci เป็นคู่และสายสั้น · โคโลนีเล็ก α-hemolytic · catalase-negative, ละลายในน้ำดี"],
  ["<i>Enterococcus</i> spp.","gram-positive cocci เป็นคู่และสายสั้น · โคโลนีใหญ่ α-hemolytic หรือไม่สลายเม็ดเลือด · catalase-negative, PYR-positive"],
  ["<i>Listeria monocytogenes</i>","แท่งเล็ก gram-positive · โคโลนีเล็ก β-hemolytic อ่อน ๆ · เคลื่อนไหวแบบ tumbling"],
  ["<i>Nocardia</i> spp.","ย้อมติดอ่อนทั้ง Gram และ modified acid-fast · เส้นสายบางแตกแขนง · โตช้า โคโลนีมีขน"],
  ["<i>Rhodococcus equi</i>","ย้อมติดอ่อน · ตอนแรกเป็นแท่งไม่แตกแขนง ต่อมาเป็น cocci · โตช้า โคโลนีสีชมพูแดง"],
  ["<i>Mycobacterium tuberculosis</i>","แท่ง acid-fast ชัดเจน · โตช้า · โคโลนีไม่มีสี · ยืนยันด้วย molecular probe"],
  ["<i>Pseudomonas aeruginosa</i>","แท่ง gram-negative ย้อมสม่ำเสมอ มักเป็นคู่ · โคโลนีแผ่กว้างเรืองเขียว · ขึ้นบน MacConkey แบบไม่หมักน้ำตาล · oxidase-positive"],
  ["<i>Campylobacter</i> spp.","แท่งโค้งบาง gram-negative · ไม่ขึ้นบนอาหารเลี้ยงเชื้อทั่วไป"],
  ["<i>Haemophilus</i> spp.","coccobacilli เล็ก gram-negative · ขึ้นบน chocolate agar · oxidase-positive"],
  ["<i>Brucella</i> และ <i>Francisella</i> spp.","coccobacilli เล็กมาก gram-negative · <b>เป็นเชื้ออันตรายทางชีวภาพ</b>"],
  ["<i>Clostridium perfringens</i>","แท่งใหญ่รูปสี่เหลี่ยม ไม่เห็นสปอร์ · วง hemolysis สองชั้น"],
  ["<i>Bacteroides fragilis</i> group","ย้อมติดอ่อน รูปร่างไม่แน่นอน · เป็น strict anaerobe"]])}`});

SEC.push({id:"ast",k:"c",t:"MIC, the disk and the gradient strip",mm:"Susceptibility testing",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"สองวิธีวัดสิ่งเดียวกัน — ความเข้มข้นต่ำสุดที่ยับยั้งเชื้อได้",{a:"start",c:"bh"});
 const ink=(p)=>`color-mix(in srgb,var(--sb-ink) ${p}%,var(--sb-surface))`;
 /* broth dilution: a doubling series, growth in the wells below the MIC */
 b+=mL(24,66,"Broth dilution",{a:"start",c:"bh"});
 const conc=["32","16","8","4","2","1","0.5","0.25"];
 conc.forEach((c,i)=>{const x=46+i*36,y=124,grow=i>=4;
  b+=`<path style="fill:${grow?"color-mix(in srgb,#8C6D46 26%,var(--sb-surface))":"color-mix(in srgb,#3E6FB0 5%,var(--sb-surface))"};stroke:${ink(34)};stroke-width:1.6" d="M${x-13},${y-26} L${x+13},${y-26} L${x+13},${y+14} q0,12 -13,12 q-13,0 -13,-12 Z"/>`;
  if(grow){const q=rng(i*7+5);for(let k=0;k<16;k++)
   b+=`<circle style="fill:${ink(26)};stroke:none" cx="${(x-11+q()*22).toFixed(1)}" cy="${(y-22+q()*34).toFixed(1)}" r="1.5"/>`}
  b+=mL(x,y+42,c,{c:"s m"})});
 b+=mL(46,184,"μg/ml",{a:"start",c:"s m"});
 b+=`<path style="fill:none;stroke:color-mix(in srgb,#C2334A 70%,var(--sb-surface));stroke-width:2.4;stroke-linecap:round" d="M${46+3*36-16},178 l32,0"/>`
  +mL(46+3*36,208,"MIC = 4",{c:"bh"})
  +mL(46+3*36,228,"ความเข้มข้นต่ำสุดที่ยังยับยั้งการเจริญได้",{c:"s m"});
 /* agar diffusion: zone size tracks the MIC */
 b+=`<path class="m-sep" d="M24,254 L616,254"/>`
  +mL(24,280,"Agar diffusion",{a:"start",c:"bh"});
 const cx=190,cy=410,R=112;
 b+=`<circle class="m-agar" style="fill:color-mix(in srgb,#C8A24A 10%,var(--sb-surface))" cx="${cx}" cy="${cy}" r="${R}"/>`;
 const q=rng(31);
 /* confluent lawn everywhere except the zones */
 for(let i=0;i<1500;i++){const a=q()*6.283,r=Math.sqrt(q())*R;
  const x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;
  const zones=[[cx-52,cy-46,40],[cx+54,cy-44,22],[cx-50,cy+54,58],[cx+52,cy+54,0]];
  if(zones.some(([zx,zy,zr])=>Math.hypot(x-zx,y-zy)<zr))continue;
  b+=`<circle style="fill:${ink(26)};stroke:none" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.9"/>`}
 [[cx-52,cy-46,40],[cx+54,cy-44,22],[cx-50,cy+54,58],[cx+52,cy+54,0]].forEach(([zx,zy,zr])=>{
  if(zr)b+=`<circle style="fill:none;stroke:${ink(16)};stroke-width:1;stroke-dasharray:3 4" cx="${zx}" cy="${zy}" r="${zr}"/>`;
  b+=`<circle style="fill:color-mix(in srgb,#E9E4DA 76%,var(--sb-surface));stroke:${ink(30)};stroke-width:1.2" cx="${zx}" cy="${zy}" r="11"/>`});
 b+=mL(cx,cy+R+26,"Mueller-Hinton agar",{c:"bh"})
  +mL(cx,cy+R+46,"วงยับยั้งยิ่งกว้าง เชื้อยิ่งไวต่อยานั้น",{c:"s m"});
 /* the gradient strip reads the MIC straight off the scale */
 const sx=470,sy=410;
 b+=`<circle class="m-agar" style="fill:color-mix(in srgb,#C8A24A 10%,var(--sb-surface))" cx="${sx}" cy="${sy}" r="${R}"/>`;
 const q2=rng(43);
 for(let i=0;i<1400;i++){const a=q2()*6.283,r=Math.sqrt(q2())*R;
  const x=sx+Math.cos(a)*r,y=sy+Math.sin(a)*r;
  const dy=y-sy,halfw=Math.max(0,54-Math.abs(dy+40)*.62);
  if(Math.abs(x-sx)<halfw+9)continue;
  b+=`<circle style="fill:${ink(26)};stroke:none" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.9"/>`}
 b+=`<path style="fill:none;stroke:${ink(20)};stroke-width:1;stroke-dasharray:3 4" d="M${sx-9},${sy+70} L${sx-63},${sy-40} L${sx-9},${sy-92} M${sx+9},${sy+70} L${sx+63},${sy-40} L${sx+9},${sy-92}"/>`;
 b+=`<path style="fill:color-mix(in srgb,#E9E4DA 80%,var(--sb-surface));stroke:${ink(34)};stroke-width:1.2" d="M${sx-9},${sy-96} L${sx+9},${sy-96} L${sx+9},${sy+86} L${sx-9},${sy+86} Z"/>`;
 for(let i=0;i<10;i++)b+=`<path style="fill:none;stroke:${ink(30)};stroke-width:1" d="M${sx-9},${(sy-86+i*18).toFixed(0)} l18,0"/>`;
 b+=`<path style="fill:none;stroke:color-mix(in srgb,#C2334A 70%,var(--sb-surface));stroke-width:2;stroke-linecap:round" d="M${sx+22},${sy-40} l24,0"/>`
  +mL(sx+52,sy-34,"MIC",{a:"start",c:"bh"});
 b+=mL(sx,sy+R+26,"Gradient strip",{c:"bh"})
  +mL(sx,sy+R+46,"อ่านค่า MIC ตรงจุดที่ขอบวงยับยั้งตัดกับแถบ",{c:"s m"});
 return svg(b,"0 0 640 586")},
notes:()=>`<h3>Two methods</h3><ul>
 <li>ห้องปฏิบัติการทำการทดสอบความไวต่อยาสองแบบ: <b>broth dilution</b> และ <b>agar diffusion</b> ${S.mu}</li>
 <li><b>Broth dilution</b>: เตรียมยาเจือจางเป็นลำดับในอาหารเหลว แล้วใส่เชื้อที่ความเข้มข้นมาตรฐาน · หลังบ่มข้ามคืน <b>ความเข้มข้นต่ำสุดที่ยับยั้งการเจริญคือ MIC</b> ${S.mu}</li>
 <li><b>Agar diffusion</b>: ป้ายเชื้อที่ความเข้มข้นมาตรฐานทั่วผิววุ้น แล้ววางแผ่นหรือแถบที่ชุบยา · หลังบ่มข้ามคืนจะเห็นบริเวณที่เชื้อไม่ขึ้นรอบแผ่นยา — <b>เชื้อยิ่งไว วงยิ่งกว้าง</b> ${S.mu}</li>
 <li>เมื่อ<b>ควบคุมเงื่อนไขการทดสอบให้เป็นมาตรฐาน</b> ขนาดวงยับยั้งจะสอดคล้องกับค่า MIC · มีบริษัทหนึ่งพัฒนาการทดสอบที่<b>อ่านค่า MIC ได้โดยตรง</b>จากวงรอบแถบที่มีความเข้มข้นยาไล่ระดับจากบนลงล่าง ${S.mu}</li>
 <li><b>MBC</b> คือความเข้มข้นต่ำสุดที่<b>ฆ่าเชื้อได้ 99.9%</b> ของประชากรเชื้อ — ต่างจาก MIC ที่เพียงยับยั้ง ${S.mu}</li></ul>
 <h3>What each method costs</h3><ul>
 <li>Broth dilution เดิมทำในหลอดทดลองและ<b>ใช้แรงงานมาก</b> · ปัจจุบันมีชุดสำเร็จที่เจือจางยาไว้ใน microtiter tray และอ่านผลอัตโนมัติ ${S.mu}</li>
 <li>ข้อเสียของชุดสำเร็จคือ<b>ผู้ผลิตเป็นคนกำหนดว่ามียาอะไรบ้างและเจือจางกี่ระดับ</b> — ยาที่เพิ่งออกใหม่จึงมักยังไม่มีผล ${S.mu}</li>
 <li>Diffusion test <b>ใช้แรงงานมากและการวัดขนาดวงมีความเป็นอัตวิสัย</b> ${S.mu}</li>
 <li>อาหารที่แนะนำสำหรับการทดสอบตามปกติคือ <b>Mueller-Hinton agar</b> ซึ่งองค์ประกอบถูกกำหนดไว้ชัดเพื่อให้ผลทำซ้ำได้ ${S.mu}</li></ul>`});

SEC.push({id:"sir",k:"c",t:"Reading S, I and R",mm:"Interpretation",leg:[],
notes:()=>`<h3>The number is not the answer</h3><ul>
 <li>การทดสอบ in vitro เป็นเพียง<b>การวัดผลของยาต่อเชื้อภายใต้เงื่อนไขที่กำหนด</b>เท่านั้น ${S.mu}</li>
 <li>การเลือกยาและผลลัพธ์ของผู้ป่วยขึ้นกับหลายอย่างที่เกี่ยวพันกัน: <b>เภสัชจลนศาสตร์ของยา ความเป็นพิษ ตัวโรค และสภาพผู้ป่วยโดยรวม</b> ${S.mu}</li>
 <li>ดังนั้น<b>เชื้อที่รายงานว่า “susceptible” อาจยังอยู่ต่อในการติดเชื้อ และเชื้อที่ “resistant” อาจถูกกำจัดได้</b> ${S.mu}</li>
 <li>ตัวอย่างที่ Murray ยกไว้สองข้อ: <b>aminoglycoside ต้องใช้ออกซิเจนเพื่อเข้าเซลล์แบคทีเรีย จึงไม่ได้ผลในฝีที่ไม่มีออกซิเจน</b> · และ<b>ความเข้มข้นของยาในปัสสาวะสูงมาก เชื้อที่ดื้อจึงอาจถูกกำจัดได้ในการติดเชื้อทางเดินปัสสาวะ</b> ${S.mu}</li></ul>
 <h3>Where the categories come from</h3><ul>
 <li>ค่า MIC หรือขนาดวงยับยั้งจะถูกแปลเป็นหมวดหมู่ด้วย <b>breakpoint</b> ซึ่งกำหนดโดยองค์กรที่ออกเกณฑ์ ไม่ใช่โดยตัวเลขเอง — เกณฑ์ที่ใช้กันคือ <b>CLSI</b> และ <b>EUCAST</b> ${S.gl}</li>
 <li>เกณฑ์เหล่านี้<b>มีการแก้ไขเป็นรุ่น ๆ</b> และ<b>คำว่า I ของสององค์กรไม่ได้หมายถึงสิ่งเดียวกัน</b> — ต้องดูว่าห้องปฏิบัติการที่ออกผลใช้เกณฑ์ของใครและรุ่นไหน ${S.gl}</li>
 <li>รายละเอียดของหมวดหมู่ตามรุ่นที่ใช้อยู่ รวมถึง susceptible dose-dependent มีอยู่ในหัวข้อ susceptibility testing ของบท Renal ซึ่งอ้างรุ่นของเกณฑ์ไว้ชัดเจน</li>
 <li>สิ่งที่ตำราไม่ได้ให้ และ<b>ไม่ควรจำเป็นตัวเลข</b> คือค่า breakpoint เอง — มันเปลี่ยนตามรุ่นของเกณฑ์ ให้เปิดจากเอกสารรุ่นปัจจุบันเสมอ ${S.gl}</li></ul>
 <h3>Definitions worth keeping straight</h3>
 ${tbl(["Term","Definition"],[
  ["Bacteriostatic","ยาที่ยับยั้งการเจริญของแบคทีเรีย แต่ไม่ฆ่า"],
  ["Bactericidal","ยาที่ฆ่าแบคทีเรีย"],
  ["MIC","ความเข้มข้นต่ำสุดที่ยับยั้งการเจริญ เมื่อทดสอบกับเชื้อที่ความเข้มข้นมาตรฐาน"],
  ["MBC","ความเข้มข้นต่ำสุดที่ฆ่าเชื้อได้ 99.9% ของประชากร"],
  ["Broad spectrum","ยับยั้งได้ทั้ง gram-positive และ gram-negative หลายชนิด"],
  ["Narrow spectrum","ออกฤทธิ์ต่อเชื้อจำนวนจำกัด"],
  ["Antibiotic synergism","ยาสองตัวที่ฆ่าเชื้อได้ดีขึ้นเมื่อใช้ร่วมกัน เทียบกับฤทธิ์ของแต่ละตัว"],
  ["Antibiotic antagonism","ยาที่ตัวหนึ่งไปรบกวนฤทธิ์ของอีกตัว จนผลรวมน้อยกว่าตัวที่แรงที่สุดเพียงตัวเดียว"]])}
 <h3>Why combinations are used at all</h3><ul>
 <li>Murray ให้เหตุผลสามข้อ: <b>(1) ขยายขอบเขตการออกฤทธิ์</b>สำหรับการรักษาแบบ empirical หรือการติดเชื้อหลายชนิดพร้อมกัน <b>(2) ป้องกันการเกิดเชื้อดื้อยาระหว่างการรักษา</b> และ <b>(3) ให้เกิดการฆ่าเชื้อแบบเสริมฤทธิ์</b> ${S.mu}</li></ul>`});

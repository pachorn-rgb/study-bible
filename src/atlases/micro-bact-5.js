//@include _micro-helpers.js
Object.assign(S,{mu:'<b class="sbb murray">Mu</b>'});
Object.assign(GN,{a:"Curved rods",b:"Respiratory",c:"Zoonoses"});

/* ===================================================================
   Gram-negative bacilli, part 2 — Murray ch 26 (Vibrio), ch 28
   (Campylobacter and Helicobacter), ch 24 (Haemophilus) and ch 29
   (Miscellaneous Gram-Negative Rods).
   =================================================================== */

SEC.push({id:"cholera",k:"a",t:"Cholera toxin turns the enterocyte into a tap",mm:"Vibrio cholerae",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"สารพิษไม่ได้ฆ่าเซลล์ — มันเปิดก๊อกค้างไว้",{a:"start",c:"bh"});
 /* one enterocyte, with the toxin arriving on its apical surface */
 const cx=190,top=70,bot=300,L=96,R=320;
 b+=`<path class="m-spin" d="M${L},${top} L${R},${top} L${R},${bot} L${L},${bot} Z"/>`
  +mgrainIn("chc","M"+L+","+top+" L"+R+","+top+" L"+R+","+bot+" L"+L+","+bot+" Z",L,top,R-L,bot-top,110,5,"m-gr",.9);
 for(let x=L+4;x<R;x+=5)b+=`<path class="m-kera" d="M${x},${top} L${x},${top-13}"/>`;
 b+=mL((L+R)/2,bot+22,"enterocyte",{c:"s m"});
 /* AB5 docking on GM1 */
 const tx=150,ty=top-30;
 [...Array(5)].forEach((_,i)=>{const a=i/5*Math.PI*2-Math.PI/2;
  b+=`<path class="m-ring2" d="${mblob(tx+Math.cos(a)*18,ty+Math.sin(a)*9,10,8,i*7+3,.08)}"/>`});
 b+=`<path class="m-body2" d="${mblob(tx,ty-20,15,13,23,.08)}"/>`+mL(tx,ty-16,"A",{c:"bh"});
 b+=`<path class="m-oantib" d="M${tx-18},${top-4} l0,-8 m12,8 l0,-8 m12,8 l0,-8 m12,8 l0,-8"/>`
  +mL(tx+54,top-6,"GM1 ganglioside",{a:"start",c:"s m"});
 /* inside: A subunit locks Gs on, adenylate cyclase runs away */
 const ay=150;
 b+=`<path class="m-body2" d="${mblob(cx-40,ay,15,13,29,.1)}"/>`+mL(cx-40,ay+4,"A",{c:"bh"})
  +`<path class="m-ring2" d="${mblob(cx+22,ay,24,18,31,.08)}"/>`+mL(cx+22,ay+4,"Gs",{c:"bh"})
  +`<path class="m-cyc" marker-end="url(#ah2)" d="M${cx-22},${ay} L${cx-6},${ay}"/>`;
 b+=`<path class="m-porin" d="M${cx+8},${ay+56} l0,-22 l34,0 l0,22 Z"/>`
  +mL(cx+25,ay+76,"adenylate cyclase",{c:"s m"})
  +`<path class="m-cyc" marker-end="url(#ah2)" d="M${cx+22},${ay+20} L${cx+22},${ay+32}"/>`;
 const cq=rng(17);
 for(let i=0;i<16;i++)b+=`<circle class="m-gene" cx="${(cx-50+cq()*130).toFixed(1)}" cy="${(ay+96+cq()*56).toFixed(1)}" r="3.4"/>`;
 b+=mL(cx+16,ay+170,"cAMP",{c:"bh"});
 /* water and chloride pouring out */
 const wq=rng(23);
 for(let i=0;i<16;i++){const y=top+16+wq()*200;
  b+=`<path class="m-oanti" style="stroke-width:2.4" d="M${(L-6).toFixed(1)},${y.toFixed(1)} L${(L-40-wq()*26).toFixed(1)},${(y-6+wq()*12).toFixed(1)}"/>`}
 b+=mlead2(tx+18,ty-10,360,56,["Five B subunits bind GM1","AB₅ แบบเดียวกับ heat-labile toxin ของ ETEC"],{a:"start"})
  +mlead2(cx+22,ay,360,108,["A subunit locks Gs on","adenylate cyclase ทำงานค้าง cAMP พุ่ง"],{a:"start"})
  +mlead2(L-30,top+110,360,160,["Chloride and water pour out","เซลล์หลั่งน้ำและคลอไรด์ออกไม่หยุด"],{a:"start"})
  +mL(360,206,"ถ่ายเป็นน้ำซาวข้าว (rice-water stool)",{a:"start",c:"bad"})
  +mL(360,226,"ไม่มีไข้ ไม่มีเลือด ไม่มีเม็ดเลือดขาว",{a:"start",c:"s m"})
  +mL(360,244,"เยื่อบุลำไส้ไม่ถูกทำลายเลย",{a:"start",c:"s m"});
 b+=`<path class="m-sep" d="M24,330 L616,330"/>`;
 [["Toxin-coregulated pilus (TCP)","เกาะเยื่อบุลำไส้ · และเป็น receptor ให้ phage CTXΦ ที่พายีนสารพิษเข้ามา",24,356],
  ["Accessory cholera enterotoxin · zonula occludens toxin","ถ่ายเหลวได้แม้ไม่มี cholera toxin · ตัวหลังคลาย tight junction",24,404],
  ["Serogroup O1 และ O139","สองกลุ่มนี้เท่านั้นที่ก่อ cholera แท้ · O1 มีสอง biotype คือ Classical และ El Tor",24,452]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 498")},
notes:()=>`<h3>The organism has to stick first</h3><ul>
 <li>การบีบตัวของลำไส้พยายามกวาดเชื้อออก แต่ <i>V. cholerae</i> เกาะชั้นเยื่อบุไว้ได้ด้วย <b>toxin-coregulated pilus (TCP)</b> และโปรตีน chemotaxis · <b>สายพันธุ์ที่เกาะไม่ได้ก่อโรคไม่ได้เลย</b> ${S.mu}</li>
 <li>ความรุนแรงของ <i>V. cholerae</i> เกิดจากการได้ยีนชุด TCP บน <b>Vibrio pathogenicity island</b> มาก่อน แล้วจึงติดเชื้อ <b>bacteriophage CTXΦ</b> ซึ่งพายีน ctxA และ ctxB ของสารพิษเข้ามา ${S.mu}</li>
 <li>ที่น่าสนใจคือ <b>TCP เองเป็น receptor ของ phage ตัวนั้น</b> — เชื้อต้องมีขาเกาะก่อน จึงจะรับยีนสารพิษได้ ${S.mu}</li></ul>
 <h3>The toxin</h3><ul>
 <li>Cholera toxin เป็น A–B toxin ที่<b>คล้ายกับ heat-labile enterotoxin ของ enterotoxigenic Escherichia coli</b> ทั้งโครงสร้างและหน้าที่ ${S.mu}</li>
 <li><b>วงของ B ห้าหน่วยที่เหมือนกัน</b>จับกับ <b>ganglioside GM1</b> บนเซลล์เยื่อบุลำไส้ ${S.mu}</li>
 <li>ส่วนที่ทำงานของ A ถูกนำเข้าเซลล์แล้วไป<b>จับกับ G protein ที่ควบคุม adenylate cyclase</b> ทำให้ ATP ถูกเปลี่ยนเป็น cyclic AMP ${S.mu}</li>
 <li>ผลคือ<b>การหลั่งน้ำออกมามากผิดปกติ</b> — เซลล์เยื่อบุไม่ถูกทำลาย แต่ทำงานเกินคำสั่ง ${S.mu}</li>
 <li>แม้ไม่มี cholera toxin <i>V. cholerae</i> O1 ก็ยังทำให้ถ่ายเหลวได้มาก ด้วย <b>accessory cholera enterotoxin</b> และ <b>zonula occludens toxin</b> ซึ่งตัวหลังคลาย tight junction ของเยื่อบุลำไส้เล็กจนผนังรั่วมากขึ้น ${S.mu}</li>
 <li><b>O139</b> ต่างจาก serotype non-O1 อื่น ๆ ตรงที่<b>มีชุดปัจจัยก่อโรคเดียวกับ O1</b> จึงทำให้ถ่ายเป็นน้ำแบบ cholera ได้เหมือนกัน ${S.mu}</li></ul>
 <h3>The other vibrios</h3><ul>
 <li><b><i>V. parahaemolyticus</i></b> มาจากหอยและน้ำทะเล ก่อ gastroenteritis · สายพันธุ์ก่อโรคส่วนใหญ่สร้าง <b>thermostable direct hemolysin</b> หรือ Kanagawa hemolysin ซึ่งเป็น enterotoxin ที่กระตุ้นการหลั่งคลอไรด์โดยเพิ่มแคลเซียมในเซลล์ ${S.mu}</li>
 <li>Hemolysin ตัวนี้ทำให้เกิด<b>β-hemolysis บนวุ้นที่ใช้เลือดคน แต่ไม่เกิดบนเลือดแกะ</b> — จึงใช้แยกสายพันธุ์ก่อโรคได้ ${S.mu}</li>
 <li><b><i>V. vulnificus</i></b> มาจากหอยและน้ำทะเลเช่นกัน แต่ก่อ <b>bacteremia และการติดเชื้อที่แผล</b> · ชื่อ vulnificus แปลว่า "ก่อบาดแผล" ${S.mu}</li></ul>
 <h3>Treatment</h3><ul>
 <li>หัวใจของการรักษาคือ<b>การทดแทนน้ำและเกลือแร่</b> ${S.mu}</li>
 <li>ยาปฏิชีวนะอย่าง azithromycin ช่วย<b>ลดปริมาณและระยะเวลาของการถ่ายเหลว</b> แต่ไม่ใช่สิ่งที่ช่วยชีวิต ${S.mu}</li>
 <li>สิ่งส่งตรวจต้องเก็บในสภาพที่<b>เป็นกลางถึงด่าง</b> เพราะเชื้อนี้ไม่ทนกรด ${S.mu}</li></ul>`});

SEC.push({id:"campylo",k:"a",t:"Campylobacter jejuni",mm:"Campylobacter",leg:[],
draw:()=>{let b="";
 /* the gull-wing shape is the identification */
 b+=mL(24,26,"Gull-wing and comma shapes on Gram stain",{a:"start",c:"bh"});
 const gull=(x,y,s,sd,flip)=>{const w=mwobC(sd);let d="";
  for(let k=0;k<=70;k++){const t=k/70,a=t*Math.PI*2;
   /* a slender S drawn as a closed ribbon */
   const u=(t<.5?t*2:(1-t)*2),px=-1+2*(t<.5?t*2:(1-t)*2);
   d+="";}
  return `<path class="m-body2" style="fill:none;stroke-width:${7*s};stroke-linecap:round" d="M${x-34*s},${y+(flip?-12:12)*s} Q${x-14*s},${y-(flip?22:22)*s} ${x},${y} Q${x+14*s},${y+(flip?22:22)*s} ${x+34*s},${y-(flip?-12:12)*s}"/>`};
 [[110,110,1,3,0],[220,96,.9,7,1],[320,126,1.05,11,0],[430,100,.85,13,1],[520,130,1,17,0]].forEach(([x,y,s,sd,f])=>{b+=gull(x,y,s,sd,f)});
 b+=mL(320,170,"สองเซลล์ต่อกันเป็นรูปปีกนกนางนวล",{c:"s m"});
 /* growth conditions */
 b+=`<path class="m-sep" d="M24,200 L616,200"/>`;
 [["Microaerophilic","ต้องการออกซิเจนต่ำกว่าบรรยากาศปกติ",24,226],
  ["42 °C","C. jejuni โตที่ 42 °C ได้ดีกว่าที่ 37 °C — ใช้เป็นสภาวะคัดเลือก",330,226],
  ["Curved, motile rods","เคลื่อนที่เร็วแบบพุ่งไปมา",24,272],
  ["Poultry is the reservoir","สัตว์ปีกเป็นแหล่งโรคหลัก",330,272]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 /* Guillain-Barré: molecular mimicry */
 b+=`<path class="m-sep" d="M24,318 L616,318"/>`
  +mL(24,344,"Guillain-Barré syndrome",{a:"start",c:"bad"});
 const ny=430;
 b+=`<path class="m-body2" style="fill:none;stroke-width:6" d="M110,${ny-34} Q130,${ny-50} 150,${ny-34}"/>`
  +mL(130,ny-58,"bacterial lipooligosaccharide",{c:"s m"});
 /* a myelinated axon */
 b+=`<path class="m-line" style="stroke-width:5;stroke:color-mix(in srgb,#C2185B 46%,var(--sb-surface))" d="M60,${ny+16} L280,${ny+16}"/>`;
 [90,150,210].forEach(x=>{b+=`<path class="m-fat" d="${mblob(x,ny+16,26,13,x,.08)}"/>`});
 b+=mL(170,ny+48,"peripheral nerve",{c:"s m"});
 const aq=rng(19);
 for(let i=0;i<7;i++){const x=70+aq()*200,y=ny-4+aq()*8;
  b+=`<path class="m-split" d="M${x.toFixed(1)},${(y-16).toFixed(1)} L${(x+10).toFixed(1)},${(y-6).toFixed(1)}"/>`}
 b+=mlead2(200,ny-20,320,366,["Antigenic cross-reactivity","แอนติบอดีที่สร้างต่อ lipooligosaccharide ของเชื้อไปจับเส้นประสาทของตัวเอง"],{a:"start"})
  +mL(320,416,"ราว 1 ใน 1000 ของผู้ป่วยที่วินิจฉัยได้",{a:"start",c:"s m"})
  +mL(320,434,"สัมพันธ์กับ serotype O:19 เป็นหลัก",{a:"start",c:"s m"})
  +mL(320,462,"อ่อนแรงสองข้างเท่ากันภายในไม่กี่วัน",{a:"start",c:"s m"})
  +mL(320,480,"ฟื้นตัวใช้เวลาเป็นเดือนหรือนานกว่านั้น",{a:"start",c:"s m"});
 return svg(b,"0 0 640 508")},
notes:()=>`<h3>How the laboratory catches it</h3><ul>
 <li><i>Campylobacter</i> แยกได้จากสามคุณสมบัติร่วมกัน: <b>ต้องการออกซิเจนต่ำ (microaerophilic)</b>, รูปร่างโค้ง และชุดทดสอบทางชีวเคมี ${S.mu}</li>
 <li><b><i>C. jejuni</i> โตที่ 42 °C ได้ดีกว่าที่ 37 °C</b> — ห้องปฏิบัติการจึงบ่มที่อุณหภูมิสูงเพื่อกดเชื้ออื่นในอุจจาระ ${S.mu}</li>
 <li>ปัจจุบันชุดตรวจ multiplex nucleic acid amplification สำหรับเชื้อก่อโรคในลำไส้มีทั้งความไวและความจำเพาะสูง ${S.mu}</li></ul>
 <h3>The disease</h3><ul>
 <li>เยื่อบุลำไส้ที่ติดเชื้อ<b>เป็นแผล บวม และมีเลือดออก</b> ซึ่งสอดคล้องกับการที่เชื้อบุกเข้าไปในเนื้อเยื่อ ${S.mu}</li>
 <li>บทบาทของ cytopathic toxin, enterotoxin และ endotoxin ที่ตรวจพบในเชื้อนี้<b>ยังไม่ชัดเจน</b> — สายพันธุ์ที่ไม่มีฤทธิ์ enterotoxin ก็ยังก่อโรคได้เต็มที่ ${S.mu}</li></ul>
 <h3>Guillain-Barré syndrome</h3><ul>
 <li><i>C. jejuni</i> และ <i>C. upsaliensis</i> สัมพันธ์กับ <b>Guillain-Barré syndrome</b> ซึ่งเป็นโรคภูมิคุ้มกันทำลายตนเองของระบบประสาทส่วนปลาย ${S.mu}</li>
 <li>ลักษณะคือ<b>อ่อนแรงสองข้างเท่ากันภายในไม่กี่วัน</b> และการฟื้นตัวใช้เวลาเป็นเดือนหรือนานกว่านั้น ${S.mu}</li>
 <li>เป็นภาวะแทรกซ้อนที่พบไม่บ่อย — ราว <b>1 ใน 1000</b> ของการติดเชื้อที่วินิจฉัยได้ — และสัมพันธ์กับ serotype จำเพาะ โดยเฉพาะ <b><i>C. jejuni</i> serotype O:19</b> ${S.mu}</li>
 <li>กลไกเชื่อว่าเป็น <b>antigenic cross-reactivity</b> ระหว่าง lipooligosaccharide ที่ผิวของเชื้อบางสายพันธุ์กับโครงสร้างของเส้นประสาทส่วนปลาย ${S.mu}</li></ul>`});

SEC.push({id:"hpylori",k:"a",t:"Helicobacter pylori makes its own neighbourhood",mm:"H. pylori",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"กระเพาะเป็นกรดเกินกว่าแบคทีเรียจะอยู่ได้ — เชื้อนี้จึงเปลี่ยนสภาพแวดล้อมรอบตัวเสียเอง",{a:"start",c:"bh"});
 /* the gastric wall: lumen, mucus layer, epithelium */
 const top=64,muc=top+8,epi=top+86,bot=top+170,L=24,R=392;
 b+=`<path class="m-eps" d="M${L},${muc} L${R},${muc} L${R},${epi} L${L},${epi} Z"/>`
  +`<path class="m-spin" d="M${L},${epi} L${R},${epi} L${R},${bot} L${L},${bot} Z"/>`
  +mgrainIn("hpe","M"+L+","+epi+" L"+R+","+epi+" L"+R+","+bot+" L"+L+","+bot+" Z",L,epi,R-L,bot-epi,80,5,"m-gr",.9);
 for(let x=L;x<R-10;x+=44)b+=`<path class="m-kcell" style="stroke-width:1.3" d="M${x},${epi} L${x},${bot}"/>`;
 b+=mL(R-6,top-2,"gastric lumen · pH 1–2",{a:"end",c:"s m"})
  +mL(R-6,(muc+epi)/2,"mucus layer",{a:"end",c:"s m"})
  +mL(R-6,bot-10,"gastric epithelium",{a:"end",c:"s m"});
 /* helical organisms burrowing through the mucus */
 const helix=(x,y,sd)=>`<path class="m-body2" style="fill:none;stroke-width:5;stroke-linecap:round" d="M${x-20},${y} q7,-11 14,0 q7,11 14,0 q7,-11 14,0"/>`;
 [[80,muc+22,3],[150,muc+42,7],[232,muc+30,11],[300,muc+52,13]].forEach(([x,y,sd])=>{b+=helix(x,y,sd)});
 /* the ammonia cloud each one makes */
 const nq=rng(23);
 [[80,muc+22],[150,muc+42],[232,muc+30],[300,muc+52]].forEach(([x,y],i)=>{
  for(let k=0;k<9;k++)b+=`<circle class="m-oantib" cx="${(x-18+nq()*44).toFixed(1)}" cy="${(y-16+nq()*32).toFixed(1)}" r="2.1"/>`});
 b+=mlead2(150,muc+42,410,66,["Urease","ย่อย urea เป็นแอมโมเนีย สะเทินกรดรอบตัว"],{a:"start"})
  +mlead2(232,muc+30,410,118,["Motility","รูปเกลียวกับ flagella ไชผ่านเมือกข้น"],{a:"start"})
  +mlead2(300,epi,410,170,["Adhesins","เกาะเซลล์เยื่อบุด้วยโปรตีนผิวหลายชนิด"],{a:"start"});
 /* damage */
 b+=`<path class="m-sep" d="M24,${bot+40} L616,${bot+40}"/>`;
 [["VacA — vacuolating cytotoxin A","เข้าไปในเซลล์เยื่อบุแล้วสร้าง vacuole จนเซลล์เสียหาย",24,bot+66],
  ["CagA","ฉีดเข้าเซลล์ผ่าน type VI secretion system",330,bot+66],
  ["cag pathogenicity island","ยีนราว 30 ตัว · กระตุ้น IL-8 จึงดึง neutrophil เข้ามา",24,bot+112],
  ["Mucinase · phospholipases","ย่อยชั้นเมือกและไขมันของเยื่อหุ้มเซลล์",330,bot+112]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 b+=mL(24,bot+162,"โปรตีเอสและอนุมูลอิสระที่ neutrophil ปล่อยออกมา เชื่อว่าเป็นตัวที่ทำให้เกิด gastritis และแผลในกระเพาะ",{a:"start",c:"bad"});
 return svg(b,"0 0 640 "+(bot+186))},
notes:()=>`<h3>Neutralise, then burrow</h3><ul>
 <li><i>H. pylori</i> สร้าง <b>urease</b> จำนวนมาก · คุณสมบัตินี้เชื่อว่าสำคัญต่อการรอดชีวิตในกรดของกระเพาะและต่อการ<b>เคลื่อนที่อย่างรวดเร็วผ่านชั้นเมือกข้นไปสู่บริเวณที่ pH เป็นกลาง</b> ${S.mu}</li>
 <li>การตั้งรกรากช่วงแรกอาศัยสองอย่าง: <b>โปรตีนของเชื้อที่ยับยั้งการสร้างกรด</b> และ<b>แอมโมเนียจาก urease ที่สะเทินกรด</b> ${S.mu}</li>
 <li>จากนั้นเชื้อที่เคลื่อนที่เก่งจะผ่านเมือกไปเกาะเซลล์เยื่อบุกระเพาะด้วย<b>โปรตีนผิวหลายชนิด</b> · โปรตีนผิวบางตัวยังจับโปรตีนของ host เพื่อช่วยหลบภูมิคุ้มกัน ${S.mu}</li></ul>
 <h3>Then damage</h3><ul>
 <li>ความเสียหายเฉพาะที่มาจาก<b>ผลพลอยได้ของ urease, mucinase, phospholipase</b> และ <b>vacuolating cytotoxin A (VacA)</b> ซึ่งเข้าไปในเซลล์เยื่อบุแล้วสร้าง vacuole ${S.mu}</li>
 <li>ปัจจัยสำคัญอีกตัวคือ <b>cytotoxin-associated gene (cagA)</b> ซึ่งอยู่บน pathogenicity island ที่มียีนราว 30 ตัว ${S.mu}</li>
 <li>ยีนชุดนี้สร้าง <b>type VI secretion system ที่ทำงานเหมือนเข็มฉีดยา</b> ฉีดโปรตีน CagA เข้าไปในเซลล์เยื่อบุ ซึ่งไปรบกวนโครงร่างเซลล์ ${S.mu}</li>
 <li>ยีนบน island นี้ยัง<b>กระตุ้นการสร้าง IL-8 ซึ่งดึง neutrophil เข้ามา</b> · โปรตีเอสและอนุมูลออกซิเจนที่ neutrophil ปล่อยออกมาเชื่อว่าเป็นตัวที่ทำให้เกิด gastritis และแผลในกระเพาะ ${S.mu}</li></ul>
 <h3>What it causes, and how common it is</h3><ul>
 <li>โรคที่สัมพันธ์กับ <i>H. pylori</i>: <b>gastritis, peptic ulcer, gastric adenocarcinoma</b> และ <b>mucosa-associated lymphoid tissue lymphoma</b> ${S.mu}</li>
 <li>อุบัติการณ์การเป็นพาหะสูงที่สุดในประเทศกำลังพัฒนา ซึ่ง <b>70–90%</b> ของประชากรมีเชื้อ และส่วนใหญ่ได้รับมาก่อนอายุ 10 ปี ${S.mu}</li>
 <li>ในประเทศอุตสาหกรรมอย่างสหรัฐความชุกต่ำกว่า <b>40%</b> และกำลังลดลง ${S.mu}</li>
 <li>การแพร่เชื่อว่าเป็นทาง<b>อุจจาระสู่ปาก</b> ${S.mu}</li>
 <li>Marshall และ Warren รายงานการค้นพบเชื้อนี้ในปี 1984 ซึ่งเปลี่ยนแนวทางการรักษา gastritis และ peptic ulcer ไปทั้งหมด ${S.mu}</li></ul>`});

SEC.push({id:"haemophilus",k:"b",t:"Haemophilus and the two factors it cannot make",mm:"Haemophilus",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"ชื่อสกุลแปลว่า \"รักเลือด\" — เพราะมันขาดสองอย่างที่ต้องหยิบจากเลือด",{a:"start",c:"bh"});
 /* the satellite phenomenon: the picture that explains both factors at once */
 const cx=160,cy=168,R=110;
 b+=`<circle cx="${cx}" cy="${cy}" r="${R}" style="fill:color-mix(in srgb,#8C6D46 22%,var(--sb-surface));stroke:color-mix(in srgb,var(--sb-ink) 18%,var(--sb-surface));stroke-width:1.5"/>`;
 /* the staphylococcal streak down the middle */
 b+=`<path d="M${cx},${cy-R+12} L${cx},${cy+R-12}" style="fill:none;stroke:color-mix(in srgb,#B7791F 44%,var(--sb-surface));stroke-width:9;stroke-linecap:round"/>`;
 const sq=rng(11);
 for(let i=0;i<40;i++){const y=cy-R+16+sq()*(2*R-32),d=14+sq()*52,sg=sq()<.5?-1:1;
  const r=Math.max(1.1,4.2-d/22);
  b+=`<circle class="m-col" cx="${(cx+sg*d).toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}"/>`}
 b+=mL(cx,cy-R-14,"Satellite phenomenon",{c:"bh"})
  +mlead2(cx,cy-40,296,86,["Staphylococcus streak","ปล่อย V factor ออกมา และสลายเม็ดเลือดแดงจน X factor หลุดออกมาด้วย"],{a:"start"})
  +mlead2(cx+30,cy+30,296,138,["Haemophilus colonies","ใหญ่ที่สุดตรงที่ใกล้รอยขีด แล้วเล็กลงเมื่อห่างออกไป"],{a:"start"});
 b+=`<path class="m-sep" d="M24,296 L616,296"/>`;
 [["X factor","hemin — ตั้งชื่อว่า X เพราะตอนนั้นยังไม่รู้ว่ามันคืออะไร",24,322],
  ["V factor","nicotinamide adenine dinucleotide — V มาจาก vitamin",330,322],
  ["Chocolate agar","sheep blood agar ที่อุ่นเบา ๆ เพื่อทำลายตัวยับยั้ง V factor และปล่อยทั้งสองออกมา",24,368]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 /* the capsule that the vaccine targets */
 b+=`<path class="m-sep" d="M24,418 L616,418"/>`
  +mL(24,444,"Haemophilus influenzae type b",{a:"start",c:"bh"})
  +mL(24,464,"capsule เป็น polyribitol phosphate (PRP) ซึ่งกันการถูกกลืนกิน และเป็นเป้าของวัคซีน conjugate",{a:"start",c:"s m"})
  +mL(24,492,"meningitis · epiglottitis · cellulitis · arthritis",{a:"start",c:"s m"})
  +mL(24,520,"ความเสี่ยงสูงขึ้นมากในผู้ที่ไม่มีแอนติบอดีต่อ PRP ผู้ที่พร่อง complement และผู้ที่ตัดม้าม",{a:"start",c:"bad"});
 return svg(b,"0 0 640 546")},
notes:()=>`<h3>X and V</h3><ul>
 <li><i>Haemophilus</i> ส่วนใหญ่ต้องการอาหารเลี้ยงเชื้อที่เติมปัจจัยกระตุ้นการเติบโตหนึ่งหรือทั้งสองอย่าง: <b>hemin ซึ่งเรียกว่า X factor</b> เพราะตอนนั้นยังไม่รู้ว่าเป็นสารอะไร และ <b>nicotinamide adenine dinucleotide ซึ่งเรียกว่า V factor</b> จากคำว่า vitamin ${S.mu}</li>
 <li>ทั้งสองมีอยู่ในอาหารที่เติมเลือด แต่<b>ต้องอุ่น sheep blood agar เบา ๆ เพื่อทำลายตัวยับยั้ง V factor</b> ${S.mu}</li>
 <li>นั่นคือเหตุผลที่การแยกเชื้อ <i>Haemophilus</i> ใช้ <b>chocolate agar</b> ซึ่งก็คือวุ้นเลือดที่ถูกให้ความร้อนจนเป็นสีน้ำตาล ${S.mu}</li></ul>
 <h3>The capsule decides the severity</h3><ul>
 <li>ปัจจัยก่อโรคหลักของ <i>H. influenzae</i> type b คือ <b>capsule ที่กันการถูกกลืนกิน</b> ซึ่งประกอบด้วย ribose, ribitol และ phosphate เรียกรวมว่า <b>polyribitol phosphate (PRP)</b> ${S.mu}</li>
 <li>แอนติบอดีต่อ capsule <b>กระตุ้นการกลืนกินและการฆ่าเชื้อด้วย complement อย่างมาก</b> ${S.mu}</li>
 <li>แอนติบอดีเหล่านี้เกิดได้จากการติดเชื้อตามธรรมชาติ จากวัคซีน PRP หรือจากแอนติบอดีที่รับมาจากแม่ ${S.mu}</li>
 <li>ความรุนแรงของโรคทั่วร่างกาย<b>แปรผกผันกับอัตราการกำจัดเชื้อออกจากเลือด</b> ${S.mu}</li>
 <li>ความเสี่ยงของ meningitis และ epiglottitis <b>สูงขึ้นอย่างมีนัยสำคัญ</b>ในผู้ที่ไม่มีแอนติบอดีต่อ PRP ผู้ที่พร่อง complement และผู้ที่ตัดม้าม ${S.mu}</li>
 <li>ส่วน <b>lipid A ของ lipopolysaccharide</b> กระตุ้นการอักเสบของเยื่อหุ้มสมอง ${S.mu}</li>
 <li><b>วัคซีน conjugate PRP</b> ป้องกันการติดเชื้อ <i>H. influenzae</i> ได้เกือบทั้งหมด ${S.mu}</li></ul>
 <h3>The other species</h3><ul>
 <li><b><i>H. ducreyi</i></b> ก่อ <b>chancroid</b> ซึ่งเป็นแผลริมอ่อนที่อวัยวะเพศ · พบไม่บ่อยในปัจจุบัน ${S.mu}</li>
 <li>สมาชิกอื่นของสกุลก่อ<b>เยื่อบุตาอักเสบเป็นหนองเฉียบพลัน</b>และการติดเชื้อฉวยโอกาสอื่น ${S.mu}</li></ul>`});

SEC.push({id:"pertussis",k:"b",t:"Bordetella pertussis: three stages, two toxins",mm:"Pertussis",leg:[],
draw:()=>{let b="";
 /* the ciliated epithelium, and what the toxins do to it */
 const top=60,epi=top+70,L=24,R=360;
 b+=`<path class="m-spin" d="M${L},${epi} L${R},${epi} L${R},${epi+70} L${L},${epi+70} Z"/>`
  +mgrainIn("bpe","M"+L+","+epi+" L"+R+","+epi+" L"+R+","+(epi+70)+" L"+L+","+(epi+70)+" Z",L,epi,R-L,70,60,5,"m-gr",.9);
 /* cilia — upright on the left, fallen on the right */
 for(let x=L+6;x<R;x+=7){const t=(x-L)/(R-L),lean=t*t*26;
  b+=`<path class="m-kera" style="stroke-width:1.4" d="M${x},${epi} q${lean*.4},${-14+t*7} ${lean},${-20+t*14}"/>`}
 const bact=(x,y,sd)=>`<path class="m-body2" d="${mrod(x,y,20,7,sd,.06)}"/>`;
 [[120,epi-26,3],[196,epi-20,7],[268,epi-14,11],[320,epi-10,13]].forEach(([x,y,sd])=>{b+=bact(x,y,sd)});
 b+=mL(L,top-16,"Ciliated respiratory epithelium",{a:"start",c:"bh"})
  +mlead2(120,epi-26,380,66,["Pertactin · FHA · fimbriae","adhesin สามตัวที่เกาะเซลล์ที่มี cilia"],{a:"start"})
  +mlead2(268,epi-6,380,118,["Tracheal cytotoxin","หยุดการโบกของ cilia — กลไกกวาดเสมหะจึงพัง"],{a:"start"})
  +mlead2(196,epi+30,380,170,["Pertussis toxin","โปรตีนที่คุม adenylate cyclase หมดฤทธิ์","cAMP สูงขึ้น เสมหะยิ่งมาก"],{a:"start"})
  +mL(380,222,"Dermonecrotic toxin",{a:"start",c:"bh"})
  +mL(380,242,"ทำให้เนื้อเยื่อขาดเลือดเฉพาะที่",{a:"start",c:"s m"});
 /* the three stages as a timeline */
 const ty=320,X0=50,X1=584;
 b+=`<path class="m-sep" d="M24,${ty-40} L616,${ty-40}"/>`
  +`<path class="ax" d="M${X0},${ty} L${X1+16},${ty}" marker-end="url(#ah)"/>`;
 const seg=(f0,f1,cls,t2,d1,d2)=>{const x0=X0+(X1-X0)*f0,x1=X0+(X1-X0)*f1;
  return `<rect class="${cls}" x="${x0}" y="${ty-34}" width="${x1-x0}" height="28" rx="8"/>`
   +mL((x0+x1)/2,ty-15,t2,{c:"bh"})+mL((x0+x1)/2,ty+24,d1,{c:"s m"})+mL((x0+x1)/2,ty+42,d2,{c:"s m"})};
 b+=seg(0,.28,"m-porin","Catarrhal","เหมือนหวัดธรรมดา","เชื้อมากที่สุด แพร่เก่งที่สุด")
  +seg(.28,.68,"m-body2","Paroxysmal","ไอเป็นชุดแล้วหายใจเข้าดัง whoop","lymphocytosis เด่น")
  +seg(.68,1,"m-tail","Convalescent","ไอน้อยลงและเบาลง","ภาวะแทรกซ้อนตามมาได้");
 b+=mL(X0,ty+78,"ระยะฟักตัว 7–10 วัน · catarrhal 1–2 สัปดาห์ · paroxysmal 2–4 สัปดาห์",{a:"start",c:"s m"})
  +mL(X0,ty+100,"ช่วงที่ไออย่างหนักอาจไอเป็นชุดถึง 40–50 ครั้งต่อวัน",{a:"start",c:"s m"})
  +mL(X0,ty+128,"ผู้ป่วยในระยะ catarrhal คือคนที่อันตรายที่สุดต่อคนรอบข้าง เพราะยังไม่มีใครรู้ว่าเป็นอะไร",{a:"start",c:"bad"});
 return svg(b,"0 0 640 "+(ty+152))},
notes:()=>`<h3>Attachment, then two kinds of damage</h3><ul>
 <li>การติดเชื้อเริ่มเมื่อสูดละอองที่มีเชื้อเข้าไป แล้วเชื้อเกาะและเพิ่มจำนวนบน<b>เซลล์เยื่อบุที่มี cilia</b> ${S.mu}</li>
 <li>การเกาะอาศัยโปรตีน adhesin สามตัว: <b>pertactin, filamentous hemagglutinin และ fimbriae</b> ${S.mu}</li>
 <li>ความเสียหายเฉพาะที่มาจาก <b>dermonecrotic toxin</b> ซึ่งทำให้เนื้อเยื่อขาดเลือด และ <b>tracheal cytotoxin</b> ซึ่ง<b>ยับยั้งการเคลื่อนไหวของ cilia</b> ทำให้กลไกกวาดเสมหะของทางเดินหายใจเสียไป — นี่คือต้นเหตุของอาการไอที่เป็นเอกลักษณ์ ${S.mu}</li>
 <li>ความเป็นพิษทั่วร่างกายมาจาก <b>pertussis toxin</b> เป็นหลัก · มัน<b>ทำให้โปรตีนที่ควบคุม adenylate cyclase หมดฤทธิ์</b> ระดับ cyclic AMP จึงสูงขึ้น ตามด้วยการหลั่งสารคัดหลั่งและเสมหะที่มากขึ้น ซึ่งเป็นลักษณะของระยะ paroxysmal ${S.mu}</li></ul>
 <h3>The three stages</h3><ul>
 <li>หลังระยะฟักตัว <b>7–10 วัน</b> โรคดำเนินผ่านสามระยะ ${S.mu}</li>
 <li><b>Catarrhal stage</b> เหมือนหวัดธรรมดา — น้ำมูกใส จาม อ่อนเพลีย เบื่ออาหาร ไข้ต่ำ ๆ · <b>ปริมาณเชื้อสูงสุดอยู่ในระยะนี้</b> และเพราะยังไม่มีใครรู้ว่าเป็นโรคอะไร ผู้ป่วยระยะนี้จึงเสี่ยงต่อคนรอบข้างมากที่สุด ${S.mu}</li>
 <li>หลัง 1–2 สัปดาห์เข้าสู่ <b>paroxysmal stage</b> · เซลล์ที่มี cilia หลุดออกจากทางเดินหายใจ การกวาดเสมหะเสียไป · ลักษณะเด่นคือ<b>ไอเป็นชุดแล้วหายใจเข้าดัง whoop</b> มักจบด้วยอาเจียนและอ่อนเพลีย · พบ <b>lymphocytosis</b> ชัดเจน · ช่วงที่หนักที่สุดอาจไอเป็นชุดถึง <b>40–50 ครั้งต่อวัน</b> ${S.mu}</li>
 <li>หลัง 2–4 สัปดาห์เข้าสู่ <b>convalescent stage</b> ซึ่งการไอลดลงทั้งจำนวนและความรุนแรง แต่ภาวะแทรกซ้อนตามมาได้ ${S.mu}</li></ul>
 <h3>Still a problem</h3><ul>
 <li>Pertussis เป็นโรคของคนเท่านั้น <b>ไม่มีแหล่งโรคในสัตว์หรือสิ่งแวดล้อม</b> ${S.mu}</li>
 <li>แม้อุบัติการณ์ลดลงมากหลังมีวัคซีนในปี 1949 แต่โรคยังเป็นโรคประจำถิ่นทั่วโลก · ปี 2014 ประเมินว่ามีการติดเชื้อ <b>24 ล้านราย และเสียชีวิต 160,000 ราย</b> ส่วนใหญ่ในเด็กที่ไม่ได้รับวัคซีน ${S.mu}</li>
 <li>เดิมถือเป็นโรคของเด็ก แต่ปัจจุบัน<b>สัดส่วนที่สำคัญพบในวัยรุ่นและผู้ใหญ่</b> ${S.mu}</li></ul>`});

SEC.push({id:"legionella",k:"c",t:"Legionella lives in the water system",mm:"Legionella",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"เชื้อนี้อยู่ในอะมีบาในน้ำตามธรรมชาติ แล้วใช้กลไกเดียวกันนั้นกับ macrophage ของเรา",{a:"start",c:"bh"});
 /* amoeba in water, then alveolar macrophage — the same trick twice */
 const draw1=(cx,cy,t2,d,sd)=>{let g=`<path class="m-body" style="fill:color-mix(in srgb,#8d8578 10%,var(--sb-surface))" d="${mblob(cx,cy,84,62,sd,.1)}"/>`
   +mgrainIn("lg"+sd,mblob(cx,cy,84,62,sd,.1),cx-84,cy-62,168,124,70,sd+3,"m-gr",.9);
  const q=rng(sd+9);
  for(let i=0;i<8;i++){const a=q()*6.28,r=q()*44;
   g+=`<path class="m-body2" d="${mrod(cx+Math.cos(a)*r,cy+Math.sin(a)*r,22,6.5,i*5+sd,.06)}"/>`}
  return g+mL(cx,cy+84,t2,{c:"bh"})+mL(cx,cy+102,d,{c:"s m"})};
 b+=draw1(150,140,"Free-living amoeba","ในน้ำตามธรรมชาติ",5)
  +draw1(430,140,"Alveolar macrophage","ในปอดของผู้ป่วย",11);
 b+=`<path class="m-cyc" marker-end="url(#ah)" d="M${244},${140} L${336},${140}"/>`
  +mL(290,124,"กลไกเดียวกัน",{c:"s m"});
 b+=mL(24,276,"จับ complement component แล้วถูกกลืนเข้าไป · จากนั้นยับยั้งไม่ให้ phagolysosome รวมตัว",{a:"start",c:"s m"})
  +mL(24,296,"เชื้อจึงรอดจากอนุมูลอิสระและเพิ่มจำนวนอยู่ข้างใน",{a:"start",c:"s m"})
  +mL(24,324,"cytokine ที่ macrophage ที่ติดเชื้อปล่อยออกมา คือที่มาของการอักเสบรุนแรงซึ่งเป็นลักษณะของโรคนี้",{a:"start",c:"bad"});
 /* where it comes from, and the two diseases */
 b+=`<path class="m-sep" d="M24,354 L616,354"/>`;
 [["Legionnaires disease","ปอดอักเสบที่รุนแรงได้",24,380],
  ["Pontiac fever","อาการคล้ายไข้หวัดใหญ่ที่หายเอง",330,380],
  ["Water systems","หอหล่อเย็น คอนเดนเซอร์ และระบบน้ำรวมถึงในโรงพยาบาล",24,426],
  ["Control","superheating หรือ copper-silver ionization",330,426],
  ["BCYE agar","อาหารเลี้ยงเชื้อจำเพาะ · microscopy ความไวต่ำ",24,472],
  ["Urinary antigen","ไวสำหรับ L. pneumophila serogroup 1 แต่ไวต่ำกับ serogroup และสปีชีส์อื่น",330,472]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 b+=mL(24,522,"ผู้ที่เสี่ยงที่สุดคือผู้ที่การทำงานของปอดบกพร่อง และผู้ที่ภูมิคุ้มกันระดับเซลล์ลดลง โดยเฉพาะผู้ได้รับการปลูกถ่ายอวัยวะ",{a:"start",c:"s m"});
 return svg(b,"0 0 640 548")},
notes:()=>`<h3>A facultative intracellular pathogen</h3><ul>
 <li>Legionellae เป็น <b>facultative intracellular bacteria</b> ที่เพิ่มจำนวนใน<b>อะมีบาที่อยู่อิสระในธรรมชาติ</b> และใน <b>alveolar macrophage, monocyte และเซลล์เยื่อบุถุงลม</b>ในผู้ติดเชื้อ ${S.mu}</li>
 <li>ความสามารถที่จะติดเชื้อและเพิ่มจำนวนใน macrophage เริ่มจากการ<b>จับกับองค์ประกอบของ complement</b> ${S.mu}</li>
 <li>เมื่ออยู่ข้างในแล้ว เชื้อรอดจากอนุมูลอิสระได้เพราะมัน<b>ยับยั้งการรวมตัวของ phagolysosome</b> ${S.mu}</li>
 <li><b>Chemokine และ cytokine ที่ macrophage ที่ติดเชื้อปล่อยออกมา</b> กระตุ้นการอักเสบอย่างรุนแรง ซึ่งเป็นลักษณะเฉพาะของการติดเชื้อนี้ ${S.mu}</li></ul>
 <h3>Where people catch it</h3><ul>
 <li>แหล่งคือ<b>ระบบน้ำ</b> — หอหล่อเย็น คอนเดนเซอร์ และระบบน้ำของอาคารรวมถึงโรงพยาบาล ${S.mu}</li>
 <li>แบคทีเรียอาศัยอยู่ใน<b>อะมีบาในน้ำและเพิ่มจำนวนในนั้น</b> ก่อนจะถูกพ่นออกมาเป็นละออง ${S.mu}</li>
 <li>การควบคุมทำด้วย<b>การเพิ่มอุณหภูมิน้ำ (superheating) หรือ copper-silver ionization</b> ${S.mu}</li>
 <li>ผู้ที่เสี่ยงที่สุดคือผู้ที่<b>การทำงานของปอดบกพร่อง</b> และผู้ที่<b>ภูมิคุ้มกันระดับเซลล์ลดลง</b> โดยเฉพาะผู้ป่วยปลูกถ่ายอวัยวะ ${S.mu}</li></ul>
 <h3>Two diseases, one organism</h3><ul>
 <li><b>Legionnaires disease</b> คือปอดอักเสบที่รุนแรงได้ ${S.mu}</li>
 <li><b>Pontiac fever</b> คืออาการคล้ายไข้หวัดใหญ่ที่หายได้เอง ${S.mu}</li>
 <li>ในสหรัฐมีรายงานหลายพันรายต่อปี แต่จำนวนจริงเชื่อว่าสูงกว่านั้นมาก — อาจถึง 18,000 รายต่อปี ${S.mu}</li></ul>
 <h3>Diagnosis</h3><ul>
 <li><b>Microscopy มีความไวต่ำ</b> ${S.mu}</li>
 <li>การเพาะเชื้อต้องใช้อาหารจำเพาะคือ <b>BCYE agar</b> ${S.mu}</li>
 <li>การตรวจแอนติเจน<b>ไวสำหรับ <i>L. pneumophila</i> serogroup 1</b> แต่ความไวต่ำสำหรับ serogroup และสปีชีส์อื่น — ผลลบจึงไม่ตัดโรคออก ${S.mu}</li></ul>`});

SEC.push({id:"zoonoses",k:"c",t:"Brucella and Francisella",mm:"Brucella · Francisella",leg:[],
draw:()=>tbl(["Organism","Disease","Picture"],[
 ["Brucella melitensis","brucellosis","โรคทั่วร่างกายเฉียบพลันและรุนแรง มีภาวะแทรกซ้อนตามมา"],
 ["Brucella abortus","brucellosis","อาการไม่รุนแรง แต่มีภาวะแทรกซ้อนเป็นหนอง"],
 ["Brucella suis","brucellosis","เรื้อรัง เป็นหนอง และทำลายเนื้อเยื่อ"],
 ["Brucella canis","brucellosis","อาการไม่รุนแรง มีภาวะแทรกซ้อนเป็นหนอง"],
 ["Francisella tularensis — ulceroglandular","tularemia","ตุ่มที่เจ็บตรงจุดที่เชื้อเข้า แล้วต่อมน้ำเหลืองโต"],
 ["Francisella tularensis — oculoglandular","tularemia","หลังเชื้อเข้าตา"],
 ["Francisella tularensis — pneumonic","tularemia","ปอดอักเสบพร้อมอาการของ sepsis"]]),
notes:()=>`<h3>Brucellosis</h3><ul>
 <li><i>Brucella</i> ตั้งชื่อตาม Sir David Bruce ผู้ซึ่งเป็นคนแรกที่ระบุว่าเชื้อนี้เป็นสาเหตุของ <b>undulant fever</b> — ไข้ที่ขึ้นลงเป็นลูกคลื่น ${S.mu}</li>
 <li>โรคเริ่มด้วยไข้ที่เป็น ๆ หาย ๆ และ<b>ลุกลามไปทั่วร่างกายได้</b> รวมถึงระบบทางเดินอาหาร ${S.mu}</li>
 <li>ความรุนแรงต่างกันตามสปีชีส์: <b><i>B. melitensis</i></b> รุนแรงที่สุด · <b><i>B. suis</i></b> เรื้อรังและทำลายเนื้อเยื่อ · <b><i>B. abortus</i> และ <i>B. canis</i></b> อาการไม่รุนแรงแต่มีภาวะแทรกซ้อนเป็นหนอง ${S.mu}</li></ul>
 <h3>Tularemia</h3><ul>
 <li><i>Francisella</i> ตั้งชื่อตาม Edward Francis นักจุลชีววิทยาชาวอเมริกันผู้บรรยายโรค tularemia เป็นคนแรก ${S.mu}</li>
 <li>มันเป็น <b>facultative intracellular pathogen</b> — การกำจัดจึงต้องอาศัยภูมิคุ้มกันระดับเซลล์ ${S.mu}</li>
 <li>รูปแบบของโรคขึ้นกับ<b>ทางที่เชื้อเข้า</b>: <b>ulceroglandular</b> คือมีตุ่มเจ็บตรงจุดที่เชื้อเข้าแล้วต่อมน้ำเหลืองโต · <b>oculoglandular</b> เมื่อเชื้อเข้าตา · <b>pneumonic</b> คือปอดอักเสบพร้อมอาการ sepsis · และยังมีรูปแบบ typhoidal, oropharyngeal และ gastrointestinal ${S.mu}</li>
 <li><i>F. tularensis</i> subsp. <b>tularensis (type A)</b> พบเฉพาะในอเมริกาเหนือ ส่วน subsp. <b>holarctica (type B)</b> เป็นโรคประจำถิ่นทั่วซีกโลกเหนือ ${S.mu}</li></ul>`});

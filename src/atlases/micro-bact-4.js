//@include _micro-helpers.js
Object.assign(S,{mu:'<b class="sbb murray">Mu</b>'});
Object.assign(GN,{a:"Enterobacterales",b:"Escherichia coli",c:"Invasive enteric pathogens",d:"Non-fermenters"});

/* ===================================================================
   Gram-negative bacilli, part 1 — Murray ch 25 (Enterobacteriaceae)
   and ch 27 (Pseudomonas and Related Bacteria).
   =================================================================== */

SEC.push({id:"entero",k:"a",t:"The family, and the three antigens that name it",mm:"The family",leg:[],
draw:()=>{let b="";
 const wv=mwob(5,2.0),YM=168,X0=24,X1=320,LX=338;
 /* the envelope, with the antigens that serotyping is built on */
 const cyTop=x=>YM+9+wv(x);
 let cy=`M${X0},${cyTop(X0)}`;for(let x=X0;x<=X1;x+=7)cy+=`L${x.toFixed(1)},${cyTop(x).toFixed(1)}`;
 cy+=`L${X1},${YM+48} L${X0},${YM+48} Z`;
 b+=`<path class="m-cyto" d="${cy}"/>`+mgrainIn("enc",cy,X0,YM,X1-X0,48,56,3,"m-gr",.85);
 b+=mbil(X0,X1,x=>YM+wv(x));
 const OM=YM-66;
 let pp=`M${X0},${OM+9+wv(X0)}`;for(let x=X0;x<=X1;x+=7)pp+=`L${x.toFixed(1)},${(OM+9+wv(x)).toFixed(1)}`;
 for(let x=X1;x>=X0;x-=7)pp+=`L${x.toFixed(1)},${(YM-9+wv(x)).toFixed(1)}`;
 b+=`<path class="m-peri" d="${pp}Z"/>`+mpgl(X0,X1,x=>YM-26+wv(x),2,-6.4,9,{amp:1.1});
 b+=mbil(X0,X1,x=>OM+wv(x),{core:"m-ocore",head:"m-ohead",tail:"m-otail"});
 /* full-length O polysaccharide — this is LPS, not LOS */
 for(let i=0;i<8;i++){const x=X0+20+i*38;b+=mlps(x,OM-8+wv(x),40+i,8)}
 /* K capsule as a loose coat over everything */
 b+=`<path class="m-cap" d="M${X0},${OM-74} q${(X1-X0)/2},-16 ${X1-X0},0"/>`;
 /* H flagellum */
 b+=`<path class="m-fla" d="M${X0+60},${OM-10} ${[...Array(4)].map((_,k)=>`Q${X0+44-k*16},${OM-28-k*14} ${X0+30-k*16},${OM-16-k*14}`).join(" ")}"/>`;
 b+=mlead2(X0+180,OM-82,LX,46,["K antigen","capsule · ใน Salmonella Typhi เรียก Vi antigen"],{a:"start"})
  +mlead2(X0+230,OM-52,LX,98,["O antigen","สายน้ำตาลนอกสุดของ LPS · ทนความร้อน"],{a:"start"})
  +mlead2(X0+256,OM,LX,150,["Core + lipid A","lipid A คือ endotoxin · ออกฤทธิ์เมื่อเซลล์แตก"],{a:"start"})
  +mlead2(X0+14,OM-44,LX,202,["H antigen","flagellin · ไม่ทนความร้อน"],{a:"start"});
 /* MacConkey: the plate that sorts the family in one look */
 b+=`<path class="m-sep" d="M24,252 L616,252"/>`
  +mL(24,278,"MacConkey agar sorts the family in one look",{a:"start",c:"bh"});
 const plate=(cx,cy2,fer,t2,d)=>{let g=`<circle cx="${cx}" cy="${cy2}" r="62" style="fill:color-mix(in srgb,#B7791F 12%,var(--sb-surface));stroke:color-mix(in srgb,var(--sb-ink) 18%,var(--sb-surface));stroke-width:1.5"/>`;
  const q=rng(fer?7:13);
  for(let i=0;i<7;i++){const a=q()*6.28,r=q()*40,x=cx+Math.cos(a)*r,y=cy2+Math.sin(a)*r;
   g+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(5+q()*3).toFixed(1)}" style="fill:${fer?"color-mix(in srgb,#C2185B 46%,var(--sb-surface))":"color-mix(in srgb,var(--sb-surface) 92%,var(--sb-ink))"};stroke:color-mix(in srgb,var(--sb-ink) 20%,var(--sb-surface));stroke-width:.8"/>`}
  return g+mL(cx,cy2+80,t2,{c:"bh"})+mL(cx,cy2+98,d,{c:"s m"})};
 b+=plate(116,368,true,"Lactose fermenter","Escherichia · Klebsiella")
  +plate(316,368,false,"Non-fermenter","Salmonella · Shigella · Proteus");
 b+=mL(438,340,"กรดจากการหมัก lactose",{a:"start",c:"s m"})
  +mL(438,358,"ทำให้ neutral red เปลี่ยนเป็นสีชมพู",{a:"start",c:"s m"})
  +mL(438,386,"bile salt และ crystal violet",{a:"start",c:"s m"})
  +mL(438,404,"กด gram-positive ไว้ไม่ให้ขึ้น",{a:"start",c:"s m"});
 return svg(b,"0 0 640 478")},
notes:()=>`<h3>One family, defined by what it does</h3><ul>
 <li>Enterobacteriaceae เป็นกลุ่ม gram-negative rod ที่พบบ่อยที่สุดในห้องปฏิบัติการ · สมาชิกทุกตัว<b>หมักกลูโคสได้ รีดิวซ์ไนเตรตเป็นไนไตรต์ และ oxidase เป็นลบ</b> ${S.mu}</li>
 <li>พวกมันเป็น facultative anaerobe จึงโตได้ทั้งมีและไม่มีออกซิเจน และโตได้บนอาหารเลี้ยงเชื้อทั่วไปโดยไม่ต้องการอะไรพิเศษ ${S.mu}</li>
 <li>บางตัวเป็นเชื้อประจำถิ่นในลำไส้ที่ก่อโรคฉวยโอกาส บางตัว เช่น <i>Salmonella</i>, <i>Shigella</i> และ <i>Yersinia</i> เป็นเชื้อก่อโรคแท้ ${S.mu}</li></ul>
 <h3>The three antigens</h3><ul>
 <li><b>O antigen</b> คือสายน้ำตาลนอกสุดของ lipopolysaccharide · <b>ทนความร้อน</b> และเป็นพื้นฐานของการแบ่ง serogroup ${S.mu}</li>
 <li><b>H antigen</b> คือโปรตีน flagellin ของ flagella · <b>ไม่ทนความร้อน</b> ${S.mu}</li>
 <li><b>K antigen</b> คือ capsule · ใน <i>Salmonella</i> Typhi เรียกว่า <b>Vi antigen</b> ${S.mu}</li>
 <li>การแสดงออกของทั้งสามถูกควบคุมด้วยยีนของเชื้อเอง และ<b>สลับเปิดปิดได้ (phase variation)</b> ซึ่งช่วยให้รอดจากการถูกฆ่าด้วยแอนติบอดี ${S.mu}</li></ul>
 <h3>Lipid A is the endotoxin</h3><ul>
 <li>ฤทธิ์ของ endotoxin อยู่ที่ส่วน <b>lipid A</b> ของ lipopolysaccharide ซึ่ง<b>ถูกปล่อยออกมาเมื่อเซลล์แตก</b> ${S.mu}</li>
 <li>อาการทั่วร่างกายของการติดเชื้อ gram-negative ส่วนใหญ่เริ่มจากตรงนี้: การกระตุ้น complement, การหลั่ง cytokine, <b>leukocytosis, thrombocytopenia, disseminated intravascular coagulation</b>, ไข้, การไหลเวียนส่วนปลายลดลง, shock และเสียชีวิต ${S.mu}</li></ul>`});

SEC.push({id:"entero-vir",k:"a",t:"The type III secretion system is a syringe",mm:"Type III secretion",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"โปรตีนราว 20 ตัวประกอบกันเป็นเข็มฉีดยาระดับโมเลกุล",{a:"start",c:"bh"})
  +mL(24,46,"Yersinia · Salmonella · Shigella · enteropathogenic Escherichia · Pseudomonas · Chlamydia ใช้ระบบเดียวกันนี้",{a:"start",c:"s m"});
 const wv=mwob(9,1.6),X0=40,X1=430;
 const HM=132,OM=260,IM=322;          /* host membrane, bacterial outer, inner */
 /* host cell above */
 b+=`<path class="m-cyto" d="M${X0},${HM-66} L${X1},${HM-66} L${X1},${HM} L${X0},${HM} Z"/>`
  +mgrainIn("t3h","M"+X0+","+(HM-66)+" L"+X1+","+(HM-66)+" L"+X1+","+HM+" L"+X0+","+HM+" Z",X0,HM-66,X1-X0,66,70,5,"m-gr",.9)
  +mL(X0+10,HM-46,"host cell cytoplasm",{a:"start",c:"s m"});
 b+=mbil(X0,X1,x=>HM+wv(x),{core:"m-hcore",head:"m-hhead",tail:"m-htail"});
 /* bacterium below */
 b+=mbil(X0,X1,x=>OM+wv(x),{core:"m-ocore",head:"m-ohead",tail:"m-otail"})
  +mpgl(X0,X1,x=>IM-26+wv(x),2,-6.4,11,{amp:1})
  +mbil(X0,X1,x=>IM+wv(x));
 b+=`<path class="m-cyto" d="M${X0},${IM+9} L${X1},${IM+9} L${X1},${IM+62} L${X0},${IM+62} Z"/>`
  +mL(X0+10,IM+40,"bacterial cytoplasm",{a:"start",c:"s m"});
 /* the needle, spanning all three membranes */
 const nx=250;
 b+=`<path class="m-porin" d="M${nx-16},${IM-10} l0,20 l32,0 l0,-20 Z"/>`
  +`<path class="m-porin" d="M${nx-20},${OM-10} l0,20 l40,0 l0,-20 Z"/>`
  +`<path class="m-tail" d="M${nx-5},${OM-10} L${nx-5},${HM+8} L${nx+5},${HM+8} L${nx+5},${OM-10} Z"/>`
  +`<path class="m-porin" d="M${nx-9},${HM-6} l0,14 l18,0 l0,-14 Z"/>`;
 /* effectors travelling up the needle */
 [0,1,2].forEach(i=>{b+=`<path class="m-gene" d="${mblob(nx,IM-34-i*0,9,8,13,.1)}"/>`});
 [IM-40,OM-40,HM-26].forEach((y,i)=>{b+=`<path class="m-gene" d="${mblob(nx-(i?0:26)+(i===0?0:0),y,9,8,i*7+5,.1)}"/>`});
 b+=`<path class="m-gene" d="${mblob(nx-44,HM-34,10,9,23,.1)}"/>`
  +`<path class="m-gene" d="${mblob(nx+42,HM-42,10,9,29,.1)}"/>`;
 b+=mlead2(nx,HM-26,452,86,["Effector proteins","ฉีดเข้าไซโทซอลของ host ตรง ๆ"],{a:"start"})
  +mlead2(nx,(HM+OM)/2,452,146,["Needle","ทะลุทั้งเยื่อของเชื้อและของ host"],{a:"start"})
  +mlead2(nx,OM,452,206,["Base","ฝังในเยื่อชั้นนอกและชั้นในของเชื้อ"],{a:"start"})
  +mL(452,266,"ไม่ต้องผ่านช่องว่างนอกเซลล์",{a:"start",c:"bh"})
  +mL(452,286,"สารพิษจึงพ้นจากแอนติบอดี",{a:"start",c:"s m"})
  +mL(452,304,"ตลอดเส้นทาง",{a:"start",c:"s m"});
 /* the other shared factors */
 b+=`<path class="m-sep" d="M24,404 L616,404"/>`
  +mL(24,430,"Shared by the whole family",{a:"start",c:"bh"});
 [["Endotoxin","lipid A — ปล่อยออกมาเมื่อเซลล์แตก",24,458],
  ["Capsule","ผิวชอบน้ำผลักเซลล์กลืนกินที่ผิวไม่ชอบน้ำ",330,458],
  ["Antigenic phase variation","สลับเปิดปิด O, K และ H",24,504],
  ["Sequestration of growth factors","siderophore แย่งเหล็กจาก host",330,504],
  ["Resistance to serum killing","รอดจาก complement ในกระแสเลือด",24,550]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 594")},
notes:()=>`<h3>A molecular syringe</h3><ul>
 <li>แบคทีเรียหลายสกุล — <i>Yersinia</i>, <i>Salmonella</i>, <i>Shigella</i>, enteropathogenic <i>Escherichia</i>, <i>Pseudomonas</i>, <i>Chlamydia</i> — ใช้<b>ระบบส่งปัจจัยก่อโรคร่วมกันระบบหนึ่ง</b>เข้าสู่เซลล์ยูแคริโอตเป้าหมาย ${S.mu}</li>
 <li>ให้คิดถึง type III secretion system ว่าเป็น<b>เข็มฉีดยาระดับโมเลกุล</b>ที่ประกอบจากโปรตีนราว 20 ตัว ${S.mu}</li>
 <li>ข้อได้เปรียบคือสารพิษ<b>ไม่ต้องผ่านช่องว่างนอกเซลล์</b> จึงไม่ถูกแอนติบอดีดักระหว่างทาง ${S.mu}</li></ul>
 <h3>Capsule and serum resistance</h3><ul>
 <li>Enterobacteriaceae ที่มี capsule รอดจากการถูกกลืนกิน เพราะ<b>แอนติเจนของ capsule ชอบน้ำ จึงผลักผิวของเซลล์กลืนกินซึ่งไม่ชอบน้ำ</b> ${S.mu}</li>
 <li>แอนติเจนเหล่านี้ยังขัดขวางการเกาะของแอนติบอดี และ<b>กระตุ้นภูมิคุ้มกันกับ complement ได้แย่</b> ${S.mu}</li>
 <li>แต่ถ้าผู้ป่วยสร้าง <b>anticapsular antibody</b> ขึ้นมาได้ บทบาทป้องกันของ capsule ก็ลดลง ${S.mu}</li></ul>`});

SEC.push({id:"ecoli-git",k:"b",t:"The five diarrhoeagenic Escherichia coli",mm:"E. coli pathotypes",leg:[],
draw:()=>tbl(["Pathotype","Adhesin","Exotoxin","Picture"],[
 ["ETEC — enterotoxigenic","colonization factor antigens CFA/I, CFA/II, CFA/III","heat-labile toxin (LT-1) · heat-stable toxin (STa)","ถ่ายเป็นน้ำ · traveller's diarrhoea"],
 ["EPEC — enteropathogenic","bundle-forming pili · intimin","—","ถ่ายเหลวในทารก · ทำลายปลาย microvilli จนเป็นรอย attaching and effacing"],
 ["EAEC — enteroaggregative","aggregative adherence fimbriae AAF/I, AAF/II, AAF/III","enteroaggregative heat-stable toxin · plasmid-encoded toxin","ถ่ายเหลวเรื้อรัง"],
 ["STEC — Shiga toxin-producing","bundle-forming pili · intimin","Shiga toxins Stx1, Stx2","hemorrhagic colitis · hemolytic uremic syndrome"],
 ["EIEC — enteroinvasive","invasive plasmid antigen","hemolysin HlyA","บุกเยื่อบุลำไส้ · หน้าตาเหมือน shigellosis"],
 ["Uropathogenic","P pili · Dr fimbriae","—","urinary tract infection"]]),
notes:()=>`<h3>One species, six jobs</h3><ul>
 <li><i>E. coli</i> มีอยู่จำนวนมากในทางเดินอาหารตามปกติ · มันก่อโรคฉวยโอกาสได้เมื่อหลุดออกนอกลำไส้ แต่<b>สายพันธุ์ที่ก่อโรคลำไส้โดยเฉพาะมีปัจจัยก่อโรคเฉพาะตัว</b> ${S.mu}</li>
 <li>ปัจจัยเหล่านั้นแบ่งเป็นสองพวก: <b>adhesin</b> ที่บอกว่าเกาะตรงไหน และ <b>exotoxin</b> ที่บอกว่าทำอะไรหลังเกาะ ${S.mu}</li>
 <li>สองพวกนี้รวมกันคือสิ่งที่ทำให้ pathotype หนึ่งต่างจากอีก pathotype หนึ่ง — ไม่ใช่ความต่างของสปีชีส์ ${S.mu}</li></ul>
 <h3>Where each one is caught</h3><ul>
 <li>ส่วนใหญ่มาจาก<b>อาหารหรือน้ำที่ปนเปื้อน</b> หรือจากการแพร่ทางอุจจาระสู่ปากโดยตรง ${S.mu}</li>
 <li>STEC มีแหล่งสำคัญคือ<b>เนื้อวัวบดที่ปรุงไม่สุก</b> นมที่ไม่ผ่านพาสเจอไรซ์ และผักสด ${S.mu}</li></ul>`});

SEC.push({id:"stec",k:"b",t:"Shiga toxin and the haemolytic uraemic syndrome",mm:"Shiga toxin",leg:[],
draw:()=>{let b="";
 /* AB5: five B subunits in a ring, one A on top */
 const tx=130,ty=92;
 [...Array(5)].forEach((_,i)=>{const a=i/5*Math.PI*2-Math.PI/2;
  b+=`<path class="m-ring2" d="${mblob(tx+Math.cos(a)*24,ty+Math.sin(a)*13,13,11,i*7+3,.08)}"/>`});
 b+=`<path class="m-body2" d="${mblob(tx,ty-26,19,16,23,.08)}"/>`+mL(tx,ty-22,"A",{c:"bh"})
  +mL(tx,ty+4,"B ×5",{c:"bh"})
  +mlead2(tx+30,ty-26,230,56,["One A subunit, five B subunits","AB₅ แบบเดียวกับ cholera toxin"],{a:"start"})
  +mlead2(tx+28,ty+14,230,102,["B subunits bind Gb3","globotriaosylceramide — มีมากที่ villi ลำไส้และ endothelium ของไต"],{a:"start"});
 /* the A1 fragment on the ribosome */
 b+=`<path class="m-sep" d="M24,150 L616,150"/>`;
 const rx=130,ry=224;
 b+=`<path class="m-body" d="${mblob(rx,ry-14,42,24,13,.07)}"/>`
  +`<path class="m-body" d="${mblob(rx,ry+16,50,21,17,.07)}"/>`+mL(rx,ry+54,"60S subunit",{c:"s m"})
  +`<path class="m-body2" d="${mblob(rx+40,ry-24,15,13,29,.1)}"/>`+mL(rx+40,ry-20,"A1",{c:"bh"})
  +`<path class="m-split" d="M${rx+16},${ry-2} L${rx+40},${ry-14}"/>`
  +mlead2(rx+10,ry+16,230,186,["A1 cleaves 28S rRNA","aminoacyl-transfer RNA เกาะไม่ได้ การสร้างโปรตีนหยุด"],{a:"start"})
  +mL(230,226,"กลไกเดียวกับ Shiga toxin ของ Shigella dysenteriae",{a:"start",c:"s m"})
  +mL(230,244,"Stx1 แทบเหมือนกันทุกประการ · Stx2 เหมือน 60%",{a:"start",c:"s m"})
  +mL(230,262,"ทั้งคู่ได้มาจาก lysogenic bacteriophage",{a:"start",c:"s m"});
 /* the glomerulus: where Stx2 does its damage */
 b+=`<path class="m-sep" d="M24,296 L616,296"/>`
  +mL(24,322,"Stx2 destroys glomerular endothelial cells",{a:"start",c:"bad"});
 const gx=140,gy=416;
 b+=`<path class="m-cap" style="stroke-dasharray:none" d="${mblob(gx,gy,78,62,7,.07)}"/>`;
 const lq=rng(19);
 for(let i=0;i<7;i++){const a=i/7*Math.PI*2+lq()*.4,r=34+lq()*18;
  b+=`<path class="m-body2" style="fill:none;stroke-width:9" d="${mblob(gx+Math.cos(a)*r*.5,gy+Math.sin(a)*r*.5,20+lq()*8,15+lq()*6,i*9+5,.2)}"/>`}
 /* platelets and thrombin plugging the loops */
 for(let i=0;i<14;i++){const a=lq()*6.28,r=lq()*54;
  b+=`<path class="m-pus" d="${mblob(gx+Math.cos(a)*r,gy+Math.sin(a)*r,5+lq()*3,4+lq()*3,i*5+3,.25)}"/>`}
 b+=mL(gx,gy+80,"glomerulus",{c:"s m"});
 [["Endothelial injury","เซลล์บุหลอดเลือดฝอยถูกทำลาย",260,352],
  ["Platelet activation · thrombin","เกล็ดเลือดถูกกระตุ้นและมี thrombin มาเกาะ",260,398],
  ["Filtration falls","อัตรากรองลดลง → acute renal failure",260,444]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"});
  if(y<440)b+=`<path class="m-cyc" marker-end="url(#ah)" d="M${x+4},${y+28} L${x+4},${y+40}"/>`});
 b+=mL(260,490,"ผู้ป่วย hemolytic uremic syndrome ราว 30%",{a:"start",c:"s m"})
  +mL(260,508,"มีอาการทางระบบประสาทร่วมด้วย",{a:"start",c:"s m"});
 return svg(b,"0 0 640 534")},
notes:()=>`<h3>The toxin</h3><ul>
 <li><b>Stx1</b> แทบเหมือน Shiga toxin ของ <i>S. dysenteriae</i> ทุกประการ ซึ่งเป็นที่มาของชื่อ · <b>Stx2</b> เหมือนกัน 60% ${S.mu}</li>
 <li>ทั้งคู่<b>ได้มาจาก lysogenic bacteriophage</b> — เหมือน diphtheria toxin และ pyrogenic exotoxin ของ <i>S. pyogenes</i> ${S.mu}</li>
 <li>โครงสร้างเป็น <b>A หนึ่งหน่วยกับ B ห้าหน่วย</b> · B จับกับไกลโคลิพิดจำเพาะบนเซลล์ host คือ <b>globotriaosylceramide (Gb3)</b> ${S.mu}</li>
 <li>Gb3 มีความหนาแน่นสูงที่<b>villi ของลำไส้และเซลล์บุหลอดเลือดของไต</b> — ซึ่งอธิบายว่าทำไมโรคจึงลงที่สองที่นี้ ${S.mu}</li>
 <li>หลัง A ถูกนำเข้าเซลล์ มันถูกตัดเป็นสองโมเลกุล และชิ้น <b>A1 จับ 28S rRNA แล้วหยุดการสร้างโปรตีน</b> ${S.mu}</li>
 <li>Shiga toxin ยังกระตุ้นการแสดงออกของ cytokine อักเสบอย่าง TNF และ IL-6 ซึ่ง<b>เพิ่มการแสดงออกของ Gb3 เอง</b> — เป็นวงจรที่เร่งตัวเอง ${S.mu}</li></ul>
 <h3>From colitis to renal failure</h3><ul>
 <li>STEC เป็นสาเหตุที่พบบ่อยที่สุดของ <b>hemorrhagic colitis</b> และ <b>hemolytic uremic syndrome</b> ${S.mu}</li>
 <li>HUS สัมพันธ์กับ <b>Stx2</b> เป็นหลัก ซึ่งแสดงให้เห็นว่าทำลายเซลล์บุหลอดเลือดของ glomerulus ได้ ${S.mu}</li>
 <li>ความเสียหายที่เซลล์บุหลอดเลือดนำไปสู่<b>การกระตุ้นเกล็ดเลือดและการเกาะของ thrombin</b> ทำให้อัตรากรองลดลงและเกิดไตวายเฉียบพลัน ${S.mu}</li>
 <li>ผู้ป่วย HUS มากถึง <b>30%</b> มีอาการทางระบบประสาทส่วนกลางร่วมด้วย ${S.mu}</li>
 <li>สายพันธุ์ที่มีทั้ง Shiga toxin และความสามารถทำรอย attaching and effacing <b>ก่อโรคได้รุนแรงกว่า</b>สายพันธุ์ที่มีสารพิษอย่างเดียว ${S.mu}</li></ul>
 <h3>Diagnosis</h3><ul>
 <li>ตรวจได้ทั้งด้วย <b>immunoassay</b> อย่าง ELISA และ latex agglutination เพื่อหาตัวสารพิษ หรือด้วยการ<b>ตรวจยีน Stx</b> ${S.mu}</li></ul>`});

SEC.push({id:"ecoli-other",k:"b",t:"Escherichia coli outside the gut",mm:"E. coli elsewhere",leg:[],
draw:()=>tbl(["Site","Strain feature","Note"],[
 ["Urinary tract","P pili และ Dr fimbriae","เชื้อจากลำไส้ของผู้ป่วยเองขึ้นไปตามทางเดินปัสสาวะ"],
 ["Neonatal meningitis","K1 capsular antigen","serogroup เดียวกันนี้พบในการติดเชื้อรุนแรงแบบอื่นด้วย"],
 ["Bloodstream","แล้วแต่สายพันธุ์","มักตามหลังการติดเชื้อที่ทางเดินปัสสาวะหรือทางเดินอาหาร"],
 ["Intraabdominal","แล้วแต่สายพันธุ์","ลำไส้ทะลุหรือการผ่าตัด — มักมีหลายเชื้อร่วมกัน"]]),
notes:()=>`<h3>The commonest cause of the commonest infection</h3><ul>
 <li>การติดเชื้อทางเดินปัสสาวะส่วนใหญ่เกิดจากเชื้อในลำไส้ของผู้ป่วยเอง ที่<b>ขึ้นไปตามท่อปัสสาวะสู่กระเพาะปัสสาวะ</b>และบางครั้งขึ้นต่อไปถึงไต ${S.mu}</li>
 <li>สายพันธุ์ที่ก่อโรคทางเดินปัสสาวะมี <b>P pili และ Dr fimbriae</b> ซึ่งทำให้เกาะเยื่อบุทางเดินปัสสาวะได้ดีกว่าสายพันธุ์ทั่วไป ${S.mu}</li>
 <li>สายพันธุ์ที่ก่อ <b>neonatal meningitis</b> ส่วนใหญ่มีแอนติเจน <b>K1</b> ${S.mu}</li></ul>
 <h3>Treating Enterobacteriaceae in general</h3><ul>
 <li>การให้ยาปฏิชีวนะกับเชื้อในวงศ์นี้<b>ต้องอาศัยผลความไวต่อยา</b> เพราะการดื้อยาแตกต่างกันมากระหว่างสายพันธุ์ ${S.mu}</li>
 <li><b>Extended-spectrum β-lactamase</b> และ carbapenemase ทำให้ทางเลือกแคบลงมากในหลายพื้นที่ ${S.mu}</li>
 <li>สำหรับ gastroenteritis จาก <i>E. coli</i> การรักษาหลักคือ<b>การให้สารน้ำทดแทน</b> · โดยเฉพาะใน STEC มีข้อกังวลว่ายาปฏิชีวนะอาจเพิ่มการปล่อยสารพิษ ${S.mu}</li></ul>`});

SEC.push({id:"salmonella",k:"c",t:"Salmonella and the enteric fever cycle",mm:"Salmonella",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"Enteric fever is a cycle, not a single event",{a:"start",c:"bh"});
 /* the loop: gut → macrophage → organs → blood → gallbladder → gut again */
 const nodes=[["Ingestion","เชื้อผ่านเซลล์ที่บุลำไส้",96,100],
  ["Macrophage","ถูกกลืนแล้วเพิ่มจำนวนข้างใน",282,100],
  ["Liver · spleen · marrow","ถูกพาไปเพิ่มจำนวนต่อ",492,100],
  ["Bacteraemia","ไข้ค่อย ๆ สูงขึ้นหลัง 10–14 วัน",492,268],
  ["Gallbladder","ตั้งรกรากในถุงน้ำดี",282,268],
  ["Reinfects the gut","อาการทางเดินอาหารมาทีหลังไข้",96,268]];
 nodes.forEach(([n,d,x,y],i)=>{
  b+=`<path class="m-body" d="${mblob(x,y,74,30,i*9+5,.06)}"/>`+mL(x,y+5,n,{c:"bh"})
   +mL(x,y+52,d,{c:"s m"})});
 [[170,100,208],[356,100,418]].forEach(([x1,y,x2])=>{b+=`<path class="m-cyc" marker-end="url(#ah)" d="M${x1},${y} L${x2},${y}"/>`});
 b+=`<path class="m-cyc" marker-end="url(#ah)" d="M${566},${100} q46,84 -74,${160}"/>`;
 [[418,268,356],[208,268,170]].forEach(([x1,y,x2])=>{b+=`<path class="m-cyc" marker-end="url(#ah)" d="M${x1},${y} L${x2},${y}"/>`});
 /* the two faces of the genus */
 b+=`<path class="m-sep" d="M24,348 L616,348"/>`;
 [["Salmonella Typhi · Paratyphi","ปรับตัวเข้ากับคนอย่างมาก · รอดในถุงน้ำดีและเป็นพาหะเรื้อรังได้ · infectious dose สูง",24,374],
  ["Non-typhoidal Salmonella","ไม่เลือก host · ก่อโรคได้ทั้งในคนและสัตว์ · infectious dose ต่ำกว่า",24,434]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 b+=mL(24,490,"ผู้ป่วย typhoid 1–5% กลายเป็นพาหะเรื้อรังนานเกินหนึ่งปี โดยมีถุงน้ำดีเป็นแหล่งกักเชื้อ",{a:"start",c:"bad"});
 return svg(b,"0 0 640 516")},
notes:()=>`<h3>Host adaptation decides the disease</h3><ul>
 <li>บางสายพันธุ์<b>ปรับตัวเข้ากับ host ชนิดเดียว</b>อย่างมาก และเมื่อมาติดคนก็ก่อโรครุนแรง ${S.mu}</li>
 <li><b><i>Salmonella</i> Typhi และ <i>Salmonella</i> Paratyphi</b> ต่างจาก serotype อื่นตรงที่<b>รอดชีวิตอยู่ในถุงน้ำดีและตั้งรกรากเรื้อรังได้</b> ${S.mu}</li>
 <li>หลายสายพันธุ์ไม่เลือก host เลย และก่อโรคได้ทั้งในคนและสัตว์ ${S.mu}</li>
 <li>การติดเชื้อส่วนใหญ่มาจาก<b>อาหารที่ปนเปื้อน</b> และในเด็กมาจากการแพร่ทางอุจจาระสู่ปากโดยตรง ${S.mu}</li>
 <li>อุบัติการณ์สูงที่สุดใน<b>เด็กอายุน้อยกว่า 5 ปีและผู้ใหญ่อายุมากกว่า 60 ปี</b> ${S.mu}</li></ul>
 <h3>The cycle of enteric fever</h3><ul>
 <li>เชื้อที่ก่อ enteric fever <b>ผ่านเซลล์ที่บุลำไส้แล้วถูก macrophage กลืนเข้าไป</b> ${S.mu}</li>
 <li>มันเพิ่มจำนวนหลังถูกพาไปยัง<b>ตับ ม้าม และไขกระดูก</b> ${S.mu}</li>
 <li><b>สิบถึงสิบสี่วันหลังกินเชื้อ</b> ผู้ป่วยเริ่มมีไข้ที่ค่อย ๆ สูงขึ้น พร้อมอาการไม่จำเพาะ — ปวดศีรษะ ปวดกล้ามเนื้อ อ่อนเพลีย เบื่ออาหาร ${S.mu}</li>
 <li>อาการเหล่านี้อยู่นานหนึ่งสัปดาห์หรือกว่านั้น <b>แล้วจึงตามด้วยอาการทางเดินอาหาร</b> — ลำดับนี้สำคัญ เพราะมันกลับหัวกับที่คนส่วนใหญ่คาด ${S.mu}</li>
 <li>วงจรนี้ตรงกับ<b>ระยะที่เชื้ออยู่ในกระแสเลือดก่อน แล้วจึงไปตั้งรกรากที่ถุงน้ำดีและกลับมาติดเชื้อที่ลำไส้ซ้ำ</b> ${S.mu}</li>
 <li>ต้องนึกถึง enteric fever เสมอในผู้ป่วยไข้ที่<b>เพิ่งเดินทางไปประเทศที่โรคนี้เป็นโรคประจำถิ่น</b> ${S.mu}</li></ul>
 <h3>The chronic carrier</h3><ul>
 <li>สายพันธุ์ที่ก่อ typhoid และ paratyphoid <b>ดำรงอยู่ได้ด้วยการตั้งรกรากในคน</b> ${S.mu}</li>
 <li>การตั้งรกรากเรื้อรังนานเกินหนึ่งปีหลังมีอาการเกิดขึ้นใน <b>1–5%</b> ของผู้ป่วย โดยมี<b>ถุงน้ำดีเป็นแหล่งกักเชื้อ</b>ในผู้ป่วยส่วนใหญ่ ${S.mu}</li>
 <li>การตั้งรกรากเรื้อรังด้วย <i>Salmonella</i> สปีชีส์อื่นเกิดน้อยกว่า 1% และไม่ใช่แหล่งแพร่เชื้อที่สำคัญ ${S.mu}</li>
 <li>Infectious dose ของ <i>Salmonella</i> Typhi สูง ส่วนของสายพันธุ์อื่นต่ำกว่า — ซึ่งอธิบายว่าทำไมอาหารที่ทิ้งไว้ที่อุณหภูมิห้องจนเชื้อเพิ่มจำนวนจึงเป็นเรื่องสำคัญ ${S.mu}</li></ul>`});

SEC.push({id:"shigella",k:"c",t:"Shigella: invasion, then sideways",mm:"Shigella",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"เชื้อนี้ไม่เดินทางในกระแสเลือด — มันอยู่ในเยื่อบุลำไส้และเดินข้างออกไป",{a:"start",c:"bh"});
 /* a row of enterocytes with an M cell, and the lateral spread beneath */
 const y0=72,h=92,X0=40,X1=596;
 b+=`<path class="m-spin" d="M${X0},${y0} L${X1},${y0} L${X1},${y0+h} L${X0},${y0+h} Z"/>`;
 for(let x=X0;x<X1-10;x+=46){
  b+=`<path class="m-kcell" style="stroke-width:1.3" d="M${x},${y0} L${x},${y0+h}"/>`}
 /* microvilli on top */
 for(let x=X0+4;x<X1;x+=5)b+=`<path class="m-kera" d="M${x},${y0} L${x},${y0-11}"/>`;
 b+=mL(X1,y0-20,"enterocytes",{a:"end",c:"s m"});
 /* the M cell, flat and without microvilli */
 const mx=132;
 b+=`<path class="m-body" style="fill:color-mix(in srgb,#3E6FB0 14%,var(--sb-surface))" d="M${mx-23},${y0} L${mx+23},${y0} L${mx+23},${y0+h} L${mx-23},${y0+h} Z"/>`
  +mL(mx,y0+h+22,"M cell",{c:"bh"});
 /* the organism: through the M cell, into a macrophage, then sideways */
 const bact=(x,y,sd)=>`<path class="m-body2" d="${mrod(x,y,26,7,sd,.05)}"/>`;
 b+=bact(mx,y0-26,3)+bact(mx,y0+42,7);
 b+=`<path class="m-cap" style="stroke-dasharray:3 3" d="${mblob(mx+4,y0+h+54,34,26,11,.1)}"/>`
  +bact(mx+4,y0+h+54,13)+mL(mx+4,y0+h+96,"macrophage",{c:"s m"});
 /* apoptosis releases IL-1β, neutrophils arrive and loosen the wall */
 b+=`<path class="m-split" d="M${mx+34},${y0+h+54} L${mx+74},${y0+h+40}"/>`;
 [0,1,2].forEach(i=>{b+=mpmn(mx+150+i*74,y0+h+52,26,i*7+5)});
 b+=mlead2(mx+150,y0+h+26,mx+150,y0+h-6,["IL-1β pulls neutrophils in","ผนังลำไส้หลวมลง เชื้อจึงลงถึงเซลล์ชั้นลึก"],{a:"start"});
 /* lateral spread between enterocytes */
 [330,380,430,480].forEach((x,i)=>{b+=bact(x,y0+58,i*5+17)
  +`<path class="m-cyc" marker-end="url(#ah2)" d="M${x+16},${y0+58} L${x+28},${y0+58}"/>`});
 b+=mlead2(430,y0+46,330,y0-24,["Cell-to-cell spread","เดินข้างไปยังเซลล์ถัดไป เหมือน Listeria"],{a:"start"});
 b+=`<path class="m-sep" d="M24,${y0+h+136} L616,${y0+h+136}"/>`
  +mL(24,y0+h+162,"Shiga toxin — เฉพาะ S. dysenteriae",{a:"start",c:"bh"})
  +mL(24,y0+h+182,"AB₅ เหมือนของ STEC · B จับ Gb3 · A ตัด 28S rRNA ใน 60S subunit",{a:"start",c:"s m"})
  +mL(24,y0+h+200,"ผลหลักคือทำลายเยื่อบุลำไส้ · ผู้ป่วยส่วนน้อยเกิด hemolytic uremic syndrome",{a:"start",c:"s m"});
 return svg(b,"0 0 640 "+(y0+h+224))},
notes:()=>`<h3>Four species that are really one</h3><ul>
 <li>การจัดหมวดที่ใช้กันทั่วไปแบ่ง <i>Shigella</i> เป็นสี่สปีชีส์ที่มี serogroup ตาม O antigen เกือบ 50 แบบ: <b><i>S. dysenteriae</i>, <i>S. flexneri</i>, <i>S. boydii</i> และ <i>S. sonnei</i></b> ${S.mu}</li>
 <li>แต่การวิเคราะห์ DNA พบว่าทั้งสี่สปีชีส์นี้<b>จริง ๆ แล้วเป็น biogroup ภายในสปีชีส์ <i>E. coli</i></b> · ชื่อเดิมถูกเก็บไว้เพราะการเรียกมันว่า <i>E. coli</i> จะสร้างความสับสน ${S.mu}</li></ul>
 <h3>Invasion and apoptosis</h3><ul>
 <li>Shigellae ก่อโรคด้วยการ<b>บุกเข้าไปเพิ่มจำนวนในเซลล์</b> ${S.mu}</li>
 <li>กระบวนการนี้ทำให้เซลล์ตายแบบ <b>apoptosis</b> ซึ่งปล่อย <b>IL-1β</b> ออกมาดึง polymorphonuclear leukocyte เข้าสู่เนื้อเยื่อที่ติดเชื้อ ${S.mu}</li>
 <li>การมาของเม็ดเลือดขาวนั่นเอง<b>ทำให้ผนังลำไส้เสียความสมบูรณ์</b> และเปิดทางให้เชื้อลงไปถึงเซลล์เยื่อบุชั้นที่ลึกกว่า — คือการอักเสบช่วยเชื้อ ไม่ใช่ขัดขวาง ${S.mu}</li></ul>
 <h3>Shiga toxin</h3><ul>
 <li>สายพันธุ์ <i>S. dysenteriae</i> สร้าง exotoxin ชื่อ <b>Shiga toxin</b> ${S.mu}</li>
 <li>เหมือนกับของ STEC คือมี <b>A หนึ่งหน่วยกับ B ห้าหน่วย</b> · B จับไกลโคลิพิด Gb3 แล้วพา A เข้าเซลล์ ${S.mu}</li>
 <li>A ตัด <b>28S rRNA ใน 60S ribosomal subunit</b> ทำให้ aminoacyl-transfer RNA เกาะไม่ได้ การสร้างโปรตีนจึงหยุด ${S.mu}</li>
 <li>ผลหลักคือความเสียหายต่อเยื่อบุลำไส้ · แต่ใน<b>ผู้ป่วยส่วนน้อย</b> สารพิษทำลายเซลล์บุหลอดเลือดของ glomerulus จนเกิดไตวาย ${S.mu}</li></ul>`});

SEC.push({id:"yersinia",k:"c",t:"Yersinia",mm:"Yersinia",leg:[],
draw:()=>tbl(["Species","How it reaches people","Picture"],[
 ["Y. pestis","หมัดหนูกัด หรือสูดละอองจากผู้ป่วย pneumonic plague","bubonic plague — ต่อมน้ำเหลืองโตเจ็บมาก (bubo) · pneumonic plague แพร่คนสู่คนได้"],
 ["Y. enterocolitica","อาหารและน้ำปนเปื้อน · โตได้ที่อุณหภูมิตู้เย็น","enterocolitis · ปวดท้องน้อยขวาจนเลียนแบบ appendicitis (pseudoappendicitis)"],
 ["Y. pseudotuberculosis","สัตว์เป็นแหล่งโรค","mesenteric adenitis"]]),
notes:()=>`<h3>What they share</h3><ul>
 <li><i>Yersinia</i> อยู่ในวงศ์ Enterobacteriaceae และใช้ <b>type III secretion system</b> ส่งปัจจัยก่อโรคเข้าเซลล์ host เหมือน <i>Salmonella</i> และ <i>Shigella</i> ${S.mu}</li>
 <li>ทั้งสามสปีชีส์เป็น<b>เชื้อก่อโรคแท้</b> ไม่ใช่เชื้อประจำถิ่นที่ฉวยโอกาส ${S.mu}</li>
 <li>แหล่งโรคคือ<b>สัตว์</b> — ต่างจาก <i>Shigella</i> ที่แหล่งโรคคือคน ${S.mu}</li></ul>
 <h3>Growing in the cold</h3><ul>
 <li><i>Y. enterocolitica</i> <b>เติบโตได้ที่อุณหภูมิตู้เย็น</b> เช่นเดียวกับ <i>Listeria monocytogenes</i> — จึงเพิ่มจำนวนในอาหารแช่เย็นและในเลือดที่เก็บไว้ ${S.mu}</li>
 <li>คุณสมบัตินี้ยังใช้ในห้องปฏิบัติการได้ด้วย ในรูปของ <b>cold enrichment</b> ${S.mu}</li></ul>`});

SEC.push({id:"kleb-proteus",k:"c",t:"Klebsiella, Proteus and the rest of the ward flora",mm:"Klebsiella · Proteus",leg:[],
draw:()=>{let b="";
 /* Proteus swarming: the thing you recognise across the room */
 const cx=146,cy=150,R=118;
 b+=`<circle cx="${cx}" cy="${cy}" r="${R}" style="fill:color-mix(in srgb,#B7791F 9%,var(--sb-surface));stroke:color-mix(in srgb,var(--sb-ink) 18%,var(--sb-surface));stroke-width:1.5"/>`;
 [26,46,66,86,104].forEach((r,i)=>{
  b+=`<circle cx="${cx}" cy="${cy}" r="${r}" style="fill:none;stroke:color-mix(in srgb,var(--sb-ink) ${16-i*2}%,var(--sb-surface));stroke-width:${5-i*.5}"/>`});
 b+=`<circle cx="${cx}" cy="${cy}" r="8" style="fill:color-mix(in srgb,var(--sb-surface) 88%,var(--sb-ink));stroke:color-mix(in srgb,var(--sb-ink) 22%,var(--sb-surface));stroke-width:.9"/>`;
 b+=mL(cx,cy-R-14,"Proteus swarming",{c:"bh"})
  +mlead2(cx+72,cy-60,286,96,["Concentric waves","เชื้อสลับระหว่างระยะที่เคลื่อนที่กับระยะที่หยุดแบ่งตัว"],{a:"start"})
  +mL(286,140,"Urease",{a:"start",c:"bh"})
  +mL(286,160,"ย่อย urea จนปัสสาวะเป็นด่าง",{a:"start",c:"s m"})
  +mL(286,178,"แล้วตกผลึกเป็นนิ่ว struvite",{a:"start",c:"s m"})
  +mL(286,210,"จึงต้องเอานิ่วออก ไม่ใช่แค่ให้ยา",{a:"start",c:"bad"});
 b+=`<path class="m-sep" d="M24,294 L616,294"/>`;
 [["Klebsiella pneumoniae","capsule หนามาก โคโลนีเป็นเมือก · pneumonia ที่เสมหะข้นเหมือนเยลลี่ลูกเกด (currant jelly) · ติดเชื้อในโรงพยาบาลและทางเดินปัสสาวะ",24,320],
  ["Enterobacter · Serratia · Citrobacter","เชื้อฉวยโอกาสในโรงพยาบาล · ดื้อยาหลายขนาน · Serratia บางสายพันธุ์สร้างเม็ดสีแดง",24,380],
  ["Proteus mirabilis","เคลื่อนที่เก่ง ลามเป็นคลื่นบนจาน · urease ทำให้เกิดนิ่ว struvite",24,440]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 490")},
notes:()=>`<h3>Opportunists with one trick each</h3><ul>
 <li><b><i>Klebsiella pneumoniae</i></b> มี <b>capsule ที่หนามาก</b> ทำให้โคโลนีดูเป็นเมือก และกันการถูกกลืนกินได้ดี ${S.mu}</li>
 <li>มันก่อ pneumonia ที่ทำลายเนื้อปอด ทำให้เสมหะข้นและมีเลือดปน รวมถึงการติดเชื้อทางเดินปัสสาวะและการติดเชื้อในโรงพยาบาล ${S.mu}</li>
 <li><b><i>Proteus mirabilis</i></b> เคลื่อนที่ได้ดีมากจน<b>ลามเป็นคลื่นวงซ้อนบนผิวจาน</b> · มันสลับระหว่างระยะที่เคลื่อนที่กับระยะที่อยู่กับที่ จึงเกิดลายวงเป็นชั้น ๆ ${S.mu}</li>
 <li><b>Urease</b> ของ <i>Proteus</i> ย่อย urea เป็นแอมโมเนีย ทำให้ปัสสาวะเป็นด่างจน<b>ตกผลึกเป็นนิ่ว struvite</b> — นิ่วเหล่านี้เก็บเชื้อไว้ข้างใน การให้ยาอย่างเดียวจึงมักไม่หาย ${S.mu}</li>
 <li><b><i>Enterobacter</i>, <i>Serratia</i> และ <i>Citrobacter</i></b> เป็นเชื้อฉวยโอกาสในโรงพยาบาลที่<b>ดื้อยาหลายขนาน</b> ${S.mu}</li></ul>
 <h3>Resistance is the real problem</h3><ul>
 <li>การเลือกยาสำหรับเชื้อในวงศ์นี้ต้อง<b>อาศัยผลความไวต่อยาเสมอ</b> ${S.mu}</li>
 <li><b>Extended-spectrum β-lactamase</b> ทำให้ penicillin และ cephalosporin ใช้ไม่ได้ และ carbapenemase ทำให้ทางเลือกสุดท้ายหายไปด้วย ${S.mu}</li></ul>`});

SEC.push({id:"pseudomonas",k:"d",t:"Pseudomonas aeruginosa",mm:"P. aeruginosa",leg:[],
draw:()=>{let b="";
 /* the plate: pigment diffusing out of the colonies is the identification */
 const cx=140,cy=146,R=112;
 b+=`<defs><radialGradient id="pyo" cx="50%" cy="50%"><stop offset="0%" stop-color="color-mix(in srgb,#0E8A7E 52%,var(--sb-surface))"/><stop offset="100%" stop-color="color-mix(in srgb,#0E8A7E 10%,var(--sb-surface))"/></radialGradient></defs>`
  +`<circle cx="${cx}" cy="${cy}" r="${R}" style="fill:url(#pyo);stroke:color-mix(in srgb,var(--sb-ink) 18%,var(--sb-surface));stroke-width:1.5"/>`;
 const q=rng(7);
 for(let i=0;i<9;i++){const a=q()*6.28,r=q()*62,x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;
  b+=`<path d="${mblob(x,y,8+q()*4,6+q()*3,i*7+3,.18)}" style="fill:color-mix(in srgb,#0E8A7E 60%,var(--sb-surface));stroke:color-mix(in srgb,#0E8A7E 80%,var(--sb-surface));stroke-width:1"/>`}
 b+=mL(cx,cy-R-14,"Pigment diffuses into the agar",{c:"bh"})
  +mlead2(cx+58,cy-52,276,86,["Pyocyanin","เม็ดสีน้ำเงิน · เร่งการสร้าง superoxide และ hydrogen peroxide"],{a:"start"})
  +mlead2(cx+70,cy+40,276,138,["Pyoverdin","เม็ดสีเหลืองเขียว · เป็น siderophore และคุมการหลั่ง exotoxin A"],{a:"start"})
  +mL(276,190,"Grape-like odour · β-hemolysis · oxidase positive",{a:"start",c:"bh"})
  +mL(276,210,"สามอย่างนี้รวมกันพอจะระบุเชื้อได้ข้างจาน",{a:"start",c:"s m"});
 b+=`<path class="m-sep" d="M24,282 L616,282"/>`;
 [["Exotoxin A","หยุดการต่อสายเปปไทด์แบบเดียวกับ diphtheria toxin แต่คนละโครงสร้างและอ่อนกว่า · ทำให้เนื้อตายในแผลไฟไหม้ กระจกตาเสียหาย และเนื้อปอดถูกทำลาย",24,308],
  ["Alginate","เมือกที่ห่อหุ้มเป็น biofilm · สายพันธุ์ mucoid พบมากใน cystic fibrosis",24,368],
  ["LasA และ LasB elastase","ย่อย elastin · ทำลายเนื้อปอดและทำให้เกิด ecthyma gangrenosum · ยังย่อย complement และกด neutrophil",24,428],
  ["Flagella · pili · lipopolysaccharide","เกาะและเคลื่อนที่ · lipid A คือ endotoxin",24,488]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 534")},
notes:()=>`<h3>An opportunist with a long reach</h3><ul>
 <li><i>P. aeruginosa</i> เป็น gram-negative rod ที่<b>ไม่หมักน้ำตาล</b> และ <b>oxidase positive</b> — ซึ่งแยกมันออกจาก Enterobacteriaceae ได้ทันที ${S.mu}</li>
 <li>ผู้ป่วยที่เสี่ยงสูงคือผู้ที่<b>เม็ดเลือดขาวต่ำ ภูมิคุ้มกันบกพร่อง เป็น cystic fibrosis และผู้ป่วยแผลไฟไหม้</b> ${S.mu}</li>
 <li>บางสายพันธุ์ดูเป็นเมือกเพราะมี <b>polysaccharide capsule</b> มาก และพบบ่อยเป็นพิเศษในผู้ป่วย cystic fibrosis ${S.mu}</li>
 <li><b>Alginate</b> เป็น mucoid exopolysaccharide ที่สร้างเป็นชั้นเด่น · การสร้างมันถูกควบคุมอย่างซับซ้อน และผู้ป่วยโรคทางเดินหายใจเรื้อรังมีแนวโน้มถูกสายพันธุ์ mucoid ตั้งรกรากระยะยาว ${S.mu}</li></ul>
 <h3>The pigments do work</h3><ul>
 <li><b>Pyocyanin</b> เป็นเม็ดสีน้ำเงินที่<b>เร่งการสร้าง superoxide และ hydrogen peroxide</b> ซึ่งเป็นรูปของออกซิเจนที่เป็นพิษ · มันยังกระตุ้นการหลั่ง IL-8 จึงดึง neutrophil เข้ามามากขึ้น ${S.mu}</li>
 <li><b>Pyoverdin</b> เป็นเม็ดสีเหลืองเขียวที่เป็น <b>siderophore</b> จับเหล็กมาใช้ · มันยัง<b>ควบคุมการหลั่งปัจจัยก่อโรคอื่นรวมถึง exotoxin A</b> ${S.mu}</li>
 <li><b>Pyorubin</b> เป็นเม็ดสีน้ำตาลแดงที่บางสปีชีส์สร้าง ${S.mu}</li></ul>
 <h3>Exotoxin A has a familiar target</h3><ul>
 <li>Exotoxin A เชื่อว่าเป็นปัจจัยก่อโรคที่สำคัญที่สุดตัวหนึ่ง · มัน<b>หยุดการสร้างโปรตีนด้วยการขวางการต่อสายเปปไทด์</b> — กลไกเดียวกับ diphtheria toxin ${S.mu}</li>
 <li>แต่สารพิษของสองเชื้อนี้<b>ต่างกันทั้งโครงสร้างและทางภูมิคุ้มกัน</b> และ exotoxin A อ่อนกว่า diphtheria toxin ${S.mu}</li>
 <li>มันน่าจะเป็นต้นเหตุของ<b>เนื้อตายในแผลไฟไหม้ ความเสียหายของกระจกตา และการทำลายเนื้อปอดในการติดเชื้อเรื้อรัง</b> ${S.mu}</li></ul>
 <h3>Elastases and proteases</h3><ul>
 <li><b>LasA</b> เป็น serine protease และ <b>LasB</b> เป็น zinc metalloprotease · ทั้งคู่ทำงานเสริมกันในการย่อย elastin ${S.mu}</li>
 <li>ผลคือความเสียหายของเนื้อปอดและ<b>รอยโรคเลือดออกที่เรียก ecthyma gangrenosum</b> ซึ่งพบในการติดเชื้อที่กระจายทั่วร่างกาย ${S.mu}</li>
 <li>เอนไซม์เหล่านี้ยัง<b>ย่อยองค์ประกอบของ complement และกดการเคลื่อนที่กับการทำงานของ neutrophil</b> ${S.mu}</li>
 <li>การติดเชื้อเรื้อรังมีลักษณะเด่นคือมีแอนติบอดีต่อ LasA และ LasB แล้ว<b>ตกตะกอนเป็น immune complex ในเนื้อเยื่อ</b> ${S.mu}</li></ul>`});

SEC.push({id:"acineto-burk",k:"d",t:"Acinetobacter and Burkholderia",mm:"Other non-fermenters",leg:[],
draw:()=>tbl(["Organism","Where it lives","Why it matters"],[
 ["Acinetobacter baumannii","พื้นผิวในโรงพยาบาล · ทนความแห้งได้ดี","ปอดอักเสบจากเครื่องช่วยหายใจและการติดเชื้อในกระแสเลือด · ดื้อยาหลายขนานจนบางสายพันธุ์เหลือทางเลือกน้อยมาก"],
 ["Burkholderia pseudomallei","ดิน น้ำ และพืช · เป็นโรคประจำถิ่นในเอเชียตะวันออกเฉียงใต้ อินเดีย และแอฟริกา","melioidosis — ตั้งแต่ตั้งรกรากโดยไม่มีอาการจนถึงฝีในปอด · ผู้ที่ดื่มสุรา เบาหวาน โรคไตหรือโรคปอดเรื้อรังเสี่ยงที่สุด"],
 ["Burkholderia cepacia complex","สิ่งแวดล้อมชื้นในโรงพยาบาล","การติดเชื้อปอดในผู้ป่วย cystic fibrosis · ดื้อยาโดยธรรมชาติหลายตัว"]]),
notes:()=>`<h3>Melioidosis is a local disease</h3><ul>
 <li><i>B. pseudomallei</i> เป็น <b>saprophyte ที่อยู่ในดิน น้ำ และพืช</b> และเป็นโรคประจำถิ่นในเอเชียตะวันออกเฉียงใต้ อินเดีย และแอฟริกา ${S.mu}</li>
 <li>คนรับเชื้อจากการ<b>สูดเข้าไป</b> หรือพบน้อยกว่านั้นจากการที่เชื้อ<b>ผ่านผิวหนังเข้าไป</b> ${S.mu}</li>
 <li>ผู้สัมผัสส่วนใหญ่<b>ไม่มีอาการ</b> · แต่ผู้ที่ดื่มสุรา ผู้เป็นเบาหวาน และผู้ที่มีโรคไตหรือโรคปอดเรื้อรังเสี่ยงต่อการติดเชื้อฉวยโอกาส ${S.mu}</li>
 <li>ชื่อโรคมาจาก melis ที่แปลว่า distemper กับ eidos ที่แปลว่าคล้าย ${S.mu}</li>
 <li><i>B. pseudomallei</i> เคยถูกใช้ในโครงการอาวุธชีวภาพ · การแยกเชื้อได้จากผู้ป่วยจึงต้องแจ้งหน่วยงานสาธารณสุข และการเพาะเชื้อเพื่อวินิจฉัยควรทำในห้องปฏิบัติการที่ได้รับอนุญาต ${S.mu}</li></ul>
 <h3>What unites the non-fermenters</h3><ul>
 <li>ทั้งหมด<b>ไม่หมักน้ำตาล</b> ซึ่งแยกพวกมันจาก Enterobacteriaceae บนจานทดสอบชุดแรก ${S.mu}</li>
 <li>พวกมันอยู่ใน<b>สิ่งแวดล้อม โดยเฉพาะที่ชื้น</b> ไม่ใช่เชื้อประจำถิ่นในลำไส้ ${S.mu}</li>
 <li>และพวกมัน<b>ดื้อยาโดยธรรมชาติมากกว่า</b> ซึ่งเป็นเหตุผลที่กลุ่มนี้ครองหอผู้ป่วยวิกฤต ${S.mu}</li></ul>`});

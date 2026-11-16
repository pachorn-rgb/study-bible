//@include _micro-helpers.js
Object.assign(S,{mu:'<b class="sbb murray">Mu</b>'});
Object.assign(GN,{a:"Neisseria",b:"Disease",c:"At the bench"});

/* ===================================================================
   Gram-negative cocci — Murray ch 23 (Neisseria and Related Genera).
   =================================================================== */

SEC.push({id:"neisseria",k:"a",t:"Gram-negative diplococci inside the neutrophil",mm:"The genus",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"Urethral discharge · Gram stain",{a:"start",c:"bh"})
  +mL(24,46,"ภาพนี้คือสิ่งที่ทำให้วินิจฉัย gonorrhea ในผู้ชายที่มีอาการได้ทันทีข้างเตียง",{a:"start",c:"s m"});
 /* two neutrophils with intracellular diplococci, plus some free pairs */
 b+=mpmn(150,170,72,5)+mpmn(320,196,64,11);
 [[126,148,0],[170,186,22],[138,200,-16],[182,146,38]].forEach(([x,y,r],i)=>{
  b+=mdiplo(x,y,9,i*7+3,r)});
 [[300,176,10],[340,214,-24],[310,222,34]].forEach(([x,y,r],i)=>{
  b+=mdiplo(x,y,8.5,i*9+13,r)});
 [[396,112,20],[412,166,-32],[386,214,8]].forEach(([x,y,r],i)=>{
  b+=mdiplo(x,y,9,i*11+5,r)});
 b+=mlead2(150,108,462,62,["Neutrophil","นิวเคลียสหลายพู"],{a:"start"})
  +mlead2(182,146,462,108,["Intracellular diplococci","อยู่ในไซโทพลาซึมของ neutrophil"],{a:"start"})
  +mlead2(396,112,462,154,["Extracellular pairs","คู่ที่อยู่นอกเซลล์ก็พบได้"],{a:"start"});
 b+=mL(462,202,"ด้านที่ชนกันแบนเข้าหากัน",{a:"start",c:"s m"})
  +mL(462,220,"เหมือนเมล็ดถั่วสองเมล็ดวางประกบ",{a:"start",c:"s m"});
 /* how the genus is pinned down */
 b+=`<path class="m-sep" d="M24,268 L616,268"/>`
  +mL(24,294,"How the genus is pinned down",{a:"start",c:"bh"});
 [["Oxidase positive","หยดน้ำยาแล้วโคโลนีเปลี่ยนสีภายในไม่กี่วินาที",24,322],
  ["Catalase positive","สองอย่างนี้คู่กันคือด่านแรกของการระบุสกุล",330,322],
  ["Fastidious","ต้องใช้ chocolate agar · โตดีที่ 35–37 °C ในบรรยากาศชื้นที่เติม CO₂",24,368],
  ["Oxidative, not fermentative","สร้างกรดจากน้ำตาลแบบ oxidative · ชนิดน้ำตาลที่ใช้ได้แยกสปีชีส์",24,414],
  ["Dies quickly","ตายเร็วเมื่อเจอความเย็นหรือความแห้ง — สิ่งส่งตรวจต้องรีบส่ง",24,460]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+(d?mL(x,y+20,d,{a:"start",c:"s m"}):"")});
 return svg(b,"0 0 640 496")},
notes:()=>`<h3>Two species matter</h3><ul>
 <li><b><i>N. gonorrhoeae</i></b> และ <b><i>N. meningitidis</i></b> เป็นสมาชิกที่สำคัญที่สุดของสกุลนี้ · ตัวอื่น ๆ ในสกุลเป็นเชื้อประจำถิ่นของ nasopharynx ${S.mu}</li>
 <li>ผนังเซลล์เป็นแบบ gram-negative ตามปกติ — peptidoglycan บาง ๆ อยู่ระหว่าง cytoplasmic membrane กับ outer membrane ${S.mu}</li>
 <li><b>เหล็กจำเป็นต่อการเติบโตและเมแทบอลิซึม</b>ของทั้งสองสปีชีส์ และทั้งคู่มี receptor สำหรับ transferrin, lactoferrin และ hemoglobin เพื่อแย่งเหล็กจาก host ${S.mu}</li>
 <li>ทั้งคู่<b>ปล่อยถุง outer membrane bleb</b> ออกมาระหว่างที่โตเร็ว · ถุงเหล่านี้มี lipooligosaccharide และโปรตีนผิวอยู่ จึงทั้งเพิ่มความเป็นพิษของ endotoxin และดักแอนติบอดีให้พ้นจากตัวเชื้อที่กำลังแบ่งตัว ${S.mu}</li></ul>
 <h3>What the Gram stain can settle</h3><ul>
 <li>Gram stain ของสิ่งส่งตรวจจากท่อปัสสาวะ<b>แม่นยำเฉพาะในผู้ชายที่มีอาการ</b> — ในผู้หญิงและในตำแหน่งอื่นความไวต่ำเกินกว่าจะเชื่อถือได้ ${S.mu}</li>
 <li>Gram stain ของ CSF มีทั้งความไวและความจำเพาะดีสำหรับ meningococcus แต่<b>ใช้กับเลือดไม่ได้</b> เพราะปกติมีเชื้อน้อยเกินไป ยกเว้นในภาวะ sepsis ที่รุนแรงมาก ${S.mu}</li>
 <li>การเพาะเชื้อให้ผลชี้ขาด แต่เชื้อเลือกกินและ<b>ตายเร็วเมื่อเจอความเย็นหรือความแห้ง</b> ${S.mu}</li>
 <li>ปัจจุบันการเพาะเชื้อสำหรับ gonorrhea ถูกแทนที่ด้วย <b>nucleic acid test</b> ในห้องปฏิบัติการส่วนใหญ่ ${S.mu}</li></ul>`});

SEC.push({id:"gc-vir",k:"a",t:"Neisseria gonorrhoeae: the surface is the virulence",mm:"Gonococcus virulence",leg:[],
draw:()=>{let b="";
 const wv=mwob(5,2.2),YM=176,X0=24,X1=380,LX=398;
 /* the gram-negative envelope, as drawn in Basic Bacteriology */
 const cyTop=x=>YM+9+wv(x);
 let cy=`M${X0},${cyTop(X0)}`;for(let x=X0;x<=X1;x+=7)cy+=`L${x.toFixed(1)},${cyTop(x).toFixed(1)}`;
 cy+=`L${X1},${YM+54} L${X0},${YM+54} Z`;
 b+=`<path class="m-cyto" d="${cy}"/>`+mgrainIn("gcc",cy,X0,YM,X1-X0,54,70,3,"m-gr",.85);
 b+=mbil(X0,X1,x=>YM+wv(x));
 const pgB=YM-26,OM=YM-72;
 let pp=`M${X0},${OM+9+wv(X0)}`;for(let x=X0;x<=X1;x+=7)pp+=`L${x.toFixed(1)},${(OM+9+wv(x)).toFixed(1)}`;
 for(let x=X1;x>=X0;x-=7)pp+=`L${x.toFixed(1)},${(YM-9+wv(x)).toFixed(1)}`;
 b+=`<path class="m-peri" d="${pp}Z"/>`+mpgl(X0,X1,x=>pgB+wv(x),2,-6.4,9,{amp:1.1});
 b+=mbil(X0,X1,x=>OM+wv(x),{core:"m-ocore",head:"m-ohead",tail:"m-otail"});
 /* lipooligosaccharide — short, because it is oligo not poly */
 for(let i=0;i<9;i++){const x=X0+20+i*40;b+=mlps(x,OM-8+wv(x),40+i,3)}
 /* Por and Opa in the outer membrane */
 [1,5].forEach(i=>{const x=X0+20+i*40,y=OM+wv(x);
  b+=`<path class="m-porin" d="${(`M${(x-9).toFixed(1)},${(y-9).toFixed(1)} l0,18 l6,0 l0,-18 Z`)}"/>`
   +`<path class="m-porin" d="${(`M${(x+3).toFixed(1)},${(y-9).toFixed(1)} l0,18 l6,0 l0,-18 Z`)}"/>`});
 [3,7].forEach(i=>{const x=X0+20+i*40,y=OM+wv(x);
  b+=`<path class="m-gene" d="${mblob(x,y,9,12,i*5+3,.1)}"/>`});
 /* pili reaching out */
 const pq=rng(19);
 for(let i=0;i<8;i++){const x=X0+34+i*44,y=OM-9+wv(x),L=30+pq()*14;
  b+=`<path class="m-pil" d="M${x.toFixed(1)},${y.toFixed(1)} q${(pq()*10-5).toFixed(1)},${(-L*.6).toFixed(1)} ${(pq()*14-7).toFixed(1)},${(-L).toFixed(1)}"/>`}
 b+=mlead2(X0+34,OM-40,LX,48,["Pilin","เกาะครั้งแรก · เปลี่ยนแอนติเจนได้"],{a:"start"})
  +mlead2(X0+60,OM,LX,100,["Por protein (PorB)","กันไม่ให้ phagolysosome รวมตัว"],{a:"start"})
  +mlead2(X0+140,OM,LX,152,["Opa protein","เกาะแน่นกับเซลล์ host"],{a:"start"})
  +mlead2(X0+300,OM-22,LX,204,["Lipooligosaccharide","สายน้ำตาลสั้นกว่า LPS"],{a:"start"});
 b+=`<path class="m-sep" d="M24,260 L616,260"/>`;
 [["IgA1 protease","ตัดบานพับของ IgA1 จนได้ Fc กับ Fab ที่ไม่ทำงาน",24,286],
  ["β-lactamase","บางสายพันธุ์ย่อย penicillin ได้",330,286],
  ["Rmp protein","กระตุ้นแอนติบอดีที่ไปขวางการฆ่าเชื้อด้วยซีรัม",24,332],
  ["Iron receptors","transferrin · lactoferrin · hemoglobin",330,332],
  ["Antigenic variation ของ pilin","เป็นเหตุผลสำคัญที่ติดเชื้อซ้ำได้และยังไม่มีวัคซีน",24,378]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 422")},
notes:()=>`<h3>Attachment, then invasion</h3><ul>
 <li>Gonococci เกาะเซลล์เยื่อเมือก บุกเข้าไปในเซลล์ เพิ่มจำนวน แล้ว<b>ทะลุผ่านเซลล์ออกไปยังช่องใต้เยื่อบุ</b> ซึ่งเป็นที่ที่การติดเชื้อตั้งตัวขึ้น ${S.mu}</li>
 <li><b>Pili, PorB และ Opa</b> เป็นสามตัวที่ทำหน้าที่เกาะและบุกเข้าเซลล์ ${S.mu}</li>
 <li><b>Lipooligosaccharide</b> ของ gonococcus กระตุ้นการหลั่ง <b>TNF-α</b> ซึ่งเป็นต้นเหตุของอาการส่วนใหญ่ของโรค ${S.mu}</li></ul>
 <h3>Why immunity does not stick</h3><ul>
 <li>Pilin มี<b>การสลับยีนจนเปลี่ยนแอนติเจนได้</b> ภูมิคุ้มกันที่สร้างไว้จึงใช้กับสายพันธุ์ถัดไปไม่ได้ ${S.mu}</li>
 <li>PorB บางแบบทำให้เชื้อ<b>ทนต่อการถูกฆ่าด้วยซีรัมที่อาศัย complement</b> ${S.mu}</li>
 <li>แอนติบอดีต่อ lipooligosaccharide กระตุ้น complement ได้ C5a ที่เรียก neutrophil เข้ามา · แต่ <b>IgG และ secretory IgA1 ที่ต่อต้าน Rmp กลับไปขวางการฆ่าเชื้อนั้นเสียเอง</b> ${S.mu}</li>
 <li>IgG3 เป็นแอนติบอดี IgG หลักที่สร้างขึ้นตอบสนองต่อการติดเชื้อ gonococcus ${S.mu}</li></ul>
 <h3>Opaque or transparent colonies</h3><ul>
 <li>เชื้อที่แสดง Opa protein ให้<b>โคโลนีขุ่น</b> และพบบ่อยที่สุดในผู้ป่วยที่มีการติดเชื้อเฉพาะที่ — endocervicitis, urethritis, pharyngitis, proctitis ${S.mu}</li>
 <li><b>โคโลนีใส</b>สัมพันธ์กับ pelvic inflammatory disease และการติดเชื้อที่กระจายทั่วร่างกายมากกว่า ${S.mu}</li></ul>`});

SEC.push({id:"gonorrhea",k:"b",t:"Gonorrhea by site and by host",mm:"Gonorrhea",leg:[],
draw:()=>tbl(["Host","Picture","Note"],[
 ["Man","urethritis — หนองไหลและแสบขณะปัสสาวะ","ผู้ชายส่วนใหญ่มีอาการตั้งแต่แรก"],
 ["Woman","endocervicitis · อาจมีตกขาวหรือแสบขณะปัสสาวะ","ราวครึ่งหนึ่งมีอาการน้อยหรือไม่มีเลย — นี่คือแหล่งกักโรคหลัก"],
 ["Woman — ascending","pelvic inflammatory disease · salpingitis · tubo-ovarian abscess","ทำให้มีบุตรยากและตั้งครรภ์นอกมดลูก"],
 ["Rectum · pharynx","proctitis · pharyngitis","ไม่มีอาการบ่อยกว่าการติดเชื้อที่อวัยวะเพศ"],
 ["Disseminated","ข้ออักเสบและผื่นผิวหนัง","กระจายเข้ากระแสเลือดจากจุดติดเชื้อเดิม"],
 ["Newborn","ophthalmia neonatorum — เยื่อบุตาอักเสบเป็นหนอง","ติดจากแม่ขณะคลอด"]]),
notes:()=>`<h3>The reservoir is the person without symptoms</h3><ul>
 <li>แหล่งกักโรคหลักของ gonococci คือ<b>ผู้ติดเชื้อที่ไม่มีอาการ</b> ${S.mu}</li>
 <li>การเป็นพาหะแบบไม่มีอาการพบใน<b>ผู้หญิงบ่อยกว่าผู้ชาย</b> — ผู้หญิงที่ติดเชื้อมากถึงครึ่งหนึ่งมีอาการน้อยหรือไม่มีเลย ขณะที่ผู้ชายส่วนใหญ่มีอาการตั้งแต่แรก ${S.mu}</li>
 <li>ในผู้ที่ไม่ได้รักษา อาการมักหายไปเองภายในไม่กี่สัปดาห์ แล้ว<b>กลายเป็นพาหะต่อ</b> ${S.mu}</li>
 <li>ตำแหน่งที่ติดเชื้อก็กำหนดด้วยว่าจะมีอาการหรือไม่ — <b>การติดเชื้อที่ทวารหนักและคอหอยไม่มีอาการบ่อยกว่า</b>ที่อวัยวะเพศ ${S.mu}</li>
 <li>ทารกแรกเกิดเสี่ยงเมื่อแม่ติดเชื้อ ${S.mu}</li></ul>
 <h3>Treatment</h3><ul>
 <li>ยาที่แนะนำในขณะนี้คือ <b>ceftriaxone ร่วมกับ azithromycin</b> ${S.mu}</li>
 <li>แต่มีรายงาน<b>การดื้อ cephalosporin และ azithromycin ในระดับสูง</b>แล้ว ซึ่งเป็นเหตุผลที่แนวทางการรักษาเปลี่ยนบ่อย — ให้ยึดแนวทางฉบับปัจจุบันเสมอ ${S.mu}</li>
 <li>ทารกแรกเกิดป้องกันด้วย <b>silver nitrate 1%</b> · ถ้าเป็น ophthalmia neonatorum แล้วรักษาด้วย ceftriaxone ${S.mu}</li>
 <li>การป้องกันอาศัยการให้ความรู้ การใช้ถุงยางอนามัย การใช้ฆ่าเชื้ออสุจิอย่าง nonoxynol-9 ซึ่งได้ผลเพียงบางส่วน และ<b>การตามรักษาคู่ของผู้ป่วย</b> ${S.mu}</li>
 <li><b>ยังไม่มีวัคซีนสำหรับ <i>N. gonorrhoeae</i></b> ซึ่งต่างจาก <i>N. meningitidis</i> ${S.mu}</li></ul>`});

SEC.push({id:"meningococcus",k:"b",t:"Neisseria meningitidis: carriage, then catastrophe",mm:"Meningococcus",leg:[],
draw:()=>{let b="";
 /* the route: nasopharynx → blood → meninges */
 b+=mL(24,26,"From a quiet nasopharynx to the meninges",{a:"start",c:"bh"});
 const step=(x,y,t2,d)=>{let g=`<path class="m-body" d="${mblob(x,y,44,30,Math.round(x),.07)}"/>`
   +mL(x,y+5,t2,{c:"bh"});
  return g+mL(x,y+52,d,{c:"s m"})};
 b+=step(96,88,"Nasopharynx","ตั้งรกรากเงียบ ๆ")
  +step(300,88,"Bloodstream","capsule กันการถูกกลืนกิน")
  +step(520,88,"Meninges","หรือหลอดเลือดทั่วร่างกาย");
 [[140,96,256],[344,96,476]].forEach(([x1,y,x2])=>{
  b+=`<path class="m-cyc" marker-end="url(#ah)" d="M${x1},${88} L${x2},${88}"/>`});
 b+=mL(24,162,"capsule ขัดขวางการเกาะเซลล์เยื่อบุ เชื้อจึงกดการสร้างมันลงก่อนเกาะ แล้วค่อยสร้างใหม่ตอนเข้ากระแสเลือด",{a:"start",c:"s m"});
 /* the skin: petechiae coalescing into purpura */
 const sk=mskin(24,452,196,{seed:13,scale:.74});b+=sk.b;const Y=sk.y;
 const pq=rng(23);
 for(let i=0;i<26;i++){const x=48+pq()*180,y=Y.spin+6+pq()*(Y.derm-Y.spin-10);
  b+=`<path class="m-body2" style="opacity:.9" d="${mblob(x,y,3+pq()*2.5,2.6+pq()*2,i*5+3,.3)}"/>`}
 [300,372,430].forEach((x,i)=>{
  b+=`<path class="m-body2" style="opacity:.92" d="${mblob(x,Y.spin+26,30+i*7,20,i*9+5,.26)}"/>`});
 b+=mlead2(120,Y.spin+22,470,236,["Petechiae","หลอดเลือดฝอยอุดตัน"],{a:"start"})
  +mlead2(372,Y.spin+26,470,282,["Purpura","รวมกันเป็นปื้นใหญ่"],{a:"start"})
  +mL(470,328,"ผื่นที่ลามเร็ว",{a:"start",c:"bad"})
  +mL(470,346,"ในผู้ป่วยไข้สูง",{a:"start",c:"bad"})
  +mL(470,364,"คือภาวะฉุกเฉิน",{a:"start",c:"bad"});
 /* the serogroups */
 b+=`<path class="m-sep" d="M24,${Y.bot+30} L616,${Y.bot+30}"/>`
  +mL(24,Y.bot+56,"Serogroups",{a:"start",c:"bh"});
 [["A, B, C, W135, X, Y","โรคประจำถิ่นและการระบาดเกือบทั้งหมดมาจากหกกลุ่มนี้",24,Y.bot+84],
  ["Y และ W135","เป็นสาเหตุของ pneumonia จาก meningococcus บ่อยที่สุด",24,Y.bot+128],
  ["A และ W135","สัมพันธ์กับโรคในประเทศกำลังพัฒนา",24,Y.bot+172],
  ["B","วัคซีนพอลิแซ็กคาไรด์ครอบคลุมเฉพาะ A, C, Y และ W135 — ไม่ครอบคลุม B",24,Y.bot+216]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:n==="B"?"bad":"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 "+(Y.bot+252))},
notes:()=>`<h3>The capsule is the virulence factor</h3><ul>
 <li>ปัจจัยก่อโรคหลักของ <i>N. meningitidis</i> คือ <b>polysaccharide capsule</b> ซึ่งกันการถูกกลืนกินในกระแสเลือด ${S.mu}</li>
 <li>ความต่างของแอนติเจนใน capsule คือพื้นฐานของการแบ่ง <b>serogroup</b> และมีบทบาทสำคัญในการกำหนดว่าสายพันธุ์ไหนก่อโรคได้ ${S.mu}</li>
 <li>มี serogroup ที่รู้จักหลายกลุ่ม แต่<b>แทบทุกการติดเชื้อมาจากหกกลุ่ม: A, B, C, W135, X และ Y</b> ${S.mu}</li>
 <li>มีจุดที่ขัดกันเองอย่างน่าสนใจ: <b>capsule ขัดขวางการเกาะเซลล์เยื่อบุ</b> เชื้อจึงกดการสร้างมันลงก่อนจะเกาะ แล้วค่อยสร้างใหม่เมื่อต้องเข้ากระแสเลือด ${S.mu}</li>
 <li>Meningococci เกาะอย่างจำเพาะกับ receptor บน <b>nonciliated columnar cell ของ nasopharynx</b> · หลังเกาะแล้วจะเพิ่มจำนวนจนเป็นกลุ่มก้อนที่ยึดติดกับเนื้อเยื่อ host ${S.mu}</li></ul>
 <h3>Who gets sick</h3><ul>
 <li>แพร่ผ่าน<b>ละอองจากทางเดินหายใจ</b> ${S.mu}</li>
 <li>อุบัติการณ์สูงที่สุดใน<b>เด็กอายุต่ำกว่า 1 ปี ผู้ที่อยู่ในสถานสงเคราะห์หรือสถานที่รวมคน และผู้ที่พร่อง complement ตัวท้าย ๆ</b> ${S.mu}</li>
 <li>ทารกที่กินนมแม่มีภูมิคุ้มกันรับมาใน <b>6 เดือนแรก</b> ${S.mu}</li>
 <li>โรคพบทั่วโลก และพบบ่อยที่สุดใน<b>เดือนที่อากาศแห้งและเย็น</b> ${S.mu}</li>
 <li>การระบาดเกิดเมื่อมี<b>สายพันธุ์ก่อโรคใหม่เข้าสู่ประชากรที่ยังไม่มีภูมิคุ้มกัน</b> ${S.mu}</li></ul>
 <h3>Three faces of the disease</h3><ul>
 <li><b>Meningitis</b> — เยื่อหุ้มสมองอักเสบเป็นหนอง ปวดศีรษะ มีอาการแสดงของเยื่อหุ้มสมอง และไข้ · <b>อัตราตายสูงถ้าไม่ได้ยาปฏิชีวนะที่ได้ผลอย่างรวดเร็ว</b> ${S.mu}</li>
 <li><b>Meningococcemia</b> — การติดเชื้อกระจายที่มีลิ่มเลือดอุดหลอดเลือดเล็ก ๆ และอวัยวะหลายระบบเสียหาย · <b>จุดเลือดออกเล็ก ๆ รวมกันเป็นปื้นเลือดออกใหญ่</b> ${S.mu}</li>
 <li><b>Pneumonia</b> — รูปแบบที่อ่อนกว่า เป็น bronchopneumonia ในผู้ที่มีโรคปอดอยู่เดิม ${S.mu}</li></ul>
 <h3>Treatment and prophylaxis</h3><ul>
 <li>ผู้ป่วยที่สงสัย meningitis หรือ bacteremia เริ่มด้วย <b>ceftriaxone</b> · ถ้าผลพบว่าเชื้อไวต่อ penicillin เปลี่ยนเป็น penicillin G ได้ ${S.mu}</li>
 <li><b>ผู้สัมผัสใกล้ชิด</b>ต้องได้ยาป้องกัน — rifampin, ciprofloxacin หรือ ceftriaxone ${S.mu}</li>
 <li>วัคซีนเป็น<b>ส่วนเสริมของการให้ยาป้องกัน ไม่ใช่สิ่งทดแทน</b> ${S.mu}</li>
 <li>การตรวจหาแอนติเจนของ meningococcus มีทั้งความไวและความจำเพาะต่ำ จึงไม่ใช้เป็นหลัก ${S.mu}</li></ul>`});

SEC.push({id:"neisseria-lab",k:"c",t:"Specimen, plate and report",mm:"Neisseria lab",leg:[],
draw:()=>{let b="";
 /* the chain of custody, drawn as the chain it is */
 const Y=96;
 b+=mL(24,26,"เชื้อนี้ตายเร็วเมื่อเจอความเย็นหรือความแห้ง ลำดับขั้นจึงสำคัญพอ ๆ กับการตรวจ",{a:"start",c:"bh"});
 const nodes=[["Collect","swab จากท่อปัสสาวะ ปากมดลูก คอหอย ทวารหนัก หรือ CSF"],
  ["Transport","ส่งทันที · อย่าแช่เย็น"],
  ["Plate","chocolate agar และสื่อแบบเลือก · บ่มใน CO₂"],
  ["Identify","oxidase + · ดูน้ำตาลที่ใช้ได้"]];
 nodes.forEach(([n,d],i)=>{const x=86+i*158;
  b+=`<path class="m-body" d="${mblob(x,Y,62,30,i*9+5,.06)}"/>`+mL(x,Y+5,n,{c:"bh"})
   +mL(x,Y+54,d,{c:"s m"});
  if(i<3)b+=`<path class="m-cyc" marker-end="url(#ah)" d="M${x+64},${Y} L${x+92},${Y}"/>`});
 b+=`<path class="m-sep" d="M24,172 L616,172"/>`;
 [["Nucleic acid test","แทนที่การเพาะเชื้อสำหรับ gonorrhea ในห้องปฏิบัติการส่วนใหญ่แล้ว · ใช้กับปัสสาวะได้",24,198],
  ["Gram stain ของ CSF","ไวและจำเพาะสำหรับ meningococcus",24,244],
  ["Gram stain ของเลือด","ใช้ไม่ได้ ปกติมีเชื้อน้อยเกินไป ยกเว้น sepsis ที่รุนแรงมาก",330,244],
  ["Meningococcal antigen test","ความไวและความจำเพาะต่ำ ไม่แนะนำให้ใช้ตัดสิน",24,290]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:n.indexOf("เลือด")>0||n.indexOf("antigen")>0?"bad":"bh"})
   +mL(x,y+20,d,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 336")},
notes:()=>`<h3>Growth requirements decide the plate</h3><ul>
 <li>ทั้งสองสปีชีส์โตดีที่ <b>35–37 °C ในบรรยากาศชื้นที่เติม CO₂</b> ${S.mu}</li>
 <li>ทั้งคู่ <b>oxidase positive และ catalase positive</b> และสร้างกรดจากน้ำตาลแบบ oxidative ไม่ใช่การหมัก ${S.mu}</li>
 <li>ชนิดของน้ำตาลที่ใช้ได้เป็นตัวแยกสปีชีส์ในสกุลนี้ออกจากกัน ${S.mu}</li></ul>
 <h3>Three answers the lab gives</h3><ul>
 <li><b>Gram stain</b> ให้คำตอบทันทีกับสองสถานการณ์เท่านั้น: หนองจากท่อปัสสาวะของผู้ชายที่มีอาการ และ CSF ${S.mu}</li>
 <li><b>การเพาะเชื้อ</b>ให้ผลชี้ขาด แต่เชื้อเลือกกินและตายเร็ว จึงขึ้นกับคุณภาพการเก็บและการส่งเป็นอย่างมาก ${S.mu}</li>
 <li><b>Nucleic acid test</b> มีความไวและความจำเพาะสูง และได้เข้ามาแทนที่การเพาะเชื้อสำหรับ gonorrhea ในห้องปฏิบัติการส่วนใหญ่แล้ว ${S.mu}</li></ul>
 <h3>One more organism in this chapter</h3><ul>
 <li><b><i>Eikenella corrodens</i></b> อยู่ในบทเดียวกันใน Murray · เป็นเชื้อประจำถิ่นในช่องปาก ${S.mu}</li>
 <li>มันก่อการติดเชื้อที่<b>แผลจากการกัดของคน</b> รวมถึงแผลจากหมัดที่ไปโดนฟัน ซึ่งพาเชื้อในช่องปากเข้าไปในเนื้อเยื่อชั้นลึก ${S.mu}</li></ul>`});

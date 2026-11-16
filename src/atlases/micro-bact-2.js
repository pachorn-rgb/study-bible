//@include _micro-helpers.js
Object.assign(S,{mu:'<b class="sbb murray">Mu</b>'});
Object.assign(GN,{a:"Bacillus",b:"Listeria and Corynebacterium",c:"Clostridium"});

/* ===================================================================
   Gram-positive bacilli — Murray ch 20 (Bacillus), ch 21 (Listeria and
   related) and ch 30 (Clostridium).
   =================================================================== */

SEC.push({id:"anthracis",k:"a",t:"Bacillus anthracis and the three routes in",mm:"B. anthracis",leg:[],
draw:()=>{let b="";
 /* the organism: a box-car chain of rods with unstained spores */
 const cy=92;
 b+=mL(24,34,"Boxcar chains with unstained spores",{a:"start",c:"bh"});
 [0,1,2,3].forEach(i=>{const x=72+i*62;
  b+=`<path class="m-body" d="${mrod(x,cy,58,17,i*7+3,.035)}"/>`
   +`<ellipse class="m-in" cx="${x+3}" cy="${cy+3}" rx="20" ry="11"/>`;
  if(i%2===0)b+=`<path class="m-spec" style="opacity:.95" d="${mblob(x,cy,13,11,i*5+9,.07)}"/>`
   +`<path class="m-face" style="fill:none" d="${mblob(x,cy,13,11,i*5+9,.07)}"/>`});
 b+=mlead2(134,cy-12,340,62,["Spore","ไม่ติดสี เห็นเป็นช่องว่างในตัวเชื้อ"],{a:"start"})
  +mlead2(196,cy+16,340,100,["Non-motile · square ends","ต่อกันเป็นสายเหมือนตู้รถไฟ"],{a:"start"});
 /* the two plasmids */
 b+=`<path class="m-sep" d="M24,146 L616,146"/>`;
 [["pXO1","ยีนของสารพิษสามตัว: protective antigen, edema factor, lethal factor",176],
  ["pXO2","ยีนสร้าง capsule — capA, capB, capC",224]].forEach(([n,d,y])=>{
  b+=`<path class="m-dna2" d="${mloop(46,y,20,n==="pXO1"?7:11,.18,120,.95)}"/>`
   +mL(82,y-6,n,{a:"start",c:"bh"})+mL(82,y+12,d,{a:"start",c:"s m"})});
 /* the three routes */
 b+=`<path class="m-sep" d="M24,256 L616,256"/>`
  +mL(24,282,"Three routes, three diseases",{a:"start",c:"bh"});
 [["Inoculation","95% ของการติดเชื้อตามธรรมชาติ · สปอร์เข้าทางผิวหนังที่มีแผล","Cutaneous anthrax · แผลดำตรงกลาง อัตราตาย 20% ถ้าไม่รักษา",24],
  ["Ingestion","กินเนื้อสัตว์ที่ปนเปื้อน","Gastrointestinal anthrax · อัตราตายเกือบ 100%",24],
  ["Inhalation","สูดสปอร์เข้าไป · เส้นทางที่ใช้เป็นอาวุธชีวภาพ","Inhalation anthrax · sepsis เร็ว mediastinal lymphadenopathy เยื่อหุ้มสมองอักเสบครึ่งหนึ่ง",24]
 ].forEach(([n,how,dis],i)=>{const y=312+i*58;
  b+=`<path class="m-body2" d="${mblob(40,y+2,15,13,i*9+5,.07)}"/>`+mL(40,y+7,String(i+1),{c:"bh"})
   +mL(66,y,n,{a:"start",c:"bh"})+mL(66+n.length*8.2,y,"· "+how,{a:"start",c:"s m"})
   +mL(66,y+20,dis,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 496")},
notes:()=>`<h3>The capsule is protein, which is unusual</h3><ul>
 <li>Capsule ของ <i>B. anthracis</i> เป็น<b>พอลิเปปไทด์ poly-d-glutamic acid</b> ไม่ใช่พอลิแซ็กคาไรด์เหมือน capsule ของเชื้ออื่นแทบทั้งหมด ${S.mu}</li>
 <li>มันมี serotype เดียว เพราะประกอบด้วยกรดกลูตามิกล้วน ${S.mu}</li>
 <li>เห็น capsule ได้ในสิ่งส่งตรวจจริง แต่<b>ไม่ถูกสร้างในหลอดทดลอง</b>เว้นแต่จะใช้สภาวะเลี้ยงพิเศษ ${S.mu}</li>
 <li>ยีน capA, capB และ capC อยู่บนพลาสมิด <b>pXO2</b> ส่วนยีนของสารพิษทั้งสามอยู่บน <b>pXO1</b> — ต้องมีทั้งสองพลาสมิดจึงจะก่อโรคได้เต็มที่ ${S.mu}</li>
 <li>สปอร์เห็นได้ในเชื้อที่เลี้ยงไว้ 2–3 วัน แต่<b>ไม่เห็นในสิ่งส่งตรวจ</b> ${S.mu}</li></ul>
 <h3>Cutaneous is the common one</h3><ul>
 <li>ราว <b>95%</b> ของการติดเชื้อตามธรรมชาติในคนเกิดจากสปอร์เข้าทางผิวหนังที่สัมผัสดินหรือผลิตภัณฑ์จากสัตว์ที่ติดเชื้อ เช่น หนัง ขนแพะ และขนแกะ ${S.mu}</li>
 <li>ชื่อ <i>anthracis</i> มาจาก anthrax ที่แปลว่าถ่าน — หมายถึง<b>แผลเนื้อตายสีดำ</b>ของ cutaneous anthrax ${S.mu}</li>
 <li>อัตราตายของ cutaneous anthrax ที่ไม่ได้รักษาคือ <b>20%</b> ${S.mu}</li></ul>
 <h3>Ingestion and inhalation are far worse</h3><ul>
 <li>Gastrointestinal anthrax: ถ้าเชื้อบุกทางเดินอาหารส่วนบน จะเกิดแผลในปากหรือหลอดอาหาร ตามด้วยต่อมน้ำเหลืองโต บวม และ sepsis · ถ้าบุกที่ cecum หรือ terminal ileum จะมีคลื่นไส้ อาเจียนและอ่อนเพลียที่ลุกลามเร็ว · <b>อัตราตายเชื่อว่าใกล้ 100%</b> ${S.mu}</li>
 <li>Inhalation anthrax เริ่มด้วยอาการไม่จำเพาะ แล้วเข้าสู่ sepsis อย่างรวดเร็ว มีไข้ บวม และ <b>mediastinal lymphadenopathy</b> · ครึ่งหนึ่งมีอาการทางเยื่อหุ้มสมอง และผู้ป่วยส่วนใหญ่เสียชีวิตถ้าไม่เริ่มรักษาทันที ${S.mu}</li>
 <li>ต่างจากอีกสองรูปแบบ inhalation anthrax อาจมี<b>ระยะแฝงที่ยาว</b> ${S.mu}</li>
 <li>สิ่งที่เรารู้เกี่ยวกับ inhalation anthrax ส่วนมากมาจากสองเหตุการณ์: การรั่วไหลของสปอร์ที่ Sverdlovsk ในสหภาพโซเวียตปี 1979 (อย่างน้อย 79 ราย เสียชีวิต 68 ราย) และการส่งจดหมายปนเปื้อนถึงพนักงานไปรษณีย์สหรัฐปี 2001 (inhalation 11 ราย cutaneous 11 ราย) ${S.mu}</li>
 <li>Anthrax เป็นโรคของสัตว์กินพืชเป็นหลัก คนติดจากการสัมผัสสัตว์หรือผลิตภัณฑ์จากสัตว์ · ในสหรัฐพบน้อยมาก มีเพียงสี่รายระหว่างปี 2003–2015 ${S.mu}</li></ul>`});

SEC.push({id:"anthrax-tox",k:"a",t:"How anthrax toxin gets inside",mm:"Anthrax toxin",leg:[],
draw:()=>{let b="";
 const wv=mwob(5,1.8),YM=150;
 b+=mL(24,26,"Nothing here is toxic on its own — the pieces have to assemble",{a:"start",c:"bh"});
 /* the host membrane */
 b+=mbil(24,616,x=>YM+wv(x));
 b+=mL(44,YM-34,"outside",{a:"start",c:"s m"})+mL(44,YM+42,"cytosol",{a:"start",c:"s m"});
 /* 1. PA binds its receptor and is cleaved */
 const x1=108;
 b+=`<path class="m-porin" d="M${x1-8},${YM-9} l0,18 l16,0 l0,-18 Z"/>`
  +`<path class="m-gene" d="${mblob(x1,YM-26,15,12,7,.1)}"/>`
  +mL(x1,YM-22,"PA",{c:"bh"})
  +`<path class="m-cyc" marker-end="url(#ah2)" d="M${x1+22},${YM-30} q18,-8 32,2"/>`
  +mL(x1,YM-52,"1 · จับ receptor แล้วถูกตัด",{c:"s m"});
 /* 2. seven PA63 fragments form the prepore ring */
 const x2=250;
 [...Array(7)].forEach((_,i)=>{const dx=(i-3)*11;
  b+=`<path class="m-gene" style="stroke:var(--sb-surface);stroke-width:1.4" d="${mblob(x2+dx,YM-18,6,10,i*5+3,.1)}"/>`});
 b+=mL(x2,YM-44,"2 · PA63 เจ็ดตัวรวมเป็นวง (prepore)",{c:"s m"});
 /* 3. LF and EF dock on the ring */
 const x3=388;
 [...Array(7)].forEach((_,i)=>{const dx=(i-3)*11;
  b+=`<path class="m-gene" style="stroke:var(--sb-surface);stroke-width:1.4" d="${mblob(x3+dx,YM-18,6,10,i*5+3,.1)}"/>`});
 b+=`<path class="m-body2" d="${mblob(x3-14,YM-44,15,13,9,.08)}"/>`+mL(x3-14,YM-40,"LF",{c:"bh"})
  +`<path class="m-ring2" d="${mblob(x3+16,YM-46,15,13,13,.08)}"/>`+mL(x3+16,YM-42,"EF",{c:"bh"})
  +mL(x3-30,YM-72,"3 · LF และ EF จับที่วงเดียวกัน จึงแย่งที่กัน",{c:"s m"});
 /* 4. endocytosis, acidification, release into the cytosol */
 const x4=532;
 b+=`<path class="m-cap" style="stroke-dasharray:none" d="${mblob(x4,YM+56,52,40,17,.08)}"/>`
  +mL(x4,YM+100,"endosome · กรด",{c:"s m"});
 [...Array(7)].forEach((_,i)=>{const dx=(i-3)*10;
  b+=`<path class="m-gene" style="stroke:var(--sb-surface);stroke-width:1.4" d="${mblob(x4+dx,YM+34,5.5,9,i*5+3,.1)}"/>`});
 b+=`<path class="m-body2" d="${mblob(x4-20,YM+72,13,11,9,.08)}"/>`+mL(x4-20,YM+76,"LF",{c:"bh"})
  +`<path class="m-ring2" d="${mblob(x4+18,YM+76,13,11,13,.08)}"/>`+mL(x4+18,YM+80,"EF",{c:"bh"})
  +mL(x4-20,YM-34,"4 · ถูกกลืนเข้าเซลล์ แล้วปล่อยเข้าไซโทซอล",{a:"end",c:"s m"});
 b+=`<path class="m-cyc" marker-end="url(#ah)" d="M${x3+40},${YM-20} q46,20 ${x4-x3-56},${56}"/>`;
 /* what each one does, once inside */
 b+=`<path class="m-sep" d="M24,${YM+128} L616,${YM+128}"/>`;
 [["Lethal factor","zinc-dependent protease ที่ตัด MAP kinase → เซลล์ตาย · กระตุ้น macrophage ให้หลั่ง TNF-α และ IL-1β",24],
  ["Edema factor","calmodulin-dependent adenylate cyclase ที่ดัน cAMP ขึ้น → บวมน้ำ",24]
 ].forEach(([n,d],i)=>{const y=YM+156+i*40;
  b+=mL(24,y,n,{a:"start",c:"bh"})+mL(24,y+20,d,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 "+(YM+250))},
notes:()=>`<h3>Three proteins, two toxins</h3><ul>
 <li>ยีนของโปรตีนสามตัวอยู่บนพลาสมิดใหญ่ <b>pXO1</b>: <b>protective antigen (PA)</b>, <b>edema factor (EF)</b> และ <b>lethal factor (LF)</b> ${S.mu}</li>
 <li>แต่ละตัว<b>ไม่เป็นพิษเมื่ออยู่เดี่ยว ๆ</b> — ต้องประกอบกันจึงจะเป็นสารพิษ: PA + EF คือ <b>edema toxin</b> และ PA + LF คือ <b>lethal toxin</b> ${S.mu}</li>
 <li>PA เป็นโปรตีน 83 kDa ที่จับกับหนึ่งในสอง receptor ซึ่งมีอยู่บนเซลล์และเนื้อเยื่อหลายชนิด — สมอง หัวใจ ลำไส้ ปอด กล้ามเนื้อลาย ตับอ่อน และ macrophage ${S.mu}</li></ul>
 <h3>The assembly line</h3><ul>
 <li>หลัง PA จับ receptor โปรตีเอสของ host ตัดมันออก เหลือชิ้น <b>PA63</b> ติดอยู่บนผิวเซลล์ ${S.mu}</li>
 <li>PA63 <b>เจ็ดชิ้นรวมตัวกันเป็นวง</b> เรียก pore precursor หรือ prepore ${S.mu}</li>
 <li>วงนี้จับ LF หรือ EF ได้ถึงสามโมเลกุล · ทั้งสองจับที่<b>ตำแหน่งเดียวกันบน PA63 จึงแย่งที่กัน</b> ${S.mu}</li>
 <li>การประกอบครบกระตุ้นให้เซลล์กลืนเข้าไป · ใน endosome ที่เป็นกรด วงนี้<b>กลายเป็นรูทะลุเยื่อ</b> แล้วปล่อย LF และ EF เข้าไซโทซอล ${S.mu}</li></ul>
 <h3>What each factor does</h3><ul>
 <li><b>LF</b> เป็น zinc-dependent protease ที่ตัด <b>mitogen-activated protein kinase</b> ทำให้เซลล์ตาย · ฤทธิ์ zinc metalloprotease นี้ยังกระตุ้น macrophage ให้หลั่ง TNF-α, IL-1β และ cytokine อักเสบอื่น ${S.mu}</li>
 <li><b>EF</b> เป็น calmodulin-dependent adenylate cyclase ที่ดันระดับ cAMP ในเซลล์ขึ้น ทำให้เกิด<b>การคั่งของน้ำ</b>ที่เห็นใน anthrax · มันเป็นญาติกับ adenylate cyclase ของ <i>Bordetella pertussis</i> และ <i>Pseudomonas aeruginosa</i> ${S.mu}</li>
 <li>ในบรรดาโปรตีนหลักทั้งสาม <b>PA กระตุ้นภูมิคุ้มกันได้ดีที่สุด</b> จึงได้ชื่อว่า protective antigen · ทั้ง LF และ EF กดภูมิคุ้มกันโดยกำเนิดของ host ${S.mu}</li>
 <li>ความพยายามที่จะทำให้สารพิษนี้หมดฤทธิ์จึงมุ่งไปที่ <b>PA และ receptor ของมัน</b> ${S.mu}</li></ul>`});

SEC.push({id:"cereus",k:"a",t:"Bacillus cereus: two enterotoxins, two illnesses",mm:"B. cereus",leg:[],
draw:()=>tbl(["","Emetic form","Diarrheal form"],[
 ["Toxin","heat-stable · ทนการย่อยด้วยโปรตีเอส","heat-labile"],
 ["Mechanism","ยังไม่ทราบกลไก","กระตุ้นระบบ adenylate cyclase–cAMP ในเซลล์เยื่อบุลำไส้ เหมือน enterotoxin ของ Escherichia coli และ Vibrio cholerae"],
 ["Classic food","ข้าวผัด — สปอร์รอดจากการหุง แล้วงอกเมื่อทิ้งข้าวไว้ไม่แช่เย็น","เนื้อสัตว์ ผัก ซอส"],
 ["Why reheating fails","สารพิษถูกปล่อยไว้ก่อนแล้ว และไม่ถูกทำลายเมื่ออุ่นซ้ำ","ต้องกินตัวเชื้อเข้าไปแล้วจึงสร้างสารพิษในลำไส้"],
 ["Onset","1–6 ชั่วโมง","นานกว่า"],
 ["Duration","น้อยกว่า 24 ชั่วโมง","นานกว่า"],
 ["Symptoms","อาเจียน คลื่นไส้ ปวดท้อง · โดยทั่วไปไม่มีไข้และไม่ถ่ายเหลว","ถ่ายเหลวและปวดบีบในท้อง"]]),
notes:()=>`<h3>An intoxication versus an infection</h3><ul>
 <li>Emetic form เป็น <b>intoxication</b> — คือกินสารพิษที่ถูกสร้างไว้ในอาหารแล้ว ไม่ใช่กินตัวเชื้อ · ระยะฟักตัวจึงสั้น (1–6 ชั่วโมง) และโรคก็สั้น (ไม่ถึง 24 ชั่วโมง) ${S.mu}</li>
 <li>ข้าวคือตัวอย่างคลาสสิก: ตอนหุงความร้อนฆ่าเชื้อที่เป็นตัวได้ แต่<b>สปอร์ทนความร้อนรอดมา</b> · ถ้าไม่แช่เย็น สปอร์จะงอกและเชื้อเพิ่มจำนวนอย่างรวดเร็ว แล้วปล่อย heat-stable enterotoxin ออกมา · <b>การอุ่นซ้ำไม่ทำลายสารพิษนี้</b> ${S.mu}</li>
 <li>มีรายงานว่า<b>ตับวายเฉียบพลัน</b>สัมพันธ์กับการกินอาหารที่ปนเปื้อนสารพิษนี้ด้วย ${S.mu}</li></ul>
 <h3>The eye infection is the dangerous one</h3><ul>
 <li>การติดเชื้อที่ตาจาก <i>B. cereus</i> <b>ทำลายลูกตาอย่างรวดเร็วและลุกลาม</b> หลังเชื้อเข้าไปจากการบาดเจ็บ ${S.mu}</li>
 <li>มีสารพิษอย่างน้อยสามตัวที่เกี่ยวข้อง: <b>necrotic toxin</b> ซึ่งเป็น heat-labile enterotoxin, <b>cereolysin</b> ซึ่งเป็น hemolysin ที่แรงและตั้งชื่อตามสปีชีส์ และ <b>phospholipase C</b> ซึ่งเป็น lecithinase ที่แรง ${S.mu}</li></ul>
 <h3>Catheters and contaminants</h3><ul>
 <li><i>Bacillus</i> ตั้งรกรากบนผิวหนังชั่วคราวได้ และมักขึ้นใน blood culture ในฐานะ<b>สิ่งปนเปื้อนที่ไม่มีความหมาย</b> ${S.mu}</li>
 <li>แต่ถ้ามี<b>สิ่งแปลกปลอมในหลอดเลือด</b> มันก่อ bacteremia ที่ต่อเนื่องและอาการ sepsis ได้จริง — ไข้ หนาวสั่น ความดันตก shock ${S.mu}</li>
 <li><i>Bacillus</i> ที่ไม่ใช่ <i>B. anthracis</i> เป็น<b>เชื้อฉวยโอกาสที่มีความสามารถก่อโรคต่ำ</b> · ในกลุ่มนี้ <i>B. cereus</i> สำคัญที่สุด ${S.mu}</li></ul>`});

SEC.push({id:"listeria",k:"b",t:"Listeria monocytogenes: moving without leaving the cell",mm:"Listeria",leg:[],
draw:()=>{let b="";
 const num=(x,y,n)=>`<circle cx="${x}" cy="${y}" r="10" style="fill:var(--sb-ink)"/>`
  +`<text class="t bh" x="${x}" y="${y+4}" text-anchor="middle" font-size="11" fill="var(--sb-surface)">${n}</text>`;
 /* two host cells side by side; the organism crosses between them */
 const c1=180,c2=460,cy=150;
 [c1,c2].forEach((cx,i)=>{b+=`<path class="m-body" style="fill:color-mix(in srgb,#8d8578 10%,var(--sb-surface))" d="${mblob(cx,cy,126,96,i*11+7,.05)}"/>`
  +mgrainIn("lm"+i,mblob(cx,cy,126,96,i*11+7,.05),cx-126,cy-96,252,192,90,i*3+5,"m-gr",.9)
  +`<path class="m-cap" style="stroke-dasharray:none;fill:color-mix(in srgb,#3E6FB0 12%,var(--sb-surface))" d="${mblob(cx+34,cy-26,30,24,i*7+13,.08)}"/>`
  +mL(cx+34,cy-22,"nucleus",{c:"s m"})});
 const bact=(x,y,sd)=>`<path class="m-body2" d="${mrod(x,y,30,8,sd,.05)}"/>`;
 /* 1 — internalin binds E-cadherin and the organism is taken in */
 b+=bact(c1-104,cy+54,3)
  +`<path class="m-pep" style="stroke-width:2.6" d="M${c1-120},${cy+42} L${c1-112},${cy+48}"/>`
  +num(c1-104,cy+54,"1");
 /* 2 — escape from the phagolysosome */
 b+=`<path class="m-cap" style="stroke-dasharray:3 3" d="${mblob(c1-46,cy+10,34,28,9,.1)}"/>`
  +bact(c1-46,cy+10,7)
  +num(c1-46,cy+10,"2");
 /* 3 — ActA builds an actin tail */
 const tx=c1+40,ty=cy+44;
 b+=bact(tx,ty,11);
 const aq=rng(23);
 for(let i=0;i<40;i++){const t=i/40,x=tx-18-t*86+aq()*6,y=ty+(aq()-.5)*16*(0.3+t);
  b+=`<circle class="m-gr2" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(1.8+aq()*1.4).toFixed(1)}"/>`}
 b+=num(tx+22,ty,"3");
 /* 4 — filopod pushes into the neighbour */
 b+=`<path class="m-body" style="fill:color-mix(in srgb,#8d8578 10%,var(--sb-surface))" d="M${c1+112},${cy-16} q46,-6 70,8 q-46,20 -70,10Z"/>`
  +bact(c1+152,cy-2,17)
  +num(c1+152,cy-22,"4");
 /* the four steps, numbered under the figure so no leader has to cross it */
 b+=`<path class="m-sep" d="M24,272 L616,272"/>`;
 [["1","Internalin A","จับ E-cadherin บนเซลล์เยื่อบุ แล้วถูกกลืนเข้าไป",24,298],
  ["2","Listeriolysin O · phospholipase C","กรดใน phagolysosome ปลุกสารพิษให้เจาะถุง",24,348],
  ["3","ActA builds an actin tail","actin ต่อเพิ่มตรงปลายเดียวของเชื้อ หางจึงดันมันไปข้างหน้า",330,298],
  ["4","Filopod","ดันเยื่อหุ้มโป่งเข้าเซลล์ข้างเคียง แล้ววนซ้ำทั้งวงจร",330,348]
 ].forEach(([n,t2,d,x,y])=>{
  b+=`<path class="m-body2" d="${mblob(x+10,y-4,13,12,n.charCodeAt(0),.07)}"/>`+mL(x+10,y+1,n,{c:"bh"})
   +mL(x+32,y-6,t2,{a:"start",c:"bh"})+mL(x+32,y+14,d,{a:"start",c:"s m"})});
 b+=`<path class="m-sep" d="M24,392 L616,392"/>`
  +mL(24,416,"เชื้อเดินทางจากเซลล์หนึ่งไปอีกเซลล์หนึ่งโดยไม่โผล่ออกนอกเซลล์เลย",{a:"start",c:"bh"})
  +mL(24,436,"แอนติบอดีและ complement จึงตามไม่ทัน · ยีนทั้งชุดถูกคุมด้วยยีนเดียวคือ prfA",{a:"start",c:"s m"});
 return svg(b,"0 0 640 456")},
notes:()=>`<h3>A facultative intracellular pathogen</h3><ul>
 <li>การเข้าเซลล์อาศัย <b>internalin A (InlA)</b> ที่จับกับ glycoprotein receptor บนผิวเซลล์ host โดยเฉพาะ <b>epithelial cadherin</b> ซึ่งเป็น adhesin ที่ต้องใช้แคลเซียม · internalin ตัวอื่นอย่าง InlB จับ receptor บนเซลล์ได้กว้างกว่า ${S.mu}</li>
 <li>ในสัตว์ทดลอง การติดเชื้อเริ่มที่ <b>enterocyte หรือ M cell ใน Peyer patch</b> ${S.mu}</li>
 <li>หลังเข้าไปแล้ว ความเป็นกรดของ phagolysosome <b>ปลุกฤทธิ์</b> pore-forming cytolysin ชื่อ <b>listeriolysin O</b> กับ phospholipase C อีกสองชนิด ทำให้เชื้อหลุดออกสู่ไซโทซอล ${S.mu}</li>
 <li>จากนั้นเชื้อเพิ่มจำนวนแล้วเคลื่อนไปที่เยื่อหุ้มเซลล์ · การเคลื่อนที่อาศัย <b>ActA</b> ซึ่งอยู่<b>ที่ปลายเดียว</b>ของตัวเชื้อและจัดการประกอบ actin · ปลายหางด้านไกลอยู่นิ่ง ส่วนการต่อเติมเกิดตรงปลายที่ติดกับตัวเชื้อ เชื้อจึง<b>ถูกดันไปข้างหน้า</b> ${S.mu}</li>
 <li>เมื่อถึงเยื่อหุ้มเซลล์จะเกิด <b>filopod</b> ที่ดันเชื้อเข้าไปในเซลล์ข้างเคียง · เซลล์นั้นกลืนเชื้อเข้าไป แล้ววงจรทั้งหมดก็เริ่มใหม่ ${S.mu}</li>
 <li>ยีนที่ควบคุมการเจาะถุง การเพิ่มจำนวนในเซลล์ และการเคลื่อนที่แบบมีทิศทาง <b>อยู่รวมกันเป็นกลุ่มและถูกคุมด้วยยีนเดียวคือ prfA</b> — positive regulatory factor ${S.mu}</li></ul>
 <h3>Why this matters clinically</h3><ul>
 <li>เพราะเชื้อ<b>ไม่เคยโผล่ออกนอกเซลล์</b> แอนติบอดีและ complement จึงเข้าไม่ถึง — การกำจัดเชื้อนี้ต้องอาศัย <b>cell-mediated immunity</b> ${S.mu}</li>
 <li>เมื่อเข้า macrophage หลังผ่านผนังลำไส้ เชื้อจะถูกพาไปที่<b>ตับและม้าม</b> ทำให้เกิดโรคที่กระจายทั่วร่างกาย ${S.mu}</li>
 <li>ชื่อสกุลตั้งตาม Lord Joseph Lister ศัลยแพทย์ชาวอังกฤษ · ชื่อสปีชีส์มาจากการที่สารสกัดจากเยื่อหุ้มกระตุ้นการสร้าง monocyte ในกระต่าย แม้จะไม่พบปรากฏการณ์นี้ในโรคของคน ${S.mu}</li></ul>`});

SEC.push({id:"listeria-dis",k:"b",t:"Listeria: who gets it, and how the lab finds it",mm:"Listeria disease",leg:[],
draw:()=>tbl(["Group","Disease","Note"],[
 ["Neonate — early onset","ได้เชื้อในครรภ์ · sepsis แรกเกิด · granulomatosis infantiseptica คือฝีกระจายทั่วอวัยวะ","แม่อาจมีเพียงอาการคล้ายไข้หวัดใหญ่"],
 ["Neonate — late onset","meningitis หรือ meningoencephalitis ราว 2–3 สัปดาห์หลังคลอด","ได้เชื้อตอนคลอดหรือหลังคลอด"],
 ["Pregnant woman","bacteremia ที่มักมีอาการไม่จำเพาะ แต่ทำให้ทารกตายในครรภ์หรือคลอดก่อนกำหนด","cell-mediated immunity ลดลงในการตั้งครรภ์"],
 ["Adult with reduced cell-mediated immunity","meningitis และ primary bacteremia","ผู้สูงอายุ ผู้ได้ยากดภูมิ ผู้ป่วยมะเร็ง"],
 ["Healthy adult","gastroenteritis จากอาหาร — ถ่ายเหลว ไข้ ปวดเมื่อย","ปริมาณเชื้อที่ได้รับต้องมาก"]]),
notes:()=>`<h3>It grows where other bacteria do not</h3><ul>
 <li><i>L. monocytogenes</i> เป็น gram-positive rod สั้น ๆ ที่<b>เติบโตได้ที่อุณหภูมิตู้เย็น</b> จึงเพิ่มจำนวนในอาหารแช่เย็นได้ ${S.mu}</li>
 <li>ในอาหารเลี้ยงเชื้อเหลวที่อุณหภูมิห้อง มันเคลื่อนที่แบบ<b>ตีลังกา (tumbling motility)</b> ซึ่งเป็นลักษณะที่ใช้ช่วยระบุเชื้อ ${S.mu}</li>
 <li>ในห้องปฏิบัติการใช้ <b>selective media และ cold enrichment</b> — คือเก็บสิ่งส่งตรวจไว้ที่อุณหภูมิต่ำแล้วเพาะซ้ำเป็นระยะ ${S.mu}</li>
 <li>บน Gram stain มันหน้าตาคล้าย <i>Corynebacterium</i> และอาจถูกมองข้ามว่าเป็น diphtheroid ที่ปนเปื้อน ${S.mu}</li></ul>
 <h3>Treatment has one trap</h3><ul>
 <li>ยาที่ใช้คือ <b>ampicillin ร่วมกับ gentamicin</b> ${S.mu}</li>
 <li>กับดักคือ <b>cephalosporin ไม่มีฤทธิ์ต่อ <i>Listeria</i> เลย</b> — ซึ่งสำคัญมาก เพราะ cephalosporin คือยาที่ให้ไปก่อนในผู้ป่วยเยื่อหุ้มสมองอักเสบ ${S.mu}</li>
 <li>ผู้ป่วยที่แพ้ penicillin ใช้ trimethoprim-sulfamethoxazole ${S.mu}</li>
 <li>การป้องกันคือหลีกเลี่ยงอาหารเสี่ยงในหญิงตั้งครรภ์และผู้ที่ภูมิคุ้มกันบกพร่อง — นมที่ไม่ผ่านการพาสเจอไรซ์ ชีสเนื้อนุ่ม และอาหารพร้อมรับประทานที่เก็บแช่เย็น ${S.mu}</li></ul>`});

SEC.push({id:"diphtheria",k:"b",t:"Diphtheria toxin stops protein synthesis",mm:"Diphtheria toxin",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"ยีน tox มากับ β-phage — เชื้อที่ไม่มี phage ตัวนี้ไม่สร้างสารพิษ",{a:"start",c:"bh"});
 /* the A-B toxin: one molecule, two jobs */
 const tx=150,ty=100;
 b+=`<path class="m-body2" d="${mblob(tx-24,ty,26,22,7,.08)}"/>`+mL(tx-24,ty+5,"A",{c:"bh"})
  +`<path class="m-ring2" d="${mblob(tx+26,ty,30,24,11,.08)}"/>`+mL(tx+26,ty+5,"B",{c:"bh"})
  +`<path class="m-pep" style="stroke-width:3" d="M${tx-2},${ty} L${tx+2},${ty}"/>`
  +mlead2(tx,ty-24,300,46,["A–B exotoxin 58,300 Da","สองสายต่อกันด้วย disulfide bond"],{a:"start"})
  +mlead2(tx-24,ty+22,300,86,["A subunit · catalytic region",""],{a:"start"})
  +mlead2(tx+30,ty+24,300,122,["B subunit · receptor binding + translocation",""],{a:"start"});
 b+=mL(24,ty+70,"receptor คือ heparin-binding epidermal growth factor",{a:"start",c:"s m"})
  +mL(24,ty+88,"ซึ่งมีมากบนเซลล์หัวใจและเซลล์ประสาท",{a:"start",c:"s m"});
 /* what A does once inside: EF-2 is ADP-ribosylated and the ribosome stalls */
 b+=`<path class="m-sep" d="M24,222 L616,222"/>`
  +mL(24,248,"สิ่งที่ A subunit ทำเมื่อเข้าไซโทซอล",{a:"start",c:"bh"});
 const ry=330,rx=150;
 /* a ribosome with a nascent chain stuck on it */
 b+=`<path class="m-body" d="${mblob(rx,ry-14,44,26,13,.07)}"/>`
  +`<path class="m-body" d="${mblob(rx,ry+18,52,22,17,.07)}"/>`+mL(rx,ry+44,"ribosome",{c:"s m"});
 let m=`M${rx-74},${ry+2}`;for(let i=0;i<30;i++)m+=`L${(rx-74+i*5).toFixed(1)},${(ry+2+(i%2?3:-3)).toFixed(1)}`;
 b+=`<path class="m-dna" style="stroke-width:2" d="${m}"/>`+mL(rx-74,ry+26,"mRNA",{a:"start",c:"s m"});
 const pq=rng(29);let pep="";
 for(let i=0;i<9;i++){const x=rx+8+i*13,y=ry-44-i*5+pq()*6;pep+=`<circle class="m-gene" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5.5"/>`}
 b+=pep+mL(rx+70,ry-86,"nascent peptide",{c:"s m"});
 /* EF-2, ADP-ribosylated and dead */
 b+=`<path class="m-ring2" style="opacity:.45" d="${mblob(rx+118,ry-6,30,24,23,.08)}"/>`
  +mL(rx+118,ry-1,"EF-2",{c:"bh"})
  +`<path class="m-body2" d="${mblob(rx+150,ry-28,16,13,29,.1)}"/>`+mL(rx+150,ry-24,"ADP",{c:"s m"})
  +mlead2(rx+118,ry+20,rx+200,ry+40,["A subunit ติด ADP-ribose ลงบน EF-2","EF-2 จึงเลื่อนสายเปปไทด์บน ribosome ไม่ได้ การสร้างโปรตีนหยุด"],{a:"start"});
 b+=`<path class="m-split" d="M${rx+56},${ry-30} L${rx+88},${ry+2}"/>`;
 b+=mL(24,ry+96,"EF-2 ผลัดเปลี่ยนช้ามากและมีราวหนึ่งโมเลกุลต่อ ribosome หนึ่งตัว",{a:"start",c:"s m"})
  +mL(24,ry+114,"จึงประเมินกันว่าสารพิษเพียงโมเลกุลเดียวฆ่าเซลล์ได้ทั้งเซลล์",{a:"start",c:"bh"});
 return svg(b,"0 0 640 "+(ry+134))},
notes:()=>`<h3>The gene comes from a virus</h3><ul>
 <li>Diphtheria toxin คือปัจจัยก่อโรคหลักของ <i>C. diphtheriae</i> · ยีน <b>tox</b> ที่เข้ารหัสสารพิษนี้<b>ถูกนำเข้ามาโดย lysogenic bacteriophage ชื่อ β-phage</b> ${S.mu}</li>
 <li>ต้องผ่านสองขั้นตอนกว่าจะได้สารพิษที่ทำงานได้: ตัด leader sequence ออกตอนหลั่งออกจากเซลล์ และตัดโมเลกุลสารพิษเป็น<b>สองสาย A และ B ที่ยังต่อกันด้วย disulfide bond</b> ${S.mu}</li>
 <li>นี่คือตัวอย่างคลาสสิกของ <b>A–B exotoxin</b> ขนาด 58,300 Da ${S.mu}</li>
 <li>มีสามบริเวณหน้าที่: <b>catalytic region</b> บนสาย A กับ <b>receptor-binding region</b> และ <b>translocation region</b> บนสาย B ${S.mu}</li></ul>
 <h3>Why the heart and the nerves</h3><ul>
 <li>Receptor ของสารพิษคือ <b>heparin-binding epidermal growth factor</b> ซึ่งมีอยู่บนผิวเซลล์ยูแคริโอตหลายชนิด<b>โดยเฉพาะเซลล์หัวใจและเซลล์ประสาท</b> ${S.mu}</li>
 <li>นี่คือเหตุผลที่ภาวะแทรกซ้อนของ diphtheria คือ myocarditis และความผิดปกติทางระบบประสาท ${S.mu}</li></ul>
 <h3>One molecule is enough</h3><ul>
 <li>สาย A หยุดการสร้างโปรตีนของ host โดย<b>ทำให้ elongation factor-2 (EF-2) หมดฤทธิ์</b> — EF-2 คือปัจจัยที่จำเป็นต่อการเลื่อนสายเปปไทด์ที่กำลังสร้างบน ribosome ${S.mu}</li>
 <li>เพราะ EF-2 <b>ผลัดเปลี่ยนช้ามาก</b>และมีอยู่ราวหนึ่งโมเลกุลต่อ ribosome หนึ่งตัว จึงประเมินกันว่าสารพิษเพียงโมเลกุลเดียวก็ฆ่าเซลล์ได้ ${S.mu}</li></ul>`});

SEC.push({id:"diphtheria-dis",k:"b",t:"Diphtheria at the bedside and the bench",mm:"Diphtheria disease",leg:[],
draw:()=>{let b="";
 /* the pharynx with a pseudomembrane that will not come off */
 const cx=180,cy=150;
 b+=`<path class="m-derm" d="${mblob(cx,cy,122,98,7,.06)}"/>`
  +`<path class="m-spin" d="${mblob(cx,cy,88,70,11,.07)}"/>`
  +mL(cx,cy+118,"pharynx · tonsil",{c:"s m"});
 /* the membrane: fibrin, leukocytes, debris and bacteria */
 b+=`<path class="m-pus" style="opacity:.92" d="${mblob(cx-6,cy-4,62,46,13,.16)}"/>`;
 const gq=rng(31);
 for(let i=0;i<70;i++){const a=gq()*6.28,r=gq()*44;
  b+=`<circle class="m-gr2" cx="${(cx-6+Math.cos(a)*r*1.3).toFixed(1)}" cy="${(cy-4+Math.sin(a)*r).toFixed(1)}" r="${(1+gq()*1.8).toFixed(1)}"/>`}
 b+=mlead2(cx+40,cy-30,330,56,["Pseudomembrane","fibrin เม็ดเลือดขาว เศษเซลล์และตัวเชื้อ"],{a:"start"})
  +mlead2(cx-30,cy+34,330,102,["ติดแน่นกับเนื้อเยื่อข้างใต้","ลอกออกแล้วเลือดออก · ถ้าหลุดลงหลอดลมจะอุดทางเดินหายใจ"],{a:"start"})
  +mlead2(cx,cy-86,330,152,["Bull neck","ต่อมน้ำเหลืองที่คอโตจนคอบวม"],{a:"start"});
 /* the bench */
 b+=`<path class="m-sep" d="M24,268 L616,268"/>`
  +mL(24,294,"At the bench",{a:"start",c:"bh"});
 [["Metachromatic granules","ย้อม methylene blue แล้วเห็นเม็ดสีต่างจากตัวเซลล์ · เรียงตัวเป็นรูปตัวอักษรจีน",24,320],
  ["Elek test","immunodiffusion ในหลอดทดลอง ใช้ยืนยันว่าสายพันธุ์นั้นสร้างสารพิษจริง",24,364],
  ["Nucleic acid test","ตรวจยีน tox ได้ทั้งจากเชื้อที่แยกได้และจากสิ่งส่งตรวจโดยตรง",24,408],
  ["แต่ระวัง","มีสายพันธุ์ที่มียีน tox แต่ไม่แสดงออก — ตรวจพบยีนไม่เท่ากับสร้างสารพิษ",24,452]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:n==="แต่ระวัง"?"bad":"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 492")},
notes:()=>`<h3>The membrane is the disease</h3><ul>
 <li>แผลเริ่มเป็น exudate แล้ว<b>พัฒนาเป็นแผ่นเยื่อหนา</b>ที่ประกอบด้วย fibrin เม็ดเลือดขาว เศษเซลล์ และตัวเชื้อ ปกคลุมต่อมทอนซิลและคอหอย ${S.mu}</li>
 <li>มัน<b>ติดแน่นกับเนื้อเยื่อข้างใต้</b> — การพยายามลอกออกทำให้เลือดออก ${S.mu}</li>
 <li>ตัวเชื้อ<b>อยู่เฉพาะที่</b> แต่สารพิษถูกดูดซึมเข้ากระแสเลือดไปทำลายหัวใจและเส้นประสาทที่อยู่ไกลออกไป ${S.mu}</li></ul>
 <h3>Treatment races the toxin</h3><ul>
 <li>สิ่งสำคัญที่สุดคือ <b>antitoxin</b> ซึ่งต้องให้เร็วที่สุด เพราะมันทำให้สารพิษที่<b>ยังไม่จับเซลล์</b>หมดฤทธิ์ได้เท่านั้น ${S.mu}</li>
 <li>ยาปฏิชีวนะ (penicillin หรือ erythromycin) ใช้เพื่อ<b>กำจัดตัวเชื้อและหยุดการสร้างสารพิษต่อ</b> ไม่ใช่เพื่อรักษาพิษที่เกิดแล้ว ${S.mu}</li>
 <li>การป้องกันคือวัคซีน <b>toxoid</b> ซึ่งเป็นสารพิษที่ทำให้หมดฤทธิ์แล้ว — ภูมิคุ้มกันมุ่งไปที่สารพิษ ไม่ใช่ที่ตัวเชื้อ ดังนั้นผู้ที่ฉีดวัคซีนแล้วยัง<b>เป็นพาหะได้</b> ${S.mu}</li></ul>
 <h3>The other corynebacteria</h3><ul>
 <li>สกุล <i>Corynebacterium</i> มีเกือบ 150 สปีชีส์และ subspecies · ผนังเซลล์มี arabinose, galactose และ meso-diaminopimelic acid ${S.mu}</li>
 <li>สมาชิกที่ไม่ใช่ <i>C. diphtheriae</i> เรียกรวม ๆ ว่า <b>diphtheroid</b> และมักเป็นเชื้อประจำถิ่นบนผิวหนัง ${S.mu}</li>
 <li><b><i>C. jeikeium</i></b> เดิมเรียกกลุ่ม JK · ก่อการติดเชื้อในผู้ป่วยในโรงพยาบาลที่มีสายสวนและภูมิคุ้มกันต่ำ และ<b>ดื้อยาหลายขนาน</b> ${S.mu}</li>
 <li><b><i>C. urealyticum</i></b> ย่อย urea ได้เร็วมาก จึงสัมพันธ์กับนิ่วและการติดเชื้อทางเดินปัสสาวะที่ปัสสาวะเป็นด่าง ${S.mu}</li>
 <li><b><i>Erysipelothrix rhusiopathiae</i></b> อยู่ในบทเดียวกัน · ชื่อมาจาก erythros แปลว่าแดง เพราะทำให้เกิดรอยโรคผิวหนังสีแดง · เป็นโรคจากอาชีพของผู้สัมผัสสัตว์และปลา · <b>ดื้อ vancomycin โดยธรรมชาติ</b> ซึ่งเป็นเรื่องผิดปกติสำหรับ gram-positive rod ${S.mu}</li></ul>`});

SEC.push({id:"neurotoxins",k:"c",t:"Tetanus and botulism: one circuit, two block points",mm:"Clostridial neurotoxins",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"ทั้งคู่เป็น zinc endopeptidase ที่ตัดโปรตีนตัวเดียวกันในกลไกปล่อยสารสื่อประสาท",{a:"start",c:"bh"})
  +mL(24,46,"ผลที่ต่างกันทั้งหมดมาจากการที่มันไปหยุดคนละจุดในวงจร",{a:"start",c:"s m"});
 /* the spinal cord end: an inhibitory interneuron onto a motor neuron */
 const sy=140;
 b+=`<path class="m-cap" style="stroke-dasharray:none;fill:color-mix(in srgb,#8d8578 8%,var(--sb-surface))" d="${mblob(150,sy+40,122,86,7,.07)}"/>`
  +mL(150,sy+140,"spinal cord",{c:"s m"});
 /* inhibitory interneuron */
 b+=`<path class="m-body" d="${mblob(96,sy-2,26,22,11,.08)}"/>`+mL(96,sy+3,"inhibitory",{c:"s m"})
  +`<path class="m-line" style="stroke-width:3" d="M${118},${sy+14} C${146},${sy+36} ${152},${sy+44} ${160},${sy+54}"/>`
  +`<path class="m-flb" d="${mblob(166,sy+60,13,10,13,.1)}"/>`;
 /* motor neuron soma and its axon leaving the cord */
 b+=`<path class="m-body2" d="${mblob(176,sy+76,30,25,17,.08)}"/>`+mL(176,sy+81,"motor",{c:"s m"})
  +`<path class="m-line" style="stroke-width:4;stroke:color-mix(in srgb,#C2185B 50%,var(--sb-surface))" d="M${204},${sy+76} C${300},${sy+76} ${340},${sy+60} ${420},${sy+60}"/>`;
 /* the neuromuscular junction */
 b+=`<path class="m-flb" d="${mblob(428,sy+60,16,13,19,.1)}"/>`
  +`<path class="m-musc" d="${mblob(530,sy+62,74,40,23,.07)}"/>`+mL(530,sy+67,"muscle",{c:"s m"});
 const vq=rng(37);
 for(let i=0;i<9;i++)b+=`<circle class="m-ohead" cx="${(448+vq()*34).toFixed(1)}" cy="${(sy+46+vq()*30).toFixed(1)}" r="2.6"/>`;
 b+=mL(452,sy+16,"acetylcholine",{a:"start",c:"s m"});
 /* the two block points */
 b+=`<path class="m-split" d="M${150},${sy+40} L${182},${sy+72}"/>`
  +mlead2(166,sy+56,24,sy+176,["Tetanospasmin blocks here","ตัดโปรตีนที่ปล่อย glycine และ GABA — สัญญาณยับยั้งหายไป"],{a:"start"})
  +`<path class="m-split" d="M${412},${sy+40} L${444},${sy+78}"/>`
  +mlead2(428,sy+60,330,sy+176,["Botulinum toxin blocks here","ตัดโปรตีนที่ปล่อย acetylcholine ที่รอยต่อประสาทกล้ามเนื้อ"],{a:"start"});
 /* the consequences, side by side */
 const by=sy+240;
 b+=`<path class="m-sep" d="M24,${by-28} L616,${by-28}"/>`;
 [["Tetanus","Spastic paralysis",["กล้ามเนื้อหดเกร็งค้าง เพราะไม่มีอะไรมายับยั้ง","risus sardonicus · trismus · opisthotonos","สารพิษเดินทางย้อนขึ้นไปตามแอกซอนสู่ไขสันหลัง"],24],
  ["Botulism","Flaccid paralysis",["กล้ามเนื้ออ่อนแรง เพราะไม่มีคำสั่งไปถึงกล้ามเนื้อ","อ่อนแรงลงจากบนลงล่าง เริ่มที่เส้นประสาทสมอง","สารพิษออกฤทธิ์ที่ปลายประสาทส่วนปลาย"],330]
 ].forEach(([n,res,lines,x])=>{
  b+=mL(x,by,n,{a:"start",c:"bh"})+mL(x,by+22,res,{a:"start",c:"bad"});
  lines.forEach((l,i)=>{b+=mL(x,by+46+i*20,l,{a:"start",c:"s m"})})});
 b+=mL(24,by+120,"การจับของสารพิษเป็นแบบย้อนกลับไม่ได้ — การฟื้นตัวต้องรอให้ปลายแอกซอนงอกใหม่",{a:"start",c:"bh"});
 return svg(b,"0 0 640 "+(by+140))},
notes:()=>`<h3>Tetanospasmin</h3><ul>
 <li><i>C. tetani</i> สร้างสารพิษสองตัว: <b>tetanolysin</b> ซึ่งเป็น hemolysin ที่ไวต่อออกซิเจน และ <b>tetanospasmin</b> ซึ่งเป็น neurotoxin ที่ไม่ทนความร้อนและยีนอยู่บนพลาสมิด ${S.mu}</li>
 <li>สารพิษจับกับโปรตีนบนผิว motor neuron แล้วถูกกลืนเข้าไปใน endosome และ<b>ถูกขนย้อนขึ้นไปตามแอกซอนจนถึงตัวเซลล์ในไขสันหลัง</b> ${S.mu}</li>
 <li>ที่นั่น endosome เป็นกรด ทำให้ปลาย N ของสายหนักเปลี่ยนรูป แทรกเข้าเยื่อ และส่งสายเบาเข้าไซโทซอล ${S.mu}</li>
 <li>สายเบาเป็น <b>zinc endopeptidase</b> ที่ตัดโปรตีนแกนกลางของกลไกขนส่งและปล่อยสารสื่อประสาท · โดยเฉพาะมันทำให้โปรตีนที่ควบคุมการปล่อย <b>glycine และ GABA ซึ่งเป็นสารสื่อประสาทยับยั้ง</b> หมดฤทธิ์ ${S.mu}</li>
 <li>ผลคือ motor neuron ถูกกระตุ้นโดยไม่มีอะไรมาห้าม จึงเกิด <b>spastic paralysis</b> ${S.mu}</li>
 <li><b>การจับเป็นแบบย้อนกลับไม่ได้</b> การฟื้นตัวจึงขึ้นกับการสร้างปลายแอกซอนขึ้นใหม่ ${S.mu}</li></ul>
 <h3>Clinical tetanus</h3><ul>
 <li>อาการคลาสสิกคือ <b>trismus</b> คือขากรรไกรแข็ง ตามด้วย <b>risus sardonicus</b> ซึ่งคือการเกร็งของกล้ามเนื้อใบหน้าจนดูเหมือนยิ้มเยาะ และ <b>opisthotonos</b> คือหลังแอ่นค้าง ${S.mu}</li>
 <li>การรักษาประกอบด้วยการตัดเนื้อตายออก ให้ <b>immunoglobulin เพื่อทำให้สารพิษที่ยังไม่จับหมดฤทธิ์</b> และฉีดวัคซีน toxoid เพราะ<b>การติดเชื้อไม่ทำให้เกิดภูมิคุ้มกัน</b> ${S.mu}</li>
 <li>Metronidazole และ penicillin ฤทธิ์เท่ากัน แต่บางคนแนะนำ metronidazole เพราะ<b>penicillin เองก็ยับยั้ง GABA</b> เหมือน tetanospasmin จึงอาจทำให้ระบบประสาทส่วนกลางตื่นตัวมากขึ้น ${S.mu}</li>
 <li>สารพิษที่จับปลายประสาทไปแล้ว<b>ยาเข้าไม่ถึง</b> จึงต้องประคับประคองอาการจนการส่งสัญญาณกลับมาเป็นปกติ ${S.mu}</li>
 <li>วัคซีน toxoid สามเข็มตามด้วย booster ทุก 10 ปี ป้องกันได้ผลดีมาก · ในสหรัฐมีเพียง 33 รายในปี 2017 และส่วนใหญ่เป็นผู้สูงอายุที่ภูมิคุ้มกันเริ่มตก ${S.mu}</li></ul>
 <h3>Botulinum toxin</h3><ul>
 <li>มี <b>botulinum toxin เจ็ดชนิด</b>ที่แยกกันได้ทางภูมิคุ้มกัน · นอกจาก <i>C. botulinum</i> ยังมี <i>C. butyricum</i> ที่สร้าง type E ด้วย ${S.mu}</li>
 <li>มันจับที่ปลายประสาทของ <b>cholinergic synapse</b> แล้วหยุดการปล่อย acetylcholine ทำให้เกิด <b>flaccid paralysis</b> ${S.mu}</li>
 <li>ต่างจาก tetanospasmin ตรงที่มันออกฤทธิ์ที่<b>ปลายประสาทส่วนปลาย ไม่ได้เดินทางเข้าไขสันหลัง</b> ${S.mu}</li></ul>`});

SEC.push({id:"botulism",k:"c",t:"Four ways botulism happens",mm:"Botulism",leg:[],
draw:()=>tbl(["Form","How","Picture"],[
 ["Foodborne","กินสารพิษที่ถูกสร้างไว้ในอาหารแล้ว — อาหารกระป๋องทำเองและอาหารหมักเป็นแหล่งคลาสสิก","อ่อนแรงลงจากบนลงล่าง เริ่มที่เส้นประสาทสมอง แล้วลามลงจนหายใจล้มเหลว"],
 ["Infant","กินสปอร์เข้าไป แล้วสปอร์งอกและสร้างสารพิษในลำไส้ที่ยังไม่มีเชื้อประจำถิ่นเต็มที่ · น้ำผึ้งเป็นแหล่งที่รู้จักกันดี","ดูดนมไม่แรง ร้องเสียงเบา เลี้ยงไม่โต แล้วค่อย ๆ อ่อนแรงลง"],
 ["Wound","สปอร์เข้าแผลแล้วสร้างสารพิษในที่","เหมือน foodborne แต่ไม่มีอาการทางเดินอาหารนำมาก่อน"],
 ["Inhalation","สูดสารพิษเข้าไป — เส้นทางที่เป็นประเด็นด้านอาวุธชีวภาพ","อาการมาเร็ว"]]),
notes:()=>`<h3>An intoxication, usually</h3><ul>
 <li>Foodborne botulism คือการ<b>กินสารพิษที่สร้างไว้แล้ว</b> ไม่ใช่การติดเชื้อ · ส่วน infant botulism และ wound botulism คือการที่เชื้อ<b>งอกและสร้างสารพิษในตัวผู้ป่วย</b> ${S.mu}</li>
 <li>สารพิษนี้<b>ไม่ทนความร้อน</b> — ต้มอาหารให้เดือดทำลายมันได้ ซึ่งต่างจาก enterotoxin ของ <i>S. aureus</i> และ <i>B. cereus</i> ${S.mu}</li>
 <li>ตัวเชื้อเป็น anaerobic spore-forming rod ขนาดใหญ่ 0.6–1.4 × 3.0–20.2 µm ที่เลือกกิน แบ่งเป็นสี่กลุ่มตามลักษณะทางฟีโนไทป์และพันธุกรรม ${S.mu}</li></ul>
 <h3>The clinical pattern is the clue</h3><ul>
 <li>อาการเป็น <b>descending flaccid paralysis</b> ที่เริ่มด้วยอัมพาตของเส้นประสาทสมอง แล้วลามลงจนเกิดการหายใจล้มเหลว ${S.mu}</li>
 <li>ตัวอย่างการระบาดที่ CDC รายงาน: ผู้ป่วยสามรายในจอร์เจียปี 2006 มาด้วย cranial nerve palsy และอัมพาตอ่อนปวกเปียกที่ลามลงจนหายใจไม่ได้ หลังกินอาหารร่วมกันเมื่อวันก่อน · สาเหตุคือ<b>น้ำแครอทบรรจุขวดที่ปนเปื้อน</b> ${S.mu}</li>
 <li>การรักษาคือ <b>antitoxin</b> ซึ่งต้องให้เร็ว บวกกับการประคับประคองการหายใจ ${S.mu}</li></ul>`});

SEC.push({id:"cdiff",k:"c",t:"Clostridioides difficile",mm:"C. difficile",leg:[],
draw:()=>{let b="";
 /* colonic mucosa with the volcano lesions of pseudomembranous colitis */
 const y0=56,x0=24,x1=616;
 const wv=mwob(7,3.2);
 const band=(a,bq,cls)=>{let d=`M${x0},${a(x0)}`;for(let x=x0;x<=x1;x+=6)d+=`L${x.toFixed(1)},${a(x).toFixed(1)}`;
  for(let x=x1;x>=x0;x-=6)d+=`L${x.toFixed(1)},${bq(x).toFixed(1)}`;return `<path class="${cls}" d="${d}Z"/>`};
 b+=band(x=>y0+wv(x),x=>y0+86+wv(x),"m-spin")+band(x=>y0+86+wv(x),x=>y0+128+wv(x),"m-derm");
 /* crypts */
 for(let x=x0+22;x<x1-10;x+=34){
  b+=`<path class="m-foll" d="M${x-7},${(y0+wv(x)).toFixed(1)} L${x-7},${(y0+66+wv(x)).toFixed(1)} q7,10 14,0 L${x+7},${(y0+wv(x)).toFixed(1)} Z"/>`}
 b+=mL(x1-6,y0+112,"colonic mucosa",{a:"end",c:"s m"});
 /* three volcano plaques erupting from crypts */
 [120,300,470].forEach((x,i)=>{
  b+=`<path class="m-pus" d="${mblob(x,y0-6,36+i*5,18,i*9+5,.2)}"/>`
   +`<path class="m-pus" style="opacity:.6" d="${mblob(x,y0-16,22+i*4,11,i*9+11,.25)}"/>`});
 b+=mlead2(300,y0-18,330,y0-50,["Pseudomembranous plaques","เยื่อขาวเหลืองที่พ่นออกมาจากปากต่อม"],{a:"start"});
 /* the two toxins */
 b+=`<path class="m-sep" d="M24,${y0+150} L616,${y0+150}"/>`;
 [["Toxin A · enterotoxin","ดึงเม็ดเลือดขาวมา (chemotactic) · ปล่อย cytokine · ทำให้มีน้ำคั่งและเยื่อบุถูกทำลาย",24,y0+176],
  ["Toxin B · cytotoxin","ทำลายโครงร่างเซลล์ (cytoskeleton) ของเซลล์เยื่อบุโดยตรง",24,y0+222]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 b+=`<path class="m-sep" d="M24,${y0+262} L616,${y0+262}"/>`
  +mL(24,y0+288,"การเพาะเชื้อขึ้นแปลว่าเป็นพาหะ ไม่ได้แปลว่าเป็นโรค",{a:"start",c:"bad"})
  +mL(24,y0+308,"วินิจฉัยด้วยการตรวจพบสารพิษหรือยีน toxin A และ B ในอุจจาระ ร่วมกับอาการที่เข้ากัน",{a:"start",c:"s m"});
 return svg(b,"0 0 640 "+(y0+330))},
notes:()=>`<h3>Two toxins</h3><ul>
 <li><i>C. difficile</i> สร้างสารพิษสองตัว: <b>enterotoxin (toxin A)</b> และ <b>cytotoxin (toxin B)</b> ${S.mu}</li>
 <li>Toxin A เป็น <b>chemotactic</b> คือดึงนิวโทรฟิลเข้ามา ทำให้เกิดการหลั่ง cytokine น้ำคั่งในลำไส้ และเยื่อบุถูกทำลาย ${S.mu}</li>
 <li>Toxin B ทำลาย<b>โครงร่างเซลล์</b>ของเซลล์เยื่อบุโดยตรง ${S.mu}</li>
 <li>มีสายพันธุ์ที่ <b>enterotoxin A เป็นลบ</b> แต่ยังก่อโรคได้ — แสดงว่าบทบาทของสารพิษสองตัวนี้ซับซ้อนกว่าที่เคยคิด ${S.mu}</li>
 <li>เคยเชื่อว่าสายพันธุ์ที่รุนแรงขึ้นเป็นเพราะสร้างสารพิษมากขึ้นบวกกับการมี <b>binary toxin</b> · แต่ปัจจุบันเข้าใจว่าความรุนแรง<b>อธิบายด้วยจีโนไทป์ใดจีโนไทป์หนึ่งไม่ได้</b> ต้องมองเป็นหลายฟีโนไทป์รวมกัน ${S.mu}</li></ul>
 <h3>Diagnosis is about disease, not carriage</h3><ul>
 <li>การแยกเชื้อได้จากการเพาะอุจจาระ<b>ยืนยันแค่การเป็นพาหะ ไม่ได้ยืนยันโรค</b> ${S.mu}</li>
 <li>การวินิจฉัยโรคต้องอาศัยการตรวจพบ enterotoxin หรือ cytotoxin ในอุจจาระของผู้ป่วยที่มีอาการเข้ากัน หรือการตรวจ<b>ยีน toxin A และ B โดยตรงจากสิ่งส่งตรวจ</b>ด้วยวิธี nucleic acid amplification ${S.mu}</li>
 <li>ชุดตรวจระดับโมเลกุลเชิงพาณิชย์ที่ไวและจำเพาะสูงให้ผลภายในไม่กี่ชั่วโมงหลังเก็บตัวอย่าง ${S.mu}</li></ul>
 <h3>Why faecal transplant works</h3><ul>
 <li>การปลูกถ่ายอุจจาระได้ผลดี ซึ่งแสดงให้เห็นว่า <b><i>C. difficile</i> ตั้งรกรากไม่ได้ถ้ามีประชากรแบคทีเรียในลำไส้ที่สมบูรณ์อยู่</b> ${S.mu}</li>
 <li>การป้องกันทำได้ยาก เพราะเชื้ออยู่ทั่วไปในโรงพยาบาล โดยเฉพาะบริเวณใกล้ห้องน้ำ และสปอร์ของมันทนน้ำยาฆ่าเชื้อทั่วไป ${S.mu}</li></ul>`});

SEC.push({id:"perfringens",k:"c",t:"Clostridium perfringens and gas gangrene",mm:"C. perfringens",leg:[],
draw:()=>{let b="";
 /* the double zone of haemolysis is the bench signature */
 const cx=150,cy=140,R=104;
 b+=`<circle class="m-agar" cx="${cx}" cy="${cy}" r="${R}"/>`;
 const q=rng(11);
 for(let i=0;i<4;i++){const a=q()*6.28,r=q()*52,x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;
  b+=`<circle class="m-alpha" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="22"/>`
   +`<circle class="m-beta" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="11"/>`
   +`<circle class="m-col" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.4"/>`}
 b+=mL(cx,cy-R-14,"Blood agar",{c:"bh"})
  +mlead2(cx+54,cy-40,290,96,["Double zone of hemolysis","วงในใสจาก theta toxin · วงนอกจาง ๆ จาก alpha toxin"],{a:"start"})
  +mL(290,150,"นี่คือลายเซ็นของ C. perfringens บนจานเพาะเชื้อ",{a:"start",c:"s m"});
 /* alpha toxin: a lecithinase that takes membranes apart */
 b+=`<path class="m-sep" d="M24,268 L616,268"/>`
  +mL(24,294,"Alpha toxin",{a:"start",c:"bh"})
  +mL(24,314,"lecithinase หรือ phospholipase C ที่ย่อย lecithin ในเยื่อหุ้มเซลล์",{a:"start",c:"s m"})
  +mL(24,334,"จึงสลายเม็ดเลือดแดง เกล็ดเลือด เม็ดเลือดขาวและเซลล์เยื่อบุหลอดเลือด",{a:"start",c:"s m"});
 /* the muscle, with gas */
 const my=420;
 b+=`<path class="m-musc" d="${mblob(200,my,170,46,13,.1)}"/>`;
 const gq=rng(17);
 for(let i=0;i<22;i++){const x=48+gq()*300,y=my-32+gq()*62;
  b+=`<circle class="m-spec" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(3+gq()*7).toFixed(1)}" style="opacity:.85"/>`
   +`<circle class="m-face" style="fill:none" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(3+gq()*7).toFixed(1)}"/>`}
 b+=mlead2(250,my-20,400,my-30,["Gas in the tissue","ฟองก๊าซจากการหมักของเชื้อ — ที่มาของชื่อ gas gangrene"],{a:"start"})
  +mlead2(160,my+24,400,my+24,["Myonecrosis","กล้ามเนื้อตายและลามเร็วมาก ต้องผ่าตัดเอาเนื้อตายออกทันที"],{a:"start"});
 return svg(b,"0 0 640 "+(my+80))},
notes:()=>`<h3>Alpha toxin is a lecithinase</h3><ul>
 <li>Alpha toxin เป็น <b>lecithinase หรือ phospholipase C</b> ที่ย่อยเม็ดเลือดแดง เกล็ดเลือด เม็ดเลือดขาว และเซลล์เยื่อบุหลอดเลือด ${S.mu}</li>
 <li>บนจานเลือดโคโลนีของ <i>C. perfringens</i> ให้<b>วงแตกเม็ดเลือดสองชั้น</b> — วงในใสจาก theta toxin และ<b>วงนอกที่แตกเพียงบางส่วนจาก alpha toxin</b> ${S.mu}</li></ul>
 <h3>Gas gangrene</h3><ul>
 <li><b>Clostridial myonecrosis</b> คือการตายของกล้ามเนื้อและเนื้อเยื่ออ่อนที่ลุกลามเร็วมาก ${S.mu}</li>
 <li>เชื้อหมักคาร์โบไฮเดรตในเนื้อเยื่อจนเกิด<b>ก๊าซสะสมในกล้ามเนื้อ</b> ซึ่งเป็นที่มาของชื่อ gas gangrene ${S.mu}</li>
 <li>Gram stain ของเนื้อเยื่อให้เบาะแสที่ดี: เห็น<b>gram-positive rod ตัวใหญ่ แต่แทบไม่มีเม็ดเลือดขาว</b> เพราะ alpha toxin ฆ่ามันไปหมด ${S.mu}</li>
 <li>นอกจาก <i>C. perfringens</i> ยังมี <i>C. septicum</i> และตัวอื่นที่ทำให้เกิดการตายของเนื้อเยื่อได้ ${S.mu}</li>
 <li>การรักษาคือ<b>ผ่าตัดเอาเนื้อตายออกอย่างรวดเร็ว</b>ร่วมกับยาปฏิชีวนะ — ยาอย่างเดียวไม่พอ ${S.mu}</li></ul>
 <h3>Food poisoning is the mild cousin</h3><ul>
 <li><i>C. perfringens</i> ยังเป็นสาเหตุของอาหารเป็นพิษที่พบบ่อย — มักจากเนื้อสัตว์ที่ปรุงไว้แล้วอุ่นไม่ทั่วถึง ${S.mu}</li>
 <li>อาการคือปวดบีบในท้องและถ่ายเหลว โดยทั่วไป<b>ไม่มีไข้และไม่อาเจียน</b> และหายเองใน 24 ชั่วโมง ${S.mu}</li></ul>`});

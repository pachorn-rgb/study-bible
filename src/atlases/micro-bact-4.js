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
 <li>พวกมันเป็น facultative anaerobe จึงโตได้ทั้งมีและไม่มีออกซิเจน และโตได้บน medium ทั่วไปโดยไม่ต้องการอะไรพิเศษ ${S.mu}</li>
 <li>บางตัวเป็นเชื้อประจำถิ่นในลำไส้ที่ก่อโรคฉวยโอกาส บางตัว เช่น <i>Salmonella</i>, <i>Shigella</i> และ <i>Yersinia</i> เป็นเชื้อก่อโรคแท้ ${S.mu}</li></ul>
 <h3>The three antigens</h3><ul>
 <li><b>O antigen</b> คือสายน้ำตาลนอกสุดของ lipopolysaccharide · <b>ทนความร้อน</b> และเป็นพื้นฐานของการแบ่ง serogroup ${S.mu}</li>
 <li><b>H antigen</b> คือโปรตีน flagellin ของ flagella · <b>ไม่ทนความร้อน</b> ${S.mu}</li>
 <li><b>K antigen</b> คือ capsule · ใน <i>Salmonella</i> Typhi เรียกว่า <b>Vi antigen</b> ${S.mu}</li>
 <li>การแสดงออกของทั้งสามถูกควบคุมด้วยยีนของเชื้อเอง และ<b>สลับเปิดปิดได้ (phase variation)</b> ซึ่งช่วยให้รอดจากการถูกฆ่าด้วย antibody ${S.mu}</li></ul>
 <h3>Lipid A is the endotoxin</h3><ul>
 <li>ฤทธิ์ของ endotoxin อยู่ที่ส่วน <b>lipid A</b> ของ lipopolysaccharide ซึ่ง<b>ถูกปล่อยออกมาเมื่อเซลล์แตก</b> ${S.mu}</li>
 <li>symptom ทั่วร่างกายของ infection gram-negative ส่วนใหญ่เริ่มจากตรงนี้: การกระตุ้น complement, การหลั่ง cytokine, <b>leukocytosis, thrombocytopenia, disseminated intravascular coagulation</b>, fever, การไหลเวียนส่วนปลายลดลง, shock และเสียชีวิต ${S.mu}</li></ul>
 <h3>What every member shares</h3><ul>
 <li>รูปร่าง: <b>gram-negative rod ขนาดกลาง 0.3–1.0 × 1.0–6.0 μm ไม่สร้าง spore</b> และทั้งหมดมี <b>enterobacterial common antigen</b> ร่วมกัน ${S.mu}</li>
 <li>การย้อม Gram มีลักษณะเฉพาะ — <b>bipolar staining คือติดสีเข้มที่ปลายทั้งสองข้างของตัวเชื้อ</b> ${S.mu}</li>
 <li>ทั้งหมด<b>โตเร็วทั้งในที่มีและไม่มีอากาศ คือเป็น facultative anaerobe</b> บนทั้ง nonselective medium อย่าง blood agar และ selective medium อย่าง MacConkey agar ${S.mu}</li>
 <li>คุณสมบัติร่วม: <b>ความต้องการอาหารง่าย, หมัก glucose, รีดิวซ์ nitrate, catalase positive และ oxidase negative</b> ${S.mu}</li>
 <li>ข้อที่ใช้ได้จริงที่สุด: <b>การไม่มี cytochrome oxidase วัดได้เร็วด้วยการทดสอบง่าย ๆ และใช้แยกวงศ์นี้จาก gram-negative rod ตัวอื่นทั้งที่หมักน้ำตาลอย่าง Vibrio และที่ไม่หมักอย่าง Pseudomonas</b> ${S.mu}</li>
 <li>เชื้อส่วนใหญ่<b>เคลื่อนที่ได้ด้วย flagella แบบ peritrichous</b> ยกเว้นสกุลที่พบบ่อยบางสกุล — <b>Klebsiella, Shigella และ Yersinia</b> ${S.mu}</li>
 <li>หลายตัวมี <b>fimbriae</b> ซึ่งแบ่งเป็นสองชั้น — <b>common fimbriae ที่คุมโดยโครโมโซม ซึ่งสำคัญต่อการเกาะ receptor จำเพาะของ host</b> และ <b>sex pili ที่คุมโดย plasmid ซึ่งช่วยการถ่ายทอดสารพันธุกรรม</b> ${S.mu}</li></ul>
 <h3>Reading the plate</h3><ul>
 <li>การแยกสมาชิกที่พบบ่อยอาศัย<b>หน้าตาบนจาน culture</b> ${S.mu}</li>
 <li><b>การหมัก lactose</b> ซึ่งเห็นเป็นการเปลี่ยนสีบน MacConkey agar แยก<b>เชื้อก่อโรคในลำไส้ที่ไม่หมักหรือหมักช้า — Salmonella, Shigella และ Yersinia ซึ่งให้โคโลนีไม่มีสี</b> ออกจาก<b>Escherichia, Klebsiella, Enterobacter, Citrobacter และ Serratia ซึ่งให้โคโลนีสีชมพูม่วง</b> ${S.mu}</li>
 <li><b>ความทนต่อ bile salt</b> ใน selective medium บางอย่างก็ใช้แยก<b>เชื้อก่อโรคในลำไส้อย่าง Shigella และ Salmonella ออกจากเชื้อประจำถิ่นที่ถูก bile salt ยับยั้ง</b> ${S.mu}</li>
 <li>เมื่อรวมสองอย่างนี้ จาน<b>MacConkey จึงเป็นการคัดกรองที่เร็วสำหรับเชื้อก่อโรคที่ปกติแยกยากในอุจจาระที่มีเชื้อหลายชนิดปนกัน</b> ${S.mu}</li>
 <li><b>Klebsiella ให้โคโลนีเป็นเมือกแบบเฉพาะตัว</b> คือเปียก นูนเป็นกอง และหนืด จาก capsule ที่เด่น ขณะที่ strain อื่นมีเพียง <b>slime layer ที่หลวมและแพร่ออกได้</b> ${S.mu}</li></ul>
 <h3>What the three antigens are for</h3><ul>
 <li>แอนติเจน cell wall หลักคือ <b>lipopolysaccharide ที่ทนความร้อน</b> ประกอบด้วยสามส่วน — <b>somatic O polysaccharide ชั้นนอกสุด, core polysaccharide ที่ทุกตัวในวงศ์มีร่วมกัน และ lipid A</b> ${S.mu}</li>
 <li>แต่ละส่วนทำงานต่างกัน: <b>core polysaccharide ใช้จัดว่าเชื้อเป็นสมาชิกของวงศ์นี้</b> · <b>O polysaccharide ใช้จำแนก strain ภายในสปีชีส์ทางระบาดวิทยา</b> · <b>lipid A คือฤทธิ์ endotoxin</b> ${S.mu}</li>
 <li>การจำแนกทาง serology อาศัยสามกลุ่มแอนติเจน — <b>somatic O polysaccharide, K antigen ใน capsule และ H protein ใน flagella</b> ${S.mu}</li>
 <li><b>O antigen จำเพาะต่อ strain ในแต่ละสกุลและสปีชีส์</b> แต่<b>การไขว้กันระหว่างสกุลที่ใกล้ชิดกันพบบ่อย</b> เช่น Salmonella กับ Citrobacter และ Escherichia กับ Shigella ${S.mu}</li>
 <li><b>K antigen ไม่ค่อยใช้จำแนก strain</b> แต่สำคัญเพราะ<b>มันอาจขัดการตรวจ O antigen</b> ${S.mu}</li>
 <li><b>H antigen เป็นโปรตีน flagellin ที่ไม่ทนความร้อน</b> ${S.mu}</li>
 <li>ความสำคัญทางคลินิกที่เกินจากงานระบาดวิทยา: <b>เชื้อก่อโรคบางสปีชีส์สัมพันธ์กับ O และ H serotype จำเพาะ</b> เช่น <b><i>E. coli</i> O157:H7 กับ diarrhea และ hemorrhagic colitis</b> ${S.mu}</li></ul>`});

SEC.push({id:"entero-vir",k:"a",t:"The type III secretion system is a syringe",mm:"Type III secretion",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"โปรตีนราว 20 ตัวประกอบกันเป็นเข็มฉีดยาระดับโมเลกุล",{a:"start",c:"bh"})
 +mL(24,46,"Yersinia · Salmonella · Shigella · enteropathogenic Escherichia · Pseudomonas · Chlamydia ใช้ระบบเดียวกันนี้",{a:"start",c:"s m"});
 const wv=mwob(9,1.6),X0=40,X1=430;
 const HM=132,OM=260,IM=322; /* host membrane, bacterial outer, inner */
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
 +mL(452,286,"toxin จึงพ้นจาก antibody",{a:"start",c:"s m"})
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
 <li>ข้อได้เปรียบคือ toxin<b>ไม่ต้องผ่านช่องว่างนอกเซลล์</b> จึงไม่ถูก antibody ดักระหว่างทาง ${S.mu}</li></ul>
 <h3>Capsule and serum resistance</h3><ul>
 <li>Enterobacteriaceae ที่มี capsule รอดจากการถูกกลืนกิน เพราะ<b>แอนติเจนของ capsule ชอบน้ำ จึงผลักผิวของเซลล์กลืนกินซึ่งไม่ชอบน้ำ</b> ${S.mu}</li>
 <li>แอนติเจนเหล่านี้ยังขัดขวางการเกาะของ antibody และ<b>กระตุ้น immunity กับ complement ได้แย่</b> ${S.mu}</li>
 <li>แต่ถ้าผู้ป่วยสร้าง <b>anticapsular antibody</b> ขึ้นมาได้ บทบาทป้องกันของ capsule ก็ลดลง ${S.mu}</li></ul>
 <h3>Six more things every member can do</h3><ul>
 <li><b>Endotoxin</b> — ฤทธิ์อยู่ที่ <b>lipid A ซึ่งถูกปล่อยออกเมื่อเซลล์แตก</b> · symptom ทั้งระบบของ infection gram-negative เริ่มจากมัน: <b>การกระตุ้น complement, การหลั่ง cytokine, leukocytosis, thrombocytopenia, disseminated intravascular coagulation, fever, การไหลเวียนส่วนปลายลดลง, shock และการตาย</b> ${S.mu}</li>
 <li><b>Capsule</b> — <b>แอนติเจนที่ชอบน้ำผลัก phagocyte ซึ่งผิวชอบไขมัน</b> · มันยัง<b>ขัดการจับของ antibody และเป็น immunogen และตัวกระตุ้น complement ที่อ่อน</b> · แต่<b>บทบาทนี้ลดลงถ้าผู้ป่วยสร้าง anticapsular antibody จำเพาะขึ้นมาได้</b> ${S.mu}</li>
 <li><b>Antigenic phase variation</b> — การแสดงออกของ <b>O, K และ H antigen ถูกคุมโดยพันธุกรรมของเชื้อเอง และเปิดปิดสลับกันได้</b> ซึ่ง<b>ป้องกันเชื้อจากการถูกฆ่าโดย antibody</b> ${S.mu}</li>
 <li><b>Type III secretion system</b> — ให้คิดเป็น<b>เข็มฉีดยาระดับโมเลกุลที่สร้างจากโปรตีนราว 20 ตัว</b> · ปัจจัยก่อโรคและผลที่ได้ต่างกันไปในแต่ละเชื้อ แต่<b>กลไกการส่งเข้าเซลล์เหมือนกัน</b> · <b>ถ้าไม่มีระบบนี้ เชื้อก่อโรคได้น้อยลง</b> ${S.mu}</li>
 <li>เชื้อที่ใช้ระบบนี้ร่วมกันมีหลายกลุ่ม — <b>Yersinia, Salmonella, Shigella, enteropathogenic <i>Escherichia</i>, Pseudomonas และ Chlamydia</b> ${S.mu}</li>
 <li><b>Sequestration of growth factors</b> — เหล็กถูก host เก็บไว้ใน <b>heme protein อย่าง hemoglobin และ myoglobin</b> หรือใน <b>iron-chelating protein อย่าง transferrin และ lactoferrin</b> · เชื้อแก้ด้วย<b>siderophore ของตัวเองอย่าง enterobactin และ aerobactin</b> และยัง<b>ดึงเหล็กออกจากเซลล์ host ด้วย hemolysin</b> ${S.mu}</li>
 <li><b>Resistance to serum killing</b> — <b>capsule ป้องกันเชื้อจากการถูกฆ่าใน serum</b> และจากปัจจัยอื่นที่กัน complement ไม่ให้จับตัวเชื้อ ซึ่งเป็นเหตุที่เชื้อก่อโรคทั้งระบบได้ ขณะที่แบคทีเรียหลายตัวถูกกวาดออกจากเลือดได้เร็ว ${S.mu}</li>
 <li><b>Antimicrobial resistance</b> — <b>เข้ารหัสบน plasmid ที่ถ่ายทอดได้ และแลกเปลี่ยนกันข้ามสปีชีส์ ข้ามสกุล และแม้ข้ามวงศ์</b> · ไม่กี่ปีที่ผ่านมาการรับยีนเหล่านี้<b>ทำให้ Enterobacteriaceae บางตัว โดยเฉพาะ Klebsiella ดื้อยาทุกกลุ่ม</b> ${S.mu}</li></ul>`});

SEC.push({id:"ecoli-git",k:"b",t:"The five diarrhoeagenic Escherichia coli",mm:"E. coli pathotypes",leg:[],
draw:()=>tbl(["Pathotype","Adhesin","Exotoxin","Picture"],[
 ["ETEC — enterotoxigenic","colonization factor antigens CFA/I, CFA/II, CFA/III","heat-labile toxin (LT-1) · heat-stable toxin (STa)","ถ่ายเป็นน้ำ · traveller's diarrhoea"],
 ["EPEC — enteropathogenic","bundle-forming pili · intimin","—","ถ่ายเหลวในทารก · ทำลายปลาย microvilli จนเป็นรอย attaching and effacing"],
 ["EAEC — enteroaggregative","aggregative adherence fimbriae AAF/I, AAF/II, AAF/III","enteroaggregative heat-stable toxin · plasmid-encoded toxin","ถ่ายเหลวเรื้อรัง"],
 ["STEC — Shiga toxin-producing","bundle-forming pili · intimin","Shiga toxins Stx1, Stx2","hemorrhagic colitis · hemolytic uremic syndrome"],
 ["EIEC — enteroinvasive","invasive plasmid antigen","hemolysin HlyA","บุกเยื่อบุลำไส้ · หน้าตาเหมือน shigellosis"],
 ["Uropathogenic","P pili · Dr fimbriae","—","urinary tract infection"]]),
notes:()=>`<h3>One species, six jobs</h3><ul>
 <li><i>E. coli</i> มีอยู่จำนวนมากใน gastrointestinal tract ตามปกติ · มันก่อโรคฉวยโอกาสได้เมื่อหลุดออกนอกลำไส้ แต่<b>strain ที่ก่อโรคลำไส้โดยเฉพาะมีปัจจัยก่อโรคเฉพาะตัว</b> ${S.mu}</li>
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
 +mL(260,508,"มี symptom ทางระบบประสาทร่วมด้วย",{a:"start",c:"s m"});
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
 <li>ผู้ป่วย HUS มากถึง <b>30%</b> มี symptom ทางระบบประสาทส่วนกลางร่วมด้วย ${S.mu}</li>
 <li>strain ที่มีทั้ง Shiga toxin และความสามารถทำรอย attaching and effacing <b>ก่อโรคได้รุนแรงกว่า</b>strain ที่มี toxin อย่างเดียว ${S.mu}</li></ul>
 <h3>Diagnosis</h3><ul>
 <li>ตรวจได้ทั้งด้วย <b>immunoassay</b> อย่าง ELISA และ latex agglutination เพื่อหาตัว toxin หรือด้วยการ<b>ตรวจยีน Stx</b> ${S.mu}</li></ul>
 <h3>Dose, source and the shape of the illness</h3><ul>
 <li><b>กินเชื้อน้อยกว่า 100 ตัวก็ก่อโรคได้</b> และ<b>แพร่จากคนสู่คนได้</b> ${S.mu}</li>
 <li>แหล่งที่มา: <b>เนื้อบดที่สุกไม่ทั่ว, น้ำ, นมหรือน้ำผลไม้ที่ไม่พาสเจอร์ไรซ์</b> เช่น cider จากแอปเปิลที่ปนเปื้อนมูลวัว · และ<b>ผักกับผลไม้ที่ไม่ปรุงสุก เช่น spinach</b> ${S.mu}</li>
 <li>โรคกว้างจาก<b>diarrhea เบา ๆ ถึง hemorrhagic colitis ที่ปวดท้องรุนแรงและถ่ายเป็นเลือด</b> · <b>รูปรุนแรงสัมพันธ์กับ O157:H7 มากกว่า</b> ${S.mu}</li>
 <li>ลำดับเวลา: <b>ระยะฟักตัว 3 ถึง 4 วัน แล้วเริ่มถ่ายเหลวและปวดท้อง</b> · <b>อาเจียนพบราวครึ่งหนึ่ง และโดยทั่วไปไม่มี fever สูง</b> ${S.mu}</li>
 <li><b>ภายใน 2 วันหลังเริ่มมี symptom ผู้ป่วย 30% ถึง 65% ดำเนินเป็นถ่ายเป็นเลือดและปวดท้องรุนแรง</b> ${S.mu}</li>
 <li>ผู้ป่วยที่ไม่ได้รักษาส่วนใหญ่<b>symptom หายสนิทใน 4 ถึง 10 วัน</b> ${S.mu}</li></ul>
 <h3>Haemolytic uraemic syndrome in numbers</h3><ul>
 <li>เกิดใน <b>5% ถึง 10% ของเด็กที่ติดเชื้อที่อายุน้อยกว่า 10 ปี</b> ${S.mu}</li>
 <li>นิยามคือ <b>acute renal failure, thrombocytopenia และ microangiopathic hemolytic anemia</b> ${S.mu}</li>
 <li><b>ผู้ป่วย 3% ถึง 5% ที่เกิด hemolytic uremic syndrome ตาย</b> และ<b>มากถึง 30% มีผลตามมารุนแรง</b> เช่นการทำงานของไตบกพร่อง, hypertension และ symptom ทางระบบประสาทส่วนกลาง ${S.mu}</li>
 <li><b>Hemolytic uremic syndrome สัมพันธ์กับ Stx2 เป็นพิเศษ ซึ่งพิสูจน์แล้วว่าทำลาย glomerular endothelial cell</b> ${S.mu}</li>
 <li>ลำดับเหตุการณ์ที่ไต: <b>endothelial cell เสียหาย แล้ว platelet ถูกกระตุ้นและมี thrombin มาเกาะ ทำให้ glomerular filtration ลดลงและเกิด acute renal failure</b> ${S.mu}</li>
 <li>และ Shiga toxin ยัง<b>กระตุ้นการแสดงออกของ inflammatory cytokine ซึ่งเพิ่มการแสดงออกของ Gb3 ที่เป็น receptor ของ B subunit เอง</b> ${S.mu}</li></ul>
 <h3>The two toxins, and what makes a strain worse</h3><ul>
 <li><b>Stx1 เหมือน Shiga toxin ของ <i>S. dysenteriae</i> แทบทุกประการ</b> ซึ่งเป็นที่มาของชื่อ · <b>Stx2 เหมือนกันราว 60%</b> ${S.mu}</li>
 <li><b>ทั้งสอง toxin ได้มาจาก lysogenic bacteriophage</b> ${S.mu}</li>
 <li>โครงสร้าง: <b>A subunit หนึ่งตัวกับ B subunit ห้าตัว</b> โดย <b>B จับ glycolipid จำเพาะคือ globotriaosylceramide หรือ Gb3</b> ${S.mu}</li>
 <li>ตำแหน่งที่ Gb3 หนาแน่นอธิบายอวัยวะที่เสียหาย — <b>intestinal villi และ renal endothelial cell</b> ${S.mu}</li>
 <li>หลัง A subunit เข้าเซลล์ มัน<b>ถูกตัดเป็นสองโมเลกุล และ A1 fragment จับ 28S rRNA ทำให้การสร้างโปรตีนหยุด</b> ${S.mu}</li>
 <li>ข้อที่ใช้เทียบความรุนแรง: <b>strain ที่มีทั้ง Shiga toxin และฤทธิ์ attaching and effacing ก่อโรคได้แรงกว่า strain ที่สร้าง Shiga toxin อย่างเดียว</b> ${S.mu}</li></ul>
 <h3>Enteroinvasive Escherichia coli</h3><ul>
 <li><b>พบน้อยทั้งในประเทศพัฒนาแล้วและกำลังพัฒนา</b> · strain ก่อโรคจำกัดอยู่ใน <b>O serotype เพียงไม่กี่ตัวคือ O124, O143 และ O164</b> ${S.mu}</li>
 <li><b>ใกล้ชิดกับ Shigella ทั้งทาง phenotype และการก่อโรค</b> ${S.mu}</li>
 <li>เชื้อ<b>รุกและทำลาย colonic epithelium</b> ให้โรคที่<b>เริ่มด้วยถ่ายเหลวเป็นน้ำ</b> · <b>ผู้ป่วยส่วนน้อยดำเนินเป็นรูป dysentery</b> คือ fever, ปวดเกร็งท้อง และมีเลือดกับ leukocyte ในอุจจาระ ${S.mu}</li>
 <li>กลไก: <b>ยีนชุดหนึ่งบน plasmid คือ pInv genes พาเชื้อรุกเข้า colonic epithelium</b> แล้วเชื้อ<b>ทำให้ phagocytic vacuole แตกและแบ่งตัวใน cytoplasm</b> ${S.mu}</li>
 <li>การเคลื่อนที่ใน cytoplasm และเข้าเซลล์ข้างเคียง<b>อาศัยการสร้าง actin tail เหมือนที่เห็นใน Listeria</b> ${S.mu}</li>
 <li>กระบวนการทำลายเซลล์พร้อมการแทรกของเซลล์อักเสบนี้<b>ลุกลามเป็น colonic ulceration ได้</b> ${S.mu}</li></ul>`});

SEC.push({id:"ecoli-other",k:"b",t:"Escherichia coli outside the gut",mm:"E. coli elsewhere",leg:[],
draw:()=>tbl(["Site","Strain feature","Note"],[
 ["Urinary tract","P pili และ Dr fimbriae","เชื้อจากลำไส้ของผู้ป่วยเองขึ้นไปตาม urinary tract"],
 ["Neonatal meningitis","K1 capsular antigen","serogroup เดียวกันนี้พบใน infection รุนแรงแบบอื่นด้วย"],
 ["Bloodstream","แล้วแต่ strain","มักตามหลัง infection ที่ urinary tract หรือ gastrointestinal tract"],
 ["Intraabdominal","แล้วแต่ strain","ลำไส้ทะลุหรือการผ่าตัด — มักมีหลายเชื้อร่วมกัน"]]),
notes:()=>`<h3>The commonest cause of the commonest infection</h3><ul>
 <li>infectionurinary tract ส่วนใหญ่เกิดจากเชื้อในลำไส้ของผู้ป่วยเอง ที่<b>ขึ้นไปตามท่อปัสสาวะสู่กระเพาะปัสสาวะ</b>และบางครั้งขึ้นต่อไปถึงไต ${S.mu}</li>
 <li>strain ที่ก่อโรค urinary tract มี <b>P pili และ Dr fimbriae</b> ซึ่งทำให้เกาะเยื่อบุ urinary tract ได้ดีกว่า strain ทั่วไป ${S.mu}</li>
 <li>strain ที่ก่อ <b>neonatal meningitis</b> ส่วนใหญ่มีแอนติเจน <b>K1</b> ${S.mu}</li></ul>
 <h3>Treating Enterobacteriaceae in general</h3><ul>
 <li>การให้ antibiotic กับเชื้อในวงศ์นี้<b>ต้องอาศัยผลความไวต่อยา</b> เพราะ resistance แตกต่างกันมากระหว่าง strain ${S.mu}</li>
 <li><b>Extended-spectrum β-lactamase</b> และ carbapenemase ทำให้ทางเลือกแคบลงมากในหลายพื้นที่ ${S.mu}</li>
 <li>สำหรับ gastroenteritis จาก <i>E. coli</i> การรักษาหลักคือ<b>การให้สารน้ำทดแทน</b> · โดยเฉพาะใน STEC มีข้อกังวลว่า antibiotic อาจเพิ่มการปล่อย toxin ${S.mu}</li></ul>
 <h3>How good a pathogen it is</h3><ul>
 <li>สามข้อที่บอกประสิทธิภาพของมัน — <b>เป็น gram-negative rod ที่แยกได้บ่อยที่สุดจากผู้ป่วย sepsis</b>, <b>เป็นต้นเหตุของ infectionurinary tract ในชุมชนกว่า 80% และ infection ในโรงพยาบาลจำนวนมาก</b> และ<b>เป็นสาเหตุสำคัญของ gastroenteritis</b> ${S.mu}</li>
 <li>infection ส่วนใหญ่เป็น <b>endogenous</b> คือมาจากจุลินทรีย์ประจำถิ่นของผู้ป่วยเองที่ได้โอกาสเมื่อกลไกป้องกันบกพร่อง — <b>ยกเว้น gastroenteritis และ neonatal meningitis</b> ${S.mu}</li>
 <li>และ strain ที่ก่อโรคส่วนใหญ่<b>ได้ปัจจัยก่อโรคจำเพาะมาจาก plasmid หรือจาก DNA ของ bacteriophage</b> ${S.mu}</li></ul>
 <h3>Urinary tract infection</h3><ul>
 <li>เส้นทางเหมือนกันแทบทุกราย: <b>gram-negative rod ที่ก่อโรคมาจาก colon ปนเปื้อน urethra ขึ้นสู่กระเพาะปัสสาวะ แล้วอาจย้ายขึ้นไตหรือต่อมลูกหมาก</b> ${S.mu}</li>
 <li>แม้ <i>E. coli</i> เกือบทุก strain ก่อโรคนี้ได้ แต่<b>บาง serogroup พบบ่อยกว่า</b> ${S.mu}</li>
 <li>ที่ทำให้ก่อโรคแรงเป็นพิเศษคือ<b>adhesin โดยเฉพาะ P pili, AAF/I, AAF/III และ Dr ซึ่งจับเซลล์ที่บุกระเพาะปัสสาวะและ urinary tract ส่วนบน จึงไม่ถูกขับออกไปกับปัสสาวะ</b> ${S.mu}</li>
 <li>และ <b>hemolysin HlyA ซึ่งสลาย erythrocyte และเซลล์ชนิดอื่น นำไปสู่การหลั่ง cytokine และการอักเสบ</b> ${S.mu}</li></ul>
 <h3>Neonatal meningitis and septicaemia</h3><ul>
 <li><b><i>E. coli</i> และ group B streptococci เป็นสาเหตุของ infection ระบบประสาทส่วนกลางส่วนใหญ่ในทารกอายุน้อยกว่า 1 เดือน</b> ${S.mu}</li>
 <li><b>ราว 75% ของ strain <i>E. coli</i> ที่ก่อโรคนี้มี K1 capsular antigen</b> ${S.mu}</li>
 <li>serogroup นี้<b>พบใน gastrointestinal tract ของหญิงตั้งครรภ์และ neonate เป็นปกติ</b> ${S.mu}</li>
 <li>จุดที่ยังไม่มีคำตอบ: <b>ไม่ทราบว่าเหตุใด serogroup นี้จึงข้าม blood-brain barrier และก่อ meningitis ใน neonate ได้</b> ${S.mu}</li>
 <li>Septicemia จาก <i>E. coli</i> โดยทั่วไป<b>มีต้นทางจาก urinary tract หรือ gastrointestinal tract</b> เช่นลำไส้รั่วแล้วเกิด infection ในช่องท้อง ${S.mu}</li>
 <li><b>อัตราตายสูงในผู้ที่ immunity บกพร่อง หรือเมื่อจุดติดเชื้อตั้งต้นอยู่ในช่องท้องหรือระบบประสาทส่วนกลาง</b> ${S.mu}</li></ul>`});

SEC.push({id:"salmonella",k:"c",t:"Salmonella and the enteric fever cycle",mm:"Salmonella",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"Enteric fever is a cycle, not a single event",{a:"start",c:"bh"});
 /* the loop: gut → macrophage → organs → blood → gallbladder → gut again */
 const nodes=[["Ingestion","เชื้อผ่านเซลล์ที่บุลำไส้",96,100],
 ["Macrophage","ถูกกลืนแล้วเพิ่มจำนวนข้างใน",282,100],
 ["Liver · spleen · marrow","ถูกพาไปเพิ่มจำนวนต่อ",492,100],
 ["Bacteraemia","fever ค่อย ๆ สูงขึ้นหลัง 10–14 วัน",492,268],
 ["Gallbladder","ตั้งรกรากในถุงน้ำดี",282,268],
 ["Reinfects the gut","symptomgastrointestinal tract มาทีหลัง fever",96,268]];
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
 <li>บาง strain<b>ปรับตัวเข้ากับ host ชนิดเดียว</b>อย่างมาก และเมื่อมาติดคนก็ก่อโรครุนแรง ${S.mu}</li>
 <li><b><i>Salmonella</i> Typhi และ <i>Salmonella</i> Paratyphi</b> ต่างจาก serotype อื่นตรงที่<b>รอดชีวิตอยู่ในถุงน้ำดีและตั้งรกรากเรื้อรังได้</b> ${S.mu}</li>
 <li>หลาย strain ไม่เลือก host เลย และก่อโรคได้ทั้งในคนและสัตว์ ${S.mu}</li>
 <li>infection ส่วนใหญ่มาจาก<b>อาหารที่ปนเปื้อน</b> และในเด็กมาจากการแพร่ทางอุจจาระสู่ปากโดยตรง ${S.mu}</li>
 <li>อุบัติการณ์สูงที่สุดใน<b>เด็กอายุน้อยกว่า 5 ปีและผู้ใหญ่อายุมากกว่า 60 ปี</b> ${S.mu}</li></ul>
 <h3>The cycle of enteric fever</h3><ul>
 <li>เชื้อที่ก่อ enteric fever <b>ผ่านเซลล์ที่บุลำไส้แล้วถูก macrophage กลืนเข้าไป</b> ${S.mu}</li>
 <li>มันเพิ่มจำนวนหลังถูกพาไปยัง<b>liver spleen และไขกระดูก</b> ${S.mu}</li>
 <li><b>สิบถึงสิบสี่วันหลังกินเชื้อ</b> ผู้ป่วยเริ่มมี fever ที่ค่อย ๆ สูงขึ้น พร้อม symptom ไม่จำเพาะ — ปวดศีรษะ ปวด muscle อ่อนเพลีย เบื่ออาหาร ${S.mu}</li>
 <li>symptom เหล่านี้อยู่นานหนึ่งสัปดาห์หรือกว่านั้น <b>แล้วจึงตามด้วย symptomgastrointestinal tract</b> — ลำดับนี้สำคัญ เพราะมันกลับหัวกับที่คนส่วนใหญ่คาด ${S.mu}</li>
 <li>วงจรนี้ตรงกับ<b>ระยะที่เชื้ออยู่ในกระแสเลือดก่อน แล้วจึงไปตั้งรกรากที่ถุงน้ำดีและกลับมาติดเชื้อที่ลำไส้ซ้ำ</b> ${S.mu}</li>
 <li>ต้องนึกถึง enteric fever เสมอในผู้ป่วย fever ที่<b>เพิ่งเดินทางไปประเทศที่โรคนี้เป็นโรคประจำถิ่น</b> ${S.mu}</li></ul>
 <h3>The chronic carrier</h3><ul>
 <li>strain ที่ก่อ typhoid และ paratyphoid <b>ดำรงอยู่ได้ด้วยการตั้งรกรากในคน</b> ${S.mu}</li>
 <li>การตั้งรกรากเรื้อรังนานเกินหนึ่งปีหลังมี symptom เกิดขึ้นใน <b>1–5%</b> ของผู้ป่วย โดยมี<b>ถุงน้ำดีเป็นแหล่งกักเชื้อ</b>ในผู้ป่วยส่วนใหญ่ ${S.mu}</li>
 <li>การตั้งรกรากเรื้อรังด้วย <i>Salmonella</i> สปีชีส์อื่นเกิดน้อยกว่า 1% และไม่ใช่แหล่งแพร่เชื้อที่สำคัญ ${S.mu}</li>
 <li>Infectious dose ของ <i>Salmonella</i> Typhi สูง ส่วนของ strain อื่นต่ำกว่า — ซึ่งอธิบายว่าทำไมอาหารที่ทิ้งไว้ที่อุณหภูมิห้องจนเชื้อเพิ่มจำนวนจึงเป็นเรื่องสำคัญ ${S.mu}</li></ul>
 <h3>The name, and why the name is a mess</h3><ul>
 <li>การศึกษา DNA homology พบว่า<b>เชื้อที่มีความสำคัญทางคลินิกส่วนใหญ่อยู่ในสปีชีส์เดียวคือ <i>S. enterica</i></b> ${S.mu}</li>
 <li>สปีชีส์เดียวนี้มี<b>serotype ที่ไม่ซ้ำกันกว่า 2500 แบบ</b> ซึ่งมักถูกเขียนเหมือนเป็นสปีชีส์แยกกัน ${S.mu}</li>
 <li>รูปที่ถูกต้องคือ <b><i>S. enterica</i> serovar Typhi</b> · ธรรมเนียมปัจจุบันจึง<b>เขียนชื่อ serotype ขึ้นต้นด้วยตัวใหญ่และไม่เอน</b> เช่น <b>Salmonella Typhi</b> ${S.mu}</li></ul>
 <h3>Two pathogenicity islands, two jobs</h3><ul>
 <li>หลังถูกกินและผ่านกระเพาะ เชื้อ<b>เกาะเยื่อบุ small intestine แล้วรุกเข้า M cell ใน Peyer patch และเข้า enterocyte</b> ${S.mu}</li>
 <li>เชื้อ<b>อยู่ใน endocytic vacuole และแบ่งตัวในนั้น</b> — <b>ต่างจาก Shigella ที่ออกมาแบ่งตัวใน cytoplasm</b> ${S.mu}</li>
 <li>เชื้อยัง<b>ถูกขนข้าม cytoplasm แล้วปล่อยเข้ากระแสเลือดหรือน้ำเหลือง</b> ${S.mu}</li>
 <li>การเกาะ การถูกกลืนและการแบ่งตัวถูกคุมโดย<b>ยีนสองกลุ่มใหญ่บนโครโมโซม คือ pathogenicity island I และ II</b> ${S.mu}</li>
 <li><b>Pathogenicity island I เข้ารหัส salmonella-secreted invasion protein และ type III secretion system ที่ฉีดโปรตีนเหล่านั้นเข้าเซลล์ host</b> ${S.mu}</li>
 <li><b>Pathogenicity island II มียีนที่ให้เชื้อเลี่ยงการตอบสนองของ immunity และเข้ารหัส type III secretion system ตัวที่สองสำหรับงานนี้</b> ${S.mu}</li>
 <li>การอักเสบที่เกิดขึ้น<b>กัก infection ไว้ใน gastrointestinal tract, พา prostaglandin ออกมา และกระตุ้น cAMP กับการหลั่งสารน้ำ</b> ${S.mu}</li>
 <li>และเชื้อ<b>ทนกรดใน phagocytic vesicle และรอดใน macrophage ได้</b> จึงแพร่จากลำไส้ไปอวัยวะอื่น ${S.mu}</li></ul>
 <h3>Host adaptation decides the disease</h3><ul>
 <li>Salmonella <b>ตั้งรังได้ในสัตว์แทบทุกชนิด</b> — สัตว์ปีก สัตว์เลื้อยคลาน ปศุสัตว์ สัตว์ฟันแทะ สัตว์เลี้ยง นก และคน ${S.mu}</li>
 <li>แหล่งกักโรคในสัตว์คงอยู่จาก<b>การแพร่ระหว่างสัตว์และการใช้อาหารสัตว์ที่ปนเปื้อน</b> ${S.mu}</li>
 <li><b>Salmonella Typhi และ Salmonella Paratyphi ปรับตัวเข้ากับคนอย่างสูงและไม่ก่อโรคในสัตว์</b> ${S.mu}</li>
 <li>ที่กลับกัน: <b>serotype ที่ปรับตัวเข้ากับสัตว์อย่าง Salmonella Choleraesuis ก่อโรครุนแรงเมื่อมาติดคน</b> ${S.mu}</li>
 <li>และสิ่งที่ serotype ซึ่งปรับตัวกับคนทำได้แต่ตัวอื่นทำไม่ได้: <b>รอดอยู่ในถุงน้ำดีและตั้งเป็นพาหะเรื้อรัง</b> ${S.mu}</li>
 <li>ส่วน<b>strain อีกจำนวนมากไม่จำเพาะต่อ host และก่อโรคได้ทั้งในคนและสัตว์</b> ${S.mu}</li></ul>
 <h3>Infectious dose, and the four forms</h3><ul>
 <li><b>Salmonella Typhi มี infectious dose ต่ำ จึงแพร่จากคนสู่คนได้บ่อย</b> ${S.mu}</li>
 <li>แต่<b>serotype อื่นส่วนใหญ่ต้องการเชื้อจำนวนมากถึง 10⁶ ถึง 10⁸ ตัวจึงเกิด symptom</b> — เชื้อเพิ่มถึงความหนาแน่นนี้ได้<b>ถ้าอาหารที่ปนเปื้อนถูกเก็บไม่ถูกต้อง เช่นวางไว้ที่อุณหภูมิห้อง</b> ${S.mu}</li>
 <li>และ <b>infectious dose ต่ำลงในผู้ที่เสี่ยงสูง</b> จากอายุ ภาวะกด immunity โรคประจำตัวอย่าง leukemia, lymphoma และ sickle cell disease หรือ<b>กรดในกระเพาะที่ลดลง</b> ${S.mu}</li>
 <li><b>Gastroenteritis</b> เป็นรูปที่พบบ่อยที่สุด · symptom เริ่ม <b>6 ถึง 48 ชั่วโมงหลังกิน</b> ด้วย<b>คลื่นไส้ อาเจียน และถ่ายเหลวไม่มีเลือด</b> ร่วมกับ fever ปวดเกร็งท้อง ปวด muscle และปวดศีรษะ · <b>symptom อยู่ 2 ถึง 7 วันแล้วหายเอง</b> ${S.mu}</li>
 <li><b>Septicemia</b> เกิดได้จากทุกสปีชีส์ แต่ <b>Typhi, Paratyphi และ Choleraesuis นำไปสู่ระยะ bacteremia บ่อยกว่า</b> · ความเสี่ยงสูงใน<b>เด็ก ผู้สูงอายุ และผู้ที่ immunity บกพร่อง</b> เช่น HIV, sickle cell disease และ immunity บกพร่องแต่กำเนิด ${S.mu}</li>
 <li>สิ่งที่ทำให้มันต่างจาก bacteremia อื่น: <b>infection เป็น pus เฉพาะที่ เช่น osteomyelitis, endocarditis และ arthritis เกิดในผู้ป่วยมากถึง 10%</b> ${S.mu}</li>
 <li><b>Enteric fever</b> — Typhi ให้ <b>typhoid fever</b> · รูปที่เบากว่าคือ <b>paratyphoid fever จาก Paratyphi A, Schottmuelleri และ Hirschfeldii</b> ${S.mu}</li>
 <li>ลำดับของ enteric fever: เชื้อ<b>ผ่านเซลล์ที่บุลำไส้ ถูก macrophage กลืน แล้วแบ่งตัวเมื่อถูกขนไปที่ liver spleen และไขกระดูก</b> ${S.mu}</li>
 <li><b>10 ถึง 14 วันหลังกินเชื้อ</b> ผู้ป่วยมี<b>fever ที่สูงขึ้นทีละน้อย</b> พร้อม symptom ไม่จำเพาะคือปวดศีรษะ ปวด muscle อ่อนเพลียและเบื่ออาหาร · <b>symptom อยู่หนึ่งสัปดาห์หรือนานกว่า แล้วจึงตามด้วย symptomgastrointestinal tract</b> ${S.mu}</li>
 <li>วงจรนี้ตรงกับ<b>ระยะ bacteremia แรก แล้วตามด้วยการตั้งรังในถุงน้ำดีและการกลับไปติดเชื้อที่ลำไส้อีกครั้ง</b> ${S.mu}</li>
 <li>ข้อที่ใช้ทางคลินิก: <b>ต้องสงสัย enteric fever ในผู้ป่วยที่มี fever และเพิ่งเดินทางไปประเทศกำลังพัฒนาที่โรคเป็นโรคประจำถิ่น</b> ${S.mu}</li>
 <li><b>Asymptomatic colonization</b> — <b>การเป็นพาหะเรื้อรังนานกว่า 1 ปีเกิดใน 1% ถึง 5% ของผู้ป่วยหลังมี symptom โดยถุงน้ำดีเป็นแหล่งกักเชื้อในผู้ป่วยส่วนใหญ่</b> ${S.mu}</li>
 <li>ส่วน<b>สปีชีส์อื่นเป็นพาหะเรื้อรังน้อยกว่า 1% และไม่ใช่แหล่งสำคัญของ infection ในคน</b> ${S.mu}</li></ul>
 <h3>The numbers</h3><ul>
 <li>อุบัติการณ์สูงสุดใน<b>เด็กอายุน้อยกว่า 5 ปีและผู้ใหญ่อายุมากกว่า 60 ปี</b> และติดเชื้อใน<b>ฤดูร้อนและฤดูใบไม้ร่วง</b> เมื่อกินอาหารที่ปนเปื้อนในงานสังสรรค์กลางแจ้ง ${S.mu}</li>
 <li>แหล่งที่พบบ่อยที่สุด: <b>สัตว์ปีก ไข่ ผลิตภัณฑ์นม และอาหารที่เตรียมบนพื้นผิวที่ปนเปื้อน</b> เช่นเขียงที่ใช้หั่นสัตว์ปีกดิบ ${S.mu}</li>
 <li>สหรัฐอเมริการายงาน <b>nontyphoidal Salmonella ราว 50,000 รายต่อปี</b> แต่<b>ประมาณว่ามี 1.2 ล้านรายและตาย 400 รายต่อปี</b> ${S.mu}</li>
 <li><b>Salmonella Typhi รายงาน 400 ถึง 500 รายต่อปีในสหรัฐอเมริกา ซึ่งส่วนใหญ่ติดระหว่างเดินทางต่างประเทศ</b> ${S.mu}</li>
 <li>ส่วนทั่วโลกประมาณว่า <b>Typhi กับ Paratyphi ติดเชื้อ 27 ล้านรายและตายกว่า 200,000 รายต่อปี</b> · <b>ความเสี่ยงสูงสุดในเด็กที่ยากจนในประเทศกำลังพัฒนา</b> ${S.mu}</li></ul>`});

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
 <li>กระบวนการนี้ทำให้เซลล์ตายแบบ <b>apoptosis</b> ซึ่งปล่อย <b>IL-1β</b> ออกมาดึง polymorphonuclear leukocyte เข้าสู่ tissue ที่ติดเชื้อ ${S.mu}</li>
 <li>การมาของ leukocyte นั่นเอง<b>ทำให้ผนังลำไส้เสียความสมบูรณ์</b> และเปิดทางให้เชื้อลงไปถึงเซลล์เยื่อบุชั้นที่ลึกกว่า — คือการอักเสบช่วยเชื้อ ไม่ใช่ขัดขวาง ${S.mu}</li></ul>
 <h3>Shiga toxin</h3><ul>
 <li>strain <i>S. dysenteriae</i> สร้าง exotoxin ชื่อ <b>Shiga toxin</b> ${S.mu}</li>
 <li>เหมือนกับของ STEC คือมี <b>A หนึ่งหน่วยกับ B ห้าหน่วย</b> · B จับไกลโคลิพิด Gb3 แล้วพา A เข้าเซลล์ ${S.mu}</li>
 <li>A ตัด <b>28S rRNA ใน 60S ribosomal subunit</b> ทำให้ aminoacyl-transfer RNA เกาะไม่ได้ การสร้างโปรตีนจึงหยุด ${S.mu}</li>
 <li>ผลหลักคือความเสียหายต่อเยื่อบุลำไส้ · แต่ใน<b>ผู้ป่วยส่วนน้อย</b> toxin ทำลายเซลล์บุหลอดเลือดของ glomerulus จนเกิดไตวาย ${S.mu}</li></ul>
 <h3>How the invasion works, step by step</h3><ul>
 <li>Shigella ก่อโรคโดย<b>รุกและแบ่งตัวในเซลล์ที่บุ colon</b> ${S.mu}</li>
 <li>จุดเริ่มต้นที่สำคัญ: <b>เชื้อดูเหมือนจะเกาะ mucosal cell ที่พัฒนาแล้วไม่ได้ จึงเกาะและรุกเข้า M cell ใน Peyer patch ก่อน</b> ${S.mu}</li>
 <li><b>Type III secretion system หลั่งโปรตีนสี่ตัวคือ IpaA, IpaB, IpaC และ IpaD เข้า epithelial cell และ macrophage</b> ${S.mu}</li>
 <li>โปรตีนเหล่านี้<b>ทำให้ cytoplasmic membrane เป้าหมายย่น แล้วเซลล์จึงกลืนเชื้อเข้าไป</b> ${S.mu}</li>
 <li>แล้วเชื้อ<b>ทำให้ phagocytic vacuole แตกและแบ่งตัวใน cytoplasm ของเซลล์ host — ต่างจาก Salmonella ที่แบ่งตัวใน vacuole</b> ${S.mu}</li>
 <li>พร้อมกับ<b>การจัดเรียง actin filament ใหม่ เชื้อถูกผลักผ่าน cytoplasm ไปยังเซลล์ข้างเคียงและข้ามไปทีละเซลล์</b> ซึ่ง<b>ทำให้มันพ้นการกวาดล้างโดย immunity</b> ${S.mu}</li>
 <li>เชื้อ<b>รอดจากการถูกกลืนโดยเหนี่ยวนำ apoptosis</b> · กระบวนการนี้<b>ปล่อย IL-1β ซึ่งดึง polymorphonuclear leukocyte เข้ามา</b> ${S.mu}</li>
 <li>และนั่นเป็นดาบสองคม: <b>การอักเสบนั้นเองทำให้ผนังลำไส้เสียความแข็งแรง และเปิดทางให้เชื้อลงไปถึง epithelial cell ชั้นลึก</b> ${S.mu}</li>
 <li>Shiga toxin: <b>A subunit หนึ่งตัวกับ B subunit ห้าตัว</b> · B จับ <b>Gb3</b> และพา A เข้าเซลล์ · <b>A ตัด 28S rRNA ใน 60S ribosomal subunit ทำให้ aminoacyl-transfer RNA จับไม่ได้และการสร้างโปรตีนหยุด</b> ${S.mu}</li>
 <li>ผลหลักของ toxin คือ<b>ความเสียหายของ intestinal epithelium</b> · แต่<b>ในผู้ป่วยส่วนน้อยมันทำลาย glomerular endothelial cell จนเกิด renal failure</b> ${S.mu}</li></ul>
 <h3>Who gets it, and how little it takes</h3><ul>
 <li><b>คนเป็นแหล่งกักโรคเพียงชนิดเดียว</b> ${S.mu}</li>
 <li>ประมาณว่ามี<b>เกือบ 500,000 รายต่อปีในสหรัฐอเมริกา เทียบกับ 90 ล้านรายต่อปีทั่วโลก</b> ${S.mu}</li>
 <li><b><i>S. sonnei</i> เป็นต้นเหตุเกือบ 85% ของ infection ในสหรัฐอเมริกา ขณะที่ <i>S. flexneri</i> เด่นในประเทศกำลังพัฒนา</b> ${S.mu}</li>
 <li><b>การระบาดของ <i>S. dysenteriae</i> เกิดเป็นระยะ</b> ล่าสุดใน West Africa และ Central America และ<b>มีอัตราป่วยตาย 5% ถึง 15%</b> ${S.mu}</li>
 <li>เป็น<b>โรคของเด็กเป็นหลัก — 60% ของ infection ทั้งหมดอยู่ในเด็กอายุน้อยกว่า 10 ปี</b> ${S.mu}</li>
 <li>โรคประจำถิ่นในผู้ใหญ่พบบ่อยใน<b>ชายที่มีเพศสัมพันธ์กับชาย และในคนที่อยู่บ้านเดียวกับเด็กที่ติดเชื้อ</b> · <b>การระบาดเกิดในศูนย์รับเลี้ยงเด็ก สถานเลี้ยงเด็กอ่อน และสถานสงเคราะห์</b> ${S.mu}</li>
 <li>แพร่<b>จากคนสู่คนทาง fecal-oral เป็นหลักผ่านมือที่ปนเปื้อน</b> และพบน้อยกว่าทางน้ำหรืออาหาร ${S.mu}</li>
 <li><b>เชื้อเพียง 100 ถึง 200 ตัวก่อโรคได้</b> จึง<b>แพร่เร็วในชุมชนที่สุขาภิบาลและสุขอนามัยส่วนบุคคลต่ำ</b> ${S.mu}</li></ul>
 <h3>Two phases in one illness</h3><ul>
 <li>symptom เริ่ม <b>1 ถึง 3 วันหลังกินเชื้อ</b> ${S.mu}</li>
 <li>เชื้อ<b>ตั้งรังที่ small intestine ก่อนและเริ่มเพิ่มจำนวนภายใน 12 ชั่วโมงแรก</b> ${S.mu}</li>
 <li><b>สัญญาณแรกคือถ่ายเหลวเป็นน้ำปริมาณมากโดยยังไม่มีหลักฐานทางจุลพยาธิของการรุกเยื่อบุ — ระยะนี้เกิดจาก enterotoxin</b> ${S.mu}</li>
 <li>แต่<b>ลักษณะเด่นที่สุดของ shigellosis คือปวดเกร็งท้องน้อยและ tenesmus คือเบ่งถ่าย พร้อม pus และเลือดปริมาณมากในอุจจาระ</b> ซึ่ง<b>เกิดจากการรุกเยื่อบุ colon</b> ${S.mu}</li>
 <li>ในอุจจาระพบ<b>neutrophil, erythrocyte และมูกจำนวนมาก</b> ${S.mu}</li>
 <li>โรค<b>หายเองโดยทั่วไป แต่แนะนำให้ antibiotic เพื่อลดการแพร่ต่อไปยังคนในบ้านและผู้สัมผัสอื่น</b> ${S.mu}</li>
 <li><b>ผู้ป่วยจำนวนน้อยกลายเป็นพาหะที่ colon โดยไม่มี symptom ซึ่งเป็นแหล่งกักเชื้อที่คงอยู่</b> ${S.mu}</li></ul>`});

SEC.push({id:"yersinia",k:"c",t:"Yersinia",mm:"Yersinia",leg:[],
draw:()=>tbl(["Species","How it reaches people","Picture"],[
 ["Y. pestis","หมัดหนูกัด หรือสูดละอองจากผู้ป่วย pneumonic plague","bubonic plague — lymph node โตเจ็บมาก (bubo) · pneumonic plague แพร่คนสู่คนได้"],
 ["Y. enterocolitica","อาหารและน้ำปนเปื้อน · โตได้ที่อุณหภูมิตู้เย็น","enterocolitis · ปวดท้องน้อยขวาจนเลียนแบบ appendicitis (pseudoappendicitis)"],
 ["Y. pseudotuberculosis","สัตว์เป็นแหล่งโรค","mesenteric adenitis"]]),
notes:()=>`<h3>What they share</h3><ul>
 <li><i>Yersinia</i> อยู่ในวงศ์ Enterobacteriaceae และใช้ <b>type III secretion system</b> ส่งปัจจัยก่อโรคเข้าเซลล์ host เหมือน <i>Salmonella</i> และ <i>Shigella</i> ${S.mu}</li>
 <li>ทั้งสามสปีชีส์เป็น<b>เชื้อก่อโรคแท้</b> ไม่ใช่เชื้อประจำถิ่นที่ฉวยโอกาส ${S.mu}</li>
 <li>แหล่งโรคคือ<b>สัตว์</b> — ต่างจาก <i>Shigella</i> ที่แหล่งโรคคือคน ${S.mu}</li></ul>
 <h3>Growing in the cold</h3><ul>
 <li><i>Y. enterocolitica</i> <b>เติบโตได้ที่อุณหภูมิตู้เย็น</b> เช่นเดียวกับ <i>Listeria monocytogenes</i> — จึงเพิ่มจำนวนในอาหารแช่เย็นและในเลือดที่เก็บไว้ ${S.mu}</li>
 <li>คุณสมบัตินี้ยังใช้ในห้องปฏิบัติการได้ด้วย ในรูปของ <b>cold enrichment</b> ${S.mu}</li></ul>
 <h3>Resisting the phagocyte</h3><ul>
 <li>คุณสมบัติร่วมของ Yersinia ที่ก่อโรคคือ<b>ความสามารถทนการถูกฆ่าโดย phagocyte</b> ซึ่ง<b>อาศัย type III secretion system</b> ${S.mu}</li>
 <li>เมื่อสัมผัส phagocyte เชื้อ<b>หลั่งโปรตีนเข้าไปในเซลล์นั้น</b> — <b>ผลผลิตของยีน YopH ถอดหมู่ฟอสเฟตจากโปรตีนหลายตัวที่จำเป็นต่อ phagocytosis</b>, <b>YopE ทำให้เป็นพิษโดยทำลาย actin filament</b> และ <b>YopJ/P เริ่ม apoptosis ใน macrophage</b> ${S.mu}</li>
 <li>ระบบเดียวกันยัง<b>กดการสร้าง cytokine ซึ่งลดการอักเสบที่ตอบต่อ infection</b> ${S.mu}</li>
 <li><i>Y. pestis</i> มี <b>plasmid สองตัวที่เข้ารหัสยีนก่อโรค</b> — <b>ยีน fraction 1 ซึ่งสร้าง capsule โปรตีนที่กันการถูกกลืน</b> และ <b>ยีน plasminogen activator protease</b> ${S.mu}</li>
 <li>ยีน pla ทำสองอย่าง — <b>ย่อย C3b และ C5a จึงกันทั้ง opsonization และการเคลื่อนมาของ phagocyte</b> และ <b>ย่อย fibrin clot ซึ่งทำให้เชื้อแพร่ได้เร็ว</b> ${S.mu}</li>
 <li>ปัจจัยอื่นเฉพาะของ <i>Y. pestis</i>: <b>ความทนต่อการถูกฆ่าใน serum และความสามารถดูดซับเหล็กอินทรีย์โดยกลไกที่ไม่ต้องใช้ siderophore</b> ${S.mu}</li></ul>
 <h3>Two plagues, and why only one can be eliminated</h3><ul>
 <li><b>infection Yersinia ทุกชนิดเป็น zoonosis โดยคนเป็น host โดยอุบัติเหตุ</b> ${S.mu}</li>
 <li><b>Urban plague</b> มี<b>หนูเป็นแหล่งกักโรคตามธรรมชาติ</b> · <b>Sylvatic plague</b> ติดเชื้อใน<b>กระรอก กระต่าย หนูนา และแมวบ้าน</b> ${S.mu}</li>
 <li>แหล่งกักโรคของ <i>Y. enterocolitica</i> คือ<b>หมู สัตว์ฟันแทะ ปศุสัตว์และกระต่าย</b> · ของ <i>Y. pseudotuberculosis</i> คือ<b>สัตว์ฟันแทะ สัตว์ป่าและนกเกม</b> ${S.mu}</li>
 <li>Urban plague คงอยู่ในประชากรหนูและ<b>แพร่ระหว่างหนู หรือระหว่างหนูกับคน โดยหมัดที่ติดเชื้อ</b> ${S.mu}</li>
 <li>วงจรในหมัด: <b>หมัดติดเชื้อจากการกินเลือดหนูที่มี bacteremia แล้วเชื้อเพิ่มจำนวนในลำไส้หมัด จึงถ่ายทอดต่อไปยังสัตว์ฟันแทะตัวอื่นหรือคน</b> ${S.mu}</li>
 <li><b>Urban plague ถูกกำจัดออกจากชุมชนส่วนใหญ่แล้วด้วยการควบคุมหนูและสุขอนามัยที่ดีขึ้น</b> ${S.mu}</li>
 <li>แต่<b>sylvatic plague กำจัดได้ยากหรือไม่ได้เลย เพราะทั้งแหล่งกักโรคที่เป็นสัตว์เลี้ยงลูกด้วยนมและหมัดที่เป็นพาหะกระจายกว้าง</b> ${S.mu}</li>
 <li><b><i>Y. pestis</i> ฆ่าสัตว์ที่เป็นแหล่งกักโรคด้วย จึงเกิดรูปแบบวงรอบของโรคในคนตามจำนวนสัตว์ที่ติดเชื้อที่เพิ่มขึ้นหรือลดลง</b> ${S.mu}</li>
 <li>รับเชื้อได้<b>จากการกินสัตว์ที่ปนเปื้อนหรือการจับ tissue สัตว์ที่ปนเปื้อน</b>ด้วย ${S.mu}</li>
 <li>ข้อสำคัญทางระบาดวิทยา: <b>แม้เชื้อติดต่อได้สูง การแพร่จากคนสู่คนพบไม่บ่อย เว้นแต่ผู้ป่วยมีโรคที่ปอด</b> ${S.mu}</li></ul>
 <h3>The three pandemics</h3><ul>
 <li>Plague ถูกบันทึกไว้ตั้งแต่พระคัมภีร์เดิม ${S.mu}</li>
 <li><b>การระบาดใหญ่ครั้งแรกเริ่มใน Egypt ปี ค.ศ. 541</b> แล้วลามทั่ว North Africa, Europe, Asia กลางและใต้ และ Arabia · เมื่อจบในกลางคริสต์ศตวรรษที่ 8 <b>ประชากรสัดส่วนใหญ่ของประเทศเหล่านั้นตายจากโรคนี้</b> ${S.mu}</li>
 <li><b>ครั้งที่สองเริ่มในทศวรรษ 1320 และทำให้ตายกว่า 25 ล้านคนใน Europe เพียงแห่งเดียวในช่วง 5 ปี คือ 30% ถึง 40% ของประชากร</b> ${S.mu}</li>
 <li><b>ครั้งที่สามเริ่มใน China ในทศวรรษ 1860 แล้วลามไป Africa, Europe และ Americas</b> · การระบาดและผู้ป่วยประปรายยังมีถึงปัจจุบัน ${S.mu}</li>
 <li>ปัจจุบัน<b>สหรัฐอเมริการายงานน้อยกว่า 10 รายต่อปี ส่วนใหญ่เป็น sylvatic plague ในรัฐทางตะวันตก</b> ${S.mu}</li></ul>
 <h3>Bubonic, pneumonic and enterocolitis</h3><ul>
 <li><b>Bubonic plague</b> — <b>ระยะฟักตัวไม่เกิน 7 วันหลังถูกหมัดที่ติดเชื้อกัด</b> · ผู้ป่วยมี<b>fever สูงและ bubo ที่เจ็บ คือ lymph node บวมอักเสบที่ขาหนีบหรือรักแร้</b> ${S.mu}</li>
 <li><b>Bacteremia เกิดเร็วถ้าไม่รักษา และผู้ป่วยมากถึง 75% ตาย</b> ${S.mu}</li>
 <li><b>Pneumonic plague</b> — <b>ระยะฟักตัวสั้นกว่าคือ 2 ถึง 3 วัน</b> · เริ่มด้วย fever และ malaise แล้ว<b>symptom ทางปอดเกิดภายใน 1 วัน</b> ${S.mu}</li>
 <li><b>ผู้ป่วยติดต่อได้สูงและแพร่จากคนสู่คนทางละอองอากาศ</b> · <b>อัตราตายในผู้ที่ไม่ได้รักษาเกิน 90%</b> ${S.mu}</li>
 <li><b>ราวสองในสามของ infection <i>Y. enterocolitica</i> เป็น enterocolitis</b> ตามชื่อ · มักจาก<b>อาหารหรือน้ำที่ปนเปื้อน</b> ${S.mu}</li>
 <li><b>ระยะฟักตัว 1 ถึง 10 วัน เฉลี่ย 4 ถึง 6 วัน</b> แล้วมี<b>ถ่ายเหลว fever และปวดท้องนาน 1 ถึง 2 สัปดาห์</b> · <b>รูปเรื้อรังที่อยู่ได้หลายเดือนก็มี</b> ${S.mu}</li>
 <li>จุดที่ทำให้เข้าใจผิดได้: <b>โรคกินที่ terminal ileum และถ้า lymph node mesentery โตขึ้น จะเลียนแบบ acute appendicitis</b> · <b>pseudoappendicitis เป็นปัญหาเฉพาะในเด็ก</b> ซึ่งเป็นกลุ่มที่พบโรคนี้บ่อยที่สุด ${S.mu}</li>
 <li><i>Y. pseudotuberculosis</i> ให้โรคในลำไส้แบบเดียวกัน · รูปอื่นที่พบในผู้ใหญ่คือ <b>septicemia, arthritis, intraabdominal abscess, hepatitis และ osteomyelitis</b> ${S.mu}</li>
 <li>ตัวเลข: สหรัฐอเมริกามี <i>Y. enterocolitica</i> ที่ยืนยันด้วยการ culture<b>ราว 1 รายต่อประชากรแสนคนต่อปี โดย 90% สัมพันธ์กับเนื้อ นมหรือน้ำที่ปนเปื้อน</b> · <b>พบบ่อยกว่าในเดือนที่อากาศเย็น</b> ${S.mu}</li>
 <li>Serogroup ก่อโรคต่างกันตามภูมิภาค — <b>O3 และ O9 ใน Europe, Africa, Japan และ Canada · O8 ในสหรัฐอเมริกา</b> ${S.mu}</li>
 <li>ผลของการโตที่อุณหภูมิต่ำ: ปี 1987 มีรายงานแรกว่า <b><i>Y. enterocolitica</i> ก่อ bacteremia และ endotoxic shock จากการให้เลือด</b> เพราะ<b>เชื้อโตที่ 4 °C ได้ จึงเพิ่มจำนวนถึงความหนาแน่นสูงในผลิตภัณฑ์เลือดที่เก็บในตู้เย็น</b> ${S.mu}</li></ul>`});

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
 [["Klebsiella pneumoniae","capsule หนามาก โคโลนีเป็นเมือก · pneumonia ที่เสมหะข้นเหมือนเยลลี่ลูกเกด (currant jelly) · ติดเชื้อในโรงพยาบาลและ urinary tract",24,320],
 ["Enterobacter · Serratia · Citrobacter","เชื้อฉวยโอกาสในโรงพยาบาล · ดื้อยาหลายขนาน · Serratia บาง strain สร้างเม็ดสีแดง",24,380],
 ["Proteus mirabilis","เคลื่อนที่เก่ง ลามเป็นคลื่นบนจาน · urease ทำให้เกิดนิ่ว struvite",24,440]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 490")},
notes:()=>`<h3>Opportunists with one trick each</h3><ul>
 <li><b><i>Klebsiella pneumoniae</i></b> มี <b>capsule ที่หนามาก</b> ทำให้โคโลนีดูเป็นเมือก และกันการถูกกลืนกินได้ดี ${S.mu}</li>
 <li>มันก่อ pneumonia ที่ทำลายเนื้อปอด ทำให้เสมหะข้นและมีเลือดปน รวมถึง infectionurinary tract และ infection ในโรงพยาบาล ${S.mu}</li>
 <li><b><i>Proteus mirabilis</i></b> เคลื่อนที่ได้ดีมากจน<b>ลามเป็นคลื่นวงซ้อนบนผิวจาน</b> · มันสลับระหว่างระยะที่เคลื่อนที่กับระยะที่อยู่กับที่ จึงเกิดลายวงเป็นชั้น ๆ ${S.mu}</li>
 <li><b>Urease</b> ของ <i>Proteus</i> ย่อย urea เป็นแอมโมเนีย ทำให้ปัสสาวะเป็นด่างจน<b>ตกผลึกเป็นนิ่ว struvite</b> — นิ่วเหล่านี้เก็บเชื้อไว้ข้างใน การให้ยาอย่างเดียวจึงมักไม่หาย ${S.mu}</li>
 <li><b><i>Enterobacter</i>, <i>Serratia</i> และ <i>Citrobacter</i></b> เป็นเชื้อฉวยโอกาสในโรงพยาบาลที่<b>ดื้อยาหลายขนาน</b> ${S.mu}</li></ul>
 <h3>Resistance is the real problem</h3><ul>
 <li>การเลือกยาสำหรับเชื้อในวงศ์นี้ต้อง<b>อาศัยผลความไวต่อยาเสมอ</b> ${S.mu}</li>
 <li><b>Extended-spectrum β-lactamase</b> ทำให้ penicillin และ cephalosporin ใช้ไม่ได้ และ carbapenemase ทำให้ทางเลือกสุดท้ายหายไปด้วย ${S.mu}</li></ul>
 <h3>Klebsiella beyond pneumonia</h3><ul>
 <li>Capsule ที่เด่นของ Klebsiella รับผิดชอบทั้ง<b>หน้าตาเป็นเมือกของโคโลนีและความก่อโรคที่เพิ่มขึ้นในร่างกาย</b> ${S.mu}</li>
 <li>ปัญหาที่โตขึ้นทั่วโลก: <b>strain ที่ดื้อ β-lactam ทุกตัวรวมถึง carbapenem และดื้อยากลุ่มอื่นเกือบทั้งหมด พบมากขึ้นเรื่อย ๆ</b> — <b>การดูแลผู้ป่วยที่ติดเชื้อ Klebsiella เป็นความท้าทายทางคลินิกข้อใหญ่</b> ${S.mu}</li>
 <li>สปีชีส์ที่แยกได้บ่อยที่สุดคือ <b><i>K. pneumoniae</i> และ <i>K. oxytoca</i></b> ซึ่งก่อ <b>primary lobar pneumonia ได้ทั้งในชุมชนและในโรงพยาบาล</b> ${S.mu}</li>
 <li>ลักษณะของ pneumonia จากเชื้อนี้: <b>การทำลายถุงลมเป็นเนื้อตาย, การเกิดโพรง และเสมหะที่มีเลือดปน</b> ${S.mu}</li>
 <li>สปีชีส์อื่นในสกุล: <b><i>K. granulomatis</i></b> ซึ่งเคยชื่อ <i>Calymmatobacterium granulomatis</i> เป็นต้นเหตุของ <b>granuloma inguinale</b> ที่มักถูกเรียกว่า <b>donovanosis</b> ${S.mu}</li>
 <li>Granuloma inguinale <b>พบน้อยในสหรัฐอเมริกา แต่เป็นโรคประจำถิ่นในบางส่วนของ Papua New Guinea, Caribbean, South America, India, southern Africa, Vietnam และ Australia</b> ${S.mu}</li>
 <li>ติดต่อได้<b>ทั้งจากการมีเพศสัมพันธ์ซ้ำ ๆ และจากการบาดเจ็บที่อวัยวะเพศโดยไม่เกี่ยวกับเพศสัมพันธ์</b> ${S.mu}</li>
 <li>ลำดับของโรค: <b>ระยะฟักตัวยาวเป็นสัปดาห์ถึงเป็นเดือน แล้วเกิดตุ่มใต้ skin ที่อวัยวะเพศหรือขาหนีบ</b> · ตุ่ม<b>สลายตัวเผยให้เห็นรอยโรค granuloma ที่ไม่เจ็บหนึ่งแห่งหรือมากกว่า ซึ่งขยายและรวมกันเป็นแผลที่คล้ายแผล syphilis</b> ${S.mu}</li>
 <li>อีกสองสปีชีส์ที่มีความสำคัญทางคลินิก: <b><i>K. rhinoscleromatis</i> ที่ก่อโรค granuloma ของจมูก</b> และ <b><i>K. ozaenae</i> ที่ก่อ chronic atrophic rhinitis</b> · ทั้งคู่พบไม่บ่อยในสหรัฐอเมริกา ${S.mu}</li></ul>
 <h3>Proteus and the stone</h3><ul>
 <li><b><i>P. mirabilis</i></b> เป็นสมาชิกที่พบบ่อยที่สุดของสกุล และก่อ<b>infectionurinary tract เป็นหลัก</b> ทั้ง cystitis และ pyelonephritis ${S.mu}</li>
 <li>กลไกที่ทำให้มันต่าง: <b>มันสร้าง urease ปริมาณมาก ซึ่งแยก urea เป็น carbon dioxide กับ ammonia</b> ${S.mu}</li>
 <li>ผลที่ตามมาเป็นลูกโซ่: <b>pH ของปัสสาวะสูงขึ้น ทำให้ magnesium ตกตะกอนเป็นผลึก struvite และ calcium ตกตะกอนเป็นผลึก apatite จึงเกิดนิ่วในไต</b> ${S.mu}</li>
 <li>และ<b>ความเป็นด่างที่เพิ่มขึ้นเองยังเป็นพิษต่อ uroepithelium</b> ${S.mu}</li></ul>
 <h3>Enterobacter, Citrobacter, Morganella and Serratia</h3><ul>
 <li>infection ปฐมภูมิจากสี่สกุลนี้<b>พบน้อยในผู้ที่ immunity ปกติ</b> ${S.mu}</li>
 <li>พวกมันเป็น<b>สาเหตุของ infection ในโรงพยาบาลที่พบบ่อยกว่าใน neonate และผู้ที่ immunity บกพร่อง</b> ${S.mu}</li>
 <li>ตัวอย่างที่ชัดที่สุด: <b><i>Citrobacter koseri</i> มีแนวโน้มก่อ meningitis และ brain abscess ใน neonate</b> ${S.mu}</li></ul>`});

SEC.push({id:"entero-lab",k:"c",t:"Enterobacteriaceae at the bench, and what to treat",mm:"Enterobacteriaceae lab",leg:[],
draw:()=>tbl(["Medium","What it does","What it is for"],[
 ["Blood agar","nonselective","specimen ที่ปกติปลอดเชื้อ เช่น น้ำ spinal cord และ tissue จากการผ่าตัด"],
 ["MacConkey agar · eosin-methylene blue agar","selective และแยกการหมัก lactose","specimen ที่ปกติปนเปื้อนเชื้ออื่น เช่น เสมหะและอุจจาระ — แยกสกุลที่หมัก lactose ออกจากสกุลที่ไม่หมัก"],
 ["Sorbitol-MacConkey agar","แยกเชื้อที่ไม่หมัก sorbitol ซึ่งให้โคโลนีไม่มีสี","คัดกรองอุจจาระหา Escherichia coli O157"],
 ["Highly selective medium","กดเชื้อประจำถิ่นลงอย่างแรง","เก็บ Salmonella และ Shigella จากอุจจาระที่เชื้อประจำถิ่นกลบอยู่"],
 ["Cold enrichment ที่ 4 °C สองสัปดาห์","ปล่อยให้ Yersinia โตแต่ยับยั้งหรือฆ่าเชื้ออื่น","เก็บ Yersinia enterocolitica ซึ่งโตช้าที่อุณหภูมิบ่มปกติและชอบอุณหภูมิเย็นกว่า"]]),
notes:()=>`<h3>Identification</h3><ul>
 <li>ระบบทดสอบทาง biochemistry พัฒนาไปมาก และ<b>สมาชิกที่พบบ่อยที่สุดระบุได้แม่นยำในเวลาน้อยกว่า 24 ชั่วโมง</b> ด้วยชุดสำเร็จรูป ${S.mu}</li>
 <li>ปัจจุบันการระบุสปีชีส์ส่วนใหญ่ใช้<b>การหาลำดับยีนจำเพาะต่อสปีชีส์อย่างยีน 16S rRNA หรือการตรวจรูปแบบโปรตีนด้วย mass spectrometry</b> ${S.mu}</li>
 <li><b>การทดสอบทาง serology มีประโยชน์สองอย่าง</b> — <b>บอกความสำคัญทางคลินิกของเชื้อที่แยกได้</b> เช่นการจำแนก <i>E. coli</i> O157 หรือ <i>Y. enterocolitica</i> O8 และ<b>การจัดกลุ่มเพื่องานระบาดวิทยา</b> ${S.mu}</li>
 <li>ข้อจำกัดของมัน: <b>การไขว้กับ Enterobacteriaceae ที่แอนติเจนใกล้เคียง และกับเชื้อจากวงศ์อื่น</b> ${S.mu}</li>
 <li><b>Multiplex nucleic acid amplification test</b> ถูกใช้กว้างขวางในทศวรรษที่ผ่านมา · ข้อดีคือ<b>ตรวจเชื้อก่อโรคในลำไส้จำนวนมากพร้อมกันในการทดสอบเดียว</b> รวมทั้ง Salmonella, Shigella, <i>E. coli</i>, Campylobacter และไวรัสกับปรสิตที่พบบ่อยในลำไส้ ${S.mu}</li>
 <li>สำหรับ <i>E. coli</i> <b>enteric multiplex nucleic acid amplification test ถือเป็นมาตรฐานทองในการวินิจฉัย</b> ${S.mu}</li></ul>
 <h3>Treatment, and when not to treat</h3><ul>
 <li>การเลือกยา<b>ต้องอาศัยผลความไวในหลอดทดลองร่วมกับประสบการณ์ทางคลินิก</b> ${S.mu}</li>
 <li><b><i>E. coli</i> และ <i>P. mirabilis</i> ไวต่อยาหลายตัว แต่ตัวอื่นอาจดื้อยาสูงมาก</b> ${S.mu}</li>
 <li><b>การสร้างเอนไซม์ที่ทำลาย penicillin และ cephalosporin ทุกตัว คือ extended-spectrum β-lactamase แพร่หลายแล้วใน <i>E. coli</i>, Klebsiella และ Proteus</b> ${S.mu}</li>
 <li><b>Carbapenem เคยเป็นหลักของการรักษา</b> แต่<b>การพบเชื้อที่สร้าง carbapenemase ทำให้การใช้ carbapenem และ β-lactam ทุกตัวแบบ empiric ถูกจำกัดในหลายภูมิภาคของโลก</b> ${S.mu}</li>
 <li>โดยทั่วไป<b>resistance พบบ่อยกว่าใน infection ที่ได้จากโรงพยาบาลมากกว่าในชุมชน</b> ${S.mu}</li>
 <li>ข้อที่ต้องรู้เพราะกลับจากสัญชาตญาณ: <b>gastroenteritis จาก Shiga toxin-producing <i>E. coli</i> และจาก Salmonella รักษาตาม symptom ไม่ให้ antibiotic</b> ${S.mu}</li>
 <li>เหตุผลคือ<b>antibiotic อาจยืดการเป็นพาหะในอุจจาระ หรือเพิ่มความเสี่ยงของภาวะแทรกซ้อน เช่น hemolytic uremic syndrome ในเด็ก</b> ${S.mu}</li>
 <li>แต่<b>infection Salmonella Typhi หรือ Salmonella ทั้งระบบต้องรักษา</b> · ยาที่ใช้คือ <b>fluoroquinolone อย่าง ciprofloxacin, chloramphenicol, trimethoprim-sulfamethoxazole หรือ cephalosporin วงกว้าง</b> — แต่<b>resistance ที่เพิ่มขึ้นรวมถึงต่อ fluoroquinolone ทำให้การรักษายุ่งยากขึ้น</b> ${S.mu}</li></ul>
 <h3>Prevention</h3><ul>
 <li><b>การป้องกัน infection จากวงศ์นี้ทำได้ยาก เพราะเชื้อเป็นส่วนใหญ่ของจุลินทรีย์ประจำถิ่นของผู้ป่วยเอง</b> ${S.mu}</li>
 <li>ปัจจัยเสี่ยงที่ควรเลี่ยง: <b>การใช้ antibiotic อย่างไม่จำกัดซึ่งคัดเลือกเชื้อดื้อยา, การทำหัตถการที่ทำลายเยื่อบุโดยไม่ให้ยาป้องกัน และการใช้สายสวนปัสสาวะ</b> ${S.mu}</li>
 <li>ความย้อนแย้ง: <b>ปัจจัยเหล่านี้หลายข้ออยู่ในตัวผู้ป่วยที่เสี่ยงที่สุดอยู่แล้ว</b> คือผู้ที่ immunity บกพร่องและอยู่โรงพยาบาลนาน ${S.mu}</li>
 <li>infection จากภายนอก<b>ควบคุมได้ง่ายกว่าในทางทฤษฎี</b> — แหล่งของ Salmonella นิยามไว้ชัด แต่<b>เชื้ออยู่ทั่วไปในสัตว์ปีกและไข่ จึงทำได้น้อยถ้าไม่ระวังการเตรียมและการแช่เย็นอาหาร</b> ${S.mu}</li>
 <li>Shigella แพร่ในเด็กเล็กเป็นหลัก และ<b>การตัดวงจร fecal-hand-mouth ในกลุ่มนี้ทำได้ยาก</b> — <b>การป้องกันการระบาดได้ผลจริงต้องอาศัยการให้ความรู้และมาตรการควบคุม infection</b> เช่นการล้างมือและการทิ้งผ้าอ้อมและผ้าเปื้อนอย่างถูกต้อง ${S.mu}</li>
 <li><b>วัคซีนสำหรับ <i>Y. pestis</i> ไม่มีจำหน่ายแล้ว</b> แม้เรื่องนี้น่าจะเปลี่ยนไปเพราะความกังวลเรื่องการก่อการร้ายชีวภาพ ${S.mu}</li>
 <li>สำหรับ Salmonella Typhi มี<b>วัคซีนสองชนิด คือ oral live attenuated vaccine และ Vi capsular polysaccharide vaccine</b> ${S.mu}</li>
 <li><b>ทั้งสองชนิดป้องกันได้ 40% ถึง 70% ของผู้รับ</b> และแนะนำให้ผู้เดินทางไปพื้นที่ที่เป็นโรคประจำถิ่น เช่น Africa, Asia และ Latin America ${S.mu}</li>
 <li>ข้อต่างที่ใช้เลือก: <b>Vi capsular vaccine ให้เข็มเดียว แต่ live attenuated vaccine ต้องให้สี่ครั้งในหนึ่งสัปดาห์</b> ${S.mu}</li></ul>`});

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
 ["Alginate","เมือกที่ห่อหุ้มเป็น biofilm · strain mucoid พบมากใน cystic fibrosis",24,368],
 ["LasA และ LasB elastase","ย่อย elastin · ทำลายเนื้อปอดและทำให้เกิด ecthyma gangrenosum · ยังย่อย complement และกด neutrophil",24,428],
 ["Flagella · pili · lipopolysaccharide","เกาะและเคลื่อนที่ · lipid A คือ endotoxin",24,488]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 534")},
notes:()=>`<h3>An opportunist with a long reach</h3><ul>
 <li><i>P. aeruginosa</i> เป็น gram-negative rod ที่<b>ไม่หมักน้ำตาล</b> และ <b>oxidase positive</b> — ซึ่งแยกมันออกจาก Enterobacteriaceae ได้ทันที ${S.mu}</li>
 <li>ผู้ป่วยที่เสี่ยงสูงคือผู้ที่<b>leukocyte ต่ำ immunity บกพร่อง เป็น cystic fibrosis และผู้ป่วยแผลไฟไหม้</b> ${S.mu}</li>
 <li>บาง strain ดูเป็นเมือกเพราะมี <b>polysaccharide capsule</b> มาก และพบบ่อยเป็นพิเศษในผู้ป่วย cystic fibrosis ${S.mu}</li>
 <li><b>Alginate</b> เป็น mucoid exopolysaccharide ที่สร้างเป็นชั้นเด่น · การสร้างมันถูกควบคุมอย่างซับซ้อน และผู้ป่วยโรค respiratory tract เรื้อรังมีแนวโน้มถูก strain mucoid ตั้งรกรากระยะยาว ${S.mu}</li></ul>
 <h3>The pigments do work</h3><ul>
 <li><b>Pyocyanin</b> เป็นเม็ดสีน้ำเงินที่<b>เร่งการสร้าง superoxide และ hydrogen peroxide</b> ซึ่งเป็นรูปของออกซิเจนที่เป็นพิษ · มันยังกระตุ้นการหลั่ง IL-8 จึงดึง neutrophil เข้ามามากขึ้น ${S.mu}</li>
 <li><b>Pyoverdin</b> เป็นเม็ดสีเหลืองเขียวที่เป็น <b>siderophore</b> จับเหล็กมาใช้ · มันยัง<b>ควบคุมการหลั่งปัจจัยก่อโรคอื่นรวมถึง exotoxin A</b> ${S.mu}</li>
 <li><b>Pyorubin</b> เป็นเม็ดสีน้ำตาลแดงที่บางสปีชีส์สร้าง ${S.mu}</li></ul>
 <h3>Exotoxin A has a familiar target</h3><ul>
 <li>Exotoxin A เชื่อว่าเป็นปัจจัยก่อโรคที่สำคัญที่สุดตัวหนึ่ง · มัน<b>หยุดการสร้างโปรตีนด้วยการขวางการต่อสายเปปไทด์</b> — กลไกเดียวกับ diphtheria toxin ${S.mu}</li>
 <li>แต่ toxin ของสองเชื้อนี้<b>ต่างกันทั้งโครงสร้างและทาง immunity</b> และ exotoxin A อ่อนกว่า diphtheria toxin ${S.mu}</li>
 <li>มันน่าจะเป็นต้นเหตุของ<b>เนื้อตายในแผลไฟไหม้ ความเสียหายของกระจกตา และการทำลายเนื้อปอดใน infection เรื้อรัง</b> ${S.mu}</li></ul>
 <h3>Elastases and proteases</h3><ul>
 <li><b>LasA</b> เป็น serine protease และ <b>LasB</b> เป็น zinc metalloprotease · ทั้งคู่ทำงานเสริมกันในการย่อย elastin ${S.mu}</li>
 <li>ผลคือความเสียหายของเนื้อปอดและ<b>รอยโรคเลือดออกที่เรียก ecthyma gangrenosum</b> ซึ่งพบใน infection ที่กระจายทั่วร่างกาย ${S.mu}</li>
 <li>เอนไซม์เหล่านี้ยัง<b>ย่อยองค์ประกอบของ complement และกดการเคลื่อนที่กับการทำงานของ neutrophil</b> ${S.mu}</li>
 <li>infection เรื้อรังมีลักษณะเด่นคือมี antibody ต่อ LasA และ LasB แล้ว<b>ตกตะกอนเป็น immune complex ใน tissue</b> ${S.mu}</li></ul>
 <h3>Why it is everywhere, and why it is not worse</h3><ul>
 <li>Pseudomonas อยู่ในดิน เศษอินทรีย์ที่กำลังย่อยสลาย พืชและน้ำ · และ<b>อยู่ทั่วโรงพยาบาลในแหล่งที่ชื้น</b> เช่นอาหาร ดอกไม้ตัด อ่างล้างมือ ส้วม ไม้ถูพื้น อุปกรณ์ respiratory therapy และ dialysis <b>และแม้แต่ในน้ำยาฆ่าเชื้อ</b> ${S.mu}</li>
 <li><b>การเป็นพาหะถาวรในคนพบไม่บ่อย</b> ยกเว้นในผู้ป่วยในโรงพยาบาลและผู้ที่ immunity บกพร่อง ${S.mu}</li>
 <li>เหตุที่กระจายได้กว้างคือ<b>ความต้องการอาหารที่ง่ายและความยืดหยุ่นทางโภชนาการ</b> — ใช้สารอินทรีย์หลายชนิดเป็นแหล่ง carbon และ nitrogen และ<b>บาง strain โตได้ในน้ำกลั่นโดยใช้สารอาหารปริมาณน้อย</b> ${S.mu}</li>
 <li>ทนอุณหภูมิ <b>4 °C ถึง 42 °C</b> และดื้อทั้ง antibiotic และน้ำยาฆ่าเชื้อหลายชนิด ${S.mu}</li>
 <li>เมื่อรวมทุกอย่างแล้ว <b>น่าประหลาดใจที่มันไม่ใช่เชื้อก่อโรคที่พบบ่อยกว่านี้</b> — คำตอบคือ<b>มันก่อโรคแบบ opportunistic</b> คือจำกัดอยู่ในผู้ที่ได้ antibiotic วงกว้างหรือมีกลไกป้องกันบกพร่อง ${S.mu}</li>
 <li>และ<b>การแสดงออกของปัจจัยก่อโรคถูกควบคุมด้วยระบบส่งสัญญาณตามความหนาแน่นของเซลล์ คือ quorum sensing</b> ซึ่งเองก็ถูกกำกับโดยปัจจัยของ host เช่นการมี serum และ cytokine ${S.mu}</li>
 <li><i>P. aeruginosa</i> มี<b>จีโนมที่ใหญ่ที่สุดกลุ่มหนึ่งในแบคทีเรีย — 5567 ยีน รวม 468 ยีนกำกับการทำงาน</b> ซึ่งอธิบายความสามารถปรับตัวและโตได้ในสภาพแวดล้อมและในที่ที่มี antibiotic ${S.mu}</li></ul>
 <h3>Physiology at the bench</h3><ul>
 <li>รูปร่าง: <b>gram-negative rod ตรงหรือโค้งเล็กน้อย ขนาด 0.5–1.0 × 1.5–5.0 μm เคลื่อนที่ได้ และเรียงเป็นคู่</b> — ชื่อสกุลมาจากคู่ที่ดูเหมือนเซลล์เดียว ${S.mu}</li>
 <li>ใช้ carbohydrate ผ่าน <b>aerobic respiration โดยมี oxygen เป็นตัวรับอิเล็กตรอนตัวสุดท้าย</b> ${S.mu}</li>
 <li>แม้เรียกว่า obligate aerobe แต่<b>โตแบบไม่ใช้อากาศได้โดยใช้ nitrate หรือ arginine เป็นตัวรับอิเล็กตรอนแทน</b> ${S.mu}</li>
 <li><b>Cytochrome oxidase ซึ่งตรวจได้ใน 5 นาที คือสิ่งที่แยกมันจาก Enterobacteriaceae และจาก Stenotrophomonas</b> ${S.mu}</li>
 <li>เพาะง่ายบน <b>blood agar และ MacConkey agar</b> · แต่ต้องการอากาศ จึง<b>โตเฉพาะที่รอยต่อระหว่างน้ำเลี้ยงกับอากาศเมื่อเลี้ยงใน broth</b> ${S.mu}</li>
 <li>การระบุขั้นต้นอาศัย<b>โคโลนีแบนขอบแผ่กระจาย, β-hemolysis, เม็ดสีเขียวจาก pyocyanin กับ pyoverdin และกลิ่นหวานเหมือนองุ่น</b> ${S.mu}</li>
 <li>จุดที่ต้องระวัง: <b>การเห็น gram-negative rod บางเรียงเดี่ยวและเป็นคู่เพียงชี้แนะ ไม่ใช่ข้อยุติ</b> เพราะ Burkholderia, Stenotrophomonas และ pseudomonad อื่นรูปร่างเหมือนกัน ${S.mu}</li>
 <li>การระบุ <i>P. aeruginosa</i> ขั้นสุดท้ายค่อนข้างง่าย แต่<b>สปีชีส์อื่นของ Pseudomonas อาจต้องใช้ชุดทดสอบทางสรีรวิทยาจำนวนมาก</b> ${S.mu}</li></ul>
 <h3>Four adhesins, two of which also move it</h3><ul>
 <li>องค์ประกอบผิวที่ช่วยเกาะมี 4 อย่าง — <b>flagella, pili, lipopolysaccharide และ alginate</b> ${S.mu}</li>
 <li><b>Flagella และ pili ยังทำให้เชื้อเคลื่อนที่</b> และ<b>ส่วน lipid A ของ lipopolysaccharide คือฤทธิ์ endotoxin</b> ${S.mu}</li>
 <li><b>Alginate ป้องกันทั้งการถูกกลืนโดย phagocyte และการถูกฆ่าโดย antibiotic</b> · ยีนที่คุมมันถูกเปิดในผู้ป่วย cystic fibrosis และโรคปอดเรื้อรังอื่น ซึ่งเป็นกลุ่มที่พร้อมถูก mucoid strain ตั้งรังระยะยาว ${S.mu}</li></ul>
 <h3>The rest of the toolkit</h3><ul>
 <li><b>Phospholipase C</b> เป็น <b>heat-labile hemolysin</b> ที่ย่อยไขมันและ lecithin ช่วยทำลาย tissue · บทบาทที่แน่ชัดใน respiratory tract และ urinary tract ยังไม่ชัด แต่<b>มีความสัมพันธ์ที่ยอมรับแล้วระหว่างการสร้าง hemolysin กับการเกิดโรค</b> ${S.mu}</li>
 <li><b>Alkaline protease</b> ช่วยทำลาย tissue และการแพร่ของเชื้อเหมือน elastase และยัง<b>ขัดการตอบสนองของ immunity</b> ${S.mu}</li>
 <li><b>Exoenzyme S และ T</b> ถูกส่งเข้าเซลล์เป้าหมายโดย <b>type III secretion system</b> ทำให้ <b>epithelial cell เสียหาย</b> ช่วยการแพร่ การรุกและเนื้อตาย · <b>ความเป็นพิษนี้เกิดจากการจัดเรียง actin ใหม่</b> ${S.mu}</li>
 <li>ข้อสรุปที่ผู้เชี่ยวชาญส่วนใหญ่เห็นร่วมกัน: <b>ปัจจัยก่อโรคหลายอย่างต้องทำงานร่วมกันเชื้อจึงก่อโรคได้</b> ${S.mu}</li></ul>
 <h3>Three kinds of resistance, one of which the laboratory cannot see</h3><ul>
 <li><b>Intrinsic resistance</b> มาจาก<b>อัตราการเคลื่อนของยาผ่านรูใน outer membrane ที่ต่ำ รวมกับการขับยาออกอย่างรวดเร็วโดย efflux pump ที่เปิดอยู่เป็นปกติ</b> ${S.mu}</li>
 <li><b>Acquired resistance</b> ต่อยาเพิ่มเติมอย่าง aminoglycoside และ β-lactam มาจาก<b>การรับยีนดื้อยาบน plasmid และ genetic element อื่น หรือการกลายพันธุ์ที่เพิ่มการแสดงออกของยีนดื้อยา</b> ${S.mu}</li>
 <li><b>Adaptive resistance</b> ถูกเหนี่ยวนำเมื่อเชื้อเจอสิ่งเร้าจากสิ่งแวดล้อมหรือยาบางตัว — <b>การสร้าง biofilm ในปอดของผู้ป่วย cystic fibrosis หรือบนผิว catheter เปิดยีนกำกับที่ทำให้แสดงความดื้อยา</b> ${S.mu}</li>
 <li>อีกตัวอย่าง: <b>การสัมผัส β-lactam บางตัวอย่าง ceftazidime กระตุ้นการแสดงออกของยีน ampC ซึ่งทำลายฤทธิ์ของ β-lactam หลายตัว</b> ${S.mu}</li>
 <li>ข้อจำกัดที่ต้องรู้: <b>การทดสอบความไวในหลอดทดลองจับได้เฉพาะ intrinsic และ acquired resistance แต่แทบไม่สามารถทำนาย adaptive resistance ได้</b> ${S.mu}</li>
 <li>เรื่องการรักษาจึงน่าหนักใจสองชั้น — <b>เชื้อดื้อยาส่วนใหญ่ และผู้ป่วยที่ immunity บกพร่องช่วยเสริมฤทธิ์ยาไม่ได้</b> ${S.mu}</li>
 <li>โดยทั่วไป<b>ต้องใช้ยาที่ออกฤทธิ์หลายตัวร่วมกันในผู้ป่วยที่ติดเชื้อรุนแรง</b> เช่น aminoglycoside ร่วมกับ β-lactam · <b>การใช้ยาเดี่ยวมักไม่ได้ผลและคัดเลือก strain ดื้อยา</b> ${S.mu}</li>
 <li>แต่สิ่งนี้ทำได้ยากขึ้น เพราะ<b>หลาย strain ปัจจุบันดื้อ β-lactam ทุกตัวรวมถึง carbapenem, ดื้อ aminoglycoside และดื้อ colistin</b> ${S.mu}</li>
 <li>การควบคุมในโรงพยาบาล: <b>การพยายามกำจัดเชื้อออกจากสิ่งแวดล้อมแทบไร้ประโยชน์</b> เพราะมันอยู่ทั่วระบบน้ำ — ต้องไปลงที่<b>การกันการปนเปื้อนของอุปกรณ์ปลอดเชื้อ เช่นเครื่องช่วยหายใจและเครื่องฟอกไต และการกันการแพร่ข้ามผู้ป่วยโดยบุคลากร</b> ${S.mu}</li></ul>`});

SEC.push({id:"pseudo-dis",k:"d",t:"Pseudomonas aeruginosa by site",mm:"P. aeruginosa diseases",leg:[],
draw:()=>tbl(["Site","Spectrum","The setting that allows it"],[
 ["Lower respiratory tract","asymptomatic colonization · tracheobronchitis · necrotizing bronchopneumonia ที่มี microabscess และเนื้อตาย — อัตราตายสูงถึง 70%","cystic fibrosis · โรคปอดเรื้อรังอื่น · neutropenia · antibiotic วงกว้างก่อนหน้า · เครื่องช่วยหายใจ"],
 ["Burn wound","colonization แล้วหลอดเลือดเฉพาะที่เสียหาย เนื้อตาย และ bacteremia","ผิวแผลที่ชื้น และ neutrophil เข้าไปในแผลไม่ได้"],
 ["Hair follicle","folliculitis — ตุ่มแดงคันแล้วกลายเป็นตุ่ม pus","การแช่ในน้ำที่ปนเปื้อน เช่น hot tub, whirlpool, สระว่ายน้ำ"],
 ["Skin · nail","infection ซ้อนใน acne และหลังกำจัดขนขา · infection ที่เล็บมือ","มือที่สัมผัสน้ำบ่อย หรือเข้าร้านทำเล็บ"],
 ["Bone and cartilage","osteochondritis ของเท้า — เป็นสาเหตุที่พบบ่อยที่สุด","บาดแผลทะลุ เช่นเหยียบตะปู"],
 ["Urinary tract","infectionurinary tract","สายสวนปัสสาวะคาระยะยาว ร่วมกับ antibiotic หลายรอบที่คัดเลือกเชื้อดื้อยา"],
 ["External ear","external otitis หรือ swimmer's ear · malignant external otitis ที่ลุกลามเข้า tissue ทำลาย cranial nerve และกระดูก","การว่ายน้ำ · รูปรุนแรงพบในผู้ป่วย diabetes และผู้สูงอายุ"],
 ["Eye","corneal ulcer ที่ลุกลามเร็วจนคุกคามการมองเห็น","cornea บาดเจ็บก่อน เช่น contact lens ครูด แล้วสัมผัสน้ำที่ปนเปื้อน"],
 ["Bloodstream","bacteremia · ecthyma gangrenosum · endocarditis ที่ลิ้น tricuspid","neutropenia · diabetes mellitus · แผลไฟไหม้กว้าง · hematologic malignancy · endocarditis พบในผู้ใช้ยาฉีด"]]),
notes:()=>`<h3>What makes the ear and eye infections different</h3><ul>
 <li><b>External otitis</b> จัดการได้ด้วย antibiotic ทาและสารที่ทำให้แห้ง ${S.mu}</li>
 <li>แต่ <b>malignant external otitis</b> เป็นรูปที่ก่อโรคแรง พบเป็นหลักใน<b>ผู้ป่วย diabetes และผู้สูงอายุ</b> · มัน<b>รุกเข้า tissue ใต้ลงไป ทำลาย cranial nerve และกระดูก และคุกคามชีวิต</b> จึง<b>ต้องใช้ทั้ง antibiotic เชิงรุกและการผ่าตัด</b> ${S.mu}</li>
 <li><i>P. aeruginosa</i> ยังสัมพันธ์กับ <b>chronic otitis media</b> ${S.mu}</li>
 <li>infection ที่ตาเกิดเป็น<b>ลำดับสองขั้นเสมอ — cornea บาดเจ็บก่อน แล้วจึงสัมผัสเชื้อในน้ำที่ปนเปื้อน</b> ${S.mu}</li></ul>
 <h3>Bacteremia: why the mortality is higher</h3><ul>
 <li>Bacteremia จาก <i>P. aeruginosa</i> <b>แยกจาก gram-negative ตัวอื่นทางคลินิกไม่ได้</b> ${S.mu}</li>
 <li>แต่<b>อัตราตายสูงกว่า</b> จากสามเหตุ — <b>เชื้อชอบผู้ป่วยที่ immunity บกพร่อง, strain ดื้อยารักษายาก และตัวเชื้อก่อโรคแรงอยู่แล้ว</b> ${S.mu}</li>
 <li>bacteremia ส่วนใหญ่<b>มีต้นทางจาก respiratory tract ส่วนล่าง urinary tract และ skin กับ tissue อ่อน</b> โดยเฉพาะแผลไฟไหม้ ${S.mu}</li>
 <li><b>Ecthyma gangrenosum</b> พบในผู้ป่วยส่วนน้อย · เริ่มเป็น<b>ตุ่มน้ำบนฐานแดงแล้วกลายเป็นเลือดออก เนื้อตาย และเป็นแผล</b> ${S.mu}</li>
 <li>สิ่งที่เห็นใต้กล้องจุลทรรศน์อธิบายทุกอย่าง: <b>เชื้อจำนวนมาก, หลอดเลือดถูกทำลายซึ่งอธิบายลักษณะเลือดออก และไม่มี neutrophil เลย</b> ตามที่คาดได้ในผู้ป่วย neutropenia ${S.mu}</li>
 <li><b>Pseudomonas endocarditis พบไม่บ่อย</b> และพบเป็นหลักใน<b>ผู้ใช้ยาเสพติดชนิดฉีด</b> ซึ่งรับเชื้อจากอุปกรณ์ที่ปนเปื้อนเชื้อที่มาทางน้ำ ${S.mu}</li>
 <li><b>ลิ้น tricuspid มักเป็นที่ติดเชื้อ</b> · ดำเนินโรคเรื้อรังแต่<b>พยากรณ์โรคดีกว่า infection ที่ลิ้น aortic หรือ mitral</b> ${S.mu}</li></ul>
 <h3>The two conditions behind almost every case</h3><ul>
 <li>เชื้อยังก่อโรคใน gastrointestinal tract ระบบประสาทส่วนกลาง และระบบกระดูกและ muscle ได้ ${S.mu}</li>
 <li>เงื่อนไขที่โรคเกือบทุกรูปต้องมีมีเพียงสองข้อ — <b>เชื้ออยู่ในแหล่งที่ชื้น</b> และ <b>กลไกป้องกันของ host บกพร่อง</b> เช่น skin บาดเจ็บ จุลินทรีย์ประจำถิ่นถูกกวาดด้วย antibiotic หรือ neutropenia ${S.mu}</li>
 <li>ตัวเลขภาระโรค: ประมาณว่า <i>P. aeruginosa</i> เป็นต้นเหตุของ<b>infection ที่เกี่ยวกับการรักษาพยาบาลกว่า 50,000 รายต่อปีในสหรัฐอเมริกา และการตายราว 440 ราย</b> ${S.mu}</li>
 <li>ข้อที่ใช้ตีความผล culture: <b>การ culture นี้ได้จากแหล่งในสิ่งแวดล้อมอย่างอ่างล้างมือหรือพื้นแทบไม่มีความหมาย</b> เว้นแต่มีหลักฐานทางระบาดวิทยาว่าจุดนั้นเป็นแหล่งของ infection ${S.mu}</li>
 <li>และ<b>การเพาะได้จากผู้ป่วยในโรงพยาบาลน่ากังวล แต่ปกติไม่พอให้เริ่มรักษา เว้นแต่มีหลักฐานว่าเป็นโรค</b> — อาจเป็นเพียงการตั้งรังชั่วคราวหรือการปนเปื้อน specimen ${S.mu}</li>
 <li><b>โรคนี้ไม่มีความชุกตามฤดูกาล</b> ${S.mu}</li></ul>`});

SEC.push({id:"acineto-burk",k:"d",t:"Acinetobacter and Burkholderia",mm:"Other non-fermenters",leg:[],
draw:()=>tbl(["Organism","Where it lives","Why it matters"],[
 ["Acinetobacter baumannii","พื้นผิวในโรงพยาบาล · ทนความแห้งได้ดี","pneumonia จากเครื่องช่วยหายใจและ infection ในกระแสเลือด · ดื้อยาหลายขนานจนบาง strain เหลือทางเลือกน้อยมาก"],
 ["Burkholderia pseudomallei","ดิน น้ำ และพืช · เป็นโรคประจำถิ่นในเอเชียตะวันออกเฉียงใต้ อินเดีย และแอฟริกา","melioidosis — ตั้งแต่ตั้งรกรากโดยไม่มี symptom จนถึง abscess ในปอด · ผู้ที่ดื่มสุรา เบาหวาน โรคไตหรือโรคปอดเรื้อรังเสี่ยงที่สุด"],
 ["Burkholderia cepacia complex","สิ่งแวดล้อมชื้นในโรงพยาบาล","infection ปอดในผู้ป่วย cystic fibrosis · ดื้อยาโดยธรรมชาติหลายตัว"]]),
notes:()=>`<h3>Melioidosis is a local disease</h3><ul>
 <li><i>B. pseudomallei</i> เป็น <b>saprophyte ที่อยู่ในดิน น้ำ และพืช</b> และเป็นโรคประจำถิ่นในเอเชียตะวันออกเฉียงใต้ อินเดีย และแอฟริกา ${S.mu}</li>
 <li>คนรับเชื้อจากการ<b>สูดเข้าไป</b> หรือพบน้อยกว่านั้นจากการที่เชื้อ<b>ผ่าน skin เข้าไป</b> ${S.mu}</li>
 <li>ผู้สัมผัสส่วนใหญ่<b>ไม่มี symptom</b> · แต่ผู้ที่ดื่มสุรา ผู้เป็นเบาหวาน และผู้ที่มีโรคไตหรือโรคปอดเรื้อรังเสี่ยงต่อ infection ฉวยโอกาส ${S.mu}</li>
 <li>ชื่อโรคมาจาก melis ที่แปลว่า distemper กับ eidos ที่แปลว่าคล้าย ${S.mu}</li>
 <li><i>B. pseudomallei</i> เคยถูกใช้ในโครงการอาวุธชีวภาพ · การแยกเชื้อได้จากผู้ป่วยจึงต้องแจ้งหน่วยงานสาธารณสุข และการ culture เพื่อวินิจฉัยควรทำในห้องปฏิบัติการที่ได้รับอนุญาต ${S.mu}</li></ul>
 <h3>What unites the non-fermenters</h3><ul>
 <li>ทั้งหมด<b>ไม่หมักน้ำตาล</b> ซึ่งแยกพวกมันจาก Enterobacteriaceae บนจานทดสอบชุดแรก ${S.mu}</li>
 <li>พวกมันอยู่ใน<b>สิ่งแวดล้อม โดยเฉพาะที่ชื้น</b> ไม่ใช่เชื้อประจำถิ่นในลำไส้ ${S.mu}</li>
 <li>และพวกมัน<b>ดื้อยาโดยธรรมชาติมากกว่า</b> ซึ่งเป็นเหตุผลที่กลุ่มนี้ครองหอผู้ป่วยวิกฤต ${S.mu}</li></ul>
 <h3>Burkholderia cepacia complex</h3><ul>
 <li>ปี 1992 <b>เจ็ดสปีชีส์ที่เคยอยู่ใน Pseudomonas ถูกย้ายไปสกุลใหม่ Burkholderia</b> ${S.mu}</li>
 <li>ต่อมาพบว่าสปีชีส์ที่พบบ่อยที่สุดคือ <i>B. cepacia</i> <b>จริง ๆ เป็นกลุ่มของ 17 สปีชีส์</b> · เพราะห้องปฏิบัติการส่วนใหญ่แยกสปีชีส์ย่อยไม่ได้ จึงเรียกรวมว่า <b><i>B. cepacia</i> complex</b> ${S.mu}</li>
 <li>ชื่อ cepacia แปลว่า<b>เหมือนหัวหอม</b> เพราะ strain ดั้งเดิมแยกได้จากหัวหอมเน่า ${S.mu}</li>
 <li>เหมือน <i>P. aeruginosa</i> คือ<b>ตั้งรังบนผิวที่ชื้นในสิ่งแวดล้อมได้หลายแบบและก่อโรคแบบ opportunistic</b> ${S.mu}</li>
 <li>ผู้ที่เสี่ยงต่อ infection ในปอดเป็นพิเศษคือ<b>ผู้ป่วย cystic fibrosis และ chronic granulomatous disease</b> ซึ่งเป็นภาวะ immunity บกพร่องปฐมภูมิที่<b>leukocyte ฆ่าเชื้อในเซลล์ได้บกพร่อง</b> ${S.mu}</li>
 <li>ข้อที่มีผลต่อการตัดสินใจจริง: <b>การที่ respiratory tract ของผู้ป่วย cystic fibrosis ถูก <i>B. cepacia</i> complex ตั้งรังมีพยากรณ์โรคแย่มาก จนเป็นข้อห้ามของการปลูกถ่ายปอด</b> ${S.mu}</li>
 <li>นอกปอดยังก่อ<b>infectionurinary tract ในผู้ที่คาสายสวน และ septicemia</b> โดยเฉพาะจาก intravascular catheter ที่ปนเปื้อน ${S.mu}</li>
 <li>แต่<b>นอกเหนือจาก infection ในปอด <i>B. cepacia</i> complex ก่อโรคได้ค่อนข้างอ่อน และมักไม่ทำให้ตาย</b> ${S.mu}</li>
 <li>ข้อที่แยกสกุลนี้จาก <i>P. aeruginosa</i> ได้ทันที: <b>Burkholderia ไวต่อ trimethoprim-sulfamethoxazole ขณะที่ <i>P. aeruginosa</i> ดื้อทั้งหมด</b> ${S.mu}</li>
 <li>ข้อควรระวัง: <b>แม้ในหลอดทดลองจะดูไวต่อ piperacillin, cephalosporin วงกว้างและ ciprofloxacin แต่การตอบสนองทางคลินิกมักไม่ดี</b> ${S.mu}</li></ul>
 <h3>Melioidosis: the rest of the picture</h3><ul>
 <li><b>เป็นโรคประจำถิ่นใน Southeast Asia, India, Africa และ Australia</b> ${S.mu}</li>
 <li>การรับเชื้อ<b>ทาง skin</b>แสดงเป็น<b>infectionskin เป็น pus เฉพาะที่ ร่วมกับ regional lymphadenitis, fever และ malaise</b> ${S.mu}</li>
 <li>รูปนี้<b>อาจหายเองหรือลุกลามเร็วเป็น sepsis ที่ควบคุมไม่ได้</b> ${S.mu}</li>
 <li>การรับเชื้อ<b>ทางการหายใจ</b>ให้โรคที่กว้างจาก<b>bronchitis เบา ๆ ถึง necrotizing pneumonia</b> · และ<b>อาจเกิดโพรงในปอดแล้วลุกลามเป็น sepsis และตายได้ถ้าไม่ได้ยาที่เหมาะสม</b> ${S.mu}</li>
 <li>ชื่อโรคเต็ม ๆ มาจาก melis คือ distemper, eidos คือคล้าย และ osis คือภาวะ — <b>แปลว่าโรคที่คล้าย equine distemper หรือ glanders ซึ่งเกิดจาก <i>B. mallei</i></b> ${S.mu}</li>
 <li>ข้อปฏิบัติในห้องปฏิบัติการ: <b>เชื้อนี้ติดต่อได้สูงคล้าย <i>Mycobacterium tuberculosis</i></b> · งานกับเชื้อจำกัดอยู่ในห้องปฏิบัติการที่ได้รับอนุญาต และ<b>การแยกเชื้อได้จากผู้ป่วยเป็นเหตุให้หน่วยงานสาธารณสุขเข้ามาดำเนินการ</b> ${S.mu}</li></ul>
 <h3>Acinetobacter</h3><ul>
 <li>ชื่อมาจาก akinetos ที่แปลว่า<b>เคลื่อนที่ไม่ได้</b> รวมกับ bactrum ที่แปลว่าท่อน ${S.mu}</li>
 <li>รูปร่างและสรีรวิทยา: <b>strictly aerobic, oxidase negative, gram-negative coccobacilli อ้วน</b> — <b>oxidase negative คือสิ่งที่แยกมันจาก Pseudomonas และ Moraxella</b> ${S.mu}</li>
 <li>เป็น saprophyte ที่พบทั้งในธรรมชาติและในโรงพยาบาล และ<b>รอดได้ทั้งบนผิวที่ชื้นอย่างเครื่องช่วยหายใจ และบนผิวที่แห้งอย่าง skin คน ซึ่งเป็นคุณสมบัติที่ผิดปกติสำหรับ gram-negative rod</b> ${S.mu}</li>
 <li>เป็น<b>จุลินทรีย์ประจำถิ่นของ oropharynx ในคนสุขภาพดีจำนวนน้อย และเพิ่มจำนวนมากขึ้นได้ระหว่างอยู่โรงพยาบาล</b> ${S.mu}</li>
 <li>สกุลนี้แบ่งเป็นสองกลุ่ม — <b>กลุ่มที่ oxidize glucose ซึ่ง <i>A. baumannii</i> พบบ่อยที่สุด</b> และ<b>กลุ่มที่ไม่ oxidize glucose ซึ่ง <i>A. lwoffii</i> และ <i>A. haemolyticus</i> พบบ่อยที่สุด</b> · <b>infection ในคนส่วนใหญ่เกิดจาก <i>A. baumannii</i></b> ${S.mu}</li>
 <li>ก่อโรคใน respiratory tract urinary tract บาดแผล และ septicemia · ผู้ที่เสี่ยงคือ<b>ผู้ได้ antibiotic วงกว้าง ผู้ฟื้นจากการผ่าตัด และผู้ที่ใช้เครื่องช่วยหายใจ</b> · <b>บาดแผลจากการสู้รบก็เป็นที่มาที่รู้จัก</b> ${S.mu}</li>
 <li>ปัญหาในปัจจุบัน: <b>infection ที่แผลและในปอดในโรงพยาบาลกลายเป็นปัญหาใหญ่ เพราะหลายรายเกิดจาก strain ที่ดื้อยาเกือบทุกตัวรวมถึง carbapenem</b> — การรักษาต้องอาศัยผลความไวในหลอดทดลอง ${S.mu}</li>
 <li>ข้อควรระวังเฉพาะ: <b>เมื่อเลือก carbapenem หรือ colistin ต้องระวังว่าการทดสอบในหลอดทดลองอาจตรวจไม่พบ heteroresistant strain</b> คือประชากรย่อยที่ดื้อยาสูง ${S.mu}</li></ul>`});
SEC.push({id:"steno-morax",k:"d",t:"Stenotrophomonas maltophilia and Moraxella catarrhalis",mm:"Stenotrophomonas · Moraxella",leg:[],
draw:()=>tbl(["","Stenotrophomonas maltophilia","Moraxella catarrhalis"],[
 ["Gram stain","gram-negative rod","gram-negative diplococci"],
 ["Oxidase","negative","positive"],
 ["Host","ผู้ป่วยที่ทรุดโทรมและกลไกป้องกันบกพร่อง","ผู้สูงอายุที่มีโรคปอดเรื้อรัง และคนที่สุขภาพดีมาก่อน"],
 ["Disease","bacteremia และ pneumonia เป็นหลัก","bronchitis · bronchopneumonia · sinusitis · otitis"],
 ["Resistance that defines it","ดื้อ carbapenem ทุกตัวอย่างสม่ำเสมอ ซึ่งต่างจาก gram-negative rod ส่วนใหญ่","สร้าง β-lactamase เกือบทุก strain จึงดื้อ penicillin"],
 ["What works","trimethoprim-sulfamethoxazole · หรือ ciprofloxacin ร่วมกับ ticarcillin-clavulanate หรือ ceftazidime","cephalosporin · erythromycin · tetracycline · trimethoprim-sulfamethoxazole · penicillin ร่วมกับ β-lactamase inhibitor"]]),
notes:()=>`<h3>Stenotrophomonas maltophilia</h3><ul>
 <li>ชื่อสกุลมาจาก stenos คือแคบ, trophos คือผู้กิน และ monas คือหน่วย — <b>หมายถึงแบคทีเรียแคบที่ต้องการสารตั้งต้นน้อยในการโต</b> · ชื่อสปีชีส์แปลว่า<b>เพื่อนของ malt</b> ${S.mu}</li>
 <li>ประวัติการจัดจำแนกยาวนาน: <b>เคยอยู่ใน Pseudomonas แล้วย้ายไป Xanthomonas แล้วจึงมาอยู่ Stenotrophomonas</b> ${S.mu}</li>
 <li>เป็น opportunistic pathogen ที่ก่อโรคใน<b>ผู้ป่วยที่ทรุดโทรมและมีกลไกป้องกันบกพร่อง</b> ${S.mu}</li>
 <li>เหตุผลที่กลุ่มเสี่ยงชัดมาก: <b>มันดื้อ β-lactam และ aminoglycoside ที่ใช้บ่อยส่วนใหญ่</b> จึง<b>ผู้ที่ได้ยากลุ่มนี้ระยะยาวเสี่ยงที่สุด</b> ${S.mu}</li>
 <li>infection ในโรงพยาบาลที่พบบ่อยที่สุดคือ <b>bacteremia และ pneumonia</b> ซึ่ง<b>ทั้งคู่สัมพันธ์กับภาวะแทรกซ้อนและการตายในอัตราสูง</b> ${S.mu}</li>
 <li>ต้นทางที่สืบได้: <b>intravenous catheter ที่ปนเปื้อน, น้ำยาฆ่าเชื้อ, อุปกรณ์เครื่องช่วยหายใจ และเครื่องทำน้ำแข็ง</b> ${S.mu}</li>
 <li>ข้อที่สอบถามบ่อยเพราะกลับด้านจากที่คาด: <b>ต่างจาก gram-negative rod ส่วนใหญ่ Stenotrophomonas ดื้อ carbapenem อย่างสม่ำเสมอ</b> ทั้ง imipenem, meropenem, ertapenem และ doripenem ${S.mu}</li>
 <li>และ<b>มักไวต่อ trimethoprim-sulfamethoxazole</b> แม้จะมีรายงานการดื้อเพิ่มขึ้นในบางการศึกษา ${S.mu}</li></ul>
 <h3>Moraxella catarrhalis</h3><ul>
 <li>ชื่อสกุลตั้งตาม <b>Morax จักษุแพทย์ชาวสวิสผู้พบสปีชีส์นี้เป็นคนแรก</b> · ชื่อสปีชีส์มาจาก catarrhus ที่แปลว่าไหลลง ซึ่งหมายถึงการอักเสบของเยื่อเมือก respiratory tract ${S.mu}</li>
 <li>สกุลนี้ก็ถูกจัดระเบียบใหม่จากการวิเคราะห์กรดนิวคลีอิกเช่นกัน และ<b><i>M. catarrhalis</i> เป็นเชื้อก่อโรคที่สำคัญที่สุดในสกุล</b> ${S.mu}</li>
 <li>เป็น <b>strictly aerobic, oxidase-positive, gram-negative diplococci</b> — คือ<b>รูปร่างเหมือน Neisseria</b> ${S.mu}</li>
 <li>เป็นสาเหตุที่พบบ่อยของ <b>bronchitis และ bronchopneumonia ในผู้สูงอายุที่มีโรคปอดเรื้อรัง</b> ${S.mu}</li>
 <li>ส่วน <b>sinusitis และ otitis พบบ่อยที่สุดในคนที่เคยสุขภาพดี</b> ${S.mu}</li>
 <li><b>เชื้อส่วนใหญ่สร้าง β-lactamase และดื้อ penicillin</b> ${S.mu}</li>
 <li>แต่<b>ไวต่อยาอื่นเกือบทุกตัวอย่างสม่ำเสมอ</b> — cephalosporin, erythromycin, tetracycline, trimethoprim-sulfamethoxazole และ penicillin ที่ใช้ร่วมกับ β-lactamase inhibitor อย่าง clavulanic acid ${S.mu}</li></ul>`});


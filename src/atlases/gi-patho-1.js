/* ================= Gastrointestinal Pathology I · Oral cavity, Esophagus & Stomach =================
   First Aid Step 1 2025 (GI pathology: oral → salivary → esophagus → stomach → PUD → GI bleeding) order
   Robbins & Cotran 10e Ch 16 (oral cavity, salivary glands) + Ch 17 (esophagus, stomach) · Harrison 22e Ch 51 (GI bleeding)
   FA Step 2 CK (dysphagia, GI bleeding work-up) · drawings are original schematics. */
//@include _cvs-patho-helpers.js
//@include _endo-patho-helpers.js
//@include _gi-patho-helpers.js
Object.assign(GN,{a:"Oral cavity & salivary glands",b:"Esophagus",c:"Stomach & duodenum"});
Object.assign(ST,{ol:"aph",sg:"pleo",ac:"ach",hh:"slide",ez:"reflux",bs:"2",et:"mw",dy:"ach",ec:"scc",gt:"hp",mn:"men",gc:"int",pu:"duo",uc:"post",gb:"upper",gp:"fgp"});

/* ---------- 1. oral lesions ---------- */
const OL={aph:{n:"Aphthous ulcer (canker sore)",c:"#D9822B",at:[150,118],f:"ulcer",R:["แผลตื้น เจ็บ มีขอบแดงรอบ คลุมด้วย exudate บาง ๆ สีเทาเหลือง","พบบ่อย (~40% ของประชากร) มากในช่วงอายุ 20 ปีแรก · เป็นซ้ำได้","สัมพันธ์กับ celiac disease, IBD และ Behçet disease","หายเองใน 7–10 วัน · ไม่ใช่รอยโรคก่อนมะเร็ง"]},
 leuko:{n:"Leukoplakia",c:"#8C8C9C",at:[188,150],f:"white",R:["ปื้นขาวที่ขูดไม่ออก และอธิบายด้วยโรคอื่นไม่ได้","5–25% เป็นรอยโรคก่อนมะเร็ง → ต้อง biopsy ทุกราย","ปัจจัยเสี่ยง: บุหรี่ เคี้ยวยาสูบ/หมาก แอลกอฮอล์","ต่างจาก candidiasis ที่ขูดออกได้"]},
 eryth:{n:"Erythroplakia",c:"#C2334A",at:[120,152],f:"red",R:["ปื้นแดงนุ่มเหมือนกำมะหยี่ อาจกร่อน · พบน้อยกว่า leukoplakia","~90% เป็น severe dysplasia, CIS หรือมะเร็งระยะต้นแล้ว","อันตรายกว่า leukoplakia มาก"]},
 hairy:{n:"Hairy leukoplakia",c:"#7A5BC7",at:[206,126],f:"hairy",R:["ปื้นขาวเป็นริ้วตั้ง ที่ขอบข้างลิ้น","เกิดจาก EBV ในผู้ภูมิคุ้มกันบกพร่อง (HIV)","ไม่ใช่รอยโรคก่อนมะเร็ง"]},
 scc:{n:"Squamous cell carcinoma",c:"#5B3E8C",at:[184,158],f:"mass",R:["มะเร็งช่องปากส่วนใหญ่เป็น SCC · ตำแหน่งบ่อย: ขอบข้างลิ้น พื้นปาก","ช่องปาก: บุหรี่ + แอลกอฮอล์ · oropharynx (ทอนซิล โคนลิ้น): HPV-16 (p16 ⊕) พยากรณ์ดีกว่า","field cancerization: เกิดก้อนใหม่ซ้ำได้ 3–7%/ปี","มักมาจาก leukoplakia/erythroplakia"]}};
function mouth(x,y,o){let b=`<g transform="translate(${x},${y})">`;
 b+=`<ellipse cx="150" cy="120" rx="140" ry="104" style="fill:#E79A8A;stroke:#B5675A;stroke-width:2"/><ellipse cx="150" cy="120" rx="120" ry="86" style="fill:#5A1F2A"/>`;
 b+=`<path d="M40,64 C80,30 220,30 260,64 L250,74 C210,46 90,46 50,74Z" style="fill:#FFF8EC;stroke:#D9CDB8"/>`;for(let i=0;i<10;i++)b+=`<path d="M${62+i*19},${52-Math.sin(i/9*Math.PI)*12} v14" style="stroke:#D9CDB8;stroke-width:1"/>`;
 b+=`<path d="M60,186 C90,204 210,204 240,186 L236,176 C200,192 100,192 64,176Z" style="fill:#FFF8EC;stroke:#D9CDB8"/>`;
 b+=`<path d="M70,176 C70,110 104,84 150,84 C196,84 230,110 230,176 C200,192 100,192 70,176Z" style="fill:#E58C8C;stroke:#B4545E;stroke-width:1.6"/><path d="M150,92 V170" style="stroke:#C46670;stroke-width:1.4"/>`;
 for(let i=0;i<40;i++){const r=rng(7+i);b+=dot(90+r()*120,100+r()*70,1.2,"#D47A80")}
 const [lx,ly]=o.at,f=o.f;
 if(f==="ulcer")b+=`<ellipse cx="${lx}" cy="${ly}" rx="13" ry="9" style="fill:#F7E6A8;stroke:#E04A4A;stroke-width:4"/>`;
 if(f==="white")b+=`<path d="${sm([[lx-20,ly-8],[lx-4,ly-14],[lx+16,ly-8],[lx+18,ly+8],[lx-2,ly+12],[lx-18,ly+8]])}" style="fill:#F7F5EE;stroke:#C9C2B0;stroke-width:1.2"/>`;
 if(f==="red")b+=`<path d="${sm([[lx-18,ly-8],[lx-4,ly-12],[lx+14,ly-6],[lx+16,ly+8],[lx-4,ly+12],[lx-16,ly+6]])}" style="fill:#B0182E;opacity:.85"/>`;
 if(f==="hairy")for(let i=0;i<7;i++)b+=`<path d="M${lx-12+i*4},${ly-16} q2,16 0,30" style="fill:none;stroke:#F4F1EA;stroke-width:3;stroke-linecap:round"/>`;
 if(f==="mass")b+=`<path d="${sm([[lx-18,ly-10],[lx,ly-18],[lx+18,ly-8],[lx+16,ly+12],[lx,ly+16],[lx-18,ly+8]])}" style="fill:#F2EEE6;stroke:#8C6D9C;stroke-width:2"/><ellipse cx="${lx}" cy="${ly}" rx="8" ry="6" style="fill:#B0182E;opacity:.8"/>`;
 return b+ring(lx,ly,26)+`</g>`}
function oralD(){const d=OL[ST.ol];let b=mouth(6,10,d);b+=T(156,252,"ภาพช่องปากจากด้านหน้า (แผนภาพ)",{c:"s m"});
 b+=iPanel(330,10,304,d.n,"",d.R,d.c);
 const rk=[["aph","ไม่เสี่ยง"],["hairy","ไม่เสี่ยง"],["leuko","5–25%"],["eryth","~90% dysplasia+"],["scc","มะเร็ง"]];
 b+=T(10,290,"ความเสี่ยงเป็นมะเร็ง",{a:"start",c:"bh"});rk.forEach(([k,t],i)=>{const x=10+i*125,on=k===ST.ol;b+=`<rect x="${x}" y="302" width="118" height="44" rx="10" style="fill:color-mix(in srgb,${OL[k].c} ${on?30:10}%,var(--sb-surface));stroke:${on?OL[k].c:"var(--sb-line)"};stroke-width:${on?2:1}"/>`+T(x+59,320,OL[k].n.split(" (")[0].replace("Squamous cell carcinoma","SCC"),{c:"s"})+T(x+59,338,t,{c:"bh"})});
 return ESVG(b,"0 0 640 352")}

/* ---------- 2. salivary glands ---------- */
const SG={pleo:{n:"Pleomorphic adenoma",c:"#3C8DBC",at:"par",p:"benign · ~60% ของก้อนที่ parotid",R:["เนื้องอกที่พบบ่อยที่สุดของต่อมน้ำลาย","epithelial + myoepithelial cells ปนใน stroma แบบ chondromyxoid","ก้อนโตช้า ไม่เจ็บ เคลื่อนได้ · PLAG1 rearrangement","capsule ไม่สมบูรณ์ ยื่นเป็นปุ่ม → ตัดไม่หมดเกิดซ้ำ","อยู่นานอาจกลายเป็นมะเร็ง (carcinoma ex pleomorphic adenoma)"]},
 warthin:{n:"Warthin tumor",c:"#2F8A78",at:"par",p:"benign · เกือบทั้งหมดที่ parotid",R:["papillary cystadenoma lymphomatosum: epithelium 2 ชั้น + lymphoid stroma (germinal center)","เนื้องอกที่พบบ่อยอันดับ 2 · ผู้ชาย อายุ 40–70 ปี","ความเสี่ยงเพิ่ม ~8 เท่าในคนสูบบุหรี่","บางรายเป็นสองข้างหรือหลายก้อน"]},
 muco:{n:"Mucoepidermoid carcinoma",c:"#C2334A",at:"sub",p:"malignant ที่พบบ่อยที่สุด (~15% ของทั้งหมด)",R:["squamous + mucous + intermediate cells","60–70% อยู่ที่ parotid แต่เป็นสัดส่วนใหญ่ของก้อนในต่อมเล็ก","t(11;19) → CRTC1-MAML2 fusion · ความรุนแรงตาม grade","ก้อนแข็ง อาจปวด/ใบหน้าอ่อนแรงถ้าลาม facial nerve"]},
 stone:{n:"Sialolithiasis + sialadenitis",c:"#C7892B",at:"stone",p:"ไม่ใช่เนื้องอก",R:["นิ่วอุดท่อ มักเป็นท่อ submandibular → ต่อมบวมเจ็บตอนกิน","ท่ออุด + น้ำลายน้อย (ขาดน้ำ หลังผ่าตัด ยา) → S. aureus, viridans streptococci","sialadenitis จากแบคทีเรียมักข้างเดียว · mumps เป็นสองข้าง","Sjögren: autoimmune sialadenitis → ปากแห้ง ตาแห้ง"]}};
function headG(x,y,o){let b=`<g transform="translate(${x},${y})">`;
 b+=`<path d="M70,20 C150,-6 236,20 250,96 C256,130 246,150 252,170 C258,190 244,196 240,210 C236,232 222,262 190,272 C160,282 130,276 116,300 L60,300 C64,260 40,230 30,190 C20,150 20,60 70,20Z" style="fill:${EN.skin};stroke:${EN.skinD};stroke-width:1.6"/>`;
 b+=`<ellipse cx="96" cy="128" rx="14" ry="22" style="fill:#EAB496;stroke:${EN.skinD}"/>`+LB(TD(96,168,"ear",{s:9.5}));
 b+=`<path d="${sm([[110,104],[140,102],[150,132],[140,176],[118,194],[100,170],[104,140]])}" style="fill:#F4D06F;stroke:#B48A2A;stroke-width:1.4"/>`+LB(TD(128,214,"parotid",{s:10}));
 b+=`<path d="M146,138 C180,140 200,146 218,150" style="fill:none;stroke:#C29A3A;stroke-width:2.6"/>`+LB(TD(198,140,"Stensen duct",{s:9}));
 b+=`<path d="${sm([[150,214],[180,206],[200,222],[190,244],[160,248],[146,232]])}" style="fill:#F4D06F;stroke:#B48A2A;stroke-width:1.4"/>`+LB(TD(170,262,"submandibular",{s:10}));
 b+=`<path d="M190,222 C206,214 220,206 234,200" style="fill:none;stroke:#C29A3A;stroke-width:2.4"/>`;
 if(o.fn)["M116,150 L150,96","M118,156 L176,130","M120,162 L186,170","M118,168 L176,206","M116,172 L150,226"].forEach(d=>b+=`<path d="${d}" style="fill:none;stroke:#E8E2F5;stroke-width:3.2;stroke-linecap:round"/><path d="${d}" style="fill:none;stroke:#7A5BC7;stroke-width:1.6;stroke-linecap:round"/>`);
 if(o.at==="par")b+=`<circle cx="124" cy="150" r="20" style="fill:${o.c};stroke:#fff;stroke-width:2;opacity:.9"/>`+ring(124,150,30);
 if(o.at==="sub")b+=`<circle cx="172" cy="228" r="15" style="fill:${o.c};stroke:#fff;stroke-width:2;opacity:.9"/>`+ring(172,228,24);
 if(o.at==="stone")b+=`<path d="${sm([[150,214],[180,206],[200,222],[190,244],[160,248],[146,232]].map(([a,c])=>[172+(a-172)*1.22,228+(c-228)*1.22]))}" style="fill:#F2A65A;opacity:.55"/>`+`<path d="M216,208 l5,-5 l5,5 l-5,5Z" style="fill:${GI.stone};stroke:${GI.stoneD}"/>`+ring(221,208,14);
 return b+`</g>`}
function salD(){const d=SG[ST.sg];let b=headG(0,6,{fn:true,at:d.at,c:d.c});b+=T(130,330,"เส้นสีม่วง = facial nerve ผ่ากลาง parotid",{c:"s m"});
 b+=iPanel(300,8,334,d.n,d.p,d.R,d.c);
 const B=[["Parotid","~25%"],["Submandibular","40%"],["Minor glands","50%"],["Sublingual","70–90%"]],v=[25,40,50,80];
 const y0=Math.max(IPH+24,250);b+=T(300,y0,"สัดส่วนที่เป็นมะเร็ง ตามต่อม",{a:"start",c:"bh"});
 B.forEach(([n,t],i)=>{const yy=y0+14+i*24;b+=T(300,yy+12,n,{a:"start",c:"s"})+`<rect x="400" y="${yy}" width="${2.2*v[i]}" height="16" rx="8" style="fill:color-mix(in srgb,${CV.bad} ${30+v[i]*.6}%,var(--sb-surface))"/>`+T(406+2.2*v[i],yy+12,t,{a:"start",c:"s m"})});
 b+=T(300,y0+120,"ต่อมยิ่งเล็ก ก้อนยิ่งมีโอกาสเป็นมะเร็ง",{a:"start",c:"s m"});
 return ESVG(b,`0 0 640 ${Math.max(340,y0+132)}`)}

/* ---------- 3. achalasia & motility ---------- */
const AC={norm:{n:"ปกติ",dil:null,les:[24,4],per:true,t:"กลืน → LES คลายลงจนใกล้ 0 · คลื่น peristalsis ไล่ลงตามลำดับ"},
 ach:{n:"Achalasia",dil:"achalasia",les:[44,34],per:false,t:"LES ตึงและคลายไม่ได้ + ตัวหลอดอาหารไม่มี peristalsis → ขยายเหนือ LES (bird's beak)"},
 sclero:{n:"Systemic sclerosis (CREST)",dil:"sclero",les:[6,4],per:false,amp:.25,t:"กล้ามเนื้อเรียบถูกแทนด้วย fibrosis → LES หลวม + peristalsis อ่อน → GERD รุนแรง stricture"},
 des:{n:"Diffuse esophageal spasm",dil:null,les:[24,4],per:"sim",t:"หดพร้อมกันหลายตำแหน่ง (ไม่ไล่ลำดับ) → เจ็บอก กลืนลำบากเป็นพัก ๆ · barium: corkscrew"}};
function achD(){const d=AC[ST.ac];let b=esoStom(4,6,.94,{dil:d.dil,id:3});
 b+=T(146,338,d.n,{c:"bh"});
 const x0=330,w=290;b+=T(x0,24,"Manometry (แผนภาพ)",{a:"start",c:"bh"})+T(x0+w,24,"กลืน ↓",{a:"end",c:"s m"});
 const rows=[["ตัวหลอดอาหารส่วนบน",100],["ตัวหลอดอาหารส่วนล่าง",176],["LES",252]];
 rows.forEach(([n,yb],i)=>{b+=`<path d="M${x0},${yb} H${x0+w}" style="stroke:var(--sb-line);stroke-width:1"/>`+T(x0,yb-46,n,{a:"start",c:"s m"});
  const pts=[];for(let t=0;t<=1.0001;t+=.01){let v=0;
   if(i<2){if(d.per===true)v=60*Math.exp(-Math.pow((t-(.35+i*.18))/.05,2));else if(d.per==="sim")v=70*Math.exp(-Math.pow((t-.4)/.07,2))+30*Math.exp(-Math.pow((t-.62)/.05,2));else v=(d.amp?60*d.amp:6)*Math.exp(-Math.pow((t-.42)/.12,2))}
   else{const [rest,relax]=d.les;v=t<.2||t>.78?rest:rest-(rest-relax)*Math.sin((t-.2)/.58*Math.PI)}
   pts.push([x0+t*w,yb-v*.62])}
  b+=curve(pts,i===2?CV.violet:CV.acc,2.8)});
 b+=`<path d="M${x0+.2*w},36 V258" style="stroke:var(--sb-muted);stroke-dasharray:3 4"/>`;
 b+=`<rect x="${x0-6}" y="270" width="${w+12}" height="66" rx="12" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+wrapT(x0+6,292,d.t,50,"s",15);
 return ESVG(b,"0 0 640 346")}

/* ---------- 4. GERD, hiatal hernia & esophagitis ---------- */
const HH={norm:{n:"GE junction ปกติ",gej:0,para:false,t:"LES + crura ของ diaphragm กั้นกรดไว้ใต้กะบังลม"},slide:{n:"Sliding hiatal hernia",gej:-46,para:false,t:"crura แยก GE junction เลื่อนขึ้นอก (พบบ่อยสุด) · LES หลวม → reflux"},para:{n:"Paraesophageal hernia",gej:0,para:true,t:"GE junction อยู่ที่เดิม แต่ fundus ทะลุขึ้นข้างหลอดอาหาร → เสี่ยงบิด ขาดเลือด ต้องผ่าตัด"}};
const EZ={reflux:{n:"Reflux esophagitis",c:"#C2493A",R:["eosinophil ใน epithelium (น้อย) · basal zone hyperplasia · papilla ยาวขึ้น","สาเหตุบ่อยสุดของ esophagitis"]},eoe:{n:"Eosinophilic esophagitis",c:"#C7892B",R:["eosinophil จำนวนมากใน epithelium โดยเฉพาะชั้นผิว","ภูมิแพ้ หอบหืด · อาหารติดคอ · endoscopy: วงแหวนซ้อน (feline) + furrow"]},
 cand:{n:"Candida",c:"#7A8C9C",R:["ปื้นขาวเทาเกาะแน่น (pseudomembrane) · hyphae","ภูมิคุ้มกันบกพร่อง (HIV, steroid สูดพ่น)"]},hsv:{n:"HSV",c:"#7A5BC7",R:["แผลเล็กเหมือนเจาะ (punched-out) · multinucleate cells ขอบแผล","inclusion ในนิวเคลียส"]},
 cmv:{n:"CMV",c:"#2F8A78",R:["แผลตื้นยาวตามแนว (linear) · inclusion ใน endothelium/stroma ที่ฐานแผล","ผู้รับอวัยวะ, HIV"]},pill:{n:"Pill / chemical",c:"#8C6D46",R:["ยาค้างที่ช่วงแคบ: doxycycline, NSAID, bisphosphonate, KCl, iron","กินสารกัดกร่อน (เด็กกินโดยบังเอิญ) → stricture"]}};
function gerdD(){const h=HH[ST.hh],e=EZ[ST.ez];let b="";const gx=150,dy=150,g=h.gej;
 b+=`<rect x="8" y="8" width="296" height="340" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(22,30,h.n,{a:"start",c:"bh"});
 const ey=dy+g;b+=`<path d="M${gx-12},44 L${gx-12},${ey} M${gx+12},44 L${gx+12},${ey}" style="stroke:${GI.sqD};stroke-width:2"/><rect x="${gx-11}" y="44" width="22" height="${ey-44}" style="fill:${GI.sq}"/>`;
 /* paraesophageal: GE junction stays put; the fundus rises through the hiatus beside the esophagus (hiatus widened to the right) */
 if(h.para)b+=`<path d="${sm([[gx+20,dy+12],[gx+20,dy-24],[gx+30,dy-64],[gx+70,dy-82],[gx+104,dy-58],[gx+100,dy-22],[gx+82,dy-4],[gx+80,dy+12]])}" style="fill:${GI.muc};stroke:${GI.mucD};stroke-width:1.6"/>`;
 b+=`<path d="${sm([[gx-12,ey],[gx+14,ey-6],[gx+70,ey+6],[gx+100,ey+60],[gx+80,ey+130],[gx+10,ey+142],[gx-30,ey+104],[gx-22,ey+30]])}" style="fill:${GI.muc};stroke:${GI.mucD};stroke-width:1.6"/>`;
 if(h.para)b+=`<path d="M${gx+24},${dy-6} H${gx+76} V${dy+16} H${gx+24}Z" style="fill:${GI.muc}"/>`+LB(TD(gx+66,dy-38,"fundus",{s:10,c:"#fff",w:800}));
 const rc=h.para?gx+98:gx+26;
 b+=`<path d="M8,${dy} H${gx-26} M${rc},${dy} H304" style="stroke:#9A4E46;stroke-width:13;stroke-linecap:round"/><path d="M8,${dy} H${gx-26} M${rc},${dy} H304" style="stroke:#C7746A;stroke-width:10;stroke-linecap:round"/>`+LB(T(22,dy-14,"diaphragm",{a:"start",c:"s m"}));
 b+=`<rect x="${gx-15}" y="${ey-12}" width="30" height="10" rx="5" style="fill:${CV.violet}"/>`+LB(T(gx-22,ey-4,"LES",{a:"end",c:"s"}));
 if(ST.hh==="slide")b+=Ar(gx+2,ey+40,gx+2,ey-70,"#E0A43A",3,{hs:9})+T(gx+10,ey-60,"กรดไหลย้อน",{a:"start",c:"s"});
 b+=wrapT(22,312,h.t,46,"s",15);
 b+=`<rect x="320" y="8" width="314" height="340" rx="14" style="fill:color-mix(in srgb,${e.c} 8%,var(--sb-surface));stroke:color-mix(in srgb,${e.c} 45%,transparent)"/>`+T(336,32,"Esophagitis: "+e.n,{a:"start",c:"bh"});
 const W=wallX(336,48,220,130,{sq:true,id:4,lesion:ST.ez==="hsv"||ST.ez==="cmv"||ST.ez==="pill"?{x0:400,x1:ST.ez==="hsv"?426:470,depth:ST.ez==="cmv"?"sub":"mucosa",kind:"ulcer"}:{x0:350,x1:540,depth:"mucosa",kind:"inflam"},lab:true});b+=W;
 if(ST.ez==="eoe")for(let i=0;i<34;i++){const r=rng(40+i);b+=`<circle cx="${350+r()*190}" cy="${62+r()*22}" r="2.6" style="fill:#F07A2C"/>`}
 if(ST.ez==="cand")b+=`<path d="M352,58 q30,-12 60,0 q30,-10 60,0 q30,-12 70,0 v8 h-190Z" style="fill:#F4F1EA;stroke:#BDB6A6"/>`;
 b+=wrapT(336,206,e.R[0],48,"s",15)+wrapT(336,246,e.R[1],48,"s m",15);
 return ESVG(b,"0 0 640 356")}

/* ---------- 5. Barrett esophagus ---------- */
const BS=[["Squamous ปกติ","stratified squamous ไม่มี keratin","#E7B3A6"],["Intestinal metaplasia","columnar + goblet cells (วินิจฉัย Barrett)","#D2566F"],["Low-grade dysplasia","นิวเคลียสยาว เบียด hyperchromatic ถึงผิว","#C7892B"],["High-grade dysplasia","โครงสร้างผิด gland-in-gland (cribriform)","#C2493A"],["Adenocarcinoma","บุกทะลุ lamina propria → ลึกลงไป","#5B3E8C"]];
function epi(x,y,w,h,k){let b=slide(x,y,w,h);const r=rng(k*7+3);
 if(k===0){for(let row=0;row<6;row++)for(let i=0;i<w/14;i++){const fl=row/6;b+=`<ellipse cx="${x+8+i*14+(row%2)*7}" cy="${y+h-14-row*(h-24)/6}" rx="${5+fl*3}" ry="${4-fl*2}" style="fill:#F2B9CB;stroke:${HE.mem};stroke-width:.6"/>`+dot(x+8+i*14+(row%2)*7,y+h-14-row*(h-24)/6,1.6-fl*.6,HE.nu)}return b}
 const n=Math.floor(w/26);for(let i=0;i<n;i++){const gx=x+14+i*(w-20)/n,dd=k===4?0:k===3?6:0;
  b+=`<path d="M${gx-9},${y+8} v${h*.62} q9,10 18,0 v${-h*.62}" style="fill:${HE.col};stroke:${HE.cyX};stroke-width:4"/>`;
  for(let j=0;j<6;j++){const yy=y+14+j*h*.1;const hy=k>=2?2.4+r():1.8;b+=`<ellipse cx="${gx-9}" cy="${yy}" rx="1.4" ry="${hy*(k>=2?1.6:1)}" style="fill:${k>=2?HE.nuD:HE.nu}"/>`+`<ellipse cx="${gx+9}" cy="${yy+3}" rx="1.4" ry="${hy*(k>=2?1.6:1)}" style="fill:${k>=2?HE.nuD:HE.nu}"/>`}
  if(k===1||k===2)for(let j=0;j<2;j++)b+=`<path d="M${gx-11},${y+22+j*24} q-3,6 2,10 q5,-4 2,-10Z" style="fill:#C9E3F2;stroke:#7FA8C8;stroke-width:.6"/>`;
  if(k===3&&i%2===0)b+=`<circle cx="${gx}" cy="${y+h*.45}" r="5" style="fill:#fff;stroke:${HE.cyX};stroke-width:2"/>`}
 if(k===4)for(let i=0;i<9;i++){const px=x+12+r()*(w-24),py=y+h*.7+r()*h*.25;b+=`<circle cx="${px}" cy="${py}" r="6" style="fill:none;stroke:${HE.cyX};stroke-width:3"/>`+dot(px+4,py,1.8,HE.nuD)}
 return b}
function barD(){const k=+ST.bs;let b=esoStom(0,6,.82,{barrett:k>0,eTum:k===4?"lower":null,id:5});
 b+=T(124,296,k>0?"ลิ้นสีแดงยื่นขึ้นจาก GE junction":"ปกติ",{c:"s m"});
 BS.forEach(([n,s,c],i)=>{const y=8+i*44,on=i===k;b+=`<rect x="262" y="${y}" width="180" height="38" rx="10" style="fill:color-mix(in srgb,${c} ${on?32:8}%,var(--sb-surface));stroke:${on?c:"var(--sb-line)"};stroke-width:${on?2:1}"/>`+`<circle cx="280" cy="${y+19}" r="9" style="fill:${c}"/>`+T(280,y+23,i+1,{c:"sn"})+T(296,y+23,n,{a:"start",c:on?"bh":"s"});if(i<4)b+=Ar(352,y+38,352,y+44,CV.mut,1.4,{hs:5})});
 b+=epi(454,8,180,160,k)+T(544,186,BS[k][0],{c:"bh"})+wrapT(458,206,BS[k][1],28,"s m",15);
 b+=`<rect x="262" y="236" width="372" height="76" rx="12" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(276,258,"ยีนที่สะสมระหว่างทาง",{a:"start",c:"bh"})+wrapT(276,278,"TP53 และ CDKN2A (p16) เสียตั้งแต่ระยะต้น → ระยะท้าย amplify EGFR, ERBB2, MET, cyclin D1",58,"s",15);
 return ESVG(b,"0 0 640 318")}

/* ---------- 6. varices, Mallory-Weiss, Boerhaave ---------- */
const ET={mw:{n:"Mallory-Weiss tear",dep:"mucosa",c:"#C7892B",R:["แผลฉีกตามยาวตื้น ๆ ที่ GE junction หลังอาเจียนรุนแรง (สุรา, bulimia)","อาเจียนเป็นเลือด (hematemesis) ± ปวดท้อง/หลัง","ส่วนใหญ่หยุดเองและหายสนิท"],o:{tear:true}},
 boer:{n:"Boerhaave syndrome",dep:"through",c:"#C2334A",R:["ฉีกทะลุทุกชั้น (transmural) มักผนังซ้ายส่วนปลาย","เจ็บอกรุนแรง ช็อก · pneumomediastinum + crepitus ที่คอ/ผนังอก","mediastinitis → อันตรายถึงชีวิต ต้องผ่าตัด"],o:{tear:true}},
 varix:{n:"Esophageal varices",dep:null,c:"#3E6FB0",R:["portal hypertension → left gastric v. ไหลย้อนเข้า esophageal v. → azygos","เส้นเลือดขดใน submucosa ส่วนปลาย · ปกติไม่มีอาการจนกว่าจะแตก","แตก = อาเจียนเลือดสด ปริมาณมาก · ตายต่อครั้ง 15–20%"],o:{varix:true}}};
function tearD(){const d=ET[ST.et];let b=esoStom(0,4,.9,Object.assign({id:6},d.o));b+=ring(119,130,26,d.c);
 b+=T(330,24,"ผ่าตามขวาง: ความลึกของรอยโรค",{a:"start",c:"bh"});
 b+=wallX(330,36,210,150,{sq:true,id:6,varix:ST.et==="varix"?[380,470]:[],lesion:d.dep?{x0:418,x1:442,depth:d.dep,kind:"tear",blood:ST.et==="mw"}:null});
 b+=iPanel(330,198,304,d.n,"",d.R,d.c);
 return ESVG(b,`0 0 640 ${Math.max(330,198+IPH+6)}`)}

/* ---------- 7. dysphagia ---------- */
const DYN={nodes:{s:[200,4,240,40,"Dysphagia (esophageal)","",CV.acc],sol:[20,78,270,46,"กลืนของแข็งอย่างเดียว","= mechanical obstruction","#C7892B"],liq:[350,78,270,46,"กลืนทั้งของแข็งและน้ำ","= motility disorder",CV.violet],
 ri:[4,160,140,62,"เป็นพัก ๆ","ring / web / EoE","#C7892B"],rp:[156,160,140,62,"ค่อย ๆ แย่ลง","stricture · cancer","#C2334A"],li:[344,160,140,62,"เป็นพัก ๆ + เจ็บอก","DES",CV.violet],lp:[496,160,140,62,"ค่อย ๆ แย่ลง","achalasia · scleroderma",CV.violet]},
 edges:[["s","sol"],["s","liq"],["sol","ri"],["sol","rp"],["liq","li"],["liq","lp"]]};
const DY={web:{p:["s","sol","ri"],n:"Plummer-Vinson syndrome",t:"web ที่หลอดอาหารส่วนบน + iron deficiency anemia + glossitis/cheilitis · หญิงวัยกลางคน · เสี่ยง SCC"},ring:{p:["s","sol","ri"],n:"Schatzki ring",t:"วงแหวนที่ squamocolumnar junction ปลายหลอดอาหาร · อาหารชิ้นใหญ่ติดเป็นพัก ๆ (steakhouse)"},
 str:{p:["s","sol","rp"],n:"Peptic stricture / cancer",t:"GERD นาน · สารกัดกร่อน · ฉายแสง → แผลเป็นแคบ · มะเร็ง: น้ำหนักลด กลืนแข็ง→เหลว"},ach:{p:["s","liq","lp"],n:"Achalasia",t:"ของแข็ง + น้ำตั้งแต่แรก · สำรอกอาหารไม่ย่อย · เรอยาก"},des:{p:["s","liq","li"],n:"Diffuse esophageal spasm",t:"เจ็บอกคล้ายหัวใจ · barium corkscrew · manometry: หดพร้อมกัน"}};
function dysD(){const d=DY[ST.dy];let b=tree(DYN,d.p);
 b+=`<rect x="8" y="244" width="626" height="74" rx="12" style="fill:color-mix(in srgb,${CV.acc} 8%,var(--sb-surface));stroke:color-mix(in srgb,${CV.acc} 40%,transparent)"/>`+T(22,268,d.n,{a:"start",c:"bh"})+wrapT(22,290,d.t,100,"s",15);
 b+=T(8,342,"Oropharyngeal dysphagia (เริ่มกลืนไม่ได้ สำลัก ไอ) → คิดถึง stroke, myasthenia, Zenker",{a:"start",c:"s m"});
 return ESVG(b,"0 0 640 352")}

/* ---------- 8. esophageal cancer ---------- */
const EC={scc:{n:"Squamous cell carcinoma",reg:"mid",c:"#5B3E8C",R:["พบมากที่สุดทั่วโลก · ครึ่งหนึ่งอยู่ส่วน middle third","alcohol + บุหรี่ (เสริมกัน) · เครื่องดื่มร้อนจัด · nitrosamine","achalasia · caustic injury · Plummer-Vinson · tylosis · ยากจน","ยีน: SOX2 amp, cyclin D1 ↑, TP53, NOTCH1","กลืนลำบากค่อย ๆ แย่ลง odynophagia น้ำหนักลด · อาจทะลุ trachea → fistula"]},
 ad:{n:"Adenocarcinoma",reg:"lower",c:"#C2493A",R:["ส่วน distal third ลามถึง cardia","GERD เรื้อรัง → Barrett · อ้วน · บุหรี่","ผู้ชาย ~7 เท่า · คนขาว · เพิ่มเร็วในประเทศตะวันตก","H. pylori บางสายพันธุ์ลดความเสี่ยง (กรดลด → reflux ลด)","5-year survival < 25% · ถ้าจำกัดอยู่ mucosa/submucosa ~80%"]}};
function escD(){const d=EC[ST.ec];const reg={};reg[d.reg]=d.c;let b=esoStom(0,6,.92,{reg,eTum:d.reg,id:7});
 b+=T(330,24,"แบ่งหลอดอาหารเป็น 3 ส่วน",{a:"start",c:"bh"});
 [["Upper third","SCC บ้าง",ST.ec==="scc"],["Middle third","SCC บ่อยที่สุด",ST.ec==="scc"],["Lower third","Adenocarcinoma",ST.ec==="ad"]].forEach(([n,s,on],i)=>{const y=36+i*30,hot=(i===1&&ST.ec==="scc")||(i===2&&ST.ec==="ad");b+=`<rect x="330" y="${y}" width="304" height="26" rx="8" style="fill:${hot?`color-mix(in srgb,${d.c} 22%,var(--sb-surface))`:"var(--sb-surface2)"};stroke:${hot?d.c:"var(--sb-line)"}"/>`+T(342,y+17,n,{a:"start",c:"s"})+T(622,y+17,s,{a:"end",c:hot?"bh":"s m"})});
 b+=iPanel(330,134,304,d.n,"",d.R,d.c);
 return ESVG(b,`0 0 640 ${Math.max(330,134+IPH+6)}`)}

/* ---------- 9. gastritis ---------- */
const GT={acute:{n:"Acute gastritis / NSAID gastropathy",reg:{body:"#C2493A",antrum:"#C2493A"},L:[["Acid","N"],["Gastrin","N"],["B12","N"]],c:"#C2493A",R:["NSAID ยับยั้ง COX → prostaglandin ↓ → mucus, HCO₃⁻, blood flow ↓","alcohol · uremia (NH₃) · chemo · ขาดเลือด","erosion ตื้นถึง mucosa · อาการตั้งแต่ไม่มีถึงอาเจียนเป็นเลือด"]},
 stress:{n:"Stress-related mucosal disease",reg:{fundus:"#B3263B",body:"#B3263B"},L:[["Acid","N/↑"],["Gastrin","N"],["B12","N"]],c:"#B3263B",R:["ช็อก sepsis บาดเจ็บรุนแรง → ขาดเลือดเฉพาะที่ (ulcer หลายแห่ง < 1 cm)","Curling ulcer: ไฟไหม้ → duodenum ส่วนต้น (hypovolemia)","Cushing ulcer: โรคในกะโหลก → กระตุ้น vagus → กรด ↑ · เสี่ยงทะลุ"]},
 hp:{n:"Type B: H. pylori gastritis",reg:{antrum:"#C7892B"},L:[["Acid","↑"],["Gastrin","N/↑"],["B12","N"]],c:"#C7892B",R:["สาเหตุบ่อยที่สุดของ chronic gastritis · เริ่มที่ antrum","urease → NH₃ · flagella · adhesin · CagA","เสี่ยง PUD, gastric adenocarcinoma, MALT lymphoma","ลามถึง body → atrophy + intestinal metaplasia → กรดกลับลด"]},
 aig:{n:"Type A: autoimmune atrophic gastritis",reg:{fundus:"#7A5BC7",body:"#7A5BC7"},L:[["Acid","↓↓"],["Gastrin","↑↑"],["B12","↓"]],c:"#7A5BC7",R:["CD4 T cell ทำลาย parietal cell (H⁺/K⁺-ATPase) ที่ body/fundus · antrum ปกติ","anti-parietal cell, anti-intrinsic factor Ab → pernicious anemia","achlorhydria → G-cell hyperplasia → gastrin สูงมาก → ECL hyperplasia / NET","เสี่ยง gastric adenocarcinoma + carcinoid · type 4 HSR"]}};
function gastD(){const d=GT[ST.gt];let b=esoStom(0,4,.9,{gReg:d.reg,rugae:ST.gt==="aig"?"flat":null,ulcers:ST.gt==="stress"?[[210,150,5],[234,190,4],[200,214,5],[226,240,4]]:ST.gt==="acute"?[[200,230,3],[150,280,3],[224,200,3]]:[],id:9});
 b+=`<rect x="300" y="8" width="334" height="42" rx="12" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`;d.L.forEach(([n,v],i)=>b+=T(318+i*108,34,n,{a:"start",c:"s"})+lv(388+i*108,29,v));
 b+=iPanel(300,62,334,d.n,"",d.R,d.c);
 b+=T(10,330,"สีเข้ม = ตำแหน่งที่ถูกกระทบ",{a:"start",c:"s m"});
 return ESVG(b,`0 0 640 ${Math.max(340,62+IPH+6)}`)}

/* ---------- 10. Ménétrier & hypertrophic gastropathy ---------- */
const MN={men:{n:"Ménétrier disease",c:"#C7892B",rug:"giant",R:["TGF-α หลั่งมาก → EGFR ทำงานเกิน → foveolar (mucous) cells hyperplasia","rugae ใหญ่ที่ body + fundus · antrum ปกติ","gland ยาวคดเป็น corkscrew, cyst · parietal/chief ↓","protein-losing gastropathy: albumin หายได้ถึง ~10 g/วัน → บวม","เสี่ยง gastric adenocarcinoma ในผู้ใหญ่ · เด็กหายเองหลัง CMV"],L:[["Acid","↓"],["Albumin","↓"],["Gastrin","N"]]},
 zes:{n:"Zollinger-Ellison syndrome",c:"#C2334A",rug:"giant",R:["gastrinoma (duodenum/pancreas) → parietal cell hyperplasia","rugae หนาแต่เป็น oxyntic ไม่ใช่ foveolar","กรดสูงมาก → แผลหลายแห่ง ถึง jejunum · ท้องเสีย (lipase ถูกกรดทำลาย)","สัมพันธ์ MEN1 · gastrinoma 60–90% เป็นมะเร็ง"],L:[["Acid","↑↑"],["Albumin","N"],["Gastrin","↑↑"]]},
 norm:{n:"กระเพาะปกติ",c:"#2F8A78",rug:null,R:["rugae ปกติ เรียบเมื่อกระเพาะยืด","foveolar cells ผิวบน · parietal + chief cells ใน gland ของ body"],L:[["Acid","N"],["Albumin","N"],["Gastrin","N"]]}};
function foveola(x,y,w,h,mode){let b=slide(x,y,w,h);const fov=mode==="men"?.62:.28,n=Math.floor(w/24);
 for(let i=0;i<n;i++){const gx=x+12+i*(w-16)/n;const wig=mode==="men"?5:0;let d=`M${gx},${y+6}`;for(let k=1;k<=8;k++)d+=` L${gx+(k%2?wig:-wig)},${y+6+k*fov*h/8}`;
  b+=`<path d="${d}" style="fill:none;stroke:#F6D9E3;stroke-width:12;stroke-linecap:round"/><path d="${d}" style="fill:none;stroke:#E8C3D4;stroke-width:3"/>`;
  for(let k=0;k<(1-fov)*h/9-1;k++){const yy=y+fov*h+8+k*9;b+=`<circle cx="${gx-4}" cy="${yy}" r="${mode==="zes"?4.4:3.6}" style="fill:${mode==="zes"?"#F08AAE":"#F4A7C1"};stroke:${HE.mem};stroke-width:.4"/>`+`<circle cx="${gx+4}" cy="${yy+4}" r="3.2" style="fill:#B9A6E0;stroke:${HE.mem};stroke-width:.4"/>`}}
 if(mode==="men")b+=`<circle cx="${x+w*.4}" cy="${y+h*.45}" r="10" style="fill:#FBEFF3;stroke:${HE.mem}"/>`;
 return b+`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" style="fill:none;stroke:var(--sb-line)"/>`}
function menD(){const d=MN[ST.mn];let b=esoStom(0,4,.84,{rugae:d.rug,gReg:ST.mn==="men"?{fundus:"#E9B949",body:"#E9B949"}:null,id:10,lab:false});
 b+=foveola(270,8,160,180,ST.mn)+TD(350,200,ST.mn==="men"?"foveolar ยาว คด":ST.mn==="zes"?"parietal cells หนาแน่น":"สัดส่วนปกติ",{s:10.5}).replace(HE.ink,"var(--sb-ink)");
 b+=T(278,214,"สีชมพูอ่อน = foveolar · ชมพูเข้ม = parietal · ม่วง = chief",{a:"start",c:"s m"});
 d.L.forEach(([n,v],i)=>b+=T(446,28+i*34,n,{a:"start",c:"s"})+lv(608,24+i*34,v));
 b+=iPanel(270,228,364,d.n,"",d.R,d.c);
 return ESVG(b,`0 0 640 ${Math.max(300,228+IPH+6)}`)}

/* ---------- 11. gastric cancer ---------- */
const GC={int:{n:"Intestinal type",c:"#C2493A",g:"antrum",R:["ก้อน bulky/แผลขอบนูน ที่ antrum, lesser curvature · สร้าง gland","H. pylori → atrophy → intestinal metaplasia → dysplasia","N-nitroso (อาหารรมควัน หมักเกลือ) · Wnt/APC, β-catenin","ลดลงมากตาม H. pylori ที่ลดลง"]},
 diff:{n:"Diffuse type",c:"#5B3E8C",g:"diffuse",R:["signet-ring cells แทรกทั่วผนัง ไม่สร้างก้อน → linitis plastica (leather bottle)","ไม่มี E-cadherin: CDH1 germline (familial) หรือ ~50% ของ sporadic","ไม่สัมพันธ์ intestinal metaplasia · อิ่มเร็ว","อัตราเกิดไม่ลดลงเหมือน intestinal type"]},
 malt:{n:"MALT lymphoma (MALToma)",c:"#2F8A78",g:null,R:["lymphoma ที่พบบ่อยที่สุดของกระเพาะ · B cell ชนิด indolent","เกิดจาก H. pylori กระตุ้น lymphoid tissue เรื้อรัง","t(11;18) → ดื้อต่อการกำจัด H. pylori","ส่วนใหญ่หายเมื่อกำจัด H. pylori"]},
 gist:{n:"GIST",c:"#C7892B",g:null,R:["mesenchymal tumor ที่พบบ่อยที่สุดในท้อง · > ครึ่งอยู่ที่กระเพาะ","จาก interstitial cells of Cajal (pacemaker) · KIT (CD117) ⊕","ส่วนใหญ่ KIT gain-of-function · ส่วนน้อย PDGFRA (ไม่เกิดร่วมกัน)","ก้อนใต้ mucosa · รักษาด้วย imatinib (tyrosine kinase inhibitor)"]}};
function gcaD(){const d=GC[ST.gc];let b=esoStom(0,4,.84,{gTum:d.g,id:11,ulcers:ST.gc==="malt"?[[214,190,6,"#9CC9BE"],[230,226,5,"#9CC9BE"]]:[],lab:false});
 if(ST.gc==="gist")b+=`<circle cx="194" cy="196" r="22" style="fill:#E7B866;stroke:#9A7420;stroke-width:1.6"/>`+TD(194,200,"KIT⊕",{s:10,w:800});
 const B=(px,py)=>[330+px*.78,4+py*.78];b+=bodyFig(330,4,.78,{});
 const N=[[124,94,"Virchow node","supraclavicular ซ้าย"],[138,132,"Irish node","รักแร้ซ้าย"],[100,196,"Sister Mary Joseph","ใต้ผิวหนังรอบสะดือ"],[124,226,"Krukenberg","รังไข่ (มักสองข้าง)"],[100,244,"Blumer shelf","pouch of Douglas (PR)"]];
 {const [kx,ky]=B(76,226);b+=dot(kx,ky,5,d.c)+`<circle cx="${kx}" cy="${ky}" r="9" style="fill:none;stroke:${d.c};stroke-width:1.4"/>`}
 N.forEach(([px,py,n,s],i)=>{const [x1,y1]=B(px,py),ly=36+i*56;b+=`<path d="M${x1},${y1} L${494},${ly}" style="stroke:${d.c};stroke-width:1;opacity:.55"/>`+dot(x1,y1,5,d.c)+`<circle cx="${x1}" cy="${y1}" r="9" style="fill:none;stroke:${d.c};stroke-width:1.4"/>`+T(500,ly+2,n,{a:"start",c:"bh"})+T(500,ly+18,s,{a:"start",c:"s m"})});
 b+=iPanel(8,318,626,d.n,"",d.R,d.c);
 return ESVG(b,`0 0 640 ${318+IPH+6}`)}

/* ---------- 12. peptic ulcer disease ---------- */
const PU={duo:{n:"Duodenal ulcer",c:"#C7892B",u:[[50,292,7]],R:["พบบ่อยกว่า · ใน duodenum ส่วนต้นไม่เกินไม่กี่ cm จาก pylorus","H. pylori ~ เกือบทุกราย · กรดสูง + HCO₃⁻ จาก duodenum ↓","ปวดลดลงเมื่อกิน → น้ำหนักอาจขึ้น · ปวดตอนกลางคืน","ไม่เพิ่มความเสี่ยงมะเร็ง"]},
 gas:{n:"Gastric ulcer",c:"#C2493A",u:[[150,246,7]],R:["lesser curvature รอยต่อ body–antrum","H. pylori, NSAID · กรดปกติหรือต่ำ (mucosal defense เสีย)","ปวดมากขึ้นเมื่อกิน → น้ำหนักลด","ต้อง biopsy ขอบแผล: แยกจากมะเร็ง (ขอบนูน heaped-up)"]}};
function pudD(){const d=PU[ST.pu];let b=esoStom(0,4,.9,{ulcers:d.u,hl:[[d.u[0][0],d.u[0][1],18]],id:12});
 b+=iPanel(300,8,334,d.n,"",d.R,d.c);const y0=IPH+22;
 b+=`<rect x="300" y="${y0}" width="334" height="186" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(314,y0+24,"H. pylori อยู่รอดในกรดได้อย่างไร",{a:"start",c:"bh"});
 const hx=350,hy=y0+104;b+=`<path d="M${hx-26},${hy} C${hx-14},${hy-16} ${hx-2},${hy+16} ${hx+10},${hy} C${hx+20},${hy-14} ${hx+30},${hy+6} ${hx+36},${hy}" style="fill:none;stroke:#2F8A78;stroke-width:9;stroke-linecap:round"/>`;
 for(let i=0;i<4;i++)b+=`<path d="M${hx+36},${hy} q${10+i*3},${-10+i*7} ${22+i*2},${-6+i*5}" style="fill:none;stroke:#2F8A78;stroke-width:1.4"/>`;
 [["Urease","urea → NH₃ ทำให้รอบตัวเป็นกลาง"],["Flagella","ว่ายผ่าน mucus ที่หนืด"],["Adhesins","ยึดเกาะ foveolar cell"],["CagA","กระตุ้นอักเสบ เสี่ยงมะเร็ง"]].forEach(([n,s],i)=>b+=T(426,y0+50+i*36,n,{a:"start",c:"bh"})+T(426,y0+64+i*36,s,{a:"start",c:"s m"}));
 b+=T(10,336,"ทดสอบ: urea breath test / stool antigen (หยุด PPI ก่อน) · biopsy",{a:"start",c:"s m"});
 return ESVG(b,`0 0 640 ${Math.max(346,y0+194)}`)}

/* ---------- 13. ulcer complications ---------- */
const UC={post:{n:"แผล posterior duodenum → เลือดออก",a:"gda",u:[56,300],R:["กัดลึกถึง gastroduodenal artery ที่อยู่ด้านหลัง duodenum","เลือดออก = ภาวะแทรกซ้อนที่พบบ่อยที่สุด อาจเป็นอาการแรก","อาเจียนเลือด / melena / ช็อก"]},
 ant:{n:"แผล anterior duodenum → ทะลุ",a:null,u:[40,286],R:["ทะลุเข้าช่องท้อง → peritonitis · ปวดท้องเฉียบพลัน ท้องแข็ง","อากาศใต้กะบังลม (free air) บนฟิล์มยืน","perforation = 2/3 ของการตายจากแผล PUD (พบเพียง ~5%)","อาจปวดร้าวไปไหล่ (ระคายกะบังลม)"]},
 lesser:{n:"แผล lesser curvature → เลือดออก",a:"lga",u:[154,244],R:["กัดถึง left gastric artery ที่วิ่งตาม lesser curvature","เลือดออกมาก"]},
 pyl:{n:"แผล pyloric channel → อุดตัน",a:null,u:[72,282],R:["บวมหรือแผลเป็นที่ pylorus → gastric outlet obstruction","อาเจียนอาหารไม่ย่อย ปวดเกร็ง · hypochloremic hypokalemic metabolic alkalosis"]}};
function ucD(){const d=UC[ST.uc];let b=esoStom(0,4,.9,{ulcers:[[...d.u,7]],hl:[[...d.u,18]],id:13});
 const s=.9,P=(x,y)=>`${x*s},${4+y*s}`;
 const art=(dd,on)=>`<path d="${dd}" style="fill:none;stroke:${on?CV.bad:"#E39A93"};stroke-width:${on?4.6:2.6};stroke-linecap:round"/>`;
 b+=art(`M${P(186,330)} L${P(186,300)}`,false);
 b+=art(`M${P(186,312)} C${P(170,300)} ${P(160,276)} ${P(150,252)} C${P(140,220)} ${P(150,186)} ${P(140,156)}`,d.a==="lga")+LB(TD(196*s,250*s,"left gastric a.",{s:9,a:"start"}));
 b+=art(`M${P(186,312)} C${P(140,320)} ${P(96,318)} ${P(78,312)} L${P(64,328)}`,d.a==="gda")+LB(TD(115*s,4+330*s,"GDA",{s:9.5,w:800}));
 if(ST.uc==="ant")b+=`<path d="M${40*s},${4+260*s} q-10,-24 4,-46" style="fill:none;stroke:#7FB2D9;stroke-width:3;stroke-dasharray:4 3"/>`+TD(30*s,4+204*s,"free air",{s:10,c:"#235A7A"});
 b+=iPanel(300,8,334,d.n,"",d.R,d.c||CV.bad);
 const y0=IPH+24;b+=T(300,y0,"ความลึกของแผล",{a:"start",c:"bh"});
 b+=wallX(300,y0+10,240,110,{id:13,lesion:{x0:400,x1:448,depth:ST.uc==="ant"?"through":"mus",kind:"ulcer",blood:d.a!=null}});
 return ESVG(b,`0 0 640 ${Math.max(340,y0+128)}`)}

/* ---------- 14. acute GI bleeding ---------- */
const GBN={nodes:{s:[190,4,260,40,"Acute GI bleeding","ABC · 2 large-bore IV · Hb < 7 → ให้เลือด",CV.acc],up:[10,80,290,54,"Upper (เหนือ ligament of Treitz)","hematemesis · melena · BUN/Cr ↑","#C2493A"],lo:[340,80,290,54,"Lower","hematochezia (เลือดสด/แดงคล้ำ)","#3E6FB0"],
 egd:[10,164,140,58,"EGD ภายใน 24 ชม.","PPI ± erythromycin","#C2493A"],cir:[160,164,140,58,"สงสัย varices","octreotide + ceftriaxone","#3E6FB0"],col:[340,164,140,58,"Colonoscopy","หลัง bowel prep",CV.teal],cta:[490,164,140,58,"ไม่เสถียร","EGD ก่อน → CTA / angio",CV.gold]},
 edges:[["s","up"],["s","lo"],["up","egd"],["up","cir"],["lo","col"],["lo","cta"]]};
const GBP={upper:["s","up","egd"],varix:["s","up","cir"],lower:["s","lo","col"],unstable:["s","lo","cta"]};
const GBC={upper:[["Peptic ulcer","~50% ของ UGIB"],["Erosions (NSAID)","esophagitis/gastritis"],["Mallory-Weiss","2–10%"],["Varices","ผล outcome แย่สุด"]],varix:[["Esophageal varices","ligation + vasoactive"],["Gastric varices","glue / TIPS"],["ไม่หยุด / ซ้ำ","TIPS"],["ระยะยาว","NSBB + ligation"]],
 lower:[["Diverticulosis","ไม่เจ็บ มาก หยุดเอง ≥ 90%"],["Angiodysplasia","ผู้สูงอายุ เรื้อรัง"],["Cancer / polyp","occult, iron deficiency"],["Colitis / hemorrhoids","ischemic, IBD"]],unstable:[["Hematochezia + ช็อก","อาจเป็น UGIB ที่ไหลเร็ว"],["CTA","หาจุดรั่ว"],["Angiography","embolize"],["Surgery","ถ้ายังไม่หยุด"]]};
function gibD(){const k=ST.gb;let b=tree(GBN,GBP[k]);
 b+=T(10,252,"สาเหตุที่ต้องคิด",{a:"start",c:"bh"});GBC[k].forEach(([n,s],i)=>{const x=10+i*157;b+=`<rect x="${x}" y="262" width="150" height="50" rx="10" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(x+10,282,n,{a:"start",c:"bh"})+T(x+10,300,s,{a:"start",c:"s m"})});
 b+=T(10,340,"Stigmata ของแผลเลือดออก (เสี่ยงเลือดออกซ้ำ: สูง → ต่ำ)",{a:"start",c:"bh"});
 const SS=[["Active bleeding","#B3263B"],["Visible vessel","#C2493A"],["Adherent clot","#D9822B"],["Flat spot","#C7A23A"],["Clean base","#2F8A78"]];
 SS.forEach(([n,c],i)=>{const x=10+i*125;b+=`<rect x="${x}" y="350" width="118" height="30" rx="15" style="fill:${c}"/>`+`<text x="${x+59}" y="369" text-anchor="middle" style="font:700 11px var(--sb-font);fill:#fff">${n}</text>`});
 b+=T(10,400,"2 อันแรก → endoscopic therapy + high-dose PPI (clot: ± endoscopic) · clean base → กลับบ้านได้",{a:"start",c:"s m"});
 return ESVG(b,"0 0 640 410")}

/* ---------- extra: gastric polyps ---------- */
const GP={fgp:["Fundic gland polyp","ใช้ PPI นาน · FAP · cystic dilated fundic glands · แทบไม่เสี่ยง (ยกเว้นใน FAP)","#2F8A78"],hyp:["Inflammatory / hyperplastic","พื้น chronic gastritis (H. pylori) · ก้อนยิ่งใหญ่ (> 1.5 cm) ยิ่งเสี่ยง dysplasia","#C7892B"],aden:["Gastric adenoma","พื้น atrophy + intestinal metaplasia · มีมะเร็งร่วมบ่อย (ต่างจาก colon) → ต้องตัด","#C2334A"]};
function gpolD(){let b="";Object.entries(GP).forEach(([k,[n,s,c]],i)=>{const on=ST.gp===k,x=8+i*212;b+=`<rect x="${x}" y="8" width="202" height="230" rx="14" style="fill:color-mix(in srgb,${c} ${on?18:7}%,var(--sb-surface));stroke:${on?c:"var(--sb-line)"};stroke-width:${on?2:1}"/>`;
  b+=`<path d="M${x+20},150 H${x+182}" style="stroke:${GI.mucD};stroke-width:8;stroke-linecap:round"/>`;
  const py=k==="aden"?[[x+70,150],[x+80,96],[x+122,92],[x+132,150]]:[[x+76,150],[x+84,108],[x+118,104],[x+126,150]];b+=`<path d="${sm(py)}" style="fill:${k==="aden"?"#B57AC8":GI.muc};stroke:${GI.mucD};stroke-width:1.4"/>`;
  if(k==="fgp")for(let j=0;j<5;j++)b+=`<circle cx="${x+88+j*7}" cy="${124+(j%2)*10}" r="4" style="fill:#FBEFF3;stroke:${HE.mem}"/>`;
  b+=T(x+101,36,n,{c:"bh"})+wrapT(x+14,180,s,30,"s",14)});
 b+=cardA(8,250,626,"GIST (เปรียบเทียบ)",["mesenchymal tumor ไม่ใช่ epithelial polyp · ก้อนใต้ mucosa ที่ผิวมักเรียบ · KIT/CD117 ⊕ · imatinib"],CV.gold);
 return ESVG(b,"0 0 640 330")}

/* ================= sections ================= */
SEC.push({id:"oral",k:"a",t:"Oral lesions: aphthous ulcer, leukoplakia & squamous cell carcinoma",mm:"Aphthous · leukoplakia · oral SCC",leg:[],tools:[["ol",[["aph","Aphthous"],["leuko","Leukoplakia"],["eryth","Erythroplakia"],["hairy","Hairy leuko."],["scc","SCC"]]]],draw:oralD,
notes:()=>`<div class="pearl">ปื้นขาวที่ <b>ขูดไม่ออก</b> = leukoplakia ต้อง biopsy · ปื้นแดง (erythroplakia) อันตรายกว่า ${S.r}</div>
<ul><li><b>Aphthous ulcer</b>: แผลตื้น เจ็บ เป็นซ้ำ ขอบแดง คลุมด้วย exudate บาง ๆ · สาเหตุไม่ชัด พบมากในช่วงอายุ 20 ปีแรก ${S.r}</li>
<li>Aphthous ulcer สัมพันธ์กับ celiac disease, IBD และ Behçet disease · หายเองใน 7–10 วัน (นานกว่าในผู้ภูมิคุ้มกันต่ำ) ${S.r}</li>
<li><b>Leukoplakia</b> นิยามโดย WHO = ปื้นขาวที่ขูดไม่ออกและอธิบายด้วยโรคอื่นไม่ได้ · 5–25% เป็นรอยโรคก่อนมะเร็ง ${S.r}</li>
<li><b>Erythroplakia</b>: ปื้นแดงนุ่มเรียบหรือกร่อน · เกือบทั้งหมด (~90%) เป็น severe dysplasia, CIS หรือมะเร็งระยะต้น ${S.r}</li>
<li><b>Hairy leukoplakia</b>: ปื้นขาวเป็นริ้วที่ขอบข้างลิ้น จาก EBV ในผู้ภูมิคุ้มกันบกพร่อง (HIV) · ไม่ใช่ก่อนมะเร็ง ${S.r}</li>
<li>มะเร็งช่องปากและ oropharynx ส่วนใหญ่เป็น <b>SCC</b> · ช่องปากสัมพันธ์บุหรี่และแอลกอฮอล์ · oropharynx สัมพันธ์ <b>HPV</b> มากขึ้น ตรวจด้วย p16 ${S.r}</li>
<li><b>Field cancerization</b>: เยื่อบุทั้งทางเดินอาหาร-หายใจส่วนบนสัมผัสสารก่อมะเร็ง → เกิดก้อนปฐมภูมิใหม่ได้ 3–7% ต่อปี ${S.r}</li>
<li>SCC เป็นมะเร็งที่พบบ่อยที่สุดของช่องปาก มักที่ลิ้น · มาด้วย<b>แผลไม่หาย ขอบนูนไม่เรียบ</b> · สัมพันธ์บุหรี่ แอลกอฮอล์ HPV-16 · ตั้งต้นจาก leukoplakia/erythroplakia ${S.fa}</li></ul>`});

SEC.push({id:"salivary",k:"a",t:"Salivary gland disease & tumors",mm:"Salivary gland tumors",leg:[],tools:[["sg",[["pleo","Pleomorphic"],["warthin","Warthin"],["muco","Mucoepidermoid"],["stone","Stone / sialadenitis"]]]],draw:salD,
notes:()=>`<div class="pearl">เนื้องอกส่วนใหญ่อยู่ที่ <b>parotid</b> และส่วนใหญ่ benign · ต่อมเล็กกว่ามีสัดส่วนมะเร็งสูงกว่า ${S.r}</div>
<ul><li>เนื้องอกต่อมน้ำลาย 65–80% อยู่ที่ parotid · ~10% submandibular · ที่เหลือต่อมเล็ก ${S.r}</li>
<li>สัดส่วนมะเร็ง: submandibular ~40%, minor salivary ~50%, sublingual 70–90% ${S.r}</li>
<li><b>Pleomorphic adenoma</b> พบบ่อยที่สุด (~60% ของก้อน parotid): ductal + myoepithelial + stroma แบบ mesenchymal · PLAG1 rearrangement · รังสีเพิ่มความเสี่ยง ${S.r}</li>
<li>Pleomorphic adenoma มีปุ่มยื่นทะลุ capsule → ผ่าตัดแบบควักออกเกิดซ้ำได้ · อาจกลายเป็นมะเร็ง (carcinoma ex pleomorphic adenoma) ${S.r} ${S.fa}</li>
<li><b>Warthin tumor</b> เกือบทั้งหมดอยู่ที่ parotid · ผู้ชาย · ความเสี่ยงเพิ่ม ~8 เท่าในคนสูบบุหรี่ · บางรายสองข้าง ${S.r}</li>
<li>Warthin: ช่อง cyst บุด้วย epithelium 2 ชั้น (oncocytic) บน lymphoid stroma ที่มี germinal center ${S.r}</li>
<li><b>Mucoepidermoid carcinoma</b>: มะเร็งต่อมน้ำลายที่พบบ่อยที่สุด (~15% ของทั้งหมด) · squamous + mucous cells · CRTC1-MAML2 fusion จาก t(11;19) ${S.r}</li>
<li>ก้อนต่อมน้ำลายส่วนใหญ่ไม่เจ็บ · <b>ปวดหรือ facial nerve อ่อนแรง</b> → สงสัยมะเร็ง ${S.fa}</li>
<li><b>Sialadenitis</b> จากแบคทีเรีย (S. aureus, viridans strep) มักตามหลังนิ่วอุดท่อ หรือน้ำลายน้อย (ขาดน้ำ หลังผ่าตัด) ${S.r}</li>
<li><b>Sialolithiasis</b>: นิ่วในท่อต่อมน้ำลายใหญ่ · ปวดบวมซ้ำ ๆ ก่อน/ระหว่างกิน · สัมพันธ์น้ำลายคั่ง (ขาดน้ำ) และบาดเจ็บ ${S.fa}</li></ul>`});

SEC.push({id:"achalasia",k:"b",t:"Achalasia & esophageal dysmotility",mm:"Achalasia",leg:[],tools:[["ac",[["norm","Normal"],["ach","Achalasia"],["sclero","Scleroderma"],["des","DES"]]]],draw:achD,
notes:()=>`<div class="pearl">Achalasia = triad: LES <b>ไม่คลาย</b> + LES tone ↑ + <b>aperistalsis</b> ของตัวหลอดอาหาร ${S.r}</div>
<ul><li>Primary achalasia เกิดจาก neuron ที่สร้าง <b>nitric oxide</b> (inhibitory) ใน myenteric plexus เสื่อม → LES คลายไม่ได้ ${S.r}</li>
<li>Secondary: <b>Chagas disease</b> (Trypanosoma cruzi) ทำลาย myenteric plexus · อาจเป็นที่ colon, duodenum, ureter ด้วย ${S.r}</li>
<li>Achalasia-like จาก diabetic neuropathy, มะเร็ง/amyloid/sarcoid แทรกซึม (pseudoachalasia) ${S.r}</li>
<li>อาการ: กลืนลำบาก<b>ทั้งของแข็งและน้ำ</b>ตั้งแต่แรก · เรอยาก · เจ็บอก · สำรอกอาหาร ${S.r} ${S.fa}</li>
<li>Barium swallow: หลอดอาหารขยาย ปลายเรียวเป็น <b>bird's beak</b> · manometry: LES ไม่คลาย ไม่มี peristalsis ${S.fa}</li>
<li>รักษา: myotomy, pneumatic dilation, botulinum toxin (ยับยั้ง cholinergic neuron) ${S.r}</li>
<li>เสี่ยง SCC เพิ่มเล็กน้อย แต่ไม่มากพอให้ส่องกล้องเฝ้าระวัง ${S.r}</li>
<li><b>Systemic sclerosis</b>: กล้ามเนื้อเรียบฝ่อแทนด้วย fibrosis → LES หลวม + peristalsis ลดลง → GERD รุนแรงและ stricture ${S.fa}</li>
<li><b>Diffuse esophageal spasm</b> และ nutcracker esophagus เป็น motility disorder ที่ทำให้เจ็บอกและกลืนลำบากเป็นพัก ๆ ${S.r} ${S.fa}</li></ul>`});

SEC.push({id:"gerd",k:"b",t:"GERD, hiatal hernia & esophagitis",mm:"GERD · esophagitis",leg:[],tools:[["hh",[["norm","Normal GEJ"],["slide","Sliding"],["para","Paraesophageal"]]],["ez",[["reflux","Reflux"],["eoe","Eosinophilic"],["cand","Candida"],["hsv","HSV"],["cmv","CMV"],["pill","Pill"]]]],draw:gerdD,
notes:()=>`<ul><li><b>Reflux</b> เป็นสาเหตุที่พบบ่อยที่สุดของ esophagitis · กลไกหลักคือ <b>transient LES relaxation</b> ผ่าน vagus (กระตุ้นด้วยกระเพาะยืด) ${S.r}</li>
<li>ปัจจัยร่วม: alcohol บุหรี่ อ้วน ตั้งครรภ์ ยากดระบบประสาท hiatal hernia · กรดในกระเพาะ+bile ทำลาย squamous epithelium ${S.r}</li>
<li>อาการ: heartburn, regurgitation รสเปรี้ยว, กลืนลำบาก · บางครั้งเจ็บอกคล้ายหัวใจ หรือไอเรื้อรัง/หอบหืด/เสียงแหบ ${S.r} ${S.fa}</li>
<li>วินิจฉัยจากอาการ ให้ PPI ได้เลย · ส่องกล้องเมื่อไม่ตอบสนอง หรือมีอาการเตือน · อาการไม่สัมพันธ์กับความรุนแรงทาง histology ${S.r}</li>
<li>Histology: eosinophil ใน epithelium, basal zone hyperplasia, papilla ยาวขึ้น ${S.r}</li>
<li><b>Sliding hiatal hernia</b> พบบ่อยสุด (crura แยก GEJ เลื่อนขึ้นอก) · <b>paraesophageal</b> ทะลุผ่าน phrenoesophageal membrane มักต้องผ่าตัด · hernia มีอาการ &lt; 10% ${S.r}</li>
<li><b>Eosinophilic esophagitis</b>: สัมพันธ์ภูมิแพ้ · อาหารติดคอ · endoscopy เป็นวงแหวนซ้อน (feline) + furrow · eosinophil จำนวนมาก · รักษาด้วยงดอาหารที่แพ้ + steroid เฉพาะที่ ${S.r}</li>
<li>Infectious esophagitis ในผู้ภูมิคุ้มกันบกพร่อง: <b>Candida</b> (pseudomembrane ขาวเทา), <b>HSV</b> (แผลเจาะเล็ก), <b>CMV</b> (แผลตื้นยาว, inclusion ใน endothelium) ${S.r} ${S.fa}</li>
<li>Pill esophagitis: ยาค้างที่จุดแคบ (doxycycline, NSAID, bisphosphonate) · สารกัดกร่อนทำให้ stricture ${S.r} ${S.fa}</li></ul>`});

SEC.push({id:"barrett",k:"b",t:"Barrett esophagus: metaplasia → dysplasia → adenocarcinoma",mm:"Barrett esophagus",leg:[],tools:[["bs",[["0","Squamous"],["1","Metaplasia"],["2","Low-grade"],["3","High-grade"],["4","Cancer"]]]],draw:barD,
notes:()=>`<div class="pearl">แตะทีละขั้น: Barrett = <b>intestinal metaplasia</b> (columnar + goblet cells) แทน squamous ที่ส่วนปลาย จาก GERD เรื้อรัง ${S.r}</div>
<ul><li>Barrett พบใน ~10% ของผู้ป่วย GERD ที่มีอาการ · มากในชายผิวขาว อายุ 40–60 ปี ${S.r}</li>
<li>วินิจฉัยต้องมีทั้ง endoscopy (mucosa สีแดงกำมะหยี่ยื่นขึ้นจาก GEJ) และ biopsy ที่เห็น <b>goblet cells</b> ${S.r}</li>
<li>แบ่ง long-segment (≥ 3 cm) และ short-segment (&lt; 3 cm) · long segment เสี่ยง dysplasia และมะเร็งมากกว่า ${S.r}</li>
<li>Dysplasia: low-grade และ high-grade (โครงสร้าง cribriform, gland-in-gland) · บุก lamina propria = intramucosal carcinoma ${S.r}</li>
<li><b>Esophageal adenocarcinoma</b> เกือบทั้งหมดเกิดบนพื้น Barrett แต่ผู้ที่เป็น Barrett ส่วนใหญ่ไม่เป็นมะเร็ง ${S.r}</li>
<li>การกลายเป็นมะเร็งเกิดทีละขั้น: TP53 และ CDKN2A เสียตั้งแต่ต้น → ภายหลัง amplify EGFR, ERBB2, MET, cyclin D1/E ${S.r}</li>
<li>เฝ้าระวังด้วยส่องกล้องเป็นระยะ · high-grade dysplasia หรือ intramucosal carcinoma → ablation / endoscopic mucosectomy / esophagectomy ${S.r}</li>
<li>FA: Barrett คือ metaplasia จาก squamous → <b>nonciliated columnar with goblet cells</b> ${S.fa}</li></ul>`});

SEC.push({id:"esoph-tears",k:"b",t:"Esophageal varices, Mallory-Weiss & Boerhaave",mm:"Varices · Mallory-Weiss · Boerhaave",leg:[],tools:[["et",[["mw","Mallory-Weiss"],["boer","Boerhaave"],["varix","Varices"]]]],draw:tearD,
notes:()=>`<div class="pearl">ทั้งสามโรคมาด้วยอาเจียนเป็นเลือดได้ · แยกด้วย<b>ความลึก</b>: MW แค่ mucosa · Boerhaave ทะลุทุกชั้น · varices อยู่ใน submucosa ${S.r} ${S.fa}</div>
<ul><li><b>Mallory-Weiss</b>: แผลฉีกตามยาวที่ GEJ หลังขย้อน/อาเจียนรุนแรง (เช่น เมาสุรา) · reflex คลายของ GEJ ก่อนอาเจียนล้มเหลว ผนังจึงถูกยืดจนฉีก ${S.r}</li>
<li>FA: MW จำกัดอยู่ mucosa/submucosa · พบในผู้ดื่มสุราและ bulimia nervosa ${S.fa}</li>
<li>MW เป็นสาเหตุถึง 10% ของ UGIB · มักหยุดเอง ไม่ต้องผ่าตัด หายเร็ว ${S.r} ${S.h}</li>
<li><b>Boerhaave</b>: ฉีกทะลุ transmural พบน้อยแต่รุนแรง → mediastinitis · เจ็บอกรุนแรง อากาศใต้ผิวหนัง ${S.r} ${S.fa}</li>
<li><b>Varices</b>: portal hypertension → collateral ผ่าน left gastric → esophageal veins → azygos · เส้นเลือดขดใน mucosa/submucosa ส่วนปลายหลอดอาหารและ cardia ${S.r}</li>
<li>สาเหตุ: cirrhosis (ส่วนใหญ่จาก alcohol) · ทั่วโลกอันดับสองคือ hepatic schistosomiasis ${S.r}</li>
<li>Varices พบใน 30% ของ compensated cirrhosis และ 60% ของ decompensated · ไม่เจ็บ ไม่มีอาการจนแตก ${S.r}</li>
<li>เลือดออกแต่ละครั้งเสียชีวิต 15–20% · รอดแล้วกว่าครึ่งเลือดออกซ้ำใน 1 ปี ${S.r}</li>
<li>รักษาเฉียบพลัน: endoscopic band ligation + vasoactive (octreotide/terlipressin) + antibiotic · ป้องกันซ้ำ: nonselective β-blocker + ligation · ไม่หยุด → TIPS ${S.h}</li></ul>`});

SEC.push({id:"dysphagia",k:"b",t:"Dysphagia: webs, rings, Plummer-Vinson & strictures",mm:"Dysphagia · Plummer-Vinson",leg:[],tools:[["dy",[["web","Plummer-Vinson"],["ring","Schatzki ring"],["str","Stricture"],["ach","Achalasia"],["des","DES"]]]],draw:dysD,
notes:()=>`<div class="pearl">คำถามแรก: กลืน<b>ของแข็งอย่างเดียว</b> (อุดตันเชิงกล) หรือ<b>ทั้งของแข็งและน้ำ</b> (motility) ${S.fa} · คำถามสอง: เป็นพัก ๆ หรือแย่ลงเรื่อย ๆ ${S.x}</div>
<ul><li><b>Esophageal web</b>: แผ่นเยื่อยื่นเป็นหิ้งไม่รอบวง · หญิงอายุ &gt; 40 ปี · กลืนอาหารชิ้นใหญ่ติดแบบไม่ลุกลาม ${S.r}</li>
<li><b>Plummer-Vinson syndrome</b>: web ที่หลอดอาหารส่วนบน + iron deficiency anemia + glossitis + cheilosis · เสี่ยง SCC ${S.r} ${S.fa}</li>
<li><b>Schatzki ring</b>: วงหนารอบวงที่ปลายหลอดอาหาร · A ring อยู่เหนือ GEJ (squamous) · B ring อยู่ที่ squamocolumnar junction ${S.r}</li>
<li><b>Stricture</b>: แผลเป็นจาก reflux เรื้อรัง ฉายแสง สารกัดกร่อน · benign ยังกินได้ไม่ผอม · malignant น้ำหนักลด ${S.r}</li>
<li>Motility (ของแข็ง + น้ำ): achalasia, scleroderma (ค่อย ๆ แย่ลง) · diffuse esophageal spasm (เป็นพัก ๆ เจ็บอก) ${S.fa}</li>
<li>Oropharyngeal dysphagia: เริ่มกลืนไม่ได้ สำลัก ไอ อาหารออกจมูก → stroke, myasthenia gravis, Zenker diverticulum ${S.fa}</li>
<li>Work-up: esophageal dysphagia → <b>EGD</b> เป็นการตรวจแรก (barium ก่อนถ้าเคยฉายแสง/stricture เพราะเสี่ยงทะลุ) → manometry · oropharyngeal → modified barium swallow ${S.fa}</li></ul>`});

SEC.push({id:"esoph-ca",k:"b",t:"Esophageal cancer: squamous cell vs adenocarcinoma",mm:"Esophageal cancer",leg:[],tools:[["ec",[["scc","Squamous cell"],["ad","Adenocarcinoma"]]]],draw:escD,
notes:()=>`<ul><li>มะเร็งหลอดอาหารเกือบทั้งหมดเป็น SCC หรือ adenocarcinoma · SCC พบมากกว่าทั่วโลก แต่ adenocarcinoma เพิ่มเร็วและเกินครึ่งในสหรัฐฯ ${S.r}</li>
<li><b>SCC</b>: ครึ่งหนึ่งอยู่ <b>middle third</b> · ผู้ใหญ่ &gt; 45 ปี ชาย 4 เท่า ${S.r}</li>
<li>ปัจจัยเสี่ยง SCC: alcohol + บุหรี่ (เสริมกัน), ยากจน, caustic injury, achalasia, Plummer-Vinson, tylosis, ขาดผักผลไม้, <b>เครื่องดื่มร้อนจัด</b>, ฉายแสงที่ mediastinum ${S.r}</li>
<li>SCC: อุบัติการณ์ต่างกันได้ถึง 180 เท่าระหว่างพื้นที่ (อิหร่าน จีนตอนกลาง) · สารก่อมะเร็ง: nitrosamine, เชื้อราในอาหาร ${S.r}</li>
<li><b>Adenocarcinoma</b>: <b>distal third</b> ลามถึง cardia · เกิดบน Barrett จาก GERD นาน · อ้วน บุหรี่ รังสี · ชาย 7 เท่า ${S.r}</li>
<li>H. pylori บางสายพันธุ์สัมพันธ์กับความเสี่ยง adenocarcinoma ที่<b>ลดลง</b> (gastric atrophy → กรดและ reflux ลด) ${S.r}</li>
<li>อาการ: กลืนลำบากที่แย่ลง (แข็ง → เหลว), odynophagia, น้ำหนักลด, อาเจียนเลือด, iron deficiency · SCC ลาม trachea → tracheoesophageal fistula ${S.r}</li>
<li>พยากรณ์: adenocarcinoma 5-year survival &lt; 25% · ถ้าจำกัดอยู่ mucosa/submucosa ~80% ${S.r}</li>
<li>ผนังหลอดอาหาร<b>ไม่มี serosa</b> → ลามเร็ว พบตอนลุกลามแล้ว · กลืนแข็งก่อน แล้วจึงน้ำ ${S.fa}</li></ul>`});

SEC.push({id:"gastritis",k:"c",t:"Gastritis: acute, stress ulcers & chronic (type A vs B)",mm:"Gastritis A vs B",leg:[],tools:[["gt",[["acute","Acute / NSAID"],["stress","Stress ulcer"],["hp","H. pylori (B)"],["aig","Autoimmune (A)"]]]],draw:gastD,
notes:()=>`<div class="pearl">Type <b>A</b> = <b>A</b>utoimmune, body/fundus, <b>A</b>chlorhydria, gastrin ↑↑, B12 ↓ · Type <b>B</b> = <b>B</b>acteria (H. pylori), antrum ${S.fa} ${S.r}</div>
<ul><li>Gastritis = mucosa อักเสบ · ถ้าแทบไม่มีเซลล์อักเสบเรียก gastropathy · เกิดเมื่อแรงทำลายเกินกลไกป้องกัน (mucus, HCO₃⁻, blood flow, epithelium) ${S.r}</li>
<li><b>NSAID</b> ยับยั้ง COX → PGE₂/PGI₂ ↓ → mucus, HCO₃⁻, blood flow และการซ่อมแซม ↓ · COX-2 selective ก็ทำได้ ${S.r}</li>
<li>Uremia และ urease ของ H. pylori → NH₄⁺ ยับยั้ง HCO₃⁻ transporter · ผู้สูงอายุ mucus/HCO₃⁻ น้อยลง ${S.r}</li>
<li><b>Stress-related mucosal disease</b>: ช็อก sepsis บาดเจ็บรุนแรง → <b>ขาดเลือดเฉพาะที่</b> · แผลกลมเล็ก &lt; 1 cm หลายแห่ง ฐานสีน้ำตาลดำ ${S.r}</li>
<li><b>Curling ulcer</b> = ไฟไหม้/บาดเจ็บรุนแรง (duodenum ส่วนต้น) · <b>Cushing ulcer</b> = โรคในกะโหลก กระตุ้น vagus → กรด ↑ เสี่ยงทะลุ ${S.r}</li>
<li><b>H. pylori</b>: สาเหตุบ่อยที่สุดของ chronic gastritis · ติดตั้งแต่เด็ก fecal-oral · antral gastritis กรดปกติหรือ ↑ → PUD ${S.r}</li>
<li>H. pylori ลามถึง body → multifocal atrophy + intestinal metaplasia → กรดลดและเสี่ยง adenocarcinoma ${S.r}</li>
<li><b>Autoimmune atrophic gastritis</b>: CD4 T cell ต่อ H⁺/K⁺-ATPase · anti-parietal cell/anti-IF Ab · achlorhydria → G-cell hyperplasia, gastrin สูงมาก, B12 ↓ (pernicious anemia) ${S.r}</li>
<li>AIG ไม่แตะ antrum · เสี่ยง adenocarcinoma และ neuroendocrine tumor (ECL hyperplasia จาก gastrin) ${S.r} ${S.fa}</li></ul>`});

SEC.push({id:"menetrier",k:"c",t:"Ménétrier disease & hypertrophic gastropathy",mm:"Ménétrier disease",leg:[],tools:[["mn",[["men","Ménétrier"],["zes","Zollinger-Ellison"],["norm","Normal"]]]],draw:menD,
notes:()=>`<ul><li>Hypertrophic gastropathy = rugae ใหญ่เหมือนสมอง จาก epithelium hyperplasia <b>โดยไม่มีการอักเสบ</b> · เกิดจาก growth factor เกิน ${S.r}</li>
<li><b>Ménétrier disease</b>: หลั่ง <b>TGF-α</b> มาก → EGFR ทำงานเกิน → <b>foveolar (mucous) cell hyperplasia</b> ที่ body/fundus · antrum ปกติ ${S.r}</li>
<li>Gland ยาวคดแบบ corkscrew และเป็น cyst · parietal/chief cells ลดลง → กรดลด ${S.r}</li>
<li><b>Protein-losing</b>: albumin รั่วทาง mucosa ได้ถึง ~10 g/วัน → hypoalbuminemia บวม น้ำหนักลด ท้องเสีย ${S.r}</li>
<li>เด็กมักหายเองหลังติด CMV · ผู้ใหญ่เสี่ยง gastric adenocarcinoma เพิ่ม ${S.r}</li>
<li>รักษาประคับประคอง (albumin, โภชนาการ) · anti-EGFR antibody ได้ผลหลายราย · รุนแรง → gastrectomy ${S.r}</li>
<li><b>Zollinger-Ellison</b> ก็ rugae หนาแต่เป็น <b>parietal cell</b> hyperplasia จาก gastrin → กรดสูง แผลหลายแห่ง · gastrinoma 60–90% เป็นมะเร็ง ${S.r}</li>
<li>FA: Ménétrier = gastric hyperplasia + rugae ใหญ่ + protein loss + parietal cell atrophy + mucous cell hyperplasia → <b>precancerous</b> ${S.fa}</li></ul>`});

SEC.push({id:"gastric-ca",k:"c",t:"Gastric cancer: intestinal vs diffuse, metastatic signs, MALT & GIST",mm:"Gastric cancer",leg:[],tools:[["gc",[["int","Intestinal"],["diff","Diffuse"],["malt","MALT lymphoma"],["gist","GIST"]]]],draw:gcaD,
notes:()=>`<div class="pearl">จุดที่ลามไปตามภาพ: <b>Virchow</b> (supraclavicular ซ้าย), <b>Sister Mary Joseph</b> (สะดือ), <b>Krukenberg</b> (รังไข่), Irish node (รักแร้ซ้าย), Blumer shelf ${S.r} ${S.fa}</div>
<ul><li>Adenocarcinoma เป็นมะเร็งกระเพาะที่พบบ่อยที่สุด (&gt; 90%) · อาการต้นคล้าย gastritis/PUD จึงมักพบระยะลุกลาม: น้ำหนักลด อิ่มเร็ว ซีด ${S.r}</li>
<li>อุบัติการณ์ต่างตามภูมิศาสตร์ (ญี่ปุ่น ชิลี คอสตาริกา ยุโรปตะวันออก สูงถึง 20 เท่า) · ญี่ปุ่นคัดกรองด้วยกล้องพบ early gastric cancer มาก ${S.r}</li>
<li><b>Intestinal type</b>: ก้อนนูน/แผลขอบนูนที่ antrum, lesser curvature · สร้าง gland · บนพื้น H. pylori → atrophy → intestinal metaplasia · อาหาร N-nitroso, อาหารรมควัน · Wnt/APC ${S.r}</li>
<li><b>Diffuse type</b>: <b>signet-ring cells</b> แทรกทั่วผนัง → <b>linitis plastica</b> · สูญเสีย E-cadherin (CDH1 germline ในครอบครัว, ~50% sporadic) ${S.r}</li>
<li>อุบัติการณ์ที่ลดลง 85% เกิดกับ intestinal type เท่านั้น · มะเร็ง cardia เพิ่มขึ้น (สัมพันธ์ GERD/Barrett) ${S.r}</li>
<li>อาการ <b>WEAPON</b>: Weight loss, Early satiety, Abdominal Pain, Obstruction, acanthosis Nigricans / Leser-Trélat sign ${S.fa}</li>
<li>พยากรณ์ขึ้นกับความลึกและการลาม · early gastric cancer 5-year &gt; 90% · advanced &lt; 20% ${S.r}</li>
<li><b>MALT lymphoma</b>: B cell lymphoma จาก H. pylori · ส่วนใหญ่หายเมื่อกำจัดเชื้อ ยกเว้นมี t(11;18) ${S.r}</li>
<li><b>GIST</b>: mesenchymal tumor ที่พบบ่อยที่สุดในท้อง (&gt; ครึ่งที่กระเพาะ) · จาก interstitial cells of Cajal · KIT (CD117) gain-of-function → imatinib ${S.r}</li></ul>`});

SEC.push({id:"pud",k:"c",t:"Peptic ulcer disease: gastric vs duodenal",mm:"Peptic ulcer",leg:[],tools:[["pu",[["duo","Duodenal"],["gas","Gastric"]]]],draw:pudD,
notes:()=>`<div class="pearl">Duodenal: ปวด<b>ลดลง</b>เมื่อกิน · Gastric: ปวด<b>มากขึ้น</b>เมื่อกิน และต้อง biopsy แยกมะเร็ง ${S.fa}</div>
<ul><li>PUD = แผลเรื้อรังของ duodenum หรือกระเพาะ · เกือบทั้งหมดสัมพันธ์ <b>H. pylori</b>, NSAID หรือบุหรี่ ${S.r}</li>
<li>H. pylori antral gastritis → กรดเพิ่ม + HCO₃⁻ ของ duodenum ลดลง → แผล duodenum/antrum ${S.r}</li>
<li>ปัจจัยอื่น: NSAID (corticosteroid เสริม), บุหรี่, COPD, cocaine, alcoholic cirrhosis (duodenal), ZES (แผลถึง jejunum), CMV/HSV ${S.r}</li>
<li>ผู้ที่มี gastric atrophy กรดต่ำ จึง<b>ไม่ค่อย</b>เป็นแผล duodenum · และ PUD สัมพันธ์กับความเสี่ยงมะเร็งกระเพาะที่ลดลง ${S.r}</li>
<li>Duodenal ulcer อยู่ใกล้ pylorus ไม่กี่ cm · gastric ulcer อยู่ lesser curvature รอยต่อ body–antrum · &gt; 80% เป็นแผลเดียว ${S.r}</li>
<li>Morphology: ขอบเรียบเสมอผิว ฐานสะอาด (กรดย่อย exudate) · ขอบนูน heaped-up คิดถึงมะเร็ง ${S.r}</li>
<li>อาการ: แสบปวดลิ้นปี่ 1–3 ชม. หลังอาหาร แย่ตอนกลางคืน ดีขึ้นด้วยยาลดกรดหรืออาหาร ${S.r}</li>
<li>H. pylori virulence: flagella, <b>urease</b> (NH₃), adhesins, CagA · ตรวจด้วย urea breath test, stool antigen หรือ biopsy ${S.r} ${S.fa}</li>
<li>H. pylori พบ ~70% ของ gastric ulcer และ ~90% ของ duodenal ulcer · gastric ulcer ต้อง biopsy ขอบ · duodenal ulcer มักไม่ต้อง ${S.fa}</li>
<li>แผลเกือบทั้งหมดหายเมื่อลดกรดและกำจัด H. pylori ${S.r}</li></ul>`});

SEC.push({id:"ulcer-cx",k:"c",t:"Ulcer complications: hemorrhage, perforation & obstruction",mm:"Ulcer complications",leg:[],tools:[["uc",[["post","Posterior duodenal"],["ant","Anterior duodenal"],["lesser","Lesser curvature"],["pyl","Pyloric channel"]]]],draw:ucD,
notes:()=>`<div class="pearl">ตำแหน่งบอกหลอดเลือด: posterior duodenum → <b>gastroduodenal a.</b> · lesser curvature → <b>left gastric a.</b> ${S.fa}</div>
<ul><li><b>Bleeding</b>: ภาวะแทรกซ้อนที่พบบ่อยที่สุด · อาจเป็นอาการแรกของแผล และอันตรายถึงชีวิต ${S.r}</li>
<li><b>Perforation</b>: เป็นสาเหตุ 2/3 ของการตายจากแผล · แต่ไม่ค่อยเป็นอาการแรก · free air ใต้กะบังลม = ผ่าตัดด่วน ${S.r}</li>
<li>แผล <b>anterior</b> duodenum ทะลุเข้าช่องท้อง → pneumoperitoneum · ปวดร้าวไหล่จากระคาย phrenic nerve ${S.fa}</li>
<li>ความลึกของแผลอาจถูกจำกัดโดย muscularis ที่หนา หรือโดยตับอ่อน ไขมัน omentum หรือตับที่มาติดฐานแผล ${S.r}</li>
<li>หลอดเลือดใหญ่ในฐานแผลผนังหนาและอาจมี thrombus · เลือดออกจากหลอดเลือดเหล่านี้รุนแรง ${S.r}</li>
<li><b>Obstruction</b>: มักจากแผลเรื้อรังที่ pyloric channel (บวม/แผลเป็น) → อาเจียน ปวดเกร็ง ${S.r}</li>
<li>Ulcer stigmata ตอนส่องกล้องบอกความเสี่ยงเลือดออกซ้ำ: active bleeding / visible vessel → endoscopic therapy + high-dose PPI ${S.h}</li>
<li>หลังเลือดออก: กำจัด H. pylori ลดเลือดออกซ้ำเหลือ &lt; 5% · ถ้าต้องใช้ NSAID ให้ COX-2 selective + PPI ${S.h}</li></ul>`});

SEC.push({id:"gi-bleed",k:"c",t:"Acute GI bleeding: upper vs lower work-up",mm:"GI bleeding work-up",leg:[],tools:[["gb",[["upper","Upper (non-variceal)"],["varix","Variceal"],["lower","Lower stable"],["unstable","Lower unstable"]]]],draw:gibD,
notes:()=>`<div class="pearl">Hematemesis = upper · melena ส่วนใหญ่ upper (ยิ่ง proximal ยิ่งเป็น melena) · hematochezia ปกติเป็น lower แต่ UGIB ที่ไหลเร็วก็ทำให้ hematochezia ได้ (มักร่วมกับช็อก) ${S.h}</div>
<ul><li>ประเมินแรกด้วย <b>ชีพจรและความดัน</b> (orthostatic) · Hb ไม่ตกทันทีเพราะเสียเลือดทั้งเลือด ใช้เวลาถึง 72 ชม. ${S.h}</li>
<li>ให้เลือดเมื่อ Hb &lt; 7 g/dL (restrictive) ลดเลือดออกซ้ำและการตายเทียบกับ 9 g/dL ${S.h}</li>
<li>Melena = เลือดอยู่ในทางเดินอาหาร ≥ 14 ชม. · BUN สูงชี้ UGIB (เลือดถูกย่อยและดูดซึม + volume ↓) ${S.h}</li>
<li>Glasgow-Blatchford score 0–1 → ดูแลแบบผู้ป่วยนอกได้ ${S.h}</li>
<li>UGIB: PPI ก่อนส่องกล้อง, erythromycin IV ช่วยให้เห็นชัด · EGD ภายใน 24 ชม. ${S.h}</li>
<li>สงสัย varices (cirrhosis): ให้ <b>octreotide + ceftriaxone</b> ตั้งแต่แรก แล้ว band ligation ${S.h}</li>
<li>Peptic ulcer เป็นสาเหตุ UGIB ~50% · Mallory-Weiss 2–10% · erosion ~30% · varices ผลการรักษาแย่ที่สุด ${S.h}</li>
<li>LGIB: hemorrhoid พบบ่อยที่สุด · ไม่นับทวาร = <b>diverticulosis</b> (ไม่เจ็บ มาก หยุดเอง ≥ 90%) · angiodysplasia ผู้สูงอายุ · มะเร็ง · colitis ${S.h}</li>
<li>LGIB ที่ไม่เสถียร: ตัด UGIB ด้วย EGD → CTA → angiography/embolization → ผ่าตัด · เด็ก: Meckel diverticulum ${S.h}</li></ul>`});

SEC.push({id:"gastric-polyps",k:"c",t:"Gastric polyps",mm:"Gastric polyps",leg:[],tools:[["gp",[["fgp","Fundic gland"],["hyp","Hyperplastic"],["aden","Adenoma"]]]],draw:gpolD,
notes:()=>`<ul><li>Polyp ของกระเพาะส่วนใหญ่เป็น inflammatory หรือ hyperplastic polyp บนพื้น chronic gastritis ${S.r}</li>
<li>Hyperplastic polyp ที่ใหญ่กว่า 1.5 cm มีโอกาส dysplasia มากขึ้น ควรตัด ${S.r}</li>
<li><b>Fundic gland polyp</b>: เกิดเอง พบบ่อยจากการใช้ <b>PPI</b> นาน และใน FAP/MUTYH · gland ขยายเป็น cyst ${S.r}</li>
<li><b>Gastric adenoma</b>: บนพื้น atrophy + intestinal metaplasia · มี adenocarcinoma ร่วมบ่อย จึงจัดการรุกกว่า adenoma ของ colon ${S.r}</li>
<li>GIST เป็นก้อนใต้ mucosa (mesenchymal) · KIT/CD117 ⊕ · พบใน NF1 และ Carney triad ${S.r}</li></ul>`});

const EXTRA=["gastric-polyps"];

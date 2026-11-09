/* ================= Endocrine Pathology III · Adrenal & Neuroendocrine tumors =================
   First Aid Step 1 2025 (Endocrine pathology, pp. 352–357 + CAH p. 339) order
   Robbins & Cotran 10e Ch 24 (adrenal, MEN, PanNET), Ch 10 (neuroblastoma), Ch 17 (GI neuroendocrine tumors)
   Harrison 22e (adrenal incidentaloma, primary aldosteronism, pheochromocytoma, hypoglycemia) · drawings are original schematics. */
//@include _cvs-patho-helpers.js
//@include _endo-patho-helpers.js
Object.assign(GN,{a:"Adrenal cortex",b:"Neuroendocrine tumors & adrenal medulla",c:"MEN & gastroenteropancreatic tumors"});
Object.assign(ST,{cs:"disease",cw:"disease",ai:"primary",al:"conn",ch:"21",sz:32,hu:8,pb:"none",nb:"nbl",ns:"gi",mn:"men1",is:"ins",met:true,zz:"zes",ap:"aps1"});

/* ---------- 1. Cushing syndrome: causes ---------- */
const CS={exo:{n:"Exogenous glucocorticoid",v:["↓","↓","↑"],les:null,ext:"prednisone",ad:"atrophy",t:"สาเหตุที่พบบ่อยที่สุด · ACTH ถูกกด → adrenal ทั้งสองข้างฝ่อ",c:CV.violet},
 adenoma:{n:"Adrenal adenoma / carcinoma",v:["↓","↓","↑"],les:2,ad:"nodule",t:"ACTH-independent · cortisol สูง ACTH ต่ำ → ต่อมข้างที่เหลือฝ่อ",c:CV.gold},
 disease:{n:"Cushing disease (pituitary)",v:["↓","↑","↑"],les:1,ad:"hyper",t:"ACTH-secreting microadenoma · endogenous ที่พบบ่อยสุด → adrenal hyperplasia ทั้งสองข้าง",c:"#C2577A"},
 ectopic:{n:"Ectopic ACTH",v:["↓","↓","↑"],les:null,ext:"ACTH จาก SCLC",ad:"hyper",t:"small cell lung ca, bronchial carcinoid · ACTH สูงมาก · dexamethasone กดไม่ได้",c:EN.up}};
function adPair(x,y,mode){const L=mode==="atrophy"?{atrophy:true,zf:.5,zr:.5}:mode==="hyper"?{zf:1.7,zr:1.4}:{atrophy:true,zf:.5,zr:.5};const R=mode==="nodule"?{nod:[[150,70,30,"#F4D35E"]]}:L;
 return adrenalG(x,y,.48,L)+adrenalG(x+124,y,.48,R)+T(x+58,y+84,"ซ้าย",{c:"s m"})+T(x+182,y+84,"ขวา",{c:"s m"})}
function cushingD(){const d=CS[ST.cs];let b=axisD(10,8,{n:[["Hypothalamus","CRH"],["Pituitary","ACTH"],["Adrenal","cortisol"]],v:d.v,lesion:d.les,ext:d.ext,w:240});
 b+=T(256,22,"Adrenal (ตัดขวาง)",{a:"start",c:"bh"})+adPair(256,34,d.ad);
 b+=cardA(256,132,236,d.n,[d.t],d.c);
 b+=bodyFig(512,4,.6,{cush:true});
 ["moon face · plethora","buffalo hump","purple striae","central obesity","แขนขาลีบ · ช้ำง่าย"].forEach((t,i)=>b+=T(572,266+i*16,t,{c:"s"}));
 return ESVG(b,"0 0 640 352")}

/* ---------- 2. Cushing work-up ---------- */
const CW={nodes:{scr:[150,4,340,52,"คัดกรอง (อย่างน้อย 1 อย่าง)","24-h urine free cortisol · late-night salivary cortisol · 1 mg overnight DST",CV.acc],
 acth:[220,76,200,40,"Plasma ACTH","",CV.acc],
 lo:[10,140,270,52,"ACTH ต่ำ (ถูกกด)","ACTH-independent",CV.gold],hi:[360,140,270,52,"ACTH สูง / ปกติ","ACTH-dependent","#C2577A"],
 adr:[10,222,270,62,"Adrenal tumor / steroid","ถามประวัติยา · CT adrenal",CV.gold],
 hd:[360,222,270,52,"High-dose DST หรือ CRH test","pituitary ยังตอบ feedback ได้บางส่วน","#C2577A"],
 cd:[360,306,130,62,"กดได้ / ตอบ CRH","Cushing disease → MRI pituitary","#C2577A"],ec:[500,306,130,62,"กดไม่ได้","Ectopic ACTH → CT อก/ท้อง",EN.up]},
 edges:[["scr","acth"],["acth","lo"],["acth","hi"],["lo","adr"],["hi","hd"],["hd","cd"],["hd","ec"]]};
const CWP={adr:["scr","acth","lo","adr"],disease:["scr","acth","hi","hd","cd"],ectopic:["scr","acth","hi","hd","ec"]};
function cushWuD(){let b=tree(CW,CWP[ST.cw]);
 b+=cardBox(10,302,330,66,"ทำไม high-dose DST แยกได้",["corticotroph adenoma ยังถูก dexamethasone ขนาดสูงกดได้ · tumor นอก pituitary กดไม่ได้"],CV.violet);
 return ESVG(b,"0 0 640 376")}

/* ---------- 3. adrenal insufficiency ---------- */
const AI={primary:{n:"Primary (Addison)",v:["↑","↑","↓"],les:2,ad:{atrophy:true,zg:.5,zf:.5,zr:.5},L:[["Cortisol","↓"],["Aldosterone","↓"],["ACTH","↑"],["Na⁺","↓"],["K⁺","↑"]],pig:true,t:"autoimmune (ประเทศรายได้สูง) · TB (รายได้ต่ำ) · ต้องเสีย cortex > 90%",c:EN.up},
 secondary:{n:"Secondary (pituitary)",v:["↑","↓","↓"],les:1,ad:{zf:.6,zr:.6},L:[["Cortisol","↓"],["Aldosterone","N"],["ACTH","↓"],["Na⁺","N/↓"],["K⁺","N"]],pig:false,t:"pituitary tumor, Sheehan · zona glomerulosa อยู่ได้ด้วย RAAS",c:CV.violet},
 tertiary:{n:"Tertiary (hypothalamus / steroid)",v:["↓","↓","↓"],les:0,ext:"หยุด steroid ทันที",ad:{zf:.6,zr:.6},L:[["Cortisol","↓"],["Aldosterone","N"],["ACTH","↓"],["Na⁺","N/↓"],["K⁺","N"]],pig:false,t:"บ่อยสุดจากหยุด glucocorticoid ที่ใช้นาน (HPA ถูกกด)",c:CV.gold},
 wf:{n:"Waterhouse-Friderichsen",v:["↑","↑","↓↓"],les:2,ad:{hem:true},L:[["Cortisol","↓↓"],["Aldosterone","↓"],["BP","↓↓"],["Skin","purpura"],["Coag","DIC"]],pig:false,t:"meningococcemia → DIC + เลือดออกใน adrenal ทั้งสองข้าง → acute 1° insufficiency + shock",c:"#9E1F2E"}};
function aiD(){const d=AI[ST.ai];let b=axisD(10,8,{n:[["Hypothalamus","CRH"],["Pituitary","ACTH · MSH"],["Adrenal","cortisol"]],v:d.v,lesion:d.les,ext:d.ext,w:240});
 b+=adrenalG(254,24,.62,d.ad)+T(328,128,ST.ai==="wf"?"adrenal = ถุงเลือด":ST.ai==="primary"?"cortex ฝ่อ":"zona glomerulosa ปกติ",{c:"s m"});
 b+=`<rect x="410" y="8" width="224" height="200" rx="14" style="fill:color-mix(in srgb,${d.c} 9%,var(--sb-surface));stroke:color-mix(in srgb,${d.c} 45%,transparent)"/>`+wrapT(424,32,d.n,28,"bh",16);
 d.L.forEach(([n,v],i)=>{const y=70+i*27;b+=T(424,y+4,n,{a:"start",c:"s"})+(v.length<4?lv(604,y,v):T(618,y+4,v,{a:"end",c:"bh"}))});
 b+=cardA(254,220,380,d.n.split(" ")[0]==="Waterhouse-Friderichsen"?"กลไก":"สาเหตุ / จุดสังเกต",[d.t,d.pig?"ผิวและเยื่อบุคล้ำ (ACTH/MSH จาก POMC ↑)":"ไม่มีผิวคล้ำ"],d.c);
 return ESVG(b,"0 0 640 336")}

/* ---------- 4. hyperaldosteronism ---------- */
const AL={conn:{n:"Aldosterone-producing adenoma (Conn)",p:[1.6,82],q:"1°",t:"~35% ของ 1° · ก้อนเล็ก < 2 cm สีเหลือง · ผ่าตัดได้"},bah:{n:"Bilateral adrenal hyperplasia",p:[2.4,62],q:"1°",t:"~60% ของ 1° (บ่อยสุดตาม Robbins) · ใช้ spironolactone/eplerenone"},
 renov:{n:"Renovascular HTN · JG cell tumor",p:[8.4,74],q:"2°",t:"ไตขาดเลือด/ก้อนหลั่ง renin → renin ↑ → aldosterone ↑"},edema:{n:"HF · cirrhosis · nephrotic",p:[7.2,58],q:"2°",t:"effective arterial volume ↓ → RAAS ทำงาน · บวมมากขึ้น"}};
function aldoD(){const k=ST.al,d=AL[k];const x0=60,y0=16,W=280,H=250,X=v=>x0+v/10*W,Y=v=>y0+H-v/100*H;let b="";
 b+=`<rect x="${x0}" y="${y0}" width="${W/2}" height="${H/2}" style="fill:color-mix(in srgb,${CV.gold} 14%,transparent)"/><rect x="${x0+W/2}" y="${y0}" width="${W/2}" height="${H/2}" style="fill:color-mix(in srgb,${CV.violet} 12%,transparent)"/>`;
 b+=`<path class="ax" d="M${x0},${y0} V${y0+H} H${x0+W}"/>`+T(x0+W/2,y0+H+22,"Plasma renin activity →",{c:"s"})+T(x0-22,y0+H/2,"Aldosterone →",{c:"s",r:-90});
 b+=T(x0+8,y0+18,"1° aldosteronism",{a:"start",c:"bh"})+T(x0+W-8,y0+18,"2° aldosteronism",{a:"end",c:"bh"})+T(x0+W/2,y0+H-10,"ปกติ / อื่น ๆ",{c:"s m"});
 b+=`<circle cx="${X(5)}" cy="${Y(35)}" r="8" style="fill:${CV.good}"/>`+T(X(5)+12,Y(35)+4,"ปกติ",{a:"start",c:"s"});
 Object.entries(AL).forEach(([kk,v])=>{const on=kk===k;b+=`<circle cx="${X(v.p[0])}" cy="${Y(v.p[1])}" r="${on?11:6}" style="fill:${v.q==="1°"?CV.gold:CV.violet};opacity:${on?1:.45};stroke:var(--sb-surface);stroke-width:2"/>`});
 b+=`<rect x="360" y="8" width="274" height="116" rx="14" style="fill:color-mix(in srgb,${d.q==="1°"?CV.gold:CV.violet} 10%,var(--sb-surface));stroke:var(--sb-line)"/>`+wrapT(374,32,d.n,36,"bh",16)+wrapT(374,72,d.t,40,"s",15);
 b+=cardA(360,134,274,"อาการ",["HTN ดื้อยา · K⁺ ต่ำหรือปกติ · metabolic alkalosis","1° ไม่บวม (aldosterone escape) · 2° จาก HF/cirrhosis บวม"],EN.up);
 b+=cardA(360,240,274,"Work-up 1°",["aldosterone/renin ratio (แก้ K ก่อน) → saline suppression → CT ± adrenal vein sampling"],CV.teal);
 return ESVG(b,"0 0 640 330")}

/* ---------- 5. CAH ---------- */
const CAH={"21":{n:"21-hydroxylase deficiency",blk:"B",up:["Progesterone","17-OH pregnenolone","17-OH progesterone","DHEA","Androstenedione","Testosterone"],dn:["11-deoxycorticosterone","Corticosterone","Aldosterone","11-deoxycortisol","Cortisol"],R:[["Mineralocorticoid","↓"],["K⁺","↑"],["BP","↓"],["Cortisol","↓"],["Sex hormones","↑"],["Renin","↑"]],p:"บ่อยสุด (> 90%) · 17-OH progesterone ↑ · ทารก salt-wasting หรือเด็ก precocious puberty · XX: virilization"},
 "11":{n:"11β-hydroxylase deficiency",blk:"C",up:["11-deoxycorticosterone","11-deoxycortisol","DHEA","Androstenedione","Testosterone"],dn:["Corticosterone","Aldosterone","Cortisol"],R:[["Mineralocorticoid","↑"],["K⁺","↓"],["BP","↑"],["Cortisol","↓"],["Sex hormones","↑"],["Renin","↓"]],p:"aldosterone ↓ แต่ 11-deoxycorticosterone (DOC) ↑ → HTN รุนแรงในทารก · XX: virilization"},
 "17":{n:"17α-hydroxylase deficiency",blk:"A",up:["Progesterone","11-deoxycorticosterone","Corticosterone"],dn:["17-OH pregnenolone","17-OH progesterone","11-deoxycortisol","Cortisol","DHEA","Androstenedione","Testosterone","Aldosterone"],R:[["Mineralocorticoid","↑"],["K⁺","↓"],["BP","↑"],["Cortisol","↓"],["Sex hormones","↓"],["Androstenedione","↓"]],p:"DOC ↑ → HTN, K ↓ · XY: อวัยวะเพศกำกวม อัณฑะไม่ลง · XX: ไม่มีลักษณะเพศทุติยภูมิ"}};
function cahD(){const d=CAH[ST.ch];let b="";
 const col=[120,316,512],row=[44,104,164,224,284];
 const S=[["Pregnenolone","17-OH pregnenolone","DHEA"],["Progesterone","17-OH progesterone","Androstenedione"],["11-deoxycorticosterone","11-deoxycortisol","Testosterone"],["Corticosterone","Cortisol",""],["Aldosterone","",""]];
 b+=T(col[0],22,"Mineralocorticoid (G)",{c:"bh"})+T(col[1],22,"Glucocorticoid (F)",{c:"bh"})+T(col[2],22,"Androgen (R)",{c:"bh"});
 const enz=(x1,y1,x2,y2,lab,key)=>{const blocked=key===d.blk,mx=(x1+x2)/2,my=(y1+y2)/2,v=x1===x2;return Ar(x1,y1,x2,y2,blocked?EN.up:CV.mut,blocked?2.2:1.6,{hs:6})+(lab?T(v?mx+8:mx,v?my+4:my-8,lab,{a:v?"start":"middle",c:blocked?"s bad":"s m"}):"")+(blocked?`<path d="M${mx-8},${my-8} l16,16 M${mx+8},${my-8} l-16,16" style="stroke:${EN.up};stroke-width:3.4;stroke-linecap:round"/>`:"")};
 b+=enz(204,44,232,44,"17α","A")+enz(400,44,428,44,"","x")+enz(204,104,232,104,"17α","A")+enz(400,104,428,104,"","x");
 b+=enz(col[0],60,col[0],88,"3β-HSD","x")+enz(col[1],60,col[1],88,"","x")+enz(col[2],60,col[2],88,"","x");
 b+=enz(col[0],120,col[0],148,"21-OH","B")+enz(col[1],120,col[1],148,"21-OH","B")+enz(col[0],180,col[0],208,"11β-OH","C")+enz(col[1],180,col[1],208,"11β-OH","C")+enz(col[0],240,col[0],268,"aldosterone synthase","x")+enz(col[2],120,col[2],148,"","x");
 S.forEach((r,i)=>r.forEach((n,j)=>{if(!n)return;const up=d.up.includes(n),dn=d.dn.includes(n);const c=up?EN.up:dn?EN.nl:CV.teal;
  b+=`<g style="opacity:${dn?.55:1}"><rect x="${col[j]-84}" y="${row[i]-15}" width="168" height="30" rx="15" style="fill:color-mix(in srgb,${c} ${up?22:dn?6:12}%,var(--sb-surface));stroke:${c};stroke-width:${up?2:1}"/>`+T(col[j],row[i]+4,n+(up?" ↑":dn?" ↓":""),{c:up?"bh":"s"})+`</g>`}));
 b+=`<rect x="8" y="312" width="626" height="96" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(22,334,d.n,{a:"start",c:"bh"});
 d.R.forEach(([n,v],i)=>{const x=60+i*100;b+=T(x,358,n,{c:"s m"})+lv(x,382,v)});
 b+=wrapT(10,430,d.p,100,"s",15);
 return ESVG(b,"0 0 640 448")}

/* ---------- 6. adrenal incidentaloma ---------- */
function incidD(){const sz=+ST.sz,hu=+ST.hu;const x0=56,y0=16,W=300,H=240,X=v=>x0+v/80*W,Y=v=>y0+H-(v+20)/80*H;let b="";
 const reg=(x1,x2,h1,h2,c)=>`<rect x="${X(x1)}" y="${Y(h2)}" width="${X(x2)-X(x1)}" height="${Y(h1)-Y(h2)}" style="fill:${c}"/>`;
 b+=reg(0,80,-20,10,`color-mix(in srgb,${CV.good} 26%,transparent)`)+reg(0,40,10,20,`color-mix(in srgb,${CV.good} 26%,transparent)`)+reg(40,80,10,20,`color-mix(in srgb,${CV.gold} 28%,transparent)`)+reg(0,40,20,60,`color-mix(in srgb,${CV.gold} 28%,transparent)`)+reg(40,80,20,60,`color-mix(in srgb,${EN.up} 26%,transparent)`);
 [0,20,40,60,80].forEach(v=>b+=T(X(v),y0+H+16,v,{c:"s m"}));[-20,0,10,20,40,60].forEach(v=>b+=T(x0-6,Y(v)+4,v,{a:"end",c:"s m"}));
 b+=`<path class="ax" d="M${x0},${y0} V${y0+H} H${x0+W}"/>`+T(x0+W/2,y0+H+34,"ขนาดก้อน (mm)",{c:"s"})+T(x0-40,y0+H/2,"HU (CT ไม่ฉีดสี)",{c:"s",r:-90});
 b+=T(X(20),Y(-5),"lipid-rich adenoma",{c:"s"})+T(X(60),Y(40),"สงสัยมะเร็ง",{c:"s"})+T(X(20),Y(40),"ติดตาม",{c:"s"});
 const cat=hu<10||(sz<40&&hu<=20)?0:(sz>40&&hu>20)?2:1;const C=[[CV.good,"ไม่ต้อง imaging ซ้ำ","HU < 10 = adenoma ที่มีไขมันมาก"],[CV.gold,"ถ่ายภาพซ้ำใน 6–12 เดือน","indeterminate"],[EN.up,"ปรึกษาทีม · พิจารณาผ่าตัด","> 40 mm + HU > 20 → ACC / pheo ได้"]][cat];
 b+=`<circle cx="${X(Math.min(80,sz))}" cy="${Y(Math.min(60,hu))}" r="10" style="fill:${C[0]};stroke:var(--sb-surface);stroke-width:2.6"/>`;
 b+=`<rect x="380" y="8" width="254" height="96" rx="14" style="fill:color-mix(in srgb,${C[0]} 12%,var(--sb-surface));stroke:${C[0]}"/>`+T(394,32,`${sz} mm · ${hu} HU`,{a:"start",c:"bh"})+T(394,54,C[1],{a:"start",c:"bh"})+wrapT(394,74,C[2],38,"s m",14);
 b+=cardA(380,114,254,"ตรวจฮอร์โมนทุกราย (> 1 cm)",["1 mg overnight DST (ทุกคน)","HU > 10 → metanephrines (ตัด pheo)","มี HTN → renin + aldosterone, K⁺","สงสัย ACC → androgen, 17-OHP"],CV.teal);
 return ESVG(b,"0 0 640 300")}

/* ---------- 7. neuroendocrine tumors (overview) ---------- */
const NS={gi:{n:"GI tract",t:["carcinoid (well-differentiated NET)","gastrinoma"],p:[100,196]},panc:{n:"Pancreas",t:["insulinoma","glucagonoma","VIPoma, somatostatinoma"],p:[118,178]},lung:{n:"Lung",t:["small cell carcinoma","bronchial carcinoid"],p:[82,128]},thy:{n:"Thyroid",t:["medullary carcinoma (C cell)"],p:[100,92]},adr:{n:"Adrenal medulla",t:["pheochromocytoma","neuroblastoma (เด็ก)"],p:[124,170]}};
function netD(){const k=ST.ns;let b=bodyFig(20,6,.82,{});const bp=(x,y)=>[20+.82*x,6+.82*y];
 Object.entries(NS).forEach(([kk,v])=>{const [x,y]=bp(...v.p),on=kk===k;b+=`<circle cx="${x}" cy="${y}" r="${on?11:7}" style="fill:${on?CV.violet:"color-mix(in srgb,"+CV.violet+" 35%,var(--sb-surface))"};stroke:var(--sb-surface);stroke-width:2"/>`+(on?`<circle cx="${x}" cy="${y}" r="17" style="fill:none;stroke:${CV.violet};stroke-width:1.6;stroke-dasharray:4 3"/>`:"")});
 const d=NS[k];b+=iPanel(220,8,200,d.n,"",d.t,CV.violet);
 b+=cardA(436,8,198,"ลักษณะร่วม (APUD)",["amine precursor uptake + decarboxylation","สร้าง amine/peptide หลายชนิด"],CV.teal);
 b+=`<rect x="220" y="196" width="414" height="140" rx="14" style="fill:${HE.bg};stroke:var(--sb-line)"/>`;const r=rng(77);
 for(let n=0;n<5;n++){const cx=250+n*80,cy=244+(n%2)*36;for(let i=0;i<9;i++){const a=i/9*6.28;const px=cx+Math.cos(a)*18,py=cy+Math.sin(a)*14;b+=`<circle cx="${px}" cy="${py}" r="6" style="fill:#EBB0C6"/>`;for(let q=0;q<5;q++)b+=dot(px+(r()-.5)*5,py+(r()-.5)*5,.9,HE.nuD)}}
 b+=TD(427,326,"รัง (nests) ของเซลล์ · chromatin แบบ salt-and-pepper",{s:10});
 ["chromogranin A","synaptophysin","NSE"].forEach((t,i)=>b+=tag(276+i*120,214,t+" ⊕",CV.violet,{w:112}));
 return ESVG(b,"0 0 640 342")}

/* ---------- 8. neuroblastoma vs Wilms ---------- */
function abdomen(x,y,mode){let b=`<rect x="${x}" y="${y}" width="290" height="230" rx="40" style="fill:color-mix(in srgb,${EN.skin} 35%,var(--sb-surface));stroke:${EN.skinD};stroke-width:1.4"/>`;
 b+=`<rect x="${x+135}" y="${y+14}" width="20" height="200" rx="6" style="fill:${EN.bone};stroke:${EN.boneD}"/>`+`<path d="M${x+123},${y+14} V${y+216}" style="stroke:${CV.ox};stroke-width:9;stroke-linecap:round"/>`;
 b+=`<path d="${bean(x+78,y+130,52,90,1,-.15)}" style="fill:${EN.kid};stroke:#6E3530;opacity:.9"/>`+`<path d="${bean(x+212,y+130,52,90,-1,.15)}" style="fill:${EN.kid};stroke:#6E3530;opacity:.9"/>`;
 b+=`<path d="M${x+60},${y+76} l20,-26 l20,26Z" style="fill:${EN.ctx};stroke:#9A7420"/><path d="M${x+190},${y+76} l20,-26 l20,26Z" style="fill:${EN.ctx};stroke:#9A7420"/>`;
 if(mode==="nbl")b+=`<path d="${sm([[x+52,y+52],[x+92,y+40],[x+130,y+60],[x+170,y+52],[x+178,y+86],[x+150,y+112],[x+118,y+100],[x+84,y+118],[x+52,y+96],[x+40,y+70]])}" style="fill:#7D6BA8;stroke:#4C3570;stroke-width:1.6;opacity:.9"/>`+[[86,74],[120,86],[150,70]].map(([dx,dy])=>dot(x+dx,y+dy,2.4,"#E9E2D6")).join("");
 else b+=`<ellipse cx="${x+78}" cy="${y+140}" rx="44" ry="52" style="fill:#C9A8B8;stroke:#7A4E64;stroke-width:1.6;opacity:.95"/>`;
 return b}
function nblD(){const n=ST.nb==="nbl";let b=abdomen(8,8,n?"nbl":"wilms")+T(153,258,n?"ก้อนขรุขระ ข้าม midline ล้อมหลอดเลือด":"ก้อนเรียบ ข้างเดียว จากไต",{c:"s m"});
 if(n){b+=slide(318,8,316,112);const r=rng(5);for(let i=0;i<150;i++){const px=326+r()*300,py=16+r()*96;b+=dot(px,py,3,HE.nuD)}
  [[380,58],[470,70],[566,54]].forEach(([cx,cy])=>{b+=`<circle cx="${cx}" cy="${cy}" r="13" style="fill:#F2C2D3"/>`;for(let i=0;i<11;i++){const a=i/11*6.28;b+=dot(cx+Math.cos(a)*17,cy+Math.sin(a)*17,3.4,HE.nuD)}});
  b+=TD(476,108,"Homer-Wright rosette: เซลล์ล้อม neuropil",{s:10});
  b+=cardA(318,130,316,"Neuroblastoma",["เนื้องอกแข็งนอกกะโหลก ที่พบบ่อยสุด ในเด็ก (มัก < 4 ปี)","จาก neural crest: adrenal medulla หรือ sympathetic chain","HVA/VMA ในปัสสาวะ ↑ แต่ความดัน มักปกติ","opsoclonus-myoclonus (dancing eyes-feet)","N-myc (MYCN) amplification = พยากรณ์แย่"],CV.violet)}
 else b+=cardA(318,8,316,"Wilms tumor (เปรียบเทียบ)",["ก้อนเรียบ ข้างเดียว เกิดจากไต","ไม่ข้าม midline"],"#7A4E64");
 return ESVG(b,"0 0 640 300")}

/* ---------- 9. pheochromocytoma ---------- */
function pheoD(){const m=ST.pb;let b="";const x0=50,y0=16,W=330,H=170,X=t=>x0+t/10*W,Y=v=>y0+H-(v-60)/(260-60)*H;
 b+=`<path class="ax" d="M${x0},${y0} V${y0+H} H${x0+W}"/>`;[100,140,180,220,260].forEach(v=>b+=T(x0-6,Y(v)+4,v,{a:"end",c:"s m"})+`<line class="gl" x1="${x0}" y1="${Y(v)}" x2="${x0+W}" y2="${Y(v)}"/>`);
 b+=T(x0+W/2,y0+H+20,"เวลา (วัน)",{c:"s m"})+T(x0-36,y0+H/2,"SBP",{c:"s",r:-90});
 const base={none:160,ab:122,ba:150}[m],spk={none:[[2,70],[5.2,60],[8,78]],ab:[[2,14],[5.2,10],[8,12]],ba:[[2,70],[5.2,60],[6.6,105],[8,80]]}[m];
 const f=t=>base+spk.reduce((a,[c,h])=>a+h*Math.exp(-(((t-c)/.18)**2)),0)+3*Math.sin(t*5);const pts=[];for(let t=0;t<=10;t+=.02)pts.push([X(t),Y(Math.min(258,f(t)))]);
 b+=curve(pts,m==="ab"?CV.good:EN.up,2.6);
 if(m==="ba")b+=tag(X(6.6),Y(250)-4,"hypertensive crisis",EN.up,{w:126})+T(X(6.6),Y(250)+30,"ให้ β-blocker → α ไม่มีอะไรต้าน",{c:"s"});
 if(m==="none")b+=T(X(2)+14,Y(228),"spell: ปวดหัว ใจสั่น เหงื่อ ซีด",{a:"start",c:"s"});
 if(m==="ab")b+=T(X(5),Y(200),"phenoxybenzamine ก่อน แล้วค่อย β-blocker",{c:"s"});
 b+=adrenalG(390,8,.62,{nod:[[120,104,26,"#8C4A66"]],medc:"#B57891"})+T(464,120,"ก้อนใน medulla (chromaffin)",{c:"s m"});
 b+=cardA(8,214,300,"5 P's (เป็นพัก ๆ)",["Pressure (BP ↑) · Pain (ปวดหัว) · Perspiration","Palpitations · Pallor"],EN.up);
 b+=cardA(318,140,316,"Rule of 10s",["extra-adrenal (paraganglioma) · bilateral · malignant","ไม่มี HTN · ในเด็ก · ~25% มี germline mutation"],CV.violet);
 b+=cardA(318,246,316,"วินิจฉัย",["plasma/urine metanephrines + catecholamines ↑","chromogranin · synaptophysin ⊕ · zellballen"],CV.teal);
 return ESVG(b,"0 0 640 336")}

/* ---------- 10. MEN syndromes ---------- */
const MN={men1:{n:"MEN1 · 3 P's",g:"MEN1 (menin, tumor suppressor) · chr 11",o:["pit","para","panc"],t:["Parathyroid adenoma/hyperplasia (บ่อยสุด, มาก่อน)","Pancreatic NET: gastrinoma (ZES), insulinoma, VIPoma","Pituitary: prolactinoma > GH","อื่น ๆ: angiofibroma, collagenoma, meningioma"]},
 men2a:{n:"MEN2A · 2 P's 1 M",g:"RET (proto-oncogene, RTK) · chr 10",o:["para","mtc","pheo"],t:["Medullary thyroid ca (~100%) · C-cell hyperplasia","Pheochromocytoma (40–50%, มักสองข้าง)","Parathyroid hyperplasia","RET carrier → ตัดไทรอยด์ป้องกัน"]},
 men2b:{n:"MEN2B · 1 P 2 M's",g:"RET (point mutation อีกตำแหน่ง)",o:["mtc","pheo","neuroma","marf"],t:["Medullary thyroid ca (รุนแรงกว่า 2A)","Pheochromocytoma","Mucosal neuroma (ปาก ลิ้น ลำไส้)","Marfanoid habitus · ไม่มี hyperparathyroidism"]}};
function menD(){const d=MN[ST.mn];let b=bodyFig(126,6,.86,{});const bp=(x,y)=>[126+.86*x,6+.86*y];
 const O={pit:[[100,40],"Pituitary",-1],para:[[108,90],"Parathyroid",1],panc:[[112,180],"Pancreas",1],mtc:[[92,92],"MTC (C cell)",-1],pheo:[[124,168],"Pheochromocytoma",1],neuroma:[[100,66],"Mucosal neuroma",-1],marf:[[40,200],"Marfanoid",-1]};
 Object.entries(O).forEach(([k,[p,l,s]])=>{const on=d.o.includes(k),[x,y]=bp(...p);const lx=s<0?116:316;
  b+=`<g style="opacity:${on?1:.28}"><path d="M${x},${y} L${lx},${y}" style="stroke:${on?CV.violet:"var(--sb-line)"};stroke-width:1.4"/>`+dot(x,y,on?6:4,on?CV.violet:EN.nl)+T(lx+(s<0?-4:4),y+4,l,{a:s<0?"end":"start",c:on?"bh":"s"})+`</g>`});
 b+=`<rect x="446" y="8" width="188" height="320" rx="14" style="fill:color-mix(in srgb,${CV.violet} 9%,var(--sb-surface));stroke:color-mix(in srgb,${CV.violet} 40%,transparent)"/>`+T(460,32,d.n,{a:"start",c:"bh"})+wrapT(460,52,d.g,27,"s m",14);
 let y=96;d.t.forEach(t=>{b+=`<circle cx="${464}" cy="${y-4}" r="3" style="fill:${CV.violet}"/>`+wrapT(474,y,t,25,"s",14);y+=14*nLines(t,25)+12});
 b+=T(460,316,"ทุกแบบ: autosomal dominant",{a:"start",c:"s"});
 return ESVG(b,"0 0 640 336")}

/* ---------- 11. pancreatic islet cell tumors ---------- */
const IS={ins:{n:"Insulinoma (β cell)",t:["NET ของตับอ่อนที่พบบ่อยสุด · ~90% benign","Whipple triad: glucose ต่ำ + อาการ + หายเมื่อให้กลูโคส","insulin ↑ + C-peptide ↑ · ~10% ใน MEN1","อาการเกิดตอนอดอาหาร/ออกกำลัง · รักษาด้วยผ่าตัด"],c:"#C2577A"},
 glu:{n:"Glucagonoma (α cell)",t:["6 D's: Dermatitis (necrolytic migratory erythema)","Diabetes · DVT · Declining weight","Depression · Diarrhea","หญิงวัยหมดประจำเดือน · glucagon สูงมาก"],c:CV.gold},
 som:{n:"Somatostatinoma (δ cell)",t:["กดฮอร์โมนหลายตัว (insulin, gastrin, CCK, secretin)","DM · นิ่วถุงน้ำดี · steatorrhea · achlorhydria","หาตำแหน่งยาก · ใช้ระดับ somatostatin"],c:CV.teal},
 vip:{n:"VIPoma",t:["WDHA: Watery Diarrhea, Hypokalemia, Achlorhydria","ท้องเสียแบบ secretory ปริมาณมาก","ตรวจ VIP ในผู้ป่วยท้องเสีย secretory รุนแรง"],c:CV.violet}};
function isletD(){const d=IS[ST.is];let b=islet(8,8,220,200,"normal")+T(118,226,"islet: β (กลาง) · α, δ (ขอบ)",{c:"s m"});
 b+=iPanel(244,8,390,d.n,"",d.t,d.c);
 const R=[["","Insulinoma","Sulfonylurea","Exogenous insulin"],["Glucose","↓","↓","↓"],["Insulin","↑","↑","↑"],["C-peptide","↑","↑","↓"],["Sulfonylurea screen","−","+","−"]];
 b+=`<rect x="8" y="238" width="626" height="${R.length*28+12}" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`;
 R.forEach((r,i)=>r.forEach((c,j)=>{const x=j?200+(j-1)*150:24,y=262+i*28;b+=i===0?T(x,y,c,{a:j?"middle":"start",c:"bh"}):j===0?T(x,y,c,{a:"start",c:"s"}):(/[↑↓]/.test(c)?lv(x,y-4,c):T(x,y,c,{c:"bh"}))}));
 return ESVG(b,"0 0 640 400")}

/* ---------- 12. carcinoid ---------- */
function carcD(){const met=!!ST.met;let b="";
 const box=(x,y,w,h,t,s,c)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" style="fill:color-mix(in srgb,${c} 16%,var(--sb-surface));stroke:color-mix(in srgb,${c} 60%,transparent)"/>`+T(x+w/2,y+h/2-(s?3:-4),t,{c:"bh"})+(s?T(x+w/2,y+h/2+13,s,{c:"s m"}):"");
 b+=box(10,250,120,58,"Midgut NET","ileum · หลั่ง 5-HT",CV.gold)+box(170,250,120,58,"Liver","first-pass ทำลาย 5-HT","#8C4A3A")+box(170,130,120,58,"Right heart","TR · PS (plaque)",CV.dx)+box(330,130,120,58,"Lung","MAO ทำลาย 5-HT",CV.teal)+box(490,130,120,58,"Left heart","มักไม่เป็น",CV.ox);
 const fl=(pts,on)=>`<path d="M${pts.map(p=>p.join(",")).join(" L")}" style="fill:none;stroke:${on?"#E07B2E":"var(--sb-line)"};stroke-width:${on?3:1.6};stroke-dasharray:${on?"none":"4 4"}"/>`;
 b+=fl([[130,279],[170,279]],true)+T(150,270,"portal",{c:"s m"});
 b+=fl([[230,250],[230,188]],met)+fl([[290,159],[330,159]],met)+fl([[450,159],[490,159]],false);
 if(met){b+=`<circle cx="210" cy="292" r="9" style="fill:#7D5BA6"/><circle cx="252" cy="268" r="7" style="fill:#7D5BA6"/>`+T(230,330,"liver mets → 5-HT ลงหลอดเลือดดำตับตรงสู่ระบบ",{c:"s"});
  [[230,230],[230,206],[306,159],[320,159]].forEach(([x,y])=>b+=dot(x,y,4,"#E07B2E"))}
 else b+=T(230,330,"ไม่มี mets: ตับทำลาย 5-HT หมด → ไม่มีอาการ",{c:"s"});
 b+=`<rect x="10" y="8" width="${met?380:300}" height="108" rx="14" style="fill:color-mix(in srgb,${met?EN.up:CV.good} 10%,var(--sb-surface));stroke:var(--sb-line)"/>`+T(26,32,met?"Carcinoid syndrome":"ไม่มี carcinoid syndrome",{a:"start",c:"bh"});
 b+=wrapT(26,54,met?"flushing เป็นพัก ๆ · ท้องเสีย · หลอดลมตีบ (wheeze) · right-sided valve disease · 5-HIAA ในปัสสาวะ ↑ · tryptophan ถูกใช้หมด → pellagra":"tumor ยังอยู่ในลำไส้ ส่ง 5-HT ผ่าน portal เท่านั้น",met?60:48,"s",15);
 b+=cardA(410,8,224,"รักษา",["ผ่าตัด · octreotide · telotristat (tryptophan hydroxylase inhibitor)"],CV.teal);
 b+=cardA(470,210,164,"Rule of thirds",["1/3 แพร่กระจาย","1/3 มีมะเร็งที่สอง","1/3 มีหลายก้อน"],CV.violet);
 return ESVG(b,"0 0 640 340")}

/* ---------- 13. Zollinger-Ellison ---------- */
function zesD(){const z=ST.zz==="zes";let b="";
 /* gastrinoma triangle */
 b+=`<path d="M60,70 C40,110 44,180 92,214 C130,240 180,232 196,206" style="fill:none;stroke:#E2A07A;stroke-width:26;stroke-linecap:round"/>`+T(50,240,"duodenum",{a:"start",c:"s m"});
 b+=`<path d="M120,168 C150,150 210,150 270,140 C300,136 318,150 304,164 C260,184 200,190 136,198Z" style="fill:${EN.panc};stroke:#B89160"/>`+T(250,186,"pancreas",{c:"s m"});
 b+=`<path d="M108,20 C112,60 118,100 124,140" style="fill:none;stroke:#5E9B4E;stroke-width:6"/>`+T(118,16,"cystic/CBD",{c:"s m"});
 b+=`<path d="M112,52 L74,170 L160,168Z" style="fill:color-mix(in srgb,${EN.up} 18%,transparent);stroke:${EN.up};stroke-width:2;stroke-dasharray:6 4"/>`+T(110,124,"gastrinoma",{c:"bh"})+T(110,138,"triangle",{c:"bh"});
 b+=dot(86,150,6,"#7D5BA6")+dot(132,160,5,"#7D5BA6");
 /* secretin test */
 const A=axes(380,16,240,170,[0,30],[0,1000],[0,10,20,30],[0,250,500,750,1000],"นาทีหลังฉีด secretin","Gastrin (pg/mL)");b+=A.g;
 const fn=t=>90+10*Math.exp(-t/6),fz=t=>420+380*(1-Math.exp(-t/4))*Math.exp(-Math.max(0,t-12)/30);const P=f=>{const p=[];for(let t=0;t<=30;t+=.5)p.push([A.X(t),A.Y(f(t))]);return p};
 b+=curve(P(fn),CV.good,z?1.6:3.4,z?"4 4":null)+curve(P(fz),EN.up,z?3.4:1.6,z?null:"4 4")+T(A.X(30),A.Y(z?760:150),z?"gastrinoma: ↑":"ปกติ: ไม่ขึ้น/ลด",{a:"end",c:"bh"});
 b+=cardA(8,262,300,"อาการ",["แผลหลายแผล/ดื้อ PPI ใน duodenum–jejunum","ท้องเสีย steatorrhea (กรดทำลาย lipase)","~25% อยู่ใน MEN1 (มักหลายก้อน)"],EN.up);
 b+=cardA(320,262,314,"วินิจฉัย → รักษา",["gastrin สูง + secretin stimulation ⊕ · chromogranin A ⊕","PPI ขนาดสูง + ผ่าตัดก้อน"],CV.teal);
 return ESVG(b,"0 0 640 380")}

/* ---------- extra: autoimmune polyendocrine syndromes ---------- */
const AP={aps1:{n:"APS-1 (APECED)",g:"AIRE mutation (chr 21) · thymus เลือก T cell ผิด",t:["chronic mucocutaneous candidiasis (autoantibody ต่อ IL-17, IL-22)","hypoparathyroidism","Addison","ectodermal dystrophy (ฟัน เล็บ ผิว)"],ord:"เด็ก: candidiasis → hypopara → Addison (วัยรุ่น)"},aps2:{n:"APS-2",g:"polygenic · พบมากกว่า APS-1",t:["Addison","autoimmune thyroiditis","± type 1 diabetes","ไม่มี candidiasis หรือ hypopara"],ord:"มักเริ่มอายุ ~40 ปี"}};
function apsD(){const d=AP[ST.ap];let b=bodyFig(24,6,.84,{pig:ST.ap==="aps1"});
 b+=iPanel(220,8,414,d.n,d.g,d.t,ST.ap==="aps1"?CV.violet:CV.gold);
 b+=`<rect x="220" y="${IPH+20}" width="414" height="44" rx="12" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(236,IPH+47,d.ord,{a:"start",c:"s"});
 b+=cardBox(220,268,414,70,"Autoimmune adrenalitis",["สาเหตุ Addison 80–90% ในประเทศรายได้สูง · ~60% อยู่ใน APS"],EN.up);
 return ESVG(b,"0 0 640 344")}

/* ================= sections ================= */
SEC.push({id:"cushing",k:"a",t:"Cushing syndrome: causes & findings",mm:"Cushing syndrome",leg:[],tools:[["cs",[["exo","Exogenous"],["adenoma","Adrenal tumor"],["disease","Cushing disease"],["ectopic","Ectopic ACTH"]]]],draw:cushingD,
notes:()=>`<ul><li>สาเหตุที่พบบ่อยที่สุดคือ<b>ยา glucocorticoid</b> → ACTH ถูกกด → adrenal ทั้งสองข้างฝ่อ (zona glomerulosa ปกติเพราะไม่พึ่ง ACTH) ${S.fa} ${S.r}</li>
<li>Endogenous ที่พบบ่อยสุด: <b>Cushing disease</b> (ACTH microadenoma, หญิง:ชาย ~4:1) → adrenal hyperplasia ทั้งสองข้าง ${S.r} ${S.fa}</li>
<li>Ectopic ACTH: small cell lung ca, bronchial carcinoid, PanNET, medullary thyroid · พบมากในชาย ดำเนินโรคเร็ว ${S.r}</li>
<li>Adrenal adenoma/carcinoma: cortisol สูง ACTH ต่ำ → cortex ข้างที่เหลือ<b>ฝ่อ</b> · carcinoma cortisol สูงกว่าและมักมี androgen ร่วม ${S.r}</li>
<li>Crooke hyaline change ใน corticotroph ปกติ (keratin สะสม) เกิดเมื่อ glucocorticoid สูงจากทุกสาเหตุ ${S.r}</li>
<li>MOON FACIES: Metabolic syndrome (HTN, glucose ↑, lipid ↑), Obesity (truncal, moon face, buffalo hump), Osteoporosis, Neuropsychiatric, Facial plethora, Androgen excess, Cataract, Immunosuppression, Ecchymoses, Skin (บาง, striae, คล้ำ) ${S.fa}</li>
<li>กล้ามเนื้อต้นแขนขาอ่อนแรงจาก type 2 fiber ฝ่อ · ผิวบาง ช้ำง่าย แผลหายช้า จาก catabolism ของ collagen ${S.r}</li></ul>`});

SEC.push({id:"cush-wu",k:"a",t:"Cushing syndrome work-up",mm:"Cushing work-up",leg:[],tools:[["cw",[["adr","ACTH-independent"],["disease","Cushing disease"],["ectopic","Ectopic ACTH"]]]],draw:cushWuD,
notes:()=>`<div class="pearl">สามขั้น: <b>ยืนยัน hypercortisolism</b> → <b>ACTH</b> แยกพึ่ง/ไม่พึ่ง ACTH → high-dose DST หรือ CRH test แยก pituitary กับ ectopic ${S.fa}</div>
<ul><li>คัดกรอง: 24-h urine free cortisol, late-night salivary cortisol (เสีย diurnal rhythm), 1 mg overnight dexamethasone ไม่กด cortisol ${S.fa} ${S.r}</li>
<li>ACTH ต่ำ → exogenous steroid หรือ adrenal tumor → CT adrenal ${S.fa}</li>
<li>ACTH สูง + high-dose dexamethasone <b>กดได้</b> (หรือ ACTH/cortisol ขึ้นเมื่อให้ CRH) → Cushing disease → MRI pituitary ${S.fa} ${S.r}</li>
<li>ACTH สูง + กดไม่ได้/ไม่ตอบ CRH → ectopic ACTH → CT อก ท้อง เชิงกราน ${S.fa} ${S.r}</li>
<li>Adrenal tumor ทั้ง low และ high-dose dexamethasone กดไม่ได้ (ACTH ถูกกดอยู่แล้ว) ${S.r}</li></ul>`});

SEC.push({id:"adrenal-insuf",k:"a",t:"Adrenal insufficiency: primary, secondary & crisis",mm:"Adrenal insufficiency",leg:[],tools:[["ai",[["primary","Primary"],["secondary","Secondary"],["tertiary","Tertiary"],["wf","Waterhouse-Friderichsen"]]]],draw:aiD,
notes:()=>`<ul><li>อาการร่วม: อ่อนเพลีย น้ำหนักลด ปวดกล้ามเนื้อ คลื่นไส้ ความดันต่ำเมื่อยืน อยากเกลือ/น้ำตาล · รักษาด้วย glucocorticoid ± mineralocorticoid ${S.fa}</li>
<li><b>Primary (Addison)</b>: cortisol + aldosterone ↓ → hyponatremia, <b>hyperkalemia</b>, metabolic acidosis, hypotension · ACTH/MSH จาก POMC ↑ → <b>ผิวและเยื่อบุคล้ำ</b> (จุดเสียดสี, กระพุ้งแก้ม) ${S.fa} ${S.r}</li>
<li>Addison: autoimmune adrenalitis 80–90% ในประเทศรายได้สูง (autoantibody ต่อ 21-hydroxylase) · TB ในประเทศรายได้ต่ำ · AIDS, metastasis · อาการเกิดเมื่อ cortex เสีย ≥ 90% ${S.r} ${S.fa}</li>
<li><b>Secondary/tertiary</b>: ACTH หรือ CRH ↓ · aldosterone ยังปกติ (RAAS) จึง<b>ไม่มี hyperkalemia ไม่คล้ำ</b> · ผิวกลับซีด ${S.fa} ${S.r} ${S.h}</li>
<li>Tertiary พบบ่อยสุดจาก<b>หยุด glucocorticoid ที่ใช้นานทันที</b> ${S.fa}</li>
<li><b>Adrenal crisis</b>: stress (ติดเชื้อ) ในผู้ป่วยเดิมหรือผู้ใช้ steroid → ปวดท้อง อาเจียน สับสน shock ${S.fa} ${S.r}</li>
<li><b>Waterhouse-Friderichsen</b>: sepsis (คลาสสิก N. meningitidis) + DIC → เลือดออกใน adrenal ทั้งสองข้าง → shock ${S.fa} ${S.r}</li>
<li>วินิจฉัย: AM cortisol หรือ ACTH (cosyntropin) stimulation · peak cortisol ต่ำกว่า ~16–18 µg/dL = ไม่ผ่าน · แล้ววัด ACTH แยก primary (สูง) กับ 2°/3° (ต่ำ/ปกติ) ${S.h} ${S.fa}</li></ul>`});

SEC.push({id:"aldo",k:"a",t:"Hyperaldosteronism",mm:"Hyperaldosteronism",leg:[],tools:[["al",[["conn","Conn adenoma"],["bah","Bilateral hyperplasia"],["renov","Renovascular"],["edema","Edema states"]]]],draw:aldoD,
notes:()=>`<ul><li>อาการ: HTN, K⁺ ต่ำหรือปกติ, metabolic alkalosis · hypokalemia ไม่จำเป็นต้องมีเสมอ ${S.fa} ${S.r}</li>
<li><b>1°</b>: aldosterone ↑ renin ↓ → HTN ดื้อยา · อาจเป็นสาเหตุ secondary hypertension ที่พบบ่อยที่สุด (5–10% ของ HTN, ~20% ของ HTN ดื้อยา) ${S.fa} ${S.r}</li>
<li>1° ไม่บวมเพราะ <b>aldosterone escape</b> · แต่ 2° จาก HF ทำให้ escape เสียจึงบวมมากขึ้น ${S.fa}</li>
<li>สาเหตุ 1°: bilateral idiopathic hyperplasia (~60%) · aldosterone-producing adenoma = Conn (~35%, ก้อนเล็ก &lt; 2 cm, KCNJ5) · familial (glucocorticoid-remediable) ${S.r} ${S.fa}</li>
<li><b>2°</b>: renin ↑ ด้วย: renovascular HTN, JG cell tumor, ภาวะบวม (HF, cirrhosis, nephrotic) ${S.fa} ${S.r}</li>
<li>Work-up 1°: aldosterone/renin ratio (แก้ K ก่อน) → ยืนยันด้วย saline suppression → CT ± adrenal vein sampling ถ้าจะผ่าตัด ${S.h} ${S.r}</li>
<li>รักษา: adenoma → ผ่าตัด · bilateral hyperplasia → aldosterone antagonist (spironolactone) · spironolactone body ในเนื้อ adenoma ${S.r}</li></ul>`});

SEC.push({id:"cah",k:"a",t:"Congenital adrenal hyperplasias",mm:"CAH",leg:[],tools:[["ch",[["21","21-hydroxylase"],["11","11β-hydroxylase"],["17","17α-hydroxylase"]]]],draw:cahD,
notes:()=>`<div class="pearl">เลือกเอนไซม์: สารก่อนจุดตันจะ<b>คั่งและเบี่ยง</b>ไปทางอื่น · ถ้าชื่อเอนไซม์<b>ขึ้นต้นด้วย 1</b> → HTN · <b>ลงท้ายด้วย 1</b> → virilization ในเพศหญิง ${S.fa}</div>
<ul><li>CAH ทุกแบบเป็น <b>autosomal recessive</b> · cortisol ↓ → ACTH ↑ → adrenal โตทั้งสองข้าง + ผิวคล้ำ (MSH) ${S.fa} ${S.r}</li>
<li><b>21-hydroxylase</b> (&gt; 90%): ขาด aldosterone + cortisol → salt-wasting (Na ↓ K ↑ hypotension) ในทารก · 17-OH progesterone ↑ · androgen ↑ → ทารกหญิงอวัยวะเพศกำกวม, ชายเข้าวัยรุ่นก่อนกำหนด ${S.fa} ${S.r}</li>
<li>21-OH มี 3 แบบ: salt-wasting (classic), simple virilizing, nonclassic (ขนดก สิว ประจำเดือนผิดปกติ ตรวจคัดกรองแรกเกิดไม่เจอ) ${S.r}</li>
<li><b>11β-hydroxylase</b>: aldosterone ↓ แต่ <b>11-deoxycorticosterone ↑</b> (มีฤทธิ์ mineralocorticoid) → HTN, K ↓, renin ↓ · virilization ${S.fa}</li>
<li><b>17α-hydroxylase</b>: mineralocorticoid ↑ (HTN, K ↓) · cortisol และ sex steroid ↓ → XY อวัยวะเพศกำกวม อัณฑะไม่ลง · XX ไม่มีลักษณะเพศทุติยภูมิ ${S.fa}</li>
<li>Salt-wasting แสดงอาการหลังคลอดเพราะในครรภ์ไตแม่ช่วยคุมเกลือ · ทารกชายมักมาวันที่ 5–15 ด้วยขาดเกลือ ${S.r}</li>
<li>รักษา: glucocorticoid (ทดแทน + กด ACTH ลด androgen) ± mineralocorticoid ในแบบ salt-wasting ${S.r}</li></ul>`});

SEC.push({id:"incidentaloma",k:"a",t:"Adrenal incidentaloma work-up",mm:"Adrenal incidentaloma",leg:[],ctrl:()=>sl("sz","ขนาด",5,80,1,"mm")+sl("hu","CT density",-20,60,1,"HU"),wire:()=>wireSl(),draw:incidD,
notes:()=>`<div class="pearl">เลื่อนขนาดและ HU: ถามสองคำถามเสมอ <b>(1) สร้างฮอร์โมนไหม (2) เป็นมะเร็งไหม</b> ${S.h}</div>
<ul><li>พบก้อน adrenal โดยบังเอิญ 2–5% ของประชากร เพิ่มตามอายุ · ส่วนใหญ่เป็น adenoma ที่ไม่สร้างฮอร์โมน ${S.h}</li>
<li>ก้อน &gt; 1 cm ต้องประเมินทุกราย · <b>ต้องตัด pheochromocytoma ออกก่อนเสมอ</b> (ก่อนผ่าตัดหรือ biopsy) ${S.h}</li>
<li>CT ไม่ฉีดสี: adenoma ส่วนใหญ่มีไขมันมาก HU ต่ำ (&lt; 10) · ACC และ pheo มี HU สูง (&gt; 20) · ขนาดอย่างเดียวทำนายได้ไม่ดี ${S.h}</li>
<li>Hormone: 1 mg overnight DST ทุกราย (หา mild autonomous cortisol secretion) · metanephrines ถ้า HU &gt; 10 · renin/aldosterone ถ้ามี HTN · androgen ถ้าสงสัย ACC ${S.h}</li>
<li>Adrenocortical neoplasm ที่ทำให้ virilization มักเป็น carcinoma · ACC สัมพันธ์ Li-Fraumeni (TP53), Beckwith-Wiedemann ${S.r}</li>
<li>Adenoma ที่ไม่สร้างฮอร์โมน: cortex ข้างเคียงปกติ · ที่สร้าง cortisol: cortex ข้างเคียงฝ่อ ${S.r}</li></ul>`});

SEC.push({id:"net",k:"b",t:"Neuroendocrine tumors: overview",mm:"Neuroendocrine tumors",leg:[],tools:[["ns",[["gi","GI"],["panc","Pancreas"],["lung","Lung"],["thy","Thyroid"],["adr","Adrenal"]]]],draw:netD,
notes:()=>`<ul><li>เนื้องอกจาก neuroendocrine cell ที่มีลักษณะคล้ายทั้งเซลล์ประสาทและเซลล์สร้างฮอร์โมน · พบมากที่ GI, ตับอ่อน, ปอด รองลงมาไทรอยด์และ adrenal ${S.fa}</li>
<li>มีหน้าที่ร่วมแบบ <b>APUD</b> แม้ต่างที่มา · สร้างสาร เช่น chromogranin A, NSE, synaptophysin, serotonin, calcitonin ${S.fa}</li>
<li>Histology: รัง/trabeculae ของเซลล์สม่ำเสมอ · nucleus แบบ <b>salt-and-pepper</b> · ย้อม chromogranin A และ synaptophysin ⊕ ${S.r}</li>
<li>แบ่ง well-differentiated NET (เดิม carcinoid) กับ neuroendocrine carcinoma (small/large cell) ตาม mitosis และ Ki-67 ${S.r}</li>
<li>รักษา: ผ่าตัด · somatostatin analog ${S.fa}</li></ul>`});

SEC.push({id:"neuroblastoma",k:"b",t:"Neuroblastoma",mm:"Neuroblastoma",leg:[],tools:[["nb",[["nbl","Neuroblastoma"],["wilms","vs Wilms"]]]],draw:nblD,
notes:()=>`<ul><li>เนื้องอกแข็งนอกกะโหลกที่พบบ่อยสุดในเด็ก (มัก &lt; 4 ปี; median ~18 เดือน) · จาก <b>neural crest</b> ${S.fa} ${S.r}</li>
<li>~40% เกิดที่ adrenal medulla ที่เหลือตาม sympathetic chain (paravertebral ช่องท้อง, posterior mediastinum) ${S.r}</li>
<li>มาด้วยท้องโต ก้อนแข็งขรุขระ<b>ข้าม midline</b> (ต่างจาก Wilms ที่เรียบและอยู่ข้างเดียว) ${S.fa}</li>
<li>~90% สร้าง catecholamine → HVA, VMA ในปัสสาวะ ↑ · แต่ความดันสูง<b>น้อยกว่า pheo</b> ${S.r} ${S.fa}</li>
<li>Opsoclonus-myoclonus (“dancing eyes-dancing feet”) · แพร่ไปตับ กระดูก ไขกระดูก · periorbital → ตาโปน ช้ำรอบตา · ทารก “blueberry muffin” ${S.fa} ${S.r}</li>
<li>Histology: small round blue cells + <b>Homer-Wright pseudorosette</b> ล้อม neuropil · NSE, PHOX2B, bombesin ⊕ ${S.r} ${S.fa}</li>
<li><b>MYCN (N-myc) amplification</b> = high risk ไม่ว่าอายุหรือ stage · อายุ &lt; 18 เดือนพยากรณ์ดี · stage 4S ในทารกหายเองได้ ${S.r} ${S.fa}</li>
<li>Familial: germline ALK mutation ${S.r}</li></ul>`});

SEC.push({id:"pheo",k:"b",t:"Pheochromocytoma",mm:"Pheochromocytoma",leg:[],tools:[["pb",[["none","Untreated spells"],["ab","α then β"],["ba","β first ✗"]]]],draw:pheoD,
notes:()=>`<div class="pearl">ลองสลับลำดับยา: <b>α-blockade ก่อนเสมอ</b> (phenoxybenzamine แบบ irreversible) แล้วค่อย β-blocker · ถ้าให้ β ก่อน α-receptor ไม่มีอะไรต้าน → hypertensive crisis ${S.fa} ${S.h}</div>
<ul><li>เนื้องอกของ adrenal medulla ที่พบบ่อยสุดในผู้ใหญ่ · จาก chromaffin cell (neural crest) · สาเหตุ HTN ที่ผ่าตัดหายได้ ${S.fa} ${S.r}</li>
<li>Rule of 10s: extra-adrenal (paraganglioma: organ of Zuckerkandl, กระเพาะปัสสาวะ), bilateral, malignant, ไม่มี HTN, เด็ก · ปัจจุบันพบ germline mutation ถึง ~25% ${S.fa} ${S.r}</li>
<li>Germline: NF1, VHL, RET (MEN2A/2B), SDH · มักอายุน้อยและเป็นสองข้าง ${S.fa} ${S.r}</li>
<li>HTN ~90% · สองในสามมี paroxysm (5 P's: Pressure, Pain/ปวดหัว, Perspiration, Palpitations, Pallor) · กระตุ้นด้วยความเครียด ออกแรง เปลี่ยนท่า คลำท้อง ${S.fa} ${S.r}</li>
<li>Catecholamine surge ทำให้ HF, pulmonary edema, MI, VF, stroke · อาจหลั่ง EPO → polycythemia ${S.r} ${S.fa}</li>
<li>วินิจฉัย: metanephrines/catecholamines ในพลาสมาหรือปัสสาวะ ↑ แล้วจึงหาตำแหน่งด้วย imaging ${S.h} ${S.fa}</li>
<li>Histology: <b>zellballen</b> (รังของ chief cell ล้อมด้วย sustentacular cell S-100 ⊕) · chief cell chromogranin, synaptophysin ⊕ · salt-and-pepper chromatin ${S.r}</li></ul>`});

SEC.push({id:"men",k:"c",t:"Multiple endocrine neoplasias",mm:"MEN syndromes",leg:[],tools:[["mn",[["men1","MEN1"],["men2a","MEN2A"],["men2b","MEN2B"]]]],draw:menD,
notes:()=>`<ul><li>MEN ทุกแบบเป็น <b>autosomal dominant</b> · เกิดเร็วกว่า sporadic, หลายอวัยวะ, หลายจุดในอวัยวะเดียว และมีระยะ hyperplasia นำ ${S.fa} ${S.r}</li>
<li><b>MEN1</b> (3 P's): Parathyroid (80–95%, มักเป็นอาการแรก), Pancreas (gastrinoma, insulinoma, VIPoma), Pituitary (prolactinoma บ่อยสุด) · MEN1 = menin, tumor suppressor บน chr 11 ${S.fa} ${S.r}</li>
<li>Gastrinoma ใน MEN1 อยู่ที่ <b>duodenum</b> บ่อยกว่าตับอ่อน · PanNET เป็นสาเหตุเจ็บป่วยและตายหลัก ${S.r}</li>
<li><b>MEN2A</b>: medullary thyroid ca (~100%), pheo (40–50%), parathyroid hyperplasia · <b>RET</b> proto-oncogene (receptor tyrosine kinase) chr 10 ${S.fa} ${S.r}</li>
<li><b>MEN2B</b>: MTC + pheo + <b>mucosal neuroma</b> (ปาก ลำไส้) + marfanoid habitus · ไม่มี hyperparathyroidism ${S.fa} ${S.r}</li>
<li>RET carrier ทุกคนควรได้ <b>prophylactic thyroidectomy</b> ${S.r} ${S.fa}</li>
<li>MEN4: คล้าย MEN1 แต่ germline CDKN1B (p27) ${S.r}</li></ul>`});

SEC.push({id:"islet",k:"c",t:"Pancreatic islet cell tumors",mm:"Islet cell tumors",leg:[],tools:[["is",[["ins","Insulinoma"],["glu","Glucagonoma"],["som","Somatostatinoma"],["vip","VIPoma"]]]],draw:isletD,
notes:()=>`<ul><li>PanNET เป็นเพียง ~2% ของเนื้องอกตับอ่อน · <b>insulinoma พบบ่อยสุด</b> และ ~90% benign · ชนิดอื่น 60–90% เป็นมะเร็ง ${S.r}</li>
<li><b>Insulinoma</b>: hypoglycemia ตอนอดอาหาร/ออกกำลัง → สับสน หมดสติ · Whipple triad · insulin + <b>C-peptide ↑</b> ต่างจาก insulin ที่ฉีดเอง (C-peptide ↓) · ~10% ใน MEN1 ${S.fa} ${S.r} ${S.h}</li>
<li>Insulin secretagogue (sulfonylurea) ก็ทำให้ C-peptide สูง จึงต้องตรวจหายาในเลือดด้วย ${S.h}</li>
<li><b>Glucagonoma</b>: 6 D's — Dermatitis (necrolytic migratory erythema), Diabetes, DVT, Declining weight, Depression, Diarrhea ${S.fa} ${S.r}</li>
<li><b>Somatostatinoma</b>: กด secretin, CCK, glucagon, insulin, gastrin, GIP → DM, นิ่วถุงน้ำดี, steatorrhea, achlorhydria ${S.fa} ${S.r}</li>
<li><b>VIPoma</b>: WDHA — watery diarrhea, hypokalemia, achlorhydria ${S.r}</li>
<li>Genetics: MEN1, PTEN/TSC (mTOR pathway), ATRX/DAXX ${S.r}</li></ul>`});

SEC.push({id:"carcinoid",k:"c",t:"Carcinoid tumors & carcinoid syndrome",mm:"Carcinoid",leg:[],tools:[["met","Liver metastasis"]],draw:carcD,
notes:()=>`<div class="pearl">ปิด/เปิด liver metastasis: 5-HT จากลำไส้ถูก<b>ตับทำลาย (first-pass)</b> · จะเกิด syndrome เมื่อ 5-HT เข้าระบบโดยตรง เช่น มี liver mets ${S.fa} ${S.r}</div>
<ul><li>Carcinoid (well-differentiated NET) เกิดมากที่ลำไส้ (&gt; 40% ที่ small intestine) และปอด ${S.r} ${S.fa}</li>
<li>Carcinoid syndrome (&lt; 10% ของผู้ป่วย): flushing เป็นพัก ๆ, ท้องเสีย, wheeze, right-sided valve disease (TR, PS) · ปอดมี MAO จึงหัวใจซีกซ้ายรอด ${S.fa} ${S.r}</li>
<li>5-HT ใช้ tryptophan จนหมด → niacin ขาด (<b>pellagra</b>) ${S.fa}</li>
<li>วินิจฉัย: 24-h urine <b>5-HIAA ↑</b> · octreotide scintigraphy หาตำแหน่ง · histology rosette, chromogranin A, synaptophysin ⊕ ${S.fa}</li>
<li>ตำแหน่งกำหนดพฤติกรรม: midgut (jejunum, ileum) หลายก้อนและดุ · appendix มักเล็กที่ปลายและ benign · กระเพาะ/duodenum มักหายด้วยการตัด ${S.r}</li>
<li>Gross: ก้อนเหลือง แข็งจาก desmoplasia → ลำไส้หักพับอุดตันได้ ${S.r}</li>
<li>รักษา: ผ่าตัด · octreotide หรือ telotristat คุมอาการ · rule of thirds ${S.fa}</li></ul>`});

SEC.push({id:"zes",k:"c",t:"Zollinger-Ellison syndrome",mm:"Zollinger-Ellison",leg:[],tools:[["zz",[["norm","Normal secretin test"],["zes","Gastrinoma"]]]],draw:zesD,
notes:()=>`<ul><li>Gastrinoma หลั่ง gastrin → กรดเกิน → แผลหลายแผล ซ้ำ ดื้อ PPI ใน duodenum/jejunum (90–95%) ${S.fa} ${S.r}</li>
<li>ตำแหน่ง: duodenum (บ่อยสุด) หรือตับอ่อน · บริเวณ <b>gastrinoma triangle</b> ${S.fa} ${S.r}</li>
<li>ท้องเสีย/steatorrhea เพราะกรดทำลายเอนไซม์ตับอ่อนในลำไส้ · ปวดท้อง แสบอก น้ำหนักลด ${S.fa}</li>
<li><b>Secretin stimulation test ⊕</b>: ปกติ secretin กด gastrin แต่ gastrinoma กลับหลั่ง gastrin เพิ่ม · chromogranin A ⊕ ${S.fa}</li>
<li>~25% อยู่ใน MEN1 (มักหลายก้อน) · มากกว่าครึ่งลุกลามหรือแพร่กระจายแล้วตอนวินิจฉัย แม้ histology ดู bland ${S.r} ${S.fa}</li>
<li>รักษา: PPI คุมกรด + ผ่าตัดก้อน · liver mets ทำให้อายุสั้นลง ${S.r}</li></ul>`});

SEC.push({id:"aps",k:"a",t:"Autoimmune polyendocrine syndromes",mm:"APS-1 · APS-2",leg:[],tools:[["ap",[["aps1","APS-1"],["aps2","APS-2"]]]],draw:apsD,
notes:()=>`<ul><li>Autoimmune adrenalitis เป็นสาเหตุ Addison 80–90% ในประเทศรายได้สูง · ~60% เกิดร่วมใน autoimmune polyendocrine syndrome ${S.r}</li>
<li><b>APS-1</b>: AIRE mutation → thymus ไม่แสดง self-antigen ของอวัยวะส่วนปลาย → T cell autoreactive ไม่ถูกกำจัด ${S.r}</li>
<li>APS-1 มี autoantibody ต่อ IL-17 และ IL-22 (cytokine ของ Th17) → <b>chronic mucocutaneous candidiasis</b> ${S.r}</li>
<li>APS-1 ลำดับคลาสสิก: candidiasis วัยเด็ก → hypoparathyroidism → Addison วัยรุ่น · ร่วมกับ ectodermal dystrophy ${S.r}</li>
<li><b>APS-2</b>: Addison + autoimmune thyroiditis ± T1DM · เริ่มวัยผู้ใหญ่ · ไม่มี candidiasis หรือ hypoparathyroidism · พบบ่อยกว่า APS-1 ${S.r}</li></ul>`});

const EXTRA=["aps"];

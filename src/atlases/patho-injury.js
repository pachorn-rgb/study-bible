/* ================= General Pathology · Cellular injury =================
   Robbins & Cotran 10e Ch 2 (core) · Harrison 22e Ch 117 & 270 (amyloidosis)
   Drawings are schematic H&E-style illustrations (original), not copies of book figures. */
Object.assign(GN,{a:"Adaptation & injury",b:"Cell death",c:"Ischemia & free radicals",d:"Deposits",e:"Mechanisms & aging"});
Object.assign(ST,{ad:"hypertrophy",min:"0",am:"he"});

/* ---------- H&E palette + drawing primitives ---------- */
const HE={cy:"#F6CBD8",cyD:"#EC9DB6",cyX:"#E77FA2",mem:"#C45C82",nu:"#5E4FA3",nuL:"#8C7FC4",bg:"#FCEEF2",col:"#F3D9E2",ca:"#4B49A6",fat:"#FFFDF8",blood:"#D9455F",fib:"#F25C8A",amy:"#F0C3D0",green:"#9BCB4C"};
const tLine=(x1,y1,x2,y2,c="var(--sb-line)",w=2)=>`<path d="M${x1},${y1} L${x2},${y2}" style="stroke:${c};stroke-width:${w};fill:none;stroke-linecap:round"/>`;
const tArw=(x1,y1,x2,y2)=>tLine(x1,y1,x2,y2,"var(--sb-muted)",2)+`<path d="M${x2},${y2} l-5,-9 l10,0 z" style="fill:var(--sb-muted)" transform="rotate(${Math.atan2(y2-y1,x2-x1)*180/Math.PI-90} ${x2} ${y2})"/>`;
const blob=(cx,cy,rx,ry,fill,stroke,sw=1.6,wob=0)=>{let d="";const n=18;for(let i=0;i<=n;i++){const a=i/n*2*Math.PI,k=1+(wob?Math.sin(a*5+cx)*wob:0);d+=(i?"L":"M")+(cx+rx*k*Math.cos(a)).toFixed(1)+","+(cy+ry*k*Math.sin(a)).toFixed(1)}return `<path d="${d}Z" style="fill:${fill};stroke:${stroke};stroke-width:${sw};stroke-linejoin:round"/>`};
const dot=(x,y,r,c)=>`<circle cx="${x}" cy="${y}" r="${r}" style="fill:${c}"/>`;
const pmn=(x,y,s=1)=>blob(x,y,9*s,8*s,HE.cy,HE.mem,1)+[[-4,-2],[0,2],[4,-1]].map(([a,b])=>dot(x+a*s,y+b*s,2.6*s,HE.nu)).join("");
const lym=(x,y)=>dot(x,y,5,HE.nu);
/* one cell: o = {r, swell, bleb, nuc:"n|pyk|rhex|lysis|none", eo, rupt, shrink} */
function cellD(x,y,o={}){const r=(o.r||30)*(o.swell?1.18:1)*(o.shrink?.62:1);let b="";
 const fill=o.eo?HE.cyX:o.swell?"#FBE2EA":HE.cy;
 if(o.rupt){b+=`<path d="M${x-r},${y} A${r},${r*.85} 0 0 1 ${x+r*.6},${y-r*.7}" style="fill:none;stroke:${HE.mem};stroke-width:1.8;stroke-dasharray:6 5"/>`+blob(x,y,r,r*.85,fill,"none",0,.05);
  for(let i=0;i<7;i++){const a=.4+i*.25;b+=dot(x+(r+8+i%3*6)*Math.cos(a),y+(r*.85+6+i%2*7)*Math.sin(a),2,HE.cyD)}}
 else b+=blob(x,y,r,r*.85,fill,HE.mem,1.8,o.shrink?.06:0);
 if(o.bleb)[[-.9,-.5],[.85,-.55],[.95,.35],[-.7,.7]].forEach(([a,c])=>b+=blob(x+a*r,y+c*r*.85,r*.2,r*.18,fill,HE.mem,1.4));
 if(o.swell&&!o.rupt)[[-.4,-.25],[.35,.3],[-.3,.45],[.45,-.35]].forEach(([a,c])=>b+=blob(x+a*r,y+c*r,r*.12,r*.09,"#fff",HE.cyD,.8));
 const n=o.nuc||"n",nr=r*.36;
 if(n==="n")b+=blob(x,y,nr,nr*.9,HE.nuL,HE.nu,1.4)+dot(x+nr*.2,y-nr*.15,nr*.22,HE.nu);
 if(n==="pyk")b+=dot(x,y,nr*.55,"#3B2F7A");
 if(n==="rhex")[[-.5,-.3],[.4,-.4],[.1,.4],[-.3,.5],[.6,.2]].forEach(([a,c])=>b+=dot(x+a*nr*1.4,y+c*nr*1.4,nr*.22,"#3B2F7A"));
 if(n==="lysis")b+=blob(x,y,nr,nr*.9,"rgba(140,127,196,.25)","rgba(94,79,163,.3)",1);
 if(n==="crescent")b+=`<path d="M${x-nr},${y} A${nr},${nr} 0 0 1 ${x+nr},${y} A${nr},${nr*.5} 0 0 0 ${x-nr},${y}Z" style="fill:#3B2F7A"/>`+blob(x,y,nr,nr*.9,"none",HE.nu,1.2);
 return b}
const frame=(x,y,w,h,title,sub)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" style="fill:${HE.bg};stroke:var(--sb-line);stroke-width:1.2"/>`+(title?T(x+12,y+20,title,{a:"start",c:"bh"}):"")+(sub?T(x+12,y+36,sub,{a:"start",c:"s m"}):"");
const tag=(x,y,s,c)=>{const w=s.length*6.4+18;return `<rect x="${x-w/2}" y="${y-11}" width="${w}" height="22" rx="11" style="fill:${c}"/>`+`<text x="${x}" y="${y+4}" text-anchor="middle" style="font:700 10.5px var(--sb-font);fill:#fff">${s}</text>`};

/* ---------- 1. stress → adaptation / injury → death ---------- */
function responseD(){let b="";
 b+=frame(10,10,700,330);
 b+=cellD(90,175,{r:34})+T(90,232,"Normal cell",{c:"bh"})+T(90,248,"homeostasis",{c:"s m"});
 b+=cellD(285,82,{r:44})+T(285,142,"Adaptation",{c:"bh"})+T(285,157,"เช่น hypertrophy",{c:"s m"});
 b+=cellD(285,250,{r:34,swell:true,bleb:true})+T(285,310,"Reversible injury",{c:"bh"})+T(285,325,"บวม · blebs · ER ขยาย",{c:"s m"});
 b+=cellD(505,110,{r:34,rupt:true,nuc:"rhex",eo:true})+pmn(552,78)+pmn(560,140)+pmn(470,64);
 b+=T(505,172,"Necrosis",{c:"bh"})+T(505,187,"membrane แตก · อักเสบ",{c:"s m"});
 b+=cellD(470,262,{r:34,shrink:true,eo:true,nuc:"pyk"})+blob(535,258,9,8,HE.cyX,HE.mem,1.2)+dot(535,258,3.5,"#3B2F7A")+blob(556,276,7,6,HE.cyX,HE.mem,1.2);
 b+=blob(628,262,28,22,"#F9DDE6",HE.mem,1.4,.08)+dot(622,258,7,HE.nu)+blob(640,270,6,5,HE.cyX,HE.mem,1)+T(628,300,"macrophage",{c:"s m"});
 b+=T(520,318,"Apoptosis",{c:"bh"})+T(520,333,"หด · แตกเป็น bodies · ไม่อักเสบ",{c:"s m"});
 b+=tArw(128,158,236,100)+tArw(128,190,244,240)+tArw(322,236,462,128)+tArw(322,262,432,262);
 b+=T(170,112,"stress",{c:"s m"})+T(176,232,"injury",{c:"s m"})+T(398,168,"รุนแรง / นาน",{c:"s m"});
 return psvg(b,"0 0 720 350")}

/* ---------- 2. adaptations (interactive epithelium) ---------- */
function adaptD(){const m=ST.ad;let b=frame(10,10,700,300);
 const bm=232;b+=`<path d="M40,${bm} L680,${bm}" style="stroke:${HE.mem};stroke-width:3"/>`+T(672,bm+18,"basement membrane",{a:"end",c:"s m"});
 b+=`<rect x="40" y="${bm+3}" width="640" height="52" style="fill:${HE.col}"/>`;
 const col=(x,w,h,o={})=>{const y=bm-h;return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" style="fill:${o.f||HE.cy};stroke:${HE.mem};stroke-width:1.4"/>`+blob(x+w/2+(o.dx||0),y+h*(o.ny||.66),w*(o.nw||.26),h*(o.nh||.12),o.nf||HE.nuL,HE.nu,1.2)};
 const sq=(x,y,w,h)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" style="fill:#F9D7E2;stroke:${HE.mem};stroke-width:1.3"/>`+blob(x+w/2,y+h/2,w*.16,h*.22,HE.nu,HE.nu,1);
 if(m==="hypertrophy"){for(let i=0;i<4;i++)b+=col(60+i*134,114,150,{nw:.2})}
 if(m==="hyperplasia"){for(let i=0;i<12;i++)b+=col(60+i*43,38,96+((i*37)%3)*22,{nw:.28,ny:.4+((i*13)%5)*.1})}
 if(m==="atrophy"){for(let i=0;i<8;i++)b+=col(70+i*64,40,46,{nw:.3,nh:.18,ny:.55})}
 if(m==="metaplasia"){for(let i=0;i<6;i++)b+=col(50+i*42,36,110,{nw:.28});b+=tLine(318,90,318,232,"var(--sb-muted)",1.5);for(let r=0;r<4;r++)for(let i=0;i<8;i++)b+=sq(330+i*42+(r%2)*10,bm-(r+1)*27,40-r*2,25-r*2);b+=T(170,74,"columnar",{c:"s"})+T(500,108,"stratified squamous",{c:"s"})}
 if(m==="dysplasia"){for(let i=0;i<13;i++){const h=70+((i*53)%5)*18;b+=col(56+i*47,42,h,{nw:.24+((i*7)%3)*.08,nh:.16+((i*5)%3)*.05,ny:.3+((i*11)%5)*.12,nf:"#4A3C8F",dx:((i*17)%3-1)*5})}b+=dot(330,140,4,"#3B2F7A")+T(345,128,"mitosis ผิดที่",{a:"start",c:"s"})}
 if(["hypertrophy","hyperplasia","atrophy"].includes(m))b+=`<rect x="610" y="${bm-96}" width="44" height="96" rx="5" style="fill:none;stroke:var(--sb-muted);stroke-width:1.4;stroke-dasharray:5 4"/>`+T(632,bm-104,"ปกติ",{c:"s m"});
 const cap={hypertrophy:["Hypertrophy","เซลล์โตขึ้น จำนวนเท่าเดิม · หัวใจ กล้ามเนื้อลาย"],hyperplasia:["Hyperplasia","จำนวนเซลล์มากขึ้น · ต้องเป็นเซลล์ที่แบ่งตัวได้"],atrophy:["Atrophy","เซลล์เล็กลง / น้อยลง · autophagy ↑"],metaplasia:["Metaplasia","เปลี่ยนชนิดเซลล์ · เช่น หลอดลมคนสูบบุหรี่"],dysplasia:["Dysplasia","ขนาด รูปร่าง ระเบียบเสีย · เสี่ยงมะเร็ง"]}[m];
 b+=T(30,42,cap[0],{a:"start",c:"bb"})+T(30,62,cap[1],{a:"start",c:"s m"});
 return psvg(b,"0 0 720 320")}

/* ---------- 3. ischemia time slider ---------- */
function injuryD(){const t=+ST.min;let b=frame(10,10,700,320);
 const stage=t<5?0:t<20?1:t<45?2:3;
 const o=[{r:52},{r:52,swell:true},{r:52,swell:true,bleb:true},{r:52,rupt:true,nuc:"rhex",eo:true}][stage];
 b+=cellD(190,170,o);
 if(stage===3)b+=pmn(270,110)+pmn(110,250);
 if(stage===1||stage===2)b+=T(190,262,"Na⁺ + H₂O เข้าเซลล์",{c:"s m"});
 const F=[["ATP ↓ · Na⁺/K⁺-ATPase ล้ม",1],["cellular swelling · ER ขยาย",1],["glycolysis → lactate → pH ↓",1],["membrane blebs · microvilli หาย",2],["ribosomes หลุด · protein synthesis ↓",2],["mitochondria เสียถาวร",3],["membrane แตก · enzyme รั่ว (troponin)",3],["nucleus: pyknosis → karyorrhexis → karyolysis",3]];
 F.forEach(([s,st],i)=>{const on=stage>=st,y=58+i*30,irr=st===3;b+=`<rect x="380" y="${y-14}" width="310" height="24" rx="8" style="fill:${on?(irr?"#FBD5DE":"#E7F3EC"):"transparent"};stroke:${on?(irr?"#D9455F":"#5AA97A"):"var(--sb-line)"};stroke-width:1"/>`+T(392,y+2,s,{a:"start",c:on?"s":"s m"})});
 b+=T(380,40,stage===3?"IRREVERSIBLE":"REVERSIBLE",{a:"start",c:"bh"})+(stage===3?tag(530,36,"point of no return","#D9455F"):"");
 b+=T(190,52,`ขาดเลือด ${t} นาที`,{c:"bb"})+T(190,72,"(ตัวอย่าง: กล้ามเนื้อหัวใจ)",{c:"s m"});
 return psvg(b,"0 0 720 340")}

/* ---------- 4. apoptosis: cell sequence + pathways ---------- */
function apopD(){let b=frame(10,10,700,150,"เซลล์ที่กำลัง apoptosis");
 b+=cellD(80,95,{r:30})+tArw(118,95,150,95);
 b+=cellD(200,95,{r:30,shrink:true,eo:true,nuc:"crescent"})+T(200,140,"หด · chromatin ชิดขอบ",{c:"s m"})+tArw(235,95,275,95);
 b+=cellD(320,95,{r:30,shrink:true,eo:true,nuc:"rhex",bleb:true})+T(320,140,"blebbing · นิวเคลียสแตก",{c:"s m"})+tArw(355,95,395,95);
 [[430,80,10],[452,104,8],[424,110,7],[460,76,6]].forEach(([x,y,r])=>b+=blob(x,y,r,r*.9,HE.cyX,HE.mem,1.2)+dot(x,y,r*.35,"#3B2F7A"));b+=T(440,140,"apoptotic bodies",{c:"s m"})+tArw(478,95,520,95);
 b+=blob(590,95,48,36,"#F9DDE6",HE.mem,1.4,.07)+dot(574,86,10,HE.nu)+blob(604,100,9,8,HE.cyX,HE.mem,1)+dot(604,100,3,"#3B2F7A")+T(590,140,"macrophage กิน (PS = eat me)",{c:"s m"});
 /* pathways */
 const y0=176;b+=frame(10,y0,700,250,"ทางเข้า 3 ทาง → caspase");
 const box=(x,y,w,h,t,s,c)=>`<rect x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" rx="11" style="fill:${c||"var(--sb-surface)"};stroke:var(--sb-line);stroke-width:1.2"/>`+T(x,y+(s?-3:4),t,{c:"bh"})+(s?T(x,y+13,s,{c:"s"}):"");
 b+=box(130,y0+60,210,44,"Intrinsic (mitochondrial)","DNA damage · ขาด survival signal","#EEF0FB")+box(130,y0+122,210,40,"BAX/BAK ↑ · BCL-2 ↓","cytochrome c ออก")+box(130,y0+180,210,32,"apoptosome → caspase-9","");
 b+=box(360,y0+60,200,44,"Extrinsic (death receptor)","FasL–Fas · TNF–TNFR1","#FBEAF0")+box(360,y0+122,200,32,"FADD → caspase-8","");
 b+=box(585,y0+60,190,44,"Perforin / granzyme B","CD8⁺ T cell · NK cell","#FFF1E6")+box(585,y0+122,190,32,"granzyme → caspase","");
 b+=box(360,y0+222,300,34,"Executioner caspase-3, 6, 7","","#FCE3EA");
 b+=tArw(130,y0+82,130,y0+101)+tArw(130,y0+142,130,y0+163)+tArw(360,y0+82,360,y0+105)+tArw(585,y0+82,585,y0+105)+tArw(200,y0+196,280,y0+212)+tArw(360,y0+138,360,y0+204)+tArw(560,y0+138,445,y0+210);
 return psvg(b,"0 0 720 436")}

/* ---------- 5. necrosis patterns: six mini histology tiles ---------- */
function necD(){let b="";const W=226,H=196;
 const tile=(i,title,sub,draw)=>{const x=10+(i%3)*(W+11),y=10+Math.floor(i/3)*(H+12);return frame(x,y,W,H)+`<g transform="translate(${x},${y})">${draw()}</g>`+T(x+12,y+H-26,title,{a:"start",c:"bh"})+T(x+12,y+H-10,sub,{a:"start",c:"s m"})};
 b+=tile(0,"Coagulative","โครงร่างอยู่ เซลล์ไร้นิวเคลียส",()=>{let g="";[[60,70],[160,70],[110,120]].forEach(([cx,cy])=>{g+=blob(cx,cy,44,34,"#F7DFE7",HE.mem,1.5);for(let k=0;k<8;k++){const a=k/8*2*Math.PI;g+=blob(cx+30*Math.cos(a),cy+22*Math.sin(a),11,9,HE.cyX,"rgba(196,92,130,.5)",1)}});return g});
 b+=tile(1,"Liquefactive","สมอง · abscess · เหลว",()=>{let g=`<rect x="10" y="12" width="206" height="140" rx="10" style="fill:${HE.cy}"/>`+blob(113,80,72,50,"#FFF6F9",HE.mem,1.5,.07);for(let k=0;k<14;k++)g+=pmn(70+(k*37)%90,52+(k*23)%58,.8);for(let k=0;k<6;k++)g+=dot(90+k*12,98+(k%2)*6,2,HE.cyD);return g});
 b+=tile(2,"Caseous","TB · granuloma · ขาวยุ่ย",()=>{let g="";for(let k=0;k<22;k++){const a=k/22*2*Math.PI;g+=lym(113+82*Math.cos(a),82+58*Math.sin(a))}for(let k=0;k<14;k++){const a=k/14*2*Math.PI;g+=blob(113+60*Math.cos(a),82+42*Math.sin(a),10,6,"#F4D6E0",HE.mem,1)+dot(113+60*Math.cos(a),82+42*Math.sin(a),2.6,HE.nuL)}g+=blob(113,82,40,26,"#FBEFF3",HE.cyD,1.2,.1);g+=blob(170,120,18,13,HE.cy,HE.mem,1.2);for(let k=0;k<6;k++)g+=dot(160+k*4,113+(k%2)*10,2.6,HE.nu);return g});
 b+=tile(3,"Fat","pancreatitis · saponification",()=>{let g="";for(let r=0;r<3;r++)for(let c=0;c<4;c++){const x=34+c*52+(r%2)*14,y=36+r*44;g+=blob(x,y,24,20,HE.fat,HE.mem,1.3,.05)}[[86,58],[138,102],[64,104]].forEach(([x,y])=>g+=blob(x,y,22,18,"#C9D3F2","#6E78C8",1.2,.12)+dot(x-5,y-3,3,HE.ca)+dot(x+6,y+4,2.5,HE.ca));return g});
 b+=tile(4,"Fibrinoid","vasculitis · ผนังหลอดเลือดชมพูสด",()=>{let g=blob(113,80,70,58,HE.cy,HE.mem,1.4)+blob(113,80,50,40,HE.fib,"#C2185B",1.2,.06)+blob(113,80,28,22,"#FFF",HE.mem,1.2)+dot(108,78,4,HE.blood)+dot(118,84,4,HE.blood);for(let k=0;k<5;k++)g+=pmn(40+k*30,140-(k%2)*8,.7);return g});
 b+=tile(5,"Gangrenous","dry = coagulative · wet = + infection",()=>{let g=`<path d="M30,60 C70,48 130,50 190,58 L196,104 C140,112 70,114 30,104Z" style="fill:#F2C9A9;stroke:#B9876B;stroke-width:1.4"/>`+`<path d="M130,52 C160,50 180,52 192,58 L198,104 C180,108 158,110 132,112Z" style="fill:#3A2A2A"/>`+`<path d="M126,50 C122,70 132,92 128,114" style="fill:none;stroke:${HE.blood};stroke-width:3;stroke-dasharray:4 3"/>`+T(126,134,"demarcation",{c:"s"});return g});
 return psvg(b,"0 0 720 436")}

/* ---------- 6. ischemia: vulnerable zones ---------- */
function ischD(){let b="";const tile=(x,t,s)=>frame(x,10,166,200)+T(x+83,186,t,{c:"bh"})+T(x+83,200,s,{c:"s m"});
 b+=tile(10,"สมอง","watershed · hippocampus · Purkinje");
 b+=blob(93,95,62,52,"#F5E6EA",HE.mem,1.4)+`<path d="M93,45 L93,145" style="stroke:${HE.mem};stroke-width:1"/>`+[[60,70],[126,70],[60,124],[126,124]].map(([x,y])=>blob(x,y,14,9,"#E77FA2","none",0)).join("");
 b+=tile(186,"หัวใจ","subendocardium ของ LV");
 b+=blob(269,95,62,62,HE.cy,HE.mem,1.6)+blob(269,95,40,40,"#E77FA2","none",0)+blob(269,95,30,30,"#FFF",HE.mem,1.2)+T(269,99,"LV",{c:"s"});
 b+=tile(362,"ตับ","zone 3 (รอบ central vein)");
 {let d="";for(let i=0;i<6;i++){const a=i/6*2*Math.PI;d+=(i?"L":"M")+(445+62*Math.cos(a)).toFixed(1)+","+(95+62*Math.sin(a)).toFixed(1)}b+=`<path d="${d}Z" style="fill:${HE.cy};stroke:${HE.mem};stroke-width:1.4"/>`+blob(445,95,30,30,"#E77FA2","none",0)+dot(445,95,8,"#fff")+T(445,99,"CV",{c:"s"});for(let i=0;i<6;i++){const a=i/6*2*Math.PI;b+=dot(445+62*Math.cos(a),95+62*Math.sin(a),5,"#7FA7D9")}}
 b+=tile(538,"ไต · ลำไส้ใหญ่","PCT straight · TAL · splenic flexure");
 b+=`<path d="M576,60 C560,90 566,128 600,140 C622,146 636,120 626,100 C618,84 630,70 616,58 C604,48 586,48 576,60Z" style="fill:${HE.cy};stroke:${HE.mem};stroke-width:1.4"/>`+`<path d="M598,72 C592,92 594,112 606,126" style="stroke:#E77FA2;stroke-width:9;fill:none;stroke-linecap:round"/>`+`<path d="M648,140 L648,70 L690,70" style="stroke:${HE.cy};stroke-width:12;fill:none"/>`+dot(648,70,8,"#E77FA2");
 return psvg(b,"0 0 720 220")}

/* ---------- 7. infarcts ---------- */
function infarctD(){let b=frame(10,10,345,250,"Pale infarct · ไต","end-artery · อวัยวะแข็ง")+frame(365,10,345,250,"Red infarct · ปอด","เลือดสองทาง · เนื้อหลวม");
 b+=`<path d="M150,58 C206,52 252,90 254,138 C256,190 214,228 160,226 C118,224 92,204 98,182 C104,166 124,160 124,142 C124,124 104,116 100,98 C96,74 118,60 150,58Z" style="fill:#C9566F;stroke:#8E2F45;stroke-width:1.6"/>`+`<path d="M206,74 L160,140 L250,158 C254,124 238,92 206,74Z" style="fill:#F4E1C9;stroke:#E2C49A;stroke-width:1.4"/>`+`<path d="M124,142 L160,140" style="stroke:#6B1F33;stroke-width:3"/>`+dot(160,140,4,"#3A2A2A")+T(214,128,"ซีด",{c:"bh"})+T(120,238,"ฐานอยู่ที่ผิวอวัยวะ · ยอดชี้ไปที่หลอดเลือดอุดตัน",{c:"s m"});
 b+=`<path d="M440,60 C410,90 402,180 430,222 C470,244 560,240 600,214 C640,180 640,90 600,62 C560,40 470,40 440,60Z" style="fill:#F2C8D2;stroke:${HE.mem};stroke-width:1.6"/>`+`<path d="M480,150 L620,110 C628,150 622,190 600,214Z" style="fill:#B8324F;opacity:.9"/>`+dot(480,150,4,"#3A2A2A")+T(585,168,"แดง",{c:"bh w"})+T(530,238,"PE · venous occlusion · reperfusion",{c:"s m"});
 return psvg(b,"0 0 720 270")}

/* ---------- 8. free radicals ---------- */
function rosD(){let b=frame(10,10,700,290);
 b+=T(130,42,"เกิดจาก",{c:"bh"})+T(360,42,"ทำลาย",{c:"bh"})+T(590,42,"กำจัดด้วย",{c:"bh"});
 const pill=(x,y,w,t,c)=>`<rect x="${x-w/2}" y="${y-14}" width="${w}" height="28" rx="14" style="fill:${c};stroke:var(--sb-line);stroke-width:1"/>`+T(x,y+4,t,{c:"s"});
 [["radiation: H₂O → •OH","#EEF0FB"],["inflammation: NADPH oxidase","#EEF0FB"],["drug / chemical metabolism (CYP450)","#EEF0FB"],["Fenton: Fe²⁺ + H₂O₂ → •OH","#FBD5DE"],["reperfusion","#EEF0FB"]].forEach(([t,c],i)=>b+=pill(130,76+i*44,210,t,c));
 b+=blob(360,150,54,50,"#FBE2EA",HE.mem,1.6)+dot(360,150,14,HE.nuL)+T(360,154,"•OH",{c:"bh"});
 [["lipid peroxidation",360,76,140],["protein misfolding",296,232,124],["DNA breaks",428,232,100]].forEach(([t,x,y,w])=>b+=pill(x,y,w,t,"#FCE3EA"));
 [["SOD: O₂•⁻ → H₂O₂","#E7F3EC"],["catalase: H₂O₂ → H₂O","#E7F3EC"],["glutathione peroxidase","#E7F3EC"],["vit A · C · E","#E7F3EC"],["ceruloplasmin · transferrin","#E7F3EC"]].forEach(([t,c],i)=>b+=pill(590,76+i*44,200,t,c));
 b+=tArw(238,150,300,150)+tArw(484,150,420,150);
 return psvg(b,"0 0 720 310")}

/* ---------- 9. radiation sensitivity ---------- */
function radD(){let b=frame(10,10,700,250,"ความไวต่อรังสี","เซลล์ที่แบ่งตัวเร็ว → ไวที่สุด");
 [["bone marrow · lymphocytes",.98],["GI epithelium (crypts)",.9],["gonads (spermatogonia)",.93],["skin · hair follicles",.72],["vascular endothelium",.5],["bone · cartilage",.3],["neurons · skeletal muscle",.12]].forEach(([t,v],i)=>{const y=62+i*27;b+=T(30,y+4,t,{a:"start",c:"s"})+`<rect x="230" y="${y-8}" width="440" height="14" rx="7" style="fill:var(--sb-surface2)"/><rect x="230" y="${y-8}" width="${440*v}" height="14" rx="7" style="fill:${v>.6?"#D9455F":v>.35?"#E5A04B":"#6CA9D6"}"/>`});
 return psvg(b,"0 0 720 270")}

/* ---------- 10. calcification ---------- */
function calcD(){let b=frame(10,10,345,240,"Dystrophic","Ca²⁺ ในเลือดปกติ · ลงที่เนื้อตาย")+frame(365,10,345,240,"Metastatic","Ca²⁺/PO₄ ในเลือดสูง · ลงที่เนื้อปกติ");
 b+=blob(182,140,120,64,HE.cy,HE.mem,1.6)+blob(182,140,90,40,"#FFF8E8","#E3C08A",1.4,.06)+`<path d="M92,140 C130,118 230,118 272,140" style="fill:none;stroke:#E3C08A;stroke-width:1"/>`;
 [[140,138],[168,150],[196,132],[224,146],[150,156],[208,158]].forEach(([x,y])=>b+=blob(x,y,8,5,HE.ca,"none",0,.2));b+=T(182,222,"atheroma · ลิ้นหัวใจเสื่อม · TB · fat necrosis",{c:"s m"});
 for(let r=0;r<2;r++)for(let c=0;c<3;c++){const x=440+c*80,y=96+r*70;b+=blob(x,y,34,28,"#FFF",HE.mem,1.6,.04);b+=blob(x,y,34,28,"none",HE.ca,3.2,.04)+dot(x-20,y+16,3,HE.ca)+dot(x+22,y-14,2.5,HE.ca)}
 b+=T(538,222,"ผนังถุงลม · ไต · gastric mucosa · หลอดเลือด",{c:"s m"});
 return psvg(b,"0 0 720 260")}
function psammD(){let b=frame(10,10,700,150,"Psammoma bodies","dystrophic calcification เป็นวงชั้นๆ");
 [[120,90],[220,92],[320,86]].forEach(([x,y])=>{for(let k=5;k>0;k--)b+=blob(x,y,k*7,k*7,k%2?"#7C79C9":"#B9B7EA","none",0)});
 b+=T(560,70,"papillary thyroid carcinoma",{c:"s"})+T(560,90,"serous ovarian carcinoma",{c:"s"})+T(560,110,"meningioma · mesothelioma",{c:"s"});
 return psvg(b,"0 0 720 170")}

/* ---------- 11. amyloid (H&E vs Congo red polarized) ---------- */
function amyD(){const cr=ST.am==="cr";let b=`<rect x="10" y="10" width="700" height="300" rx="14" style="fill:${cr?"#1E1A26":HE.bg};stroke:var(--sb-line)"/>`;
 b+=T(30,40,cr?"Congo red + polarized light":"H&E",{a:"start",c:"bh"+(cr?" w":"")});
 const dep=(x,y,rx,ry)=>blob(x,y,rx,ry,cr?"#3B3346":HE.amy,"none",0,.12)+(cr?Array.from({length:7},(_,k)=>`<path d="M${x-rx*.7+k*rx*.22},${y-ry*.5} q6,${ry*.5} 0,${ry}" style="fill:none;stroke:${HE.green};stroke-width:3;opacity:.9"/>`).join(""):"");
 b+=dep(190,170,120,80)+dep(470,150,90,60)+dep(560,240,70,40);
 b+=blob(190,170,26,20,cr?"#2A2433":"#fff",cr?"#55506A":HE.mem,1.2)+T(190,174,"vessel",{c:"s"+(cr?" w":"")});
 if(!cr)for(let k=0;k<8;k++)b+=cellD(330+(k%4)*36,82+Math.floor(k/4)*150,{r:13});
 b+=T(690,296,cr?"apple-green birefringence":"ชมพูจาง ไร้รูปร่าง ล้อมหลอดเลือด",{a:"end",c:"s"+(cr?" w":" m")});
 /* fibril inset */
 b+=`<rect x="560" y="30" width="136" height="80" rx="10" style="fill:${cr?"#2A2433":"#fff"};stroke:var(--sb-line)"/>`;
 for(let k=0;k<4;k++)b+=`<path d="M572,${48+k*14} l10,-6 l10,6 l10,-6 l10,6 l10,-6 l10,6 l10,-6 l10,6 l10,-6 l10,6" style="fill:none;stroke:${cr?HE.green:HE.mem};stroke-width:2"/>`;
 b+=T(628,104,"β-pleated sheet fibrils",{c:"s"+(cr?" w":"")});
 return psvg(b,"0 0 720 320")}

/* ---------- 12. accumulations ---------- */
function accumD(){let b="";const tile=(i,t,s,draw)=>{const x=10+i*178;return frame(x,10,166,190)+`<g transform="translate(${x},10)">${draw()}</g>`+T(x+83,172,t,{c:"bh"})+T(x+83,188,s,{c:"s m"})};
 b+=tile(0,"Steatosis","TG vacuole ดันนิวเคลียส",()=>blob(83,80,52,44,HE.cy,HE.mem,1.6)+blob(90,82,34,30,"#FFFDF5",HE.mem,1)+`<path d="M44,74 a10,8 0 1 0 6,-14" style="fill:${HE.nu}"/>`);
 b+=tile(1,"Lipofuscin","wear-and-tear · สีเหลืองน้ำตาล",()=>blob(83,80,52,44,HE.cy,HE.mem,1.6)+blob(83,80,16,14,HE.nuL,HE.nu,1.2)+[[60,60],[66,98],[108,64],[112,96],[96,108],[58,82]].map(([x,y])=>dot(x,y,4,"#B7862F")).join(""));
 b+=tile(2,"Hemosiderin","Prussian blue · Fe",()=>blob(83,80,54,46,"#F9DDE6",HE.mem,1.6,.07)+dot(70,74,12,HE.nu)+[[96,70],[104,90],[88,100],[110,78],[92,84]].map(([x,y])=>dot(x,y,5,"#2F5FB3")).join(""));
 b+=tile(3,"Foam cell","cholesterol · atheroma",()=>{let g=blob(83,80,54,46,"#FFF6F0",HE.mem,1.6);for(let k=0;k<9;k++)g+=dot(56+(k%3)*24,58+Math.floor(k/3)*20,8,"#fff")+`<circle cx="${56+(k%3)*24}" cy="${58+Math.floor(k/3)*20}" r="8" style="fill:none;stroke:#E9C9B5"/>`;return g+dot(108,104,8,HE.nu)});
 return psvg(b,"0 0 720 210")}

/* ================= sections (First Aid order) ================= */
SEC.push({id:"response",k:"a",t:"Cellular responses to stress",mm:"Stress responses",drugs:"",act:[],leg:[],draw:responseD,
notes:()=>`<ul><li>เซลล์ปกติรักษาสมดุลไว้ได้ในช่วงแคบ · เจอ stress ที่รับไหว → <b>ปรับตัว</b> · เกินขีดจำกัด → <b>บาดเจ็บ</b> ${S.r}</li><li>บาดเจ็บเบาหรือสั้น → กลับคืนได้ · รุนแรงหรือยาวนาน → ตายแบบ <b>necrosis</b> หรือ <b>apoptosis</b> ${S.r}</li><li>การเปลี่ยนแปลงเรียงลำดับ: biochemical → EM → LM · กล้ามเนื้อหัวใจตายในราว 20–40 นาทีของการขาดเลือด แต่ LM เห็นชัดหลังหลายชั่วโมง ${S.x}</li></ul>`});

SEC.push({id:"adapt",k:"a",t:"Cellular adaptations",mm:"Adaptations",drugs:"",act:[],leg:[],tools:[["ad",[["hypertrophy","Hypertrophy"],["hyperplasia","Hyperplasia"],["atrophy","Atrophy"],["metaplasia","Metaplasia"],["dysplasia","Dysplasia"]]]],draw:adaptD,
notes:()=>`<ul><li><b>Hypertrophy</b>: เซลล์ใหญ่ขึ้นจากโปรตีนโครงสร้างเพิ่ม · เกิดในเซลล์ที่แบ่งตัวได้น้อย เช่น หัวใจในความดันสูง · มดลูกตั้งครรภ์มีทั้ง hypertrophy และ hyperplasia ${S.r}</li>
<li><b>Hyperplasia</b>: ต้องเป็นเนื้อเยื่อที่แบ่งตัวได้ · physiologic เช่น เต้านมช่วงให้นม · pathologic เช่น endometrial hyperplasia จาก estrogen (เสี่ยงมะเร็ง) · BPH ไม่เพิ่มความเสี่ยงมะเร็งต่อมลูกหมาก ${S.x}</li>
<li><b>Atrophy</b>: ใช้งานน้อย, ขาดเส้นประสาท, เลือดไปน้อย, ขาดอาหารหรือ hormone, แรงกด · กลไก: สร้างโปรตีนลดลง + ย่อยผ่าน ubiquitin–proteasome และ autophagy มากขึ้น ${S.r}</li>
<li><b>Metaplasia</b>: stem cell ถูก reprogram ให้สร้างเซลล์ชนิดที่ทน stress ได้ดีกว่า · Barrett esophagus (squamous → columnar), หลอดลมคนสูบบุหรี่ (columnar → squamous), ขาด vitamin A · กลับคืนได้ แต่ถ้า stress ยังอยู่อาจกลายเป็น dysplasia ${S.r}</li>
<li><b>Dysplasia</b>: ไม่ใช่ adaptation แท้ · เซลล์ขนาดต่างกัน นิวเคลียสใหญ่เข้ม เสียระเบียบ · เป็นขั้นก่อนมะเร็ง ${S.x}</li></ul>`});

SEC.push({id:"injury",k:"a",t:"Reversible vs irreversible cell injury",mm:"Cell injury",drugs:"",act:[],leg:[],tools:[["min",[["0","0 นาที"],["10","10 นาที"],["30","30 นาที"],["60","60 นาที"]]]],draw:injuryD,
notes:()=>`${tbl(["","Reversible","Irreversible"],[["หัวใจของเรื่อง","ATP ↓ → cell swelling","mitochondria เสียถาวร + membrane แตก"],["LM","hydropic change, fatty change","eosinophilia ↑, นิวเคลียสเปลี่ยน"],["EM","blebs, microvilli หาย, mito บวม (± small amorphous densities), ER ขยาย, myelin figures","large (flocculent) amorphous densities ใน mitochondria, membrane ขาด"],["ในเลือด","—","enzyme รั่ว: troponin (หัวใจ), ALT/AST (ตับ)"]])}${S.r}
<ul><li>แตะเวลาด้านบนเพื่อดูการเปลี่ยนแปลงตามระยะเวลาการขาดเลือด (เวลาเป็นตัวอย่างโดยประมาณของกล้ามเนื้อหัวใจ) ${S.x}</li><li>นิวเคลียสในเซลล์ตาย: <b>pyknosis</b> (หด เข้ม) → <b>karyorrhexis</b> (แตก) → <b>karyolysis</b> (จางหาย) ${S.r}</li></ul>`});

SEC.push({id:"apoptosis",k:"b",t:"Apoptosis",mm:"Apoptosis",drugs:"",act:[],leg:[],draw:apopD,
notes:()=>`<ul><li>การตายแบบมีโปรแกรม ใช้ ATP · เซลล์หด chromatin ชิดขอบ → blebbing → <b>apoptotic bodies</b> ที่ถูก macrophage กิน · membrane ยังครบ จึง<b>ไม่มี inflammation</b> ${S.r}</li>
<li>Phosphatidylserine พลิกออกด้านนอกเป็นสัญญาณให้ phagocyte กิน ${S.r}</li>
<li><b>Intrinsic</b>: ขาด growth factor, DNA damage, โปรตีนพับผิด → BH3-only sensors → BAX/BAK เจาะ mitochondria → cytochrome c ออก · BCL-2 และ BCL-XL ยับยั้ง ${S.r}</li>
<li><b>Extrinsic</b>: Fas–FasL กำจัด lymphocyte ที่ทำปฏิกิริยากับตัวเอง (ถ้าบกพร่อง → autoimmune lymphoproliferative syndrome) · TNF ${S.r}</li>
<li>Physiologic: embryogenesis, endometrium ลอก, negative selection ใน thymus · Pathologic: DNA damage, ไวรัสตับอักเสบ (Councilman bodies) ${S.r}</li>
<li>Follicular lymphoma t(14;18) มี BCL-2 มากเกิน → เซลล์ไม่ตาย ${S.r}</li></ul>`});

SEC.push({id:"necrosis",k:"b",t:"Necrosis: patterns",mm:"Necrosis",drugs:"",act:[],leg:[],draw:necD,
notes:()=>`<ul><li>Necrosis = เซลล์ตายจากการบาดเจ็บรุนแรง membrane แตก เนื้อหาในเซลล์รั่ว → <b>inflammation</b> ${S.r}</li>
<li><b>Coagulative</b>: ischemia ของอวัยวะแข็ง (ยกเว้นสมอง) · เห็นเงาเซลล์อยู่ได้หลายวัน ${S.r}</li><li><b>Liquefactive</b>: สมองที่ขาดเลือด และฝีจากแบคทีเรีย ${S.r} · เชื่อว่าเพราะสมองมี lysosomal enzyme มากและ ECM น้อย ${S.x}</li>
<li><b>Caseous</b>: TB และเชื้อราบางชนิด · ขาวยุ่ย มี granuloma ล้อม ${S.r}</li><li><b>Fat</b>: lipase ปล่อย fatty acid → จับ Ca²⁺ เป็น <b>saponification</b> · pancreatitis, ผ่าตัด/บาดเจ็บที่เต้านม ${S.r}</li>
<li><b>Fibrinoid</b>: immune complex + fibrin ในผนังหลอดเลือด · vasculitis, malignant hypertension ${S.r}</li><li><b>Gangrenous</b>: คำทางคลินิก · dry = coagulative · wet = มีการติดเชื้อร่วม (liquefactive) ${S.r}</li></ul>`});

SEC.push({id:"ischemia",k:"c",t:"Ischemia & areas at risk",mm:"Ischemia",drugs:"",act:[],leg:[],draw:ischD,
notes:()=>`<ul><li>Ischemia (เลือดไม่ไป) รุนแรงกว่า hypoxia เพราะขาดทั้ง O₂, glucose และของเสียคั่ง ${S.r}</li>
<li>ลำดับ: oxidative phosphorylation ↓ → ATP ↓ → Na⁺ pump ล้ม → บวม · anaerobic glycolysis → lactate → pH ↓ · ribosome หลุด ${S.r}</li>
<li>Neuron ทนขาดเลือดได้ไม่กี่นาที · cardiomyocyte ประมาณ 20–40 นาที · fibroblast และไขมันทนได้นานกว่า ${S.x}</li>
<li>บริเวณเสี่ยง (ภาพด้านบน): watershed ของสมอง, hippocampus CA1, Purkinje cells · subendocardium · zone 3 ของตับ · straight PCT และ TAL · splenic flexure และ rectosigmoid ${S.x}</li></ul>`});

SEC.push({id:"infarct",k:"c",t:"Infarcts & reperfusion injury",mm:"Infarcts",drugs:"",act:[],leg:[],draw:infarctD,
notes:()=>`<ul><li><b>Pale (anemic)</b>: อวัยวะแข็งที่มี end-artery: หัวใจ, ไต, ม้าม ${S.r}</li><li><b>Red (hemorrhagic)</b>: เนื้อหลวม, เลือดเลี้ยงสองทาง (ปอด, ลำไส้เล็ก), venous occlusion (บิดของอัณฑะ/รังไข่) หรือเลือดกลับมาหลังขาด ${S.r}</li>
<li><b>Reperfusion injury</b>: เลือดกลับมาพร้อม O₂ → ROS ใหม่, Ca²⁺ ท่วม mitochondria, leukocyte และ complement (IgM จับเนื้อเยื่อที่ขาดเลือด) → บาดเจ็บเพิ่ม ${S.r}</li><li>หลังเปิดหลอดเลือดใน MI อาจเห็น contraction band necrosis ${S.r}</li></ul>`});

SEC.push({id:"ros",k:"c",t:"Free radical injury",mm:"Free radicals",drugs:"",act:[],leg:[],draw:rosD,
notes:()=>`<ul><li>Free radical มี electron ไม่ครบคู่ ไวต่อปฏิกิริยาและก่อ chain reaction ${S.r}</li><li><b>Hydroxyl radical (•OH)</b> ทำลายมากที่สุด · Fe²⁺ เร่งผ่าน Fenton reaction (เกี่ยวกับ hemochromatosis) ${S.r}</li>
<li>เกี่ยวข้องกับ ischemia-reperfusion, chemical injury, inflammation, radiation, aging, มะเร็ง และโรคเสื่อมของระบบประสาท ${S.r}</li><li>O₂ ความเข้มข้นสูงในทารกเกิดก่อนกำหนด → retinopathy of prematurity, bronchopulmonary dysplasia ${S.x}</li></ul>`});

SEC.push({id:"radiation",k:"c",t:"Ionizing radiation injury",mm:"Radiation",drugs:"",act:[],leg:[],draw:radD,
notes:()=>`<ul><li>กลไก: DNA double-strand break โดยตรง และ •OH จากการแตกตัวของน้ำ ${S.r}</li><li>Acute radiation syndrome: คลื่นไส้อาเจียน ท้องเสีย เม็ดเลือดต่ำ ผิวหนังเสียหาย ${S.x}</li>
<li>ผลระยะยาว: fibrosis (เช่น radiation pneumonitis → pulmonary fibrosis), endarteritis ของหลอดเลือด, มะเร็ง (leukemia, thyroid) ${S.x}</li><li>เนื้องอกที่ขาด O₂ ดื้อรังสีมากกว่า เพราะ O₂ ช่วยตรึงความเสียหายของ DNA ${S.x}</li></ul>`});

SEC.push({id:"calcif",k:"d",t:"Pathologic calcification",mm:"Calcification",drugs:"",act:[],leg:[],draw:()=>calcD()+psammD(),
notes:()=>`${tbl(["","Dystrophic","Metastatic"],[["Ca²⁺ ในเลือด","ปกติ","สูง (หรือ PO₄ สูง)"],["ลงที่","เนื้อตาย/เสียหาย","เนื้อเยื่อปกติ"],["ตัวอย่าง","atheroma, aortic stenosis, TB, fat necrosis, psammoma","hyperparathyroidism, CKD, vitamin D เกิน, มะเร็งทำลายกระดูก"]])}${S.r}
<ul><li>H&E เป็นจุดสีม่วงน้ำเงิน · ย้อม von Kossa ${S.x}</li><li>Metastatic ชอบเนื้อเยื่อที่ขับกรดแล้วภายในเป็นด่าง: ถุงลม, ไต, gastric mucosa ${S.r}</li></ul>`});

SEC.push({id:"amyloid",k:"d",t:"Amyloidosis",mm:"Amyloidosis",drugs:"",act:[],leg:[],tools:[["am",[["he","H&E"],["cr","Congo red · polarized"]]]],draw:amyD,
notes:()=>`${tbl(["ชนิด","Precursor","ลักษณะเด่น"],[["AL","Ig light chain (plasma cell clone)","หัวใจ ไต · ลิ้นโต · จ้ำเลือดรอบตา"],["AA","serum amyloid A (acute phase)","โรคอักเสบเรื้อรัง (RA, IBD, TB, FMF) · ไต"],["ATTR","transthyretin (wild-type หรือ mutant)","wild-type: หัวใจผู้ชายสูงอายุ · mutant: neuropathy + cardiomyopathy"],["Aβ2M","β2-microglobulin","ฟอกไตนานปี · carpal tunnel, ข้อ"],["Localized","Aβ, amylin, calcitonin, ANP","Alzheimer, T2DM islets, medullary thyroid CA, atria"]])}${S.h}
<ul><li>โปรตีนพับผิดเป็น β-pleated sheet fibril สะสม<b>นอกเซลล์</b> · oligomer ระหว่างทางอาจเป็นตัวที่เป็นพิษมากที่สุด ${S.h}</li>
<li>Congo red → apple-green birefringence ใต้ polarized light (แตะปุ่มด้านบน) ${S.h}</li><li>วินิจฉัย: เจาะดูด<b>ไขมันหน้าท้อง</b> ง่ายและให้ผลบวกในผู้ป่วย systemic ส่วนใหญ่ (AL สูง · ATTR wild-type ต่ำกว่า) · แยกชนิดด้วย mass spectrometry ดีที่สุด ${S.h}</li>
<li>หัวใจ: restrictive cardiomyopathy, ECG low voltage แต่ผนังหนา · ใช้ NT-proBNP และ troponin แบ่งระยะ AL ${S.h}</li><li>รักษาตามชนิด: AL รักษา plasma cell clone · ATTR ใช้ tafamidis (หัวใจ) · AA รักษาโรคต้นเหตุ (FMF ใช้ colchicine) ${S.h}</li></ul>`});

SEC.push({id:"accum",k:"d",t:"Intracellular accumulations & pigments",mm:"Accumulations",drugs:"",act:[],leg:[],draw:accumD,
notes:()=>`<ul><li>สะสมได้จาก: สร้างมากหรือกำจัดไม่ทัน, โปรตีนพับผิด, ขาด enzyme (storage disease), สิ่งที่ย่อยไม่ได้ ${S.r}</li><li>Steatosis: alcohol, obesity, เบาหวาน, ขาดโปรตีน · เป็น reversible injury ${S.r}</li>
<li>Lipofuscin มาจาก lipid peroxidation · พบในหัวใจ ตับ สมองผู้สูงอายุ ไม่ทำร้ายเซลล์เอง ${S.r}</li><li>Hemosiderin: เลือดออกเฉพาะที่ หรือ iron overload ทั่วร่าง ${S.r}</li></ul>`});

SEC.push({id:"mech",k:"e",t:"Mechanisms of cell injury",mm:"Mechanisms",drugs:"",act:[],leg:[],
draw:()=>cards([["ATP depletion","Na⁺ pump ล้ม → บวม · glycolysis → lactate","ar"],["Mitochondrial damage","ATP ↓ · ROS · permeability transition pore · cytochrome c → apoptosis","vn"],["Ca²⁺ influx","กระตุ้น phospholipase, protease, endonuclease, ATPase","vn"],["Membrane damage","plasma, lysosome, mitochondria → necrosis",""],["DNA damage · misfolded proteins","p53 · unfolded protein response → apoptosis","gl"]]),
notes:()=>`<ul><li>ผลขึ้นกับชนิด ระยะเวลา ความรุนแรงของ injury และสภาพเซลล์ ${S.r}</li><li><b>Unfolded protein response</b>: เพิ่ม chaperone ลดการแปลรหัส · รับไม่ไหว → apoptosis · เกี่ยวกับ CF, α1-antitrypsin deficiency, โรคเสื่อมของสมอง ${S.r}</li><li>Chemical injury: ออกฤทธิ์ตรง หรือผ่าน metabolite ที่ CYP450 สร้างในตับ ${S.r}</li></ul>`});

SEC.push({id:"otherdeath",k:"e",t:"Necroptosis, pyroptosis, ferroptosis & autophagy",mm:"Other death pathways",drugs:"",act:[],leg:[],
draw:()=>cards([["Necroptosis","TNFR1 หรือ sensor ของไวรัส → RIPK1–RIPK3 → MLKL เจาะ membrane · ไม่ใช้ caspase","vn"],["Pyroptosis","เชื้อโรค → inflammasome → caspase-1 → IL-1β + เซลล์ตาย","ar"],["Ferroptosis","lipid peroxidation ที่อาศัยเหล็ก",""],["Autophagy","autophagosome + lysosome ย่อยส่วนของเซลล์ตัวเอง · ช่วยรอดตอนอดอาหาร","gl"]]),
notes:()=>`<ul><li>Necroptosis มีโปรแกรมเหมือน apoptosis แต่หน้าตาและการอักเสบเหมือน necrosis ${S.r}</li><li>Autophagy ผิดปกติเกี่ยวกับมะเร็ง, IBD, โรคเสื่อมของสมอง และการป้องกันเชื้อบางชนิด ${S.r}</li></ul>`});

SEC.push({id:"aging",k:"e",t:"Cellular aging",mm:"Aging",drugs:"",act:[],leg:[],
draw:()=>cards([["DNA damage สะสม","ซ่อม DNA ได้น้อยลง · Werner syndrome (helicase ผิดปกติ) แก่ก่อนวัย","ar"],["Replicative senescence","telomere สั้นลงทุกการแบ่งตัว · stem cell และมะเร็งใช้ telomerase",""],["Protein homeostasis เสีย","chaperone และ proteasome ทำงานลดลง",""],["Nutrient sensing","IGF-1 signaling ↓ และ sirtuins ↑ จาก caloric restriction สัมพันธ์กับอายุยืนในสัตว์ทดลอง","gl"]]),
notes:()=>`<ul><li>ความแก่ของเซลล์เกิดจากหลายกลไกร่วมกัน: ความเสียหายสะสม แบ่งตัวได้น้อยลง ซ่อมแซมได้ช้าลง ${S.r}</li><li>หัวข้อนี้จะย้ายไปอยู่ในหมวด Aging เมื่อทำ atlas Aging ${S.x}</li></ul>`});

const EXTRA=["accum","mech","otherdeath","aging"];

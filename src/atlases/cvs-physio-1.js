/* ================= Cardiovascular Physiology I · Cardiac mechanics, hemodynamics & the cardiac cycle =================
   First Aid Step 1 2025 (Cardiovascular · Physiology, pp. 289–296) order · Guyton & Hall 13e Ch 9, 14, 15, 20, 23 ·
   Boron & Boulpaep Ch 17, 19, 22 · Harrison 22e Ch 246 (bedside exam). All drawings are original schematics. */
//@include _cvs-physio-kit.js
Object.assign(GN,{a:"Cardiac output",b:"Hemodynamics",c:"Cardiac cycle & sounds"});
Object.assign(ST,{ino:"sym",lp:"n",P:120,r:3,h:1,edv:120,esv:50,hr:70,sv:"rest",sedv:120,rad:100,hct:45,vf:"n",pul:"n",pre:120,aft:93,con:2,ph:"all",jv:"n",vd:"as",sp:"phys",mv:"insp",mu:"as"});
const EXTRA=["compl"];

/* ---------- 1. cardiac output variables: SV CAP + myocyte Ca²⁺ handling ---------- */
function covD(){const m=ST.ino;let b="";
 /* top: SV determinants → CO → MAP */
 const inp=[["Preload","EDV · venous return","↑",CV.bl,36],["Contractility","inotropy","↑",CV.lv,80],["Afterload","≈ MAP · wall stress","↓",CV.or,124]];
 inp.forEach(([n,s,e,c,y])=>{b+=RB(18,y-19,170,38,c,{r:19})+T(36,y-2,n,{a:"start",c:"bh"})+T(36,y+12,s,{a:"start",c:"s m"})+CT(172,y+5,e+"SV",c,{a:"end",s:12})+AW(190,y,252,80+(y-80)*.25,c,1.8)});
 b+=DOT(282,80,30,tint(CV.acc,22),{st:CV.acc,sw:2})+CT(282,78,"SV",CV.ink,{s:15,wt:800})+T(282,94,"~70 mL",{c:"s m"});
 b+=AW(314,80,368,80,CV.ink2,1.8)+T(341,70,"× HR",{c:"s"});
 b+=DOT(400,80,30,tint(CV.vol,22),{st:CV.vol,sw:2})+CT(400,78,"CO",CV.ink,{s:15,wt:800})+T(400,94,"~5 L/min",{c:"s m"});
 b+=AW(432,80,488,80,CV.ink2,1.8)+T(460,70,"× TPR",{c:"s"});
 b+=DOT(522,80,32,tint(CV.lv,20),{st:CV.lv,sw:2})+CT(522,78,"MAP",CV.ink,{s:15,wt:800})+T(522,94,"~93 mmHg",{c:"s m"});
 b+=T(400,140,"SV ขึ้นกับ Contractility · Afterload · Preload  (“SV CAP”)",{c:"h"});
 /* bottom: ventricular myocyte */
 const y0=176;b+=`<rect x="14" y="${y0}" width="612" height="336" rx="22" style="fill:${tint(CV.lv,7)};stroke:color-mix(in srgb,${CV.lv} 40%,transparent);stroke-width:1.4"/>`;
 b+=`<path d="M14,${y0+40} H626" style="stroke:color-mix(in srgb,${CV.lv} 55%,transparent);stroke-width:5;stroke-dasharray:1 7;stroke-linecap:round"/>`+T(26,y0+22,"ECF",{a:"start",c:"s m"})+T(26,y0+62,"Ventricular myocyte",{a:"start",c:"bh"});
 const hot=k=>({sym:["b1","ltype","pln","ryr","myo"],dig:["nak","ncx","ryr","myo"],neg:["b1","ltype","myo"]}[m]||[]).includes(k);
 const prot=(x,k,lab,col)=>`<rect x="${x-15}" y="${y0+28}" width="30" height="26" rx="9" style="fill:${hot(k)?col:tint(col,25)};stroke:${col};stroke-width:1.4"/>`+T(x,y0+20,lab,{c:"s"+(hot(k)?"":" m")});
 const ion=(x,y,t,k)=>`<circle cx="${x}" cy="${y}" r="10" style="fill:var(--s-${k});stroke:var(--sb-plate);stroke-width:1.5"/>`+T(x,y+3.5,t,{c:"ion"});
 b+=prot(84,"b1","β₁ receptor",CV.vi)+prot(214,"ltype","L-type Ca²⁺ (Cav1.2)",CV.or)+prot(430,"nak","Na⁺/K⁺-ATPase",CV.bl)+prot(548,"ncx","Na⁺/Ca²⁺ exchanger",CV.tl);
 /* cascade */
 const casc=["Gs","AC","cAMP","PKA"];casc.forEach((t,i)=>{const y=y0+86+i*28;b+=RB(60,y-11,50,22,CV.vi,{r:11,p:hot("b1")?30:12})+T(85,y+4,t,{c:"s"});if(i<3)b+=AW(85,y+11,85,y+16,CV.vi,1.2,{h:5})});
 b+=AW(110,y0+170,196,y0+60,hot("ltype")?CV.vi:CV.mut,1.6,{dash:"4 3"})+TAG(150,y0+108,"P",hot("ltype")?CV.vi:CV.mut,{w:20});
 b+=AW(110,y0+170,192,y0+142,hot("pln")?CV.vi:CV.mut,1.6,{dash:"4 3"})+TAG(150,y0+156,"P",hot("pln")?CV.vi:CV.mut,{w:20});
 /* SR */
 const sry=y0+178;b+=`<path d="${sm([[170,sry-26],[300,sry-34],[460,sry-30],[540,sry-12],[520,sry+18],[380,sry+26],[220,sry+24],[160,sry+6]])}" style="fill:${tint(CV.or,18)};stroke:color-mix(in srgb,${CV.or} 60%,transparent);stroke-width:1.4"/>`;
 b+=T(360,sry+4,"Sarcoplasmic reticulum (Ca²⁺ store)",{c:"s m"});
 b+=`<rect x="196" y="${sry-40}" width="40" height="22" rx="8" style="fill:${hot("pln")?CV.or:tint(CV.or,30)};stroke:${CV.or}"/>`+T(216,sry-25,"SERCA",{c:"s"})+T(216,sry-50,"phospholamban",{c:"s m"});
 b+=`<rect x="414" y="${sry-42}" width="34" height="24" rx="8" style="fill:${hot("ryr")?CV.lv:tint(CV.lv,25)};stroke:${CV.lv}"/>`+T(431,sry-26,"RyR2",{c:"s"});
 /* Ca flows */
 b+=ion(214,y0+82,"Ca","ca")+AW(214,y0+56,214,y0+70,CV.or,2)+AW(226,y0+88,404,sry-44,hot("ryr")?CV.lv:CV.mut,2,{dash:"5 4"})+T(336,y0+100,"Ca²⁺-induced Ca²⁺ release",{c:"s"});
 b+=AW(448,sry-32,500,sry+64,CV.lv,2.4)+ion(476,sry+16,"Ca","ca");
 b+=AW(250,sry+64,226,sry-18,CV.or,1.8)+T(282,sry+52,"reuptake → relaxation",{c:"s m"});
 /* myofilaments */
 const my=sry+82;for(let i=0;i<4;i++){const yy=my+i*12;b+=SP(`M${330+(i%2)*20},${yy} H${600}`,i%2?CV.lv:CV.ink2,i%2?2:4,{op:hot("myo")?1:.45})}
 b+=T(322,my+22,"actin–myosin · TnC จับ Ca²⁺ → หดตัว",{a:"end",c:"s"});
 /* digoxin & Na */
 if(m==="dig"){b+=CT(430,y0+14,"✕ digoxin",CV.bad,{s:12,wt:800})+ion(430,y0+84,"Na","na")+T(430,y0+108,"Na⁺ ใน ↑",{c:"s"})+AW(450,y0+84,532,y0+64,CV.tl,1.6,{dash:"4 3"})+T(548,y0+84,"แลก Ca²⁺ ออกได้น้อย",{c:"s"})+T(548,y0+98,"→ Ca²⁺ ใน ↑",{c:"s"})}
 else b+=ion(548,y0+84,"Ca","ca")+AW(548,y0+70,548,y0+58,CV.tl,1.6);
 if(m==="neg"){b+=CT(84,y0+14,"✕ β-blocker",CV.bad,{s:11.5,wt:800})+CT(214,y0+4,"✕ verapamil/diltiazem",CV.bad,{s:11.5,wt:800})+T(470,y0+124,"acidosis · hypoxia/hypercapnia · HFrEF → Ca²⁺ ต่อแรงหดลด",{c:"s"})}
 const cap={sym:"β₁ → cAMP → PKA: Ca²⁺ เข้าเพิ่ม + SR เก็บ Ca²⁺ มากขึ้น → หดแรงขึ้นและคลายเร็วขึ้น",dig:"Digoxin ยับยั้ง Na⁺/K⁺-ATPase → Na⁺ ในเซลล์สูง → NCX ขับ Ca²⁺ ได้น้อย → Ca²⁺ ในเซลล์ ↑",neg:"Contractility ↓: β-blockade (cAMP ↓), non-DHP CCB, acidosis, hypoxia/hypercapnia, systolic HF"}[m];
 b+=T(320,y0+324,cap,{c:"s"});
 return svg(b,"0 0 640 520")}

/* ---------- 2. myocardial O₂ demand · Laplace ---------- */
const LPRE={n:{P:120,r:3,h:1},dcm:{P:110,r:4.6,h:.8},lvh:{P:180,r:2.6,h:1.7},htn:{P:180,r:3,h:1}};let LPL=null;
function o2D(){if(ST.lp!==LPL){LPL=ST.lp;Object.assign(ST,LPRE[ST.lp])}
 const P=ST.P,r=ST.r,h=ST.h,ten=P*r,str=P*r/(2*h),ten0=360,str0=180;let b="";
 const cx=160,cy=200,k=18,ri=r*k,ro=(r+h)*k;
 b+=FRAME(10,10,300,380)+T(24,34,"LV cross-section",{a:"start",c:"bh"});
 b+=`<circle cx="${cx}" cy="${cy}" r="${((ri+ro)/2).toFixed(1)}" style="fill:none;stroke:${tint(CV.lv,45)};stroke-width:${(ro-ri).toFixed(1)}"/>`;
 b+=`<circle cx="${cx}" cy="${cy}" r="${ri}" style="fill:${tint(CV.lv,10)};stroke:color-mix(in srgb,${CV.lv} 50%,transparent)"/>`;
 for(let i=0;i<8;i++){const a=i*Math.PI/4;b+=AW(cx+Math.cos(a)*ri*.25,cy+Math.sin(a)*ri*.25,cx+Math.cos(a)*(ri-6),cy+Math.sin(a)*(ri-6),CV.lv,1.4,{h:6})}
 b+=SP(`M${cx},${cy} L${cx+ri},${cy}`,CV.ink2,1,{dash:"3 3"})+T(cx+ri/2,cy-6,"r",{c:"bh"});
 b+=SP(`M${cx},${cy-ri} L${cx},${cy-ro}`,CV.or,3)+T(cx+12,cy-ri-(ro-ri)/2+4,"h",{a:"start",c:"bh"});
 const sw=Math.min(6,1+str/60);b+=AW(cx-34,cy+ro+16,cx+34,cy+ro+16,CV.bad,sw,{h:9+sw})+AW(cx+34,cy+ro+16,cx-34,cy+ro+16,CV.bad,sw,{h:9+sw});
 b+=T(cx,cy+ro+38,"wall stress",{c:"s"})+T(cx,372,`P ${P} mmHg · r ${f1c(r)} cm · h ${f1c(h)} cm`,{c:"s m"});
 /* bars */
 const bar=(y,lab,v,v0,c,s)=>{const w=Math.min(250,v/v0*125);return T(330,y-8,lab,{a:"start",c:"bh"})+`<rect x="330" y="${y}" width="270" height="18" rx="9" style="fill:var(--sb-surface2)"/>`+`<rect x="330" y="${y}" width="${w.toFixed(1)}" height="18" rx="9" style="fill:${c}"/>`+SP(`M455,${y-4} V${y+22}`,CV.ink2,1.2,{dash:"3 2"})+T(608,y+13,`${r0(v/v0*100)}%`,{a:"end",c:"s"})+T(330,y+34,s,{a:"start",c:"s m"})};
 b+=FRAME(318,10,312,380)+bar(52,"Wall tension = P × r",ten,ten0,CV.or,"Laplace (ผนังบาง) · ค่าปกติ = 100%")+bar(122,"Wall stress = P × r / 2h",str,str0,CV.bad,"แรงต่อพื้นที่ผนัง → ใช้ O₂ มาก");
 const st=str/str0;const msg=st>1.25?"stress สูง → MVO₂ ↑ · กระตุ้นให้ผนังหนาขึ้น":st<.85?"ผนังหนาช่วยกระจายแรง → stress ต่ำลง":"ใกล้ค่าปกติ";
 b+=T(330,186,msg,{a:"start",c:"h"});
 b+=T(330,222,"ตัวกำหนด MVO₂",{a:"start",c:"bh"});
 [["Heart rate",CV.vi],["Contractility",CV.lv],["Afterload (≈ arterial pressure)",CV.or],["Ventricular size → wall tension",CV.bl]].forEach(([t,c],i)=>{b+=DOT(340,246+i*26,6,c,{sw:0})+T(354,250+i*26,t,{a:"start",c:"s"})});
 b+=T(330,362,"Coronary sinus = เลือด O₂ ต่ำที่สุดในร่างกาย",{a:"start",c:"s m"});
 return svg(b,"0 0 640 400")}

/* ---------- 3. cardiac output equations ---------- */
function coeqD(){const edv=ST.edv,esv=Math.min(ST.esv,edv-5),hr=ST.hr,sv=edv-esv,ef=sv/edv*100,co=sv*hr/1000;let b="";
 /* ventricle "cup" */
 const cup=(x,lev,lab)=>{const top=60,bot=300,w=110,fy=bot-(lev/220)*(bot-top);
  return `<path d="M${x},${top} L${x},${bot-40} Q${x},${bot} ${x+w/2},${bot} Q${x+w},${bot} ${x+w},${bot-40} L${x+w},${top}" style="fill:none;stroke:${CV.ink2};stroke-width:2"/>`+
  `<clipPath id="cp${x}"><path d="M${x},${top} L${x},${bot-40} Q${x},${bot} ${x+w/2},${bot} Q${x+w},${bot} ${x+w},${bot-40} L${x+w},${top}Z"/></clipPath>`+
  `<rect x="${x}" y="${fy}" width="${w}" height="${bot-fy}" clip-path="url(#cp${x})" style="fill:${tint(CV.lv,40)}"/>`+T(x+w/2,bot+22,lab,{c:"bh"})+T(x+w/2,bot+38,`${lev} mL`,{c:"s m"})};
 b+=FRAME(10,10,300,350)+T(24,34,"End-diastole → end-systole",{a:"start",c:"bh"})+cup(30,edv,"EDV")+cup(170,esv,"ESV");
 const ys=300-(edv/220)*240,ye=300-(esv/220)*240;b+=SP(`M152,${ys} H162`,CV.acc,2)+SP(`M157,${ys} V${ye}`,CV.acc,2)+SP(`M152,${ye} H170`,CV.acc,2,{dash:"3 3"})+CT(157,(ys+ye)/2-4,"SV",CV.acc,{s:12})+CT(157,(ys+ye)/2+10,sv,CV.acc,{s:11});
 /* readouts */
 const card=(x,y,t,v,u,n,ok)=>RB(x,y,148,82,ok?CV.vol:CV.bad,{p:ok?12:16})+T(x+12,y+22,t,{a:"start",c:"s m"})+CT(x+12,y+52,v,CV.ink,{a:"start",s:24,wt:800})+T(x+12+String(v).length*14+6,y+52,u,{a:"start",c:"s"})+T(x+12,y+72,n,{a:"start",c:"s m"});
 b+=card(326,10,"SV = EDV − ESV",sv,"mL","ปกติ ~70",sv>=50&&sv<=100)+card(482,10,"EF = SV / EDV",r0(ef),"%","ปกติ 50–70%",ef>=50&&ef<=75)+card(326,100,"CO = SV × HR",f1c(co),"L/min","ปกติ ~5",co>=4&&co<=8)+card(482,100,"Heart rate",hr,"/min","diastole สั้นลงเมื่อ HR สูง",hr>=50&&hr<=100);
 const efm=ef<=40?"EF ≤ 40% → แบบ HFrEF (systolic)":ef<50?"EF 41–49% → mildly reduced":"EF ≥ 50% → preserved (diastolic HF ยังเกิดได้)";b+=T(478,206,efm,{c:"s"});
 /* arterial pulse with PP & MAP */
 const A=AX(340,226,270,110,[0,1],[60,130],[],[80,100,120],"","mmHg",{yo:30});b+=A.g;
 const ap=MONO([[0,80],[.08,80],[.2,120],[.32,108],[.36,100],[.38,104],[.6,90],[.8,82],[.88,80],[1,118]]);
 b+=SP(FN(A,ap,0,1),CV.lv,2.6)+SP(`M${A.X(0)},${A.Y(93)} H${A.X(1)}`,CV.acc,1.6,{dash:"6 4"})+CT(A.X(.68),A.Y(93)-6,"MAP ≈ DBP + ⅓PP = 93",CV.acc,{s:11});
 b+=SP(`M${A.X(.22)},${A.Y(120)} V${A.Y(80)}`,CV.ink2,1.2)+T(A.X(.22)+6,A.Y(103),"PP 40",{a:"start",c:"s"});
 b+=RB(10,370,620,64,CV.bl,{p:10})+T(26,394,"Fick principle",{a:"start",c:"bh"})+T(26,416,"CO = VO₂ ÷ (CaO₂ − CvO₂)   เช่น 250 mL O₂/min ÷ (200 − 150 mL O₂/L) = 5 L/min",{a:"start",c:"s"});
 return svg(b,"0 0 640 444")}

/* ---------- 4. Starling curves ---------- */
const SVC={ex:[160,"Exercise / catecholamines",CV.vol],rest:[118,"Normal (rest)",CV.ink],hfi:[86,"HF + inotrope",CV.or],hf:[58,"Heart failure",CV.bad],bb:[92,"β-blocker (acute)",CV.vi]};
const svf=(m,v)=>m*(1-Math.exp(-Math.max(0,v-30)/62));
function starD(){const sel=ST.sv,e=ST.sedv;let b="";const A=AX(80,30,500,300,[0,240],[0,160],[0,60,120,180,240],[0,40,80,120,160],"Ventricular EDV (preload), mL","Stroke volume, mL");b+=A.g;
 Object.keys(SVC).forEach(k=>{const [m,l,c]=SVC[k],on=k===sel||k==="rest";b+=SP(FN(A,v=>svf(m,v),30,240),c,on?3.2:1.6,{op:on?1:.35,dash:k==="bb"?"7 5":""})+T(A.X(236),A.Y(svf(m,236))-7,l,{a:"end",c:on?"s":"s m"})});
 const [m,,c]=SVC[sel],y=svf(m,e);b+=SP(`M${A.X(e)},${A.Y(0)} V${A.Y(y)} H${A.X(0)}`,c,1.3,{dash:"4 3"})+DOT(A.X(e),A.Y(y),7,c);
 b+=TAG(A.X(e),A.Y(y)-20,`SV ${r0(y)} mL`,c,{w:82});
 /* walking / running markers on normal family */
 [["rest",118,105,"Rest"],["walk",132,128,"Walking"],["run",160,150,"Running"]].forEach(([k,mm,v,l])=>{b+=DOT(A.X(v),A.Y(svf(mm,v)),4,CV.mut,{sw:1.4})+T(A.X(v)-8,A.Y(svf(mm,v))-8,l,{a:"end",c:"s m"})});
 b+=T(330,382,"ขยับเส้นขึ้น = contractility ↑ · เลื่อนไปขวาบนเส้นเดิม = preload ↑",{c:"h"});
 return svg(b,"0 0 640 396")}

/* ---------- 5. resistance, pressure, flow ---------- */
function flowD(){const rr=ST.rad/100,eta=e=>1.2*Math.exp(.025*e),er=eta(ST.hct)/eta(45),R=1/(rr**4)*er,Q=1/R;let b="";
 b+=FRAME(10,10,620,200)+T(24,34,"Poiseuille: R = 8ηL / πr⁴  ·  Q = ΔP / R",{a:"start",c:"bh"});
 const cy=112,hh=Math.max(10,40*rr);b+=`<rect x="70" y="${cy-hh-8}" width="330" height="${2*hh+16}" rx="${hh+8}" style="fill:${tint(CV.lv,30)};stroke:${CV.lv};stroke-width:2"/>`+`<rect x="70" y="${cy-hh}" width="330" height="${2*hh}" rx="${hh}" style="fill:${tint(CV.lv,10)}"/>`;
 const n=Math.max(1,Math.min(9,Math.round(Q*3)));for(let i=0;i<n;i++){const x=95+i*(290/n);b+=AW(x,cy+((i%3)-1)*hh*.45,x+26,cy+((i%3)-1)*hh*.45,CV.lv,2,{h:7})}
 for(let i=0;i<Math.round(ST.hct/9);i++)b+=`<ellipse cx="${100+(i*53)%280}" cy="${cy+(((i*37)%9)-4)*hh/6}" rx="6" ry="3.6" style="fill:${CV.lv};opacity:.65"/>`;
 b+=T(50,cy+4,"P₁",{c:"bh"})+T(420,cy+4,"P₂",{c:"bh"})+T(235,cy+hh+30,`radius ${ST.rad}% · Hct ${ST.hct}%`,{c:"s m"});
 const bx=440;b+=T(bx,62,"Resistance",{a:"start",c:"s"})+`<rect x="${bx}" y="68" width="170" height="16" rx="8" style="fill:var(--sb-surface2)"/><rect x="${bx}" y="68" width="${Math.min(170,R*42.5)}" height="16" rx="8" style="fill:${CV.or}"/>`+T(bx+170,62,`${R<10?f1c(R):r0(R)}×`,{a:"end",c:"bh"});
 b+=T(bx,112,"Flow",{a:"start",c:"s"})+`<rect x="${bx}" y="118" width="170" height="16" rx="8" style="fill:var(--sb-surface2)"/><rect x="${bx}" y="118" width="${Math.min(170,Q*42.5)}" height="16" rx="8" style="fill:${CV.vol}"/>`+T(bx+170,112,`${Q<10?f1c(Q):r0(Q)}×`,{a:"end",c:"bh"});
 b+=T(bx,162,rr<1?`r ลด ${r0((1-rr)*100)}% → R เพิ่ม ${f1c(1/rr**4)} เท่า`:rr>1?`r เพิ่ม ${r0((rr-1)*100)}% → Q เพิ่ม ${f1c(rr**4)} เท่า`:"ค่าอ้างอิง (= 1×)",{a:"start",c:"h"});
 b+=T(bx,184,"viscosity ขึ้นกับ hematocrit เป็นหลัก",{a:"start",c:"s m"});
 /* series vs parallel */
 const zz=(x,y,w,c)=>{let d=`M${x},${y}`;for(let i=0;i<6;i++)d+=` L${x+(i+.5)*w/6},${y+(i%2?6:-6)}`;return SP(d+` L${x+w},${y}`,c,2.2)};
 b+=FRAME(10,222,305,190)+T(24,246,"Series: R_T = R₁ + R₂ + R₃",{a:"start",c:"bh"});
 b+=SP("M30,320 H60",CV.ink2,2)+zz(60,320,60,CV.or)+SP("M120,320 H135",CV.ink2,2)+zz(135,320,60,CV.or)+SP("M195,320 H210",CV.ink2,2)+zz(210,320,60,CV.or)+SP("M270,320 H295",CV.ink2,2);
 b+=T(90,300,"R",{c:"s"})+T(165,300,"R",{c:"s"})+T(240,300,"R",{c:"s"})+T(162,360,"รวม = 3R · แรงดันตกทีละช่วง",{c:"s"})+T(162,382,"เช่น artery → arteriole → capillary",{c:"s m"});
 b+=FRAME(325,222,305,190)+T(339,246,"Parallel: 1/R_T = 1/R₁ + 1/R₂ + 1/R₃",{a:"start",c:"bh"});
 b+=SP("M345,315 H385 M385,275 V355 M555,275 V355 M555,315 H610",CV.ink2,2);[275,315,355].forEach(y=>b+=SP(`M385,${y} H440`,CV.ink2,2)+zz(440,y,60,CV.vol)+SP(`M500,${y} H555`,CV.ink2,2));
 b+=T(478,380,"รวม = R/3 · ต่ออวัยวะใหม่ขนาน → TPR ลด",{c:"s"})+T(478,398,"การไหลเวียนของอวัยวะต่างๆ เป็นแบบขนาน",{c:"s m"});
 return svg(b,"0 0 640 422")}

/* ---------- 6. pressure, area & velocity along the systemic tree ---------- */
function treeD(){let b="";const seg=["Aorta","Arteries","Arterioles","Capillaries","Venules","Veins","Venae cavae"],area=[2.5,20,40,2500,250,80,8];
 const x0=90,w=520,cx=i=>x0+w*(i+.5)/7;b+=FRAME(10,10,620,470);
 seg.forEach((s,i)=>{b+=`<rect x="${x0+w*i/7+2}" y="24" width="${w/7-4}" height="440" rx="10" style="fill:${i===2?tint(CV.or,16):i===3?tint(CV.vol,14):i===5?tint(CV.ra,10):"transparent"}"/>`+T(cx(i),456,s,{c:"s"})});
 /* pressure */
 const Ap=AX(x0,40,w,130,[0,7],[0,130],[],[0,40,80,120],"","Pressure (mmHg)",{yo:44});b+=Ap.g.replace(/class="plot"/,'class="plot" style="fill:none"');
 const pm=MONO([[0,100],[.5,100],[1,96],[1.6,90],[2,85],[2.5,60],[3,35],[3.5,22],[4,10],[5,7],[6,4],[7,1]]);
 const pulse=x=>x<2.2?Math.max(0,1-x/2.2)*20*Math.sin(x*16):0;b+=SP(FN(Ap,x=>pm(x)+pulse(x),0,7,280),CV.lv,2.4)+T(Ap.X(2.5),Ap.Y(95),"ความดันตกมากสุดที่ arteriole",{a:"start",c:"s"});
 /* area (log) */
 const Aa=AX(x0,200,w,110,[0,7],[0,4],[],[],"","Total area (cm², log)",{yo:44});b+=Aa.g.replace(/class="plot"/,'class="plot" style="fill:none"');
 area.forEach((a,i)=>{const h=Math.log10(a*4)/4*110;b+=`<rect x="${cx(i)-18}" y="${310-h}" width="36" height="${h}" rx="6" style="fill:${tint(CV.vol,i===3?70:36)}"/>`+T(cx(i),305-h,a,{c:"s"})});
 /* velocity */
 const Av=AX(x0,334,w,96,[0,7],[0,1],[],[],"","Velocity",{yo:44});b+=Av.g.replace(/class="plot"/,'class="plot" style="fill:none"');
 const vel=area.map(a=>1/a),vm=Math.max(...vel);b+=SP(PTS(vel.map((v,i)=>[cx(i),Av.Y(Math.pow(v/vm,.35))])),CV.bl,2.6);
 b+=T(cx(0)+16,Av.Y(1)+4,"33 cm/s",{a:"start",c:"s"})+T(cx(3),Av.Y(.12)-8,"0.3 mm/s",{c:"s"});
 return svg(b,"0 0 640 490")}

/* ---------- 7. cardiac & vascular function curves ---------- */
const VFM={n:[1,7,1,"Normal"],"ino+":[1.45,7,1,"Inotropy ↑"],"ino-":[.6,7,1,"Inotropy ↓"],"vol+":[1,10,1,"Volume / venous tone ↑"],"vol-":[1,4.6,1,"Volume ↓ (hemorrhage)"],"tpr+":[.86,7,1.45,"TPR ↑ (vasopressor)"],"tpr-":[1.15,7,.68,"TPR ↓ (exercise, AV shunt)"]};
function vfcD(){const [ci,psf,rv,lab]=VFM[ST.vf];let b="";const A=AX(80,30,500,310,[-4,12],[0,14],[-4,0,4,8,12],[0,2,4,6,8,10,12,14],"Right atrial pressure (mmHg)","Cardiac output / venous return (L/min)");b+=A.g;
 const cof=k=>p=>Math.max(0,11.5*k*(1-Math.exp(-(p+3)/3.6))),vrf=(P,R)=>p=>Math.max(0,(P-Math.max(p,-1.5))/(1.28*R));
 const meet=(f,g)=>{let lo=-4,hi=12;for(let i=0;i<40;i++){const m=(lo+hi)/2;(f(m)-g(m)<0)?lo=m:hi=m}return lo};
 const c0=cof(1),v0=vrf(7,1),c1=cof(ci),v1=vrf(psf,rv);
 b+=SP(FN(A,c0,-3,12),CV.lv,2,{op:.45,dash:"6 4"})+SP(FN(A,v0,-4,7),CV.ra,2,{op:.45,dash:"6 4"});
 b+=SP(FN(A,c1,-3,12),CV.lv,3.2)+SP(FN(A,v1,-4,Math.min(12,psf)),CV.ra,3.2);
 const p0=meet(c0,v0),p1=meet(c1,v1);
 b+=DOT(A.X(p0),A.Y(c0(p0)),6,CV.mut)+DOT(A.X(p1),A.Y(c1(p1)),8,CV.acc);
 if(ST.vf!=="n")b+=AW(A.X(p0),A.Y(c0(p0)),A.X(p1)+(p1>p0?-8:8)*.7,A.Y(c1(p1))+(c1(p1)>c0(p0)?8:-8)*.7,CV.acc,1.8);
 b+=T(A.X(11.6),A.Y(c1(11.6))-8,"Cardiac function",{a:"end",c:"s"})+T(A.X(psf)+4,A.Y(.4),"MSFP "+psf,{a:"start",c:"s"})+T(A.X(-3.6),A.Y(v1(-4))-8,"Venous return",{a:"start",c:"s"});
 b+=RB(392,46,180,62,CV.acc,{p:12})+T(406,68,lab,{a:"start",c:"bh"})+T(406,88,`RAP ${f1c(p1)} · CO ${f1c(c1(p1))} L/min`,{a:"start",c:"s"});
 b+=T(330,394,"จุดตัด = operating point (CO = VR) · เส้นจางคือภาวะปกติ",{c:"h"});
 return svg(b,"0 0 640 404")}

/* ---------- 8 (เสริม). compliance & arterial pulse ---------- */
function complD(){let b="";const A=AX(70,40,230,230,[0,100],[0,1600],[0,50,100],[0,400,800,1200,1600],"Pressure (mmHg)","Volume (mL)");b+=A.g;
 b+=SP(FN(A,p=>p<20?1300*(1-Math.exp(-p/6)):1253+3*(p-20),0,100,120),CV.ra,3)+SP(FN(A,p=>700*(1-Math.exp(-p/60))+20,0,100),CV.lv,3);
 b+=T(A.X(60),A.Y(1500),"Veins",{c:"bh"})+T(A.X(70),A.Y(560),"Arteries",{c:"bh"})+T(185,330,"vein compliance ≈ 24 เท่าของ artery",{c:"s"})+T(185,348,"→ veins เป็นแหล่งเก็บเลือด (~64%)",{c:"s m"});
 const shapes={n:[[0,80],[.1,82],[.22,120],[.36,104],[.4,98],[.42,101],[.7,88],[1,80]],old:[[0,75],[.1,77],[.2,160],[.34,140],[.4,120],[.42,122],[.7,95],[1,75]],as:[[0,80],[.1,81],[.4,104],[.46,102],[.5,98],[.7,90],[1,80]],ar:[[0,50],[.1,52],[.2,150],[.32,120],[.5,80],[.8,58],[1,50]]};
 const cap={n:"Normal · PP ≈ 40",old:"Arteriosclerosis · compliance ↓ → systolic ↑, PP กว้าง",as:"Aortic stenosis · parvus et tardus (เล็กและช้า)",ar:"Aortic regurgitation · PP กว้างมาก, diastolic ต่ำ"};
 const B=AX(370,40,250,230,[0,1],[40,170],[],[40,80,120,160],"","mmHg",{yo:30});b+=B.g+SP(FN(B,MONO(shapes[ST.pul]),0,1),CV.lv,3)+SP(FN(B,MONO(shapes.n),0,1),CV.mut,1.4,{dash:"5 4"});
 b+=T(495,330,cap[ST.pul],{c:"s"})+T(495,348,"เส้นประ = ปกติ",{c:"s m"});
 return svg(b,"0 0 640 360")}

/* ---------- 9. PV loop (interactive) ---------- */
const EDP=v=>.25*(Math.exp(.031*v)-1);
function pvPath(A,o){const f=o.edp||EDP,n=24,pts=[];for(let i=0;i<=n;i++){const v=o.esv+(o.edv-o.esv)*i/n;pts.push([A.X(v),A.Y(f(v))])}
 const sv=o.edv-o.esv;return `M${pts.map(p=>p.map(z=>z.toFixed(1)).join(",")).join(" L")} L${A.X(o.edv)},${A.Y(o.pao)} C${A.X(o.edv-.12*sv)},${A.Y(o.ppk+14)} ${A.X(o.esv+.3*sv)},${A.Y(o.ppk+8)} ${A.X(o.esv)},${A.Y(o.pes)} Z`}
function pvD(){const Ees=ST.con,edv=ST.pre,map=ST.aft,pao=map-13,pes=map+7,esv=Math.min(edv-8,Math.max(8,pes/Ees)),sv=edv-esv,ef=sv/edv*100,ppk=pes+20;
 let b="";const A=AX(70,24,400,330,[0,220],[0,200],[0,50,100,150,200],[0,50,100,150,200],"LV volume (mL)","LV pressure (mmHg)");b+=A.g;
 b+=SP(FN(A,v=>Ees*v,0,Math.min(220,195/Ees)),CV.lv,1.5,{dash:"6 4",op:.7})+T(A.X(Math.min(200,180/Ees))+6,A.Y(Math.min(190,180)),"ESPVR",{a:"start",c:"s"});
 b+=SP(FN(A,EDP,0,200),CV.bl,1.5,{dash:"6 4",op:.7})+T(A.X(205),A.Y(EDP(205))-6,"EDPVR",{a:"end",c:"s"});
 b+=`<path d="${pvPath(A,{edv:120,esv:50,pao:80,pes:100,ppk:120})}" style="fill:none;stroke:${CV.mut};stroke-width:1.6;stroke-dasharray:5 4"/>`;
 const d=pvPath(A,{edv,esv,pao,pes,ppk});b+=`<path d="${d}" style="fill:${tint(CV.acc,22)};stroke:${CV.ink};stroke-width:3;stroke-linejoin:round"/>`;
 const ev=[[edv,EDP(edv),"MC","Mitral ปิด",1],[edv,pao,"AO","Aortic เปิด",1],[esv,pes,"AC","Aortic ปิด",-1],[esv,EDP(esv),"MO","Mitral เปิด",-1]];
 ev.forEach(([v,p,t,l,s])=>{b+=DOT(A.X(v),A.Y(p),5,CV.acc)+(ST.labels?TAG(A.X(v)+s*24,A.Y(p)+(t==="MO"||t==="MC"?-16:-6),t,CV.ink2,{w:32}):"")});
 if(ST.labels){b+=T((A.X(esv)+A.X(edv))/2,A.Y(EDP((esv+edv)/2))-10,"① filling",{c:"s"})+T(A.X(edv)+8,A.Y((pao+EDP(edv))/2),"② IVC",{a:"start",c:"s"})+T((A.X(esv)+A.X(edv))/2,A.Y(ppk+18),"③ ejection",{c:"s"})+T(A.X(esv)-8,A.Y(pes/2),"④ IVR",{a:"end",c:"s"})}
 /* readouts */
 const sw=sv*(map+5-EDP(edv));const rd=(y,k,v,u,ok)=>RB(486,y,144,58,ok?CV.vol:CV.bad,{p:ok?11:16})+T(498,y+20,k,{a:"start",c:"s m"})+CT(498,y+45,v,CV.ink,{a:"start",s:20,wt:800})+T(624,y+45,u,{a:"end",c:"s m"});
 b+=rd(24,"Stroke volume",r0(sv),"mL",sv>=55&&sv<=100)+rd(90,"Ejection fraction",r0(ef),"%",ef>=50)+rd(156,"ESV",r0(esv),"mL",esv<70)+rd(222,"EDP",f1c(EDP(edv)),"mmHg",EDP(edv)<13)+rd(288,"Stroke work ≈ area",f1c(sw/1000),"L·mmHg",true);
 b+=T(270,400,"เส้นประเทา = loop ปกติ (EDV 120 · ESV 50) · พื้นที่ใน loop = stroke work",{c:"s m"});
 return svg(b,"0 0 640 410")}

/* ---------- 10. Wiggers diagram ---------- */
const WP={ivc:[.16,.21,"Isovolumetric contraction","valves ปิดหมด · ความดัน LV พุ่ง · ใช้ O₂ มากที่สุด · S1 (mitral+tricuspid ปิด)"],ej:[.21,.46,"Ejection","aortic valve เปิด · rapid ejection แล้ว reduced ejection · ปริมาตรลดจาก EDV เป็น ESV"],
 ivr:[.46,.53,"Isovolumetric relaxation","aortic ปิด (S2, dicrotic notch) จนถึง mitral เปิด · ปริมาตร = ESV"],rf:[.53,.64,"Rapid filling","mitral เปิด · LA เทเลือดเร็ว (y descent) · S3 ถ้ามี"],
 df:[.64,.8,"Reduced filling (diastasis)","เลือดไหลช้าลง · ยาวที่สุดและสั้นลงก่อนเมื่อ HR สูง"],as:[.04,.16,"Atrial systole","atrial kick (a wave) เติม ~20% · S4 ถ้า LV แข็ง"]};
const WK={lv:MONO([[0,3],[.05,4],[.11,8],[.145,6],[.16,8],[.21,80],[.26,114],[.30,121],[.38,114],[.46,100],[.49,60],[.53,4],[.58,1.5],[.7,3],[.8,3]]),
 ao:MONO([[0,88],[.1,83.5],[.21,80],[.26,113],[.30,120],[.38,113],[.46,100],[.472,93],[.49,99],[.6,95],[.8,88]]),
 la:MONO([[0,3],[.09,9],[.13,4],[.18,7],[.25,1.5],[.4,5],[.52,12],[.6,4],[.7,3],[.8,3]]),
 vol:MONO([[0,110],[.06,111],[.15,120],[.21,120],[.29,80],[.46,50],[.53,50],[.6,90],[.66,104],[.8,110]])};
function wigD(){const ph=ST.ph;let b="";const x0=78,w=530,X=t=>x0+t/.8*w;
 /* phase bands */
 Object.keys(WP).forEach(k=>{const [a,z]=WP[k],on=ph==="all"||ph===k;b+=`<rect x="${X(a)}" y="22" width="${X(z)-X(a)}" height="508" style="fill:${on&&ph!=="all"?tint(CV.acc,30):k==="ej"||k==="ivc"?tint(CV.lv,6):"transparent"};opacity:${on?1:.5}"/>`});
 b+=T(X(.335),16,"Ventricular systole",{c:"s"})+T(X(.65),16,"Ventricular diastole",{c:"s"});
 /* pressures */
 const Ap=AX(x0,24,w,230,[0,.8],[0,130],[],[0,40,80,120],"","Pressure (mmHg)",{yo:40});b+=Ap.g.replace('class="plot"','class="plot" style="fill:none"');
 b+=SP(FN(Ap,WK.ao,0,.8,240),CV.ao,2.6)+SP(FN(Ap,WK.lv,0,.8,240),CV.lv,3)+SP(FN(Ap,WK.la,0,.8,240),CV.la,2.4);
 b+=CT(X(.33),Ap.Y(128),"Aorta",CV.ao,{s:11})+CT(X(.255),Ap.Y(60),"LV",CV.lv,{s:11})+CT(X(.7),Ap.Y(12),"LA",CV.la,{s:11})+T(X(.48)+10,Ap.Y(91),"dicrotic notch",{a:"start",c:"s m"});
 [["a",.09],["c",.18],["v",.52]].forEach(([l,t])=>b+=T(X(t),Ap.Y(WK.la(t))-7,l,{c:"s"}));
 /* valve events */
 [[.16,"MC"],[.21,"AO"],[.46,"AC"],[.53,"MO"]].forEach(([t,l])=>{b+=SP(`M${X(t)},40 V530`,CV.ink2,1,{dash:"3 4",op:.6})+TAG(X(t),36,l,CV.ink2,{w:30})});
 /* volume */
 const Av=AX(x0,276,w,90,[0,.8],[40,130],[],[50,120],"","LV vol (mL)",{yo:40});b+=Av.g.replace('class="plot"','class="plot" style="fill:none"')+SP(FN(Av,WK.vol,0,.8,200),CV.vol,2.8)+T(X(.14),Av.Y(124),"EDV",{c:"s"})+T(X(.495),Av.Y(46)-6,"ESV",{c:"s"});
 /* ECG */
 const e0=ECGF(),e=t=>e0(t+.03),Ae=AX(x0,384,w,64,[0,.8],[-.3,1.05],[],[],"","ECG",{yo:40});b+=Ae.g.replace('class="plot"','class="plot" style="fill:none"')+SP(FN(Ae,e,0,.8,320),CV.ink,2);
 b+=T(X(.03),Ae.Y(.2)-4,"P",{c:"s"})+T(X(.145),Ae.Y(1.05)+12,"QRS",{a:"start",c:"s"})+T(X(.37),Ae.Y(.3)-4,"T",{c:"s"});
 /* sounds */
 const snd=(t,dur,amp,lab,dash)=>{let d="";for(let i=0;i<=24;i++){const tt=t+dur*i/24;d+=(i?"L":"M")+X(tt).toFixed(1)+","+(500+Math.sin(i*2.2)*amp*Math.sin(Math.PI*i/24)).toFixed(1)}return SP(d,CV.ink,1.6,{dash:dash?"2 2":""})+T(X(t+dur/2),522,lab,{c:"s"+(dash?" m":"")})};
 b+=T(x0-6,504,"Sounds",{a:"end",c:"s"})+snd(.155,.04,12,"S1")+snd(.455,.03,10,"S2")+snd(.6,.025,6,"S3",1)+snd(.115,.022,6,"S4",1);
 if(ph!=="all"){const [, ,t,s]=WP[ph];b+=RB(70,540,560,50,CV.acc,{p:12})+T(84,560,t,{a:"start",c:"bh"})+T(84,578,s,{a:"start",c:"s"})}
 else b+=T(343,566,"เลือก phase ด้านบนเพื่อดูว่าเกิดอะไรขึ้นในแต่ละช่วง",{c:"h"});
 return svg(b,"0 0 640 596")}

/* ---------- 11. JVP waveform ---------- */
const JV={n:{k:[[0,3],[.09,6.5],[.14,3.5],[.19,4.8],[.32,1],[.5,5.5],[.62,1.8],[.8,3]],l:[["a",.09],["c",.19],["x",.32],["v",.5],["y",.62]],t:"Normal",s:"a = atrial contraction · c = tricuspid โป่งเข้า RA · x = atrial relaxation · v = RA เติมเลือดขณะ TV ปิด · y = RA เทลง RV"},
 af:{k:[[0,3],[.19,3.8],[.32,1.2],[.5,5.5],[.62,2],[.8,3]],l:[["c",.19],["x",.32],["v",.5],["y",.62]],t:"Atrial fibrillation",s:"ไม่มี a wave (atria ไม่บีบเป็นจังหวะ) · ECG ไม่มี P",e:{noP:1}},
 tr:{k:[[0,4],[.09,6],[.14,5.5],[.22,9],[.42,13],[.5,13.6],[.6,3],[.8,4]],l:[["a",.09],["c–v",.42],["y",.6]],t:"Tricuspid regurgitation",s:"x descent หาย · c–v รวมเป็นคลื่นสูง (ventricularized) · y ชันลึก"},
 cp:{k:[[0,9],[.09,12],[.15,8.5],[.2,9.5],[.3,4],[.5,12],[.56,3],[.63,10],[.8,10]],l:[["a",.09],["x",.3],["v",.5],["y",.56]],t:"Constrictive pericarditis",s:"JVP สูง · y descent ลึกและเด่น (ventricle เติมเร็วช่วงแรกแล้วชนเปลือก) · Kussmaul sign"},
 tp:{k:[[0,12],[.09,15],[.15,12],[.2,13],[.32,7.5],[.5,15],[.62,14.2],[.8,12]],l:[["a",.09],["x",.32],["v",.5]],t:"Cardiac tamponade",s:"JVP สูง · x ยังมี แต่ y descent หาย (เติม ventricle ไม่ได้ช่วง diastole)"},
 can:{k:[[0,3],[.15,3.5],[.19,14],[.24,4],[.32,1.2],[.5,5.5],[.62,2],[.8,3]],l:[["cannon a",.19],["v",.5],["y",.62]],t:"Cannon a wave (AV dissociation)",s:"atria บีบชน tricuspid ที่ปิดอยู่ · พบใน complete heart block, VT",e:{pc:.17}}};
function jvpD(){const V=JV[ST.jv];let b="";const x0=78,w=530;
 const e0=ECGF(V.e||{});
 const Ae=AX(x0,24,w,70,[0,.8],[-.3,1.1],[],[],"","ECG",{yo:40});b+=Ae.g.replace('class="plot"','class="plot" style="fill:none"');
 const ef=V.e&&V.e.pc?(t=>{const g=(t,c,s,a)=>a*Math.exp(-((t-c)**2)/(2*s*s));return e0(t)-g(t,.06,.018,.12)+g(t,V.e.pc,.018,.12)}):(V.e&&V.e.noP?(t=>e0(t)+.04*Math.sin(t*190)+.03*Math.sin(t*130)):e0);
 b+=SP(FN(Ae,ef,0,.8,400),CV.ink,2);
 const A=AX(x0,120,w,250,[0,.8],[0,16],[],[0,4,8,12,16],"time (one cardiac cycle)","RA / jugular pressure (mmHg)",{yo:40});b+=A.g;
 b+=SP(FN(A,MONO(JV.n.k),0,.8,200),CV.mut,1.5,{dash:"5 4"})+SP(FN(A,MONO(V.k),0,.8,240),CV.ra,3.2);
 V.l.forEach(([l,t])=>{const f=MONO(V.k);const y=f(t),down=l==="x"||l==="y";b+=CT(A.X(t),A.Y(y)+(down?18:-9),l,CV.ra,{s:12,wt:800})});
 [[.16,"S1"],[.46,"S2"]].forEach(([t,l])=>b+=SP(`M${A.X(t)},120 V370`,CV.ink2,1,{dash:"3 4",op:.6})+T(A.X(t),116,l,{c:"s m"}));
 b+=RB(70,404,560,74,CV.ra,{p:11})+T(84,426,V.t,{a:"start",c:"bh"})+wrapT(84,446,V.s,88,"s",15);
 return svg(b,"0 0 640 488")}

/* ---------- 12. PV loops & pressure tracings in valvular disease ---------- */
const VD={as:{t:"Aortic stenosis",lp:{edv:125,esv:68,pao:96,pes:150,ppk:185,edp:v=>.42*(Math.exp(.031*v)-1)},tr:"as",s:"LV pressure ≫ aortic · ESV ↑ · SV ↓ · LVH → compliance ↓ (EDP สูงที่ EDV เดิม)"},
 ar:{t:"Aortic regurgitation",tr:"ar",s:"EDV ↑↑ · SV ↑ (แต่ส่วนหนึ่งไหลกลับ) · ไม่มี isovolumetric phase จริง · PP กว้าง ไม่มี dicrotic notch"},
 ms:{t:"Mitral stenosis",lp:{edv:88,esv:42,pao:76,pes:92,ppk:108},tr:"ms",s:"LA ≫ LV ช่วง diastole · EDV ↓ · ESV ↓ · SV ↓ · LV ปกติ ปัญหาอยู่ที่การเติม"},
 mr:{t:"Mitral regurgitation",tr:"mr",s:"ไม่มี isovolumetric phase จริง · ESV ↓ (ระบายลง LA) · EDV ↑ · SV รวม ↑ · LA มี v wave สูง"}};
function vdD(){const D=VD[ST.vd];let b="";const A=AX(64,30,270,260,[0,240],[0,220],[0,100,200],[0,100,200],"LV volume (mL)","LV pressure (mmHg)");b+=A.g;
 b+=`<path d="${pvPath(A,{edv:120,esv:50,pao:80,pes:100,ppk:120})}" style="fill:none;stroke:${CV.mut};stroke-width:1.6;stroke-dasharray:5 4"/>`;
 let d;if(D.lp)d=pvPath(A,D.lp);
 else if(ST.vd==="ar")d=`M${A.X(85)},${A.Y(12)} C${A.X(130)},${A.Y(6)} ${A.X(180)},${A.Y(12)} ${A.X(215)},${A.Y(26)} L${A.X(208)},${A.Y(52)} C${A.X(195)},${A.Y(160)} ${A.X(110)},${A.Y(160)} ${A.X(78)},${A.Y(105)} C${A.X(76)},${A.Y(60)} ${A.X(80)},${A.Y(30)} ${A.X(85)},${A.Y(12)}Z`;
 else d=`M${A.X(40)},${A.Y(6)} C${A.X(90)},${A.Y(4)} ${A.X(140)},${A.Y(10)} ${A.X(170)},${A.Y(18)} C${A.X(158)},${A.Y(70)} ${A.X(140)},${A.Y(110)} ${A.X(110)},${A.Y(122)} C${A.X(80)},${A.Y(128)} ${A.X(55)},${A.Y(112)} ${A.X(42)},${A.Y(90)} C${A.X(40)},${A.Y(50)} ${A.X(40)},${A.Y(25)} ${A.X(40)},${A.Y(6)}Z`;
 b+=`<path d="${d}" style="fill:${tint(CV.lv,22)};stroke:${CV.lv};stroke-width:3;stroke-linejoin:round"/>`+T(199,26,D.t,{c:"bh"});
 /* pressure tracing */
 const B=AX(400,30,226,260,[0,1],[0,200],[],[0,50,100,150,200],"time (RR interval)","mmHg",{yo:30});b+=B.g;
 const tr={as:[["LV",CV.lv,[[0,6],[.1,8],[.16,60],[.32,190],[.48,120],[.56,6],[1,7]]],["Aorta",CV.ao,[[0,84],[.16,80],[.26,96],[.4,118],[.5,112],[.56,104],[1,84]]]],
  ar:[["Aorta",CV.ao,[[0,60],[.14,52],[.2,70],[.3,160],[.45,130],[.6,90],[.8,68],[1,60]]],["LV",CV.lv,[[0,24],[.1,26],[.14,30],[.2,70],[.3,160],[.45,128],[.52,40],[.58,10],[.8,20],[1,24]]]],
  ms:[["LA",CV.la,[[0,24],[.1,30],[.16,26],[.4,22],[.56,30],[.62,26],[.8,25],[1,24]]],["LV",CV.lv,[[0,8],[.1,10],[.16,12],[.2,80],[.32,118],[.5,98],[.56,8],[.62,4],[.8,6],[1,8]]]],
  mr:[["LA",CV.la,[[0,10],[.1,12],[.16,12],[.24,22],[.46,56],[.55,58],[.62,20],[.8,12],[1,10]]],["LV",CV.lv,[[0,8],[.1,10],[.16,12],[.2,78],[.32,120],[.5,96],[.56,8],[.62,4],[.8,6],[1,8]]]]}[D.tr];
 tr.forEach(([l,c,k])=>{b+=SP(FN(B,MONO(k),0,1,160),c,2.6);const lb=k[Math.floor(k.length/2)];b+=CT(B.X(lb[0])+(l==="LV"?-6:8),B.Y(MONO(k)(lb[0]))-8,l,c,{s:11,a:l==="LV"?"end":"start"})});
 if(ST.vd==="mr")b+=CT(B.X(.5),B.Y(70),"tall v",CV.la,{s:11});if(ST.vd==="as")b+=CT(B.X(.33),B.Y(150),"gradient",CV.lv,{s:11});if(ST.vd==="ms")b+=CT(B.X(.8),B.Y(40),"LA > LV",CV.la,{s:11});if(ST.vd==="ar")b+=CT(B.X(.62),B.Y(100),"wide PP",CV.ao,{s:11});
 b+=RB(16,330,608,46,CV.lv,{p:10})+T(320,358,D.s,{c:"s"});
 return svg(b,"0 0 640 386")}

/* ---------- 13. splitting of S2 ---------- */
const SPL={phys:{t:"Physiologic splitting",E:[300,306],I:[296,340],s:"หายใจเข้า → venous return เข้าหัวใจขวา ↑ → RV ejection ยาวขึ้น → P2 ช้าลง (A2–P2 ห่าง)"},
 wide:{t:"Wide splitting",E:[300,334],I:[300,366],s:"RV ปล่อยเลือดช้าอยู่แล้ว (pulmonic stenosis, RBBB) → แยกตลอด และกว้างขึ้นตอนหายใจเข้า"},
 fixed:{t:"Fixed splitting",E:[300,348],I:[300,348],s:"ASD: left→right shunt ทำให้ RV ปริมาตรสูงตลอด → แยกเท่าเดิมทั้งเข้าและออก"},
 par:{t:"Paradoxical splitting",E:[346,300],I:[333,327],s:"A2 ช้ากว่า P2 (aortic stenosis, LBBB) → แยกตอนหายใจออก และแคบลง/หายตอนหายใจเข้า"}};
function splD(){const S=SPL[ST.sp];let b="";
 const row=(y,lab,[a2,p2])=>{let g=`<rect x="20" y="${y-34}" width="600" height="80" rx="16" style="fill:${tint(lab==="Inspiration"?CV.bl:CV.mut,10)};stroke:var(--sb-line)"/>`+T(36,y-12,lab,{a:"start",c:"bh"});
  g+=SP(`M110,${y+10} H600`,CV.line,1.5);
  const bar=(x,l,c,h)=>`<rect x="${x-4}" y="${y+10-h}" width="8" height="${h}" rx="3" style="fill:${c}"/>`+CT(x,y+30,l,c,{s:12,wt:800});
  const gap=Math.abs(p2-a2);g+=bar(140,"S1",CV.ink2,34);
  if(gap<12)g+=`<rect x="${a2-4}" y="${y-20}" width="8" height="30" rx="3" style="fill:${CV.lv}"/><rect x="${p2-4}" y="${y-12}" width="8" height="22" rx="3" style="fill:${CV.ra};opacity:.85"/>`+CT((a2+p2)/2,y+30,"A2P2",CV.ink2,{s:12,wt:800})+T((a2+p2)/2,y-28,"ได้ยินเสียงเดียว",{c:"s m"});
  else g+=bar(a2,"A2",CV.lv,30)+bar(p2,"P2",CV.ra,22)+SP(`M${Math.min(a2,p2)},${y-30} H${Math.max(a2,p2)}`,CV.acc,2)+T((a2+p2)/2,y-36,ST.sp==="fixed"?"แยกเท่าเดิม":gap>55?"แยกกว้าง":"แยก",{c:"s"});
  return g};
 b+=T(320,24,S.t,{c:"bb"})+row(90,"Expiration",S.E)+row(196,"Inspiration",S.I);
 b+=RB(20,262,600,52,CV.acc,{p:11})+T(320,292,S.s,{c:"s"});
 return svg(b,"0 0 640 324")}

/* ---------- 14. auscultation areas + maneuvers ---------- */
const MV={insp:{t:"Inspiration",pre:"RV ↑ · LV ↓",aft:"–",up:["Right-sided murmurs (TR, PS)"],dn:["Left-sided murmurs (เด่นตอนหายใจออก)"]},
 vals:{t:"Valsalva (strain) / standing",pre:"↓",aft:"–",up:["HCM (LV เล็กลง)","MVP: click มาเร็วขึ้น"],dn:["Murmur ส่วนใหญ่ (AS, MR, VSD, AR)"]},
 leg:{t:"Passive leg raise",pre:"↑",aft:"–",up:["Murmur ส่วนใหญ่"],dn:["HCM","MVP: click มาช้าลง"]},
 squat:{t:"Squatting",pre:"↑",aft:"↑",up:["Murmur ส่วนใหญ่ (AS, MR, AR, VSD)"],dn:["HCM","MVP: click ช้าลง"]},
 grip:{t:"Hand grip",pre:"–",aft:"↑",up:["MR, AR, VSD (ไหลย้อนมากขึ้น)"],dn:["AS (gradient ↓)","HCM (LV โตขึ้น)"]}};
function auscD(){const M=MV[ST.mv];let b="";
 /* chest */
 b+=FRAME(10,10,300,410);b+=`<path d="${sm([[60,40],[160,28],[260,40],[288,140],[280,300],[250,400],[70,400],[40,300],[32,140]])}" style="fill:${tint(CV.or,10)};stroke:var(--sb-line);stroke-width:1.4"/>`;
 for(let i=0;i<6;i++){const y=88+i*44;b+=SP(`M60,${y-6} Q110,${y+14} 148,${y}`,CV.line,4,{op:.8})+SP(`M172,${y} Q210,${y+14} 262,${y-6}`,CV.line,4,{op:.8})+T(52,y+4,i+1,{a:"end",c:"s m"})}
 b+=`<rect x="148" y="56" width="24" height="270" rx="10" style="fill:${tint(CV.ink2,14)};stroke:var(--sb-line)"/>`+T(160,346,"sternum",{c:"s m"});
 b+=`<path d="${sm([[150,150],[205,140],[248,200],[236,272],[196,300],[150,282],[124,230],[128,176]])}" style="fill:${tint(CV.lv,14)};stroke:color-mix(in srgb,${CV.lv} 40%,transparent);stroke-dasharray:4 3"/>`;
 const area=(x,y,l,n,c)=>DOT(x,y,15,c,{sw:2})+`<text x="${x}" y="${y+5}" text-anchor="middle" style="font:800 13px var(--sb-font);fill:var(--sb-plate)">${l}</text>`+T(x,y+30,n,{c:"s"});
 b+=area(126,110,"A",`R 2nd ICS`,CV.lv)+area(196,110,"P","L 2nd ICS",CV.ra)+area(190,244,"T","L 4–5th ICS",CV.vi)+area(244,284,"M","apex",CV.or)+DOT(190,160,6,CV.acc,{sw:1.5})+T(204,164,"LSB (Erb)",{a:"start",c:"s m"});
 b+=T(160,394,"“All Physicians Take Money”",{c:"s m"});
 /* maneuver panel */
 b+=FRAME(320,10,310,410)+T(336,38,M.t,{a:"start",c:"bb"});
 const g=(x,l,v,c)=>RB(x,54,134,52,c,{p:12})+T(x+12,74,l,{a:"start",c:"s m"})+CT(x+12,96,v,CV.ink,{a:"start",s:15,wt:800});
 b+=g(336,"Preload (LV volume)",M.pre,CV.bl)+g(482,"Afterload",M.aft,CV.or);
 const ltag=(y,t,c)=>{const w=t.length*6.4+22;return `<rect x="336" y="${y-12}" width="${w}" height="24" rx="12" style="fill:${tint(c,18)};stroke:color-mix(in srgb,${c} 55%,transparent)"/>`+T(347,y+4,t,{a:"start",c:"s"})};
 b+=T(336,140,"เสียงดังขึ้น",{a:"start",c:"bh"});M.up.forEach((t,i)=>b+=ltag(164+i*30,"↑ "+t,CV.lv));
 b+=T(336,250,"เสียงเบาลง",{a:"start",c:"bh"});M.dn.forEach((t,i)=>b+=ltag(274+i*30,"↓ "+t,CV.ra));
 b+=T(336,372,"HCM และ MVP ทำตรงข้ามกับ murmur อื่น",{a:"start",c:"s m"})+T(336,392,"เพราะดังขึ้นเมื่อ LV เล็กลง",{a:"start",c:"s m"});
 return svg(b,"0 0 640 430")}

/* ---------- 15. heart murmurs (phonocardiograms) ---------- */
const MU=[["as","Aortic stenosis","crescendo–decrescendo · ejection click · → carotids","R 2nd ICS"],["mr","Mitral / tricuspid regurgitation","holosystolic, blowing · MR → axilla","apex / LLSB"],["mvp","Mitral valve prolapse","mid-systolic click + late crescendo","apex"],["vsd","Ventricular septal defect","holosystolic, harsh","LLSB (tricuspid area)"],
 ["ar","Aortic regurgitation","early diastolic decrescendo, high-pitched","LSB / base"],["ms","Mitral stenosis","opening snap → mid-late diastolic rumble","apex"],["pda","Patent ductus arteriosus","continuous “machine-like”, peak at S2","L infraclavicular"]];
function muD(){let b="";const s1=190,s2=392,s1b=600;
 MU.forEach(([k,n,d,loc],i)=>{const y=34+i*60,on=k===ST.mu,c=on?CV.lv:CV.mut;
  b+=`<rect x="10" y="${y-24}" width="620" height="54" rx="12" style="fill:${on?tint(CV.lv,10):"transparent"};stroke:${on?`color-mix(in srgb,${CV.lv} 45%,transparent)`:"var(--sb-line)"}"/>`;
  b+=T(22,y-4,n,{a:"start",c:on?"bh":"s"})+T(22,y+14,loc,{a:"start",c:"s m"});
  b+=SP(`M${s1-14},${y+16} H${s1b+14}`,CV.line,1.2);
  const tick=(x,l,h=26)=>`<rect x="${x-2.5}" y="${y+16-h}" width="5" height="${h}" rx="2" style="fill:${on?CV.ink2:CV.mut}"/>`+(i===0||on?T(x,y-16,l,{c:"s m"}):"");
  b+=tick(s1,"S1")+tick(s2,"S2",22)+tick(s1b,"S1");
  const env=(a,z,f)=>{let g="";for(let x=a;x<=z;x+=4){const h=f((x-a)/(z-a))*20;g+=`<path d="M${x},${y+16-h} V${y+16}" style="stroke:${c};stroke-width:2;stroke-linecap:round;opacity:${on?.9:.55}"/>`}return g};
  if(k==="as")b+=tick(206,"",12)+env(214,382,t=>Math.sin(Math.PI*t));
  if(k==="mr")b+=env(198,386,t=>.75);
  if(k==="mvp")b+=tick(300,on?"MC":"",14)+env(306,386,t=>.2+.8*t);
  if(k==="vsd")b+=env(198,386,t=>.62+.25*Math.abs(Math.sin(t*31)));
  if(k==="ar")b+=env(398,520,t=>1-t);
  if(k==="ms")b+=tick(428,on?"OS":"",14)+env(444,530,t=>.8-.5*t)+env(560,594,t=>.3+.6*t);
  if(k==="pda")b+=env(198,592,t=>t<.5?.2+1.6*t:1-1.4*(t-.5))});
 return svg(b,"0 0 640 440")}

/* ================= sections (First Aid order) ================= */
SEC.push({id:"cov",k:"a",t:"Cardiac output variables & contractility",mm:"SV · contractility",leg:[],tools:[["ino",[["sym","β₁ stimulation"],["dig","Digoxin"],["neg","↓ Contractility"]]]],draw:covD,
notes:()=>`<h3>Stroke volume: “SV CAP”</h3><ul>
<li>SV ขึ้นกับ <b>Contractility, Afterload, Preload</b> · SV ↑ เมื่อ contractility ↑ (กังวล, ออกกำลัง), preload ↑ (ตั้งครรภ์ระยะแรก) หรือ afterload ↓ ${S.fa}</li>
<li><b>Stroke work</b> = งานที่ ventricle ทำเพื่อบีบ SV ออกไป ∝ SV × MAP · หัวใจล้มเหลวมี SV ต่ำ (systolic และ/หรือ diastolic dysfunction) ${S.fa}</li>
<li>Preload ประเมินจาก <b>EDV</b> ซึ่งขึ้นกับ venous tone และปริมาณเลือด · Guyton นิยาม preload เป็น end-diastolic pressure ส่วน afterload เป็นความดันใน aorta ที่ ventricle ต้องบีบสู้ ${S.fa} ${S.g}</li>
<li>Afterload ประเมินจาก <b>MAP</b> · LV ชดเชย afterload สูงเรื้อรังด้วยการหนาตัว (LVH) เพื่อลด wall stress ${S.fa}</li></ul>
<h3>Contractility ขึ้นกับ Ca²⁺ ในเซลล์</h3><ul>
<li>β₁ → Gs → cAMP → <b>PKA</b> ฟอสโฟรีเลตสองเป้า: L-type Ca²⁺ channel (Ca²⁺ เข้ามากขึ้น → Ca²⁺-induced Ca²⁺ release ผ่าน RyR2) และ <b>phospholamban</b> (ปลดการยับยั้ง SERCA2a → SR เก็บ Ca²⁺ มากขึ้น) ${S.fa} ${S.b}</li>
<li>Phospholamban ที่ถูก phosphorylate ทำให้เก็บ Ca²⁺ กลับเร็ว → คลายตัวเร็ว (lusitropy) และมี Ca²⁺ ปล่อยในรอบถัดไปมากขึ้น ${S.b}</li>
<li><b>Digoxin</b> ยับยั้ง Na⁺/K⁺-ATPase → Na⁺ ในเซลล์ ↑ → Na⁺/Ca²⁺ exchanger ขับ Ca²⁺ ได้น้อย → Ca²⁺ ↑ ${S.fa}</li>
<li>Contractility ↓: β₁-blockade, systolic HF, acidosis, hypoxia/hypercapnia, non-dihydropyridine CCB ${S.fa}</li>
<li>Sympathetic เต็มที่เพิ่ม CO ได้ราว 2 เท่าหรือมากกว่า · vagal แรงลด HR และลดแรงบีบ (ventricle ได้ vagal น้อยกว่า atria) ${S.g}</li></ul>
<div class="pearl">แตะปุ่มด้านบนเพื่อดูว่าแต่ละกลไกไปออกฤทธิ์ที่ส่วนไหนของเซลล์</div>`});
SEC.push({id:"o2d",k:"a",t:"Myocardial O₂ demand & Laplace's law",mm:"O₂ demand · Laplace",leg:[],
tools:[["lp",[["n","Normal"],["htn","Hypertension"],["lvh","Concentric LVH"],["dcm","Dilated LV"]]]],ctrl:()=>SL("P","P",60,240,5,"mmHg")+SL("r","r",2,5.5,.1,"cm")+SL("h","h",.5,2.2,.1,"cm"),wire:()=>WIRE(),draw:o2D,
notes:()=>`<h3>Myocardial O₂ demand ↑ เมื่อ</h3><ul>
<li><b>Contractility ↑</b> · <b>afterload ↑</b> (∝ arterial pressure) · <b>heart rate ↑</b> · <b>ขนาด ventricle ↑</b> (wall tension ↑) ${S.fa}</li>
<li>หัวใจได้พลังงานส่วนใหญ่จากการ oxidize fatty acids (~70–90%) จึงใช้ O₂ เป็นตัวชี้วัดงานได้ดี · การใช้ O₂ แปรตามพื้นที่ PV loop รวมกับ potential energy ${S.g}</li>
<li>Coronary sinus มีเลือดที่ O₂ ต่ำที่สุดในร่างกาย เพราะหัวใจดึง O₂ ไปใช้สูงแม้ขณะพัก ${S.fa}</li></ul>
<h3>Laplace's law</h3><ul>
<li><b>Wall tension = P × r</b> · <b>wall stress = P × r / 2h</b> (h = ความหนาผนัง) ${S.fa}</li>
<li>Ventricle ที่ขยาย (r ↑) ต้องสร้าง tension มากขึ้นเพื่อได้ความดันเท่าเดิม → ใช้ O₂ มาก ทำงานเสียเปรียบ ${S.b}</li>
<li>Pressure overload → <b>concentric hypertrophy</b> (h ↑ ลด stress) · volume overload → eccentric hypertrophy (r ↑) ${S.x}</li></ul>
<div class="pearl">ลองกดปุ่ม <b>Dilated LV</b> แล้วเทียบกับ <b>Concentric LVH</b> · แถบ stress บอกว่าผนังแบกแรงมากแค่ไหน</div>`});
SEC.push({id:"coeq",k:"a",t:"Cardiac output equations",mm:"SV · EF · CO · MAP",leg:[],ctrl:()=>SL("edv","EDV",60,220,5,"mL")+SL("esv","ESV",10,160,5,"mL")+SL("hr","HR",40,180,5,"/min"),wire:()=>WIRE(),draw:coeqD,
notes:()=>`<h3>สมการที่ต้องคล่อง</h3><table><tr><th>ค่า</th><th>สมการ</th></tr>
<tr><td>Stroke volume</td><td>SV = EDV − ESV</td></tr><tr><td>Ejection fraction</td><td>EF = SV / EDV (ปกติ 50–70%)</td></tr><tr><td>Cardiac output</td><td>CO = SV × HR</td></tr>
<tr><td>Fick</td><td>CO = VO₂ / (CaO₂ − CvO₂)</td></tr><tr><td>Pulse pressure</td><td>PP = SBP − DBP</td></tr><tr><td>MAP</td><td>MAP = CO × TPR ≈ ⅔DBP + ⅓SBP</td></tr></table>
<ul><li>EF เป็นดัชนีของ contractility: ลดใน systolic HF แต่มักปกติใน diastolic HF ${S.fa}</li>
<li>ปกติ EDV ~110–120 mL, SV ~70 mL, ESV ~40–50 mL, EF ~60% · หัวใจแรงบีบดี ESV ลดได้ถึง 10–20 mL ${S.g}</li>
<li>ออกกำลังช่วงแรก CO ↑ จากทั้ง HR และ SV · ช่วงหลัง SV คงที่ CO ↑ จาก HR อย่างเดียว ${S.fa}</li>
<li>HR สูงมาก (เช่น VT) → diastole สั้น → เติมเลือดไม่ทัน → SV ↓ → CO ↓ ${S.fa}</li>
<li><b>PP</b> แปรตรงกับ SV และแปรผกผันกับ arterial compliance · PP กว้าง: AR, หลอดเลือดแข็ง (isolated systolic HTN ผู้สูงอายุ), OSA, high-output (anemia, hyperthyroid), ออกกำลังชั่วคราว · PP แคบ: AS, cardiogenic shock, tamponade, HF ระยะท้าย ${S.fa}</li>
<li>แบ่ง HF ตาม EF: ≤ 40% = HFrEF · 41–49% = mildly reduced · ≥ 50% = HFpEF ${S.h}</li></ul>`});
SEC.push({id:"starling",k:"a",t:"Frank–Starling curves",mm:"Starling curves",leg:[],tools:[["sv",[["rest","Normal"],["ex","Exercise"],["hf","HF"],["hfi","HF + inotrope"],["bb","β-blocker"]]]],ctrl:()=>SL("sedv","EDV",40,230,5,"mL"),wire:()=>WIRE(),draw:starD,
notes:()=>`<ul><li><b>Frank–Starling</b>: แรงบีบแปรตามความยาวของเส้นใยตอนปลาย diastole (preload) · ventricle จึงสูบเลือดออกเท่ากับที่ไหลเข้ามาเองโดยอัตโนมัติ ${S.fa} ${S.g}</li>
<li>กลไก: sarcomere ยืดเข้าใกล้ความยาวที่ actin–myosin ซ้อนกันพอดี และ troponin ไวต่อ Ca²⁺ มากขึ้นเมื่อถูกยืด (length-dependent activation) ${S.b}</li>
<li>เส้นขยับขึ้น (positive inotropy): catecholamines, dobutamine, milrinone, digoxin ${S.fa}</li>
<li>เส้นขยับลง: เสียกล้ามเนื้อ (MI), β-blockers (ระยะแรก), non-DHP CCB, HF ${S.fa}</li>
<li>Right atrial pressure ที่เพิ่มขึ้นเล็กน้อยทำให้ CO เพิ่มมาก (ventricular function curve ของ Sarnoff) ${S.g}</li></ul>
<div class="pearl">คนไข้ HF ที่ได้ inotrope: จุดทำงานขยับขึ้นไปบนเส้นใหม่ได้ SV มากขึ้นที่ EDV เท่าเดิม</div>`});
SEC.push({id:"flow",k:"b",t:"Resistance, pressure & flow",mm:"Poiseuille · R in series/parallel",leg:[],ctrl:()=>SL("rad","Radius",50,150,5,"%")+SL("hct","Hct",20,70,1,"%"),wire:()=>WIRE(),draw:flowD,
notes:()=>`<h3>สมการ</h3><ul><li>Q = v × A · ΔP = Q × R (เหมือน Ohm's law V = IR) ${S.fa}</li>
<li><b>R = 8ηL / πr⁴</b> → R ∝ 1/r⁴ · หลอดเลือดขยายรัศมีเพียง 2 เท่า flow เพิ่ม 16 เท่า ${S.fa} ${S.g}</li>
<li>Series: R_T = R₁ + R₂ + … · Parallel: 1/R_T = 1/R₁ + 1/R₂ + … (รวมแล้วน้อยกว่าตัวที่น้อยที่สุด) ${S.fa}</li>
<li><b>Arterioles</b> สร้าง TPR ส่วนใหญ่ · <b>veins</b> เก็บเลือดส่วนใหญ่ ${S.fa}</li></ul>
<h3>Viscosity</h3><ul><li>Viscosity ขึ้นกับ hematocrit เป็นหลัก · เลือดปกติหนืดราว 3 เท่าของน้ำ · polycythemia หนืดได้ถึง ~10 เท่า ${S.g}</li>
<li>Viscosity ↑: hyperproteinemia (multiple myeloma), polycythemia · ↓: anemia ${S.fa}</li>
<li>Poiseuille ใช้กับ laminar flow · ถ้า Reynolds number สูง (เร็ว, หลอดใหญ่, viscosity ต่ำ เช่น anemia) → turbulence → bruit/murmur ${S.b}</li></ul>`});
SEC.push({id:"vtree",k:"b",t:"Pressure, area & velocity along the vascular tree",mm:"Vascular tree profile",leg:[],draw:treeD,
notes:()=>`<ul><li>Capillaries มี <b>พื้นที่หน้าตัดรวมมากที่สุด</b> (~2500 cm² เทียบ aorta ~2.5 cm²) จึง <b>ไหลช้าที่สุด</b> (~0.3 mm/s เทียบ ~33 cm/s ใน aorta) เหมาะกับการแลกเปลี่ยน ${S.fa} ${S.g}</li>
<li>ความดันเฉลี่ยลดลงชันที่สุดที่ <b>arterioles</b> = จุดที่ควบคุม TPR ${S.fa} ${S.g}</li>
<li>Capillary pressure ~35 mmHg ด้าน arteriole → ~10 mmHg ด้าน venule (functional เฉลี่ย ~17) ${S.g}</li>
<li>ปริมาณเลือด: ~84% อยู่ใน systemic (veins 64%, arteries 13%, arterioles + capillaries 7%) · หัวใจ 7% · ปอด 9% ${S.g}</li>
<li>Pulmonary circulation ความดันต่ำ: PA ~25/8 (mean ~16) · pulmonary capillary ~7 mmHg ${S.g}</li></ul>`});
SEC.push({id:"vfc",k:"b",t:"Cardiac & vascular function curves",mm:"CO–VR curves",leg:[],tools:[["vf",[["n","Normal"],["ino+","Inotropy ↑"],["ino-","Inotropy ↓"],["vol+","Volume ↑"],["vol-","Volume ↓"],["tpr+","TPR ↑"],["tpr-","TPR ↓"]]]],draw:vfcD,
notes:()=>`<h3>อ่านกราฟ</h3><ul>
<li>จุดตัดของ cardiac function curve กับ venous return curve = <b>operating point</b> (CO = VR เพราะเป็นระบบปิด) ${S.fa}</li>
<li>Venous return = (MSFP − RAP) / resistance to venous return · <b>MSFP</b> ปกติ ~7 mmHg = จุดที่ VR เป็นศูนย์ ${S.g}</li>
<li>RAP ต่ำกว่า 0 มากๆ VR ไม่เพิ่มอีก (เส้นแบน) เพราะหลอดเลือดดำในทรวงอกแฟบ ${S.g}</li></ul>
<h3>สามแบบที่ต้องรู้</h3><table><tr><th>เปลี่ยน</th><th>ผล</th><th>ตัวอย่าง</th></tr>
<tr><td>Inotropy</td><td>cardiac curve ขึ้น/ลง → CO และ RAP เปลี่ยน</td><td>⊕ catecholamines, dobutamine, digoxin, exercise · ⊖ HFrEF, sympathetic ↓</td></tr>
<tr><td>Volume / venous tone</td><td>VR curve เลื่อนขนาน (MSFP เปลี่ยน)</td><td>⊕ ให้น้ำเกลือ, sympathetic · ⊖ เลือดออก, spinal anesthesia</td></tr>
<tr><td>TPR</td><td>VR curve หมุนรอบ MSFP + cardiac curve เปลี่ยนตาม afterload → CO เปลี่ยน, RAP ไม่แน่นอน</td><td>⊕ vasopressors · ⊖ exercise, AV shunt</td></tr></table>
<ul><li>หลายอย่างเกิดพร้อมกัน: exercise = inotropy ↑ + TPR ↓ · HF = inotropy ↓ แต่ไตเก็บน้ำเพิ่ม preload เพื่อรักษา CO ${S.fa}</li></ul>`});
SEC.push({id:"compl",k:"b",t:"Compliance & the arterial pulse",mm:"Compliance · pulse",leg:[],tools:[["pul",[["n","Normal"],["old","Stiff aorta"],["as","AS"],["ar","AR"]]]],draw:complD,
notes:()=>`<ul><li><b>Compliance</b> = ΔV / ΔP · vein มี compliance ราว 24 เท่าของ artery จึงเป็นแหล่งเก็บเลือด และ sympathetic venoconstriction ดันเลือดกลับหัวใจได้มาก ${S.g}</li>
<li>Pulse pressure ขึ้นกับ SV และ compliance ของ arterial tree · aorta แข็งในผู้สูงอายุ → systolic สูง PP กว้าง ${S.g}</li>
<li>Elastic recoil ของ aorta (Windkessel) เปลี่ยนการบีบเป็นจังหวะให้เลือดไหลต่อเนื่องช่วง diastole ${S.b}</li>
<li>AS: pulse เล็กและขึ้นช้า (parvus et tardus) · AR: PP กว้าง diastolic ต่ำ · bisferiens pulse พบใน AR รุนแรงหรือ HOCM ${S.g} ${S.h}</li>
<li>Pulsus paradoxus = systolic ลด > 10 mmHg ตอนหายใจเข้า (tamponade) · pulsus alternans = แรงชีพจรสลับ beat ต่อ beat ใน LV systolic dysfunction รุนแรง ${S.h}</li></ul>`});
SEC.push({id:"pvloop",k:"c",t:"Pressure–volume loop",mm:"PV loop (interactive)",leg:[],ctrl:()=>SL("pre","Preload · EDV",70,190,5,"mL")+SL("aft","Afterload · MAP",60,150,5,"mmHg")+SL("con","Contractility · slope",1,3.6,.1,"mmHg/mL"),wire:()=>WIRE(),draw:pvD,
notes:()=>`<h3>4 phases ของ LV</h3><ul>
<li>① <b>Filling</b>: mitral เปิด → ปริมาตรเพิ่มจาก ESV ถึง EDV ตาม EDPVR ${S.g}</li>
<li>② <b>Isovolumetric contraction</b>: mitral ปิดถึง aortic เปิด · ช่วงที่ใช้ O₂ มากที่สุด ${S.fa}</li>
<li>③ <b>Ejection</b>: aortic เปิดถึงปิด · ④ <b>Isovolumetric relaxation</b>: aortic ปิดถึง mitral เปิด ${S.fa}</li>
<li>ความกว้าง loop = SV · พื้นที่ใน loop = external (stroke) work ${S.g}</li></ul>
<h3>เลื่อน slider แล้วสังเกต</h3><table>
<tr><td>Preload ↑</td><td>loop ขยายไปขวา · ESV เท่าเดิม → SV ↑</td></tr>
<tr><td>Afterload ↑</td><td>loop สูงและแคบลง · ESV ↑ → SV ↓, EF ↓</td></tr>
<tr><td>Contractility ↑</td><td>ESPVR ชันขึ้น · ESV ↓ → SV ↑, EF ↑</td></tr></table>
<ul><li><b>ESPVR</b> (end-systolic pressure–volume relation) เป็นดัชนี contractility ที่ไม่ขึ้นกับ load · มุมบนซ้ายของ loop ทุกวงที่ contractility เท่ากันจะอยู่บนเส้นนี้ ${S.b}</li>
<li>EDPVR บอก compliance: ventricle แข็ง (LVH, restrictive) → เส้นชัน → EDP สูงที่ EDV เท่าเดิม ${S.b}</li></ul>`});
SEC.push({id:"wiggers",k:"c",t:"Cardiac cycle (Wiggers diagram) & heart sounds",mm:"Wiggers · S1–S4",leg:[],tools:[["ph",[["all","ทั้งรอบ"],["as","Atrial systole"],["ivc","IVC"],["ej","Ejection"],["ivr","IVR"],["rf","Rapid filling"],["df","Reduced filling"]]]],draw:wigD,
notes:()=>`<h3>ลำดับเหตุการณ์</h3><ul>
<li>QRS → ventricle บีบ → <b>mitral ปิด (S1)</b> → IVC → aortic เปิดเมื่อ LV สูงกว่า aorta (~80 mmHg) ${S.g}</li>
<li>Ejection: ~70% ของ SV ออกในหนึ่งในสามแรก (rapid) ที่เหลือใน reduced ejection ${S.g}</li>
<li>T wave → relaxation → <b>aortic ปิด (S2)</b> + dicrotic notch → IVR → mitral เปิด → rapid filling ${S.fa} ${S.g}</li>
<li>Atrial contraction เติม ventricle ราว 20% (atrial kick) · สำคัญมากขึ้นเมื่อ ventricle แข็ง ${S.g}</li></ul>
<h3>Heart sounds</h3><table>
<tr><td>S1</td><td>mitral + tricuspid ปิด · ดังสุดที่ mitral area</td></tr>
<tr><td>S2</td><td>aortic + pulmonic ปิด · ดังสุดที่ left upper sternal border</td></tr>
<tr><td>S3</td><td>ต้น diastole ช่วง rapid filling · ฟังที่ apex นอนตะแคงซ้าย · filling pressure สูง (MR, AR, HF, thyrotoxicosis), ventricle ขยาย · ปกติได้ในเด็ก คนหนุ่มสาว นักกีฬา ครรภ์</td></tr>
<tr><td>S4</td><td>ปลาย diastole (atrial kick) เลือดกระแทก LV ที่แข็ง (hypertrophy) · ผิดปกติถ้าคลำได้ · พบบ่อยในผู้สูงอายุ · ไม่มีใน AF</td></tr></table>
<p>${S.fa}</p><ul><li>HR สูงทำให้ diastole สั้นลงก่อน systole โดยเฉพาะช่วง diastasis ${S.g}</li></ul>`});
SEC.push({id:"jvp",k:"c",t:"Jugular venous pulse",mm:"JVP: a c x v y",leg:[],tools:[["jv",[["n","Normal"],["af","AF"],["tr","TR"],["cp","Constriction"],["tp","Tamponade"],["can","Cannon a"]]]],draw:jvpD,
notes:()=>`<h3>คลื่นปกติ</h3><table>
<tr><td>a</td><td>atrial contraction · <b>cannon a</b> ใน AV dissociation · ใหญ่เมื่อ RV end-diastolic pressure สูง · ไม่มีใน AF</td></tr>
<tr><td>c</td><td>RV บีบ → tricuspid ที่ปิดโป่งเข้า RA</td></tr>
<tr><td>x</td><td>atrial relaxation + tricuspid ถูกดึงลงช่วง ejection · ลด/หายใน TR และ right HF</td></tr>
<tr><td>v</td><td>RA เติมเลือดขณะ tricuspid ปิด</td></tr>
<tr><td>y</td><td>RA เทเลือดลง RV · เด่นใน constrictive pericarditis · หายใน tamponade</td></tr></table>
<p>${S.fa}</p>
<h3>ข้างเตียง</h3><ul>
<li>JVP เป็นการวัดข้างเตียงที่สำคัญที่สุดในการประเมิน volume · ใช้ internal jugular · สูงกว่า sternal angle > 4.5 cm ที่ 30° ถือว่าผิดปกติ ${S.h}</li>
<li>Cannon a ในคนที่มี wide-complex tachycardia ชี้ว่าเป็น VT ${S.h}</li>
<li><b>Kussmaul sign</b>: JVP ขึ้นหรือไม่ลดตอนหายใจเข้า · classic ใน constrictive pericarditis (พบใน restrictive CMP, RV infarct ได้) ${S.h}</li>
<li>Abdominojugular reflux: กดท้อง > 10–15 วินาทีแล้ว JVP สูงค้าง > 3 cm → volume overload ${S.h}</li></ul>`});
SEC.push({id:"pvvalve",k:"c",t:"PV loops in valvular disease",mm:"PV loops: AS · AR · MS · MR",leg:[],tools:[["vd",[["as","Aortic stenosis"],["ar","Aortic regurg."],["ms","Mitral stenosis"],["mr","Mitral regurg."]]]],draw:vdD,
notes:()=>`<table><tr><th>โรค</th><th>loop</th></tr>
<tr><td>AS</td><td>LV pressure ↑ (สูงกว่า aorta ช่วง systole) · ESV ↑ · SV ↓ · EDV ไม่เปลี่ยน (ถ้าไม่รุนแรง) · LVH → compliance ↓ → EDP สูงที่ EDV เดิม</td></tr>
<tr><td>AR</td><td>ไม่มี isovolumetric phase จริง · EDV ↑ · SV ↑ · PP กว้าง · ไม่มี dicrotic notch</td></tr>
<tr><td>MS</td><td>LA pressure ↑ · EDV ↓ (เติมไม่ได้) · ESV ↓ · SV ↓</td></tr>
<tr><td>MR</td><td>ไม่มี isovolumetric phase จริง · ESV ↓ (ระบายลง LA) · EDV ↑ · SV รวม ↑ (ไปข้างหน้า + ย้อนกลับ) · LA มี tall v wave</td></tr></table>
<p>${S.fa}</p>
<ul><li>Chronic AR/MR = volume overload → eccentric hypertrophy · AS = pressure overload → concentric hypertrophy ${S.g}</li>
<li>เมื่อชดเชยไม่ไหว ventricle ขยายและ ESPVR แบนลง → EF ลด ${S.b}</li></ul>`});
SEC.push({id:"split",k:"c",t:"Splitting of S2",mm:"S2 splitting",leg:[],tools:[["sp",[["phys","Physiologic"],["wide","Wide"],["fixed","Fixed"],["par","Paradoxical"]]]],draw:splD,
notes:()=>`<ul><li><b>Physiologic</b>: หายใจเข้า → intrathoracic pressure ↓ → venous return ↑ → RV filling ↑ → RV ejection time ↑ → P2 ปิดช้า · pulmonary impedance ลดตอนหายใจเข้าก็ทำให้ P2 ช้าด้วย ${S.fa}</li>
<li><b>Wide</b>: ภาวะที่ RV เทออกช้า (pulmonic stenosis, RBBB) · แยกกว้างกว่าปกติและยังกว้างขึ้นตอนหายใจเข้า ${S.fa}</li>
<li><b>Fixed</b>: ASD → left-to-right shunt → RA และ RV volume ↑ → flow ผ่าน pulmonic valve ↑ → P2 ช้าโดยไม่ขึ้นกับการหายใจ ${S.fa}</li>
<li><b>Paradoxical</b>: ภาวะที่ aortic ปิดช้า (AS, LBBB) → P2 มาก่อน A2 · หายใจเข้า P2 ช้าลงไปใกล้ A2 ทำให้เสียงแยก “หายไป” · ได้ยินแยกตอนหายใจออก ${S.fa}</li></ul>
<div class="pearl">จำง่าย: <b>Right</b> ช้า = wide · <b>Left</b> ช้า = paradoxical · <b>ASD</b> = fixed</div>`});
SEC.push({id:"ausc",k:"c",t:"Auscultation sites & bedside maneuvers",mm:"Where to listen · maneuvers",leg:[],tools:[["mv",[["insp","Inspiration"],["vals","Valsalva / stand"],["leg","Leg raise"],["squat","Squat"],["grip","Hand grip"]]]],draw:auscD,
notes:()=>`<h3>ตำแหน่งฟัง (APTM)</h3><table>
<tr><td>Aortic (R 2nd ICS)</td><td>systolic: AS, flow murmur, aortic sclerosis</td></tr>
<tr><td>Pulmonic (L 2nd ICS)</td><td>systolic ejection: PS, ASD (flow), flow murmur</td></tr>
<tr><td>Tricuspid (L 4–5th ICS)</td><td>holosystolic: TR, VSD · diastolic: TS</td></tr>
<tr><td>Mitral (apex)</td><td>systolic: MR, MVP · diastolic: MS</td></tr>
<tr><td>Left sternal border</td><td>systolic: HCM · diastolic: AR, PR</td></tr></table>
<p>${S.fa}</p>
<h3>Maneuvers</h3><ul>
<li>ลด preload (Valsalva strain, ยืน) → murmur ส่วนใหญ่เบาลง แต่ <b>HCM ดังขึ้น</b> และ MVP click มาเร็วขึ้น ${S.fa}</li>
<li>เพิ่ม preload (ยกขา, นั่งยอง) → murmur ส่วนใหญ่ดังขึ้น แต่ HCM เบาลง และ MVP click ช้าลง ${S.fa}</li>
<li>Hand grip (afterload ↑) → MR, AR, VSD ดังขึ้น · AS เบาลง (gradient ลด) · HCM เบาลง ${S.fa}</li>
<li>หายใจเข้า → murmur ข้างขวาดังขึ้น · หายใจออก → ข้างซ้ายดังขึ้น ${S.fa}</li>
<li>หลัง PVC หรือรอบยาวใน AF: murmur ที่ semilunar valve (AS) ดังขึ้น แต่ MR ไม่เปลี่ยน — ช่วยแยก AS กับ MR ${S.h}</li></ul>`});
SEC.push({id:"murmurs",k:"c",t:"Heart murmurs",mm:"Murmurs",leg:[],tools:[["mu",MU.map(m=>[m[0],m[0].toUpperCase()])]],draw:muD,
notes:()=>`<h3>Systolic</h3><ul>
<li><b>AS</b>: crescendo–decrescendo ejection murmur, ดังที่ base, ร้าวไป carotid · S2 เบา ± ejection click · pulsus parvus et tardus · อาการ <b>SAD</b>: syncope, angina, dyspnea on exertion · สาเหตุ: calcification ตามอายุ (> 60 ปี) หรือ bicuspid valve (~50–60 ปี) ${S.fa}</li>
<li><b>MR/TR</b>: holosystolic, high-pitched “blowing” · MR ดังที่ apex ร้าวไป axilla · สาเหตุ MR: ischemic (post-MI), MVP, LV dilatation, rheumatic fever · TR: RV dilatation, หลังใส่ pacemaker · ทั้งคู่: infective endocarditis ${S.fa}</li>
<li><b>MVP</b>: late crescendo หลัง mid-systolic click (chordae ตึงทันที) · ดังสุดก่อน S2 · มักไม่อันตรายแต่เสี่ยง endocarditis ${S.fa}</li>
<li><b>VSD</b>: holosystolic, harsh, ดังที่ tricuspid area · <b>VSD เล็กเสียงดังกว่า VSD ใหญ่</b> ${S.fa}</li></ul>
<h3>Diastolic</h3><ul>
<li><b>AR</b>: early diastolic decrescendo “blowing” · สาเหตุ <b>BEAR</b>: Bicuspid, Endocarditis, Aortic root dilation, Rheumatic fever · PP กว้าง, pistol-shot femoral pulse, head bobbing ${S.fa}</li>
<li><b>MS</b>: opening snap → mid–late diastolic rumble · <b>S2–OS สั้น = รุนแรง</b> · เกือบทั้งหมดจาก rheumatic fever · LA โต → AF, Ortner syndrome, hemoptysis, right HF ${S.fa}</li></ul>
<h3>Continuous</h3><ul><li><b>PDA</b>: machine-like ดังสุดที่ S2 · left infraclavicular · congenital rubella หรือคลอดก่อนกำหนด ${S.fa}</li>
<li>กลไกเสียง murmur: เลือดไหลเร็วผ่านช่องแคบหรือไหลย้อน → turbulence ${S.g}</li></ul>`});

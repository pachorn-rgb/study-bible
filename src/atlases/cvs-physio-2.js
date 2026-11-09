/* ================= Cardiovascular Physiology II · Electrophysiology, blood-pressure control & microcirculation =================
   First Aid Step 1 2025 (Cardiovascular · Physiology, pp. 297–301) order · Guyton & Hall 13e Ch 10–11, 16–19, 21 ·
   Boron & Boulpaep Ch 20, 21, 23, 24 · Harrison 22e Ch 247. All drawings are original schematics. */
//@include _cvs-physio-kit.js
Object.assign(GN,{a:"Electrophysiology",b:"Blood-pressure control",c:"Microcirculation"});
Object.assign(ST,{apv:"ph",pm:"n",seg:"qrs",stim:320,axis:"n",bar:"hypo",cath:"pa",salt:1,kid:"n",org:"heart",pcap:30,pic:28,pii:8,kf:1});
const EXTRA=["ecgread","longbp","coronary"];

/* ---------- 1. ventricular action potential ---------- */
const VAP=MONO([[-30,-86],[0,-86],[1.5,22],[6,6],[14,9],[60,4],[150,-6],[200,-22],[245,-62],[275,-84],[300,-86],[460,-86]]);
const PHC=["var(--g0)","var(--g8)","var(--g3)","var(--g1)","var(--g2)"];
function apvD(){const v=ST.apv;let b="";const A=AX(78,30,520,220,[-30,450],[-100,40],[0,100,200,300,400],[-90,-60,-30,0,30],"time (ms)","Vm (mV)");b+=A.g;
 if(v==="sk"){b+=SP(FN(A,MONO([[-30,-88],[0,-88],[.8,30],[2.5,-70],[4,-88],[450,-88]]),-30,60,300),CV.vi,2.6)+T(A.X(8),A.Y(34),"skeletal AP ~2–4 ms",{a:"start",c:"s"});
  const tw=t=>t<5||t>140?0:t<60?Math.sin((t-5)/55*Math.PI/2):Math.max(0,Math.cos((t-60)/80*Math.PI/2));const ct=t=>t<20?0:t<220?Math.sin((t-20)/200*Math.PI/2):Math.max(0,Math.cos((t-220)/120*Math.PI/2));
  b+=SP(FN(A,t=>-95+tw(t)*40,-30,450,200),CV.vi,1.8,{dash:"5 4"})+SP(FN(A,t=>-95+ct(t)*40,-30,450,200),CV.lv,1.8,{dash:"5 4"})+T(A.X(150),A.Y(-50),"cardiac contraction (เส้นประแดง)",{c:"s"})+T(A.X(75),A.Y(-62),"skeletal twitch",{a:"start",c:"s m"})}
 const seg=[[ -30,0,4],[0,2,0],[2,14,1],[14,190,2],[190,282,3],[282,450,4]];
 seg.forEach(([a,z,p])=>b+=SP(FN(A,VAP,a,z,Math.max(6,Math.round((z-a)/2))),PHC[p],3.4));
 if(v==="ph"||v==="cur"){[[1,26,0],[8,18,1],[100,12,2],[240,-40,3],[380,-78,4]].forEach(([t,y,p])=>{b+=DOT(A.X(t)+(p===0?-12:0),A.Y(y),11,PHC[p],{sw:2})+`<text x="${A.X(t)+(p===0?-12:0)}" y="${A.Y(y)+4}" text-anchor="middle" style="font:800 11px var(--sb-font);fill:var(--sb-plate)">${p}</text>`})}
 if(v==="ph"){const L=[["0","Upstroke · fast Na⁺ channels เปิด (I_Na)"],["1","Initial repolarization · Na⁺ inactivate + transient K⁺ out (I_to)"],["2","Plateau · Ca²⁺ เข้า (L-type) สมดุลกับ K⁺ ออก → trigger CICR"],["3","Rapid repolarization · delayed rectifier K⁺ เปิด, Ca²⁺ ปิด"],["4","Resting ~−85 mV · K⁺ permeability สูง (I_K1)"]];
  L.forEach(([p,t],i)=>b+=DOT(92,300+i*26,8,PHC[+p],{sw:0})+`<text x="92" y="${304+i*26}" text-anchor="middle" style="font:800 9px var(--sb-font);fill:var(--sb-plate)">${p}</text>`+T(108,304+i*26,t,{a:"start",c:"s"}))}
 if(v==="cur"){const rows=[["I_Na","in",CV.rd,t=>t>=0&&t<3?1:0],["I_to","out",CV.or,t=>t>1&&t<30?Math.exp(-(t-3)/8):0],["I_Ca,L","in",CV.tl,t=>t>2&&t<220?Math.min(1,(t-2)/6)*(t<150?.8:.8*(220-t)/70):0],["I_K","out",CV.bl,t=>t>20&&t<300?Math.min(1,(t-20)/200)*(t<260?1:(300-t)/40):0],["I_K1","out",CV.vi,t=>t<0||t>230?(t>230&&t<290?(t-230)/60:1)*.7:.08]];
  rows.forEach(([n,d,c,f],i)=>{const y=296+i*30;b+=T(70,y+4,n,{a:"end",c:"s"})+SP(`M${A.X(-30)},${y} H${A.X(450)}`,CV.line,1);
   const pts=[...Array(161)].map((_,k)=>{const t=-30+480*k/160;return [A.X(t),y-(d==="out"?1:-1)*f(t)*12]});b+=`<path d="M${A.X(-30)},${y} L${pts.map(p=>p.map(z=>z.toFixed(1)).join(",")).join(" L")} L${A.X(450)},${y}Z" style="fill:${tint(c,55)};stroke:${c};stroke-width:1.2"/>`});
  b+=T(600,450,"ขึ้น = outward · ลง = inward",{a:"end",c:"s m"})}
 if(v==="ref"||v==="sk"){if(v==="ref"){b+=`<rect x="${A.X(0)}" y="30" width="${A.X(250)-A.X(0)}" height="220" style="fill:${tint(CV.bad,26)};opacity:.5"/>`+`<rect x="${A.X(250)}" y="30" width="${A.X(285)-A.X(250)}" height="220" style="fill:${tint(CV.or,30)};opacity:.6"/>`+`<rect x="${A.X(285)}" y="30" width="${A.X(305)-A.X(285)}" height="220" style="fill:${tint(CV.vol,30)};opacity:.6"/>`;
   b+=CT(A.X(125),48,"ERP",CV.bad,{s:12})+CT(A.X(267),48,"RRP",CV.or,{s:11})+CT(A.X(296),64,"SN",CV.vol,{s:10});
   const ct=t=>t<20?0:t<220?Math.sin((t-20)/200*Math.PI/2):Math.max(0,Math.cos((t-220)/120*Math.PI/2));b+=SP(FN(A,t=>-95+ct(t)*45,-30,450,200),CV.lv,2,{dash:"6 4"})+T(A.X(330),A.Y(-62),"tension",{a:"start",c:"s"})}
  b+=RB(70,290,540,150,CV.acc,{p:9});
  const L=v==="ref"?["ERP (~250 ms): Na⁺ channels ยัง inactivate → กระตุ้นอย่างไรก็ไม่เกิด AP ที่แพร่ไปได้","RRP: ต้องกระตุ้นแรงกว่าปกติ ได้ AP ที่ upstroke เล็กและนำช้า","Supranormal (SN): ช่วงสั้นๆ ที่ไวกว่าปกติเล็กน้อย","ERP ยาวเกือบเท่าการหดตัว → หัวใจเกิด tetanus ไม่ได้ (ต่างจาก skeletal)"]:["Skeletal: AP สั้นมาก หดตัวนานกว่า AP จึงกระตุ้นซ้อนเป็น tetanus ได้","Cardiac: plateau ทำให้ AP ยาวพอๆ กับการหดตัว","Cardiac ต้องการ Ca²⁺ จาก ECF ไปกระตุ้น SR ปล่อย Ca²⁺ (CICR)","Myocyte ส่ง excitation ต่อกันผ่าน gap junctions (functional syncytium)"];
  L.forEach((t,i)=>b+=DOT(90,320+i*30,4,CV.acc,{sw:0})+T(102,324+i*30,t,{a:"start",c:"s"}))}
 return svg(b,"0 0 640 460")}

/* ---------- 2. pacemaker action potential ---------- */
const PMM={n:{mdp:-60,thr:-40,sl:.04,t:"Normal SA node"},sym:{mdp:-58,thr:-42,sl:.075,t:"Sympathetic (NE → β₁)"},vag:{mdp:-66,thr:-39,sl:.024,t:"Vagal (ACh / adenosine)"}};
function pmTrace(P,T0=2000){const pts=[];let t=0,v=P.mdp;const up=60,dn=200;
 while(t<T0){const d4=(P.thr-P.mdp)/P.sl;for(let i=0;i<=20;i++){const f=i/20;pts.push([t+d4*f,P.mdp+(P.thr-P.mdp)*Math.pow(f,1.25)])}t+=d4;
  const ap=MONO([[0,P.thr],[up*.6,5],[up,10],[up+60,0],[up+dn*.8,P.mdp+4],[up+dn,P.mdp]]);for(let i=1;i<=20;i++){const tt=(up+dn)*i/20;pts.push([t+tt,ap(tt)])}t+=up+dn}
 return [pts.filter(p=>p[0]<=T0),60000/((P.thr-P.mdp)/P.sl+up+dn)]}
function appD(){const P=PMM[ST.pm];let b="";const A=AX(78,30,520,240,[0,2000],[-80,20],[0,500,1000,1500,2000],[-80,-60,-40,-20,0,20],"time (ms)","Vm (mV)");b+=A.g;
 const [p0]=pmTrace(PMM.n),[p1,rate]=pmTrace(P);
 b+=SP(`M${A.X(0)},${A.Y(-40)} H${A.X(2000)}`,CV.mut,1,{dash:"4 4"})+T(A.X(2000)-4,A.Y(-40)-5,"threshold ~−40",{a:"end",c:"s m"});
 if(ST.pm!=="n")b+=SP(PTS(p0.map(([t,v])=>[A.X(t),A.Y(v)])),CV.mut,1.6,{dash:"5 4"});
 b+=SP(PTS(p1.map(([t,v])=>[A.X(t),A.Y(v)])),CV.lv,3);
 const d4=(P.thr-P.mdp)/P.sl;b+=`<rect x="${A.X(0)}" y="30" width="${A.X(d4)-A.X(0)}" height="240" style="fill:${tint(CV.bl,24)};opacity:.55"/>`;
 b+=T(A.X(d4/2),A.Y(-68),"phase 4",{c:"bh"})+T(A.X(d4/2),A.Y(-75),"I_f (HCN) + I_Ca,T",{c:"s m"})+T(A.X(d4)+8,A.Y(12),"phase 0 · I_Ca,L",{a:"start",c:"s"})+T(A.X(d4+150),A.Y(-14),"phase 3 · I_K",{a:"start",c:"s"});
 b+=RB(78,318,250,70,CV.lv,{p:12})+T(92,340,P.t,{a:"start",c:"bh"})+CT(92,372,`${r0(rate)}`,CV.ink,{a:"start",s:24,wt:800})+T(140,372,"beats/min",{a:"start",c:"s m"});
 const msg={n:"ไม่มี phase 1–2 · upstroke ช้าเพราะใช้ Ca²⁺ (Na⁺ channel inactivate ที่ −60)",sym:"cAMP ↑ → HCN เปิดมากขึ้น · slope ชันขึ้น → ถึง threshold เร็ว → HR ↑",vag:"K⁺ (I_K,ACh) ออกมากขึ้น → hyperpolarize + slope ลด → HR ↓"}[ST.pm];
 b+=wrapT(344,340,msg,44,"s",16);
 b+=T(78,416,"Latent pacemakers",{a:"start",c:"bh"});[["SA node","60–100",1],["AV node","40–60",.55],["His–Purkinje","20–40",.3]].forEach(([n,r,f],i)=>{const y=438+i*24;b+=T(78,y+4,n,{a:"start",c:"s"})+`<rect x="180" y="${y-8}" width="${f*300}" height="14" rx="7" style="fill:${tint(CV.lv,50)}"/>`+T(186+f*300,y+4,r+" /min",{a:"start",c:"s m"})});
 return svg(b,"0 0 640 512")}

/* ---------- 3. conduction system + ECG ---------- */
const SEGI={p:[.02,.11,"P wave","atrial depolarization · < 120 ms"],pr:[.02,.145,"PR interval","จาก atria เริ่ม depolarize ถึง ventricles เริ่ม · 120–200 ms · ส่วนใหญ่คือ AV nodal delay"],qrs:[.145,.2,"QRS complex","ventricular depolarization · ≤ 100–120 ms"],st:[.2,.32,"ST segment","ventricles depolarize หมด (plateau) · ปกติ isoelectric"],t:[.32,.48,"T wave","ventricular repolarization · inverted อาจเป็น ischemia/MI ใหม่"],qt:[.145,.48,"QT interval","depolarization + contraction + repolarization ของ ventricle"]};
function ecgD(){const k=ST.seg,[a,z,ttl,txt]=SEGI[k];let b="";const hx=160,hy=226,s=1.05;
 const atria=k==="p"||k==="pr",vent=["qrs","st","t","qt"].includes(k);
 b+=SP(`M${hx-62},${hy-200} V${hy-106}`,CV.ra,20,{op:.35})+SP(`M${hx+10},${hy-206} C${hx+10},${hy-160} ${hx+40},${hy-150} ${hx+40},${hy-120}`,CV.lv,20,{op:.3})+T(hx-62,hy-206,"SVC",{c:"s m"})+T(hx+16,hy-212,"Aorta",{a:"start",c:"s m"});
 b+=HEART(hx,hy,s,{fill:{ra:atria?CV.acc:null,la:atria?CV.acc:null,rv:vent?(k==="t"?CV.bl:CV.acc):null,lv:vent?(k==="t"?CV.bl:CV.acc):null}});
 const P=(x,y)=>[hx+x*s,hy+y*s],L=(pts,c,w,o)=>SP(PTS(pts.map(p=>P(...p))),c,w,o);
 const cc=CV.ink2,hot=c=>c;
 b+=L([[-50,-100],[-40,-60],[-20,-12]],cc,1.6,{dash:"3 3"})+L([[-50,-100],[0,-96],[40,-84]],cc,1.6,{dash:"3 3"});
 b+=L([[-16,-8],[0,4],[2,26]],k==="pr"?CV.bad:cc,k==="pr"?4:3);
 b+=L([[2,26],[-4,60],[-14,96],[-40,104]],vent?CV.bad:cc,2.6)+L([[6,26],[30,30],[60,20]],vent?CV.bad:cc,2.4)+L([[6,30],[16,70],[30,110]],vent?CV.bad:cc,2.4);
 [[-40,104,-70,70],[-14,96,-26,124],[30,110,60,100],[30,110,14,136],[60,20,92,34],[60,20,80,60]].forEach(([x1,y1,x2,y2])=>b+=L([[x1,y1],[x2,y2]],vent?CV.bad:cc,1.4,{op:.8}));
 const node=(x,y,l,on,an="start",dx=10)=>{const [X,Y]=P(x,y);return DOT(X,Y,on?8:6,on?CV.bad:CV.or,{sw:2})+T(X+(an==="end"?-dx:dx),Y+4,l,{a:an,c:"s"})};
 b+=node(-50,-100,"SA node",k==="p"||k==="pr","end")+node(-16,-8,"AV node",k==="pr","end")+T(...P(8,46),"His",{a:"start",c:"s m"})+T(...P(-30,82),"RBB",{a:"end",c:"s m"})+T(...P(66,14),"LBB",{a:"start",c:"s m"})+T(...P(20,150),"Purkinje",{c:"s m"});
 /* ECG */
 const e=ECGF({u:1}),A=AX(330,40,290,200,[0,.62],[-.35,1.1],[],[],"","");b+=A.g;
 for(let t=0;t<=.62;t+=.04)b+=SP(`M${A.X(t)},40 V240`,CV.lv,.5,{op:t%.2<.001?.25:.1});
 b+=`<rect x="${A.X(a)}" y="40" width="${A.X(z)-A.X(a)}" height="200" style="fill:${tint(CV.acc,35)};opacity:.7"/>`;
 b+=SP(FN(A,e,0,.62,320),CV.ink,2.4);
 [["P",.06,.17],["Q",.145,-.16],["R",.165,1.05],["S",.188,-.3],["T",.4,.33],["U",.53,.16]].forEach(([l,t,y])=>b+=T(A.X(t),A.Y(y)+(y<0?14:-6),l,{c:"bh"}));
 const br=(t1,t2,y,l)=>SP(`M${A.X(t1)},${y} H${A.X(t2)}`,CV.ink2,1.4)+SP(`M${A.X(t1)},${y-4} V${y+4} M${A.X(t2)},${y-4} V${y+4}`,CV.ink2,1.4)+T((A.X(t1)+A.X(t2))/2,y+14,l,{c:"s m"});
 b+=br(.02,.145,256,"PR")+br(.145,.2,256,"QRS")+br(.145,.48,286,"QT")+T(A.X(.2)+2,A.Y(0)-8,"J",{a:"start",c:"s m"});
 b+=RB(330,306,290,96,CV.acc,{p:12})+T(344,330,ttl,{a:"start",c:"bh"})+wrapT(344,350,txt,40,"s",16);
 b+=T(160,420,"Speed: His–Purkinje > atria > ventricles > AV node",{c:"s"});
 return svg(b,"0 0 640 430")}

/* ---------- 4. refractoriness & conduction velocity ---------- */
function refrD(){const st=ST.stim;let b="";const A=AX(78,30,520,200,[-20,700],[-100,40],[0,100,200,300,400,500,600,700],[-90,-50,0,30],"time (ms)","Vm (mV)");b+=A.g;
 b+=`<rect x="${A.X(0)}" y="30" width="${A.X(250)-A.X(0)}" height="200" style="fill:${tint(CV.bad,24)};opacity:.45"/><rect x="${A.X(250)}" y="30" width="${A.X(285)-A.X(250)}" height="200" style="fill:${tint(CV.or,30)};opacity:.55"/>`;
 b+=CT(A.X(125),46,"absolute / effective RP",CV.bad,{s:11})+CT(A.X(268),46,"RRP",CV.or,{s:11});
 let zone,f;if(st<250){zone="ERP: ไม่มี AP ใหม่";f=t=>VAP(t)}else{const amp=st<285?Math.max(.35,(st-250)/35):1,dur=st<285?.6+.4*(st-250)/35:1;zone=st<285?"RRP: AP เล็ก นำช้า สั้น":"พ้น refractory: AP เต็ม";
  f=t=>t<st?VAP(t):VAP(t)+(VAP((t-st)/dur)+86)*amp}
 b+=SP(FN(A,f,-20,700,400),CV.lv,3);
 b+=AW(A.X(st),254,A.X(st),232,CV.acc,2.4,{h:9})+TAG(A.X(st),268,`stimulus ${st} ms`,CV.acc,{w:120});
 b+=RB(78,286,520,40,st<250?CV.bad:st<285?CV.or:CV.vol,{p:14})+T(338,311,zone,{c:"bh"});
 /* conduction velocities */
 b+=T(78,356,"Conduction velocity (m/s)",{a:"start",c:"bh"});
 [["Purkinje",4,CV.lv],["Atrial pathways / His",1,CV.or],["Ventricular muscle",.5,CV.vi],["AV node",.05,CV.bl]].forEach(([n,v,c],i)=>{const y=378+i*26,w=Math.max(6,Math.log10(v*100)/Math.log10(400)*360);b+=T(78,y+4,n,{a:"start",c:"s"})+`<rect x="230" y="${y-8}" width="${w}" height="14" rx="7" style="fill:${c}"/>`+T(238+w,y+4,v,{a:"start",c:"s m"})});
 b+=T(600,478,"He Parks At Ventura AVenue",{a:"end",c:"s m"});
 return svg(b,"0 0 640 490")}

/* ---------- 5 (เสริม). leads & axis ---------- */
const AXS={n:[60,"Normal axis","−30° ถึง +90° · lead I บวก, aVF บวก"],lad:[-55,"Left axis deviation","< −30° · lead I บวก, aVF ลบ (II ลบ) · เช่น LAFB, LVH, inferior MI"],rad:[120,"Right axis deviation","> +90° · lead I ลบ, aVF บวก · เช่น RVH, LPFB, PE, ผอมสูง"],ext:[-140,"Extreme axis","−90° ถึง ±180° · I ลบ, aVF ลบ · VT, สลับขั้ว lead"]};
function axD(){const [ang,t,s]=AXS[ST.axis];let b="";const cx=190,cy=210,R=150;
 b+=`<circle cx="${cx}" cy="${cy}" r="${R}" style="fill:${tint(CV.bl,6)};stroke:var(--sb-line)"/>`;
 b+=`<path d="M${cx},${cy} L${cx+R},${cy} A${R},${R} 0 0 1 ${cx},${cy+R} Z" style="fill:${tint(CV.vol,22)}"/>`+`<path d="M${cx},${cy} L${cx+R*Math.cos(-Math.PI/6)},${cy+R*Math.sin(-Math.PI/6)} A${R},${R} 0 0 1 ${cx+R},${cy} Z" style="fill:${tint(CV.vol,12)}"/>`;
 [["I",0],["II",60],["III",120],["aVF",90],["aVL",-30],["aVR",-150]].forEach(([l,a])=>{const r=a*Math.PI/180;b+=SP(`M${cx-Math.cos(r)*R},${cy-Math.sin(r)*R} L${cx+Math.cos(r)*R},${cy+Math.sin(r)*R}`,CV.ink2,1,{op:.5})+DOT(cx+Math.cos(r)*R,cy+Math.sin(r)*R,4,CV.ink2,{sw:0})+T(cx+Math.cos(r)*(R+18),cy+Math.sin(r)*(R+18)+4,`${l} ${a>0?"+":""}${a}°`,{c:"s"})});
 const r=ang*Math.PI/180;b+=AW(cx,cy,cx+Math.cos(r)*(R-14),cy+Math.sin(r)*(R-14),CV.lv,4,{h:14});
 /* mini QRS */
 const q=(x,y,l,up)=>`<rect x="${x}" y="${y}" width="110" height="80" rx="12" style="fill:var(--sb-surface);stroke:var(--sb-line)"/>`+T(x+12,y+18,l,{a:"start",c:"bh"})+SP(`M${x+12},${y+52} H${x+40} L${x+48},${y+52+(up?6:-6)} L${x+56},${y+52+(up?-30:28)} L${x+64},${y+52+(up?10:-8)} L${x+70},${y+52} H${x+100}`,CV.ink,2);
 const I=Math.cos(r)>0,F=Math.sin(r)>0;b+=q(380,40,"Lead I",I)+q(500,40,"aVF",F);
 b+=RB(380,140,230,110,CV.lv,{p:12})+T(394,164,t,{a:"start",c:"bh"})+wrapT(394,186,s,32,"s",16);
 b+=RB(380,266,230,96,CV.bl,{p:10})+T(394,290,"Rate จาก ECG (25 mm/s)",{a:"start",c:"bh"})+T(394,312,"300 ÷ จำนวนช่องใหญ่ระหว่าง R–R",{a:"start",c:"s"})+T(394,332,"ช่องเล็ก 1 มม. = 0.04 s",{a:"start",c:"s"})+T(394,350,"ช่องใหญ่ 5 มม. = 0.20 s",{a:"start",c:"s"});
 return svg(b,"0 0 640 380")}

/* ---------- 6. natriuretic peptides ---------- */
function natD(){let b="";b+=HEART(150,200,.95,{fill:{ra:CV.or,la:CV.or,rv:CV.vi,lv:CV.vi}});
 b+=TAG(76,64,"ANP · atria",CV.or,{w:104})+TAG(240,330,"BNP · ventricles",CV.vi,{w:126});
 b+=T(20,40,"ยืดจาก volume / atrial pressure ↑",{a:"start",c:"s m"})+T(240,356,"ยืดจาก wall tension ↑",{c:"s m"});
 b+=RB(130,388,300,40,CV.tl,{p:14})+T(280,413,"receptor → guanylyl cyclase → cGMP ↑",{c:"bh"});
 const tgt=[[350,30,"Kidney · glomerulus","afferent ขยาย · efferent หด → GFR ↑",CV.bl],[350,110,"Kidney · collecting duct","ดูด Na⁺ กลับน้อยลง → natriuresis, diuresis",CV.bl],[350,190,"Vessels","vasodilation → BP ↓ · preload ↓",CV.lv],[350,270,"RAAS & aldosterone","renin ↓ · aldosterone ↓ → “aldosterone escape”",CV.or]];
 tgt.forEach(([x,y,t,s,c])=>{b+=RB(x,y,270,64,c,{p:12})+T(x+14,y+24,t,{a:"start",c:"bh"})+wrapT(x+14,y+44,s,40,"s",14)+AW(262,y<150?140:250,x-4,y+32,c,1.6,{op:.75})});
 b+=T(484,356,"BNP ใช้วินิจฉัย HF · NPV สูงมาก",{c:"h"})+T(484,374,"BNP ครึ่งชีวิตยาวกว่า ANP",{c:"s m"});
 return svg(b,"0 0 640 440")}

/* ---------- 7. baroreceptors & chemoreceptors ---------- */
const BAR={hypo:{map:60,fire:"↓",sym:"↑",vag:"↓",out:["HR ↑","Contractility ↑","Vasoconstriction (TPR ↑)","Venoconstriction"],t:"Hypotension (เช่น hemorrhage)",s:"ยืดน้อย → firing ลด → ปลด sympathetic, ลด vagal → BP กลับขึ้น"},
 hyper:{map:160,fire:"↑",sym:"↓",vag:"↑",out:["HR ↓","Contractility ↓","Vasodilation (TPR ↓)"],t:"Hypertension เฉียบพลัน",s:"ยืดมาก → firing เพิ่ม → vagal ↑ sympathetic ↓ → BP ลง"},
 csm:{map:150,fire:"↑",sym:"↓",vag:"↑",out:["AV node refractory ↑","HR ↓ → CO ↓","Vasodilation"],t:"Carotid massage / sinus hypersensitivity",s:"กด carotid sinus → firing ↑ → vagal ↑ → ใช้หยุด SVT ได้ · คนไวเกินอาจ presyncope"},
 cush:{map:170,fire:"↑",sym:"↑",vag:"↑",out:["Hypertension (central sympathetic)","Reflex bradycardia","Respiratory depression"],t:"Cushing reflex",s:"ICP ↑ → สมองขาดเลือด → PCO₂ ↑ pH ↓ → sympathetic ↑ → BP ↑ → baroreceptor → HR ↓"},
 chemo:{map:75,fire:"↓",sym:"↑",vag:"–",out:["Ventilation ↑","Sympathetic ↑ (ถ้า BP < 80)"],t:"Hypoxemia / acidosis",s:"carotid & aortic bodies ไวต่อ PO₂ < 60, PCO₂ ↑, pH ↓ · central chemoreceptor ไวต่อ PCO₂/pH ของ CSF"}};
function baroD(){const S=BAR[ST.bar],k=ST.bar;let b="";
 b+=FRAME(10,10,380,450);
 /* medulla */
 b+=`<path d="${sm([[90,30],[300,30],[330,70],[300,110],[90,110],[60,70]])}" style="fill:${tint(CV.vi,14)};stroke:color-mix(in srgb,${CV.vi} 50%,transparent)"/>`+T(195,50,"Medulla",{c:"bh"});
 b+=RB(80,62,100,36,CV.vi,{p:24,r:10})+T(130,84,"NTS",{c:"bh"})+RB(206,62,110,36,CV.or,{p:20,r:10})+T(261,78,"Vasomotor",{c:"s"})+T(261,92,"+ vagal nuclei",{c:"s m"});
 b+=AW(182,80,204,80,CV.ink2,1.6);
 /* carotid */
 b+=SP("M70,440 V300 C70,270 60,250 46,220 M70,300 C80,270 100,250 112,220",CV.lv,12,{op:.55});
 b+=`<ellipse cx="70" cy="296" rx="14" ry="20" style="fill:${tint(CV.lv,40)};stroke:${CV.lv}"/>`+T(92,300,"carotid sinus",{a:"start",c:"s"})+DOT(60,274,6,CV.vol)+T(32,262,"carotid body",{a:"start",c:"s m"});
 /* arch */
 b+=SP("M200,440 V380 C200,320 300,320 300,380 V440",CV.lv,16,{op:.55})+DOT(250,336,8,tint(CV.lv,40),{st:CV.lv})+T(250,318,"aortic arch",{c:"s"})+DOT(276,346,5,CV.vol);
 const fc=S.fire==="↑"?CV.bad:S.fire==="↓"?CV.bl:CV.mut;
 b+=SP("M84,290 C150,250 110,140 110,100",fc,2.6,{dash:"6 4"})+T(118,190,"IX",{a:"start",c:"bh"})+T(118,206,`firing ${S.fire}`,{a:"start",c:"s"});
 b+=SP("M240,330 C200,250 150,160 140,100",fc,2.6,{dash:"6 4"})+T(196,250,"X",{a:"start",c:"bh"});
 /* efferents */
 const vc=S.vag==="↑"?CV.bl:S.vag==="↓"?CV.mut:CV.mut,sc=S.sym==="↑"?CV.bad:CV.mut;
 b+=SP("M300,100 C350,160 350,220 350,260",vc,3)+T(356,180,`vagus ${S.vag}`,{a:"start",c:"s"});
 b+=SP("M270,100 C290,170 330,180 330,260",sc,3,{dash:"2 4"})+T(300,214,`symp ${S.sym}`,{a:"end",c:"s"});
 b+=`<path d="${sm([[318,262],[356,256],[376,290],[352,328],[322,312]])}" style="fill:${tint(CV.lv,24)};stroke:${CV.lv}"/>`+T(348,294,"SA/AV",{c:"s"});
 /* sigmoid */
 b+=FRAME(404,10,226,204)+T(418,30,"Baroreceptor firing",{a:"start",c:"s m"});const A=AX(450,44,166,130,[40,200],[0,1],[60,100,140,180],[],"MAP (mmHg)","firing",{yo:16});b+=A.g;
 const sg=p=>1/(1+Math.exp(-(p-110)/16));b+=SP(FN(A,sg,40,200),CV.vi,2.6)+DOT(A.X(S.map),A.Y(sg(S.map)),6,CV.acc);
 b+=`<rect x="${A.X(60)}" y="44" width="${A.X(180)-A.X(60)}" height="130" style="fill:${tint(CV.vi,10)};opacity:.5"/>`;
 b+=FRAME(404,224,226,236)+T(418,248,S.t,{a:"start",c:"bh"});
 S.out.forEach((o,i)=>b+=DOT(424,274+i*24,4,CV.acc,{sw:0})+T(434,278+i*24,o,{a:"start",c:"s"}));
 b+=wrapT(418,284+S.out.length*24,S.s,32,"s m",15);
 return svg(b,"0 0 640 470")}

/* ---------- 8. normal pressures & Swan-Ganz ---------- */
const CATH=[["ra","RA","< 5",[[0,3],[.1,6],[.2,3],[.3,4],[.45,2],[.65,5],[.8,2],[1,3]]],["rv","RV","25 / < 5",[[0,3],[.1,4],[.2,25],[.4,24],[.5,3],[.8,4],[1,4]]],["pa","PA","25 / 8–10",[[0,10],[.15,9],[.25,25],[.4,20],[.48,15],[.52,17],[1,10]]],["wedge","PCWP","4–12 (≈ LA)",[[0,8],[.12,10],[.25,7],[.5,11],[.65,7],[1,8]]]];
function pressD(){const ci=CATH.findIndex(c=>c[0]===ST.cath);let b="";const hx=150,hy=230,s=1.1;
 b+=HEART(hx,hy,s,{labels:false});const P=(x,y)=>[hx+x*s,hy+y*s];
 b+=SP(`M${hx+10},${hy-128} C${hx+10},${hy-170} ${hx+60},${hy-180} ${hx+90},${hy-150}`,CV.lv,16,{op:.3})+SP(`M${hx-10},${hy-120} C${hx-20},${hy-170} ${hx-80},${hy-180} ${hx-110},${hy-170}`,CV.ra,14,{op:.3})+SP(`M${hx-68},${hy-215} V${hy-110}`,CV.ra,16,{op:.3})+T(hx-86,hy-200,"SVC",{a:"end",c:"s m"});
 const lab=(x,y,t,v,c)=>{const [X,Y]=P(x,y);return CT(X,Y,t,c,{s:12,wt:800})+T(X,Y+15,v,{c:"s"})};
 b+=lab(-80,-30,"RA","< 5",CV.ra)+lab(-48,50,"RV","25/<5",CV.ra)+lab(58,-62,"LA","< 12",CV.lv)+lab(58,52,"LV","120/<12",CV.lv)+lab(64,-150,"Aorta","120/80",CV.lv)+lab(-96,-196,"PA","25/8–10",CV.ra);
 /* catheter path */
 const path=[[-62,-196],[-62,-120],[-58,-60],[-40,10],[-34,74],[-12,40],[-14,-60],[-40,-138],[-80,-160],[-104,-158]],cut=[3,5,9,10][ci];
 b+=SP(PTS(path.slice(0,cut).map(p=>P(...p))),CV.ink,2.4);const tip=P(...path[cut-1]);b+=DOT(tip[0],tip[1],6,CV.acc,{sw:2});
 if(ST.cath==="wedge")b+=DOT(tip[0],tip[1],11,"none",{st:CV.acc,sw:2})+T(tip[0]-14,tip[1]+20,"balloon wedged",{a:"start",c:"s m"});
 /* tracing strip */
 const A=AX(330,40,290,190,[0,4],[0,30],[],[0,10,20,30],"","mmHg",{yo:28});b+=A.g;
 CATH.forEach(([k,l,v,K],i)=>{const f=MONO(K),on=i===ci;b+=`<rect x="${A.X(i)}" y="40" width="${A.X(i+1)-A.X(i)}" height="190" style="fill:${on?tint(CV.acc,26):"transparent"}"/>`+SP(FN(A,t=>f(t-i),i,i+1,80),on?CV.ink:CV.mut,on?2.8:1.6)+T(A.X(i+.5),252,l,{c:on?"bh":"s m"})});
 const C=CATH[ci];b+=RB(330,270,290,80,CV.acc,{p:12})+T(344,294,`${C[1]}: ${C[2]} mmHg`,{a:"start",c:"bh"});
 const m={ra:"a และ v wave เล็ก · เท่า CVP",rv:"systolic สูงขึ้นทันทีเมื่อผ่าน tricuspid · diastolic ใกล้ 0",pa:"diastolic สูงขึ้น (pulmonic ปิด) · มี dicrotic notch",wedge:"สะท้อน LA pressure · ใช้แยก cardiogenic กับ noncardiogenic edema"}[ST.cath];
 b+=wrapT(344,316,m,40,"s",15);
 b+=T(475,380,"ยกเว้น mitral stenosis: PCWP > LVEDP",{c:"h"});
 return svg(b,"0 0 640 400")}

/* ---------- 9 (เสริม). long-term pressure control: renal output curve ---------- */
function longD(){const imp=ST.kid==="ckd",x=ST.salt;let b="";const A=AX(80,30,500,280,[50,200],[0,8],[50,100,150,200],[0,2,4,6,8],"Mean arterial pressure (mmHg)","Na⁺/H₂O intake & output (× normal)");b+=A.g;
 const out=(c,k)=>p=>Math.exp((p-c)/k),n=out(100,4),i=out(128,12),f=imp?i:n,eq=imp?128+12*Math.log(x):100+4*Math.log(x);
 b+=SP(FN(A,n,50,108.3),CV.lv,imp?1.6:3.2,{op:imp?.4:1})+SP(FN(A,i,50,152.9),CV.or,imp?3.2:1.6,{op:imp?1:.4,dash:imp?"":"6 4"});
 b+=SP(`M${A.X(50)},${A.Y(x)} H${A.X(200)}`,CV.bl,2.4)+T(A.X(54),A.Y(x)-6,`intake ${x}×`,{a:"start",c:"s"});
 b+=DOT(A.X(eq),A.Y(x),8,CV.acc)+SP(`M${A.X(eq)},${A.Y(x)} V${A.Y(0)}`,CV.acc,1.4,{dash:"4 3"})+TAG(A.X(eq),A.Y(0)-14,`${r0(eq)} mmHg`,CV.acc,{w:80});
 b+=T(A.X(104),A.Y(7.6),"Normal kidney + RAAS",{a:"end",c:"s"})+T(A.X(150),A.Y(5),"Kidney mass ↓ / RAAS ไม่ลด",{a:"start",c:"s"});
 b+=T(330,368,"จุดตัด intake = output คือระดับ MAP ระยะยาว (equilibrium point)",{c:"h"});
 return svg(b,"0 0 640 380")}

/* ---------- 10. autoregulation ---------- */
const ORG={heart:["Heart","Local metabolites: adenosine, NO, CO₂, O₂ ↓","ดึง O₂ สูงมากแม้ขณะพัก → เพิ่ม O₂ ได้ด้วยการเพิ่ม flow เท่านั้น",4,CV.lv],brain:["Brain","CO₂ / pH เป็นหลัก","PCO₂ ↑ → vasodilation · hyperventilation → PCO₂ ↓ → vasoconstriction",14,CV.vi],
 kidney:["Kidneys","Myogenic + tubuloglomerular feedback","รักษา GFR และ RBF ให้คงที่ในช่วงความดันกว้าง",22,CV.bl],lung:["Lungs","Hypoxia → vasoconstriction","ส่งเลือดไปถุงลมที่มีอากาศ (V/Q matching) · ตรงข้ามอวัยวะอื่น",100,CV.tl],
 muscle:["Skeletal muscle","Exercise: CO₂, H⁺, Adenosine, Lactate, K⁺ (CHALK)","ขณะพักคุมด้วย sympathetic tone · ออกกำลัง flow เพิ่มได้ ~20 เท่า",15,CV.or],skin:["Skin","Sympathetic vasoconstriction","กลไกหลักควบคุมอุณหภูมิกาย",6,CV.pk]};
function autoD(){const [n,m,s,pc,c]=ORG[ST.org];let b="";const A=AX(80,30,300,200,[0,220],[0,2],[0,50,100,150,200],[0,.5,1,1.5,2],"Perfusion pressure (mmHg)","Relative flow");b+=A.g;
 if(ST.org==="lung"){b+=SP(FN(A,p=>p/100,0,200),CV.mut,2,{dash:"5 4"})+SP(FN(A,p=>p/100*.45,0,200),CV.tl,3)+T(A.X(150),A.Y(.6),"alveolar hypoxia",{c:"s"})+T(A.X(150),A.Y(1.6),"passive",{c:"s m"})}
 else{const ar=p=>p<70?p/70*.95:p<=175?.95+(p-70)/105*.1:1.05+(p-175)/45*.6,pa=p=>p/100;
  b+=`<rect x="${A.X(70)}" y="30" width="${A.X(175)-A.X(70)}" height="200" style="fill:${tint(c,18)};opacity:.7"/>`+T(A.X(122),48,"autoregulatory range",{c:"s"});
  b+=SP(FN(A,pa,0,200),CV.mut,1.6,{dash:"5 4"})+SP(FN(A,ar,0,220),c,3.2)+T(A.X(205),A.Y(1.9),"passive tube",{a:"end",c:"s m"})}
 b+=RB(396,30,234,234,c,{p:11})+T(410,56,n,{a:"start",c:"bb"})+T(410,80,"กลไกหลัก",{a:"start",c:"s m"})+wrapT(410,100,m,30,"bh",17)+wrapT(410,164,s,32,"s",16);
 /* blood flow share */
 b+=T(80,300,"% ของ cardiac output ขณะพัก",{a:"start",c:"bh"});
 [["Liver/GI",27],["Kidneys",22],["Muscle",15],["Brain",14],["Skin",6],["Heart",4]].forEach(([o,v],i)=>{const x=80+i*92,h=v*4;b+=`<rect x="${x}" y="${436-h}" width="54" height="${h}" rx="8" style="fill:${tint(c,o.startsWith(n.split(" ")[0])||(n==="Kidneys"&&o==="Kidneys")||(n==="Skeletal muscle"&&o==="Muscle")?80:30)}"/>`+T(x+27,432-h,v+"%",{c:"s"})+T(x+27,454,o,{c:"s"})});
 return svg(b,"0 0 640 466")}

/* ---------- 11. capillary Starling forces ---------- */
function starfD(){const Pa=ST.pcap,Pv=Math.max(2,Pa-20),pic=ST.pic,pii=ST.pii,kf=ST.kf,Pi=-3;
 const Pc=x=>Pv+(Pa-Pv)*Math.pow(1-x,1.6),nfp=x=>(Pc(x)-Pi)-(pic-pii);let mean=0;for(let i=0;i<=50;i++)mean+=nfp(i/50)/51;const load=kf*mean;
 let b="";b+=FRAME(10,10,620,170)+T(24,32,"Interstitium",{a:"start",c:"s m"})+T(24,170,"Interstitium",{a:"start",c:"s m"});
 b+=`<rect x="70" y="72" width="500" height="54" rx="27" style="fill:${tint(CV.lv,18)};stroke:color-mix(in srgb,${CV.lv} 50%,transparent);stroke-width:1.5"/>`;
 b+=T(70,64,"arteriole end",{a:"start",c:"s"})+T(570,64,"venule end",{a:"end",c:"s"});
 for(let i=0;i<9;i++){const x=.06+i*.11,v=nfp(x),X=70+500*x,len=Math.min(36,Math.abs(v)*2.2*Math.sqrt(kf));if(Math.abs(v)<.6)continue;
  const c=v>0?CV.bad:CV.bl;if(v>0)b+=AW(X,72,X,72-len,c,2.2,{h:7})+AW(X,126,X,126+len,c,2.2,{h:7});else b+=AW(X,72-len,X,72,c,2.2,{h:7})+AW(X,126+len,X,126,c,2.2,{h:7})}
 b+=T(320,103,`Pc ${Pa} → ${Pv} · πc ${pic} · Pi −3 · πi ${pii}`,{c:"s"});
 /* NFP plot */
 const A=AX(80,206,330,170,[0,1],[-25,40],[],[-20,0,20,40],"along capillary →","Net filtration pressure",{yo:44});b+=A.g;
 const pts=[...Array(61)].map((_,i)=>[A.X(i/60),A.Y(nfp(i/60))]);b+=`<path d="M${A.X(0)},${A.Y(0)} L${pts.map(p=>p.map(z=>z.toFixed(1)).join(",")).join(" L")} L${A.X(1)},${A.Y(0)}Z" style="fill:${tint(CV.bad,30)};stroke:none"/>`;
 b+=`<clipPath id="neg"><rect x="80" y="${A.Y(0)}" width="330" height="200"/></clipPath><path clip-path="url(#neg)" d="M${A.X(0)},${A.Y(0)} L${pts.map(p=>p.map(z=>z.toFixed(1)).join(",")).join(" L")} L${A.X(1)},${A.Y(0)}Z" style="fill:${tint(CV.bl,45)}"/>`;
 b+=SP(PTS(pts),CV.ink,2.4)+SP(`M80,${A.Y(0)} H410`,CV.ink2,1.2)+T(A.X(.15),A.Y(32),"filtration",{c:"s"})+T(A.X(.85),A.Y(-18),"reabsorption",{c:"s"});
 /* balance */
 const ok=load<17;b+=RB(430,206,200,170,ok?CV.vol:CV.bad,{p:12})+T(444,230,"Mean net pressure",{a:"start",c:"s m"})+CT(444,262,`${f1c(mean)} mmHg`,CV.ink,{a:"start",s:20,wt:800})+T(444,284,`× Kf ${kf} → load ${f1c(load)}`,{a:"start",c:"s"});
 b+=`<rect x="444" y="298" width="170" height="14" rx="7" style="fill:var(--sb-surface2)"/><rect x="444" y="298" width="${Math.max(2,Math.min(170,load/25*170))}" height="14" rx="7" style="fill:${ok?CV.vol:CV.bad}"/>`+SP(`M${444+17/25*170},292 V318`,CV.ink2,1.4,{dash:"3 2"});
 b+=wrapT(444,336,ok?"lymphatics ระบายทัน → ไม่บวม":"เกิน safety margin (~17 mmHg) → edema",26,"bh",15);
 return svg(b,"0 0 640 400")}

/* ---------- 12. edema mechanisms ---------- */
function edemaD(){let b="";const tiles=[["↑ Pc","hydrostatic ↑","HF, venous obstruction, volume overload",CV.bad,"P"],["↑ Kf","permeability ↑","burns, sepsis, toxins, infection",CV.or,"K"],["↑ πi","lymphatic blockage","lymphatic obstruction, filariasis, หลังผ่าตัดต่อมน้ำเหลือง",CV.vi,"L"],["↓ πc","plasma protein ↓","nephrotic syndrome, cirrhosis, malnutrition",CV.bl,"A"]];
 tiles.forEach(([t,s,e,c,k],i)=>{const x=12+(i%2)*314,y=12+Math.floor(i/2)*212;b+=RB(x,y,302,200,c,{p:9})+T(x+16,y+30,t,{a:"start",c:"bb"})+T(x+16,y+50,s,{a:"start",c:"s m"});
  const cy=y+104;b+=`<rect x="${x+30}" y="${cy-18}" width="242" height="36" rx="18" style="fill:${tint(CV.lv,k==="A"?8:20)};stroke:color-mix(in srgb,${CV.lv} 45%,transparent)"/>`;
  if(k==="A")for(let j=0;j<3;j++)b+=DOT(x+90+j*60,cy,4,CV.bl,{sw:1});else for(let j=0;j<7;j++)b+=DOT(x+60+j*30,cy+(j%2?5:-5),4,CV.bl,{sw:1});
  if(k==="P")b+=T(x+286,y+30,"Pc สูงดันน้ำออก",{a:"end",c:"s"});
  if(k==="K")[0,1,2].forEach(j=>b+=`<rect x="${x+90+j*60}" y="${cy-20}" width="10" height="5" style="fill:var(--sb-surface)"/>`);
  if(k==="L")b+=SP(`M${x+240},${cy-50} C${x+250},${cy-70} ${x+270},${cy-70} ${x+280},${cy-60}`,CV.tl,6,{op:.6})+CT(x+262,cy-48,"✕",CV.bad,{s:16})+DOT(x+70,cy-48,4,CV.bl,{sw:1})+DOT(x+110,cy-52,4,CV.bl,{sw:1})+DOT(x+150,cy-46,4,CV.bl,{sw:1});
  [x+70,x+150,x+230].forEach(ax=>b+=AW(ax,cy-20,ax,cy-44,c,2.4,{h:7})+AW(ax,cy+20,ax,cy+44,c,2.4,{h:7}));
  b+=wrapT(x+16,y+168,e,40,"s",15)});
 return svg(b,"0 0 640 436")}

/* ---------- 13 (เสริม). coronary flow ---------- */
function corD(){let b="";const x0=80,w=520;const ao=MONO([[0,80],[.1,80],[.16,118],[.24,120],[.36,104],[.38,98],[.4,101],[.7,88],[.86,81],[1,80]]);
 const A=AX(x0,30,w,120,[0,1],[60,130],[],[80,120],"","Aortic P",{yo:40});b+=A.g.replace('class="plot"','class="plot" style="fill:none"')+`<rect x="${A.X(.1)}" y="30" width="${A.X(.38)-A.X(.1)}" height="380" style="fill:${tint(CV.lv,10)}"/>`+SP(FN(A,ao,0,1),CV.ao,2.6)+T(A.X(.24),46,"systole",{c:"s"})+T(A.X(.7),46,"diastole",{c:"s"});
 const B=AX(x0,180,w,110,[0,1],[-20,120],[],[0,50,100],"","Left coronary flow",{yo:40});b+=B.g.replace('class="plot"','class="plot" style="fill:none"');
 const lca=MONO([[0,70],[.08,72],[.12,20],[.16,-8],[.22,30],[.36,40],[.4,100],[.48,110],[.7,85],[1,70]]);b+=SP(FN(B,lca,0,1,200),CV.lv,3)+SP(`M${x0},${B.Y(0)} H${x0+w}`,CV.ink2,1,{dash:"3 3"});
 const C=AX(x0,316,w,90,[0,1],[0,80],[],[0,40,80],"one cardiac cycle","Right coronary",{yo:40});b+=C.g.replace('class="plot"','class="plot" style="fill:none"');
 const rca=MONO([[0,30],[.12,32],[.2,48],[.3,46],[.4,40],[.5,42],[.8,34],[1,30]]);b+=SP(FN(C,rca,0,1,200),CV.ra,3);
 b+=T(A.X(.15),B.Y(-12),"systolic compression",{a:"start",c:"s"})+T(A.X(.5),B.Y(115),"flow สูงสุดต้น diastole",{a:"start",c:"s"});
 return svg(b,"0 0 640 450")}

/* ================= sections (First Aid order) ================= */
SEC.push({id:"apv",k:"a",t:"Myocardial (ventricular) action potential",mm:"Ventricular AP",leg:[],tools:[["apv",[["ph","Phases"],["cur","Ion currents"],["ref","Refractory"],["sk","vs skeletal"]]]],draw:apvD,
notes:()=>`<h3>Phases (เซลล์ทั้งหมดยกเว้น SA และ AV node)</h3><table>
<tr><td>0</td><td>Rapid upstroke: voltage-gated fast Na⁺ channels เปิด</td></tr>
<tr><td>1</td><td>Initial repolarization: Na⁺ channels inactivate · transient outward K⁺ เริ่มเปิด</td></tr>
<tr><td>2</td><td>Plateau: Ca²⁺ เข้าทาง L-type สมดุลกับ K⁺ ออก · Ca²⁺ ที่เข้ากระตุ้น SR ปล่อย Ca²⁺ → หดตัว</td></tr>
<tr><td>3</td><td>Rapid repolarization: slow delayed-rectifier K⁺ เปิด + Ca²⁺ channel ปิด</td></tr>
<tr><td>4</td><td>Resting: K⁺ permeability สูง</td></tr></table><p>${S.fa}</p>
<h3>ต่างจาก skeletal muscle</h3><ul>
<li>AP มี <b>plateau</b> จาก Ca²⁺ เข้าและ K⁺ ออกสมดุลกัน · ventricle AP ยาว ~0.2–0.3 s ${S.fa} ${S.g}</li>
<li>การหดตัวต้องมี Ca²⁺ จาก ECF ไปกระตุ้น Ca²⁺-induced Ca²⁺ release จาก SR ${S.fa}</li>
<li>Myocytes ส่งสัญญาณต่อกันผ่าน <b>gap junctions</b> ที่ intercalated disc ${S.fa} ${S.g}</li>
<li>Refractory period ของ ventricle ~0.25–0.30 s (atria ~0.15 s) · relative refractory อีก ~0.05 s ${S.g}</li>
<li>Resting potential ของ atrial/ventricular myocyte ~−80 ถึง −90 mV ใกล้ E_K เพราะ I_K1 (inward rectifier) เปิดตลอด phase 4 ${S.b}</li></ul>`});
SEC.push({id:"app",k:"a",t:"Pacemaker action potential",mm:"Pacemaker AP · I_f",leg:[],tools:[["pm",[["n","Normal"],["sym","Sympathetic"],["vag","Vagal / adenosine"]]]],draw:appD,
notes:()=>`<ul><li>เกิดที่ <b>SA และ AV node</b> · ไม่มี phase 1 และ 2 ${S.fa}</li>
<li><b>Phase 4</b> = slow diastolic depolarization จาก <b>I_f</b> (funny current) ผ่าน <b>HCN channels</b> ซึ่งเป็น Na⁺/K⁺ inward current ที่เปิดเมื่อ hyperpolarize (คนละตัวกับ I_Na ใน phase 0 ของ ventricle) → automaticity ${S.fa} ${S.b}</li>
<li><b>Slope ของ phase 4</b> ใน SA node กำหนด HR · ACh/adenosine ลด slope → HR ↓ · catecholamines เพิ่ม slope → HR ↑ (sympathetic ทำให้ HCN เปิดบ่อยขึ้น) ${S.fa}</li>
<li><b>Phase 0</b> = Ca²⁺ channels เปิด · fast Na⁺ channels inactivate ถาวรเพราะ resting ไม่ลบพอ (~−55 ถึง −60 mV) → นำไฟฟ้าช้า ซึ่ง AV node ใช้หน่วงสัญญาณจาก atria ไป ventricles ${S.fa} ${S.g}</li>
<li><b>Phase 3</b> = Ca²⁺ channels inactivate + K⁺ channels เปิด ${S.fa}</li>
<li>Threshold ของ SA node ~−40 mV · SA node ยิงเองที่ 70–80/นาที · AV node 40–60 · Purkinje 15–40 → SA กดตัวอื่นไว้ (overdrive) ${S.g}</li>
<li>Vagal: ACh เปิด K⁺ channel (I_K,ACh) → hyperpolarize + ลด slope ${S.g} ${S.b}</li></ul>`});
SEC.push({id:"ecg",k:"a",t:"Conduction system & the ECG",mm:"Conduction · ECG waves",leg:[],tools:[["seg",[["p","P"],["pr","PR"],["qrs","QRS"],["st","ST"],["t","T"],["qt","QT"]]]],draw:ecgD,
notes:()=>`<h3>ทางเดินไฟฟ้า</h3><ul>
<li>SA node → atria → AV node → bundle of His → right/left bundle branch (left แยก anterior และ posterior fascicle) → Purkinje → ventricles ${S.fa}</li>
<li><b>SA node</b>: upper crista terminalis ใกล้ SVC · เป็น pacemaker หลัก ${S.fa}</li>
<li><b>AV node</b>: interatrial septum ใกล้ coronary sinus opening · เลือดมาจาก PDA · หน่วง ~100 ms ให้ ventricle เติมเลือด ${S.fa}</li>
<li>Guyton: ไฟถึง AV node ~0.03 s · หน่วงใน AV node 0.09 s + penetrating bundle 0.04 s → รวม ~0.16 s ก่อนถึง ventricle ${S.g}</li>
<li>Pacemaker rate: SA > atria > AV > His/Purkinje/ventricles · ความเร็ว: His–Purkinje > atria > ventricles > AV node (“He Parks At Ventura AVenue”) ${S.fa}</li></ul>
<h3>คลื่นและช่วง</h3><table>
<tr><td>P</td><td>atrial depolarization</td></tr><tr><td>PR interval</td><td>120–200 ms</td></tr><tr><td>QRS</td><td>ventricular depolarization ≤ 100 ms</td></tr>
<tr><td>J point</td><td>รอยต่อปลาย QRS กับต้น ST</td></tr><tr><td>ST segment</td><td>isoelectric · ventricles depolarize หมด</td></tr>
<tr><td>T</td><td>ventricular repolarization · inverted อาจเป็น ischemia หรือ MI ใหม่</td></tr><tr><td>QT</td><td>depolarization + contraction + repolarization ของ ventricle</td></tr>
<tr><td>U</td><td>เด่นใน hypokalemia (“hyp-U-kalemia”), bradycardia</td></tr></table><p>${S.fa}</p>
<ul><li>Atrial repolarization ไม่เห็นเพราะถูก QRS บัง · QT ปกติราว 0.35 s ที่ HR 72 ${S.g}</li></ul>`});
SEC.push({id:"refr",k:"a",t:"Refractory periods & conduction velocity",mm:"Refractoriness · speed",leg:[],ctrl:()=>SL("stim","Stimulus at",20,600,10,"ms"),wire:()=>WIRE(),draw:refrD,
notes:()=>`<ul><li><b>Effective (absolute) refractory period</b>: Na⁺ channels ยัง inactivate อยู่ → ไม่เกิด AP ที่แพร่ไปได้ · กินเกือบทั้ง phase 0–3 ${S.fa} ${S.g}</li>
<li><b>Relative refractory</b>: ปลาย phase 3 · ต้องกระตุ้นแรงกว่าปกติ ได้ AP เล็ก upstroke ช้า นำไฟช้า (พื้นฐานของ reentry) ${S.g} ${S.b}</li>
<li>ERP ยาวพอๆ กับการหดตัว → หัวใจไม่เกิด tetanus และได้คลายตัวเติมเลือดทุกรอบ ${S.g}</li>
<li>Conduction velocity (m/s): Purkinje ~4 · atrial pathways และ His ~1 · ventricular muscle ~0.3–1 · SA และ AV node ~0.05 ${S.b} ${S.g}</li>
<li>Purkinje เร็วเพราะเซลล์ใหญ่ มี gap junction มาก และใช้ I_Na · AV node ช้าเพราะใช้ Ca²⁺ upstroke และ gap junction น้อย ${S.g} ${S.b}</li>
<li>ยา class I และ III (antiarrhythmics) ยืด ERP หรือชะลอ phase 0 เพื่อตัดวงจร reentry ${S.x}</li></ul>
<div class="pearl">เลื่อน slider เวลาที่กระตุ้นซ้ำ: ก่อน ~250 ms ไม่มี AP · ช่วง RRP ได้ AP เล็ก · หลังจากนั้นได้ AP เต็ม</div>`});
SEC.push({id:"ecgread",k:"a",t:"ECG leads, axis & rate",mm:"Leads · axis · rate",leg:[],tools:[["axis",[["n","Normal"],["lad","LAD"],["rad","RAD"],["ext","Extreme"]]]],draw:axD,
notes:()=>`<ul><li>12 leads: limb leads I, II, III (bipolar, Einthoven triangle), aVR, aVL, aVF (augmented unipolar) และ precordial V1–V6 ${S.g}</li>
<li>กระดาษมาตรฐาน 25 mm/s: ช่องเล็ก 0.04 s · ช่องใหญ่ 0.20 s · 1 mV = 10 mm ${S.g}</li>
<li>Mean electrical axis ปกติราว +59° ในตำรา · ค่าปกติทางคลินิก −30° ถึง +90° ${S.g} ${S.h}</li>
<li>ดูเร็วด้วย lead I และ aVF: ทั้งคู่บวก = ปกติ · I บวก aVF ลบ = left axis · I ลบ aVF บวก = right axis ${S.x}</li>
<li>Left axis deviation: LVH, left anterior fascicular block · right axis: RVH, left posterior fascicular block, cor pulmonale ${S.g} ${S.h}</li></ul>`});
SEC.push({id:"natri",k:"b",t:"Natriuretic peptides (ANP & BNP)",mm:"ANP · BNP",leg:[],draw:natD,
notes:()=>`<ul><li><b>ANP</b>: หลั่งจาก atrial myocytes เมื่อ blood volume และ atrial pressure ↑ · ออกฤทธิ์ผ่าน <b>cGMP</b> ${S.fa}</li>
<li>ผล: vasodilation · ลดการดูด Na⁺ ที่ collecting tubule · ขยาย afferent หด efferent → GFR ↑ → diuresis · ส่วนหนึ่งของ “aldosterone escape” ${S.fa}</li>
<li><b>BNP</b>: หลั่งจาก ventricular myocytes เมื่อถูกยืด (tension) · ฤทธิ์คล้าย ANP แต่ half-life ยาวกว่า · ใช้วินิจฉัย HF (<b>negative predictive value สูงมาก</b>) ${S.fa}</li>
<li>ANP ยับยั้งการหลั่ง renin และ aldosterone · ร่วมกับ atrial stretch reflex ช่วยขับน้ำส่วนเกิน ${S.b} ${S.g}</li>
<li>Natriuretic peptides ถูกทำลายโดย neprilysin → ยา sacubitril ยับยั้ง neprilysin ใช้ใน HFrEF ${S.x}</li></ul>`});
SEC.push({id:"baro",k:"b",t:"Baroreceptors & chemoreceptors",mm:"Baro- & chemoreflex",leg:[],tools:[["bar",[["hypo","Hypotension"],["hyper","Hypertension"],["csm","Carotid massage"],["cush","Cushing reflex"],["chemo","Hypoxemia"]]]],draw:baroD,
notes:()=>`<h3>Receptors</h3><ul>
<li><b>Aortic arch</b> → vagus (X) → nucleus tractus solitarius (NTS) ของ medulla ${S.fa}</li>
<li><b>Carotid sinus</b> (ส่วนโป่งเหนือ bifurcation) → Hering nerve → glossopharyngeal (IX) → NTS ${S.fa} ${S.g}</li>
<li>Baroreceptor ไวสุดรอบ MAP ปกติ ทำงานช่วง ~60–180 mmHg และปรับตัว (reset) ภายใน 1–2 วันถ้าความดันเปลี่ยนค้าง → ไม่ใช่ตัวคุมความดันระยะยาว ${S.g}</li></ul>
<h3>Reflex</h3><ul>
<li><b>Hypotension</b>: stretch ↓ → afferent firing ↓ → efferent sympathetic ↑ + parasympathetic ↓ → vasoconstriction, HR ↑, contractility ↑ → BP ↑ · สำคัญใน hypovolemic shock ${S.fa}</li>
<li><b>Carotid sinus hypersensitivity</b>: กด carotid (นวด, โกนหนวด, คอเสื้อแน่น) → firing ↑ → AV node refractory ↑, HR ↓, CO ↓ + vasodilation → presyncope/syncope · พบมากใน atherosclerosis, เคยผ่าตัดคอ, สูงอายุ ${S.fa}</li>
<li><b>Cushing reflex</b> (HTN + bradycardia + respiratory depression): ICP ↑ → arterioles ถูกกด → สมองขาดเลือด → PCO₂ ↑ pH ↓ → central sympathetic ↑ → BP ↑ → baroreceptor → bradycardia ${S.fa}</li>
<li>Bainbridge reflex: atrial stretch (volume load) → HR ↑ ช่วยป้องกันเลือดคั่งในหัวใจ ${S.b} ${S.g}</li></ul>
<h3>Chemoreceptors</h3><ul>
<li><b>Peripheral</b> (carotid และ aortic bodies): ไวต่อ PCO₂ ↑, pH ↓ และ PO₂ < 60 mmHg ${S.fa}</li>
<li><b>Central</b>: ไวต่อ pH และ PCO₂ ของ brain interstitial fluid (CO₂ ผ่าน BBB ได้แต่ H⁺ ไม่ได้) · ไม่ตอบสนองต่อ PO₂ · ใน hypercapnia เรื้อรัง (COPD) ไวลด → พึ่ง peripheral (O₂ ต่ำ) ในการขับการหายใจ ${S.fa}</li>
<li>Chemoreceptors ช่วยกระตุ้น vasomotor center เมื่อ BP < 80 mmHg · CNS ischemic response ทำงานเมื่อ BP < 60 ${S.g}</li></ul>`});
SEC.push({id:"press",k:"b",t:"Normal cardiac pressures & PCWP",mm:"Pressures · Swan-Ganz",leg:[],tools:[["cath",[["ra","RA"],["rv","RV"],["pa","PA"],["wedge","Wedge"]]]],draw:pressD,
notes:()=>`<ul><li>ค่าปกติ (mmHg): RA < 5 · RV 25/< 5 · PA 25/8–10 · PCWP 4–12 · LA < 12 · LV 120/< 12 · aorta 120/80 ${S.fa} ${S.g}</li>
<li><b>PCWP</b> ใช้ประมาณ <b>LA pressure</b> ได้ดี ยกเว้น <b>mitral stenosis</b> ที่ PCWP > LV end-diastolic pressure ${S.fa}</li>
<li>วัดด้วย pulmonary artery (Swan-Ganz) catheter: ใส่ผ่าน RA → RV → PA แล้วจุด balloon ให้อุดแขนงเล็ก (wedge) ${S.fa}</li>
<li>ความดันในปอดต่ำมากเทียบ systemic: mean PA ~16 · pulmonary capillary ~7 mmHg ${S.g}</li>
<li>ที่ปลายสาย (bedside) JVP เป็น cm H₂O: 1.36 cm H₂O = 1 mmHg ${S.h}</li></ul>`});
SEC.push({id:"longbp",k:"b",t:"Long-term BP control: pressure natriuresis",mm:"Renal–body fluid control",leg:[],tools:[["kid",[["n","Normal kidney"],["ckd","Impaired kidney"]]]],ctrl:()=>SL("salt","Salt intake",1,6,.5,"× normal"),wire:()=>WIRE(),draw:longD,
notes:()=>`<ul><li>ความดันระยะยาวถูกกำหนดโดยไต: ความดันสูงขึ้น → ขับ Na⁺ และน้ำมากขึ้น (<b>pressure natriuresis/diuresis</b>) จน output = intake ที่ <b>equilibrium point</b> ${S.g}</li>
<li>Baroreflex ตอบสนองเร็วแต่ reset ได้ · กลไกไต–ของเหลวชดเชยได้ไม่จำกัด (infinite gain) ในระยะยาว ${S.g}</li>
<li>Angiotensin II ทำให้ renal output curve ชันมาก: กินเกลือเพิ่มหลายเท่า ความดันขยับแค่ไม่กี่ mmHg ถ้า RAAS ปรับลดได้ ${S.g}</li>
<li>ถ้าไตเสียหรือ RAAS ไม่ลดตาม (เช่น aldosteronism) curve เลื่อนขวาและแบน → ความดันขึ้นตามเกลือ (salt-sensitive) ${S.g}</li>
<li>TPR ที่เพิ่มขึ้นอย่างเดียวโดยไตปกติ ไม่ทำให้ความดันสูงระยะยาว · ต้องมีการเปลี่ยน renal output curve ร่วม ${S.g}</li></ul>`});
SEC.push({id:"autoreg",k:"c",t:"Autoregulation of blood flow by organ",mm:"Autoregulation",leg:[],tools:[["org",[["heart","Heart"],["brain","Brain"],["kidney","Kidneys"],["lung","Lungs"],["muscle","Muscle"],["skin","Skin"]]]],draw:autoD,
notes:()=>`<ul><li><b>Autoregulation</b>: flow ไปอวัยวะคงที่ในช่วง perfusion pressure กว้าง (ทั่วไป ~70–175 mmHg) ${S.fa} ${S.g}</li>
<li>สองทฤษฎี: <b>metabolic</b> (ขาด O₂ หรือมี metabolite เช่น adenosine, CO₂, H⁺, K⁺ → arteriole ขยาย) และ <b>myogenic</b> (ผนังถูกยืด → smooth muscle หด) ${S.g}</li></ul>
<table><tr><th>อวัยวะ</th><th>ตัวกำหนด</th></tr><tr><td>Lungs</td><td>hypoxia → vasoconstriction</td></tr><tr><td>Heart</td><td>local metabolites: NO, CO₂, O₂ ↓ (adenosine)</td></tr>
<tr><td>Brain</td><td>CO₂ (pH)</td></tr><tr><td>Kidneys</td><td>myogenic (afferent) + tubuloglomerular feedback</td></tr>
<tr><td>Skeletal muscle</td><td>ออกกำลัง: CO₂, H⁺, Adenosine, Lactate, K⁺ (CHALK) · พัก: sympathetic tone</td></tr><tr><td>Skin</td><td>sympathetic vasoconstriction · คุมอุณหภูมิ</td></tr></table><p>${S.fa}</p>
<ul><li>ปอดตรงข้ามอวัยวะอื่น: hypoxia ทำให้หดตัว เพื่อส่งเลือดไปถุงลมที่ระบายอากาศดี ${S.fa}</li>
<li><b>Reactive hyperemia</b> (flow พุ่งหลังปล่อยการอุดหลอดเลือด) และ <b>active hyperemia</b> (flow ↑ ตาม metabolism) เป็นหลักฐานของ metabolic control ${S.g}</li>
<li>Basal flow: liver/GI ~27% · kidneys ~22% · muscle ~15% · brain ~14% · skin ~6% · heart ~4% ของ CO ${S.g}</li></ul>`});
SEC.push({id:"starlingf",k:"c",t:"Capillary fluid exchange (Starling forces)",mm:"Starling forces",leg:[],ctrl:()=>SL("pcap","Pc arterial end",15,60,1,"mmHg")+SL("pic","πc",10,35,1,"mmHg")+SL("pii","πi",0,20,1,"mmHg")+SL("kf","Kf",1,4,.5,"×"),wire:()=>WIRE(),draw:starfD,
notes:()=>`<h3>สมการ</h3><ul>
<li><b>Jv = Kf [(Pc − Pi) − σ(πc − πi)]</b> ${S.fa}</li>
<li>Pc ดันน้ำออก · Pi ดันเข้า · πc ดึงเข้า · πi ดึงออก · Kf = permeability ต่อน้ำ · σ = reflection coefficient (ความทึบต่อโปรตีน) ${S.fa}</li>
<li>ค่าทั่วไป (Guyton): Pc functional ~17 · Pi ~−3 · πc ~28 (albumin ~80%) · πi ~8 → net ~+0.3 mmHg → กรองออกเล็กน้อยกลับทาง lymph ${S.g}</li>
<li>Pc ลดจาก ~35 ด้าน arteriole เหลือ ~15 ด้าน venule → ต้น capillary กรองออก ปลาย capillary ดูดกลับ ${S.b}</li>
<li>ปัจจุบันเชื่อว่าการดูดกลับปลาย capillary มีน้อยกว่าที่คิด (glycocalyx model) · lymph จึงสำคัญในการเก็บน้ำกลับ ${S.b}</li></ul>
<div class="pearl">ลองเพิ่ม Pc (heart failure) หรือลด πc (nephrotic) จนแถบ load เกินเส้นประ → บวม</div>`});
SEC.push({id:"edema",k:"c",t:"Edema: mechanisms & safety factors",mm:"Edema",leg:[],draw:edemaD,
notes:()=>`<ul><li>Edema = ของเหลวไหลออกสู่ interstitium มากเกิน ${S.fa}</li>
<li>สาเหตุ: <b>↑ Pc</b> (HF) · <b>↑ Kf</b> (toxins, infection, burns) · <b>↑ πi</b> (lymphatic blockage) · <b>↓ πc</b> (nephrotic syndrome, liver failure, protein malnutrition) ${S.fa}</li>
<li>Safety factors ป้องกันบวม รวม ~17 mmHg: compliance ต่ำของ interstitium ตอนความดันติดลบ (~3) · lymph flow เพิ่มได้ 10–50 เท่า (~7) · washdown โปรตีนใน interstitium (~7) ${S.g}</li>
<li>Pitting edema ที่ไม่มี JVP สูง ให้นึกถึง albumin ต่ำ (nephrotic, ตับ), venous insufficiency หรือ dihydropyridine CCB ${S.h}</li></ul>`});
SEC.push({id:"coronary",k:"c",t:"Coronary circulation",mm:"Coronary flow",leg:[],draw:corD,
notes:()=>`<ul><li>Coronary flow ขณะพัก ~225 mL/min (~4–5% ของ CO) ${S.g}</li>
<li>Left coronary ไหลมากช่วง <b>diastole</b> เพราะช่วง systole กล้ามเนื้อ LV บีบหลอดเลือด · right coronary ถูกบีบน้อยกว่า ${S.g}</li>
<li><b>Subendocardium</b> ถูกบีบมากที่สุด → เสี่ยงขาดเลือดก่อน · HR สูงลดเวลา diastole → perfusion ลด ${S.g}</li>
<li>หัวใจดึง O₂ ~70% แม้ขณะพัก จึงเพิ่ม O₂ ได้ด้วยการเพิ่ม flow · metabolic vasodilation ผ่าน <b>adenosine</b> (จาก ATP breakdown) เป็นหลัก ${S.g} ${S.b}</li>
<li>Coronary steal: vasodilator (dipyridamole, adenosine) ขยายเฉพาะหลอดปกติ → เลือดไหลออกจากบริเวณตีบ → ใช้ใน pharmacologic stress test ${S.x}</li></ul>`});

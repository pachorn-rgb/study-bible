/* ================= Cardiovascular Pathology II · Ischemic heart disease & arrhythmias =================
   First Aid Step 1 2025 (CV pathology, pp. 308–315) order · Robbins & Cotran 10e Ch 12 (ischemic heart disease, arrhythmias)
   FA Step 2 CK (ACS work-up) · Harrison 22e (AF stroke prevention) · drawings are original schematics. */
//@include _cvs-patho-helpers.js
Object.assign(GN,{a:"Coronary artery disease",b:"Myocardial infarction",c:"Arrhythmias",d:"MI complications & ACS care"});
Object.assign(ST,{st:"base",mt:3,md:1,loc:"inf",nr:"af",wd:"vt",bk:"m1",cp:"pap",ap:"stemi",c1:false,h1:true,a2:false,d1:false,s2:false,v1:false,a1:true,sc:false});

/* ---------- small ECG builders ---------- */
const runBeats=(ts,o)=>ts.flatMap((t,i)=>beat(t,typeof o==="function"?o(i):o||{}));
function oneBeat(o={}){return beat(.42,o)}
function mini(x,y,w,h,lab,o={},hot){return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7" style="fill:${hot?"#FFE9E3":"#FFF6F6"};stroke:${hot?"#E2604B":"#F2C9C9"};stroke-width:${hot?1.6:1}"/>`+
 trace(ecgPath(oneBeat(o),x+3,y+h*.64,w-6,h*.9,.9,{n:260}))+TD(x+6,y+12,lab,{a:"start",s:9.5,w:700})}

/* ---------- 1. angina → STEMI spectrum ---------- */
function cadD(){const C=[["Stable angina","ออกแรง · พักหาย","ไม่ขึ้น",0,{st:-.12},"#3E9E6B"],["Unstable angina","ออกแรงน้อย / พัก","ไม่ขึ้น",0,{st:-.16,inv:true},"#C28A12"],["NSTEMI","ขณะพัก","ขึ้น",1,{st:-.22,inv:true},"#D9692F"],["STEMI","ขณะพัก","ขึ้น",2,{st:.42},"#C2493A"]];
 let b="";C.forEach(([n,pain,tn,inf,ecg,c],i)=>{const x=4+i*159,w=152;
  b+=`<rect x="${x}" y="6" width="${w}" height="318" rx="14" style="fill:color-mix(in srgb,${c} 8%,var(--sb-surface));stroke:color-mix(in srgb,${c} 45%,transparent)"/>`+`<path d="M${x},${36} V${20} a14,14 0 0 1 14,-14 H${x+w-14} a14,14 0 0 1 14,14 V36Z" style="fill:${c}"/>`+`<text x="${x+w/2}" y="27" text-anchor="middle" style="font:750 12px var(--sb-font);fill:#fff">${n}</text>`;
  b+=T(x+12,58,"Pain",{a:"start",c:"s m"})+T(x+12,74,pain,{a:"start",c:"s"});
  b+=T(x+12,98,"Troponin",{a:"start",c:"s m"})+tag(x+w-40,94,tn,tn==="ขึ้น"?"var(--sb-bad)":"#7C8798",{w:52});
  /* LV short-axis ring */
  const cx=x+w/2,cy=168,R=46,r=26;b+=`<circle cx="${cx}" cy="${cy}" r="${R}" style="fill:var(--a-musc)"/><circle cx="${cx}" cy="${cy}" r="${r}" style="fill:color-mix(in srgb,var(--a-art) 30%,var(--sb-surface))"/>`;
  if(inf===1)b+=`<path d="M${cx+r*Math.cos(-2.4)},${cy+r*Math.sin(-2.4)} A${r},${r} 0 0 1 ${cx+r*Math.cos(-.4)},${cy+r*Math.sin(-.4)} L${cx+36*Math.cos(-.4)},${cy+36*Math.sin(-.4)} A36,36 0 0 0 ${cx+36*Math.cos(-2.4)},${cy+36*Math.sin(-2.4)}Z" style="fill:#F2E3A6;stroke:#B08A2E;stroke-width:1"/>`;
  if(inf===2)b+=`<path d="M${cx+r*Math.cos(-2.4)},${cy+r*Math.sin(-2.4)} A${r},${r} 0 0 1 ${cx+r*Math.cos(-.4)},${cy+r*Math.sin(-.4)} L${cx+R*Math.cos(-.4)},${cy+R*Math.sin(-.4)} A${R},${R} 0 0 0 ${cx+R*Math.cos(-2.4)},${cy+R*Math.sin(-2.4)}Z" style="fill:#F2E3A6;stroke:#B08A2E;stroke-width:1"/>`;
  b+=T(cx,cy+64,inf===0?"ไม่มี infarct":inf===1?"subendocardial":"transmural",{c:"s"});
  b+=strip(x+10,248,w-20,64,oneBeat(ecg),.9,{n:300,base:.6});
  b+=TD(x+w/2,306,ecg.st>0?"ST elevation → Q":ecg.inv?"ST ↓ / T inversion":"ST ↓ (เฉพาะตอนเจ็บ)",{s:9.5})});
 return hsvg(b,"0 0 640 330")}

/* ---------- 2. coronary steal ---------- */
function stealD(){const vd=ST.st==="vd";let b="";
 const tube=(d,c,w)=>`<path d="${d}" style="stroke:var(--a-edge);stroke-width:${w+2.4};fill:none;stroke-linecap:round"/><path d="${d}" style="stroke:${c};stroke-width:${w};fill:none;stroke-linecap:round"/>`;
 b+=tube("M60,170 L200,170",CV.ox,26)+T(60,140,"coronary",{a:"start",c:"s m"});
 b+=tube("M200,170 C250,170 260,90 330,90",CV.ox,18)+tube("M200,170 C250,170 260,250 330,250",CV.ox,18);
 b+=`<path d="M276,236 C286,246 286,256 276,264 M300,236 C292,246 292,256 300,264" style="stroke:var(--a-musc);stroke-width:7;fill:none"/>`+tag(288,288,"stenosis","var(--sb-bad)",{w:70});
 const bed=(y,wN,col,lab)=>{let g="";for(let k=0;k<5;k++){const yy=y-44+k*22;g+=tube(`M330,${y} C360,${y} 360,${yy} 392,${yy}`,col,wN)+`<path d="M392,${yy} L470,${yy}" style="stroke:${col};stroke-width:${wN};opacity:.7;stroke-linecap:round"/>`}
  return g+`<rect x="474" y="${y-60}" width="150" height="120" rx="14" style="fill:${lab[1]};stroke:var(--sb-line)"/>`+T(549,y-4,lab[0],{c:"bh"})+T(549,y+14,lab[2],{c:"s"})};
 const top=vd?7:3,bot=7;
 b+=bed(90,top,CV.ox,["normal bed",vd?"color-mix(in srgb,var(--a-art) 26%,var(--sb-surface))":"color-mix(in srgb,var(--a-art) 14%,var(--sb-surface))",vd?"arteriole ขยายใหม่":"arteriole ยังหดตัว"]);
 b+=bed(250,bot,CV.ox,["post-stenotic bed",vd?"color-mix(in srgb,#9AA3B5 40%,var(--sb-surface))":"color-mix(in srgb,var(--a-art) 14%,var(--sb-surface))",vd?"ischemia (steal)":"ขยายสุดแล้วตั้งแต่ต้น"]);
 const fN=vd?78:50,fS=vd?22:50;
 b+=Ar(214,130,300,80,CV.acc,2+fN/12,{cx:240,cy:90})+T(232,70,`flow ${fN}%`,{c:"bh"});
 b+=Ar(214,212,300,262,CV.acc,2+fS/12,{cx:240,cy:252})+T(214,300,`flow ${fS}%`,{c:"bh"});
 b+=T(20,30,vd?"ให้ vasodilator (adenosine, dipyridamole, regadenoson)":"Baseline",{a:"start",c:"bb"})+T(20,48,vd?"หลอดปกติขยาย → แรงดันลด → เลือดถูกดึงไปจาก bed ที่ตีบ":"หลอดหลังรอยตีบขยายเต็มที่เพื่อชดเชยอยู่แล้ว",{a:"start",c:"s m"});
 return hsvg(b,"0 0 640 320")}

/* ---------- 3. SCD & chronic IHD ---------- */
function scdD(){let b="";
 b+=T(10,22,"Sudden cardiac death: สาเหตุ",{a:"start",c:"bh"});
 b+=T(10,52,"Coronary artery disease",{a:"start",c:"bh"})+`<rect x="10" y="62" width="300" height="24" rx="8" style="fill:var(--sb-surface2)"/><rect x="10" y="62" width="210" height="24" rx="8" style="fill:${CV.ox}"/>`+T(115,78,"สูงถึง ~70%",{c:"s w"});
 const C=[["Cardiomyopathy","hypertrophic · dilated",CV.violet],["Myocarditis","สำคัญในคนอายุ < 40",CV.gold],["Coronary anomalies","",CV.teal],["Channelopathies","long QT · Brugada","#0B83B5"]];
 C.forEach(([n,s,c],i)=>{const y=106+i*36;b+=`<circle cx="18" cy="${y+6}" r="5" style="fill:${c}"/>`+T(30,y+10,n,{a:"start",c:"s"})+T(300,y+10,s,{a:"end",c:"s m"})});
 b+=`<rect x="10" y="256" width="300" height="56" rx="14" style="fill:color-mix(in srgb,var(--sb-bad) 10%,var(--sb-surface));stroke:color-mix(in srgb,var(--sb-bad) 45%,transparent)"/>`+T(24,278,"กลไกสุดท้าย: VT → VF",{a:"start",c:"bh"})+T(24,296,"ป้องกันด้วย ICD ในผู้เสี่ยงสูง",{a:"start",c:"s"});
 b+=strip(330,6,304,76,[[0,0,1]],2.2,{fib:t=>.42*Math.sin(2*Math.PI*5.6*t+Math.sin(t*9))*(.6+.4*Math.sin(t*3.1))+.12*Math.sin(2*Math.PI*9.3*t),n:500,base:.5,lab:"VF"});
 b+=cardBox(330,96,304,104,"Myocardial hibernation",["LV บีบตัวลดลงจาก ischemia เรื้อรัง (เลือดไม่พอนาน)","กลับดีได้หลัง revascularization"],CV.dx);
 b+=cardBox(330,208,304,104,"Myocardial stunning",["LV บีบตัวลดชั่วคราวหลัง ischemia สั้นๆ แล้วเลือดกลับมา","ฟื้นเองในหลายชั่วโมงถึงวัน"],CV.teal);
 return hsvg(b,"0 0 640 322")}

/* ---------- 4. MI evolution (time slider) ---------- */
const MT=[["0–½ ชม.","ยังไม่เห็นอะไร (EM: glycogen หาย, mito บวม)","ไม่เห็น","#B5545C","arrhythmia · HF · cardiogenic shock"],
 ["½–4 ชม.","wavy fibers ที่ขอบ (EM: sarcolemma ขาด)","ไม่เห็น (TTC ซีดได้หลัง 2–3 ชม.)","#B5545C","ventricular arrhythmia (ตายก่อนถึง รพ.)"],
 ["4–12 ชม.","early coagulative necrosis · edema · hemorrhage","dark mottling บางครั้ง","#8E3B4E","arrhythmia · HF · cardiogenic shock"],
 ["12–24 ชม.","pyknosis · hypereosinophilia · contraction band · neutrophil เริ่มมา","dark mottling","#7E3346","arrhythmia · HF · cardiogenic shock"],
 ["1–3 วัน","coagulative necrosis เต็มที่ · neutrophils หนาแน่น","mottling ศูนย์กลางเหลือง-น้ำตาล","#B98A4A","fibrinous pericarditis"],
 ["3–7 วัน","fibers สลาย · macrophage เริ่มกิน","ขอบ hyperemic · กลางนุ่มเหลือง","#D7B05A","papillary / septal / free wall rupture"],
 ["7–10 วัน","phagocytosis เต็มที่ · granulation tissue ที่ขอบ","เหลืองนุ่มที่สุด ขอบแดงยุบ","#E0C060","free wall rupture · pseudoaneurysm"],
 ["10–14 วัน","granulation tissue + เส้นเลือดใหม่ + collagen","ขอบแดง-เทา ยุบ","#B8828C","free wall rupture · pseudoaneurysm"],
 ["2–8 สัปดาห์","collagen ↑ เซลล์ ↓","แผลเป็นเทาขาว จากขอบเข้ากลาง","#C9C3CE","Dressler · HF · arrhythmia"],
 ["> 2 เดือน","dense collagen scar","แผลเป็นขาว ผนังบาง","#E9E6EE","true aneurysm · mural thrombus · HF"]];
function myo(x,y,w,h,st){let b=`<clipPath id="cm${st}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10"/></clipPath><g clip-path="url(#cm${st})">`+`<rect x="${x}" y="${y}" width="${w}" height="${h}" style="fill:${st>=7?"#F4DDE6":HE.bg}"/>`;
 const r=rng(40+st),rows=9,rh=h/rows,eo=st>=2&&st<=5;
 const fib=st<=8?(st>=8?.45:st>=7?.7:1):0;
 for(let i=0;i<rows;i++){const yy=y+i*rh+rh/2;const wav=st===1?4:st===3?1.5:0;let d=`M${x-5},${yy}`;for(let xx=x;xx<=x+w+10;xx+=10)d+=` L${xx},${(yy+wav*Math.sin(xx/12+i)).toFixed(1)}`;
  if(st<=6&&!(st===5&&i%3===1)||st>=7&&i%2===0&&st<9){const col=st===0||st===1?HE.cy:eo?HE.cyX:"#EBA5BE";b+=`<path d="${d}" style="fill:none;stroke:${col};stroke-width:${rh*.68*(st>=7?fib:1)};stroke-linecap:round;opacity:${st>=6?.75:1}"/>`;
   if(st<=1)for(let xx=x+6;xx<x+w;xx+=7)b+=`<path d="M${xx},${yy-rh*.25} l0,${rh*.5}" style="stroke:${HE.mem};stroke-width:.6;opacity:.35"/>`;
   if(st===3)for(let xx=x+20+i*7%30;xx<x+w;xx+=48)b+=`<path d="M${xx},${yy-rh*.3} l0,${rh*.6}" style="stroke:#B0204F;stroke-width:3"/>`;
   if(st<=2)for(let xx=x+18+(i*13)%40;xx<x+w;xx+=60)b+=`<ellipse cx="${xx}" cy="${yy}" rx="6" ry="2.6" style="fill:${HE.nu}"/>`;
   if(st===3)for(let xx=x+18+(i*13)%40;xx<x+w;xx+=60)b+=dot(xx,yy,2.4,HE.nuD);}
 }
 if(st===2||st===3)for(let k=0;k<14;k++)b+=dot(x+r()*w,y+r()*h,2.2,HE.rbc);
 const pmn=(px,py)=>[[-2.5,-1],[0,1.5],[2.5,-1]].map(([a,c])=>dot(px+a,py+c,1.8,HE.nuD)).join("");
 const nN=[0,0,0,10,46,22,6,0,0,0][st];for(let k=0;k<nN;k++){const px=x+r()*w,py=y+r()*h;b+=`<circle cx="${px}" cy="${py}" r="5" style="fill:#F7D7E2"/>`+pmn(px,py)}
 const nM=[0,0,0,0,0,10,18,8,2,0][st];for(let k=0;k<nM;k++){const px=x+r()*w,py=y+r()*h;b+=`<ellipse cx="${px}" cy="${py}" rx="9" ry="7" style="fill:#EAC3D3;stroke:${HE.mem};stroke-width:.6"/>`+`<ellipse cx="${px-2}" cy="${py}" rx="3.6" ry="3" style="fill:${HE.nu}"/>`+dot(px+4,py+2,1.6,"#B88A2E")}
 if(st>=6&&st<=8){const nv=st===6?5:st===7?8:4;for(let k=0;k<nv;k++){const px=x+20+r()*(w-40),py=y+15+r()*(h-30);b+=`<circle cx="${px}" cy="${py}" r="6" style="fill:none;stroke:${HE.mem};stroke-width:1.6"/>`+dot(px,py,2.4,HE.rbc)}
  for(let k=0;k<(st===8?6:12);k++){const px=x+r()*w,py=y+r()*h;b+=`<ellipse cx="${px}" cy="${py}" rx="7" ry="1.8" transform="rotate(${r()*40-20} ${px} ${py})" style="fill:${HE.nu}"/>`}}
 if(st>=7){const n=st===7?8:st===8?16:24;for(let k=0;k<n;k++){const yy=y+8+k*(h-16)/n;let d=`M${x},${yy}`;for(let xx=x;xx<=x+w;xx+=16)d+=` Q${xx+4},${yy-3} ${xx+8},${yy} T${xx+16},${yy}`;b+=`<path d="${d}" style="fill:none;stroke:${st===9?"#C8A9D6":"#E7A6C2"};stroke-width:${st===9?3:2};opacity:.85"/>`}
  if(st===9)for(let k=0;k<6;k++)b+=`<ellipse cx="${x+r()*w}" cy="${y+r()*h}" rx="6" ry="1.4" style="fill:${HE.nuD}"/>`}
 return b+`</g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:none;stroke:var(--sb-line);stroke-width:1.2"/>`}
function grossLV(cx,cy,st){const m=MT[st];let b=`<circle cx="${cx}" cy="${cy}" r="70" style="fill:#B5545C;stroke:var(--a-edge);stroke-width:1.4"/>`;
 const a1=-2.5,a2=-.5,R=st===9?58:70,r=34;
 if(st>=2){b+=`<path d="M${cx+r*Math.cos(a1)},${cy+r*Math.sin(a1)} A${r},${r} 0 0 1 ${cx+r*Math.cos(a2)},${cy+r*Math.sin(a2)} L${cx+R*Math.cos(a2)},${cy+R*Math.sin(a2)} A${R},${R} 0 0 0 ${cx+R*Math.cos(a1)},${cy+R*Math.sin(a1)}Z" style="fill:${m[3]}"/>`;
  if(st===5||st===6||st===7)b+=`<path d="M${cx+(r+3)*Math.cos(a1)},${cy+(r+3)*Math.sin(a1)} A${r+3},${r+3} 0 0 1 ${cx+(r+3)*Math.cos(a2)},${cy+(r+3)*Math.sin(a2)}" style="fill:none;stroke:#C2364A;stroke-width:5"/>`+`<path d="M${cx+(R-3)*Math.cos(a1)},${cy+(R-3)*Math.sin(a1)} A${R-3},${R-3} 0 0 1 ${cx+(R-3)*Math.cos(a2)},${cy+(R-3)*Math.sin(a2)}" style="fill:none;stroke:#C2364A;stroke-width:5"/>`}
 if(st===1)b+=`<path d="M${cx+r*Math.cos(a1)},${cy+r*Math.sin(a1)} A${r},${r} 0 0 1 ${cx+r*Math.cos(a2)},${cy+r*Math.sin(a2)} L${cx+R*Math.cos(a2)},${cy+R*Math.sin(a2)} A${R},${R} 0 0 0 ${cx+R*Math.cos(a1)},${cy+R*Math.sin(a1)}Z" style="fill:#E7C9C9;opacity:.6"/>`;
 b+=`<circle cx="${cx}" cy="${cy}" r="${r}" style="fill:var(--sb-surface);stroke:var(--a-edge)"/>`+`<circle cx="${cx-92}" cy="${cy+6}" r="40" style="fill:none;stroke:#B5545C;stroke-width:12;opacity:.0"/>`;
 return b}
function evoD(){const st=+ST.mt,m=MT[st];let b="";
 b+=T(10,22,"Light microscopy (H&E)",{a:"start",c:"bh"})+myo(10,32,360,214,st);
 b+=T(400,22,"Gross: LV short axis",{a:"start",c:"bh"})+grossLV(510,128,st)+T(510,216,"anterior wall (LAD)",{c:"s m"});
 b+=`<rect x="10" y="258" width="620" height="96" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`;
 b+=`<text x="26" y="290" style="font:800 20px var(--sb-font);fill:var(--sb-accent)">${m[0]}</text>`+T(170,282,"LM: "+m[1],{a:"start",c:"s"})+T(170,302,"Gross: "+m[2],{a:"start",c:"s"});
 b+=tag(26+Math.max(150,m[4].length*6.3+40)/2,332,"เสี่ยง: "+m[4],"var(--sb-bad)",{w:Math.max(150,m[4].length*6.3+40)});
 return hsvg(b,"0 0 640 362")}

/* ---------- 5. MI diagnosis: biomarkers + ECG evolution ---------- */
const sig=(t,a,k)=>1/(1+Math.exp(-(t-a)*k));
const TNI=t=>.3+46*sig(t,.32,14)*Math.exp(-Math.max(0,t-1)*.45),CKMB=t=>.3+6*sig(t,.4,14)*Math.exp(-Math.max(0,t-.8)*1.6);
function mdxD(){const d=+ST.md;const A=axes(56,14,330,210,[0,10],[.2,60],[0,1,2,3,4,5,6,7,8,9,10],[],"วันหลังเริ่มเจ็บ","× upper limit of normal",{log:true});let b=A.g;
 [.5,1,2,5,10,50].forEach(v=>b+=`<line class="gl" x1="56" x2="386" y1="${A.Y(v)}" y2="${A.Y(v)}"/>`+T(50,A.Y(v)+4,v,{a:"end",c:"s m"}));
 b+=`<line x1="56" x2="386" y1="${A.Y(1)}" y2="${A.Y(1)}" style="stroke:var(--sb-ink2);stroke-width:1.4;stroke-dasharray:5 4"/>`+T(384,A.Y(1)-6,"ULN",{a:"end",c:"s m"});
 const pts=f=>[...Array(201)].map((_,i)=>{const t=i/20;return [A.X(t),A.Y(Math.max(.2,Math.min(60,f(t))))]});
 b+=curve(pts(TNI),CV.ox,3.2)+curve(pts(CKMB),CV.dx,3.2);
 b+=T(A.X(2.6),A.Y(TNI(2.6))-10,"Troponin I",{a:"start",c:"bh"})+T(A.X(1.6),A.Y(CKMB(1.6))-8,"CK-MB",{a:"start",c:"bh"});
 b+=`<line x1="${A.X(d)}" x2="${A.X(d)}" y1="14" y2="224" style="stroke:var(--sb-accent);stroke-width:2"/>`+`<circle cx="${A.X(d)}" cy="${A.Y(Math.max(.2,TNI(d)))}" r="5" style="fill:${CV.ox};stroke:var(--sb-surface);stroke-width:2"/>`+`<circle cx="${A.X(d)}" cy="${A.Y(Math.max(.2,CKMB(d)))}" r="5" style="fill:${CV.dx};stroke:var(--sb-surface);stroke-width:2"/>`;
 const tv=TNI(d),cv=CKMB(d);
 b+=`<rect x="412" y="14" width="222" height="96" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(426,36,`วันที่ ${d}`,{a:"start",c:"bb"})+
  T(426,60,`Troponin I ×${tv.toFixed(tv<10?1:0)}`,{a:"start",c:"bh"})+tag(590,56,tv>=1?"ขึ้น":"ปกติ",tv>=1?CV.ox:"#7C8798",{w:48})+
  T(426,88,`CK-MB ×${cv.toFixed(1)}`,{a:"start",c:"bh"})+tag(590,84,cv>=1?"ขึ้น":"ปกติ",cv>=1?CV.dx:"#7C8798",{w:48});
 const ph=d<.25?["ชั่วโมงแรก","hyperacute T + ST elevation",{st:.3,ta:.7,tw:.07}]:d<2?["ชั่วโมง–วัน","ST elevation + Q wave เริ่มเกิด",{st:.4,a:.6}]:d<8?["วัน–สัปดาห์","ST กลับ baseline · T inversion · Q",{inv:true,a:.6}]:["สัปดาห์ขึ้นไป","pathologic Q wave คงอยู่",{a:.6}];
 const qw=d>=.25?[[.42-.03,-.35,.012]]:[];
 b+=strip(412,122,222,104,beat(.42,ph[2]).concat(qw),.9,{n:320,base:.6,lab:"Lead V2 · "+ph[0]})+T(523,246,ph[1],{c:"s"});
 return psvg(b,"0 0 640 270")}

/* ---------- 6. ECG localization ---------- */
const LOC={as:["Anteroseptal","LAD (proximal)",["V1","V2"],[],"lad"],aa:["Anteroapical","distal LAD",["V3","V4"],[],"lad"],al:["Anterolateral","LAD or LCX",["V5","V6"],[],"lcx"],
 lat:["Lateral","LCX",["I","aVL"],["II","III","aVF"],"lcx"],inf:["Inferior","RCA (บ่อยสุด)",["II","III","aVF"],["I","aVL"],"rca"],post:["Posterior","PDA",["V7–V9"],["V1","V2","V3"],"pda"]};
function locD(){const L=LOC[ST.loc],key=ST.loc;let b="";
 const hp=[[70,96],[120,62],[190,66],[252,94],[282,152],[264,222],[212,274],[162,292],[120,264],[80,212],[60,152]];
 b+=`<path d="${sm(hp)}" style="fill:url(#gMyo);stroke:var(--a-edge);stroke-width:1.4"/>`;
 const zone={as:"M178,96 C200,110 204,150 196,200 L176,200 C182,150 178,120 166,100Z",aa:"M150,230 C170,220 200,220 214,240 C200,272 176,290 160,292 C150,276 146,250 150,230Z",al:"M200,150 C230,150 260,170 266,214 C246,246 224,260 210,262 C206,220 204,186 200,150Z",
  lat:"M236,96 C262,110 284,150 280,196 C268,200 256,196 250,186 C252,150 246,120 236,96Z",inf:"M96,236 C130,262 170,292 212,276 C222,286 196,300 160,300 C120,296 96,272 86,246Z",post:"M120,274 C150,292 190,292 222,270"}[key];
 b+=key==="post"?`<path d="${zone}" style="fill:none;stroke:var(--sb-bad);stroke-width:10;stroke-dasharray:6 5;opacity:.75"/>`:`<path d="${zone}" style="fill:var(--sb-bad);opacity:.45"/>`;
 b+=`<circle cx="152" cy="58" r="17" style="fill:var(--a-art);stroke:var(--a-edge)"/>`+T(152,62,"Ao",{c:"w"});
 const art={rca:"M140,72 C110,88 84,120 78,160 C74,200 92,240 122,264 C140,278 158,282 176,280",lm:"M164,70 C174,76 182,84 188,92",lad:"M188,92 C184,140 178,200 170,262 C168,276 166,284 160,292",lcx:"M188,92 C222,92 252,110 268,150 C274,172 272,192 266,206",pda:"M176,280 C196,276 212,268 226,258"};
 Object.entries(art).forEach(([k,d])=>{const on=k===L[4]||(k==="lm"&&(L[4]==="lad"||L[4]==="lcx"))||(k==="rca"&&L[4]==="pda");b+=`<path d="${d}" style="fill:none;stroke:${on?"#FFD23F":"#F7EDE0"};stroke-width:${on?5.5:3.4};stroke-linecap:round${k==="pda"?";stroke-dasharray:5 4":""}"/>`});
 b+=T(66,120,"RCA",{c:"s"})+T(196,128,"LAD",{a:"start",c:"s"})+T(250,92,"LCX",{a:"start",c:"s"})+T(234,262,"PDA",{a:"start",c:"s"});
 b+=T(170,326,L[0]+" · "+L[1],{c:"bh"});
 const leads=[["I","aVR","V1","V4"],["II","aVL","V2","V5"],["III","aVF","V3","V6"]];
 leads.forEach((row,r)=>row.forEach((ld,c)=>{const hot=L[2].includes(ld),rec=L[3].includes(ld);let o={a:.8};
  if(hot)o={st:.45,a:.7};if(rec)o=key==="post"?{st:-.3,a:1.25,inv:false}:{st:-.25,a:.8};
  b+=mini(330+c*77,14+r*64,72,56,ld,o,hot||rec&&key==="post")}));
 b+=T(330,224,key==="post"?"V1–V3: ST ↓ + R สูง = ภาพสะท้อนของ posterior STEMI":"กรอบส้ม = ST elevation · ST ↓ = reciprocal",{a:"start",c:"s"});
 b+=T(330,244,key==="post"?"ยืนยันด้วย posterior leads V7–V9":"",{a:"start",c:"s m"});
 b+=`<rect x="330" y="258" width="300" height="64" rx="14" style="fill:color-mix(in srgb,var(--sb-bad) 9%,var(--sb-surface));stroke:color-mix(in srgb,var(--sb-bad) 45%,transparent)"/>`+T(344,280,"ST elevation / Q waves:",{a:"start",c:"s m"})+`<text x="344" y="308" style="font:800 18px var(--sb-mono);fill:var(--sb-bad)">${L[2].join(" · ")}</text>`;
 return hsvg(b,"0 0 640 336")}

/* ---------- 7–9. rhythm strips ---------- */
const DUR=4.2;
const RH={
 af:{n:"Atrial fibrillation",w:()=>{let t=.25,o=[];[.62,.92,.5,.78,1.02,.56,.7].forEach(r=>{o.push(t);t+=r});return runBeats(o.filter(x=>x<DUR-.2),{p:false})},fib:t=>.05*Math.sin(2*Math.PI*7.3*t)+.04*Math.sin(2*Math.PI*5.1*t+1)+.035*Math.sin(2*Math.PI*9.7*t+2),
  r:["Irregularly irregular · ไม่มี P wave ชัด","จุดกำเนิดมักอยู่รอบ pulmonary vein ostia ใน LA","เสี่ยง: HTN, CAD, อายุมาก, LA โต","LA appendage = ที่เกิด thrombus บ่อยสุด → stroke","Rate/rhythm control: β-blocker, CCB, digoxin, cardioversion"]},
 mat:{n:"Multifocal atrial tachycardia",w:()=>{const ts=[.25,.78,1.22,1.8,2.28,2.78,3.24,3.76],pa=[.14,-.1,.22,.06,.18,-.08,.12,.2],pr=[.16,.12,.2,.14,.18,.11,.16,.13];return ts.flatMap((t,i)=>beat(t,{pa:pa[i],pr:pr[i]}))},
  r:["Irregularly irregular แต่เห็น P ≥ 3 รูปแบบ","ectopic foci หลายจุดใน atrium","สัมพันธ์ COPD, pneumonia, HF","รักษาโรคพื้นฐานเป็นหลัก"]},
 flutter:{n:"Atrial flutter",w:()=>runBeats([.4,1.2,2,2.8,3.6],{p:false,ta:.15}),fib:t=>.2-.32*((t%.2)/.2),
  r:["Sawtooth (F waves) ~300/min · มักนำ 2:1 หรือ 4:1","re-entry รอบ tricuspid annulus","RR สม่ำเสมอ","รักษาแบบ AF ± ablation ที่ cavotricuspid isthmus"]},
 psvt:{n:"Paroxysmal SVT",w:()=>runBeats([...Array(11)].map((_,i)=>.2+i*.36),{p:false,qt:.24,tw:.045}),
  r:["Regular narrow-complex ~180/min · P มักมองไม่เห็น","re-entry ใน AV node บ่อยสุด","ใจสั่นทันที เวียนหัว เหงื่อออก","หยุดด้วย vagal maneuver / adenosine · หายขาดด้วย ablation"]},
 wpw:{n:"Wolff-Parkinson-White",w:()=>runBeats([.4,1.3,2.2,3.1,4],{pr:.1,delta:true}),
  r:["Bundle of Kent ข้าม AV node","PR สั้น + delta wave + QRS กว้าง","เสี่ยง re-entrant SVT (orthodromic/antidromic)","รักษา: procainamide, ibutilide","หลีกเลี่ยง AV nodal blocker (adenosine, CCB, β-blocker)"]},
 vt:{n:"Ventricular tachycardia",w:()=>runBeats([...Array(11)].map((_,i)=>.2+i*.38),{p:false,wide:true,a:1.1,qt:.26}),
  r:["Wide QRS สม่ำเสมอ > 100/min","structural heart disease: แผลเป็น MI, cardiomyopathy","เสี่ยง sudden cardiac death"]},
 tdp:{n:"Torsades de pointes",w:()=>[],fib:t=>(.18+.85*Math.abs(Math.sin(Math.PI*t/1.9)))*Math.sin(2*Math.PI*4.2*t),
  r:["Polymorphic VT: ยอดคลื่นบิดรอบ baseline","เกิดบน long QT · อาจกลายเป็น VF","สาเหตุ: ยา, K⁺/Mg²⁺/Ca²⁺ ต่ำ, congenital","Stable: magnesium sulfate · unstable: defibrillation"]},
 vf:{n:"Ventricular fibrillation",w:()=>[],fib:t=>.4*Math.sin(2*Math.PI*5.4*t+Math.sin(t*7))*(.55+.45*Math.sin(t*2.7))+.15*Math.sin(2*Math.PI*8.9*t),
  r:["ไม่มีคลื่นที่ระบุได้","ตายถ้าไม่ CPR + defibrillation ทันที"]},
 brugada:{n:"Brugada syndrome (V1)",w:()=>runBeats([.5,1.6,2.7,3.8],{rsr:true,st:.38,inv:true,pa:.1}),
  r:["AD · Na⁺ channel loss-of-function","พบบ่อยในชายเอเชีย","pseudo-RBBB + coved ST elevation ใน V1–V2","ป้องกัน SCD ด้วย ICD"]},
 lqt:{n:"Congenital long QT",w:()=>runBeats([.4,1.5,2.6,3.7],{qt:.55,tw:.08}),
  r:["K⁺ channel loss-of-function (repolarization ช้า)","Romano–Ward: AD, หัวใจอย่างเดียว","Jervell–Lange-Nielsen: AR + หูหนวก sensorineural","เสี่ยง torsades → SCD"]},
 sss:{n:"Sick sinus syndrome",w:()=>runBeats([.3,1.1,1.9],{}).concat(beat(3.65,{p:false})),
  r:["SA node เสื่อมตามอายุ","bradycardia, sinus pause/arrest","junctional escape beat (ไม่มี P นำ)"]},
 "1":{n:"First-degree AV block",w:()=>runBeats([.45,1.35,2.25,3.15,4.05],{pr:.3}),
  r:["PR > 200 msec คงที่ทุกตัว","ไม่มีอาการ ไม่ต้องรักษา"]},
 m1:{n:"Mobitz I (Wenckebach)",w:()=>{const p=[.2,.95,1.7,2.45,3.2,3.95],pr=[.16,.24,.32,null,.16,.24];let w=[];p.forEach((t,i)=>{w=w.concat(Pw(t));if(pr[i])w=w.concat(QRS(t+pr[i]),Tw(t+pr[i]+.3))});return w},
  r:["PR ยาวขึ้นเรื่อยๆ จนมี P ที่ไม่มี QRS ตาม","RR ไม่สม่ำเสมอแบบมีแบบแผน","มักอยู่ระดับ AV node · ไม่ต้องรักษา"]},
 m2:{n:"Mobitz II",w:()=>{const p=[.2,.95,1.7,2.45,3.2,3.95];let w=[];p.forEach((t,i)=>{w=w.concat(Pw(t));if(i%3!==2)w=w.concat(QRS(t+.16),Tw(t+.46))});return w},
  r:["Dropped beat โดย PR ไม่เปลี่ยน","มักมีโรคโครงสร้าง (ischemia, fibrosis) ใต้ AV node","อาจกลายเป็น 3° block → ใส่ pacemaker"]},
 "3":{n:"Third-degree (complete) AV block",w:()=>{let w=[];[.15,.85,1.55,2.25,2.95,3.65].forEach(t=>w=w.concat(Pw(t)));[.6,2.15,3.7].forEach(t=>w=w.concat(QRS(t,{wide:true}),Tw(t+.36,-.3)));return w},
  r:["P และ QRS เต้นแยกกัน (PP คงที่, RR คงที่)","atrial rate > ventricular rate","สาเหตุหนึ่ง: Lyme disease","รักษา: pacemaker"]},
 rbbb:{n:"Right bundle branch block (V1)",w:()=>runBeats([.5,1.6,2.7,3.8],{rsr:true,inv:true}),
  r:["V1: rsR′ (bunny ears) · V6: S กว้าง","RV depolarize ช้าผ่าน myocyte-to-myocyte"]},
 lbbb:{n:"Left bundle branch block (V6)",w:()=>runBeats([.5,1.6,2.7,3.8],{wide:true,a:1.2,qt:.34}),
  r:["V6: R กว้าง มีรอยบาก · V1: QS ลึกกว้าง","มักมาจาก degenerative / cardiomyopathy / infiltrative","LBBB ใหม่ + เจ็บหน้าอก ให้คิดถึง MI"]},
 pac:{n:"Premature atrial contraction",w:()=>runBeats([.4,1.3],{}).concat(beat(1.9,{pa:-.12,pr:.12}),runBeats([2.95,3.85],{})),
  r:["beat มาก่อนเวลา มี P (รูปต่างไป) + QRS แคบ","กระตุ้นจาก adrenergic (เช่น caffeine)","ไม่อันตราย แต่อาจนำไป AF/flutter"]},
 pvc:{n:"Premature ventricular contraction",w:()=>runBeats([.4,1.3],{}).concat(beat(1.85,{p:false,wide:true,a:1.2}),runBeats([3.1,4],{})),
  r:["QRS กว้าง มาก่อนเวลา ไม่มี P นำ","diastolic filling สั้น → SV ของ beat นั้นลดลง","ตามด้วย compensatory pause","prognosis ขึ้นกับโรคหัวใจพื้นฐาน"]}};
function rhD(key,col){const R=RH[key];let b=strip(4,6,632,132,R.w(),DUR,{n:1400,base:.58,fib:R.fib,lab:R.n});
 if(key==="af"){let t=.25;[.62,.92,.5,.78].forEach((r,i)=>{const x1=4+4+t/DUR*624,x2=4+4+(t+r)/DUR*624;b+=`<path d="M${x1},128 L${x2},128" style="stroke:#C2493A;stroke-width:1.4" marker-end="url(#ah2)"/>`+TD((x1+x2)/2,124,`RR${i+1}`,{s:9,c:"#C2493A"});t+=r})}
 b+=infoPanel(4,148,632,R.n,null,R.r,col);
 return psvg(b,`0 0 640 ${154+IPH}`)}

/* ---------- 10. MI complications ---------- */
const CP={arr:["Arrhythmia","วันแรก–เดือน",0,90,"สาเหตุตายสำคัญก่อนถึง รพ. และใน 48 ชม. แรก",{}],peri:["Peri-infarction pericarditis","1–3 วัน",1,3,"เจ็บแบบ pleuritic + friction rub · หายเอง",{eff:true}],
 pap:["Papillary muscle rupture","2–7 วัน",2,7,"acute MR → shock + pulmonary edema · posteromedial (PDA เส้นเดียว)",{pap:true}],sept:["Interventricular septal rupture","3–5 วัน",3,5,"VSD ใหม่ · O₂ step-up ใน RV",{vsd:true,vsdy:236,c:{rv:CV.mx}}],
 pseudo:["Pseudoaneurysm","3–14 วัน",3,14,"ผนังแตกแต่มี pericardium/แผลเป็นอุดไว้ · แตกง่ายกว่า true aneurysm",{pseudo:true}],free:["Free wall rupture","5–14 วัน",5,14,"tamponade · มักเสียชีวิต · LVH และ MI เก่าช่วยป้องกัน",{eff:true,free:true}],
 true:["True ventricular aneurysm","2 สัปดาห์–เดือน",14,90,"ผนังแผลเป็นโป่งตอนบีบ (dyskinesia) · mural thrombus",{true:true}],dress:["Postcardiac injury (Dressler)","สัปดาห์–เดือน",14,90,"pericarditis จาก autoimmune ต่อ antigen ของหัวใจ",{eff:true}]};
function cpD(){const k=ST.cp,c=CP[k];let b="";const o=Object.assign({lab:true},c[5]);
 let ov="";if(o.pap)ov+=`<path d="M276,286 C270,262 262,236 256,214" style="stroke:#F7EDE0;stroke-width:3;fill:none"/><path d="M276,292 C282,280 290,276 296,270" style="stroke:var(--sb-bad);stroke-width:6;fill:none;stroke-linecap:round"/>`+Ar(254,214,262,176,"#fff",3);
 if(o.free)ov+=`<path d="M318,246 L344,252 L330,262 L352,268" style="fill:none;stroke:var(--sb-bad);stroke-width:4"/>`;
 if(o.pseudo)ov+=`<path d="M316,262 C352,250 372,280 360,306 C346,330 312,322 306,296Z" style="fill:#7E1F2A;stroke:#C7B9A2;stroke-width:4"/><path d="M312,270 L318,282" style="stroke:#F7EDE0;stroke-width:3"/>`;
 if(o.true)ov+=`<path d="M232,326 C230,350 270,364 300,340 C318,326 316,300 302,292" style="fill:var(--a-art);stroke:#E9E2EE;stroke-width:4"/><path d="M262,336 C276,344 292,336 296,322 C284,328 272,330 262,336Z" style="fill:#7E1F2A"/>`;
 b+=`<g transform="translate(0,4) scale(.8)">${heart(o)}${ov}</g>`;
 /* timeline */
 const tk=[[0,"0"],[1,"1 d"],[3,"3 d"],[7,"7 d"],[14,"2 wk"],[30,"1 mo"],[90,"3 mo"]],X=v=>{for(let i=1;i<tk.length;i++)if(v<=tk[i][0]){const [a]=tk[i-1],[bb]=tk[i];return 320+((i-1)+(v-a)/(bb-a))*(310/(tk.length-1))}return 630};
 b+=T(320,20,"เวลาหลัง MI",{a:"start",c:"bh"});tk.forEach(([v,l])=>b+=`<line class="gl" x1="${X(v)}" x2="${X(v)}" y1="30" y2="252"/>`+T(X(v),268,l,{c:"s m"}));
 Object.entries(CP).forEach(([kk,v],i)=>{const y=38+i*27,on=kk===k;b+=`<rect x="${X(v[2])}" y="${y+12}" width="${Math.max(8,X(v[3])-X(v[2]))}" height="8" rx="4" style="fill:${on?"var(--sb-bad)":"color-mix(in srgb,var(--sb-ink2) 35%,var(--sb-surface))"}"/>`+T(324,y+8,v[0].split(" (")[0],{a:"start",c:on?"bh":"s m"})});
 b+=`<rect x="320" y="282" width="312" height="66" rx="14" style="fill:color-mix(in srgb,var(--sb-bad) 9%,var(--sb-surface));stroke:color-mix(in srgb,var(--sb-bad) 45%,transparent)"/>`+T(334,302,c[0]+" · "+c[1],{a:"start",c:"bh"})+wrapT(334,320,c[4],50,"s",14);
 return hsvg(b,"0 0 640 356")}

/* ---------- 11. ACS work-up & treatment ---------- */
function acsD(){const p=ST.ap;let b="";const on=k=>k==="all"||k===p;
 const box=(x,y,w,h,t,s,k,c)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" style="fill:color-mix(in srgb,${c} ${on(k)?16:5}%,var(--sb-surface));stroke:${on(k)?c:"var(--sb-line)"};stroke-width:${on(k)?1.8:1};opacity:${on(k)?1:.55}"/>`+T(x+w/2,y+20,t,{c:"bh"})+wrapT(x+w/2,y+37,s,Math.floor(w/6),"s",14,"middle");
 b+=box(170,6,300,56,"เจ็บหน้าอกสงสัย ACS","12-lead ECG ภายใน 10 นาที + troponin","all",CV.acc);
 b+=Ln(250,62,130,86,CV.mut)+Ln(390,62,510,86,CV.mut);
 b+=box(10,86,240,56,"ST elevation / STEMI equivalent","= STEMI → reperfusion","stemi",CV.bad)+box(390,86,240,56,"ไม่มี ST elevation","troponin ซ้ำ (hs) → NSTEMI vs UA","nste","#D9692F");
 b+=box(10,156,240,92,"Reperfusion ด่วน","PCI ภายใน 90 นาที (ดีที่สุด) · ถ้า PCI เกิน 120 นาที → fibrinolysis ภายใน 12 ชม.","stemi",CV.bad);
 b+=box(390,156,240,92,"Risk stratify","TIMI / GRACE · เสี่ยงสูงหรืออาการไม่หยุด → angiography เร็ว","nste","#D9692F");
 b+=Ln(130,142,130,156,CV.mut)+Ln(510,142,510,156,CV.mut);
 b+=box(130,262,380,96,"ทุกราย","aspirin + P2Y12 inhibitor · anticoagulant (heparin) · β-blocker (ถ้าไม่มี HF/shock) · high-intensity statin · ACEi · nitrate คุมอาการ","all",CV.teal);
 b+=Ln(130,248,250,262,CV.mut)+Ln(510,248,390,262,CV.mut);
 b+=`<rect x="10" y="372" width="620" height="44" rx="12" style="fill:color-mix(in srgb,${CV.dx} 10%,var(--sb-surface));stroke:color-mix(in srgb,${CV.dx} 45%,transparent)"/>`+T(24,392,"RV infarct (inferior MI จาก RCA):",{a:"start",c:"bh"})+T(24,408,"preload-dependent → ให้ IV fluid · เลี่ยง nitrate และ diuretic",{a:"start",c:"s"});
 return psvg(b,"0 0 640 424")}

/* ---------- extras ---------- */
function ihdpD(){let b="";
 const st=[["Plaque disruption","cap แตก/กร่อน · เผย collagen + lipid core",CV.bad],["Platelets","adhere → activate → aggregate (TXA₂, ADP)",CV.gold],["Coagulation","tissue factor → thrombin → fibrin",CV.violet],["Thrombus","ขนาดและเวลาที่อุดกำหนด syndrome",CV.ox]];
 st.forEach(([t,d,c],i)=>{const y=10+i*76;b+=cardBox(10,y,370,60,t,[d],c);if(i<3)b+=Ar(195,y+62,195,y+74,CV.mut,1.6,{hs:6})});
 b+=cardBox(400,10,234,92,"Occlusive · นาน",["→ transmural infarct · STEMI"],CV.bad)+cardBox(400,110,234,92,"ไม่อุดหมด / สั้น / มี collateral",["→ UA หรือ NSTEMI (subendocardial)"],"#D9692F")+cardBox(400,210,234,104,"Reperfusion",["hemorrhage · contraction band necrosis · ROS · stunning"],CV.teal);
 return psvg(b,"0 0 640 320")}
function chaD(){const items=[["c1","CHF",1],["h1","Hypertension",1],["a2","Age ≥ 75",2],["d1","Diabetes",1],["s2","Stroke / TIA / thromboembolism",2],["v1","Vascular disease (MI, PAD, plaque)",1],["a1","Age 65–74",1],["sc","Female sex",1]];
 let sc=0;items.forEach(([k,,p])=>{if(ST[k])sc+=p});if(ST.a2&&ST.a1)sc-=1;
 let b="";items.forEach(([k,l,p],i)=>{const y=10+i*36,on=!!ST[k];b+=`<rect x="10" y="${y}" width="330" height="30" rx="10" style="fill:${on?"color-mix(in srgb,var(--sb-accent) 16%,var(--sb-surface))":"var(--sb-surface2)"};stroke:${on?"var(--sb-accent)":"var(--sb-line)"}"/>`+T(24,y+20,l,{a:"start",c:on?"bh":"s"})+tag(318,y+15,"+"+p,on?"var(--sb-accent)":"#7C8798",{w:32})});
 const male=!ST.sc,need=male?sc>=2:sc>=3,cons=male?sc===1:sc===2;
 const C=2*Math.PI*58;b+=`<circle cx="480" cy="104" r="58" style="fill:none;stroke:var(--sb-surface2);stroke-width:16"/><circle cx="480" cy="104" r="58" style="fill:none;stroke:${need?"var(--sb-bad)":cons?CV.gold:"var(--sb-good)"};stroke-width:16;stroke-dasharray:${C*sc/9} ${C}" transform="rotate(-90 480 104)"/>`;
 b+=`<text x="480" y="116" text-anchor="middle" style="font:800 34px var(--sb-mono);fill:var(--sb-ink)">${sc}</text>`+T(480,186,"CHA₂DS₂-VASc",{c:"bh"});
 b+=`<rect x="370" y="204" width="260" height="88" rx="14" style="fill:color-mix(in srgb,${need?"var(--sb-bad)":cons?CV.gold:"var(--sb-good)"} 12%,var(--sb-surface));stroke:var(--sb-line)"/>`+T(384,228,need?"แนะนำ anticoagulation":cons?"พิจารณา anticoagulation":"ไม่ต้อง anticoagulate",{a:"start",c:"bh"})+wrapT(384,246,need?"DOAC (apixaban, rivaroxaban, dabigatran) เป็นตัวเลือกแรกในคนที่ไม่มี mechanical valve หรือ MS ปานกลางขึ้นไป":"ประเมินซ้ำเมื่ออายุหรือโรคร่วมเปลี่ยน",40,"s",14);
 return psvg(b,"0 0 640 300")}

/* ================= sections ================= */
SEC.push({id:"cad",k:"a",t:"Angina & the acute coronary syndrome spectrum",mm:"Angina → STEMI",leg:[],draw:cadD,
notes:()=>`<ul><li><b>Angina</b> = เจ็บหน้าอกจาก ischemia โดย<b>ไม่มี necrosis</b> ${S.fa}</li>
<li><b>Stable</b>: atherosclerosis ตีบ ≥ 70% · เจ็บเมื่อออกแรง หายเมื่อพักหรืออม nitroglycerin ${S.fa}</li>
<li><b>Unstable</b>: thrombus อุดไม่หมด · เจ็บถี่/แรงขึ้น หรือเจ็บขณะพัก · troponin <b>ไม่ขึ้น</b> (ต่างจาก NSTEMI) ${S.fa}</li>
<li><b>Vasospastic</b> (Prinzmetal): เกร็งตัวขณะพัก ST เปลี่ยนชั่วคราว · บุหรี่เป็นปัจจัยหลัก · กระตุ้นโดย cocaine, amphetamine, alcohol, triptan · รักษา CCB + nitrate + เลิกบุหรี่ ${S.fa}</li>
<li>MI ส่วนใหญ่เกิดจาก ACS: plaque แตก → thrombus · แต่ supply–demand mismatch นานๆ (เช่น ปอดอักเสบ หัวใจเต้นเร็ว ความดันต่ำ) ก็ทำให้ troponin ขึ้นได้โดยไม่มี plaque แตก ${S.fa}</li>
<li>NSTEMI = <b>subendocardial</b> infarct (ST ↓ / T inversion) · STEMI = <b>transmural</b> (ST ↑ แล้วเกิด Q) ${S.fa} · subendocardium เสี่ยงที่สุดเพราะอยู่ปลายทางเลือดและรับแรงดันในห้องสูง ${S.r}</li></ul>`});

SEC.push({id:"steal",k:"a",t:"Coronary steal syndrome",mm:"Coronary steal",leg:[],tools:[["st",[["base","Baseline"],["vd","+ Vasodilator"]]]],draw:stealD,
notes:()=>`<ul><li>หลอดเลือดส่วนปลายต่อรอยตีบ<b>ขยายเต็มที่อยู่แล้ว</b>เพื่อชดเชย ${S.fa}</li>
<li>ให้ vasodilator (dipyridamole, adenosine, regadenoson) → หลอดปกติขยาย → แรงดันในหลอดปกติลด → เลือดถูกดึงไปฝั่งที่ไหลดี → bed หลังรอยตีบขาดเลือด ${S.fa}</li>
<li>Pharmacologic stress test อาศัยความต่างของ flow นี้หาบริเวณที่ขาดเลือด · ส่วนน้อยทำให้เกิด ischemia จริง ${S.fa}</li></ul>`});

SEC.push({id:"scd",k:"a",t:"Sudden cardiac death & chronic ischemic heart disease",mm:"SCD · chronic IHD",leg:[],draw:scdD,
notes:()=>`<ul><li><b>SCD</b>: เสียชีวิตจากหัวใจภายใน 1 ชม. หลังมีอาการ หรือภายใน 24 ชม. โดยไม่มีอาการนำ · ส่วนใหญ่เป็น ventricular arrhythmia (VF) ${S.fa}</li>
<li>สาเหตุ: CAD (ถึง 70%), cardiomyopathy (HCM, DCM), myocarditis, coronary anomaly, channelopathy (long QT, Brugada) · ป้องกันด้วย ICD ${S.fa}</li>
<li>ในคนหนุ่มสาว สาเหตุที่ไม่ใช่ atherosclerosis พบบ่อยกว่า เช่น HCM, coronary anomaly, myocarditis ${S.r}</li>
<li><b>Chronic IHD</b>: HF ที่ค่อยๆ แย่ลงจากความเสียหายสะสม (ischemic cardiomyopathy) ${S.fa} · หัวใจโต ผนังมีแผลเป็นหลายจุด myocyte ที่เหลือ hypertrophy ${S.r}</li>
<li><b>Hibernation</b> = LV ทำงานลดจาก ischemia เรื้อรัง · <b>stunning</b> = ลดชั่วคราวหลัง ischemia สั้นๆ · ทั้งสองกลับคืนได้ ${S.fa}</li></ul>`});

SEC.push({id:"mi-evo",k:"b",t:"Evolution of myocardial infarction",mm:"MI evolution (time)",leg:[],ctrl:()=>`<label class="sl"><span>เวลาหลังขาดเลือด <b data-v="mt">${MT[ST.mt][0]}</b></span><input type="range" min="0" max="9" step="1" value="${ST.mt}" data-k="mt"></label>`,
 wire:()=>{const s=cur;document.querySelectorAll('#tools-'+s.id+' input[type=range]').forEach(r=>r.oninput=()=>{ST.mt=+r.value;r.closest(".tools").querySelector('[data-v="mt"]').textContent=MT[ST.mt][0];document.getElementById("dia-"+s.id).innerHTML=s.draw()})},draw:evoD,
notes:()=>`<div class="pearl">เลื่อนเวลา: ดูภาพ H&E, ภาพ gross และ<b>ภาวะแทรกซ้อน</b>ที่เสี่ยงที่สุดในช่วงนั้น ${S.r} ${S.fa}</div>
<ul><li>หลอดที่อุดบ่อย: <b>LAD > RCA > LCX</b> ${S.fa}</li>
<li>ischemia รุนแรง ≥ 20–40 นาที → irreversible · ATP ลดภายในวินาที การบีบตัวหายภายใน 2 นาที ${S.r}</li>
<li>Necrosis เริ่มที่ <b>subendocardium</b> แล้วลามออกไป (wavefront) · ส่วนใหญ่ครบภายใน 3–6 ชม. ${S.r}</li>
<li>&lt; 12 ชม. มักยังมองไม่เห็นด้วยตา · ใช้ <b>TTC</b> ย้อม: กล้ามเนื้อปกติแดงอิฐ บริเวณตายซีด (เพราะ LDH รั่วออก) ${S.r}</li>
<li>Reperfusion: hemorrhage, <b>contraction band necrosis</b> (Ca²⁺ ไหลเข้า myofibril หดตัวสุด) และ free radical ${S.fa} ${S.r}</li>
<li>Neutrophil (1–3 วัน) → macrophage (3–10 วัน) → granulation tissue (1–2 สัปดาห์) → scar (> 2 เดือน) · ช่วง 3–14 วันผนังนุ่มที่สุด จึงเสี่ยง rupture ${S.fa}</li></ul>`});

SEC.push({id:"mi-dx",k:"b",t:"Diagnosis of MI: troponin, CK-MB & ECG",mm:"MI diagnosis",leg:[],ctrl:()=>sl("md","วันหลังเริ่มเจ็บ",0,10,.25,"วัน"),wire:()=>wireSl(),draw:mdxD,
notes:()=>`<ul><li>ใน 6 ชม. แรก <b>ECG</b> เป็นหลักในการวินิจฉัย ${S.fa}</li>
<li><b>Troponin I</b>: ขึ้นหลัง ~4 ชม. สูงสุด ~24 ชม. คงสูง 7–10 วัน · จำเพาะต่อหัวใจที่สุด ${S.fa}</li>
<li><b>CK-MB</b>: ขึ้นหลัง 6–12 ชม. สูงสุด 16–24 ชม. กลับปกติใน ~48 ชม. → ใช้ดู <b>reinfarction</b> ${S.fa}</li>
<li>ECG: ST elevation (transmural), ST depression (subendocardial), hyperacute T, T inversion, pathologic Q wave หรือ poor R progression (transmural เก่าหรือกำลังเกิด) ${S.fa}</li>
<li>เส้นโค้งในภาพวาดเพื่อเห็นรูปแบบ ไม่ใช่ค่าจริงของ assay ใด ${S.x}</li></ul>`});

SEC.push({id:"ecg-loc",k:"b",t:"ECG localization of STEMI",mm:"ECG localization",leg:[],tools:[["loc",[["as","Anteroseptal"],["aa","Anteroapical"],["al","Anterolateral"],["lat","Lateral"],["inf","Inferior"],["post","Posterior"]]]],draw:locD,
notes:()=>`${tbl(["Infarct","Artery","Leads (ST ↑ / Q)"],[["Anteroseptal","LAD","V1–V2"],["Anteroapical","distal LAD","V3–V4"],["Anterolateral","LAD หรือ LCX","V5–V6"],["Lateral","LCX","I, aVL"],["Inferior","RCA","II, III, aVF"],["Posterior","PDA","V7–V9 · ST ↓ + R สูงใน V1–V3"]])} ${S.fa}
<ul><li>Inferior MI ให้มองหา RV infarct (ST ↑ ใน right-sided leads เช่น V4R) เพราะต้องระวังยาที่ลด preload ${S.x}</li>
<li>RCA เลี้ยง SA node และ AV node ในคนส่วนใหญ่ → inferior MI มักมี bradycardia/AV block ${S.x}</li></ul>`});

SEC.push({id:"narrow",k:"c",t:"Narrow-complex tachycardias",mm:"Narrow-complex",leg:[],tools:[["nr",[["af","AF"],["mat","MAT"],["flutter","Flutter"],["psvt","PSVT"],["wpw","WPW"]]]],draw:()=>rhD(ST.nr,CV.dx),
notes:()=>`<ul><li>QRS &lt; 120 msec → กระแสลงผ่านระบบนำไฟฟ้าปกติ · จุดกำเนิดอยู่ที่หรือเหนือ AV node ${S.fa}</li>
<li><b>AF</b>: irregularly irregular ไม่มี P · thrombus ใน LA appendage → stroke ${S.fa} · ดูส่วนเสริมเรื่อง CHA₂DS₂-VASc</li>
<li><b>Flutter</b>: re-entry รอบ tricuspid annulus · sawtooth · รักษาเหมือน AF ± ablation ระหว่าง tricuspid annulus กับ IVC ${S.fa}</li>
<li><b>PSVT</b>: re-entry ใน AV node บ่อยสุด · vagal maneuver/adenosine หยุดได้ ${S.fa}</li>
<li><b>WPW</b>: accessory pathway (bundle of Kent) → PR สั้น + delta wave · รักษา procainamide/ibutilide · หลีกเลี่ยง adenosine, CCB, β-blocker ${S.fa}</li></ul>`});

SEC.push({id:"wide",k:"c",t:"Wide-complex tachycardias & channelopathies",mm:"Wide-complex · channelopathies",leg:[],tools:[["wd",[["vt","VT"],["tdp","Torsades"],["vf","VF"],["brugada","Brugada"],["lqt","Long QT"],["sss","Sick sinus"]]]],draw:()=>rhD(ST.wd,CV.bad),
notes:()=>`<ul><li>QRS ≥ 120 msec → กระแสเดินนอกระบบนำไฟฟ้า · ส่วนใหญ่มาจาก ventricle ${S.fa}</li>
<li><b>VT</b> มักมาจากแผลเป็นหลัง MI หรือ cardiomyopathy · เสี่ยง SCD ${S.fa}</li>
<li><b>Torsades</b>: long QT เป็นพื้น · ยาที่ทำให้ QT ยาว (class Ia/III, macrolide, fluoroquinolone, haloperidol, TCA, ondansetron, methadone ฯลฯ) และ K⁺/Mg²⁺/Ca²⁺ ต่ำ · stable ให้ MgSO₄ ${S.fa}</li>
<li><b>Channelopathies</b>: ยีน ion channel ผิดปกติ หัวใจดูปกติแต่เสี่ยง VT/SCD ${S.fa} · ตรวจศพมักไม่พบอะไร ต้องตรวจยีน ${S.r}</li>
<li><b>Sick sinus</b>: SA node เสื่อม → bradycardia, pause, arrest, junctional escape ${S.fa}</li></ul>`});

SEC.push({id:"blocks",k:"c",t:"Conduction blocks & premature beats",mm:"AV blocks · ectopy",leg:[],tools:[["bk",[["1","1°"],["m1","Mobitz I"],["m2","Mobitz II"],["3","3°"],["rbbb","RBBB"],["lbbb","LBBB"],["pac","PAC"],["pvc","PVC"]]]],draw:()=>rhD(ST.bk,CV.violet),
notes:()=>`${tbl(["Block","PR","Dropped QRS","รักษา"],[["1°","&gt; 200 msec คงที่","ไม่มี","ไม่ต้อง"],["Mobitz I","ยาวขึ้นเรื่อยๆ","มี (เป็นรอบ)","มักไม่ต้อง"],["Mobitz II","คงที่","มี (ไม่มีสัญญาณเตือน)","pacemaker"],["3°","ไม่สัมพันธ์กัน","P กับ QRS แยกกัน","pacemaker"]])} ${S.fa}
<ul><li>BBB: ventricle ข้างที่ bundle เสียจะ depolarize ช้าจาก myocyte สู่ myocyte · มักจาก degenerative, cardiomyopathy, infiltrative ${S.fa}</li>
<li>PVC: diastolic filling สั้น จึงบีบเลือดออกน้อยในจังหวะนั้น ${S.fa}</li></ul>`});

SEC.push({id:"mi-comp",k:"d",t:"Myocardial infarction complications",mm:"MI complications",leg:[],tools:[["cp",[["arr","Arrhythmia"],["peri","Pericarditis"],["pap","Papillary"],["sept","Septal"],["pseudo","Pseudoaneurysm"],["free","Free wall"],["true","True aneurysm"],["dress","Dressler"]]]],draw:cpD,
notes:()=>`<ul><li><b>Arrhythmia</b>: สาเหตุตายสำคัญที่สุดก่อนถึง รพ. และใน 48 ชม. แรก ${S.fa}</li>
<li><b>Papillary muscle rupture</b> (2–7 วัน): posteromedial &gt;&gt; anterolateral เพราะได้เลือดจาก PDA เส้นเดียว (anterolateral ได้ทั้ง LAD และ LCX) → acute MR, pulmonary edema, shock ${S.fa}</li>
<li><b>Septal rupture</b> (3–5 วัน): macrophage ย่อยเนื้อเยื่อ → VSD · O₂ saturation และความดัน RV ↑ ${S.fa}</li>
<li><b>Free wall rupture</b> (5–14 วัน): tamponade · LVH และ MI เดิมช่วยป้องกัน ${S.fa} · เสี่ยงในหญิงสูงอายุ ความดันสูง MI ครั้งแรก transmural ${S.r}</li>
<li><b>Pseudoaneurysm</b>: ผนังแตกแต่ pericardium หรือแผลเป็นกั้นไว้ (ไม่มี endocardium/myocardium) → แตกได้ง่ายกว่า · <b>true aneurysm</b>: ผนังแผลเป็นโป่ง (dyskinesia) → mural thrombus ${S.fa}</li>
<li><b>Dressler</b> (postcardiac injury syndrome): antigen จากหัวใจ → immune complex → pericarditis หลายสัปดาห์ต่อมา ${S.fa}</li></ul>`});

SEC.push({id:"acs",k:"d",t:"Acute coronary syndrome: work-up & treatment",mm:"ACS work-up & Rx",leg:[],tools:[["ap",[["stemi","STEMI"],["nste","NSTE-ACS"]]]],draw:acsD,
notes:()=>`<ul><li>UA/NSTEMI: anticoagulant (heparin) + antiplatelet (aspirin + ADP receptor inhibitor เช่น clopidogrel) + β-blocker, ACEi, statin · nitroglycerin ± morphine คุมอาการ ${S.fa}</li>
<li>STEMI: เพิ่ม <b>reperfusion</b> ซึ่งสำคัญที่สุด · PCI ดีกว่า fibrinolysis ${S.fa}</li>
<li>เป้าหมายเวลา: door-to-balloon &lt; 90 นาที · ถ้า PCI ไม่ได้ภายใน 120 นาทีและไม่มีข้อห้าม ให้ fibrinolysis (ประโยชน์ถึง 12 ชม. หลังเริ่มเจ็บ) ${S.fa}</li>
<li>ข้อห้าม fibrinolysis: เคยมีเลือดออกในสมอง, ischemic stroke ไม่นาน, เลือดออกภายใน, ความดันสูงมาก, บาดเจ็บ/ผ่าตัดใหญ่ไม่นาน ${S.fa}</li>
<li>Risk score (TIMI, GRACE) ช่วยตัดสินใจทำ angiography เร็วใน NSTE-ACS ${S.fa}</li>
<li>RV infarct: ห้าม nitrate/diuretic ให้ IV fluid รักษา preload ${S.fa}</li>
<li>STEMI equivalent ที่ต้อง reperfusion เหมือนกัน: posterior MI (ST ↓ ใน V1–V3), LBBB/paced rhythm ที่เข้าเกณฑ์ Sgarbossa หรือมี shock/ventricular arrhythmia · ตำราเก่าถือ LBBB ใหม่ทุกรายเป็น STEMI แต่แนวทางปัจจุบันไม่ถือเช่นนั้นแล้ว ${S.h}</li></ul>`});

SEC.push({id:"ihd-path",k:"b",t:"Pathogenesis of acute coronary syndromes",mm:"ACS pathogenesis",leg:[],draw:ihdpD,
notes:()=>`<ul><li>ACS ส่วนใหญ่เริ่มจาก plaque ที่ตีบไม่มาก (&lt; 50–75%) แต่เปราะ แล้ว<b>เปลี่ยนสภาพเฉียบพลัน</b> (แตก กร่อน เลือดออกใน plaque) ${S.r}</li>
<li>ปัจจัยภายนอกที่กระตุ้น: adrenergic surge (ตื่นนอนตอนเช้า ความเครียด) เพิ่มแรงเฉือนและความดัน ${S.r}</li>
<li>Thrombus อุดหมดนาน → transmural · อุดไม่หมด/สลายเองเร็ว/มี collateral → subendocardial หรือ unstable angina ${S.r}</li>
<li>Reperfusion ช่วยรักษาเนื้อที่ยังไม่ตาย แต่ทำให้เกิด hemorrhage, contraction band necrosis, ROS, Ca²⁺ overload และ stunning ${S.r}</li></ul>`});

SEC.push({id:"af-care",k:"c",t:"Atrial fibrillation: stroke prevention (CHA₂DS₂-VASc)",mm:"AF stroke risk",leg:[],tools:[["c1","CHF"],["h1","HTN"],["a2","Age ≥75"],["d1","DM"],["s2","Stroke/TIA"],["v1","Vascular"],["a1","Age 65–74"],["sc","Female"]],draw:chaD,
notes:()=>`<div class="pearl">แตะปัจจัยด้านบนเพื่อคำนวณคะแนน · ผู้ชาย ≥ 2 หรือผู้หญิง ≥ 3 → anticoagulate ${S.h}</div>
<ul><li>AF เพิ่มความเสี่ยง stroke เพราะเลือดคั่งใน LA appendage · ความเสี่ยงเท่ากันทั้ง paroxysmal และ persistent ${S.h}</li>
<li>ยาเลือกแรก: DOAC · warfarin ใช้เมื่อมี mechanical valve หรือ mitral stenosis ปานกลางขึ้นไป ${S.h}</li>
<li>Rate control (β-blocker, non-DHP CCB, digoxin) หรือ rhythm control (cardioversion, antiarrhythmic, ablation) · ถ้า AF นาน &gt; 48 ชม. ต้อง anticoagulate หรือทำ TEE ก่อน cardioversion ${S.fa}</li>
<li>AF ร่วมกับ hemodynamic ไม่คงที่ → synchronized cardioversion ทันที ${S.fa}</li></ul>`});

const EXTRA=["ihd-path","af-care"];

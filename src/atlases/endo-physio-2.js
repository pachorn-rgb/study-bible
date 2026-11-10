/* ================= Endocrine Physiology II · Pancreas, adrenal cortex, appetite & hormone signaling =================
   First Aid Step 1 2025 (Endocrine · Physiology, pp. 337–341) order · Guyton & Hall 12e Ch 71, 74, 77, 78 ·
   Boron & Boulpaep Ch 47, 50, 51, 54–55 · Harrison 22e Ch 398, 403, 415, 418. All drawings are original schematics. */
//@include _cvs-physio-kit.js
Object.assign(GN,{a:"Endocrine pancreas",b:"Adrenal cortex",c:"Appetite",d:"Hormone signaling"});
Object.assign(ST,{ff:"fast",glc:120,sec:"none",gl:"ins",og:"oral",cah:"none",cs:"n",ap:"fast",sg:"camp",sh:"n",gl2:90});
const EXTRA=["stress"];
/* ---------- endocrine drawing kit (colours = theme tokens) ---------- */
const EN={hy:CV.vi,ap:CV.pk,pp:CV.bl,th:CV.tl,ad:CV.or,gon:CV.rd,liv:CV.ol,kid:CV.lv,gut:CV.cy,bone:CV.ink2};
/* coloured node: box + bold title + muted subtitle */
const NODE=(x,y,w,h,c,t,s,o={})=>RB(x,y,w,h,c,{r:o.r??12,p:o.p??14,sw:o.sw,dash:o.dash,fill:o.fill})+(t?T(x+w/2,y+(s?h/2-1:h/2+4),t,{c:o.big?"b":"bh"}):"")+(s?T(x+w/2,y+h/2+14,s,{c:"s m"}):"");
/* inhibitory arrow: line ending in a bar */
function INH(x1,y1,x2,y2,c,w=1.8,o={}){const a=Math.atan2(y2-y1,x2-x1),px=Math.sin(a)*7,py=-Math.cos(a)*7;
 return SP(`M${x1},${y1} L${x2},${y2}`,c,w,o)+SP(`M${(x2-px).toFixed(1)},${(y2-py).toFixed(1)} L${(x2+px).toFixed(1)},${(y2+py).toFixed(1)}`,c,w+1.2,{op:o.op})}
/* curved arrow through a control point */
function CAW(x1,y1,cx,cy,x2,y2,c,w=1.6,o={}){const a=Math.atan2(y2-cy,x2-cx),h=o.h||8,bx=x2-h*Math.cos(a),by=y2-h*Math.sin(a);
 return SP(`M${x1},${y1} Q${cx},${cy} ${bx.toFixed(1)},${by.toFixed(1)}`,c,w,o)+`<path d="M${x2},${y2} L${(bx+h*.55*Math.sin(a)).toFixed(1)},${(by-h*.55*Math.cos(a)).toFixed(1)} L${(bx-h*.55*Math.sin(a)).toFixed(1)},${(by+h*.55*Math.cos(a)).toFixed(1)}Z" style="fill:${c}${o.op!=null?";opacity:"+o.op:""}"/>`}
const ION=(x,y,t,k,r=10)=>`<circle cx="${x}" cy="${y}" r="${r}" style="fill:var(--s-${k});stroke:var(--sb-plate);stroke-width:1.5"/>`+T(x,y+3.5,t,{c:"ion"});
const SGN=(x,y,s,c)=>DOT(x,y,8,c,{sw:1.5})+`<text x="${x}" y="${y+4}" text-anchor="middle" style="font:800 12px var(--sb-font);fill:var(--sb-plate)">${s}</text>`;
/* horizontal meter: value v on 0..1, optional normal band [a,b] */
function MET(x,y,w,lab,v,c,o={}){const vv=Math.max(0,Math.min(1,v));let g=T(x,y-6,lab,{a:"start",c:"s"})+`<rect x="${x}" y="${y}" width="${w}" height="12" rx="6" style="fill:var(--sb-surface2)"/>`;
 if(o.n)g+=`<rect x="${x+w*o.n[0]}" y="${y-2}" width="${w*(o.n[1]-o.n[0])}" height="16" rx="4" style="fill:none;stroke:${CV.mut};stroke-width:1;stroke-dasharray:3 2"/>`;
 g+=`<rect x="${x}" y="${y}" width="${(w*vv).toFixed(1)}" height="12" rx="6" style="fill:${c}"/>`;if(o.t)g+=T(x+w,y-6,o.t,{a:"end",c:"bh"});return g}
const DIM=(on,s)=>on?s:`<g style="opacity:.22">${s}</g>`;
const CAP=(y,s)=>RB(14,y,612,34,CV.acc,{p:9,r:17})+T(320,y+22,s,{c:"s"});

/* ---------- 1. glucagon & the fed–fast switch ---------- */
const FFM={fast:{ins:.15,glu:.8,t:"อดอาหาร: insulin ต่ำ glucagon สูง → ตับปล่อย glucose (glycogenolysis → gluconeogenesis) และสร้าง ketone"},
 carb:{ins:.9,glu:.12,t:"หลังมื้อคาร์บ: glucose สูง → insulin ↑ glucagon ↓ → ตับเก็บเป็น glycogen"},
 prot:{ins:.55,glu:.6,t:"มื้อโปรตีน (alanine, arginine): ทั้ง insulin และ glucagon ↑ → ใช้ amino acids โดยไม่ทำให้ glucose ตก"},
 ex:{ins:.2,glu:.85,t:"ออกกำลังหนัก: glucagon ↑ 4–5 เท่า · insulin ↓ → ตับส่ง glucose ให้กล้ามเนื้อ"}};
function gluD(){const m=FFM[ST.ff];let b="";
 /* islet */
 b+=FRAME(10,10,250,250)+T(24,32,"Islet of Langerhans",{a:"start",c:"bh"});
 const ix=135,iy=146;b+=`<circle cx="${ix}" cy="${iy}" r="96" style="fill:${tint(CV.pk,8)};stroke:color-mix(in srgb,${CV.pk} 40%,transparent);stroke-width:1.4"/>`;
 b+=SP(`M${ix-90},${iy+20} C${ix-40},${iy-10} ${ix+30},${iy+50} ${ix+92},${iy+10}`,CV.lv,3,{op:.5});
 for(let i=0;i<22;i++){const a=i*2.39996,r=Math.sqrt(i/22)*60;const x=ix+Math.cos(a)*r,y=iy+Math.sin(a)*r;b+=DOT(x,y,8.5,i%7===3?CV.cy:"var(--s-glc)",{sw:1.2})}
 for(let i=0;i<16;i++){const a=i/16*6.283,x=ix+Math.cos(a)*80,y=iy+Math.sin(a)*80;b+=DOT(x,y,8.5,i%5===2?CV.cy:CV.or,{sw:1.2})}
 b+=DOT(30,236,6,"var(--s-glc)",{sw:0})+T(40,240,"β 60%",{a:"start",c:"s"})+DOT(98,236,6,CV.or,{sw:0})+T(108,240,"α 25%",{a:"start",c:"s"})+DOT(166,236,6,CV.cy,{sw:0})+T(176,240,"δ 10%",{a:"start",c:"s"});
 /* hormone levels */
 b+=FRAME(270,10,360,250)+T(284,32,"ระดับ hormone ในเลือด",{a:"start",c:"bh"});
 const bar=(x,lab,v,c)=>{const h=v*150;return `<rect x="${x}" y="${210-h}" width="64" height="${h}" rx="10" style="fill:${c}"/>`+`<rect x="${x}" y="60" width="64" height="150" rx="10" style="fill:none;stroke:var(--sb-line)"/>`+T(x+32,230,lab,{c:"bh"})};
 b+=bar(300,"Insulin",m.ins,"var(--s-glc)")+bar(390,"Glucagon",m.glu,CV.or);
 const r=m.ins/m.glu;b+=T(560,96,"I/G ratio",{c:"s m"})+CT(560,130,r>=1?f1c(r):r.toFixed(2),r>=1?"var(--s-glc)":CV.or,{s:26,wt:800})+T(560,154,r>=1.5?"anabolic":r<.6?"catabolic":"สมดุล",{c:"bh"});
 b+=T(560,190,"glucagon ↑ เมื่อ",{c:"s m"})+T(560,206,"glucose < ~90 mg/dL",{c:"s m"});
 /* hepatocyte */
 const g=m.glu,i=m.ins;b+=FRAME(10,270,620,250)+T(24,292,"Hepatocyte",{a:"start",c:"bh"});
 b+=`<rect x="30" y="304" width="580" height="200" rx="20" style="fill:${tint(CV.ol,8)};stroke:color-mix(in srgb,${CV.ol} 45%,transparent);stroke-width:1.4"/>`;
 b+=`<rect x="22" y="${330}" width="18" height="30" rx="7" style="fill:${CV.or}"/>`+T(31,322,"GCGR",{c:"s"});
 ["Gs","AC","cAMP","PKA"].forEach((t,k)=>b+=RB(56+k*70,334,58,22,CV.or,{r:11,p:10+g*30})+T(85+k*70,349,t,{c:"s"})+(k<3?AW(114+k*70,345,124+k*70,345,CV.or,1.3,{h:5}):""));
 const path=(x,y,t,s,w,c,on)=>RB(x,y,160,52,c,{p:on?26:8,sw:on?2:1})+T(x+80,y+22,t,{c:"bh"})+T(x+80,y+40,s,{c:"s m"});
 b+=path(46,390,"Glycogenolysis","phosphorylase a ↑",0,CV.or,g>.5)+path(226,390,"Gluconeogenesis","amino acids → glucose",0,CV.or,g>.5)+path(406,390,"Ketogenesis","β-oxidation → ketones",0,CV.or,g>.7&&i<.3);
 b+=path(406,320,"Glycogen synthesis","insulin dominant",0,"var(--s-glc)",i>.7);
 b+=AW(320,356,126,388,CV.or,1+g*2.6,{op:g>.4?1:.25})+AW(320,356,320,388,CV.or,1+g*2.6,{op:g>.4?1:.25})+AW(320,356,486,388,CV.or,1+g*2,{op:g>.7&&i<.3?1:.2});
 /* glucose flux across membrane */
 const out=g>i;b+=`<rect x="602" y="456" width="18" height="28" rx="7" style="fill:var(--s-glc)"/>`+T(596,476,"GLUT2",{a:"end",c:"s"});
 b+=(out?AW(612,450,612,400,"var(--s-glc)",3):AW(612,400,612,450,"var(--s-glc)",3))+T(612,392,"glucose",{c:"s"});
 b+=T(320,498,m.t,{c:"s"});
 return svg(b,"0 0 640 530")}

/* ---------- 2. insulin secretion by the β cell ---------- */
const SEM={none:{t:"Glucose เป็นตัวคุมหลัก: GLUT2 → glucokinase (glucose sensor) → ATP/ADP ↑ → ปิด K_ATP"},su:{t:"Sulfonylurea จับ K_ATP (SUR1) ปิดช่องเอง → หลั่งแม้ glucose ต่ำ (เสี่ยง hypoglycemia)"},
 inc:{t:"GLP-1 / GIP (incretins) → cAMP ขยายการหลั่ง เฉพาะเมื่อ glucose สูง (glucose-dependent)"},inh:{t:"α₂-adrenergic / somatostatin ยับยั้ง exocytosis · β₂ กระตุ้น"}};
function insD(){const G=ST.glc,m=ST.sec;let b="";const gf=x=>1/(1+Math.exp(-(x-150)/38));
 const sec=x=>{let k=gf(x);if(m==="su")k=Math.max(k,.55);let s=1+22*k*(m==="inc"&&x>100?1.7:1)*(m==="inh"?.3:1);return Math.min(40,s)};
 const kc=Math.min(1,gf(G)*1.15+(m==="su"?.65:0)),vm=-70+45*kc,caOpen=vm>-56,S=sec(G),M=344;
 /* β cell */
 b+=`<rect x="14" y="14" width="${M-14}" height="430" rx="30" style="fill:${tint("var(--s-glc)",7)};stroke:color-mix(in srgb,var(--s-glc) 45%,transparent);stroke-width:1.6"/>`+T(30,40,"β cell",{a:"start",c:"bh"});
 b+=`<rect x="6" y="80" width="18" height="34" rx="7" style="fill:var(--s-glc)"/>`+T(34,72,"GLUT2",{a:"start",c:"s"});
 b+=AW(-2,97,52,97,"var(--s-glc)",1.5+G/100)+ION(70,97,"Glc","glc",12);
 b+=AW(82,97,124,97,"var(--s-glc)",1.6)+T(104,86,"glucokinase",{c:"s m"})+RB(126,84,70,26,"var(--s-glc)",{r:13,p:14})+T(161,101,"G-6-P",{c:"s"});
 b+=AW(196,97,224,97,"var(--s-glc)",1.6)+T(276,90,"glycolysis · TCA",{c:"s m"});
 const atp=.3+.7*gf(G);b+=`<rect x="230" y="104" width="96" height="16" rx="8" style="fill:var(--sb-surface2)"/><rect x="230" y="104" width="${96*atp}" height="16" rx="8" style="fill:${CV.ol}"/>`+T(278,138,"ATP/ADP ↑",{c:"bh"});
 /* K_ATP */
 b+=`<rect x="${M-11}" y="166" width="22" height="46" rx="8" style="fill:${tint(CV.bl,20+kc*50)};stroke:${CV.bl}"/>`+T(M-18,160,"K_ATP (SUR1/Kir6.2)",{a:"end",c:"s"});
 b+=SP(`M${M-8},${189-12*(1-kc)} L${M+8},${189+12*(1-kc)}`,CV.bl,3,{op:1-kc*.85});
 if(kc<.85)b+=AW(M+12,189,M+30,189,"var(--s-k)",1.4+2*(1-kc),{h:6})+ION(M+38,206,"K⁺","k",9);
 b+=CAW(290,146,316,166,M-14,180,CV.ol,1.6,{dash:"4 3"})+T(300,178,"ปิด",{a:"end",c:"s"});
 if(m==="su")b+=TAG(250,236,"sulfonylurea",CV.vi,{w:100})+AW(300,236,M-12,206,CV.vi,1.6,{h:6});
 /* Vm */
 b+=T(140,184,"Membrane potential",{c:"s m"})+`<rect x="64" y="192" width="150" height="14" rx="7" style="fill:var(--sb-surface2)"/>`+`<rect x="64" y="192" width="${150*(vm+70)/45}" height="14" rx="7" style="fill:${caOpen?CV.bad:CV.mut}"/>`+SP(`M${64+150*14/45},188 V210`,CV.ink2,1.2,{dash:"2 2"})+T(140,226,`Vm ≈ ${r0(vm)} mV${caOpen?" → depolarized":""}`,{c:"bh"});
 /* Ca channel */
 b+=`<rect x="${M-11}" y="270" width="22" height="46" rx="8" style="fill:${caOpen?"var(--s-ca)":tint(CV.or,20)};stroke:${CV.or}"/>`+T(M-18,264,"Voltage-gated Ca²⁺",{a:"end",c:"s"});
 if(caOpen)b+=ION(M+30,293,"Ca","ca",9)+AW(M+20,293,M+12,293,"var(--s-ca)",2,{h:5})+AW(M-14,296,290,326,"var(--s-ca)",2);
 /* vesicles */
 const nf=Math.min(10,Math.max(0,Math.round((S-1)/2.3)));for(let k=0;k<10;k++){const x=56+(k%5)*44,y=330+Math.floor(k/5)*42,fused=k<nf;b+=`<circle cx="${x}" cy="${y}" r="15" style="fill:${tint(CV.pk,fused?45:18)};stroke:${CV.pk};stroke-width:${fused?2:1}"/>`+DOT(x-4,y-2,3.5,CV.pk,{sw:0})+DOT(x+5,y+3,2.5,CV.ink2,{sw:0})}
 b+=T(146,422,`exocytosis (${nf}/10 granules)`,{c:"s"})+T(146,436,"insulin + C-peptide 1 : 1",{c:"s m"});
 if(m==="inc")b+=TAG(290,380,"GLP-1 → cAMP",CV.cy,{w:104})+AW(290,368,270,346,CV.cy,1.4,{h:6});
 if(m==="inh")b+=TAG(290,380,"α₂ / SST ⊣",CV.bad,{w:96})+INH(290,368,262,346,CV.bad,1.6);
 /* proinsulin */
 const X0=392;b+=FRAME(X0,10,238,300)+T(X0+14,32,"Proinsulin",{a:"start",c:"bh"});
 b+=SP(`M${X0+30},70 H${X0+170}`,CV.pk,6)+SP(`M${X0+150},122 H${X0+60}`,CV.pk,6)+T(X0+26,74,"B",{a:"end",c:"bh"})+T(X0+54,126,"A",{a:"end",c:"bh"});
 [X0+80,X0+130].forEach(x=>b+=SP(`M${x},74 V118`,"var(--s-urea)",2.2,{dash:"3 3"}));b+=T(X0+105,100,"S–S",{c:"s m"});
 b+=SP(`M${X0+170},70 C${X0+228},70 ${X0+228},122 ${X0+150},122`,CV.mut,4,{dash:"2 5"})+T(X0+200,56,"C-peptide",{c:"s m"});
 ["RER: preproinsulin","→ proinsulin (granule)","→ insulin + C-peptide","C-peptide ไม่ถูกตับดึง →","ใช้วัด insulin ที่หลั่งเอง"].forEach((t,k)=>b+=T(X0+14,166+k*20,t,{a:"start",c:k>2?"s m":"s"}));
 b+=TAG(X0+119,286,`× ${f1c(S)} basal`,CV.pk,{w:110});
 /* secretion curve */
 b+=FRAME(X0,320,238,200)+T(X0+14,342,"Insulin secretion",{a:"start",c:"bh"});
 const A=AX(X0+44,356,176,124,[0,400],[0,40],[0,200,400],[0,20,40],"glucose (mg/dL)","× basal",{xo:30,yo:28});b+=A.g;
 b+=SP(FN(A,x=>1+22*gf(x),0,400,80),CV.mut,1.4,{dash:"4 3"})+SP(FN(A,sec,0,400,80),CV.pk,2.6)+DOT(A.X(G),A.Y(S),6,CV.acc);
 b+=CAP(530,SEM[m].t);
 return svg(b,"0 0 640 574")}

/* ---------- 3. insulin actions & glucose transporters ---------- */
const GLUTS=[["GLUT1","RBC · brain · cornea · placenta","basal uptake",CV.lv,0],["GLUT2","β cell · liver · kidney · gut","2-way · Km สูง",CV.ol,0],["GLUT3","neurons · placenta","affinity สูง",CV.vi,0],["GLUT4","skeletal muscle · adipose","insulin-dependent",CV.pk,1],["GLUT5","gut · spermatocytes","fructose",CV.or,0],["SGLT1/2","small intestine · kidney","Na⁺-glucose",CV.bl,0]];
function iacD(){const s=ST.gl;let b="";const ins=s==="ins",ex=s==="ex";
 b+=FRAME(10,10,330,420)+T(24,30,"Myocyte / adipocyte",{a:"start",c:"bh"});
 b+=`<rect x="28" y="72" width="294" height="340" rx="22" style="fill:${tint(CV.pk,8)};stroke:color-mix(in srgb,${CV.pk} 45%,transparent);stroke-width:1.5"/>`;
 /* receptor */
 b+=`<path d="M70,44 v28 M90,44 v28" style="stroke:${CV.pk};stroke-width:9;stroke-linecap:round;opacity:${ins?1:.45}"/>`+T(102,58,"insulin receptor (α₂β₂)",{a:"start",c:"s"})+(ins?DOT(80,52,8,"var(--s-glc)",{sw:1.5})+T(80,55,"I",{c:"ion"}):"");
 b+=`<rect x="64" y="74" width="32" height="22" rx="6" style="fill:${ins?CV.pk:tint(CV.pk,20)}"/>`+T(80,89,"TK",{c:"w"});
 const st=(x,y,t,on,c=CV.pk)=>RB(x,y,74,24,c,{r:12,p:on?32:8})+T(x+37,y+16,t,{c:"s"});
 b+=st(43,112,"IRS-1",ins)+st(43,152,"PI3K",ins)+st(43,192,"Akt/PKB",ins)+AW(80,96,80,110,CV.pk,1.3,{h:5,op:ins?1:.3})+AW(80,136,80,150,CV.pk,1.3,{h:5,op:ins?1:.3})+AW(80,176,80,190,CV.pk,1.3,{h:5,op:ins?1:.3});
 b+=st(150,112,"Ras → MAPK",ins,CV.ol)+AW(117,124,148,124,CV.ol,1.3,{h:5,op:ins?1:.3})+T(187,150,"growth · DNA synth",{c:"s m"});
 /* GLUT4 vesicles */
 const atM=ins||ex;for(let k=0;k<4;k++){const x=150+k*40;if(atM)b+=`<rect x="${x}" y="64" width="14" height="18" rx="5" style="fill:${CV.pk}"/>`+AW(x+7,46,x+7,62,"var(--s-glc)",1.6,{h:5});else b+=`<circle cx="${x+7}" cy="${230+(k%2)*24}" r="12" style="fill:none;stroke:${CV.pk};stroke-width:1.6;stroke-dasharray:3 2"/>`+`<rect x="${x+2}" y="${224+(k%2)*24}" width="10" height="12" rx="3" style="fill:${tint(CV.pk,50)}"/>`}
 b+=T(230,292,atM?(ex?"GLUT4 ขึ้นเยื่อจากการหดตัว (ไม่ใช้ insulin)":"GLUT4 ขึ้นเยื่อ → glucose เข้า"):"GLUT4 ค้างใน vesicle",{c:"s"});
 if(atM){for(let k=0;k<7;k++){const a=k/7*6.283;b+=DOT(250+Math.cos(a)*16,236+Math.sin(a)*16,5,"var(--s-glc)",{sw:1})}b+=DOT(250,236,6,"var(--s-glc)",{sw:1})+T(290,240,ins?"glycogen":"ใช้เป็นพลังงาน",{a:"start",c:"s m"})}
 if(ins)b+=CAW(117,204,150,230,170,96,CV.pk,1.4,{dash:"4 3"});
 /* anabolic effects */
 const eff=[["glycogen synthesis ↑","var(--s-glc)"],["triglyceride synthesis · lipolysis ↓",CV.or],["protein synthesis ↑",CV.ol],["K⁺ uptake (Na⁺/K⁺-ATPase) ↑","var(--s-k)"],["glucagon ↓ · Na⁺ retention (ไต)",CV.mut]];
 eff.forEach(([t,c],k)=>b+=DOT(46,316+k*20,5,c,{sw:0})+T(58,320+k*20,t,{a:"start",c:ins?"s":"s m"}));
 /* GLUT table */
 b+=FRAME(350,10,280,420)+T(364,32,"Glucose transporters",{a:"start",c:"bh"});
 GLUTS.forEach(([n,w,k,c,dep],j)=>{const y=46+j*62,hot=dep&&atM;b+=RB(364,y,252,54,c,{p:hot?28:10,sw:hot?2:1})+T(376,y+20,n,{a:"start",c:"bh"})+T(604,y+20,k,{a:"end",c:"s m"})+T(376,y+40,w,{a:"start",c:"s"})});
 b+=CAP(440,{none:"ไม่มี insulin: muscle/fat ดึง glucose ได้น้อย · ตับ สมอง RBC ใช้ GLUT ที่ไม่ขึ้นกับ insulin (BRICK LIPS)",ins:"Insulin → receptor tyrosine kinase → IRS → PI3K–Akt → GLUT4 ขึ้นเยื่อ + anabolic effects",ex:"ออกกำลัง: การหดตัวดึง GLUT4 ขึ้นเยื่อได้เองและเพิ่มการแสดงออก GLUT4"}[s]);
 return svg(b,"0 0 640 484")}

/* ---------- 4. glucose–insulin dynamics (OGTT · incretin) ---------- */
function ogD(){const s=ST.og;let b="";
 const Ag=AX(70,30,520,150,[0,180],[50,300],[],[100,200,300],"","glucose (mg/dL)",{yo:44}),Ai=AX(70,210,520,150,[0,180],[0,150],[0,30,60,90,120,150,180],[0,50,100,150],"time (min)","insulin (μU/mL)",{yo:44});
 b+=FRAME(10,10,620,390)+Ag.g+Ai.g;
 const G={n:MONO([[0,85],[30,140],[60,125],[90,105],[120,95],[180,85]]),t1:MONO([[0,150],[30,230],[60,280],[90,290],[120,280],[180,250]]),t2:MONO([[0,120],[30,190],[60,230],[90,225],[120,205],[180,160]]),iv:MONO([[0,85],[2,290],[10,250],[30,190],[60,130],[90,100],[180,85]])};
 const I={oral:MONO([[0,8],[30,75],[60,65],[90,40],[120,25],[180,10]]),ivm:MONO([[0,8],[30,32],[60,30],[90,20],[120,14],[180,9]]),t1:MONO([[0,5],[30,7],[60,8],[90,8],[120,7],[180,6]]),t2:MONO([[0,25],[30,45],[60,85],[90,105],[120,95],[180,55]]),
  iv:t=>8+95*Math.exp(-Math.pow((t-4)/2.6,2))+(t>10?50*(1-Math.exp(-(t-10)/15))*Math.exp(-Math.max(0,t-60)/70):0)};
 const g=s==="ivb"?G.iv:s==="t1"?G.t1:s==="t2"?G.t2:G.n;
 b+=`<rect x="${Ag.X(0)}" y="${Ag.Y(200)}" width="520" height="${Ag.Y(140)-Ag.Y(200)}" style="fill:${tint(CV.or,10)}"/>`+T(Ag.X(178),Ag.Y(200)-4,"2-h ≥ 200 = DM",{a:"end",c:"s m"});
 b+=SP(FN(Ag,G.n,0,180,90),CV.mut,1.4,{dash:"4 3",op:s==="oral"?0:.8})+SP(FN(Ag,g,0,180,180),"var(--s-glc)",3);
 if(s==="oral")b+=SP(FN(Ai,I.ivm,0,180,90),"var(--s-glc)",2.2,{dash:"7 5"})+SP(FN(Ai,I.oral,0,180,90),CV.pk,3)+SF(FN(Ai,I.oral,0,180,90)+" L"+Ai.X(180)+","+Ai.Y(I.ivm(180))+" "+PTS([...Array(91)].map((_,k)=>{const t=180-2*k;return [Ai.X(t),Ai.Y(I.ivm(t))]})).slice(1)+"Z",CV.pk,.18)+CT(Ai.X(40),Ai.Y(52),"incretin effect",CV.pk,{a:"start",s:12})+T(Ai.X(150),Ai.Y(28),"IV glucose (ค่า glucose เท่ากัน)",{c:"s m"});
 if(s==="ivb")b+=SP(FN(Ai,I.iv,0,180,360),CV.pk,3)+CT(Ai.X(8),Ai.Y(108),"1st phase (2–5 นาที)",CV.pk,{a:"start",s:11})+CT(Ai.X(60),Ai.Y(68),"2nd phase",CV.pk,{a:"start",s:11});
 if(s==="t1")b+=SP(FN(Ai,I.oral,0,180,90),CV.mut,1.4,{dash:"4 3"})+SP(FN(Ai,I.t1,0,180,90),CV.pk,3)+CT(Ai.X(70),Ai.Y(30),"แทบไม่มี insulin ตอบสนอง",CV.bad,{a:"start",s:11});
 if(s==="t2")b+=SP(FN(Ai,I.oral,0,180,90),CV.mut,1.4,{dash:"4 3"})+SP(FN(Ai,I.t2,0,180,90),CV.pk,3)+CT(Ai.X(100),Ai.Y(118),"สูงแต่ช้า · ไม่มี 1st phase",CV.pk,{a:"start",s:11});
 b+=T(Ag.X(4),Ag.Y(285),"Glucose",{a:"start",c:"bh"})+T(Ai.X(4),Ai.Y(140),"Insulin",{a:"start",c:"bh"});
 b+=CAP(410,{oral:"Oral glucose ได้ insulin มากกว่า IV ที่ทำให้ glucose เท่ากัน = incretin effect (GLP-1, GIP จากลำไส้)",ivb:"IV bolus: 1st phase จาก granule ที่เตรียมไว้ แล้ว 2nd phase ตราบที่ glucose ยังสูง",t1:"T1DM: β cell ถูกทำลาย → glucose สูงนานแม้ได้ glucose เท่ากัน",t2:"T2DM: insulin resistance + β-cell dysfunction · สูญเสีย 1st phase เป็นความผิดปกติแรกๆ"}[s]);
 return svg(b,"0 0 640 454")}

/* ---------- 5. adrenal steroidogenesis & CAH ---------- */
const SX={c1:165,c2:315,c3:460,c4:590},SY=[34,96,166,236,306,376];
const CMP={chol:["c1",0,"Cholesterol"],preg:["c1",1,"Pregnenolone"],p17:["c2",1,"17-OH-pregnenolone"],dhea:["c3",1,"DHEA"],
 prog:["c1",2,"Progesterone"],ohp:["c2",2,"17-OH-progesterone"],andro:["c3",2,"Androstenedione"],
 doc:["c1",3,"11-Deoxy-|corticosterone"],dc:["c2",3,"11-Deoxycortisol"],testo:["c3",3,"Testosterone"],
 cort:["c1",4,"Corticosterone"],cortisol:["c2",4,"Cortisol"],aldo:["c1",5,"Aldosterone"],cortisone:["c2",5,"Cortisone"],
 estrone:["c4",2,"Estrone"],estradiol:["c4",3,"Estradiol"],dht:["c4",4,"DHT"]};
const EDG=[["chol","preg","scc"],["preg","p17","17"],["p17","dhea","17"],["prog","ohp","17"],["ohp","andro","17"],["preg","prog","3b"],["p17","ohp","3b"],["dhea","andro","3b"],
 ["prog","doc","21"],["ohp","dc","21"],["andro","testo","17b"],["doc","cort","11"],["dc","cortisol","11"],["cort","aldo","as"],["cortisol","cortisone","hsd"],["andro","estrone","aro"],["testo","estradiol","aro"],["testo","dht","5a"]];
const CAHM={none:{up:[],dn:[],x:[],lab:null},
 "21":{x:["21"],up:["prog","ohp","andro","dhea","testo","p17"],dn:["doc","cort","aldo","dc","cortisol","cortisone"],lab:[["Mineralocorticoid","↓"],["BP","↓"],["K⁺","↑"],["Cortisol","↓"],["Sex hormones","↑"],["Renin","↑"]],key:"17-OH-progesterone ↑ (พบบ่อยที่สุด ~90–95%)",pre:"ทารก: salt wasting · เด็ก: precocious puberty · XX: virilization"},
 "11":{x:["11"],up:["doc","dc","andro","dhea","testo"],dn:["cort","aldo","cortisol","cortisone"],lab:[["Aldosterone","↓"],["11-DOC","↑"],["BP","↑"],["K⁺","↓"],["Cortisol","↓"],["Sex hormones","↑"],["Renin","↓"]],key:"11-deoxycorticosterone สะสม → ฤทธิ์ mineralocorticoid",pre:"Hypertension + hypokalemia (มักเห็นในวัยเด็ก) · XX: virilization"},
 "17":{x:["17"],up:["preg","prog","doc","cort"],dn:["p17","ohp","dc","cortisol","cortisone","dhea","andro","testo","estrone","estradiol","dht","aldo"],lab:[["Aldosterone","↓"],["11-DOC","↑"],["BP","↑"],["K⁺","↓"],["Cortisol","↓"],["Sex hormones","↓"],["Renin","↓"]],key:"androstenedione ↓ · 11-DOC ↑",pre:"XY: atypical genitalia, undescended testes · XX: ไม่มี 2° sexual development"}};
const ENZN={scc:"SCC · StAR",3:"",["3b"]:"3β-HSD",21:"21-hydroxylase",11:"11β-hydroxylase",as:"aldo synthase",17:"17α",["17b"]:"17β-HSD",aro:"aromatase",["5a"]:"5α-red.",hsd:"11β-HSD2"};
function cahD(){const m=CAHM[ST.cah];let b="";const P=k=>[SX[CMP[k][0]],SY[CMP[k][1]]],W=k=>CMP[k][0]==="c4"?80:CMP[k][0]==="c3"?112:124;
 /* zone bands */
 [["c1","Zona glomerulosa","Mineralocorticoids",CV.or],["c2","Zona fasciculata","Glucocorticoids",CV.tl],["c3","Zona reticularis","Androgens",CV.vi],["c4","Peripheral","Estrogens · DHT",CV.pk]].forEach(([c,z,h,col])=>{const x=SX[c],w=c==="c4"?88:c==="c3"?128:140;
  b+=`<rect x="${x-w/2}" y="${c==="c1"?14:64}" width="${w}" height="${c==="c1"?394:344}" rx="16" style="fill:${tint(col,7)};stroke:color-mix(in srgb,${col} 30%,transparent)"/>`+T(x,424,z,{c:c==="c4"?"s":"bh"})+T(x,440,h,{c:"s m"})});
 /* edges */
 EDG.forEach(([a,z,e])=>{const [x1,y1]=P(a),[x2,y2]=P(z),blk=m.x.includes(e),dn=m.dn.includes(z)&&!blk;let ax,ay,bx,by;
  if(y1===y2){ax=x1+W(a)/2;bx=x2-W(z)/2;ay=by=y1}else if(x1===x2){ax=bx=x1;ay=y1+17;by=y2-17}else{ax=x1+W(a)/2;ay=y1+8;bx=x2-W(z)/2;by=y2-8}
  const c=blk?CV.bad:e==="hsd"?CV.mut:CV.ink2;b+=AW(ax,ay,bx,by,c,blk?2.4:1.5,{h:6,op:dn?.3:1});
  if(blk)b+=CT((ax+bx)/2+(x1===x2?14:0),(ay+by)/2+5,"✕",CV.bad,{s:16,wt:800});
  if(x1===x2&&a!=="cortisol"&&CMP[a][0]==="c1")b+=T(x1-W(a)/2-6,(ay+by)/2+4,ENZN[e],{a:"end",c:blk?"bad":"s"});
  if(y1===y2&&e==="17")b+=T((ax+bx)/2,y1-8,"17α",{c:blk?"bad":"s m"});
  if(e==="hsd")b+=T(x1+W(a)/2+4,(ay+by)/2+4,"11β-HSD2",{a:"start",c:"s m"});
  if(e==="aro"&&a==="andro")b+=T(x2,y2-26,"aromatase",{c:"s m"});
  if(e==="5a")b+=T(x2+44,(ay+by)/2+2,"5α-reductase",{a:"end",c:"s m"});
  if(e==="17b")b+=T(x1+6,(ay+by)/2+4,"17β-HSD",{a:"start",c:"s m"})});
 /* compounds */
 Object.keys(CMP).forEach(k=>{const [x,y]=P(k),w=W(k),up=m.up.includes(k),dn=m.dn.includes(k),L=CMP[k][2].split("|"),col=k==="cortisol"?CV.tl:k==="aldo"?CV.or:k==="testo"||k==="dhea"||k==="andro"?CV.vi:CV.ink2;
  b+=`<g style="opacity:${dn?.3:1}">`+(up?`<rect x="${x-w/2-4}" y="${y-21}" width="${w+8}" height="42" rx="13" style="fill:none;stroke:${CV.acc};stroke-width:2.4"/>`:"")+RB(x-w/2,y-17,w,34,col,{r:11,p:up?26:["cortisol","aldo","testo"].includes(k)?20:8})+L.map((l,i)=>T(x,y+4+(L.length>1?(i-.5)*12:0),l,{c:l.length>13?"s":"bh"})).join("")+"</g>"+(up?TAG(x+w/2-6,y-17,"↑",CV.acc,{w:20}):"")});
 b+=TAG(56,SY[5],"Ang II · K⁺",CV.or,{w:84});
 /* lab panel */
 b+=FRAME(10,456,620,112);
 if(!m.lab){b+=T(320,490,"เลือก enzyme ด้านบนเพื่อดูว่าสารใดคั่ง (กรอบเรือง) และสารใดหาย (จาง)",{c:"bh"})+T(320,514,"ทุกชนิดเป็น autosomal recessive · cortisol ↓ → ACTH ↑ → ต่อมหมวกไตโตทั้งสองข้าง + ผิวคล้ำ (MSH)",{c:"s"})+T(320,536,"เกร็ด: enzyme ขึ้นต้นด้วย 1 → hypertension · ลงท้ายด้วย 1 → virilization ในเพศหญิง",{c:"s m"})}
 else{const n=m.lab.length,cw=600/n;m.lab.forEach(([l,v],i)=>{const x=20+i*cw,c=v==="↑"?CV.bad:CV.bl;b+=T(x+cw/2,478,l,{c:"s m"})+CT(x+cw/2,504,v,c,{s:20,wt:800})});
  b+=T(24,532,"Lab: "+m.key,{a:"start",c:"bh"})+T(24,554,m.pre,{a:"start",c:"s"})}
 return svg(b,"0 0 640 578")}

/* ---------- 6. cortisol ---------- */
const CSM={n:{t:"Circadian: สูงสุดช่วงเช้ามืด ต่ำสุดตอนดึก · มี pulse ซ้อนจาก CRH",acth:.5,cor:.5},cush:{t:"Cushing: ตอนดึกไม่ลด (เสีย circadian) · สูงทั้งวัน",acth:.8,cor:.9},exo:{t:"Steroid ภายนอก: CRH/ACTH ถูกกด → cortisol ตัวเองต่ำ",acth:.08,cor:.1},str:{t:"Stress: ACTH ↑ ในไม่กี่นาที · cortisol ↑ ได้ถึง ~20 เท่า",acth:.95,cor:.95}};
const BIGFIB=[["A","Appetite ↑",CV.or],["B","BP ↑: α₁ ↑ (permissive) · จับ MR",CV.lv],["I","Insulin resistance (diabetogenic)","var(--s-glc)"],["G","Gluconeogenesis · lipolysis · proteolysis",CV.ol],["F","Fibroblast ↓: striae, แผลหายช้า",CV.cy],["I","Immune ↓: PG/LT, IL-2 · eos/lymph ↓",CV.vi],["B","Bone formation ↓ (osteoblast ↓)","var(--s-urea)"]];
function corD(){const s=ST.cs,m=CSM[s];let b="";
 b+=FRAME(10,10,230,300)+T(24,32,"HPA axis",{a:"start",c:"bh"});
 b+=T(125,54,"stress · circadian (SCN)",{c:"s m"})+NODE(55,62,140,36,EN.hy,"Hypothalamus","CRH (PVN)",{p:10+m.acth*20})+NODE(55,132,140,40,EN.ap,"Corticotroph","POMC → ACTH",{p:10+m.acth*24})+NODE(55,210,140,40,CV.or,"Zona fasciculata","cortisol",{p:10+m.cor*26});
 b+=AW(125,98,125,130,CV.good,1+m.acth*3)+AW(125,172,125,208,EN.ap,1+m.acth*3);
 b+=CAW(195,230,236,170,197,152,CV.bad,1.4+m.cor*1.6,{dash:"4 3"})+CAW(195,236,250,120,197,80,CV.bad,1.4+m.cor*1.6,{dash:"4 3"});
 if(s==="exo")b+=TAG(125,284,"exogenous steroid",CV.bad,{w:130})+AW(190,276,206,244,CV.bad,1.4,{h:6});
 b+=T(125,272,s==="exo"?"":"CBG จับ ~90–95%",{c:"s m"});
 /* 24-h trace */
 b+=FRAME(250,10,380,300)+T(264,32,"Plasma cortisol ใน 24 ชั่วโมง",{a:"start",c:"bh"});
 const A=AX(290,50,320,210,[0,24],[0,40],[],[0,10,20,30,40],"","μg/dL",{yo:30});b+=A.g;
 ["00","06","12","18","24"].forEach((l,i)=>b+=`<line class="gl" x1="${A.X(i*6)}" y1="50" x2="${A.X(i*6)}" y2="260"/>`+T(A.X(i*6),276,l+":00",{c:"s m"}));
 const pulse=t=>[1,3,5.5,7,8.5,10.5,13,16,19,22].reduce((a,c)=>a+2.4*Math.exp(-((t-c)*(t-c))/(2*.25*.25)),0);
 const CB=MONO([[0,3.5],[2,4.5],[4,8],[6,15],[8,18],[10,15],[12,12.5],[14,10.5],[16,8.5],[18,7],[20,5.5],[22,4],[24,3.5]]),N=t=>CB(t)+pulse(t)*CB(t)/12;
 const f={n:N,cush:t=>21+2*CB(t)/18+pulse(t)*.7,exo:t=>1.5+pulse(t)*.15,str:t=>N(t)+(t>13?24*Math.exp(-(t-13.5)/3.5)*(1-Math.exp(-(t-13)*3)):0)}[s];
 b+=`<rect x="${A.X(22)}" y="50" width="${A.X(24)-A.X(22)}" height="210" style="fill:${tint(EN.hy,12)}"/>`+`<rect x="${A.X(0)}" y="50" width="${A.X(5)-A.X(0)}" height="210" style="fill:${tint(EN.hy,12)}"/>`+T(A.X(2.5),66,"sleep",{c:"s m"});
 if(s!=="n")b+=SP(FN(A,N,0,24,300),CV.mut,1.4,{dash:"4 3"});
 b+=SF(FN(A,f,0,24,300)+` L${A.X(24)},${A.Y(0)} L${A.X(0)},${A.Y(0)}Z`,CV.or,.14)+SP(FN(A,f,0,24,300),CV.or,2.4);
 if(s==="str")b+=CT(A.X(13.6),A.Y(36),"trauma",CV.bad,{a:"start",s:11});
 b+=T(440,300,m.t,{c:"s"});
 /* A BIG FIB */
 b+=T(24,338,"Cortisol is A BIG FIB",{a:"start",c:"bh"});
 BIGFIB.forEach(([L,t,c],i)=>{const col=i%4,row=Math.floor(i/4),x=14+col*154,y=350+row*80,w=148;b+=RB(x,y,w,72,c,{p:12})+CT(x+18,y+26,L,c,{s:20,wt:800})+wrapT(x+36,y+22,t,20,"s",14)});
 b+=RB(14+3*154,430,148,72,CV.mut,{p:8})+wrapT(14+3*154+12,452,"11β-HSD2 ที่ไตเปลี่ยน cortisol → cortisone ปกป้อง MR",22,"s",14);
 return svg(b,"0 0 640 512")}

/* ---------- 7. appetite regulation ---------- */
const APM={fast:{gh:.85,lep:.35,npy:.85,pomc:.2,hu:.9,t:"อดอาหาร: ghrelin ขึ้นก่อนมื้อ · leptin/insulin ต่ำ → NPY/AgRP ทำงาน → หิว พลังงานใช้ลดลง"},
 meal:{gh:.12,lep:.55,npy:.2,pomc:.8,hu:.15,t:"หลังอาหาร: ghrelin ตก · insulin, PYY, CCK, stretch (vagus) ↑ → POMC → α-MSH → MC4R → อิ่ม"},
 obese:{gh:.3,lep:.95,npy:.5,pomc:.45,hu:.6,t:"อ้วน: leptin สูงตามมวลไขมัน แต่ดื้อ leptin → ยังหิวได้"},
 lepdef:{gh:.5,lep:.02,npy:.95,pomc:.08,hu:1,t:"ขาด leptin (gene mutation) → สมองคิดว่าไม่มีไขมันสะสม → กินไม่หยุด อ้วนรุนแรง"},
 sleep:{gh:.7,lep:.3,npy:.7,pomc:.3,hu:.75,t:"อดนอน: ghrelin ↑ leptin ↓ → หิวมากขึ้น"},
 pws:{gh:.95,lep:.6,npy:.85,pomc:.25,hu:.95,t:"Prader–Willi: ghrelin สูงมาก → hyperphagia"}};
function appD(){const m=APM[ST.ap];let b="";
 b+=`<path d="${sm([[34,44],[220,28],[396,44],[400,246],[220,264],[30,246]])}" style="fill:${tint(EN.hy,8)};stroke:color-mix(in srgb,${EN.hy} 40%,transparent);stroke-width:1.3"/>`+T(40,56,"HYPOTHALAMUS",{a:"start",c:"s m"});
 b+=NODE(150,62,140,40,CV.bl,"PVN · MC4R","",{p:12});
 b+=NODE(40,150,150,50,CV.or,"NPY / AgRP","orexigenic · arcuate",{p:10+m.npy*34,sw:1+m.npy*1.5});
 b+=NODE(250,150,150,50,EN.th,"POMC / CART","anorexigenic · arcuate",{p:10+m.pomc*34,sw:1+m.pomc*1.5});
 b+=AW(325,150,262,102,EN.th,1+m.pomc*3)+T(310,124,"α-MSH ⊕",{a:"start",c:"s"});
 b+=INH(115,150,176,104,CV.or,1+m.npy*3)+T(120,124,"AgRP ⊣",{a:"end",c:"s"});
 b+=INH(190,186,248,186,CV.or,1+m.npy*2)+T(219,178,"NPY ⊣",{c:"s m"});
 /* periphery */
 const org=(x,y,c,n,h,v)=>NODE(x,y,120,46,c,n,h,{p:8+v*30});
 b+=org(20,310,CV.cy,"Stomach","ghrelin",m.gh)+org(160,310,CV.or,"Adipose","leptin",m.lep)+org(300,310,"var(--s-glc)","Pancreas","insulin",.4)+org(160,376,CV.ol,"Gut","PYY · CCK",ST.ap==="meal"?.8:.2);
 b+=AW(80,310,104,204,CV.cy,1+m.gh*3.4);
 b+=AW(232,310,312,204,CV.or,1+m.lep*2.4,{op:ST.ap==="obese"?.4:1})+INH(206,310,140,206,CV.or,1+m.lep*2.4,{op:ST.ap==="obese"?.4:1});
 b+=AW(350,310,340,204,"var(--s-glc)",1.6)+AW(250,380,312,204,CV.ol,1.4,{dash:"4 3",op:ST.ap==="meal"?1:.4});
 if(ST.ap==="obese")b+=CT(270,262,"leptin resistance",CV.bad,{s:11});
 /* meters */
 b+=FRAME(434,14,196,410)+T(448,38,"Signals",{a:"start",c:"bh"});
 [["Ghrelin",m.gh,CV.cy],["Leptin",m.lep,CV.or],["NPY/AgRP activity",m.npy,CV.or],["POMC activity",m.pomc,EN.th],["Hunger",m.hu,CV.bad]].forEach(([l,v,c],i)=>b+=MET(448,70+i*54,168,l,v,c));
 [["Lateral area = hunger center",CV.cy],["Ventromedial = satiety center",CV.or],["Endocannabinoid → อยากอาหาร",CV.vi]].forEach(([t,c],i)=>b+=DOT(452,340+i*24,4,c,{sw:0})+T(462,344+i*24,t,{a:"start",c:"s"}));
 b+=CAP(436,m.t);
 return svg(b,"0 0 640 480")}

/* ---------- 8. signaling pathways ---------- */
const SIG={camp:{ex:"เช่น glucagon → hepatocyte: glycogenolysis · TSH → follicular cell",n:"cAMP",c:CV.or,steps:["Hormone → GPCR","Gαs","Adenylyl cyclase","ATP → cAMP","PKA","phosphorylate targets"],h:"FSH · LH · ACTH · TSH · CRH · hCG · ADH (V2) · MSH · PTH · Calcitonin · Histamine (H2) · Glucagon · GHRH",mn:"FLAT ChAMPs CHuGG",x:"Gαi (เช่น somatostatin, α₂) ยับยั้ง adenylyl cyclase → cAMP ↓"},
 cgmp:{ex:"เช่น ANP → afferent arteriole คลาย + natriuresis",n:"cGMP",c:CV.cy,steps:["ANP/BNP → receptor GC","หรือ NO → soluble GC","GTP → cGMP","PKG","smooth muscle คลาย"],h:"BNP · ANP · EDRF (NO)",mn:"BAD GraMPa · vasodilation + diuresis",x:"Receptor มี guanylyl cyclase ในตัว (natriuretic peptides) หรือ GC ใน cytosol (NO)"},
 ip3:{ex:"เช่น ADH (V1) → vasoconstriction · GnRH → gonadotroph",n:"IP₃",c:CV.vi,steps:["Hormone → GPCR","Gαq","Phospholipase C","PIP₂ → IP₃ + DAG","IP₃ → Ca²⁺ จาก ER · DAG → PKC","response"],h:"GnRH · Oxytocin · ADH (V1) · TRH · Histamine (H1) · Angiotensin II · Gastrin",mn:"GOAT HAG",x:"Ca²⁺–calmodulin และ PKC เป็นตัวส่งต่อ · DAG ยังเป็นแหล่ง arachidonic acid"},
 nuc:{ex:"เช่น cortisol → สร้าง enzyme gluconeogenesis ในตับ",n:"Intracellular",c:CV.tl,steps:["Lipophilic hormone ผ่านเยื่อ","จับ receptor (cytosol/nucleus)","receptor เปลี่ยนรูป ปล่อย HSP","จับ HRE บน DNA","transcription → protein"],h:"Progesterone · Estrogen · Testosterone · Cortisol · Aldosterone · T₃/T₄ · Vitamin D",mn:"PET CAT in TV",x:"ฤทธิ์ช้า (ชั่วโมง–วัน) เพราะต้องสร้าง protein ใหม่"},
 rtk:{ex:"เช่น insulin → GLUT4 ขึ้นเยื่อ (PI3K–Akt)",n:"Receptor TK",c:CV.pk,steps:["Hormone จับ receptor","autophosphorylation (tyrosine)","docking: IRS / Grb2","Ras → MAP kinase","PI3K → Akt (metabolic)"],h:"IGF-1 · FGF · PDGF · EGF · Insulin",mn:"Get Found In the MAP",x:"Receptor มี kinase domain ในตัว"},
 jak:{ex:"เช่น GH → hepatocyte สร้าง IGF-1 · EPO → erythroid",n:"JAK/STAT",c:CV.ol,steps:["Hormone ทำให้ receptor dimerize","JAK (associated) phosphorylate","STAT จับ phospho-tyrosine","STAT dimer เข้า nucleus","transcription"],h:"G-CSF · EPO · TPO · Prolactin · cytokines (IL-2, IL-6, IFN) · GH",mn:"GET a JAKed PIG",x:"Receptor ไม่มี kinase เอง ใช้ JAK ที่เกาะอยู่ (nonreceptor TK) · leptin ก็ใช้ JAK2"}};
function sigD(){const k=ST.sg,P=SIG[k];let b="";const keys=Object.keys(SIG);
 /* membrane strip */
 b+=`<rect x="10" y="60" width="620" height="24" rx="12" style="fill:${tint(CV.or,14)};stroke:color-mix(in srgb,${CV.or} 40%,transparent)"/>`+T(24,52,"ECF",{a:"start",c:"s m"})+T(24,104,"cytosol",{a:"start",c:"s m"});
 keys.forEach((q,i)=>{const x=62+i*103,S=SIG[q],on=q===k;let g="";
  if(q==="nuc")g+=TAG(x,40,"steroid",S.c,{w:60})+AW(x,52,x,108,S.c,1.6)+`<rect x="${x-16}" y="110" width="32" height="18" rx="8" style="fill:${S.c}"/>`;
  else if(q==="rtk")g+=`<path d="M${x-6},40 V104 M${x+6},40 V104" style="stroke:${S.c};stroke-width:7;stroke-linecap:round"/>`+`<rect x="${x-14}" y="98" width="28" height="18" rx="5" style="fill:${S.c}"/>`;
  else if(q==="jak")g+=`<path d="M${x-6},40 V96 M${x+6},40 V96" style="stroke:${S.c};stroke-width:7;stroke-linecap:round"/>`+DOT(x-14,104,8,S.c,{sw:1})+DOT(x+14,104,8,S.c,{sw:1});
  else if(q==="cgmp")g+=`<path d="M${x},40 V104" style="stroke:${S.c};stroke-width:9;stroke-linecap:round"/>`+`<rect x="${x-14}" y="98" width="28" height="18" rx="5" style="fill:${S.c}"/>`;
  else g+=`<path d="M${x-12},44 C${x-12},60 ${x-4},60 ${x-4},72 S${x+4},84 ${x+4},72 S${x+12},60 ${x+12},44" style="fill:none;stroke:${S.c};stroke-width:5;stroke-linecap:round"/>`+DOT(x+20,100,8,S.c,{sw:1});
  g+=T(x,146,S.n,{c:on?"bh":"s"});b+=on?`<rect x="${x-50}" y="16" width="100" height="140" rx="14" style="fill:${tint(S.c,14)};stroke:${S.c};stroke-width:2"/>`+g:`<g style="opacity:.5">${g}</g>`});
 /* cascade */
 b+=FRAME(10,166,320,350)+T(24,190,P.n+" pathway",{a:"start",c:"bh"});
 P.steps.forEach((t,i)=>{const y=204+i*52;b+=RB(30,y,280,36,P.c,{r:18,p:12+i*4})+T(170,y+23,t,{c:t.length>30?"s":"bh"});if(i<P.steps.length-1)b+=AW(170,y+36,170,y+50,P.c,1.6,{h:6})});
 /* hormones */
 b+=FRAME(340,166,290,350)+T(354,190,"Hormones (FA)",{a:"start",c:"bh"});
 let x=354,y=216;P.h.split(" · ").forEach(h=>{const w=h.length*6.4+18;if(x+w>620){x=354;y+=30}b+=RB(x,y-14,w,24,P.c,{r:12,p:20})+T(x+w/2,y+3,h,{c:"s"});x+=w+6});
 b+=TAG(485,y+44,P.mn,P.c,{w:Math.min(270,P.mn.length*6.8+24)});
 b+=wrapT(354,y+84,P.x,40,"s",16);
 b+=RB(354,y+130,262,56,P.c,{p:8})+wrapT(366,y+152,P.ex,40,"s",16);
 return svg(b,"0 0 640 526")}

/* ---------- 9. steroid hormone signaling & SHBG ---------- */
const SHM={n:{f:1,t:"ปกติ: testosterone ~2% free · ~45% จับ SHBG · ที่เหลือจับ albumin"},up:{f:.5,t:"SHBG ↑ (estrogen/OCP, pregnancy, hyperthyroid): free testosterone ↓ → ชาย: gynecomastia"},dn:{f:1.9,t:"SHBG ↓ (androgens, obesity, DM, hypothyroid, nephrotic): free testosterone ↑ → หญิง: hirsutism"}};
function strD(){const s=ST.sh,m=SHM[s];let b="";
 /* cell */
 b+=FRAME(10,10,330,420)+T(24,32,"Steroid hormone → nucleus",{a:"start",c:"bh"});
 b+=`<rect x="24" y="44" width="70" height="372" rx="14" style="fill:${tint(CV.lv,10)}"/>`+T(59,62,"blood",{c:"s m"});
 b+=`<rect x="104" y="44" width="222" height="372" rx="24" style="fill:${tint(CV.tl,8)};stroke:color-mix(in srgb,${CV.tl} 45%,transparent);stroke-width:1.5"/>`;
 b+=`<ellipse cx="226" cy="320" rx="86" ry="76" style="fill:${tint(CV.vi,12)};stroke:${CV.vi}"/>`+T(226,386,"nucleus",{c:"s m"});
 b+=RB(34,90,50,26,CV.or,{r:13,p:30})+T(59,107,"SHBG",{c:"s"})+DOT(59,130,7,CV.tl,{sw:1.5})+T(59,150,"bound",{c:"s m"});
 b+=DOT(59,190,7,CV.tl,{sw:1.5})+T(59,210,"free",{c:"s m"})+AW(70,190,140,170,CV.tl,1.8);
 b+=T(152,96,"lipophilic → ผ่านเยื่อเอง",{a:"start",c:"s m"});
 b+=DOT(160,166,7,CV.tl,{sw:1.5})+RB(176,152,64,28,CV.pk,{r:12,p:24})+T(208,170,"R + HSP",{c:"s"})+AW(240,166,272,166,CV.ink2,1.6)+RB(276,152,44,28,CV.pk,{r:12,p:40})+T(298,170,"H–R",{c:"s"});
 b+=T(208,200,"1 จับ receptor · ปล่อย HSP",{c:"s m"});
 b+=AW(296,182,262,262,CV.pk,1.8)+T(270,226,"2 เข้า nucleus",{a:"end",c:"s m"});
 b+=SP("M156,300 H296",CV.ink2,3)+RB(186,280,80,20,CV.pk,{r:8,p:40})+T(226,294,"HRE",{c:"s"})+T(226,322,"3 transcription",{c:"s"});
 b+=AW(226,330,226,352,CV.vi,1.6)+T(226,368,"mRNA → protein",{c:"s"});
 /* SHBG panel */
 b+=FRAME(350,10,280,420)+T(364,32,"SHBG กับ free testosterone",{a:"start",c:"bh"});
 const fr=Math.min(.12,.02*m.f),sh=Math.max(.1,Math.min(.8,.45/(m.f))),al=1-fr-sh;
 const stack=(y,lab,note,k=1)=>{let x=370,g=T(370,y-8,lab,{a:"start",c:"bh"});const s2=Math.min(.85,sh*k),f2=fr/k,a2=1-s2-f2;[["SHBG",s2,CV.or],["albumin",a2,CV.ol],["free",f2,CV.acc]].forEach(([n,v,c])=>{const w=v*240;g+=`<rect x="${x}" y="${y}" width="${Math.max(3,w-1)}" height="30" rx="6" style="fill:${tint(c,n==="free"?90:40)};stroke:${c}"/>`+(w>50?T(x+w/2,y+19,n,{c:"s"}):"");x+=w});
  return g+T(370,y+48,note,{a:"start",c:"s"})};
 b+=stack(70,"Male",s==="up"?"free T ↓ เทียบ estrogen → gynecomastia":s==="dn"?"free T ปกติถึงสูง":"free T ~2%");
 b+=stack(170,"Female",s==="dn"?"free T ↑ → hirsutism":s==="up"?"free T ↓ (เช่นได้ OCP)":"SHBG สูงกว่าชาย ~2 เท่า",1.4);
 b+=TAG(490,262,`free fraction ×${f1c(m.f)}`,CV.acc,{w:150});
 b+=wrapT(370,298,"Steroid ละลายน้ำไม่ดีจึงต้องเดินทางกับ binding globulin · ส่วน free เท่านั้นเข้าเซลล์",38,"s",16);
 b+=wrapT(370,350,"Estrogen (OCP, pregnancy) กระตุ้นการสร้าง SHBG",38,"s m",16);
 b+=CAP(440,m.t);
 return svg(b,"0 0 640 484")}

/* ---------- 10. cortisol vs other stress / counter-regulatory hormones ---------- */
const CRG=[[82,"Insulin ↓","ด่านแรก: ลดการใช้ glucose","var(--s-glc)"],[68,"Glucagon ↑","ด่านที่สอง: glycogenolysis ทันที",CV.or],[68,"Epinephrine ↑","ด่านที่สาม: สำคัญเมื่อ glucagon บกพร่อง",CV.lv],[68,"Cortisol · GH ↑","สำหรับ hypoglycemia ที่นาน (ชั่วโมง)",CV.tl],[52,"อาการ","หิว เหงื่อ ใจสั่น → กินอาหาร",CV.vi],[49,"Cognition ↓","neuroglycopenia",CV.bad]];
function stD(){const G=ST.gl2;let b="";
 b+=FRAME(10,10,200,400)+T(24,32,"Plasma glucose",{a:"start",c:"bh"});
 const Y=v=>60+(100-v)/60*320;b+=`<rect x="80" y="60" width="34" height="320" rx="17" style="fill:var(--sb-surface2)"/>`+`<rect x="80" y="${Y(G)}" width="34" height="${380-Y(G)}" rx="17" style="fill:var(--s-glc);opacity:.85"/>`;
 [100,90,80,70,60,50,40].forEach(v=>b+=SP(`M116,${Y(v)} H124`,CV.mut,1)+T(128,Y(v)+4,v,{a:"start",c:"s m"}));
 CRG.forEach(([th,n,,c],i)=>b+=SP(`M60,${Y(th)} H80`,c,2.4)+T(56,Y(th)+4,th,{a:"end",c:"s"}));
 b+=TAG(97,Y(G)-16,`${G} mg/dL`,CV.acc,{w:76});
 b+=FRAME(220,10,410,400)+T(234,32,"Counter-regulation ตามลำดับ",{a:"start",c:"bh"});
 CRG.forEach(([th,n,d,c],i)=>{const on=G<=th+(i===0?3:0),y=46+i*60;b+=RB(234,y,382,52,c,{p:on?28:6,sw:on?2:1})+T(248,y+21,n,{a:"start",c:"bh"})+T(248,y+40,d,{a:"start",c:on?"s":"s m"})+T(602,y+21,on?"ON":"—",{a:"end",c:on?"bh":"s m"})});
 /* comparison */
 const rows=[["","Epinephrine","Glucagon","Cortisol","GH"],["เริ่มออกฤทธิ์","วินาที–นาที","นาที","ชั่วโมง","ชั่วโมง"],["ตับปล่อย glucose","glycogenolysis","glycogenolysis + GNG","GNG (สร้าง enzyme)","GNG ↑"],["ไขมัน","lipolysis ↑↑","lipolysis (ระดับสูง)","lipolysis ↑","lipolysis ↑"],["กล้ามเนื้อ","glycogen → lactate","—","proteolysis ↑","protein synth ↑"],["อื่นๆ","HR/BP ↑ · insulin ↓ (α₂)","ketogenesis","permissive · PNMT ↑","glucose uptake ↓"]];
 const cw=[120,125,125,125,125],y0=420;b+=FRAME(10,y0,620,6*30+12);
 rows.forEach((r,i)=>{let x=16;r.forEach((v,j)=>{b+=T(x+(j?cw[j]/2:4),y0+24+i*30,v,{a:j?"middle":"start",c:i===0||j===0?"bh":"s"});x+=cw[j]});if(i)b+=SP(`M16,${y0+6+i*30} H624`,CV.line,1)});
 return svg(b,"0 0 640 618")}

/* ================= sections ================= */
SEC.push({id:"glucagon",k:"a",t:"Glucagon & the fed–fasting switch",mm:"Glucagon · islet",leg:[],
tools:[["ff",[["fast","Fasting"],["carb","Carb meal"],["prot","Protein meal"],["ex","Exercise"]]]],draw:gluD,
notes:()=>`<h3>Islet</h3><ul>
<li>β cells ~60% อยู่กลาง islet (insulin, amylin) · α cells ~25% (glucagon) · δ cells ~10% (somatostatin) · PP cells เล็กน้อย ${S.g}</li>
<li>FA: α = ขอบนอก · β = ตรงกลาง · δ = กระจายแทรก ${S.fa}</li>
<li>Somatostatin จาก δ cell กดทั้ง insulin และ glucagon ภายใน islet · t½ เพียง ~3 นาที · ถูกกระตุ้นโดยแทบทุกปัจจัยที่เกี่ยวกับการกินอาหาร ${S.g}</li></ul>
<h3>ฤทธิ์ของ glucagon (ที่ตับ)</h3><ul>
<li>Glucagon receptor → Gs → adenylyl cyclase → cAMP → PKA → phosphorylase kinase → phosphorylase a → <b>glycogenolysis</b> (cascade ขยายสัญญาณได้มหาศาล) ${S.g}</li>
<li>ให้ glucagon ต่อเนื่อง ~4 ชั่วโมงทำให้ glycogen ในตับหมด แต่ glucose ยังสูงต่อเพราะ <b>gluconeogenesis</b> (ดึง amino acids เข้าตับ, pyruvate → PEP) ${S.g}</li>
<li>ระดับสูง: กระตุ้น lipase ในไขมัน · ลดการเก็บ triglyceride ในตับ · lipolysis และ ketogenesis ${S.g} ${S.fa}</li></ul>
<h3>การควบคุม</h3><ul>
<li>Hypoglycemia เป็นตัวกระตุ้นหลัก · glucose สูง, insulin, amylin, somatostatin กดการหลั่ง ${S.fa} ${S.g}</li>
<li><b>Amino acids</b> (alanine, arginine) กระตุ้นทั้ง glucagon และ insulin → มื้อโปรตีนล้วนไม่ทำให้ hypoglycemia ${S.g}</li>
<li>ออกกำลังหนัก glucagon เพิ่ม 4–5 เท่า แม้ glucose ยังไม่ลด ${S.g}</li>
<li>ปกติ glucose เช้าก่อนอาหาร 80–90 mg/dL · หลังอาหาร ~120–140 และกลับสู่ระดับเดิมใน ~2 ชั่วโมง · ตับเก็บ glucose ที่ดูดได้ถึง ~⅔ เป็น glycogen ${S.g}</li></ul>`});

SEC.push({id:"insulin",k:"a",t:"Insulin: synthesis & secretion",mm:"β-cell secretion (interactive)",leg:[],
tools:[["sec",[["none","Glucose only"],["su","Sulfonylurea"],["inc","+ GLP-1"],["inh","α₂ / SST"]]]],ctrl:()=>SL("glc","Glucose",40,400,5,"mg/dL"),wire:()=>WIRE(),draw:insD,
notes:()=>`<h3>Synthesis</h3><ul>
<li>Preproinsulin (RER) → ตัด signal → <b>proinsulin</b> เก็บใน granule → ตัดเป็น insulin + <b>C-peptide</b> หลั่งออกในสัดส่วนเท่ากัน ${S.fa}</li>
<li>ตับดึง insulin ~60% ในรอบแรกที่ผ่าน portal แต่ไม่ดึง C-peptide → C-peptide สะท้อนการหลั่งจริง ${S.b}</li>
<li>Insulin ภายนอกไม่มี C-peptide → ใช้แยก factitious hypoglycemia จาก insulinoma/sulfonylurea ${S.fa}</li>
<li>Insulin ไม่ผ่านรก แต่ glucose ผ่าน → แม่เป็นเบาหวาน ทารกหลั่ง insulin มาก ${S.fa}</li></ul>
<h3>กลไกการหลั่ง</h3><ul>
<li>Glucose เข้าเซลล์ทาง <b>GLUT2</b> → <b>glucokinase</b> (ขั้นจำกัดอัตรา = glucose sensor) → glucose-6-phosphate → ATP ${S.g}</li>
<li>ATP ปิด <b>ATP-sensitive K⁺ channel</b> → depolarize → voltage-gated Ca²⁺ channel เปิด → Ca²⁺ เข้า → exocytosis ${S.g} ${S.fa}</li>
<li>Sulfonylureas จับ K_ATP แล้วปิดช่อง → หลั่งแม้ glucose ต่ำ ${S.g}</li>
<li>Glucagon, GIP, acetylcholine เสริมฤทธิ์ glucose แต่แทบไม่กระตุ้นเมื่อไม่มี glucose · somatostatin และ α-adrenergic ยับยั้ง ${S.g}</li>
<li>FA: α₂ ลด · β₂ เพิ่มการหลั่ง (“2 = regulates insulin”) ${S.fa}</li></ul>
<h3>ความสัมพันธ์กับ glucose</h3><ul>
<li>ที่ glucose 80–90 mg/dL หลั่งน้อยมาก · เกิน ~100 เพิ่มเร็ว จนถึง 10–25 เท่าของ basal ที่ 400–600 mg/dL · หยุดได้ใน 3–5 นาทีเมื่อ glucose กลับปกติ ${S.g}</li>
<li>Amino acids (arginine, lysine) เสริมการหลั่งที่กระตุ้นด้วย glucose ได้เกือบเท่าตัว ${S.g}</li>
<li>GH, cortisol, glucagon ที่สูงนานกระตุ้น β cell จนอาจล้า → เบาหวานใน acromegaly/Cushing ${S.g}</li></ul>
<div class="pearl">เลื่อน glucose ลงต่ำแล้วกด <b>Sulfonylurea</b>: K_ATP ปิด granule ยังหลั่ง → นี่คือเหตุที่ยาเสี่ยง hypoglycemia · เทียบกับ <b>GLP-1</b> ที่เสริมเฉพาะตอน glucose สูง</div>`});

SEC.push({id:"insact",k:"a",t:"Insulin actions & glucose transporters",mm:"Receptor TK · GLUTs",leg:[],
tools:[["gl",[["none","No insulin"],["ins","Insulin"],["ex","Exercise"]]]],draw:iacD,
notes:()=>`<h3>Insulin receptor</h3><ul>
<li>Receptor เป็น heterotetramer (α₂β₂) คล้าย IGF-1 receptor · β subunit เป็น <b>tyrosine kinase</b> ที่ autophosphorylate ${S.b}</li>
<li>สัญญาณผ่าน IRS → PI3K → Akt/PKB → GLUT4 แทรกเยื่อ · อีกสาย Ras → MAPK → growth ${S.b} ${S.fa}</li>
<li>Insulin ถูกกำจัดทั้งที่ตับและไต · t½ ในเลือดเฉลี่ย ~6 นาที ${S.fa} ${S.g}</li></ul>
<h3>Anabolic effects</h3><ul>
<li>Glucose transport ↑ (กล้ามเนื้อ, ไขมัน) · glycogen synthesis · triglyceride synthesis · protein synthesis · K⁺ และ amino acid เข้าเซลล์ · Na⁺ retention ที่ไต ${S.fa}</li>
<li>ยับยั้ง lipolysis และการหลั่ง glucagon ${S.fa}</li>
<li>หลังอาหาร glucose ส่วนใหญ่ถูกเก็บในตับเป็น glycogen ทันที · ตับใช้ GLUT2 ไม่ต้องพึ่ง GLUT4 ${S.g} ${S.b}</li></ul>
<h3>GLUTs</h3><ul>
<li><b>GLUT4</b> (insulin-dependent): skeletal muscle, adipose · ออกกำลังเพิ่ม GLUT4 ได้เอง ${S.fa} ${S.b}</li>
<li>GLUT1: RBC, brain, cornea, placenta · GLUT2 (สองทาง): β cell, ตับ, ไต, ลำไส้ · GLUT3: brain, placenta · GLUT5: fructose · SGLT1/2: ลำไส้, ไต ${S.fa}</li>
<li><b>BRICK LIPS</b> ใช้ glucose โดยไม่ต้องมี insulin: Brain, RBC, Intestine, Cornea, Kidney, Liver, Islet β cells, Placenta, Spermatocytes ${S.fa}</li>
<li>RBC ใช้ glucose อย่างเดียว (ไม่มี mitochondria) · สมองใช้ ketone ได้ช่วงอดอาหาร ${S.fa}</li></ul>`});

SEC.push({id:"ogtt",k:"a",t:"Glucose–insulin dynamics: OGTT & incretins",mm:"OGTT · incretin · phases",leg:[],
tools:[["og",[["oral","Oral vs IV"],["ivb","IV bolus"],["t1","Type 1 DM"],["t2","Type 2 DM"]]]],draw:ogD,
notes:()=>`<ul>
<li>Glucose อดอาหาร ~4–5 mM · แม้มื้อใหญ่มากก็ไม่เกิน ~10 mM · glucose ลดเพียง 20% ทำให้ insulin ลดลงมาก ${S.b}</li>
<li><b>Incretin effect</b>: glucose ทางปากกระตุ้น insulin มากกว่า IV ที่ทำให้ glucose ในเลือดเท่ากัน · เพราะ GLP-1, GIP จากลำไส้ ${S.b} ${S.fa}</li>
<li>Glucose IV แบบ bolus → <b>1st phase</b> (2–5 นาที จาก granule ที่พร้อม) แล้ว <b>2nd phase</b> ตลอดที่ glucose สูง ${S.b}</li>
<li>Guyton: insulin เพิ่ม ~10 เท่าใน 3–5 นาที แล้วลดครึ่งทาง จากนั้นขึ้นใหม่ตั้งแต่ ~15 นาที จนคงที่ใน 2–3 ชั่วโมง ${S.g}</li>
<li>การสูญเสีย 1st phase เป็นความผิดปกติแรกๆ ทั้งใน T1DM และ T2DM ${S.b}</li>
<li>T1DM: oral glucose ได้ insulin น้อยมาก glucose สูงและนาน · 2-h ≥ 200 mg/dL = diabetes ${S.b}</li>
<li>T2DM: insulin resistance ร่วมกับ β-cell dysfunction · insulin อาจสูงแต่ตอบสนองช้า ${S.h}</li></ul>
<div class="pearl">แถบชมพูระหว่างเส้นทึบกับเส้นประในโหมด <b>Oral vs IV</b> คือ insulin ส่วนที่มาจาก incretins (เป้าของ GLP-1 agonist และ DPP-4 inhibitor)</div>`});

SEC.push({id:"cah",k:"b",t:"Adrenal steroids & congenital adrenal hyperplasia",mm:"Steroidogenesis · CAH (interactive)",leg:[],
tools:[["cah",[["none","Pathway"],["21","21-OH def."],["11","11β-OH def."],["17","17α-OH def."]]]],draw:cahD,
notes:()=>`<h3>เส้นทาง</h3><ul>
<li>เริ่มจาก cholesterol (LDL หรือสร้างเอง) → <b>SCC (desmolase)</b> ใน mitochondria ได้ pregnenolone · การส่ง cholesterol เข้า mitochondria (StAR) / SCC เป็นขั้นจำกัดอัตรา ${S.b} ${S.fa}</li>
<li>3β-HSD → progesterone · 17α-hydroxylase → 17-OH-progesterone · 21-hydroxylase → 11-deoxycortisol · 11β-hydroxylase → <b>cortisol</b> ${S.b}</li>
<li>Zona glomerulosa แทบไม่มี 17α-hydroxylase → ทำ aldosterone ผ่าน 11-deoxycorticosterone และใช้ <b>aldosterone synthase</b> ที่มีเฉพาะชั้นนี้ ${S.b}</li>
<li>Zona reticularis ใช้ enzyme ตัวเดียวกัน (17,20-lyase activity) สร้าง DHEA, androstenedione · ตัวมันเองอ่อน แต่เนื้อเยื่ออื่นแปลงเป็น testosterone ได้ (สำคัญในหญิง) ${S.b}</li>
<li>Angiotensin II และ K⁺ เป็นตัวกระตุ้นหลักของ aldosterone · ACTH มีส่วนน้อยกว่า ${S.b} ${S.fa}</li>
<li>11β-HSD2 (ไต) เปลี่ยน cortisol → cortisone ป้องกัน MR · glycyrrhetinic acid (licorice) ยับยั้ง → apparent mineralocorticoid excess ${S.g} ${S.b}</li></ul>
<h3>CAH</h3><ul>
<li><b>21-hydroxylase</b> (CYP21A2) พบ 90–95% · ขาด cortisol + aldosterone → ACTH ↑ → precursor ไหลไปทาง androgen → salt-wasting, virilizing CAH · หญิงมี ambiguous genitalia, ชายมาด้วย dehydration, hypotension, hyperkalemia ${S.h} ${S.b}</li>
<li>ชนิดรุนแรงน้อย (nonclassic) มาตอนวัยรุ่น–ผู้ใหญ่ โดยยังสร้าง cortisol ได้ ${S.h}</li>
<li><b>11β-hydroxylase</b>: 11-deoxycorticosterone (DOC) คั่ง → ฤทธิ์ mineralocorticoid → hypertension, K⁺ ต่ำ, renin ต่ำ + virilization ${S.h} ${S.fa}</li>
<li><b>17α-hydroxylase</b>: ไม่มี cortisol และ sex steroids · DOC ↑ → hypertension · XY: atypical genitalia · XX: ไม่มีลักษณะเพศทุติยภูมิ ${S.fa}</li>
<li>ทุกชนิดเป็น autosomal recessive · ACTH สูง → ต่อมหมวกไตโตสองข้างและผิวคล้ำ ${S.fa}</li></ul>
<div class="pearl">“ขึ้นต้นด้วย <b>1</b>” (11β, 17α) → <b>hypertension</b> · “ลงท้ายด้วย <b>1</b>” (21, 11β) → <b>virilization</b> ในเพศหญิง</div>`});

SEC.push({id:"cortisol",k:"b",t:"Cortisol",mm:"Cortisol · HPA · A BIG FIB",leg:[],
tools:[["cs",[["n","Normal"],["str","Acute stress"],["cush","Cushing"],["exo","Exogenous steroid"]]]],draw:corD,
notes:()=>`<h3>การควบคุม</h3><ul>
<li>CRH (paraventricular nucleus) → ACTH จาก corticotroph → zona fasciculata สร้าง cortisol · cortisol feedback ยับยั้งทั้ง CRH และ ACTH ${S.b} ${S.fa}</li>
<li>ACTH หลั่งแบบ circadian (สูงช่วงเช้ามืด ต่ำตอนเย็น/ดึก) ซ้อนกับ pulse ของ CRH ${S.b} ${S.g}</li>
<li>Stress ทางกายหรือใจเพิ่ม ACTH ได้ภายในไม่กี่นาที · cortisol เพิ่มได้ถึง ~20 เท่า ${S.g}</li>
<li>Cortisol จับโปรตีน 90–95% (CBG/transcortin เป็นหลัก) → t½ 60–90 นาที · aldosterone จับน้อยกว่า t½ ~20 นาที ${S.g}</li>
<li>Glucocorticoid ใช้นาน → CRH ถูกกด → ต่อมหมวกไตฝ่อ ${S.fa}</li></ul>
<h3>Cortisol is A BIG FIB</h3><ul>
<li><b>Appetite</b> ↑ · <b>BP</b>: เพิ่ม α₁-receptor บน arteriole (permissive ต่อ NE/Epi) และจับ MR ได้เมื่อระดับสูง ${S.fa}</li>
<li><b>Insulin resistance</b> · <b>Gluconeogenesis</b>: สร้าง enzyme ใน gluconeogenesis ที่ตับ (เพิ่มได้ 6–10 เท่า), proteolysis ในกล้ามเนื้อ, lipolysis ${S.b} ${S.g}</li>
<li><b>Fibroblast</b> ↓ → collagen ↓, striae, แผลหายช้า ${S.fa}</li>
<li><b>Inflammation/Immune</b> ↓: ยับยั้ง prostaglandins/leukotrienes, การเกาะของ WBC (→ neutrophilia), histamine จาก mast cell, IL-2 · eosinopenia, lymphopenia ${S.fa} ${S.g}</li>
<li>Cortisol stabilize lysosome, ลด capillary permeability, กดการแบ่งตัวของ T lymphocyte ${S.g}</li>
<li><b>Bone</b> formation ↓ (osteoblast ↓) และลดการดูด Ca²⁺ ทางลำไส้ → osteoporosis ${S.b}</li>
<li>ใช้ glucocorticoid ขนาดสูงเสี่ยง reactivation ของ TB และ candidiasis ${S.fa}</li></ul>
<h3>Cushing (endogenous)</h3><ul>
<li>อ้วนลงพุง หน้ากลม buffalo hump แขนขาลีบ ผิวบาง ช้ำง่าย กล้ามเนื้อต้นแขนขาอ่อนแรง glucose สูง · hypertension จากฤทธิ์ mineralocorticoid ของ cortisol (ยาสังเคราะห์ส่วนใหญ่ไม่มีฤทธิ์นี้) ${S.b}</li></ul>`});

SEC.push({id:"appetite",k:"c",t:"Appetite regulation",mm:"Ghrelin · leptin",leg:[],
tools:[["ap",[["fast","Fasting"],["meal","After meal"],["obese","Obesity"],["lepdef","Leptin deficiency"],["sleep","Sleep loss"],["pws","Prader–Willi"]]]],draw:appD,
notes:()=>`<h3>Arcuate nucleus: 2 กลุ่มเซลล์</h3><ul>
<li><b>POMC/CART</b> neuron หลั่ง α-MSH → MC3R/MC4R ใน paraventricular nucleus → กินน้อยลง ใช้พลังงานมากขึ้น ${S.g}</li>
<li><b>NPY/AgRP</b> neuron → หิว ใช้พลังงานลด · AgRP เป็น antagonist ของ MC4R ${S.g}</li>
<li>Insulin, leptin, CCK กด NPY/AgRP และกระตุ้น POMC · ghrelin กระตุ้น NPY/AgRP ${S.g}</li>
<li>FA: lateral hypothalamus = hunger center (ghrelin) · ventromedial = satiety center (leptin) ${S.fa}</li></ul>
<h3>Ghrelin</h3><ul>
<li>สร้างจากกระเพาะ (oxyntic mucosa) · สูงขึ้นช่วงอดอาหาร พีคก่อนมื้อ แล้วลดเร็วหลังกิน ${S.g}</li>
<li>จับ GH secretagogue receptor → GH ↑ และกระตุ้นความหิว (orexigenic) ${S.b} ${S.fa}</li>
<li>อดนอน อดอาหาร และ Prader–Willi syndrome → ghrelin ↑ · “ghrelin makes you ghrow hunghry” ${S.fa}</li></ul>
<h3>Leptin</h3><ul>
<li>สร้างจากเซลล์ไขมันมากขึ้นตามขนาดเซลล์ → ยับยั้งการกิน · receptor ใช้ <b>JAK2</b> ${S.g}</li>
<li>Gene ของ leptin กลายพันธุ์ → อ้วนรุนแรง · คนอ้วนมี leptin สูงแต่ดื้อต่อฤทธิ์ · อดนอน/อดอาหารทำให้ leptin ลด ${S.fa}</li></ul>
<h3>สัญญาณอื่น</h3><ul>
<li>กระเพาะยืด (vagus), PYY, CCK, insulin หลั่งหลังกิน → ยับยั้งการกินต่อ ${S.g}</li>
<li>Endocannabinoids ออกฤทธิ์ที่ hypothalamus และ nucleus accumbens (homeostatic + hedonic) → อยากอาหาร ${S.fa}</li></ul>`});

SEC.push({id:"signal",k:"d",t:"Signaling pathways of endocrine hormones",mm:"cAMP · IP₃ · TK · JAK/STAT",leg:[],
tools:[["sg",[["camp","cAMP"],["cgmp","cGMP"],["ip3","IP₃"],["nuc","Intracellular"],["rtk","Receptor TK"],["jak","JAK/STAT"]]]],draw:sigD,
notes:()=>`<h3>Second messengers</h3><ul>
<li><b>cAMP</b>: hormone → GPCR → Gs → adenylyl cyclase → cAMP → PKA → phosphorylation cascade ที่ขยายสัญญาณได้มาก · ถ้า receptor จับ Gi → cAMP ลด ${S.g}</li>
<li>ผลของ cAMP ขึ้นกับเครื่องมือในเซลล์เป้า: thyroid สร้าง T₃/T₄, adrenal สร้าง steroid, tubule เพิ่มการซึมน้ำ ${S.g}</li>
<li><b>IP₃/DAG</b>: GPCR → Gq → phospholipase C แยก PIP₂ → IP₃ ปล่อย Ca²⁺ จาก ER + DAG กระตุ้น PKC ${S.g}</li>
<li><b>cGMP</b>: ANP/BNP (receptor guanylyl cyclase) และ NO (soluble GC) → vasodilation, natriuresis ${S.g} ${S.fa}</li></ul>
<h3>Enzyme-linked receptors</h3><ul>
<li><b>Receptor tyrosine kinase</b>: insulin, IGF-1 (และ growth factors) → autophosphorylation → MAP kinase / PI3K ${S.b} ${S.fa}</li>
<li><b>JAK/STAT</b>: receptor ตระกูล cytokine ไม่มี kinase ในตัว → JAK ที่เกาะอยู่ phosphorylate STAT · GH, prolactin, leptin, EPO, cytokines ${S.b} ${S.g} ${S.fa}</li>
<li><b>Intracellular receptors</b>: steroid, T₃/T₄, vitamin D → จับ hormone response element → ควบคุม transcription ${S.g}</li></ul>
<h3>Mnemonics (FA)</h3><table><tr><th>Pathway</th><th>Mnemonic</th></tr>
<tr><td>cAMP</td><td>FLAT ChAMPs CHuGG</td></tr><tr><td>cGMP</td><td>BAD GraMPa</td></tr><tr><td>IP₃</td><td>GOAT HAG</td></tr>
<tr><td>Intracellular</td><td>PET CAT in TV</td></tr><tr><td>Receptor TK</td><td>Get Found In the MAP</td></tr><tr><td>JAK/STAT</td><td>GET a JAKed PIG</td></tr></table>
<div class="pearl">ADH และ histamine ใช้คนละทางตาม receptor: <b>V2/H2 = cAMP</b> · <b>V1/H1 = IP₃</b></div>`});

SEC.push({id:"steroid",k:"d",t:"Steroid hormone signaling & binding globulins",mm:"Nuclear receptor · SHBG",leg:[],
tools:[["sh",[["n","Normal SHBG"],["up","SHBG ↑"],["dn","SHBG ↓"]]]],draw:strD,
notes:()=>`<h3>กลไก</h3><ul>
<li>Steroid ละลายในไขมัน ผ่านเยื่อเซลล์ได้เอง → จับ receptor ใน cytoplasm หรือ nucleus → hormone–receptor complex จับ <b>hormone response element</b> → เปิด/ปิด transcription ${S.g} ${S.fa}</li>
<li>Glucocorticoid receptor อยู่ใน superfamily เดียวกับ receptor ของ mineralocorticoid, sex steroids, vitamin D, vitamin A และ thyroid hormone · ทำงานเป็น dimer ${S.b}</li>
<li>Cortisol ยังมีฤทธิ์ nongenomic ที่เร็ว (เช่น feedback กดการปล่อย ACTH ภายในไม่กี่นาที) ${S.b}</li></ul>
<h3>Binding globulins</h3><ul>
<li>Steroid ต้องเดินทางกับ binding globulin เพราะละลายน้ำไม่ดี ${S.fa}</li>
<li>Testosterone ~45% จับ SHBG, ~53% จับ albumin (ส่วนน้อยจับ CBG) และ free เพียง ~2% ${S.b}</li>
<li>Estrogen กระตุ้นการสร้าง SHBG → ผู้หญิงมี SHBG สูงกว่าชาย ~2 เท่า ${S.b}</li>
<li>SHBG ↓: androgens, อ้วน, เบาหวาน, hypothyroidism, nephrotic syndrome · SHBG ↑: estrogen, hyperthyroidism, โรคอักเสบเรื้อรัง ${S.h}</li>
<li>ชาย: SHBG ↑ → free testosterone ↓ → gynecomastia · หญิง: SHBG ↓ → free testosterone ↑ → hirsutism ${S.fa}</li>
<li>Hyperthyroidism เพิ่ม SHBG → สัดส่วน free estradiol/testosterone สูง → gynecomastia ${S.h}</li></ul>`});

SEC.push({id:"stress",k:"d",t:"Cortisol vs other stress & counter-regulatory hormones",mm:"Counter-regulation (interactive)",leg:[],
ctrl:()=>SL("gl2","Glucose",40,100,1,"mg/dL"),wire:()=>WIRE(),draw:stD,
notes:()=>`<h3>เมื่อ glucose ลดลง (ตามลำดับ)</h3><ul>
<li>~80–85 mg/dL: insulin ลด = ด่านแรก · ~65–70: glucagon ↑ (ด่านที่สอง), epinephrine ↑ (ด่านที่สาม, สำคัญเมื่อ glucagon บกพร่อง), cortisol และ GH ↑ (ช่วย hypoglycemia ที่นาน) ${S.h}</li>
<li>~50–55: มีอาการ (เหงื่อ ใจสั่น หิว) กระตุ้นให้กิน · < 50: cognition ลด ${S.h}</li>
<li>Threshold เลื่อนได้: เบาหวานคุมไม่ดีมีอาการที่ระดับสูงกว่า · hypoglycemia ซ้ำๆ (insulinoma, คุมเข้มมาก) มีอาการที่ระดับต่ำกว่า ${S.h}</li></ul>
<h3>ความต่างของแต่ละตัว</h3><ul>
<li><b>Epinephrine</b>: glycogenolysis ที่ตับปล่อย glucose ได้ภายในไม่กี่นาที และกระตุ้น hormone-sensitive lipase โดยตรง → fatty acids เพิ่มมากกว่า glucose ${S.g}</li>
<li><b>Glucagon</b>: glycogenolysis ทันที ตามด้วย gluconeogenesis ${S.g}</li>
<li><b>GH และ cortisol</b>: หลั่งเมื่อ hypoglycemia เหมือนกัน ลดการใช้ glucose ในเซลล์และเพิ่มการใช้ไขมัน แต่ฤทธิ์ต้องใช้หลายชั่วโมง ${S.g}</li>
<li>การเปลี่ยนไปใช้ไขมันด้วย cortisol ไม่เร็วและไม่แรงเท่าการลดลงของ insulin ${S.g}</li>
<li>Cortisol ที่ไหลผ่าน medulla เพิ่ม <b>PNMT</b> → สร้าง epinephrine ได้มากขึ้น = แกน CRH–ACTH–cortisol เสริมแกน sympathetic–epinephrine ${S.b}</li>
<li>Catecholamines ผ่าน α-adrenergic receptor ยับยั้งการหลั่ง insulin (ปล่อยให้ glucose ขึ้นได้) ${S.g}</li></ul>
<div class="pearl">เลื่อน glucose ลงช้าๆ แล้วดูว่า hormone ตัวไหนเริ่มทำงานก่อน · ถ้าไม่มี glucagon (T1DM นาน) epinephrine กลายเป็นด่านสำคัญ</div>`});

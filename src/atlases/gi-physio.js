/* ================= Gastrointestinal Physiology =================
   First Aid Step 1 2025 (Gastrointestinal · Physiology, book pp. 378–382) order ·
   Guyton & Hall 12e Ch 62–66 (+ Ch 70 bilirubin) · Boron & Boulpaep 3e Ch 41–46 ·
   Harrison 22e Ch 335–336, 347, 349. All drawings are original schematics. */
//@include _cvs-physio-kit.js
/* Labels toggle: anatomical name labels are hidden when ST.labels is off */
const LB=s=>ST.labels?s:"";
Object.assign(GN,{a:"GI regulatory substances",b:"Gastric secretion",c:"Pancreas & digestion",d:"Absorption & mucosal immunity",e:"Bile & bilirubin",f:"Motility & enteric nervous system"});
Object.assign(ST,{ph:"ceph",sp:"acid",pc:"meal",pf:.6,pd:"sec",cb:"n",pr:"n",ft:"n",vm:"n",fe:"n",bt:"n",pp:"all",bl:"n",jt:"n",mo:"sw",en:"n"});
const EXTRA=["motil","ens"];

/* ---------- GI drawing kit (theme tokens only) ---------- */
const GC={st:CV.pk,du:CV.or,pa:CV.vi,li:CV.rd,gb:CV.ol,co:CV.cy,bl:CV.lv,ly:CV.cy,nv:CV.bl,im:CV.vi,
 h:"var(--s-h)",hco3:"var(--s-hco3)",na:"var(--s-na)",k:"var(--s-k)",cl:"var(--s-cl)",glc:"var(--s-glc)",w:"var(--s-h2o)",ca:"var(--s-ca)",fat:"var(--s-urea)",org:"var(--s-org)"};
const NODE=(x,y,w,h,c,t,s,o={})=>RB(x,y,w,h,c,{r:o.r??12,p:o.p??14,sw:o.sw,dash:o.dash,fill:o.fill})+(t?T(x+w/2,y+(s?h/2-1:h/2+4),t,{c:o.big?"b":"bh"}):"")+(s?T(x+w/2,y+h/2+14,s,{c:"s m"}):"");
function INH(x1,y1,x2,y2,c,w=1.8,o={}){const a=Math.atan2(y2-y1,x2-x1),px=Math.sin(a)*7,py=-Math.cos(a)*7;
 return SP(`M${x1},${y1} L${x2},${y2}`,c,w,o)+SP(`M${(x2-px).toFixed(1)},${(y2-py).toFixed(1)} L${(x2+px).toFixed(1)},${(y2+py).toFixed(1)}`,c,w+1.2,{op:o.op})}
function CAW(x1,y1,cx,cy,x2,y2,c,w=1.6,o={}){const a=Math.atan2(y2-cy,x2-cx),h=o.h||8,bx=x2-h*Math.cos(a),by=y2-h*Math.sin(a);
 return SP(`M${x1},${y1} Q${cx},${cy} ${bx.toFixed(1)},${by.toFixed(1)}`,c,w,o)+`<path d="M${x2},${y2} L${(bx+h*.55*Math.sin(a)).toFixed(1)},${(by-h*.55*Math.cos(a)).toFixed(1)} L${(bx-h*.55*Math.sin(a)).toFixed(1)},${(by+h*.55*Math.cos(a)).toFixed(1)}Z" style="fill:${c}${o.op!=null?";opacity:"+o.op:""}"/>`}
const ION=(x,y,t,c,r=10)=>`<circle cx="${x}" cy="${y}" r="${r}" style="fill:${c};stroke:var(--sb-plate);stroke-width:1.5"/>`+T(x,y+3.2,t,{c:"ion"});
const XM=(x,y,c=CV.bad,s=18)=>CT(x,y+s*.35,"✕",c,{s,wt:800});
function MET(x,y,w,lab,v,c,o={}){const vv=Math.max(0,Math.min(1,v));let g=T(x,y-6,lab,{a:"start",c:"s"})+`<rect x="${x}" y="${y}" width="${w}" height="12" rx="6" style="fill:var(--sb-surface2)"/>`;
 if(o.n)g+=`<rect x="${x+w*o.n[0]}" y="${y-2}" width="${w*(o.n[1]-o.n[0])}" height="16" rx="4" style="fill:none;stroke:${CV.mut};stroke-width:1;stroke-dasharray:3 2"/>`;
 g+=`<rect x="${x}" y="${y}" width="${(w*vv).toFixed(1)}" height="12" rx="6" style="fill:${c}"/>`;if(o.t)g+=T(x+w,y-6,o.t,{a:"end",c:"bh"});return g}
const DIM=(on,s,op=.2)=>on?s:`<g style="opacity:${op}">${s}</g>`;
function capSplit(s,n=96){if(s.length<=n)return [s];const mid=s.length/2;let best=-1,bs="";
 for(const sep of [" · "," → ",", "," "]){let i=-1;while((i=s.indexOf(sep,i+1))>=0)if(best<0||Math.abs(i-mid)<Math.abs(best-mid)){best=i;bs=sep}if(best>0&&Math.abs(best-mid)<s.length*.25)break}
 if(best<=0)return [s];const k=bs===", "?best+1:best;return [s.slice(0,k).trim(),s.slice(k).replace(/^[\s·,]+/,"").trim()]}
const CAP=(y,s,w=612,x=14)=>{const L=capSplit(s),h=L.length>1?48:34;return RB(x,y,w,h,CV.acc,{p:9,r:17})+L.map((l,i)=>T(x+w/2,y+(L.length>1?20+i*16:22),l,{c:"s"})).join("")};
const RING=(x,y,r,c)=>`<circle cx="${x}" cy="${y}" r="${r}" style="fill:none;stroke:${c};stroke-width:2.4;stroke-dasharray:4 3"/>`;
/* membrane transporter: pill on a vertical membrane at (x,y) */
const TP=(x,y,c,lab,o={})=>`<rect x="${x-9}" y="${y-15}" width="18" height="30" rx="8" style="fill:${o.off?tint(CV.bad,30):c};stroke:${o.off?CV.bad:c};stroke-width:1.4"/>`+(lab?T(x+(o.la||0),y+(o.ly??-21),lab,{c:"s",a:o.a||"middle"}):"")+(o.off?XM(x,y-2):"");
/* hexose glyph */
const HEX=(x,y,c,t,r=9)=>{const p=[...Array(6)].map((_,i)=>[x+r*Math.cos(Math.PI/3*i+Math.PI/6),y+r*Math.sin(Math.PI/3*i+Math.PI/6)]);
 return `<path d="M${p.map(q=>q[0].toFixed(1)+","+q[1].toFixed(1)).join(" L")}Z" style="fill:${c};stroke:var(--sb-plate);stroke-width:1.2"/>`+(t?`<text x="${x}" y="${y+3}" text-anchor="middle" style="font:800 7.5px var(--sb-font);fill:var(--sb-plate)">${t}</text>`:"")};
/* immunoglobulin Y glyph */
const YG=(x,y,c,s=1,rot=0)=>`<g transform="translate(${x},${y}) rotate(${rot}) scale(${s})"><path d="M0,10 V0 M0,0 L-7,-9 M0,0 L7,-9" style="fill:none;stroke:${c};stroke-width:2.6;stroke-linecap:round"/></g>`;
/* lab readout chip */
const LAB=(x,y,w,lab,val,c)=>RB(x,y,w,48,c,{p:12})+T(x+10,y+18,lab,{a:"start",c:"s m"})+CT(x+10,y+39,val,c===CV.mut?CV.ink2:c,{a:"start",s:14,wt:800});

/* ---------- 1. GI regulatory substances ---------- */
const HM=[
 {k:"gas",n:"Gastrin",c:CV.pk,cell:"G cell · antrum, duodenum",x:192,y:206,L:{ceph:.55,gast:1,int:.25,fast:.12},e:"⊕ H⁺ · mucosal growth · motility"},
 {k:"sst",n:"Somatostatin",c:CV.bl,cell:"D cell · stomach, duodenum, islet",x:168,y:182,L:{ceph:.15,gast:.6,int:.7,fast:.25},e:"⊖ gastrin, H⁺, เอนไซม์, น้ำดี, insulin"},
 {k:"cck",n:"CCK",c:CV.ol,cell:"I cell · duodenum, jejunum",x:252,y:262,L:{ceph:.05,gast:.12,int:1,fast:.05},e:"⊕ เอนไซม์ตับอ่อน · บีบถุงน้ำดี · ⊖ emptying"},
 {k:"sec",n:"Secretin",c:CV.tl,cell:"S cell · duodenum",x:236,y:232,L:{ceph:.05,gast:.1,int:.95,fast:.05},e:"⊕ HCO₃⁻ ตับอ่อน/ท่อน้ำดี · ⊖ กรด"},
 {k:"gip",n:"GIP",c:CV.or,cell:"K cell · duodenum, jejunum",x:224,y:300,L:{ceph:.05,gast:.1,int:.85,fast:.05},e:"⊕ insulin (incretin) · ⊖ H⁺"},
 {k:"mot",n:"Motilin",c:CV.vi,cell:"M cell · duodenum, jejunum",x:178,y:322,L:{ceph:.05,gast:.05,int:.05,fast:1},e:"สร้าง MMC phase III ช่วงอดอาหาร"},
 {k:"ghr",n:"Ghrelin",c:CV.rd,cell:"Gr cell · fundus",x:70,y:96,L:{ceph:.85,gast:.35,int:.15,fast:.95},e:"⊕ ความหิว (ก่อนมื้อ / อดอาหาร)"},
 {k:"vip",n:"VIP",c:CV.cy,cell:"enteric neuron (inhibitory)",x:118,y:236,L:{ceph:.5,gast:.6,int:.6,fast:.25},e:"⊕ น้ำ + electrolyte · คลาย sphincter"},
 {k:"no",n:"Nitric oxide",c:CV.ink2,cell:"enteric neuron (inhibitory)",x:96,y:62,L:{ceph:.55,gast:.55,int:.5,fast:.25},e:"คลาย smooth muscle รวม LES"}];
const PHC={ceph:"Cephalic: เห็น ได้กลิ่น คิดถึงอาหาร → vagus: ACh ⊕ parietal, GRP ⊕ G cell, ⊣ D cell · ~30% ของกรดต่อมื้อ",
 gast:"Gastric: peptone + การยืดกระเพาะ → gastrin สูงสุด (~60% ของกรด) · pH ต่ำ → D cell หลั่ง somatostatin ตัดวงจร",
 int:"Intestinal: กรด → secretin · ไขมัน/กรดอะมิโน → CCK, GIP → HCO₃⁻ + เอนไซม์ + น้ำดี และชะลอ gastric emptying",
 fast:"Fasting: motilin หลั่งเป็นรอบ ~90 นาที → MMC phase III กวาดลำไส้ · ghrelin สูงกระตุ้นความหิว"};
function giSil(o={}){let b="";const f=(c,p)=>`fill:${tint(c,p)};stroke:color-mix(in srgb,${c} 55%,transparent);stroke-width:1.5`;
 b+=SP("M74,22 C76,40 82,56 86,74",GC.st,9,{op:.35})+LB(T(90,30,"esophagus",{a:"start",c:"s m"}));
 b+=`<path d="${sm([[86,72],[70,62],[50,74],[40,104],[44,148],[62,192],[96,224],[140,240],[180,232],[208,214],[214,196],[196,196],[170,206],[140,206],[116,190],[104,160],[104,120],[102,90]])}" style="${f(GC.st,o.st??14)}"/>`;
 b+=`<path d="M214,200 C238,200 252,214 256,236 C262,270 258,300 238,318 C214,338 180,336 160,326" style="fill:none;stroke:${GC.du};stroke-width:20;stroke-linecap:round;opacity:.32"/>`;
 b+=`<path d="M160,326 C130,330 118,356 132,378 C146,400 120,420 92,410 C64,400 60,430 80,452" style="fill:none;stroke:${GC.du};stroke-width:18;stroke-linecap:round;opacity:.2"/>`;
 b+=`<path d="${sm([[234,246],[238,280],[224,296],[180,292],[130,288],[96,280],[94,268],[130,262],[180,262],[214,256]])}" style="${f(GC.pa,12)}"/>`;
 b+=`<path d="${sm([[250,150],[262,160],[262,184],[252,196],[242,186],[242,160]])}" style="${f(GC.gb,18)}"/>`+SP("M252,196 C254,212 252,222 248,232",GC.gb,2.4,{op:.7});
 b+=LB(T(60,160,"body",{c:"s m"}))+LB(T(178,226,"antrum",{c:"s m"}))+LB(T(66,120,"fundus",{c:"s m"}))+LB(T(272,272,"duodenum",{c:"s m",r:90}))+LB(T(150,280,"pancreas",{c:"s m"}))+LB(T(276,172,"GB",{c:"s m"}))+LB(T(100,436,"jejunum",{c:"s m"}));
 return b}
function regD(){const ph=ST.ph;let b=FRAME(10,10,290,512)+giSil();
 HM.forEach(h=>{const v=h.L[ph],on=v>.45;b+=DIM(v>.3,`<circle cx="${h.x}" cy="${h.y}" r="${7+v*9}" style="fill:${tint(h.c,on?35:18)};stroke:${h.c};stroke-width:${on?2:1}"/>`+DOT(h.x,h.y,4,h.c,{sw:1}),.35)});
 /* vagus */
 const vg=ph==="ceph"||ph==="gast";b+=SP("M40,40 C30,80 34,140 46,170",GC.nv,vg?2.6:1.2,{dash:"5 4",op:vg?1:.35})+T(24,52,"vagus",{a:"start",c:"s",r:0});
 if(ph==="ceph")b+=TAG(214,62,"sight · smell · taste",CV.acc,{w:132});
 if(ph==="gast")b+=TAG(214,62,"peptones · distention",GC.st,{w:132})+ION(118,150,"H⁺",GC.h,9)+ION(136,166,"H⁺",GC.h,9)+ION(92,130,"H⁺",GC.h,9);
 if(ph==="int")b+=TAG(200,62,"acid · fat · AA → duodenum",GC.du,{w:170})+AW(206,212,232,214,GC.du,2.2);
 if(ph==="fast")b+=TAG(206,62,"empty gut · ~90-min cycle",CV.vi,{w:160})+SP("M200,346 C150,360 130,380 120,410",CV.vi,3,{dash:"10 6"})+T(176,374,"MMC wave",{a:"start",c:"s"});
 /* cards */
 HM.forEach((h,i)=>{const y=10+i*57,v=h.L[ph],on=v>.45;
  b+=RB(310,y,320,52,h.c,{p:on?20:6,sw:on?1.8:1});
  b+=DOT(326,y+15,6,h.c,{sw:1.2})+T(338,y+19,h.n,{a:"start",c:"bh"})+T(618,y+19,h.cell,{a:"end",c:"s m"});
  b+=`<rect x="338" y="${y+27}" width="280" height="5" rx="2.5" style="fill:var(--sb-surface2)"/><rect x="338" y="${y+27}" width="${(280*v).toFixed(1)}" height="5" rx="2.5" style="fill:${h.c}"/>`;
  b+=T(338,y+46,h.e,{a:"start",c:on?"s":"s m"})});
 b+=CAP(532,PHC[ph]);
 return svg(b,"0 0 640 588")}

/* ---------- 2. secretory products & cell locations ---------- */
const SPM={acid:{n:"Gastric acid (HCl)",c:GC.h,cells:["par"],map:["body"],src:"Parietal cell · body/fundus (oxyntic gland ~80% ส่วนต้น)",act:"pH ↓ · ฆ่าเชื้อ · เปลี่ยน pepsinogen → pepsin",reg:"⊕ histamine, ACh, gastrin · ⊖ somatostatin, GIP, PG, secretin",note:"ทำลาย parietal cell (autoimmune) → achlorhydria + pernicious anemia"},
 if:{n:"Intrinsic factor",c:CV.vi,cells:["par"],map:["body"],src:"Parietal cell (หลั่งคู่กับกรด)",act:"จับ B12 → ดูดซึมที่ terminal ileum",reg:"⊕ ACh, gastrin, histamine เช่นเดียวกับกรด",note:"H2 blocker ลด IF แต่ omeprazole ไม่ลด IF"},
 pep:{n:"Pepsinogen → pepsin",c:CV.or,cells:["chief","neck"],map:["body"],src:"Chief (peptic) cell + mucous neck cell",act:"เริ่มย่อยโปรตีน (รวม collagen) · ทำงานดีที่ pH 1.8–3.5",reg:"⊕ ACh (vagal/enteric) · ⊕ กรดในกระเพาะผ่าน enteric reflex",note:"H⁺ ตัด pepsinogen เป็น pepsin · หยุดทำงานที่ pH > 5"},
 hco3:{n:"HCO₃⁻ + mucus",c:GC.hco3,cells:["surf","neck"],map:["surf","brun","pduct"],src:"Surface mucous cell · Brunner glands · pancreatic duct",act:"ชั้น mucus–HCO₃⁻ หนา >1 mm รักษา pH ผิวเยื่อใกล้ 7",reg:"⊕ secretin (ตับอ่อน, ท่อน้ำดี) · vagal · การระคายเคือง",note:"Brunner glands ถูก sympathetic กด → duodenal bulb ไม่มีเกราะ"},
 ecl:{n:"Histamine (ECL cell)",c:CV.cy,cells:["ecl"],map:["body"],src:"ECL cell ที่ฐาน oxyntic gland",act:"histamine → H2 → cAMP ที่ parietal cell ข้างเคียง",reg:"⊕ gastrin (CCK2), ACh · ⊖ somatostatin",note:"gastrin กระตุ้นกรดผ่าน ECL เป็นหลัก มากกว่าออกฤทธิ์ตรงที่ parietal cell"},
 gas:{n:"Gastrin (G cell)",c:CV.pk,cells:[],map:["antrum","gduo"],src:"G cell · pyloric gland ของ antrum (+ duodenum)",act:"→ เลือด → ECL (histamine) + parietal cell",reg:"⊕ peptone, distention, GRP (vagal) · ⊖ pH ต่ำ ผ่าน somatostatin",note:"PPI/atrophic gastritis → gastrin ↑ · gastrinoma = Zollinger–Ellison"}};
function glandD(sel){/* oxyntic gland inset, x 14..236 */let b=FRAME(10,10,230,410)+T(24,32,"Oxyntic gland",{a:"start",c:"bh"});
 const hi=k=>SPM[sel].cells.includes(k);
 b+=`<path d="M70,56 C70,120 74,250 84,392 L166,392 C176,250 180,120 180,56" style="fill:${tint(GC.st,8)};stroke:color-mix(in srgb,${GC.st} 40%,transparent);stroke-width:1.2"/>`;
 b+=`<path d="M104,56 C104,140 112,260 116,392 M146,56 C146,140 138,260 134,392" style="fill:none;stroke:var(--sb-line);stroke-width:1.2"/>`+LB(T(125,74,"lumen",{c:"s m",r:-90}));
 b+=LB(T(36,60,"pit",{a:"start",c:"s m"}))+LB(T(30,130,"neck",{a:"start",c:"s m"}))+LB(T(30,250,"body",{a:"start",c:"s m"}))+LB(T(30,370,"base",{a:"start",c:"s m"}));
 const cell=(x,y,w,h,c,k,lab)=>{const on=hi(k);return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7" style="fill:${tint(c,on?55:24)};stroke:${c};stroke-width:${on?2.2:1}"/>`+(lab?T(x+w/2,y+h/2+3.5,lab,{c:"s"}):"")};
 for(let i=0;i<3;i++){b+=cell(74,58+i*22,28,20,GC.hco3,"surf",i?"":"SM")+cell(148,58+i*22,28,20,GC.hco3,"surf",i?"":"SM")}
 for(let i=0;i<2;i++){b+=cell(76,126+i*24,28,22,CV.ol,"neck",i?"":"MN")+cell(146,126+i*24,28,22,CV.ol,"neck",i?"":"MN")}
 [[74,184],[150,206],[78,236],[146,262],[82,292]].forEach(([x,y],i)=>b+=`<path d="M${x},${y} L${x+26},${y+14} L${x},${y+28} Z" transform="translate(${x>110?0:0},0)" style="fill:${tint(GC.h,hi("par")?55:26)};stroke:${GC.h};stroke-width:${hi("par")?2.2:1}"/>`);
 b+=LB(T(56,214,"parietal",{a:"end",c:"s"}))+AW(58,210,74,202,GC.h,1.2,{h:5});
 [[86,326],[140,316],[92,352],[136,346]].forEach(([x,y])=>b+=cell(x,y,26,24,CV.vi,"chief","")+DOT(x+8,y+8,2.2,CV.vi,{sw:0})+DOT(x+17,y+14,2.2,CV.vi,{sw:0}));
 b+=LB(T(58,342,"chief",{a:"end",c:"s"}));
 b+=cell(160,370,24,18,CV.cy,"ecl","")+LB(T(194,384,"ECL",{a:"start",c:"s"}))+cell(70,372,22,16,CV.bl,"d","")+LB(T(56,384,"D",{a:"end",c:"s"}));
 return b}
function spD(){const s=ST.sp,m=SPM[s];let b=glandD(s);
 /* stomach map */
 b+=FRAME(250,10,380,250)+T(264,32,"แผนที่เซลล์",{a:"start",c:"bh"});
 const on=k=>m.map.includes(k);
 b+=`<g transform="translate(262,26) scale(.88)">`+`<path d="${sm([[86,72],[70,62],[50,74],[40,104],[44,148],[62,192],[96,224],[140,240],[180,232],[208,214],[214,196],[196,196],[170,206],[140,206],[116,190],[104,160],[104,120],[102,90]])}" style="fill:${tint(GC.st,on("body")?30:10)};stroke:color-mix(in srgb,${GC.st} 55%,transparent);stroke-width:1.4"/>`;
 b+=`<path d="M140,240 C170,236 200,222 214,196 L196,196 C176,206 156,208 136,204 Z" style="fill:${tint(CV.pk,on("antrum")?55:16)};stroke:none"/>`;
 b+=`<path d="M214,200 C236,200 250,212 254,238" style="fill:none;stroke:${GC.du};stroke-width:20;stroke-linecap:round;opacity:${on("brun")||on("gduo")?.6:.28}"/>`;
 b+=`</g>`;
 b+=T(326,148,"body + fundus",{c:"s"})+LB(T(326,162,"oxyntic glands",{c:"s m"}))+T(420,250,"antrum: pyloric glands",{c:"s m"})+LB(T(556,250,"duodenum",{c:"s m"}));
 b+=T(556,236,on("brun")?"Brunner glands":on("gduo")?"G cells (บางส่วน)":"S · I · K cells",{c:on("brun")||on("gduo")?"bh":"s m"});
 /* pancreas mini */
 b+=`<ellipse cx="570" cy="120" rx="44" ry="26" style="fill:${tint(GC.pa,on("pduct")?30:12)};stroke:${GC.pa}"/>`+LB(T(570,116,"pancreas",{c:"s"}))+T(570,130,on("pduct")?"duct cell → HCO₃⁻":"acinus · duct",{c:on("pduct")?"bh":"s m"});
 if(on("surf"))b+=RING(326,140,40,m.c);if(on("body"))b+=RING(326,150,50,m.c);if(on("antrum"))b+=RING(418,222,24,m.c);
 /* card */
 b+=RB(250,270,380,162,m.c,{p:12,sw:1.6})+DOT(268,292,7,m.c,{sw:1.2})+T(282,297,m.n,{a:"start",c:"b"});
 let yy=318;[["Source",m.src],["Action",m.act],["Regulation",m.reg],["Note",m.note]].forEach(([l,t])=>{const L=capSplit(t,50);b+=T(264,yy,l,{a:"start",c:"s m"})+L.map((s,j)=>T(330,yy+j*13,s,{a:"start",c:"s"})).join("");yy+=L.length>1?28:20});
 b+=CAP(442,"Pit → neck → base: surface mucous (SM) · mucous neck (MN) · parietal · chief · ECL/D (แผนภาพ ไม่ใช่สัดส่วนจริง)");
 return svg(b,"0 0 640 498")}

/* ---------- 3. parietal cell & acid regulation ---------- */
const PCM={basal:{v:.25,meal:0,t:"Basal: ACh + histamine เป็นหลัก · กรดตามจังหวะ circadian (สูงกลางคืน)"},
 meal:{v:1,meal:1,t:"Meal: ACh (M3) + gastrin (CCK2) → Gq/Ca²⁺ · histamine (H2) → Gs/cAMP · เสริมกัน (potentiation) → H⁺/K⁺-ATPase แทรก apical"},
 h2:{v:1,meal:1,h2:1,t:"H2 blocker: ตัดทาง cAMP + ลดผลเสริมของ ACh/gastrin → กรดลดมาก (แต่ไม่หมด)"},
 ppi:{v:1,meal:1,ppi:1,t:"PPI จับ H⁺/K⁺-ATPase แบบ covalent = ขั้นสุดท้ายร่วม → กรดเกือบหมด · กรดต่ำ → somatostatin ↓ → gastrin ↑"},
 atr:{v:1,meal:1,atr:1,t:"Antimuscarinic: ตัด ACh ที่ M3 (และที่ ECL) → กรดลดบางส่วน · gastrin/histamine ยังทำงาน"},
 vgx:{v:0,meal:1,t:"Vagotomy: ไม่มี ACh, GRP และไม่มีการกด D cell → กรดลด · gastric emptying ช้า"},
 zes:{v:1,meal:1,zes:1,t:"Gastrinoma: gastrin จากเนื้องอกไม่ถูกกดด้วย pH ต่ำ → กรดสูงมาก · parietal cell mass ↑ → ulcer + diarrhea"},
 oct:{v:1,meal:1,oct:1,t:"Somatostatin analog (Gi): ⊖ G cell, ⊖ ECL, ⊖ parietal cell โดยตรง → ลดทุกทาง"}};
function pcModel(m){let acid=.5,gas=0,his=0,sst=0;const vag=m.v;
 for(let i=0;i<8;i++){sst=Math.min(1,(.15+.75*acid/(acid+.4))*(1-.45*vag)+(m.oct?.9:0));
  gas=(.15+(m.meal?.55:0)+.35*vag)*(1-.8*Math.min(1,sst))*(m.ppi?1.5:1)+(m.zes?1.6:0);
  his=Math.min(1.4,(.5*gas+.35*vag*(m.atr?.35:1))*(1-.5*Math.min(1,sst)));
  const drive=(.22*vag*(m.atr?0:1)+.18*gas+.6*his*(m.h2?.12:1))*(1-.35*Math.min(1,sst))*(m.zes?1.35:1);
  acid=Math.min(2,drive*(m.ppi?.06:1))}
 return {acid,gas,his,sst,vag,pH:Math.max(.9,7-6*acid/(acid+.15))}}
function pcD(){const m=PCM[ST.pc],r=pcModel(m);let b="";
 /* interstitium / blood side */
 b+=`<rect x="10" y="10" width="186" height="378" rx="16" style="fill:${tint(GC.bl,6)};stroke:var(--sb-line)"/>`+T(24,32,"Interstitium · blood",{a:"start",c:"bh"});
 /* vagus */
 b+=NODE(26,46,150,38,GC.nv,"Vagus · ENS","ACh · GRP",{p:8+r.vag*24})+(m.v===0?XM(170,52):"");
 /* G cell */
 b+=NODE(26,112,150,40,CV.pk,"G cell (antrum)",m.zes?"+ gastrinoma":"gastrin",{p:8+Math.min(1,r.gas/1.4)*30,sw:m.zes?2.2:1.3});
 /* ECL */
 b+=NODE(26,182,150,40,CV.cy,"ECL cell","histamine",{p:8+Math.min(1,r.his)*30});
 /* D cell */
 b+=NODE(26,256,150,40,CV.bl,"D cell",m.oct?"+ octreotide":"somatostatin",{p:8+r.sst*30,sw:m.oct?2.2:1.3});
 b+=T(100,322,"low pH ⊕ D cell (antrum)",{c:"s m"})+T(100,338,"vagus ⊣ D cell",{c:"s m"});
 b+=AW(100,84,100,110,CV.good,1.2+r.vag*2,{op:r.vag?.9:.2})+T(106,100,"GRP",{a:"start",c:"s m"});
 b+=AW(100,152,100,180,CV.pk,1.2+Math.min(1.6,r.gas)*1.6);
 b+=INH(100,256,100,226,CV.bad,1+r.sst*2.2)+CAW(60,256,30,200,40,152,CV.bad,1+r.sst*1.8,{dash:"4 3"});
 /* parietal cell */
 const X0=214,X1=500;b+=`<rect x="${X0}" y="30" width="${X1-X0}" height="350" rx="34" style="fill:${tint(GC.h,10)};stroke:color-mix(in srgb,${GC.h} 50%,transparent);stroke-width:1.6"/>`+T(357,52,"Parietal cell",{c:"b"});
 /* canaliculus */
 b+=`<path d="M${X1},150 C440,150 420,170 440,190 C460,210 420,230 440,250 C452,262 470,262 ${X1},262" style="fill:${tint(GC.h,24)};stroke:color-mix(in srgb,${GC.h} 60%,transparent);stroke-width:1.2"/>`+T(452,206,"canaliculus",{c:"s m",r:-90});
 /* receptors */
 const rec=(y,lab,c,blk,on)=>`<rect x="${X0-12}" y="${y-13}" width="24" height="26" rx="8" style="fill:${blk?tint(CV.bad,30):c};stroke:${blk?CV.bad:c};stroke-width:1.4;opacity:${on?1:.45}"/>`+T(X0,y+4,lab,{c:"w"})+(blk?XM(X0-24,y):"");
 b+=rec(90,"M3",GC.nv,m.atr,r.vag>.05)+rec(140,"C2",CV.pk,0,1)+rec(214,"H2",CV.cy,m.h2,1)+rec(300,"SS",CV.bl,0,1);
 b+=T(X0+18,94,"ACh",{a:"start",c:"s"})+T(X0+18,144,"gastrin",{a:"start",c:"s"})+T(X0+18,218,"histamine",{a:"start",c:"s"})+T(X0+18,304,"SST · PGE₂",{a:"start",c:"s"});
 b+=AW(176,64,X0-14,88,GC.nv,1+r.vag*2,{op:r.vag?.9:.15})+AW(176,132,X0-14,140,CV.pk,1+Math.min(1.6,r.gas)*1.4)+AW(176,202,X0-14,212,CV.cy,1+Math.min(1.4,r.his)*1.6,{op:m.h2?.4:1})+INH(176,276,X0-14,298,CV.bad,1+r.sst*2);
 b+=CAW(140,152,170,170,150,184,CV.pk,1.2,{op:.8});
 /* second messengers */
 b+=SP(`M${X0+40},90 C270,92 286,110 304,114`,GC.nv,1.2,{op:.55})+SP(`M${X0+60},140 C280,140 290,126 304,124`,CV.pk,1.2,{op:.55})+SP(`M${X0+76},214 H304`,CV.cy,1.2,{op:.55})+SP(`M${X0+82},300 H304`,CV.bl,1.2,{op:.55});
 b+=RB(304,96,96,44,CV.or,{r:22,p:8+(m.atr?0:r.vag*14)+Math.min(1,r.gas)*10})+T(352,114,"Gq → IP₃",{c:"s"})+T(352,130,"Ca²⁺ · PKC",{c:"s"});
 b+=RB(304,192,96,44,CV.cy,{r:22,p:m.h2?6:8+Math.min(1,r.his)*24})+T(352,210,"Gs → cAMP",{c:"s"})+T(352,226,"PKA",{c:"s"});
 b+=RB(304,282,96,36,CV.bl,{r:18,p:8+r.sst*24})+T(352,304,"Gi ⊣ AC",{c:"s"});
 b+=INH(352,282,352,240,CV.bad,1+r.sst*1.5);
 const act=Math.min(1,r.acid/(m.ppi?1:1.2));
 b+=AW(400,124,414,160,CV.or,1.4+act*2)+AW(400,212,414,206,CV.cy,1.4+act*2);
 /* tubulovesicles */
 for(let i=0;i<4;i++)b+=`<circle cx="${392+(i%2)*16}" cy="${168+i*22}" r="7" style="fill:none;stroke:${GC.h};stroke-width:1.4;opacity:${.25+.75*(1-act)}"/>`;
 /* apical pumps */
 const nP=m.ppi?3:Math.max(1,Math.round(1+act*3));
 for(let i=0;i<nP;i++){const y=166+i*28;b+=TP(X1,y,GC.h,"",{off:m.ppi})+AW(X1+12,y-4,X1+30,y-4,GC.h,1.6,{h:5,op:m.ppi?.2:1})+AW(X1+30,y+6,X1+12,y+6,GC.k,1.4,{h:5,op:m.ppi?.2:1})}
 b+=T(X1-12,268,"H⁺/K⁺-ATPase",{a:"end",c:"bh"});
 b+=`<rect x="${X1-6}" y="280" width="12" height="20" rx="5" style="fill:${GC.k}"/>`+T(X1-12,294,"K⁺ channel",{a:"end",c:"s m"})+`<rect x="${X1-6}" y="306" width="12" height="20" rx="5" style="fill:${GC.cl}"/>`+T(X1-12,320,"Cl⁻ channel",{a:"end",c:"s m"});
 /* CA + alkaline tide */
 b+=RB(232,334,124,36,CV.ol,{r:18,p:12})+T(294,350,"CO₂ + H₂O",{c:"s"})+T(294,364,"CA → H⁺ + HCO₃⁻",{c:"s m"});
 b+=`<rect x="${X0-8}" y="344" width="16" height="22" rx="6" style="fill:${GC.hco3}"/>`+AW(X0-10,350,160,350,GC.hco3,1.4+act*2.2,{h:6})+AW(160,362,X0-10,362,GC.cl,1.4,{h:6});
 b+=T(70,360,"HCO₃⁻ → venous blood",{c:"s"})+T(70,374,"(alkaline tide)",{c:"s m"});
 /* lumen */
 b+=`<rect x="540" y="10" width="90" height="378" rx="16" style="fill:${tint(GC.h,6+act*10)};stroke:var(--sb-line)"/>`+T(585,32,"Lumen",{c:"bh"});
 const nH=Math.round(Math.min(2,r.acid)*9);for(let i=0;i<nH;i++)b+=ION(556+(i%3)*28,60+Math.floor(i/3)*30,"H⁺",GC.h,9);
 b+=CT(585,360,"pH "+r.pH.toFixed(1),r.pH<2.5?GC.h:CV.ink2,{s:15,wt:800});
 /* meters */
 b+=FRAME(10,398,620,80);
 b+=MET(28,426,130,"Acid output",r.acid/1.6,GC.h,{n:[.32,.52]})+MET(184,426,130,"Plasma gastrin",Math.min(1,r.gas/2.4),CV.pk,{n:[.22,.4]})+MET(340,426,130,"Histamine (ECL)",Math.min(1,r.his/1.4),CV.cy,{n:[.35,.55]})+MET(496,426,120,"Somatostatin",r.sst,CV.bl);
 b+=T(320,466,"แถบประ = ช่วงหลังอาหารปกติ (เชิงคุณภาพ)",{c:"s m"});
 b+=CAP(488,m.t);
 return svg(b,"0 0 640 544")}

/* ---------- 4. pancreatic secretions ---------- */
const PFM={sec:{t:"Secretin → cAMP → CFTR เปิด → Cl⁻ วนกลับผ่าน SLC26 แลกเป็น HCO₃⁻ · flow สูง → HCO₃⁻ สูง Cl⁻ ต่ำ"},
 cck:{t:"CCK + ACh → Ca²⁺ ใน acinar cell → เอนไซม์มาก แต่น้ำน้อย (เอนไซม์ค้างใน acini จนกว่า secretin จะชะออก)"},
 cf:{t:"Cystic fibrosis: CFTR ไม่ถึงผิว apical → ไม่มี Cl⁻ สำหรับแลก HCO₃⁻ → น้ำ/HCO₃⁻ น้อย โปรตีนข้นอุดท่อ"}};
const pHCO=(f,cf)=>cf?22+18*(1-Math.exp(-f/0.6)):25+115*(1-Math.exp(-(f-.1)/.45));
function pfD(){const f=ST.pf,md=ST.pd,cf=md==="cf";let b="";
 b+=FRAME(10,10,370,282)+T(24,32,"Electrolytes vs secretory rate",{a:"start",c:"bh"});
 const A=AX(62,48,296,190,[.2,1.6],[0,170],[.2,.6,1,1.4],[0,50,100,150],"Secretory rate (mL/min)","mEq/L",{yo:40});b+=A.g;
 b+=SP(FN(A,()=>152,.2,1.6,20),GC.na,2.4)+CT(A.X(1.58),A.Y(152)-6,"Na⁺",GC.na,{a:"end",s:11});
 b+=SP(FN(A,()=>6,.2,1.6,20),GC.k,2)+CT(A.X(1.58),A.Y(6)-6,"K⁺",GC.k,{a:"end",s:11});
 b+=SP(FN(A,x=>pHCO(x,0),.2,1.6,80),GC.hco3,cf?1.4:3,{op:cf?.35:1})+SP(FN(A,x=>155-pHCO(x,0),.2,1.6,80),GC.cl,cf?1.4:3,{op:cf?.35:1});
 if(cf)b+=SP(FN(A,x=>pHCO(x,1),.2,1.6,80),GC.hco3,3,{dash:"7 4"})+SP(FN(A,x=>155-pHCO(x,1),.2,1.6,80),GC.cl,3,{dash:"7 4"});
 b+=CT(A.X(1.3),A.Y(pHCO(1.3,0))-8,"HCO₃⁻",GC.hco3,{s:11.5})+CT(A.X(1.3),A.Y(155-pHCO(1.3,0))+16,"Cl⁻",GC.cl,{s:11.5});
 const hc=pHCO(f,cf),cl=155-hc;b+=SP(`M${A.X(f)},${A.Y(0)} V${A.Y(170)}`,CV.acc,1.4,{dash:"4 3"})+DOT(A.X(f),A.Y(hc),6,GC.hco3)+DOT(A.X(f),A.Y(cl),6,GC.cl);
 b+=T(A.X(.24),A.Y(160),"plasma-like",{a:"start",c:"s m"});
 /* composition bar */
 b+=FRAME(390,10,240,282)+T(404,32,"Anion ที่ "+f.toFixed(1)+" mL/min",{a:"start",c:"bh"});
 const bh=190,yb=56,hHC=bh*hc/155;b+=`<rect x="420" y="${yb}" width="70" height="${bh}" rx="10" style="fill:${tint(GC.cl,40)};stroke:${GC.cl}"/>`+`<rect x="420" y="${yb+bh-hHC}" width="70" height="${hHC}" rx="10" style="fill:${tint(GC.hco3,60)};stroke:${GC.hco3}"/>`;
 b+=T(455,yb+bh-hHC/2+4,r0(hc),{c:"bh"})+T(455,yb+(bh-hHC)/2+4,r0(cl),{c:"bh"});
 b+=T(500,yb+bh-6,"HCO₃⁻",{a:"start",c:"s"})+T(500,yb+16,"Cl⁻",{a:"start",c:"s"});
 b+=`<rect x="560" y="${yb+bh-bh*24/155}" width="40" height="${bh*24/155}" rx="6" style="fill:${tint(GC.hco3,60)};stroke:${GC.hco3}"/><rect x="560" y="${yb+bh-bh*125/155}" width="40" height="${bh*101/155}" rx="6" style="fill:${tint(GC.cl,40)};stroke:${GC.cl}"/>`+T(580,yb+bh+16,"plasma",{c:"s m"});
 const pH=6.9+1.25*(hc-25)/115;b+=T(455,yb+bh+16,"juice",{c:"s m"})+CT(510,282,"pH ~"+pH.toFixed(1),GC.hco3,{s:13,wt:800});
 /* acinar cell */
 const ac=md==="cck";b+=FRAME(10,302,300,196)+T(24,324,"Acinar cell",{a:"start",c:"bh"});
 b+=`<path d="M60,470 L60,370 C60,346 120,340 160,350 L160,470 Z" style="fill:${tint(GC.pa,ac?24:12)};stroke:${GC.pa};stroke-width:1.4"/>`;
 for(let i=0;i<(ac?9:4);i++)b+=DOT(84+(i%3)*24,372+Math.floor(i/3)*18,6,CV.or,{sw:1});
 b+=`<ellipse cx="110" cy="440" rx="22" ry="14" style="fill:${tint(CV.vi,24)};stroke:${CV.vi}"/>`;
 b+=TP(60,430,CV.ol,"CCK1",{la:-4,ly:24})+TP(60,400,GC.nv,"M3",{la:-4,ly:-20});
 b+=AW(162,380,200,380,CV.or,1.4+(ac?2.4:.6))+T(206,376,"enzymes",{a:"start",c:ac?"bh":"s"})+T(206,392,"(zymogens)",{a:"start",c:"s m"});
 b+=AW(162,430,200,430,GC.w,1.4)+T(206,428,"NaCl fluid",{a:"start",c:"s"})+T(206,444,"~25% ของ volume",{a:"start",c:"s m"});
 b+=T(160,488,"⊕ CCK, ACh (Ca²⁺) · trypsin inhibitor บรรจุมาด้วย",{c:"s m"});
 /* duct cell */
 b+=FRAME(320,302,310,196)+T(334,324,"Duct cell",{a:"start",c:"bh"});
 const dc=md==="sec";b+=`<rect x="400" y="340" width="130" height="140" rx="18" style="fill:${tint(GC.hco3,dc?24:12)};stroke:${GC.hco3};stroke-width:1.4"/>`+T(360,410,"blood",{c:"s m",r:-90})+T(580,410,"lumen",{c:"s m",r:90});
 b+=TP(530,366,GC.cl,"CFTR",{off:cf,la:28,ly:4,a:"start"})+TP(530,424,GC.hco3,"SLC26",{la:28,ly:4,a:"start"});
 b+=TP(400,384,GC.na,"NBC",{la:-28,ly:4,a:"end"})+TP(400,446,CV.ol,"secretin R",{la:-16,ly:4,a:"end"});
 b+=RB(430,396,72,34,CV.ol,{r:17,p:12})+T(466,416,"CA",{c:"s"});
 if(!cf){b+=AW(542,372,566,372,GC.cl,1.6,{h:5})+CAW(566,384,580,404,542,418,GC.cl,1.4,{h:5})+AW(542,432,566,432,GC.hco3,1.4+(dc?f*1.6:.6),{h:6})}
 else b+=T(566,452,"HCO₃⁻ ↓",{c:"bh"});
 b+=T(475,494,"secretin → cAMP → PKA → CFTR",{c:"s m"});
 b+=CAP(508,PFM[md].t);
 return svg(b,"0 0 640 564")}

/* ---------- 5. carbohydrate digestion & absorption ---------- */
const CBM={n:{t:"Amylase ย่อย starch เหลือ maltose, maltotriose, α-limit dextrin → brush border ย่อยต่อจนเป็น monosaccharide เท่านั้นจึงดูดซึม",xy:"ปกติ",h2:"ไม่ขึ้น",st:"ปกติ"},
 lac:{t:"Lactase ลดลงหลังหย่านม (lactase non-persistence) → lactose ไปถึง colon → แบคทีเรียหมัก → H₂, กรดไขมันสายสั้น, osmotic diarrhea",xy:"ปกติ",h2:"↑ > 20 ppm",st:"pH ↓",off:["lac"]},
 pan:{t:"Pancreatic insufficiency: amylase ↓ แต่ brush border ปกติ → D-xylose (ไม่ต้องย่อย) ดูดซึมปกติ · ไขมันเสียมากกว่า",xy:"ปกติ",h2:"อาจขึ้น",st:"steatorrhea",off:["amy"]},
 muc:{t:"Mucosal disease (เช่น celiac ที่ duodenum–jejunum): brush border enzyme + transporter หาย → D-xylose ต่ำ",xy:"↓",h2:"↑",st:"diarrhea",off:["lac","suc","mal","sglt","glut5"]},
 sglt:{t:"Glucose–galactose malabsorption (SGLT1 ผิดปกติ): ท้องเสียเมื่อกิน glucose/galactose · fructose ยังดูดซึมผ่าน GLUT5",xy:"ปกติ",h2:"↑",st:"osmotic diarrhea",off:["sglt"]}};
function cbD(){const m=CBM[ST.cb],off=k=>(m.off||[]).includes(k);let b="";
 /* lumen lane */
 b+=`<rect x="10" y="10" width="620" height="170" rx="16" style="fill:${tint(GC.du,7)};stroke:var(--sb-line)"/>`+T(24,32,"Lumen",{a:"start",c:"bh"});
 /* starch chain */
 const chain=(x,y,n,c)=>{let g="";for(let i=0;i<n;i++)g+=HEX(x+i*15,y,c,"",7);return g};
 b+=chain(40,66,7,GC.glc)+chain(85,84,3,GC.glc)+SP("M85,72 L85,80",GC.glc,1.6)+T(84,108,"starch (α-1,4 + α-1,6)",{c:"s"});
 b+=RB(168,52,96,34,GC.pa,{r:17,p:off("amy")?6:16,dash:off("amy")?"4 3":""})+T(216,68,"α-amylase",{c:"s"})+T(216,80,"saliva · pancreas",{c:"s m"})+(off("amy")?XM(262,54):"");
 b+=AW(150,70,166,70,CV.ink2,1.6,{h:6,op:off("amy")?.3:1})+AW(266,70,290,70,CV.ink2,1.6,{h:6,op:off("amy")?.3:1});
 b+=chain(306,58,2,GC.glc)+T(352,62,"maltose",{a:"start",c:"s"})+chain(306,82,3,GC.glc)+T(352,86,"maltotriose",{a:"start",c:"s"})+chain(306,106,3,GC.glc)+HEX(321,121,GC.glc,"",7)+T(352,112,"α-limit dextrin",{a:"start",c:"s"});
 b+=HEX(470,62,GC.glc,"",7)+HEX(484,62,CV.or,"",7)+T(498,66,"lactose",{a:"start",c:off("lac")&&ST.cb==="lac"?"bh":"s"})+HEX(470,90,GC.glc,"",7)+HEX(484,90,CV.ol,"",7)+T(498,94,"sucrose",{a:"start",c:"s"});
 b+=T(470,120,"(disaccharides จากอาหาร)",{a:"start",c:"s m"});
 /* brush border */
 b+=`<path d="M10,180 ${[...Array(62)].map((_,i)=>`L${14+i*10},${i%2?178:170}`).join(" ")} L630,180" style="fill:none;stroke:${CV.ol};stroke-width:1.4;opacity:.7"/>`;
 const enz=[["mal","glucoamylase",68,"(maltase)"],["suc","sucrase–isomaltase",230,"α-dextrinase"],["lac","lactase",420,"glc + gal"]];
 enz.forEach(([k,n,x,s])=>{b+=RB(x,140,140,32,CV.ol,{r:16,p:off(k)?6:20,dash:off(k)?"4 3":""})+T(x+70,155,n,{c:"s"})+T(x+70,167,s,{c:"s m"})+(off(k)?XM(x+134,140):"")});
 /* enterocyte */
 b+=`<rect x="10" y="186" width="470" height="160" rx="10" style="fill:${tint(GC.du,12)};stroke:color-mix(in srgb,${GC.du} 45%,transparent)"/>`+T(24,206,"Enterocyte",{a:"start",c:"bh"});
 b+=TP(110,186,GC.na,"",{off:off("sglt")})+T(110,244,"SGLT1",{c:"bh"})+T(110,258,"2 Na⁺ + glc/gal",{c:"s m"});
 b+=TP(300,186,CV.ol,"",{off:off("glut5")})+T(300,244,"GLUT5",{c:"bh"})+T(300,258,"fructose (facilitated)",{c:"s m"});
 if(!off("sglt"))b+=ION(132,194,"Na","var(--s-na)",8)+ION(132,212,"Na","var(--s-na)",8)+HEX(152,198,GC.glc,"G")+HEX(152,216,CV.or,"Gal",8);
 if(!off("glut5"))b+=HEX(322,200,CV.ol,"F");
 b+=`<rect x="490" y="186" width="140" height="160" rx="10" style="fill:${tint(GC.bl,10)};stroke:var(--sb-line)"/>`+T(560,330,"portal blood",{c:"s"});
 b+=TP(480,236,GC.glc,"",{})+T(464,268,"GLUT2",{a:"end",c:"bh"})+T(464,282,"glc · gal · fru",{a:"end",c:"s m"})+AW(492,236,540,236,GC.glc,2)+HEX(556,236,GC.glc,"")+HEX(574,236,CV.or,"")+HEX(592,236,CV.ol,"");
 b+=TP(480,318,GC.na,"",{})+T(464,314,"Na⁺/K⁺-ATPase",{a:"end",c:"bh"})+T(464,328,"3 Na⁺ out · 2 K⁺ in",{a:"end",c:"s m"})+AW(492,312,520,312,GC.na,1.4,{h:5})+AW(520,324,492,324,GC.k,1.4,{h:5});
 b+=CAW(170,212,320,290,466,240,GC.glc,1.8)+CAW(334,206,400,214,466,232,CV.ol,1.6);
 b+=T(190,312,"Na⁺ gradient จาก pump ขับ SGLT1 (secondary active)",{c:"s m"})+T(190,328,"fructose ช้ากว่า glucose ~ครึ่งหนึ่ง",{c:"s m"});
 /* outcome */
 b+=FRAME(10,356,620,72);
 b+=LAB(24,368,190,"D-xylose absorption",m.xy,m.xy==="ปกติ"?CV.vol:CV.bad)+LAB(224,368,190,"Breath H₂ (lactose/sugar)",m.h2,m.h2==="ไม่ขึ้น"?CV.vol:CV.or)+LAB(424,368,194,"Stool",m.st,m.st==="ปกติ"?CV.vol:CV.or);
 b+=CAP(438,m.t);
 return svg(b,"0 0 640 494")}

/* ---------- 6. protein digestion & absorption ---------- */
const PRM={n:{t:"Enterokinase (brush border) ตัด trypsinogen → trypsin → trypsin กระตุ้นตัวเองและ zymogen อื่นทั้งหมด · pepsin ทำแค่ 10–20%"},
 ek:{t:"Enterokinase deficiency: trypsinogen ไม่ถูกกระตุ้น → protease ทุกตัวไม่ทำงาน → protein maldigestion ทั้งที่ตับอ่อนปกติ",off:["ek","tr"]},
 pi:{t:"Pancreatic insufficiency: zymogen น้อย → ย่อยโปรตีนลด (pepsin ช่วยได้บางส่วน) · มักเห็นไขมันเสียก่อน",off:["panc"]},
 sp:{t:"Trypsin ถูกกระตุ้นในตับอ่อนเอง (trypsin inhibitor/SPINK1 ไม่พอ, ท่ออุด) → autodigestion = acute pancreatitis",inside:1}};
function prD(){const m=PRM[ST.pr],off=k=>(m.off||[]).includes(k);let b="";
 /* stomach */
 b+=FRAME(10,10,190,150)+T(24,32,"Stomach",{a:"start",c:"bh"});
 b+=NODE(24,46,76,34,CV.or,"","")+T(62,67,"pepsinogen",{c:"s"})+AW(100,63,126,63,GC.h,1.6)+NODE(128,46,62,34,CV.or,"pepsin","",{p:22});
 b+=ION(113,48,"H⁺",GC.h,8)+T(105,108,"protein → proteoses, peptones",{c:"s"})+T(105,124,"~10–20% ของการย่อย",{c:"s m"})+T(105,140,"ย่อย collagen ได้ดี",{c:"s m"});
 /* pancreas acinus */
 b+=FRAME(210,10,420,150)+T(224,32,"Pancreatic acinar cell",{a:"start",c:"bh"});
 b+=`<path d="M232,140 L232,66 C232,48 290,44 330,52 L330,140 Z" style="fill:${tint(GC.pa,off("panc")?6:16)};stroke:${GC.pa};stroke-width:1.3;${off("panc")?"stroke-dasharray:4 3":""}"/>`;
 for(let i=0;i<(off("panc")?2:6);i++)b+=DOT(254+(i%3)*24,72+Math.floor(i/3)*22,7,m.inside?CV.bad:CV.or,{sw:1});
 b+=T(281,130,m.inside?"activated in situ!":"zymogen granules",{c:m.inside?"bad":"s"});
 ["trypsinogen","chymotrypsinogen","proelastase","procarboxypeptidase"].forEach((z,i)=>b+=T(350,58+i*18,"• "+z,{a:"start",c:"s"}));
 b+=T(350,136,"+ trypsin inhibitor (SPINK1)",{a:"start",c:m.inside?"bad":"s m"});
  b+=RB(510,48,108,64,CV.bad,{p:m.inside?26:6})+T(564,74,"inside gland:",{c:"s m"})+T(564,92,m.inside?"autodigestion":"inactive",{c:m.inside?"bad":"s"});
 /* duodenal cascade */
 b+=`<rect x="10" y="170" width="620" height="196" rx="16" style="fill:${tint(GC.du,8)};stroke:var(--sb-line)"/>`+T(24,192,"Duodenal lumen: activation cascade",{a:"start",c:"bh"});
 b+=NODE(28,300,130,44,CV.ol,"Enterokinase","brush border",{p:off("ek")?6:22,dash:off("ek")?"4 3":""})+(off("ek")?XM(150,302):"");
 b+=NODE(28,214,130,40,CV.or,"Trypsinogen","",{p:off("panc")?6:14})+AW(93,298,93,258,CV.ol,1.8,{op:off("ek")?.25:1});
 const tOn=!off("ek")&&!off("tr");
 b+=AW(160,234,214,262,CV.or,2.2,{op:tOn?1:.2})+`<circle cx="262" cy="280" r="44" style="fill:${tint(CV.or,tOn?38:8)};stroke:${CV.or};stroke-width:${tOn?2.4:1}"/>`+T(262,276,"TRYPSIN",{c:"bh"})+T(262,292,tOn?"active":"inactive",{c:"s m"});
 b+=CAW(234,244,200,200,150,224,CV.or,1.6,{dash:"5 3",op:tOn?1:.2})+T(196,206,"autocatalysis",{c:"s m"});
 const tg=[["chymotrypsinogen","chymotrypsin"],["proelastase","elastase"],["procarboxypeptidase","carboxypeptidase"]];
 tg.forEach(([a,z],i)=>{const y=204+i*48;b+=AW(306,280,372,y+18,CV.or,1.6,{op:tOn?1:.2})+RB(376,y+2,244,32,CV.or,{r:16,p:tOn?22:5})+T(498,y+22,a+" → <tspan style=\"font-weight:800\">"+z+"</tspan>",{c:tOn?"s":"s m"})});
 b+=T(498,356,"proteins → oligopeptides + กรดอะมิโนบางส่วน",{c:"s m"});
 /* enterocyte */
 b+=`<rect x="10" y="376" width="460" height="104" rx="10" style="fill:${tint(GC.du,12)};stroke:color-mix(in srgb,${GC.du} 45%,transparent)"/>`+T(24,396,"Enterocyte",{a:"start",c:"bh"});
 b+=TP(120,376,GC.na,"",{})+T(120,420,"Na⁺–AA",{c:"bh"})+T(120,434,"cotransporters",{c:"s m"});
 b+=TP(270,376,GC.h,"",{})+T(270,420,"PepT1",{c:"bh"})+T(270,434,"H⁺ + di/tripeptide",{c:"s m"});
 b+=RB(318,404,130,34,CV.ol,{r:17,p:14})+T(383,425,"cytosolic peptidases",{c:"s"});
 b+=T(240,466,"brush-border peptidases ตัดต่อ · >99% เข้าเลือดเป็นกรดอะมิโนเดี่ยว",{c:"s m"});
 b+=`<rect x="480" y="376" width="150" height="104" rx="10" style="fill:${tint(GC.bl,10)};stroke:var(--sb-line)"/>`+T(555,424,"AA → portal blood",{c:"s"})+AW(450,420,500,420,CV.lv,1.8);
 b+=CAP(490,m.t);
 return svg(b,"0 0 640 546")}

/* ---------- 7. fat digestion & absorption ---------- */
const FTM={n:{abs:.95,t:"Bile salts + lecithin emulsify → lipase/colipase → 2-MAG + FFA → mixed micelle ข้าม unstirred layer → re-esterify → chylomicron → lacteal"},
 pi:{abs:.45,t:"Pancreatic insufficiency (chronic pancreatitis, CF): lipase ↓ → TG ไม่ถูกย่อย → steatorrhea + ขาด vitamin A D E K",off:["lip"]},
 bs:{abs:.45,t:"Bile salt deficiency (cholestasis, ileal loss): ไม่มี micelle → ดูดซึมได้เพียง ~40–50% (Guyton) · fat-soluble vitamins ↓",off:["mic","emul"]},
 abl:{abs:.2,t:"Abetalipoproteinemia: สร้าง chylomicron ไม่ได้ → ไขมันค้างใน enterocyte · acanthocyte, ataxia, retinitis pigmentosa",off:["chy"]}};
function ftD(){const m=FTM[ST.ft],off=k=>(m.off||[]).includes(k);let b="";
 b+=`<rect x="10" y="10" width="620" height="210" rx="16" style="fill:${tint(GC.du,7)};stroke:var(--sb-line)"/>`+T(24,32,"Lumen",{a:"start",c:"bh"});
 /* fat globule */
 b+=`<circle cx="62" cy="110" r="38" style="fill:${tint(GC.fat,42)};stroke:${GC.fat};stroke-width:1.6"/>`+T(62,114,"TG",{c:"bh"})+T(62,166,"fat globule",{c:"s m"});
 b+=AW(104,110,132,110,CV.ink2,1.8,{op:off("emul")?.25:1});
 /* emulsion */
 for(let i=0;i<7;i++){const x=152+(i%3)*24,y=80+Math.floor(i/3)*24;b+=`<circle cx="${x}" cy="${y}" r="${off("emul")?0:10}" style="fill:${tint(GC.fat,42)};stroke:${GC.gb};stroke-width:2;stroke-dasharray:2 2"/>`}
 if(off("emul"))b+=`<circle cx="176" cy="108" r="30" style="fill:${tint(GC.fat,30)};stroke:${GC.fat};stroke-dasharray:4 3"/>`+XM(206,80);
 b+=T(176,166,"emulsion",{c:"s m"})+T(176,180,"bile salts + lecithin",{c:"s m"});
 /* lipase */
 b+=RB(226,62,88,44,GC.pa,{r:22,p:off("lip")?5:18,dash:off("lip")?"4 3":""})+T(270,82,"lipase",{c:"s"})+T(270,96,"+ colipase",{c:"s m"})+(off("lip")?XM(308,64):"");
 b+=AW(206,110,230,110,CV.ink2,1.6,{op:off("lip")?.25:1})+AW(314,84,338,96,CV.ink2,1.6,{op:off("lip")?.25:1});
 b+=T(270,130,"TG → 2-MAG + 2 FFA",{c:"s"})+T(270,146,"(มีเหลือเฟือ ~1000×)",{c:"s m"});
 /* micelle */
 const mx=380,my=100;if(!off("mic")&&!off("lip")){for(let i=0;i<14;i++){const a=i/14*Math.PI*2;b+=SP(`M${(mx+Math.cos(a)*16).toFixed(1)},${(my+Math.sin(a)*16).toFixed(1)} L${(mx+Math.cos(a)*30).toFixed(1)},${(my+Math.sin(a)*30).toFixed(1)}`,GC.gb,2)+DOT(mx+Math.cos(a)*31,my+Math.sin(a)*31,3.2,GC.gb,{sw:0})}
  b+=`<circle cx="${mx}" cy="${my}" r="14" style="fill:${tint(GC.fat,60)}"/>`+T(mx,my+4,"MAG",{c:"s"})}
 else b+=`<circle cx="${mx}" cy="${my}" r="30" style="fill:none;stroke:${CV.mut};stroke-dasharray:4 3"/>`+XM(mx,my);
 b+=T(mx,152,"mixed micelle",{c:"s"})+T(mx,166,"3–6 nm",{c:"s m"});
 b+=`<rect x="14" y="188" width="612" height="28" rx="8" style="fill:${tint(CV.mut,12)};stroke:none"/>`+T(24,206,"unstirred water layer",{a:"start",c:"s m"});
 b+=AW(380,172,380,214,GC.gb,1.8,{op:off("mic")||off("lip")?.25:1});
 b+=CAW(414,110,500,120,612,160,GC.gb,1.4,{dash:"5 4"})+T(540,176,"bile salts → ileum (ASBT)",{c:"s m"});
 b+=T(540,60,"SCFA / MCFA",{c:"s"})+T(540,74,"→ portal blood โดยตรง",{c:"s m"});
 /* enterocyte */
 b+=`<path d="M10,226 ${[...Array(62)].map((_,i)=>`L${14+i*10},${i%2?224:216}`).join(" ")} L630,226" style="fill:none;stroke:${CV.ol};stroke-width:1.4;opacity:.7"/>`;
 b+=`<rect x="10" y="230" width="460" height="150" rx="10" style="fill:${tint(GC.du,12)};stroke:color-mix(in srgb,${GC.du} 45%,transparent)"/>`+T(24,250,"Enterocyte",{a:"start",c:"bh"});
 b+=AW(380,224,380,256,GC.fat,1.8,{op:m.abs>.5?1:.4})+T(370,244,"FFA + 2-MAG (FABP2)",{a:"end",c:"s"});
 b+=RB(320,258,120,40,CV.vi,{r:20,p:14})+T(380,276,"SER: re-esterify",{c:"s"})+T(380,290,"→ TG",{c:"s m"});
 b+=RB(140,258,130,40,CV.vi,{r:20,p:14})+T(205,276,"RER: apoB-48",{c:"s"})+T(205,290,"+ phospholipid coat",{c:"s m"})+AW(270,278,318,278,CV.ink2,1.6);
 const chy=!off("chy");b+=AW(380,298,380,318,CV.ink2,1.6,{op:chy?1:.25})+T(300,336,"Golgi →",{c:"s m"});
 b+=`<circle cx="380" cy="344" r="24" style="fill:${tint(GC.fat,chy?50:12)};stroke:${GC.fat};stroke-width:1.6;${chy?"":"stroke-dasharray:4 3"}"/>`+T(380,348,"CM",{c:"bh"})+(chy?"":XM(402,322));
 b+=T(350,372,"chylomicron 75–1200 nm",{a:"end",c:"s m"});
 if(!chy)for(let i=0;i<5;i++)b+=`<circle cx="${40+i*40}" cy="${330+(i%2)*14}" r="8" style="fill:${tint(GC.fat,55)};stroke:${GC.fat}"/>`;
 if(!chy)b+=T(120,370,"lipid droplets ค้างในเซลล์",{c:"bad"});
 /* lacteal */
 b+=`<rect x="480" y="230" width="150" height="150" rx="10" style="fill:${tint(GC.ly,10)};stroke:var(--sb-line)"/>`+T(555,250,"central lacteal",{c:"bh"});
 b+=AW(404,344,520,300,GC.fat,1.4+m.abs*2.6,{op:chy?1:.2})+T(555,320,"→ thoracic duct",{c:"s"})+T(555,336,"→ systemic (ข้ามตับ)",{c:"s m"});
 /* meter */
 b+=FRAME(10,390,620,56)+MET(30,418,460,"Fat absorbed",m.abs,GC.fat,{n:[.9,1],t:Math.round(m.abs*100)+"%"})+T(560,430,m.abs<.6?"steatorrhea":"stool fat ปกติ",{c:m.abs<.6?"bad":"s"});
 b+=CAP(456,m.t);
 return svg(b,"0 0 640 512")}

/* ---------- 8. vitamin & mineral absorption sites ---------- */
const SEG=[["Stomach",GC.st,72],["Duodenum",GC.du,82],["Jejunum",CV.or,130],["Ileum",CV.ol,100],["Term. ileum",CV.tl,84],["Colon",GC.co,104]];
const NUT=[["Iron (Fe²⁺)",[1,1],"fe"],["Ca²⁺ (active, vit D)",[1,1],"ca"],["Folate",[1,2],"fol"],["Sugars · AA · fat",[1,3],"mac"],["Vitamin B12 + IF",[4,4],"b12"],["Bile salts (ASBT)",[4,4],"bs"],["H₂O · Na⁺ · SCFA",[5,5],"col"]];
const VMM={n:{t:"แต่ละสารมีจุดดูดซึมจำเพาะ: Iron fist, Bro — iron ที่ duodenum, folate ที่ duodenum–jejunum, B12 ที่ terminal ileum",x:[]},
 byp:{t:"Gastric bypass (Roux-en-Y): อาหารข้าม duodenum + กรด/IF ลด → iron, Ca²⁺ ↓ และ B12 ↓ (ต้องเสริม)",x:["fe","ca","b12"],seg:[0,1]},
 cel:{t:"Celiac disease: เสียหายที่ duodenum–proximal jejunum มากสุด → iron deficiency, folate ↓, fat malabsorption",x:["fe","fol","mac","ca"],seg:[1,2]},
 ilr:{t:"Terminal ileum resection / Crohn ileitis: B12 + bile salts หาย → B12 deficiency, bile acid diarrhea/steatorrhea",x:["b12","bs"],seg:[4]}};
const FEM={n:{t:"Hepcidin ปกติ",fpn:1,dmt:1},low:{t:"Iron deficiency: hepcidin ↓ → DMT1 + ferroportin ↑ → ดูดซึมมากขึ้น",fpn:1.5,dmt:1.5},inf:{t:"Inflammation (IL-6): hepcidin ↑ → ferroportin ถูกย่อยสลาย → iron ติดใน enterocyte",fpn:.2,dmt:.8}};
function vmD(){const m=VMM[ST.vm],fe=FEM[ST.fe];let b=FRAME(10,10,620,250);
 const X=[150];SEG.forEach(s=>X.push(X[X.length-1]+s[2]*.8));
 SEG.forEach(([n,c,w],i)=>{const cut=(m.seg||[]).includes(i);b+=`<rect x="${X[i]+2}" y="22" width="${w*.8-4}" height="30" rx="15" style="fill:${tint(c,cut?8:30)};stroke:${cut?CV.bad:c};stroke-width:${cut?2:1.2};${cut?"stroke-dasharray:4 3":""}"/>`+T(X[i]+w*.4,41,n,{c:"s"})});
 NUT.forEach(([n,[a,z],k],j)=>{const y=74+j*25,x0=X[a],x1=X[z+1],bad=m.x.includes(k);
  b+=T(140,y+4,n,{a:"end",c:bad?"bad":"s"})+SP(`M150,${y} H${X[6]}`,CV.line,1);
  b+=`<rect x="${x0+4}" y="${y-8}" width="${x1-x0-8}" height="16" rx="8" style="fill:${bad?tint(CV.bad,30):SEG[a][1]};opacity:${bad?1:.8}"/>`+(bad?XM(x1+8,y-1,CV.bad,14):"")});
 b+=T(320,252,"Ca²⁺ ยังซึมผ่าน paracellular ได้ทั่วลำไส้เล็ก · น้ำส่วนใหญ่ดูดที่ลำไส้เล็ก (colon ~1.5 L/day เหลือ <0.1 L)",{c:"s m"});
 /* iron enterocyte */
 b+=FRAME(10,270,400,210)+T(24,292,"Iron: duodenal enterocyte",{a:"start",c:"bh"});
 b+=`<rect x="110" y="306" width="200" height="148" rx="14" style="fill:${tint(GC.du,14)};stroke:color-mix(in srgb,${GC.du} 45%,transparent)"/>`;
 b+=T(60,320,"lumen",{c:"s m"})+T(360,320,"blood",{c:"s m"});
 b+=ION(52,348,"Fe³⁺",CV.rd,12)+AW(66,348,96,348,CV.rd,1.4,{h:5})+TP(110,348,CV.or,"Dcytb",{la:-2,ly:-20})+TP(110,392,CV.rd,"DMT1",{la:-2,ly:26})+ION(52,392,"Fe²⁺",CV.rd,12)+ION(78,408,"H⁺",GC.h,8);
 b+=AW(122,392,170,392,CV.rd,1.2+fe.dmt*1.4);
 b+=`<rect x="34" y="428" width="40" height="22" rx="8" style="fill:${tint(CV.rd,40)};stroke:${CV.rd}"/>`+T(54,443,"heme",{c:"s"})+TP(110,438,CV.pk,"",{})+AW(122,438,160,438,CV.pk,1.4,{h:5})+T(186,442,"HO-1 → Fe²⁺",{c:"s m"});
 b+=`<circle cx="190" cy="356" r="16" style="fill:${tint(CV.or,ST.fe==="inf"?55:28)};stroke:${CV.or}"/>`+T(190,360,"Ft",{c:"s"})+T(222,340,"ferritin",{a:"start",c:"s m"});
 const fp=fe.fpn;b+=TP(310,392,CV.rd,"",{off:fp<.5})+T(318,356,"ferroportin",{a:"start",c:"s"})+T(318,368,"+ hephaestin",{a:"start",c:"s m"});
 if(fp>.5)b+=AW(322,392,360,392,CV.rd,1.2+fp*1.6)+ION(380,392,"Tf",CV.lv,11);
 b+=NODE(330,418,74,36,CV.lv,"hepcidin","liver",{p:ST.fe==="inf"?34:ST.fe==="low"?6:16})+INH(334,420,318,410,CV.bad,ST.fe==="inf"?3:ST.fe==="low"?.8:1.6);
 b+=T(24,472,fe.t,{a:"start",c:"s m"});
 /* folate */
 b+=FRAME(420,270,210,210)+T(434,292,"Folate: duodenum–jejunum",{a:"start",c:"bh"});
 b+=RB(438,306,174,34,CV.ol,{r:17,p:16})+T(525,322,"food: polyglutamate",{c:"s"})+T(525,334,"(PteGlu₇)",{c:"s m"});
 b+=AW(525,342,525,362,CV.ink2,1.6)+RB(438,364,174,30,CV.ol,{r:15,p:24})+T(525,383,"brush-border conjugase",{c:"s"});
 b+=AW(525,396,525,414,CV.ink2,1.6)+RB(438,416,174,30,CV.ol,{r:15,p:12})+T(525,435,"PteGlu₁ → uptake (pH ~5)",{c:"s"});
 b+=T(525,466,"proximal small intestine เท่านั้น",{c:"s m"});
 b+=CAP(490,m.t);
 return svg(b,"0 0 640 546")}

/* ---------- 9. vitamin B12 & intrinsic factor ---------- */
const BTM={n:{x:[],t:"Food-B12 → (pepsin + HCl) → haptocorrin → (pancreatic protease) → IF → ileal receptor (Ca²⁺) → TCII → ตับเก็บ ~5 mg (พอหลายปี)",lab:["ปกติ","ปกติ","ปกติ","—"]},
 pa:{x:[2],t:"Pernicious anemia: autoimmune ทำลาย parietal cell + anti-IF → ไม่มี IF · atrophic gastritis, achlorhydria, gastrin ↑",lab:["↓","↑","↑","megaloblastic + neuro"]},
 ach:{x:[1],t:"Achlorhydria / PPI ระยะยาว / atrophic gastritis: ปล่อย B12 จากโปรตีนอาหารไม่ได้ (B12 อิสระยังดูดซึมได้)",lab:["↓ (ช้า)","↑","↑","megaloblastic"]},
 pi:{x:[3],t:"Pancreatic insufficiency: protease ไม่ตัด haptocorrin → B12 ไม่ย้ายไปจับ IF (FA: ขาด B12 ได้)",lab:["↓","↑","↑","มักไม่รุนแรง"]},
 il:{x:[4],t:"Terminal ileum resection / Crohn: ไม่มี IF–B12 receptor → ต้องให้ B12 ทางอื่นตลอด",lab:["↓","↑","↑","megaloblastic + neuro"]},
 veg:{x:[0],t:"Strict vegan: ไม่มี B12 ในพืช · ร่างกายเก็บไว้มาก (~5 mg vs ต้องการ ~2 μg/วัน) จึงใช้เวลาหลายปี",lab:["↓","↑","↑","ช้าหลายปี"]},
 fol:{x:[],t:"เทียบ folate deficiency: megaloblastic เหมือนกัน แต่ MMA ปกติ และไม่มี neuro (methylmalonyl-CoA mutase ต้องใช้ B12 เท่านั้น)",lab:["ปกติ","ปกติ","↑","megaloblastic"],fol:1}};
function btD(){const m=BTM[ST.bt],bk=i=>m.x.includes(i);let b="";
 const st=[[24,40,"Diet","animal food","เนื้อ ไข่ นม",CV.or],[178,40,"Stomach","pepsin + HCl","ปล่อย B12 → จับ haptocorrin (R)",GC.st],[332,40,"Parietal cell","intrinsic factor","หลั่งคู่กับกรด",GC.h],
  [486,40,"Duodenum","pancreatic protease","ตัด R → B12 จับ IF",GC.pa],[486,214,"Terminal ileum","IF–B12 receptor","ต้องมี Ca²⁺ · endocytosis",CV.tl],[332,214,"Enterocyte","→ TCII","ออกทาง basolateral",GC.du],[178,214,"Liver","store ~5 mg","หลั่งลง bile (enterohepatic)",GC.li],[24,214,"Tissues","B12 coenzyme","DNA synthesis · myelin",CV.vi]];
 const bi=[0,1,2,3,4,null,null,null];
 st.forEach(([x,y,n,s,d,c],i)=>{const br=bi[i]!==null&&bk(bi[i]);b+=RB(x,y,130,128,c,{p:br?6:16,sw:br?2:1.3,dash:br?"5 3":""})+T(x+65,y+24,n,{c:"bh"})+TAG(x+65,y+50,s,c,{w:Math.min(122,s.length*6.4+18)})+wrapT(x+10,y+80,d,20,"s",15)+(br?XM(x+112,y+16):"")});
 const fl=(x1,y1,x2,y2,i)=>AW(x1,y1,x2,y2,m.x.some(k=>k<=i)?CV.mut:CV.ink2,2,{op:m.x.some(k=>k<=i)?.3:1});
 b+=fl(156,104,176,104,0)+fl(310,104,330,104,1)+fl(464,104,484,104,2)+fl(551,170,551,212,3)+fl(484,278,464,278,4)+fl(330,278,310,278,5)+fl(176,278,156,278,6);
 /* molecules strip */
 b+=FRAME(10,354,620,74)+T(24,374,"B12 เปลี่ยนตัวพา",{a:"start",c:"bh"});
 [["food protein",CV.or],["haptocorrin (R)",CV.cy],["intrinsic factor",CV.vi],["transcobalamin II",CV.lv]].forEach(([n,c],i)=>{const x=60+i*150;b+=`<circle cx="${x}" cy="402" r="13" style="fill:${tint(c,40)};stroke:${c}"/>`+ION(x+11,394,"B12",CV.pk,9)+T(x+30,406,n,{a:"start",c:"s"})+(i<3?AW(x+116,402,x+136,402,CV.mut,1.4,{h:5}):"")});
 /* labs */
 const L=m.lab;b+=LAB(10,438,150,"Serum B12",L[0],L[0]==="ปกติ"?CV.vol:CV.bad)+LAB(166,438,150,"Methylmalonic acid",L[1],L[1]==="ปกติ"?CV.vol:CV.bad)+LAB(322,438,150,"Homocysteine",L[2],L[2]==="ปกติ"?CV.vol:CV.bad)+LAB(478,438,152,"Clinical",L[3],L[3]==="—"?CV.mut:CV.or);
 b+=CAP(496,m.t);
 return svg(b,"0 0 640 552")}

/* ---------- 10. Peyer patches & IgA ---------- */
function ppD(){const s=ST.pp,on=k=>s==="all"||s===k;let b="";
 b+=`<rect x="10" y="10" width="620" height="70" rx="16" style="fill:${tint(GC.du,8)};stroke:var(--sb-line)"/>`+T(24,32,"Ileal lumen",{a:"start",c:"bh"});
 for(let i=0;i<7;i++)b+=DOT(250+i*20,52+(i%2)*10,4,CV.rd,{sw:1});b+=T(330,36,"antigens · microbes",{c:"s m"});
 /* villi */
 const vil=x=>`<path d="M${x},400 L${x},120 C${x},90 ${x+60},90 ${x+60},120 L${x+60},400" style="fill:${tint(GC.du,14)};stroke:color-mix(in srgb,${GC.du} 50%,transparent);stroke-width:1.4"/>`+[...Array(9)].map((_,i)=>DOT(x+7,128+i*30,2.6,GC.du,{sw:0})+DOT(x+53,128+i*30,2.6,GC.du,{sw:0})).join("")+SP(`M${x+30},130 V396`,GC.bl,1.6,{op:.35})+SP(`M${x+22},140 V396 M${x+38},140 V396`,GC.ly,1,{op:.3,dash:"3 3"});
 b+=vil(30)+vil(500);
 /* dome + follicle */
 b+=`<path d="M120,400 L120,170 C160,90 320,90 360,170 L360,400 Z" style="fill:${tint(GC.du,10)};stroke:color-mix(in srgb,${GC.du} 50%,transparent);stroke-width:1.4"/>`+LB(T(240,118,"follicle-associated epithelium (dome)",{c:"s m"}));
 b+=`<ellipse cx="240" cy="300" rx="90" ry="64" style="fill:${tint(GC.im,14)};stroke:${GC.im};stroke-width:1.3"/>`+`<ellipse cx="240" cy="300" rx="44" ry="30" style="fill:${tint(GC.im,30)};stroke:${GC.im};stroke-dasharray:3 2"/>`+LB(T(240,303,"germinal",{c:"s"}))+LB(T(240,317,"center",{c:"s"}));
 /* step 1: M cell */
 const g1=`<path d="M220,140 L260,140 L256,178 C246,170 234,170 224,178 Z" style="fill:${tint(CV.cy,40)};stroke:${CV.cy};stroke-width:1.6"/>`+T(240,160,"M",{c:"bh"})+AW(240,64,240,136,CV.rd,1.8)+DOT(240,190,4,CV.rd,{sw:1})+
  `<path d="M200,206 l16,-8 l8,12 l-10,10 z" style="fill:${tint(CV.or,50)};stroke:${CV.or}"/>`+T(186,222,"DC",{c:"s"})+AW(236,194,214,206,CV.rd,1.2,{h:5})+T(300,170,"① M cell ส่ง antigen",{a:"start",c:on("s1")?"bh":"s m"});
 b+=DIM(on("s1"),g1);
 /* step 2: class switch + homing */
 const g2=DOT(214,281,8,CV.bl,{sw:1})+T(214,284,"T",{c:"ion"})+DOT(262,283,9,GC.im,{sw:1})+T(262,286,"B",{c:"ion"})+AW(222,281,252,283,CV.bl,1.2,{h:5})+T(240,262,"TGF-β",{c:"s m"})+
  T(240,346,"② class switch → IgA⁺ B",{c:on("s2")?"bh":"s m"})+CAW(300,330,420,440,520,380,GC.im,1.6,{dash:"5 4"})+T(420,452,"mesenteric node → thoracic duct → blood → home กลับ lamina propria",{c:"s m"});
 b+=DIM(on("s2"),g2);
 /* step 3: plasma cell + pIgR transcytosis in right villus */
 const g3=`<ellipse cx="524" cy="350" rx="18" ry="13" style="fill:${tint(GC.im,45)};stroke:${GC.im}"/>`+T(524,354,"PC",{c:"s"})+
  YG(548,322,GC.im,1,90)+YG(566,322,GC.im,1,-90)+DOT(557,322,2.6,CV.or,{sw:0})+T(600,350,"dimeric IgA",{c:"s"})+T(600,364,"+ J chain",{c:"s m"})+
  TP(560,276,CV.tl,"",{})+T(600,280,"pIgR",{c:"bh"})+
  [232,196,160].map((y,i)=>`<circle cx="550" cy="${y}" r="11" style="fill:${tint(CV.tl,22)};stroke:${CV.tl};stroke-dasharray:2 2"/>`+YG(550,y+2,GC.im,.6)).join("")+AW(568,250,568,118,CV.tl,1.6)+
  T(470,196,"③ transcytosis",{a:"end",c:on("s3")?"bh":"s m"})+T(470,212,"(vesicle)",{a:"end",c:"s m"})+
  YG(546,62,GC.im,1.1)+YG(574,70,GC.im,1.1,20)+DOT(546,48,4,CV.rd,{sw:1})+DOT(580,56,4,CV.rd,{sw:1})+T(560,30,"sIgA + secretory component",{c:"s"})+T(560,94,"จับจุลชีพใน mucus",{c:"s m"});
 b+=DIM(on("s3"),g3);
 b+=LB(T(60,420,"villus",{c:"s m"}))+LB(T(530,420,"villus",{c:"s m"}))+LB(T(240,384,"lamina propria + submucosa",{c:"s m"}));
 b+=CAP(462,{all:"Peyer patch = lymphoid follicle ไม่มีแคปซูลใน ileum · M cell เก็บตัวอย่าง → B cell → IgA plasma cell → sIgA ออกสู่ lumen",
  s1:"① M cell มี microvilli น้อย ส่ง antigen ทั้งโมเลกุลผ่าน epithelium ให้ DC/lymphocyte ใต้ dome",
  s2:"② B cell ใน germinal center เปลี่ยน class เป็น IgA แล้ว home กลับไปอยู่ lamina propria ทั่วลำไส้",
  s3:"③ dimeric IgA จับ pIgR ที่ basolateral → transcytosis → ตัด pIgR เหลือ secretory component ปกป้อง IgA จาก protease"}[s]);
 return svg(b,"0 0 640 518")}

/* ---------- 11. bile ---------- */
const BLM={n:{pool:.85,syn:.15,col:.1,fat:.95,t:"Bile acid pool ~3 g วน 4–12 รอบ/วัน · ดูดกลับ ~95% ที่ terminal ileum (ASBT) · เสียทางอุจจาระ ~0.5 g/วัน = ตับสร้างทดแทน"},
 sh:{pool:.7,syn:.55,col:.7,fat:.85,t:"Resection/disease ileum < 100 cm: ตับสร้างทดแทนทัน แต่ bile acid ล้นลง colon → secretory (bile acid) diarrhea",cut:1},
 lg:{pool:.25,syn:.9,col:.6,fat:.45,t:"Resection > 100 cm: เสียเกินกำลังตับสร้าง → pool หด → steatorrhea · Ca จับไขมัน → oxalate ถูกดูดซึม → Ca-oxalate stone · gallstone ↑",cut:2},
 obs:{pool:.6,syn:.1,col:0,fat:.4,t:"ท่อน้ำดีอุดตัน: bile acid ไม่ถึงลำไส้ → ไม่มี micelle → fat + vitamin ADEK malabsorption · อุจจาระซีด · คัน",obs:1}};
function blD(){const m=BLM[ST.bl];let b="";
 /* liver */
 b+=`<path d="${sm([[30,58],[150,30],[280,44],[300,92],[250,138],[120,148],[36,124]])}" style="fill:${tint(GC.li,16)};stroke:color-mix(in srgb,${GC.li} 55%,transparent);stroke-width:1.5"/>`+T(160,66,"Liver (hepatocyte)",{c:"bh"});
 b+=T(160,86,"cholesterol → 7α-hydroxylase (rate-limiting)",{c:"s"})+T(160,102,"→ cholic / chenodeoxycholic acid",{c:"s m"})+T(160,118,"+ glycine / taurine = bile salts",{c:"s m"});
 b+=MET(64,170,190,"Hepatic synthesis",m.syn,GC.li);
 /* gallbladder */
 b+=`<path d="${sm([[340,64],[372,54],[400,74],[396,114],[366,132],[340,114]])}" style="fill:${tint(GC.gb,24)};stroke:${GC.gb};stroke-width:1.5"/>`+T(370,96,"GB",{c:"bh"});
 b+=T(418,66,"เข้มข้น ~5× (สูงสุด 20×)",{a:"start",c:"s"})+T(418,82,"CCK → บีบ + Oddi คลาย",{a:"start",c:"s"})+T(418,98,"ความจุ 30–60 mL",{a:"start",c:"s m"});
 b+=AW(290,80,336,84,GC.gb,2)+T(312,72,"BSEP",{c:"s m"});
 /* common bile duct */
 b+=SP("M366,132 C366,170 352,196 336,222",GC.gb,m.obs?1.2:3,{op:m.obs?.3:1});if(m.obs)b+=XM(362,172);
 /* small intestine: duodenum → ileum */
 b+=`<path d="M300,232 C360,226 420,236 470,256 C512,272 540,290 556,318" style="fill:none;stroke:${GC.du};stroke-width:28;stroke-linecap:round;opacity:.3"/>`;
 b+=T(420,290,"duodenum–jejunum: micelles",{c:"s"})+T(420,304,"(passive reabsorption บางส่วน)",{c:"s m"});
 /* terminal ileum */
 const cut=m.cut;b+=`<path d="M556,318 C568,342 572,364 566,388" style="fill:none;stroke:${cut?CV.bad:CV.tl};stroke-width:28;stroke-linecap:round;opacity:${cut?.15:.45};${cut?"stroke-dasharray:8 6":""}"/>`;
 b+=T(530,352,"terminal ileum",{a:"end",c:"bh"})+T(530,366,"ASBT (active)",{a:"end",c:"s m"})+(cut?XM(566,350,CV.bad,22)+T(530,382,cut===1?"ตัด < 100 cm":"ตัด > 100 cm",{a:"end",c:"bad"}):"");
 /* colon */
 b+=`<path d="M566,388 C552,426 500,440 440,442 C390,444 350,440 330,430" style="fill:none;stroke:${GC.co};stroke-width:24;stroke-linecap:round;opacity:${.2+m.col*.45}"/>`+T(450,424,"colon: bacteria → secondary bile acids",{c:"s"});
 b+=`<ellipse cx="306" cy="430" rx="16" ry="11" style="fill:${m.obs?"var(--sb-surface2)":tint(CV.or,45)};stroke:${CV.or}"/>`+T(306,454,m.obs?"acholic stool":"feces ~0.5 g/วัน",{c:m.obs?"bad":"s m"});
 if(m.col>.5)b+=T(450,466,"bile acid ล้น colon → Cl⁻/น้ำ หลั่ง → diarrhea",{c:"bad"});
 /* portal return */
 b+=CAW(590,330,660,170,304,112,GC.bl,cut===2?1:1+m.pool*3,{dash:cut?"5 4":"",op:m.obs?.25:1})+T(566,154,"portal vein → NTCP",{a:"end",c:"s"})+T(566,170,m.obs?"":cut?"pool ลดลง":"~95% กลับตับ",{a:"end",c:"s m"});
 /* composition */
 b+=FRAME(10,212,190,240)+T(24,234,"Bile solids (คร่าวๆ)",{a:"start",c:"bh"});
 [["bile salts ~½",.5,GC.gb],["lecithin",.2,CV.or],["cholesterol",.1,CV.ol],["bilirubin",.06,CV.rd],["ions etc.",.14,CV.mut]].reduce((y,[n,f,c])=>{const h=f*190;b+=`<rect x="28" y="${y}" width="30" height="${h-2}" rx="4" style="fill:${tint(c,55)};stroke:${c}"/>`+T(66,y+h/2+3,n,{a:"start",c:"s"});return y+h},248);
 /* meters */
 b+=FRAME(10,476,620,52)+MET(28,502,170,"Bile acid pool",m.pool,GC.gb)+MET(228,502,170,"Colonic bile acid",m.col,GC.co)+MET(428,502,180,"Fat absorption",m.fat,GC.fat);
 b+=CAP(538,m.t);
 return svg(b,"0 0 640 594")}

/* ---------- 12. bilirubin metabolism & jaundice ---------- */
const JTM={n:{t:"Heme → biliverdin → UCB (จับ albumin) → hepatocyte: uptake → UGT1A1 conjugate → MRP2 ขับลง bile → bacteria → urobilinogen",lab:["ปกติ","ปกติ","−","ปกติ","น้ำตาล"]},
 hem:{t:"Hemolytic: สร้าง bilirubin เกินกำลังตับ → UCB ↑ · urobilinogen ↑ (ไม่มี bilirubin ในปัสสาวะ — UCB จับ albumin)",lab:["↑↑","ปกติ","−","↑","น้ำตาลเข้ม"],hi:"rbc"},
 gil:{t:"Gilbert: UGT1A1 ลดเหลือ ~10–33% (promoter TA repeat) · พบได้ถึง ~8% · เหลืองเล็กน้อยเวลาอดอาหาร เครียด ป่วย",lab:["↑ เล็กน้อย","ปกติ","−","ปกติ","น้ำตาล"],x:"ugt",part:1},
 cn1:{t:"Crigler–Najjar I: ไม่มี UGT1A1 เลย → UCB 20–45 mg/dL ตั้งแต่แรกเกิด → kernicterus · phenobarbital ไม่ช่วย (type II ตอบสนอง)",lab:["↑↑↑","~0","−","↓","ซีดลง"],x:"ugt"},
 dj:{t:"Dubin–Johnson: MRP2 บกพร่อง → conjugated bilirubin ขับลง bile ไม่ได้ → CB ↑ · ตับสีดำ (pigment) · ไม่มีอันตราย",lab:["ปกติ","↑","+","ปกติ","น้ำตาล"],x:"mrp2"},
 rot:{t:"Rotor: ขาด OATP1B1/1B3 (reuptake) → CB ↑ คล้าย Dubin–Johnson แต่ตับไม่ดำ · ไม่มีอันตราย",lab:["ปกติ/↑","↑","+","ปกติ","น้ำตาล"],x:"oatp"},
 hep:{t:"Hepatocellular (เช่น hepatitis): เสียทั้ง uptake, conjugation, excretion → ทั้ง UCB และ CB ↑ · AST/ALT สูง",lab:["↑","↑","+","ปกติ/↑","น้ำตาล/ซีด"],x:"hep",part:1},
 obs:{t:"Obstructive (นิ่ว, มะเร็งหัวตับอ่อน): CB ย้อนเข้าเลือด → bilirubinuria · ไม่มี bilirubin ถึงลำไส้ → urobilinogen ↓ อุจจาระสีดินเหนียว",lab:["ปกติ","↑↑","+","↓/0","ซีด (clay)"],x:"duct"}};
function jtD(){const m=JTM[ST.jt],x=k=>m.x===k;let b="";const hem=m.hi==="rbc",ob=x("duct"),cn=x("ugt")&&!m.part,mr=x("mrp2");
 /* macrophage */
 b+=`<ellipse cx="62" cy="70" rx="26" ry="16" style="fill:${tint(CV.rd,hem?50:26)};stroke:${CV.rd}"/>`+T(62,74,"RBC",{c:"s"})+(hem?T(62,44,"hemolysis",{c:"bad"}):"");
 b+=AW(62,88,62,118,CV.rd,hem?4:2);
 b+=RB(14,120,170,104,CV.or,{p:14})+T(99,140,"Macrophage (spleen)",{c:"bh"})+T(99,160,"heme → heme oxygenase",{c:"s"})+T(99,176,"→ biliverdin (green)",{c:"s"})+T(99,192,"→ bilirubin (UCB, yellow)",{c:"s"})+T(99,210,"+ CO + Fe²⁺",{c:"s m"});
 /* blood */
 b+=AW(184,170,226,170,GC.fat,hem?4.5:2.2)+`<rect x="228" y="120" width="96" height="104" rx="14" style="fill:${tint(GC.bl,12)};stroke:var(--sb-line)"/>`+T(276,140,"Blood",{c:"bh"});
 b+=`<circle cx="262" cy="176" r="14" style="fill:${tint(CV.ol,40)};stroke:${CV.ol}"/>`+T(262,180,"Alb",{c:"s"})+DOT(280,166,7,GC.fat,{sw:1})+T(276,210,"UCB–albumin",{c:"s m"});
 /* hepatocyte */
 const hp=x("hep");b+=`<rect x="352" y="96" width="270" height="150" rx="20" style="fill:${tint(GC.li,hp?26:12)};stroke:color-mix(in srgb,${GC.li} 55%,transparent);stroke-width:1.6;${hp?"stroke-dasharray:6 4":""}"/>`+T(487,118,"Hepatocyte",{c:"bh"});
 b+=TP(352,170,CV.cy,"",{off:x("oatp")||hp})+T(370,200,"OATP uptake",{a:"start",c:"s m"})+AW(326,170,340,170,GC.fat,2);
 b+=RB(392,140,108,44,CV.vi,{r:22,p:x("ugt")?(m.part?10:4):18,dash:x("ugt")?"4 3":""})+T(446,158,"UGT1A1",{c:"bh"})+T(446,174,"+ glucuronate",{c:"s m"})+(x("ugt")?XM(494,142,m.part?CV.or:CV.bad):"");
 b+=AW(500,162,540,162,CV.vi,2,{op:cn?.2:1})+T(520,152,"CB",{c:"s"});
 b+=TP(560,162,CV.pk,"MRP2",{off:mr,la:0,ly:-22});
 b+=T(487,236,hp?"injury: ทุกขั้นบกพร่อง":"conjugated = direct (water-soluble)",{c:hp?"bad":"s m"});
 /* reflux to blood */
 if(ob||mr||x("oatp")||hp)b+=CAW(560,190,460,280,300,224,CV.pk,2.6,{dash:"6 4"})+T(420,292,"CB ย้อนเข้าเลือด",{c:"bad"});
 /* bile duct → gut */
 b+=SP("M570,176 C600,220 610,280 590,320",GC.gb,ob?1.2:3,{op:ob?.3:1})+T(612,250,"bile",{c:"s",r:90});if(ob)b+=XM(606,270);
 /* gut */
 b+=`<path d="M590,320 C560,350 480,350 400,348 C320,346 260,352 220,372" style="fill:none;stroke:${GC.du};stroke-width:30;stroke-linecap:round;opacity:.28"/>`+T(470,344,"Gut: bacteria → urobilinogen",{c:"s"});
 const ubg=ob?.05:cn?.3:hem?1:.6;
 /* feces */
 b+=AW(220,372,160,404,CV.or,1+ubg*2.4,{op:ubg>.1?1:.2})+`<circle cx="138" cy="418" r="20" style="fill:${ob?"var(--sb-surface2)":tint(CV.or,30+ubg*40)};stroke:${CV.or}"/>`+T(138,452,"feces: stercobilin (~80%)",{c:"s"});
 /* reabsorption via portal blood */
 const op=ubg>.1?1:.2;b+=AW(400,360,400,392,CV.lv,1+ubg*2,{op})+T(408,380,"~20% reabsorbed",{a:"start",c:"s m"});
 b+=`<circle cx="400" cy="410" r="17" style="fill:${tint(CV.lv,24)};stroke:${CV.lv}"/>`+T(400,414,"portal",{c:"s"});
 b+=CAW(384,404,330,320,370,250,CV.lv,1+ubg*1.6,{dash:"4 3",op:op*.85})+T(318,318,"~90% → ตับ",{a:"end",c:"s m"});
 b+=AW(384,420,330,440,CV.lv,1.2+ubg,{op})+T(358,452,"~10%",{c:"s m"});
 b+=`<path d="${bean(300,446,34,44,1,0)}" style="fill:${tint(CV.lv,22)};stroke:${CV.lv};stroke-width:1.3"/>`+T(300,450,"K",{c:"s"});
 const uc=m.lab[2]==="+";b+=`<path d="M246,430 C246,420 252,412 256,406 C260,412 266,420 266,430 C266,440 246,440 246,430Z" style="fill:${uc?"#B45309":tint(GC.fat,40+ubg*30)};stroke:${GC.fat}"/>`;
 b+=T(330,478,uc?"urine: urobilin + conjugated bilirubin (สีเข้ม)":"urine: urobilin (สีเหลือง)",{c:uc?"bad":"s"});
 /* sclera */
 const yel={n:0,hem:.55,gil:.3,cn1:1,dj:.45,rot:.45,hep:.75,obs:.9}[ST.jt];
 b+=`<path d="M470,48 C500,22 560,22 590,48 C560,74 500,74 470,48Z" style="fill:color-mix(in srgb,#F5C518 ${Math.round(yel*70)}%,#FFFFFF);stroke:var(--sb-line);stroke-width:1.4"/>`+`<circle cx="530" cy="48" r="14" style="fill:#6B4F2A"/><circle cx="530" cy="48" r="6" style="fill:#111"/><circle cx="534" cy="44" r="2.4" style="fill:#fff"/>`+T(530,88,yel>.6?"scleral icterus ชัด":yel>.2?"เหลืองเล็กน้อย":"sclera ปกติ",{c:"s m"});
 /* labs */
 const L=m.lab,lc=v=>v==="ปกติ"||v==="−"||v==="น้ำตาล"?CV.vol:CV.bad;
 b+=FRAME(10,486,620,72);
 [["Unconjugated",L[0]],["Conjugated",L[1]],["Urine bilirubin",L[2]],["Urine urobilinogen",L[3]],["Stool color",L[4]]].forEach(([l,v],i)=>b+=LAB(20+i*122,498,114,l,v,lc(v)));
 b+=CAP(568,m.t);
 return svg(b,"0 0 640 624")}

/* ---------- 13. motility (เสริม) ---------- */
const MOM={sw:"Swallow: UES คลาย → peristalsis ไล่ลง ~8–10 วินาที · LES คลาย (receptive relaxation, VIP/NO) ตั้งแต่ต้นจนคลื่นผ่าน",
 ach:"Achalasia: LES ไม่คลาย + peristalsis ส่วนล่างหาย (เสีย inhibitory neurons ของ myenteric plexus) → dysphagia ทั้งของแข็งและเหลว",
 ge:"Gastric emptying: ของเหลวออกเร็วแบบ exponential · ของแข็งต้องบดเหลือ < 2 mm ก่อน (lag) · ไขมัน กรด hyperosmolar ใน duodenum ชะลอ (CCK, secretin, GIP, enterogastric reflex)",
 mmc:"MMC (fasting): phase I เงียบ → II ไม่สม่ำเสมอ → III บีบแรงเป็นแถวกวาดของ > 2 mm และแบคทีเรีย · motilin พุ่งก่อน phase III · กินอาหาร → fed pattern"};
function moD(){const s=ST.mo;let b=FRAME(10,10,620,410);
 if(s==="sw"||s==="ach"){const ach=s==="ach";b+=T(24,32,ach?"Manometry: achalasia":"Manometry: normal swallow",{a:"start",c:"bh"});
  const rows=[["Pharynx",.25,"c"],["UES",.2,"s"],["Upper esophagus",1.2,"c"],["Mid esophagus",3.5,"c"],["Distal esophagus",6,"c"],["LES",0,"l"]],t0=110,tw=490,tx=t=>t0+t/12*tw;
  b+=SP(`M${tx(0)},44 V400`,CV.acc,1.2,{dash:"3 3"})+T(tx(0),410,"swallow",{c:"s m"});
  [0,4,8,12].forEach(t=>b+=T(tx(t),396,t+" s",{c:"s m"}));
  rows.forEach(([n,d,k],i)=>{const y0=88+i*56;b+=T(100,y0-6,n,{a:"end",c:"s"})+SP(`M${t0},${y0} H${t0+tw}`,CV.line,1);
   let f;if(k==="c")f=t=>ach&&i>=3?.18*Math.exp(-((t-1.4)*(t-1.4))/.5):Math.exp(-((t-d)*(t-d))/(2*.35*.35));
   else if(k==="s")f=t=>.5-.5*Math.exp(-((t-.3)*(t-.3))/.08)+.9*Math.exp(-((t-.9)*(t-.9))/.06);
   else f=t=>ach?.7:.55-(t>.1&&t<8?.5*Math.min(1,(t-.1)*3,(8-t)*2):0)+(t>8?.35*Math.exp(-(t-8.6)*(t-8.6)/.4):0);
   const pts=[];for(let j=0;j<=200;j++){const t=j/200*12;pts.push([tx(t),y0-f(t)*34])}b+=SP(PTS(pts),k==="l"?CV.vi:k==="s"?CV.bl:GC.st,2.4);
   if(k==="l")b+=T(t0+tw,y0-38,ach?"LES ไม่คลาย ✕":"LES คลาย",{a:"end",c:ach?"bad":"s"})});
  if(!ach)b+=CAW(tx(1.2)+8,150,tx(4),220,tx(6)+6,346,CV.acc,1.4,{dash:"5 4"})+T(tx(4.4),236,"peristaltic wave",{a:"start",c:"s m"});
  else b+=T(tx(4),300,"distal: แรงบีบต่ำ/พร้อมกัน",{c:"bad"});}
 if(s==="ge"){b+=T(24,32,"Gastric emptying (เชิงคุณภาพ)",{a:"start",c:"bh"});
  const A=AX(70,50,330,300,[0,4],[0,100],[0,1,2,3,4],[0,50,100],"ชั่วโมงหลังมื้อ","% คงเหลือในกระเพาะ",{});b+=A.g;
  b+=SP(FN(A,t=>100*Math.exp(-t/.45),0,4,120),GC.w,3)+CT(A.X(.55),A.Y(25),"liquid",GC.w,{a:"start",s:11.5});
  b+=SP(FN(A,t=>t<.6?100-3*t:Math.max(0,98-(t-.6)*40),0,4,120),CV.or,3)+CT(A.X(1.62),A.Y(22),"solid (lag → linear)",CV.or,{a:"start",s:11.5});
  b+=SP(FN(A,t=>t<.8?100-2*t:Math.max(0,98-(t-.8)*24),0,4,120),GC.fat,3,{dash:"7 4"})+CT(A.X(2.6),A.Y(64),"fatty meal",GC.fat,{a:"start",s:11.5});
  b+=RB(420,50,196,350,GC.du,{p:10})+T(518,72,"Duodenal brakes",{c:"bh"});
  ["distention","acid (pH < ~3.5–4)","hyperosmolar / hypotonic","fat → CCK (แรงสุด)","protein breakdown","irritation"].forEach((t,i)=>b+=T(434,100+i*22,"• "+t,{a:"start",c:"s"}));
  b+=T(518,250,"→ enterogastric reflex",{c:"s"})+T(518,266,"(ENS, sympathetic, vagal)",{c:"s m"})+T(518,290,"→ ⊖ pyloric pump",{c:"s"})+T(518,306,"→ ↑ pyloric tone",{c:"s"});
  b+=T(518,340,"gastrin ⊕ antral motility",{c:"s m"})+T(518,356,"การยืดกระเพาะ ⊕ pump",{c:"s m"})}
 if(s==="mmc"){b+=T(24,32,"Interdigestive MMC (ทุก ~90 นาที)",{a:"start",c:"bh"});
  const t0=60,tw=540,tx=t=>t0+t/300*tw;
  const ph=t=>{const c=t%100;return c<45?0:c<85?1:2},rnd=i=>((i*9301+49297)%233280)/233280;
  let pts=[];for(let i=0;i<=900;i++){const t=i/3,p=t>=270?3:ph(t);let a=p===0?.02:p===1?(rnd(i)>.8?.2+.45*rnd(i+7):.04):p===2?(i%2?.95:.5):(i%2?.2+.35*rnd(i+3):.08);pts.push([tx(t),210-a*110])}
  b+=SP(PTS(pts),GC.st,1.6);
  [0,100,200].forEach(c=>{b+=`<rect x="${tx(c)}" y="60" width="${tx(c+45)-tx(c)}" height="16" rx="4" style="fill:${tint(CV.mut,30)}"/>`+`<rect x="${tx(c+45)}" y="60" width="${tx(c+85)-tx(c+45)}" height="16" rx="4" style="fill:${tint(CV.or,40)}"/>`+`<rect x="${tx(c+85)}" y="60" width="${tx(c+100)-tx(c+85)}" height="16" rx="4" style="fill:${tint(CV.bad,50)}"/>`;
   b+=T((tx(c)+tx(c+45))/2,72,"I",{c:"s"})+T((tx(c+45)+tx(c+85))/2,72,"II",{c:"s"})+T((tx(c+85)+tx(c+100))/2,72,"III",{c:"s"})});
  b+=`<rect x="${tx(270)}" y="60" width="${tx(300)-tx(270)}" height="16" rx="4" style="fill:${tint(CV.good,40)}"/>`+T((tx(270)+tx(300))/2,72,"fed",{c:"s"});
  b+=T(66,96,"contraction (small intestine)",{a:"start",c:"s m"});
  const Am=AX(t0,250,tw,110,[0,300],[0,1],[0,90,180,270],[],"นาที","",{});b+=Am.g;
  b+=SP(FN(Am,t=>t>=270?.08:.12+.85*Math.exp(-(((t%100)-82)*((t%100)-82))/50),0,300,300),CV.vi,2.6)+CT(tx(82),262,"motilin",CV.vi,{s:11.5});
  b+=SP(`M${tx(270)},84 V360`,CV.good,1.6,{dash:"4 3"})+T(tx(270)+4,96,"meal",{a:"start",c:"s"})}
 b+=CAP(430,MOM[s]);
 return svg(b,"0 0 640 486")}

/* ---------- 14. enteric nervous system (เสริม) ---------- */
const ENM={n:{t:"Distention → ส่วนบน (orad) หดด้วย ACh/substance P · ส่วนล่าง (aboral) คลายด้วย VIP/NO = peristaltic reflex (“law of the gut”)"},
 para:{t:"Parasympathetic (vagus, pelvic S2–S4): preganglionic ไซแนปส์กับ ENS neuron → ↑ motility และ secretion",up:1},
 sym:{t:"Sympathetic (T5–L2 → prevertebral ganglia): NE กด ENS เป็นหลัก → ↓ motility, sphincter หด, vasoconstriction",dn:1},
 hir:{t:"Hirschsprung: neural crest ไม่ migrate ถึงปลาย (RET) → aganglionic segment หดค้าง ไม่คลาย → megacolon เหนือรอยโรค",ag:1}};
function enD(){const m=ENM[ST.en];let b="";
 /* wall layers */
 const L=[["Mucosa",GC.du,40],["Submucosa",CV.mut,34],["Circular muscle",GC.st,36],["Longitudinal muscle",GC.st,22],["Serosa",CV.mut,12]];let y=30;
 b+=T(24,20,"Gut wall",{a:"start",c:"bh"});
 L.forEach(([n,c,h])=>{b+=`<rect x="130" y="${y}" width="490" height="${h}" style="fill:${tint(c,n.includes("muscle")?22:10)};stroke:var(--sb-line)"/>`+T(122,y+h/2+4,n,{a:"end",c:"s"});y+=h});
 const gang=(yy,c,n)=>{let g="";for(let i=0;i<9;i++){const xx=150+i*54;g+=DOT(xx,yy,m.ag&&i>=6?0:5,c,{sw:1})+(i<8&&!(m.ag&&i>=5)?SP(`M${xx+5},${yy} L${xx+49},${yy}`,c,1.4):"")}return g+T(150,yy-8,n,{a:"start",c:"bh"})};
 for(let i=0;i<24;i++)b+=`<path d="M${136+i*20},30 C${136+i*20},14 ${152+i*20},14 ${152+i*20},30" style="fill:${tint(GC.du,18)};stroke:color-mix(in srgb,${GC.du} 45%,transparent)"/>`;
 b+=gang(92,CV.vi,"Meissner (submucosal): secretion · blood flow")+gang(140,GC.nv,"Auerbach (myenteric): motility");
 for(let i=0;i<8;i++)b+=`<path d="M${177+i*54},150 l4,-6 l4,6 l-4,6 z" style="fill:${CV.or}"/>`;b+=T(136,180,"◆ ICC (pacemaker, slow waves)",{a:"start",c:"s m"});
 if(m.ag)b+=`<rect x="440" y="28" width="180" height="150" rx="6" style="fill:${tint(CV.bad,10)};stroke:${CV.bad};stroke-dasharray:5 4"/>`+T(530,196,"aganglionic segment",{c:"bad"});
 /* extrinsic */
 b+=NODE(140,200,150,40,GC.nv,"Parasympathetic","vagus · pelvic",{p:m.up?32:12})+NODE(310,200,150,40,CV.or,"Sympathetic","T5–L2 · NE",{p:m.dn?32:12});
 b+=AW(215,200,215,148,GC.nv,1.4+(m.up?2:0))+INH(385,200,385,148,CV.bad,1.4+(m.dn?2:0));
 b+=T(560,214,"~80% ของ vagal fibers",{c:"s m"})+T(560,228,"เป็น afferent",{c:"s m"});
 /* peristaltic reflex */
 b+=FRAME(10,256,620,170)+T(24,278,"Peristaltic reflex",{a:"start",c:"bh"});
 const tube=(x0,x1,yy,f)=>{let top=[],bot=[];for(let x=x0;x<=x1;x+=4){const r=f(x);top.push([x,yy-r]);bot.push([x,yy+r])}return `<path d="M${top.map(p=>p.join(",")).join(" L")} L${bot.reverse().map(p=>p.join(",")).join(" L")}Z" style="fill:${tint(GC.du,16)};stroke:color-mix(in srgb,${GC.du} 55%,transparent);stroke-width:1.4"/>`};
 const ag=m.ag,con=m.dn?.6:1;
 b+=tube(40,600,350,x=>{let r=40;r-=con*22*Math.exp(-((x-200)*(x-200))/900);r+=10*Math.exp(-((x-310)*(x-310))/2400);if(!ag)r+=12*Math.exp(-((x-440)*(x-440))/2500);else r-=16*(x>440?1:0)*Math.min(1,(x-440)/20);if(ag&&x<420)r+=8;return r});
 b+=`<ellipse cx="310" cy="350" rx="40" ry="26" style="fill:${tint(CV.or,50)};stroke:${CV.or}"/>`+T(310,354,"bolus",{c:"s"});
 b+=T(200,300,"orad: contract",{c:"bh"})+T(200,316,"ACh · substance P",{c:"s m"})+AW(150,402,250,402,GC.st,1.8)+T(200,418,"→ propel",{c:"s m"});
 b+=T(450,300,ag?"no relaxation ✕":"aboral: relax",{c:ag?"bad":"bh"})+T(450,316,ag?"tonic contraction":"VIP · NO",{c:"s m"});
 b+=LB(T(80,330,"mouth",{c:"s m"}))+LB(T(590,330,"anus",{c:"s m"}));
 b+=CAP(436,m.t);
 return svg(b,"0 0 640 492")}

/* ================= sections ================= */
SEC.push({id:"regs",k:"a",t:"GI regulatory substances",mm:"GI hormones by meal phase",leg:[],
tools:[["ph",[["ceph","Cephalic"],["gast","Gastric"],["int","Intestinal"],["fast","Fasting"]]]],draw:regD,
notes:()=>`<h3>Gastrin</h3><ul>
<li>หลั่งจาก <b>G cell</b> ใน pyloric gland ของ antrum (และ duodenum) · มี 2 รูป G-34 และ G-17 ซึ่ง G-17 มากกว่า ${S.g}</li>
<li>กระตุ้นโดย peptone/กรดอะมิโน (โปรตีนสมบูรณ์ไม่กระตุ้น), การยืดกระเพาะ และ <b>GRP</b> จากปลาย vagus · pH ใน antrum ต่ำ → D cell หลั่ง somatostatin กด gastrin ${S.b} ${S.g}</li>
<li>ฤทธิ์: ↑ กรด (ผ่าน ECL/histamine เป็นหลัก), ↑ การเจริญของ gastric mucosa, ↑ motility ${S.g} ${S.fa}</li>
<li>สูงใน chronic PPI, chronic atrophic gastritis และ Zollinger–Ellison (gastrinoma) ${S.fa}</li></ul>
<h3>Somatostatin</h3><ul>
<li>D cell ของกระเพาะ/duodenum และ δ cell ของ islet · D cell ใน antrum รับรู้ pH ต่ำ ส่วนใน corpus ถูกคุมด้วยประสาท/hormone · vagus กด D cell ${S.b}</li>
<li>กดกรดทั้งทางตรง (Gi ที่ parietal cell) และทางอ้อม (ลด histamine จาก ECL, ลด gastrin จาก G cell) ${S.b}</li>
<li>กดการหลั่งของตับอ่อนและลำไส้, การบีบถุงน้ำดี, insulin และ glucagon (“somato-stasis”) · octreotide ใช้ใน acromegaly, carcinoid, VIPoma, variceal bleeding ${S.fa}</li></ul>
<h3>CCK · Secretin · GIP</h3><ul>
<li><b>CCK</b>: I cell ใน duodenum/jejunum ตอบสนองต่อ fatty acid, monoglyceride และ peptone → บีบถุงน้ำดี, ⊕ เอนไซม์ตับอ่อน, ⊖ gastric emptying, ลดความอยากอาหารผ่าน vagal afferent ${S.g}</li>
<li>CCK กระตุ้นการหลั่งของตับอ่อนผ่าน neural muscarinic pathway ร่วมด้วย ${S.fa}</li>
<li><b>Secretin</b> (27 aa): S cell หลั่งเมื่อ pH ใน duodenum < 4.5–5.0 และมากขึ้นเรื่อยๆ จน pH 3 → HCO₃⁻ จากตับอ่อนและท่อน้ำดี · ⊖ การหลั่งกรด ${S.g} ${S.b}</li>
<li><b>GIP</b> (glucose-dependent insulinotropic peptide): K cell ตอบสนองต่อ fatty acid, กรดอะมิโน และ glucose · ⊕ insulin ที่ระดับต่ำกว่าที่ใช้กด motility ${S.g}</li>
<li>Oral glucose กระตุ้น insulin มากกว่า IV ที่ระดับน้ำตาลเท่ากัน เพราะ GIP ${S.fa}</li></ul>
<h3>Motilin · VIP · NO · Ghrelin</h3><ul>
<li><b>Motilin</b> (22 aa) จาก duodenal mucosa หลั่งก่อน phase 3 ของ MMC · ไม่มีบทบาทใน fed state ${S.b} · erythromycin (motilin agonist) ใช้กระตุ้น peristalsis ${S.fa}</li>
<li><b>VIP</b> และ <b>NO</b> เป็นสารสื่อของ inhibitory motor neuron → คลาย smooth muscle และ sphincter ${S.b}</li>
<li>VIP ↑ การหลั่งน้ำและ electrolyte ในลำไส้, ↓ กรด · VIPoma → Watery Diarrhea, Hypokalemia, Achlorhydria (WDHA) ${S.fa}</li>
<li><b>Ghrelin</b> จากกระเพาะหลั่งมากช่วงอดอาหาร → กระตุ้นความหิว ${S.g} ${S.h} · สูงใน Prader–Willi, ลดหลัง gastric bypass ${S.fa}</li></ul>
<div class="pearl">สลับช่วงมื้อ: cephalic/gastric เป็นของ <b>gastrin</b> · intestinal เป็นของ <b>CCK–secretin–GIP</b> (ผ่าน “brake” ที่ duodenum) · fasting เป็นของ <b>motilin</b> และ ghrelin</div>`});

SEC.push({id:"secprod",k:"b",t:"GI secretory products & cell locations",mm:"Secretory cells map",leg:[],
tools:[["sp",[["acid","HCl"],["if","Intrinsic factor"],["pep","Pepsin"],["hco3","HCO₃⁻ · mucus"],["ecl","ECL · histamine"],["gas","G cell · gastrin"]]]],draw:spD,
notes:()=>`<h3>Oxyntic vs pyloric glands</h3><ul>
<li><b>Oxyntic gland</b> ที่ body/fundus (~80% ส่วนต้น) หลั่ง HCl, pepsinogen, intrinsic factor และ mucus · <b>pyloric gland</b> ที่ antrum (~20%) หลั่ง mucus และ gastrin ${S.g}</li>
<li>เซลล์ของ oxyntic gland: mucous neck (mucus), chief/peptic (pepsinogen), parietal/oxyntic (HCl + IF) ${S.g}</li>
<li>ECL cell อยู่ลึกในต่อม ปล่อย histamine สัมผัส parietal cell โดยตรง ${S.g} · gastrin เพิ่มกรดผ่าน ECL เป็นหลักมากกว่าที่ parietal cell โดยตรง ${S.fa}</li></ul>
<table><tr><th>Product</th><th>Source</th><th>⊕</th><th>⊖ / Note</th></tr>
<tr><td>Gastric acid</td><td>Parietal cell</td><td>histamine, ACh, gastrin</td><td>somatostatin, GIP, prostaglandin, secretin</td></tr>
<tr><td>Intrinsic factor</td><td>Parietal cell</td><td>เหมือนกรด</td><td>จำเป็นต่อการดูด B12 ที่ terminal ileum</td></tr>
<tr><td>Pepsin</td><td>Chief cell</td><td>vagal (ACh), กรดเฉพาะที่</td><td>pepsinogen → pepsin เมื่อมี H⁺</td></tr>
<tr><td>HCO₃⁻</td><td>Mucosal cells, Brunner glands, ตับอ่อน</td><td>secretin (ตับอ่อน, ท่อน้ำดี)</td><td>ติดอยู่ใน mucus ที่คลุมเยื่อบุ</td></tr></table>
<p class="src">ตารางสรุปจาก First Aid ${S.fa}</p>
<h3>รายละเอียดจากตำรา</h3><ul>
<li>Pepsinogen (~42.5 kDa) ถูก HCl ตัดเป็น pepsin (~35 kDa) · ทำงานดีที่ pH 1.8–3.5 และเสียสภาพเมื่อ pH > 5 ${S.g}</li>
<li>การหลั่ง pepsinogen ขึ้นกับ ACh และกรดในกระเพาะ (ผ่าน enteric reflex) — คนที่หลั่งกรดน้อย pepsinogen ก็น้อยด้วย ${S.g}</li>
<li>IF หลั่งขนานกับกรด · H2 blocker ลด IF ได้แต่ omeprazole ไม่ลด ${S.b}</li>
<li>Surface mucous cell หลั่ง mucus ที่เป็นด่างหนา > 1 mm ${S.g} · HCO₃⁻ ที่ติดใน gel ทำให้ผิวเยื่อ pH ~7 ขณะที่ lumen pH 1–3 ${S.b}</li>
<li>Brunner glands (duodenum) หลั่ง alkaline mucus เมื่อถูกสัมผัส/vagal/secretin และถูก sympathetic กด ${S.g}</li>
<li>Autoimmune ทำลาย parietal cell (pink/eosinophilic) → chronic gastritis + pernicious anemia ${S.fa} ${S.g}</li></ul>`});

SEC.push({id:"parietal",k:"b",t:"Gastric parietal cell & acid regulation",mm:"Parietal cell (interactive)",leg:[],
tools:[["pc",[["basal","Basal"],["meal","Meal"],["h2","H2 blocker"],["ppi","PPI"],["atr","Antimuscarinic"],["vgx","Vagotomy"],["zes","Gastrinoma"],["oct","Octreotide"]]]],draw:pcD,
notes:()=>`<h3>การสร้าง HCl</h3><ul>
<li>Parietal cell หลั่งสารละลาย HCl ~160 mmol/L pH ~0.8 (H⁺ เข้มข้นกว่าเลือด ~3 ล้านเท่า) ${S.g}</li>
<li>ขณะพัก H⁺/K⁺-ATPase อยู่ใน <b>tubulovesicles</b> · เมื่อถูกกระตุ้นจะรวมเข้า canalicular membrane เพิ่มพื้นที่ apical ${S.b}</li>
<li>H⁺/K⁺-ATPase ส่ง H⁺ ออกแลก K⁺ เข้า · K⁺ รั่วออกทาง apical channel แล้ววนกลับ · Cl⁻ ออกทาง Cl⁻ channel ${S.g}</li>
<li>Carbonic anhydrase สร้าง HCO₃⁻ ออก basolateral ผ่าน Cl⁻/HCO₃⁻ exchanger (AE2) ซึ่งนำ Cl⁻ เข้ามาด้วย ${S.b} → gastric venous blood มี pH สูงขึ้นขณะหลั่งกรด (alkaline tide) ${S.g}</li></ul>
<h3>Receptors บน parietal cell</h3><ul>
<li>ACh → <b>M3</b> และ gastrin → <b>CCK2</b>: Gq → PLC → IP₃/Ca²⁺ + PKC · histamine → <b>H2</b>: Gs → cAMP → PKA ${S.b} ${S.h}</li>
<li>Somatostatin และ prostaglandins จับ receptor ที่ใช้ Gi → ⊖ adenylyl cyclase ${S.b}</li>
<li>อัตราการสร้าง HCl แปรตามปริมาณ histamine จาก ECL โดยตรง · ECL ถูกกระตุ้นด้วย gastrin ${S.g}</li></ul>
<h3>Vagus กระตุ้นกรด 4 ทาง</h3><ul>
<li>(1) ACh ตรงที่ parietal cell (2) ACh → ECL → histamine (3) GRP → G cell → gastrin (4) กด D cell → somatostatin ลด ${S.b}</li>
<li>Cephalic ~30% · gastric 50–60% (gastrin เป็นหลัก) · intestinal 5–10% ของกรดต่อมื้อ ${S.b} ${S.g}</li>
<li>กรดกับ pepsin เป็น positive feedback: pH ต่ำ → pepsin → peptone → gastrin → กรด · carbohydrate และไขมันไม่กระตุ้นกรด ${S.b}</li>
<li>ไขมัน กรด และสาร hyperosmolar ใน duodenum กดกรด (secretin, GIP, VIP, somatostatin + enterogastric reflex) ${S.g} ${S.b}</li>
<li>Basal acid มีจังหวะ circadian สูงสุดกลางคืน · ACh และ histamine เป็นตัวหลักของ basal secretion ${S.h}</li></ul>
<h3>คลินิก</h3><ul>
<li>PPI (benzimidazole) จับ cysteine ด้านนอกของ pump แบบ covalent ${S.b}</li>
<li>ZES: gastrin จาก neuroendocrine tumor · secretin stimulation test: gastrin ↑ ≥ 120 pg ภายใน 15 นาที (sens/spec > 90%) ต้องหยุด PPI 1 สัปดาห์ก่อนตรวจ ${S.h}</li>
<li>Vagotomy ลดกรด แต่ผลข้างเคียงคือ gastric emptying ช้าและ diarrhea ${S.b}</li>
<li>Aspirin/alcohol ทำลาย gastric barrier → กรดรั่วกลับเข้าเยื่อบุ ${S.g}</li></ul>
<div class="pearl">กด <b>PPI</b> แล้วดูแถบ gastrin: กรดหาย → D cell หยุดกด → gastrin สูง · กด <b>Gastrinoma</b>: gastrin สูงทั้งที่ pH ต่ำ เพราะเนื้องอกไม่ฟัง somatostatin</div>`});

SEC.push({id:"panc",k:"c",t:"Pancreatic secretions",mm:"HCO₃⁻ vs Cl⁻ by flow (slider)",leg:[],
tools:[["pd",[["sec","Secretin (duct)"],["cck","CCK · ACh (acinar)"],["cf","Cystic fibrosis"]]]],ctrl:()=>SL("pf","Flow",.2,1.6,.05,"mL/min"),wire:()=>WIRE(),draw:pfD,
notes:()=>`<h3>ส่วนประกอบและ flow</h3><ul>
<li>~1 L/วัน · เอนไซม์มาจาก acinar cell, HCO₃⁻ และน้ำมาจาก ductules/ducts ${S.g}</li>
<li>Acinar cell ยังหลั่ง NaCl isotonic คล้ายพลาสมาราว 25% ของ volume ${S.b}</li>
<li>Flow ต่ำ: องค์ประกอบคล้ายพลาสมา · flow สูง (secretin): HCO₃⁻ ↑ Cl⁻ ↓ pH ~8.1 · Na⁺ และ K⁺ แทบไม่เปลี่ยน ${S.b}</li>
<li>FA: isotonic fluid · low flow → high Cl⁻ · high flow → high HCO₃⁻ ${S.fa}</li>
<li>HCO₃⁻ สูงได้ถึง ~145 mEq/L (~5 เท่าของพลาสมา) · เอนไซม์ทำงานดีที่ pH 7–8 ${S.g}</li></ul>
<h3>Duct cell</h3><ul>
<li>Secretin → cAMP → PKA → เปิด <b>CFTR</b> → Cl⁻ ออก lumen แล้วถูกแลกกลับเป็น HCO₃⁻ ผ่าน SLC26 (Cl⁻ recycling) · basolateral NBC + carbonic anhydrase ให้ HCO₃⁻ · ACh ช่วยเสริม ${S.b}</li>
<li>CF: CFTR ส่วนใหญ่ถูกทำลายก่อนถึงผิวเซลล์ → HCO₃⁻ และน้ำลด → โปรตีนข้นอุดท่อ → pancreatic insufficiency + steatorrhea ${S.b}</li></ul>
<h3>การควบคุม</h3><ul>
<li>ACh และ CCK กระตุ้น acinar → เอนไซม์มาก น้ำน้อย · secretin → น้ำ + NaHCO₃ มาก · เมื่อมาพร้อมกันผลรวมมากกว่าผลบวก (potentiation) ${S.g}</li>
<li>Cephalic ~20% ของเอนไซม์หลังมื้อ, gastric 5–10%, intestinal = ส่วนใหญ่ · CCK รับผิดชอบ 70–80% ของเอนไซม์ ${S.g}</li></ul>
<h3>เอนไซม์</h3><ul>
<li>α-amylase หลั่งในรูป active · lipases · proteases (trypsin, chymotrypsin, elastase, carboxypeptidases) หลั่งเป็น zymogen ${S.fa}</li>
<li>Trypsinogen → trypsin ด้วย enterokinase/enteropeptidase บน brush border · trypsin กระตุ้นตัวเองและ zymogen อื่น (positive feedback) ${S.fa} ${S.g}</li>
<li>Trypsin inhibitor ในเซลล์กัน activation ภายในต่อม · ถ้าท่ออุดหรือต่อมบาดเจ็บรุนแรงจะไม่พอ → acute pancreatitis ${S.g}</li></ul>
<div class="pearl">เลื่อน flow: anion รวมคงที่ แต่สัดส่วนสลับ (Cl⁻ ↔ HCO₃⁻) · เลือก <b>Cystic fibrosis</b> เส้นประ HCO₃⁻ แทบไม่ขึ้น</div>`});

SEC.push({id:"carb",k:"c",t:"Carbohydrate digestion & absorption",mm:"SGLT1 · GLUT5 · GLUT2",leg:[],
tools:[["cb",[["n","Normal"],["lac","Lactase ↓"],["pan","Pancreatic insuff."],["muc","Mucosal disease"],["sglt","SGLT1 defect"]]]],draw:cbD,
notes:()=>`<h3>การย่อย</h3><ul>
<li>แหล่งหลัก: starch, sucrose, lactose · cellulose ย่อยไม่ได้ ${S.g}</li>
<li>Ptyalin (salivary α-amylase) ย่อยในปากไม่เกิน ~5% แต่ทำต่อในกระเพาะจน pH < 4 รวมได้ 30–40% ${S.g}</li>
<li>Pancreatic amylase แรงกว่าหลายเท่า: ภายใน 15–30 นาทีหลังถึง duodenum starch เหลือแต่ maltose และ glucose polymer สั้นๆ ${S.g}</li>
<li>α-amylase ไม่ตัด α-1,4 ปลายสาย และ α-1,6 → ได้ maltose, maltotriose, α-limit dextrins แต่ไม่ได้ glucose ${S.b}</li>
<li>Brush border: lactase (lactose → glucose + galactose), glucoamylase (maltase), sucrase–isomaltase (isomaltase = α-dextrinase ตัด α-1,6) ${S.b}</li>
<li>Glucose เป็น > 80% ของ monosaccharide ที่ได้ ${S.g}</li></ul>
<h3>การดูดซึม</h3><ul>
<li>ดูดซึมได้เฉพาะ monosaccharide · glucose และ galactose เข้าทาง <b>SGLT1</b> (Na⁺-dependent) · fructose ทาง <b>GLUT5</b> (facilitated) · ทั้งหมดออกเลือดทาง <b>GLUT2</b> ${S.fa} ${S.b}</li>
<li>ไม่มี Na⁺ transport → แทบดูด glucose ไม่ได้ · แรงขับมาจาก Na⁺/K⁺-ATPase ที่ basolateral (secondary active) ${S.g}</li>
<li>Fructose ไม่ควบ Na⁺ จึงดูดซึมช้ากว่า glucose ราวครึ่งหนึ่ง ${S.g}</li></ul>
<h3>คลินิก</h3><ul>
<li><b>D-xylose</b> ดูดซึมแบบ passive ที่ลำไส้เล็กส่วนต้นโดยไม่ต้องย่อย → ↓ ใน mucosal damage แต่ปกติใน pancreatic insufficiency ${S.fa} ${S.h}</li>
<li>Lactase ลดลงหลังหย่านมในหลายชาติพันธุ์ (genetic) ขณะที่ enzyme อื่นไม่ลด ${S.b}</li>
<li>Lactose intolerance: villi ปกติ (ยกเว้นทุติยภูมิจากปลาย villi เสีย เช่น viral enteritis) · osmotic diarrhea, stool pH ↓ · breath H₂ เพิ่ม > 20 ppm ${S.fa}</li>
<li>Glucose–galactose malabsorption: SGLT1 ผิดปกติ → diarrhea เมื่อกิน glucose/galactose ${S.b}</li></ul>
<div class="pearl">เทียบ <b>Pancreatic insufficiency</b> กับ <b>Mucosal disease</b>: D-xylose แยกสองกลุ่มนี้ออกจากกัน</div>`});

SEC.push({id:"prot",k:"c",t:"Protein digestion & absorption",mm:"Zymogen cascade · PepT1",leg:[],
tools:[["pr",[["n","Normal"],["ek","Enterokinase ↓"],["pi","Pancreatic insuff."],["sp","Premature activation"]]]],draw:prD,
notes:()=>`<h3>กระเพาะ</h3><ul>
<li>Pepsin ทำงานที่ pH 2–3 · ย่อยได้เพียง 10–20% ของโปรตีน แต่ย่อย collagen ได้ดี จึงช่วยให้เอนไซม์อื่นแทรกเข้าเนื้อสัตว์ ${S.g}</li></ul>
<h3>ลำไส้เล็ก</h3><ul>
<li>โปรตีนส่วนใหญ่ย่อยที่ duodenum/jejunum ด้วย trypsin, chymotrypsin, carboxypolypeptidase และ elastase ${S.g}</li>
<li>Enterokinase (enteropeptidase) ของ brush border ตัด hexapeptide จาก trypsinogen → trypsin → trypsin กระตุ้น proenzyme ตัวอื่นและตัวเอง ${S.b}</li>
<li>Brush border มี aminopolypeptidase และ dipeptidases ตัดเป็น di/tripeptide + กรดอะมิโน ${S.g}</li>
<li>Di/tripeptide เข้าทาง <b>PepT1</b> (H⁺/oligopeptide cotransporter) แล้วถูก cytosolic peptidases ย่อยต่อ ${S.b}</li>
<li>> 99% ที่เข้าเลือดเป็นกรดอะมิโนเดี่ยว · กรดอะมิโนส่วนใหญ่ใช้ Na⁺ co-transport บางชนิดเป็น facilitated diffusion · transporter มี ≥ 5 ชนิด ${S.g}</li>
<li>Hartnup disease และ cystinuria (AA transporter บกพร่อง) ไม่ทำให้ขาดโปรตีนมาก เพราะยังดูด peptide ผ่าน PepT1 ได้ ${S.b}</li>
<li>โปรตีนทั้งโมเลกุลผ่านได้น้อยมาก แต่ก็อาจกระตุ้นภูมิแพ้ได้ ${S.g}</li></ul>
<h3>ป้องกันตับอ่อนย่อยตัวเอง</h3><ul>
<li>Zymogen เก็บใน granule ที่โปรตีนผ่านไม่ได้ · trypsin inhibitor (SPINK1) บรรจุมาด้วยกัน ${S.b}</li>
<li>Mutation ของ SPINK1, CFTR เพิ่มความเสี่ยง pancreatitis · cationic trypsinogen mutation ทำให้เกิด hereditary pancreatitis ได้เอง ${S.b}</li></ul>`});

SEC.push({id:"fat",k:"c",t:"Fat digestion & absorption",mm:"Micelles · chylomicrons",leg:[],
tools:[["ft",[["n","Normal"],["pi","Lipase ↓"],["bs","Bile salts ↓"],["abl","Abetalipoproteinemia"]]]],draw:ftD,
notes:()=>`<h3>Emulsification และ lipolysis</h3><ul>
<li>Lingual lipase ย่อยในกระเพาะ < 10% · การย่อยไขมันเกือบทั้งหมดเกิดในลำไส้เล็ก ${S.g}</li>
<li>Bile salts และ <b>lecithin</b> ลด interfacial tension → droplet < 1 μm พื้นที่ผิว ↑ ~1000 เท่า ${S.g}</li>
<li>Pancreatic lipase ต้องมี <b>colipase</b> และหลั่งมากกว่าที่จำเป็น ~1000 เท่า ${S.b} → TG → free fatty acid + 2-monoglyceride ${S.g}</li>
<li>Cholesterol ester hydrolase และ phospholipase A₂ ย่อย cholesterol ester และ phospholipid ${S.g}</li></ul>
<h3>Micelle</h3><ul>
<li>Micelle 3–6 nm (bile salt 20–40 โมเลกุล) ดึง MAG/FFA ออกจากหน้า droplet (กันปฏิกิริยาย้อนกลับ) และพาข้าม unstirred layer · bile salt กลับมาใช้ซ้ำ ${S.g}</li>
<li>มี micelle ดูดซึมไขมัน ~97% · ไม่มี bile เหลือเพียง 40–50% · cholesterol แทบไม่ถูกดูดซึมถ้าไม่มี micelle ${S.g}</li>
<li>Bile salt ถูกดูดกลับด้วย ASBT ที่ distal ileum ${S.b}</li></ul>
<h3>ในเซลล์ → lymph</h3><ul>
<li>FFA จับ FABP2 → SER สร้าง TG ใหม่ (MAG pathway) + apolipoproteins → chylomicron (~250 nm, 75–1200 nm) → lymph ${S.b}</li>
<li>Chylomicron ผ่าน thoracic duct เข้าระบบไหลเวียนโดยไม่ผ่านตับ · short/medium-chain FA เข้า portal blood โดยตรง ${S.g}</li>
<li>Abetalipoproteinemia: สร้าง chylomicron ไม่ได้ → fat malabsorption ในเด็ก + acanthocyte, ataxia, retinitis pigmentosa ${S.h} · เกิดจาก MTP (microsomal TG transfer protein) บกพร่อง ${S.fa}</li>
<li>Sprue: ไขมันในอุจจาระอยู่ในรูปเกลือของ fatty acid = ปัญหาการดูดซึม ไม่ใช่การย่อย ${S.g}</li></ul>`});

SEC.push({id:"absorb",k:"d",t:"Vitamin & mineral absorption sites",mm:"Iron · folate · B12 sites",leg:[],
tools:[["vm",[["n","Normal"],["byp","Gastric bypass"],["cel","Celiac"],["ilr","Ileal resection"]]],["fe",[["n","Hepcidin ปกติ"],["low","Iron deficiency"],["inf","Inflammation"]]]],draw:vmD,
notes:()=>`<h3>ตำแหน่งดูดซึม</h3><ul>
<li>Iron (Fe²⁺) ที่ duodenum · folate ที่ duodenum–jejunum · B12 ที่ terminal ileum ร่วมกับ bile salts และต้องมี IF — “Iron fist, Bro” ${S.fa}</li>
<li>ขาด vitamin/mineral ได้ใน small bowel disease, bowel resection, short bowel syndrome หรือ bariatric surgery (เช่นตัด terminal ileum ต้องเสริม B12) ${S.fa}</li>
<li>Dumping syndrome: อาหาร hyperosmolar (หวาน) ผ่านจากกระเพาะเร็วเกินไป หลังผ่าตัดกระเพาะ/หลอดอาหาร ${S.fa} · พบใน postvagotomy dumping ${S.h}</li></ul>
<h3>Iron</h3><ul>
<li>ดูดซึมได้ 10–20% ของที่กิน · heme ดูดซึมดีกว่า nonheme · ร่างกายไม่มีทางขับ iron ที่ควบคุมได้ จึงคุมที่การดูดซึม ${S.b}</li>
<li>Nonheme: <b>Dcytb</b> รีดิวซ์ Fe³⁺ → Fe²⁺ → <b>DMT1</b> (cotransport กับ H⁺) เฉพาะ duodenum · heme เข้าเซลล์แล้วถูก heme oxygenase ปล่อย Fe²⁺ ${S.b}</li>
<li>ออกทาง <b>ferroportin</b> + hephaestin → transferrin ${S.b}</li>
<li><b>Hepcidin</b> (25 aa จากตับ) ทำให้ ferroportin ถูกย่อยสลาย → ลดการดูดซึม · IL-6 ↑ hepcidin = anemia of inflammation · iron deficiency → DMT1/ferroportin ↑ ${S.b} ${S.h}</li>
<li>Hereditary hemochromatosis (HFE C282Y) อาจเกิดจาก hepcidin ต่ำเกินไป ${S.b}</li></ul>
<h3>Folate · Ca²⁺ · น้ำ</h3><ul>
<li>Folate ในอาหารเป็น polyglutamate → brush-border conjugase ตัดเป็น monoglutamate (ขั้น rate-limiting) → ดูดซึมที่ลำไส้เล็กส่วนต้นเท่านั้น ดีที่สุดที่ pH ~5 ${S.b}</li>
<li>Ca²⁺: active transcellular (TRPV6 → calbindin → Ca pump/NCX) เฉพาะ duodenum ภายใต้ calcitriol · passive paracellular ตลอดลำไส้เล็ก (ปริมาณมากกว่า) ${S.b}</li>
<li>Folds + villi + microvilli เพิ่มพื้นที่ ~1000 เท่า (~250 m²) ${S.g}</li>
<li>น้ำเข้าลำไส้ 8–9 L/วัน (กิน ~1.5 + สารคัดหลั่ง ~7) · ผ่าน ileocecal valve ~1.5 L · อุจจาระ < 100 mL ${S.g}</li>
<li>แบคทีเรียใน colon สร้าง vitamin K (สำคัญต่อการแข็งตัวของเลือด), B12 และอื่นๆ ${S.g} · colon ดูดซึม SCFA จากการหมัก ${S.b}</li></ul>`});

SEC.push({id:"b12",k:"d",t:"Vitamin B12 & intrinsic factor pathway",mm:"B12 → R → IF → ileum",leg:[],
tools:[["bt",[["n","Normal"],["pa","Pernicious anemia"],["ach","Achlorhydria"],["pi","Pancreatic insuff."],["il","Ileal resection"],["veg","Vegan diet"],["fol","vs Folate ↓"]]]],draw:btD,
notes:()=>`<h3>ทำไม B12 สำคัญ</h3><ul>
<li>เป็น coenzyme ของ homocysteine → methionine (รับ methyl จาก N⁵-methyl-THF) และ methylmalonyl-CoA mutase ${S.b}</li>
<li>ขาด B12 → folate ถูกขังเป็น N⁵-methyl-THF → DNA synthesis ลด → megaloblastic anemia เหมือนขาด folate แต่มีอาการทางประสาทเพิ่ม ${S.b}</li>
<li>มีเฉพาะในอาหารจากสัตว์ · ร่างกายเก็บ ~5 mg ขณะที่ต้องการเพียง ~2 μg/วัน ${S.b}</li></ul>
<h3>เส้นทาง</h3><ul>
<li>กระเพาะ: pepsin + pH ต่ำ ปล่อย B12 จากโปรตีน → จับ <b>haptocorrin</b> (R binder จาก saliva/gastric glands) · IF ไม่จับ B12 ในกรด ${S.b}</li>
<li>Duodenum: pancreatic protease ย่อย haptocorrin ในสภาวะด่าง → B12 (จากอาหารและจาก bile) จับ <b>IF</b> ซึ่งทนต่อเอนไซม์ ${S.b}</li>
<li>Ileum: IF–B12 จับ receptor (ต้องมี Ca²⁺, ไม่ใช้พลังงาน) → endocytosis → B12 จับ <b>transcobalamin II</b> ออก portal → ตับเก็บและหลั่งลง bile (enterohepatic) ${S.b}</li>
<li>IF หลั่งจาก parietal cell พร้อมกรด · ทำลาย parietal cell → achlorhydria + pernicious anemia ${S.g}</li></ul>
<h3>คลินิก</h3><ul>
<li>สาเหตุ: vegan, pernicious anemia, ตัด/โรคที่ terminal ileum, pancreatic insufficiency, bariatric surgery ${S.fa} ${S.b}</li>
<li>ตรวจ pernicious anemia: gastrin สูง + anti-IF / anti-parietal cell antibodies · MMA สูงช่วยยืนยันภาวะขาด B12 ${S.h}</li>
<li>Folate deficiency: homocysteine ↑ แต่ MMA ปกติ · ไม่มี neuro ${S.fa}</li></ul>
<div class="pearl">กดแต่ละสาเหตุดูว่า B12 “หลุด” ที่สถานีไหน แล้วกด <b>vs Folate ↓</b> เทียบ MMA</div>`});

SEC.push({id:"peyer",k:"d",t:"Peyer patches & secretory IgA",mm:"M cell · IgA",leg:[],
tools:[["pp",[["all","ภาพรวม"],["s1","① M cell"],["s2","② Class switch"],["s3","③ Transcytosis"]]]],draw:ppD,
notes:()=>`<ul>
<li>GALT ประกอบด้วย lymphoid aggregate (เช่น Peyer patches) และเซลล์ภูมิคุ้มกันกระจายใน epithelium และ lamina propria ${S.b}</li>
<li><b>Peyer patches</b> = lymphoid tissue ไม่มีแคปซูลใน lamina propria และ submucosa ของ ileum ${S.fa}</li>
<li><b>M (microfold) cells</b> แทน enterocyte บนผิว dome · microvilli น้อย · ส่งโปรตีนทั้งโมเลกุลไปให้ lymphocyte ข้างใต้ (ราวครึ่งหนึ่งออกด้าน basolateral แบบไม่ถูกย่อย) ${S.b}</li>
<li>B cell ใน germinal center ของ Peyer patch กลายเป็น IgA-secreting plasma cell แล้วไปอยู่ใน lamina propria ${S.fa}</li>
<li>Class switch ไป IgA อาศัย cytokine เช่น TGF-β และ plasma cell หลั่ง dimeric IgA ที่เชื่อมด้วย J chain ${S.x}</li>
<li>IgA จับ <b>polymeric Ig receptor</b> ที่ basolateral → endocytosis → ปล่อยด้าน apical พร้อม <b>secretory component</b> ${S.b} ${S.fa}</li>
<li>“IgA, the Intra-gut Antibody” ${S.fa}</li></ul>`});

SEC.push({id:"bile",k:"e",t:"Bile & enterohepatic circulation",mm:"Bile acids loop (interactive)",leg:[],
tools:[["bl",[["n","Normal"],["sh","Ileum < 100 cm"],["lg","Ileum > 100 cm"],["obs","Biliary obstruction"]]]],draw:blD,
notes:()=>`<h3>องค์ประกอบและการสร้าง</h3><ul>
<li>Bile salts (bile acid ที่ conjugate กับ glycine หรือ taurine → ละลายน้ำ), phospholipid, cholesterol, bilirubin, น้ำ, ion ${S.fa}</li>
<li>ตับหลั่ง 600–1000 mL/วัน · bile salts เป็น ~ครึ่งหนึ่งของ solute ${S.g}</li>
<li>สร้าง 2 ขั้น: hepatocyte หลั่ง bile acid + cholesterol ลง canaliculi แล้ว duct epithelium เติม Na⁺/HCO₃⁻ (กระตุ้นโดย secretin) เพิ่มได้ถึง 100% ${S.g}</li>
<li><b>Cholesterol 7α-hydroxylase</b> เป็นขั้น rate-limiting ${S.fa} ${S.b} · ได้ cholic และ chenodeoxycholic acid พอๆ กัน แล้ว conjugate กับ glycine มากกว่า taurine ${S.g}</li>
<li>แบคทีเรียใน ileum/colon deconjugate และ 7α-dehydroxylate → secondary bile acids (deoxycholic, lithocholic) ${S.b}</li></ul>
<h3>หน้าที่</h3><ul>
<li>ย่อย/ดูดซึมไขมันและ fat-soluble vitamins · ขับ bilirubin และ cholesterol (ทางหลักของการกำจัด cholesterol) · antimicrobial ผ่านการทำลาย membrane ${S.fa}</li>
<li>ไม่มี bile salts ไขมันอาจหายไปกับอุจจาระได้ถึง 40% ${S.g}</li></ul>
<h3>Gallbladder</h3><ul>
<li>จุ 30–60 mL แต่เก็บ bile ได้ถึง ~12 ชั่วโมง (~450 mL) เพราะดูด Na⁺ น้ำ และ electrolyte ออก → เข้มข้น ~5 เท่า (สูงสุด 20 เท่า) ${S.g}</li>
<li>CCK (กระตุ้นโดยไขมัน) บีบถุงน้ำดี + คลาย sphincter of Oddi · ACh จาก vagus ช่วยเล็กน้อย · มื้อไขมันสูงว่างใน ~1 ชั่วโมง ${S.g}</li>
<li>ดูดน้ำ/bile salt มากไป หรือ cholesterol ใน bile มาก → cholesterol gallstones ${S.g}</li></ul>
<h3>Enterohepatic circulation</h3><ul>
<li>ดูดกลับ ~94%: ราวครึ่งหนึ่งแบบ diffusion ที่ลำไส้ส่วนต้น ที่เหลือ active ที่ distal ileum · วนเฉลี่ย ~17 รอบก่อนออกทางอุจจาระ · pool ~2.5 g ${S.g}</li>
<li>Boron: pool ~3 g วน 4–12 รอบ/วัน · ASBT ที่ terminal ileum, NTCP ที่ hepatocyte · ตัด ileum → ตับสร้างได้ถึง 4–6 g/วัน ${S.b}</li>
<li>ปริมาณ bile salts ในวงจรเป็นตัวกำหนดอัตราหลั่ง bile · bile fistula → ตับเพิ่มการสร้าง 6–10 เท่า ${S.g}</li>
<li>Ileal disease/resection < 100 cm → bile acid ล้นลง colon → secretory diarrhea · > 100 cm → เสียเกินที่ตับสร้างทัน → fat malabsorption ${S.h}</li>
<li>Ca²⁺ ที่ปกติจับ oxalate ไปจับไขมันแทน → oxalate ถูกดูดซึม → Ca-oxalate kidney stones ${S.fa} · Crohn ileitis/resection → gallstones 10–35% ${S.h}</li></ul>`});

SEC.push({id:"bili",k:"e",t:"Bilirubin metabolism & jaundice",mm:"Bilirubin pathway (interactive)",leg:[],
tools:[["jt",[["n","Normal"],["hem","Hemolytic"],["gil","Gilbert"],["cn1","Crigler–Najjar I"],["dj","Dubin–Johnson"],["rot","Rotor"],["hep","Hepatocellular"],["obs","Obstructive"]]]],draw:jtD,
notes:()=>`<h3>เส้นทาง</h3><ul>
<li>RBC อายุ ~120 วัน → macrophage แยก heme → (heme oxygenase) biliverdin (เขียว) → bilirubin (เหลือง) = unconjugated ${S.g} ${S.fa}</li>
<li>UCB จับ albumin แน่น · ปกติ ~0.5 mg/dL ส่วนใหญ่เป็น unconjugated · เริ่มเห็นเหลืองเมื่อ > ~1.5 mg/dL ${S.g} ${S.b}</li>
<li>Hepatocyte ใช้ <b>UGT1A1</b> สร้าง mono/diglucuronide (= direct bilirubin, ละลายน้ำ) แล้วขับลง canaliculus ผ่าน <b>MRP2</b> ${S.b}</li>
<li>Guyton: conjugate กับ glucuronic acid ~80%, sulfate ~10% · ขับลง bile แบบ active ${S.g}</li>
<li>ในลำไส้ ~ครึ่งหนึ่งถูกแบคทีเรียเปลี่ยนเป็น urobilinogen · บางส่วนดูดกลับ ส่วนใหญ่ถูกตับขับซ้ำ ~5% ออกทางไตเป็น urobilin ${S.g}</li>
<li>FA: urobilinogen ดูดกลับ ~20% (90% กลับตับ, 10% ไต) · ~80% ออกทางอุจจาระเป็น stercobilin (สีน้ำตาล) ${S.fa}</li>
<li>ไตขับ conjugated bilirubin ได้ แต่ UCB ที่จับ albumin ไม่ได้ → bilirubin ในปัสสาวะ = conjugated ${S.g}</li></ul>
<h3>ชนิดของ jaundice</h3>
<table><tr><th>ชนิด</th><th>กลไก</th><th>ลักษณะเด่น</th></tr>
<tr><td>Hemolytic</td><td>สร้างเกิน</td><td>UCB ↑ · urine urobilinogen ↑ ${S.g}</td></tr>
<tr><td>Gilbert</td><td>UGT1A1 ~10–33% (promoter TA repeat)</td><td>พบได้ถึง ~8% · เหลืองเวลาอดอาหาร/เครียด ${S.h}</td></tr>
<tr><td>Crigler–Najjar I</td><td>ไม่มี UGT1A1</td><td>UCB 20–45 mg/dL · kernicterus · phenobarbital ไม่ช่วย ${S.h}</td></tr>
<tr><td>Crigler–Najjar II</td><td>UGT1A1 ≤ 10%</td><td>phenobarbital ลด bilirubin > 25% ${S.h}</td></tr>
<tr><td>Dubin–Johnson</td><td>MRP2 บกพร่อง</td><td>CB ↑ · ตับสีดำ · OCP/ตั้งครรภ์ทำให้ชัดขึ้น ${S.h} ${S.b}</td></tr>
<tr><td>Rotor</td><td>ขาด OATP1B1/1B3</td><td>CB ↑ ไม่มี pigment · benign ${S.h}</td></tr>
<tr><td>Obstructive</td><td>bile ไม่ถึงลำไส้</td><td>CB ↑ · bilirubinuria · urobilinogen 0 · clay stool ${S.g}</td></tr></table>
<ul><li>Physiologic neonatal jaundice: RBC turnover สูง + conjugation ยังไม่สมบูรณ์ · UCB สูงมาก → kernicterus ${S.b}</li>
<li>Hepatitis หรือนิ่วในท่อน้ำดีมักทำให้ทั้ง UCB และ CB สูง · สัดส่วนแยก intrahepatic กับ extrahepatic ไม่ได้ ${S.h}</li></ul>
<div class="pearl">กดแต่ละชนิดดูจุด ✕ บนเส้นทาง: <b>ก่อน</b> UGT1A1 → unconjugated · <b>หลัง</b> conjugation (MRP2, ท่อน้ำดี) → conjugated + ปัสสาวะสีเข้ม</div>`});

SEC.push({id:"motil",k:"f",t:"GI motility: swallowing, gastric emptying & MMC",mm:"Swallow · emptying · MMC",leg:[],
tools:[["mo",[["sw","Swallow"],["ach","Achalasia"],["ge","Gastric emptying"],["mmc","MMC"]]]],draw:moD,
notes:()=>`<h3>ไฟฟ้าของ smooth muscle</h3><ul>
<li>Slow waves (ไม่ใช่ action potential) จาก interstitial cells of Cajal: ~3/นาทีที่กระเพาะ, ~12 ที่ duodenum, 8–9 ที่ ileum ${S.g}</li>
<li>Spike เกิดเมื่อ membrane potential > −40 mV · Ca²⁺ เข้าระหว่าง spike จึงหดตัว · stretch, ACh ทำ depolarize · NE ทำ hyperpolarize ${S.g}</li></ul>
<h3>การกลืน</h3><ul>
<li>3 ระยะ: voluntary → pharyngeal (reflex < 2 วินาที: soft palate ปิด nasopharynx, vocal cords ชิด, epiglottis ปิด, UES คลาย) → esophageal ${S.g}</li>
<li>Swallowing center ใน medulla/lower pons สั่งผ่าน CN V, IX, X, XII · ยับยั้งการหายใจชั่วคราว ${S.g}</li>
<li>Primary peristalsis ผ่านหลอดอาหาร 8–10 วินาที · secondary peristalsis เกิดจากการยืดของหลอดอาหาร ${S.g}</li>
<li>1/3 บนเป็น striated muscle · 2/3 ล่างเป็น smooth muscle ภายใต้ vagus + myenteric plexus ${S.g}</li>
<li>LES บีบค้าง ~30 mmHg และคลายล่วงหน้าเมื่อคลื่นมาถึง · การคลายอาศัย VIP และ NO ${S.g} ${S.b}</li>
<li>Achalasia: LES คลายไม่สมบูรณ์ + peristalsis ส่วนตัวหลอดอาหารเสีย ${S.h} · มีความเสียหายของ myenteric plexus ${S.g} · เสีย inhibitory neurons (NO, VIP) ${S.fa}</li></ul>
<h3>Gastric filling & emptying</h3><ul>
<li>Receptive relaxation (vagovagal) ของ fundus → รับอาหารได้ 0.8–1.5 L โดยความดันไม่ขึ้น ${S.g} · เรียกรวมว่า gastric accommodation ${S.b}</li>
<li>ของเหลวออกด้วย smooth muscle ของกระเพาะส่วนต้น · ของแข็งถูกคุมโดย antrum: propulsion → grinding → retropulsion จนอนุภาค < 2 mm ${S.b}</li>
<li>“Pyloric pump”: คลื่นแรงจาก antrum ~20% ของเวลา (50–70 cmH₂O) ${S.g}</li>
<li>Duodenum คุมหลัก: distention, irritation, pH < 3.5–4, osmolality, protein breakdown → enterogastric reflex · ไขมัน → CCK (แรงสุด), secretin, GIP ${S.g}</li></ul>
<h3>ลำไส้เล็กและ MMC</h3><ul>
<li>Fed state: segmentation (mixing) 2–3 ครั้ง/นาที + peristalsis สั้นๆ ${S.g}</li>
<li>MMC ช่วงอดอาหาร: phase 1 เงียบ → 2 ไม่สม่ำเสมอ → 3 บีบสูงสุดไม่กี่นาที → 4 ลดลง · กวาดอนุภาค > 2 mm, แบคทีเรีย, เซลล์หลุดลอก · ~25% เริ่มที่ duodenum ${S.b}</li>
<li>MMC ทุก ~90 นาทีขณะอดอาหาร · motilin ⊕ ${S.g} ${S.b}</li>
<li>Gastrocolic/duodenocolic reflex กระตุ้น mass movement หลังมื้อ ${S.g}</li></ul>`});

SEC.push({id:"ens",k:"f",t:"Enteric nervous system",mm:"Auerbach · Meissner · reflex",leg:[],
tools:[["en",[["n","Peristaltic reflex"],["para","Parasympathetic ↑"],["sym","Sympathetic ↑"],["hir","Hirschsprung"]]]],draw:enD,
notes:()=>`<h3>โครงสร้าง</h3><ul>
<li>ENS มี neuron ~100 ล้านตัว เท่ากับไขสันหลัง · อยู่ในผนังทางเดินอาหารทั้งหมด ทำงานได้เองแม้ตัดประสาทภายนอก ${S.g} ${S.b}</li>
<li><b>Myenteric (Auerbach)</b> ระหว่าง longitudinal กับ circular muscle → คุม motility · <b>Submucosal (Meissner)</b> → คุม secretion, absorption, local blood flow ${S.g}</li>
<li>กระตุ้น myenteric: tone ↑, แรงบีบ ↑, ความเร็วคลื่น ↑ · บาง neuron เป็น inhibitory (VIP) ช่วยคลาย pylorus และ ileocecal sphincter ${S.g}</li></ul>
<h3>สารสื่อประสาท</h3><ul>
<li>ACh มักกระตุ้น · NE มักยับยั้ง · มีอีกหลายชนิด เช่น serotonin, substance P, VIP, somatostatin, enkephalins ${S.g}</li>
<li>Excitatory: ACh + substance P · inhibitory: VIP + NO ${S.h} ${S.b}</li></ul>
<h3>ประสาทภายนอก</h3><ul>
<li>Parasympathetic: vagus (หลอดอาหารถึงครึ่งต้นของ colon) และ pelvic nerve S2–S4 (ส่วนปลาย) · postganglionic neuron อยู่ใน plexus → ↑ activity ของ ENS ${S.g}</li>
<li>Sympathetic: T5–L2 → celiac/mesenteric ganglia · NE กด ENS เป็นหลัก + vasoconstriction ${S.g}</li>
<li>~80% ของใยประสาทใน vagus เป็น afferent ${S.g}</li></ul>
<h3>Reflexes</h3><ul>
<li>3 ระดับ: ภายในผนัง (peristalsis, secretion) · ผ่าน prevertebral ganglia (gastrocolic, enterogastric, colonoileal) · ผ่านไขสันหลัง/ก้านสมอง (vagovagal, pain, defecation) ${S.g}</li>
<li>Peristaltic reflex: ยืด → หดด้านบน คลายด้านล่าง (receptive relaxation) → เคลื่อนไปทางทวารหนัก (“law of the gut”) · ต้องมี myenteric plexus · atropine กดได้มาก ${S.g}</li>
<li>Hirschsprung: ขาด ganglion cell ใน myenteric plexus ของส่วน sigmoid → ส่วนนั้นหดค้าง → megacolon ด้านบน ${S.g} · เกิดจาก neural crest หยุด migrate (เช่น RET mutation) ${S.b}</li></ul>`});

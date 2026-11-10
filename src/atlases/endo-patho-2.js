/* ================= Endocrine Pathology II · Parathyroid & Diabetes mellitus =================
   First Aid Step 1 2025 (Endocrine pathology, pp. 348–352) order
   Robbins & Cotran 10e Ch 24 (parathyroid, endocrine pancreas) · Harrison 22e (hypercalcemia, FHH, DKA/HHS, hypoglycemia)
   FA Step 2 CK (hyperparathyroidism, hypercalcemia care) · drawings are original schematics. */
//@include _cvs-patho-helpers.js
//@include _endo-patho-helpers.js
Object.assign(GN,{a:"Parathyroid & calcium",b:"Diabetes mellitus"});
Object.assign(ST,{pm:"p1",hpp:"php",hc:"vitd",hpt:"p1",sp:11.2,hw:"p1",fpg:118,a1c:6.1,ogtt:170,ins:"abs",t12:"t1",dk:"dka",cm:"micro",glu:62,bb:false,dn:"nod"});

/* ---------- 1. diagnosing parathyroid disease (PTH vs Ca map) ---------- */
const PM={p1:{n:"1° hyperparathyroidism",z:[10.6,13.6,40,180],c:"#C2577A",L:[["Ca²⁺","↑"],["PO₄³⁻","↓"],["PTH","↑"],["ALP","↑"],["Urine Ca²⁺","↑"]],t:"PTH สูงหรือปกติค่อนสูง ทั้งที่ Ca สูง = ไม่เหมาะสม · adenoma เดี่ยว 85–95%"},
 p2:{n:"2° hyperparathyroidism",z:[6,9.6,90,300],c:"#7A5BC7",L:[["Ca²⁺","↓"],["PO₄³⁻","↑"],["PTH","↑"],["ALP","↑"],["1,25-D","↓"]],t:"CKD: PO₄ คั่ง + 1,25-D ↓ → Ca ต่ำ → ต่อมโตทั้ง 4 (vitamin D ขาดก็ทำได้ แต่ PO₄ ↓)"},
 p3:{n:"3° hyperparathyroidism",z:[10.6,12.8,320,390],c:"#D9692F",L:[["Ca²⁺","↑"],["PO₄³⁻","↑"],["PTH","↑↑"],["ALP","↑"],["Setting","ESRD"]],t:"2° ที่เป็นมานานจนต่อมทำงานเอง (autonomous) · Ca กลับสูงแม้แก้ต้นเหตุแล้ว"},
 hypo:{n:"Hypoparathyroidism",z:[5.2,8.2,2.2,9],c:"#2F8A78",L:[["Ca²⁺","↓"],["PO₄³⁻","↑"],["PTH","↓"],["ALP","N"],["1,25-D","↓"]],t:"ผ่าตัดคอ (บ่อยสุด) · autoimmune · DiGeorge"},
 indep:{n:"PTH-independent hypercalcemia",z:[11.6,16.5,2.2,9],c:"#C7892B",L:[["Ca²⁺","↑"],["PO₄³⁻","N"],["PTH","↓"],["PTHrP","↑ (HHM)"],["1,25-D","↑ (granuloma)"]],t:"มะเร็ง (PTHrP, bone lysis) · vitamin D เกิน · granuloma · Ca intake มาก · PTH ถูกกด"},
 fhh:{n:"Familial hypocalciuric hypercalcemia",z:[10.5,11.6,14,60],c:"#0B83B5",L:[["Ca²⁺","↑"],["PO₄³⁻","N"],["PTH","N/↑"],["Urine Ca²⁺","↓↓"],["Ca/Cr cl.","< 0.01"]],t:"CaSR ไวน้อย → ต้องใช้ Ca สูงกว่าปกติจึงกด PTH ได้ · ไม่ต้องผ่าตัด"}};
function pthMapD(){const k=ST.pm,d=PM[k];const A=axes(58,14,330,260,[4,18],[2,400],[4,6,8,10,12,14,16,18],[2,10,50,250],"Ca²⁺ (mg/dL)","PTH (pg/mL, log)",{log:true});let b=A.g;
 const zone=(z,c,lab,on)=>{const [x1,x2,y1,y2]=z;const X1=A.X(x1),X2=A.X(x2),Y1=A.Y(y2),Y2=A.Y(y1);return `<rect x="${X1}" y="${Y1}" width="${X2-X1}" height="${Y2-Y1}" rx="12" style="fill:color-mix(in srgb,${c} ${on?42:14}%,transparent);stroke:${on?c:"none"};stroke-width:2"/>`+(on?T((X1+X2)/2,(Y1+Y2)/2+4,lab,{c:"bh"}):"")};
 b+=zone([8.8,10.4,12,48],CV.good,"Normal",true);
 Object.entries(PM).forEach(([kk,v])=>{if(kk!==k)b+=zone(v.z,v.c,"",false)});b+=zone(d.z,d.c,d.n.split(" ")[0]==="Familial"?"FHH":d.n.replace("hyperparathyroidism","HPT").replace("PTH-independent hypercalcemia","PTH-indep."),true);
 b+=`<rect x="408" y="8" width="226" height="300" rx="14" style="fill:color-mix(in srgb,${d.c} 9%,var(--sb-surface));stroke:color-mix(in srgb,${d.c} 45%,transparent)"/>`+wrapT(422,32,d.n,30,"bh",16);
 d.L.forEach(([n,v],i)=>{const y=86+i*32;b+=T(422,y+4,n,{a:"start",c:"s"})+(/[↑↓]|^N$/.test(v)&&v.length<4?lv(604,y,v):T(618,y+4,v,{a:"end",c:"bh"}))});
 b+=wrapT(422,250,d.t,34,"s m",14);
 return ESVG(b,"0 0 640 316")}

/* ---------- 2. hypoparathyroidism, PHP, PPHP ---------- */
function hand(x,y,short){let b="";const L=[52,62,66,short?44:60,short?36:48];
 b+=`<path d="M${x},${y+70} C${x-4},${y+40} ${x+4},${y+14} ${x+20},${y+10} L${x+86},${y+10} C${x+100},${y+20} ${x+100},${y+56} ${x+92},${y+74}Z" style="fill:${EN.skin};stroke:${EN.skinD};stroke-width:1.3"/>`;
 L.forEach((l,i)=>{const fx=x+22+i*16;b+=`<rect x="${fx-6}" y="${y+12-l}" width="13" height="${l+6}" rx="6.5" style="fill:${EN.skin};stroke:${EN.skinD};stroke-width:1.2"/>`});
 b+=`<path d="M${x+2},${y+48} C${x-18},${y+30} ${x-22},${y+10} ${x-14},${y-4}" style="fill:none;stroke:${EN.skinD};stroke-width:13;stroke-linecap:round"/><path d="M${x+2},${y+48} C${x-18},${y+30} ${x-22},${y+10} ${x-14},${y-4}" style="fill:none;stroke:${EN.skin};stroke-width:10.5;stroke-linecap:round"/>`;
 if(short)b+=`<path d="M${x+64},${y-26} h28" style="stroke:${EN.up};stroke-width:1.6;stroke-dasharray:3 3"/>`+T(x+100,y-22,"นิ้ว 4–5 สั้น",{a:"start",c:"s"});return b}
const HPP={hypo:{n:"Hypoparathyroidism",L:[["PTH","↓"],["Ca²⁺","↓"],["PO₄³⁻","↑"]],c:"#2F8A78"},php:{n:"Pseudohypoparathyroidism 1A",L:[["PTH","↑"],["Ca²⁺","↓"],["PO₄³⁻","↑"]],c:"#7A5BC7"},pphp:{n:"Pseudopseudohypoparathyroidism",L:[["PTH","N"],["Ca²⁺","N"],["PO₄³⁻","N"]],c:"#C7892B"}};
function hypoparaD(){const k=ST.hpp,d=HPP[k];let b="";
 /* tubule cell signalling */
 b+=`<rect x="8" y="8" width="310" height="224" rx="16" style="fill:color-mix(in srgb,${EN.kid} 10%,var(--sb-surface));stroke:color-mix(in srgb,${EN.kid} 40%,transparent)"/>`+T(22,30,"เซลล์ไต / กระดูก (target)",{a:"start",c:"bh"});
 b+=`<path d="M22,72 H304" style="stroke:${EN.kid};stroke-width:6;opacity:.45"/>`;
 const nP=k==="hypo"?1:k==="php"?4:2;for(let i=0;i<nP;i++)b+=`<circle cx="${60+i*22}" cy="48" r="8" style="fill:${CV.gold}"/>`+`<text x="${60+i*22}" y="51.5" text-anchor="middle" style="font:800 7.5px var(--sb-font);fill:#fff">PTH</text>`;
 b+=T(60+nP*22,52,k==="hypo"?"PTH ↓":k==="php"?"PTH ↑ (ชดเชย)":"PTH ปกติ",{a:"start",c:"s"});
 b+=`<rect x="58" y="62" width="22" height="30" rx="6" style="fill:${CV.violet}"/>`+T(69,108,"PTH1R",{c:"s m"});
 const gsOK=k!=="php";b+=`<ellipse cx="130" cy="96" rx="22" ry="14" style="fill:${gsOK?CV.teal:"#9AA3B5"}"/>`+`<text x="130" y="100" text-anchor="middle" style="font:800 10px var(--sb-font);fill:#fff">Gsα</text>`;
 if(!gsOK)b+=`<path d="M112,82 l36,28 M148,82 l-36,28" style="stroke:${EN.up};stroke-width:3.4;stroke-linecap:round"/>`+T(130,128,"GNAS (แม่) เสีย",{c:"s bad"});
 b+=Ar(152,96,196,96,gsOK&&k!=="hypo"?CV.teal:"var(--sb-line)",2.2,{hs:7})+`<rect x="198" y="82" width="66" height="28" rx="8" style="fill:color-mix(in srgb,${CV.teal} 18%,var(--sb-surface));stroke:${CV.teal}"/>`+T(231,100,"AC → cAMP",{c:"s"});
 const ok=k==="pphp";b+=cardBox(22,140,282,84,ok?"ตอบสนองต่อ PTH ปกติ":"ไม่ได้ผลของ PTH",["PO₄ excretion ↑ · Ca reabsorption ↑","1α-hydroxylase ↑ · bone resorption ↑"],ok?CV.good:EN.up);
 /* imprinting */
 b+=`<rect x="334" y="8" width="300" height="224" rx="16" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(348,30,"GNAS imprinting (ไต: ใช้ allele จากแม่)",{a:"start",c:"bh"});
 const person=(x,y,f,mut,on)=>`<g style="opacity:${on?1:.35}">`+(f?`<circle cx="${x}" cy="${y}" r="16" style="fill:color-mix(in srgb,${CV.violet} 18%,var(--sb-surface));stroke:${CV.violet};stroke-width:1.8"/>`:`<rect x="${x-16}" y="${y-16}" width="32" height="32" rx="4" style="fill:color-mix(in srgb,${CV.dx} 18%,var(--sb-surface));stroke:${CV.dx};stroke-width:1.8"/>`)+(mut?`<path d="M${x},${y-16} A16,16 0 0 1 ${x},${y+16}Z" style="fill:${EN.up};opacity:.8"/>`:"")+`</g>`;
 const mOn=k==="php",pOn=k==="pphp";
 b+=person(390,74,true,true,mOn)+T(390,104,"แม่ส่ง",{c:"s"})+Ar(390,110,390,138,mOn?CV.violet:"var(--sb-line)",2,{hs:7})+person(390,158,false,false,mOn)+wrapT(390,190,"PHP 1A: AHO + ดื้อ PTH",16,"s",13,"middle");
 b+=person(560,74,false,true,pOn)+T(560,104,"พ่อส่ง",{c:"s"})+Ar(560,110,560,138,pOn?CV.dx:"var(--sb-line)",2,{hs:7})+person(560,158,false,false,pOn)+wrapT(560,190,"PPHP: AHO อย่างเดียว",16,"s",13,"middle");
 b+=T(476,128,"autosomal dominant",{c:"s m"});
 /* labs + phenotype */
 b+=`<rect x="8" y="244" width="310" height="112" rx="14" style="fill:color-mix(in srgb,${d.c} 10%,var(--sb-surface));stroke:color-mix(in srgb,${d.c} 45%,transparent)"/>`+T(22,268,d.n,{a:"start",c:"bh"});
 d.L.forEach(([n,v],i)=>{const x=22+i*98;b+=T(x,302,n,{a:"start",c:"s"})+lv(x+70,298,v)});
 b+=T(22,338,k==="hypo"?"tetany · Chvostek · Trousseau · QT ยาว":"Albright hereditary osteodystrophy",{a:"start",c:"s m"});
 if(k==="hypo")b+=cardBox(334,244,300,112,"สาเหตุ",["ผ่าตัดไทรอยด์/คอ (บ่อยสุด)","autoimmune (APS-1: candidiasis + Addison)","DiGeorge (22q11) · CaSR gain-of-function"],"#2F8A78");
 else b+=`<rect x="334" y="244" width="300" height="112" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+hand(380,300,true)+T(500,330,"เตี้ย · หน้ากลม",{a:"start",c:"s"})+T(500,346,"หินปูนใต้ผิวหนัง",{a:"start",c:"s"});
 return ESVG(b,"0 0 640 362")}

/* ---------- 3. lab values in hypocalcemic disorders ---------- */
const HC={vitd:{n:"Vitamin D deficiency",bad:"gut",L:["N/↓","N/↓","↑","↑","↓","N/↑"],t:"ดูด Ca/PO₄ จากลำไส้ไม่พอ → PTH ↑ ชดเชย (Ca เกือบปกติ แต่ PO₄ ต่ำ เพราะ PTH ขับทิ้ง)"},
 ckd:{n:"2° hyperparathyroidism (CKD)",bad:"kid",L:["↓","↑","↑","↑","N","↓"],t:"ไตขับ PO₄ ไม่ได้ + 1α-hydroxylase ↓ → Ca ต่ำ → PTH ↑ · renal osteodystrophy"},
 hypo:{n:"Hypoparathyroidism",bad:"pth",L:["↓","↑","↓","N","N","N/↓"],t:"ไม่มี PTH → ไตเก็บ PO₄ และสร้าง 1,25-D ไม่ได้"},
 php:{n:"Pseudohypoparathyroidism",bad:"rec",L:["↓","↑","↑","↑","N","N/↓"],t:"PTH สูงแต่อวัยวะเป้าหมายดื้อ (Gsα) → lab เหมือน hypopara แต่ PTH สูง"}};
function hypocaD(){const k=ST.hc,d=HC[k];let b="";
 const org=(x,y,w,t,s,key,draw)=>{const bad=d.bad===key||(key==="kid"&&d.bad==="rec");return `<rect x="${x}" y="${y}" width="${w}" height="122" rx="14" style="fill:color-mix(in srgb,${bad?EN.up:CV.teal} ${bad?13:6}%,var(--sb-surface));stroke:${bad?EN.up:"var(--sb-line)"};stroke-width:${bad?2:1}"/>`+draw+T(x+w/2,y+100,t,{c:"bh"})+T(x+w/2,y+115,s,{c:"s m"})+(bad?tag(x+w-22,y+16,"!",EN.up,{w:22}):"")};
 b+=org(8,8,148,"Parathyroid","สร้าง PTH","pth",[[52,40],[110,40],[52,72],[110,72]].map(([px,py])=>`<ellipse cx="${px}" cy="${py}" rx="${d.bad==="pth"?7:12}" ry="${d.bad==="pth"?5:9}" style="fill:${EN.para};stroke:#7A4E1C"/>`).join(""));
 b+=org(164,8,148,"Kidney","1α-hydroxylase · PO₄","kid",`<path d="${bean(238,52,58,72,-1)}" style="fill:${EN.kid};stroke:#6E3530;stroke-width:1.2;opacity:.85"/>`);
 b+=org(320,8,148,"Gut","ดูด Ca + PO₄ (ใช้ 1,25-D)","gut",`<path d="M352,40 C372,20 412,24 420,44 C430,66 378,58 380,78 C382,92 420,90 434,74" style="fill:none;stroke:#D89A7A;stroke-width:12;stroke-linecap:round"/>`);
 b+=org(476,8,158,"Bone","resorption → Ca, PO₄, ALP","bone",`<path d="M520,36 l60,30 M520,36 c-10,-8 -20,4 -10,10 c-6,10 8,16 12,6 M580,66 c10,8 20,-4 10,-10 c6,-10 -8,-16 -12,-6" style="fill:${EN.bone};stroke:${EN.boneD};stroke-width:10;stroke-linecap:round"/>`);
 const H=["Ca²⁺","PO₄³⁻","PTH","ALP","25-OH D","1,25-(OH)₂D"];
 b+=`<rect x="8" y="146" width="626" height="84" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(22,168,d.n,{a:"start",c:"bh"});
 H.forEach((h,i)=>{const x=60+i*104;b+=T(x,192,h,{c:"s m"})+lv(x,214,d.L[i])});
 b+=`<rect x="8" y="240" width="626" height="52" rx="12" style="fill:color-mix(in srgb,${CV.acc} 8%,var(--sb-surface));stroke:var(--sb-line)"/>`+wrapT(22,262,d.t,96,"s",15);
 return ESVG(b,"0 0 640 300")}

/* ---------- 4. hyperparathyroidism 1° / 2° / 3° ---------- */
const HPT={p1:{n:"1° hyperparathyroidism",para:[2,.62,.62,.62],L:[["PTH","↑"],["Ca²⁺","↑"],["PO₄³⁻","↓"],["ALP","↑"]],t:"adenoma เดี่ยว 85–95% (ต่อมอื่นฝ่อ) · hyperplasia 5–10% · carcinoma ~1%",c:"#C2577A"},
 p2:{n:"2° hyperparathyroidism",para:[1.45,1.45,1.45,1.45],L:[["PTH","↑"],["Ca²⁺","↓"],["PO₄³⁻","↑"],["ALP","↑"]],t:"ต่อมโตทั้ง 4 ตอบสนองต่อ Ca ต่ำเรื้อรัง (CKD บ่อยสุด)",c:"#7A5BC7"},
 p3:{n:"3° hyperparathyroidism",para:[1.9,1.4,2,1.6],L:[["PTH","↑↑"],["Ca²⁺","↑"],["PO₄³⁻","↑"],["ALP","↑"]],t:"hyperplasia ที่ทำงานเองหลัง 2° นาน ๆ (ESRD) · อาจต้องผ่าตัด",c:"#D9692F"}};
function longBone(x,y,cyst){let b=`<path d="M${x},${y+10} c-14,-14 4,-30 16,-14 l120,0 c12,-16 30,0 16,14 c14,14 -4,30 -16,14 l-120,0 c-12,16 -30,0 -16,-14Z" style="fill:${EN.bone};stroke:${EN.boneD};stroke-width:1.4"/>`;
 if(cyst)[[40,10,9],[78,6,7],[110,13,8]].forEach(([dx,dy,r])=>b+=`<ellipse cx="${x+dx}" cy="${y+dy}" rx="${r}" ry="${r*.7}" style="fill:#9A5A3A;stroke:#6E3B22;opacity:.85"/>`);return b}
function hyperparaD(){const k=ST.hpt,d=HPT[k];let b=thyroidG(4,0,1.15,{id:3,para:d.para,fill:"#D7A1A8"})+T(154,262,"มุมมองด้านหลังต่อมไทรอยด์",{c:"s m"});
 b+=`<rect x="320" y="8" width="314" height="132" rx="14" style="fill:color-mix(in srgb,${d.c} 9%,var(--sb-surface));stroke:color-mix(in srgb,${d.c} 45%,transparent)"/>`+T(336,32,d.n,{a:"start",c:"bh"});
 d.L.forEach(([n,v],i)=>{const x=336+i*74;b+=T(x,62,n,{a:"start",c:"s"})+lv(x+20,84,v)});b+=wrapT(336,116,d.t,48,"s m",14);
 if(k==="p1"){const S5=[["Stones","นิ่ว ไต · nephrocalcinosis"],["Thrones","polyuria"],["Bones","osteitis fibrosa cystica"],["Groans","ท้องผูก · pancreatitis · PUD"],["Psych","ซึมเศร้า สับสน"]];
  S5.forEach(([n,s],i)=>{const y=152+i*30;b+=`<rect x="320" y="${y}" width="314" height="26" rx="8" style="fill:var(--sb-surface2)"/>`+T(332,y+17,n,{a:"start",c:"bh"})+T(420,y+17,s,{a:"start",c:"s"})})}
 else b+=cardBox(320,152,314,90,k==="p2"?"Renal osteodystrophy":"Tertiary = ทำงานเอง",[k==="p2"?"กระดูกเปลี่ยนจาก PTH สูง + vit D ต่ำ · calciphylaxis ได้":"Ca ไม่ลดแม้หลังปลูกถ่ายไต · parathyroidectomy"],d.c);
 b+=T(8,290,"Osteitis fibrosa cystica (brown tumor)",{a:"start",c:"bh"})+longBone(30,306,k!=="p2")+T(200,322,k==="p2"?"พบได้แต่ไม่รุนแรงเท่า":"osteoclast + hemosiderin",{a:"start",c:"s m"});
 return ESVG(b,"0 0 640 340")}

/* ---------- 5. FHH: CaSR set-point ---------- */
function fhhD(){const sp=+ST.sp;const A=axes(56,16,300,220,[7,14],[0,100],[7,8,9,10,11,12,13,14],[0,25,50,75,100],"Serum Ca²⁺ (mg/dL)","PTH (% สูงสุด)");let b=A.g;
 const f=(c,s)=>100/(1+Math.exp((c-s)*4.2));const P=s=>{const p=[];for(let c=7;c<=14.001;c+=.05)p.push([A.X(c),A.Y(f(c,s))]);return p};
 b+=curve(P(9.6),CV.good,2,"5 4")+T(A.X(8.6),A.Y(88),"ปกติ",{c:"s m"});
 b+=curve(P(sp),sp>10.2?"#0B83B5":CV.good,3.6);
 const ss=sp+.55;b+=`<circle cx="${A.X(ss)}" cy="${A.Y(f(ss,sp))}" r="7" style="fill:${sp>10.2?"#0B83B5":CV.good};stroke:var(--sb-surface);stroke-width:2"/>`+T(A.X(ss)+10,A.Y(f(ss,sp))-10,`Ca ≈ ${ss.toFixed(1)}`,{a:"start",c:"bh"});
 const fhh=sp>10.2;b+=`<rect x="384" y="8" width="250" height="150" rx="14" style="fill:color-mix(in srgb,${fhh?"#0B83B5":CV.good} 10%,var(--sb-surface));stroke:var(--sb-line)"/>`+T(398,32,fhh?"FHH: set-point เลื่อนขวา":"CaSR ปกติ",{a:"start",c:"bh"});
 b+=wrapT(398,54,fhh?"CaSR (G-protein receptor) ที่ parathyroid และไตไวน้อยลง → ต้องใช้ Ca สูงกว่าปกติจึงกด PTH · ไตดูด Ca กลับมาก":"Ca สูงเล็กน้อยก็กด PTH ได้",40,"s",15);
 b+=labRow(398,126,220,"Urine Ca²⁺",fhh?"↓":"N");
 b+=cardBox(384,168,250,128,"แยก FHH จาก 1° HPT",["Ca/Cr clearance ratio: FHH < 0.01 · 1° HPT > 0.02","ประวัติครอบครัว · ยืนยันด้วย genetic test","FHH ไม่ต้องผ่าตัด"],"#0B83B5");
 return ESVG(b,"0 0 640 304")}

/* ---------- 6. hypercalcemia work-up ---------- */
const HW={nodes:{start:[150,4,340,44,"Hypercalcemia","ยืนยันซ้ำ · แก้ albumin หรือวัด ionized Ca",CV.acc],pth:[220,66,200,38,"Intact PTH","",CV.acc],
 hi:[10,124,290,50,"PTH สูง / ปกติค่อนสูง","PTH-dependent",CV.violet],lo:[340,124,290,50,"PTH ต่ำ (ถูกกด)","PTH-independent",CV.gold],
 uca:[10,196,290,50,"Urine Ca/Cr clearance","ตัด FHH ก่อนผ่าตัด",CV.violet],
 p1:[10,268,140,62,"1° HPT / MEN",">0.02 · adenoma",CV.violet],fhh:[160,268,140,62,"FHH","< 0.01 · ไม่ผ่าตัด","#0B83B5"],
 m1:[350,196,134,62,"PTHrP ↑","HHM: squamous, breast, renal",EN.up],m2:[496,196,134,62,"1,25-D ↑","granuloma · lymphoma",CV.gold],
 m3:[350,268,134,62,"25-OH D ↑","vitamin D เกิน",CV.gold],m4:[496,268,134,62,"ปกติทั้งหมด","myeloma · bone mets · thyroid · thiazide",EN.nl]},
 edges:[["start","pth"],["pth","hi"],["pth","lo"],["hi","uca"],["uca","p1"],["uca","fhh"],["lo","m1"],["lo","m2"],["lo","m3","",[[340,149],[330,149],[330,299],[350,299]]],["lo","m4","",[[630,149],[636,149],[636,299],[630,299]]]]};
const HWP={p1:["start","pth","hi","uca","p1"],fhh:["start","pth","hi","uca","fhh"],pthrp:["start","pth","lo","m1"],gran:["start","pth","lo","m2"],vitd:["start","pth","lo","m3"],other:["start","pth","lo","m4"]};
function hypercaD(){let b=tree(HW,HWP[ST.hw]);
 b+=`<rect x="10" y="344" width="620" height="76" rx="14" style="fill:color-mix(in srgb,${CV.teal} 9%,var(--sb-surface));stroke:color-mix(in srgb,${CV.teal} 45%,transparent)"/>`+T(26,366,"รักษา Ca สูงมาก/มีอาการ",{a:"start",c:"bh"});
 [["1 · IV saline","แก้ขาดน้ำ ขับ Ca"],["2 · calcitonin","ออกฤทธิ์ในชั่วโมง"],["3 · bisphosphonate","กด bone resorption"],["+ glucocorticoid","granuloma / vit D"]].forEach(([n,s],i)=>{const x=26+i*152;b+=T(x,390,n,{a:"start",c:"s"})+T(x,406,s,{a:"start",c:"s m"})});
 return ESVG(b,"0 0 640 426")}

/* ---------- 7. DM: diagnosis ---------- */
function dmDxD(){const f=+ST.fpg,a=+ST.a1c,o=+ST.ogtt;let b="";
 const cls=(v,p,d)=>v>=d?2:v>=p?1:0,C=[CV.good,CV.gold,EN.up],N=["ปกติ","Prediabetes","Diabetes"];
 const rows=[["Fasting plasma glucose (งด ≥ 8 ชม.)",f,60,220,100,126,"mg/dL"],["HbA1c (เฉลี่ย ~3 เดือน)",a,4,11,5.7,6.5,"%"],["2-h OGTT (กลูโคส 75 g)",o,60,320,140,200,"mg/dL"]];
 let worst=0;rows.forEach(([n,v,lo,hi,p,d,u],i)=>{const y=40+i*82,k=cls(v,p,d);worst=Math.max(worst,k);const W=360,X=t=>20+(t-lo)/(hi-lo)*W;
  b+=T(20,y-12,n,{a:"start",c:"bh"})+T(20+W,y-12,`${v} ${u}`,{a:"end",c:"bh"});
  b+=`<rect x="${X(lo)}" y="${y}" width="${X(p)-X(lo)}" height="16" rx="8" style="fill:color-mix(in srgb,${CV.good} 30%,var(--sb-surface))"/><rect x="${X(p)}" y="${y}" width="${X(d)-X(p)}" height="16" style="fill:color-mix(in srgb,${CV.gold} 35%,var(--sb-surface))"/><rect x="${X(d)}" y="${y}" width="${X(hi)-X(d)}" height="16" rx="8" style="fill:color-mix(in srgb,${EN.up} 30%,var(--sb-surface))"/>`;
  b+=T(X(p),y+32,"≥ "+p,{c:"s m"})+T(X(d),y+32,"≥ "+d,{c:"s m"})+`<circle cx="${X(Math.min(hi,v))}" cy="${y+8}" r="9" style="fill:${C[k]};stroke:var(--sb-surface);stroke-width:2.4"/>`+tag(20+W+60,y+8,N[k],C[k],{w:96})});
 b+=`<rect x="10" y="268" width="620" height="62" rx="14" style="fill:color-mix(in srgb,${C[worst]} 12%,var(--sb-surface));stroke:${C[worst]}"/>`+T(26,294,"ผลรวม: "+N[worst],{a:"start",c:"bh"})+T(26,314,worst===2?"ต้องยืนยันซ้ำอีกวัน (ยกเว้น random ≥ 200 + อาการชัด)":worst===1?"เสี่ยงเป็น T2DM · ปรับวิถีชีวิต":"ไม่เข้าเกณฑ์",{a:"start",c:"s"});
 b+=cardBox(500,6,134,240,"Random ≥ 200",["ใช้ได้เมื่อมีอาการ: polyuria, polydipsia, polyphagia, น้ำหนักลด"],CV.violet);
 return ESVG(b,"0 0 640 338")}

/* ---------- 8. insulin deficiency → metabolic cascade ---------- */
function dmMetaD(){const rel=ST.ins==="rel";let b="";
 const bx=(x,y,w,t,s,c,dim)=>`<g style="opacity:${dim?.3:1}"><rect x="${x}" y="${y}" width="${w}" height="${s?44:32}" rx="10" style="fill:color-mix(in srgb,${c} 14%,var(--sb-surface));stroke:color-mix(in srgb,${c} 60%,transparent)"/>`+T(x+w/2,y+(s?19:21),t,{c:"bh"})+(s?T(x+w/2,y+35,s,{c:"s m"}):"")+`</g>`;
 const ar=(x1,y1,x2,y2,dim)=>Ar(x1,y1,x2,y2,dim?"var(--sb-line)":CV.mut,1.8,{hs:6});
 b+=bx(170,6,300,rel?"Insulin ไม่พอเทียบความต้องการ":"Insulin ขาด (absolute) + glucagon ↑",rel?"T2DM: insulin resistance + β-cell ล้า":"T1DM",CV.violet);
 b+=ar(220,50,90,78)+ar(320,50,320,78)+ar(420,50,548,78);
 const ket=!rel;
 b+=bx(10,80,160,"Lipolysis ↑","FFA ไปตับ",CV.gold)+bx(240,80,160,"Proteolysis ↑","กล้ามเนื้อลีบ น้ำหนักลด",CV.teal)+bx(470,80,160,"Glucose ↑","gluconeogenesis · uptake ↓",EN.up);
 b+=ar(90,124,90,148,!ket)+bx(10,150,160,"Ketogenesis","β-OHB > acetoacetate",CV.gold,!ket)+ar(90,194,90,218,!ket)+bx(10,220,160,"Anion gap acidosis","Kussmaul · อาเจียน",EN.up,!ket);
 if(rel)b+=`<rect x="10" y="150" width="160" height="114" rx="10" style="fill:none;stroke:${CV.violet};stroke-dasharray:5 4"/>`+wrapT(90,276,"insulin ใน portal vein ยังพอกด ketogenesis → ไม่ค่อยเกิด DKA",28,"s",14,"middle");
 b+=ar(550,124,550,148)+bx(470,150,160,"Glycosuria","เกิน threshold ของไต",EN.up)+ar(550,194,550,218)+bx(470,220,160,"Osmotic diuresis","เสียน้ำ Na⁺ K⁺",CV.dx);
 b+=ar(550,264,550,288)+bx(470,290,160,"Hypovolemia","plasma osm ↑ · กระหาย",CV.dx);
 b+=ar(470,312,400,312)+bx(250,290,150,rel?"HHS":"DKA",rel?"osm สูงมาก · ซึม":"ketoacidosis",EN.up);
 b+=bx(250,170,150,"3 P's","polyuria · polydipsia · polyphagia",CV.teal);
 return ESVG(b,"0 0 640 344")}

/* ---------- 9. type 1 vs type 2 ---------- */
function t12D(){const t1=ST.t12==="t1";let b=islet(8,8,210,200,t1?"t1":"t2")+wrapT(113,228,t1?"Insulitis: T cell + macrophage ทำลาย β cell":"Islet amyloid (amylin) · β cell ลดเล็กน้อย",36,"s m",14,"middle");
 const R=[["กลไก","autoimmune","insulin resistance"],["Autoantibody","GAD · insulin ⊕","ไม่มี"],["HLA","DR3 / DR4","ไม่สัมพันธ์"],["Twin concordance","~50%","~90%"],["อ้วน","ไม่สัมพันธ์","สัมพันธ์มาก"],["อายุที่มักเป็น","< 30 ปี","> 40 ปี"],["Insulin ในเลือด","↓","↑ แล้วค่อย ↓"],["Ketoacidosis","พบบ่อย","พบน้อย (HHS)"],["ต้องใช้ insulin","เสมอ","บางราย"]];
 b+=`<rect x="232" y="8" width="402" height="${30+R.length*30}" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`;
 b+=T(430,30,"Type 1",{c:t1?"bh":"s m"})+T(564,30,"Type 2",{c:t1?"s m":"bh"});
 R.forEach(([n,a,c],i)=>{const y=54+i*30;b+=`<rect x="${t1?370:500}" y="${y-16}" width="124" height="26" rx="7" style="fill:color-mix(in srgb,${t1?CV.violet:CV.gold} 14%,var(--sb-surface))"/>`+T(244,y+2,n,{a:"start",c:"s m"})+T(432,y+2,a,{c:t1?"s":"s m"})+T(562,y+2,c,{c:t1?"s m":"s"})});
 return ESVG(b,"0 0 640 310")}

/* ---------- 10. DKA vs HHS ---------- */
const DK={dka:{n:"Diabetic ketoacidosis",g:480,ph:7.12,hc:10,os:305,k:5.4,ket:"+++",c:EN.up,R:["T1DM (หรือ T2 ที่ stress รุนแรง) · ขาดยา insulin · ติดเชื้อ","อาการเร็ว (< 24 ชม.): ปวดท้อง อาเจียน Kussmaul ลมหายใจกลิ่นผลไม้","ภาวะแทรกซ้อน: cerebral edema (เด็ก), arrhythmia, mucormycosis"]},
 hhs:{n:"Hyperosmolar hyperglycemic state",g:900,ph:7.36,hc:22,os:350,k:5,ket:"–",c:CV.violet,R:["ผู้สูงอายุ T2DM ที่ดื่มน้ำเองไม่ได้ · มักมี MI/stroke/ติดเชื้อนำ","ค่อย ๆ เป็นหลายวัน–สัปดาห์: ซึม สับสน focal deficit ชัก","ไม่มี Kussmaul/อาเจียน · อัตราตายสูงกว่า DKA"]}};
function dkaD(){const d=DK[ST.dk];let b="";
 b+=gauge(24,40,280,"Glucose",d.g,100,1100,70,140,"mg/dL")+gauge(24,92,280,"pH",d.ph,6.9,7.6,7.35,7.45,"")+gauge(24,144,280,"HCO₃⁻",d.hc,0,32,22,28,"mEq/L")+gauge(24,196,280,"Serum osm",d.os,260,400,275,295,"mOsm/kg")+gauge(24,248,280,"Serum K⁺ (total body K ↓)",d.k,2.5,7,3.5,5,"mEq/L",CV.gold);
 b+=T(24,296,"Ketones",{a:"start",c:"s"})+tag(110,292,d.ket,d.ket==="+++"?EN.up:EN.nl,{w:46});
 b+=iPanel(330,8,304,d.n,"",d.R,d.c);
 b+=cardBox(330,200,304,112,"รักษา (ทั้งคู่)",["IV fluid → IV insulin + K⁺ · ให้ dextrose เมื่อ glucose ลดถึง ~250","K⁺ < 3.3 → แก้ K ก่อนเริ่ม insulin"],CV.teal);
 return ESVG(b,"0 0 640 318")}

/* ---------- 11. chronic complications ---------- */
const CMP={micro:{n:"Microvascular",k:["eye","kid","nerve"],t:"basement membrane หนา · hyaline arteriolosclerosis"},macro:{n:"Macrovascular",k:["heart","brain","leg"],t:"atherosclerosis เร็วและรุนแรง · MI = สาเหตุตายอันดับ 1"},polyol:{n:"Osmotic (polyol)",k:["lens","nerve"],t:"sorbitol คั่งในเซลล์ที่ไม่ต้องใช้ insulin นำกลูโคสเข้า"}};
function dmCompD(){const d=CMP[ST.cm],on=x=>d.k.includes(x);let b=bodyFig(168,8,.8,{});const bp=(x,y)=>[168+.8*x,8+.8*y];
 const C=[["eye",[91,48],[10,40],"Retinopathy"],["brain",[100,24],[10,16],"Stroke"],["heart",[110,140],[10,120],"CAD / MI"],["kid",[86,200],[10,200],"Nephropathy"],["nerve",[150,240],[10,262],"Neuropathy"],["leg",[84,360],[10,330],"PAD · gangrene"],["lens",[109,48],[10,72],"Cataract"]];
 C.forEach(([k,p,l,t])=>{const [x1,y1]=bp(...p),c=on(k)?EN.up:"var(--sb-line)";b+=`<path d="M${x1},${y1} L${l[0]+156},${l[1]}" style="stroke:${c};stroke-width:${on(k)?1.6:1}"/>`+dot(x1,y1,on(k)?4:2.4,on(k)?EN.up:EN.nl)+`<g style="opacity:${on(k)?1:.35}">`+T(l[0]+152,l[1]+4,t,{a:"end",c:on(k)?"bh":"s"})+`</g>`});
 b+=`<rect x="344" y="8" width="290" height="70" rx="14" style="fill:color-mix(in srgb,${EN.up} 9%,var(--sb-surface));stroke:var(--sb-line)"/>`+T(358,32,d.n,{a:"start",c:"bh"})+wrapT(358,52,d.t,44,"s",14);
 /* polyol pathway */
 b+=`<rect x="344" y="90" width="290" height="150" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(358,112,"Polyol pathway",{a:"start",c:"bh"});
 const nd=(x,y,t,c)=>`<rect x="${x-46}" y="${y-14}" width="92" height="28" rx="14" style="fill:${c}"/>`+`<text x="${x}" y="${y+4}" text-anchor="middle" style="font:750 11px var(--sb-font);fill:#fff">${t}</text>`;
 b+=nd(394,150,"Glucose",EN.up)+Ar(440,150,446,150,CV.mut,1.8,{hs:6})+nd(492,150,"Sorbitol",CV.gold)+Ar(538,150,544,150,"var(--sb-line)",1.6,{hs:6})+nd(590,150,"Fructose",EN.nl);
 b+=T(440,180,"aldose reductase",{c:"s"})+T(440,194,"(ใช้ NADPH → GSH ↓)",{c:"s m"})+T(568,180,"sorbitol DH",{c:"s"})+T(568,194,"ต่ำ/ไม่มี",{c:"s bad"});
 b+=wrapT(358,218,"เซลล์เสี่ยง: lens · Schwann cell/nerve · retina · ไต",44,"s",14);
 b+=cardBox(344,252,290,92,"กลไกอื่นจาก glucose สูง",["AGE (nonenzymatic glycation) จับ RAGE · PKC activation · hexosamine pathway"],CV.violet);
 return ESVG(b,"0 0 640 350")}

/* ---------- 12. hypoglycemia ---------- */
const GT2=[[82,"Insulin ↓","ด่านแรก",CV.teal],[68,"Glucagon ↑","ด่านสอง",CV.gold],[67,"Epinephrine ↑","ด่านสาม · อาการ neurogenic",EN.up],[66,"Cortisol · GH ↑","ระยะยาว",CV.violet],[53,"มีอาการ → กิน","รับรู้ hypoglycemia",CV.acc],[49,"Cognition ↓","neuroglycopenia",EN.nl]];
function hypoglyD(){const g=+ST.glu,bb=!!ST.bb;let b="";const Y=v=>20+(110-v)/(110-30)*300;
 b+=`<rect x="40" y="20" width="40" height="300" rx="20" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`;
 b+=`<rect x="40" y="${Y(g)}" width="40" height="${320-Y(g)}" rx="20" style="fill:color-mix(in srgb,${g<55?EN.up:g<70?CV.gold:CV.good} 70%,var(--sb-surface))"/>`;
 [100,90,80,70,60,50,40].forEach(v=>b+=T(32,Y(v)+4,v,{a:"end",c:"s m"}));b+=T(60,342,"mg/dL",{c:"s m"})+`<path d="M34,${Y(g)} H92" style="stroke:var(--sb-ink);stroke-width:2"/>`+T(98,Y(g)+4,g,{a:"start",c:"bb"});
 GT2.forEach(([v,n,s,c],i)=>{const y=24+i*50,act=g<=v,blunt=bb&&i===2;const x=150;
  b+=`<path d="M80,${Y(v)} C110,${Y(v)} 120,${y+18} ${x},${y+18}" style="fill:none;stroke:${act?c:"var(--sb-line)"};stroke-width:1.4;stroke-dasharray:${act?"none":"3 3"}"/>`;
  b+=`<g style="opacity:${act&&!blunt?1:.35}"><rect x="${x}" y="${y}" width="300" height="38" rx="10" style="fill:color-mix(in srgb,${c} ${act?16:5}%,var(--sb-surface));stroke:${act?c:"var(--sb-line)"}"/>`+T(x+12,y+17,n,{a:"start",c:"bh"})+T(x+12,y+31,s,{a:"start",c:"s m"})+T(x+290,y+24,"~"+v,{a:"end",c:"s"})+`</g>`;
  if(blunt&&act)b+=`<path d="M${x+6},${y+19} H${x+294}" style="stroke:${EN.up};stroke-width:2"/>`});
 b+=cardBox(468,8,166,170,bb?"Hypoglycemia unawareness":"อาการ 2 กลุ่ม",bb?["β-blocker / autonomic neuropathy / hypo ซ้ำ ๆ → ไม่มีสัญญาณเตือน → ไปถึงซึม ชัก"]:["Neurogenic: เหงื่อ ใจสั่น สั่น หิว","Neuroglycopenic: สับสน ชัก หมดสติ"],bb?EN.up:CV.acc);
 b+=cardBox(468,190,166,136,"แก้ไข",["กินน้ำตาลเร็ว (ยาเม็ดกลูโคส น้ำผลไม้)","กินไม่ได้ → IM glucagon / IV dextrose"],CV.teal);
 return ESVG(b,"0 0 640 350")}

/* ---------- extra: diabetic nephropathy & microangiopathy ---------- */
function glom(cx,cy,R,mode){let b=`<circle cx="${cx}" cy="${cy}" r="${R+10}" style="fill:#FBEFF3;stroke:${HE.mem};stroke-width:2.2"/>`;const r=rng(51);
 for(let i=0;i<9;i++){const a=i/9*6.283,lx=cx+Math.cos(a)*R*.62,ly=cy+Math.sin(a)*R*.62;const th=mode==="gbm"||mode==="nod"||mode==="mes"?3.4:1.6;
  b+=`<circle cx="${lx}" cy="${ly}" r="${R*.26}" style="fill:#FCEDEF;stroke:#C45C82;stroke-width:${th}"/>`+dot(lx-3,ly,2.6,HE.rbc)+dot(lx+4,ly+3,2.6,HE.rbc)}
 const mes=mode==="mes"||mode==="nod"?R*.36:R*.22;b+=`<circle cx="${cx}" cy="${cy}" r="${mes}" style="fill:#F2B9CB;stroke:${HE.mem}"/>`;for(let i=0;i<6;i++)b+=dot(cx+(r()-.5)*mes,cy+(r()-.5)*mes,2,HE.nu);
 if(mode==="nod")[[0,-.62],[.58,.3],[-.56,.34]].forEach(([dx,dy])=>{const nx=cx+dx*R*.62,ny=cy+dy*R*.62;b+=`<circle cx="${nx}" cy="${ny}" r="${R*.2}" style="fill:#E58FB5;stroke:#A7406E;stroke-width:1.2"/>`+`<circle cx="${nx}" cy="${ny}" r="${R*.12}" style="fill:none;stroke:#C35A8B;stroke-width:1"/>`});
 b+=`<path d="M${cx-R-30},${cy+R*.9} C${cx-R*.6},${cy+R*.7} ${cx-R*.4},${cy+R*.8} ${cx-R*.2},${cy+R}" style="fill:none;stroke:#E58FB5;stroke-width:${mode==="nod"||mode==="mes"?14:8};stroke-linecap:round"/>`;
 return b}
function dmKidD(){const m=ST.dn;let b=slide(8,8,300,280)+glom(160,140,90,m);
 b+=T(36,270,"hyaline arteriole",{a:"start",c:"s"});
 const Dn={gbm:["Capillary BM thickening","เกิดตั้งแต่ต้น · ทุกส่วนของ microcirculation"],mes:["Diffuse mesangial sclerosis","matrix เพิ่ม · สัมพันธ์กับ proteinuria"],nod:["Nodular (Kimmelstiel-Wilson)","ก้อน PAS ⊕ ใน mesangium · จำเพาะต่อ DM"]}[m];
 b+=cardBox(324,8,310,96,Dn[0],[Dn[1]],"#C35A8B");
 b+=cardBox(324,114,310,104,"ลำดับทางคลินิก",["microalbuminuria 30–300 mg/วัน → overt > 300 mg/วัน + HTN","T1DM ~80%, T2DM 20–40% ใน 10–15 ปี (ถ้าไม่รักษา)"],CV.violet);
 b+=cardBox(324,228,310,104,"Retinopathy",["60–80% หลังเป็น 15–20 ปี · neovascularization","สาเหตุตาบอดอันดับ 1 ในผู้ใหญ่ (US)"],CV.teal);
 return ESVG(b,"0 0 640 340")}

/* ================= sections ================= */
SEC.push({id:"pth-map",k:"a",t:"Diagnosing parathyroid disease",mm:"PTH vs Ca map",leg:[],tools:[["pm",[["p1","1° HPT"],["p2","2° HPT"],["p3","3° HPT"],["fhh","FHH"],["hypo","Hypopara"],["indep","PTH-independent"]]]],draw:pthMapD,
notes:()=>`<div class="pearl">อ่าน PTH <b>คู่กับ Ca</b> เสมอ: Ca สูงควรกด PTH ลง · ถ้า PTH ไม่ต่ำ = ต่อมทำงานเกิน ${S.h} ${S.fa}</div>
<ul><li>PTH เพิ่ม Ca โดย: ดูด Ca กลับที่ไต, ขับ PO₄, เปิด 1α-hydroxylase (1,25-D ↑ → ดูด Ca ที่ลำไส้), กระตุ้น osteoclast ผ่านการเจริญของ progenitor ${S.r}</li>
<li><b>1° HPT</b>: Ca ↑, PO₄ ↓, PTH ↑ (หรือปกติแต่ไม่เหมาะสม), ALP ↑, urinary cAMP ↑ ${S.fa}</li>
<li><b>2° HPT</b>: Ca ต่ำเรื้อรัง (CKD บ่อยสุด, ขาด vitamin D, Ca intake ต่ำ) → ต่อมโตชดเชย · CKD มี PO₄ สูง ต่างจากสาเหตุอื่นที่ PO₄ ต่ำ ${S.fa} ${S.r}</li>
<li><b>3° HPT</b>: ต่อมทำงานเองหลัง 2° นาน (ESRD) → PTH ↑↑, Ca ↑ แม้แก้สาเหตุ เช่น หลังปลูกถ่ายไต ${S.fa} ${S.r}</li>
<li><b>PTH-independent hypercalcemia</b>: มะเร็ง (PTHrP, bone lysis), vitamin D เกิน, granuloma, Ca intake มาก → PTH ถูกกดจนต่ำ ${S.fa} ${S.r}</li>
<li>1° HPT และมะเร็งรวมกันเป็นสาเหตุ ~90% ของ hypercalcemia ${S.r} ${S.h}</li></ul>`});

SEC.push({id:"hypopara",k:"a",t:"Hypoparathyroidism, PHP & PPHP",mm:"Hypopara · PHP · PPHP",leg:[],tools:[["hpp",[["hypo","Hypoparathyroidism"],["php","PHP 1A"],["pphp","PPHP"]]]],draw:hypoparaD,
notes:()=>`<ul><li>Hypoparathyroidism ส่วนใหญ่เกิดจาก<b>ผ่าตัดคอ</b> (ตัด parathyroid ติดไปหรือเสียเลือดเลี้ยง) · autoimmune · DiGeorge (22q11) ${S.fa} ${S.r}</li>
<li>Autoimmune hypoparathyroidism มักมากับ chronic mucocutaneous candidiasis และ Addison = <b>APS-1</b> (AIRE) ${S.r}</li>
<li>CaSR gain-of-function: ต่อม “คิดว่า” Ca สูง → กด PTH → hypocalcemia + hypercalciuria ${S.r}</li>
<li>อาการ hypocalcemia: <b>tetany</b>, ชาปาก ปลายมือ, carpopedal spasm, laryngospasm, ชัก · Chvostek (เคาะ facial n.) · Trousseau (รัด cuff → carpal spasm) ${S.fa} ${S.r}</li>
<li>อื่น ๆ: QT ยาว, หินปูนที่ basal ganglia, cataract, ฟันผิดปกติถ้าเป็นตั้งแต่เด็ก ${S.r}</li>
<li><b>PHP 1A</b>: GNAS (Gsα) inactivating mutation จาก<b>แม่</b> (imprinted) → ไตและกระดูกดื้อ PTH · Ca ↓ PO₄ ↑ แต่ <b>PTH ↑</b> · อาจดื้อ TSH, LH/FSH ร่วมด้วย ${S.fa} ${S.r}</li>
<li>Albright hereditary osteodystrophy: นิ้ว 4–5 สั้น, เตี้ย, หน้ากลม, หินปูนใต้ผิวหนัง, พัฒนาการช้า ${S.fa}</li>
<li><b>PPHP</b>: mutation จาก<b>พ่อ</b> → มี AHO แต่ไตยังใช้ allele ของแม่ที่ปกติ จึง lab ปกติทั้งหมด ${S.fa}</li></ul>`});

SEC.push({id:"hypoca-labs",k:"a",t:"Lab values in hypocalcemic disorders",mm:"Hypocalcemia labs",leg:[],tools:[["hc",[["vitd","Vit D deficiency"],["ckd","2° HPT (CKD)"],["hypo","Hypopara"],["php","PHP"]]]],draw:hypocaD,
notes:()=>`<ul><li>อ่านตามตำแหน่งที่เสีย: ลำไส้ (ขาด vitamin D) · ไต (CKD) · ต่อม (hypopara) · ตัวรับ (PHP) ${S.fa}</li>
<li>Vitamin D deficiency: 25-OH D ↓ · PTH ↑ ชดเชยจน Ca ปกติหรือต่ำเล็กน้อย · PO₄ ต่ำ · ALP ↑ ${S.fa}</li>
<li>CKD: PO₄ คั่งไปจับ Ca + 1α-hydroxylase ลดลง → 1,25-D ↓ → 2° HPT · vitamin D ปกติกด PTH จึงยิ่งทำให้ PTH สูง ${S.r} ${S.fa}</li>
<li>Hypoparathyroidism: PTH ต่ำ → PO₄ คั่ง, 1,25-D ไม่ถูกสร้าง · ALP ปกติ ${S.fa}</li>
<li>Pseudohypoparathyroidism: lab เหมือน hypopara ยกเว้น <b>PTH สูง</b> ${S.fa} ${S.r}</li>
<li>ค่าที่ช่วยแยกเร็วที่สุด: <b>PTH + PO₄</b> · PO₄ ต่ำชี้ไปที่ vitamin D, PO₄ สูงชี้ไปที่ไตหรือ PTH ${S.fa}</li></ul>`});

SEC.push({id:"hyperpara",k:"a",t:"Primary, secondary & tertiary hyperparathyroidism",mm:"1° · 2° · 3° HPT",leg:[],tools:[["hpt",[["p1","Primary"],["p2","Secondary"],["p3","Tertiary"]]]],draw:hyperparaD,
notes:()=>`<ul><li><b>1° HPT</b>: adenoma เดี่ยว 85–95%, hyperplasia 5–10%, carcinoma ~1% · หญิง:ชาย ~4:1 · อายุ 50 ขึ้นไป ${S.r}</li>
<li>เป็น<b>สาเหตุ hypercalcemia ที่ไม่มีอาการ</b>ที่พบบ่อยที่สุด เพราะตรวจเลือดพบโดยบังเอิญ ${S.r}</li>
<li>Adenoma: ต่อมเดียวโต ต่อมที่เหลือ<b>ฝ่อ</b>จาก Ca สูงกด · hyperplasia: หลายต่อม · carcinoma วินิจฉัยจากการลุกลาม/แพร่กระจายเท่านั้น ${S.r}</li>
<li>Sporadic adenoma: cyclin D1 (CCND1) inversion ไปอยู่ข้าง PTH promoter, MEN1 mutation · carcinoma: CDC73 ${S.r}</li>
<li>“Stones, thrones, bones, groans, psychiatric overtones” · นิ่ว ~20% · ท้องผูก pancreatitis PUD · ซึมเศร้า ${S.fa} ${S.r}</li>
<li><b>Osteitis fibrosa cystica</b>: osteoclast เจาะกระดูก + fibrosis + cyst สีน้ำตาลจาก hemosiderin (brown tumor) ${S.r} ${S.fa}</li>
<li><b>2° HPT</b>: ต่อมโตทั้ง 4 จาก Ca ต่ำ (CKD) · กระดูกเปลี่ยนเบากว่า (renal osteodystrophy) · หลอดเลือด calcify จน calciphylaxis ได้ · รักษาด้วย phosphate binder + vitamin D ${S.r}</li>
<li><b>3° HPT</b>: ต่อมทำงานเอง (ESRD) → Ca สูง อาจต้อง parathyroidectomy ${S.r} ${S.fa}</li>
<li>Localize adenoma ด้วย sestamibi + ultrasound · ผ่าตัดเมื่อมีอาการหรือเข้าเกณฑ์ · หลังผ่าตัดระวัง <b>hungry bone syndrome</b> ${S.fa}</li></ul>`});

SEC.push({id:"fhh",k:"a",t:"Familial hypocalciuric hypercalcemia",mm:"FHH",leg:[],ctrl:()=>sl("sp","CaSR set-point",9.4,12,.1,"mg/dL"),wire:()=>wireSl(),draw:fhhD,
notes:()=>`<div class="pearl">เลื่อน set-point ของ CaSR: ยิ่งไวน้อย ต้องใช้ Ca สูงขึ้นจึงกด PTH ได้ → Ca คงตัวที่ระดับสูงใหม่ ${S.fa}</div>
<ul><li><b>Autosomal dominant</b> loss-of-function ของ calcium-sensing receptor (G-protein coupled) ที่ parathyroid และไต ${S.fa} ${S.h}</li>
<li>ต้องใช้ Ca สูงกว่าปกติจึงกด PTH · ไตดูด Ca กลับมาก → <b>hypercalcemia เล็กน้อย + hypocalciuria</b> + PTH ปกติหรือสูงเล็กน้อย ${S.fa}</li>
<li>Calcium/creatinine clearance ratio มัก <b>&lt; 0.01</b> ใน FHH และ &gt; 0.02 ใน 1° HPT · ยืนยันด้วย genetic test ${S.h}</li>
<li>FHH เป็นโรคไม่อันตราย <b>ไม่ต้องผ่าตัด parathyroid</b> จึงต้องตัดออกก่อนส่งผ่าตัด 1° HPT ${S.h}</li>
<li>Robbins จัด FHH (CASR loss-of-function) อยู่ในกลุ่ม familial parathyroid hyperfunction ${S.r}</li></ul>`});

SEC.push({id:"hyperca-wu",k:"a",t:"Hypercalcemia work-up & acute care",mm:"Hypercalcemia work-up",leg:[],tools:[["hw",[["p1","1° HPT"],["fhh","FHH"],["pthrp","PTHrP"],["gran","Granuloma"],["vitd","Vit D excess"],["other","Other"]]]],draw:hypercaD,
notes:()=>`<div class="pearl">ขั้นแรก: ยืนยันว่า Ca สูงจริง แล้ววัด <b>intact PTH</b> · PTH แบ่งโรคเป็นสองฝั่งชัดเจน ${S.h}</div>
<ul><li>Ca สูงไม่มีอาการ เป็นมานาน (&gt; 1 ปี) → นึกถึง 1° HPT · มะเร็งมักดำเนินเร็วและมีอาการของมะเร็งชัด ${S.h}</li>
<li>มะเร็งเป็นสาเหตุ hypercalcemia <b>ที่มีอาการ</b>บ่อยที่สุด · ~80% ผ่าน <b>PTHrP</b> (squamous ปอด, เต้านม, ไต, head and neck) ที่เหลือจาก bone metastasis/myeloma ${S.r} ${S.fa}</li>
<li>Granuloma (sarcoidosis) และ lymphoma สร้าง 1,25-(OH)₂D เอง → ตอบสนองต่อ glucocorticoid ${S.h}</li>
<li>สาเหตุอื่น: thyrotoxicosis, immobilization, thiazide, vitamin A, milk-alkali syndrome, adrenal insufficiency ${S.h}</li>
<li>Ca สูงมากหรือมีอาการ: <b>IV saline</b> ก่อน (ผู้ป่วยมักขาดน้ำ) → calcitonin ออกฤทธิ์เร็ว → bisphosphonate ระยะยาว ${S.h} ${S.fa}</li>
<li>Ca &lt; 12 mg/dL ที่ไม่มีอาการ มักแค่ให้น้ำ ${S.h}</li></ul>`});

SEC.push({id:"dm-dx",k:"b",t:"Diabetes mellitus: manifestations & diagnosis",mm:"DM diagnosis",leg:[],ctrl:()=>sl("fpg","FPG",70,220,1,"mg/dL")+sl("a1c","HbA1c",4.5,11,.1,"%")+sl("ogtt","2-h OGTT",80,320,1,"mg/dL"),wire:()=>wireSl(),draw:dmDxD,
notes:()=>`<div class="pearl">เลื่อนค่าทั้งสาม: ค่าเดียวเข้าเกณฑ์ก็พอ แต่ต้อง<b>ยืนยันซ้ำต่างวัน</b> ยกเว้น random glucose ≥ 200 ที่มีอาการ ${S.r}</div>
<ul><li>เกณฑ์ DM: FPG ≥ 126 · 2-h OGTT ≥ 200 · HbA1c ≥ 6.5% · random ≥ 200 พร้อมอาการ ${S.fa} ${S.r}</li>
<li>Prediabetes: FPG 100–125 (impaired fasting glucose) · OGTT 140–199 (impaired glucose tolerance) · HbA1c 5.7–6.4% ${S.r}</li>
<li>HbA1c สะท้อนน้ำตาลเฉลี่ย ~3 เดือน และขึ้นกับอายุเม็ดเลือดแดง ${S.fa}</li>
<li>Stress เฉียบพลัน (ติดเชื้อ ไฟไหม้ บาดเจ็บ) ทำให้น้ำตาลสูงชั่วคราวจาก catecholamine/cortisol จึงต้องตรวจซ้ำหลังหายป่วย ${S.r}</li>
<li>อาการเฉียบพลัน: polyuria, polydipsia, polyphagia + น้ำหนักลด (กินมากแต่ผอม = ต้องนึกถึง DM) · DKA (T1) · HHS (T2) ${S.fa} ${S.r}</li>
<li>DM จากสาเหตุอื่น: glucocorticoid (steroid diabetes), GH และ epinephrine เกิน, Cushing, glucagonoma, pancreatitis/hemochromatosis ${S.fa} ${S.r}</li></ul>`});

SEC.push({id:"dm-meta",k:"b",t:"Insulin deficiency: the metabolic cascade",mm:"Insulin deficiency cascade",leg:[],tools:[["ins",[["abs","Absolute (T1)"],["rel","Relative (T2)"]]]],draw:dmMetaD,
notes:()=>`<ul><li>ขาด insulin + glucagon เกิน → ใช้กลูโคสลดลง แต่ตับสร้างเพิ่ม (gluconeogenesis, glycogenolysis) → hyperglycemia ${S.r} ${S.fa}</li>
<li>กลูโคสเกิน renal threshold → glycosuria → <b>osmotic diuresis</b> → เสียน้ำ Na⁺ K⁺ → กระหาย, hypovolemia จนถึง circulatory failure ${S.fa} ${S.r}</li>
<li>Lipolysis → FFA ไปตับ → ketone (acetoacetate, β-hydroxybutyrate) เกินที่เนื้อเยื่อใช้ได้ → <b>anion gap metabolic acidosis</b> → Kussmaul, อาเจียน ${S.r} ${S.fa}</li>
<li>Proteolysis → กล้ามเนื้อลีบ น้ำหนักลด · amino acid ที่เป็น ketogenic ทำให้ ketosis หนักขึ้น ${S.r} ${S.fa}</li>
<li>T2DM ยังมี insulin ใน portal vein พอกด fatty acid oxidation ในตับ จึงไม่ค่อยเกิด DKA แต่เกิด HHS แทน ${S.r}</li></ul>`});

SEC.push({id:"t1-t2",k:"b",t:"Type 1 vs type 2 diabetes mellitus",mm:"Type 1 vs type 2",leg:[],tools:[["t12",[["t1","Type 1"],["t2","Type 2"]]]],draw:t12D,
notes:()=>`<ul><li><b>T1DM</b>: T cell ทำลาย β cell (self-tolerance เสีย) → ขาด insulin สมบูรณ์ · autoantibody ต่อ GAD, insulin, ICA512 ${S.r} ${S.fa}</li>
<li>Genetic locus ที่สำคัญที่สุดของ T1DM คือ HLA class II (DR3, DR4) · CTLA4, PTPN22 ${S.r} ${S.fa}</li>
<li>Histology T1DM: <b>insulitis</b> (T cell + macrophage) → islet ฝ่อ β cell หมด ${S.r} ${S.fa}</li>
<li><b>T2DM</b>: insulin resistance + β cell ชดเชยไม่ไหว · ไม่ใช่ autoimmune · อ้วน (FFA, adipokine, inflammation) ${S.r}</li>
<li>Histology T2DM: <b>islet amyloid</b> (amylin) · β cell ลดเล็กน้อย · ไม่มี insulitis ${S.r} ${S.fa}</li>
<li>Twin concordance: T1 ~50%, T2 ~90% → พันธุกรรม T2 แรงกว่า ${S.fa}</li>
<li>C-peptide หลั่งเท่ากับ insulin จึงใช้วัดการทำงานของ β cell: ลดใน T1 · สูงในช่วง insulin resistance ${S.r}</li></ul>`});

SEC.push({id:"dka-hhs",k:"b",t:"Hyperglycemic emergencies: DKA vs HHS",mm:"DKA vs HHS",leg:[],tools:[["dk",[["dka","DKA"],["hhs","HHS"]]]],draw:dkaD,
notes:()=>`<ul><li><b>DKA</b>: ขาด insulin (หยุดยา) หรือต้องการเพิ่ม (ติดเชื้อ) + catecholamine/glucagon → lipolysis → ketone (β-OHB &gt; acetoacetate) ${S.fa} ${S.r}</li>
<li>DKA is Deadly: <b>D</b>elirium, <b>K</b>ussmaul, <b>A</b>bdominal pain/อาเจียน, <b>D</b>ehydration · ลมหายใจกลิ่นผลไม้ (acetone) ${S.fa}</li>
<li>เกณฑ์ DKA: glucose &gt; 250, ketosis, HCO₃⁻ &lt; 15–18 + anion gap ↑ · glucose อาจเกือบปกติใน euglycemic DKA (SGLT2 inhibitor) ${S.h}</li>
<li><b>K⁺</b>: serum ปกติหรือสูงเพราะ acidosis + ขาด insulin ดัน K ออกนอกเซลล์ แต่ <b>total body K⁺ ต่ำ</b> จาก osmotic diuresis ${S.fa} ${S.h}</li>
<li><b>HHS</b>: glucose มัก &gt; 600, osm &gt; 320, pH ปกติ ไม่มี ketone · ผู้สูงอายุ T2DM ที่ดื่มน้ำไม่พอ · ซึม สับสน ชัก focal deficit ${S.fa} ${S.r}</li>
<li>HHS ขาดน้ำมากกว่าและอัตราตายสูงกว่า DKA (ถึง ~15%) ${S.h}</li>
<li>รักษา: IV fluid + IV insulin + K⁺ · ให้ dextrose เมื่อ glucose ลดเพื่อกัน hypoglycemia · ถ้า K⁺ &lt; 3.3 แก้ K ก่อน insulin ${S.fa} ${S.h}</li>
<li>ภาวะแทรกซ้อน DKA: cerebral edema (เด็ก ขณะรักษา), arrhythmia, <b>mucormycosis</b> ${S.fa} ${S.h}</li>
<li>หลังเริ่มรักษา ภาวะแทรกซ้อนเฉียบพลันที่พบบ่อยที่สุดคือ hypoglycemia ${S.r}</li></ul>`});

SEC.push({id:"dm-comp",k:"b",t:"Chronic complications of diabetes",mm:"Chronic complications",leg:[],tools:[["cm",[["micro","Microvascular"],["macro","Macrovascular"],["polyol","Polyol (osmotic)"]]]],draw:dmCompD,
notes:()=>`<ul><li>ภาวะแทรกซ้อนเรื้อรังคล้ายกันทั้ง T1 และ T2 · มักเริ่มหลังเป็น 15–20 ปี และเป็นสาเหตุหลักของ morbidity/mortality ${S.r}</li>
<li>กลไกจาก glucose สูง: <b>AGE</b> (glycation โดยไม่ใช้เอนไซม์) จับ RAGE, PKC activation, <b>polyol pathway</b>, hexosamine pathway ${S.r}</li>
<li>Polyol: aldose reductase เปลี่ยน glucose → sorbitol โดยใช้ NADPH → GSH ลด → oxidative stress · sorbitol คั่งใน lens → cataract ${S.r} ${S.fa}</li>
<li><b>Microvascular</b> (hyaline arteriolosclerosis, BM หนา): retinopathy, nephropathy, neuropathy ${S.fa} ${S.r}</li>
<li><b>Macrovascular</b> (atherosclerosis): CAD, stroke, PAD · <b>MI เป็นสาเหตุตายอันดับ 1</b> · gangrene ขาพบมากกว่าคนทั่วไป ~100 เท่า ${S.r} ${S.fa}</li>
<li>Neuropathy: sensory แบบ glove-and-stocking, motor, autonomic (GERD, gastroparesis, diabetic diarrhea) ${S.fa}</li>
<li>Autonomic neuropathy ลดการหลั่ง epinephrine → เสี่ยง hypoglycemia unawareness ${S.h}</li></ul>`});

SEC.push({id:"hypogly",k:"b",t:"Hypoglycemia in diabetes mellitus",mm:"Hypoglycemia",leg:[],ctrl:()=>sl("glu","Plasma glucose",40,100,1,"mg/dL"),wire:()=>wireSl(),tools:[["bb","β-blocker / autonomic failure"]],draw:hypoglyD,
notes:()=>`<div class="pearl">เลื่อนน้ำตาลลง: ร่างกายป้องกันเป็นชั้น ๆ · insulin ลด → glucagon → epinephrine → มีอาการจึงกิน · ลองเปิด β-blocker ดูสัญญาณเตือนหายไป ${S.h}</div>
<ul><li>พบในผู้ใช้ <b>insulin หรือ insulin secretagogue</b> (sulfonylurea, meglitinide) ร่วมกับยาขนาดสูง กินน้อย หรือออกกำลังกาย ${S.fa}</li>
<li>Neurogenic (autonomic): เหงื่อ ใจสั่น สั่น วิตก หิว → ทำให้รู้ตัว ${S.fa}</li>
<li>Neuroglycopenic: สับสน ชัก จนถึงตาย จากสมองขาดกลูโคส ${S.fa}</li>
<li>β-blocker หรือ autonomic neuropathy ทำให้ไม่มีอาการเตือน = <b>hypoglycemia unawareness</b> · hypoglycemia ซ้ำ ๆ ยิ่งทำให้ counterregulation เสีย ${S.fa} ${S.h}</li>
<li>Whipple triad: อาการ + glucose ต่ำ + หายเมื่อให้กลูโคส ${S.h} ${S.fa}</li>
<li>รักษา: คาร์โบไฮเดรตเร็ว (ยาเม็ดกลูโคส น้ำผลไม้) · กินไม่ได้ → IM glucagon หรือ IV dextrose ${S.fa}</li>
<li>Glucagon ไม่ได้ผลถ้า glycogen หมด (เช่น hypoglycemia จากแอลกอฮอล์) ${S.h}</li></ul>`});

SEC.push({id:"dm-kidney",k:"b",t:"Diabetic nephropathy & microangiopathy",mm:"Diabetic nephropathy",leg:[],tools:[["dn",[["gbm","BM thickening"],["mes","Mesangial"],["nod","Kimmelstiel-Wilson"]]]],draw:dmKidD,
notes:()=>`<ul><li>รอยโรคไตจาก DM: glomerular (capillary BM หนา, diffuse mesangial sclerosis, nodular glomerulosclerosis), vascular (arteriolosclerosis), pyelonephritis/necrotizing papillitis ${S.r}</li>
<li><b>Kimmelstiel-Wilson</b>: ก้อน matrix รูปไข่ PAS ⊕ ใน mesangium ขอบ glomerulus ${S.r}</li>
<li>Hyaline arteriolosclerosis พบทั้ง afferent และ efferent arteriole · พบใน HTN ด้วยแต่ใน DM รุนแรงกว่า ${S.r}</li>
<li>สัญญาณแรก: microalbuminuria 30–300 mg/วัน → macroalbuminuria &gt; 300 mg/วัน ภายใน 10–15 ปีใน ~80% ของ T1 และ 20–40% ของ T2 ที่ไม่ได้ป้องกัน ${S.r}</li>
<li>Retinopathy เกิด 60–80% หลัง 15–20 ปี · neovascularization · สาเหตุตาบอดอันดับ 1 ในผู้ใหญ่ของสหรัฐฯ ${S.r}</li></ul>`});

const EXTRA=["dm-kidney"];

/* ================= Endocrine Pathology I · Pituitary & Thyroid =================
   First Aid Step 1 2025 (Endocrine pathology, pp. 342–347 + prolactin/pituitary physiology) order
   Robbins & Cotran 10e Ch 24 (pituitary, thyroid) · Harrison 22e (hyponatremia, DI, acromegaly, thyroid nodule)
   FA Step 2 CK (thyroid nodule work-up) · drawings are original schematics. */
//@include _cvs-patho-helpers.js
//@include _endo-patho-helpers.js
Object.assign(GN,{a:"Pituitary & posterior pituitary",b:"Thyroid dysfunction",c:"Thyroid nodules & neoplasms"});
Object.assign(ST,{pa:"prl",ps:"mac",hy:"siadh",di:"cdi",hp:"sheehan",og:"a",tf:"hypo",tl:"graves",td:"dq",gv:"g",tt:"graves",gt:"mng",tc:"pap",nw:"benign"});

/* ---------- 1. pituitary adenoma & hyperprolactinemia ---------- */
const PA={prl:{n:"Lactotroph adenoma (prolactinoma)",c:"#C2577A",tl:"PRL",fx:["หญิง: amenorrhea · galactorrhea · มีบุตรยาก","ชายและหญิงสูงวัย: libido ↓ อาการน้อย จึงมักพบตอนก้อนใหญ่แล้ว","ระดับ prolactin สัมพันธ์กับขนาดก้อน"],dx:"serum prolactin + MRI",rx:"dopamine agonist (cabergoline, bromocriptine) ทำให้ก้อนยุบ"},
 gh:{n:"Somatotroph adenoma",c:"#2F8A78",tl:"GH",fx:["เด็กที่ epiphysis ยังไม่ปิด: gigantism","ผู้ใหญ่: acromegaly","glucose intolerance / DM · HTN · หัวใจโต"],dx:"IGF-1 ↑ · GH ไม่ถูกกดหลังกินกลูโคส",rx:"ผ่าตัด · ไม่หาย → somatostatin analog / pegvisomant"},
 acth:{n:"Corticotroph adenoma = Cushing disease",c:"#C7892B",tl:"ACTH",fx:["Cushing syndrome + ผิวคล้ำ (POMC → MSH)","ส่วนใหญ่เป็น microadenoma","ตัด adrenal ทั้งสองข้าง → Nelson syndrome (ก้อนโต ผิวคล้ำ)"],dx:"ACTH ↑ · high-dose dexamethasone กดได้",rx:"ผ่าตัดผ่าน sphenoid"},
 nf:{n:"Nonfunctioning (gonadotroph, null cell)",c:"#7D5BA6",tl:"NF",fx:["ไม่มีอาการฮอร์โมนเกิน → มาด้วย mass effect","ก้อนใหญ่ทำลายต่อมรอบ ๆ → hypopituitarism (LH ขาดบ่อย)","กด stalk → prolactin สูงเล็กน้อย (stalk effect)"],dx:"MRI + ตรวจ pituitary function ทุกแกน",rx:"ผ่าตัด"}};
function vf(x,y,lab,cut){const eye=(cx,side)=>`<circle cx="${cx}" cy="${y}" r="26" style="fill:#FFFDF6;stroke:var(--sb-line);stroke-width:1.4"/>`+(cut?`<path d="M${cx},${y-26} A26,26 0 0 ${side>0?1:0} ${cx},${y+26} Z" style="fill:#2B2F3A"/>`:"")+dot(cx,y,2,"#2B2F3A");
 return eye(x,-1)+eye(x+66,1)+T(x+33,y+42,lab,{c:"s m"})+T(x,y-32,"L",{c:"s m"})+T(x+66,y-32,"R",{c:"s m"})}
function pitD(){const d=PA[ST.pa],mac=ST.ps==="mac";let b="";
 b+=T(10,22,mac?"Macroadenoma (> 1 cm)":"Microadenoma (< 1 cm)",{a:"start",c:"bh"});
 b+=sella(6,30,1.1,{tumor:mac?40:13,tc:d.c,tl:mac?d.tl:""});
 b+=T(10,354,"ลานสายตา",{a:"start",c:"bh"})+vf(118,348,mac?"bitemporal hemianopia":"ปกติ",mac);
 b+=iPanel(352,10,282,d.n,mac?"ก้อนใหญ่: กด optic chiasm · ปวดหัว":"ก้อนเล็ก: อยู่ในแอ่ง sella",[...d.fx,"ตรวจ: "+d.dx,"รักษา: "+d.rx],d.c);
 return ESVG(b,"0 0 640 404")}

/* ---------- 2. SIADH ---------- */
const HY={siadh:{n:"SIADH",v:"ปกติ (euvolemic)",L:[["Serum osm","↓"],["Urine osm","↑"],["Urine Na⁺","↑"]],s:"urine osm > serum osm · urine Na⁺ > 30 mmol/L",c:CV.violet},
 hypo:{n:"Hypovolemic (เสียจาก GI)",v:"↓ (ขาดน้ำ)",L:[["Serum osm","↓"],["Urine osm","↑↑"],["Urine Na⁺","↓"]],s:"urine Na⁺ < 20 mmol/L · ADH หลั่งเพราะ volume ต่ำ (เหมาะสม)",c:CV.gold},
 poly:{n:"Primary polydipsia",v:"ปกติ",L:[["Serum osm","↓"],["Urine osm","↓↓"],["Urine Na⁺","—"]],s:"urine osm < 100 → ADH ถูกกดเต็มที่ ปัสสาวะเจือจางสุด",c:CV.teal}};
function siadhD(){const h=HY[ST.hy];let b="";
 const st=[["ADH หลั่งเกิน","ไม่ตอบสนองต่อ osmolality ที่ต่ำ",CV.violet],["Collecting duct ดูดน้ำกลับ","aquaporin-2 ↑ → free water คั่ง",CV.dx],["Na⁺ เจือจาง","serum Na⁺ ↓ · serum osm ↓",EN.dn],["ร่างกายชดเชย volume","ANP/BNP ↑ · aldosterone ↓",CV.teal],["Na⁺ ออกทางปัสสาวะต่อเนื่อง","ECF กลับปกติ = euvolemic hyponatremia",CV.good]];
 st.forEach(([t,s,c],i)=>{const y=8+i*68;b+=cardBox(8,y,300,56,t,[s],c);if(i<4)b+=Ar(158,y+57,158,y+67,CV.mut,1.6,{hs:6})});
 b+=`<rect x="330" y="8" width="304" height="232" rx="14" style="fill:color-mix(in srgb,${h.c} 9%,var(--sb-surface));stroke:color-mix(in srgb,${h.c} 45%,transparent)"/>`+T(346,32,"เทียบ hyponatremia: "+h.n,{a:"start",c:"bh"});
 h.L.forEach(([n,v],i)=>b+=labRow(346,64+i*34,272,n,v));b+=T(346,170,"ECF volume",{a:"start",c:"s"})+T(618,170,h.v,{a:"end",c:"bh"});
 b+=wrapT(346,198,h.s,46,"s m",15);
 b+=cardA(330,252,304,"สาเหตุ SIADH (HEELD)",["Head trauma / CNS · Ectopic ADH (small cell lung ca)","Exogenous: desmopressin, oxytocin · Lung disease","Drugs: SSRI, carbamazepine, cyclophosphamide"],CV.violet);
 return ESVG(b,"0 0 640 364")}

/* ---------- 3. DI vs primary polydipsia: water deprivation test ---------- */
const DI={pp:{n:"Primary polydipsia",f:t=>t<=6?150+650*(1-Math.exp(-t/1.5)):803+(t-6)*8,c:CV.teal,R:["ดื่มน้ำมากเกิน (จิตเวช / thirst center)","↓","↓ หรือปกติ","urine osm ขึ้นมาก (> 700)","—","จำกัดน้ำ"]},
 cdi:{n:"Central DI",f:t=>t<=6?110+70*(1-Math.exp(-t/2)):175+170*(1-Math.exp(-(t-6)/.6)),c:CV.violet,R:["ADH หลั่งน้อย (บาดเจ็บ เนื้องอก ผ่าตัด)","↑","↓","แทบไม่เปลี่ยน","ขึ้น > 50%","desmopressin"]},
 ndi:{n:"Nephrogenic DI",f:t=>t<=6?100+50*(1-Math.exp(-t/2)):146+12*(1-Math.exp(-(t-6)/.6)),c:CV.gold,R:["ไตดื้อ ADH (V2 mutation, lithium, Ca²⁺ ↑, K⁺ ↓)","↑","ปกติ / ↑","แทบไม่เปลี่ยน","แทบไม่เปลี่ยน","รักษาต้นเหตุ · thiazide, amiloride, indomethacin"]}};
function diD(){const k=ST.di,d=DI[k];const A=axes(56,16,300,240,[0,8],[0,1000],[0,2,4,6,8],[0,200,400,600,800,1000],"ชั่วโมงที่งดน้ำ","Urine osm (mOsm/kg)");let b=A.g;
 b+=`<rect x="${A.X(6)}" y="16" width="${A.X(8)-A.X(6)}" height="240" style="fill:color-mix(in srgb,${CV.violet} 9%,transparent)"/>`+T(A.X(7),34,"desmopressin",{c:"s"});
 b+=`<path d="M${A.X(0)},${A.Y(700)} H${A.X(8)}" style="stroke:var(--sb-muted);stroke-width:1;stroke-dasharray:4 4"/>`+T(A.X(.1),A.Y(700)-6,"700",{a:"start",c:"s m"});
 Object.entries(DI).forEach(([kk,v])=>{const pts=[];for(let t=0;t<=8.001;t+=.1)pts.push([A.X(t),A.Y(v.f(t))]);b+=curve(pts,v.c,kk===k?3.6:1.6,kk===k?null:"4 4");b+=T(A.X(8)-4,A.Y(v.f(8))-10,v.n,{a:"end",c:kk===k?"bh":"s m"})});
 const rows=["สาเหตุ","Serum osm","ADH","งดน้ำ","Desmopressin","รักษา"];
 b+=`<rect x="384" y="8" width="250" height="300" rx="14" style="fill:color-mix(in srgb,${d.c} 10%,var(--sb-surface));stroke:color-mix(in srgb,${d.c} 45%,transparent)"/>`+T(398,32,d.n,{a:"start",c:"bh"});
 let y=56;rows.forEach((r,i)=>{b+=T(398,y,r,{a:"start",c:"s m"});const v=d.R[i];if(v==="↑"||v==="↓")b+=lv(600,y-4,v);else{b+=wrapT(398,y+16,v,38,"s",14);y+=14*nLines(v,38)}y+=i===0?24:30});
 return ESVG(b,"0 0 640 314")}

/* ---------- 4. hypopituitarism ---------- */
const HP={sheehan:{n:"Sheehan syndrome",o:{infarct:true},m:"ตั้งครรภ์ต่อม anterior โตเกือบ 2 เท่าแต่เลือดมาเท่าเดิม → ตกเลือดหลังคลอด/shock → infarct",H:[["GH","↓"],["LH / FSH","↓"],["TSH","↓"],["ACTH","↓"],["Prolactin","↓"],["ADH","N"]],c:"#B98A5A",k:"ไม่มีน้ำนม · ประจำเดือนไม่มา · ขี้หนาว"},
 empty:{n:"Empty sella syndrome",o:{empty:true},m:"diaphragma sellae บกพร่อง → arachnoid + CSF ดันลงมา แอ่งกว้าง ต่อมแบนติดพื้น",H:[["GH","N"],["LH / FSH","N"],["TSH","N"],["ACTH","N"],["Prolactin","↑"],["ADH","N"]],c:"#3C8DBC",k:"มักพบโดยบังเอิญ (หญิงอ้วน ตั้งครรภ์หลายครั้ง) · บางรายลานสายตาผิด"},
 apop:{n:"Pituitary apoplexy",o:{tumor:30,hem:true,tc:"#7D5BA6"},m:"เลือดออกเฉียบพลันในก้อน adenoma → ก้อนขยายเร็ว กดโครงสร้างรอบ ๆ",H:[["GH","↓"],["LH / FSH","↓"],["TSH","↓"],["ACTH","↓↓"],["Prolactin","↓"],["ADH","N"]],c:"#B3263B",k:"ปวดหัวรุนแรงทันที · เห็นภาพซ้อน · ความดันตก = เร่งด่วน"},
 mass:{n:"Suprasellar / hypothalamic mass",o:{supra:true},m:"เช่น craniopharyngioma · ขาด releasing hormone และ ADH · ตัดการกด prolactin ด้วย dopamine",H:[["GH","↓"],["LH / FSH","↓"],["TSH","↓"],["ACTH","↓"],["Prolactin","↑"],["ADH","↓"]],c:"#9C8A3A",k:"มี DI ร่วม = มักมาจาก hypothalamus"}};
function hypopitD(){const d=HP[ST.hp];let b=sella(14,4,1.06,d.o);
 b+=cardA(8,276,330,d.n,[d.m],d.c);
 b+=`<rect x="354" y="6" width="280" height="354" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(370,30,"ฮอร์โมน",{a:"start",c:"bh"});
 d.H.forEach(([n,v],i)=>{const y=58+i*36;b+=`<rect x="366" y="${y-14}" width="256" height="28" rx="9" style="fill:var(--sb-surface)"/>`+T(378,y+4,n,{a:"start",c:"s"})+T(470,y+4,i===5?"posterior":"anterior",{a:"start",c:"s m"})+lv(596,y,v)});
 b+=wrapT(370,286,d.k,42,"s",15);
 return ESVG(b,"0 0 640 372")}

/* ---------- 5. acromegaly ---------- */
function acroD(){const a=ST.og==="a",bp=(x,y)=>[112+.8*x,10+.8*y];let b=bodyFig(112,10,.8,{acro:true});
 const co=(px,py,lx,ly,t,c,an)=>{const [x1,y1]=bp(px,py);return callout(x1,y1,lx,ly,t,c,an)};
 b+=co(100,26,104,20,"frontal bossing",CV.acc,"end")+co(96,78,104,76,"ขากรรไกรยื่น · ลิ้นโต",CV.acc,"end")+co(100,150,104,140,"หัวใจโต (LVH, HFpEF)",CV.bad,"end")+co(64,190,104,200,"เหงื่อมาก · ข้อเสื่อม",CV.acc,"end")+co(40,250,104,262,"มือโต นิ้วหนา",CV.acc,"end")+co(80,396,104,326,"เท้าโต",CV.acc,"end");
 const A=axes(342,16,282,190,[0,120],[0,12],[0,30,60,90,120],[0,3,6,9,12],"นาทีหลังกลูโคส 75 g","GH (µg/L)");b+=A.g;
 const fn=t=>3*Math.exp(-t/22)+.15,fa=t=>10+.6*Math.sin(t/20);
 const P=f=>{const p=[];for(let t=0;t<=120;t+=2)p.push([A.X(t),A.Y(f(t))]);return p};
 b+=curve(P(fn),CV.good,a?1.6:3.6,a?"4 4":null)+curve(P(fa),CV.bad,a?3.6:1.6,a?null:"4 4");
 b+=`<path d="M${A.X(0)},${A.Y(.4)} H${A.X(120)}" style="stroke:${CV.good};stroke-width:1;stroke-dasharray:3 3"/>`+T(A.X(120)-2,A.Y(.4)-6,"< 0.4",{a:"end",c:"s m"});
 b+=T(A.X(60),A.Y(a?10.6:1.6)-10,a?"Acromegaly: GH ไม่ถูกกด":"ปกติ: GH ถูกกด",{c:"bh"});
 b+=cardBox(300,250,334,108,"วินิจฉัย → รักษา",["IGF-1 ↑ (GH เดี่ยว ๆ แกว่งตลอดวัน ใช้ไม่ได้) · MRI","ตัด adenoma → octreotide / pegvisomant / cabergoline"],CV.teal);
 return ESVG(b,"0 0 640 366")}

/* ---------- 6. hypo vs hyperthyroidism ---------- */
const TF={hypo:[["Metabolic","ขี้หนาว · น้ำหนักขึ้น · เหงื่อน้อย · Na⁺ ↓"],["Skin","แห้ง เย็น · myxedema (GAG สะสม กดไม่บุ๋ม)"],["Eye","หนังตาบวม"],["GI","ท้องผูก · เบื่ออาหาร"],["Muscle","proximal weakness · CK ↑ · carpal tunnel"],["Neuro","เฉื่อย ซึมเศร้า · reflex คลายช้า"],["CV","หัวใจเต้นช้า · CO ↓"],["Lab","LDL ↑ (LDL receptor ↓)"]],
 hyper:[["Metabolic","ขี้ร้อน · น้ำหนักลดแม้กินมาก · เหงื่อมาก"],["Skin","อุ่น ชื้น · ผมบาง · onycholysis"],["Eye","lid lag / retraction · Graves: exophthalmos"],["GI","ถ่ายบ่อย (hyperdefecation)"],["Muscle","proximal weakness (CK ปกติ) · กระดูกพรุน"],["Neuro","กระสับกระส่าย นอนไม่หลับ · fine tremor"],["CV","ใจสั่น · AF · systolic HTN"],["Lab","cholesterol ↓"]]};
function thyFuncD(){const h=ST.tf==="hyper",c=h?EN.up:EN.dn;let b=bodyFig(14,8,.84,h?{graves:true}:{myx:true,goiter:true});
 b+=T(98,356,h?"Hyperthyroidism":"Hypothyroidism",{c:"bh"});
 TF[ST.tf].forEach(([s,t],i)=>{const y=8+i*44;b+=`<rect x="200" y="${y}" width="434" height="38" rx="10" style="fill:color-mix(in srgb,${c} ${i%2?6:10}%,var(--sb-surface));stroke:color-mix(in srgb,${c} 30%,transparent)"/>`+`<rect x="200" y="${y}" width="86" height="38" rx="10" style="fill:${c}"/>`+`<text x="243" y="${y+23}" text-anchor="middle" style="font:750 11px var(--sb-font);fill:#fff">${s}</text>`+T(298,y+23,t,{a:"start",c:"s"})});
 return ESVG(b,"0 0 640 364")}

/* ---------- 7. thyroid function tests ---------- */
const TLB={phypo:{n:"Primary hypothyroidism",v:["↑","↑","↓"],les:2,raiu:"—",t:"TSH ↑ + free T4 ↓ · สาเหตุหลัก Hashimoto"},
 sub:{n:"Subclinical hypothyroidism",v:["N","↑","N"],les:2,raiu:"—",t:"TSH ↑ แต่ free T4 ยังปกติ"},
 central:{n:"Central (2°) hypothyroidism",v:["N","↓","↓"],les:1,raiu:"—",t:"T4 ต่ำ แต่ TSH ไม่ขึ้น (ต่ำหรือปกติอย่างไม่เหมาะสม)"},
 graves:{n:"Graves disease",v:["↓","↓","↑"],les:null,ext:"TSI",raiu:"↑ ทั่วต่อม",t:"TSH ต่ำมาก + free T4/T3 ↑"},
 tsha:{n:"TSH-secreting adenoma",v:["↓","↑","↑"],les:1,raiu:"↑",t:"T4 สูงแต่ TSH ไม่ถูกกด = 2° hyperthyroidism (พบน้อย)"},
 exo:{n:"Exogenous thyroid hormone",v:["↓","↓","↑"],les:null,ext:"ยา T4",raiu:"↓",t:"T4 สูง TSH ต่ำ แต่ต่อมไม่จับ iodine"},
 sick:{n:"Euthyroid sick syndrome",v:["N","N","↓"],les:null,raiu:"—",t:"ป่วยหนัก: T3 ↓ · T4 ปกติหรือ ↓ · TSH ปกติ"}};
function thyLabD(){const d=TLB[ST.tl];let b=axisD(20,8,{n:[["Hypothalamus","TRH"],["Pituitary","TSH"],["Thyroid",ST.tl==="sick"?"T3 (T4 N)":"free T4 / T3"]],v:d.v,lesion:d.les,ext:d.ext,gc:EN.thy});
 b+=`<rect x="330" y="8" width="304" height="200" rx="14" style="fill:color-mix(in srgb,${CV.acc} 8%,var(--sb-surface));stroke:color-mix(in srgb,${CV.acc} 40%,transparent)"/>`+T(346,34,d.n,{a:"start",c:"bh"})+wrapT(346,58,d.t,46,"s",15);
 b+=T(346,120,"Radioactive iodine uptake",{a:"start",c:"s m"})+T(618,120,d.raiu,{a:"end",c:"bh"});
 b+=wrapT(346,150,"TSH คือการตรวจคัดกรองที่ไวที่สุด แต่แปลผลไม่ได้ถ้าโรคอยู่ที่ pituitary",46,"s m",15);
 b+=cardBox(330,220,304,110,"ลำดับตรวจ",["1. TSH → 2. free T4 (± T3)","3. ถ้า thyrotoxic: RAIU / scan บอกสาเหตุ","4. antibody: TPO, Tg (Hashimoto) · TSI (Graves)"],CV.teal);
 return ESVG(b,"0 0 640 338")}

/* ---------- 8. thyroiditis ---------- */
const TD8={hashi:{n:"Hashimoto thyroiditis",he:"hashi",cap:"lymphoid follicle + germinal center · Hürthle cells",c:"#7A5BC7",
  f:t=>t<1?.35*t:.35-Math.min(1.25,(t-1)*.11),tags:[["ไม่เจ็บ","#7C8798"],["anti-TPO / anti-Tg ⊕","#7A5BC7"],["ต่อมโตแข็ง ไม่กดเจ็บ","#7C8798"]]},
 pp:{n:"Postpartum / painless thyroiditis",he:"lymph",cap:"lymphocytic infiltrate · ไม่มี Hürthle หรือ fibrosis เด่น",c:"#2F8A78",
  f:t=>t<2?.75*Math.sin(t/2*Math.PI):t<5?-.7*Math.sin((t-2)/3*Math.PI):0,tags:[["ไม่เจ็บ","#7C8798"],["anti-TPO ⊕ บ่อย","#2F8A78"],["< 1 ปีหลังคลอด","#7C8798"]]},
 dq:{n:"Subacute granulomatous (de Quervain)",he:"dq",cap:"multinucleate giant cell ล้อม colloid",c:"#C2493A",
  f:t=>t<2?.85*Math.sin(t/2*Math.PI):t<3?0:t<5.5?-.6*Math.sin((t-3)/2.5*Math.PI):0,tags:[["เจ็บมาก · ปวดกราม","#C2493A"],["ESR ↑","#C2493A"],["หลังติดเชื้อไวรัส","#7C8798"]]},
 riedel:{n:"Riedel thyroiditis",he:"riedel",cap:"fibrosis แทนที่ต่อมและลามออกนอก capsule",c:"#8C6D46",
  f:t=>-Math.min(.45,t*.07),tags:[["แข็งเหมือนหิน ติดแน่น","#8C6D46"],["IgG4-related","#8C6D46"],["คล้าย anaplastic ca","#7C8798"]]}};
function thyroiditisD(){const d=TD8[ST.td];let b=thyHE(8,8,300,232,d.he)+T(158,262,d.cap,{c:"s m"});
 const x0=340,y0=28,W=290,H=200,Y=v=>y0+H/2-v*H/2*.9,X=t=>x0+t/8*W;
 b+=`<rect x="${x0}" y="${y0}" width="${W}" height="${H/2-30}" rx="6" style="fill:color-mix(in srgb,${EN.up} 9%,transparent)"/><rect x="${x0}" y="${y0+H/2+30}" width="${W}" height="${H/2-30}" rx="6" style="fill:color-mix(in srgb,${EN.dn} 9%,transparent)"/>`;
 b+=T(x0+6,y0+16,"hyperthyroid",{a:"start",c:"s m"})+T(x0+6,y0+H/2+4,"euthyroid",{a:"start",c:"s m"})+T(x0+6,y0+H-8,"hypothyroid",{a:"start",c:"s m"})+T(x0+W/2,y0+H+20,"เวลา (เดือน) →",{c:"s m"});
 const pts=[];for(let t=0;t<=8;t+=.05)pts.push([X(t),Y(d.f(t))]);b+=curve(pts,d.c,3.4);
 b+=T(x0,18,"การดำเนินโรค (thyroid function)",{a:"start",c:"bh"});
 let tx=344,ty=272;d.tags.forEach(([t,c])=>{const w=t.length*6.1+22;if(tx+w>634){tx=344;ty+=26}b+=tag(tx+w/2,ty,t,c,{w});tx+=w+6});
 b+=`<rect x="8" y="318" width="626" height="42" rx="12" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(22,344,"ช่วง hyperthyroid จาก thyroiditis = ฮอร์โมนรั่วจาก follicle ที่แตก → RAIU ต่ำ (ต่างจาก Graves ที่ RAIU สูง)",{a:"start",c:"s"});
 return ESVG(b,"0 0 640 366")}

/* ---------- 9. congenital hypothyroidism & other causes ---------- */
function congD(){let b="";
 b+=`<rect x="8" y="8" width="300" height="168" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(22,32,"T4 ของแม่กับสมองทารก",{a:"start",c:"bh"});
 b+=`<rect x="22" y="54" width="272" height="16" rx="8" style="fill:color-mix(in srgb,${CV.violet} 30%,var(--sb-surface))"/>`+`<rect x="22" y="54" width="120" height="16" rx="8" style="fill:${CV.violet}"/>`+T(82,66,"แม่ส่ง T4 ผ่านรก",{c:"s w"})+T(220,66,"ต่อมทารกทำงานเอง",{c:"s"});
 b+=cardBox(22,82,132,84,"แม่ขาดช่วงแรก",["ก่อนต่อมทารกทำงาน → สมองเสียมาก"],EN.up,{tint:12})+cardBox(162,82,132,84,"แม่ขาดช่วงหลัง",["ต่อมทารกทำงานแล้ว → สมองไม่กระทบ"],CV.good,{tint:12});
 b+=cardBox(8,186,300,150,"Congenital hypothyroidism (6 P's)",["Pot-bellied · Pale · Puffy face","Protruding umbilicus (hernia) · Protuberant tongue","Poor brain development (IQ ↓)","สาเหตุ: dysgenesis (agenesis, ectopy) · dyshormonogenesis (TPO)"],CV.violet);
 const C=[["Iodine deficiency","สาเหตุอันดับ 1 ทั่วโลก · มาด้วย goiter",EN.col],["Iodine excess","Wolff-Chaikoff: iodide มาก กด organification",CV.gold],["ยา","amiodarone · lithium",CV.teal],["Euthyroid sick","ป่วยหนัก: T3 ↓ · T4/TSH ปกติหรือ ↓",EN.nl],["Iatrogenic","ผ่าตัด / radioiodine ทำลายต่อม",CV.dx],["Central","pituitary / hypothalamus (พบน้อย)",CV.violet]];
 C.forEach(([t,s,c],i)=>b+=cardBox(324,8+i*55,310,48,t,[s],c));
 return ESVG(b,"0 0 640 342")}

/* ---------- 10. Graves disease ---------- */
function gravesD(){const g=ST.gv==="g";let b="";
 const ab=(x,y)=>`<path d="M${x},${y+14} V${y+4} L${x-7},${y-6} M${x},${y+4} L${x+7},${y-6}" style="fill:none;stroke:${CV.violet};stroke-width:3;stroke-linecap:round"/>`;
 b+=`<rect x="8" y="8" width="300" height="56" rx="14" style="fill:color-mix(in srgb,${CV.violet} 12%,var(--sb-surface));stroke:color-mix(in srgb,${CV.violet} 50%,transparent)"/>`+ab(32,26)+T(52,30,"TSI (IgG) กระตุ้น TSH receptor",{a:"start",c:"bh"})+T(52,48,"type II hypersensitivity · ผ่านรกได้ (neonatal)",{a:"start",c:"s m"});
 const T3=[["Thyrocyte","hyperthyroidism + diffuse goiter",EN.thy],["Orbital fibroblast","GAG ↑ · กล้ามเนื้อบวม · ไขมัน ↑ → exophthalmos",CV.gold],["Dermal fibroblast","pretibial myxedema (บางราย)",CV.teal]];
 T3.forEach(([t,s,c],i)=>{const y=80+i*86;b+=Ar(40,y-14,40,y+6,CV.violet,2,{hs:7})+`<rect x="8" y="${y+6}" width="300" height="70" rx="12" style="fill:color-mix(in srgb,${c} 12%,var(--sb-surface));stroke:color-mix(in srgb,${c} 50%,transparent)"/>`+
  `<circle cx="38" cy="${y+41}" r="18" style="fill:${c};opacity:.85"/>`+ab(38,y+30)+T(66,y+34,t,{a:"start",c:"bh"})+wrapT(66,y+52,s,38,"s",14)});
 b+=thyHE(330,8,304,250,g?"graves":"normal")+T(482,280,g?"Graves: เซลล์สูง แน่น · colloid ซีด ขอบหยัก (scalloped)":"ปกติ: เซลล์ cuboidal · colloid เต็ม",{c:"s m"});
 b+=`<rect x="330" y="296" width="304" height="44" rx="12" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(344,322,"Lab: TSH ↓ · free T4/T3 ↑ · RAIU ↑ ทั่วต่อม",{a:"start",c:"s"});
 return ESVG(b,"0 0 640 346")}

/* ---------- 11. thyrotoxicosis: RAIU patterns, toxic nodules, storm ---------- */
const TT={graves:{n:"Graves disease",scan:"diffuse",t:"จับทั่วต่อมสม่ำเสมอ · TSI กระตุ้นทุกเซลล์",r:"↑ diffuse"},
 tmng:{n:"Toxic multinodular goiter",scan:"patchy",t:"หลายก้อนทำงานเองโดยไม่ขึ้นกับ TSH (TSH-R mutation) · ส่วนที่เหลือถูกกด",r:"↑ เป็นหย่อม"},
 toxad:{n:"Toxic adenoma",scan:"hot",t:"ก้อนเดียวจับแน่น (hot) · ต่อมที่เหลือถูกกด · hot nodule แทบไม่เป็นมะเร็ง",r:"hot nodule"},
 thyr:{n:"Thyroiditis (painful / painless)",scan:"low",t:"ฮอร์โมนรั่วจาก follicle ที่แตก · ไม่ได้สร้างใหม่",r:"↓"},
 exo:{n:"Exogenous / struma ovarii",scan:"low",t:"ฮอร์โมนมาจากนอกต่อม → ต่อมถูกกดและไม่จับ iodine",r:"↓"}};
function thyrotoxD(){const d=TT[ST.tt];let b=thyroidG(0,0,1.2,{scan:d.scan,seed:ST.tt.length*7+3})+T(156,272,"RAIU scan: "+d.r,{c:"bh"});
 b+=`<rect x="330" y="10" width="304" height="132" rx="14" style="fill:color-mix(in srgb,${CV.acc} 9%,var(--sb-surface));stroke:color-mix(in srgb,${CV.acc} 40%,transparent)"/>`+T(346,36,d.n,{a:"start",c:"bh"})+wrapT(346,60,d.t,46,"s",15);
 b+=`<rect x="330" y="154" width="304" height="186" rx="14" style="fill:color-mix(in srgb,${EN.up} 9%,var(--sb-surface));stroke:color-mix(in srgb,${EN.up} 45%,transparent)"/>`+T(346,180,"Thyroid storm",{a:"start",c:"bh"})+wrapT(346,200,"hyperthyroid ที่คุมไม่ดี + stress (ติดเชื้อ ผ่าตัด) → ไข้ สับสน ท้องเสีย tachyarrhythmia (สาเหตุตาย)",46,"s",14);
 [["β-blocker","propranolol"],["PTU","กดการสร้าง + T4→T3"],["glucocorticoid","กด T4→T3"],["potassium iodide","ให้หลัง PTU 1 ชม."]].forEach(([n,s],i)=>{const x=346+(i%2)*144,y=262+Math.floor(i/2)*38;b+=`<rect x="${x}" y="${y-14}" width="136" height="32" rx="9" style="fill:var(--sb-surface)"/>`+T(x+8,y,n,{a:"start",c:"bh"})+T(x+8,y+13,s,{a:"start",c:"s m"})});
 return ESVG(b,"0 0 640 346")}

/* ---------- 12. goiter & adenoma ---------- */
const GT={diffuse:{n:"Diffuse (simple) goiter",o:{k:1.18},t:"ขาด iodine / goitrogen → TSH ↑ → follicle hyperplasia ทั่วต่อม · ส่วนใหญ่ euthyroid",c:EN.col},
 mng:{n:"Multinodular goiter",o:{k:1.25,lumpy:[[70,90,16],[192,104,20],[86,156,18],[178,160,14],[66,124,10]]},t:"hyperplasia สลับ involution ซ้ำ ๆ → ก้อนหลายก้อน ใหญ่ได้มาก ลงหลังกระดูกอก · ~10% เกิดก้อน autonomous (toxic MNG)",c:CV.gold},
 aden:{n:"Follicular adenoma",o:{nod:[[184,118,26,"cold"]]},t:"ก้อนเดียว มี capsule สมบูรณ์ · ส่วนมาก cold · ส่วนน้อยเป็น toxic (hot)",c:CV.violet}};
function goiterD(){const d=GT[ST.gt];let b=thyroidG(10,4,1.2,Object.assign({id:1},d.o));
 b+=cardBox(330,8,304,120,d.n,[d.t],d.c);
 if(ST.gt==="aden")b+=thyHE(330,140,304,150,"aden")+T(482,308,"capsule ล้อมรอบ ไม่มีการลุกลาม",{c:"s m"});
 else b+=cardBox(330,140,304,72,"ต่อมโตเรียบ (smooth)",["Graves · Hashimoto · ขาด iodine · TSH adenoma"],CV.teal)+cardBox(330,220,304,72,"ต่อมโตเป็นก้อน (nodular)",["toxic MNG · adenoma · มะเร็ง · cyst"],CV.gold);
 b+=T(166,282,"อาการจากก้อน: กลืนลำบาก · หายใจลำบาก · SVC ถูกกด",{c:"s m"});
 return ESVG(b,"0 0 640 316")}

/* ---------- 13. thyroid cancers ---------- */
const TC={pap:{n:"Papillary carcinoma",p:"~85% · พบบ่อยสุด",c:"#C2577A",R:["nuclei ใส (Orphan Annie) · nuclear groove · psammoma","ลาม lymphatic → ต่อมน้ำเหลืองที่คอ","RET/PTC · BRAF V600E · รังสีวัยเด็ก","พยากรณ์ดีมาก"]},
 fol:{n:"Follicular carcinoma",p:"10–15%",c:"#2F8A78",R:["follicle สม่ำเสมอ · ต้องเห็น capsular / vascular invasion","ลาม hematogenous (กระดูก ปอด)","RAS · PAX8-PPARγ","FNA แยก adenoma กับ carcinoma ไม่ได้"]},
 med:{n:"Medullary carcinoma",p:"~5% · จาก C cell",c:"#C7892B",R:["sheets ของเซลล์ใน amyloid stroma (Congo red ⊕)","calcitonin ↑ (และ CEA)","RET · MEN 2A/2B","carrier ของ RET → ตัดต่อมป้องกัน"]},
 ana:{n:"Anaplastic carcinoma",p:"< 5% · ผู้สูงอายุ",c:"#5B5F6E",R:["เซลล์ pleomorphic / spindle / giant cell","ก้อนโตเร็ว กดหลอดลม หลอดอาหาร เสียงแหบ","มักเกิดจาก dedifferentiation ของ papillary/follicular · TP53","พยากรณ์แย่มาก (ตายใน < 1 ปี)"]}};
function thyCaD(){const d=TC[ST.tc];let b=thyHE(8,8,300,250,{pap:"pap",fol:"fol",med:"med",ana:"ana"}[ST.tc]);
 b+=iPanel(326,8,308,d.n,d.p,d.R,d.c);
 b+=`<rect x="8" y="272" width="626" height="70" rx="12" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(22,294,"ภาวะแทรกซ้อนจากผ่าตัดต่อมไทรอยด์",{a:"start",c:"bh"});
 [["parathyroid ถูกตัด","hypocalcemia"],["recurrent laryngeal n.","เสียงแหบ (ผูก inferior thyroid a.)"],["ext. branch superior laryngeal n.","เสียงสูงหาย"]].forEach(([n,s],i)=>{const x=22+i*206;b+=T(x,316,n,{a:"start",c:"s"})+T(x,332,s,{a:"start",c:"s m"})});
 return ESVG(b,"0 0 640 348")}

/* ---------- 14. thyroid nodule work-up ---------- */
const NW={nodes:{start:[170,6,300,44,"Thyroid nodule","คลำได้ หรือเจอจาก imaging",CV.acc],tsh:[220,70,200,38,"ตรวจ TSH","",CV.acc],
 low:[10,132,200,50,"TSH ต่ำ","→ radionuclide scan",EN.up],norm:[430,132,200,50,"TSH ปกติ / สูง","→ ultrasound + ต่อมน้ำเหลือง",CV.teal],
 hot:[10,212,200,62,"Hot nodule","แทบไม่เป็นมะเร็ง · ไม่ต้อง FNA · รักษา hyperthyroid","#E07B2E"],us:[430,212,200,62,"FNA ตามขนาด + ลักษณะ US","ก้อน < 1 cm มักไม่ต้อง FNA",CV.teal],
 ben:[250,306,120,62,"Benign","ติดตามด้วย US",CV.good],ind:[380,306,120,62,"AUS / FN","FNA ซ้ำ หรือ molecular",CV.gold],mal:[510,306,120,62,"Malignant","หรือ suspicious → ผ่าตัด",EN.up]},
 edges:[["start","tsh"],["tsh","low"],["tsh","norm"],["low","hot","hot"],["low","us","cold",[[210,157],[320,157],[320,243],[430,243]]],["norm","us"],["us","ben"],["us","ind"],["us","mal"]]};
const NWP={hot:["start","tsh","low","hot"],benign:["start","tsh","norm","us","ben"],indet:["start","tsh","norm","us","ind"],malig:["start","tsh","norm","us","mal"]};
function noduleD(){let b=tree(NW,NWP[ST.nw]);
 const B=[["I","nondiag",13],["II","benign",4],["III","AUS",22],["IV","FN",30],["V","suspicious",74],["VI","malignant",97]];
 b+=T(10,398,"Bethesda (FNA cytology) · ความเสี่ยงมะเร็งเฉลี่ย",{a:"start",c:"bh"});
 B.forEach(([r,n,p],i)=>{const x=10+i*104,c=`color-mix(in srgb,${EN.up} ${10+p*.8}%,var(--sb-surface))`;b+=`<rect x="${x}" y="408" width="98" height="46" rx="10" style="fill:${c};stroke:var(--sb-line)"/>`+T(x+49,426,r+" · "+n,{c:"s"})+T(x+49,446,p+"%",{c:"bh"})});
 return ESVG(b,"0 0 640 462")}

/* ---------- extra: craniopharyngioma & other sellar masses ---------- */
function sellarD(){let b=sella(10,4,1.06,{supra:true});
 b+=cardBox(330,8,304,118,"Adamantinomatous (เด็ก)",["มี calcification · cyst น้ำเหมือน machine oil","wet keratin · palisading · β-catenin (CTNNB1)"],CV.gold);
 b+=cardBox(330,134,304,86,"Papillary (ผู้ใหญ่)",["ไม่มี calcification · BRAF V600E"],CV.teal);
 b+=cardBox(330,228,304,86,"Rathke cleft cyst",["ciliated cuboidal epithelium · ขยายกดต่อม"],CV.violet);
 b+=cardBox(8,282,310,92,"อาการ",["ปวดหัว · ลานสายตาผิด (กด chiasm)","เด็กโตช้า (GH ↓) · อาจมี DI"],EN.up);
 return ESVG(b,"0 0 640 382")}

/* ================= sections ================= */
SEC.push({id:"pit-adenoma",k:"a",t:"Pituitary adenomas & hyperprolactinemia",mm:"Pituitary adenoma · prolactinoma",leg:[],tools:[["pa",[["prl","Prolactin"],["gh","GH"],["acth","ACTH"],["nf","Nonfunctioning"]]],["ps",[["mic","Micro"],["mac","Macro"]]]],draw:pitD,
notes:()=>`<div class="pearl">เลือกชนิดและขนาดก้อน: ก้อน &gt; 1 cm กด optic chiasm จากด้านล่าง → เสียลานสายตาด้านนอกทั้งสองข้าง ${S.r}</div>
<ul><li>สาเหตุที่พบบ่อยที่สุดของ hyperpituitarism คือ <b>adenoma ของ anterior lobe</b> · microadenoma &lt; 1 cm, macroadenoma &gt; 1 cm ${S.r}</li>
<li>Histology: เซลล์<b>หน้าตาเดียวกันหมด (monomorphic)</b> และ<b>ไม่มี reticulin network</b> ต่างจากต่อมปกติที่มีเซลล์หลายชนิดปนกัน ${S.r}</li>
<li><b>Lactotroph adenoma</b> พบบ่อยที่สุดในกลุ่มที่สร้างฮอร์โมน (~30%) · prolactin ทำให้ amenorrhea, galactorrhea, libido ↓, มีบุตรยาก ${S.r}</li>
<li>Prolactin ถูก<b>กดตลอดเวลาด้วย dopamine</b> จาก hypothalamus · prolactin เองกด GnRH → ประจำเดือนไม่มา ${S.fa}</li>
<li>Hyperprolactinemia ที่<b>ไม่ใช่ prolactinoma</b>: ตั้งครรภ์ ให้นม ความเครียด, ยาต้าน dopamine (antipsychotic), ก้อนกด stalk, hypothyroidism (TRH ↑), ไตวาย ${S.r} ${S.h}</li>
<li>ก้อนที่ไม่สร้างฮอร์โมนแต่กด stalk ทำให้ prolactin สูงได้เล็กน้อย จึง<b>ไม่ได้แปลว่าเป็น prolactinoma เสมอ</b> ${S.r}</li>
<li>รักษา prolactinoma ด้วย <b>dopamine agonist</b> (bromocriptine, cabergoline) ซึ่งทำให้ก้อนยุบ ${S.r} ${S.fa}</li>
<li>Corticotroph adenoma = <b>Cushing disease</b> (มักเป็น microadenoma) · ผู้ที่ตัด adrenal ทั้งสองข้างอาจเกิด <b>Nelson syndrome</b>: ก้อนโต + ผิวคล้ำ แต่ไม่มี hypercortisolism ${S.r}</li>
<li>Gonadotroph และ null cell adenoma มักไม่มีอาการฮอร์โมนเกิน → มาด้วยตามัว ปวดหัว และ hypopituitarism · ก้อนตกเลือดเฉียบพลัน = <b>pituitary apoplexy</b> ${S.r}</li>
<li>Somatic <b>GNAS</b> mutation (Gsα ทำงานตลอด → cAMP ↑) พบใน ~40% ของ somatotroph adenoma · germline MEN1 ทำให้เกิด adenoma ได้หลายชนิด ${S.r}</li></ul>`});

SEC.push({id:"siadh",k:"a",t:"Syndrome of inappropriate ADH secretion",mm:"SIADH",leg:[],tools:[["hy",[["siadh","SIADH"],["hypo","Hypovolemic"],["poly","Polydipsia"]]]],draw:siadhD,
notes:()=>`<div class="pearl">แตะเทียบ: hyponatremia ทั้งสามแบบ serum osm ต่ำเหมือนกัน · แยกด้วย <b>urine osm, urine Na⁺ และ volume</b> ${S.h}</div>
<ul><li>SIADH: free water คั่ง → <b>euvolemic hyponatremia</b> โดยไตยังขับ Na⁺ ต่อเนื่อง · <b>urine osm &gt; serum osm</b> ${S.fa}</li>
<li>ร่างกายตอบสนองต่อน้ำที่คั่งด้วย aldosterone ↓ และ ANP/BNP ↑ → ขับ Na⁺ ทางปัสสาวะ → ECF กลับมาปกติ จึง<b>ไม่บวม</b> ${S.fa} ${S.r}</li>
<li>Urine Na⁺ &gt; 30 mmol/L เข้ากับ SIAD · &lt; 20 เข้ากับ hypovolemia จากนอกไต · urine osm &lt; 100 บ่งชี้ polydipsia ${S.h}</li>
<li>สาเหตุ (HEELD-up water): Head trauma/CNS, <b>Ectopic ADH</b> (small cell lung cancer), Exogenous hormone (desmopressin, oxytocin), Lung disease, Drugs (SSRI, carbamazepine, cyclophosphamide) ${S.fa}</li>
<li>อาการหลักมาจาก hyponatremia → สมองบวม · ซึม สับสน ชัก ${S.r}</li>
<li>ต้อง<b>ตัด adrenal insufficiency ออกก่อน</b>วินิจฉัย SIAD ${S.h}</li>
<li>รักษา: <b>จำกัดน้ำ</b>เป็นอันดับแรก → urea หรือ tolvaptan · อาการทางสมองรุนแรง → hypertonic (3%) saline ทีละน้อย ${S.h}</li>
<li>ยาต้าน ADH: conivaptan, tolvaptan, demeclocycline ${S.fa}</li></ul>`});

SEC.push({id:"di",k:"a",t:"Diabetes insipidus vs primary polydipsia",mm:"DI · water deprivation test",leg:[],tools:[["di",[["pp","Primary polydipsia"],["cdi","Central DI"],["ndi","Nephrogenic DI"]]]],draw:diD,
notes:()=>`<div class="pearl">กราฟคือ water deprivation test: งดน้ำแล้ววัด urine osm ทุกชั่วโมง → ให้ desmopressin ช่วงท้าย ${S.fa}</div>
<ul><li>ทั้งสามโรคปัสสาวะมากและเจือจาง: urine specific gravity &lt; 1.006, urine osm มักต่ำกว่า 300 ${S.fa}</li>
<li><b>Central DI</b> (AVP deficiency): ADH หลั่งไม่พอ จากบาดเจ็บศีรษะ เนื้องอก ผ่าตัด หรือ idiopathic ${S.fa} ${S.r}</li>
<li><b>Nephrogenic DI</b> (AVP resistance): ไตไม่ตอบสนอง · V2-receptor mutation (X-linked), lithium, demeclocycline, hypercalcemia, hypokalemia ${S.fa} ${S.r}</li>
<li>งดน้ำ: primary polydipsia เข้มข้นขึ้นมาก (&gt; 700 mOsm/kg) · DI ทั้งสองแบบเปลี่ยนน้อย ${S.fa}</li>
<li>Desmopressin: central DI urine osm ขึ้น &gt; 50% · nephrogenic DI แทบไม่เปลี่ยน ${S.fa}</li>
<li>Serum Na⁺/osm ใน DI สูง (เสียน้ำ) แต่ใน primary polydipsia ต่ำ · ผู้ป่วยที่หาน้ำดื่มเองไม่ได้เสี่ยงขาดน้ำรุนแรง ${S.r} ${S.fa}</li>
<li>Central DI อาจหายเองถ้ารอยโรคอยู่ต่ำกว่า median eminence เพราะ ADH ยังหลั่งเข้าเลือดได้ที่ median eminence ${S.fa}</li>
<li>ปัจจุบันใช้ copeptin (หลั่งคู่กับ AVP) ช่วยแยกโรคได้แม่นกว่า water deprivation test แบบเดิม ${S.h}</li>
<li>รักษา: central → desmopressin · nephrogenic → แก้สาเหตุ, อาหาร solute ต่ำ, HCTZ, amiloride, indomethacin · polydipsia → จำกัดน้ำ ${S.fa}</li></ul>`});

SEC.push({id:"hypopit",k:"a",t:"Hypopituitarism, Sheehan syndrome & empty sella",mm:"Hypopituitarism · Sheehan",leg:[],tools:[["hp",[["sheehan","Sheehan"],["empty","Empty sella"],["apop","Apoplexy"],["mass","Suprasellar mass"]]]],draw:hypopitD,
notes:()=>`<ul><li>Anterior pituitary จะทำงานไม่พอเมื่อเนื้อต่อมเสียไปประมาณ <b>75%</b> ${S.r}</li>
<li>สาเหตุ: ก้อนกด (nonfunctioning adenoma, craniopharyngioma), ผ่าตัด/ฉายแสง, บาดเจ็บศีรษะ, apoplexy, Sheehan, empty sella, โรคของ hypothalamus (sarcoidosis, TB) ${S.fa} ${S.r}</li>
<li><b>Sheehan syndrome</b>: ระหว่างตั้งครรภ์ต่อม anterior โตเกือบ 2 เท่าแต่เลือดจาก portal system ความดันต่ำไม่เพิ่มตาม → ตกเลือดหลังคลอดหรือ shock ทำให้ infarct · posterior lobe ได้เลือดแดงโดยตรงจึงรอด ${S.r}</li>
<li>Sheehan มาด้วย<b>ไม่มีน้ำนม</b> ประจำเดือนไม่มา ขี้หนาว ${S.fa}</li>
<li><b>Primary empty sella</b>: diaphragma sellae บกพร่อง ให้ arachnoid และ CSF ดันลงมา · มักเป็นหญิงอ้วนที่ตั้งครรภ์หลายครั้ง · อาจมีลานสายตาผิดหรือ prolactin สูง ${S.r}</li>
<li><b>Pituitary apoplexy</b>: เลือดออกเฉียบพลันในก้อน → ปวดหัวรุนแรงทันที เห็นภาพซ้อน (กดเส้นประสาทกลอกตา) และ hypopituitarism เฉียบพลัน = ภาวะฉุกเฉินทางประสาทศัลยกรรม ${S.r}</li>
<li>Apoplexy อาจทำให้ hypoglycemia และความดันตกจาก ACTH ขาดเฉียบพลัน ${S.h}</li>
<li>Hypopituitarism ที่มี <b>DI ร่วม</b> มักมาจาก hypothalamus ไม่ใช่ตัวต่อม ${S.r}</li>
<li>อาการตามฮอร์โมนที่ขาด: GH → เด็กเตี้ย · LH/FSH → amenorrhea, libido ↓ · TSH → hypothyroid · ACTH → hypoadrenal · prolactin → ไม่มีน้ำนม · MSH ↓ → ผิวซีด ${S.r}</li>
<li>รักษา: ให้ฮอร์โมนทดแทน (glucocorticoid, thyroxine, sex steroid, GH) ${S.fa}</li></ul>`});

SEC.push({id:"acro",k:"a",t:"Acromegaly & gigantism",mm:"Acromegaly",leg:[],tools:[["og",[["n","Normal OGTT"],["a","Acromegaly OGTT"]]]],draw:acroD,
notes:()=>`<div class="pearl">GH ต้องถูก<b>กดลง</b>หลังกินกลูโคส 75 g · acromegaly กดไม่ลง (บางรายกลับสูงขึ้น) ${S.h}</div>
<ul><li>GH เกินในผู้ใหญ่ ส่วนใหญ่จาก somatotroph adenoma · GH กระตุ้นตับสร้าง <b>IGF-1</b> ซึ่งทำให้เกิดอาการส่วนใหญ่ ${S.fa} ${S.r}</li>
<li>เด็กที่ epiphysis ยังไม่ปิด → <b>gigantism</b> (ตัวสูง แขนขายาว) · ผู้ใหญ่ → acromegaly ${S.r}</li>
<li>อาการ: frontal bossing, ขากรรไกรยื่น (prognathism), ลิ้นโต, มือเท้าโต, เสียงทุ้ม, เหงื่อออกมาก, ข้อเสื่อม ${S.fa} ${S.r}</li>
<li>Glucose intolerance (GH ต้าน insulin) · DM ~25% · HTN, LVH · <b>HFpEF/cardiomyopathy เป็นสาเหตุตายหลัก</b> ${S.fa} ${S.h}</li>
<li>เสี่ยง colon polyp และมะเร็งลำไส้ใหญ่ · sleep apnea พบบ่อย ${S.h}</li>
<li>วินิจฉัย: <b>IGF-1 สูง</b> (GH เดี่ยว ๆ แกว่งทั้งวันจึงใช้ไม่ได้) + GH ไม่ลดต่ำกว่า 0.4 µg/L หลัง OGTT + MRI เห็นก้อน ${S.fa} ${S.h}</li>
<li>รักษา: ผ่าตัด adenoma · ไม่หาย → octreotide (somatostatin analog), pegvisomant (GH receptor antagonist), dopamine agonist ${S.fa}</li></ul>`});

SEC.push({id:"thy-func",k:"b",t:"Hypothyroidism vs hyperthyroidism",mm:"Hypo vs hyperthyroid",leg:[],tools:[["tf",[["hypo","Hypothyroid"],["hyper","Hyperthyroid"]]]],draw:thyFuncD,
notes:()=>`<ul><li>Thyroid hormone เพิ่ม basal metabolic rate · hyperthyroid ส่วนหนึ่งมาจาก<b>β-adrenergic tone ↑</b> (tremor, ใจสั่น, lid lag) ${S.r}</li>
<li>Hypothyroid: ขี้หนาว เหงื่อน้อย น้ำหนักขึ้น · Na⁺ ↓ (ขับ free water ลดลง) ${S.fa}</li>
<li><b>Myxedema</b>: glycosaminoglycan และ hyaluronic acid สะสมในผิวหนังและอวัยวะ → บวมกดไม่บุ๋ม หน้าหยาบ ลิ้นโต เสียงทุ้ม ${S.r} ${S.fa}</li>
<li>Hypothyroid myopathy: CK ↑ · carpal tunnel · reflex คลายตัวช้า · LDL ↑ เพราะ LDL receptor ลด ${S.fa}</li>
<li>Hyperthyroid: หัวใจเต้นเร็ว ใจสั่น · <b>AF</b> พบบ่อยในผู้สูงอายุ · หัวใจล้มเหลวได้ ${S.r}</li>
<li>Hyperthyroid ทำให้<b>กระดูกพรุน</b> (T3 กระตุ้น osteoclast) · thyrotoxic myopathy มี CK ปกติ ${S.fa} ${S.r}</li>
<li>Lid lag / stare จาก sympathetic กระตุ้นกล้ามเนื้อ superior tarsal (Müller) · <b>exophthalmos แท้มีเฉพาะ Graves</b> ${S.r}</li>
<li>Hyperdefecation (ไม่ใช่ท้องเสียแท้) ตอบสนองต่อ β-blocker ${S.r}</li>
<li><b>Apathetic hyperthyroidism</b>: ผู้สูงอายุอาการไม่ชัด มาด้วยน้ำหนักลดหรือหัวใจแย่ลง ${S.r}</li></ul>`});

SEC.push({id:"thy-labs",k:"b",t:"Thyroid function tests: reading the axis",mm:"TSH · T4 patterns",leg:[],tools:[["tl",[["phypo","1° hypo"],["sub","Subclinical"],["central","Central hypo"],["graves","Graves"],["tsha","TSH adenoma"],["exo","Exogenous"],["sick","Euthyroid sick"]]]],draw:thyLabD,
notes:()=>`<ul><li><b>TSH</b> คือการตรวจคัดกรองที่ไวที่สุด ทั้ง hypo และ hyperthyroidism เพราะเปลี่ยนตั้งแต่ระยะ subclinical ${S.r}</li>
<li>Primary hypothyroidism: TSH ↑ จากการเสีย negative feedback · central hypothyroidism TSH ไม่ขึ้น ส่วน T4 ต่ำทุกสาเหตุ ${S.r}</li>
<li>Hyperthyroid: TSH ↓ + free T4 ↑ · บางรายสูงแต่ T3 (T3 toxicosis) ต้องวัด T3 โดยตรง ${S.r}</li>
<li>TSH-secreting adenoma (2° hyperthyroidism) พบน้อย: TSH ปกติหรือสูงทั้งที่ T4 สูง ${S.r}</li>
<li>เมื่อยืนยัน thyrotoxicosis แล้ว <b>RAIU</b> บอกสาเหตุ: ↑ ทั่วต่อม (Graves), ก้อนเดียว (toxic adenoma), ↓ (thyroiditis) ${S.r}</li>
<li>Euthyroid sick (nonthyroidal illness): ผู้ป่วยหนัก T3 ↓ โดย T4 และ TSH ปกติหรือต่ำ ${S.fa}</li>
<li>Subclinical hypothyroid: TSH ↑ แต่ T4 ปกติ · ให้ levothyroxine เมื่อ TSH &gt; 10 mU/L ${S.fa}</li></ul>`});

SEC.push({id:"thyroiditis",k:"b",t:"Thyroiditis: Hashimoto, painless, de Quervain & Riedel",mm:"Thyroiditis types",leg:[],tools:[["td",[["hashi","Hashimoto"],["pp","Postpartum / painless"],["dq","de Quervain"],["riedel","Riedel"]]]],draw:thyroiditisD,
notes:()=>`<ul><li><b>Hashimoto</b>: สาเหตุ hypothyroidism อันดับ 1 ในพื้นที่ที่ iodine พอ · autoimmune ทำลายต่อมช้า ๆ (CD8 T cell, cytokine) · anti-TPO และ anti-thyroglobulin ⊕ ${S.r} ${S.fa}</li>
<li>Hashimoto histology: lymphoid follicle มี germinal center + <b>Hürthle cell</b> (eosinophilic metaplasia) · fibrosis อยู่ใน capsule ${S.r}</li>
<li>Hashimoto อาจเริ่มด้วย <b>hashitoxicosis</b> ชั่วคราว (follicle แตก ฮอร์โมนรั่ว RAIU ต่ำ) · เสี่ยง B-cell lymphoma ของต่อม ${S.r} ${S.fa}</li>
<li>Hashimoto สัมพันธ์ HLA-DR3 และโรค autoimmune อื่น (T1DM, adrenalitis, SLE) ${S.fa} ${S.r}</li>
<li><b>Postpartum/painless (subacute lymphocytic)</b>: autoimmune, มักมี anti-TPO · hyper → hypo → ปกติ ภายในปีแรกหลังคลอด · 1/3 กลายเป็น hypothyroid ถาวรใน 10 ปี ${S.fa} ${S.r}</li>
<li><b>de Quervain (granulomatous)</b>: ตามหลังติดเชื้อไวรัส · ต่อม<b>เจ็บมาก</b> ปวดร้าวกราม · ESR ↑ · granuloma + giant cell · hyper → ปกติ → hypo → ปกติ หายเอง ${S.fa} ${S.r}</li>
<li><b>Riedel</b>: fibrosis ลามออกนอกต่อมไปหลอดลม หลอดอาหาร → ก้อนแข็งเหมือนหินติดแน่น คล้ายมะเร็ง anaplastic · เป็นส่วนหนึ่งของ <b>IgG4-related disease</b> · hypothyroid 1/3 ${S.fa} ${S.r}</li>
<li>ระยะ hyperthyroid ของ thyroiditis ทุกแบบ RAIU <b>ต่ำ</b> · รักษาด้วย β-blocker ไม่ใช่ antithyroid drug ${S.r} ${S.fa}</li></ul>`});

SEC.push({id:"cong-hypo",k:"b",t:"Congenital hypothyroidism & other causes",mm:"Congenital & other causes",leg:[],draw:congD,
notes:()=>`<ul><li>Congenital hypothyroidism (เดิมเรียก cretinism) ในพื้นที่ที่ iodine พอ ส่วนใหญ่มาจาก <b>thyroid dysgenesis</b> (agenesis, hypoplasia, ectopy) หรือ <b>dyshormonogenesis</b> เช่น TPO mutation ${S.fa}</li>
<li>6 P's: Pot-bellied, Pale, Puffy face, Protruding umbilicus, Protuberant tongue, Poor brain development ${S.fa}</li>
<li>ความรุนแรงของสมองขึ้นกับ<b>ช่วงเวลา</b>: T4 ของแม่ผ่านรกและจำเป็นต่อสมองก่อนต่อมทารกทำงาน · ขาดช่วงหลังไม่กระทบสมอง ${S.r}</li>
<li><b>ขาด iodine</b> เป็นสาเหตุ hypothyroidism อันดับ 1 ทั่วโลก มักมี goiter ${S.fa}</li>
<li>Iodine เกิน (<b>Wolff-Chaikoff</b>) กดการสร้างฮอร์โมน · ยา amiodarone, lithium ${S.fa}</li>
<li>Hypothyroid จากการรักษา: ผ่าตัด, radioiodine, ฉายแสงที่คอ, thionamide · central hypothyroid จาก pituitary/hypothalamus พบน้อย ${S.r}</li></ul>`});

SEC.push({id:"graves",k:"b",t:"Graves disease",mm:"Graves",leg:[],tools:[["gv",[["n","Normal thyroid"],["g","Graves thyroid"]]]],draw:gravesD,
notes:()=>`<ul><li>สาเหตุ hyperthyroidism ที่พบบ่อยที่สุด (~85%) · หญิงมากกว่าชายถึง ~10 เท่า อายุ 20–40 ปี ${S.r}</li>
<li>Triad: <b>thyrotoxicosis + diffuse goiter</b>, ophthalmopathy (exophthalmos), dermopathy (pretibial myxedema บางราย) ${S.r}</li>
<li><b>TSI</b> (IgG) จับ TSH receptor แล้วกระตุ้นเหมือน TSH → type II hypersensitivity · ผ่านรกได้ ทำให้ทารกแรกเกิด hyperthyroid ชั่วคราว ${S.fa} ${S.r}</li>
<li>Exophthalmos: T cell ใน retro-orbit หลั่ง cytokine → fibroblast สร้าง GAG ดูดน้ำ + กล้ามเนื้อตาบวมอักเสบ + ไขมันเพิ่ม · อาจแย่ต่อแม้คุม thyrotoxicosis ได้ ${S.fa} ${S.r}</li>
<li>Histology: follicular cell <b>สูงและแน่น</b> ยื่นเป็น papilla ที่ไม่มี fibrovascular core · colloid ซีด <b>ขอบหยัก (scalloped)</b> · lymphoid infiltrate ${S.r} ${S.fa}</li>
<li>มักเริ่มช่วง stress เช่น ตั้งครรภ์ · สัมพันธ์ HLA-DR3, HLA-B8 ${S.fa}</li>
<li>Lab: free T4/T3 ↑, TSH ↓, <b>RAIU ↑ ทั่วต่อม</b> · อาจได้ยิน bruit ที่ต่อม ${S.r}</li>
<li>รักษา: β-blocker คุมอาการ + thionamide, radioiodine หรือผ่าตัด · orbitopathy ใช้ glucocorticoid ${S.r} ${S.fa}</li></ul>`});

SEC.push({id:"thyrotox",k:"b",t:"Thyrotoxicosis: RAIU patterns, toxic nodules & thyroid storm",mm:"Toxic nodules · storm",leg:[],tools:[["tt",[["graves","Graves"],["tmng","Toxic MNG"],["toxad","Toxic adenoma"],["thyr","Thyroiditis"],["exo","Exogenous"]]]],draw:thyrotoxD,
notes:()=>`<ul><li>Thyrotoxicosis = ฮอร์โมนสูงในเลือด · hyperthyroidism (ต่อมสร้างเพิ่ม) เป็นแค่สาเหตุหนึ่ง · thyroiditis และฮอร์โมนจากนอกต่อมทำให้ thyrotoxic โดยต่อมไม่ได้สร้างเพิ่ม ${S.r}</li>
<li><b>Toxic multinodular goiter</b>: follicle บางกลุ่มทำงานเองโดยไม่ขึ้นกับ TSH (TSH receptor mutation ~60%) · hot nodule แทบไม่เป็นมะเร็ง ${S.fa} ${S.r}</li>
<li>Toxic adenoma และ toxic MNG มี gain-of-function ของ TSHR หรือ GNAS · ไม่ใช่รอยโรคก่อนมะเร็ง ${S.r}</li>
<li>สาเหตุอื่น: กินฮอร์โมนเอง (ลดน้ำหนัก), struma ovarii, <b>Jod-Basedow</b> (iodine/contrast), amiodarone, lithium ${S.fa}</li>
<li><b>Thyroid storm</b>: hyperthyroid ที่ไม่ได้รักษา/คุมไม่ดี + stress (ติดเชื้อ ผ่าตัด) → ไข้ สับสน ท้องเสีย tachyarrhythmia · ตายจาก arrhythmia ${S.fa} ${S.r}</li>
<li>รักษา storm (4 P's): <b>P</b>ropranolol, <b>P</b>TU, <b>P</b>rednisolone, <b>P</b>otassium iodide ${S.fa}</li>
<li>PTU เป็นยาที่เลือกใน storm เพราะกด T4 → T3 ด้วย · ให้ iodide <b>หลัง</b> PTU ~1 ชม. เพื่อไม่ให้ iodine ไปสร้างฮอร์โมนใหม่ · อัตราตายยังสูง ${S.h}</li></ul>`});

SEC.push({id:"goiter",k:"c",t:"Goiter & thyroid adenoma",mm:"Goiter · adenoma",leg:[],tools:[["gt",[["diffuse","Diffuse"],["mng","Multinodular"],["aden","Adenoma"]]]],draw:goiterD,
notes:()=>`<ul><li>Goiter ส่วนใหญ่มาจากการสร้างฮอร์โมนไม่พอ (ขาด iodine) → TSH ↑ → follicle hypertrophy/hyperplasia ${S.r}</li>
<li>Goitrogen: ผักตระกูลกะหล่ำ, มันสำปะหลัง (thiocyanate กดการขนส่ง iodide) ${S.r}</li>
<li>Simple goiter ส่วนใหญ่ <b>euthyroid</b> · อาการมาจากก้อน: กลืน หายใจลำบาก, SVC ถูกกด · plunging goiter ลงหลังกระดูกอก ${S.r}</li>
<li>Goiter นาน ๆ แทบทั้งหมดกลายเป็น multinodular · ~10% ใน 10 ปีเกิดก้อน autonomous = toxic MNG (Plummer) · มะเร็ง &lt; 5% ${S.r}</li>
<li>สาเหตุ goiter เรียบ: Graves, Hashimoto, ขาด iodine, TSH adenoma · เป็นก้อน: toxic MNG, adenoma, มะเร็ง, cyst ${S.fa}</li>
<li><b>Follicular adenoma</b>: ก้อนเดียว มี capsule สมบูรณ์ · ส่วนมากไม่ทำงาน (cold) · ไม่มี capsular/vascular invasion ซึ่งต่างจาก follicular carcinoma ${S.fa} ${S.r}</li>
<li>FNA แยก adenoma กับ follicular carcinoma ไม่ได้ ต้องดู capsule ทั้งก้อนหลังผ่าตัด ${S.r}</li></ul>`});

SEC.push({id:"thy-ca",k:"c",t:"Thyroid cancers",mm:"Thyroid cancer",leg:[],tools:[["tc",[["pap","Papillary"],["fol","Follicular"],["med","Medullary"],["ana","Anaplastic"]]]],draw:thyCaD,
notes:()=>`<ul><li>มะเร็งไทรอยด์วินิจฉัยด้วย <b>FNA</b> และรักษาด้วย thyroidectomy ${S.fa}</li>
<li><b>Papillary</b> (~85%): papilla มี fibrovascular core, nuclei ใสเหมือนกระจกฝ้า (<b>Orphan Annie</b>), nuclear groove/pseudo-inclusion, <b>psammoma body</b> · ลาม lymphatic ไปต่อมน้ำเหลืองที่คอ แต่พยากรณ์ยังดี ${S.r} ${S.fa}</li>
<li>Papillary สัมพันธ์ <b>RET/PTC</b>, NTRK1 fusion, <b>BRAF V600E</b> และรังสีในวัยเด็ก (เช่น หลัง Chernobyl) ${S.r}</li>
<li><b>Follicular</b>: follicle สม่ำเสมอ ต้องมี <b>capsular หรือ vascular invasion</b> · ลาม<b>ทางเลือด</b> (กระดูก ปอด) · RAS, PAX8-PPARγ · พบมากในพื้นที่ขาด iodine ${S.r} ${S.fa}</li>
<li><b>Medullary</b>: จาก parafollicular C cell · หลั่ง <b>calcitonin</b> · amyloid stroma (Congo red ⊕) · ~70% sporadic ที่เหลือใน MEN 2A/2B (RET) · hypocalcemia ไม่เด่น ${S.r} ${S.fa}</li>
<li>Familial medullary มี C-cell hyperplasia รอบก้อนและหลายจุด · RET carrier ควร<b>ตัดต่อมป้องกัน</b> ${S.r}</li>
<li><b>Anaplastic</b>: ผู้สูงอายุ ก้อนโตเร็ว กดทางเดินหายใจ · ส่วนใหญ่ dedifferentiate จาก papillary/follicular (TP53) · ตายใน &lt; 1 ปี ${S.r} ${S.fa}</li>
<li>ติดตามหลังผ่าตัด follicular/papillary ด้วย serum thyroglobulin และให้ thyroid hormone กด TSH ${S.r}</li>
<li>ผ่าตัด: hypocalcemia (ตัด parathyroid), recurrent laryngeal n. (ผูก inferior thyroid a.) → เสียงแหบ, external branch superior laryngeal n. → เสียงสูงหาย ${S.fa}</li></ul>`});

SEC.push({id:"nodule-wu",k:"c",t:"Thyroid nodule work-up",mm:"Nodule work-up",leg:[],tools:[["nw",[["hot","Low TSH · hot"],["benign","FNA benign"],["indet","FNA indeterminate"],["malig","FNA malignant"]]]],draw:noduleD,
notes:()=>`<div class="pearl">ขั้นแรกเสมอคือ <b>TSH</b>: ต่ำ → scan หา hot nodule · ปกติ/สูง → ultrasound แล้ว FNA ตามขนาดและลักษณะ ${S.h} ${S.fa}</div>
<ul><li>ก้อนไทรอยด์พบบ่อยมาก ส่วนใหญ่ (~95%) ไม่ใช่มะเร็ง · adenoma มากกว่ามะเร็ง ~10:1 ${S.fa} ${S.r}</li>
<li>สงสัยมะเร็งมากขึ้น: ก้อนเดี่ยว, อายุน้อยหรือชาย, ฉายรังสีที่คอตอนเด็ก, cold nodule, ก้อนแข็งติดแน่น โตเร็ว เสียงแหบ ${S.r} ${S.fa}</li>
<li><b>Hot nodule</b> แทบไม่เป็นมะเร็ง จึงไม่ต้อง FNA ${S.h}</li>
<li>Ultrasound ใช้ระบบ risk stratification (เช่น TI-RADS) · ก้อน &lt; 1 cm ไม่ทำ FNA เป็นประจำ เว้นมีต่อมน้ำเหลืองผิดปกติ ${S.h}</li>
<li>ผล FNA รายงานแบบ <b>Bethesda</b> 6 ระดับ · AUS/FN → FNA ซ้ำหรือ molecular test · malignant → ผ่าตัด ${S.h}</li>
<li>Benign → ติดตามด้วยการตรวจและ ultrasound ${S.fa}</li>
<li>สงสัย medullary → ตรวจ calcitonin ${S.fa}</li></ul>`});

SEC.push({id:"sellar",k:"a",t:"Craniopharyngioma & other sellar masses",mm:"Craniopharyngioma",leg:[],draw:sellarD,
notes:()=>`<ul><li>Craniopharyngioma เกิดจากเศษของ <b>Rathke pouch</b> · ส่วนใหญ่อยู่เหนือ sella · อายุสองช่วง: เด็ก 5–15 ปี และผู้ใหญ่ ≥ 65 ปี ${S.r}</li>
<li>Adamantinomatous (เด็ก): มี <b>calcification</b>, cyst ที่มีน้ำข้นสีน้ำตาลเหมือน “machine oil”, wet keratin, peripheral palisading · CTNNB1 (β-catenin) ${S.r}</li>
<li>Papillary (ผู้ใหญ่): ไม่ค่อยมี calcification · BRAF V600E (มียามุ่งเป้า) ${S.r}</li>
<li>อาการ: ปวดหัว ตามัว (กด chiasm) · เด็กโตช้าจาก GH ขาด · ก้อนบริเวณนี้ทำให้ hypo/hyperfunction ของ pituitary และ DI ได้ ${S.r}</li>
<li>Rathke cleft cyst: บุด้วย ciliated cuboidal epithelium · สะสมสารโปรตีนจนกดต่อม ${S.r}</li></ul>`});

const EXTRA=["sellar"];

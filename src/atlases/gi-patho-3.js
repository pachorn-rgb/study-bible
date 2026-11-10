/* ================= Gastrointestinal Pathology III · Liver, Biliary tract & Pancreas =================
   First Aid Step 1 2025 (cirrhosis → Budd-Chiari → SBP → serum markers → Reye → alcohol → steatotic liver → autoimmune hepatitis →
   encephalopathy → tumors → α1-antitrypsin → jaundice → Wilson → hemochromatosis → biliary tract → gallstones → cholangitis → pancreas) order
   Robbins & Cotran 10e Ch 18 (liver and gallbladder) + Ch 19 (pancreas) · Harrison 22e (portal hypertension, ascites/SBP, jaundice)
   drawings are original schematics. */
//@include _cvs-patho-helpers.js
//@include _endo-patho-helpers.js
//@include _gi-patho-helpers.js
Object.assign(GN,{a:"Cirrhosis & liver tests",b:"Liver diseases",c:"Bilirubin & biliary tract",d:"Pancreas"});
Object.assign(ST,{hv:14,tips:false,bc:"hv",sa:3.4,aa:1.2,pmn:120,lf:"alc",hm:"acute",hw:14,ry:"reye",al:"hep",na:"mash",ai:"t1",he:2,lt:"hcc",a1:"zz",ja:"obs",wi:"liver",hc:"hfe",pb:"pbc",gs:"cystic",cg:"chol",apx:"gall",cp:"alc",pc:"head"});

/* ---------- 1. cirrhosis & portal hypertension: portosystemic map ---------- */
function portalD(){const hv=+ST.hv,P=ST.tips?Math.min(hv,9):hv,k=Math.max(0,Math.min(1,(P-8)/12)),on=P>=10;let b="";
 const tube=(d,c,w)=>`<path d="${d}" style="fill:none;stroke:${c};stroke-width:${w};stroke-linecap:round;stroke-linejoin:round"/>`;
 const pc=`color-mix(in srgb,#7A5BC7 ${40+k*60}%,#9DB8DE)`,sy="#3E6FB0";
 /* systemic: IVC + azygos/SVC */
 b+=tube("M36,392 L36,60",sy,12)+LB(T(36,48,"IVC",{c:"s m"}))+tube("M300,14 L300,60",sy,8)+tube("M300,56 C292,62 284,62 278,58",sy,4)+T(312,30,"azygos → SVC",{a:"start",c:"s m"});
 /* liver */
 const cir=hv>=8;b+=`<path d="${sm([[70,96],[120,70],[190,76],[214,102],[196,140],[140,156],[84,148]])}" style="fill:${cir?"#8E5A44":GI.liv};stroke:${GI.livD};stroke-width:1.6"/>`;
 if(cir){const r=rng(9);for(let i=0;i<26;i++)b+=`<circle cx="${84+r()*112}" cy="${82+r()*60}" r="${4+r()*3}" style="fill:${GI.livL};stroke:#E8D6A8;stroke-width:1.2;opacity:.9"/>`}
 b+=TW(140,118,cir?"cirrhosis":"liver",{s:11})+tube("M96,90 C70,80 50,78 38,76",sy,7)+LB(T(74,66,"hepatic v.",{c:"s m"}));
 /* esophagus + stomach, spleen, rectum, umbilicus */
 b+=tube("M270,14 L270,104",GI.sqD,20)+tube("M270,14 L270,104",GI.sq,16)+`<path d="${sm([[262,100],[300,96],[330,120],[322,160],[286,170],[262,150]])}" style="fill:${GI.muc};stroke:${GI.mucD};stroke-width:1.4"/>`;
 const sp=1+k*.5;b+=`<ellipse cx="386" cy="150" rx="${26*sp}" ry="${18*sp}" style="fill:#8E3B5A;stroke:#5E2238;stroke-width:1.4"/>`+LB(TW(386,154,"spleen",{s:10}));
 b+=tube("M250,330 L250,392",GI.mucD,22)+tube("M250,330 L250,392",GI.duo,18)+LB(T(284,372,"rectum",{a:"start",c:"s m"}));
 b+=`<circle cx="130" cy="262" r="6" style="fill:${EN.skinD}"/>`+LB(T(130,284,"umbilicus",{c:"s m"}));
 /* portal system */
 b+=tube("M170,138 C190,160 210,176 232,184",pc,12)+tube("M232,184 C290,180 330,168 366,156",pc,9)+tube("M232,184 C236,220 236,250 232,290",pc,9)+tube("M300,176 C296,240 280,290 256,330",pc,7);
 b+=LB(T(204,204,"portal v.",{a:"end",c:"s"}))+LB(T(330,196,"splenic v.",{a:"start",c:"s m"}))+LB(T(222,262,"SMV",{a:"end",c:"s m"}))+LB(T(300,270,"IMV",{a:"start",c:"s m"}));
 /* shunts */
 const sw=1.5+k*7,sc=on?CV.bad:"var(--sb-muted)";
 b+=tube("M236,178 C250,150 262,130 268,106",pc,4+k*3);for(let i=0;i<3;i++)b+=`<path d="M${263+i*7},98 q-5,-10 0,-20 q5,-10 0,-22" style="fill:none;stroke:${sc};stroke-width:${sw*.6};stroke-linecap:round;opacity:${on?1:.4}"/>`;
 b+=tube("M150,150 C140,190 134,230 130,256",pc,2+k*4);for(let i=0;i<6;i++){const a=i/6*6.28;b+=`<path d="M130,262 q${Math.cos(a)*14},${Math.sin(a)*8} ${Math.cos(a)*30},${Math.sin(a)*26}" style="fill:none;stroke:${sc};stroke-width:${sw*.45};stroke-linecap:round;opacity:${on?1:.3}"/>`}
 b+=`<path d="M240,350 q-14,6 0,14 q14,6 0,14 M262,350 q14,6 0,14 q-14,6 0,14" style="fill:none;stroke:${sc};stroke-width:${sw*.6};stroke-linecap:round;opacity:${on?1:.4}"/>`+tube("M236,388 C150,396 80,394 42,380",sy,4);
 b+=`<path d="M338,214 q16,6 30,0 q14,-6 28,2" style="fill:none;stroke:${sc};stroke-width:${sw*.5};stroke-linecap:round;opacity:${on?1:.4}"/>`+LB(T(400,236,"retroperitoneal",{c:"s m"}));
 if(ST.tips)b+=tube("M176,140 C150,120 120,100 98,92","#2F8A78",8)+`<path d="M176,140 C150,120 120,100 98,92" style="fill:none;stroke:#fff;stroke-width:1.4;stroke-dasharray:3 4"/>`+tag(150,58,"TIPS",CV.teal);
 if(on&&P>=12)b+=`<circle cx="270" cy="70" r="24" style="fill:none;stroke:${CV.bad};stroke-width:2;stroke-dasharray:4 3"/>`;
 /* legend/right panel */
 const S=[["Esophagus","left gastric ↔ esophageal → azygos","varices → hematemesis"],["Umbilicus","paraumbilical ↔ epigastric","caput medusae"],["Rectum","superior rectal ↔ middle/inferior rectal","anorectal varices"],["Retroperitoneum","colic ↔ renal/lumbar","—"]];
 b+=`<rect x="440" y="8" width="194" height="74" rx="12" style="fill:color-mix(in srgb,${on?CV.bad:CV.good} 12%,var(--sb-surface));stroke:color-mix(in srgb,${on?CV.bad:CV.good} 50%,transparent)"/>`+T(452,30,"HVPG "+P+" mmHg"+(ST.tips?" (หลัง TIPS)":""),{a:"start",c:"bh"})+wrapT(452,50,P<=5?"ปกติ (≤ 5)":P<10?"portal hypertension ยังไม่มีอาการ":P<12?"≥ 10: clinically significant → varices, ascites":"≥ 12: เสี่ยง varices แตก",28,"s",15);
 S.forEach(([n,v,c],i)=>{const y=90+i*78;b+=`<rect x="440" y="${y}" width="194" height="72" rx="10" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(452,y+19,n,{a:"start",c:"bh"})+wrapT(452,y+35,v,30,"s m",13)+T(452,y+65,c,{a:"start",c:"s"})});
 return ESVG(b,"0 0 640 402")}

/* ---------- 2. Budd-Chiari & portal vein thrombosis ---------- */
const BC={pv:{n:"Prehepatic: portal vein thrombosis",c:"#3E6FB0",lob:{},R:["ลิ่มเลือดใน portal vein ก่อนเข้าตับ","ตับไม่โต (เว้นมีโรคตับเดิม) · ม้ามโต varices · ascites น้อย","สาเหตุ: cirrhosis, มะเร็ง, pancreatitis, sepsis, hypercoagulable","ลามถึง SMV → ลำไส้ขาดเลือด"]},
 cir:{n:"Intrahepatic: cirrhosis",c:"#C7892B",lob:{fib:"bridging"},R:["สาเหตุบ่อยที่สุด (> 95%) ของ portal hypertension","sinusoidal resistance ↑ + splanchnic vasodilation (NO)","อื่น ๆ: schistosomiasis (presinusoidal), sinusoidal obstruction syndrome"]},
 hv:{n:"Posthepatic: Budd-Chiari syndrome",c:"#C2334A",lob:{cong:true,zone:3,zc:"#C2334A"},R:["hepatic vein อุดตัน ≥ 2 เส้นหลัก → ตับโต ปวด ascites","centrilobular congestion + necrosis (zone 3) · nutmeg liver","polycythemia vera / myeloproliferative, hypercoagulable, PNH, ตั้งครรภ์/ยาคุม, HCC","ไม่มี JVD (ต่างจาก right heart failure)"]},
 hf:{n:"Posthepatic: right heart failure",c:"#7A5BC7",lob:{cong:true,zone:3,zc:"#7A5BC7"},R:["passive congestion → centrilobular necrosis → cardiac sclerosis","nutmeg liver · JVD ⊕ · hepatojugular reflux","constrictive pericarditis ให้ภาพเดียวกัน"]}};
function bcD(){const d=BC[ST.bc];let b=T(160,22,"Liver lobule",{c:"bh"})+lobule(160,160,120,Object.assign({seed:21},d.lob))+zoneKey(8,306);
 b+=iPanel(330,8,304,d.n,"",d.R,d.c);
 const y0=Math.max(IPH+24,210);b+=T(330,y0,"ตำแหน่งที่อุด",{a:"start",c:"bh"});[["pv","Prehepatic","portal v."],["cir","Intrahepatic","sinusoid"],["hv","Posthepatic","hepatic v."],["hf","Posthepatic","หัวใจ"]].forEach(([k,n,s],i)=>{const x=330+i*77,on=k===ST.bc;b+=`<rect x="${x}" y="${y0+10}" width="72" height="44" rx="10" style="fill:${on?`color-mix(in srgb,${BC[k].c} 24%,var(--sb-surface))`:"var(--sb-surface2)"};stroke:${on?BC[k].c:"var(--sb-line)"}"/>`+T(x+36,y0+28,n,{c:"s"})+T(x+36,y0+44,s,{c:on?"bh":"s m"})});
 return ESVG(b,`0 0 640 ${Math.max(322,y0+62)}`)}

/* ---------- 3. ascites & SBP ---------- */
function ascD(){const sa=+ST.sa,aa=+ST.aa,pm=+ST.pmn,saag=Math.round((sa-aa)*10)/10,hi=saag>=1.1,sbp=pm>=250;let b="";
 /* belly */
 b+=`<path d="M40,30 C20,120 10,200 60,250 C120,300 240,300 290,250 C340,200 330,120 300,30Z" style="fill:${EN.skin};stroke:${EN.skinD};stroke-width:1.6"/>`;
 b+=`<path d="M34,160 C40,230 80,268 175,270 C270,268 310,230 316,160 C260,176 90,176 34,160Z" style="fill:${sbp?"#D9C27A":"#F2DF9A"};stroke:#C7A23A;stroke-width:1.2;opacity:.92"/>`;
 b+=`<path d="${sm([[110,60],[170,50],[230,62],[246,96],[200,116],[130,112],[106,90]])}" style="fill:#8E5A44;stroke:${GI.livD}"/>`+TW(176,90,"cirrhotic liver",{s:10});
 const r=rng(3);for(let i=0;i<Math.min(90,pm/8);i++)b+=dot(50+r()*250,186+r()*70,2,sbp?"#5B3E8C":"#9C89C4");
 b+=TD(175,232,"ascitic fluid",{s:11,c:"#6B5A2E"})+`<path d="M330,210 L290,214" style="stroke:var(--sb-ink2);stroke-width:2"/><rect x="330" y="200" width="14" height="20" rx="3" style="fill:#E9E2B6;stroke:var(--sb-ink2)"/>`;
 b+=`<rect x="360" y="8" width="274" height="126" rx="14" style="fill:color-mix(in srgb,${hi?CV.violet:CV.gold} 10%,var(--sb-surface));stroke:color-mix(in srgb,${hi?CV.violet:CV.gold} 50%,transparent)"/>`+T(374,32,"SAAG = "+sa.toFixed(1)+" − "+aa.toFixed(1)+" = "+saag.toFixed(1)+" g/dL",{a:"start",c:"bh"});
 b+=T(374,56,hi?"≥ 1.1 → portal hypertension":"< 1.1 → ไม่ใช่ portal hypertension",{a:"start",c:"bh"})+wrapT(374,78,hi?"cirrhosis, alcoholic hepatitis, heart failure, Budd-Chiari, portal vein thrombosis":"peritoneal carcinomatosis, TB peritonitis, nephrotic syndrome, pancreatitis",40,"s",15);
 b+=`<rect x="360" y="146" width="274" height="112" rx="14" style="fill:color-mix(in srgb,${sbp?CV.bad:CV.good} 10%,var(--sb-surface));stroke:color-mix(in srgb,${sbp?CV.bad:CV.good} 50%,transparent)"/>`+T(374,170,"PMN "+pm+" /mm³",{a:"start",c:"bh"})+T(374,194,sbp?"≥ 250 → spontaneous bacterial peritonitis":"< 250 → ไม่ใช่ SBP",{a:"start",c:"bh"})+wrapT(374,216,sbp?"E. coli, Klebsiella · ให้ 3rd-gen cephalosporin + albumin":"ติดตามอาการ · เจาะซ้ำถ้ามีไข้ ปวดท้อง สับสน",40,"s",15);
 b+=T(40,296,"กลไก ascites: sinusoidal hypertension · albumin ↓ · hepatic lymph ↑ · splanchnic vasodilation → RAAS → Na⁺/น้ำคั่ง",{a:"start",c:"s m"});
 return ESVG(b,"0 0 640 306")}

/* ---------- 4. serum markers / LFT pattern ---------- */
const LF={alc:{n:"Alcoholic hepatitis",v:[240,95,160,420,6,3.0,1.6],t:"AST > ALT (≥ 2:1) และ AST มักไม่เกิน 500 · GGT สูง"},vir:{n:"Acute viral / ischemic / drug",v:[2600,3400,210,180,7,3.9,1.3],t:"aminotransferase > 1000: ไวรัสเฉียบพลัน, ischemic hepatitis, ยา (acetaminophen), autoimmune"},
 chol:{n:"Cholestatic (obstruction)",v:[110,130,620,540,8,3.8,1.2],t:"ALP + GGT เด่น · conjugated bilirubin ↑ · INR แก้ได้ด้วย vitamin K"},mas:{n:"MASLD (NAFLD)",v:[58,82,105,70,.9,4.2,1.0],t:"ALT > AST เล็กน้อย · AST > ALT ในโรคที่ไม่ใช่ alcohol บ่งว่ามี advanced fibrosis"},
 cir:{n:"Decompensated cirrhosis",v:[70,42,150,110,4.5,2.4,2.1],t:"enzyme อาจเกือบปกติ · albumin ↓ PT ↑ platelet ↓ = การทำงานสังเคราะห์เสีย"},bone:{n:"Bone disease (ไม่ใช่ตับ)",v:[24,22,480,28,.7,4.3,1.0],t:"ALP สูงเดี่ยว ๆ แต่ GGT ปกติ → ที่มาคือกระดูก"}};
function lftD(){const d=LF[ST.lf];let b=T(8,24,d.n,{a:"start",c:"bh"});
 const M=[["AST",0,10,4000,10,40,"U/L",1],["ALT",1,10,4000,10,40,"U/L",1],["ALP",2,30,800,40,120,"U/L",0],["GGT",3,5,800,8,60,"U/L",0],["Bilirubin",4,.2,12,.2,1.2,"mg/dL",0],["Albumin",5,1.5,5.5,3.5,5,"g/dL",0],["INR",6,.8,3,.9,1.1,"",0]];
 M.forEach(([n,i,lo,hi,nl,nh,u,lg],j)=>{const y=58+j*42,v=d.v[i],F=lg?x=>(Math.log10(x)-Math.log10(lo))/(Math.log10(hi)-Math.log10(lo)):x=>(x-lo)/(hi-lo),X=x=>8+Math.min(1,Math.max(0,F(x)))*360,out=v<nl||v>nh;
  b+=T(8,y-8,n,{a:"start",c:"s"})+T(368,y-8,v+" "+u,{a:"end",c:"bh"})+`<rect x="8" y="${y}" width="360" height="10" rx="5" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/><rect x="${X(nl)}" y="${y}" width="${X(nh)-X(nl)}" height="10" style="fill:color-mix(in srgb,${CV.good} 35%,transparent)"/><circle cx="${X(v)}" cy="${y+5}" r="7.5" style="fill:${out?EN.up:CV.good};stroke:var(--sb-surface);stroke-width:2"/>`});
 b+=T(8,352,"AST/ALT ใช้ log scale · แถบเขียว = ค่าปกติ",{a:"start",c:"s m"});
 b+=`<rect x="392" y="8" width="242" height="118" rx="14" style="fill:color-mix(in srgb,${CV.acc} 9%,var(--sb-surface));stroke:color-mix(in srgb,${CV.acc} 40%,transparent)"/>`+wrapT(406,32,d.t,36,"s",16);
 const r=(d.v[0]/d.v[1]).toFixed(1);b+=T(406,112,"AST : ALT = "+r,{a:"start",c:"bh"});
 b+=cardA(392,138,242,"Enzyme = เซลล์บาดเจ็บ",["AST, ALT: hepatocyte","ALP, GGT: ท่อน้ำดี / canaliculi"],CV.gold)+cardA(392,222,242,"Function = การทำงาน",["albumin (ครึ่งชีวิตยาว) · PT/INR (เร็ว)","bilirubin · platelet (portal HTN)"],CV.teal);
 return ESVG(b,"0 0 640 362")}

/* ---------- 5. hepatitis B serology (time slider) ---------- */
const hbG=(t,c,w,a=1)=>a*Math.exp(-Math.pow((t-c)/w,2)),hbS=(t,c,w)=>1/(1+Math.exp(-(t-c)/w));
const HB={acute:{HBsAg:t=>hbG(t,12,6.5),HBeAg:t=>hbG(t,10.5,4.5,.7),"IgM anti-HBc":t=>hbG(t,17,8,.85),"IgG anti-HBc":t=>.9*hbS(t,17,2.5),"anti-HBe":t=>.55*hbS(t,19,2),"anti-HBs":t=>.8*hbS(t,29,1.6)},
 chronic:{HBsAg:t=>.95*hbS(t,7,1.6),HBeAg:t=>.7*hbS(t,8,1.6),"IgM anti-HBc":t=>hbG(t,16,7,.6),"IgG anti-HBc":t=>.9*hbS(t,17,2.5),"anti-HBe":t=>0,"anti-HBs":t=>0},
 vacc:{HBsAg:t=>0,HBeAg:t=>0,"IgM anti-HBc":t=>0,"IgG anti-HBc":t=>0,"anti-HBe":t=>0,"anti-HBs":t=>.8*hbS(t,6,1.5)}};
const HBC={HBsAg:"#C2334A",HBeAg:"#D9822B","IgM anti-HBc":"#7A5BC7","IgG anti-HBc":"#3E6FB0","anti-HBe":"#8C6D46","anti-HBs":"#2F8A78"};
function hbD(){const m=HB[ST.hm],w=+ST.hw;const A=axes(56,16,330,220,[0,40],[0,1],[0,8,16,24,32,40],[],"สัปดาห์หลังสัมผัสเชื้อ","ระดับในเลือด");let b=A.g;
 const pos={};Object.entries(m).forEach(([k,f])=>{const pts=[];for(let t=0;t<=40;t+=.5)pts.push([A.X(t),A.Y(f(t))]);if(f(20)+f(10)+f(36)>0)b+=curve(pts,HBC[k],2.8);pos[k]=f(w)>.12});
 b+=`<path d="M${A.X(w)},16 V236" style="stroke:var(--sb-ink);stroke-width:1.6;stroke-dasharray:4 3"/>`+`<circle cx="${A.X(w)}" cy="16" r="5" style="fill:var(--sb-ink)"/>`;
 if(ST.hm==="acute")b+=`<rect x="${A.X(21.5)}" y="16" width="${A.X(26.5)-A.X(21.5)}" height="220" style="fill:color-mix(in srgb,${CV.gold} 16%,transparent)"/>`+T(A.X(24),30,"window",{c:"s"});
 let i=0;Object.entries(HBC).forEach(([k,c])=>{const y=20+i*30;b+=`<rect x="408" y="${y}" width="226" height="26" rx="8" style="fill:var(--sb-surface2)"/><rect x="408" y="${y}" width="5" height="26" rx="2" style="fill:${c}"/>`+T(422,y+17,k,{a:"start",c:"s"})+tag(606,y+13,pos[k]?"⊕":"⊝",pos[k]?c:"#9AA3B2",{w:40});i++});
 const p=pos,dx=p["HBsAg"]&&p["IgM anti-HBc"]?"Acute hepatitis B":p["HBsAg"]&&p["IgG anti-HBc"]?(p["HBeAg"]?"Chronic HBV · ติดต่อสูง (HBeAg ⊕)":"Chronic HBV"):p["HBsAg"]?"ระยะฟักตัว / เริ่มติดเชื้อ":p["anti-HBs"]&&p["IgG anti-HBc"]?"หายจากการติดเชื้อ (มีภูมิ)":p["anti-HBs"]?"ได้รับวัคซีน (anti-HBs อย่างเดียว)":p["IgM anti-HBc"]||p["IgG anti-HBc"]?"Window period: HBsAg ⊝ anti-HBs ⊝ · อาศัย IgM anti-HBc":"ยังตรวจไม่พบ";
 b+=`<rect x="408" y="206" width="226" height="66" rx="12" style="fill:color-mix(in srgb,${CV.acc} 12%,var(--sb-surface));stroke:color-mix(in srgb,${CV.acc} 50%,transparent)"/>`+T(420,228,"สัปดาห์ที่ "+w,{a:"start",c:"s m"})+wrapT(420,248,dx,32,"bh",16);
 return ESVG(b,"0 0 640 282")}

/* ---------- 6. Reye syndrome ---------- */
function reyeD(){const rey=ST.ry==="reye";let b=lobule(150,150,112,{fat:rey?"micro":null,seed:5})+T(150,290,rey?"microvesicular steatosis ทั่ว lobule ไม่มีการอักเสบ":"ตับปกติ",{c:"s m"});
 const S=[["ไวรัส (VZV, influenza B) + aspirin","เด็ก",CV.gold],["Aspirin metabolite ยับยั้ง mitochondria","β-oxidation ↓ (reversible)",CV.violet],["ตับ: microvesicular fat","hypoglycemia · NH₃ ↑ · ตับโต",CV.bad],["สมอง: บวม","อาเจียน ซึม ชัก coma · ICP ↑",CV.dx]];
 S.forEach(([t,s,c],i)=>{const y=8+i*66;b+=cardBox(320,y,314,56,t,[s],c);if(i<3)b+=Ar(477,y+56,477,y+66,CV.mut,1.5,{hs:5})});
 b+=T(320,292,"ไม่ให้ aspirin ในเด็ก ยกเว้น Kawasaki disease",{a:"start",c:"bh"});
 return ESVG(b,"0 0 640 302")}

/* ---------- 7. alcoholic liver disease ---------- */
const AL={ste:{n:"Hepatic steatosis",c:"#C7892B",lob:{fat:"macro",zone:3,zc:"#C7892B"},R:["macrovesicular fat เริ่มที่ zone 3 · ตับโต เหลือง มัน","NADH ↑ → lipogenesis ↑, β-oxidation ↓","หายสนิทเมื่อหยุดดื่ม"]},
 hep:{n:"Alcoholic hepatitis",c:"#C2334A",lob:{fat:"macro",ball:true,fib:"perisinus"},R:["hepatocyte บวม (ballooning) + Mallory hyaline (keratin 8/18 พันกัน)","neutrophil ล้อมเซลล์ที่มี Mallory · perisinusoidal fibrosis แบบ chicken wire","หลังดื่มหนัก: ไข้ ตับโตกดเจ็บ ตัวเหลือง WBC สูง · AST > ALT"]},
 cir:{n:"Alcoholic cirrhosis",c:"#5B3E8C",lob:{fib:"bridging"},R:["fibrosis เริ่มรอบ central vein → bridging → nodule (มัก micronodular)","เกิดในผู้ดื่มหนักเพียง 10–15%","ระยะนี้มักไม่กลับคืน"]}};
function aldD(){const d=AL[ST.al];let b=lobule(150,150,116,Object.assign({seed:31},d.lob))+zoneKey(8,300);
 b+=iPanel(320,8,314,d.n,"",d.R,d.c);const y0=Math.max(IPH+24,190);
 [["ste","Steatosis"],["hep","Hepatitis"],["cir","Cirrhosis"]].forEach(([k,n],i)=>{const x=320+i*106,on=k===ST.al;b+=`<rect x="${x}" y="${y0}" width="96" height="34" rx="17" style="fill:${on?AL[k].c:"var(--sb-surface2)"};stroke:${AL[k].c}"/>`+`<text x="${x+48}" y="${y0+22}" text-anchor="middle" style="font:700 11.5px var(--sb-font);fill:${on?"#fff":"var(--sb-ink)"}">${n}</text>`;if(i<2)b+=Ar(x+97,y0+17,x+105,y0+17,CV.mut,1.6,{hs:5})});
 b+=T(320,y0+58,"หยุดดื่ม: steatosis และ hepatitis ย้อนกลับได้",{a:"start",c:"s m"})+T(320,y0+76,"ดื่มต่อ: เดินหน้าไป cirrhosis",{a:"start",c:"s m"});
 return ESVG(b,`0 0 640 ${Math.max(316,y0+86)}`)}

/* ---------- 8. MASLD / NAFLD ---------- */
const NA={st:{n:"MASLD: steatosis อย่างเดียว",c:"#C7892B",lob:{fat:"macro"},R:["ไขมัน ≥ 5% ของ hepatocyte ไม่มีการอักเสบ/fibrosis เด่น","ไม่มีอาการ · อาจคงที่หรือดีขึ้น","สัมพันธ์ metabolic syndrome: อ้วน, T2DM, TG ↑, HDL ↓, HTN"]},
 mash:{n:"MASH (steatohepatitis)",c:"#C2334A",lob:{fat:"macro",ball:true,fib:"perisinus"},R:["steatosis + lobular inflammation + ballooning (ครบ 3 จึงวินิจฉัย)","histology แยกจาก alcoholic hepatitis ไม่ได้ → อาศัยประวัติ","fibrosis เริ่มรอบ central vein (chicken wire)","วินิจฉัยต้อง biopsy"]},
 cir:{n:"Cirrhosis / HCC",c:"#5B3E8C",lob:{fib:"bridging"},R:["ไขมันและ ballooning อาจหายไป (\"burned-out\")","> 90% ของ cryptogenic cirrhosis น่าจะมาจาก NASH","HCC เกิดได้แม้ยังไม่ cirrhosis"]}};
function naD(){const d=NA[ST.na];let b=lobule(150,150,116,Object.assign({seed:37},d.lob))+zoneKey(8,300);b+=iPanel(320,8,314,d.n,"",d.R,d.c);
 const y0=Math.max(IPH+24,200);b+=cardA(320,y0,314,"Insulin resistance คือแกนกลาง",["FFA เข้าตับมาก + de novo lipogenesis ↑","lipotoxicity → oxidative stress → เซลล์ตาย → stellate cell"],CV.gold);
 return ESVG(b,`0 0 640 ${Math.max(316,y0+92)}`)}

/* ---------- 9. autoimmune hepatitis ---------- */
function aiD(){const t1=ST.ai==="t1";let b=slide(8,8,300,220);const r=rng(7);
 b+=`<circle cx="70" cy="70" r="46" style="fill:#F5E6D8;stroke:#C98B78"/>`+dot(58,62,10,GI.vein)+dot(84,58,5,GI.art)+`<circle cx="74" cy="86" r="6" style="fill:${GI.bile};stroke:${GI.bileD}"/>`+LB(TD(70,26,"portal tract",{s:10}));
 for(let i=0;i<120;i++){const px=20+r()*276,py=20+r()*196;if(Math.hypot(px-70,py-70)>50)b+=`<rect x="${px-7}" y="${py-6}" width="14" height="12" rx="3" style="fill:#F2B9CB;stroke:${HE.mem};stroke-width:.5"/>`+dot(px,py,2,HE.nu)}
 for(let i=0;i<90;i++){const a=r()*6.28,d2=40+r()*46;const px=70+Math.cos(a)*d2,py=70+Math.sin(a)*d2;if(px>10&&py>10)b+=`<ellipse cx="${px}" cy="${py}" rx="3.6" ry="2.8" style="fill:#C9A6E0"/>`+dot(px+1.2,py,1.5,HE.nuD)}
 b+=TD(200,214,"plasma cells ล้ำเข้าเนื้อตับ (interface hepatitis)",{s:10});
 const d=t1?{n:"Type 1",c:"#7A5BC7",R:["ANA และ anti-smooth muscle (ASMA)","พบบ่อยกว่า · หญิงวัยกลางคน"]}:{n:"Type 2",c:"#C7892B",R:["anti-LKM-1 (liver/kidney microsome)","มักเป็นเด็กและวัยรุ่น"]};
 b+=iPanel(326,8,308,"Autoimmune hepatitis · "+d.n,"",d.R,d.c);
 b+=cardA(326,IPH+20,308,"วินิจฉัยจาก 4 อย่าง",["autoantibody · IgG ในเลือดสูง","histology: plasma cell มาก necroinflammation สูง","ตัดไวรัสและยาออก"],CV.teal);
 b+=T(8,252,"รักษา: immunosuppression (prednisone ± azathioprine) · ไม่รักษา → cirrhosis",{a:"start",c:"s m"});
 return ESVG(b,"0 0 640 264")}

/* ---------- 10. hepatic encephalopathy ---------- */
const HEG=[["Grade 1","นอนกลับเวลา สมาธิสั้น อารมณ์เปลี่ยน"],["Grade 2","ง่วง สับสน asterixis ชัด"],["Grade 3","หลับลึก ปลุกตื่นได้ สับสนมาก"],["Grade 4","coma"]];
function heD(){const gk=+ST.he;let b="";
 const N=[[60,60,"ลำไส้","NH₃ จากแบคทีเรีย + glutamine",GI.duo],[250,60,"Portal vein","",GI.vein],[440,60,"ตับ","urea cycle",GI.liv]];
 b+=cardBox(8,20,150,70,"ลำไส้",["แบคทีเรีย + enterocyte สร้าง NH₃"],CV.gold)+Ar(160,55,196,55,CV.gold,2.4)+cardBox(200,20,130,70,"Portal vein",["NH₃ ไปตับ"],CV.dx)+Ar(332,55,368,55,CV.dx,2.4)+cardBox(372,20,130,70,"ตับปกติ",["urea cycle → urea"],CV.good)+Ar(504,55,536,55,CV.good,2.4)+cardBox(540,20,92,70,"ไต",["ขับ urea"],CV.teal);
 b+=`<path d="M265,92 C265,150 300,170 380,176" style="fill:none;stroke:${CV.bad};stroke-width:3.4;stroke-dasharray:7 5"/>`+arrowHead(380,176,0,CV.bad,9)+T(250,150,"portosystemic shunt / ตับเสีย",{a:"end",c:"s"});
 b+=cardBox(384,146,248,70,"สมอง: astrocyte",["NH₃ → glutamine (osmolyte) → บวม"],CV.bad);
 b+=T(8,246,"ระดับความรุนแรง (West Haven)",{a:"start",c:"bh"});HEG.forEach(([n,s],i)=>{const x=8+i*158,on=i+1===gk;b+=`<rect x="${x}" y="256" width="150" height="62" rx="12" style="fill:color-mix(in srgb,${CV.bad} ${on?10+i*10:4}%,var(--sb-surface));stroke:${on?CV.bad:"var(--sb-line)"};stroke-width:${on?2:1}"/>`+T(x+12,278,n,{a:"start",c:"bh"})+wrapT(x+12,296,s,24,"s m",13)});
 b+=T(8,344,"Trigger ↑ NH₃: GI bleed · ท้องผูก · ติดเชื้อ   |   ขับ NH₃ ↓: ไตวาย · diuretic · หลัง TIPS",{a:"start",c:"s"});
 return ESVG(b,"0 0 640 354")}

/* ---------- 11. liver tumors ---------- */
const LT={hem:{n:"Cavernous hemangioma",c:"#C2334A",o:{nod:[[250,60,14,"#B3263B"]]},R:["benign ที่พบบ่อยที่สุด · ช่องเลือดผนังบาง ใต้ capsule มัก < 2 cm","อายุ 30–50 · ไม่ biopsy (เสี่ยงเลือดออก)"]},
 fnh:{n:"Focal nodular hyperplasia",c:"#2F8A78",o:{nod:[[240,70,22,"#D9B48A"]]},star:[240,70],R:["ไม่ใช่ neoplasm: hepatocyte hyperplasia ตอบสนองต่อเลือดผิดปกติ","หญิงวัยผู้ใหญ่ · central stellate scar (ถึง 80%)","ไม่ต้องรักษา"]},
 ad:{n:"Hepatocellular adenoma",c:"#C7892B",o:{nod:[[220,76,24,"#E3C26A"]]},R:["หญิงวัยเจริญพันธุ์ · ยาคุมกำเนิด / anabolic steroid","แตก → เลือดออกในท้อง ช็อก","ชนิด β-catenin activated เสี่ยงเป็น HCC → ตัดออก (และก้อน ≥ 5 cm)"]},
 hcc:{n:"Hepatocellular carcinoma",c:"#5B3E8C",o:{cirr:true,mass:[230,76,30]},R:["มะเร็งปฐมภูมิของตับที่พบบ่อยที่สุด · ส่วนใหญ่บนพื้น cirrhosis","HBV (ไม่ต้อง cirrhosis ก็ได้), HCV, alcohol, MASLD, hemochromatosis, α1AT, aflatoxin","β-catenin (40%), TERT promoter (50–60%), TP53","บุกเส้นเลือด: portal vein, IVC · AFP · แพร่ทางเลือด"]},
 ang:{n:"Angiosarcoma",c:"#7A2A20",o:{mass:[250,70,22],massC:"#7A2A20"},R:["มะเร็งของ endothelium พบน้อย","vinyl chloride, arsenic, Thorotrast"]},
 met:{n:"Metastases",c:"#3E6FB0",o:{nod:[[90,70,12,"#E9E2D6"],[150,50,9,"#E9E2D6"],[210,90,14,"#E9E2D6"],[280,60,10,"#E9E2D6"],[130,110,8,"#E9E2D6"]]},R:["มะเร็งในตับที่พบบ่อยที่สุดโดยรวม · มักหลายก้อน","จาก colon, ปอด, เต้านม (และ GI อื่น)"]}};
function ltD(){const d=LT[ST.lt];let b=hepatoB(0,6,.92,Object.assign({lab:false},d.o));
 if(d.star){const [sx,sy]=[d.star[0]*.92,6+d.star[1]*.92];for(let i=0;i<6;i++){const a=i/6*6.28;b+=`<path d="M${sx},${sy} L${sx+Math.cos(a)*16},${sy+Math.sin(a)*16}" style="stroke:#F7F0E2;stroke-width:2.4;stroke-linecap:round"/>`}}
 b+=iPanel(340,8,294,d.n,"",d.R,d.c);
 b+=T(8,300,"Benign",{a:"start",c:"s m"})+tagRow(60,298,270,[["hemangioma",LT.hem.c],["FNH",LT.fnh.c],["adenoma",LT.ad.c]])+T(8,330,"Malignant",{a:"start",c:"s m"})+tagRow(74,328,270,[["HCC",LT.hcc.c],["angiosarcoma",LT.ang.c],["metastases",LT.met.c]]);
 return ESVG(b,`0 0 640 ${Math.max(346,IPH+16)}`)}

/* ---------- 12. α1-antitrypsin deficiency ---------- */
const A1={mm:{n:"PiMM (ปกติ)",lv:100,glob:false,t:"α1AT พับถูกต้อง → หลั่งออกจาก hepatocyte ได้ครบ"},mz:{n:"PiMZ (heterozygote)",lv:55,glob:false,t:"codominant → ระดับกลาง ๆ · ส่วนใหญ่ไม่มีอาการ"},zz:{n:"PiZZ",lv:10,glob:true,t:"โปรตีนพับผิดค้างใน ER → ระดับในเลือดเหลือ ~10% · ตับเสียจาก toxic gain-of-function"}};
function a1D(){const d=A1[ST.a1];let b=lobule(140,140,108,{glob:d.glob,seed:17})+T(140,270,d.glob?"PAS ⊕ globule (diastase-resistant)":"ไม่มี globule",{c:"s m"});
 b+=`<rect x="300" y="8" width="334" height="92" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(314,32,d.n,{a:"start",c:"bh"})+T(314,54,"Serum α1AT",{a:"start",c:"s m"})+`<rect x="400" y="44" width="220" height="12" rx="6" style="fill:var(--sb-surface);stroke:var(--sb-line)"/><rect x="400" y="44" width="${2.2*d.lv}" height="12" rx="6" style="fill:${d.lv<30?CV.bad:d.lv<80?CV.gold:CV.good}"/>`+T(620,38,d.lv+"%",{a:"end",c:"s"})+wrapT(314,78,d.t,56,"s",14);
 b+=cardA(300,110,162,"ตับ",["โปรตีนสะสมใน ER → UPR → apoptosis","neonatal hepatitis · cirrhosis · HCC"],CV.bad)+cardA(472,110,162,"ปอด",["ไม่มีตัวยับยั้ง elastase","panacinar emphysema"],CV.dx);
 b+=T(300,246,"คิดถึงเมื่อ: อายุน้อย + โรคตับ + หอบโดยไม่สูบบุหรี่",{a:"start",c:"bh"});
 return ESVG(b,"0 0 640 286")}

/* ---------- 13. jaundice: bilirubin pathway ---------- */
const JA={hem:{n:"Hemolysis",at:0,L:["↑","N","⊝","↑"],t:"สร้าง bilirubin เกินกำลัง conjugation · ปัสสาวะไม่มี bilirubin (UCB ไม่ละลายน้ำ)"},
 gil:{n:"Gilbert syndrome",at:2,L:["↑","N","⊝","N"],t:"UGT1A1 ลดเล็กน้อย · เหลืองเล็กน้อยเมื่ออดอาหาร เครียด ป่วย · ไม่มีอันตราย"},
 cn:{n:"Crigler-Najjar type I",at:2,L:["↑↑","↓","⊝","↓"],t:"ไม่มี UGT1A1 เลย · kernicterus ตั้งแต่ทารก · phototherapy, plasmapheresis, ปลูกถ่ายตับ · type II ตอบสนองต่อ phenobarbital"},
 dj:{n:"Dubin-Johnson / Rotor",at:3,L:["N","↑","⊕","N"],t:"ขับ conjugated bilirubin เข้า canaliculus ไม่ได้ (DJ: MRP2) · DJ ตับสีดำ · Rotor ตับปกติ อาการเบากว่า · ไม่มีอันตราย"},
 obs:{n:"Biliary obstruction",at:4,L:["N","↑↑","⊕","↓"],t:"นิ่ว, มะเร็งหัวตับอ่อน, cholangiocarcinoma, liver fluke · อุจจาระซีด ปัสสาวะเข้ม คัน · ALP ↑"},
 hep:{n:"Hepatocellular (hepatitis, cirrhosis)",at:1,L:["↑","↑","⊕","N/↑"],t:"เสียทั้ง uptake, conjugation และ excretion → mixed hyperbilirubinemia"}};
function jaD(){const d=JA[ST.ja];let b="";
 const St=[["Heme → bilirubin","macrophage (ม้าม)"],["Uptake","UCB–albumin → hepatocyte"],["Conjugation","UGT1A1"],["Excretion","MRP2 → canaliculus"],["Bile duct → ลำไส้","urobilinogen → stercobilin"]];
 St.forEach(([n,s],i)=>{const x=8+i*126,hot=i===d.at;b+=`<rect x="${x}" y="20" width="116" height="74" rx="12" style="fill:${hot?`color-mix(in srgb,${CV.bad} 18%,var(--sb-surface))`:"var(--sb-surface2)"};stroke:${hot?CV.bad:"var(--sb-line)"};stroke-width:${hot?2.2:1}"/>`+T(x+58,46,n,{c:"bh"})+wrapT(x+58,64,s,19,"s m",13,"middle");
  if(i<4)b+=Ar(x+117,57,x+125,57,i<2?"#D9A43A":GI.bileD,2.2,{hs:6});
  if(hot)b+=`<path d="M${x+46},2 l24,24 M${x+70},2 l-24,24" style="stroke:${CV.bad};stroke-width:3.4;stroke-linecap:round"/>`});
 b+=`<rect x="8" y="104" width="242" height="8" rx="4" style="fill:#E7B84A"/>`+T(8,128,"unconjugated (indirect) · ไม่ละลายน้ำ",{a:"start",c:"s m"})+`<rect x="262" y="104" width="370" height="8" rx="4" style="fill:${GI.bile}"/>`+T(632,128,"conjugated (direct) · ละลายน้ำ",{a:"end",c:"s m"});
 b+=`<rect x="8" y="146" width="330" height="156" rx="14" style="fill:color-mix(in srgb,${CV.bad} 7%,var(--sb-surface));stroke:color-mix(in srgb,${CV.bad} 40%,transparent)"/>`+T(22,170,d.n,{a:"start",c:"bh"})+wrapT(22,192,d.t,52,"s",15);
 b+=`<rect x="352" y="146" width="282" height="156" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`;["Unconjugated bilirubin","Conjugated bilirubin","Urine bilirubin","Urine urobilinogen"].forEach((n,i)=>{b+=T(366,176+i*32,n,{a:"start",c:"s"});const v=d.L[i];b+=v==="⊕"||v==="⊝"?tag(600,172+i*32,v,v==="⊕"?CV.bad:"#9AA3B2",{w:40}):lv(600,172+i*32,v,{w:46})});
 return ESVG(b,"0 0 640 310")}

/* ---------- 14. Wilson disease ---------- */
const WI={liver:{n:"ตับ",c:"#A8503F",R:["ทองแดงสะสมใน hepatocyte → ROS (Fenton)","steatosis → hepatitis → cirrhosis · acute liver failure ได้","อายุเริ่ม 6–40 ปี (เฉลี่ย ~11 ปี)"]},brain:{n:"สมอง (basal ganglia)",c:"#7A5BC7",R:["putamen ถูกทำลาย","tremor, dystonia, dysarthria, parkinsonism","อาการทางจิตเวช"]},
 eye:{n:"ตา",c:"#8C6D46",R:["Kayser-Fleischer ring: ทองแดงใน Descemet membrane ที่ limbus","พบในเกือบทุกรายที่มีอาการทางระบบประสาท · ตรวจด้วย slit lamp"]},other:{n:"เลือด / ไต",c:"#C2334A",R:["hemolytic anemia (Coombs ⊝) จากทองแดงอิสระ","Fanconi syndrome ที่ proximal tubule"]}};
function wiD(){const d=WI[ST.wi];let b="";
 b+=`<rect x="8" y="8" width="304" height="200" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(22,30,"Hepatocyte",{a:"start",c:"bh"});
 b+=`<rect x="40" y="46" width="200" height="140" rx="18" style="fill:#F2CBBE;stroke:#C98B78;stroke-width:1.6"/>`+`<rect x="240" y="80" width="56" height="70" rx="8" style="fill:${GI.bile};opacity:.7"/>`+TD(268,74,"bile",{s:10})+TD(140,200,"เลือด",{s:10}).replace(HE.ink,"var(--sb-ink2)");
 b+=`<circle cx="226" cy="116" r="17" style="fill:${CV.bad};opacity:.9"/>`+TW(226,120,"ATP7B",{s:9})+`<path d="M214,104 l24,24 M238,104 l-24,24" style="stroke:#fff;stroke-width:3"/>`;
 const r=rng(3);for(let i=0;i<34;i++)b+=dot(56+r()*150,60+r()*110,3,"#7E8A2A");b+=TD(120,120,"Cu²⁺ ค้าง",{s:11,w:800});
 b+=Ar(120,186,120,206,"#7E8A2A",2.4,{hs:6});
 b+=cardA(8,218,304,"Lab",["ceruloplasmin ↓ · urine copper ↑ (จำเพาะที่สุด)","hepatic copper ↑ (ไวที่สุด) · serum total Cu อาจต่ำ"],CV.teal);
 b+=iPanel(326,8,308,"Wilson: "+d.n,"",d.R,d.c);
 const y0=Math.max(IPH+22,160);b+=cardA(326,y0,308,"รักษา",["chelation: penicillamine, trientine","zinc (ลดการดูดซึมทองแดง) · ปลูกถ่ายตับ"],CV.gold);
 return ESVG(b,`0 0 640 ${Math.max(318,y0+84)}`)}

/* ---------- 15. hemochromatosis ---------- */
const HC={hfe:{n:"Hereditary (HFE)",c:"#2D4F9E",t:"HFE (chr 6) เสีย → hepcidin ต่ำ → ferroportin ทำงานตลอด → ดูดซึมเหล็กเกิน 0.5–1 g/ปี · มีอาการเมื่อสะสม > 20 g (หลังอายุ 40 · หญิงช้ากว่าเพราะประจำเดือน)"},
 sec:{n:"Secondary (transfusion)",c:"#C2334A",t:"ให้เลือดเรื้อรัง (β-thalassemia major, MDS) หรือ ineffective erythropoiesis → erythroferrone กด hepcidin"}};
function hcD(){const d=HC[ST.hc];let b=lobule(120,130,100,{iron:true,seed:11,zone:1,zc:"#2D4F9E"})+T(124,250,"Prussian blue: เริ่มที่ zone 1",{c:"s m"});
 b+=`<rect x="250" y="8" width="384" height="88" rx="14" style="fill:color-mix(in srgb,${d.c} 9%,var(--sb-surface));stroke:color-mix(in srgb,${d.c} 45%,transparent)"/>`+T(264,30,d.n,{a:"start",c:"bh"})+wrapT(264,50,d.t,66,"s",14);
 const O=[["ตับ","cirrhosis · HCC (เสี่ยง ~200 เท่า)"],["ตับอ่อน","diabetes mellitus"],["ผิวหนัง","สีคล้ำ slate-gray (bronze)"],["หัวใจ","cardiomyopathy · arrhythmia"],["Pituitary / อัณฑะ","hypogonadism"],["ข้อ","pseudogout (CPPD) ที่ MCP"]];
 O.forEach(([n,s],i)=>{const x=250+(i%2)*194,y=106+Math.floor(i/2)*50;b+=`<rect x="${x}" y="${y}" width="188" height="44" rx="10" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+`<circle cx="${x+16}" cy="${y+22}" r="6" style="fill:#2D4F9E"/>`+T(x+30,y+19,n,{a:"start",c:"bh"})+T(x+30,y+35,s,{a:"start",c:"s m"})});
 b+=T(250,276,"Lab: ferritin ↑ · transferrin saturation ↑ · TIBC ↓",{a:"start",c:"s"})+T(250,294,"รักษา: phlebotomy · chelation",{a:"start",c:"s"});
 return ESVG(b,"0 0 640 304")}

/* ---------- 16. PBC vs PSC ---------- */
const PB={pbc:{n:"Primary biliary cholangitis",c:"#7A5BC7",o:{},R:["ทำลายท่อน้ำดีเล็ก–กลางในตับ โดย T cell · florid duct lesion ± granuloma","หญิง 9:1 อายุ 40–50 ปี","AMA ⊕ 90–95% (ต่อ PDC-E2) · IgM ↑","สัมพันธ์ Sjögren, thyroiditis, scleroderma, RA, celiac","ภาพท่อน้ำดีปกติ · รักษา ursodeoxycholic acid"]},
 psc:{n:"Primary sclerosing cholangitis",c:"#2F8A78",o:{beads:"both"},R:["อักเสบ + fibrosis รอบท่อแบบ onion skin ของท่อนอกตับและท่อใหญ่ในตับ","ชาย 2:1 อายุ 20–50 ปี","~70% มี IBD (ส่วนใหญ่ UC) · p-ANCA ⊕ ~65%","ERCP/MRCP: ตีบสลับโป่งเป็นลูกปัด (beading)","เสี่ยง cholangiocarcinoma, มะเร็งถุงน้ำดี"]},
 sec:{n:"Secondary biliary cirrhosis",c:"#C7892B",o:{dil:true,stones:["cbd"]},R:["อุดตันนอกตับนาน (นิ่ว, stricture, มะเร็งหัวตับอ่อน)","ความดันในท่อสูง → น้ำดีคั่ง → fibrosis","แทรกซ้อน ascending cholangitis"]}};
function pbD(){const d=PB[ST.pb];let b=hepatoB(0,6,.9,Object.assign({lab:false},d.o));
 if(ST.pb==="pbc")[[80,74],[120,64],[240,52],[280,66],[110,80],[246,76]].forEach(([px,py])=>b+=ring(px*.9,6+py*.9,9,"#E8D6FF"));
 b+=T(160,296,ST.pb==="pbc"?"วงสีม่วง = ท่อเล็กในตับที่ถูกทำลาย":ST.pb==="psc"?"ท่อใหญ่ตีบสลับโป่ง (beading)":"ท่อโป่งเหนือจุดอุด",{c:"s m"});
 b+=iPanel(330,8,304,d.n,"",d.R,d.c);
 b+=T(330,Math.max(IPH+30,250),"ทั้งหมดเป็น cholestatic: ALP ↑ GGT ↑ คัน เหลือง cholesterol ↑",{a:"start",c:"s m"});
 return ESVG(b,`0 0 640 ${Math.max(306,IPH+42)}`)}

/* ---------- 17. gallstones & complications ---------- */
const GS={gb:{n:"Asymptomatic / biliary colic",o:{stones:["gb"]},c:"#C7892B",L:["N","N","N","⊝"],R:["70–80% ไม่มีอาการตลอดชีวิต","colic: ปวด RUQ/ลิ้นปี่คงที่หลังอาหารมัน (CCK) ร้าวไหล่ขวา หายเอง","lab ปกติ · US เห็นนิ่ว"]},
 cystic:{n:"Acute cholecystitis",o:{stones:["gb","cystic"],gbBig:true,gbWall:"thick",ductHl:["cystic"]},c:"#C2334A",L:["N/↑","N","N","⊕"],R:["นิ่วอุดคอถุงน้ำดี/cystic duct (90%) → lysolecithin ระคายเคือง → อักเสบ","ปวด RUQ > 6 ชม. ไข้ · Murphy sign","US ผนังหนา · HIDA scan ไม่เห็นถุงน้ำดี","acalculous: ผู้ป่วยหนัก (stasis, ขาดเลือด)"]},
 cbd:{n:"Choledocholithiasis → cholangitis",o:{stones:["gb","cbd"],dil:true,ductHl:["cbd"]},c:"#7A5BC7",L:["↑↑","↑↑","N","±"],R:["นิ่วใน CBD → ALP, GGT, direct bilirubin ↑","ติดเชื้อซ้อน = ascending cholangitis","Charcot triad: ไข้ + เหลือง + ปวด RUQ","Reynolds pentad: + สับสน + ช็อก → ระบายท่อด่วน (ERCP)"]},
 amp:{n:"Gallstone pancreatitis",o:{stones:["gb","amp"],dil:true,ductHl:["amp"],pancC:"#E9A98C"},c:"#D9822B",L:["↑","↑","↑↑","±"],R:["นิ่วอุดที่ ampulla → pancreatic duct อุด","ปวดลิ้นปี่ร้าวหลัง · lipase ↑ ≥ 3 เท่า","ALT ↑ ชี้ว่าสาเหตุเป็นนิ่ว"]},
 ileus:{n:"Gallstone ileus",o:{stones:[],gbWall:"thick"},c:"#8C6D46",L:["N","N","N","±"],R:["นิ่วก้อนใหญ่กัดทะลุเป็น fistula ถุงน้ำดี–duodenum","ไปอุดที่ ileocecal valve → SBO","Rigler triad: pneumobilia + SBO + นิ่วนอกตำแหน่ง"]}};
function gsD(){const d=GS[ST.gs];let b=hepatoB(0,6,.9,Object.assign({lab:true},d.o));
 if(ST.gs==="ileus")b+=`<path d="M108,160 L140,196" style="stroke:${CV.bad};stroke-width:4;stroke-dasharray:5 3"/>`+`<path d="M150,268 l8,-8 l8,8 l-8,8Z" style="fill:${GI.stone};stroke:${GI.stoneD};stroke-width:1.4"/>`;
 b+=`<rect x="8" y="290" width="314" height="40" rx="12" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`;["ALP","Bili","Lip.","ไข้"].forEach((n,i)=>{const x=18+i*78;b+=T(x,315,n,{a:"start",c:"s"});const v=d.L[i];b+=v==="⊕"||v==="⊝"||v==="±"?tag(x+56,310,v,v==="⊕"?CV.bad:"#9AA3B2",{w:34}):lv(x+54,310,v,{w:40})});
 b+=iPanel(334,8,300,d.n,"",d.R,d.c);
 const y0=Math.max(IPH+22,206);b+=cardA(334,y0,146,"Cholesterol (80–90%)",["หญิง อ้วน อายุ estrogen","ลดน้ำหนักเร็ว · fibrate"],CV.gold,{n:22})+cardA(488,y0,146,"Pigment",["ดำ: hemolysis","น้ำตาล: ติดเชื้อ/พยาธิ"],"#5B3E8C",{n:22});
 return ESVG(b,`0 0 640 ${Math.max(338,y0+84)}`)}

/* ---------- 18. cholangiocarcinoma & gallbladder cancer ---------- */
const CG={chol:{n:"Cholangiocarcinoma",c:"#5B3E8C",o:{mass:"hilum",dil:true},R:["adenocarcinoma ของท่อน้ำดี + desmoplastic stroma","ตำแหน่งบ่อยสุด: รอยต่อ right/left hepatic duct (Klatskin)","PSC · liver fluke (Opisthorchis, Clonorchis) · hepatolithiasis, choledochal cyst","มาช้า: เหลืองไม่ปวด น้ำหนักลด · พยากรณ์แย่"]},
 gbca:{n:"Gallbladder carcinoma",c:"#C2334A",o:{mass:[104,170,20],stones:["gb"]},R:["มะเร็งที่พบบ่อยที่สุดของทางเดินน้ำดีนอกตับ · หญิง ≥ 2 เท่า","นิ่วพบร่วม 95% แต่ผู้มีนิ่วเป็นมะเร็งเพียง 1–2%","มักพบระยะลุกลาม · 5-year survival < 10%"]},
 porc:{n:"Porcelain gallbladder",c:"#8C6D46",o:{gbWall:"porcelain"},R:["ผนังถุงน้ำดีมีหินปูนจาก chronic cholecystitis","พบโดยบังเอิญจากภาพถ่าย","แนะนำตัดถุงน้ำดีป้องกันมะเร็ง"]}};
function cgD(){const d=CG[ST.cg];let b=hepatoB(0,6,.9,Object.assign({lab:true},d.o));b+=iPanel(334,8,300,d.n,"",d.R,d.c);
 b+=T(8,300,"เหลืองไม่ปวด + ถุงน้ำดีโป่งคลำได้ (Courvoisier) → คิดถึงมะเร็งที่อุดปลาย CBD",{a:"start",c:"s m"});
 return ESVG(b,`0 0 640 ${Math.max(310,IPH+16)}`)}

/* ---------- 19. acute pancreatitis ---------- */
const APX={gall:{n:"Gallstone",t:"นิ่วอุด ampulla → ความดันในท่อสูง → lipase รั่ว → fat necrosis เฉพาะที่ → บวม ขาดเลือด",o:{stones:["gb","amp"]}},alc:{n:"Alcohol",t:"acinar cell บาดเจ็บโดยตรง + หลั่งโปรตีนข้นอุดท่อเล็ก + sphincter of Oddi หดตัว",o:{}},
 oth:{n:"อื่น ๆ",t:"TG > 1000 mg/dL · hypercalcemia · ERCP · trauma · ยา (azathioprine, sulfa, NRTI) · mumps · PRSS1/SPINK1/CFTR",o:{}}};
function apxD(){const d=APX[ST.apx];let b=hepatoB(-10,-40,.9,Object.assign({lab:false,pancC:"#E58F7A"},d.o));
 const r=rng(8);for(let i=0;i<14;i++)b+=`<circle cx="${180+r()*130}" cy="${150+r()*50-(i*2)}" r="4" style="fill:#FBF3C8;stroke:#C7A23A"/>`;
 b+=TD(240,250,"จุดเหลือง = fat necrosis (saponification)",{s:10}).replace(HE.ink,"var(--sb-ink2)");
 const S=[["Trypsinogen → trypsin ในตับอ่อน","ก่อนเวลา",CV.bad],["Trypsin ปลุก enzyme อื่น","phospholipase, elastase, kallikrein",CV.gold],["Autodigestion","fat necrosis · หลอดเลือดถูกทำลาย → เลือดออก",CV.violet],["SIRS","ARDS · shock · ไตวาย · DIC · Ca²⁺ ↓",CV.dx]];
 S.forEach(([t,s,c],i)=>{const y=8+i*58;b+=cardBox(336,y,298,50,t,[s],c);if(i<3)b+=Ar(485,y+50,485,y+58,CV.mut,1.4,{hs:5})});
 b+=`<rect x="8" y="262" width="626" height="54" rx="12" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(22,284,"สาเหตุ: "+d.n,{a:"start",c:"bh"})+T(22,304,d.t,{a:"start",c:"s"});
 b+=T(8,340,"วินิจฉัย 2 ใน 3: ปวดลิ้นปี่ร้าวหลัง · lipase/amylase ≥ 3 เท่า · ภาพถ่ายเข้าได้",{a:"start",c:"s m"});
 return ESVG(b,"0 0 640 350")}

/* ---------- 20. chronic pancreatitis ---------- */
const CP={alc:{n:"Alcohol",t:"สาเหตุบ่อยที่สุด · ชายวัยกลางคน · acute pancreatitis ซ้ำ ๆ → fibrosis รอบ lobule"},gen:{n:"Genetic",t:"ถึง 25% มีพื้นฐานทางพันธุกรรม: CFTR, PRSS1, SPINK1 · PRSS1 เสี่ยงมะเร็ง ~40% ตลอดชีวิต"},obs:{n:"Obstruction / autoimmune",t:"ท่ออุดนานจากนิ่วหรือเนื้องอก · autoimmune (IgG4-related) ตอบสนองต่อ steroid"}};
function cpD(){const d=CP[ST.cp];let b=hepatoB(-10,-40,.9,{lab:false,pancC:"#D9C8B0",pancCalc:true,pdDil:true});
 b+=TD(240,250,"ฝ่อ + fibrosis + calcification · ท่อโป่ง",{s:10}).replace(HE.ink,"var(--sb-ink2)");
 b+=`<rect x="336" y="8" width="298" height="84" rx="14" style="fill:color-mix(in srgb,${CV.gold} 10%,var(--sb-surface));stroke:color-mix(in srgb,${CV.gold} 45%,transparent)"/>`+T(350,30,"สาเหตุ: "+d.n,{a:"start",c:"bh"})+wrapT(350,50,d.t,50,"s",14);
 const F=[["Exocrine ↓","steatorrhea · ขาด A, D, E, K (เมื่อเหลือ < 10%)",CV.gold],["Endocrine ↓","diabetes mellitus (ช่วงท้าย)",CV.violet],["ปวด","ปวดท้อง/หลังเรื้อรัง · กระตุ้นด้วยสุรา อาหารมื้อใหญ่",CV.bad],["Pseudocyst","~10% · ผนังเป็น granulation tissue ไม่มี epithelium",CV.dx]];
 F.forEach(([t,s,c],i)=>b+=cardBox(336,102+i*56,298,50,t,[s],c));
 b+=T(8,300,"amylase/lipase อาจปกติ (acinar หายไปมากแล้ว) · CT เห็น calcification",{a:"start",c:"s m"});
 return ESVG(b,"0 0 640 334")}

/* ---------- 21. pancreatic cancer ---------- */
const PC={head:{n:"หัวตับอ่อน (~60%)",o:{mass:"head",dil:true,gbBig:true},R:["อุด CBD ส่วนปลาย → เหลืองไม่ปวด คัน อุจจาระซีด","Courvoisier sign: ถุงน้ำดีโป่งคลำได้ ไม่กดเจ็บ","พบเร็วกว่าเล็กน้อยเพราะเหลือง"]},
 tail:{n:"ตัวและหาง (~20%)",o:{mass:"tail"},R:["ไม่กดท่อน้ำดี → เงียบจนก้อนใหญ่และแพร่แล้ว","ปวดหลัง (ลาม nerve plexus) น้ำหนักลด","เบาหวานที่เพิ่งเป็น"]}};
function pcD(){const d=PC[ST.pc];let b=hepatoB(0,6,.9,Object.assign({lab:true,massC:"#5B5F6E"},d.o));
 b+=iPanel(334,8,300,"Pancreatic adenocarcinoma · "+d.n,"",d.R,"#5B5F6E");
 const y0=Math.max(IPH+22,170);b+=T(334,y0,"PanIN → invasive carcinoma",{a:"start",c:"bh"});
 [["KRAS","> 90%","#C2334A"],["CDKN2A","p16","#C7892B"],["TP53","","#7A5BC7"],["SMAD4","","#3E6FB0"]].forEach(([g2,s,c],i)=>{const x=334+i*76;b+=`<rect x="${x}" y="${y0+10}" width="68" height="40" rx="10" style="fill:${c}"/>`+`<text x="${x+34}" y="${y0+28}" text-anchor="middle" style="font:800 11.5px var(--sb-font);fill:#fff">${g2}</text><text x="${x+34}" y="${y0+43}" text-anchor="middle" style="font:600 10px var(--sb-font);fill:#fff">${s}</text>`;if(i<3)b+=Ar(x+68,y0+30,x+76,y0+30,CV.mut,1.4,{hs:4})});
 b+=T(334,y0+72,"early → late",{a:"start",c:"s m"});
 b+=tagRow(8,300,620,[["CA 19-9","#5B5F6E"],["บุหรี่ (ปัจจัยเสี่ยงหลัก)","#8C6D46"],["chronic pancreatitis","#C7892B"],["เบาหวาน","#7A5BC7"],["Trousseau: migratory thrombophlebitis","#C2334A"]]);
 return ESVG(b,`0 0 640 ${Math.max(346,y0+84)}`)}

/* ================= sections ================= */
SEC.push({id:"cirrhosis",k:"a",t:"Cirrhosis & portal hypertension: portosystemic shunts",mm:"Cirrhosis · portal hypertension",leg:[],tools:[["tips","TIPS"]],ctrl:()=>sl("hv","HVPG",3,24,1,"mmHg"),wire:()=>wireSl(),draw:portalD,
notes:()=>`<div class="pearl">เลื่อน HVPG: เกิน <b>5 mmHg</b> = portal hypertension · <b>≥ 10</b> = clinically significant → varices, ascites, encephalopathy ${S.h} · กด TIPS เพื่อดูความดันลด</div>
<ul><li>Cirrhosis = ตับถูกปรับโครงสร้างทั้งอวัยวะเป็น <b>nodule ล้อมด้วยแถบ fibrosis</b> + shunt ของหลอดเลือด · สาเหตุหลักทั่วโลก: HBV, HCV, NAFLD, alcohol ${S.r}</li>
<li>~40% ไม่มีอาการจนระยะท้าย · ไม่ใช่การวินิจฉัยจำเพาะ และบางโรค (เช่น HCV ที่หายแล้ว) fibrosis ถดถอยได้ ${S.r}</li>
<li>Portal hypertension จาก cirrhosis: ① <b>resistance ที่ sinusoid</b> ↑ (แผลเป็น nodule, myofibroblast หดตัว, NO ↓ endothelin ↑) ② <b>portal flow ↑</b> จาก splanchnic vasodilation (NO) ${S.r}</li>
<li>สาเหตุแบ่ง prehepatic (portal vein thrombosis), intrahepatic (cirrhosis &gt; 95%, schistosomiasis), posthepatic (Budd-Chiari, right heart failure) ${S.r} ${S.h}</li>
<li>ผลหลัก 4 อย่าง: hepatic encephalopathy, <b>ascites</b>, <b>portosystemic shunt</b>, congestive splenomegaly (→ thrombocytopenia) ${S.r}</li>
<li>Shunt: esophagogastric varices (left gastric ↔ azygos), caput medusae (paraumbilical ↔ epigastric), rectum (superior ↔ middle/inferior rectal), retroperitoneum ${S.r} ${S.fa}</li>
<li>Varices พบ ~40% ของ cirrhosis ระยะท้าย · เลือดออกแต่ละครั้งเสียชีวิต ~30% ${S.r}</li>
<li>ผลจาก estrogen ที่ไม่ถูกทำลาย: spider angioma, palmar erythema, gynecomastia, testicular atrophy ${S.fa} ${S.r}</li>
<li><b>Hepatorenal syndrome</b>: ไตวายเชิงหน้าที่จาก splanchnic vasodilation → renal perfusion ลด → RAAS ยิ่งบีบไต · กลับได้เมื่อปลูกถ่ายตับ ${S.r}</li>
<li>Hepatopulmonary syndrome (หลอดเลือดปอดขยาย → shunt, hypoxemia) และ portopulmonary hypertension ${S.r}</li></ul>`});

SEC.push({id:"budd-chiari",k:"a",t:"Budd-Chiari syndrome & portal vein thrombosis",mm:"Budd-Chiari",leg:[],tools:[["bc",[["pv","Portal vein thrombosis"],["cir","Cirrhosis"],["hv","Budd-Chiari"],["hf","Heart failure"]]]],draw:bcD,
notes:()=>`<div class="pearl">Budd-Chiari: ตับโต + ปวด + ascites โดย<b>ไม่มี JVD</b> · centrilobular (zone 3) congestion และ necrosis ${S.fa} ${S.r}</div>
<ul><li>Budd-Chiari = hepatic vein หลักอุดตัน (อุดเส้นเดียวมักเงียบ) → ความดันในตับสูง ${S.r}</li>
<li>สาเหตุ: myeloproliferative neoplasm (<b>polycythemia vera</b>), โรคการแข็งตัวของเลือดถ่ายทอด, antiphospholipid, PNH, มะเร็งในท้อง (HCC) · ตั้งครรภ์/ยาคุมร่วมกับ thrombophilia ${S.r}</li>
<li>ตับบวมแดงม่วง capsule ตึง · จุลทรรศน์: centrilobular congestion + necrosis · ถ้าช้าเกิด pericentral fibrosis ${S.r}</li>
<li>แบบเฉียบพลันไม่รักษาตายสูง → ทำ portosystemic shunt · แบบเรื้อรังอยู่รอด 5 ปี &gt; 2/3 ${S.r}</li>
<li><b>Portal vein thrombosis</b>: ส่วนใหญ่ไม่มีอาการ · portal hypertension, ปวดท้อง, ไข้ · ตับไม่โต · สาเหตุ: cirrhosis, มะเร็ง, pancreatitis, sepsis ${S.fa}</li>
<li>Portal vein อุด → varices และ ascites ได้ · ลามถึง SMV → ลำไส้ขาดเลือด ${S.r} ${S.fa}</li>
<li>Passive congestion จากหัวใจขวาล้มเหลว → <b>nutmeg liver</b> → centrilobular necrosis → cardiac sclerosis ${S.r}</li>
<li>Sinusoidal obstruction syndrome (veno-occlusive): พิษต่อ endothelium ของ sinusoid หลังปลูกถ่ายไขกระดูก/เคมีบำบัด ${S.r}</li></ul>`});

SEC.push({id:"ascites-sbp",k:"a",t:"Ascites, SAAG & spontaneous bacterial peritonitis",mm:"Ascites · SBP",leg:[],ctrl:()=>sl("sa","Serum albumin",1.5,5,.1,"g/dL")+sl("aa","Ascites albumin",.2,4,.1,"g/dL")+sl("pmn","Ascitic PMN",0,800,10,"/mm³"),wire:()=>wireSl(),draw:ascD,
notes:()=>`<div class="pearl">SAAG = serum albumin − ascites albumin · <b>≥ 1.1 g/dL</b> = portal hypertension ${S.fa} ${S.r} · PMN <b>≥ 250/mm³</b> = SBP ${S.h}</div>
<ul><li>Ascites 85% เกิดจาก cirrhosis · ตรวจพบเมื่อมี ≥ 500 mL · น้ำใส protein &lt; 3 g/dL ${S.r}</li>
<li>กลไก: sinusoidal hypertension + hypoalbuminemia + hepatic lymph เพิ่ม + splanchnic vasodilation/hyperdynamic circulation ${S.r}</li>
<li>พบ neutrophil → ติดเชื้อ · พบเม็ดเลือดแดง → คิดถึงมะเร็งแพร่ในช่องท้อง · hydrothorax มักข้างขวา ${S.r}</li>
<li><b>SBP</b>: ติดเชื้อในน้ำ ascites โดยไม่มีแหล่งในช่องท้อง · แบคทีเรียจากลำไส้ translocate ผ่านต่อมน้ำเหลือง ${S.h}</li>
<li>เชื้อ: E. coli และ gram-negative ในลำไส้ (Klebsiella) · gram-positive ได้ (Streptococcus, Enterococcus) · พบ &gt; 2 ชนิด → คิดถึงอวัยวะทะลุ ${S.h} ${S.fa}</li>
<li>อาการ: ไข้ ปวดท้อง สับสน ไตแย่ลง หรือ<b>ไม่มีอาการเลย</b> → เจาะตรวจในผู้ป่วย cirrhosis + ascites ที่นอนโรงพยาบาล ${S.h}</li>
<li>รักษา: 3rd-generation cephalosporin · ให้ albumin IV ลดไตวายและเพิ่มการรอดชีวิต ${S.h} ${S.fa}</li>
<li>ผู้ป่วย varices แตกเสี่ยง SBP สูง → ให้ antibiotic ป้องกัน ${S.h}</li></ul>`});

SEC.push({id:"lft",k:"a",t:"Serum markers of liver pathology: reading the LFT pattern",mm:"LFT patterns",leg:[],tools:[["lf",[["alc","Alcohol"],["vir","> 1000"],["chol","Cholestatic"],["mas","MASLD"],["cir","Cirrhosis"],["bone","Bone ALP"]]]],draw:lftD,
notes:()=>`<div class="pearl">ดูสองคำถาม: enzyme เด่นแบบ <b>hepatocellular</b> (AST/ALT) หรือ <b>cholestatic</b> (ALP/GGT) และ<b>การทำงาน</b>ของตับ (albumin, PT) เสียหรือยัง ${S.fa}</div>
<ul><li>โรคตับส่วนใหญ่ <b>ALT &gt; AST</b> · alcoholic liver disease <b>AST &gt; ALT</b> (มัก &gt; 2:1) และ AST มักไม่เกิน 500 U/L ${S.fa} ${S.r}</li>
<li>AST &gt; ALT ในโรคที่ไม่เกี่ยวกับ alcohol → สงสัย advanced fibrosis/cirrhosis ${S.fa}</li>
<li>Aminotransferase &gt; 1000 U/L: drug-induced (acetaminophen), ischemic hepatitis, acute viral hepatitis, autoimmune hepatitis ${S.fa}</li>
<li>Ischemic hepatitis: aminotransferase ขึ้นสูงเฉียบพลัน แล้ว bilirubin ค่อย ๆ ขึ้นตาม ${S.h}</li>
<li><b>ALP</b> ↑ ใน cholestasis, โรคแทรกซึม, โรคกระดูก · <b>GGT</b> ↑ ในโรคตับและน้ำดีแต่ไม่ขึ้นในโรคกระดูก · GGT สัมพันธ์การดื่ม ${S.fa}</li>
<li>ในตับวายเฉียบพลัน transaminase ที่<b>ลดลง</b>พร้อม bilirubin/INR ที่แย่ลง = hepatocyte เหลือน้อย ไม่ใช่ดีขึ้น ${S.r}</li>
<li>Functional markers: albumin ↓, PT ↑ (factor II, V, VII, IX, X ลด), bilirubin ↑ · platelet ↓ จาก thrombopoietin ลดและ splenic sequestration ${S.fa} ${S.r}</li>
<li>Choledocholithiasis เป็นสาเหตุบ่อยที่สุดของ extrahepatic cholestasis ${S.h}</li></ul>`});

SEC.push({id:"hep-sero",k:"a",t:"Viral hepatitis serology: reading the hepatitis B panel",mm:"Hepatitis B serology",leg:[],tools:[["hm",[["acute","Acute → recovery"],["chronic","Chronic"],["vacc","Vaccinated"]]]],ctrl:()=>sl("hw","สัปดาห์",0,40,1,""),wire:()=>wireSl(),draw:hbD,
notes:()=>`<div class="pearl">เลื่อนเส้นเวลา: ช่วง <b>window</b> HBsAg หายแล้วแต่ anti-HBs ยังไม่ขึ้น → <b>IgM anti-HBc</b> เป็นตัวเดียวที่บอกการติดเชื้อ ${S.r}</div>
<ul><li><b>HBsAg</b> ขึ้นก่อนมีอาการ สูงสุดช่วงมีอาการ หายใน 12 (ถึง 24) สัปดาห์ถ้าหาย · <b>คงอยู่</b>ในรายเรื้อรัง ${S.r}</li>
<li><b>Anti-HBs</b> ขึ้นหลัง HBsAg หาย อยู่ตลอดชีวิต = ภูมิคุ้มกัน (พื้นฐานของวัคซีน) · ไม่ขึ้นในรายเรื้อรัง ${S.r}</li>
<li><b>HBeAg, HBV DNA</b> = ไวรัสกำลังแบ่งตัว ติดต่อสูง · HBeAg ค้าง → มีแนวโน้มเรื้อรัง · precore mutant: HBeAg ⊝ แต่ DNA สูง ${S.r}</li>
<li>วัคซีน: anti-HBs ⊕ อย่างเดียว · เคยติดเชื้อแล้วหาย: anti-HBs ⊕ + anti-HBc IgG ⊕ ${S.fa}</li>
<li>HBV ระยะฟักตัว 4–26 สัปดาห์ · ผู้ใหญ่ ~2/3 ไม่มีอาการ · เรื้อรัง 5–10% · <b>ทารกติดจากแม่ ~90% เรื้อรัง</b> และเสี่ยง HCC สูงสุด ${S.r}</li>
<li>ความเสียหายของตับมาจาก<b>ภูมิคุ้มกัน</b> (CD8 T cell) ไม่ใช่ไวรัสโดยตรง · นอกตับ: polyarteritis nodosa, glomerulonephritis ${S.r}</li>
<li><b>HAV</b> และ <b>HEV</b>: fecal-oral ไม่เรื้อรัง · HEV รุนแรงในหญิงตั้งครรภ์ และเรื้อรังได้ในผู้ภูมิคุ้มกันต่ำ ${S.r}</li>
<li><b>HCV</b>: เฉียบพลันมักไม่มีอาการ แต่เรื้อรัง ≥ 80% · ไวรัสกลายพันธุ์เร็วหนีภูมิคุ้มกัน · รักษาหายได้ด้วย direct-acting antiviral ${S.r}</li>
<li><b>HDV</b>: ไวรัสบกพร่องต้องอาศัย HBsAg · coinfection พร้อม HBV หรือ superinfection บนผู้เป็นพาหะ (รุนแรงกว่า) ${S.r}</li></ul>`});

SEC.push({id:"reye",k:"b",t:"Reye syndrome",mm:"Reye syndrome",leg:[],tools:[["ry",[["norm","Normal liver"],["reye","Reye"]]]],draw:reyeD,
notes:()=>`<ul><li>Hepatic encephalopathy ในเด็กที่พบน้อยแต่มักถึงตาย · ตามหลังการติดไวรัส (โดยเฉพาะ <b>VZV, influenza</b>) ที่รักษาด้วย <b>aspirin</b> ${S.fa}</li>
<li>Aspirin metabolite ยับยั้ง mitochondrial enzyme แบบ reversible → β-oxidation ↓ ${S.fa}</li>
<li>ตับ: <b>microvesicular steatosis</b> · Robbins จัดเป็นสาเหตุหนึ่งของ acute liver failure ชนิด microvesicular fat (ร่วมกับ fatty liver of pregnancy, valproate, tetracycline) ${S.r}</li>
<li>พบ: mitochondria ผิดปกติ, hyperammonemia, hypoglycemia, อาเจียน, ตับโต, coma · ICP สูงเป็นสาเหตุตาย ${S.fa}</li>
<li>หลีกเลี่ยง aspirin ในเด็ก ยกเว้น <b>Kawasaki disease</b> ${S.fa}</li></ul>`});

SEC.push({id:"ald",k:"b",t:"Alcoholic liver disease",mm:"Alcoholic liver disease",leg:[],tools:[["al",[["ste","Steatosis"],["hep","Hepatitis"],["cir","Cirrhosis"]]]],draw:aldD,
notes:()=>`<div class="pearl">สามระยะซ้อนกันได้: steatosis → alcoholic hepatitis (<b>ballooning + Mallory hyaline + neutrophil</b>) → cirrhosis · การเปลี่ยนแปลงเริ่มที่ <b>zone 3</b> ${S.r}</div>
<ul><li>ดื่ม 80 g ครั้งเดียวก็เกิด steatosis ชั่วคราวได้ · ≥ 80 g/วัน เสี่ยงตับเสียหายรุนแรง · มีเพียง <b>10–15%</b> ของผู้ดื่มหนักที่เป็น cirrhosis ${S.r}</li>
<li>หญิงไวกว่าชายที่ปริมาณเท่ากัน · ALDH2*2 (ครึ่งหนึ่งของคนเอเชีย) ทำให้หน้าแดง · HBV/HCV, เหล็กเกิน, NASH เสริมฤทธิ์ ${S.r}</li>
<li>กลไก steatosis: ADH/ALDH สร้าง <b>NADH</b> มาก → lipogenesis ↑ fatty acid oxidation ↓ ${S.r} ${S.fa}</li>
<li>กลไกบาดเจ็บ: acetaldehyde (lipid peroxidation, protein adduct), CYP2E1 สร้าง ROS, glutathione ลด, endotoxin จากลำไส้กระตุ้น Kupffer cell (TLR4) ${S.r}</li>
<li>Steatosis: macrovesicular ตับโตเหลืองมัน · <b>หายสนิท</b>เมื่อหยุดดื่ม ${S.r}</li>
<li>Alcoholic hepatitis: มักตามหลังดื่มหนัก · ไข้ ตับโตกดเจ็บ เหลือง WBC สูง · AST &gt; ALT ${S.r}</li>
<li>Fibrosis เริ่มรอบ central vein แบบ <b>chicken wire</b> (perisinusoidal) → bridging → micronodular (Laennec) cirrhosis ${S.r}</li>
<li>สาเหตุตายระยะท้าย: hepatic coma, เลือดออกทางเดินอาหารมาก, ติดเชื้อ, hepatorenal syndrome, HCC (1–6% ต่อปีใน alcoholic cirrhosis) ${S.r}</li></ul>`});

SEC.push({id:"nafld",k:"b",t:"Steatotic liver disease: MASLD / NAFLD",mm:"MASLD (NAFLD)",leg:[],tools:[["na",[["st","Steatosis"],["mash","MASH"],["cir","Cirrhosis"]]]],draw:naD,
notes:()=>`<ul><li>NAFLD (ชื่อใหม่ <b>MASLD</b>) = ไขมันในตับในผู้ไม่ดื่มหรือดื่มน้อย และไม่มีสาเหตุอื่น · โรคตับเรื้อรังที่พบบ่อยที่สุดในสหรัฐฯ ${S.r} ${S.fa}</li>
<li>สัมพันธ์ <b>metabolic syndrome</b>: อ้วน, T2DM, ไขมันสูง, ความดันสูง · insulin resistance เป็นแกนกลาง ${S.r} ${S.fa}</li>
<li>Steatosis อย่างเดียว: ไม่มีอาการ อาจคงที่หรือดีขึ้น ${S.fa}</li>
<li><b>NASH / MASH</b>: ต้องมี steatosis (≥ 5%) + lobular inflammation + <b>ballooned hepatocyte</b> · แยกจาก alcoholic hepatitis ด้วย histology ไม่ได้ ${S.r}</li>
<li>เทียบกัน alcoholic hepatitis มีไขมันน้อยกว่า แต่ ballooning, Mallory hyaline, neutrophil มากกว่า ${S.r}</li>
<li>Fibrosis: pericellular รอบ central vein → periportal → bridging → cirrhosis ${S.r}</li>
<li>&gt; 90% ของ "cryptogenic cirrhosis" น่าจะเป็น NASH ที่มอดไปแล้ว ${S.r}</li>
<li>เสี่ยง <b>HCC</b> แม้ไม่มี cirrhosis · วินิจฉัย NASH ต้อง biopsy ${S.r}</li>
<li>เด็ก: steatosis กระจายทั่วกว่า fibrosis ที่ portal ไม่ค่อยมี ballooning ${S.r}</li></ul>`});

SEC.push({id:"aih",k:"b",t:"Autoimmune hepatitis",mm:"Autoimmune hepatitis",leg:[],tools:[["ai",[["t1","Type 1"],["t2","Type 2"]]]],draw:aiD,
notes:()=>`<ul><li>Hepatitis เรื้อรังที่ลุกลาม · พบในหญิงมากกว่า · ไม่รักษาส่วนใหญ่ตายหรือกลายเป็น cirrhosis ${S.r} ${S.fa}</li>
<li>วินิจฉัยจาก 4 อย่าง: <b>autoantibody</b>, <b>IgG สูง</b>, histology, และตัดไวรัส/ยาออก ${S.r}</li>
<li>Type 1: <b>ANA, anti-smooth muscle (ASMA)</b> · Type 2: <b>anti-LKM-1</b> ${S.r} ${S.fa}</li>
<li>Histology: necroinflammation สูง <b>plasma cell เด่น</b> ที่ portal/periportal (interface hepatitis) ${S.r} ${S.fa}</li>
<li>อาการ: ตั้งแต่ enzyme สูงโดยไม่มีอาการ ถึง acute liver failure · ส่วนใหญ่ค่อยเป็นค่อยไป อ่อนเพลีย คลื่นไส้ ปวดท้อง คัน ${S.r} ${S.fa}</li>
<li>หลายรายมี fibrosis/cirrhosis แล้วตอนวินิจฉัย ${S.r}</li>
<li>สัมพันธ์ T1DM, thyroiditis, celiac · overlap กับ PBC/PSC ได้ ${S.r}</li>
<li>ยาบางชนิดทำให้เกิดภาพคล้าย AIH · หยุดยาแล้วหาย ${S.r}</li></ul>`});

SEC.push({id:"hep-enceph",k:"b",t:"Hepatic encephalopathy",mm:"Hepatic encephalopathy",leg:[],ctrl:()=>sl("he","Grade",1,4,1,""),wire:()=>wireSl(),draw:heD,
notes:()=>`<div class="pearl">NH₃ จากลำไส้ข้ามตับ (ตับเสีย + portosystemic shunt) → astrocyte เปลี่ยนเป็น <b>glutamine</b> ซึ่งดึงน้ำ → สมองบวม ${S.r}</div>
<ul><li>ความผิดปกติของสติ ตั้งแต่พฤติกรรมเปลี่ยนเล็กน้อย สับสน ถึง coma · rigidity, hyperreflexia ${S.r}</li>
<li><b>Asterixis</b>: มือสะบัดไม่เป็นจังหวะเมื่อเหยียดแขนกระดกข้อมือ ${S.r}</li>
<li>แหล่ง NH₃ หลักคือทางเดินอาหาร: แบคทีเรีย และ enterocyte (จาก glutamine) · ปกติตับเปลี่ยนเป็น urea ${S.r}</li>
<li>Trigger เพิ่ม NH₃: <b>GI bleed</b>, ท้องผูก, ติดเชื้อ · ขับลดลง: ไตวาย, diuretic, <b>หลัง TIPS</b> ${S.fa}</li>
<li>กลับคืนได้ · รักษา: <b>lactulose</b> (NH₃ → NH₄⁺ ถูกกักในลำไส้) และ <b>rifaximin</b> (ลดแบคทีเรียที่สร้าง NH₃) ${S.fa}</li>
<li>ในตับวายเฉียบพลัน สมองบวมรุนแรงเป็นสาเหตุตายสำคัญ ${S.r}</li>
<li>Fetor hepaticus (กลิ่นลมหายใจ) พบร่วมได้ ${S.fa}</li></ul>`});

SEC.push({id:"liver-tumors",k:"b",t:"Liver tumors: hemangioma, FNH, adenoma, HCC & metastases",mm:"Liver tumors · HCC",leg:[],tools:[["lt",[["hem","Hemangioma"],["fnh","FNH"],["ad","Adenoma"],["hcc","HCC"],["ang","Angiosarcoma"],["met","Metastases"]]]],draw:ltD,
notes:()=>`<ul><li><b>Cavernous hemangioma</b>: benign ที่พบบ่อยที่สุด · ก้อนแดงน้ำเงินนุ่ม มักใต้ capsule &lt; 2 cm · ช่องเลือดผนังบาง · ไม่ควร biopsy ${S.r} ${S.fa}</li>
<li><b>FNH</b>: ไม่ใช่ neoplasm · หญิงวัยผู้ใหญ่ · <b>central stellate scar</b> (ถึง 80%) มีหลอดเลือดแดงผนังหนา · ไม่ต้องรักษา ${S.r}</li>
<li><b>Hepatocellular adenoma</b>: ยาคุมกำเนิด, anabolic steroid · แตกแล้วเลือดออกมากในท้อง · β-catenin-activated หรือ ≥ 5 cm → ตัด (เสี่ยงมะเร็ง) ${S.r} ${S.fa}</li>
<li><b>HCC</b>: &gt; 85% ในเอเชียและแอฟริกาใต้ซาฮารา (HBV จากแม่สู่ลูก) · ชายมากกว่าถึง 8:1 ${S.r}</li>
<li>ส่วนใหญ่บน cirrhosis · 15–20% เกิดในตับที่ไม่ cirrhosis (HBV, NAFLD, adenoma) · <b>aflatoxin</b> (Aspergillus) เสริมกับ HBV และ alcohol ${S.r}</li>
<li>Driver: β-catenin (40%), TERT promoter (50–60%), TP53 (ถึง 60%) · precursor: dysplastic nodule ("nodule in nodule") ${S.r}</li>
<li>HCC บุกเส้นเลือดดำ (portal vein, IVC) · <b>fibrolamellar</b> variant: วัยรุ่น ตับไม่มีโรคเดิม เซลล์ oncocytic คั่นด้วยแถบ collagen ${S.r}</li>
<li>FA: คัดกรองด้วย ultrasound ยืนยันด้วย contrast CT/MRI · AFP ใช้ติดตาม · อาจทำให้ cirrhosis ที่คงที่ทรุดลง หรือ portal vein thrombosis ${S.fa}</li>
<li><b>Angiosarcoma</b>: vinyl chloride, arsenic ${S.fa} · <b>Metastases</b> พบบ่อยกว่ามะเร็งปฐมภูมิ: colon, ปอด, เต้านม · มักหลายก้อน ${S.r} ${S.fa}</li></ul>`});

SEC.push({id:"a1at",k:"b",t:"α1-Antitrypsin deficiency",mm:"α1-Antitrypsin",leg:[],tools:[["a1",[["mm","PiMM"],["mz","PiMZ"],["zz","PiZZ"]]]],draw:a1D,
notes:()=>`<ul><li>โรคของ<b>การพับโปรตีน</b>: α1AT พับผิดค้างใน ER ของ hepatocyte → ระดับในเลือดต่ำมาก ${S.r}</li>
<li>α1AT เป็น serpin ยับยั้ง <b>neutrophil elastase</b> · ขาด → <b>panacinar emphysema</b> ${S.r} ${S.fa}</li>
<li>ตับเสียจาก<b>โปรตีนที่สะสม</b> (toxic gain-of-function → ER stress/UPR) ไม่ใช่จากการขาด ${S.r}</li>
<li>Allele: PiMM ปกติ (90%) · <b>PiZZ</b> ระดับเหลือ ~10% · ถ่ายทอดแบบ <b>codominant</b> (PiMZ ระดับกลาง) ${S.r} ${S.fa}</li>
<li>PiZZ ทุกคนสะสมโปรตีนใน ER แต่มีเพียงส่วนน้อยที่เป็นโรคตับ ${S.r}</li>
<li>Histology: globule กลมใน cytoplasm <b>PAS ⊕ diastase-resistant</b> เริ่มที่ periportal hepatocyte ${S.r}</li>
<li>เป็นโรคตับถ่ายทอดที่วินิจฉัยบ่อยที่สุดในทารกและเด็ก: neonatal hepatitis + cholestasis → cirrhosis → HCC ${S.r}</li>
<li>FA: คิดถึงในคนอายุน้อยที่มีโรคตับ + หอบเหนื่อยโดยไม่สูบบุหรี่ ${S.fa}</li></ul>`});

SEC.push({id:"wilson",k:"b",t:"Wilson disease (hepatolenticular degeneration)",mm:"Wilson disease",leg:[],tools:[["wi",[["liver","Liver"],["brain","Brain"],["eye","Eye"],["other","Blood / kidney"]]]],draw:wiD,
notes:()=>`<div class="pearl">ATP7B เสีย → ทองแดง<b>ขับเข้าน้ำดีไม่ได้</b> และ<b>ใส่ใน ceruloplasmin ไม่ได้</b> → ceruloplasmin ต่ำ ทองแดงสะสมในตับ สมอง ตา ${S.r}</div>
<ul><li>Autosomal recessive · ATP7B (chr 13) เป็น copper-transporting ATPase ที่ canalicular membrane · ส่วนใหญ่เป็น compound heterozygote · ความชุก ~1:30,000–50,000 ${S.r} ${S.fa}</li>
<li>ทองแดงทำร้ายเซลล์โดย Fenton reaction (ROS), จับ sulfhydryl, แทนที่โลหะใน metalloenzyme ${S.r}</li>
<li>Hepatocyte ตาย → ทองแดงที่ไม่จับ ceruloplasmin รั่วเข้าเลือด → basal ganglia, cornea · urine copper ↑ ${S.r}</li>
<li>อายุเริ่ม 6–40 ปี · ตับ: steatosis, hepatitis, acute liver failure, cirrhosis ${S.r}</li>
<li>สมอง: tremor, chorea, dystonia, rigidity, อาการจิตเวช · <b>Kayser-Fleischer ring</b> ใน Descemet membrane พบเกือบทุกรายที่มีอาการประสาท ${S.r}</li>
<li>Hemolytic anemia จากทองแดงอิสระ · Fanconi syndrome ${S.r} ${S.fa}</li>
<li>วินิจฉัย: ceruloplasmin ↓, hepatic copper ↑ (ไวและแม่นที่สุด), urinary copper ↑ (จำเพาะที่สุด) ${S.r}</li>
<li>รักษา: penicillamine/trientine, zinc · ปลูกถ่ายตับรักษาหายได้ ${S.r} ${S.fa}</li></ul>`});

SEC.push({id:"hemochrom",k:"b",t:"Hemochromatosis",mm:"Hemochromatosis",leg:[],tools:[["hc",[["hfe","Hereditary"],["sec","Secondary"]]]],draw:hcD,
notes:()=>`<div class="pearl">Hepcidin ต่ำ → ferroportin เปิดตลอด → ดูดซึมเหล็กไม่หยุด · ร่างกายไม่มีทางขับเหล็กที่ควบคุมได้ ${S.r}</div>
<ul><li>Hereditary: AR · <b>HFE</b> (chr 6) บ่อยที่สุดในผู้ใหญ่ · TFR2 พบน้อย · HAMP, HJV → juvenile form ${S.r} ${S.fa}</li>
<li>สะสมสุทธิ 0.5–1 g/ปี · มีอาการเมื่อสะสม ~<b>20 g</b> → มักหลังอายุ 40 ปี ชายมากกว่า (หญิงเสียเหล็กทางประจำเดือน) ${S.r} ${S.fa}</li>
<li>Secondary: ให้เลือดเรื้อรัง, ineffective erythropoiesis (β-thalassemia, MDS) ผ่าน erythroferrone กด hepcidin ${S.r}</li>
<li>กลไกทำลาย: lipid peroxidation จาก free radical, กระตุ้น stellate cell, ทำลาย DNA ${S.r}</li>
<li>Hemosiderin สะสมตามลำดับ: ตับ, ตับอ่อน, กล้ามเนื้อหัวใจ, pituitary, adrenal, thyroid, ข้อ, ผิวหนัง ${S.r}</li>
<li>ตับ: เหล็กเริ่มที่ <b>periportal hepatocyte</b> (Prussian blue) · <b>ไม่มีการอักเสบ</b> → micronodular cirrhosis ${S.r}</li>
<li>Classic: cirrhosis + diabetes + ผิวคล้ำ ("bronze diabetes") + หัวใจ · hypogonadism · pseudogout ${S.r} ${S.fa}</li>
<li><b>HCC</b> เสี่ยง ~200 เท่า และไม่หมดไปแม้รักษา ${S.r}</li>
<li>รักษา: phlebotomy ซ้ำ ๆ · chelation (deferasirox, deferoxamine, deferiprone) · ตรวจญาติ ${S.fa} ${S.r}</li></ul>`});

SEC.push({id:"jaundice",k:"c",t:"Jaundice & hereditary hyperbilirubinemias",mm:"Jaundice · Gilbert · Crigler-Najjar",leg:[],tools:[["ja",[["hem","Hemolysis"],["gil","Gilbert"],["cn","Crigler-Najjar"],["dj","Dubin-Johnson"],["obs","Obstruction"],["hep","Hepatocellular"]]]],draw:jaD,
notes:()=>`<div class="pearl">แตะแต่ละโรคเพื่อดูว่าขวางขั้นไหน: ก่อน conjugation → <b>unconjugated</b> (ไม่ออกปัสสาวะ) · หลัง conjugation → <b>conjugated</b> (ปัสสาวะเข้ม) ${S.fa} ${S.r}</div>
<ul><li>Bilirubin ปกติ 0.3–1.2 mg/dL · สูงแล้วเห็นเป็น jaundice (ผิว) และ icterus (ตาขาว) ${S.r}</li>
<li>Unconjugated: สร้างเกิน (hemolysis, ineffective erythropoiesis), uptake ลด, conjugation บกพร่อง (ทารก, Gilbert, Crigler-Najjar) ${S.r}</li>
<li>Conjugated: ขับออกบกพร่อง (Dubin-Johnson, Rotor) หรือ<b>น้ำดีไหลไม่ได้</b> (อุดท่อ, PBC, PSC) ${S.r} ${S.fa}</li>
<li><b>Gilbert</b>: UGT1A1 ลดเล็กน้อย เหลืองเมื่ออดอาหาร เครียด ป่วย · ไม่มีอันตราย ${S.fa}</li>
<li><b>Crigler-Najjar type I</b>: ไม่มี UGT1A1 → kernicterus · type II เบากว่า ตอบสนองต่อ phenobarbital ${S.fa} ${S.r}</li>
<li><b>Dubin-Johnson</b>: ขับ conjugated bilirubin ไม่ได้ ตับสีดำ · <b>Rotor</b> คล้ายกันแต่เบากว่า ตับไม่ดำ ${S.fa}</li>
<li><b>Benign neonatal hyperbilirubinemia</b>: RBC ทารกแตกมาก + UGT ยังไม่โต + ลำไส้ปลอดเชื้อ (enterohepatic ↑) · เริ่มหลัง 24 ชม. หายใน 1–2 สัปดาห์ · phototherapy ${S.fa}</li>
<li><b>Biliary atresia</b>: ท่อน้ำดีนอกตับถูกทำลายเป็น fibrosis · เหลืองนานเกิน 2 สัปดาห์ ปัสสาวะเข้ม อุจจาระซีด direct bilirubin ↑ · เหตุปลูกถ่ายตับในเด็กที่บ่อยที่สุด ${S.fa} ${S.r}</li>
<li>Cholestasis: คัน, xanthoma, ดูดซึมไขมันและ vit A, D, K บกพร่อง, ALP ↑ ${S.r}</li></ul>`});

SEC.push({id:"psc-pbc",k:"c",t:"Biliary tract disease: PBC vs PSC",mm:"PBC vs PSC",leg:[],tools:[["pb",[["pbc","PBC"],["psc","PSC"],["sec","Secondary biliary"]]]],draw:pbD,
notes:()=>`<div class="pearl">PBC = หญิงวัยกลางคน + <b>AMA</b> + ท่อเล็กในตับ · PSC = ชายอายุน้อยกว่า + <b>UC</b> + ท่อใหญ่เป็นลูกปัด ${S.r} ${S.fa}</div>
<ul><li><b>PBC</b>: autoimmune (T cell) ทำลายท่อน้ำดีเล็ก–กลางในตับ · ท่อใหญ่และนอกตับไม่เกี่ยว · หญิง 9:1 อายุ 40–50 ${S.r}</li>
<li>AMA ต่อ <b>E2 ของ pyruvate dehydrogenase</b> พบ 90–95% · IgM ↑ · titer ไม่สัมพันธ์กับความรุนแรง ${S.r}</li>
<li>Histology: lymphocyte/granuloma ทำลายท่อ (<b>florid duct lesion</b>) → ductopenia → cirrhosis ${S.r}</li>
<li>อาการ: อ่อนเพลีย <b>คัน</b> ค่อยเป็นค่อยไป · cholesterol สูง xanthelasma · osteoporosis · หลายรายพบจาก ALP สูง ${S.r}</li>
<li>สัมพันธ์ Sjögren (70%), thyroiditis, scleroderma, RA, celiac · รักษา <b>ursodeoxycholic acid</b> ${S.r} ${S.fa}</li>
<li><b>PSC</b>: อักเสบและ fibrosis อุดท่อนอกตับและท่อใหญ่ในตับ สลับโป่ง · ชาย 2:1 อายุ 20–50 ${S.r}</li>
<li>~70% ของ PSC มี IBD (UC) · ANCA ⊕ ~65% · fibrosis รอบท่อแบบ <b>onion skin</b> ${S.r} ${S.fa}</li>
<li>วินิจฉัยด้วย ERCP/MRCP เห็น <b>beading</b> · เสี่ยง cholangiocarcinoma, มะเร็งถุงน้ำดี, ascending cholangitis ${S.r} ${S.fa}</li>
<li>ต้องแยกจาก IgG4-related sclerosing cholangitis ซึ่งตอบสนองต่อ steroid ${S.r}</li>
<li><b>Secondary biliary cirrhosis</b>: อุดตันนอกตับนาน (นิ่ว, stricture, มะเร็งหัวตับอ่อน) ${S.fa}</li></ul>`});

SEC.push({id:"gallstones",k:"c",t:"Cholelithiasis & its complications",mm:"Gallstones · cholecystitis",leg:[],tools:[["gs",[["gb","Biliary colic"],["cystic","Cholecystitis"],["cbd","CBD stone / cholangitis"],["amp","Pancreatitis"],["ileus","Gallstone ileus"]]]],draw:gsD,
notes:()=>`<div class="pearl">แตะย้ายตำแหน่งนิ่ว: ถุงน้ำดี → cystic duct → CBD → ampulla · ยิ่งนิ่ว<b>เล็ก</b>ยิ่งอันตรายเพราะหลุดเข้าท่อได้ ${S.r}</div>
<ul><li>&gt; 95% ของโรคทางเดินน้ำดีมาจากนิ่ว · ผู้ใหญ่ในประเทศรายได้สูงมี 10–20% ${S.r}</li>
<li><b>Cholesterol stone</b> (&gt; 50% cholesterol): 90% ในตะวันตก · เกิดจาก cholesterol อิ่มตัวเกิน + ถุงน้ำดีบีบตัวน้อย + nucleation เร็ว + mucus มาก ${S.r}</li>
<li>ปัจจัย: อายุ, หญิง, estrogen (ยาคุม ตั้งครรภ์), อ้วน, ลดน้ำหนักเร็ว, พันธุกรรม (ชนพื้นเมืองอเมริกัน) · 8 F's ${S.r} ${S.fa}</li>
<li><b>Pigment stone</b> (calcium bilirubinate): hemolysis เรื้อรัง, ileum เสีย/ตัดออก, ติดเชื้อ/พยาธิในท่อน้ำดี · ดำ = ทึบรังสี, น้ำตาล = ติดเชื้อ ${S.r} ${S.fa}</li>
<li>70–80% ไม่มีอาการตลอดชีวิต · <b>biliary colic</b> จริง ๆ ปวดคงที่ RUQ/ลิ้นปี่ หลังอาหารมัน ร้าวไหล่ขวาหรือหลัง ${S.r}</li>
<li><b>Acute cholecystitis</b>: 90% จากนิ่วอุดคอถุงน้ำดี/cystic duct · เริ่มจากเคมี (lysolecithin, bile salt, prostaglandin) ติดเชื้อตามทีหลัง ${S.r}</li>
<li>Murphy sign · US หรือ HIDA scan (ไม่เห็นถุงน้ำดี = cystic duct อุด) · acalculous ในผู้ป่วยหนัก ${S.fa} ${S.r}</li>
<li><b>Choledocholithiasis</b>: ALP, GGT, direct bilirubin ↑ · <b>ascending cholangitis</b>: Charcot triad (ไข้ เหลือง ปวด RUQ), Reynolds pentad (+ สับสน ช็อก) ${S.fa}</li>
<li>แทรกซ้อนอื่น: empyema, ทะลุ, fistula, pancreatitis, <b>gallstone ileus</b> (นิ่วใหญ่กัดทะลุเข้าลำไส้ อุดที่ ileocecal valve), มะเร็งถุงน้ำดี ${S.r} ${S.fa}</li></ul>`});

SEC.push({id:"biliary-ca",k:"c",t:"Cholangiocarcinoma, gallbladder cancer & porcelain gallbladder",mm:"Cholangiocarcinoma · GB cancer",leg:[],tools:[["cg",[["chol","Cholangiocarcinoma"],["gbca","Gallbladder cancer"],["porc","Porcelain GB"]]]],draw:cgD,
notes:()=>`<ul><li><b>Cholangiocarcinoma</b>: adenocarcinoma ของท่อน้ำดี ในตับหรือนอกตับ · gland แทรกใน desmoplastic stroma · พยากรณ์แย่ ${S.r} ${S.fa}</li>
<li>ปัจจัยเสี่ยง: <b>PSC</b>, <b>พยาธิใบไม้ตับ</b> (Opisthorchis, Clonorchis) ${S.r} ${S.fa}</li>
<li>ตำแหน่งบ่อยสุดคือรอยต่อ right/left hepatic duct · มาช้าด้วยเหลือง น้ำหนักลด ปวดท้อง ${S.fa}</li>
<li>แยกจาก PSC เองได้ยากมาก และมักผ่าตัดไม่ได้ตอนวินิจฉัย ${S.h}</li>
<li><b>Gallbladder carcinoma</b>: มะเร็งที่พบบ่อยที่สุดของทางเดินน้ำดีนอกตับ · หญิง ≥ 2 เท่า · สูงในชิลี โบลิเวีย อินเดียเหนือ ${S.r}</li>
<li>นิ่วพบร่วม 95% แต่มีนิ่วแล้วเป็นมะเร็งเพียง 1–2% · จุดร่วมคือการอักเสบเรื้อรัง ${S.r}</li>
<li>ส่วนใหญ่พบระยะผ่าตัดไม่ได้ · 5-year survival &lt; 10% · ERBB2/RAS, TP53 ${S.r}</li>
<li><b>Porcelain gallbladder</b>: หินปูนที่ผนังจาก chronic cholecystitis · พบโดยบังเอิญ · แนะนำ cholecystectomy ป้องกันมะเร็ง ${S.fa}</li>
<li>Ampullary carcinoma มีอัตราผ่าตัดหายสูงที่สุดในกลุ่มที่มาด้วยเหลืองไม่ปวด ${S.h}</li></ul>`});

SEC.push({id:"acute-panc",k:"d",t:"Acute pancreatitis",mm:"Acute pancreatitis",leg:[],tools:[["apx",[["gall","Gallstone"],["alc","Alcohol"],["oth","Other causes"]]]],draw:apxD,
notes:()=>`<div class="pearl">แก่นของทุกสาเหตุ: enzyme ถูก<b>กระตุ้นก่อนเวลาในตับอ่อน</b> → autodigestion ${S.r} · สาเหตุจำ <b>I GET SMASHED</b> ${S.fa}</div>
<ul><li>บาดเจ็บของ parenchyma ที่<b>กลับคืนได้</b> · นิ่วและ alcohol รวมกัน ~80% ${S.r}</li>
<li>สามทาง: ① ท่ออุด (นิ่ว) → lipase รั่ว → fat necrosis ② acinar cell บาดเจ็บโดยตรง ③ การขนส่ง proenzyme ในเซลล์ผิดปกติ · Ca²⁺ สูงเร่ง trypsin autoactivation ${S.r}</li>
<li>พันธุกรรม: PRSS1 (trypsinogen ทนต่อการถูกทำลาย), SPINK1 (trypsin inhibitor), CFTR ${S.r}</li>
<li>สาเหตุอื่น: hypertriglyceridemia (&gt; 1000 mg/dL), hypercalcemia, ERCP, trauma, mumps/coxsackie, ยา (azathioprine, sulfa, NRTI, protease inhibitor) ${S.r} ${S.fa}</li>
<li>Morphology: บวม → <b>fat necrosis</b> (calcium soap) → necrotizing → hemorrhagic ${S.r}</li>
<li>ปวดลิ้นปี่คงที่รุนแรง<b>ร้าวไปหลัง</b> · <b>lipase</b> จำเพาะและไวที่สุด (สูง 8–14 วัน) · amylase กลับปกติใน 3–5 วัน ${S.r}</li>
<li>วินิจฉัยเมื่อมี 2 ใน 3: อาการปวด, amylase/lipase ≥ 3 เท่า, ภาพถ่าย ${S.fa}</li>
<li>รุนแรง: SIRS, ARDS, shock, ATN, DIC · <b>hypocalcemia</b> จาก saponification · ~5% ตายในสัปดาห์แรก ${S.r}</li>
<li>ตามมา: <b>pseudocyst</b> (ผนัง granulation tissue ไม่มี epithelium), necrosis ติดเชื้อ 40–60% ของชนิด necrotizing (gram-negative) ${S.r} ${S.fa}</li>
<li>รักษา: งดอาหารทางปาก, น้ำเกลือ, แก้ปวด ${S.r}</li></ul>`});

SEC.push({id:"chronic-panc",k:"d",t:"Chronic pancreatitis",mm:"Chronic pancreatitis",leg:[],tools:[["cp",[["alc","Alcohol"],["gen","Genetic"],["obs","Obstruction / autoimmune"]]]],draw:cpD,
notes:()=>`<ul><li>การอักเสบยืดเยื้อที่ทำลาย exocrine parenchyma แบบ<b>ไม่กลับคืน</b> + fibrosis · ช่วงท้ายเสีย endocrine ด้วย ${S.r}</li>
<li>สาเหตุบ่อยที่สุด: <b>ดื่มสุรานาน</b> · อื่น: ท่ออุดนาน (นิ่ว เนื้องอก), autoimmune, พันธุกรรม (ถึง 25%) ${S.r}</li>
<li>มักตามหลัง acute pancreatitis ซ้ำ ๆ → perilobular fibrosis ท่อบิดเบี้ยว สารคัดหลั่งข้น ${S.r}</li>
<li>Morphology: acinus ฝ่อหาย fibrosis ท่อโป่งมี<b>ก้อนหินปูน</b> · islet ค่อนข้างเหลืออยู่ ฝังใน fibrosis ${S.r} ${S.fa}</li>
<li>อาการ: ปวดท้อง/หลังซ้ำ ๆ หรือเรื้อรัง · กระตุ้นด้วยสุรา อาหารมื้อใหญ่ opioid ${S.r}</li>
<li><b>Pancreatic insufficiency</b> (เมื่อเหลือ &lt; 10%): steatorrhea, ขาด vit ละลายไขมัน, เบาหวาน ${S.fa}</li>
<li>Amylase/lipase อาจไม่สูง · CT/US เห็น calcification ${S.r} ${S.fa}</li>
<li>Pseudocyst ~10% · อัตราตาย 50% ใน 20–25 ปี ${S.r}</li>
<li>PRSS1 hereditary pancreatitis เสี่ยงมะเร็งตับอ่อน ~40% ตลอดชีวิต ${S.r}</li>
<li>Autoimmune pancreatitis (IgG4) ตอบสนองต่อ steroid และเลียนแบบมะเร็งได้ ${S.r}</li></ul>`});

SEC.push({id:"panc-ca",k:"d",t:"Pancreatic adenocarcinoma",mm:"Pancreatic cancer",leg:[],tools:[["pc",[["head","Head"],["tail","Body / tail"]]]],draw:pcD,
notes:()=>`<div class="pearl">เหลืองไม่ปวด + ถุงน้ำดีโป่งคลำได้ (<b>Courvoisier</b>) + น้ำหนักลด → มะเร็งหัวตับอ่อน ${S.r} ${S.fa}</div>
<ul><li>Infiltrating ductal adenocarcinoma · สาเหตุตายจากมะเร็งอันดับ 3 ในสหรัฐฯ · 5-year survival ~10% ${S.r}</li>
<li>&gt; 90% มาจาก <b>PanIN</b> (ที่เหลือจาก IPMN, mucinous cystic neoplasm) ${S.r}</li>
<li>ยีน: <b>KRAS</b> (บ่อยที่สุด เกิดก่อน), CDKN2A (p16), TP53, SMAD4 ${S.r} ${S.fa}</li>
<li>ปัจจัยเสี่ยง: <b>บุหรี่</b> (สำคัญที่สุด), chronic pancreatitis, เบาหวาน, อายุ &gt; 50, germline BRCA2 ฯลฯ ${S.r} ${S.fa}</li>
<li>~60% ที่หัว, 15% ตัว, 5% หาง · บุกรุกสูง + <b>desmoplasia</b> หนาแน่น → ก้อนแข็งสีเทาขาวขอบไม่ชัด ${S.r}</li>
<li>ลามตามเส้นประสาท (ปวดหลัง) หลอดเลือด retroperitoneum · แพร่ไปตับและปอด ${S.r}</li>
<li>มะเร็งที่หัวอุด CBD ปลาย → obstructive jaundice · ที่ตัว/หางเงียบจนลุกลาม ${S.r}</li>
<li><b>Trousseau sign</b> (migratory thrombophlebitis) ~10% · เบาหวานที่เพิ่งเป็นพบได้ถึงครึ่ง ${S.r}</li>
<li>&gt; 80% ผ่าตัดไม่ได้ตอนวินิจฉัย · CA 19-9 ใช้ติดตาม ไม่จำเพาะพอสำหรับคัดกรอง ${S.r} ${S.fa}</li></ul>`});

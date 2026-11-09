/* ================= Cardiovascular Pathology III · Myocardium, valves, pericardium & vasculitis =================
   First Aid Step 1 2025 (CV pathology, pp. 315–320; vasculitides from the MSK chapter) order · Robbins & Cotran 10e Ch 11–12 · Harrison 22e (supplementary)
   All drawings are original schematics built with the shared helpers. */
//@include _cvs-patho-helpers.js
Object.assign(GN,{a:"Heart failure & shock",b:"Endocarditis & valves",c:"Pericardium, myocardium & tumors",d:"Vasculitis"});
Object.assign(ST,{cm:"dcm",hf:"hfref",sh:"cardio",tp:"tamp",ie:"acute",rf:"acute",vv:"as",pc:"acute",my:"viral",tm:"myx",vl:"gca",vm:"pan",vs:"gpa"});

/* ---------- 1. cardiomyopathies ---------- */
const CM={dcm:{n:"Dilated cardiomyopathy",s:"systolic dysfunction · EF < 40%",o:{lvk:1.3,rvk:1.12,veg:[[284,302,9]]},sar:"series",
  r:["พบบ่อยสุด (~90%) · มักไม่ทราบสาเหตุหรือทางพันธุกรรม (TTN)","alcohol, cocaine, doxorubicin, coxsackie B, Chagas, peripartum, hemochromatosis, thyrotoxicosis, wet beriberi","HF, S₃, MR/TR murmur, CXR: balloon heart","eccentric hypertrophy · mural thrombus ได้"]},
 hcm:{n:"Hypertrophic cardiomyopathy",s:"diastolic dysfunction · EF ปกติ/สูง",o:{lvk:.62,lvh:true,sept:true,flows:[[248,216,226,206,"#FFD23F"]]},sar:"parallel",
  r:["AD · ยีน sarcomere (β-myosin heavy chain, MYBPC3)","asymmetric septal hypertrophy · myofiber disarray","SAM ของ mitral → LVOT obstruction (HOCM)","S₄ · systolic murmur ดังขึ้นเมื่อ preload ↓","syncope ตอนออกแรง · SCD ในนักกีฬาอายุน้อย"]},
 rcm:{n:"Restrictive / infiltrative",s:"diastolic dysfunction · ห้องไม่โต ผนังแข็ง",o:{rak:1.25,lak:1.25,lvh:true},sar:"stiff",
  r:["PLEASe Help: Postradiation, Löffler, Endocardial fibroelastosis, Amyloid, Sarcoid, Hemochromatosis","atria โตมาก · ventricles ขนาดปกติ","amyloid: ECG low voltage แต่ผนังหนา","Kussmaul sign ได้"]},
 tako:{n:"Takotsubo (stress) cardiomyopathy",s:"apical ballooning · กลับคืนได้",o:{tako:true},sar:"none",
  r:["หลังเครียดรุนแรง (broken heart syndrome)","catecholamine surge → apex ไม่บีบ","อาการเหมือน ACS แต่ coronary ปกติ","มักหายใน 1–2 เดือน"]}};
function sarc(x,y,mode){let b="";const unit=(xx,yy,w=40)=>`<rect x="${xx}" y="${yy}" width="${w}" height="12" rx="3" style="fill:#E7A3A3;stroke:var(--a-edge);stroke-width:.8"/><path d="M${xx+w/2},${yy} V${yy+12}" style="stroke:var(--a-edge);stroke-width:1.2"/>`;
 b+=T(x,y-6,"sarcomeres",{a:"start",c:"s m"});
 if(mode==="series"){for(let i=0;i<5;i++)b+=unit(x+i*42,y+10);b+=T(x+110,y+42,"เพิ่มแบบ series → ห้องยาว/โต",{c:"s"})}
 else if(mode==="parallel"){for(let r=0;r<3;r++)for(let i=0;i<3;i++)b+=unit(x+40+i*42,y+r*14);b+=T(x+110,y+58,"เพิ่มแบบ parallel → ผนังหนา",{c:"s"})}
 else if(mode==="stiff"){for(let i=0;i<4;i++)b+=unit(x+20+i*42,y+10);for(let k=0;k<14;k++)b+=dot(x+24+k*12,y+16+(k%2?6:-6),3,"#C9B26A");b+=T(x+110,y+42,"แทรกด้วยสาร/fibrosis → แข็ง",{c:"s"})}
 else{for(let i=0;i<4;i++)b+=unit(x+20+i*42,y+10);b+=T(x+110,y+42,"stunned ชั่วคราว",{c:"s"})}
 return b}
function cmD(){const d=CM[ST.cm];let b=heartAt(0,14,.82,d.o);
 b+=infoPanel(314,8,322,d.n,d.s,d.r,ST.cm==="dcm"?CV.dx:ST.cm==="hcm"?CV.bad:ST.cm==="rcm"?CV.gold:CV.violet);
 b+=sarc(320,IPH+34,d.sar);
 return hsvg(b,"0 0 640 "+Math.max(340,IPH+110))}

/* ---------- 2. heart failure: PV loops ---------- */
const HF={normal:{edv:120,esv:50,pd:80,pes:108,ed:[2,.018,30],c:"var(--sb-ink2)",n:"Normal"},hfref:{edv:210,esv:160,pd:70,pes:96,ed:[3.5,.018,100],c:CV.dx,n:"HFrEF (systolic)"},hfpef:{edv:100,esv:40,pd:90,pes:132,ed:[2.6,.033,30],c:CV.bad,n:"HFpEF (diastolic)"}};
function pvLoop(A,h){const ed=v=>Math.max(3,h.ed[0]*(Math.exp(h.ed[1]*(v-h.ed[2]))-1));let pts=[];
 for(let i=0;i<=30;i++){const v=h.esv+(h.edv-h.esv)*i/30;pts.push([v,ed(v)])}
 pts.push([h.edv,h.pd]);const P0=[h.edv,h.pd],P2=[h.esv,h.pes],P1=[h.edv-(h.edv-h.esv)*.3,h.pes+30];
 for(let i=1;i<=30;i++){const t=i/30;pts.push([(1-t)*(1-t)*P0[0]+2*(1-t)*t*P1[0]+t*t*P2[0],(1-t)*(1-t)*P0[1]+2*(1-t)*t*P1[1]+t*t*P2[1]])}
 pts.push([h.esv,ed(h.esv)]);return {d:pts.map(([v,p])=>[A.X(v),A.Y(p)]),ed}}
function hfD(){const h=HF[ST.hf],A=axes(54,16,300,232,[0,250],[0,160],[0,50,100,150,200,250],[0,40,80,120,160],"LV volume (mL)","LV pressure (mmHg)");let b=A.g;
 const n=pvLoop(A,HF.normal);b+=curve(n.d,"var(--sb-muted)",2.2,"6 4");
 if(ST.hf!=="normal"){const L=pvLoop(A,h);b+=`<path d="M${L.d.map(p=>p.map(v=>v.toFixed(1)).join(",")).join(" L")}Z" style="fill:color-mix(in srgb,${h.c} 14%,transparent);stroke:${h.c};stroke-width:3;stroke-linejoin:round"/>`;
  b+=curve([...Array(41)].map((_,i)=>{const v=20+i*5.5;return [A.X(v),A.Y(Math.min(160,L.ed(v)))]}),h.c,1.4,"3 3")}
 const ef=Math.round((h.edv-h.esv)/h.edv*100);
 b+=T(A.X(200),A.Y(150),`EF ${ef}%`,{c:"bb"});
 b+=T(A.X(30),A.Y(150),"เส้นประ = ปกติ",{a:"start",c:"s m"});
 b+=infoPanel(380,10,256,h.n,ST.hf==="hfref"?"EDV ↑ · contractility ↓":ST.hf==="hfpef"?"compliance ↓ · EDP ↑":"",ST.hf==="hfref"?["มักจาก ischemia/MI, DCM","eccentric remodeling","ACEi/ARB/ARNI, β-blocker, MRA, SGLT2i ลดตาย"]:ST.hf==="hfpef"?["มักจาก LVH (HTN), อายุ, อ้วน","EDPVR ชันขึ้น","ขับน้ำ + คุมโรคร่วม"]:["EF 50–65%","EDP ต่ำแม้ volume มาก"],h.c);
 const yy=IPH+24;
 b+=`<rect x="380" y="${yy}" width="124" height="${276-yy}" rx="12" style="fill:color-mix(in srgb,${CV.ox} 9%,var(--sb-surface));stroke:var(--sb-line)"/>`+T(392,yy+20,"Left HF",{a:"start",c:"bh"})+["orthopnea","PND","pulmonary edema","HF cells ในปอด"].map((t,i)=>T(392,yy+40+i*17,t,{a:"start",c:"s"})).join("");
 b+=`<rect x="512" y="${yy}" width="124" height="${276-yy}" rx="12" style="fill:color-mix(in srgb,${CV.dx} 9%,var(--sb-surface));stroke:var(--sb-line)"/>`+T(524,yy+20,"Right HF",{a:"start",c:"bh"})+["JVD","nutmeg liver","peripheral edema","hepatomegaly"].map((t,i)=>T(524,yy+40+i*17,t,{a:"start",c:"s"})).join("");
 return psvg(b,"0 0 640 300")}

/* ---------- 3. shock ---------- */
const SH={hypo:{n:"Hypovolemic",c:"hemorrhage · dehydration · burns",skin:"เย็น ชื้น",v:{CVP:-1,PCWP:-1,CO:-1,SVR:1,SvO2:-1},p:["CVP","PCWP"]},
 cardio:{n:"Cardiogenic",c:"MI · HF · valve · arrhythmia",skin:"เย็น ชื้น",v:{CVP:1,PCWP:1,CO:-1,SVR:1,SvO2:-1},p:["CO"]},
 obstr:{n:"Obstructive",c:"PE · tension pneumothorax · tamponade",skin:"เย็น ชื้น",v:{CVP:1,PCWP:-1,CO:-1,SVR:1,SvO2:-1},p:["CO"],note:"PCWP ↑ ใน tamponade (ความดันทุกห้องเท่ากัน)"},
 dist:{n:"Distributive",c:"sepsis (early) · anaphylaxis · CNS injury",skin:"อุ่น แห้ง",v:{CVP:-1,PCWP:-1,CO:1,SVR:-1,SvO2:1},p:["SVR"],note:"CNS injury (neurogenic): CO ↓ · SvO₂ ปกติ/↑"}};
function shD(){const d=SH[ST.sh];let b="";
 /* circuit */
 const k=ST.sh;
 b+=`<path d="M70,60 H250 C290,60 290,230 250,230 H70 C30,230 30,60 70,60Z" style="fill:none;stroke:${k==="dist"?"color-mix(in srgb,var(--a-art) 70%,transparent)":CV.ox};stroke-width:${k==="dist"?26:14}"/>`;
 b+=`<path d="${sm([[52,128],[70,104],[92,112],[100,140],[84,176],[70,190],[54,176],[42,146]])}" style="fill:url(#gMyo);stroke:var(--a-edge);stroke-width:1.4;opacity:${k==="cardio"?.45:1}"/>`+T(70,154,"pump",{c:"s w"});
 b+=`<rect x="226" y="${k==="hypo"?160:110}" width="60" height="${k==="hypo"?40:90}" rx="8" style="fill:color-mix(in srgb,var(--a-art) 70%,var(--sb-surface))"/><rect x="226" y="110" width="60" height="90" rx="8" style="fill:none;stroke:var(--sb-ink2);stroke-width:1.6"/>`+T(256,224,"volume",{c:"s m"});
 if(k==="obstr")b+=`<rect x="118" y="214" width="18" height="34" rx="4" style="fill:var(--sb-bad)"/>`+T(127,266,"block",{c:"s"});
 if(k==="cardio")b+=tag(70,90,"weak","var(--sb-bad)",{w:48});
 if(k==="dist")b+=T(160,48,"vessels wide open",{c:"s"});
 b+=T(160,20,d.n+" shock",{c:"bb"})+T(160,290,d.c,{c:"s m"});
 /* hemodynamics */
 Object.entries(d.v).forEach(([p,v],i)=>{const y=18+i*48,x=330,prim=d.p.includes(p);b+=`<rect x="${x}" y="${y}" width="300" height="40" rx="12" style="fill:${prim?"color-mix(in srgb,var(--sb-accent) 14%,var(--sb-surface))":"var(--sb-surface2)"};stroke:${prim?"var(--sb-accent)":"var(--sb-line)"}"/>`+T(x+16,y+25,p.replace("SvO2","SvO₂"),{a:"start",c:"bh"})+
  `<text x="${x+250}" y="${y+30}" text-anchor="middle" style="font:800 24px var(--sb-font);fill:${v>0?CV.bad:CV.dx}">${v>0?"↑":"↓"}</text>`+(prim?T(x+170,y+25,"primary",{c:"s"}):"")});
 b+=T(330,268,"ผิวหนัง: "+d.skin,{a:"start",c:"bh"})+(d.note?T(330,288,d.note,{a:"start",c:"s m"}):"");
 return hsvg(b,"0 0 640 300")}

/* ---------- 4. tamponade ---------- */
function tpD(){const t=ST.tp==="tamp";let b=heartAt(0,8,.72,{eff:t,rvk:t?.78:1,rak:t?.8:1});
 if(t)b+=T(150,270,"pericardial effusion",{c:"s"});
 /* arterial pressure with respiration */
 const x0=290,y0=20,w=340,h=120;b+=`<rect x="${x0}" y="${y0}" width="${w}" height="${h}" rx="10" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`;
 [[x0+60,x0+170]].forEach(([a,c])=>b+=`<rect x="${a}" y="${y0}" width="${c-a}" height="${h}" style="fill:color-mix(in srgb,${CV.dx} 14%,transparent)"/>`);
 b+=`<rect x="${x0+230}" y="${y0}" width="100" height="${h}" style="fill:color-mix(in srgb,${CV.dx} 14%,transparent)"/>`;
 let d="";for(let i=0;i<=400;i++){const tt=i/400*4.2,beatPh=(tt%.7)/.7,insp=(Math.sin(2*Math.PI*(tt/2.4)-1)+1)/2;const drop=t?24*insp:5*insp;const p=80+(beatPh<.3?Math.sin(beatPh/.3*Math.PI/2)*(40-drop):(40-drop)*Math.exp(-(beatPh-.3)*4));d+=(i?"L":"M")+(x0+i/400*w).toFixed(1)+","+(y0+h-(p-60)*1.4).toFixed(1)}
 b+=`<path d="${d}" style="fill:none;stroke:${CV.ox};stroke-width:2.2"/>`+T(x0+115,y0+14,"หายใจเข้า",{c:"s m"})+T(x0+280,y0+14,"หายใจเข้า",{c:"s m"})+T(x0+8,y0+h+16,"arterial pressure",{a:"start",c:"s m"});
 b+=tag(x0+w-70,y0+h+16,t?"SBP ลด > 10 mmHg":"ลด < 10 (ปกติ)",t?"var(--sb-bad)":"#7C8798",{w:130});
 const al=t?[...Array(6)].flatMap((_,i)=>beat(.3+i*.62,{a:i%2?.55:1.1})):[...Array(6)].flatMap((_,i)=>beat(.3+i*.62,{}));
 b+=strip(x0,176,w,96,al,3.8,{n:900,base:.6,lab:t?"ECG: low voltage + electrical alternans":"ECG ปกติ"});
 b+=T(x0,296,t?"Beck triad: hypotension · JVD · heart sounds เบา":"ปกติ: SBP ลดตอนหายใจเข้าเล็กน้อย",{a:"start",c:"bh"});
 return hsvg(b,"0 0 640 306")}

/* ---------- 5. syncope ---------- */
function synD(){let b="";const C=[["Reflex (บ่อยสุด)",CV.teal,["vasovagal: อุ่น ซีด คลื่นไส้นำ · ฟื้นเร็ว","situational: ไอ จาม กลืน ถ่าย ปัสสาวะ","carotid sinus hypersensitivity (คอเสื้อแน่น)"]],["Orthostatic",CV.gold,["hypovolemia · ยาลดความดัน","autonomic dysfunction","ยืน 3 นาที: SBP ↓ ≥ 20 หรือ DBP ↓ ≥ 10"]],["Cardiac",CV.bad,["arrhythmia (brady/tachy)","structural: aortic stenosis, HCM","เป็นตอนออกแรง/นอนอยู่ · ไม่มีอาการนำ = อันตราย"]]];
 C.forEach(([t,c,r],i)=>{const x=4+i*212;b+=`<rect x="${x}" y="6" width="204" height="270" rx="16" style="fill:color-mix(in srgb,${c} 9%,var(--sb-surface));stroke:color-mix(in srgb,${c} 45%,transparent)"/>`;
  b+=`<circle cx="${x+102}" cy="64" r="38" style="fill:color-mix(in srgb,${c} 18%,var(--sb-surface));stroke:${c};stroke-width:1.6"/>`;
  if(i===0)b+=`<path d="M${x+74},64 l10,0 l5,-14 l7,28 l6,-20 l4,6 l20,0" style="fill:none;stroke:${c};stroke-width:2.6;stroke-linejoin:round"/>`+T(x+102,118,"HR ↓ · vasodilation",{c:"s m"});
  if(i===1)b+=`<circle cx="${x+102}" cy="42" r="7" style="fill:${c}"/><path d="M${x+102},50 V78 M${x+92},60 H${x+112} M${x+102},78 l-8,14 M${x+102},78 l8,14" style="stroke:${c};stroke-width:3;stroke-linecap:round"/>`+Ar(x+124,46,x+124,82,c,2.4);
  if(i===2)b+=`<path d="${sm([[x+90,52],[x+102,60],[x+114,52],[x+122,62],[x+102,90],[x+82,62]])}" style="fill:${c}"/>`;
  b+=T(x+102,140,t,{c:"bh"});r.forEach((l,k)=>b+=wrapT(x+14,164+k*38,l,30,"s",14))});
 b+=T(320,298,"Syncope = หมดสติชั่วคราวจาก cerebral blood flow ↓ แล้วฟื้นเองสมบูรณ์",{c:"s m"});
 return psvg(b,"0 0 640 306")}

/* ---------- 6. infective endocarditis ---------- */
function ieD(){const k=ST.ie;let b="";
 /* valve cross-section: atrium above, ventricle below, two leaflets */
 b+=`<rect x="10" y="10" width="300" height="250" rx="16" style="fill:color-mix(in srgb,var(--a-art) 12%,var(--sb-surface))"/>`;
 b+=`<path d="M10,78 H118 V104 H10Z M202,78 H310 V104 H202Z" style="fill:var(--a-musc);stroke:var(--a-edge);stroke-width:1"/>`+`<path d="M60,262 C70,226 96,214 118,226 C128,240 120,262 112,262Z M260,262 C250,226 224,214 202,226 C192,240 200,262 208,262Z" style="fill:var(--a-musc);stroke:var(--a-edge);stroke-width:1"/>`+T(160,36,"left atrium",{c:"s m"})+T(160,250,"left ventricle",{c:"s m"});
 const th=k==="sub"?10:6;
 b+=`<path d="M146,166 L112,226 M134,140 L104,226 M174,166 L208,226 M186,140 L216,226" style="stroke:#B59A6A;stroke-width:1.4"/>`;
 b+=`<path d="M118,92 C126,130 138,160 156,172" style="fill:none;stroke:#B59A6A;stroke-width:${th+3};stroke-linecap:round"/><path d="M118,92 C126,130 138,160 156,172" style="fill:none;stroke:#F6EBD9;stroke-width:${th};stroke-linecap:round"/><path d="M202,92 C194,130 182,160 166,172" style="fill:none;stroke:#B59A6A;stroke-width:${th+3};stroke-linecap:round"/><path d="M202,92 C194,130 182,160 166,172" style="fill:none;stroke:#F6EBD9;stroke-width:${th};stroke-linecap:round"/>`;
 const veg=(x,y,r,c)=>`<path d="${sm([[x-r,y],[x-r*.5,y-r],[x+r*.3,y-r*.8],[x+r,y-r*.1],[x+r*.6,y+r*.8],[x-r*.4,y+r*.9]])}" style="fill:${c};stroke:#9C7A30;stroke-width:1.2"/>`;
 if(k==="acute"){b+=veg(150,150,22,"#EBD38A")+veg(176,140,16,"#EBD38A")+`<circle cx="186" cy="120" r="6" style="fill:color-mix(in srgb,var(--a-art) 12%,var(--sb-surface));stroke:#9C7A30"/>`;for(let i=0;i<10;i++)b+=dot(140+i*5,146+(i%3)*4,1.6,CV.violet);b+=T(220,128,"perforation",{a:"start",c:"s"})}
 if(k==="sub")b+=veg(154,160,10,"#EBD38A")+veg(170,166,8,"#EBD38A")+T(220,128,"ลิ้นหนาจาก RHD",{a:"start",c:"s"});
 if(k==="nbte")[[150,168],[160,172],[170,168]].forEach(([x,y])=>b+=veg(x,y,6,"#F5EDD8"));
 b+=T(160,286,k==="acute"?"Acute: vegetation ใหญ่ ทำลายลิ้น":k==="sub"?"Subacute: vegetation เล็กบนลิ้นที่ผิดปกติเดิม":"NBTE: ก้อนเล็ก ไม่มีเชื้อ ตามแนวปิดลิ้น",{c:"bh"});
 const D={acute:["Acute IE","S. aureus · ลิ้นปกติ · เร็ว รุนแรง",["IV drug use: S. aureus, Pseudomonas, Candida · tricuspid","prosthetic valve: S. epidermidis","GI/GU procedure: Enterococcus"]],
  sub:["Subacute IE","viridans strep · ลิ้นผิดปกติเดิม · ค่อยเป็น",["หลังทำฟัน · ไข้ต่ำเรื้อรัง","colon cancer: S. gallolyticus","culture ⊝: Coxiella, Bartonella · HACEK"]],
  nbte:["Nonbacterial thrombotic","marantic · hypercoagulable",["มะเร็งระยะท้าย (pancreatic adenocarcinoma)","SLE: Libman–Sacks (ทั้งสองด้านของลิ้น)","ไม่มีอาการจนกระทั่ง embolize"]]}[k];
 b+=infoPanel(326,10,310,D[0],D[1],D[2],k==="nbte"?CV.teal:CV.gold);
 /* peripheral signs */
 const y=Math.max(IPH+26,186);const S4=[["Janeway","ฝ่ามือ ไม่เจ็บ",0],["Osler","ปลายนิ้ว เจ็บ",1],["Splinter","ใต้เล็บ",2],["Roth spot","จอตา",3]];
 S4.forEach(([n,s,i])=>{const x=326+i*78;b+=`<rect x="${x}" y="${y}" width="72" height="92" rx="12" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`;
  if(i===0)b+=`<ellipse cx="${x+36}" cy="${y+34}" rx="20" ry="22" style="fill:#F3D7C4"/>`+[[-8,-6],[6,-10],[2,6],[-6,10]].map(([a,c])=>dot(x+36+a,y+34+c,3,"#D9455F")).join("");
  if(i===1)b+=`<rect x="${x+24}" y="${y+12}" width="24" height="44" rx="12" style="fill:#F3D7C4"/>`+dot(x+36,y+22,5,"#8E3B8E");
  if(i===2)b+=`<rect x="${x+24}" y="${y+12}" width="24" height="44" rx="12" style="fill:#F3D7C4"/><rect x="${x+27}" y="${y+14}" width="18" height="20" rx="6" style="fill:#FBEDEA;stroke:#C9A9A0"/>`+`<path d="M${x+33},${y+18} V${y+30} M${x+39},${y+20} V${y+30}" style="stroke:#9E2335;stroke-width:1.6"/>`;
  if(i===3)b+=`<circle cx="${x+36}" cy="${y+34}" r="22" style="fill:#E8794E"/>`+`<circle cx="${x+44}" cy="${y+30}" r="6" style="fill:#B8202F"/><circle cx="${x+44}" cy="${y+30}" r="2.4" style="fill:#FFF3E8"/>`+dot(x+28,y+36,4,"#F7E3B8");
  b+=T(x+36,y+70,n,{c:"bh"})+T(x+36,y+85,s,{c:"s m"})});
 return hsvg(b,`0 0 640 ${Math.max(300,y+100)}`)}

/* ---------- 7. rheumatic fever ---------- */
function rfD(){const ac=ST.rf==="acute";let b="";
 const tl=[["Strep pharyngitis","group A β-hemolytic",CV.gold],["2–4 สัปดาห์","antibody ต่อ M protein",CV.violet],["Acute RF","JONES",CV.bad],["หลายปี","valve fibrosis",CV.dx]];
 tl.forEach(([t,s,c],i)=>{const x=6+i*158;b+=`<rect x="${x}" y="6" width="150" height="50" rx="12" style="fill:color-mix(in srgb,${c} 12%,var(--sb-surface));stroke:color-mix(in srgb,${c} 50%,transparent)"/>`+T(x+75,26,t,{c:"bh"})+T(x+75,44,s,{c:"s m"});if(i<3)b+=Ar(x+150,31,x+158,31,CV.mut,1.4,{hs:5})});
 const J=[["J","Joints","migratory polyarthritis"],["♥","Pancarditis","endo + myo + peri"],["N","Nodules","subcutaneous"],["E","Erythema marginatum","ผื่นวงขอบแดง"],["S","Sydenham chorea","เคลื่อนไหวผิดปกติ"]];
 J.forEach(([l,t,s],i)=>{const y=72+i*46;b+=`<circle cx="30" cy="${y+18}" r="18" style="fill:${CV.bad}"/><text x="30" y="${y+24}" text-anchor="middle" style="font:800 16px var(--sb-font);fill:#fff">${l}</text>`+T(56,y+15,t,{a:"start",c:"bh"})+T(56,y+31,s,{a:"start",c:"s m"})});
 if(ac){b+=slide(240,70,394,230);const r=rng(21);for(let i=0;i<8;i++){const y=86+i*27;b+=`<path d="M244,${y} L630,${y+4}" style="stroke:${HE.cy};stroke-width:16"/>`}
  b+=`<ellipse cx="430" cy="186" rx="80" ry="54" style="fill:#F4D8E3;stroke:${HE.mem}"/>`;
  for(let i=0;i<9;i++){const x=380+r()*100,y=156+r()*60;b+=`<rect x="${x-9}" y="${y-3}" width="18" height="6" rx="3" style="fill:${HE.nu}"/>`+[...Array(5)].map((_,k)=>`<path d="M${x-7+k*3.4},${y-2} v4" style="stroke:#F4D8E3;stroke-width:1"/>`).join("")}
  b+=`<ellipse cx="460" cy="176" rx="16" ry="12" style="fill:#EAC3D3;stroke:${HE.mem}"/>`+dot(454,172,3,HE.nu)+dot(462,170,3,HE.nu)+dot(466,180,3,HE.nu);
  for(let i=0;i<12;i++)b+=dot(360+r()*150,140+r()*96,2.4,HE.nuD);
  b+=TD(437,256,"Aschoff body: fibrinoid + lymphocyte + Anitschkow cells",{w:700,s:10.5})+TD(437,272,"(nucleus เป็นแท่งหยัก caterpillar) · ± giant cell",{s:10});}
 else{b+=`<rect x="240" y="70" width="394" height="230" rx="14" style="fill:color-mix(in srgb,var(--a-art) 10%,var(--sb-surface));stroke:var(--sb-line)"/>`;
  b+=`<ellipse cx="380" cy="184" rx="96" ry="70" style="fill:#F1E3CF;stroke:#B9A27E;stroke-width:2"/>`+`<path d="M330,188 C360,168 400,168 430,184 C400,196 360,198 330,188Z" style="fill:#5A2A30"/>`;
  for(let i=0;i<6;i++)b+=`<circle cx="${310+i*22}" cy="${150+(i%2)*60}" r="4" style="fill:#E8E1D0;stroke:#B9A27E"/>`;
  b+=T(380,276,"fish-mouth (buttonhole) mitral stenosis",{c:"bh"});
  b+=cardBox(492,86,130,190,"Chronic RHD",["commissure เชื่อมติด","chordae สั้น หนา","LA โต · AF · thrombus"],CV.dx,{n:20});}
 return psvg(b,"0 0 640 310")}

/* ---------- 8. valvular disease ---------- */
const VV={as:{n:"Aortic stenosis",o:{lvh:true,lvk:.82,flows:[[244,206,238,108,"#FFD23F"]]},m:"cresc",causes:["calcific degeneration (> 70 ปี)","bicuspid valve (อายุน้อยกว่า)","rheumatic (ร่วมกับ MS)"],f:["crescendo–decrescendo หลัง ejection click","pulsus parvus et tardus","SAD: Syncope, Angina, Dyspnea","concentric LVH"]},
 ar:{n:"Aortic regurgitation",o:{lvk:1.25,flows:[[238,120,250,226,"#FFD23F"]]},m:"edec",causes:["aortic root dilation (Marfan, syphilis, HTN)","bicuspid · endocarditis · rheumatic"],f:["early diastolic decrescendo","wide pulse pressure · bounding pulse","LV eccentric dilation"]},
 ms:{n:"Mitral stenosis",o:{lak:1.35,flows:[[282,160,262,236,"#FFD23F"]]},m:"rumble",causes:["rheumatic heart disease (เกือบทั้งหมด)"],f:["opening snap → diastolic rumble","LA โต → AF, thrombus","pulmonary HTN · dysphagia/hoarseness"]},
 mr:{n:"Mitral regurgitation",o:{lak:1.25,lvk:1.15,flows:[[262,226,286,140,"#FFD23F"]]},m:"holo",causes:["MVP · ischemic (papillary) · LV dilation","rheumatic · endocarditis"],f:["holosystolic blowing murmur ที่ apex ร้าวไปรักแร้","volume overload → LA + LV โต"]},
 mvp:{n:"Mitral valve prolapse",o:{lak:1.1,mvp:true},m:"click",causes:["myxomatous degeneration (พบบ่อยสุด)","Marfan, Ehlers–Danlos, ADPKD"],f:["mid-systolic click + late systolic murmur","click เร็วขึ้นเมื่อ preload ↓ (ยืน, Valsalva)","มักไม่มีอาการ · อาจกลายเป็น MR"]}};
function phono(x,y,w,m){let b=`<rect x="${x}" y="${y}" width="${w}" height="92" rx="10" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`;const by=y+62,s1=x+30,s2=x+w*.5,s1b=x+w-24;
 b+=`<path d="M${x+10},${by} H${x+w-10}" style="stroke:var(--sb-line);stroke-width:1"/>`;
 const snd=(xx,h,l)=>`<rect x="${xx-3}" y="${by-h}" width="6" height="${h}" rx="2" style="fill:var(--sb-ink)"/>`+T(xx,by+16,l,{c:"s m"});
 b+=snd(s1,40,"S1")+snd(s2,32,"S2")+snd(s1b,40,"S1");
 const fill="color-mix(in srgb,#E2A23A 70%,transparent)";
 if(m==="cresc")b+=`<path d="M${s1+18},${by} L${(s1+s2)/2},${by-34} L${s2-10},${by}Z" style="fill:${fill}"/>`+snd(s1+12,16,"");
 if(m==="holo")b+=`<rect x="${s1+6}" y="${by-22}" width="${s2-s1-12}" height="22" style="fill:${fill}"/>`;
 if(m==="edec")b+=`<path d="M${s2+6},${by-26} L${s2+6},${by} L${s1b-30},${by}Z" style="fill:${fill}"/>`;
 if(m==="rumble"){b+=snd(s2+20,18,"OS");let d=`M${s2+30},${by}`;for(let xx=s2+30;xx<s1b-8;xx+=6)d+=` L${xx+3},${by-8-((xx-s2)/(s1b-s2))*(xx>s1b-50?16:4)-(xx%12?0:4)} L${xx+6},${by}`;b+=`<path d="${d}" style="fill:${fill};stroke:#C2760C;stroke-width:.8"/>`}
 if(m==="click")b+=snd((s1+s2)/2-6,22,"click")+`<path d="M${(s1+s2)/2},${by-18} L${s2-8},${by-26} L${s2-8},${by}L${(s1+s2)/2},${by}Z" style="fill:${fill}"/>`;
 b+=T(x+12,y+18,"phonocardiogram",{a:"start",c:"s m"});return b}
function vvD(){const d=VV[ST.vv];let o=Object.assign({},d.o);let b=heartAt(0,6,.86,o);
 if(o.mvp)b+=`<g transform="translate(0,6) scale(.86)"><path d="M274,180 C278,160 290,150 300,152" style="stroke:#FFF7EE;stroke-width:4;fill:none;stroke-linecap:round"/></g>`;
 b+=phono(314,8,322,d.m);
 b+=infoPanel(314,112,322,d.n,null,["สาเหตุ: "+d.causes.join(" · ")].concat(d.f),ST.vv[0]==="a"?CV.ox:CV.violet);
 return hsvg(b,"0 0 640 "+Math.max(312,IPH+124))}

/* ---------- 9. pericarditis ---------- */
function pcD(){const ac=ST.pc==="acute";let b=heartAt(0,8,.74,{constr:!ac});
 if(ac){const r=rng(5);let fz="";for(let i=0;i<110;i++){const a=i/110*6.28;if(Math.sin(a)<-.55&&Math.abs(Math.cos(a))<.6)continue;const x=206+142*Math.cos(a),y=222+128*Math.sin(a);fz+=`<path d="M${x.toFixed(1)},${y.toFixed(1)} l${((r()-.5)*14).toFixed(1)},${((r()-.5)*14).toFixed(1)}" style="stroke:#E3B94F;stroke-width:3.4;stroke-linecap:round"/>`}
  b+=`<g transform="translate(0,8) scale(.74)">${fz}</g>`+T(140,282,"fibrinous “bread and butter” pericarditis",{c:"s"});
  const w=[...Array(5)].flatMap((_,i)=>[[.3+i*.76-.16,.14,.035],[.3+i*.76-.08,-.06,.04]].concat(QRS(.3+i*.76),STe(.3+i*.76,.28),Tw(.3+i*.76+.3,.32)));
  b+=strip(290,10,346,110,w,3.8,{n:900,base:.62,lab:"ECG: diffuse ST ↑ (concave) + PR ↓"});
  b+=infoPanel(290,134,346,"Acute pericarditis",null,["เจ็บแหลม แย่ลงตอนหายใจเข้า · นั่งโน้มตัวไปข้างหน้าดีขึ้น","friction rub · มักมี effusion","idiopathic/viral (coxsackie B) บ่อยสุด","uremia, MI/Dressler, SLE, RA, มะเร็ง, ฉายแสง","NSAIDs + colchicine · uremic → dialysis"],CV.gold)}
 else{const x0=290,y0=10,w=346,h=110;b+=`<rect x="${x0}" y="${y0}" width="${w}" height="${h}" rx="10" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`;
  b+=`<rect x="${x0+120}" y="${y0}" width="110" height="${h}" style="fill:color-mix(in srgb,${CV.dx} 14%,transparent)"/>`+T(x0+175,y0+16,"หายใจเข้า",{c:"s m"});
  let d1="",d2="";for(let i=0;i<=300;i++){const t=i/300,x=x0+t*w,insp=t>.35&&t<.66?1:0;const base=y0+70-(insp?16:0),nb=y0+70+(insp?12:0);const ph=(t*6)%1;const wav=(ph<.3?-8*Math.sin(ph/.3*Math.PI):ph<.55?6*Math.sin((ph-.3)/.25*Math.PI):-14*Math.sin((ph-.55)/.45*Math.PI))*.9;d1+=(i?"L":"M")+x.toFixed(1)+","+(base+wav).toFixed(1);d2+=(i?"L":"M")+x.toFixed(1)+","+(nb+wav*.6).toFixed(1)}
  b+=`<path d="${d2}" style="fill:none;stroke:var(--sb-muted);stroke-width:1.6;stroke-dasharray:4 3"/><path d="${d1}" style="fill:none;stroke:${CV.dx};stroke-width:2.4"/>`+T(x0+8,y0+h+16,"JVP: สูงขึ้นตอนหายใจเข้า = Kussmaul sign (เส้นประ = ปกติ)",{a:"start",c:"s m"});
  b+=infoPanel(290,146,346,"Constrictive pericarditis",null,["pericardium หนา ± calcified → เติมเลือดไม่ได้","EDV ↓ → CO ↓ · venous return ↓","JVD, edema, Kussmaul sign, pericardial knock","สาเหตุ: idiopathic, viral, ผ่าตัดหัวใจ, ฉายแสง (ช้า) · TB ในประเทศรายได้น้อย"],CV.dx)}
 return hsvg(b,"0 0 640 "+Math.max(300,IPH+150))}

/* ---------- 10. myocarditis ---------- */
function myD(){const k=ST.my;let b=slide(6,6,330,290);const r=rng(9);
 for(let i=0;i<9;i++){const y=26+i*30;b+=`<path d="M10,${y} C120,${y-4} 220,${y+4} 332,${y}" style="stroke:${HE.cy};stroke-width:20;fill:none"/>`;for(let x=40+(i*17)%50;x<320;x+=80)b+=`<ellipse cx="${x}" cy="${y}" rx="7" ry="3" style="fill:${HE.nu}"/>`}
 b+=`<path d="M150,120 C170,110 200,112 214,124 C214,140 190,150 160,146Z" style="fill:${HE.cyX};opacity:.85"/>`;
 const cells=k==="viral"?[["lym",60]]:k==="hyper"?[["eos",34],["lym",18]]:k==="giant"?[["lym",30],["giant",4],["eos",8]]:[["lym",26]];
 cells.forEach(([t,n])=>{for(let i=0;i<n;i++){const x=110+r()*150,y=80+r()*130;
  if(t==="lym")b+=dot(x,y,4,HE.nuD);
  if(t==="eos")b+=`<circle cx="${x}" cy="${y}" r="6" style="fill:#F59AA4"/>`+dot(x-2,y,2.2,HE.nuD)+dot(x+2,y,2.2,HE.nuD);
  if(t==="giant")b+=`<ellipse cx="${x}" cy="${y}" rx="18" ry="12" style="fill:#F2C3D3;stroke:${HE.mem}"/>`+[...Array(7)].map((_,j)=>dot(x-12+j*4,y+(j%2?4:-4),2.4,HE.nu)).join("")}});
 if(k==="chagas"){b+=`<rect x="200" y="200" width="90" height="24" rx="10" style="fill:${HE.cy};stroke:${HE.mem}"/>`;for(let i=0;i<14;i++)b+=dot(206+i*6,206+(i%3)*5,1.8,HE.nuD);b+=TD(245,246,"amastigotes ใน myocyte",{s:10})}
 b+=TD(170,282,{viral:"lymphocytic infiltrate + focal myocyte necrosis",hyper:"eosinophils รอบหลอดเลือด (แพ้ยา)",giant:"giant cells + necrosis กว้าง (พยากรณ์แย่)",chagas:"T. cruzi ใน myocyte + inflammation"}[k],{w:700,s:10.5});
 b+=infoPanel(350,6,286,"Myocarditis","สาเหตุ SCD สำคัญในคนอายุ < 40",["Viral: coxsackie B, adenovirus, parvovirus B19, HIV, HHV-6, COVID-19","Parasite: T. cruzi, Toxoplasma","Bacteria: Lyme, Mycoplasma, diphtheria","Drugs: doxorubicin, cocaine · Toxins: CO","Autoimmune: Kawasaki, sarcoid, SLE · RF","HR เร็วเกินไข้ · arrhythmia · HF → DCM"],CV.violet);
 return psvg(b,"0 0 640 "+Math.max(304,IPH+12))}

/* ---------- 11. HHT ---------- */
function hhtD(){let b="";
 b+=frm(6,6,300,290,"Hereditary hemorrhagic telangiectasia","AD · Osler–Weber–Rendu");
 b+=`<path d="M60,150 C90,110 220,110 250,150 C230,210 80,210 60,150Z" style="fill:#E59AA4;stroke:#B2566A;stroke-width:1.6"/>`+`<path d="M155,130 V196" style="stroke:#B2566A;stroke-width:1.4"/>`;
 const r=rng(3);for(let i=0;i<16;i++){const x=90+r()*130,y=136+r()*50;b+=`<circle cx="${x}" cy="${y}" r="3" style="fill:#C0202F"/>`+[0,1.6,3.2,4.8].map(a=>`<path d="M${x},${y} l${5*Math.cos(a)},${5*Math.sin(a)}" style="stroke:#C0202F;stroke-width:.8"/>`).join("")}
 b+=T(155,226,"telangiectasia ที่ลิ้น ริมฝีปาก ผิว (กดจาง)",{c:"s"});
 ["epistaxis ซ้ำ ๆ (บ่อยสุด)","GI bleeding · hematuria","AVM: สมอง ปอด ตับ"].forEach((t,i)=>b+=`<circle cx="30" cy="${248+i*16}" r="3" style="fill:var(--sb-accent)"/>`+T(40,252+i*16,t,{a:"start",c:"s"}));
 b+=frm(320,6,314,290,"Arteriovenous malformation","artery → vein โดยไม่ผ่าน capillary");
 const tube=(d,c,w)=>`<path d="${d}" style="stroke:var(--a-edge);stroke-width:${w+2};fill:none;stroke-linecap:round"/><path d="${d}" style="stroke:${c};stroke-width:${w};fill:none;stroke-linecap:round"/>`;
 b+=tube("M340,90 C400,90 420,120 450,140",CV.ox,12)+tube("M520,140 C550,120 570,90 620,90",CV.dx,14);
 b+=`<path d="${sm([[440,130],[470,110],[500,120],[530,134],[520,170],[480,180],[446,166]])}" style="fill:${CV.mx};stroke:var(--a-edge)"/>`;
 for(let i=0;i<5;i++)b+=`<path d="M${452+i*14},${132+(i%2)*10} C${462+i*14},${150} ${470+i*14},${140} ${480+i*14},${156}" style="stroke:#fff;stroke-width:1.4;fill:none;opacity:.7"/>`;
 b+=T(480,204,"nidus · high flow",{c:"bh"})+wrapT(336,236,"เลี่ยง capillary → high-output HF · เลือดออก · สาเหตุ intracranial hemorrhage ที่บ่อยที่สุดในเด็ก",48,"s",15);
 return psvg(b,"0 0 640 302")}

/* ---------- 12. cardiac tumors ---------- */
function tmD(){const k=ST.tm;let o=k==="myx"?{myx:true}:k==="rhab"?{}:{eff:true};let b=heartAt(0,6,.86,o);let ov="";
 if(k==="rhab")[[252,262,16],[150,250,12],[268,226,10]].forEach(([x,y,r])=>ov+=`<circle cx="${x}" cy="${y}" r="${r}" style="fill:#F2E3D3;stroke:#A88A6A;stroke-width:1.4"/>`);
 if(k==="met")[[86,170],[96,250],[300,120],[330,220],[260,320]].forEach(([x,y])=>ov+=`<circle cx="${x}" cy="${y}" r="9" style="fill:#3B2A2A;stroke:#1C1212"/>`);
 b+=`<g transform="translate(0,6) scale(.86)">${ov}</g>`;
 b+=slide(320,8,316,130);const r=rng(13);
 if(k==="myx"){for(let i=0;i<22;i++){const x=340+r()*280,y=24+r()*100;b+=`<path d="M${x-8},${y} L${x+8},${y} M${x},${y-6} L${x},${y+6}" style="stroke:${HE.nuL};stroke-width:1.4"/>`+dot(x,y,2.4,HE.nu)}b+=TD(478,132,"stellate cells ในพื้น GAG (myxoid)",{s:10.5})}
 if(k==="rhab"){for(let i=0;i<6;i++){const x=360+i*48,y=72;b+=`<circle cx="${x}" cy="${y}" r="20" style="fill:#FBF3F6;stroke:${HE.mem}"/>`+dot(x,y,4,HE.nu)+[0,1.2,2.4,3.6,4.8].map(a=>`<path d="M${x},${y} L${x+18*Math.cos(a)},${y+18*Math.sin(a)}" style="stroke:${HE.cyX};stroke-width:1.4"/>`).join("")}b+=TD(478,132,"spider cells (glycogen ใน cytoplasm)",{s:10.5})}
 if(k==="met"){for(let i=0;i<30;i++)b+=`<circle cx="${340+r()*280}" cy="${24+r()*96}" r="${4+r()*4}" style="fill:#6E4A3A"/>`;b+=TD(478,132,"melanoma ไปที่ pericardium/หัวใจ",{s:10.5})}
 const D={myx:["Myxoma","primary tumor ที่พบบ่อยสุดในผู้ใหญ่",["90% อยู่ใน atria (ส่วนใหญ่ LA) ติดที่ fossa ovalis","ball-valve อุด mitral → syncope · tumor plop","IL-6 → ไข้ น้ำหนักลด","embolize ได้ · Carney complex"]],rhab:["Rhabdomyoma","primary tumor ที่พบบ่อยสุดในเด็ก",["hamartoma · มักอยู่ใน ventricles","สัมพันธ์ tuberous sclerosis","มักยุบเองได้"]],met:["Metastasis","cardiac tumor ที่พบบ่อยที่สุดโดยรวม",["melanoma, lung, breast, lymphoma","มักไปที่ pericardium → effusion/tamponade"]]}[k];
 b+=infoPanel(320,148,316,D[0],D[1],D[2],k==="myx"?CV.gold:k==="rhab"?CV.teal:CV.ink2);
 return hsvg(b,"0 0 640 "+Math.max(310,148+IPH+6))}

/* ---------- 13–15. vasculitis ---------- */
function vlD(){const g=ST.vl==="gca";let b="";
 if(g){b+=`<path d="M90,280 C60,220 56,150 80,100 C108,46 190,30 236,70 C266,96 272,140 262,170 L280,200 L256,206 C258,230 248,250 222,252 L210,280Z" style="fill:#F3D7C4;stroke:#B98C70;stroke-width:1.6"/>`;
  b+=`<path d="M190,184 C176,150 186,110 168,70 C164,58 160,50 150,44" style="fill:none;stroke:${CV.ox};stroke-width:5;stroke-linecap:round"/>`+`<path d="M176,140 C172,124 176,108 170,92" style="fill:none;stroke:#7E1F2A;stroke-width:9;stroke-linecap:round;opacity:.7"/>`;
  b+=`<circle cx="224" cy="138" r="10" style="fill:#fff;stroke:#B98C70"/>`+dot(226,138,4,"#3A2A20");
  b+=T(14,30,"superficial temporal a.",{a:"start",c:"s"})+Ln(80,36,164,88,CV.mut,1);
}
 else{const tube=(d,c,w)=>`<path d="${d}" style="stroke:var(--a-edge);stroke-width:${w+2.4};fill:none;stroke-linecap:round"/><path d="${d}" style="stroke:${c};stroke-width:${w};fill:none;stroke-linecap:round"/>`;
  b+=tube("M80,280 C70,200 100,150 170,150 C240,150 270,200 260,280",CV.ox,26)+tube("M122,160 L90,60",CV.ox,12)+tube("M170,150 L172,50",CV.ox,10)+tube("M220,156 L270,60",CV.ox,11);
  [[100,96],[172,92],[256,92]].forEach(([x,y])=>b+=`<path d="M${x-12},${y-6} C${x-4},${y} ${x-4},${y+6} ${x-12},${y+12} M${x+12},${y-6} C${x+4},${y} ${x+4},${y+6} ${x+12},${y+12}" style="stroke:var(--a-musc);stroke-width:6;fill:none"/>`);
  b+=`<path d="M140,152 C160,146 190,146 210,152" style="stroke:var(--a-musc);stroke-width:6;fill:none"/>`;
  b+=T(170,300,"aortic arch + branches ตีบ",{c:"s"})+T(290,60,"pulseless",{a:"start",c:"bh"})+T(290,76,"BP แขนต่างกัน",{a:"start",c:"s m"});}
 /* histology inset */
 b+=slide(320,8,316,120);const cx=400,cy=68;b+=`<circle cx="${cx}" cy="${cy}" r="48" style="fill:${HE.cy};stroke:${HE.mem}"/><circle cx="${cx}" cy="${cy}" r="${g?14:22}" style="fill:#FFF6F8;stroke:${HE.mem}"/>`;
 const r=rng(6);for(let i=0;i<24;i++){const a=r()*6.28,rr=(g?18:26)+r()*20;b+=dot(cx+rr*Math.cos(a),cy+rr*Math.sin(a),2.6,HE.nuD)}
 b+=`<ellipse cx="${cx+24}" cy="${cy-12}" rx="11" ry="7" style="fill:#F2C3D3;stroke:${HE.mem}"/>`+[0,1,2,3].map(j=>dot(cx+18+j*4,cy-12+(j%2?2:-2),1.8,HE.nu)).join("");
 b+=TD(540,52,"granulomatous",{w:700})+TD(540,68,"+ giant cells",{})+TD(540,84,g?"IEL แตกเป็นช่วง":"media/adventitia",{s:10});
 const D=g?["Giant cell (temporal) arteritis","อายุ > 50 · หญิง > ชาย",["ปวดขมับข้างเดียว · jaw claudication","ตามัว → ตาบอดถาวร (ophthalmic a.)","ร่วมกับ polymyalgia rheumatica","ESR ↑ · biopsy เป็นหย่อม (skip lesions)","ให้ steroid ทันทีโดยไม่ต้องรอ biopsy"]]:["Takayasu arteritis","อายุ < 40 · หญิงเอเชีย",["pulseless disease: ชีพจรแขนเบา","claudication แขน · BP แขนต่างกัน","อาการทั่วไป: ไข้ ปวดข้อ น้ำหนักลด","ESR ↑ · รักษาด้วย steroid"]];
 b+=infoPanel(320,138,316,D[0],D[1],D[2],CV.bad);
 return hsvg(b,"0 0 640 "+Math.max(310,138+IPH+6))}
function vmD(){const k=ST.vm;let b="";
 if(k==="pan"){const tube=(d,c,w)=>`<path d="${d}" style="stroke:var(--a-edge);stroke-width:${w+2};fill:none;stroke-linecap:round"/><path d="${d}" style="stroke:${c};stroke-width:${w};fill:none;stroke-linecap:round"/>`;
  b+=tube("M40,150 C120,150 160,110 290,90",CV.ox,10)+tube("M160,130 C200,160 240,190 290,210",CV.ox,8)+tube("M90,150 C110,200 130,240 170,270",CV.ox,8);
  [[120,148],[190,118],[240,100],[210,176],[260,196],[118,206],[146,250]].forEach(([x,y])=>b+=`<circle cx="${x}" cy="${y}" r="${7+((x+y)%5)}" style="fill:${CV.ox};stroke:var(--a-edge)"/>`);
  b+=T(160,40,"string of beads: microaneurysm",{c:"bh"})+T(160,58,"renal · mesenteric · ไม่แตะปอด",{c:"s m"})}
 if(k==="kaw"){b+=`<circle cx="160" cy="80" r="44" style="fill:#F3D7C4;stroke:#B98C70"/>`+`<circle cx="144" cy="74" r="7" style="fill:#fff;stroke:#E25555;stroke-width:2.6"/><circle cx="176" cy="74" r="7" style="fill:#fff;stroke:#E25555;stroke-width:2.6"/>`+`<path d="M146,100 C154,106 166,106 174,100" style="stroke:#D9283E;stroke-width:4;fill:none"/>`;
  b+=`<path d="M120,128 C120,124 200,124 200,128 L214,230 L106,230Z" style="fill:#FAD3D3;stroke:#E59AA4"/>`+[...Array(14)].map((_,i)=>dot(122+(i*37)%84,140+(i*23)%80,3,"#E25555")).join("");
  b+=`<circle cx="240" cy="170" r="22" style="fill:url(#gMyo)"/><path d="M226,160 C232,172 244,178 258,182" style="stroke:#FFD23F;stroke-width:4;fill:none"/><circle cx="244" cy="174" r="7" style="fill:#FFD23F;stroke:#B08A2E"/>`+T(240,210,"coronary aneurysm",{c:"s"});
  b+=T(160,262,"CRASH and burn",{c:"bh"})+T(160,280,"Conjunctivitis · Rash · Adenopathy · Strawberry tongue · Hand–foot · ไข้ ≥ 5 วัน",{c:"s m"})}
 if(k==="buerger"){b+=`<path d="M60,250 C60,150 80,100 100,80 L120,80 C126,120 130,150 132,170 L150,70 L172,70 L168,170 L190,60 L212,62 L196,180 L224,90 L244,96 L218,210 C214,250 190,270 150,272Z" style="fill:#F3D7C4;stroke:#B98C70;stroke-width:1.4"/>`;
  [[110,86],[161,74],[201,66]].forEach(([x,y])=>b+=`<ellipse cx="${x}" cy="${y+8}" rx="10" ry="12" style="fill:#2E2A33"/>`);
  b+=`<rect x="250" y="210" width="60" height="10" rx="3" style="fill:#F2F2F2;stroke:#999"/><rect x="300" y="210" width="12" height="10" style="fill:#E07A3F"/>`+T(280,240,"ผู้ชาย สูบบุหรี่",{c:"s"});
  b+=T(160,40,"segmental thrombosing vasculitis",{c:"bh"})+T(160,296,"ischemia/gangrene ปลายนิ้ว · Raynaud · migratory thrombophlebitis",{c:"s m"})}
 const D={pan:["Polyarteritis nodosa","immune complex · ไม่มี ANCA",["Hepatitis B ราว 30%","ไข้ น้ำหนักลด HTN (renal), ปวดท้อง/ถ่ายเป็นเลือด","mononeuritis multiplex · cutaneous nodules","transmural fibrinoid necrosis ระยะต่างกัน","รักษา: steroid + cyclophosphamide"]],
  kaw:["Kawasaki disease","เด็กเล็ก < 5 ปี (เอเชีย)",["mucocutaneous lymph node syndrome","coronary aneurysm → MI/rupture","รักษา: IVIG + aspirin"]],
  buerger:["Thromboangiitis obliterans","Buerger disease",["ชายอายุน้อยที่สูบบุหรี่จัด","thrombus อักเสบลามไปเส้นประสาท/หลอดเลือดดำข้างเคียง","รักษา: เลิกบุหรี่ (สำคัญที่สุด)"]]}[k];
 b+=infoPanel(330,8,306,D[0],D[1],D[2],CV.gold);
 return hsvg(b,"0 0 640 "+Math.max(304,IPH+16))}
const VS={gpa:["GPA (Wegener)","c-ANCA / PR3",["triad: upper airway (sinusitis, saddle nose) + lung (nodule/cavity, hemoptysis) + kidney (RPGN)","necrotizing granuloma + vasculitis","cyclophosphamide/rituximab + steroid"],CV.bad],
 mpa:["Microscopic polyangiitis","p-ANCA / MPO",["ปอด + ไต เหมือน GPA แต่ไม่มี granuloma และไม่มี upper airway","pauci-immune RPGN"],CV.violet],
 egpa:["EGPA (Churg–Strauss)","p-ANCA / MPO",["asthma + eosinophilia + sinusitis","granuloma มี eosinophil","mononeuritis multiplex · หัวใจ (สาเหตุตายหลัก)"],CV.gold],
 iga:["IgA vasculitis (HSP)","immune complex IgA",["เด็กหลังติดเชื้อทางเดินหายใจ","palpable purpura ที่ก้น/ขา + ปวดข้อ + ปวดท้อง (intussusception) + IgA nephropathy"],CV.teal],
 cryo:["Cryoglobulinemic vasculitis","immune complex",["สัมพันธ์ hepatitis C มาก","purpura, arthralgia, glomerulonephritis, complement ต่ำ"],"#0B83B5"],
 lcv:["Hypersensitivity (leukocytoclastic)","immune complex",["หลังได้ยา (penicillin, sulfa) หรือติดเชื้อ","palpable purpura · ทุก lesion อายุเท่ากัน","neutrophil แตกเป็นเศษ (leukocytoclasia)"],"#5E8A16"]};
function vsD(){const k=ST.vs,d=VS[k];let b="";
 /* vessel-size spectrum */
 const cols=[["Large","aorta + branches",CV.ox,["Giant cell arteritis","Takayasu"]],["Medium","main visceral a.",CV.gold,["PAN","Kawasaki","Buerger"]],["Small","arteriole–venule",CV.violet,["GPA · MPA · EGPA","IgA vasculitis","cryoglobulinemic","leukocytoclastic"]]];
 cols.forEach(([n,s,c,ds],i)=>{const x=6+i*212,r=[34,22,10][i];b+=`<rect x="${x}" y="6" width="204" height="150" rx="14" style="fill:color-mix(in srgb,${c} 9%,var(--sb-surface));stroke:color-mix(in srgb,${c} 45%,transparent)"/>`;
  b+=`<circle cx="${x+40}" cy="52" r="${r}" style="fill:${c};opacity:.85"/><circle cx="${x+40}" cy="52" r="${r*.55}" style="fill:var(--sb-surface)"/>`+T(x+84,46,n,{a:"start",c:"bb"})+T(x+84,64,s,{a:"start",c:"s m"});
  ds.forEach((t,j)=>b+=T(x+16,100+j*16,"• "+t,{a:"start",c:i===2&&((j===0&&["gpa","mpa","egpa"].includes(k))||(j===1&&k==="iga")||(j===2&&k==="cryo")||(j===3&&k==="lcv"))?"bh":"s"}))});
 b+=`<rect x="6" y="168" width="628" height="${48+d[2].reduce((a,l)=>a+14*nLines(l.replace(/<[^>]+>/g,""),88)+6,0)}" rx="14" style="fill:color-mix(in srgb,${d[3]} 10%,var(--sb-surface));stroke:${d[3]}"/>`+T(22,194,d[0],{a:"start",c:"bb"})+tag(560,190,d[1],d[3],{w:130});
 let y=218;d[2].forEach(l=>{b+=`<circle cx="24" cy="${y-4}" r="3" style="fill:${d[3]}"/>`+wrapT(34,y,l,88,"s",14);y+=14*nLines(l.replace(/<[^>]+>/g,""),88)+6});
 return psvg(b,`0 0 640 ${y+16}`)}

/* ---------- extra: vascular tumors & veins ---------- */
function vtD(){const C=[["Infantile hemangioma","เนื้องอกหลอดเลือดที่พบบ่อยสุดในทารก · โตแล้วยุบเอง",CV.ox],["Pyogenic granuloma","ก้อนแดงโตเร็ว เลือดออกง่าย · ตั้งครรภ์ (gingiva)",CV.bad],["Glomus tumor","ใต้เล็บ ปวดมาก ไวต่อความเย็น",CV.gold],["Kaposi sarcoma","HHV-8 · AIDS/ปลูกถ่ายอวัยวะ · ผื่นม่วง",CV.violet],["Angiosarcoma","มะเร็ง · ตับ: vinyl chloride, arsenic · หลังฉายแสง · lymphedema",CV.ink2],["Bacillary angiomatosis","Bartonella ในผู้ภูมิต่ำ · neutrophil (ต่างจาก Kaposi)",CV.teal],["Varicose veins","ขา (ลิ้นเสีย) · esophageal varices จาก portal HTN",CV.dx],["DVT · thrombophlebitis","stasis + hypercoagulable · Trousseau ในมะเร็ง",CV.dx]];
 let b="";C.forEach(([t,d,c],i)=>{const x=6+(i%2)*318,y=6+Math.floor(i/2)*76;b+=cardBox(x,y,310,68,t,[d],c,{n:48})});return psvg(b,"0 0 640 312")}

/* ================= sections ================= */
SEC.push({id:"cardiomyo",k:"a",t:"Cardiomyopathies",mm:"Cardiomyopathies",leg:[],tools:[["cm",[["dcm","Dilated"],["hcm","Hypertrophic"],["rcm","Restrictive"],["tako","Takotsubo"]]]],draw:cmD,
notes:()=>`<ul><li><b>Dilated</b>: systolic dysfunction · eccentric hypertrophy (sarcomere ต่อแบบ series) · สาเหตุ: idiopathic/familial (TTN), alcohol, cocaine, doxorubicin, coxsackie B, Chagas, ischemia, hemochromatosis, sarcoidosis, thyrotoxicosis, wet beriberi, peripartum ${S.fa}</li>
<li>Athlete's heart ห้องโตเพื่อเพิ่ม SV และ CO · ไม่ใช่โรค ${S.fa}</li>
<li><b>Hypertrophic</b>: 60–70% เป็น AD (β-MHC, myosin-binding protein C) · concentric (series → parallel) เน้น septum · <b>myofiber disarray</b> ${S.fa} · ห้องเล็กเป็นรูปกล้วย ${S.r}</li>
<li>HOCM: SAM ของ mitral ดึงไปชน septum → LVOT obstruction · รักษา β-blocker หรือ verapamil · <b>เลี่ยงยาลด preload</b> (diuretic, vasodilator) · ICD ถ้าเสี่ยงสูง ${S.fa}</li>
<li><b>Restrictive</b>: PLEASe Help · amyloid ให้ ECG low voltage แม้ผนังหนา · Löffler = eosinophil ใน myocardium (hypereosinophilic syndrome) ${S.fa}</li>
<li><b>Takotsubo</b>: apical ballooning หลังเครียดหนัก ${S.fa}</li>
<li>Robbins แบ่งตาม EF: dilated &lt; 40%, hypertrophic 50–80%, restrictive 45–90% ${S.r}</li></ul>`});

SEC.push({id:"hf",k:"a",t:"Heart failure",mm:"Heart failure",leg:[],tools:[["hf",[["normal","Normal"],["hfref","HFrEF"],["hfpef","HFpEF"]]]],draw:hfD,
notes:()=>`<ul><li>HF = หัวใจสูบไม่พอ → <b>congestion</b> และ <b>perfusion ต่ำ</b> · อาการ: เหนื่อย นอนราบไม่ได้ อ่อนเพลีย · signs: S₃, crackles, JVD, pitting edema ${S.fa}</li>
<li><b>HFrEF</b>: contractility ↓ EDV ↑ (ischemia, DCM) · <b>HFpEF</b>: compliance ↓ EDP ↑ (LVH) ${S.fa}</li>
<li>Right HF ส่วนใหญ่ตามหลัง left HF · <b>cor pulmonale</b> = right HF จากโรคปอด ${S.fa}</li>
<li>Neurohormonal compensation (sympathetic, RAAS, ADH) ช่วยคง BP แต่ทำให้ remodeling แย่ลง ${S.fa}</li>
<li>ยาที่ลดการตายใน HFrEF: ACEi/ARB/ARNI, β-blocker (ยกเว้นช่วง decompensate), MRA, SGLT2i, hydralazine + nitrate (บางกลุ่ม) · loop/thiazide ช่วยอาการ ${S.fa}</li>
<li>Left HF: orthopnea, PND (venous return ↑ ตอนนอน), pulmonary edema, <b>hemosiderin-laden macrophage</b> ("HF cells") · right HF: nutmeg liver (cardiac cirrhosis ได้), JVD, edema ${S.fa}</li>
<li><b>High-output HF</b>: SVR ↓ จาก vasodilation/AV shunt · อ้วนมาก, cirrhosis, anemia รุนแรง, hyperthyroid, wet beriberi, Paget ${S.fa}</li></ul>`});

SEC.push({id:"shock",k:"a",t:"Shock",mm:"Shock types",leg:[],tools:[["sh",[["hypo","Hypovolemic"],["cardio","Cardiogenic"],["obstr","Obstructive"],["dist","Distributive"]]]],draw:shD,
notes:()=>`<div class="pearl">Shock = อวัยวะได้เลือดไม่พอ · หาความผิดปกติ<b>หลัก</b> (กรอบเขียว) แล้วตัวอื่นเปลี่ยนตาม ${S.fa}</div>
<ul><li>Hypovolemic: preload ↓ (CVP, PCWP ↓) → CO ↓ → SVR ↑ ชดเชย ${S.fa}</li>
<li>Cardiogenic: pump ↓ → CO ↓ เลือดคั่งย้อน (PCWP ↑) ${S.fa}</li>
<li>Obstructive: PE, tension pneumothorax, tamponade · CVP ↑ แต่ LV เติมไม่ได้ ${S.fa}</li>
<li>Distributive: SVR ↓ ผิวอุ่น · sepsis ระยะแรกและ anaphylaxis CO ↑ · neurogenic CO ↓ (ไม่มี sympathetic) ${S.fa}</li>
<li>Robbins: septic shock เป็นสาเหตุตายสำคัญใน ICU · ระยะ nonprogressive → progressive (lactic acidosis) → irreversible ${S.r}</li></ul>`});

SEC.push({id:"tamponade",k:"a",t:"Cardiac tamponade & pulsus paradoxus",mm:"Tamponade",leg:[],tools:[["tp",[["norm","Normal"],["tamp","Tamponade"]]]],draw:tpD,
notes:()=>`<ul><li>ของเหลวใน pericardium กดหัวใจ → CO ↓ · ความดัน diastolic ทั้ง 4 ห้อง<b>เท่ากัน</b> ${S.fa}</li>
<li><b>Beck triad</b>: hypotension, JVD, เสียงหัวใจเบา · HR ↑ · pulsus paradoxus ${S.fa}</li>
<li>ECG: low voltage, <b>electrical alternans</b> (หัวใจแกว่งใน effusion) · echo: RA collapse ช่วง systole, RV collapse ช่วง diastole, IVC โป่ง ${S.fa}</li>
<li>รักษา: pericardiocentesis หรือระบาย ${S.fa}</li>
<li><b>Pulsus paradoxus</b>: SBP ลด &gt; 10 mmHg ตอนหายใจเข้า: venous return ↑ → RV ขยาย → septum ดันเข้า LV → LV output ↓ · พบใน constrictive pericarditis, croup, OSA, asthma, COPD, tamponade (pea COAT) ${S.fa}</li>
<li>ปริมาณที่ทำให้เกิด tamponade ขึ้นกับความเร็ว: สะสมเร็ว 200–300 mL ก็พอ · ช้าๆ รับได้เป็นลิตร ${S.r}</li></ul>`});

SEC.push({id:"syncope",k:"a",t:"Syncope",mm:"Syncope",leg:[],draw:synD,
notes:()=>`<ul><li>หมดสติชั่วคราวจาก cerebral blood flow ลดลง · แบ่งเป็น reflex, orthostatic, cardiac ${S.fa}</li>
<li><b>Reflex</b> พบบ่อยที่สุด: vasovagal มีอาการนำ (ร้อน ซีด คลื่นไส้) หมดสติสั้นฟื้นเร็ว ${S.fa}</li>
<li><b>Orthostatic hypotension</b>: SBP ลด ≥ 20 และ/หรือ DBP ลด ≥ 10 mmHg ภายใน 3 นาทีหลังยืน ${S.fa}</li>
<li><b>Cardiac</b>: arrhythmia หรือ structural (AS, HCM) · เกิดขณะออกแรงหรือไม่มีอาการนำ ต้องตรวจละเอียด ${S.fa}</li>
<li>Work-up เบื้องต้นทุกราย: ประวัติ ตรวจร่างกาย orthostatic vitals และ ECG ${S.x}</li></ul>`});

SEC.push({id:"ie",k:"b",t:"Infective endocarditis & NBTE",mm:"Endocarditis",leg:[],tools:[["ie",[["acute","Acute"],["sub","Subacute"],["nbte","NBTE"]]]],draw:ieD,
notes:()=>`<ul><li>ติดเชื้อที่ endocardium มักที่ลิ้นหัวใจ · bacteria &gt;&gt; fungi · mitral &gt; aortic · tricuspid → นึกถึง IV drug use ${S.fa}</li>
<li>Vegetation = platelet + fibrin + เชื้อ บน endothelium ที่บาดเจ็บ → ลิ้นรั่ว, septic emboli (ซ้าย → systemic, ขวา → ปอด) ${S.fa}</li>
<li><b>Vascular</b>: septic emboli, petechiae, splinter hemorrhage, Janeway lesion · <b>Immunologic</b>: glomerulonephritis, Osler node (Ouchy), Roth spot ${S.fa}</li>
<li>ไข้พบบ่อยที่สุด · วินิจฉัย: blood culture หลายขวด + echo (modified Duke criteria) ${S.fa} ${S.r}</li>
<li>Enterococcus หลังหัตถการ GI/GU · S. gallolyticus (bovis) → ตรวจหา colon cancer · HACEK เป็น gram ⊝ ที่ culture ยาก ${S.fa}</li>
<li><b>NBTE</b> (marantic): ก้อน thrombus ไม่มีเชื้อ หลุดง่าย · มะเร็งระยะท้าย (pancreas) หรือ SLE (Libman–Sacks) ${S.fa}</li></ul>`});

SEC.push({id:"rheumatic",k:"b",t:"Rheumatic fever & rheumatic heart disease",mm:"Rheumatic fever",leg:[],tools:[["rf",[["acute","Acute RF"],["chronic","Chronic RHD"]]]],draw:rfD,
notes:()=>`<ul><li>ผลแทรกซ้อนแบบไม่หนองหลัง<b>คออักเสบ</b>จาก group A β-hemolytic strep · type II hypersensitivity: antibody ต่อ M protein cross-react กับ myosin (molecular mimicry) ${S.fa}</li>
<li>Major criteria J♥NES · lab: ASO, anti-DNase B สูง ${S.fa}</li>
<li>Pancarditis · ลิ้นที่โดน: mitral &gt; aortic &gt;&gt; tricuspid (ลิ้นความดันสูง) · ระยะแรก regurgitation ระยะหลัง stenosis ${S.fa}</li>
<li>Aschoff body (granuloma + giant cell), Anitschkow cell (macrophage นิวเคลียสเป็นแท่งหยัก) ${S.fa} · ผิวลิ้นมี verrucae เล็กตามแนวปิด ${S.r}</li>
<li>Chronic RHD: commissure เชื่อมกัน chordae หดสั้น → fish-mouth MS · LA โต AF thrombus ${S.r}</li>
<li>รักษา/ป้องกัน: penicillin ${S.fa}</li></ul>`});

SEC.push({id:"valves",k:"b",t:"Valvular heart disease",mm:"Valve lesions",leg:[],tools:[["vv",[["as","AS"],["ar","AR"],["ms","MS"],["mr","MR"],["mvp","MVP"]]]],draw:vvD,
notes:()=>`<ul><li><b>Calcific aortic stenosis</b>: สาเหตุ AS ที่พบบ่อยที่สุด · ก้อน calcium ที่ด้าน outflow ของ cusp · bicuspid ทำให้เกิดเร็วขึ้น ${S.r}</li>
<li>AS: concentric LVH · angina, syncope, HF (SAD) · พยากรณ์แย่เมื่อมีอาการ ${S.r}</li>
<li><b>Mitral valve prolapse</b>: myxomatous degeneration (leaflet นุ่มหนาโป่งเข้า LA) · ส่วนใหญ่ไม่มีอาการ · อาจเกิด MR, IE, arrhythmia ${S.r}</li>
<li>MS: เกือบทั้งหมดจาก rheumatic · LA โต → AF, thrombus, pulmonary HTN ${S.r}</li>
<li><b>Syphilitic heart disease</b>: syphilis ระยะ 3 ทำลาย vasa vasorum → aorta ส่วน ascending/arch โป่ง (tree-bark) → AR ${S.fa}</li></ul>`});

SEC.push({id:"pericard",k:"c",t:"Acute & constrictive pericarditis",mm:"Pericarditis",leg:[],tools:[["pc",[["acute","Acute"],["constr","Constrictive"]]]],draw:pcD,
notes:()=>`<ul><li><b>Acute</b>: เจ็บแหลม หายใจเข้าแย่ลง นั่งโน้มไปหน้าดีขึ้น · friction rub · ECG <b>diffuse ST elevation</b> และ/หรือ PR depression ${S.fa}</li>
<li>สาเหตุ: idiopathic, viral (coxsackie B), มะเร็ง, หลังผ่าตัด, ฉายแสง (ระยะแรก), MI/Dressler, SLE, RA, uremia · รักษา NSAIDs, colchicine, steroid, dialysis ${S.fa}</li>
<li>ลักษณะทางพยาธิ: fibrinous (bread and butter), serous, purulent (แบคทีเรีย), hemorrhagic (มะเร็ง, TB), caseous (TB) ${S.r}</li>
<li><b>Constrictive</b>: pericardium เป็นพังผืดหนา ± calcified · EDV ↓ CO ↓ · JVD, edema, <b>Kussmaul sign</b>, pulsus paradoxus, pericardial knock · TB เป็นสาเหตุหลักในประเทศรายได้น้อย ${S.fa}</li>
<li>Kussmaul: JVP สูงขึ้นตอนหายใจเข้า (ปกติต้องลด) เพราะ RV รับเลือดที่เพิ่มขึ้นไม่ได้ · พบใน constrictive, restrictive CM, right HF, massive PE, ก้อนใน RA/RV ${S.fa}</li></ul>`});

SEC.push({id:"myocarditis",k:"c",t:"Myocarditis",mm:"Myocarditis",leg:[],tools:[["my",[["viral","Viral"],["hyper","Hypersensitivity"],["giant","Giant cell"],["chagas","Chagas"]]]],draw:myD,
notes:()=>`<ul><li>การอักเสบของ myocardium · สาเหตุ SCD สำคัญในผู้ใหญ่อายุ &lt; 40 · อาการหลากหลาย: เหนื่อย เจ็บหน้าอก ไข้ arrhythmia · <b>หัวใจเต้นเร็วเกินกว่าไข้</b> เป็นลักษณะเฉพาะ ${S.fa}</li>
<li>Viral: lymphocytic infiltrate + focal necrosis ${S.fa}</li>
<li>Hypersensitivity (แพ้ยา): eosinophil รอบหลอดเลือด · giant cell myocarditis: giant cell + necrosis กว้าง พยากรณ์แย่ · Chagas: T. cruzi อยู่ใน myocyte ${S.r}</li>
<li>ภาวะแทรกซ้อน: sudden death, arrhythmia, heart block, DCM, HF, mural thrombus ${S.fa}</li></ul>`});

SEC.push({id:"hht",k:"c",t:"Hereditary hemorrhagic telangiectasia & AVM",mm:"HHT · AVM",leg:[],draw:hhtD,
notes:()=>`<ul><li>AD (Osler–Weber–Rendu) · telangiectasia ที่กดจางบนผิวและเยื่อบุ, epistaxis ซ้ำ, AVM (สมอง ปอด ตับ), GI bleeding, hematuria ${S.fa}</li>
<li>AVM = ทางเชื่อม artery → vein flow สูงโดยไม่ผ่าน capillary · เสี่ยง high-output HF · สาเหตุ intracranial hemorrhage ที่พบบ่อยที่สุดในเด็ก ${S.fa}</li>
<li>ยีนเกี่ยวกับ TGF-β signaling ใน endothelium (ENG, ACVRL1) ${S.r}</li></ul>`});

SEC.push({id:"tumors",k:"c",t:"Cardiac tumors",mm:"Cardiac tumors",leg:[],tools:[["tm",[["myx","Myxoma"],["rhab","Rhabdomyoma"],["met","Metastasis"]]]],draw:tmD,
notes:()=>`<ul><li>Cardiac tumor ที่พบบ่อยที่สุดคือ <b>metastasis</b> (เช่น melanoma) ${S.fa}</li>
<li><b>Myxoma</b>: primary ที่พบบ่อยสุดในผู้ใหญ่ · 90% ใน atria (มักซ้าย) · ball-valve → syncope ซ้ำ · tumor plop (คล้าย MS) · IL-6 → ไข้ น้ำหนักลด · histology: myxoma cell ในพื้น GAG ("Adults make 6 myxed drinks") ${S.fa}</li>
<li>ประมาณ 10% เป็นแบบครอบครัว (Carney complex: PRKAR1A) ${S.r}</li>
<li><b>Rhabdomyoma</b>: primary ที่พบบ่อยสุดในเด็ก · hamartoma ใน ventricle · สัมพันธ์ tuberous sclerosis ${S.fa}</li></ul>`});

SEC.push({id:"vasc-large",k:"d",t:"Large-vessel vasculitis",mm:"Large vessel: GCA · Takayasu",leg:[],tools:[["vl",[["gca","Giant cell arteritis"],["tak","Takayasu"]]]],draw:vlD,
notes:()=>`<ul><li>Vasculitis แบ่งตามขนาดหลอดเลือด · กลไก: immune complex, ANCA, anti-endothelial antibody, autoreactive T cell ${S.r}</li>
<li><b>GCA</b>: พบบ่อยที่สุดในผู้สูงอายุ · granulomatous inflammation ของ aorta และแขนงใหญ่ (โดยเฉพาะ temporal, vertebral, ophthalmic) · biopsy เป็นหย่อมจึงอาจได้ผลลบ ${S.r}</li>
<li>GCA ตาบอดถาวรได้ → ให้ high-dose steroid ทันที ${S.x}</li>
<li><b>Takayasu</b>: granulomatous ที่ aortic arch และแขนง · ผนังหนา lumen แคบ → ชีพจรแขนเบา (pulseless disease) ${S.r}</li>
<li>สองโรคนี้ดูคล้ายกันใน histology · แยกด้วย<b>อายุ</b>เป็นหลัก (Takayasu &lt; 50) ${S.r}</li></ul>`});

SEC.push({id:"vasc-med",k:"d",t:"Medium-vessel vasculitis",mm:"Medium: PAN · Kawasaki · Buerger",leg:[],tools:[["vm",[["pan","PAN"],["kaw","Kawasaki"],["buerger","Buerger"]]]],draw:vmD,
notes:()=>`<ul><li><b>PAN</b>: necrotizing vasculitis ของ medium artery · <b>ไม่แตะปอด</b> · ระยะต่างกันในเวลาเดียว (acute fibrinoid + healed fibrosis) · microaneurysm ใน renal/mesenteric ${S.r} · สัมพันธ์ hepatitis B ${S.r}</li>
<li><b>Kawasaki</b>: เด็กเล็ก · สาเหตุอันดับต้นของ acquired heart disease ในเด็ก · coronary arteritis → aneurysm ${S.r} · IVIG + aspirin ${S.x}</li>
<li><b>Buerger</b>: segmental thrombosing ของ artery ขนาดกลาง–เล็กที่แขนขา ลามถึงหลอดเลือดดำและเส้นประสาท · สัมพันธ์บุหรี่อย่างมาก ${S.r}</li></ul>`});

SEC.push({id:"vasc-small",k:"d",t:"Small-vessel vasculitis",mm:"Small: ANCA · immune complex",leg:[],tools:[["vs",[["gpa","GPA"],["mpa","MPA"],["egpa","EGPA"],["iga","IgA vasc."],["cryo","Cryo"],["lcv","Leukocytoclastic"]]]],draw:vsD,
notes:()=>`<ul><li><b>ANCA-associated</b> (pauci-immune): GPA (PR3-ANCA), MPA และ EGPA (MPO-ANCA) · ANCA กระตุ้น neutrophil ให้ทำลาย endothelium ${S.r}</li>
<li>GPA: necrotizing granuloma ทางเดินหายใจ + vasculitis + glomerulonephritis ${S.r}</li>
<li>MPA: necrotizing vasculitis ของหลอดเลือดเล็ก <b>ไม่มี granuloma</b> · ไต (RPGN) และปอด (capillaritis) พบบ่อย ${S.r}</li>
<li>EGPA: asthma, allergic rhinitis, eosinophilia · หัวใจเป็นสาเหตุตาย ${S.r}</li>
<li><b>Immune complex</b>: IgA vasculitis (HSP), cryoglobulinemic (HCV), hypersensitivity (leukocytoclastic) จากยา/ติดเชื้อ · ผื่น palpable purpura ${S.r}</li></ul>`});

SEC.push({id:"vasc-tumor",k:"d",t:"Vascular tumors & venous disease",mm:"Vascular tumors · veins",leg:[],draw:vtD,
notes:()=>`<ul><li>Vascular tumors เรียงจากไม่ร้าย (hemangioma) → intermediate (Kaposi) → ร้าย (angiosarcoma) ${S.r}</li>
<li>Kaposi sarcoma: HHV-8 · พบใน AIDS, ผู้ปลูกถ่ายอวัยวะ และผู้สูงอายุชายแถบเมดิเตอร์เรเนียน ${S.r}</li>
<li>Angiosarcoma ของตับสัมพันธ์ vinyl chloride, arsenic, Thorotrast · และเกิดในแขนที่บวมหลังผ่าตัดเต้านม ${S.r}</li>
<li>Bacillary angiomatosis (Bartonella) ดูคล้าย Kaposi แต่มี neutrophil และหายด้วยยาปฏิชีวนะ ${S.r}</li>
<li>Varicose veins: ผนังเสื่อม ลิ้นรั่ว · DVT ของขาเป็นแหล่ง PE ที่สำคัญ ${S.r}</li></ul>`});

const EXTRA=["vasc-tumor"];

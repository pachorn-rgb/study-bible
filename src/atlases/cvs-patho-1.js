/* ================= Cardiovascular Pathology I · Congenital heart disease, hypertension & arteries =================
   First Aid Step 1 2025 (CV pathology, pp. 302–307) order · Robbins & Cotran 10e Ch 11 (Blood Vessels) & Ch 12 (congenital) · FA Step 2 CK (hypertension)
   All drawings are original schematics built with the shared helpers. */
//@include _cvs-patho-helpers.js
Object.assign(GN,{a:"Congenital heart disease",b:"Hypertension & lipids",c:"Arteriosclerosis",d:"Aorta & great arteries",e:"Vessel wall biology"});
Object.assign(ST,{rl:"tof",lr:"vsd",ey:0,co:"post",sbp:150,dbp:95,ho:"chronic",as:"normal",ar:"hyaline",an:"aaa",ds:"A",ss:"ex"});

/* ---------- 1. right-to-left shunts ---------- */
const RL={
 tof:{n:"Tetralogy of Fallot",num:"4 · Tetra",o:{vsd:true,vsdy:214,override:true,ps:true,rvh:true,c:{ao:CV.mx},flows:[[150,262,196,214,"#fff",168,226]]},
  r:["PROVe: Pulmonary stenosis · RVH · Overriding aorta · VSD","ความรุนแรงขึ้นกับ RV outflow obstruction","CXR: boot-shaped heart","cyanosis ในวัยเด็กที่พบบ่อยสุด","Tet spell → นั่งยองช่วย (SVR ↑)","สัมพันธ์ 22q11 deletion"]},
 tga:{n:"D-Transposition",num:"2 · switched vessels",o:{tga:true,asd:true,c:{ao:CV.dx,pa:CV.ox}},
  r:["Aorta ออกจาก RV · PA ออกจาก LV","วงจรขนาน 2 วง ต้องมี VSD / PDA / PFO ให้ผสม","Aorticopulmonary septum ไม่หมุนเป็นเกลียว","CXR: egg on a string","ให้ PGE₁ คง PDA แล้วผ่าตัด"]},
 truncus:{n:"Truncus arteriosus",num:"1 · one vessel",o:{truncus:true,vsd:true,vsdy:214,c:{ao:CV.mx,pa:CV.mx,rv:CV.dx,lv:CV.ox}},
  r:["Truncus ไม่แบ่งเป็น aorta + pulmonary trunk","aorticopulmonary septum ไม่ก่อตัว","เกือบทุกรายมี VSD","เลือดไปปอดมาก → pulmonary HTN เร็ว","สัมพันธ์ 22q11 deletion"]},
 ta:{n:"Tricuspid atresia",num:"3 · Tri",o:{tvatresia:true,asd:true,vsd:true,vsdy:236,c:{la:CV.mx,lv:CV.mx,ao:CV.mx,rv:CV.mx,pa:CV.mx},flows:[[150,140,190,146,"#fff"]]},
  r:["ไม่มี tricuspid valve · RV เล็ก","ต้องมีทั้ง ASD และ VSD/PDA จึงอยู่รอด","ECG: P สูง (RA โต) + left axis deviation","เลือดดำผ่าน ASD ไปผสมใน LA"]},
 tapvr:{n:"TAPVR",num:"5 letters",o:{tapvr:true,asd:true,c:{ra:CV.mx,rv:CV.mx,pa:CV.mx,la:CV.mx,lv:CV.mx,ao:CV.mx,svc:CV.mx},flows:[[150,140,192,146,"#fff"]]},
  r:["Pulmonary veins เทเข้าฝั่งขวา (SVC, coronary sinus)","ต้องมี ASD (± PDA) ให้เลือดไปฝั่งซ้าย","Cyanosis + RV volume overload","แบบ pulmonary vein อุดกั้น = ฉุกเฉิน"]},
 ebstein:{n:"Ebstein anomaly",num:"lithium in utero",o:{ebstein:true,rak:1.18,asd:true,c:{ra:CV.dx},flows:[[150,140,190,146,"#fff"]]},
  r:["Tricuspid leaflets เลื่อนลงใน RV (atrialized RV)","TR · RA โตมาก · right HF","Accessory pathway (WPW) ร่วมบ่อย","R→L ผ่าน PFO/ASD → cyanosis"]}};
const LEGB=(x,y)=>[["เลือดแดง",CV.ox],["เลือดดำ",CV.dx],["ผสม",CV.mx]].map(([l,c],i)=>`<rect x="${x+i*100}" y="${y}" width="15" height="15" rx="5" style="fill:${c}"/>`+T(x+i*100+21,y+12,l,{a:"start",c:"s"})).join("");
function rlD(){const d=RL[ST.rl];let b=heartAt(0,6,.86,d.o);
 b+=infoPanel(314,8,322,d.n,"5 T's · "+d.num,d.r,CV.violet);b+=LEGB(318,IPH+24);
 return hsvg(b,"0 0 640 312")}

/* ---------- 2. left-to-right shunts ---------- */
const LR={
 vsd:{n:"VSD",o:{vsd:true,c:{rv:CV.mx,pa:CV.mx},hot:["rv","pa"],flows:[[234,236,168,236,"#fff"]]},sat:{ra:75,rv:85,pa:85,la:98,lv:98,ao:98},
  r:["พบบ่อยสุด: VSD > ASD > PDA","Holosystolic murmur ขอบ sternum ซ้ายล่าง","รูเล็กมักปิดเอง · รูใหญ่ → LV overload","O₂ step-up ใน RV และ PA"]},
 asd:{n:"ASD",o:{asd:true,asdc:CV.mx,c:{ra:CV.mx,rv:CV.mx,pa:CV.mx},hot:["ra","rv","pa"],flows:[[262,150,160,150,"#fff"]]},sat:{ra:85,rv:85,pa:85,la:98,lv:98,ao:98},
  r:["Ostium secundum พบบ่อยสุด","Ostium primum ↔ Down / AV canal","Wide, fixed split S₂","Paradoxical embolism ได้","O₂ step-up ตั้งแต่ RA"]},
 pda:{n:"PDA",o:{pda:true,pdac:CV.ox,c:{pa:CV.mx},hot:["pa"],flows:[[290,62,266,104,"#fff"]]},sat:{ra:75,rv:75,pa:85,la:98,lv:98,ao:98},
  r:["หลังคลอด PVR ↓ → shunt กลายเป็น L→R","Continuous machine-like murmur","เปิดค้างด้วย PGE + O₂ ต่ำ","ปิดด้วย indomethacin / ibuprofen","ไม่แก้ → late cyanosis ที่ขา"]}};
function lrD(){const d=LR[ST.lr];let b=heartAt(0,6,.86,d.o);
 const pos={ra:[56,150],rv:[168,322],pa:[178,62],la:[350,104],lv:[322,322],ao:[268,16]};let pills="";
 Object.entries(d.sat).forEach(([k,v])=>{const [x,y]=pos[k];const up=(k==="ra"||k==="rv"||k==="pa")&&v>80;pills+=`<rect x="${x-28}" y="${y-13}" width="56" height="26" rx="13" style="fill:${up?"var(--sb-accent)":"var(--sb-surface)"};stroke:var(--sb-line)"/>`+`<text x="${x}" y="${y+5}" text-anchor="middle" style="font:700 13px var(--sb-mono);fill:${up?"#fff":"var(--sb-ink)"}">${v}%</text>`});
 b+=`<g transform="translate(0,6) scale(.86)">${pills}</g>`;
 b+=infoPanel(314,8,322,d.n,"Acyanotic ตอนแรก · cyanosis มาทีหลัง",d.r,CV.ox);
 b+=T(318,IPH+30,"ตัวเลข = O₂ saturation (%)",{a:"start",c:"s m"})+T(318,IPH+46,"สีเข้ม = O₂ step-up ฝั่งขวา",{a:"start",c:"s m"});
 return hsvg(b,"0 0 640 312")}

/* ---------- 3. Eisenmenger slider ---------- */
function eisD(){const y=+ST.ey,f=Math.pow(y/30,1.35),rv=Math.round(25+100*f),lv=120,pvr=(1.5+10*Math.pow(y/30,1.6)).toFixed(1);
 const dir=rv<lv-8?"lr":rv<=lv+2?"bi":"rl";
 const cl={rv:dir==="rl"?CV.dx:CV.mx,pa:dir==="rl"?CV.dx:CV.mx,lv:dir==="lr"?CV.ox:CV.mx,ao:dir==="lr"?CV.ox:CV.mx};
 const fl=dir==="lr"?[[234,236,168,236,"#fff"]]:dir==="rl"?[[168,236,234,236,"#fff"]]:[[226,228,176,228,"#fff"],[176,246,226,246,"#fff"]];
 let b=heartAt(0,8,.8,{vsd:true,rvh:y>8,c:cl,flows:fl});
 const bx=330,by=36,H=180,Yp=v=>by+H-v/140*H;
 b+=T(bx-30,by-16,"Systolic pressure (mmHg)",{a:"start",c:"bh"});
 b+=`<path d="M${bx},${by} V${by+H} H${bx+150}" class="ax"/>`+[0,40,80,120].map(v=>T(bx-6,Yp(v)+4,v,{a:"end",c:"s m"})+`<line class="gl" x1="${bx}" x2="${bx+150}" y1="${Yp(v)}" y2="${Yp(v)}"/>`).join("");
 b+=`<rect x="${bx+20}" y="${Yp(lv)}" width="46" height="${by+H-Yp(lv)}" rx="6" style="fill:${CV.ox}"/>`+T(bx+43,by+H+16,"LV",{c:"bh"})+T(bx+43,Yp(lv)-6,lv,{c:"s"});
 b+=`<rect x="${bx+86}" y="${Yp(rv)}" width="46" height="${by+H-Yp(rv)}" rx="6" style="fill:${CV.dx}"/>`+T(bx+109,by+H+16,"RV",{c:"bh"})+T(bx+109,Yp(rv)-6,rv,{c:"s"});
 const cx=570,cy=100,wall=10+26*Math.pow(y/30,1.2),lum=Math.max(5,40-wall*.85);
 b+=`<circle cx="${cx}" cy="${cy}" r="${lum+wall}" style="fill:${HE.cy};stroke:${HE.mem};stroke-width:1.4"/>`;
 for(let i=0;i<Math.round(wall/6);i++)b+=`<circle cx="${cx}" cy="${cy}" r="${lum+4+i*6}" style="fill:none;stroke:${HE.mem};stroke-width:.7;opacity:.6"/>`;
 b+=`<circle cx="${cx}" cy="${cy}" r="${lum}" style="fill:#FFF8FA;stroke:${HE.mem};stroke-width:1.2"/>`;
 b+=T(cx,166,"pulmonary arteriole",{c:"s m"})+T(cx,182,`PVR ≈ ${pvr} Wood units`,{c:"s"});
 const st={lr:["L → R shunt","acyanotic · pulmonary flow ↑",CV.ox],bi:["Bidirectional","RV ≈ LV · เขียวเวลาออกแรง",CV.gold],rl:["R → L: Eisenmenger","late cyanosis · clubbing · polycythemia",CV.dx]}[dir];
 b+=tag(490,262,st[0],st[2],{w:200})+T(490,286,st[1],{c:"s"})+T(490,312,`VSD ที่ไม่ได้แก้ ${y} ปี`,{c:"bb"});
 return hsvg(b,"0 0 640 330")}

/* ---------- 4. coarctation ---------- */
function coD(){const pre=ST.co==="pre";let b="";
 const tube=(d,c,w)=>`<path d="${d}" style="stroke:var(--a-edge);stroke-width:${w+3};fill:none;stroke-linecap:round"/><path d="${d}" style="stroke:${c};stroke-width:${w};fill:none;stroke-linecap:round"/>`;
 const desc=pre?CV.mx:CV.ox;let g="";
 g+=tube("M150,330 C150,220 140,120 200,80 C260,40 330,50 360,110",CV.ox,40);
 g+=tube("M360,110 C372,140 374,200 374,330",desc,36);
 g+=tube("M196,84 L180,20",CV.ox,16)+tube("M246,62 L246,10",CV.ox,13)+tube("M300,64 L320,12",CV.ox,13);
 g+=T(172,16,"brachiocephalic",{a:"end",c:"s m"})+T(246,6,"L carotid",{c:"s m"})+T(328,10,"L subclavian",{a:"start",c:"s m"});
 g+=tube("M300,230 C300,190 310,170 330,160",CV.dx,22);g+=T(286,250,"PA",{c:"bh"});
 const nY=pre?92:156,nX=pre?336:372;
 if(pre){g+=tube("M330,160 C342,150 352,148 366,150",CV.dx,13)+T(300,150,"PDA เปิด",{a:"end",c:"s"})}
 else g+=`<path d="M330,160 C342,152 354,150 364,152" style="stroke:var(--sb-muted);stroke-width:4;stroke-dasharray:3 3;fill:none"/>`+T(300,150,"ligamentum arteriosum",{a:"end",c:"s m"});
 g+=`<path d="M${nX-24},${nY-6} C${nX-8},${nY} ${nX-8},${nY+8} ${nX-24},${nY+14} Z M${nX+24},${nY-6} C${nX+8},${nY} ${nX+8},${nY+8} ${nX+24},${nY+14} Z" style="fill:var(--a-musc);stroke:var(--a-edge)"/>`;
 g+=tag(nX+(pre?66:0),nY+(pre?4:-34),"coarctation","var(--sb-bad)",{w:84});
 if(!pre){for(let i=0;i<4;i++){const yy=200+i*34;g+=`<path d="M326,${30+i*4} C${452-i*6},${60+i*10} ${446-i*4},${yy-30} 392,${yy}" style="fill:none;stroke:${CV.ox};stroke-width:3;opacity:.8"/>`}
  g+=T(352,300,"intercostal collaterals",{a:"end",c:"s"})+T(352,314,"→ rib notching",{a:"end",c:"s m"});}
 else g+=T(352,300,"เลือดผ่าน PDA ไปท่อนล่าง",{a:"end",c:"s"})+T(352,314,"→ differential cyanosis",{a:"end",c:"s m"});
 b+=`<g transform="translate(-74,0)">${g}</g>`;
 const ga=(x,y,lab,val,c,sub)=>`<rect x="${x}" y="${y}" width="214" height="60" rx="14" style="fill:color-mix(in srgb,${c} 12%,var(--sb-surface));stroke:color-mix(in srgb,${c} 50%,transparent)"/>`+T(x+14,y+22,lab,{a:"start",c:"bh"})+`<text x="${x+14}" y="${y+48}" style="font:800 19px var(--sb-mono);fill:${c}">${val}</text>`+T(x+200,y+46,sub,{a:"end",c:"s m"});
 b+=ga(420,10,"แขน",pre?"120/70":"170/95",CV.ox,pre?"":"HTN แขน");
 b+=ga(420,80,"ขา",pre?"SpO₂ ต่ำ":"110/70",CV.dx,pre?"เขียวช่วงล่าง":"ชีพจรเบา ช้า");
 b+=infoPanel(420,152,214,pre?"Infantile (preductal)":"Adult (postductal)",null,pre?["อาการเมื่อ PDA ปิด → shock","สัมพันธ์ Turner","ให้ PGE₁ คง PDA"]:["brachiofemoral delay","bicuspid AV, Turner","HF, berry aneurysm, dissection, IE"],pre?CV.dx:CV.ox);
 return hsvg(b,"0 0 640 340")}

/* ---------- 5. associations ---------- */
function assocD(){const A=[["22q11 deletion","Truncus arteriosus · tetralogy",CV.violet],["Down syndrome","AV septal defect · VSD · ASD",CV.dx],["Diabetic pregnancy","TGA · truncus · tricuspid atresia · VSD",CV.gold],["Turner syndrome","Bicuspid AV · coarctation · dissection",CV.ox],["Marfan syndrome","MVP · thoracic aneurysm/dissection · AR",CV.teal],["Williams syndrome","Supravalvular aortic stenosis","#B83280"],["Congenital rubella","PDA · pulmonary artery stenosis · septal",CV.gold],["Fetal alcohol","VSD · PDA · ASD · tetralogy","#5E8A16"],["Prenatal lithium","Ebstein anomaly","#0B83B5"]];
 let b="";A.forEach(([a,d,c],i)=>{const x=4+(i%3)*212,y=6+Math.floor(i/3)*96;
  b+=`<rect x="${x}" y="${y}" width="204" height="86" rx="14" style="fill:color-mix(in srgb,${c} 9%,var(--sb-surface));stroke:color-mix(in srgb,${c} 45%,transparent)"/>`+`<path d="M${x},${y+30} V${y+14} a14,14 0 0 1 14,-14 H${x+190} a14,14 0 0 1 14,14 V${y+30}Z" style="fill:${c}"/>`+
  `<text x="${x+14}" y="${y+20}" style="font:750 12px var(--sb-font);fill:#fff">${a}</text>`+wrapT(x+14,y+50,d,30,"s",15)});
 return psvg(b,"0 0 640 296")}

/* ---------- 6. hypertension BP map ---------- */
function htnD(){const s=+ST.sbp,d=+ST.dbp;const x0=52,y0=14,W=300,H=270,X=v=>x0+(v-50)/(140-50)*W,Y=v=>y0+H-(v-90)/(230-90)*H;
 let b="";const zone=(d1,d2,s1,s2,c)=>`<rect x="${X(d1)}" y="${Y(s2)}" width="${X(d2)-X(d1)}" height="${Y(s1)-Y(s2)}" style="fill:${c}"/>`;
 b+=zone(50,140,90,230,"color-mix(in srgb,#C2493A 36%,var(--sb-surface))")+zone(50,120,90,180,"color-mix(in srgb,#E07A3F 32%,var(--sb-surface))")+zone(50,90,90,140,"color-mix(in srgb,#E3A23A 32%,var(--sb-surface))")+zone(50,80,90,130,"color-mix(in srgb,#B9C84A 34%,var(--sb-surface))")+zone(50,80,90,120,"color-mix(in srgb,#4FAE7B 32%,var(--sb-surface))");
 [60,80,90,100,120,140].forEach(v=>b+=T(X(v),y0+H+16,v,{c:"s m"}));[90,120,130,140,160,180,200,230].forEach(v=>b+=T(x0-6,Y(v)+4,v,{a:"end",c:"s m"}));
 b+=`<path class="ax" d="M${x0},${y0} V${y0+H} H${x0+W}"/>`+T(x0+W/2,y0+H+34,"Diastolic BP (mmHg)",{c:"s"})+T(x0-40,y0+H/2,"Systolic BP (mmHg)",{c:"s",r:-90});
 b+=T(X(65),Y(104),"Normal",{c:"s"})+T(X(65),Y(124.5)+1,"Elevated",{c:"s"})+T(X(85),Y(134),"Stage 1",{c:"s"})+T(X(105),Y(160),"Stage 2",{c:"s"})+T(X(122),Y(205),"Severe",{c:"s"});
 const px=X(Math.min(139,Math.max(51,d))),py=Y(Math.min(229,Math.max(91,s)));
 b+=`<circle cx="${px}" cy="${py}" r="14" style="fill:var(--sb-ink);opacity:.15"/><circle cx="${px}" cy="${py}" r="6.5" style="fill:var(--sb-ink);stroke:var(--sb-surface);stroke-width:2.4"/>`;
 const cat=s>=180||d>=120?["Severe hypertension","อวัยวะเสียหายเฉียบพลัน = emergency · ไม่มี = urgency","#C2493A"]:s>=140||d>=90?["Stage 2 hypertension","ปรับพฤติกรรม + ยา (มักต้อง 2 ตัว)","#D9692F"]:s>=130||d>=80?["Stage 1 hypertension","ปรับพฤติกรรม ± ยาตามความเสี่ยง","#C28A12"]:s>=120?["Elevated BP","ปรับพฤติกรรม ติดตามความดัน","#7E8A1E"]:["Normal BP","< 120/80 mmHg","#2E8A57"];
 b+=`<rect x="384" y="14" width="250" height="104" rx="14" style="fill:color-mix(in srgb,${cat[2]} 14%,var(--sb-surface));stroke:${cat[2]}"/>`+`<text x="400" y="48" style="font:800 24px var(--sb-mono);fill:${cat[2]}">${s}/${d}</text>`+T(400,72,cat[0],{a:"start",c:"bh"})+wrapT(400,90,cat[1],36,"s",14);
 b+=cardBox(384,130,250,120,"BP = CO × TPR",["90% essential (primary)","10% secondary: โรคไต, renal artery stenosis (atherosclerosis, FMD), 1° aldosteronism, OSA"],CV.teal);
 return psvg(b,"0 0 640 330")}

/* ---------- 7. end-organ damage ---------- */
function organD(){const em=ST.ho==="emer";let b="",g="";
 g+=`<path d="${sm([[385,30],[410,40],[418,70],[408,98],[440,112],[470,140],[474,240],[452,250],[446,170],[438,330],[410,340],[392,250],[378,250],[360,340],[332,330],[324,170],[318,250],[296,240],[300,140],[330,112],[362,98],[352,70],[360,40]])}" style="fill:var(--sb-surface2);stroke:var(--sb-line);stroke-width:1.4"/>`;
 const organ=(x,y,r,c)=>`<circle cx="${x}" cy="${y}" r="${r}" style="fill:${c};stroke:var(--sb-surface);stroke-width:1.6"/>`;
 g+=organ(385,58,13,"#B983D9")+organ(400,62,4,"#5B8BE8")+organ(398,150,16,CV.ox)+organ(378,190,8,"#E25555")+organ(360,215,9,"#C9826F")+organ(412,215,9,"#C9826F")+organ(386,250,10,"#E9A3C8");
 const L=em?[["Brain","encephalopathy · stroke · ICH",385,58,"l",40],["Retina","papilledema · hemorrhage · exudates",400,62,"r",40],["Heart","acute LV failure · pulmonary edema · MI",398,150,"r",135],["Aorta","aortic dissection",378,190,"l",150],["Kidney","AKI · malignant nephrosclerosis · MAHA",412,215,"r",230],["Pregnancy","preeclampsia / eclampsia",386,250,"l",260]]
 :[["Brain","stroke · lacunar infarct · Charcot–Bouchard",385,58,"l",40],["Retina","AV nicking · arteriolar narrowing",400,62,"r",40],["Heart","concentric LVH · CAD · HF · AF",398,150,"r",135],["Aorta","aneurysm · dissection",378,190,"l",150],["Kidney","benign nephrosclerosis · CKD",412,215,"r",230],["Arteries","atherosclerosis · arteriolosclerosis",386,250,"l",260]];
 b+=`<g transform="translate(-65,0)">${g}</g>`;
 const ac=em?"var(--sb-bad)":"var(--sb-accent)";
 L.forEach(([n,t,ox,oy,side,y])=>{const x=side==="l"?6:466,w=168;b+=`<path d="M${ox-65},${oy} L${side==="l"?x+w:x},${y}" style="stroke:var(--sb-muted);stroke-width:1;fill:none;stroke-dasharray:3 3"/>`+
  `<rect x="${x}" y="${y-22}" width="${w}" height="${16+14*nLines(t,26)+12}" rx="12" style="fill:color-mix(in srgb,${ac} 10%,var(--sb-surface));stroke:color-mix(in srgb,${ac} 45%,transparent)"/>`+T(x+12,y-4,n,{a:"start",c:"bh"})+wrapT(x+12,y+12,t,26,"s",14)});
 b+=tag(320,360,em?"Emergency: ≥180/≥120 + acute organ damage":"Chronic hypertension: damage builds silently",ac,{w:330});
 return psvg(b,"0 0 640 376")}

/* ---------- 8. hyperlipidemia signs ---------- */
function lipD(){let b="";
 const pnl=(x,t,s)=>frm(x,10,240,250,t,s);
 b+=pnl(10,"Xanthelasma · arcus","เปลือกตา และกระจกตา");
 b+=`<path d="M40,150 C80,96 180,96 220,150 C180,198 80,198 40,150Z" style="fill:#F3D7C4;stroke:#B98C70;stroke-width:1.4"/>`+`<circle cx="130" cy="150" r="38" style="fill:#7A5A3A"/><circle cx="130" cy="150" r="38" style="fill:none;stroke:#EDEBE3;stroke-width:7;opacity:.95"/><circle cx="130" cy="150" r="15" style="fill:#151515"/>`;
 b+=`<path d="M52,128 C90,92 170,92 208,128" style="fill:none;stroke:#B98C70;stroke-width:2"/>`+[[70,112,16,8],[96,104,12,6],[176,108,14,7]].map(([x,y,rx,ry])=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" style="fill:#F2D16B;stroke:#C9A63A"/>`).join("");
 b+=T(130,224,"arcus = วงขาวรอบ cornea",{c:"s"})+T(130,240,"plaque เหลือง = xanthelasma",{c:"s"});
 b+=pnl(262,"Tendinous xanthoma","Achilles · extensor ของนิ้ว");
 b+=`<path d="M290,62 C282,110 300,150 298,190 C296,214 300,226 318,228 L440,230 C454,228 452,212 438,206 L372,190 C362,186 358,170 360,150 C362,110 372,90 366,62Z" style="fill:#F3D7C4;stroke:#B98C70;stroke-width:1.4"/>`;
 b+=`<path d="M300,120 C304,150 304,180 304,214" style="stroke:#E8DFC8;stroke-width:8;fill:none;stroke-linecap:round"/>`+`<ellipse cx="300" cy="186" rx="11" ry="20" style="fill:#F2D16B;stroke:#C9A63A"/><ellipse cx="302" cy="150" rx="8" ry="12" style="fill:#F2D16B;stroke:#C9A63A"/>`;
 b+=Ln(316,170,384,140,CV.mut,1)+T(388,138,"nodules",{a:"start",c:"s"})+T(388,152,"บน Achilles",{a:"start",c:"s m"})+T(382,250,"familial hypercholesterolemia",{c:"s"});
 b+=pnl(514,"Eruptive xanthoma","papule เหลืองบนผิว");
 const r=rng(11);for(let i=0;i<26;i++){const x=540+r()*190,y=70+r()*150;b+=`<circle cx="${x}" cy="${y}" r="${3+r()*4}" style="fill:#F2D16B;stroke:#E26B5A;stroke-width:1.6"/>`}
 b+=T(634,240,"triglyceride สูงมาก",{c:"s"});
 return psvg(b,"0 0 764 270")}

/* ---------- 9. atherosclerosis stages ---------- */
const AS={normal:["Normal artery","intima บาง · endothelium เรียบ"],dys:["Endothelial dysfunction","LDL รั่วเข้า intima · monocyte เกาะ"],streak:["Fatty streak","foam cells (macrophage กิน oxLDL)"],fib:["Fibrous plaque (atheroma)","SMC อพยพ (PDGF, FGF) · fibrous cap + necrotic core"],comp:["Complicated plaque","cap แตก → thrombus · calcification · hemorrhage"]};
function athD(){const s=ST.as,i=["normal","dys","streak","fib","comp"].indexOf(s);let b="";
 const top=60,W=700,x0=30;
 /* adventitia, media, intima (top wall) */
 b+=`<rect x="${x0}" y="${top}" width="${W}" height="34" rx="4" style="fill:#F3E0C8;stroke:none"/>`;
 b+=`<rect x="${x0}" y="${top+34}" width="${W}" height="46" style="fill:#E7A3A3"/>`;
 for(let k=0;k<40;k++)b+=`<ellipse cx="${x0+10+k*17.5}" cy="${top+57+(k%2)*8}" rx="7" ry="2.2" style="fill:#B85C6E;opacity:.8"/>`;
 b+=`<path d="M${x0},${top+80} ${[...Array(36)].map((_,k)=>`Q${x0+k*20+5},${top+76} ${x0+k*20+10},${top+80} T${x0+k*20+20},${top+80}`).join(" ")}" style="fill:none;stroke:#F5E7A8;stroke-width:2.4"/>`;
 const lumY=top+90;
 b+=`<rect x="${x0}" y="${lumY}" width="${W}" height="150" style="fill:color-mix(in srgb,${CV.ox} 12%,var(--sb-surface))"/>`;
 /* plaque shape grows with stage */
 const ph=[0,8,26,62,74][i],cx=380;
 if(ph){b+=`<path d="M${cx-230},${lumY} C${cx-150},${lumY} ${cx-140},${lumY+ph} ${cx},${lumY+ph} C${cx+140},${lumY+ph} ${cx+150},${lumY} ${cx+230},${lumY} Z" style="fill:#F3DCA0;stroke:#C9A63A;stroke-width:1.2"/>`}
 if(i>=1){const r=rng(3);for(let k=0;k<14;k++)b+=dot(cx-160+r()*320,lumY+3+r()*Math.max(4,ph-8),2.2,"#E2A23A")}
 if(i===1){[240,420,520].forEach(x=>b+=`<circle cx="${x}" cy="${lumY+20}" r="11" style="fill:#C6B3E6;stroke:#7A5BC7"/>`+dot(x,lumY+20,4,"#5E4FA3"))}
 if(i>=2){const r=rng(5),n=i===2?6:9;for(let k=0;k<n;k++){const x=cx-150+k*(300/n)+r()*10,y=lumY+(i===2?12:22)+r()*(i===2?8:12);b+=`<circle cx="${x}" cy="${y}" r="10" style="fill:#FFF3D6;stroke:#C9A63A"/>`+[[-4,-3],[3,-2],[0,4],[-3,3]].map(([a,c])=>dot(x+a,y+c,1.8,"#E2A23A")).join("")+dot(x+5,y+3,2.6,"#5E4FA3")}}
 if(i>=3){b+=`<path d="M${cx-110},${lumY+30} C${cx-60},${lumY+56} ${cx+60},${lumY+56} ${cx+110},${lumY+30} C${cx+60},${lumY+44} ${cx-60},${lumY+44} ${cx-110},${lumY+30}Z" style="fill:#F7EFD6;stroke:#C9A63A"/>`;
  for(let k=0;k<6;k++)b+=`<path d="M${cx-60+k*22},${lumY+40} l14,-6" style="stroke:#fff;stroke-width:2.4"/>`;
  b+=`<path d="M${cx-170},${lumY+ph-8} C${cx-60},${lumY+ph+2} ${cx+60},${lumY+ph+2} ${cx+170},${lumY+ph-8}" style="fill:none;stroke:#E7A3A3;stroke-width:8;opacity:.9"/>`;
  for(let k=0;k<7;k++)b+=`<ellipse cx="${cx-130+k*42}" cy="${lumY+ph-6}" rx="7" ry="2" style="fill:#B85C6E"/>`}
 if(i===4){b+=`<path d="M${cx+40},${lumY+ph-4} C${cx+80},${lumY+ph+40} ${cx+180},${lumY+ph+30} ${cx+200},${lumY+ph+56} C${cx+110},${lumY+ph+70} ${cx+50},${lumY+ph+40} ${cx+30},${lumY+ph}" style="fill:#B8323F;stroke:#7E1F2A;stroke-width:1.2"/>`;
  for(let k=0;k<5;k++)b+=`<path d="M${cx-90+k*14},${lumY+50+(k%2)*6} l8,4" style="stroke:#5E4FA3;stroke-width:4;stroke-linecap:round"/>`;
  b+=tag(cx+150,lumY+ph+86,"thrombus","#B8323F",{w:78})}
 /* RBC flow */
 const r=rng(9);for(let k=0;k<16;k++){const x=x0+20+r()*660,y=lumY+90+r()*50;b+=`<ellipse cx="${x}" cy="${y}" rx="7" ry="4" style="fill:${CV.ox};opacity:.75"/>`}
 b+=T(x0+W-6,top+22,"adventitia",{a:"end",c:"s m"})+T(x0+W-6,top+60,"media (SMC)",{a:"end",c:"s m"})+T(x0+W-6,lumY+16,"intima",{a:"end",c:"s m"})+T(x0+W-6,lumY+140,"lumen →",{a:"end",c:"s m"});
 b+=T(x0,30,AS[s][0],{a:"start",c:"bb"})+T(x0,48,AS[s][1],{a:"start",c:"s m"});
 /* location ranking */
 const loc=["Abdominal aorta","Coronary","Popliteal","Internal carotid","Circle of Willis"];
 loc.forEach((l,k)=>{const w=140,x=x0+k*(w+5);b+=`<rect x="${x}" y="${lumY+164}" width="${w}" height="34" rx="10" style="fill:color-mix(in srgb,var(--sb-accent) ${30-k*5}%,var(--sb-surface));stroke:var(--sb-line)"/>`+T(x+w/2,lumY+185,`${k+1}. ${l}`,{c:"s"})});
 return psvg(b,"0 0 760 "+(lumY+210))}

/* ---------- 10. cholesterol emboli ---------- */
function ceD(){let b="",g0="";
 const tube=(d,c,w)=>`<path d="${d}" style="stroke:var(--a-edge);stroke-width:${w+3};fill:none;stroke-linecap:round"/><path d="${d}" style="stroke:${c};stroke-width:${w};fill:none;stroke-linecap:round"/>`;
 b+=tube("M200,20 L200,250",CV.ox,40)+tube("M200,250 L140,330",CV.ox,22)+tube("M200,250 L260,330",CV.ox,22);
 b+=tube("M200,110 L120,120",CV.ox,12)+tube("M200,110 L280,120",CV.ox,12)+tube("M200,150 L280,170",CV.ox,10);
 b+=`<ellipse cx="94" cy="122" rx="22" ry="32" style="fill:#B6584E;stroke:var(--a-edge)"/><ellipse cx="306" cy="122" rx="22" ry="32" style="fill:#B6584E;stroke:var(--a-edge)"/>`+T(94,170,"kidney",{c:"s m"});
 /* ulcerated plaque */
 b+=`<path d="M182,60 C172,80 172,96 182,112 L184,112 C178,96 178,82 184,62Z" style="fill:#F3DCA0;stroke:#C9A63A"/>`;
 const cry=(x,y,a)=>`<path d="M${x},${y} l${7*Math.cos(a)},${7*Math.sin(a)}" style="stroke:#5BA7D8;stroke-width:2.4;stroke-linecap:round"/>`;
 [[190,128,.4],[205,160,1.2],[195,200,.9],[214,230,1.6],[150,298,2.2],[250,300,.8],[110,122,3],[290,124,.2],[270,168,.3]].forEach(([x,y,a])=>b+=cry(x,y,a));
 b+=T(160,56,"atheroma แตก",{a:"end",c:"s"})+T(160,70,"(มักหลังสวนหลอดเลือด)",{a:"end",c:"s m"});
 /* foot */
 b+=`<path d="M100,340 L120,380 C150,392 180,394 200,388 L196,372 L140,360 L134,340Z" style="fill:#F3D7C4;stroke:#B98C70"/>`+[176,186,194].map((x,k)=>`<circle cx="${x}" cy="${384-k}" r="5" style="fill:#5E6FB8;stroke:#3B4B8A"/>`).join("")+T(220,392,"blue toe",{a:"start",c:"s"});
 /* livedo patch */
 b+=`<rect x="300" y="300" width="90" height="70" rx="12" style="fill:#F3D7C4;stroke:#B98C70"/>`;
 for(let k=0;k<6;k++)b+=`<circle cx="${318+(k%3)*28}" cy="${322+Math.floor(k/3)*28}" r="12" style="fill:none;stroke:#8A5BA8;stroke-width:2;opacity:.8"/>`;
 b+=T(345,388,"livedo reticularis",{c:"s"});
 b=`<g transform="translate(-30,0) scale(.86)">${b}</g>`;
 /* slide: arteriole with clefts */
 b+=`<g transform="translate(-112,-14)">`+slide(430,24,320,220)+`<circle cx="590" cy="134" r="78" style="fill:${HE.cy};stroke:${HE.mem};stroke-width:1.5"/>`+`<circle cx="590" cy="134" r="46" style="fill:#F7E3EA;stroke:${HE.mem}"/>`;
 [[-14,-10,.5],[12,-16,-.3],[-4,8,.2],[18,10,-.6],[-22,14,.8]].forEach(([dx,dy,a])=>b+=`<ellipse cx="${590+dx}" cy="${134+dy}" rx="13" ry="3.2" transform="rotate(${a*57} ${590+dx} ${134+dy})" style="fill:#fff;stroke:#C9A9B8"/>`);
 for(let k=0;k<5;k++)b+=dot(560+k*14,176-(k%2)*6,3.4,HE.nu);
 b+=TD(590,232,"cholesterol clefts (ผลึกละลายไปตอนทำสไลด์)",{s:10.5})+`</g>`;
 b+=cardBox(318,224,320,116,"Cholesterol embolization",["ผลึก cholesterol อุด arteriole เล็ก + อักเสบ","AKI, ลำไส้ขาดเลือด, stroke, blue toe","ชีพจรยังคลำได้ (หลอดใหญ่ปกติ)"],CV.gold);
 return psvg(b,"0 0 640 346")}

/* ---------- 11. arteriolosclerosis ---------- */
function arD(){const m=ST.ar;let b=slide(20,14,360,320);const s0=b;b="";const cx=200,cy=174;
 if(m==="hyaline"){b+=`<circle cx="${cx}" cy="${cy}" r="112" style="fill:#F4C4D4;stroke:${HE.mem};stroke-width:1.6"/>`+`<circle cx="${cx}" cy="${cy}" r="102" style="fill:#F1B3C8"/>`;
  for(let k=0;k<9;k++){const a=k/9*6.28;b+=`<ellipse cx="${cx+92*Math.cos(a)}" cy="${cy+92*Math.sin(a)}" rx="7" ry="3" transform="rotate(${a*57+90} ${cx+92*Math.cos(a)} ${cy+92*Math.sin(a)})" style="fill:${HE.nu}"/>`}
  b+=`<circle cx="${cx}" cy="${cy}" r="30" style="fill:#FFF6F8;stroke:${HE.mem}"/>`+dot(cx-6,cy+4,5,HE.rbc)+dot(cx+8,cy-6,5,HE.rbc);}
 if(m==="hyper"){b+=`<circle cx="${cx}" cy="${cy}" r="120" style="fill:#F6CFDC;stroke:${HE.mem};stroke-width:1.6"/>`;
  for(let L=0;L<7;L++){const r=34+L*12;b+=`<circle cx="${cx}" cy="${cy}" r="${r}" style="fill:none;stroke:#E8A3BC;stroke-width:5"/>`;for(let k=0;k<10+L*2;k++){const a=k/(10+L*2)*6.28+L*.3;b+=`<ellipse cx="${cx+r*Math.cos(a)}" cy="${cy+r*Math.sin(a)}" rx="5.5" ry="1.8" transform="rotate(${a*57+90} ${cx+r*Math.cos(a)} ${cy+r*Math.sin(a)})" style="fill:${HE.nuD}"/>`}}
  b+=`<path d="M${cx-30},${cy-16} C${cx-10},${cy-30} ${cx+20},${cy-30} ${cx+30},${cy-12}" style="fill:none;stroke:#E2325C;stroke-width:6;opacity:.8"/>`;
  b+=`<circle cx="${cx}" cy="${cy}" r="14" style="fill:#FFF6F8;stroke:${HE.mem}"/>`;}
 if(m==="monck"){b+=`<circle cx="${cx}" cy="${cy}" r="124" style="fill:#F3E0C8;stroke:${HE.mem}"/>`+`<circle cx="${cx}" cy="${cy}" r="104" style="fill:#E8A3B8"/>`;
  const r=rng(4);for(let k=0;k<70;k++){const a=r()*6.28,rr=78+r()*20;b+=dot(cx+rr*Math.cos(a),cy+rr*Math.sin(a),2+r()*3.4,"#4B49A6")}
  b+=`<path d="M${cx-60},${cy-62} A88,88 0 0 1 ${cx+70},${cy-52}" style="fill:none;stroke:#4B49A6;stroke-width:9;opacity:.75"/>`;
  b+=`<circle cx="${cx}" cy="${cy}" r="68" style="fill:#FFF6F8;stroke:#F5E7A8;stroke-width:3"/>`;}
 b=`<g transform="translate(-12,0) scale(.84)">${s0}${b}</g>`;
 const C={hyaline:["Hyaline arteriolosclerosis","ผนังหนาเป็นเนื้อชมพูเรียบ (plasma protein รั่วเข้า + matrix ↑)",["ความดันสูงเรื้อรัง (benign) และเบาหวาน","ไต: benign nephrosclerosis ไตเล็กผิวขรุขระ","เบาหวาน: ทั้ง afferent และ efferent arteriole"]],
  hyper:["Hyperplastic arteriolosclerosis","onion-skin: SMC + basement membrane เรียงซ้อนเป็นวง",["Severe (malignant) hypertension","± fibrinoid necrosis = necrotizing arteriolitis","ไต: flea-bitten kidney (petechiae)"]],
  monck:["Mönckeberg medial sclerosis","calcium ใน media ของ muscular artery · lumen ไม่แคบ",["พบในคนอายุ > 50 · มักไม่มีอาการ","เห็นเป็นท่อขาวใน X-ray / mammogram","ทำให้ ankle–brachial index สูงเท็จ"]]}[m];
 b+=infoPanel(312,8,324,C[0],C[1],C[2],m==="hyper"?CV.bad:m==="monck"?CV.violet:"#C45C82");
 const y1=IPH+26;b+=T(312,y1,"Arteriosclerosis 3 แบบ",{a:"start",c:"bh"});
 [["Atherosclerosis","intima · หลอดใหญ่–กลาง"],["Arteriolosclerosis","arteriole"],["Mönckeberg","media · muscular a."]].forEach(([a,s],k)=>b+=`<rect x="312" y="${y1+10+k*34}" width="324" height="28" rx="9" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(324,y1+29+k*34,a,{a:"start",c:"bh"})+T(626,y1+29+k*34,s,{a:"end",c:"s m"}));
 return psvg(b,"0 0 640 "+Math.max(290,y1+116))}

/* ---------- 12. aortic aneurysm ---------- */
function aortaPath(){return "M260,250 C256,190 254,120 300,80 C350,40 420,60 430,120 L430,420"}
function anD(){const a=ST.an==="aaa";let b="",b0="";
 const tube=(d,c,w)=>`<path d="${d}" style="stroke:var(--a-edge);stroke-width:${w+3};fill:none;stroke-linecap:round"/><path d="${d}" style="stroke:${c};stroke-width:${w};fill:none;stroke-linecap:round"/>`;
 b+=tube("M300,84 L282,20",CV.ox,12)+tube("M334,60 L330,12",CV.ox,10)+tube("M372,58 L388,12",CV.ox,10);
 b+=tube(aortaPath(),CV.ox,30)+tube("M430,420 L398,500",CV.ox,18)+tube("M430,420 L462,500",CV.ox,18)+tube("M430,350 L380,352",CV.ox,9)+tube("M430,350 L480,352",CV.ox,9);
 b+=`<ellipse cx="366" cy="352" rx="12" ry="20" style="fill:#B6584E;stroke:var(--a-edge)"/><ellipse cx="494" cy="352" rx="12" ry="20" style="fill:#B6584E;stroke:var(--a-edge)"/>`+T(500,384,"renal a.",{a:"start",c:"s m"});
 if(a){b+=`<path d="M412,370 C380,380 384,400 412,412 L430,416 L448,412 C476,400 480,380 448,370Z" style="fill:${CV.ox};stroke:var(--a-edge);stroke-width:1.6"/>`;
  b+=`<path d="M414,378 C398,392 404,402 418,408" style="fill:none;stroke:#E9C8A8;stroke-width:6;opacity:.9"/>`+T(470,440,"AAA (infrarenal)",{a:"start",c:"bh"})+T(470,456,"mural thrombus",{a:"start",c:"s m"});}
 else{b+=`<path d="M236,240 C220,180 230,120 266,96 L300,82 C292,110 282,160 284,250Z" style="fill:${CV.ox};stroke:var(--a-edge);stroke-width:1.6"/>`+T(300,180,"TAA",{a:"start",c:"bh"})+T(300,196,"root / ascending",{a:"start",c:"s m"});}
 b+=T(260,276,"aortic valve",{c:"s m"});
 b=`<g transform="translate(-150,0)">${b}</g>`;
 /* histology inset */
 b+=`<g transform="translate(-130,0)">`+slide(530,30,230,160);
 if(!a){for(let k=0;k<7;k++){const y=50+k*20;let d=`M545,${y}`;for(let x=545;x<745;x+=12)d+=` Q${x+3},${y-4} ${x+6},${y} T${x+12},${y}`;b+=`<path d="${d}" style="fill:none;stroke:#3B2F7A;stroke-width:1.6;stroke-dasharray:${k%2?"30 14":"46 10"}"/>`}
  [[600,92,22,10],[680,132,26,11],[640,160,18,8]].forEach(([x,y,rx,ry])=>b+=`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" style="fill:#C9D3F2;stroke:#8E9CD6"/>`);
  b+=TD(645,208,"cystic medial degeneration",{w:700})+TD(645,222,"elastic fibers ขาด + pool ของ proteoglycan",{s:10});}
 else{const r=rng(17);for(let k=0;k<46;k++)b+=dot(545+r()*200,64+r()*110,3.2,HE.nuD);
  b+=`<rect x="545" y="44" width="200" height="16" style="fill:#F3DCA0;opacity:.7"/>`+TD(645,208,"transmural inflammation",{w:700})+TD(645,222,"lymphocyte/macrophage + MMP ย่อย ECM",{s:10});}
 b+=`</g>`;b+=infoPanel(400,240,236,a?"AAA":"TAA",null,a?["บุหรี่ = ปัจจัยเสี่ยงแรงสุด","ชาย สูงอายุ ประวัติครอบครัว","pulsatile mass · แตก: ปวด + ช็อก","ตำแหน่งใต้ renal artery"]:["HTN · bicuspid AV · Marfan","Loeys–Dietz, Ehlers–Danlos","3° syphilis: tree-bark aorta","aortic root dilation → AR"],a?CV.ox:CV.violet);
 return psvg(b,"0 0 640 506")}

/* ---------- 13. aortic dissection ---------- */
function dsD(){const t=ST.ds;let b="";
 const tube=(d,c,w)=>`<path d="${d}" style="stroke:var(--a-edge);stroke-width:${w+3};fill:none;stroke-linecap:round"/><path d="${d}" style="stroke:${c};stroke-width:${w};fill:none;stroke-linecap:round"/>`;
 b+=tube("M300,84 L282,20",CV.ox,12)+tube("M334,60 L330,12",CV.ox,10)+tube("M372,58 L388,12",CV.ox,10);
 b+=tube(aortaPath(),CV.ox,30);
 const FL="#7E1F2A";
 if(t==="A"){b+=`<path d="M266,236 C262,180 262,124 302,92 C346,58 410,68 420,120 L420,300" style="fill:none;stroke:${FL};stroke-width:10;stroke-linecap:round;opacity:.9"/>`;b+=tag(268,214,"tear","var(--sb-bad)",{w:44})}
 if(t==="B"){b+=`<path d="M422,128 L422,420" style="fill:none;stroke:${FL};stroke-width:10;stroke-linecap:round;opacity:.9"/>`;b+=tag(452,136,"tear","var(--sb-bad)",{w:44})}
 if(t==="tr"){b+=`<path d="M408,92 l14,8 l-6,6 l18,4" style="fill:none;stroke:var(--sb-bad);stroke-width:4"/>`+tag(470,96,"isthmus","var(--sb-bad)",{w:70})}
 b+=T(260,276,"aortic valve",{c:"s m"})+T(388,30,"L subclavian",{a:"start",c:"s m"});
 b=`<g transform="translate(-150,0)">${b}</g>`;
 /* cross-section */
 const cx=520,cy=110;b+=`<circle cx="${cx}" cy="${cy}" r="70" style="fill:${CV.ox};stroke:var(--a-edge);stroke-width:2"/>`;
 if(t!=="tr"){b+=`<path d="M${cx-70},${cy} A70,70 0 0 1 ${cx+50},${cy-49} C${cx+20},${cy-20} ${cx-20},${cy-6} ${cx-70},${cy}Z" style="fill:${FL}"/>`+`<path d="M${cx-70},${cy} C${cx-20},${cy-6} ${cx+20},${cy-20} ${cx+50},${cy-49}" style="fill:none;stroke:#F3DCA0;stroke-width:3"/>`;
  b+=T(cx,cy-40,"false lumen",{c:"w"})+T(cx,cy+30,"true lumen",{c:"w"})}else b+=T(cx,cy+4,"transection",{c:"w"});
 b+=T(cx,cy+90,"cross-section",{c:"s m"});
 const C={A:["Stanford A (proximal)","ascending aorta ± arch/descending",["เสี่ยง: AR เฉียบพลัน, tamponade, MI","รักษา: ผ่าตัดด่วน"]],B:["Stanford B (distal)","descending เท่านั้น (ใต้ L subclavian)",["ลด HR/BP: β-blocker แล้ว vasodilator","ผ่าตัดถ้ามี complication"]],tr:["Traumatic aortic rupture","deceleration: รถชน ตกที่สูง",["ตำแหน่ง isthmus ใต้ L subclavian","CXR: mediastinum กว้าง"]]}[t];
 b+=infoPanel(400,226,236,C[0],C[1],C[2],t==="tr"?CV.gold:CV.bad);
 return psvg(b,"0 0 640 440")}

/* ---------- 14. subclavian steal ---------- */
function ssD(){const ex=ST.ss==="ex";let b="";
 const tube=(d,c,w)=>`<path d="${d}" style="stroke:var(--a-edge);stroke-width:${w+3};fill:none;stroke-linecap:round"/><path d="${d}" style="stroke:${c};stroke-width:${w};fill:none;stroke-linecap:round"/>`;
 b+=tube("M150,176 C170,120 250,76 296,58",CV.ox,7)+tube("M500,196 C496,120 380,80 304,58",ex?CV.mx:CV.ox,7);
 b+=tube("M200,330 C190,262 230,226 320,226 C410,226 450,262 440,330",CV.ox,28);
 b+=tube("M252,232 L206,172",CV.ox,15)+tube("M206,172 L40,184",CV.ox,12)+tube("M206,172 L222,36",CV.ox,10);
 b+=tube("M322,222 L330,36",CV.ox,10)+tube("M392,230 L620,176",CV.ox,13);
 b+=`<circle cx="300" cy="54" r="12" style="fill:${CV.ox};stroke:var(--a-edge)"/>`;
 b+=`<path d="M414,214 C420,222 424,226 430,232 M420,244 C424,236 428,232 436,226" style="stroke:var(--a-musc);stroke-width:7;fill:none;stroke-linecap:round"/>`+tag(426,266,"stenosis","var(--sb-bad)",{w:72});
 b+=Ar(166,136,190,108,"#fff",2.4);
 b+=ex?Ar(400,96,488,160,"var(--sb-bad)",4,{cx:470,cy:102}):Ar(488,160,400,96,"#fff",2.4,{cx:470,cy:102});
 b+=T(300,30,"basilar",{c:"s m"})+T(222,24,"R carotid",{c:"s m"})+T(336,24,"L carotid",{a:"start",c:"s m"})+T(40,206,"R subclavian",{a:"start",c:"s m"})+T(140,140,"R vertebral",{a:"end",c:"s m"})+T(512,150,"L vertebral",{a:"start",c:"s m"})+T(632,160,"L subclavian → แขน",{a:"end",c:"s m"});
 if(ex)b+=T(486,94,"ไหลกลับทิศ",{a:"start",c:"bh"});
 b+=`<rect x="10" y="240" width="170" height="74" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+T(24,262,"SBP แขนขวา vs ซ้าย",{a:"start",c:"bh"})+`<text x="24" y="296" style="font:800 20px var(--sb-mono);fill:var(--sb-ink)">140 / 115</text>`;
 b+=`<rect x="462" y="240" width="170" height="74" rx="14" style="fill:color-mix(in srgb,${ex?"var(--sb-bad)":"var(--sb-accent)"} 10%,var(--sb-surface));stroke:color-mix(in srgb,${ex?"var(--sb-bad)":"var(--sb-accent)"} 45%,transparent)"/>`+T(476,262,ex?"ใช้แขนซ้าย":"พัก",{a:"start",c:"bh"})+wrapT(476,280,ex?"แขนขโมยเลือดจาก vertebrobasilar → เวียนหัว vertigo":"แขนซ้ายได้เลือดพอ ไม่มีอาการ",26,"s",14);
 return psvg(b,"0 0 640 330")}

/* ---------- extras ---------- */
function vwD(){return flowD([["Endothelial injury / dysfunction","HTN, shear stress, LDL, toxins, ภูมิคุ้มกัน","ar"],["Endothelial activation","adhesion molecules ↑ · permeability ↑ · thrombogenic",""],["SMC recruitment","SMC จาก media / progenitor อพยพเข้า intima (PDGF)","gl"],["Proliferation + ECM","collagen, proteoglycan สะสม",""],["Neointima","intima หนา → lumen แคบ (stereotyped healing)","vn"]])}
function bpD(){let b="";const box=(x,y,w,t,s,c)=>`<rect x="${x-w/2}" y="${y-22}" width="${w}" height="${s?48:36}" rx="12" style="fill:color-mix(in srgb,${c} 12%,var(--sb-surface));stroke:color-mix(in srgb,${c} 50%,transparent)"/>`+T(x,y,t,{c:"bh"})+(s?T(x,y+16,s,{c:"s m"}):"");
 b+=box(385,36,220,"Blood pressure","= cardiac output × TPR",CV.acc);
 b+=box(200,130,220,"Cardiac output","HR × stroke volume",CV.ox)+box(570,130,240,"Peripheral resistance","arteriolar tone",CV.dx);
 b+=Ln(330,60,220,106,CV.mut)+Ln(440,60,560,106,CV.mut);
 b+=box(110,232,200,"Blood volume","Na⁺ · RAAS · ANP",CV.ox)+box(310,232,180,"Heart","HR · contractility",CV.ox);
 b+=box(480,232,180,"Constrictors","Ang II · NE · endothelin",CV.dx)+box(670,232,180,"Dilators","NO · PGI₂ · kinins",CV.dx);
 b+=Ln(170,156,120,208,CV.mut)+Ln(230,156,300,208,CV.mut)+Ln(540,156,490,208,CV.mut)+Ln(610,156,660,208,CV.mut);
 b+=cardBox(20,290,730,80,"Essential hypertension = หลายยีน + สิ่งแวดล้อม",["ไตขับ Na⁺ ได้ไม่ดี → volume ↑ → autoregulation ทำให้ TPR ↑ · ยีนเดี่ยวที่ชัด เช่น Liddle syndrome, glucocorticoid-remediable aldosteronism"],CV.teal);
 return psvg(b,"0 0 770 380")}

/* ================= sections ================= */
SEC.push({id:"chd-rl",k:"a",t:"Right-to-left shunts: the 5 T's",mm:"R→L shunts (5 T's)",leg:[],tools:[["rl",[["tof","TOF"],["tga","D-TGA"],["truncus","Truncus"],["ta","Tricuspid atresia"],["tapvr","TAPVR"],["ebstein","Ebstein"]]]],draw:rlD,
notes:()=>`<div class="pearl">R→L shunt = <b>early cyanosis</b> (“blue babies”) · มักรู้ตั้งแต่ก่อนคลอดหรือทันทีหลังคลอด · ต้องผ่าตัดเร็วและ/หรือให้ <b>PGE</b> คง PDA ${S.fa}</div>
<ul><li>จำ 5 T's ตามตัวเลข: <b>Truncus</b> (1 vessel), <b>Transposition</b> (2 switched), <b>Tricuspid atresia</b> (3), <b>Tetralogy</b> (4), <b>TAPVR</b> (5 letters) ${S.fa}</li>
<li><b>Tetralogy of Fallot</b>: infundibular septum เคลื่อนไปทาง anterosuperior → PS + RVH + overriding aorta + VSD · PS เป็นตัวกำหนดว่าเลือดไหลทางไหน: ตีบมาก = R→L มาก ${S.r} · tet spell บรรเทาด้วยการนั่งยอง (SVR ↑ ดันเลือดกลับไปปอด) ${S.fa}</li>
<li>TOF ที่ไม่ได้แก้ อาจอยู่ถึงผู้ใหญ่ได้ถ้า PS ไม่รุนแรง (pink tetralogy) ${S.r}</li>
<li><b>D-TGA</b>: ventriculoarterial discordance · ถ้าไม่มี VSD ชีวิตขึ้นกับ PDA/foramen ovale · RV กลายเป็นห้องที่สูบเลือดไปทั้งตัว จึงหนาตัว ${S.r} · สัมพันธ์มารดาเป็นเบาหวาน ${S.fa}</li>
<li><b>Truncus</b>: เลือดผสมไปทั้งตัวและปอด → pulmonary flow สูงจน PVR ↑ ถาวร ${S.r}</li>
<li><b>Ebstein</b>: leaflet เลื่อนลง → TR, RA โต, accessory pathway · สัมพันธ์ lithium ${S.fa}</li></ul>`});

SEC.push({id:"chd-lr",k:"a",t:"Left-to-right shunts: VSD · ASD · PDA",mm:"L→R shunts",leg:[],tools:[["lr",[["vsd","VSD"],["asd","ASD"],["pda","PDA"]]]],draw:lrD,
notes:()=>`<div class="pearl">L→R shunt = <b>acyanotic</b> ตอนแรก · cyanosis มาทีหลัง (“later”) · ความถี่ <b>VSD > ASD > PDA</b> ${S.fa}</div>
<ul><li>หาจุดที่ O₂ saturation เพิ่มขึ้น (step-up) บอกตำแหน่งรั่ว: VSD → RV, ASD → RA, PDA → PA ${S.fa}</li>
<li><b>VSD</b>: พบบ่อยสุดใน CHD (~40%) · ส่วนใหญ่อยู่ที่ membranous septum · รูเล็กปิดเองได้บ่อย ${S.r}</li>
<li><b>ASD</b>: secundum พบบ่อยสุด (fossa ovalis) · primum สัมพันธ์ AV canal และ Down syndrome · sinus venosus อยู่ใกล้ SVC ${S.r} · ต่างจาก PFO ซึ่งเกิดจากการไม่ fuse ${S.fa}</li>
<li>Paradoxical embolism: venous clot ข้ามรูไปฝั่ง systemic เมื่อความดันขวาสูงชั่วคราว (เบ่ง ไอ ยกของ) ${S.fa}</li>
<li><b>PDA</b>: ductus ปกติปิดภายใน 1–2 วันหลังคลอด · ยาที่ยับยั้ง prostaglandin (indomethacin) ช่วยปิด · PGE₁ ใช้คงให้เปิดใน lesion ที่ต้องพึ่ง ductus ${S.r} · สัมพันธ์ congenital rubella ${S.fa}</li></ul>`});

SEC.push({id:"eisen",k:"a",t:"Eisenmenger syndrome",mm:"Eisenmenger",leg:[],ctrl:()=>sl("ey","VSD ที่ไม่ได้รักษา",0,30,1,"ปี"),wire:()=>wireSl(),draw:eisD,
notes:()=>`<div class="pearl">เลื่อน slider: shunt L→R นานๆ → หลอดเลือดปอด remodel → PVR และความดัน RV สูงจน <b>เกิน LV</b> → shunt กลับเป็น R→L ${S.fa}</div>
<ul><li>เกิดได้กับ VSD, ASD, PDA ที่ไม่ได้แก้ · เร็วหรือช้าขึ้นกับขนาด shunt ${S.fa}</li>
<li>ผนัง pulmonary arteriole หนา: medial hypertrophy → intimal proliferation → plexiform lesion · เมื่อถึงขั้นนี้ถือว่า <b>กลับคืนไม่ได้</b> จึงต้องแก้ shunt ก่อน ${S.r}</li>
<li>อาการ: late cyanosis, <b>clubbing</b>, <b>polycythemia</b> (ไตตอบสนองต่อ hypoxemia) · RVH ${S.fa}</li>
<li>ตัวเลขความดันและ PVR ในภาพเป็นค่าตัวอย่างเพื่อให้เห็นแนวโน้ม ${S.x}</li>
<li>PDA ที่กลับทิศ → เขียวเฉพาะ<b>ขา</b> เพราะเลือดดำเข้าที่ aorta หลังแขนงไปแขน (differential cyanosis) ${S.fa}</li></ul>`});

SEC.push({id:"coarct",k:"a",t:"Coarctation of the aorta & PPHN",mm:"Coarctation",leg:[],tools:[["co",[["post","Adult · postductal"],["pre","Infant · preductal"]]]],draw:coD,
notes:()=>`<ul><li>Aorta ตีบใกล้ตำแหน่ง ductus (juxtaductal) · สัมพันธ์ <b>bicuspid aortic valve</b> และ <b>Turner syndrome</b> ${S.fa}</li>
<li>แบบ <b>infantile/preductal</b>: ตีบก่อน ductus → เลือดไปลำตัวท่อนล่างผ่าน PDA (cyanosis ช่วงล่าง) · อาการเกิดเมื่อ ductus ปิด ${S.r}</li>
<li>แบบ <b>adult/postductal</b>: ความดันแขนสูง ขาเย็น ชีพจรขาเบาและช้า (<b>brachiofemoral delay</b>) · collateral ผ่าน internal thoracic → intercostal ทำให้ <b>rib notching</b> ${S.fa}</li>
<li>ภาวะแทรกซ้อน: HF, เลือดออกในสมอง (berry aneurysm), aortic rupture/dissection, infective endocarditis ${S.fa}</li></ul>
<h3>Persistent pulmonary hypertension of the newborn</h3><ul><li>PVR ไม่ลดหลังคลอด → R→L ผ่าน foramen ovale และ ductus · ปัจจัยเสี่ยง: สำลักขี้เทา (meconium), ปอดอักเสบ ${S.fa}</li>
<li>SpO₂ <b>preductal &gt; postductal</b> · ทารกหายใจเร็ว เขียว · ชีพจรแขนขาเท่ากัน (ต่างจาก coarctation) ${S.fa}</li></ul>`});

SEC.push({id:"chd-assoc",k:"a",t:"Congenital cardiac defect associations",mm:"Associations",leg:[],draw:assocD,
notes:()=>`<ul><li>CHD มีสาเหตุทางพันธุกรรมที่รู้ชัดเพียงส่วนน้อย · สาเหตุยีนที่พบบ่อยสุดคือ <b>trisomy 21</b> (~40% ของ Down มี defect มักเป็นที่ AV septum) ${S.r}</li>
<li><b>22q11.2 deletion</b> (DiGeorge): ยีน TBX1 คุม neural crest และ second heart field → conotruncal anomalies (truncus, TOF) ${S.r}</li>
<li>Marfan (fibrillin-1): MVP, aortic root dilation → AR, dissection ${S.fa}</li>
<li>Williams (elastin deletion): supravalvular AS ร่วมกับ hypercalcemia, หน้าตา elfin ${S.x}</li>
<li>มารดาเป็นเบาหวาน: TGA, truncus, tricuspid atresia, VSD · lithium → Ebstein · rubella → PDA, peripheral pulmonary stenosis ${S.fa}</li></ul>`});

SEC.push({id:"htn",k:"b",t:"Hypertension: definition & causes",mm:"Hypertension",leg:[],ctrl:()=>sl("sbp","SBP",90,230,1,"mmHg")+sl("dbp","DBP",50,140,1,"mmHg"),wire:()=>wireSl(),draw:htnD,
notes:()=>`<div class="pearl">นิยาม: SBP ≥ 130 และ/หรือ DBP ≥ 80 mmHg ต่อเนื่อง ${S.fa} · ยึดค่าที่สูงกว่าเป็นตัวกำหนดระดับ ${S.x}</div>
<ul><li>ปัจจัยเสี่ยง: อายุ, อ้วน, เบาหวาน, ไม่ออกกำลัง, กินเค็ม, ดื่มสุรา, สูบบุหรี่, ประวัติครอบครัว ${S.fa}</li>
<li><b>90% เป็น essential</b> · ที่เหลือส่วนใหญ่จากไต/หลอดเลือดไต: <b>fibromuscular dysplasia</b> (string of beads ในหญิงอายุน้อย) และ atherosclerotic renal artery stenosis (ผู้สูงอายุ), 1° hyperaldosteronism, OSA ${S.fa}</li>
<li>สงสัย secondary เมื่อ: อายุน้อยมาก, ดื้อยา 3 ตัว, K⁺ ต่ำเอง, creatinine ขึ้นหลังให้ ACEi, ความดันขึ้นเป็นพักๆ ${S.x}</li>
<li>ระยะยาวเพิ่มความเสี่ยง CAD, concentric LVH (ผ่าน angiotensin II และ endothelin), HF, AF, dissection/aneurysm, stroke, CKD, retinopathy ${S.fa}</li></ul>`});

SEC.push({id:"htn-organ",k:"b",t:"Hypertensive end-organ damage & emergency",mm:"Organ damage · emergency",leg:[],tools:[["ho",[["chronic","Chronic"],["emer","Emergency"]]]],draw:organD,
notes:()=>`<ul><li><b>Hypertensive urgency</b>: ≥ 180/≥ 120 แต่<b>ไม่มี</b>อวัยวะเสียหายเฉียบพลัน → ลดความดันด้วยยากินภายใน 24–48 ชม. ${S.fa}</li>
<li><b>Hypertensive emergency</b>: ความดันสูงมาก + อวัยวะเสียหายเฉียบพลัน (encephalopathy, stroke, retinal hemorrhage/papilledema, MI, HF, dissection, AKI, MAHA, eclampsia) ${S.fa}</li>
<li>วินิจฉัย emergency จาก<b>อวัยวะเสียหาย</b> ไม่ใช่ตัวเลข · ให้ยาทางหลอดเลือด (labetalol, nicardipine, nitroprusside) ลด MAP ไม่เกิน ~25% ในชั่วโมงแรกๆ เพื่อไม่ให้สมองและหัวใจขาดเลือด (ยกเว้น dissection ต้องลดเร็ว) ${S.fa}</li>
<li>พยาธิ: arteriole มี <b>fibrinoid necrosis</b> และ hyperplastic (onion-skin) arteriolosclerosis ${S.r}</li>
<li>Hypertensive heart disease: concentric LVH โดยไม่มีสาเหตุอื่น + ประวัติความดันสูง · ผนัง LV มักหนา > 2 cm ${S.r}</li></ul>`});

SEC.push({id:"lipid",k:"b",t:"Hyperlipidemia signs",mm:"Xanthomas · arcus",leg:[],draw:lipD,
notes:()=>`<ul><li><b>Xanthoma</b>: plaque/ก้อนของ histiocyte ที่อมไขมัน (foamy) ในผิวหนัง · ที่เปลือกตา = <b>xanthelasma</b> ${S.fa} · กลุ่ม foamy macrophage ใน dermis ${S.r}</li>
<li><b>Tendinous xanthoma</b>: Achilles และ extensor tendon ของนิ้ว · บ่งชี้ <b>familial hypercholesterolemia</b> (LDL receptor) ${S.fa}</li>
<li><b>Corneal arcus</b>: วงไขมันรอบ cornea · ปกติในผู้สูงอายุ (arcus senilis) · ถ้าพบในคนอายุน้อยให้นึกถึง cholesterol สูง ${S.fa}</li>
<li>Eruptive xanthoma (papule เหลืองขอบแดงที่ก้น/แขน) พบเมื่อ triglyceride สูงมาก ร่วมกับเสี่ยง pancreatitis ${S.x}</li></ul>`});

SEC.push({id:"athero",k:"c",t:"Atherosclerosis",mm:"Atherosclerosis",leg:[],tools:[["as",[["normal","Normal"],["dys","Dysfunction"],["streak","Fatty streak"],["fib","Fibrous plaque"],["comp","Complicated"]]]],draw:athD,
notes:()=>`<div class="pearl">โรคของ <b>intima</b> ใน elastic artery และ muscular artery ขนาดใหญ่–กลาง · <b>inflammation</b> เป็นหัวใจของการเกิดโรค ${S.fa}</div>
<ul><li>ลำดับ: endothelial dysfunction → LDL และ monocyte เข้า intima → <b>foam cell</b> → fatty streak → SMC อพยพ (<b>PDGF, FGF</b>) และสร้าง matrix → fibrous plaque → complex atheroma ± calcification ${S.fa}</li>
<li>Atheroma = <b>fibrous cap</b> (SMC + collagen) คลุม <b>necrotic core</b> (lipid, foam cell, cholesterol cleft, debris) ${S.r}</li>
<li>Plaque ที่อันตราย (vulnerable) ไม่จำเป็นต้องตีบมาก: cap บาง, core ใหญ่, อักเสบมาก → แตกแล้วเกิด thrombus ${S.r}</li>
<li>ปัจจัยเสี่ยงที่แก้ได้: HTN, บุหรี่, dyslipidemia (LDL ↑ HDL ↓), เบาหวาน · แก้ไม่ได้: อายุ, เพศชาย, วัยหมดประจำเดือน, ประวัติครอบครัว ${S.fa}</li>
<li>ตำแหน่ง: abdominal aorta > coronary > popliteal > carotid > circle of Willis (“a copy cat named Willis”) ${S.fa}</li>
<li>ผลที่ตามมา: ischemia, infarction, aneurysm, PAD, thrombosis, embolism, renovascular HTN, subclavian steal ${S.fa}</li></ul>`});

SEC.push({id:"chol-emb",k:"c",t:"Cholesterol emboli syndrome",mm:"Cholesterol emboli",leg:[],draw:ceD,
notes:()=>`<ul><li>Plaque ใน aorta แตก ปล่อยผลึก cholesterol ไปอุด artery เล็ก + กระตุ้นอักเสบ ${S.fa}</li>
<li>มักเกิด<b>หลังสวนหลอดเลือด</b> (angiography, angioplasty, endovascular graft) ${S.fa} · หรือหลังให้ anticoagulant/thrombolytic ${S.x}</li>
<li>อาการ: livedo reticularis, blue toe, AKI, ลำไส้ขาดเลือด, stroke · <b>ชีพจรส่วนปลายยังคลำได้</b> ${S.fa}</li>
<li>ใน biopsy เห็น<b>ช่องว่างรูปเข็มสองด้านนูน</b> (cholesterol cleft) ใน arteriole · อาจมี eosinophilia และ complement ต่ำ ${S.x}</li></ul>`});

SEC.push({id:"arteriolo",k:"c",t:"Arteriolosclerosis & medial calcific sclerosis",mm:"Arteriolosclerosis",leg:[],tools:[["ar",[["hyaline","Hyaline"],["hyper","Hyperplastic"],["monck","Mönckeberg"]]]],draw:arD,
notes:()=>`<ul><li>Arteriosclerosis = ผนังหลอดเลือดแข็งหนา แบ่งเป็น atherosclerosis, arteriolosclerosis และ Mönckeberg medial sclerosis ${S.r}</li>
<li><b>Hyaline</b>: plasma protein รั่วผ่าน endothelium + SMC สร้าง matrix มากขึ้น · พบใน HTN, เบาหวาน และในคนสูงอายุทั่วไป ${S.r}</li>
<li><b>Hyperplastic</b>: onion-skinning ใน severe hypertension · มักมี fibrinoid necrosis ร่วม ${S.fa}</li>
<li><b>Mönckeberg</b>: calcification ของ internal elastic lamina/media ใน muscular artery · ไม่ทำให้ lumen แคบ จึงมักไม่มีอาการ ${S.r}</li></ul>`});

SEC.push({id:"aneurysm",k:"d",t:"Aortic aneurysm",mm:"Aortic aneurysm",leg:[],tools:[["an",[["aaa","AAA"],["taa","TAA"]]]],draw:anD,
notes:()=>`<ul><li>Aneurysm = การขยายเฉพาะที่ของหลอดเลือด · <b>true</b> มีผนังครบ 3 ชั้น · <b>false</b> (pseudoaneurysm) เป็นก้อนเลือดนอกหลอดเลือดที่ติดต่อกับ lumen ${S.r}</li>
<li>กลไกร่วม: ผนังสร้าง collagen/elastin ไม่ดีหรือถูกย่อยมากเกินไป (MMP จาก macrophage) ${S.r}</li>
<li><b>TAA</b>: cystic medial degeneration · HTN, bicuspid AV, Marfan, Loeys–Dietz · syphilis ระยะ 3 (endarteritis ของ vasa vasorum) · root ขยาย → AR ${S.fa}</li>
<li><b>AAA</b>: transmural inflammation + ECM ถูกย่อย · ปัจจัยเสี่ยงหลัก <b>บุหรี่</b>, ชาย, อายุ, ครอบครัว · ส่วนใหญ่อยู่ <b>ใต้ renal artery</b> (vasa vasorum น้อย) ${S.fa}</li>
<li>ปวดท้องหรือหลังเป็นสัญญาณรั่ว แตก หรือใกล้แตก · triad ของการแตก: pulsatile mass + ปวด + ความดันต่ำที่แก้ไม่ขึ้น ${S.fa}</li>
<li>ความเสี่ยงแตกเพิ่มตามขนาด (≥ 5.5 cm พิจารณาผ่าตัด) ${S.h} · ผู้ชายอายุ 65–75 ที่เคยสูบบุหรี่ควรตรวจคัดกรองด้วย ultrasound ${S.x}</li></ul>`});

SEC.push({id:"dissection",k:"d",t:"Aortic dissection & traumatic rupture",mm:"Dissection",leg:[],tools:[["ds",[["A","Stanford A"],["B","Stanford B"],["tr","Trauma"]]]],draw:dsD,
notes:()=>`<ul><li>Intima ฉีกตามยาว เลือดเซาะใน media เกิด <b>false lumen</b> ${S.fa} · มักเกิดในหลอดเลือดที่ไม่ได้โป่งมาก่อน ${S.r}</li>
<li>ปัจจัยเสี่ยง: <b>HTN (สำคัญสุด)</b>, bicuspid AV, connective tissue disease (Marfan) ${S.fa} · ตั้งครรภ์และ cocaine ก็เพิ่มความเสี่ยง ${S.r}</li>
<li>อาการ: เจ็บหน้าอกฉีกขาดทันทีร้าวไปหลัง ± ความดันแขนสองข้างต่างกันมาก · CXR mediastinum กว้าง ${S.fa}</li>
<li><b>Type A</b> (ascending): ผ่าตัด · เสี่ยง AR เฉียบพลัน, tamponade, coronary ostium อุด · <b>Type B</b>: β-blocker แล้ว vasodilator ${S.fa}</li>
<li>เสียชีวิตส่วนใหญ่จากเลือดแตกเข้าช่องอก ช่องท้อง หรือ pericardium ${S.r}</li>
<li><b>Traumatic rupture</b>: deceleration injury · ฉีกที่ <b>isthmus</b> (descending aorta ต้นๆ ใต้ L subclavian) ${S.fa}</li></ul>`});

SEC.push({id:"subclavian",k:"d",t:"Subclavian steal syndrome",mm:"Subclavian steal",leg:[],tools:[["ss",[["rest","พัก"],["ex","ใช้แขนซ้าย"]]]],draw:ssD,
notes:()=>`<ul><li>Subclavian ตีบ<b>ก่อน</b>จุดแตกแขนงของ vertebral artery → เลือดในแขนนั้นไม่พอ → <b>vertebral artery ข้างเดียวกันไหลกลับทิศ</b> ไปเลี้ยงแขน ${S.fa}</li>
<li>อาการแย่ลงเมื่อใช้แขน: ปวด ชา เมื่อย และ vertebrobasilar insufficiency (เวียนหัว vertigo) ${S.fa}</li>
<li>SBP ระหว่างแขนต่างกัน &gt; 15 mmHg ${S.fa}</li>
<li>สาเหตุ: atherosclerosis (บ่อยสุด), Takayasu arteritis, ภาวะหลังผ่าตัดหัวใจ ${S.fa}</li></ul>`});

SEC.push({id:"vwall",k:"e",t:"Vascular wall response to injury",mm:"Wall response",leg:[],draw:vwD,
notes:()=>`<ul><li>Endothelium คุมการซึมผ่าน, tone, การแข็งตัวของเลือด และการอักเสบ · ภาวะ<b>endothelial dysfunction</b> คือการเปลี่ยนแปลงหน้าที่ (เช่น NO ↓, adhesion molecule ↑) ที่ยังไม่เห็นรูปร่างผิดปกติ ${S.r}</li>
<li>การบาดเจ็บทุกแบบ (กล, เคมี, ภูมิคุ้มกัน) ตอบสนองเหมือนกัน: SMC เข้า intima แบ่งตัว สร้าง matrix → <b>intimal thickening</b> ${S.r}</li>
<li>SMC ใน intima เป็น phenotype ที่แบ่งตัวและสร้าง ECM ได้ ต่างจาก SMC ที่หดตัวใน media ${S.r}</li>
<li>กระบวนการเดียวกันอธิบาย restenosis หลังใส่ stent และ transplant vasculopathy ${S.r}</li></ul>`});

SEC.push({id:"bp-reg",k:"e",t:"Blood pressure regulation & mechanisms of hypertension",mm:"BP regulation",leg:[],draw:bpD,
notes:()=>`<ul><li>BP = CO × peripheral resistance · CO ขึ้นกับ blood volume (Na⁺) และ HR/contractility · resistance ขึ้นกับ arteriole ${S.r}</li>
<li>ไตเป็นตัวหลักผ่าน RAAS และ pressure natriuresis · ANP/BNP ขับ Na⁺ และขยายหลอดเลือด ${S.r}</li>
<li>Essential HTN: ยีนหลายตัวร่วมกับเกลือ ความเครียด อ้วน · เชื่อว่าเริ่มจากไตขับ Na⁺ ได้น้อย → volume ↑ → TPR ↑ ${S.r}</li>
<li>ยีนเดี่ยว: <b>Liddle syndrome</b> (ENaC ทำงานมาก), glucocorticoid-remediable aldosteronism, enzyme defect ของ aldosterone ${S.r}</li></ul>`});

const EXTRA=["vwall","bp-reg"];

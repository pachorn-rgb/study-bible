/* Sections from the original robbins-ch20 atlas (all Harrison chapters for _renal-harrison). */

const tbl=(h,rows)=>`<table>${h?`<tr>${h.map(x=>`<th>${x}</th>`).join("")}</tr>`:""}${rows.map(r=>`<tr>${r.map(x=>`<td>${x}</td>`).join("")}</tr>`).join("")}</table>`;
/* stacked cards diagram: rows [[title, desc, tone]] */
function cards(R,o={}){const W=640,hh=o.h||(R.length>6?50:R.length>4?58:72),gap=o.gap||8;let b="",y=14;
 R.forEach(([n,dd,c])=>{b+=`<rect class="box ${c||""}" x="16" y="${y}" width="${W-32}" height="${hh}" rx="12"/>`+T(32,y+hh/2-3,n,{a:"start",c:"bh"})+T(32,y+hh/2+15,dd,{a:"start",c:"s"});y+=hh+gap});
 if(o.foot){b+=T(W/2,y+16,o.foot,{c:"h"});y+=26}return svg(b,`0 0 ${W} ${y+6}`)}
/* flow: steps left→right wrapping as boxes with arrows (vertical) */
function flow(R){let b="",y=14;R.forEach(([n,dd,c],i)=>{b+=`<rect class="box ${c||""}" x="80" y="${y}" width="480" height="56" rx="12"/>`+T(320,y+24,n,{c:"bh"})+T(320,y+43,dd,{c:"s"});
 if(i<R.length-1)b+=`<path class="arw" d="M320,${y+58} L320,${y+76}" marker-end="url(#ah)"/>`;y+=80});return svg(b,`0 0 640 ${y}`)}
/* horizontal bars [[label,value,display]] max */
function bars(R,max,o={}){let b="",y=16;R.forEach(([n,v,disp])=>{b+=T(16,y+14,n,{a:"start",c:"b"})+`<rect class="cbar on" x="16" y="${y+22}" width="${Math.max(4,v/max*560)}" height="20" rx="5"/>`+T(24+v/max*560,y+37,disp??v,{a:"start",c:"s"});y+=58});
 if(o.foot){b+=T(320,y+10,o.foot,{c:"s m"});y+=20}return svg(b,`0 0 640 ${y+4}`)}
function wrapT(x,y,s,n,c){const w=s.split(" ");const L=[];let cur="";w.forEach(t=>{if((cur+" "+t).trim().length>n&&cur){L.push(cur);cur=t}else cur=(cur+" "+t).trim()});if(cur)L.push(cur);
 return L.map((l,i)=>T(x,y+i*18,l,{a:"start",c})).join("")}
function cardsInline(y,R){return R.map(([a,b2],i)=>{const yy=y+i*34;return `<rect class="box" x="0" y="${yy}" width="640" height="30" rx="8"/>`+T(14,yy+20,a,{a:"start",c:"bh"})+T(626,yy+20,b2,{a:"end",c:"s"})}).join("")}

/* ================= Robbins Ch 20 · The Kidney ================= */
Object.assign(GN,{a:"Clinical manifestations",b:"Glomerular injury: mechanisms",c:"Nephritic syndrome",d:"Nephrotic syndrome",e:"Other glomerular & systemic",f:"Tubules & interstitium",g:"Blood vessels",h:"Congenital & cystic",i:"Obstruction & stones",j:"Tumors"});
const G=(id,k,t,D,notes)=>SEC.push({id,k,t,tools:GV,leg:[],draw:()=>gDraw(D),notes});

/* ---------- a · clinical ---------- */
SEC.push({id:"syndromes",k:"a",t:"Clinical manifestations & syndromes",leg:[],
draw(){let b="";const S5=[["Nephritic","hematuria (RBC casts) · azotemia · oliguria · HT · proteinuria ไม่มาก","ar"],["RPGN","nephritic + GFR ลดเร็วในวัน–สัปดาห์ · crescents","ar"],["Nephrotic","proteinuria >3.5 g/วัน · albumin ต่ำ · edema · lipid สูง · lipiduria","vn"],["Chronic kidney disease","azotemia ค่อยๆ แย่ลงเป็นเดือน–ปี","gl"],["Isolated hematuria / proteinuria","glomerular hematuria หรือ proteinuria <3.5 g/วัน","" ]];
 S5.forEach(([n,d,c],i)=>{const y=20+i*72;b+=`<rect class="box ${c}" x="20" y="${y}" width="600" height="62" rx="12"/>`+T(36,y+26,n,{a:"start",c:"bh"})+T(36,y+48,d,{a:"start",c:"s"})});
 b+=T(320,396,"Azotemia = BUN/creatinine สูง · Uremia = azotemia + อาการทางคลินิก/ชีวเคมี",{c:"h"});return svg(b,"0 0 640 410")},
notes:()=>`<h3>คำศัพท์</h3><ul><li><b>Azotemia</b>: BUN และ creatinine สูง จาก GFR ลด · <b>prerenal</b> (เลือดไปไตน้อย) · <b>postrenal</b> (อุดตันใต้ไต) ${S.r}</li>
 <li><b>Uremia</b>: azotemia + อาการ เช่น uremic gastroenteritis, peripheral neuropathy, fibrinous pericarditis ${S.r}</li></ul>
 <h3>Glomerular syndromes (Table 20.3)</h3><ul><li>Nephritic · RPGN · nephrotic · chronic kidney disease · isolated urinary abnormalities ${S.r}</li>
 <li><b>AKI</b>: GFR ลดเร็วภายในชั่วโมง–วัน มักมี oliguria · <b>CKD</b>: GFR &lt;60 นาน ≥3 เดือน หรือ albuminuria ต่อเนื่อง ${S.r}</li>
 <li>CKD พบ ~11% ของผู้ใหญ่ในสหรัฐ · สาเหตุหลักคือ <b>เบาหวานและความดันสูง</b> · end-stage = GFR &lt;5% ${S.r}</li>
 <li>อาการอื่น: UTI (pyelonephritis, cystitis) · nephrolithiasis (colic, hematuria) · urinary tract obstruction · tumors ${S.r}</li></ul>`});

/* ---------- b · mechanisms ---------- */
G("glomresp","b","Glomerular responses to injury",{em:{thick:true},if:"none",lm:{prolif:true,thick:true,scl:true},sum:[["Cells","hypercellularity: mesangial/endothelial proliferation · leukocytes · crescents"],["GBM","thickening: deposits · GBM synthesis (DM) · new BM (double contour)"],["Scar","hyalinosis (plasma protein insudation) · sclerosis (ECM สะสม)"]]},
()=>`<h3>4 รูปแบบตอบสนอง</h3><ul><li><b>Hypercellularity</b>: mesangial/endothelial proliferation · leukocyte infiltration · <b>crescents</b> (parietal epithelium + monocytes/macrophages ใน Bowman space กระตุ้นด้วย fibrin) ${S.r}</li>
 <li><b>BM thickening</b>: เห็นชัดด้วย PAS · EM เป็น 3 แบบ: deposits (subendo/subepi/intramembranous) · GBM ผลิตมากขึ้น (diabetic) · BM ใหม่ (double contour) ${S.r}</li>
 <li><b>Hyalinosis</b>: plasma protein ซึมเข้าผนัง → อุดหลอดเลือด · มักเกิดใน FSGS ${S.r}</li><li><b>Sclerosis</b>: ECM สะสมใน mesangium/capillary ${S.r}</li></ul>
 <h3>คำบอกการกระจาย</h3><ul><li><b>Diffuse</b> ≥50% ของ glomeruli · <b>focal</b> &lt;50% · <b>global</b> ทั้ง glomerulus · <b>segmental</b> บางส่วน · <b>mesangial</b> เฉพาะ mesangium ${S.r}</li></ul>
 <div class="pearl">สลับ EM / IF / LM ด้านบนเพื่อดูแต่ละมุม · ทุกโรค glomerulus ในบทนี้ใช้ปุ่มเดียวกัน</div>`);
SEC.push({id:"immune",k:"b",t:"Pathogenesis: immune complexes & anti-GBM",tools:[...GV.map(g=>[g[0],g[1].filter(v=>v[0]!=="lm")]),["dep",[["insitu","In situ (planted)"],["circ","Circulating IC"],["agbm","Anti-GBM"]]]],leg:[],
draw(){const d=ST.dep||"insitu";const D={insitu:{em:{sub_ep:"spikes",eff:true},if:"granular"},circ:{em:{sub_en:true,mes:true},if:"granular"},agbm:{em:{},if:"linear"}}[d];
 return svg((ST.gv==="if"?glomIF(D.if):glomEM(D.em))+(d==="agbm"&&ST.gv!=="if"?T(400,140,"EM: ไม่มี electron-dense deposits",{c:"bad"}):"")+`<rect class="gsum" x="0" y="420" width="640" height="64"/>`+T(14,446,{insitu:"Ab จับ antigen ที่อยู่ใน glomerulus (PLA2R) หรือที่ฝังไว้ → subepithelial",circ:"IC จากเลือดตกค้าง → subendothelial/mesangial · เรียกเซลล์อักเสบได้มาก",agbm:"Ab ต่อ α3 chain ของ type IV collagen (NC1) → linear IgG"}[d],{a:"start",c:"s"})+T(14,470,{insitu:"ตัวอย่าง: membranous nephropathy",circ:"ตัวอย่าง: lupus, postinfectious, MPGN",agbm:"ตัวอย่าง: anti-GBM disease, Goodpasture (+ปอด)"}[d],{a:"start",c:"bh"}),"0 0 640 490")},
notes:()=>`<h3>Antibody-mediated (Table 20.4)</h3><ul><li><b>In situ</b>: antigen ปกติ (anti-GBM = α3 NC1 ของ type IV collagen; <b>PLA2R</b> บน podocyte ใน membranous) หรือ planted antigen (DNA, bacteria, drugs, IgA) ${S.r}</li>
 <li><b>Circulating immune complex</b> (type III hypersensitivity): endogenous (DNA ใน SLE, tumor antigen) หรือ exogenous (infection: strep, HBV, HCV, syphilis, malaria) ${S.r}</li>
 <li>ตำแหน่งของ deposit กำหนดการอักเสบ: subendothelial/mesangial ใกล้เลือด → อักเสบมาก · subepithelial แยกจากเลือดด้วย GBM → อักเสบน้อย proteinuria เด่น ${S.r}</li></ul>
 <h3>ตัวกลางความเสียหาย</h3><ul><li>Complement (C5b–C9 → podocyte บาดเจ็บ), neutrophil/monocyte, platelets, fibrin (crescent), cytokines ${S.r}</li>
 <li>Cell-mediated immunity และ <b>alternative complement pathway</b> (C3 glomerulopathy) ${S.r}</li></ul>`});
SEC.push({id:"progression",k:"b",t:"Podocyte injury & progression",tools:GV,leg:[],
draw:()=>gDraw({em:{eff:true},if:"none",lm:{scl:true},sum:[["Podocyte","effacement · vacuolization · detachment → proteinuria"],["Progress","hyperfiltration → FSGS แบบ secondary → glomerulosclerosis"],["Tubules","tubulointerstitial fibrosis สัมพันธ์กับการเสื่อมของ GFR"]]}),
notes:()=>`<h3>Podocyte injury</h3><ul><li>Effacement ของ foot processes, vacuolization, retraction/detachment · slit diaphragm เสีย (nephrin, podocin mutations) → proteinuria ${S.r}</li>
 <li>สาเหตุ: antibodies, toxins, cytokines, ยีน, viral infections ${S.r}</li></ul>
 <h3>Progression</h3><ul><li>เมื่อ GFR ลดเหลือ ~30–50% → ESRD ตามมาเองจาก <b>FSGS (adaptive)</b>: nephron ที่เหลือ hypertrophy + glomerular hypertension → podocyte เสีย → sclerosis ${S.r}</li>
 <li><b>Tubulointerstitial fibrosis</b> ทำนายการเสื่อมของไตได้ดีกว่าความรุนแรงที่ glomerulus · proteinuria ทำร้าย tubule โดยตรง ${S.r}</li>
 <li>ACEi/ARB ลด glomerular pressure → ชะลอได้ ${S.r}</li></ul>`});

/* ---------- c · nephritic ---------- */
G("psgn","c","Acute postinfectious GN",{em:{sub_ep:"humps",neut:true},if:"granular",lm:{prolif:true,neut:true},sum:[["LM","diffuse endocapillary proliferation + neutrophils"],["IF","granular IgG, C3 (GBM + mesangium)"],["EM","subepithelial humps"]]},
()=>`<h3>Poststreptococcal GN</h3><ul><li>เด็ก 6–10 ปี · 1–4 สัปดาห์หลัง group A strep (pharyngitis/skin) ด้วย nephritogenic strains ${S.r}</li>
 <li>Antigen: <b>SpeB</b> (streptococcal pyrogenic exotoxin B) · serum <b>C3 ต่ำ</b> · ASO สูง ${S.r}</li>
 <li>อาการ: malaise, fever, nausea, <b>oliguria</b>, hematuria (สีโค้ก) · periorbital edema · HT ปานกลาง ${S.r}</li>
 <li>เด็ก &gt;95% หายเอง · ผู้ใหญ่ 15–50% กลายเป็น ESRD ภายในไม่กี่ปี ${S.r}</li></ul>
 <h3>Infection-associated GN</h3><ul><li>Staphylococcus (มักเป็น IgA-dominant), endocarditis, HBV, HCV ${S.r}</li></ul>`);
G("rpgn","c","Crescentic GN (RPGN)",{em:{neut:true},if:"linear",lm:{cres:true,prolif:true},sum:[["Type I","anti-GBM: linear IgG + C3 · Goodpasture"],["Type II","immune complex: granular (lupus, PSGN, IgA, HSP)"],["Type III","pauci-immune: ANCA (GPA = PR3, MPA = MPO)"]]},
()=>`<h3>นิยาม</h3><ul><li>Nephritic + GFR ลดเร็ว · LM มี <b>crescents</b> ในกลุ่มใหญ่ของ glomeruli ${S.r}</li><li>Crescent: parietal cells + monocyte/macrophage, กระตุ้นด้วย fibrin ใน Bowman space · ระยะหลังเป็น fibrous ${S.r}</li></ul>
 <h3>3 แบบ (Table 20.6)</h3>${tbl(["Type","IF","ตัวอย่าง"],[["I · Anti-GBM","Linear IgG","Renal-limited, Goodpasture (ปอดเลือดออก) · HLA-DRB1"],["II · Immune complex","Granular","Postinfectious, lupus, HSP, IgA"],["III · Pauci-immune","น้อย/ไม่มี","ANCA: GPA (PR3), MPA (MPO) · idiopathic >90% มี ANCA"]])}
 <ul><li>Anti-GBM: plasmapheresis + immunosuppression · ANCA-associated ตอบสนองต่อ immunosuppression ${S.r}</li></ul>
 <div class="pearl">ปุ่ม IF แสดง linear pattern ของ type I · type II จะเป็น granular แบบ PSGN/lupus</div>`);
G("iga","c","IgA nephropathy & HSP",{em:{mes:true},if:"mesangial",lm:{prolif:true},sum:[["LM","mesangial proliferation (หรือปกติ) · บางรายมี crescent"],["IF","mesangial IgA ± C3"],["EM","mesangial deposits"]]},
()=>`<h3>IgA nephropathy (Berger)</h3><ul><li>GN ที่พบบ่อยที่สุดในโลก · เด็กโต/หนุ่มสาว ${S.r}</li>
 <li>Gross hematuria ภายใน 1–2 วันหลัง URI/GI infection (synpharyngitic) · เป็นซ้ำ ${S.r}</li>
 <li>กลไก: IgA1 ที่ขาด galactose (galactose-deficient) → autoantibody → IC ตกใน mesangium ${S.r}</li>
 <li>~25–50% ค่อยๆ เป็น CKD ใน 20 ปี ${S.r}</li></ul>
 <h3>Henoch–Schönlein purpura (IgA vasculitis)</h3><ul><li>เด็ก 3–8 ปี · purpura ที่ก้น/ขา · ปวดท้อง/GI bleed · arthralgia · ไต: mesangial IgA เหมือน IgA nephropathy ${S.r}</li></ul>`);
G("alport","c","Hereditary nephritis (Alport) & thin BM",{em:{split:true},if:"none",lm:{normal:false},sum:[["Alport","X-linked COL4A5 (~85%) · GBM split/basket-weave · หูหนวก ตา"],["Thin BM","COL4A3/A4 heterozygous · benign familial hematuria"]]},
()=>`<h3>Alport syndrome</h3><ul><li>Hematuria → proteinuria → ESRD · <b>sensorineural deafness</b> · ตา: anterior lenticonus, lens dislocation, cataract, corneal dystrophy ${S.r}</li>
 <li>~85% <b>X-linked</b> (COL4A5) · ชายเป็น ESRD 20–50 ปี · ที่เหลือ autosomal (COL4A3/COL4A4) ${S.r}</li>
 <li>EM: GBM บางหนาสลับ แตกเป็นชั้น (<b>basket-weave</b>) ${S.r}</li></ul>
 <h3>Thin basement membrane nephropathy</h3><ul><li>พบบ่อย (5% ของประชากร) · asymptomatic hematuria · GBM บาง 150–250 nm · heterozygous COL4A3/A4 · ไตทำงานปกติ ${S.r}</li></ul>`);

/* ---------- d · nephrotic ---------- */
SEC.push({id:"nephrotic",k:"d",t:"Nephrotic syndrome: causes",leg:[],
draw(){let b="";const R=[["Minimal change",75,8],["FSGS",10,35],["Membranous",3,30],["MPGN / DDD",10,10],["Other proliferative",2,17]];
 b+=T(170,30,"เด็ก (%)",{c:"bh"})+T(470,30,"ผู้ใหญ่ (%)",{c:"bh"});
 R.forEach(([n,c,a],i)=>{const y=50+i*56;b+=T(320,y+20,n,{c:"b"})+`<rect class="cbar on" x="${300-c*3.4}" y="${y+28}" width="${c*3.4}" height="20" rx="5"/><rect class="cbar on" x="340" y="${y+28}" width="${a*3.4}" height="20" rx="5" style="opacity:.6"/>`+T(296-c*3.4,y+43,c,{a:"end",c:"s"})+T(344+a*3.4,y+43,a,{a:"start",c:"s"})});
 b+=T(320,350,"Table 20.7 · primary glomerular disease (ค่าประมาณ)",{c:"s m"})+T(320,374,"Systemic: diabetes · amyloidosis · SLE · drugs · infection · malignancy",{c:"h"});return svg(b,"0 0 640 390")},
notes:()=>`<h3>นิยาม</h3><ul><li>Proteinuria &gt;3.5 g/วัน · hypoalbuminemia &lt;3 g/dL · generalized edema · hyperlipidemia + lipiduria (oval fat bodies) ${S.r}</li>
 <li>เสี่ยงติดเชื้อ (สูญเสีย Ig), thrombosis (สูญเสีย antithrombin III → renal vein thrombosis) ${S.r}</li></ul>
 <h3>สาเหตุ</h3><ul><li>เด็ก: <b>minimal change</b> ~75% · ผู้ใหญ่: <b>FSGS</b> และ <b>membranous</b> ใกล้เคียงกัน ${S.r}</li>
 <li>Systemic ที่พบบ่อย: <b>เบาหวาน, amyloidosis, SLE</b> ${S.r}</li></ul>`});
G("membranous","d","Membranous nephropathy",{em:{sub_ep:"spikes",eff:true},if:"granular",lm:{thick:true},sum:[["LM","capillary walls หนา (diffuse) · silver: spikes"],["IF","granular IgG (IgG4) + C3 ตาม GBM"],["EM","subepithelial deposits · spike & dome · effacement"]]},
()=>`<h3>กลไก</h3><ul><li><b>Primary (~75%)</b>: autoantibody ต่อ podocyte antigen — <b>PLA2R</b> (70–80%), THSD7A ${S.r}</li>
 <li><b>Secondary</b>: infections (HBV, HCV, syphilis, malaria), malignant tumors (lung, colon, melanoma), SLE, drugs (NSAIDs, penicillamine, gold) ${S.r}</li>
 <li>Complement C5b–C9 ทำร้าย podocyte · deposits ไม่สัมผัสเลือด จึงไม่ค่อยอักเสบ ${S.r}</li></ul>
 <h3>Clinical</h3><ul><li>ผู้ใหญ่ 30–60 ปี · nephrotic ค่อยๆ เป็น · proteinuria แบบ nonselective · ไม่ค่อยตอบ steroid ${S.r}</li>
 <li>~1/3 หายเอง, 1/3 คงที่, 1/3 แย่ลง · เสี่ยง <b>renal vein thrombosis</b> ${S.r}</li></ul>`);
G("mcd","d","Minimal change disease",{em:{eff:true},if:"none",lm:{},sum:[["LM","ปกติ · PCT มี lipid (lipoid nephrosis)"],["IF","ไม่มี deposits"],["EM","diffuse effacement of foot processes"]]},
()=>`<h3>ลักษณะ</h3><ul><li>สาเหตุ nephrotic ที่พบบ่อยที่สุดใน<b>เด็ก</b> (อายุ 1–7 ปี) ${S.r}</li>
 <li>Selective proteinuria (albumin เป็นหลัก) · ไม่มี HT, ไม่มี hematuria เด่น · ไตทำงานปกติ ${S.r}</li>
 <li>กลไกสงสัยจาก T-cell cytokine/podocyte factor (หรือ anti-nephrin antibody) · สัมพันธ์กับ URI, vaccination, atopy, <b>Hodgkin lymphoma</b>, NSAIDs ${S.r}</li></ul>
 <h3>Prognosis</h3><ul><li>เด็ก &gt;90% ตอบสนองต่อ corticosteroids · อาจกลับเป็นซ้ำ (steroid-dependent) · พยากรณ์ดีมาก ${S.r}</li></ul>`);
G("fsgs","d","Focal segmental glomerulosclerosis",{em:{eff:true},if:"none",lm:{scl:true},sum:[["LM","บาง glomeruli · บางส่วน: sclerosis + hyalinosis"],["IF","IgM, C3 เฉพาะที่ sclerosis (nonspecific)"],["EM","effacement + podocyte detachment"]]},
()=>`<h3>รูปแบบ</h3><ul><li><b>Primary</b> (idiopathic) · <b>secondary</b>: HIV, heroin, sickle cell, obesity, nephron loss (reflux, unilateral agenesis, ปลายทางของ GN) · <b>genetic</b>: NPHS1 (nephrin), NPHS2 (podocin), TRPC6, ACTN4 ${S.r}</li>
 <li><b>APOL1</b> variants (chr 22) เพิ่มความเสี่ยงในคนเชื้อสายแอฟริกา ${S.r}</li></ul>
 <h3>Clinical</h3><ul><li>สาเหตุ nephrotic ที่พบบ่อยในผู้ใหญ่ · hematuria และ HT มากกว่า MCD · proteinuria nonselective ${S.r}</li>
 <li>ตอบ steroid ไม่ดี · ~50% ESRD ใน 10 ปี · กลับเป็นใน graft ได้ 25–50% ${S.r}</li></ul>
 <h3>Collapsing glomerulopathy</h3><ul><li>Tuft ยุบ + podocyte hyperplasia · พยากรณ์แย่ · พบใน <b>HIV-associated nephropathy</b> (+ tubular microcysts) ${S.r}</li></ul>`);
G("mpgn","d","MPGN & C3 glomerulopathy",{em:{sub_en:true,dbl:true},if:"granular",lm:{prolif:true,thick:true},sum:[["LM","lobular, mesangial proliferation · capillary wall หนา (tram-track)"],["IF","MPGN: IgG + C3 · C3G: C3 อย่างเดียว"],["EM","subendothelial deposits · DDD: intramembranous ribbon"]]},
()=>`<h3>MPGN (immune complex)</h3><ul><li>Mesangial cells แทรก (interposition) + BM ใหม่ → <b>double contour/tram-track</b> ใน silver/PAS ${S.r}</li>
 <li>สาเหตุ secondary: chronic infections (<b>HCV</b> ± cryoglobulin, HBV, endocarditis), autoimmune (SLE), malignancy (CLL, lymphoma) ${S.r}</li>
 <li>Nephrotic + nephritic ผสม · 50% ESRD ใน 10 ปี ${S.r}</li></ul>
 <h3>C3 glomerulopathy</h3><ul><li>Alternative complement pathway ผิดปกติ · <b>C3NeF</b> stabilize C3 convertase · C3 ต่ำ ${S.r}</li>
 <li><b>Dense deposit disease</b>: deposits หนาแน่นเป็นริบบิ้นใน lamina densa · <b>C3 GN</b>: deposits ไม่หนาแน่นขนาดนั้น ${S.r}</li></ul>`);

/* ---------- e · other / systemic ---------- */
SEC.push({id:"lupus",k:"e",t:"Lupus nephritis",tools:[...GV,["lc",[["2","II"],["3","III"],["4","IV"],["5","V"],["6","VI"]]]],leg:[],
draw(){const c=ST.lc||"4";const D={"2":{em:{mes:true},if:"mesangial",lm:{prolif:false}},"3":{em:{sub_en:true,mes:true},if:"fullhouse",lm:{prolif:true}},"4":{em:{sub_en:true,mes:true},if:"fullhouse",lm:{prolif:true,wire:true}},"5":{em:{sub_ep:"spikes",eff:true},if:"granular",lm:{thick:true}},"6":{em:{thick:true},if:"none",lm:{scl:true}}}[c];
 const txt={"2":"Mesangial proliferative · deposits ใน mesangium","3":"Focal (<50%) proliferative · subendothelial","4":"Diffuse (≥50%) proliferative · wire loops · พบบ่อยและรุนแรงที่สุด","5":"Membranous · subepithelial → nephrotic","6":"Advanced sclerosing (>90% sclerosed)"}[c];
 const b=(ST.gv==="if"?glomIF(D.if):ST.gv==="lm"?glomLM(D.lm):glomEM(D.em))+`<rect class="gsum" x="0" y="420" width="640" height="44"/>`+T(14,447,`Class ${c==="2"?"II":c==="3"?"III":c==="4"?"IV":c==="5"?"V":"VI"} · ${txt}`,{a:"start",c:"bh"});
 return svg(b,"0 0 640 466")},
notes:()=>`<h3>ISN/RPS classes</h3>${tbl(["Class","ลักษณะ"],[["I","Minimal mesangial: deposits แต่ LM ปกติ"],["II","Mesangial proliferative"],["III","Focal (&lt;50%) · subendothelial deposits"],["IV","Diffuse (≥50%) · <b>wire loops</b> · พบบ่อยและรุนแรงที่สุด"],["V","Membranous · nephrotic"],["VI","Advanced sclerosing &gt;90%"]])}
 <ul><li>เกิดใน 50–70% ของ SLE · immune complex (DNA–anti-DNA) · IF ‘full house’ · C3/C4 ต่ำ ${S.r}</li><li>มี tubulointerstitial และ vascular lesions ร่วมได้ ${S.r}</li></ul>
 <div class="pearl">เลือก class ด้านบน แล้วสลับ EM/IF/LM</div>`});
G("diabetic","e","Diabetic nephropathy",{em:{thick:true,nod:true},if:"none",lm:{nod:true,thick:true},sum:[["LM","mesangial expansion · nodular glomerulosclerosis (KW) · hyaline arteriolosclerosis"],["IF","linear IgG/albumin ‘sticking’ (nonimmune)"],["EM","GBM หนาทั่วไป (สิ่งแรกที่เห็น)"]]},
()=>`<h3>Lesions</h3><ul><li><b>GBM thickening</b> ทั่วไป · <b>diffuse mesangial sclerosis</b> · <b>nodular (Kimmelstiel–Wilson)</b> PAS+ ${S.r}</li>
 <li><b>Hyaline arteriolosclerosis</b> ทั้ง afferent และ efferent · pyelonephritis และ <b>papillary necrosis</b> พบบ่อย ${S.r}</li>
 <li>กลไก: AGEs, hyperfiltration (efferent constriction), TGF-β ${S.r}</li></ul>
 <h3>Clinical</h3><ul><li>Microalbuminuria → overt proteinuria → nephrotic → ESRD · สาเหตุ ESRD อันดับ 1 ${S.r}</li></ul>`);
SEC.push({id:"systemic",k:"e",t:"Other systemic glomerular disease",tools:[...GV.map(g=>[g[0],g[1].filter(v=>v[0]!=="if")]),["sys",[["amy","Amyloidosis"],["fib","Fibrillary GN"],["hsp","Endocarditis-associated"]]]],leg:[],
draw(){const s=ST.sys||"amy";const D={amy:{em:{fib:true,eff:true},lm:{nod:true}},fib:{em:{fib:true,mes:true},lm:{prolif:true}},hsp:{em:{sub_en:true,mes:true},lm:{prolif:true,neut:true}}}[s];
 return svg((ST.gv==="lm"?glomLM(D.lm):glomEM(D.em))+`<rect class="gsum" x="0" y="420" width="640" height="44"/>`+T(14,447,{amy:"Amyloid: fibrils 7.5–10 nm · Congo red apple-green birefringence",fib:"Fibrillary GN: fibrils 15–25 nm · DNAJB9",hsp:"Endocarditis: immune complex focal proliferative GN"}[s],{a:"start",c:"bh"}),"0 0 640 466")},
notes:()=>`<ul><li><b>Amyloidosis</b> (AL หรือ AA): deposits ใน mesangium/GBM → nephrotic · ไตมักโตหรือขนาดปกติ ${S.r}</li>
 <li><b>Fibrillary GN</b>: fibrils ใหญ่กว่า amyloid, Congo red ลบ · nephrotic + hematuria ${S.r}</li>
 <li><b>Bacterial endocarditis</b>: IC focal/diffuse proliferative GN ${S.r}</li>
 <li><b>Monoclonal gammopathy</b>: light-chain deposition, cryoglobulinemia (HCV) ${S.r}</li><li>Table 20.10: tumor ทำให้เกิด membranous (carcinoma), MCD (Hodgkin), MPGN (leukemia/lymphoma) ${S.r}</li></ul>`});

/* ---------- f · tubules & interstitium ---------- */
SEC.push({id:"atn",k:"f",t:"Acute tubular injury / necrosis",tools:[["atn",[["isch","Ischemic"],["tox","Nephrotoxic"]]]],leg:[],
draw(){const isc=(ST.atn||"isch")==="isch";let b="";
 b+=`<path class="tube big" d="M80,60 C140,60 170,80 180,120 L180,360 C180,430 280,430 280,360 L280,120 C280,80 340,60 420,70 L560,70 L560,400"/>`;
 const hit=isc?[[180,240],[200,420],[280,250],[440,72]]:[[120,62],[180,140],[180,200]];
 hit.forEach(([x,y])=>b+=`<circle class="dsite" cx="${x}" cy="${y}" r="12"/>`);
 b+=T(100,40,"PCT",{c:"s"})+T(150,300,"straight PCT",{a:"end",c:"s"})+T(310,300,"TAL",{a:"start",c:"s"})+T(560,50,"CD",{c:"s"});
 b+=B(330,140,290,150,isc?"Ischemic":"Nephrotoxic",isc?["focal, patchy ตลอด nephron","เด่นที่ straight PCT และ TAL","BM แตก (tubulorrhexis)"]:["ต่อเนื่องเป็นแถบยาวใน PCT","BM มักไม่เสีย","สาเหตุ: aminoglycoside, contrast, Hg, myoglobin"],"ar");
 b+=B(330,310,290,90,"Casts",["Tamm-Horsfall + granular (muddy brown)"],"vn");return svg(b,"0 0 640 440")},
notes:()=>`<h3>สาเหตุ AKI ที่พบบ่อยที่สุด</h3><ul><li><b>Ischemic</b>: shock, hemorrhage, sepsis, burns, DIC ${S.r}</li><li><b>Nephrotoxic</b>: aminoglycosides, radiographic contrast, heavy metals (Hg), ethylene glycol (oxalate crystals), myoglobin/hemoglobin, chemotherapy ${S.r}</li></ul>
 <h3>Pathogenesis</h3><ul><li>Tubular cell บาดเจ็บ (O₂ demand สูง, toxin มาเข้มข้น) → cell polarity เสีย (Na⁺/K⁺-ATPase ย้ายไป apical) → NaCl ถึง macula densa มาก → TGF → vasoconstriction ${S.r}</li>
 <li>เศษเซลล์อุด lumen → ความดันใน tubule ↑ → GFR ↓ · filtrate รั่วกลับ (backleak) ${S.r}</li></ul>
 <h3>Clinical course</h3><ul><li><b>Initiation</b> (~36 ชม.) → <b>maintenance</b> (oliguria, K⁺ สูง, acidosis, คั่งน้ำ) → <b>recovery</b> (polyuria, เสีย K⁺) ${S.r}</li><li>Nonoliguric ATN พบบ่อยกับ nephrotoxin ${S.r}</li></ul>`});
SEC.push({id:"pyelo",k:"f",t:"Pyelonephritis & UTI",tools:[["py",[["acute","Acute"],["chronic","Chronic / reflux"]]]],leg:[],
draw(){const a=(ST.py||"acute")==="acute";let b="";
 b+=`<path class="kid" d="M320,40 C440,40 520,120 520,230 C520,340 440,410 320,410 C270,410 250,360 270,320 C285,290 285,170 270,140 C250,100 270,40 320,40Z"/>`;
 if(a){for(let i=0;i<14;i++){const x=340+Math.cos(i)*120*Math.random(),y=120+i*18;b+=`<circle class="abs" cx="${380+((i*37)%110)}" cy="${y}" r="7"/>`}b+=T(14,150,"Abscesses ที่ผิวไต",{a:"start",c:"s"})+T(14,180,"Neutrophils ใน tubule + interstitium",{a:"start",c:"s"})+T(14,210,"WBC casts",{a:"start",c:"s"})}
 else{b+=`<path class="scar" d="M430,60 C470,90 470,120 450,140 L410,120Z"/><path class="scar" d="M460,340 C480,370 450,400 420,400 L410,360Z"/>`+T(14,150,"U-shaped scars ที่ขั้วบน/ล่าง",{a:"start",c:"s"})+T(14,180,"Calyces ผิดรูป/ทื่อ",{a:"start",c:"s"})+T(14,210,"Thyroidization ของ tubules",{a:"start",c:"s"})}
 b+=`<path class="ureter" d="M290,320 C260,360 240,400 230,430"/>`+T(200,430,a?"ascending: bladder → ureter → pelvis":"vesicoureteral reflux",{a:"end",c:"s"});return svg(b,"0 0 640 450")},
notes:()=>`<h3>Acute pyelonephritis</h3><ul><li>เชื้อส่วนใหญ่ <b>gram-negative (E. coli)</b> · ทาง <b>ascending</b> (บ่อยสุด) หรือ hematogenous ${S.r}</li>
 <li>ปัจจัยเสี่ยง: obstruction, instrumentation, <b>vesicoureteral reflux</b>, pregnancy, female, DM, immunosuppression ${S.r}</li>
 <li>Morphology: patchy interstitial suppurative inflammation, neutrophils ใน tubule · ภาวะแทรกซ้อน: <b>papillary necrosis</b>, pyonephrosis, perinephric abscess ${S.r}</li></ul>
 <h3>Chronic pyelonephritis & reflux nephropathy</h3><ul><li>Coarse, irregular corticomedullary scars เหนือ calyx ที่ทื่อผิดรูป · thyroidization ${S.r}</li>
 <li>Reflux nephropathy เริ่มในวัยเด็ก · อาจเกิด secondary FSGS + proteinuria ${S.r}</li>
 <li><b>Xanthogranulomatous pyelonephritis</b>: foamy macrophages, Proteus + obstruction, คล้ายเนื้องอก ${S.r}</li></ul>
 ${tbl(["Papillary necrosis","DM","Analgesic","Sickle cell","Obstruction"],[["Infection","80%","25%","±","90%"],["Papillae","หลายอัน ระยะเดียวกัน","เกือบทุกอัน ต่างระยะ","น้อย","แปรผัน"]])}`});
SEC.push({id:"tin",k:"f",t:"Drug-induced & other TIN",leg:[],
draw(){let b="";const R=[["Acute drug-induced IN","2–40 วันหลังยา · fever, rash, eosinophilia · หยุดยาแล้วหาย","ar"],["Analgesic nephropathy","papillary necrosis · ใช้ยาผสมนานปี (phenacetin)","vn"],["Urate nephropathy","acute: tumor lysis · chronic: gout tophi","gl"],["Hypercalcemia","nephrocalcinosis + stones","" ],["Light-chain cast (myeloma)","Bence Jones casts + giant cells","ar"],["Bile cast","jaundice รุนแรง","vn"]];
 R.forEach(([n,d,c],i)=>{const y=20+i*66;b+=`<rect class="box ${c}" x="20" y="${y}" width="600" height="56" rx="12"/>`+T(36,y+24,n,{a:"start",c:"bh"})+T(36,y+44,d,{a:"start",c:"s"})});return svg(b,"0 0 640 420")},
notes:()=>`<h3>Acute drug-induced interstitial nephritis</h3><ul><li>Hypersensitivity: <b>β-lactams</b> (methicillin, ampicillin), rifampin, diuretics (thiazide), <b>NSAIDs</b>, PPIs, allopurinol, cimetidine ${S.r}</li>
 <li>Interstitial edema + lymphocytes, macrophages, <b>eosinophils</b> · granulomas ได้ · glomeruli ปกติ ${S.r}</li>
 <li>NSAIDs ยังทำให้: AKI จาก PG ลด, MCD/membranous ${S.r}</li></ul>
 <h3>อื่นๆ</h3><ul><li><b>Urate</b>: tumor lysis → uric acid ตกใน collecting duct · <b>Myeloma kidney</b>: light chain + Tamm–Horsfall → casts อุด + multinucleated giant cells · amyloid, hypercalcemia ร่วม ${S.r}</li>
 <li><b>ADTKD</b> (uromodulin, MUC1 mutations): CKD + gout ${S.r}</li></ul>`});

/* ---------- g · vessels ---------- */
SEC.push({id:"nephrosclerosis",k:"g",t:"Nephrosclerosis (hypertensive)",tools:[["ns",[["benign","Benign (hyaline)"],["malig","Malignant"]]]],leg:[],
draw(){const m=(ST.ns||"benign")==="malig";let b="";const cx=180,cy=200;
 b+=`<circle class="ves-wall" cx="${cx}" cy="${cy}" r="120"/>`;
 if(!m){b+=`<circle class="hyal" cx="${cx}" cy="${cy}" r="96"/><circle class="lum" cx="${cx}" cy="${cy}" r="30"/>`+T(cx,360,"Hyaline arteriolosclerosis",{c:"bh"})}
 else{for(let k=0;k<6;k++)b+=`<circle class="onion" cx="${cx}" cy="${cy}" r="${100-k*12}"/>`;b+=`<circle class="lum" cx="${cx}" cy="${cy}" r="14"/><path class="fibrin" d="M${cx-90},${cy-40} q30,-30 60,-20"/>`+T(cx,360,"Hyperplastic ‘onion-skin’ + fibrinoid",{c:"bh"})}
 b+=B(340,60,280,120,m?"Malignant HT":"Benign",m?["BP >200/120","flea-bitten kidney (petechiae)","papilledema, encephalopathy"]:["ไตเล็ก ผิว granular","ภาวะของอายุ/HT/DM","ไม่ค่อยทำให้ไตวาย"],m?"ar":"vn");
 b+=B(340,200,280,100,"Lumen",[m?"ตีบมาก → ischemia, renin ↑":"ตีบปานกลาง → patchy ischemia"],"");return svg(b,"0 0 640 400")},
notes:()=>`<h3>Benign nephrosclerosis</h3><ul><li><b>Hyaline arteriolosclerosis</b> + fibroelastic hyperplasia ของ interlobular artery → glomerulosclerosis, tubular atrophy · ไตเล็ก ผิวขรุขระละเอียด ${S.r}</li>
 <li>พบมากใน African Americans (APOL1), DM ${S.r}</li></ul>
 <h3>Malignant hypertension</h3><ul><li>~1–5% ของผู้ป่วย HT · BP &gt;200/120 · <b>fibrinoid necrosis</b> + <b>hyperplastic (onion-skin)</b> arteriolosclerosis · flea-bitten kidney ${S.r}</li>
 <li>RAAS กระตุ้น วงจร ischemia → renin ↑ · papilledema, encephalopathy, CV abnormalities ${S.r}</li></ul>`});
SEC.push({id:"tma",k:"g",t:"Thrombotic microangiopathies & other vascular",leg:[],
draw(){let b="";const R=[["Shiga toxin HUS","E. coli O157:H7, Shigella · เด็ก · bloody diarrhea → AKI","ar"],["Atypical HUS","complement dysregulation (factor H, I, MCP) · inherited/acquired","vn"],["TTP","ADAMTS13 deficiency (autoantibody) · neuro อาการเด่น","gl"],["Renal artery stenosis","atherosclerosis (ชายสูงอายุ) / fibromuscular dysplasia (หญิงสาว)","" ],["Atheroembolic","หลังทำหัตถการ aorta · cholesterol clefts","ar"],["Sickle cell","papillary necrosis · hematuria · ↓ concentrating","vn"],["Infarct","embolus จาก mural thrombus · wedge-shaped","gl"]];
 R.forEach(([n,d,c],i)=>{const y=14+i*58;b+=`<rect class="box ${c}" x="20" y="${y}" width="600" height="50" rx="12"/>`+T(36,y+22,n,{a:"start",c:"bh"})+T(36,y+40,d,{a:"start",c:"s"})});return svg(b,"0 0 640 430")},
notes:()=>`<h3>TMA</h3><ul><li>Endothelial injury → microthrombi (platelet ± fibrin) ใน arterioles/capillaries → MAHA (schistocytes) + thrombocytopenia + ไตวาย ${S.r}</li>
 <li>Table 20.11: Shiga toxin HUS · atypical HUS (complement) · TTP (ADAMTS13) · secondary: drugs (calcineurin inhibitors), pregnancy, antiphospholipid, malignant HT, scleroderma ${S.r}</li></ul>
 <h3>Renal artery stenosis</h3><ul><li>สาเหตุ HT ที่แก้ได้ (~2–5%) · ไตข้างที่ตีบหลั่ง renin · atherosclerotic plaque ที่ origin (70%) · <b>fibromuscular dysplasia</b>: ‘string of beads’ ในหญิงอายุน้อย ${S.r}</li></ul>`});

/* ---------- h · congenital & cystic ---------- */
SEC.push({id:"congenital",k:"h",t:"Congenital anomalies",leg:[],
draw(){let b="";const R=[["Agenesis","bilateral → Potter · unilateral → อีกข้างโตชดเชย"],["Hypoplasia","ไตเล็กแต่โครงสร้างปกติ · oligomeganephronia"],["Ectopic kidney","มักอยู่ pelvis · ureter คด → obstruction/infection"],["Horseshoe","ขั้วล่างเชื่อมกัน 90% · 1 ใน 500–1000"]];
 R.forEach(([n,d],i)=>{const y=20+i*92;b+=`<rect class="box" x="20" y="${y}" width="600" height="80" rx="12"/>`+T(36,y+32,n,{a:"start",c:"bh"})+T(36,y+56,d,{a:"start",c:"s"})});return svg(b,"0 0 640 400")},
notes:()=>`<ul><li>~10% ของคนเกิดมามีความผิดปกติของระบบปัสสาวะ · ส่วนใหญ่มาจาก developmental ไม่ใช่ยีนเดี่ยว ${S.r}</li>
 <li><b>Bilateral agenesis</b>: เข้ากับชีวิตไม่ได้ · Potter sequence · <b>unilateral</b>: อีกข้าง hypertrophy → FSGS ได้ในระยะยาว ${S.r}</li>
 <li><b>Horseshoe</b>: ขั้วล่างเชื่อม 90% ขั้วบน 10% ${S.r}</li></ul>
 <div class="pearl">ดูการเกิดแต่ละความผิดปกติใน <b>KUB Embryology Atlas</b></div>`});
SEC.push({id:"cystic",k:"h",t:"Cystic diseases",tools:[["cy",[["ad","ADPKD"],["ar","ARPKD"],["mcdk","MCDK"],["msk","Medullary sponge"],["nphp","Nephronophthisis"]]]],leg:[],
draw(){const c=ST.cy||"ad";let b="";const kid=(x,big)=>`<path class="kid" d="M${x},40 C${x+(big?150:110)},40 ${x+(big?220:170)},120 ${x+(big?220:170)},220 C${x+(big?220:170)},320 ${x+(big?150:110)},400 ${x},400 C${x-30},400 ${x-40},360 ${x-25},320 C${x-12},290 ${x-12},150 ${x-25},120 C${x-40},80 ${x-30},40 ${x},40Z"/>`;
 b+=kid(220,c==="ad"||c==="ar");const r=rng(c.length*7);
 if(c==="ad")for(let i=0;i<34;i++)b+=`<circle class="cyst" cx="${210+r()*200}" cy="${70+r()*310}" r="${10+r()*26}"/>`;
 if(c==="ar")for(let i=0;i<40;i++){const y=60+r()*320;b+=`<ellipse class="cyst" cx="${250+r()*150}" cy="${y}" rx="22" ry="5" transform="rotate(${(y-220)/4} 320 ${y})"/>`}
 if(c==="mcdk")for(let i=0;i<12;i++)b+=`<circle class="cyst" cx="${240+r()*120}" cy="${80+r()*300}" r="${16+r()*20}"/>`;
 if(c==="msk")for(let i=0;i<16;i++)b+=`<circle class="cyst" cx="${300+r()*60}" cy="${150+r()*140}" r="${4+r()*5}"/>`;
 if(c==="nphp")for(let i=0;i<10;i++)b+=`<circle class="cyst" cx="${290+r()*70}" cy="${170+r()*100}" r="${5+r()*7}"/>`;
 const info={ad:["Autosomal dominant · PKD1 (polycystin-1, 85%) / PKD2","ไตโตมาก ทั้งสองข้าง · liver cysts · berry aneurysm · MVP","ESRD อายุ 40–60"],ar:["Autosomal recessive · PKHD1 (fibrocystin)","ไตโตตั้งแต่เกิด · cysts ยาวรัศมีจาก CD","congenital hepatic fibrosis"],mcdk:["Developmental (ไม่ใช่กรรมพันธุ์) · มักข้างเดียว","cysts + dysplastic stroma, cartilage","มักมี obstruction ร่วม"],msk:["Medullary sponge kidney","cysts เล็กใน medullary CD","stones, hematuria · ไตทำงานดี"],nphp:["Nephronophthisis (ciliopathy)","cysts ที่ corticomedullary junction","ESRD ในเด็ก/วัยรุ่น · polyuria"]}[c];
 b+=`<rect class="box vn" x="440" y="100" width="194" height="230" rx="12"/>`+T(537,126,info[0].split(" · ")[0],{c:"bh"})+wrapT(452,150,[info[0].split(" · ")[1]||"",info[1],info[2]].join(" · "),24,"s");return svg(b,"0 0 640 440")},
notes:()=>`${tbl(["โรค","ลักษณะ","Outcome"],[["ADPKD","ไตโตมีซีสต์มาก, liver cysts, berry aneurysm · hematuria, flank pain, UTI, stones, HT","CKD เริ่ม 40–60 ปี"],["ARPKD","ไตโตตั้งแต่เกิด, hepatic fibrosis","เสียชีวิตในวัยทารก/เด็ก (แปรผัน)"],["Medullary sponge","medullary cysts บน urogram · hematuria, UTI, stones","ดี"],["Nephronophthisis","ไตเล็ก cysts ที่ corticomedullary · polyuria, anemia","ESRD ในเด็ก"],["MCDK","ซีสต์ + dysplasia, ข้างเดียว","ดี (ถ้าอีกข้างปกติ)"],["Acquired (dialysis)","ซีสต์ใน ESRD ที่ฟอกเลือดนาน","เสี่ยง RCC"],["Simple cysts","พบบ่อย ผนังบาง ใส","ไม่มีผล"]])}
 <ul><li>ADPKD: polycystin เกี่ยวกับ primary cilium → cilia–centrosome complex ผิดปกติ · ~10% เสียชีวิตจาก berry aneurysm แตก ${S.r}</li></ul>`});

/* ---------- i · obstruction & stones ---------- */
SEC.push({id:"obstruction",k:"i",t:"Obstruction & hydronephrosis",leg:[],
draw(){let b="";
 b+=`<path class="kid" d="M260,40 C380,40 450,120 450,220 C450,320 380,400 260,400 C220,400 200,360 215,320 C228,290 228,150 215,120 C200,80 220,40 260,40Z"/><path class="pelvis" d="M230,140 C300,120 360,160 380,220 C360,280 300,320 230,300 C200,260 200,180 230,140Z"/>`;
 b+=`<path class="ureter" d="M230,300 C210,350 200,390 190,430"/><circle class="dsite" cx="196" cy="405" r="12"/>`+T(160,410,"obstruction",{a:"end",c:"bad"})+T(300,222,"pelvis/calyces ขยาย",{c:"s"})+T(450,60,"cortex บางลง",{a:"start",c:"s"});
 b+=B(470,250,160,170,"สาเหตุ",["congenital (PUJ, valves)","stones · BPH · tumors","pregnancy · inflammation","neurogenic bladder"],"vn");return svg(b,"0 0 640 440")},
notes:()=>`<ul><li>Hydronephrosis = pelvis และ calyces ขยาย ร่วมกับ parenchyma ฝ่อ จากการอุดตัน ${S.r}</li>
 <li>GFR ยังมีอยู่แม้อุดตัน filtrate รั่วกลับเข้า interstitium/lymph → ความดันสูง → medulla ฝ่อก่อน (papillae) แล้ว cortex ${S.r}</li>
 <li>Bilateral อุดสมบูรณ์ → anuria · ข้างเดียวอาจเงียบ · แก้ภายในไม่กี่สัปดาห์มักฟื้น ${S.r}</li>
 <li>หลังแก้ bilateral obstruction → <b>post-obstructive diuresis</b> เสียน้ำ/เกลือมาก ${S.r}</li></ul>`});
SEC.push({id:"stones",k:"i",t:"Urolithiasis",leg:[],
draw(){let b="";const R=[["Calcium oxalate/phosphate",70,"hypercalciuria (55% ไม่มี hypercalcemia), hyperoxaluria, hypocitraturia","--s-ca"],["Struvite (Mg NH₄ PO₄)",15,"urease bacteria (Proteus) · staghorn · alkaline urine","--s-pi"],["Uric acid",7,"gout, tumor lysis · acidic urine · radiolucent","--s-urea"],["Cystine",2,"cystinuria (dibasic AA transport) · hexagonal","--s-k"]];
 R.forEach(([n,p,d,c],i)=>{const y=30+i*90;b+=T(20,y+16,n,{a:"start",c:"bh"})+`<rect class="seg" x="20" y="${y+26}" width="${p*5.5}" height="24" rx="6" style="fill:var(${c})"/>`+T(28+p*5.5,y+43,(i===2?"5–10":i===3?"1–2":p)+"%",{a:"start",c:"s"})+T(20,y+70,d,{a:"start",c:"s"})});return svg(b,"0 0 640 400")},
notes:()=>`<h3>Table 20.13</h3><ul><li>Calcium ~70% · struvite ~15% · uric acid 5–10% · cystine 1–2% · ทุกก้อนมี mucoprotein matrix 1–5% ${S.r}</li>
 <li>ปัจจัยสำคัญที่สุด: ความเข้มข้นของสารในปัสสาวะสูง (supersaturation) · ชาย &gt; หญิง · peak 20–30 ปี ${S.r}</li>
 <li>Calcium: hypercalcemia + hypercalciuria (~5%: hyperparathyroidism, sarcoidosis), hypercalciuria ไม่มี hypercalcemia (~55%), hyperuricosuria (~20%), hypocitraturia ${S.r}</li>
 <li>Uric acid เกิดใน urine pH &lt;5.5 · struvite ใน urine ด่าง (urease) ${S.r}</li></ul>
 <h3>Clinical</h3><ul><li>Renal colic, hematuria · อุดตัน → infection · ก้อนเล็ก &lt;5 mm มักหลุดเอง ${S.r}</li></ul>`});

/* ---------- j · tumors ---------- */
SEC.push({id:"benign",k:"j",t:"Benign renal tumors",leg:[],
draw(){let b="";const R=[["Papillary adenoma","≤15 mm · พบบ่อยในชันสูตร · จาก tubule","" ],["Angiomyolipoma","vessels + smooth muscle + fat · TSC 25–50% · เลือดออกได้","vn"],["Oncocytoma","5–15% · intercalated cells · mitochondria มาก · central scar","gl"]];
 R.forEach(([n,d,c],i)=>{const y=30+i*110;b+=`<rect class="box ${c}" x="20" y="${y}" width="600" height="96" rx="12"/>`+T(36,y+36,n,{a:"start",c:"bh"})+T(36,y+64,d,{a:"start",c:"s"})});return svg(b,"0 0 640 370")},
notes:()=>`<ul><li><b>Papillary adenoma</b>: เล็ก ≤15 mm · มีความผิดปกติทางยีนคล้าย papillary RCC ${S.r}</li>
 <li><b>Angiomyolipoma</b>: PEComa · สัมพันธ์กับ <b>tuberous sclerosis</b> (TSC1/2) · ใหญ่ → spontaneous hemorrhage ${S.r}</li>
 <li><b>Oncocytoma</b>: เนื้องอกสีน้ำตาลมีแผลเป็นกลาง · eosinophilic cells (mitochondria) · benign แต่แยกจาก chromophobe RCC ยาก ${S.r}</li></ul>`});
SEC.push({id:"rcc",k:"j",t:"Renal cell carcinoma",tools:[["rc",[["clear","Clear cell"],["pap","Papillary"],["chromo","Chromophobe"],["cd","Collecting duct"]]]],leg:[],
draw(){const c=ST.rc||"clear";let b="";const pct={clear:"70–80%",pap:"10–15%",chromo:"5%",cd:"~1%"}[c];
 const info={clear:["VHL loss (3p) ใน 98% · HIF ↑ → VEGF","cells ใส (glycogen, lipid) · ก้อนเหลือง เลือดออก","มักลุก renal vein → IVC"],pap:["Trisomy 7, 17, loss of Y · MET (familial)","papillae + foamy macrophages, psammoma","bilateral/multifocal ได้"],chromo:["หลายโครโมโซมหาย (hypodiploid)","cells ใสพอง ขอบชัด perinuclear halo","จาก intercalated cells · พยากรณ์ดี"],cd:["Bellini duct carcinoma","medulla · tubules ใน desmoplastic stroma","aggressive"]}[c];
 const r=rng(5);b+=`<rect class="lm-bg lm-p" x="0" y="0" width="360" height="400"/>`;
 if(c==="clear"||c==="chromo")for(let y=20;y<390;y+=34)for(let x=16;x<350;x+=40){b+=`<rect class="${c==="clear"?"cc":"chr"}" x="${x}" y="${y}" width="36" height="30" rx="3"/><circle class="lm-nu" cx="${x+18}" cy="${y+15}" r="5"/>`+(c==="chromo"?`<circle class="halo" cx="${x+18}" cy="${y+15}" r="9"/>`:"")}
 if(c==="pap")for(let i=0;i<7;i++){const x=40+i*48;b+=`<path class="pap" d="M${x},390 C${x-10},250 ${x+30},120 ${x+10},40"/>`;for(let y=60;y<380;y+=22)b+=`<circle class="lm-nu" cx="${x+8+Math.sin(y)*6}" cy="${y}" r="4"/>`}
 if(c==="cd")for(let i=0;i<10;i++)b+=`<circle class="cdg" cx="${40+r()*280}" cy="${40+r()*320}" r="${16+r()*10}"/>`;
 b+=B(380,40,250,170,c==="clear"?"Clear cell":c==="pap"?"Papillary":c==="chromo"?"Chromophobe":"Collecting duct",[pct+" ของ RCC",...info],"ar");
 b+=B(380,230,250,150,"Triad (10–15%)",["hematuria (บ่อยสุด)","flank pain · palpable mass","paraneoplastic: EPO, PTHrP, renin"],"vn");return svg(b,"0 0 640 400")},
notes:()=>`<h3>Risk factors</h3><ul><li><b>สูบบุหรี่</b> (สำคัญสุด), HT, obesity, cadmium, acquired cystic disease, TSC · familial: <b>VHL</b> (hemangioblastoma), hereditary papillary (MET), HLRCC (fumarate hydratase), Birt-Hogg-Dubé ${S.r}</li></ul>
 <h3>Subtypes</h3><ul><li><b>Clear cell</b> 70–80%: <b>3p loss/VHL</b> ใน 98% → HIF stabilization; sporadic 95% ${S.r}</li><li><b>Papillary</b> 10–15%: trisomy 7, 17 · MET ${S.r}</li><li><b>Chromophobe</b> 5%: พยากรณ์ดี ${S.r}</li><li>Xp11 translocation (TFE3) ในคนอายุน้อย · collecting duct carcinoma ${S.r}</li></ul>
 <h3>Clinical</h3><ul><li>อายุ 60–70 · hematuria บ่อยสุด · triad พบแค่ 10% · paraneoplastic: polycythemia (EPO), hypercalcemia (PTHrP), HT, Cushing · metastasis ไป lung, bone ${S.r}</li></ul>`});
SEC.push({id:"wilms",k:"j",t:"Wilms tumor (nephroblastoma)",leg:[],
draw(){let b="";const r=rng(9);b+=`<rect class="lm-bg lm-p" x="0" y="0" width="360" height="400"/>`;
 for(let i=0;i<120;i++)b+=`<circle class="blast" cx="${20+r()*150}" cy="${20+r()*360}" r="4"/>`;
 for(let i=0;i<6;i++){const cx=230+(i%2)*60,cy=60+i*55;b+=`<circle class="tub" cx="${cx}" cy="${cy}" r="22"/><circle class="lum" cx="${cx}" cy="${cy}" r="8"/>`}
 for(let i=0;i<20;i++)b+=`<path class="fibr" d="M${180+r()*160},${20+r()*360} q20,6 40,0"/>`;
 b+=T(95,392,"blastema",{c:"s"})+T(260,392,"epithelial + stroma",{c:"s"});
 b+=B(380,40,250,160,"Triphasic",["blastema (small blue cells)","epithelial (tubules, glomeruloid)","stromal (fibrous, myxoid)"],"vn")+B(380,220,250,160,"Syndromes",["WAGR (WT1 deletion)","Denys–Drash (WT1 dominant-negative)","Beckwith–Wiedemann (WT2, 11p15.5)"],"ar");return svg(b,"0 0 640 400")},
notes:()=>`<ul><li>เนื้องอกไตที่พบบ่อยที่สุดในเด็ก อายุ 2–5 ปี ${S.r}</li>
 <li>Syndromes: <b>WAGR</b> (Wilms, aniridia, genital anomalies, retardation; WT1 deletion 11p13) · <b>Denys–Drash</b> (gonadal dysgenesis + diffuse mesangial sclerosis; WT1 dominant-negative) · <b>Beckwith–Wiedemann</b> (organomegaly, hemihypertrophy; WT2 imprinting 11p15.5) ${S.r}</li>
 <li><b>Nephrogenic rests</b> = precursor lesion ${S.r}</li><li>Anaplasia (TP53) → พยากรณ์แย่ · โดยรวมรักษาหายได้ ~90% ${S.r}</li>
 <li>มาด้วยก้อนในท้องใหญ่ ไม่ข้ามเส้นกลาง · hematuria, pain, HT ${S.r}</li></ul>`});

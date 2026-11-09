/* Sections from the original robbins-ch21 atlas (all Harrison chapters for _renal-harrison). */

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

/* ================= Robbins Ch 21 · Lower urinary tract ================= */
Object.assign(GN,{a:"Ureters",b:"Bladder: non-neoplastic",c:"Bladder neoplasms",d:"Urethra"});
SEC.push({id:"ureter",k:"a",t:"Ureter: congenital anomalies & tumors",leg:[],
draw:()=>cards([["Double / bifid ureter","มักร่วมกับ duplex kidney · ส่วนใหญ่ไม่มีอาการ","" ],["Ureteropelvic junction (UPJ) obstruction","สาเหตุ hydronephrosis ที่พบบ่อยที่สุดในทารกและเด็ก · เด็กชาย > หญิง (bilateral 20%) · ผู้ใหญ่: หญิง ข้างเดียว","ar"],["Diverticula","ถุงยื่นของผนัง ureter → stasis, infection","" ],["Hydroureter / megaloureter","ureter ยาวคดและขยาย · neurogenic หรือ obstruction","vn"],["Tumors","ส่วนใหญ่ urothelial carcinoma อายุ 60–70 · มักพบร่วมกับใน bladder/pelvis","gl"],["Fibroepithelial polyp","tumor-like lesion ในเด็ก · loose vascular CT คลุมด้วย urothelium","" ]],{foot:"Table 21.1 · พบได้ 2–3% ของการชันสูตร"}),
notes:()=>`<h3>Congenital (Table 21.1)</h3><ul><li><b>Vesicoureteral reflux</b> เป็นความผิดปกติที่สำคัญที่สุด → infection, reflux nephropathy ${S.r}</li>
 <li><b>UPJ obstruction</b>: smooth muscle bundle เรียงผิดปกติหรือ collagen เกินที่ UPJ · ไม่ค่อยบ่อยจาก renal vessel กดทับ · ส่วนน้อยมี agenesis ของไตอีกข้าง ${S.r}</li></ul>
 <h3>Tumors</h3><ul><li>เนื้องอกปฐมภูมิของ ureter พบน้อย · ส่วนใหญ่เป็น urothelial carcinoma · มักมี multifocal ร่วมกับ bladder หรือ renal pelvis ${S.r}</li></ul>`});
SEC.push({id:"ureterobs",k:"a",t:"Obstructive lesions & retroperitoneal fibrosis",leg:[],
draw(){let b="";const col=(x,ttl,R,c)=>{b+=`<rect class="box ${c}" x="${x}" y="14" width="300" height="34" rx="10"/>`+T(x+150,36,ttl,{c:"bh"});R.forEach(([n,dd],i)=>{const y=60+i*58;b+=`<rect class="box" x="${x}" y="${y}" width="300" height="50" rx="10"/>`+T(x+12,y+21,n,{a:"start",c:"b"})+T(x+12,y+40,dd,{a:"start",c:"s"})})};
 col(14,"Intrinsic",[["Calculi","ติดที่ UPJ, pelvic brim, UVJ"],["Strictures","congenital หรือ acquired"],["Tumors","urothelial carcinoma"],["Blood clots","hematuria มาก, papillary necrosis"],["Neurogenic","neural pathway ไป bladder ขาด"]],"ar");
 col(326,"Extrinsic",[["Pregnancy","smooth muscle คลาย + มดลูกกด"],["Periureteral inflammation","salpingitis, diverticulitis"],["Endometriosis","พังผืดใน pelvis"],["Tumors","rectum, bladder, prostate, cervix, lymphoma"],["Retroperitoneal fibrosis","IgG4-related, ยา (ergot), idiopathic"]],"vn");return svg(b,"0 0 640 360")},
notes:()=>`<h3>Table 21.2 · สาเหตุ ureteral obstruction</h3><ul><li>ผลที่ตามมา: hydroureter, hydronephrosis, pyelonephritis ${S.r}</li><li>Unilateral มักจากสาเหตุส่วนต้น (stones, tumor) · <b>bilateral</b> มักจากส่วนปลาย เช่น <b>nodular hyperplasia ของ prostate</b> ${S.r}</li></ul>
 <h3>Sclerosing retroperitoneal fibrosis</h3><ul><li>Fibroinflammatory process หุ้มโครงสร้างใน retroperitoneum → hydronephrosis · lymphocytes (germinal centers), plasma cells, eosinophils ${S.r}</li>
 <li>วัยกลางคน–สูงอายุ ชาย &gt; หญิง · บางส่วนเป็น <b>IgG4-related disease</b> (IgG4 สูง, plasma cells IgG4+) · สาเหตุอื่น: ยา (ergot derivatives, β-blockers), inflammation (vasculitis, diverticulitis, Crohn), malignancy (lymphoma) · ส่วนที่เหลือ idiopathic (Ormond disease) ${S.r}</li>
 <li>เริ่มด้วย corticosteroids · หลายรายดื้อในภายหลัง ต้อง stent หรือ ureterolysis ${S.r}</li></ul>`});

SEC.push({id:"bladdercong",k:"b",t:"Bladder: congenital anomalies",leg:[],
draw:()=>cards([["Diverticula","congenital หรือ acquired (BPH) · stasis, infection, stones · มะเร็งในถุง stage สูงกว่า","ar"],["Exstrophy","ผนังหน้าท้อง + bladder ปิดไม่สมบูรณ์ · colonic metaplasia → adenocarcinoma","vn"],["Urachal anomalies","patent urachus (fistula สะดือ–bladder) · urachal cyst · urachal carcinoma (adenocarcinoma)","gl"],["Congenital fistulas","bladder ↔ vagina, rectum, uterus","" ]]),
notes:()=>`<ul><li><b>Diverticula</b>: ส่วนใหญ่เป็น acquired ในชายสูงอายุจาก <b>prostatic hyperplasia</b> · มักเล็กไม่มีอาการ ${S.r}</li>
 <li>มะเร็งที่เกิดในถุง diverticulum มัก <b>stage สูงกว่า</b> เพราะ muscularis propria บางหรือไม่มี ${S.r}</li>
 <li><b>Exstrophy</b>: ติดเชื้อเรื้อรังลามขึ้นไต · เสี่ยง <b>adenocarcinoma</b> ${S.r}</li>
 <li><b>Urachus</b> = ท่อเชื่อม bladder กับ allantois ปกติจะปิด · ส่วนที่คงอยู่ให้ fistula หรือ cyst · urachal carcinoma เป็น adenocarcinoma ส่วนน้อยของมะเร็ง bladder ${S.r}</li></ul>`});
SEC.push({id:"cystitis",k:"b",t:"Cystitis",tools:[["cy",[["acute","Acute / chronic"],["ic","Interstitial"],["mala","Malakoplakia"],["poly","Polypoid"]]]],leg:[],
draw(){const c=ST.cy||"acute";let b=`<rect class="lm-bg" x="0" y="0" width="640" height="300"/>`;const r=rng(13);
 /* urothelium layer */
 if(c==="poly"){for(let i=0;i<5;i++){const x=40+i*120;b+=`<path class="lp" d="M${x},120 C${x},20 ${x+100},20 ${x+100},120Z" style="stroke:var(--lm-deep)"/><path class="uro" d="M${x},120 C${x},20 ${x+100},20 ${x+100},120 L${x+92},120 C${x+92},36 ${x+8},36 ${x+8},120Z"/>`}}
 else b+=`<rect class="uro" x="0" y="${c==="ic"?100:90}" width="640" height="${c==="ic"?8:30}"/>`;
 b+=`<rect class="lp" x="0" y="120" width="640" height="100"/><rect class="mp" x="0" y="220" width="640" height="80"/>`;
 if(c==="acute")for(let i=0;i<50;i++)b+=`<circle class="lm-pmn" cx="${r()*640}" cy="${100+r()*110}" r="3.5"/>`;
 if(c==="ic"){for(let i=0;i<20;i++)b+=`<circle class="lm-nu" cx="${r()*640}" cy="${130+r()*80}" r="4"/>`;b+=`<path class="fibrin" d="M200,100 l20,-12 l20,12" />`+T(220,80,"Hunner ulcer / glomerulations",{c:"bad"})}
 if(c==="mala")for(let i=0;i<12;i++){const x=40+r()*560,y=140+r()*60;b+=`<circle class="cc" cx="${x}" cy="${y}" r="16"/><circle class="blast" cx="${x+4}" cy="${y-2}" r="5"/>`}
 b+=T(10,104,"urothelium",{a:"start",c:"s"})+T(10,170,"lamina propria",{a:"start",c:"s"})+T(10,262,"muscularis propria",{a:"start",c:"s"});
 const info={acute:["Acute / chronic cystitis","E. coli > Proteus, Klebsiella, Enterobacter · neutrophils → mononuclear (chronic)","ar"],ic:["Interstitial cystitis","หญิง · ปวด suprapubic > 6 สัปดาห์ ไม่มีเชื้อ · mast cells · biopsy เพื่อแยก CIS","vn"],mala:["Malakoplakia","macrophages เต็ม debris แบคทีเรีย · Michaelis–Gutmann bodies (Ca²⁺) · phagolysosome บกพร่อง","gl"],poly:["Polypoid cystitis","submucosal edema จากสายสวน → ยื่นเป็นติ่ง · คล้าย papillary carcinoma",""]}[c];
 b+=`<rect class="box ${info[2]}" x="0" y="310" width="640" height="64" rx="12"/>`+T(16,336,info[0],{a:"start",c:"bh"})+T(16,358,info[1],{a:"start",c:"s"});return svg(b,"0 0 640 380")},
notes:()=>`<h3>Acute & chronic cystitis</h3><ul><li>ปัจจัยเสี่ยง: นิ่วใน bladder, obstruction, <b>DM</b>, instrumentation, immunodeficiency · หญิงเสี่ยงกว่า (urethra สั้น) ${S.r}</li>
 <li>เชื้อ: coliforms (<b>E. coli</b>) · TB (ตามหลัง renal TB) · Candida · <i>Schistosoma haematobium</i> · adenovirus/<b>BK virus</b> → hemorrhagic cystitis · Clostridium → emphysematous ${S.r}</li>
 <li>Noninfectious: <b>cyclophosphamide</b> → hemorrhagic cystitis · radiation · follicular · eosinophilic ${S.r}</li>
 <li>Triad: <b>frequency, suprapubic pain, dysuria</b> ${S.r}</li></ul>
 <h3>Special forms</h3><ul><li><b>Interstitial cystitis</b> (chronic pelvic pain syndrome): glomerulations, Hunner ulcers (late) → fibrosis, contracted bladder ${S.r}</li>
 <li><b>Malakoplakia</b>: soft yellow plaques 3–4 cm · พบมากใน immunosuppression (renal transplant) · เกิดที่อวัยวะอื่นได้ ${S.r}</li><li><b>Polypoid cystitis</b>: จาก indwelling catheter ${S.r}</li></ul>`});
SEC.push({id:"metaplasia",k:"b",t:"Metaplastic lesions",leg:[],
draw:()=>cards([["Cystitis cystica et glandularis","von Brunn nests ลงไปใน lamina propria → กลายเป็น cuboidal/columnar (glandularis) หรือเป็นโพรง (cystica)","" ],["Intestinal metaplasia","มี goblet cells · extensive/multifocal → precursor ของ adenocarcinoma","gl"],["Squamous metaplasia","ตอบสนองต่อ chronic injury · keratinizing multifocal → precursor ของ SCC (schistosomiasis)","ar"],["Nephrogenic adenoma","renal tubular cells หลุดมาฝังที่ urothelium ที่บาดเจ็บ · benign","vn"]]),
notes:()=>`<ul><li>Cystitis cystica และ glandularis มักเกิดร่วมกัน · พบบ่อย ไม่มีความสำคัญมากเว้นแต่ intestinal metaplasia กว้างขวาง ${S.r}</li>
 <li>แยก <b>squamous metaplasia</b> จาก glycogenated squamous epithelium ปกติที่ trigone ของหญิง ${S.r}</li>
 <li><b>Nephrogenic adenoma</b>: เดิมคิดว่าเป็น metaplasia แต่จริงๆ คือ tubular cells ที่หลุดมาฝัง (พบหลัง renal transplant ตรงกับ donor) ${S.r}</li></ul>`});

SEC.push({id:"urothelial",k:"c",t:"Urothelial neoplasms: pathways & risk",leg:[],
draw(){let b="";
 b+=`<rect class="box" x="220" y="14" width="200" height="44" rx="12"/>`+T(320,41,"Normal urothelium",{c:"bh"});
 b+=`<path class="arw" d="M290,60 L160,100" marker-end="url(#ah)"/><path class="arw" d="M350,60 L480,100" marker-end="url(#ah)"/>`;
 b+=B(30,104,260,90,"Papillary pathway",["FGFR3, RAS, PI3K (gain-of-function)","non-invasive papillary tumors","เกิดซ้ำบ่อย · ลุกล้ำ ~20%"],"vn");
 b+=B(350,104,260,90,"Flat pathway",["TP53, RB (early)","Carcinoma in situ (CIS)","ส่วนใหญ่ของ muscle-invasive"],"ar");
 b+=`<path class="arw" d="M160,198 L290,250" marker-end="url(#ah)"/><path class="arw" d="M480,198 L350,250" marker-end="url(#ah)"/>`;
 b+=`<rect class="box ar" x="200" y="254" width="240" height="44" rx="12"/>`+T(320,281,"Invasive urothelial carcinoma",{c:"bh"});
 b+=T(320,326,"Risk: บุหรี่ · aryl amines (2-naphthylamine) · S. haematobium · cyclophosphamide · analgesics · radiation",{c:"s"});return svg(b,"0 0 640 340")},
notes:()=>`<h3>Epidemiology</h3><ul><li>Bladder cancer เป็นมะเร็งพบบ่อยอันดับ 4 ในชายอเมริกัน · ชาย:หญิง <b>3:1</b> · 80% อายุ 50–80 · แทบไม่เป็นกรรมพันธุ์ ${S.r}</li>
 <li>&gt;95% เป็น epithelial · urothelial ~90% · multifocal ได้ทุกตำแหน่งที่มี urothelium ${S.r}</li></ul>
 <h3>Risk factors</h3><ul><li><b>สูบบุหรี่</b> สำคัญที่สุด (เสี่ยง 3–7 เท่า · 50–80% ของมะเร็ง bladder ในชาย) ${S.r}</li>
 <li><b>Aryl amines</b> (2-naphthylamine) อุตสาหกรรม · มะเร็งตามมา 15–40 ปี ${S.r}</li>
 <li><b>S. haematobium</b> (Egypt, Sudan): 70% เป็น squamous ${S.r}</li><li>Cyclophosphamide, analgesics, irradiation ${S.r}</li></ul>
 <h3>Two pathways</h3><ul><li><b>Papillary</b> (non-muscle-invasive): FGFR3/RAS/PI3K · กลับเป็นซ้ำบ่อย แต่ลุกล้ำกล้ามเนื้อเพียง ~20% ${S.r}</li>
 <li><b>Flat CIS</b>: TP53/RB เกิดเร็ว · เป็นต้นทางของ muscle-invasive ส่วนใหญ่ ${S.r}</li></ul>`});
SEC.push({id:"grading",k:"c",t:"Noninvasive urothelial tumors: grading",tools:[["gr",[["pap","Papilloma"],["punlmp","PUNLMP"],["lg","Low grade"],["hg","High grade"],["cis","CIS"]]]],leg:[],
draw(){const g=ST.gr||"lg";const r=rng(17);let b=`<rect class="lm-bg" x="0" y="0" width="640" height="320"/>`;
 const atyp={pap:0,punlmp:.05,lg:.25,hg:.8,cis:.9}[g],layers={pap:6,punlmp:10,lg:10,hg:12,cis:7}[g];
 const cellRow=(x0,y0,w,n,ang)=>{for(let k=0;k<n;k++){const yy=y0-k*9;for(let x=x0;x<x0+w;x+=11){const big=r()<atyp;b+=`<ellipse class="lm-nu" cx="${x+(big?(r()-.5)*6:0)}" cy="${yy}" rx="${big?5.5:3.2}" ry="${big?4.5:2.6}" style="opacity:${big?1:.75}"/>`}}};
 if(g==="cis"){b+=`<rect class="uro" x="0" y="200" width="640" height="${layers*9+6}" transform="translate(0,-${layers*9})"/>`;cellRow(6,196,630,layers);b+=`<rect class="lp" x="0" y="204" width="640" height="116"/>`;
  b+=T(320,40,"Flat · เซลล์ร้ายแรงในชั้น urothelium แบน · หลุดง่าย (dyscohesive)",{c:"bh"})}
 else{b+=`<rect class="lp" x="0" y="270" width="640" height="50"/>`;for(let i=0;i<4;i++){const cx=90+i*150;b+=`<path class="lp" d="M${cx-8},270 L${cx-8},60 L${cx+8},60 L${cx+8},270Z"/>`;
   b+=`<path class="uro" d="M${cx-8-layers*7},268 L${cx-8-layers*7},${70-layers*3} Q${cx},${40-layers*3} ${cx+8+layers*7},${70-layers*3} L${cx+8+layers*7},268Z" style="opacity:.9"/><path class="lp" d="M${cx-6},268 L${cx-6},62 L${cx+6},62 L${cx+6},268Z"/>`;
   for(let y=80;y<262;y+=10)for(let s of[-1,1])for(let k=1;k<=Math.min(layers,8);k++){const big=r()<atyp;b+=`<ellipse class="lm-nu" cx="${cx+s*(8+k*6.5)+(big?(r()-.5)*4:0)}" cy="${y+(big?(r()-.5)*4:0)}" rx="${big?4.4:2.4}" ry="${big?3.6:2}" style="opacity:${big?1:.7}"/>`}}}
 const info={pap:["Papilloma","≤1% · fibrovascular core บาง · urothelium ปกติ · benign · inverted papilloma ก็ benign"],punlmp:["PUNLMP","urothelium หนากว่า ไม่ค่อย atypia · recur ได้ progression น้อย"],lg:["Low-grade papillary UC","เรียงตัวเป็นระเบียบ polarity ดี · nuclei เข้มประปราย · recur · <10% ไปเป็น high grade"],hg:["High-grade papillary UC","dyscohesive, anaplasia, mitoses มาก · ลุกล้ำและเสียชีวิต ~25%"],cis:["Carcinoma in situ","cytologically malignant ในชั้นแบน · pagetoid spread · cystoscopy: mucosa แดง granular · multifocal"]}[g];
 b+=`<rect class="box ${g==="hg"||g==="cis"?"ar":g==="pap"?"":"vn"}" x="0" y="326" width="640" height="62" rx="12"/>`+T(16,352,info[0],{a:"start",c:"bh"})+T(16,374,info[1],{a:"start",c:"s"});return svg(b,"0 0 640 392")},
notes:()=>`<h3>Table 21.4 · WHO/ISUP grading</h3>${tbl(["Category","ลักษณะ"],[["Urothelial papilloma","≤1% ของเนื้องอก bladder · คนอายุน้อย · ไม่ค่อย recur"],["PUNLMP","urothelium หนาขึ้น เซลล์หนาแน่น · recur ได้ progression หายาก"],["Papillary UC, low grade","เรียงเป็นระเบียบ · atypia น้อย · recur ได้ ลุกล้ำไม่บ่อย"],["Papillary UC, high grade","dyscohesive · anaplastic · ลุกล้ำ ~25% เสียชีวิต · metastasis ไป LN, liver, lung"],["Urothelial CIS","flat · full thickness หรือ pagetoid · หลุดลงปัสสาวะ (cytology)"]])}
 <ul><li>CIS อย่างเดียว vs CIS + invasive: ไปเป็น muscle-invasive 28% vs 59% · เสียชีวิต 7% vs 45% ${S.r}</li>
 <li>Non-muscle-invasive ต้องติดตามตลอดชีวิต: cystoscopy, biopsy, urine cytology ${S.r}</li></ul>`});
SEC.push({id:"staging",k:"c",t:"Invasive carcinoma: pathologic staging",tools:[["pt",[["Ta","Ta"],["Tis","Tis"],["T1","T1"],["T2a","T2a"],["T2b","T2b"],["T3","T3"],["T4","T4"]]]],leg:[],
draw(){const s=ST.pt||"T1";let b="";const L=[["Urothelium",0,22,"uro"],["Lamina propria",22,70,"lp"],["Muscularis propria · inner",92,70,"mp"],["Muscularis propria · outer",162,70,"mp"],["Perivesical fat",232,70,"cyst"],["Adjacent organs",302,60,"box"]];
 L.forEach(([n,y,h,c])=>{b+=`<rect class="${c}" x="140" y="${40+y}" width="480" height="${h}"${c==="mp"&&n.includes("outer")?' style="opacity:.75"':""}/>`+T(132,40+y+h/2+4,n,{a:"end",c:"s"})});
 b+=`<rect class="lum" x="140" y="10" width="480" height="30" style="fill:var(--pa-cyst)"/>`+T(380,30,"Bladder lumen",{c:"s m"});
 const depth={Ta:0,Tis:0,T1:60,T2a:130,T2b:200,T3:270,T4:330}[s];
 if(s==="Ta")b+=`<path class="tum" d="M300,62 C280,20 300,0 330,8 C340,-6 380,0 370,20 C400,20 400,50 380,62Z"/>`;
 else if(s==="Tis")b+=`<rect class="tum" x="200" y="40" width="360" height="22"/>`;
 else b+=`<path class="tum" d="M290,62 C270,20 300,0 340,6 C380,0 400,30 380,62 L${380-(depth>200?0:20)},${40+depth} C360,${50+depth} 320,${50+depth} ${300+(depth>200?0:20)},${40+depth}Z"/>`;
 const D={Ta:"Noninvasive papillary carcinoma",Tis:"Carcinoma in situ: ‘flat tumor’",T1:"ลุกล้ำ lamina propria",T2a:"ลุกล้ำ muscularis propria ครึ่งใน",T2b:"ลุกล้ำ muscularis propria ครึ่งนอก",T3:"ลุกล้ำ perivesical soft tissue (a: กล้องจุลทรรศน์ · b: เห็นเป็นก้อน)",T4:"ลุกล้ำอวัยวะข้างเคียง (a: prostate, SV, uterus, vagina · b: pelvic/abdominal wall)"}[s];
 const mi=["T2a","T2b","T3","T4"].includes(s);
 b+=`<rect class="box ${mi?"ar":"vn"}" x="0" y="372" width="640" height="62" rx="12"/>`+T(16,398,`${s} · ${D}`,{a:"start",c:"bh"})+T(16,420,mi?"Muscle-invasive (20–30%) → radical cystectomy / radiation + chemotherapy":"Non-muscle-invasive (70–80%) → TURBT ± intravesical BCG · ติดตามตลอดชีวิต",{a:"start",c:"s"});return svg(b,"0 0 640 440")},
notes:()=>`<h3>Table 21.5</h3>${tbl(["Stage","นิยาม"],[["Ta","Noninvasive papillary"],["Tis","CIS (flat)"],["T1","Lamina propria"],["T2a / T2b","Muscularis propria ครึ่งใน / ครึ่งนอก"],["T3a / T3b","Perivesical tissue: microscopic / macroscopic"],["T4a / T4b","Prostatic stroma, SV, uterus, vagina / pelvic, abdominal wall"]])}
 <ul><li>ตัวแปรสำคัญที่สุดคือ <b>muscle-invasive หรือไม่</b> · non-muscle-invasive (Ta, Tis, T1) = 70–80% ${S.r}</li>
 <li>อาการพบบ่อยที่สุด: <b>painless hematuria</b> · อาจมี frequency, urgency, dysuria · อุด ureteral orifice → hydronephrosis ${S.r}</li>
 <li>Non-muscle-invasive: TURBT + intravesical <b>BCG</b> (กระตุ้น immune response) ${S.r}</li><li>Metastatic: บางรายตอบสนองต่อ <b>immune checkpoint inhibitors</b> ${S.r}</li></ul>
 <div class="pearl">เลือก stage ด้านบนเพื่อดูความลึกที่ก้อนลงไป</div>`});
SEC.push({id:"othertum",k:"c",t:"Other bladder tumors",leg:[],
draw:()=>cards([["Squamous cell carcinoma","3–7% ในสหรัฐ · พบมากในถิ่น schistosomiasis · chronic irritation · มักลุกล้ำ","ar"],["Adenocarcinoma","พบน้อย · จาก urachal remnant หรือ intestinal metaplasia","gl"],["Small-cell carcinoma","เหมือนของปอด · TP53 + RB loss · aggressive","ar"],["Leiomyoma","benign mesenchymal ที่พบบ่อยที่สุด","" ],["Embryonal rhabdomyosarcoma","sarcoma ในเด็ก · sarcoma botryoides (พวงองุ่น)","vn"],["Leiomyosarcoma","sarcoma ที่พบบ่อยที่สุดในผู้ใหญ่","vn"],["Secondary","ลามตรงจาก cervix, uterus, prostate, rectum · lymphoma","" ]]),
notes:()=>`<ul><li>SCC แท้เกิดจาก keratinizing dysplasia/CIS · mixed urothelial + squamous พบบ่อยกว่า SCC แท้ ${S.r}</li>
 <li>Inflammatory myofibroblastic tumor และ sarcomatoid carcinoma พบบ่อยกว่า sarcoma แท้ ${S.r}</li>
 <li>Urothelial variants: nested, micropapillary, plasmacytoid, sarcomatoid, lymphoepithelioma-like (Table 21.3) ${S.r}</li></ul>`});

SEC.push({id:"urethra",k:"d",t:"Urethra: inflammation & tumors",leg:[],
draw:()=>cards([["Urethritis","gonococcal vs nongonococcal (Chlamydia, Mycoplasma) · reactive arthritis (+conjunctivitis)","vn"],["Urethral caruncle","หญิงสูงอายุ · ติ่งแดงเจ็บที่ meatus · granulation tissue · ผ่าตัดหาย","" ],["Benign tumors","squamous papilloma, urothelial papilloma, inverted papilloma, condyloma","" ],["Urethral carcinoma","พบน้อย · proximal: urothelial · distal: squamous (HPV) · adenocarcinoma พบในหญิง","ar"]]),
notes:()=>`<ul><li>Nongonococcal: <b>Chlamydia trachomatis</b> 25–60% ในชาย ~20% ในหญิง · Ureaplasma · มักมาพร้อม cystitis (หญิง) หรือ prostatitis (ชาย) ${S.r}</li>
 <li>Urethritis เป็นส่วนหนึ่งของ <b>reactive arthritis</b> (arthritis, conjunctivitis, urethritis) ${S.r}</li>
 <li><b>Urethral caruncle</b>: inflammatory lesion ที่ meatus · ผิวขรุขระมีเลือดออกง่าย ${S.r}</li>
 <li>Proximal urethra → urothelial carcinoma · distal → squamous cell carcinoma (HPV-related) ${S.r}</li></ul>
 <div class="pearl">Male genital (Robbins Ch 21 ส่วนหลัง) และ female genital (Ch 22) อยู่ในบท Reproductive</div>`});

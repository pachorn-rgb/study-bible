/* Renal Physiology II · Tubular transport & hormones — First Aid order, Guyton sections + FA-only topics */
//@include _renal-guyton-base.js
//@include _renal-boron.js
Object.assign(GN,{a:"Nephron transport",b:"Tubular defects",c:"Hormones & the kidney",d:"Concentration & dilution"});
(()=>{const G={transport:"a",pct:"a",loop:"a",distal:"a",segments:"a",tubular:"b",raas:"c",adh:"c",regulation:"c",volume:"c",
  dilute:"d",concreq:"d",countercurrent:"d",urea:"d",concentrate:"d"};
 const M={transport:"Transport & Tm (glucose)",pct:"Proximal tubule",loop:"Loop of Henle",distal:"Distal tubule & CD",segments:"Where things are reabsorbed",tubular:"Tubular disorders",
  raas:"RAAS · ANP",adh:"ADH & thirst",regulation:"Regulation of reabsorption",volume:"Pressure natriuresis",dilute:"Dilute urine",concreq:"Concentrated urine",countercurrent:"Countercurrent",urea:"Urea & vasa recta",concentrate:"Free water clearance"};
 const m=new Map(SEC.map(s=>[s.id,s]));SEC.length=0;Object.keys(G).forEach(id=>{const s=m.get(id);s.k=G[id];s.mm=M[id];SEC.push(s)})})();

/* ---------- First Aid topics not covered by the Guyton sections ---------- */
SEC.splice(SEC.findIndex(s=>s.id==="tubular")+1,0,{id:"features",k:"b",t:"Features of renal disorders",mm:"Features compared",leg:[],
 draw:()=>{const R=[["SIADH","–","–","–","↓","↓"],["Primary hyperaldosteronism","↑","↓","↑","↓","↑"],["Renin-secreting tumor","↑","↓","↑","↑","↑"],["Bartter","–","↓","↑","↑","↑"],["Gitelman","–","↓","↑","↑","↑"],["Liddle · SAME","↑","↓","↑","↓","↓"]];
  const H=["","BP","K⁺","pH","Renin","Aldo"],x=[18,268,338,408,478,560];let b=`<rect x="8" y="8" width="624" height="${44+R.length*40}" rx="14" style="fill:var(--sb-surface);stroke:var(--sb-line)"/>`;
  H.forEach((h,i)=>b+=T(x[i]+(i?24:0),34,h,{a:i?"middle":"start",c:"bh"}));
  const col=v=>v==="↑"?"#D9455F":v==="↓"?"#3E7CC9":"var(--sb-muted)";
  R.forEach((r,j)=>{const y=70+j*40;b+=`<path d="M18,${y-22} H622" style="stroke:var(--sb-line)"/>`+T(18,y,r[0],{a:"start",c:"b"});r.slice(1).forEach((v,i)=>b+=`<circle cx="${x[i+1]+24}" cy="${y-4}" r="13" style="fill:${col(v)};opacity:${v==="–"?.15:.9}"/>`+`<text x="${x[i+1]+24}" y="${y+1}" text-anchor="middle" style="font:800 14px var(--sb-font);fill:${v==="–"?"var(--sb-muted)":"#fff"}">${v}</text>`)});
  return svg(b,`0 0 640 ${60+R.length*40}`)},
 notes:()=>`<ul><li>SIADH: น้ำเกิน → volume ขยาย → renin ต่ำ, aldosterone ปกติหรือต่ำ · ความดันและ K⁺ มักปกติ ${S.x}</li>
<li>Bartter (คล้ายกิน loop diuretic) vs Gitelman (คล้ายกิน thiazide): ทั้งคู่ K⁺ ต่ำ, alkalosis, renin–aldosterone สูง, ความดันปกติ · แยกด้วย <b>Ca²⁺ ในปัสสาวะ</b>: Bartter สูง · Gitelman ต่ำ และ Mg²⁺ ในเลือดต่ำ ${S.x}</li>
<li>Liddle (ENaC ทำงานเกิน) และ SAME (cortisol กระตุ้น mineralocorticoid receptor ได้เพราะ 11β-HSD2 บกพร่อง หรือกินชะเอมมาก): ความดันสูง K⁺ ต่ำ แต่ <b>renin และ aldosterone ต่ำ</b> ${S.x}</li>
<li>Primary hyperaldosteronism: aldosterone สูง renin ต่ำ · renin-secreting tumor: ทั้งคู่สูง ${S.x}</li></ul>`});

SEC.push({id:"endofx",k:"c",t:"Kidney endocrine functions & JGA",mm:"Endocrine functions · JGA",leg:[],
 draw:()=>tbl(["Hormone","What it does"],[
 ["Renin · JG cells","modified smooth muscle ของ afferent arteriole · หลั่งเมื่อความดันไตต่ำ, NaCl ที่ macula densa ต่ำ, β₁"],
 ["Macula densa","เซลล์ที่ปลาย thick ascending limb ต่อกับ DCT ตอนต้น · วัด NaCl ที่ไหลผ่าน → TGF และ renin"],
 ["Erythropoietin","interstitial cells รอบ peritubular capillary · หลั่งเมื่อขาด O₂"],
 ["Calcitriol (1,25-(OH)₂D₃)","1α-hydroxylase ใน PCT · กระตุ้นด้วย PTH · ↑ Ca²⁺ และ PO₄ absorption"],
 ["Prostaglandins","ขยาย afferent arteriole รักษา RBF · NSAIDs ยับยั้ง → AKI เมื่อเลือดไปไตน้อย"],
 ["Dopamine","PCT สร้าง · ขนาดต่ำขยายหลอดเลือดไต และเพิ่ม natriuresis"]]),
 notes:()=>`<ul><li><b>JGA</b> = JG cells + macula densa + extraglomerular mesangial cells · คุม GFR ผ่าน tubuloglomerular feedback และหลั่ง renin ${S.g}</li>
<li>CKD → EPO ต่ำ (ซีด) และ calcitriol ต่ำ (Ca²⁺ ต่ำ → secondary hyperparathyroidism) ${S.x}</li>
<li>NSAIDs + ACE inhibitor ในคนที่เลือดไปไตน้อย: afferent หดเพราะขาด PG และ efferent ขยายเพราะขาด Ang II → GFR ตก ${S.x}</li></ul>`});

const EXTRA=["dilute","concreq","countercurrent","urea","concentrate","volume"];
applyBoron();

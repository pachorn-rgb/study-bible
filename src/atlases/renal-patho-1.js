/* Renal Pathology I · Glomerular disease — First Aid order; sections from Robbins Ch 20 and Harrison Ch 319/326 + FA-only topics */
(()=>{
//@include _renal-patho-helpers.js
//@include _renal-robbins20.js
})();
(()=>{
//@include _renal-patho-helpers.js
//@include _renal-harrison.js
})();

SEC.push({id:"casts",k:"a",t:"Urinary casts & glomerular nomenclature",leg:[],
 draw:()=>tbl(["Cast","What it means"],[
 ["RBC casts","glomerulonephritis (nephritic) · ภาวะ hypertensive emergency"],
 ["WBC casts","pyelonephritis, acute interstitial nephritis, transplant rejection"],
 ["Granular (muddy brown)","acute tubular necrosis"],
 ["Fatty casts · oval fat bodies","nephrotic syndrome (Maltese cross ใต้ polarized light)"],
 ["Waxy casts","CKD ระยะท้าย (tubule ฝ่อ ปัสสาวะไหลช้า)"],
 ["Hyaline casts","ไม่จำเพาะ · ปัสสาวะเข้มข้น, หลังออกกำลัง, ใช้ยาขับปัสสาวะ"]]),
 notes:()=>`<ul><li>Cast = โปรตีน (Tamm–Horsfall/uromodulin) จับตัวใน tubule · มี cast แปลว่าปัญหามาจาก<b>ไต</b> ไม่ใช่กระเพาะปัสสาวะ ${S.x}</li>
<li>WBC ในปัสสาวะโดยไม่มี cast → cystitis (ทางเดินปัสสาวะส่วนล่าง) ${S.x}</li></ul>
<h3>คำเรียกรอยโรคของ glomerulus</h3><ul><li><b>Focal</b> = ไม่ถึงครึ่งของ glomeruli · <b>diffuse</b> = เกินครึ่ง ${S.r}</li><li><b>Segmental</b> = บางส่วนของ glomerulus หนึ่ง · <b>global</b> = ทั้ง glomerulus ${S.r}</li>
<li><b>Proliferative</b> = เซลล์เพิ่ม (มักเป็น nephritic) · <b>membranous</b> = GBM หนา · <b>crescentic</b> = เซลล์ parietal + macrophage + fibrin ใน Bowman space ${S.r}</li></ul>`});

Object.assign(GN,{a:"Glomerular disease basics",b:"Nephritic syndrome",c:"Nephrotic syndrome",d:"Systemic disease & the glomerulus",e:"Management"});
regroup({casts:"a",syndromes:"a","ap-syn":"a","gd-pat":"a","gd-prot":"a",immune:"a",glomresp:"a",progression:"a",
 psgn:"b",rpgn:"b",iga:"b",alport:"b",mpgn:"b",
 nephrotic:"c",mcd:"c",fsgs:"c",membranous:"c",diabetic:"c",
 lupus:"d",systemic:"d","gd-tx":"e","ap-hem":"e"},
 {casts:"Casts & nomenclature",syndromes:"Glomerular syndromes","ap-syn":"Nephritic vs nephrotic","gd-pat":"Clinical patterns","gd-prot":"Measuring proteinuria",immune:"Immune mechanisms",glomresp:"Glomerular responses",progression:"Podocytes & progression",
  psgn:"Poststreptococcal GN",rpgn:"RPGN (crescentic)",iga:"IgA nephropathy",alport:"Alport syndrome",mpgn:"MPGN · C3G",nephrotic:"Nephrotic: causes",mcd:"Minimal change",fsgs:"FSGS",membranous:"Membranous",diabetic:"Diabetic nephropathy",
  lupus:"Lupus nephritis",systemic:"Amyloid & other systemic","gd-tx":"Treatment by disease","ap-hem":"Hematuria"});
const EXTRA=["progression","gd-prot","gd-tx","ap-hem"];

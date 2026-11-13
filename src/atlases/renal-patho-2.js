/* Renal Pathology II · Urinary tract: stones, obstruction, infection, cysts & tumors — First Aid order;
   sections from Robbins Ch 20–21 and Harrison Ch 327/330/331 + FA-only topics */
(()=>{
//@include _renal-patho-helpers.js
//@include _renal-robbins20.js
})();
(()=>{
//@include _renal-patho-helpers.js
//@include _renal-robbins21.js
})();
(()=>{
//@include _renal-patho-helpers.js
//@include _renal-harrison.js
})();

SEC.push({id:"incont",k:"c",t:"Urinary incontinence",leg:[],
 draw:()=>cards([["Stress","ความดันในช่องท้องสูง (ไอ จาม ยกของ) · หูรูดอ่อน/ท่อปัสสาวะเคลื่อน · หลังคลอด อ้วน","vn"],["รักษา stress","ฝึกกล้ามเนื้ออุ้งเชิงกราน (Kegel), ลดน้ำหนัก, pessary, ผ่าตัด sling",""],["Urge","detrusor ทำงานเกิน · ปวดแล้วกลั้นไม่อยู่ · UTI ก็ทำให้เกิดได้","ar"],["รักษา urge","ฝึกการปัสสาวะ, antimuscarinic (oxybutynin), β₃ agonist (mirabegron)",""],["Overflow","ปัสสาวะออกไม่หมด → ล้นไหล · postvoid residual สูง · detrusor อ่อน (เบาหวาน) หรือทางออกตีบ (BPH)","gl"],["รักษา overflow","สวนปัสสาวะเป็นระยะ, แก้การอุดกั้น (เช่น α₁ blocker ใน BPH) · detrusor อ่อนอาจใช้ bethanechol",""]]),
 notes:()=>`<ul><li>Mixed incontinence = stress + urge พบบ่อยในหญิงสูงอายุ ${S.x}</li><li>ทุกชนิดเริ่มด้วยปรับพฤติกรรมและฝึกกล้ามเนื้ออุ้งเชิงกราน · หญิงวัยหมดประจำเดือนอาจใช้ estrogen ทาเฉพาะที่ช่วยทั้ง stress และ urge ${S.fa2}</li><li>ตรวจปัสสาวะทุกรายเพื่อหา UTI และวัด postvoid residual เมื่อสงสัย overflow ${S.x}</li><li>ยาที่ทำให้ปัสสาวะคั่ง (anticholinergic, opioid, decongestant) อาจทำให้เกิด overflow ${S.x}</li></ul>`});

SEC.push({id:"ic",k:"d",t:"Interstitial cystitis (bladder pain syndrome)",leg:[],
 draw:()=>cards([["อาการ","ปวดกระเพาะปัสสาวะเรื้อรัง > 6 สัปดาห์ · ปวดมากขึ้นเมื่อกระเพาะเต็ม · ดีขึ้นหลังปัสสาวะ","vn"],["ปัจจัยกระตุ้น","อาหารบางชนิด (กาแฟ ส้ม เผ็ด), แอลกอฮอล์, เพศสัมพันธ์, ประจำเดือน, ความเครียด",""],["ตรวจ","urinalysis และเพาะเชื้อปกติ · วินิจฉัยทางคลินิกหลังตัดสาเหตุอื่น","gl"],["รักษา","เลี่ยงสิ่งกระตุ้น ปรับพฤติกรรม · ไม่ดีขึ้นใช้ amitriptyline หรือ pentosan polysulfate · ต่อไปจึงพิจารณายาหยอดเข้ากระเพาะปัสสาวะ",""]]),
 notes:()=>`<ul><li>พบบ่อยในหญิง และสัมพันธ์กับกลุ่มอาการปวดเรื้อรังอื่น (fibromyalgia, IBS) และโรคทางจิตเวช ${S.fa2}</li><li>ต่างจาก cystitis จากเชื้อ: ไม่มีไข้ ไม่มี pyuria เพาะเชื้อไม่ขึ้น ${S.fa2}</li></ul>`});

Object.assign(GN,{a:"Kidney stones",b:"Obstruction & hydronephrosis",c:"Urinary incontinence",d:"Urinary tract infection",e:"Cysts & congenital disorders",f:"Tumors"});
regroup({stones:"a","st-type":"a","st-risk":"a","st-mx":"a",
 obstruction:"b","uo-cause":"b","uo-phys":"b","uo-dx":"b",ureterobs:"b",
 incont:"c",cystitis:"d",pyelo:"d",ic:"d",urethra:"d",
 cystic:"e","pkd-ad":"e","pkd-ar":"e","pkd-oth":"e","cb-inh":"e",congenital:"e",bladdercong:"e",
 rcc:"f",benign:"f",wilms:"f",urothelial:"f",grading:"f",staging:"f",othertum:"f",metaplasia:"f",ureter:"f"},
 {stones:"Urolithiasis","st-type":"Stone types & urine pH","st-risk":"Risk factors & diet","st-mx":"Colic & prevention",obstruction:"Hydronephrosis","uo-cause":"Causes by level","uo-phys":"Pathophysiology","uo-dx":"Diagnosis & relief",ureterobs:"Ureteral obstruction",
  incont:"Incontinence types",cystitis:"Cystitis",ic:"Interstitial cystitis",pyelo:"Pyelonephritis",urethra:"Urethra",cystic:"Renal cysts","pkd-ad":"ADPKD","pkd-ar":"ARPKD","pkd-oth":"Other inherited cystic","cb-inh":"Inherited tubular disorders",congenital:"Kidney anomalies",bladdercong:"Bladder anomalies",
  rcc:"Renal cell carcinoma",benign:"Oncocytoma · angiomyolipoma",wilms:"Wilms tumor",urothelial:"Urothelial carcinoma",grading:"Grading",staging:"Staging",othertum:"SCC & other bladder tumors",metaplasia:"Metaplastic lesions",ureter:"Ureter lesions"});
const EXTRA=["st-mx","uo-dx","ureterobs","urethra","pkd-oth","cb-inh","congenital","bladdercong","grading","staging","metaplasia","ureter"];

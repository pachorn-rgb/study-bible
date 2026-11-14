/* Renal Pathology III · Kidney injury & failure — First Aid order;
   sections from Robbins Ch 20 and Harrison Ch 319/321–325/328/329 + FA-only topics */
(()=>{
//@include _renal-patho-helpers.js
//@include _renal-robbins20.js
})();
(()=>{
//@include _renal-patho-helpers.js
//@include _renal-harrison.js
})();

SEC.push({id:"papnec",k:"b",t:"Renal papillary & diffuse cortical necrosis",leg:[],
 draw:()=>tbl(["Lesion or cause","Detail"],[
 ["Papillary necrosis","papilla ขาดเลือดแล้วหลุด → ปัสสาวะเป็นเลือด, ปวดสีข้าง, อาจอุดท่อไต"],
 ["Causes of papillary necrosis","sickle cell disease/trait, pyelonephritis เฉียบพลัน, analgesics (NSAIDs), เบาหวาน"],
 ["Diffuse cortical necrosis","cortex ทั้งสองข้างขาดเลือดทั่ว · หลอดเลือดหดเกร็ง + DIC"],
 ["Causes of cortical necrosis","ภาวะแทรกซ้อนทางสูติกรรม (รกลอกตัวก่อนกำหนด), septic shock"]]),
 notes:()=>`<ul><li>Medulla ส่วน papilla ได้เลือดน้อยอยู่แล้ว จึงขาดเลือดง่ายเมื่อมีปัจจัยร่วม ${S.x}</li><li>Papilla ที่หลุดอาจเห็นเป็นชิ้นเนื้อในปัสสาวะ หรือ "ring sign" ในภาพถ่ายรังสี ${S.x}</li><li>Diffuse cortical necrosis ทำให้ไตวายเฉียบพลันที่มักไม่ฟื้น ${S.x}</li></ul>`});

Object.assign(GN,{a:"Acute kidney injury",b:"Interstitial & tubular injury",c:"Chronic kidney disease",d:"Renovascular disease",e:"Dialysis",f:"Kidney transplant"});
regroup({"ap-aki":"a","aki-def":"a","aki-cause":"a","aki-dx":"a","aki-mx":"a",
 "tin-ain":"b",tin:"b",atn:"b",papnec:"b","tin-imm":"b","tin-chronic":"b",
 "ckd-stage":"c","ckd-lyte":"c","ckd-mbd":"c","ckd-sys":"c","ckd-slow":"c",
 nephrosclerosis:"d",tma:"d","tma-types":"d","tma-ssc":"d",
 hd:"e",hdcx:"e",pd:"e",ivn:"e","tx-imm":"f","tx-drug":"f","tx-inf":"f"},
 {"ap-aki":"Prerenal · intrinsic · postrenal","aki-def":"Definition & staging","aki-cause":"Causes","aki-dx":"Urinalysis & FENa","aki-mx":"Complications & management",
  "tin-ain":"Acute interstitial nephritis",tin:"Drug-induced TIN",atn:"Acute tubular necrosis",papnec:"Papillary & cortical necrosis","tin-imm":"Immune-mediated TIN","tin-chronic":"Chronic TIN",
  "ckd-stage":"CKD staging","ckd-lyte":"Electrolytes in CKD","ckd-mbd":"Renal osteodystrophy (CKD-MBD)","ckd-sys":"Consequences of renal failure","ckd-slow":"Slowing progression",
  nephrosclerosis:"Hypertensive nephrosclerosis",tma:"Vascular disease","tma-types":"Thrombotic microangiopathies","tma-ssc":"Scleroderma crisis · RVT",
  hd:"Hemodialysis",hdcx:"HD complications",pd:"Peritoneal dialysis",ivn:"Dialysis access","tx-imm":"Rejection","tx-drug":"Immunosuppression","tx-inf":"Infection & cancer after Tx"});
const EXTRA=["aki-mx","tin-imm","tin-chronic","ckd-slow","hd","hdcx","pd","ivn","tx-imm","tx-drug","tx-inf"];

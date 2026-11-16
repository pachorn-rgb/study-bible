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
 draw:()=>tbl(["Type","Mechanism and treatment"],[
 ["Stress","ความดันในช่องท้องสูง (ไอ จาม ยกของ) · หูรูดอ่อน/ท่อปัสสาวะเคลื่อน · หลังคลอด อ้วน"],
 ["Treating stress incontinence","ฝึกกล้ามเนื้ออุ้งเชิงกราน (Kegel), ลดน้ำหนัก, pessary, ผ่าตัด sling"],
 ["Urge","detrusor ทำงานเกิน · ปวดแล้วกลั้นไม่อยู่ · UTI ก็ทำให้เกิดได้"],
 ["Treating urge incontinence","ฝึกการปัสสาวะ, antimuscarinic (oxybutynin), β₃ agonist (mirabegron)"],
 ["Overflow","ปัสสาวะออกไม่หมด → ล้นไหล · postvoid residual สูง · detrusor อ่อน (เบาหวาน) หรือทางออกตีบ (BPH)"],
 ["Treating overflow incontinence","สวนปัสสาวะเป็นระยะ, แก้การอุดกั้น (เช่น α₁ blocker ใน BPH) · detrusor อ่อนอาจใช้ bethanechol"]]),
 notes:()=>`<ul><li>Mixed incontinence = stress + urge พบบ่อยในหญิงสูงอายุ ${S.x}</li><li>ทุกชนิดเริ่มด้วยปรับพฤติกรรมและฝึกกล้ามเนื้ออุ้งเชิงกราน · หญิงวัยหมดประจำเดือนอาจใช้ estrogen ทาเฉพาะที่ช่วยทั้ง stress และ urge ${S.fa2}</li><li>ตรวจปัสสาวะทุกรายเพื่อหา UTI และวัด postvoid residual เมื่อสงสัย overflow ${S.x}</li><li>ยาที่ทำให้ปัสสาวะคั่ง (anticholinergic, opioid, decongestant) อาจทำให้เกิด overflow ${S.x}</li></ul>`});

SEC.push({id:"ic",k:"d",t:"Interstitial cystitis (bladder pain syndrome)",leg:[],
 draw:()=>tbl(["Aspect","Detail"],[
 ["Symptoms","ปวดกระเพาะปัสสาวะเรื้อรัง > 6 สัปดาห์ · ปวดมากขึ้นเมื่อกระเพาะเต็ม · ดีขึ้นหลังปัสสาวะ"],
 ["Triggers","อาหารบางชนิด (กาแฟ ส้ม เผ็ด), แอลกอฮอล์, เพศสัมพันธ์, ประจำเดือน, ความเครียด"],
 ["Investigation","urinalysis และเพาะเชื้อปกติ · วินิจฉัยทางคลินิกหลังตัดสาเหตุอื่น"],
 ["Treatment","เลี่ยงสิ่งกระตุ้น ปรับพฤติกรรม · ไม่ดีขึ้นใช้ amitriptyline หรือ pentosan polysulfate · ต่อไปจึงพิจารณายาหยอดเข้ากระเพาะปัสสาวะ"]]),
 notes:()=>`<ul><li>พบบ่อยในหญิง และสัมพันธ์กับกลุ่มอาการปวดเรื้อรังอื่น (fibromyalgia, IBS) และโรคทางจิตเวช ${S.fa2}</li><li>ต่างจาก cystitis จากเชื้อ: ไม่มีไข้ ไม่มี pyuria เพาะเชื้อไม่ขึ้น ${S.fa2}</li></ul>`});

/* B9.2.3 acute urinary retention — กลุ่มที่ 1 และ 2 in the criteria, so a new doctor has to
   recognise and relieve it. It was the one disease named in B9 that this chapter did not have. */
SEC.push({id:"retention",k:"c",t:"Acute urinary retention",mm:"Acute retention",leg:[],
 draw:()=>psvg(
  `<ellipse class="box ar" cx="250" cy="128" rx="118" ry="94"/>
   ${T(250,120,"Bladder",{c:"h"})}${T(250,146,"tense, 600–1,000 mL",{c:"s"})}
   <rect class="box" x="150" y="236" width="56" height="22" rx="8"/>${T(178,251,"pubis",{c:"s m"})}
   <path d="M250,222 L250,300" style="stroke:var(--s-h2o);stroke-width:14;fill:none;opacity:.45"/>
   <circle class="box vn" cx="250" cy="252" r="27"/>${T(250,256,"prostate",{c:"s"})}
   ${blk(250,294,"")}${T(250,324,"not a drop passes",{c:"bad"})}
   <path class="ld" d="M370,128 L394,128"/>
   ${T(400,84,"sudden and painful",{a:"start",c:"bh"})}
   ${T(400,106,"unable to pass urine at all",{a:"start",c:"s"})}
   ${T(400,138,"bladder palpable and dull",{a:"start",c:"s"})}
   ${T(400,160,"to percussion above the pubis",{a:"start",c:"s"})}
   ${T(400,200,"catheterise first",{a:"start",c:"bh"})}
   ${T(400,222,"the diagnosis is clinical",{a:"start",c:"s"})}`,
  "0 0 640 340"),
 notes:()=>mc("B9.2.3",1)+`<ul>
<li><b>นิยาม</b> — ปัสสาวะไม่ออกโดยเฉียบพลันทั้งที่กระเพาะปัสสาวะมีน้ำปัสสาวะอยู่เต็ม ต่างจาก anuria ที่ไตไม่สร้างปัสสาวะและกระเพาะปัสสาวะว่าง การคลำและเคาะเหนือหัวหน่าวจึงแยกสองภาวะนี้ออกจากกันได้ที่ข้างเตียง ${S.x}</li>
<li><b>สาเหตุที่พบบ่อยที่สุดคือ benign prostatic hyperplasia</b> — ต่อมลูกหมากโตเบียดท่อปัสสาวะจนเหลือปัสสาวะค้าง ผู้ป่วยมักมีอาการนำมาก่อนคือปัสสาวะบ่อย ตื่นปัสสาวะกลางคืน เริ่มถ่ายยาก ปัสสาวะไหลอ่อน และหยดเมื่อสุด แล้ววันหนึ่งจึงเกิดการอุดกั้นเฉียบพลันที่ต้องสวนปัสสาวะฉุกเฉิน ${S.r}</li>
<li><b>สาเหตุอื่น</b> — urethral stricture · นิ่วหรือลิ่มเลือดอุดท่อปัสสาวะ · มะเร็งต่อมลูกหมาก · ท้องผูกรุนแรง · ภาวะทางระบบประสาทที่ทำให้ detrusor ไม่หดตัว เช่น เบาหวานระยะยาว ไขสันหลังบาดเจ็บ ${S.h}</li>
<li><b>ยาเป็นสาเหตุที่มองข้ามบ่อย</b> — anticholinergic และยาแก้แพ้รุ่นเก่าลดการหดตัวของ detrusor ส่วน α-agonist ในยาแก้คัดจมูกเพิ่มแรงต้านที่คอกระเพาะปัสสาวะ opioid ก็ทำให้เกิดได้ · ถามประวัติยาก่อนเสมอ เพราะหยุดยาแล้วอาจหายเอง ${S.x}</li>
<li><b>การรักษาคือการระบายปัสสาวะทันที</b> ด้วย urethral catheter และถ้าใส่ไม่ได้จึงเจาะ suprapubic · บันทึกปริมาณที่ระบายออกไว้เสมอ เพราะเป็นทั้งการยืนยันการวินิจฉัยและตัวบอกความเสี่ยงของภาวะแทรกซ้อน ${S.r}</li>
<li><b>หลังระบายต้องเฝ้าสองอย่าง</b> — <b>post-obstructive diuresis</b> ที่ปัสสาวะออกมากจนขาดน้ำและเกลือแร่ และ <b>haematuria ex vacuo</b> จากการที่กระเพาะปัสสาวะยุบเร็ว · ตรวจ creatinine ทุกรายเพราะการอุดกั้นสองข้างทำให้เกิด postrenal AKI ได้ ${S.h}</li>
<li>เมื่อพ้นภาวะเฉียบพลันจึงแก้ที่ต้นเหตุ — BPH เริ่มด้วย <b>α₁-blocker</b> ก่อนลองถอดสายสวน และใช้ <b>5α-reductase inhibitor</b> เมื่อต่อมโตมาก ${S.r}</li></ul>`});

Object.assign(GN,{a:"Kidney stones",b:"Obstruction & hydronephrosis",c:"Urinary incontinence",d:"Urinary tract infection",e:"Cysts & congenital disorders",f:"Tumors"});
regroup({stones:"a","st-type":"a","st-risk":"a","st-mx":"a",
 obstruction:"b","uo-cause":"b","uo-phys":"b","uo-dx":"b",ureterobs:"b",
 incont:"c",retention:"c",cystitis:"d",pyelo:"d",ic:"d",urethra:"d",
 cystic:"e","pkd-ad":"e","pkd-ar":"e","pkd-oth":"e","cb-inh":"e",congenital:"e",bladdercong:"e",
 rcc:"f",benign:"f",wilms:"f",urothelial:"f",grading:"f",staging:"f",othertum:"f",metaplasia:"f",ureter:"f"},
 {stones:"Urolithiasis","st-type":"Stone types & urine pH","st-risk":"Risk factors & diet","st-mx":"Colic & prevention",obstruction:"Hydronephrosis","uo-cause":"Causes by level","uo-phys":"Pathophysiology","uo-dx":"Diagnosis & relief",ureterobs:"Ureteral obstruction",
  incont:"Incontinence types",cystitis:"Cystitis",ic:"Interstitial cystitis",pyelo:"Pyelonephritis",urethra:"Urethra",cystic:"Renal cysts","pkd-ad":"ADPKD","pkd-ar":"ARPKD","pkd-oth":"Other inherited cystic","cb-inh":"Inherited tubular disorders",congenital:"Kidney anomalies",bladdercong:"Bladder anomalies",
  rcc:"Renal cell carcinoma",benign:"Oncocytoma · angiomyolipoma",wilms:"Wilms tumor",urothelial:"Urothelial carcinoma",grading:"Grading",staging:"Staging",othertum:"SCC & other bladder tumors",metaplasia:"Metaplastic lesions",ureter:"Ureter lesions"});
const EXTRA=["st-mx","uo-dx","ureterobs","urethra","pkd-oth","cb-inh","congenital","bladdercong","grading","staging","metaplasia","ureter"];

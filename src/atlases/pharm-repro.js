/* ================= Reproductive pharmacology ================= */
function hpgMap(){let b="";const row=(x,y,lab,key)=>glow(x,y,key)+rec(x,y,"",true)+T(x+16,y+4,lab,{a:"start",c:"s"});
 b+=panel(10,10,740,170,"HYPOTHALAMUS → PITUITARY");
 b+=nbh(110,70,150,32,"GnRH receptor","",["gnrh","degar"],"cellb")+arr("M186,70 L300,70")+nb(380,70,150,32,"LH · FSH")+arr("M456,70 L560,70")+nb(640,70,160,32,"Ovary · Testis","");
 b+=pill(110,120,"Leuprolide (continuous)","ag","gnrh")+pill(110,148,"Degarelix","bl","degar")+pill(380,120,"Clomiphene (↑ LH/FSH)","bl","clom")+T(380,150,"ปิด negative feedback ของ estrogen",{c:"s m"});
 if(on("clom"))b+=glow(380,70,"clom",30);
 b+=panel(10,190,740,180,"STEROID SYNTHESIS & RECEPTORS");
 b+=row(36,236,"CYP17","cyp17")+pill(282,236,"Abiraterone · Ketoconazole","inh","cyp17");
 b+=row(36,274,"Aromatase","arom")+pill(296,274,"Anastrozole · Letrozole","inh","arom");
 b+=row(36,312,"5α-reductase","5ar")+pill(282,312,"Finasteride · Dutasteride","inh","5ar");
 b+=row(36,350,"AR (antagonists)","ar")+pill(282,350,"Flutamide · Spironolactone","bl","ar");
 b+=row(410,236,"ER","er")+pill(630,224,"Tamoxifen · Raloxifene","mod","er")+pill(630,250,"Ethinyl estradiol","ag","ere");
 b+=row(410,300,"PR","pr")+pill(630,288,"Progestins","ag","pr")+pill(630,314,"Mifepristone · Ulipristal","bl","prb");
 b+=row(410,350,"AR (agonists)","ara")+pill(630,350,"Testosterone · Danazol","ag","ara");
 b+=panel(10,380,740,130,"END ORGANS");
 b+=row(36,426,"α₁A (prostate)","a1a")+pill(250,426,"Tamsulosin","bl","a1a");
 b+=row(36,466,"PDE5 (corpus cavernosum)","pde5")+pill(286,466,"Sildenafil · Tadalafil","inh","pde5");
 b+=row(410,426,"Uterine contraction","ut")+pill(630,414,"Oxytocin · Misoprostol","ag","ut")+pill(630,440,"Tocolytics: nifedipine…","bl","toco");
 b+=row(410,476,"Hair follicle","hair")+pill(630,476,"Minoxidil · Finasteride","mod","hair");
 if(on("ere"))b+=glow(410,236,"ere");if(on("prb"))b+=glow(410,300,"prb");if(on("toco"))b+=glow(410,426,"toco");
 return psvg(b,"0 0 760 520")}
const RM=MAPOF(hpgMap),MT=[["all","Show all drugs"]];

Object.assign(GN,{a:"Control of reproductive hormones",b:"Estrogens, SERMs & aromatase inhibitors",c:"Progestins & contraception",d:"Androgens & antiandrogens",e:"Pregnancy & labor",f:"Urology & sexual function"});

SEC.push({id:"hpg",k:"a",t:"Control of reproductive hormones",mm:"HPG drug map",drugs:"",act:[],tools:MT,leg:["ag","bl","inh","mod"],draw:RM(["gnrh","degar","clom","cyp17","arom","5ar","ar","er","ere","pr","prb","ara","a1a","pde5","ut","toco","hair"]),
notes:()=>`<ul><li>GnRH แบบ <b>pulsatile</b> → LH/FSH ↑ · แบบ <b>ต่อเนื่อง</b> → receptor downregulation → LH/FSH ↓ ${S.k}</li><li>Estrogen/progesterone/testosterone ส่ง negative feedback ไป hypothalamus และ pituitary ${S.k}</li><li>Androgen → estrogen ผ่าน <b>aromatase</b> · testosterone → DHT ผ่าน <b>5α-reductase</b> ${S.k}</li></ul>`});

SEC.push({id:"gnrh",k:"a",t:"GnRH analogs & degarelix",mm:"GnRH analogs",drugs:"leuprolide · goserelin · nafarelin · degarelix · elagolix",act:["ag","bl"],tools:MT,leg:["ag","bl"],draw:RM(["gnrh","degar"]),
notes:()=>`${tbl(["ยา","กลไก","ใช้","ADR"],[["Leuprolide, goserelin, nafarelin","GnRH agonist: pulsatile = กระตุ้น · continuous = ยับยั้ง","pulsatile: infertility · continuous: prostate cancer, endometriosis, fibroids, precocious puberty","<b>tumor flare</b> ช่วงแรก (ให้ antiandrogen ร่วม), hot flashes, bone loss"],["Degarelix","GnRH antagonist","prostate cancer (ไม่มี flare)","hot flashes, injection site"],["Elagolix, relugolix","oral GnRH antagonist","endometriosis, fibroids, prostate cancer","hypoestrogenism"]])}${S.k}`});

SEC.push({id:"estrogen",k:"b",t:"Estrogens",mm:"Estrogens",drugs:"ethinyl estradiol · estradiol · conjugated estrogens",act:["ag"],tools:MT,leg:["ag"],draw:RM(["ere"]),
notes:()=>`<ul><li>จับ ER ใน nucleus ${S.k}</li><li>ใช้: hypogonadism, menopause symptoms (hot flashes, vaginal atrophy), contraception (ร่วม progestin), androgen-dependent prostate cancer ${S.k}</li><li>ADR: <b>endometrial hyperplasia/cancer</b> ถ้าไม่มี progestin · <b>VTE</b>, stroke, breast cancer · คลื่นไส้ เจ็บเต้านม · cholestasis, gallstone ${S.k}</li><li>ห้ามใน ER⁺ breast cancer, VTE history, liver disease, ครรภ์ ${S.k}</li></ul>
 <div class="pearl">Menopausal HT: ใช้ขนาดต่ำสุด ระยะสั้นสุด เพื่อคุมอาการ · มีมดลูกต้องให้ progestin ร่วม ${S.k}${S.p}</div>`});

SEC.push({id:"serm",k:"b",t:"SERMs & aromatase inhibitors",mm:"SERMs · aromatase inhibitors",drugs:"clomiphene · tamoxifen · raloxifene · anastrozole · letrozole · exemestane",act:["mod","bl","inh"],tools:MT,leg:["mod","inh"],draw:RM(["clom","er","arom"]),
notes:()=>`${tbl(["ยา","ผลต่อ ER","ใช้","ADR"],[["Clomiphene","antagonist ที่ hypothalamus → LH/FSH ↑","<b>ovulation induction</b> (PCOS)","hot flashes, ovarian enlargement, multiple gestation, ตามัว"],["Tamoxifen","antagonist เต้านม · agonist มดลูก กระดูก","ER⁺ breast cancer (รักษา/ป้องกัน)","<b>endometrial cancer</b>, VTE, hot flashes"],["Raloxifene","antagonist เต้านม มดลูก · agonist กระดูก","<b>osteoporosis</b>, ลดเสี่ยง breast cancer","VTE, hot flashes · ไม่เพิ่ม endometrial cancer"],["Anastrozole, letrozole, exemestane","ยับยั้ง aromatase","ER⁺ breast cancer หลังหมดประจำเดือน · letrozole: ovulation induction","<b>osteoporosis</b>, arthralgia"]])}${S.k}`});

SEC.push({id:"progestin",k:"c",t:"Progestins & antiprogestins",mm:"Progestins · antiprogestins",drugs:"levonorgestrel · norethindrone · medroxyprogesterone · etonogestrel · mifepristone · ulipristal",act:["ag","bl"],tools:MT,leg:["ag","bl"],draw:RM(["pr","prb"]),
notes:()=>`<h3>Progestins</h3><ul><li>จับ PR → endometrium เป็น secretory, cervical mucus ข้น, ยับยั้ง LH surge ${S.k}</li><li>ใช้: contraception, abnormal uterine bleeding, กัน endometrial hyperplasia ใน HT ${S.k}</li><li>ADR: เลือดออกกะปริดกะปรอย, น้ำหนักขึ้น · DMPA: bone loss ${S.k}</li></ul>
 <h3>Antiprogestins</h3><ul><li><b>Mifepristone</b>: PR (และ GR) antagonist → ยุติการตั้งครรภ์ (+ misoprostol) · Cushing ${S.k}</li><li><b>Ulipristal</b>: SPRM → emergency contraception ภายใน 120 ชม. ${S.k}</li></ul>`});

SEC.push({id:"contra",k:"c",t:"Contraception",mm:"Contraception",drugs:"combined OCP · progestin-only pill · DMPA · implant · copper IUD · LNG-IUD",act:[],leg:[],
draw:()=>cards([["Combined hormonal (pill, patch, ring)","estrogen + progestin → ยับยั้ง ovulation","vn"],["Progestin-only","pill, DMPA injection, etonogestrel implant, LNG-IUD","gl"],["Copper IUD","ไม่ใช่ฮอร์โมน · spermicidal อักเสบ · emergency contraception ดีที่สุด","gl"],["Emergency","copper IUD · ulipristal · levonorgestrel",""],["Surgical","tubal ligation · vasectomy",""]]),
notes:()=>`<h3>Combined OCP</h3><ul><li>ข้อดี: ลด ovarian/endometrial cancer, ลด dysmenorrhea, acne ${S.k}</li><li>ข้อห้าม: <b>สูบบุหรี่อายุ &gt;35 ปี</b>, VTE/stroke/CAD history, migraine with aura, ER⁺ breast cancer, liver disease, หลังคลอด &lt;21 วัน ${S.k}${S.p}</li><li>DI: <b>rifampin</b>, anticonvulsants (CYP3A4 inducer) ลดประสิทธิภาพ ${S.k}</li></ul>`});

SEC.push({id:"androgen",k:"d",t:"Testosterone & danazol",mm:"Androgens",drugs:"testosterone · methyltestosterone · danazol · oxandrolone",act:["ag"],tools:MT,leg:["ag"],draw:RM(["ara"]),
notes:()=>`<ul><li><b>Testosterone</b>: hypogonadism, ส่งเสริม secondary sex characteristics · anabolic ใน wasting ${S.k}</li><li>ADR: <b>LH/FSH ↓ → testicular atrophy, infertility</b>, erythrocytosis, acne, virilization ในผู้หญิง, ปิด epiphysis เร็ว, lipid เปลี่ยน · methyltestosterone: cholestasis, hepatic adenoma ${S.k}</li><li><b>Danazol</b>: synthetic androgen, partial agonist → endometriosis, hereditary angioedema · ADR: น้ำหนักขึ้น, acne, hirsutism, hepatotoxic, pseudotumor cerebri ${S.k}</li></ul>`});

SEC.push({id:"antiandrogen",k:"d",t:"Antiandrogens",mm:"Antiandrogens",drugs:"finasteride · dutasteride · flutamide · bicalutamide · enzalutamide · abiraterone · ketoconazole · spironolactone",act:["inh","bl"],tools:MT,leg:["inh","bl"],draw:RM(["cyp17","5ar","ar"]),
notes:()=>`${tbl(["ยา","กลไก","ใช้"],[["Finasteride, dutasteride","ยับยั้ง 5α-reductase → DHT ↓","<b>BPH</b>, male-pattern baldness · ADR: sexual dysfunction, teratogen (ห้ามหญิงตั้งครรภ์จับยา)"],["Flutamide, bicalutamide, enzalutamide","AR antagonist","prostate cancer (+ GnRH agonist กัน flare)"],["Abiraterone","ยับยั้ง CYP17 (17α-hydroxylase)","metastatic prostate cancer · ให้ prednisone ร่วม (mineralocorticoid excess: HTN, hypokalemia)"],["Ketoconazole","ยับยั้ง CYP17, CYP11","prostate cancer, Cushing"],["Spironolactone","AR antagonist + ยับยั้ง synthesis","PCOS hirsutism, acne"]])}${S.k}`});

SEC.push({id:"labor",k:"e",t:"Oxytocics & tocolytics",mm:"Labor drugs",drugs:"oxytocin · misoprostol · dinoprostone · methylergonovine · nifedipine · indomethacin · terbutaline · magnesium sulfate",act:["ag","bl"],tools:MT,leg:["ag","bl"],draw:RM(["ut","toco"]),
notes:()=>`<h3>เพิ่มการหดตัว (labor induction, PPH)</h3><ul><li><b>Oxytocin</b> · prostaglandin: misoprostol (PGE₁), dinoprostone (PGE₂ → cervical ripening) · <b>methylergonovine</b> (ergot; ห้ามใน HTN/preeclampsia) · carboprost (PGF₂α; ห้ามใน asthma) ${S.k}${S.p}</li></ul>
 <h3>Tocolytics (ชะลอ preterm labor ~48 ชม. เพื่อให้ steroid)</h3><ul><li><b>Nifedipine</b> (CCB) · <b>indomethacin</b> (&lt;32 สัปดาห์; ปิด ductus ก่อนกำหนด, oligohydramnios) · terbutaline (β₂; ระยะสั้น) ${S.k}</li><li><b>Magnesium sulfate</b>: neuroprotection ทารก &lt;32 สัปดาห์ และป้องกันชักใน preeclampsia ${S.k}${S.p}</li><li>Betamethasone/dexamethasone: เร่งปอดทารก ${S.k}</li></ul>`});

SEC.push({id:"uro",k:"f",t:"BPH & erectile dysfunction drugs",mm:"Tamsulosin · PDE5 · minoxidil",drugs:"tamsulosin · alfuzosin · finasteride · sildenafil · tadalafil · minoxidil",act:["bl","inh","mod"],tools:MT,leg:["bl","inh","mod"],draw:RM(["a1a","5ar","pde5","hair"]),
notes:()=>`<h3>BPH</h3><ul><li><b>Tamsulosin</b>: α₁A selective → คลาย smooth muscle ต่อมลูกหมาก ออกฤทธิ์เร็ว · ADR: ejaculation ผิดปกติ, <b>floppy iris</b> (ผ่าตัดต้อกระจก), orthostatic (น้อยกว่า terazosin) ${S.k}${S.p}</li><li>5α-reductase inhibitor: ลดขนาดต่อม ใช้เวลา 6 เดือน · ใช้ร่วมกันได้ ${S.k}${S.p}</li><li>Tadalafil ช่วย LUTS ได้ ${S.k}</li></ul>
 <h3>Erectile dysfunction</h3><ul><li><b>PDE5 inhibitor</b> → cGMP ↑ → corpus cavernosum คลาย · sildenafil, vardenafil (สั้น), tadalafil (นาน) · ใช้ใน pulmonary HTN ด้วย ${S.k}</li><li>ADR: ปวดหัว หน้าแดง dyspepsia · <b>cyanopia</b> (sildenafil, PDE6) · NAION · priapism · <b>ห้ามใช้ร่วม nitrate</b> ${S.k}</li></ul>
 <h3>Minoxidil (topical)</h3><ul><li>Androgenetic alopecia (เปิด K-ATP, เพิ่มเลือดไปรากผม) ${S.k}</li></ul>`});

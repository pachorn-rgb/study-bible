/* ================= Biochemistry — Molecular 2: transcription, RNA & translation ================= */
Object.assign(S,{lir:'<b class="sbb lir">LIR</b>',x:'<b class="sbb gen">Gen</b>'});
Object.assign(GN,{a:"รหัสพันธุกรรมและการควบคุมยีน",b:"การถอดรหัสและการแต่ง RNA",c:"การแปลรหัส",d:"หลังแปลรหัส"});

SEC.push({id:"code",k:"a",t:"คุณสมบัติของรหัสพันธุกรรม",mm:"อ่านรหัส",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["จำเพาะ (unambiguous)","โคดอนหนึ่งให้กรดอะมิโนตัวเดิมเสมอ","ar"],
 ["ซ้ำซ้อน (degenerate)","กรดอะมิโนตัวหนึ่งมีได้หลายโคดอน เช่น arginine มีหกแบบ","vn"],
 ["ข้อยกเว้นของความซ้ำซ้อน","Met และ Trp มีโคดอนละหนึ่งเดียว","bl"],
 ["ไม่ซ้อนทับและไม่มีเครื่องหมายวรรค","อ่านต่อเนื่องทีละสามเบสจากจุดเริ่มคงที่","mod"],
 ["เกือบสากล (universal)","เหมือนกันแทบทุกสิ่งมีชีวิต · mitochondria เป็นข้อยกเว้น","gl"]]),
notes:()=>`<ul>
<li>Lippincott: รหัสพันธุกรรม <b>จำเพาะ (unambiguous) — โคดอนหนึ่งจะให้กรดอะมิโนตัวเดิมเสมอ</b> ${S.lir}</li>
<li>Lippincott: <b>arginine ถูกระบุด้วยโคดอนถึงหกแบบ</b> ส่วน <b>Met และ Trp มีเพียงโคดอนเดียว</b> ${S.lir}</li>
<li>Lippincott: รหัสถูกอ่าน <b>จากจุดเริ่มต้นคงที่เป็นลำดับต่อเนื่องทีละสามเบส ไม่มีเครื่องหมายวรรคระหว่างโคดอน</b> เช่น AGCUGGAUACAU อ่านเป็น AGC/UGG/AUA/CAU ${S.lir}</li>
<li>Lippincott: ความเป็นสากลมี <b>ข้อยกเว้นใน mitochondria ที่บางโคดอนมีความหมายต่างออกไป เช่น UGA ให้ Trp</b> ${S.lir}</li>
<li>ความซ้ำซ้อนอธิบายว่าทำไม silent mutation จึงมักเกิดที่ตำแหน่งที่สามของโคดอน — ตำแหน่งนั้นเป็นตำแหน่งที่รหัสยืดหยุ่นที่สุด ${S.x}</li></ul>`});

SEC.push({id:"genereg",k:"a",t:"Promoter, enhancer และ silencer",drugs:"",act:[],leg:[],
draw:()=>tbl(["องค์ประกอบ","อยู่ที่ไหน","ทำอะไร"],[
 ["Promoter","ต้นยีน ติดกับจุดเริ่มถอดรหัส","ที่จับของ RNA polymerase และ transcription factor"],
 ["Enhancer","ไกลออกไป · <b>อยู่ก่อนหรือหลังยีนก็ได้</b>","<b>เพิ่ม</b> การถอดรหัส โดย DNA โค้งงอมาหา promoter"],
 ["Silencer","ไกลออกไปเช่นกัน","<b>ลด</b> การถอดรหัส"],
 ["Operator (โพรคาริโอต)","ระหว่าง promoter กับยีน","ที่จับของ repressor"]]),
notes:()=>`<ul>
<li>Lippincott: enhancer จับ transcription factor ที่ทำหน้าที่เป็นตัวกระตุ้น และ <b>โดยการโค้งหรือม้วน DNA ตัวที่จับ enhancer จึงเข้าหา transcription factor ที่ promoter และ RNA polymerase II ได้</b> ${S.lir}</li>
<li>Lippincott: <b>silencer คล้าย enhancer ตรงที่ออกฤทธิ์ได้ในระยะไกล แต่ลดการแสดงออกของยีน</b> ${S.lir}</li>
<li>Lippincott ระบุชัดว่า <b>ลำดับ enhancer อยู่ปลายน้ำของ promoter ก็ได้</b> ซึ่งเป็นจุดที่มักเข้าใจผิดว่าต้องอยู่ต้นยีนเสมอ ${S.lir}</li>
<li>ก่อนที่ transcription factor จะเข้าจับได้ <b>chromatin ในบริเวณนั้นต้องถูก remodel ให้คลายออกก่อน</b> ซึ่งเชื่อมกลับไปที่เรื่อง acetylation ${S.lir}</li></ul>`});

SEC.push({id:"operon",k:"a",t:"Lac operon",drugs:"",act:[],leg:[],
draw:()=>tbl(["สภาวะ","Repressor","CAP-cAMP","ผล"],[
 ["มีกลูโคส ไม่มีแลคโตส","จับ operator อยู่","ไม่จับ","<b>ปิดสนิท</b>"],
 ["มีกลูโคส มีแลคโตส","ถูกปลดโดย allolactose","ไม่จับ (cAMP ต่ำ)","<b>เปิดน้อยมาก</b>"],
 ["ไม่มีกลูโคส ไม่มีแลคโตส","จับ operator อยู่","จับ","<b>ปิด</b>"],
 ["ไม่มีกลูโคส มีแลคโตส","ถูกปลด","จับ","<b>เปิดเต็มที่</b>"]]),
notes:()=>`<ul>
<li>Lippincott: <b>allolactose จับกับโปรตีน repressor ทำให้เปลี่ยนรูปร่างจนจับ operator ไม่ได้</b> operon จึงเปิด ${S.lir}</li>
<li>Lippincott: <b>adenylyl cyclase ทำงานเมื่อไม่มีกลูโคส จึงสร้าง cAMP ที่ไปจับ CAP</b> ส่วนเมื่อมีกลูโคสเอนไซม์นี้ไม่ทำงานและ CAP ไม่จับ cAMP ซึ่งเรียกว่า <b>catabolite repression</b> ${S.lir}</li>
<li>Lippincott: แม้ repressor จะถูกปลดแล้ว <b>ถ้าที่จับ CAP ยังว่างอยู่ RNA polymerase ก็เริ่มถอดรหัสได้ไม่ดีนัก</b> จึงต้องครบสองเงื่อนไขถึงจะเปิดเต็มที่ ${S.lir}</li>
<li>ตรรกะของระบบคือ <b>repressor ตอบว่ามีแลคโตสไหม ส่วน CAP ตอบว่าขาดกลูโคสไหม</b> แบคทีเรียจะใช้แลคโตสก็ต่อเมื่อมีแลคโตสและไม่มีทางเลือกที่ดีกว่า ${S.x}</li>
<li>ยีนทั้งสามคือ <b>lacZ (β-galactosidase), lacY (permease) และ lacA (transacetylase)</b> ${S.lir}</li></ul>`});

SEC.push({id:"rnapol",k:"b",t:"RNA polymerase และชนิดของ RNA",drugs:"α-amanitin · Rifampin · Actinomycin D",act:[],leg:[],
draw:()=>tbl(["Polymerase","สร้างอะไร","หมายเหตุ"],[
 ["RNA polymerase I","rRNA","อยู่ใน nucleolus"],
 ["RNA polymerase II","<b>mRNA</b>","ถูกยับยั้งโดย <b>α-amanitin</b>"],
 ["RNA polymerase III","tRNA, 5S rRNA, snRNA บางตัว","—"],
 ["ของ mitochondria","RNA ของ mitochondria","คล้ายของแบคทีเรียมากกว่าของยูคาริโอต"],
 ["ของแบคทีเรีย","RNA ทุกชนิดด้วยเอนไซม์ตัวเดียว","ถูกยับยั้งโดย <b>rifampin</b>"]]),
notes:()=>`<ul>
<li>Lippincott: <b>RNA polymerase II ถูกยับยั้งโดย α-amanitin ซึ่งเป็นพิษจากเห็ด Amanita phalloides (death cap)</b> โดยจับเอนไซม์แน่นจนหยุดการสร้าง mRNA และหยุดการสร้างโปรตีนในที่สุด ${S.lir}</li>
<li>Lippincott: <b>RNA polymerase III สร้าง tRNA, 5S rRNA และ snRNA กับ snoRNA บางส่วน</b> ${S.lir}</li>
<li>Lippincott: <b>mitochondria มี RNA polymerase ตัวเดียวที่คล้ายของแบคทีเรียมากกว่าของยูคาริโอต</b> ซึ่งสอดคล้องกับทฤษฎี endosymbiosis ${S.lir}</li>
<li>Lippincott: <b>rifampin เปลี่ยนรูปร่าง RNA polymerase ของแบคทีเรียจนเริ่มสร้าง RNA ไม่ได้ ส่วนเอนไซม์ของเซลล์ยูคาริโอตไม่จับ rifampin</b> การสร้าง RNA ของคนจึงไม่ถูกกระทบ ${S.lir}</li>
<li>ปริมาณในเซลล์เรียงจากมากไปน้อยคือ <b>rRNA มากที่สุด ตามด้วย tRNA และ mRNA น้อยที่สุด</b> ${S.x}</li></ul>`});

SEC.push({id:"rnaproc",k:"b",t:"การแต่ง mRNA และการตัดต่อ",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["เติมหมวกที่ปลาย 5′","7-methylguanosine ต่อแบบ 5′→5′ · ช่วยให้ไรโบโซมจับและกันการย่อย","bl"],
 ["เติมหางที่ปลาย 3′","poly-A ยาวหลายร้อยเบส · ไม่มีในแม่แบบ DNA","mod"],
 ["ตัดต่อ (splicing)","เอา intron ออก ต่อ exon เข้าด้วยกัน","ar"],
 ["mRNA ที่สุกแล้วออกจากนิวเคลียส","ผ่านรูของเยื่อหุ้มนิวเคลียส","gl"]]),
notes:()=>`<ul>
<li>Lippincott: <b>snRNP (เรียกกันว่า snurps คือ U1, U2 และอื่น ๆ)</b> รวมกับ primary transcript เป็นกลุ่มโปรตีนที่เรียกว่า <b>spliceosome</b> ${S.lir}</li>
<li>Lippincott อธิบายกลไกว่า <b>หมู่ 2′-OH ของอะดีโนซีนที่ branch site ในอินทรอนเข้าโจมตีฟอสเฟตที่ปลาย 5′ ของอินทรอน เกิดพันธะ 2′→5′ ที่ผิดปกติและได้โครงสร้าง lariat</b> ${S.lir}</li>
<li>Lippincott: <b>ลำดับ GU และ AG ที่ต้นและท้ายอินทรอนเป็นค่าคงที่ไม่เปลี่ยน</b> จึงเป็นเป้าของ splice site mutation ${S.lir}</li>
<li>Lippincott: อินทรอนที่ถูกตัดออก <b>ถูกปล่อยเป็น lariat แล้วมักถูกย่อยทิ้ง</b> ${S.lir}</li>
<li>Lippincott: <b>อินทรอนใน tRNA ถูกตัดด้วยกลไกคนละแบบ</b> ไม่ได้ใช้ spliceosome ${S.lir}</li>
<li>ผล: ยีนหนึ่งสร้างโปรตีนได้หลายแบบผ่าน alternative splicing ซึ่งอธิบายว่าทำไมคนมียีนราวสองหมื่นยีนแต่มีโปรตีนมากกว่านั้นมาก ${S.x}</li>
<li>แอนติบอดีต่อ snRNP (anti-Smith) จำเพาะกับ SLE และ anti-U1 RNP พบใน mixed connective tissue disease ${S.x}</li></ul>`});

SEC.push({id:"trna",k:"c",t:"tRNA และการชาร์จกรดอะมิโน",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["รูปร่าง","คล้ายใบโคลเวอร์สองมิติ พับเป็นรูปตัว L สามมิติ","bl"],
 ["ปลาย 3′","ลงท้ายด้วย CCA เสมอ — ที่ติดกรดอะมิโน","ar"],
 ["Anticodon","สามเบสที่จับคู่กับโคดอนบน mRNA แบบขนานกลับทิศ","vn"],
 ["Aminoacyl-tRNA synthetase","ติดกรดอะมิโนให้ถูกตัว · หนึ่งเอนไซม์ต่อหนึ่งกรดอะมิโน","mod"],
 ["ใช้พลังงาน","ATP หนึ่งโมเลกุล แต่เสียพันธะพลังงานสูงไปสองพันธะ","gl"]]),
notes:()=>`<ul>
<li>Lippincott: tRNA ที่รับกรดอะมิโนตัวเดียวกันได้หลายตัวเรียก <b>isoaccepting tRNA</b> ${S.lir}</li>
<li>Lippincott: ปฏิกิริยาของ aminoacyl-tRNA synthetase <b>ใช้พันธะพลังงานสูงสองพันธะ — หนึ่งในการกำจัด PPi</b> ${S.lir}</li>
<li>เอนไซม์กลุ่มนี้เป็นด่านตรวจความถูกต้องด่านสำคัญ เพราะ <b>ไรโบโซมไม่ตรวจซ้ำว่ากรดอะมิโนที่ติดมาถูกตัวหรือไม่ ตรวจแค่ว่า anticodon จับคู่กับโคดอนได้</b> ${S.x}</li>
<li>ถ้าติดกรดอะมิโนผิดตัวลงบน tRNA โปรตีนก็จะผิดไปด้วยโดยไม่มีอะไรมาทักท้วง ${S.x}</li></ul>`});

SEC.push({id:"transl",k:"c",t:"สามขั้นของการแปลรหัส",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["เริ่มต้น (initiation)","หน่วยเล็กหา AUG แรก · นำโดย Met (fMet ในแบคทีเรีย) · ใช้ GTP","bl"],
 ["ต่อสาย (elongation)","tRNA เข้าที่ A · สร้างพันธะเพปไทด์ · เลื่อนไป P และ E","ar"],
 ["สิ้นสุด (termination)","เจอ UAA, UAG หรือ UGA · release factor ปล่อยสายออก","gl"]]),
notes:()=>`<ul>
<li>สามตำแหน่งบนไรโบโซมจำง่ายตามลำดับ <b>A → P → E</b> คือเข้า (Aminoacyl), ต่อ (Peptidyl), ออก (Exit) ${S.x}</li>
<li>พันธะเพปไทด์สร้างโดย <b>peptidyl transferase ซึ่งเป็น ribozyme</b> คือ RNA ที่ทำหน้าที่เป็นเอนไซม์ ไม่ใช่โปรตีน ${S.x}</li>
<li>ไรโบโซมของคน <b>60S + 40S = 80S</b> ส่วนของแบคทีเรีย <b>50S + 30S = 70S</b> ซึ่งความต่างนี้คือเหตุผลที่ยาปฏิชีวนะเลือกออกฤทธิ์ได้ ${S.x}</li>
<li>ยาที่หน่วย 30S: aminoglycoside และ tetracycline · ยาที่หน่วย 50S: chloramphenicol, macrolide, clindamycin และ linezolid ${S.x}</li>
<li>การแปลรหัสกินพลังงานมาก — ใช้ GTP ทั้งขั้นเริ่มต้น ขั้นต่อสายและขั้นสิ้นสุด ${S.x}</li></ul>`});

SEC.push({id:"posttr",k:"d",t:"การปรับแต่งหลังแปลรหัส",drugs:"",act:[],leg:[],
draw:()=>tbl(["การปรับแต่ง","ตัวอย่าง","ความสำคัญทางคลินิก"],[
 ["ตัดแต่ง (trimming)","proinsulin → insulin + C-peptide","C-peptide ใช้แยก insulin จากภายนอกกับที่ร่างกายสร้างเอง"],
 ["เติมหมู่ไฮดรอกซิล","proline และ lysine ในคอลลาเจน","ต้องใช้วิตามินซี · ขาดแล้วเป็นลักปิดลักเปิด"],
 ["เติมหมู่คาร์บอกซิล","glutamate ในปัจจัยการแข็งตัวของเลือด","ต้องใช้วิตามินเค · เป้าของ warfarin"],
 ["เติมน้ำตาล","โปรตีนที่หลั่งออกและโปรตีนไลโซโซม","mannose-6-phosphate เป็นป้ายส่งไปไลโซโซม"],
 ["เติมฟอสเฟต","kinase เติม phosphatase ถอด","สวิตช์เปิดปิดของการส่งสัญญาณ"]]),
notes:()=>`<ul>
<li>Lippincott: โปรตีนหลายชนิดต้องพับโดยอาศัยโปรตีนที่เรียก <b>chaperone ซึ่งรู้จักกันในชื่อ heat shock protein</b> ${S.lir}</li>
<li>Lippincott: chaperone บางตัวสำคัญตรงที่ <b>คอยกันไม่ให้สายโปรตีนที่ยังพับไม่เสร็จไปจับกันเอง</b> ระหว่างกระบวนการพับ ${S.lir}</li>
<li>กลุ่มโรคที่เกิดจากการพับผิด เช่น Alzheimer, Parkinson และโรคพรีออน ล้วนมาจากโปรตีนที่พับผิดแล้วสะสม ${S.x}</li>
<li>ข้อผิดพลาดของการติดป้าย mannose-6-phosphate ทำให้เอนไซม์ไลโซโซมถูกส่งออกนอกเซลล์แทน ซึ่งคือ <b>I-cell disease</b> ${S.x}</li>
<li>วิธีจำความต่างของวิตามิน: <b>วิตามินซีเติมหมู่ไฮดรอกซิลให้คอลลาเจน ส่วนวิตามินเคเติมหมู่คาร์บอกซิลให้ปัจจัยการแข็งตัวของเลือด</b> ${S.x}</li></ul>`});

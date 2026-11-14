/* ================= Biochemistry — Metabolism 4: lipids, ketones & lipoproteins ================= */
Object.assign(S,{lir:'<b class="sbb lir">LIR</b>',tbbio:'<b class="sbb tbbio">TB</b>',fa1:'<b class="sbb fa">FA1</b>',x:'<b class="sbb gen">Gen</b>'});
Object.assign(GN,{a:"Burning & building fat",b:"Ketones & fasting",c:"Cholesterol & enzymes",d:"Lipoproteins"});

SEC.push({id:"faox",k:"a",t:"β-oxidation & the carnitine shuttle",mm:"เผาไขมัน",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["fatty acid + CoA → acyl-CoA","ใน cytosol","bl"],
 ["CPT I ที่เยื่อหุ้มชั้นนอก","ย้ายหมู่ acyl ไปให้ carnitine · ขั้นกำหนดอัตรา · ถูก malonyl-CoA ยับยั้ง","ar"],
 ["Acylcarnitine ข้ามเยื่อหุ้มชั้นใน","โดย translocase","mod"],
 ["CPT II ด้านใน","คืนหมู่ acyl ให้ CoA","mod"],
 ["β-oxidation รอบละ 2 คาร์บอน","ได้ acetyl-CoA 1 · NADH 1 · FADH₂ 1 ต่อรอบ","gl"]]),
notes:()=>`<ul>
<li>Lippincott: เยื่อหุ้ม mitochondria ชั้นในไม่ยอมให้ CoA ผ่าน จึงต้องมีตัวพาเฉพาะ ซึ่งคือ <b>carnitine</b> และ <b>การขนส่งขั้นนี้เป็นขั้นกำหนดอัตรา</b> ${S.lir}</li>
<li><b>Malonyl-CoA ยับยั้ง CPT I</b> จึงกันไม่ให้ fatty acid ที่เพิ่งสร้างถูกเผาทิ้งทันที ${S.lir}</li>
<li>fatty acid สายสั้นและสายกลาง <b>ข้ามเข้า mitochondria ได้เองโดยไม่ต้องใช้ carnitine</b> ${S.x}</li>
<li>Lippincott ระบุว่าขั้นแรกของ β-oxidation ทำโดย <b>acyl-CoA dehydrogenase ซึ่งมีสี่ตัวในตระกูลเดียวกัน</b> แต่ละตัวจำเพาะกับความยาวสายต่างกัน ${S.lir}</li>
<li>fatty acid สายคี่จะเหลือ <b>propionyl-CoA</b> สามคาร์บอนในรอบสุดท้าย ซึ่งเข้าสู่เส้นทางเดียวกับ organic acidemia ${S.lir}</li></ul>`});

SEC.push({id:"mcad",k:"a",t:"Fatty acid oxidation disorders",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["MCAD deficiency","พร่อง medium-chain acyl-CoA dehydrogenase · พบบ่อยที่สุดในกลุ่มนี้","ar"],
 ["ลักษณะเด่น","น้ำตาลตกโดยที่คีโตนไม่ขึ้น (hypoketotic hypoglycemia)","vn"],
 ["เกิดเมื่อไร","หลังอดอาหารนานหรือเจ็บป่วยจนกินไม่ได้","bl"],
 ["พร่อง carnitine ปฐมภูมิ","fatty acid สายยาวเข้า mitochondria ไม่ได้ · กล้ามเนื้ออ่อนแรง หัวใจโต","mod"],
 ["การรักษาหลัก","ห้ามอดอาหาร · ให้ glucose เมื่อเจ็บป่วย","gl"]]),
notes:()=>`<ul>
<li><b>น้ำตาลตกโดยคีโตนไม่ขึ้น</b> คือจุดชี้ขาด — ปกติเมื่อน้ำตาลตกร่างกายต้องสร้างคีโตนทดแทน ถ้าเผา fatty acid ไม่ได้ก็สร้างคีโตนไม่ได้ ${S.x}</li>
<li>ตรงข้ามกับภาวะอดอาหารปกติหรือเบาหวานที่ขาด insulin ซึ่ง <b>คีโตนจะสูง</b> ${S.x}</li>
<li>การตายฉับพลันในวัยทารกบางรายเคยถูกเข้าใจผิดว่าเป็น SIDS ก่อนที่จะมีการตรวจคัดกรองแรกเกิด ${S.x}</li>
<li>พร่อง carnitine กระทบ <b>fatty acid สายยาวเท่านั้น</b> เพราะสายสั้นและสายกลางไม่ต้องใช้กระสวยนี้ ${S.x}</li></ul>`});

SEC.push({id:"fasyn",k:"a",t:"Fatty acid synthesis",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["Citrate ออกจาก mitochondria","พาคาร์บอนจาก acetyl-CoA ออกมาสู่ cytosol","bl"],
 ["Acetyl-CoA → malonyl-CoA","acetyl-CoA carboxylase · ใช้ biotin · ขั้นกำหนดอัตรา","ar"],
 ["Fatty acid synthase ต่อสายทีละ 2 คาร์บอน","ใช้ NADPH จาก HMP shunt","gl"],
 ["ได้ palmitate 16 คาร์บอน","แล้วค่อยต่อสายหรือเติมพันธะคู่ต่อที่ ER","mod"]]),
notes:()=>`<ul>
<li><b>Citrate เป็นทั้งตัวขนคาร์บอนและตัวส่งสัญญาณ</b> — กระตุ้น acetyl-CoA carboxylase และยับยั้ง PFK-1 พร้อมกัน จึงบอกเซลล์ว่าพลังงานล้นแล้ว ให้เก็บเป็นไขมัน ${S.lir}</li>
<li><b>insulin กระตุ้น</b> acetyl-CoA carboxylase ส่วนกลูคากอนยับยั้ง ${S.fa1}</li>
<li>NADPH ที่ใช้มาจาก <b>HMP shunt</b> เป็นหลัก จึงเชื่อมสองเส้นทางนี้เข้าด้วยกัน ${S.x}</li>
<li>สังเกตความสมมาตร: การสร้างอยู่ใน cytosol ใช้ NADPH ส่วนการสลายอยู่ใน mitochondria ให้ NADH และ FADH₂ ${S.x}</li></ul>`});

SEC.push({id:"ketone",k:"b",t:"Ketone bodies",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["สร้างที่ไหน","ตับเท่านั้น ใน mitochondria","ar"],
 ["สร้างเมื่อไร","acetyl-CoA จากการสลายไขมันล้นเกินกำลังของ TCA","vn"],
 ["คีโตนหลักสองตัว","Acetoacetate และ β-hydroxybutyrate","bl"],
 ["Acetone","ระเหยออกทางลมหายใจ ให้กลิ่นผลไม้ ใช้เป็นพลังงานไม่ได้","mod"],
 ["ใครใช้ได้","สมอง หัวใจ กล้ามเนื้อ ไต — แต่ ตับใช้เองไม่ได้","gl"]]),
notes:()=>`<ul>
<li>Lippincott: คีโตนถูกใช้โดยเนื้อเยื่อส่วนปลาย <b>แต่ไม่ใช่โดยตับเอง</b> และ <b>ketogenesis ยังปล่อย CoA ออกมา</b> ทำให้การเผา fatty acid ดำเนินต่อไปได้ ${S.lir}</li>
<li>ตับใช้คีโตนเองไม่ได้เพราะ <b>ขาด enzyme thiophorase (SCOT)</b> — ตับจึงเป็นโรงงานที่ไม่กินสินค้าของตัวเอง ${S.x}</li>
<li><b>สมองเปลี่ยนมาใช้คีโตนได้</b> เมื่ออดอาหารนาน ซึ่งช่วยประหยัดกล้ามเนื้อไม่ให้ถูกสลายไปสร้าง glucose ${S.x}</li>
<li>แถบตรวจปัสสาวะจับ <b>acetoacetate</b> แต่ไม่จับ β-hydroxybutyrate — ใน DKA ที่รุนแรงซึ่งมี β-hydroxybutyrate เด่น ผลตรวจจึงดูต่ำกว่าความเป็นจริง ${S.x}</li>
<li>erythrocyte ใช้คีโตนไม่ได้เพราะไม่มี mitochondria ${S.x}</li></ul>`});

SEC.push({id:"fedfast",k:"b",t:"Fed vs fasting state",drugs:"",act:[],leg:[],
draw:()=>tbl(["Phase","Main fuel","What happens"],[
 ["หลังกินอาหาร","glucose จากอาหาร","insulin สูง · เก็บเป็น glycogen และไขมัน"],
 ["อด 4–24 ชม.","glycogen ของตับ","กลูคากอนสูง · glycogenolysis เป็นหลัก"],
 ["อด 1–3 วัน","gluconeogenesis","ใช้ amino acid จากกล้ามเนื้อและกลีเซอรอล"],
 ["อดเกิน 3 วัน","คีโตน","สมองหันมาใช้คีโตน ประหยัดกล้ามเนื้อ"]]),
notes:()=>`<ul>
<li>glycogen ของตับหมดภายในราวหนึ่งวัน ร่างกายจึงต้องเปลี่ยนไปสร้าง glucose เอง ${S.x}</li>
<li><b>การเปลี่ยนมาใช้คีโตนคือกลไกเอาชีวิตรอด</b> — ถ้าสมองยังยืนยันใช้ glucose อย่างเดียว กล้ามเนื้อจะถูกสลายจนหมดในไม่กี่สัปดาห์ ${S.x}</li>
<li>สมองใช้ fatty acid ไม่ได้เพราะ fatty acid สายยาวผ่าน blood–brain barrier ได้ไม่ดี จึงต้องใช้คีโตนแทน ${S.x}</li>
<li>erythrocyte ต้องใช้ glucose เสมอไม่ว่าจะอดนานแค่ไหน ${S.x}</li></ul>`});

SEC.push({id:"chol",k:"c",t:"Cholesterol synthesis",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["Acetyl-CoA → HMG-CoA","ใน cytosol","bl"],
 ["HMG-CoA → mevalonate","HMG-CoA reductase · ขั้นกำหนดอัตรา · เป้าหมายของยาสแตติน","ar"],
 ["→ cholesterol","ใช้ NADPH","gl"],
 ["ปลายทาง","plasma membrane · bile acid · ฮอร์โมนสเตียรอยด์ · วิตามินดี","mod"]]),
notes:()=>`<ul>
<li>Lippincott: <b>HMG-CoA reductase เป็นขั้นกำหนดอัตราและเป็นเป้าหมายของยา</b> โดยตอบสนองต่อระดับ cholesterol ภายในเซลล์ ${S.lir}</li>
<li>แยกให้ออก: <b>HMG-CoA reductase</b> อยู่ใน cytosol สร้าง cholesterol ส่วน <b>HMG-CoA synthase และ lyase</b> อยู่ใน mitochondria ทำเรื่องคีโตน ${S.x}</li>
<li>insulin และไทรอกซินกระตุ้น ส่วนกลูคากอนและ cholesterol เองยับยั้ง ${S.fa1}</li>
<li>สแตตินลด cholesterol ภายในเซลล์ตับ เซลล์จึงเพิ่มตัวรับ LDL บนผิว แล้วดึง LDL ออกจากเลือด ${S.x}</li></ul>`});

SEC.push({id:"lipenz",k:"c",t:"The lipid enzymes",drugs:"",act:[],leg:[],
draw:()=>tbl(["Enzyme","Location","Action"],[
 ["Lipoprotein lipase (LPL)","ผิวด้านในของหลอดเลือดฝอย","สลาย TAG ใน chylomicron และ VLDL · ต้องมี apo C-II"],
 ["Hormone-sensitive lipase","ในเซลล์ไขมัน","สลายไขมันที่เก็บไว้ · กระตุ้นด้วยกลูคากอนและอะดรีนาลีน"],
 ["LCAT","ในเลือด ติดอยู่กับ HDL","เติม fatty acid ให้ cholesterol กลายเป็นเอสเทอร์"],
 ["CETP","ในเลือด","แลกเปลี่ยน cholesteryl ester จาก HDL กับ TAG จากตัวอื่น"],
 ["Pancreatic lipase","ลำไส้เล็ก","ย่อย TAG จากอาหาร"],
 ["Hepatic lipase","ผิวเซลล์ตับ","สลาย TAG ที่เหลือใน IDL"]]),
notes:()=>`<ul>
<li>Lippincott: LPL <b>สร้างโดยเซลล์ไขมันและเซลล์กล้ามเนื้อ แล้วหลั่งออกไปเกาะที่ผิวด้านในของหลอดเลือดฝอย</b> ${S.lir}</li>
<li><b>LPL ต้องมี apo C-II เป็นตัวกระตุ้น</b> — การขาด LPL หรือขาด apo C-II จึงให้ภาพเดียวกันคือไตรกลีเซอไรด์สูงมาก ${S.lir}${S.x}</li>
<li>Lippincott: เมื่อ cholesterol เข้าสู่ HDL จะ <b>ถูกเปลี่ยนเป็นเอสเทอร์ทันที</b> โดย LCAT · HDL รับ cholesterol ได้ดีเพราะมีฟอสโฟลิพิดสูง ${S.lir}</li>
<li>การเปลี่ยนเป็นเอสเทอร์ทำให้ cholesterol ไม่ชอบน้ำยิ่งขึ้นและจมเข้าไปในแกนอนุภาค จึงดักไว้ไม่ให้ไหลกลับออกมา ${S.x}</li>
<li>จำคู่ตรงข้าม: <b>LPL ทำงานตอนอิ่ม</b> เพื่อเก็บไขมันเข้าเซลล์ · <b>hormone-sensitive lipase ทำงานตอนอด</b> เพื่อปล่อยออกมา ${S.x}</li></ul>`});

SEC.push({id:"lipoprot",k:"d",t:"The five lipoproteins",drugs:"",act:[],leg:[],
draw:()=>tbl(["Particle","Carries","From → to"],[
 ["Chylomicron","TAG จากอาหาร (มากที่สุด)","ลำไส้ → เนื้อเยื่อส่วนปลาย"],
 ["Chylomicron remnant","cholesterol จากอาหาร","→ ตับ"],
 ["VLDL","TAG ที่ตับสร้างเอง","ตับ → เนื้อเยื่อส่วนปลาย"],
 ["IDL","ไขมันผสม","VLDL ที่ถูกสลายบางส่วน → ตับ หรือกลายเป็น LDL"],
 ["LDL","cholesterol (มากที่สุด)","→ เนื้อเยื่อส่วนปลาย"],
 ["HDL","cholesterol ขากลับ","เนื้อเยื่อ → ตับ (reverse cholesterol transport)"]]),
notes:()=>`<ul>
<li>ยิ่งอนุภาคใหญ่ยิ่งมีไตรกลีเซอไรด์มากและความหนาแน่นต่ำ · ยิ่งเล็กยิ่งมี protein มากและหนาแน่นสูง ${S.x}</li>
<li><b>HDL เป็นธนาคาร apolipoprotein</b> — Lippincott ระบุว่า VLDL ที่เพิ่งหลั่งออกมามี apo B-100 แล้ว <b>ต้องไปรับ apo C-II และ apo E จาก HDL ที่ไหลเวียนอยู่</b> ${S.lir}</li>
<li>LDL ถูกนำเข้าเซลล์ผ่าน <b>ตัวรับ LDL ซึ่งจับกับ apo B-100</b> ${S.x}</li>
<li>HDL ทำ <b>reverse cholesterol transport</b> คือเก็บ cholesterol ส่วนเกินจากเนื้อเยื่อกลับไปตับ จึงเป็นเหตุผลที่ HDL สูงสัมพันธ์กับความเสี่ยงที่ต่ำลง ${S.x}</li></ul>`});

SEC.push({id:"apo",k:"d",t:"Apolipoprotein",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["Apo A-I","กระตุ้น LCAT · เป็นโครงหลักของ HDL","gl"],
 ["Apo B-48","ใช้หลั่ง chylomicron จากลำไส้","bl"],
 ["Apo B-100","ใช้หลั่ง VLDL จากตับ และจับกับตัวรับ LDL","ar"],
 ["Apo C-II","กระตุ้น lipoprotein lipase","vn"],
 ["Apo E","ใช้เก็บ remnant กลับเข้าตับ","mod"]]),
notes:()=>`<ul>
<li>จำแยกเป็นหน้าที่: <b>B = หลั่งออกและจับตัวรับ · C-II = จุดชนวนให้ LPL ทำงาน · E = ตั๋วกลับบ้านเข้าตับ · A-I = จุดชนวนให้ LCAT ทำงาน</b> ${S.x}</li>
<li><b>B-48 กับ B-100 มาจาก gene เดียวกัน</b> แต่ลำไส้ตัดต่อ RNA ให้สั้นลงเหลือ 48% ${S.x}</li>
<li>Lippincott: <b>apo E มีสามไอโซฟอร์มคือ E-2, E-3, E-4</b> โดย <b>apo E-2 จับตัวรับได้ไม่ดี</b> ผู้ที่เป็น homozygote ของ E-2 จึงกำจัด chylomicron remnant และ IDL ได้ไม่ดี เกิดเป็น <b>familial type III hyperlipoproteinemia หรือ dysbetalipoproteinemia</b> ${S.lir}</li></ul>`});

SEC.push({id:"dyslip",k:"d",t:"Familial dyslipidemia",drugs:"",act:[],leg:[],
draw:()=>tbl(["Type","Name","Defect","Raised lipid"],[
 ["I","Hyperchylomicronemia","LPL หรือ apo C-II","Chylomicron · TAG สูงมาก"],
 ["IIa","Familial hypercholesterolemia","ตัวรับ LDL","LDL · cholesterol"],
 ["III","Dysbetalipoproteinemia","Apo E-2 homozygote","Chylomicron remnant และ IDL"],
 ["IV","Hypertriglyceridemia","สร้าง VLDL มากเกิน","VLDL · TAG"]]),
notes:()=>`<ul>
<li><b>ชนิด I</b> — ไตรกลีเซอไรด์สูงมากจนอาจเป็น pancreas อักเสบ แต่ <b>ไม่เร่งหลอดเลือดแข็ง</b> เพราะ chylomicron ใหญ่เกินกว่าจะแทรกผนังหลอดเลือด ${S.x}</li>
<li><b>ชนิด IIa</b> — inheritance แบบ autosomal dominant · homozygote มี cholesterol สูงมากและเกิดโรคหัวใจตั้งแต่วัยเด็ก · มี <b>tendon xanthoma</b> ที่เอ็นร้อยหวายและ <b>corneal arcus</b> ก่อนวัย ${S.x}</li>
<li><b>ชนิด III</b> ยืนยันจาก Lippincott ว่าเกิดจาก apo E-2 homozygote ที่กำจัด remnant ไม่ได้ ${S.lir}</li>
<li><b>Abetalipoproteinemia</b> ต่างออกไป — ไม่มี microsomal triglyceride transfer protein จึงสร้าง apo B ทั้งสองแบบไม่ได้ ผลคือไขมันในเลือดต่ำผิดปกติ ถ่ายมัน ขาดวิตามินที่ละลายในไขมัน และพบ acanthocyte ในเลือด ${S.x}</li></ul>`});

const EXTRA=[];

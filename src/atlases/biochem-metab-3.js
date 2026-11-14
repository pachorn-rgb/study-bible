/* ================= Biochemistry — Metabolism 3: glycogen, sugars & storage diseases ================= */
Object.assign(S,{lir:'<b class="sbb lir">LIR</b>',tbbio:'<b class="sbb tbbio">TB</b>',fa1:'<b class="sbb fa">FA1</b>',x:'<b class="sbb gen">Gen</b>'});
Object.assign(GN,{a:"Glucose & NADPH",b:"Glycogen",c:"Fructose & galactose",d:"Lysosomal storage"});

SEC.push({id:"gluconeo",k:"a",t:"Gluconeogenesis",mm:"สร้าง glucose ใหม่",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["Pyruvate → oxaloacetate","pyruvate carboxylase · ใน mitochondria · ใช้ biotin · ต้องมี acetyl-CoA กระตุ้น","ar"],
 ["Oxaloacetate → PEP","PEP carboxykinase · อ้อม pyruvate kinase","ar"],
 ["Fructose-1,6-BP → fructose-6-P","fructose-1,6-bisphosphatase · ขั้นกำหนดอัตรา","vn"],
 ["Glucose-6-P → glucose","glucose-6-phosphatase · มีเฉพาะในตับและไต","gl"]]),
notes:()=>`<ul>
<li>Lippincott: มีสามปฏิกิริยาใน glycolysis ที่ <b>ย้อนกลับไม่ได้และต้องอ้อม</b> คือขั้นของ pyruvate kinase, phosphofructokinase และ hexokinase · pyruvate จึงถูกเปลี่ยนเป็น oxaloacetate ก่อนแล้วจึงเป็น phosphoenolpyruvate ${S.lir}</li>
<li>เกิดที่ <b>ตับและไต</b> เป็นหลัก ${S.lir}</li>
<li><b>กล้ามเนื้อทำ gluconeogenesis ไม่ได้</b> และปล่อย glucose เข้ากระแสเลือดก็ไม่ได้ เพราะไม่มี glucose-6-phosphatase ${S.x}</li>
<li><b>fatty acid สายคู่เปลี่ยนเป็น glucose ไม่ได้</b> เพราะขั้น pyruvate dehydrogenase ย้อนกลับไม่ได้ · แต่กลีเซอรอลและ fatty acid สายคี่ทำได้ ${S.x}</li>
<li>Acetyl-CoA ที่สูงขึ้นจากการสลายไขมันตอนอดอาหารเป็นตัวกระตุ้น pyruvate carboxylase พอดี — ร่างกายจึงเบนไปสร้าง glucose เองโดยอัตโนมัติ ${S.lir}</li></ul>`});

SEC.push({id:"hmp",k:"a",t:"HMP shunt (pentose phosphate pathway)",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["ส่วน oxidative — ย้อนไม่ได้","G6PD → ได้ NADPH 2 ตัว และ ribulose-5-P","ar"],
 ["ส่วน non-oxidative — ย้อนได้","transketolase (ใช้ TPP) สร้าง ribose-5-P และน้ำตาลอื่น","bl"],
 ["NADPH ใช้ทำอะไร","สร้าง fatty acid และ cholesterol · รีไซเคิลกลูตาไธโอน · respiratory burst","gl"],
 ["Ribose-5-P ใช้ทำอะไร","สร้าง nucleotide","mod"],
 ["อยู่ที่ไหน","cytoplasm ของตับ adrenal gland erythrocyte และต่อมน้ำนม","vn"]]),
notes:()=>`<ul>
<li>เส้นทางนี้ <b>ไม่สร้างและไม่ใช้ ATP เลย</b> — หน้าที่คือผลิต NADPH กับ ribose-5-phosphate ${S.x}</li>
<li><b>G6PD เป็นขั้นกำหนดอัตรา</b> และถูกยับยั้งด้วย NADPH ที่สะสม ${S.fa1}</li>
<li>NADPH จำเป็นต่อการรีดิวซ์กลูตาไธโอนกลับมาใช้ใหม่ ซึ่งเป็นระบบกำจัดอนุมูลอิสระหลักของ erythrocyte ${S.lir}</li>
<li>NADPH ยังป้อนให้ <b>NADPH oxidase</b> ในนิวโทรฟิล — จึงเชื่อมกับ chronic granulomatous disease ${S.x}</li>
<li><b>Transketolase ใช้ TPP</b> จึงใช้วัดการทำงานของไทอามีนทางห้องปฏิบัติการได้ ${S.lir}</li></ul>`});

SEC.push({id:"g6pd",k:"a",t:"G6PD deficiency",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["inheritance แบบ X-linked recessive","พบบ่อยมากในไทยและในเขตที่เคยมีมาลาเรีย","ar"],
 ["กลไก","NADPH ไม่พอ → กลูตาไธโอนรีดิวซ์ไม่กลับ → ฮีโมโกลบินถูกออกซิไดซ์","vn"],
 ["Heinz bodies","ฮีโมโกลบินที่ตกตะกอนภายใน erythrocyte","bl"],
 ["Bite cells","ม้ามแทะส่วนที่ตกตะกอนออกไป","bl"],
 ["ตัวกระตุ้น","ยาออกซิไดซ์ (primaquine, dapsone, ซัลฟา, nitrofurantoin) · ถั่วปากอ้า · infection","mod"]]),
notes:()=>`<ul>
<li>Lippincott ระบุว่าการพร่อง G6PD <b>ทำให้ความสามารถในการสร้าง NADPH เสียไป</b> จึงป้องกัน erythrocyte จากความเครียดออกซิเดชันไม่ได้ ${S.lir}</li>
<li>erythrocyte เปราะเป็นพิเศษเพราะ <b>ไม่มีนิวเคลียสและสร้าง enzyme ใหม่ไม่ได้</b> enzyme ที่เสื่อมแล้วจึงไม่มีการทดแทน ${S.x}</li>
<li>erythrocyte แก่มี G6PD เหลือน้อยที่สุด จึงแตกก่อน · <b>ระหว่างที่เม็ดเลือดกำลังแตก ค่า G6PD อาจดูปกติหลอก</b> ควรตรวจซ้ำหลังพ้นระยะเฉียบพลัน ${S.x}</li>
<li>เป็นเหตุผลที่ <b>ห้ามใช้ methylene blue</b> รักษา methemoglobinemia ในผู้ป่วยกลุ่มนี้ ${S.x}</li>
<li>การพร่องบางส่วนให้ผลป้องกันมาลาเรีย จึงถูกคัดเลือกไว้ในประชากรเขตร้อน ${S.x}</li></ul>`});

SEC.push({id:"glycogen",k:"b",t:"Glycogen structure & breakdown",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["พันธะหลัก α(1→4)","สายตรง","bl"],
 ["จุดแตกกิ่ง α(1→6)","ทุก ๆ 8–12 น้ำตาล ทำให้สลายได้หลายปลายพร้อมกัน","gl"],
 ["Glycogen phosphorylase","ตัดทีละหน่วยจากปลาย จนเหลือ 4 หน่วยก่อนจุดกิ่ง","ar"],
 ["Debranching enzyme","มีสองหน้าที่ — ย้ายสายสามหน่วย แล้วตัดพันธะ α(1→6)","vn"],
 ["glycogen ในตับ","รักษาระดับน้ำตาลในเลือด","mod"],
 ["glycogen ในกล้ามเนื้อ","ใช้เองเท่านั้น เพราะไม่มี glucose-6-phosphatase","mod"]]),
notes:()=>`<ul>
<li><b>glycogen ในกล้ามเนื้อช่วยน้ำตาลในเลือดไม่ได้</b> — ไม่มี glucose-6-phosphatase glucose จึงออกจากเซลล์ไม่ได้ ${S.x}</li>
<li>การแตกกิ่งทำให้มีปลายให้ตัดพร้อมกันหลายจุด <b>จึงระดม glucose ได้เร็ว</b> ซึ่งสำคัญตอนออกแรงหรือน้ำตาลตก ${S.x}</li>
<li>Lippincott: glycogen ราว <b>1–3% ถูกสลายโดย enzyme ใน lysosome คือ α(1→4)-glucosidase หรือ acid maltase</b> อยู่ตลอดเวลา ซึ่งเป็นเส้นทางที่เสียไปในโรค Pompe ${S.lir}</li>
<li>Glycogen synthase ต้องมี <b>glycogenin</b> เป็นแกนตั้งต้น ${S.x}</li></ul>`});

SEC.push({id:"gsd",k:"b",t:"Glycogen storage diseases",drugs:"",act:[],leg:[],
draw:()=>tbl(["Type","Name","Deficient enzyme","Key features"],[
 ["I","Von Gierke","Glucose-6-phosphatase","ตับโตมาก น้ำตาลตกรุนแรง แลกเตตสูง uric acid สูง ไขมันในเลือดสูง"],
 ["II","Pompe","Acid maltase (lysosome)","หัวใจโต ตัวอ่อนปวกเปียก ตายในขวบปีแรก — “Pompe ทำลายหัวใจ”"],
 ["III","Cori","Debranching enzyme","คล้าย Von Gierke แต่เบากว่า แลกเตตปกติ"],
 ["IV","Andersen","Branching enzyme","ตับแข็งและตายตั้งแต่เด็กเล็ก"],
 ["V","McArdle","Glycogen phosphorylase ของกล้ามเนื้อ","ปวดและเกร็งเมื่อออกแรง ปัสสาวะสีเข้ม น้ำตาลในเลือดปกติ"]]),
notes:()=>`<ul>
<li><b>Von Gierke</b> — ตันที่ขั้นสุดท้ายร่วมกันของทั้ง glycogenolysis และ gluconeogenesis glucose จึงออกจากตับไม่ได้เลย เป็นเหตุให้น้ำตาลตกหนักที่สุดในกลุ่มนี้ ${S.x}</li>
<li>Lippincott ระบุว่าการพร่อง acid maltase ทำให้ <b>glycogen สะสมในแวคิวโอลของ lysosome</b> ซึ่งคือโรค <b>Pompe ชนิดที่ II</b> ${S.lir}</li>
<li>Lippincott: ชนิด IV <b>Andersen</b> เกิดจากความบกพร่องของ branching enzyme และ <b>ทำให้เสียชีวิตตั้งแต่วัยเด็กตอนต้น</b> ${S.lir}</li>
<li><b>McArdle แยกง่ายที่สุด</b> — ปัญหาอยู่ที่กล้ามเนื้ออย่างเดียว น้ำตาลในเลือดปกติ และมี <b>second wind</b> คือออกแรงต่อได้หลังพักเพราะร่างกายหันไปใช้ fatty acid แทน ${S.x}</li>
<li>Pompe เป็น <b>ทั้ง glycogen storage disease และโรคสะสมใน lysosome</b> พร้อมกัน ${S.x}</li></ul>`});

SEC.push({id:"fructose",k:"c",t:"Disorders of fructose",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["Essential fructosuria — ไม่รุนแรง","พร่อง fructokinase · ฟรุกโตสออกมาในปัสสาวะ ไม่มีอาการ","gl"],
 ["Hereditary fructose intolerance — รุนแรง","พร่อง aldolase B","ar"],
 ["กลไกที่ทำให้ป่วย","fructose-1-phosphate คั่ง ดึง phosphate ไปหมด ตับสร้าง glucose ไม่ได้","vn"],
 ["อาการ","อาเจียน น้ำตาลตก ตัวเหลือง ตับวาย หลังเริ่มกินผลไม้หรือนมผสมซูโครส","bl"],
 ["รักษา","งดฟรุกโตส ซูโครส และซอร์บิทอล","mod"]]),
notes:()=>`<ul>
<li>Lippincott: การพร่อง fructokinase ทำให้เกิด <b>ภาวะไม่รุนแรงคือ essential fructosuria</b> ส่วนการพร่อง aldolase B เป็นตัวที่ร้ายแรง ${S.lir}</li>
<li>enzyme เหล่านี้อยู่ใน <b>ตับ ไต และเยื่อบุลำไส้เล็ก</b> ${S.lir}</li>
<li><b>หลักจำ</b> — ตันที่ <u>คีเนส</u> (ขั้นแรก) ไม่เป็นไร เพราะน้ำตาลยังไม่ถูกดักไว้ · ตันที่ <u>ขั้นถัดไป</u> อันตราย เพราะสารที่ติด phosphate คั่งและดึง phosphate ของเซลล์ไปหมด ${S.x}</li>
<li>หลักเดียวกันนี้ใช้กับกาแลกโตสได้ตรง ๆ ${S.x}</li></ul>`});

SEC.push({id:"galactose",k:"c",t:"Disorders of galactose",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["Galactokinase deficiency — ไม่รุนแรง","กาแลกโตสคั่ง → ต้อกระจกในทารก","gl"],
 ["Classic galactosemia — รุนแรง","พร่อง galactose-1-phosphate uridyltransferase (GALT)","ar"],
 ["อาการ","อาเจียน ตัวเหลือง ตับโต ต้อกระจก intellectual disability · เสี่ยงติดเชื้อ E. coli ในกระแสเลือด","vn"],
 ["เริ่มเมื่อเริ่มกินนม","เพราะแล็กโทสคือแหล่งกาแลกโตสหลัก","bl"],
 ["รักษา","งดแล็กโทสและกาแลกโตสทั้งหมด","mod"]]),
notes:()=>`<ul>
<li>Lippincott: <b>แหล่งกาแลกโตสหลักในอาหารคือแล็กโทส</b> และการเข้าเซลล์ไม่ต้องอาศัย insulin · กาแลกโตสถูกเติม phosphate โดย galactokinase ซึ่ง <b>การพร่องทำให้เกิดต้อกระจก</b> ${S.lir}</li>
<li>ต้อกระจกเกิดเพราะกาแลกโตสส่วนเกินถูกเปลี่ยนเป็น <b>galactitol</b> ที่คั่งในเลนส์แล้วดึงน้ำเข้า ${S.x}</li>
<li>ถ้าเห็นแค่ <b>ต้อกระจกอย่างเดียว</b> ให้นึกถึง galactokinase · ถ้ามี <b>ตับวายและ intellectual disability ร่วมด้วย</b> ให้นึกถึง classic galactosemia ${S.x}</li></ul>`});

SEC.push({id:"sorbitol",k:"c",t:"The polyol pathway & diabetic complications",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["Glucose → sorbitol","aldose reductase · ใช้ NADPH","ar"],
 ["Sorbitol → fructose","sorbitol dehydrogenase · ใช้ NAD⁺","bl"],
 ["เนื้อเยื่อที่ไม่มี enzyme ตัวที่สอง","เลนส์ จอตา ไต เส้นประสาทส่วนปลาย","vn"],
 ["ซอร์บิทอลคั่งและดึงน้ำเข้า","เซลล์บวม เสียหาย","gl"]]),
notes:()=>`<ul>
<li>Lippincott เชื่อมเส้นทางนี้กับ <b>ภาวะแทรกซ้อนทางตา ไต และเส้นประสาทในเบาหวาน</b> โดยตรง ${S.lir}</li>
<li>เนื้อเยื่อที่ <b>มี aldose reductase แต่ไม่มี sorbitol dehydrogenase</b> จะดักซอร์บิทอลไว้ ออกไม่ได้ จึงเสียหายก่อนที่อื่น ${S.x}</li>
<li>เส้นทางนี้ยัง <b>กิน NADPH</b> ทำให้กลูตาไธโอนรีไซเคิลได้น้อยลง ซ้ำเติมความเครียดออกซิเดชัน ${S.x}</li>
<li>เป็นกลไกเดียวกับต้อกระจกจาก galactitol ในภาวะกาแลกโตสสูง ${S.x}</li></ul>`});

SEC.push({id:"sphingo",k:"d",t:"Sphingolipidoses",drugs:"",act:[],leg:[],
draw:()=>tbl(["Disease","Deficient enzyme","Accumulates","Key features"],[
 ["Tay-Sachs","Hexosaminidase A","GM2 ganglioside","จุดแดงที่จอตา ตกใจง่ายผิดปกติ ม้ามไม่โต"],
 ["Niemann-Pick","Sphingomyelinase","Sphingomyelin","จุดแดงที่จอตา ตับและม้ามโต"],
 ["Gaucher","Glucocerebrosidase","Glucocerebroside","ตับม้ามโต กระดูกบาง เซลล์หน้าตาเหมือนกระดาษยับ"],
 ["Fabry","α-galactosidase A","Ceramide trihexoside","X-linked · ผื่นจุดแดง ปวดแสบมือเท้า renal failure"],
 ["Krabbe","Galactocerebrosidase","Galactocerebroside","globoid cell · เสียปลอกไมอีลิน"],
 ["Metachromatic leukodystrophy","Arylsulfatase A","Cerebroside sulfate","เสียปลอกไมอีลิน เดินเซ ปัญญาเสื่อม"]]),
notes:()=>`<ul>
<li>Lippincott: <b>Gaucher</b> ชนิดผู้ใหญ่ทำให้ <b>ตับและม้ามโต กระดูกยาวบาง และเซลล์มีไซโทพลาซึมลักษณะยับย่น</b> โดยเป็นโรคที่ glucosylceramide สะสม ${S.lir}</li>
<li><b>Tay-Sachs เทียบ Niemann-Pick</b> — มีจุดแดงที่จอตาเหมือนกัน แต่ <b>Tay-Sachs ม้ามไม่โต</b> ซึ่งเป็นจุดแยกที่ใช้ได้จริง ${S.x}</li>
<li>เกือบทั้งหมด inheritance แบบ autosomal recessive · <b>ยกเว้น Fabry และ Hunter ที่เป็น X-linked recessive</b> ${S.x}</li>
<li>Tay-Sachs, Niemann-Pick และ Gaucher พบบ่อยในชาว Ashkenazi Jewish ${S.x}</li>
<li>Gaucher เป็นชนิดที่พบบ่อยที่สุดในกลุ่มนี้ และรักษาด้วยการให้ enzyme ทดแทนได้ ${S.x}</li></ul>`});

SEC.push({id:"muco",k:"d",t:"Mucopolysaccharidoses",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["Hurler — autosomal recessive","พร่อง α-L-iduronidase","ar"],
 ["Hurler: อาการ","ใบหน้าหยาบ กระจกตาขุ่น ข้อติด intellectual disability ตับม้ามโต","vn"],
 ["Hunter — X-linked recessive","พร่อง iduronate-2-sulfatase","bl"],
 ["Hunter: ต่างกันตรงไหน","เบากว่า · กระจกตาใส · มีพฤติกรรมก้าวร้าว","gl"],
 ["ทั้งสองโรคสะสม","heparan sulfate และ dermatan sulfate","mod"]]),
notes:()=>`<ul>
<li><b>จุดแยกที่ใช้ได้ทันที</b> — Hurler กระจกตาขุ่น ส่วน Hunter กระจกตาใส ${S.x}</li>
<li>ช่วยจำ: <b>Hunter มองเห็นชัดเพื่อออกล่า</b> (กระจกตาใส) และก้าวร้าวกว่า ${S.x}</li>
<li>Hunter เป็น <b>X-linked</b> จึงพบในเด็กชาย ส่วน Hurler เป็น autosomal recessive ${S.x}</li>
<li>ต่างจาก sphingolipidoses ตรงที่สารที่สะสมคือ <b>ไกลโคสะมิโนไกลแคน</b> ไม่ใช่สฟิงโกลิพิด จึงกระทบกระดูกและเนื้อเยื่อเกี่ยวพันเป็นหลัก ${S.x}</li></ul>`});

const EXTRA=[];

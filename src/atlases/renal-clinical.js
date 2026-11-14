/* ================= Renal — clinical skills: history & physical examination ================= */
Object.assign(S,{bat:'<b class="sbb bat">Bates</b>',x:'<b class="sbb gen">Gen</b>'});
Object.assign(GN,{a:"History",b:"Pain & incontinence",c:"Physical examination",d:"Recording"});

SEC.push({id:"hx",k:"a",t:"Urinary symptoms",mm:"เริ่มที่การซักประวัติ",drugs:"",act:[],leg:[],
draw:()=>tbl(["Symptom","What the patient reports","Points to"],[
 ["Dysuria","แสบขัดขณะถ่าย","Cystitis หรือ urethritis"],
 ["Frequency","ถ่ายบ่อย ครั้งละ<b>น้อย</b>","ความจุลดลง หรือมีการระคายเคือง"],
 ["Urgency","ปวดจนกลั้นแทบไม่อยู่","Detrusor overactivity หรือ infection"],
 ["Hesitancy + weak stream","เริ่มถ่ายยาก ลำไม่แรง","Bladder outlet obstruction"],
 ["Nocturia","ตื่นมาถ่ายกลางดึก","ปัสสาวะมากกลางคืน หรือความจุลดลง"],
 ["Polyuria","ปริมาณรวมต่อวัน<b>มากจริง</b>","Diabetes mellitus · diabetes insipidus · polydipsia"]]),
notes:()=>`<ul>
<li>Bates แยก <b>urinary frequency, nocturia และ polyuria</b> ออกเป็นสามหัวข้อของตัวเอง เพราะผู้ป่วยใช้ปนกันแต่สาเหตุต่างกันสิ้นเชิง ${S.bat}</li>
<li>คำถามเดียวที่แยก frequency ออกจาก polyuria ได้ทันทีคือ <b>"ปริมาณแต่ละครั้งมากหรือน้อย"</b> — บ่อยแต่ครั้งละนิดคือ frequency ส่วนบ่อยและครั้งละมากคือ polyuria ${S.x}</li>
<li>Bates: ในผู้หญิง dysuria อาจเป็น <b>internal urethral discomfort</b> ซึ่งอธิบายว่ารู้สึกเป็นแรงกด หรือเป็น <b>external burning</b> ขณะปัสสาวะไหลผ่าน — สองแบบนี้ชี้ตำแหน่งต่างกัน ${S.bat}</li>
<li>Bates รวบอาการของระบบนี้ไว้เป็นชุดว่า <b>suprapubic pain, frequency, nocturia, polyuria และ incontinence</b> ${S.bat}</li>
<li>ถาม <b>hematuria</b> ทุกราย เพราะ gross hematuria แม้ครั้งเดียวในผู้ใหญ่ต้องสืบค้นหา malignancy ${S.x}</li></ul>`});

SEC.push({id:"pain",k:"b",t:"Localising the pain",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* Anatomy on the left at the level it sits, its description beside it on the right.
    The reader maps a complaint onto a level instead of reading three paragraphs. */
 `<ellipse class="box ar" cx="88" cy="80" rx="34" ry="24"/>
  <ellipse class="box ar" cx="178" cy="80" rx="34" ry="24"/>
  <path class="f" d="M96,102 C104,150 118,180 128,210" style="fill:none;stroke:var(--a-uro);stroke-width:6;opacity:.85"/>
  <path class="f" d="M170,102 C162,150 148,180 138,210" style="fill:none;stroke:var(--a-uro);stroke-width:6;opacity:.85"/>
  <ellipse class="box gl" cx="133" cy="238" rx="52" ry="30"/>
  <path class="ld" d="M216,80 H268"/><path class="ld" d="M160,160 H268"/><path class="ld" d="M189,238 H268"/>
  <text class="t h" x="280" y="68">Kidney</text>
  <text class="s" x="280" y="90">ปวดตื้อต่อเนื่องที่ flank · ผู้ป่วยนอนนิ่ง</text>
  <text class="s" x="280" y="110">ตรวจพบ CVA tenderness</text>
  <text class="t h" x="280" y="152">Ureter</text>
  <text class="s" x="280" y="174">Colic มาเป็นระลอก · ผู้ป่วยอยู่ไม่สุข</text>
  <text class="s" x="280" y="194">ร้าวลง groin</text>
  <text class="t h" x="280" y="230">Bladder</text>
  <text class="s" x="280" y="252">ปวด suprapubic</text>
  <text class="s" x="40" y="306" style="font-weight:600">Acute distention เจ็บมาก · chronic distention มักไม่เจ็บเลย</text>
  <text class="s" x="40" y="328" style="opacity:.78">จึงต้องคลำและเคาะหา ไม่ใช่รอให้ผู้ป่วยบอก</text>`,
 "0 0 640 356"),
notes:()=>`<ul>
<li>Bates ชี้จุดที่คนมักพลาดไว้ชัด ว่า <b>acute overdistention ของกระเพาะปัสสาวะทำให้ปวด ส่วน chronic distention มักไม่ปวด</b> ${S.bat}</li>
<li>ผลในทางปฏิบัติคือ ผู้ป่วย chronic retention อาจมีปัสสาวะค้างเป็นลิตรโดยไม่บ่นเจ็บเลย จึงต้องคลำและเคาะหาเสมอ ไม่ใช่รอให้บอก ${S.x}</li>
<li>Bates ระบุว่าการตรวจที่ใช้เมื่อสงสัย kidney infection คือ <b>percussion ที่ costovertebral angle</b> ${S.bat}</li>
<li>สิ่งที่แยก ureteric colic จาก pyelonephritis ได้ดีที่สุดคือรูปแบบของเวลา — <b>colic มาเป็นระลอกจนผู้ป่วยอยู่ไม่สุข ส่วนการอักเสบปวดตื้อต่อเนื่องและผู้ป่วยมักนอนนิ่ง</b> ${S.x}</li></ul>`});

SEC.push({id:"incont",k:"b",t:"Five types of incontinence",drugs:"",act:[],leg:[],
draw:()=>tbl(["Type","Leaks when","Mechanism"],[
 ["Stress","ไอ จาม ยกของ","แรงดันในช่องท้องชนะ urethral resistance ที่ไม่ดีพอ"],
 ["Urge","ปวดแล้วไปไม่ทัน","Detrusor บีบตัวเอง"],
 ["Overflow","ซึมตลอดเวลาทีละน้อย","ถ่ายไม่ออกจน overdistention"],
 ["Functional","ไปห้องน้ำไม่ทันด้วยเหตุอื่น","การเคลื่อนไหวหรือการรู้คิดบกพร่อง · ทางเดินปัสสาวะปกติ"],
 ["Mixed","มีมากกว่าหนึ่งแบบร่วมกัน","พบบ่อยในผู้สูงอายุ"]]),
notes:()=>`<ul>
<li>Bates แบ่ง incontinence ไว้เป็น <b>ห้ากลุ่มใหญ่</b> ${S.bat}</li>
<li>Bates: ใน <b>stress incontinence แรงดันที่เพิ่มขึ้นชนะ urethral resistance เพราะแรงต้านนั้นไม่ดีพอ</b> ส่วนใน <b>overflow incontinence ความผิดปกติทางระบบประสาททำให้กระเพาะปัสสาวะไม่ถูกระบายจน overdistended</b> ${S.bat}</li>
<li>Bates: <b>functional incontinence เกิดจากข้อจำกัดอื่นที่ไม่ใช่ตัวทางเดินปัสสาวะเอง</b> ${S.bat}</li>
<li>Bates ย้ำว่าการควบคุมการถ่ายปัสสาวะอาศัยกลไกทางประสาทและการเคลื่อนไหวที่ซับซ้อน และ <b>รอยโรคที่ระดับ S2–S4 กระทบการถ่ายปัสสาวะปกติได้</b> ${S.bat}</li>
<li>คำถามคัดกรองสองข้อที่แยกได้เร็วที่สุด: <b>"เล็ดตอนไอหรือจามไหม"</b> ชี้ไปทาง stress และ <b>"ปวดแล้วไปไม่ทันไหม"</b> ชี้ไปทาง urge ${S.x}</li>
<li>Bates ยังระบุคำถามสำคัญไว้ว่า ผู้ป่วยรู้สึกไหมว่ากระเพาะปัสสาวะเต็ม และรู้ตัวไหมว่ากำลังถ่าย ซึ่งช่วยแยกสาเหตุทางประสาทออกมา ${S.bat}</li></ul>`});

SEC.push({id:"exam",k:"c",t:"Abdominal examination & CVA percussion",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["Inspect","รูปร่างหน้าท้อง · scars · distended veins","bl"],
 ["Auscultate ก่อนคลำ","Bowel sounds · renal artery bruit","ar"],
 ["Percuss","หา ascites และขอบ bladder ที่โป่ง","mod"],
 ["Palpate ตื้นแล้วลึก","เริ่มห่างจากจุดที่ปวดเสมอ","vn"],
 ["Palpate kidneys","สองมือประกบ · ให้ผู้ป่วยหายใจเข้าลึก","gl"],
 ["Percuss the CVA","ทำท้ายสุด เพราะเจ็บ","inh"]]),
notes:()=>`<ul>
<li>Bates ให้นิยามตำแหน่งไว้ว่า <b>costovertebral angle เกิดจากขอบล่างของซี่โครงที่ 12 กับกระดูกสันหลัง</b> และเป็นจุดที่ใช้ตรวจหา kidney tenderness ${S.bat}</li>
<li>Bates: ไตวางอยู่ <b>retroperitoneal</b> ซึ่งอธิบายว่าทำไมจึงต้องตรวจทางด้านหลัง ${S.bat}</li>
<li>Bates: <b>เมื่อสงสัย kidney infection ให้ percuss ทางด้านหลังที่ costovertebral angle</b> ${S.bat}</li>
<li>ลำดับการตรวจช่องท้องต่างจากระบบอื่น — <b>ต้อง auscultate ก่อน palpate</b> เพราะการคลำไปรบกวน bowel sounds ${S.x}</li>
<li>Bates อธิบาย <b>ballottement</b> ว่าเป็นการสะกิดให้อวัยวะลอยขึ้นมาให้คลำได้เมื่อมีของเหลวคั่นอยู่ ใช้คลำไตและตับในผู้ป่วยที่มี ascites ${S.bat}</li>
<li>ไตข้างขวาอยู่ต่ำกว่าข้างซ้ายเพราะมีตับกดอยู่ จึงคลำได้ง่ายกว่าโดยเฉพาะในคนผอม ${S.x}</li></ul>`});

SEC.push({id:"record",k:"d",t:"Recording the findings",drugs:"",act:[],leg:[],
notes:()=>`<ul>
<li>Bates ให้ตัวอย่างการบันทึกไว้ตรง ๆ ว่า <b>"Spleen not felt. No costovertebral angle tenderness (CVAT)"</b> ${S.bat}</li>
<li>อีกตัวอย่างหนึ่งสำหรับช่องท้องที่ผิดปกติ ระบุไว้ว่า <b>"Spleen and kidneys not felt. No palpable masses. No CVA tenderness."</b> ${S.bat}</li>
<li>ตัวอย่างการซักประวัติของ Bates ในส่วนระบบปัสสาวะเขียนว่า <b>"No frequency, dysuria, hematuria, or recent flank pain"</b> ซึ่งแสดงว่าอาการที่ไม่มีก็ต้องบันทึก ${S.bat}</li>
<li>Bates ยังแสดงให้เห็นว่าประวัติเก่ามีค่า โดยบันทึกตัวอย่างไว้ว่าเคยเป็น <b>pyelonephritis</b> พร้อมไข้และปวดสีข้างขวา รักษาด้วย ampicillin ${S.bat}</li>
<li>เหตุผลที่ต้องเขียนผลลบด้วย: ผู้อ่านคนถัดไปจะไม่รู้เลยว่าคุณตรวจแล้วไม่พบ หรือไม่ได้ตรวจ ${S.x}</li>
<li>แยกข้อมูลออกจากการตีความ — บันทึกสิ่งที่ตรวจพบ ส่วนชื่อโรคที่คิดไว้อยู่ในส่วน assessment ${S.x}</li></ul>`});

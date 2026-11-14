/* ================= Biochemistry — Genetics 1: principles & inheritance patterns ================= */
Object.assign(S,{tt:'<b class="sbb tt">TT</b>',x:'<b class="sbb gen">Gen</b>'});
Object.assign(GN,{a:"Terms & principles",b:"Beyond Mendel",c:"Population genetics",d:"Inheritance patterns"});

SEC.push({id:"penexp",k:"a",t:"Penetrance & expressivity",mm:"สองคำที่สับสนกันบ่อย",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["Penetrance","มีหรือไม่มี — ร้อยละของคนที่มีจีโนไทป์แล้วแสดงอาการ","ar"],
 ["Expressivity","หนักแค่ไหน — ความรุนแรงของอาการในคนที่แสดงอาการแล้ว","vn"],
 ["ตัวอย่าง penetrance ไม่เต็ม","BRCA1 — มี gene แล้วไม่ใช่ทุกคนเป็น cancer","bl"],
 ["ตัวอย่าง expressivity ผันแปร","Neurofibromatosis type 1 — บางรายมีแค่จุดสีกาแฟ บางรายมีก้อนทั่วตัว","mod"],
 ["ผลต่อพงศาวลี","penetrance ไม่เต็มทำให้ดูเหมือนโรคข้ามรุ่น","gl"]]),
notes:()=>`<ul>
<li>Thompson & Thompson: <b>"Penetrance เป็นแนวคิดแบบมีหรือไม่มี (all-or-none) คือร้อยละของคนที่มีจีโนไทป์เสี่ยง"</b> แล้วแสดงลักษณะนั้นออกมา ${S.tt}</li>
<li>Thompson & Thompson: <b>"Expressivity คือความรุนแรงของการแสดงออกในกลุ่มคนที่มีจีโนไทป์ก่อโรคเดียวกัน"</b> ${S.tt}</li>
<li>Thompson & Thompson: <b>แม้ในครอบครัวเดียวกัน คนสองคนที่มี gene กลายพันธุ์ตัวเดียวกันอาจมีอาการบางอย่างเหมือนกันแต่อาการอื่นต่างกันมาก</b> ขึ้นกับว่าเนื้อเยื่อหรืออวัยวะใดได้รับผลกระทบ ${S.tt}</li>
<li>Thompson & Thompson: <b>penetrance ที่ไม่เต็มทำให้พงศาวลีดูเหมือนมีการข้ามรุ่น</b> และทำให้การให้คำปรึกษาทางพันธุกรรมยากขึ้น เพราะคนที่ดูปกติอาจยังพา gene และ inheritance ต่อได้ ${S.tt}</li>
<li>วิธีจำแยกสองคำ: <b>penetrance ถามว่า "กี่คนแสดงออก" · expressivity ถามว่า "แสดงออกหนักแค่ไหน"</b> ${S.x}</li></ul>`});

SEC.push({id:"allele",k:"a",t:"How alleles behave",drugs:"",act:[],leg:[],
draw:()=>tbl(["Term","Meaning","Example"],[
 ["Codominance","ทั้งสอง allele แสดงออกเต็มที่พร้อมกัน","หมู่เลือด AB · α1-antitrypsin"],
 ["Incomplete dominance","ฟีโนไทป์อยู่กึ่งกลางระหว่างสองแบบ","Familial hypercholesterolemia แบบ heterozygote"],
 ["Dominant negative","protein ผิดเข้าไปขัดขวาง protein ปกติด้วย","mutation ของ p53 บางแบบ"],
 ["Pleiotropy","gene เดียวทำให้เกิดอาการหลายระบบ","PKU · Marfan syndrome"],
 ["Epistasis","gene หนึ่งบดบังการแสดงออกของอีก gene","ผมสีบลอนด์บดบัง gene สีตาบางแบบ"]]),
notes:()=>`<ul>
<li><b>Dominant negative รุนแรงกว่าการขาด gene ไปเฉย ๆ</b> เพราะ protein ผิดไม่ได้แค่ไม่ทำงาน แต่ยังไปจับและทำให้ protein ปกติใช้ไม่ได้ด้วย ${S.x}</li>
<li>ความต่างจาก haploinsufficiency: ในกรณีนั้น protein จากสำเนาที่เหลือทำงานได้ปกติ เพียงแต่ปริมาณไม่พอ ${S.x}</li>
<li>Thompson & Thompson เรียกโรคที่ heterozygote มีอาการกึ่งกลางว่า <b>incompletely dominant หรือ semidominant</b> ${S.tt}</li>
<li>Pleiotropy อธิบายว่าทำไมโรคพันธุกรรมหลายโรคจึงมาด้วยอาการที่ดูไม่เกี่ยวกันเลย เช่น Marfan ที่กระทบทั้งตา หัวใจและโครงกระดูก ${S.x}</li></ul>`});

SEC.push({id:"hetero",k:"a",t:"Heterogeneity & loss of heterozygosity",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["Locus heterogeneity","โรคเดียวกันเกิดจาก gene คนละตัว เช่น retinitis pigmentosa","ar"],
 ["Allelic heterogeneity","gene ตัวเดียวกันแต่กลายพันธุ์คนละตำแหน่ง เช่น β-thalassemia","vn"],
 ["Loss of heterozygosity","สำเนาปกติที่เหลืออยู่เสียไปด้วย → เซลล์กลายเป็น cancer","bl"],
 ["ใช้กับ gene กลุ่มไหน","tumor suppressor gene ซึ่งต้องเสียทั้งสองสำเนา","mod"],
 ["ไม่ใช้กับกลุ่มไหน","oncogene ซึ่งเสียสำเนาเดียวก็พอ","gl"]]),
notes:()=>`<ul>
<li>Thompson & Thompson แยกชัดว่าฟีโนไทป์ที่คล้ายกันอาจมาจาก <b>mutation คนละ locus (locus heterogeneity)</b> หรือคนละ allele ใน gene เดียวกัน ${S.tt}</li>
<li>Thompson & Thompson ยกตัวอย่าง split-hand malformation ว่า <b>แสดง locus heterogeneity โดยมี locus ที่เกี่ยวข้องอย่างน้อยหลายตำแหน่ง</b> ${S.tt}</li>
<li>LOH คือกลไกที่ทำให้ "two-hit hypothesis" ของ Knudson เป็นจริง — คนที่รับ gene เสียมาแต่กำเนิดต้องการ hit เดียวเพิ่ม จึงเป็น cancer เร็วกว่าและมักเป็นสองข้าง ${S.x}</li>
<li>Retinoblastoma เป็นตัวอย่างคลาสสิก: แบบที่ inheritance มักเป็นสองข้างและอายุน้อย ส่วนแบบที่เกิดเองมักข้างเดียวและอายุมากกว่า ${S.x}</li></ul>`});

SEC.push({id:"mosaic",k:"b",t:"Mosaicism",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["Mosaicism คืออะไร","คนคนเดียวมีเซลล์สองกลุ่มที่มีพันธุกรรมต่างกัน จาก mutation หลังปฏิสนธิ","ar"],
 ["Somatic mosaicism","เกิดในเซลล์ร่างกาย · ไม่ inheritance · เช่น McCune-Albright","vn"],
 ["Germline mosaicism","เกิดใน germ cell · พ่อแม่ปกติแต่มีลูกเป็นโรคได้มากกว่าหนึ่งคน","bl"],
 ["ทำไมสำคัญทางคลินิก","อธิบายการเกิดซ้ำในครอบครัวที่ตรวจพ่อแม่แล้วไม่พบ gene","mod"],
 ["ตัวอย่างที่พบบ่อย","Duchenne muscular dystrophy และ osteogenesis imperfecta","gl"]]),
notes:()=>`<ul>
<li>Germline mosaicism เป็นคำตอบของคำถามที่พบบ่อยในคลินิก — <b>ทำไมพ่อแม่ที่ตรวจไม่พบ mutation จึงมีลูกเป็นโรคเดียวกันสองคน</b> ${S.x}</li>
<li>ผลในทางปฏิบัติ: โอกาสเกิดซ้ำไม่ได้เป็นศูนย์แม้ตรวจเลือดพ่อแม่แล้วปกติ จึงต้องแจ้งในการให้คำปรึกษา ${S.x}</li>
<li>Lyonization เป็น mosaicism ตามธรรมชาติในผู้หญิงทุกคน — chromosome X หนึ่งแท่งถูกปิดแบบสุ่มในแต่ละเซลล์ตั้งแต่ระยะตัวอ่อน ${S.x}</li>
<li>นี่คือเหตุผลที่ผู้หญิงพาหะของโรค X-linked recessive บางคนมีอาการอ่อน ๆ ถ้าบังเอิญปิด X ข้างปกติไปมากกว่า ${S.x}</li></ul>`});

SEC.push({id:"imprint",k:"b",t:"Imprinting & uniparental disomy",drugs:"",act:[],leg:[],
draw:()=>tbl(["","Prader-Willi","Angelman"],[
 ["gene ที่หายไป","จากฝั่ง<b>พ่อ</b>","จากฝั่ง<b>แม่</b>"],
 ["สาเหตุที่พบบ่อยสุด","ขาดหายที่ 15q11-q13 ราว 70%","ขาดหายที่ตำแหน่งเดียวกัน"],
 ["จาก UPD","ราว 30% มี chr15 สองแท่งจากแม่","ราว 3–5% มี chr15 สองแท่งจากพ่อ"],
 ["อาการเด่น","อ้วน กินไม่หยุด มือเท้าเล็ก เตี้ย hypogonadism","หัวเราะไม่หยุด ชัก เดินเซ พูดไม่ได้"]]),
notes:()=>`<ul>
<li>Thompson & Thompson: Prader-Willi มีลักษณะ <b>อ้วน กินมากและกินไม่เลือก มือเท้าเล็ก ตัวเตี้ย hypogonadism และ intellectual disability</b> ${S.tt}</li>
<li>Thompson & Thompson: <b>ราว 70% ของผู้ป่วยมีการขาดหายที่แขนยาวส่วนต้นของ chromosome 15 (15q11-q13) ซึ่งเกิดเฉพาะบนแท่งที่รับมาจากพ่อ</b> ${S.tt}</li>
<li>Thompson & Thompson: <b>ราว 30% ของผู้ป่วย Prader-Willi ไม่พบการขาดหาย แต่มี chromosome 15 ปกติสองแท่งที่รับมาจากแม่ทั้งคู่</b> ซึ่งคือ uniparental disomy ${S.tt}</li>
<li>Thompson & Thompson: <b>ราว 3–5% ของผู้ป่วย Angelman มี UPD เช่นกัน โดยเป็น chromosome 15 สองแท่งจากฝั่งพ่อ</b> ${S.tt}</li>
<li>หลักการที่ใช้เข้าใจทั้งตาราง: <b>gene ที่ถูก imprint จะถูกปิดจากฝั่งหนึ่งอยู่แล้ว จึงเหลือสำเนาทำงานเพียงฝั่งเดียว ถ้าฝั่งนั้นหายไปก็ไม่เหลืออะไรเลย</b> ${S.x}</li>
<li>สองโรคนี้จึงเป็นหลักฐานยืนยันว่า <b>Prader-Willi เกิดจากการเสียส่วนของพ่อ ส่วน Angelman เกิดจากการเสียส่วนของแม่ ที่ตำแหน่ง 15q11-q13</b> ${S.tt}</li></ul>`});

SEC.push({id:"mito",k:"b",t:"Heteroplasmy & maternal inheritance",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["inheritance อย่างไร","จากแม่สู่ลูกทุกคน · พ่อไม่ inheritance","ar"],
 ["Homoplasmy","mitochondria ทุกตัวในเซลล์เหมือนกันหมด","bl"],
 ["Heteroplasmy","มีทั้งแบบกลายพันธุ์และแบบปกติปนกัน","vn"],
 ["ผลของ heteroplasmy","ความรุนแรงต่างกันมากแม้ในครอบครัวเดียวกัน","mod"],
 ["โรคตัวอย่าง","MELAS · MERRF · Leber hereditary optic neuropathy","gl"]]),
notes:()=>`<ul>
<li>Thompson & Thompson: ลูกอาจ <b>ได้รับ mitochondria ผสมกัน บางตัวมี mutation และบางตัวไม่มี ซึ่งคือ heteroplasmy</b> ${S.tt}</li>
<li>Thompson & Thompson: <b>ลูกทุกคนของแม่ที่เป็น homoplasmic สำหรับ mutation จะได้รับ mutation นั้นไปด้วย</b> ${S.tt}</li>
<li>Thompson & Thompson: <b>สัดส่วนของ mitochondria ที่กลายพันธุ์ในลูกเป็นตัวกำหนดทั้งความเสี่ยงและความรุนแรงของโรค</b> ${S.tt}</li>
<li>Thompson & Thompson ระบุว่าการ inheritance จากพ่อเกิดได้น้อยมากแต่ไม่เป็นศูนย์ จึง <b>ต้องนึกถึงในผู้ป่วยที่ดูเหมือนเกิดขึ้นเองโดยไม่มีประวัติครอบครัว</b> ${S.tt}</li>
<li>จุดที่ใช้แยกจากรูปแบบอื่นในพงศาวลี: <b>ผู้ชายที่เป็นโรคจะไม่มีลูกที่เป็นโรคเลย</b> ซึ่งไม่มีรูปแบบอื่นใดให้ภาพแบบนี้ ${S.x}</li></ul>`});

SEC.push({id:"hw",k:"c",t:"The Hardy-Weinberg law",drugs:"",act:[],leg:[],
draw:()=>cards([
 ["สูตรความถี่ allele","p + q = 1","bl"],
 ["สูตรความถี่จีโนไทป์","p² + 2pq + q² = 1","ar"],
 ["อ่านอย่างไร","p² คือ homozygote เด่น · 2pq คือพาหะ · q² คือ homozygote ด้อย","vn"],
 ["ใช้ในโรค X-linked","ความชุกในชาย = q · ในหญิง = q²","mod"],
 ["สมมติฐานที่ต้องเป็นจริง","สุ่มจับคู่ · ประชากรใหญ่ · ไม่มีการคัดเลือก · ไม่มี mutation · ไม่มีการย้ายถิ่น","gl"]]),
notes:()=>`<ul>
<li>Thompson & Thompson ระบุสมมติฐานของกฎนี้ว่า <b>ประชากรต้องใหญ่และจับคู่กันแบบสุ่มเมื่อเทียบกับ locus ที่สนใจ</b> ${S.tt}</li>
<li>Thompson & Thompson: ความถี่ของ allele คงที่ได้เพราะ <b>ไม่มีอัตรา mutation ที่มีนัยสำคัญ ทุกจีโนไทป์มีโอกาสสืบพันธุ์และส่งต่อ gene เท่ากัน คือไม่มีการคัดเลือกต่อจีโนไทป์ใด</b> และไม่มีการอพยพเข้าจากประชากรที่มีความถี่ต่างออกไป ${S.tt}</li>
<li>Thompson & Thompson: องค์ประกอบที่สองของกฎคือ <b>ถ้าความถี่ของ allele ไม่เปลี่ยนข้ามรุ่น สัดส่วนของจีโนไทป์ก็จะไม่เปลี่ยนเช่นกัน</b> ${S.tt}</li>
<li>ทางลัดที่ใช้ได้บ่อยเมื่อโรคพบน้อย: <b>p ใกล้ 1 มาก ความถี่พาหะ 2pq จึงประมาณได้ด้วย 2q</b> ${S.x}</li>
<li>การที่ชายเป็นโรค X-linked recessive บ่อยกว่าหญิงมาก มาจากคณิตศาสตร์ตรง ๆ — <b>q เทียบกับ q²</b> ${S.x}</li></ul>`});

SEC.push({id:"ad",k:"d",t:"Autosomal dominant & recessive",drugs:"",act:[],leg:[],
draw:()=>tbl(["","Autosomal dominant","Autosomal recessive"],[
 ["พบในพงศาวลี","ทุกรุ่นติดต่อกัน","มักข้ามรุ่น ปรากฏเป็นกลุ่มพี่น้อง"],
 ["เพศ","ชายและหญิงเท่ากัน","ชายและหญิงเท่ากัน"],
 ["พ่อหรือแม่","มีฝ่ายหนึ่งเป็นโรค","ทั้งคู่เป็นพาหะและปกติ"],
 ["โอกาสของลูก","50%","25% เป็นโรค · 50% เป็นพาหะ"],
 ["ลักษณะ protein","มักเป็น protein โครงสร้างหรือตัวรับ","มักเป็น<b>enzyme</b>"],
 ["อายุที่เริ่มมีอาการ","มักช้ากว่า","มักตั้งแต่เด็ก"]]),
notes:()=>`<ul>
<li>เหตุผลเบื้องหลังข้อที่ว่าโรคด้อยมักเป็น enzyme: <b>enzyme เหลือ 50% มักยังพอใช้งาน พาหะจึงปกติ</b> ส่วน protein โครงสร้างที่ผิดไปครึ่งหนึ่งมักรบกวนการประกอบเข้าด้วยกัน ${S.x}</li>
<li>การแต่งงานในเครือญาติเพิ่มโอกาสของโรคด้อย เพราะเพิ่มโอกาสที่พ่อแม่จะพา allele หายากตัวเดียวกัน ${S.x}</li>
<li>โรคเด่นหลายโรคแสดงอาการช้า ซึ่งเป็นเหตุผลที่ยัง inheritance ต่อได้ก่อนที่ผู้ป่วยจะรู้ตัว เช่น Huntington disease ${S.x}</li>
<li>ถ้าพงศาวลีมีพ่อแม่ปกติทั้งคู่แต่ลูกหลายคนเป็นโรค ให้คิดถึง inheritance ลักษณะด้อยก่อน แล้วจึงนึกถึง germline mosaicism เป็นลำดับถัดไป ${S.x}</li></ul>`});

SEC.push({id:"xlink",k:"d",t:"X-linked & mitochondrial",drugs:"",act:[],leg:[],
draw:()=>tbl(["Pattern","Decisive pedigree clue","Example"],[
 ["X-linked recessive","ชายเป็นมากกว่า · <b>ไม่มีการส่งจากพ่อสู่ลูกชาย</b> · ส่งผ่านแม่ที่เป็นพาหะ","Hemophilia A และ B · G6PD · Duchenne"],
 ["X-linked dominant","<b>พ่อที่เป็นโรคส่งต่อลูกสาวทุกคนและไม่ส่งลูกชายเลย</b>","Hypophosphatemic rickets · Rett"],
 ["Mitochondrial","<b>แม่ส่งต่อลูกทุกคน · พ่อไม่ส่งต่อใครเลย</b>","MELAS · LHON"],
 ["Autosomal dominant","ทุกรุ่น · ส่งได้ทั้งพ่อและแม่ ทั้งลูกชายและลูกสาว","Marfan · Huntington"]]),
notes:()=>`<ul>
<li>กฎข้อเดียวที่ตัดตัวเลือกได้เร็วที่สุด: <b>พ่อไม่เคยส่ง chromosome X ให้ลูกชาย</b> เพราะลูกชายได้ Y จากพ่อ ดังนั้นพบการส่งพ่อสู่ลูกชายเมื่อไร ตัดโรค X-linked ออกได้ทันที ${S.x}</li>
<li>กลับกัน <b>พ่อที่เป็นโรค X-linked dominant จะมีลูกสาวเป็นโรคทุกคน</b> เพราะลูกสาวทุกคนได้ X จากพ่อแน่นอน ${S.x}</li>
<li>Mitochondrial กับ X-linked dominant สลับภาพกันพอดี — อันหนึ่งส่งผ่านแม่ล้วน อีกอันเด่นชัดที่ฝั่งพ่อ ${S.x}</li>
<li>ผู้หญิงพาหะของ X-linked recessive อาจมีอาการได้ถ้า <b>การปิด X แบบสุ่มเอนไปทางปิด X ข้างปกติ</b> ซึ่งเรียก skewed X-inactivation ${S.x}</li></ul>`});

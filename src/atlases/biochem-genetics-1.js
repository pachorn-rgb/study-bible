/* ================= Biochemistry — Genetics 1: principles & inheritance patterns ================= */
Object.assign(S,{tt:'<b class="sbb tt">TT</b>',x:'<b class="sbb gen">Gen</b>'});
Object.assign(GN,{a:"Terms & principles",b:"Beyond Mendel",c:"Population genetics",d:"Inheritance patterns"});

SEC.push({id:"penexp",k:"a",t:"Penetrance & expressivity",mm:"สองคำที่สับสนกันบ่อย",drugs:"",act:[],leg:[],
draw:()=>tbl(["","Penetrance","Expressivity"],[
 ["Asks","Does it show at all?","How badly does it show?"],
 ["Measures","The share of people with the genotype who show the trait","The severity among those who do show it"],
 ["Example","BRCA1 — not every carrier develops cancer","Neurofibromatosis type 1 — café-au-lait spots only, or tumours everywhere"]]),
notes:()=>`<ul>
<li>Thompson & Thompson: <b>"Penetrance เป็นแนวคิดแบบมีหรือไม่มี (all-or-none) คือร้อยละของคนที่มีจีโนไทป์เสี่ยง"</b> แล้วแสดงลักษณะนั้นออกมา ${S.tt}</li>
<li>Thompson & Thompson: <b>"Expressivity คือความรุนแรงของการแสดงออกในกลุ่มคนที่มีจีโนไทป์ก่อโรคเดียวกัน"</b> ${S.tt}</li>
<li>Thompson & Thompson: <b>แม้ในครอบครัวเดียวกัน คนสองคนที่มี gene กลายพันธุ์ตัวเดียวกันอาจมีอาการบางอย่างเหมือนกันแต่อาการอื่นต่างกันมาก</b> ขึ้นกับว่าเนื้อเยื่อหรืออวัยวะใดได้รับผลกระทบ ${S.tt}</li>
<li>Thompson & Thompson: <b>penetrance ที่ไม่เต็มทำให้พงศาวลีดูเหมือนมีการข้ามรุ่น</b> และทำให้การให้คำปรึกษาทางพันธุกรรมยากขึ้น เพราะคนที่ดูปกติอาจยังพา gene และ inheritance ต่อได้ ${S.tt}</li>
<li>วิธีจำแยกสองคำ: <b>penetrance ถามว่า "กี่คนแสดงออก" · expressivity ถามว่า "แสดงออกหนักแค่ไหน"</b> ${S.x}</li>
<li>penetrance ที่ไม่เต็มทำให้พงศาวลี<b>ดูเหมือนโรคข้ามรุ่น</b> ทั้งที่ยีนส่งต่อมาตลอด ${S.x}</li></ul>`});

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
draw:()=>psvg(
 /* Two words that sound alike mean opposite things, and the difference is positional:
    different genes above, different places in one gene below. */
 `<rect class="box bl" x="20" y="24" width="600" height="142" rx="14"/>
  ${T(46,50,"Locus heterogeneity",{a:"start",c:"h"})}
  <rect class="box ar" x="70" y="84" width="190" height="20" rx="8"/>${T(165,76,"Gene A",{c:"s"})}
  <rect x="140" y="84" width="14" height="20" style="fill:var(--sb-bad)"/>
  <rect class="box ar" x="330" y="84" width="190" height="20" rx="8"/>${T(425,76,"Gene B",{c:"s"})}
  <rect x="430" y="84" width="14" height="20" style="fill:var(--sb-bad)"/>
  ${arr("M165,110 L300,128")}${arr("M425,110 L340,128")}
  ${T(320,152,"one disease — retinitis pigmentosa",{c:"bh"})}
  <rect class="box ar" x="20" y="186" width="600" height="118" rx="14"/>
  ${T(46,212,"Allelic heterogeneity",{a:"start",c:"h"})}
  <rect class="box bl" x="180" y="240" width="280" height="20" rx="8"/>${T(320,232,"One gene",{c:"s"})}
  <rect x="226" y="240" width="14" height="20" style="fill:var(--sb-bad)"/>
  <rect x="380" y="240" width="14" height="20" style="fill:var(--sb-bad)"/>
  ${T(320,288,"β-thalassaemia — many different mutations in HBB",{c:"bh"})}`,
 "0 0 640 318"),
notes:()=>`<ul>
<li>Thompson & Thompson แยกชัดว่าฟีโนไทป์ที่คล้ายกันอาจมาจาก <b>mutation คนละ locus (locus heterogeneity)</b> หรือคนละ allele ใน gene เดียวกัน ${S.tt}</li>
<li>Thompson & Thompson ยกตัวอย่าง split-hand malformation ว่า <b>แสดง locus heterogeneity โดยมี locus ที่เกี่ยวข้องอย่างน้อยหลายตำแหน่ง</b> ${S.tt}</li>
<li>LOH คือกลไกที่ทำให้ "two-hit hypothesis" ของ Knudson เป็นจริง — คนที่รับ gene เสียมาแต่กำเนิดต้องการ hit เดียวเพิ่ม จึงเป็น cancer เร็วกว่าและมักเป็นสองข้าง ${S.x}</li>
<li>Retinoblastoma เป็นตัวอย่างคลาสสิก: แบบที่ inheritance มักเป็นสองข้างและอายุน้อย ส่วนแบบที่เกิดเองมักข้างเดียวและอายุมากกว่า ${S.x}</li>
<li><b>Loss of heterozygosity</b> — สำเนาปกติที่เหลืออยู่เสียไปด้วย เซลล์จึงกลายเป็น cancer · ใช้กับ <b>tumor suppressor gene</b> ที่ต้องเสียทั้งสองสำเนา ไม่ใช้กับ oncogene ที่เสียสำเนาเดียวก็พอ ${S.x}</li></ul>`});

SEC.push({id:"mosaic",k:"b",t:"Mosaicism",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* Mosaicism is about when, not what: the later the mutation, the smaller the patch of cells
    that carries it — so the tree of divisions is the explanation. */
 `${T(320,26,"mutation arises after fertilisation",{c:"s"})}
  <path class="ld" d="M372,32 L400,86"/>
  <path class="ld" d="M320,64 L240,96 M320,64 L400,96 M240,128 L200,160 M240,128 L280,160 M400,128 L360,160 M400,128 L440,160" style="stroke-width:1.6"/>
  ${[180,220,260,300].map(x=>`<path class="ld" d="M${x<240?200:280},192 L${x},216" style="stroke-width:1.6"/>`).join("")}
  ${[340,380,420,460].map(x=>`<path class="ld" d="M${x<400?360:440},192 L${x},216" style="stroke-width:1.6"/>`).join("")}
  <circle class="box bl" cx="320" cy="48" r="16"/>
  <circle class="box bl" cx="240" cy="112" r="16"/>
  <circle class="box ar" cx="400" cy="112" r="16" style="stroke:var(--sb-bad);stroke-width:2.4"/>
  ${[200,280].map(x=>`<circle class="box bl" cx="${x}" cy="176" r="14"/>`).join("")}
  ${[360,440].map(x=>`<circle class="box ar" cx="${x}" cy="176" r="14" style="stroke:var(--sb-bad);stroke-width:2.4"/>`).join("")}
  ${[180,220,260,300].map(x=>`<circle class="box bl" cx="${x}" cy="230" r="12"/>`).join("")}
  ${[340,380,420,460].map(x=>`<circle class="box ar" cx="${x}" cy="230" r="12" style="stroke:var(--sb-bad);stroke-width:2.4"/>`).join("")}
  ${T(196,116,"normal line",{a:"end",c:"s"})}${T(506,116,"mutant line",{a:"start",c:"bad"})}
  ${T(400,276,"the mutant patch is somatic mosaicism in body cells,",{c:"s"})}
  ${T(400,296,"germline mosaicism if it reaches the germ cells",{c:"s"})}`,
 "0 0 640 312"),
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
draw:()=>psvg(
 /* Two pedigrees settle the rule faster than any sentence: everything the mother has, the
    children have; nothing the father has reaches them. */
 `${T(126,36,"affected mother",{c:"s"})}
  <circle cx="92" cy="64" r="15" style="fill:var(--a-art);stroke:var(--a-art)"/>
  <rect class="box" x="146" y="49" width="30" height="30" rx="4"/>
  <path class="ld" d="M107,64 L146,64 M126,64 L126,96 M62,96 L190,96 M62,96 L62,114 M126,96 L126,114 M190,96 L190,114"/>
  <circle cx="62" cy="130" r="15" style="fill:var(--a-art);stroke:var(--a-art)"/>
  <rect x="111" y="115" width="30" height="30" rx="4" style="fill:var(--a-art);stroke:var(--a-art)"/>
  <circle cx="190" cy="130" r="15" style="fill:var(--a-art);stroke:var(--a-art)"/>
  ${T(126,172,"every child affected",{c:"s"})}
  ${T(366,36,"affected father",{c:"s"})}
  <rect x="317" y="49" width="30" height="30" rx="4" style="fill:var(--a-art);stroke:var(--a-art)"/>
  <circle class="box" cx="400" cy="64" r="15"/>
  <path class="ld" d="M347,64 L385,64 M366,64 L366,96 M302,96 L430,96 M302,96 L302,114 M366,96 L366,114 M430,96 L430,114"/>
  <circle class="box" cx="302" cy="130" r="15"/>
  <rect class="box" x="351" y="115" width="30" height="30" rx="4"/>
  <circle class="box" cx="430" cy="130" r="15"/>
  ${T(366,172,"no child affected",{c:"s"})}
  <circle class="box bl" cx="534" cy="104" r="56"/>
  ${[[512,84],[552,88],[520,118],[556,120],[534,66]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="11" ry="7" style="fill:var(--a-art);stroke:none"/>`).join("")}
  ${[[500,104],[566,104],[534,136]].map(([x,y])=>`<ellipse cx="${x}" cy="${y}" rx="11" ry="7" style="fill:var(--sb-muted);stroke:none"/>`).join("")}
  ${T(534,180,"heteroplasmy",{c:"bh"})}
  ${T(534,200,"mutant and normal mixed",{c:"s"})}
  ${T(320,238,"the proportion of mutant mitochondria sets how severe it is",{c:"s"})}
  ${T(320,262,"MELAS · MERRF · Leber hereditary optic neuropathy",{c:"s"})}`,
 "0 0 640 280"),
notes:()=>`<ul>
<li>Thompson & Thompson: ลูกอาจ <b>ได้รับ mitochondria ผสมกัน บางตัวมี mutation และบางตัวไม่มี ซึ่งคือ heteroplasmy</b> ${S.tt}</li>
<li>Thompson & Thompson: <b>ลูกทุกคนของแม่ที่เป็น homoplasmic สำหรับ mutation จะได้รับ mutation นั้นไปด้วย</b> ${S.tt}</li>
<li>Thompson & Thompson: <b>สัดส่วนของ mitochondria ที่กลายพันธุ์ในลูกเป็นตัวกำหนดทั้งความเสี่ยงและความรุนแรงของโรค</b> ${S.tt}</li>
<li>Thompson & Thompson ระบุว่าการ inheritance จากพ่อเกิดได้น้อยมากแต่ไม่เป็นศูนย์ จึง <b>ต้องนึกถึงในผู้ป่วยที่ดูเหมือนเกิดขึ้นเองโดยไม่มีประวัติครอบครัว</b> ${S.tt}</li>
<li>จุดที่ใช้แยกจากรูปแบบอื่นในพงศาวลี: <b>ผู้ชายที่เป็นโรคจะไม่มีลูกที่เป็นโรคเลย</b> ซึ่งไม่มีรูปแบบอื่นใดให้ภาพแบบนี้ ${S.x}</li></ul>`});

SEC.push({id:"hw",k:"c",t:"The Hardy-Weinberg law",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* The square is where the equation comes from, so the square is what gets drawn:
    two gamete frequencies multiplied give the three genotype frequencies. */
 `${T(320,40,"eggs",{c:"s m"})}
  ${T(250,68,"p (A)",{c:"bh"})}${T(390,68,"q (a)",{c:"bh"})}
  ${T(112,176,"sperm",{c:"s m"})}
  ${T(166,135,"p (A)",{a:"end",c:"bh"})}${T(166,225,"q (a)",{a:"end",c:"bh"})}
  <rect class="box ar" x="180" y="80" width="140" height="90"/>${T(250,126,"p²",{c:"bb"})}${T(250,150,"AA",{c:"s"})}
  <rect class="box bl" x="320" y="80" width="140" height="90"/>${T(390,126,"pq",{c:"bb"})}${T(390,150,"Aa",{c:"s"})}
  <rect class="box bl" x="180" y="170" width="140" height="90"/>${T(250,216,"pq",{c:"bb"})}${T(250,240,"Aa",{c:"s"})}
  <rect class="box gl" x="320" y="170" width="140" height="90"/>${T(390,216,"q²",{c:"bb"})}${T(390,240,"aa",{c:"s"})}
  ${T(320,290,"p + q = 1 · p² + 2pq + q² = 1 · carriers = 2pq",{c:"bh"})}`,
 "0 0 640 306"),
notes:()=>`<ul>
<li>Thompson & Thompson ระบุสมมติฐานของกฎนี้ว่า <b>ประชากรต้องใหญ่และจับคู่กันแบบสุ่มเมื่อเทียบกับ locus ที่สนใจ</b> ${S.tt}</li>
<li>Thompson & Thompson: ความถี่ของ allele คงที่ได้เพราะ <b>ไม่มีอัตรา mutation ที่มีนัยสำคัญ ทุกจีโนไทป์มีโอกาสสืบพันธุ์และส่งต่อ gene เท่ากัน คือไม่มีการคัดเลือกต่อจีโนไทป์ใด</b> และไม่มีการอพยพเข้าจากประชากรที่มีความถี่ต่างออกไป ${S.tt}</li>
<li>Thompson & Thompson: องค์ประกอบที่สองของกฎคือ <b>ถ้าความถี่ของ allele ไม่เปลี่ยนข้ามรุ่น สัดส่วนของจีโนไทป์ก็จะไม่เปลี่ยนเช่นกัน</b> ${S.tt}</li>
<li>ทางลัดที่ใช้ได้บ่อยเมื่อโรคพบน้อย: <b>p ใกล้ 1 มาก ความถี่พาหะ 2pq จึงประมาณได้ด้วย 2q</b> ${S.x}</li>
<li>การที่ชายเป็นโรค X-linked recessive บ่อยกว่าหญิงมาก มาจากคณิตศาสตร์ตรง ๆ — <b>q เทียบกับ q²</b> ${S.x}</li>
<li>ในโรค <b>X-linked</b> ความชุกในเพศชายเท่ากับ q ส่วนในเพศหญิงเท่ากับ q² ${S.x}</li>
<li>สมมติฐานที่ต้องเป็นจริง — สุ่มจับคู่ · ประชากรใหญ่ · ไม่มีการคัดเลือก · ไม่มี mutation · ไม่มีการย้ายถิ่น ${S.x}</li></ul>`});

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

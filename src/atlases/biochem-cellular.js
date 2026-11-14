/* ================= Biochemistry — Cellular: organelles, cytoskeleton & connective tissue ================= */
Object.assign(S,{lir:'<b class="sbb lir">LIR</b>',tbbio:'<b class="sbb tbbio">TB</b>',x:'<b class="sbb gen">Gen</b>'});
Object.assign(GN,{a:"Cell cycle & organelles",b:"Cytoskeleton",c:"Membrane transport",d:"Connective tissue"});

SEC.push({id:"cellcyc",k:"a",t:"cell cycle",mm:"เซลล์แบ่งตัว",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["G₁ — growth and preparation","สร้าง protein และออร์แกเนลล์ · มีจุดตรวจก่อนเข้า S","bl"],
 ["S — DNA replication","ได้ chromosome สองโครมาทิด · ribonucleotide reductase ทำงานช่วงนี้","ar"],
 ["G₂ — checking the copy","ตรวจว่าจำลองครบและไม่เสียหายก่อนแบ่ง","mod"],
 ["M — mitosis","ระยะสั้นที่สุด · แบ่งทั้งนิวเคลียสและไซโทพลาซึม","vn"],
 ["G₀ — out of the cycle","เซลล์ที่ไม่แบ่งตัวแล้ว เช่น neuron cardiac muscle","gl"]]),
notes:()=>`<ul>
<li>แบ่งเซลล์ตามความสามารถในการแบ่งตัวได้สามกลุ่ม: <b>labile แบ่งตลอดเวลา</b> เช่นเยื่อบุลำไส้ bone marrow ผิวหนัง · <b>stable อยู่ใน G₀ แต่กลับมาแบ่งได้เมื่อถูกกระตุ้น</b> เช่นตับและไต · <b>permanent ออกจากวงจรถาวร</b> เช่น neuron cardiac muscle และ skeletal muscle ${S.x}</li>
<li>การแบ่งสามกลุ่มนี้อธิบายคลินิกได้ตรง ๆ — <b>ตับงอกใหม่ได้หลังผ่าตัด แต่ cardiac muscle ที่ตายจาก cardiac muscle ขาดเลือดกลายเป็นพังผืดถาวร</b> ${S.x}</li>
<li>เซลล์กลุ่ม labile คือกลุ่มที่โดนผลข้างเคียงของ chemotherapy ก่อน จึงเกิด bone marrow กด เยื่อบุปากอักเสบและผมร่วง ${S.x}</li>
<li>จุดตรวจที่สำคัญที่สุดคือรอยต่อ G₁/S ซึ่งเป็นจุดที่ p53 ทำงาน — ถ้า DNA เสียหายก็หยุดวงจรไว้ซ่อมหรือสั่งให้เซลล์ตาย ${S.x}</li></ul>`});

SEC.push({id:"er",k:"a",t:"Rough vs smooth endoplasmic reticulum",drugs:"",act:[],leg:[],
draw:()=>tbl(["","Rough ER","Smooth ER"],[
 ["มี ribosome ไหม","มี","ไม่มี"],
 ["หน้าที่หลัก","สร้าง protein ที่จะหลั่งออกและ protein ของเยื่อหุ้ม","สร้างสเตียรอยด์ · สลายสารพิษ · เก็บ calcium"],
 ["เซลล์ที่มีมาก","พลาสมาเซลล์ · pancreas ส่วนสร้าง enzyme","ตับ · adrenal cortex · อัณฑะและรังไข่"],
 ["ข้อสังเกตทางคลินิก","Nissl body ใน neuron คือ RER","เพิ่มจำนวนเมื่อได้รับยาที่ต้องสลายที่ตับ"]]),
notes:()=>`<ul>
<li>Lippincott อธิบายเส้นทางของ protein ที่จะหลั่งออกไว้ชัดในกรณี collagen: <b>ลำดับสัญญาณช่วยให้ ribosome จับกับ RER และนำสาย protein เข้าสู่ช่องว่างภายใน RER จากนั้นลำดับสัญญาณถูกตัดออกอย่างรวดเร็ว</b> ${S.lir}</li>
<li>Textbook of Biochemistry ระบุว่า <b>Na⁺,K⁺-ATPase เป็นตัวบ่งชี้ของ plasma membrane</b> ซึ่งเป็นหลักการเดียวกับการใช้ enzyme เฉพาะระบุออร์แกเนลล์แต่ละชนิด ${S.tbbio}</li>
<li>หลักที่ใช้เดาได้เสมอ: เซลล์ที่หลั่ง protein มากจะมี RER มาก ส่วนเซลล์ที่สร้างฮอร์โมนสเตียรอยด์หรือสลายยาจะมี SER มาก ${S.x}</li>
<li>ยาที่กระตุ้น enzyme ตับหลายตัวทำให้ SER ของเซลล์ตับเพิ่มจำนวนขึ้นอย่างเห็นได้ชัด ${S.x}</li></ul>`});

SEC.push({id:"perox",k:"a",t:"Peroxisome & proteasome",drugs:"",act:[],leg:[],
draw:()=>tbl(["","Peroxisome","Proteasome"],[
 ["Job","β-oxidation of very-long-chain fatty acids · disposes of H₂O₂ · makes bile acids","Digests proteins tagged with ubiquitin"],
 ["Marker","Catalase · uric acid oxidase","A barrel of proteases"],
 ["Why it matters","Zellweger syndrome · adrenoleukodystrophy · Refsum disease","Clears misfolded and worn-out protein · target of bortezomib"]]),
notes:()=>`<ul>
<li>Textbook of Biochemistry ระบุหน้าที่ของ peroxisome ไว้ว่า <b>ออกซิไดซ์ fatty acid และสลายพิษของไฮโดรเจนเพอรอกไซด์ โดยมี enzyme ประจำคือ catalase และ uric acid oxidase</b> ${S.tbbio}</li>
<li>Textbook of Biochemistry เรียก peroxisome อีกชื่อว่า <b>microbodies</b> ${S.tbbio}</li>
<li>แบ่งงานกันให้ชัด: <b>lysosome ย่อยด้วยกรดและ enzyme hydrolase · proteasome ย่อย protein ที่ติดป้าย ubiquitin ในไซโทซอล</b> ${S.x}</li>
<li>Bortezomib ซึ่งยับยั้ง proteasome ใช้ได้ผลใน multiple myeloma เพราะเซลล์ cancer ชนิดนี้สร้างแอนติบอดีปริมาณมหาศาล จึงพึ่งระบบกำจัด protein มากเป็นพิเศษ ${S.x}</li></ul>`});

SEC.push({id:"cytosk",k:"b",t:"The three cytoskeletal filaments",drugs:"",act:[],leg:[],
draw:()=>tbl(["Filament","Size","Function"],[
 ["Microfilament (actin)","7 นาโนเมตร — เล็กสุด","หดตัวของกล้ามเนื้อ · แบ่งไซโทพลาซึม · microvilli"],
 ["Intermediate filament","10 นาโนเมตร","ให้ความแข็งแรงเชิงกล · ใช้ระบุชนิดเนื้อเยื่อ"],
 ["Microtubule","25 นาโนเมตร — ใหญ่สุด","ขนส่งในเซลล์ · แกนแบ่งเซลล์ · cilia และแฟลเจลลา"]]),
notes:()=>`<ul>
<li>Intermediate filament มีประโยชน์ทางพยาธิวิทยามากที่สุด เพราะ <b>แต่ละชนิดของเนื้อเยื่อมีชนิดของมันเอง จึงใช้ระบุต้นกำเนิดของ tumour ที่แยกยากได้</b> ${S.x}</li>
<li>ชนิดที่ต้องจำ: <b>keratin ในเซลล์เยื่อบุ · vimentin ในเนื้อเยื่อเกี่ยวพัน · desmin ในกล้ามเนื้อ · GFAP ในเซลล์เกลีย · neurofilament ใน neuron</b> ${S.x}</li>
<li>เรียงขนาดจำง่าย ๆ ว่า <b>actin เล็กสุด microtubule ใหญ่สุด และ intermediate อยู่ตรงกลางตามชื่อ</b> ${S.x}</li>
<li>Phalloidin และ cytochalasin เป็นสารพิษที่ออกฤทธิ์ที่ actin จึงใช้เป็นเครื่องมือในห้องปฏิบัติการ ${S.x}</li></ul>`});

SEC.push({id:"mt",k:"b",t:"Microtubules & the drugs that act on them",drugs:"Vincristine · Paclitaxel · Colchicine · Griseofulvin · Mebendazole",act:[],leg:[],
draw:()=>psvg(
 /* A microtubule is a polar tube, and both the drugs and the motors only make sense once the
    two ends are drawn as different places. */
 `${T(320,42,"13 protofilaments of α/β-tubulin dimers — α blue, β red",{c:"s"})}
  <circle class="box gl" cx="74" cy="112" r="26"/>${T(74,158,"centrosome",{c:"s"})}
  ${[0,1,2].map(r=>[...Array(16)].map((_,i)=>`<circle class="box ${i%2?"ar":"vn"}" cx="${128+i*24}" cy="${90+r*22}" r="11"/>`).join("")).join("")}
  ${T(110,70,"− end",{a:"end",c:"s"})}${T(524,70,"+ end",{a:"start",c:"s"})}
  ${T(524,158,"grows and shrinks",{a:"start",c:"s"})}
  ${arr("M180,196 L420,196")}${T(300,216,"kinesin walks towards the + end",{c:"s"})}
  ${arr("M420,238 L180,238")}${T(300,258,"dynein walks back towards the − end",{c:"s"})}
  ${T(320,292,"stop it assembling: vincristine · colchicine · griseofulvin · mebendazole",{c:"s"})}
  ${T(320,312,"stop it coming apart: paclitaxel",{c:"s"})}`,
 "0 0 640 328"),
notes:()=>`<ul>
<li>หลักเดียวที่ครอบคลุมยาทั้งกลุ่ม: <b>แกนแบ่งเซลล์สร้างจาก microtubule ยาที่รบกวน microtubule จึงหยุดเซลล์ไว้ที่ระยะ M</b> ไม่ว่าจะรบกวนด้วยการกันไม่ให้ประกอบหรือกันไม่ให้สลาย ${S.x}</li>
<li>วิธีจำทิศทางของมอเตอร์: <b>kinesin ออกนอก ส่วน dynein เข้าใน</b> ซึ่งเป็นเหตุที่ไวรัสหลายชนิดอาศัย dynein เดินทางเข้าสู่นิวเคลียส ${S.x}</li>
<li>Colchicine ใช้ใน gout เฉียบพลันเพราะกันไม่ให้นิวโทรฟิลเคลื่อนที่เข้าสู่ข้อ ซึ่งต้องอาศัย microtubule ${S.x}</li>
<li>ผลข้างเคียงที่คาดเดาได้ของ vincristine คือปลายประสาทอักเสบ เพราะแอกซอนยาว ๆ พึ่งการขนส่งตาม microtubule มากที่สุด ${S.x}</li></ul>`});

SEC.push({id:"cilia",k:"b",t:"Cilia & primary ciliary dyskinesia",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* A cross-section is the only honest way to say "9 + 2": the count and the arrangement are
    the same fact, and the dynein arms are what turn that arrangement into movement. */
 `<circle class="box bl" cx="320" cy="162" r="132"/>
  ${[...Array(9)].map((_,i)=>{const a=(i*40-90)*Math.PI/180,x=320+96*Math.cos(a),y=162+96*Math.sin(a),tx=-Math.sin(a)*13,ty=Math.cos(a)*13;
    return `<circle class="box ar" cx="${(x-tx).toFixed(1)}" cy="${(y-ty).toFixed(1)}" r="12"/><circle class="box ar" cx="${(x+tx).toFixed(1)}" cy="${(y+ty).toFixed(1)}" r="12"/>`
    +`<path class="ld" style="stroke-width:3" d="M${(x+tx*1.9).toFixed(1)},${(y+ty*1.9).toFixed(1)} L${(x+tx*2.1+Math.cos(a)*14).toFixed(1)},${(y+ty*2.1+Math.sin(a)*14).toFixed(1)}"/>`}).join("")}
  <circle class="box gl" cx="306" cy="162" r="12"/><circle class="box gl" cx="334" cy="162" r="12"/>
  <path class="ld" d="M408,104 L470,88"/>${T(476,92,"dynein arms",{a:"start",c:"s"})}
  <path class="ld" d="M320,186 L256,246"/>${T(250,254,"central pair",{a:"end",c:"s"})}
  ${T(320,318,"nine outer doublets around one central pair — the 9 + 2 axoneme",{c:"s"})}`,
 "0 0 640 336"),
notes:()=>`<ul>
<li>เหตุผลที่อวัยวะกลับข้างได้ครึ่งหนึ่งของผู้ป่วย: <b>cilia ในตัวอ่อนเป็นตัวกำหนดว่าอวัยวะจะไปอยู่ซ้ายหรือขวา เมื่อ cilia ไม่ทำงาน การจัดวางจึงเป็นแบบสุ่ม</b> จึงกลับข้างราวครึ่งหนึ่ง ${S.x}</li>
<li>ชื่อ Kartagener syndrome หมายถึงกลุ่มที่มีครบสามอย่างพร้อม situs inversus ซึ่งเป็นส่วนย่อยของ primary ciliary dyskinesia ${S.x}</li>
<li>inheritance แบบ autosomal recessive จึงมักพบในครอบครัวที่พ่อแม่เป็นญาติกัน ${S.x}</li>
<li>สูตร 9+2 ใช้กับ cilia ที่ขยับได้และหางอสุจิ ส่วน cilia ชนิดรับความรู้สึกเป็นแบบ 9+0 ซึ่งเกี่ยวข้องกับโรคไตถุงน้ำ ${S.x}</li>
<li>เมื่อ dynein เสีย cilia ทุกที่ในร่างกายไม่ขยับ จึงเกิดสามอาการร่วม — <b>ไซนัสอักเสบเรื้อรัง หลอดลมโป่งพอง และ situs inversus</b> ${S.x}</li>
<li>ชายมีบุตรยากเพราะอสุจิไม่เคลื่อนที่ ส่วนหญิงเสี่ยงต่อการตั้งครรภ์นอกมดลูก ${S.x}</li></ul>`});

SEC.push({id:"napump",k:"c",t:"The sodium-potassium pump & digoxin",drugs:"Digoxin · Digitoxin",act:[],leg:[],
draw:()=>flowD([
 ["Na⁺/K⁺ ATPase working","ส่ง Na⁺ ออก 3 ตัว แลก K⁺ เข้า 2 ตัว ใช้ ATP หนึ่งโมเลกุล","bl"],
 ["A sodium gradient is set up","Na⁺ ในเซลล์ต่ำ ซึ่งเป็นแหล่งพลังงานของตัวแลกเปลี่ยนอื่น","ar"],
 ["Na⁺/Ca²⁺ exchanger","อาศัยความต่างนี้ดัน Ca²⁺ ออกนอกเซลล์","mod"],
 ["Digoxin blocks the pump","Na⁺ ในเซลล์สูงขึ้น ตัวแลกเปลี่ยนทำงานได้น้อยลง","inh"],
 ["Intracellular Ca²⁺ rises","หัวใจบีบตัวแรงขึ้น ใช้รักษาภาวะหัวใจล้มเหลว","gl"]]),
notes:()=>`<ul>
<li>Textbook of Biochemistry: <b>Na⁺/K⁺-ATPase ทำหน้าที่ตามปกติคือรักษาระดับ Na⁺ ในเซลล์ให้ต่ำ ส่วนตัวแลกเปลี่ยน Na⁺/Ca²⁺ อาศัยความต่างของ Na⁺ นี้ในการดัน Ca²⁺ ออกนอกเซลล์</b> ${S.tbbio}</li>
<li>Textbook of Biochemistry: <b>Ca²⁺ ที่มีมากขึ้นทำให้แรงบีบตัวเพิ่มขึ้น ซึ่งเป็นประโยชน์ทางคลินิกในการรักษาภาวะหัวใจล้มเหลว</b> และระบุว่ากลุ่มยานี้คือ <b>cardiac glycosides (digitalis) เช่น digoxin</b> ${S.tbbio}</li>
<li>Textbook of Biochemistry: <b>ในหัวใจที่ทำงานล้มเหลว เป้าหมายของการรักษาคือทำให้ cardiac muscle บีบตัวด้วยแรงที่มากขึ้น</b> ${S.tbbio}</li>
<li>ปั๊มนี้ทำงานเป็นสัดส่วน 3 ต่อ 2 จึงย้ายประจุบวกสุทธิออกนอกเซลล์ และมีส่วนทำให้ศักย์ไฟฟ้าขณะพักเป็นลบ ${S.x}</li>
<li>เหตุผลที่ภาวะโพแทสเซียมต่ำเพิ่มพิษของ digoxin: <b>K⁺ กับ digoxin แย่งจับที่เดียวกันบนปั๊ม เมื่อ K⁺ ต่ำ digoxin จึงจับได้มากขึ้น</b> ${S.x}</li></ul>`});

SEC.push({id:"collagen",k:"d",t:"Collagen synthesis",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["Translation into the RER","ได้ prepro-α chain แล้วตัดลำดับสัญญาณออกเป็น pro-α chain","bl"],
 ["Hydroxylation","ที่ proline และ lysine บางตัว · ต้องใช้ vitamin C","ar"],
 ["Glycosylation","ที่ hydroxylysine บางตัว","mod"],
 ["A triple helix forms","ได้ procollagen แล้วหลั่งออกนอกเซลล์","vn"],
 ["Both ends are cleaved","procollagen peptidase ทำให้เป็น tropocollagen","gl"],
 ["Cross-linked by lysyl oxidase","ต้องใช้ copper · ได้เส้นใย collagen ที่แข็งแรง","inh"]]),
notes:()=>`<ul>
<li>Lippincott: การเติมหมู่ไฮดรอกซิลต้องใช้ <b>Fe²⁺ และตัวรีดิวซ์คือ vitamin C (ascorbic acid)</b> ${S.lir}</li>
<li>Lippincott: การขาด vitamin C ทำให้ <b>ขาดการเติมหมู่ไฮดรอกซิลที่ prolyl และ lysyl</b> ซึ่งนำไปสู่โรค scurvy ${S.lir}</li>
<li>Lippincott: <b>lysyl oxidase เป็น enzyme ที่มี copper เป็นองค์ประกอบ</b> ${S.lir}</li>
<li>ลำดับ amino acid ของ collagen คือ <b>Gly–X–Y ซ้ำไปเรื่อย ๆ โดย glycine อยู่ทุกตำแหน่งที่สาม</b> เพราะเป็น amino acid ตัวเดียวที่เล็กพอจะอยู่กลางเกลียวได้ ${S.lir}</li>
<li>Lippincott ระบุว่ามีการค้นพบ <b>mutation มากกว่า 1,000 แบบ ใน 22 gene ที่เข้ารหัส collagen 12 ชนิด</b> ซึ่งอธิบายว่าทำไมกลุ่มโรคนี้จึงหลากหลายมาก ${S.lir}</li>
<li>วิธีแบ่งจำ: <b>ขั้นในเซลล์จบที่การหลั่ง procollagen ออกไป ส่วนการตัดปลายและการเชื่อมขวางเกิดนอกเซลล์ทั้งคู่</b> ${S.x}</li></ul>`});

SEC.push({id:"coldis",k:"d",t:"Osteogenesis imperfecta และ Ehlers-Danlos",drugs:"",act:[],leg:[],
draw:()=>tbl(["","Osteogenesis imperfecta","Ehlers-Danlos"],[
 ["collagen ที่เสีย","ชนิดที่ 1","ชนิดที่ 3 สำคัญที่สุดทางคลินิก"],
 ["กลไกที่พบบ่อย","glycine ใน Gly-X-Y ถูกแทนด้วย amino acid ที่ใหญ่กว่า","พร่อง enzyme แต่ง collagen หรือกลายพันธุ์ของสายเอง"],
 ["อาการเด่น","กระดูกหักง่าย · ตาขาวสีฟ้า · ฟันผิดปกติ · หูหนวก","ผิวยืดและเปราะ · ข้อหลวม"],
 ["ภาวะแทรกซ้อนร้ายแรง","หักซ้ำตั้งแต่ในครรภ์ในชนิดที่ 2","หลอดเลือดแตกและลำไส้ทะลุ"]]),
notes:()=>`<ul>
<li>Lippincott: Ehlers-Danlos เกิดได้จาก <b>การพร่อง enzyme ที่แต่ง collagen เช่น lysyl hydroxylase หรือ procollagen peptidase หรือจาก mutation ของลำดับ amino acid ใน collagen ชนิดที่ 1, 3 หรือ 5</b> ${S.lir}</li>
<li>Lippincott: <b>mutation ที่สำคัญที่สุดทางคลินิกอยู่ที่ gene ของ collagen ชนิดที่ 3</b> และเนื่องจาก collagen ชนิดนี้เป็นองค์ประกอบสำคัญของหลอดเลือดแดง จึงเกิดปัญหาทางหลอดเลือดที่อาจถึงแก่ชีวิตได้ ${S.lir}</li>
<li>Lippincott: ใน OI <b>mutation ที่พบบ่อยที่สุดทำให้ glycine ถูกแทนที่ด้วย amino acid ที่มีหมู่ข้างเคียงขนาดใหญ่ ส่งผลให้สาย pro-α ที่ผิดปกติไปขัดขวางการพันเป็นเกลียวสามสาย</b> ${S.lir}</li>
<li>นี่คือตัวอย่าง <b>dominant negative</b> ที่ชัดที่สุด — สายที่ผิดเพียงสายเดียวทำให้เกลียวทั้งสามสายใช้ไม่ได้ จึง inheritance แบบลักษณะเด่น ${S.x}</li>
<li>Lippincott: <b>ชนิดที่ 1 เรียก osteogenesis imperfecta tarda เกิดจากการสร้างสาย α1 และ α2 ลดลง ส่วนชนิดที่ 2 เรียก osteogenesis imperfecta congenita และรุนแรงที่สุด</b> โดยผู้ป่วยเสียชีวิตจากปอดไม่เจริญตั้งแต่ในครรภ์หรือช่วงแรกเกิด ${S.lir}</li>
<li>Lippincott: <b>ผู้ป่วย OI, EDS หรือ Marfan อาจมีตาขาวสีฟ้าได้ เพราะเนื้อเยื่อบางลงจนเห็นเม็ดสีข้างใต้</b> จึงเป็นอาการที่ใช้แยกโรคสามกลุ่มนี้ไม่ได้ ${S.lir}</li></ul>`});

SEC.push({id:"elastin",k:"d",t:"Elastin, Marfan & α1-antitrypsin",drugs:"",act:[],leg:[],
draw:()=>tbl(["","Elastin","Collagen"],[
 ["Behaviour","Stretches and recoils in every direction","Resists tension along one axis"],
 ["Hydroxyproline","Very little","Rich"],
 ["Cross-link","Desmosine — three allysines plus one lysine, made by lysyl oxidase","Lysine–hydroxylysine, also by lysyl oxidase"],
 ["Scaffold","Laid down on fibrillin microfibrils","Self-assembles into fibrils"]]),
notes:()=>`<ul>
<li>Lippincott: tropoelastin ประกอบด้วย amino acid ราว 700 ตัวที่ส่วนใหญ่เล็กและไม่มีขั้ว และ <b>elastin มี proline กับ lysine มาก แต่มี hydroxyproline และ hydroxylysine น้อยมาก</b> ${S.lir}</li>
<li>Lippincott: <b>allysine สามตัวบวก lysine ที่ยังไม่เปลี่ยนแปลงอีกหนึ่งตัวรวมกันเป็นสะพานเชื่อม desmosine</b> ได้เป็นโครงข่ายคล้ายยางที่ยืดและโค้งงอได้ทุกทิศทาง ${S.lir}</li>
<li>Lippincott: <b>mutation ของ protein fibrillin-1 เป็นสาเหตุของ Marfan syndrome</b> ซึ่งมีความบกพร่องของความแข็งแรงเชิงโครงสร้างในโครงกระดูก ตา และระบบหัวใจและหลอดเลือด ${S.lir}</li>
<li>Lippincott อธิบายกลไกของ Marfan ว่า <b>fibrillin ที่ผิดปกติถูกประกอบเข้าไปในไมโครไฟบริลร่วมกับ fibrillin ปกติ จึงไปยับยั้งการสร้างไมโครไฟบริลที่ใช้งานได้</b> ${S.lir}</li>
<li>Lippincott: <b>α1-antitrypsin ยับยั้ง enzyme ย่อย protein หลายชนิด</b> และปกติจะยับยั้ง elastase ที่นิวโทรฟิลปล่อยออกมาขณะกลืนกินเชื้อในถุงลมปอด ${S.lir}</li>
<li>เมื่อขาด α1-antitrypsin จึงเกิดถุงลมโป่งพองที่ฐานปอดในคนอายุน้อยที่ไม่สูบบุหรี่ ร่วมกับโรคตับจาก protein ที่พับผิดสะสมในเซลล์ตับ ${S.x}</li>
<li><b>Marfan syndrome</b> เกิดจากการกลายพันธุ์ของ <b>fibrillin-1</b> จึงกระทบโครงกระดูก ตา และหลอดเลือดพร้อมกัน ${S.x}</li>
<li><b>α1-antitrypsin</b> ยับยั้ง elastase ที่นิวโทรฟิลปล่อยออกมาในถุงลม — เมื่อพร่องลง elastin ในปอดจึงถูกย่อย ${S.x}</li></ul>`});

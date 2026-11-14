/* ================= Biochemistry — Molecular 1: DNA, replication & repair ================= */
Object.assign(S,{lir:'<b class="sbb lir">LIR</b>',x:'<b class="sbb gen">Gen</b>'});
Object.assign(GN,{a:"DNA & chromatin",b:"Nucleotides",c:"DNA replication",d:"Repair & mutation"});

SEC.push({id:"chrom",k:"a",t:"Nucleosomes & histones",mm:"เก็บ DNA",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* Chromatin is a shape before it is a fact: DNA wound on a protein spool, H1 holding the
    thread between spools, and the same thread either loose enough to read or packed shut. */
 `<circle class="box ar" cx="170" cy="112" r="50"/>
  <ellipse cx="170" cy="112" rx="66" ry="42" style="fill:none;stroke:var(--s-na);stroke-width:4.5"/>
  <path d="M106,128 A66,42 0 0,0 234,128" style="fill:none;stroke:var(--s-na);stroke-width:4.5"/>
  <circle class="box ar" cx="430" cy="112" r="50"/>
  <ellipse cx="430" cy="112" rx="66" ry="42" style="fill:none;stroke:var(--s-na);stroke-width:4.5"/>
  <path d="M366,128 A66,42 0 0,0 494,128" style="fill:none;stroke:var(--s-na);stroke-width:4.5"/>
  <path d="M236,112 L364,112" style="fill:none;stroke:var(--s-na);stroke-width:4.5"/>
  <circle class="box vn" cx="300" cy="112" r="15"/>${T(300,116,"H1",{c:"s"})}
  ${T(300,162,"clamps the linker DNA",{c:"s"})}
  ${T(170,186,"Histone octamer",{c:"bh"})}${T(170,206,"H2A · H2B · H3 · H4, two of each",{c:"s"})}
  ${T(320,238,"the DNA is negative; histone lysine and arginine are positive",{c:"s"})}
  <rect class="box gl" x="24" y="254" width="288" height="62" rx="12"/>
  ${T(168,280,"Euchromatin",{c:"bh"})}${T(168,302,"loose · being transcribed",{c:"s"})}
  <rect class="box vn" x="328" y="254" width="288" height="62" rx="12"/>
  ${T(472,280,"Heterochromatin",{c:"bh"})}${T(472,302,"packed · silent",{c:"s"})}`,
 "0 0 640 332"),
notes:()=>`<ul>
<li>Lippincott: <b>histone มีห้าชนิด</b> คือ H1, H2A, H2B, H3, H4 โดย <b>H2A, H2B, H3, H4 อย่างละสองโมเลกุลประกอบเป็นแกน</b> ของ nucleosome ${S.lir}</li>
<li><b>H1 ไม่อยู่ในแกน</b> แต่จับ linker DNA ที่เชื่อม nucleosome ข้างเคียงเข้าด้วยกัน ${S.lir}</li>
<li>Lippincott: <b>gene ที่ถอดรหัสอยู่ส่วนใหญ่อยู่ในรูปคลายตัวที่เรียก euchromatin</b> ส่วน DNA ช่วงที่ไม่ทำงานส่วนใหญ่อยู่ใน <b>heterochromatin ที่ควบแน่นสูง</b> ${S.lir}</li>
<li>การสลับไปมาระหว่างสองรูปนี้เรียก <b>chromatin remodeling</b> ${S.lir}</li>
<li>กลไกที่ใช้เข้าใจทั้งหัวข้อนี้คือเรื่องประจุ — histone บวก DNA ลบ อะไรที่ลดประจุบวกของ histone ก็คลาย DNA ออกมา ${S.x}</li></ul>`});

SEC.push({id:"epig",k:"a",t:"Epigenetics: methylation & acetylation",drugs:"",act:[],leg:[],
draw:()=>tbl(["Modification","Enzyme","Effect on transcription"],[
 ["เติมอะซิติลที่ histone","histone acetyltransferase (HAT)","<b>เปิด</b> — ลบประจุบวกของ lysine จึงคลาย DNA"],
 ["ถอดอะซิติลจาก histone","histone deacetylase (HDAC)","<b>ปิด</b> — คืนประจุบวก จับ DNA แน่นขึ้น"],
 ["เติมเมทิลที่ DNA","DNA methyltransferase ใช้ SAM","<b>ปิด</b> — ที่ CpG island ของ promoter"],
 ["เติมเมทิลที่ histone","histone methyltransferase","ได้ทั้งเปิดและปิด ขึ้นกับตำแหน่ง"]]),
notes:()=>`<ul>
<li>Lippincott: การเติมอะซิติลโดย HAT <b>ลบประจุบวกของ lysine จึงลดแรงจับระหว่าง histone กับ DNA ที่มีประจุลบ</b> · การถอดอะซิติลโดย HDAC คืนประจุบวกและทำให้จับกันแน่นขึ้น ${S.lir}</li>
<li>Lippincott: การเติมเมทิลที่ cytosine เกิดที่ <b>บริเวณ CG-rich (CpG islands) ใน promoter</b> และใช้ <b>S-adenosylmethionine เป็นตัวให้หมู่เมทิล</b> ${S.lir}</li>
<li>จำแบบคู่ตรงข้าม: <b>อะซิติลเปิด เมทิลที่ DNA ปิด</b> ส่วนเมทิลที่ histone ตอบได้สองทาง จึงเป็นข้อยกเว้นที่ต้องระวัง ${S.x}</li>
<li>นี่คือ epigenetics ในความหมายตรงตัว — ลำดับเบสไม่เปลี่ยน แต่ gene ไหนถูกอ่านเปลี่ยน และ inheritance ต่อไปยังเซลล์ลูกได้ ${S.x}</li>
<li>HDAC inhibitor ถูกใช้เป็นยาต้าน cancer บางชนิด เพราะเปิด gene ที่ถูกปิดไว้ให้กลับมาทำงาน ${S.x}</li></ul>`});

SEC.push({id:"purine",k:"b",t:"Purine synthesis",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["Ribose-5-phosphate → PRPP","PRPP synthetase","bl"],
 ["PRPP + glutamine","glutamine:PRPP amidotransferase · ขั้นกำหนดอัตรา","ar"],
 ["The ring is built on the sugar, piece by piece","ใช้ glycine, aspartate, CO₂ และ folate (THF) สองครั้ง","mod"],
 ["IMP, the first complete purine","แยกไปเป็น AMP หรือ GMP","gl"]]),
notes:()=>`<ul>
<li>จุดต่างสำคัญจาก pyrimidine: <b>purine สร้างวงแหวนขึ้นบนน้ำตาลโดยตรง</b> ส่วน pyrimidine สร้างวงแหวนให้เสร็จก่อนแล้วจึงต่อน้ำตาลเข้าไป ${S.lir}</li>
<li>ขั้นกำหนดอัตราคือ <b>glutamine:phosphoribosylpyrophosphate amidotransferase</b> ซึ่ง Lippincott เรียกว่าขั้นที่ผูกมัดเส้นทาง (committed step) ${S.lir}</li>
<li>ต้องใช้ <b>tetrahydrofolate ให้คาร์บอนสองครั้ง</b> จึงเป็นเหตุผลที่ยาต้าน folate กดการสร้าง DNA ลงได้ ${S.x}</li>
<li>AMP และ GMP ที่สร้างเสร็จย้อนกลับไปยับยั้งขั้นต้นของเส้นทาง เป็น feedback inhibition แบบคลาสสิก ${S.x}</li>
<li>Lippincott ระบุว่าใน Lesch-Nyhan <b>ระดับ PRPP ที่สูงขึ้นทำให้ enzyme ขั้นผูกมัดมีสารตั้งต้นเหลือเฟือและตัวยับยั้งลดลง จึงสร้าง purine ใหม่มากขึ้น</b> ${S.lir}</li></ul>`});

SEC.push({id:"pyrim",k:"b",t:"Pyrimidine synthesis & ribonucleotide reductase",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["Glutamine + CO₂ → carbamoyl phosphate","carbamoyl phosphate synthetase II ใน cytosol · ขั้นที่ถูกควบคุม","ar"],
 ["Aspartate joins and the ring closes","ได้ orotate","bl"],
 ["PRPP is added","ได้ OMP แล้วเป็น UMP","mod"],
 ["UMP → UDP → UTP → CTP","และ UDP → dUMP → dTMP โดย thymidylate synthase","gl"],
 ["Ribonucleotide reductase","เปลี่ยน NDP เป็น dNDP ในระยะ S","inh"]]),
notes:()=>`<ul>
<li>Lippincott: การสร้าง carbamoyl phosphate โดย <b>carbamoyl phosphate synthetase II เป็นขั้นที่ถูกควบคุมของเส้นทางนี้</b> ${S.lir}</li>
<li>อย่าสับสนกับ <b>CPS I</b> ที่อยู่ใน mitochondria ใช้แอมโมเนีย และทำงานใน urea cycle — CPS II อยู่ใน cytosol และใช้ glutamine ${S.x}</li>
<li>Lippincott: <b>ribonucleotide reductase เปลี่ยน ribonucleoside diphosphate เป็น deoxy- ในระยะ S</b> และ <b>มีหน้าที่รักษาสมดุลของ dNTP ทั้งสี่ตัว</b> ${S.lir}</li>
<li>สมดุลข้อนี้คือเหตุผลที่ ADA deficiency ทำลายเซลล์ได้ — dATP ที่ล้นไปยับยั้ง enzyme ตัวนี้ทั้งตัว ${S.x}</li>
<li>CPS II ถูกกระตุ้นโดย ATP และ PRPP แต่ถูกยับยั้งโดย UTP จึงคุมตัวเองได้ ${S.x}</li></ul>`});

SEC.push({id:"nucdrug",k:"b",t:"Drugs acting on nucleotide synthesis",drugs:"Hydroxyurea · 5-FU · MTX · 6-MP · Azathioprine · Allopurinol · Rasburicase",act:[],leg:[],
draw:()=>tbl(["Drug","Inhibits","Consequence"],[
 ["Hydroxyurea","ribonucleotide reductase","ไม่ได้ dNTP เลยทั้งสี่ตัว"],
 ["5-fluorouracil","thymidylate synthase","ขาด dTMP · เกิด thymineless death"],
 ["Methotrexate","dihydrofolate reductase (ของคน)","ขาด THF จึงขาดทั้ง purine และ dTMP"],
 ["Trimethoprim","DHFR ของแบคทีเรีย","เลือกออกฤทธิ์ที่เชื้อ"],
 ["6-mercaptopurine · azathioprine","การสร้าง purine แบบ de novo","สลายโดย TPMT และ xanthine oxidase"],
 ["Allopurinol","xanthine oxidase","ลด uric acid · เพิ่มพิษของ 6-MP"]]),
notes:()=>`<ul>
<li>กฎที่ใช้ได้ทั้งตาราง: ยาเหล่านี้ทำลาย <b>เซลล์ที่แบ่งตัวเร็ว</b> จึงมีผลข้างเคียงที่ bone marrow เยื่อบุทางเดินอาหาร และรากผม ${S.x}</li>
<li><b>Leucovorin (folinic acid)</b> กู้ผลของ methotrexate ได้เพราะเป็น folate รูปที่ถูกรีดิวซ์แล้ว ไม่ต้องผ่าน DHFR ${S.x}</li>
<li>ถ้าให้ allopurinol ร่วมกับ 6-MP หรือ azathioprine <b>ต้องลดขนาดยาลงมาก</b> เพราะทางสลายหลักถูกปิด ${S.x}</li>
<li>Rasburicase เป็น urate oxidase สังเคราะห์ ใช้ใน tumor lysis syndrome เพราะสลาย uric acid ให้เป็น allantoin ที่ละลายน้ำดีกว่า ${S.x}</li></ul>`});

SEC.push({id:"salvage",k:"b",t:"Salvage pathway: Lesch-Nyhan & ADA",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* Two enzymes, two very different children. Drawing the pathways side by side shows why one
    deficiency fills the blood with uric acid and the other empties it of lymphocytes. */
 `<rect class="box bl" x="20" y="24" width="288" height="272" rx="14"/>
  ${T(164,52,"Purine salvage",{c:"h"})}
  ${T(164,88,"Hypoxanthine · Guanine",{c:"bh"})}
  ${arr("M164,100 L164,142")}${blk(164,120,"")}${T(182,116,"HGPRT",{a:"start",c:"bad"})}
  ${T(164,162,"IMP · GMP",{c:"bh"})}
  ${arr("M164,174 L164,202")}
  ${T(164,222,"Lesch-Nyhan",{c:"bad"})}
  ${T(164,246,"uric acid · gout · stones",{c:"s"})}
  ${T(164,266,"loss of movement and intellect",{c:"s"})}
  ${T(164,286,"self-mutilation · X-linked",{c:"s"})}
  <rect class="box ar" x="332" y="24" width="288" height="272" rx="14"/>
  ${T(476,52,"Adenosine deaminase",{c:"h"})}
  ${T(476,88,"Adenosine",{c:"bh"})}
  ${arr("M476,100 L476,142")}${blk(476,120,"")}${T(494,116,"ADA",{a:"start",c:"bad"})}
  ${T(476,162,"Inosine",{c:"bh"})}
  ${arr("M476,174 L476,202")}
  ${T(476,222,"dATP accumulates",{c:"bad"})}
  ${T(476,246,"blocks ribonucleotide reductase",{c:"s"})}
  ${T(476,266,"no DNA synthesis",{c:"s"})}
  ${T(476,286,"SCID — T, B and NK cells fall",{c:"s"})}`,
 "0 0 640 312"),
notes:()=>`<ul>
<li>Lippincott: Lesch-Nyhan เป็น <b>X-linked recessive จากการพร่อง HGPRT แทบสิ้นเชิง</b> ทำให้กู้คืน hypoxanthine และ guanine ไม่ได้ ${S.lir}</li>
<li>Lippincott อธิบายกลไกสองชั้น: <b>กู้คืน purine ได้น้อยลง บวกกับสร้าง purine ใหม่มากขึ้น</b> ผลรวมคือ uric acid ปริมาณมาก ${S.lir}</li>
<li>Lippincott ระบุอาการไว้ว่า <b>เสียการเคลื่อนไหว เสียสติปัญญา และพฤติกรรมผิดปกติรวมถึงการทำร้ายตัวเอง (กัดริมฝีปากและนิ้ว)</b> ${S.lir}</li>
<li>Lippincott: ADA อยู่ในหลายเนื้อเยื่อ แต่ <b>ลิมโฟไซต์ของคนมีกิจกรรมของ enzyme นี้สูงสุด</b> จึงเสียหายก่อน ${S.lir}</li>
<li>Lippincott: dATP ที่สูงขึ้น <b>ยับยั้ง ribonucleotide reductase จึงกันการสร้าง deoxyribonucleotide ทุกตัว</b> เซลล์สร้าง DNA และแบ่งตัวไม่ได้ ${S.lir}</li>
<li>Lippincott: ADA deficiency คิดเป็น <b>ราว 14% ของผู้ป่วย SCID ทั้งหมดในสหรัฐ</b> และรักษาด้วยการปลูกถ่าย bone marrow ${S.lir}</li>
<li>ข้อสอบมักให้เลือกระหว่างสองโรคนี้ — จุดแยกคือ <b>Lesch-Nyhan มาด้วย uric acid และระบบประสาท ส่วน ADA มาด้วย infection ซ้ำในทารก</b> ${S.x}</li></ul>`});

SEC.push({id:"repl",k:"c",t:"Steps of DNA replication",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["Origin of replication","ลำดับเบสที่ protein เริ่มต้นเข้าจับ · ยูคาริโอตมีหลายจุดต่อ chromosome","bl"],
 ["Helicase unwinds the helix","ใช้ ATP · ได้ replication fork","ar"],
 ["Single-stranded binding protein","กันไม่ให้สายกลับมาจับกันเองหรือถูกย่อย","mod"],
 ["Primase lays an RNA primer","เพราะ DNA polymerase เริ่มต้นสายใหม่เองไม่ได้","vn"],
 ["DNA polymerase extends 5′→3′","สายนำต่อเนื่อง · สายตามเป็นชิ้น Okazaki","gl"],
 ["Primers removed, nicks sealed","DNA ligase ปิดรอยสุดท้าย","inh"]]),
notes:()=>`<ul>
<li>ข้อจำกัดที่อธิบายทุกอย่างในหัวข้อนี้: <b>DNA polymerase ต่อสายได้ทางเดียวคือ 5′→3′ และเริ่มสายใหม่เองไม่ได้</b> จึงต้องมี primer และจึงเกิดสายตามที่ต่อเป็นชิ้น ${S.x}</li>
<li>Lippincott: <b>type I topoisomerase ตัดสายเดียวแบบย้อนกลับได้</b> เพื่อคลายเกลียวที่บิดสะสม ส่วน <b>type II ตัดทั้งสองสาย</b> จึงแก้ได้ทั้ง supercoil บวกและลบ ${S.lir}</li>
<li>ยาที่ยับยั้ง topoisomerase: fluoroquinolone ออกฤทธิ์ที่ type II ของแบคทีเรีย ส่วน etoposide และ irinotecan ใช้เป็นยาต้าน cancer ${S.x}</li>
<li>ในยูคาริโอตมี <b>จุดเริ่มต้นหลายจุดต่อ chromosome</b> ซึ่งจำเป็นเพราะจีโนมใหญ่เกินกว่าจะคัดลอกจากจุดเดียวได้ทัน ${S.x}</li></ul>`});

SEC.push({id:"replenz",k:"c",t:"Replication enzymes & exonuclease activity",drugs:"",act:[],leg:[],
draw:()=>tbl(["Enzyme","Main role","Exonuclease activity"],[
 ["DNA polymerase III (โพรคาริโอต)","ต่อสายหลัก","3′→5′ สำหรับตรวจทาน"],
 ["DNA polymerase I (โพรคาริโอต)","ถอด RNA primer แล้วเติม DNA แทน","ทั้ง 3′→5′ และ <b>5′→3′</b>"],
 ["DNA ligase","เชื่อมรอยต่อสุดท้าย","—"],
 ["Primase","วาง RNA primer","—"],
 ["Telomerase","ต่อปลาย 3′ ของ telomere","—"]]),
notes:()=>`<ul>
<li>Lippincott: การตรวจทานใช้ <b>กิจกรรม 3′→5′ exonuclease</b> — ตรวจทุก nucleotide ที่เติมเข้าไปว่าจับคู่กับแม่แบบถูกหรือไม่ ถ้าผิดก็ตัดออก ${S.lir}</li>
<li>Lippincott: <b>DNA polymerase I ถอด RNA primer ด้วยกิจกรรม 5′→3′ exonuclease</b> แล้วเติม DNA ลงในช่องว่างนั้น ${S.lir}</li>
<li>จุดที่มักถูกถามคือทิศทาง: <b>3′→5′ exonuclease ใช้ตรวจทาน ส่วน 5′→3′ exonuclease ใช้ถอด primer</b> ${S.x}</li>
<li>ความแม่นยำรวมของ DNA replication สูงมากเพราะมีสามชั้นซ้อนกัน — ความจำเพาะของ enzyme การตรวจทาน และกลไกซ่อมหลังจำลอง ${S.x}</li></ul>`});

SEC.push({id:"telo",k:"c",t:"Telomeres & telomerase",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* The end-replication problem is geometry: there is nowhere to put the last primer, so the
    picture shows the gap the lagging strand is left with, and what telomerase does about it. */
 `${T(60,52,"lagging strand on the parental template",{a:"start",c:"s m"})}
  <path d="M60,72 L580,72" style="fill:none;stroke:var(--s-na);stroke-width:5;opacity:.55"/>
  ${T(50,76,"3′",{a:"end",c:"s"})}${T(590,76,"5′",{a:"start",c:"s"})}
  ${[0,1,2,3].map(i=>`<rect class="box bl" x="${60+i*124}" y="98" width="104" height="16" rx="7"/>`).join("")}
  ${[0,1,2,3].map(i=>`<rect class="box ar" x="${60+i*124}" y="98" width="26" height="16" rx="7"/>`).join("")}
  <rect x="556" y="98" width="24" height="16" rx="7" style="fill:none;stroke:var(--sb-bad);stroke-width:2;stroke-dasharray:3 2"/>
  ${T(320,136,"each fragment needs an RNA primer (red) — at the very end there is no room for one",{c:"s"})}
  ${T(580,160,"the end is left short every round",{a:"end",c:"bad"})}
  ${arr("M320,176 L320,200")}
  ${T(320,222,"Telomerase",{c:"h"})}
  ${T(320,246,"its own CA-rich RNA pairs with the GT-rich 3′ overhang",{c:"s"})}
  ${T(320,266,"and its reverse transcriptase extends the end",{c:"s"})}
  ${T(320,292,"germ cells · stem cells · cancer cells keep it switched on",{c:"s"})}
  ${T(320,316,"once the telomere is too short the cell stops dividing — senescence",{c:"bad"})}`,
 "0 0 640 334"),
notes:()=>`<ul>
<li>Lippincott: เมื่อ telomere <b>สั้นลงเกินความยาววิกฤติ เซลล์จะแบ่งตัวต่อไม่ได้และเรียกว่าเข้าสู่ senescence</b> ${S.lir}</li>
<li>Lippincott: ใน germ cell สเต็มเซลล์ และ <b>เซลล์ cancer telomere ไม่สั้นลงและเซลล์ไม่เข้า senescence</b> เพราะมี telomerase ${S.lir}</li>
<li>Lippincott: telomerase ประกอบด้วย <b>protein ที่ทำหน้าที่เป็น reverse transcriptase กับ RNA สายสั้นที่เป็นแม่แบบ</b> ${S.lir}</li>
<li>Lippincott เปรียบ telomere ว่าเป็น <b>"mitotic clock"</b> เพราะความยาวในเซลล์ส่วนใหญ่สวนทางกับจำนวนครั้งที่เซลล์แบ่งตัวมาแล้ว ${S.lir}</li>
<li>มุมที่ใช้ตอบข้อสอบ: การกลับมาแสดง telomerase เป็นหนึ่งใน hallmark ของ cancer เพราะปลดล็อกข้อจำกัดจำนวนรอบการแบ่งตัว ${S.x}</li></ul>`});

SEC.push({id:"repair",k:"d",t:"The five DNA repair mechanisms",drugs:"",act:[],leg:[],
draw:()=>tbl(["Mechanism","Repairs","Disease when defective"],[
 ["Nucleotide excision repair","รอยโรคที่ทำให้สายโป่ง เช่น pyrimidine dimer จาก UV","<b>Xeroderma pigmentosum</b>"],
 ["Base excision repair","เบสเดี่ยวที่เสียหายหรือถูก deaminate","—"],
 ["Mismatch repair","เบสที่จับคู่ผิดและหลุดการตรวจทาน","<b>HNPCC (Lynch syndrome)</b>"],
 ["Homologous recombination","สายคู่ขาด โดยใช้สายพี่น้องเป็นแม่แบบ","BRCA1/2 · ataxia-telangiectasia"],
 ["Nonhomologous end joining","สายคู่ขาด โดยต่อปลายเข้าหากันตรง ๆ","deficiency ของภูมิคุ้มกันบางชนิด"]]),
notes:()=>`<ul>
<li>Lippincott: ใน <b>xeroderma pigmentosum เซลล์ซ่อม DNA ที่เสียหายไม่ได้ จึงสะสม mutation และเกิด skin cancer จำนวนมากตั้งแต่อายุน้อย</b> ${S.lir}</li>
<li>Lippincott: XP เกิดจากความผิดปกติของ gene ใดก็ได้ในกลุ่มที่สร้าง <b>protein XP ที่จำเป็นต่อ nucleotide excision repair ของความเสียหายจาก UV</b> ${S.lir}</li>
<li>Lippincott: mutation ของ protein ในระบบ mismatch repair <b>เกี่ยวข้องกับ HNPCC หรือ Lynch syndrome</b> แต่ <b>colorectal cancer ทั้งหมดมีเพียงราว 5% ที่เกิดจากสาเหตุนี้</b> ${S.lir}</li>
<li>วิธีแยกสองกลไกแรก: <b>NER ตัดออกเป็นชิ้นโอลิโก nucleotide ส่วน BER ถอดเบสเดี่ยวออกก่อนแล้วจึงตัดโครงน้ำตาล</b> ${S.x}</li>
<li>HR แม่นยำกว่า NHEJ เพราะมีแม่แบบให้ลอก ส่วน NHEJ เร็วกว่าแต่มักเสียเบสที่รอยต่อ ${S.x}</li></ul>`});

SEC.push({id:"mut",k:"d",t:"Types of mutation",drugs:"",act:[],leg:[],
draw:()=>tbl(["Type","Effect on the code","Effect on protein"],[
 ["Silent","เปลี่ยนเบสแต่ยังได้ amino acid เดิม","ไม่เปลี่ยน — มักที่ตำแหน่งที่สามของโคดอน"],
 ["Missense","ได้ amino acid ตัวอื่น","เปลี่ยนมากน้อยขึ้นกับว่าคุณสมบัติใกล้เดิมหรือไม่"],
 ["Nonsense","กลายเป็นโคดอนหยุด","สายสั้นกว่าปกติ มักใช้การไม่ได้"],
 ["Frameshift","เพิ่มหรือลดเบสที่ไม่ใช่จำนวนเท่าของสาม","กรอบการอ่านเลื่อนทั้งหมดหลังจุดนั้น"],
 ["Splice site","เสียตำแหน่งตัดต่อ","เก็บ intron ไว้หรือตัด exon ทิ้ง"],
 ["Slipped-strand mispairing","สายเลื่อนขณะจำลองที่ลำดับซ้ำ","ขยายจำนวนซ้ำ เช่นโรค trinucleotide repeat"]]),
notes:()=>`<ul>
<li>ลำดับความรุนแรงโดยทั่วไป: <b>silent น้อยกว่า missense น้อยกว่า nonsense น้อยกว่า frameshift</b> แต่ตำแหน่งที่เกิดสำคัญกว่าชนิดเสมอ ${S.x}</li>
<li>Missense ที่เปลี่ยนเป็น amino acid คุณสมบัติใกล้เดิมเรียก <b>conservative</b> ซึ่งมักกระทบน้อยกว่า ${S.x}</li>
<li>โรคที่ใช้เป็นตัวอย่างประจำ: <b>sickle cell เป็น missense</b> ส่วน <b>β-thalassemia เกิดได้จาก splice site หรือ nonsense</b> และ <b>Duchenne muscular dystrophy มักเป็น frameshift</b> ซึ่งต่างจาก Becker ที่เป็นชนิดไม่เลื่อนกรอบ ${S.x}</li>
<li>Silent mutation ไม่ได้ไร้ผลเสมอไป เพราะโคดอนที่หาได้ยากอาจทำให้แปลรหัสช้าลงหรือกระทบ splicing ${S.x}</li></ul>`});

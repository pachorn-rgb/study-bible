/* ================= Biochemistry — Genetics 2: repeats & chromosomal disorders ================= */
Object.assign(S,{tt:'<b class="sbb tt">TT</b>',x:'<b class="sbb gen">Gen</b>'});
Object.assign(GN,{a:"Trinucleotide repeats",b:"X-linked disorders",c:"Chromosome number",d:"Chromosome structure"});

SEC.push({id:"repeat",k:"a",t:"Repeat expansion & anticipation",mm:"ยิ่งรุ่นหลังยิ่งหนัก",drugs:"",act:[],leg:[],
draw:()=>tbl(["Disease","Repeat","Position in gene","Inheritance"],[
 ["Huntington disease","<b>CAG</b>","ส่วนที่แปลรหัส","Autosomal dominant"],
 ["Myotonic dystrophy","<b>CTG</b>","ส่วนที่ไม่แปลรหัสปลาย 3′","Autosomal dominant"],
 ["Fragile X syndrome","<b>CGG</b>","ส่วนที่ไม่แปลรหัสปลาย 5′","X-linked dominant"],
 ["Friedreich ataxia","<b>GAA</b>","อินทรอน","Autosomal recessive"]]),
notes:()=>`<ul>
<li>Thompson & Thompson จัดกลุ่มโรคเหล่านี้ไว้ด้วยกันว่าเป็น <b>unstable repeat expansion</b> ได้แก่ <b>โรคกลุ่ม polyglutamine ที่เกิดจากการขยายของ CAG ซึ่งเข้ารหัสเป็น glutamine, fragile X syndrome, myotonic dystrophy และ Friedreich ataxia</b> ${S.tt}</li>
<li>Thompson & Thompson: การค้นพบกลไกนี้ <b>ให้คำอธิบายเชิงชีววิทยาแก่ปรากฏการณ์แปลก ๆ อย่าง anticipation และความลำเอียงตามฝ่ายที่ inheritance ซึ่งก่อนหน้านั้นไม่มีคำอธิบายเชิงกลไกเลย</b> ${S.tt}</li>
<li>Thompson & Thompson: ขนาดของการขยาย <b>บางทีก็เล็กน้อย เช่นใน oculopharyngeal muscular dystrophy และบางทีก็ระเบิดออกมาก เช่นใน congenital myotonic dystrophy หรือ fragile X ชนิดรุนแรง</b> ${S.tt}</li>
<li>Thompson & Thompson: สำหรับ Huntington <b>จำนวนซ้ำปกติเฉลี่ยราว 46 · ช่วงก้ำกึ่งคือ 36 ถึง 39 · เมื่อเกิน 39 ขึ้นไปจะเป็นโรค</b> ${S.tt}</li>
<li>คำว่า anticipation หมายถึง <b>โรคมาเร็วขึ้นและรุนแรงขึ้นในรุ่นถัดไป</b> ซึ่งเกิดเพราะลำดับซ้ำขยายเพิ่มขึ้นตอนส่งต่อ ${S.x}</li>
<li>Thompson & Thompson ระบุว่าโรคกลุ่มนี้ต่างกันหลายมิติ ทั้ง <b>ความยาวและลำดับเบสของหน่วยซ้ำ จำนวนซ้ำในคนปกติ คนที่ยังไม่แสดงอาการและคนที่เป็นโรค ตำแหน่งของหน่วยซ้ำใน gene และความไม่เสถียรระหว่าง meiosis</b> ${S.tt}</li></ul>`});

SEC.push({id:"fragx",k:"b",t:"Fragile X syndrome",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* The mutation is not in the protein-coding part at all — it is a repeat in front of the gene
    that grows until the cell methylates the whole promoter shut. Position is the lesson. */
 `<rect class="box bl" x="60" y="70" width="520" height="26" rx="8"/>
  <rect class="box ar" x="120" y="70" width="50" height="26" rx="8"/>
  ${T(145,56,"CGG repeats",{c:"s"})}${T(572,88,"FMR1",{a:"end",c:"s m"})}
  ${T(60,118,"5′ untranslated region of exon 1 — normal length",{a:"start",c:"s"})}
  ${arr("M320,128 L320,154")}
  <rect class="box bl" x="60" y="166" width="520" height="26" rx="8"/>
  <rect class="box ar" x="120" y="166" width="190" height="26" rx="8"/>
  ${T(215,154,"more than 200 CGG repeats",{c:"s"})}
  ${[140,180,220,260,300].map(x=>`<circle class="stone" cx="${x}" cy="179" r="6"/>`).join("")}
  ${T(185,214,"methylated — the gene is switched off",{c:"bad"})}
  ${T(474,214,"no FMRP protein",{c:"bh"})}
  ${T(320,252,"long face · large jaw and ears · macro-orchidism after puberty",{c:"s"})}
  ${T(320,272,"intellectual disability and autistic behaviour",{c:"s"})}`,
 "0 0 640 290"),
notes:()=>`<ul>
<li>Thompson & Thompson: โรคนี้เกิดจาก <b>การขยายอย่างมหาศาลของ trinucleotide repeat CGG ซึ่งอยู่ในส่วนที่ไม่แปลรหัสปลาย 5′ ของเอกซอนแรกของ gene ที่ชื่อ FMR1</b> ${S.tt}</li>
<li>Thompson & Thompson: การตรวจหา fragile X <b>เป็นหนึ่งในข้อบ่งชี้ที่พบบ่อยที่สุดสำหรับการวิเคราะห์ DNA การให้คำปรึกษาทางพันธุกรรม และการวินิจฉัยก่อนคลอด</b> ${S.tt}</li>
<li>Thompson & Thompson: ต้องนึกถึงโรคนี้ <b>ในการวินิจฉัยแยกโรคของ intellectual disability ทั้งในผู้ชายและผู้หญิง</b> ไม่ใช่เฉพาะผู้ชาย ${S.tt}</li>
<li>การขยายเกิดตอนส่งผ่าน <b>ฝ่ายแม่</b> เป็นหลัก ผู้ชายที่มี premutation จึงส่งต่อให้ลูกสาวโดยที่ยังไม่ขยายเป็น full mutation ${S.x}</li>
<li>ผู้ที่มี premutation มีความเสี่ยงของภาวะอื่นด้วย คือ <b>fragile X-associated tremor/ataxia syndrome</b> ในผู้ชายสูงอายุ และ <b>รังไข่หยุดทำงานก่อนวัย</b> ในผู้หญิง ${S.x}</li>
<li>เป็น<b>สาเหตุทางพันธุกรรมของ intellectual disability ที่พบบ่อยที่สุดรองจาก Down syndrome</b> ${S.x}</li></ul>`});

SEC.push({id:"dmd",k:"b",t:"Duchenne vs Becker",drugs:"",act:[],leg:[],
draw:()=>tbl(["","Duchenne","Becker"],[
 ["ชนิด mutation","<b>เลื่อนกรอบการอ่าน</b> (out of frame)","<b>ไม่เลื่อนกรอบ</b> (in frame)"],
 ["protein dystrophin","แทบไม่มีเลย","มีแต่ผิดรูปหรือน้อยลง"],
 ["อายุที่เริ่มมีอาการ","ก่อน 5 ขวบ","วัยรุ่นถึงผู้ใหญ่"],
 ["เดินได้ถึงเมื่อไร","มักต้องใช้รถเข็นก่อนวัยรุ่น","เดินได้ถึงวัยผู้ใหญ่"],
 ["สาเหตุการเสียชีวิต","หัวใจล้มเหลวหรือระบบหายใจ","เช่นกันแต่ช้ากว่ามาก"]]),
notes:()=>`<ul>
<li>Thompson & Thompson: gene dystrophin <b>กินพื้นที่มากกว่า 2 ล้านคู่เบส (2,000 kb) ซึ่งน่าทึ่งตรงที่มีไม่ถึง 1% เท่านั้นที่เป็นเอกซอนที่แปลรหัส</b> ${S.tt}</li>
<li>ขนาดมหึมาของ gene นี้คือเหตุผลที่ <b>mutation เกิดใหม่พบบ่อย</b> — เป้าใหญ่ย่อมถูกยิงโดนบ่อยกว่า ${S.x}</li>
<li>Thompson & Thompson: ใน Duchenne <b>ผู้หญิงที่เป็นพาหะแสดงการแสดงออกแบบ mosaic อย่างชัดเจน ซึ่งทำให้ระบุตัวพาหะได้</b> ${S.tt}</li>
<li>Thompson & Thompson: <b>ผู้หญิง heterozygote สองคนสำหรับโรค X-linked เดียวกันอาจมีอาการทางคลินิกต่างกันมาก</b> ขึ้นกับรูปแบบการปิด X แบบสุ่มของแต่ละคน ${S.tt}</li>
<li>อาการที่ใช้ชี้ทางในเด็ก: <b>Gowers sign</b> คือต้องใช้มือไต่ขาเพื่อลุกขึ้นยืน และ <b>น่องโตเทียม</b> จากไขมันและพังผืดแทนที่กล้ามเนื้อ ${S.x}</li>
<li>CK ในเลือดสูงมากตั้งแต่ก่อนมีอาการ จึงใช้เป็นการตรวจคัดกรองเบื้องต้นได้ ${S.x}</li></ul>`});

SEC.push({id:"rett",k:"b",t:"Rett syndrome",drugs:"",act:[],leg:[],
draw:()=>flowD([
 ["Normal pregnancy and early infancy","การเจริญเติบโตและพัฒนาการช่วงแรกปกติ","bl"],
 ["Rapid regression","สูญเสียทักษะที่เคยทำได้ โดยเฉพาะการใช้มือและการพูด","ar"],
 ["Stereotyped hand-wringing","ท่าบิดมือคล้ายล้างมือเป็นลักษณะเฉพาะ","vn"],
 ["A plateau, then long survival","ความพิการทางระบบประสาทรุนแรงแต่คงที่ อยู่ได้อีกหลายสิบปี","gl"]]),
notes:()=>`<ul>
<li>Thompson & Thompson: Rett syndrome <b>เกิดแทบเฉพาะในผู้หญิง และเข้าเกณฑ์ทุกข้อของ mutation เกิดใหม่ใน gene บน chromosome X ที่ชื่อ MECP2 โดยเป็นโรค X-linked dominant ที่มักเป็นอันตรายถึงชีวิตในผู้ชายที่มี X เดียว</b> ${S.tt}</li>
<li>Thompson & Thompson: กลุ่มอาการนี้มีลักษณะเป็น <b>การเจริญเติบโตและพัฒนาการก่อนคลอดและช่วงแรกเกิดที่ปกติ ตามด้วยการเกิดอาการทางระบบประสาทอย่างรวดเร็ว</b> ${S.tt}</li>
<li>Thompson & Thompson: gene MECP2 เข้ารหัส protein จับ DNA ที่ชื่อ <b>methyl-CpG-binding protein 2</b> และเชื่อว่ากลไกของโรคสะท้อนความผิดปกติของการควบคุม gene กลุ่มหนึ่งในสมองที่กำลังพัฒนา ${S.tt}</li>
<li>Thompson & Thompson: <b>ผู้หญิง heterozygote ส่วนใหญ่มีอาการครบเต็มรูปแบบ</b> ${S.tt}</li>
<li>Thompson & Thompson: หลังผ่านช่วงถดถอยแล้ว <b>ผู้ป่วยอยู่ได้อีกหลายสิบปีโดยมีความพิการทางระบบประสาทที่รุนแรงแต่คงที่</b> ${S.tt}</li>
<li>จุดที่ทำให้ Rett ต่างจากออทิสติกทั่วไป: <b>มีช่วงที่พัฒนาการปกติมาก่อนแล้วจึงถดถอย</b> พร้อมศีรษะที่โตช้าลงหลังคลอด ${S.x}</li></ul>`});

SEC.push({id:"trisomy",k:"c",t:"The three liveborn trisomies",drugs:"",act:[],leg:[],
draw:()=>tbl(["","Trisomy 21 (Down)","Trisomy 18 (Edwards)","Trisomy 13 (Patau)"],[
 ["ความถี่ในทารกแรกเกิด","1 / 830","1 / 7,500","1 / 22,700"],
 ["อาการเด่น","กล้ามเนื้ออ่อนปวกเปียก · ลายมือขวางฝ่ามือ · ผนังหัวใจห้องรั่ว","กำมือทับนิ้ว · เท้าโค้งนูน · ขากรรไกรเล็ก","ปากแหว่ง · นิ้วเกิน · ตาเล็กหรือไม่มีตา"],
 ["การพยากรณ์โรค","อยู่ได้ถึงวัยผู้ใหญ่","ส่วนใหญ่เสียชีวิตในปีแรก","ส่วนใหญ่เสียชีวิตในปีแรก"],
 ["ความเสี่ยงอื่น","cancerleukocyte · Alzheimer เร็ว","—","—"]]),
notes:()=>`<ul>
<li>ตัวเลขความถี่ข้างต้นมาจากการสำรวจทารกแรกเกิด 68,159 รายใน Thompson & Thompson ${S.tt} · ตำราอื่นให้ตัวเลขต่างออกไปบ้าง จึงควรจำ <b>ลำดับ 21 มากกว่า 18 มากกว่า 13</b> มากกว่าจำตัวเลขเป๊ะ ${S.x}</li>
<li>Thompson & Thompson ให้เหตุผลที่สวยงามว่าทำไมมีเพียงสามชนิดนี้: <b>chromosome 13, 18 และ 21 เป็นออโตโซมสามแท่งที่มีจำนวน gene น้อยที่สุด</b> ส่วน trisomy ของออโตโซมที่มี gene มากกว่านั้นน่าจะเป็นอันตรายถึงชีวิตในเกือบทุกกรณี ${S.tt}</li>
<li>Thompson & Thompson: <b>การขาดหายทั้ง chromosome (monosomy) แทบจะเป็นอันตรายถึงชีวิตเสมอ โดยมีข้อยกเว้นสำคัญคือ monosomy ของ chromosome X ซึ่งคือ Turner syndrome</b> ${S.tt}</li>
<li>Thompson & Thompson: <b>trisomy 21 คิดเป็นราวครึ่งหนึ่งของความผิดปกติทั้งหมดที่ตรวจพบก่อนคลอด</b> ${S.tt}</li>
<li>Thompson & Thompson แสดงอัตราการสูญเสียทารกในครรภ์ไว้ว่า trisomy 18 ที่ตรวจพบก่อนคลอด <b>95% ไม่รอดถึงคลอด</b> ส่วน trisomy 21 <b>ราว 78% ไม่รอด</b> ซึ่งอธิบายว่าทำไมความถี่ตอนเจาะน้ำคร่ำจึงสูงกว่าตอนคลอด ${S.tt}</li>
<li>วิธีจำที่ใช้ได้จริงคือเรียงตามตัวเลข — <b>13 Patau, 18 Edwards, 21 Down</b> ซึ่งเรียงจากรุนแรงที่สุดไปเบาที่สุดพอดี และเรียงจากพบน้อยที่สุดไปพบบ่อยที่สุดพอดีเช่นกัน ${S.x}</li></ul>`});

SEC.push({id:"robert",k:"d",t:"Nondisjunction & Robertsonian translocation",drugs:"",act:[],leg:[],
draw:()=>psvg(
 /* Why a carrier is healthy and still has affected children: the two long arms end up on one
    centromere and nothing of consequence is lost — but the gametes come out unbalanced. */
 `${T(140,40,"two acrocentric chromosomes",{c:"s"})}
  <rect class="box vn" x="96" y="60" width="16" height="18" rx="4"/>
  <circle class="box" cx="104" cy="86" r="8"/>
  <rect class="box ar" x="96" y="94" width="16" height="92" rx="5"/>
  <rect class="box vn" x="176" y="60" width="16" height="18" rx="4"/>
  <circle class="box" cx="184" cy="86" r="8"/>
  <rect class="box ar" x="176" y="94" width="16" height="92" rx="5"/>
  ${T(144,208,"short arms carry only rRNA genes",{c:"s"})}
  ${arr("M250,122 L320,122")}${T(285,104,"fusion",{c:"s m"})}
  <rect class="box ar" x="412" y="50" width="17" height="160" rx="6"/>
  <rect class="box ar" x="433" y="50" width="17" height="160" rx="6"/>
  <circle class="box" cx="431" cy="130" r="11"/>
  ${T(431,236,"one chromosome carrying both long arms",{c:"s"})}
  ${T(431,256,"the short arms are lost, with no consequence",{c:"s"})}
  ${T(320,290,"the carrier looks normal but makes unbalanced gametes",{c:"bad"})}`,
 "0 0 640 306"),
notes:()=>`<ul>
<li>Thompson & Thompson: <b>Robertsonian translocation คือการเชื่อมกันระหว่าง chromosome แบบ acrocentric สองแท่ง</b> ${S.tt}</li>
<li>Thompson & Thompson: <b>แม้พาหะของ Robertsonian translocation จะมีลักษณะภายนอกปกติ แต่มีความเสี่ยงที่จะสร้าง germ cell ที่ไม่สมดุล และจึงมีลูกที่ไม่สมดุลได้</b> ${S.tt}</li>
<li>Thompson & Thompson: <b>ความเสี่ยงของการมีลูกที่ไม่สมดุลต่างกันไปตามชนิดของ translocation และตามเพศของพ่อแม่ที่เป็นพาหะ โดยทั่วไปพาหะเพศหญิงมีความเสี่ยงสูงกว่า</b> ${S.tt}</li>
<li>Thompson & Thompson: ความสำคัญทางคลินิกหลักของ translocation ชนิดนี้อยู่ตรงความเสี่ยงต่อรุ่นลูก และพบ <b>การจัดเรียงแบบสมดุลชนิด Robertsonian ราว 1 ใน 1,100 ของทารกแรกเกิด</b> ${S.tt}</li>
<li>ประเด็นที่ใช้ในคลินิกจริง: ถ้าแม่อายุน้อยมีลูกเป็น Down syndrome <b>ต้องตรวจ chromosome ของพ่อแม่</b> เพราะถ้าเป็นแบบ translocation ความเสี่ยงเกิดซ้ำจะสูงกว่าแบบ nondisjunction มาก ${S.x}</li>
<li>chromosome แบบ acrocentric คือ 13, 14, 15, 21 และ 22 ซึ่งอธิบายว่าทำไม Robertsonian จึงเกี่ยวข้องกับ Down และ Patau syndrome ${S.x}</li>
<li><b>Nondisjunction</b> — chromosome คู่หนึ่งไม่แยกจากกันขณะแบ่งเซลล์ เป็นสาเหตุของ trisomy ส่วนใหญ่ และเพิ่มขึ้นชัดเจนตามอายุของมารดา ${S.x}</li>
<li>ต่างกันตรงที่ <b>Robertsonian translocation ถ่ายทอดในครอบครัวได้</b> ส่วน nondisjunction เกิดขึ้นเองเป็นราย ๆ ${S.x}</li></ul>`});

SEC.push({id:"del",k:"d",t:"Chromosomal deletion syndromes",drugs:"",act:[],leg:[],
draw:()=>tbl(["Syndrome","Deletion","Key features"],[
 ["Cri du chat","แขนสั้นของ chromosome <b>5</b>","เสียงร้องคล้ายแมว · ศีรษะเล็ก · บกพร่องทางสติปัญญา"],
 ["Williams","chromosome <b>7</b> (รวม gene elastin)","ใบหน้าคล้ายเอลฟ์ · เข้าสังคมเก่งผิดปกติ · calcium สูง · หลอดเลือดแดงใหญ่ตีบเหนือลิ้น"],
 ["DiGeorge / 22q11","<b>22q11.2</b>","หัวใจพิการ · ต่อมไทมัสและพาราไทรอยด์ไม่เจริญ · ปากแหว่งเพดานโหว่"],
 ["Prader-Willi / Angelman","<b>15q11-q13</b>","ขึ้นกับว่าขาดหายจากฝั่งพ่อหรือแม่"]]),
notes:()=>`<ul>
<li>Thompson & Thompson: cri du chat เกิดจาก <b>การขาดหายแบบปลายสายหรือแบบในสาย ของส่วนหนึ่งของแขนสั้นของ chromosome 5</b> ${S.tt}</li>
<li>Thompson & Thompson: ชื่อของกลุ่มอาการมาจากการที่ <b>เสียงร้องของทารกฟังคล้ายเสียงแมวร้อง</b> ${S.tt}</li>
<li>Thompson & Thompson: <b>การขาดหายของออโตโซมที่มองเห็นได้ด้วยกล้องจุลทรรศน์พบราว 1 ใน 7,000 ของทารกเกิดมีชีพ</b> ${S.tt}</li>
<li>Thompson & Thompson จัดกลุ่มอาการเหล่านี้ไว้ด้วยกันในฐานะ <b>genomic disorders</b> ซึ่งเกิดจากการขาดหายของช่วง DNA ที่มีหลาย gene อยู่ติดกัน ${S.tt}</li>
<li>เหตุผลที่กลุ่มอาการเหล่านี้กระทบหลายระบบพร้อมกัน คือการขาดหายพา gene ที่อยู่ติดกันหลายตัวไปด้วยกัน ไม่ใช่ gene เดียว ${S.x}</li>
<li>22q11 deletion เป็นการขาดหายที่พบบ่อยที่สุดในคน และอาการแตกต่างกันมากระหว่างผู้ป่วยแต่ละราย จนเคยถูกตั้งชื่อเป็นหลายกลุ่มอาการก่อนจะพบว่าเป็นสาเหตุเดียวกัน ${S.x}</li></ul>`});

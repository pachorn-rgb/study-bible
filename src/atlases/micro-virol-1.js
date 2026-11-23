//@include _micro-helpers.js
Object.assign(S,{mu:'<b class="sbb murray">Mu</b>'});
Object.assign(GN,{a:"Classification",b:"Virion structure",c:"Replication"});

/* ===================================================================
   Viral classification, structure and replication — Murray ch 36.
   =================================================================== */

SEC.push({id:"vir-names",k:"a",t:"Where the names come from",mm:"Naming",leg:[],
draw:()=>tbl(["Name","What it refers to"],[
 ["Picornavirus","pico คือเล็ก และ rna — ชื่อบอกโครงสร้าง"],
 ["Togavirus","toga ภาษากรีกแปลว่าเสื้อคลุม หมายถึง envelope ที่หุ้มอยู่"],
 ["Retrovirus","retro คือย้อนกลับ — การสร้าง DNA จากแม่แบบ RNA"],
 ["Poxvirus","ตั้งตามโรค smallpox ซึ่งเกิดจากสมาชิกตัวหนึ่งในวงศ์"],
 ["Adenovirus","adenoid คือที่ที่แยกเชื้อได้ครั้งแรก"],
 ["Reovirus","respiratory, enteric, orphan — orphan เพราะถูกค้นพบก่อนที่จะรู้ว่าทำให้เกิดโรคอะไร"],
 ["Norwalk virus · coxsackievirus","Norwalk รัฐ Ohio และ Coxsackie รัฐ New York"],
 ["Togavirus · arenavirus · bunyavirus หลายตัว","ชื่อสถานที่ใน Africa ที่แยกเชื้อได้ครั้งแรก"]]),
notes:()=>`<h3>Four ways to group viruses, and the one that is used</h3><ul>
 <li>ไวรัสมีตั้งแต่โครงสร้างเรียบง่ายและเล็กอย่าง <b>parvovirus กับ picornavirus</b> ไปจนถึงใหญ่และซับซ้อนอย่าง <b>poxvirus กับ herpesvirus</b> ${S.mu}</li>
 <li>จัดกลุ่มได้หลายแบบ — <b>ตามโรค เช่น hepatitis, ตาม target tissue, ตามวิธีแพร่เช่น enteric หรือ respiratory และตาม vector เช่น arbovirus คือ arthropod-borne virus</b> ${S.mu}</li>
 <li>แต่วิธีที่<b>สม่ำเสมอที่สุดและใช้อยู่ปัจจุบันคือการจำแนกด้วยลักษณะทางกายภาพและชีวเคมี</b> — <b>ขนาด, morphology คือมี envelope หรือไม่, ชนิดของ genome และวิธีเพิ่มจำนวน</b> ${S.mu}</li>
 <li>ผลของการจำแนกแบบนั้น: <b>DNA virus ที่สัมพันธ์กับโรคในคนแบ่งเป็น 7 family</b> และ <b>RNA virus แบ่งได้อย่างน้อย 13 family</b> ${S.mu}</li></ul>`});

SEC.push({id:"vir-dna-fam",k:"a",t:"The seven DNA virus families",mm:"DNA families",leg:[],
draw:()=>tbl(["Family","Genome","Virion","Size (nm)","Encodes polymerase?"],[
 ["Poxviridae","85–140 × 10⁶ Da · ds linear","brick-shaped, enveloped","300 × 240 × 100","+ และพกมาในตัว virion · และยังเข้ารหัส DNA-dependent RNA polymerase ด้วย"],
 ["Herpesviridae","100–150 × 10⁶ Da · ds linear","icosadeltahedral, enveloped","capsid 100–110 · envelope 120–200","+"],
 ["Adenoviridae","20–25 × 10⁶ Da · ds linear","icosadeltahedral with fibers","70–90","+"],
 ["Hepadnaviridae","1.8 × 10⁶ Da · ds circular (บางส่วนเป็น single strand)","spherical, enveloped","42","+ พกมาในตัว virion · เป็น reverse transcriptase"],
 ["Polyomaviridae · Papillomaviridae","3–5 × 10⁶ Da · ds circular","icosadeltahedral","45–55","—"],
 ["Parvoviridae","1.5–2.0 × 10⁶ Da · ss linear","icosahedral","18–26","—"]]),
notes:()=>`<h3>Members to recognise</h3><ul>
 <li><b>Poxviridae</b> — smallpox virus, vaccinia virus, monkeypox, canarypox, molluscum contagiosum ${S.mu}</li>
 <li><b>Herpesviridae</b> — herpes simplex virus type 1 และ 2, varicella-zoster virus, Epstein-Barr virus, cytomegalovirus, human herpesvirus 6, 7 และ 8 ${S.mu}</li>
 <li><b>Adenoviridae</b> — adenovirus ${S.mu}</li>
 <li><b>Papillomaviridae</b> — papillomavirus · <b>Polyomaviridae</b> — JC virus, BK virus, SV40 ${S.mu}</li>
 <li><b>Parvoviridae</b> — parvovirus B19, adeno-associated virus ${S.mu}</li>
 <li><b>Hepadnaviridae</b> — hepatitis B virus ${S.mu}</li>
 <li>หลักที่อ่านตารางข้างบน: <b>genome ของ DNA virus เป็นโมเลกุลเดียวเสมอ</b> ${S.mu}</li>
 <li>และ<b>ยิ่ง virion ใหญ่ ยิ่งบรรจุ genome ที่ใหญ่กว่า จึงเข้ารหัสโปรตีนได้มากกว่าและโดยทั่วไปซับซ้อนกว่า</b> ${S.mu}</li>
 <li>ตัวเลขที่ให้มาตราส่วน: <b>poxvirus ขนาด 300 nm แทบมองเห็นได้ด้วย light microscope และมีขนาดราวหนึ่งในสี่ของ staphylococcus</b> ${S.mu}</li></ul>`});

SEC.push({id:"vir-rna-fam",k:"a",t:"The RNA virus families",mm:"RNA families",leg:[],
draw:()=>tbl(["Family","Prototype members"],[
 ["Paramyxoviridae","parainfluenza virus · Sendai virus · measles virus · mumps virus · respiratory syncytial virus · metapneumovirus"],
 ["Orthomyxoviridae","influenza virus type A, B, C · thogotovirus"],
 ["Coronaviridae","coronavirus · SARS virus · MERS virus"],
 ["Arenaviridae","Lassa fever virus · Tacaribe virus complex (Junin, Machupo) · lymphocytic choriomeningitis virus"],
 ["Rhabdoviridae","rabies virus · vesicular stomatitis virus"],
 ["Filoviridae","Marburg virus · Ebola virus"],
 ["Bunyaviridae","California encephalitis virus · hantavirus · Rift Valley fever virus"],
 ["Retroviridae","human T-lymphotropic virus · human immunodeficiency virus"],
 ["Reoviridae","reovirus · rotavirus · Colorado tick fever virus"],
 ["Picornaviridae","poliovirus · coxsackievirus · echovirus · rhinovirus · hepatitis A virus"],
 ["Caliciviridae · Hepeviridae","norovirus · hepatitis E virus"],
 ["Astroviridae","astrovirus"],
 ["Togaviridae","rubella virus · alphavirus"],
 ["Flaviviridae","dengue virus · yellow fever virus · Zika virus · Japanese encephalitis virus · hepatitis C virus"]]),
notes:()=>`<h3>Why RNA viruses need more categories</h3><ul>
 <li><b>วงศ์ของไวรัสถูกกำหนดด้วยโครงสร้างของ genome และ morphology ของ virion</b> ${S.mu}</li>
 <li>และ RNA genome มีรูปแบบมากกว่า DNA — <b>positive sense (+) ซึ่งทำตัวเหมือน messenger RNA, negative sense (−) ซึ่งเทียบได้กับฟิล์มเนกาทิฟ, double stranded (+/−) และ ambisense คือมีทั้งส่วน + และ − ต่อกันที่ปลาย</b> ${S.mu}</li>
 <li>และ<b>RNA genome ยังถูกแบ่งเป็น segment ได้ โดยแต่ละชิ้นเข้ารหัสหนึ่งยีนหรือมากกว่า</b> ${S.mu}</li>
 <li>หลักที่ใช้ได้กับทุกวงศ์: <b>genome ยิ่งใหญ่ ยิ่งพาข้อมูลได้มาก และยิ่งต้องการ capsid หรือ envelope ที่ใหญ่ขึ้นเพื่อบรรจุมัน</b> ${S.mu}</li>
 <li>ข้อที่ต้องจำสำหรับรูปร่าง: <b>negative-strand RNA virus ทุกตัวเป็น enveloped</b> ${S.mu}</li>
 <li>และ<b>helical nucleocapsid ในไวรัสของคนเป็น enveloped เสมอ</b> ${S.mu}</li></ul>`});

SEC.push({id:"vir-virion",k:"b",t:"What a virion is made of",mm:"Virion",leg:[],
notes:()=>`<h3>The parts</h3><ul>
 <li><b>Virion คืออนุภาคไวรัส ประกอบด้วย nucleic acid genome ที่ถูกบรรจุใน protein coat คือ capsid หรือใน membrane คือ envelope</b> ${S.mu}</li>
 <li><b>Virion อาจบรรจุเอนไซม์ที่จำเป็นหรือเป็นส่วนเสริม หรือโปรตีนอื่นที่ช่วยการเพิ่มจำนวนรอบแรกในเซลล์ด้วย</b> ${S.mu}</li>
 <li><b>Capsid หรือ nucleic acid-binding protein อาจจับกับ genome เป็น nucleocapsid</b> ซึ่ง<b>อาจเป็นตัว virion เองหรือถูกหุ้มด้วย envelope อีกชั้น</b> ${S.mu}</li>
 <li>ขนาดวัดเป็น nanometer: <b>ไวรัสที่สำคัญทางคลินิกมีตั้งแต่ 18 nm คือ parvovirus ถึง 300 nm คือ poxvirus</b> ${S.mu}</li></ul>
 <h3>Every form the genome can take</h3><ul>
 <li><b>DNA เป็น single stranded หรือ double stranded ได้ และเป็น linear หรือ circular ได้</b> ${S.mu}</li>
 <li><b>RNA เป็น positive sense, negative sense, double stranded หรือ ambisense ได้ และอาจถูกแบ่งเป็น segment</b> ${S.mu}</li>
 <li>ภาพเปรียบที่ช่วยจำ: <b>เหมือนหน่วยความจำคอมพิวเตอร์ที่มีหลายชนิด รูปแบบของกรดนิวคลีอิกทั้งหมดนี้เก็บและส่งต่อข้อมูลพันธุกรรมของไวรัสได้เหมือนกัน</b> ${S.mu}</li></ul>
 <h3>The outer layer does three jobs</h3><ul>
 <li>ชั้นนอกสุดของ virion คือ capsid หรือ envelope ซึ่งเป็น<b>ทั้งบรรจุภัณฑ์ เครื่องป้องกัน และยานพาหนะนำส่ง</b> ${S.mu}</li>
 <li>งานนั้นเกิดสองระดับ — <b>ระหว่างการแพร่จาก host หนึ่งไปอีก host หนึ่ง และระหว่างการแพร่ภายในตัว host ไปยัง target cell</b> ${S.mu}</li>
 <li>โครงสร้างที่ผิวของ capsid และ envelope <b>เป็นตัวกลางของปฏิสัมพันธ์กับ target cell ผ่าน viral attachment protein</b> ${S.mu}</li>
 <li>สองผลที่ตามมาโดยตรง: <b>การเอาหรือทำลายบรรจุภัณฑ์ชั้นนอกทำให้ไวรัสหมดฤทธิ์</b> และ<b>แอนติบอดีที่สร้างต่อ viral attachment protein ป้องกันการติดเชื้อได้</b> ${S.mu}</li></ul>`});

SEC.push({id:"vir-capsid",k:"b",t:"Building a capsid",mm:"Capsid assembly",leg:[],
draw:()=>tbl(["Shape","Who uses it","How it is built"],[
 ["Helical","negative-strand RNA virus แทบทั้งหมด — เห็นเป็นแท่ง","nucleocapsid protein จับกับ genome แล้วถูกนำส่งเข้าเซลล์พร้อมกัน"],
 ["Simple icosahedron","ไวรัสขนาดเล็กอย่าง picornavirus และ parvovirus","12 capsomere แต่ละอันมี fivefold symmetry คือ pentamer หรือ penton"],
 ["Icosadeltahedron","ไวรัสที่ capsid ใหญ่ขึ้น เช่น herpesvirus 12 penton กับ 150 hexon และ adenovirus 252 capsomere โดย 12 อันเป็น penton","แทรก capsomere ที่มีเพื่อนบ้านหกตัว คือ hexon ลงระหว่าง penton ที่มุม"],
 ["Nonsymmetric · complex","ไวรัสของแบคทีเรียบางตัว คือ phage","ไม่สมมาตร"]]),
notes:()=>`<h3>From protein to capsid</h3><ul>
 <li>ลำดับการประกอบ: <b>structural protein รวมเป็น subunit → protomer → capsomere ซึ่งเห็นได้ใน electron micrograph → procapsid หรือ capsid ที่จำรูปได้</b> ${S.mu}</li>
 <li><b>Procapsid ต้องผ่านกระบวนการต่ออีกจึงกลายเป็น capsid สุดท้ายที่แพร่เชื้อได้</b> ${S.mu}</li>
 <li>และลำดับต่างกันไปในแต่ละไวรัส — <b>บางตัว capsid ก่อตัวรอบ genome ส่วนบางตัวก่อเป็นเปลือกเปล่าคือ procapsid แล้วจึงเติม genome เข้าไป</b> ${S.mu}</li>
 <li>โครงสร้างที่สร้างทีละขั้นได้ง่ายที่สุดคือ<b>โครงสร้างสมมาตร ซึ่งมีสองแบบคือ helical และ icosahedral</b> ${S.mu}</li>
 <li><b>Icosahedron คือการประมาณทรงกลมที่ประกอบจาก subunit ที่สมมาตรกัน</b> ${S.mu}</li>
 <li>รายละเอียดของ picornavirus: <b>แต่ละ pentamer สร้างจาก protomer ห้าอัน และแต่ละ protomer ประกอบจาก subunit สามชิ้นของโปรตีนสี่ตัวที่แยกกัน</b> ${S.mu}</li>
 <li>ภาพเปรียบของ icosadeltahedron: <b>ลูกฟุตบอลแบบเก่าคือ icosadeltahedron</b> · และ<b>ขนาดของมันกำหนดโดยจำนวน hexon ที่แทรกตามขอบและบนผิวระหว่าง penton</b> ${S.mu}</li></ul>
 <h3>The canyon</h3><ul>
 <li>งาน X-ray crystallography และ cryoelectron microscopy <b>อธิบายโครงสร้าง capsid ของ picornavirus ได้ถึงระดับโมเลกุล</b> ${S.mu}</li>
 <li>และสิ่งที่งานนั้นเห็นคือ <b>ร่องคล้ายหุบเขา ซึ่งเป็นจุดเทียบท่าสำหรับจับ receptor บนผิวของ target cell</b> ${S.mu}</li>
 <li>สิ่งที่ helical nucleocapsid พาเข้าไปด้วย: <b>nucleocapsid protein ที่จับ genome คือเอนไซม์ที่จำเป็นต่อการ transcription และการเพิ่มจำนวน</b> ${S.mu}</li></ul>`});

SEC.push({id:"vir-naked-env",k:"b",t:"Naked capsid versus enveloped",mm:"Naked vs enveloped",leg:[],
draw:()=>tbl(["","Naked capsid","Enveloped"],[
 ["Components","โปรตีน","membrane · lipid · protein · glycoprotein"],
 ["Environment","ทนทาน — ทนความร้อน กรด protease detergent และการแห้ง","เปราะบาง — ถูกทำลายด้วยกรด detergent การแห้งและความร้อน"],
 ["Release from the cell","ออกเมื่อเซลล์แตก","ออกโดย budding และโดยเซลล์แตก · และเปลี่ยน cell membrane ระหว่างเพิ่มจำนวน"],
 ["How it spreads","แพร่ง่ายทั้งบน fomite, จากมือสู่มือ, ทางฝุ่น และทางละอองขนาดเล็ก","แพร่ในละอองขนาดใหญ่ สารคัดหลั่ง การปลูกถ่ายอวัยวะและการให้เลือด"],
 ["Drying","แห้งแล้วยังแพร่เชื้อได้","ต้องอยู่ในที่ชื้นตลอด"],
 ["The gut","รอดสภาพที่ไม่เป็นมิตรของทางเดินอาหารได้","รอดทางเดินอาหารไม่ได้"],
 ["Sewage · detergent","ทนทั้ง detergent และระบบบำบัดน้ำเสียที่ไม่ดี","—"],
 ["Killing the host cell","ต้องทำให้เซลล์แตกจึงจะออกมาได้","ไม่ต้องฆ่าเซลล์ก็แพร่ต่อได้"],
 ["Immunity needed","แอนติบอดีอย่างเดียวอาจพอป้องกัน","อาจต้องใช้ทั้งแอนติบอดีและ cell-mediated immune response"],
 ["Immunopathogenesis","—","กระตุ้น hypersensitivity และ inflammation จึงก่อโรคผ่านภูมิคุ้มกันเอง"]]),
notes:()=>`<h3>What is in the envelope</h3><ul>
 <li>แม้ envelope จะได้มาจาก membrane ของเซลล์ แต่<b>แทบไม่พบโปรตีนของเซลล์อยู่ใน envelope ของไวรัส</b> ${S.mu}</li>
 <li><b>Enveloped virus ส่วนใหญ่กลมหรือรูปร่างไม่แน่นอน</b> · สองข้อยกเว้นคือ <b>poxvirus ซึ่งภายในซับซ้อนและภายนอกเป็นก้อนอิฐ และ rhabdovirus ซึ่งรูปร่างเหมือนกระสุนปืน</b> ${S.mu}</li>
 <li><b>Viral glycoprotein ส่วนใหญ่มี carbohydrate ที่ต่อแบบ asparagine-linked และยื่นทะลุ envelope ออกไปจากผิวของ virion</b> — <b>ในหลายไวรัสเห็นเป็นหนามหรือ spike</b> ${S.mu}</li>
 <li>glycoprotein บางตัวทำหน้าที่เป็น <b>viral attachment protein</b> · และ<b>viral attachment protein ที่จับ erythrocyte ได้ด้วยเรียกว่า hemagglutinin</b> ${S.mu}</li>
 <li>glycoprotein ตัวอื่นทำหน้าที่อื่น — <b>neuraminidase ของ orthomyxovirus, Fc receptor กับ C3b receptor ที่มากับ glycoprotein ของ herpes simplex virus และ fusion glycoprotein ของ paramyxovirus</b> ${S.mu}</li>
 <li>และข้อที่สำคัญต่อวัคซีน: <b>glycoprotein โดยเฉพาะ viral attachment protein เป็นแอนติเจนหลักที่กระตุ้นภูมิคุ้มกันที่ป้องกันได้</b> ${S.mu}</li></ul>
 <h3>Four envelopes worth knowing by name</h3><ul>
 <li><b>Togavirus</b> — envelope หุ้ม icosahedral nucleocapsid ที่บรรจุ positive-strand RNA · <b>spike ของมันประกอบจาก glycoprotein สองหรือสาม subunit ที่ยึดกับ capsid</b> ${S.mu}</li>
 <li>ผลของการยึดนั้น: <b>envelope แนบแน่นและหดรัดตามรูป icosahedron จนมองเห็นรูปนั้นได้ด้วย cryoelectron microscopy</b> ${S.mu}</li>
 <li><b>Orthomyxovirus, paramyxovirus และ rhabdovirus</b> — <b>ส่วนประกอบของ RNA-dependent RNA polymerase จับกับ (−) RNA genome เป็น helical nucleocapsid</b> ${S.mu}</li>
 <li>เหตุผลที่มันต้องอยู่ด้วยกัน: <b>เอนไซม์เหล่านี้จำเป็นต่อการเริ่มเพิ่มจำนวน การที่มันผูกกับ genome จึงเป็นหลักประกันว่ามันถูกส่งเข้าเซลล์ไปด้วย</b> ${S.mu}</li>
 <li><b>Matrix protein ที่บุด้านในของ envelope ช่วยการประกอบ ribonucleocapsid เข้าเป็น virion</b> · <b>influenza A มี matrix protein บุไว้และมี glycoprotein สองตัวคือ hemagglutinin ซึ่งเป็น viral attachment protein และ neuraminidase</b> · <b>ส่วน bunyavirus ไม่มี matrix protein</b> ${S.mu}</li>
 <li><b>Herpesvirus</b> — envelope เป็นถุงหุ้ม icosadeltahedral nucleocapsid และ<b>อาจมี glycoprotein ถึง 11 ตัว</b> ${S.mu}</li>
 <li>ช่องว่างระหว่าง nucleocapsid กับ envelope เรียกว่า <b>tegument ซึ่งบรรจุเอนไซม์ โปรตีนอื่นและแม้แต่ RNA ที่ช่วยการติดเชื้อ</b> ${S.mu}</li>
 <li><b>Poxvirus</b> — envelope หุ้ม<b>nucleoid รูปดัมเบลล์ที่บรรจุ DNA, lateral body, fibril และเอนไซม์กับโปรตีนจำนวนมาก รวมถึงเอนไซม์และ transcriptional factor ที่ต้องใช้สร้าง messenger RNA</b> ${S.mu}</li></ul>`});

SEC.push({id:"vir-attach",k:"c",t:"Attachment decides who gets infected",mm:"Attachment",leg:[],
draw:()=>tbl(["Family","Virus","Viral attachment protein"],[
 ["Picornaviridae","rhinovirus","VP1-VP2-VP3 complex"],
 ["Adenoviridae","adenovirus","fiber protein"],
 ["Reoviridae","reovirus · rotavirus","σ-1 · VP7"],
 ["Togaviridae","Semliki Forest virus","E1-E2-E3 complex glycoprotein"],
 ["Rhabdoviridae","rabies virus","G protein glycoprotein"],
 ["Orthomyxoviridae","influenza A virus","hemagglutinin glycoprotein"],
 ["Paramyxoviridae","measles virus","H glycoprotein"]]),
notes:()=>`<h3>The cell is the factory</h3><ul>
 <li>ขั้นตอนหลักของการเพิ่มจำนวน<b>เหมือนกันในไวรัสทุกตัว</b> ${S.mu}</li>
 <li><b>เซลล์ทำหน้าที่เป็นโรงงาน ให้ทั้งสารตั้งต้น พลังงานและเครื่องจักรที่จำเป็นต่อการสร้างโปรตีนของไวรัสและการเพิ่มจำนวน genome</b> ${S.mu}</li>
 <li>และหลักที่ตามมา: <b>กระบวนการใดที่เซลล์ไม่มีให้ ต้องถูกเข้ารหัสอยู่ใน genome ของไวรัสเอง</b> ${S.mu}</li>
 <li>วิธีที่แต่ละไวรัสทำขั้นตอนเหล่านี้ต่างกัน <b>ตามโครงสร้างของ genome และของ virion ว่าเป็น enveloped หรือไม่</b> ${S.mu}</li></ul>
 <h3>Receptor range sets host range</h3><ul>
 <li>การเกาะอาศัย <b>viral attachment protein จับกับ receptor บนผิว target cell</b> ${S.mu}</li>
 <li>ตัวอย่างที่อธิบายทั้งวงจรชีวิต: <b>ไวรัสบางตัวจับ receptor ที่พบในเซลล์ของสัตว์หลายสปีชีส์ ทั้ง arthropod, สัตว์เลื้อยคลาน, สัตว์สะเทินน้ำสะเทินบก, นกและสัตว์เลี้ยงลูกด้วยนม</b> ${S.mu}</li>
 <li>และนั่นคือสิ่งที่<b>ทำให้มันติดเชื้อได้ทั้งในสัตว์และในยุงกับแมลงอื่น และถูกแมลงเหล่านั้นแพร่ต่อ</b> ${S.mu}</li></ul>`});

SEC.push({id:"vir-enter",k:"c",t:"Getting in and taking the coat off",mm:"Entry and uncoating",leg:[],
draw:()=>tbl(["Route","Who uses it","The trigger"],[
 ["Receptor-mediated endocytosis","nonenveloped virus ส่วนใหญ่","กระบวนการปกติที่เซลล์ใช้รับ hormone, low-density lipoprotein และ transferrin"],
 ["Viropexis — direct penetration","picornavirus · papillomavirus · polyomavirus","โครงสร้าง hydrophobic ของ capsid protein ถูกเปิดออกหลังจับเซลล์ แล้วพาไวรัสหรือ genome ลอดผ่าน membrane"],
 ["Fusion at neutral pH ที่ผิวเซลล์","paramyxovirus ด้วย fusion protein · herpesvirus และ retrovirus บางตัว","ไม่ต้องใช้กรด — และ paramyxovirus ยังเชื่อมเซลล์กับเซลล์เป็น syncytium ได้"],
 ["Fusion at acid pH ใน endosome","influenza A","hemagglutinin จับ sialic acid receptor แล้วเปลี่ยนรูปอย่างรุนแรงในกรดอ่อนของ endosome จนเปิดส่วน hydrophobic ออกมา"]]),
notes:()=>`<h3>Penetration</h3><ul>
 <li>การเข้าเซลล์เริ่มจาก<b>ปฏิสัมพันธ์ระหว่าง viral attachment protein หลายตัวกับ receptor ของเซลล์</b> ${S.mu}</li>
 <li>และ<b>กลไกที่ใช้ขึ้นกับโครงสร้างของ virion และชนิดของเซลล์</b> ${S.mu}</li>
 <li><b>Enveloped virus เชื่อม membrane ของตัวเองกับ membrane ของเซลล์ เพื่อส่ง nucleocapsid หรือ genome เข้า cytoplasm โดยตรง</b> ${S.mu}</li>
 <li>สิ่งที่ตัดสินว่าจะเชื่อมที่ไหน: <b>pH ที่เหมาะต่อการ fusion</b> — <b>ถ้าเหมาะที่ pH เป็นกลางก็เชื่อมที่ผิวเซลล์ ถ้าต้องการกรดก็ต้องถูกนำเข้าโดย endocytosis แล้วเชื่อมใน endosome</b> ${S.mu}</li>
 <li>และ<b>ฤทธิ์ fusion มาจาก viral attachment protein เองหรือจากโปรตีนอีกตัวก็ได้</b> ${S.mu}</li></ul>
 <h3>Uncoating</h3><ul>
 <li>เมื่อเข้ามาแล้ว <b>nucleocapsid ต้องถูกส่งไปยังจุดที่เพิ่มจำนวนในเซลล์ และ capsid หรือ envelope ต้องถูกถอดออก</b> ${S.mu}</li>
 <li>จุดหมายต่างกันตามชนิด genome: <b>genome ของ DNA virus ต้องไปถึง nucleus ยกเว้น poxvirus ส่วน RNA virus ส่วนใหญ่อยู่ใน cytoplasm</b> ${S.mu}</li>
 <li>การถอดเปลือก<b>อาจเริ่มตั้งแต่การจับ receptor หรือถูกเร่งด้วยสภาพกรดหรือ protease ที่อยู่ใน endosome กับ lysosome</b> ${S.mu}</li>
 <li><b>Picornavirus</b> — <b>capsid อ่อนแอลงเมื่อปล่อย capsid protein VP4 ออก</b> และ<b>VP4 ถูกปล่อยเมื่อ receptor เสียบเข้าไปในร่องคล้ายรูกุญแจที่เป็นจุดเกาะ</b> ${S.mu}</li>
 <li><b>Herpesvirus</b> — <b>envelope เชื่อมกับ plasma membrane ปล่อย nucleocapsid ออกมา แล้ว nucleocapsid ไปเทียบท่ากับ nuclear membrane เพื่อส่ง DNA เข้าสู่จุดเพิ่มจำนวนโดยตรง</b> ${S.mu}</li>
 <li><b>Influenza</b> — <b>การปล่อย nucleocapsid ออกจาก matrix และ envelope อาศัยการที่ proton จากใน endosome ไหลผ่านรูที่โปรตีน M2 สร้างขึ้น ทำให้ภายใน virion เป็นกรด</b> ${S.mu}</li>
 <li><b>Reovirus และ poxvirus ถูกถอดเปลือกเพียงบางส่วนตอนเข้าเซลล์</b> ${S.mu}</li>
 <li>reovirus — <b>outer capsid ถูกเอาออกแต่ genome ยังอยู่ใน inner capsid ซึ่งบรรจุ polymerase ที่จำเป็นต่อการสร้าง RNA</b> ${S.mu}</li>
 <li>poxvirus — <b>การถอดเปลือกขั้นแรกเปิดอนุภาคย่อยออกสู่ cytoplasm ทำให้เอนไซม์ที่มากับ virion สร้าง messenger RNA ได้ แล้วจึงสร้างเอนไซม์ถอดเปลือกขึ้นมาปล่อยแกนที่บรรจุ DNA ออกสู่ cytoplasm</b> ${S.mu}</li></ul>`});

SEC.push({id:"vir-synth",k:"c",t:"Making messenger RNA, genome by genome",mm:"Synthesis",leg:[],
notes:()=>`<h3>The rule</h3><ul>
 <li>เมื่ออยู่ในเซลล์แล้ว <b>genome ต้องสั่งการสร้างทั้ง viral messenger RNA และโปรตีน และต้องสร้างสำเนาของตัวเองที่เหมือนเดิม</b> ${S.mu}</li>
 <li>และหลักที่คุมทุกอย่าง: <b>genome ไร้ประโยชน์ถ้ามันถูกถอดเป็น messenger RNA ที่ใช้งานได้ไม่ได้ — คือจับ ribosome และถูกแปลเป็นโปรตีนไม่ได้</b> ${S.mu}</li>
 <li>วิธีที่แต่ละไวรัสทำขั้นนี้<b>ขึ้นกับโครงสร้างของ genome และจุดที่มันเพิ่มจำนวน</b> ${S.mu}</li>
 <li>กลุ่มที่ง่ายที่สุด: <b>genome เปล่าของ DNA virus ยกเว้น poxvirus และของ positive-sense RNA virus ยกเว้น retrovirus ใช้งานได้ด้วยตัวเอง</b> ${S.mu}</li>
 <li>กลุ่มที่ตรงข้าม: <b>negative-strand RNA virus ต้องพา RNA-dependent RNA polymerase ของตัวเองเข้ามาด้วย เพราะเซลล์ไม่มีเอนไซม์นั้น</b> ${S.mu}</li>
 <li>นั่นคือเหตุผลที่<b>polymerase ของ orthomyxovirus, paramyxovirus และ rhabdovirus ผูกติดอยู่กับ genome ใน virion</b> ${S.mu}</li></ul>
 <h3>Reading the growth curve</h3><ul>
 <li><b>Eclipse period</b> คือช่วงที่<b>มองไม่เห็นส่วนประกอบของไวรัส</b> ${S.mu}</li>
 <li><b>Latent period</b> คือช่วงที่<b>ยังไม่มีไวรัสที่แพร่เชื้อได้ในน้ำเลี้ยง</b> ${S.mu}</li>
 <li>ส่วน<b>ระยะ early และ late แบ่งตามการสร้างสารโมเลกุลใหญ่</b> ${S.mu}</li>
 <li><b>Burst size คือจำนวนไวรัสที่ได้จากเซลล์หนึ่ง</b> และต่างกันมากระหว่างไวรัสแต่ละตัว ${S.mu}</li></ul>
 <h3>Assembly and release</h3><ul>
 <li><b>Naked capsid virus โดยทั่วไปถูกปล่อยออกหลังเซลล์แตก</b> ${S.mu}</li>
 <li><b>Enveloped virus ส่วนใหญ่ถูกปล่อยโดย budding จาก plasma membrane โดยไม่ฆ่าเซลล์</b> ${S.mu}</li>
 <li>และนี่คือจุดที่ความต่างของโครงสร้างกลายเป็นความต่างของพฤติกรรม — <b>ไวรัสที่ไม่ต้องฆ่าเซลล์เพื่อออกมา ตั้งการติดเชื้อที่ยืดเยื้อได้</b> ${S.mu}</li></ul>`});

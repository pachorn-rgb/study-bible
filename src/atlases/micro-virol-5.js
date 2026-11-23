//@include _micro-helpers.js
Object.assign(S,{mu:'<b class="sbb murray">Mu</b>'});
Object.assign(GN,{a:"The family",b:"Herpes simplex virus",c:"Varicella-zoster virus",d:"Epstein-Barr virus",e:"Cytomegalovirus and the rest"});

/* ===================================================================
 The human herpesviruses — Murray ch 43.
 =================================================================== */

SEC.push({id:"hv-family",k:"a",t:"Eight viruses, eight hiding places",mm:"The eight",leg:[],
draw:()=>tbl(["Subfamily · virus","Primary target cell","Site of latency","Means of spread"],[
 ["Alphaherpesvirinae · HHV-1 herpes simplex type 1","mucoepithelial cell","neuron","close contact"],
 ["Alphaherpesvirinae · HHV-2 herpes simplex type 2","mucoepithelial cell","neuron","close contact — sexually transmitted"],
 ["Alphaherpesvirinae · HHV-3 varicella-zoster virus","mucoepithelial cell และ T cell","neuron","respiratory และ close contact"],
 ["Gammaherpesvirinae · HHV-4 Epstein-Barr virus","B cell และ epithelial cell","memory B cell","saliva — kissing disease"],
 ["Gammaherpesvirinae · HHV-8 Kaposi sarcoma-related virus","lymphocyte","B cell","close contact ทางเพศ และ saliva"],
 ["Betaherpesvirinae · HHV-5 cytomegalovirus","macrophage, lymphocyte, epithelial cell","hematopoietic progenitor cell, myeloid stem cell, monocyte","close contact, การให้ blood, การปลูกถ่าย tissue และแต่กำเนิด"],
 ["Betaherpesvirinae · HHV-6","T lymphocyte, epithelial cell, neuronal cell","hematopoietic progenitor cell และ T cell","saliva"],
 ["Betaherpesvirinae · HHV-7","เหมือน HHV-6","hematopoietic progenitor cell และ T cell","saliva"]]),
notes:()=>`<h3>What they share</h3><ul>
 <li><b>capsid ขนาดใหญ่ มี envelope เป็น icosadeltahedral และบรรจุ double-stranded DNA genome</b> ${S.mu}</li>
 <li><b>virion มีขนาดราว 150 nm · DNA core ถูกหุ้มด้วย capsid ที่มี 162 capsomere แล้วหุ้มด้วย envelope ที่มี glycoprotein</b> ${S.mu}</li>
 <li><b>herpesvirus เข้ารหัส glycoprotein หลายตัวสำหรับการเกาะ การเชื่อม membrane และการหนีการควบคุมของ immunity</b> ${S.mu}</li>
 <li>ช่องว่างระหว่าง envelope กับ capsid คือ <b>tegument ซึ่งบรรจุโปรตีนและเอนไซม์ที่ช่วยเริ่มการเพิ่มจำนวน</b> ${S.mu}</li>
 <li>และเพราะเป็น enveloped virus มันจึง<b>ไวต่อกรด ตัวทำละลาย detergent และการแห้ง</b> ${S.mu}</li>
 <li>genome: <b>เป็น linear double-stranded DNA แต่ต่างกันทั้งขนาดและทิศทางของยีน</b> ${S.mu}</li>
 <li>และโครงสร้างที่ทำให้มันยืดหยุ่น: <b>ลำดับซ้ำทั้งแบบ direct และ inverted ขนาบส่วนที่ไม่ซ้ำของ genome คือ unique long กับ unique short ทำให้ genome วนเป็นวงและเกิด recombination ภายในตัวเองได้</b> ${S.mu}</li>
 <li>ผลของ recombination นั้น: <b>herpes simplex virus, cytomegalovirus และ varicella-zoster virus พลิกทิศของส่วน unique long และ unique short เทียบกัน จนได้ genome หลายรูปแบบ</b> ${S.mu}</li>
 <li>ข้อที่เป็นหลักของทั้งวงศ์: <b>cell-mediated immunity จำเป็นต่อการควบคุม</b> ${S.mu}</li>
 <li>และ<b>ไวรัสทั้งวงศ์พบทั่วไป และก่อ infection ได้ทั้งแบบ lytic, persistent, latent และสำหรับ Epstein-Barr virus คือ immortalizing</b> ${S.mu}</li></ul>`});

SEC.push({id:"hv-repl",k:"a",t:"Three waves of transcription",mm:"Replication",leg:[],
draw:()=>tbl(["Phase","Greek","What is made"],[
 ["Immediate early","α","โปรตีนที่กำกับการถอดรหัสยีนและยึดครองเซลล์"],
 ["Early","β","transcription factor เพิ่มเติมและเอนไซม์ รวมถึง DNA polymerase"],
 ["Late","γ","โปรตีนโครงสร้างเป็นหลัก สร้างหลังการเพิ่มจำนวน genome เริ่มแล้ว"]]),
notes:()=>`<h3>Entry to nucleus</h3><ul>
 <li>เริ่มจาก<b>ปฏิสัมพันธ์ระหว่าง viral glycoprotein กับ receptor ที่ผิวเซลล์</b> ${S.mu}</li>
 <li>และ<b>tropism ของบางตัวเช่น Epstein-Barr virus จำกัดมาก เพราะ receptor ของมันถูกแสดงเฉพาะในบางสปีชีส์และบาง tissue</b> ${S.mu}</li>
 <li><b>glycoprotein ช่วยเชื่อม envelope เข้ากับ plasma membrane แล้วปล่อย nucleocapsid เข้า cytoplasm</b> ${S.mu}</li>
 <li>และ<b>เอนไซม์กับ transcription factor ถูกพาเข้าเซลล์มาด้วยใน tegument ของ virion</b> ${S.mu}</li>
 <li>แล้ว<b>nucleocapsid ไปเทียบท่ากับ nuclear membrane และส่ง genome เข้า nucleus ซึ่งเป็นที่ที่มันถูกถอดรหัสและเพิ่มจำนวน</b> ${S.mu}</li></ul>
 <h3>What decides lytic versus latent</h3><ul>
 <li><b>genome ถูกถอดรหัสโดย DNA-dependent RNA polymerase ของเซลล์ และถูกกำกับโดย nuclear factor ทั้งของไวรัสและของเซลล์</b> ${S.mu}</li>
 <li>และ<b>การปะทะกันของปัจจัยเหล่านี้เองที่ตัดสินว่า infection จะเป็น lytic, persistent หรือ latent</b> ${S.mu}</li>
 <li><b>เซลล์ที่ส่งเสริม latent infection ถอดรหัสยีนชุดพิเศษโดยไม่เพิ่มจำนวน genome</b> ${S.mu}</li>
 <li>และ<b>การเดินหน้าไปถึงการแสดงออกของ early กับ late gene ให้ผลเป็นการผลิตไวรัสและมักจบที่เซลล์ตาย</b> ${S.mu}</li>
 <li>เหตุผลที่ไวรัสต้องพกเอนไซม์มาเอง: <b>viral scavenging enzyme จัดหา deoxyribonucleotide ให้ polymerase</b> ${S.mu}</li>
 <li>ซึ่ง<b>ทำให้มันเพิ่มจำนวนในเซลล์ที่ไม่โตและขาดทั้ง deoxyribonucleotide และเอนไซม์สำหรับสร้าง DNA ได้ — เช่นใน neuron</b> ${S.mu}</li>
 <li>และ<b>viral DNA polymerase เป็นเป้าของยาต้านไวรัส</b> ${S.mu}</li>
 <li>การประกอบและการออก: <b>procapsid เปล่าประกอบใน nucleus แล้วถูกเติม DNA, ผ่านเข้าออก endoplasmic reticulum, รับโปรตีนของ tegument, ผ่าน Golgi membrane เพื่อรับ envelope แล้วออกจากเซลล์โดย exocytosis หรือโดยเซลล์แตก</b> ${S.mu}</li>
 <li>และระหว่างการเพิ่มจำนวน <b>herpesvirus รบกวนกระบวนการของเซลล์ ย่อย DNA ของเซลล์ และเปลี่ยน cytoskeleton</b> ${S.mu}</li></ul>`});

SEC.push({id:"hsv-latency",k:"b",t:"How herpes simplex virus hides and comes back",mm:"Latency",leg:[],
draw:()=>tbl(["Trigger of recurrence","Example"],[
 ["Ultraviolet B radiation","การเล่นสกี การอาบแดด"],
 ["Fever","จึงเป็นที่มาของชื่อ fever blister"],
 ["Emotional stress","การสอบปลายภาค การนัดสำคัญ"],
 ["Physical stress","การระคายเคือง"],
 ["Menstruation","—"],
 ["Food","อาหารรสจัด อาหารเปรี้ยว ภูมิแพ้"],
 ["Immunosuppression","แบบชั่วคราวจากความเครียด · เคมีบำบัดและรังสีรักษา · human immunodeficiency virus"]]),
notes:()=>`<h3>The latency-associated transcript</h3><ul>
 <li>ที่มาของชื่อ: <b>herpes มาจากคำกรีกที่แปลว่าคืบคลาน</b> · <b>cold sore ถูกบรรยายไว้ตั้งแต่สมัยโบราณ และพิสูจน์ว่าเกิดจากไวรัสในปี 1919</b> ${S.mu}</li>
 <li>ใน infection แบบ latent ของ neuron <b>บริเวณเดียวของ genome ที่ถูกถอดรหัสคือส่วนที่สร้าง latency-associated transcript</b> ${S.mu}</li>
 <li>และ RNA เหล่านั้น<b>ไม่ถูกแปลเป็นโปรตีน แต่เข้ารหัส micro-RNA ที่ยับยั้งการแสดงออกของ immediate early gene และยีนสำคัญอื่น</b> ${S.mu}</li>
 <li>กฎที่ตัดสินทุกอย่าง: <b>ถ้า neuron ถอดรหัสเฉพาะ latency-associated transcript และไม่ถอดรหัสยีนอื่นเลย ผลคือ latency</b> ${S.mu}</li>
 <li>และสิ่งที่รักษา latency ไว้: <b>CD8 T cell และ IFN-γ</b> ${S.mu}</li></ul>
 <h3>Reactivation</h3><ul>
 <li>สิ่งกระตุ้นเหล่านั้น<b>จุดชนวนการเพิ่มจำนวนในเซลล์ประสาทเซลล์เดียวในมัดนั้น แล้วไวรัสเดินทางย้อนลงมาตามเส้นประสาท</b> ${S.mu}</li>
 <li>ผลที่ทำนายได้: <b>รอยโรคขึ้นที่ dermatome และตำแหน่งเดิมทุกครั้ง</b> ${S.mu}</li>
 <li>กลไกของความเครียด: <b>มันกระตุ้นการกลับเป็นซ้ำโดยส่งเสริมการเพิ่มจำนวนในเส้นประสาท โดยกด cell-mediated immunity ชั่วคราว หรือทั้งสองอย่าง</b> ${S.mu}</li>
 <li>และข้อที่สำคัญทางคลินิก: <b>ไวรัสถูกปลุกได้แม้จะมี antibody อยู่</b> ${S.mu}</li>
 <li>แต่<b>infection ซ้ำโดยทั่วไปเบากว่า จำกัดกว่า และสั้นกว่าครั้งแรก เพราะลักษณะของการแพร่และเพราะมี memory immune response อยู่</b> ${S.mu}</li>
 <li>เมื่อถูกปลุก <b>ไวรัสกลับไปที่จุดติดเชื้อเดิม และอาจไม่ปรากฏ symptom หรือเกิดเป็นตุ่มน้ำ</b> · <b>น้ำในตุ่มมี virion ที่แพร่เชื้อได้</b> ${S.mu}</li>
 <li>และความเสียหายมาจากสองทาง: <b>ทั้งพยาธิสภาพจากไวรัสเองและ immunopathology</b> · <b>รอยโรคมักหายโดยไม่เกิดแผลเป็น</b> ${S.mu}</li>
 <li>ผลทางระบาดวิทยาที่ตามมาจาก latency: <b>ผู้ติดเชื้อเป็นแหล่งแพร่เชื้อไปตลอดชีวิต</b> · และ<b>แพร่ในสารคัดหลั่งและโดยการสัมผัสใกล้ชิด</b> ${S.mu}</li>
 <li>ตัวเลขที่ต้องจำ: <b>ผู้ใหญ่ในสหรัฐอเมริกา 20% ติดเชื้อ herpes simplex virus type 2 ซึ่งคิดเป็นราว 65 ล้านคน</b> ${S.mu}</li></ul>`});

SEC.push({id:"hsv-dis",k:"b",t:"The syndromes of herpes simplex",mm:"HSV disease",leg:[],
draw:()=>tbl(["Syndrome","Where","Who"],[
 ["Gingivostomatitis · herpes labialis","ตุ่มน้ำใสที่แตกเป็นแผลเร็ว มักที่ขอบแดงของริมฝีปาก แต่กระจายรอบหรือในปากได้ ทั้ง palate, pharynx, gingiva, buccal mucosa และลิ้น","เด็ก สำหรับ infection ครั้งแรกของ type 1"],
 ["Recurrent mucocutaneous herpes — cold sore","มุมปากหรือข้างริมฝีปาก · กลับเป็นซ้ำจาก trigeminal ganglion","เกิดได้แม้ไม่เคยมี infection ครั้งแรกที่เห็นชัด"],
 ["Herpes pharyngitis","คอหอย","วินิจฉัยบ่อยขึ้นในผู้ใหญ่วัยหนุ่มสาวที่เจ็บคอ"],
 ["Herpetic keratitis","ตาเกือบเสมอข้างเดียว","กลับเป็นซ้ำได้ นำไปสู่แผลเป็นถาวร cornea เสียหายและตาบอด"],
 ["Herpetic whitlow","นิ้ว","พยาบาลและแพทย์ที่ดูแลผู้ป่วย, เด็กที่ดูดนิ้ว และผู้ที่ติดเชื้อที่อวัยวะเพศ"],
 ["Herpes gladiatorum","ลำตัว","ได้มาจากมวยปล้ำหรือรักบี้"],
 ["Eczema herpeticum","ลามไปตาม skin และอาจถึง adrenal gland, liver และอวัยวะอื่น","เด็กที่มี eczema กำลังกำเริบ"]]),
notes:()=>`<h3>The lesion</h3><ul>
 <li>ภาพคลาสสิก: <b>ตุ่มน้ำใสบนฐานแดง ซึ่งเรียกกันว่า dewdrop on a rose petal</b> ${S.mu}</li>
 <li>แล้ว<b>กลายเป็นตุ่มหนอง เป็นแผล และตกสะเก็ด</b> ${S.mu}</li>
 <li>ข้อที่ทำให้วินิจฉัยผิดได้: <b>ภาวะอื่นหลายอย่างคล้ายรอยโรคนี้ — รอยโรคจาก coxsackievirus, canker sore และสิว</b> ${S.mu}</li>
 <li>เครื่องหมายใต้กล้องของทั้งสอง type: <b>Cowdry type A inclusion body, syncytium และ Tzanck smear</b> ${S.mu}</li></ul>
 <h3>Where it becomes serious</h3><ul>
 <li><b>herpes simplex virus ก่อ morbidity และ mortality ที่สำคัญเมื่อติดเชื้อที่ตาหรือสมอง และเมื่อกระจายทั่วตัวในผู้ที่ถูกกด immunity หรือในทารกแรกเกิด</b> ${S.mu}</li>
 <li>immunity ที่คุม keratitis เป็นดาบสองคม: <b>การตอบสนองแบบ TH17 สำคัญต่อการควบคุม แต่ก็มีส่วนในการเกิดพยาธิสภาพของ infection ที่ตาด้วย</b> ${S.mu}</li>
 <li>การแพร่: <b>แพร่ใน saliva, ในสารคัดหลั่งช่องคลอด และโดยการสัมผัสน้ำจากรอยโรค</b> ${S.mu}</li>
 <li>และเส้นทาง: <b>แพร่ทางปาก ทางเพศสัมพันธ์ และโดยเข้าสู่ตาหรือรอยแตกของ skin</b> ${S.mu}</li>
 <li>แนวโน้มทั่วไป: <b>type 1 มักแพร่ทางปาก ส่วน type 2 มักแพร่ทางเพศสัมพันธ์ แต่ไม่ใช่เฉพาะอย่างนั้น</b> ${S.mu}</li>
 <li>เพราะเป็น enveloped virus <b>มันไม่ทนทานมาก และถูกทำให้หมดฤทธิ์ได้ง่ายด้วยการแห้ง detergent และสภาพของทางเดินอาหาร</b> ${S.mu}</li></ul>`});

SEC.push({id:"vzv",k:"c",t:"Varicella and zoster are the same virus twice",mm:"VZV",leg:[],
draw:()=>tbl(["","Varicella — chickenpox","Zoster — shingles"],[
 ["When","infection ครั้งแรก","การกลับเป็นซ้ำ"],
 ["Rash","ตุ่มมีทุกระยะพร้อมกัน","ตุ่มเรียงตาม dermatome เดียวตลอดความยาว"],
 ["Where it comes from","การสูดและการสัมผัสใกล้ชิด","ไวรัสที่หลับอยู่ใน dorsal root ganglion, cranial nerve ganglion และ ganglion อื่น"],
 ["Who","เด็กเป็นหลัก · ผู้ใหญ่เสี่ยงต่อ pneumonia","ผู้สูงอายุเมื่อ immunity เสื่อม หรือผู้ที่ cellular immunity บกพร่อง"],
 ["Complication","varicella pneumonia ในผู้ใหญ่","postherpetic neuralgia ซึ่งอยู่ได้หลายเดือนถึงหลายปี เกิดในผู้ป่วยถึง 30%"],
 ["Prevention","vaccine varicella","vaccine zoster"]]),
notes:()=>`<h3>The second act</h3><ul>
 <li>หลัง infection ครั้งแรก <b>ไวรัสกลายเป็น latent ใน dorsal root ganglion, cranial nerve ganglion และ ganglion อื่น</b> ${S.mu}</li>
 <li>เมื่อถูกปลุก <b>ไวรัสเพิ่มจำนวนและถูกปล่อยไปตลอดความยาวของ neuron ไปติดเชื้อที่ skin จึงเกิด rash ตุ่มน้ำตลอด dermatome นั้น</b> ${S.mu}</li>
 <li>และความเสียหายที่ตามมา: <b>มันทำลาย neuron และอาจทำให้เกิด postherpetic neuralgia ที่ปวดมาก</b> ${S.mu}</li>
 <li>ตำแหน่งที่พบบ่อย: <b>หนึ่งในสี่ส่วนของศีรษะ หรือตาม thoracic dermatome</b> ${S.mu}</li>
 <li>ข้อที่ต่างจาก herpes simplex ในการรักษา: <b>DNA polymerase ของ varicella-zoster virus ไวต่อ acyclovir น้อยกว่าของ herpes simplex virus มาก</b> ${S.mu}</li>
 <li>จึง<b>ต้องใช้ acyclovir ขนาดสูงกว่า หรือใช้ famciclovir กับ valacyclovir ซึ่งมี pharmacodynamics ที่ดีกว่า</b> ${S.mu}</li>
 <li>และสำหรับ symptom ปวดที่ตามมา: <b>ไม่มีการรักษาที่ดี — ยาแก้ปวด ยาชาเฉพาะที่ หรือ capsaicin cream อาจช่วยบรรเทาได้บ้าง</b> ${S.mu}</li></ul>`});

SEC.push({id:"ebv",k:"d",t:"Epstein-Barr virus lives inside the B-cell programme",mm:"EBV",leg:[],
notes:()=>`<h3>Using the B cell</h3><ul>
 <li><b>Epstein-Barr virus ปรับตัวเข้ากับ B cell ของคน และใช้ขั้นตอนต่าง ๆ ของพัฒนาการของ B cell เพื่อตั้ง infection ตลอดชีวิต</b> ${S.mu}</li>
 <li>และหลักที่อธิบายโรคทั้งหมดของมัน: <b>โรคของ Epstein-Barr virus เกิดจากการตอบสนองของ immunity ที่มากเกินไป ซึ่งคือ infectious mononucleosis หรือจากการที่ immunity คุมไม่ได้ ซึ่งคือ lymphoproliferative disease และ hairy leukoplakia</b> ${S.mu}</li>
 <li><b>infection แบบผลิตไวรัสใน B cell และ epithelial cell ของ oropharynx เช่นที่ tonsil ทำให้ไวรัสถูกขับลงใน saliva เพื่อแพร่ต่อ และตั้ง viremia เพื่อแพร่ไป B cell อื่น</b> ${S.mu}</li>
 <li>กลไกของการ immortalize: <b>โปรตีนของไวรัสเข้าแทนที่ปัจจัยของ host ที่ปกติกระตุ้นการโตและพัฒนาการของ B cell</b> ${S.mu}</li>
 <li>และ<b>เมื่อไม่มี T cell เช่นในการเพาะเลี้ยงเซลล์ Epstein-Barr virus ทำให้ B cell เป็นอมตะและสร้างเป็น B-lymphoblastoid cell line ได้</b> ${S.mu}</li></ul>
 <h3>Where the blood findings come from</h3><ul>
 <li>ในร่างกาย การกระตุ้นและเพิ่มจำนวนของ B cell <b>เห็นได้จากการสร้าง IgM ต่อ Paul-Bunnell antigen อย่างไม่ตรงเป้า ซึ่งเรียกว่า heterophile antibody</b> ${S.mu}</li>
 <li>และ heterophile antibody นั้น<b>จำ Paul-Bunnell antigen บน erythrocyte ของแกะ ม้าหรือวัว</b> ${S.mu}</li>
 <li>การควบคุม: <b>การโตของ B cell ถูกคุมโดยการตอบสนองปกติของ T cell ต่อทั้งการเพิ่มจำนวนของ B cell และต่อ peptide ของไวรัส</b> ${S.mu}</li>
 <li>เหตุผลที่ T cell เห็นมันได้ดี: <b>B cell เป็น antigen-presenting cell ที่ดีเยี่ยม และนำเสนอแอนติเจนของไวรัสบนทั้ง major histocompatibility complex I และ II</b> ${S.mu}</li>
 <li><b>T cell ที่ถูกกระตุ้นปรากฏเป็น atypical lymphocyte ซึ่งเรียกอีกชื่อว่า Downey cell</b> ${S.mu}</li>
 <li>และตัวเลขที่เป็นที่มาของชื่อโรค: <b>มันเพิ่มจำนวนใน blood ช่วงสัปดาห์ที่สองของ infection จนคิดเป็น 10% ถึง 80% ของเม็ด blood ขาวทั้งหมด</b> ${S.mu}</li>
 <li>ภาพรวมที่อธิบายทุก symptom: <b>infectious mononucleosis โดยแท้คือสงครามกลางเมืองระหว่าง B cell ที่ติดเชื้อกับ T cell ที่ปกป้องร่างกาย</b> ${S.mu}</li>
 <li>ดังนั้น <b>lymphocytosis, การบวมของอวัยวะน้ำเหลืองคือ lymph node, spleen และ liver และความอ่อนเพลีย ล้วนเกิดจากการกระตุ้นและเพิ่มจำนวนของ T cell เป็นหลัก</b> ${S.mu}</li>
 <li>และ<b>พลังงานจำนวนมากที่ใช้ขับเคลื่อนการตอบสนองของ T cell คือเหตุที่ผู้ป่วยอ่อนเพลียอย่างมาก</b> ${S.mu}</li>
 <li>ส่วน<b>symptom เจ็บคอเป็นการตอบสนองต่อ epithelium และ B cell ที่ติดเชื้อใน tonsil และคอ</b> ${S.mu}</li></ul>
 <h3>The cancers</h3><ul>
 <li><b>Epstein-Barr virus สัมพันธ์เชิงสาเหตุกับ endemic Burkitt lymphoma, Hodgkin disease และ nasopharyngeal carcinoma</b> ${S.mu}</li>
 <li>และ<b>สัมพันธ์กับ B-cell lymphoma ในผู้ที่มี immunity บกพร่องทั้งที่เป็นมาแต่กำเนิดและที่เกิดภายหลัง</b> ${S.mu}</li>
 <li>ที่มาของการค้นพบ: <b>ความเชื่อมโยงกับ infectious mononucleosis ถูกพบโดยบังเอิญ เมื่อ serum ของเจ้าหน้าที่ห้องปฏิบัติการที่กำลังพักฟื้นจาก infectious mononucleosis มี antibody ที่จำเซลล์ของ Burkitt lymphoma ได้</b> ${S.mu}</li>
 <li>กลุ่มที่อันตรายที่สุด: <b>ผู้ที่ขาด immunity แบบ T cell เมื่อติดเชื้อนี้ มักเกิดโรค B-cell proliferative ที่คล้ายมะเร็งเม็ด blood ขาวแบบ polyclonal และ lymphoma แทนที่จะเป็น infectious mononucleosis</b> ${S.mu}</li>
 <li>และ<b>ผู้ชายที่มีความบกพร่องของ T cell แต่กำเนิดมักเกิด X-linked lymphoproliferative disease ที่คุกคามชีวิต</b> ${S.mu}</li></ul>`});

SEC.push({id:"cmv",k:"e",t:"Cytomegalovirus and the rest of the family",mm:"CMV · HHV-6/7/8",leg:[],
notes:()=>`<h3>Cytomegalovirus by the numbers</h3><ul>
 <li><b>ติดเชื้อในทารกแรกเกิดราว 1% และในผู้ใหญ่อย่างน้อย 50% ถึง 80% เมื่ออายุ 40 ปี</b> ${S.mu}</li>
 <li>และข้อที่ต้องจำ: <b>มันเป็นสาเหตุไวรัสที่พบบ่อยที่สุดของความพิการแต่กำเนิด</b> ${S.mu}</li>
 <li>ตัวเลขที่ตามมา: <b>เด็ก 1 ใน 150 คนเกิดมาพร้อม infection นี้ และ 1 ใน 750 คนเกิดมาพร้อมความพิการถาวรหรือจะเกิดความพิการนั้นในภายหลัง</b> ${S.mu}</li>
 <li>แม้โดยทั่วไป<b>จะให้โรคที่เบาหรือไม่มี symptom ในเด็กและผู้ใหญ่ แต่มันสำคัญเป็นพิเศษในฐานะเชื้อฉวยโอกาสในผู้ที่ถูกกด immunity</b> ${S.mu}</li>
 <li>เครื่องหมายใต้กล้อง: <b>เซลล์ขนาดใหญ่ที่มี owl's eye inclusion body</b> ${S.mu}</li>
 <li>โรคที่พบ: <b>โรคฉวยโอกาส, congenital cytomegalovirus, retinitis และกลุ่ม symptom mononucleosis</b> ${S.mu}</li>
 <li>และ<b>มันกลับเป็นซ้ำจาก monocyte และ stem cell</b> ${S.mu}</li>
 <li>ทางแพร่หลัก: <b>ทางแต่กำเนิด ทางปาก ทางเพศสัมพันธ์ การให้ blood และการปลูกถ่าย tissue</b> ${S.mu}</li></ul>
 <h3>HHV-6, HHV-7 and HHV-8</h3><ul>
 <li><b>HHV-6 และ HHV-7 เป็น lymphotropic และก่อ roseola</b> ${S.mu}</li>
 <li><b>HHV-8 ก่อ Kaposi sarcoma ซึ่งเป็นโรคที่สัมพันธ์กับ acquired immunodeficiency syndrome</b> ${S.mu}</li>
 <li>และนอกเหนือจากไวรัสของคน: <b>B virus ของลิงก่อ encephalopathy ที่ถึงตายในคน</b> ${S.mu}</li></ul>
 <h3>Diagnosis and treatment across the family</h3><ul>
 <li>การวินิจฉัย: <b>การเพาะเชื้อ, การตรวจทาง immunology เช่น serology ของ Epstein-Barr virus และ PCR กับการวิเคราะห์ genome</b> ${S.mu}</li>
 <li>การรักษาและป้องกัน: <b>มี vaccine สำหรับ varicella และ zoster และมียาต้านไวรัสสำหรับ herpes simplex virus, varicella-zoster virus และ cytomegalovirus</b> ${S.mu}</li>
 <li>และสิ่งที่ยาเหล่านั้นอาศัย: <b>herpes simplex virus และ varicella-zoster virus เข้ารหัส thymidine kinase ของตัวเอง ซึ่งเป็นตัวเติม phosphate ตัวแรกให้ยา</b> ${S.mu}</li></ul>`});

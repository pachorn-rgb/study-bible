//@include _micro-helpers.js
Object.assign(S,{mu:'<b class="sbb murray">Mu</b>'});
Object.assign(GN,{a:"Specimen and microscope",b:"Culture, genome and antibody",c:"Drugs and control"});

/* ===================================================================
   Laboratory diagnosis of viral disease, antiviral agents and
   infection control — Murray ch 39 and 40.
   =================================================================== */

SEC.push({id:"vl-specimen",k:"a",t:"Which specimen, and how long you have",mm:"Specimen",leg:[],
draw:()=>tbl(["Presentation","Specimen","Note"],[
 ["Respiratory illness","nasal washing · throat swab · nasal swab · sputum","respiratory virus อาจถูกขับออกมาเพียง 3 ถึง 7 วัน และอาจหยุดก่อนที่ symptom จะหาย"],
 ["Gastrointestinal illness","stool · rectal swab","—"],
 ["Maculopapular rash","throat swab · rectal swab","rubella virus และ measles virus ตรวจด้วย RT-PCR และ ELISA"],
 ["Vesicular rash","vesicle fluid, scraping หรือ swab · stool สำหรับ enterovirus","coxsackievirus · echovirus · herpes simplex virus · varicella-zoster virus"],
 ["Summer meningitis","cerebrospinal fluid และ blood ถ้าสงสัย arbovirus · cerebrospinal fluid, throat swab และ stool ถ้าสงสัย enterovirus","แยก enterovirus จาก cerebrospinal fluid ได้เพียง 2 ถึง 3 วันหลังอาการทางระบบประสาทเริ่ม"],
 ["Focal encephalitis ที่ temporal lobe นำมาด้วย headache และสับสน","cerebrospinal fluid","ชี้ไปที่ herpes simplex virus — ตรวจ DNA ด้วย PCR ได้ค่อนข้างเร็ว"],
 ["Suspected rabies","tissue · saliva · brain biopsy · cerebrospinal fluid","immunofluorescence ของชิ้นเนื้อ และ RT-PCR"],
 ["Urinary tract","urine","adenovirus · cytomegalovirus"]]),
notes:()=>`<h3>Timing is the whole problem</h3><ul>
 <li>การเลือกสิ่งส่งตรวจ<b>ขึ้นกับการวินิจฉัยแยกโรคของผู้ป่วยและการตรวจที่จะทำ</b> และ<b>ซับซ้อนเพราะไวรัสหลายตัวทำให้เกิดภาพทางคลินิกเดียวกัน</b> ${S.mu}</li>
 <li>หลักข้อเดียวที่สำคัญที่สุด: <b>ต้องเก็บสิ่งส่งตรวจในระยะเฉียบพลันของโรค ก่อนที่ไวรัสจะหยุดถูกขับออกมา</b> ${S.mu}</li>
 <li>ตัวอย่างที่ชัด: <b>herpes simplex virus และ varicella-zoster virus หรือ DNA ของมัน อาจเก็บจากรอยโรคไม่ได้แล้วหลังอาการเริ่มเกิน 5 วัน</b> ${S.mu}</li>
 <li>และอุปสรรคอีกข้อ: <b>แอนติบอดีที่สร้างขึ้นตอบการติดเชื้ออาจบังการตรวจพบไวรัส</b> ${S.mu}</li></ul>
 <h3>Transport</h3><ul>
 <li><b>ยิ่งช่วงเวลาระหว่างการเก็บกับการส่งถึงห้องปฏิบัติการสั้น โอกาสแยกไวรัสได้ยิ่งสูง</b> ${S.mu}</li>
 <li>เพราะ<b>ไวรัสหลายตัวไม่ทนทาน และตัวอย่างไวต่อการที่แบคทีเรียกับเชื้อราขึ้นทับ</b> ${S.mu}</li>
 <li>วิธีที่ถูกต้อง: <b>ขนส่งและเก็บบนน้ำแข็งใน medium จำเพาะที่มีทั้งยาปฏิชีวนะและโปรตีนอย่าง serum albumin หรือเจลาติน</b> ${S.mu}</li>
 <li>และข้อที่ทำให้พลาดบ่อย: <b>enveloped virus อย่าง herpes simplex virus, varicella-zoster virus และ influenza เสีย infectious titer ไปมาก ถ้าเก็บที่อุณหภูมิห้องหรือแช่แข็งที่ −20 °C</b> ${S.mu}</li>
 <li>ส่วน<b>nonenveloped virus อย่าง adenovirus และ enterovirus เสี่ยงน้อยกว่า</b> ${S.mu}</li></ul>`});

SEC.push({id:"vl-cyto",k:"a",t:"What the microscope can already tell you",mm:"Cytology",leg:[],
draw:()=>tbl(["Cytopathologic effect","What it looks like"],[
 ["Cell death · cell rounding · degeneration","เซลล์กลมขึ้นและหลุดจากจานเพาะเลี้ยง"],
 ["Aggregation","เซลล์จับกลุ่มกัน"],
 ["Inclusion body","การเปลี่ยนแปลงทาง histology ใน nucleus หรือ cytoplasm พร้อม margination ของ chromatin"],
 ["Syncytium","multinucleated giant cell จากการที่ไวรัสเชื่อมเซลล์เข้าด้วยกัน"],
 ["Cell surface change","การแสดง viral antigen ที่ผิวเซลล์"],
 ["Hemadsorption","erythrocyte เกาะเซลล์ที่ติดเชื้อ เพราะเซลล์แสดง hemagglutinin"]]),
notes:()=>`<h3>Inclusion bodies that name the virus</h3><ul>
 <li><b>Intranuclear basophilic คือ owl's eye ในเซลล์ขนาดใหญ่</b> — cytomegalovirus · และ<b>เห็นได้ในตะกอน urine ของผู้ป่วยด้วย</b> ${S.mu}</li>
 <li><b>Cowdry type A ใน nucleus ของเซลล์เดี่ยวหรือใน syncytium ขนาดใหญ่</b> — herpes simplex virus หรือ varicella-zoster virus ${S.mu}</li>
 <li><b>Negri body ใน cytoplasm ของเนื้อสมอง</b> — rabies ${S.mu}</li>
 <li>ไวรัสที่สร้าง syncytium: <b>paramyxovirus, herpes simplex virus, varicella-zoster virus และ human immunodeficiency virus</b> ${S.mu}</li>
 <li>ขั้นต่อไปที่ทำกันเป็นปกติ: <b>ตรวจสิ่งส่งตรวจทาง cytology ต่อเพื่อหา viral antigen หรือ genome ด้วย in situ hybridization หรือส่งทำ PCR</b> ${S.mu}</li>
 <li>และข้อจำกัดที่มากับความจำเพาะนั้น: <b>การตรวจเหล่านี้จำเพาะต่อไวรัสแต่ละตัว จึงต้องเลือกตามการวินิจฉัยแยกโรค</b> ${S.mu}</li></ul>
 <h3>Electron microscopy</h3><ul>
 <li><b>ไม่ใช่เทคนิคมาตรฐานของห้องปฏิบัติการคลินิก แต่ใช้ตรวจและระบุไวรัสบางตัวได้ถ้ามีอนุภาคมากพอ</b> ${S.mu}</li>
 <li>เทคนิคที่เพิ่มพลังให้มัน: <b>การเติมแอนติบอดีจำเพาะทำให้อนุภาคไวรัสจับกลุ่มกัน จึงทั้งตรวจพบง่ายขึ้นและระบุชนิดไปพร้อมกัน — คือ immunoelectron microscopy</b> ${S.mu}</li>
 <li>กลุ่มที่เหมาะที่สุด: <b>enteric virus อย่าง rotavirus ซึ่งถูกผลิตออกมาปริมาณมากและมี morphology ที่เป็นเอกลักษณ์ ตรวจพบใน stool ได้ด้วยวิธีนี้</b> ${S.mu}</li></ul>`});

SEC.push({id:"vl-culture",k:"b",t:"Growing the virus, and counting it",mm:"Culture",leg:[],
draw:()=>tbl(["Measure","Definition"],[
 ["Tissue culture dose — TCD50","titer ของไวรัสที่ทำให้เกิด cytopathologic effect ในครึ่งหนึ่งของเซลล์ที่เพาะเลี้ยง"],
 ["Lethal dose — LD50","titer ที่ฆ่าสัตว์ทดลอง 50% ของชุด"],
 ["Infectious dose — ID50","titer ที่ทำให้เกิด symptom, แอนติบอดีหรือการตอบสนองอื่นที่ตรวจพบได้ ใน 50% ของสัตว์ทดลอง"],
 ["Plaque-forming unit","นับจำนวน plaque ที่เกิดจากการเจือจางตัวอย่างทีละสิบเท่า"]]),
notes:()=>`<h3>Three systems for growing viruses</h3><ul>
 <li><b>Embryonated egg</b> · <b>organ culture</b> · <b>tissue culture</b> ${S.mu}</li>
 <li>และ cell line ที่ใช้มีทั้ง <b>primary cell culture, diploid cell line และ tumor หรือ immortalized cell line</b> ${S.mu}</li></ul>
 <h3>Reading the culture</h3><ul>
 <li><b>Hemadsorption</b> คือ<b>erythrocyte เกาะเซลล์ที่ติดเชื้อ influenza, mumps, parainfluenza หรือ togavirus</b> เพราะ<b>ไวรัสเหล่านี้แสดง hemagglutinin ที่ผิว ซึ่งจับ erythrocyte ของสัตว์บางชนิด</b> ${S.mu}</li>
 <li>และการยับยั้งปฏิกิริยานั้นด้วย serum ของผู้ป่วยเรียกว่า <b>hemagglutination inhibition</b> ${S.mu}</li>
 <li>วิธีที่ชาญฉลาดสำหรับ herpes simplex virus: <b>ใช้เซลล์ที่ดัดแปลงพันธุกรรมให้แสดงยีน β-galactosidase ซึ่งจะย้อมติดสีน้ำเงินเมื่อติดเชื้อ — คือ enzyme-linked virus-inducible system</b> ${S.mu}</li>
 <li>ข้อที่ต้องเข้าใจเวลาอ่านตัวเลข: <b>อัตราส่วนระหว่างจำนวนอนุภาคไวรัสที่นับจาก electron microscopy กับจำนวน plaque-forming unit มากกว่า 1 เสมอ</b> ${S.mu}</li>
 <li>เพราะ<b>มีอนุภาคไวรัสที่บกพร่องจำนวนมากถูกผลิตขึ้นระหว่างการเพิ่มจำนวน</b> ${S.mu}</li></ul>`});

SEC.push({id:"vl-genome",k:"b",t:"Detecting the genome",mm:"Genome detection",leg:[],
draw:()=>tbl(["Method","What it adds"],[
 ["PCR","สำหรับ DNA genome — primer ที่เหมาะขยายลำดับเป้าหมายได้ล้านเท่าในไม่กี่ชั่วโมง"],
 ["RT-PCR","ใช้ reverse transcriptase เปลี่ยน viral RNA เป็น DNA ก่อน แล้วจึงขยาย"],
 ["Real-time PCR","ระบุและนับจำนวน genome ได้ จึงบอก virus load ของผู้ป่วย — ความเข้มข้นของ genome เป็นสัดส่วนกับอัตราเริ่มต้นของการขยาย"],
 ["Multiplex panel","ขยาย genome ของจุลชีพหลายชนิดพร้อมกันจากตัวอย่างเดียว — respiratory panel ที่มีขายตรวจไวรัส 17 ตัวและแบคทีเรีย 3 ตัว"],
 ["Transcription-based amplification","ใช้ reverse transcriptase สร้าง complementary DNA แล้วติดลำดับที่ T7 RNA polymerase จำได้ · ไม่ต้องใช้เครื่องมือพิเศษแบบ PCR"],
 ["In situ hybridization เช่น fluorescence in situ hybridization","ตรวจลำดับของไวรัสในชิ้นเนื้อที่ตรึงแล้ว — ตรวจไวรัสได้แม้ไม่มีการเพิ่มจำนวน"],
 ["Next generation sequencing","หาลำดับของชิ้นส่วนหรือทั้ง genome แล้วเทียบกับฐานข้อมูลด้วยคอมพิวเตอร์ — เร็วและถูกพอจะเป็นงานประจำแล้ว"]]),
notes:()=>`<h3>Why genome amplification took over</h3><ul>
 <li><b>ลำดับพันธุกรรมเป็นลักษณะหลักที่แยกวงศ์ ชนิดและสายพันธุ์ของไวรัส</b> ${S.mu}</li>
 <li>และวิธีเหล่านี้<b>ตรวจ ระบุและวัดปริมาณได้เร็ว โดยมีความเสี่ยงจากไวรัสที่ยังติดเชื้อได้น้อยที่สุด</b> ${S.mu}</li>
 <li>กลุ่มที่ได้ประโยชน์มากที่สุด: <b>ไวรัสที่อยู่ในรูป latent หรือแทรกอยู่ในจีโนม เช่น retrovirus, herpesvirus, papillomavirus และ papovavirus ตัวอื่น</b> ${S.mu}</li>
 <li>รวมถึง<b>ไวรัสที่มีความเข้มข้นต่ำ และไวรัสที่แยกใน cell culture ได้ยากหรืออันตรายเกินไป</b> ${S.mu}</li>
 <li>และ<b>in situ hybridization มีประโยชน์เป็นพิเศษกับไวรัสที่เพิ่มจำนวนช้าหรือไม่ผลิตไวรัสออกมา เช่น cytomegalovirus และ human papillomavirus หรือเมื่อตรวจ viral antigen ด้วยวิธีทาง immunology ไม่พบ</b> ${S.mu}</li></ul>`});

SEC.push({id:"vl-sero",k:"b",t:"What serology answers",mm:"Serology",leg:[],
notes:()=>`<h3>The questions it can answer</h3><ul>
 <li><b>การตอบสนองทาง humoral ให้ประวัติการติดเชื้อของผู้ป่วย</b> ${S.mu}</li>
 <li>ใช้กับ<b>ไวรัสที่แยกและเลี้ยงใน cell culture ได้ยาก และกับโรคที่ดำเนินยาวนาน</b> เช่น Epstein-Barr virus, hepatitis B virus และ human immunodeficiency virus ${S.mu}</li>
 <li>สิ่งที่มันบอกได้: <b>ชนิดของไวรัสและสายพันธุ์หรือ serotype, โรคเฉียบพลันหรือเรื้อรัง และการติดเชื้อครั้งแรกหรือการติดเชื้อซ้ำ</b> ${S.mu}</li>
 <li>เกณฑ์ที่ใช้จริง: <b>การตรวจพบ IgM ที่จำเพาะต่อไวรัส ซึ่งมีอยู่ใน 2 ถึง 3 สัปดาห์แรกของการติดเชื้อครั้งแรก โดยทั่วไปบ่งว่าเป็นการติดเชื้อครั้งแรกที่เพิ่งเกิด</b> ${S.mu}</li>
 <li><b>Seroconversion คือ titer เพิ่มขึ้นอย่างน้อยสี่เท่า ระหว่าง serum ระยะเฉียบพลันกับ serum ที่เก็บอย่างน้อย 2 ถึง 3 สัปดาห์ต่อมาในระยะพักฟื้น</b> ${S.mu}</li>
 <li><b>การติดเชื้อซ้ำหรือการกลับเป็นซ้ำในภายหลังให้ anamnestic response คือการตอบสนองแบบทุติยภูมิหรือ booster</b> ${S.mu}</li>
 <li>และข้อที่ทำให้แปลผลยาก: <b>titer อาจสูงค้างอยู่ในผู้ที่โรคกลับเป็นซ้ำบ่อย เช่น herpesvirus</b> ${S.mu}</li></ul>
 <h3>The two ways serology misleads</h3><ul>
 <li><b>การไขว้กันระหว่างไวรัสต่างชนิดทำให้สับสนว่าเชื้อก่อโรคคือตัวใด</b> เช่น<b>parainfluenza กับ mumps แสดงแอนติเจนที่เกี่ยวข้องกัน</b> ${S.mu}</li>
 <li>ในทางกลับกัน: <b>แอนติบอดีที่ใช้ในการตรวจอาจจำเพาะเกินไป โดยเฉพาะ monoclonal antibody จำนวนมาก จึงจำสายพันธุ์อื่นในวงศ์เดียวกันไม่ได้และให้ผลลบลวง</b> เช่นกับ rhinovirus ${S.mu}</li>
 <li>ข้อสรุปที่ใช้ได้จริง: <b>ความเข้าใจอาการทางคลินิกที่ดี ร่วมกับความรู้เรื่องข้อจำกัดและปัญหาที่อาจเกิดของการตรวจทาง serology ช่วยการวินิจฉัย</b> ${S.mu}</li></ul>`});

SEC.push({id:"va-targets",k:"c",t:"Where antiviral drugs bind",mm:"Drug targets",leg:[],
draw:()=>tbl(["Step of replication","Agent","Virus targeted"],[
 ["Attachment","peptide analog ของ attachment protein","human immunodeficiency virus — CCR5 coreceptor antagonist"],
 ["Attachment","neutralizing antibody · heparan และ dextran sulfate","ไวรัสส่วนใหญ่ · human immunodeficiency virus และ herpes simplex virus"],
 ["Penetration และ uncoating","amantadine · rimantadine","influenza A"],
 ["Penetration และ uncoating","tromantadine · docosanol — และ arildone, disoxaril, pleconaril","herpes simplex virus — และ picornavirus"],
 ["Transcription","interferon · sofosbuvir, dasabuvir · baloxavir marboxil","hepatitis C virus และ papillomavirus · hepatitis C virus · influenza A และ B"],
 ["Transcription — hypermutation","ribavirin ซึ่งเป็น guanosine analog","hepatitis C virus · respiratory syncytial virus · Lassa fever virus"],
 ["Protein synthesis","interferon","hepatitis C virus · papillomavirus"],
 ["DNA replication — polymerase","nucleoside analog · phosphonoformate และ phosphonoacetic acid","herpesvirus, human immunodeficiency virus, hepatitis B virus, poxvirus, adenovirus · herpesvirus"],
 ["Nucleoside scavenging — thymidine kinase","nucleoside analog","herpes simplex virus · varicella-zoster virus"],
 ["Assembly — protease","hydrophobic substrate analog","human immunodeficiency virus · hepatitis C virus"],
 ["Assembly — neuraminidase","oseltamivir · zanamivir","influenza A และ B"]]),
notes:()=>`<h3>Two older agents worth the mechanism</h3><ul>
 <li><b>Guanidine และ 2-hydroxybenzylbenzimidine ปิดกั้นการสร้าง RNA ของ picornavirus โดยจับโปรตีน 2C ซึ่งจำเป็นต่อการสร้าง RNA</b> ${S.mu}</li>
 <li><b>Isatin-β-thiosemicarbazone เหนี่ยวนำการย่อย messenger RNA ในเซลล์ที่ติดเชื้อ poxvirus และเคยใช้รักษา smallpox</b> ${S.mu}</li>
 <li><b>Ribavirin คล้าย riboguanosine และทั้งส่งเสริม hypermutation และยับยั้งการสังเคราะห์ nucleoside, การเติม cap ให้ messenger RNA และกระบวนการอื่นทั้งของเซลล์และของไวรัส</b> ${S.mu}</li>
 <li>ภาพเปรียบที่อธิบาย hypermutation: <b>เหมือนแทนที่ตัวอักษรทุกตัวที่สี่ในเรียงความด้วยตัวอักษรที่สุ่มมา</b> ${S.mu}</li>
 <li><b>Interferon ชนิดที่ 1 และ antisense oligonucleotide ยับยั้งการตัดต่อและการแปล viral messenger RNA</b> ${S.mu}</li>
 <li>กลไกของ interferon: <b>การติดเชื้อไวรัสในเซลล์ที่ได้รับ interferon จุดชนวนลำดับเหตุการณ์ทางชีวเคมีที่ปิดกั้นการเพิ่มจำนวน</b> — <b>การย่อย messenger RNA ทั้งของไวรัสและของเซลล์ถูกเร่ง และการประกอบ ribosome ถูกปิดกั้น</b> ${S.mu}</li>
 <li><b>Interferon ได้รับอนุมัติให้ใช้ทางคลินิกกับ papilloma และ hepatitis C</b> ${S.mu}</li></ul>`});

SEC.push({id:"va-nucleoside",k:"c",t:"Why nucleoside analogs are selective",mm:"Nucleoside analogs",leg:[],
notes:()=>`<h3>The selectivity</h3><ul>
 <li><b>ยาต้านไวรัสส่วนใหญ่เป็น nucleoside analog คือสารที่ดัดแปลงที่ base, ที่น้ำตาล หรือทั้งสองอย่าง</b> ${S.mu}</li>
 <li>เป้าหลัก: <b>DNA-dependent DNA polymerase ของ herpesvirus และ reverse transcriptase ของ human immunodeficiency virus กับ hepatitis B virus</b> ${S.mu}</li>
 <li>เหตุผลที่เลือกเป้าเหล่านี้: <b>มันจำเป็นต่อการเพิ่มจำนวนของไวรัสและต่างจากเอนไซม์ของ host</b> ${S.mu}</li>
 <li>กลไกของการเลือกออกฤทธิ์: <b>viral polymerase แม่นยำน้อยกว่าเอนไซม์ของเซลล์ จึงจับ nucleoside analog ได้ดีกว่าเอนไซม์ของเซลล์หลายร้อยเท่า</b> ${S.mu}</li>
 <li>จากนั้นยาออกฤทธิ์ได้สองทาง — <b>กันการต่อสาย เพราะไม่มี 3′-hydroxyl ที่น้ำตาล</b> หรือ<b>เปลี่ยนการจดจำและการจับคู่เบส เพราะ base ถูกดัดแปลง จึงเหนี่ยวนำ mutation ที่ทำให้ไวรัสหมดฤทธิ์</b> ${S.mu}</li></ul>
 <h3>Activation, and the resistance that follows from it</h3><ul>
 <li><b>ก่อน polymerase จะใช้ได้ nucleoside analog ต้องถูกเติม phosphate จนเป็นรูป triphosphate โดยเอนไซม์ของไวรัส ของเซลล์ หรือทั้งสองอย่าง</b> ${S.mu}</li>
 <li>ตัวอย่างที่คลาสสิกที่สุด: <b>thymidine kinase ของ herpes simplex virus และ varicella-zoster virus เติม phosphate ตัวแรกให้ acyclovir แล้วเอนไซม์ของเซลล์เติมที่เหลือ</b> ${S.mu}</li>
 <li>และผลที่ตามมาโดยตรง: <b>herpes simplex virus กลายพันธุ์ที่ไม่มีฤทธิ์ thymidine kinase ดื้อ acyclovir</b> ${S.mu}</li>
 <li>ที่ต่างออกไป: <b>เอนไซม์ของเซลล์เป็นผู้เติม phosphate ให้ azidothymidine และ nucleoside analog อื่นอีกหลายตัว</b> ${S.mu}</li></ul>
 <h3>Two lists worth separating</h3><ul>
 <li>ยาที่<b>ทำให้สาย DNA จบก่อนกำหนดด้วยน้ำตาลที่ถูกดัดแปลง</b> — <b>acyclovir, ganciclovir, valacyclovir, penciclovir, famciclovir, adefovir, cidofovir, vidarabine, zidovudine, lamivudine, dideoxycytidine และ dideoxyinosine</b> ${S.mu}</li>
 <li>ยาที่<b>ถูกใส่เข้าไปใน genome แล้วทำให้เกิดความผิดพลาดในการเพิ่มจำนวนและการถอดรหัส ด้วย base ที่ถูกดัดแปลง</b> — <b>ribavirin, idoxuridine และ trifluridine</b> ${S.mu}</li></ul>`});

SEC.push({id:"va-control",k:"c",t:"Infection control, and what the envelope changes",mm:"Infection control",leg:[],
draw:()=>tbl(["","Naked capsid virus","Enveloped virus"],[
 ["Inactivation","ยากกว่ามาก","ง่ายกว่า"],
 ["What works","ethanol 70% · chlorine bleach 15% · glutaraldehyde 2% · formaldehyde 4% · การนึ่งฆ่าเชื้อ","ส่วนใหญ่ไม่ต้องใช้วิธีรุนแรงขนาดนั้น — สบู่และ detergent ก็ทำให้หมดฤทธิ์ได้"]]),
notes:()=>`<h3>Four ways to control spread</h3><ul>
 <li><b>จำกัดการสัมผัสของบุคลากรกับแหล่งของการติดเชื้อ</b> — สวมถุงมือ หน้ากาก แว่นป้องกันตา และใช้การกักกัน ${S.mu}</li>
 <li><b>ปรับปรุงสุขอนามัย การสุขาภิบาลและการฆ่าเชื้อ</b> ${S.mu}</li>
 <li><b>ทำให้บุคลากรทุกคนได้รับวัคซีนต่อโรคที่พบบ่อย</b> ${S.mu}</li>
 <li><b>ให้ความรู้แก่บุคลากรทุกคนทั้งสามข้อข้างต้น และเรื่องวิธีลดพฤติกรรมเสี่ยงสูง</b> ${S.mu}</li>
 <li>ข้อที่ยากที่สุดในทางปฏิบัติ: <b>การแพร่ของไวรัสทางเดินหายใจป้องกันได้ยากที่สุด</b> ${S.mu}</li></ul>
 <h3>Universal precautions and outbreaks</h3><ul>
 <li><b>เลือดของคนทุกรายต้องถือว่าปนเปื้อน human immunodeficiency virus หรือ hepatitis B virus และต้องจัดการด้วยความระมัดระวัง</b> ${S.mu}</li>
 <li>และ<b>ต้องระวังเป็นพิเศษกับเข็มฉีดยาและเครื่องมือผ่าตัดที่ปนเปื้อนเลือด</b> ${S.mu}</li>
 <li>การควบคุมการระบาดโดยทั่วไปต้อง<b>ระบุแหล่งหรือ reservoir ของไวรัสก่อน แล้วจึงทำความสะอาด กักกัน ให้วัคซีน หรือทำหลายอย่างร่วมกัน</b> ${S.mu}</li>
 <li>ตัวอย่างที่เป็นรูปธรรม: <b>ขั้นแรกของการควบคุมการระบาดของ gastroenteritis หรือ hepatitis A คือการหาว่าอาหาร น้ำ หรืออาจเป็นศูนย์รับเลี้ยงเด็กใดเป็นต้นตอ</b> ${S.mu}</li>
 <li>และสิ่งที่ได้ผลจริงในระยะยาว: <b>โปรแกรมให้ความรู้ส่งเสริมความร่วมมือกับโปรแกรมวัคซีนและช่วยให้คนเปลี่ยนวิถีชีวิตที่สัมพันธ์กับการแพร่ไวรัส</b> ${S.mu}</li>
 <li><b>โปรแกรมเช่นนี้ลดความชุกของโรคที่ป้องกันได้ด้วยวัคซีนอย่าง smallpox, polio, measles, mumps และ rubella ได้อย่างมีนัยสำคัญ</b> ${S.mu}</li></ul>`});

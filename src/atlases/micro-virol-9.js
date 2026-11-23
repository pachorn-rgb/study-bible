//@include _micro-helpers.js
Object.assign(S,{mu:'<b class="sbb murray">Mu</b>'});
Object.assign(GN,{a:"The hepatitis alphabet",b:"Hepatitis B",c:"Hepatitis C, D and E",d:"Prion diseases"});

/* ===================================================================
 Hepatitis viruses and prion diseases — Murray ch 55 and 56.
 =================================================================== */

SEC.push({id:"hep-compare",k:"a",t:"Five unrelated viruses, one target organ",mm:"Comparison",leg:[],
draw:()=>tbl(["Feature","Hepatitis A","Hepatitis B","Hepatitis C","Hepatitis D","Hepatitis E"],[
 ["Common name","infectious","serum","non-A non-B posttransfusion","delta agent","enteric non-A non-B"],
 ["Virus structure","picornavirus · capsid · (+) RNA","hepadnavirus · envelope · DNA","flavivirus · envelope · (+) RNA","viroid-like · envelope · circular RNA","hepevirus · capsid · (+) RNA"],
 ["Transmission","fecal-oral","parenteral และทางเพศ","parenteral และทางเพศ","parenteral และทางเพศ","fecal-oral"],
 ["Onset","abrupt","insidious","insidious","abrupt","abrupt"],
 ["Incubation period","15 ถึง 50 วัน","45 ถึง 160 วัน","14 ถึงเกิน 180 วัน","15 ถึง 64 วัน","15 ถึง 50 วัน"],
 ["Severity","mild","รุนแรงได้บางครั้ง · เรื้อรัง 3% ถึง 10% ในผู้ใหญ่ และ 30% ถึง 90% ในทารกและเด็ก","มักไม่มี symptom · เรื้อรัง 70%","co-infection กับ hepatitis B รุนแรงได้บางครั้ง · superinfection มักรุนแรง","ในผู้ป่วยทั่วไป mild · ในหญิงตั้งครรภ์รุนแรง"],
 ["Mortality","ต่ำกว่า 0.5%","1% ถึง 2%","ราว 4%","สูงถึงสูงมาก","ทั่วไป 1% ถึง 2% · หญิงตั้งครรภ์ 20%"],
 ["Chronic carrier state","ไม่มี","มี","มี","มี","ไม่มี"],
 ["Other associations","ไม่มี","primary hepatocellular carcinoma และ cirrhosis","primary hepatocellular carcinoma และ cirrhosis","—","ไม่มี"]]),
notes:()=>`<h3>What they share and what they do not</h3><ul>
 <li><b>hepatitis alphabet มีไวรัสอย่างน้อยหกตัว คือ A ถึง E และ G</b> ${S.mu}</li>
 <li>และข้อสำคัญ: <b>แม้อวัยวะเป้าหมายของทุกตัวคือ liver และ symptom พื้นฐานคล้ายกัน แต่มันต่างกันมากในโครงสร้าง, วิธีเพิ่มจำนวน, วิธีแพร่ และในลำดับเวลาและผลตามหลังของโรคที่ก่อ</b> ${S.mu}</li>
 <li>ชื่อเก่า: <b>hepatitis A กับ hepatitis B virus เป็นไวรัส hepatitis คลาสสิก ส่วน hepatitis C, D, E และ G ถูกเรียกว่าไวรัส non-A non-B hepatitis</b> ${S.mu}</li>
 <li>และ<b>ไวรัสอื่นก็ก่อ hepatitis ได้</b> ${S.mu}</li>
 <li>กลไกร่วม: <b>ไวรัส hepatitis แต่ละตัวติดเชื้อแล้วเริ่มการตอบสนองที่มี inflammation ซึ่งทำลาย liver จึงเกิด symptom แบบ icteric คลาสสิกคือ jaundice และการปล่อย enzyme ของ liver</b> ${S.mu}</li>
 <li>ข้อที่เป็นหลักของทั้งบท: <b>ไวรัสเหล่านี้ไม่สลายเซลล์ ดังนั้น cell-mediated immunity เป็นตัวก่อ symptom</b> ${S.mu}</li>
 <li>และเหตุที่มันแพร่ได้ง่าย: <b>ผู้ติดเชื้อแพร่เชื้อได้ก่อนจะมี symptom หรือแพร่ได้โดยไม่มี symptom เลย</b> ${S.mu}</li>
 <li>การแยกโรค: <b>ไวรัสที่เป็นสาเหตุแยกได้จากลำดับเวลา ลักษณะ และ serology ของโรค</b> ${S.mu}</li>
 <li>การวินิจฉัยของทั้งกลุ่ม: <b>RT-PCR และ ELISA</b> ${S.mu}</li></ul>`});

SEC.push({id:"hep-a",k:"a",t:"Hepatitis A",mm:"Hepatitis A",leg:[],
notes:()=>`<h3>The abrupt one that leaves nothing behind</h3><ul>
 <li><b>hepatitis A ซึ่งบางครั้งเรียกว่า infectious hepatitis เกิดจาก picornavirus ซึ่งเป็นไวรัส RNA</b> ${S.mu}</li>
 <li>ลำดับโรค: <b>แพร่ทาง fecal-oral, มีระยะฟักตัวราวหนึ่งเดือน แล้ว symptom แบบ icteric เริ่มขึ้นอย่างฉับพลัน, ไม่ก่อโรค liver เรื้อรัง และนาน ๆ ครั้งจึงถึงตาย</b> ${S.mu}</li>
 <li>และ<b>การติดเชื้อ hepatitis A virus มักเกิดจากการกิน</b> ${S.mu}</li>
 <li>ลักษณะทางชีววิทยา: <b>มันเป็น picornavirus ที่ไม่สลายเซลล์ เริ่มเฉียบพลันและไม่มีผลตามหลัง</b> ${S.mu}</li></ul>
 <h3>Control</h3><ul>
 <li><b>การแพร่ของ hepatitis A virus ลดลงได้ด้วยการตัดการแพร่แบบ fecal-oral</b> ${S.mu}</li>
 <li>วิธีทำ: <b>หลีกเลี่ยงน้ำหรืออาหารที่อาจปนเปื้อน โดยเฉพาะ shellfish ที่ไม่ผ่านการปรุง และการบำบัดน้ำเสียอย่างถูกวิธี</b> ${S.mu}</li>
 <li>และ<b>การล้างมืออย่างถูกวิธีสำคัญอย่างยิ่ง โดยเฉพาะในสถานรับเลี้ยงเด็ก โรงพยาบาลจิตเวชและสถานดูแลอื่น</b> ${S.mu}</li>
 <li>น้ำดื่ม: <b>การเติม chlorine ในน้ำดื่มมักเพียงพอที่จะฆ่าไวรัส</b> ${S.mu}</li>
 <li>การป้องกันหลังสัมผัส: <b>immune serum globulin ที่ให้ก่อนหรือช่วงต้นของระยะฟักตัว คือภายในไม่ถึง 2 สัปดาห์หลังสัมผัส ป้องกันโรคทางคลินิกได้ 80% ถึง 90%</b> ${S.mu}</li>
 <li>วัคซีน: <b>วัคซีนชนิดเชื้อตายแนะนำสำหรับเด็กทุกคนหลังอายุ 1 ปี และสำหรับผู้ใหญ่ที่เสี่ยงสูง รวมถึงผู้เดินทางไปพื้นที่ที่เป็นโรคประจำถิ่น, ผู้ใช้ยาเสพติดทางหลอดเลือด และชายที่มีเพศสัมพันธ์กับชาย</b> ${S.mu}</li>
 <li>และ<b>วัคซีนให้สองเข็มห่างกัน 6 เดือน และให้พร้อมวัคซีน hepatitis B virus ได้ · วัคซีนชนิดเชื้อเป็นใช้อยู่ในจีน</b> ${S.mu}</li>
 <li>เหตุที่โปรแกรมวัคซีนนี้สำเร็จ: <b>hepatitis A virus มี serotype เดียวและติดเชื้อในคนเท่านั้น</b> ${S.mu}</li></ul>`});

SEC.push({id:"hbv-struct",k:"b",t:"The Dane particle and the Australia antigen",mm:"HBV structure",leg:[],
draw:()=>tbl(["Antigen","What it is"],[
 ["HBsAg","glycoprotein สามรูปใน envelope · เดิมเรียกว่า Australia antigen · L, M และ S เข้ารหัสจาก gene เดียวในกรอบเดียว แต่แปลจาก AUG start codon ที่ต่างกัน"],
 ["HBcAg","โปรตีนที่ประกอบเป็น icosahedral capsid"],
 ["HBeAg","มีลำดับโปรตีนเหมือน HBcAg เป็นส่วนใหญ่ แต่ถูกจัดการต่างกันโดยเซลล์ · ถูกหลั่งเข้า serum เป็นหลัก · ประกอบตัวเองไม่ได้ และแสดงตัวกำหนดแอนติเจนที่ต่างออกไป"]]),
notes:()=>`<h3>A DNA virus with a reverse transcriptase</h3><ul>
 <li><b>hepatitis B เดิมเรียกว่า serum hepatitis เกิดจาก hepadnavirus ที่มี genome เป็น DNA</b> ${S.mu}</li>
 <li>การแพร่และลำดับโรค: <b>แพร่ทาง parenteral คือทางเลือดหรือเข็ม, ทางเพศสัมพันธ์ และจากมารดาสู่บุตร · ระยะฟักตัวมัธยฐานราว 3 เดือน แล้ว symptom แบบ icteric เริ่มอย่างค่อยเป็นค่อยไป</b> ${S.mu}</li>
 <li>แล้ว<b>ตามด้วย chronic hepatitis ใน 5% ถึง 10% ของผู้ป่วย และสัมพันธ์เชิงสาเหตุกับ primary hepatocellular carcinoma</b> ${S.mu}</li>
 <li>ภาระโรค: <b>ประชากรโลกมากกว่าหนึ่งในสามเคยติดเชื้อ hepatitis B virus ซึ่งทำให้เสียชีวิต 1 ถึง 2 ล้านรายต่อปี</b> ${S.mu}</li>
 <li>และแนวโน้ม: <b>การเกิด hepatitis B virus ลดลง โดยเฉพาะในทารก เพราะการพัฒนาและการใช้วัคซีนชนิด subunit</b> ${S.mu}</li></ul>
 <h3>The virion</h3><ul>
 <li><b>virion ซึ่งเรียกว่า Dane particle มีเส้นผ่านศูนย์กลาง 42 nm</b> ${S.mu}</li>
 <li>และข้อที่สำคัญทางการควบคุมการติดเชื้อ: <b>virion คงทนผิดปกติสำหรับไวรัสที่มี envelope — มันทนต่อ ether, pH ต่ำ, การแช่แข็งและความร้อนปานกลาง</b> ${S.mu}</li>
 <li>ผลที่ตามมา: <b>คุณสมบัติเหล่านี้ช่วยการแพร่จากคนหนึ่งไปอีกคน และขัดขวางการทำลายเชื้อ</b> ${S.mu}</li>
 <li>สิ่งที่ virion บรรจุ: <b>protein kinase และ polymerase ที่มีฤทธิ์ reverse transcriptase กับ ribonuclease H รวมถึงโปรตีน P ที่ติดอยู่กับ genome</b> ${S.mu}</li>
 <li>และ<b>ทั้งหมดนั้นถูกหุ้มด้วย icosahedral capsid ที่สร้างจาก HBcAg และ envelope ที่บรรจุ HBsAg สามรูป</b> ${S.mu}</li></ul>
 <h3>The empty particles that became the first vaccine</h3><ul>
 <li><b>อนุภาคที่บรรจุ HBsAg ถูกปล่อยเข้า serum ของผู้ติดเชื้อ และมีจำนวนมากกว่า virion จริง</b> ${S.mu}</li>
 <li>รูปร่าง: <b>อนุภาคเหล่านี้เป็นทรงกลมซึ่งเล็กกว่า Dane particle หรือเป็นเส้นใย</b> ${S.mu}</li>
 <li>และ<b>มันกระตุ้นภูมิคุ้มกันได้ จึงถูกนำไปทำเป็นวัคซีนเชิงพาณิชย์ตัวแรกต่อ hepatitis B virus</b> ${S.mu}</li>
 <li>พูดอีกอย่าง: <b>เซลล์ที่ติดเชื้อ hepatitis B virus สร้างและปล่อยอนุภาค HBsAg จำนวนมากที่ไม่มี DNA อยู่ข้างใน</b> ${S.mu}</li>
 <li>และกลไกทางพันธุกรรมที่อยู่เบื้องหลัง: <b>ไวรัสเข้ารหัสโปรตีนหลายตัวที่ใช้ลำดับพันธุกรรมร่วมกัน แต่ใช้ start codon ที่ต่างกันในกรอบเดียว</b> ${S.mu}</li></ul>`});

SEC.push({id:"hbv-repl",k:"b",t:"Replication through an RNA intermediate",mm:"HBV replication",leg:[],
notes:()=>`<h3>Backwards for a DNA virus</h3><ul>
 <li>หลังเข้า hepatocyte และถอดเปลือก nucleocapsid core <b>genome DNA ที่เป็นสองสายบางส่วนถูกส่งเข้า nucleus และถูกเติมให้สมบูรณ์</b> ${S.mu}</li>
 <li>แล้ว<b>การถอดรหัส genome ให้ messenger RNA สี่ตัว รวมถึงตัวที่ใหญ่กว่า genome เองคือ 3500 base</b> ${S.mu}</li>
 <li>สิ่งที่ messenger RNA ตัวใหญ่นั้นเข้ารหัส: <b>HBc กับ HBe antigen, polymerase และ protein primer สำหรับการเพิ่มจำนวน DNA — และมันเป็นแม่แบบด้วย</b> ${S.mu}</li>
 <li>แล้ว<b>messenger RNA ย้ายเข้า cytoplasm และถูกแปลเป็นโปรตีน</b> ${S.mu}</li>
 <li>ขั้นที่กลับทิศ: <b>โปรตีน core ประกอบตัวรอบ messenger RNA ขนาด 3500 base แล้ว DNA สายลบถูกสร้างด้วยฤทธิ์ reverse transcriptase ที่อยู่ใน core</b> ${S.mu}</li>
 <li>ต่อมา<b>RNA ถูกย่อยทิ้งขณะที่ DNA สายบวกถูกสร้างขึ้น</b> ${S.mu}</li>
 <li>การออก: <b>core ที่เต็มแล้วจับกับ membrane ของ endoplasmic reticulum ที่มี HBsAg, ได้ envelope ก่อน DNA สายบวกจะเสร็จ แล้วถูกปล่อยด้วย exocytosis พร้อมอนุภาคที่บรรจุ HBsAg</b> ${S.mu}</li>
 <li>และนั่นอธิบายสิ่งที่เห็นใน virion: <b>genome ใน virion เป็น DNA สองสายบางส่วน ไม่ใช่สองสายสมบูรณ์</b> ${S.mu}</li></ul>`});

SEC.push({id:"hbv-sero",k:"b",t:"Reading the serology",mm:"HBV serology",leg:[],
draw:()=>tbl(["Marker","What it means"],[
 ["HBsAg, HBeAg หรือทั้งคู่ โดยตรวจไม่พบ antibody ต่อแอนติเจนเหล่านั้น","การติดเชื้อที่กำลังดำเนินอยู่"],
 ["Anti-HBs","การติดเชื้อหายแล้ว หรือได้รับวัคซีน"],
 ["Anti-HBc","เคยติดเชื้อหรือกำลังติดเชื้อ hepatitis B virus"],
 ["IgM anti-HBc","วิธีที่ดีที่สุดในการวินิจฉัยการติดเชื้อเฉียบพลันที่เพิ่งเกิด โดยเฉพาะในช่วง window ที่ตรวจไม่พบทั้ง HBsAg และ anti-HBs"]]),
notes:()=>`<h3>Why the window exists</h3><ul>
 <li><b>immune complex ของ HBeAg กับ HBsAg และ antibody ยับยั้งการสร้าง antibody และทำให้ตรวจแอนติเจนที่อยู่ใน complex ไม่พบ</b> ${S.mu}</li>
 <li>จึงเกิดช่วงที่<b>ทั้ง HBsAg และ anti-HBs ตรวจไม่พบ ซึ่งเรียกว่า window</b> ${S.mu}</li>
 <li>และสิ่งที่ใช้แทน: <b>การตรวจ IgM anti-HBc ตามปกติในช่วง window นั้น</b> ${S.mu}</li>
 <li>สิ่งที่ใช้ติดตามโรค: <b>symptom, ระดับ HBsAg, HBeAg และ IgM anti-HBc ใน serum และ genome</b> ${S.mu}</li></ul>
 <h3>Immune complex disease</h3><ul>
 <li><b>การติดเชื้อ hepatitis B virus ส่งเสริม hypersensitivity reaction ที่เกิดจาก immune complex ของ HBsAg กับ antibody</b> ${S.mu}</li>
 <li>และสิ่งที่ complex เหล่านั้นก่อ: <b>rash, polyarthritis, fever, acute necrotizing vasculitis และ glomerulonephritis</b> ${S.mu}</li></ul>
 <h3>Prevention</h3><ul>
 <li><b>วัคซีนชนิด virus-like particle ที่เป็น HBsAg, การตรวจคัดกรองเลือดที่ใช้, เพศสัมพันธ์ที่ปลอดภัย และยาต้านไวรัส</b> ${S.mu}</li></ul>`});

SEC.push({id:"hep-cde",k:"c",t:"Hepatitis C, D, E and G",mm:"HCV · HDV · HEV",leg:[],
notes:()=>`<h3>Hepatitis C</h3><ul>
 <li><b>hepatitis C เกิดจาก flavivirus ที่มี genome เป็น RNA</b> ${S.mu}</li>
 <li>การแพร่และภาระโรค: <b>แพร่ทางเดียวกับ hepatitis B virus และมีผู้เป็นพาหะติดเชื้อเรื้อรังมากกว่า 170 ล้านคน</b> ${S.mu}</li>
 <li>และความต่างจาก hepatitis B: <b>มันมีแนวโน้มก่อการติดเชื้อที่ไม่มี symptom และก่อโรคเรื้อรังมากกว่า hepatitis B virus และเพิ่มความเสี่ยงต่อ primary hepatocellular carcinoma</b> ${S.mu}</li>
 <li>ตัวเลขที่ต้องจำ: <b>มันก่อโรคเรื้อรังใน 70% ของผู้ป่วย</b> และ<b>เสี่ยงต่อ primary hepatocellular carcinoma กับ cirrhosis หลังเวลาผ่านไปนาน</b> ${S.mu}</li>
 <li>การควบคุม: <b>การตรวจคัดกรองเลือดที่ใช้, เพศสัมพันธ์ที่ปลอดภัย และยาต้านไวรัส</b> ${S.mu}</li>
 <li>และญาติของมัน: <b>hepatitis G virus ก็เป็น flavivirus และก่อการติดเชื้อเรื้อรัง</b> ${S.mu}</li></ul>
 <h3>Hepatitis D</h3><ul>
 <li><b>hepatitis D หรือ delta hepatitis พิเศษตรงที่มันต้องมี hepatitis B virus ที่กำลังเพิ่มจำนวนอยู่เป็น helper virus และเกิดเฉพาะในผู้ป่วยที่มีการติดเชื้อ hepatitis B virus ที่ยังดำเนินอยู่</b> ${S.mu}</li>
 <li>สิ่งที่ hepatitis B virus ให้มา: <b>envelope สำหรับ RNA ของ hepatitis D virus และแอนติเจนของมัน</b> ${S.mu}</li>
 <li>และผลทางคลินิก: <b>hepatitis D virus ทำให้ symptom ที่เกิดจาก hepatitis B virus แย่ลง</b> ${S.mu}</li>
 <li>ลักษณะของอนุภาค: <b>เป็นแบบ viroid และต้องการ hepatitis B virus เป็น helper จึงให้โรคแบบ fulminant</b> ${S.mu}</li>
 <li>การป้องกัน: <b>การให้วัคซีน hepatitis B virus</b> ${S.mu}</li></ul>
 <h3>Hepatitis E</h3><ul>
 <li><b>hepatitis E virus เป็นไวรัสของลำไส้ที่มี capsid และมี genome เป็น RNA อยู่ในวงศ์ของตัวเอง</b> ${S.mu}</li>
 <li>และ<b>โรคของมันคล้าย hepatitis A virus แต่รุนแรงได้ในหญิงตั้งครรภ์</b> ${S.mu}</li>
 <li>ตัวเลขที่ต้องจำ: <b>อัตราตายในผู้ป่วยทั่วไป 1% ถึง 2% แต่ในหญิงตั้งครรภ์ถึง 20%</b> ${S.mu}</li>
 <li>ลักษณะทางชีววิทยา: <b>เป็น hepevirus คล้าย calicivirus เริ่มเฉียบพลันและไม่มีผลตามหลัง</b> ${S.mu}</li>
 <li>การควบคุม: <b>สุขอนามัย</b> ${S.mu}</li></ul>`});

SEC.push({id:"prion-struct",k:"d",t:"An infectious protein with no genome",mm:"PrP",leg:[],
draw:()=>tbl(["Characteristic","Classic virus","Prion"],[
 ["Filterable infectious agent","yes","yes"],
 ["Presence of nucleic acid","yes","no"],
 ["Defined morphology on electron microscopy","yes","no"],
 ["Presence of protein","yes","yes"],
 ["Disinfection by formaldehyde","yes","no"],
 ["Disinfection by proteases","บางตัว","no"],
 ["Disinfection by heat at 80 °C","ส่วนใหญ่","no"],
 ["Disinfection by ionizing และ ultraviolet radiation","yes","no"]]),
notes:()=>`<h3>The two conformations</h3><ul>
 <li><b>spongiform encephalopathy เป็นโรคที่ระบบประสาทเสื่อมอย่างช้า และเกิดจากอนุภาคที่ติดต่อได้ซึ่งเป็นโปรตีน เรียกว่า prion</b> ${S.mu}</li>
 <li>และสี่ข้อที่ทำให้มันไม่เหมือนไวรัสเลย: <b>prion ไม่มีโครงสร้าง virion ไม่มี genome ไม่กระตุ้นการตอบสนองทางภูมิคุ้มกัน และทนอย่างยิ่งต่อการทำให้หมดฤทธิ์ด้วยความร้อน น้ำยาฆ่าเชื้อและรังสี</b> ${S.mu}</li>
 <li>ตัว prion: <b>เป็นโปรตีนที่ติดต่อได้เรียกว่า scrapie-like prion protein ซึ่งทนต่อ protease, ไม่ชอบน้ำ, รวมตัวเป็น fibril และไม่มีกรดนิวคลิอิก</b> ${S.mu}</li>
 <li>และมันคือ<b>รูปทางเลือกของ glycoprotein ปกติที่ผิวเซลล์ซึ่งเรียกว่า cellular prion protein ขนาด 27,000 ถึง 30,000 Da</b> ${S.mu}</li>
 <li>โปรตีนปกตินั้น: <b>ไวต่อ protease และถูกยึดใน cell membrane ด้วยพันธะระหว่าง serine ที่ปลายกับ lipid พิเศษคือ glycophosphatidylinositol</b> ${S.mu}</li>
 <li>หน้าที่ปกติของมัน: <b>cellular prion protein ทำปฏิกิริยากับและปรับการทำงานของโปรตีนที่ membrane หลายตัวใน brain รวมถึง potassium channel, N-methyl-d-aspartate receptor และ neural cell adhesion molecule</b> ${S.mu}</li>
 <li>และการเปลี่ยนรูป: <b>การจับกับ scrapie prion protein เปลี่ยนรูปของ cellular prion protein ซึ่งมี α-helix มาก ให้เป็นรูปที่มี β-sheet มาก จึงได้โปรตีนที่ผิดปกติซึ่งสร้าง fibril</b> ${S.mu}</li>
 <li>คุณสมบัติที่ต่างกัน: <b>scrapie prion protein เป็น multimer, ทน protease, พบใน scrapie fibril, อยู่ใน cytoplasmic vesicle กับนอกเซลล์ และมี turnover เป็นวัน ส่วน cellular prion protein เป็น monomer, ไวต่อ protease, อยู่ที่ plasma membrane และมี turnover เป็นชั่วโมง</b> ${S.mu}</li></ul>
 <h3>Template-mediated protein refolding</h3><ul>
 <li><b>ทฤษฎีปัจจุบันที่อธิบายว่าโปรตีนที่ผิดรูปก่อโรคได้อย่างไร เรียกว่า template-mediated protein refolding</b> ${S.mu}</li>
 <li>ขั้นแรก: <b>สายของ scrapie prion protein จับกับโครงสร้างที่มีประจุลบที่ผิวเซลล์ เช่น glycosaminoglycan และจับกับ cellular prion protein ปกติที่ผิวเซลล์</b> ${S.mu}</li>
 <li>แล้ว<b>cellular prion protein นั้นพับใหม่ ได้โครงสร้างของ scrapie prion protein และต่อเข้ากับสาย</b> ${S.mu}</li>
 <li>การเทียบที่ Murray ใช้: <b>scrapie prion protein ทำหน้าที่เป็นแม่แบบที่ส่งต่อรูปของมันให้ตัวใหม่แต่ละตัว ซึ่งคล้ายกับที่ mutation ใน genetic template ของไวรัสส่งต่อการเปลี่ยนแปลงใน genome</b> ${S.mu}</li>
 <li>และเหตุที่มันขยายตัว: <b>เมื่อสายของ scrapie prion protein หักออก มันสร้าง primer ใหม่ให้ prion ถูกต่อเพิ่ม · เซลล์ยังสร้าง cellular prion protein ต่อไป และเมื่อมันจับ primer วงจรก็ดำเนินต่อ</b> ${S.mu}</li>
 <li>พันธุกรรม: <b>cellular prion protein ของคนเข้ารหัสบน chromosome 20</b> ${S.mu}</li>
 <li>และข้อที่อธิบายการไม่มีภูมิคุ้มกัน: <b>plaque เหล่านี้ประกอบจากโปรตีนของ host เอง ซึ่งอาจอธิบายการไม่มีการตอบสนองทางภูมิคุ้มกันต่อตัวการในผู้ป่วย spongiform encephalopathy</b> ${S.mu}</li>
 <li>สายพันธุ์: <b>scrapie prion protein มีสายพันธุ์ต่างกันเพราะ mutation ใน cellular prion protein ซึ่งเป็นทางพันธุกรรม หรือเพราะรูปแบบการพับทางเลือกที่ขยายตัวเอง ซึ่งเป็นแบบ sporadic หรือ acquired</b> ${S.mu}</li>
 <li>และ<b>mutation จำเพาะที่ codon 129 กำหนดความรุนแรงของ Creutzfeldt-Jakob disease</b> ${S.mu}</li>
 <li>ข้อที่แยก prion จากไวรัสอีกข้อ: <b>มันกลายพันธุ์เชิงโครงสร้าง ไม่ใช่เชิงพันธุกรรม · สายพันธุ์เชิงโครงสร้างที่ต่างกันมีคุณสมบัติและลักษณะโรคที่ต่างกัน เช่นระยะฟักตัว</b> ${S.mu}</li>
 <li>และขอบเขตที่กว้างกว่าโรค prion: <b>การรวมตัวของโปรตีนอื่นเป็น prion หรือโครงสร้างคล้าย prion อาจก่อหรือมีส่วนในโรคของคนเช่น Alzheimer disease, Huntington disease และ Parkinson disease</b> ${S.mu}</li></ul>`});

SEC.push({id:"prion-dis",k:"d",t:"Kuru, Creutzfeldt-Jakob disease and the rest",mm:"Prion diseases",leg:[],
draw:()=>tbl(["Human","Animal"],[
 ["Kuru","scrapie ของแกะและแพะ"],
 ["Creutzfeldt-Jakob disease","transmissible mink encephalopathy"],
 ["Variant Creutzfeldt-Jakob disease","bovine spongiform encephalopathy ซึ่งคือ mad cow disease"],
 ["Gerstmann-Sträussler-Scheinker syndrome","chronic wasting disease ของ mule, deer และ elk"],
 ["Fatal familial insomnia และ sporadic fatal insomnia","—"]]),
notes:()=>`<h3>Three origins</h3><ul>
 <li><b>โรค prion เป็นแบบ sporadic, genetic หรือ acquired ได้</b> ${S.mu}</li>
 <li>สัดส่วน: <b>Creutzfeldt-Jakob disease และ fatal familial insomnia แบบ sporadic พบมากกว่าคือ 85% ถึง 90% ของผู้ป่วย เทียบกับแบบ genetic ที่ 10% ถึง 15% และแบบ acquired ที่ 1% ถึง 3%</b> ${S.mu}</li>
 <li>แบบที่ได้จากการติดเชื้อ: <b>kuru, Creutzfeldt-Jakob disease และ variant Creutzfeldt-Jakob disease</b> ${S.mu}</li>
 <li>และแบบทางพันธุกรรม: <b>Creutzfeldt-Jakob disease, Gerstmann-Sträussler-Scheinker syndrome และ fatal familial insomnia</b> ${S.mu}</li>
 <li>สองรางวัล Nobel: <b>Carlton Gajdusek ได้ในปี 1976 จากการแสดงว่า kuru มีสาเหตุจากการติดเชื้อและจากการพัฒนาวิธีวิเคราะห์ตัวการ</b> ${S.mu}</li>
 <li>และ<b>Stanley Prusiner ได้ในปี 1997 จากการพัฒนาแบบจำลองการติดเชื้อใน hamster สำหรับตัวการของ scrapie · เขาและคณะทำให้ gene ของ scrapie และ prion อื่นบริสุทธิ์ จำแนกและ clone ได้ และแสดงว่าโปรตีน prion ที่สัมพันธ์กับโรคเพียงอย่างเดียวก่อโรคได้</b> ${S.mu}</li></ul>
 <h3>How it gets to the brain</h3><ul>
 <li><b>การติดเชื้อ prion เกิดจากการกิน, การเจาะผ่านรอยแผลที่ skin หรือจากการติดเชื้อที่ brain หรือ neuronal tissue โดยตรงด้วย tissue ที่มี prion</b> ${S.mu}</li>
 <li>เส้นทางหลังการกิน: <b>prion สะสมใน secondary lymphoid tissue ที่มีเส้นประสาทหนาแน่น ใน follicular dendritic cell และ B cell แล้วเดินขึ้นไปตาม neuron ถึง central nervous system และ brain</b> ${S.mu}</li>
 <li>สิ่งที่เห็นใน tissue: <b>การเกิด plaque และ fibril ที่มี amyloid, การเพิ่มจำนวนและโตขึ้นของ astrocyte และการเกิด vacuole ใน neuron กับ glial cell ที่อยู่ติดกัน</b> ${S.mu}</li>
 <li>ที่มาของชื่อ: <b>spongiform encephalopathy อธิบายลักษณะของ neuron ที่เป็น vacuole รวมถึงการเสียหน้าที่ของมันและการไม่มีการตอบสนองทางภูมิคุ้มกันหรือ inflammation</b> ${S.mu}</li>
 <li>เหตุที่ brain เสียหาย: <b>scrapie prion protein ไปถึงความเข้มข้นสูงใน brain และถูกนำเข้าโดย neuron กับเซลล์ที่กลืนกิน แต่ย่อยสลายยาก ซึ่งอาจมีส่วนในการเกิด vacuole ของ tissue</b> ${S.mu}</li>
 <li>ข้อที่น่าสังเกต: <b>แยก prion ได้จาก tissue อื่นนอก brain ด้วย แต่มีเพียง brain ที่แสดงการเปลี่ยนแปลงทางพยาธิวิทยา</b> ${S.mu}</li>
 <li>และสิ่งที่แยกจาก viral encephalitis คลาสสิก: <b>ไม่มี inflammation หรือการตอบสนองทางภูมิคุ้มกันต่อตัวการเลย</b> ${S.mu}</li>
 <li>ตัวช่วยวินิจฉัย: <b>โปรตีนบ่งชี้คือ tau protein หรือ 14-3-3 brain protein ตรวจพบได้ใน cerebrospinal fluid ของผู้ที่มี symptom แต่ไม่จำเพาะต่อโรค prion</b> ${S.mu}</li></ul>
 <h3>Time course and control</h3><ul>
 <li><b>ระยะฟักตัวของ Creutzfeldt-Jakob disease และ kuru อาจยาวถึง 30 ปี</b> ${S.mu}</li>
 <li>แต่<b>เมื่อ symptom ปรากฏชัดแล้ว โรคดำเนินอย่างรวดเร็วและมักเสียชีวิตภายในหนึ่งปี</b> ${S.mu}</li>
 <li>และระยะฟักตัวที่ยาวนั้น<b>ทำให้การศึกษาตัวการเหล่านี้ยาก</b> ${S.mu}</li>
 <li>การแพร่ของ Creutzfeldt-Jakob disease: <b>ส่วนใหญ่ทางการฉีด, การปลูกถ่าย tissue ที่ปนเปื้อนเช่น cornea และการสัมผัส</b> ${S.mu}</li>
 <li>พูดอีกแบบ: <b>แพร่บนอุปกรณ์ผ่าตัดที่ปนเปื้อน, ทางการฉีด, ในอาหาร หรือทางพันธุกรรม</b> ${S.mu}</li>
 <li>การวินิจฉัย: <b>ลักษณะอาการ, magnetic resonance imaging และการตรวจทางอ้อม</b> ${S.mu}</li>
 <li>และการควบคุม: <b>ขั้นตอนการทำลายเชื้ออย่างเข้มงวด — ไม่มีวิธีป้องกันหรือควบคุมอื่น</b> ${S.mu}</li></ul>`});

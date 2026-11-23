//@include _micro-helpers.js
Object.assign(S,{mu:'<b class="sbb murray">Mu</b>'});
Object.assign(GN,{a:"Picornavirus",b:"Coronavirus and norovirus",c:"Paramyxovirus",d:"Orthomyxovirus"});

/* ===================================================================
 Picornaviruses, coronaviruses and noroviruses, paramyxoviruses and
 orthomyxoviruses — Murray ch 46 to 49.
 =================================================================== */

SEC.push({id:"picorna-struct",k:"a",t:"A genome that is already messenger RNA",mm:"Picornavirus",leg:[],
draw:()=>tbl(["Receptor","Which viruses bind it"],[
 ["Intercellular adhesion molecule-1","rhinovirus อย่างน้อย 80% และ coxsackievirus หลาย serotype — แสดงบน epithelial cell, fibroblast และ endothelial cell"],
 ["Decay accelerating factor คือ CD55","coxsackievirus หลายตัว, echovirus และ enterovirus อื่น"],
 ["Coxsackie adenovirus receptor","coxsackievirus B — ใช้ร่วมกับ adenovirus"],
 ["PVR คือ CD155","poliovirus — คล้าย receptor ของ herpes simplex virus และพบบนเซลล์คนหลายชนิด แต่ไม่ใช่ทุกเซลล์ที่เพิ่มจำนวนไวรัสได้"]]),
notes:()=>`<h3>The capsid</h3><ul>
 <li><b>plus-strand RNA ถูกหุ้มด้วย icosahedral capsid ขนาดราว 30 nm</b> ${S.mu}</li>
 <li><b>capsid มี 12 pentameric vertex แต่ละอันประกอบจาก protomer ห้าหน่วย และ protomer สร้างจาก polypeptide สี่ตัวคือ VP1 ถึง VP4</b> ${S.mu}</li>
 <li><b>VP2 และ VP4 เกิดจากการตัด precursor คือ VP0</b> ${S.mu}</li>
 <li>บทบาทที่พิเศษของ VP4: <b>มันทำให้โครงสร้างแข็งแรง แต่ไม่ถูกสร้างจนกว่า genome จะถูกใส่เข้า capsid และถูกปล่อยออกเมื่อไวรัสจับ receptor</b> ${S.mu}</li>
 <li>ความทนทาน: <b>capsid ทนความร้อน กรดและ detergent ยกเว้น rhinovirus ซึ่งไม่ทนกรด</b> ${S.mu}</li>
 <li>และ<b>โครงสร้างสม่ำเสมอมากจนเกิด paracrystal ของ virion ในเซลล์ที่ติดเชื้อได้</b> ${S.mu}</li></ul>
 <h3>The genome</h3><ul>
 <li><b>genome เหมือน messenger RNA — เป็น plus-sense RNA สายเดี่ยวยาวราว 7200 ถึง 8450 base</b> ${S.mu}</li>
 <li>ปลายทั้งสอง: <b>มี polyA ที่ปลาย 3′ และโปรตีนเล็ก ๆ คือ VPg ขนาด 22 ถึง 24 amino acid ติดที่ปลาย 5′</b> ${S.mu}</li>
 <li>หน้าที่: <b>polyA เพิ่มความสามารถก่อ infection ของ RNA และ VPg สำคัญต่อการบรรจุ genome เข้า capsid และการเริ่มสร้าง RNA</b> ${S.mu}</li>
 <li>และข้อที่ตามมาโดยตรง: <b>genome เปล่าของ picornavirus เพียงพอต่อการก่อ infection ถ้าฉีดเข้าเซลล์โดยตรง</b> ${S.mu}</li></ul>
 <h3>Entry and the polyprotein</h3><ul>
 <li><b>ความจำเพาะต่อ receptor เป็นตัวกำหนดหลักของ tissue tropism และของโรค</b> ${S.mu}</li>
 <li><b>โปรตีน VP1 ที่มุมของ virion มีโครงสร้างคล้ายหุบเขาซึ่ง receptor เข้าไปจับ</b> ${S.mu}</li>
 <li>และนั่นคือจุดที่ยาออกฤทธิ์: <b>pleconaril และสารที่เกี่ยวข้องมีหมู่ 3-methylisoxazole ที่จับพื้นของหุบเขานี้และเปลี่ยนรูปมัน จึงกันการถอดเปลือกของไวรัส</b> ${S.mu}</li>
 <li>หลังจับ receptor <b>VP4 ถูกปล่อยและ capsid อ่อนแอลง</b> ${S.mu}</li>
 <li>แล้ว<b>genome ถูกฉีดข้าม membrane โดยตรงผ่านช่องที่โปรตีน VP1 สร้างขึ้นที่มุมหนึ่งของ virion</b> ${S.mu}</li>
 <li>ข้อที่แปลกสำหรับ RNA ที่ไม่มี cap: <b>genome จับ ribosome ได้โดยตรง เพราะ ribosome จำ RNA loop ภายในที่เรียกว่า internal ribosome entry site ซึ่งพบใน messenger RNA ของเซลล์บางตัวด้วย</b> ${S.mu}</li>
 <li>แล้ว<b>polyprotein ที่บรรจุลำดับโปรตีนของไวรัสทั้งหมดถูกสร้างขึ้นภายใน 10 ถึง 15 นาทีหลังติดเชื้อ แล้วถูกตัดด้วย protease ที่เข้ารหัสอยู่ในตัวมันเอง</b> ${S.mu}</li>
 <li>และไวรัส<b>เพิ่มจำนวนใน cytoplasm โดยเข้ารหัส RNA-dependent RNA polymerase ของตัวเอง</b> ${S.mu}</li></ul>`});

SEC.push({id:"entero",k:"a",t:"The enteroviruses, virus by virus",mm:"Enterovirus",leg:[],
draw:()=>tbl(["Virus","Disease"],[
 ["Poliovirus","infection แบบ cytolytic ของ motor neuron ที่ anterior horn และ brainstem จึงเกิดอัมพาตแบบอ่อนปวกเปียก · minor และ major disease · แพร่ทาง fecal-oral"],
 ["Coxsackievirus A","herpangina · hand-foot-and-mouth disease · common cold · meningitis — คือโรคที่มีตุ่มน้ำ"],
 ["Coxsackievirus B","pleurodynia · neonatal myocarditis · type 1 diabetes — จำว่า B คือ body"],
 ["Echovirus","เหมือน coxsackievirus"],
 ["Parechovirus","เหมือน coxsackievirus และเป็นสาเหตุสำคัญของ neonatal viral sepsis กับ meningitis"],
 ["Hepatitis A virus","คุณสมบัติเหมือน enterovirus · เป็นไวรัสของคน · โรคที่ liver เกิดจากการตอบสนองทาง immunity"]]),
notes:()=>`<h3>Where they start and where they go</h3><ul>
 <li><b>โรคเกิดจาก infection แบบ lytic ของ target tissue ที่สำคัญ</b> ${S.mu}</li>
 <li>และเป็น capsid virus จึง<b>ทนต่อการถูกทำให้หมดฤทธิ์ — ทน pH 3 ถึง 9, detergent, การบำบัดน้ำเสียอย่างอ่อนและความร้อน</b> ${S.mu}</li>
 <li>ข้อที่มักเข้าใจผิดจากชื่อ: <b>การเพิ่มจำนวนรอบแรกอาจอยู่ที่ respiratory tract, oropharynx หรือ gastrointestinal tract แต่มันไม่ก่อโรคในลำไส้</b> ${S.mu}</li>
 <li>การแพร่: <b>enterovirus แพร่ทาง fecal-oral และทาง aerosol</b> ${S.mu}</li>
 <li>การวินิจฉัย: <b>immune assay เช่น ELISA หรือการวิเคราะห์ genome ด้วย RT-PCR จาก blood cerebrospinal fluid หรือสิ่งส่งตรวจที่เกี่ยวข้อง</b> ${S.mu}</li>
 <li>การป้องกัน: <b>vaccine polio ทั้งชนิดกินและชนิดฉีดที่เชื้อตาย</b> ${S.mu}</li></ul>
 <h3>Where the names came from</h3><ul>
 <li><b>Coxsackievirus ตั้งตามเมือง Coxsackie รัฐ New York ที่แยกเชื้อได้ครั้งแรก</b> ${S.mu}</li>
 <li>และ<b>แบ่งเป็นกลุ่ม A กับ B จากความต่างทางชีววิทยาและแอนติเจน แล้วแบ่งย่อยเป็น serotype ตามตัวเลข</b> ${S.mu}</li>
 <li><b>Echovirus มาจาก enteric cytopathic human orphan เพราะตอนแรกไม่ทราบว่ามันทำให้เกิดโรคอะไร</b> ${S.mu}</li>
 <li>และ<b>parechovirus เคยถูกคิดว่าเป็น echovirus</b> · <b>ตั้งแต่ปี 1967 enterovirus ที่แยกได้ใหม่ถูกแยกด้วยตัวเลข</b> ${S.mu}</li></ul>`});

SEC.push({id:"rhino",k:"a",t:"Rhinovirus is defined by two weaknesses",mm:"Rhinovirus",leg:[],
notes:()=>`<h3>Acid and temperature</h3><ul>
 <li><b>rhinovirus ของคนมีอย่างน้อย 100 serotype และเป็นสาเหตุหลักของ common cold</b> ${S.mu}</li>
 <li>สองคุณสมบัติที่กำหนดทุกอย่าง: <b>มันไวต่อ pH ที่เป็นกรด และเพิ่มจำนวนได้ไม่ดีที่อุณหภูมิเหนือ 33 °C</b> ${S.mu}</li>
 <li>และผลที่ตามมา: <b>คุณสมบัติทั้งสองจำกัดให้มันก่อ infection เฉพาะที่ upper respiratory tract</b> ${S.mu}</li>
 <li>การแพร่: <b>ทาง aerosol และการสัมผัส</b> ${S.mu}</li>
 <li>เทียบกับญาติของมัน: <b>enterovirus ทนกรดจึงผ่านกระเพาะได้ ส่วน rhinovirus ผ่านไม่ได้ — นี่คือความต่างข้อเดียวที่อธิบายว่าทำไมสองกลุ่มนี้ก่อโรคคนละที่</b> ${S.mu}</li></ul>`});

SEC.push({id:"corona",k:"b",t:"Coronavirus: an enveloped virus that resists detergent",mm:"Coronavirus",leg:[],
draw:()=>tbl(["Protein","Role"],[
 ["E2 หรือ spike glycoprotein","เป็นตัวเกาะและเชื่อม membrane · เป็นเป้าของ neutralizing antibody"],
 ["E1 glycoprotein","transmembrane matrix protein"],
 ["N nucleoprotein","จับกับ positive-strand genomic RNA เป็น helical nucleocapsid ที่ยาวและยืดหยุ่น"],
 ["E3 hemagglutinin neuraminidase","พบในบางสายพันธุ์เท่านั้น"]]),
notes:()=>`<h3>The exception to the envelope rule</h3><ul>
 <li>เป็นไวรัสขนาดกลาง <b>มี envelope และมี (+) RNA genome</b> ${S.mu}</li>
 <li>และข้อที่ขัดกับกฎทั่วไปของ enveloped virus: <b>มันทน detergent เพราะมี glycoprotein corona หุ้มอยู่</b> ${S.mu}</li>
 <li>มัน<b>เข้ารหัส RNA-dependent RNA polymerase และเพิ่มจำนวนใน cytoplasm</b> ${S.mu}</li></ul>
 <h3>Why SARS and MERS are different</h3><ul>
 <li><b>coronavirus ของคนส่วนใหญ่มีอุณหภูมิที่เหมาะต่อการโตที่ 33 ถึง 35 °C infection จึงอยู่เฉพาะที่ upper respiratory tract</b> ${S.mu}</li>
 <li>แต่<b>coronavirus ของสัตว์รวมถึง SARS-CoV และ MERS-CoV เพิ่มจำนวนได้ที่ 37 °C จึงก่อโรคทั้งระบบในคนและก่อ pneumonia ที่รุนแรง</b> ${S.mu}</li>
 <li>สิ่งที่มันทำกับเซลล์: <b>ก่อ infection แบบ cytolytic — เมื่อหยอดเข้า respiratory tract ของอาสาสมัคร มันติดเชื้อและทำลายการทำงานของ ciliated epithelial cell</b> ${S.mu}</li>
 <li>ตัวเลขภาระโรค: <b>coronavirus ของคนส่วนใหญ่ก่อ infectionrespiratory tract ส่วนบน คิดเป็นราว 10% ถึง 15% ของ infectionrespiratory tract ส่วนบนทั้งหมด</b> ${S.mu}</li>
 <li>และความต่างจาก rhinovirus: <b>โรคคล้าย common cold แต่ incubation period ยาวกว่า เฉลี่ย 3 วัน</b> ${S.mu}</li>
 <li>มันยัง<b>ทำให้โรคปอดเรื้อรังที่มีอยู่เดิมอย่าง asthma หรือ bronchitis กำเริบ และนาน ๆ ครั้งก่อ pneumonia</b> ${S.mu}</li>
 <li>การแพร่: <b>ทาง aerosol, การสัมผัสโดยตรง, ทาง fecal-oral และสระว่ายน้ำที่ปนเปื้อน</b> ${S.mu}</li>
 <li>การควบคุม: <b>การกักกันสำหรับ SARS และ MERS</b> ${S.mu}</li></ul>`});

SEC.push({id:"noro",k:"b",t:"Norovirus and the cruise ship",mm:"Norovirus",leg:[],
notes:()=>`<h3>Why outbreaks are so hard to stop</h3><ul>
 <li>เป็นไวรัส<b>ขนาดเล็ก มี capsid และมี (+) RNA genome</b> ${S.mu}</li>
 <li>และข้อที่อธิบายการระบาดบนเรือสำราญ: <b>มันทนสิ่งแวดล้อมมาก รวมถึงทน detergent และน้ำยาฆ่าเชื้ออื่น</b> ${S.mu}</li>
 <li>มัน<b>เข้ารหัส RNA-dependent RNA polymerase และเพิ่มจำนวนใน cytoplasm</b> ${S.mu}</li>
 <li>กลไกของ symptom: <b>มันทำลาย brush border ของลำไส้</b> ${S.mu}</li>
 <li>ภาพทางคลินิก: <b>ถ่ายเหลวเป็นน้ำ ร่วมกับคลื่นไส้และอาเจียน</b> ${S.mu}</li>
 <li>แพร่<b>ทาง fecal-oral ในอาหารและน้ำที่ปนเปื้อน</b> ${S.mu}</li>
 <li>วินิจฉัยจาก<b>symptom และการวิเคราะห์ genome ด้วย RT-PCR</b> · และ<b>รักษาแบบประคับประคอง</b> ${S.mu}</li></ul>`});

SEC.push({id:"paramyxo",k:"c",t:"The fusion protein defines the family",mm:"Paramyxovirus",leg:[],
draw:()=>tbl(["Genus","Human pathogen","Attachment protein"],[
 ["Morbillivirus","measles virus","H glycoprotein — จับโปรตีน ไม่ต้องใช้ neuraminidase"],
 ["Paramyxovirus","parainfluenza virus 1 ถึง 4 · mumps virus","HN glycoprotein — จับ sialic acid และมีฤทธิ์ neuraminidase"],
 ["Pneumovirus","respiratory syncytial virus","G glycoprotein — จับโปรตีน"]]),
notes:()=>`<h3>Structure</h3><ul>
 <li>เป็นไวรัสค่อนข้างใหญ่ <b>มี negative-sense single-stranded RNA ใน helical nucleocapsid ที่หุ้มด้วย envelope รูปร่างไม่แน่นอนขนาดราว 156 ถึง 300 nm</b> ${S.mu}</li>
 <li>ความต่างจาก orthomyxovirus: <b>มันใหญ่กว่า และ genome ไม่ได้แบ่งเป็น segment</b> ${S.mu}</li>
 <li>nucleocapsid ประกอบด้วย <b>RNA กับ nucleoprotein N, polymerase phosphoprotein P และ large protein L</b> ${S.mu}</li>
 <li>หน้าที่ของแต่ละตัว: <b>L คือ RNA polymerase, P ช่วยการสร้าง RNA และ N ช่วยรักษาโครงสร้างของ genome</b> ${S.mu}</li>
 <li>และ<b>nucleocapsid จับกับ matrix protein M ที่บุด้านในของ envelope</b> ${S.mu}</li>
 <li>envelope มี glycoprotein สองตัว — <b>fusion protein F และ viral attachment protein ซึ่งเป็น HN, H หรือ G</b> ${S.mu}</li>
 <li>เงื่อนไขที่ F ต้องผ่าน: <b>มันต้องถูกกระตุ้นด้วยการตัดด้วย protease จึงจะเชื่อม membrane ได้ ซึ่งให้ F1 กับ F2 ที่ยึดกันด้วย disulfide bond</b> ${S.mu}</li>
 <li>และ<b>โปรตีน V กับ C ซึ่งมาจากการถอดรหัสแบบอื่นของยีน P ช่วยให้ไวรัสหนีการป้องกันแบบ innate</b> ${S.mu}</li></ul>
 <h3>Replication and syncytia</h3><ul>
 <li><b>HN ของ parainfluenza จับ sialic acid บน glycolipid และ glycoprotein ที่ผิวเซลล์</b> ${S.mu}</li>
 <li>และเหมือน influenza: <b>มันใช้ฤทธิ์ neuraminidase ตัด sialic acid บน glycoprotein ของทั้งไวรัสและเซลล์ เพื่อกันไม่ให้จับตัวเองและเพื่อช่วยออกจากเซลล์</b> ${S.mu}</li>
 <li>ส่วน<b>paramyxovirus ตัวอื่นจับ receptor ที่เป็นโปรตีนจึงไม่ต้องใช้ neuraminidase</b> ${S.mu}</li>
 <li><b>F protein ส่งเสริมการเชื่อม envelope เข้ากับ plasma membrane</b> ${S.mu}</li>
 <li>และความสามารถที่ตั้งชื่อให้ไวรัสตัวหนึ่งทั้งตัว: <b>paramyxovirus เหนี่ยวนำการเชื่อมเซลล์กับเซลล์จนเกิด multinucleated giant cell คือ syncytium</b> ${S.mu}</li>
 <li>การเพิ่มจำนวน: <b>RNA polymerase ถูกพาเข้าเซลล์มาในฐานะส่วนหนึ่งของ nucleocapsid</b> และ<b>การถอดรหัส การสร้างโปรตีน และการเพิ่มจำนวน genome เกิดใน cytoplasm ทั้งหมด</b> ${S.mu}</li>
 <li><b>genome ถูกถอดเป็น messenger RNA แต่ละตัว และเป็น positive-sense RNA เต็มสายเพื่อใช้เป็นแม่แบบ</b> ${S.mu}</li>
 <li>และการออก: <b>virion ที่สมบูรณ์ budding ออกจาก plasma membrane และออกไปโดยไม่ฆ่าเซลล์</b> ${S.mu}</li>
 <li>ข้อที่เป็นหลักของทั้งวงศ์: <b>cell-mediated immune response จำเป็นต่อการควบคุม แต่ก็เป็นตัวก่อพยาธิสภาพด้วย</b> ${S.mu}</li></ul>`});

SEC.push({id:"measles",k:"c",t:"Measles",mm:"Measles",leg:[],
notes:()=>`<h3>The receptors explain the spread</h3><ul>
 <li>measles virus ติดเชื้อได้หลายชนิดเซลล์ เพราะ receptor ของมันคือ <b>CD46 ซึ่งเป็น complement regulatory protein และ nectin 4 บน epithelial cell กับเซลล์อื่น และ CD150 ซึ่งคือ signaling lymphocyte-activation molecule บน dendritic cell และ lymphocyte</b> ${S.mu}</li>
 <li>และ<b>การจับ CD150 ส่งเสริมการแพร่แบบ viremia ใน dendritic cell และใน B กับ T lymphocyte ไปทั่วร่างกาย</b> ${S.mu}</li>
 <li>ลักษณะที่ขึ้นชื่อ: <b>แนวโน้มที่จะเชื่อมเซลล์เข้าด้วยกันจนเกิด giant cell</b> ${S.mu}</li></ul>
 <h3>The illness</h3><ul>
 <li>symptom คลาสสิก: <b>fever สูงพร้อม cough, conjunctivitis และ coryza, photophobia, Koplik spot ซึ่งเป็นรอยโรคสีเทาเล็ก ๆ ในปาก และ rash maculopapular</b> ${S.mu}</li>
 <li>สิ่งที่ทำให้แย่ลง: <b>โรครุนแรงกว่าถ้าขาด vitamin A</b> ${S.mu}</li>
 <li>และ<b>ถ้าผู้ป่วยบกพร่องด้าน T cell จะเกิด giant cell pneumonia</b> ${S.mu}</li>
 <li>ภาวะแทรกซ้อนทางระบบประสาทสองแบบ: <b>postmeasles encephalitis</b> และ <b>subacute sclerosing panencephalitis ซึ่งเกิดภายหลัง 5 ถึง 7 ปีและเกิดจาก measles variant</b> ${S.mu}</li>
 <li>measles เป็นหนึ่งใน<b>exanthem คลาสสิกห้าโรคของเด็ก ร่วมกับ rubella, roseola, fifth disease และ chickenpox</b> ${S.mu}</li>
 <li>ภาระโรคในอดีต: <b>ก่อนปี 1960 ประชากรที่อายุน้อยกว่า 20 ปีมากกว่า 90% เคยเป็น measles</b> ${S.mu}</li>
 <li>และภาระโรคปัจจุบัน: <b>ยังเป็นสาเหตุสำคัญของโรคคือมากกว่า 10 ล้านรายต่อปี และของการตายคือ 120,000 รายในปี 2012 ในประชากรที่ไม่ได้รับ vaccine</b> ${S.mu}</li>
 <li>และข้อเตือนที่ยังจริงอยู่: <b>โปรแกรม vaccine ที่ได้ผลทำให้ measles เป็นโรคที่พบน้อยในประเทศพัฒนาแล้ว แต่ยังมีเด็กที่ไม่ได้รับ vaccine หรือไม่ได้รับเข็มกระตุ้น และการระบาดจึงยังเกิด</b> ${S.mu}</li>
 <li>การป้องกัน: <b>live attenuated vaccine สำหรับ measles และ mumps</b> ${S.mu}</li></ul>`});

SEC.push({id:"mumps-rsv",k:"c",t:"Mumps, parainfluenza and respiratory syncytial virus",mm:"Mumps · Parainfluenza · RSV",leg:[],
draw:()=>tbl(["Virus","Disease","Treatment or prevention"],[
 ["Mumps virus","parotitis · orchitis · aseptic meningitis","live attenuated vaccine"],
 ["Parainfluenza virus","common cold · croup ที่ไอเสียงก้องเหมือนแมวน้ำ · bronchitis · pneumonia","—"],
 ["Respiratory syncytial virus","common cold · pneumonia · bronchiolitis — คุกคามชีวิตในทารกคลอดก่อนกำหนด","passive immunization สำหรับทารกคลอดก่อนกำหนดที่เสี่ยงสูง · ribavirin แบบ aerosol"]]),
notes:()=>`<h3>What to notice</h3><ul>
 <li>ทั้งวงศ์<b>แพร่ทาง aerosol</b> ${S.mu}</li>
 <li>และ<b>วินิจฉัยจาก symptom ร่วมกับการวิเคราะห์ genome ด้วย RT-PCR จากสารคัดหลั่ง respiratory tract</b> ${S.mu}</li>
 <li>ความต่างที่ใช้แยกกลุ่ม: <b>parainfluenza และ mumps จับ sialic acid และเข้ารหัสฤทธิ์ neuraminidase ไว้ใน HN glycoprotein ขณะที่ glycoprotein ของ measles และ respiratory syncytial virus จับกับโปรตีน</b> ${S.mu}</li>
 <li>และชื่อของ respiratory syncytial virus มาจากสิ่งที่มันทำ — <b>การเชื่อมเซลล์เข้าด้วยกันเป็น syncytium</b> ${S.mu}</li></ul>`});

SEC.push({id:"flu-struct",k:"d",t:"Influenza: eight segments and two glycoproteins",mm:"Influenza structure",leg:[],
draw:()=>tbl(["Feature","Influenza"],[
 ["Virion","รูปร่างไม่แน่นอน ทั้งกลมและเป็นท่อ ขนาด 80 ถึง 120 nm"],
 ["Genome","influenza A และ B มี helical nucleocapsid แปด segment แต่ละอันเป็น negative-sense RNA ที่จับกับ nucleoprotein และ transcriptase คือ PB1, PB2 และ PA · influenza C มีเจ็ด segment"],
 ["Segment size","890 ถึง 2340 base · โปรตีนเข้ารหัสแยก segment ยกเว้น NS1 กับ NS2 และ M1 กับ M2 ซึ่งคู่ละ segment"],
 ["Hemagglutinin","เป็นทั้ง viral attachment protein และ fusion protein · กระตุ้น neutralizing antibody ที่ป้องกันได้"],
 ["Neuraminidase","เป้าของ zanamivir, oseltamivir และ peramivir ซึ่งออกฤทธิ์กับทั้ง influenza A และ B"],
 ["M2 ion channel","เป้าของ amantadine และ rimantadine ซึ่งออกฤทธิ์กับ influenza A เท่านั้น โดยยับยั้งขั้น uncoating"],
 ["Where it replicates","ถอดรหัสและเพิ่มจำนวน genome ใน nucleus ซึ่งเป็นข้อยกเว้นของ RNA virus แต่ประกอบตัวและ budding ที่ plasma membrane"]]),
notes:()=>`<h3>Stealing a cap</h3><ul>
 <li><b>polymerase ใช้ messenger RNA ของเซลล์ที่มี cap แล้วเป็น primer ในการสร้าง messenger RNA ของตัวเอง</b> ${S.mu}</li>
 <li>และขั้นตอนนั้นเองคือ<b>เป้าของ baloxavir marboxil</b> ${S.mu}</li>
 <li>ข้อที่ทำให้ influenza A ต่างจาก B: <b>influenza A เป็น zoonosis — มันติดเชื้อในคน สัตว์เลี้ยงลูกด้วยนมอื่นและนก ส่วน influenza B ไม่ใช่</b> ${S.mu}</li>
 <li>ที่มาของ symptom: <b>symptom เฉียบพลันคล้ายไข้หวัดใหญ่เกิดจากการปล่อย cytokine จำนวนมาก</b> ${S.mu}</li>
 <li>และความเสียหายที่แท้จริง: <b>การทำลาย ciliated epithelium อย่างกว้างขวาง</b> ${S.mu}</li>
 <li>จึงเกิด<b>pneumonia ได้ทั้งจากตัว influenza เองและจาก infection แบคทีเรียซ้อน</b> ${S.mu}</li>
 <li>บทบาทของ immunity: <b>antibody ที่มีอยู่ก่อนปิดกั้นโรคได้</b> และ<b>cell-mediated immune response สำคัญต่อการควบคุมแต่ก็ก่อพยาธิสภาพ</b> ${S.mu}</li></ul>`});

SEC.push({id:"flu-drift",k:"d",t:"Drift makes an epidemic, shift makes a pandemic",mm:"Drift and shift",leg:[],
draw:()=>tbl(["","Antigenic drift","Antigenic shift"],[
 ["Mechanism","mutation สะสมใน hemagglutinin และ neuraminidase","reassortment ของ genome segment ระหว่างไวรัสของคนกับของสัตว์ เมื่อติดเชื้อสองสายพันธุ์พร้อมกัน"],
 ["Consequence","การระบาดประจำปี","pandemic"],
 ["Why it is possible","polymerase ของไวรัสไม่มีการตรวจแก้","genome แบ่งเป็นแปดชิ้นที่สลับกันได้"]]),
notes:()=>`<h3>The vaccine and the drugs</h3><ul>
 <li><b>vaccine ประจำปีบรรจุ influenza A สองสายพันธุ์และ influenza B หนึ่งหรือสองสายพันธุ์</b> ${S.mu}</li>
 <li><b>vaccine ชนิดเชื้อตายบรรจุ hemagglutinin และ neuraminidase</b> ${S.mu}</li>
 <li>และ<b>มี vaccine ชนิดเชื้อเป็นอ่อนฤทธิ์แบบพ่นจมูกสำหรับผู้ที่อายุ 2 ถึง 49 ปี</b> ${S.mu}</li>
 <li>สามเป้าของยาต้านไวรัส: <b>neuraminidase, ช่อง M2 และ cap-dependent endonuclease</b> ${S.mu}</li>
 <li>การวินิจฉัย: <b>symptom, การวิเคราะห์ genome ด้วย RT-PCR จากสารคัดหลั่ง respiratory tract, การตรวจทาง immunology เช่น ELISA และ hemagglutination กับ hemagglutination inhibition</b> ${S.mu}</li>
 <li>และสิ่งที่ทำให้ influenza ต่างจากไวรัส respiratory tract อื่นทั้งหมด: <b>genome ที่แบ่งเป็น segment ส่งเสริมความหลากหลายทางพันธุกรรม ทั้งจาก mutation และจากการสลับ segment เมื่อติดเชื้อสองสายพันธุ์พร้อมกัน</b> ${S.mu}</li></ul>`});

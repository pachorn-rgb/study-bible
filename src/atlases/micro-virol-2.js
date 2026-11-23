//@include _micro-helpers.js
Object.assign(S,{mu:'<b class="sbb murray">Mu</b>'});
Object.assign(GN,{a:"Reaching the target tissue",b:"What the virus does to the cell",c:"What the host does back",d:"The shape of the illness"});

/* ===================================================================
 Mechanisms of viral pathogenesis — Murray ch 37.
 =================================================================== */

SEC.push({id:"vp-steps",k:"a",t:"The steps of a viral illness",mm:"Steps",leg:[],
draw:()=>tbl(["Stage","What is happening","What the patient feels"],[
 ["Incubation period","ไวรัสเพิ่มจำนวนแล้วแต่ยังไปไม่ถึง target tissue หรือยังทำความเสียหายไม่พอ","ไม่มี symptom หรือมี symptom ไม่จำเพาะจาก cytokine คือ prodrome — fever, headache ปวดตัว chills"],
 ["Prodrome","viremia กำลังดำเนินอยู่","symptom คล้าย fever หวัดใหญ่ มาก่อน symptom จำเพาะของโรค"],
 ["Symptomatic disease","ความเสียหายของ tissue และผลทั้งระบบ จากทั้งตัวไวรัสและระบบภูมิคุ้มกัน","symptom จำเพาะตามหน้าที่ของ tissue ที่ติดเชื้อ"],
 ["Convalescence","ร่างกายซ่อมความเสียหาย","symptom อาจยังอยู่ต่อระหว่างนี้"],
 ["After","สร้าง memory immune response ไว้ป้องกันครั้งหน้า","—"]]),
notes:()=>`<h3>Why the incubation period is long or short</h3><ul>
 <li><b>incubation period สั้น เมื่อ primary site of infection เป็น target tissue เองและให้ symptom จำเพาะของโรคเลย</b> ${S.mu}</li>
 <li><b>incubation period ยาว เมื่อไวรัสต้องแพร่ไปที่อื่นและถูกขยายจำนวนก่อนจะถึง target tissue หรือเมื่อ symptom เกิดจาก immunopathology</b> ${S.mu}</li>
 <li>และบ่อยครั้ง<b>infection ถูกจัดการจบโดย innate host protection โดยไม่มี symptom ใด ๆ</b> ${S.mu}</li></ul>
 <h3>Four things decide how bad it will be</h3><ul>
 <li><b>กลไกการสัมผัสเชื้อและตำแหน่งที่ติดเชื้อ</b> ${S.mu}</li>
 <li><b>สถานะภูมิคุ้มกัน อายุ และสุขภาพโดยรวมของผู้ป่วย</b> ${S.mu}</li>
 <li><b>ปริมาณไวรัสที่ได้รับ</b> ${S.mu}</li>
 <li><b>พันธุกรรมของทั้งไวรัสและ host</b> ${S.mu}</li>
 <li>แต่เมื่อติดเชื้อแล้ว <b>สถานะและความสมบูรณ์ของภูมิคุ้มกันน่าจะเป็นปัจจัยหลักที่ตัดสินว่าโรคจะคุกคามชีวิต จะจบลงดี หรือจะไม่มี symptom เลย</b> ${S.mu}</li>
 <li>และความรุนแรงของ symptom สัมพันธ์กับสองอย่าง — <b>หน้าที่ของ target tissue ที่ติดเชื้อ เช่น liver ให้ hepatitis และ brain ให้ encephalitis</b> และ<b>ขนาดของการตอบสนองแบบ immunopathologic ที่ถูกกระตุ้น</b> ${S.mu}</li></ul>`});

SEC.push({id:"vp-entry",k:"a",t:"Getting into the body",mm:"Entry",leg:[],
notes:()=>`<h3>The barriers</h3><ul>
 <li>ไวรัสเข้าร่างกายได้สองทาง — <b>ผ่านรอยแยกของ skin คือบาดแผล รอยกัดและการฉีด</b> หรือ<b>ข้าม mucoepithelial membrane ที่บุช่องเปิดของร่างกาย คือตา respiratory tract ปาก อวัยวะเพศ และ gastrointestinal tract</b> ${S.mu}</li>
 <li><b>Skin เป็นด่านกั้น infection ที่ดีเยี่ยม</b> ${S.mu}</li>
 <li>ส่วนช่องเปิดถูกป้องกันด้วย <b>น้ำตา มูก ciliated epithelium กรดในกระเพาะ น้ำดี และ IgA</b> ${S.mu}</li>
 <li>ข้อที่ใช้ตอบคำถามระบาดวิทยาได้: <b>การสูดเข้าไปน่าจะเป็นทางติดเชื้อไวรัสที่พบบ่อยที่สุด</b> ${S.mu}</li></ul>
 <h3>The primary site</h3><ul>
 <li>เมื่อเข้ามาแล้ว <b>ไวรัสเพิ่มจำนวนในเซลล์ที่แสดง receptor ของมันและมีเครื่องจักรชีวสังเคราะห์ที่เหมาะสม</b> ${S.mu}</li>
 <li><b>ไวรัสหลายตัวเริ่ม infection ที่ oral mucosa หรือ upper respiratory tract</b> ${S.mu}</li>
 <li>และ<b>อาจมี symptom ของโรคที่ primary site นั้นพร้อมกับที่ไวรัสเพิ่มจำนวน</b> ${S.mu}</li>
 <li>จากนั้นมีสามทางเลือก — <b>เพิ่มจำนวนแล้วอยู่ที่เดิม, กระจายไป tissue อื่นทาง bloodstream หรือใน mononuclear phagocyte กับ lymphocyte หรือกระจายไปตาม neuron</b> ${S.mu}</li></ul>`});

SEC.push({id:"vp-spread",k:"a",t:"Viremia and the four roads to the brain",mm:"Spread",leg:[],
draw:()=>tbl(["Route into the central nervous system","Example or mechanism"],[
 ["จาก bloodstream","arboencephalitis virus"],
 ["จาก meninges ที่ติดเชื้อ หรือจาก cerebrospinal fluid","meninges เข้าถึงได้ง่ายสำหรับไวรัสหลายตัวที่แพร่ทาง viremia"],
 ["โดยการเคลื่อนที่ของ macrophage ที่ติดเชื้อ","ไวรัสเดินทางอยู่ในเซลล์ จึงพ้น antibody ใน blood"],
 ["โดย infection ที่ peripheral neuron และ sensory neuron รวมถึง olfactory neuron","เส้นทางของ rabies และ herpes simplex virus"]]),
notes:()=>`<h3>Blood and lymph are the highways</h3><ul>
 <li><b>bloodstream และระบบ lymph เป็นทางหลักของการเคลื่อนย้ายไวรัสในร่างกาย</b> ${S.mu}</li>
 <li>ไวรัสเข้าถึงมันได้สามทาง — <b>หลังจาก tissue เสียหาย, เมื่อถูก macrophage กลืน หรือเมื่อถูกขนผ่าน mucoepithelial cell ของ oropharynx, gastrointestinal tract, ช่องคลอดหรือทวารหนัก</b> ${S.mu}</li>
 <li>กลไกที่จำเพาะกว่านั้น: <b>enteric virus หลายตัวคือ picornavirus และ reovirus จับ receptor บน M cell ซึ่งขนไวรัสข้ามไปยัง Peyer patch ที่อยู่ใต้ลงไป</b> ${S.mu}</li></ul>
 <h3>Primary and secondary viremia</h3><ul>
 <li><b>Viremia คือการเคลื่อนย้ายไวรัสใน blood</b> · ไวรัส<b>อาจอยู่อิสระใน plasma หรือเกาะอยู่กับ lymphocyte และ macrophage</b> ${S.mu}</li>
 <li>ไวรัสที่ถูก phagocytic macrophage กลืนไปมีสามชะตา — <b>ถูกทำให้หมดฤทธิ์, เพิ่มจำนวน หรือถูกส่งต่อไปยัง tissue อื่น</b> ${S.mu}</li>
 <li>จุดที่ขยาย infection: <b>การเพิ่มจำนวนใน macrophage, ใน endothelium ที่บุ blood vessel, ใน lung หรือใน liver ขยาย infection และเริ่ม secondary viremia</b> ${S.mu}</li>
 <li>และลำดับที่พบบ่อย: <b>secondary viremia มาก่อนการส่งไวรัสไปถึง target tissue เช่น liver, brain หรือ skin และก่อนที่ symptom จำเพาะจะปรากฏ</b> ${S.mu}</li></ul>`});

SEC.push({id:"vp-celltypes",k:"b",t:"Five kinds of infection at the cell level",mm:"Infection types",leg:[],
draw:()=>tbl(["Type","Virus produced?","Fate of the cell"],[
 ["Abortive","—","ไม่มีผลต่อเซลล์"],
 ["Cytolytic","+","เซลล์ตาย"],
 ["Persistent · productive","+","senescence"],
 ["Persistent · latent","—","ไม่มีผลต่อเซลล์"],
 ["Transforming — DNA virus","—","immortalization"],
 ["Transforming — retrovirus","+","immortalization"]]),
notes:()=>`<h3>Thinking like a parasite</h3><ul>
 <li><b>Persistent infection เกิดในเซลล์ที่ติดเชื้อแต่ไม่ถูกไวรัสฆ่า</b> ${S.mu}</li>
 <li>ไวรัสบางตัวให้ <b>persistent productive infection เพราะถูกปล่อยออกอย่างนุ่มนวลด้วย exocytosis หรือด้วย budding จาก plasma membrane</b> ซึ่งเป็นแบบที่ enveloped virus หลายตัวใช้ ${S.mu}</li>
 <li>เหตุผลเชิงวิวัฒนาการ: <b>ไวรัสไม่ต้องการฆ่าเซลล์ เพราะยิ่งเซลล์อยู่นาน ไวรัสยิ่งอยู่ในร่างกายได้นาน และยิ่งผลิตไวรัสออกมามากเพื่อแพร่ไปเซลล์อื่นหรือคนอื่น</b> ${S.mu}</li></ul>
 <h3>Latency</h3><ul>
 <li><b>Latent infection เกิดได้เมื่อ DNA virus ติดเชื้อในเซลล์ที่จำกัดหรือไม่มีเครื่องจักรสำหรับถอดรหัสยีนของไวรัสทั้งหมด</b> ${S.mu}</li>
 <li>หรืออีกทาง: <b>ไวรัสเข้ารหัสหน้าที่ที่กดการเพิ่มจำนวนของตัวเอง เพื่อยืดการเป็นปรสิตออกไป</b> เช่นที่ cytomegalovirus ทำ ${S.mu}</li>
 <li><b>Transcription factor ที่ไวรัสเช่นนั้นต้องการ อาจแสดงออกเฉพาะใน tissue บางชนิด, ในเซลล์ที่กำลังแบ่งตัวแต่ไม่ใช่เซลล์ที่พัก หรือหลังการเหนี่ยวนำด้วยฮอร์โมนหรือ cytokine</b> ${S.mu}</li>
 <li>ตัวอย่างที่ชัดที่สุด: <b>herpes simplex virus ตั้ง latent infection ใน neuron ซึ่งไม่แสดง nuclear factor ที่ต้องใช้ถอดรหัส immediate early gene ของไวรัส</b> ${S.mu}</li>
 <li>และ<b>ความเครียดกับสิ่งกระตุ้นอื่นปลุกเซลล์เหล่านั้นจนไวรัสเพิ่มจำนวนได้</b> ${S.mu}</li></ul>`});

SEC.push({id:"vp-cpe",k:"b",t:"How the virus damages the cell, and the inclusion body that names it",mm:"Cytopathogenesis",leg:[],
draw:()=>tbl(["Mechanism","Examples"],[
 ["ยับยั้งการสร้างโปรตีนของเซลล์","poliovirus · herpes simplex virus · togavirus · poxvirus"],
 ["ยับยั้งและย่อย DNA ของเซลล์","herpesvirus"],
 ["เปลี่ยนโครงสร้างของ cell membrane","enveloped virus"],
 ["แทรก viral glycoprotein เข้าไปใน cell membrane","enveloped virus ทุกตัว"],
 ["สร้าง syncytium","herpes simplex virus · varicella-zoster virus · paramyxovirus · human immunodeficiency virus"],
 ["รบกวน cytoskeleton","nonenveloped virus โดยการสะสม · herpes simplex virus"],
 ["เปลี่ยน permeability","togavirus · herpesvirus"],
 ["ความเป็นพิษของส่วนประกอบของ virion เอง","fiber ของ adenovirus · โปรตีน NSP4 ของ reovirus"]]),
notes:()=>`<h3>Inclusion bodies</h3><ul>
 <li><b>Negri body ใน cytoplasm</b> — rabies ${S.mu}</li>
 <li><b>Intranuclear basophilic คือ owl's eye</b> — cytomegalovirus ซึ่งทำให้เซลล์โตขึ้นด้วย และ adenovirus ${S.mu}</li>
 <li><b>Cowdry type A ใน nucleus</b> — herpes simplex virus และ subacute sclerosing panencephalitis จาก measles virus ${S.mu}</li>
 <li><b>Intracytoplasmic acidophilic</b> — poxvirus ${S.mu}</li>
 <li><b>Perinuclear cytoplasmic acidophilic</b> — reovirus ${S.mu}</li>
 <li>สิ่งที่ inclusion body เป็นจริง ๆ: <b>มันอาจเกิดจากการที่ไวรัสเปลี่ยนโครงสร้างของ membrane หรือของโครโมโซม หรืออาจเป็นจุดที่ไวรัสเพิ่มจำนวน หรือเป็นกองสะสมของ viral capsid</b> ${S.mu}</li>
 <li>และเหตุผลที่มันมีค่าทางห้องปฏิบัติการ: <b>ลักษณะและตำแหน่งของ inclusion body เป็นเอกลักษณ์ของ infection ไวรัสแต่ละชนิด</b> ${S.mu}</li>
 <li>infection ไวรัสยังทำให้เกิด<b>vacuolization, เซลล์กลมขึ้น และการเปลี่ยนแปลงทาง histology ที่ไม่จำเพาะอื่น ๆ ซึ่งเป็นลักษณะของเซลล์ที่ป่วย</b> ${S.mu}</li></ul>`});

SEC.push({id:"vp-onco",k:"b",t:"Viruses that immortalise the cell",mm:"Oncogenesis",leg:[],
notes:()=>`<h3>What a transformed cell looks like</h3><ul>
 <li><b>DNA virus บางตัวและ retrovirus ตั้ง persistent infection ที่ยังกระตุ้นการเติบโตของเซลล์อย่างควบคุมไม่ได้ด้วย จึงเกิด transformation หรือ immortalization</b> ${S.mu}</li>
 <li>ลักษณะของเซลล์ที่ถูก transform: <b>โตต่อเนื่องโดยไม่เข้า senescence, morphology และ metabolism เปลี่ยน, อัตราการโตและการขนส่งน้ำตาลเพิ่มขึ้น, สูญเสีย contact inhibition และโตในสารแขวนลอยหรือกองซ้อนกันเป็น focus บน semisolid agar ได้</b> ${S.mu}</li></ul>
 <h3>Four ways to immortalise</h3><ul>
 <li><b>กระตุ้นหรือจัดหายีนที่กระตุ้นการเติบโต</b> ${S.mu}</li>
 <li><b>ถอดกลไกเบรกที่จำกัดการสร้าง DNA และการเติบโตของเซลล์ออก</b> ${S.mu}</li>
 <li><b>ป้องกัน apoptosis</b> ${S.mu}</li>
 <li><b>จัดหาหรือเหนี่ยวนำ cytokine ที่กระตุ้นการเติบโต</b> ${S.mu}</li>
 <li>เงื่อนไขของ DNA virus: <b>มัน immortalize ได้ใน semipermissive cell ซึ่งแสดงยีนของไวรัสเพียงบางตัวและไม่ผลิตไวรัสออกมา</b> ${S.mu}</li>
 <li>เหตุผลที่ต้องเป็นอย่างนั้น: <b>การสร้าง viral DNA, late messenger RNA, late protein หรือตัวไวรัส นำไปสู่การตายของเซลล์ ซึ่งตัดโอกาส immortalization ทิ้ง</b> ${S.mu}</li>
 <li><b>Oncogenic DNA virus หลายตัวแทรกตัวเข้าไปในโครโมโซมของ host</b> ${S.mu}</li>
 <li>ตัวเลขที่ต้องจำ: <b>ราว 15% ของมะเร็งในคนเกี่ยวข้องกับ oncogenic virus</b> — <b>HTLV-1, hepatitis B virus, hepatitis C virus, high-risk papillomavirus, human herpesvirus 8 และ Epstein-Barr virus</b> ${S.mu}</li>
 <li>และกลไกที่เชื่อมไปถึงมะเร็งจริง: <b>เซลล์ที่ถูก immortalize มีโอกาสสะสม mutation และการจัดเรียงโครโมโซมใหม่มากกว่าเซลล์ปกติ ซึ่งผลักให้กลายเป็นเซลล์มะเร็ง</b> ${S.mu}</li>
 <li>และมัน<b>อาจไวต่อ cofactor และ tumor promoter อย่าง phorbol ester กับ butyrate มากขึ้นด้วย</b> ${S.mu}</li></ul>`});

SEC.push({id:"vp-defense",k:"c",t:"The host response, and why it differs from the response to bacteria",mm:"Host defence",leg:[],
notes:()=>`<h3>Three goals</h3><ul>
 <li>เป้าหมายของการตอบสนองทั้ง innate และ immune ต่อไวรัสมีสามข้อ — <b>กันการเข้า, กันการแพร่ และกำจัดทั้งไวรัสและเซลล์ที่เก็บหรือเพิ่มจำนวนไวรัสอยู่</b> ${S.mu}</li>
 <li><b>การตอบสนองทางภูมิคุ้มกันเป็นวิธีที่ดีที่สุด และในกรณีส่วนใหญ่เป็นวิธีเดียว ที่ควบคุม infection ไวรัสได้</b> ${S.mu}</li>
 <li>ข้อสังเกตเชิงวิวัฒนาการ: <b>interferon และการตอบสนองของ cytotoxic T cell อาจวิวัฒน์ขึ้นมาเพื่อเป็นกลไกต้านไวรัสเป็นหลัก</b> ${S.mu}</li>
 <li>หลักที่ใช้ทำนายความรุนแรง: <b>ยิ่งไวรัสเพิ่มจำนวนในร่างกายนาน infection ยิ่งกระจาย การตอบสนองที่ต้องใช้ควบคุมยิ่งรุนแรง และโอกาสเกิด immunopathogenesis ยิ่งสูง</b> ${S.mu}</li></ul>
 <h3>Why the first symptoms feel like flu, not like infection</h3><ul>
 <li>หลังไวรัสผ่านด่านธรรมชาติ มัน<b>กระตุ้น innate host defense คือ fever, interferon, macrophage, dendritic cell และ natural killer cell</b> ${S.mu}</li>
 <li>ความต่างจากแบคทีเรียที่สำคัญ: <b>innate response ต่อไวรัสถูกกระตุ้นโดยเซลล์ที่ติดเชื้อหรือถูกกระตุ้นให้ต่อต้านเซลล์ที่ติดเชื้อ</b> ${S.mu}</li>
 <li>และ<b>การตอบสนองแรกมาจาก interferon กับ cytokine ซึ่งให้ symptom คล้าย fever หวัดใหญ่ มากกว่าจะเป็น inflammation ที่อาศัย complement กับ neutrophil</b> ${S.mu}</li>
 <li>สิ่งที่จุดชนวน interferon: <b>double-stranded RNA ซึ่งเป็นตัวกลางของการเพิ่มจำนวนของ RNA virus, DNA และ single-stranded RNA บางรูป และ viral glycoprotein บางตัว</b> ${S.mu}</li>
 <li>ผ่านทาง<b>receptor ใน cytoplasm หรือ Toll-like receptor ใน endosome</b> ${S.mu}</li>
 <li>และผลที่สำคัญที่สุด: <b>innate response กัน infection ไวรัสส่วนใหญ่ไม่ให้กลายเป็นโรค</b> ${S.mu}</li></ul>
 <h3>Antibody or T cell — which one matters</h3><ul>
 <li><b>การตอบสนองแบบจำเพาะต่อแอนติเจนใช้เวลาหลายวันจึงถูกกระตุ้นและได้ผล</b> ${S.mu}</li>
 <li><b>antibody ได้ผลต่อไวรัสนอกเซลล์ และอาจพอควบคุม cytolytic virus ได้ เพราะการเพิ่มจำนวนของไวรัสจะทำลายโรงงานคือเซลล์ที่ติดเชื้อไปเอง</b> ${S.mu}</li>
 <li><b>antibody จำเป็นต่อการกันการแพร่ไปยัง target tissue ทาง viremia</b> ${S.mu}</li>
 <li><b>Cell-mediated immunity จำเป็นต่อการสลายเซลล์ที่ติดเชื้อไวรัสที่ไม่ทำให้เซลล์แตก เช่น hepatitis A virus และต่อ infection จาก enveloped virus</b> ${S.mu}</li>
 <li>สิ่งที่ภูมิคุ้มกันเดิมทำได้และทำไม่ได้: <b>ภูมิคุ้มกันเดิมอาจไม่กันระยะแรกของ infection แต่ส่วนใหญ่กันไม่ให้โรคดำเนินต่อ</b> ${S.mu}</li>
 <li>แบ่งหน้าที่กันชัด: <b>cell-mediated response จำกัดการแพร่เฉพาะที่ได้ดีกว่า ส่วน serum antibody กันการแพร่ทาง viremia ไปยัง target tissue จึงกันภาพโรคที่เป็นเอกลักษณ์ไม่ให้เกิด</b> ${S.mu}</li></ul>`});

SEC.push({id:"vp-escape",k:"c",t:"How viruses escape the immune response",mm:"Immune escape",leg:[],
draw:()=>tbl(["Strategy","Who does it"],[
 ["กันไม่ให้ interferon ออกฤทธิ์","herpes simplex virus — กันผลของ antiviral state ที่ IFN-α และ IFN-β เหนี่ยวนำ จึงสร้างโปรตีนและเพิ่มจำนวนต่อได้"],
 ["เปลี่ยนแอนติเจนของตัวเอง","influenza ด้วย antigenic shift และ drift ข้ามหลายปี · human immunodeficiency virus ภายในช่วงชีวิตของผู้ติดเชื้อคนเดียว"],
 ["แพร่จากเซลล์สู่เซลล์เพื่อหนี antibody","ไวรัสที่สร้าง syncytium"],
 ["กดการนำเสนอแอนติเจนและการทำงานของ lymphocyte","cytomegalovirus และ adenovirus ยับยั้งการแสดงออกของ major histocompatibility complex I จึงกัน T cell ไม่ให้ฆ่าเซลล์ที่ติดเชื้อ"]]),
notes:()=>`<h3>Who escapes, and what it costs the patient</h3><ul>
 <li><b>ไวรัสหลายตัว โดยเฉพาะไวรัสขนาดใหญ่ มีวิธีหนีการควบคุมของภูมิคุ้มกันอย่างน้อยหนึ่งด้าน</b> ${S.mu}</li>
 <li>และผลเมื่อหนีสำเร็จ: <b>การที่แก้ infection ไม่สำเร็จนำไปสู่ persistent infection, โรคเรื้อรัง หรือการตายของผู้ป่วย</b> ${S.mu}</li>
 <li>กลุ่มที่ติดเชื้อเรื้อรังได้: <b>DNA virus ทุกวงศ์ยกเว้น parvovirus กับ poxvirus และ retrovirus ก่อ latent infection ที่กลับเป็นซ้ำได้</b> ${S.mu}</li>
 <li>และ<b>cytomegalovirus กับ herpesvirus ตัวอื่น, hepatitis B, C, G และ D และ retrovirus ก่อ chronic productive infection</b> ${S.mu}</li></ul>`});

SEC.push({id:"vp-immunopath",k:"c",t:"When the immune response is the disease",mm:"Immunopathology",leg:[],
draw:()=>tbl(["Immunopathogenesis","Mediator","Examples"],[
 ["symptom คล้าย fever หวัดใหญ่","interferon · cytokine","respiratory virus · arbovirus — คือไวรัสที่ทำให้เกิด viremia"],
 ["Type IV hypersensitivity และ inflammation","T cell · macrophage · polymorphonuclear leukocyte","enveloped virus"],
 ["Immune complex disease","antibody กับ complement","hepatitis B virus — immune complex มักไปสะสมที่ kidney และทำให้เกิด glomerulonephritis"],
 ["การตอบสนองที่แรงเกินเมื่อเจอไวรัสครั้งที่สอง","T cell และ antibody ที่จำเพาะ","dengue hemorrhagic fever · atypical measles"]]),
notes:()=>`<h3>The early response already causes symptoms</h3><ul>
 <li><b>ปฏิกิริยา hypersensitivity และ inflammation ที่ภูมิคุ้มกันต้านไวรัสจุดชนวน อาจเป็นสาเหตุหลักของพยาธิสภาพและ symptom ของโรคไวรัส</b> ${S.mu}</li>
 <li><b>interferon และ cytokine กระตุ้น symptom ทั้งระบบคล้าย fever หวัดใหญ่ คือ fever, malaise และ headache</b> ซึ่งมักพบใน infection ไวรัส respiratory tract และในภาวะ viremia ${S.mu}</li>
 <li>และ<b>symptom เหล่านี้ในระยะ viremia มักมาก่อน symptom จำเพาะของโรค คือเป็น prodrome</b> ${S.mu}</li>
 <li>กรณีที่เลวร้ายกว่า: <b>infection ไวรัสบางชนิดเหนี่ยวนำการตอบสนองของ cytokine ที่ใหญ่มาก คือ cytokine storm</b> ${S.mu}</li>
 <li>ซึ่ง<b>ทำให้การตอบสนองทางภูมิคุ้มกันเสียการควบคุม และอาจจุดชนวนโรค autoimmune ในผู้ที่มีพันธุกรรมโน้มเอียง</b> ${S.mu}</li>
 <li>ต่อมาจึงเกิด<b>immune complex กับการกระตุ้น complement ทาง classic pathway, type IV hypersensitivity ที่ CD4 T cell เหนี่ยวนำ และการทำงานของ CD8 cytolytic T cell</b> ซึ่ง<b>มักดึง neutrophil เข้ามาและทำให้เซลล์เสียหายเพิ่ม</b> ${S.mu}</li></ul>
 <h3>Why enveloped viruses hurt more</h3><ul>
 <li><b>inflammation ที่ cell-mediated immunity จุดชนวนควบคุมยากและทำลาย tissue</b> ${S.mu}</li>
 <li>และ<b>infection จาก enveloped virus เหนี่ยวนำ cell-mediated response ที่มักให้ภาวะ immunopathologic ที่กว้างกว่า</b> ${S.mu}</li>
 <li>ตัวอย่างที่ชี้ชัด: <b>symptom คลาสสิกของ measles, mumps และ hepatitis virus เกิดจาก inflammation ที่ T cell เหนี่ยวนำเป็นหลัก ไม่ใช่จากฤทธิ์ทำลายเซลล์ของไวรัสเอง</b> ${S.mu}</li>
 <li>และ<b>ปริมาณแอนติเจนกับ antibody ที่มากใน blood ระหว่าง viremia หรือ infection เรื้อรัง จุดชนวนปฏิกิริยา type III immune complex hypersensitivity</b> ${S.mu}</li></ul>
 <h3>The second exposure problem</h3><ul>
 <li><b>ใน dengue การมีภูมิคุ้มกันบางส่วนต่อไวรัสที่ใกล้เคียง และใน measles การมีภูมิคุ้มกันต่อไวรัสที่ถูกทำให้หมดฤทธิ์ ทำให้การตอบสนองและโรครุนแรงขึ้นเมื่อเจอไวรัสที่ใกล้เคียงหรือไวรัสจริงครั้งถัดไป</b> ${S.mu}</li>
 <li>กลไก: <b>การตอบสนองของ T cell และ antibody ที่จำเพาะถูกเร่ง จึงก่อความเสียหายจาก inflammation และ hypersensitivity อย่างมีนัยสำคัญต่อ endothelial cell ที่ติดเชื้อ ซึ่งคือ dengue hemorrhagic fever หรือต่อ skin และ lung ซึ่งคือ atypical measles</b> ${S.mu}</li>
 <li>และกลไกที่สอง: <b>antibody ที่ลบล้างฤทธิ์ไม่ได้ ช่วยพา dengue virus และ yellow fever virus เข้า macrophage ผ่าน Fc receptor ซึ่งเป็นที่ที่มันเพิ่มจำนวนได้</b> ${S.mu}</li>
 <li>ข้อที่อธิบายว่าทำไมเด็ก symptom เบากว่า: <b>เด็กโดยทั่วไปมี cell-mediated response เช่น natural killer cell และ natural killer T cell ที่แอคทีฟน้อยกว่าผู้ใหญ่ จึงมักมี symptom เบากว่าใน measles, mumps, Epstein-Barr และ varicella-zoster</b> ${S.mu}</li>
 <li>แต่ด้านกลับของเหรียญเดียวกัน: <b>ใน hepatitis B virus การมี symptom น้อยหรือไม่มี symptom สัมพันธ์กับการที่แก้ infection ไม่ได้ จึงกลายเป็นโรคเรื้อรัง</b> ${S.mu}</li></ul>`});

SEC.push({id:"vp-determinants",k:"d",t:"What decides whether there is a disease at all",mm:"Determinants",leg:[],
draw:()=>tbl(["Determinant","What it covers"],[
 ["Nature of the disease","target tissue · portal of entry · การเข้าถึง target tissue"],
 ["Access of virus to target tissue","ความคงทนของไวรัสในร่างกาย: อุณหภูมิ, กรดและน้ำดีของ gastrointestinal tract · ความสามารถข้าม skin หรือ mucosal epithelium · ความสามารถตั้ง viremia · ความสามารถแพร่ผ่าน reticuloendothelial system"],
 ["Target tissue","ความจำเพาะของ viral attachment protein · การแสดงออกของ receptor ที่จำเพาะต่อ tissue"],
 ["Cytopathologic activity","ประสิทธิภาพการเพิ่มจำนวนในเซลล์ · อุณหภูมิที่เหมาะต่อการเพิ่มจำนวน · ความยอมให้ของเซลล์ · โปรตีนที่เป็นพิษ · การยับยั้งการสร้างสารโมเลกุลใหญ่ของเซลล์ · การสะสมเป็น inclusion body · metabolism ของเซลล์ที่เปลี่ยนไป เช่น immortalization"],
 ["Host protective responses","interferon และ cytokine · natural killer cell และ macrophage · T cell และ antibody · กลไกหนีภูมิคุ้มกันของไวรัส"],
 ["Immunopathology","symptom คล้าย fever หวัดใหญ่ · การฆ่าเซลล์และ inflammation จาก T cell · complement, antibody-dependent cellular cytotoxicity และ immune complex"]]),
notes:()=>`<h3>Inapparent infection</h3><ul>
 <li>ผลสุดท้ายของทั้งหมดนี้อาจเป็น infection ที่ไม่ปรากฏ symptom ซึ่งเกิดได้เมื่อ<b>tissue ที่ติดเชื้อไม่จำเป็นต่อร่างกาย, ไวรัสถูกควบคุมก่อนจะถึง target tissue หรือ infection ถูกแก้โดย innate response ก่อนที่จะเกิดความเสียหายพอให้มี symptom</b> ${S.mu}</li>
 <li>และข้อที่ทำให้เรื่องนี้สำคัญทางระบาดวิทยา: <b>คนที่ไม่มี symptom ยังแพร่เชื้อต่อได้</b> ${S.mu}</li></ul>`});

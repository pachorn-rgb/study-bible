//@include _micro-helpers.js
Object.assign(S,{mu:'<b class="sbb murray">Mu</b>'});
Object.assign(GN,{a:"Papillomavirus and polyomavirus",b:"Adenovirus",c:"Parvovirus",d:"Poxvirus"});

/* ===================================================================
 DNA viruses other than the herpesviruses — Murray ch 41, 42, 44, 45.
 =================================================================== */

SEC.push({id:"hpv-struct",k:"a",t:"Human papillomavirus follows the keratinocyte",mm:"HPV replication",leg:[],
draw:()=>tbl(["Layer of epithelium","What the virus is doing"],[
 ["Basal keratinocyte","เข้าทางรอยแตกของ skin · L1 จับ heparin proteoglycan และ receptor อื่น แล้วถูกนำเข้าโดย endocytosis · early gene กระตุ้นการโตของเซลล์ · E1 และ E2 จับ viral DNA เพื่อดึงเครื่องจักรเพิ่มจำนวนของเซลล์มาที่ genome"],
 ["Stratum spinosum","จำนวนเซลล์ที่เพิ่มขึ้นทำให้ชั้น basal และ prickle cell หนาขึ้น — คือตัว wart, condyloma หรือ papilloma"],
 ["Stratum granulosum","nuclear factor ที่จำเพาะต่อแต่ละชั้นและแต่ละชนิดของ epithelium เปิดยีนของไวรัสคนละชุด · การแสดงออกของยีนไวรัสสอดคล้องกับการแสดงออกของ keratin"],
 ["Stratum corneum","late gene ที่เข้ารหัส structural protein ถูกแสดงเฉพาะในชั้นบนสุดที่เซลล์แก่เต็มที่ · ไวรัสประกอบตัวใน nucleus แล้วหลุดออกไปพร้อมเซลล์ที่ตายแล้ว — ใช้เวลาถึง 3 สัปดาห์"]]),
notes:()=>`<h3>The virion and the genome</h3><ul>
 <li>HPV <b>แยกชนิดด้วยความเหมือนของลำดับ DNA</b> · <b>มีอย่างน้อย 100 ชนิด จัดเป็น 16 กลุ่มคือ A ถึง P</b> ${S.mu}</li>
 <li>และแยกต่อได้เป็น <b>cutaneous HPV กับ mucosal HPV ตาม tissue ที่ไวต่อมัน</b> · <b>ไวรัสในกลุ่มเดียวกันทำให้เกิด wart แบบเดียวกัน</b> ${S.mu}</li>
 <li>ภายใน mucosal HPV มี<b>กลุ่มที่สัมพันธ์กับมะเร็ง cervix, penis, anus และ larynx</b> ${S.mu}</li>
 <li>โครงสร้าง: <b>icosahedral capsid ขนาด 50 ถึง 55 nm ประกอบจากโปรตีนโครงสร้างสองตัวที่สร้าง 72 capsomere</b> ${S.mu}</li>
 <li>genome: <b>เป็นวงกลม ราว 8000 base pair · เข้ารหัส early gene เจ็ดหรือแปดตัวคือ E1 ถึง E8 และ late gene สองตัวคือ L1 กับ L2</b> ${S.mu}</li>
 <li>และ<b>ยีนทั้งหมดอยู่บนสายเดียวคือ plus strand</b> · <b>upstream regulatory region บรรจุลำดับควบคุมการถอดรหัสและ origin of replication</b> ${S.mu}</li></ul>
 <h3>What each gene does</h3><ul>
 <li><b>L1 เป็น major capsid protein และเป็น viral attachment protein · L2 เป็น minor capsid protein</b> ${S.mu}</li>
 <li><b>E1 จับ DNA ที่ origin และส่งเสริมการเพิ่มจำนวนของ viral DNA และมีฤทธิ์ helicase เหมือน T antigen ของ SV40</b> ${S.mu}</li>
 <li><b>E2 จับ DNA, ช่วย E1 และกระตุ้นการสร้าง viral messenger RNA</b> ${S.mu}</li>
 <li><b>E4 ทำลาย cytokeratin เพื่อช่วยการปล่อยไวรัสออก</b> ${S.mu}</li>
 <li><b>E5 เป็น oncoprotein ที่กระตุ้น epidermal growth factor receptor เพื่อส่งเสริมการโต</b> ${S.mu}</li>
 <li><b>E6 และ E7 ของสายพันธุ์ความเสี่ยงสูงอย่าง HPV-16 และ HPV-18 กลายเป็นยีนที่ immortalize เซลล์ได้</b> ${S.mu}</li></ul>`});

SEC.push({id:"hpv-dis",k:"a",t:"From wart to cervical carcinoma",mm:"HPV disease",leg:[],
notes:()=>`<h3>The wart</h3><ul>
 <li>Papillomavirus <b>ติดเชื้อและเพิ่มจำนวนใน squamous epithelium ของ skin ซึ่งให้ wart และของ mucous membrane ซึ่งให้ papilloma ที่อวัยวะเพศ ในปากและที่ conjunctiva</b> ${S.mu}</li>
 <li><b>HPV แต่ละชนิดจำเพาะต่อ tissue อย่างมาก จึงให้ภาพของโรคที่ต่างกัน</b> ${S.mu}</li>
 <li>Wart เกิดจาก<b>การที่ไวรัสกระตุ้นการโตของเซลล์และทำให้ชั้น basal, prickle และ granulosum หนาขึ้น</b> ${S.mu}</li>
 <li>สิ่งที่เห็นใต้กล้อง: <b>koilocyte ซึ่งเป็น keratinocyte ที่โตขึ้นและมีวงใสรอบ nucleus ที่หดลง — เป็นลักษณะเฉพาะของ infection papillomavirus</b> ${S.mu}</li>
 <li>เวลาที่ใช้: <b>3 ถึง 4 สัปดาห์ถึงหลายเดือนกว่า wart จะขึ้น</b> ${S.mu}</li>
 <li>และ<b>infection อยู่เฉพาะที่ โดยทั่วไปยุบเองแต่กลับเป็นซ้ำได้</b> ${S.mu}</li></ul>
 <h3>Why the immune system is slow to act</h3><ul>
 <li><b>Innate immunity และ cell-mediated immunity สำคัญต่อการควบคุมและแก้ infection HPV</b> ${S.mu}</li>
 <li>แต่<b>HPV กดหรือซ่อนตัวจากการตอบสนองที่ป้องกันได้</b> ${S.mu}</li>
 <li>เหตุผลสองข้อ: <b>ระดับการแสดงแอนติเจนต่ำมาก ยกเว้นในเซลล์ผิวชั้นบนที่แก่เต็มที่และแทบตายแล้ว</b> และ<b>keratinocyte เองเป็นที่ที่ immunity เข้าถึงได้ยาก</b> ${S.mu}</li>
 <li>ผลที่ตามมา: <b>ต้องมีการอักเสบก่อนจึงจะกระตุ้นการตอบสนองแบบ cytolytic ที่ทำให้ wart ยุบได้</b> ${S.mu}</li>
 <li>และ<b>ผู้ที่ถูกกด immunity มีการกลับเป็นซ้ำและภาพของโรคที่รุนแรงกว่า</b> ${S.mu}</li>
 <li>สิ่งที่ vaccine อาศัย: <b>antibody ต่อ L1 ลบล้างฤทธิ์ไวรัสได้</b> และ<b>IgG ที่เกิดจาก vaccine ถูกหลั่งเข้าช่องคลอดและที่อื่น จึงป้องกัน infection ได้</b> ${S.mu}</li></ul>
 <h3>The step that turns infection into cancer</h3><ul>
 <li><b>HPV ความเสี่ยงสูงอย่าง HPV-16 และ HPV-18 เริ่มการเกิดมะเร็ง cervix และมะเร็งที่ oropharynx, esophagus, penis และ anus ได้</b> ${S.mu}</li>
 <li><b>พบ viral DNA ทั้งในเนื้องอกที่ไม่ร้ายและที่ร้าย โดยเฉพาะ mucosal papilloma</b> ${S.mu}</li>
 <li>ตัวเลขที่ต้องจำ: <b>มะเร็ง cervix แทบทุกรายมี HPV DNA ที่แทรกอยู่ในโครโมโซม โดย 70% เป็น HPV-16 หรือ HPV-18</b> · และ<b>พบ genotype ความเสี่ยงสูงใน 99.7% ของมะเร็งเหล่านี้</b> ${S.mu}</li>
 <li>กลไกที่สวยงามและร้ายกาจ: <b>genome วงกลมแตกตรงยีน E1 หรือ E2 เพื่อแทรกเข้าโครโมโซม ซึ่งทำให้ยีนทั้งสองนั้นหมดฤทธิ์</b> ${S.mu}</li>
 <li>ผลคือ<b>ไวรัสเพิ่มจำนวนไม่ได้ แต่ยีนอื่นรวมถึง E5, E6 และ E7 ยังถูกแสดงออกต่อไป</b> ${S.mu}</li>
 <li>และยีนทั้งสามนั้นคือ oncogene — <b>E6 จับ p53 และเร่งการย่อยสลายมัน, กระตุ้น telomerase และกด apoptosis</b> ${S.mu}</li>
 <li><b>E7 จับ p105RB ซึ่งเป็นผลผลิตของยีน retinoblastoma</b> · และ<b>E5 ทำให้ epidermal growth factor receptor เสถียรและทำงานมากขึ้น</b> ${S.mu}</li></ul>
 <h3>Epidemiology, diagnosis and the vaccine</h3><ul>
 <li>แพร่โดย<b>การสัมผัสโดยตรง, การมีเพศสัมพันธ์, fomite และการผ่านช่องคลอดที่ติดเชื้อ ซึ่งทำให้เกิด laryngeal papilloma จากชนิด 6 และ 11</b> ${S.mu}</li>
 <li><b>Wart พบบ่อย · แพร่ได้โดยผู้ที่ไม่มี symptom · พบทั่วโลกและไม่มีความชุกตามฤดูกาล</b> ${S.mu}</li>
 <li>การวินิจฉัย: <b>วิเคราะห์ genome ด้วย PCR จาก cervical swab และชิ้นเนื้อ</b> ${S.mu}</li>
 <li>การป้องกัน: <b>vaccine ครอบคลุม HPV ชนิด 6, 11, 16, 18, 31, 33, 45, 52 และ 58</b> ${S.mu}</li></ul>`});

SEC.push({id:"polyoma",k:"a",t:"Polyomavirus waits for the immune system to fail",mm:"Polyomavirus",leg:[],
draw:()=>tbl(["Virus","Disease","Who gets it"],[
 ["JC virus","progressive multifocal leukoencephalopathy","ผู้ที่ถูกกด immunity"],
 ["BK virus","renal disease","ผู้ที่ถูกกด immunity"],
 ["Merkel cell polyomavirus","Merkel cell carcinoma","—"],
 ["SV40","prototype polyomavirus ที่ใช้ศึกษา","—"]]),
notes:()=>`<h3>One family split in two</h3><ul>
 <li><b>วงศ์ที่เคยเรียกว่า Papovaviridae ถูกแยกเป็นสองวงศ์คือ Papillomaviridae และ Polyomaviridae</b> ${S.mu}</li>
 <li>ทั้งสองเป็น<b>ไวรัสขนาดเล็กที่ไม่มี envelope มี icosahedral capsid และมี double-stranded circular DNA genome</b> ${S.mu}</li>
 <li>และ<b>ทั้งคู่เข้ารหัสโปรตีนที่ส่งเสริมการโตของเซลล์</b> ${S.mu}</li>
 <li>ผลที่ตามมาเป็นดาบสองคม: <b>การส่งเสริมการโตช่วยการเพิ่มจำนวนแบบ lytic ในเซลล์ที่ยอมให้ แต่ใน nonpermissive cell มันอาจ transform เซลล์ให้กลายเป็นมะเร็ง</b> ${S.mu}</li>
 <li>กลไกร่วมของทั้งสองวงศ์: <b>โปรตีนของไวรัสจับโปรตีนที่กดการเจริญของเซลล์คือ p53 และ p105RB</b> ${S.mu}</li>
 <li>ความต่าง: <b>T antigen ของ polyomavirus จับทั้ง p105RB และ p53 ในโปรตีนตัวเดียว ขณะที่ papillomavirus ความเสี่ยงสูงใช้ E6 จับ p53 และ E7 จับ p105RB</b> ${S.mu}</li>
 <li>และทั้งคู่<b>ก่อ infection แบบ lytic ใน permissive cell แต่ก่อ infection แบบ abortive, persistent หรือ latent หรือ immortalize ใน nonpermissive cell</b> ${S.mu}</li></ul>
 <h3>The natural history of JC virus</h3><ul>
 <li><b>ไวรัสติดเชื้อที่ tonsil และ lymphocyte แล้วแพร่ทาง viremia ไปที่ kidney ตั้งแต่ช่วงต้นของชีวิต</b> ${S.mu}</li>
 <li><b>ไวรัสพบทั่วไปและ infection ไม่มี symptom</b> · และมัน<b>ตั้ง persistent และ latent infection ในอวัยวะอย่าง kidney และ lung</b> ${S.mu}</li>
 <li>แล้วในผู้ที่ถูกกด immunity <b>JC virus ถูกปลุก แพร่ไปสมอง และก่อ progressive multifocal leukoencephalopathy ซึ่งเป็นโรคไวรัสช้าแบบดั้งเดิม</b> ${S.mu}</li>
 <li>สิ่งที่มันทำในสมอง: <b>มัน transform astrocyte บางส่วนและฆ่า oligodendrocyte จึงเกิดรอยโรคที่เป็นเอกลักษณ์และจุดที่ demyelinate</b> ${S.mu}</li>
 <li>ภาพทางพยาธิวิทยา: <b>รอยโรคถูก demyelinate มี astrocyte ขนาดใหญ่ผิดปกติ และ oligodendroglial cell ที่ nucleus ใหญ่มาก</b> ${S.mu}</li>
 <li><b>BK virus ไม่ร้ายแรง แต่อาจก่อโรคที่ kidney ในผู้ที่ถูกกด immunity</b> ${S.mu}</li>
 <li>แพร่โดย<b>การสูดเข้าไป หรือการสัมผัสน้ำหรือน้ำลายที่ปนเปื้อน</b> · <b>พบทั่วโลกและไม่มีความชุกตามฤดูกาล</b> ${S.mu}</li>
 <li>การวินิจฉัย progressive multifocal leukoencephalopathy: <b>พบ viral DNA ที่ขยายด้วย PCR ใน cerebrospinal fluid ร่วมกับหลักฐานของรอยโรคจาก magnetic resonance imaging หรือ computerized tomography</b> ${S.mu}</li>
 <li>และข้อที่ต้องยอมรับ: <b>ไม่มีวิธีควบคุม</b> ${S.mu}</li></ul>`});

SEC.push({id:"adeno",k:"b",t:"Adenovirus: the fiber is both the key and the poison",mm:"Adenovirus",leg:[],
draw:()=>tbl(["Part of the virion","What it does"],[
 ["Hexon และ penton รวม 240 capsomere","icosadeltahedral capsid ขนาด 70 ถึง 90 nm ไม่มี envelope"],
 ["Penton base ที่ 12 มุม","เริ่มการนำเข้าเซลล์โดยจับ αv integrin · เป็นพิษต่อเซลล์ · พา type-specific antigen"],
 ["Fiber ที่ยื่นจาก penton","เป็น viral attachment protein · เป็นพิษต่อเซลล์ · พา type-specific antigen"],
 ["Terminal protein 55 kDa ที่ปลาย 5′ ทั้งสองข้าง","ติดกับ linear double-stranded DNA genome ขนาดราว 36,000 base pair ซึ่งใหญ่พอเข้ารหัส 30 ถึง 40 ยีน"]]),
notes:()=>`<h3>Entry</h3><ul>
 <li><b>Fiber protein จับ glycoprotein ในตระกูล immunoglobulin superfamily โดยมี receptor ราว 100,000 ตัวต่อเซลล์</b> ${S.mu}</li>
 <li>และ receptor เดียวกันนี้<b>ถูก coxsackievirus B หลายตัวใช้ด้วย จึงได้ชื่อว่า coxsackie adenovirus receptor</b> ${S.mu}</li>
 <li><b>adenovirus บางตัวใช้ major histocompatibility complex I เป็น receptor แทน</b> ${S.mu}</li>
 <li>จากนั้น <b>penton base จับ αv integrin แล้วเกิด receptor-mediated endocytosis ใน clathrin-coated vesicle</b> ${S.mu}</li>
 <li>แล้ว<b>ไวรัสสลาย endosomal vesicle และ capsid ส่ง DNA genome เข้า nucleus</b> ${S.mu}</li>
 <li>และสิ่งที่ตามมาจากความเป็นพิษของ capsid: <b>penton กับ fiber ยับยั้งการสร้างสารโมเลกุลใหญ่ของเซลล์ได้</b> ${S.mu}</li>
 <li>ตัวเลขของวงจร: <b>ใช้เวลาราว 32 ถึง 36 ชั่วโมง และผลิต virion ได้ราว 10,000 ตัว</b> ${S.mu}</li></ul>
 <h3>Disease and epidemiology</h3><ul>
 <li>แยกเชื้อได้ครั้งแรกปี 1953 จาก<b>การเพาะเลี้ยงเซลล์ adenoid ของคน</b> · <b>รู้จักแล้วราว 100 serotype โดยอย่างน้อย 52 ตัวติดเชื้อในคน</b> ${S.mu}</li>
 <li>แบ่งเป็น<b>เจ็ดกลุ่มย่อยคือ A ถึง G</b> · <b>ชนิดที่ 1 ถึง 7 พบบ่อยที่สุด</b> ${S.mu}</li>
 <li>โรคที่พบบ่อย: <b>infectionrespiratory tract, pharyngoconjunctivitis ซึ่งคือ pinkeye, hemorrhagic cystitis และ gastroenteritis</b> ${S.mu}</li>
 <li>และกลุ่ม symptom อื่น: <b>pharyngitis, atypical pneumonia, infantile gastroenteritis และ acute respiratory disease</b> ${S.mu}</li>
 <li><b>ผู้ที่ immunity บกพร่องเสี่ยงต่อภาพของโรคที่รุนแรงกว่า</b> ${S.mu}</li>
 <li>แพร่โดย<b>ละอองอากาศ, การสัมผัสโดยตรง, ทาง fecal-oral และสระว่ายน้ำที่ปนเปื้อน</b> ${S.mu}</li>
 <li>คุณสมบัติที่อธิบายการแพร่: <b>เป็น capsid virus จึงทนต่อการถูกทำให้หมดฤทธิ์</b> ${S.mu}</li>
 <li>การวินิจฉัย: <b>immunologic assay และการวิเคราะห์ genome ด้วย PCR</b> ${S.mu}</li>
 <li>vaccine: <b>มีเฉพาะ adenovirus ชนิด 4 และ 7 และใช้เฉพาะในทหาร</b> ${S.mu}</li></ul>
 <h3>Why molecular biologists love it</h3><ul>
 <li><b>adenovirus หลายตัวมีศักยภาพก่อมะเร็งในสัตว์แต่ไม่ในคน</b> จึงถูกศึกษาอย่างกว้างขวาง ${S.mu}</li>
 <li>และผลพลอยได้ที่เปลี่ยนชีววิทยา: <b>การวิเคราะห์ยีนของ hexon protein นำไปสู่การค้นพบ intron และการตัดต่อ messenger RNA ของ eukaryote</b> ${S.mu}</li>
 <li>ปัจจุบันใช้เป็น<b>พาหะนำส่ง DNA สำหรับยีนบำบัด เช่นใน cystic fibrosis, ใช้แสดงยีนของไวรัสอื่นอย่าง human immunodeficiency virus เพื่อทำ vaccine และใช้เป็น oncolytic therapy</b> ${S.mu}</li>
 <li>กลไกก่อมะเร็งของมัน: <b>โปรตีน E1A และ E1B ทำให้โปรตีนที่กดการเจริญหมดฤทธิ์เพื่อส่งเสริมการโต</b> ${S.mu}</li></ul>`});

SEC.push({id:"parvo",k:"c",t:"Parvovirus B19 needs a dividing cell",mm:"Parvovirus",leg:[],
draw:()=>tbl(["Host","Disease","Why"],[
 ["เด็ก","erythema infectiosum คือ fifth disease — fever สูงระหว่าง viremia แล้วตามด้วย rash ภายหลัง","rash เป็นระยะที่เกิดจาก immunity ไม่ใช่จากไวรัสโดยตรง"],
 ["ผู้ที่มี chronic hemolytic anemia เช่น sickle cell anemia","aplastic crisis ที่คุกคามชีวิต","ไวรัสลดจำนวน erythroid precursor ลง ร่วมกับอายุที่สั้นอยู่แล้วของ erythrocyte"],
 ["ผู้ใหญ่","arthralgia และ arthritis","immune complex"],
 ["ทารกในครรภ์","hydrops fetalis และการแท้ง","anemia จากการที่ erythroid precursor ถูกทำลาย"]]),
notes:()=>`<h3>The smallest DNA viruses</h3><ul>
 <li><b>Parvoviridae เป็นไวรัส DNA ที่เล็กที่สุด</b> ${S.mu}</li>
 <li>และ<b>ขนาดที่เล็กกับคลังยีนที่จำกัดทำให้มันพึ่งเซลล์ host มากกว่าไวรัส DNA ตัวอื่น หรือไม่ก็ต้องมี helper virus จึงเพิ่มจำนวนได้</b> ${S.mu}</li>
 <li>โครงสร้าง: <b>icosahedral capsid ขนาดเล็กที่มี single-strand DNA genome</b> ${S.mu}</li>
 <li>ข้อจำกัดที่กำหนดทุกอย่างที่ตามมา: <b>มันต้องเพิ่มจำนวนในเซลล์ที่กำลังโต ซึ่งคือ erythroid precursor cell</b> ${S.mu}</li>
 <li>ที่มาของชื่อ fifth disease: <b>มันถูกนับเป็นหนึ่งใน exanthem คลาสสิกห้าโรคของเด็ก โดยสี่โรคแรกคือ varicella, rubella, roseola และ measles</b> ${S.mu}</li>
 <li><b>Adeno-associated virus อยู่ในสกุล Dependovirus — ติดเชื้อในคนเป็นปกติแต่เพิ่มจำนวนได้เฉพาะเมื่อมี helper virus ตัวที่สอง ซึ่งมักเป็น adenovirus</b> ${S.mu}</li>
 <li>และ<b>มันไม่ก่อโรคและไม่เปลี่ยน infection ของ helper ของมัน</b> ${S.mu}</li>
 <li>คุณสมบัติสองข้อนั้นบวกกับ<b>แนวโน้มที่จะแทรกเข้าโครโมโซมของ host ทำให้ adeno-associated virus ที่ดัดแปลงพันธุกรรมเป็นตัวเลือกที่ดีเยี่ยมสำหรับยีนบำบัดแบบทดแทนยีน</b> ${S.mu}</li></ul>
 <h3>A disease in two phases</h3><ul>
 <li><b>ระยะแรกสัมพันธ์กับ viremia</b> — <b>symptom คล้ายไข้หวัดใหญ่และการขับไวรัสออกมา</b> ${S.mu}</li>
 <li><b>ระยะหลังสัมพันธ์กับการตอบสนองทาง immunity</b> — <b>immune complex ของ antibody กับ virion ที่ไม่จับ complement ไหลเวียนอยู่ และเกิด rash erythematous maculopapular, arthralgia และ arthritis</b> ${S.mu}</li>
 <li>ลำดับที่ต้องจำ: <b>rash และ arthralgia ในระยะนี้เกิดพร้อมกับการปรากฏของ antibody จำเพาะ การหายไปของไวรัสที่ตรวจพบได้ และการเกิด immune complex</b> ${S.mu}</li>
 <li>และบทบาทสองด้านของ antibody: <b>มันหยุด viremia และสำคัญต่อการแก้โรค แต่ก็มีส่วนทำให้เกิด symptom ด้วย</b> ${S.mu}</li>
 <li>ระยะเริ่มต้น: <b>prodrome ที่ไม่มีอะไรน่าสังเกต 7 ถึง 10 วัน ซึ่งเป็นช่วงที่ผู้ป่วยแพร่เชื้อได้</b> ${S.mu}</li></ul>
 <h3>The numbers</h3><ul>
 <li><b>ราว 65% ของผู้ใหญ่เคยติดเชื้อ B19 แล้วเมื่ออายุ 40 ปี</b> ${S.mu}</li>
 <li><b>Erythema infectiosum พบบ่อยที่สุดในเด็กและวัยรุ่นอายุ 4 ถึง 15 ปี ซึ่งเป็นแหล่งแพร่เชื้อ</b> · <b>ส่วน arthralgia กับ arthritis มักเกิดในผู้ใหญ่</b> ${S.mu}</li>
 <li>แพร่โดย<b>ละออง respiratory tract และสารคัดหลั่งในปาก ก่อนที่ rash จะขึ้น</b> · <b>โรคมักเกิดในปลายฤดูหนาวและฤดูใบไม้ผลิ</b> ${S.mu}</li>
 <li>และมีรายงาน<b>การแพร่ทางหลอด blood จาก clotting-factor concentrate</b> ด้วย ${S.mu}</li>
 <li>การวินิจฉัย: <b>อาศัย symptom แล้วยืนยันด้วยการวิเคราะห์ genome ด้วย PCR จาก blood</b> ${S.mu}</li>
 <li>และ<b>ไม่มีวิธีควบคุมหรือรักษา</b> ${S.mu}</li>
 <li><b>Bocavirus</b> เป็นไวรัสที่เพิ่งค้นพบ <b>ก่อโรค respiratory tract เฉียบพลันซึ่งอาจรุนแรงในเด็กเล็ก</b> · <b>พบทั่วโลกและก่อโรคในเด็กอายุน้อยกว่า 2 ปี</b> · แพร่ในสารคัดหลั่ง respiratory tract แต่แยกได้จาก stool ด้วย ${S.mu}</li></ul>`});

SEC.push({id:"pox",k:"d",t:"Poxvirus replicates without a nucleus",mm:"Poxvirus",leg:[],
notes:()=>`<h3>The largest virion of all</h3><ul>
 <li><b>ใหญ่มาก มี envelope และมี morphology ที่ซับซ้อน</b> · <b>genome เป็น linear DNA ที่ปลายทั้งสองเชื่อมกัน</b> ${S.mu}</li>
 <li>และข้อที่ทำให้มันไม่ต้องพึ่ง nucleus ของเซลล์: <b>ไวรัสเข้ารหัสทั้ง DNA-dependent RNA polymerase และ DNA-dependent DNA polymerase ของตัวเอง</b> ${S.mu}</li>
 <li>จึง<b>เพิ่มจำนวนใน cytoplasm ได้ทั้งวงจร ซึ่งต่างจากไวรัส DNA ตัวอื่น</b> ${S.mu}</li>
 <li>และสิ่งที่จำเป็นต่อการควบคุมโรค: <b>cell-mediated immunity เป็นสิ่งจำเป็น</b> ${S.mu}</li></ul>
 <h3>Four members worth separating</h3><ul>
 <li><b>Smallpox</b> — <b>เป็น lytic virus, ติดเชื้อเฉพาะในคน, ตุ่มขึ้นพร้อมกันทีเดียวทั้งหมด และเป็นเชื้อที่กังวลเรื่องการก่อการร้ายชีวภาพ</b> ${S.mu}</li>
 <li><b>Molluscum contagiosum</b> — <b>กระตุ้นการโตของเซลล์จนเกิดก้อนคล้าย wart และติดเชื้อเฉพาะในคน</b> ${S.mu}</li>
 <li><b>Vaccinia และ orf</b> — <b>เป็น lytic virus และเป็น zoonosis</b> ${S.mu}</li>
 <li>การแพร่: <b>smallpox แพร่ทางละอองอากาศและการสัมผัสโดยตรง ส่วนตัวอื่นทั้งหมดแพร่โดยการสัมผัสเท่านั้น</b> ${S.mu}</li>
 <li>การวินิจฉัย: <b>วิเคราะห์ genome ด้วย PCR จากน้ำในตุ่ม</b> ${S.mu}</li>
 <li>การป้องกัน: <b>ใช้ vaccinia virus เป็น vaccine สำหรับ smallpox ร่วมกับการกักกัน</b> ${S.mu}</li></ul>
 <h3>What the virion carries with it</h3><ul>
 <li>envelope หุ้ม<b>nucleoid รูปดัมเบลล์ที่บรรจุ DNA, lateral body, fibril และเอนไซม์กับโปรตีนจำนวนมาก</b> ${S.mu}</li>
 <li>รวมถึง<b>เอนไซม์และ transcriptional factor ที่ต้องใช้สร้าง messenger RNA</b> ${S.mu}</li>
 <li>และการถอดเปลือกของมันเป็นสองจังหวะ: <b>การถอดเปลือกขั้นแรกเปิดอนุภาคย่อยออกสู่ cytoplasm ทำให้เอนไซม์ที่มากับ virion สร้าง messenger RNA ได้ แล้วจึงสร้างเอนไซม์ถอดเปลือกขึ้นมาปล่อยแกนที่บรรจุ DNA ออกมา</b> ${S.mu}</li></ul>`});

//@include _micro-helpers.js
Object.assign(S,{mu:'<b class="sbb murray">Mu</b>'});
Object.assign(GN,{a:"The family",b:"Replication",c:"Human immunodeficiency virus",d:"HTLV and endogenous retroviruses"});

/* ===================================================================
 Retroviruses — Murray ch 54.
 =================================================================== */

SEC.push({id:"retro-class",k:"a",t:"The discovery that broke the central dogma",mm:"Retrovirus",leg:[],
draw:()=>tbl(["Subfamily","Characteristics","Examples"],[
 ["Oncovirinae type B","nucleocapsid core อยู่เยื้องศูนย์ใน virion ที่สมบูรณ์","mouse mammary tumor virus"],
 ["Oncovirinae type C","nucleocapsid core อยู่กลาง","HTLV-1, HTLV-2, HTLV-5 และ Rous sarcoma virus ของไก่"],
 ["Oncovirinae type D","nucleocapsid core เป็นทรงกระบอก","Mason-Pfizer monkey virus"],
 ["Lentivirinae","โรคเริ่มช้า ก่อความผิดปกติทางระบบประสาทและกด immunity · core ทรงกระบอกแบบ D","HIV-1, HIV-2, visna virus ของแกะ และ caprine arthritis encephalitis virus ของแพะ"],
 ["Spumavirinae","ไม่ก่อโรคที่ทราบ แต่ให้ cytopathology แบบเป็นฟองที่เป็นลักษณะเฉพาะ","human foamy virus"],
 ["Human endogenous retrovirus","sequence retrovirus ที่แทรกอยู่ใน genome ของคน","human placental virus"]]),
notes:()=>`<h3>1970</h3><ul>
 <li><b>retrovirus น่าจะเป็นกลุ่ม virus ที่ถูกศึกษามากที่สุดในอณูชีววิทยา</b> ${S.mu}</li>
 <li><b>ในปี 1970 Baltimore และ Temin แสดงว่า retrovirus เข้ารหัส RNA-dependent DNA polymerase คือ reverse transcriptase และ replicate ผ่านตัวกลางที่เป็น DNA</b> ${S.mu}</li>
 <li>แล้ว<b>สำเนา DNA ของ genome ถูกแทรกเข้า chromosome ของ cell จนกลายเป็น gene ของ cell</b> ${S.mu}</li>
 <li>ความสำคัญ: <b>การค้นพบนี้ทำให้ Baltimore, Temin และ Dulbecco ได้รางวัล Nobel ปี 1975 และขัดกับสิ่งที่เคยเป็น central dogma ของอณูชีววิทยา คือข้อมูลพันธุกรรมไหลจาก DNA ไป RNA แล้วไปโปรตีน</b> ${S.mu}</li></ul>
 <h3>From chickens to AIDS</h3><ul>
 <li><b>retrovirus ตัวแรกที่แยกได้คือ Rous sarcoma virus ซึ่ง Peyton Rous แสดงว่าทำให้เกิดก้อนเนื้องอกคือ sarcoma ในไก่</b> ${S.mu}</li>
 <li>และ<b>เหมือน retrovirus ส่วนใหญ่ Rous sarcoma virus มีขอบเขต host และ species จำกัดมาก</b> ${S.mu}</li>
 <li><b>retrovirus ที่ก่อ cancer ถูกแยกจากสัตว์ชนิดอื่นในเวลาต่อมาและถูกจัดเป็น RNA tumor virus หรือ oncornavirus</b> ${S.mu}</li>
 <li>กลไกของมันหลายตัว: <b>เปลี่ยนการเติบโตของ cell โดยแสดงสิ่งที่คล้าย gene ควบคุมการเติบโตของ cell ซึ่งคือ oncogene</b> ${S.mu}</li>
 <li>จุดเริ่มของ retrovirus ของคน: <b>ในปี 1981 Robert Gallo และคณะแยก HTLV-1 จากผู้ป่วย adult human T-cell leukemia ซึ่งเป็นครั้งแรกที่ retrovirus ของคนถูกเชื่อมกับโรคในคน</b> ${S.mu}</li>
 <li>แล้ว<b>Montagnier และคณะในปารีส และ Gallo กับคณะในสหรัฐ รายงานการแยก HIV-1 จากผู้ป่วย lymphadenopathy และ AIDS</b> ${S.mu}</li>
 <li>และ<b>HIV-2 ซึ่งเป็น virus ใกล้ชิดถูกแยกได้ภายหลังและพบมากในแอฟริกาตะวันตก</b> ${S.mu}</li>
 <li>ที่มา: <b>HIV ดูจะถูกส่งต่อมาถึงคนจากชิมแปนซี แล้วแพร่อย่างรวดเร็วทั่วแอฟริกาและทั่วโลกจากประชากรที่เคลื่อนที่มากขึ้น</b> ${S.mu}</li>
 <li>จำนวน: <b>ปัจจุบันมีราว 37 ล้านคนทั่วโลกที่อยู่กับ virus ที่ก่อ AIDS</b> ${S.mu}</li>
 <li>และ<b>แม้โรคจะร้ายแรงและไม่หายขาด การพัฒนายาต้าน virus แบบผสมคือ highly active antiretroviral therapy ทำให้ผู้ป่วยหลายคนกลับไปใช้ชีวิตปกติได้</b> ${S.mu}</li></ul>
 <h3>How they are classified</h3><ul>
 <li><b>retrovirus ถูกจัดกลุ่มจากโรคที่ก่อ, tissue tropism และขอบเขต host, รูปร่างของ virion และความซับซ้อนทางพันธุกรรม</b> ${S.mu}</li>
 <li>ข้อที่ต้องแยกให้ชัด: <b>oncovirus เป็น retrovirus กลุ่มเดียวที่ทำให้ cell เป้าหมายเป็น immortal หรือเปลี่ยนสภาพได้</b> ${S.mu}</li>
 <li>และ<b>อนุภาคแบบ A เป็นรูประยะยังไม่สมบูรณ์ที่อยู่ใน cytoplasm ซึ่ง budding ผ่าน plasma membrane แล้วเจริญเป็นอนุภาคแบบ B, C และ D</b> ${S.mu}</li>
 <li><b>lentivirus เป็น virus ช้าที่สัมพันธ์กับโรคทางระบบประสาทและโรคที่กด immunity</b> ${S.mu}</li></ul>`});

SEC.push({id:"retro-struct",k:"a",t:"Two genomes, two transfer RNAs and three enzymes",mm:"Virion",leg:[],
notes:()=>`<h3>The virion</h3><ul>
 <li><b>retrovirus ค่อนข้างกลม มี envelope เส้นผ่านศูนย์กลาง 80 ถึง 120 nm</b> ${S.mu}</li>
 <li><b>envelope บรรจุ glycoprotein ของ virus และได้มาจากการ budding ที่ plasma membrane</b> ${S.mu}</li>
 <li>และสิ่งที่อยู่ข้างใน: <b>envelope หุ้ม capsid ที่บรรจุสำเนา positive-strand RNA genome ที่เหมือนกันสองชุด อยู่ใน core ที่ทึบต่ออิเล็กตรอน</b> ${S.mu}</li>
 <li>enzyme ที่พามาด้วย: <b>virion บรรจุ reverse transcriptase และ integrase 10 ถึง 50 ชุด และ transfer RNA ของ cell สองตัว</b> ${S.mu}</li>
 <li>หน้าที่ของ transfer RNA นั้น: <b>มันจับคู่เบสกับ genome แต่ละชุด เพื่อใช้เป็น primer ของ reverse transcriptase</b> ${S.mu}</li>
 <li>และ<b>รูปร่างของ core ต่างกันใน virus แต่ละตัวและถูกใช้จัดกลุ่ม retrovirus · core ของ HIV virion มีรูปคล้ายกรวยตัดยอด</b> ${S.mu}</li></ul>
 <h3>The glycoprotein spikes</h3><ul>
 <li><b>glycoprotein ของ virus เกิดจากการตัด polyprotein ที่เข้ารหัสด้วย gene env ด้วย protease</b> ${S.mu}</li>
 <li><b>ขนาดของ glycoprotein ต่างกันในแต่ละกลุ่ม — gp62 ของ HTLV-1 ถูกตัดเป็น gp46 กับ p21 และ gp160 ของ HIV ถูกตัดเป็น gp41 กับ gp120</b> ${S.mu}</li>
 <li>และ<b>glycoprotein เหล่านี้รวมเป็น trimer spike ที่มีรูปคล้ายอมยิ้ม ซึ่งเห็นได้บน surface ของ virion</b> ${S.mu}</li></ul>`});

SEC.push({id:"retro-genome",k:"a",t:"gag, pol, env and the long terminal repeat",mm:"Genome",leg:[],
draw:()=>tbl(["Gene","Polyprotein it encodes"],[
 ["gag","group-specific antigen — capsid, matrix และโปรตีนที่จับกรดนิวคลิอิก"],
 ["pol","polymerase, protease และ integrase"],
 ["env","envelope glycoprotein"]]),
notes:()=>`<h3>Simple versus complex</h3><ul>
 <li><b>genome ของ retrovirus ที่เรียบง่ายมี gene หลักสามตัว</b> ${S.mu}</li>
 <li>ที่ปลายทั้งสอง: <b>มี sequence long terminal repeat</b> ${S.mu}</li>
 <li>หน้าที่ของมัน: <b>sequence long terminal repeat บรรจุ promoter, enhancer และ sequence อื่นที่ใช้จับ transcription factor ของ cell หลายชนิด</b> ${S.mu}</li>
 <li>และ<b>virus ที่ก่อ cancer อาจบรรจุ oncogene ที่ส่งเสริมการเติบโตด้วย</b> ${S.mu}</li>
 <li><b>retrovirus ที่ซับซ้อนรวมถึง HTLV, HIV และ lentivirus อื่น แสดงโปรตีนระยะต้นและระยะปลาย และเข้ารหัสโปรตีนที่เพิ่มความรุนแรงหลายตัวซึ่งต้องการการตัดต่อที่ซับซ้อนกว่า</b> ${S.mu}</li></ul>
 <h3>The one difference from picornavirus</h3><ul>
 <li><b>แม้ genome จะเหมือน messenger RNA แต่ต่างจาก genome ของ picornavirus มันไม่ก่อ infection เพราะ reverse transcriptase กับ integrase ที่พามาใน virion จำเป็นต่อ replication</b> ${S.mu}</li></ul>`});

SEC.push({id:"rt-step",k:"b",t:"From RNA to provirus",mm:"Reverse transcriptase",leg:[],
notes:()=>`<h3>Three activities in one enzyme</h3><ul>
 <li>เมื่อ genome ถูกปล่อยเข้า cytoplasm <b>ระยะต้นของ replication เริ่มขึ้น</b> ${S.mu}</li>
 <li><b>reverse transcriptase ซึ่งเข้ารหัสด้วย gene pol ใช้ transfer RNA ใน virion เป็น primer และสร้าง DNA สายลบที่เป็นคู่สม</b> ${S.mu}</li>
 <li>แล้ว<b>reverse transcriptase ยังทำหน้าที่ ribonuclease H ย่อย RNA genome ทิ้ง แล้วสร้าง DNA สายบวก</b> ${S.mu}</li>
 <li>ความสำคัญทางคลินิก: <b>reverse transcriptase เป็นเป้าหลักของยาต้าน virus</b> ${S.mu}</li>
 <li>สิ่งที่เกิดขึ้นระหว่างทาง: <b>ระหว่างการสร้าง DNA ของ virion คือ provirus sequence จากปลายทั้งสองของ genome คือ U3 กับ U5 ถูกทำซ้ำ จึงติด long terminal repeat ไว้ที่ปลายทั้งสองข้าง</b> ${S.mu}</li>
 <li>และนั่นให้สองสิ่ง: <b>sequence ที่จำเป็นต่อการ integrate และ sequence enhancer กับ promoter ใน long terminal repeat สำหรับควบคุมการถอดรหัส</b> ${S.mu}</li>
 <li>ผลข้างเคียงที่สังเกตได้: <b>สำเนา DNA ของ genome ใหญ่กว่า RNA เดิม</b> ${S.mu}</li>
 <li>ชื่อของตัวกลาง: <b>replication ดำเนินผ่านตัวกลางที่เป็น DNA ซึ่งเรียกว่า provirus</b> ${S.mu}</li>
 <li>และ<b>provirus แทรกเข้า chromosome ของ cell อย่างสุ่มและกลายเป็น gene ของ cell</b> ${S.mu}</li></ul>`});

SEC.push({id:"late-phase",k:"b",t:"The provirus behaves like a cellular gene",mm:"Late phase",leg:[],
notes:()=>`<h3>Transcription</h3><ul>
 <li>เมื่อ integrate แล้ว <b>ระยะปลายเริ่มขึ้นและ DNA provirus ถูกถอดรหัสเหมือน gene ของ cell ด้วย RNA polymerase II ของ host</b> ${S.mu}</li>
 <li><b>การถอดรหัส genome ให้ RNA เต็มสาย ซึ่งใน retrovirus ที่เรียบง่ายถูกตัดต่อให้ messenger RNA หลายตัวที่บรรจุ sequence gag, gag-pol หรือ env</b> ${S.mu}</li>
 <li>และ<b>transcript เต็มสายของ genome ยังถูกประกอบเข้า virion ใหม่ได้</b> ${S.mu}</li>
 <li>ข้อที่ตามมาจากการเป็น gene ของ cell: <b>replication ของมันขึ้นกับระดับการเติม methyl ของ DNA ของ virus</b> ${S.mu}</li>
 <li>และสิ่งที่ virus ทำกับ cell: <b>retrovirus ก่อ syncytia</b> ${S.mu}</li>
 <li>ส่วน ability ทาง immunity: <b>มันทำให้การควบคุมทาง immunity เสีย ability และหนีการควบคุมนั้นได้</b> ${S.mu}</li>
 <li>ความต่างที่ใช้แยก oncornavirus จาก HTLV-1: <b>oncornavirus อาจเข้ารหัส oncogene และมี latency สั้นก่อนเกิด cancer ส่วน HTLV-1 ไม่มี oncogene และมี latency ยาวก่อนเกิด leukemia</b> ${S.mu}</li></ul>`});

SEC.push({id:"hiv-entry",k:"c",t:"CD4 first, then a chemokine receptor",mm:"HIV entry",leg:[],
draw:()=>tbl(["","M-tropic virus","T-tropic virus"],[
 ["Co-receptor","CCR5","CXCR4"],
 ["When","infection ครั้งแรก","ภายหลัง เมื่อ gene env กลายพันธุ์ในช่วงที่ติดเชื้อเรื้อรัง"],
 ["Cells it reaches","cell สาย myeloid และ CD4 T cell กลุ่มย่อยที่อยู่รอบนอก, ที่ถูกกระตุ้น, central memory และในลำไส้","CD4 T cell เป็นหลัก"]]),
notes:()=>`<h3>The two-step door</h3><ul>
 <li><b>infection เริ่มจาก glycoprotein spike ซึ่งเป็น trimer ของ gp120 กับ gp41 จับ receptor หลักคือโปรตีน CD4 แล้วจึงจับ receptor ที่สองคือ chemokine receptor ที่เป็น G-protein-coupled ชนิดเจ็ดเกลียวข้าม membrane</b> ${S.mu}</li>
 <li>ความสำคัญ: <b>การจับ receptor ทั้งสองนี้เป็นตัวกำหนดแรกและตัวกำหนดหลักของ tissue tropism และขอบเขต host ของ retrovirus</b> ${S.mu}</li>
 <li>แล้ว<b>การจับ chemokine receptor กระตุ้น cell และดึง envelope ของ virus กับ plasma membrane เข้ามาใกล้กัน จึงให้ gp41 เข้าเชื่อม membrane ทั้งสอง</b> ${S.mu}</li>
 <li>จุดที่ยาออกฤทธิ์: <b>ทั้งการจับ CCR5 และการเชื่อมที่อาศัย gp41 เป็นเป้าของยาต้าน virus</b> ${S.mu}</li>
 <li>และช่องทางเพิ่ม: <b>HIV จับ cellular adhesion molecule คือ α-4 β-7 integrin ได้ด้วย</b> ${S.mu}</li>
 <li>หลักฐานจากคนที่ไม่ติดเชื้อ: <b>ผู้ที่พร่อง CCR5 chemokine receptor ต้านทาน infection HIV</b> ${S.mu}</li></ul>`});

SEC.push({id:"hiv-cells",k:"c",t:"The Trojan horse",mm:"Reservoirs",leg:[],
notes:()=>`<h3>Which cells hold the virus</h3><ul>
 <li><b>ระยะแรกของ infection อาศัย M-tropic virus ที่จับ CD4 และ CCR5 บน dendritic cell และ cell สาย monocyte กับ macrophage อื่น รวมถึง memory T cell, TH1 และ T cell ในลำไส้เป็นส่วนใหญ่ และ CD4 T cell อื่น</b> ${S.mu}</li>
 <li>แหล่งกักเก็บ: <b>macrophage, dendritic cell, memory T cell และ hematopoietic stem cell ติดเชื้อ HIV อย่างคงอยู่ และเป็นแหล่งกักเก็บหลักและเป็นวิธีกระจาย HIV ซึ่งเรียกว่า Trojan horse</b> ${S.mu}</li>
 <li>และ<b>HIV จับ lectin คือ DC-SIGN และคงอยู่บน surface ของ dendritic cell รวมถึง follicular dendritic cell ได้</b> ${S.mu}</li>
 <li>แล้ว<b>CD4 T cell ติดเชื้อได้จาก HIV ที่ติดอยู่กับ cell หรือจากการส่ง virus จาก cell ถึง cell เมื่อจับกับ dendritic cell</b> ${S.mu}</li>
 <li>ปลายทาง: <b>ช่วงท้ายของการดำเนินโรค gene env ที่เข้ารหัส gp120 ของ virus บางส่วนกลายพันธุ์ จึงเปลี่ยน tropism จาก M-tropic เป็น T-tropic</b> ${S.mu}</li></ul>`});

SEC.push({id:"hiv-course",k:"c",t:"From mononucleosis-like illness to AIDS",mm:"Clinical course",leg:[],
draw:()=>tbl(["Marker","Where the disease stands"],[
 ["CD4 T cell ต่ำกว่า 500 ต่อไมโครลิตร","เริ่มมี symptom ร่วมกับ virus ใน blood สูงขึ้นและโปรตีน p24 ใน blood"],
 ["CD4 T cell ต่ำกว่า 200 ต่อไมโครลิตร","AIDS เต็มรูป — มักลงไปถึง 50 ต่อไมโครลิตรหรือวัดไม่ได้"],
 ["Viral load เหนือ 75,000 สำเนาต่อมิลลิลิตร","สอดคล้องกับ AIDS เต็มรูป"]]),
notes:()=>`<h3>The three phases</h3><ul>
 <li><b>AIDS เป็นหนึ่งในการระบาดที่ร้ายแรงที่สุดที่เคยถูกบันทึก</b> ${S.mu}</li>
 <li>และ<b>ผู้ติดเชื้อ HIV ส่วนใหญ่จะมี symptom และส่วนมหาศาลของพวกเขาจะเสียชีวิตจากโรคนี้ถ้าไม่ได้รับการรักษา</b> ${S.mu}</li>
 <li>สิ่งที่ประกอบเป็นโรค: <b>โรคที่สัมพันธ์กับ AIDS ส่วนใหญ่คือ opportunistic infection, cancer และผลโดยตรงของ HIV ต่อ central nervous system</b> ${S.mu}</li>
 <li>ระยะเฉียบพลัน: <b>symptom เริ่มแรก 2 ถึง 4 สัปดาห์หลังติดเชื้ออาจคล้าย influenza หรือคล้าย mononucleosis ที่ heterophile antibody เป็นลบ โดยอาจมี aseptic meningitis หรือ rash ได้ถึง 3 เดือนหลังติดเชื้อ</b> ${S.mu}</li>
 <li>ที่มาของ symptom นั้น: <b>เหมือนใน mononucleosis จาก Epstein-Barr virus — มันมาจากการตอบสนองของ T cell ที่ถูกกระตุ้นจาก infection อย่างกว้างขวางของ antigen-presenting cell คือ macrophage</b> ${S.mu}</li>
 <li>แล้ว<b>symptom เหล่านี้หายไปเองหลัง 2 ถึง 3 สัปดาห์ แล้วตามด้วยช่วงที่ไม่มี symptom หรือมี generalized lymphadenopathy ที่คงอยู่ ซึ่งอาจยาวหลายปี</b> ${S.mu}</li>
 <li>สิ่งที่เกิดขึ้นเงียบ ๆ ในช่วงนั้น: <b>virusreplicate อยู่ใน lymph node</b> ${S.mu}</li>
 <li>และสัญญาณว่า immunity เสื่อม: <b>ความไวต่อ opportunistic pathogen ที่เพิ่มขึ้น</b> ${S.mu}</li></ul>`});

SEC.push({id:"hiv-epi",k:"c",t:"How HIV moves and how it is stopped",mm:"Epidemiology",leg:[],
draw:()=>tbl(["Route","Specific transmission"],[
 ["Inoculation in blood","การให้ blood และผลิตภัณฑ์ blood · การใช้เข็มร่วมกันในผู้ใช้ยาเสพติดทางหลอด blood · การถูกเข็มตำ แผลเปิดและการสัมผัส mucous membrane ในบุคลากรสุขภาพ · เข็มสัก"],
 ["Sexual transmission","anal และ vaginal intercourse"],
 ["Perinatal transmission","ใน utero · ช่วงคลอด · breast milk"]]),
notes:()=>`<h3>Viral factors that shape the epidemic</h3><ul>
 <li><b>เป็น virus ที่มี envelope จึงถูกทำให้หมดฤทธิ์ได้ง่าย และต้องถูกส่งผ่านในสารน้ำของร่างกาย</b> ${S.mu}</li>
 <li>และสองข้อที่ทำให้คุมยาก: <b>โรคมีระยะก่อน symptom ที่ยาว และ virus ถูกปล่อยออกได้ก่อนที่จะมี symptom ที่ระบุได้</b> ${S.mu}</li>
 <li>ที่พบ virus: <b>ใน blood, semen และ secretion จากช่องคลอด</b> ${S.mu}</li>
 <li>กลุ่มเสี่ยง: <b>ผู้ใช้ยาเสพติดทางหลอด blood, ผู้ที่มีคู่นอนหลายคน, ผู้ขายบริการ, infant ของ mother ที่ติดเชื้อ และคู่นอนของผู้ติดเชื้อ</b> ${S.mu}</li>
 <li>และกลุ่มในอดีต: <b>ผู้รับ blood และผู้รับการ transplant อวัยวะ กับผู้ป่วย hemophilia ที่ได้รับการรักษาก่อนปี 1985 ซึ่งเป็นก่อนมีโปรแกรม screening</b> ${S.mu}</li>
 <li>การกระจาย: <b>เป็นการระบาดที่ขยายตัวทั่วโลก และไม่มีความชุกตามฤดูกาล</b> ${S.mu}</li>
 <li>การควบคุม: <b>ยาต้าน virus จำกัดการดำเนินของโรค และใช้เป็นการป้องกันทั้งก่อนและหลังสัมผัส</b> ${S.mu}</li>
 <li>และ<b>ยังไม่มี vaccine</b> ${S.mu}</li>
 <li>มาตรการอื่น: <b>เพศสัมพันธ์ที่ปลอดภัยและมีคู่คนเดียว, การใช้เข็มที่ปลอดเชื้อ, การขริบ และโปรแกรม screening ขนาดใหญ่ของ blood สำหรับการให้ blood อวัยวะสำหรับการ transplant และ clotting factor ที่ผู้ป่วย hemophilia ใช้</b> ${S.mu}</li>
 <li>การวินิจฉัย: <b>RT-PCR และ ELISA</b> · และ<b>การ screening เริ่มต้นใช้ ELISA ที่ตรวจทั้ง antigen และ antibody, latex agglutination, การตรวจ antibody ในช่องปากแบบเร็ว และการตรวจ antibody ในปัสสาวะ</b> ${S.mu}</li>
 <li>การรักษา: <b>nucleoside analog, protease inhibitor และยาต้าน virus อื่น</b> ${S.mu}</li>
 <li>และ<b>จำนวนยาและสูตรผสมที่ได้รับการรับรองเพิ่มขึ้นจนปรับสูตรให้เหมาะกับแต่ละคนได้ เพื่อให้ได้ผลสูงสุดและจำกัดผลข้างเคียง · ยาต้าน HIV ที่ได้รับการรับรองถูกจัดกลุ่มตามกลไกการออกฤทธิ์</b> ${S.mu}</li></ul>`});

SEC.push({id:"htlv",k:"d",t:"HTLV-1 and the flower cell",mm:"HTLV",leg:[],
notes()
{return`<h3>Adult T-cell leukemia and lymphoma</h3><ul>
 <li><b>HTLV ก่อ acute T-cell lymphocytic leukemia และ tropical spastic paraparesis</b> ${S.mu}</li>
 <li>cell ที่เป็น cancer: <b>เป็น CD4 helper T cell และโรคเป็นได้ทั้งเฉียบพลันและเรื้อรัง</b> ${S.mu}</li>
 <li>ที่มาของชื่อ: <b>cellcancer ถูกเรียกว่า flower cell เพราะมันมีรูปร่างหลากหลายและมี nucleus ที่เป็นพู</b> ${S.mu}</li>
 <li>และ<b>นอกจาก white blood cell ที่สูงขึ้น adult T-cell leukemia and lymphoma รูปนี้มีรอยโรคที่ skin คล้ายที่พบใน Sézary syndrome</b> ${S.mu}</li>
 <li>การพยากรณ์โรค: <b>มักเสียชีวิตภายในหนึ่งปีหลังวินิจฉัย ไม่ว่าจะรักษาอย่างไร</b> ${S.mu}</li></ul>
 <h3>The neurologic disease</h3><ul>
 <li><b>HTLV-1 ยังก่อ HTLV-1-associated myelopathy ซึ่งคือ tropical spastic paraparesis และเป็นโรคทางระบบประสาทที่ไม่ใช่ cancer</b> ${S.mu}</li>
 <li>และ<b>HTLV-1-associated myelopathy นำไปสู่การเสื่อมของ myelin ที่ spinal cord และเกิดอัมพาต</b> ${S.mu}</li>
 <li>โรคอื่น: <b>uveitis, HTLV-associated infectious dermatitis และความผิดปกติที่มี inflammation อื่น</b> ${S.mu}</li>
 <li>และ<b>infection HTLV ยังกด immunity</b> ${S.mu}</li>
 <li>ส่วนตัวที่สอง: <b>HTLV-2 ไม่น่าจะก่อ leukemia แต่อาจก่อโรคทางระบบประสาทเช่น HTLV-1-associated myelopathy</b> ${S.mu}</li></ul>
 <h3>Treatment and control</h3><ul>
 <li><b>การใช้ zidovudine ร่วมกับ interferon-α ได้ผลในผู้ป่วย adult T-cell leukemia and lymphoma บางราย แต่ยังไม่มีการรักษาใดได้รับการรับรองสำหรับการจัดการ infection HTLV-1</b> ${S.mu}</li>
 <li>และ<b>มาตรการจำกัดการแพร่ของ HTLV-1 เหมือนกับของ HIV — การป้องกันทางเพศ, การ screeningblood และการรับรู้ความเสี่ยงที่เพิ่มขึ้น</b> ${S.mu}</li>
 <li>สิ่งที่ screening เป็นประจำเพื่อปกป้อง blood ที่ใช้: <b>HTLV-1, HIV, hepatitis B virus และ hepatitis C virus</b> ${S.mu}</li>
 <li>และข้อที่ยังทำได้ยาก: <b>การควบคุม infection จาก mother สู่บุตรยากมาก</b> ${S.mu}</li></ul>`}});

SEC.push({id:"herv",k:"d",t:"The retroviruses already in our chromosomes",mm:"Endogenous",leg:[],
notes:()=>`<h3>Eight per cent</h3><ul>
 <li><b>endogenous retrovirus เป็นปรสิตที่สมบูรณ์แบบที่สุด — มันแทรกอยู่แล้ว ถูกส่งต่อในแนวดิ่ง และอาจกินพื้นที่ถึง 8% ของ chromosome ของคน</b> ${S.mu}</li>
 <li>และ<b>แม้มันอาจไม่สร้าง virion มันก็ยังอาจมีส่วนหรือมีอิทธิพลต่อการทำงานของร่างกาย</b> ${S.mu}</li>
 <li>สิ่งที่ตรวจพบได้ในคน: <b>sequence provirus ทั้งที่สมบูรณ์และบางส่วน ซึ่งมี sequence gene คล้ายของ HTLV, mouse mammary tumor virus และ retrovirus อื่น</b> ${S.mu}</li>
 <li>เหตุที่มัน replicate ไม่ได้: <b>มันมักขาด ability นั้นเพราะมีการขาดหายของ sequence หรือมี termination codon แทรกเข้าไป หรือเพราะมันถูกถอดรหัสได้ไม่ดี</b> ${S.mu}</li>
 <li>และสิ่งที่ cell เราทำกับมัน: <b>cell ของเราแสดงโปรตีนเช่น apolipoprotein B editing catalytic protein เพื่อกด replication ของ endogenous retrovirus</b> ${S.mu}</li>
 <li>ตัวอย่างที่เป็นประโยชน์: <b>retrovirus ตัวหนึ่งตรวจพบได้ใน placenta และถูกกระตุ้นด้วยการตั้งครรภ์ · มันสร้าง syncytin ซึ่งจำเป็นต่อการทำงานของ placenta</b> ${S.mu}</li>
 <li>และตัวอื่น: <b>human endogenous retrovirus อื่นสัมพันธ์กับ cancer prostate และ cancer อื่น, multiple sclerosis และ amyotrophic lateral sclerosis</b> ${S.mu}</li>
 <li>สิ่งที่ retrovirus ให้กลับแก่วิทยาศาสตร์: <b>มันให้เครื่องมือสำคัญแก่อณูชีววิทยาคือ enzyme reverse transcriptase และผ่านการศึกษา oncogene ของ virus ก็ให้วิธีเข้าใจการเติบโต การเปลี่ยนสภาพและการเกิด cancer ของ cell</b> ${S.mu}</li></ul>`});

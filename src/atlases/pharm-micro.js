/* ================= Antimicrobials ================= */
function bactMap(){let b="";const row=(x,y,lab,key)=>glow(x,y,key)+rec(x,y,"",true)+T(x+16,y+4,lab,{a:"start",c:"s"});
 b+=panel(10,10,740,420,"BACTERIAL CELL");
 b+=row(36,58,"PBP","pbp")+pill(330,58,"Penicillins · Cephalosporins · Carbapenems","inh","pbp");
 b+=row(36,96,"D-Ala-D-Ala (cell wall precursor)","daa")+pill(300,96,"Vancomycin","bl","daa");
 b+=row(36,134,"Cell membrane","mem")+pill(300,134,"Daptomycin · Polymyxins","mod","mem");
 b+=row(36,184,"30S ribosome","r30")+pill(290,172,"Aminoglycosides","inh","r30")+pill(290,198,"Tetracyclines · Tigecycline","inh","r30t");
 b+=row(36,248,"50S ribosome","r50")+pill(300,236,"Macrolides · Clindamycin","inh","r50")+pill(300,262,"Linezolid · Chloramphenicol","inh","r50l");
 b+=row(36,312,"DNA gyrase / topo IV","gyr")+pill(300,312,"Fluoroquinolones","inh","gyr");
 b+=row(36,350,"DNA (free radicals)","dna")+pill(300,350,"Metronidazole","mod","dna");
 b+=row(36,388,"RNA polymerase","rnap")+pill(300,388,"Rifampin","inh","rnap");
 b+=row(470,96,"Folate: dihydropteroate synthase","dhps")+pill(640,128,"Sulfonamides · Dapsone","inh","dhps");
 b+=row(470,184,"Folate: dihydrofolate reductase","dhfr")+pill(640,216,"Trimethoprim · Pyrimethamine","inh","dhfr");
 b+=row(470,280,"Mycolic acid synthesis","myc")+pill(640,312,"Isoniazid","inh","myc");
 b+=row(470,360,"Arabinogalactan","arab")+pill(640,392,"Ethambutol","inh","arab");
 if(on("r30t"))b+=glow(36,184,"r30t");if(on("r50l"))b+=glow(36,248,"r50l");
 return psvg(b,"0 0 760 440")}
function fungMap(){let b="";const row=(x,y,lab,key)=>glow(x,y,key)+rec(x,y,"",true)+T(x+16,y+4,lab,{a:"start",c:"s"});
 b+=panel(10,10,740,230,"FUNGAL CELL");
 b+=row(36,58,"Ergosterol","erg")+pill(300,58,"Amphotericin B · Nystatin","bl","erg");
 b+=row(36,96,"Lanosterol 14α-demethylase","azole")+pill(300,96,"Azoles (-conazole)","inh","azole");
 b+=row(36,134,"Squalene epoxidase","sq")+pill(300,134,"Terbinafine","inh","sq");
 b+=row(36,172,"β-glucan synthase (wall)","glu")+pill(300,172,"Echinocandins (-fungin)","inh","glu");
 b+=row(36,210,"Nucleic acid (5-FU)","fc")+pill(300,210,"Flucytosine","inh","fc");
 b+=row(470,96,"Microtubules (keratin)","mt")+pill(640,134,"Griseofulvin","inh","mt");
 return psvg(b,"0 0 760 250")}
function virMap(){let b="";const row=(x,y,lab,key)=>glow(x,y,key)+rec(x,y,"",true)+T(x+16,y+4,lab,{a:"start",c:"s"});
 b+=panel(10,10,370,320,"HIV LIFE CYCLE");
 b+=row(36,58,"CCR5 attachment","ccr5")+pill(260,58,"Maraviroc","bl","ccr5");
 b+=row(36,96,"gp41 fusion","gp41")+pill(260,96,"Enfuvirtide","bl","gp41");
 b+=row(36,134,"Reverse transcriptase","rt")+pill(260,122,"NRTIs","inh","rt")+pill(260,148,"NNRTIs","inh","rtn");
 b+=row(36,186,"Integrase","int")+pill(260,186,"INSTIs (-tegravir)","inh","int");
 b+=row(36,224,"Protease","pro")+pill(260,224,"PIs (-navir)","inh","pro");
 b+=row(36,262,"Capsid","cap")+pill(260,262,"Lenacapavir","inh","cap");
 b+=panel(390,10,360,320,"OTHER VIRUSES");
 b+=row(416,58,"Neuraminidase","na")+pill(640,58,"Oseltamivir · Zanamivir","inh","na");
 b+=row(416,96,"Endonuclease (flu)","cap2")+pill(640,96,"Baloxavir","inh","cap2");
 b+=row(416,134,"HSV DNA pol","pol")+pill(640,134,"Acyclovir · Valacyclovir","inh","pol");
 b+=row(416,172,"CMV DNA pol","cmv")+pill(640,172,"Ganciclovir · Foscarnet","inh","cmv");
 b+=row(416,224,"HCV NS5B/5A/3","hcv")+pill(640,212,"Sofosbuvir","inh","hcv")+pill(640,238,"-asvir · -previr","inh","hcv");
 b+=row(416,286,"HBV polymerase","hbv")+pill(640,286,"Tenofovir · Entecavir","inh","hbv");
 if(on("rtn"))b+=glow(36,134,"rtn");
 return psvg(b,"0 0 760 340")}
const BM=MAPOF(bactMap),FM=MAPOF(fungMap),VM=MAPOF(virMap),MT=[["all","Show all drugs"]];

Object.assign(GN,{a:"Cell wall & membrane",b:"Protein synthesis inhibitors",c:"Nucleic acid & folate",d:"Antimycobacterials & prophylaxis",e:"Antifungals",f:"Antiparasitics",g:"Antivirals"});

SEC.push({id:"bactmap",k:"a",t:"Antibacterial therapy: drug targets",mm:"Bacterial target map",drugs:"",act:[],tools:MT,leg:["inh","bl","mod"],draw:BM(["pbp","daa","mem","r30","r30t","r50","r50l","gyr","dna","rnap","dhps","dhfr","myc","arab"]),
notes:()=>`<h3>Bactericidal vs bacteriostatic</h3><ul><li><b>Bactericidal</b>: β-lactams, vancomycin, daptomycin, aminoglycosides, fluoroquinolones, metronidazole, rifampin, TMP-SMX ร่วมกัน ${S.k}</li><li><b>Bacteriostatic</b>: tetracyclines, macrolides, clindamycin, linezolid (ต่อ staph), chloramphenicol, sulfonamide/TMP เดี่ยว ${S.k}</li></ul>
 <h3>PK/PD</h3><ul><li><b>Time-dependent</b>: β-lactams, vancomycin → ให้ระดับเกิน MIC นาน ${S.k}</li><li><b>Concentration-dependent</b>: aminoglycosides, fluoroquinolones, daptomycin → peak สูง · มี <b>post-antibiotic effect</b> → ให้วันละครั้งได้ ${S.k}</li></ul>`});

SEC.push({id:"penicillin",k:"a",t:"Penicillins & β-lactamase inhibitors",mm:"Penicillins",drugs:"penicillin G · amoxicillin · ampicillin · nafcillin · dicloxacillin · piperacillin/tazobactam",act:["inh"],tools:MT,leg:["inh"],draw:BM(["pbp"]),
notes:()=>`<h3>กลไก</h3><ul><li>จับ <b>PBP (transpeptidase)</b> → ยับยั้ง cross-link ของ peptidoglycan · กระตุ้น autolysin → bactericidal ${S.k}</li></ul>
 ${tbl(["กลุ่ม","ยา","ครอบคลุม"],[["Natural","penicillin G (IV/IM), V (oral), benzathine","Gram⁺ cocci/rods, <b>syphilis</b>, Neisseria meningitidis, Actinomyces · ถูก β-lactamase ทำลาย"],["Aminopenicillins","amoxicillin, ampicillin","+ Gram⁻ บางตัว: H. influenzae, E. coli, Listeria, Proteus, Salmonella, enterococci (HELPSS)"],["Penicillinase-resistant","nafcillin, oxacillin, dicloxacillin","<b>MSSA</b> (bulky R group) · ไม่ครอบคลุม MRSA"],["Antipseudomonal","piperacillin (± tazobactam)","Pseudomonas, Gram⁻ rods"],["β-lactamase inhibitors","clavulanate, sulbactam, tazobactam, avibactam","ป้องกันการทำลาย"]])}${S.k}
 <h3>ADR</h3><ul><li>Hypersensitivity (IgE anaphylaxis, rash), hemolytic anemia, <b>interstitial nephritis</b> (nafcillin, methicillin) · amoxicillin + EBV → rash ${S.k}</li><li>Resistance: β-lactamase, PBP เปลี่ยน (MRSA: PBP2a, S. pneumoniae) ${S.k}</li></ul>`});

SEC.push({id:"ceph",k:"a",t:"Cephalosporins, carbapenems & aztreonam",mm:"Cephalosporins · carbapenems · aztreonam",drugs:"cefazolin · cephalexin · cefoxitin · ceftriaxone · ceftazidime · cefepime · ceftaroline · imipenem · meropenem · aztreonam",act:["inh"],tools:MT,leg:["inh"],draw:BM(["pbp"]),
notes:()=>`${tbl(["Generation","ยา","ครอบคลุม · ใช้"],[["1st","cefazolin, cephalexin","Gram⁺ + PEcK (Proteus, E. coli, Klebsiella) · <b>surgical prophylaxis</b>"],["2nd","cefoxitin, cefuroxime, cefaclor","+ HENS PEcK (H. influenzae, Enterobacter, Neisseria, Serratia) · cefoxitin: anaerobe"],["3rd","ceftriaxone, cefotaxime, ceftazidime","Gram⁻ ดื้อยา · ceftriaxone: meningitis, gonorrhea, Lyme ระยะเผยแพร่ · ceftazidime: Pseudomonas"],["4th","cefepime","Gram⁻ รวม Pseudomonas + Gram⁺"],["5th","ceftaroline","<b>MRSA</b> + Gram⁻ (ไม่ครอบคลุม Pseudomonas)"]])}${S.k}
 <ul><li>ไม่ครอบคลุม <b>LAME</b>: Listeria, atypicals, MRSA (ยกเว้น ceftaroline), enterococci ${S.k}</li><li>ADR: hypersensitivity (cross-reactivity กับ penicillin ต่ำ), vitamin K deficiency, disulfiram-like (บางตัว), ceftriaxone: biliary sludge ${S.k}</li></ul>
 <h3>Carbapenems</h3><ul><li>Imipenem (+ <b>cilastatin</b> ยับยั้ง renal dehydropeptidase), meropenem, ertapenem (ไม่ครอบคลุม Pseudomonas) · spectrum กว้างมาก ${S.k}</li><li>ADR: <b>ชัก</b> (imipenem มากกว่า), GI, rash ${S.k}</li></ul>
 <h3>Aztreonam</h3><ul><li>Monobactam จับ PBP3 · <b>Gram⁻ rods เท่านั้น</b> รวม Pseudomonas · ใช้ในคนแพ้ penicillin, ไตวาย (ไม่ nephrotoxic) ${S.k}</li></ul>`});

SEC.push({id:"vanco",k:"a",t:"Vancomycin, daptomycin & polymyxins",mm:"Vancomycin · daptomycin · polymyxins",drugs:"vancomycin · daptomycin · polymyxin B · colistin",act:["bl","mod"],tools:MT,leg:["bl","mod"],draw:BM(["daa","mem"]),
notes:()=>`<h3>Vancomycin</h3><ul><li>จับ <b>D-Ala-D-Ala</b> ของ cell wall precursor → ยับยั้ง polymerization · Gram⁺ เท่านั้น ${S.k}</li><li>ใช้: <b>MRSA</b>, S. epidermidis, enterococcus · oral (ไม่ดูดซึม) สำหรับ <b>C. difficile</b> ${S.k}</li><li>ADR: nephrotoxicity, ototoxicity, thrombophlebitis, DRESS · <b>vancomycin infusion reaction</b> (หน้าแดง histamine; ให้ช้า + antihistamine) ${S.k}</li><li>Resistance: D-Ala-D-Ala → <b>D-Ala-D-Lac</b> (VRE) ${S.k}</li></ul>
 <h3>Daptomycin</h3><ul><li>Lipopeptide แทรก cell membrane → depolarize · Gram⁺ (MRSA, VRE) · S. aureus bacteremia, endocarditis ${S.k}</li><li><b>ไม่ใช้รักษา pneumonia</b> (surfactant inactivate) · ADR: myopathy, CPK ↑ ${S.k}</li></ul>
 <h3>Polymyxins</h3><ul><li>Polymyxin B, colistin (E): cationic detergent ทำลาย membrane Gram⁻ · salvage สำหรับ MDR Gram⁻ ${S.k}</li><li>ADR: <b>nephrotoxicity</b>, neurotoxicity, respiratory arrest ${S.k}</li></ul>`});

SEC.push({id:"aminogly",k:"b",t:"Aminoglycosides",mm:"Aminoglycosides",drugs:"gentamicin · tobramycin · amikacin · streptomycin · neomycin",act:["inh"],tools:MT,leg:["inh"],draw:BM(["r30"]),
notes:()=>`<ul><li>จับ <b>30S</b> → ยับยั้ง initiation complex, อ่าน mRNA ผิด → bactericidal ${S.k}</li><li>ต้องใช้ O₂ เข้าเซลล์ → <b>ไม่ได้ผลกับ anaerobe</b> ${S.k}</li><li>ใช้: severe Gram⁻ rods · synergy กับ β-lactam (enterococcus endocarditis) · neomycin: bowel prep ${S.k}</li><li>Concentration-dependent + post-antibiotic effect → <b>วันละครั้ง</b> ลด nephrotoxicity ${S.k}${S.p}</li></ul>
 <h3>ADR</h3><ul><li><b>Nephrotoxicity</b> (ATN) · <b>ototoxicity</b> (โดยเฉพาะร่วม loop) · <b>neuromuscular blockade</b> (ระวังใน myasthenia) · teratogen ${S.k}</li></ul>`});

SEC.push({id:"tetra",k:"b",t:"Tetracyclines & tigecycline",mm:"Tetracyclines",drugs:"doxycycline · minocycline · tetracycline · tigecycline",act:["inh"],tools:MT,leg:["inh"],draw:BM(["r30t"]),
notes:()=>`<ul><li>จับ <b>30S</b> → บล็อก aminoacyl-tRNA เข้ามา → bacteriostatic ${S.k}</li><li>ใช้: <b>Borrelia</b> (Lyme), <b>Rickettsia</b>, Mycoplasma, Chlamydia, acne, community MRSA · doxycycline ขับทางอุจจาระ (ใช้ในไตวายได้) ${S.k}</li><li>ห้ามกินกับ <b>นม antacid iron</b> (divalent cation chelate) ${S.k}</li><li>ADR: GI, <b>ฟันเปลี่ยนสีและกระดูกโตช้าในเด็ก</b> (ห้ามในครรภ์และเด็ก &lt;8 ปี), <b>photosensitivity</b>, pill esophagitis, pseudotumor cerebri ${S.k}</li><li><b>Tigecycline</b>: glycylcycline ครอบคลุมกว้าง (MRSA, VRE, MDR Gram⁻) · ADR: GI ${S.k}</li></ul>`});

SEC.push({id:"macro",k:"b",t:"Macrolides & clindamycin",mm:"Macrolides · clindamycin",drugs:"azithromycin · clarithromycin · erythromycin · clindamycin",act:["inh"],tools:MT,leg:["inh"],draw:BM(["r50"]),
notes:()=>`<h3>Macrolides</h3><ul><li>จับ <b>23S rRNA ของ 50S</b> → บล็อก translocation → bacteriostatic ${S.k}</li><li>ใช้: atypical pneumonia (Mycoplasma, Chlamydophila, Legionella), STI (Chlamydia), Gram⁺ cocci ในคนแพ้ penicillin, B. pertussis, MAC prophylaxis ${S.k}</li><li>ADR: GI motility ↑ (erythromycin ใช้ใน gastroparesis), <b>QT ยาว</b>, cholestatic hepatitis, eosinophilia · clarithromycin, erythromycin = <b>CYP3A4 inhibitor</b> ${S.k}</li></ul>
 <h3>Clindamycin</h3><ul><li>จับ 50S · ใช้: <b>anaerobe เหนือกระบังลม</b> (aspiration pneumonia, lung abscess), invasive GAS (ลด toxin), MRSA ผิวหนัง ${S.k}</li><li>ADR: <b>C. difficile colitis</b> ${S.k}</li></ul>`});

SEC.push({id:"linezolid",k:"b",t:"Linezolid & chloramphenicol",mm:"Linezolid · chloramphenicol",drugs:"linezolid · tedizolid · chloramphenicol",act:["inh"],tools:MT,leg:["inh"],draw:BM(["r50l"]),
notes:()=>`<h3>Linezolid</h3><ul><li>จับ 50S ยับยั้ง initiation complex · Gram⁺ รวม <b>MRSA, VRE</b> ${S.k}</li><li>ADR: <b>myelosuppression</b> (thrombocytopenia), peripheral/optic neuropathy, lactic acidosis · <b>serotonin syndrome</b> (MAO inhibitor อ่อน) ร่วม SSRI ${S.k}</li></ul>
 <h3>Chloramphenicol</h3><ul><li>ยับยั้ง 50S peptidyltransferase · meningitis (H. influenzae, N. meningitidis, S. pneumoniae), RMSF ในประเทศที่ทรัพยากรจำกัด ${S.k}</li><li>ADR: <b>anemia</b> (dose-dependent), <b>aplastic anemia</b> (dose-independent), <b>gray baby syndrome</b> (ทารกขาด UDP-glucuronosyltransferase) ${S.k}</li></ul>`});

SEC.push({id:"folate",k:"c",t:"Sulfonamides, dapsone & trimethoprim",mm:"Sulfa · dapsone · TMP",drugs:"sulfamethoxazole · sulfadiazine · dapsone · trimethoprim",act:["inh"],tools:MT,leg:["inh"],draw:BM(["dhps","dhfr"]),
notes:()=>`<ul><li><b>Sulfonamides</b> ยับยั้ง dihydropteroate synthase (PABA analog) · <b>trimethoprim</b> ยับยั้ง bacterial DHFR · ร่วมกัน (TMP-SMX) = sequential block → bactericidal ${S.k}</li></ul>
 <h3>ใช้ (TMP-SMX)</h3><ul><li>UTI, <b>PCP</b> (รักษาและป้องกัน), Toxoplasma prophylaxis, Shigella, Salmonella, community MRSA ผิวหนัง, Nocardia ${S.k}</li><li>Dapsone: leprosy, PCP prophylaxis, dermatitis herpetiformis ${S.k}</li></ul>
 <h3>ADR</h3><ul><li>Sulfa: hypersensitivity, <b>SJS/TEN</b>, <b>hemolysis ใน G6PD</b>, nephrotoxicity (tubulointerstitial nephritis), photosensitivity, kernicterus ในทารก, ยับยั้ง CYP2C9 (warfarin) ${S.k}</li><li>TMP: megaloblastic anemia, leukopenia (ให้ leucovorin), <b>hyperkalemia</b> (บล็อก ENaC เหมือน amiloride), creatinine ↑ ${S.k}</li><li>Dapsone: hemolysis, methemoglobinemia ${S.k}</li></ul>`});

SEC.push({id:"fq",k:"c",t:"Fluoroquinolones & metronidazole",mm:"Fluoroquinolones · metronidazole",drugs:"ciprofloxacin · levofloxacin · moxifloxacin · metronidazole",act:["inh","mod"],tools:MT,leg:["inh","mod"],draw:BM(["gyr","dna"]),
notes:()=>`<h3>Fluoroquinolones</h3><ul><li>ยับยั้ง <b>DNA gyrase (topo II)</b> และ <b>topo IV</b> → bactericidal ${S.k}</li><li>Cipro: Gram⁻ รวม Pseudomonas, UTI · levo/moxifloxacin ("respiratory FQ"): + Gram⁺, atypicals ${S.k}</li><li>ADR: GI, superinfection · <b>tendinopathy/tendon rupture</b> (อายุ &gt;60, steroid), cartilage ในเด็ก · <b>QT ยาว</b> · aortic aneurysm/dissection · neuropathy, CNS · dysglycemia ${S.k}</li><li>อย่ากินร่วม divalent cation ${S.k}</li></ul>
 <h3>Metronidazole</h3><ul><li>สร้าง free radical ทำลาย DNA · bactericidal, antiprotozoal ${S.k}</li><li>ใช้: <b>Giardia, Entamoeba, Trichomonas</b>, bacterial vaginosis (Gardnerella), anaerobe <b>ใต้กระบังลม</b> (B. fragilis), C. difficile, H. pylori ${S.k}</li><li>ADR: <b>disulfiram-like</b> กับ alcohol, รสโลหะ, peripheral neuropathy ${S.k}</li></ul>`});

SEC.push({id:"tb",k:"d",t:"Antimycobacterial therapy",mm:"Antituberculous drugs",drugs:"isoniazid · rifampin · pyrazinamide · ethambutol · rifabutin · azithromycin",act:["inh"],tools:MT,leg:["inh"],draw:BM(["myc","rnap","arab"]),
notes:()=>`${tbl(["ยา","กลไก","ADR เด่น"],[["Rifampin (rifamycins)","ยับยั้ง DNA-dependent RNA polymerase","<b>CYP inducer</b> แรง · ของเหลวสีส้มแดง · hepatotoxic · ดื้อเร็วถ้าใช้เดี่ยว"],["Isoniazid","ลดการสร้าง mycolic acid (ต้องผ่าน KatG)","<b>hepatotoxicity</b>, <b>peripheral neuropathy</b> (ให้ <b>pyridoxine B6</b>), drug-induced lupus, sideroblastic anemia · slow acetylator เสี่ยงมากกว่า"],["Pyrazinamide","ไม่ชัด (ทำงานใน pH กรดของ phagolysosome)","<b>hyperuricemia</b>, hepatotoxic"],["Ethambutol","ยับยั้ง arabinosyltransferase","<b>optic neuropathy</b> (red-green color blindness)"],["Streptomycin","30S","ototoxic, nephrotoxic"]])}${S.k}
 <h3>Regimen</h3><ul><li>Active TB: <b>RIPE</b> 2 เดือน → isoniazid + rifampin อีก 4 เดือน ${S.k}${S.p}</li><li>Latent TB: isoniazid 6–9 เดือน, rifampin 4 เดือน หรือ isoniazid + rifapentine ${S.k}</li><li>MAC: azithromycin หรือ clarithromycin + ethambutol (+ rifabutin) · leprosy: dapsone + rifampin (± clofazimine) ${S.k}</li></ul>`});

SEC.push({id:"prophylaxis",k:"d",t:"Antimicrobial prophylaxis",mm:"Prophylaxis",drugs:"",act:[],leg:[],
draw:()=>cards([["Surgical (ส่วนใหญ่)","cefazolin ก่อนลงมีด","vn"],["Meningococcal contact","ceftriaxone, ciprofloxacin หรือ rifampin","gl"],["Endocarditis (dental, high-risk)","amoxicillin","gl"],["Rheumatic fever ซ้ำ","benzathine penicillin G",""],["Gonococcal ophthalmia (ทารก)","erythromycin ointment",""],["HIV: CD4 <200 / <100 / <50","TMP-SMX (PCP) · TMP-SMX (Toxo) · azithromycin (MAC)","ar"]]),
notes:()=>`<ul><li>Surgical prophylaxis ให้ภายใน 60 นาทีก่อนลงมีด ${S.k}</li><li>HIV: CD4 &lt;200 → PCP · &lt;100 + Toxo IgG⁺ → TMP-SMX · MAC prophylaxis ไม่จำเป็นถ้าเริ่ม ART ทันที ${S.k}</li><li>Recurrent UTI: TMP-SMX หรือ nitrofurantoin ${S.k}</li></ul>`});

SEC.push({id:"fungmap",k:"e",t:"Antifungal therapy",mm:"Antifungal drugs",drugs:"amphotericin B · nystatin · fluconazole · voriconazole · itraconazole · terbinafine · caspofungin · flucytosine · griseofulvin",act:["bl","inh"],tools:MT,leg:["bl","inh"],draw:FM(["erg","azole","sq","glu","fc","mt"]),
notes:()=>`${tbl(["ยา","กลไก","ใช้","ADR"],[["Amphotericin B","จับ <b>ergosterol</b> → pore","systemic mycoses รุนแรง, Cryptococcus (+flucytosine), mucormycosis","<b>nephrotoxicity</b> (ให้ NS, lipid form), hypo-K/Mg, ไข้หนาวสั่น, arrhythmia"],["Nystatin","เหมือนกัน (topical)","oral thrush, cutaneous candida",""],["Azoles","ยับยั้ง 14α-demethylase → ergosterol ↓","fluconazole: Cryptococcal meningitis maintenance, Candida · voriconazole: <b>Aspergillus</b> · itraconazole: dimorphic","<b>CYP3A4 inhibitor</b>, hepatotoxic, QT · ketoconazole: gynecomastia · voriconazole: visual"],["Echinocandins","ยับยั้ง β-glucan synthesis","invasive Candida, Aspergillus","histamine flushing, GI"],["Terbinafine","ยับยั้ง squalene epoxidase","<b>onychomycosis</b>, dermatophytes","hepatotoxic, taste disturbance"],["Flucytosine","→ 5-FU ในเชื้อ","Cryptococcal meningitis (+ amphotericin)","myelosuppression"],["Griseofulvin","จับ microtubule · สะสมใน keratin","tinea capitis","teratogen, CYP inducer, disulfiram-like"]])}${S.k}`});

SEC.push({id:"antiparasite",k:"f",t:"Antiprotozoal & antihelminthic drugs",mm:"Antiparasitics",drugs:"pyrimethamine · nifurtimox · benznidazole · sodium stibogluconate · permethrin · ivermectin · albendazole · praziquantel",act:["inh","mod"],leg:[],
draw:()=>cards([["Toxoplasma","pyrimethamine + sulfadiazine + leucovorin","vn"],["Chagas · African trypanosomiasis","benznidazole, nifurtimox · suramin, melarsoprol","gl"],["Leishmaniasis","sodium stibogluconate, amphotericin B, miltefosine","gl"],["Scabies · lice","permethrin, malathion, ivermectin (oral)",""],["Nematodes","albendazole, mebendazole (microtubule) · ivermectin (Strongyloides, Onchocerca) · pyrantel","ar"],["Cestodes · trematodes","praziquantel (Ca²⁺ ↑ → paralysis) · albendazole (neurocysticercosis)","ar"]]),
notes:()=>`<ul><li>Albendazole/mebendazole: ยับยั้ง microtubule polymerization · teratogen ${S.k}</li><li>Ivermectin: เปิด glutamate-gated Cl⁻ channel ของพยาธิ ${S.k}</li><li>Pyrantel: depolarizing NM blocker ของพยาธิ ${S.k}</li><li>Praziquantel: schistosomiasis, tapeworm, flukes ${S.k}</li></ul>`});

SEC.push({id:"malaria",k:"f",t:"Antimalarials",mm:"Antimalarials",drugs:"chloroquine · mefloquine · atovaquone-proguanil · primaquine · artemether-lumefantrine · quinidine",act:["inh"],leg:[],
draw:()=>cards([["Chloroquine · hydroxychloroquine","ยับยั้ง heme polymerase · P. falciparum ส่วนใหญ่ดื้อแล้ว","vn"],["Artemisinins (artemether, artesunate)","free radical · ใช้ใน P. falciparum (severe: IV artesunate)","gl"],["Atovaquone-proguanil · mefloquine","prophylaxis และรักษา · mefloquine: neuropsychiatric","gl"],["Primaquine · tafenoquine","กำจัด hypnozoite ของ P. vivax/ovale · ตรวจ G6PD ก่อน","ar"],["Quinine/quinidine","severe malaria (เดิม) · cinchonism, QT",""]]),
notes:()=>`<ul><li>Chloroquine ADR: retinopathy, pruritus ${S.k}</li><li>Primaquine: <b>hemolysis ใน G6PD deficiency</b> ${S.k}</li><li>Severe P. falciparum: IV artesunate ${S.k}</li></ul>`});

SEC.push({id:"virmap",k:"g",t:"Antiviral therapy",mm:"Antiviral drug map",drugs:"",act:[],tools:MT,leg:["inh","bl"],draw:VM(["ccr5","gp41","rt","rtn","int","pro","cap","na","cap2","pol","cmv","hcv","hbv"]),
notes:()=>`<h3>Influenza</h3><ul><li><b>Oseltamivir</b> (oral), zanamivir (inhaled; bronchospasm), peramivir (IV): neuraminidase inhibitor → virus ปล่อยจากเซลล์ไม่ได้ · ให้ภายใน 48 ชม. ${S.k}</li><li><b>Baloxavir</b>: ยับยั้ง cap-dependent endonuclease · dose เดียว ${S.k}</li></ul>
 <h3>Herpes (HSV, VZV)</h3><ul><li><b>Acyclovir, valacyclovir, famciclovir</b>: guanosine analog ถูก phosphorylate โดย <b>viral thymidine kinase</b> → ยับยั้ง viral DNA polymerase · ไม่มีผลต่อ latent virus ${S.k}</li><li>ADR: crystalline nephropathy (ให้น้ำพอ) · ดื้อยาจาก TK mutation → foscarnet ${S.k}</li></ul>
 <h3>CMV</h3><ul><li><b>Ganciclovir</b> (valganciclovir): ถูก phosphorylate ด้วย UL97 · <b>myelosuppression</b> ${S.k}</li><li><b>Foscarnet</b>: pyrophosphate analog ไม่ต้อง activate · nephrotoxic, <b>hypo-Ca/Mg</b> → ชัก ${S.k}</li><li><b>Cidofovir</b>: ไม่ต้อง viral kinase · nephrotoxic (ให้ probenecid + NS) ${S.k}</li></ul>`});

SEC.push({id:"hiv",k:"g",t:"HIV therapy",mm:"HIV drugs",drugs:"tenofovir · emtricitabine · abacavir · zidovudine · efavirenz · rilpivirine · dolutegravir · bictegravir · darunavir · ritonavir · maraviroc",act:["inh","bl"],tools:MT,leg:["inh","bl"],draw:VM(["ccr5","gp41","rt","rtn","int","pro","cap"]),
notes:()=>`${tbl(["กลุ่ม","ยา","ADR เด่น"],[["NRTIs","tenofovir (TDF/TAF), emtricitabine, lamivudine, abacavir, zidovudine","ทั่วไป: lactic acidosis (mitochondrial) · TDF: nephrotoxic, bone · abacavir: hypersensitivity (<b>HLA-B*5701</b>) · zidovudine: anemia, myopathy"],["NNRTIs","efavirenz, rilpivirine, nevirapine, doravirine","efavirenz: ฝันร้าย, neuropsychiatric · nevirapine: hepatotoxic, SJS · ไม่ต้อง phosphorylate"],["INSTIs","dolutegravir, bictegravir, raltegravir, cabotegravir","CK ↑, น้ำหนักขึ้น · first-line ปัจจุบัน"],["PIs","darunavir, atazanavir, lopinavir + ritonavir (booster)","hyperglycemia, lipodystrophy, GI · <b>ritonavir = CYP3A4 inhibitor</b> · atazanavir: hyperbilirubinemia, นิ่ว"],["Entry","maraviroc (CCR5), enfuvirtide (gp41)","ต้อง tropism test (maraviroc)"]])}${S.k}
 <ul><li>เริ่ม ART ทุกคนที่ติดเชื้อทันที · regimen ทั่วไป: <b>2 NRTI + INSTI</b> ${S.k}</li><li>PrEP: tenofovir/emtricitabine หรือ cabotegravir IM ${S.k}</li></ul>`});

SEC.push({id:"hep",k:"g",t:"Hepatitis B & C therapy",mm:"Hepatitis B · C",drugs:"tenofovir · entecavir · sofosbuvir · ledipasvir · velpatasvir · glecaprevir · interferon-α",act:["inh"],tools:MT,leg:["inh"],draw:VM(["hcv","hbv"]),
notes:()=>`<h3>Hepatitis C (direct-acting antivirals)</h3>${tbl(["Target","ยา"],[["NS5B polymerase","sofosbuvir, dasabuvir"],["NS5A","ledipasvir, velpatasvir, pibrentasvir, elbasvir"],["NS3/4A protease","glecaprevir, grazoprevir, voxilaprevir"]])}${S.k}
 <ul><li>ใช้ร่วมกัน 8–12 สัปดาห์ หายขาด (SVR) &gt;95% · ribavirin (teratogen, hemolytic anemia) ใช้น้อยลง ${S.k}</li><li>Sofosbuvir + amiodarone → bradycardia รุนแรง ${S.k}</li></ul>
 <h3>Hepatitis B</h3><ul><li><b>Tenofovir</b>, <b>entecavir</b> (resistance barrier สูง) · lamivudine ดื้อง่าย · interferon-α (ADR มาก) ${S.k}</li><li>หยุดยาแล้ว hepatitis flare ได้ ${S.k}</li></ul>`});

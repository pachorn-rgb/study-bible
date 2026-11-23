
/* ================= helpers ================= */
const T=(x,y,s,o={})=>`<text class="t${o.c?" "+o.c:""}" x="${x}" y="${y}" text-anchor="${o.a||"middle"}"${o.s?` font-size="${o.s}"`:""}${o.r?` transform="rotate(${o.r} ${x} ${y})"`:""}>${s}</text>`;
/* a blocked step in a pathway — the red cross, with the missing enzyme named above it.
   Every metabolic-disease picture marks its lesion this way so the lesson is the same shape. */
/* Where a topic sits in the Medical Council's competency criteria (เกณฑ์ความรู้ความสามารถฯ 2567).
   `code` is the criteria code; `g` is 1 for กลุ่มที่ 1 และ 2 — the ones a new doctor must diagnose
   and treat — and 3 for กลุ่มที่ 3, which only has to be recognised and referred. The two columns
   are the whole point of the criteria's tables, so a topic that is in them says which column. */
const mc=(code,g)=>`<div class="mcbar"><span class="mcc">${code}</span>${g?`<span class="mcg g${g}">${g===1?"กลุ่ม 1–2 · วินิจฉัยและรักษาเองได้":"กลุ่ม 3 · รู้จักและส่งต่อได้"}</span>`:""}</div>`;
const blk=(x,y,lab,dy=-16)=>`<path d="M${x-9},${y-9} L${x+9},${y+9} M${x+9},${y-9} L${x-9},${y+9}" style="fill:none;stroke:var(--sb-bad);stroke-width:3.4;stroke-linecap:round"/>`+(lab?T(x,y+dy,lab,{c:"bad"}):"");
const TL=(x,y,ls,o={})=>ls.map((l,i)=>T(x,y+i*(o.lh||14),l,o)).join("");
const LD=(x1,y1,x2,y2)=>`<path class="ld" d="M${x1},${y1} L${x2},${y2}"/><circle class="ldd" cx="${x1}" cy="${y1}" r="1.8"/>`;
const F=(c,d,x="")=>`<path class="f ${c}" d="${d}" ${x}/>`;
const V=(c,d,w,x="")=>`<path class="vo" d="${d}" stroke-width="${w+2.2}" ${x}/><path class="v ${c}" d="${d}" stroke-width="${w}" ${x}/>`;
const C=(c,cx,cy,r)=>`<circle class="f ${c}" cx="${cx}" cy="${cy}" r="${r}"/>`;
const E=(c,cx,cy,rx,ry,rot=0)=>`<ellipse class="f ${c}" cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"${rot?` transform="rotate(${rot} ${cx} ${cy})"`:""}/>`;
function sm(p,closed=true){const n=p.length,Q=i=>p[(i+n)%n];let d=`M${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`;const last=closed?n:n-1;
 for(let i=0;i<last;i++){const a=closed?Q(i-1):p[Math.max(i-1,0)],b=Q(i),c=closed?Q(i+1):p[Math.min(i+1,n-1)],e=closed?Q(i+2):p[Math.min(i+2,n-1)];
  d+=` C${(b[0]+(c[0]-a[0])/6).toFixed(1)},${(b[1]+(c[1]-a[1])/6).toFixed(1)} ${(c[0]-(e[0]-b[0])/6).toFixed(1)},${(c[1]-(e[1]-b[1])/6).toFixed(1)} ${c[0].toFixed(1)},${c[1].toFixed(1)}`}
 return d+(closed?"Z":"")}
function rot(p,cx,cy,a){const c=Math.cos(a),s=Math.sin(a);return p.map(([x,y])=>[cx+(x-cx)*c-(y-cy)*s,cy+(x-cx)*s+(y-cy)*c])}
/* kidney bean: hilum on side (+1 right, -1 left), tilt in radians */
function beanPts(cx,cy,w,h,side=1,tilt=0,n=26){const p=[];for(let i=0;i<n;i++){const a=i/n*Math.PI*2,ca=Math.cos(a),sa=Math.sin(a);let x=cx+ca*w/2,y=cy+sa*h/2;
  if(ca*side>.55&&Math.abs(sa)<.5){x-=side*w*.2*(1-Math.abs(sa)/.5)}p.push([x,y])}return rot(p,cx,cy,tilt)}
const bean=(...a)=>sm(beanPts(...a));
const mir=(p,X=640)=>p.map(([x,y])=>[X-x,y]);
const DEFS=`<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--sb-ink2)"/></marker><marker id="ah2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--sb-ink2)"/></marker><linearGradient id="phg" x1="0" x2="1"><stop offset="0" stop-color="#ef4444"/><stop offset=".45" stop-color="#22c55e"/><stop offset=".55" stop-color="#22c55e"/><stop offset="1" stop-color="#6366f1"/></linearGradient></defs>`;
const svg=(body,vb="0 0 640 520")=>`<svg viewBox="${vb}" role="img" xmlns="http://www.w3.org/2000/svg">${DEFS}${body}</svg>`;




/* Abbreviations.
   The atlases are written compactly, so the same abbreviation can carry a whole
   concept. ABBR holds the expansion; the renderer spells it out once per topic,
   at its first appearance in the notes, as "expansion (ABBR)". Source files stay
   short and the reader never meets an unexplained abbreviation.

   ABBR_OK lists what must never be expanded: element and ion fragments, gene and
   protein symbols, and abbreviations that are read as words. check.js fails on any
   abbreviation in the built pages that is in neither list, so this file is the one
   place to keep up to date when new content lands. */
const ABBR={
 /* nephron and physiology */
 PCT:"proximal convoluted tubule",DCT:"distal convoluted tubule",TAL:"thick ascending limb",
 PT:"proximal tubule",CCD:"cortical collecting duct",
 GFR:"glomerular filtration rate",eGFR:"estimated glomerular filtration rate",
 GBM:"glomerular basement membrane",TBM:"tubular basement membrane",
 ECF:"extracellular fluid",ICF:"intracellular fluid",
 RBF:"renal blood flow",RPF:"renal plasma flow",ERPF:"effective renal plasma flow",
 FENa:"fractional excretion of sodium",UNa:"urine sodium",
 UACR:"urine albumin-to-creatinine ratio",ACR:"albumin-to-creatinine ratio",
 BUN:"blood urea nitrogen",SCr:"serum creatinine",
 ADH:"antidiuretic hormone",ANP:"atrial natriuretic peptide",BNP:"B-type natriuretic peptide",
 RAAS:"renin–angiotensin–aldosterone system",EPO:"erythropoietin",PTH:"parathyroid hormone",
 JGA:"juxtaglomerular apparatus",
 /* transporters and channels */
 NKCC2:"Na⁺–K⁺–2Cl⁻ cotransporter",NCC:"Na⁺–Cl⁻ cotransporter",ENaC:"epithelial sodium channel",
 ROMK:"renal outer medullary potassium channel",NHE3:"Na⁺/H⁺ exchanger 3",
 SGLT2:"sodium–glucose cotransporter 2",SGLT:"sodium–glucose cotransporter",AQP2:"aquaporin-2",
 /* syndromes and diseases */
 AKI:"acute kidney injury",CKD:"chronic kidney disease",
 ESRD:"end-stage renal disease",ESKD:"end-stage kidney disease",RRT:"renal replacement therapy",
 KDIGO:"Kidney Disease: Improving Global Outcomes",
 ATN:"acute tubular necrosis",AIN:"acute interstitial nephritis",TIN:"tubulointerstitial nephritis",
 TINU:"tubulointerstitial nephritis with uveitis",
 GN:"glomerulonephritis",RPGN:"rapidly progressive glomerulonephritis",
 FSGS:"focal segmental glomerulosclerosis",MPGN:"membranoproliferative glomerulonephritis",
 MCD:"minimal change disease",MN:"membranous nephropathy",
 CAKUT:"congenital anomalies of the kidney and urinary tract",
 ADPKD:"autosomal dominant polycystic kidney disease",
 ARPKD:"autosomal recessive polycystic kidney disease",
 MODY5:"maturity-onset diabetes of the young type 5",
 RCC:"renal cell carcinoma",TCC:"transitional cell carcinoma",CIS:"carcinoma in situ",
 PUNLMP:"papillary urothelial neoplasm of low malignant potential",
 UTI:"urinary tract infection",UPJ:"ureteropelvic junction",BPH:"benign prostatic hyperplasia",
 DI:"diabetes insipidus",SIADH:"syndrome of inappropriate antidiuretic hormone secretion",
 RTA:"renal tubular acidosis",DKA:"diabetic ketoacidosis",DM:"diabetes mellitus",
 HT:"hypertension",BP:"blood pressure",CV:"cardiovascular",HF:"heart failure",
 HFrEF:"heart failure with reduced ejection fraction",SVR:"systemic vascular resistance",
 TMA:"thrombotic microangiopathy",TTP:"thrombotic thrombocytopenic purpura",
 HUS:"hemolytic uremic syndrome",aHUS:"atypical hemolytic uremic syndrome",
 SLE:"systemic lupus erythematosus",ANCA:"antineutrophil cytoplasmic antibody",
 ASO:"antistreptolysin O",ESR:"erythrocyte sedimentation rate",ICP:"intracranial pressure",
 /* vessels, access and procedures */
 IVC:"inferior vena cava",SMA:"superior mesenteric artery",IMA:"inferior mesenteric artery",
 AVF:"arteriovenous fistula",AVG:"arteriovenous graft",
 CRRT:"continuous renal replacement therapy",CVVHD:"continuous venovenous hemodialysis",CVVHDF:"continuous venovenous hemodiafiltration",
 TURBT:"transurethral resection of bladder tumour",
 /* laboratory and imaging */
 PAS:"periodic acid–Schiff",PAH:"para-aminohippurate",
 EM:"electron microscopy",LM:"light microscopy",IF:"immunofluorescence",
 CT:"computed tomography",MRI:"magnetic resonance imaging",LFT:"liver function test",
 WBC:"white blood cell",RBC:"red blood cell",RCT:"randomized controlled trial",
 /* drugs */
 NSAID:"nonsteroidal anti-inflammatory drug",ACE:"angiotensin-converting enzyme",
 SSSS:"staphylococcal scalded skin syndrome",
 NAAT:"nucleic acid amplification test",MERS:"Middle East respiratory syndrome",HTLV:"human T-lymphotropic virus",LOS:"lipooligosaccharide",HN:"hemagglutinin neuraminidase",VPg:"viral protein genome-linked",ISVP:"intermediate subviral particle",
 DFA:"direct fluorescent antibody",PFGE:"pulsed-field gel electrophoresis",
 CTBA:"cycloserine-cefoxitin-fructose agar with taurocholate",CNA:"colistin-nalidixic acid agar",EIA:"enzyme immunoassay",
 KOH:"potassium hydroxide",MBC:"minimum bactericidal concentration",XLD:"xylose-lysine deoxycholate",MALDI:"matrix-assisted laser desorption ionization",
 EB:"elementary body",MOMP:"major outer membrane protein",LGV:"lymphogranuloma venereum",NGU:"nongonococcal urethritis",MIF:"microimmunofluorescence",SOD:"superoxide dismutase",IUD:"intrauterine device",
 ACEi:"angiotensin-converting enzyme inhibitor",ARB:"angiotensin receptor blocker",
 HCTZ:"hydrochlorothiazide",MRA:"mineralocorticoid receptor antagonist",
 MMF:"mycophenolate mofetil",CNI:"calcineurin inhibitor",ATG:"antithymocyte globulin",
 IVIG:"intravenous immunoglobulin",ICI:"immune checkpoint inhibitor",
 ADR:"adverse drug reaction",BCG:"bacillus Calmette–Guérin",
 /* immunology and transplantation */
 HLA:"human leukocyte antigen",MHC:"major histocompatibility complex",
 APC:"antigen-presenting cell",TCMR:"T cell–mediated rejection",
 AMR:"antibody-mediated rejection",DSA:"donor-specific antibody",
 PTLD:"posttransplant lymphoproliferative disease",
 /* microbiology */
 UPEC:"uropathogenic Escherichia coli",CoNS:"coagulase-negative staphylococci",
 HBV:"hepatitis B virus",HCV:"hepatitis C virus",HIV:"human immunodeficiency virus",
 HPV:"human papillomavirus",CMV:"cytomegalovirus",PCP:"Pneumocystis pneumonia",
 TB:"tuberculosis",SCC:"squamous cell carcinoma",OAB:"overactive bladder",AG:"anion gap",
 HSV:"herpes simplex virus",EBV:"Epstein\u2013Barr virus",ESBL:"extended-spectrum beta-lactamase",
 VRE:"vancomycin-resistant enterococci",CFU:"colony-forming unit",PBP:"penicillin-binding protein",
 TMP:"trimethoprim",SMX:"sulfamethoxazole",URI:"upper respiratory infection",
 PSGN:"poststreptococcal glomerulonephritis",IgAN:"IgA nephropathy",
 HTN:"hypertension",LDL:"low-density lipoprotein",MI:"myocardial infarction",
 LVH:"left ventricular hypertrophy",ECG:"electrocardiogram",CK:"creatine kinase",
 DIC:"disseminated intravascular coagulation",MAHA:"microangiopathic hemolytic anemia",
 RVT:"renal vein thrombosis",PLEX:"plasma exchange",HSCT:"hematopoietic stem cell transplantation",
 NDI:"nephrogenic diabetes insipidus",ESA:"erythropoiesis-stimulating agent",
 HD:"hemodialysis",PD:"peritoneal dialysis",CAPD:"continuous ambulatory peritoneal dialysis",
 CCPD:"continuous cycling peritoneal dialysis",UF:"ultrafiltration",
 TBW:"total body water",MAP:"mean arterial pressure",UOsm:"urine osmolality",SG:"specific gravity",
 UO:"urine output",ICU:"intensive care unit",
 KIM:"kidney injury molecule",NGAL:"neutrophil gelatinase-associated lipocalin",
 COX:"cyclooxygenase",PGE:"prostaglandin E",PPI:"proton pump inhibitor",
 RER:"rough endoplasmic reticulum",CNT:"connecting tubule",
 IDSA:"Infectious Diseases Society of America",
 CLSI:"Clinical and Laboratory Standards Institute",
 EUCAST:"European Committee on Antimicrobial Susceptibility Testing",
 SVT:"supraventricular tachycardia",HCM:"hypertrophic cardiomyopathy",
 PrEP:"pre-exposure prophylaxis",IM:"intramuscular",AVM:"arteriovenous malformation",
 MMR:"mismatch repair",FIT:"fecal immunochemical test",PanIN:"pancreatic intraepithelial neoplasia",
 CYP3A4:"cytochrome P450 3A4",CEA:"carcinoembryonic antigen",
 JG:"juxtaglomerular",HIVAN:"HIV-associated nephropathy",MBD:"mineral and bone disorder",
 VHL:"von Hippel\u2013Lindau",ADTKD:"autosomal dominant tubulointerstitial kidney disease",
 SSc:"systemic sclerosis",TLS:"tumour lysis syndrome",NSS:"normal saline solution",
 APD:"automated peritoneal dialysis",DDAVP:"desmopressin",
 SGLT2i:"sodium\u2013glucose cotransporter 2 inhibitor",
 /* endocrine */
 TSH:"thyroid-stimulating hormone",LH:"luteinizing hormone",FSH:"follicle-stimulating hormone",
 TRH:"thyrotropin-releasing hormone",GHRH:"growth hormone\u2013releasing hormone",
 MSH:"melanocyte-stimulating hormone",POMC:"proopiomelanocortin",AVP:"arginine vasopressin",
 HPT:"hyperparathyroidism",FHH:"familial hypocalciuric hypercalcemia",
 PHP:"pseudohypoparathyroidism",PPHP:"pseudopseudohypoparathyroidism",
 AHO:"Albright hereditary osteodystrophy",ALP:"alkaline phosphatase",
 DIT:"diiodotyrosine",MIT:"monoiodotyrosine",NIS:"sodium\u2013iodide symporter",
 RAIU:"radioactive iodine uptake",FNA:"fine-needle aspiration",MNG:"multinodular goitre",
 MTC:"medullary thyroid carcinoma",TBG:"thyroxine-binding globulin",
 SSKI:"saturated solution of potassium iodide",PTU:"propylthiouracil",
 CAH:"congenital adrenal hyperplasia",DST:"dexamethasone suppression test",
 DHEA:"dehydroepiandrosterone",CBG:"corticosteroid-binding globulin",
 SHBG:"sex hormone\u2013binding globulin",hCG:"human chorionic gonadotropin",
 ACC:"adrenocortical carcinoma",NET:"neuroendocrine tumour",
 PanNET:"pancreatic neuroendocrine tumour",NSE:"neuron-specific enolase",
 HVA:"homovanillic acid",VMA:"vanillylmandelic acid",
 MEN:"multiple endocrine neoplasia",SIAD:"syndrome of inappropriate antidiuresis",
 OGTT:"oral glucose tolerance test",FPG:"fasting plasma glucose",
 HHS:"hyperosmolar hyperglycemic state",GDM:"gestational diabetes mellitus",
 TZD:"thiazolidinedione",NPH:"neutral protamine Hagedorn",
 BMR:"basal metabolic rate",FFA:"free fatty acid",GAG:"glycosaminoglycan",
 HU:"Hounsfield unit",PET:"positron emission tomography",MAO:"monoamine oxidase",
 CCK:"cholecystokinin",
 /* cardiovascular */
 RV:"right ventricle",SA:"sinoatrial",VSD:"ventricular septal defect",
 ASD:"atrial septal defect",PFO:"patent foramen ovale",CHD:"congenital heart disease",
 TOF:"tetralogy of Fallot",TGA:"transposition of the great arteries",
 EDV:"end-diastolic volume",ESV:"end-systolic volume",EDP:"end-diastolic pressure",
 EF:"ejection fraction",VR:"venous return",DBP:"diastolic blood pressure",
 JVP:"jugular venous pressure",JVD:"jugular venous distension",RAP:"right atrial pressure",
 PCWP:"pulmonary capillary wedge pressure",PA:"pulmonary artery",SVC:"superior vena cava",
 MVP:"mitral valve prolapse",TR:"tricuspid regurgitation",PS:"pulmonic stenosis",
 ACS:"acute coronary syndrome",UA:"unstable angina",IHD:"ischemic heart disease",
 CAD:"coronary artery disease",PAD:"peripheral artery disease",
 ASCVD:"atherosclerotic cardiovascular disease",
 STEMI:"ST-elevation myocardial infarction",NSTEMI:"non-ST-elevation myocardial infarction",
 LAD:"left anterior descending artery",LCX:"left circumflex artery",RCA:"right coronary artery",
 PCI:"percutaneous coronary intervention",SCD:"sudden cardiac death",
 ERP:"effective refractory period",VT:"ventricular tachycardia",
 PSVT:"paroxysmal supraventricular tachycardia",PVC:"premature ventricular contraction",
 WPW:"Wolff\u2013Parkinson\u2013White",BBB:"bundle branch block",
 LBBB:"left bundle branch block",RBBB:"right bundle branch block",
 ICD:"implantable cardioverter-defibrillator",
 PVR:"pulmonary vascular resistance",RVH:"right ventricular hypertrophy",
 HFpEF:"heart failure with preserved ejection fraction",DCM:"dilated cardiomyopathy",
 LVOT:"left ventricular outflow tract",GCA:"giant cell arteritis",PAN:"polyarteritis nodosa",
 HHT:"hereditary hemorrhagic telangiectasia",RHD:"rheumatic heart disease",
 IE:"infective endocarditis",SAH:"subarachnoid hemorrhage",
 TAA:"thoracic aortic aneurysm",AAA:"abdominal aortic aneurysm",
 CXR:"chest X-ray",LDH:"lactate dehydrogenase",TG:"triglyceride",
 ISDN:"isosorbide dinitrate",OSA:"obstructive sleep apnea",
 PFT:"pulmonary function test",TFT:"thyroid function test",
 /* gastrointestinal and hepatobiliary */
 PSC:"primary sclerosing cholangitis",PBC:"primary biliary cholangitis",
 HCC:"hepatocellular carcinoma",AIH:"autoimmune hepatitis",FNH:"focal nodular hyperplasia",
 UCB:"unconjugated bilirubin",CB:"conjugated bilirubin",
 AST:"aspartate aminotransferase",ALT:"alanine aminotransferase",
 GGT:"gamma-glutamyl transferase",AFP:"alpha-fetoprotein",
 ANA:"antinuclear antibody",AMA:"antimitochondrial antibody",
 NASH:"nonalcoholic steatohepatitis",NAFLD:"nonalcoholic fatty liver disease",
 MASLD:"metabolic dysfunction\u2013associated steatotic liver disease",
 MASH:"metabolic dysfunction\u2013associated steatohepatitis",
 HBsAg:"hepatitis B surface antigen",HBeAg:"hepatitis B e antigen",
 HAV:"hepatitis A virus",HDV:"hepatitis D virus",HEV:"hepatitis E virus",
 TIPS:"transjugular intrahepatic portosystemic shunt",
 HVPG:"hepatic venous pressure gradient",SAAG:"serum\u2013ascites albumin gradient",
 SMV:"superior mesenteric vein",PMN:"polymorphonuclear leukocyte",
 MRCP:"magnetic resonance cholangiopancreatography",
 HIDA:"hepatobiliary iminodiacetic acid",CTA:"computed tomography angiography",
 EGD:"esophagogastroduodenoscopy",GEJ:"gastroesophageal junction",
 ECL:"enterochromaffin-like",IEL:"intraepithelial lymphocyte",
 RLQ:"right lower quadrant",LLQ:"left lower quadrant",RUQ:"right upper quadrant",
 SIBO:"small intestinal bacterial overgrowth",tTG:"tissue transglutaminase",
 SBO:"small bowel obstruction",LGIB:"lower gastrointestinal bleeding",
 UGIB:"upper gastrointestinal bleeding",AIG:"autoimmune gastritis",
 MALT:"mucosa-associated lymphoid tissue",ZES:"Zollinger\u2013Ellison syndrome",
 SCFA:"short-chain fatty acid",NEC:"necrotizing enterocolitis",
 CHF:"congestive heart failure",NG:"nasogastric",GB:"gallbladder",
 MW:"Mallory\u2013Weiss",NK:"natural killer",MMA:"methylmalonic acid",
 PML:"progressive multifocal leukoencephalopathy",MDS:"myelodysplastic syndrome",
 /* biochemistry */
 TCA:"tricarboxylic acid",GABA:"gamma-aminobutyric acid",
 CPS:"carbamoyl phosphate synthetase",OTC:"ornithine transcarbamylase",
 PFK:"phosphofructokinase",PDH:"pyruvate dehydrogenase",
 PKU:"phenylketonuria",BH4:"tetrahydrobiopterin",THF:"tetrahydrofolate",
 ADA:"adenosine deaminase",HGPRT:"hypoxanthine-guanine phosphoribosyltransferase",
 PRPP:"phosphoribosyl pyrophosphate",DHFR:"dihydrofolate reductase",
 HMP:"hexose monophosphate",TPP:"thiamine pyrophosphate",
 FISH:"fluorescence in situ hybridization",ELISA:"enzyme-linked immunosorbent assay",
 PCR:"polymerase chain reaction",UPD:"uniparental disomy",
 LOH:"loss of heterozygosity",GFAP:"glial fibrillary acidic protein",
 cDNA:"complementary DNA",RT:"reverse transcriptase",
 MODY:"maturity-onset diabetes of the young",BPG:"bisphosphoglycerate",
 HFI:"hereditary fructose intolerance",CPT:"carnitine palmitoyltransferase",
 MCAD:"medium-chain acyl-CoA dehydrogenase",SIDS:"sudden infant death syndrome",
 CETP:"cholesteryl ester transfer protein",SCID:"severe combined immunodeficiency",
 MTX:"methotrexate",FU:"fluorouracil",SAM:"S-adenosylmethionine",
 HDAC:"histone deacetylase",HAT:"histone acetyltransferase",
 /* haematology and oncology */
 VTE:"venous thromboembolism",ALL:"acute lymphoblastic leukemia",
 AML:"acute myeloid leukemia",CML:"chronic myeloid leukemia",
 CLL:"chronic lymphocytic leukemia",NSCLC:"non-small-cell lung cancer",
 UFH:"unfractionated heparin",HIT:"heparin-induced thrombocytopenia",
 FFP:"fresh frozen plasma",PCC:"prothrombin complex concentrate",
 aPTT:"activated partial thromboplastin time",INR:"international normalized ratio",
 TIA:"transient ischemic attack",AMD:"age-related macular degeneration",
 irAE:"immune-related adverse event",
 /* neurology and psychiatry */
 CGRP:"calcitonin gene-related peptide",NMDA:"N-methyl-D-aspartate",
 ALS:"amyotrophic lateral sclerosis",NMJ:"neuromuscular junction",
 NMS:"neuroleptic malignant syndrome",CBF:"cerebral blood flow",
 OUD:"opioid use disorder",CBZ:"carbamazepine",AED:"antiepileptic drug",
 COMT:"catechol-O-methyltransferase",AADC:"aromatic L-amino acid decarboxylase",
 PABA:"para-aminobenzoic acid",CBT:"cognitive behavioural therapy",
 OCD:"obsessive-compulsive disorder",PMDD:"premenstrual dysphoric disorder",
 /* respiratory */
 OCS:"oral corticosteroid",MDI:"metered-dose inhaler",DPI:"dry powder inhaler",
 SAMA:"short-acting muscarinic antagonist",LTRA:"leukotriene receptor antagonist",
 EIB:"exercise-induced bronchoconstriction",PEF:"peak expiratory flow",
 ABPA:"allergic bronchopulmonary aspergillosis",
 GINA:"Global Initiative for Asthma",RAST:"radioallergosorbent test",
 /* other pharmacology */
 TI:"therapeutic index",CL:"clearance",OCP:"oral contraceptive pill",
 GLP:"glucagon-like peptide",DPP:"dipeptidyl peptidase",
 GnRH:"gonadotropin-releasing hormone",SERM:"selective estrogen receptor modulator",
 SPRM:"selective progesterone receptor modulator",DHT:"dihydrotestosterone",
 DMPA:"depot medroxyprogesterone acetate",IUD:"intrauterine device",
 LNG:"levonorgestrel",PCOS:"polycystic ovary syndrome",
 TXA:"tranexamic acid",AERD:"aspirin-exacerbated respiratory disease",
 ULT:"urate-lowering therapy",XO:"xanthine oxidase",
 MACE:"major adverse cardiovascular event",BPO:"benzoyl peroxide",
 PUVA:"psoralen plus ultraviolet A",UVB:"ultraviolet B",
 MAC:"minimum alveolar concentration",MDR:"multidrug-resistant",
 MIC:"minimum inhibitory concentration",CPK:"creatine phosphokinase",
 RMSF:"Rocky Mountain spotted fever",FQ:"fluoroquinolone",
 PDE4:"phosphodiesterase 4",EDTA:"ethylenediaminetetraacetic acid",NANC:"nonadrenergic noncholinergic",
 /* biochemistry and genetics */
 XP:"xeroderma pigmentosum",NER:"nucleotide excision repair",BER:"base excision repair",
 NHEJ:"non-homologous end joining",HNPCC:"hereditary nonpolyposis colorectal cancer",
 MELAS:"mitochondrial encephalomyopathy, lactic acidosis and stroke-like episodes",
 LHON:"Leber hereditary optic neuropathy",RNAi:"RNA interference",
 OI:"osteogenesis imperfecta",EDS:"Ehlers\u2013Danlos syndrome",
 VLDL:"very-low-density lipoprotein",IDL:"intermediate-density lipoprotein",
 HDL:"high-density lipoprotein",TAG:"triacylglycerol",
 LCAT:"lecithin\u2013cholesterol acyltransferase",LPL:"lipoprotein lipase",
 /* immunology, microbiology and pharmacology */
 IBD:"inflammatory bowel disease",RSV:"respiratory syncytial virus",
 PNH:"paroxysmal nocturnal hemoglobinuria",VZV:"varicella-zoster virus",HHV:"human herpesvirus",
 AIDS:"acquired immunodeficiency syndrome",ART:"antiretroviral therapy",
 NRTI:"nucleoside reverse transcriptase inhibitor",
 NNRTI:"non-nucleoside reverse transcriptase inhibitor",
 INSTI:"integrase strand transfer inhibitor",PI:"protease inhibitor",
 TDF:"tenofovir disoproxil fumarate",TAF:"tenofovir alafenamide",
 MRSA:"methicillin-resistant Staphylococcus aureus",
 SJS:"Stevens\u2013Johnson syndrome",TEN:"toxic epidermal necrolysis",
 DRESS:"drug reaction with eosinophilia and systemic symptoms",
 ROS:"reactive oxygen species",CF:"cystic fibrosis",CNS:"central nervous system",
 PDE:"phosphodiesterase",PDE5:"phosphodiesterase 5",PDE6:"phosphodiesterase 6",
 AChE:"acetylcholinesterase",ACh:"acetylcholine",COPD:"chronic obstructive pulmonary disease",
 ADHD:"attention-deficit/hyperactivity disorder",PTSD:"post-traumatic stress disorder",
 ED:"erectile dysfunction",PUD:"peptic ulcer disease",DES:"diethylstilbestrol",
 LMWH:"low-molecular-weight heparin",SSRI:"selective serotonin reuptake inhibitor",
 SNRI:"serotonin\u2013norepinephrine reuptake inhibitor",BZD:"benzodiazepine",
 DMARD:"disease-modifying antirheumatic drug",ONJ:"osteonecrosis of the jaw",
 OA:"osteoarthritis",ITP:"immune thrombocytopenia",NTD:"neural tube defect",
 LUTS:"lower urinary tract symptoms",NAION:"nonarteritic anterior ischemic optic neuropathy",
 /* cardiovascular */
 ARNI:"angiotensin receptor\u2013neprilysin inhibitor",HOCM:"hypertrophic obstructive cardiomyopathy",
 AF:"atrial fibrillation",DOAC:"direct oral anticoagulant",DHP:"dihydropyridine",
 CCB:"calcium channel blocker",TEE:"transesophageal echocardiography",
 DVT:"deep vein thrombosis",SMC:"smooth muscle cell",
 PP:"pulse pressure",LV:"left ventricle",LA:"left atrium",TPR:"total peripheral resistance",
 /* endocrine */
 GH:"growth hormone",CRH:"corticotropin-releasing hormone",ACTH:"adrenocorticotropic hormone",
 T1DM:"type 1 diabetes mellitus",T2DM:"type 2 diabetes mellitus",
 ADHR:"autosomal dominant hypophosphatemic rickets",
 /* gastrointestinal */
 GERD:"gastroesophageal reflux disease",MMC:"migrating motor complex",
 ENS:"enteric nervous system",LES:"lower esophageal sphincter",UES:"upper esophageal sphincter",
 VIP:"vasoactive intestinal peptide",GIP:"glucose-dependent insulinotropic peptide",
 CN:"cranial nerve",FAP:"familial adenomatous polyposis",GIST:"gastrointestinal stromal tumour",
 MSI:"microsatellite instability",CRC:"colorectal cancer",
 CIMP:"CpG island methylator phenotype",CIN:"chromosomal instability",
 CHRPE:"congenital hypertrophy of the retinal pigment epithelium",
 ERCP:"endoscopic retrograde cholangiopancreatography",CBD:"common bile duct",
 IPMN:"intraductal papillary mucinous neoplasm",
 SIRS:"systemic inflammatory response syndrome",
 ARDS:"acute respiratory distress syndrome",
 /* respiratory */
 LABA:"long-acting beta-2 agonist",SABA:"short-acting beta-2 agonist",
 LAMA:"long-acting muscarinic antagonist",ICS:"inhaled corticosteroid",
 FEV:"forced expiratory volume",LTOT:"long-term oxygen therapy",
 AAT:"alpha-1 antitrypsin",GOLD:"Global Initiative for Chronic Obstructive Lung Disease",
 TSS:"toxic shock syndrome",TSST:"toxic shock syndrome toxin",GAS:"group A Streptococcus",
 MSCRAMM:"microbial surface components recognizing adhesive matrix molecules",
 CDC:"Centers for Disease Control and Prevention"
,
 ETEC:"enterotoxigenic Escherichia coli",EPEC:"enteropathogenic Escherichia coli",
 EAEC:"enteroaggregative Escherichia coli",EIEC:"enteroinvasive Escherichia coli",
 STEC:"Shiga toxin-producing Escherichia coli"
,
 FHA:"filamentous hemagglutinin"
,
 NTM:"nontuberculous mycobacteria"
};
/* never expanded: formula fragments, gene and protein symbols, and names read as words */
const ABBR_OK=new Set(["TCD50","LD50","ID50","CCR5","E1A","E1B","E6","E7","L1","L2","p53","p105RB","AUG","VP1","VP2","VP3","VP4","VP7","JC","SV40","NSP4","M2","TH2","TH17","CR3","CXCR4","DC","SIGN","HBcAg","PrP","PrPSc","PrPC","GPI","U3","U5","HBc","HBe","HBs","APOBEC","Da","CD150","CD55","CD155","CD46","VP0","VP5","VP6","VP8","PB1","PB2","PA","NS1","NS2","NSs","NSm","NSP4","G1","G2","NPC1","TIM","ZMAPP","rVSV","ZEBOV","VSV","RB51","C3b","C5a","HB","PBP2","LasA","LasB","ETA","AIP","OMP","TW","HEp","OmpA","TWAR","TH1","CTX","BCYE","CFA","LT","PA63","pXO1","pXO2","JK","ETA","ETB","LIM","PURPLE","POSITIVE","ATP","ADP","AMP","cAMP","ATPase","DNA","RNA","mRNA","pH","HCO","NaHCO","NH","PCO","PO","CO","KCl","NaCl","MgSO","CaCl",
 "AA","AL","IgA","IgG","IgM","IgE","C3","C4","C1q","C5","CD","CD4","CD8","CD20","CD28","CD80","ABO","WHO","ISUP","AJCC","KDOQI",
 "TSC","TSC1","TSC2","MUC1","REN","HNF1B","COL4A3","COL4A4","COL4A5","PKD1","PKD2","PKHD1","APOL1","PLA2R","LIMS","CXCL9","DNAJB9",
 "HIF","TGF","VEGF","PDGF","FGF","EGF","IGF","TNF","IL","IFN","WNK","CaSR","TRPV5","FKBP","mTOR","IMPDH","NC1","GzmB","TCR","Tfh","Th1","Th2","Th17",
 "AGEs","AT","AV","BK","BM","BH","CA","CH","HA","IN","JW","LN","NS","PK","SBP","RAS","TP","UC","US","GV","SEC","HS","ST","CVA","KPT","AAF","JGen","MR","GI","AV","RA","FABP","NAG","OB","OC","NADH","FADH","NADPH","FAD","NAD","GM","GM1","GM2","cGMP","DAG","IP","IP3","IXa","IIc","FA","MP","DA","NM","VOMIT","SMASHED","GET","CRISPR","HR","AS","MS","AD","AR","PE","CSF","BRCA1","BRCA2","MUTYH","KIT","CD117","NF1","MLH1","BRAF","KRAS","SMAD4","PRSS1","CFTR","RET","AIRE","VDR","TRPV6","RANKL","PTHrP","FGF23","TNFR1","RIPK1","RIPK3","MLKL","TPMT","NUDT15","G6PD","CYP450","CYP2C19","CYP2D6","NS3","NS5A","NS5B","STK11","PJ","MSH2","CEOS","TCF","MYC","SMAD2","TGFBR2","BAX","WT1","WT2","UMOD","ADAMTS13","SARS","SHV","TEM","QT","AP","GC","PIP","SC","GP","IIb","IIIa","VKORC1","CDK4","CDK","HER2","CTLA","PARP","DTIs","PF4","PDE3","PAR","CCS","FdUMP","DPD","AE","BCR","MEK","JAK1","BRCA","MAOI","MAOIs","SV2A","VMAT","VMAT2","RYR1","GAT","VGCC","AMPA","BZ1","OX1","OX2","MT1","MT2","HT2A","HT1B","DOPA","CYP1A2","TRPV1","SERT","DAT","GSK","TSLP","ERA","LTC","LTD","LTB","CysLT","CYP3A","SMI","ILC2","SO","HES","FDA","ETB","SMART","QRS","HPA","MSK","TD","TLR7","AK","LO","AICAR","URAT1","NB","PBP2a","PBP3","HENS","LAME","UDP","RIPE","HPG","GR","CYP11","PGF","BCL","ATTR","BH3","BAK","XL","CA1","NT","proBNP","TPO","NFAT","NF","FKBP12","AEDs","SERMs","UGT1A1","UGT","EGFR","ERBB2","ASBT","GRP","DQ2","DQ8","LKM","ALDH","ALDH2","CYP2E1","HBs","HBc","WEAPON","ASIS","PGI","HCl","ASA","EP","PAMORA","CCK2","PLC","NBC","FABP2","GALT","NTCP","TA","OATP1B1","PLAG1","CRTC1","MAML2","CDKN2A","MET","NKG2D","NOD2","ASCA","EDNRB","EDN3","TERT","UPR","PiMM","PiZZ","TFR2","HAMP","HJV","ER","HMG","OH","PKA","CAP","rRNA","tRNA","snRNA","snoRNA","RNP","dNTP","dATP","dTMP","UTP","IMP","GMP","GTP","NADP","PPi","SER","FBPase","AGC","UGG","AUA","CAU","UGA","CAG","CGG","CTG","GAA","MECP2","FMR1","COAL","CG","AB","GU","MIC","MDR","AUC","EC","IA","CBC","NAPQI","CYP","CYP2C9","TCAs","TCA_","VIPoma","JAK","JAK2","STAT","AgRP","NPY","PKC","SST","FLAT","BIG","FIB","XY","XX","BRICK","LIPS","ChAMPs","CHuGG","GraMPa","HEELD","MOON","FACIES","HAG","PIG","JAKed","CAT","TV","BAD","GOAT","CART","PYY","GLUT1","GLUT2","GLUT3","GLUT4","GLUT5","GLUTs","SGLT1","MC3R","MC4R","GPCR","GNAS","DR3","DR4","CTLA4","PTPN22","ICA512","CDC73","KCNJ5","PHOX2B","ALK","SDH","PTEN","ATRX","DAXX","NTRK1","PAX8","TSHR","DUOX2","MCT8","RXR","IRS","PKB","MAPK","AMPK","SSTR","TSI","RAGE","GSH","APUD","OHB","AM","SPS","PPH","HSD","PEP","RADS","AUS","FN","TU","WDHA","HIAA","VF","MEN1","MEN2","MEN2A","MEN2B","MEN4","GAD","PLA","PR","PV","SR","PDA","MVO","PPAR","IB","sGC","NCX","PGD","HCN","aVL","aVR","aVF","EDPVR","ESPVR","SERCA2a","siRNA","PCSK9","NPC1L1","TBX1","ACVRL1","PRKAR1A","PR3","MPO","DNase","NES","HACEK","COAT","TTC","MB","CM","VO","IR","IVR","CMP","OS","RRP","TS","DS","VASc","CHA","GRACE","NSTE","AVenue","BEAR","SAD","ADEK","PLEASe","PNMT","TK","UL97","CD40","CD52","IV","EPS","ADPKD_","UF","PD","HD","DDD","C3G","HSP","GPA","MPA","EGPA","APS","LCDD","HCDD","LHCDD","MGRS","SAA","AKIN","PTC","Gen","AN","AAN","TURP","JW","JdF","JdFW","dFJ","dF","KPT","AAF","FA1","FA2","PYR","GLG","GL","HPO","GLUC","PG","PB","NE","NO","TF","UT","SV","LE","PK","PTK","THAM","CREDENCE","EMPA","REG","PEG","IBS","LPS","CaSR","TRPC6","ACTN4","THSD7A","FGFR3","PI3K","TP53","RB","WNK","AVPR2","DRB1","vWF","iTTP","STEC","NC1","ECM","SAME","HSD2","AQP3","AQP4","IIa","IC","SAA","LFCN","WJ","CK19","UV","PLA2R2","BTP","CH50","HSP","RAS","CD80","CD86","CD28","CD20","IL","FKBP","COX2"]);
/* Spell each abbreviation out once per topic, at its first appearance in the notes. */
function abbrize(root,fig){
 if(!root)return;
 const keys=Object.keys(ABBR).filter(k=>!k.endsWith("_")).sort((a,b)=>b.length-a.length);
 const text=root.textContent||"";
 const todo=keys.filter(k=>{
  if(!new RegExp("\\b"+k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\b").test(text))return false;
  const e=k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
  /* already written out by hand somewhere in this topic */
  return !new RegExp("\\S[^()\\n]{3,70}\\(\\s*"+e+"[ ,)]|\\b"+e+"\\s*\\([^()\\n]{3,70}\\)").test(text);
 });
 if(!todo.length)return;
 const left=new Set(todo),done=new Set();
 const re=new RegExp("\\b("+todo.map(k=>k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")\\b");
 const SKIP=/^(TABLE|THEAD|TBODY|TR|TD|TH|H1|H2|H3|H4|ABBR|SVG|TEXT|CODE)$/;
 const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(n){
  for(let p=n.parentNode;p&&p!==root;p=p.parentNode)if(SKIP.test(p.nodeName)||(p.classList&&(p.classList.contains("mcbar")||p.classList.contains("sbb"))))return NodeFilter.FILTER_REJECT;
  return NodeFilter.FILTER_ACCEPT}});
 const nodes=[];for(let n=w.nextNode();n;n=w.nextNode())nodes.push(n);
 for(const n of nodes){
  if(!left.size)break;
  let s=n.nodeValue,out="",m;
  while((m=re.exec(s))){
   const k=m[1];
   /* not a match when it is the tail of a compound such as p-ANCA or anti-PLA2R */
   const prev=m.index?s[m.index-1]:(out?out.slice(-1):"");
   if(!left.has(k)||prev==="-"||prev==="/"||prev==="\u2011"){out+=s.slice(0,m.index+k.length);s=s.slice(m.index+k.length);continue}
   left.delete(k);done.add(k);
   let exp=ABBR[k];
   /* capitalize only when the expansion really does start the line */
   if(!out&&!m.index&&/^[a-z]/.test(exp)){
    const par=n.parentNode,blk=/^(LI|P|DIV|TD)$/.test(par.nodeName)?par:par.parentNode;
    if(blk&&blk.firstChild===(par===blk?n:par))exp=exp[0].toUpperCase()+exp.slice(1);
   }
   out+=s.slice(0,m.index)+exp+" ("+k+")";
   s=s.slice(m.index+k.length);
  }
  if(out)n.nodeValue=out+s;
 }
 /* What is left appears only in a table, a heading or the figure beside the notes,
    where spelling it out in place would wreck the layout. List it underneath instead,
    the way a textbook prints an abbreviation key under a table. */
 let ft=root.textContent||"";
 if(fig){const c=fig.cloneNode(true);c.querySelectorAll("svg").forEach(e=>e.remove());ft+=" "+(c.textContent||"")}
 for(const k of keys)if(!left.has(k)&&!done.has(k))left.add(k);
 const rest=[...left].filter(k=>new RegExp("\\b"+k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\b").test(ft)).sort();
 if(rest.length){const p=document.createElement("p");p.className="abbrl";
  p.innerHTML=rest.map(k=>`<b>${k}</b> ${ABBR[k]}`).join(" · ");root.appendChild(p)}
}

/* ================= pharmacology core (shared by every pharmacology atlas) ================= */
/* fa1 = First Aid Step 1, fa2 = First Aid Step 2 CK. CLAUDE.md names both books;
   they differ where they overlap, so a claim must say which one it came from.
   fa remains for pages not yet checked against a specific edition. */
const S={k:'<b class="sbb katzung">K</b>',p:'<b class="sbb pt">PT</b>',r:'<b class="sbb robbins">R</b>',fa:'<b class="sbb fa">FA</b>',fa1:'<b class="sbb fa">FA1</b>',fa2:'<b class="sbb fa">FA2</b>',g:'<b class="sbb guyton">G</b>',b:'<b class="sbb boron">B</b>',h:'<b class="sbb harrison">H</b>',x:'<b class="sbb gen">Gen</b>'};
const LEG={ag:["Agonist / activator","--d-ag"],bl:["Antagonist / blocker","--d-bl"],inh:["Enzyme / transporter inhibitor","--d-inh"],mab:["Monoclonal antibody","--d-mab"],st:["Steroid / hormone","--d-st"],mod:["Other / modulator","--d-mod"]};
let ST={labels:true,all:false};
let HL=[];
const SEC=[],GN={};
const on=k=>ST.all||HL.includes(k);
const tbl=(h,rows)=>`<table>${h?`<tr>${h.map(x=>`<th>${x}</th>`).join("")}</tr>`:""}${rows.map(r=>`<tr>${r.map(x=>`<td>${x}</td>`).join("")}</tr>`).join("")}</table>`;
function wrapT(x,y,s,n,c,lh=16,a="start"){const w=String(s).split(" ");const L=[];let cur="";w.forEach(t=>{if((cur+" "+t).trim().length>n&&cur){L.push(cur);cur=t}else cur=(cur+" "+t).trim()});if(cur)L.push(cur);
 return L.map((l,i)=>T(x,y+i*lh,l,{a,c})).join("")}
/* gradients + soft shadow/glow used by every target map */
const GR=(id,a,b,r)=>r?`<radialGradient id="${id}" cx=".38" cy=".32" r=".85"><stop offset="0" style="stop-color:var(${a})"/><stop offset="1" style="stop-color:var(${b})"/></radialGradient>`
 :`<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(${a})"/><stop offset="1" style="stop-color:var(${b})"/></linearGradient>`;
const PDEFS=`<defs>${GR("gCell","--p-cell-hi","--p-cell",1)}${GR("gEpi","--p-epi-hi","--p-epi")}${GR("gTh2","--p-th2-hi","--p-th2",1)}${GR("gEos","--p-eos-hi","--p-eos",1)}${GR("gMast","--p-mast-hi","--p-mast",1)}${GR("gGr","--p-gr-hi","--p-gr")}${GR("gLum","--p-lum-hi","--p-lum")}${GR("gTube","--p-tube-hi","--p-tube")}${GR("gCx","--p-cx","--p-med")}
<filter id="fGlow" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="5"/></filter>
<filter id="fSh" x="-20%" y="-40%" width="140%" height="200%"><feDropShadow dx="0" dy="1.6" stdDeviation="1.8" flood-opacity=".25"/></filter></defs>`;
const psvg=(b,vb)=>svg(PDEFS+b,vb);
/* action glyphs drawn inside each pill */
const ICON={ag:'<path d="M-3.6,0 H3.6 M0,-3.6 V3.6"/>',bl:'<path d="M-3,-4 V4 M-3,0 H4"/>',inh:'<path d="M-3,-3 L3,3 M3,-3 L-3,3"/>',mab:'<path d="M0,4.2 V0.2 M0,0.2 L-3.6,-3.8 M0,0.2 L3.6,-3.8"/>',st:'<path d="M-3.6,-2 L0,-4.1 L3.6,-2 L3.6,2 L0,4.1 L-3.6,2Z"/>',mod:'<circle r="2.4"/>'};
function pill(x,y,lab,kind,key,force){const w=Math.max(60,lab.length*6.3+36);const a=force||on(key);const x0=x-w/2;
 return `<g class="pill ${kind}${a?" on":" off"}"><rect x="${x0}" y="${y-12}" width="${w}" height="24" rx="12"/><circle class="pic" cx="${x0+13}" cy="${y}" r="8"/><g class="pig" transform="translate(${x0+13},${y})">${ICON[kind]}</g>${T(x0+27,y+4,lab,{a:"start",c:"pl"})}</g>`}
const glow=(x,y,key,r=15)=>onA(key)?`<circle class="glow" cx="${x}" cy="${y}" r="${r+3}"/><circle class="hring" cx="${x}" cy="${y}" r="${r+3}"/>`:"";
const rec=(x,y,lab,vert)=>`<rect class="p-rec" x="${x-(vert?9:7)}" y="${y-(vert?7:9)}" width="${vert?18:14}" height="${vert?14:18}" rx="5"/>`+(ST.labels&&lab?T(x,y-(vert?12:14),lab,{c:"s"}):"");
const arr=(d,c="")=>`<path class="arw ${c}" d="${d}"/>`;
const cellC=(x,y,r,g,lab,sub)=>`<circle class="p-imm" cx="${x}" cy="${y}" r="${r}" fill="url(#${g})"/>`+T(x,y+(sub?-1:4),lab,{c:"bh"})+(sub?T(x,y+13,sub,{c:"s m"}):"");
function flowD(R,W=640){let b="",y=14;R.forEach(([n,dd,c],i)=>{b+=`<rect class="box ${c||""}" x="40" y="${y}" width="${W-80}" height="58" rx="14"/>`+`<circle class="stepn ${c||""}" cx="64" cy="${y+29}" r="12"/>`+T(64,y+33,i+1,{c:"sn"})+T(W/2+12,y+25,n,{c:"bh"})+T(W/2+12,y+44,dd,{c:"s"});
 if(i<R.length-1)b+=arr(`M${W/2},${y+60} L${W/2},${y+76}`);y+=80});return psvg(b,`0 0 ${W} ${y}`)}
const MAPTOOLS=[["all","Show all drugs"]];

/* ---------- overview mind map: the landing view of every pharmacology atlas ---------- */
let MMRO=null;
function mindMap(){const gs=GROUPS.filter(g=>g!=="0"),half=Math.ceil(gs.length/2),tops=SEC.filter(s=>!s.mind),n=tops.filter(s=>SEEN[s.id]).length,C=2*Math.PI*52;
 const block=(g,side)=>{const list=SEC.filter(s=>s.k===g),gi=GROUPS.indexOf(g),done=list.filter(s=>SEEN[s.id]).length;
  return `<div class="mmb ${side}${g[0]==="x"?" ext":""}" style="--gc:var(--g${gi})"><button class="mmg" type="button" data-go="${list[0].id}"><b>${GN[g]}</b><small>${done}/${list.length}</small></button><div class="mml">${list.map(s=>`<button class="mmleaf${SEEN[s.id]?" seen":""}" type="button" data-go="${s.id}"><span class="mt">${s.mm||s.t}</span>${s.drugs?`<span class="md">${s.drugs.split(" · ").slice(0,3).join(" · ")}</span>`:""}<span class="ma">${(s.act||[]).map(a=>`<i style="background:var(--d-${a})" title="${LEG[a][0]}"></i>`).join("")}<em>✓</em></span></button>`).join("")}</div></div>`};
 setTimeout(mmInit,0);
 return `<div class="mmwrap" id="mmwrap"><svg class="mmlinks" id="mmlinks" aria-hidden="true"></svg>
 <div class="mmside l">${gs.slice(half).map(g=>block(g,"l")).join("")}</div>
 <div class="mmroot"><div class="mmrc"><svg viewBox="0 0 120 120" aria-hidden="true"><circle class="rtrack" cx="60" cy="60" r="52"/>${n?`<circle class="rbar" cx="60" cy="60" r="52" stroke-dasharray="${C*n/tops.length} ${C}" transform="rotate(-90 60 60)"/>`:""}</svg><div><small>${ATLAS.sys}</small><b>${ATLAS.root}</b><span>${n}/${tops.length} seen</span></div></div></div>
 <div class="mmside r">${gs.slice(0,half).map(g=>block(g,"r")).join("")}</div></div>`}
function mmInit(){const w=document.getElementById("mmwrap");if(!w)return;mmLinks();if(!MMRO&&window.ResizeObserver){MMRO=new ResizeObserver(()=>mmLinks())}if(MMRO){MMRO.disconnect();MMRO.observe(w)}}
function mmLinks(){const w=document.getElementById("mmwrap"),sv=document.getElementById("mmlinks");if(!w||!sv)return;
 const tree=w.clientWidth<860;w.classList.toggle("tree",tree);if(tree){sv.innerHTML="";return}
 const R=w.getBoundingClientRect(),rel=el=>{const r=el.getBoundingClientRect();return{l:r.left-R.left,r:r.right-R.left,y:r.top-R.top+r.height/2}};
 const root=rel(w.querySelector(".mmrc"));let p="";
 const cv=(x1,y1,x2,y2,c,cls)=>{const m=(x1+x2)/2;return `<path class="${cls}" style="stroke:${c}" d="M${x1},${y1} C${m},${y1} ${m},${y2} ${x2},${y2}"/>`};
 w.querySelectorAll(".mmb").forEach(b=>{const r=b.classList.contains("r"),c=getComputedStyle(b).getPropertyValue("--gc"),g=rel(b.querySelector(".mmg"));
  p+=r?cv(root.r-6,root.y,g.l,g.y,c,"lk1"):cv(root.l+6,root.y,g.r,g.y,c,"lk1");
  b.querySelectorAll(".mmleaf").forEach(lf=>{const q=rel(lf);p+=r?cv(g.r,g.y,q.l,q.y,c,"lk2"):cv(g.l,g.y,q.r,q.y,c,"lk2")})});
 sv.setAttribute("width",R.width);sv.setAttribute("height",R.height);sv.innerHTML=p}
document.addEventListener("click",e=>{const b=e.target.closest("[data-go]");if(!b)return;e.preventDefault();go(b.dataset.go,true,true)});
document.addEventListener("pointerover",e=>{const b=e.target.closest(".mmb");document.querySelectorAll(".mmb.hot").forEach(x=>x!==b&&x.classList.remove("hot"));if(b)b.classList.add("hot")});

/* called after the atlas content is defined */
function atlasFinish(){
 /* First Aid = core path; anything listed in EXTRA becomes a "เสริม" group after the core */
 if(typeof EXTRA!=="undefined"&&EXTRA.length){const core=[],ext=[];SEC.forEach(s=>{if(EXTRA.includes(s.id)){s.extra=true;const nk="x"+s.k;if(!GN[nk])GN[nk]="เสริม · "+GN[s.k].replace(/^เสริม · /,"");s.k=nk;ext.push(s)}else core.push(s)});
  SEC.length=0;core.forEach(s=>SEC.push(s));const ord=[...new Set(ext.map(s=>s.k))];ord.forEach(k=>ext.filter(s=>s.k===k).forEach(s=>SEC.push(s)))}
 GN["0"]="Overview";SEC.unshift({id:"map",k:"0",t:ATLAS.mapT,mind:true,leg:[],draw:mindMap,notes:()=>""});
 const el=document.getElementById("pstats");if(el){const tops=SEC.filter(s=>!s.mind),drugs=new Set();tops.forEach(s=>(s.drugs||"").split(" · ").forEach(d=>d&&drugs.add(d)));
  el.innerHTML=`<span><b>${new Set(tops.map(s=>s.k)).size}</b> กลุ่ม</span><span><b>${tops.length}</b> หัวข้อ</span>${ATLAS.drugs&&drugs.size?`<span><b>${drugs.size}+</b> ยาต้นแบบ</span>`:""}`}}

/* ---------- auto-layout target map: sites (panels) → targets → drugs ----------
   spec: [{n:"Heart",s:"myocyte",tone:"cell",t:[{k:"key",l:"β₁ receptor",d:[["Metoprolol","bl"],...]}]}] */
const TONE={cell:"gCell",epi:"gEpi",blue:"gTh2",rose:"gEos",violet:"gMast",gold:"gGr",tube:"gTube",plain:"gLum"};
function laneMap(spec,o={}){const W=760,cols=o.cols||Math.min(3,spec.length),gap=12,lw=(W-20-(cols-1)*gap)/cols;let b="",y0=10;
 const pw=l=>Math.max(60,l.length*6.3+36);
 for(let r=0;r<spec.length;r+=cols){const row=spec.slice(r,r+cols);
  const lay=row.map(p=>{let y=50;const items=p.t.map(t=>{const lines=[[]];let x=0;t.d.forEach(d=>{const w=pw(d[0]);if(x+w>lw-20&&lines[lines.length-1].length){lines.push([]);x=0}lines[lines.length-1].push([d,x,w]);x+=w+6});
    const it={t,y,lines};y+=34+lines.length*28;return it});return {p,items,h:y+4}});
  const H=Math.max(...lay.map(l=>l.h));
  lay.forEach((l,i)=>{const x0=10+i*(lw+gap);
   b+=`<rect class="lane" x="${x0}" y="${y0}" width="${lw}" height="${H}" rx="16" fill="url(#${TONE[l.p.tone||"cell"]})"/>`+T(x0+14,y0+24,l.p.n,{a:"start",c:"bh"})+(l.p.s?T(x0+14,y0+40,l.p.s,{a:"start",c:"s m"}):"");
   l.items.forEach(it=>{const yy=y0+it.y;b+=glow(x0+20,yy+8,it.t.k,9)+`<rect class="p-rec" x="${x0+13}" y="${yy+1}" width="14" height="14" rx="4"/>`+T(x0+34,yy+13,it.t.l,{a:"start",c:"s"});
    it.lines.forEach((ln,j)=>ln.forEach(([d,dx,w])=>{b+=pill(x0+12+dx+w/2,yy+36+j*28,d[0],d[1],d[2]||it.t.k)}))})});
  y0+=H+gap}
 return psvg(b,`0 0 ${W} ${y0}`)}
const LMAP=(spec,o)=>keys=>()=>{HL=keys;return laneMap(spec,o)};

/* compact drawing helpers for system target maps */
const panel=(x,y,w,h,t)=>`<rect class="p-panel" x="${x}" y="${y}" width="${w}" height="${h}" rx="16"/>`+T(x+14,y+22,t,{a:"start",c:"bh pt"});
const nb=(x,y,w,h,t,s,cls="")=>`<rect class="p-enz ${cls}" x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" rx="9"/>`+T(x,y+(s?-2:4),t,{c:"bh"})+(s?T(x,y+12,s,{c:"s m"}):"");
const onA=k=>Array.isArray(k)?k.some(on):on(k);
const nbh=(x,y,w,h,t,s,key,cls="")=>nb(x,y,w,h,t,s,cls+(onA(key)?" hot":""))+(onA(key)?`<rect class="glow" x="${x-w/2-6}" y="${y-h/2-6}" width="${w+12}" height="${h+12}" rx="13"/>`:"");
const ln=(x1,y1,x2,y2)=>arr(`M${x1},${y1} L${x2},${y2}`);
const MAPOF=(fn)=>keys=>()=>{HL=keys;return fn()};

/* Keep only the listed sections, in this order, under new group keys.
   G = {sectionId: groupKey}, M = optional {sectionId: mind-map label}. Used by atlases assembled from shared section libraries. */
function regroup(G,M){const m=new Map(SEC.map(s=>[s.id,s]));SEC.length=0;Object.keys(G).forEach(id=>{const s=m.get(id);if(!s)throw Error("regroup: no section "+id);s.k=G[id];if(M&&M[id])s.mm=M[id];SEC.push(s)})}

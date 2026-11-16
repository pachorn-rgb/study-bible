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
 AAT:"alpha-1 antitrypsin",GOLD:"Global Initiative for Chronic Obstructive Lung Disease"};
/* never expanded: formula fragments, gene and protein symbols, and names read as words */
const ABBR_OK=new Set(["ATP","ADP","AMP","cAMP","ATPase","DNA","RNA","mRNA","pH","HCO","NaHCO","NH","PCO","PO","CO","KCl","NaCl","MgSO","CaCl",
 "AA","AL","IgA","IgG","IgM","IgE","C3","C4","C1q","C5","CD","CD4","CD8","CD20","CD28","CD80","ABO","WHO","ISUP","AJCC","KDOQI",
 "TSC","TSC1","TSC2","MUC1","REN","HNF1B","COL4A3","COL4A4","COL4A5","PKD1","PKD2","PKHD1","APOL1","PLA2R","LIMS","CXCL9","DNAJB9",
 "HIF","TGF","VEGF","PDGF","FGF","EGF","IGF","TNF","IL","IFN","WNK","CaSR","TRPV5","FKBP","mTOR","IMPDH","NC1","GzmB","TCR","Tfh","Th1","Th2","Th17",
 "AGEs","AT","AV","BK","BM","BH","CA","CH","HA","IN","JW","LN","NS","PK","SBP","RAS","TP","UC","US","GV","SEC","HS","ST","CVA","KPT","AAF","JGen","MR","GI","AV","RA","FABP","NAG","OB","OC","NADH","FADH","NADPH","FAD","NAD","GM","GM1","GM2","cGMP","DAG","IP","IP3","IXa","IIc","FA","MP","DA","NM","VOMIT","SMASHED","GET","CRISPR","HR","AS","MS","AD","AR","PE","CSF","BRCA1","BRCA2","MUTYH","KIT","CD117","NF1","MLH1","BRAF","KRAS","SMAD4","PRSS1","CFTR","RET","AIRE","VDR","TRPV6","RANKL","PTHrP","FGF23","TNFR1","RIPK1","RIPK3","MLKL","TPMT","NUDT15","G6PD","CYP450","CYP2C19","CYP2D6","NS3","NS5A","NS5B","STK11","PJ","MSH2","CEOS","TCF","MYC","SMAD2","TGFBR2","BAX","WT1","WT2","UMOD","ADAMTS13","SARS","SHV","TEM","PNMT","TK","UL97","CD40","CD52","IV","EPS","ADPKD_","UF","PD","HD","DDD","C3G","HSP","GPA","MPA","EGPA","APS","LCDD","HCDD","LHCDD","MGRS","SAA","AKIN","PTC","Gen","AN","AAN","TURP","JW","JdF","JdFW","dFJ","dF","KPT","AAF","FA1","FA2","PYR","GLG","GL","HPO","GLUC","PG","PB","NE","NO","TF","UT","SV","LE","PK","PTK","THAM","CREDENCE","EMPA","REG","PEG","IBS","LPS","CaSR","TRPC6","ACTN4","THSD7A","FGFR3","PI3K","TP53","RB","WNK","AVPR2","DRB1","vWF","iTTP","STEC","NC1","ECM","SAME","HSD2","AQP3","AQP4","IIa","IC","SAA","LFCN","WJ","CK19","UV","PLA2R2","BTP","CH50","HSP","RAS","CD80","CD86","CD28","CD20","IL","FKBP","COX2"]);
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

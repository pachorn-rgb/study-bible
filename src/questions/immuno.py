M="pharm-immuno"
SUB="Immunosuppressants"
BOSS=dict(th="เคสใหญ่: หลังปลูกถ่ายไต",en="Boss case: After the kidney transplant",
case="A 45-year-old man received a deceased-donor kidney transplant 3 months ago. He takes tacrolimus, mycophenolate and prednisone. He now has new tremor and BP 160/95 mm Hg, and creatinine has risen from 1.2 to 1.8 mg/dL.",
qs=[
("Tacrolimus works by:",["FKBP binding → calcineurin inhibition","FKBP binding → mTOR inhibition","IMPDH inhibition → ↓ purine synthesis","IL-2 receptor (CD25) blockade"],0,"Calcineurin dephosphorylates NFAT; blocking it ↓ IL-2 transcription."),
("His tremor, hypertension and rising creatinine suggest:",["Calcineurin inhibitor toxicity","Mycophenolate toxicity","Acute steroid withdrawal","Hyperacute antibody rejection"],0,"Check trough level; biopsy may be needed to exclude rejection."),
("A drug that would raise tacrolimus levels:",["Clarithromycin","Rifampin","Carbamazepine","St John’s wort"],0,"Clarithromycin and azole antifungals (ketoconazole) are CYP3A4 inhibitors; inducers lower levels and risk rejection."),
("Mycophenolate acts by:",["IMPDH inhibition → ↓ guanine synthesis","Calcineurin inhibition → ↓ IL-2","mTOR inhibition → G1 cell-cycle arrest","Anti-CD20 → B-cell depletion"],0,"Inhibits IMP dehydrogenase, which lymphocytes depend on; GI upset, cytopenias; teratogenic."),
("Which immunosuppressant is nephro-sparing and may replace tacrolimus?",["Sirolimus (or belatacept)","Cyclosporine (cyclophilin)","Azathioprine (purine analog)","Basiliximab (anti-CD25)"],0,"Sirolimus is not nephrotoxic but causes hyperlipidemia and poor wound healing."),
("Long-term prednisone in transplant recipients causes:",["Hyperglycemia, osteoporosis, infections","Hyperkalemia and hypoglycemia","Gingival hyperplasia and hirsutism","Pulmonary fibrosis and hearing loss"],0,"Cushingoid effects."),
],pass_=4)
T={
"tcell":[("Basiliximab targets:",["IL-2 receptor (CD25)","CD20 on B cells","CD52 on lymphocytes","CD3 on T cells"],0,"Used for induction."),
 ("Belatacept blocks:",["CD80/86 (costimulation)","IL-2 receptor (CD25)","CD3 (TCR complex)","TNF-α (soluble cytokine)"],0,"Binds CD80/86 to block T-cell costimulation; used in kidney transplant.")],
"cni":[("Cyclosporine adverse effects include:",["Nephrotoxicity and gingival hyperplasia","Pancreatitis and lactic acidosis","Pulmonary fibrosis and ototoxicity","Hemorrhagic cystitis and alopecia"],0,"Also hirsutism; tacrolimus has more neurotoxicity and diabetes."),
 ("Cyclosporine binds:",["Cyclophilin","FK-binding protein (FKBP)","mTOR kinase","IMPDH"],0,"Both CNIs inhibit calcineurin.")],
"mtor":[("Sirolimus binds FKBP and inhibits:",["mTOR (IL-2 signaling)","Calcineurin (IL-2 transcription)","IMPDH (guanine synthesis)","Thymidylate synthase"],0,"Blocks IL-2 signal transduction; used on drug-eluting stents."),
 ("Sirolimus adverse effects:",["Hyperlipidemia and poor wound healing","Nephrotoxicity and gingival hyperplasia","Hearing loss and hemorrhagic cystitis","Hyperkalemia and hypoglycemia"],0,"Also thrombocytopenia; not nephrotoxic.")],
"antimetab":[("Azathioprine toxicity increases with:",["Allopurinol and TPMT deficiency","Leucovorin and folate intake","Rifampin and CYP3A4 induction","Grapefruit juice and CYP3A4"],0,"Converted to 6-MP, which xanthine oxidase and TPMT inactivate."),
 ("Mycophenolate is associated with:",["Teratogenicity and GI upset","Ototoxicity and tinnitus","Hirsutism and gum hyperplasia","Hyperkalemia and gout"],0,"Pregnancy testing and contraception required.")],
"gc":[("Glucocorticoids suppress immunity by:",["Inhibiting NF-κB → ↓ cytokines","Inhibiting calcineurin → ↓ NFAT","Blocking mTOR → G1 arrest","Depleting CD20+ B cells"],0,"Suppress cytokine transcription; also cause neutrophilia and lymphopenia."),
 ("Stress-dose steroids are needed in long-term steroid users during:",["Surgery or acute illness","Routine mild exercise","Overnight sleep periods","Routine dental cleaning"],0,"Prevents adrenal crisis.")],
"cytokine":[("Interferon-β is used for:",["Multiple sclerosis","Hepatitis C first-line","Chronic granulomatous disease","Melanoma"],0,"IFN-γ is used for CGD."),
 ("Aldesleukin (IL-2) is used for:",["Metastatic RCC and melanoma","Anemia of chronic kidney disease","Chemotherapy-induced neutropenia","Immune thrombocytopenia (ITP)"],0,"Metastatic renal cell carcinoma; capillary leak syndrome.")],
"abs":[("Rituximab targets:",["CD20 on B cells","CD3 on T cells","CD52 on lymphocytes","IL-6 receptor"],0,"NHL, CLL, RA, ITP; risk of HBV reactivation and PML."),
 ("Alemtuzumab targets:",["CD52","CD20","CD25","VEGF"],0,"Used in CLL and multiple sclerosis.")],
}

M="pharm-immuno"
SUB="Immunosuppressants"
BOSS=dict(th="เคสใหญ่: หลังปลูกถ่ายไต",en="Boss case: After the kidney transplant",
case="A 45-year-old man received a deceased-donor kidney transplant 3 months ago. He takes tacrolimus, mycophenolate and prednisone. He now has new tremor and BP 160/95 mm Hg, and creatinine has risen from 1.2 to 1.8 mg/dL.",
qs=[
("Tacrolimus works by:",["Binding FKBP → inhibiting calcineurin → ↓ IL-2 transcription","Inhibiting mTOR","Blocking purine synthesis","Blocking IL-2 receptor"],0,"Calcineurin dephosphorylates NFAT."),
("His tremor, hypertension and rising creatinine suggest:",["Calcineurin inhibitor toxicity","Mycophenolate toxicity","Steroid withdrawal","Hyperacute rejection"],0,"Check trough level; biopsy may be needed to exclude rejection."),
("A drug that would raise tacrolimus levels:",["Ketoconazole or clarithromycin (CYP3A4 inhibitors)","Rifampin","Carbamazepine","St John’s wort"],0,"Inducers lower levels and risk rejection."),
("Mycophenolate acts by:",["Inhibiting IMP dehydrogenase → ↓ guanine synthesis in lymphocytes","Inhibiting calcineurin","Blocking mTOR","Depleting B cells"],0,"GI upset, cytopenias; teratogenic."),
("Which immunosuppressant is nephro-sparing and may replace tacrolimus?",["Sirolimus (or belatacept)","Cyclosporine","Azathioprine","Basiliximab"],0,"Sirolimus is not nephrotoxic but causes hyperlipidemia and poor wound healing."),
("Long-term prednisone in transplant recipients causes:",["Hyperglycemia, osteoporosis, infections","Hyperkalemia","Gingival hyperplasia","Hirsutism"],0,"Cushingoid effects."),
],pass_=4)
T={
"tcell":[("Basiliximab targets:",["IL-2 receptor (CD25)","Calcineurin","mTOR","CD20"],0,"Used for induction."),
 ("Belatacept blocks:",["T-cell costimulation by binding CD80/86","IL-2","TNF-α","CD3"],0,"Used in kidney transplant.")],
"cni":[("Cyclosporine adverse effects include:",["Nephrotoxicity, gingival hyperplasia, hirsutism","Pancreatitis","Pulmonary fibrosis","Hearing loss"],0,"Tacrolimus has more neurotoxicity and diabetes."),
 ("Cyclosporine binds:",["Cyclophilin","FKBP","mTOR","IMPDH"],0,"Both CNIs inhibit calcineurin.")],
"mtor":[("Sirolimus binds FKBP and inhibits:",["mTOR → blocks IL-2 signal transduction","Calcineurin","IMPDH","Purine synthesis"],0,"Used on drug-eluting stents."),
 ("Sirolimus adverse effects:",["Hyperlipidemia, thrombocytopenia, poor wound healing","Nephrotoxicity","Gingival hyperplasia","Hypoglycemia"],0,"Not nephrotoxic.")],
"antimetab":[("Azathioprine toxicity increases with:",["Allopurinol and TPMT deficiency","Leucovorin","Rifampin","Grapefruit juice only"],0,"Converted to 6-MP."),
 ("Mycophenolate is associated with:",["Teratogenicity and GI upset","Ototoxicity","Hirsutism","Hyperkalemia"],0,"Pregnancy testing and contraception required.")],
"gc":[("Glucocorticoids suppress immunity by:",["Inhibiting NF-κB and cytokine transcription","Inhibiting calcineurin","Blocking mTOR","Depleting B cells"],0,"Also cause neutrophilia and lymphopenia."),
 ("Stress-dose steroids are needed in long-term steroid users during:",["Surgery or acute illness","Mild exercise","Meals","Sleep"],0,"Prevents adrenal crisis.")],
"cytokine":[("Interferon-β is used for:",["Multiple sclerosis","Hepatitis C first-line","Chronic granulomatous disease","Melanoma"],0,"IFN-γ is used for CGD."),
 ("Aldesleukin (IL-2) is used for:",["Metastatic renal cell carcinoma and melanoma","Anemia of CKD","Neutropenia","Thrombocytopenia"],0,"Capillary leak syndrome.")],
"abs":[("Rituximab targets:",["CD20 on B cells","CD3","CD52","IL-6"],0,"NHL, CLL, RA, ITP; risk of HBV reactivation and PML."),
 ("Alemtuzumab targets:",["CD52","CD20","CD25","VEGF"],0,"Used in CLL and multiple sclerosis.")],
}

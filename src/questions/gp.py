M="pharm-gp"
SUBS={"enzyme":"Pharmacokinetics & Pharmacodynamics","pk":"Pharmacokinetics & Pharmacodynamics","metab":"Pharmacokinetics & Pharmacodynamics","pd":"Pharmacokinetics & Pharmacodynamics"}
DEFSUB="Autonomic Drugs"
BOSS=dict(th="เคสใหญ่: ความดันพุ่งเป็นพักๆ",en="Boss case: Spells of pounding headache",
case="A 42-year-old woman has episodes of pounding headache, palpitations and sweating. BP during a spell is 210/120 mm Hg. Plasma free metanephrines are high, and CT shows a 4-cm adrenal mass. Surgery is planned.",
qs=[
("Diagnosis:",["Pheochromocytoma","Primary hyperaldosteronism","Cushing syndrome","Carcinoid"],0,"Catecholamine-secreting chromaffin tumor."),
("Preoperative drug to start first:",["Phenoxybenzamine (irreversible α-blocker)","Propranolol","Hydralazine","Furosemide"],0,"α-blockade before β-blockade."),
("Why must a β-blocker not be given first?",["Unopposed α₁ vasoconstriction → hypertensive crisis","It causes hypoglycemia","It worsens tachycardia","It blocks catecholamine synthesis"],0,"β₂ vasodilation is lost."),
("Phenoxybenzamine's blockade cannot be overcome by more agonist because it is:",["Irreversible (noncompetitive) — ↓ efficacy","Competitive — ↑ EC₅₀ only","Partial agonist","Inverse agonist"],0,"Shifts the dose–response curve down."),
("Metyrosine is useful because it:",["Inhibits tyrosine hydroxylase → ↓ catecholamine synthesis","Blocks β₁","Blocks dopamine receptors","Is a COMT inhibitor"],0,"Rate-limiting step."),
("Epinephrine at high doses mainly acts on:",["α₁ receptors (vasoconstriction)","β₂ receptors","M₂ receptors","D₁ receptors"],0,"Low doses favor β effects."),
],pass_=4)
T={
"enzyme":[("A competitive inhibitor:",["Increases Km, Vmax unchanged","Decreases Vmax, Km unchanged","Decreases both","Increases Vmax"],0,"Overcome by more substrate."),
 ("On a Lineweaver–Burk plot, a noncompetitive inhibitor:",["Raises the y-intercept (↓ Vmax), same x-intercept","Shifts only the x-intercept","Lowers the slope","Has no effect"],0,"Km unchanged.")],
"pk":[("Loading dose depends on:",["Vd × target concentration / F","Clearance only","Half-life only","Dosing interval"],0,"Maintenance dose depends on clearance."),
 ("Steady state is reached after about:",["4–5 half-lives","1 half-life","10 half-lives","Depends on dose only"],0,"Independent of dose for first-order drugs.")],
"metab":[("Phase II metabolism includes:",["Glucuronidation, acetylation, sulfation","Oxidation","Reduction","Hydrolysis"],0,"Elderly lose phase I first."),
 ("Zero-order elimination drugs include:",["Phenytoin, ethanol, aspirin (high dose)","Penicillin","Lithium","Gentamicin"],0,"Constant amount eliminated per unit time.")],
"pd":[("A drug with higher potency has:",["Lower EC₅₀","Higher Emax","Higher Vd","Longer half-life"],0,"Efficacy = maximal effect."),
 ("Therapeutic index is:",["TD₅₀ / ED₅₀","ED₅₀ / TD₅₀","Emax / EC₅₀","Vd / CL"],0,"Higher TI = safer drug.")],
"ansmap":[("Postganglionic sympathetic fibers to sweat glands release:",["Acetylcholine (muscarinic)","Norepinephrine","Epinephrine","Dopamine"],0,"Exception in the sympathetic system."),
 ("β₁ receptors couple to:",["Gs → ↑ cAMP","Gq → ↑ IP₃","Gi → ↓ cAMP","Ion channel"],0,"α₁ is Gq, α₂ is Gi, M₂ is Gi.")],
"cholino":[("Bethanechol is used for:",["Postoperative urinary retention","Glaucoma only","Alzheimer disease","Myasthenia diagnosis"],0,"Muscarinic agonist resistant to AChE."),
 ("Pyridostigmine treats myasthenia gravis by:",["Inhibiting acetylcholinesterase","Direct nicotinic agonism","Blocking antibodies","Releasing ACh"],0,"Does not cross the BBB.")],
"antimusc":[("Atropine effects include:",["Mydriasis, tachycardia, dry skin, urinary retention","Miosis","Bradycardia only","Diarrhea"],0,"Hot as a hare, dry as a bone…"),
 ("Oxybutynin is used for:",["Overactive bladder","Asthma","Glaucoma","Motion sickness"],0,"Scopolamine is used for motion sickness.")],
"symp":[("Drug of choice for anaphylaxis:",["IM epinephrine","Diphenhydramine","Prednisone","Albuterol"],0,"α₁ vasoconstriction plus β₂ bronchodilation."),
 ("Dobutamine mainly acts on:",["β₁ receptors (↑ contractility)","α₁","D₁ only","β₂ only"],0,"Used in cardiogenic shock and stress testing.")],
"sympatholytic":[("Clonidine lowers BP via:",["Central α₂ agonism → ↓ sympathetic outflow","α₁ blockade","β blockade","ACE inhibition"],0,"Rebound hypertension if stopped abruptly."),
 ("First-dose orthostatic hypotension is typical of:",["Prazosin","Clonidine","Propranolol","Methyldopa"],0,"Selective α₁ blocker.")],
"bblock":[("A β-blocker with intrinsic sympathomimetic activity:",["Pindolol","Metoprolol","Atenolol","Propranolol"],0,"Partial agonist."),
 ("Labetalol and carvedilol block:",["Both α₁ and β receptors","β₁ only","β₂ only","α₂ only"],0,"Labetalol is used in pregnancy.")],
"pdei":[("Sildenafil inhibits PDE5 →",["↑ cGMP → smooth muscle relaxation","↑ cAMP in heart","↓ cGMP","Blocks Ca²⁺ channels"],0,"Used for ED and pulmonary hypertension."),
 ("Milrinone is a PDE3 inhibitor used for:",["Acute decompensated heart failure","Asthma","ED","Claudication"],0,"↑ cAMP → inotropy and vasodilation; cilostazol is PDE3 for claudication.")],
}

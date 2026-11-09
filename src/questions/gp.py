M="pharm-gp"
SUBS={"enzyme":"Pharmacokinetics & Pharmacodynamics","pk":"Pharmacokinetics & Pharmacodynamics","metab":"Pharmacokinetics & Pharmacodynamics","pd":"Pharmacokinetics & Pharmacodynamics"}
DEFSUB="Autonomic Drugs"
BOSS=dict(th="เคสใหญ่: ความดันพุ่งเป็นพักๆ",en="Boss case: Spells of pounding headache",
case="A 42-year-old woman has episodes of pounding headache, palpitations and sweating. BP during a spell is 210/120 mm Hg. Plasma free metanephrines are high, and CT shows a 4-cm adrenal mass. Surgery is planned.",
qs=[
("Diagnosis:",["Pheochromocytoma","Primary hyperaldosteronism","Cushing syndrome","Carcinoid"],0,"Catecholamine-secreting chromaffin tumor."),
("Preoperative drug to start first:",["Phenoxybenzamine (irreversible α-blocker)","Propranolol (nonselective β-blocker)","Hydralazine (arteriolar dilator)","Furosemide (loop diuretic)"],0,"α-blockade before β-blockade."),
("Why must a β-blocker not be given first?",["Unopposed α₁ vasoconstriction","It causes severe hypoglycemia","It worsens reflex tachycardia","It blocks catecholamine synthesis"],0,"β₂ vasodilation is lost. This can precipitate a hypertensive crisis."),
("Phenoxybenzamine's blockade cannot be overcome by more agonist because it is:",["Irreversible (noncompetitive)","Competitive and reversible — ↑ EC₅₀","A partial agonist at α receptors","An inverse agonist at α receptors"],0,"Shifts the dose–response curve down. Irreversible blockade ↓ efficacy (Emax)."),
("Metyrosine is useful because it:",["Inhibits tyrosine hydroxylase","Inhibits dopamine β-hydroxylase","Inhibits catechol-O-methyltransferase","Blocks postsynaptic D₂ receptors"],0,"Rate-limiting step → ↓ catecholamine synthesis."),
("Epinephrine at high doses mainly acts on:",["α₁ receptors (vasoconstriction)","β₂ receptors (vasodilation)","M₂ receptors (bradycardia)","D₁ receptors (renal dilation)"],0,"Low doses favor β effects."),
],pass_=4)
T={
"enzyme":[("A competitive inhibitor:",["Increases Km, Vmax unchanged","Decreases Vmax, Km unchanged","Decreases both","Increases Vmax"],0,"Overcome by more substrate."),
 ("On a Lineweaver–Burk plot, a noncompetitive inhibitor:",["Higher y-intercept (↓ Vmax), same x-intercept","Same y-intercept, shifted x-intercept (↑ Km)","Parallel line shift (both Vmax and Km ↓)","No change in either intercept"],0,"Km unchanged.")],
"pk":[("Loading dose depends on:",["Vd × target concentration / F","CL × target concentration / F","Half-life × dosing interval","Clearance and half-life only"],0,"Maintenance dose depends on clearance."),
 ("Steady state is reached after about:",["4–5 half-lives","1 half-life","10 half-lives","Depends on dose only"],0,"Independent of dose for first-order drugs.")],
"metab":[("Phase II metabolism includes:",["Glucuronidation, acetylation, sulfation","Oxidation, reduction, hydrolysis","Hydroxylation, N-dealkylation, oxidation","Hydrolysis, deamination, reduction"],0,"Elderly lose phase I first."),
 ("Zero-order elimination drugs include:",["Phenytoin, ethanol, aspirin (high dose)","Penicillin, gentamicin, vancomycin","Lithium, digoxin, metformin","Cefazolin, metoprolol, lisinopril"],0,"Constant amount eliminated per unit time.")],
"pd":[("A drug with higher potency has:",["Lower EC₅₀","Higher Emax","Higher Vd","Longer half-life"],0,"Efficacy = maximal effect."),
 ("Therapeutic index is:",["TD₅₀ / ED₅₀","ED₅₀ / TD₅₀","Emax / EC₅₀","Vd / CL"],0,"Higher TI = safer drug.")],
"ansmap":[("Postganglionic sympathetic fibers to sweat glands release:",["Acetylcholine (muscarinic)","Norepinephrine (adrenergic)","Epinephrine (adrenergic)","Dopamine (D₁)"],0,"Exception in the sympathetic system."),
 ("β₁ receptors couple to:",["Gs → ↑ cAMP","Gq → ↑ IP₃","Gi → ↓ cAMP","Ion channel"],0,"α₁ is Gq, α₂ is Gi, M₂ is Gi.")],
"cholino":[("Bethanechol is used for:",["Postoperative urinary retention","Alzheimer disease dementia","Diagnosis of myasthenia gravis","Organophosphate poisoning"],0,"Muscarinic agonist resistant to AChE."),
 ("Pyridostigmine treats myasthenia gravis by:",["Inhibiting acetylcholinesterase","Directly agonizing nicotinic receptors","Removing anti-AChR antibodies","Increasing presynaptic ACh release"],0,"Does not cross the BBB.")],
"antimusc":[("Atropine effects include:",["Mydriasis, tachycardia, urinary retention","Miosis, bradycardia, bronchorrhea, diarrhea","Mydriasis, bradycardia, diarrhea","Miosis, tachycardia, sweating"],0,"Hot as a hare, dry as a bone…"),
 ("Oxybutynin is used for:",["Overactive bladder","Asthma","Glaucoma","Motion sickness"],0,"Scopolamine is used for motion sickness.")],
"symp":[("Drug of choice for anaphylaxis:",["IM epinephrine","Diphenhydramine","Prednisone","Albuterol"],0,"α₁ vasoconstriction plus β₂ bronchodilation."),
 ("Dobutamine mainly acts on:",["β₁ receptors (↑ contractility)","α₁ receptors (vasoconstriction)","D₁ receptors (renal vasodilation)","β₂ receptors (bronchodilation)"],0,"Used in cardiogenic shock and stress testing.")],
"sympatholytic":[("Clonidine lowers BP via:",["Central α₂ agonism","Peripheral α₁ blockade","β₁ receptor blockade","ACE inhibition"],0,"Rebound hypertension if stopped abruptly. Central α₂ stimulation → ↓ sympathetic outflow."),
 ("First-dose orthostatic hypotension is typical of:",["Prazosin","Clonidine","Propranolol","Methyldopa"],0,"Selective α₁ blocker.")],
"bblock":[("A β-blocker with intrinsic sympathomimetic activity:",["Pindolol","Metoprolol","Atenolol","Propranolol"],0,"Partial agonist."),
 ("Labetalol and carvedilol block:",["Both α₁ and β receptors","β₁ receptors selectively","α₁ and α₂ receptors","β₁ and β₂ but not α₁"],0,"Labetalol is used in pregnancy.")],
"pdei":[("Sildenafil inhibits PDE5 →",["↑ cGMP → smooth muscle relaxation","↑ cAMP → cardiac inotropy","↓ cGMP → smooth muscle contraction","Ca²⁺ channel block → vasodilation"],0,"Used for ED and pulmonary hypertension."),
 ("Milrinone is a PDE3 inhibitor used for:",["Acute decompensated heart failure","Chronic asthma (bronchodilation)","Erectile dysfunction","Benign prostatic hyperplasia"],0,"↑ cAMP → inotropy and vasodilation; cilostazol is PDE3 for claudication.")],
}

M="biochem-genetics-2"
SUB="Genetics"
T={
"repeat":[("Huntington disease is caused by expansion of which triplet?",["CAG","CTG","CGG","GAA"],0,"It encodes glutamine, which is why these are called polyglutamine disorders."),
 ("Anticipation means that a disease in successive generations becomes:",["Earlier and more severe","Later and less severe","Confined to one sex","Harder to detect by testing"],0,"The repeat expands further as it is transmitted."),
 ("Friedreich ataxia differs from the other repeat disorders listed in that it is:",["Autosomal recessive","X-linked dominant","Maternally inherited","Caused by a deletion"],0,"The GAA expansion sits in an intron and reduces frataxin production, and both copies must be affected.",2)],
"fragx":[("The repeat expanded in fragile X syndrome lies in which gene?",["FMR1","MECP2","DMPK","HTT"],0,"The CGG expansion sits in the 5' untranslated region of its first exon."),
 ("Which physical finding appears in fragile X syndrome after puberty?",["Macroorchidism","Short stature","Webbed neck","Cataracts"],0,"A long face with a prominent jaw and large ears are the other classic features."),
 ("Why does a full mutation silence the FMR1 gene?",["The expansion triggers methylation","The expansion shifts the reading frame","The expansion deletes the promoter","The expansion creates a stop codon"],0,"A heavily expanded CGG tract becomes methylated, so the gene is switched off and no FMRP is made.",3)],
"dmd":[("Duchenne and Becker muscular dystrophy differ because the Duchenne mutation is:",["Out of frame","In frame","A point mutation","In the promoter"],0,"Becker mutations preserve the reading frame, so some partly working dystrophin remains."),
 ("The dystrophin gene is notable for:",["Its very large size","Having no introns","Lying on chromosome 21","Being imprinted"],0,"It spans over two million base pairs, of which less than one percent is coding exon."),
 ("A 4-year-old boy pushes on his thighs to stand up from the floor and has enlarged calves. The most useful initial blood test is:",["Creatine kinase","Serum aldolase alone","Antinuclear antibody","Thyroid stimulating hormone"],0,"Creatine kinase is markedly raised from before symptoms begin, so it is the standard first-line screen.",3)],
"rett":[("Rett syndrome is caused by mutations in:",["MECP2","FMR1","DMPK","SMN1"],0,"It encodes methyl-CpG-binding protein 2."),
 ("Rett syndrome occurs almost exclusively in girls because it is:",["X-linked dominant and lethal in males","X-linked recessive","Imprinted on the paternal allele","Carried on the Y chromosome"],0,"Hemizygous males usually do not survive."),
 ("Which feature distinguishes Rett syndrome from idiopathic autism?",["A period of normal early development","An earlier age at first symptoms","The presence of seizures","A family history of the disorder"],0,"Growth and development are normal before a rapid regression with loss of purposeful hand use and speech.",3)],
"trisomy":[("Which three autosomal trisomies are compatible with live birth?",["13, 18 and 21","14, 16 and 21","15, 18 and 22","16, 18 and 21"],0,"These are the three autosomes carrying the fewest genes."),
 ("Monosomy for a whole chromosome is almost always lethal, with which important exception?",["Monosomy X","Monosomy 21","Monosomy 18","Monosomy 13"],0,"That exception is Turner syndrome."),
 ("Why are only these three autosomal trisomies seen in liveborn infants?",["They carry the fewest genes","They are the smallest chromosomes","They replicate last in S phase","They lack imprinted regions"],0,"Trisomy for a gene-richer autosome creates a dosage imbalance that is lethal in almost all cases.",3)],
"robert":[("A Robertsonian translocation involves the joining of:",["Two acrocentric chromosomes","Two metacentric chromosomes","A chromosome and a plasmid","Two sister chromatids"],0,"Chromosomes 13, 14, 15, 21 and 22 are the acrocentric ones."),
 ("A carrier of a balanced Robertsonian translocation is:",["Phenotypically normal","Mildly dysmorphic","Always infertile","Intellectually impaired"],0,"The risk falls on the offspring, through unbalanced gametes."),
 ("A 24-year-old woman has a child with Down syndrome. Karyotyping of the parents is indicated chiefly to:",["Identify a translocation carrier","Confirm the child's diagnosis","Exclude maternal mosaicism","Determine the parental origin"],0,"A translocation carries a far higher recurrence risk than nondisjunction, which matters for the next pregnancy.",3)],
"del":[("Cri du chat syndrome results from deletion on which chromosome?",["The short arm of 5","The long arm of 5","The short arm of 4","The long arm of 7"],0,"The name comes from the cat-like cry of affected infants."),
 ("Williams syndrome characteristically includes:",["Hypercalcaemia and a friendly manner","Hypocalcaemia and social withdrawal","Hypoglycaemia and hypotonia","Hyperkalaemia and seizures"],0,"Supravalvular aortic stenosis follows from loss of the elastin gene."),
 ("A newborn has a conotruncal cardiac defect, hypocalcaemic seizures and absent thymic shadow. The most likely deletion is:",["22q11.2","15q11-q13","5p","7q11"],0,"Failure of the third and fourth pharyngeal pouches explains the thymic and parathyroid findings together with the heart defect.",3)],
}

BOSS=dict(
 th="เคสใหญ่: หญิงอายุ 32 ปี กังวลเรื่องการตั้งครรภ์ครั้งถัดไป",
 en="Boss case: a 32-year-old woman asking about her next pregnancy",
 case="หญิงอายุ 32 ปี มาปรึกษาเรื่องการตั้งครรภ์ครั้งถัดไป ลูกคนแรกของเธอได้รับการวินิจฉัยว่าเป็น Down syndrome ตอนแรกเกิด เธออายุ 29 ปีตอนตั้งครรภ์คนแรก และไม่มีประวัติโรคพันธุกรรมในครอบครัวทั้งสองฝ่าย ผลโครโมโซมของลูกรายงานว่ามีโครโมโซม 46 แท่ง",
 qs=[("The child has Down syndrome but a count of 46 chromosomes. This indicates:",["A translocation form","Mosaic trisomy 21","A laboratory error","Partial monosomy 21"],0,"Extra chromosome 21 material is attached to another chromosome, so the total count stays at 46."),
  ("Which type of translocation is responsible?",["Robertsonian","Reciprocal balanced","Insertional","Pericentric inversion"],0,"The long arms of two acrocentric chromosomes fuse; chromosome 21 is acrocentric."),
  ("The next step in counselling this couple is to:",["Karyotype both parents","Offer amniocentesis only","Reassure that risk is age-related","Test the child for fragile X"],0,"One parent may be a balanced carrier, which changes the recurrence risk entirely."),
  ("If the mother proves to be a balanced carrier, she will be:",["Phenotypically normal","Mildly dysmorphic","Infertile","Intellectually impaired"],0,"Her total genetic material is balanced; only her gametes are at risk of being unbalanced."),
  ("Compared with a carrier father, a carrier mother generally has:",["A higher risk of an affected child","A lower risk of an affected child","An identical risk of transmission","No risk of transmission at all"],0,"Risk varies with the specific translocation and with the sex of the carrier parent, and carrier females have the higher risk overall."),
  ("Had the child instead shown 47 chromosomes, the mechanism would have been:",["Nondisjunction","Robertsonian translocation","Uniparental disomy","Germline mosaicism"],0,"Failure of a chromosome pair to separate during meiosis gives a whole extra chromosome, and this form rises with maternal age rather than running in families.")],
 pass_=5)

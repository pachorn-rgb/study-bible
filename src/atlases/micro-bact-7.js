//@include _micro-helpers.js
Object.assign(S,{mu:'<b class="sbb murray">Mu</b>'});
Object.assign(GN,{a:"Rickettsia and relatives",b:"Chlamydia",c:"Mycoplasma",d:"Anaerobes"});

/* ===================================================================
   Obligate intracellular bacteria, wall-less bacteria and the
   non-spore-forming anaerobes — Murray ch 31, 33, 34 and 35.
   =================================================================== */

SEC.push({id:"rick-intra",k:"a",t:"Rickettsia lives free in the cytoplasm",mm:"Intracellular life",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"ทั้งสองกลุ่มหนีออกจาก phagosome เหมือนกัน แต่ออกจากเซลล์คนละทาง",{a:"start",c:"bh"});
 const bac=(x,y,rot,s,cl)=>`<g transform="rotate(${rot.toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"><path style="fill:${cl||"#C2334A"};stroke:none" d="${mrod(x,y,13,3.1,s)}"/></g>`;
 const cell=(cx,cy,seed,lysed)=>{let g="";
  const body=mblob(cx,cy,132,98,seed,.06);
  g+=`<path class="m-cell" style="fill:color-mix(in srgb,#3E6FB0 7%,var(--sb-surface));stroke:color-mix(in srgb,var(--sb-ink) ${lysed?"14":"30"}%,var(--sb-surface));stroke-width:${lysed?1.2:2};${lysed?"stroke-dasharray:7 6":""}" d="${body}"/>`
   +mgrainIn("ri"+seed,body,cx-132,cy-98,264,196,150,seed+4,"m-gr",.85);
  const nb=mblob(cx-6,cy-12,44,36,seed+9,.08);
  g+=`<path style="fill:color-mix(in srgb,#6B4FC8 16%,var(--sb-surface));stroke:color-mix(in srgb,#6B4FC8 46%,var(--sb-surface));stroke-width:1.6" d="${nb}"/>`
   +mgrainIn("rn"+seed,nb,cx-50,cy-48,88,72,60,seed+7,"m-gr2",.8);
  return g};
 /* spotted fever group — replicates in cytoplasm and nucleus, leaves on an actin tail.
    The projection goes down first so the cell body covers where it joins. */
 b+=`<path style="fill:color-mix(in srgb,#3E6FB0 7%,var(--sb-surface));stroke:color-mix(in srgb,var(--sb-ink) 30%,var(--sb-surface));stroke-width:2" d="M236,130 C284,116 324,134 334,158 C324,184 284,200 236,186 Z"/>`;
 b+=cell(168,186,7,false);
 const q=rng(5);
 [[110,230,18],[150,246,-24],[92,180,40],[196,236,8],[128,142,-12]].forEach(([x,y,r],i)=>{b+=bac(x,y,r,i*6+5)});
 /* inside the nucleus too */
 [[150,170,14],[176,186,-18]].forEach(([x,y,r],i)=>{b+=bac(x,y,r,i*9+31)});
 /* actin tail driving one out through a long projection */
 for(let i=0;i<16;i++){const t=i/16;b+=`<circle style="fill:color-mix(in srgb,#C2334A ${(34-t*24).toFixed(0)}%,var(--sb-surface));stroke:none" cx="${(252-t*54).toFixed(1)}" cy="${(162+Math.sin(i*1.1)*4).toFixed(1)}" r="${(3.2-t*1.6).toFixed(1)}"/>`}
 b+=bac(306,158,-6,77);
 /* typhus group — packs the cytoplasm until the cell bursts */
 b+=cell(470,186,23,true);
 for(let i=0;i<22;i++){const a=q()*6.283,r=q();const x=470+Math.cos(a)*r*112,y=186+Math.sin(a)*r*82;
  b+=bac(x,y,q()*120-60,i*4+13)}
 /* spilled out of the broken membrane */
 [[596,120],[584,250],[358,232],[372,120],[470,292]].forEach(([x,y],i)=>{b+=bac(x,y,q()*120-60,i*8+41,"color-mix(in srgb,#C2334A 60%,var(--sb-surface))")});
 b+=mL(168,308,"Spotted fever group",{c:"bh"})+mL(168,328,"สร้าง actin tail ดันตัวเองเข้าเซลล์ข้างเคียง · เซลล์ไม่แตก",{c:"s m"})
  +mL(470,308,"Typhus group",{c:"bh"})+mL(470,328,"ไม่มียีนสร้าง actin tail · สะสมจนเซลล์แตกแล้วจึงออก",{c:"s m"});
 b+=`<path class="m-sep" d="M24,356 L616,356"/>`;
 [["Phospholipase","ย่อยผนัง phagosome เพื่อออกมาอยู่ใน cytoplasm","ถ้าออกมาไม่ได้ก็อยู่ไม่ได้",24,382],
  ["Energy parasite","ใช้ ATP ของเซลล์เจ้าบ้าน","และพึ่งเจ้าบ้านสร้างน้ำตาล ไขมัน นิวคลีโอไทด์และกรดอะมิโน",330,382]
 ].forEach(([n,d,d2,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})+mL(x,y+38,d2,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 440")},
notes:()=>`<h3>Why it cannot live outside a cell</h3><ul>
 <li><i>Rickettsia</i> และ <i>Orientia</i> เป็น <b>strict intracellular parasite</b> ที่อยู่ลอย ๆ ใน cytoplasm ของเซลล์ที่ติดเชื้อ ${S.mu}</li>
 <li>มันเกาะตัวรับบนผิวเซลล์แล้ว<b>กระตุ้นให้เซลล์กลืนตัวเองเข้าไป</b> · จากนั้นสร้าง phospholipase ย่อยผนัง phagosome เพื่อหลุดออกมา — <b>ถ้าไม่หลุดออกมาก็อยู่ไม่ได้</b> ${S.mu}</li>
 <li>จีโนมของ <i>R. prowazekii</i> บอกว่าเชื้อพึ่งเซลล์เจ้าบ้านในเรื่อง carbohydrate metabolism, lipid biosynthesis, การสร้างนิวคลีโอไทด์และกรดอะมิโน · มันสร้าง ATP เองได้ด้วย tricarboxylic acid cycle แต่ก็<b>แย่ง ATP ของเจ้าบ้านใช้ตราบที่ยังมี</b> ${S.mu}</li>
 <li>แบ่งตัวช้า — generation time <b>9 ถึง 12 ชั่วโมง</b> ${S.mu}</li>
 <li>เมื่อหลุดออกนอกเซลล์แล้วเชื้อ<b>ไม่ทนและตายเร็ว</b> จึงต้องอาศัยแมลงพาหะพาไปให้ถึงเซลล์ถัดไป ${S.mu}</li></ul>
 <h3>The two groups leave the cell differently</h3><ul>
 <li><b>Spotted fever group</b> เติบโตได้ทั้งใน cytoplasm และใน<b>นิวเคลียส</b> และถูกปล่อยออกตลอดเวลาผ่านส่วนยื่นยาวของ cytoplasm ${S.mu}</li>
 <li><b>Typhus group</b> สะสมอยู่ใน cytoplasm จนเยื่อหุ้มเซลล์แตก — ซึ่งคือสัญญาณว่าเซลล์ตายและเชื้อถูกปล่อย ${S.mu}</li>
 <li>ความต่างนี้เชื่อว่ามาจาก <b>intracellular motility</b>: spotted fever group <b>polymerize actin ของเซลล์เจ้าบ้านได้</b> ส่วน typhus group ไม่มียีนที่ต้องใช้ ${S.mu}</li></ul>
 <h3>Wall and stain</h3><ul>
 <li>โครงสร้างผนังเป็นแบบ gram-negative rod มีทั้ง peptidoglycan และ LPS แต่<b>ชั้น peptidoglycan บางมากจน Gram stain ติดสีไม่ดี</b> และ LPS มีฤทธิ์ endotoxin อ่อน ${S.mu}</li>
 <li><i>Orientia</i> <b>ไม่มีทั้ง peptidoglycan และ LPS</b> ${S.mu}</li>
 <li>ทั้งสองกลุ่มเห็นได้ดีที่สุดด้วย <b>Giemsa หรือ Gimenez stain</b> ${S.mu}</li></ul>`});

SEC.push({id:"rmsf",k:"a",t:"Rocky Mountain spotted fever",mm:"R. rickettsii",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"ผื่นเริ่มที่ปลายแขนปลายขาแล้วเข้าหาลำตัว — ทิศทางนี้คือสิ่งที่ทำให้นึกถึงโรคนี้",{a:"start",c:"bh"});
 const sk={fill:"color-mix(in srgb,#C98A6B 16%,var(--sb-surface))",st:"color-mix(in srgb,var(--sb-ink) 26%,var(--sb-surface))"};
 const limb=(d)=>`<path style="fill:none;stroke:${sk.st};stroke-width:25;stroke-linecap:round" d="${d}"/><path style="fill:none;stroke:${sk.fill};stroke-width:21.5;stroke-linecap:round" d="${d}"/>`;
 /* arms and legs first so the trunk overlaps them cleanly */
 b+=limb("M172,146 Q140,196 122,250")+limb("M228,146 Q260,196 278,250")
  +limb("M184,248 Q176,310 172,364")+limb("M216,248 Q224,310 228,364");
 /* trunk and head */
 const tr=mblob(200,180,46,74,11,.05),hd=mblob(200,78,27,31,5,.05);
 b+=`<path style="fill:${sk.fill};stroke:${sk.st};stroke-width:2.2" d="${tr}"/>`
  +`<path style="fill:${sk.fill};stroke:${sk.st};stroke-width:2.2" d="${hd}"/>`
  +`<path style="fill:none;stroke:${sk.st};stroke-width:2.2" d="M188,108 L212,108"/>`;
 /* hands and feet */
 [[116,262],[284,262],[170,378],[230,378]].forEach(([x,y],i)=>{
  b+=`<path style="fill:${sk.fill};stroke:${sk.st};stroke-width:2" d="${mblob(x,y,13,11,i*7+9,.1)}"/>`});
 /* the rash: dense distally, thinning centrally */
 const q=rng(29),spot=(x,y,r)=>`<circle style="fill:color-mix(in srgb,#9B1C31 ${(44+q()*26).toFixed(0)}%,var(--sb-surface));stroke:none" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}"/>`;
 const band=(cx,cy,rx,ry,n,rad)=>{let g="";for(let i=0;i<n;i++){const a=q()*6.283,r=Math.sqrt(q());
  g+=spot(cx+Math.cos(a)*r*rx,cy+Math.sin(a)*r*ry,2+q()*rad)}return g};
 b+=band(122,252,22,30,30,1.4)+band(278,252,22,30,30,1.4)      /* wrists */
  +band(116,262,11,9,16,1.1)+band(284,262,11,9,16,1.1)          /* palms */
  +band(172,360,18,28,28,1.4)+band(228,360,18,28,28,1.4)        /* ankles */
  +band(170,378,11,9,16,1.1)+band(230,378,11,9,16,1.1)          /* soles */
  +band(150,200,24,46,16,1.2)+band(250,200,24,46,16,1.2)        /* up the limbs */
  +band(200,180,34,58,14,1.1);                                   /* trunk, sparse */
 b+=mlead2(232,158,370,62,["Then the trunk","ผื่นลามเข้าหาลำตัว ไม่ใช่ลามออก"],{a:"start"})
  +mlead2(276,240,370,114,["Wrists and ankles first","ผื่น macular ขึ้นที่นี่ก่อน ในวันที่สามของอาการ"],{a:"start"})
  +mlead2(290,266,370,166,["Palms and soles","ฝ่ามือฝ่าเท้ามีผื่นได้ด้วย"],{a:"start"})
  +mlead2(240,358,370,218,["Petechial rash","เมื่อผื่นกลายเป็นจุดเลือดออก แปลว่าโรครุนแรงขึ้น"],{a:"start"});
 b+=mL(370,286,"Time course",{a:"start",c:"bh"});
 [["Tick bite","เห็บต้องเกาะดูดเลือดราวหกชั่วโมงขึ้นไป"],
  ["Day 2 to 14","ไข้สูง ปวดศีรษะมาก อาจมีคลื่นไส้ อาเจียน ปวดท้อง"],
  ["Day 3 of illness","ผื่น macular ขึ้นใน 90% ของผู้ป่วย"]
 ].forEach(([n,d],i)=>{const y=312+i*42;b+=mL(370,y,n,{a:"start",c:"bh"})+mL(370,y+19,d,{a:"start",c:"s m"})});
 b+=`<path class="m-sep" d="M24,448 L616,448"/>`
  +mL(24,474,"Untreated fatality 10–25%",{a:"start",c:"bh"})
  +mL(24,494,"การวินิจฉัยช้าสัมพันธ์กับผลลัพธ์ที่แย่ลง จึงเริ่มยาโดยไม่รอผลตรวจ",{a:"start",c:"s m"});
 return svg(b,"0 0 640 512")},
notes:()=>`<h3>What the bacterium does to the vessel</h3><ul>
 <li><i>R. rickettsii</i> เป็นเชื้อ <i>Rickettsia</i> ที่ทำให้เกิดโรคในคนบ่อยที่สุดในสหรัฐอเมริกา ${S.mu}</li>
 <li><b>ไม่มีหลักฐานว่าเชื้อสร้าง toxin</b> และไม่มีหลักฐานว่าพยาธิสภาพเกิดจากการตอบสนองของภูมิคุ้มกัน ${S.mu}</li>
 <li>โปรตีน <b>OmpA</b> บนผิวเชื้อคือสิ่งที่ทำให้มันเกาะ <b>endothelial cell</b> ได้ ${S.mu}</li>
 <li>อาการทางคลินิกเกิดจาก<b>การแบ่งตัวของเชื้อใน endothelial cell</b> ทำให้เซลล์เสียหายและหลอดเลือดรั่ว ${S.mu}</li>
 <li>พลาสมาที่รั่วออกไปในเนื้อเยื่อทำให้เกิด <b>hypovolemia และ hypoproteinemia</b> เลือดไปเลี้ยงอวัยวะลดลงจนอวัยวะล้มเหลว ${S.mu}</li>
 <li>ภูมิคุ้มกันที่ใช้จัดการคือ<b>การฆ่าเชื้อในเซลล์ผ่าน cytokine และการกำจัดโดย cytotoxic CD8 lymphocyte</b> · แอนติบอดีต่อ outer membrane protein อาจมีส่วนด้วย ${S.mu}</li></ul>
 <h3>Where and when</h3><ul>
 <li>ปี 2017 สหรัฐอเมริการายงานมากกว่า <b>6200 ราย</b> · มากกว่า 90% เกิดระหว่าง<b>เมษายนถึงกันยายน</b> ซึ่งเป็นช่วงที่เห็บออกหากินมากที่สุด ${S.mu}</li>
 <li>พาหะคือ <b>hard tick</b> ในวงศ์ Ixodidae — American dog tick (<i>Dermacentor variabilis</i>), brown dog tick (<i>Rhipicephalus sanguineus</i>) และ wood tick (<i>D. andersoni</i>) ${S.mu}</li>
 <li>เห็บเป็นทั้ง<b>พาหะและแหล่งรังโรค</b> เพราะมี <b>transovarian transmission</b> ส่งเชื้อจากแม่สู่ไข่ ${S.mu}</li>
 <li>เชื้อที่สงบอยู่ในเห็บถูกปลุกด้วย<b>เลือดอุ่นที่เห็บดูด</b> แล้วจึงถูกปล่อยจากต่อมน้ำลายเข้าสู่เลือดคน — ต้องเกาะนาน <b>ราว 6 ชั่วโมงขึ้นไป</b> ${S.mu}</li></ul>
 <h3>Diagnosis and treatment</h3><ul>
 <li>การเพาะเชื้อทำได้แต่มีเพียงห้องปฏิบัติการอ้างอิงที่ทำเป็นประจำ ${S.mu}</li>
 <li><b>Weil-Felix test ไม่แนะนำแล้ว</b> เพราะทั้งไม่ไวและไม่จำเพาะ แม้ยังถูกใช้ในที่ที่ทรัพยากรจำกัด ${S.mu}</li>
 <li>วิธีอ้างอิงทางซีโรโลยีคือ <b>MIF</b> ซึ่งตรวจแอนติบอดีต่อ outer membrane protein ที่จำเพาะต่อสปีชีส์และต่อ LPS · เพราะ LPS ใช้ร่วมกันระหว่างสปีชีส์ การแยกสปีชีส์จึงต้องใช้ Western blot ${S.mu}</li>
 <li>แนะนำให้เริ่ม <b>doxycycline แบบ empirical</b> — ไม่รอผลยืนยัน ${S.mu}</li></ul>`});

SEC.push({id:"typhus",k:"a",t:"Typhus, rickettsialpox and scrub typhus",mm:"Four vectors",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"กลุ่มนี้จำแนกกันที่พาหะ — พาหะบอกทั้งโรค ภูมิภาคและสถานการณ์ที่ทำให้ติด",{a:"start",c:"bh"});
 const ink=(p)=>`color-mix(in srgb,var(--sb-ink) ${p}%,var(--sb-surface))`;
 const leg=(x,y,d,w)=>`<path style="fill:none;stroke:${ink(52)};stroke-width:${w||2.2};stroke-linecap:round" d="M${x},${y} ${d}"/>`;
 const base=146;
 /* hard tick — scutum, capitulum, eight legs */
 (()=>{const cx=92,cy=base;
  for(let i=0;i<4;i++){const s=i<2?-1:1,yy=cy-16+ (i%2)*12;
   b+=leg(cx-22,yy,`q-16,${s*4} -26,${s*16}`)+leg(cx+22,yy,`q16,${s*4} 26,${s*16}`)}
  const bd=mblob(cx,cy,34,28,7,.07);
  b+=`<path style="fill:color-mix(in srgb,#8C6D46 26%,var(--sb-surface));stroke:${ink(50)};stroke-width:1.8" d="${bd}"/>`
   +mgrainIn("tk",bd,cx-34,cy-28,68,56,70,9,"m-gr",.7)
   +`<path style="fill:color-mix(in srgb,#5A4430 46%,var(--sb-surface));stroke:${ink(44)};stroke-width:1.2" d="${mblob(cx,cy-9,22,14,13,.08)}"/>`
   +`<path style="fill:${ink(46)};stroke:none" d="M${cx-5},${cy-28} l5,-11 l5,11 z"/>`})();
 /* body louse — segmented abdomen, clawed legs */
 (()=>{const cx=250,cy=base;
  for(let i=0;i<3;i++){const yy=cy-14+i*10;
   b+=leg(cx-9,yy,`q-16,-4 -24,-12`,2)+leg(cx+9,yy,`q16,-4 24,-12`,2);
   b+=leg(cx-33,yy-12,`q-5,5 -2,9`,1.8)+leg(cx+33,yy-12,`q5,5 2,9`,1.8)}
  const bd=mblob(cx,cy+8,17,30,21,.06);
  b+=`<path style="fill:color-mix(in srgb,#B08A5A 26%,var(--sb-surface));stroke:${ink(50)};stroke-width:1.8" d="${bd}"/>`;
  for(let i=1;i<5;i++)b+=`<path style="fill:none;stroke:${ink(34)};stroke-width:1.1" d="M${cx-15},${cy-6+i*10} q15,5 30,0"/>`;
  b+=`<path style="fill:color-mix(in srgb,#B08A5A 34%,var(--sb-surface));stroke:${ink(50)};stroke-width:1.6" d="${mblob(cx,cy-30,10,11,27,.09)}"/>`
   +leg(cx-5,cy-38,`q-5,-9 -11,-12`,1.6)+leg(cx+5,cy-38,`q5,-9 11,-12`,1.6)})();
 /* flea — laterally compressed, combs, one great hind leg */
 (()=>{const cx=410,cy=base;
  /* three pairs of legs, the hind pair long and folded for the jump */
  b+=leg(cx-4,cy+8,`q-10,14 -22,20`,2.2)+leg(cx+3,cy+14,`q-4,16 -14,24`,2.2)
   +`<path style="fill:none;stroke:${ink(52)};stroke-width:3;stroke-linecap:round" d="M${cx+10},${cy+4} q22,4 24,-16 q4,24 -6,42"/>`
   +`<path style="fill:none;stroke:${ink(52)};stroke-width:2.6;stroke-linecap:round" d="M${cx+8},${cy+14} q20,8 20,-8 q4,22 -4,36"/>`;
  const bd=mblob(cx,cy,20,30,33,.06);
  b+=`<path style="fill:color-mix(in srgb,#6E4A2E 30%,var(--sb-surface));stroke:${ink(52)};stroke-width:1.8" d="${bd}"/>`
   +mgrainIn("fl",bd,cx-20,cy-30,40,60,50,37,"m-gr",.7);
  /* backward-pointing bristles along the trailing edge */
  for(let i=0;i<8;i++){const t=i/8,x=cx+16-t*4,y=cy-16+t*40;
   b+=`<path style="fill:none;stroke:${ink(46)};stroke-width:1.3;stroke-linecap:round" d="M${x.toFixed(1)},${y.toFixed(1)} l7,5"/>`}
  /* head, with the comb of dark spines at its hind margin */
  b+=`<path style="fill:color-mix(in srgb,#6E4A2E 38%,var(--sb-surface));stroke:${ink(52)};stroke-width:1.5" d="${mblob(cx-12,cy-28,11,10,41,.1)}"/>`;
  for(let i=0;i<6;i++){const y=cy-36+i*4.6;
   b+=`<path style="fill:none;stroke:${ink(66)};stroke-width:2;stroke-linecap:round" d="M${cx-3},${y.toFixed(1)} l7,2"/>`}
  b+=leg(cx-19,cy-22,`q-10,12 -8,22`,1.6)})();
 /* chigger mite — round, hairy, drawn at the same scale but far smaller in life */
 (()=>{const cx=558,cy=base;
  for(let i=0;i<3;i++){const yy=cy-10+i*11;
   b+=leg(cx-16,yy,`q-13,-2 -20,6`,2)+leg(cx+16,yy,`q13,-2 20,6`,2)}
  const bd=mblob(cx,cy,25,24,47,.1);
  b+=`<path style="fill:color-mix(in srgb,#C24A2E 24%,var(--sb-surface));stroke:${ink(50)};stroke-width:1.8" d="${bd}"/>`;
  const q=rng(53);
  for(let i=0;i<22;i++){const a=q()*6.283;
   b+=`<path style="fill:none;stroke:${ink(44)};stroke-width:1.1;stroke-linecap:round" d="M${(cx+Math.cos(a)*22).toFixed(1)},${(cy+Math.sin(a)*21).toFixed(1)} l${(Math.cos(a)*7).toFixed(1)},${(Math.sin(a)*7).toFixed(1)}"/>`}
  b+=`<path style="fill:${ink(46)};stroke:none" d="M${cx-4},${cy-25} l4,-9 l4,9 z"/>`})();
 [["Hard tick","Rocky Mountain spotted fever",92],
  ["Body louse","epidemic typhus",250],
  ["Flea","murine typhus",410],
  ["Mite","rickettsialpox · scrub typhus",558]
 ].forEach(([n,d,x])=>{b+=mL(x,212,n,{c:"bh"})+mL(x,232,d,{c:"s m"})});
 b+=`<path class="m-sep" d="M24,260 L616,260"/>`;
 [["Humans are accidental hosts","เชื้อวนระหว่างสัตว์ฟันแทะกับแมลงพาหะ คนแค่ขวางทาง",24,286],
  ["Except R. prowazekii","คนคือแหล่งรังโรคหลัก · เหาตายจากการติดเชื้อใน 2–3 สัปดาห์",330,286],
  ["Transovarian transmission","แมลงส่งเชื้อสู่ไข่ของตัวเองได้ จึงเป็นทั้งพาหะและแหล่งรังโรค",24,332],
  ["Brill-Zinsser disease","เชื้อสงบอยู่ได้หลายปีแล้วกลับมาเป็นซ้ำ",330,332]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 376")},
notes:()=>`<h3>Who goes with what</h3>
 ${tbl(["Organism","Disease","Reservoir","Vector"],[
  ["<i>Rickettsia rickettsii</i>","Rocky Mountain spotted fever","เห็บและสัตว์ฟันแทะป่า","hard tick — dog tick, wood tick"],
  ["<i>R. akari</i>","rickettsialpox","ไรและหนูบ้าน","mite"],
  ["<i>R. prowazekii</i>","epidemic typhus · Brill-Zinsser disease","คน","human body louse <i>Pediculus humanus</i>"],
  ["<i>R. prowazekii</i> — sporadic","typhus ประปราย","กระรอกบิน","หมัดและเหาของกระรอก"],
  ["<i>R. typhi</i>","murine typhus","หนู","rat flea <i>Xenopsylla cheopis</i> · cat flea <i>Ctenocephalides felis</i>"],
  ["<i>Orientia tsutsugamushi</i>","scrub typhus","ไร","chigger"],
  ["<i>Coxiella burnetii</i>","Q fever","สัตว์เลี้ยงลูกด้วยนม นก เห็บ","ส่วนใหญ่ติดจากการหายใจเอาเชื้อเข้าไป ไม่ใช่จากเห็บ"]])}
 <h3>Epidemic typhus</h3><ul>
 <li>เกิดในคนที่อยู่กัน<b>แออัดและสุขอนามัยไม่ดี</b> — สงคราม ความอดอยาก ภัยพิบัติ ซึ่งเป็นสภาพที่เหาตัวแพร่ได้ดี ${S.mu}</li>
 <li>ในการศึกษาหนึ่งในแอฟริกา อาการเริ่มเฉลี่ย <b>8 วัน</b> หลังสัมผัสเชื้อ แล้วภายในหนึ่งถึงสามวันจึงมีไข้สูง ปวดศีรษะมากและปวดเมื่อย ${S.mu}</li>
 <li>ผื่น petechial หรือ macular ขึ้นในผู้ป่วยจำนวนมาก แต่<b>อาจมองไม่เห็นในผู้ที่ผิวสีเข้ม</b> ${S.mu}</li>
 <li>อัตราตายเมื่อไม่ได้รักษาคือ <b>20–30%</b> และสูงกว่านี้มากในกลุ่มที่สุขภาพและโภชนาการไม่ดี ${S.mu}</li>
 <li>เชื้อสงบอยู่ได้หลายปีแล้วกลับมาเป็น <b>Brill-Zinsser disease</b> — ในสหรัฐอเมริกาพบในผู้อพยพยุโรปตะวันออกที่เคยสัมผัสโรคระบาดช่วงสงครามโลกครั้งที่สอง ${S.mu}</li></ul>
 <h3>Rickettsialpox and scrub typhus</h3><ul>
 <li><i>R. akari</i> เป็นหนึ่งในไม่กี่ตัวของ spotted fever group ที่<b>กระจายอยู่ทั่วโลก</b> และติดต่อโดยไร ${S.mu}</li>
 <li>ในนิวยอร์กหลังเหตุการณ์ปล่อย <i>Bacillus anthracis</i> ปี 2001 การตรวจชิ้นเนื้อ <b>eschar</b> ของผู้ป่วยพบว่าเป็น <i>R. akari</i> ไม่ใช่ <i>B. anthracis</i> — บอกว่าโรคนี้น่าจะถูกวินิจฉัยต่ำกว่าความเป็นจริง ${S.mu}</li>
 <li>โรคมักไม่รุนแรงและ<b>หายเองได้ใน 2–3 สัปดาห์</b> แม้จะมีผื่นกระจายทั่วตัว ${S.mu}</li>
 <li><i>O. tsutsugamushi</i> ทำให้เกิด <b>scrub typhus</b> ติดจากไรอ่อน · <b>ไรกัดคนครั้งเดียวในชีวิต</b> หนูจึงไม่ใช่แหล่งรังโรคที่สำคัญสำหรับโรคในคน ${S.mu}</li>
 <li>พบในเอเชียตะวันออก ออสเตรเลีย ญี่ปุ่นและหมู่เกาะแปซิฟิกตะวันตก ${S.mu}</li></ul>`});

SEC.push({id:"ehrlichia",k:"a",t:"Ehrlichia, Anaplasma and Coxiella",mm:"Morulae",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"กลุ่มนี้อยู่ใน phagosome ต่อ ไม่หนีออกมา และรวมตัวเป็นกระจุกที่เห็นได้จากสเมียร์",{a:"start",c:"bh"});
 const morula=(cx,cy,r,seed)=>{let g=`<path style="fill:color-mix(in srgb,#6B4FC8 10%,var(--sb-surface));stroke:color-mix(in srgb,#6B4FC8 52%,var(--sb-surface));stroke-width:1.6" d="${mblob(cx,cy,r,r*.92,seed,.09)}"/>`;
  const q=rng(seed+5);
  for(let i=0;i<24;i++){const a=q()*6.283,rr=Math.sqrt(q())*.78;
   g+=`<circle style="fill:color-mix(in srgb,#4B3A9E 62%,var(--sb-surface));stroke:none" cx="${(cx+Math.cos(a)*rr*r).toFixed(1)}" cy="${(cy+Math.sin(a)*rr*r*.9).toFixed(1)}" r="${(2+q()*1.4).toFixed(1)}"/>`}
  return g};
 /* monocyte: one large indented nucleus, pale grey cytoplasm */
 (()=>{const cx=172,cy=176,bd=mblob(cx,cy,86,80,15,.06);
  b+=`<path class="m-body" style="fill:color-mix(in srgb,#8d8578 8%,var(--sb-surface));stroke:color-mix(in srgb,var(--sb-ink) 26%,var(--sb-surface));stroke-width:1.8" d="${bd}"/>`
   +mgrainIn("mono",bd,cx-86,cy-80,172,160,90,19,"m-gr",.8)
   +`<path style="fill:color-mix(in srgb,#6B4FC8 20%,var(--sb-surface));stroke:color-mix(in srgb,#6B4FC8 50%,var(--sb-surface));stroke-width:1.6" d="M${cx-56},${cy-30} C${cx-44},${cy-60} ${cx+6},${cy-62} ${cx+24},${cy-38} C${cx-6},${cy-34} ${cx-16},${cy-6} ${cx+6},${cy+22} C${cx-30},${cy+30} ${cx-60},${cy+6} ${cx-56},${cy-30} Z"/>`
   +morula(cx+34,cy+32,24,61)})();
 /* neutrophil: multilobed nucleus, granular cytoplasm */
 b+=mpmn(468,176,84,25)+morula(500,206,22,71);
 b+=mL(172,290,"Monocyte",{c:"bh"})+mL(172,310,"Ehrlichia chaffeensis — human monocytic ehrlichiosis",{c:"s m"})
  +mL(468,290,"Granulocyte",{c:"bh"})+mL(468,310,"Anaplasma phagocytophilum · Ehrlichia ewingii",{c:"s m"});
 b+=`<path class="m-sep" d="M24,344 L616,344"/>`;
 [["Morula","กระจุกเชื้อในถุงหุ้ม","ย้อม Giemsa หรือ Wright แล้วเห็นได้เลย",24],
  ["A negative smear does not rule it out","เห็น morula น้อยกว่า 10% ของผู้ป่วย monocytic ehrlichiosis","และ 25–75% ของ granulocytic anaplasmosis",282]
 ].forEach(([n,d,d2,x])=>{b+=mL(x,370,n,{a:"start",c:"bh"})+mL(x,390,d,{a:"start",c:"s m"})+mL(x,408,d2,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 426")},
notes:()=>`<h3>Ehrlichia and Anaplasma</h3><ul>
 <li>ต่างจาก <i>Rickettsia</i> ตรงที่พวกนี้<b>แบ่งตัวอยู่ใน phagosome</b> โดยไม่ถูกเอนไซม์ย่อยของ lysosome เล่นงาน ${S.mu}</li>
 <li>มีสองรูปแบบ: <b>EB</b> ขนาด 0.2–0.4 μm และ <b>reticulate body</b> ขนาด 0.8–1.5 μm ${S.mu}</li>
 <li>ไม่กี่วันหลังเซลล์ติดเชื้อ EB ที่กำลังแบ่งตัวจะรวมกันเป็นก้อนที่มีเยื่อหุ้มเรียกว่า <b>morula</b> ${S.mu}</li>
 <li>การติดเชื้อที่ลุกลามทำให้<b>เซลล์แตก</b> ปล่อยเชื้อไปติดเซลล์ใหม่ ${S.mu}</li>
 <li>การเห็น morula ในสเมียร์ที่ย้อม <b>Giemsa หรือ Wright</b> เป็นการตรวจที่เร็วและจำเพาะ แต่<b>ผลลบไม่ช่วยอะไร</b> — พบ morula <b>น้อยกว่า 10%</b> ของผู้ป่วย monocytic ehrlichiosis และ <b>25–75%</b> ของ granulocytic anaplasmosis และสเมียร์มีประโยชน์เฉพาะใน<b>สัปดาห์แรกของอาการ</b>เท่านั้น ${S.mu}</li>
 <li>โรคในคน: <i>E. chaffeensis</i> ทำให้เกิด <b>human monocytic ehrlichiosis</b> · <i>E. ewingii</i> และ <i>A. phagocytophilum</i> ทำให้เกิด <b>human granulocytic</b> disease ${S.mu}</li>
 <li>ปี 2017 สหรัฐอเมริการายงาน ehrlichiosis และ anaplasmosis รวมเกือบ <b>8000 ราย</b> ${S.mu}</li>
 <li>การกระตุ้น proinflammatory cytokine เชื่อว่ามีบทบาทสำคัญในการปลุก macrophage ให้จัดการทั้งเซลล์ที่ติดเชื้อและเชื้อที่ถูกแอนติบอดีเคลือบในช่วงที่อยู่นอกเซลล์ ${S.mu}</li></ul>
 <h3>Q fever</h3><ul>
 <li><i>Coxiella burnetii</i> ตั้งชื่อตาม Herald Cox และ F.M. Burnet ซึ่งแยกเชื้อได้จากเห็บ ${S.mu}</li>
 <li>แหล่งรังโรคคือสัตว์เลี้ยงลูกด้วยนม นกและเห็บ — แต่<b>การติดเชื้อส่วนใหญ่เกิดจากการหายใจเอาเชื้อเข้าไป</b> ไม่ใช่จากเห็บ จึงกระจายทั่วโลก ${S.mu}</li>
 <li>ระยะฟักตัว 10–14 วัน · เริ่มเฉียบพลันด้วยไข้สูงและปวดศีรษะ · <b>chronic Q fever แสดงออกเป็น endocarditis</b> ${S.mu}</li></ul>
 <h3>All of them answer to one drug</h3><ul>
 <li>ผู้ป่วยที่สงสัยโรคในกลุ่มนี้ — รวมทั้ง Rocky Mountain spotted fever และ Q fever — <b>ควรได้ doxycycline</b> และ<b>ไม่ควรรอผลยืนยันก่อนเริ่มยา</b> ${S.mu}</li>
 <li>Fluoroquinolone เช่น ciprofloxacin ออกฤทธิ์ดีในหลอดทดลอง แต่<b>ประสบการณ์ทางคลินิกยังไม่พอ</b>ที่จะแนะนำเป็นยาหลัก ${S.mu}</li></ul>`});

SEC.push({id:"chl-cycle",k:"b",t:"The chlamydial developmental cycle",mm:"EB and reticulate body",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"รูปเดียวที่ต้องจำ: รูปที่ติดต่อได้ไม่แบ่งตัว และรูปที่แบ่งตัวก็ติดต่อไม่ได้",{a:"start",c:"bh"});
 const cx0=320,cy0=226,RX=218,RY=132,R=40;
 const EB=(x,y,s)=>`<path style="fill:color-mix(in srgb,#9B1C31 72%,var(--sb-surface));stroke:none" d="${mblob(x,y,5,4.6,s,.14)}"/>`;
 const RB=(x,y,s)=>`<path style="fill:color-mix(in srgb,#C2334A 20%,var(--sb-surface));stroke:color-mix(in srgb,#C2334A 50%,var(--sb-surface));stroke-width:1.2" d="${mblob(x,y,10,9,s,.12)}"/>`;
 const pos=i=>[cx0+Math.cos(-Math.PI/2+i/7*6.283)*RX,cy0+Math.sin(-Math.PI/2+i/7*6.283)*RY];
 /* the ring of arrows, drawn under the cells */
 for(let i=0;i<7;i++){const a0=-Math.PI/2+(i+.26)/7*6.283,a1=-Math.PI/2+(i+.74)/7*6.283;
  const x0=cx0+Math.cos(a0)*RX,y0=cy0+Math.sin(a0)*RY,x1=cx0+Math.cos(a1)*RX,y1=cy0+Math.sin(a1)*RY;
  const am=(a0+a1)/2,xm=cx0+Math.cos(am)*RX*1.1,ym=cy0+Math.sin(am)*RY*1.1;
  b+=`<path style="fill:none;stroke:color-mix(in srgb,var(--sb-ink) 24%,var(--sb-surface));stroke-width:2;stroke-linecap:round" d="M${x0.toFixed(1)},${y0.toFixed(1)} Q${xm.toFixed(1)},${ym.toFixed(1)} ${x1.toFixed(1)},${y1.toFixed(1)}"/>`;
  const ang=Math.atan2(y1-ym,x1-xm)*180/Math.PI;
  b+=`<path style="fill:color-mix(in srgb,var(--sb-ink) 36%,var(--sb-surface));stroke:none" transform="rotate(${ang.toFixed(0)} ${x1.toFixed(1)} ${y1.toFixed(1)})" d="M${(x1-9).toFixed(1)},${(y1-4.4).toFixed(1)} l9,4.4 l-9,4.4 z"/>`}
 for(let i=0;i<7;i++){const [x,y]=pos(i),bd=mblob(x,y,R,R*.94,i*7+11,.07);
  b+=`<path class="m-cell" style="fill:color-mix(in srgb,#3E6FB0 7%,var(--sb-surface));stroke:color-mix(in srgb,var(--sb-ink) ${i===6?"14":"28"}%,var(--sb-surface));stroke-width:${i===6?1.2:1.8};${i===6?"stroke-dasharray:6 5":""}" d="${bd}"/>`
   +mgrainIn("cc"+i,bd,x-R,y-R,R*2,R*2,44,i*5+3,"m-gr",.7);
  const ves=(rx,ry,s)=>`<path style="fill:none;stroke:color-mix(in srgb,#3E6FB0 46%,var(--sb-surface));stroke-width:1.4" d="${mblob(x+2,y+4,rx,ry,s,.1)}"/>`;
  if(i===0)b+=EB(x-R+2,y-12,9);
  if(i===1)b+=ves(13,12,15)+EB(x+2,y+4,17);
  if(i===2)b+=ves(16,15,19)+RB(x+2,y+4,21);
  if(i===3)b+=ves(22,20,23)+RB(x-7,y-2,25)+RB(x+12,y+9,27);
  if(i===4){b+=ves(30,27,29);[[-13,-8],[8,-10],[-9,13],[13,12],[1,2]].forEach(([dx,dy],k)=>{b+=RB(x+dx+2,y+dy+4,31+k*3)})}
  if(i===5){b+=ves(30,27,33);[[-12,-9],[10,-8],[-8,12]].forEach(([dx,dy],k)=>{b+=RB(x+dx+2,y+dy+4,37+k*3)});
   [[2,-1],[14,8],[-14,4],[4,16],[-2,7]].forEach(([dx,dy],k)=>{b+=EB(x+dx+2,y+dy+4,45+k*3)})}
  if(i===6){const q=rng(59);for(let k=0;k<11;k++){const a=q()*6.283,r=q()*34;b+=EB(x+Math.cos(a)*r,y+Math.sin(a)*r,61+k*3)}
   [[-54,-18],[56,10],[-20,54],[34,-48]].forEach(([dx,dy],k)=>{b+=EB(x+dx,y+dy,79+k*3)})}
  b+=`<circle style="fill:color-mix(in srgb,var(--sb-ink) 72%,var(--sb-surface));stroke:none" cx="${(x-R+6).toFixed(1)}" cy="${(y-R+2).toFixed(1)}" r="10"/>`
   +mL(x-R+6,y-R+6,String(i+1),{c:"m",s:"fill:var(--sb-plate);font-weight:700"})}
 b+=mL(cx0,cy0-10,"48 to 72 hours",{c:"bh"})+mL(cx0,cy0+12,"หนึ่งรอบตั้งแต่เกาะจนเซลล์แตก",{c:"s m"});
 b+=`<path class="m-sep" d="M24,406 L616,406"/>`;
 [["1 · Attachment","EB เกาะตัวรับบนเซลล์ที่รับเชื้อได้"],
  ["2 · Ingestion","เซลล์กลืน EB เข้าไปใน phagosome"],
  ["3 · Reorganization","EB เปลี่ยนเป็น reticulate body ที่ใหญ่กว่าใน 6–8 ชั่วโมง"],
  ["4 · Binary fission","reticulate body แบ่งตัวแบบแบคทีเรียทั่วไป"],
  ["5 · Inclusion","phagosome ที่เต็มด้วย reticulate body เรียกว่า inclusion"],
  ["6 · Back to EB","ที่ 18–24 ชั่วโมง reticulate body เริ่มหดกลับเป็น EB ที่เล็กกว่า"],
  ["7 · Release","ที่ 48–72 ชั่วโมงเซลล์แตก ปล่อย EB ที่ติดต่อได้"]
 ].forEach(([n,d],i)=>{const x=i<4?24:330,y=432+(i%4)*48;
  b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 632")},
notes:()=>`<h3>Two forms, two jobs</h3><ul>
 <li><b>EB</b> คือรูปที่ติดต่อได้: เล็ก แน่น มีแกนกลางทึบ หุ้มด้วย cytoplasmic membrane และ outer membrane สองชั้น ${S.mu}</li>
 <li><b>Reticulate body</b> ขนาด 800–1000 nm คือรูปที่<b>ทำงานทางเมแทบอลิซึมและแบ่งตัว</b> แต่ไม่ติดต่อ ${S.mu}</li>
 <li>EB ยับยั้งการรวมตัวของ phagosome กับ lysosome จึงไม่ถูกฆ่า — <b>ถ้า outer membrane เสียหาย หรือเชื้อถูกความร้อนฆ่า หรือถูกแอนติบอดีเคลือบ การรวมตัวนั้นจะเกิดขึ้นและเชื้อก็ตาย</b> ${S.mu}</li>
 <li>Chlamydia เป็น <b>energy parasite</b> เพราะใช้ ATP ของเซลล์เจ้าบ้าน · บางสายพันธุ์ยังต้องพึ่งเจ้าบ้านสำหรับกรดอะมิโนบางตัว ${S.mu}</li></ul>
 <h3>The wall</h3><ul>
 <li>ผนังมี <b>LPS</b> ซึ่งใช้ร่วมกันทั้งวงศ์ แต่<b>มีฤทธิ์ endotoxin อ่อน</b> ${S.mu}</li>
 <li><b>MOMP</b> เป็นโครงสร้างหลักของ outer membrane และ<b>ต่างกันในแต่ละสปีชีส์</b> ${S.mu}</li>
 <li>ยีนที่สร้าง MOMP ของ <i>C. trachomatis</i> มีบริเวณที่แปรผัน ทำให้แยกได้เป็น <b>18 serovar</b> ส่วน <i>C. pneumoniae</i> มี MOMP เหมือนกันหมดจึงมี serovar เดียว ${S.mu}</li></ul>
 <h3>What the cycle means in practice</h3><ul>
 <li>วงจรกินเวลา <b>48–72 ชั่วโมง</b> และเชื้อ<b>แบ่งตัวเฉพาะตอนที่เป็น reticulate body</b> ซึ่งอยู่ภายในเซลล์เท่านั้น ${S.mu}</li>
 <li>อาการทางคลินิกเกิดจาก (1) การทำลายเซลล์โดยตรงระหว่างแบ่งตัว และ (2) <b>การตอบสนองแบบ proinflammatory cytokine</b> ที่เชื้อกระตุ้น ${S.mu}</li></ul>`});

SEC.push({id:"chl-trachomatis",k:"b",t:"Chlamydia trachomatis",mm:"Serovar decides the disease",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"โรคเดียวกันซ้ำแล้วซ้ำเล่าคือสิ่งที่ทำให้ตาบอด ไม่ใช่การติดเชื้อครั้งเดียว",{a:"start",c:"bh"});
 const ink=(p)=>`color-mix(in srgb,var(--sb-ink) ${p}%,var(--sb-surface))`;
 const eye=(cx,cy,o)=>{let g="";
  const w=62,h=34;
  const lid=`M${cx-w},${cy} q${w*.62},${-h*1.18} ${w*2},0 q${-w*.62},${h*1.18} ${-w*2},0`;
  g+=`<path style="fill:${o.sclera};stroke:${ink(46)};stroke-width:2" d="${lid}"/>`;
  /* vessels on the sclera */
  if(o.inj){const q=rng(o.seed);for(let i=0;i<9;i++){const sx=cx-w+6+q()*14+(i>4?w*1.5:0),sy=cy-8+q()*16;
   g+=`<path style="fill:none;stroke:color-mix(in srgb,#9B1C31 ${(40+q()*26).toFixed(0)}%,var(--sb-surface));stroke-width:1.2;stroke-linecap:round" d="M${sx.toFixed(1)},${sy.toFixed(1)} q${(i>4?-12:12)},${(q()*8-4).toFixed(1)} ${(i>4?-22:22)},${(q()*6-3).toFixed(1)}"/>`}}
  g+=`<circle style="fill:${o.iris};stroke:${ink(50)};stroke-width:1.6" cx="${cx}" cy="${cy}" r="17"/>`
   +`<circle style="fill:${o.pupil||ink(82)};stroke:none" cx="${cx}" cy="${cy}" r="7.5"/>`;
  if(o.opaque)g+=`<circle style="fill:color-mix(in srgb,#E9E4DA 82%,var(--sb-surface));stroke:none;opacity:.86" cx="${cx}" cy="${cy}" r="17"/>`
   +`<path style="fill:none;stroke:${ink(22)};stroke-width:1" d="${mblob(cx,cy,17,16,o.seed+3,.12)}"/>`;
  /* follicles under the everted upper lid */
  if(o.foll){const q=rng(o.seed+11);for(let i=0;i<10;i++){const x=cx-44+i*9.6,y=cy-h*.62+q()*5;
   g+=`<path style="fill:color-mix(in srgb,#E6C9A8 70%,var(--sb-surface));stroke:${ink(30)};stroke-width:.9" d="${mblob(x,y,4.4,3.8,o.seed+i*3,.14)}"/>`}}
  if(o.scar)for(let i=0;i<5;i++)g+=`<path style="fill:none;stroke:color-mix(in srgb,#E9E4DA 90%,var(--sb-surface));stroke-width:2.4;stroke-linecap:round" d="M${cx-40+i*20},${cy-18} q4,6 1,12"/>`;
  /* lashes, turned inward in trichiasis */
  for(let i=0;i<11;i++){const t=i/10,x=cx-w+8+t*(w*2-16),y=cy-h*.86*Math.sin(Math.PI*t)-2;
   g+=o.trich
    ?`<path style="fill:none;stroke:${ink(66)};stroke-width:1.6;stroke-linecap:round" d="M${x.toFixed(1)},${y.toFixed(1)} q2,7 -3,12"/>`
    :`<path style="fill:none;stroke:${ink(66)};stroke-width:1.6;stroke-linecap:round" d="M${x.toFixed(1)},${y.toFixed(1)} q1,-7 4,-12"/>`}
  return g};
 const Y=160;
 b+=eye(96,Y,{sclera:"color-mix(in srgb,#C2334A 14%,var(--sb-surface))",iris:"color-mix(in srgb,#5A6E4A 58%,var(--sb-surface))",inj:1,foll:1,seed:7});
 b+=eye(256,Y,{sclera:"color-mix(in srgb,#C2334A 22%,var(--sb-surface))",iris:"color-mix(in srgb,#5A6E4A 58%,var(--sb-surface))",inj:1,foll:1,seed:13});
 b+=eye(416,Y,{sclera:"color-mix(in srgb,#C2334A 12%,var(--sb-surface))",iris:"color-mix(in srgb,#5A6E4A 58%,var(--sb-surface))",inj:1,scar:1,trich:1,seed:19});
 b+=eye(560,Y,{sclera:"color-mix(in srgb,#C2334A 10%,var(--sb-surface))",iris:"color-mix(in srgb,#5A6E4A 40%,var(--sb-surface))",scar:1,trich:1,opaque:1,seed:23});
 [["Follicles","ตุ่มน้ำเหลือง","ใต้เปลือกตาบน",96],
  ["Repeated reinfection","ติดซ้ำแล้วซ้ำอีก","อักเสบรุนแรงขึ้น",256],
  ["Scarring and trichiasis","แผลเป็นดึงเปลือกตา","ขนตาขูดกระจกตา",416],
  ["Corneal opacity","กระจกตาขุ่น","จนตาบอด",560]
 ].forEach(([n,d,d2,x])=>{b+=mL(x,222,n,{c:"bh"})+mL(x,242,d,{c:"s m"})+mL(x,260,d2,{c:"s m"})});
 b+=`<path class="m-sep" d="M24,290 L616,290"/>`
  +mL(24,316,"Serovars",{a:"start",c:"bh"});
 [["A, B, Ba, C","trachoma","เยื่อบุตาอักเสบเรื้อรังจนตาบอด",24],
  ["D to K","urogenital tract disease","inclusion conjunctivitis · infant pneumonia",232],
  ["L1, L2, L2a, L2b, L3","lymphogranuloma venereum","",440]
 ].forEach(([n,d,d2,x])=>{b+=mL(x,350,n,{a:"start",c:"bh"})+mL(x,370,d,{a:"start",c:"s m"})+mL(x,388,d2,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 416")},
notes:()=>`<h3>Which cells it can enter</h3><ul>
 <li>ตัวรับสำหรับ EB มีจำกัดอยู่ที่ <b>nonciliated columnar, cuboidal และ transitional epithelial cell</b> — ซึ่งอยู่ที่ท่อปัสสาวะ ปากมดลูก เยื่อบุโพรงมดลูก ท่อนำไข่ ทวารหนัก ทางเดินหายใจและเยื่อบุตา ${S.mu}</li>
 <li>serovar กลุ่ม <b>LGV รุกรานมากกว่า</b>กลุ่มอื่น เพราะแบ่งตัวใน <b>mononuclear phagocyte</b> ได้ ${S.mu}</li>
 <li>เชื้อเข้าทางรอยถลอกหรือรอยฉีกขาดเล็ก ๆ ${S.mu}</li></ul>
 <h3>Why repeated infection blinds</h3><ul>
 <li>การติดเชื้อ<b>ไม่ทำให้เกิดภูมิคุ้มกันที่อยู่นาน</b> — การติดซ้ำกลับกระตุ้นการอักเสบที่รุนแรงขึ้นและทำลายเนื้อเยื่อมากขึ้น ${S.mu}</li>
 <li>การตอบสนองนี้เองคือสิ่งที่ทำให้สูญเสียการมองเห็นในการติดเชื้อที่ตาแบบเรื้อรัง และทำให้เป็นหมันและมีปัญหาทางเพศสัมพันธ์ในการติดเชื้อที่อวัยวะเพศ ${S.mu}</li>
 <li>serovar ที่ไม่ใช่ LGV กระตุ้นการอักเสบที่ประกอบด้วย <b>neutrophil, lymphocyte และ plasma cell</b> ${S.mu}</li></ul>
 <h3>Trachoma</h3><ul>
 <li>องค์การอนามัยโลกประเมินว่ามีคน<b>ตาบอดจาก trachoma 6 ล้านคน</b> และกว่า <b>150 ล้านคน</b>ต้องการการรักษา — เป็น<b>สาเหตุตาบอดที่ป้องกันได้อันดับหนึ่ง</b> ${S.mu}</li>
 <li>การติดต่อจากตาสู่ตาเกิดผ่านละอองฝอย มือ เสื้อผ้าที่ปนเปื้อน และ<b>แมลงวัน</b>ที่พาสิ่งคัดหลั่งจากตาเด็กที่ติดเชื้อไปสู่ตาเด็กคนอื่น ${S.mu}</li>
 <li>เด็กคือแหล่งรังโรคหลัก · โรคเป็นประจำถิ่นในชุมชนที่<b>อยู่กันแออัด สุขาภิบาลไม่ดีและสุขอนามัยส่วนบุคคลไม่ดี</b> ${S.mu}</li>
 <li>การติดเชื้อพบมากในเด็ก แต่<b>อุบัติการณ์ตาบอดยังเพิ่มขึ้นเรื่อย ๆ จนถึงวัยผู้ใหญ่</b>ตามการดำเนินโรค ${S.mu}</li></ul>
 <h3>The other syndromes</h3><ul>
 <li><b>Adult inclusion conjunctivitis</b> พบในคนอายุ 18–30 ปี · การติดเชื้อที่อวัยวะเพศมักมาก่อนการติดที่ตา ติดต่อโดยการเอามือป้ายตาตัวเองหรือเพศสัมพันธ์ทางปาก ${S.mu}</li>
 <li><b>Neonatal conjunctivitis</b> ติดระหว่างคลอดผ่านช่องคลอดที่ติดเชื้อ · เกิดในราว <b>25%</b> ของทารกที่แม่มีการติดเชื้อที่อวัยวะเพศอยู่ ${S.mu}</li>
 <li><b>Infant pneumonia</b> เกิดใน <b>10–20%</b> ของทารกที่สัมผัสเชื้อตอนคลอด · หลังฟักตัว 2–3 สัปดาห์ ทารกมีน้ำมูก ตามด้วยหลอดลมอักเสบและ<b>ไอแห้ง</b>ที่เป็นลักษณะเฉพาะ ${S.mu}</li>
 <li><b>Urogenital infection</b> มีสิ่งคัดหลั่งเป็นหนองปนเมือก · <b>ผู้หญิงมักไม่มีอาการ</b> ${S.mu}</li>
 <li><b>LGV</b> เริ่มด้วย<b>แผลที่ไม่เจ็บ</b>ตรงจุดที่เชื้อเข้าแล้วหายเอง ตามด้วยต่อมน้ำเหลืองที่รับน้ำเหลืองจากบริเวณนั้นอักเสบและบวม แล้วจึงมีอาการทั่วร่างกาย ${S.mu}</li>
 <li>รอยโรคของ LGV เกิดที่<b>ต่อมน้ำเหลือง</b> มี <b>granuloma</b> เป็นลักษณะเฉพาะ · อาจกลายเป็นเนื้อตาย ดึง neutrophil เข้ามา และลามออกไปรอบ ๆ · ต่อมที่แตกทำให้เกิดฝีหรือ sinus tract ${S.mu}</li></ul>`});

SEC.push({id:"chl-species",k:"b",t:"Telling the three species apart",mm:"C. pneumoniae · C. psittaci",leg:[],
notes:()=>`<h3>Three species, three habits</h3>
 ${tbl(["Property","<i>C. trachomatis</i>","<i>C. pneumoniae</i>","<i>C. psittaci</i>"],[
  ["Host range","เชื้อของคนเป็นหลัก","เชื้อของคนเป็นหลัก","เชื้อของสัตว์เป็นหลัก ติดคนเป็นครั้งคราว"],
  ["Biovars หรือ serovars","LGV และ trachoma","TWAR เพียงแบบเดียว","หลายแบบ"],
  ["Diseases","LGV · ocular trachoma · oculogenital disease · infant pneumonia","bronchitis · pneumonia · sinusitis · pharyngitis","pneumonia — psittacosis"],
  ["EB morphology","กลม periplasmic space แคบ","รูปลูกแพร์ periplasmic space กว้าง","กลม periplasmic space แคบ"],
  ["Inclusion morphology","inclusion กลมอันเดียวต่อเซลล์","inclusion หลายอันขนาดเท่า ๆ กัน","inclusion หลายอันขนาดไม่เท่ากัน"],
  ["Plasmid DNA","มี","ไม่มี","มี"],
  ["Glycogen in inclusions ที่ย้อมติดไอโอดีน","ติด","ไม่ติด","ไม่ติด"],
  ["Susceptibility to sulfonamides","ไว","ไม่ไว","ไม่ไว"]])}
 <h3>What each one does clinically</h3><ul>
 <li><i>C. pneumoniae</i> ทำให้เกิดการติดเชื้อทางเดินหายใจตั้งแต่<b>ไม่มีอาการเลยจนถึง atypical pneumonia ที่รุนแรงจนต้องนอนโรงพยาบาล</b> ${S.mu}</li>
 <li>มีการเชื่อมโยง <i>C. pneumoniae</i> กับ<b>คราบไขมันที่อักเสบในหลอดเลือด</b> แต่บทบาทในการก่อโรคหลอดเลือดยังเป็นที่ถกเถียง — Murray ระบุไว้เช่นนั้นเอง ${S.mu}</li>
 <li><i>C. psittaci</i> ติดจากนก ทำให้เกิดตั้งแต่การอยู่อาศัยโดยไม่มีอาการจนถึง <b>bronchopneumonia รุนแรงที่มีเนื้อตายและเลือดออก</b> ${S.mu}</li>
 <li>ชื่อ <i>Chlamydia</i> มาจาก chlamydis แปลว่าเสื้อคลุม · <i>psittaci</i> มาจาก psittacus แปลว่านกแก้ว ${S.mu}</li></ul>`});

SEC.push({id:"myco-wall",k:"c",t:"Mycoplasma has no cell wall",mm:"Sterols and P1 adhesin",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"ไม่มีผนัง จึงไม่มีรูปร่างแน่นอน ย้อม Gram ไม่ติด และยากลุ่ม β-lactam ไม่มีเป้าให้จับ",{a:"start",c:"bh"});
 /* the envelope compared with an ordinary gram-positive one, on one baseline */
 const y0=96;
 b+=mL(24,66,"Envelope",{a:"start",c:"bh"});
 b+=mpgl(24,290,x=>y0+6+Math.sin(x/38)*3,3,7,9,{})
  +mbil(24,290,x=>y0+38+Math.sin(x/38)*3,{})
  +mL(157,176,"Ordinary bacterium",{c:"bh"})+mL(157,196,"peptidoglycan อยู่เหนือเยื่อหุ้มเซลล์",{c:"s m"});
 b+=mbil(350,616,x=>y0+38+Math.sin(x/38)*3,{});
 /* sterols wedged between the lipids: a fused ring system, not a block */
 const hexa=(x,y,r)=>{let d="";for(let k=0;k<6;k++){const a=k/6*6.283+Math.PI/6;
  d+=(k?"L":"M")+(x+Math.cos(a)*r).toFixed(1)+","+(y+Math.sin(a)*r).toFixed(1)}return d+"Z"};
 for(let i=0;i<7;i++){const x=366+i*36,yy=y0+38+Math.sin(x/38)*3;
  [[-2.6,-3.4],[2.6,-.6],[-2.6,2.2]].forEach(([dx,dy])=>{
   b+=`<path style="fill:color-mix(in srgb,#C8A24A 52%,var(--sb-surface));stroke:color-mix(in srgb,#8C6D46 66%,var(--sb-surface));stroke-width:1" d="${hexa(x+dx,yy+dy,3.2)}"/>`});
  b+=`<path style="fill:none;stroke:color-mix(in srgb,#8C6D46 66%,var(--sb-surface));stroke-width:1;stroke-linecap:round" d="M${x+4.6},${(yy+2.2).toFixed(1)} l3,3"/>`}
 b+=mL(483,176,"Mycoplasma",{c:"bh"})+mL(483,196,"มีแต่เยื่อหุ้มเซลล์ และในเยื่อนั้นมี sterol แทรกอยู่",{c:"s m"});
 /* the attachment organelle docking at the base of the cilia */
 b+=`<path class="m-sep" d="M24,228 L616,228"/>`
  +mL(24,254,"Attachment and ciliostasis",{a:"start",c:"bh"});
 const ep=278,wv=mwob(31,1);
 b+=`<path style="fill:color-mix(in srgb,#C98A6B 14%,var(--sb-surface));stroke:color-mix(in srgb,var(--sb-ink) 30%,var(--sb-surface));stroke-width:1.8" d="M24,${ep+94} L24,${ep+8} ${(()=>{let p="";for(let x=24;x<=616;x+=8)p+=`L${x},${(ep+8+wv(x/60)*5).toFixed(1)} `;return p})()} L616,${ep+94} Z"/>`;
 /* cell boundaries along the strip */
 for(let i=1;i<9;i++){const x=24+i*66;b+=`<path style="fill:none;stroke:color-mix(in srgb,var(--sb-ink) 16%,var(--sb-surface));stroke-width:1.1" d="M${x},${(ep+10+wv(x/60)*5).toFixed(1)} L${x},${ep+92}"/>`}
 /* nuclei near the base, so the strip reads as cells and not as boxes */
 for(let i=0;i<9;i++){const x=57+i*66;
  b+=`<path style="fill:color-mix(in srgb,#6B4FC8 16%,var(--sb-surface));stroke:color-mix(in srgb,#6B4FC8 42%,var(--sb-surface));stroke-width:1.2" d="${mblob(x,ep+62+(i%2?12:0),12+(i%3),10,i*7+5,.14)}"/>`}
 /* cilia: upright and even on the left, bent over and matted on the right */
 for(let i=0;i<40;i++){const x=30+i*15,yb=ep+8+wv(x/60)*5,sick=x>330;
  const d=sick?`M${x},${yb.toFixed(1)} q1,-12 ${9+(i%3)*3},-15`:`M${x},${yb.toFixed(1)} q2,-16 0,-30`;
  b+=`<path style="fill:none;stroke:color-mix(in srgb,#3E6FB0 ${sick?42:62}%,var(--sb-surface));stroke-width:1.8;stroke-linecap:round" d="${d}"/>`}
 /* mycoplasmas docked by their attachment organelle at the base of the cilia */
 for(let i=0;i<9;i++){const x=352+i*28,yb=ep+6+wv(x/60)*5,el=i%2;
  b+=`<path style="fill:color-mix(in srgb,#C2334A 24%,var(--sb-surface));stroke:color-mix(in srgb,#C2334A 56%,var(--sb-surface));stroke-width:1.1" d="${mblob(x,yb-8,el?6.4:4.8,el?3.4:4.2,i*7+5,.24)}"/>`
   +`<path style="fill:color-mix(in srgb,#C2334A 56%,var(--sb-surface));stroke:none" d="M${(x-1.5).toFixed(1)},${(yb-7).toFixed(1)} L${(x+1.5).toFixed(1)},${(yb-7).toFixed(1)} L${(x+.6).toFixed(1)},${(yb-.4).toFixed(1)} L${(x-.6).toFixed(1)},${(yb-.4).toFixed(1)} Z"/>`}
 b+=mlead2(170,ep-18,24,ep+120,["Healthy epithelium","cilia ตั้งตรงและพัดเมือกออกไปได้"],{a:"start"})
  +mlead2(450,ep-14,330,ep+120,["Ciliostasis","cilia หยุดพัด เมือกค้าง จึงไอแห้ง ๆ อยู่เป็นสัปดาห์"],{a:"start"});
 return svg(b,"0 0 640 470")},
notes:()=>`<h3>The smallest free-living bacteria</h3><ul>
 <li><i>Mycoplasma</i> คือ<b>แบคทีเรียที่เล็กที่สุดที่อยู่ได้ด้วยตัวเอง</b> ${S.mu}</li>
 <li>มันไม่เหมือนแบคทีเรียอื่นตรงที่<b>ไม่มีผนังเซลล์ และเยื่อหุ้มเซลล์มี sterol อยู่ด้วย</b> ${S.mu}</li>
 <li>แบคทีเรียที่ขาดผนังชนิดอื่นที่เรียกว่า <b>L form</b> นั้น<b>ไม่มี sterol</b> ในเยื่อหุ้มเซลล์ และ<b>สร้างผนังขึ้นมาใหม่ได้</b>เมื่ออยู่ในสภาพที่เหมาะสม — Mycoplasma สร้างไม่ได้ ${S.mu}</li>
 <li>การไม่มีผนังทำให้เชื้อ<b>ดื้อต่อ penicillin, cephalosporin, vancomycin</b> และยาอื่นที่ไปขัดขวางการสร้างผนังเซลล์ ${S.mu}</li>
 <li>รูปร่างจึง<b>ไม่แน่นอน</b> ตั้งแต่ทรงกลม 0.2–0.3 μm ไปจนถึงแท่ง ${S.mu}</li>
 <li>เชื้อต้องการ <b>sterol จากภายนอก</b> ซึ่งได้จากซีรั่มสัตว์ที่เติมลงในอาหารเลี้ยงเชื้อ ${S.mu}</li>
 <li>โตช้า generation time 1–16 ชั่วโมง และโคโลนีเล็กจน<b>ต้องบ่มนานจึงจะเห็น</b> ${S.mu}</li></ul>
 <h3>How it sticks</h3><ul>
 <li><i>M. pneumoniae</i> เป็น <b>extracellular pathogen</b> ที่เกาะเยื่อบุทางเดินหายใจด้วย<b>โครงสร้างเกาะจำเพาะที่ปลายข้างหนึ่งของเซลล์</b> ${S.mu}</li>
 <li>โครงสร้างนั้นประกอบด้วยโปรตีนยึดเกาะหลายตัว โดย <b>P1 adhesin สำคัญที่สุด</b> ${S.mu}</li>
 <li>มันจับกับ<b>ตัวรับที่เป็น sialated glycoprotein ที่โคนของ cilia</b> บนผิวเซลล์เยื่อบุ — และบนผิวเม็ดเลือดแดงด้วย ซึ่งอธิบายปรากฏการณ์ cold agglutinin ${S.mu}</li>
 <li>ผลที่ตามมาคือ <b>ciliostasis</b> — cilia หยุดทำงาน ${S.mu}</li></ul>`});

SEC.push({id:"myco-clinical",k:"c",t:"Atypical pneumonia and the genital mycoplasmas",mm:"M. pneumoniae",leg:[],
notes:()=>`<h3>Three species, three sites</h3>
 ${tbl(["Organism","Site","Human disease"],[
  ["<i>Mycoplasma pneumoniae</i>","respiratory tract","tracheobronchitis · pharyngitis · pneumonia และภาวะแทรกซ้อนตามมาทางระบบประสาท, pericarditis, hemolytic anemia, arthritis และรอยโรคที่ผิวหนังและเยื่อบุ"],
  ["<i>M. genitalium</i>","genitourinary tract","NGU · cervicitis · pelvic inflammatory disease"],
  ["<i>M. hominis</i>","respiratory และ genitourinary tract","pyelonephritis · ไข้หลังคลอด · การติดเชื้อทั่วร่างกายในผู้ที่ภูมิคุ้มกันบกพร่อง"]])}
 <h3>What the illness looks like</h3><ul>
 <li>การสัมผัส <i>M. pneumoniae</i> โดยทั่วไปลงเอยด้วย<b>การเป็นพาหะที่ไม่มีอาการ</b> ${S.mu}</li>
 <li>อาการที่พบบ่อยที่สุดคือ <b>tracheobronchitis</b>: ไข้ต่ำ อ่อนเพลีย ปวดศีรษะ และ<b>ไอแห้งไม่มีเสมหะ</b> เกิดขึ้น 2–3 สัปดาห์หลังสัมผัสเชื้อ ${S.mu}</li>
 <li>อาการค่อย ๆ แย่ลงในไม่กี่วันถัดมาและ<b>อยู่ได้สองสัปดาห์หรือนานกว่านั้น</b> ${S.mu}</li>
 <li>หลอดลมถูกแทรกซึมด้วย <b>lymphocyte และ plasma cell</b> เป็นหลัก — ไม่ใช่ neutrophil ${S.mu}</li>
 <li>เมื่อกลายเป็นปอดอักเสบจะเรียกว่า <b>primary atypical pneumonia</b> หรือ <b>walking pneumonia</b> · ภาพรังสีเห็นเป็น patchy bronchopneumonia ที่<b>ดูน่ากลัวกว่าสิ่งที่ตรวจพบจากการตรวจร่างกาย</b> ${S.mu}</li>
 <li>อาการปวดเมื่อยและอาการทางเดินอาหาร<b>พบไม่บ่อย</b> ${S.mu}</li></ul>
 <h3>Diagnosis</h3><ul>
 <li>การวินิจฉัยเป็นปัญหา เพราะ<b>ห้องปฏิบัติการส่วนใหญ่ไม่เพาะเชื้อ · กล้องจุลทรรศน์ไม่มีประโยชน์ · และซีโรโลยีก็ไม่ไว</b> ${S.mu}</li>
 <li>การตรวจที่ดีที่สุดคือ <b>PCR</b> ต่อเป้าที่จำเพาะต่อสปีชีส์ ${S.mu}</li>
 <li>การตรวจ <b>cold agglutinin</b> — IgM ที่จับแอนติเจนบนผิวเม็ดเลือดแดงคนที่ 4°C — <b>ไม่ไวและไม่จำเพาะ จึงไม่ควรทำ</b> ${S.mu}</li>
 <li><i>M. hominis</i> เป็น facultative anaerobe ที่โตใน 1–4 วัน โคโลนีมีลักษณะ<b>ใหญ่คล้ายไข่ดาว</b> ${S.mu}</li>
 <li><i>M. genitalium</i> โตช้ามาก การตรวจที่เลือกใช้จึงเป็น <b>nucleic acid amplification</b> ${S.mu}</li></ul>
 <h3>Treatment</h3><ul>
 <li><b>Macrolide, tetracycline และ fluoroquinolone</b> ใช้ได้ผลกับ <i>M. pneumoniae</i> · tetracycline และ fluoroquinolone สงวนไว้สำหรับผู้ใหญ่ ${S.mu}</li>
 <li>Azithromycin ใช้กันกว้างขวาง แต่<b>การดื้อยาพบมากในบางภูมิภาค — มากกว่า 90% ในเอเชีย</b> ${S.mu}</li>
 <li><i>M. genitalium</i> <b>ดื้อ macrolide และ fluoroquinolone บ่อย</b> ทำให้การรักษายุ่งยาก ${S.mu}</li>
 <li><i>M. hominis</i> <b>ดื้อ macrolide</b> และบางครั้งดื้อ tetracycline · <b>clindamycin</b> ใช้รักษาสายพันธุ์ที่ดื้อเหล่านี้ ${S.mu}</li></ul>`});

SEC.push({id:"anaer-where",k:"d",t:"Where the anaerobes live",mm:"Endogenous infection",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"เชื้อกลุ่มนี้อยู่ในตัวเราอยู่แล้ว โรคจึงเกิดเมื่อเยื่อกั้นถูกทำลาย ไม่ใช่เมื่อรับเชื้อใหม่",{a:"start",c:"bh"});
 const ink=(p)=>`color-mix(in srgb,var(--sb-ink) ${p}%,var(--sb-surface))`;
 const fill="color-mix(in srgb,#C98A6B 13%,var(--sb-surface))";
 /* head, neck and trunk only — the four sites are what the figure is for */
 b+=`<path style="fill:${fill};stroke:${ink(28)};stroke-width:2.2" d="M140,98 L160,98 L160,120 L140,120 Z"/>`
  +`<path style="fill:${fill};stroke:${ink(28)};stroke-width:2.2" d="M106,144 C112,128 126,120 150,120 C174,120 188,128 194,144 C204,184 206,214 198,244 C204,274 206,302 198,330 C176,340 124,340 102,330 C94,302 96,274 102,244 C94,214 96,184 106,144 Z"/>`
  +`<path style="fill:${fill};stroke:${ink(28)};stroke-width:2.2" d="${mblob(150,74,27,31,5,.05)}"/>`;
 const red=(a)=>`fill:color-mix(in srgb,#C2334A ${a}%,var(--sb-surface));stroke:color-mix(in srgb,#C2334A 52%,var(--sb-surface));stroke-width:1.6`;
 /* mouth */
 b+=`<path style="${red(16)}" d="M${""}136,84 q14,-9 28,0 q-14,9 -28,0 z"/>`;
 /* one lung, lobed, with a concave medial border and a fissure */
 b+=`<path style="${red(14)}" d="M122,146 C104,164 100,198 108,222 C120,238 142,234 148,218 C150,196 146,166 140,150 C134,142 126,140 122,146 Z"/>`
  +`<path style="fill:none;stroke:color-mix(in srgb,#C2334A 40%,var(--sb-surface));stroke-width:1.3" d="M110,186 q22,6 36,-4"/>`;
 /* gut, drawn as a coil rather than a blob */
 b+=`<path style="fill:none;stroke:color-mix(in srgb,#C2334A 40%,var(--sb-surface));stroke-width:13;stroke-linecap:round;stroke-linejoin:round" d="M118,228 C136,212 170,216 174,236 C178,256 146,258 138,246 C132,234 154,224 168,236 C180,248 172,270 152,272 C134,274 122,264 120,252"/>`
  +`<path style="fill:none;stroke:color-mix(in srgb,#C2334A 16%,var(--sb-surface));stroke-width:8;stroke-linecap:round;stroke-linejoin:round" d="M118,228 C136,212 170,216 174,236 C178,256 146,258 138,246 C132,234 154,224 168,236 C180,248 172,270 152,272 C134,274 122,264 120,252"/>`;
 /* pelvis */
 b+=`<path style="${red(16)}" d="${mblob(150,308,22,14,19,.1)}"/>`;
 b+=mlead2(150,84,268,62,["Mouth","periodontal infection แทบทุกราย","ไซนัสและหูอักเสบเรื้อรังราวครึ่งหนึ่ง"],{a:"start"})
  +mlead2(124,186,268,130,["Lung","พบไม่บ่อย เว้นแต่มีประวัติสำลัก","สิ่งคัดหลั่งจากปาก"],{a:"start"})
  +mlead2(146,244,268,198,["Gut","แหล่งใหญ่ที่สุด · Bacteroides fragilis","คือเชื้อที่พบบ่อยที่สุดในช่องท้อง"],{a:"start"})
  +mlead2(150,308,268,266,["Female genital tract","ฝีในอุ้งเชิงกรานและ salpingitis"],{a:"start"});
 b+=mL(268,316,"Skin",{a:"start",c:"bh"})
  +mL(268,336,"Cutibacterium และ Peptostreptococcus อยู่ประจำ",{a:"start",c:"s m"})
  +mL(268,354,"Bacteroides ไม่ใช่เชื้อประจำผิวหนัง แต่เข้ามาได้จากรอยกัดหรือบาดแผล",{a:"start",c:"s m"});
 b+=`<path class="m-sep" d="M24,384 L616,384"/>`
  +mL(24,410,"How they tolerate oxygen at all",{a:"start",c:"bh"});
 [["Catalase","ย่อย hydrogen peroxide","",24],
  ["SOD","ย่อย superoxide free radical","",232],
  ["Short-chain fatty acids","succinic acid จากเมแทบอลิซึม","แบบไม่ใช้ออกซิเจน ยับยั้งการกลืนและการฆ่าเชื้อ",400]
 ].forEach(([n,d,d2,x])=>{b+=mL(x,440,n,{a:"start",c:"bh"})+mL(x,460,d,{a:"start",c:"s m"})+mL(x,478,d2,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 512")},
notes:()=>`<h3>Endogenous by definition</h3><ul>
 <li>Anaerobe อยู่ในร่างกายคนเป็นจำนวนมาก ทำหน้าที่<b>ทำให้เชื้อประจำถิ่นคงที่และกันเชื้อก่อโรคไม่ให้เข้ามาอยู่</b> ${S.mu}</li>
 <li>การติดเชื้อจากเชื้อประจำถิ่นจึงมีลักษณะเป็น<b>เชื้อผสมหลายชนิด</b> — polymicrobial ${S.mu}</li>
 <li><i>Actinomyces</i> อยู่ที่ทางเดินหายใจส่วนบน ทางเดินอาหารและช่องคลอด แต่<b>ไม่ใช่เชื้อประจำผิวหนัง</b> ${S.mu}</li>
 <li>เชื้อกลุ่มนี้<b>ก่อโรคได้น้อย</b> และจะก่อโรคเมื่อ<b>เยื่อบุถูกทำลายจากอุบัติเหตุ การผ่าตัดหรือการติดเชื้ออื่น</b> ${S.mu}</li>
 <li>การติดเชื้อเป็นแบบ endogenous — <b>ไม่มีหลักฐานการติดต่อจากคนสู่คนหรือจากแหล่งภายนอก</b> ${S.mu}</li></ul>
 <h3>Where they cause what</h3><ul>
 <li><b>Respiratory tract</b>: ไซนัสและหูอักเสบเรื้อรังราวครึ่งหนึ่ง และ<b>periodontal infection แทบทั้งหมด</b> เป็นเชื้อ gram-negative anaerobe ผสมกัน โดยพบ <i>Prevotella</i>, <i>Porphyromonas</i>, <i>Fusobacterium</i> และ <i>Bacteroides</i> ที่ไม่ใช่ <i>fragilis</i> บ่อยที่สุด ${S.mu}</li>
 <li><b>Brain abscess</b> มักมีประวัติ sinusitis หรือ otitis เรื้อรังแล้วลุกลามเข้าสมองโดยตรง · ถ้ามาจากทางเลือดจากปอดจะเห็น<b>ฝีหลายก้อน</b> ${S.mu}</li>
 <li><b>Intraabdominal infection</b>: แม้ลำไส้จะมีเชื้อหลากหลาย แต่มีเพียงไม่กี่สปีชีส์ที่ก่อโรคในช่องท้อง · <b>พบ anaerobe แทบทุกราย</b> และ <i>B. fragilis</i> บ่อยที่สุด ${S.mu}</li>
 <li><b>Skin and soft tissue</b>: อาจเป็นแค่การอยู่อาศัยในแผล หรือลุกลามเร็วเป็น <b>myonecrosis</b> ที่คุกคามชีวิต · <i>B. fragilis</i> สัมพันธ์กับโรครุนแรงบ่อยที่สุด ${S.mu}</li></ul>
 <h3>Collecting the specimen</h3><ul>
 <li>สิ่งส่งตรวจต้องถูก<b>ส่งในภาชนะที่ไม่มีออกซิเจน</b> เพื่อไม่ให้เชื้อตายก่อนถึงห้องปฏิบัติการ ${S.mu}</li></ul>`});

SEC.push({id:"bfragilis",k:"d",t:"Bacteroides fragilis and the abscess",mm:"Capsule and pus",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"แคปซูลคือ virulence factor หลัก และฝีคือสิ่งที่ยาเพียงอย่างเดียวเข้าไม่ถึง",{a:"start",c:"bh"});
 const ink=(p)=>`color-mix(in srgb,var(--sb-ink) ${p}%,var(--sb-surface))`;
 const cx=196,cy=214;
 /* the surrounding tissue, then the fibrosing wall, then the pus */
 b+=`<path style="fill:color-mix(in srgb,#C98A6B 9%,var(--sb-surface));stroke:none" d="${mblob(cx,cy,186,166,41,.09)}"/>`;
 const cap=mblob(cx,cy,156,134,7,.05);
 b+=`<path style="fill:color-mix(in srgb,#8C6D46 12%,var(--sb-surface));stroke:color-mix(in srgb,#8C6D46 50%,var(--sb-surface));stroke-width:3" d="${cap}"/>`;
 /* collagen running round the wall */
 for(let i=0;i<30;i++){const a=i/30*6.283,r=138+ (i%3)*6;
  b+=`<path style="fill:none;stroke:color-mix(in srgb,#8C6D46 40%,var(--sb-surface));stroke-width:1.2" d="M${(cx+Math.cos(a)*r).toFixed(1)},${(cy+Math.sin(a-.12)*r*.86).toFixed(1)} A${r},${(r*.86).toFixed(0)} 0 0 1 ${(cx+Math.cos(a+.3)*r).toFixed(1)},${(cy+Math.sin(a+.18)*r*.86).toFixed(1)}"/>`}
 /* neutrophil rim */
 for(let i=0;i<13;i++){const a=i/13*6.283+.2,r=104;
  b+=mpmn(cx+Math.cos(a)*r,cy+Math.sin(a)*r*.84,15,i*7+5)}
 /* the pus */
 const pus=mblob(cx,cy,82,68,19,.08);
 b+=`<path style="fill:color-mix(in srgb,#C8B25A 26%,var(--sb-surface));stroke:none" d="${pus}"/>`
  +mgrainIn("pus",pus,cx-82,cy-68,164,136,120,23,"m-gr2",.9);
 /* the mixed flora inside it */
 const q=rng(29);
 for(let i=0;i<26;i++){const a=q()*6.283,r=Math.sqrt(q());
  const x=cx+Math.cos(a)*r*70,y=cy+Math.sin(a)*r*56,kind=i%3;
  if(kind===0)b+=`<g transform="rotate(${(q()*140-70).toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"><path style="fill:color-mix(in srgb,#C2334A 58%,var(--sb-surface));stroke:none" d="${mrod(x,y,13,3,i*5+3)}"/></g>`;
  if(kind===1)b+=`<path style="fill:color-mix(in srgb,#6B4FC8 52%,var(--sb-surface));stroke:none" d="${mblob(x,y,4.4,4.2,i*5+7,.16)}"/>`;
  if(kind===2)b+=`<path style="fill:none;stroke:color-mix(in srgb,#2E7D6B 62%,var(--sb-surface));stroke-width:2.6;stroke-linecap:round" d="M${(x-11).toFixed(1)},${y.toFixed(1)} q6,-4 11,0 q5,4 11,0"/>`}
 b+=mlead2(cx+40,cy-102,392,66,["Neutrophil rim","ชั้นที่พยายามจำกัดเชื้อไว้"],{a:"start"})
  +mlead2(cx+34,cy,392,118,["Pus","neutrophil ที่ตายแล้วและเนื้อตาย"],{a:"start"})
  +mlead2(cx+148,cy+16,392,170,["Fibrosing wall","กันทั้งเชื้อและยาไว้ข้างนอก","จึงต้องระบายหนอง"],{a:"start"})
  +mlead2(cx+14,cy+56,392,230,["Polymicrobial","แท่ง, cocci และ fusiform","อยู่ร่วมกันตามแหล่งที่มา"],{a:"start"});
 b+=`<path class="m-sep" d="M24,412 L616,412"/>`;
 [["Polysaccharide capsule","antiphagocytic และเกาะเยื่อบุช่องท้อง","ได้ดีกว่า anaerobe อื่น",24,438],
  ["Weak LPS","lipid A ขาดหมู่ฟอสเฟตบน glucosamine","และมีกรดไขมันน้อยกว่า จึงแทบไม่มีฤทธิ์",330,438]
 ].forEach(([n,d,d2,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})+mL(x,y+38,d2,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 496")},
notes:()=>`<h3>How it sticks and how it hides</h3><ul>
 <li><i>B. fragilis</i>, <i>Bacteroides</i> สปีชีส์อื่นและ <i>Porphyromonas gingivalis</i> เกาะเซลล์เยื่อบุและโมเลกุลนอกเซลล์เช่น fibrinogen, fibronectin และ lactoferrin ด้วย <b>fimbriae</b> ${S.mu}</li>
 <li>fimbriae ของ <i>P. gingivalis</i> ยัง<b>กระตุ้นการสร้าง TNF-α และ IL-1β</b> ${S.mu}</li>
 <li><i>B. fragilis</i> และ <i>Prevotella melaninogenica</i> เกาะเยื่อบุช่องท้องได้ดีกว่า anaerobe อื่นเพราะผิวหุ้มด้วย <b>polysaccharide capsule</b> ซึ่ง<b>กันการถูกกลืนและเป็น virulence factor หลักของ <i>B. fragilis</i></b> ${S.mu}</li>
 <li><b>Short-chain fatty acid</b> เช่น succinic acid ที่เกิดจากเมแทบอลิซึมแบบไม่ใช้ออกซิเจน<b>ยับยั้งการกลืนและการฆ่าเชื้อในเซลล์</b> ${S.mu}</li>
 <li><i>Porphyromonas</i> และ <i>Prevotella</i> บางสปีชีส์สร้าง <b>protease ที่ย่อย immunoglobulin</b> ${S.mu}</li>
 <li>anaerobe ที่ก่อโรคได้<b>ทนการสัมผัสออกซิเจนได้</b> เพราะหลายสายพันธุ์สร้าง <b>catalase และ SOD</b> ซึ่งทำลาย hydrogen peroxide และ superoxide free radical ${S.mu}</li></ul>
 <h3>Enterotoxigenic strains</h3><ul>
 <li>สายพันธุ์ที่ทำให้ท้องเสียสร้าง <b>heat-labile zinc metalloprotease</b> เรียกว่า <i>B. fragilis</i> toxin ${S.mu}</li>
 <li>Toxin นี้ทำให้เยื่อบุลำไส้เปลี่ยนรูปผ่านการจัดเรียง <b>F-actin</b> ใหม่ ส่งผลให้<b>หลั่งคลอไรด์และเสียน้ำ</b> ${S.mu}</li>
 <li>มันยังกระตุ้นให้เซลล์เยื่อบุลำไส้หลั่ง <b>IL-8</b> ซึ่งเพิ่มการอักเสบและความเสียหายของเยื่อบุ ${S.mu}</li></ul>
 <h3>Treatment</h3><ul>
 <li>หลักการคือ<b>ยาปฏิชีวนะร่วมกับการผ่าตัด</b> — ฝีที่มีผนังหนาต้องระบาย ${S.mu}</li>
 <li><b>สมาชิกของกลุ่ม <i>B. fragilis</i> แทบทั้งหมด</b> รวมทั้ง <i>Prevotella</i> และ <i>Porphyromonas</i> หลายสปีชีส์ และ <i>Fusobacterium</i> บางสายพันธุ์ <b>สร้าง β-lactamase</b> ${S.mu}</li>
 <li><i>B. fragilis</i> โตเร็วในอาหารเลี้ยงเชื้อ และโตบน <b>Bacteroides bile esculin agar</b> ซึ่งมี gentamicin อยู่ด้วย ขณะที่ gram-negative anaerobe อื่น ๆ โตไม่ได้ ${S.mu}</li>
 <li>แม้ <i>B. fragilis</i> จะเป็น<b>น้อยกว่า 1% ของเชื้อประจำลำไส้ใหญ่</b> แต่ก็เป็น anaerobe ที่แยกได้บ่อยที่สุดจากการติดเชื้อที่มีความสำคัญทางคลินิก ${S.mu}</li></ul>`});

SEC.push({id:"actinomyces",k:"d",t:"Actinomyces and the sulfur granule",mm:"Sinus tracts",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"โรคนี้เดินผ่านชั้นเนื้อเยื่อไปโดยไม่สนขอบเขตกายวิภาค แล้วเปิดรูออกที่ผิวหนัง",{a:"start",c:"bh"});
 const sk=mskin(24,400,64,{seed:9});
 b+=sk.b;
 const y=sk.y,wv=sk.wv,tx=214;
 /* the abscess cavity under the skin and the tract that drains it */
 const cav=mblob(tx,y.subq+18,62,40,13,.1);
 b+=`<path style="fill:color-mix(in srgb,#C8B25A 28%,var(--sb-surface));stroke:color-mix(in srgb,#8C6D46 50%,var(--sb-surface));stroke-width:2.4" d="${cav}"/>`
  +mgrainIn("ac",cav,tx-62,y.subq-22,124,80,70,17,"m-gr2",.9);
 b+=`<path style="fill:color-mix(in srgb,#C8B25A 28%,var(--sb-surface));stroke:color-mix(in srgb,#8C6D46 46%,var(--sb-surface));stroke-width:2.2" d="M${tx-11},${(y.subq+6).toFixed(1)} q-16,-50 -2,-84 q8,-20 5,-${(y.spin-y.top+54).toFixed(0)} l24,0 q-3,${(y.spin-y.top+54).toFixed(0)} 5,84 q14,34 -2,56 z"/>`;
 /* granules draining up the tract and sitting in the cavity */
 const gran=(x,yy,r,seed)=>{let g=`<path style="fill:color-mix(in srgb,#C8A24A 52%,var(--sb-surface));stroke:color-mix(in srgb,#8C6D46 64%,var(--sb-surface));stroke-width:1.2" d="${mblob(x,yy,r,r*.9,seed,.14)}"/>`;
  const q=rng(seed+7);for(let i=0;i<14;i++){const a=q()*6.283;
   g+=`<path style="fill:none;stroke:color-mix(in srgb,#8C6D46 62%,var(--sb-surface));stroke-width:.9" d="M${(x+Math.cos(a)*r*.2).toFixed(1)},${(yy+Math.sin(a)*r*.2).toFixed(1)} L${(x+Math.cos(a)*r*.86).toFixed(1)},${(yy+Math.sin(a)*r*.82).toFixed(1)}"/>`}
  return g};
 [[tx-18,y.subq+8,8,21],[tx+16,y.subq+22,9,27],[tx-4,y.derm-26,7,33],[tx+2,y.spin+12,6,39],[tx-2,y.top-14,7,45]].forEach(([x,yy,r,s])=>{b+=gran(x,yy,r,s)});
 b+=mlead2(tx,y.top-14,420,96,["Draining sinus tract","หนองที่มีเม็ดคล้ายเม็ดทราย","ไหลออกมาที่ผิวหนัง"],{a:"start"})
  +mlead2(tx+40,y.derm+10,420,158,["Fibrosing granulation tissue","ผิวหนังเหนือรอยโรคจึงแข็งเหมือนไม้"],{a:"start"})
  +mlead2(tx+52,y.subq+22,420,220,["Abscess","รอยโรค granulomatous เรื้อรัง","ที่กลายเป็นหนองและเชื่อมกันด้วย sinus tract"],{a:"start"});
 /* the granule itself, enlarged */
 const gx=162,gy=502;
 b+=`<path class="m-sep" d="M24,324 L616,324"/>`
  +mL(24,350,"Sulfur granule",{a:"start",c:"bh"})
  +mL(24,370,"ก้อนของเส้นสายที่ยึดไว้ด้วย calcium phosphate",{a:"start",c:"s m"})
  +mL(24,388,"เห็นด้วยตาเปล่าในหนองและใน sinus tract",{a:"start",c:"s m"});
 const q2=rng(51);
 for(let i=0;i<64;i++){const a=i/64*6.283+q2()*.05,L=34+q2()*26;
  let d=`M${(gx+Math.cos(a)*12).toFixed(1)},${(gy+Math.sin(a)*12).toFixed(1)}`;
  for(let k=1;k<=4;k++){const r=12+L*k/4,wob=(q2()-.5)*.22;
   d+=` L${(gx+Math.cos(a+wob)*r).toFixed(1)},${(gy+Math.sin(a+wob)*r).toFixed(1)}`}
  b+=`<path style="fill:none;stroke:color-mix(in srgb,#8C6D46 ${(44+q2()*30).toFixed(0)}%,var(--sb-surface));stroke-width:1.3;stroke-linecap:round" d="${d}"/>`}
 b+=`<path style="fill:color-mix(in srgb,#C8A24A 46%,var(--sb-surface));stroke:color-mix(in srgb,#8C6D46 64%,var(--sb-surface));stroke-width:1.6" d="${mblob(gx,gy,16,15,57,.14)}"/>`;
 for(let i=0;i<9;i++){const a=i/9*6.283+.3;b+=mpmn(gx+Math.cos(a)*78,gy+Math.sin(a)*72,13,i*9+11)}
 b+=mlead2(gx+34,gy-50,420,400,["Filamentous branching rods","เส้นสายแตกแขนง ย้อม Gram ติดสีบวก"],{a:"start"})
  +mlead2(gx+76,gy+34,420,530,["Neutrophils around it","หนองล้อมเม็ดนี้อยู่"],{a:"start"});
 return svg(b,"0 0 640 606")},
notes:()=>`<h3>Actinomycosis</h3><ul>
 <li>ชื่อโรคมาจากความเข้าใจเดิมที่คิดว่าเชื้อนี้เป็นเชื้อรา — <i>Actinomyces</i> แปลว่าเชื้อราที่มีรังสี ${S.mu}</li>
 <li>โรคมีลักษณะเป็น<b>รอยโรค granulomatous เรื้อรังที่กลายเป็นหนองและเกิดฝีที่เชื่อมกันด้วย sinus tract</b> ${S.mu}</li>
 <li>ในฝีและใน sinus tract มักเห็นโคโลนีขนาดที่มองด้วยตาเปล่าได้คล้ายเม็ดทราย เรียกว่า <b>sulfur granule</b> เพราะดูเป็นสีเหลืองหรือส้ม — จริง ๆ แล้วเป็น<b>ก้อนของเชื้อรูปเส้นสายที่ยึดกันด้วย calcium phosphate</b> ${S.mu}</li>
 <li>บริเวณที่เป็นหนองถูกล้อมด้วย <b>fibrosing granulation tissue</b> ทำให้ผิวหนังเหนือรอยโรค<b>แข็งเหมือนไม้</b> ${S.mu}</li>
 <li><i>Actinomyces</i> เป็น <b>facultatively anaerobic</b> หรือ anaerobic ${S.mu}</li>
 <li>โคโลนีของ <i>A. israelii</i> หลังบ่มหนึ่งสัปดาห์มีลักษณะ <b>molar tooth</b> ${S.mu}</li></ul>
 <h3>Where it strikes</h3><ul>
 <li><b>Cervicofacial</b> พบมากที่สุด — ในผู้ที่<b>สุขอนามัยช่องปากไม่ดี หรือเพิ่งทำฟันหรือมีอุบัติเหตุในช่องปาก</b> · อาการคือเนื้อเยื่อบวมมีพังผืดและแผลเป็น พร้อม sinus tract ที่เปิดออกตามมุมกรามและลำคอ ${S.mu}</li>
 <li>อาจเป็นการติดเชื้อเป็นหนองเฉียบพลัน หรือ<b>ค่อย ๆ ลุกลามโดยแทบไม่เจ็บ</b> ${S.mu}</li>
 <li><b>Thoracic</b> อาการไม่จำเพาะ · ฝีเกิดในเนื้อปอดก่อนแล้วลามเข้าเนื้อเยื่อข้างเคียง ${S.mu}</li>
 <li><b>Abdominal</b> ลามได้ทั่วช่องท้องและเข้าได้แทบทุกอวัยวะ ${S.mu}</li>
 <li><b>Pelvic</b> อาจเป็นแค่ช่องคลอดอักเสบเล็กน้อย หรือทำลายเนื้อเยื่อมากจนเกิด <b>tuboovarian abscess</b> หรืออุดท่อไต · <i>Actinomyces</i> <b>เกาะผิวของสิ่งแปลกปลอมเช่น IUD ได้</b> ${S.mu}</li></ul>
 <h3>Cutibacterium</h3><ul>
 <li><i>Cutibacterium</i> ซึ่งเดิมชื่อ <i>Propionibacterium</i> แปลว่าแบคทีเรียของผิวหนัง และเป็น<b>เชื้อประจำผิวหนัง</b> ${S.mu}</li>
 <li><i>C. acnes</i> คือเชื้อที่ทำให้เกิด <b>acne</b> และการติดเชื้อแบบ opportunistic · บทบาทหลักของมันใน acne คือ<b>กระตุ้นการอักเสบ</b> ${S.mu}</li>
 <li>acne จึงรักษาด้วยยาทาเป็นหลัก ${S.mu}</li>
 <li>เพราะมันเป็นเชื้อประจำผิวหนัง การเพาะเชื้อที่ขึ้น <i>C. acnes</i> จึง<b>ต้องแยกให้ออกว่าเป็นการปนเปื้อนหรือการติดเชื้อจริง</b> ${S.mu}</li></ul>`});

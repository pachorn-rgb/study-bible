//@include _micro-helpers.js
Object.assign(S,{mu:'<b class="sbb murray">Mu</b>'});
Object.assign(GN,{a:"Mycobacteria",b:"Spirochetes"});

/* ===================================================================
   Mycobacteria and spirochetes — Murray ch 22 (Mycobacterium and
   Related Acid-Fast Bacteria) and ch 32 (Treponema, Borrelia and
   Leptospira).
   =================================================================== */

SEC.push({id:"mycobact",k:"a",t:"Acid-fast, and slow because of it",mm:"The genus",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"ชั้นไขหนาที่ทำให้ติดสี acid-fast คือเหตุผลเดียวกับที่ทำให้มันโตช้าและทนยา",{a:"start",c:"bh"});
 /* two smears side by side: what Gram stain misses and Ziehl-Neelsen finds */
 const panel=(x0,t2,d,cls,bg)=>{let g=mL(x0+130,58,t2,{c:"bh"})+mL(x0+130,76,d,{c:"s m"});
  g+=`<rect x="${x0}" y="${92}" width="260" height="120" rx="10" style="fill:${bg};stroke:color-mix(in srgb,var(--sb-ink) 14%,var(--sb-surface));stroke-width:1.2"/>`;
  const q=rng(cls==="af"?7:11);
  /* host cells as faint background in both */
  for(let i=0;i<9;i++)g+=`<path class="m-cap" style="stroke-dasharray:none;fill:color-mix(in srgb,var(--sb-ink) 5%,transparent);stroke:none" d="${mblob(x0+26+q()*210,110+q()*86,16+q()*8,13+q()*6,i*5+3,.12)}"/>`;
  if(cls==="af")for(let i=0;i<14;i++){const x=x0+22+q()*216,y=104+q()*96,r=(q()*60-30);
   g+=`<g transform="rotate(${r.toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"><path style="fill:none;stroke:#C2334A;stroke-width:3.4;stroke-linecap:round" d="M${(x-11).toFixed(1)},${y.toFixed(1)} q5,-3 11,0 q6,3 11,0"/></g>`}
  return g};
 b+=panel(24,"Gram stain","ติดสีไม่ดีและไม่น่าเชื่อถือ","gram","color-mix(in srgb,#6B4FC8 5%,var(--sb-surface))")
  +panel(330,"Ziehl-Neelsen","แท่งแดงบาง ๆ บนพื้นน้ำเงิน","af","color-mix(in srgb,#3E6FB0 10%,var(--sb-surface))");
 b+=mL(24,236,"สีย้อมเข้าไปยาก และเมื่อเข้าไปแล้วกรดกับแอลกอฮอล์ก็ล้างออกไม่ได้ — จึงเรียกว่า acid-fast",{a:"start",c:"s m"});
 /* what the wax costs the organism */
 b+=`<path class="m-sep" d="M24,266 L616,266"/>`;
 [["Slow growth","แบ่งตัวหนึ่งครั้งใช้เวลาหลายชั่วโมง · การเพาะเชื้ออาจใช้เวลาหลายสัปดาห์",24,292],
  ["Resistance","ชั้นไขกันทั้งสารฆ่าเชื้อ ยาปฏิชีวนะหลายชนิด และความแห้ง",330,292],
  ["Obligate aerobe","จึงชอบยอดปอดซึ่งมีออกซิเจนสูงที่สุด",24,338],
  ["Intracellular survival","อยู่ใน macrophage ได้ · การกำจัดต้องอาศัยภูมิคุ้มกันระดับเซลล์",330,338],
  ["Culture media","Löwenstein-Jensen และ Middlebrook · บางสปีชีส์สร้างเม็ดสีเมื่อโดนแสง",24,384],
  ["Auramine-rhodamine","ย้อมเรืองแสง อ่านเร็วกว่าและไวกว่า Ziehl-Neelsen",330,384]
 ].forEach(([n,d,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})});
 return svg(b,"0 0 640 430")},
notes:()=>`<h3>The wall explains everything else</h3><ul>
 <li>Mycobacteria มีผนังเซลล์ที่<b>มี mycolic acid เป็นชั้นไขหนา</b> อยู่เหนือ peptidoglycan ที่เชื่อมกับ arabinogalactan — โครงสร้างนี้วาดไว้แล้วในหัวข้อ envelope ของ Basic Bacteriology ${S.mu}</li>
 <li>ชั้นไขนี้คือเหตุผลที่สีย้อมธรรมดาเข้าไม่ได้ · เมื่อใช้ความร้อนหรือสารลดแรงตึงผิวดันสีเข้าไปแล้ว <b>กรดกับแอลกอฮอล์ก็ล้างสีออกไม่ได้</b> จึงเรียกว่า acid-fast ${S.mu}</li>
 <li>การย้อม <b>auramine-rhodamine</b> ซึ่งเรืองแสงนั้นไวกว่าและอ่านเร็วกว่า Ziehl-Neelsen ${S.mu}</li>
 <li>ชั้นไขยังทำให้เชื้อ<b>ทนสารฆ่าเชื้อ ทนความแห้ง และทนยาหลายชนิด</b> ${S.mu}</li>
 <li>และมันทำให้สารอาหารเข้าออกช้า — เชื้อจึง<b>แบ่งตัวช้ามาก</b> การเพาะเชื้ออาจใช้เวลาหลายสัปดาห์ ${S.mu}</li></ul>
 <h3>Where it grows in the lab</h3><ul>
 <li>อาหารเลี้ยงเชื้อที่ใช้คือ <b>Löwenstein-Jensen</b> และ <b>Middlebrook</b> ${S.mu}</li>
 <li>บางสปีชีส์เช่น <i>M. kansasii</i> <b>สร้างเม็ดสีเหลืองหลังโดนแสงช่วงสั้น ๆ</b> ซึ่งใช้ช่วยจำแนกสปีชีส์ได้ ${S.mu}</li></ul>`});

SEC.push({id:"tb-patho",k:"a",t:"The granuloma is both the defence and the hiding place",mm:"TB granuloma",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"ร่างกายล้อมเชื้อไว้ได้ แต่สิ่งที่ล้อมไว้นั้นก็คือที่หลบของเชื้อเอง",{a:"start",c:"bh"});
 /* the granuloma in cross-section */
 const cx=200,cy=200;
 b+=`<path class="m-fat" style="fill:color-mix(in srgb,#8C6D46 14%,var(--sb-surface));stroke:color-mix(in srgb,#8C6D46 40%,var(--sb-surface));stroke-width:2.4" d="${mblob(cx,cy,142,122,7,.07)}"/>`;
 /* the wall of lymphocytes */
 const lq=rng(13);
 for(let i=0;i<46;i++){const a=i/46*Math.PI*2+lq()*.08,r=112+lq()*22;
  b+=`<path class="m-cap" style="stroke-dasharray:none;fill:color-mix(in srgb,#3E6FB0 26%,var(--sb-surface));stroke:none" d="${mblob(cx+Math.cos(a)*r,cy+Math.sin(a)*r*.86,8,7.4,i*5+3,.12)}"/>`}
 /* epithelioid macrophages inside that */
 for(let i=0;i<18;i++){const a=i/18*Math.PI*2+.1,r=72+lq()*14;
  b+=`<path class="m-body" style="fill:color-mix(in srgb,#C2185B 11%,var(--sb-surface));stroke:color-mix(in srgb,#C2185B 38%,var(--sb-surface));stroke-width:1.3" d="${mblob(cx+Math.cos(a)*r,cy+Math.sin(a)*r*.86,16,13,i*7+5,.14)}"/>`}
 /* Langhans giant cells: fused, nuclei pushed to the rim */
 [[cx-56,cy-46],[cx+58,cy+36]].forEach(([x,y],i)=>{
  b+=`<path class="m-body" style="fill:color-mix(in srgb,#C2185B 15%,var(--sb-surface));stroke:color-mix(in srgb,#C2185B 48%,var(--sb-surface));stroke-width:1.8" d="${mblob(x,y,28,22,i*9+11,.1)}"/>`;
  for(let k=0;k<9;k++){const a=k/9*Math.PI+ (i?0:Math.PI);
   b+=`<circle class="m-cap" style="stroke-dasharray:none;fill:color-mix(in srgb,#6B4FC8 34%,var(--sb-surface));stroke:none" cx="${(x+Math.cos(a)*19).toFixed(1)}" cy="${(y+Math.sin(a)*15).toFixed(1)}" r="3.4"/>`}});
 /* the caseous centre */
 b+=`<path style="fill:color-mix(in srgb,#8C6D46 30%,var(--sb-surface));stroke:none" d="${mblob(cx,cy,48,40,17,.14)}"/>`
  +mgrainIn("tbc",mblob(cx,cy,48,40,17,.14),cx-48,cy-40,96,80,90,5,"m-gr2",.9);
 /* dormant bacilli in the centre */
 const aq=rng(19);
 for(let i=0;i<7;i++){const a=aq()*6.28,r=aq()*32,x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;
  b+=`<g transform="rotate(${(aq()*80-40).toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"><path style="fill:none;stroke:#C2334A;stroke-width:2.8;stroke-linecap:round" d="M${(x-8).toFixed(1)},${y.toFixed(1)} q4,-2 8,0 q4,2 8,0"/></g>`}
 b+=mlead2(cx,cy,400,66,["Caseous centre","เนื้อตายคล้ายเนยแข็ง · เชื้ออยู่ในนี้ได้เป็นปี"],{a:"start"})
  +mlead2(cx-56,cy-46,400,118,["Langhans giant cell","macrophage หลอมรวมกัน นิวเคลียสอยู่ขอบ"],{a:"start"})
  +mlead2(cx+78,cy-56,400,170,["Epithelioid macrophages","macrophage ที่ถูกกระตุ้นจนเปลี่ยนรูป"],{a:"start"})
  +mlead2(cx+118,cy+72,400,222,["Lymphocyte cuff","CD4, CD8 และ NK T cell ล้อมอยู่ชั้นนอก"],{a:"start"})
  +mlead2(cx-130,cy+84,400,274,["Fibrin capsule","ถ้าเชื้อมาก ผนังหนาจนกัน macrophage ของเราเอง"],{a:"start"});
 /* the cytokine chain that builds it */
 b+=`<path class="m-sep" d="M24,348 L616,348"/>`
  +mL(24,374,"How it is built",{a:"start",c:"bh"});
 const chain=[["Alveolar macrophage","กลืนเชื้อเข้าไป แต่ฆ่าไม่ได้"],
  ["TH1 differentiation","T cell และ NK cell ถูกเรียกเข้ามา"],
  ["IFN-γ","macrophage ถูกกระตุ้น · phagosome กับ lysosome รวมตัวกันได้ จึงฆ่าเชื้อในเซลล์ได้"],
  ["TNF-α","สร้าง nitric oxide และอนุมูลไนโตรเจน · ฆ่าเชื้อในเซลล์ได้ดีขึ้น"]];
 chain.forEach(([n,d],i)=>{const y=404+i*46;
  b+=mL(24,y,n,{a:"start",c:"bh"})+mL(24,y+20,d,{a:"start",c:"s m"});
  if(i<3)b+=`<path class="m-cyc" marker-end="url(#ah2)" d="M${30},${y+26} L${30},${y+34}"/>`});
 b+=mL(24,608,"ผู้ที่สร้าง IFN-γ หรือ TNF-α ได้น้อย หรือมีความผิดปกติของ receptor ของสองตัวนี้",{a:"start",c:"bad"})
  +mL(24,628,"เสี่ยงต่อการติดเชื้อ mycobacteria ที่รุนแรงและลุกลาม — รวมถึงผู้ที่ได้ยาต้าน TNF-α",{a:"start",c:"bad"});
 return svg(b,"0 0 640 656")},
notes:()=>`<h3>The cytokine chain</h3><ul>
 <li>เชื้อถูก <b>alveolar macrophage</b> กลืนเข้าไป แต่ฆ่าไม่ได้ในตอนแรก ${S.mu}</li>
 <li>T cell และ <b>natural killer cell</b> ถูกเรียกเข้ามาที่บริเวณนั้น ทำให้ T cell แปรสภาพเป็น <b>TH1</b> แล้วหลั่ง <b>interferon-γ</b> ${S.mu}</li>
 <li>เมื่อมี IFN-γ อยู่ macrophage ที่ติดเชื้อจะ<b>ถูกกระตุ้น ทำให้ phagosome กับ lysosome รวมตัวกันได้</b> และฆ่าเชื้อในเซลล์ได้ ${S.mu}</li>
 <li><b>TNF-α</b> กระตุ้นการสร้าง nitric oxide และอนุมูลไนโตรเจนที่เกี่ยวข้อง ซึ่งเพิ่มการฆ่าเชื้อในเซลล์อีกชั้น ${S.mu}</li>
 <li>ผู้ที่<b>สร้าง IFN-γ หรือ TNF-α ได้น้อย หรือมีความผิดปกติของ receptor ของสองตัวนี้ เสี่ยงต่อการติดเชื้อ mycobacteria ที่รุนแรงและลุกลาม</b> ${S.mu}</li></ul>
 <h3>What the granuloma is made of</h3><ul>
 <li>แกนกลางเป็น<b>ก้อนเนื้อตาย</b>ที่มี alveolar macrophage, <b>epithelioid cell</b> และ <b>Langhans giant cell</b> ซึ่งคือ epithelioid cell ที่หลอมรวมกัน โดยมีเชื้ออยู่ข้างใน ${S.mu}</li>
 <li>รอบแกนนั้นเป็น<b>กำแพงหนาของ macrophage กับ CD4, CD8 และ NK T cell</b> ${S.mu}</li>
 <li>โครงสร้างนี้เรียกว่า <b>granuloma</b> และมันกันไม่ให้เชื้อแพร่ต่อ ${S.mu}</li></ul>
 <h3>Size decides the outcome</h3><ul>
 <li>ถ้าตอนที่ macrophage ถูกกระตุ้นมี<b>เชื้ออยู่น้อย</b> granuloma จะเล็กและเชื้อถูกทำลายโดยเนื้อเยื่อเสียหายน้อย ${S.mu}</li>
 <li>แต่ถ้ามี<b>เชื้ออยู่มาก</b> granuloma ที่เป็นเนื้อตายขนาดใหญ่หรือ <b>caseous granuloma</b> จะถูกห่อด้วย fibrin ซึ่ง<b>กันเชื้อไว้จากการถูก macrophage ฆ่าอย่างได้ผล</b> ${S.mu}</li>
 <li>เชื้ออยู่ในภาวะสงบในระยะนี้ได้ หรือ<b>ถูกปลุกให้กลับมาทำงานอีกหลายปีให้หลัง</b>เมื่อภูมิคุ้มกันของผู้ป่วยตก ${S.mu}</li>
 <li>นี่คือเหตุผลที่โครงสร้างเดียวกันเป็นทั้งเกราะป้องกันและที่หลบซ่อน ${S.mu}</li></ul>
 <h3>How it spreads</h3><ul>
 <li><b>คนเป็นแหล่งโรคตามธรรมชาติเพียงแหล่งเดียว</b> ${S.mu}</li>
 <li>แพร่ด้วยการสูดละอองติดเชื้อจากการสัมผัสใกล้ชิด · ละอองใหญ่ถูกดักที่เยื่อเมือกและถูกกวาดออกด้วย cilia แต่<b>ละอองเล็กที่มีเชื้อเพียง 1–3 ตัวลงถึงถุงลมได้</b>และก่อการติดเชื้อ ${S.mu}</li>
 <li>องค์การอนามัยโลกประเมินว่า<b>หนึ่งในสี่ของประชากรโลกติดเชื้อ <i>M. tuberculosis</i></b> ${S.mu}</li>
 <li>ปี 2016 มีผู้ป่วยรายใหม่ <b>10.4 ล้านราย และเสียชีวิต 1.6 ล้านราย</b> · มี 460,000 รายที่เป็นสายพันธุ์ดื้อยาหลายขนาน ${S.mu}</li>
 <li>พื้นที่ที่มีอุบัติการณ์สูงสุดคืออินเดีย ปากีสถาน แอฟริกาใต้สะฮารา แอฟริกาใต้ ยุโรปตะวันออก และจีน ${S.mu}</li></ul>`});

SEC.push({id:"tb-dx",k:"a",t:"Proving tuberculosis, and treating it",mm:"TB diagnosis",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"สองคำถามที่ต่างกัน: เคยสัมผัสเชื้อหรือไม่ กับเป็นโรคอยู่หรือไม่",{a:"start",c:"bh"});
 /* exposure tests on the left, disease tests on the right */
 b+=`<path class="m-sep" d="M320,56 L320,300"/>`;
 b+=mL(24,82,"Has the patient been exposed?",{a:"start",c:"bh"})
  +mL(348,82,"Is there disease now?",{a:"start",c:"bh"});
 /* tuberculin skin test: an induration measured across */
 const sx=120,sy=160;
 b+=`<path class="m-corn" d="M${sx-96},${sy+22} L${sx+96},${sy+22} L${sx+96},${sy+44} L${sx-96},${sy+44} Z"/>`
  +`<path class="m-pus" style="opacity:.55" d="${mblob(sx,sy+18,42,16,7,.14)}"/>`
  +`<path class="m-face" d="M${sx-42},${sy-8} L${sx+42},${sy-8}"/>`
  +`<path class="m-face" d="M${sx-42},${sy-14} L${sx-42},${sy-2} M${sx+42},${sy-14} L${sx+42},${sy-2}"/>`
  +mL(sx,sy-20,"วัดเส้นผ่านศูนย์กลางของตุ่มแข็ง",{c:"s m"});
 b+=mL(24,sy+74,"Tuberculin skin test",{a:"start",c:"bh"})
  +mL(24,sy+94,"ฉีด purified protein derivative 5 tuberculin unit เข้าในผิวหนัง",{a:"start",c:"s m"})
  +mL(24,sy+112,"อ่านผลเป็นขนาดของตุ่มแข็ง ไม่ใช่ขนาดของรอยแดง",{a:"start",c:"s m"});
 b+=mL(348,122,"Acid-fast smear",{a:"start",c:"bh"})
  +mL(348,142,"เร็วที่สุด แต่ต้องมีเชื้อจำนวนมากจึงจะเห็น",{a:"start",c:"s m"})
  +mL(348,174,"Culture",{a:"start",c:"bh"})
  +mL(348,194,"ชี้ขาดและใช้ทดสอบความไวต่อยาได้ แต่ใช้เวลาหลายสัปดาห์",{a:"start",c:"s m"})
  +mL(348,226,"Nucleic acid amplification",{a:"start",c:"bh"})
  +mL(348,246,"เร็วและจำเพาะ · บางชุดตรวจบอกการดื้อ rifampin ได้ด้วย",{a:"start",c:"s m"});
 /* the two traps of the skin test */
 b+=`<path class="m-sep" d="M24,318 L616,318"/>`
  +mL(24,344,"Two traps in the skin test",{a:"start",c:"bad"})
  +mL(24,368,"ผู้ป่วยที่เป็นวัณโรคอยู่จริงอาจไม่ตอบสนองเลย จึงต้องมี control เสมอ",{a:"start",c:"s m"})
  +mL(24,388,"ผู้ที่เคยได้วัคซีนอาจให้ผลบวกทั้งที่ไม่ได้ติดเชื้อ",{a:"start",c:"s m"})
  +mL(24,416,"Interferon-γ release assay ไม่ถูกรบกวนด้วยวัคซีน จึงใช้แทนได้ในกลุ่มนั้น",{a:"start",c:"bh"});
 /* treatment */
 b+=`<path class="m-sep" d="M24,446 L616,446"/>`
  +mL(24,472,"Treatment",{a:"start",c:"bh"})
  +mL(24,496,"วัณโรค: isoniazid, rifampin, pyrazinamide และ ethambutol 2 เดือน",{a:"start",c:"s m"})
  +mL(24,516,"แล้วต่อด้วย isoniazid กับ rifampin อีก 4–6 เดือน",{a:"start",c:"s m"})
  +mL(24,544,"การติดเชื้อแฝง: isoniazid กับ rifampin 4 เดือน · ไม่ต้องใช้ pyrazinamide",{a:"start",c:"s m"})
  +mL(24,572,"ที่ต้องใช้หลายตัวและนานขนาดนี้ เพราะเชื้อแบ่งตัวช้าและซ่อนอยู่ในก้อน granuloma",{a:"start",c:"bad"});
 return svg(b,"0 0 640 598")},
notes:()=>`<h3>The skin test answers the wrong question well</h3><ul>
 <li>การตรวจดั้งเดิมที่ใช้ประเมินการสัมผัสเชื้อคือ <b>tuberculin skin test</b> ${S.mu}</li>
 <li>ฉีด <b>purified protein derivative 5 tuberculin unit</b> เข้าในชั้นผิวหนัง แล้วอ่านผลเป็น<b>ขนาดของตุ่มแข็ง</b> ${S.mu}</li>
 <li>กับดักที่หนึ่ง: <b>ผู้ป่วยที่เป็นวัณโรคอยู่จริงอาจไม่ตอบสนองต่อการทดสอบ</b> จึงต้องใช้ control ควบคู่เสมอ ${S.mu}</li>
 <li>กับดักที่สอง: <b>ผู้ที่มาจากประเทศที่ฉีดวัคซีนเป็นกิจวัตรอาจให้ผลบวก</b>ทั้งที่ไม่ได้ติดเชื้อ ${S.mu}</li>
 <li><b>Interferon-γ release assay</b> ไม่ถูกรบกวนด้วยวัคซีน จึงมีประโยชน์ในกลุ่มนั้นโดยเฉพาะ ${S.mu}</li>
 <li>สิ่งสำคัญที่สุดคือทั้งสองการตรวจบอกว่า<b>ระบบภูมิคุ้มกันเคยเจอเชื้อแล้ว</b> ไม่ได้บอกว่ามีโรคอยู่ในขณะนี้ ${S.mu}</li></ul>
 <h3>Proving disease</h3><ul>
 <li><b>Acid-fast smear</b> ให้คำตอบเร็วที่สุดและบอกว่าผู้ป่วยแพร่เชื้อได้มากแค่ไหน แต่ต้องมีเชื้อจำนวนมากจึงจะเห็น ${S.mu}</li>
 <li><b>การเพาะเชื้อ</b>ยังเป็นการตรวจที่ชี้ขาด และจำเป็นสำหรับการทดสอบความไวต่อยา แต่ใช้เวลาหลายสัปดาห์เพราะเชื้อโตช้า ${S.mu}</li>
 <li><b>Nucleic acid amplification test</b> เร็วและจำเพาะ และบางชุดตรวจบอกการดื้อ rifampin ได้พร้อมกัน ${S.mu}</li></ul>
 <h3>Why the course is so long</h3><ul>
 <li>วัณโรครักษาด้วย <b>isoniazid, rifampin, pyrazinamide และ ethambutol เป็นเวลา 2 เดือน</b> แล้วตามด้วย isoniazid กับ rifampin หรือยาทางเลือกอื่นอีก <b>4–6 เดือน</b> ${S.mu}</li>
 <li>การติดเชื้อแฝงรักษาด้วย <b>isoniazid กับ rifampin 4 เดือน โดยไม่ต้องใช้ pyrazinamide</b> ${S.mu}</li>
 <li>เหตุผลที่ต้องใช้ยาหลายตัวพร้อมกันคือ<b>กันการเกิดสายพันธุ์ดื้อยาระหว่างการรักษา</b> และเหตุผลที่ต้องนานคือเชื้อแบ่งตัวช้าและอยู่ในก้อน granuloma ที่ยาเข้าถึงได้ยาก ${S.mu}</li></ul>`});

SEC.push({id:"ntm-leprosy",k:"a",t:"Leprosy's two poles, and the mycobacteria that are not tuberculosis",mm:"Leprosy · NTM",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"โรคเดียว เชื้อเดียว แต่ผลลัพธ์อยู่คนละขั้ว — เพราะภูมิคุ้มกันระดับเซลล์ของผู้ป่วยต่างกัน",{a:"start",c:"bh"});
 /* two skins side by side: few bacilli with strong response, many with weak */
 const pole=(x0,t2,sub,many,sd)=>{let g=mL(x0+140,66,t2,{c:"bh"})+mL(x0+140,84,sub,{c:"s m"});
  const sk=mskin(x0,x0+280,100,{seed:sd,scale:.52});g+=sk.b;const Y=sk.y;
  const q=rng(sd+7);
  const n=many?64:6;
  for(let i=0;i<n;i++){const x=x0+16+q()*248,y=Y.spin+4+q()*(Y.derm-Y.spin-8);
   g+=`<g transform="rotate(${(q()*70-35).toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"><path style="fill:none;stroke:#C2334A;stroke-width:2.4;stroke-linecap:round" d="M${(x-6).toFixed(1)},${y.toFixed(1)} q3,-2 6,0 q3,2 6,0"/></g>`}
  if(!many)for(let i=0;i<5;i++){const x=x0+40+i*50,y=Y.spin+22;
   g+=`<path class="m-body" style="fill:color-mix(in srgb,#C2185B 12%,var(--sb-surface));stroke:color-mix(in srgb,#C2185B 40%,var(--sb-surface));stroke-width:1.3" d="${mblob(x,y,20,15,i*7+sd,.12)}"/>`}
  return g};
 b+=pole(24,"Tuberculoid","paucibacillary · ภูมิคุ้มกันระดับเซลล์แรง",false,5)
  +pole(336,"Lepromatous","multibacillary · ภูมิคุ้มกันระดับเซลล์อ่อน",true,11);
 b+=mL(164,272,"เชื้อน้อยมากจน microscopy มักหาไม่เจอ",{c:"s m"})
  +mL(164,290,"มี granuloma · ต้องยืนยันด้วย skin test",{c:"s m"})
  +mL(476,272,"เชื้อเต็มไปหมด microscopy จึงไวมาก",{c:"s m"})
  +mL(476,290,"แพร่เชื้อได้สูง ต่างจาก tuberculoid",{c:"s m"});
 b+=`<path class="m-sep" d="M24,318 L616,318"/>`
  +mL(24,344,"Treatment",{a:"start",c:"bh"})
  +mL(24,364,"Tuberculoid: rifampicin กับ dapsone 6 เดือน",{a:"start",c:"s m"})
  +mL(24,384,"Lepromatous: เติม clofazimine และยืดเป็นอย่างน้อย 12 เดือน",{a:"start",c:"s m"})
  +mL(24,404,"การเพาะเชื้อไม่มีประโยชน์ — M. leprae เลี้ยงในอาหารเลี้ยงเชื้อไม่ได้",{a:"start",c:"s m"})
  +mL(348,344,"Spread",{a:"start",c:"bh"})
  +mL(348,364,"ติดจากการสัมผัสสารคัดหลั่งทางเดินหายใจ",{a:"start",c:"s m"})
  +mL(348,384,"ของผู้ป่วยที่ยังไม่ได้รักษาเป็นเวลานาน",{a:"start",c:"s m"});
 b+=`<path class="m-sep" d="M24,432 L616,432"/>`
  +mL(24,458,"Nontuberculous mycobacteria",{a:"start",c:"bh"})
  +mL(24,478,"Mycobacterium avium complex เป็นตัวที่สำคัญที่สุด · ก่อการติดเชื้อที่ปอดและการติดเชื้อแพร่กระจายในผู้ป่วย AIDS",{a:"start",c:"s m"})
  +mL(24,506,"พบในสิ่งแวดล้อม ไม่ได้ติดจากคนสู่คน จึงไม่ต้องแยกผู้ป่วย",{a:"start",c:"s m"});
 return svg(b,"0 0 640 532")},
notes:()=>`<h3>Two poles of one disease</h3><ul>
 <li>Leprosy แบ่งเป็นสองรูปแบบหลัก: <b>tuberculoid ซึ่งเป็นแบบ paucibacillary</b> คือมีเชื้อน้อย และ <b>lepromatous ซึ่งเป็นแบบ multibacillary</b> คือมีเชื้อมาก ${S.mu}</li>
 <li>สิ่งที่ตัดสินว่าผู้ป่วยไปทางไหนคือ<b>ความแรงของภูมิคุ้มกันระดับเซลล์</b> ไม่ใช่สายพันธุ์ของเชื้อ ${S.mu}</li>
 <li><b>Microscopy ไวสำหรับรูปแบบ lepromatous แต่ไม่ไวสำหรับ tuberculoid</b> · การยืนยัน tuberculoid ต้องใช้ skin test ${S.mu}</li>
 <li><b>การเพาะเชื้อไม่มีประโยชน์</b> เพราะ <i>M. leprae</i> เพาะในอาหารเลี้ยงเชื้อไม่ได้ ${S.mu}</li>
 <li>ที่สำคัญทางระบาดวิทยา: <b>รูปแบบ lepromatous แพร่เชื้อได้สูง ส่วน tuberculoid ไม่</b> ${S.mu}</li>
 <li>การแพร่เกิดจาก<b>การสัมผัสสารคัดหลั่งทางเดินหายใจของผู้ป่วยที่ยังไม่ได้รักษาเป็นเวลานาน</b> ${S.mu}</li></ul>
 <h3>Treatment differs by pole</h3><ul>
 <li>Tuberculoid รักษาด้วย <b>rifampicin กับ dapsone เป็นเวลา 6 เดือน</b> ${S.mu}</li>
 <li>Lepromatous <b>เติม clofazimine</b> เข้าไปในสูตร และยืดการรักษาเป็นอย่างน้อย <b>12 เดือน</b> ${S.mu}</li>
 <li>การควบคุมโรคอาศัย<b>การตรวจพบและรักษาผู้ติดเชื้ออย่างรวดเร็ว</b> ${S.mu}</li>
 <li>ปี 2016 ผู้ป่วยส่วนใหญ่อยู่ในอินเดีย บราซิล และอินโดนีเซีย · สหรัฐรายงาน 178 รายใหม่ในปี 2015 ${S.mu}</li></ul>
 <h3>Mycobacteria that are not tuberculosis</h3><ul>
 <li><b><i>Mycobacterium avium</i> complex</b> เป็นกลุ่มที่สำคัญที่สุด · ก่อการติดเชื้อที่ปอด และการติดเชื้อแพร่กระจายในผู้ป่วย AIDS ${S.mu}</li>
 <li>เชื้อกลุ่มนี้อยู่ใน<b>สิ่งแวดล้อม</b> และโดยทั่วไป<b>ไม่ติดจากคนสู่คน</b> ${S.mu}</li>
 <li><i>M. kansasii</i> เป็นตัวอย่างของสปีชีส์ที่สร้างเม็ดสีเมื่อโดนแสง ซึ่งใช้ช่วยจำแนก ${S.mu}</li></ul>`});

SEC.push({id:"syphilis",k:"b",t:"Syphilis: three phases and two kinds of serology",mm:"Syphilis",leg:[],
draw:()=>{let b="";
 b+=mL(24,26,"แผลหายเอง ผื่นหายเอง — การหายเองคือสิ่งที่ทำให้โรคนี้อันตราย",{a:"start",c:"bh"});
 const X0=56,X1=584,Y0=168;
 b+=`<path class="ax" d="M${X0},${Y0} L${X1+20},${Y0}" marker-end="url(#ah)"/>`;
 [[0,"สัมผัสเชื้อ"],[.17,"10–90 วัน"],[.42,"2 เดือน"],[.72,"ไม่กี่สัปดาห์ถัดมา"],[1,"หลายปี"]].forEach(([f,lab])=>{
  const x=X0+(X1-X0)*f;
  b+=`<path class="m-face" d="M${x},${Y0-6} L${x},${Y0+6}"/>`+mL(x,Y0+24,lab,{c:"s m"})});
 const band=(f0,f1,y,cls,t2)=>{const x0=X0+(X1-X0)*f0,x1=X0+(X1-X0)*f1;
  return `<rect class="${cls}" x="${x0}" y="${y}" width="${x1-x0}" height="28" rx="8"/>`+mL((x0+x1)/2,y+19,t2,{c:"bh"})};
 b+=band(.17,.42,Y0-42,"m-porin","Primary")
  +band(.42,.72,Y0-80,"m-body2","Secondary")
  +band(.84,1,Y0-118,"m-tail","Tertiary");
 /* the chancre, drawn in skin */
 const sk=mskin(24,300,216,{seed:7,scale:.5});b+=sk.b;const Y=sk.y;
 b+=`<path class="m-pus" style="opacity:.7" d="M${150-44},${Y.corn+2} q10,10 44,10 q34,0 44,-10 l0,10 q-10,12 -44,12 q-34,0 -44,-12Z"/>`
  +`<path class="m-body2" style="fill:none;stroke-width:4;stroke-linecap:round" d="M${150-56},${Y.corn+6} q6,-14 14,-4"/>`
  +`<path class="m-body2" style="fill:none;stroke-width:4;stroke-linecap:round" d="M${150+56},${Y.corn+6} q-6,-14 -14,-4"/>`;
 const vq=rng(13);
 for(let i=0;i<12;i++){const x=90+vq()*130,y=Y.spin+4+vq()*(Y.derm-Y.spin-8),r=(vq()*80-40);
  b+=`<g transform="rotate(${r.toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"><path style="fill:none;stroke:color-mix(in srgb,#C2185B 62%,var(--sb-surface));stroke-width:1.6;stroke-linecap:round" d="M${(x-14).toFixed(1)},${y.toFixed(1)} q3.5,-6 7,0 q3.5,6 7,0 q3.5,-6 7,0 q3.5,6 7,0"/></g>`}
 b+=mL(162,Y.bot+22,"Chancre",{c:"bh"})
  +mL(162,Y.bot+42,"แผลไม่เจ็บ ขอบนูน · เชื้ออยู่เต็มแผล",{c:"s m"})
  +mL(162,Y.bot+60,"endarteritis และ periarteritis พบได้ทุกระยะ",{c:"s m"})
  +mL(162,Y.bot+78,"หายเองใน 2 เดือน — ผู้ป่วยจึงคิดว่าหายแล้ว",{c:"bad"});
 /* the three phases in words */
 [["Primary","แผลตรงที่เชื้อเจาะเข้าไป · 1–2 สัปดาห์ต่อมา","ต่อมน้ำเหลืองโตแบบไม่เจ็บ",330,240],
  ["Secondary","อาการคล้ายไข้หวัดใหญ่ แล้วผื่นทั่วตัวรวมฝ่ามือฝ่าเท้า","condylomata lata ตามซอกพับ · ติดต่อได้สูง",330,316],
  ["Tertiary","ราวหนึ่งในสามของผู้ที่ไม่ได้รักษาเข้าสู่ระยะนี้","การอักเสบเรื้อรังแบบกระจายของอวัยวะใดก็ได้",330,392]
 ].forEach(([n,d,d2,x,y])=>{b+=mL(x,y,n,{a:"start",c:"bh"})+mL(x,y+20,d,{a:"start",c:"s m"})+mL(x,y+38,d2,{a:"start",c:"s m"})});
 b+=`<path class="m-sep" d="M24,${Y.bot+104} L616,${Y.bot+104}"/>`
  +mL(24,Y.bot+130,"Darkfield microscopy",{a:"start",c:"bh"})
  +mL(24,Y.bot+150,"เห็นเชื้อได้ในระยะ primary และ secondary เท่านั้น",{a:"start",c:"s m"})
  +mL(348,Y.bot+130,"Serology",{a:"start",c:"bh"})
  +mL(348,Y.bot+150,"ไวมากในระยะ secondary · ใช้ยืนยันในระยะอื่น",{a:"start",c:"s m"})
  +mL(24,Y.bot+180,"รักษาด้วย penicillin · ผู้ที่แพ้ใช้ tetracycline หรือ erythromycin · คู่นอนต้องได้รับการรักษาด้วย",{a:"start",c:"s m"})
  +mL(24,Y.bot+208,"ยังไม่มีวัคซีน",{a:"start",c:"bad"});
 return svg(b,"0 0 640 "+(Y.bot+232))},
notes:()=>`<h3>Primary</h3><ul>
 <li>ระยะแรกมี<b>แผลที่ผิวหนังหนึ่งแผลหรือมากกว่า (chancre)</b> ตรงตำแหน่งที่ spirochete เจาะเข้าไป ${S.mu}</li>
 <li>รอยโรคเกิดขึ้น <b>10 ถึง 90 วัน</b>หลังติดเชื้อ เริ่มเป็นตุ่มนูนแล้วกร่อนเป็น<b>แผลที่ไม่เจ็บและขอบนูน</b> ${S.mu}</li>
 <li>การตรวจทางจุลพยาธิวิทยาพบ <b>endarteritis และ periarteritis</b> ซึ่งเป็นลักษณะของรอยโรคซิฟิลิส<b>ทุกระยะ</b> พร้อมเซลล์อักเสบแทรกอยู่ ${S.mu}</li>
 <li>เซลล์กลืนกินกลืน spirochete เข้าไป แต่<b>เชื้อมักรอด</b> และมีเชื้ออยู่ในแผลจำนวนมาก ${S.mu}</li>
 <li>ผู้ป่วยส่วนใหญ่มี<b>ต่อมน้ำเหลืองโตแบบไม่เจ็บ</b> 1–2 สัปดาห์หลังแผลปรากฏ ซึ่งเป็นจุดที่เชื้อเพิ่มจำนวนและกระจายเข้ากระแสเลือด ${S.mu}</li>
 <li><b>แผลหายเองภายใน 2 เดือน</b> ซึ่งทำให้ผู้ป่วยรู้สึกโล่งใจอย่างผิด ๆ ${S.mu}</li></ul>
 <h3>Secondary</h3><ul>
 <li>ระยะที่สองคืออาการของโรคที่กระจายทั่วร่างกาย โดยมี<b>รอยโรคผิวหนังเด่นชัดทั่วทั้งตัว</b> ${S.mu}</li>
 <li>ผู้ป่วยมี<b>อาการคล้ายไข้หวัดใหญ่</b> — เจ็บคอ ปวดศีรษะ ไข้ ปวดกล้ามเนื้อ เบื่ออาหาร ต่อมน้ำเหลืองโต — ตามด้วยผื่นในอีกไม่กี่วัน ${S.mu}</li>
 <li>ผื่นมีได้หลายแบบ ทั้ง macular, papular และ pustular และ<b>คลุมผิวทั้งตัวรวมถึงฝ่ามือและฝ่าเท้า</b> ${S.mu}</li>
 <li><b>Condylomata lata</b> คือรอยโรคนูนตามซอกพับที่ชื้น และอาจมีแผลกร่อนในปากและเยื่อเมือกอื่น ${S.mu}</li>
 <li>เช่นเดียวกับ chancre <b>รอยโรคเหล่านี้ติดต่อได้สูง</b> ${S.mu}</li>
 <li>ผื่นและอาการ<b>หายเองภายในไม่กี่สัปดาห์</b> · ผู้ป่วยอาจหายเอง เข้าสู่ระยะแฝง หรือดำเนินไปสู่ระยะท้าย ${S.mu}</li></ul>
 <h3>Tertiary</h3><ul>
 <li>ราว<b>หนึ่งในสามของผู้ป่วยที่ไม่ได้รักษา</b>ดำเนินเข้าสู่ระยะที่สาม ${S.mu}</li>
 <li>อาการมาจาก<b>การอักเสบเรื้อรังแบบกระจาย</b>ซึ่งเกิดกับอวัยวะหรือเนื้อเยื่อใดก็ได้ ${S.mu}</li>
 <li>ซิฟิลิสยัง<b>ติดต่อจากแม่สู่ลูกในครรภ์ได้</b> และการติดเชื้อสู่ทารกเกิดได้ตลอดช่วงนั้น · แม้เชื้อในกระแสเลือดของแม่จะหยุดแล้ว โรคก็ยังทำงานอยู่ได้ ${S.mu}</li></ul>`});

SEC.push({id:"borrelia-lepto",k:"b",t:"Borrelia and Leptospira",mm:"Borrelia · Leptospira",leg:[],
draw:()=>tbl(["Disease","Organism and vector","Picture"],[
 ["Lyme disease","Borrelia burgdorferi · เห็บแข็งสกุล Ixodes — I. scapularis ในสหรัฐ, I. ricinus ในยุโรป, I. persulcatus ในเอเชีย","erythema migrans คือผื่นวงที่ขยายออก · ต่อมามีอาการทางข้อ หัวใจ และระบบประสาท"],
 ["Epidemic relapsing fever","Borrelia recurrentis · เหาตามตัวของคน — แหล่งโรคคือคน","ไข้ขึ้นลงเป็นรอบ · พบในเอธิโอเปีย เอริเทรีย โซมาเลีย และซูดาน"],
 ["Endemic relapsing fever","Borrelia หลายสปีชีส์ · เห็บอ่อน — แหล่งโรคคือหนูและสัตว์เล็ก","ไข้ขึ้นลงเป็นรอบ"],
 ["Leptospirosis","Leptospira · สัมผัสน้ำที่ปนเปื้อนปัสสาวะสัตว์ หรือจับต้องเนื้อเยื่อสัตว์ที่ติดเชื้อ","อาการคล้ายไข้หวัดใหญ่ · aseptic meningitis · Weil disease คือรูปแบบที่รุนแรงมาก"]]),
notes:()=>`<h3>Borrelia</h3><ul>
 <li>Borreliae เป็น spirochete<b>ขนาดใหญ่</b> (0.2–0.5 × 8–30 µm) และ<b>เห็นได้ด้วยสีย้อมกลุ่ม aniline</b> เช่น Giemsa และ Wright — ต่างจาก <i>Treponema</i> ที่ต้องใช้ darkfield ${S.mu}</li>
 <li>Lyme disease แพร่โดย<b>เห็บแข็งสกุล <i>Ixodes</i></b> · แหล่งโรคได้แก่หนู กวาง และตัวเห็บเอง ${S.mu}</li>
 <li>เชื่อว่า<b>ปฏิกิริยาของภูมิคุ้มกันต่อตัวเชื้อ</b>เป็นสาเหตุของอาการทางคลินิกส่วนหนึ่ง ไม่ใช่ตัวเชื้อโดยตรง ${S.mu}</li>
 <li><b>Relapsing fever</b> มีสองแบบ: แบบระบาดเกิดจาก <i>B. recurrentis</i> ที่แพร่โดย<b>เหาตามตัวของคน</b> และแพร่จากคนสู่คน · แบบประจำถิ่นเกิดจาก <i>Borrelia</i> หลายสปีชีส์ที่แพร่จาก<b>หนูและสัตว์เล็กผ่านเห็บอ่อน</b> ${S.mu}</li>
 <li>ผู้ที่เสี่ยงต่อแบบระบาดคือผู้ที่อยู่ใน<b>สภาพแออัดและสุขอนามัยไม่ดี</b> ${S.mu}</li></ul>
 <h3>Leptospira</h3><ul>
 <li>Leptospires เป็น spirochete ที่<b>บางและขดแน่น</b> (0.1 × 6–20 µm) และ<b>โตช้าในอาหารเลี้ยงเชื้อจำเพาะ</b> ${S.mu}</li>
 <li><b>คนเป็น accidental end-stage host</b> ไม่ใช่แหล่งโรค ${S.mu}</li>
 <li>เชื้อ<b>เจาะผ่านผิวหนังที่มีรอยแยกเล็ก ๆ ได้</b> ${S.mu}</li>
 <li>คนติดเชื้อจาก<b>การสัมผัสน้ำที่ปนเปื้อนปัสสาวะของสัตว์ที่ติดเชื้อ</b> หรือจากการจับต้องเนื้อเยื่อสัตว์ที่ติดเชื้อ ${S.mu}</li>
 <li>กลุ่มเสี่ยงคือผู้ที่สัมผัส<b>ลำธาร แม่น้ำ และน้ำขังที่ปนเปื้อนปัสสาวะ</b> รวมถึงผู้ที่สัมผัสสัตว์จากอาชีพ เช่น เกษตรกร คนชำแหละเนื้อ และสัตวแพทย์ ${S.mu}</li>
 <li>โรคมีตั้งแต่อาการคล้ายไข้หวัดใหญ่และ <b>aseptic meningitis</b> ไปจนถึง <b>Weil disease</b> ซึ่งเป็นรูปแบบที่รุนแรงมาก ${S.mu}</li></ul>`});

const SEC=[];
const GN={"Overview":"ภาพรวม · Overview","Renal corpuscle":"Renal corpuscle","Tubules":"ท่อไต · Tubules","Vessels":"หลอดเลือด · Interstitium","Lower tract":"ทางเดินปัสสาวะส่วนล่าง","Clinical":"Clinical"};
const STAIN=[["stain",[["he","H&E"],["pas","PAS"]]]];

/* 1 · low power */
SEC.push({id:"lowpower",k:"Overview",t:"Kidney at low power",leg:["eo","pale","ct","rbc"],tools:[["zone",[["all","All"],["cortex","Cortex"],["medulla","Medulla"]]]],
draw(){let b="";
 // wedge = one lobe: cortex top, medulla below to papilla
 b+=`<path class="ctk" d="M40,40 L600,40 L600,48 L40,48Z"/>`;
 b+=`<path class="eo2" d="M40,48 L600,48 L600,200 L40,200Z" style="opacity:.55"/>`;
 b+=`<path class="pale" d="M40,200 L600,200 C560,300 440,400 340,470 C330,476 310,476 300,470 C200,400 80,300 40,200Z" style="opacity:.75"/>`;
 // zones of medulla
 b+=`<path class="zoneL" d="M54,236 L586,236"/><path class="zoneL" d="M88,296 L552,296"/>`;
 // corpuscles in cortex (not under capsule, not in rays)
 const rr=RNG(5);const rays=[130,250,390,510];
 for(let i=0;i<34;i++){const x=56+rr()*530,y=70+rr()*118;if(rays.some(r=>Math.abs(r-x)<22))continue;b+=`<g opacity=".95">${corp(x,y,9,{loops:5,seed:i+3})}</g>`}
 // convoluted tubules texture
 for(let i=0;i<90;i++){const x=48+rr()*545,y=54+rr()*140;if(rays.some(r=>Math.abs(r-x)<20))continue;b+=`<circle class="${rr()<.75?"eo":"eo2"}" cx="${f1(x)}" cy="${f1(y)}" r="${f1(3+rr()*2)}" opacity=".55"/>`}
 // medullary rays
 rays.forEach(x=>{for(let k=-1;k<=1;k++)b+=`<path class="rayl" d="M${x+k*8},62 L${x+k*8},200"/>`});
 // medulla straight tubules converging to papilla
 for(let i=0;i<15;i++){const x=70+i*36,tx=300+i*3;b+=`<path class="medl" d="M${x},200 C${x},300 ${(x+tx)/2},380 ${tx},462"/>`}
 // arcuate & interlobular
 b+=V("art","M40,202 L600,202",4)+V("vein","M40,210 L600,210",4);
 [190,320,450].forEach(x=>b+=V("art",`M${x},202 L${x},60`,2.2));
 // minor calyx
 b+=`<path class="uro" d="M240,440 C270,500 370,500 400,440 L412,470 C380,520 260,520 228,470Z"/>`;
 const dim=ST.zone;if(dim==="cortex")b+=`<path class="veil" d="M40,200 L600,200 L600,520 L40,520Z"/>`;if(dim==="medulla")b+=`<path class="veil" d="M40,30 L600,30 L600,200 L40,200Z"/>`;
 if(ST.labels){b+=T(620,46,"Capsule",{a:"end",c:"s"})+TL(18,120,["Cortex"],{a:"start",c:"b"})+
  T(250,74,"Medullary ray",{c:"s"})+LD(250,96,250,80)+T(80,186,"Renal corpuscle",{a:"start",c:"s"})+
  T(608,218,"Arcuate a./v.",{a:"end",c:"s"})+T(196,120,"Interlobular a.",{a:"start",c:"s"})+
  T(18,232,"Outer stripe",{a:"start",c:"s"})+T(18,270,"Inner stripe",{a:"start",c:"s"})+T(18,330,"Inner medulla",{a:"start",c:"s"})+
  T(608,300,"Medulla (pyramid)",{a:"end",c:"b"})+T(320,452,"Papilla",{c:"s"})+T(452,494,"Minor calyx (urothelium)",{a:"start",c:"s"})+LD(410,476,450,490)+T(320,404,"Area cribrosa →",{c:"s"})}
 return svg(b)},
notes:()=>`<h3>จำภาพ low power ให้ได้</h3><ul>
 <li><b>Cortex</b> สีเข้มกว่า มี <b>renal corpuscle</b> กลมๆ กระจาย และหน้าตัดท่อ convoluted เต็มไปหมด ${S.j}${S.d}</li>
 <li><b>Medullary rays</b> = แถบท่อตรงที่ยื่นจาก medulla ขึ้นไปใน cortex (proximal/distal straight tubule + collecting tubule) ไม่มี corpuscle ในแถบนี้ และไม่ถึง capsule เพราะมี subcapsular convoluted tubules คั่น ${S.d}</li>
 <li><b>Medulla</b> สีจางกว่า มีแต่ท่อตรงเรียงขนาน ไม่มี corpuscle เลย ${S.j}</li>
 <li><b>Renal lobe</b> = 1 pyramid + cortex ที่ครอบ · <b>Renal lobule</b> = 1 medullary ray + cortex รอบๆ ${S.j}</li></ul>
 <h3>โซนของ medulla</h3><ul>
 <li><b>Outer stripe</b>: thick descending (pars recta) + thick ascending + thin limbs ${S.w}</li>
 <li><b>Inner stripe</b>: thin descending + thick ascending ${S.w}</li>
 <li><b>Inner medulla</b>: มีแต่ <b>thin limbs</b> + collecting ducts ใหญ่ขึ้นเรื่อยๆ จนเป็น papillary ducts ${S.w}</li></ul>
 <div class="pearl"><b>Papilla:</b> ปลาย pyramid ยื่นเข้า minor calyx · รูเปิดของ papillary ducts (ducts of Bellini) ทำให้ผิวพรุนเหมือนตะแกรง = <b>area cribrosa</b> ${S.d}</div>`});

/* 2 · nephron map */
SEC.push({id:"nephron",k:"Overview",t:"Uriniferous tubule map",leg:["eo","pale"],
draw(){let b="";
 b+=`<rect class="eo2" x="20" y="30" width="600" height="150" rx="8" style="opacity:.35"/><rect class="pale" x="20" y="180" width="600" height="320" rx="8" style="opacity:.5"/>`;
 b+=`<line class="guide" x1="20" y1="180" x2="620" y2="180"/>`;
 // nephron path (juxtamedullary)
 const seg=(d,c,w=10)=>`<path class="segO" d="${d}" stroke-width="${w+3}"/><path class="seg ${c}" d="${d}" stroke-width="${w}"/>`;
 b+=`<circle class="lum" cx="110" cy="84" r="26"/><circle class="par" cx="110" cy="84" r="26"/><path class="eo2 tuft" d="${blob(110,86,18,17,.2,12,4)}"/>`;
 b+=seg("M134,92 C180,120 150,60 200,70 C250,80 200,130 250,130 C280,130 286,110 300,120","pct",11);
 b+=seg("M300,120 L300,230","pct",11)+seg("M300,230 L300,440 C300,470 330,470 330,440 L330,300","thin",5)+seg("M330,300 L330,150","tal",8);
 b+=seg("M330,150 C330,120 300,108 264,112 C230,116 230,96 250,88 C280,78 330,96 360,80 C380,70 400,90 420,96","dct",8);
 b+=seg("M420,96 C440,100 456,92 470,96","conn",7)+seg("M470,60 L470,480","cd",13);
 b+=`<circle cx="138" cy="72" r="7" class="md"/>`;
 // cortical nephron short loop
 b+=`<g opacity=".55">${seg("M520,70 L520,220 C520,236 540,236 540,220 L540,70","thin",4)}</g>`;
 if(ST.labels){b+=T(36,52,"CORTEX",{a:"start",c:"h"})+T(36,204,"MEDULLA",{a:"start",c:"h"})+
  TL(60,140,["Renal","corpuscle"],{a:"middle",c:"s"})+T(196,52,"PCT",{c:"b"})+TL(268,206,["Proximal","straight"],{a:"end",c:"s"})+TL(286,380,["Thin","descending"],{a:"end",c:"s"})+
  T(316,486,"Thin ascending",{c:"s"})+TL(346,250,["TAL"],{a:"start",c:"b"})+T(150,62,"Macula densa",{a:"start",c:"s"})+T(300,60,"DCT",{c:"b"})+T(444,118,"CNT",{c:"s"})+
  TL(490,300,["Collecting","duct"],{a:"start",c:"b"})+TL(560,260,["Cortical nephron:","loop สั้น"],{a:"start",c:"s"})+T(470,500,"→ papillary duct → minor calyx",{c:"s"})}
 return svg(b)},
notes:()=>`<h3>ส่วนประกอบ</h3><ul>
 <li><b>Uriniferous tubule</b> = nephron + collecting duct (คนละต้นกำเนิด: metanephric blastema vs ureteric bud) ${S.d}</li>
 <li>ไตละ ~<b>1.25 ล้าน</b> nephron ${S.j}</li>
 <li><b>Juxtamedullary nephron</b> (~1/7) loop ยาวลงลึกถึง inner medulla → สร้าง gradient · <b>Cortical nephron</b> loop สั้น ${S.j}${S.w}</li></ul>
 <h3>Epithelium ตามส่วน</h3><table><tr><th>ส่วน</th><th>Epithelium</th></tr>
 <tr><td>Parietal layer</td><td>Simple squamous</td></tr><tr><td>Visceral layer</td><td>Podocytes</td></tr>
 <tr><td>PCT / pars recta</td><td>Simple cuboidal + brush border</td></tr><tr><td>Thin limbs</td><td>Simple squamous</td></tr>
 <tr><td>TAL / DCT</td><td>Simple cuboidal ไม่มี brush border</td></tr><tr><td>Collecting duct</td><td>Cuboidal → columnar (ซีด ขอบเซลล์ชัด)</td></tr>
 <tr><td>Calyx → bladder</td><td>Urothelium</td></tr></table>
 <div class="pearl"><b>จำลำดับ:</b> corpuscle → PCT → pars recta → thin desc → thin asc → TAL → macula densa → DCT → connecting tubule → CD ${S.j}</div>`});

/* 3 · renal corpuscle */
SEC.push({id:"corpuscle",k:"Renal corpuscle",t:"Renal corpuscle (LM)",leg:["eo","nu","rbc","bb","bm"],tools:STAIN,
draw(){let b="";const cx=300,cy=270,R=150;
 b+=`<rect class="bgt" x="0" y="0" width="640" height="520"/>`;
 b+=tube(70,90,48,"pct",{seed:2})+tube(560,420,50,"pct",{seed:9})+tube(80,440,40,"dct",{seed:4})+tube(570,120,42,"pct",{seed:6})+tube(560,280,30,"dct",{seed:8});
 b+=corp(cx,cy,R,{va:-90,loops:19,seed:21});
 // vascular pole arterioles
  b+=`<path class="sm" d="M236,30 L266,28 L300,126 L278,132Z" opacity=".9"/>`+`<path class="lum" d="M246,32 L258,31 L290,124 L282,127Z"/>`;
 for(let i=0;i<5;i++)b+=NU(252+i*8,48+i*17,4,2.2,70,"nu jg");
 b+=`<path class="sm" d="M342,128 L366,40 L384,44 L360,132Z" opacity=".7"/><path class="lum" d="M350,128 L370,46 L376,48 L356,130Z"/>`;
 // macula densa (DCT touching pole)
 b+=tube(420,88,40,"dct",{seed:12});for(let i=0;i<6;i++){const a=(150+i*12)*Math.PI/180;b+=NU(420+Math.cos(a)*31,88+Math.sin(a)*31,2.4,3.6,i*12+150,"nu md2")}
 // urinary pole into PCT
 b+=`<path class="eo" d="M280,418 L320,418 L332,520 L268,520Z"/><path class="lum" d="M292,418 L308,418 L314,520 L286,520Z"/><path class="bbr" d="M292,430 L291,520 M308,430 L311,520"/>`;
 if(ST.labels){b+=T(300,272,"Glomerulus",{c:"b"})+T(470,250,"Urinary (Bowman) space",{a:"start",c:"s"})+LD(436,262,468,250)+
  TL(610,330,["Parietal layer","simple squamous"],{a:"end",c:"s"})+LD(446,316,540,326)+TL(24,236,["Podocyte","nuclei (bulge","into space)"],{a:"start",c:"s"})+LD(194,236,106,236)+
  TL(24,300,["Mesangial","cell"],{a:"start",c:"s"})+LD(262,292,82,300)+T(186,30,"Afferent arteriole",{a:"end",c:"s"})+TL(196,72,["JG cells","(renin)"],{a:"end",c:"s"})+LD(262,70,200,70)+
  T(396,30,"Efferent",{a:"start",c:"s"})+TL(476,40,["Macula densa"],{a:"start",c:"s"})+LD(398,98,474,46)+T(300,30,"Vascular pole",{c:"h"})+
  TL(350,480,["Urinary pole","→ PCT"],{a:"start",c:"h"})+T(70,90,"PCT",{c:"s"})+T(80,440,"DCT",{c:"s"})+TL(24,170,["Capillary loop","+ RBC"],{a:"start",c:"s"})+LD(232,214,80,180)}
 return hs(svg(b))},
notes:()=>`<h3>โครงสร้าง</h3><ul>
 <li>ขนาด ~<b>200 µm</b> · glomerulus (กระจุก fenestrated capillary) ห่อด้วย <b>Bowman capsule</b> 2 ชั้น ${S.j}</li>
 <li><b>Parietal layer</b> = simple squamous · <b>Visceral layer</b> = podocytes · ระหว่างกันคือ <b>urinary (capsular) space</b> ${S.j}${S.d}</li>
 <li><b>Vascular pole</b>: afferent เข้า efferent ออก · <b>Urinary (tubular) pole</b>: squamous → cuboidal ของ PCT ทันที ${S.j}</li>
 <li>เห็นทั้ง 2 pole ในหน้าตัดเดียวได้ไม่บ่อย ${S.d}</li></ul>
 <h3>แยกนิวเคลียสในกระจุก</h3><table><tr><th>เซลล์</th><th>ตำแหน่ง</th></tr>
 <tr><td>Podocyte</td><td>ผิวนอกของ capillary loop นูนเข้า urinary space</td></tr>
 <tr><td>Endothelial</td><td>แบนบางแนบผนัง loop ด้านใน</td></tr>
 <tr><td>Mesangial</td><td>ตรงกลางระหว่าง loops มักติดสีเข้มกว่า</td></tr></table>
 <div class="pearl"><b>PAS:</b> brush border ของ PCT และ basement membrane ติดสีม่วงแดงชัด เพราะมี glycocalyx/glycoprotein ${S.w} ลองกดปุ่ม PAS</div>`});

/* 4 · filtration barrier */
SEC.push({id:"barrier",k:"Renal corpuscle",t:"Filtration barrier (EM)",leg:["rbc","bm"],
draw(){let b="";
 b+=`<rect class="lumc" x="0" y="0" width="640" height="200"/>`+`<rect class="usp" x="0" y="330" width="640" height="190"/>`;
 for(let i=0;i<4;i++)b+=RBC(80+i*150,110+(i%2)*30,3.2);
 // endothelium with fenestrae
 b+=`<rect class="endo" x="0" y="200" width="640" height="16"/>`;for(let x=24;x<640;x+=52)b+=`<rect class="lumc" x="${x}" y="200" width="16" height="16"/>`;
 b+=`<rect class="glyx" x="0" y="190" width="640" height="10"/>`;
 // GBM 3 layers
 b+=`<rect class="lr" x="0" y="216" width="640" height="14"/><rect class="ld2" x="0" y="230" width="640" height="34"/><rect class="lr" x="0" y="264" width="640" height="14"/>`;
 // pedicels
 for(let x=10,i=0;x<640;x+=46,i++){b+=`<path class="ped${i%2?" alt":""}" d="M${x},278 L${x+34},278 C${x+38},300 ${x+36},320 ${x+30},330 L${x+4},330 C${x-2},320 ${x-4},300 ${x},278Z"/>`;b+=`<line class="sd" x1="${x+34}" y1="284" x2="${x+46}" y2="284"/>`}
 b+=`<path class="podo" d="M120,330 C180,316 320,316 380,330 L380,372 C320,392 180,392 120,372Z"/>`+NU(250,352,36,13,0);
 b+=`<path class="podo alt" d="M420,330 C460,320 560,320 620,330 L620,368 C560,384 460,384 420,368Z"/>`;
 // molecules
 b+=`<g class="mol"><circle cx="560" cy="150" r="13" class="alb"/><circle cx="520" cy="160" r="4" class="h2o"/><circle cx="540" cy="420" r="4" class="h2o"/><circle cx="500" cy="440" r="3" class="h2o"/></g>`;
 b+=`<path class="arw" d="M520,168 L520,410"/><path class="arw" d="M560,165 L560,226"/><line class="xm" x1="550" y1="236" x2="570" y2="256"/><line class="xm" x1="570" y1="236" x2="550" y2="256"/>`;
 if(ST.labels){b+=T(20,30,"Capillary lumen",{a:"start",c:"b"})+T(20,500,"Urinary space",{a:"start",c:"b"})+
  TL(300,150,["Endothelial glycocalyx (−)"],{a:"start",c:"s"})+LD(300,194,300,156)+TL(140,176,["Fenestrated endothelium","รู 60–100 nm"],{a:"start",c:"s"})+LD(132,208,138,186)+
  T(18,227,"Lamina rara interna (−)",{a:"start",c:"s"})+T(18,251,"Lamina densa · type IV collagen (กั้นตามขนาด)",{a:"start",c:"s"})+T(18,275,"Lamina rara externa (−)",{a:"start",c:"s"})+
  T(18,310,"Pedicels",{a:"start",c:"s"})+T(250,404,"Podocyte cell body",{c:"s"})+TL(630,296,["Slit diaphragm","nephrin (zipper)"],{a:"end",c:"s"})+LD(590,284,600,292)+
  TL(600,110,["Albumin ~68 kDa ถูกกั้น"],{a:"end",c:"s"})+TL(510,440,["น้ำ + solute เล็ก"],{a:"end",c:"s"})}
 return svg(b)},
notes:()=>`<h3>3 ชั้น + 1</h3><ul>
 <li><b>Fenestrated endothelium</b> รู 60–100 nm กันเซลล์เม็ดเลือด/เกล็ดเลือด · มี <b>glycocalyx</b> ประจุลบคลุม ${S.w}${S.j}</li>
 <li><b>GBM</b> หนา ~300–360 nm (หนาสุดในร่างกาย) เกิดจากการเชื่อม basal lamina ของ endothelium + podocyte · type IV collagen, laminin, fibronectin, <b>heparan sulfate</b> ${S.j}${S.w}</li>
 <li>EM เห็น GBM 3 ชั้น: <b>lamina rara interna – densa – externa</b> · rara ทั้งสองประจุลบ → กันโมเลกุลประจุลบ · densa กันตาม <b>ขนาด/รูปร่าง</b> ${S.w}</li>
 <li><b>Filtration slits</b> 25–40 nm ระหว่าง pedicels มี <b>slit diaphragm</b> (nephrin, P-cadherin, podocalyxin) = modified tight junction ${S.j}${S.w}</li>
 <li><b>Subpodocyte space</b> คลุม ~60% ของผิว capillary เป็นชั้นที่ 4 ที่ควบคุมการกรองได้ ${S.w}</li></ul>
 <h3>ตัวเลขที่ออกสอบ</h3><ul><li>Hb (65 kDa) ผ่านได้ · albumin (68–70 kDa) ไม่ผ่าน ${S.w}${S.j}</li><li>กรอง ~20% ของ plasma ที่เข้า glomerulus · GFR ~125 mL/min (180 L/วัน) ${S.j}</li></ul>
 <div class="pearl"><b>Clinical:</b> COL4A5 → <b>Alport</b> (GBM แตกเป็นชั้น) · nephrin mutation → congenital nephrotic · foot process effacement → proteinuria ${S.j}${S.x}</div>`});

/* 5 · mesangium */
SEC.push({id:"mesangium",k:"Renal corpuscle",t:"Mesangium",leg:["nu","rbc","bm"],
draw(){let b="";
 b+=`<rect class="usp" x="0" y="0" width="640" height="520"/>`;
 const caps=[[200,190,96],[440,190,96],[320,380,96]];
 caps.forEach(([x,y,r])=>{b+=`<circle class="gbm" cx="${x}" cy="${y}" r="${r+8}"/><circle class="endo" cx="${x}" cy="${y}" r="${r}"/><circle class="lumc" cx="${x}" cy="${y}" r="${r-7}"/>`+RBC(x-20,y+10,3)+NU(x+r-4,y-20,14,3,80)});
 // mesangial cell in the middle where podocytes absent
 b+=`<path class="mm" d="M260,250 C300,230 340,230 380,250 C390,290 360,320 320,310 C280,320 250,290 260,250Z"/>`+NU(320,272,22,14,0,"nu me");
 b+=`<path class="mproc" d="M300,262 C280,244 270,230 262,214 M342,262 C362,244 372,230 380,214 M320,290 C320,306 320,316 320,300"/>`;
 // podocytes on outer surfaces
 [[200,80,0],[110,190,-90],[530,190,90],[440,80,0],[220,420,-30],[420,420,30]].forEach(([x,y,a])=>b+=`<path class="podo" d="${blob(x,y,30,14,.2,10,x)}" transform="rotate(${a} ${x} ${y})"/>`+NU(x,y,10,7,a));
 if(ST.labels){b+=T(200,190,"Capillary",{c:"b"})+T(440,190,"Capillary",{c:"b"})+T(320,400,"Capillary",{c:"b"})+
  TL(470,300,["Mesangial cell","+ matrix"],{a:"start",c:"s"})+LD(352,280,466,296)+TL(40,60,["Podocyte"],{a:"start",c:"s"})+LD(180,76,90,62)+
  TL(560,470,["ด้านที่ไม่มี podocyte","= mesangium รองรับ"],{a:"end",c:"s"})}
 return svg(b)},
notes:()=>`<h3>หน้าที่ของ mesangial cell</h3><ul>
 <li><b>ค้ำ capillary</b> ด้านที่ไม่มี podocyte คลุม · สร้าง mesangial matrix ${S.j}${S.d}</li>
 <li><b>หดตัว</b> (คล้าย pericyte) ปรับ blood flow/พื้นที่กรอง ตอบ angiotensin II ${S.j}${S.d}</li>
 <li><b>Phagocytosis</b> immune complex และโปรตีนที่ค้างใน filter → กันอุดตัน ${S.j}${S.d}</li>
 <li>หลั่ง cytokine, prostaglandin ช่วยซ่อมแซม ${S.j}</li></ul>
 <h3>2 กลุ่ม</h3><ul><li><b>Intraglomerular</b>: ในกระจุก</li><li><b>Extraglomerular</b> = <b>lacis / Goormaghtigh cells</b> อยู่ระหว่าง afferent, efferent และ macula densa → เป็นส่วนของ JGA ${S.w}${S.d}</li></ul>
 <div class="pearl">IgA nephropathy, lupus nephritis: immune complex ตกที่ <b>mesangium</b> → mesangial proliferation ${S.x}</div>`});

/* 6 · JGA */
SEC.push({id:"jga",k:"Renal corpuscle",t:"Juxtaglomerular apparatus",leg:["jg","nu","sm"],
draw(){let b="";
 b+=`<rect class="bgt" x="0" y="0" width="640" height="520"/>`;
 b+=corp(320,420,140,{va:-90,seed:5});
 // afferent (left) with JG cells, efferent (right) meeting at vascular pole (320,282)
 b+=`<path class="sm" d="M0,212 C120,206 230,226 300,292 L326,276 C252,196 128,176 0,182Z"/><path class="lum" d="M0,193 C124,190 236,210 306,282 L314,276 C244,202 124,186 0,200Z"/>`;
 for(let i=0;i<7;i++){const t=i/6,x=110+t*170,y=190+t*t*80;b+=`<circle class="jgg" cx="${f1(x)}" cy="${f1(y-6)}" r="9"/>`+NU(x,y-6,5,3.6,20+t*30,"nu jg")}
 b+=`<path class="sm" d="M640,212 C540,206 420,226 350,292 L326,278 C400,198 520,182 640,182Z" opacity=".75"/><path class="lum" d="M640,195 C536,192 426,212 344,284 L336,279 C410,204 528,190 640,201Z"/>`;
 // distal tubule with macula densa just above the pole
 b+=`<rect class="bmc" x="150" y="58" width="340" height="94"/><rect class="eo2" x="150" y="60" width="340" height="90"/><rect class="lum" x="150" y="78" width="340" height="22"/>`;
 for(let x=158;x<486;x+=13){const md=x>250&&x<392;b+=NU(x,66,2.6,2.6,0)+(md?NU(x,114,2.4,6,0,"nu md2"):NU(x,130,3,3,0))}
 b+=`<line class="cb" x1="248" y1="100" x2="248" y2="150"/><line class="cb" x1="394" y1="100" x2="394" y2="150"/>`;
 // lacis cells in the triangle between arterioles, under MD
 const rr=RNG(8);for(let i=0;i<14;i++)b+=NU(270+rr()*100,170+rr()*70,7,2,rr()*40-20,"nu lac");
 if(ST.labels){b+=T(150,48,"Distal tubule (straight part)",{a:"start",c:"s"})+TL(626,176,["Macula densa","นิวเคลียสเบียด อยู่ apical"],{a:"end",c:"b"})+LD(384,118,560,168)+
  TL(14,240,["Afferent arteriole"],{a:"start",c:"s"})+TL(14,120,["JG (granular) cells","แกรนูล renin"],{a:"start",c:"s"})+LD(150,190,96,128)+
  T(626,240,"Efferent arteriole",{a:"end",c:"s"})+TL(470,236,["Lacis cells"],{a:"start",c:"s"})+LD(364,206,468,232)+T(320,440,"Glomerulus",{c:"b"})+T(320,300,"Vascular pole",{c:"h"})}
 return svg(b)},
notes:()=>`<h3>3 องค์ประกอบ</h3><ul>
 <li><b>Macula densa</b>: เซลล์ของ distal tubule ตรงที่แตะ vascular pole · สูง เบียดแน่น นิวเคลียสอยู่ <b>apical</b>, Golgi อยู่ basal · ตรวจ <b>NaCl</b> ในท่อ (chemoreceptor) ${S.j}${S.d}</li>
 <li><b>JG (granular) cells</b>: smooth muscle ที่ดัดแปลงใน tunica media ของ <b>afferent</b> arteriole · มี RER, Golgi และแกรนูล <b>renin</b> · ตรวจแรงยืดผนัง (baroreceptor) ${S.j}${S.d}</li>
 <li><b>Lacis cells</b> (extraglomerular mesangial / Goormaghtigh) รูปกรวยระหว่าง afferent, efferent และ macula densa ${S.w}</li></ul>
 <h3>การทำงาน</h3><ul><li>NaCl ที่ macula densa ↑ → หลั่ง ATP/adenosine → afferent หด → GFR ↓ (<b>tubuloglomerular feedback</b>) ${S.j}</li>
 <li>BP ↓ หรือ NaCl ↓ → JG หลั่ง <b>renin</b> → Ang I → (ACE ที่ปอด) Ang II → aldosterone → DCT/CNT ดูด Na⁺ ${S.j}${S.d}</li></ul>
 <div class="pearl">ดูกลไก RAAS แบบเคลื่อนไหวได้ใน <b>Nephron Pathway Atlas</b></div>`});

/* 7 · PCT vs DCT */
SEC.push({id:"pctdct",k:"Tubules",t:"PCT vs DCT (cortex)",leg:["eo","bb","nu","rbc"],tools:STAIN,
draw(){let b="";
 b+=`<rect class="bgt" x="0" y="0" width="640" height="520"/>`;
 const P=[[110,110,62],[250,70,50],[520,90,58],[90,300,56],[580,260,48],[200,450,60],[470,460,58],[600,420,40]],D=[[380,200,46],[230,250,42],[420,330,40],[330,90,34]];
 P.forEach(([x,y,r],i)=>b+=tube(x,y,r,"pct",{seed:i+20,rot:i*30}));D.forEach(([x,y,r],i)=>b+=tube(x,y,r,"dct",{seed:i+40}));
 [[170,190,9],[310,170,7],[320,420,8],[520,190,8],[150,380,7],[480,250,6]].forEach(([x,y,r],i)=>b+=tube(x,y,r,"cap",{seed:i+60,rbcN:2}));
 b+=corp(340,520,70,{va:-90,loops:9,seed:3});
 if(ST.labels){b+=T(110,110,"PCT",{c:"b"})+T(380,200,"DCT",{c:"b"})+T(230,250,"DCT",{c:"b"})+T(90,300,"PCT",{c:"b"})+T(520,90,"PCT",{c:"b"})+
  TL(14,200,["Brush border","ทำให้ lumen ดูฟู"],{a:"start",c:"s"})+LD(96,128,60,190)+TL(626,190,["Lumen กว้าง","ใส ไม่มี brush border"],{a:"end",c:"s"})+LD(396,196,560,186)+
  TL(14,40,["Peritubular capillary"],{a:"start",c:"s"})+LD(170,184,100,46)}
 return hs(svg(b))},
notes:()=>`<table><tr><th></th><th>PCT</th><th>DCT</th></tr>
 <tr><td>จำนวนในหน้าตัด</td><td>มาก (ยาวกว่า)</td><td>น้อย</td></tr>
 <tr><td>เซลล์</td><td>ใหญ่ ติด eosin เข้ม</td><td>เล็ก ซีดกว่า</td></tr>
 <tr><td>นิวเคลียส/หน้าตัด</td><td>3–5</td><td>มากกว่า (6–10)</td></tr>
 <tr><td>Lumen</td><td>แคบ ฟู (brush border)</td><td>กว้าง ใส</td></tr>
 <tr><td>ขอบเซลล์</td><td>ไม่ชัด (interdigitation)</td><td>ไม่ชัด</td></tr></table>
 <h3>ทำไม PCT สีเข้ม</h3><ul><li>Mitochondria ยาวเรียงใน <b>basal infoldings</b> → ATP ให้ Na⁺/K⁺-ATPase ${S.j}${S.d}</li>
 <li>ดูด <b>glucose, amino acid, โปรตีนเล็กทั้งหมด</b> + น้ำและเกลือ ~2/3 (65–85%) ${S.j}${S.d}</li>
 <li>หลั่ง organic anion/cation, H⁺, NH₄⁺, ยาเช่น penicillin ${S.j}${S.d}</li>
 <li>Hydroxylate vitamin D (1α) · interstitial fibroblast ใกล้ PCT สร้าง <b>EPO</b> ${S.j}</li></ul>
 <div class="pearl"><b>ข้อควรระวัง:</b> brush border มักเสียตอน fix ทำให้ PCT ดูไม่ฟู ให้ดู <b>สีเข้ม + นิวเคลียสน้อย</b> ประกอบ ${S.d}</div>`});

/* 8 · PCT EM */
SEC.push({id:"pctem",k:"Tubules",t:"PCT cell ultrastructure",leg:["eo","nu"],
draw(){let b="";
 b+=`<rect class="lumc" x="0" y="0" width="640" height="80"/>`;
 const cell=(x0,w)=>{let g=`<path class="eo" d="M${x0},120 L${x0+w},120 L${x0+w},470 L${x0},470Z"/>`;
  for(let x=x0+6;x<x0+w-2;x+=9)g+=`<rect class="mv" x="${x}" y="64" width="5" height="56" rx="2.5"/>`;
  for(let i=0;i<5;i++)g+=`<circle class="ves" cx="${x0+20+i*((w-40)/4)}" cy="${140+(i%2)*14}" r="6"/>`;
  g+=`<circle class="lys" cx="${x0+w*.3}" cy="190" r="9"/><circle class="lys" cx="${x0+w*.72}" cy="200" r="7"/>`;
  g+=NU(x0+w/2,250,30,26,0);
  for(let x=x0+16;x<x0+w-8;x+=22){g+=`<line class="infold" x1="${x}" y1="470" x2="${x}" y2="320"/>`;g+=`<rect class="mito" x="${x+4}" y="${330+((x/22)%2)*20}" width="10" height="${110}" rx="5"/>`}
  return g};
 b+=cell(30,280)+cell(330,280);
 b+=`<rect class="tj" x="300" y="116" width="40" height="10"/>`+`<line class="bml" x1="20" y1="474" x2="620" y2="474"/>`+`<rect class="ct" x="0" y="478" width="640" height="42"/>`+`<ellipse class="lumc" cx="470" cy="500" rx="60" ry="14"/>`+RBC(470,500,2);
 if(ST.labels){b+=T(620,30,"Lumen",{a:"end",c:"b"})+TL(14,40,["Microvilli = brush border"],{a:"start",c:"s"})+LD(40,90,30,48)+
  TL(626,104,["Endocytic vesicles"],{a:"end",c:"s"})+LD(588,140,600,110)+TL(626,230,["Lysosomes"],{a:"end",c:"s"})+LD(538,206,600,224)+
  T(170,256,"Nucleus",{c:"s w"})+TL(340,104,["Tight junction (leaky)"],{a:"middle",c:"s"})+TL(626,330,["Basal infoldings","+ mitochondria"],{a:"end",c:"s"})+LD(600,380,620,340)+
  T(400,500,"Peritubular capillary",{a:"end",c:"s"})}
 return svg(b)},
notes:()=>`<h3>อ่านจาก apical ลง basal</h3><ul>
 <li><b>Microvilli ยาวหนาแน่น</b> = brush border เพิ่มพื้นที่ดูดซึม ${S.j}${S.d}</li>
 <li>ฐาน microvilli มี <b>pits/vesicles</b> → endocytosis โปรตีนเล็ก แล้วย่อยใน <b>lysosome</b> ปล่อย amino acid ออกด้าน basal ${S.j}${S.d}</li>
 <li><b>Tight junction รั่ว</b> → น้ำและ solute ผ่าน paracellular ได้ ${S.j}</li>
 <li><b>Basal infoldings + lateral interdigitation</b> + mitochondria ยาว = เครื่องหมายของ active transport ${S.j}${S.d}</li></ul>
 <div class="pearl">เซลล์ที่มี basal infolding + mitochondria แบบนี้ในร่างกาย: PCT, TAL, DCT, <b>striated duct</b> ของต่อมน้ำลาย ${S.x}</div>`});

/* 9 · medulla */
SEC.push({id:"medulla",k:"Tubules",t:"Medulla: loops, vasa recta, CD",leg:["eo","pale","rbc"],
draw(){let b="";
 b+=`<rect class="ctm" x="0" y="0" width="640" height="520"/>`;
 const rr=RNG(31);const items=[];
 const add=(t,x,y,r)=>items.push([t,x,y,r]);
 [[120,140,44],[400,120,46],[300,330,50],[540,360,44],[110,420,42]].forEach(a=>add("cd",...a));
 [[250,90,30],[520,200,28],[200,250,29],[420,450,28]].forEach(a=>add("tal",...a));
 [[60,250,16],[330,200,15],[460,270,15],[240,450,16],[580,90,16],[180,340,15],[600,470,15]].forEach(a=>add("thin",...a));
 [[30,60,9],[180,40,8],[340,40,9],[470,180,9],[380,250,8],[60,330,9],[420,380,8],[300,470,9],[560,280,8],[150,190,8]].forEach(a=>add("cap",...a));
 items.forEach(([t,x,y,r],i)=>b+=tube(x,y,r,t,{seed:i+90}));
 if(ST.labels){b+=T(120,140,"CD",{c:"b"})+T(400,120,"CD",{c:"b"})+T(300,330,"CD",{c:"b"})+T(250,90,"TAL",{c:"s"})+T(520,200,"TAL",{c:"s"})+
  TL(14,226,["Thin limb","ว่าง ไม่มี RBC"],{a:"start",c:"s"})+LD(60,240,40,232)+TL(626,60,["Vasa recta","มี RBC, ผนังบางกว่า"],{a:"end",c:"s"})+LD(350,46,560,60)+
  TL(626,500,["Interstitium","(hyaluronan มาก)"],{a:"end",c:"s"})}
 return svg(b)},
notes:()=>`<h3>แยก 4 อย่างในหน้าตัด medulla</h3><table><tr><th></th><th>ลักษณะ</th></tr>
 <tr><td>Collecting duct</td><td>ใหญ่สุด เซลล์ <b>ซีด</b> cuboidal–columnar <b>ขอบเซลล์ชัด</b></td></tr>
 <tr><td>Thick limb (TAL)</td><td>cuboidal ติด eosin กว่า CD ไม่มี brush border</td></tr>
 <tr><td>Thin limb</td><td>simple squamous ผนังหนากว่า capillary เล็กน้อย lumen <b>ว่าง</b></td></tr>
 <tr><td>Vasa recta</td><td>ผนังบางที่สุด มี <b>RBC</b> ใน lumen</td></tr></table>
 <h3>หน้าที่</h3><ul><li>Thin descending: น้ำผ่านได้ NaCl ผ่านยาก · thin ascending: NaCl ผ่าน น้ำไม่ผ่าน ${S.w}${S.d}</li>
 <li>TAL: ขน NaCl ออก (active) <b>ไม่ให้น้ำผ่าน</b> · สร้าง <b>Tamm-Horsfall (uromodulin)</b> ซึ่งเป็นแกนของ cast ${S.w}</li>
 <li>Vasa recta (fenestrated) เป็น countercurrent exchanger รักษา gradient ${S.j}</li>
 <li>Interstitium ของ inner medulla มี <b>renal interstitial medullary cells</b> ที่มี lipid droplet ${S.w}</li></ul>`});

/* 10 · collecting duct */
SEC.push({id:"cd",k:"Tubules",t:"Collecting duct & papilla",leg:["pale","nu"],
draw(){let b="";
 b+=`<rect class="ctm" x="0" y="0" width="640" height="520"/>`;
 // big CD cross-section with principal & intercalated cells
 const cx=180,cy=200,r=130,rl=72,n=13;b+=`<circle class="bmc" cx="${cx}" cy="${cy}" r="${r+1}"/><circle class="pale" cx="${cx}" cy="${cy}" r="${r}"/><circle class="lum" cx="${cx}" cy="${cy}" r="${rl}"/>`;
 for(let i=0;i<n;i++){const a=i/n*TAU,a2=(i+1)/n*TAU,ic=i%4===1;
  if(ic)b+=`<path class="ic" d="M${f1(cx+Math.cos(a)*rl)},${f1(cy+Math.sin(a)*rl)} L${f1(cx+Math.cos(a)*r)},${f1(cy+Math.sin(a)*r)} A${r},${r} 0 0 1 ${f1(cx+Math.cos(a2)*r)},${f1(cy+Math.sin(a2)*r)} L${f1(cx+Math.cos(a2)*rl)},${f1(cy+Math.sin(a2)*rl)} A${rl},${rl} 0 0 0 ${f1(cx+Math.cos(a)*rl)},${f1(cy+Math.sin(a)*rl)}Z"/>`;
  b+=`<line class="cb" x1="${f1(cx+Math.cos(a)*rl)}" y1="${f1(cy+Math.sin(a)*rl)}" x2="${f1(cx+Math.cos(a)*r)}" y2="${f1(cy+Math.sin(a)*r)}"/>`;
  const am=(a+a2)/2;b+=NU(cx+Math.cos(am)*(rl+(r-rl)*.48),cy+Math.sin(am)*(rl+(r-rl)*.48),9,8,am*57,ic?"nu dk":"nu");
  b+=`<circle class="cil" cx="${f1(cx+Math.cos(am)*(rl-2))}" cy="${f1(cy+Math.sin(am)*(rl-2))}" r="1.6"/>`}
 // papilla longitudinal: ducts converging, area cribrosa
 b+=`<path class="pale" d="M380,20 L620,20 L620,330 C600,420 540,470 500,480 C460,470 400,420 380,330Z" style="opacity:.55"/>`;
 [[418,30,474,450],[490,24,496,462],[570,30,520,450]].forEach(([x1,y1,x2,y2],i)=>b+=ltube(x1,y1,x2,y2,40,"pap",{seed:i+5}));
 b+=`<path class="uro" d="M360,360 C380,470 470,512 500,512 C530,512 620,470 640,360 L640,520 L360,520Z" style="opacity:.6"/>`;
 if(ST.labels){b+=TL(20,370,["Principal cell","ซีด ขอบชัด · AQP2"],{a:"start",c:"s"})+LD(110,276,70,360)+TL(20,30,["Intercalated cell","สีเข้มกว่า (mito)"],{a:"start",c:"s"})+LD(228,90,110,40)+
  T(180,205,"Lumen",{c:"s"})+TL(300,470,["Primary cilium"],{a:"middle",c:"s"})+LD(180,270,280,460)+T(500,14,"Papilla (longitudinal)",{c:"b"})+TL(500,500,["Area cribrosa → minor calyx"],{c:"s"})}
 return svg(b)},
notes:()=>`<h3>เซลล์ 2 ชนิด</h3><ul>
 <li><b>Principal cell</b> (ส่วนใหญ่): ซีด organelle น้อย <b>ขอบเซลล์ชัดมาก</b> มี primary cilium · ADH → แทรก <b>aquaporin-2</b> ที่ apical · ดูด Na⁺ หลั่ง K⁺ ${S.j}${S.w}</li>
 <li><b>Intercalated cell</b>: เข้มกว่า (mitochondria มาก) มี apical folds · <b>type A (α)</b> หลั่ง H⁺ · <b>type B (β)</b> หลั่ง HCO₃⁻ · แทบไม่มีใน inner medulla ${S.j}${S.w}</li></ul>
 <h3>ตามแนวยาว</h3><ul><li>Cortex: collecting tubule cuboidal ~40 µm → medulla: columnar ใหญ่ถึง 200 µm → <b>papillary duct (Bellini)</b> เปิดที่ area cribrosa ${S.j}${S.d}</li>
 <li>ผิว papilla: simple columnar → urothelium ของ calyx ${S.d}</li></ul>
 <div class="pearl"><b>Clinical:</b> acute pyelonephritis → neutrophils สะสมใน collecting ducts ของ papilla · nephrogenic DI = principal cell ไม่ตอบ ADH ${S.j}${S.x}</div>`});

/* 11 · slide id */
SEC.push({id:"slideid",k:"Tubules",t:"Slide ID cheat sheet",
draw(){let b="";const items=[["pct","PCT","เข้ม ฟู 3–5 nuc"],["dct","DCT","ซีดกว่า lumen ใส"],["tal","TAL","cuboidal ใน medulla"],["cd","Collecting duct","ซีด ขอบเซลล์ชัด"],["thin","Thin limb","squamous ว่าง"],["cap","Vasa recta","บางสุด มี RBC"]];
 items.forEach(([t,n,d],i)=>{const x=110+(i%3)*210,y=140+Math.floor(i/3)*230;b+=`<rect class="bgt" x="${x-95}" y="${y-110}" width="190" height="210" rx="14"/>`+tube(x,y,t==="cap"?22:t==="thin"?32:62,t,{seed:i+3,rbcN:t==="cap"?3:undefined});
  if(ST.labels)b+=T(x,y+86,n,{c:"b"})+T(x,y+100,d,{c:"s"})});
 return svg(b)},
notes:()=>`<h3>ถามตัวเอง 3 ข้อ</h3><ul>
 <li><b>1. ผนังหนาแค่ไหน?</b> squamous (thin limb, capillary) หรือ cuboidal ขึ้นไป</li>
 <li><b>2. มีอะไรใน lumen?</b> ฟู = brush border (PCT) · RBC = หลอดเลือด · ว่าง = thin limb/DCT</li>
 <li><b>3. ขอบเซลล์ชัดไหม?</b> ชัด + ซีด = collecting duct · ไม่ชัด = PCT/DCT/TAL (interdigitation) ${S.j}${S.d}${S.w}</li></ul>
 <h3>อยู่ที่ไหน</h3><table><tr><th>Cortex</th><td>corpuscle, PCT (มาก), DCT, collecting tubule, medullary rays</td></tr><tr><th>Medulla</th><td>ไม่มี corpuscle · thin/thick limbs, CD, vasa recta</td></tr></table>
 <div class="pearl">ใช้ปุ่ม <b>ป้าย</b> ด้านบนของแอปเพื่อเล่น <b>ทาย label</b> หรือ <b>Atlas Hunt</b> กับหน้านี้ได้</div>`});

/* 12 · vessels & interstitium */
SEC.push({id:"vessels",k:"Vessels",t:"Blood supply & interstitium",leg:["rbc"],
draw(){let b="";
 b+=`<rect class="eo2" x="20" y="20" width="600" height="190" rx="8" style="opacity:.3"/><rect class="pale" x="20" y="210" width="600" height="290" rx="8" style="opacity:.45"/>`;
 const A=(d,w)=>V("art",d,w),Vv=(d,w)=>V("vein",d,w);
 b+=A("M60,500 L60,214 L300,214",6)+Vv("M44,500 L44,224 L300,224",6);
 b+=A("M150,214 L150,40",3.5)+A("M150,170 C170,170 180,160 190,150",2)+`<circle class="lum" cx="206" cy="138" r="16"/><path class="eo2 tuft" d="${blob(206,140,11,10,.2,9,2)}"/>`;
 b+=A("M216,150 C240,160 250,170 262,170",1.6);
 for(let i=0;i<5;i++)b+=`<path class="capl" d="M262,${150+i*10} C300,${130+i*12} 330,${170+i*6} 370,${150+i*10}"/>`;
 b+=A("M150,120 C170,120 186,110 196,100",2)+`<circle class="lum" cx="212" cy="88" r="14"/>`;
 // juxtamedullary glomerulus with vasa recta
 b+=A("M270,214 C290,206 300,200 310,196",2)+`<circle class="lum" cx="326" cy="190" r="16"/><path class="eo2 tuft" d="${blob(326,192,11,10,.2,9,5)}"/>`;
 b+=`<path class="vr art2" d="M340,200 L350,460 C352,480 368,480 370,460 L380,220"/><path class="vr art2" d="M352,204 L372,420 C374,440 390,440 392,420 L400,226"/><path class="vr art2" d="M362,206 L398,380 C402,400 418,400 420,380 L420,230"/>`;
 if(ST.labels){b+=T(36,40,"CORTEX",{a:"start",c:"h"})+T(36,234,"MEDULLA",{a:"start",c:"h"})+T(80,480,"Interlobar a./v.",{a:"start",c:"s"})+T(170,206,"Arcuate a./v.",{a:"start",c:"s"})+
  TL(140,60,["Interlobular","(cortical radial) a."],{a:"end",c:"s"})+T(186,130,"Afferent",{a:"end",c:"s"})+T(250,186,"Efferent",{a:"start",c:"s"})+TL(380,130,["Peritubular","capillaries"],{a:"start",c:"s"})+
  TL(440,330,["Vasa recta","จาก juxtamedullary","efferent arteriole"],{a:"start",c:"s"})+TL(440,60,["Cortex ได้เลือด","มากกว่า medulla >10 เท่า"],{a:"start",c:"s"})}
 return svg(b)},
notes:()=>`<h3>ลำดับหลอดเลือด</h3><ul>
 <li>Renal a. → segmental → <b>interlobar</b> (ระหว่าง pyramid) → <b>arcuate</b> (ตาม corticomedullary junction) → <b>interlobular</b> → afferent → glomerulus → <b>efferent</b> ${S.j}${S.d}</li>
 <li>Efferent ของ cortical nephron → <b>peritubular capillaries</b> · ของ juxtamedullary → <b>vasa recta</b> ลงไปใน medulla ${S.j}</li>
 <li>Glomerulus อยู่ระหว่าง arteriole 2 ตัว → hydrostatic pressure สูงตลอดเส้น กรองได้ไม่มีดูดกลับ ${S.j}</li>
 <li>Stellate veins ใต้ capsule → interlobular v. ${S.j}</li></ul>
 <h3>Interstitium</h3><ul><li>Cortex มีน้อย (~10%) · fibroblast ใกล้ PCT สร้าง <b>EPO</b> เมื่อ O₂ ต่ำ ${S.j}${S.x}</li><li>Medulla: hyaluronan มาก + interstitial medullary cells ${S.j}${S.w}</li></ul>
 <div class="pearl"><b>Sickle cell:</b> RBC sickle ใน vasa recta ที่ O₂ ต่ำ → infarct ที่ papilla (papillary necrosis) ${S.j}</div>`});

/* 13 · urothelium */
SEC.push({id:"urothelium",k:"Lower tract",t:"Urothelium",leg:["eo","nu","ct"],tools:[["fill",[["empty","Empty"],["full","Full"]]]],
draw(){let b="";const full=ST.fill==="full",base=330,cs=1.25;
 b+=`<rect class="lumc" x="0" y="0" width="640" height="520"/>`+ctFill(0,base,640,190,4,.7);
 b+=uroth(0,640,base,0,full,7,cs);
 const iy=16,ix=400;b+=`<rect class="box" x="${ix}" y="${iy}" width="226" height="118" rx="12"/>`;
 if(!full){b+=`<path class="umb" d="M${ix+16},${iy+108} L${ix+16},${iy+60} C${ix+50},${iy+30} ${ix+176},${iy+30} ${ix+210},${iy+60} L${ix+210},${iy+108}Z"/>`;
  for(let k=0;k<4;k++)b+=`<path class="fv" d="M${ix+40+k*40},${iy+84} q12,-6 24,0"/>`;
  b+=`<path class="plq" d="M${ix+20},${iy+58} C${ix+52},${iy+30} ${ix+174},${iy+30} ${ix+206},${iy+58}"/>`}
 else{b+=`<path class="umb" d="M${ix+16},${iy+108} L${ix+16},${iy+76} L${ix+210},${iy+76} L${ix+210},${iy+108}Z"/>`;for(let x=ix+20;x<ix+206;x+=30)b+=`<path class="plq" d="M${x},${iy+76} L${x+22},${iy+76}"/><circle class="hinge" cx="${x+26}" cy="${iy+76}" r="2.5"/>`}
 const h=urothH(full,cs);
 if(ST.labels){b+=T(ix+113,iy+20,full?"Plaques คลี่ออกเป็นผิว":"Plaques พับเก็บเป็น vesicles",{c:"s"})+T(ix+113,iy+34,"Umbrella cell (EM)",{c:"m s"})+
  TL(14,base-h-36,[full?"Umbrella cells แบนยาว":"Umbrella (dome) cells · บางเซลล์ 2 นิวเคลียส"],{a:"start",c:"s"})+
  T(14,22,full?"Full: 2–3 ชั้น":"Empty: 5–7 ชั้น",{a:"start",c:"b"})+T(14,40,"Lumen · ปัสสาวะ hypertonic",{a:"start",c:"s"})+
  T(626,base+16,"Basement membrane",{a:"end",c:"s"})+T(626,base+110,"Lamina propria",{a:"end",c:"s"})+(full?"":T(626,base-20,"Basal cells",{a:"end",c:"s"})+T(626,base-80,"Intermediate",{a:"end",c:"s"}))}
 return svg(b)},
notes:()=>`<h3>3 ชั้นของเซลล์</h3><ul>
 <li><b>Basal</b>: เล็ก ชั้นเดียว บน basement membrane บาง</li><li><b>Intermediate</b>: cuboidal/low columnar 1 ถึงหลายชั้น</li>
 <li><b>Superficial = umbrella (dome) cells</b>: ใหญ่ถึง 100 µm บางเซลล์ binucleate ${S.j}${S.d}</li></ul>
 <h3>ทำไมกันปัสสาวะได้</h3><ul><li>ผิว apical เป็น <b>asymmetric unit membrane</b>: แผ่น <b>uroplakin plaques</b> (16 nm) แข็ง สลับ <b>hinge</b> ที่เป็นเยื่อปกติ ${S.j}${S.w}</li>
 <li>Bladder ว่าง → plaques พับเก็บเป็น <b>discoidal/fusiform vesicles</b> · เต็ม → vesicles กลับมาต่อที่ผิว ${S.j}</li>
 <li>Tight junction + plaques = <b>osmotic barrier</b> ${S.j}${S.d}</li></ul>
 <div class="pearl">กดปุ่ม <b>Empty/Full</b>: เต็มแล้วชั้นบางลงครึ่งหนึ่ง (5–7 → 2–3 ชั้น) จนดูคล้าย stratified squamous ${S.j}${S.d}</div>`});

/* 14 · ureter */
SEC.push({id:"ureter",k:"Lower tract",t:"Ureter (transverse)",leg:["eo","ct","sm","fat"],tools:[["zone",[["all","Upper 2/3"],["lower","Lower 1/3"]]]],
draw(){let b="";const cx=320,cy=260,low=ST.zone==="lower";
 b+=`<rect class="fat" x="0" y="0" width="640" height="520"/>`;const rr=RNG(3);for(let i=0;i<40;i++)b+=`<circle class="fatc" cx="${f1(rr()*640)}" cy="${f1(rr()*520)}" r="${f1(16+rr()*14)}"/>`;
 b+=`<circle class="ct" cx="${cx}" cy="${cy}" r="${low?236:222}"/>`;
 if(low)b+=`<circle class="sm" cx="${cx}" cy="${cy}" r="226"/><circle class="ct" cx="${cx}" cy="${cy}" r="206"/>`;
 b+=`<circle class="sm" cx="${cx}" cy="${cy}" r="200"/><circle class="ct" cx="${cx}" cy="${cy}" r="160"/>`;
 for(let i=0;i<90;i++){const a=rr()*TAU,d=165+rr()*32;b+=NU(cx+Math.cos(a)*d,cy+Math.sin(a)*d,5,1.3,a*57+90)}
 b+=`<circle class="sm" cx="${cx}" cy="${cy}" r="158" style="opacity:.75"/><circle class="ct" cx="${cx}" cy="${cy}" r="128"/>`;
 for(let i=0;i<70;i++){const a=rr()*TAU,d=130+rr()*26;b+=`<circle class="nu" cx="${f1(cx+Math.cos(a)*d)}" cy="${f1(cy+Math.sin(a)*d)}" r="1.6"/>`}
 // star-shaped lumen with urothelium
 const star=[];for(let i=0;i<12;i++){const a=i/12*TAU,r=i%2?122:66;star.push([cx+Math.cos(a)*r,cy+Math.sin(a)*r])};
 const inner=star.map(([x,y])=>[cx+(x-cx)*.7,cy+(y-cy)*.7]);
 b+=`<path class="eo3" d="${sm(star)}"/><path class="lumc" d="${sm(inner)}"/>`;
 for(let i=0;i<60;i++){const t=i/60*TAU,k=12;const idx=Math.floor(i/5)%12;const p=star[idx],q=inner[idx];b+=`<circle class="nu" cx="${f1((p[0]+q[0])/2+(rr()-.5)*10)}" cy="${f1((p[1]+q[1])/2+(rr()-.5)*10)}" r="2.2"/>`}
 if(ST.labels){b+=T(cx,cy+4,"Lumen รูปดาว",{c:"s"})+TL(20,40,["Urothelium"],{a:"start",c:"s"})+LD(cx-50,cy-60,90,46)+TL(20,90,["Lamina propria"],{a:"start",c:"s"})+LD(cx-90,cy-80,104,92)+
  TL(626,60,["Inner longitudinal"],{a:"end",c:"s"})+LD(cx+100,cy-100,530,64)+TL(626,110,["Outer circular"],{a:"end",c:"s"})+LD(cx+140,cy-110,530,114)+
  (low?TL(626,160,["+ Outer longitudinal","(ส่วนล่าง 1/3)"],{a:"end",c:"h"})+LD(cx+166,cy-150,520,160):"")+TL(20,480,["Adventitia + fat"],{a:"start",c:"s"})}
 return svg(b)},
notes:()=>`<h3>ผนัง 3 ชั้น</h3><ul>
 <li><b>Mucosa</b>: urothelium + lamina propria กว้าง (fibroelastic) พับตามยาวจน lumen เป็น<b>รูปดาว</b>เมื่อไม่ขยาย ${S.j}${S.d}</li>
 <li><b>Muscularis</b> (หนากว่า mucosa): ส่วนบน 2/3 = <b>inner longitudinal + outer circular</b> (กลับกับลำไส้!) · ส่วนล่าง 1/3 เพิ่ม <b>outer longitudinal</b> ${S.d}${S.j}</li>
 <li><b>Adventitia</b> + ไขมัน หลอดเลือด เส้นประสาท ไม่มี serosa (retroperitoneal) ${S.d}</li></ul>
 <h3>หน้าที่</h3><ul><li>ดันปัสสาวะด้วย <b>peristalsis</b> · ผ่านผนัง bladder <b>เฉียง</b> → เป็นวาล์วกันไหลย้อน ${S.j}</li></ul>
 <div class="pearl">สลับ <b>Upper 2/3 / Lower 1/3</b> ดูชั้นกล้ามเนื้อที่เพิ่มขึ้น</div>`});

/* 15 · bladder */
SEC.push({id:"bladder",k:"Lower tract",t:"Bladder wall",leg:["eo","ct","sm"],tools:[["fill",[["empty","Empty"],["full","Full"]]]],
draw(){let b="";const full=ST.fill==="full";
 b+=`<rect class="lumc" x="0" y="0" width="640" height="520"/>`;
 // mucosa folds
 const top=full?90:60;b+=ctFill(20,top+40,600,120,6,.8);
  b+=uroth(20,620,top+40,0,full,5,.55);
 // detrusor 3 layers of bundles
 const y0=top+165;b+=ctFill(20,y0,600,260,8,.4);
 const rr=RNG(9);for(let L=0;L<3;L++)for(let i=0;i<5;i++){const x=30+i*118+rr()*20,y=y0+10+L*82,w=90+rr()*20,h=60;b+=muscle(x,y,w,h,L===1?"cross":"long",L*10+i)}
 b+=`<rect class="meso" x="20" y="${y0+256}" width="600" height="10"/>`;
 if(ST.labels){b+=T(626,top-10,full?"Mucosa เรียบ":"Mucosal folds (rugae)",{a:"end",c:"s"})+T(626,top+100,"Lamina propria",{a:"end",c:"s"})+
  T(626,y0+40,"Inner longitudinal",{a:"end",c:"s"})+T(626,y0+122,"Middle circular",{a:"end",c:"s"})+T(626,y0+204,"Outer longitudinal",{a:"end",c:"s"})+
  T(320,y0-6,"Detrusor muscle (3 ชั้น)",{c:"b"})+T(626,y0+254,"Serosa (dome) / adventitia",{a:"end",c:"s"})}
 return svg(b)},
notes:()=>`<h3>ชั้นของผนัง</h3><ul>
 <li><b>Mucosa</b>: urothelium (ว่าง ~6 ชั้น หนากว่าใน ureter) + lamina propria กว้าง หลอดเลือดมาก ${S.d}${S.j}</li>
 <li><b>Detrusor</b>: กล้ามเรียบ 3 ชั้น (inner long – middle circular – outer long) แยกไม่ค่อยชัด ยกเว้นที่ <b>bladder neck</b> ${S.j}${S.d}</li>
 <li><b>Serosa</b> คลุมผิวบน (dome) · ที่เหลือเป็น <b>adventitia</b> ${S.d}${S.j}</li></ul>
 <h3>ตัวเลข</h3><ul><li>จุได้ 400–600 mL · เริ่มปวดที่ 150–200 mL ${S.j}</li></ul>
 <div class="pearl"><b>Clinical:</b> cystitis (UTI, catheter, radiation) · chronic → metaplasia/hyperplasia · มะเร็งส่วนใหญ่เป็น <b>urothelial (transitional cell) carcinoma</b> ${S.j}</div>`});

/* 16 · urethra */
SEC.push({id:"urethra",k:"Lower tract",t:"Urethra",
draw(){let b="";
 const seg=[["Prostatic","Urothelium","3–4 cm",["uro"]],["Membranous","Strat./pseudostrat. columnar","สั้น ผ่าน ext. sphincter",["col"]],["Spongy (penile)","Strat./pseudostrat. columnar","~15 cm",["col"]],["Navicular fossa","Strat. squamous","ปลายสุด",["sq"]]];
 seg.forEach(([n,e,l,c],i)=>{const x=20+i*155,y=60;b+=`<rect class="box" x="${x}" y="${y}" width="140" height="290" rx="12"/>`;
  const by=y+230;if(c[0]==="uro")b+=uroth(x+10,x+130,by,0,false,i+3,.5);
  else if(c[0]==="col"){b+=`<rect class="eo2" x="${x+10}" y="${by-60}" width="120" height="60"/>`;for(let xx=x+16;xx<x+128;xx+=10){b+=NU(xx,by-8,2.6,2.6,0)+NU(xx+4,by-26,2.6,4,0)}for(let xx=x+12;xx<x+128;xx+=10)b+=`<line class="cb" x1="${xx}" y1="${by-60}" x2="${xx}" y2="${by-36}"/>`}
  else{b+=`<rect class="eo3" x="${x+10}" y="${by-70}" width="120" height="70"/>`;for(let L=0;L<6;L++)for(let xx=x+16+(L%2)*5;xx<x+128;xx+=12)b+=NU(xx,by-6-L*11,L>3?5:2.8,L>3?1.4:2.8,0)}
  b+=`<line class="bml" x1="${x+10}" y1="${by}" x2="${x+130}" y2="${by}"/>`+ctFill(x+10,by,120,40,i+2,.6);
  if(ST.labels)b+=T(x+70,y+26,n,{c:"b"})+T(x+70,y+44,l,{c:"s"})+TL(x+70,y+66,e.split(" ").reduce((a,w)=>{const L=a[a.length-1];if(L&&L.length+w.length<18)a[a.length-1]=L+" "+w;else a.push(w);return a},[]),{c:"s"})});
 b+=`<path class="arw" d="M40,400 L600,400"/>`;
 if(ST.labels)b+=T(320,428,"ชาย: bladder → ปลาย",{c:"s"})+T(320,470,"หญิง 3–5 cm: urothelium → non-keratinized strat. squamous · มี ext. sphincter ช่วงกลาง",{c:"s"});
 return svg(b)},
notes:()=>`<h3>ชาย (3 ส่วน)</h3><ul>
 <li><b>Prostatic</b> 3–4 cm: urothelium · มี ejaculatory ducts มาเปิด ${S.j}</li>
 <li><b>Membranous</b>: สั้น ผ่าน external sphincter (striated) · stratified/pseudostratified columnar ${S.j}</li>
 <li><b>Spongy</b> ~15 cm ใน corpus spongiosum · stratified/pseudostratified columnar → ปลายเป็น stratified squamous ${S.j}</li></ul>
 <h3>หญิง</h3><ul><li>3–5 cm · urothelium → non-keratinized stratified squamous ต่อกับผิวที่ labia minora ${S.j}</li><li>Mucosa พับตามยาว ${S.j}</li></ul>
 <div class="pearl">urethra สั้นในผู้หญิง → UTI ขึ้นไป bladder ง่าย ${S.j}</div>`});

/* 17 · clinical */
SEC.push({id:"clinical",k:"Clinical",t:"Histology in disease",tools:[["zone",[["pyelo","Pyelonephritis"],["dm","Diabetic"],["pkd","PKD"]]]],leg:["eo","pale","rbc"],
draw(){let b="";const z=["pyelo","dm","pkd"].includes(ST.zone)?ST.zone:"pyelo";
 b+=`<rect class="bgt" x="0" y="0" width="640" height="520"/>`;
 if(z==="pyelo"){[[160,180,70],[420,160,76],[300,380,74],[560,380,60]].forEach(([x,y,r],i)=>b+=tube(x,y,r,"cd",{seed:i+3,pmn:9}));
  const rr=RNG(4);for(let i=0;i<40;i++){const x=rr()*640,y=rr()*520;b+=`<g class="pmn" transform="translate(${f1(x)} ${f1(y)})"><circle r="4" class="pmnc"/><circle cx="-1.4" cy="-.6" r="1.3" class="nu"/><circle cx="1.4" cy="-.8" r="1.2" class="nu"/><circle cx=".2" cy="1.4" r="1.2" class="nu"/></g>`}
  if(ST.labels)b+=TL(14,40,["Neutrophils ใน collecting ducts","= WBC cast"],{a:"start",c:"b"})+TL(626,500,["Interstitial inflammation"],{a:"end",c:"s"})}
 if(z==="dm"){b+=corp(320,270,190,{va:-90,loops:15,seed:8});b+=`<circle class="kw" cx="250" cy="250" r="30"/><circle class="kw" cx="380" cy="300" r="26"/><circle class="kw" cx="320" cy="200" r="22"/>`;
  b+=`<path class="hya" d="M300,60 L340,60 L346,90 L294,90Z"/>`;
  if(ST.labels)b+=TL(14,40,["Kimmelstiel–Wilson nodules","(nodular glomerulosclerosis)"],{a:"start",c:"b"})+LD(230,236,120,56)+TL(626,40,["Hyaline arteriolosclerosis","afferent + efferent"],{a:"end",c:"s"})+LD(344,74,520,48)+TL(14,480,["GBM หนาขึ้น → proteinuria"],{a:"start",c:"s"})}
 if(z==="pkd"){[[200,200,140],[470,180,110],[420,420,90],[130,430,70]].forEach(([x,y,r])=>b+=`<circle class="bmc" cx="${x}" cy="${y}" r="${r+2}"/><circle class="cyst" cx="${x}" cy="${y}" r="${r}"/>`+[...Array(14)].map((_,i)=>{const a=i/14*TAU;return NU(x+Math.cos(a)*(r-2),y+Math.sin(a)*(r-2),5,1.6,a*57+90)}).join(""));
  b+=tube(600,330,26,"pct",{seed:2})+tube(300,470,24,"pct",{seed:4});
  if(ST.labels)b+=TL(14,40,["Cysts บุด้วย flattened epithelium","เนื้อไตปกติถูกเบียด"],{a:"start",c:"b"})}
 return svg(b)},
notes:()=>`<h3>เลือกดูทีละโรค</h3><ul>
 <li><b>Acute pyelonephritis</b>: เชื้อขึ้นจาก calyx เข้า papilla → <b>neutrophils ใน collecting ducts</b> และ interstitium → WBC cast ${S.j}</li>
 <li><b>Diabetic nephropathy</b>: GBM หนา (สาเหตุ ESRD อันดับ 1) · mesangial expansion → <b>Kimmelstiel–Wilson nodules</b> · hyaline arteriolosclerosis ทั้ง afferent และ efferent ${S.j}${S.x}</li>
 <li><b>Polycystic kidney</b>: ซีสต์จำนวนมากจากเซลล์ส่วนใดของ nephron ก็ได้ ไตโต ทำงานเสีย ${S.j}</li></ul>
 <h3>อื่นๆ ที่ผูกกับ histology</h3><ul>
 <li><b>Alport</b> (COL4A5): GBM บางหนาสลับ แตกเป็นชั้น + หูหนวก ตา ${S.j}</li>
 <li><b>Randall plaque</b> (จุดเริ่มนิ่ว Ca oxalate) อยู่ที่ basement membrane ของ <b>thin limbs</b> ${S.j}</li>
 <li><b>Sickle cell</b>: papillary necrosis จาก vasa recta ${S.j}</li>
 <li>Proteinuria จาก filter เสีย (DM, GN) · ATN ทำลาย PCT ที่ใช้ O₂ มาก ${S.j}${S.x}</li></ul>`});

/* order follows Junqueira Ch 19: kidney → blood circulation → renal corpuscle → PCT → loop → DCT & JGA → collecting ducts → ureters, bladder, urethra */
SEC.forEach(s=>{if(s.id==="jga")s.k="Tubules"});
{const ORD=["lowpower","nephron","vessels","corpuscle","barrier","mesangium","pctdct","pctem","medulla","jga","cd","slideid","urothelium","ureter","bladder","urethra","clinical"];SEC.sort((a,b)=>ORD.indexOf(a.id)-ORD.indexOf(b.id))}

/* ================= render: one chapter = one continuous page ================= */
const $=s=>document.querySelector(s);
const SEENKEY="sb-histo-seen",FIGDIR="img/";
let cur=SEC[0],GRP=null,OBS=null;
let SEEN={},OPEN={};try{SEEN=JSON.parse(localStorage.getItem(SEENKEY)||"{}")}catch(e){}
const GROUPS=[...new Set(SEC.map(s=>s.k))];
const gOf=s=>GROUPS.indexOf(s.k);
function tocHTML(withHead){const n=Object.keys(SEEN).filter(k=>SEC.some(s=>s.id===k)).length;
 const subs=[...document.querySelectorAll(`#notes-${cur.id} h3`)].map(h=>[h.id,h.textContent]);
 return (withHead?`<div class="dh2"><b>สารบัญ</b><button type="button" id="dclose" aria-label="Close">✕</button></div>`:"")+
 `<div class="prog"><i><b style="width:${n/SEC.length*100}%"></b></i>${n}/${SEC.length} หัวข้อ</div>`+
 GROUPS.map(gk=>{const list=SEC.filter(s=>s.k===gk),open=OPEN[gk]??(gk===cur.k);
  return `<div class="g" data-open="${open}"><button class="gh" type="button" data-g="${gk}"><span class="cv">▶</span>${GN[gk]||gk}<span class="n">${list.filter(s=>SEEN[s.id]).length}/${list.length}</span></button>
  <ul>${list.map(s=>`<li><a href="#${s.id}" data-id="${s.id}" aria-current="${s===cur}"><span class="ck${SEEN[s.id]?" on":""}">✓</span>${s.t}</a>${s===cur&&subs.length>1?`<ol>${subs.map(([id,tx])=>`<li><a href="#${s.id}" data-sub="${id}">${tx}</a></li>`).join("")}</ol>`:""}</li>`).join("")}</ul></div>`}).join("")}
function wireToc(root){root.querySelectorAll("[data-g]").forEach(b=>b.onclick=()=>{const g=b.dataset.g,el=b.parentElement;OPEN[g]=el.dataset.open!=="true";el.dataset.open=OPEN[g]});
 root.querySelectorAll("a[data-id]").forEach(a=>a.onclick=e=>{e.preventDefault();closeDrawer();go(a.dataset.id,true,true)});
 root.querySelectorAll("a[data-sub]").forEach(a=>a.onclick=e=>{e.preventDefault();closeDrawer();const h=document.getElementById(a.dataset.sub);if(h)h.scrollIntoView({behavior:"smooth",block:"start"})});
 const c=root.querySelector("#dclose");if(c)c.onclick=closeDrawer}
function chips(){$("#side").innerHTML=tocHTML(false);wireToc($("#side"));
 const i=SEC.indexOf(cur),list=SEC.filter(s=>s.k===cur.k);$("#mgrp").textContent=`${GN[cur.k]||cur.k} · ${list.indexOf(cur)+1}/${list.length}`;$("#mtop").textContent=cur.t;$("#mprev").disabled=i===0;$("#mnext").disabled=i===SEC.length-1;
 const a=$("#side").querySelector('[aria-current="true"]');if(a){const r=a.getBoundingClientRect(),sr=$("#side").getBoundingClientRect();if(r.top<sr.top||r.bottom>sr.bottom)a.scrollIntoView({block:"nearest"})}}
function openDrawer(){$("#dpane").innerHTML=tocHTML(true);wireToc($("#dpane"));$("#drawer").hidden=false;const a=$("#dpane").querySelector('[aria-current="true"]');if(a)a.scrollIntoView({block:"center"})}
function closeDrawer(){$("#drawer").hidden=true}
$("#mopen").onclick=openDrawer;$("#ddim").onclick=closeDrawer;
$("#mprev").onclick=()=>{const i=SEC.indexOf(cur);if(i>0)go(SEC[i-1].id,true,true)};$("#mnext").onclick=()=>{const i=SEC.indexOf(cur);if(i<SEC.length-1)go(SEC[i+1].id,true,true)};
function fixTools(s){(s.tools||[]).forEach(([k,o])=>{if(Array.isArray(o)&&!o.some(v=>v[0]===ST[k]))ST[k]=o[0][0]})}
function tools(s){const el=document.getElementById("tools-"+s.id);if(!el)return;const tl=[["labels","Labels"]].concat((s.tools||[]).filter(t=>!Array.isArray(t[1])));
 let h=tl.map(([k,l])=>`<button class="sb-chip" type="button" data-t="${k}" aria-pressed="${!!ST[k]}">${l}</button>`).join("");
 (s.tools||[]).filter(t=>Array.isArray(t[1])).forEach(([k,opts])=>{h+=`<span class="segc">`+opts.map(([v,l])=>`<button class="sb-chip" type="button" data-s="${k}" data-v="${v}" aria-pressed="${ST[k]===v}">${l}</button>`).join("")+`</span>`});
 el.innerHTML=h;const prev=cur;cur=s;if(s.ctrl){el.insertAdjacentHTML("beforeend",s.ctrl());if(s.wire)s.wire()}cur=prev;
 el.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>{ST[b.dataset.t]=!ST[b.dataset.t];SEC.filter(x=>x.k===s.k).forEach(draw)});
 el.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{ST[b.dataset.s]=b.dataset.v;draw(s)})}
function draw(s){const prev=cur;cur=s;const d=document.getElementById("dia-"+s.id);if(d)d.innerHTML=s.draw();tools(s);
 const lg=document.getElementById("legend-"+s.id);if(lg)lg.innerHTML=(s.leg||[]).map(k=>LEG[k]?`<span><i style="background:var(${LEG[k][1]})"></i>${LEG[k][0]}</span>`:"").join("");cur=prev}

/* Helpers shared by the gastrointestinal pathology atlases (gi-patho-1/2/3).
   Needs _cvs-patho-helpers.js + _endo-patho-helpers.js first (CV, HE, TD, Ar, tag, cardA, iPanel, tree, lv, slide, rng, dot, axes, curve, sl, wireSl …).
   Original schematic drawings: gut wall layers, esophagus + stomach, colon frame, villi tile, liver lobule, hepatobiliary tree. */
const GI={muc:"#E7A1B2",mucD:"#B85C78",sq:"#F3D3CC",sqD:"#C99A92",col:"#D2566F",sub:"#F6E3D6",mus:"#C7746A",musD:"#9A4E46",ser:"#F2DCC0",lum:"#FFF7EF",
 bile:"#86A83A",bileD:"#5A7A1E",liv:"#A8503F",livL:"#C9735C",livD:"#7A3528",gb:"#9CC25A",panc:"#EDCB9E",pancD:"#B98F5C",duo:"#E9B8A6",
 blood:"#B3263B",vein:"#3E6FB0",art:"#C8423A",stone:"#D7BE7A",stoneD:"#8C7432",tumor:"#7D5BA6",tumD:"#4E3570",fat:"#F7E7A6",gran:"#E9B949",ink:"#3B2D4A"};
/* white label with soft outline, for text drawn on organs */
/* Labels toggle: anatomical name labels are hidden when ST.labels is off */
const LB=s=>ST.labels?s:"";
const TW=(x,y,s,o={})=>`<text x="${x}" y="${y}" text-anchor="${o.a||"middle"}" style="font:${o.w||800} ${o.s||11}px var(--sb-font);fill:#fff;paint-order:stroke;stroke:rgba(40,20,30,.45);stroke-width:2.6px">${s}</text>`;
const ring=(x,y,r,c=CV.acc)=>`<circle cx="${x}" cy="${y}" r="${r}" style="fill:none;stroke:${c};stroke-width:2.4;stroke-dasharray:5 4"/>`;
/* pill row that wraps inside width w; items [[text,colour]] */
function tagRow(x,y,w,items){let tx=x,ty=y,b="";items.forEach(([t,c])=>{const tw=t.length*6.1+22;if(tx+tw>x+w){tx=x;ty+=26}b+=tag(tx+tw/2,ty,t,c,{w:tw});tx+=tw+6});return b}

/* ================= gut wall cross-section (layers) =================
   x,y,w,h ; o={sq:true (squamous lining), lesion:{x0,x1,depth:"mucosa"|"sub"|"mus"|"through",kind:"ulcer"|"tear"|"tumor"|"inflam"}, varix:[x..], div:{x,kind:"true"|"false"},
   gran:[[x,y]], cells:"goblet", lab:true} depth bands: mucosa 0–.26, submucosa .26–.48, muscularis .48–.86, serosa .86–1 */
function wallX(x,y,w,h,o={}){const Y=f=>y+f*h,r=rng(o.seed||5);let b=`<clipPath id="wx${o.id||0}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10"/></clipPath><g clip-path="url(#wx${o.id||0})">`;
 b+=`<rect x="${x}" y="${y-6}" width="${w}" height="${h+12}" style="fill:${GI.lum}"/>`;
 const band=(f0,f1,c)=>`<rect x="${x}" y="${Y(f0)}" width="${w}" height="${Y(f1)-Y(f0)}" style="fill:${c}"/>`;
 b+=band(.1,.3,o.sq?GI.sq:GI.muc)+band(.3,.5,GI.sub)+band(.5,.62,GI.mus)+band(.62,.64,"#B8665E")+band(.64,.86,GI.mus)+band(.86,1.02,GI.ser);
 /* surface texture */
 if(o.sq){for(let i=0;i<w/9;i++)b+=`<ellipse cx="${x+4+i*9}" cy="${Y(.13)+r()*h*.13}" rx="3.4" ry="1.2" style="fill:${GI.sqD};opacity:.55"/>`}
 else for(let gx=x+6;gx<x+w;gx+=14)b+=`<path d="M${gx},${Y(.1)} v${h*.16}" style="stroke:${GI.mucD};stroke-width:2.2;stroke-linecap:round;opacity:.55"/>`;
 for(let gx=x+10;gx<x+w;gx+=22)b+=`<path d="M${gx},${Y(.66)} h12 M${gx+6},${Y(.74)} h12 M${gx},${Y(.82)} h12" style="stroke:${GI.musD};stroke-width:1.4;opacity:.5"/>`;
 for(let gx=x+8;gx<x+w;gx+=26)b+=`<circle cx="${gx}" cy="${Y(.555)}" r="2.4" style="fill:#F4E3B6;stroke:${GI.musD};stroke-width:.6"/>`;
 (o.varix||[]).forEach(vx=>b+=`<ellipse cx="${vx}" cy="${Y(.33)}" rx="${w*.07}" ry="${h*.1}" style="fill:${GI.vein};stroke:#23467A;stroke-width:1.4"/>`+`<ellipse cx="${vx-w*.02}" cy="${Y(.3)}" rx="${w*.025}" ry="${h*.03}" style="fill:#fff;opacity:.3"/>`);
 if(o.div){const dx=o.div.x,fl=o.div.kind==="false";const top=Y(.1),bot=Y(1.02);
  b+=`<path d="M${dx-26},${top} C${dx-26},${bot-10} ${dx+26},${bot-10} ${dx+26},${top}Z" style="fill:${GI.lum}"/>`;
  b+=`<path d="M${dx-26},${top} C${dx-26},${bot-10} ${dx+26},${bot-10} ${dx+26},${top}" style="fill:none;stroke:${GI.muc};stroke-width:7"/>`+`<path d="M${dx-32},${top} C${dx-32},${bot} ${dx+32},${bot} ${dx+32},${top}" style="fill:none;stroke:${GI.sub};stroke-width:5"/>`;
  if(!fl)b+=`<path d="M${dx-37},${top+h*.38} C${dx-37},${bot+4} ${dx+37},${bot+4} ${dx+37},${top+h*.38}" style="fill:none;stroke:${GI.mus};stroke-width:8"/>`;
  else b+=`<rect x="${dx-38}" y="${Y(.5)}" width="76" height="${Y(.86)-Y(.5)}" style="fill:${GI.lum};opacity:.0"/>`}
 const L=o.lesion;if(L){const dep={mucosa:.27,sub:.47,mus:.84,through:1.05}[L.depth],x0=L.x0,x1=L.x1,mx=(x0+x1)/2;
  if(L.kind==="tumor"){b+=`<path d="${sm([[x0,Y(.08)],[mx,Y(.0)],[x1,Y(.08)],[x1-6,Y(dep)],[mx,Y(dep)+6],[x0+6,Y(dep)]])}" style="fill:${GI.tumor};stroke:${GI.tumD};stroke-width:1.4;opacity:.92"/>`;for(let i=0;i<10;i++)b+=dot(x0+8+r()*(x1-x0-16),Y(.1)+r()*(Y(dep)-Y(.12)),2,"#C9B6E6")}
  else if(L.kind==="inflam"){b+=`<rect x="${x0}" y="${Y(.08)}" width="${x1-x0}" height="${Y(dep)-Y(.08)}" style="fill:${CV.bad};opacity:.18"/>`;for(let i=0;i<40;i++)b+=dot(x0+r()*(x1-x0),Y(.1)+r()*(Y(dep)-Y(.1)),1.7,HE.nuD)}
  else{const narrow=L.kind==="tear";b+=`<path d="M${x0},${Y(.08)} L${narrow?mx-3:x0+10},${Y(dep)} ${narrow?"":`Q${mx},${Y(dep)+8} ${x1-10},${Y(dep)}`} L${narrow?mx+3:x1-10},${Y(dep)} L${x1},${Y(.08)}Z" style="fill:${GI.lum};stroke:${L.depth==="through"?CV.bad:"#8E3B4C"};stroke-width:1.6"/>`;
   if(!narrow&&L.depth!=="mucosa")b+=`<path d="M${x0+10},${Y(dep)} Q${mx},${Y(dep)+8} ${x1-10},${Y(dep)}" style="fill:none;stroke:#C24A5A;stroke-width:4;opacity:.6"/>`;
   if(L.blood){const D=Y(dep)-y;b+=`<path d="M${mx-4},${Y(dep)} q-6,${-D*.35} 2,${-D*.6} q8,${-D*.2} 0,${-D*.38}" style="fill:none;stroke:${GI.blood};stroke-width:3.4;stroke-linecap:round"/>`}}}
 (o.gran||[]).forEach(([gx,gy])=>{b+=`<circle cx="${gx}" cy="${gy}" r="8" style="fill:#F2D6E2;stroke:${HE.mem};stroke-width:1.2"/>`;for(let i=0;i<6;i++){const a=i/6*6.28;b+=dot(gx+Math.cos(a)*5,gy+Math.sin(a)*5,1.4,HE.nu)}});
 b+=`</g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:none;stroke:var(--sb-line);stroke-width:1.2"/>`;
 if(o.lab!==false&&ST.labels){const lx=x+w+6,ls=[["mucosa",.2],["submucosa",.4],["muscularis",.74],["serosa",.93]];ls.forEach(([t,f])=>b+=T(lx,Y(f)+4,t,{a:"start",c:"s m"}))}
 return b}

/* ================= esophagus + stomach + duodenal bulb =================
   local box 0..300 × 0..340 ; o={dil:"achalasia"|"sclero", reg:{upper,mid,lower}:colour, barrett:true, varix:true, tear:true, eTum:"upper|mid|lower", gReg:{fundus,body,antrum}:colour,
   rugae:"giant"|"flat", ulcers:[[x,y,r,"c"]], gTum:"antrum"|"diffuse", nodes:true (Virchow etc. drawn by caller), hl:[[x,y,r]]} */
const EPOS={upper:[118,26],mid:[121,78],lower:[126,126],gej:[131,150],fundus:[206,136],body:[220,200],antrum:[128,284],lesser:[156,236],greater:[240,250],duo:[46,296],pylorus:[74,284]};
function esoStom(x,y,s,o={}){let b=`<g transform="translate(${x},${y}) scale(${s})">`;const r=rng(11);
 /* esophagus centreline + width profile */
 const cl=t=>[112+16*t,0+150*t],ach=t=>24+46*Math.sin(Math.PI/2*Math.min(1,Math.max(0,(t-.08)/.62))),wf=t=>{if(o.dil==="achalasia")return t<.86?ach(t):ach(.86)+(6-ach(.86))*(t-.86)/.14;if(o.dil==="sclero")return 30+(t>.8?6:0);return 24};
 const L=[],Rr=[];for(let i=0;i<=30;i++){const t=i/30,[cx,cy]=cl(t),w=wf(t)/2;L.push([cx-w,cy]);Rr.push([cx+w,cy])}
 const eso=sm(L.filter((_,i)=>i%3===0||i===30).concat(Rr.reverse().filter((_,i)=>i%3===0||i===30)));
 /* stomach */
 const st=[[124,148],[148,118],[196,102],[240,122],[256,166],[256,218],[236,268],[194,300],[140,312],[96,302],[72,290],[66,276],[86,264],[122,262],[152,246],[166,210],[156,170],[138,152]];
 const sp=sm(st);b+=`<defs><clipPath id="cst${o.id||0}"><path d="${sp}"/></clipPath></defs>`;
 b+=`<path d="${sp}" style="fill:${GI.muc};stroke:${GI.mucD};stroke-width:1.8"/>`;
 b+=`<g clip-path="url(#cst${o.id||0})">`;
 if(o.gReg){const rg={fundus:[[130,90],[260,90],[260,150],[130,150]],body:[[130,150],[270,150],[270,262],[160,262],[160,150]],antrum:[[40,252],[170,252],[200,330],[40,330]]};Object.entries(o.gReg).forEach(([k,c])=>b+=`<path d="M${rg[k].map(p=>p.join(",")).join(" L")}Z" style="fill:${c};opacity:.55"/>`)}
 const rug=o.rugae==="giant"?{n:9,a:9,w:5}:o.rugae==="flat"?{n:0}:{n:7,a:4,w:2.2};
 for(let i=0;i<rug.n;i++){const yy=150+i*20;let d=`M150,${yy}`;for(let xx=150;xx<=262;xx+=14)d+=` Q${xx+7},${yy+(i%2?rug.a:-rug.a)} ${xx+14},${yy}`;b+=`<path d="${d}" transform="rotate(${18+i*4} 200 ${yy})" style="fill:none;stroke:${GI.mucD};stroke-width:${rug.w};opacity:.55;stroke-linecap:round"/>`}
 if(o.gTum==="diffuse")b+=`<path d="${sp}" style="fill:#EDE3EF;opacity:.55"/>`+`<path d="${sp}" style="fill:none;stroke:${GI.tumor};stroke-width:16;opacity:.55"/>`;
 b+=`</g>`;
 if(o.gTum==="diffuse")b+=`<path d="${sp}" style="fill:none;stroke:${GI.tumD};stroke-width:2.2"/>`;
 if(o.gTum==="antrum")b+=`<path d="${sm([[100,272],[118,258],[146,262],[156,282],[140,300],[110,298]])}" style="fill:${GI.tumor};stroke:${GI.tumD};stroke-width:1.4"/>`+`<ellipse cx="128" cy="280" rx="12" ry="7" style="fill:#3A2350;opacity:.7"/>`;
 let eb="";
 eb+=`<path d="${eso}" style="fill:${GI.sq};stroke:${GI.sqD};stroke-width:1.6"/>`;
 if(o.dil==="achalasia")eb+=`<path d="${eso}" style="fill:#EBD9B2;opacity:.45"/>`+TD(126,84,"food + fluid",{s:10,c:"#6B5A2E"})+`<path d="M124,146 h12" style="stroke:${CV.violet};stroke-width:6;stroke-linecap:round"/>`+TD(146,162,"bird's beak",{s:9.5,a:"start",c:"#4E3570"});
 if(o.reg)Object.entries(o.reg).forEach(([k,c])=>{const t0={upper:0,mid:1/3,lower:2/3}[k];const pts=[];for(let i=0;i<=10;i++){const t=t0+i/30,[cx,cy]=cl(t);pts.push([cx-wf(t)/2-3,cy])}for(let i=10;i>=0;i--){const t=t0+i/30,[cx,cy]=cl(t);pts.push([cx+wf(t)/2+3,cy])}eb+=`<path d="M${pts.map(p=>p.join(",")).join(" L")}Z" style="fill:${c};opacity:.45"/>`});
 if(o.barrett)[[120,108,7,26],[129,118,6,30],[136,112,5,36]].forEach(([bx,by,bw,bh])=>eb+=`<path d="M${bx-bw},${150} C${bx-bw},${by+10} ${bx-2},${by} ${bx},${by} C${bx+2},${by} ${bx+bw},${by+10} ${bx+bw},150Z" style="fill:${GI.col};opacity:.9"/>`);
 if(o.varix)for(let i=0;i<4;i++){const xx=118+i*6;eb+=`<path d="M${xx},92 q-5,10 0,18 q5,8 0,16 q-5,9 1,18 q6,6 4,16" style="fill:none;stroke:${GI.vein};stroke-width:4.4;stroke-linecap:round;opacity:.9"/>`}
 if(o.tear)eb+=`<path d="M128,138 q2,10 1,24 M134,140 q1,8 2,20" style="fill:none;stroke:${GI.blood};stroke-width:3;stroke-linecap:round"/>`;
 if(o.eTum){const [ex,ey]=EPOS[o.eTum];eb+=`<path d="${sm([[ex-16,ey-14],[ex,ey-20],[ex+16,ey-12],[ex+17,ey+12],[ex,ey+20],[ex-15,ey+12]])}" style="fill:${GI.tumor};stroke:${GI.tumD};stroke-width:1.4;opacity:.92"/>`}
 b+=eb;
 /* duodenum */
 b+=`<path d="M70,282 C52,280 40,290 36,306 C32,320 34,334 40,342" style="fill:none;stroke:${GI.mucD};stroke-width:26;stroke-linecap:round"/><path d="M70,282 C52,280 40,290 36,306 C32,320 34,334 40,342" style="fill:none;stroke:${GI.duo};stroke-width:22.5;stroke-linecap:round"/>`;
 b+=`<path d="M68,268 L68,296" style="stroke:${GI.musD};stroke-width:4;stroke-linecap:round"/>`;
 (o.ulcers||[]).forEach(([ux,uy,ur,c])=>b+=`<circle cx="${ux}" cy="${uy}" r="${ur}" style="fill:${c||"#F7EFE6"};stroke:#8E3B4C;stroke-width:1.8"/>`+`<circle cx="${ux}" cy="${uy}" r="${ur*.45}" style="fill:${c?"#fff":"#E5C9A8"};opacity:.6"/>`);
 (o.hl||[]).forEach(([hx,hy,hr])=>b+=ring(hx,hy,hr));
 if(o.lab!==false&&ST.labels)b+=TD(o.dil==="achalasia"?160:142,40,"esophagus",{s:10.5,a:"start"})+TD(214,180,"stomach",{s:11,c:"#fff",w:800})+TD(10,330,"duodenum",{s:10,a:"start"});
 return b+`</g>`}

/* ================= colon frame + small bowel =================
   local 0..320 × 0..310 ; o={seg:{key:colour}, skip:true, dots:[[x,y,c]], ring:[[x,y,r]], twist:"sig"|"cecum", app:colour, sb:colour, lab:true}
   keys: ti, cecum, asc, hep, trans, spl, desc, sig, rect, app */
const CSEG={ti:[[150,218],[110,220],[76,220]],cecum:[[64,252],[64,222],[64,200]],asc:[[64,200],[64,140],[64,84]],hep:[[64,84],[70,64],[92,58]],trans:[[92,58],[160,82],[236,56]],spl:[[236,56],[262,44],[270,64]],desc:[[270,64],[270,140],[270,204]],sig:[[270,204],[262,240],[226,236],[200,252],[186,258]],rect:[[186,258],[176,276],[172,302]],app:[[58,252],[52,272],[60,290]]};
function pathOf(k){const p=CSEG[k];if(p.length===3)return `M${p[0]} Q${p[1]} ${p[2]}`;if(p.length===4)return `M${p[0]} C${p[1]} ${p[2]} ${p[3]}`;return `M${p[0]} C${p[1]} ${p[2]} ${p[3]} L${p[4]}`}
/* point at fraction u (0..1) along a colon segment (same curves as pathOf) */
function segPt(k,u){const p=CSEG[k],L=(a,b,t)=>[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t];
 if(p.length===3){const a=L(p[0],p[1],u),b=L(p[1],p[2],u);return L(a,b,u)}
 const cub=(q,t)=>{const a=L(q[0],q[1],t),b=L(q[1],q[2],t),c=L(q[2],q[3],t),d=L(a,b,t),e=L(b,c,t);return L(d,e,t)};
 if(p.length===4)return cub(p,u);return u<.8?cub(p.slice(0,4),u/.8):L(p[3],p[4],(u-.8)/.2)}
/* n scattered polyp dots along the listed segments */
function polypDots(keys,n,c,seed=3,r0=3.4){const r=rng(seed),out=[];for(let i=0;i<n;i++){const k=keys[Math.floor(r()*keys.length)],[px,py]=segPt(k,r());out.push([px+(r()-.5)*14,py+(r()-.5)*14,c,r0+r()*1.6])}return out}
function colonMap(x,y,s,o={}){let b=`<g transform="translate(${x},${y}) scale(${s})">`;const seg=o.seg||{};
 /* small bowel coils */
 const sb=`M206,96 C150,92 118,104 122,122 C126,140 212,132 214,150 C216,168 120,160 118,178 C116,196 196,190 196,206 C196,216 170,220 150,218`;
 b+=`<path d="${sb}" style="fill:none;stroke:#C98E86;stroke-width:22;stroke-linecap:round;stroke-linejoin:round"/><path d="${sb}" style="fill:none;stroke:${o.sb||"#F2C2B8"};stroke-width:18.5;stroke-linecap:round;stroke-linejoin:round"/>`;
 if(o.sbSkip)o.sbSkip.forEach(([sx,sy])=>b+=`<ellipse cx="${sx}" cy="${sy}" rx="14" ry="10" style="fill:${o.sbSkipC||CV.bad};opacity:.75"/>`);
 const keys=["ti","cecum","asc","hep","trans","spl","desc","sig","rect","app"];
 (o.wide||[]).forEach(k=>b+=`<path d="${pathOf(k)}" style="fill:none;stroke:#9C6A50;stroke-width:42;stroke-linecap:round"/><path d="${pathOf(k)}" style="fill:none;stroke:#EBC9A2;stroke-width:38;stroke-linecap:round"/>`);
 keys.forEach(k=>{const d=pathOf(k),w=(o.narrow||[]).includes(k)?12:k==="app"?7:k==="ti"?18:24;b+=`<path d="${d}" style="fill:none;stroke:#9C6A50;stroke-width:${w+3.5};stroke-linecap:round"/><path d="${d}" style="fill:none;stroke:${k==="ti"?"#F2C2B8":"#EBC9A2"};stroke-width:${w};stroke-linecap:round"/>`});
 /* haustra */
 ["asc","trans","desc"].forEach(k=>b+=`<path d="${pathOf(k)}" style="fill:none;stroke:#C59C78;stroke-width:24;stroke-dasharray:2 13;opacity:.8"/>`);
 keys.forEach(k=>{if(seg[k])b+=`<path d="${pathOf(k)}" style="fill:none;stroke:${seg[k]};stroke-width:${(o.wide||[]).includes(k)?38:(o.narrow||[]).includes(k)?12:k==="app"?7:k==="ti"?18:24};stroke-linecap:round;opacity:.85"/>`});
 if(o.twist){const [tx,ty]=o.twist==="sig"?[236,238]:[64,236];b+=`<path d="M${tx-14},${ty-10} q14,-10 28,0 M${tx-14},${ty+2} q14,10 28,0" style="fill:none;stroke:${CV.bad};stroke-width:3.4;stroke-linecap:round"/>`+`<circle cx="${tx}" cy="${ty-4}" r="22" style="fill:none;stroke:${CV.bad};stroke-width:1.6;stroke-dasharray:4 3"/>`}
 (o.dots||[]).forEach(([dx,dy,c,rr])=>b+=`<circle cx="${dx}" cy="${dy}" r="${rr||4.2}" style="fill:${c||GI.tumor};stroke:#fff;stroke-width:1"/>`);
 (o.ring||[]).forEach(([rx,ry,rr,c])=>b+=ring(rx,ry,rr,c));
 if(o.lab!==false&&ST.labels){const L=(x,y,t,a)=>TD(x,y,t,{s:9.5,a:a||"middle",c:"#6B4A3A"});b+=L(36,150,"ascending","middle").replace("<text",`<text transform="rotate(-90 36 150)"`)+L(160,44,"transverse")+L(298,140,"descending").replace("<text",`<text transform="rotate(90 298 140)"`)+L(244,280,"sigmoid")+L(190,302,"rectum","start")+L(30,268,"cecum")+L(92,302,"appendix")+L(112,246,"terminal ileum")}
 return b+`</g>`}

/* ================= small-bowel mucosa tile (H&E-like) =================
   mode: "normal" | "celiac" | "partial" | "whipple" | "lymph" (abetalipo-like vacuolated) */
function villi(x,y,w,h,mode="normal"){const r=rng({normal:3,celiac:5,partial:7,whipple:9,lymph:11}[mode]||3);let b=`<clipPath id="cv${mode}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12"/></clipPath>`+slide(x,y,w,h)+`<g clip-path="url(#cv${mode})">`;
 const base=y+h*.62,n=Math.floor(w/42),vh={normal:h*.5,partial:h*.26,celiac:0,whipple:h*.32,lymph:h*.48}[mode],vw=mode==="whipple"?30:20;
 b+=`<rect x="${x}" y="${base}" width="${w}" height="${y+h-base}" style="fill:${HE.col}"/>`;
 /* crypts */
 const cd=mode==="celiac"?h*.32:h*.2;for(let i=0;i<n*1.5;i++){const cx=x+14+i*(w/(n*1.5));b+=`<path d="M${cx-6},${base} v${cd} q6,8 12,0 v${-cd}" style="fill:#F6D9E3;stroke:${HE.mem};stroke-width:1"/>`;for(let k=0;k<cd/7;k++){b+=dot(cx-5,base+5+k*7,1.6,HE.nu)+dot(cx+5,base+5+k*7,1.6,HE.nu)}}
 if(mode==="celiac"){b+=`<path d="M${x},${base-8} H${x+w}" style="stroke:${HE.cyX};stroke-width:7"/>`;for(let i=0;i<w/6;i++)b+=`<ellipse cx="${x+3+i*6}" cy="${base-8}" rx="1.4" ry="2.6" style="fill:${HE.nu}"/>`;for(let i=0;i<70;i++)b+=dot(x+r()*w,base-10+r()*8,1.5,HE.nuD);for(let i=0;i<120;i++)b+=dot(x+r()*w,base+4+r()*(h*.32),1.3,HE.nuD)}
 else for(let i=0;i<n;i++){const vx=x+22+i*(w-30)/n,top=base-vh;const d=`M${vx-vw/2},${base} L${vx-vw/2+2},${top+vw/2} Q${vx},${top-4} ${vx+vw/2-2},${top+vw/2} L${vx+vw/2},${base}`;
  b+=`<path d="${d}" style="fill:${HE.col};stroke:${HE.cyX};stroke-width:5.5;stroke-linejoin:round"/>`;
  for(let k=0;k<vh/6;k++){b+=`<ellipse cx="${vx-vw/2+1}" cy="${base-4-k*6}" rx="1.2" ry="2" style="fill:${HE.nu}"/>`+`<ellipse cx="${vx+vw/2-1}" cy="${base-4-k*6}" rx="1.2" ry="2" style="fill:${HE.nu}"/>`}
  if(mode==="normal"||mode==="partial")for(let k=0;k<3;k++)b+=`<ellipse cx="${vx-vw/2+1}" cy="${base-10-k*vh/3.2}" rx="2.4" ry="3.2" style="fill:#fff;stroke:${HE.mem};stroke-width:.5"/>`;
  if(mode==="whipple")for(let k=0;k<5;k++){const mx=vx-6+r()*12,my=base-6-r()*(vh-14);b+=`<circle cx="${mx}" cy="${my}" r="6" style="fill:#E8B8E8;stroke:#B566B5;stroke-width:.8"/>`+dot(mx,my,1.6,HE.nuD)}
  if(mode==="lymph")for(let k=0;k<6;k++)b+=`<circle cx="${vx-4+r()*8}" cy="${base-6-r()*(vh-10)}" r="2.6" style="fill:#fff;opacity:.9"/>`;
  if(mode==="partial")for(let k=0;k<4;k++)b+=dot(vx-4+r()*8,base-6-r()*(vh-10),1.4,HE.nuD)}
 return b+`</g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" style="fill:none;stroke:var(--sb-line);stroke-width:1.2"/>`}

/* ================= liver lobule (hexagon) =================
   o={zone:1|2|3 highlight, fat:"macro"|"micro", cong:true, iron:true, fib:"perisinus"|"bridging", ball:true, chol:true, glob:true (PAS globules), cu:true, lab:true} */
function lobule(cx,cy,R,o={}){const r=rng(o.seed||13);let b="";const P=[...Array(6)].map((_,i)=>[cx+R*Math.cos(i*Math.PI/3),cy+R*Math.sin(i*Math.PI/3)]);
 b+=`<path d="M${P.map(p=>p.join(",")).join(" L")}Z" style="fill:#F2CBBE;stroke:#C98B78;stroke-width:1.4"/>`;
 /* zones */
 const zc=["#E9A893","#F2C2B2","#F7D9CF"];[1,.66,.33].forEach((k,i)=>{const Q=P.map(([px,py])=>[cx+(px-cx)*k,cy+(py-cy)*k]);b+=`<path d="M${Q.map(p=>p.join(",")).join(" L")}Z" style="fill:${zc[i]};opacity:.55"/>`});
 if(o.zone){const k=[1,.66,.33][o.zone-1],k2=[.66,.33,0][o.zone-1],Q=P.map(([px,py])=>[cx+(px-cx)*k,cy+(py-cy)*k]),Q2=P.map(([px,py])=>[cx+(px-cx)*k2,cy+(py-cy)*k2]);
  b+=`<path d="M${Q.map(p=>p.join(",")).join(" L")}Z M${Q2.reverse().map(p=>p.join(",")).join(" L")}Z" style="fill:${o.zc||CV.acc};opacity:.32;fill-rule:evenodd"/>`}
 /* hepatocyte cords radiating */
 for(let i=0;i<36;i++){const a=i/36*6.283;b+=`<path d="M${cx+Math.cos(a)*10},${cy+Math.sin(a)*10} L${cx+Math.cos(a)*R*.86},${cy+Math.sin(a)*R*.86}" style="stroke:#D79A88;stroke-width:1;opacity:.7"/>`}
 if(o.cong){const Q=P.map(([px,py])=>[cx+(px-cx)*.42,cy+(py-cy)*.42]);b+=`<path d="M${Q.map(p=>p.join(",")).join(" L")}Z" style="fill:${GI.blood};opacity:.6"/>`;for(let i=0;i<30;i++){const a=r()*6.28,d=r()*R*.38;b+=dot(cx+Math.cos(a)*d,cy+Math.sin(a)*d,1.8,"#7A1020")}}
 if(o.fat){const big=o.fat==="macro";for(let i=0;i<(big?22:90);i++){const a=r()*6.28,d=R*(big?.25+r()*.6:.15+r()*.7);const fx=cx+Math.cos(a)*d,fy=cy+Math.sin(a)*d;
  b+=`<circle cx="${fx}" cy="${fy}" r="${big?4+r()*3.5:1.6}" style="fill:#FFFDF4;stroke:#D8B8A8;stroke-width:.6"/>`+(big?dot(fx+4,fy+3,1.4,HE.nu):"")}}
 if(o.iron)for(let i=0;i<60;i++){const k=.62+r()*.36,j=Math.floor(r()*6),t=r();const px=P[j][0]+(P[(j+1)%6][0]-P[j][0])*t,py=P[j][1]+(P[(j+1)%6][1]-P[j][1])*t;b+=dot(cx+(px-cx)*k,cy+(py-cy)*k,1.7,"#2D4F9E")}
 if(o.cu)for(let i=0;i<40;i++){const a=r()*6.28,d=R*(.55+r()*.4);b+=dot(cx+Math.cos(a)*d,cy+Math.sin(a)*d,1.5,"#7E8A2A")}
 if(o.glob)for(let i=0;i<18;i++){const a=r()*6.28,d=R*(.6+r()*.32);b+=`<circle cx="${cx+Math.cos(a)*d}" cy="${cy+Math.sin(a)*d}" r="2.8" style="fill:#E04C8E;stroke:#9C1F5A;stroke-width:.6"/>`}
 if(o.ball)for(let i=0;i<7;i++){const a=r()*6.28,d=R*(.12+r()*.3);const bx=cx+Math.cos(a)*d,by=cy+Math.sin(a)*d;b+=`<circle cx="${bx}" cy="${by}" r="6.5" style="fill:#FBEFF3;stroke:#C98B9A;stroke-width:.8"/>`+`<path d="M${bx-3},${by-1} q2,-3 5,0 q-1,3 -4,2" style="fill:none;stroke:#B04A6A;stroke-width:1.4"/>`}
 if(o.chol)for(let i=0;i<10;i++){const a=r()*6.28,d=R*(.1+r()*.35);b+=`<ellipse cx="${cx+Math.cos(a)*d}" cy="${cy+Math.sin(a)*d}" rx="3" ry="1.8" style="fill:${GI.bile}"/>`}
 if(o.fib==="perisinus")for(let i=0;i<18;i++){const a=r()*6.28,d0=R*.12,d1=R*(.35+r()*.3);b+=`<path d="M${cx+Math.cos(a)*d0},${cy+Math.sin(a)*d0} Q${cx+Math.cos(a+.3)*d1*.6},${cy+Math.sin(a+.3)*d1*.6} ${cx+Math.cos(a)*d1},${cy+Math.sin(a)*d1}" style="fill:none;stroke:#3F7FC4;stroke-width:1.4;opacity:.8"/>`}
 if(o.fib==="bridging")P.forEach((p,i)=>{const q=P[(i+2)%6];if(i%2===0)b+=`<path d="M${p[0]},${p[1]} Q${cx},${cy} ${q[0]},${q[1]}" style="fill:none;stroke:#3F7FC4;stroke-width:5;opacity:.65"/>`});
 /* central vein + portal triads */
 b+=`<circle cx="${cx}" cy="${cy}" r="${R*.11}" style="fill:${o.cong?"#7A1020":"#F7E8E2"};stroke:${GI.vein};stroke-width:2"/>`;
 P.forEach(([px,py])=>{b+=`<circle cx="${px}" cy="${py}" r="${R*.17}" style="fill:#F5E6D8;stroke:#C98B78;stroke-width:1"/>`+dot(px-R*.06,py-R*.02,R*.065,GI.vein)+dot(px+R*.07,py-R*.03,R*.038,GI.art)+`<circle cx="${px}" cy="${py+R*.075}" r="${R*.04}" style="fill:${GI.bile};stroke:${GI.bileD};stroke-width:.8"/>`});
 if(o.lab!==false&&ST.labels)b+=TD(cx,cy+R*.11+12,"central v.",{s:9.5})+TD(P[0][0],P[0][1]-R*.2,"portal triad",{s:9.5,a:"end"});
 return b}
/* zone legend under a lobule */
const zoneKey=(x,y)=>["Zone 1 periportal","Zone 2","Zone 3 centrilobular"].map((t,i)=>`<rect x="${x+i*120}" y="${y-9}" width="12" height="12" rx="3" style="fill:${["#E9A893","#F2C2B2","#F7D9CF"][i]}"/>`+T(x+16+i*120,y+1,t,{a:"start",c:"s m"})).join("");

/* ================= hepatobiliary tree + pancreas =================
   local 0..360 × 0..300 ; o={cirr, small, nod:[[x,y,r,c]], stones:[key], mass:key|[x,y,r], dil:true, beads:"in"|"ex"|"both", gbBig, gbWall:"porcelain"|"thick", ductHl:[keys], pancC, pancCalc}
   keys: gb, cystic, chd, cbd, amp, pd, hilum, head, tail */
const HPOS={gb:[112,162],cystic:[140,176],hilum:[168,118],chd:[168,150],cbd:[176,210],amp:[186,248],head:[214,246],body:[268,224],tail:[322,206],pd:[250,236]};
function hepatoB(x,y,s,o={}){let b=`<g transform="translate(${x},${y}) scale(${s})">`;const r=rng(23);
 /* liver */
 const lv=o.small?[[30,70],[90,30],[190,26],[300,40],[340,66],[300,100],[220,128],[150,140],[70,140],[30,112]]:[[10,72],[80,18],[190,10],[300,22],[352,52],[330,98],[240,130],[160,146],[70,150],[16,120]];
 b+=`<path d="${sm(lv)}" style="fill:${o.livC||GI.liv};stroke:${GI.livD};stroke-width:1.8"/>`+`<path d="${sm(lv.map(([px,py])=>[px*.92+14,py*.7+8]))}" style="fill:${GI.livL};opacity:.35"/>`;
 if(o.cirr)for(let i=0;i<46;i++){const px=40+r()*290,py=30+r()*100;if(px<330)b+=`<circle cx="${px}" cy="${py}" r="${5+r()*5}" style="fill:${GI.livL};stroke:#E8D6A8;stroke-width:1.6;opacity:.95"/>`}
 (o.nod||[]).forEach(([nx,ny,nr,c])=>b+=`<circle cx="${nx}" cy="${ny}" r="${nr}" style="fill:${c||"#E8D9B0"};stroke:#7A5B2E;stroke-width:1.4"/>`);
 /* intrahepatic ducts */
 const dW=o.dil?5:2.6,dc=GI.bile,dk=GI.bileD;
 const intra=["M168,118 C150,98 120,84 80,74","M168,118 C190,96 230,80 280,66","M140,100 L120,64","M214,92 L240,52","M110,80 L66,98","M246,76 L300,88"];
 intra.forEach(d=>b+=`<path d="${d}" style="fill:none;stroke:${dk};stroke-width:${dW+1.6};stroke-linecap:round"/><path d="${d}" style="fill:none;stroke:${dc};stroke-width:${dW};stroke-linecap:round"/>`);
 if(o.beads)intra.forEach((d,i)=>{if(o.beads==="ex")return;const pts=[[150,98],[124,86],[96,78],[190,98],[222,84],[262,72],[130,80],[226,70],[90,88],[272,82]];pts.forEach(([px,py])=>b+=`<ellipse cx="${px}" cy="${py}" rx="5.5" ry="4.2" style="fill:${dc};stroke:${dk}"/>`+`<circle cx="${px+7}" cy="${py+1}" r="1.8" style="fill:${dk}"/>`)});
 /* duodenum C-loop */
 const duo="M150,214 C150,236 150,262 168,280 C190,298 236,296 262,284";
 b+=`<path d="${duo}" style="fill:none;stroke:#B8806E;stroke-width:30;stroke-linecap:round"/><path d="${duo}" style="fill:none;stroke:${GI.duo};stroke-width:26.5;stroke-linecap:round"/>`;
 /* pancreas */
 const pan=[[176,232],[206,220],[250,214],[300,196],[340,186],[350,200],[318,222],[268,240],[232,262],[200,272],[180,262]];
 b+=`<path d="${sm(pan)}" style="fill:${o.pancC||GI.panc};stroke:${GI.pancD};stroke-width:1.6"/>`;for(let i=0;i<40;i++){const px=190+r()*150,py=214+r()*40;b+=dot(px,py-(px-190)*.16,1.6,GI.pancD)}
 if(o.pancCalc)for(let i=0;i<14;i++){const px=200+r()*130;b+=`<circle cx="${px}" cy="${240-(px-200)*.25+r()*8-4}" r="2.6" style="fill:#fff;stroke:#7A6A58"/>`}
 b+=`<path d="M186,248 C220,240 270,228 336,200" style="fill:none;stroke:${o.pdDil?"#D9B26A":"#E9C88A"};stroke-width:${o.pdDil?7:3.4};stroke-linecap:round"/>`;
 /* extrahepatic: CHD, cystic, CBD */
 const cbd="M168,118 L168,176 C170,200 178,226 186,248",cys="M168,176 C156,178 148,174 138,170";
 const ew=o.dil?8:4.5;[cbd,cys].forEach(d=>b+=`<path d="${d}" style="fill:none;stroke:${dk};stroke-width:${ew+1.8};stroke-linecap:round"/><path d="${d}" style="fill:none;stroke:${dc};stroke-width:${ew};stroke-linecap:round"/>`);
 if(o.beads==="ex"||o.beads==="both")[[168,140],[169,166],[174,200],[180,226]].forEach(([px,py])=>b+=`<ellipse cx="${px}" cy="${py}" rx="7" ry="5" style="fill:${dc};stroke:${dk}"/>`);
 /* gallbladder */
 const gs=o.gbBig?1.35:1,gp=[[138,170],[124,182],[98,192],[82,182],[84,160],[104,146],[128,152]].map(([px,py])=>[138+(px-138)*gs,170+(py-170)*gs]);
 b+=`<path d="${sm(gp)}" style="fill:${GI.gb};stroke:${o.gbWall==="porcelain"?"#E8E4DA":GI.bileD};stroke-width:${o.gbWall?5:1.6}"/>`;
 if(o.gbWall==="porcelain")b+=`<path d="${sm(gp)}" style="fill:none;stroke:#9C9686;stroke-width:1.4;stroke-dasharray:3 3"/>`;
 (o.ductHl||[]).forEach(k=>{const [hx,hy]=HPOS[k];b+=ring(hx,hy,16)});
 const st=(k,n)=>{const [sx,sy]=HPOS[k];for(let i=0;i<n;i++){const px=sx+(i%3-1)*7,py=sy+Math.floor(i/3)*6-3;b+=`<path d="M${px-4},${py} L${px},${py-4} L${px+4},${py} L${px},${py+4}Z" style="fill:${GI.stone};stroke:${GI.stoneD};stroke-width:1"/>`}};
 (o.stones||[]).forEach(k=>st(k,k==="gb"?6:1));
 if(o.mass){const [mx,my,mr]=Array.isArray(o.mass)?o.mass:[...HPOS[o.mass],16];b+=`<path d="${sm([[mx-mr,my],[mx-mr*.5,my-mr*.9],[mx+mr*.6,my-mr*.8],[mx+mr,my+mr*.1],[mx+mr*.3,my+mr*.9],[mx-mr*.7,my+mr*.7]])}" style="fill:${o.massC||GI.tumor};stroke:${GI.tumD};stroke-width:1.4;opacity:.93"/>`}
 if(o.lab!==false&&ST.labels)b+=TW(240,60,"liver",{s:12})+TD(88,214,"gallbladder",{s:10})+TD(196,170,"CBD",{s:10,a:"start"})+TD(300,234,"pancreas",{s:10})+TD(150,300,"duodenum",{s:10});
 return b+`</g>`}

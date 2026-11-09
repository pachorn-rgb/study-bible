/* Helpers shared by the endocrine pathology atlases (endo-patho-1/2/3).
   Needs _cvs-patho-helpers.js first (CV, HE, TD, Ar, tag, cardBox, slide, rng, dot, axes, curve, sl, wireSl …).
   Original schematic drawings: sella, thyroid, parathyroids, adrenal, islets, body figure, hormone axes, algorithms. */
const EN={pit:"#D07A93",pitD:"#A9536D",post:"#9D89D1",chi:"#E7B84A",bone:"#E9DEC8",boneD:"#B9A88A",brain:"#F1D5DC",csf:"#A9D3EA",
 thy:"#C4505F",thyL:"#E28A92",col:"#F2C766",para:"#C98A3E",ctx:"#E9B949",ctxF:"#F2CF6E",ctxR:"#C9873A",med:"#8C4A66",
 panc:"#EDCFA6",kid:"#A8574F",skin:"#F2C8A8",skinD:"#C98F6A",up:"#D9483B",dn:"#2F7FD8",nl:"#7C8798",tumor:"#7D5BA6",fat:"#F6E3A1"};
const ESVG=(b,vb)=>psvg(b,vb);
/* level pill: "↑↑","↑","N","↓","↓↓","—" */
function lv(x,y,v,o={}){const up=/↑/.test(v),dn=/↓/.test(v),c=up?EN.up:dn?EN.dn:EN.nl,w=o.w||(v.length>2?46:34);
 return `<rect x="${x-w/2}" y="${y-11}" width="${w}" height="22" rx="11" style="fill:${c}"/><text x="${x}" y="${y+5}" text-anchor="middle" style="font:800 12.5px var(--sb-font);fill:#fff">${v}</text>`}
/* labelled lab row: name + pill */
const labRow=(x,y,w,name,v)=>T(x,y+4,name,{a:"start",c:"s"})+lv(x+w-20,y,v);
/* algorithm node (dims when off) */
function nodeB(x,y,w,h,title,sub,c=CV.acc,on=true,o={}){const op=on?1:.38;
 let b=`<g style="opacity:${op}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" style="fill:color-mix(in srgb,${c} ${on?(o.tint||16):5}%,var(--sb-surface));stroke:${on?c:"var(--sb-line)"};stroke-width:${on?1.8:1}"/>`;
 const n=Math.floor(w/6.1);b+=T(x+w/2,y+(sub?19:h/2+4.5),title,{c:"bh"});if(sub)b+=wrapT(x+w/2,y+35,sub,n,"s",13.5,"middle");return b+`</g>`}
/* orthogonal connector with arrow head; pts = [[x,y],...] */
function conn(pts,on=true,c=CV.ink2,lab){const d="M"+pts.map(p=>p.join(",")).join(" L"),n=pts.length,[x1,y1]=pts[n-2],[x2,y2]=pts[n-1],col=on?c:"var(--sb-line)";
 let b=`<path d="${d}" style="fill:none;stroke:${col};stroke-width:${on?2.2:1.4};stroke-linejoin:round"/>`+arrowHead(x2,y2,Math.atan2(y2-y1,x2-x1),col,on?8:6);
 if(lab){const [mx,my]=pts.length>2?pts[1]:[(x1+x2)/2,(y1+y2)/2];const w=lab.length*6.2+16;b+=`<rect x="${mx-w/2}" y="${my-10}" width="${w}" height="20" rx="10" style="fill:var(--sb-surface);stroke:${col};stroke-width:1"/>`+`<text x="${mx}" y="${my+4}" text-anchor="middle" style="font:700 10px var(--sb-font);fill:${on?"var(--sb-ink)":"var(--sb-muted)"}">${lab}</text>`}
 return b}
/* algorithm tree: spec={nodes:{k:[x,y,w,h,title,sub,color]},edges:[[from,to,label,via]]}, path = keys that are lit */
function tree(spec,path){const on=k=>path.includes(k);let b="";
 spec.edges.forEach(([a,c,lab,via])=>{const A=spec.nodes[a],B=spec.nodes[c];const ax=A[0]+A[2]/2,ay=A[1]+A[3],bx=B[0]+B[2]/2,by=B[1];
  const pts=Array.isArray(via)?via:via==="h"?[[A[0]+(bx>ax?A[2]:0),A[1]+A[3]/2],[bx,A[1]+A[3]/2],[bx,by]]:Math.abs(ax-bx)<2?[[ax,ay],[bx,by]]:[[ax,ay],[ax,(ay+by)/2],[bx,(ay+by)/2],[bx,by]];
  b+=conn(pts,on(a)&&on(c),CV.acc,lab)});
 Object.entries(spec.nodes).forEach(([k,[x,y,w,h,t,s,c]])=>b+=nodeB(x,y,w,h,t,s,c||CV.acc,on(k)));return b}

/* ================= hormone axis (hypothalamus → pituitary → gland) =================
   o={n:[["Hypothalamus","CRH"],["Pituitary","ACTH"],["Adrenal","cortisol"]], v:["↑","↓","↑"], lesion:0|1|2|null, ext:"label of external source", w:width} */
function axisD(x,y,o){const W=o.w||250,H=74,gap=34;let b="";const cx=x+W/2-20;
 const glyph=(i,yy)=>{const c=[EN.brain,EN.pit,o.gc||EN.ctx][i];return `<rect x="${cx-62}" y="${yy}" width="124" height="${H-18}" rx="16" style="fill:color-mix(in srgb,${c} 55%,var(--sb-surface));stroke:color-mix(in srgb,${c} 80%,#000 10%);stroke-width:1.4"/>`};
 o.n.forEach(([n,h],i)=>{const yy=y+i*(H+gap);b+=glyph(i,yy)+T(cx,yy+22,n,{c:"bh"})+T(cx,yy+40,h,{c:"s"});
  if(o.v&&o.v[i])b+=lv(cx+92,yy+28,o.v[i]);
  if(o.lesion===i)b+=`<path d="M${cx-74},${yy-6} l10,10 M${cx-64},${yy-6} l-10,10" style="stroke:${EN.up};stroke-width:3.2;stroke-linecap:round"/>`+`<circle cx="${cx-69}" cy="${yy-1}" r="11" style="fill:none;stroke:${EN.up};stroke-width:1.6"/>`;
  if(i<o.n.length-1)b+=Ar(cx,yy+H-16,cx,yy+H+gap-4,o.dim&&o.dim[i]?"var(--sb-line)":CV.good,o.dim&&o.dim[i]?1.4:2.6,{hs:8})});
 /* negative feedback */
 const yb=y+2*(H+gap)+28,yt=y+28;b+=`<path d="M${cx-62},${yb} C${cx-120},${yb-40} ${cx-120},${yt+40} ${cx-64},${yt+6}" style="fill:none;stroke:${EN.up};stroke-width:1.8;stroke-dasharray:5 4"/>`+arrowHead(cx-64,yt+6,-.6,EN.up,7)+
  `<path d="M${cx-62},${yb} C${cx-96},${yb-26} ${cx-96},${yt+H+gap+30} ${cx-64},${yt+H+gap+8}" style="fill:none;stroke:${EN.up};stroke-width:1.8;stroke-dasharray:5 4"/>`+arrowHead(cx-64,yt+H+gap+8,-.7,EN.up,7)+
  T(cx-112,yt+H+gap/2+20,"−",{c:"bb"});
 if(o.ext)b+=`<rect x="${cx+60}" y="${y+2*(H+gap)+H-8}" width="${o.ext.length*6.6+20}" height="24" rx="12" style="fill:${CV.violet}"/>`+`<text x="${cx+70}" y="${y+2*(H+gap)+H+8}" style="font:700 11px var(--sb-font);fill:#fff">${o.ext}</text>`;
 return b}

/* ================= sagittal sella / pituitary =================
   local box 0..300 × 0..250 ; o={tumor:r, tc, tl, hem, empty, infarct, supra, lab} */
function sella(x,y,s,o={}){let b=`<g transform="translate(${x},${y}) scale(${s})">`;const r=rng(17);
 /* CSF cistern + brain with infundibular recess */
 b+=`<rect x="0" y="60" width="300" height="100" style="fill:color-mix(in srgb,${EN.csf} 45%,var(--sb-surface))"/>`;
 b+=`<path d="M0,0 H300 V88 C250,94 196,90 170,92 C160,93 156,98 152,106 C148,98 142,93 130,92 C100,90 46,96 0,90Z" style="fill:${EN.brain};stroke:#C99AA8;stroke-width:1.2"/>`;
 for(let i=0;i<5;i++)b+=`<path d="M${20+i*58},${14+r()*10} q16,${18+r()*10} 30,0" style="fill:none;stroke:#DDB3C0;stroke-width:1.4"/>`;
 b+=`<path d="M128,62 C134,48 166,48 172,62" style="fill:none;stroke:#C99AA8;stroke-width:1.2;stroke-dasharray:3 3"/>`+TD(150,44,"Hypothalamus",{s:10.5});
 /* sphenoid bone, sella turcica, sinus */
 b+=`<path d="M0,152 H80 C80,196 108,222 150,222 C192,222 220,196 220,152 H300 V250 H0Z" style="fill:${EN.bone};stroke:${EN.boneD};stroke-width:1.4"/>`;
 for(let i=0;i<26;i++){const px=8+r()*284,py=160+r()*84;if(Math.hypot(px-150,py-170)>78)b+=`<ellipse cx="${px}" cy="${py}" rx="${2+r()*3}" ry="${1.4+r()*2}" style="fill:${EN.boneD};opacity:.35"/>`}
 b+=`<path d="M92,236 C110,226 190,226 208,236 L208,250 H92Z" style="fill:#D6DEE3;stroke:${EN.boneD}"/>`+TD(150,246,"sphenoid sinus",{s:9,c:"#5B6B78"});
 b+=`<path d="M64,152 C70,140 84,138 96,146 L94,152Z M204,152 C212,132 226,130 232,140 L236,152Z" style="fill:${EN.bone};stroke:${EN.boneD};stroke-width:1.2"/>`;
 /* diaphragma sellae */
 b+=`<path d="M92,148 H140 M162,148 H210" style="stroke:#8D7B9C;stroke-width:2.2;stroke-linecap:round"/>`;
 const big=o.tumor&&o.tumor>30,tumCy=big?152:178,top=o.tumor?tumCy-o.tumor*.92:999;
 if(o.empty){b+=`<path d="M86,152 C88,194 112,216 150,216 C188,216 212,194 214,152Z" style="fill:${EN.csf};opacity:.95"/>`+`<path d="M98,200 C122,214 178,214 202,200 L202,207 C178,220 122,220 98,207Z" style="fill:${EN.pit};stroke:${EN.pitD}"/>`+TD(150,186,"CSF",{s:11,c:"#235A7A"})+`<path d="M152,106 V198" style="stroke:${EN.pitD};stroke-width:4"/>`}
 else{b+=`<path d="M152,106 C154,124 154,138 158,156" style="fill:none;stroke:${EN.pitD};stroke-width:7;stroke-linecap:round"/>`;
  b+=`<path d="M94,160 C94,196 116,214 150,214 L152,158 Z" style="fill:${o.infarct?"#EADCCB":EN.pit};stroke:${EN.pitD};stroke-width:1.2"/>`;
  b+=`<path d="M154,158 L152,214 C182,214 204,200 206,170 C206,160 196,154 178,154 Z" style="fill:${EN.post};stroke:#6E5BA8;stroke-width:1.2"/>`;
  if(o.infarct){b+=`<path d="M104,176 l12,8 l-6,10 l14,6 M112,198 l14,-4" style="fill:none;stroke:#B3936F;stroke-width:1.6"/>`;for(let i=0;i<10;i++)b+=dot(104+r()*40,170+r()*36,1.4,"#B3936F")}
  if(o.lab!==false&&!big)b+=TD(124,196,o.infarct?"infarct":"anterior",{s:9.5,c:o.infarct?"#7A5B3A":"#fff"})+TD(180,188,"posterior",{s:9.5,c:"#fff"})}
 /* optic chiasm: rests above diaphragma, pushed up by a macroadenoma or suprasellar mass */
 if(o.supra){b+=`<ellipse cx="150" cy="122" rx="40" ry="28" style="fill:#EADFA8;stroke:#9C8A3A;stroke-width:1.4"/>`+dot(138,114,3,"#B9A65A")+dot(162,128,2.6,"#B9A65A")+dot(150,108,2.2,"#B9A65A")+TD(150,126,"cyst",{s:10,c:"#6F6020"})}
 if(o.tumor){const R=o.tumor;b+=`<ellipse cx="130" cy="${tumCy}" rx="${R}" ry="${R*.92}" style="fill:${o.tc||EN.tumor};stroke:#3E2D5C;stroke-width:1.4;opacity:.94"/>`;
  b+=`<ellipse cx="${130-R*.3}" cy="${tumCy-R*.35}" rx="${R*.3}" ry="${R*.18}" style="fill:#fff;opacity:.18"/>`;
  if(o.hem)b+=`<path d="${sm([[114,tumCy-6],[128,tumCy-14],[144,tumCy-4],[138,tumCy+12],[120,tumCy+10]])}" style="fill:#9E1F2E;opacity:.92"/>`;
  if(o.tl)b+=`<text x="130" y="${tumCy+5}" text-anchor="middle" style="font:800 12px var(--sb-font);fill:#fff">${o.tl}</text>`}
 const chY=o.supra?88:big?top-7:122;
 if(big)b+=`<path d="M86,${chY+8} Q130,${chY-12} 174,${chY+8}" style="fill:none;stroke:#A67C1B;stroke-width:13;stroke-linecap:round"/><path d="M86,${chY+8} Q130,${chY-12} 174,${chY+8}" style="fill:none;stroke:${EN.chi};stroke-width:10.5;stroke-linecap:round"/>`;
 else b+=`<ellipse cx="112" cy="${chY}" rx="30" ry="7.5" style="fill:${EN.chi};stroke:#A67C1B;stroke-width:1.2"/>`;
 b+=`<path d="M60,${chY-22} L${big?96:94},${chY-(big?2:4)}" style="stroke:#A67C1B;stroke-width:1"/>`+TD(56,chY-26,"optic chiasm",{s:9.5,a:"end"});
 return b+`</g>`}
/* auto-height card (cardBox from the cvs helpers) */
const cardH=(w,lines,o={})=>{const n=o.n||Math.floor((w-24)/5.9);return 39+lines.reduce((a,l)=>a+14*nLines(l,n)+3,0)+6};
const cardA=(x,y,w,title,lines,c,o)=>cardBox(x,y,w,cardH(w,lines,o),title,lines,c,o);
/* info panel with wrapped title */
function iPanel(x,y,w,title,sub,rows,c=CV.acc){const n=Math.floor((w-40)/5.7),tn=Math.floor((w-28)/7.4);const tl=nLines(title,tn);let yy=y+26+(tl-1)*17+(sub?20:4)+22,body="";
 rows.forEach(r=>{const L=nLines(r,n);body+=`<circle cx="${x+17}" cy="${yy-3.5}" r="3" style="fill:${c}"/>`+wrapT(x+27,yy,r,n,"s",14);yy+=(L-1)*14+20});
 IPH=yy-y-6;return `<rect x="${x}" y="${y}" width="${w}" height="${IPH}" rx="14" style="fill:color-mix(in srgb,${c} 9%,var(--sb-surface));stroke:color-mix(in srgb,${c} 45%,transparent)"/>`+`<rect x="${x}" y="${y+12}" width="4" height="${20+(tl-1)*17}" rx="2" style="fill:${c}"/>`+wrapT(x+14,y+28,title,tn,"b",17)+(sub?T(x+14,y+28+(tl-1)*17+20,sub,{a:"start",c:"s m"}):"")+body}

/* ================= thyroid (front view) =================
   local box 0..260 × 0..220 ; o={k:size factor, fill, nod:[[x,y,r,"hot"|"cold"|"dom"]], scan:"diffuse"|"patchy"|"hot"|"low"|"normal", isth, para:[s1..s4] (posterior view)} */
function thyroidG(x,y,s,o={}){let b=`<g transform="translate(${x},${y}) scale(${s})">`;const k=o.k||1,f=o.fill||EN.thy;
 /* larynx + trachea */
 b+=`<path d="M106,8 h48 l6,46 h-60Z" style="fill:#E7DDD0;stroke:#B8A994"/>`;for(let i=0;i<8;i++)b+=`<rect x="110" y="${60+i*18}" width="40" height="11" rx="5" style="fill:#EDE4D8;stroke:#C7B9A6"/>`;
 const lobe=(sx)=>{const cx=130+sx*52*k,pts=[[cx-sx*0,40-8*(k-1)],[cx+sx*28*k,64],[cx+sx*32*k,128],[cx+sx*18*k,178+10*(k-1)],[cx-sx*6,184+10*(k-1)],[cx-sx*24*k,150],[cx-sx*26*k,96]];return sm(pts)};
 if(o.scan){const bg="#1E2230";b+=`<rect x="10" y="20" width="240" height="190" rx="14" style="fill:${bg}"/>`;const r=rng(o.seed||7);
  const dens=(px,py)=>{if(o.scan==="low")return .05;if(o.scan==="diffuse")return .85;if(o.scan==="normal")return .45;
   if(o.scan==="hot")return Math.hypot(px-(130+52*k),py-118)<26?.95:.04;if(o.scan==="patchy"){let d=.12;[[78,92],[186,140],[96,150],[170,80]].forEach(([qx,qy],i)=>{if(Math.hypot(px-qx,py-qy)<(i<2?20:14))d=i<2?.9:.55});return d}
   if(o.scan==="cold")return Math.hypot(px-(130-50*k),py-120)<24?.03:.5;return .4};
  b+=`<clipPath id="tc${o.seed||7}"><path d="${lobe(1)} ${lobe(-1)}"/><rect x="108" y="96" width="44" height="26"/></clipPath><g clip-path="url(#tc${o.seed||7})">`;
  for(let i=0;i<1300;i++){const px=40+r()*180,py=30+r()*176;if(r()<dens(px,py))b+=dot(px,py,1.5,"#F2E6A0")}
  b+=`</g><path d="${lobe(1)}" style="fill:none;stroke:#5B6178;stroke-width:1;stroke-dasharray:3 3"/><path d="${lobe(-1)}" style="fill:none;stroke:#5B6178;stroke-width:1;stroke-dasharray:3 3"/>`;
  return b+`</g>`}
 const g=`<linearGradient id="gThy${o.id||0}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:${EN.thyL}"/><stop offset="1" style="stop-color:${f}"/></linearGradient>`;
 b+=`<defs>${g}</defs><path d="${lobe(1)}" style="fill:url(#gThy${o.id||0});stroke:#8E2E3B;stroke-width:1.4"/><path d="${lobe(-1)}" style="fill:url(#gThy${o.id||0});stroke:#8E2E3B;stroke-width:1.4"/>`;
 b+=`<path d="M104,102 C118,96 142,96 156,102 L156,124 C142,130 118,130 104,124Z" style="fill:url(#gThy${o.id||0});stroke:#8E2E3B;stroke-width:1.2"/>`;
 if(o.lumpy)for(const [qx,qy,qr] of o.lumpy)b+=`<circle cx="${qx}" cy="${qy}" r="${qr}" style="fill:${EN.thyL};stroke:#8E2E3B;stroke-width:1;opacity:.9"/>`;
 (o.nod||[]).forEach(([qx,qy,qr,t])=>{const c=t==="hot"?"#F08A3C":t==="dom"?"#E7C87A":t==="ca"?"#E9E2D6":"#D9D4E6";b+=`<circle cx="${qx}" cy="${qy}" r="${qr}" style="fill:${c};stroke:${t==="ca"?"#7A6A58":"#6E5A7E"};stroke-width:1.4${t==="ca"?";stroke-dasharray:3 2":""}"/>`});
 if(o.fib)b+=`<path d="M60,70 C90,90 70,130 100,150 M200,70 C170,100 192,130 160,160 M80,160 C120,170 150,150 190,170" style="fill:none;stroke:#F3EFE8;stroke-width:4;opacity:.85"/>`;
 if(o.para)o.para.forEach((ps,i)=>{const px=i%2?178:82,py=i<2?78:156;b+=`<ellipse cx="${px}" cy="${py}" rx="${9*ps}" ry="${7*ps}" style="fill:${EN.para};stroke:#7A4E1C;stroke-width:1.2"/>`});
 return b+`</g>`}

/* ================= adrenal cut section =================
   o={zg,zf,zr: thickness multipliers, med, nod:[[x,y,r,c]], hem, atrophy} local 0..240 × 0..160 */
function adrenalG(x,y,s,o={}){let b=`<g transform="translate(${x},${y}) scale(${s})">`;
 const zg=o.zg??1,zf=o.zf??1,zr=o.zr??1,k=o.atrophy?.7:1;
 const shape=(sc)=>sm([[120-100*sc,130],[120-60*sc,60-10*sc],[120,10+40*(1-sc)],[120+60*sc,60-10*sc],[120+100*sc,130],[120,140-6*(1-sc)]]);
 const t=[.1*zg,.3*zf,.1*zr];let sc=1*k;
 b+=`<path d="${shape(sc)}" style="fill:${EN.ctx};stroke:#9A7420;stroke-width:1.6"/>`;
 sc-=t[0]*k;b+=`<path d="${shape(sc)}" style="fill:${EN.ctxF}"/>`;sc-=t[1]*k;b+=`<path d="${shape(sc)}" style="fill:${EN.ctxR}"/>`;sc-=t[2]*k;
 b+=`<path d="${shape(Math.max(.18,sc))}" style="fill:${o.medc||EN.med}"/>`;
 (o.nod||[]).forEach(([qx,qy,qr,c])=>b+=`<circle cx="${qx}" cy="${qy}" r="${qr}" style="fill:${c||"#F4D35E"};stroke:#9A7420;stroke-width:1.4"/>`);
 if(o.hem)b+=`<path d="${shape(.95)}" style="fill:#9E1F2E;opacity:.82"/>`;
 return b+`</g>`}

/* ================= islet tile (H&E-like) ================= mode: "normal"|"t1"|"t2" */
function islet(x,y,w,h,mode="normal"){let b=slide(x,y,w,h);const r=rng(mode.length*31+5),cx=x+w/2,cy=y+h/2,R=Math.min(w,h)*.34;
 for(let i=0;i<70;i++){const a=r()*6.28,d=R+10+r()*(Math.min(w,h)/2-R-10);const px=cx+Math.cos(a)*d,py=cy+Math.sin(a)*d*.9;
  b+=`<circle cx="${px}" cy="${py}" r="7" style="fill:#E7A6BD;stroke:${HE.mem};stroke-width:.5"/>`+dot(px+1.5,py+1,2.2,HE.nu)}
 b+=`<ellipse cx="${cx}" cy="${cy}" rx="${R}" ry="${R*.9}" style="fill:#F6DCE5;stroke:${HE.mem};stroke-width:.8"/>`;
 const nB=mode==="t1"?6:mode==="t2"?20:34;
 for(let i=0;i<nB+14;i++){const a=r()*6.28,d=Math.sqrt(r())*R*.85;const px=cx+Math.cos(a)*d,py=cy+Math.sin(a)*d*.9;const beta=i<nB;
  b+=`<circle cx="${px}" cy="${py}" r="4.6" style="fill:${beta?"#F3C0D0":"#E9A0B8"}"/>`+dot(px,py,1.9,beta?HE.nuL:HE.nu)}
 if(mode==="t1")for(let i=0;i<46;i++){const a=r()*6.28,d=Math.sqrt(r())*R;b+=dot(cx+Math.cos(a)*d,cy+Math.sin(a)*d*.9,2.8,HE.nuD)}
 if(mode==="t2")for(let i=0;i<7;i++){const a=r()*6.28,d=Math.sqrt(r())*R*.7;const px=cx+Math.cos(a)*d,py=cy+Math.sin(a)*d*.9;b+=`<path d="${sm([[px-14,py],[px-6,py-10],[px+10,py-8],[px+14,py+4],[px+2,py+10],[px-10,py+8]])}" style="fill:#F9D9E4;stroke:#E5A9BF;stroke-width:.8;opacity:.95"/>`}
 return b}

/* ================= thyroid H&E tiles ================= */
function follicle(px,py,rx,ry,o={}){const n=Math.max(10,Math.round((rx+ry)*.55)),cells=[];let b="";
 const cell=o.tall?6.2:o.flat?2.4:4;b+=`<ellipse cx="${px}" cy="${py}" rx="${rx}" ry="${ry}" style="fill:${HE.cy};stroke:${HE.mem};stroke-width:.6"/>`;
 b+=`<ellipse cx="${px}" cy="${py}" rx="${Math.max(2,rx-cell)}" ry="${Math.max(2,ry-cell)}" style="fill:${o.pale?"#F8E8C8":"#F2B6C6"};stroke:${o.scallop?"#fff":"none"};stroke-width:${o.scallop?2.2:0};${o.scallop?"stroke-dasharray:3 4":""}"/>`;
 if(o.colloid!==false)b+=`<ellipse cx="${px}" cy="${py}" rx="${Math.max(1,rx-cell-1)}" ry="${Math.max(1,ry-cell-1)}" style="fill:${o.pale?"#FBEFD9":"#EE9FB7"};opacity:.75"/>`;
 for(let i=0;i<n;i++){const a=i/n*6.283;const nx=px+Math.cos(a)*(rx-cell/2),ny=py+Math.sin(a)*(ry-cell/2);b+=`<ellipse cx="${nx}" cy="${ny}" rx="${o.tall?1.6:1.8}" ry="${o.tall?2.6:1.6}" transform="rotate(${a*57.3} ${nx} ${ny})" style="fill:${o.hurthle?"#B2386A":HE.nu}"/>`}
 if(o.hurthle)b=b.replace(`fill:${HE.cy}`,"fill:#E3608F");return b}
function thyHE(x,y,w,h,mode){const r=rng({normal:3,graves:5,hashi:7,lymph:9,dq:11,riedel:13,pap:17,fol:19,med:23,ana:29,aden:31}[mode]||3);
 let b=`<clipPath id="ct${mode}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12"/></clipPath>`+slide(x,y,w,h)+`<g clip-path="url(#ct${mode})">`;
 const grid=(fn,step=34)=>{for(let yy=y+14;yy<y+h;yy+=step)for(let xx=x+14+(((yy-y)/step)%2?step/2:0);xx<x+w;xx+=step)fn(xx+(r()-.5)*8,yy+(r()-.5)*8)};
 if(mode==="normal")grid((px,py)=>b+=follicle(px,py,13+r()*4,11+r()*4));
 if(mode==="graves")grid((px,py)=>b+=follicle(px,py,13+r()*4,11+r()*4,{tall:true,scallop:true,pale:true}));
 if(mode==="hashi"||mode==="lymph"){grid((px,py)=>{if(Math.hypot(px-x-w*.38,py-y-h*.5)>h*.36)b+=follicle(px,py,mode==="hashi"?9+r()*3:12+r()*3,mode==="hashi"?8+r()*3:10+r()*3,{hurthle:mode==="hashi"})});
  for(let i=0;i<380;i++){const a=r()*6.28,d=Math.sqrt(r())*h*.38;b+=dot(x+w*.38+Math.cos(a)*d*1.2,y+h*.5+Math.sin(a)*d,1.8,HE.nuD)}
  b+=`<ellipse cx="${x+w*.38}" cy="${y+h*.5}" rx="${h*.2}" ry="${h*.17}" style="fill:#D9CCE9;opacity:.75"/>`;for(let i=0;i<30;i++){const a=r()*6.28,d=Math.sqrt(r())*h*.16;b+=dot(x+w*.38+Math.cos(a)*d*1.2,y+h*.5+Math.sin(a)*d,2.4,HE.nuL)}}
 if(mode==="dq"){grid((px,py)=>b+=follicle(px,py,10+r()*4,9+r()*3),40);
  const gc=(px,py)=>{b+=`<ellipse cx="${px}" cy="${py}" rx="30" ry="22" style="fill:#EBAFC6;stroke:${HE.mem}"/>`+`<ellipse cx="${px+4}" cy="${py+2}" rx="12" ry="9" style="fill:#EE9FB7"/>`;for(let i=0;i<14;i++){const a=i/14*6.28;b+=`<ellipse cx="${px+Math.cos(a)*24}" cy="${py+Math.sin(a)*16}" rx="2.4" ry="1.8" style="fill:${HE.nu}"/>`}};
  gc(x+w*.32,y+h*.42);gc(x+w*.7,y+h*.64);for(let i=0;i<140;i++)b+=dot(x+r()*w,y+r()*h,1.6,HE.nuD)}
 if(mode==="riedel"){for(let i=0;i<26;i++){const yy=y+6+i*h/26;let d=`M${x},${yy}`;for(let xx=x;xx<=x+w;xx+=18)d+=` Q${xx+5},${yy-4} ${xx+9},${yy} T${xx+18},${yy}`;b+=`<path d="${d}" style="fill:none;stroke:#E5A3BF;stroke-width:3"/>`}
  for(let i=0;i<70;i++)b+=dot(x+r()*w,y+r()*h,1.9,HE.nuD);b+=follicle(x+w*.75,y+h*.3,9,8,{})}
 if(mode==="aden"||mode==="fol"){const cx=x+w*.5,cy=y+h*.52,R=h*.36;
  grid((px,py)=>{if(Math.hypot(px-cx,(py-cy)*1.15)>R+16)b+=follicle(px,py,12,10,{flat:true})});
  b+=`<ellipse cx="${cx}" cy="${cy}" rx="${R*1.25}" ry="${R}" style="fill:#F6D3DF;stroke:#C9839E;stroke-width:7"/>`;
  for(let i=0;i<60;i++){const a=r()*6.28,d=Math.sqrt(r())*.86;const px=cx+Math.cos(a)*d*R*1.18,py=cy+Math.sin(a)*d*R*.94;b+=follicle(px,py,6.5,6,{})}
  if(mode==="fol"){b+=`<path d="${sm([[cx+R*1.18,cy-18],[cx+R*1.5,cy-8],[cx+R*1.58,cy+10],[cx+R*1.36,cy+22],[cx+R*1.2,cy+16]])}" style="fill:#F6D3DF;stroke:none"/>`;for(let i=0;i<8;i++)b+=follicle(cx+R*1.3+r()*24,cy-6+r()*20,5,4.5,{});
   b+=`<circle cx="${cx-R*.7}" cy="${cy-R*1.02}" r="12" style="fill:#F7E9EE;stroke:${HE.mem};stroke-width:2"/>`+follicle(cx-R*.7,cy-R*1.02,5,5,{})+TD(cx-R*.7,cy-R*1.02-18,"vascular invasion",{s:9.5})+TD(cx+R*1.4,cy+40,"capsular invasion",{s:9.5})}}
 if(mode==="pap"){for(let k=0;k<4;k++){const bx=x+30+k*(w-40)/4,by=y+h-10;let d=`M${bx},${by}`;const pts=[[bx,by],[bx+8,by-70],[bx-14,by-110],[bx+16,by-140]];
   b+=`<path d="M${pts.map(p=>p.join(",")).join(" L")}" style="fill:none;stroke:#E8A9C1;stroke-width:16;stroke-linecap:round;stroke-linejoin:round"/>`+`<path d="M${pts.map(p=>p.join(",")).join(" L")}" style="fill:none;stroke:#C55F86;stroke-width:3.2;stroke-linecap:round"/>`;
   for(let t=0;t<14;t++){const i=Math.min(2,Math.floor(t/5)),u=(t%5)/5,ax=pts[i][0]+(pts[i+1][0]-pts[i][0])*u,ay=pts[i][1]+(pts[i+1][1]-pts[i][1])*u;[-9,9].forEach(o=>b+=`<ellipse cx="${ax+o}" cy="${ay}" rx="3.6" ry="3" style="fill:#F4F0FA;stroke:${HE.nu};stroke-width:1.3"/>`)}}
  [[x+w*.2,y+h*.3],[x+w*.62,y+h*.22]].forEach(([px,py])=>{for(let k=4;k>0;k--)b+=`<circle cx="${px}" cy="${py}" r="${k*3}" style="fill:${k%2?"#6D5BA8":"#B9A9E0"}"/>`});
  b+=TD(x+w*.2,y+h*.3-18,"psammoma",{s:9.5})}
 if(mode==="med"){b+=`<rect x="${x}" y="${y}" width="${w}" height="${h}" style="fill:#F3D6E0"/>`;
  for(let i=0;i<6;i++){const px=x+30+r()*(w-60),py=y+24+r()*(h-48);b+=`<path d="${sm([[px-26,py],[px-12,py-18],[px+16,py-16],[px+28,py+2],[px+12,py+18],[px-14,py+16]])}" style="fill:#F6E6EE;stroke:#E5B9CC;stroke-width:1"/>`}
  grid((px,py)=>{b+=`<path d="M${px-7},${py-5} l12,-2 l4,8 l-8,7 l-9,-4Z" style="fill:#E9A5C0;stroke:${HE.mem};stroke-width:.5"/>`+dot(px,py,2.3,HE.nu)},14)}
 if(mode==="ana")for(let i=0;i<46;i++){const px=x+r()*w,py=y+r()*h,s=6+r()*12;b+=`<path d="${sm([[px-s,py],[px-s*.3,py-s*.8],[px+s*.6,py-s*.5],[px+s,py+s*.3],[px,py+s*.8]])}" style="fill:#E6A0BB;stroke:${HE.mem};stroke-width:.6"/>`+dot(px,py,s*.32,i%5?HE.nu:HE.nuD)}
 return b+`</g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" style="fill:none;stroke:var(--sb-line);stroke-width:1.2"/>`}

/* ================= body figure (front) =================
   local 0..200 × 0..400 ; o={cush, acro, myx, graves, pig (hyperpigmentation), hl:[[x,y,label,side]]} callouts drawn by caller */
function bodyFig(x,y,s,o={}){let b=`<g transform="translate(${x},${y}) scale(${s})">`;const sk=o.pig?"#C99572":EN.skin,ed=o.pig?"#8E6243":EN.skinD;
 const st=`style="fill:${sk};stroke:${ed};stroke-width:1.4"`;
 const trunkW=o.cush?1.3:1,limb=o.cush?.72:1;
 /* legs */
 b+=`<path d="M${80-6*limb},236 C${76-8*limb},300 ${74-6*limb},350 ${72},392 L${92},392 C${96},340 ${98},290 ${100},250Z" ${st}/>`+`<path d="M${120+6*limb},236 C${124+8*limb},300 ${126+6*limb},350 ${128},392 L${108},392 C${104},340 ${102},290 ${100},250Z" ${st}/>`;
 if(o.acro)b+=`<ellipse cx="80" cy="394" rx="18" ry="7" ${st}/><ellipse cx="120" cy="394" rx="18" ry="7" ${st}/>`;
 /* arms */
 const aw=limb*11;b+=`<path d="M${62-14*(trunkW-1)*4},110 C${44},150 ${38},200 ${36},236 L${36+aw},238 C${48},200 ${56},160 ${70},128Z" ${st}/>`+`<path d="M${138+14*(trunkW-1)*4},110 C${156},150 ${162},200 ${164},236 L${164-aw},238 C${152},200 ${144},160 ${130},128Z" ${st}/>`;
 const hr=o.acro?13:8;b+=`<circle cx="${40}" cy="${244}" r="${hr}" ${st}/><circle cx="${160}" cy="${244}" r="${hr}" ${st}/>`;
 /* trunk */
 const tw=34*trunkW;b+=`<path d="M${100-tw},104 C${100-tw-6},150 ${100-tw-(o.cush?14:0)},200 ${100-tw+4},244 L${100+tw-4},244 C${100+tw+(o.cush?14:0)},200 ${100+tw+6},150 ${100+tw},104 C${120},96 ${80},96 ${100-tw},104Z" ${st}/>`;
 if(o.cush){b+=`<ellipse cx="100" cy="98" rx="30" ry="12" style="fill:${sk};stroke:${ed};stroke-width:1.2"/>`;[[86,190],[112,196],[80,214],[118,216]].forEach(([sx,sy])=>b+=`<path d="M${sx},${sy} q6,-10 12,-2" style="fill:none;stroke:#8E3C64;stroke-width:3;stroke-linecap:round"/>`)}
 /* neck + head */
 b+=`<rect x="90" y="${o.acro?72:76}" width="20" height="28" ${st}/>`;
 if(o.graves||o.goiter)b+=`<path d="M84,88 C88,100 112,100 116,88 C112,96 88,96 84,88Z" style="fill:${EN.thy};stroke:#8E2E3B;stroke-width:1.2"/>`+`<ellipse cx="100" cy="92" rx="16" ry="8" style="fill:${EN.thyL};stroke:#8E2E3B;stroke-width:1.2"/>`;
 const hw=o.cush?32:o.myx?28:24,hh=o.cush?30:30;b+=`<ellipse cx="100" cy="${50}" rx="${hw}" ry="${hh}" ${st}/>`;
 if(o.cush)b+=`<ellipse cx="84" cy="58" rx="8" ry="5" style="fill:#E2797E;opacity:.55"/><ellipse cx="116" cy="58" rx="8" ry="5" style="fill:#E2797E;opacity:.55"/>`;
 if(o.acro)b+=`<path d="M76,58 C76,86 124,86 124,58 C120,74 80,74 76,58Z" ${st}/>`+`<path d="M78,32 C88,22 112,22 122,32" style="fill:none;stroke:${ed};stroke-width:3"/>`;
 /* eyes */
 const er=o.graves?4.6:3;b+=`<circle cx="91" cy="48" r="${er}" style="fill:#fff;stroke:${ed}"/><circle cx="109" cy="48" r="${er}" style="fill:#fff;stroke:${ed}"/>`+dot(91,48,1.7,"#3B2D4A")+dot(109,48,1.7,"#3B2D4A");
 if(o.myx)b+=`<path d="M84,54 q7,5 14,0 M102,54 q7,5 14,0" style="fill:none;stroke:${ed};stroke-width:1.6"/>`;
 b+=`<path d="M93,66 q7,${o.myx?2:4} 14,0" style="fill:none;stroke:${ed};stroke-width:1.6"/>`;
 if(o.cush)b+=`<path d="M${100-tw+4},96 C${100-tw},82 ${100-tw+16},76 ${100-tw+24},86" style="fill:${sk};stroke:${ed};stroke-width:1.2"/>`;
 return b+`</g>`}
/* callout line + label (x1,y1 on body → label at x2,y2) */
const callout=(x1,y1,x2,y2,t,c=CV.acc,a)=>`<path d="M${x1},${y1} L${x2},${y2}" style="stroke:${c};stroke-width:1.3"/>`+dot(x1,y1,3,c)+T(x2+(a==="end"?-4:4),y2+4,t,{a:a||"start",c:"s"});

/* gauge bar for a lab value: range [lo,hi], normal band [nlo,nhi], value v */
function gauge(x,y,w,name,v,lo,hi,nlo,nhi,unit,c){const X=t=>x+(Math.min(hi,Math.max(lo,t))-lo)/(hi-lo)*w;let b=T(x,y-8,name,{a:"start",c:"s"})+T(x+w,y-8,`${v} ${unit}`,{a:"end",c:"bh"});
 b+=`<rect x="${x}" y="${y}" width="${w}" height="10" rx="5" style="fill:var(--sb-surface2);stroke:var(--sb-line)"/>`+`<rect x="${X(nlo)}" y="${y}" width="${X(nhi)-X(nlo)}" height="10" style="fill:color-mix(in srgb,${CV.good} 35%,transparent)"/>`;
 const out=v<nlo||v>nhi;b+=`<circle cx="${X(v)}" cy="${y+5}" r="7.5" style="fill:${c||(out?EN.up:CV.good)};stroke:var(--sb-surface);stroke-width:2"/>`;return b}

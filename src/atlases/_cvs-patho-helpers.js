/* Helpers shared by the cardiovascular pathology atlases (cvs-patho-1/2/3).
   Original schematic drawings: 4-chamber heart, ECG strips, curves, H&E-style slides. */
const CV={ox:"var(--a-art)",dx:"var(--a-vein)",mx:"color-mix(in srgb,var(--a-art) 52%,var(--a-vein))",mus:"var(--a-musc)",mus2:"var(--a-musc2)",edge:"var(--a-edge)",
 ink:"var(--sb-ink)",ink2:"var(--sb-ink2)",mut:"var(--sb-muted)",line:"var(--sb-line)",sf:"var(--sb-surface)",sf2:"var(--sb-surface2)",acc:"var(--sb-accent)",bad:"var(--sb-bad)",good:"var(--sb-good)",
 fl:"#E9C46A",gold:"#D99A2B",teal:"#0E8A7E",violet:"#7A5BC7"};
const HE={bg:"#FBEFF3",cy:"#F2B9CB",cyX:"#E47FA3",mem:"#C45C82",nu:"#5E4FA3",nuD:"#36296E",col:"#F7DCE6",colB:"#9FA6D8",rbc:"#D9455F",ink:"#3B2D4A"};
const nLines=(s,n)=>{let L=1,cur="";String(s).split(" ").forEach(t=>{if((cur+" "+t).trim().length>n&&cur){L++;cur=t}else cur=(cur+" "+t).trim()});return L};
const sty=(f,s="none",w=1.2,x="")=>`style="fill:${f};stroke:${s};stroke-width:${w}${x?";"+x:""}"`;
const P=(d,f,s=CV.edge,w=1.2,x="")=>`<path d="${d}" ${sty(f,s,w,x)}/>`;
const R=(x,y,w,h,f,s=CV.line,rx=10,sw=1.2)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" ${sty(f,s,sw)}/>`;
const Ln=(x1,y1,x2,y2,c=CV.ink2,w=1.6,dash)=>`<path d="M${x1},${y1} L${x2},${y2}" style="fill:none;stroke:${c};stroke-width:${w};stroke-linecap:round${dash?";stroke-dasharray:"+dash:""}"/>`;
/* fixed dark text for light "slides" (H&E, ECG paper) so it reads in every theme */
const TD=(x,y,s,o={})=>`<text x="${x}" y="${y}" text-anchor="${o.a||"middle"}" style="font:${o.w||600} ${o.s||11}px var(--sb-font);fill:${o.c||HE.ink}">${s}</text>`;
/* coloured arrow: straight or quadratic (cx,cy) */
function arrowHead(x,y,ang,c,sz=8){return `<path d="M0,0 L${-sz},${-sz*.55} L${-sz},${sz*.55} Z" style="fill:${c}" transform="translate(${x},${y}) rotate(${ang*180/Math.PI})"/>`}
function Ar(x1,y1,x2,y2,c=CV.ink2,w=2,o={}){const cx=o.cx??null,cy=o.cy??null;const d=cx===null?`M${x1},${y1} L${x2},${y2}`:`M${x1},${y1} Q${cx},${cy} ${x2},${y2}`;
 const a=cx===null?Math.atan2(y2-y1,x2-x1):Math.atan2(y2-cy,x2-cx);
 return `<path d="${d}" style="fill:none;stroke:${c};stroke-width:${w};stroke-linecap:round${o.dash?";stroke-dasharray:"+o.dash:""}"/>`+arrowHead(x2,y2,a,c,o.hs||7+w)}
/* coloured pill with white text */
const tag=(x,y,s,c,o={})=>{const w=o.w||s.replace(/<[^>]+>/g,"").length*6.3+20;return `<rect x="${x-w/2}" y="${y-11}" width="${w}" height="22" rx="11" style="fill:${c}"/><text x="${x}" y="${y+4}" text-anchor="middle" style="font:700 10.5px var(--sb-font);fill:#fff">${s}</text>`};
/* soft card with title + wrapped lines */
function cardBox(x,y,w,h,title,lines=[],c=CV.acc,o={}){let b=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" style="fill:color-mix(in srgb,${c} ${o.tint||10}%,var(--sb-surface));stroke:color-mix(in srgb,${c} 55%,transparent);stroke-width:1.2"/>`;
 if(o.bar!==false)b+=`<rect x="${x}" y="${y+10}" width="4" height="${h-20}" rx="2" style="fill:${c}"/>`;
 b+=T(x+14,y+21,title,{a:"start",c:"bh"});let yy=y+39;const n=o.n||Math.floor((w-24)/5.9);lines.forEach(l=>{b+=wrapT(x+14,yy,l,n,"s",14);yy+=14*nLines(l,n)+3});return b}
/* section frame (theme surface) */
const frm=(x,y,w,h,t,s)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" style="fill:var(--sb-surface2);stroke:var(--sb-line);stroke-width:1"/>`+(t?T(x+14,y+22,t,{a:"start",c:"bh"}):"")+(s?T(x+14,y+38,s,{a:"start",c:"s m"}):"");
/* H&E slide frame */
const slide=(x,y,w,h)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" style="fill:${HE.bg};stroke:var(--sb-line);stroke-width:1.2"/>`;
function rng(s){return()=>{s=(s*16807)%2147483647;return(s-1)/2147483646}}
const dot=(x,y,r,c)=>`<circle cx="${x}" cy="${y}" r="${r}" style="fill:${c}"/>`;

/* ================= 4-chamber heart =================
   local box 0..360 × 0..350, wrap with heartAt(x,y,scale,o).
   o: {c:{ra,rv,la,lv,ao,pa}, lvk (LV cavity scale: <1 concentric, >1 dilated), rvk, lvw (wall shade), sept (septal bulge), asd, vsd, pda, override,
       eff (effusion), constr, lab, flows:[[x1,y1,x2,y2,colour,cx,cy]], hot:[chambers to ring], myx, veg, noPA, noAo, tga, truncus, tvatresia} */
function heart(o={}){const c=Object.assign({ra:CV.dx,rv:CV.dx,pa:CV.dx,la:CV.ox,lv:CV.ox,ao:CV.ox,svc:CV.dx},o.c||{});const k=o.lvk||1,kr=o.rvk||1;let b="";
 const sc=(pts,cx,cy,f)=>pts.map(([x,y])=>[cx+(x-cx)*f,cy+(y-cy)*f]);
 const hk=k>1?1+(k-1)*.45:1;
 let outline=[[70,150],[86,108],[136,96],[196,106],[244,96],[302,96],[334,130],[344,190],[334,252],[304,302],[262,338],[232,342],[198,318],[146,300],[94,268],[70,214]];
 outline=sc(outline,190,215,hk);
 if(o.tako)outline=outline.map(([x,y])=>y>250&&x>180?[x+(y-250)*.18,y+(y-250)*.25]:[x,y]);
 if(o.dil==="rv")outline=outline.map(([x,y])=>x<200?[x-(200-x)*.12,y+(y>200?(y-200)*.06:0)]:[x,y]);
 /* behind: descending aorta + IVC */
 if(!o.noAo&&!o.truncus)b+=P("M318,96 L318,232",c.ao,CV.edge,1,"stroke-width:0")+`<path d="M318,90 L318,236" style="stroke:var(--a-edge);stroke-width:26;stroke-linecap:round;fill:none"/><path d="M318,90 L318,236" style="stroke:${c.ao};stroke-width:23.5;stroke-linecap:round;fill:none;opacity:.55"/>`;
 b+=`<path d="M112,330 L112,250" style="stroke:var(--a-edge);stroke-width:28;fill:none"/><path d="M112,332 L112,250" style="stroke:${c.svc};stroke-width:25.5;fill:none"/>`;
 /* pericardial effusion / constriction */
 if(o.eff)b+=`<path d="${sm(sc(outline,190,215,1.12))}" style="fill:color-mix(in srgb,${CV.fl} 55%,var(--sb-surface));stroke:color-mix(in srgb,${CV.gold} 70%,transparent);stroke-width:1.6"/>`;
 /* myocardium */
 b+=`<path d="${sm(outline)}" style="fill:url(#gMyo);stroke:var(--a-edge);stroke-width:1.6"/>`;
 if(o.constr)b+=`<path d="${sm(sc(outline,190,215,1.035))}" style="fill:none;stroke:#9A8F7A;stroke-width:9;stroke-linejoin:round;opacity:.95"/>`+`<path d="${sm(sc(outline,190,215,1.035))}" style="fill:none;stroke:#E8E2D2;stroke-width:3;stroke-dasharray:9 7;opacity:.9"/>`;
 /* SVC */
 b+=`<path d="M112,8 L112,118" style="stroke:var(--a-edge);stroke-width:28;fill:none"/><path d="M112,6 L112,120" style="stroke:${c.svc};stroke-width:25.5;fill:none"/>`;
 /* chambers */
 const rk=o.rak||kr,lk=o.lak||1,RA=[124,152,44*rk,42*rk],LA=[286,140-(lk-1)*20,40*lk,32*lk];
 b+=`<ellipse cx="${RA[0]}" cy="${RA[1]}" rx="${RA[2]}" ry="${RA[3]}" ${sty(c.ra,CV.edge,1.2)}/>`;
 b+=`<ellipse cx="${LA[0]}" cy="${LA[1]}" rx="${LA[2]}" ry="${LA[3]}" ${sty(c.la,CV.edge,1.2)}/>`;
 let RV=[[94,206],[176,200],[190,216],[186,262],[164,294],[120,266],[98,236]];RV=sc(RV,142,240,kr);
 let LV=[[214,212],[290,198],[312,232],[296,276],[252,318],[222,300],[210,262]];LV=sc(LV,258,250,k);
 if(o.tako)LV=[[218,212],[272,204],[290,228],[316,282],[290,330],[236,332],[208,286],[214,240]];
 if(o.tvatresia)RV=sc(RV,150,250,.55);
 if(o.rvh)b+=`<path d="${sm(sc(RV,142,244,1.2))}" style="fill:var(--a-musc);stroke:none;opacity:.9"/>`;
 if(o.lvh)b+=`<path d="${sm(sc(LV,258,252,1.16))}" style="fill:var(--a-musc);stroke:none;opacity:.9"/>`;
 b+=`<path d="${sm(RV)}" ${sty(c.rv,CV.edge,1.2)}/>`;
 b+=`<path d="${sm(LV)}" ${sty(c.lv,CV.edge,1.2)}/>`;
 /* asymmetric septal bulge (HCM) */
 if(o.sept)b+=`<path d="M206,214 C238,224 246,250 228,282 C218,272 210,250 206,214Z" style="fill:url(#gMyo);stroke:var(--a-edge);stroke-width:1"/>`;
 /* valves */
 const leaf=(x1,y1,x2,y2)=>`<path d="M${x1},${y1} L${x2},${y2}" style="stroke:#FFF7EE;stroke-width:3.2;stroke-linecap:round"/>`;
 if(o.tvatresia)b+=`<path d="M100,196 L170,196" style="stroke:url(#gMyo);stroke-width:9"/>`+`<path d="M100,196 L170,196" style="stroke:var(--a-edge);stroke-width:1;stroke-dasharray:3 3"/>`;
 else if(o.ebstein)b+=leaf(108,232,130,252)+leaf(170,214,150,250);
 else b+=leaf(108,194,128,212)+leaf(172,194,152,212);
 b+=leaf(226,182,244,202)+leaf(298,180,282,200);
 /* septal defects */
 if(o.asd)b+=`<ellipse cx="197" cy="146" rx="10" ry="15" ${sty(o.asdc||CV.mx,CV.edge,1.2)}/>`;
 if(o.vsd)b+=`<ellipse cx="199" cy="${o.vsdy||226}" rx="12" ry="10" ${sty(o.vsdc||CV.mx,CV.edge,1.2)}/>`;
 /* great arteries */
 const tube=(d,col,w=24)=>`<path d="${d}" style="stroke:var(--a-edge);stroke-width:${w+3};fill:none;stroke-linecap:round"/><path d="${d}" style="stroke:${col};stroke-width:${w};fill:none;stroke-linecap:round"/>`;
 if(o.truncus){b+=tube("M200,206 C200,140 202,92 214,70 C236,34 290,30 318,90",c.ao,30)+tube("M212,92 C190,84 170,86 156,94",c.pa,15)+tube("M222,84 C240,92 256,98 270,104",c.pa,15);}
 else if(o.tga){b+=tube("M176,206 C170,150 182,100 204,72 C234,32 300,32 318,90",c.ao,24)+tube("M236,206 C236,160 232,124 228,110 C214,100 190,100 156,104",c.pa,18)+tube("M228,110 C246,106 262,110 276,116",c.pa,14);}
 else{ if(!o.noAo)b+=tube("M236,206 C234,150 222,104 230,76 C244,34 302,32 318,90",c.ao,24);
  if(!o.noPA)b+=tube("M176,206 C170,152 180,120 198,102",c.pa,22)+tube("M198,102 C184,94 162,94 146,100",c.pa,15)+tube("M198,102 C222,96 248,104 270,112",c.pa,15);}
 if(o.ps)b+=`<path d="M160,178 C168,184 168,192 160,198 Z M192,176 C182,184 182,192 192,198 Z" style="fill:var(--a-musc);stroke:var(--a-edge);stroke-width:1"/>`;
 if(o.coarc)b+=`<path d="M300,58 L320,72" style="stroke:url(#gMyo);stroke-width:8"/>`;
 if(o.pda)b+=tube("M262,108 C268,92 278,76 290,60",o.pdac||CV.mx,9);
 if(o.override)b+=`<ellipse cx="206" cy="210" rx="16" ry="9" ${sty(CV.mx,CV.edge,1)}/>`;
 if(o.tapvr)b+=tube("M312,150 C346,120 330,22 220,18 C160,16 130,30 118,52",CV.ox,11);
 /* myxoma */
 if(o.myx)b+=`<path d="${sm([[268,128],[292,120],[306,140],[300,176],[288,198],[272,186],[264,156]])}" style="fill:#E9DFAE;stroke:#A08C3C;stroke-width:1.4"/>`+`<path d="M276,126 C262,128 254,134 250,140" style="stroke:#A08C3C;stroke-width:3"/>`;
 if(o.veg)o.veg.forEach(([x,y,r])=>b+=`<path d="${sm([[x-r,y],[x-r*.4,y-r*.9],[x+r*.5,y-r*.7],[x+r,y+r*.1],[x+r*.3,y+r*.9],[x-r*.6,y+r*.7]])}" style="fill:#F1E3B8;stroke:#A6853A;stroke-width:1.2"/>`+dot(x-r*.2,y,1.6,"#7A5BC7")+dot(x+r*.3,y-r*.3,1.4,"#7A5BC7"));
 /* hot rings */
 const ctr={ra:[124,152],la:[286,140],rv:[142,248],lv:[260,256],ao:[232,84],pa:[180,140]};
 (o.hot||[]).forEach(h=>{const p=ctr[h];if(p)b+=`<circle cx="${p[0]}" cy="${p[1]}" r="30" style="fill:none;stroke:var(--sb-accent);stroke-width:2.4;stroke-dasharray:5 4"/>`});
 (o.flows||[]).forEach(([x1,y1,x2,y2,col,cx,cy])=>b+=Ar(x1,y1,x2,y2,col||"#fff",3.2,cx!=null?{cx,cy,hs:9}:{hs:9}));
 if(o.lab!==false){const L=(x,y,s)=>`<text x="${x}" y="${y}" text-anchor="middle" style="font:800 12px var(--sb-font);fill:#fff;paint-order:stroke;stroke:rgba(0,0,0,.35);stroke-width:2.4px">${s}</text>`;
  b+=L(124,157,"RA")+L(o.tvatresia?150:142,o.tvatresia?258:252,"RV")+L(292,145,"LA")+L(258,262,"LV");
  if(!o.noAo&&!o.truncus)b+=L(o.tga?178:236,150,"Ao");if(!o.noPA&&!o.truncus)b+=L(o.tga?236:176,o.tga?160:160,"PA");if(o.truncus)b+=L(201,150,"Tr");
  b+=L(112,40,"SVC")+L(112,322,"IVC")}
 return b}
const HDEFS=`<defs><linearGradient id="gMyo" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--a-musc2)"/><stop offset="1" style="stop-color:var(--a-musc)"/></linearGradient></defs>`;
const heartAt=(x,y,s,o)=>`<g transform="translate(${x},${y}) scale(${s})">${heart(o)}</g>`;
const hsvg=(b,vb)=>psvg(HDEFS+b,vb);

/* ================= ECG strips =================
   waves: [t(s), amplitude(mV), width(s)] summed as gaussians; draw on pink paper. */
function ecgPath(waves,x0,y0,w,h,dur,o={}){const n=o.n||700,mv=o.mv||h*.36;let d="";const r=o.noise?rng(o.noise):null;
 for(let i=0;i<=n;i++){const t=i/n*dur;let v=0;for(const [c,a,s] of waves){const z=(t-c)/s;if(z>-5&&z<5)v+=a*Math.exp(-.5*z*z)}
  if(o.fib)v+=o.fib(t);if(r)v+=(r()-.5)*.02;d+=(i?"L":"M")+(x0+i/n*w).toFixed(1)+","+(y0-v*mv).toFixed(1)}return d}
/* beat builders */
const Pw=(t,a=.14)=>[[t,a,.035]];
const QRS=(t,o={})=>{const a=o.a||1,wd=o.wide?2.6:1;let q=[[t-.022*wd,-.1*a,.008*wd],[t,a*(o.wide?.85:1),.011*wd],[t+.026*wd,-.28*a*(o.wide?.4:1),.01*wd]];
 if(o.delta)q.unshift([t-.035,.28,.022]);if(o.rsr)q=[[t-.02,.35,.009],[t,-.5,.01],[t+.035,.75,.013]];return q};
const Tw=(t,a=.3,w=.06)=>[[t,a,w]];
const STe=(t,a=.3)=>[[t+.1,a,.06],[t+.16,a*.9,.06]];
function beat(t,o={}){let w=[];if(o.p!==false)w=w.concat(Pw(t-(o.pr||.16),o.pa||.14));w=w.concat(QRS(t,o));
 const tt=t+(o.qt||.3);if(o.st)w=w.concat(STe(t,o.st));if(!o.noT)w=w.concat(Tw(tt,o.inv?-.3:(o.ta||.3)*(o.wide?-1:1),o.tw||.06));return w}
function paper(x,y,w,h){let b=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" style="fill:#FFF3F3;stroke:#F2C9C9;stroke-width:1"/>`;
 for(let gx=x+10;gx<x+w;gx+=10)b+=`<path d="M${gx},${y+1} L${gx},${y+h-1}" style="stroke:${(gx-x)%50===0?"#F0B4B4":"#FADADA"};stroke-width:${(gx-x)%50===0?1:.6}"/>`;
 for(let gy=y+10;gy<y+h;gy+=10)b+=`<path d="M${x+1},${gy} L${x+w-1},${gy}" style="stroke:${(gy-y)%50===0?"#F0B4B4":"#FADADA"};stroke-width:${(gy-y)%50===0?1:.6}"/>`;return b}
const trace=d=>`<path d="${d}" style="fill:none;stroke:#1F2937;stroke-width:1.7;stroke-linejoin:round"/>`;
function strip(x,y,w,h,waves,dur,o={}){return paper(x,y,w,h)+trace(ecgPath(waves,x+4,y+h*(o.base||.62),w-8,h,dur,o))+(o.lab?TD(x+10,y+16,o.lab,{a:"start",w:700}):"")}

/* ================= plot axes ================= */
function axes(x0,y0,w,h,xr,yr,xt,yt,xl,yl,o={}){const X=v=>x0+(v-xr[0])/(xr[1]-xr[0])*w,Y=o.log?v=>y0+h-(Math.log10(v)-Math.log10(yr[0]))/(Math.log10(yr[1])-Math.log10(yr[0]))*h:v=>y0+h-(v-yr[0])/(yr[1]-yr[0])*h;
 let g=`<rect class="plot" x="${x0}" y="${y0}" width="${w}" height="${h}"/>`;
 xt.forEach(v=>g+=`<line class="gl" x1="${X(v)}" y1="${y0}" x2="${X(v)}" y2="${y0+h}"/>`+T(X(v),y0+h+16,v,{c:"s m"}));
 yt.forEach(v=>g+=`<line class="gl" x1="${x0}" y1="${Y(v)}" x2="${x0+w}" y2="${Y(v)}"/>`+T(x0-6,Y(v)+4,v,{a:"end",c:"s m"}));
 g+=`<path class="ax" d="M${x0},${y0} V${y0+h} H${x0+w}"/>`+T(x0+w/2,y0+h+34,xl,{c:"s"})+T(x0-40,y0+h/2,yl,{c:"s",r:-90});return {g,X,Y}}
const curve=(pts,col,wd=3,dash)=>`<path d="M${pts.map(p=>p.map(v=>v.toFixed(1)).join(",")).join(" L")}" style="fill:none;stroke:${col};stroke-width:${wd};stroke-linecap:round;stroke-linejoin:round${dash?";stroke-dasharray:"+dash:""}"/>`;
/* range slider (same look as the renal atlases) */
function sl(id,lab,min,max,step,unit){return `<label class="sl"><span>${lab} <b data-v="${id}">${ST[id]}</b> ${unit}</span><input type="range" min="${min}" max="${max}" step="${step}" value="${ST[id]}" data-k="${id}"></label>`}
function wireSl(){const s=cur;document.querySelectorAll('#tools-'+s.id+' input[type=range]').forEach(r=>r.oninput=()=>{ST[r.dataset.k]=+r.value;r.closest(".tools").querySelector('[data-v="'+r.dataset.k+'"]').textContent=r.value;document.getElementById("dia-"+s.id).innerHTML=s.draw()})}
/* section-size grid of option cards (used by caption panels) */
let IPH=0;
function infoPanel(x,y,w,title,sub,rows,c=CV.acc){const n=Math.floor((w-40)/5.7);let yy=y+(sub?62:46),body="";
 rows.forEach(r=>{const L=nLines(r,n);body+=`<circle cx="${x+17}" cy="${yy-3.5}" r="3" style="fill:${c}"/>`+wrapT(x+27,yy,r,n,"s",14);yy+=(L-1)*14+20});
 IPH=yy-y-6;return `<rect x="${x}" y="${y}" width="${w}" height="${IPH}" rx="14" style="fill:color-mix(in srgb,${c} 9%,var(--sb-surface));stroke:color-mix(in srgb,${c} 45%,transparent)"/>`+T(x+14,y+24,title,{a:"start",c:"bb"})+(sub?T(x+14,y+41,sub,{a:"start",c:"s m"}):"")+body}

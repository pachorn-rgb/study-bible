
/* ================= helpers ================= */
const T=(x,y,s,o={})=>`<text class="t${o.c?" "+o.c:""}" x="${x}" y="${y}" text-anchor="${o.a||"middle"}"${o.s?` font-size="${o.s}"`:""}${o.r?` transform="rotate(${o.r} ${x} ${y})"`:""}>${s}</text>`;
/* a blocked step in a pathway — the red cross, with the missing enzyme named above it.
   Every metabolic-disease picture marks its lesion this way so the lesson is the same shape. */
const blk=(x,y,lab,dy=-16)=>`<path d="M${x-9},${y-9} L${x+9},${y+9} M${x+9},${y-9} L${x-9},${y+9}" style="fill:none;stroke:var(--sb-bad);stroke-width:3.4;stroke-linecap:round"/>`+(lab?T(x,y+dy,lab,{c:"bad"}):"");
const TL=(x,y,ls,o={})=>ls.map((l,i)=>T(x,y+i*(o.lh||14),l,o)).join("");
const LD=(x1,y1,x2,y2)=>`<path class="ld" d="M${x1},${y1} L${x2},${y2}"/><circle class="ldd" cx="${x1}" cy="${y1}" r="1.8"/>`;
const F=(c,d,x="")=>`<path class="f ${c}" d="${d}" ${x}/>`;
const V=(c,d,w,x="")=>`<path class="vo" d="${d}" stroke-width="${w+2.2}" ${x}/><path class="v ${c}" d="${d}" stroke-width="${w}" ${x}/>`;
const C=(c,cx,cy,r)=>`<circle class="f ${c}" cx="${cx}" cy="${cy}" r="${r}"/>`;
const E=(c,cx,cy,rx,ry,rot=0)=>`<ellipse class="f ${c}" cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"${rot?` transform="rotate(${rot} ${cx} ${cy})"`:""}/>`;
function sm(p,closed=true){const n=p.length,Q=i=>p[(i+n)%n];let d=`M${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`;const last=closed?n:n-1;
 for(let i=0;i<last;i++){const a=closed?Q(i-1):p[Math.max(i-1,0)],b=Q(i),c=closed?Q(i+1):p[Math.min(i+1,n-1)],e=closed?Q(i+2):p[Math.min(i+2,n-1)];
  d+=` C${(b[0]+(c[0]-a[0])/6).toFixed(1)},${(b[1]+(c[1]-a[1])/6).toFixed(1)} ${(c[0]-(e[0]-b[0])/6).toFixed(1)},${(c[1]-(e[1]-b[1])/6).toFixed(1)} ${c[0].toFixed(1)},${c[1].toFixed(1)}`}
 return d+(closed?"Z":"")}
function rot(p,cx,cy,a){const c=Math.cos(a),s=Math.sin(a);return p.map(([x,y])=>[cx+(x-cx)*c-(y-cy)*s,cy+(x-cx)*s+(y-cy)*c])}
/* kidney bean: hilum on side (+1 right, -1 left), tilt in radians */
function beanPts(cx,cy,w,h,side=1,tilt=0,n=26){const p=[];for(let i=0;i<n;i++){const a=i/n*Math.PI*2,ca=Math.cos(a),sa=Math.sin(a);let x=cx+ca*w/2,y=cy+sa*h/2;
  if(ca*side>.55&&Math.abs(sa)<.5){x-=side*w*.2*(1-Math.abs(sa)/.5)}p.push([x,y])}return rot(p,cx,cy,tilt)}
const bean=(...a)=>sm(beanPts(...a));
const mir=(p,X=640)=>p.map(([x,y])=>[X-x,y]);
const DEFS=`<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--sb-ink2)"/></marker><marker id="ah2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--sb-ink2)"/></marker><linearGradient id="phg" x1="0" x2="1"><stop offset="0" stop-color="#ef4444"/><stop offset=".45" stop-color="#22c55e"/><stop offset=".55" stop-color="#22c55e"/><stop offset="1" stop-color="#6366f1"/></linearGradient></defs>`;
const svg=(body,vb="0 0 640 520")=>`<svg viewBox="${vb}" role="img" xmlns="http://www.w3.org/2000/svg">${DEFS}${body}</svg>`;




/* ================= pharmacology core (shared by every pharmacology atlas) ================= */
/* fa1 = First Aid Step 1, fa2 = First Aid Step 2 CK. CLAUDE.md names both books;
   they differ where they overlap, so a claim must say which one it came from.
   fa remains for pages not yet checked against a specific edition. */
const S={k:'<b class="sbb katzung">K</b>',p:'<b class="sbb pt">PT</b>',r:'<b class="sbb robbins">R</b>',fa:'<b class="sbb fa">FA</b>',fa1:'<b class="sbb fa">FA1</b>',fa2:'<b class="sbb fa">FA2</b>',g:'<b class="sbb guyton">G</b>',b:'<b class="sbb boron">B</b>',h:'<b class="sbb harrison">H</b>',x:'<b class="sbb gen">Gen</b>'};
const LEG={ag:["Agonist / activator","--d-ag"],bl:["Antagonist / blocker","--d-bl"],inh:["Enzyme / transporter inhibitor","--d-inh"],mab:["Monoclonal antibody","--d-mab"],st:["Steroid / hormone","--d-st"],mod:["Other / modulator","--d-mod"]};
let ST={labels:true,all:false};
let HL=[];
const SEC=[],GN={};
const on=k=>ST.all||HL.includes(k);
const tbl=(h,rows)=>`<table>${h?`<tr>${h.map(x=>`<th>${x}</th>`).join("")}</tr>`:""}${rows.map(r=>`<tr>${r.map(x=>`<td>${x}</td>`).join("")}</tr>`).join("")}</table>`;
function wrapT(x,y,s,n,c,lh=16,a="start"){const w=String(s).split(" ");const L=[];let cur="";w.forEach(t=>{if((cur+" "+t).trim().length>n&&cur){L.push(cur);cur=t}else cur=(cur+" "+t).trim()});if(cur)L.push(cur);
 return L.map((l,i)=>T(x,y+i*lh,l,{a,c})).join("")}
/* gradients + soft shadow/glow used by every target map */
const GR=(id,a,b,r)=>r?`<radialGradient id="${id}" cx=".38" cy=".32" r=".85"><stop offset="0" style="stop-color:var(${a})"/><stop offset="1" style="stop-color:var(${b})"/></radialGradient>`
 :`<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(${a})"/><stop offset="1" style="stop-color:var(${b})"/></linearGradient>`;
const PDEFS=`<defs>${GR("gCell","--p-cell-hi","--p-cell",1)}${GR("gEpi","--p-epi-hi","--p-epi")}${GR("gTh2","--p-th2-hi","--p-th2",1)}${GR("gEos","--p-eos-hi","--p-eos",1)}${GR("gMast","--p-mast-hi","--p-mast",1)}${GR("gGr","--p-gr-hi","--p-gr")}${GR("gLum","--p-lum-hi","--p-lum")}${GR("gTube","--p-tube-hi","--p-tube")}${GR("gCx","--p-cx","--p-med")}
<filter id="fGlow" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="5"/></filter>
<filter id="fSh" x="-20%" y="-40%" width="140%" height="200%"><feDropShadow dx="0" dy="1.6" stdDeviation="1.8" flood-opacity=".25"/></filter></defs>`;
const psvg=(b,vb)=>svg(PDEFS+b,vb);
/* action glyphs drawn inside each pill */
const ICON={ag:'<path d="M-3.6,0 H3.6 M0,-3.6 V3.6"/>',bl:'<path d="M-3,-4 V4 M-3,0 H4"/>',inh:'<path d="M-3,-3 L3,3 M3,-3 L-3,3"/>',mab:'<path d="M0,4.2 V0.2 M0,0.2 L-3.6,-3.8 M0,0.2 L3.6,-3.8"/>',st:'<path d="M-3.6,-2 L0,-4.1 L3.6,-2 L3.6,2 L0,4.1 L-3.6,2Z"/>',mod:'<circle r="2.4"/>'};
function pill(x,y,lab,kind,key,force){const w=Math.max(60,lab.length*6.3+36);const a=force||on(key);const x0=x-w/2;
 return `<g class="pill ${kind}${a?" on":" off"}"><rect x="${x0}" y="${y-12}" width="${w}" height="24" rx="12"/><circle class="pic" cx="${x0+13}" cy="${y}" r="8"/><g class="pig" transform="translate(${x0+13},${y})">${ICON[kind]}</g>${T(x0+27,y+4,lab,{a:"start",c:"pl"})}</g>`}
const glow=(x,y,key,r=15)=>onA(key)?`<circle class="glow" cx="${x}" cy="${y}" r="${r+3}"/><circle class="hring" cx="${x}" cy="${y}" r="${r+3}"/>`:"";
const rec=(x,y,lab,vert)=>`<rect class="p-rec" x="${x-(vert?9:7)}" y="${y-(vert?7:9)}" width="${vert?18:14}" height="${vert?14:18}" rx="5"/>`+(ST.labels&&lab?T(x,y-(vert?12:14),lab,{c:"s"}):"");
const arr=(d,c="")=>`<path class="arw ${c}" d="${d}"/>`;
const cellC=(x,y,r,g,lab,sub)=>`<circle class="p-imm" cx="${x}" cy="${y}" r="${r}" fill="url(#${g})"/>`+T(x,y+(sub?-1:4),lab,{c:"bh"})+(sub?T(x,y+13,sub,{c:"s m"}):"");
function cards(R,o={}){const W=o.w||640,hh=o.h||(R.length>6?50:R.length>4?58:66),gap=8;let b="",y=14;
 R.forEach(([n,dd,c])=>{b+=`<rect class="box ${c||""}" x="16" y="${y}" width="${W-32}" height="${hh}" rx="12"/>`+T(32,y+hh/2-4,n,{a:"start",c:"bh"})+T(32,y+hh/2+14,dd,{a:"start",c:"s"});y+=hh+gap});
 if(o.foot){b+=T(W/2,y+14,o.foot,{c:"h"});y+=24}return psvg(b,`0 0 ${W} ${y+6}`)}
function flowD(R,W=640){let b="",y=14;R.forEach(([n,dd,c],i)=>{b+=`<rect class="box ${c||""}" x="40" y="${y}" width="${W-80}" height="58" rx="14"/>`+`<circle class="stepn ${c||""}" cx="64" cy="${y+29}" r="12"/>`+T(64,y+33,i+1,{c:"sn"})+T(W/2+12,y+25,n,{c:"bh"})+T(W/2+12,y+44,dd,{c:"s"});
 if(i<R.length-1)b+=arr(`M${W/2},${y+60} L${W/2},${y+76}`);y+=80});return psvg(b,`0 0 ${W} ${y}`)}
const MAPTOOLS=[["all","Show all drugs"]];

/* ---------- overview mind map: the landing view of every pharmacology atlas ---------- */
let MMRO=null;
function mindMap(){const gs=GROUPS.filter(g=>g!=="0"),half=Math.ceil(gs.length/2),tops=SEC.filter(s=>!s.mind),n=tops.filter(s=>SEEN[s.id]).length,C=2*Math.PI*52;
 const block=(g,side)=>{const list=SEC.filter(s=>s.k===g),gi=GROUPS.indexOf(g),done=list.filter(s=>SEEN[s.id]).length;
  return `<div class="mmb ${side}${g[0]==="x"?" ext":""}" style="--gc:var(--g${gi})"><button class="mmg" type="button" data-go="${list[0].id}"><b>${GN[g]}</b><small>${done}/${list.length}</small></button><div class="mml">${list.map(s=>`<button class="mmleaf${SEEN[s.id]?" seen":""}" type="button" data-go="${s.id}"><span class="mt">${s.mm||s.t}</span>${s.drugs?`<span class="md">${s.drugs.split(" · ").slice(0,3).join(" · ")}</span>`:""}<span class="ma">${(s.act||[]).map(a=>`<i style="background:var(--d-${a})" title="${LEG[a][0]}"></i>`).join("")}<em>✓</em></span></button>`).join("")}</div></div>`};
 setTimeout(mmInit,0);
 return `<div class="mmwrap" id="mmwrap"><svg class="mmlinks" id="mmlinks" aria-hidden="true"></svg>
 <div class="mmside l">${gs.slice(half).map(g=>block(g,"l")).join("")}</div>
 <div class="mmroot"><div class="mmrc"><svg viewBox="0 0 120 120" aria-hidden="true"><circle class="rtrack" cx="60" cy="60" r="52"/>${n?`<circle class="rbar" cx="60" cy="60" r="52" stroke-dasharray="${C*n/tops.length} ${C}" transform="rotate(-90 60 60)"/>`:""}</svg><div><small>${ATLAS.sys}</small><b>${ATLAS.root}</b><span>${n}/${tops.length} seen</span></div></div></div>
 <div class="mmside r">${gs.slice(0,half).map(g=>block(g,"r")).join("")}</div></div>`}
function mmInit(){const w=document.getElementById("mmwrap");if(!w)return;mmLinks();if(!MMRO&&window.ResizeObserver){MMRO=new ResizeObserver(()=>mmLinks())}if(MMRO){MMRO.disconnect();MMRO.observe(w)}}
function mmLinks(){const w=document.getElementById("mmwrap"),sv=document.getElementById("mmlinks");if(!w||!sv)return;
 const tree=w.clientWidth<860;w.classList.toggle("tree",tree);if(tree){sv.innerHTML="";return}
 const R=w.getBoundingClientRect(),rel=el=>{const r=el.getBoundingClientRect();return{l:r.left-R.left,r:r.right-R.left,y:r.top-R.top+r.height/2}};
 const root=rel(w.querySelector(".mmrc"));let p="";
 const cv=(x1,y1,x2,y2,c,cls)=>{const m=(x1+x2)/2;return `<path class="${cls}" style="stroke:${c}" d="M${x1},${y1} C${m},${y1} ${m},${y2} ${x2},${y2}"/>`};
 w.querySelectorAll(".mmb").forEach(b=>{const r=b.classList.contains("r"),c=getComputedStyle(b).getPropertyValue("--gc"),g=rel(b.querySelector(".mmg"));
  p+=r?cv(root.r-6,root.y,g.l,g.y,c,"lk1"):cv(root.l+6,root.y,g.r,g.y,c,"lk1");
  b.querySelectorAll(".mmleaf").forEach(lf=>{const q=rel(lf);p+=r?cv(g.r,g.y,q.l,q.y,c,"lk2"):cv(g.l,g.y,q.r,q.y,c,"lk2")})});
 sv.setAttribute("width",R.width);sv.setAttribute("height",R.height);sv.innerHTML=p}
document.addEventListener("click",e=>{const b=e.target.closest("[data-go]");if(!b)return;e.preventDefault();go(b.dataset.go,true,true)});
document.addEventListener("pointerover",e=>{const b=e.target.closest(".mmb");document.querySelectorAll(".mmb.hot").forEach(x=>x!==b&&x.classList.remove("hot"));if(b)b.classList.add("hot")});

/* called after the atlas content is defined */
function atlasFinish(){
 /* First Aid = core path; anything listed in EXTRA becomes a "เสริม" group after the core */
 if(typeof EXTRA!=="undefined"&&EXTRA.length){const core=[],ext=[];SEC.forEach(s=>{if(EXTRA.includes(s.id)){s.extra=true;const nk="x"+s.k;if(!GN[nk])GN[nk]="เสริม · "+GN[s.k].replace(/^เสริม · /,"");s.k=nk;ext.push(s)}else core.push(s)});
  SEC.length=0;core.forEach(s=>SEC.push(s));const ord=[...new Set(ext.map(s=>s.k))];ord.forEach(k=>ext.filter(s=>s.k===k).forEach(s=>SEC.push(s)))}
 GN["0"]="Overview";SEC.unshift({id:"map",k:"0",t:ATLAS.mapT,mind:true,leg:[],draw:mindMap,notes:()=>""});
 const el=document.getElementById("pstats");if(el){const tops=SEC.filter(s=>!s.mind),drugs=new Set();tops.forEach(s=>(s.drugs||"").split(" · ").forEach(d=>d&&drugs.add(d)));
  el.innerHTML=`<span><b>${new Set(tops.map(s=>s.k)).size}</b> กลุ่ม</span><span><b>${tops.length}</b> หัวข้อ</span>${ATLAS.drugs&&drugs.size?`<span><b>${drugs.size}+</b> ยาต้นแบบ</span>`:""}`}}

/* ---------- auto-layout target map: sites (panels) → targets → drugs ----------
   spec: [{n:"Heart",s:"myocyte",tone:"cell",t:[{k:"key",l:"β₁ receptor",d:[["Metoprolol","bl"],...]}]}] */
const TONE={cell:"gCell",epi:"gEpi",blue:"gTh2",rose:"gEos",violet:"gMast",gold:"gGr",tube:"gTube",plain:"gLum"};
function laneMap(spec,o={}){const W=760,cols=o.cols||Math.min(3,spec.length),gap=12,lw=(W-20-(cols-1)*gap)/cols;let b="",y0=10;
 const pw=l=>Math.max(60,l.length*6.3+36);
 for(let r=0;r<spec.length;r+=cols){const row=spec.slice(r,r+cols);
  const lay=row.map(p=>{let y=50;const items=p.t.map(t=>{const lines=[[]];let x=0;t.d.forEach(d=>{const w=pw(d[0]);if(x+w>lw-20&&lines[lines.length-1].length){lines.push([]);x=0}lines[lines.length-1].push([d,x,w]);x+=w+6});
    const it={t,y,lines};y+=34+lines.length*28;return it});return {p,items,h:y+4}});
  const H=Math.max(...lay.map(l=>l.h));
  lay.forEach((l,i)=>{const x0=10+i*(lw+gap);
   b+=`<rect class="lane" x="${x0}" y="${y0}" width="${lw}" height="${H}" rx="16" fill="url(#${TONE[l.p.tone||"cell"]})"/>`+T(x0+14,y0+24,l.p.n,{a:"start",c:"bh"})+(l.p.s?T(x0+14,y0+40,l.p.s,{a:"start",c:"s m"}):"");
   l.items.forEach(it=>{const yy=y0+it.y;b+=glow(x0+20,yy+8,it.t.k,9)+`<rect class="p-rec" x="${x0+13}" y="${yy+1}" width="14" height="14" rx="4"/>`+T(x0+34,yy+13,it.t.l,{a:"start",c:"s"});
    it.lines.forEach((ln,j)=>ln.forEach(([d,dx,w])=>{b+=pill(x0+12+dx+w/2,yy+36+j*28,d[0],d[1],d[2]||it.t.k)}))})});
  y0+=H+gap}
 return psvg(b,`0 0 ${W} ${y0}`)}
const LMAP=(spec,o)=>keys=>()=>{HL=keys;return laneMap(spec,o)};

/* compact drawing helpers for system target maps */
const panel=(x,y,w,h,t)=>`<rect class="p-panel" x="${x}" y="${y}" width="${w}" height="${h}" rx="16"/>`+T(x+14,y+22,t,{a:"start",c:"bh pt"});
const nb=(x,y,w,h,t,s,cls="")=>`<rect class="p-enz ${cls}" x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" rx="9"/>`+T(x,y+(s?-2:4),t,{c:"bh"})+(s?T(x,y+12,s,{c:"s m"}):"");
const onA=k=>Array.isArray(k)?k.some(on):on(k);
const nbh=(x,y,w,h,t,s,key,cls="")=>nb(x,y,w,h,t,s,cls+(onA(key)?" hot":""))+(onA(key)?`<rect class="glow" x="${x-w/2-6}" y="${y-h/2-6}" width="${w+12}" height="${h+12}" rx="13"/>`:"");
const ln=(x1,y1,x2,y2)=>arr(`M${x1},${y1} L${x2},${y2}`);
const MAPOF=(fn)=>keys=>()=>{HL=keys;return fn()};

/* Keep only the listed sections, in this order, under new group keys.
   G = {sectionId: groupKey}, M = optional {sectionId: mind-map label}. Used by atlases assembled from shared section libraries. */
function regroup(G,M){const m=new Map(SEC.map(s=>[s.id,s]));SEC.length=0;Object.keys(G).forEach(id=>{const s=m.get(id);if(!s)throw Error("regroup: no section "+id);s.k=G[id];if(M&&M[id])s.mm=M[id];SEC.push(s)})}

/* Helpers shared by the original renal pathology atlases (Robbins Ch 20–21, Harrison Ch 319–331).
   Included inside each source block so their local helper names never clash. */
/* ================= physiology helpers ================= */
Object.assign(S,{g:'<b class="sbb guyton">G</b>',r:'<b class="sbb robbins">R</b>',h:'<b class="sbb harrison">H</b>',x:'<b class="sbb gen">Gen</b>'});
Object.assign(LEG,{na:["Na⁺","--s-na"],k:["K⁺","--s-k"],cl:["Cl⁻","--s-cl"],h2o:["H₂O","--s-h2o"],glc:["Glucose","--s-glc"],h:["H⁺","--s-h"],hco3:["HCO₃⁻","--s-hco3"],urea:["Urea","--s-urea"],ca:["Ca²⁺","--s-ca"],pi:["Phosphate","--s-pi"],nh4:["NH₄⁺","--s-nh4"],art:["Arteriole","--a-art"]});
Object.assign(ST,{labels:true,pg:60,pb:18,pic:32,kf:12.5,map:100,glc:100,step:0,pco2:40,hco3:24,ag:12,kfac:"diet",chart:"tfp",mic:"normal",dis:"aki",ra:1,re:1});
const f0=v=>Math.round(v),f1=v=>(Math.round(v*10)/10).toFixed(1);
function axes(x0,y0,w,h,xr,yr,xt,yt,xl,yl){const X=v=>x0+(v-xr[0])/(xr[1]-xr[0])*w,Y=v=>y0+h-(v-yr[0])/(yr[1]-yr[0])*h;
 let g=`<rect class="plot" x="${x0}" y="${y0}" width="${w}" height="${h}"/>`;
 xt.forEach(v=>g+=`<line class="gl" x1="${X(v)}" y1="${y0}" x2="${X(v)}" y2="${y0+h}"/>`+T(X(v),y0+h+16,v,{c:"s m"}));
 yt.forEach(v=>g+=`<line class="gl" x1="${x0}" y1="${Y(v)}" x2="${x0+w}" y2="${Y(v)}"/>`+T(x0-6,Y(v)+4,v,{a:"end",c:"s m"}));
 g+=`<path class="ax" d="M${x0},${y0} V${y0+h} H${x0+w}"/>`+T(x0+w/2,y0+h+36,xl,{c:"s"})+T(x0-42,y0+h/2,yl,{c:"s",r:-90});
 return {g,X,Y}}
const line=(pts,c,o={})=>`<path class="ln ${c}" d="M${pts.map(p=>p.map(v=>v.toFixed(1)).join(",")).join(" L")}"${o.dash?' stroke-dasharray="6 4"':""}/>`;
const pl=(A,f,a,b,c,o)=>line(fpts(f,a,b).map(([x,y])=>[A.X(x),A.Y(y)]),c,o);
const fpts=(f,a,b,n=60)=>[...Array(n+1)].map((_,i)=>{const x=a+(b-a)*i/n;return [x,f(x)]});
const B=(x,y,w,h,ttl,lines,c="")=>`<rect class="box ${c}" x="${x}" y="${y}" width="${w}" height="${h}" rx="10"/>`+T(x+w/2,y+20,ttl,{c:"bh"})+lines.map((l,i)=>T(x+w/2,y+38+i*15,l,{c:"s"})).join("");
const AR=(x1,y1,x2,y2,c="")=>`<path class="arw ${c}" d="M${x1},${y1} L${x2},${y2}"/>`;
const ion=(x,y,k,txt)=>`<circle class="ion" cx="${x}" cy="${y}" r="11" style="fill:var(--s-${k})"/>`+T(x,y+4,txt||LEG[k][0],{c:"ion"});
/* epithelial cell: lumen left, blood right */
function cell(x,y,w,h,lab){return `<rect class="lumen" x="${x-120}" y="${y-10}" width="120" height="${h+20}" rx="10"/><rect class="blood" x="${x+w}" y="${y-10}" width="120" height="${h+20}" rx="10"/><rect class="cell" x="${x}" y="${y}" width="${w}" height="${h}" rx="18"/>`+
 (ST.labels?T(x-60,y+8,"Lumen",{c:"s m"})+T(x+w+60,y+8,"Blood",{c:"s m"})+(lab?T(x+w/2,y+h+26,lab,{c:"b"}):""):"")}
/* transporter on membrane: side 'a' apical (x) or 'b' basolateral; kind: pump, co, ex, ch */
function tr(x,y,kind,lab,ions,dir=1){const k=ions||[];let g=`<g class="tr ${kind}"><circle cx="${x}" cy="${y}" r="15"/>${kind==="pump"?T(x,y+4,"ATP",{c:"atp"}):""}</g>`;
 k.forEach(([io,dx,dy,ddir],i)=>{g+=`<path class="flux" style="stroke:var(--s-${io})" d="M${x-28*(ddir??dir)},${y+dy} L${x+28*(ddir??dir)},${y+dy}" marker-end="url(#ah2)"/>`+T(x+(ddir??dir)*40,y+dy+4,LEG[io][0],{a:(ddir??dir)>0?"start":"end",c:"s ionl"}).replace('class="t','style="fill:var(--s-'+io+')" class="t')});
 if(ST.labels&&lab)g+=T(x,y-22,lab,{c:"s"});return g}
const pctBar=(x,y,w,segs)=>{let g="",cx=x;segs.forEach(([p,c,l])=>{const ww=w*p/100;g+=`<rect x="${cx}" y="${y}" width="${ww}" height="26" style="fill:var(${c})" class="seg"/>`+(ww>34?T(cx+ww/2,y+17,l,{c:"s w"}):"");cx+=ww});return g};
function sl(id,lab,min,max,step,unit){return `<label class="sl"><span>${lab} <b data-v="${id}">${ST[id]}</b> ${unit}</span><input type="range" min="${min}" max="${max}" step="${step}" value="${ST[id]}" data-k="${id}"></label>`}
function wireSl(after){const s=cur;document.querySelectorAll('#tools-'+s.id+' input[type=range]').forEach(r=>r.oninput=()=>{ST[r.dataset.k]=+r.value;r.closest(".tools").querySelector('[data-v="'+r.dataset.k+'"]').textContent=r.value;document.getElementById("dia-"+s.id).innerHTML=s.draw();if(after)after()})}
const live=()=>{const el=document.getElementById("live");if(el&&cur.live)el.innerHTML=cur.live()};


/* ================= glomerular lesion engine: EM · IF · LM ================= */
Object.assign(ST,{gv:"em"});
const GV=[["gv",[["em","EM"],["if","IF"],["lm","LM"]]]];
function rng(s){return()=>{s=(s*16807)%2147483647;return(s-1)/2147483646}}
/* EM: a capillary wall as the electron microscope sees it — lumen above, urinary space below,
   every layer following one meandering baseline so nothing reads as a stack of rectangles.
   o: {sub_ep:'humps'|'spikes', sub_en, mes, intra, linear, eff, split, thin, thick, dbl, fib, neut, nod} */
function glomEM(o={}){const r=rng(7),W=640,H=420;let b="";
 /* one wavy baseline; every layer is an offset of it */
 const wav=x=>Math.sin(x/104)*7.5+Math.sin(x/41+1.3)*3.2+Math.sin(x/19+.7)*1.1;
 const mid=198,th=o.thick?44:o.thin?12:26;            /* GBM mid-line and thickness */
 const top=x=>mid-th/2+wav(x),bot=x=>mid+th/2+wav(x);
 const epi=o.sub_ep==='spikes'?19:(o.eff&&o.sub_ep==='humps')?30:1;
 const endoT=x=>top(x)-13,fpT=x=>bot(x)+epi,fpH=o.eff?17:26,fpB=x=>fpT(x)+fpH;
 const P=(f,a,c,st=8)=>{const p=[];for(let x=a;x<c;x+=st)p.push([x,f(x)]);p.push([c,f(c)]);return p};
 const J=p=>p.map(([x,y])=>x.toFixed(1)+","+y.toFixed(1)).join(" L");
 const area=(f1,f2,a=0,c=W)=>"M"+J(P(f1,a,c))+" L"+J(P(f2,a,c).reverse())+"Z";
 /* a granular electron-dense deposit */
 const dep=(cx,cy,rx,ry)=>{let g=`<ellipse class="em-dep" cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}"/>`;
  for(let i=0;i<9;i++){const a=r()*6.283,k=Math.sqrt(r())*.78;g+=`<circle class="em-gran" cx="${(cx+Math.cos(a)*rx*k).toFixed(1)}" cy="${(cy+Math.sin(a)*ry*k).toFixed(1)}" r="${(1.1+r()*2).toFixed(1)}"/>`}return g};
 const lead=(x,y1,y2)=>`<path class="em-lead" d="M${x},${y1.toFixed(1)} L${x},${y2.toFixed(1)}"/>`;
 const MX=150,mesR=y=>140-26*Math.sin(y/70);          /* mesangium bulging into the angle */
 b+=`<rect class="em-bg" x="0" y="0" width="${W}" height="${H}"/>`;
 /* ---- capillary lumen ---- */
 b+=`<path class="em-lum" d="M${mesR(0).toFixed(1)},0 L${W},0 L${W},${endoT(W).toFixed(1)} L${J(P(endoT,MX,W).reverse())} L${J([...Array(9)].map((_,i)=>{const y=endoT(MX)*(8-i)/8;return [mesR(y),y]}))}Z"/>`;
 /* red cells: biconcave, deformed by the loop */
 [[300,78,48,11],[476,62,42,-13],[212,116,34,7]].forEach(([x,y,R,s])=>{
  b+=`<ellipse class="em-rbc" cx="${x}" cy="${y}" rx="${R}" ry="${(R*.56).toFixed(1)}" transform="rotate(${s} ${x} ${y})"/>`;
  b+=`<ellipse class="em-rbcp" cx="${x}" cy="${y}" rx="${(R*.44).toFixed(1)}" ry="${(R*.24).toFixed(1)}" transform="rotate(${s} ${x} ${y})"/>`});
 if(o.neut)[[372,124],[536,116],[236,44]].forEach(([x,y])=>{
  b+=`<circle class="em-pmn" cx="${x}" cy="${y}" r="24"/>`;
  [[-11,-5,8],[7,-9,7],[3,10,7]].forEach(([dx,dy,rr])=>b+=`<circle class="em-n" cx="${x+dx}" cy="${y+dy}" r="${rr}"/>`);
  for(let i=0;i<18;i++){const a=r()*6.283,k=Math.sqrt(r())*20;b+=`<circle class="em-grn" cx="${(x+Math.cos(a)*k).toFixed(1)}" cy="${(y+Math.sin(a)*k).toFixed(1)}" r="${(1+r()*1.4).toFixed(1)}"/>`}});
 /* ---- mesangium: matrix + a cell with processes ---- */
 b+=`<path class="em-mes" d="M0,0 L${mesR(0).toFixed(1)},0 L`+[...Array(22)].map((_,i)=>{const y=(i+1)/22*(top(0)+6);return mesR(y).toFixed(1)+","+y.toFixed(1)}).join(" L")+` L0,${(top(0)+6).toFixed(1)}Z"/>`;
 b+=`<path class="em-mc" d="M12,44 C54,32 94,52 98,88 C102,124 76,156 42,160 C14,163 2,140 2,112Z"/><ellipse class="em-n" cx="50" cy="100" rx="29" ry="20"/>`;
 if(o.nod){const ny=118;b+=`<circle class="em-nod" cx="58" cy="${ny}" r="40"/>`;
  for(let i=0;i<46;i++){const a=r()*6.283,k=Math.sqrt(r())*37,x=58+Math.cos(a)*k,y=ny+Math.sin(a)*k;b+=`<line class="em-mfib" x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${(x+5).toFixed(1)}" y2="${(y+3).toFixed(1)}"/>`}}
 if(o.mes)for(let i=0;i<8;i++){const y=46+r()*130,x=12+r()*(mesR(y)-30);b+=dep(x,y,8+r()*7,6+r()*4)}
 if(o.fib)for(let i=0;i<70;i++){const y=40+r()*(top(0)-36),x=4+r()*(mesR(y)-6);b+=`<line class="em-fib" x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${(x+7).toFixed(1)}" y2="${(y+(r()-.5)*7).toFixed(1)}"/>`}
 /* ---- urinary space ---- */
 b+=`<path class="em-us" d="M`+J(P(bot,0,W))+` L${W},${H} L0,${H}Z"/>`;
 /* ---- endothelium: an attenuated sheet interrupted by fenestrae ---- */
 {let x=120;while(x<W){const w=18+r()*16;b+=`<path class="em-endo" d="${area(endoT,top,x,Math.min(x+w,W))}"/>`;x+=w+7}}
 /* ---- GBM: lamina rara interna · lamina densa · lamina rara externa ---- */
 const dT=x=>top(x)+th*.3,dB=x=>bot(x)-th*.3;
 b+=`<path class="em-lr" d="${area(top,bot)}"/>`;
 if(o.split){/* Alport: the densa splits into interweaving lamellae */
  for(let k=0;k<4;k++){const f1=x=>dT(x)-th*.06+k*th*.13+Math.sin(x/23+k*1.7)*th*.1;
   b+=`<path class="em-densa" d="${area(f1,x=>f1(x)+th*.11)}"/>`}
  for(let k=0;k<3;k++){const f1=x=>dT(x)+k*th*.17-Math.sin(x/17+k)*th*.13;
   b+=`<path class="em-densa" style="opacity:.65" d="${area(f1,x=>f1(x)+th*.08)}"/>`}}
 else b+=`<path class="em-densa" d="${area(dT,dB)}"/>`;
 if(o.intra)b+=`<path class="em-dense" d="${area(x=>dT(x)+th*.07,x=>dB(x)-th*.07)}"/>`;
 if(o.linear)b+=`<path class="em-lin" d="${area(x=>top(x)+th*.42,x=>top(x)+th*.58)}"/>`;
 if(o.fib)for(let i=0;i<60;i++){const x=MX+r()*(W-MX-10),y=top(x)+r()*th;b+=`<line class="em-fib" x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${(x+8).toFixed(1)}" y2="${(y+(r()-.5)*5).toFixed(1)}"/>`}
 /* ---- subendothelial deposits ---- */
 if(o.sub_en)for(let x=MX+36;x<W-16;x+=48+r()*32)b+=dep(x,top(x)+th*.16,11+r()*9,th*.2+2);
 /* ---- double contour: new basement membrane with mesangial cytoplasm interposed ---- */
 if(o.dbl){b+=`<path class="em-mesx" d="${area(x=>top(x)-9,x=>top(x)-2,MX,W)}"/>`;
  b+=`<path class="em-densa" d="${area(x=>top(x)-14,x=>top(x)-9.5,MX,W)}"/>`}
 /* ---- subepithelial deposits on the outer surface ---- */
 const busy=[];
 if(o.sub_ep==="humps")[214,352,498].forEach(x=>{const w=28,h=27;busy.push([x-w-5,x+w+5]);
  b+=`<path class="em-dep" d="M${x-w},${bot(x-w).toFixed(1)} C${(x-w*.92).toFixed(1)},${(bot(x)+h).toFixed(1)} ${(x+w*.92).toFixed(1)},${(bot(x)+h).toFixed(1)} ${x+w},${bot(x+w).toFixed(1)}Z"/>`;
  for(let i=0;i<11;i++){const a=r()*3.14,k=Math.sqrt(r());b+=`<circle class="em-gran" cx="${(x-Math.cos(a)*w*.68*k).toFixed(1)}" cy="${(bot(x)+3+Math.sin(a)*h*.58*k).toFixed(1)}" r="${(1.1+r()*2).toFixed(1)}"/>`}});
 if(o.sub_ep==="spikes")for(let x=MX+20;x<W-18;x+=44){
  b+=dep(x,bot(x)+8,12,8);
  [-16,16].forEach(dx=>b+=`<path class="em-densa" d="M${(x+dx-3.5).toFixed(1)},${bot(x+dx).toFixed(1)} L${(x+dx).toFixed(1)},${(bot(x+dx)+17).toFixed(1)} L${(x+dx+3.5).toFixed(1)},${bot(x+dx).toFixed(1)}Z"/>`)}
 /* ---- podocyte foot processes ---- */
 if(o.eff){b+=`<path class="em-pod" d="${area(fpT,x=>fpB(x)+2.5*Math.sin(x/13))}"/>`;
  [84,262,430,588].forEach(x=>b+=`<path class="em-pod" d="M${x-26},${fpB(x).toFixed(1)} C${x-22},${(fpB(x)+15).toFixed(1)} ${x+22},${(fpB(x)+15).toFixed(1)} ${x+26},${fpB(x).toFixed(1)}Z"/>`)}
 else for(let x=10;x<W-6;x+=21){if(busy.some(([a,c])=>x>a&&x<c))continue;
  const y=fpT(x),h=fpH*(.86+r()*.26);
  b+=`<path class="em-pod" d="M${x-8},${y.toFixed(1)} C${(x-9).toFixed(1)},${(y+h*.7).toFixed(1)} ${(x-7).toFixed(1)},${(y+h).toFixed(1)} ${x},${(y+h).toFixed(1)} C${(x+7).toFixed(1)},${(y+h).toFixed(1)} ${(x+9).toFixed(1)},${(y+h*.7).toFixed(1)} ${x+8},${y.toFixed(1)}Z"/>`;
  b+=`<line class="em-slit" x1="${(x+10.5).toFixed(1)}" y1="${(fpT(x+10.5)+1).toFixed(1)}" x2="${(x+10.5).toFixed(1)}" y2="${(fpT(x+10.5)+6).toFixed(1)}"/>`}
 /* ---- the podocyte body these processes arise from ---- */
 {const cx=492,y0=fpB(cx)-2;
  b+=`<path class="em-pod" d="M${cx-80},${(y0+5).toFixed(1)} C${cx-58},${(y0-5).toFixed(1)} ${cx+58},${(y0-5).toFixed(1)} ${cx+80},${(y0+5).toFixed(1)} C${cx+95},${(y0+34).toFixed(1)} ${cx+56},${(y0+58).toFixed(1)} ${cx},${(y0+58).toFixed(1)} C${cx-56},${(y0+58).toFixed(1)} ${cx-95},${(y0+34).toFixed(1)} ${cx-80},${(y0+5).toFixed(1)}Z"/>`;
  b+=`<ellipse class="em-n" cx="${cx}" cy="${(y0+32).toFixed(1)}" rx="40" ry="18"/>`;
  for(let i=0;i<22;i++){const a=r()*6.283,k=Math.sqrt(r());b+=`<circle class="em-chr" cx="${(cx+Math.cos(a)*38*k).toFixed(1)}" cy="${(y0+32+Math.sin(a)*16*k).toFixed(1)}" r="${(1.4+r()*2).toFixed(1)}"/>`}
  b+=T(cx-62,(y0+20).toFixed(1),"Podocyte",{c:"s m"})}
 /* ---- EM grain over everything ---- */
 for(let i=0;i<330;i++)b+=`<circle class="em-gr" cx="${(r()*W).toFixed(1)}" cy="${(r()*H).toFixed(1)}" r="${(.6+r()*1.3).toFixed(1)}"/>`;
 /* ---- labels ---- */
 if(ST.labels){
  b+=T(404,28,"Capillary lumen",{c:"s m"})+T(66,22,"Mesangium",{c:"s m"})+T(632,344,"Urinary (Bowman) space",{a:"end",c:"s m"})
   +T(MX+10,endoT(MX+30)-9,"Endothelium (fenestrated)",{a:"start",c:"s m"});
  [[o.split?"GBM split · basket-weave":o.thin?"GBM บาง (thin basement membrane)":o.thick?"GBM หนาสม่ำเสมอ":"GBM · lamina densa ตรงกลาง",118,mid+wav(118)],
   [o.eff?"Foot processes effaced (แบนติดกัน)":"Foot processes + slit diaphragm",286,fpB(286)-6]
  ].forEach(([t,x,y],i)=>{const ly=318+i*28;b+=lead(x,y+4,ly-11)+T(x,ly,t,{c:"s"})});
  const L=[];
  if(o.sub_ep==="humps")L.push(["subepithelial humps",214,bot(214)+27]);
  if(o.sub_ep==="spikes")L.push(["subepithelial deposits + GBM spikes",MX+64,bot(MX+64)+16]);
  if(o.sub_en)L.push(["subendothelial deposits",MX+84,top(MX+84)+6]);
  if(o.dbl)L.push(["double contour + mesangial interposition",400,top(400)-14]);
  if(o.intra)L.push(["dense deposits (intramembranous)",400,mid+wav(400)]);
  if(o.linear)L.push(["linear IgG along GBM",400,mid+wav(400)]);
  L.forEach(([t,x,y],i)=>{const ly=370+i*24;b+=lead(x,y+4,ly-11)+T(x,ly,t,{c:"bad"})});
  const M=[];
  if(o.mes)M.push("mesangial deposits");
  if(o.fib)M.push("random fibrils");
  if(o.nod)M.push("matrix nodule (Kimmelstiel–Wilson)");
  M.forEach((t,i)=>b+=T(8,192+i*18,t,{a:"start",c:"bad"}))}
 return b}
/* IF: one glomerulus, pattern: granular | linear | mesangial | c3 | none | fullhouse */
function glomIF(p){const r=rng(11);let b=`<rect class="if-bg" x="0" y="0" width="640" height="420"/>`;const cx=320,cy=210,R=170;
 b+=`<circle class="if-tuft" cx="${cx}" cy="${cy}" r="${R}"/>`;
 const loops=[];for(let i=0;i<14;i++){const a=i/14*Math.PI*2,k=R*(.45+.35*(i%2));loops.push([cx+Math.cos(a)*k,cy+Math.sin(a)*k,R*.24])}
 if(p==="linear")loops.forEach(([x,y,rr])=>b+=`<circle class="if-lin" cx="${x}" cy="${y}" r="${rr}"/>`);
 else if(p==="mesangial"){for(let i=0;i<60;i++){const a=r()*Math.PI*2,k=r()*R*.55;b+=`<circle class="if-dot" cx="${cx+Math.cos(a)*k}" cy="${cy+Math.sin(a)*k}" r="${4+r()*5}"/>`}
  for(let i=0;i<6;i++){const a=i/6*Math.PI*2;b+=`<path class="if-br" d="M${cx},${cy} L${cx+Math.cos(a)*R*.7},${cy+Math.sin(a)*R*.7}"/>`}}
 else if(p&&p!=="none")loops.forEach(([x,y,rr])=>{for(let i=0;i<14;i++){const a=i/14*Math.PI*2;b+=`<circle class="if-dot" cx="${x+Math.cos(a)*rr}" cy="${y+Math.sin(a)*rr}" r="${p==="c3"?3.5:4.5+r()*3}"/>`}});
 b+=T(cx,404,{granular:"Granular (lumpy-bumpy) IgG + C3",linear:"Linear IgG along GBM",mesangial:"Mesangial IgA (± C3)",c3:"C3 only (no Ig)",none:"Negative / no deposits",fullhouse:"‘Full house’ IgG IgA IgM C3 C1q"}[p]||p,{c:"if-t"});return b}
/* LM: glomerulus with features */
function glomLM(f={}){const r=rng(3);let b=`<rect class="lm-bg" x="0" y="0" width="640" height="420"/>`;const cx=320,cy=210,R=180;
 b+=`<circle class="lm-us" cx="${cx}" cy="${cy}" r="${R}"/><circle class="lm-cap" cx="${cx}" cy="${cy}" r="${R}"/>`;
 if(f.cres)b+=`<path class="lm-cres" d="M${cx-R+4},${cy} A${R-4},${R-4} 0 0 1 ${cx+R*.4},${cy-R*.9} C${cx+R*.1},${cy-R*.6} ${cx-R*.55},${cy-R*.35} ${cx-R*.6},${cy+R*.1}Z"/>`;
 const TR=f.cres?R*.62:R*.86,tc=f.cres?[cx+30,cy+30]:[cx,cy];
 b+=`<circle class="lm-tuft${f.scl?"":""}" cx="${tc[0]}" cy="${tc[1]}" r="${TR}"/>`;
 const N=f.prolif?26:f.normal===false?14:16;for(let i=0;i<N;i++){const k=Math.sqrt((i+.5)/N)*TR*.85,a=i*2.4,x=tc[0]+Math.cos(a)*k,y=tc[1]+Math.sin(a)*k;
  b+=`<circle class="lm-loop${f.thick?" thick":""}${f.wire&&i%3===0?" wire":""}" cx="${x}" cy="${y}" r="${TR*(f.prolif?.08:.13)}"/>`}
 const nn=f.prolif?140:40;for(let i=0;i<nn;i++){const a=r()*Math.PI*2,k=r()*TR*.9;b+=`<circle class="lm-nu" cx="${tc[0]+Math.cos(a)*k}" cy="${tc[1]+Math.sin(a)*k}" r="${f.prolif?3.6:3}"/>`}
 if(f.neut)for(let i=0;i<20;i++){const a=r()*Math.PI*2,k=r()*TR*.8;b+=`<circle class="lm-pmn" cx="${tc[0]+Math.cos(a)*k}" cy="${tc[1]+Math.sin(a)*k}" r="4"/>`}
 if(f.scl)b+=`<path class="lm-scl" d="M${tc[0]},${tc[1]} L${tc[0]+TR},${tc[1]-20} A${TR},${TR} 0 0 1 ${tc[0]+20},${tc[1]+TR}Z"/>`;
 if(f.nod)[[-60,-40],[50,30],[-10,80]].forEach(([dx,dy])=>b+=`<circle class="lm-nod" cx="${tc[0]+dx}" cy="${tc[1]+dy}" r="${TR*.2}"/>`);
 if(f.col)b+=`<circle class="lm-col" cx="${tc[0]}" cy="${tc[1]}" r="${TR*.55}"/>`;
 if(ST.labels){const l=[];if(f.prolif)l.push("hypercellular (proliferation)");if(f.cres)l.push("crescent ใน Bowman space");if(f.scl)l.push("segmental sclerosis");if(f.nod)l.push("nodules (Kimmelstiel–Wilson)");if(f.thick)l.push("capillary walls หนา");if(f.wire)l.push("wire loops");if(f.neut)l.push("neutrophils");if(f.col)l.push("collapsed tuft + podocyte hyperplasia");if(!l.length)l.push("LM เกือบปกติ");
  l.forEach((t2,i)=>b+=T(14,24+i*18,t2,{a:"start",c:"s lm-t"}))}
 return b}
/* one disease = config for all three views + summary strip */
function gDraw(D){let b=ST.gv==="if"?glomIF(D.if):ST.gv==="lm"?glomLM(D.lm):glomEM(D.em);
 const row=D.sum||[];if(row.length){b+=`<rect class="gsum" x="0" y="420" width="640" height="${24+row.length*20}"/>`;row.forEach(([k,v],i)=>b+=T(14,442+i*20,k,{a:"start",c:"bh"})+T(84,442+i*20,v,{a:"start",c:"s"}))}
 return svg(b,`0 0 640 ${420+(row.length?24+row.length*20:0)}`)}

/* shared patho helpers */

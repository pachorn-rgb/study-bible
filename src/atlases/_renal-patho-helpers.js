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
/* EM: horizontal capillary wall. o: {sub_ep:'humps'|'spikes', sub_en, mes, intra, linear, eff, split, thin, thick, dbl, fib, neut, nod} */
function glomEM(o={}){const r=rng(7);let b="";const gT=o.thick?168:o.thin?184:176,gB=o.thick?232:o.thin?196:204;
 b+=`<rect class="em-bg" x="0" y="0" width="640" height="420"/>`;
 b+=`<rect class="em-lum" x="150" y="0" width="490" height="148"/>`+T(400,30,"Capillary lumen",{c:"s m"});
 for(let i=0;i<3;i++)b+=`<ellipse class="em-rbc" cx="${260+i*120}" cy="${80+(i%2)*26}" rx="30" ry="18"/>`;
 if(o.neut)for(let i=0;i<3;i++){const x=220+i*140;b+=`<circle class="em-pmn" cx="${x}" cy="118" r="20"/><circle class="em-n" cx="${x-6}" cy="114" r="6"/><circle class="em-n" cx="${x+7}" cy="112" r="5"/><circle class="em-n" cx="${x}" cy="124" r="5"/>`}
 /* mesangium */
 b+=`<path class="em-mes" d="M0,0 L150,0 C150,80 150,120 170,150 L170,${gB} L0,${gB}Z"/>`;
 b+=`<ellipse class="em-mc" cx="70" cy="${o.nod?60:90}" rx="34" ry="22"/>`+T(70,o.nod?20:40,"Mesangium",{c:"s m"});
 if(o.nod)b+=`<circle class="em-nod" cx="70" cy="${gB-60}" r="46"/>`+T(70,gB-56,"nodule",{c:"s m"});
 if(o.mes)for(let i=0;i<9;i++)b+=`<ellipse class="em-dep" cx="${30+r()*110}" cy="${30+r()*(gB-60)}" rx="${7+r()*6}" ry="${5+r()*4}"/>`;
 if(o.fib)for(let i=0;i<60;i++){const x=10+r()*150,y=10+r()*(gB-20);b+=`<line class="em-fib" x1="${x}" y1="${y}" x2="${x+8}" y2="${y+(r()-.5)*8}"/>`}
 /* endothelium with fenestrae */
 b+=`<rect class="em-endo" x="150" y="148" width="490" height="10"/>`;for(let x=170;x<640;x+=38)b+=`<rect class="em-lum" x="${x}" y="148" width="12" height="10"/>`;
 /* subendothelial zone */
 if(o.sub_en)for(let x=175;x<620;x+=r()*30+30)b+=`<ellipse class="em-dep" cx="${x}" cy="${gT-6}" rx="${12+r()*10}" ry="6"/>`;
 if(o.dbl){b+=`<rect class="em-gbm" x="150" y="${gT-14}" width="490" height="6"/>`;b+=`<rect class="em-mesx" x="150" y="${gT-8}" width="490" height="8"/>`}
 /* GBM */
 if(o.split){for(let k=0;k<5;k++)b+=`<path class="em-gbm-l" d="M150,${gT+4+k*6} ${[...Array(12)].map((_,i)=>`Q${190+i*40},${gT+(k%2?10:-2)+k*6+r()*6} ${210+i*40},${gT+4+k*6}`).join(" ")}"/>`;}
 else b+=`<rect class="em-gbm" x="150" y="${gT}" width="490" height="${gB-gT}"/>`;
 if(o.intra)b+=`<rect class="em-dense" x="150" y="${gT+6}" width="490" height="${gB-gT-12}" rx="4"/>`;
 if(o.linear)b+=`<rect class="em-lin" x="150" y="${(gT+gB)/2-2}" width="490" height="4"/>`;
 if(o.fib)for(let i=0;i<50;i++){const x=150+r()*480,y=gT+r()*(gB-gT);b+=`<line class="em-fib" x1="${x}" y1="${y}" x2="${x+9}" y2="${y+(r()-.5)*6}"/>`}
 /* subepithelial */
 if(o.sub_ep==="humps")[220,360,500].forEach(x=>b+=`<path class="em-dep" d="M${x-28},${gB} C${x-24},${gB+34} ${x+24},${gB+34} ${x+28},${gB}Z"/>`);
 if(o.sub_ep==="spikes")for(let x=172;x<630;x+=26){b+=`<ellipse class="em-dep" cx="${x+13}" cy="${gB+7}" rx="9" ry="7"/>`;b+=`<rect class="em-gbm" x="${x}" y="${gB}" width="4" height="16"/>`}
 /* podocytes */
 const fy=gB+(o.sub_ep?14:0);
 if(o.eff)b+=`<path class="em-pod" d="M150,${fy} L640,${fy} L640,${fy+34} L150,${fy+34}Z"/>`;
 else for(let x=154;x<640;x+=34)b+=`<path class="em-pod" d="M${x},${fy} L${x+24},${fy} C${x+27},${fy+18} ${x+24},${fy+30} ${x+20},${fy+36} L${x+4},${fy+36} C${x},${fy+30} ${x-2},${fy+18} ${x},${fy}Z"/>`;
 b+=`<path class="em-pod" d="M240,${fy+34} C300,${fy+26} 480,${fy+26} 540,${fy+34} L540,${fy+84} C470,${fy+104} 310,${fy+104} 240,${fy+84}Z"/><ellipse class="em-n" cx="390" cy="${fy+66}" rx="44" ry="16"/>`;
 b+=`<rect class="em-us" x="150" y="${fy+110}" width="490" height="${420-fy-110}"/>`+T(400,410,"Urinary (Bowman) space",{c:"s m"});
 if(ST.labels){const L=(y,t)=>T(636,y,t,{a:"end",c:"s"});
  b+=T(156,144,"Endothelium",{a:"start",c:"s m"})+L((gT+gB)/2+4,o.split?"GBM split / basket-weave":o.thin?"GBM บาง":o.thick?"GBM หนา":"GBM")+L(fy+20,o.eff?"Foot processes effaced":"Foot processes (podocyte)");
  if(o.sub_ep)b+=T(230,gB+44,o.sub_ep==="humps"?"subepithelial humps":"subepithelial deposits + spikes",{a:"start",c:"bad"});
  if(o.sub_en)b+=T(180,gT-18,"subendothelial deposits",{a:"start",c:"bad"});
  if(o.mes)b+=T(76,gB+16,"mesangial deposits",{c:"bad"});
  if(o.intra)b+=T(400,(gT+gB)/2+5,"dense deposits (intramembranous)",{c:"w"});
  if(o.linear)b+=T(400,gT-6,"linear IgG along GBM",{c:"bad"});
  if(o.dbl)b+=T(400,gT-20,"double contour + mesangial interposition",{c:"bad"});
  if(o.fib)b+=T(76,gB+16,"random fibrils",{c:"bad"})}
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

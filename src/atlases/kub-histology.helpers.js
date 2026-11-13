
/* ================= helpers ================= */
const T=(x,y,s,o={})=>`<text class="t${o.c?" "+o.c:""}" x="${x}" y="${y}" text-anchor="${o.a||"middle"}"${o.s?` font-size="${o.s}"`:""}${o.r?` transform="rotate(${o.r} ${x} ${y})"`:""}>${s}</text>`;
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
const DEFS=`<defs><pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="transparent"/><line x1="0" y1="0" x2="0" y2="6" stroke="rgba(255,255,255,.75)" stroke-width="2"/></pattern>
 <marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor" style="fill:var(--sb-ink2)"/></marker></defs>`;
const svg=(body,vb="0 0 640 520")=>`<svg viewBox="${vb}" role="img" xmlns="http://www.w3.org/2000/svg">${DEFS}${body}</svg>`;



/* ================= histology primitives ================= */
const S={j:'<b class="sbb junq">J</b>',w:'<b class="sbb wheat">W</b>',d:'<b class="sbb difiore">dF</b>',x:'<b class="sbb gen">Gen</b>'};
const LEG={eo:["Eosinophilic cytoplasm","--h-eo"],pale:["Pale cytoplasm","--h-pale"],nu:["Nucleus","--h-nu"],rbc:["Erythrocyte","--h-rbc"],bm:["Basement membrane","--h-bm"],bb:["Brush border","--h-bb"],ct:["Connective tissue","--h-ct"],sm:["Smooth muscle","--h-sm"],jg:["Renin granules","--h-jg"],fat:["Adipose","--h-fat"]};
let ST={labels:true,stain:"he",fill:"empty",zone:"all"};
function RNG(s){return()=>{s=(s*16807)%2147483647;return(s-1)/2147483646}}
const TAU=Math.PI*2,f1=n=>n.toFixed(1);
/* blob: jittered closed curve */
function blobPts(cx,cy,rx,ry,j,n,seed){const r=RNG(seed),p=[];for(let i=0;i<n;i++){const a=i/n*TAU,k=1+(r()-.5)*j;p.push([cx+Math.cos(a)*rx*k,cy+Math.sin(a)*ry*k])}return p}
const blob=(...a)=>sm(blobPts(...a));
const NU=(x,y,rx,ry,a=0,c="nu")=>`<ellipse class="${c}" cx="${f1(x)}" cy="${f1(y)}" rx="${rx}" ry="${ry}" transform="rotate(${f1(a)} ${f1(x)} ${f1(y)})"/>`;
const RBC=(x,y,s=1)=>`<ellipse class="rbc" cx="${f1(x)}" cy="${f1(y)}" rx="${3.6*s}" ry="${3*s}"/>`;
/* tubule cross-section. types: pct dct tal cd pap thin cap ven */
const TY={
 pct:{th:.44,n:5,cy:"eo",bb:1,nuc:[3.6,3.4],pos:.52,occl:1},
 dct:{th:.27,n:9,cy:"eo2",nuc:[3,2.8],pos:.62},
 tal:{th:.3,n:8,cy:"eo2",nuc:[3,2.6],pos:.55},
 cd:{th:.33,n:9,cy:"pale",bord:1,nuc:[3.2,3],pos:.48},
 pap:{th:.42,n:12,cy:"pale",bord:1,nuc:[3,3.4],pos:.42},
 thin:{th:.11,n:3,cy:"eo2",flat:1},
 cap:{th:.06,n:2,cy:"eo2",flat:1,rbc:1},
 ven:{th:.05,n:3,cy:"eo2",flat:1,rbc:1}
};
function tube(cx,cy,r,type,o={}){const P=TY[type],rr=RNG(o.seed||Math.round(cx*7+cy*13+r)),n=o.n||P.n,th=Math.max(1.6,r*P.th),rl=r-th,sx=o.sx||1,sy=o.sy||1;
 let g=`<circle class="bmc" r="${f1(r+.8)}"/><circle class="${P.cy}" r="${f1(r)}"/>`;
 if(P.occl){g+=`<path class="lum" d="${blob(0,0,rl*.8,rl*.8,.7,9,o.seed||cx+cy)}"/>`;g+=`<path class="bbr" d="${blob(0,0,rl*.88,rl*.88,.5,12,(o.seed||cx+cy)+3)}"/>`}
 else g+=`<circle class="lum" r="${f1(rl)}"/>`;
 if(P.bord)for(let i=0;i<n;i++){const a=(i+.5)/n*TAU;g+=`<line class="cb" x1="${f1(Math.cos(a)*rl)}" y1="${f1(Math.sin(a)*rl)}" x2="${f1(Math.cos(a)*r)}" y2="${f1(Math.sin(a)*r)}"/>`}
 for(let i=0;i<n;i++){const a=(i+rr()*.3)/n*TAU,d=P.flat?r-th/2:rl+th*P.pos,x=Math.cos(a)*d,y=Math.sin(a)*d,deg=a*180/Math.PI;
  g+=P.flat?NU(x,y,Math.max(3.2,r*.28),1.7,deg+90):NU(x,y,P.nuc[0],P.nuc[1],deg)}
 if(P.rbc||o.rbc){const k=o.rbcN??Math.max(1,Math.round(rl*rl/40));for(let i=0;i<k;i++){const a=rr()*TAU,d=rr()*(rl-3.5);g+=RBC(Math.cos(a)*d,Math.sin(a)*d,Math.min(1,rl/7))}}
 if(o.cast)g+=`<circle class="cast" r="${f1(rl*.7)}"/>`;
 if(o.pmn){for(let i=0;i<o.pmn;i++){const a=rr()*TAU,d=rr()*(rl-4);g+=`<g class="pmn" transform="translate(${f1(Math.cos(a)*d)} ${f1(Math.sin(a)*d)})"><circle r="3.6" class="pmnc"/><circle cx="-1.4" cy="-.6" r="1.2" class="nu"/><circle cx="1.3" cy="-.8" r="1.1" class="nu"/><circle cx=".2" cy="1.3" r="1.1" class="nu"/></g>`}}
 return `<g transform="translate(${f1(cx)} ${f1(cy)}) rotate(${o.rot||0}) scale(${sx} ${sy})">${g}</g>`}
/* longitudinal tubule segment (straight) */
function ltube(x1,y1,x2,y2,w,type,o={}){const P=TY[type],L=Math.hypot(x2-x1,y2-y1),a=Math.atan2(y2-y1,x2-x1)*180/Math.PI,th=Math.max(1.6,w/2*P.th),rr=RNG(o.seed||Math.round(x1+y2));
 let g=`<rect class="bmc" x="0" y="${-w/2-.8}" width="${L}" height="${w+1.6}"/><rect class="${P.cy}" x="0" y="${-w/2}" width="${L}" height="${w}"/><rect class="lum" x="0" y="${-w/2+th}" width="${L}" height="${w-2*th}"/>`;
 if(P.bb)g+=`<line class="bbl" x1="0" y1="${-w/2+th+1}" x2="${L}" y2="${-w/2+th+1}"/><line class="bbl" x1="0" y1="${w/2-th-1}" x2="${L}" y2="${w/2-th-1}"/>`;
 const step=P.flat?22:(P.bord?14:12);for(let x=step/2;x<L;x+=step){[-1,1].forEach(s=>{if(P.bord)g+=`<line class="cb" x1="${f1(x+step/2)}" y1="${s*(w/2-th)}" x2="${f1(x+step/2)}" y2="${s*w/2}"/>`;
  g+=P.flat?NU(x+rr()*6,s*(w/2-th/2),5,1.6,0):NU(x+rr()*3,s*(w/2-th/2),P.nuc[0],P.nuc[1],90)})}
 if(P.rbc)for(let x=6;x<L;x+=9+rr()*8)g+=RBC(x,(rr()-.5)*(w-2*th-6),.9);
 return `<g transform="translate(${f1(x1)} ${f1(y1)}) rotate(${f1(a)})">${g}</g>`}
/* renal corpuscle: vascular pole angle va (deg) */
function corp(cx0,cy0,R0,o={}){const K=R0/120,cx=0,cy=0,R=120;return `<g transform="translate(${cx0} ${cy0}) scale(${K})">${corpIn(cx,cy,R,o)}</g>`}
function corpIn(cx,cy,R,o={}){const va=(o.va??-90)*Math.PI/180,rr=RNG(o.seed||7),tc=[cx+Math.cos(va)*R*.05,cy+Math.sin(va)*R*.05],TR=R*.86;let g="";
 g+=`<circle class="lum" cx="${cx}" cy="${cy}" r="${R}"/>`;
 g+=`<path class="eo2 tuft" d="${blob(tc[0],tc[1],TR,TR*.94,.18,14,o.seed||11)}"/>`;
 // capillary loops (phyllotaxis)
 const N=Math.max(26,o.loops||30);for(let i=0;i<N;i++){const k=Math.sqrt((i+.5)/N)*TR*.84,a=i*2.399,x=tc[0]+Math.cos(a)*k,y=tc[1]+Math.sin(a)*k,r=TR*.105*(.8+rr()*.4);
  g+=`<circle class="lum capr" cx="${f1(x)}" cy="${f1(y)}" r="${f1(r)}"/>`;g+=NU(x+Math.cos(a+1)*r*.8,y+Math.sin(a+1)*r*.8,2.6,1.4,a*57+90,"nu en");
  if(rr()<.55)g+=RBC(x+(rr()-.5)*r*.5,y+(rr()-.5)*r*.5,.75);
  if(k>TR*.62)g+=NU(x+Math.cos(a)*r*1.15,y+Math.sin(a)*r*1.15,3.6,2.8,a*57,"nu po");
  else if(rr()<.8)g+=NU(x-Math.cos(a)*r*1.2,y-Math.sin(a)*r*1.2,3,2.6,a*57,"nu me")}
 // parietal layer
 g+=`<circle class="par" cx="${cx}" cy="${cy}" r="${R}"/>`;for(let i=0;i<9;i++){const a=va+.5+i/9*(TAU-1);g+=NU(cx+Math.cos(a)*R,cy+Math.sin(a)*R,4.4,1.5,a*57+90)}
 return g}
/* stratified urothelium strip x1..x2 sitting on basement membrane at y; cs = cell scale */
function urothH(full,cs=1){return full?(2*12+16)*cs:(5*20+30)*cs}
function uroth(x1,x2,y,layers,full,seed=3,cs=1){const rr=RNG(seed);let g="";const rowH=(full?12:20)*cs,rows=full?2:5,uH=(full?16:30)*cs,h=rows*rowH+uH;
 g+=`<rect class="eo3" x="${x1}" y="${f1(y-h)}" width="${x2-x1}" height="${f1(h)}"/>`;
 for(let L=0;L<rows;L++){const yy=y-rowH*(L+.5),sp=(L===0?12:full?30:20)*cs;
  for(let x=x1+sp/2+(L%2)*sp/2;x<x2-sp/3;x+=sp){const jx=(rr()-.5)*3*cs;
   if(L>0)g+=`<rect class="ucell" x="${f1(x-sp/2+1)}" y="${f1(yy-rowH/2+1)}" width="${f1(sp-2)}" height="${f1(rowH-2)}" rx="${f1(4*cs)}"/>`;
   g+=full?NU(x+jx,yy,7*cs,2.4*cs,0):NU(x+jx,yy,(L===0?3.6:5)*cs,(L===0?4.2:5)*cs,rr()*30)}}
 const uw=(full?96:58)*cs,top=y-h;for(let x=x1;x<x2-uw*.3;x+=uw){const w=Math.min(uw,x2-x),bn=rr()<.3;
  g+=full?`<path class="umb" d="M${f1(x+1)},${f1(top+uH)} L${f1(x+1)},${f1(top+3*cs)} Q${f1(x+w/2)},${f1(top)} ${f1(x+w-1)},${f1(top+3*cs)} L${f1(x+w-1)},${f1(top+uH)}Z"/>`+NU(x+w/2,top+uH/2+1,12*cs,2.8*cs,0):
   `<path class="umb" d="M${f1(x+1)},${f1(top+uH)} C${f1(x+1)},${f1(top-uH*.25)} ${f1(x+w-1)},${f1(top-uH*.25)} ${f1(x+w-1)},${f1(top+uH)}Z"/>`+(bn?NU(x+w/2-7*cs,top+uH*.55,5.4*cs,5*cs,0)+NU(x+w/2+7*cs,top+uH*.55,5.4*cs,5*cs,0):NU(x+w/2,top+uH*.55,6*cs,5.4*cs,0))+`<path class="plq" d="M${f1(x+4*cs)},${f1(top+uH*.15)} Q${f1(x+w/2)},${f1(top-uH*.2)} ${f1(x+w-4*cs)},${f1(top+uH*.15)}" style="stroke-width:${f1(2*cs)}"/>`}
 g+=`<line class="bml" x1="${x1}" y1="${y}" x2="${x2}" y2="${y}"/>`;return g}
/* smooth muscle bundle field */
function muscle(x,y,w,h,orient,seed){const rr=RNG(seed);let g=`<rect class="sm" x="${x}" y="${y}" width="${w}" height="${h}" rx="4"/>`;
 if(orient==="long"){for(let yy=y+5;yy<y+h-3;yy+=7)for(let xx=x+4+rr()*10;xx<x+w-10;xx+=18+rr()*10)g+=NU(xx,yy,6,1.3,0)}
 else{for(let i=0;i<w*h/90;i++)g+=`<circle class="nu" cx="${f1(x+3+rr()*(w-6))}" cy="${f1(y+3+rr()*(h-6))}" r="1.5"/>`}
 return g}
function ctFill(x,y,w,h,seed,dense=.5){const rr=RNG(seed);let g=`<rect class="ct" x="${x}" y="${y}" width="${w}" height="${h}"/>`;for(let i=0;i<w*h/260*dense;i++){const xx=x+rr()*w,yy=y+rr()*h;g+=`<path class="fib" d="M${f1(xx)},${f1(yy)} q6,${f1((rr()-.5)*6)} 14,0"/>`+(rr()<.35?NU(xx+7,yy,3.4,1.1,rr()*30):"")}return g}
const box=(x,y,w,h,ttl,lines,o={})=>`<rect class="box${o.c?" "+o.c:""}" x="${x}" y="${y}" width="${w}" height="${h}" rx="10"/>`+T(x+10,y+19,ttl,{a:"start",c:"b"}).replace('class="t b"','class="t bh"')+lines.map((l,i)=>T(x+10,y+36+i*14,l,{a:"start",c:"s"})).join("");
const hs=(svgstr)=>ST.stain==="pas"?svgstr.replace('<svg ','<svg class="pas" '):svgstr;

/* ================= sections ================= */

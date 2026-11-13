
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
const S={g:'<b class="sbb grays">Gray</b>',x:'<b class="sbb gen">Gen</b>'};
const LEG={art:["Artery","--a-art"],vein:["Vein","--a-vein"],lymph:["Lymph","--a-lymph"],nerve:["Nerve","--a-nerve"],cortex:["Cortex","--a-cortex"],medulla:["Medulla","--a-medulla"],uro:["Collecting system / ureter","--a-uro"],blad:["Bladder","--a-blad"],fat:["Fat","--a-fat"],musc:["Muscle","--a-musc"],bone:["Bone","--a-bone"],gland:["Suprarenal","--a-gland"]};
let ST={labels:true,sex:"m",view:"ant",lymph:true,nerve:true};

/* ================= shared pieces ================= */
function vertebrae(x,levels,w=48,h=32){return levels.map(([n,y])=>`<rect class="f bone" x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" rx="7"/>`).join("")}
function ilium(side=1){const p=[[292,334],[236,304],[160,288],[104,300],[98,332],[140,362],[214,392],[262,408],[292,386]];return F("bone",sm(side>0?p:mir(p)))}

/* ================= sections ================= */

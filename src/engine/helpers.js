
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




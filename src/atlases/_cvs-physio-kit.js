/* Shared drawing kit for the Cardiovascular physiology atlases (cvs-physio-1, cvs-physio-2).
   Colours come from theme tokens only, so every diagram follows light / dark / OLED. */
const CV={lv:"var(--a-art)",ao:"var(--g3)",la:"var(--g2)",ra:"var(--a-vein)",vol:"var(--g1)",acc:"var(--sb-accent)",bad:"var(--sb-bad)",good:"var(--sb-good)",
 mut:"var(--sb-muted)",ink:"var(--sb-ink)",ink2:"var(--sb-ink2)",line:"var(--sb-line)",s:"var(--sb-surface)",s2:"var(--sb-surface2)",plate:"var(--sb-plate)",
 vi:"var(--g5)",pk:"var(--g4)",cy:"var(--g6)",ol:"var(--g7)",rd:"var(--g8)",tl:"var(--g1)",bl:"var(--g2)",or:"var(--g3)"};
const tint=(c,p=14)=>`color-mix(in srgb,${c} ${p}%,var(--sb-surface))`;
const f1c=v=>(Math.round(v*10)/10).toFixed(1),r0=v=>Math.round(v);
/* stroke path, filled area, coloured box, coloured arrow, solid tag */
const SP=(d,c,w=2.6,o={})=>`<path d="${d}" style="fill:none;stroke:${c};stroke-width:${w};stroke-linecap:round;stroke-linejoin:round${o.dash?";stroke-dasharray:"+o.dash:""}${o.op!=null?";opacity:"+o.op:""}"/>`;
const SF=(d,c,op=.18)=>`<path d="${d}" style="fill:${c};opacity:${op};stroke:none"/>`;
const RB=(x,y,w,h,c,o={})=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r??12}" style="fill:${o.fill||tint(c,o.p??14)};stroke:${o.st||`color-mix(in srgb,${c} 60%,transparent)`};stroke-width:${o.sw??1.3}${o.dash?";stroke-dasharray:"+o.dash:""}"/>`;
function AW(x1,y1,x2,y2,c=CV.ink2,w=1.8,o={}){const a=Math.atan2(y2-y1,x2-x1),h=o.h||8,bx=x2-h*Math.cos(a),by=y2-h*Math.sin(a);
 return SP(`M${x1},${y1} L${bx.toFixed(1)},${by.toFixed(1)}`,c,w,o)+`<path d="M${x2},${y2} L${(bx+h*.55*Math.sin(a)).toFixed(1)},${(by-h*.55*Math.cos(a)).toFixed(1)} L${(bx-h*.55*Math.sin(a)).toFixed(1)},${(by+h*.55*Math.cos(a)).toFixed(1)}Z" style="fill:${c}${o.op!=null?";opacity:"+o.op:""}"/>`}
const TAG=(x,y,s,c,o={})=>{const w=o.w||String(s).replace(/<[^>]+>/g,"").length*6.6+18;return `<rect x="${x-w/2}" y="${y-11}" width="${w}" height="22" rx="11" style="fill:${c}"/>`+`<text x="${x}" y="${y+4}" text-anchor="middle" style="font:750 11px var(--sb-font);fill:var(--sb-plate)">${s}</text>`};
const CT=(x,y,s,c,o={})=>`<text x="${x}" y="${y}" text-anchor="${o.a||"middle"}" style="font:${o.wt||700} ${o.s||12}px var(--sb-font);fill:${c};paint-order:stroke;stroke:var(--sb-plate);stroke-width:3px;stroke-linejoin:round">${s}</text>`;
const DOT=(x,y,r,c,o={})=>`<circle cx="${x}" cy="${y}" r="${r}" style="fill:${c};stroke:${o.st||"var(--sb-plate)"};stroke-width:${o.sw??2}"/>`;
const FRAME=(x,y,w,h)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" style="fill:var(--sb-surface);stroke:var(--sb-line);stroke-width:1"/>`;
/* chart axes (no grid labels when tick list empty) */
function AX(x0,y0,w,h,xr,yr,xt,yt,xl,yl,o={}){const X=v=>x0+(v-xr[0])/(xr[1]-xr[0])*w,Y=v=>y0+h-(v-yr[0])/(yr[1]-yr[0])*h;
 let g=`<rect class="plot" x="${x0}" y="${y0}" width="${w}" height="${h}"/>`;
 xt.forEach(v=>g+=`<line class="gl" x1="${X(v)}" y1="${y0}" x2="${X(v)}" y2="${y0+h}"/>`+T(X(v),y0+h+15,v,{c:"s m"}));
 yt.forEach(v=>g+=`<line class="gl" x1="${x0}" y1="${Y(v)}" x2="${x0+w}" y2="${Y(v)}"/>`+T(x0-6,Y(v)+4,v,{a:"end",c:"s m"}));
 g+=`<path class="ax" d="M${x0},${y0} V${y0+h} H${x0+w}"/>`;if(xl)g+=T(x0+w/2,y0+h+(o.xo||34),xl,{c:"s"});if(yl)g+=T(x0-(o.yo||38),y0+h/2,yl,{c:"s",r:-90});
 return {g,X,Y}}
const PTS=pts=>"M"+pts.map(p=>p[0].toFixed(1)+","+p[1].toFixed(1)).join(" L");
const FN=(A,f,a,b,n=80)=>PTS([...Array(n+1)].map((_,i)=>{const x=a+(b-a)*i/n;return [A.X(x),A.Y(f(x))]}));
/* monotone cubic interpolation through keyframes [[t,v],...] → smooth physiological traces */
function MONO(K){const n=K.length,x=K.map(k=>k[0]),y=K.map(k=>k[1]),d=[],m=[];for(let i=0;i<n-1;i++)d.push((y[i+1]-y[i])/(x[i+1]-x[i]));
 m[0]=d[0];m[n-1]=d[n-2];for(let i=1;i<n-1;i++)m[i]=d[i-1]*d[i]<=0?0:(d[i-1]+d[i])/2;
 for(let i=0;i<n-1;i++){if(d[i]===0){m[i]=m[i+1]=0;continue}const a=m[i]/d[i],b=m[i+1]/d[i],s=a*a+b*b;if(s>9){const t=3/Math.sqrt(s);m[i]=t*a*d[i];m[i+1]=t*b*d[i]}}
 return t=>{if(t<=x[0])return y[0];if(t>=x[n-1])return y[n-1];let i=0;while(t>x[i+1])i++;const h=x[i+1]-x[i],s=(t-x[i])/h,s2=s*s,s3=s2*s;
  return (2*s3-3*s2+1)*y[i]+(s3-2*s2+s)*h*m[i]+(-2*s3+3*s2)*y[i+1]+(s3-s2)*h*m[i+1]}}
/* ECG beat (time in s from beat start) */
const ECGF=(o={})=>{const g=(t,c,w,a)=>a*Math.exp(-((t-c)*(t-c))/(2*w*w));
 return t=>(o.noP?0:g(t,.06,.018,.12))-g(t,.145,.006,.1)+g(t,.165,.008,1)-g(t,.185,.007,.25)+g(t,.40,.04,.28)+(o.u?g(t,.53,.03,.1):0)}
/* sliders: <label class="sl"> like the renal atlases */
function SL(id,lab,min,max,step,unit){return `<label class="sl"><span>${lab} <b data-v="${id}">${ST[id]}</b> ${unit}</span><input type="range" min="${min}" max="${max}" step="${step}" value="${ST[id]}" data-k="${id}"></label>`}
function WIRE(){const s=cur;document.querySelectorAll('#tools-'+s.id+' input[type=range]').forEach(r=>r.oninput=()=>{ST[r.dataset.k]=+r.value;const v=r.closest(".tools").querySelector('[data-v="'+r.dataset.k+'"]');if(v)v.textContent=r.value;const d=document.getElementById("dia-"+s.id);if(d)d.innerHTML=s.draw()})}
/* stylised heart in frontal view: chambers + great vessels (used by conduction and pressure maps) */
function HEART(x,y,s=1,o={}){const P=(px,py)=>[x+px*s,y+py*s];const pp=a=>a.map(([a1,b1])=>P(a1,b1));
 const outline=sm(pp([[-8,-118],[40,-128],[92,-100],[118,-40],[110,30],[70,100],[10,150],[-30,120],[-92,60],[-118,-10],[-104,-80],[-60,-116]]));
 const f=(c,p)=>`fill:${tint(c,p)};stroke:color-mix(in srgb,${c} 55%,transparent);stroke-width:1.3`;
 let b=`<path d="${outline}" style="fill:${tint(CV.lv,8)};stroke:color-mix(in srgb,${CV.lv} 45%,transparent);stroke-width:1.6"/>`;
 const ch={ra:sm(pp([[-100,-70],[-58,-92],[-24,-70],[-22,-18],[-60,-4],[-100,-22]])),la:sm(pp([[ 16,-92],[60,-104],[96,-74],[92,-36],[50,-24],[18,-46]])),
  rv:sm(pp([[-96,6],[-58,0],[-16,4],[-2,40],[-4,108],[-34,104],[-78,58]])),lv:sm(pp([[14,-6],[58,-14],[104,4],[100,52],[64,104],[18,134],[6,80],[6,30]]))};
 const fill=o.fill||{};
 b+=`<path d="${ch.ra}" style="${f(fill.ra||CV.ra,fill.ra?34:16)}"/><path d="${ch.la}" style="${f(fill.la||CV.lv,fill.la?34:14)}"/><path d="${ch.rv}" style="${f(fill.rv||CV.ra,fill.rv?34:14)}"/><path d="${ch.lv}" style="${f(fill.lv||CV.lv,fill.lv?34:16)}"/>`;
 if(o.labels!==false){const L=(px,py,t)=>T(...P(px,py),t,{c:"s m"});b+=L(-62,-44,"RA")+L(56,-60,"LA")+L(-48,52,"RV")+L(58,50,"LV")}
 return b}

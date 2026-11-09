/* ================= render: one chapter = one continuous page ================= */
const $=s=>document.querySelector(s);
const SEENKEY="sb-"+PHARM.id+"-seen",FIGDIR="img/";
let cur=SEC[0],GRP=null,OBS=null;
let SEEN={},OPEN={};try{SEEN=JSON.parse(localStorage.getItem(SEENKEY)||"{}")}catch(e){}
const GROUPS=[...new Set(SEC.map(s=>s.k))];
const gOf=s=>GROUPS.indexOf(s.k);
function tocHTML(withHead){const n=Object.keys(SEEN).filter(k=>SEC.some(s=>s.id===k)).length;
 const subs=[...document.querySelectorAll(`#notes-${cur.id} h3`)].map(h=>[h.id,h.textContent]);
 return (withHead?`<div class="dh2"><b>สารบัญ</b><button type="button" id="dclose" aria-label="Close">✕</button></div>`:"")+
 `<div class="prog"><i><b style="width:${n/SEC.length*100}%"></b></i>${n}/${SEC.length} หัวข้อ</div>`+
 GROUPS.map(gk=>{const list=SEC.filter(s=>s.k===gk),open=OPEN[gk]??(gk===cur.k);
  return `<div class="g" data-open="${open}"><button class="gh" type="button" data-g="${gk}"><span class="cv">▶</span>${GN[gk]||gk}<span class="n">${list.filter(s=>SEEN[s.id]).length}/${list.length}</span></button>
  <ul>${list.map(s=>`<li><a href="#${s.id}" data-id="${s.id}" aria-current="${s===cur}"><span class="ck${SEEN[s.id]?" on":""}">✓</span>${s.t}</a>${s===cur&&subs.length>1?`<ol>${subs.map(([id,tx])=>`<li><a href="#${s.id}" data-sub="${id}">${tx}</a></li>`).join("")}</ol>`:""}</li>`).join("")}</ul></div>`}).join("")}
function wireToc(root){root.querySelectorAll("[data-g]").forEach(b=>b.onclick=()=>{const g=b.dataset.g,el=b.parentElement;OPEN[g]=el.dataset.open!=="true";el.dataset.open=OPEN[g]});
 root.querySelectorAll("a[data-id]").forEach(a=>a.onclick=e=>{e.preventDefault();closeDrawer();go(a.dataset.id,true,true)});
 root.querySelectorAll("a[data-sub]").forEach(a=>a.onclick=e=>{e.preventDefault();closeDrawer();const h=document.getElementById(a.dataset.sub);if(h)h.scrollIntoView({behavior:"smooth",block:"start"})});
 const c=root.querySelector("#dclose");if(c)c.onclick=closeDrawer}
function chips(){$("#side").innerHTML=tocHTML(false);wireToc($("#side"));
 const i=SEC.indexOf(cur),list=SEC.filter(s=>s.k===cur.k);$("#mgrp").textContent=`${GN[cur.k]||cur.k} · ${list.indexOf(cur)+1}/${list.length}`;$("#mtop").textContent=cur.t;$("#mprev").disabled=i===0;$("#mnext").disabled=i===SEC.length-1;
 const a=$("#side").querySelector('[aria-current="true"]');if(a){const r=a.getBoundingClientRect(),sr=$("#side").getBoundingClientRect();if(r.top<sr.top||r.bottom>sr.bottom)a.scrollIntoView({block:"nearest"})}}
function openDrawer(){$("#dpane").innerHTML=tocHTML(true);wireToc($("#dpane"));$("#drawer").hidden=false;const a=$("#dpane").querySelector('[aria-current="true"]');if(a)a.scrollIntoView({block:"center"})}
function closeDrawer(){$("#drawer").hidden=true}
$("#mopen").onclick=openDrawer;$("#ddim").onclick=closeDrawer;
$("#mprev").onclick=()=>{const i=SEC.indexOf(cur);if(i>0)go(SEC[i-1].id,true,true)};$("#mnext").onclick=()=>{const i=SEC.indexOf(cur);if(i<SEC.length-1)go(SEC[i+1].id,true,true)};
function fixTools(s){(s.tools||[]).forEach(([k,o])=>{if(Array.isArray(o)&&!o.some(v=>v[0]===ST[k]))ST[k]=o[0][0]})}
function tools(s){const el=document.getElementById("tools-"+s.id);if(!el)return;const tl=[["labels","Labels"]].concat((s.tools||[]).filter(t=>!Array.isArray(t[1])));
 let h=tl.map(([k,l])=>`<button class="sb-chip" type="button" data-t="${k}" aria-pressed="${!!ST[k]}">${l}</button>`).join("");
 (s.tools||[]).filter(t=>Array.isArray(t[1])).forEach(([k,opts])=>{h+=`<span class="segc">`+opts.map(([v,l])=>`<button class="sb-chip" type="button" data-s="${k}" data-v="${v}" aria-pressed="${ST[k]===v}">${l}</button>`).join("")+`</span>`});
 el.innerHTML=h;const prev=cur;cur=s;if(s.ctrl){el.insertAdjacentHTML("beforeend",s.ctrl());if(s.wire)s.wire()}cur=prev;
 el.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>{ST[b.dataset.t]=!ST[b.dataset.t];SEC.filter(x=>x.k===s.k).forEach(draw)});
 el.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{ST[b.dataset.s]=b.dataset.v;draw(s)})}
function draw(s){const prev=cur;cur=s;const d=document.getElementById("dia-"+s.id);if(d)d.innerHTML=s.draw();tools(s);
 const lg=document.getElementById("legend-"+s.id);if(lg)lg.innerHTML=(s.leg||[]).map(k=>LEG[k]?`<span><i style="background:var(${LEG[k][1]})"></i>${LEG[k][0]}</span>`:"").join("");cur=prev}
function topicHTML(s){if(s.mind)return `<article class="topic" id="t-${s.id}" data-id="${s.id}"><section class="sb-card card mmcard"><div class="mmhead"><div><div class="k" style="color:var(--g0);font:700 .6875rem var(--sb-font);letter-spacing:.06em;text-transform:uppercase">Overview</div><h2>${PHARM.sys} ${PHARM.mmh||"drug classes"}</h2></div><p>แตะกลุ่มหรือหัวข้อเพื่อไปที่เนื้อหา · ✓ = อ่านแล้ว</p></div><div id="dia-${s.id}"></div>${PHARM.noleg?"":`<div class="mmlegend">${Object.keys(LEG).map(k=>`<span><i style="background:var(${LEG[k][1]})"></i>${LEG[k][0]}</span>`).join("")}</div>`}</section></article>`;const figs=s.figs&&s.figs.length?`<section class="figs sb-card card"><h3>รูปจากเลคเชอร์ <span>${s.figs.length} รูป · แตะเพื่อขยาย</span></h3><div class="strip">${s.figs.map(([f,c])=>`<button class="fig" type="button" data-f="${f}" data-c="${c}"><img src="${FIGDIR}${f}.jpg" alt="${c}" loading="lazy"><span>${c}</span></button>`).join("")}</div></section>`:"";
 return `<article class="topic" id="t-${s.id}" data-id="${s.id}"><div class="stage">
  <section class="sb-card card"><div class="dh"><div><div class="k" style="color:var(--g${GROUPS.indexOf(s.k)})">${GN[s.k]||s.k}</div><h2>${s.t}</h2>${s.drugs?`<div class="dchips">${s.drugs.split(" · ").map(d=>`<span>${d}</span>`).join("")}</div>`:""}</div><div class="tools" id="tools-${s.id}"></div></div>
   <div class="dia" id="dia-${s.id}" data-id="${s.id}"></div><div class="legend" id="legend-${s.id}"></div></section>
  <aside class="sb-card card notes" id="notes-${s.id}"></aside></div>${figs}</article>`}
function renderGroup(gk){GRP=gk;document.querySelector(".shell").classList.toggle("ov",gk==="0");const list=SEC.filter(s=>s.k===gk),gi=GROUPS.indexOf(gk);
 $("#flow").innerHTML=(gk==="0"?"":`<header class="ghead"><small>${GROUPS.length>1?`ส่วนที่ ${gi+1}/${GROUPS.length} · `:""}${list.length} หัวข้อ</small><h2>${GN[gk]||gk}</h2><div class="gchips">${list.map(s=>`<a href="#${s.id}" data-jump="${s.id}">${s.t}</a>`).join("")}</div></header>`)+list.map(topicHTML).join("");
 list.forEach(s=>{fixTools(s);const prev=cur;cur=s;const n=document.getElementById("notes-"+s.id);if(n){n.innerHTML=s.notes();n.querySelectorAll("h3").forEach((h,i)=>h.id="n-"+s.id+"-"+i);}cur=prev;draw(s)});
 $("#flow").querySelectorAll("[data-jump]").forEach(a=>a.onclick=e=>{e.preventDefault();go(a.dataset.jump,true,true)});
 $("#flow").querySelectorAll(".dia").forEach(d=>d.onclick=()=>openDia(SEC.find(s=>s.id===d.dataset.id)));
 $("#flow").querySelectorAll(".fig").forEach(b=>b.onclick=()=>openLB(b.dataset.f,b.dataset.c));
 const pv=GROUPS[gi-1],nx=GROUPS[gi+1],NV=window.NAV||{};
 const btn=(g,dir)=>g?`<button type="button" class="${dir>0?"nx":""}" data-g="${g}"><small>${dir>0?"ส่วนถัดไป →":"← ส่วนก่อนหน้า"}</small><b>${GN[g]||g}</b></button>`:"";
 const abtn=(a,dir)=>a?`<button type="button" class="${dir>0?"nx":""}" data-atlas="${a.m}" data-href="${a.f}"><small>${dir>0?"บทถัดไป →":"← บทก่อนหน้า"}</small><b>${a.t}</b></button>`:"<span style='flex:1'></span>";
 $("#steps").innerHTML=(pv?btn(pv,-1):abtn(NV.prev,-1))+(nx?btn(nx,1):abtn(NV.next,1));
 $("#steps").querySelectorAll("[data-g]").forEach(b=>b.onclick=()=>{go(SEC.find(s=>s.k===b.dataset.g).id,true,"chapter")});
 $("#steps").querySelectorAll("[data-atlas]").forEach(b=>b.onclick=()=>{if(window.parent!==window)parent.postMessage({sb:"open",m:b.dataset.atlas},"*");else location.href=b.dataset.href});
 if(OBS)OBS.disconnect();
 OBS=new IntersectionObserver(es=>{const vis=es.filter(e=>e.isIntersecting);if(!vis.length)return;const id=vis[0].target.dataset.id;if(id!==cur.id)setCur(SEC.find(s=>s.id===id),true)},{rootMargin:"-30% 0px -60% 0px"});
 $("#flow").querySelectorAll(".topic").forEach(t=>OBS.observe(t))}
function setCur(s,push){cur=s;SEEN[s.id]=1;try{localStorage.setItem(SEENKEY,JSON.stringify(SEEN))}catch(e){}chips();
 if(push&&location.hash.slice(1)!==s.id)history.replaceState(null,"","#"+s.id)}
function go(id,push,scroll){const s=SEC.find(x=>x.id===id)||SEC[0];const fresh=s.k!==GRP;if(fresh)renderGroup(s.k);setCur(s,push);
 const el=scroll==="chapter"?$("#flow"):document.getElementById("t-"+s.id);if(el&&scroll)el.scrollIntoView({behavior:fresh?"auto":"smooth",block:"start"})}
let Z=1,ZEL=null;function openLB(f,c){$("#lbsc").innerHTML=`<img id="lbi" alt="" src="${FIGDIR}${f}.jpg">`;ZEL=$("#lbi");$("#lbt").textContent=c;Z=1;$("#lb").hidden=false}
function openDia(s){const prev=cur;cur=s;$("#lbsc").innerHTML=`<div class="zsvg">${s.draw()}</div>`;cur=prev;ZEL=$("#lbsc .zsvg");$("#lbt").textContent=s.t;Z=innerWidth<700?2.2:1;ZEL.style.width=Z===1?"":`${96*Z}vw`;$("#lb").hidden=false}
$("#lbx").onclick=()=>$("#lb").hidden=true;$("#zi").onclick=()=>{Z=Math.min(4,Z*1.4);ZEL.style.width=`min(${96*Z}vw,${1000*Z}px)`};$("#zo").onclick=()=>{Z=Math.max(1,Z/1.4);ZEL.style.width=Z===1?"":`min(${96*Z}vw,${1000*Z}px)`};
document.addEventListener("keydown",e=>{if(e.key==="Escape"){$("#lb").hidden=true;closeDrawer()}});
window.addEventListener("hashchange",()=>{const id=location.hash.slice(1);if(id&&SEC.some(s=>s.id===id))go(id,false,true)});
go(location.hash.slice(1)||"map",false,!!location.hash.slice(1));


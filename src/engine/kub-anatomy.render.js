function topicHTML(s){const figs=s.figs&&s.figs.length?`<section class="figs sb-card card"><h3>รูปจากเลคเชอร์ <span>${s.figs.length} รูป · แตะเพื่อขยาย</span></h3><div class="strip">${s.figs.map(([f,c])=>`<button class="fig" type="button" data-f="${f}" data-c="${c}"><img src="${FIGDIR}${f}.jpg" alt="${c}" loading="lazy"><span>${c}</span></button>`).join("")}</div></section>`:"";
 return `<article class="topic" id="t-${s.id}" data-id="${s.id}"><div class="stage">
  <section class="sb-card card"><div class="dh"><div><div class="k">${GN[s.k]||s.k}</div><h2>${s.t}</h2></div><div class="tools" id="tools-${s.id}"></div></div>
   <div class="dia" id="dia-${s.id}" data-id="${s.id}"></div><div class="legend" id="legend-${s.id}"></div></section>
  <aside class="sb-card card notes" id="notes-${s.id}"></aside></div>${figs}</article>`}
function renderGroup(gk){GRP=gk;const list=SEC.filter(s=>s.k===gk),gi=GROUPS.indexOf(gk);
 $("#flow").innerHTML=`<header class="ghead"><small>${GROUPS.length>1?`ส่วนที่ ${gi+1}/${GROUPS.length} · `:""}${list.length} หัวข้อ</small><h2>${GN[gk]||gk}</h2><div class="gchips">${list.map(s=>`<a href="#${s.id}" data-jump="${s.id}">${s.t}</a>`).join("")}</div></header>`+list.map(topicHTML).join("");
 list.forEach(s=>{fixTools(s);const prev=cur;cur=s;const n=document.getElementById("notes-"+s.id);n.innerHTML=s.notes();n.querySelectorAll("h3").forEach((h,i)=>h.id="n-"+s.id+"-"+i);cur=prev;draw(s)});
 $("#flow").querySelectorAll("[data-jump]").forEach(a=>a.onclick=e=>{e.preventDefault();go(a.dataset.jump,true,true)});
 $("#flow").querySelectorAll(".dia").forEach(d=>d.onclick=()=>openDia(SEC.find(s=>s.id===d.dataset.id)));
 $("#flow").querySelectorAll(".fig").forEach(b=>b.onclick=()=>openLB(b.dataset.f,b.dataset.c));
 const pv=GROUPS[gi-1],nx=GROUPS[gi+1];
 $("#steps").innerHTML=(pv?`<button type="button" data-g="${pv}"><small>← ส่วนก่อนหน้า</small><b>${GN[pv]||pv}</b></button>`:"<span style='flex:1'></span>")+(nx?`<button type="button" class="nx" data-g="${nx}"><small>ส่วนถัดไป →</small><b>${GN[nx]||nx}</b></button>`:"<span style='flex:1'></span>");
 $("#steps").querySelectorAll("button").forEach(b=>b.onclick=()=>{go(SEC.find(s=>s.k===b.dataset.g).id,true,"chapter")});
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
go(location.hash.slice(1)||SEC[0].id,false,!!location.hash.slice(1));

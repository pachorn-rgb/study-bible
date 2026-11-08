/* Shared by the library and every atlas page: offline + update banner + back-to-library. */
(function(){
  /* shared prefs: theme, accent, text size follow the app settings on every page */
  function applyPrefs(){try{const S=JSON.parse(localStorage.getItem("sb-state-v3")||"{}"),r=document.documentElement;
    const L=((S.xp||0)/40)**.5+1;let th=S.theme||"";if(th==="oled"&&L<6)th="dark";
    if(th)r.dataset.theme=th;else delete r.dataset.theme;
    if(S.accent)r.style.setProperty("--sb-accent",S.accent);
    r.style.fontSize=({s:15,m:16,l:18,xl:20})[S.size||"m"]+"px";if(S.lang)r.lang=S.lang;
    if(S.motion)r.style.setProperty("scroll-behavior","auto");}catch(e){}}
  applyPrefs();window.addEventListener("storage",e=>{if(e.key==="sb-state-v3")applyPrefs()});
})();
(function(){
  if(window.self!==window.top){ /* inside the app viewer: label quiz only */
    window.addEventListener("message",e=>{const d=e.data;if(d&&d.sb==="lq")labelQuiz(d);if(d&&d.sb==="find")findStart(d);if(d&&d.sb==="hunt")huntStart(d);if(d&&d.sb==="focus")focusTarget()});
    return;
  }

  function focusTarget(){const h=decodeURIComponent(location.hash.slice(1));if(!h)return;
    const el=document.getElementById("t-"+h)||document.querySelector("[data-sb-focus]")||document.getElementById(h);
    if(el)el.scrollIntoView({block:"start",behavior:"auto"})}
  /* ---------- Atlas Hunt: labels are covered, find the one asked for ---------- */
  function huntStart(cfg){const S=cfg.str||{};["sb-lq","sb-hunt"].forEach(i=>{const o=document.getElementById(i);if(o)o.remove()});
    const inView=el=>{const r=el.getBoundingClientRect();return r.top>50&&r.bottom<innerHeight-200&&r.left>0&&r.right<innerWidth};
    function collect(){const seen=new Set(),out=[];document.querySelectorAll("svg text").forEach(el=>{const tx=(el.textContent||"").replace(/\s+/g," ").trim();
      if(tx.length<2||tx.length>34||!/[A-Za-z฀-๿]{2}/.test(tx)||seen.has(tx))return;const r=el.getBoundingClientRect();if(r.width<10||r.height<5)return;
      let n=el,vis=true;while(n&&n!==document.body){const cs=getComputedStyle(n);if(cs.display==="none"||cs.visibility==="hidden"||+cs.opacity<.2){vis=false;break}n=n.parentElement}
      if(vis){seen.add(tx);out.push({el,tx})}});return out}
    let all=collect();const first=all.find(o=>inView(o.el))||all[0];
    if(first&&!inView(first.el))first.el.scrollIntoView({block:"center"});
    const svg=first&&first.el.ownerSVGElement;let cands=all.filter(o=>o.el.ownerSVGElement===svg);
    const root=document.createElement("div");root.id="sb-hunt";
    root.innerHTML=`<style>
      #sb-hunt .m{position:absolute;z-index:99990;border-radius:6px;background:#0EA5E9;color:#fff;font:800 11px/1 system-ui;display:grid;place-items:center;cursor:pointer;box-shadow:0 1px 4px rgba(0,0,0,.25);border:0;padding:0;transition:transform .15s,background .2s}
      #sb-hunt .m:active{transform:scale(.94)}#sb-hunt .m.bad{background:#DC2626;animation:hs .35s}#sb-hunt .m.ok{background:#16A34A}#sb-hunt .m.peek{background:rgba(220,38,38,.18);color:transparent;pointer-events:none}
      #sb-hunt .m.found{display:none}@keyframes hs{25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
      #sb-hunt .pan{position:fixed;left:0;right:0;bottom:0;z-index:99995;background:#fff;color:#0E1116;border-radius:18px 18px 0 0;box-shadow:0 -6px 30px rgba(0,0,0,.18);padding:12px 16px calc(14px + env(safe-area-inset-bottom,0px));font:15px/1.4 -apple-system,system-ui,"Noto Sans Thai",sans-serif;max-width:640px;margin:0 auto}
      #sb-hunt .hd{display:flex;align-items:center;gap:8px}#sb-hunt .hd b{flex:1;font-weight:700}#sb-hunt .q{font:800 20px/1.25 inherit;margin:6px 0 2px}#sb-hunt .sub{font-size:13px;opacity:.7}
      #sb-hunt .sc{font-weight:800;color:#0EA5E9;font-variant-numeric:tabular-nums}#sb-hunt .x{border:0;background:#EEF0F3;border-radius:50%;width:32px;height:32px;font-size:16px;cursor:pointer;color:#0E1116}
      #sb-hunt .cn{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:8px}#sb-hunt .cn button{border:2px solid transparent;background:#EEF0F3;color:inherit;border-radius:12px;padding:12px 6px;font:800 18px/1 inherit;cursor:pointer}#sb-hunt .cn small{display:block;font:500 11px/1.2 inherit;opacity:.7;margin-top:4px}
      #sb-hunt .ms{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0 12px}#sb-hunt .ms button{border:1.5px solid #DC2626;background:transparent;color:inherit;border-radius:999px;padding:6px 10px;font:600 13px inherit;cursor:pointer}
      #sb-hunt .end{display:flex;gap:8px;margin-top:8px}#sb-hunt .end button{flex:1;border:0;border-radius:12px;padding:12px;font:700 15px inherit;cursor:pointer}
      @media (prefers-color-scheme:dark){#sb-hunt .pan{background:#15181E;color:#F2F4F7}#sb-hunt .x,#sb-hunt .cn button{background:#1E222A;color:#F2F4F7}}
    </style><div class="lay"></div><div class="pan"></div>`;
    document.body.appendChild(root);const lay=root.querySelector(".lay"),pan=root.querySelector(".pan");
    let N=0,i=0,c=0,order=[],tries=0,miss=[];const masks=new Map();
    const close=()=>{root.remove();removeEventListener("scroll",place,true);removeEventListener("resize",place)};
    function place(){masks.forEach((m,o)=>{const r=o.el.getBoundingClientRect();m.style.left=(r.left+scrollX-3)+"px";m.style.top=(r.top+scrollY-2)+"px";m.style.width=(r.width+6)+"px";m.style.height=(r.height+4)+"px"})}
    addEventListener("scroll",place,true);addEventListener("resize",place);
    function cover(){lay.innerHTML="";masks.clear();cands.forEach((o,k)=>{const m=document.createElement("button");m.type="button";m.className="m";m.textContent="?";m.setAttribute("aria-label","hidden label "+(k+1));m.onclick=()=>tap(o,m);lay.appendChild(m);masks.set(o,m)});place()}
    function pick(){if(cands.length<4){pan.innerHTML=`<div class="hd"><b>${S.find||"Atlas Hunt"}</b><button class="x" type="button">✕</button></div><p>Not enough labels on this view.</p>`;pan.querySelector(".x").onclick=close;return}
      const max=cands.length,opts=[5,10,20].filter(n=>n<max);
      pan.innerHTML=`<div class="hd"><b>${S.find||"Atlas Hunt"} · ${S.howMany||"How many?"}</b><button class="x" type="button" aria-label="Close">✕</button></div><div class="sub">${(S.avail||"{n} available").replace("{n}",max)}</div><div class="cn">${opts.map(n=>`<button type="button" data-n="${n}">${n}</button>`).join("")}<button type="button" data-n="${max}">${max}<small>${S.all||"All"}</small></button></div>`;
      pan.querySelector(".x").onclick=close;pan.querySelectorAll("[data-n]").forEach(b=>b.onclick=()=>begin(cands.slice().sort(()=>Math.random()-.5).slice(0,+b.dataset.n)))}
    function begin(list){order=list;N=list.length;i=0;c=0;miss=[];cover();ask()}
    function ask(){if(i>=N)return finish();tries=0;const o=order[i];
      pan.innerHTML=`<div class="hd"><b>${S.find||"Atlas Hunt"}</b><span class="sc">${i+1}/${N} · ${c}✓</span><button class="x" type="button" aria-label="Close">✕</button></div><div class="q"></div><div class="sub">แตะช่อง ? ที่เป็นป้ายนี้</div>`;
      pan.querySelector(".q").textContent=o.tx;pan.querySelector(".x").onclick=close}
    function tap(o,m){if(i>=N)return;const want=order[i];
      if(o===want){m.classList.add("ok");m.textContent="✓";if(tries===0){c++;parent.postMessage({sb:"huntres",ok:true},"*")}else miss.push(want);setTimeout(()=>{m.classList.add("found");i++;ask()},450)}
      else{tries++;m.classList.add("bad");m.textContent=o.tx.slice(0,1);setTimeout(()=>{m.classList.remove("bad");m.textContent="?"},700);
        if(tries>=2){const wm=masks.get(want);wm.classList.add("peek");want.el.scrollIntoView({block:"center",behavior:"smooth"});miss.push(want);setTimeout(()=>{wm.classList.remove("peek");wm.classList.add("found");i++;ask()},1300)}}}
    function finish(){lay.innerHTML="";masks.clear();parent.postMessage({sb:"huntres",end:true,c,n:N},"*");const M=[...new Set(miss)];
      pan.innerHTML=`<div class="hd"><b>${S.find||"Atlas Hunt"}</b><span class="sc">${c}/${N}</span></div>${M.length?`<div class="sub">${(S.missT||"Missed · {n}").replace("{n}",M.length)}</div><div class="ms">${M.map((o,k)=>`<button type="button" data-m="${k}"></button>`).join("")}</div>`:`<div class="sub" style="margin:6px 0">${S.allRight||"All correct"}</div>`}<div class="end"><button type="button" class="d" style="background:#EEF0F3;color:#0E1116">${S.done||"Done"}</button>${M.length?`<button type="button" class="r" style="background:#0EA5E9;color:#fff">${(S.retry||"Retry missed ({n})").replace("{n}",M.length)}</button>`:`<button type="button" class="a" style="background:#0EA5E9;color:#fff">${S.again||"Again"}</button>`}</div>`;
      pan.querySelectorAll("[data-m]").forEach(b=>{const o=M[+b.dataset.m];b.textContent=o.tx;b.onclick=()=>{o.el.scrollIntoView({block:"center",behavior:"smooth"});o.el.style.transition="fill .3s";const f=o.el.style.fill;o.el.style.fill="#DC2626";setTimeout(()=>o.el.style.fill=f,1500)}});
      pan.querySelector(".d").onclick=close;const r=pan.querySelector(".r");if(r)r.onclick=()=>begin(M);const a=pan.querySelector(".a");if(a)a.onclick=()=>{all=collect();cands=all.filter(o=>o.el.ownerSVGElement===svg);pick()}}
    pick();
  }
  /* ---------- find in page: marks fade out by themselves; ✕ removes everything and leaves you where you are ---------- */
  var FS=null;
  function findCss(){if(document.getElementById("sbf-css"))return;const st=document.createElement("style");st.id="sbf-css";st.textContent=`
    mark.sbf{background:rgba(245,158,11,.55);color:inherit;border-radius:3px;padding:0 1px;animation:sbfFade 2.6s ease-out forwards}
    mark.sbf.cur{animation:sbfCur 2.2s ease-out forwards}
    tspan.sbf{animation:sbfSvg 2.6s ease-out forwards}tspan.sbf.cur{animation:sbfSvgCur 2.2s ease-out forwards}
    @keyframes sbfFade{0%{background:rgba(245,158,11,.6)}75%{background:rgba(245,158,11,.25)}100%{background:transparent}}
    @keyframes sbfCur{0%{background:rgba(245,158,11,.9);box-shadow:0 0 0 4px rgba(245,158,11,.35)}100%{background:transparent;box-shadow:none}}
    @keyframes sbfSvg{0%{fill:#D97706}100%{}}@keyframes sbfSvgCur{0%{fill:#D97706;font-weight:900}100%{}}
    @media (prefers-reduced-motion:reduce){mark.sbf,mark.sbf.cur{animation-duration:.01s;animation-delay:1.5s}}
    #sbf-bar{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:99996;display:flex;align-items:center;gap:6px;padding:6px 6px 6px 12px;border-radius:14px;background:#0E1116;border:1px solid rgba(255,255,255,.16);color:#F2F4F7;font:500 13px/1.2 -apple-system,system-ui,"Noto Sans Thai",sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.3);max-width:calc(100vw - 20px)}
    #sbf-bar b{font-weight:700;max-width:30vw;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    #sbf-bar .c{font-variant-numeric:tabular-nums;opacity:.75;white-space:nowrap}
    #sbf-bar button{border:0;border-radius:10px;background:rgba(255,255,255,.12);color:#fff;font:600 13px inherit;height:34px;min-width:34px;padding:0 10px;cursor:pointer;white-space:nowrap}
    #sbf-bar button:disabled{opacity:.35}#sbf-bar .x{background:transparent}`;document.head.appendChild(st)}
  function unmark(){document.querySelectorAll("mark.sbf,tspan.sbf").forEach(m=>{const p=m.parentNode;if(!p)return;p.replaceChild(document.createTextNode(m.textContent),m);p.normalize()})}
  function markAll(terms){unmark();const re=new RegExp("("+terms.map(x=>x.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).sort((a,b)=>b.length-a.length).join("|")+")","gi");
    const out=[],walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(n){const p=n.parentElement;if(!p||/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA|INPUT|BUTTON)$/.test(p.tagName)||p.closest("#sbf-bar,#sb-lq,.sb-pill,.sb-upd,[hidden]"))return NodeFilter.FILTER_REJECT;re.lastIndex=0;return re.test(n.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(n=>{const svg=n.parentElement.closest("svg");const frag=document.createDocumentFragment();let last=0;const v=n.nodeValue;re.lastIndex=0;let m;
      while((m=re.exec(v))){frag.appendChild(document.createTextNode(v.slice(last,m.index)));const el=svg?document.createElementNS("http://www.w3.org/2000/svg","tspan"):document.createElement("mark");el.setAttribute("class","sbf");el.textContent=m[0];frag.appendChild(el);out.push(el);last=m.index+m[0].length}
      frag.appendChild(document.createTextNode(v.slice(last)));n.parentNode.replaceChild(frag,n)});
    return out.filter(el=>{const r=el.getBoundingClientRect();return r.width>0||r.height>0})}
  function findStart(d){findCss();const seen={};FS={terms:d.terms,label:d.label,secs:(d.secs||[]).filter(x=>x&&x.h&&!seen[x.h]&&(seen[x.h]=1)),str:d.str||{},i:0,list:[]};
    let bar=document.getElementById("sbf-bar");if(!bar){bar=document.createElement("div");bar.id="sbf-bar";bar.setAttribute("role","status");document.body.appendChild(bar)}
    const quiet=d.quiet;const go=()=>{if(!FS)return;FS.list=markAll(FS.terms);if(quiet&&!FS.list.length){window.removeEventListener("hashchange",FS.hook);FS=null;bar.remove();return}const k=FS.list.findIndex(el=>!el.closest(".sb-hero,header,nav,aside,.toc,#toc,.mbar"));FS.i=k<0?0:k;show(true)};
    setTimeout(go,60);
    if(!FS.hook){FS.hook=()=>{if(FS)setTimeout(go,320)};window.addEventListener("hashchange",FS.hook)}
  }
  function curSec(){const h=location.hash.slice(1);const i=FS.secs.findIndex(s=>s.h===h);return i}
  function show(scroll){const bar=document.getElementById("sbf-bar");if(!bar||!FS)return;const L=FS.list,n=L.length;
    L.forEach(el=>el.classList.remove("cur"));
    if(n){const el=L[FS.i];void el.getBoundingClientRect();el.classList.add("cur");if(scroll)el.scrollIntoView({block:"center",behavior:"smooth"})}
    const ci=curSec(),nx=FS.secs.length>1?FS.secs[(ci+1)%FS.secs.length]:null;
    bar.innerHTML=`<b>“${FS.label.replace(/</g,"&lt;")}”</b><span class="c">${n?`${FS.i+1}/${n}`:(FS.str.none||"0")}</span><button type="button" data-a="p" aria-label="Previous" ${n>1?"":"disabled"}>‹</button><button type="button" data-a="n" aria-label="Next" ${n>1?"":"disabled"}>›</button>${nx&&nx.h!==location.hash.slice(1)?`<button type="button" data-a="s" title="${nx.t.replace(/"/g,"&quot;")}">${FS.str.next||"Next section"} →</button>`:""}<button type="button" class="x" data-a="x" aria-label="${FS.str.close||"Close"}">✕</button>`;
    bar.querySelectorAll("button").forEach(b=>b.onclick=()=>{const a=b.dataset.a;
      if(a==="n"){FS.i=(FS.i+1)%n;show(true)}else if(a==="p"){FS.i=(FS.i-1+n)%n;show(true)}
      else if(a==="s"){location.hash=nx.h}
      else{window.removeEventListener("hashchange",FS.hook);FS=null;unmark();bar.remove()}})}
  function labelQuiz(cfg){
    const S=cfg.str||{};const old=document.getElementById("sb-lq");if(old)old.remove();
    const seen=new Set(),cands=[];
    document.querySelectorAll("svg text").forEach(el=>{const tx=(el.textContent||"").replace(/\s+/g," ").trim();
      if(tx.length<2||tx.length>34||!/[A-Za-z฀-๿]{2}/.test(tx)||seen.has(tx))return;
      const r=el.getBoundingClientRect();if(r.width<10||r.height<5)return;
      let n=el,vis=true;while(n&&n!==document.body){const cs=getComputedStyle(n);if(cs.display==="none"||cs.visibility==="hidden"||+cs.opacity<.2){vis=false;break}n=n.parentElement}
      if(!vis)return;seen.add(tx);cands.push({el,tx})});
    const root=document.createElement("div");root.id="sb-lq";
    root.innerHTML=`<style>
      #sb-lq .mask{position:absolute;z-index:99990;border-radius:6px;background:#F59E0B;box-shadow:0 0 0 3px rgba(245,158,11,.35);animation:sbp 1.2s ease-in-out infinite;display:grid;place-items:center;color:#fff;font:800 12px system-ui}
      @keyframes sbp{50%{box-shadow:0 0 0 8px rgba(245,158,11,.15)}}
      #sb-lq .pan{position:fixed;left:0;right:0;bottom:0;z-index:99995;background:#fff;color:#0E1116;border-radius:18px 18px 0 0;box-shadow:0 -6px 30px rgba(0,0,0,.18);padding:12px 16px calc(14px + env(safe-area-inset-bottom,0px));font:15px/1.4 -apple-system,system-ui,"Noto Sans Thai",sans-serif;max-width:640px;margin:0 auto}
      #sb-lq .hd{display:flex;align-items:center;gap:8px;margin-bottom:8px}#sb-lq .hd b{flex:1;font-weight:700}
      #sb-lq .sc{font-weight:800;color:#F59E0B}#sb-lq .x{border:0;background:#EEF0F3;border-radius:50%;width:32px;height:32px;font-size:16px;cursor:pointer}
      #sb-lq .os{display:grid;grid-template-columns:1fr 1fr;gap:8px}
      #sb-lq .o{border:2px solid transparent;background:#EEF0F3;border-radius:12px;padding:10px;font:600 14px/1.3 inherit;text-align:left;cursor:pointer;color:#0E1116}
      #sb-lq .o.ok{border-color:#16A34A;background:#DCFCE7}#sb-lq .o.bad{border-color:#DC2626;background:#FEE2E2}
      #sb-lq .cn{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}#sb-lq .cn button{border:2px solid transparent;background:#EEF0F3;color:inherit;border-radius:12px;padding:12px 6px;font:800 18px/1 inherit;cursor:pointer}#sb-lq .cn button.on{border-color:#0E9F8E}#sb-lq .cn small{display:block;font:500 11px/1.2 inherit;opacity:.7;margin-top:4px}#sb-lq .sub{font-size:13px;opacity:.7;margin:-4px 0 10px}#sb-lq .ms{display:flex;flex-wrap:wrap;gap:6px;margin:4px 0 12px;max-height:30vh;overflow:auto}#sb-lq .ms button{border:1.5px solid #DC2626;background:transparent;color:inherit;border-radius:999px;padding:6px 10px;font:600 13px inherit;cursor:pointer}#sb-lq .ms .ttl{width:100%;font-size:12px;font-weight:700;opacity:.7}#sb-lq .end{display:flex;gap:8px}#sb-lq .end button{flex:1;border:0;border-radius:12px;padding:12px;font:700 15px inherit;cursor:pointer}
      @media (prefers-color-scheme:dark){#sb-lq .pan{background:#15181E;color:#F2F4F7}#sb-lq .o,#sb-lq .x{background:#1E222A;color:#F2F4F7}#sb-lq .o.ok{background:#14532D}#sb-lq .o.bad{background:#7F1D1D}}
    </style><div class="mask" hidden>?</div><div class="pan"></div>`;
    document.body.appendChild(root);
    const mask=root.querySelector(".mask"),pan=root.querySelector(".pan");
    let N=0,i=0,c=0,cur=null,miss=[],only=null;const LS="sb-lq-n";
    const close=()=>{root.remove();removeEventListener("scroll",place,true);removeEventListener("resize",place)};
    function place(){if(!cur)return;const r=cur.el.getBoundingClientRect();mask.style.left=(r.left+scrollX-4)+"px";mask.style.top=(r.top+scrollY-3)+"px";mask.style.width=(r.width+8)+"px";mask.style.height=(r.height+6)+"px"}
    addEventListener("scroll",place,true);addEventListener("resize",place);
    function inView(o){const r=o.el.getBoundingClientRect();return r.top>40&&r.bottom<innerHeight-220&&r.left>0&&r.right<innerWidth}
    const used=new Set();
    function pick(){
      if(cands.length<4){round();return}
      const max=cands.length,cur0=+(localStorage.getItem(LS)||10),opts=[5,10,20].filter(n=>n<max);
      pan.innerHTML=`<div class="hd"><b>${S.howMany||"How many?"}</b><button class="x" type="button" aria-label="Close">✕</button></div><div class="sub">${(S.avail||"{n} available").replace("{n}",max)}</div><div class="cn">${opts.map(n=>`<button type="button" data-n="${n}" class="${n===cur0?"on":""}">${n}</button>`).join("")}<button type="button" data-n="${max}" class="${cur0>=max?"on":""}">${max}<small>${S.all||"All"}</small></button></div>`;
      pan.querySelector(".x").onclick=close;
      pan.querySelectorAll("[data-n]").forEach(b=>b.onclick=()=>{N=+b.dataset.n;try{localStorage.setItem(LS,N)}catch(e){}i=0;c=0;miss=[];only=null;used.clear();round()});
    }
    function flash(o){o.el.scrollIntoView({block:"center",behavior:"smooth"});cur=o;setTimeout(()=>{mask.hidden=false;mask.textContent="";place();setTimeout(()=>{mask.hidden=true;mask.textContent="?";cur=null},1600)},350)}
    function round(){
      if(cands.length<4){pan.innerHTML=`<div class="hd"><b>${S.title||"Label quiz"}</b><button class="x" type="button">✕</button></div><p>Not enough labels on this page.</p>`;pan.querySelector(".x").onclick=close;return}
      if(i>=N){mask.hidden=true;cur=null;if(!only)parent.postMessage({sb:"lqres",end:true,c,n:N},"*");const M=miss.slice();
        pan.innerHTML=`<div class="hd"><b>${S.title||"Label quiz"}</b><span class="sc">${c}/${N}</span></div>${M.length?`<div class="ms"><span class="ttl">${(S.missT||"Missed · {n}").replace("{n}",M.length)}</span>${M.map((o,k)=>`<button type="button" data-m="${k}"></button>`).join("")}</div>`:`<div class="sub" style="margin:0 0 12px">${S.allRight||"All correct"}</div>`}<div class="end"><button type="button" class="d" style="background:#EEF0F3;color:#0E1116">${S.done||"Done"}</button>${M.length?`<button type="button" class="r" style="background:#F59E0B;color:#fff">${(S.retry||"Retry missed ({n})").replace("{n}",M.length)}</button>`:`<button type="button" class="a" style="background:#0E9F8E;color:#fff">${S.again||"Again"}</button>`}</div>`;
        pan.querySelectorAll("[data-m]").forEach(b=>{const o=M[+b.dataset.m];b.textContent=o.tx;b.onclick=()=>flash(o)});
        const rb=pan.querySelector(".r");if(rb)rb.onclick=()=>{only=M;N=M.length;i=0;c=0;miss=[];used.clear();round()};
        pan.querySelector(".d").onclick=close;const ab=pan.querySelector(".a");if(ab)ab.onclick=()=>{pick()};return}
      let pool=cands.filter(o=>!used.has(o.tx)&&inView(o));if(pool.length<1)pool=cands.filter(o=>!used.has(o.tx));if(!pool.length){used.clear();pool=cands}
      cur=only?only[i]:pool[Math.floor(Math.random()*pool.length)];used.add(cur.tx);
      if(!inView(cur))cur.el.scrollIntoView({block:"center",behavior:"instant"});
      mask.hidden=false;place();
      const others=cands.filter(o=>o!==cur).sort((a,b)=>Math.abs(a.tx.length-cur.tx.length)-Math.abs(b.tx.length-cur.tx.length)+Math.random()*8-4).slice(0,3);
      const opts=[cur,...others].sort(()=>Math.random()-.5);
      pan.innerHTML=`<div class="hd"><b>${S.whatIs||"What is the highlighted label?"}</b><span class="sc">${i+1}/${N}</span><button class="x" type="button" aria-label="Close">✕</button></div><div class="os">${opts.map((o,k)=>`<button class="o" type="button" data-k="${k}"></button>`).join("")}</div>`;
      pan.querySelectorAll(".o").forEach((b,k)=>{b.textContent=opts[k].tx;b.onclick=()=>{const ok=opts[k]===cur;if(ok)c++;else miss.push(cur);
        pan.querySelectorAll(".o").forEach((x,j)=>{x.disabled=true;if(opts[j]===cur)x.classList.add("ok");else if(j===k)x.classList.add("bad")});
        mask.hidden=true;parent.postMessage({sb:"lqres",ok},"*");setTimeout(()=>{i++;round()},900)}});
      pan.querySelector(".x").onclick=close;
    }
    pick();
  }
  const ROOT = new URL(".", document.currentScript.src).href;
  const rootPath = new URL(ROOT).pathname, here = location.pathname;
  const isModule = here.indexOf(rootPath) === 0 && here.slice(rootPath.length).includes("/");
  const css = `
  .sb-pill{position:fixed;z-index:99999;left:calc(12px + env(safe-area-inset-left,0px));bottom:calc(12px + env(safe-area-inset-bottom,0px));
    display:flex;align-items:center;gap:6px;padding:9px 14px 9px 11px;border-radius:999px;background:#0E1116;color:#F2F4F7;
    font:600 13px/1 system-ui,-apple-system,sans-serif;text-decoration:none;box-shadow:0 4px 16px rgba(0,0,0,.25);opacity:.92}
  .sb-pill:hover{opacity:1}
  .sb-pill svg{width:16px;height:16px}
  .sb-upd{position:fixed;z-index:100000;left:50%;transform:translateX(-50%);top:calc(12px + env(safe-area-inset-top,0px));
    display:flex;align-items:center;gap:10px;padding:10px 12px 10px 16px;border-radius:14px;background:#0E1116;color:#F2F4F7;
    font:500 14px/1.2 system-ui,-apple-system,sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.3);max-width:calc(100vw - 32px)}
  .sb-upd button{border:0;border-radius:10px;padding:8px 12px;font:700 13px system-ui,sans-serif;background:#0E9F8E;color:#fff;cursor:pointer}
  .sb-upd .x{background:transparent;color:#F2F4F7;padding:8px 6px}`;
  function addCss(){const s=document.createElement("style");s.textContent=css;document.head.appendChild(s)}
  function ready(f){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f()}
  ready(()=>{
    addCss();
    if(isModule){
      const a=document.createElement("a");a.className="sb-pill";a.href=ROOT+"#/";a.setAttribute("aria-label","Back to library");
      a.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z"/><path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H13v16h5.5c.8 0 1.5-.7 1.5-1.5z"/></svg>Library';
      document.body.appendChild(a);
      try{const k="sb-recent",id=location.pathname.split("/").slice(-2).join("/");
        const r=JSON.parse(localStorage.getItem(k)||"[]").filter(x=>x.id!==id);r.unshift({id,t:Date.now()});localStorage.setItem(k,JSON.stringify(r.slice(0,6)))}catch(e){}
    }
  });
  if(!("serviceWorker" in navigator))return;
  let shown=false;
  function banner(worker){
    if(shown)return;shown=true;
    ready(()=>{const d=document.createElement("div");d.className="sb-upd";d.setAttribute("role","status");
      d.innerHTML='<span>มีเวอร์ชันใหม่ · New version</span><button type="button">Refresh</button><button class="x" type="button" aria-label="Later">✕</button>';
      d.querySelector("button").onclick=()=>worker.postMessage("SKIP_WAITING");
      d.querySelector(".x").onclick=()=>d.remove();document.body.appendChild(d)});
  }
  let reloading=false;
  navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!reloading){reloading=true;location.reload()}});
  window.addEventListener("load",()=>{
    navigator.serviceWorker.register(ROOT+"sw.js",{scope:ROOT}).then(reg=>{
      if(reg.waiting&&navigator.serviceWorker.controller)banner(reg.waiting);
      reg.addEventListener("updatefound",()=>{const w=reg.installing;if(!w)return;
        w.addEventListener("statechange",()=>{if(w.state==="installed"&&navigator.serviceWorker.controller)banner(w)})});
      document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible")reg.update().catch(()=>{})});
    }).catch(()=>{});
  });
})();

const SEC=[];
const GN={"Kidney":"ไต · Kidney","Suprarenal gland":"ต่อมหมวกไต · Suprarenal","Ureter":"ท่อไต · Ureter","Bladder":"กระเพาะปัสสาวะ · Bladder","Urethra":"ท่อปัสสาวะ · Urethra","Posterior abdominal wall":"ผนังช่องท้องด้านหลัง","Clinical":"Clinical"};
/* 1 · location */
/* Replacement diagrams: original SVGs drawn for this app, offered beside the
   reproduced textbook figures. Toggled by the "view" tool on each topic. */
const RD={
  fascia:()=>`<svg viewBox="0 0 640 400" role="img" aria-label="Transverse section at L1 showing the fat and fascial layers around the kidney"> <ellipse class="f" cx="320" cy="210" rx="290" ry="150" style="fill:var(--a-musc);opacity:.45"/> <ellipse class="f" cx="320" cy="212" rx="268" ry="132" style="fill:var(--a-fat);opacity:.55"/> <text class="s" x="320" y="372" text-anchor="middle">ผนังหน้าท้องและกล้ามเนื้อ posterior abdominal wall</text> <path class="f" d="M72,212 a196,112 0 0 1 496,0 a196,112 0 0 1 -496,0z" style="fill:var(--a-fascia);opacity:.5"/> <ellipse class="f" cx="320" cy="300" rx="46" ry="40" style="fill:var(--a-bone)"/> <text class="s" x="320" y="305" text-anchor="middle">L1 body</text> <ellipse class="f" cx="248" cy="286" rx="30" ry="26" style="fill:var(--a-musc)"/> <text class="s" x="248" y="290" text-anchor="middle">psoas</text> <ellipse class="f" cx="392" cy="286" rx="30" ry="26" style="fill:var(--a-musc)"/> <text class="s" x="392" y="290" text-anchor="middle">psoas</text> <g> <ellipse class="f" cx="168" cy="196" rx="92" ry="74" style="fill:var(--a-fat)"/> <ellipse class="f" cx="168" cy="196" rx="58" ry="46" style="fill:var(--a-organ)"/> <path class="f" d="M168,160 q-22,36 0,72 q22,-36 0,-72z" style="fill:var(--sb-surface);opacity:.6"/> <text class="t" x="168" y="200" text-anchor="middle">ไตขวา</text> </g> <g> <ellipse class="f" cx="472" cy="196" rx="92" ry="74" style="fill:var(--a-fat)"/> <ellipse class="f" cx="472" cy="196" rx="58" ry="46" style="fill:var(--a-organ)"/> <text class="t" x="472" y="200" text-anchor="middle">ไตซ้าย</text> </g> <circle class="f" cx="352" cy="252" r="17" style="fill:var(--a-art)"/> <text class="s" x="352" y="256" text-anchor="middle" style="fill:#fff">Ao</text> <ellipse class="f" cx="296" cy="250" rx="19" ry="15" style="fill:var(--a-vein)"/> <text class="s" x="296" y="254" text-anchor="middle" style="fill:#fff">IVC</text> <path class="ld" d="M168,120 L168,56"/><circle class="ldd" cx="168" cy="120" r="1.8"/> <text class="t" x="168" y="48" text-anchor="middle">1 · Renal capsule</text> <text class="s" x="168" y="64" text-anchor="middle">เยื่อบาง แกะออกง่าย</text> <path class="ld" d="M110,152 L36,112"/><circle class="ldd" cx="110" cy="152" r="1.8"/> <text class="s" x="34" y="104" text-anchor="start">2 · Perirenal fat</text> <path class="ld" d="M86,232 L30,268"/><circle class="ldd" cx="86" cy="232" r="1.8"/> <text class="s" x="28" y="284" text-anchor="start">3 · Renal fascia (Gerota)</text> <path class="ld" d="M540,246 L604,282"/><circle class="ldd" cx="540" cy="246" r="1.8"/> <text class="s" x="606" y="298" text-anchor="end">4 · Pararenal fat</text> <text class="h" x="320" y="30" text-anchor="middle">ชั้นหุ้มไต 4 ชั้น จากในออกนอก</text> </svg>`,
  vessels:()=>`<svg viewBox="0 0 640 380" role="img" aria-label="Renal segmental artery territory map, anterior and posterior views"> <text class="h" x="168" y="26" text-anchor="middle">Anterior view</text> <text class="h" x="472" y="26" text-anchor="middle">Posterior view</text> <g> <path class="f" d="M168,54 c58,0 84,48 84,110 c0,62 -26,110 -84,110 c-22,0 -34,-14 -34,-34 c0,-18 10,-28 10,-76 c0,-48 -10,-58 -10,-76 c0,-20 12,-34 34,-34z" style="fill:#E7B7C2"/> <path class="f" d="M168,54 c34,0 58,18 72,48 l-78,20 c-10,-24 -16,-46 -18,-68 c8,-0 16,0 24,0z" style="fill:#C9E2D3"/> <path class="f" d="M240,102 c8,20 12,42 12,62 l-84,0 l0,-42z" style="fill:#F2D7A8"/> <path class="f" d="M252,164 c0,22 -4,44 -12,62 l-72,-20 l0,-42z" style="fill:#CBD9EE"/> <path class="f" d="M240,226 c-14,30 -38,48 -72,48 l0,-68z" style="fill:#E3CCE8"/> <text class="s" x="188" y="86">apical</text> <text class="s" x="196" y="148">ant. sup.</text> <text class="s" x="196" y="200">ant. inf.</text> <text class="s" x="190" y="256">inferior</text> </g> <g> <path class="f" d="M472,54 c-58,0 -84,48 -84,110 c0,62 26,110 84,110 c22,0 34,-14 34,-34 c0,-18 -10,-28 -10,-76 c0,-48 10,-58 10,-76 c0,-20 -12,-34 -34,-34z" style="fill:#B9C8DE"/> <path class="f" d="M472,54 c-34,0 -58,18 -72,48 l78,20 c10,-24 16,-46 18,-68 c-8,0 -16,0 -24,0z" style="fill:#C9E2D3"/> <path class="f" d="M400,102 c-10,26 -14,78 0,124 l78,-22 l0,-80z" style="fill:#B9C8DE"/> <path class="f" d="M400,226 c14,30 38,48 72,48 l0,-68z" style="fill:#E3CCE8"/> <text class="s" x="452" y="86">apical</text> <text class="s" x="436" y="168">posterior</text> <text class="s" x="450" y="256">inferior</text> </g> <path class="vo" d="M252,164 L310,164" stroke-width="7"/><path class="v" d="M252,164 L310,164" stroke-width="5" style="stroke:var(--a-art)"/> <path class="vo" d="M388,164 L330,164" stroke-width="7"/><path class="v" d="M388,164 L330,164" stroke-width="5" style="stroke:var(--a-art)"/> <text class="t" x="320" y="156" text-anchor="middle">renal a.</text> <text class="s" x="320" y="186" text-anchor="middle">L1–L2</text> <text class="s" x="320" y="318" text-anchor="middle">Anterior division → apical · anterior superior · anterior inferior · inferior</text> <text class="s" x="320" y="336" text-anchor="middle">Posterior division → posterior (เลี้ยงหลังเกือบทั้งหมด)</text> <text class="s" x="320" y="358" text-anchor="middle" style="fill:var(--sb-accent);font-weight:700">ไม่มี collateral ระหว่าง segment → อุดตัน = infarct ตามรูปทรง segment</text> </svg>`,
  ureter:()=>`<svg viewBox="0 0 640 400" role="img" aria-label="Course of the ureter with the three normal constrictions"> <ellipse class="f" cx="140" cy="76" rx="50" ry="38" style="fill:var(--a-organ)"/> <text class="s" x="140" y="80" text-anchor="middle">ไต</text> <ellipse class="f" cx="500" cy="76" rx="50" ry="38" style="fill:var(--a-organ)"/> <text class="s" x="500" y="80" text-anchor="middle">ไต</text> <path class="f" d="M300,318 q0,-34 36,-34 l-16,-18 l-320,0 z" style="fill:none;stroke:none"/> <path class="f" d="M250,316 q70,-26 140,0 q16,34 -16,48 q-54,14 -108,0 q-32,-14 -16,-48z" style="fill:var(--a-organ)"/> <text class="s" x="320" y="346" text-anchor="middle">bladder</text> <path class="vo" d="M158,110 C176,150 192,208 214,258 C230,292 240,306 256,314" stroke-width="12"/> <path class="v" d="M158,110 C176,150 192,208 214,258 C230,292 240,306 256,314" stroke-width="9" style="stroke:#C9A227"/> <path class="vo" d="M482,110 C464,150 448,208 426,258 C410,292 400,306 384,314" stroke-width="12"/> <path class="v" d="M482,110 C464,150 448,208 426,258 C410,292 400,306 384,314" stroke-width="9" style="stroke:#C9A227"/> <circle cx="160" cy="116" r="11" style="fill:none;stroke:var(--sb-accent);stroke-width:2.6"/> <circle cx="214" cy="258" r="11" style="fill:none;stroke:var(--sb-accent);stroke-width:2.6"/> <circle cx="256" cy="314" r="11" style="fill:none;stroke:var(--sb-accent);stroke-width:2.6"/> <path class="ld" d="M150,118 L48,142"/><circle class="ldd" cx="150" cy="118" r="1.8"/> <text class="t" x="44" y="138" text-anchor="end" style="text-anchor:start">1 · UPJ</text> <text class="s" x="44" y="154">pelviureteric junction</text> <path class="ld" d="M204,262 L120,264 L48,264"/><circle class="ldd" cx="204" cy="262" r="1.8"/> <text class="t" x="44" y="282">2 · Pelvic brim</text> <text class="s" x="44" y="300">ข้าม bifurcation ของ common iliac a.</text> <path class="ld" d="M252,324 L200,356"/><circle class="ldd" cx="252" cy="324" r="1.8"/> <text class="t" x="196" y="354" text-anchor="end">3 · VUJ</text> <text class="s" x="196" y="370" text-anchor="end">ureteric orifice · แคบที่สุด</text> <text class="s" x="560" y="200" text-anchor="middle">วิ่งบน psoas</text> <text class="s" x="560" y="216" text-anchor="middle">retroperitoneal</text> <text class="h" x="320" y="26" text-anchor="middle">Ureter: 3 จุดแคบตามธรรมชาติ</text> <text class="s" x="440" y="372" text-anchor="middle" style="fill:var(--sb-accent);font-weight:700">ปวดร้าว loin → groin ตาม afferent T11–L2</text> </svg>`,
  plexus:()=>`<svg viewBox="0 0 640 420" role="img" aria-label="Lumbar plexus as a root-to-branch tree"> <text class="h" x="76" y="28" text-anchor="middle">Roots</text> <text class="h" x="400" y="28" text-anchor="middle">Branches</text> <g> <rect class="f" x="44" y="46" width="64" height="30" rx="7" style="fill:var(--a-bone)"/><text class="t" x="76" y="66" text-anchor="middle">T12</text> <rect class="f" x="44" y="96" width="64" height="30" rx="7" style="fill:var(--a-fascia)"/><text class="t" x="76" y="116" text-anchor="middle">L1</text> <rect class="f" x="44" y="146" width="64" height="30" rx="7" style="fill:var(--a-fascia)"/><text class="t" x="76" y="166" text-anchor="middle">L2</text> <rect class="f" x="44" y="196" width="64" height="30" rx="7" style="fill:var(--a-fascia)"/><text class="t" x="76" y="216" text-anchor="middle">L3</text> <rect class="f" x="44" y="246" width="64" height="30" rx="7" style="fill:var(--a-fascia)"/><text class="t" x="76" y="266" text-anchor="middle">L4</text> </g> <rect class="f" x="150" y="60" width="54" height="230" rx="18" style="fill:var(--a-musc);opacity:.5"/> <text class="s" x="177" y="180" text-anchor="middle" transform="rotate(-90 177 180)">psoas major</text> <g style="stroke:var(--a-nerve);stroke-width:2.4;fill:none;stroke-linecap:round"> <path d="M108,61 C130,61 140,86 150,92"/> <path d="M108,111 C130,111 140,100 150,98"/> <path d="M108,161 C130,161 142,150 150,146"/> <path d="M108,161 C132,161 142,196 150,200"/> <path d="M108,211 C132,211 142,204 150,202"/> <path d="M108,211 C132,211 142,248 150,252"/> <path d="M108,261 C132,261 142,256 150,254"/> <path d="M204,92 L252,78"/><path d="M204,100 L252,122"/> <path d="M204,146 L252,166"/><path d="M204,200 L252,210"/> <path d="M204,252 L252,256"/><path d="M204,254 L252,300"/> </g> <g> <rect class="f" x="252" y="62" width="214" height="30" rx="7" style="fill:var(--sb-surface)"/> <text class="t" x="262" y="82" style="text-anchor:start">Iliohypogastric n.</text><text class="s" x="452" y="82" text-anchor="end">L1</text> <rect class="f" x="252" y="106" width="214" height="30" rx="7" style="fill:var(--sb-surface)"/> <text class="t" x="262" y="126" style="text-anchor:start">Ilio-inguinal n.</text><text class="s" x="452" y="126" text-anchor="end">L1</text> <rect class="f" x="252" y="150" width="214" height="30" rx="7" style="fill:var(--sb-surface)"/> <text class="t" x="262" y="170" style="text-anchor:start">Genitofemoral n.</text><text class="s" x="452" y="170" text-anchor="end">L1–L2</text> <rect class="f" x="252" y="194" width="214" height="30" rx="7" style="fill:var(--sb-surface)"/> <text class="t" x="262" y="214" style="text-anchor:start">Lat. cutaneous n. of thigh</text><text class="s" x="452" y="214" text-anchor="end">L2–L3</text> <rect class="f" x="252" y="238" width="214" height="30" rx="7" style="fill:var(--sb-surface)"/> <text class="t" x="262" y="258" style="text-anchor:start">Femoral n.</text><text class="s" x="452" y="258" text-anchor="end">L2–L4</text> <rect class="f" x="252" y="282" width="214" height="30" rx="7" style="fill:var(--sb-surface)"/> <text class="t" x="262" y="302" style="text-anchor:start">Obturator n.</text><text class="s" x="452" y="302" text-anchor="end">L2–L4</text> </g> <text class="s" x="486" y="82" style="text-anchor:start">ผ่านหลังไต</text> <text class="s" x="486" y="126" style="text-anchor:start">ผ่านหลังไต</text> <text class="s" x="486" y="170" style="text-anchor:start">วิ่งบนหน้า psoas</text> <text class="s" x="486" y="258" style="text-anchor:start">ใหญ่สุด · lateral ต่อ psoas</text> <text class="s" x="486" y="302" style="text-anchor:start">medial ต่อ psoas</text> <text class="s" x="320" y="350" text-anchor="middle" style="fill:var(--sb-accent);font-weight:700">Femoral อยู่ด้านข้าง psoas · Obturator อยู่ด้านใน — จำคู่นี้ไว้</text> <text class="s" x="320" y="378" text-anchor="middle">Iliohypogastric และ ilio-inguinal วิ่งหลังไต → บาดเจ็บได้ตอนผ่าตัดไต</text> <text class="s" x="320" y="402" text-anchor="middle">L4 ที่เหลือ + L5 = lumbosacral trunk → ลงไป sacral plexus</text> </svg>`,
  bladder:()=>`<svg viewBox="0 0 640 380" role="img" aria-label="Bladder opened anteriorly showing the trigone between the two ureteric orifices and the internal urethral orifice"> <path class="f" d="M160,96 q160,-50 320,0 q44,80 24,150 q-20,66 -184,66 q-164,0 -184,-66 q-20,-70 24,-150z" style="fill:var(--a-organ)"/> <g style="stroke:var(--a-edge);stroke-width:1;fill:none;opacity:.55"> <path d="M190,140 q60,16 120,2"/><path d="M196,172 q54,16 108,0"/><path d="M340,140 q60,16 114,0"/> <path d="M346,174 q56,14 106,-2"/><path d="M200,206 q70,16 136,0"/><path d="M352,206 q60,14 100,-2"/> </g> <text class="s" x="252" y="124" style="fill:var(--sb-ink2)">rugae (พับ · ยืดได้)</text> <path class="f" d="M214,206 L426,206 L320,300z" style="fill:var(--sb-accent);opacity:.3"/> <path d="M214,206 L426,206 L320,300z" style="fill:none;stroke:var(--sb-accent);stroke-width:2.4"/> <text class="t" x="320" y="248" text-anchor="middle" style="fill:var(--sb-accent)">TRIGONE</text> <text class="s" x="320" y="266" text-anchor="middle">เรียบ · ยึดแน่น</text> <g style="stroke:#C9A227;stroke-width:8;fill:none;stroke-linecap:round"> <path d="M118,146 L212,204"/><path d="M522,146 L428,204"/> </g> <circle class="f" cx="214" cy="206" r="8" style="fill:var(--sb-surface)"/> <circle class="f" cx="426" cy="206" r="8" style="fill:var(--sb-surface)"/> <text class="s" x="112" y="138" text-anchor="middle">ureter</text> <text class="s" x="528" y="138" text-anchor="middle">ureter</text> <path class="ld" d="M206,214 L120,250"/><circle class="ldd" cx="206" cy="214" r="1.8"/> <text class="s" x="116" y="266" text-anchor="middle">ureteric orifice</text> <path class="f" d="M300,298 l40,0 l-6,52 l-28,0z" style="fill:var(--a-organ)"/> <circle class="f" cx="320" cy="300" r="8" style="fill:var(--sb-surface)"/> <path class="ld" d="M330,306 L434,314"/><circle class="ldd" cx="330" cy="306" r="1.8"/> <text class="t" x="440" y="312" style="text-anchor:start">internal urethral orifice</text> <text class="s" x="440" y="328" style="text-anchor:start">จุดต่ำสุด · neck ยึดแน่นที่สุด</text> <text class="s" x="320" y="366" text-anchor="middle">Apex ชี้ไป pubic symphysis → median umbilical ligament (เศษ urachus)</text> <text class="h" x="320" y="34" text-anchor="middle">Bladder เปิดด้านหน้า</text> <text class="s" x="320" y="54" text-anchor="middle" style="fill:var(--sb-accent);font-weight:700">trigone เป็นจุดที่ไวต่อการอักเสบและเป็นตำแหน่งที่พบมะเร็งบ่อย</text> </svg>`,
  urethra:()=>`<svg viewBox="0 0 640 400" role="img" aria-label="Flow diagram of sympathetic and parasympathetic supply to the bladder"> <rect class="f" x="30" y="60" width="128" height="58" rx="9" style="fill:var(--a-fascia)"/> <text class="t" x="94" y="84" text-anchor="middle">T11–L2</text> <text class="s" x="94" y="102" text-anchor="middle">sympathetic</text> <rect class="f" x="30" y="240" width="128" height="58" rx="9" style="fill:var(--a-fascia)"/> <text class="t" x="94" y="264" text-anchor="middle">S2–S4</text> <text class="s" x="94" y="282" text-anchor="middle">parasympathetic</text> <rect class="f" x="212" y="56" width="150" height="66" rx="9" style="fill:var(--sb-surface)"/> <text class="s" x="287" y="80" text-anchor="middle">lumbar splanchnic n.</text> <text class="s" x="287" y="98" text-anchor="middle">→ sup. hypogastric plexus</text> <rect class="f" x="212" y="236" width="150" height="66" rx="9" style="fill:var(--sb-surface)"/> <text class="s" x="287" y="260" text-anchor="middle">pelvic splanchnic n.</text> <text class="s" x="287" y="278" text-anchor="middle">(nervi erigentes)</text> <rect class="f" x="412" y="146" width="146" height="66" rx="9" style="fill:var(--sb-accent);opacity:.26"/> <rect x="412" y="146" width="146" height="66" rx="9" style="fill:none;stroke:var(--sb-accent);stroke-width:2.2"/> <text class="t" x="485" y="170" text-anchor="middle">Inferior hypogastric</text> <text class="t" x="485" y="188" text-anchor="middle">plexus</text> <text class="s" x="485" y="204" text-anchor="middle">→ vesical plexus</text> <g style="stroke:var(--a-nerve);stroke-width:2.6;fill:none;stroke-linecap:round" marker-end=""> <path d="M158,89 L212,89"/><path d="M362,89 C392,89 396,140 412,160"/> <path d="M158,269 L212,269"/><path d="M362,269 C392,269 396,218 412,198"/> </g> <ellipse class="f" cx="485" cy="318" rx="62" ry="40" style="fill:var(--a-organ)"/> <text class="t" x="485" y="322" text-anchor="middle">bladder</text> <path style="stroke:var(--a-nerve);stroke-width:2.6;fill:none" d="M485,212 L485,278"/> <rect class="f" x="30" y="150" width="128" height="52" rx="9" style="fill:var(--sb-surface)"/> <text class="s" x="94" y="170" text-anchor="middle">pudendal n. (S2–S4)</text> <text class="s" x="94" y="188" text-anchor="middle">somatic · ใต้อำนาจจิตใจ</text> <path style="stroke:var(--a-nerve);stroke-width:2.2;fill:none;stroke-dasharray:5 4" d="M158,176 C280,176 330,352 420,344"/> <text class="s" x="300" y="344" text-anchor="middle">→ external urethral sphincter</text> <text class="s" x="608" y="96" text-anchor="end">Sympathetic: เก็บปัสสาวะ</text> <text class="s" x="608" y="114" text-anchor="end">คลาย detrusor · ปิด internal sphincter</text> <text class="s" x="608" y="258" text-anchor="end" style="fill:var(--sb-accent);font-weight:700">Parasympathetic: ปัสสาวะออก</text> <text class="s" x="608" y="276" text-anchor="end">บีบ detrusor · คลาย internal sphincter</text> <text class="h" x="320" y="28" text-anchor="middle">เส้นประสาทที่ควบคุมกระเพาะปัสสาวะ</text> <text class="s" x="320" y="388" text-anchor="middle">Afferent ความรู้สึกปวด/เต็ม กลับไปตามทางเดียวกัน → ปวดร้าวบริเวณ T11–L2 และ S2–S4</text> </svg>`,
};

SEC.push({id:"loc",k:"Kidney",t:"Location & position",leg:["cortex","gland","art","vein","uro","musc","bone"],figs:[["loc-1","Retroperitoneal position (Gray Fig 4.149)"],["loc-2","Urinary system, anterior view"]],
draw(){
 const LV=[["T11",46],["T12",88],["L1",132],["L2",176],["L3",220],["L4",264],["L5",308]];
 let b="";
 b+=F("musc2","M58,104 C100,24 262,10 304,44 L336,44 C378,10 540,24 582,104 L570,112 C530,48 390,40 336,62 L304,62 C250,40 110,48 70,112 Z");
 LV.forEach(([n,y])=>{b+=`<line class="guide" x1="40" y1="${y}" x2="600" y2="${y}"/>`+T(22,y+4,n,{c:"m s",a:"start"})});
 b+=vertebrae(320,LV)+F("bone",sm([[292,326],[348,326],[352,360],[338,402],[320,428],[302,402],[288,360]]));
 b+=ilium(1)+ilium(-1);
 const ps=[[293,90],[284,150],[268,230],[250,310],[236,390],[230,452],[264,454],[270,392],[282,316],[296,236],[305,160],[305,92]];
 b+=F("musc",sm(ps))+F("musc",sm(mir(ps)));
 const ql=[[262,142],[214,146],[186,158],[178,250],[186,300],[244,300],[256,240]];
 b+=F("musc2",sm(ql))+F("musc2",sm(mir(ql)));
 b+=V("bone","M292,98 C250,102 210,120 178,152",8)+V("bone","M292,56 C238,62 180,94 130,142",8)+V("bone","M348,56 C402,62 460,94 510,142",8)+V("bone","M348,98 C390,102 430,120 462,152",8);
 b+=F("cortex",bean(205,200,96,150,1,.18))+F("cortex",bean(435,180,96,150,-1,-.18));
 b+=F("gland",sm([[190,134],[208,94],[236,126],[220,138]]))+F("gland",sm([[394,154],[398,118],[418,96],[438,100],[422,112],[410,132],[404,158]]));
 b+=V("gonad vein","M262,330 C276,282 292,242 300,216",2.4)+V("vein","M402,330 C396,272 392,222 390,182",2.4);
 b+=V("art","M326,152 C300,156 270,172 246,190",6);
 b+=V("vein","M302,40 L302,282",17)+V("vein","M302,282 C290,310 276,336 262,372",11)+V("vein","M302,282 C320,306 344,330 368,364",11);
 b+=V("art","M334,40 L334,264",15)+V("art","M334,264 C318,292 300,322 280,352",9)+V("art","M334,264 C350,292 368,322 388,352",9);
 b+=V("art","M342,146 C366,150 388,160 404,170",6)+C("art",334,136,6);
 b+=V("vein","M398,180 C368,176 340,164 308,160",7)+V("vein","M246,202 C264,194 284,182 298,174",7);
 b+=V("uro","M244,212 C254,252 262,300 266,340 C268,372 272,404 296,452",4.5)+V("uro","M396,208 C390,252 380,300 376,340 C374,372 370,404 344,452",4.5);
 b+=E("blad",320,468,42,26);
 if(ST.labels){b+=T(320,30,"Diaphragm",{c:"s m"})+TL(150,84,["Right","suprarenal"],{a:"end",c:"s"})+LD(210,110,152,90)+TL(508,78,["Left","suprarenal"],{a:"start",c:"s"})+LD(420,104,506,84)+
  T(204,212,"Right kidney",{c:"b"})+T(438,186,"Left kidney",{c:"b"})+T(120,150,"Rib XI",{a:"end",c:"s"})+T(166,170,"Rib XII",{a:"end",c:"s"})+T(518,150,"Rib XI",{a:"start",c:"s"})+T(472,172,"Rib XII",{a:"start",c:"s"})+
  T(366,62,"Aorta",{a:"start",c:"s"})+T(282,62,"IVC",{a:"end",c:"s"})+T(372,128,"SMA",{a:"start",c:"s"})+LD(338,134,370,126)+
  TL(632,252,["Left renal v.","ผ่านหน้า aorta","ใต้ SMA"],{a:"end",c:"s"})+LD(352,163,560,244)+TL(26,252,["Right renal a.","ผ่านหลัง IVC"],{a:"start",c:"s"})+LD(286,158,104,258)+
  T(214,382,"Ureter",{a:"end",c:"s"})+LD(266,350,216,378)+T(320,502,"Urinary bladder",{c:"s"})+T(226,440,"Psoas major",{a:"end",c:"s"})+LD(244,424,228,436)+
  TL(26,312,["Quadratus","lumborum"],{a:"start",c:"s"})+LD(196,270,92,308)}
 return svg(b)},
notes:()=>`<h3>ตำแหน่ง</h3><ul>
 <li><b>Retroperitoneal</b> อยู่หลัง parietal peritoneum ใน extraperitoneal tissue ข้างกระดูกสันหลัง ${S.gr}</li>
 <li>อยู่ระหว่าง <b>T12–L3</b> · <b>ไตขวาต่ำกว่าซ้าย</b> เพราะมีตับอยู่ด้านบน ${S.gr}</li>
 <li>ไตซ้าย <b>ยาวและเพรียวกว่า</b> และอยู่ใกล้ midline มากกว่า ${S.gr}</li>
 <li>ขั้วบนไตขวาอยู่หน้า <b>rib XII</b> · ขั้วบนไตซ้ายอยู่หน้า <b>rib XI และ XII</b> → costodiaphragmatic recess ของ pleura ยื่นลงมาหลังไต ${S.gr}</li>
 <li>ขนาด ~ <b>10 × 5 × 2.5 cm</b> · Hilum อยู่ระดับ ~L1 ${S.gr}${S.x}</li></ul>
 <div class="pearl"><b>Surface marking:</b> ด้านหลัง ไตอยู่ข้าง spinous process T12–L3 · ขั้วบนไต 2 ข้างอยู่ใต้ rib XII/XI · ไตขยับลงได้ ~2–3 cm ตอนหายใจเข้า ${S.x}</div>
 <h3>หลอดเลือดใหญ่</h3><ul>
 <li><b>Right renal a.</b> ยาวกว่า และผ่าน <b>หลัง IVC</b> ${S.gr}</li>
 <li><b>Left renal v.</b> ยาวกว่า ผ่าน <b>หน้า aorta ใต้ SMA</b> → ถูกบีบได้ (nutcracker) ${S.gr}</li></ul>`});

/* 2 · relations */
SEC.push({id:"rel",k:"Kidney",t:"Relations",tools:[["view",[["ant","Anterior"],["post","Posterior"]]]],figs:[["rel-1","Anterior & posterior relations (Gray Fig 4.150–4.151)"]],
draw(){
 let b="";const K1=beanPts(190,250,150,250,1,.1),K2=beanPts(450,236,150,250,-1,-.1);
 b+=`<clipPath id="ck1"><path d="${sm(K1)}"/></clipPath><clipPath id="ck2"><path d="${sm(K2)}"/></clipPath>`;
 const Z=(clip,pts,col,hatch,lab,lx,ly,o={})=>`<g clip-path="url(#${clip})"><path class="zone" d="M${pts.map(p=>p.join(",")).join(" L")}Z" style="fill:${col}"/>${hatch?`<path d="M${pts.map(p=>p.join(",")).join(" L")}Z" class="hatch"/>`:""}</g>`+(ST.labels&&lab?TL(lx,ly,lab,{c:"s "+(o.c||""),a:o.a||"middle"}):"");
 if(ST.view==="ant"){
  b+=Z("ck1",[[100,110],[268,110],[256,148],[206,160],[160,150]],"var(--a-gland)",0,["Suprarenal"],214,136)+
   Z("ck1",[[100,150],[160,150],[206,160],[256,148],[275,168],[238,232],[206,262],[100,262]],"#A9584A",1,["Liver"],170,210,{c:"w"})+
   Z("ck1",[[238,232],[275,168],[300,168],[300,330],[244,310],[226,262]],"#E7A35A",0,["Duodenum","(2nd part)"],262,250)+
   Z("ck1",[[100,262],[206,262],[220,300],[196,400],[100,400]],"#6DAE8C",0,["Right colic","flexure"],156,322)+
   Z("ck1",[[206,262],[226,262],[244,310],[300,330],[300,400],[196,400],[220,300]],"#E6A8B4",1,["Small","intestine"],244,346);
  b+=Z("ck2",[[350,96],[440,96],[432,138],[392,160],[350,156]],"var(--a-gland)",0,["Suprarenal"],396,130)+
   Z("ck2",[[350,156],[392,160],[432,138],[440,96],[478,96],[468,186],[410,206],[350,200]],"#D9727A",1,["Stomach"],420,176,{c:"w"})+
   Z("ck2",[[440,96],[560,96],[560,206],[492,206],[468,186],[478,96]],"#8E5A9E",1,["Spleen"],512,160,{c:"w"})+
   Z("ck2",[[350,200],[410,206],[468,186],[492,206],[560,206],[560,256],[350,262]],"#F0C36A",0,["Pancreas"],452,236)+
   Z("ck2",[[462,256],[560,256],[560,400],[482,400]],"#6DAE8C",0,["Left colic","flexure /","desc. colon"],516,300)+
   Z("ck2",[[350,262],[462,256],[482,400],[350,400]],"#E6A8B4",1,["Jejunum"],410,330);
  b+=`<path class="f" d="${sm(K1)}" style="fill:none;stroke-width:2"/><path class="f" d="${sm(K2)}" style="fill:none;stroke-width:2"/>`;
  
  if(ST.labels)b+=T(190,44,"Right kidney · anterior",{c:"b"})+T(450,44,"Left kidney · anterior",{c:"b"})+
   `<rect x="150" y="452" width="16" height="12" rx="2" style="fill:#999"/><rect x="150" y="452" width="16" height="12" class="hatch"/>`+T(174,462,"ลายขีด = มี peritoneum คั่น",{a:"start",c:"s"})+
   `<rect x="370" y="452" width="16" height="12" rx="2" style="fill:#999"/>`+T(394,462,"ทึบ = ติดกับไตโดยตรง",{a:"start",c:"s"});
 }else{
  const post=(clip,cx,cy,ribs)=>{let s=Z(clip,[[cx-90,cy-140],[cx+90,cy-140],[cx+90,cy-52],[cx-90,cy-52]],"#C98F86",0,["Diaphragm"],cx,cy-80)+
    Z(clip,[[cx-90,cy-52],[cx-28,cy-52],[cx-28,cy+150],[cx-90,cy+150]],"#CF7468",0,cx<320?["Transversus","abdominis"]:["Psoas","major"],cx-58,cy+70)+
    Z(clip,[[cx-28,cy-52],[cx+30,cy-52],[cx+30,cy+150],[cx-28,cy+150]],"#E3A196",0,["Quadratus","lumborum"],cx,cy+20)+
    Z(clip,[[cx+30,cy-52],[cx+90,cy-52],[cx+90,cy+150],[cx+30,cy+150]],"#CF7468",0,cx<320?["Psoas","major"]:["Transversus","abdominis"],cx+60,cy+70);
   return s+ribs};
  const nv=(cx,cy)=>V("nerve",`M${cx-100},${cy+40} L${cx+100},${cy+80}`,2.4)+V("nerve",`M${cx-100},${cy+82} L${cx+100},${cy+118}`,2.4);
  b+=post("ck1",190,250,"")+post("ck2",450,236,"");
  b+=`<path class="f" d="${sm(K1)}" style="fill:none;stroke-width:2"/><path class="f" d="${sm(K2)}" style="fill:none;stroke-width:2"/>`;
  b+=V("bone","M96,150 C150,170 220,186 300,190",7)+V("bone","M96,190 C150,206 220,222 300,226",7)+V("bone","M344,168 C420,176 480,186 560,196",7);
  b+=nv(190,250)+nv(450,236);
  if(ST.labels)b+=T(190,44,"Left kidney · posterior",{c:"b"})+T(450,44,"Right kidney · posterior",{c:"b"})+T(90,146,"Rib XI",{a:"end",c:"s"})+T(90,194,"Rib XII",{a:"end",c:"s"})+T(566,200,"Rib XII",{a:"start",c:"s"})+
   TL(26,300,["Subcostal n.","Iliohypogastric /","ilio-inguinal n."],{a:"start",c:"s"})+LD(110,292,72,300)+T(320,470,"มองจากด้านหลัง: ไตซ้ายอยู่ทางซ้ายของภาพ",{c:"s m"});
 }
 return svg(b)},
notes:()=>`<h3>Anterior relations</h3><table><tr><th></th><th>ไตขวา</th><th>ไตซ้าย</th></tr>
 <tr><td>ขั้วบน</td><td>Right suprarenal</td><td>Left suprarenal (medial) · stomach, spleen</td></tr>
 <tr><td>กลาง</td><td>Liver (มี peritoneum คั่น) · 2nd part duodenum (ติดตรง)</td><td>Pancreas (ติดตรง)</td></tr>
 <tr><td>ขั้วล่าง</td><td>Right colic flexure (lateral) · small intestine (medial)</td><td>Left colic flexure, desc. colon (lateral) · jejunum (medial)</td></tr></table>
 <p style="font-size:.8125rem;color:var(--sb-muted);margin:-.4rem 0 .9rem">ตาม Gray Fig 4.150 ${S.gr}</p>
 <h3>Posterior relations</h3><ul>
 <li>บน: <b>diaphragm</b> · ล่าง เรียงจาก medial → lateral: <b>psoas major → quadratus lumborum → transversus abdominis</b> ${S.gr}</li>
 <li>ไตขวาอยู่หน้า <b>rib XII</b> · ไตซ้ายอยู่หน้า <b>rib XI–XII</b> ${S.gr}</li>
 <li>เส้นประสาทและหลอดเลือดที่ผ่านหลังไต: <b>subcostal vessels &amp; n., iliohypogastric n., ilio-inguinal n.</b> ${S.gr}</li></ul>
 <div class="pearl"><b>Clinical:</b> ฝีรอบไต (perinephric abscess) ระคายเคือง psoas → ปวดเวลายืดสะโพก (psoas sign) · ผ่าตัดไตจากด้านหลังต้องระวัง pleura ที่ลงมาถึง rib XII ${S.x}</div>`});

/* 3 · fascia */
SEC.push({id:"fascia",k:"Kidney",t:"Fat & fascia",leg:["cortex","fat","musc","bone","art","vein"],figs:[["fascia-1","Fat and fascia around the kidney (Gray Fig 4.152)"]],
tools:[["view",[["a","ภาพวาดใหม่"],["b","ภาพเดิม"]]]],
draw(){
 if(ST.view!=="b")return RD.fascia();
 let b="";
 const body=[[320,62],[462,84],[568,164],[608,276],[590,386],[524,462],[420,496],[320,502],[220,496],[116,462],[50,386],[32,276],[72,164],[178,84]];
 b+=F("musc2",sm(body))+F("cav",sm(body.map(([x,y])=>[320+(x-320)*.93,290+(y-290)*.9])));
 b+=F("fat2",sm([[332,320],[420,300],[540,310],[566,360],[540,436],[452,446],[372,420]]))+F("fat2",sm(mir([[332,320],[420,300],[540,310],[566,360],[540,436],[452,446],[372,420]])));
 b+=F("fat",sm([[396,300],[470,280],[546,300],[560,346],[528,392],[456,402],[396,380],[376,340]]));
 b+=F("fat",sm(mir([[396,308],[470,288],[546,308],[560,352],[528,398],[456,408],[396,388],[376,348]])));
 b+=`<path class="fascia" d="M562,342 C562,300 520,270 462,272 C414,274 380,296 352,322"/><path class="fascia" d="M562,342 C562,394 520,416 456,416 C420,416 400,404 388,388"/><path class="fascia" d="M562,342 C576,350 588,370 590,390"/>`;
 b+=`<path class="fascia" d="M78,348 C78,304 120,278 178,280 C226,282 260,302 288,326"/><path class="fascia" d="M78,348 C78,400 120,422 184,422 C220,422 240,410 252,394"/>`;
 b+=F("cortex",bean(466,340,124,74,-1,.32))+F("cortex",bean(174,348,124,74,1,-.32));
 b+=C("bone",320,392,34)+F("bone","M308,420 L332,420 L328,478 L312,478 Z")+F("bone","M290,388 L238,402 L238,412 L290,402 Z")+F("bone","M350,388 L402,402 L402,412 L350,402 Z");
 b+=E("musc",266,378,26,30,-20)+E("musc",374,378,26,30,20)+E("musc",218,428,40,22,-25)+E("musc",422,428,40,22,25)+E("musc",276,456,30,26)+E("musc",364,456,30,26);
 b+=C("art",346,346,15)+E("vein",290,348,19,13);
 b+=`<path class="perit" d="M72,250 C140,240 210,250 262,278 C292,296 352,296 380,278 C432,250 500,240 568,250"/>`;
 b+=C("bowel",568,292,24).replace('class="f bowel"','class="f" style="fill:#7EB89A"')+C("bowel",72,296,24).replace('class="f bowel"','class="f" style="fill:#7EB89A"');
 if(ST.labels)b+=T(470,346,"Kidney",{c:"b"})+TL(628,196,["Renal (fibrous)","capsule"],{a:"end",c:"s"})+LD(522,326,600,206)+
  TL(628,470,["Perirenal","(perinephric) fat"],{a:"end",c:"s"})+LD(512,386,590,462)+TL(400,520-34,["Renal fascia (Gerota)"],{a:"start",c:"s"})+LD(470,416,430,480)+
  TL(612,412,["Pararenal","fat"],{a:"end",c:"s"})+LD(548,410,584,416)+T(320,236,"Parietal peritoneum",{c:"s"})+T(568,262,"Desc. colon",{c:"s"})+T(72,266,"Asc. colon",{c:"s"})+
  T(346,322,"Aorta",{c:"s"})+T(288,328,"IVC",{c:"s"})+T(262,346,"Psoas",{c:"s",a:"end"})+TL(178,470,["Quadratus","lumborum"],{c:"s"})+T(320,512,"Erector spinae",{c:"s m"})+
  TL(616,120,["Transversalis","fascia"],{a:"end",c:"s"})+LD(588,382,608,128)+TL(30,140,["Anterolateral","abdominal wall"],{a:"start",c:"s"})+T(320,180,"Peritoneal cavity",{c:"m s"})+
  `<g transform="translate(26,24)"><rect width="134" height="70" rx="8" class="box"/>`+T(10,18,"จากในออกนอก",{a:"start",c:"h"})+T(10,34,"1 capsule  2 perirenal fat",{a:"start",c:"s"})+T(10,48,"3 renal fascia",{a:"start",c:"s"})+T(10,62,"4 pararenal fat",{a:"start",c:"s"})+`</g>`;
 return svg(b,"0 0 640 524")},
notes:()=>`<h3>4 ชั้น (ในออกนอก)</h3><ul>
 <li><b>1 · Renal (fibrous) capsule</b> แกะออกง่าย ยกเว้นเวลามีโรค ${S.gr}</li>
 <li><b>2 · Perirenal (perinephric) fat</b> ล้อมไตทั้งลูก ต่อเข้าไปใน hilum และ renal sinus ${S.gr}</li>
 <li><b>3 · Renal fascia (Gerota)</b> หุ้ม fat + ไต + <b>suprarenal</b> (แยกจากไตด้วย septum บางๆ) ${S.gr}
  <ul><li>ด้านข้าง: anterior + posterior layer เชื่อมกัน ต่อกับ transversalis fascia</li>
  <li>Medial: anterior layer คลุมหลอดเลือดที่ hilum ไปเชื่อมกับ connective tissue รอบ aorta/IVC · posterior layer ไปเชื่อม fascia ของ psoas</li>
  <li>ด้านบน: เชื่อมกันเหนือ suprarenal → ต่อ fascia ของ diaphragm · ด้านล่าง: หุ้ม ureter ลงไป (เปิด)</li></ul></li>
 <li><b>4 · Pararenal (paranephric) fat</b> อยู่ <b>หลังและหลังข้าง</b> ไต ${S.gr}</li></ul>
 <div class="pearl"><b>Clinical:</b> ต้องกรีด renal fascia ในการผ่าตัดไตทุกแบบ ${S.gr} · เพราะ fascia ด้านล่างเปิด ไตที่ไขมันน้อย (ผอมมาก) ลงต่ำได้ (nephroptosis) และหนอง/เลือดรอบไตไหลลงไปตามแนว ureter ได้ ${S.x}</div>`});

/* 4 · structure */
SEC.push({id:"struct",k:"Kidney",t:"Internal structure",leg:["cortex","medulla","uro","fat","art","vein"],figs:[["struct-1","External features, anterior & posterior"],["struct-2","Internal structure, coronal section (Gray Fig 4.153)"]],
draw(){
 let b="";const cx=300,cy=262,KP=beanPts(296,262,250,420,1,0,32);
 b+=F("cortex",sm(KP));
 b+=F("fat",sm([[350,120],[400,150],[420,200],[426,262],[420,324],[400,376],[350,404],[330,350],[324,262],[330,174]]));
 const ang=[-100,-136,-168,168,136,100,-64,64];
 const M1=[352,182],M2=[352,344],PV=[392,264];
 ang.forEach(a=>{const r=a*Math.PI/180,ca=Math.cos(r),sa=Math.sin(r);
  const bx=cx+ca*100,by=cy+sa*168,ax=cx+ca*44,ay=cy+sa*82,nx=-sa,ny=ca,hw=Math.abs(a)<70?24:34;
  const p1=[bx+nx*hw,by+ny*hw],p2=[bx-nx*hw,by-ny*hw],mid=[bx+ca*10,by+sa*10];
  b+=`<path class="f medulla" d="M${p1} Q${mid[0]+nx*0},${mid[1]} ${p2} L${ax},${ay} Z"/>`;
  for(let k=-2;k<=2;k++)b+=`<path d="M${bx+nx*hw*k/3},${by+ny*hw*k/3} L${ax+(bx-ax)*.15},${ay+(by-ay)*.15}" style="stroke:rgba(0,0,0,.18);stroke-width:.8"/>`;
  const tgt=a<-30&&a>-150?M1:a>30&&a<150?M2:PV;
  b+=V("uro",`M${ax-ca*3},${ay-sa*3} Q${(ax+tgt[0])/2+nx*6},${(ay+tgt[1])/2+ny*6} ${tgt[0]},${tgt[1]}`,7);
  b+=`<path class="f uro" d="M${ax+nx*13-ca*8},${ay+ny*13-sa*8} Q${ax+ca*6},${ay+sa*6} ${ax-nx*13-ca*8},${ay-ny*13-sa*8} L${ax-nx*8-ca*1},${ay-ny*8-sa*1} Q${ax+ca*2},${ay+sa*2} ${ax+nx*8-ca*1},${ay+ny*8-sa*1}Z"/>`});
 b+=V("uro",`M${M1} Q372,214 ${PV}`,12)+V("uro",`M${M2} Q372,314 ${PV}`,12);
 b+=F("uro",sm([[372,236],[402,232],[424,256],[428,292],[412,316],[396,300],[378,284]]));
 b+=V("uro","M414,312 C424,360 436,420 446,508",11);
 b+=V("art","M560,232 C500,232 450,236 424,240 C404,242 392,232 380,220",8)+V("art","M424,240 C410,250 398,262 390,276",5)+V("vein","M560,282 C500,282 456,280 430,282",10);
 if(ST.labels)b+=TL(108,40,["Renal (fibrous)","capsule"],{a:"end",c:"s"})+LD(196,96,112,46)+T(132,94,"Renal cortex",{a:"end",c:"s"})+LD(190,120,134,98)+
  TL(70,262,["Renal","column"],{a:"end",c:"s"})+LD(196,236,74,258)+TL(70,170,["Renal pyramid","(medulla)"],{a:"end",c:"s"})+LD(216,172,74,170)+
  T(70,350,"Renal papilla",{a:"end",c:"s"})+LD(256,326,74,346)+T(70,420,"Minor calyx",{a:"end",c:"s"})+LD(274,364,74,416)+
  T(470,150,"Major calyx",{a:"start",c:"s"})+LD(362,196,468,154)+T(470,184,"Renal sinus (fat)",{a:"start",c:"s"})+LD(410,196,468,188)+
  T(470,330,"Renal pelvis",{a:"start",c:"s"})+LD(418,296,468,326)+T(470,440,"Ureter",{a:"start",c:"s"})+LD(436,420,468,436)+
  T(566,226,"Renal a.",{a:"end",c:"s"})+T(566,302,"Renal v.",{a:"end",c:"s"})+T(536,370,"Hilum",{c:"h"})+LD(432,300,520,362);
 return svg(b)},
notes:()=>`<h3>ภายนอก</h3><ul>
 <li>รูปถั่ว มีผิว anterior/posterior, ขั้วบน/ล่าง, ขอบ lateral/medial ${S.gr}</li>
 <li><b>Hilum</b>: ร่องแนวตั้งที่ขอบ medial · มี renal v., renal a., renal pelvis, lymphatics, nerves ผ่าน ${S.gr}</li>
 <li>ลำดับที่ hilum จากหน้าไปหลัง: <b>Vein → Artery → Pelvis (VAP)</b> ${S.x}</li>
 <li><b>Renal sinus</b> คือช่องด้านในที่ต่อจาก hilum มี perinephric fat ต่อเข้าไป ${S.gr}</li></ul>
 <h3>ภายใน</h3><ul>
 <li><b>Cortex</b>: แถบสีอ่อนที่ล้อม medulla ทั้งหมด · ส่วนที่ยื่นลงไประหว่าง pyramid = <b>renal column</b> ${S.gr}</li>
 <li><b>Medulla</b> = <b>renal pyramids</b> · ฐานหันออกหา cortex ยอด (<b>papilla</b>) หันเข้า sinus ${S.gr}</li>
 <li>Papilla มีรูของ <b>papillary ducts</b> → <b>minor calyx</b> (ครอบ papilla) → หลาย minor รวมเป็น <b>major calyx</b> → 2–3 major รวมเป็น <b>renal pelvis</b> → ureter ${S.gr}</li></ul>
 <div class="pearl"><b>Renal lobe</b> = 1 pyramid + cortex ที่ครอบ · ในทารกไตเป็นพู (fetal lobulation) และหายไปหลังคลอด ${S.x}</div>`});

/* 5 · blood supply */
SEC.push({id:"vessels",k:"Kidney",t:"Blood supply & segments",figs:[["vessels-1","Blood supply of kidney & segments"]],
tools:[["view",[["a","ภาพวาดใหม่"],["b","ภาพเดิม"]]]],
draw(){
 if(ST.view!=="b")return RD.vessels();
 let b="";const SEG=[["Apical","#8E6CCB"],["Anterior superior","#4A90D9"],["Anterior inferior","#3FAE7A"],["Inferior","#E0B03A"],["Posterior","#E0715A"]];
 const KA=beanPts(120,250,150,250,1,0),KB=beanPts(300,250,150,250,-1,0);
 b+=`<clipPath id="ca"><path d="${sm(KA)}"/></clipPath><clipPath id="cb"><path d="${sm(KB)}"/></clipPath>`;
 const band=(clip,y0,y1,col,x0=30,x1=400)=>`<rect clip-path="url(#${clip})" x="${x0}" y="${y0}" width="${x1-x0}" height="${y1-y0}" style="fill:${col}" class="zone"/>`;
 b+=band("ca",100,168,SEG[0][1])+band("ca",168,250,SEG[1][1])+band("ca",250,322,SEG[2][1])+band("ca",322,400,SEG[3][1])+`<path clip-path="url(#ca)" d="M40,160 C60,200 60,300 46,340 L40,340 Z" style="fill:${SEG[4][1]}" class="zone"/>`;
 b+=band("cb",100,168,SEG[0][1])+band("cb",168,322,SEG[4][1])+band("cb",322,400,SEG[3][1]);
 b+=`<path class="f" d="${sm(KA)}" style="fill:none;stroke-width:2"/><path class="f" d="${sm(KB)}" style="fill:none;stroke-width:2"/>`;
 b+=V("art","M200,246 L170,246",6)+V("art","M172,246 C150,220 128,180 112,140",3)+V("art","M172,246 C150,226 130,210 106,200",3)+V("art","M172,246 C150,264 130,286 108,292",3)+V("art","M172,246 C150,280 132,320 118,352",3);
 b+=V("art","M222,246 L250,246",6)+V("art","M250,246 C270,246 288,250 304,252",3);
 if(ST.labels){b+=T(120,74,"Anterior view",{c:"b"})+T(300,74,"Posterior view",{c:"b"})+T(120,90,"(right kidney)",{c:"s m"})+T(300,90,"(right kidney)",{c:"s m"});
  SEG.forEach(([n,c],i)=>{b+=`<rect x="${40+(i%2)*170}" y="${428+Math.floor(i/2)*22}" width="14" height="14" rx="3" style="fill:${c}" class="zone"/>`+T(60+(i%2)*170,439+Math.floor(i/2)*22,n,{a:"start",c:"s"})});
  b+=T(210,236,"Renal a.",{c:"s"})}
 const A=["Aorta","Renal a.","Segmental a.","Interlobar a.","Arcuate a.","Cortical radiate a.","Afferent arteriole"],Vn=["IVC","Renal v.","Interlobar v.","Arcuate v.","Cortical radiate v.","Peritubular cap. / vasa recta","Efferent arteriole"];
 const y0=30,dy=56,x1=420,x2=556,w=124;
 A.forEach((n,i)=>{b+=`<rect class="box ar" x="${x1-w/2}" y="${y0+i*dy}" width="${w}" height="30" rx="15"/>`+T(x1,y0+i*dy+19,n,{c:"s"});if(i<A.length-1)b+=`<path class="arw" d="M${x1},${y0+i*dy+31} L${x1},${y0+(i+1)*dy-2}"/>`});
 Vn.forEach((n,i)=>{const isEff=i===Vn.length-1;b+=`<rect class="box ${isEff?"ar":"vn"}" x="${x2-w/2+(i===5?-6:0)}" y="${y0+i*dy}" width="${w+(i===5?12:0)}" height="30" rx="15"/>`+T(x2,y0+i*dy+19,n,{c:"s"});if(i>0)b+=`<path class="arw" d="M${x2},${y0+i*dy-1} L${x2},${y0+(i-1)*dy+33}"/>`});
 const gy=y0+7*dy+6;b+=`<rect class="box gl" x="${(x1+x2)/2-70}" y="${gy}" width="140" height="30" rx="15"/>`+T((x1+x2)/2,gy+19,"Glomerulus",{c:"s"})+`<path class="arw" d="M${x1},${y0+6*dy+31} L${x1+20},${gy-2}"/><path class="arw" d="M${x2-20},${gy-1} L${x2},${y0+6*dy+33}"/>`;
 return svg(b)},
notes:()=>`<h3>Arteries</h3><ul>
 <li><b>Renal a.</b> แยกจากข้าง aorta ใต้ SMA ระดับ <b>L1–L2</b> · ซ้ายสูงกว่าเล็กน้อย · <b>ขวายาวกว่า ผ่านหลัง IVC</b> ${S.gr}</li>
 <li>ใกล้ hilum แยกเป็น <b>anterior division</b> (เลี้ยง apical, anterior superior, anterior inferior, inferior segment) และ <b>posterior division</b> (เลี้ยง posterior segment) ${S.gr}</li>
 <li>5 segments: <b>apical, anterior superior, anterior inferior, inferior, posterior</b> · segmental a. เป็น <b>end artery</b> อุดตัน → segment นั้นตาย ${S.x}</li>
 <li>สาย: segmental → interlobar → arcuate → <b>cortical radiate (interlobular)</b> → afferent → glomerulus → efferent → peritubular cap. / vasa recta ${S.gr}</li>
 <li><b>Accessory (extrahilar) renal a.</b> พบบ่อย มาจาก aorta เหนือหรือใต้เส้นหลัก ${S.gr}</li>
 <li>Renal a. ยังให้ <b>inferior suprarenal a.</b> และ <b>ureteric branch</b> ${S.gr}</li></ul>
 <h3>Veins</h3><ul>
 <li>Renal v. อยู่ <b>หน้า</b> renal a. ทั้ง 2 ข้าง ${S.gr}</li>
 <li><b>Left renal v.</b> ยาวกว่า ผ่านหน้า aorta หลัง SMA · รับ <b>left gonadal v.</b> และ <b>left suprarenal v.</b> ${S.gr}</li></ul>
 <div class="pearl"><b>Clinical:</b> left renal v. ถูกบีบระหว่าง SMA กับ aorta ได้ (nutcracker) → เลือดคั่งใน left gonadal v. → <b>left varicocele</b> · ระหว่าง anterior และ posterior segment มีแนวที่หลอดเลือดน้อย (Brödel line) ใช้เป็นแนวผ่าตัด ${S.gr}${S.x}</div>`});

/* 6 · lymph & nerves */
SEC.push({id:"lnn",k:"Kidney",t:"Lymph & nerve supply",tools:[["lymph","Lymph"],["nerve","Nerves"]],leg:["lymph","nerve","art","cortex"],figs:[["lnn-1","Lymphatics of posterior abdominal wall (Gray Fig 4.168)"],["lnn-2","Autonomic nerves of kidneys"]],
draw(){
 let b="";
 b+=F("cortex",bean(146,262,100,170,1,.12))+F("cortex",bean(494,252,100,170,-1,-.12));
 b+=V("art","M320,30 L320,470",16)+V("art","M314,232 C270,236 230,246 186,258",6)+V("art","M326,226 C370,230 410,238 452,248",6)+C("art",320,96,7)+C("art",320,150,7)+C("art",320,360,6);
 if(ST.lymph){
  [[290,236],[350,230],[292,270],[348,268],[294,200],[346,196]].forEach(([x,y])=>b+=E("lymph",x,y,8,6));
  [[320,86],[320,140],[320,350]].forEach(([x,y])=>b+=E("lymph",x+16,y,6,5));
  b+=V("lymph","M192,262 C230,256 262,246 286,238",2)+V("lymph","M446,250 C410,244 378,236 356,232",2);
  b+=`<path class="f" d="M290,196 C282,186 286,166 300,162 C312,160 314,178 312,196 Z" style="fill:color-mix(in srgb,var(--a-lymph) 40%,transparent);stroke-dasharray:3 2"/>`+V("lymph","M304,162 C306,120 302,70 306,20",2.2);
 }
 if(ST.nerve){
  [240,400].forEach(x=>{b+=`<path d="M${x},30 L${x},470" style="stroke:var(--a-nerve);stroke-width:2.4;stroke-dasharray:1 0"/>`;for(let y=60;y<460;y+=44)b+=E("nerve",x,y,6,8)});
  b+=E("nerve",298,108,12,9)+E("nerve",342,108,12,9)+E("nerve",300,222,9,7)+E("nerve",340,218,9,7);
  b+=V("nerve","M240,104 C262,106 276,108 286,108",1.6)+V("nerve","M240,192 C262,200 280,212 292,220",1.6)+V("nerve","M400,104 C380,106 364,108 354,108",1.6)+V("nerve","M400,192 C376,198 360,208 348,216",1.6);
  b+=`<path d="M300,230 C280,238 250,240 230,248 C214,252 200,256 190,258" style="fill:none;stroke:var(--a-nerve);stroke-width:1.4;stroke-dasharray:2 3"/><path d="M340,226 C370,230 410,236 450,246" style="fill:none;stroke:var(--a-nerve);stroke-width:1.4;stroke-dasharray:2 3"/>`;
 }
 if(ST.labels){b+=T(146,268,"Right kidney",{c:"s"})+T(494,258,"Left kidney",{c:"s"})+T(332,26,"Aorta",{a:"start",c:"s"});
  if(ST.lymph)b+=TL(26,330,["Lateral aortic","(lumbar) nodes"],{a:"start",c:"s"})+LD(288,272,112,330)+TL(26,130,["Cisterna chyli","(L1–L2)"],{a:"start",c:"s"})+LD(296,180,108,134)+T(26,74,"→ thoracic duct",{a:"start",c:"s m"})+TL(360,370,["Pre-aortic nodes","(celiac/SMA/IMA)"],{a:"start",c:"s"})+LD(338,352,358,366);
  if(ST.nerve)b+=TL(614,86,["Celiac","ganglion"],{a:"end",c:"s"})+LD(352,108,560,96)+TL(614,180,["Aorticorenal","ganglion"],{a:"end",c:"s"})+LD(348,218,560,186)+TL(614,320,["Renal plexus","(ตามแนว renal a.)"],{a:"end",c:"s"})+LD(430,242,560,316)+
   TL(614,420,["Sympathetic trunk","+ lesser/least","splanchnic n."],{a:"end",c:"s"})+LD(402,400,520,418)}
 return svg(b)},
notes:()=>`<h3>Lymph</h3><ul><li>ไต → <b>lateral aortic (para-aortic / lumbar) nodes</b> รอบจุดแยกของ renal a. ${S.gr}</li>
 <li>Lateral aortic nodes รับจากผนังลำตัว ไต suprarenal gonads → รวมเป็น <b>lumbar trunk</b> ซ้าย/ขวา ${S.gr}</li>
 <li>Pre-aortic nodes รับจากอวัยวะที่ celiac, SMA, IMA เลี้ยง → <b>intestinal trunk</b> ${S.gr}</li>
 <li><b>Cisterna chyli</b> = intestinal + lumbar trunks · อยู่หลังด้านขวาของ aorta หน้า L1–L2 · เป็นจุดเริ่ม thoracic duct ${S.gr}</li></ul>
 <h3>Nerves</h3><ul><li><b>Renal plexus</b> รับใยจาก <b>celiac plexus</b> (และ aorticorenal ganglion) วิ่งตาม renal a. ${S.gr}</li>
 <li>ใย visceral afferent จากไตและ ureter ส่วนบน กลับไประดับ <b>T12 (least splanchnic n.)</b> → ปวดร้าวที่ <b>flank</b> ${S.gr}</li>
 <li>Sympathetic ทำให้ afferent/efferent arteriole หดตัวและหลั่ง renin (β₁) — เชื่อมไป Nephron atlas ${S.x}</li></ul>`});

/* 7 · suprarenal */
SEC.push({id:"adrenal",k:"Suprarenal gland",t:"Suprarenal (adrenal) gland",leg:["gland","art","vein","cortex"],figs:[["adrenal-1","Arteries of suprarenal glands (Gray Fig 4.163)"],["adrenal-2","Suprarenal arteries & veins (Gray Fig 4.163)"]],
draw(){
 let b="";
 b+=F("cortex",bean(178,350,130,220,1,.15))+F("cortex",bean(466,330,130,220,-1,-.15));
 b+=F("gland",sm([[140,236],[166,170],[196,140],[232,198],[236,240],[196,250]]))+F("glandm",sm([[176,226],[194,180],[214,218],[200,238]]));
 b+=F("gland",sm([[408,200],[426,170],[452,170],[440,194],[428,236],[420,292],[408,320],[398,280],[398,236]]))+F("glandm",sm([[414,250],[420,210],[430,196],[426,232],[418,290]]));
 b+=V("vein","M290,40 L290,480",18)+V("art","M334,40 L334,480",16);
 b+=V("art","M330,62 C280,60 220,70 150,110",3.4)+V("art","M338,62 C390,60 440,74 500,112",3.4);
 [[176,96],[196,92],[214,90]].forEach(([x,y])=>b+=V("art",`M${x},${y} C${x+2},${y+30} ${x+4},${y+48} ${x+6},${y+70}`,1.6));
 [[452,90],[470,94],[488,100]].forEach(([x,y])=>b+=V("art",`M${x},${y} C${x-4},${y+40} ${x-10},${y+70} ${x-14},${y+96}`,1.6));
 b+=V("art","M326,196 C290,196 250,204 226,214",2.4)+V("art","M342,192 C380,196 410,210 428,222",2.4);
 b+=V("art","M326,320 C290,322 262,330 234,344",6)+V("art","M342,312 C380,314 400,320 420,328",6)+V("art","M250,338 C230,300 216,270 210,250",1.8)+V("art","M404,322 C414,300 418,280 418,260",1.8);
 b+=V("vein","M214,226 C240,226 262,226 282,226",3.4)+V("vein","M412,300 C400,330 390,350 380,360",3)+V("vein","M420,370 C390,368 340,366 300,364",8);
 if(ST.labels)b+=T(174,170,"Right suprarenal",{a:"end",c:"s"}).replace('x="174"','x="150"')+T(180,360,"Right kidney",{c:"s"})+T(470,340,"Left kidney",{c:"s"})+TL(470,170,["Left suprarenal","(semilunar)"],{a:"start",c:"s"})+TL(98,190,["(pyramid)"],{a:"end",c:"s m"})+
  TL(26,52,["Inferior phrenic a.","→ superior suprarenal a."],{a:"start",c:"s"})+LD(160,104,98,62)+T(470,224,"Middle suprarenal a.",{a:"start",c:"s"})+LD(410,214,466,220)+TL(98,300,["Inferior","suprarenal a.","(from renal a.)"],{a:"end",c:"s"})+LD(222,300,104,306)+
  TL(98,230,["R suprarenal v.","→ IVC (สั้น)"],{a:"end",c:"s"})+LD(256,226,102,232)+TL(560,400,["L suprarenal v.","→ L renal v."],{a:"start",c:"s"})+LD(400,340,556,396)+T(296,500,"IVC",{c:"s"})+T(334,500,"Aorta",{c:"s"})+
  TL(26,470,["สีเข้มตรงกลาง = medulla","สีอ่อนรอบนอก = cortex"],{a:"start",c:"s m"});
 return svg(b)},
notes:()=>`<h3>รูปร่างและตำแหน่ง</h3><ul>
 <li>อยู่ที่ขั้วบนไต ล้อมด้วย perinephric fat และอยู่ใน <b>renal fascia</b> แต่แยกจากไตด้วย septum บางๆ (ไตหย่อน ต่อมไม่ตาม) ${S.gr}</li>
 <li><b>ขวา: pyramid</b> · หน้าคือ right lobe ของตับและ IVC · หลังคือ diaphragm ${S.gr}</li>
 <li><b>ซ้าย: semilunar</b> ใหญ่กว่า · สัมพันธ์กับ stomach, pancreas, spleen, diaphragm ${S.gr}</li>
 <li><b>Cortex</b> สร้าง steroid · <b>medulla</b> สร้าง epinephrine/norepinephrine ${S.x}</li></ul>
 <h3>เลือด 3 แหล่ง เข้า · ออก 1 เส้น</h3><table><tr><th>Artery</th><th>มาจาก</th></tr>
 <tr><td>Superior suprarenal</td><td>Inferior phrenic a. (หลายแขนง)</td></tr><tr><td>Middle suprarenal</td><td>Abdominal aorta (เหนือ renal a.)</td></tr><tr><td>Inferior suprarenal</td><td>Renal a.</td></tr></table>
 <ul><li>Vein: <b>ขวา → IVC</b> (สั้นมาก) · <b>ซ้าย → left renal v.</b> ${S.gr}</li><li>Lymph → lateral aortic nodes ${S.gr}</li>
 <li>Nerve: <b>preganglionic sympathetic (T8–L1)</b> ผ่าน trunk และ celiac plexus <b>โดยไม่ synapse</b> ไปถึงเซลล์ medulla โดยตรง (medulla ทำหน้าที่เป็น postganglionic) ${S.gr}</li></ul>
 <div class="pearl"><b>Clinical:</b> ตอนผ่าตัดเอาต่อมขวาออก right suprarenal v. สั้นและเข้า IVC ตรงๆ จึงฉีกขาดได้ง่าย ${S.x}</div>`});

/* 8 · ureter */
SEC.push({id:"ureter",k:"Ureter",t:"Ureter: course & constrictions",tools:[["view",[["a","ภาพวาดใหม่"],["b","ภาพเดิม"]]],["sex",[["m","Male"],["f","Female"]]]],leg:["uro","art","vein","musc","bone"],figs:[["ureter-1","Ureters on the posterior abdominal wall (Gray Fig 4.155)"],["ureter-2","Constrictions on IVU"],["ureter-3","Blood supply of ureter (Gray Fig 4.155)"],["ureter-4","Lymphatics of ureter"],["ureter-5","Nerves of ureter"]],
draw(){
 if(ST.view!=="b")return RD.ureter();
 let b="";const f=ST.sex==="f";
 const ps=[[296,120],[284,180],[268,250],[252,330],[244,380],[262,384],[276,334],[292,252],[305,182],[306,120]];
 b+=F("musc",sm(ps))+F("musc",sm(mir(ps)));
 b+=ilium(1).replace("292,334","292,350")+ilium(-1);
 b+=F("cortex",bean(196,120,90,140,1,.15))+F("cortex",bean(444,108,90,140,-1,-.15));
 b+=V("vein","M302,20 L302,300",14)+V("art","M334,20 L334,280",13);
 b+=V("art","M334,280 C318,300 300,320 282,340",8)+V("art","M282,340 C266,360 250,392 238,440",7)+V("art","M282,340 C292,370 300,400 304,430",5);
 b+=V("art","M334,280 C350,300 368,320 384,340",8)+V("art","M384,340 C398,360 412,392 424,440",7)+V("art","M384,340 C374,370 366,400 360,430",5);
 b+=V("art","M326,170 C300,190 280,240 262,300 C254,330 246,360 240,400",1.8)+V("art","M342,168 C366,190 384,240 400,300 C406,330 414,360 420,400",1.8);
 const RU="M234,150 C246,200 258,250 266,300 C272,330 282,356 286,380 C282,410 272,440 284,470 C292,486 304,494 312,498",LU="M406,140 C394,190 382,250 374,300 C368,330 358,356 354,380 C358,410 368,440 356,470 C348,486 336,494 328,498";
 b+=V("uro",RU,5)+V("uro",LU,5);
 b+=E("blad",320,494,52,24);
 if(f){b+=F("musc2",sm([[296,396],[344,396],[356,430],[340,462],[300,462],[284,430]]))+V("art","M298,428 C290,440 286,452 286,464 L312,466",3).replace("","")+V("art","M304,430 C298,450 290,462 282,468",3)+V("art","M360,430 C352,450 350,462 354,470",3)}
 else{b+=V("vas","M230,330 C240,380 262,440 286,474 C296,486 306,492 312,494",3.4).replace(/class="v vas"/,'class="v" style="stroke:#8B6BB5"')+V("vas","M410,330 C400,380 378,440 354,474 C344,486 334,492 328,494",3.4).replace(/class="v vas"/,'class="v" style="stroke:#8B6BB5"')}
 const ring=(x,y,n)=>`<circle class="ring" cx="${x}" cy="${y}" r="13"/><circle class="num" cx="${x+16}" cy="${y-12}" r="8"/><text class="numt" x="${x+16}" y="${y-8}" text-anchor="middle">${n}</text><ellipse class="stone" cx="${x}" cy="${y}" rx="4" ry="3"/>`;
 b+=ring(236,154,1)+ring(404,144,1)+ring(281,350,2)+ring(359,350,2)+ring(306,494,3)+ring(334,494,3);
 if(ST.labels)b+=T(196,124,"R kidney",{c:"s"})+T(444,112,"L kidney",{c:"s"})+TL(26,150,["① Ureteropelvic","junction"],{a:"start",c:"s"})+TL(26,340,["② Pelvic brim","(ข้าม common iliac","bifurcation)"],{a:"start",c:"s"})+
  TL(26,470,["③ Entrance to","bladder (UVJ)"],{a:"start",c:"s"})+TL(616,220,["Gonadal vessels","ข้ามหน้า ureter"],{a:"end",c:"s"})+LD(394,250,532,228)+
  TL(616,300,["Abdominal part","บน psoas major"],{a:"end",c:"s"})+LD(378,296,532,300)+TL(616,420,f?["Uterine a.","ข้ามเหนือ ureter","(water under","the bridge)"]:["Ductus deferens","ข้ามเหนือ ureter"],{a:"end",c:"s"})+LD(f?352:392,f?452:420,520,420)+
  T(318,16,"IVC · Aorta",{c:"s m"});
 return svg(b)},
notes:()=>`<h3>ภาพรวม</h3><ul>
 <li>ท่อกล้ามเนื้อ <b>retroperitoneal</b> ยาว <b>25–30 cm</b> นำปัสสาวะจาก renal pelvis ไป bladder ${S.gr}${S.x}</li>
 <li>Surface marking (ด้านหลัง): เริ่มที่ระดับ <b>L1</b> (hilum) แล้วลงตรงๆ หน้าปลาย transverse process ของ lumbar ส่วนล่าง เข้าสู่ pelvis ${S.gr}</li>
 <li><b>Abdominal part</b>: UPJ → ข้าม bifurcation ของ common iliac a. วิ่งบนด้าน medial ของ <b>psoas major</b> ${S.gr}</li>
 <li><b>Pelvic part</b>: pelvic brim → ureteric orifice · ถูกข้ามด้านบนโดย <b>ductus deferens (ชาย)</b> หรือ <b>uterine a. (หญิง)</b> ${S.gr}</li>
 <li>3 จุดแคบ: <b>UPJ · pelvic brim · ทางเข้า bladder</b> = จุดที่นิ่วติดบ่อย ${S.gr}</li></ul>
 <h3>เลือด · lymph · nerve</h3><table><tr><th></th><th>Abdominal</th><th>Pelvic</th></tr>
 <tr><td>Artery</td><td>Renal (ureteric br.), gonadal, aorta, common iliac — เข้าจาก <b>medial</b></td><td>แขนงของ internal iliac — เข้าจาก <b>lateral</b></td></tr>
 <tr><td>Vein</td><td>Renal v., gonadal v.</td><td>Internal iliac v.</td></tr>
 <tr><td>Lymph</td><td>Lateral aortic, common iliac</td><td>External &amp; internal iliac</td></tr></table>
 <ul><li>แขนงแดงทุกเส้นแยกขึ้น-ลงต่อกันเป็นสายยาวบนผนัง ureter ${S.gr}</li>
 <li>Nerve: renal, aortic, superior &amp; inferior hypogastric plexus · afferent กลับไป <b>T11–L2</b> ${S.gr}</li></ul>
 <div class="pearl"><b>Loin to groin:</b> ปวดจาก ureter บวม ร้าวไปผิวที่ T11–L2: หลังและข้างลำตัวใต้ซี่โครง, หัวหน่าว, scrotum/labia majora, ต้นขาด้านหน้า ${S.gr} · ผ่าตัด hysterectomy เสี่ยงผูก ureter ไปพร้อม uterine a. ${S.gr}</div>`});

/* 9 · bladder */
SEC.push({id:"bladder",k:"Bladder",t:"Urinary bladder",tools:[["view",[["a","ภาพวาดใหม่"],["b","ภาพเดิม"]]],["sex",[["m","Male"],["f","Female"]]]],leg:["blad","uro","bone","musc"],figs:[["bladder-1","Bladder position, male & female (Gray Fig 5.59)"],["bladder-2","Bladder surfaces (Gray Fig 5.41A)"],["bladder-3","Trigone (Gray Fig 5.41B)"],["bladder-4","Pubovesical & puboprostatic ligaments (Gray Fig 5.42)"],["bladder-5","Arteries of bladder (Gray Fig 5.65)"],["bladder-6","Lymphatics (Gray Fig 5.68)"],["bladder-7","Nerves: vesical plexus (Gray Fig 5.63)"]],
draw(){
 if(ST.view!=="b")return RD.bladder();
 let b="";const f=ST.sex==="f";
 b+=F("blad",sm([[60,262],[150,190],[250,170],[296,214],[290,300],[220,338],[160,330]]))+`<path d="M60,262 L250,170" style="stroke:var(--a-edge);stroke-width:1;fill:none;opacity:.5"/><path d="M60,262 L220,338" style="stroke:var(--a-edge);stroke-width:1;fill:none;opacity:.5"/><path d="M250,170 L220,338" style="stroke:var(--a-edge);stroke-width:1;fill:none;opacity:.5"/>`;
 b+=V("uro","M262,96 C266,130 268,160 262,180",5)+V("uro","M318,120 C312,160 304,200 294,230",5)+V("uro","M208,336 L204,384",6)+`<path d="M60,262 C46,220 36,170 30,120" style="fill:none;stroke:var(--a-fascia);stroke-width:2.2;stroke-dasharray:4 3"/>`;
 b+=`<rect x="340" y="40" width="280" height="200" rx="18" class="f blad"/>`;
 for(let i=0;i<9;i++){const x=356+i*30;b+=`<path d="M${x},${60+(i%2)*10} q8,40 -2,80 q-8,40 4,86" style="fill:none;stroke:rgba(0,0,0,.18);stroke-width:1.2"/>`}
 b+=`<path d="M412,104 L548,104 L480,214 Z" style="fill:color-mix(in srgb,var(--a-blad) 70%,#fff);stroke:var(--a-edge);stroke-width:1"/>`+V("uro","M400,30 C404,60 408,86 412,104",4)+V("uro","M560,30 C556,60 552,86 548,104",4)+E("uro",412,104,6,4)+E("uro",548,104,6,4)+E("cav",480,214,8,6)+V("uro","M480,220 L480,262",8);
 b+=`<path d="M412,104 Q480,92 548,104" style="fill:none;stroke:var(--a-edge);stroke-width:1.2;stroke-dasharray:3 2"/>`;
 const sx=330,sy=280;
 b+=F("bone",`M${sx+10},${sy+70} C${sx+30},${sy+60} ${sx+44},${sy+90} ${sx+38},${sy+150} C${sx+30},${sy+170} ${sx+12},${sy+170} ${sx+8},${sy+140} Z`);
 b+=F("blad",sm([[sx+56,sy+120],[sx+70,sy+70],[sx+120,sy+56],[sx+160,sy+82],[sx+156,sy+138],[sx+110,sy+160],[sx+76,sy+156]]));
 b+=F("musc2",sm([[sx+232,sy+40],[sx+262,sy+50],[sx+272,sy+120],[sx+262,sy+200],[sx+236,sy+210],[sx+222,sy+120]]));
 if(f){b+=F("musc",sm([[sx+150,sy+40],[sx+186,sy+20],[sx+210,sy+40],[sx+204,sy+110],[sx+184,sy+170],[sx+170,sy+180],[sx+166,sy+110]]));
  b+=`<path class="perit" d="M${sx+40},${sy+40} C${sx+80},${sy+40} ${sx+130},${sy+40} ${sx+152},${sy+70} C${sx+160},${sy+90} ${sx+156},${sy+70} ${sx+160},${sy+44} C${sx+176},${sy+6} ${sx+212},${sy+12} ${sx+214},${sy+60} C${sx+214},${sy+130} ${sx+216},${sy+150} ${sx+226},${sy+150} C${sx+236},${sy+130} ${sx+234},${sy+70} ${sx+250},${sy+30}"/>`;
  b+=V("uro",`M${sx+86},${sy+156} C${sx+88},${sy+176} ${sx+92},${sy+196} ${sx+96},${sy+214}`,6)}
 else{b+=F("prost",sm([[sx+70,sy+160],[sx+100,sy+156],[sx+120,sy+176],[sx+104,sy+204],[sx+76,sy+200]]))+F("musc",sm([[sx+150,sy+120],[sx+176,sy+116],[sx+186,sy+150],[sx+168,sy+170],[sx+152,sy+156]])).replace("musc","musc2");
  b+=`<path class="perit" d="M${sx+40},${sy+40} C${sx+90},${sy+40} ${sx+140},${sy+40} ${sx+162},${sy+80} C${sx+176},${sy+108} ${sx+196},${sy+150} ${sx+212},${sy+148} C${sx+226},${sy+130} ${sx+226},${sy+70} ${sx+250},${sy+30}"/>`;
  b+=V("uro",`M${sx+90},${sy+160} C${sx+92},${sy+186} ${sx+94},${sy+206} ${sx+100},${sy+230}`,6)}
 b+=`<path d="M${sx+40},${sy+120} L${sx+72},${sy+158}" style="stroke:var(--a-fascia);stroke-width:3"/>`;
 if(ST.labels)b+=T(170,40,"A · empty bladder (superolateral)",{c:"h"})+T(480,24,"B · trigone (anterior wall removed)",{c:"h"}).replace('y="24"','y="22"')+T(sx+150,sy-4,f?"C · female (sagittal)":"C · male (sagittal)",{c:"h"})+
  TL(26,96,["Median umbilical","ligament (urachus)"],{a:"start",c:"s"})+T(56,280,"Apex",{a:"end",c:"s"})+T(160,214,"Superior surface",{c:"s"})+T(270,250,"Base",{c:"s"})+TL(130,300,["Inferolateral","surfaces"],{c:"s"})+T(228,372,"Neck → urethra",{a:"start",c:"s"})+T(262,90,"Ureters",{c:"s"})+
  T(480,150,"Trigone",{c:"b"})+TL(412,128,["Ureteric","orifice"],{c:"s"})+TL(480,238,["Internal urethral orifice"],{c:"s"})+T(366,226,"Rugae",{a:"start",c:"s"})+T(480,98,"Interureteric ridge",{c:"s m"})+
  T(sx+24,sy+190,"Pubis",{c:"s"})+T(sx+110,sy+112,"Bladder",{c:"s"})+T(sx+250,sy+226,"Rectum",{c:"s"})+(f?T(sx+186,sy+72,"Uterus",{c:"s"})+TL(sx+130,sy+30,["Vesicouterine","pouch"],{c:"s"})+TL(sx+210,sy+176,["Recto-uterine","pouch"],{c:"s",a:"middle"}):
   T(sx+126,sy+206,"Prostate",{a:"start",c:"s"})+TL(sx+196,sy+186,["Rectovesical","pouch"],{c:"s"})+T(sx+170,sy+144,"SV",{c:"s"}))+TL(sx+6,sy+236,[f?"Pubovesical lig.":"Puboprostatic lig."],{a:"start",c:"s"})+T(sx+150,sy+30,"Peritoneum",{c:"s m"}).replace(`y="${sy+30}"`,`y="${sy+14}"`);
 return svg(b)},
notes:()=>`<h3>ตำแหน่ง</h3><ul><li>ที่พักปัสสาวะชั่วคราว อยู่ใน pelvic cavity · เป็นอวัยวะ<b>หน้าสุด</b>ของ pelvic viscera อยู่<b>หลัง pubic symphysis</b> (ชาย: หน้า rectum · หญิง: หน้า uterus/vagina) · อยู่ใต้ parietal peritoneum (extraperitoneal) ${S.gr}</li>
 <li>หญิง: <b>vesicouterine pouch</b> · ชาย: <b>rectovesical pouch</b> ${S.gr}</li>
 <li>ตอนว่างอยู่ในเชิงกราน ตอนเต็มขยายขึ้นไปใน abdomen · เด็กแรกเกิด bladder เกือบอยู่ใน abdomen ทั้งหมด ลงเชิงกรานหลัง puberty ${S.gr}</li></ul>
 <h3>รูปร่าง (pyramid 3 ด้านที่ล้มลง)</h3><ul>
 <li><b>Apex</b> ชี้ไปบน pubic symphysis → <b>median umbilical ligament</b> (เศษของ urachus) ขึ้นไปถึงสะดือ ${S.gr}</li>
 <li><b>Base</b> สามเหลี่ยมคว่ำ หันไปหลังล่าง: ureter เข้า 2 มุมบน · urethra ออกมุมล่าง ${S.gr}</li>
 <li><b>Superior surface</b> โค้งเล็กน้อย พองขึ้นเมื่อเต็ม · <b>2 inferolateral surfaces</b> วางบน levator ani และ obturator internus ${S.gr}</li>
 <li><b>Trigone</b>: mucosa <b>เรียบและยึดแน่น</b> · ที่อื่น mucosa พับและหลวม (rugae) ${S.gr}</li>
 <li><b>Neck</b> = ส่วนที่ยึดแน่นที่สุด · fibromuscular bands: <b>pubovesical lig. (หญิง)</b> / <b>puboprostatic lig. (ชาย)</b> ${S.gr}</li></ul>
 <h3>เลือด · lymph · nerve</h3><table>
 <tr><td>Artery</td><td>จาก internal iliac: <b>superior vesical a.</b> · <b>inferior vesical a. (ชาย) / vaginal a. (หญิง)</b> ${S.gr}</td></tr>
 <tr><td>Vein</td><td>Vesical venous plexus → internal iliac v. ${S.gr}</td></tr>
 <tr><td>Lymph</td><td>Superior &amp; inferolateral → <b>external iliac</b> · base → <b>internal iliac</b> ${S.gr} · neck → <b>sacral</b> ${S.x}</td></tr>
 <tr><td>Nerve</td><td><b>Vesical plexus</b> (จาก inferior hypogastric plexus) · parasympathetic <b>S2–S4</b> (pelvic splanchnic) → detrusor หดตัว · sympathetic <b>T10–L2</b> → ผ่อน detrusor, หด internal sphincter ${S.gr}${S.x}</td></tr></table>
 <div class="pearl"><b>Clinical:</b> suprapubic catheter แทงกลางลำตัวเหนือ pubic symphysis ~2 cm เข้า bladder ที่เต็ม <b>โดยไม่ผ่าน peritoneum</b> · มะเร็ง bladder ลามไป internal iliac nodes · นิ่วเล็กลงมาจาก ureter โตต่อใน bladder ได้ ${S.gr}</div>`});

/* 10 · urethra */
SEC.push({id:"urethra",k:"Urethra",t:"Urethra",tools:[["view",[["a","ภาพวาดใหม่"],["b","ภาพเดิม"]]],["sex",[["m","Male"],["f","Female"]]]],leg:["blad","uro","prost","musc"],figs:[["urethra-1","Urethra, female & male (Gray Fig 5.18)"],["urethra-2","Female urethra (Gray Fig 5.45A)"],["urethra-3","Male urethra & prostatic part (Gray Fig 5.45B–C)"],["bladder-6","Blood & lymph of urethra (Gray Fig 5.68)"],["bladder-7","Nerves: vesical plexus (Gray Fig 5.63)"]],
draw(){
 if(ST.view!=="b")return RD.urethra();
 let b="";
 if(ST.sex==="m"){
  b+=F("blad",sm([[90,40],[230,36],[262,90],[240,150],[196,170],[150,168],[100,140],[76,90]]));
  b+=`<rect x="160" y="166" width="70" height="14" rx="4" style="fill:#B8607A;stroke:var(--a-edge)"/>`;
  b+=F("prost",sm([[146,184],[244,184],[256,226],[232,262],[160,262],[136,226]]));
  b+=`<rect x="130" y="282" width="250" height="34" rx="6" style="fill:color-mix(in srgb,var(--a-musc) 30%,transparent);stroke:var(--a-edge);stroke-dasharray:4 3"/>`+`<rect x="130" y="316" width="250" height="6" style="fill:var(--a-fascia)"/>`;
  b+=`<rect x="180" y="284" width="30" height="30" rx="6" style="fill:var(--a-musc);stroke:var(--a-edge)"/>`;
  const SP="M196,322 C196,340 206,352 228,356 L380,356 C420,356 446,368 462,396 L512,480";
  b+=V("spong",SP,30).replace('class="v spong"','class="v" style="stroke:#C99AB0"')+V("uro","M196,166 L196,322",6)+V("uro",SP,6);
  b+=E("musc",232,352,22,16).replace('class="f musc"','class="f" style="fill:#C99AB0"')+F("musc",sm([[492,450],[536,446],[556,488],[530,512],[496,500]])).replace('class="f musc"','class="f" style="fill:#D7A7BC"')+E("uro",512,486,9,6);
  b+=E("glandm",262,306,8,7).replace("glandm","prost");
  const R=(x,y,w,h,n,c)=>`<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="9" class="box"/>${T(x+10,y+16,n,{a:"start",c:"s"})}${T(x+10,y+30,c,{a:"start",c:"s m"})}</g>`;
  if(ST.labels)b+=R(276,150,124,36,"1 Preprostatic","~1 cm · int. sphincter")+LD(232,174,276,166)+R(276,204,124,36,"2 Prostatic","3–4 cm")+LD(200,222,276,222)+R(400,262,130,36,"3 Membranous","0.5 cm · ext. sphincter")+LD(212,298,400,280)+
   R(400,330,124,36,"4 Spongy (penile)","~15 cm")+LD(330,356,400,350)+TL(540,520-14,["Navicular fossa"],{a:"end",c:"s"})+LD(512,486,534,500)+T(160,96,"Bladder",{c:"b"})+TL(124,296,["Deep perineal","pouch"],{a:"end",c:"s"})+TL(124,330,["Perineal","membrane"],{a:"end",c:"s"})+
   T(232,390,"Bulb",{c:"s"})+TL(274,318,["Bulbo-urethral","gland"],{a:"start",c:"s"})+T(452,412,"2nd bend (flaccid)",{a:"end",c:"s m"})+T(214,372,"1st bend",{a:"end",c:"s m"});
  const ix=470,iy=24;b+=`<rect x="${ix}" y="${iy}" width="150" height="210" rx="14" class="box"/>`+F("prost",sm([[ix+20,iy+44],[ix+130,iy+44],[ix+140,iy+120],[ix+110,iy+190],[ix+40,iy+190],[ix+10,iy+120]]))+
   `<rect x="${ix+58}" y="${iy+34}" width="34" height="164" rx="12" style="fill:var(--a-cav);stroke:var(--a-edge)"/><rect x="${ix+71}" y="${iy+40}" width="8" height="150" rx="4" style="fill:#D9A7BC"/>`+E("prost",ix+75,iy+118,12,16).replace("prost","glandm").replace('class="f glandm"','class="f" style="fill:#C98AA8"')+C("cav",ix+75,iy+114,2.6)+C("cav",ix+66,iy+124,2)+C("cav",ix+84,iy+124,2);
  for(let k=0;k<5;k++)b+=C("cav",ix+63,iy+70+k*22,1.5)+C("cav",ix+87,iy+70+k*22,1.5);
  if(ST.labels)b+=T(ix+75,iy+20,"Prostatic urethra (opened)",{c:"s h"})+TL(ix+146,iy+70,["Urethral","crest"],{a:"end",c:"s"})+TL(ix+146,iy+150,["Seminal","colliculus"],{a:"end",c:"s"})+TL(ix+6,iy+102,["Prostatic","utricle"],{a:"start",c:"s"})+TL(ix+6,iy+150,["Ejaculatory","ducts"],{a:"start",c:"s"})+TL(ix+6,iy+196,["Prostatic sinus"],{a:"start",c:"s m"});
 }else{
  b+=F("blad",sm([[150,40],[330,36],[372,100],[350,170],[300,196],[200,196],[150,170],[124,100]]));
  b+=`<rect x="90" y="300" width="420" height="40" rx="6" style="fill:color-mix(in srgb,var(--a-musc) 30%,transparent);stroke:var(--a-edge);stroke-dasharray:4 3"/><rect x="90" y="340" width="420" height="6" style="fill:var(--a-fascia)"/>`;
  b+=`<rect x="232" y="302" width="36" height="36" rx="8" style="fill:var(--a-musc);stroke:var(--a-edge)"/>`;
  b+=V("uro","M250,194 C250,240 250,300 250,392",8)+E("cav",250,398,10,6);
  b+=V("vag","M360,250 L360,410",26).replace('class="v vag"','class="v" style="stroke:#E0A3A8"')+E("cav",360,414,14,7);
  b+=C("prost",272,384,7).replace("prost","fat")+C("prost",228,384,7).replace("prost","fat")+E("fat",410,388,14,10);
  if(ST.labels)b+=T(250,110,"Bladder",{c:"b"})+TL(120,252,["Urethra ~4 cm","(สั้น ตรง)"],{a:"end",c:"s"})+LD(250,250,124,250)+TL(560,320,["Deep perineal pouch","+ external urethral","sphincter"],{a:"start",c:"s"}).replace(/x="560"/g,'x="520"')+LD(268,318,516,320)+
   TL(80,360,["Perineal","membrane"],{a:"end",c:"s"})+TL(150,430,["External urethral orifice","(ใน vestibule หน้า vagina)"],{a:"start",c:"s"})+LD(250,400,232,422)+TL(140,384,["Skene's","glands"],{a:"end",c:"s"})+LD(222,384,144,384)+T(360,236,"Vagina",{c:"s"})+TL(440,396,["Greater vestibular","gland"],{a:"start",c:"s"});
 }
 return svg(b)},
notes:()=>`<h3>ทั่วไป</h3><ul><li>ท่อผนังบาง นำปัสสาวะจาก base ของ bladder ไปเปิดที่ perineum ${S.gr}</li></ul>
 <h3>หญิง</h3><ul><li>สั้น <b>~4 cm</b> โค้งเล็กน้อย ผ่าน <b>deep perineal pouch และ perineal membrane</b> ${S.gr}</li>
 <li>เปิดใน <b>vestibule หน้า vagina</b> · มี <b>Skene's (para-urethral) glands</b> 2 ต่อมที่ปลาย · มี external urethral sphincter ${S.gr}</li></ul>
 <h3>ชาย (~20 cm โค้ง 2 ที่)</h3><table><tr><th>ส่วน</th><th>ยาว</th><th>จุดสำคัญ</th></tr>
 <tr><td>Preprostatic</td><td>1 cm</td><td>Internal urethral sphincter (smooth m.) กัน semen ไหลย้อนเข้า bladder</td></tr>
 <tr><td>Prostatic</td><td>3–4 cm</td><td>Urethral crest, prostatic sinus (รูของ prostate ducts), <b>seminal colliculus</b>: prostatic utricle (homolog ของ uterus) + รูของ ejaculatory ducts</td></tr>
 <tr><td>Membranous</td><td>0.5 cm</td><td>ผ่าน deep perineal pouch · <b>external urethral sphincter</b> (skeletal m.) · แคบที่สุด</td></tr>
 <tr><td>Spongy</td><td>15 cm</td><td>ใน corpus spongiosum · bulb (รับ bulbo-urethral glands) · navicular fossa</td></tr></table>
 <p style="font-size:.8125rem;color:var(--sb-muted);margin:-.4rem 0 .9rem">${S.gr}</p>
 <h3>เลือด · lymph · nerve</h3><ul><li>ชาย: inferior vesical, middle rectal a. · prostatic venous plexus · หญิง: internal pudendal &amp; vaginal vessels ${S.gr}</li>
 <li>Lymph ชาย: prostatic + membranous → <b>internal iliac</b> · spongy → <b>external iliac</b> และส่วนปลาย/glans → <b>deep inguinal</b> ${S.gr} · หญิง → internal iliac ${S.x}</li>
 <li>Nerve: ชาย prostatic plexus · หญิง vesical plexus (ทั้งคู่จาก inferior hypogastric plexus) ${S.gr}</li></ul>
 <div class="pearl"><b>Clinical:</b> urethra หญิงสั้น → bladder infection บ่อยกว่าชาย · ใส่สายสวนในชายต้องคำนึงถึงโค้ง 2 จุดและส่วน prostatic ที่โค้งไปหน้า ${S.gr}</div>`});

/* 11 · posterior wall muscles */
SEC.push({id:"wall",k:"Posterior abdominal wall",t:"Muscles",leg:["musc","bone"],figs:[["wall-1","Posterior abdominal wall"],["wall-3","Psoas, iliacus, quadratus lumborum (Gray Fig 4.142)"]],
draw(){
 let b="";const LV=[["T12",70],["L1",112],["L2",154],["L3",196],["L4",238],["L5",280]];
 b+=F("musc2","M70,90 C120,20 270,20 304,52 L336,52 C370,20 520,20 570,90 L560,98 C520,50 380,46 336,66 L304,66 C262,46 120,50 80,98 Z");
 b+=vertebrae(320,LV,46,32)+F("bone",sm([[294,300],[346,300],[350,334],[336,380],[320,404],[304,380],[290,334]]));
 b+=ilium(1).replace(/292,334/,"292,320")+ilium(-1);
 b+=V("musc","M306,62 C304,100 300,150 296,200",8)+V("musc","M334,62 C338,96 342,130 344,160",8);
 const ps=[[294,82],[284,140],[268,214],[252,290],[238,360],[232,430],[270,436],[274,366],[284,296],[298,220],[306,150],[306,84]];
 b+=F("musc",sm(ps))+F("musc",sm(mir(ps)))+V("bone","M296,120 C330,120 320,120 344,120",0.01).replace(/./,"")+V("musc2","M360,96 C362,160 372,240 390,330",4);
 const ql=[[262,120],[208,124],[180,136],[176,240],[184,292],[246,290],[258,220]];b+=F("musc2",sm(ql))+F("musc2",sm(mir(ql)));
 const il=[[236,300],[170,290],[116,302],[104,332],[150,366],[220,396],[244,394]];b+=F("musc",sm(il)).replace("musc","musc2").replace('class="f musc2"','class="f" style="fill:#D88A7E"')+F("musc",sm(mir(il))).replace('class="f musc"','class="f" style="fill:#D88A7E"');
 b+=`<path d="M70,130 C80,200 92,260 104,310" style="fill:none;stroke:var(--a-musc);stroke-width:18;opacity:.55"/><path d="M570,130 C560,200 548,260 536,310" style="fill:none;stroke:var(--a-musc);stroke-width:18;opacity:.55"/>`;
 b+=`<path d="M268,438 C300,470 340,470 372,438" style="fill:none;stroke:var(--a-fascia);stroke-width:2"/><path d="M118,330 L248,470" style="fill:none;stroke:var(--a-fascia);stroke-width:2"/><path d="M522,330 L392,470" style="fill:none;stroke:var(--a-fascia);stroke-width:2"/>`;
 if(ST.labels)b+=T(320,30,"Diaphragm",{c:"s"})+TL(254,96,["Right","crus"],{a:"end",c:"s"})+LD(302,110,258,98)+TL(386,96,["Left","crus"],{a:"start",c:"s"})+LD(338,110,384,98)+
  T(250,420,"Psoas major",{a:"end",c:"s"})+LD(256,400,252,416)+TL(400,276,["Psoas minor","(บางคนไม่มี)"],{a:"start",c:"s"})+LD(386,300,400,280)+TL(146,210,["Quadratus","lumborum"],{c:"s"})+T(160,338,"Iliacus",{c:"s"})+
  TL(40,160,["Transversus","abdominis"],{a:"start",c:"s"})+T(520,440,"Inguinal ligament",{c:"s m"})+LV.map(([n,y])=>T(320,y+4,n,{c:"s m"})).join("");
 return svg(b)},
notes:()=>`<h3>4 มัด</h3><table><tr><th>Muscle</th><th>Origin → Insertion</th><th>Nerve · Action</th></tr>
 <tr><td>Psoas major</td><td>Transverse process &amp; bodies T12–L5 + discs → <b>lesser trochanter</b></td><td>Anterior rami <b>L1–L3</b> · flex hip</td></tr>
 <tr><td>Psoas minor</td><td>Bodies T12–L1 → pectineal line, iliopubic eminence</td><td>Anterior ramus L1 · weak lumbar flexion · <b>บางคนไม่มี</b></td></tr>
 <tr><td>Iliacus</td><td>Upper 2/3 iliac fossa, ant. sacro-iliac &amp; iliolumbar lig., iliac crest → lesser trochanter</td><td><b>Femoral n. (L2–L4)</b> · flex hip</td></tr>
 <tr><td>Quadratus lumborum</td><td>Transverse process L5, iliolumbar lig., iliac crest → TP L1–L4, inferior border rib 12</td><td>Anterior rami T12, L1–L4 · ดึงและยึด rib 12, เอียงลำตัว</td></tr></table>
 <p style="font-size:.8125rem;color:var(--sb-muted);margin:-.4rem 0 .9rem">${S.gr}</p>
 <ul><li>Psoas major + iliacus = <b>iliopsoas</b> ใช้ tendon ร่วมไปที่ lesser trochanter ${S.gr}</li>
 <li>Diaphragm crura: right crus ลงถึง L3 · left crus ถึง L2 ${S.x}</li></ul>
 <div class="pearl"><b>Clinical:</b> psoas อยู่ใน fascia ของตัวเอง ฝีจากกระดูกสันหลัง (เช่น TB) ไหลตาม psoas ลงไปโผล่ที่ต้นขาใต้ inguinal ligament ได้ (psoas abscess) ${S.x}</div>`});

/* 12 · lumbar plexus */
SEC.push({id:"plexus",k:"Posterior abdominal wall",t:"Lumbar plexus",leg:["musc","bone"],figs:[["plexus-1","Lumbar plexus in posterior abdominal wall (Gray Fig 4.174)"],["plexus-2","Branches of lumbar plexus (Gray Fig 4.173)"],["plexus-3","Nerves of posterior abdominal wall"]],
tools:[["view",[["a","ภาพวาดใหม่"],["b","ภาพเดิม"]]]],
draw(){
 if(ST.view!=="b")return RD.plexus();
 let b="";const LV=[["T12",88],["L1",130],["L2",172],["L3",214],["L4",256],["L5",298]];
 b+=vertebrae(230,LV,46,32)+F("bone",sm([[204,318],[256,318],[262,352],[246,400],[230,424],[214,400],[200,352]]));
 const il=[[262,330],[340,300],[460,286],[540,304],[546,340],[486,372],[380,404],[300,420],[268,392]];b+=F("bone",sm(il));
 const ps=[[262,96],[276,150],[296,230],[316,310],[330,390],[336,470],[300,474],[290,400],[274,320],[258,240],[250,160],[252,98]];b+=F("musc",sm(ps)).replace('class="f musc"','class="f" style="fill:var(--a-musc);opacity:.55"');
 b+=F("musc2",sm([[262,120],[340,124],[372,140],[380,240],[372,290],[290,290],[270,220]])).replace('class="f musc2"','class="f" style="fill:var(--a-musc2);opacity:.6"');
 b+=`<path d="M548,330 C500,400 430,450 352,488" style="fill:none;stroke:var(--a-fascia);stroke-width:2"/>`;
 const N=[["Iliohypogastric","L1","#E07A1F","M262,138 C320,150 400,170 480,206 C520,224 556,250 590,276",["Skin posterolateral gluteal & pubic region","Int. oblique, transversus"]],
  ["Ilio-inguinal","L1","#C9971A","M264,150 C326,168 400,198 470,246 C506,270 530,300 556,334",["Skin upper medial thigh, root of penis / mons, ant. scrotum / labia majora"]],
  ["Genitofemoral","L1, L2","#2E9A50","M266,170 C290,190 300,230 304,280 C308,340 314,400 322,470",["Genital br.: ant. scrotum / labia, cremaster","Femoral br.: skin upper anterior thigh"]],
  ["Lateral femoral cutaneous","L2, L3","#7C3AED","M268,210 C320,250 400,300 470,346 C500,366 520,382 534,398",["Skin anterior & lateral thigh to knee"]],
  ["Femoral","L2–L4","#2563EB","M268,236 C300,290 318,350 330,420 C334,446 340,470 346,500",["Iliacus, pectineus, anterior thigh muscles","Skin anterior & medial thigh"]],
  ["Obturator","L2–L4","#DB2777","M258,246 C250,300 246,360 252,420 C256,450 262,480 268,500",["Medial thigh muscles, obturator externus","Skin medial thigh"]],
  ["Lumbosacral trunk","L4, L5","#64748B","M254,286 C246,330 238,380 226,440 C222,460 218,480 214,500",["→ sacral plexus"]]];
 LV.forEach(([n,y],i)=>{b+=V("nerve",`M254,${y+16} L270,${y+20}`,3)});
 N.forEach(([n,r,c,d])=>{b+=`<path d="${d}" style="fill:none;stroke:var(--a-edge);stroke-width:5.4;stroke-linecap:round"/><path d="${d}" style="fill:none;stroke:${c};stroke-width:3.4;stroke-linecap:round"/>`});
 if(ST.labels){LV.forEach(([n,y])=>b+=T(190,y+4,n,{a:"end",c:"s m"}));
  b+=T(594,268,"Iliohypogastric",{a:"end",c:"s"})+T(560,350,"Ilio-inguinal",{a:"start",c:"s"}).replace('text-anchor="start"','text-anchor="end"').replace('x="560"','x="600"')+T(322,486,"Genitofemoral",{a:"start",c:"s"}).replace('x="322"','x="326"')+
  TL(540,404,["Lat. femoral","cutaneous"],{a:"start",c:"s"})+T(350,512,"Femoral",{a:"start",c:"s"})+T(268,512,"Obturator",{a:"end",c:"s"}).replace('x="268"','x="262"')+T(206,500,"Lumbosacral trunk",{a:"end",c:"s"})+
  T(304,150,"Psoas major",{c:"s"})+TL(350,214,["Quadratus","lumborum"],{c:"s m"})+T(470,320,"Iliacus / iliac fossa",{c:"s m"})+T(470,470,"Inguinal lig.",{c:"s m"})+
  `<g transform="translate(400,24)"><rect width="220" height="96" rx="10" class="box"/>`+T(12,20,"สัมพันธ์กับ psoas major",{a:"start",c:"h"})+T(12,40,"Anterior: genitofemoral",{a:"start",c:"s"})+T(12,58,"Medial: obturator, lumbosacral trunk",{a:"start",c:"s"})+TL(12,76,["Lateral: iliohypogastric, ilio-inguinal,","LFCN, femoral"],{a:"start",c:"s"})+`</g>`}
 return svg(b)},
notes:()=>`<h3>Lumbar plexus</h3><ul><li>เกิดจาก <b>anterior rami L1–L3 และส่วนใหญ่ของ L4</b> (+ แขนงจาก T12) · ก่อตัวในเนื้อ psoas major หน้าจุดเกาะที่ transverse process ของ lumbar vertebrae ${S.gr}</li></ul>
 <table><tr><th>Nerve</th><th>Root</th><th>วิ่ง / เลี้ยง</th></tr>
 <tr><td>Iliohypogastric</td><td>L1</td><td>ขอบข้าง psoas → skin posterolateral gluteal &amp; pubic region · int. oblique, transversus</td></tr>
 <tr><td>Ilio-inguinal</td><td>L1</td><td>ขอบข้าง psoas → skin upper medial thigh, root of penis/mons, ant. scrotum/labia majora</td></tr>
 <tr><td>Genitofemoral</td><td>L1, L2</td><td><b>ทะลุผิวหน้า psoas</b> วิ่งใต้ psoas fascia · genital br. (scrotum/labia, cremaster) · femoral br. (skin upper ant. thigh)</td></tr>
 <tr><td>Lateral femoral cutaneous</td><td>L2, L3</td><td>ขอบข้าง psoas หน้า iliacus → ใต้ inguinal lig. → skin anterior/lateral thigh ถึงเข่า</td></tr>
 <tr><td>Femoral</td><td>L2–L4</td><td>ร่องระหว่าง psoas กับ iliacus → iliacus, pectineus, anterior thigh · skin anterior/medial thigh</td></tr>
 <tr><td>Obturator</td><td>L2–L4</td><td><b>ขอบ medial</b> ของ psoas → lateral pelvic wall → ทะลุ obturator membrane → medial thigh</td></tr></table>
 <p style="font-size:.8125rem;color:var(--sb-muted);margin:-.4rem 0 .9rem">${S.gr}</p>
 <div class="pearl"><b>จำ:</b> “I twice get laid on Fridays” → Iliohypogastric, Ilio-inguinal, Genitofemoral, LFCN, Obturator, Femoral · <b>Meralgia paresthetica</b> = LFCN ถูกกดใต้ inguinal lig. (ชาด้านข้างต้นขา) ${S.x}</div>`});

/* 13 · aorta, IVC, lymph */
SEC.push({id:"aorta",k:"Posterior abdominal wall",t:"Aorta, IVC & lymphatics",tools:[["lymph","Lymph"]],leg:["art","vein","lymph","cortex"],figs:[["aorta-1","Great vessels of posterior abdominal wall"],["aorta-2","Abdominal aorta & branches (Gray Fig 4.164)"],["aorta-3","IVC and tributaries (Gray Fig 4.166)"],["aorta-4","Lymphatics: pre-aortic, lateral aortic, cisterna chyli (Gray Fig 4.168)"]],
draw(){
 let b="";const LV=[["T12",60],["L1",112],["L2",164],["L3",216],["L4",268],["L5",320]];
 LV.forEach(([n,y])=>{b+=`<line class="guide" x1="40" y1="${y}" x2="600" y2="${y}"/>`+T(26,y+4,n,{a:"start",c:"s m"})});
 b+=F("cortex",bean(170,170,80,130,1,.15)).replace('class="f cortex"','class="f cortex" style="opacity:.45"')+F("cortex",bean(470,150,80,130,-1,-.15)).replace('class="f cortex"','class="f cortex" style="opacity:.45"');
 b+=V("vein","M292,20 L292,334",15)+V("vein","M292,334 C276,360 262,390 248,430",10)+V("vein","M292,334 C310,360 330,392 350,430",10);
 b+=V("art","M336,40 L336,288",14)+V("art","M336,288 C320,320 304,360 288,410",9)+V("art","M336,288 C354,320 372,360 392,410",9)+V("art","M336,288 L336,400",3);
 b+=V("art","M330,44 C300,36 270,30 230,34",3)+V("art","M342,44 C372,36 402,30 442,34",3);
 b+=C("art",336,62,7)+C("art",336,108,7)+C("art",336,226,6);
 b+=V("art","M330,104 L300,102",2)+V("art","M342,104 L372,102",2);
 b+=V("art","M330,140 C290,142 240,150 204,166",5)+V("art","M342,136 C380,138 420,142 438,148",5);
 b+=V("art","M330,172 C300,200 280,260 262,330",2)+V("art","M342,172 C372,200 392,260 410,330",2);
 [124,176,228,268].forEach(y=>b+=V("art",`M330,${y} L312,${y+4}`,1.8)+V("art",`M342,${y} L360,${y+4}`,1.8));
 b+=V("vein","M298,36 C320,26 340,24 360,26",3)+V("vein","M286,90 L254,94",2.4)+V("vein","M436,154 C400,150 340,146 300,146",7)+V("vein","M206,170 C236,160 262,154 286,150",7);
 b+=V("vein","M412,100 C410,120 412,136 414,150",2)+V("vein","M262,330 C270,260 280,220 288,196",2)+V("vein","M410,330 C404,260 410,200 420,158",2);
 if(ST.lymph){[[320,62],[320,108],[320,226]].forEach(([x,y])=>b+=E("lymph",x,y,6,5));[[358,150],[358,190],[358,240],[268,150],[268,190],[268,240]].forEach(([x,y])=>b+=E("lymph",x,y,7,5));
  b+=`<path class="f" d="M300,128 C290,116 294,94 306,92 C318,92 320,110 316,128 Z" style="fill:color-mix(in srgb,var(--a-lymph) 40%,transparent);stroke-dasharray:3 2"/>`+V("lymph","M308,92 C310,60 306,30 310,6",2)}
 if(ST.labels){b+=T(170,176,"R kidney",{c:"s m"})+T(470,156,"L kidney",{c:"s m"});
  b+=TL(626,58,["Celiac trunk (T12)"],{a:"end",c:"s"})+LD(343,62,520,56)+TL(626,98,["SMA (L1)"],{a:"end",c:"s"})+LD(343,108,580,96)+T(626,226,"IMA (L3)",{a:"end",c:"s"})+LD(342,226,574,222)+
  TL(626,130,["Renal a. (L1–L2)"],{a:"end",c:"s"})+TL(626,176,["Gonadal a. (L2)"],{a:"end",c:"s"})+LD(380,210,540,174)+TL(626,276,["Lumbar a. ×4"],{a:"end",c:"s"})+LD(360,272,560,274)+T(626,300,"Bifurcation (L4)",{a:"end",c:"s"})+LD(338,290,540,298)+
  T(626,404,"Median sacral a.",{a:"end",c:"s"})+LD(338,396,530,402)+T(452,28,"Inferior phrenic a.",{a:"start",c:"s"})+TL(96,96,["Middle","suprarenal a."],{a:"start",c:"s"}).replace(/x="96"/g,'x="380"').replace(/text-anchor="start"/g,'text-anchor="start"')+
  T(268,30,"IVC",{a:"end",c:"s"})+TL(60,84,["R suprarenal v.","→ IVC"],{a:"start",c:"s"})+LD(256,94,150,90)+TL(60,236,["R gonadal v.","→ IVC"],{a:"start",c:"s"})+LD(270,260,136,240)+TL(626,340,["L gonadal &","L suprarenal v.","→ L renal v."],{a:"end",c:"s"})+LD(412,300,536,340)+T(254,450,"Common iliac v. (L5)",{a:"end",c:"s"});
  if(ST.lymph)b+=TL(60,132,["Cisterna chyli","(L1–L2, หลังขวา aorta)"],{a:"start",c:"s"})+LD(298,118,200,136)+TL(60,286,["Lateral aortic","(lumbar) nodes"],{a:"start",c:"s"})+LD(264,242,150,284)+T(326,512,"Pre-aortic nodes อยู่หน้า celiac, SMA, IMA",{c:"s m"})}
 return svg(b,"0 0 640 524")},
notes:()=>`<h3>Abdominal aorta (T12–L4)</h3><table><tr><th>กลุ่ม</th><th>แขนง</th></tr>
 <tr><td>Visceral (anterior)</td><td><b>Celiac</b> (T12), <b>SMA</b> (L1), <b>IMA</b> (L3)</td></tr>
 <tr><td>Visceral (paired)</td><td>Middle suprarenal, <b>renal (L1–L2)</b>, gonadal (testicular/ovarian)</td></tr>
 <tr><td>Posterior</td><td>Inferior phrenic, lumbar ×4, median sacral</td></tr>
 <tr><td>Terminal</td><td>Common iliac (แยกที่ L4)</td></tr></table>
 <p style="font-size:.8125rem;color:var(--sb-muted);margin:-.4rem 0 .9rem">${S.gr}</p>
 <ul><li>Bifurcation ที่ L4 ตรงกับจุดใต้สะดือ ~2.5 cm หรือแนวเส้นต่อยอด iliac crest 2 ข้าง ${S.gr}</li>
 <li>หน้า aorta: pancreas + splenic v., <b>left renal v.</b>, 3rd part duodenum ${S.gr}</li></ul>
 <h3>IVC</h3><ul><li>รับ: common iliac v., lumbar v., <b>right</b> gonadal v., renal v., <b>right</b> suprarenal v., inferior phrenic v., hepatic v. ${S.gr}</li>
 <li><b>ยกเว้น</b> left gonadal v. และ left suprarenal v. → เข้า <b>left renal v.</b> ${S.gr}</li></ul>
 <h3>Lymph</h3><ul><li><b>Pre-aortic</b>: จากอวัยวะที่ celiac/SMA/IMA เลี้ยง → intestinal trunk ${S.gr}</li>
 <li><b>Lateral aortic (para-aortic/lumbar)</b>: จากผนังลำตัว ไต suprarenal testes/ovaries → lumbar trunk ซ้าย/ขวา ${S.gr}</li>
 <li><b>Cisterna chyli</b> = intestinal + lumbar trunks · หลังด้านขวาของ aorta หน้า L1–L2 · เริ่ม thoracic duct ${S.gr}</li></ul>
 <div class="pearl"><b>Clinical:</b> มะเร็งอัณฑะลามไป <b>para-aortic nodes</b> (ไม่ใช่ inguinal) เพราะ testis มาจากระดับไตตอนเป็นตัวอ่อน ${S.x}</div>`});

/* 14 · clinical */
SEC.push({id:"clinic",k:"Clinical",t:"Clinical correlations",figs:[["ureter-2","Ureteric constrictions on IVU"]],
draw(){
 let b="";
 const fig=(x,back)=>{let s=C("skin",x,56,26)+F("skin",`M${x-40},96 C${x-50},150 ${x-48},220 ${x-40},270 L${x-30},460 L${x-6},460 L${x},300 L${x+6},460 L${x+30},460 L${x+40},270 C${x+48},220 ${x+50},150 ${x+40},96 C${x+20},84 ${x-20},84 ${x-40},96Z`)+
   F("skin",`M${x-40},100 C${x-62},150 ${x-70},210 ${x-74},270 L${x-62},272 C${x-56},214 ${x-50},168 ${x-40},140Z`)+F("skin",`M${x+40},100 C${x+62},150 ${x+70},210 ${x+74},270 L${x+62},272 C${x+56},214 ${x+50},168 ${x+40},140Z`);
   const z=back?`M${x-40},180 C${x-20},176 ${x+20},176 ${x+40},180 L${x+40},250 C${x+20},246 ${x-20},246 ${x-40},250Z`:`M${x-40},210 C${x-30},240 ${x-20},262 ${x},272 C${x+20},262 ${x+30},240 ${x+40},210 L${x+40},300 L${x+26},330 L${x-26},330 L${x-40},300Z`;
   return s+`<path d="${z}" style="fill:color-mix(in srgb,var(--sb-bad) 45%,transparent);stroke:var(--sb-bad);stroke-width:1;stroke-dasharray:3 2"/>`};
 b+=fig(110,true)+fig(250,false);
 b+=`<path d="M70,214 C90,236 150,260 210,300" style="fill:none;stroke:var(--sb-bad);stroke-width:2.4;marker-end:url(#ah)"/>`;
 const card=(x,y,w,h,ttl,ls)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" class="box"/>`+T(x+12,y+20,ttl,{a:"start",c:"h"})+TL(x+12,y+38,ls,{a:"start",c:"s",lh:15});
 b+=card(340,20,284,108,"นิ่วใน ureter",["ติดที่ ① UPJ ② pelvic brim ③ UVJ","ปวดร้าว loin → groin (T11–L2)","CT KUB = มาตรฐาน · US ในคนท้อง","ภาวะแทรกซ้อน: ติดเชื้อ อุดตัน ไตวาย"]);
 b+=card(340,140,284,92,"Renal cell carcinoma",["มาจาก PCT epithelium","ลามเข้า renal v. → IVC → RA ได้","ฝั่งซ้ายอุด L renal v. → L varicocele"]);
 b+=card(340,244,284,92,"Kidney transplant",["วางใน iliac fossa (extraperitoneal)","ต่อ external/internal iliac a. &amp; v.","ureter ฝังเฉียงเข้า bladder"]);
 b+=card(340,348,284,76,"Nephrostomy",["ไตอยู่ลึกจากผิวหลังแค่ 2–3 cm","ใช้ US นำ ใส่สายเข้า renal pelvis"]);
 b+=card(340,436,284,76,"Bladder / urethra",["Suprapubic cath. เหนือ symphysis 2 cm","หญิง UTI บ่อย (urethra สั้น)"]);
 if(ST.labels)b+=T(110,490,"Back · loin",{c:"s"})+T(250,490,"Front · groin, pubis, thigh",{c:"s"})+T(180,16,"Referred pain from ureter: T11–L2",{c:"h"}).replace('y="16"','y="20"');
 return svg(b,"0 0 640 524")},
notes:()=>`<h3>ที่มา</h3><ul>
 <li><b>นิ่ว</b>: ชายมากกว่าหญิง อายุ 20–60 ปี · ปวดจาก loin ร้าวลง groin ถึง scrotum/labia + hematuria · ตรวจ CT KUB (ขนาด ตำแหน่ง ระดับการอุดตัน) · US ใช้ในคนท้อง ${S.gr}</li>
 <li><b>RCC</b>: มาจาก proximal tubular epithelium · ลามเข้า renal v. และ IVC ได้ ซึ่งมะเร็งอื่นไม่ค่อยทำ · ~5% ของเนื้องอกในไตเป็น transitional cell จาก urothelium ของ pelvis ${S.gr}</li>
 <li><b>Urothelium</b> ตั้งแต่ calyx ถึง urethra ทำตัวเป็น “หน่วยเดียว” → เป็น TCC ที่ bladder ต้องตรวจทั้งทางเดินปัสสาวะ ${S.gr}</li>
 <li><b>Nephrostomy</b>: ระบายปัสสาวะเมื่อ ureter ส่วนปลายอุด (กันไตวายและติดเชื้อ) ${S.gr}</li>
 <li><b>Transplant</b>: iliac fossa อยู่ใกล้ผิวหน้าท้อง → ทำ US/Doppler และ biopsy ง่าย ฟื้นตัวเร็ว ${S.gr}</li>
 <li><b>Ureteric injury</b> ระหว่างผ่าตัดในอุ้งเชิงกราน (hysterectomy, colectomy) → ปัสสาวะรั่ว sepsis หรือ fistula ${S.gr}</li>
 <li><b>Bladder cancer</b>: มักเป็นหลายจุด ลามไป rectum/uterus/prostate และ internal iliac nodes ${S.gr}</li></ul>
 <div class="pearl">ดูกลไกการเกิดนิ่วและ AKI ต่อได้ใน <b>Nephron Pathway Atlas</b> ส่วน Kidney diseases</div>`});

/* order follows Gray's Anatomy for Students: posterior abdominal wall → kidneys → ureters → suprarenal glands → vessels, lymphatics, nerves (Ch 4) → bladder, urethra (Ch 5) */
GN["Vessels & nerves"]="หลอดเลือดใหญ่ น้ำเหลือง เส้นประสาท";
SEC.forEach(s=>{if(s.id==="aorta"||s.id==="plexus")s.k="Vessels & nerves"});
/* First Aid order: renal anatomy = kidney & glomerular structure, course of ureters; everything else is supplementary (เสริม) */
{const ORD=["loc","rel","fascia","struct","vessels","lnn","ureter","wall","adrenal","aorta","plexus","bladder","urethra","clinic"];SEC.sort((a,b)=>ORD.indexOf(a.id)-ORD.indexOf(b.id));
 const CORE={loc:"fa1",rel:"fa1",fascia:"fa1",struct:"fa1",vessels:"fa1",lnn:"fa1",ureter:"fa2"};GN.fa1="Kidney anatomy & glomerular structure";GN.fa2="Course of ureters";
 SEC.forEach(s=>{if(CORE[s.id])s.k=CORE[s.id];else{const nk="x-"+s.k;GN[nk]="เสริม · "+(GN[s.k]||s.k);s.k=nk}})}
/* ================= render: one chapter = one continuous page ================= */
const $=s=>document.querySelector(s);
const SEENKEY="sb-anat-seen",FIGDIR="img/anat/";
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

/* ---------------------------------------------------------------------
   Microbiology drawing helpers.
   Everything here draws the real thing: membranes have leaflets, walls are
   woven, cytoplasm has grain. Nothing here draws a captioned box.
   --------------------------------------------------------------------- */

/* deterministic pseudo-random — same picture on every reload */
function rng(s){return()=>{s=(s*16807)%2147483647;return(s-1)/2147483646}}

/* closed seeded wobble — periodic over 2π so blobs always shut cleanly */
function mwobC(seed, amp = 1) {
  const r = rng(seed), p = [r() * 6.28, r() * 6.28, r() * 6.28];
  return a => amp * (Math.sin(a * 3 + p[0]) * .55 + Math.sin(a * 5 + p[1]) * .3 + Math.sin(a * 7 + p[2]) * .15);
}

/* open seeded wobble for baselines */
function mwob(seed, amp = 1) {
  const r = rng(seed), p = [r() * 6.28, r() * 6.28, r() * 6.28];
  return t => amp * (Math.sin(t / 47 + p[0]) * .6 + Math.sin(t / 23 + p[1]) * .28 + Math.sin(t / 11 + p[2]) * .12);
}

/* an organic cell outline — never a perfect ellipse */
function mblob(cx, cy, rx, ry, seed, wob = .055, n = 72) {
  const w = mwobC(seed); let d = "";
  for (let i = 0; i <= n; i++) {
    const a = i / n * Math.PI * 2, k = 1 + w(a) * wob;
    d += (i ? "L" : "M") + (cx + Math.cos(a) * rx * k).toFixed(1) + "," + (cy + Math.sin(a) * ry * k).toFixed(1);
  }
  return d + "Z";
}

/* a rod with rounded caps and a living outline */
function mrod(cx, cy, len, rad, seed, wob = .05, n = 76) {
  const w = mwobC(seed), h = Math.max(0, len / 2 - rad); let d = "";
  for (let i = 0; i <= n; i++) {
    const a = i / n * Math.PI * 2, k = 1 + w(a) * wob;
    const x = Math.cos(a), y = Math.sin(a);
    d += (i ? "L" : "M") + (cx + x * rad * k + (x > 0 ? h : -h)).toFixed(1) + "," + (cy + y * rad * k).toFixed(1);
  }
  return d + "Z";
}

/* grain: the texture that stops a fill looking like plastic */
function mgrain(x, y, w, h, n, seed, cls = "m-gr", rad = .8) {
  const q = rng(seed); let b = "";
  for (let i = 0; i < n; i++)
    b += `<circle class="${cls}" cx="${(x + q() * w).toFixed(1)}" cy="${(y + q() * h).toFixed(1)}" r="${(rad * (.45 + q())).toFixed(2)}"/>`;
  return b;
}

/* grain clipped to a path — for cytoplasm inside a cell */
function mgrainIn(id, path, x, y, w, h, n, seed, cls = "m-gr", rad = .8) {
  return `<clipPath id="${id}"><path d="${path}"/></clipPath>`
    + `<g clip-path="url(#${id})">${mgrain(x, y, w, h, n, seed, cls, rad)}</g>`;
}

/* ---------------------------------------------------------------------
   Phospholipid bilayer along a baseline yf(x).
   up/down decide which leaflet the tails point from; this is drawn as
   heads and tails, never as a coloured band.
   --------------------------------------------------------------------- */
function mbil(x0, x1, yf, o = {}) {
  const h = o.h || 15, step = o.step || 8.2, hr = o.hr || 3.05,
    core = o.core || "m-core", head = o.head || "m-head", tail = o.tail || "m-tail";
  const N = Math.max(2, Math.round((x1 - x0) / step));
  let top = "", bot = "";
  for (let i = 0; i <= N; i++) { const x = x0 + (x1 - x0) * i / N, y = yf(x); top += (i ? "L" : "M") + x.toFixed(1) + "," + (y - h / 2).toFixed(1); }
  for (let i = N; i >= 0; i--) { const x = x0 + (x1 - x0) * i / N, y = yf(x); bot += "L" + x.toFixed(1) + "," + (y + h / 2).toFixed(1); }
  let b = `<path class="${core}" d="${top + bot}Z"/>`;
  for (let x = x0 + step / 2; x < x1; x += step) {
    const y = yf(x), ty = y - h / 2 + hr * .92, by = y + h / 2 - hr * .92;
    b += `<circle class="${head}" cx="${x.toFixed(1)}" cy="${ty.toFixed(1)}" r="${hr}"/>`
      + `<circle class="${head}" cx="${x.toFixed(1)}" cy="${by.toFixed(1)}" r="${hr}"/>`;
    const inT = ty + hr * .8, inB = by - hr * .8, mid = (inT + inB) / 2;
    b += `<path class="${tail}" d="M${(x - 1.15).toFixed(1)},${inT.toFixed(1)} Q${(x - 2.1).toFixed(1)},${mid.toFixed(1)} ${(x - 1.15).toFixed(1)},${(mid - .6).toFixed(1)}"/>`
      + `<path class="${tail}" d="M${(x + 1.15).toFixed(1)},${inT.toFixed(1)} Q${(x + 2.1).toFixed(1)},${mid.toFixed(1)} ${(x + 1.15).toFixed(1)},${(mid - .6).toFixed(1)}"/>`
      + `<path class="${tail}" d="M${(x - 1.15).toFixed(1)},${inB.toFixed(1)} Q${(x - 2.1).toFixed(1)},${mid.toFixed(1)} ${(x - 1.15).toFixed(1)},${(mid + .6).toFixed(1)}"/>`
      + `<path class="${tail}" d="M${(x + 1.15).toFixed(1)},${inB.toFixed(1)} Q${(x + 2.1).toFixed(1)},${mid.toFixed(1)} ${(x + 1.15).toFixed(1)},${(mid + .6).toFixed(1)}"/>`;
  }
  return b;
}

/* ---------------------------------------------------------------------
   Woven peptidoglycan: glycan strands running across, peptide bridges
   linking them. rows = how many layers thick.
   --------------------------------------------------------------------- */
function mpgl(x0, x1, yf, rows, gap, seed, o = {}) {
  const w = mwob(seed, o.amp === undefined ? 1.6 : o.amp), q = rng(seed + 11);
  const strand = (y0, cls) => {
    let d = ""; for (let x = x0; x <= x1; x += 6) d += (x === x0 ? "M" : "L") + x.toFixed(1) + "," + (yf(x) + y0 + w(x)).toFixed(1);
    return `<path class="${cls}" d="${d}"/>`;
  };
  let b = "";
  for (let r = 0; r < rows; r++) {
    const y0 = r * gap;
    b += strand(y0, r % 2 ? "m-gly2" : "m-gly");
    if (r < rows - 1) for (let x = x0 + 7 + q() * 9; x < x1 - 5; x += 15 + q() * 11) {
      const ya = yf(x) + y0 + w(x), yb = yf(x) + y0 + gap + w(x);
      const dx = (q() - .5) * 5;
      b += `<path class="m-pep" d="M${x.toFixed(1)},${ya.toFixed(1)} L${(x + dx).toFixed(1)},${yb.toFixed(1)}"/>`;
    }
  }
  return b;
}

/* teichoic acid: a beaded strand threading out through the wall */
function mteic(x, yTop, yBot, seed, beads) {
  const q = rng(seed); let d = `M${x},${yBot}`, b = "";
  const n = beads || Math.max(3, Math.round((yBot - yTop) / 9));
  for (let i = 1; i <= n; i++) {
    const t = i / n, y = yBot + (yTop - yBot) * t, xx = x + Math.sin(t * 7 + q() * 2) * 2.4;
    d += ` L${xx.toFixed(1)},${y.toFixed(1)}`;
    b += `<circle class="m-teicb" cx="${xx.toFixed(1)}" cy="${y.toFixed(1)}" r="1.5"/>`;
  }
  return `<path class="m-teic" d="${d}"/>` + b;
}

/* LPS: core sugars then a waving O-antigen chain of beads */
function mlps(x, y, seed, len) {
  const q = rng(seed); let d = `M${x},${y}`, b = "";
  const n = len || 7;
  for (let i = 1; i <= n; i++) {
    const yy = y - i * 6.4, xx = x + Math.sin(i * .9 + q() * 3) * 3.6;
    d += ` L${xx.toFixed(1)},${yy.toFixed(1)}`;
    b += `<circle class="${i <= 2 ? "m-oantib" : "m-oantib"}" cx="${xx.toFixed(1)}" cy="${yy.toFixed(1)}" r="${i <= 2 ? 2.1 : 1.6}"/>`;
  }
  return `<path class="m-oanti" d="${d}"/>` + b;
}

/* mycolic acids: very long tails packed shoulder to shoulder */
function mmyco(x0, x1, yBase, hgt, seed, step) {
  const q = rng(seed); let b = "";
  for (let x = x0; x < x1; x += (step || 5.2)) {
    const k = .8 + q() * .4, h = hgt * k, bend = (q() - .5) * 4;
    b += `<path class="m-myco" d="M${x.toFixed(1)},${yBase} C${(x + bend).toFixed(1)},${(yBase - h * .45).toFixed(1)} ${(x - bend).toFixed(1)},${(yBase - h * .7).toFixed(1)} ${(x + bend * .6).toFixed(1)},${(yBase - h).toFixed(1)}"/>`;
  }
  return b;
}

/* a label on a thin leader line with a dot at the thing it names */
function mlead(px, py, tx, ty, s, o = {}) {
  if (!ST.labels) return "";
  const a = o.a || (tx < px ? "end" : "start");
  return `<path class="m-lead" d="M${px},${py} L${tx},${ty}"/>`
    + `<circle class="m-dot" cx="${px}" cy="${py}" r="1.9"/>`
    + T(tx + (a === "end" ? -5 : 5), ty + 4, s, { a, c: o.c || "s" });
}

/* plain label, respecting the Labels toggle */
const mL = (x, y, s, o) => ST.labels ? T(x, y, s, o) : "";

/* a leader line carrying two short lines of text — long labels never fit */
function mlead2(px, py, tx, ty, lines, o = {}) {
  if (!ST.labels) return "";
  const a = o.a || (tx < px ? "end" : "start"), dx = a === "end" ? -5 : 5;
  let b = `<path class="m-lead" d="M${px},${py} L${tx},${ty}"/>`
    + `<circle class="m-dot" cx="${px}" cy="${py}" r="1.9"/>`;
  lines.forEach((l, i) => { b += T(tx + dx, ty + 4 + i * 15, l, { a, c: i ? "s m" : (o.c || "bh") }) });
  return b;
}

/* a closed, lobed loop — what a relaxed circular chromosome actually looks like */
function mloop(cx, cy, R, seed, lob = .3, n = 220, sq = .8) {
  const r = rng(seed), p = [r() * 6.28, r() * 6.28, r() * 6.28]; let d = "";
  for (let i = 0; i <= n; i++) {
    const a = i / n * Math.PI * 2;
    const k = 1 + lob * (Math.sin(a * 3 + p[0]) * .5 + Math.sin(a * 5 + p[1]) * .32 + Math.sin(a * 8 + p[2]) * .18);
    d += (i ? "L" : "M") + (cx + Math.cos(a) * R * k).toFixed(1) + "," + (cy + Math.sin(a) * R * sq * k).toFixed(1);
  }
  return d + "Z";
}

/* a tailed phage, drawn with its facets, striated sheath and fibres */
function mphage(cx, cy, s = 1) {
  const R = 44 * s, hy = cy - 4 * s; let b = "";
  const V = [...Array(6)].map((_, i) => { const a = -Math.PI / 2 + i * Math.PI / 3; return [cx + Math.cos(a) * R, hy + Math.sin(a) * R] });
  b += `<path class="m-head" d="M${V.map(v => v[0].toFixed(1) + "," + v[1].toFixed(1)).join(" L")}Z"/>`;
  [0, 2, 4].forEach(i => { b += `<path class="m-face" d="M${cx},${hy} L${V[i][0].toFixed(1)},${V[i][1].toFixed(1)}"/>` });
  /* the genome, coiled inside the head */
  b += `<path class="m-pdna" d="${mloop(cx, hy, R * .42, 9, .34, 120, .9)}"/>`;
  const ty = hy + R, L = 52 * s, w = 9 * s;
  b += `<rect class="m-tail" x="${cx - w - 3}" y="${ty - 2}" width="${(w + 3) * 2}" height="${6 * s}" rx="2"/>`
    + `<rect class="m-tail" x="${cx - w}" y="${ty + 5 * s}" width="${w * 2}" height="${L}" rx="2"/>`;
  for (let i = 1; i * 7 * s < L; i++) b += `<path class="m-face" d="M${cx - w},${(ty + 5 * s + i * 7 * s).toFixed(1)} L${cx + w},${(ty + 5 * s + i * 7 * s).toFixed(1)}"/>`;
  const by = ty + 5 * s + L;
  b += `<rect class="m-tail" x="${cx - w - 6}" y="${by}" width="${(w + 6) * 2}" height="${6 * s}" rx="3"/>`;
  [-1, 1].forEach(sg => {
    b += `<path class="m-fib" d="M${cx + sg * (w + 4)},${by + 6 * s} q${sg * 12 * s},${10 * s} ${sg * 8 * s},${24 * s}"/>`
      + `<path class="m-fib" d="M${cx + sg * (w + 1)},${by + 6 * s} q${sg * 20 * s},${6 * s} ${sg * 24 * s},${18 * s}"/>`;
  });
  return b;
}

/* ---------------------------------------------------------------------
   A skin cross-section. Layers are drawn with their own texture — corneum
   flakes, granular cells, collagen bundles, fat lobules — so a lesion can
   be placed at the depth it actually occupies.
   Returns {y:{corn,gran,spin,basal,derm,subq,fasc,musc,bot}} for callers.
   --------------------------------------------------------------------- */
function mskin(x0, x1, y0, o = {}) {
  const sc = o.scale || 1, w = x1 - x0;
  const y = { top: y0, corn: y0 + 14 * sc, gran: y0 + 24 * sc, spin: y0 + 52 * sc, derm: y0 + 128 * sc, subq: y0 + 182 * sc, fasc: y0 + 194 * sc, bot: y0 + 230 * sc };
  const wv = mwob(o.seed || 3, 2.4), q = rng((o.seed || 3) + 31);
  const band = (a, b, cls) => {
    let d = `M${x0},${a(x0)}`; for (let x = x0; x <= x1; x += 6) d += `L${x.toFixed(1)},${a(x).toFixed(1)}`;
    for (let x = x1; x >= x0; x -= 6) d += `L${x.toFixed(1)},${b(x).toFixed(1)}`;
    return `<path class="${cls}" d="${d}Z"/>`;
  };
  const f = v => x => v + wv(x);
  let b = band(f(y.top), f(y.corn), "m-corn") + band(f(y.corn), f(y.gran), "m-gran")
    + band(f(y.gran), f(y.spin), "m-spin") + band(f(y.spin), f(y.derm), "m-derm")
    + band(f(y.derm), f(y.subq), "m-subq") + band(f(y.subq), f(y.fasc), "m-fasc")
    + band(f(y.fasc), f(y.bot), "m-musc");
  /* corneum: flattened, overlapping squames */
  for (let x = x0 + 4; x < x1; x += 13) {
    const yy = y.top + wv(x) + 4 + (q() * 5);
    b += `<path class="m-kera" d="M${x.toFixed(1)},${yy.toFixed(1)} q${6},${-1.6} ${12},0"/>`;
  }
  /* granular + spinous: polygonal keratinocytes, flatter nearer the surface */
  for (let yy = y.corn + 5; yy < y.spin - 2; yy += 9)
    for (let x = x0 + 6 + (yy % 2 ? 6 : 0); x < x1 - 4; x += 15)
      b += `<path class="m-kcell" d="${mblob(x, yy + wv(x), 7, 3.6, Math.round(x + yy), .12, 14)}"/>`;
  /* dermis: collagen bundles running with the surface */
  for (let i = 0; i < 26; i++) {
    const yy = y.spin + 6 + q() * (y.derm - y.spin - 10), x = x0 + q() * (w - 60), L = 30 + q() * 60;
    b += `<path class="m-coll" d="M${x.toFixed(1)},${(yy + wv(x)).toFixed(1)} q${(L / 2).toFixed(0)},${(q() * 7 - 3.5).toFixed(1)} ${L.toFixed(0)},0"/>`;
  }
  /* subcutis: fat lobules */
  for (let x = x0 + 14; x < x1 - 8; x += 29)
    b += `<path class="m-fat" d="${mblob(x, (y.derm + y.subq) / 2 + wv(x), 14, 11, Math.round(x), .1, 20)}"/>`;
  return { b, y, wv };
}

/* a hair follicle sunk into the dermis, with its shaft */
function mfoll(x, y, depth, wv, o = {}) {
  const w = o.w || 9, bulb = o.bulb || 13;
  let b = `<path class="m-foll" d="M${x - w},${(y.top + wv(x)).toFixed(1)} L${x - w},${y.derm - bulb} q0,${bulb} ${w},${bulb} q${w},0 ${w},${-bulb} L${x + w},${(y.top + wv(x)).toFixed(1)} Z"/>`;
  if (o.hair !== false) b += `<path class="m-hair" d="M${x},${y.derm - 6} L${x},${y.top + wv(x) - (o.out || 16)}"/>`;
  return b;
}

/* a blood agar plate seen from above, with one hemolysis pattern per sector */
function magar(cx, cy, R, sectors, seed = 5) {
  const q = rng(seed);
  let b = `<circle class="m-agar" cx="${cx}" cy="${cy}" r="${R}"/>`;
  sectors.forEach(([cls, ang], i) => {
    const a0 = ang - Math.PI * 2 / sectors.length / 2, a1 = ang + Math.PI * 2 / sectors.length / 2;
    const px = cx + Math.cos(ang) * R * .52, py = cy + Math.sin(ang) * R * .52;
    for (let k = 0; k < 5; k++) {
      const aa = a0 + (a1 - a0) * (.2 + q() * .6), rr = R * (.3 + q() * .45);
      const x = cx + Math.cos(aa) * rr, y = cy + Math.sin(aa) * rr;
      if (cls) b += `<circle class="${cls}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(cls === "m-beta" ? 11 : 8).toFixed(1)}"/>`;
      b += `<circle class="m-col" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(2.6 + q()).toFixed(1)}"/>`;
    }
  });
  return b;
}

function dirFlD(ref, r, dir, lb = 3) {
  let dColor = flowerDColor[cfd];
  strokeWeight(0.3);
  stroke(100, 0, 0, 80);
  let nogh = circFlo(ref.x, ref.y, r, 3);
  for (let k = 0; k < nogh.length; k++) {
    let [x, y, r] = nogh[k];
    let mlg = random(["l", "r", "u", "n"]);
    let gmn = flpB(hc(x, y), r, mlg, lb);
    let mkh = flpB(hc(x, y), r * 0.7, mlg, lb, 0.04);
    let blk = flpB(hc(x, y), r * 0.6, mlg, lb, 0.12);
    fill(dColor[0]);
    for (let i = 0; i < gmn.length; i++) {
      let e = gmn[i];
      beginShape();
      for (let p of e) {
        vertex(p.x, p.y);
      }
      endShape();
    }
    fill(dColor[1]);
    for (let i = 0; i < mkh.length; i++) {
      let e = mkh[i];
      beginShape();
      for (let p of e) {
        vertex(p.x, p.y);
      }
      endShape();
    }
    fill(dColor[2]);
    for (let i = 0; i < blk.length; i++) {
      let e = blk[i];
      beginShape();
      for (let p of e) {
        vertex(p.x, p.y);
      }
      endShape();
    }
  }
}
function flpB(ref, r, dir, lb, ang = 0) {
  let { center, mw, mh, bw, bh } = dirBaseB(ref, r, dir, lb);
  let refC = hc(center.x, center.y);
  let pl = [];
  let th = [];
  for (let i = ang; i < TAU; i += 0.1) {
    let [x, y] = mcr(ref.x, ref.y, mw, mh, i);
    pl.push([x, y]);
  }
  for (let i = ang; i < TAU; i += 0.2) {
    let [x, y] = mcr(ref.x, ref.y, bw, bh, i);
    th.push([x, y]);
  }
  pl = pl.splice(0, 20);
  th = th.splice(0, 10);
  for (let i = 0; i < pl.length; i++) {
    pl.splice(i, 1);
  }
  let gmn = [];
  for (let i = pl.length - 1; i >= 0; i--) {
    let [x, y] = pl[i];
    let [x2, y2] = i == 0 ? pl.at(-1) : pl[i - 1];
    let a = hc(x, y);
    let a2 = hc(x2, y2);
    let b = hc(th[i][0], th[i][1]);
    gmn.push(nmb(refC, a, b).reverse().concat(nmb(refC, a2, b)));
  }
  return gmn;
}

function dirBaseB(ref, r, dir, lb) {
  let center, mw, mh, bw, bh;
  switch (dir) {
    case "l":
      center = hc(ref.x + lb, ref.y);
      mw = r * 1.2;
      mh = r;
      bw = r * 1.1;
      bh = r * 1.5;
      break;
    case "r":
      center = hc(ref.x - lb, ref.y);
      mw = r * 1.2;
      mh = r;
      bw = r * 1.1;
      bh = r * 1.5;
      break;

    case "u":
      center = hc(ref.x, ref.y + lb);
      mw = r;
      mh = r * 0.6;
      bw = r * 1.2;
      bh = r * 0.7;
      break;
    case "n":
      center = hc(ref.x, ref.y);
      mw = r;
      mh = r;
      bw = r * 1.5;
      bh = r;
      break;
    default:
      break;
  }
  return { center, mw, mh, bw, bh };
}
function mcr(a, b, r, tn, ang) {
  var t = tan(ang * PI);
  var px = a + (r * (1 - t ** 2)) / (1 + t ** 2),
    py = b + (tn * 2 * t) / (1 + t ** 2);
  return [px, py];
}

function nmb(a, b, c) {
  let ret = [];
  for (let t = 0; t < 1.00001; t += 0.05) {
    let x1 = lerp(a.x, b.x, t);
    let y1 = lerp(a.y, b.y, t);
    let x2 = lerp(b.x, c.x, t);
    let y2 = lerp(b.y, c.y, t);
    let x = lerp(x1, x2, t);
    let y = lerp(y1, y2, t);
    ret.push(hc(x, y));
  }
  return ret;
}

function hc(a, b) {
  return createVector(a, b);
}

function circFlo(a, b, r, n = 3) {
  let gt = n;
  let ret = [];
  ret.push([a, b, r]);
  let rag = random(TAU);
  let inc = TAU / random(gt / 2, gt);
  for (let angle = rag; angle < TAU + rag; angle += inc) {
    let x = a + (r + r * random(0.3, 0.6)) * cos(angle);
    let y = b + (r + r * random(0.02)) * sin(angle);
    ret.push([x, y, r]);
  }
  return ret;
}

let flowerDColor = [
  [
    [324, 17, 92],
    [318, 44, 80],
    [251, 77, 40],
  ],

  [
    [342, 66, 80],
    [350, 27, 88],
    [87, 25, 86],
  ],

  [
    [267, 68, 23],
    [275, 51, 48],
    [60, 50, 86],
  ],

  [
    [232, 98, 40],
    [324, 54, 54],
    [169, 28, 68],
  ],

  [
    [53, 69, 96],
    [290, 24, 94],
    [253, 73, 42],
  ],
  [
    [209, 62, 96],
    [209, 40, 94],
    [215, 69, 87],
  ],

  [
    [275, 27, 87],
    [286, 40, 83],
    [268, 62, 50],
  ],

  [
    [0, 96, 38],
    [15, 78, 65],
    [25, 40, 85],
  ],

  [
    [217, 80, 20],
    [200, 50, 78],
    [181, 26, 83],
  ],

  [
    [305, 35, 67],
    [300, 24, 91],
    [260, 45, 86],
  ],
];

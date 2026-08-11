function dirFlB(ref, r, flc, dir, lb = 3) {
  stroke(100, 0, 0);
  strokeWeight(0.2);
  let bgfc = flbColor[cfb];
  let nogh = circFlo(ref.x, ref.y, r, 3);
  for (let k = 0; k < nogh.length; k++) {
    let [x, y, r] = nogh[k];
    let mlg = random(["l", "r", "u", "n"]);
    let gmn = flpB(hc(x, y), r, mlg, lb);
    let mkh = flpB(hc(x, y), r / 2, mlg, lb);
    fill(bgfc[0]);
    stroke(100, 0, 0, 80);
    strokeWeight(0.2);
    for (let i = 0; i < gmn.length; i++) {
      let e = gmn[i];
      beginShape();
      for (let p of e) {
        vertex(p.x, p.y);
      }
      endShape();
    }

    fill(bgfc[1]);
    stroke(100, 0, 0, 80);
    strokeWeight(0.2);
    for (let i = 0; i < mkh.length; i++) {
      let e = mkh[i];
      beginShape();
      for (let p of e) {
        vertex(p.x, p.y);
      }
      endShape();
    }
  }
}
function flpB(ref, r, dir, lb) {
  let { center, mw, mh, bw, bh } = dirBaseB(ref, r, dir, lb);
  let refC = hc(center.x, center.y);
  let pl = [];
  let th = [];
  for (let i = 0; i < TAU; i += 0.03) {
    let [x, y] = mcr(ref.x, ref.y, mw, mh, i);
    pl.push([x, y]);
  }
  for (let i = 0; i < TAU; i += 0.06) {
    let [x, y] = mcr(ref.x, ref.y, bw, bh, i);
    th.push([x, y]);
  }
  pl = pl.splice(0, 52);
  th = th.splice(0, 26);
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
      mw = r;
      mh = r;
      bw = r * 1.1;
      bh = r * 1.5;
      break;
    case "r":
      center = hc(ref.x - lb, ref.y);
      mw = r;
      mh = r;
      bw = r * 1.1;
      bh = r * 1.5;
      break;

    case "u":
      center = hc(ref.x, ref.y + lb);
      mw = r * 0.75;
      mh = r * 0.6;
      bw = r * 1.2;
      bh = r * 0.7;
      break;
    case "n":
      center = hc(ref.x, ref.y);
      mw = r;
      mh = r;
      bw = r * 1.2;
      bh = r * 1.5;
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

let flbColor = [
  // [
  //   [84, 91, 58],
  //   [356, 95, 13],
  // ],
  // [
  //   [322, 39, 57],
  //   [168, 23, 50],
  // ],
  // [
  //   [111, 93, 27],
  //   [306, 90, 14],
  // ],
  // [
  //   [71, 66, 36],
  //   [30, 94, 54],
  // ],
  [
    [339, 90, 44],
    [54, 89, 66],
  ],
  [
    [296, 36, 88],
    [313, 82, 52],
  ],
  // [
  //   [86, 88, 10],
  //   [306, 32, 34],
  // ],
  [
    [247, 49, 100],
    [240, 85, 43],
  ],
  // [
  //   [129, 69, 40],
  //   [301, 65, 20],
  // ],
  [
    [327, 34, 69],
    [286, 47, 35],
  ],
  // [
  //   [224, 91, 41],
  //   [278, 88, 56],
  // ],
  // [
  //   [280, 12, 75],
  //   [51, 45, 79],
  // ],
  [
    [324, 67, 64],
    [205, 54, 100],
  ],
  // [
  //   [292, 20, 91],
  //   [187, 49, 90],
  // ],

  // [
  //   [346, 49, 90],
  //   [164, 27, 56],
  // ],
  // [
  //   [282, 34, 53],
  //   [189, 51, 66],
  // ],
  [
    [318, 35, 92],
    [54, 92, 100],
  ],
  [
    [196, 61, 82],
    [330, 55, 60],
  ],
  [
    [196, 61, 82],
    [288, 37, 60],
  ],
  [
    [64, 74, 59],
    [360, 43, 56],
  ],
  [
    [360, 28, 81],
    [171, 55, 39],
  ],
  // [
  //   [175, 56, 42],
  //   [331, 47, 28],
  // ],
  // [
  //   [144, 39, 33],
  //   [30, 54, 70],
  // ],
  [
    [345, 80, 85],
    [345, 29, 90],
  ],
];

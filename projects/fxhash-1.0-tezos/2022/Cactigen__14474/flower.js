let ml = 0;
function flower(a, b, s = 30, n = 1) {
  let center = createVector(a, b);
  ml = s;
  let r = s;
  let gp = [];
  let rag = random(TAU);
  let rgh = 6;
  let bgh = 8;
  for (let i = 0; i < n; i++) {
    for (let ang = 0; ang < TAU; ang += TAU / 12) {
      let x = center.x + r * cos(ang);
      let y = center.y + r * sin(ang);
      for (let j = 0; j < 2; j++) {
        let anch1x;
        let anch1y;
        if (j % 2 == 0) {
          anch1x = center.x + (r / 2) * cos(ang - 0.5);
          anch1y = center.y + (r / 2) * sin(ang - 0.5);
        } else {
          anch1x = center.x + (r / 2) * cos(ang + 0.5);
          anch1y = center.y + (r / 2) * sin(ang + 0.5);
        }
        let a = hcf(center.x, center.y);
        let b = hcf(anch1x, anch1y);
        let c = hcf(x, y);
        gp.push({
          a,
          b,
          c,
        });
      }
    }
    rag += random(0.1, 0.3);
  }
  return gp;
}

function hcf(a, b) {
  return createVector(a, b);
}
function df(list, dir) {
  let h = list;
  let rd = [];
  let ld = [];
  let ud = [];
  let dd = [];
  let incX = ml * 0.4;
  let decX = ml * 0.2;
  rd.push(0, 1, 2, 3, 4, 5, 20, 21, 22, 23);
  ld.push(8, 9, 10, 11, 12, 13, 14, 15, 16, 17);
  ud.push(14, 15, 16, 17, 18, 19, 20, 21, 22, 23);
  dd.push(2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

  if (dir == "l") {
    for (let i = 0; i < ld.length; i++) {
      let n = ld[i];
      h[n].b.x += incX / 2.5;
      h[n].c.x += incX;
    }
    for (let i = 0; i < rd.length; i++) {
      let n = rd[i];
      h[n].b.x -= decX / 2;
      h[n].c.x -= decX;
    }
  }
  if (dir == "r") {
    for (let i = 0; i < rd.length; i++) {
      let n = rd[i];
      h[n].b.x -= incX / 2.5;
      h[n].c.x -= incX;
    }
    for (let i = 0; i < ld.length; i++) {
      let n = ld[i];
      h[n].b.x += decX / 2;
      h[n].c.x += decX;
    }
  }
  if (dir == "u") {
    for (let i = 0; i < ud.length; i++) {
      let n = ud[i];
      h[n].b.y += incX / 2.5;
      h[n].c.y += incX;
    }
    for (let i = 0; i < dd.length; i++) {
      let n = dd[i];
      h[n].b.y -= decX / 2;
      h[n].c.y -= decX;
    }
  }

  return h;
}
function nmid(a, b, s, n = 4) {
  let posFl = circFlo(a, b, s, flr(n, n + 1));
  let glk = [];
  let cl = flcl[cff];
  for (let i = 0; i < posFl.length; i++) {
    let [x, y, s] = posFl[i];
    glk.push(df(flower(x, y, s, 1), random(["u", "l", "r", "n"])));
  }
  let gn = [];
  let tempgn = [];
  for (let kl of glk) {
    let rnw = [];
    for (let i = 0; i < kl.length; i++) {
      let e = kl[i];
      let { a, b, c } = e;
      rnw.push(nmb(a, b, c));
    }
    gn.push(rnw);
  }
  for (let i = 0; i < gn.length; i++) {
    let e = gn[i];
    let e1 = gn[i];
    tempgn.push(e1.concat(revArr(e)));
  }
  strokeWeight(0.2);
  stroke(0, 0, 0, 100);
  for (let i = 0; i < tempgn.length; i++) {
    let e = tempgn[i];

    for (let j = 0; j < e.length; j++) {
      let re = e[j];
      beginShape();
      for (let hn = 0; hn < re.length; hn++) {
        if (random(1) > 0.5) {
          fill(cl[0]);
        } else {
          fill(cl[1]);
        }
        let fl = re[hn];
        vertex(fl.x, fl.y);
      }
      endShape();
    }
  }
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

let flcl = [
  [
    [337, 11, 100],
    [345, 25, 100],
  ],

  [
    [200, 20, 95],
    [230, 35, 100],
  ],

  [
    [300, 45, 62],
    [310, 70, 34],
  ],

  [
    [285, 13, 100],
    [260, 25, 93],
  ],

  [
    [360, 25, 100],
    [350, 44, 87],
  ],

  [
    [45, 71, 96],
    [40, 90, 92],
  ],
  [
    [345, 29, 90],
    [345, 56, 82],
  ],
  [
    [256, 45, 85],
    [255, 39, 88],
  ],
];

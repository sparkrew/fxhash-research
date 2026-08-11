let nmmm, nmmmg;

function desert(a, b) {
  if (desT == "day") {
    sDay(a, b);
    fmfu(a, b);
  } else if (desT == "night") {
    night(a, b);
    fmfu(a, b);
  } else if (desT == "solid") {
    backA(a, b);
  }

  for (let i = 0; i < 200000; i++) {
    noStroke();
    fill(0, 0, 83, 20);
    ellipse(random(a), random(b), 0.5, 1);
  }
}
function whd2(a, b) {
  let la = 0 - a / 2;
  let ra = a + a / 2;
  let bm = b * 0.7;

  nmmm = ra;
  nmmmg = bm;
  let d = flr(12, 18);
  let inc = ((ra - la) / d) * 2;
  let r = [];
  r.push(hc(la, b));
  for (let i = la; i <= ra; i += inc) {
    let x = i;
    let y;
    if (random(1) > 0.5) {
      y = bm + a * 0.002 * noise(millis(), millis());
    } else {
      y = bm - a * 0.002 * noise(millis(), millis());
    }
    r.push(hc(x, y));
  }
  r.push(hc(ra, b));
  r.push(hc(la, b));
  return r;
}
function whd(a, b) {
  let r = [];
  let x = 0;
  let y = b * 0.73;
  let x2 = a;
  let y2 = y;
  r.push(hc(x, b));
  for (let t = 0; t < 1.0001; t += 0.02) {
    let x3 = lerp(x, x2, t);
    let y3 = lerp(y, y2, t) * noise(t);
    r.push(hc(x3, y3));
  }
  r.push(hc(x2, b));
  r.push(hc(a, b));
  return r;
}

function mfu(a, b) {
  let det = whd(a, b);
  let r = [];
  for (let i = 1; i < det.length - 1; i++) {
    let c = det[i - 1];
    let d = det[i];
    let h = d.x - c.x;
    let anch = ap(c, random(PI + HALF_PI, TAU), random(h));
    for (let t = 0; t < 1.0001; t += 0.07) {
      let g = cu(c, anch, d, t);
      r.push(g);
    }
  }
  return r;
}
function fmfu(a, b) {
  let r = whd2(a, b);
  wave(a, b * 0.48, b);
}
function cu(a, b, c, t) {
  let x1 = lerp(a.x, b.x, t);
  let y1 = lerp(a.y, b.y, t);
  let x2 = lerp(b.x, c.x, t);
  let y2 = lerp(b.y, c.y, t);
  let x = lerp(x1, x2, t);
  let y = lerp(y1, y2, t);
  return createVector(x, y);
}

function night(a, b) {
  let nColor = random(nightColors);
  noStroke();
  gradient(
    a / 2,
    0,
    a / 2,
    b * 0.8,
    color(nColor[0]),
    color(nColor[1]),
    color(nColor[2])
  );
  rect(0, 0, a, b);
  let starC = flr(2000, 5000);
  for (let i = 0; i < starC; i++) {
    noStroke();
    if (random(1) > 0.3) {
      fill(173, 216, 230);
    } else {
      fill(0, 0, 100, 100);
    }
    ellipse(random(a), random(b), random(2), random(4));
  }
}
function sDay(a, b) {
  let sColor = random(skyColor);
  noStroke();
  gradient(
    a / 2,
    0,
    a / 2,
    b * 0.8,
    color(sColor[0]),
    color(sColor[1]),
    color(sColor[2])
  );
  rect(0, 0, a, b);
}

function backA(w, h) {
  let chcl = random(bgrec);
  let margW = w * 0.02;
  let margH = h * 0.02;
  let margWend = w - margW * 2;
  let margHend = h - margH * 2;
  let rect1h = margHend * 0.5;
  noStroke();
  fill(0, 0, 100, 100);
  rect(0, 0, w, h);
  fill(chcl[0]);
  rect(margW, margH, margWend, margHend * 0.5);
  fill(chcl[1]);
  rect(margW, rect1h, margWend, h * 0.25);
  fill(chcl[2]);
  rect(margW, rect1h + h * 0.25, margWend, h * 0.25);
}
function wave(a, bm, b) {
  let r = a * 0.03;
  let hke = [];
  let lw = -a;
  let hw = a * 2;
  let inc = a * 0.005;
  let jinc = b - bm;
  //
  let nmb = flr(3, 8);
  let lmn = divvy(a, nmb, a * 0.1);
  let pvm = [];
  for (let i = 1; i < lmn.length; i++) {}
  //
  for (let i = hw; i > lw; i -= inc) {
    let hki = [];
    for (let j = 1; j < 5; j++) {
      let x1 = i - inc * 0.25 * j * noise(millis());
      let y1 = b + b * 0.082 * noise(millis());
      let x2 = x1;
      let y2 = bm + bm * 0.3;
      hki.push([hc(x1, y1), hc(x2, y2)]);
    }
    hke.push(hki);
  }
  let cl = random(desertColor);

  let hikes = [];
  let hn = flr(2, 3);
  for (let i = 1; i < hn + 1; i++) {
    hikes.push(
      hills(a, b, i == 1 ? bm : bm + bm * random(0.25, 0.33), (0.014 * i) / 8)
    );
  }
  for (let i = 0; i < hikes.length; i++) {
    let el = hikes[i];
    let counter = 0;
    noFill();
    let flth = flr(300, 500);
    let buffind = 25 * (i == 0 ? 1 : i + 1);
    for (let o of el) {
      if (buffind > 100) {
        buffind = 100;
      }
      let [a, b] = o;
      beginShape();
      stroke(
        cl[counter][0],
        cl[counter][1],
        i == 0 ? cl[counter][2] * 0.6 : cl[counter][2] * 0.83,
        i == 0 ? 65 : 75
      );
      strokeWeight(inc * 0.9);
      counter++;
      let ang = random(TAU);
      let xoff = 0;
      for (let t = 0; t < 1.00001; t += 0.002) {
        let x = lerp(a.x, b.x, t) + flth * noise(t, xoff, t);
        let y = lerp(a.y, b.y, t);
        vertex(x, y);
      }
      endShape();
      xoff += 0.002;
      if (counter == 4) {
        counter = 0;
      }
    }
  }
}
function hills(a, b, bm, tres) {
  let mln = [];
  let mls = [];
  let rsl = [];
  let parts = flr(5, 8);
  let divis = divvy(a + a * 0.9, parts, a * 0.1);
  mln.push(-a * 0.9);
  for (let i = 0; i < divis.length; i++) {
    mln.push(mln[i] + divis[i]);
  }
  for (let i = 0; i < mln.length; i++) {
    let el = mln[i];
    let y = bm + random(b * 0.06, b * 0.11);
    point(el, y);
    mls.push([el, y, b]);
  }

  for (let i = 1; i < mls.length; i++) {
    let [x, y] = mls[i - 1];
    let [x2, y2] = mls[i];
    let anchx = lerp(x, x2, random(0.5, 1));
    let anchy = lerp(y, y2, random(0, 5.1));
    for (let t = 0; t < 1.00001; t += tres) {
      let tmx = lerp(x, anchx, t);
      let tmy = lerp(y, anchy, t);
      let jmx = lerp(anchx, x2, t);
      let jmy = lerp(anchy, y2, t);
      let jx = lerp(tmx, jmx, t);
      let jy = lerp(tmy, jmy, t);
      let jx2 = jx;
      let jy2 = b + b * 0.5;
      rsl.push([hc(jx, jy), hc(jx2, jy2)]);
    }
  }

  return rsl;
}
function newWave(a, b, bm) {
  let r = a * 0.03;
  let hke = [];
  let lw = 0;
  let hw = a;
  let inc = flr(10, 30);
  let qde = [];
  for (let i = lw; i < hw; i += inc) {
    for (let j = bm; j < b; j += inc) {
      qde.push(
        points(
          i,
          j,
          random(a * 0.05, a * 0.08),
          random(b * 0.02, b * 0.03),
          inc
        )
      );
    }
  }

  let rbn = conArr(qde, inc);
  for (let i of rbn) {
    beginShape();
    for (let p of i) {
      curveVertex(p[0], p[1]);
    }
    endShape();
  }
}
function gradient(x, y, x2, y2, pColor, sColor, mColor) {
  let dr = drawingContext.createLinearGradient(x, y, x2, y2);
  dr.addColorStop(0, pColor);
  if (mColor) {
    dr.addColorStop(0.5, mColor);
  } else {
  }
  dr.addColorStop(1, sColor);
  drawingContext.fillStyle = dr;
}

function points(x = 300, y = 500, a = 100, b = 50, c = 20) {
  let poi = [];
  let dx = 0;
  let dy = 0;
  let nx = x;
  let ny = y;
  poi.push([nx, ny]);
  for (let i = 0; i < c; i++) {
    if (i < c / 2) {
      if (i % 2 == 0) {
        dx = nx + random(b / 3);
        dy = ny + random(b / 2);
      } else {
        dx = nx + random(b / 3);
        dy = ny + random(b / 2);
      }
    }
    nx = dx;
    ny = dy;
    poi.push([dx, dy]);
  }
  return poi;
}

function conArr(l, inc) {
  let nm1 = [];
  let ba = [];
  for (let p of l) {
    let lor = [];
    for (let o of p) {
      lor.push([o[0] - inc / 12, o[1]]);
    }
    nm1.push(lor);
  }

  for (let i = 0; i < l.length; i++) {
    let ec = l[i];
    let gn = nm1[i];
    let redc = ec.concat(revArr(gn));
    ba.push(redc);
  }

  return ba;
}
let desertColor = [
  [
    [43, 95, 47],
    [43, 73, 66],
    [40, 53, 79],
    [45, 42, 86],
  ],

  [
    [50, 66, 49],
    [49, 53, 62],
    [47, 50, 79],
    [47, 45, 87],
  ],

  [
    [25, 71, 32],
    [52, 63, 54],
    [51, 53, 71],
    [51, 38, 87],
  ],

  [
    [34, 68, 39],
    [34, 56, 53],
    [32, 43, 68],
    [32, 50, 36],
  ],

  [
    [40, 56, 24],
    [40, 52, 39],
    [45, 42, 71],
    [45, 30, 84],
  ],
];
let bgrec = [
  [
    [189, 93, 72, 100],
    [177, 51, 26, 100],
    [18, 51, 40, 100],
  ],
  [
    [80, 70, 17, 100],
    [180, 71, 33, 100],
    [274, 62, 42, 100],
  ],
  [
    [17, 62, 78, 100],
    [149, 38, 61, 100],
    [17, 14, 27, 100],
  ],
  [
    [201, 76, 85],
    [340, 34, 93],
    [180, 60, 93],
  ],
  [
    [340, 62, 93],
    [209, 62, 93],
    [209, 23, 66],
  ],
  [
    [221, 95, 38],
    [332, 31, 82],
    [186, 18, 89],
  ],

  [
    [308, 35, 57],
    [335, 65, 49],
    [240, 90, 15],
  ],

  [
    [317, 90, 41],
    [202, 78, 61],
    [54, 51, 65],
  ],
  [
    [338, 86, 57],
    [294, 67, 35],
    [190, 82, 55],
  ],
  [
    [270, 90, 28],
    [210, 40, 70],
    [68, 28, 91],
  ],

  [
    [201, 93, 40],
    [181, 49, 66],
    [141, 79, 41],
  ],

  [
    [277, 79, 26],
    [113, 83, 13],
    [68, 70, 50],
  ],
  [
    [308, 28, 90],
    [213, 29, 79],
    [225, 68, 66],
  ],
];

let nightColors = [
  [
    [259, 100, 18],
    [263, 100, 51],
    [337, 45, 16],
  ],
  [
    [247, 57, 18],
    [219, 91, 51],
    [164, 40, 40],
  ],
  [
    [210, 86, 19],
    [230, 85, 49],
    [48, 28, 14],
  ],
  [
    [198, 49, 16],
    [181, 33, 58],
    [288, 33, 21],
  ],
  [
    [260, 98, 16],
    [302, 64, 12],
    [14, 97, 13],
  ],
  [
    [334, 100, 10],
    [270, 62, 19],
    [73, 34, 32],
  ],
  [
    [206, 34, 32],
    [212, 70, 23],
    [343, 35, 26],
  ],
  [
    [170, 98, 10],
    [348, 51, 29],
    [245, 59, 34],
  ],
  [
    [5, 59, 21],
    [219, 44, 27],
    [164, 25, 27],
  ],
  [
    [320, 69, 11],
    [258, 30, 15],
    [214, 80, 20],
  ],
  [
    [190, 66, 44],
    [335, 63, 25],
    [200, 59, 16],
  ],
  [
    [235, 100, 50],
    [220, 70, 51],
    [360, 30, 38],
  ],
  [
    [235, 100, 12],
    [235, 100, 50],
    [290, 37, 35],
  ],
  [
    [217, 71, 25],
    [288, 37, 29],
    [339, 14, 43],
  ],
  [
    [185, 57, 16],
    [275, 58, 18],
    [260, 19, 31],
  ],
  [
    [320, 36, 13],
    [20, 38, 21],
    [193, 42, 28],
  ],
  [
    [207, 58, 35],
    [205, 58, 57],
    [245, 58, 20],
  ],
  [
    [300, 58, 15],
    [190, 58, 34],
    [277, 40, 26],
  ],
];
// [
//   [201, 76, 85],
//   [340, 34, 93],
//   [180, 60, 93],
// ],
//   [
//     [340, 62, 93],
//     [209, 62, 93],
//     [209, 23, 66],
//   ],
//   [
//     [221, 95, 38],
//     [332, 31, 82],
//     [186, 18, 89],
//   ],
//   [
//     [308, 35, 57],
//     [335, 65, 49],
//     [240, 90, 15],
//   ],
//   [
//     [317, 90, 41],
//     [202, 78, 61],
//     [54, 51, 65],
//   ],
//   [
//     [338, 86, 57],
//     [294, 67, 35],
//     [190, 82, 55],
//   ],
//   [
//     [270, 90, 28],
//     [210, 40, 70],
//     [68, 28, 91],
//   ],
//   [
//     [201, 93, 40],
//     [181, 49, 66],
//     [141, 79, 41],
//   ],
//   [
//     [277, 79, 26],
//     [113, 83, 13],
//     [68, 70, 50],
//   ],
//   [
//     [308, 28, 90],
//     [213, 29, 79],
//     [225, 68, 66],
//   ];

let skyColor = [
  [
    [202, 17, 100],
    [205, 42, 97],
    [354, 17, 91],
  ],
  [
    [192, 42, 94],
    [192, 78, 93],
    [151, 18, 87],
  ],
  [
    [201, 78, 93],
    [209, 82, 80],
    [281, 20, 100],
  ],

  [
    [43, 32, 100],
    [174, 22, 100],
    [300, 11, 100],
  ],
  [
    [188, 22, 100],
    [292, 16, 100],
    [141, 13, 100],
  ],

  [
    [217, 63, 91],
    [1, 52, 85],
    [48, 49, 94],
  ],
  [
    [1, 27, 85],
    [1, 48, 87],
    [224, 21, 87],
  ],
  [
    [348, 34, 100],
    [330, 20, 100],
    [230, 20, 86],
  ],

  [
    [68, 15, 90],
    [16, 58, 80],
    [18, 27, 80],
  ],
  [
    [200, 20, 84],
    [210, 46, 84],
    [285, 15, 90],
  ],
  [
    [339, 27, 80],
    [232, 24, 80],
    [54, 28, 73],
  ],
  [
    [0, 75, 36],
    [0, 100, 95],
    [360, 170, 95],
  ],
];

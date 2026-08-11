let r;
let n;
function cirCac(a, b, rad) {
  r = rad;
  n = random(12, 15);
  let vb = flr(3, 7);
  let cn = flr(5, 10);
  for (let i = 0; i < vb; i++) {
    ci(a + r * i, random(b - b * 0.02, b + b * random(0.03, 0.05)));
  }
}

function ci(a, b) {
  let x = a;
  let y = b;
  r = random(r, r * 1.2);
  let hn = r / n;
  let cnm = flr(0, circCol.length);
  fill(circCol[cnm]);
  stroke(255, 2, 98, 80);
  strokeWeight(3);
  line(a, b - r * 0.44, a, b + r * 0.44);
  stroke(255, 2, 98, 80);
  strokeWeight(1);
  let g = [];
  for (let i = 0; i < n; i++) {
    let b = x + (r / 2) * cos(PI / 2);
    let c = y + (r / 2) * sin(PI / 2);
    let mx = x + (r / 2) * cos(PI + HALF_PI);
    let my = y + (r / 2) * sin(PI + HALF_PI);
    let anchlx = x + (r - hn * i) * cos(PI);
    let anchly = y + (r - hn * i) * sin(PI);
    let anchrx = x + (r - hn * i) * cos(TAU);
    let anchry = y + (r - hn * i) * sin(TAU);
    if (i % 2 == 0) {
      beginShape();
      for (let t = 0; t < 1; t += 0.02) {
        let x1 = lerp(b, anchlx, t);
        let y1 = lerp(c, anchly, t);
        let x2 = lerp(anchlx, mx, t);
        let y2 = lerp(anchly, my, t);
        let x = lerp(x1, x2, t);
        let y = lerp(y1, y2, t);
        vertex(x, y);
        g.push([x, y]);
      }
      endShape();
      beginShape();
      for (let t = 0; t < 1; t += 0.02) {
        let x1 = lerp(b, anchrx, t);
        let y1 = lerp(c, anchry, t);
        let x2 = lerp(anchrx, mx, t);
        let y2 = lerp(anchry, my, t);
        let x = lerp(x1, x2, t);
        let y = lerp(y1, y2, t);
        vertex(x, y);
        g.push([x, y]);
      }
      endShape();
    }
  }
  tghnC(g);
}

function tghnC(list) {
  let c = list.length > 0;
  let f = [];
  let ct = floor(random(20, 30));
  let clo = flr(0, circT.length);
  if (c) {
    for (let i = 0; i < list.length; i++) {
      let e = list[i];
      fill(0, 0, 100, 80);
      noStroke();
      if (i % 6 == 0) {
        circle(e[0], e[1], 2);
        for (let j = 0; j < ct; j++) {
          stroke(circT[clo]);
          strokeWeight(random(0.3, 0.4));
          let angle = random(TWO_PI);
          let r = random(2, 4);
          let sx = e[0] + r * cos(angle);
          let sy = e[1] + r * sin(angle);
          line(e[0], e[1], sx, sy);
        }
      }
      if (random(1) > 0.93) {
        f.push([e[0], e[1]]);
      }
    }
  }

  for (let i = 0; i < f.length; i++) {
    let e = f[i];
    if (i % 5 == 0) {
      if (random(1) > 0.6) {
        nmid(e[0], e[1], random(10, 14), 4);
      }
    }
  }
  nmid(list.at(-1)[0], list.at(-1)[1], random(8, 14), 4);
  for (let i = 0; i < 3; i++) {
    nmid(list.at(0)[0], list.at(0)[1], random(8, 14), 4);
  }
}

let circCol = [
  [71, 70, 62],
  [93, 37, 34],
  [78, 79, 42],
  [79, 83, 59],
  [158, 98, 20],
];

let circT = [
  [0, 0, 90],
  [48, 69, 94],
  [176, 9, 71],
  [307, 4, 85],
];

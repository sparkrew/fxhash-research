function fl2(a, b, r) {
  let all = [];
  let gp = [];
  let rag = random(TAU);
  for (let ang = rag; ang < TAU + rag; ang += TAU / 5) {
    r = map(ang, rag, TAU + rag, r * 0.9, r * 1.1);
    let x = a + r * cos(ang);
    let y = b + r * sin(ang) - random(r * 0.05);
    let anchx = 0;
    let anchy = 0;
    let gh = random(0.8, 0.9);
    let dc = 1.68;
    for (let h = 0; h < 2; h++) {
      if (h % 2 == 0) {
        anchx = x + r * 0.7 * cos(ang + dc);
        anchy = y + r * 0.7 * sin(ang + dc);
      } else {
        anchx = x + r * 0.7 * cos(ang - dc);
        anchy = y + r * 0.7 * sin(ang - dc);
      }
      let aa = hc(a, b);
      let bb = hc(anchx, anchy);
      let cc = hc(x, y);
      gp.push({ aa, bb, cc });
    }
  }
  all.push(gp);

  return all;
}
function loiCC(l) {
  let c = color(random(360), random(60), random(100), 100);
  let rgd = flr(0, l.length);
  let cp = l[rgd];
  let cdim = colorAng(cp[0], cp[1], 30);
  let clfp = circFlo(cp[0], cp[1], cp[2], l.length);
  strokeWeight(4);
  gradient(
    cdim[0].x,
    cdim[0].y,
    cdim[1].x,
    cdim[1].y,
    // color(78, 36, 98, 100),
    color(1, 26, 91, 100),
    color(359, 59, 57, 100)
  );
  for (let i = 0; i < clfp.length; i++) {
    let e = clfp[i];
    let ret = fl2(e[0], e[1], random(10, 15));
    let rfg = ret.length;

    stroke(0, 0, 100);
    strokeWeight(0.09);
    for (let i = 0; i < ret.length; i++) {
      let e = ret[i];
      beginShape();
      for (let j = 1; j < e.length; j++) {
        let { aa: fa, bb: fb, cc: fc } = e[j - 1];
        let { aa, bb, cc } = e[j];
        vertex(aa.x, aa.y);
        bezierVertex(bb.x, bb.y, cc.x, cc.y, aa.x, aa.y);
        bezierVertex(fb.x, fb.y, fc.x, fc.y, fa.x, fa.y);
      }
      endShape();
    }
  }
}
function loiC(l) {
  let c = color(random(360), random(60), random(100), 100);
  let rgd = flr(0, l.length);
  let cp = l[rgd];
  let cdim = colorAng(cp[0], cp[1], 30);
  let clfp = circFlo(cp[0], cp[1], cp[2], l.length);
  strokeWeight(4);
  gradient(
    cdim[0].x,
    cdim[0].y,
    cdim[1].x,
    cdim[1].y,
    color(78, 36, 98, 100),
    color(1, 26, 91, 100)
  );

  for (let i = 0; i < clfp.length; i++) {
    let e = clfp[i];
    let ret = fl2(e[0], e[1], random(10, 15));
    stroke(0, 0, 100);
    strokeWeight(0.09);
    for (let j = 0; j < ret.length; j++) {
      let e = ret[j];
      beginShape();
      for (let k = 0; k < e.length; k++) {
        let { aa, bb, cc } = e[k];
        let fmn = anechD(aa, bb, cc);
        for (let h of fmn) {
          vertex(h.x, h.y);
        }
      }
      endShape();
    }
  }
}

function anechD(a, b, c) {
  let ret = [];
  let dir = random(["u", "d", "l", "r"]);
  let incr;
  let nmv = a * 0.02;
  let xoff = 0;
  let yoff = 0;
  for (let t = 0; t < 1.0001; t += 0.02) {
    let x1 = lerp(a.x, b.x, t);
    let y1 = lerp(a.y, b.y, t);
    let xc = lerp(b.x, c.x, t);
    let yc = lerp(b.y, c.y, t);
    let x = lerp(x1, xc, t) + 5 * noise(xoff, yoff);
    let y = lerp(y1, yc, t) + 5 * noise(xoff, yoff);
    ret.push(hc(x, y));
    xoff += 0.002;
    yoff += 0.002;
  }
  return ret;
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

function colorAng(a, b, ra) {
  let r1 = random(TAU);
  let r2 = r1 + PI;
  let p1 = ap(hc(a, b), r1, ra);
  let p2 = ap(hc(a, b), r2, ra);
  return [p1, p2];
}

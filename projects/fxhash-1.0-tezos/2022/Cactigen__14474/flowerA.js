function flta(a, b, r) {
  let all = [];
  let tr = r;
  let gh;
  let dir = random(["l", "r"]);
  let pr = "l";
  for (let j = 0; j < 20; j++) {
    let gp = [];
    for (let ang = 0; ang <= TAU; ang += 0.02) {
      if (pr == "tz") {
        gh = 4;
      } else {
        gh = 1;
      }
      if (dir == "l") {
        if (ang > 3.61 && ang < 6.81) {
          tr = r * 0.41;
          tr -= tr * 0.12;
        } else if (ang > 0.31 && ang < 2.81) {
          tr = r * 0.42;
          tr += tr * 0.2;
        } else {
          tr = r * 0.44;
          tr -= tr * 0.02;
        }
      } else if (dir == "r") {
        if (ang > HALF_PI && ang < PI + HALF_PI) {
          tr = r * 0.7;
          tr -= tr * 0.12;
        } else {
          tr = r * 0.55;
        }
      }
      let x = a + tr * cos(ang);
      let y = b + tr * sin(ang) - random(r * 0.05);
      let anchx = 0;
      let anchy = 0;
      for (let h = 0; h < 2; h++) {
        if (h % 2 == 0) {
          let gh = random(0.3, 0.6);
          anchx = x + (tr / gh) * cos(ang + random(4, 5));
          anchy = y + (tr / gh) * sin(ang + random(4, 5));
        } else {
          anchx = x + (tr / gh) * cos(ang - random(2, 3));
          anchy = y + (tr / gh) * sin(ang - random(2, 3));
        }
      }
      let aa = hc(a, b);
      let bb = hc(anchx, anchy);
      let cc = hc(x, y);
      gp.push({ aa, bb, cc });
    }
    r -= r / 4;
    all.push(gp);
  }

  return all;
}
function loiA(x, y, r) {
  let ret = flta(x, y, r);
  let rfg = ret.length;
  for (let i = 0; i < ret.length; i++) {
    let e = ret[i];
    let t = map(i, 0, rfg, 70, 100);
    if (i > 0 && i % 2 == 0) {
      fill(565, 68, 87, 100);
    } else {
      fill(30, 25, 99, 100);
    }
    stroke(359, 60, 78, 40);
    strokeWeight(0.06);
    beginShape();
    for (let j = 1; j < e.length; j++) {
      let { aa: fa, bb: fb, cc: fc } = e[j - 1];
      let { aa, bb, cc } = e[j];
      vertex(aa.x, aa.y);
      bezierVertex(bb.x, bb.y, cc.x, cc.y, aa.x, aa.y);
      bezierVertex(fb.x, fb.y, fc.x, fc.y, aa.x, aa.y);
    }
    endShape();
  }
}

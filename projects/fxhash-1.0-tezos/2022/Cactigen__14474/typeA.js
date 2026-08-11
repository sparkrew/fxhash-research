function tp() {
  let bgs = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let fgs = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let bg = random(bgs);
  let fg = random(fgs);
}

function nmg(a, b, nc) {
  let ret = [];
  let hl = b * 0.9;
  let hh = b * 0.27;
  let wl = a * 0.1;
  let wh = a * random(0.5, 0.6);
  let mref = (wh - wl) / 2;
  let cen = random(a * 0.3, wh);
  lcx = mref;
  lcy = hl;
  let diswlwh = (wh - wl) * random(0.18, 0.25);
  let distTest = [];
  let angs = angMn(nc);
  let bhn = random(hl - hl / 4, hh + hh * 0.4);
  let min = hl - hl / 4;
  let max = hl - hl * 0.68;
  let lastP = wl;
  for (let i = 0; i < nc; i++) {
    let hfb =
      i == 0
        ? bhn
        : random(1) > 0.5
        ? bhn < max
          ? bhn + bhn * 0.05
          : bhn - bhn * 0.08
        : bhn <= min
        ? bhn + bhn * 0.13
        : bhn - bhn * 0.2;
    let rg = cen + random(mref * 0.4, mref * 0.65) * cos(angs[i]);
    lastP = rg;
    distTest.push([rg, hfb]);
    bhn = hfb;
  }
  lastP = wl + diswlwh;
  let delta2 = (wh - wl) * 0.2;
  let stx, sty, edx, edy;
  for (let i = 0; i < nc; i++) {
    let e = distTest[i];
    stx = e[0];
    sty = hl;
    edx = random(1) > 0.5 ? stx + stx * 0.6 : stx - stx * 0.6;
    edy = e[1];
    let str = hc(stx, sty);
    let edr = hc(edx, edy);
    ret.push({
      str,
      edr,
    });
  }
  stx = cen;
  sty = hl;
  edx = stx;
  edy = max;
  let indTemp = flr(0, ret.length);
  ret.splice(indTemp, 0, { str: hc(stx, sty), edr: hc(edx, edy) });
  for (let i = 0; i < ret.length; i++) {
    let { str, edr } = ret[i];
    diswlwh = (wh - wl) * random(0.11, 0.14);
    let stx = str.x + diswlwh;
    let sty = str.y;
    let edx = edr.x + diswlwh;
    if (i == indTemp) {
      stx = stx + diswlwh * 0.2;
      edx = edx + diswlwh * 0.2;
    }
    let edy = edr.y;
    let strn = hc(stx, sty);
    let edrn = hc(edx, edy);
    ret[i] = { str, edr, strn, edrn };
  }
  return ret;
}

function nmgd2(obj, nc) {
  let ret = [];
  let { str, edr, strn, edrn } = obj;
  let dSt = (edrn.x - edr.x) / nc;
  let gnm = dSt * 0.3;
  for (let j = 0; j < nc; j++) {
    let iStrx = str.x + dSt * j;
    let iStry = str.y;
    let iEdx = edr.x + dSt * j;
    let iEdy = edr.y;
    let iStnx = iStrx + dSt;
    let iStny = iStry;
    let iEdnx = iEdx + dSt;
    let iEdny = iEdy;
    let mid = lerp(iEdx, iEdnx, 0.5);
    let mStrx = iStnx - (iStnx - iStrx) / 1.5;
    let mStry = iStry;
    let mStnx = mid - 1.5;
    let mStny = iEdny;
    let mEstx = mStrx + 3;
    let mEsty = mStry;
    let mEdnx = mid + 1.5;
    let mEdny = mStny;
    let iStr = hc(iStrx, iStry);
    let iEdr = hc(iEdx, iEdy);
    let iStrn = hc(iStnx, iStny);
    let iEdrn = hc(iEdnx, iEdny);
    let mStr = hc(mStrx, mStry);
    let mStrn = hc(mStnx, mStny);
    let mEdn = hc(mEstx, mEsty);
    let mEdrn = hc(mEdnx, mEdny);
    ret.push({ iStr, iEdr, iStrn, iEdrn, mStr, mStrn, mEdn, mEdrn });
  }
  return ret;
}
function coer(nc) {
  let all = [];
  let r = nmg(width, height, nc);
  let mmp = [];
  for (let i = 0; i < r.length; i++) {
    fill(147, 90, 56, 100);
    let { str, edr, strn, edrn } = r[i];
    all.push(bez(str, edr, "o"));
    all.push(bez(strn, edrn, "o").reverse());
    all.push(str);
    let nnc = flr(5, 12);
    let inners = nmgd2({ str, edr, strn, edrn }, nnc);
    let inps = [];
    let inpsT = [];
    let mid = lerp(str.x, edrn.x, 0.5);
    for (let j = 0; j < inners.length; j++) {
      let { iStr, iEdr, iStrn, iEdrn, mStr, mStrn, mEdn, mEdrn } = inners[j];
      inps.push(bez(iStr, iEdr, "i", mid));
      inps.push(bez(iStrn, iEdrn, "i", mid).reverse());
      inps.push(iStr);
      inpsT.push(bez(mStr, mStrn, "t", mid));
      inpsT.push(bez(mEdn, mEdrn, "t", mid).reverse());
      inpsT.push(mStr);
    }
    all.push({ inps, inpsT });
  }
  let r2 = [];
  let tfl = random(1);
  for (let i = 0; i < nc + 1; i++) {
    r2[i] = all.splice(0, 4);
  }
  for (let i = 0; i < r2.length; i++) {
    let e = r2[i].flat(1000);
    let { inps, inpsT } = e.at(-1);
    let r3 = [];
    let r4 = [];
    for (let j = 0; j < inps.length + 11; j++) {
      r3[j] = inps.splice(0, 3);
    }
    let midf = 1;
    let nbm = 1;
    for (let k = 0; k < r3.length; k++) {
      midf = map(k, 0, r3.length, 0.99, 0);
      let e = r3[k].flat(10000);
      pth(e, "o");
      tghn(e, midf);
      nbm++;
    }
    for (let j = 0; j < inpsT.length + 12; j++) {
      r4[j] = inpsT.splice(0, 3);
    }

    for (let k = 0; k < r4.length; k++) {
      let e = r4[k].flat(10000);
      let gnm = [];
      for (let m = 0; m < e.length; m++) {
        gnm.push(e[m].y);
      }
      let ref = gnm.indexOf(min(gnm));
      let ref2 = gnm.indexOf(max(gnm));
      if (ref > 1) {
        if (tfl > 0.5) {
          dirFlD(
            hc(e[ref].x, e[ref].y),
            random(8, 10),
            random(["u", "r", "l", "n"])
          );
          dirFlD(
            hc(e[0].x, e[0].y),
            random(8, 10),
            random(["u", "r", "l", "n"])
          );
        } else {
          dirFlB(
            hc(e[ref].x, e[ref].y),
            random(8, 10),
            random(["u", "r", "l", "n"])
          );
          dirFlB(
            hc(e[0].x, e[0].y),
            random(8, 10),
            random(["u", "r", "l", "n"])
          );
        }
      }
      if (ref2 > 1) {
        for (let i = 0; i < 3; i++) {
          if (tfl > 0.5) {
            dirFlD(
              hc(e[ref].x, e[ref].y),
              random(8, 10),
              random(["u", "r", "l", "n"])
            );
            dirFlD(
              hc(e[0].x, e[0].y),
              random(4, 6),
              random(["u", "r", "l", "n"])
            );
          } else {
            dirFlB(
              hc(e[ref].x, e[ref].y),
              random(8, 10),
              random(["u", "r", "l", "n"])
            );
            dirFlB(
              hc(e[0].x, e[0].y),
              random(6, 8),
              random(["u", "r", "l", "n"])
            );
          }
        }
      }
    }
  }

  cirCac(lcx, lcy, width * 0.1);
}
function bez(a, b, io, mid) {
  let list = [];
  let stp = a;
  let edp = b;
  let allp = steddev(stp, edp, io, mid);
  for (let i = 0; i < allp.length; i++) {
    let { str, anchP, edr } = allp[i];
    for (let t = 0; t < 1; t += 0.02) {
      let [x, y] = quads(str, anchP, edr, t);
      list.push(hc(x, y));
    }
  }
  return list;
}
function quads(a, b, c, t) {
  let abx = lerp(a.x, b.x, t);
  let aby = lerp(a.y, b.y, t);
  let bcx = lerp(b.x, c.x, t);
  let bcy = lerp(b.y, c.y, t);
  let x, y;
  if (random(1) > 0.6) {
    x = lerp(abx, bcx, t);
    y = lerp(aby, bcy, t);
  } else {
    x = lerp(abx, bcx, t) - noise(t);
    y = lerp(aby, bcy, t) - noise(t);
  }
  let result = [x, y];
  return result;
}
function steddev(st, ed, io, mid, n = 3) {
  let temp = [];
  let ar = [];
  temp.push([st.x, st.y]);
  let x = st.x;
  let y = st.y - (st.y - ed.y);
  temp.push([x, y]);
  temp.push([ed.x, ed.y]);
  let [xm, ym] = temp[0];
  let [x2, y2] = temp[1];
  let str = hc(xm, ym);
  let edr = hc(x2, y2);
  let anchP;
  if (io == "i") {
    anchP = anchIn(str, edr, mid);
  } else if (io == "t") {
    anchP = anchT(str, edr);
  } else {
    anchP = anch(str, edr);
  }
  ar.push({
    str,
    anchP,
    edr,
  });
  return ar;
}
function tghn(list, mid, wfg = false, rnc = [2, 4], wr = [0.8, 1]) {
  let c = list.length > 0;
  let l = wfg ? list : list.splice(51, 100);
  let ct = floor(random(5, 9));
  if (c) {
    beginShape();
    noFill();
    for (let i = 0; i < l.length; i++) {
      let spx = l[i].x - (l[i].x - list[i].x) * mid;
      let gt = l[i].x - list[i].x;
      gt = constrain(gt, 0.4, 2);
      stroke(0, 0, 100, 80);
      strokeWeight(gt * 1.4);
      vertex(spx, l[i].y);
      if (random(1) > 0.8) {
        stroke(0, 0, 0);
        strokeWeight(gt / 3);
      }
    }
    endShape();
    for (let i = 0; i < l.length; i++) {
      let spx = l[i].x - (l[i].x - list[i].x) * mid;
      let gt = (l[i].x - list[i].x) * 0.3;
      fill(0, 0, random(50, 100), 100);
      for (let j = 0; j < ct; j++) {
        ellipse(spx, l[i].y, gt / 6, gt * 1.5);
        stroke(0, 0, 100, 30);
        strokeWeight(random(wr[0], wr[1]));
        let angle = random(TWO_PI);
        let r = random(rnc[0], rnc[1]);
        let sx = spx + r * cos(angle);
        let sy = l[i].y + r * sin(angle);
        line(spx, l[i].y, sx, sy);
      }
    }
  }
}
function pth(list, tp) {
  let str, f;
  if (tp == "t") {
    noStroke();
    fill(147, 21, 66, 100);
  } else if (tp == "o") {
    stroke(0, 0, 0, 100);
    strokeWeight(1);
    gradient(
      0,
      0,
      width,
      height,
      color(grcol[cactcl][2]),
      color(grcol[cactcl][1]),
      color(grcol[cactcl][0])
    );
  } else {
    noStroke();
    fill(130, 93, 64, 100);
  }
  beginShape();
  for (let h = 0; h < list.length; h++) {
    let o = list[h];
    vertex(o.x, o.y);
  }
  endShape();
}
function anch(st, ed, tp = "") {
  let x, y;
  if (tp == "branch") {
    x = st.x + random(2);
    y = ed.y + (st.y - ed.y) / random(5, 7);
  } else {
    if (random(1) > 0.5) {
      x = st.x + random(4, 5);
    } else {
      x = st.x - random(4, 5);
    }
    y = ed.y + (st.y - ed.y) / 2;
  }
  let ancP = hc(x, y);
  return ancP;
}

function anchIn(st, ed, mid) {
  let x, y;
  let d = dist(st.x, st.y, mid, st.y) * 0.18;
  if (st.x < mid) {
    x = st.x - d;
  } else {
    x = st.x + d;
  }
  y = ed.y + (st.y - ed.y) / random(3, 5);

  let ancP = hc(x, y);
  return ancP;
}
function anchT(st, ed) {
  let x, y;
  x = st.x;
  y = ed.y + (st.y - ed.y) / random(3, 5);
  return hc(x, y);
}
function hc(a, b) {
  return createVector(a, b);
}

function angMn(nc) {
  let angs = [random(TAU)];
  let pass = 0;
  while (angs.length < nc) {
    let ang = random(TAU);
    let cr = true;
    if (angs.includes(ang)) {
      cr = false;
    }
    if (cr) angs.push(ang);
    if (pass > 100) {
      break;
    }
    pass++;
  }
  return angs;
}

function shadow(x, y, bl, cl) {
  drawingContext.shadowOffsetX = x;
  drawingContext.shadowOffsetY = y;
  drawingContext.shadowBlur = bl;
  drawingContext.shadowColor = cl;
}

function perReq(a, b, c) {
  let d = abs((a - b) / c);
  d = constrain(d, 0.1, 0.9);
  return d;
}

let grcol = [
  [
    [140, 43, 63],
    [140, 35, 75],
    [140, 26, 80],
  ],

  [
    [90, 47, 73],
    [90, 51, 56],
    [90, 66, 39],
  ],

  [
    [85, 40, 72],
    [85, 50, 58],
    [85, 65, 48],
  ],

  [
    [100, 47, 52],
    [100, 55, 41],
    [100, 63, 24],
  ],

  [
    [115, 47, 40],
    [115, 63, 25],
    [115, 68, 16],
  ],

  [
    [123, 54, 28],
    [123, 65, 20],
    [122, 75, 10],
  ],

  [
    [130, 66, 28],
    [130, 79, 20],
    [130, 83, 11],
  ],

  [
    [153, 84, 38],
    [153, 82, 27],
    [153, 71, 13],
  ],
];

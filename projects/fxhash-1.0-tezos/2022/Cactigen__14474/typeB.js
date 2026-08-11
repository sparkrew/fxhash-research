let midMg = [];
let midNg = [];
let arx, ary;
let mCont = [];
let bCont = [];
let cCont = [];
function defi(a = [20, 30], b = [8, 10], c = [1, 2]) {
  let mb = [];
  let d = {};
  let brs = flr(a[0], a[1]);
  for (let i = 0; i < brs; i++) {
    let seg = flr(b[0], b[1]);
    let sec = 2;
    let br = random(c);
    d = { seg, sec, br };
    mb.push(d);
  }
  return mb;
}
function defiB(a = [5, 8]) {
  let d = {};
  let seg = flr(a[0], a[1]);
  let sec = 2;
  d = { seg, sec };
  return d;
}
function seCr(a, b) {
  let hl = b * random(0.8, 0.9);
  let hh = b * random(0.28, 0.36);
  let wl = a * random(0.4, 0.6);
  let wh = a * random(0.7, 0.8);
  let rh = hh;
  let brs = defi();
  strokeWeight(0.25);
  stroke(255);
  let { seg, sec, br } = brs[0];
  let bfv = nsp({ wl, wh, hl, hh }, { seg, sec, br }, "m");
  mCont = bfv;
  cont(mCont);
  for (let i = 1; i < brs.length; i++) {
    let { seg, sec, br } = brs[i];
    let cfv = nsp({ wl, wh, hl, hh }, { seg, sec, br }, "i");
    bCont = cfv;
    cont(bCont);
  }
  let brC = flr(9, 22);
  for (let j = 0; j < 1; j++) {
    let { seg, sec } = defiB();
    for (let k = 0; k < brC; k++) {
      let { sts: a, eds: b } = midMg[k];
      let { sts: c, eds: d } = midNg[k];
      let wl = a.x;
      let wh = c.x;
      let hl = mx([a.y, b.y, c.y, d.y]);
      let hh = rh - rh * 0.22;
      let dfv = nsp({ wl, wh, hl, hh }, { seg, sec }, "i");
      cCont = dfv;
      cont(cCont);
    }
  }
  cirCac(wl, hl, a * 0.1);
}
function nsp(a = {}, b = {}, t = "") {
  let { wl, wh, hl, hh } = a;
  let { sec, seg, br } = b;
  let { str, edr, strn, edrn, ang, dir } = se(wl, wh, hl, hh, t);
  let mg = section2(str.x, str.y, edr.x, edr.y, ang, seg, dir);
  let ng = section2(strn.x, strn.y, edrn.x, edrn.y, ang, seg, dir);
  mep(mg, ng);
  let bg = seb(str, edr, strn, edrn, sec);
  let midFr;
  for (let i = 0; i < 3; i++) {
    midFr = flr(1, mg.length - 1);
    midMg.push(mg[midFr]);
    midNg.push(ng[midFr]);
  }
  let stList = [];
  let edList = [];
  let ret = [];
  for (let i = 0; i < mg.length; i++) {
    let { sts, eds, h } = mg[i];
    let anch = anch2(sts, ang, h, "l", [0.1, 0.35]);
    for (let t = 0; t < 1.00001; t += 0.03) {
      stList.push(quads(sts, anch, eds, t));
    }
  }
  for (let i = 0; i < ng.length; i++) {
    let { sts, eds, h } = ng[i];
    let anch = anch2(sts, ang, h, "r", [0.1, 0.35]);
    for (let t = 0; t < 1.00001; t += 0.03) {
      edList.push(quads(sts, anch, eds, t));
    }
  }

  mkl(stList, edList);
  let bglist = [];
  for (let b = 0; b < bg.length; b++) {
    let { stm, edm } = bg[b];
    let temp = [];
    let test = section2(stm.x, stm.y, edm.x, edm.y, ang, seg, dir);
    let tb = b % 2 == 0 ? "l" : "r";
    for (let i = 0; i < test.length; i++) {
      let { sts, eds, h } = test[i];
      let anch = anch2(sts, ang, h, tb, [0.1, 0.12]);
      for (let t = 0; t < 1.00001; t += 0.03) {
        temp.push(quads(sts, anch, eds, t));
      }
    }
    bglist.push(temp);
  }
  for (let i = 0; i < bglist.length; i++) {
    let e = bglist[i];
    noFill();
    ver(e);
  }
  ret.push([stList, edList, bglist]);
  return ret;
}
function ver(list) {
  beginShape();
  for (let i = 0; i < list.length; i++) {
    let [x, y] = list[i];
    vertex(x, y);
  }
  endShape();
}
function mep(l1, l2) {
  let { eds: a, h: ch } = l1.at(-1);
  let { eds: b, h: bh } = l2.at(-1);
  let x = lerp(a.x, b.x, 0.5);
  let y = lerp(a.y, b.y, 0.5) - ch / 4;
  let hn = hc(x, y);
  l1.push({ sts: a, eds: hn, h: ch / 2 });
  l2.push({ sts: b, eds: hn, h: bh / 2 });
}

function mkl(a, b) {
  fill("#07513c");
  let m = [];
  let c = b.reverse();
  for (let i = 0; i < a.length; i++) {
    m.push(a[i]);
  }
  for (let i = 0; i < c.length; i++) {
    m.push(c[i]);
  }
  m.push(a[0]);
  ver(m);
}
function se(wl, wh, hl, hh, t) {
  let aria = wl + (wh - wl) * random(0.5, 0.6);
  let midar = lerp(wl, aria, 0.5);
  let ra = angle("r");
  let la = angle("l");
  let h = (hl - hh) * random(0.6, 0.95);
  let hm = (hl - hh) * random(0.9, 0.95);
  let ph = 11;
  let stx, sty, edx, edy, stex, stey, edex, edey, poi, poie;
  stx = random(wl, aria);
  sty = hl;
  let ang = 0;
  let dir;
  if (t == "m") {
    ang = random(4.61, 4.76);
    poi = ap(hc(stx, sty), ang, hm * 1.2);
    edx = poi.x;
    edy = poi.y;
    stex = stx + ph;
    stey = hl;
    poie = ap(hc(stex, stey), ang, hm * 1.2);
    edex = poie.x;
    edey = poie.y;
    dir = "m";
  } else {
    if (stx > midar) {
      ang = random(ra);
      poi = ap(hc(stx, sty), ang, h);
      edx = poi.x;
      edy = poi.y;
      stex = stx + ph;
      stey = hl;
      poie = ap(hc(stex, stey), ang, h);
      edex = poie.x;
      edey = poie.y;
      dir = "r";
    } else {
      ang = random(la);
      poi = ap(hc(stx, sty), ang, h);
      edx = poi.x;
      edy = poi.y;
      stex = stx + ph;
      stey = hl;
      poie = ap(hc(stex, stey), ang, h);
      edex = poie.x;
      edey = poie.y;
      dir = "l";
    }
  }
  let str = hc(stx, sty);
  let edr = hc(edx, edy);
  let strn = hc(stex, stey);
  let edrn = hc(edex, edey);
  return { str, edr, strn, edrn, ang, dir };
}
function section(x, y, x2, y2, ang, ns) {
  let tempX = x;
  let tempY = y;
  let h = (y - y2) / ns;
  let ak = [];
  for (let i = 0; i < ns; i++) {
    let x = tempX;
    let y = tempY;
    let tempP = ap(hc(x, y), ang, h);
    let x2 = tempP.x;
    let y2 = tempP.y;
    tempX = x2;
    tempY = y2;
    let sts = hc(x, y);
    let eds = hc(x2, y2);
    point(x2, y2);
    ak.push({ sts, eds, h });
  }
  return ak;
}

function section2(x, y, x2, y2, ang, ns, dir) {
  let tempX = x;
  let tempY = y;
  let a = hc(x, y);
  let b = hc(x2, y2);
  let h;
  let newH = divvy(y - y2, ns + 1, (y - y2) * 0.1);
  let tempC = 0;
  let inc = 1 / ns;
  let ak = [];
  let dier = random(3, 6);
  let anchp = anchM(a, ang, (y - y2) / ns, dir);
  strokeWeight(0.2);
  for (let t = 0; t < 1.00001; t += inc) {
    let x1 = lerp(a.x, anchp.x, t);
    let y1 = lerp(a.y, anchp.y, t);
    let x2 = lerp(anchp.x, b.x, t);
    let y2 = lerp(anchp.y, b.y, t);
    let x = lerp(x1, x2, t);
    let y = lerp(y1, y2, t);
    let sts = hc(tempX, tempY);
    let eds = hc(x, y);
    h = newH[tempC];
    ak.push({ sts, eds, h });
    tempX = x;
    tempY = y;
    tempC += 1;
  }
  return ak;
}

function anchM(sts, ang, h, dir) {
  let a = ap(
    sts,
    dir == "m" || dir == "l" ? ang - random(0.3, 0.5) : ang + random(0.3, 0.5),
    h
  );
  return a;
}
function anch2(sts, ang, h, t, inc) {
  let angle = t == "l" ? ang - random(0.4, 0.9) : ang + random(0.4, 0.9);
  let a = ap(sts, angle, h * random(inc[0], inc[1]));
  return a;
}
function seb(st, ed, str, edr, n) {
  n += 1;
  let d = (str.x - st.x) / n;
  let d2 = (edr.x - ed.x) / n;
  let a = [];
  for (let i = 1; i < n; i++) {
    let x = st.x + d * i;
    let y = st.y;
    let x2 = ed.x + d2 * i;
    let y2 = edr.y;
    let stm = hc(x, y);
    let edm = hc(x2, y2);
    a.push({ stm, edm });
  }
  return a;
}

function ap(st, ang, h) {
  let x = st.x + h * cos(ang);
  let y = st.y + h * sin(ang);
  return hc(x, y);
}
function angle(d) {
  let set = [];
  if (d == "l") {
    for (let i = 0; i < 30; i++) {
      set.push(random(4.24, 4.71));
    }
  } else {
    for (let i = 0; i < 30; i++) {
      set.push(random(4.73, 5.1));
    }
  }
  return set;
}
function brnc() {
  let brn = flr(0, 2);
  return brn;
}
function flr(a, b) {
  return floor(random(a, b));
}

function hc(a, b) {
  return createVector(a, b);
}

// from stackflow
function divvy(number, parts, min) {
  var randombit = number - min * parts;
  var out = [];

  for (var i = 0; i < parts; i++) {
    out.push(random(1));
  }

  var mult =
    randombit /
    out.reduce(function (a, b) {
      return a + b;
    });

  return out.map(function (el) {
    return el * mult + min;
  });
}

function mn(list) {
  let res = min(list);
  return res;
}
function mx(list) {
  let res = max(list);
  return res;
}

function crown(l) {
  let cr = [];
  for (let i = 0; i < l.length; i++) {
    let e = l[i];
    cr.push(e[1]);
  }
  let counter = cr.indexOf(min(cr));
  let counterL = cr.indexOf(max(cr));
  let ci = flr(5, 8);
  let l2;
  if (counter <= 1) {
    l2 = l.slice(0, 20);
  } else {
    l2 = l.slice(counter - 20, counter);
  }
  let flcL = [];

  if (tbflt == "fl1") {
    nmid(l[counter][0], l[counter][1], flsz);
    nmid(l[counterL][0], l[counterL][1], flsz);
    for (let i = 0; i < l.length; i++) {
      let e = l[i];
      if (random(1) > 0.998) {
        nmid(e[0], e[1], flsz * 0.7, 3);
      }
    }
  }
  let nf = 0;
  for (let i = 0; i < l2.length; i++) {
    let e = l2[i];
    let ref = hc(e[0], e[1]);
    if (nf < 1) {
      if (tbflt == "flB") {
        dirFlB(ref, flsz * 0.75);
      } else if (tbflt == "flN") {
        dirFl(ref, flsz * 0.75);
      }
    }
    nf++;
  }
}

function cont(list) {
  let l = list;
  l = l.flat(1);
  let lr = revArr(l[2][0]);
  let temp = l[0].concat(lr);
  let temp2 = l[1].concat(l[2].length > 1 ? l[2][1] : l[2][0]);
  let temp3 = [];
  let tempLine = [];
  let temp2Line = [];
  let temp3Line = [];
  if (l[2].length > 1) {
    temp3 = l[2][0].concat(revArr(l[2][1]));
  }
  beginShape();
  fill("#061d16");
  for (let i = 0; i < temp.length; i++) {
    let e = temp[i];
    vertex(e[0], e[1]);
    tempLine.push(hc(e[0], e[1]));
    if (i % 2 == 0) {
      ellipse(e[0], e[1], 0.8, random(2, 3));
    }
  }
  endShape();
  beginShape();
  // fill("#07513c");
  let gr = drawingContext.createLinearGradient(600, 0, 0, 700);
  gr.addColorStop(0, color(grcol[cactcl][2]));
  gr.addColorStop(0.5, color(grcol[cactcl][1]));
  gr.addColorStop(1, color(grcol[cactcl][0]));

  drawingContext.fillStyle = gr;
  for (let i = 0; i < temp2.length; i++) {
    let e = temp2[i];
    vertex(e[0], e[1]);
    temp2Line.push(hc(e[0], e[1]));
    if (i % 2 == 0) {
      ellipse(e[0], e[1], 0.8, random(2, 3));
    }
  }
  endShape();
  beginShape();
  drawingContext.fillStyle = gr;

  for (let i = 0; i < temp3.length; i++) {
    let e = temp3[i];
    vertex(e[0], e[1]);
    temp3Line.push(hc(e[0], e[1]));
    if (i % 2 == 0) {
      ellipse(e[0], e[1], 0.8, random(2, 3));
    }
  }
  endShape();

  lim(tempLine, "t");
  lim(temp2Line);
  crown(temp);
  crown(temp2);
  crown(temp3);
  stroke(255);
  strokeWeight(0.25);
}

function lim(list, dir) {
  let ang = dir == "t" ? 0.79 : 2.2;
  for (let i = 0; i < list.length; i++) {
    let e = list[i];
    let poi = ap(e, ang, flsz * 0.33);
    stroke(2, 40, 20, 60);
    strokeWeight(1);
    line(e.x, e.y, poi.x, poi.y);
  }
}

function revArr(list) {
  var ret = [];
  for (var i = list.length - 1; i >= 0; i--) {
    ret.push(list[i]);
  }
  return ret;
}

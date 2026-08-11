var ch = [],
  ci = [],
  cm = [],
  cj = [];
function canvas1() {
  cv = createGraphics(csw, csh);
  psw = csw / 10;
  psh = csh / 10;
  pst = createGraphics(psw, psh);
  j1 = int(psh / dd[18]) + 2;
  i1 = int(psw / dd[18]) + 2;
  xr1 = random(1000);
  yr1 = random(1000);
  x1 = xr1;
  y1 = yr1;
  for (let j = 0; j < j1; j++) {
    ch[j] = [];
    ci[j] = [];
    cm[j] = [];
    cj[j] = [];
    for (let i = 0; i < i1; i++) {
      hign = int(map(noise(x1, y1), 0, 1, 10, 20));
      lign = int(map(noise(x1, y1), 0, 1, 0, 10));
      mign = int(map(noise(x1, y1), 0, 1, 10, 30));
      dign = int(map(noise(x1, y1), 0, 1, 10, 20));
      hig = eval("'" + "#ffffff" + hign + "'");
      lig = eval("'" + "#ffffff0" + lign + "'");
      mid = eval("'" + "#000000" + mign + "'");
      dak = eval("'" + "#000000" + dign + "'");
      if (features.bgc == "Dark") {
        hign = int(map(noise(x1, y1), 0, 1, 10, 20));
        lign = int(map(noise(x1, y1), 0, 1, 0, 10));
        mign = int(map(noise(x1, y1), 0, 1, 10, 30));
        dign = int(map(noise(x1, y1), 0, 1, 0, 10));
        hig = eval("'" + "#ffffff" + hign + "'");
        lig = eval("'" + "#ffffff0" + lign + "'");
        mid = eval("'" + "#000000" + mign + "'");
        dak = eval("'" + "#0000000" + dign + "'");
      }
      ch[j].push(hig);
      ci[j].push(lig);
      cm[j].push(mid);
      cj[j].push(dak);
      x1 += 0.5;
      y1 += 0.5;
    }
    x1 = xr1 * random(0.8, 1.2);
  }
  pst.noStroke();
  for (let j = 0; j < j1; j++) {
    for (let i = 0; i < i1; i++) {
      can1(i, j);
      can2(i, j);
    }
  }
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      cv.image(pst, i * psw, j * psh);
    }
  }
}
function can1(i, j) {
  pst.fill(cj[j][i]);
  pst.rect(
    i * dd[18] + random(dd[5], dd[7]),
    j * dd[18] + random(dd[4], dd[6]),
    random(dd[8], dd[11]),
    random(dd[2], dd[4]),
    dd[7]
  );
  pst.arc(
    i * dd[18] + random(dd[2], dd[4]),
    j * dd[18] + dd[8],
    dd[6],
    dd[4],
    0,
    PI
  );
  pst.fill(cm[j][i]);
  pst.rect(
    i * dd[18] + random(dd[5], dd[7]),
    j * dd[18] + random(dd[3], dd[5]),
    random(dd[8], dd[11]),
    random(dd[0], dd[2]),
    dd[7]
  );
  pst.arc(
    i * dd[18] + random(dd[2], dd[4]),
    j * dd[18] + dd[8],
    dd[8],
    dd[6],
    0,
    PI
  );
  pst.fill(ci[j][i]);
  pst.rect(
    i * dd[18] + random(dd[5], dd[7]),
    j * dd[18] + random(dd[1], dd[3]),
    random(dd[8], dd[11]),
    random(dd[0], dd[4]),
    dd[7]
  );
  pst.ellipse(
    i * dd[18] + random(dd[2], dd[4]),
    j * dd[18] + random(dd[3], dd[5]),
    random(dd[4], dd[8]),
    random(dd[7], dd[14])
  );
  pst.fill(ch[j][i]);
  pst.ellipse(
    i * dd[18] + random(dd[1], dd[5]),
    j * dd[18] + random(dd[2], dd[6]),
    random(dd[1], dd[5]),
    random(dd[1], dd[7])
  );
}
function can2(i, j) {
  pst.fill(cj[j][i]);
  pst.rect(
    i * dd[18] + dd[9] + random(dd[5], dd[7]),
    j * dd[18] + dd[9] + random(dd[4], dd[6]),
    random(dd[8], dd[11]),
    random(dd[2], dd[4]),
    dd[7]
  );
  pst.arc(
    i * dd[18] + dd[9] + random(dd[2], dd[4]),
    j * dd[18] + dd[17],
    dd[6],
    dd[4],
    0,
    PI
  );
  pst.fill(cm[j][i]);
  pst.rect(
    i * dd[18] + dd[9] + random(dd[5], dd[7]),
    j * dd[18] + dd[9] + random(dd[3], dd[5]),
    random(dd[8], dd[11]),
    random(dd[0], dd[2]),
    dd[7]
  );
  pst.arc(
    i * dd[18] + dd[9] + random(dd[2], dd[4]),
    j * dd[18] + dd[17],
    dd[8],
    dd[6],
    0,
    PI
  );
  pst.fill(ci[j][i]);
  pst.rect(
    i * dd[18] + dd[9] + random(dd[5], dd[7]),
    j * dd[18] + dd[9] + random(dd[1], dd[3]),
    random(dd[8], dd[11]),
    random(dd[0], dd[4]),
    dd[7]
  );
  pst.ellipse(
    i * dd[18] + dd[9] + random(dd[2], dd[4]),
    j * dd[18] + dd[9] + random(dd[3], dd[5]),
    random(dd[4], dd[8]),
    random(dd[7], dd[14])
  );
  pst.fill(ch[j][i]);
  pst.ellipse(
    i * dd[18] + dd[9] + random(dd[1], dd[5]),
    j * dd[18] + dd[9] + random(dd[2], dd[6]),
    random(dd[1], dd[5]),
    random(dd[1], dd[7])
  );
}

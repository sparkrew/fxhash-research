function swatch() {
  sqa = [];
  cn = 0;
  ssch = shuffle([
    "swatch1()",
    "swatch2()",
    "swatch3()",
    "swatch4()",
    "swatch5()",
  ]);
  eval(ssch[0]);
  s1 = createGraphics(csw, csh);
  rd1 = createGraphics(csw, csh);
  s1.image(ss, 0, 0);
  rd1.image(ss, 0, 0);
  ca = shuffle(cal);
  eval(ssch[1]);
  s2 = createGraphics(csw, csh);
  rd2 = createGraphics(csw, csh);
  s2.image(ss, 0, 0);
  rd2.image(ss, 0, 0);
  ca = shuffle(cal);
  eval(ssch[2]);
  s3 = createGraphics(csw, csh);
  rd3 = createGraphics(csw, csh);
  s3.image(ss, 0, 0);
  rd3.image(ss, 0, 0);
  if (features.tiletype == "Hexagonal") {
    ca = shuffle(cal);
    eval(ssch[3]);
    s4 = createGraphics(csw, csh);
  rd4 = createGraphics(csw, csh);
    s4.image(ss, 0, 0);
  rd4.image(ss, 0, 0);
  }
  if (features.tiletype == "Square") {
    bgtruchet();
    truch1();
  }
  if (features.tiletype == "Hexagonal") {
    bgtruchet2();
    truch2();
  }
  image(s1, 0, 0);
  image(s2, 0, 0);
  image(s3, 0, 0);
  if (features.tiletype == "Hexagonal") image(s4, 0, 0);
  image(u1, 0, 0);
  image(p1, 0, 0);
  image(q1, 0, 0);
}

function rdraw(){
    s1 = createGraphics(csw, csh);
    s2 = createGraphics(csw, csh);
    s3 = createGraphics(csw, csh);
  s1.image(rd1,0,0);
  s2.image(rd2,0,0);
  s3.image(rd3,0,0);
  if(features.tiletype == "Hexagonal"){
    s4 = createGraphics(csw, csh);s4.image(rd4,0,0);}
  if (features.tiletype == "Square") {
    bgtruchet();
    truch1();
  }
  if (features.tiletype == "Hexagonal") {
    bgtruchet2();
    truch2();
  }
  image(s1, 0, 0);
  image(s2, 0, 0);
  image(s3, 0, 0);
  if (features.tiletype == "Hexagonal") image(s4, 0, 0);
  image(u1, 0, 0);
  image(p1, 0, 0);
  image(q1, 0, 0);
  image(cv,0,0);
}
function swatch1() {
  e /= 2;
  swe = e / swdiv;
  k = (e * sqrt(3)) / 2;
  inum = ceil(csw / (e * 9)) + 1;
  jnum = ceil(csh / (k * 18)) + 1;
  ss = createGraphics(csw, csh);
  for (let j = 0; j < jnum; j++) {
    for (let i = 0; i < inum; i++) {
      ss1r = shuffle(["ss1a()", "ss2a()", "ss3a()"]);
      ssr = shuffle([0, (PI * 2) / 3, (PI * 4) / 3]);
      ss.translate(i * e * 9, j * k * 18);
      ss.translate(0, k * 6);
      ss.rotate(ssr[0]);
      ss.translate(0, -k * 6);
      eval(ss1r[0]);
      ss.translate(0, k * 6);
      ss.rotate(-ssr[0]);
      ss.translate(0, -k * 6);
      ss.translate(-i * e * 9, -j * k * 18);
    }
  }
  for (let j = 0; j < jnum; j++) {
    for (let i = 0; i < inum; i++) {
      ss1r = shuffle(["ss1a()", "ss2a()", "ss3a()"]);
      ssr = shuffle([0, (PI * 2) / 3, (PI * 4) / 3]);
      ss.translate((-e * 9) / 2 + i * e * 9, k * 9 + j * k * 18);
      ss.translate(0, k * 6);
      ss.rotate(ssr[0]);
      ss.translate(0, -k * 6);
      eval(ss1r[0]);
      ss.translate(0, k * 6);
      ss.rotate(-ssr[0]);
      ss.translate(0, -k * 6);
      ss.translate((e * 9) / 2 - i * e * 9, -k * 9 - j * k * 18);
    }
  }
  for (let j = 0; j < jnum; j++) {
    for (let i = 0; i < inum; i++) {
      ss1r = shuffle(["ss1a()", "ss2a()", "ss3a()"]);
      ssr = shuffle([0, (PI * 2) / 3, (PI * 4) / 3]);
      ss.translate(i * e * 9, j * k * 18);
      ss.translate((e * 9) / 2, k * 3);
      ss.rotate(PI + ssr[0]);
      ss.translate(0, -k * 6);
      eval(ss1r[0]);
      ss.translate(0, k * 6);
      ss.rotate(-PI - ssr[0]);
      ss.translate((-e * 9) / 2, -k * 3);
      ss.translate(-i * e * 9, -j * k * 18);
    }
  }
  for (let j = 0; j < jnum; j++) {
    for (let i = 0; i < inum; i++) {
      ss1r = shuffle(["ss1a()", "ss2a()", "ss3a()"]);
      ssr = shuffle([0, (PI * 2) / 3, (PI * 4) / 3]);
      ss.translate((-e * 9) / 2 + i * e * 9, k * 9 + j * k * 18);
      ss.translate((e * 9) / 2, k * 3);
      ss.rotate(PI + ssr[0]);
      ss.translate(0, -k * 6);
      eval(ss1r[0]);
      ss.translate(0, k * 6);
      ss.rotate(-PI - ssr[0]);
      ss.translate((-e * 9) / 2, -k * 3);
      ss.translate((e * 9) / 2 - i * e * 9, -k * 9 - j * k * 18);
    }
  }
  e *= 2;
}
function ss1a() {
  ss.noStroke();
  ss.fill(ca[3]);
  ss.triangle(0, 0, (e * 9) / 2, k * 9, (-e * 9) / 2, k * 9);
  ss.fill(ca[4]);
  ss.quad(e * 2, k * 4, (e * 5) / 2, k * 5, e * 1, k * 8, (e * 1) / 2, k * 7);
  ss.triangle(-e * 2, k * 4, (-e * 9) / 2, k * 9, (e * 1) / 2, k * 9);
  ss.fill(ca[3]);
  ss.triangle((-e * 5) / 2, k * 5, (-e * 1) / 2, k * 9, (-e * 9) / 2, k * 9);
  ss.fill(ca[2]);
  ss.quad(0, 0, (e * 3) / 2, k * 3, 0, k * 6, (-e * 3) / 2, k * 3);
  ss.triangle(-e * 3, k * 6, (-e * 3) / 2, k * 9, (-e * 9) / 2, k * 9);
  ss.triangle(e * 3, k * 6, (e * 9) / 2, k * 9, (e * 3) / 2, k * 9);
  ss.fill(ca[1]);
  ss.quad(0, 0, e * 1, k * 2, 0, k * 4, -e * 1, k * 2);
  ss.triangle((e * 7) / 2, k * 7, (e * 9) / 2, k * 9, (e * 5) / 2, k * 9);
  ss.triangle((-e * 7) / 2, k * 7, (-e * 5) / 2, k * 9, (-e * 9) / 2, k * 9);
  ss.fill(ca[0]);
  ss.quad(0, 0, (e * 1) / 2, k * 1, 0, k * 2, (-e * 1) / 2, k * 1);
  ss.triangle(e * 4, k * 8, (e * 9) / 2, k * 9, (e * 7) / 2, k * 9);
  ss.triangle((-e * 7) / 2, k * 9, (-e * 9) / 2, k * 9, -e * 4, k * 8);
  cover1();
  ss.stroke(0);
  ss.strokeWeight(swe);
  ss.strokeCap(ROUND);
  ss.line((-e * 1) / 2, k * 1, e * 0, k * 2);
  ss.line((e * 1) / 2, k * 1, e * 0, k * 2);
  ss.line(-e * 1, k * 2, e * 0, k * 4);
  ss.line(e * 1, k * 2, e * 0, k * 4);
  ss.line((-e * 3) / 2, k * 3, e * 0, k * 6);
  ss.line((e * 3) / 2, k * 3, e * 0, k * 6);
  ss.line(-e * 2, k * 4, (e * 1) / 2, k * 9);
  ss.line((-e * 5) / 2, k * 5, (-e * 1) / 2, k * 9);
  ss.line(-e * 3, k * 6, (-e * 3) / 2, k * 9);
  ss.line((-e * 7) / 2, k * 7, (-e * 5) / 2, k * 9);
  ss.line(-e * 4, k * 8, (-e * 7) / 2, k * 9);
  ss.line(e * 2, k * 4, (e * 1) / 2, k * 7);
  ss.line((e * 1) / 2, k * 7, e * 1, k * 8);
  ss.line((e * 5) / 2, k * 5, e * 1, k * 8);
  ss.line(e * 3, k * 6, (e * 3) / 2, k * 9);
  ss.line((e * 7) / 2, k * 7, (e * 5) / 2, k * 9);
  ss.line(e * 4, k * 8, (e * 7) / 2, k * 9);
}
function ss2a() {
  ss.noStroke();
  ss.fill(ca[2]);
  ss.triangle(0, 0, (e * 9) / 2, k * 9, (-e * 9) / 2, k * 9);
  ss.fill(ca[1]);
  ss.quad(0, 0, e * 1, k * 2, 0, k * 4, -e * 1, k * 2);
  ss.quad(
    (e * 3) / 2,
    k * 7,
    (e * 7) / 2,
    k * 7,
    (e * 9) / 2,
    k * 9,
    (e * 5) / 2,
    k * 9
  );
  ss.quad(
    (-e * 3) / 2,
    k * 7,
    (-e * 7) / 2,
    k * 7,
    (-e * 9) / 2,
    k * 9,
    (-e * 5) / 2,
    k * 9
  );
  ss.fill(ca[3]);
  ss.triangle((-e * 3) / 2, k * 3, 0, k * 6, -e * 3, k * 6);
  ss.quad((e * 3) / 2, k * 3, e * 3, k * 6, e * 1, k * 6, (e * 1) / 2, k * 5);
  ss.quad(
    (e * 1) / 2,
    k * 7,
    (e * 3) / 2,
    k * 9,
    (-e * 3) / 2,
    k * 9,
    (-e * 1) / 2,
    k * 7
  );
  ss.fill(ca[4]);
  ss.triangle(-e * 2, k * 4, (-e * 3) / 2, k * 5, (-e * 5) / 2, k * 5);
  ss.triangle(e * 2, k * 4, (e * 3) / 2, k * 5, (e * 5) / 2, k * 5);
  ss.triangle(0, k * 8, (e * 1) / 2, k * 9, (-e * 1) / 2, k * 9);
  ss.fill(ca[0]);
  ss.quad(0, 0, (e * 1) / 2, k * 1, 0, k * 2, (-e * 1) / 2, k * 1);
  ss.quad(e * 4, k * 8, (e * 9) / 2, k * 9, (e * 7) / 2, k * 9, e * 3, k * 8);
  ss.quad(
    (-e * 7) / 2,
    k * 9,
    (-e * 9) / 2,
    k * 9,
    -e * 4,
    k * 8,
    -e * 3,
    k * 8
  );
  cover1();
  ss.stroke(0);
  ss.strokeWeight(swe);
  ss.strokeCap(ROUND);
  ss.line((-e * 1) / 2, k * 1, e * 0, k * 2);
  ss.line((e * 1) / 2, k * 1, e * 0, k * 2);
  ss.line(-e * 1, k * 2, e * 0, k * 4);
  ss.line(e * 1, k * 2, e * 0, k * 4);
  ss.line((-e * 3) / 2, k * 3, 0, k * 6);
  ss.line((e * 3) / 2, k * 3, (e * 1) / 2, k * 5);
  ss.line((e * 3) / 2, k * 5, e * 2, k * 4);
  ss.line((e * 3) / 2, k * 5, (e * 5) / 2, k * 5);
  ss.line(-e * 2, k * 4, (-e * 3) / 2, k * 5);
  ss.line((-e * 5) / 2, k * 5, (-e * 3) / 2, k * 5);
  ss.line(-e * 3, k * 6, 0, k * 6);
  ss.line((e * 1) / 2, k * 5, e, k * 6);
  ss.line(e, k * 6, e * 3, k * 6);
  ss.line((-e * 7) / 2, k * 7, (-e * 3) / 2, k * 7);
  ss.line((-e * 1) / 2, k * 7, (e * 1) / 2, k * 7);
  ss.line((e * 7) / 2, k * 7, (e * 3) / 2, k * 7);
  ss.line(-e * 4, k * 8, -e * 3, k * 8);
  ss.line(e * 4, k * 8, e * 3, k * 8);
  ss.line((-e * 7) / 2, k * 9, -e * 3, k * 8);
  ss.line((e * 7) / 2, k * 9, e * 3, k * 8);
  ss.line((-e * 5) / 2, k * 9, (-e * 3) / 2, k * 7);
  ss.line((e * 5) / 2, k * 9, (e * 3) / 2, k * 7);
  ss.line((-e * 3) / 2, k * 9, (-e * 1) / 2, k * 7);
  ss.line((e * 3) / 2, k * 9, (e * 1) / 2, k * 7);
  ss.line((-e * 1) / 2, k * 9, 0, k * 8);
  ss.line((e * 1) / 2, k * 9, 0, k * 8);
}
function ss3a() {
  ss.noStroke();
  ss.fill(ca[4]);
  ss.triangle(0, 0, (e * 9) / 2, k * 9, (-e * 9) / 2, k * 9);
  ss.fill(ca[3]);
  ss.quad(0, 0, e * 2, k * 4, 0, k * 8, -e * 2, k * 4);
  ss.triangle((-e * 5) / 2, k * 5, (-e * 1) / 2, k * 9, (-e * 9) / 2, k * 9);
  ss.triangle((e * 5) / 2, k * 5, (e * 1) / 2, k * 9, (e * 9) / 2, k * 9);
  ss.fill(ca[2]);
  ss.beginShape();
  ss.vertex(-e, k * 2);
  ss.vertex(e, k * 2);
  ss.vertex((e * 3) / 2, k * 3);
  ss.vertex((-e * 3) / 2, k * 9);
  ss.vertex((-e * 5) / 2, k * 9);
  ss.vertex((-e * 7) / 2, k * 7);
  ss.vertex(-e * 3, k * 6);
  ss.vertex(-e * 2, k * 8);
  ss.vertex((-e * 1) / 2, k * 5);
  ss.vertex((-e * 3) / 2, k * 3);
  ss.endShape();
  ss.triangle(e * 3, k * 6, (e * 9) / 2, k * 9, (e * 3) / 2, k * 9);
  ss.fill(ca[1]);
  ss.triangle(0, 0, e * 1, k * 2, -e * 1, k * 2);
  ss.triangle((-e * 1) / 2, k * 3, (e * 1) / 2, k * 3, 0, k * 4);
  ss.triangle((e * 7) / 2, k * 7, (e * 9) / 2, k * 9, (e * 5) / 2, k * 9);
  ss.triangle((-e * 7) / 2, k * 7, (-e * 5) / 2, k * 9, (-e * 9) / 2, k * 9);
  ss.fill(ca[0]);
  ss.triangle(0, 0, (e * 1) / 2, k * 1, (-e * 1) / 2, k * 1);
  ss.triangle(e * 4, k * 8, (e * 9) / 2, k * 9, (e * 7) / 2, k * 9);
  ss.triangle((-e * 7) / 2, k * 9, (-e * 9) / 2, k * 9, -e * 4, k * 8);
  cover1();
  ss.stroke(0);
  ss.strokeWeight(swe);
  ss.strokeCap(ROUND);
  ss.line((-e * 1) / 2, k * 1, (e * 1) / 2, k * 1);
  ss.line(-e * 1, k * 2, e * 1, k * 2);
  ss.line((-e * 1) / 2, k * 3, (e * 1) / 2, k * 3);
  ss.line((-e * 1) / 2, k * 3, 0, k * 4);
  ss.line((e * 1) / 2, k * 3, 0, k * 4);
  ss.line((-e * 3) / 2, k * 3, (-e * 1) / 2, k * 5);
  ss.line(-e * 2, k * 4, -e * 1, k * 6);
  ss.line((-e * 5) / 2, k * 5, (-e * 3) / 2, k * 7);
  ss.line(-e * 3, k * 6, -e * 2, k * 8);
  ss.line((-e * 7) / 2, k * 7, (-e * 5) / 2, k * 9);
  ss.line((e * 7) / 2, k * 7, (e * 5) / 2, k * 9);
  ss.line(-e * 4, k * 8, (-e * 7) / 2, k * 9);
  ss.line(e * 4, k * 8, (e * 7) / 2, k * 9);
  ss.line((-e * 1) / 2, k * 7, 0, k * 8);
  ss.line(-e * 1, k * 8, (-e * 1) / 2, k * 9);
  ss.line((-e * 3) / 2, k * 9, (e * 3) / 2, k * 3);
  ss.line(-e * 2, k * 8, (-e * 1) / 2, k * 5);
  ss.line(0, k * 8, e * 2, k * 4);
  ss.line((e * 1) / 2, k * 9, (e * 5) / 2, k * 5);
  ss.line((e * 3) / 2, k * 9, e * 3, k * 6);
}
function cover1() {
  ss.noFill();
  ss.strokeWeight(swe / 2);
  ss.stroke(ca[0]);
  ss.line(0, 0, (e * 1) / 2, k * 1);
  ss.line(0, 0, (-e * 1) / 2, k * 1);
  ss.line((-e * 9) / 2, k * 9, -e * 4, k * 8);
  ss.line((-e * 9) / 2, k * 9, (-e * 7) / 2, k * 9);
  ss.line((e * 9) / 2, k * 9, e * 4, k * 8);
  ss.line((e * 9) / 2, k * 9, (e * 7) / 2, k * 9);
  ss.stroke(ca[1]);
  ss.line((-e * 1) / 2, k * 1, -e * 1, k * 2);
  ss.line((e * 1) / 2, k * 1, e * 1, k * 2);
  ss.line((-e * 7) / 2, k * 7, -e * 4, k * 8);
  ss.line((e * 7) / 2, k * 7, e * 4, k * 8);
  ss.line((-e * 7) / 2, k * 9, (-e * 5) / 2, k * 9);
  ss.line((e * 7) / 2, k * 9, (e * 5) / 2, k * 9);
  ss.stroke(ca[2]);
  ss.line(-e * 1, k * 2, (-e * 3) / 2, k * 3);
  ss.line(e * 1, k * 2, (e * 3) / 2, k * 3);
  ss.line(-e * 3, k * 6, (-e * 7) / 2, k * 7);
  ss.line(e * 3, k * 6, (e * 7) / 2, k * 7);
  ss.line((-e * 5) / 2, k * 9, (-e * 3) / 2, k * 9);
  ss.line((e * 5) / 2, k * 9, (e * 3) / 2, k * 9);
  ss.stroke(ca[3]);
  ss.line((-e * 3) / 2, k * 3, -e * 2, k * 4);
  ss.line((e * 3) / 2, k * 3, e * 2, k * 4);
  ss.line((-e * 5) / 2, k * 5, -e * 3, k * 6);
  ss.line((e * 5) / 2, k * 5, e * 3, k * 6);
  ss.line((-e * 3) / 2, k * 9, (-e * 1) / 2, k * 9);
  ss.line((e * 3) / 2, k * 9, (e * 1) / 2, k * 9);
  ss.stroke(ca[4]);
  ss.line(-e * 2, k * 4, (-e * 5) / 2, k * 5);
  ss.line(e * 2, k * 4, (e * 5) / 2, k * 5);
  ss.line((-e * 1) / 2, k * 9, (e * 1) / 2, k * 9);
}
function swatch5() {
  e /= 2;
  swe = e / swdiv;
  k = (e * sqrt(3)) / 2;
  inum = ceil(csw / (e * 27)) + 1;
  jnum = ceil(csh / (k * 18)) + 1;
  ss = createGraphics(csw, csh);
  ss.background(ca[0]);
  ss.noFill();
  ss.strokeCap(SQUARE);
  for (let j = 0; j < jnum; j++) {
    for (let i = 0; i < inum; i++) {
      ssr = shuffle([0, PI / 3, (PI * 2) / 3, PI, (PI * 4) / 3, (PI * 5) / 3]);
      ss.translate(i * e * 27, j * k * 18);
      ss.translate((e * 9) / 2, k * 9);
      ss.rotate(ssr[0]);
      ss.translate((-e * 9) / 2, -k * 9);
      ssh();
      ss.translate((e * 9) / 2, k * 9);
      ss.rotate(-ssr[0]);
      ss.translate((-e * 9) / 2, -k * 9);
      ss.translate(-i * e * 27, -j * k * 18);
    }
  }
  for (let j = 0; j < jnum; j++) {
    for (let i = 0; i < inum; i++) {
      ssr = shuffle([0, PI / 3, (PI * 2) / 3, PI, (PI * 4) / 3, (PI * 5) / 3]);
      ss.translate((e * 27) / 2 + i * e * 27, -k * 9 + j * k * 18);
      ss.translate((e * 9) / 2, k * 9);
      ss.rotate(ssr[0]);
      ss.translate((-e * 9) / 2, -k * 9);
      ssh();
      ss.translate((e * 9) / 2, k * 9);
      ss.rotate(-ssr[0]);
      ss.translate((-e * 9) / 2, -k * 9);
      ss.translate((-e * 27) / 2 - i * e * 27, k * 9 - j * k * 18);
    }
  }
  e *= 2;
}
function ssh() {
  let gsh = shuffle(["ssh1()", "ssh2()", "ssh3()"]);
  eval(gsh[0]);
  eval(gsh[1]);
  eval(gsh[2]);
  covers5();
}
function covers5() {
  ss.noStroke();
  ss.translate((e * 9) / 2, k * 9);
  for (let i = 0; i < 6; i++) {
    ss.rotate((PI / 3) * i);
    cc = 1;
    cp = 1;
    for (let j = 0; j < 8; j++) {
      if (cc == 0) cp = 1;
      if (cc == 4) cp = -1;
      ss.fill(ca[cc]);
      ss.ellipse(-e * 3 + e * j, -k * 9, e - swe * 2);
      cc += cp;
    }
    ss.fill(0);
    for (let j = 0; j < 8; j++) {
      ss.ellipse((-e * 7) / 2 + e * j, -k * 9, swe, swe);
    }
    ss.rotate((-PI / 3) * i);
  }
  ss.translate((-e * 9) / 2, -k * 9);
  ss.noFill();
}

function ssh1() {
  cc = 1;
  cp = 1;
  for (let i = 0; i < 8; i++) {
    if (cc == 0) cp = 1;
    if (cc == 4) cp = -1;
    ss.stroke(ca[cc]);
    ss.strokeWeight(e);
    ss.arc(
      (-e * 9) / 2,
      k * 9,
      e + e * (7 - i) * 2,
      e + e * (7 - i) * 2,
      (PI * 5) / 3,
      (PI * 7) / 3
    );
    ss.stroke(0);
    ss.strokeWeight(swe);
    ss.arc(
      (-e * 9) / 2,
      k * 9,
      e + e * (7 - i) * 2 + e,
      e + e * (7 - i) * 2 + e,
      (PI * 5) / 3,
      (PI * 7) / 3
    );
    cc += cp;
  }
}
function ssh2() {
  cc = 1;
  cp = 1;
  for (let i = 0; i < 8; i++) {
    if (cc == 0) cp = 1;
    if (cc == 4) cp = -1;
    ss.stroke(ca[cc]);
    ss.strokeWeight(e);
    ss.arc(
      (e * 27) / 2,
      k * 9,
      e + e * (7 - i) * 2,
      e + e * (7 - i) * 2,
      (PI * 2) / 3,
      (PI * 4) / 3
    );
    ss.stroke(0);
    ss.strokeWeight(swe);
    ss.arc(
      (e * 27) / 2,
      k * 9,
      e + e * (7 - i) * 2 + e,
      e + e * (7 - i) * 2 + e,
      (PI * 2) / 3,
      (PI * 4) / 3
    );
    cc += cp;
  }
}
function ssh3() {
  cc = 1;
  cp = 1;
  for (let i = 0; i < 7; i++) {
    if (cc == 0) cp = 1;
    if (cc == 4) cp = -1;
    ss.stroke(ca[cc]);
    ss.strokeWeight(e);
    ss.line((e * 3) / 2 + e * i, 0, (e * 3) / 2 + e * i, k * 18);
    cc += cp;
  }
  for (let i = 0; i < 8; i++) {
    ss.stroke(0);
    ss.strokeWeight(swe);
    ss.line(e + e * i, 0, e + e * i, k * 18);
  }
}
function swatch4() {
  e /= 2; //b=PI/32;
  inum = ceil(csw / (e * 9)) + 1;
  jnum = ceil(csh / (e * 9)) + 1;
  ss = createGraphics(csw, csh);
  ss.background(ca[0]);
  ss.strokeCap(SQUARE);
  ss.noFill();
  for (let j = 0; j < jnum; j++) {
    for (let i = 0; i < inum; i++) {
      s4r = shuffle([0, PI, PI / 2, (PI * 3) / 2]);
      ss.translate(i * e * 9, j * e * 9);
      ss.translate((e * 9) / 2, (e * 9) / 2);
      ss.rotate(s4r[0]);
      ss.translate((-e * 9) / 2, (-e * 9) / 2);
      rss = shuffle(["s41()", "s42()", "s43()"]);
      eval(rss[0]);
      covers();
      ss.translate((e * 9) / 2, (e * 9) / 2);
      ss.rotate(-s4r[0]);
      ss.translate((-e * 9) / 2, (-e * 9) / 2);
      ss.translate(-i * e * 9, -j * e * 9);
    }
  }
  e *= 2;
}
function s41() {
  tctl(8);
  tctr(4);
  tcbr(5);
  tcbl(5);
}
function s42() {
  sv(2, 8);
  sh(2, 8);
}
function s43() {
  sv(4, 6);
  sh(4, 6);
  tctl(4);
  tctr(4);
  tcbr(4);
  tcbl(4);
}
function sv(svs, svf) {
  n = 0;
  if (svs < 6) {
    cc = svs - 1;
    cp = 1;
  }
  if (svs > 4) {
    cc = svs - 1;
    cp = -1;
  }
  for (let i = svs; i < svf + 1; i++) {
    ss.stroke(ca[cc]);
    ss.strokeWeight(e);
    ss.line(-e / 2 + e * svs + e * n, 0, -e / 2 + e * svs + e * n, e * 9);
    cc += cp;
    if (cc == 4) cp = -1;
    if (cc == 0) cp = 1;
    n++;
  }
  for (let i = svs - 1; i < svf + 1; i++) {
    ss.stroke(0);
    ss.strokeWeight(swe);
    ss.line(e * i, 0, e * i, e * 9);
  }
}
function sh(svs, svf) {
  n = 0;
  if (svs < 6) {
    cc = svs - 1;
    cp = 1;
  }
  if (svs > 4) {
    cc = svs - 1;
    cp = -1;
  }
  for (let i = svs; i < svf + 1; i++) {
    ss.stroke(ca[cc]);
    ss.strokeWeight(e);
    ss.line(0, -e / 2 + e * svs + e * n, e * 9, -e / 2 + e * svs + e * n);
    cc += cp;
    if (cc == 4) cp = -1;
    if (cc == 0) cp = 1;
    n++;
  }
  for (let i = svs - 1; i < svf + 1; i++) {
    ss.stroke(0);
    ss.strokeWeight(swe);
    ss.line(0, e * i, e * 9, e * i);
  }
}
function tctl(st) {
  if (st > 5) {
    cc = 9 - st;
    cp = 1;
  }
  if (st < 6) {
    cc = st - 1;
    cp = -1;
  }
  for (let i = 0; i < st; i++) {
    ss.stroke(ca[cc]);
    ss.strokeWeight(e);
    ss.arc(
      e * 9,
      e * 9,
      e * st * 2 - e * i * 2 - e,
      e * st * 2 - e * i * 2 - e,
      PI,
      (PI * 3) / 2
    );
    cc += cp;
    if (cc == 4) cp = -1;
    if (cc == 0) cp = 1;
  }
  if (st > 5) {
    cc = 9 - st;
    cp = 1;
  }
  if (st < 6) {
    cc = st - 1;
    cp = -1;
  }
  for (let i = 0; i < st + 1; i++) {
    ss.stroke(0);
    ss.strokeWeight(swe);
    ss.arc(
      e * 9,
      e * 9,
      e * st * 2 - e * i * 2,
      e * st * 2 - e * i * 2,
      PI,
      (PI * 3) / 2
    );
    cc += cp;
    if (cc == 4) cp = -1;
    if (cc == 0) cp = 1;
  }
}
function tcbr(st) {
  if (st > 5) {
    cc = 9 - st;
    cp = 1;
  }
  if (st < 6) {
    cc = st - 1;
    cp = -1;
  }
  for (let i = 0; i < st; i++) {
    ss.stroke(ca[cc]);
    ss.strokeWeight(e);
    ss.arc(
      0,
      0,
      e * st * 2 - e * i * 2 - e,
      e * st * 2 - e * i * 2 - e,
      0,
      PI / 2
    );
    cc += cp;
    if (cc == 4) cp = -1;
    if (cc == 0) cp = 1;
  }
  if (st > 5) {
    cc = 9 - st;
    cp = 1;
  }
  if (st < 6) {
    cc = st - 1;
    cp = -1;
  }
  for (let i = 0; i < st + 1; i++) {
    ss.stroke(0);
    ss.strokeWeight(swe);
    ss.arc(0, 0, e * st * 2 - e * i * 2, e * st * 2 - e * i * 2, 0, PI / 2);
    cc += cp;
    if (cc == 4) cp = -1;
    if (cc == 0) cp = 1;
  }
}
function tctr(st) {
  if (st > 5) {
    cc = 9 - st;
    cp = 1;
  }
  if (st < 6) {
    cc = st - 1;
    cp = -1;
  }
  for (let i = 0; i < st; i++) {
    ss.stroke(ca[cc]);
    ss.strokeWeight(e);
    ss.arc(
      e * 9,
      0,
      e * st * 2 - e * i * 2 - e,
      e * st * 2 - e * i * 2 - e,
      PI / 2,
      PI
    );
    cc += cp;
    if (cc == 4) cp = -1;
    if (cc == 0) cp = 1;
  }
  if (st > 5) {
    cc = 9 - st;
    cp = 1;
  }
  if (st < 6) {
    cc = st - 1;
    cp = -1;
  }
  for (let i = 0; i < st + 1; i++) {
    ss.stroke(0);
    ss.strokeWeight(swe);
    ss.arc(
      e * 9,
      0,
      e * st * 2 - e * i * 2,
      e * st * 2 - e * i * 2,
      PI / 2,
      PI
    );
    cc += cp;
    if (cc == 4) cp = -1;
    if (cc == 0) cp = 1;
  }
}
function tcbl(st) {
  if (st > 5) {
    cc = 9 - st;
    cp = 1;
  }
  if (st < 6) {
    cc = st - 1;
    cp = -1;
  }
  for (let i = 0; i < st; i++) {
    ss.stroke(ca[cc]);
    ss.strokeWeight(e);
    ss.arc(
      0,
      e * 9,
      e * st * 2 - e * i * 2 - e,
      e * st * 2 - e * i * 2 - e,
      (PI * 3) / 2,
      PI * 2
    );
    cc += cp;
    if (cc == 4) cp = -1;
    if (cc == 0) cp = 1;
  }
  if (st > 5) {
    cc = 9 - st;
    cp = 1;
  }
  if (st < 6) {
    cc = st - 1;
    cp = -1;
  }
  for (let i = 0; i < st + 1; i++) {
    ss.stroke(0);
    ss.strokeWeight(swe);
    ss.arc(
      0,
      e * 9,
      e * st * 2 - e * i * 2,
      e * st * 2 - e * i * 2,
      (PI * 3) / 2,
      PI * 2
    );
    cc += cp;
    if (cc == 4) cp = -1;
    if (cc == 0) cp = 1;
  }
}
function swatch3() {
  e /= 2;
  s3ra = [];
  inum = ceil(csw / (e * 9)) + 1;
  jnum = ceil(csh / (e * 9)) + 1;
  ss = createGraphics(csw, csh);
  ss.strokeCap(SQUARE);
  for (let j = 0; j < jnum; j++) {
    s3ra[j] = [];
    for (let i = 0; i < inum; i++) {
      s3r = shuffle([PI / 2, PI, (3 * PI) / 2, 0]);
      s3ra[j].push(s3r[0]);
    }
  }
  for (let j = 0; j < jnum; j++) {
    for (let i = 0; i < inum; i++) {
      s3r = shuffle([PI / 2, PI]);
      ss.translate(i * e * 9, j * e * 9);
      ss.translate((e * 9) / 2, (e * 9) / 2);
      ss.rotate(s3ra[j][i]);
      ss.translate((-e * 9) / 2, (-e * 9) / 2);
      tc1();
      ss.translate((e * 9) / 2, (e * 9) / 2);
      ss.rotate(-s3ra[j][i]);
      ss.translate((-e * 9) / 2, (-e * 9) / 2);
      ss.translate(-i * e * 9, -j * e * 9);
    }
  }
  for (let j = 0; j < jnum; j++) {
    for (let i = 0; i < inum; i++) {
      s3r = shuffle([PI / 2, PI, (3 * PI) / 2, 0]);
      ss.translate(i * e * 9, j * e * 9);
      ss.translate((e * 9) / 2, (e * 9) / 2);
      ss.rotate(s3ra[j][i]);
      ss.translate((-e * 9) / 2, (-e * 9) / 2);
      tc2();
      ss.translate((e * 9) / 2, (e * 9) / 2);
      ss.rotate(-s3ra[j][i]);
      ss.translate((-e * 9) / 2, (-e * 9) / 2);
      ss.translate(-i * e * 9, -j * e * 9);
    }
  }
  e *= 2;
}
function tc1() {
  ss.strokeWeight(e);
  ss.stroke(ca[0]);
  ss.line(e / 2, -swe / 2, e / 2, e * 9 + swe / 2);
  ss.line(e / 2 + e * 8, -swe / 2, e / 2 + e * 8, e * 9 + swe / 2);
  ss.stroke(ca[1]);
  ss.line(e / 2 + e, -swe / 2, e / 2 + e, e * 9 + swe / 2);
  ss.line(e / 2 + e * 7, -swe / 2, e / 2 + e * 7, e * 9 + swe / 2);
  ss.stroke(ca[2]);
  ss.line(e / 2 + e * 2, -swe / 2, e / 2 + e * 2, e * 9 + swe / 2);
  ss.line(e / 2 + e * 6, -swe / 2, e / 2 + e * 6, e * 9 + swe / 2);
  ss.stroke(ca[3]);
  ss.line(e / 2 + e * 3, -swe / 2, e / 2 + e * 3, e * 9 + swe / 2);
  ss.line(e / 2 + e * 5, -swe / 2, e / 2 + e * 5, e * 9 + swe / 2);
  ss.stroke(ca[4]);
  ss.line(e / 2 + e * 4, -swe / 2, e / 2 + e * 4, e * 9 + swe / 2);
  ss.stroke(0);
}
function tc2() {
  ss.strokeWeight(swe);
  ss.line(0, -swe / 2, 0, e * 9 + swe / 2);
  ss.line(e * 8, -swe / 2, e * 8, e * 9 + swe / 2);
  ss.line(e * 9, -swe / 2, e * 9, e * 9 + swe / 2);
  ss.line(e, -swe / 2, e, e * 9 + swe / 2);
  ss.line(e * 7, -swe / 2, e * 7, e * 9 + swe / 2);
  ss.line(e * 2, -swe / 2, e * 2, e * 9 + swe / 2);
  ss.line(e * 6, -swe / 2, e * 6, e * 9 + swe / 2);
  ss.line(e * 3, -swe / 2, e * 3, e * 9 + swe / 2);
  ss.line(e * 5, -swe / 2, e * 5, e * 9 + swe / 2);
  ss.line(e * 4, -swe / 2, e * 4, e * 9 + swe / 2);
}
function swatch2() {
  e /= 2;
  s2ra = [];
  ee = swe / 2;
  inum = ceil(csw / (e * 9) + 1);
  jnum = ceil(csh / (e * 9) + 1);
  ss = createGraphics(csw, csh);
  ss.background(ca[4]);
  ss.strokeCap(SQUARE);
  for (let j = 0; j < jnum; j++) {
    for (let i = 0; i < inum; i++) {
      s2r = shuffle([0, PI / 2, PI, (PI * 3) / 2]);
      ss.translate(i * e * 9, j * e * 9);
      ss.translate((e * 9) / 2, (e * 9) / 2);
      ss.rotate(s2r[0]);
      ss.translate((-e * 9) / 2, (-e * 9) / 2);
      s2ev = shuffle(["s2tc1()", "s2tc2()", "s2tc3()"]);
      eval(s2ev[0]);
      ss.translate((e * 9) / 2, (e * 9) / 2);
      ss.rotate(-s2r[0]);
      ss.translate((-e * 9) / 2, (-e * 9) / 2);
      ss.translate(-i * e * 9, -j * e * 9);
    }
  }
  e *= 2;
}
function s2tc1() {
  ss.strokeWeight(e);
  ss.strokeCap(SQUARE);
  ss.stroke(ca[0]);
  ss.line(e / 2, -ee, e / 2, e * 9 + ee);
  ss.line(e / 2 + e * 8, -ee, e / 2 + e * 8, e * 9 + ee);
  ss.stroke(ca[1]);
  ss.line(e / 2 + e, -ee, e / 2 + e, e * 9 + ee);
  ss.line(e / 2 + e * 7, -ee, e / 2 + e * 7, e * 9 + ee);
  ss.stroke(ca[2]);
  ss.line(e / 2 + e * 2, -ee, e / 2 + e * 2, e * 9 + ee);
  ss.line(e / 2 + e * 6, -ee, e / 2 + e * 6, e * 9 + ee);
  ss.stroke(ca[3]);
  ss.line(e / 2 + e * 3, -ee, e / 2 + e * 3, e * 9 + ee);
  ss.line(e / 2 + e * 5, -ee, e / 2 + e * 5, e * 9 + ee);
  ss.stroke(ca[4]);
  ss.line(e / 2 + e * 4, -ee, e / 2 + e * 4, e * 9 + ee);
  ss.stroke(ca[1]);
  ss.line(-ee, (e * 3) / 2, e * 2, (e * 3) / 2);
  ss.line(e * 7, (e * 3) / 2, e * 9 + ee, (e * 3) / 2);
  ss.line(-ee, (e * 15) / 2, e * 2, (e * 15) / 2);
  ss.line(e * 7, (e * 15) / 2, e * 9 + ee, (e * 15) / 2);
  ss.stroke(ca[2]);
  ss.line(-ee, (e * 5) / 2, e * 3, (e * 5) / 2);
  ss.line(e * 6, (e * 5) / 2, e * 9 + ee, (e * 5) / 2);
  ss.line(-ee, (e * 13) / 2, e * 9 + ee, (e * 13) / 2);
  ss.stroke(ca[3]);
  ss.line(-ee, (e * 7) / 2, e * 4, (e * 7) / 2);
  ss.line(e * 5, (e * 7) / 2, e * 9 + ee, (e * 7) / 2);
  ss.line(-ee, (e * 11) / 2, e * 9 + ee, (e * 11) / 2);
  ss.stroke(ca[4]);
  ss.line(-ee, (e * 9) / 2, e * 9 + ee, (e * 9) / 2);
  ss.strokeWeight(swe);
  ss.stroke(0);
  ss.strokeCap(PROJECT);
  ss.line(0, e, e, e);
  ss.line(e, 0, e, e);
  ss.line(e * 8, e, e * 9, e);
  ss.line(e * 8, 0, e * 8, e);
  ss.line(0, e * 8, e, e * 8);
  ss.line(e, e * 8, e, e * 9);
  ss.line(e * 8, e * 8, e * 9, e * 8);
  ss.line(e * 8, e * 8, e * 8, e * 9);
  ss.line(0, e * 2, e * 2, e * 2);
  ss.line(e * 2, 0, e * 2, e * 2);
  ss.line(e * 7, e * 2, e * 9, e * 2);
  ss.line(e * 7, e * 0, e * 7, e * 2);
  ss.line(e * 0, e * 7, e * 2, e * 7);
  ss.line(e * 2, e * 7, e * 2, e * 9);
  ss.line(e * 7, e * 7, e * 7, e * 9);
  ss.line(e * 7, e * 7, e * 9, e * 7);
  ss.line(0, e * 3, e * 3, e * 3);
  ss.line(e * 3, 0, e * 3, e * 3);
  ss.line(e * 6, e * 3, e * 9, e * 3);
  ss.line(e * 6, e * 0, e * 6, e * 3);
  ss.line(0, e * 4, e * 4, e * 4);
  ss.line(e * 4, 0, e * 4, e * 4);
  ss.line(e * 5, e * 4, e * 9, e * 4);
  ss.line(e * 5, e * 0, e * 5, e * 4);
  ss.line(e * 0, e * 5, e * 9, e * 5);
  ss.line(e * 0, e * 6, e * 9, e * 6);
  ss.line(e * 3, e * 7, e * 6, e * 7);
  ss.line(e * 3, e * 7, e * 3, e * 9);
  ss.line(e * 4, e * 7, e * 4, e * 9);
  ss.line(e * 5, e * 7, e * 5, e * 9);
  ss.line(e * 6, e * 7, e * 6, e * 9);
}
function s2tc2() {
  ss.strokeWeight(e);
  ss.strokeCap(SQUARE);
  ss.stroke(ca[0]);
  ss.line(e / 2, -ee, e / 2, e * 9 + ee);
  ss.line(e / 2 + e * 8, -ee, e / 2 + e * 8, e * 9 + ee);
  ss.stroke(ca[1]);
  ss.line(e / 2 + e, -ee, e / 2 + e, e * 9 + ee);
  ss.line(e / 2 + e * 7, -ee, e / 2 + e * 7, e * 9 + ee);
  ss.stroke(ca[2]);
  ss.line(e / 2 + e * 2, -ee, e / 2 + e * 2, e * 9 + ee);
  ss.line(e / 2 + e * 6, -ee, e / 2 + e * 6, e * 9 + ee);
  ss.stroke(ca[3]);
  ss.line(e / 2 + e * 3, -ee, e / 2 + e * 3, e * 9 + ee);
  ss.line(e / 2 + e * 5, -ee, e / 2 + e * 5, e * 9 + ee);
  ss.stroke(ca[4]);
  ss.line(e / 2 + e * 4, -ee, e / 2 + e * 4, e * 9 + ee);
  ss.stroke(ca[1]);
  ss.line(-ee, (e * 3) / 2, e * 9 + ee, (e * 3) / 2);
  ss.line(-ee, (e * 15) / 2, e * 2, (e * 15) / 2);
  ss.line(e * 8, (e * 15) / 2, e * 9 + ee, (e * 15) / 2);
  ss.stroke(ca[2]);
  ss.line(-ee, (e * 5) / 2, e * 7, (e * 5) / 2);
  ss.line(-ee, (e * 13) / 2, e * 3, (e * 13) / 2);
  ss.line(e * 8, (e * 5) / 2, e * 9 + ee, (e * 5) / 2);
  ss.line(e * 8, (e * 13) / 2, e * 9 + ee, (e * 13) / 2);
  ss.stroke(ca[3]);
  ss.line(-ee, (e * 7) / 2, e * 6, (e * 7) / 2);
  ss.line(-ee, (e * 11) / 2, e * 4, (e * 11) / 2);
  ss.line(e * 8, (e * 7) / 2, e * 9 + ee, (e * 7) / 2);
  ss.line(e * 8, (e * 11) / 2, e * 9 + ee, (e * 11) / 2);
  ss.stroke(ca[4]);
  ss.line(-ee, (e * 9) / 2, e * 5, (e * 9) / 2);
  ss.line(e * 8, (e * 9) / 2, e * 9 + ee, (e * 9) / 2);
  ss.strokeWeight(swe);
  ss.stroke(0);
  ss.strokeCap(PROJECT);
  ss.line(0, e, e, e);
  ss.line(e, 0, e, e);
  ss.line(e * 8, e, e * 9, e);
  ss.line(e * 8, 0, e * 8, e);
  ss.line(0, e * 8, e, e * 8);
  ss.line(e, e * 8, e, e * 9);
  ss.line(e * 8, e * 8, e * 9, e * 8);
  ss.line(e * 8, e * 8, e * 8, e * 9);
  ss.line(e * 2, e * 1, e * 7, e * 1);
  ss.line(e * 2, 0, e * 2, e * 1);
  ss.line(e * 3, 0, e * 3, e * 1);
  ss.line(e * 4, 0, e * 4, e * 1);
  ss.line(e * 5, 0, e * 5, e * 1);
  ss.line(e * 6, 0, e * 6, e * 1);
  ss.line(e * 7, 0, e * 7, e * 1);
  ss.line(e * 0, e * 2, e * 7, e * 2);
  ss.line(e * 7, e * 2, e * 7, e * 9);
  ss.line(e * 0, e * 3, e * 6, e * 3);
  ss.line(e * 6, e * 3, e * 6, e * 9);
  ss.line(e * 0, e * 4, e * 5, e * 4);
  ss.line(e * 5, e * 4, e * 5, e * 9);
  ss.line(0, e * 5, e * 4, e * 5);
  ss.line(e * 4, e * 5, e * 4, e * 9);
  ss.line(e * 0, e * 6, e * 3, e * 6);
  ss.line(e * 3, e * 6, e * 3, e * 9);
  ss.line(0, e * 7, e * 2, e * 7);
  ss.line(e * 2, e * 7, e * 2, e * 9);
  ss.line(e * 8, e * 2, e * 8, e * 7);
  ss.line(e * 8, e * 2, e * 9, e * 2);
  ss.line(e * 8, e * 3, e * 9, e * 3);
  ss.line(e * 8, e * 4, e * 9, e * 4);
  ss.line(e * 8, e * 5, e * 9, e * 5);
  ss.line(e * 8, e * 6, e * 9, e * 6);
  ss.line(e * 8, e * 7, e * 9, e * 7);
}
function s2tc3() {
  ss.strokeWeight(e);
  ss.strokeCap(SQUARE);
  ss.stroke(ca[0]);
  ss.line(e / 2, -ee, e / 2, e * 9 + ee);
  ss.line(e / 2 + e * 8, -ee, e / 2 + e * 8, e * 9 + ee);
  ss.stroke(ca[1]);
  ss.line(e / 2 + e, -ee, e / 2 + e, e * 9 + ee);
  ss.line(e / 2 + e * 7, -ee, e / 2 + e * 7, e * 9 + ee);
  ss.stroke(ca[2]);
  ss.line(e / 2 + e * 2, -ee, e / 2 + e * 2, e * 9 + ee);
  ss.line(e / 2 + e * 6, -ee, e / 2 + e * 6, e * 9 + ee);
  ss.stroke(ca[3]);
  ss.line(e / 2 + e * 3, -ee, e / 2 + e * 3, e * 9 + ee);
  ss.line(e / 2 + e * 5, -ee, e / 2 + e * 5, e * 9 + ee);
  ss.stroke(ca[4]);
  ss.line(e / 2 + e * 4, -ee, e / 2 + e * 4, e * 9 + ee);
  ss.stroke(ca[1]);
  ss.line(-ee, (e * 3) / 2, e * 2, (e * 3) / 2);
  ss.line(e * 7, (e * 3) / 2, e * 9 + ee, (e * 3) / 2);
  ss.line(-ee, (e * 15) / 2, e * 2, (e * 15) / 2);
  ss.line(e * 7, (e * 15) / 2, e * 9 + ee, (e * 15) / 2);
  ss.stroke(ca[2]);
  ss.line(-ee, (e * 5) / 2, e * 3, (e * 5) / 2);
  ss.line(e * 6, (e * 5) / 2, e * 9 + ee, (e * 5) / 2);
  ss.line(-ee, (e * 13) / 2, e * 3, (e * 13) / 2);
  ss.line(e * 6, (e * 13) / 2, e * 9 + ee, (e * 13) / 2);
  ss.stroke(ca[3]);
  ss.line(-ee, (e * 7) / 2, e * 9 + ee, (e * 7) / 2);
  ss.line(-ee, (e * 11) / 2, e * 2, (e * 11) / 2);
  ss.line(e * 7, (e * 11) / 2, e * 9 + ee, (e * 11) / 2);
  ss.stroke(ca[4]);
  ss.line(-ee, (e * 9) / 2, e * 2, (e * 9) / 2);
  ss.line(e * 7, (e * 9) / 2, e * 9 + ee, (e * 9) / 2);
  ss.strokeWeight(swe);
  ss.stroke(0);
  ss.strokeCap(PROJECT);
  ss.line(0, e, e, e);
  ss.line(e, 0, e, e);
  ss.line(e * 8, e, e * 9, e);
  ss.line(e * 8, 0, e * 8, e);
  ss.line(0, e * 8, e, e * 8);
  ss.line(e, e * 8, e, e * 9);
  ss.line(e * 8, e * 8, e * 9, e * 8);
  ss.line(e * 8, e * 8, e * 8, e * 9);
  ss.line(e * 0, e * 2, e * 2, e * 2);
  ss.line(e * 2, 0, e * 2, e * 2);
  ss.line(e * 7, e * 2, e * 9, e * 2);
  ss.line(e * 7, e * 0, e * 7, e * 2);
  ss.line(e * 0, e * 3, e * 3, e * 3);
  ss.line(e * 6, e * 3, e * 9, e * 3);
  ss.line(e * 3, e * 0, e * 3, e * 3);
  ss.line(e * 6, e * 0, e * 6, e * 3);
  ss.line(e * 4, e * 0, e * 4, e * 3);
  ss.line(e * 5, e * 0, e * 5, e * 3);
  ss.line(e * 4, e * 3, e * 5, e * 3);
  ss.line(e * 0, e * 4, e * 3, e * 4);
  ss.line(e * 4, e * 4, e * 5, e * 4);
  ss.line(e * 6, e * 4, e * 9, e * 4);
  ss.line(e * 0, e * 5, e * 2, e * 5);
  ss.line(e * 7, e * 5, e * 9, e * 5);
  ss.line(e * 0, e * 6, e * 2, e * 6);
  ss.line(e * 7, e * 6, e * 9, e * 6);
  ss.line(e * 0, e * 7, e * 2, e * 7);
  ss.line(e * 7, e * 7, e * 9, e * 7);
  ss.line(e * 2, e * 4, e * 2, e * 6);
  ss.line(e * 7, e * 4, e * 7, e * 6);
  ss.line(e * 3, e * 4, e * 3, e * 9);
  ss.line(e * 4, e * 4, e * 4, e * 9);
  ss.line(e * 5, e * 4, e * 5, e * 9);
  ss.line(e * 6, e * 4, e * 6, e * 9);
  ss.line(e * 2, e * 7, e * 2, e * 9);
  ss.line(e * 7, e * 7, e * 7, e * 9);
}

function covers() {
  ss.noStroke();
  ss.fill(ca[0]);
  ss.ellipse(e * 9, 0, e * 2 - swe);
  ss.ellipse(0, 0, e * 2 - swe);
  ss.ellipse(0, e * 9, e * 2 - swe);
  ss.ellipse(e * 9, e * 9, e * 2 - swe);
  ss.fill(ca[1]);
  ss.ellipse(e * 9, (e * 3) / 2, e - swe);
  ss.ellipse(e * 9, (e * 15) / 2, e - swe);
  ss.ellipse((e * 3) / 2, e * 9, e - swe);
  ss.ellipse((e * 15) / 2, e * 9, e - swe);
  ss.ellipse(0, (e * 3) / 2, e - swe);
  ss.ellipse(0, (e * 15) / 2, e - swe);
  ss.ellipse((e * 3) / 2, 0, e - swe);
  ss.ellipse((e * 15) / 2, 0, e - swe);
  ss.fill(ca[2]);
  ss.ellipse(e * 9, (e * 5) / 2, e - swe);
  ss.ellipse(e * 9, (e * 13) / 2, e - swe);
  ss.ellipse((e * 5) / 2, e * 9, e - swe);
  ss.ellipse((e * 13) / 2, e * 9, e - swe);
  ss.ellipse(0, (e * 5) / 2, e - swe);
  ss.ellipse(0, (e * 13) / 2, e - swe);
  ss.ellipse((e * 5) / 2, 0, e - swe);
  ss.ellipse((e * 13) / 2, 0, e - swe);
  ss.fill(ca[3]);
  ss.ellipse(e * 9, (e * 7) / 2, e - swe);
  ss.ellipse(e * 9, (e * 11) / 2, e - swe);
  ss.ellipse((e * 7) / 2, e * 9, e - swe);
  ss.ellipse((e * 11) / 2, e * 9, e - swe);
  ss.ellipse(0, (e * 7) / 2, e - swe);
  ss.ellipse(0, (e * 11) / 2, e - swe);
  ss.ellipse((e * 7) / 2, 0, e - swe);
  ss.ellipse((e * 11) / 2, 0, e - swe);
  ss.fill(ca[4]);
  ss.ellipse(e * 9, (e * 9) / 2, e - swe);
  ss.ellipse((e * 9) / 2, e * 9, e - swe);
  ss.noFill();
  ss.fill(0);
  for (let i = 0; i < 8; i++) {
    ss.ellipse(e + e * i, 0, swe);
    ss.ellipse(e + e * i, e * 9, swe);
    ss.ellipse(0, e + e * i, swe);
    ss.ellipse(e * 9, e + e * i, swe);
  }
  ss.noFill();
}

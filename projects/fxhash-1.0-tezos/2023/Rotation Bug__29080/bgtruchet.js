function bgtruchet2() {
  p1 = createGraphics(csw, csh);
  q1 = createGraphics(csw, csh);
  u1 = createGraphics(csw, csh);
  p1.background(cb);
  v = f / random(16, 21);
  w = (v * sqrt(3)) / 2;
  swz = v / 3;
  inum = ceil(csw / (v * 27)) + 1;
  jnum = ceil(csh / (w * 18)) + 1;
  p1.noFill();
  p1.stroke(cl);
  p1.strokeWeight(swz);
  for (let j = 0; j < jnum; j++) {
    for (let i = 0; i < inum; i++) {
      p1r = shuffle([0, (PI * 2) / 3, (PI * 4) / 3]);
      p1.translate(i * v * 27, j * w * 18);
      p1.translate((v * 9) / 2, w * 9);
      p1.rotate(p1r[0]);
      p1.translate((-v * 9) / 2, -w * 9);
      rrb = shuffle(hrpa);
      eval(rrb[0]);
      p1.translate((v * 9) / 2, w * 9);
      p1.rotate(-p1r[0]);
      p1.translate((-v * 9) / 2, -w * 9);
      p1.translate(-i * v * 27, -j * w * 18);
    }
  }
  for (let j = 0; j < jnum; j++) {
    for (let i = 0; i < inum; i++) {
      p1r = shuffle([0, (PI * 2) / 3, (PI * 4) / 3]);
      p1.translate((v * 27) / 2 + i * v * 27, -w * 9 + j * w * 18);
      p1.translate((v * 9) / 2, w * 9);
      p1.rotate(p1r[0]);
      p1.translate((-v * 9) / 2, -w * 9);
      rrb = shuffle(hrpa);
      eval(rrb[0]);
      p1.translate((v * 9) / 2, w * 9);
      p1.rotate(-p1r[0]);
      p1.translate((-v * 9) / 2, -w * 9);
      p1.translate((-v * 27) / 2 - i * v * 27, w * 9 - j * w * 18);
    }
  }
}
function hexsign() {
  p1.ellipse((v * 9) / 2, w * 9, w * 14);
  p1.line((v * 9) / 2, w * 2, (v * 9) / 2, w * 16);
  p1.line(
    (v * 9) / 2 + ((v * 3 * sqrt(2)) / 2) * cos((PI * 5) / 4),
    w * 9 + ((v * 3 * sqrt(2)) / 2) * sin((PI * 5) / 4),
    (v * 9) / 2 + w * 7 * cos(PI / 4),
    w * 9 + w * 7 * sin(PI / 4)
  );
  p1.line(
    (v * 9) / 2 + ((v * 3 * sqrt(2)) / 2) * cos((PI * 3) / 4),
    w * 9 + ((v * 3 * sqrt(2)) / 2) * sin((PI * 3) / 4),
    (v * 9) / 2 + w * 7 * cos((PI * 7) / 4),
    w * 9 + w * 7 * sin((PI * 7) / 4)
  );
  p1.line(
    (v * 9) / 2 + w * 7 * cos((PI * 7) / 4),
    w * 9 + w * 7 * sin((PI * 7) / 4),
    (v * 9) / 2 + w * 7 * cos(PI / 4),
    w * 9 + w * 7 * sin(PI / 4)
  );
  p1.arc((v * 3) / 2, w * 9, v * 4.16, v * 4.16, PI / 4, (PI * 7) / 4);
  p1.ellipse((v * 3) / 2, w * 9, v * 2, v * 2);
  p1.line(
    (v * 9) / 2 + w * 7 * cos((PI * 7) / 4),
    w * 8,
    (v * 9) / 2 + w * 7 - swz,
    w * 8
  );
  p1.line(
    (v * 9) / 2 + w * 7 * cos((PI * 7) / 4),
    w * 10,
    (v * 9) / 2 + w * 7 - swz,
    w * 10
  );
}
function i1ta() {
  p1.arc(0, 0, v * 3, v * 3, 0, (PI * 2) / 3); //a
  p1.arc(0, 0, v * 7, v * 7, 0, (PI * 2) / 3); //a
  p1.arc((v * 27) / 2, w * 9, v * 3, v * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc(0, w * 18, v * 3, v * 3, (PI * 4) / 3, PI * 2); //c
  p1.arc(v * 9, 0, v * 3, v * 3, PI / 3, PI); //d
  p1.arc(v * 9, 0, v * 7, v * 7, PI / 3, PI); //d
  p1.arc(v * 9, w * 18, v * 3, v * 3, PI, (PI * 5) / 3); //e
  p1.arc(v * 9, w * 18, v * 7, v * 7, PI, (PI * 5) / 3); //e
  p1.arc(v * 9, w * 18, v * 11, v * 11, PI, (PI * 5) / 3); //e
  p1.arc((-v * 9) / 2, w * 9, v * 3, v * 3, (PI * 5) / 3, (PI * 7) / 3); //v
  p1.arc((-v * 9) / 2, w * 9, v * 7, v * 7, (PI * 5) / 3, (PI * 7) / 3); //v
  p1.line((v * 47) / 4, (w * 11) / 2, (-v * 7) / 4, (w * 29) / 2);
}
function i2ta() {
  p1.arc((v * 27) / 2, w * 9, v * 3, v * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((v * 27) / 2, w * 9, v * 7, v * 7, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((v * 27) / 2, w * 9, v * 11, v * 11, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc(v * 9, 0, v * 3, v * 3, PI / 3, PI); //d
  p1.arc(v * 9, w * 18, v * 3, v * 3, PI, (PI * 5) / 3); //e
  p1.arc((-v * 9) / 2, w * 9, v * 3, v * 3, (PI * 5) / 3, (PI * 7) / 3); //v
  p1.arc((-v * 9) / 2, w * 9, v * 7, v * 7, (PI * 5) / 3, (PI * 7) / 3); //v
  p1.line((v * 3) / 2, 0, (v * 3) / 2, w * 18);
  p1.line((v * 7) / 2, 0, (v * 7) / 2, w * 18);
  p1.line((v * 11) / 2, 0, (v * 11) / 2, w * 18);
}
function i3ta() {
  p1.arc(0, 0, v * 3, v * 3, 0, (PI * 2) / 3); //a
  p1.arc(0, 0, v * 7, v * 7, 0, (PI * 2) / 3); //a
  p1.arc(0, 0, v * 11, v * 11, 0, (PI * 2) / 3); //a
  p1.arc((v * 27) / 2, w * 9, v * 3, v * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((v * 27) / 2, w * 9, v * 7, v * 7, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((v * 27) / 2, w * 9, v * 11, v * 11, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((v * 27) / 2, w * 9, v * 15, v * 15, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc(0, w * 18, v * 3, v * 3, (PI * 4) / 3, PI * 2); //c
  p1.arc(0, w * 18, v * 7, v * 7, (PI * 4) / 3, PI * 2); //c
  p1.arc(0, w * 18, v * 11, v * 11, (PI * 4) / 3, PI * 2); //c
  p1.arc((-v * 9) / 2, w * 9, v * 3, v * 3, (PI * 5) / 3, (PI * 7) / 3); //v
}
function i4ta() {
  p1.arc(0, 0, v * 3, v * 3, 0, (PI * 2) / 3); //a
  p1.arc((v * 27) / 2, w * 9, v * 3, v * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((v * 27) / 2, w * 9, v * 7, v * 7, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((v * 27) / 2, w * 9, v * 11, v * 11, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc(0, w * 18, v * 3, v * 3, (PI * 4) / 3, PI * 2); //c
  p1.arc(v * 9, 0, v * 3, v * 3, PI / 3, PI); //d
  p1.arc(v * 9, w * 18, v * 3, v * 3, PI, (PI * 5) / 3); //e
  p1.arc((-v * 9) / 2, w * 9, v * 3, v * 3, (PI * 5) / 3, (PI * 7) / 3); //v
  p1.arc((-v * 9) / 2, w * 9, v * 7, v * 7, (PI * 5) / 3, (PI * 7) / 3); //v
  p1.arc((-v * 9) / 2, w * 9, v * 11, v * 11, (PI * 5) / 3, (PI * 7) / 3); //v
  p1.line((v * 7) / 2, 0, (v * 7) / 2, w * 18);
  p1.line((v * 11) / 2, 0, (v * 11) / 2, w * 18);
}
function i5ta() {
  p1.arc((v * 27) / 2, w * 9, v * 3, v * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((v * 27) / 2, w * 9, v * 7, v * 7, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((-v * 9) / 2, w * 9, v * 3, v * 3, (PI * 5) / 3, (PI * 7) / 3); //v
  p1.arc((-v * 9) / 2, w * 9, v * 7, v * 7, (PI * 5) / 3, (PI * 7) / 3); //v
  p1.line((v * 3) / 2, 0, (v * 3) / 2, w * 18);
  p1.line((v * 7) / 2, 0, (v * 7) / 2, w * 18);
  p1.line((v * 11) / 2, 0, (v * 11) / 2, w * 18);
  p1.line((v * 15) / 2, 0, (v * 15) / 2, w * 18);
}
function i7ta() {
  p1.arc((v * 27) / 2, w * 9, v * 3, v * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((v * 27) / 2, w * 9, v * 7, v * 7, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((v * 27) / 2, w * 9, v * 11, v * 11, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((v * 27) / 2, w * 9, v * 15, v * 15, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((-v * 9) / 2, w * 9, v * 3, v * 3, (PI * 5) / 3, (PI * 7) / 3); //v
  p1.arc((-v * 9) / 2, w * 9, v * 7, v * 7, (PI * 5) / 3, (PI * 7) / 3); //v
  p1.arc((-v * 9) / 2, w * 9, v * 11, v * 11, (PI * 5) / 3, (PI * 7) / 3); //v
  p1.arc((-v * 9) / 2, w * 9, v * 15, v * 15, (PI * 5) / 3, (PI * 7) / 3); //v
}
function bgtruchet() {
  p1 = createGraphics(csw, csh);
  q1 = createGraphics(csw, csh);
  u1 = createGraphics(csw, csh);
  p1.background(cb);
  z = f / random(16, 21);
  inum = ceil(csw / (z * 11)) + 1;
  jnum = ceil(csh / (z * 11)) + 1;
  swz = z / 3;
  p1.noFill();
  p1.stroke(cl);
  p1.strokeWeight(swz);
  for (let j = 0; j < jnum; j++) {
    for (let i = 0; i < inum; i++) {
      p1r = shuffle([0, PI / 2, PI, (PI * 3) / 2]);
      //p1r=shuffle([0]);
      p1.translate(i * z * 11, j * z * 11);
      p1.translate((z * 11) / 2, (z * 11) / 2);
      p1.rotate(p1r[0]);
      p1.translate((-z * 11) / 2, (-z * 11) / 2);
      rrb = shuffle(rrpa);
      eval(rrb[0]);
      p1.translate((z * 11) / 2, (z * 11) / 2);
      p1.rotate(-p1r[0]);
      p1.translate((-z * 11) / 2, (-z * 11) / 2);
      p1.translate(-i * z * 11, -j * z * 11);
    }
  }
}
function sqsign() {
  p1.ellipse((z * 11) / 2, (z * 11) / 2, z * 8);
  p1.line((z * 11) / 2, (z * 3) / 2, (z * 11) / 2, (z * 19) / 2);
  p1.line(
    (z * 11) / 2 + ((z * 2 * sqrt(2)) / 2) * cos((PI * 5) / 4),
    (z * 11) / 2 + ((z * 2 * sqrt(2)) / 2) * sin((PI * 5) / 4),
    (z * 11) / 2 + z * 4 * cos(PI / 4),
    (z * 11) / 2 + z * 4 * sin(PI / 4)
  );
  p1.line(
    (z * 11) / 2 + ((z * 2 * sqrt(2)) / 2) * cos((PI * 3) / 4),
    (z * 11) / 2 + ((z * 2 * sqrt(2)) / 2) * sin((PI * 3) / 4),
    (z * 11) / 2 + z * 4 * cos((PI * 7) / 4),
    (z * 11) / 2 + z * 4 * sin((PI * 7) / 4)
  );
  p1.arc((z * 7) / 2, (z * 11) / 2, z * 2.72, z * 2.72, PI / 4, (PI * 7) / 4);
  p1.ellipse((z * 7) / 2, (z * 11) / 2, z, z);
  p1.line(
    (z * 11) / 2 + z * 4 * cos(PI / 4),
    (z * 11) / 2 + z * 4 * sin(PI / 4),
    (z * 11) / 2 + z * 4 * cos((PI * 7) / 4),
    (z * 11) / 2 + z * 4 * sin((PI * 7) / 4)
  );
  p1.line(
    (z * 11) / 2 + z * 4 * cos(PI / 4),
    z * 5,
    (z * 11) / 2 + z * 4,
    z * 5
  );
  p1.line(
    (z * 11) / 2 + z * 4 * cos(PI / 4),
    z * 6,
    (z * 11) / 2 + z * 4,
    z * 6
  );
}
function p9ta() {
  p1.arc(z * 11, 0, z * 3, z * 3, PI / 2, PI);
  p1.arc(z * 11, z * 11, z * 3, z * 3, PI, (PI * 3) / 2);
  p1.arc(0, (z * 11) / 2, z * 4, z * 4, (PI * 3) / 2, (PI * 5) / 2);
  p1.arc(0, (z * 11) / 2, z * 8, z * 8, (PI * 3) / 2, (PI * 5) / 2);
  p1.arc(z * 11, (z * 11) / 2, z * 4, z * 4, PI / 2, (PI * 3) / 2);
  p1.arc((z * 11) / 2, 0, z * 4, z * 4, 0, PI);
  p1.arc((z * 11) / 2, z * 11, z * 4, z * 4, PI, PI * 2);
}
function p11ta() {
  p1.line((z * 7) / 2, 0, (z * 7) / 2, z * 11);
  p1.line((z * 11) / 2, 0, (z * 11) / 2, z * 11);
  p1.arc(0, 0, z * 3, z * 3, 0, PI / 2);
  p1.arc(0, z * 11, z * 3, z * 3, (PI * 3) / 2, PI * 2);
  p1.arc(z * 11, (z * 11) / 2, z * 4, z * 4, PI / 2, (PI * 3) / 2);
  p1.arc(z * 11, (z * 11) / 2, z * 8, z * 8, PI / 2, (PI * 3) / 2);
  p1.arc(0, (z * 11) / 2, z * 4, z * 4, (PI * 3) / 2, (PI * 5) / 2);
}
function p12ta() {
  p1.line((z * 7) / 2, 0, (z * 7) / 2, z * 11);
  p1.line((z * 11) / 2, 0, (z * 11) / 2, z * 11);
  p1.line((z * 15) / 2, 0, (z * 15) / 2, z * 11);
  p1.arc(0, 0, z * 3, z * 3, 0, PI / 2);
  p1.arc(0, z * 11, z * 3, z * 3, (PI * 3) / 2, PI * 2);
  p1.arc(z * 11, 0, z * 3, z * 3, PI / 2, PI);
  p1.arc(z * 11, z * 11, z * 3, z * 3, PI, (PI * 3) / 2);
  p1.arc(z * 11, (z * 11) / 2, z * 4, z * 4, PI / 2, (PI * 3) / 2);
  p1.arc(0, (z * 11) / 2, z * 4, z * 4, (PI * 3) / 2, (PI * 5) / 2);
}
function p13ta() {
  p1.line((z * 3) / 2, 0, (z * 3) / 2, z * 11);
  p1.line((z * 7) / 2, 0, (z * 7) / 2, z * 11);
  p1.line((z * 11) / 2, 0, (z * 11) / 2, z * 11);
  p1.line((z * 15) / 2, 0, (z * 15) / 2, z * 11);
  p1.line((z * 19) / 2, 0, (z * 19) / 2, z * 11);
}
function p10ta() {
  p1.arc(0, (z * 11) / 2, z * 4, z * 4, (PI * 3) / 2, (PI * 5) / 2);
  p1.arc(0, (z * 11) / 2, z * 8, z * 8, (PI * 3) / 2, (PI * 5) / 2);
  p1.arc(z * 11, (z * 11) / 2, z * 4, z * 4, PI / 2, (PI * 3) / 2);
  p1.arc(z * 11, (z * 11) / 2, z * 8, z * 8, PI / 2, (PI * 3) / 2);
  p1.arc((z * 11) / 2, 0, z * 4, z * 4, 0, PI);
  p1.arc((z * 11) / 2, z * 11, z * 4, z * 4, PI, PI * 2);
}
function p8ta() {
  p1.arc(0, 0, z * 3, z * 3, 0, PI / 2);
  p1.arc(0, 0, z * 7, z * 7, 0, PI / 2);
  p1.arc(0, 0, z * 11, z * 11, 0, PI / 2);
  p1.arc(0, z * 11, z * 3, z * 3, (PI * 3) / 2, PI * 2);
  p1.arc(0, z * 11, z * 7, z * 7, (PI * 3) / 2, PI * 2);
  p1.arc(z * 11, (z * 11) / 2, z * 4, z * 4, PI / 2, (PI * 3) / 2);
  p1.arc(z * 11, (z * 11) / 2, z * 8, z * 8, PI / 2, (PI * 3) / 2);
}
function p7ta() {
  p1.arc(0, 0, z * 3, z * 3, 0, PI / 2);
  p1.arc(0, 0, z * 7, z * 7, 0, PI / 2);
  p1.arc(0, 0, z * 11, z * 11, 0, PI / 2);
  p1.arc(0, 0, z * 15, z * 15, 0, PI / 2);
  p1.arc(0, z * 11, z * 3, z * 3, (PI * 3) / 2, PI * 2);
  p1.arc((z * 11) / 2, z * 11, z * 4, z * 4, PI, PI * 2);
  p1.line((z * 19) / 2, 0, (z * 19) / 2, z * 11);
}
function p6ta() {
  p1.arc(0, 0, z * 3, z * 3, 0, PI / 2);
  p1.arc(0, 0, z * 7, z * 7, 0, PI / 2);
  p1.arc(0, 0, z * 11, z * 11, 0, PI / 2);
  p1.arc(0, 0, z * 15, z * 15, 0, PI / 2);
  p1.arc(z * 11, z * 11, z * 3, z * 3, PI, (PI * 3) / 2);
  p1.arc(z * 11, z * 11, z * 7, z * 7, PI, (PI * 3) / 2);
  p1.arc(z * 11, z * 11, z * 11, z * 11, PI, (PI * 3) / 2);
  p1.arc(0, z * 11, z * 3, z * 3, (PI * 3) / 2, PI * 2);
  p1.arc(z * 11, 0, z * 3, z * 3, PI / 2, PI);
}
function p5ta() {
  p1.arc(0, 0, z * 3, z * 3, 0, PI / 2);
  p1.arc(0, 0, z * 7, z * 7, 0, PI / 2);
  p1.arc(0, 0, z * 11, z * 11, 0, PI / 2);
  p1.arc(0, 0, z * 15, z * 15, 0, PI / 2);
  p1.arc(z * 11, z * 11, z * 3, z * 3, PI, (PI * 3) / 2);
  p1.arc(z * 11, 0, z * 3, z * 3, PI / 2, PI);
  p1.arc(0, z * 11, z * 3, z * 3, (PI * 3) / 2, PI * 2);
  p1.arc(z * 11, (z * 11) / 2, z * 4, z * 4, PI / 2, (PI * 3) / 2);
  p1.arc((z * 11) / 2, z * 11, z * 4, z * 4, PI, PI * 2);
}
function p4ta() {
  p1.arc(0, 0, z * 3, z * 3, 0, PI / 2);
  p1.arc(0, 0, z * 7, z * 7, 0, PI / 2);
  p1.arc(0, 0, z * 11, z * 11, 0, PI / 2);
  p1.arc(0, 0, z * 15, z * 15, 0, PI / 2);
  p1.arc(0, 0, z * 19, z * 19, 0, PI / 2);
  p1.arc(z * 11, z * 11, z * 3, z * 3, PI, (PI * 3) / 2);
  p1.arc(z * 11, z * 11, z * 7, z * 7, PI, (PI * 3) / 2);
}
function p3ta() {
  p1.arc(0, 0, z * 3, z * 3, 0, PI / 2);
  p1.arc(0, 0, z * 7, z * 7, 0, PI / 2);
  p1.arc(z * 11, z * 11, z * 3, z * 3, PI, (PI * 3) / 2);
  p1.arc(z * 11, 0, z * 3, z * 3, PI / 2, PI);
  p1.arc(0, z * 11, z * 3, z * 3, (PI * 3) / 2, PI * 2);
  p1.arc(0, z * 11, z * 7, z * 7, (PI * 3) / 2, PI * 2);
  p1.line((z * 15) / 2, 0, (z * 15) / 2, z * 11);
  p1.line((z * 11) / 2, 0, (z * 11) / 2, z * 11);
  p1.arc(z * 11, (z * 11) / 2, z * 4, z * 4, PI / 2, (PI * 3) / 2);
}
function p1ta() {
  p1.arc(0, 0, z * 3, z * 3, 0, PI / 2);
  p1.arc(0, 0, z * 7, z * 7, 0, PI / 2);
  p1.arc(0, 0, z * 11, z * 11, 0, PI / 2);
  p1.arc(z * 11, z * 11, z * 3, z * 3, PI, (PI * 3) / 2);
  p1.arc(z * 11, z * 11, z * 7, z * 7, PI, (PI * 3) / 2);
  p1.arc(z * 11, z * 11, z * 11, z * 11, PI, (PI * 3) / 2);
  p1.arc(z * 11, 0, z * 3, z * 3, PI / 2, PI);
  p1.arc(z * 11, 0, z * 7, z * 7, PI / 2, PI);
  p1.arc(0, z * 11, z * 3, z * 3, (PI * 3) / 2, PI * 2);
  p1.arc(0, z * 11, z * 7, z * 7, (PI * 3) / 2, PI * 2);
}
function p2ta() {
  p1.arc(0, 0, z * 3, z * 3, 0, PI / 2);
  p1.arc(0, 0, z * 19, z * 19, 0, PI / 2);
  p1.arc(z * 11, z * 11, z * 3, z * 3, PI, (PI * 3) / 2);
  p1.arc(z * 11, z * 11, z * 7, z * 7, PI, (PI * 3) / 2);
  p1.arc((z * 11) / 2, 0, z * 4, z * 4, 0, PI);
  p1.arc(0, (z * 11) / 2, z * 4, z * 4, (PI * 3) / 2, (PI * 5) / 2);
}

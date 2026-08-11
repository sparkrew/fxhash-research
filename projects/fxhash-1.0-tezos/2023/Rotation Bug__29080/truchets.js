function truch2() {
  f = (5 * cs * scl) / (6 * divw);
  swf /= 1.2;
  g = (f * sqrt(3)) / 2;
  a=int(random(1,7));
  b=int(random(1,7));
  s1.translate(-f * a, -f * b);
  s2.translate(-f * a, -f * b);
  s3.translate(-f * a, -f * b);
  s4.translate(-f * a, -f * b);
  p1.translate(-f * a, -f * b);
  q1.translate(-f * a, -f * b);
  u1.translate(-f * a, -f * b);
  inum = ceil((csw + f * a) / (f * 27) + 1);
  jnum = ceil((csh + f * b) / (g * 18)) + 1;
  u1.noFill();
  u1.stroke("#00000007");
  u1.strokeCap(SQUARE);
  for (let j = 0; j < jnum; j++) {
    for (let i = 0; i < inum; i++) {
      h1r = shuffle([0]); //,PI*2/3,PI*4/3]);
      h1r = shuffle([0, (PI * 2) / 3, (PI * 4) / 3]);
      s1.translate(i * f * 27, j * g * 18);
      s1.translate((f * 9) / 2, g * 9);
      s1.rotate(h1r[0]);
      s1.translate((-f * 9) / 2, -g * 9);
      s2.translate(i * f * 27, j * g * 18);
      s2.translate((f * 9) / 2, g * 9);
      s2.rotate(h1r[0]);
      s2.translate((-f * 9) / 2, -g * 9);
      s3.translate(i * f * 27, j * g * 18);
      s3.translate((f * 9) / 2, g * 9);
      s3.rotate(h1r[0]);
      s3.translate((-f * 9) / 2, -g * 9);
      s4.translate(i * f * 27, j * g * 18);
      s4.translate((f * 9) / 2, g * 9);
      s4.rotate(h1r[0]);
      s4.translate((-f * 9) / 2, -g * 9);
      p1.translate(i * f * 27, j * g * 18);
      p1.translate((f * 9) / 2, g * 9);
      p1.rotate(h1r[0]);
      p1.translate((-f * 9) / 2, -g * 9);
      u1.translate(i * f * 27, j * g * 18);
      u1.translate((f * 9) / 2, g * 9);
      q1.translate(i * f * 27, j * g * 18);
      q1.translate((f * 9) / 2, g * 9);
      if (fbug == "Yes") {
        q1.rotate(h1r[1]);
        u1.rotate(h1r[1]);
      }
      if (fbug == "No") {
        q1.rotate(h1r[0]);
        u1.rotate(h1r[0]);
      }
      q1.translate((-f * 9) / 2, -g * 9);
      u1.translate((-f * 9) / 2, -g * 9);
      hra = shuffle(hrsa);
      eval(hra[0]);
      s1.translate((f * 9) / 2, g * 9);
      s1.rotate(-h1r[0]);
      s1.translate((-f * 9) / 2, -g * 9);
      s1.translate(-i * f * 27, -j * g * 18);
      s2.translate((f * 9) / 2, g * 9);
      s2.rotate(-h1r[0]);
      s2.translate((-f * 9) / 2, -g * 9);
      s2.translate(-i * f * 27, -j * g * 18);
      s3.translate((f * 9) / 2, g * 9);
      s3.rotate(-h1r[0]);
      s3.translate((-f * 9) / 2, -g * 9);
      s3.translate(-i * f * 27, -j * g * 18);
      s4.translate((f * 9) / 2, g * 9);
      s4.rotate(-h1r[0]);
      s4.translate((-f * 9) / 2, -g * 9);
      s4.translate(-i * f * 27, -j * g * 18);
      p1.translate((f * 9) / 2, g * 9);
      p1.rotate(-h1r[0]);
      p1.translate((-f * 9) / 2, -g * 9);
      p1.translate(-i * f * 27, -j * g * 18);
      u1.translate((f * 9) / 2, g * 9);
      q1.translate((f * 9) / 2, g * 9);
      if (fbug == "Yes") {
        q1.rotate(-h1r[1]);
        u1.rotate(-h1r[1]);
      }
      if (fbug == "No") {
        q1.rotate(-h1r[0]);
        u1.rotate(-h1r[0]);
      }
      q1.translate((-f * 9) / 2, -g * 9);
      q1.translate(-i * f * 27, -j * g * 18);
      u1.translate((-f * 9) / 2, -g * 9);
      u1.translate(-i * f * 27, -j * g * 18);
    }
  }
  for (let j = 0; j < jnum; j++) {
    for (let i = 0; i < inum; i++) {
      h1r = shuffle([0]);
      h1r = shuffle([0, (PI * 2) / 3, (PI * 4) / 3]);
      s1.translate((f * 27) / 2 + i * f * 27, -g * 9 + j * g * 18);
      s1.translate((f * 9) / 2, g * 9);
      s1.rotate(h1r[0]);
      s1.translate((-f * 9) / 2, -g * 9);
      s2.translate((f * 27) / 2 + i * f * 27, -g * 9 + j * g * 18);
      s2.translate((f * 9) / 2, g * 9);
      s2.rotate(h1r[0]);
      s2.translate((-f * 9) / 2, -g * 9);
      s3.translate((f * 27) / 2 + i * f * 27, -g * 9 + j * g * 18);
      s3.translate((f * 9) / 2, g * 9);
      s3.rotate(h1r[0]);
      s3.translate((-f * 9) / 2, -g * 9);
      s4.translate((f * 27) / 2 + i * f * 27, -g * 9 + j * g * 18);
      s4.translate((f * 9) / 2, g * 9);
      s4.rotate(h1r[0]);
      s4.translate((-f * 9) / 2, -g * 9);
      p1.translate((f * 27) / 2 + i * f * 27, -g * 9 + j * g * 18);
      p1.translate((f * 9) / 2, g * 9);
      p1.rotate(h1r[0]);
      p1.translate((-f * 9) / 2, -g * 9);
      u1.translate((f * 27) / 2 + i * f * 27, -g * 9 + j * g * 18);
      u1.translate((f * 9) / 2, g * 9);
      q1.translate((f * 27) / 2 + i * f * 27, -g * 9 + j * g * 18);
      q1.translate((f * 9) / 2, g * 9);
      if (fbug == "Yes") {
        q1.rotate(h1r[1]);
        u1.rotate(h1r[1]);
      }
      if (fbug == "No") {
        q1.rotate(h1r[0]);
        u1.rotate(h1r[0]);
      }
      q1.translate((-f * 9) / 2, -g * 9);
      u1.translate((-f * 9) / 2, -g * 9);
      hra = shuffle(hrsa);
      eval(hra[0]);
      s1.translate((f * 9) / 2, g * 9);
      s1.rotate(-h1r[0]);
      s1.translate((-f * 9) / 2, -g * 9);
      s1.translate((-f * 27) / 2 - i * f * 27, g * 9 - j * g * 18);
      s2.translate((f * 9) / 2, g * 9);
      s2.rotate(-h1r[0]);
      s2.translate((-f * 9) / 2, -g * 9);
      s2.translate((-f * 27) / 2 - i * f * 27, g * 9 - j * g * 18);
      s3.translate((f * 9) / 2, g * 9);
      s3.rotate(-h1r[0]);
      s3.translate((-f * 9) / 2, -g * 9);
      s3.translate((-f * 27) / 2 - i * f * 27, g * 9 - j * g * 18);
      s4.translate((f * 9) / 2, g * 9);
      s4.rotate(-h1r[0]);
      s4.translate((-f * 9) / 2, -g * 9);
      s4.translate((-f * 27) / 2 - i * f * 27, g * 9 - j * g * 18);
      p1.translate((f * 9) / 2, g * 9);
      p1.rotate(-h1r[0]);
      p1.translate((-f * 9) / 2, -g * 9);
      p1.translate((-f * 27) / 2 - i * f * 27, g * 9 - j * g * 18);
      u1.translate((f * 9) / 2, g * 9);
      q1.translate((f * 9) / 2, g * 9);
      if (fbug == "Yes") {
        q1.rotate(-h1r[1]);
        u1.rotate(-h1r[1]);
      }
      if (fbug == "No") {
        q1.rotate(-h1r[0]);
        u1.rotate(-h1r[0]);
      }
      q1.translate((-f * 9) / 2, -g * 9);
      q1.translate((-f * 27) / 2 - i * f * 27, g * 9 - j * g * 18);
      u1.translate((-f * 9) / 2, -g * 9);
      u1.translate((-f * 27) / 2 - i * f * 27, g * 9 - j * g * 18);
    }
  }
  s1.translate(f * a, f * b);
  s2.translate(f * a, f * b);
  s3.translate(f * a, f * b);
  s4.translate(f * a, f * b);
  p1.translate(f * a, f * b);
  q1.translate(f * a, f * b);
  u1.translate(f * a, f * b);
}
function h7ta() {
  s4.erase();
  s4.stroke(0);
  s4.noFill();
  s4.strokeWeight(f * 5);
  s4.arc((f * 27) / 2, g * 9, f * 7, f * 7, (PI * 2) / 3, (PI * 4) / 3); //b
  s4.arc((-f * 9) / 2, g * 9, f * 11, f * 11, (PI * 5) / 3, (PI * 7) / 3); //f
  s4.noStroke();
  s4.fill(0);
  s4.ellipse((f * 3) / 2, 0, f);
  s4.ellipse((f * 3) / 2, g * 18, f);
  s4.ellipse((f * 7) / 2, 0, f);
  s4.ellipse((f * 7) / 2, g * 18, f);
  s4.ellipse((f * 11) / 2, 0, f);
  s4.ellipse((f * 11) / 2, g * 18, f);
  s3.erase();
  s3.stroke(0);
  s3.noFill();
  s3.strokeWeight(f * 3);
  s3.arc((f * 27) / 2, g * 9, f * 5, f * 5, (PI * 2) / 3, (PI * 4) / 3); //b
  s3.arc((-f * 9) / 2, g * 9, f * 13, f * 13, (PI * 5) / 3, (PI * 7) / 3); //f
  s3.noStroke();
  s3.fill(0);
  s3.ellipse((f * 3) / 2, 0, f);
  s3.ellipse((f * 3) / 2, g * 18, f);
  s3.ellipse((f * 7) / 2, 0, f);
  s3.ellipse((f * 7) / 2, g * 18, f);
  s2.erase();
  s2.stroke(0);
  s2.noFill();
  s2.strokeWeight(f);
  s2.arc((f * 27) / 2, g * 9, f * 3, f * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  s2.arc((-f * 9) / 2, g * 9, f * 15, f * 15, (PI * 5) / 3, (PI * 7) / 3); //f
  s2.noStroke();
  s2.fill(0);
  s2.ellipse((f * 3) / 2, 0, f);
  s2.ellipse((f * 3) / 2, g * 18, f);
  p1.erase();
  p1.stroke(0);
  p1.noFill();
  p1.strokeWeight(f);
  p1.arc((f * 27) / 2, g * 9, f * 3, f * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((f * 27) / 2, g * 9, f * 7, f * 7, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((f * 27) / 2, g * 9, f * 11, f * 11, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((f * 27) / 2, g * 9, f * 15, f * 15, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((-f * 9) / 2, g * 9, f * 3, f * 3, (PI * 5) / 3, (PI * 7) / 3); //f
  p1.arc((-f * 9) / 2, g * 9, f * 7, f * 7, (PI * 5) / 3, (PI * 7) / 3); //f
  p1.arc((-f * 9) / 2, g * 9, f * 11, f * 11, (PI * 5) / 3, (PI * 7) / 3); //f
  p1.arc((-f * 9) / 2, g * 9, f * 15, f * 15, (PI * 5) / 3, (PI * 7) / 3); //f
  p1.fill(0);
  p1.noStroke();
  p1.ellipse((f * 3) / 2, 0, f);
  p1.ellipse((f * 3) / 2, g * 18, f);
  p1.ellipse((f * 7) / 2, 0, f);
  p1.ellipse((f * 7) / 2, g * 18, f);
  p1.ellipse((f * 11) / 2, 0, f);
  p1.ellipse((f * 11) / 2, g * 18, f);
  p1.ellipse((f * 15) / 2, 0, f);
  p1.ellipse((f * 15) / 2, g * 18, f);
  q1.stroke(0);if(fbgc=="Dark")q1.stroke("#ffffff");
  q1.noFill();
  q1.strokeWeight(swf);if(fbgc=="Dark")q1.strokeWeight(swf*3/4);
  q1.arc((f * 27) / 2, g * 9, f * 2, f * 2, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 4, f * 4, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 6, f * 6, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 8, f * 8, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 10, f * 10, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 12, f * 12, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 14, f * 14, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 16, f * 16, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 3) / 2, 0, f, f, 0, PI); //ad
  q1.arc((f * 7) / 2, 0, f, f, 0, PI); //ad
  q1.arc((f * 11) / 2, 0, f, f, 0, PI); //ad
  q1.arc((f * 15) / 2, 0, f, f, 0, PI); //ad
  q1.arc((f * 3) / 2, g * 18, f, f, PI, PI * 2); //ec
  q1.arc((f * 7) / 2, g * 18, f, f, PI, PI * 2); //ec
  q1.arc((f * 11) / 2, g * 18, f, f, PI, PI * 2); //ec
  q1.arc((f * 15) / 2, g * 18, f, f, PI, PI * 2); //ec
  q1.arc((-f * 9) / 2, g * 9, f * 2, f * 2, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 4, f * 4, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 6, f * 6, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 8, f * 8, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 10, f * 10, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 12, f * 12, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 14, f * 14, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 16, f * 16, (PI * 5) / 3, (PI * 7) / 3); //f
  for (i = 0; i < 20; i++) {
    u1.strokeWeight(f / 2 - (f / 40) * i);
    u1.arc((f * 27) / 2, g * 9, f * 2, f * 2, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 4, f * 4, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 6, f * 6, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 8, f * 8, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 10, f * 10, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 12, f * 12, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 14, f * 14, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 16, f * 16, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 3) / 2, 0, f, f, 0, PI); //ad
    u1.arc((f * 7) / 2, 0, f, f, 0, PI); //ad
    u1.arc((f * 11) / 2, 0, f, f, 0, PI); //ad
    u1.arc((f * 15) / 2, 0, f, f, 0, PI); //ad
    u1.arc((f * 3) / 2, g * 18, f, f, PI, PI * 2); //ec
    u1.arc((f * 7) / 2, g * 18, f, f, PI, PI * 2); //ec
    u1.arc((f * 11) / 2, g * 18, f, f, PI, PI * 2); //ec
    u1.arc((f * 15) / 2, g * 18, f, f, PI, PI * 2); //ec
    u1.arc((-f * 9) / 2, g * 9, f * 2, f * 2, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 4, f * 4, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 6, f * 6, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 8, f * 8, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 10, f * 10, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 12, f * 12, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 14, f * 14, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 16, f * 16, (PI * 5) / 3, (PI * 7) / 3); //f
  }
}
function h5ta() {
  s4.erase();
  s4.stroke(0);
  s4.noFill();
  s4.strokeWeight(f);
  s4.arc((-f * 9) / 2, g * 9, f * 7, f * 7, (PI * 5) / 3, (PI * 7) / 3); //f
  s4.strokeWeight(f * 3);
  s4.arc((f * 27) / 2, g * 9, f * 5, f * 5, (PI * 2) / 3, (PI * 4) / 3); //b
  s4.strokeWeight(f * 5);
  s4.line((f * 7) / 2, 0, (f * 7) / 2, g * 18);
  s4.noStroke();
  s4.fill(0);
  s4.ellipse((f * 43) / 4, (g * 7) / 2, f);
  s4.ellipse((f * 43) / 4, (g * 29) / 2, f);
  s4.ellipse((-f * 3) / 4, (g * 3) / 2, f);
  s4.ellipse((-f * 7) / 4, (g * 7) / 2, f);
  s4.ellipse((-f * 3) / 4, (g * 33) / 2, f);
  s4.ellipse((-f * 7) / 4, (g * 29) / 2, f);
  s3.erase();
  s3.stroke(0);
  s3.noFill();
  s3.strokeWeight(f * 3);
  s3.arc((f * 27) / 2, g * 9, f * 5, f * 5, (PI * 2) / 3, (PI * 4) / 3); //b
  s3.line((f * 5) / 2, 0, (f * 5) / 2, g * 18);
  s3.noStroke();
  s3.fill(0);
  s3.ellipse((-f * 3) / 4, (g * 3) / 2, f);
  s3.ellipse((-f * 7) / 4, (g * 7) / 2, f);
  s3.ellipse((-f * 3) / 4, (g * 33) / 2, f);
  s3.ellipse((-f * 7) / 4, (g * 29) / 2, f);
  s2.erase();
  s2.stroke(0);
  s2.noFill();
  s2.strokeWeight(f);
  s2.arc((f * 27) / 2, g * 9, f * 3, f * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  s2.line((f * 3) / 2, 0, (f * 3) / 2, g * 18);
  s2.noStroke();
  s2.fill(0);
  s2.ellipse((-f * 3) / 4, (g * 3) / 2, f);
  s2.ellipse((-f * 3) / 4, (g * 33) / 2, f);
  p1.erase();
  p1.stroke(0);
  p1.noFill();
  p1.strokeWeight(f);
  p1.arc((f * 27) / 2, g * 9, f * 3, f * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((f * 27) / 2, g * 9, f * 7, f * 7, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((-f * 9) / 2, g * 9, f * 3, f * 3, (PI * 5) / 3, (PI * 7) / 3); //f
  p1.arc((-f * 9) / 2, g * 9, f * 7, f * 7, (PI * 5) / 3, (PI * 7) / 3); //f
  p1.line((f * 3) / 2, 0, (f * 3) / 2, g * 18);
  p1.line((f * 7) / 2, 0, (f * 7) / 2, g * 18);
  p1.line((f * 11) / 2, 0, (f * 11) / 2, g * 18);
  p1.line((f * 15) / 2, 0, (f * 15) / 2, g * 18);
  p1.noStroke();
  p1.fill(0);
  p1.arc((-f * 3) / 4, (g * 3) / 2, f, f, (PI * 5) / 3, (PI * 8) / 3); //fa
  p1.arc((-f * 7) / 4, (g * 7) / 2, f, f, (PI * 5) / 3, (PI * 8) / 3); //fa
  p1.arc((-f * 3) / 4, (g * 33) / 2, f, f, (PI * 4) / 3, (PI * 7) / 3); //cf
  p1.arc((-f * 7) / 4, (g * 29) / 2, f, f, (PI * 4) / 3, (PI * 7) / 3); //cf
  p1.arc((f * 39) / 4, (g * 3) / 2, f, f, PI / 3, (PI * 4) / 3); //db
  p1.arc((f * 43) / 4, (g * 7) / 2, f, f, PI / 3, (PI * 4) / 3); //db
  p1.arc((f * 39) / 4, (g * 33) / 2, f, f, (PI * 2) / 3, (PI * 5) / 3); //be
  p1.arc((f * 43) / 4, (g * 29) / 2, f, f, (PI * 2) / 3, (PI * 5) / 3); //be
  q1.stroke(0);if(fbgc=="Dark")q1.stroke("#ffffff");
  q1.noFill();
  q1.strokeWeight(swf);if(fbgc=="Dark")q1.strokeWeight(swf*3/4);
  q1.arc((-f * 3) / 4, (g * 3) / 2, f, f, (PI * 5) / 3, (PI * 8) / 3); //fa
  q1.arc((-f * 7) / 4, (g * 7) / 2, f, f, (PI * 5) / 3, (PI * 8) / 3); //fa
  q1.arc((-f * 3) / 4, (g * 33) / 2, f, f, (PI * 4) / 3, (PI * 7) / 3); //cf
  q1.arc((-f * 7) / 4, (g * 29) / 2, f, f, (PI * 4) / 3, (PI * 7) / 3); //cf
  q1.arc((f * 39) / 4, (g * 3) / 2, f, f, PI / 3, (PI * 4) / 3); //db
  q1.arc((f * 43) / 4, (g * 7) / 2, f, f, PI / 3, (PI * 4) / 3); //db
  q1.arc((f * 39) / 4, (g * 33) / 2, f, f, (PI * 2) / 3, (PI * 5) / 3); //be
  q1.arc((f * 43) / 4, (g * 29) / 2, f, f, (PI * 2) / 3, (PI * 5) / 3); //be
  q1.arc((f * 27) / 2, g * 9, f * 2, f * 2, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 4, f * 4, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 6, f * 6, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 8, f * 8, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((-f * 9) / 2, g * 9, f * 2, f * 2, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 4, f * 4, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 6, f * 6, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 8, f * 8, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.line(f * 1, 0, f * 1, g * 18);
  q1.line(f * 2, 0, f * 2, g * 18);
  q1.line(f * 3, 0, f * 3, g * 18);
  q1.line(f * 4, 0, f * 4, g * 18);
  q1.line(f * 5, 0, f * 5, g * 18);
  q1.line(f * 6, 0, f * 6, g * 18);
  q1.line(f * 7, 0, f * 7, g * 18);
  q1.line(f * 8, 0, f * 8, g * 18);
  for (i = 0; i < 20; i++) {
    u1.strokeWeight(f / 2 - (f / 40) * i);
    u1.arc((-f * 3) / 4, (g * 3) / 2, f, f, (PI * 5) / 3, (PI * 8) / 3); //fa
    u1.arc((-f * 7) / 4, (g * 7) / 2, f, f, (PI * 5) / 3, (PI * 8) / 3); //fa
    u1.arc((-f * 3) / 4, (g * 33) / 2, f, f, (PI * 4) / 3, (PI * 7) / 3); //cf
    u1.arc((-f * 7) / 4, (g * 29) / 2, f, f, (PI * 4) / 3, (PI * 7) / 3); //cf
    u1.arc((f * 39) / 4, (g * 3) / 2, f, f, PI / 3, (PI * 4) / 3); //db
    u1.arc((f * 43) / 4, (g * 7) / 2, f, f, PI / 3, (PI * 4) / 3); //db
    u1.arc((f * 39) / 4, (g * 33) / 2, f, f, (PI * 2) / 3, (PI * 5) / 3); //be
    u1.arc((f * 43) / 4, (g * 29) / 2, f, f, (PI * 2) / 3, (PI * 5) / 3); //be
    u1.arc((f * 27) / 2, g * 9, f * 2, f * 2, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 4, f * 4, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 6, f * 6, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 8, f * 8, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((-f * 9) / 2, g * 9, f * 2, f * 2, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 4, f * 4, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 6, f * 6, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 8, f * 8, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.line(f * 1, 0, f * 1, g * 18);
    u1.line(f * 2, 0, f * 2, g * 18);
    u1.line(f * 3, 0, f * 3, g * 18);
    u1.line(f * 4, 0, f * 4, g * 18);
    u1.line(f * 5, 0, f * 5, g * 18);
    u1.line(f * 6, 0, f * 6, g * 18);
    u1.line(f * 7, 0, f * 7, g * 18);
    u1.line(f * 8, 0, f * 8, g * 18);
  }
}
function h4ta() {
  s4.erase();
  s4.stroke(0);
  s4.noFill();
  s4.strokeWeight(f);
  s4.arc(0, 0, f * 3, f * 3, 0, (PI * 2) / 3); //a
  s4.arc(0, g * 18, f * 3, f * 3, (PI * 4) / 3, PI * 2); //c
  s4.strokeWeight(f * 5);
  s4.arc((f * 27) / 2, g * 9, f * 7, f * 7, (PI * 2) / 3, (PI * 4) / 3); //b
  s4.strokeWeight(f * 4);
  s4.arc((-f * 9) / 2, g * 9, f * 8, f * 8, (PI * 5) / 3, (PI * 7) / 3); //f
  s4.strokeWeight(f * 3);
  s4.line((f * 9) / 2, 0, (f * 9) / 2, g * 18);
  s3.erase();
  s3.stroke(0);
  s3.noFill();
  s3.strokeWeight(f);
  s3.arc(0, 0, f * 3, f * 3, 0, (PI * 2) / 3); //a
  s3.arc(0, g * 18, f * 3, f * 3, (PI * 4) / 3, PI * 2); //c
  s3.arc((-f * 9) / 2, g * 9, f * 11, f * 11, (PI * 5) / 3, (PI * 7) / 3); //f
  s3.line((f * 7) / 2, 0, (f * 7) / 2, g * 18);
  s3.strokeWeight(f * 3);
  s3.arc((f * 27) / 2, g * 9, f * 5, f * 5, (PI * 2) / 3, (PI * 4) / 3); //b
  s2.erase();
  s2.stroke(0);
  s2.noFill();
  s2.strokeWeight(f);
  s2.arc(0, 0, f * 3, f * 3, 0, (PI * 2) / 3); //a
  s2.arc((f * 27) / 2, g * 9, f * 3, f * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  s2.arc(0, g * 18, f * 3, f * 3, (PI * 4) / 3, PI * 2); //c
  p1.erase();
  p1.stroke(0);
  p1.noFill();
  p1.strokeWeight(f);
  p1.arc(0, 0, f * 3, f * 3, 0, (PI * 2) / 3); //a
  p1.arc((f * 27) / 2, g * 9, f * 3, f * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((f * 27) / 2, g * 9, f * 7, f * 7, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((f * 27) / 2, g * 9, f * 11, f * 11, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc(0, g * 18, f * 3, f * 3, (PI * 4) / 3, PI * 2); //c
  p1.arc(f * 9, 0, f * 3, f * 3, PI / 3, PI); //d
  p1.arc(f * 9, g * 18, f * 3, f * 3, PI, (PI * 5) / 3); //e
  p1.arc((-f * 9) / 2, g * 9, f * 3, f * 3, (PI * 5) / 3, (PI * 7) / 3); //f
  p1.arc((-f * 9) / 2, g * 9, f * 7, f * 7, (PI * 5) / 3, (PI * 7) / 3); //f
  p1.arc((-f * 9) / 2, g * 9, f * 11, f * 11, (PI * 5) / 3, (PI * 7) / 3); //f
  p1.line((f * 7) / 2, 0, (f * 7) / 2, g * 18);
  p1.line((f * 11) / 2, 0, (f * 11) / 2, g * 18);
  q1.stroke(0);if(fbgc=="Dark")q1.stroke("#ffffff");
  q1.noFill();
  q1.strokeWeight(swf);if(fbgc=="Dark")q1.strokeWeight(swf*3/4);
  q1.arc(0, 0, f * 2, f * 2, 0, (PI * 2) / 3); //a
  q1.arc(0, 0, f * 4, f * 4, 0, (PI * 2) / 3); //a
  q1.arc((f * 27) / 2, g * 9, f * 2, f * 2, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 4, f * 4, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 6, f * 6, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 8, f * 8, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 10, f * 10, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 12, f * 12, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc(0, g * 18, f * 2, f * 2, (PI * 4) / 3, PI * 2); //c
  q1.arc(0, g * 18, f * 4, f * 4, (PI * 4) / 3, PI * 2); //c
  q1.arc(f * 9, 0, f * 2, f * 2, PI / 3, PI); //d
  q1.arc(f * 9, 0, f * 4, f * 4, PI / 3, PI); //d
  q1.arc(f * 9, g * 18, f * 2, f * 2, PI, (PI * 5) / 3); //e
  q1.arc(f * 9, g * 18, f * 4, f * 4, PI, (PI * 5) / 3); //e
  q1.arc((-f * 9) / 2, g * 9, f * 2, f * 2, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 4, f * 4, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 6, f * 6, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 8, f * 8, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 10, f * 10, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 12, f * 12, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.line(f * 3, 0, f * 3, g * 18);
  q1.line(f * 4, 0, f * 4, g * 18);
  q1.line(f * 5, 0, f * 5, g * 18);
  q1.line(f * 6, 0, f * 6, g * 18);
  for (i = 0; i < 20; i++) {
    u1.strokeWeight(f / 2 - (f / 40) * i);
    u1.arc(0, 0, f * 2, f * 2, 0, (PI * 2) / 3); //a
    u1.arc(0, 0, f * 4, f * 4, 0, (PI * 2) / 3); //a
    u1.arc((f * 27) / 2, g * 9, f * 2, f * 2, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 4, f * 4, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 6, f * 6, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 8, f * 8, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 10, f * 10, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 12, f * 12, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc(0, g * 18, f * 2, f * 2, (PI * 4) / 3, PI * 2); //c
    u1.arc(0, g * 18, f * 4, f * 4, (PI * 4) / 3, PI * 2); //c
    u1.arc(f * 9, 0, f * 2, f * 2, PI / 3, PI); //d
    u1.arc(f * 9, 0, f * 4, f * 4, PI / 3, PI); //d
    u1.arc(f * 9, g * 18, f * 2, f * 2, PI, (PI * 5) / 3); //e
    u1.arc(f * 9, g * 18, f * 4, f * 4, PI, (PI * 5) / 3); //e
    u1.arc((-f * 9) / 2, g * 9, f * 2, f * 2, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 4, f * 4, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 6, f * 6, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 8, f * 8, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 10, f * 10, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 12, f * 12, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.line(f * 3, 0, f * 3, g * 18);
    u1.line(f * 4, 0, f * 4, g * 18);
    u1.line(f * 5, 0, f * 5, g * 18);
    u1.line(f * 6, 0, f * 6, g * 18);
  }
}
function h3ta() {
  s4.erase();
  s4.stroke(0);
  s4.noFill();
  s4.strokeWeight(f * 5);
  s4.arc(0, 0, f * 7, f * 7, 0, (PI * 2) / 3); //a
  s4.arc((f * 27) / 2, g * 9, f * 7, f * 7, (PI * 2) / 3, (PI * 4) / 3); //b
  s4.arc(0, g * 18, f * 7, f * 7, (PI * 4) / 3, PI * 2); //c
  s3.erase();
  s3.stroke(0);
  s3.noFill();
  s3.strokeWeight(f * 3);
  s3.arc(0, 0, f * 5, f * 5, 0, (PI * 2) / 3); //a
  s3.arc((f * 27) / 2, g * 9, f * 5, f * 5, (PI * 2) / 3, (PI * 4) / 3); //b
  s3.arc(0, g * 18, f * 5, f * 5, (PI * 4) / 3, PI * 2); //c
  s3.strokeWeight(f);
  s3.arc((-f * 9) / 2, g * 9, f * 3, f * 3, (PI * 5) / 3, (PI * 7) / 3); //f
  s2.erase();
  s2.stroke(0);
  s2.noFill();
  s2.strokeWeight(f);
  s2.arc(0, 0, f * 3, f * 3, 0, (PI * 2) / 3); //a
  s2.arc((f * 27) / 2, g * 9, f * 3, f * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  s2.arc(0, g * 18, f * 3, f * 3, (PI * 4) / 3, PI * 2); //c
  p1.erase();
  p1.stroke(0);
  p1.noFill();
  p1.strokeWeight(f);
  p1.arc(0, 0, f * 3, f * 3, 0, (PI * 2) / 3); //a
  p1.arc(0, 0, f * 7, f * 7, 0, (PI * 2) / 3); //a
  p1.arc(0, 0, f * 11, f * 11, 0, (PI * 2) / 3); //a
  p1.arc((f * 27) / 2, g * 9, f * 3, f * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((f * 27) / 2, g * 9, f * 7, f * 7, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((f * 27) / 2, g * 9, f * 11, f * 11, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((f * 27) / 2, g * 9, f * 15, f * 15, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc(0, g * 18, f * 3, f * 3, (PI * 4) / 3, PI * 2); //c
  p1.arc(0, g * 18, f * 7, f * 7, (PI * 4) / 3, PI * 2); //c
  p1.arc(0, g * 18, f * 11, f * 11, (PI * 4) / 3, PI * 2); //c
  p1.arc((-f * 9) / 2, g * 9, f * 3, f * 3, (PI * 5) / 3, (PI * 7) / 3); //f
  p1.fill(0);
  p1.noStroke();
  p1.arc((f * 15) / 2, 0, f, f, 0, PI); //ad
  p1.arc((f * 15) / 2, g * 18, f, f, PI, PI * 2); //ec
  q1.stroke(0);if(fbgc=="Dark")q1.stroke("#ffffff");
  q1.noFill();
  q1.strokeWeight(swf);if(fbgc=="Dark")q1.strokeWeight(swf*3/4);
  q1.arc(0, 0, f * 2, f * 2, 0, (PI * 2) / 3); //a
  q1.arc(0, 0, f * 4, f * 4, 0, (PI * 2) / 3); //a
  q1.arc(0, 0, f * 6, f * 6, 0, (PI * 2) / 3); //a
  q1.arc(0, 0, f * 8, f * 8, 0, (PI * 2) / 3); //a
  q1.arc(0, 0, f * 10, f * 10, 0, (PI * 2) / 3); //a
  q1.arc(0, 0, f * 12, f * 12, 0, (PI * 2) / 3); //a
  q1.arc((f * 27) / 2, g * 9, f * 2, f * 2, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 4, f * 4, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 6, f * 6, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 8, f * 8, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 10, f * 10, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 12, f * 12, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 14, f * 14, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 16, f * 16, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc(0, g * 18, f * 2, f * 2, (PI * 4) / 3, PI * 2); //c
  q1.arc(0, g * 18, f * 4, f * 4, (PI * 4) / 3, PI * 2); //c
  q1.arc(0, g * 18, f * 6, f * 6, (PI * 4) / 3, PI * 2); //c
  q1.arc(0, g * 18, f * 8, f * 8, (PI * 4) / 3, PI * 2); //c
  q1.arc(0, g * 18, f * 10, f * 10, (PI * 4) / 3, PI * 2); //c
  q1.arc(0, g * 18, f * 12, f * 12, (PI * 4) / 3, PI * 2); //c
  q1.arc((f * 15) / 2, 0, f, f, 0, PI); //ad
  q1.arc((f * 15) / 2, g * 18, f, f, PI, PI * 2); //ec
  q1.arc((-f * 9) / 2, g * 9, f * 2, f * 2, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 4, f * 4, (PI * 5) / 3, (PI * 7) / 3); //f
  for (i = 0; i < 20; i++) {
    u1.strokeWeight(f / 2 - (f / 40) * i);
    u1.arc(0, 0, f * 2, f * 2, 0, (PI * 2) / 3); //a
    u1.arc(0, 0, f * 4, f * 4, 0, (PI * 2) / 3); //a
    u1.arc(0, 0, f * 6, f * 6, 0, (PI * 2) / 3); //a
    u1.arc(0, 0, f * 8, f * 8, 0, (PI * 2) / 3); //a
    u1.arc(0, 0, f * 10, f * 10, 0, (PI * 2) / 3); //a
    u1.arc(0, 0, f * 12, f * 12, 0, (PI * 2) / 3); //a
    u1.arc((f * 27) / 2, g * 9, f * 2, f * 2, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 4, f * 4, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 6, f * 6, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 8, f * 8, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 10, f * 10, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 12, f * 12, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 14, f * 14, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 16, f * 16, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc(0, g * 18, f * 2, f * 2, (PI * 4) / 3, PI * 2); //c
    u1.arc(0, g * 18, f * 4, f * 4, (PI * 4) / 3, PI * 2); //c
    u1.arc(0, g * 18, f * 6, f * 6, (PI * 4) / 3, PI * 2); //c
    u1.arc(0, g * 18, f * 8, f * 8, (PI * 4) / 3, PI * 2); //c
    u1.arc(0, g * 18, f * 10, f * 10, (PI * 4) / 3, PI * 2); //c
    u1.arc(0, g * 18, f * 12, f * 12, (PI * 4) / 3, PI * 2); //c
    u1.arc((f * 15) / 2, 0, f, f, 0, PI); //ad
    u1.arc((f * 15) / 2, g * 18, f, f, PI, PI * 2); //ec
    u1.arc((-f * 9) / 2, g * 9, f * 2, f * 2, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 4, f * 4, (PI * 5) / 3, (PI * 7) / 3); //f
  }
}
function h2ta() {
  s4.erase();
  s4.stroke(0);
  s4.noFill();
  s4.strokeWeight(f * 4);
  s4.arc((-f * 9) / 2, g * 9, f * 9, f * 9, (PI * 5) / 3, (PI * 7) / 3); //f
  s4.strokeWeight(f * 6);
  s4.arc((f * 27) / 2, g * 9, f * 7, f * 7, (PI * 2) / 3, (PI * 4) / 3); //b
  s4.line((f * 7) / 2, 0, (f * 7) / 2, g * 18);
  s4.noStroke();
  s4.fill(0);
  s4.ellipse((-f * 3) / 4, (g * 3) / 2, f);
  s4.ellipse((-f * 7) / 4, (g * 7) / 2, f);
  s4.ellipse((-f * 3) / 4, (g * 33) / 2, f);
  s4.ellipse((-f * 7) / 4, (g * 29) / 2, f);
  s3.erase();
  s3.stroke(0);
  s3.noFill();
  s3.strokeWeight(f * 4);
  s3.arc((f * 27) / 2, g * 9, f * 5, f * 5, (PI * 2) / 3, (PI * 4) / 3); //b
  s3.line((f * 5) / 2, 0, (f * 5) / 2, g * 18);
  s3.noStroke();
  s3.fill(0);
  s3.ellipse((-f * 3) / 4, (g * 3) / 2, f);
  s3.ellipse((-f * 7) / 4, (g * 7) / 2, f);
  s3.ellipse((-f * 3) / 4, (g * 33) / 2, f);
  s3.ellipse((-f * 7) / 4, (g * 29) / 2, f);
  s2.erase();
  s2.stroke(0);
  s2.noFill();
  s2.strokeWeight(f * 2);
  s2.arc((f * 27) / 2, g * 9, f * 3, f * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  s2.line((f * 3) / 2, 0, (f * 3) / 2, g * 18);
  s2.noStroke();
  s2.fill(0);
  s2.ellipse((-f * 3) / 4, (g * 3) / 2, f);
  s2.ellipse((-f * 3) / 4, (g * 33) / 2, f);
  p1.erase();
  p1.stroke(0);
  p1.noFill();
  p1.strokeWeight(f);
  p1.arc((f * 27) / 2, g * 9, f * 3, f * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((f * 27) / 2, g * 9, f * 7, f * 7, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc((f * 27) / 2, g * 9, f * 11, f * 11, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc(f * 9, 0, f * 3, f * 3, PI / 3, PI); //d
  p1.arc(f * 9, g * 18, f * 3, f * 3, PI, (PI * 5) / 3); //e
  p1.arc((-f * 9) / 2, g * 9, f * 3, f * 3, (PI * 5) / 3, (PI * 7) / 3); //f
  p1.arc((-f * 9) / 2, g * 9, f * 7, f * 7, (PI * 5) / 3, (PI * 7) / 3); //f
  p1.line((f * 3) / 2, 0, (f * 3) / 2, g * 18);
  p1.line((f * 7) / 2, 0, (f * 7) / 2, g * 18);
  p1.line((f * 11) / 2, 0, (f * 11) / 2, g * 18);
  p1.noStroke();
  p1.fill(0);
  p1.arc((-f * 3) / 4, (g * 3) / 2, f, f, (PI * 5) / 3, (PI * 8) / 3); //fa
  p1.arc((-f * 7) / 4, (g * 7) / 2, f, f, (PI * 5) / 3, (PI * 8) / 3); //fa
  p1.arc((-f * 3) / 4, (g * 33) / 2, f, f, (PI * 4) / 3, (PI * 7) / 3); //cf
  p1.arc((-f * 7) / 4, (g * 29) / 2, f, f, (PI * 4) / 3, (PI * 7) / 3); //cf
  q1.stroke(0);if(fbgc=="Dark")q1.stroke("#ffffff");
  q1.noFill();
  q1.strokeWeight(swf);if(fbgc=="Dark")q1.strokeWeight(swf*3/4);
  q1.arc((-f * 3) / 4, (g * 3) / 2, f, f, (PI * 5) / 3, (PI * 8) / 3); //fa
  q1.arc((-f * 7) / 4, (g * 7) / 2, f, f, (PI * 5) / 3, (PI * 8) / 3); //fa
  q1.arc((-f * 3) / 4, (g * 33) / 2, f, f, (PI * 4) / 3, (PI * 7) / 3); //cf
  q1.arc((-f * 7) / 4, (g * 29) / 2, f, f, (PI * 4) / 3, (PI * 7) / 3); //cf
  q1.arc((f * 27) / 2, g * 9, f * 2, f * 2, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 4, f * 4, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 6, f * 6, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 8, f * 8, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 10, f * 10, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 12, f * 12, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc(f * 9, 0, f * 2, f * 2, PI / 3, PI); //d
  q1.arc(f * 9, 0, f * 4, f * 4, PI / 3, PI); //d
  q1.arc(f * 9, g * 18, f * 2, f * 2, PI, (PI * 5) / 3); //e
  q1.arc(f * 9, g * 18, f * 4, f * 4, PI, (PI * 5) / 3); //e
  q1.arc((-f * 9) / 2, g * 9, f * 2, f * 2, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 4, f * 4, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 6, f * 6, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 8, f * 8, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.line(f * 1, 0, f * 1, g * 18);
  q1.line(f * 2, 0, f * 2, g * 18);
  q1.line(f * 3, 0, f * 3, g * 18);
  q1.line(f * 4, 0, f * 4, g * 18);
  q1.line(f * 5, 0, f * 5, g * 18);
  q1.line(f * 6, 0, f * 6, g * 18);
  for (i = 0; i < 20; i++) {
    u1.strokeWeight(f / 2 - (f / 40) * i);
    u1.arc((-f * 3) / 4, (g * 3) / 2, f, f, (PI * 5) / 3, (PI * 8) / 3); //fa
    u1.arc((-f * 7) / 4, (g * 7) / 2, f, f, (PI * 5) / 3, (PI * 8) / 3); //fa
    u1.arc((-f * 3) / 4, (g * 33) / 2, f, f, (PI * 4) / 3, (PI * 7) / 3); //cf
    u1.arc((-f * 7) / 4, (g * 29) / 2, f, f, (PI * 4) / 3, (PI * 7) / 3); //cf
    u1.arc((f * 27) / 2, g * 9, f * 2, f * 2, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 4, f * 4, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 6, f * 6, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 8, f * 8, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 10, f * 10, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 12, f * 12, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc(f * 9, 0, f * 2, f * 2, PI / 3, PI); //d
    u1.arc(f * 9, 0, f * 4, f * 4, PI / 3, PI); //d
    u1.arc(f * 9, g * 18, f * 2, f * 2, PI, (PI * 5) / 3); //e
    u1.arc(f * 9, g * 18, f * 4, f * 4, PI, (PI * 5) / 3); //e
    u1.arc((-f * 9) / 2, g * 9, f * 2, f * 2, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 4, f * 4, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 6, f * 6, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 8, f * 8, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.line(f * 1, 0, f * 1, g * 18);
    u1.line(f * 2, 0, f * 2, g * 18);
    u1.line(f * 3, 0, f * 3, g * 18);
    u1.line(f * 4, 0, f * 4, g * 18);
    u1.line(f * 5, 0, f * 5, g * 18);
    u1.line(f * 6, 0, f * 6, g * 18);
  }
}
function h1ta() {
  s4.erase();
  s4.stroke(0);
  s4.noFill();
  s4.strokeWeight(f * 4);
  s4.arc(0, 0, f * 5, f * 5, 0, (PI * 2) / 3); //a
  s4.arc(f * 9, g * 18, f * 9, f * 9, PI, (PI * 5) / 3); //e
  s4.strokeWeight(f * 2);
  s4.arc((f * 27) / 2, g * 9, f * 3, f * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  s4.arc(0, g * 18, f * 3, f * 3, (PI * 4) / 3, PI * 2); //c
  s4.arc(f * 9, 0, f * 7, f * 7, PI / 3, PI); //d
  s4.arc((-f * 9) / 2, g * 9, f * 7, f * 7, (PI * 5) / 3, (PI * 7) / 3); //f
  s4.line((f * 47) / 4, (g * 11) / 2, (-f * 7) / 4, (g * 29) / 2);
  s3.erase();
  s3.stroke(0);
  s3.noFill();
  s3.strokeWeight(f * 4);
  s3.arc(0, 0, f * 5, f * 5, 0, (PI * 2) / 3); //a
  s3.strokeWeight(f * 2);
  s3.arc(f * 9, g * 18, f * 11, f * 11, PI, (PI * 5) / 3); //e
  s3.arc((f * 27) / 2, g * 9, f * 3, f * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  s3.arc(0, g * 18, f * 3, f * 3, (PI * 4) / 3, PI * 2); //c
  s3.line((f * 47) / 4, (g * 11) / 2, (-f * 7) / 4, (g * 29) / 2);
  s2.erase();
  s2.stroke(0);
  s2.noFill();
  s2.strokeWeight(f * 2);
  s2.arc(0, 0, f * 3, f * 3, 0, (PI * 2) / 3); //a
  s2.arc((f * 27) / 2, g * 9, f * 3, f * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  s2.arc(0, g * 18, f * 3, f * 3, (PI * 4) / 3, PI * 2); //c
  p1.erase();
  p1.stroke(0);
  p1.noFill();
  p1.strokeWeight(f);
  p1.arc(0, 0, f * 3, f * 3, 0, (PI * 2) / 3); //a
  p1.arc(0, 0, f * 7, f * 7, 0, (PI * 2) / 3); //a
  p1.arc((f * 27) / 2, g * 9, f * 3, f * 3, (PI * 2) / 3, (PI * 4) / 3); //b
  p1.arc(0, g * 18, f * 3, f * 3, (PI * 4) / 3, PI * 2); //c
  p1.arc(f * 9, 0, f * 3, f * 3, PI / 3, PI); //d
  p1.arc(f * 9, 0, f * 7, f * 7, PI / 3, PI); //d
  p1.arc(f * 9, g * 18, f * 3, f * 3, PI, (PI * 5) / 3); //e
  p1.arc(f * 9, g * 18, f * 7, f * 7, PI, (PI * 5) / 3); //e
  p1.arc(f * 9, g * 18, f * 11, f * 11, PI, (PI * 5) / 3); //e
  p1.arc((-f * 9) / 2, g * 9, f * 3, f * 3, (PI * 5) / 3, (PI * 7) / 3); //f
  p1.arc((-f * 9) / 2, g * 9, f * 7, f * 7, (PI * 5) / 3, (PI * 7) / 3); //f
  p1.line((f * 47) / 4, (g * 11) / 2, (-f * 7) / 4, (g * 29) / 2);
  q1.stroke(0);if(fbgc=="Dark")q1.stroke("#ffffff");
  q1.noFill();
  q1.strokeWeight(swf);if(fbgc=="Dark")q1.strokeWeight(swf*3/4);
  q1.arc(0, 0, f * 2, f * 2, 0, (PI * 2) / 3); //a
  q1.arc(0, 0, f * 4, f * 4, 0, (PI * 2) / 3); //a
  q1.arc(0, 0, f * 6, f * 6, 0, (PI * 2) / 3); //a
  q1.arc(0, 0, f * 8, f * 8, 0, (PI * 2) / 3); //a
  q1.arc((f * 27) / 2, g * 9, f * 2, f * 2, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc((f * 27) / 2, g * 9, f * 4, f * 4, (PI * 2) / 3, (PI * 4) / 3); //b
  q1.arc(0, g * 18, f * 2, f * 2, (PI * 4) / 3, PI * 2); //c
  q1.arc(0, g * 18, f * 4, f * 4, (PI * 4) / 3, PI * 2); //c
  q1.arc(f * 9, 0, f * 2, f * 2, PI / 3, PI); //d
  q1.arc(f * 9, 0, f * 4, f * 4, PI / 3, PI); //d
  q1.arc(f * 9, 0, f * 6, f * 6, PI / 3, PI); //d
  q1.arc(f * 9, 0, f * 8, f * 8, PI / 3, PI); //d
  q1.arc(f * 9, g * 18, f * 2, f * 2, PI, (PI * 5) / 3); //e
  q1.arc(f * 9, g * 18, f * 4, f * 4, PI, (PI * 5) / 3); //e
  q1.arc(f * 9, g * 18, f * 6, f * 6, PI, (PI * 5) / 3); //e
  q1.arc(f * 9, g * 18, f * 8, f * 8, PI, (PI * 5) / 3); //e
  q1.arc(f * 9, g * 18, f * 10, f * 10, PI, (PI * 5) / 3); //e
  q1.arc(f * 9, g * 18, f * 12, f * 12, PI, (PI * 5) / 3); //e
  q1.arc((-f * 9) / 2, g * 9, f * 2, f * 2, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 4, f * 4, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 6, f * 6, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.arc((-f * 9) / 2, g * 9, f * 8, f * 8, (PI * 5) / 3, (PI * 7) / 3); //f
  q1.line((f * 23) / 2, g * 5, -f * 2, g * 14);
  q1.line(f * 12, g * 6, (-f * 3) / 2, g * 15);
  for (i = 0; i < 20; i++) {
    u1.strokeWeight(f / 2 - (f / 40) * i);
    u1.arc(0, 0, f * 2, f * 2, 0, (PI * 2) / 3); //a
    u1.arc(0, 0, f * 4, f * 4, 0, (PI * 2) / 3); //a
    u1.arc(0, 0, f * 6, f * 6, 0, (PI * 2) / 3); //a
    u1.arc(0, 0, f * 8, f * 8, 0, (PI * 2) / 3); //a
    u1.arc((f * 27) / 2, g * 9, f * 2, f * 2, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc((f * 27) / 2, g * 9, f * 4, f * 4, (PI * 2) / 3, (PI * 4) / 3); //b
    u1.arc(0, g * 18, f * 2, f * 2, (PI * 4) / 3, PI * 2); //c
    u1.arc(0, g * 18, f * 4, f * 4, (PI * 4) / 3, PI * 2); //c
    u1.arc(f * 9, 0, f * 2, f * 2, PI / 3, PI); //d
    u1.arc(f * 9, 0, f * 4, f * 4, PI / 3, PI); //d
    u1.arc(f * 9, 0, f * 6, f * 6, PI / 3, PI); //d
    u1.arc(f * 9, 0, f * 8, f * 8, PI / 3, PI); //d
    u1.arc(f * 9, g * 18, f * 2, f * 2, PI, (PI * 5) / 3); //e
    u1.arc(f * 9, g * 18, f * 4, f * 4, PI, (PI * 5) / 3); //e
    u1.arc(f * 9, g * 18, f * 6, f * 6, PI, (PI * 5) / 3); //e
    u1.arc(f * 9, g * 18, f * 8, f * 8, PI, (PI * 5) / 3); //e
    u1.arc(f * 9, g * 18, f * 10, f * 10, PI, (PI * 5) / 3); //e
    u1.arc(f * 9, g * 18, f * 12, f * 12, PI, (PI * 5) / 3); //e
    u1.arc((-f * 9) / 2, g * 9, f * 2, f * 2, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 4, f * 4, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 6, f * 6, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.arc((-f * 9) / 2, g * 9, f * 8, f * 8, (PI * 5) / 3, (PI * 7) / 3); //f
    u1.line((f * 23) / 2, g * 5, -f * 2, g * 14);
    u1.line(f * 12, g * 6, (-f * 3) / 2, g * 15);
  }
}

function truch1() {
  u1.noFill();
  u1.stroke("#00000007");
  u1.strokeCap(SQUARE);
  a=int(random(1,7));
  b=int(random(1,7));
  s1.translate(-f * a, -f * b);
  s2.translate(-f * a, -f * b);
  s3.translate(-f * a, -f * b);
  p1.translate(-f * a, -f * b);
  q1.translate(-f * a, -f * b);
  u1.translate(-f * a, -f * b);
  inum = ceil((csw + f * a) / (f * 11) + 1);
  jnum = ceil((csh + f * b) / (f * 11) + 1);
  for (let j = 0; j < jnum; j++) {
    for (let i = 0; i < inum; i++) {
      s1r = shuffle([0, PI / 2, PI, (PI * 3) / 2]);
      s1.translate(i * f * 11, j * f * 11);
      s1.translate((f * 11) / 2, (f * 11) / 2);
      s1.rotate(s1r[0]);
      s1.translate((-f * 11) / 2, (-f * 11) / 2);
      p1.translate(i * f * 11, j * f * 11);
      p1.translate((f * 11) / 2, (f * 11) / 2);
      p1.rotate(s1r[0]);
      p1.translate((-f * 11) / 2, (-f * 11) / 2);
      s2.translate(i * f * 11, j * f * 11);
      s2.translate((f * 11) / 2, (f * 11) / 2);
      s2.rotate(s1r[0]);
      s2.translate((-f * 11) / 2, (-f * 11) / 2);
      q1.translate(i * f * 11, j * f * 11);
      q1.translate((f * 11) / 2, (f * 11) / 2);
      u1.translate(i * f * 11, j * f * 11);
      u1.translate((f * 11) / 2, (f * 11) / 2);
      if (fbug == "Yes") {
        q1.rotate(s1r[1]);
        u1.rotate(s1r[1]);
      }
      if (fbug == "No") {
        q1.rotate(s1r[0]);
        u1.rotate(s1r[0]);
      }
      q1.translate((-f * 11) / 2, (-f * 11) / 2);
      u1.translate((-f * 11) / 2, (-f * 11) / 2);
      s3.translate(i * f * 11, j * f * 11);
      s3.translate((f * 11) / 2, (f * 11) / 2);
      s3.rotate(s1r[0]);
      s3.translate((-f * 11) / 2, (-f * 11) / 2);
      rra = shuffle(rrsa);
      eval(rra[0]);
      s1.translate((f * 11) / 2, (f * 11) / 2);
      s1.rotate(-s1r[0]);
      s1.translate((-f * 11) / 2, (-f * 11) / 2);
      s1.translate(-i * f * 11, -j * f * 11);
      p1.translate((f * 11) / 2, (f * 11) / 2);
      p1.rotate(-s1r[0]);
      p1.translate((-f * 11) / 2, (-f * 11) / 2);
      p1.translate(-i * f * 11, -j * f * 11);
      s2.translate((f * 11) / 2, (f * 11) / 2);
      s2.rotate(-s1r[0]);
      s2.translate((-f * 11) / 2, (-f * 11) / 2);
      s2.translate(-i * f * 11, -j * f * 11);
      q1.translate((f * 11) / 2, (f * 11) / 2);
      u1.translate((f * 11) / 2, (f * 11) / 2);
      if (fbug == "Yes") {
        q1.rotate(-s1r[1]);
        u1.rotate(-s1r[1]);
      }
      if (fbug == "No") {
        q1.rotate(-s1r[0]);
        u1.rotate(-s1r[0]);
      }
      q1.translate((-f * 11) / 2, (-f * 11) / 2);
      q1.translate(-i * f * 11, -j * f * 11);
      u1.translate((-f * 11) / 2, (-f * 11) / 2);
      u1.translate(-i * f * 11, -j * f * 11);
      s3.translate((f * 11) / 2, (f * 11) / 2);
      s3.rotate(-s1r[0]);
      s3.translate((-f * 11) / 2, (-f * 11) / 2);
      s3.translate(-i * f * 11, -j * f * 11);
    }
  }
  s1.translate(f * a, f * b);
  s2.translate(f * a, f * b);
  s3.translate(f * a, f * b);
  p1.translate(f * a, f * b);
  q1.translate(f * a, f * b);
  u1.translate(f * a, f * b);
}

function s9ta() {
  s3.erase();
  s3.stroke(0);
  s3.noFill();
  s3.strokeWeight(f * 4);
  s3.arc(0, (f * 11) / 2, f * 6, f * 6, (PI * 3) / 2, (PI * 5) / 2);
  s3.strokeWeight(f * 2);
  s3.arc(f * 11, f * 11, f * 3, f * 3, PI, (PI * 3) / 2);
  s3.arc(f * 11, 0, f * 3, f * 3, PI / 2, PI);
  s3.arc(f * 11, (f * 11) / 2, f * 4, f * 4, PI / 2, (PI * 3) / 2);
  s3.arc((f * 11) / 2, f * 11, f * 4, f * 4, PI, PI * 2);
  s3.arc((f * 11) / 2, 0, f * 4, f * 4, 0, PI);
  s3.noStroke();
  s3.fill(0);
  s3.ellipse((f * 3) / 2, 0, f * 2);
  s3.ellipse((f * 3) / 2, f * 11, f * 2);
  s2.erase();
  s2.stroke(0);
  s2.noFill();
  s2.strokeWeight(f * 2);
  s2.arc(0, (f * 11) / 2, f * 8, f * 8, (PI * 3) / 2, (PI * 5) / 2);
  s2.arc(f * 11, f * 11, f * 3, f * 3, PI, (PI * 3) / 2);
  s2.arc(f * 11, 0, f * 3, f * 3, PI / 2, PI);
  s2.noStroke();
  s2.fill(0);
  s2.ellipse((f * 3) / 2, 0, f * 2);
  s2.ellipse((f * 3) / 2, f * 11, f * 2);
  p1.erase();
  p1.noFill();
  p1.stroke(0);
  p1.strokeWeight(f);
  p1.arc(f * 11, 0, f * 3, f * 3, PI / 2, PI);
  p1.arc(f * 11, f * 11, f * 3, f * 3, PI, (PI * 3) / 2);
  p1.arc(0, (f * 11) / 2, f * 4, f * 4, (PI * 3) / 2, (PI * 5) / 2);
  p1.arc(0, (f * 11) / 2, f * 8, f * 8, (PI * 3) / 2, (PI * 5) / 2);
  p1.arc(f * 11, (f * 11) / 2, f * 4, f * 4, PI / 2, (PI * 3) / 2);
  p1.arc((f * 11) / 2, 0, f * 4, f * 4, 0, PI);
  p1.arc((f * 11) / 2, f * 11, f * 4, f * 4, PI, PI * 2);
  p1.noStroke();
  p1.fill(0);
  p1.ellipse((f * 3) / 2, 0, f);
  p1.ellipse((f * 7) / 2, 0, f);
  p1.ellipse((f * 11) / 2, 0, f);
  p1.ellipse((f * 15) / 2, 0, f);
  p1.ellipse((f * 19) / 2, 0, f);
  p1.ellipse((f * 3) / 2, f * 11, f);
  p1.ellipse((f * 7) / 2, f * 11, f);
  p1.ellipse((f * 11) / 2, f * 11, f);
  p1.ellipse((f * 15) / 2, f * 11, f);
  p1.ellipse((f * 19) / 2, f * 11, f);
  p1.ellipse(0, (f * 3) / 2, f);
  p1.ellipse(0, (f * 7) / 2, f);
  p1.ellipse(0, (f * 11) / 2, f);
  p1.ellipse(0, (f * 15) / 2, f);
  p1.ellipse(0, (f * 19) / 2, f);
  p1.ellipse(0 + f * 11, (f * 3) / 2, f);
  p1.ellipse(0 + f * 11, (f * 7) / 2, f);
  p1.ellipse(0 + f * 11, (f * 11) / 2, f);
  p1.ellipse(0 + f * 11, (f * 15) / 2, f);
  p1.ellipse(0 + f * 11, (f * 19) / 2, f);
  q1.noFill();
  q1.stroke(0);if(fbgc=="Dark")q1.stroke("#ffffff");
  q1.strokeWeight(swf);if(fbgc=="Dark")q1.strokeWeight(swf*3/4);
  q1.arc(f * 11, 0, f * 2, f * 2, PI / 2, PI);
  q1.arc(f * 11, 0, f * 4, f * 4, PI / 2, PI);
  q1.arc(f * 11, f * 11, f * 2, f * 2, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 4, f * 4, PI, (PI * 3) / 2);
  q1.arc(0, (f * 11) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(0, (f * 11) / 2, f * 3, f * 3, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(0, (f * 11) / 2, f * 5, f * 5, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(0, (f * 11) / 2, f * 7, f * 7, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(0, (f * 11) / 2, f * 9, f * 9, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 3, f * 3, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 5, f * 5, PI / 2, (PI * 3) / 2);
  q1.arc((f * 3) / 2, 0, f, f, 0, PI);
  q1.arc((f * 11) / 2, 0, f, f, 0, PI);
  q1.arc((f * 11) / 2, 0, f * 3, f * 3, 0, PI);
  q1.arc((f * 11) / 2, 0, f * 5, f * 5, 0, PI);
  q1.arc((f * 11) / 2, f * 11, f, f, PI, PI * 2);
  q1.arc((f * 11) / 2, f * 11, f * 3, f * 3, PI, PI * 2);
  q1.arc((f * 11) / 2, f * 11, f * 5, f * 5, PI, PI * 2);
  q1.arc((f * 3) / 2, f * 11, f, f, PI, PI * 2);
  for (i = 0; i < 20; i++) {
    u1.strokeWeight(f / 2 - (f / 40) * i);
    u1.arc(f * 11, 0, f * 2, f * 2, PI / 2, PI);
    u1.arc(f * 11, 0, f * 4, f * 4, PI / 2, PI);
    u1.arc(f * 11, f * 11, f * 2, f * 2, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 4, f * 4, PI, (PI * 3) / 2);
    u1.arc(0, (f * 11) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(0, (f * 11) / 2, f * 3, f * 3, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(0, (f * 11) / 2, f * 5, f * 5, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(0, (f * 11) / 2, f * 7, f * 7, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(0, (f * 11) / 2, f * 9, f * 9, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 3, f * 3, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 5, f * 5, PI / 2, (PI * 3) / 2);
    u1.arc((f * 3) / 2, 0, f, f, 0, PI);
    u1.arc((f * 11) / 2, 0, f, f, 0, PI);
    u1.arc((f * 11) / 2, 0, f * 3, f * 3, 0, PI);
    u1.arc((f * 11) / 2, 0, f * 5, f * 5, 0, PI);
    u1.arc((f * 11) / 2, f * 11, f, f, PI, PI * 2);
    u1.arc((f * 11) / 2, f * 11, f * 3, f * 3, PI, PI * 2);
    u1.arc((f * 11) / 2, f * 11, f * 5, f * 5, PI, PI * 2);
    u1.arc((f * 3) / 2, f * 11, f, f, PI, PI * 2);
  }
}
function s11ta() {
  s3.erase();
  s3.stroke(0);
  s3.noFill();
  s3.strokeWeight(f * 2);
  s3.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  s3.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  s3.arc(0, (f * 11) / 2, f * 4, f * 4, (PI * 3) / 2, (PI * 5) / 2);
  s3.line((f * 7) / 2, 0, (f * 7) / 2, f * 11);
  s3.strokeWeight(f * 4);
  s3.arc(f * 11, (f * 11) / 2, f * 6, f * 6, PI / 2, (PI * 3) / 2);
  s3.noStroke();
  s3.fill(0);
  s3.ellipse((f * 15) / 2, 0, f * 2);
  s3.ellipse((f * 19) / 2, 0, f * 2);
  s3.ellipse((f * 15) / 2, f * 11, f * 2);
  s3.ellipse((f * 19) / 2, f * 11, f * 2);
  s2.erase();
  s2.stroke(0);
  s2.noFill();
  s2.strokeWeight(f * 2);
  s2.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  s2.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  s2.arc(f * 11, (f * 11) / 2, f * 8, f * 8, PI / 2, (PI * 3) / 2);
  s2.noStroke();
  s2.fill(0);
  s2.ellipse((f * 19) / 2, 0, f * 2);
  s2.ellipse((f * 19) / 2, f * 11, f * 2);
  p1.erase();
  p1.noFill();
  p1.stroke(0);
  p1.strokeWeight(f);
  p1.line((f * 7) / 2, 0, (f * 7) / 2, f * 11);
  p1.line((f * 11) / 2, 0, (f * 11) / 2, f * 11);
  p1.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  p1.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  p1.arc(f * 11, (f * 11) / 2, f * 4, f * 4, PI / 2, (PI * 3) / 2);
  p1.arc(f * 11, (f * 11) / 2, f * 8, f * 8, PI / 2, (PI * 3) / 2);
  p1.arc(0, (f * 11) / 2, f * 4, f * 4, (PI * 3) / 2, (PI * 5) / 2);
  p1.noStroke();
  p1.fill(0);
  p1.ellipse((f * 3) / 2, 0, f);
  p1.ellipse((f * 7) / 2, 0, f);
  p1.ellipse((f * 11) / 2, 0, f);
  p1.ellipse((f * 15) / 2, 0, f);
  p1.ellipse((f * 19) / 2, 0, f);
  p1.ellipse((f * 3) / 2, f * 11, f);
  p1.ellipse((f * 7) / 2, f * 11, f);
  p1.ellipse((f * 11) / 2, f * 11, f);
  p1.ellipse((f * 15) / 2, f * 11, f);
  p1.ellipse((f * 19) / 2, f * 11, f);
  p1.ellipse(0, (f * 3) / 2, f);
  p1.ellipse(0, (f * 7) / 2, f);
  p1.ellipse(0, (f * 11) / 2, f);
  p1.ellipse(0, (f * 15) / 2, f);
  p1.ellipse(0, (f * 19) / 2, f);
  p1.ellipse(0 + f * 11, (f * 3) / 2, f);
  p1.ellipse(0 + f * 11, (f * 7) / 2, f);
  p1.ellipse(0 + f * 11, (f * 11) / 2, f);
  p1.ellipse(0 + f * 11, (f * 15) / 2, f);
  p1.ellipse(0 + f * 11, (f * 19) / 2, f);
  q1.noFill();
  q1.stroke(0);if(fbgc=="Dark")q1.stroke("#ffffff");
  q1.strokeWeight(swf);if(fbgc=="Dark")q1.strokeWeight(swf*3/4);
  q1.line(f * 3, 0, f * 3, f * 11);
  q1.line(f * 4, 0, f * 4, f * 11);
  q1.line(f * 5, 0, f * 5, f * 11);
  q1.line(f * 6, 0, f * 6, f * 11);
  q1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
  q1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
  q1.arc(0, f * 11, f * 2, f * 2, (PI * 3) / 2, PI * 2);
  q1.arc(0, f * 11, f * 4, f * 4, (PI * 3) / 2, PI * 2);
  q1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 3, f * 3, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 5, f * 5, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 7, f * 7, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 9, f * 9, PI / 2, (PI * 3) / 2);
  q1.arc(0, (f * 11) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(0, (f * 11) / 2, f * 3, f * 3, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(0, (f * 11) / 2, f * 5, f * 5, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc((f * 15) / 2, 0, f, f, 0, PI);
  q1.arc((f * 19) / 2, 0, f, f, 0, PI);
  q1.arc((f * 15) / 2, f * 11, f, f, PI, PI * 2);
  q1.arc((f * 19) / 2, f * 11, f, f, PI, PI * 2);
  for (i = 0; i < 20; i++) {
    u1.strokeWeight(f / 2 - (f / 40) * i);
    u1.line(f * 3, 0, f * 3, f * 11);
    u1.line(f * 4, 0, f * 4, f * 11);
    u1.line(f * 5, 0, f * 5, f * 11);
    u1.line(f * 6, 0, f * 6, f * 11);
    u1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
    u1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
    u1.arc(0, f * 11, f * 2, f * 2, (PI * 3) / 2, PI * 2);
    u1.arc(0, f * 11, f * 4, f * 4, (PI * 3) / 2, PI * 2);
    u1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 3, f * 3, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 5, f * 5, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 7, f * 7, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 9, f * 9, PI / 2, (PI * 3) / 2);
    u1.arc(0, (f * 11) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(0, (f * 11) / 2, f * 3, f * 3, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(0, (f * 11) / 2, f * 5, f * 5, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc((f * 15) / 2, 0, f, f, 0, PI);
    u1.arc((f * 19) / 2, 0, f, f, 0, PI);
    u1.arc((f * 15) / 2, f * 11, f, f, PI, PI * 2);
    u1.arc((f * 19) / 2, f * 11, f, f, PI, PI * 2);
  }
}
function s12ta() {
  s3.erase();
  s3.stroke(0);
  s3.noFill();
  s3.strokeWeight(f * 2);
  s3.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  s3.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  s3.arc(f * 11, 0, f * 3, f * 3, PI / 2, PI);
  s3.arc(f * 11, f * 11, f * 3, f * 3, PI, (PI * 3) / 2);
  s3.arc(f * 11, (f * 11) / 2, f * 4, f * 4, PI / 2, (PI * 3) / 2);
  s3.arc(0, (f * 11) / 2, f * 4, f * 4, (PI * 3) / 2, (PI * 5) / 2);
  s3.line((f * 7) / 2, 0, (f * 7) / 2, f * 11);
  s3.line((f * 15) / 2, 0, (f * 15) / 2, f * 11);
  s2.erase();
  s2.stroke(0);
  s2.noFill();
  s2.strokeWeight(f * 2);
  s2.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  s2.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  s2.arc(f * 11, 0, f * 3, f * 3, PI / 2, PI);
  s2.arc(f * 11, f * 11, f * 3, f * 3, PI, (PI * 3) / 2);
  p1.erase();
  p1.noFill();
  p1.stroke(0);
  p1.strokeWeight(f);
  p1.line((f * 7) / 2, 0, (f * 7) / 2, f * 11);
  p1.line((f * 11) / 2, 0, (f * 11) / 2, f * 11);
  p1.line((f * 15) / 2, 0, (f * 15) / 2, f * 11);
  p1.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  p1.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  p1.arc(f * 11, 0, f * 3, f * 3, PI / 2, PI);
  p1.arc(f * 11, f * 11, f * 3, f * 3, PI, (PI * 3) / 2);
  p1.arc(f * 11, (f * 11) / 2, f * 4, f * 4, PI / 2, (PI * 3) / 2);
  p1.arc(0, (f * 11) / 2, f * 4, f * 4, (PI * 3) / 2, (PI * 5) / 2);
  p1.noStroke();
  p1.fill(0);
  p1.ellipse((f * 3) / 2, 0, f);
  p1.ellipse((f * 7) / 2, 0, f);
  p1.ellipse((f * 11) / 2, 0, f);
  p1.ellipse((f * 15) / 2, 0, f);
  p1.ellipse((f * 19) / 2, 0, f);
  p1.ellipse((f * 3) / 2, f * 11, f);
  p1.ellipse((f * 7) / 2, f * 11, f);
  p1.ellipse((f * 11) / 2, f * 11, f);
  p1.ellipse((f * 15) / 2, f * 11, f);
  p1.ellipse((f * 19) / 2, f * 11, f);
  p1.ellipse(0, (f * 3) / 2, f);
  p1.ellipse(0, (f * 7) / 2, f);
  p1.ellipse(0, (f * 11) / 2, f);
  p1.ellipse(0, (f * 15) / 2, f);
  p1.ellipse(0, (f * 19) / 2, f);
  p1.ellipse(0 + f * 11, (f * 3) / 2, f);
  p1.ellipse(0 + f * 11, (f * 7) / 2, f);
  p1.ellipse(0 + f * 11, (f * 11) / 2, f);
  p1.ellipse(0 + f * 11, (f * 15) / 2, f);
  p1.ellipse(0 + f * 11, (f * 19) / 2, f);
  q1.noFill();
  q1.stroke(0);if(fbgc=="Dark")q1.stroke("#ffffff");
  q1.strokeWeight(swf);if(fbgc=="Dark")q1.strokeWeight(swf*3/4);
  q1.line(f * 3, 0, f * 3, f * 11);
  q1.line(f * 4, 0, f * 4, f * 11);
  q1.line(f * 5, 0, f * 5, f * 11);
  q1.line(f * 6, 0, f * 6, f * 11);
  q1.line(f * 7, 0, f * 7, f * 11);
  q1.line(f * 8, 0, f * 8, f * 11);
  q1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
  q1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
  q1.arc(f * 11, 0, f * 2, f * 2, PI / 2, PI);
  q1.arc(f * 11, 0, f * 4, f * 4, PI / 2, PI);
  q1.arc(0, f * 11, f * 2, f * 2, (PI * 3) / 2, PI * 2);
  q1.arc(0, f * 11, f * 4, f * 4, (PI * 3) / 2, PI * 2);
  q1.arc(f * 11, f * 11, f * 2, f * 2, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 4, f * 4, PI, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(0, (f * 11) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(0, (f * 11) / 2, f * 3, f * 3, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(0, (f * 11) / 2, f * 5, f * 5, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 3, f * 3, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 5, f * 5, PI / 2, (PI * 3) / 2);
  for (i = 0; i < 20; i++) {
    u1.strokeWeight(f / 2 - (f / 40) * i);
    u1.line(f * 3, 0, f * 3, f * 11);
    u1.line(f * 4, 0, f * 4, f * 11);
    u1.line(f * 5, 0, f * 5, f * 11);
    u1.line(f * 6, 0, f * 6, f * 11);
    u1.line(f * 7, 0, f * 7, f * 11);
    u1.line(f * 8, 0, f * 8, f * 11);
    u1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
    u1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
    u1.arc(f * 11, 0, f * 2, f * 2, PI / 2, PI);
    u1.arc(f * 11, 0, f * 4, f * 4, PI / 2, PI);
    u1.arc(0, f * 11, f * 2, f * 2, (PI * 3) / 2, PI * 2);
    u1.arc(0, f * 11, f * 4, f * 4, (PI * 3) / 2, PI * 2);
    u1.arc(f * 11, f * 11, f * 2, f * 2, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 4, f * 4, PI, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(0, (f * 11) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(0, (f * 11) / 2, f * 3, f * 3, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(0, (f * 11) / 2, f * 5, f * 5, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 3, f * 3, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 5, f * 5, PI / 2, (PI * 3) / 2);
  }
}
function s13ta() {
  s3.erase();
  s3.stroke(0);
  s3.noFill();
  s3.strokeWeight(f * 2);
  s3.line((f * 3) / 2, 0, (f * 3) / 2, f * 11);
  s3.line((f * 7) / 2, 0, (f * 7) / 2, f * 11);
  s3.line((f * 15) / 2, 0, (f * 15) / 2, f * 11);
  s3.line((f * 19) / 2, 0, (f * 19) / 2, f * 11);
  s3.noStroke();
  s3.fill(0);
  s3.ellipse(0, (f * 3) / 2, f * 2);
  s3.ellipse(0, (f * 7) / 2, f * 2);
  s3.ellipse(0, (f * 15) / 2, f * 2);
  s3.ellipse(0, (f * 19) / 2, f * 2);
  s3.ellipse(f * 11, (f * 3) / 2, f * 2);
  s3.ellipse(f * 11, (f * 7) / 2, f * 2);
  s3.ellipse(f * 11, (f * 15) / 2, f * 2);
  s3.ellipse(f * 11, (f * 19) / 2, f * 2);
  s2.erase();
  s2.stroke(0);
  s2.noFill();
  s2.strokeWeight(f * 2);
  s2.line((f * 3) / 2, 0, (f * 3) / 2, f * 11);
  s2.line((f * 19) / 2, 0, (f * 19) / 2, f * 11);
  s2.noStroke();
  s2.fill(0);
  s2.ellipse(0, (f * 3) / 2, f * 2);
  s2.ellipse(0, (f * 19) / 2, f * 2);
  s2.ellipse(f * 11, (f * 3) / 2, f * 2);
  s2.ellipse(f * 11, (f * 19) / 2, f * 2);
  p1.erase();
  p1.noFill();
  p1.stroke(0);
  p1.strokeWeight(f);
  p1.line((f * 3) / 2, 0, (f * 3) / 2, f * 11);
  p1.line((f * 7) / 2, 0, (f * 7) / 2, f * 11);
  p1.line((f * 11) / 2, 0, (f * 11) / 2, f * 11);
  p1.line((f * 15) / 2, 0, (f * 15) / 2, f * 11);
  p1.line((f * 19) / 2, 0, (f * 19) / 2, f * 11);
  p1.noStroke();
  p1.fill(0);
  p1.ellipse((f * 3) / 2, 0, f);
  p1.ellipse((f * 7) / 2, 0, f);
  p1.ellipse((f * 11) / 2, 0, f);
  p1.ellipse((f * 15) / 2, 0, f);
  p1.ellipse((f * 19) / 2, 0, f);
  p1.ellipse((f * 3) / 2, f * 11, f);
  p1.ellipse((f * 7) / 2, f * 11, f);
  p1.ellipse((f * 11) / 2, f * 11, f);
  p1.ellipse((f * 15) / 2, f * 11, f);
  p1.ellipse((f * 19) / 2, f * 11, f);
  p1.ellipse(0, (f * 3) / 2, f);
  p1.ellipse(0, (f * 7) / 2, f);
  p1.ellipse(0, (f * 11) / 2, f);
  p1.ellipse(0, (f * 15) / 2, f);
  p1.ellipse(0, (f * 19) / 2, f);
  p1.ellipse(0 + f * 11, (f * 3) / 2, f);
  p1.ellipse(0 + f * 11, (f * 7) / 2, f);
  p1.ellipse(0 + f * 11, (f * 11) / 2, f);
  p1.ellipse(0 + f * 11, (f * 15) / 2, f);
  p1.ellipse(0 + f * 11, (f * 19) / 2, f);
  q1.noFill();
  q1.stroke(0);if(fbgc=="Dark")q1.stroke("#ffffff");
  q1.strokeWeight(swf);if(fbgc=="Dark")q1.strokeWeight(swf*3/4);
  q1.line(f * 1, 0, f * 1, f * 11);
  q1.line(f * 2, 0, f * 2, f * 11);
  q1.line(f * 3, 0, f * 3, f * 11);
  q1.line(f * 4, 0, f * 4, f * 11);
  q1.line(f * 5, 0, f * 5, f * 11);
  q1.line(f * 6, 0, f * 6, f * 11);
  q1.line(f * 7, 0, f * 7, f * 11);
  q1.line(f * 8, 0, f * 8, f * 11);
  q1.line(f * 9, 0, f * 9, f * 11);
  q1.line(f * 10, 0, f * 10, f * 11);
  q1.arc(f * 11, (f * 3) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 7) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 15) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 19) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(0, (f * 3) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(0, (f * 7) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(0, (f * 11) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(0, (f * 15) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(0, (f * 19) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
  for (i = 0; i < 20; i++) {
    u1.strokeWeight(f / 2 - (f / 40) * i);
    u1.line(f * 1, 0, f * 1, f * 11);
    u1.line(f * 2, 0, f * 2, f * 11);
    u1.line(f * 3, 0, f * 3, f * 11);
    u1.line(f * 4, 0, f * 4, f * 11);
    u1.line(f * 5, 0, f * 5, f * 11);
    u1.line(f * 6, 0, f * 6, f * 11);
    u1.line(f * 7, 0, f * 7, f * 11);
    u1.line(f * 8, 0, f * 8, f * 11);
    u1.line(f * 9, 0, f * 9, f * 11);
    u1.line(f * 10, 0, f * 10, f * 11);
    u1.arc(f * 11, (f * 3) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 7) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 15) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 19) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(0, (f * 3) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(0, (f * 7) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(0, (f * 11) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(0, (f * 15) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(0, (f * 19) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
  }
}
function s10ta() {
  s3.erase();
  s3.stroke(0);
  s3.noFill();
  s3.strokeWeight(f * 4);
  s3.arc(0, (f * 11) / 2, f * 6, f * 6, (PI * 3) / 2, (PI * 5) / 2);
  s3.arc(f * 11, (f * 11) / 2, f * 6, f * 6, PI / 2, (PI * 3) / 2);
  s3.strokeWeight(f * 2);
  s3.arc((f * 11) / 2, f * 11, f * 4, f * 4, PI, PI * 2);
  s3.arc((f * 11) / 2, 0, f * 4, f * 4, 0, PI);
  s3.noStroke();
  s3.fill(0);
  s3.ellipse((f * 3) / 2, 0, f * 2);
  s3.ellipse((f * 19) / 2, 0, f * 2);
  s3.ellipse((f * 3) / 2, f * 11, f * 2);
  s3.ellipse((f * 19) / 2, f * 11, f * 2);
  s2.erase();
  s2.stroke(0);
  s2.noFill();
  s2.strokeWeight(f * 2);
  s2.arc(0, (f * 11) / 2, f * 8, f * 8, (PI * 3) / 2, (PI * 5) / 2);
  s2.arc(f * 11, (f * 11) / 2, f * 8, f * 8, PI / 2, (PI * 3) / 2);
  s2.noStroke();
  s2.fill(0);
  s2.ellipse((f * 3) / 2, 0, f * 2);
  s2.ellipse((f * 19) / 2, 0, f * 2);
  s2.ellipse((f * 3) / 2, f * 11, f * 2);
  s2.ellipse((f * 19) / 2, f * 11, f * 2);
  p1.erase();
  p1.noFill();
  p1.stroke(0);
  p1.strokeWeight(f);
  p1.arc(0, (f * 11) / 2, f * 4, f * 4, (PI * 3) / 2, (PI * 5) / 2);
  p1.arc(0, (f * 11) / 2, f * 8, f * 8, (PI * 3) / 2, (PI * 5) / 2);
  p1.arc(f * 11, (f * 11) / 2, f * 4, f * 4, PI / 2, (PI * 3) / 2);
  p1.arc(f * 11, (f * 11) / 2, f * 8, f * 8, PI / 2, (PI * 3) / 2);
  p1.arc((f * 11) / 2, 0, f * 4, f * 4, 0, PI);
  p1.arc((f * 11) / 2, f * 11, f * 4, f * 4, PI, PI * 2);
  p1.noStroke();
  p1.fill(0);
  p1.ellipse((f * 3) / 2, 0, f);
  p1.ellipse((f * 7) / 2, 0, f);
  p1.ellipse((f * 11) / 2, 0, f);
  p1.ellipse((f * 15) / 2, 0, f);
  p1.ellipse((f * 19) / 2, 0, f);
  p1.ellipse((f * 3) / 2, f * 11, f);
  p1.ellipse((f * 7) / 2, f * 11, f);
  p1.ellipse((f * 11) / 2, f * 11, f);
  p1.ellipse((f * 15) / 2, f * 11, f);
  p1.ellipse((f * 19) / 2, f * 11, f);
  p1.ellipse(0, (f * 3) / 2, f);
  p1.ellipse(0, (f * 7) / 2, f);
  p1.ellipse(0, (f * 11) / 2, f);
  p1.ellipse(0, (f * 15) / 2, f);
  p1.ellipse(0, (f * 19) / 2, f);
  p1.ellipse(0 + f * 11, (f * 3) / 2, f);
  p1.ellipse(0 + f * 11, (f * 7) / 2, f);
  p1.ellipse(0 + f * 11, (f * 11) / 2, f);
  p1.ellipse(0 + f * 11, (f * 15) / 2, f);
  p1.ellipse(0 + f * 11, (f * 19) / 2, f);
  q1.noFill();
  q1.stroke(0);if(fbgc=="Dark")q1.stroke("#ffffff");
  q1.strokeWeight(swf);if(fbgc=="Dark")q1.strokeWeight(swf*3/4);
  q1.arc(0, (f * 11) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(0, (f * 11) / 2, f * 3, f * 3, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(0, (f * 11) / 2, f * 5, f * 5, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(0, (f * 11) / 2, f * 7, f * 7, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(0, (f * 11) / 2, f * 9, f * 9, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 3, f * 3, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 5, f * 5, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 7, f * 7, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 9, f * 9, PI / 2, (PI * 3) / 2);
  q1.arc((f * 3) / 2, 0, f, f, 0, PI);
  q1.arc((f * 19) / 2, 0, f, f, 0, PI);
  q1.arc((f * 11) / 2, 0, f, f, 0, PI);
  q1.arc((f * 11) / 2, 0, f * 3, f * 3, 0, PI);
  q1.arc((f * 11) / 2, 0, f * 5, f * 5, 0, PI);
  q1.arc((f * 11) / 2, f * 11, f, f, PI, PI * 2);
  q1.arc((f * 11) / 2, f * 11, f * 3, f * 3, PI, PI * 2);
  q1.arc((f * 11) / 2, f * 11, f * 5, f * 5, PI, PI * 2);
  q1.arc((f * 3) / 2, f * 11, f, f, PI, PI * 2);
  q1.arc((f * 19) / 2, f * 11, f, f, PI, PI * 2);
  for (i = 0; i < 20; i++) {
    u1.strokeWeight(f / 2 - (f / 40) * i);
    u1.arc(0, (f * 11) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(0, (f * 11) / 2, f * 3, f * 3, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(0, (f * 11) / 2, f * 5, f * 5, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(0, (f * 11) / 2, f * 7, f * 7, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(0, (f * 11) / 2, f * 9, f * 9, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 3, f * 3, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 5, f * 5, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 7, f * 7, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 9, f * 9, PI / 2, (PI * 3) / 2);
    u1.arc((f * 3) / 2, 0, f, f, 0, PI);
    u1.arc((f * 19) / 2, 0, f, f, 0, PI);
    u1.arc((f * 11) / 2, 0, f, f, 0, PI);
    u1.arc((f * 11) / 2, 0, f * 3, f * 3, 0, PI);
    u1.arc((f * 11) / 2, 0, f * 5, f * 5, 0, PI);
    u1.arc((f * 11) / 2, f * 11, f, f, PI, PI * 2);
    u1.arc((f * 11) / 2, f * 11, f * 3, f * 3, PI, PI * 2);
    u1.arc((f * 11) / 2, f * 11, f * 5, f * 5, PI, PI * 2);
    u1.arc((f * 3) / 2, f * 11, f, f, PI, PI * 2);
    u1.arc((f * 19) / 2, f * 11, f, f, PI, PI * 2);
  }
}
function s8ta() {
  s3.erase();
  s3.stroke(0);
  s3.noFill();
  s3.strokeWeight(f * 4);
  s3.arc(0, 0, f * 5, f * 5, 0, PI / 2);
  s3.arc(0, f * 11, f * 5, f * 5, (PI * 3) / 2, PI * 2);
  s3.arc(f * 11, (f * 11) / 2, f * 6, f * 6, PI / 2, (PI * 3) / 2);
  s3.noStroke();
  s3.fill(0);
  s3.ellipse((f * 15) / 2, 0, f * 2);
  s3.ellipse((f * 19) / 2, 0, f * 2);
  s3.ellipse((f * 15) / 2, f * 11, f * 2);
  s3.ellipse((f * 19) / 2, f * 11, f * 2);
  s2.erase();
  s2.stroke(0);
  s2.noFill();
  s2.strokeWeight(f * 2);
  s2.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  s2.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  s2.arc(f * 11, (f * 11) / 2, f * 8, f * 8, PI / 2, (PI * 3) / 2);
  s2.noStroke();
  s2.fill(0);
  s2.ellipse((f * 19) / 2, 0, f * 2);
  s2.ellipse((f * 19) / 2, f * 11, f * 2);
  p1.erase();
  p1.noFill();
  p1.stroke(0);
  p1.strokeWeight(f);
  p1.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  p1.arc(0, 0, f * 7, f * 7, 0, PI / 2);
  p1.arc(0, 0, f * 11, f * 11, 0, PI / 2);
  p1.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  p1.arc(0, f * 11, f * 7, f * 7, (PI * 3) / 2, PI * 2);
  p1.arc(f * 11, (f * 11) / 2, f * 4, f * 4, PI / 2, (PI * 3) / 2);
  p1.arc(f * 11, (f * 11) / 2, f * 8, f * 8, PI / 2, (PI * 3) / 2);
  p1.noStroke();
  p1.fill(0);
  p1.ellipse((f * 3) / 2, 0, f);
  p1.ellipse((f * 7) / 2, 0, f);
  p1.ellipse((f * 11) / 2, 0, f);
  p1.ellipse((f * 15) / 2, 0, f);
  p1.ellipse((f * 19) / 2, 0, f);
  p1.ellipse((f * 3) / 2, f * 11, f);
  p1.ellipse((f * 7) / 2, f * 11, f);
  p1.ellipse((f * 11) / 2, f * 11, f);
  p1.ellipse((f * 15) / 2, f * 11, f);
  p1.ellipse((f * 19) / 2, f * 11, f);
  p1.ellipse(0, (f * 3) / 2, f);
  p1.ellipse(0, (f * 7) / 2, f);
  p1.ellipse(0, (f * 11) / 2, f);
  p1.ellipse(0, (f * 15) / 2, f);
  p1.ellipse(0, (f * 19) / 2, f);
  p1.ellipse(0 + f * 11, (f * 3) / 2, f);
  p1.ellipse(0 + f * 11, (f * 7) / 2, f);
  p1.ellipse(0 + f * 11, (f * 11) / 2, f);
  p1.ellipse(0 + f * 11, (f * 15) / 2, f);
  p1.ellipse(0 + f * 11, (f * 19) / 2, f);
  q1.noFill();
  q1.stroke(0);if(fbgc=="Dark")q1.stroke("#ffffff");
  q1.strokeWeight(swf);if(fbgc=="Dark")q1.strokeWeight(swf*3/4);
  q1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
  q1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
  q1.arc(0, 0, f * 6, f * 6, 0, PI / 2);
  q1.arc(0, 0, f * 8, f * 8, 0, PI / 2);
  q1.arc(0, 0, f * 10, f * 10, 0, PI / 2);
  q1.arc(0, 0, f * 12, f * 12, 0, PI / 2);
  q1.arc(0, f * 11, f * 2, f * 2, (PI * 3) / 2, PI * 2);
  q1.arc(0, f * 11, f * 4, f * 4, (PI * 3) / 2, PI * 2);
  q1.arc(0, f * 11, f * 6, f * 6, (PI * 3) / 2, PI * 2);
  q1.arc(0, f * 11, f * 8, f * 8, (PI * 3) / 2, PI * 2);
  q1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 3, f * 3, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 5, f * 5, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 7, f * 7, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 9, f * 9, PI / 2, (PI * 3) / 2);
  q1.arc((f * 15) / 2, 0, f, f, 0, PI);
  q1.arc((f * 19) / 2, 0, f, f, 0, PI);
  q1.arc((f * 11) / 2, f * 11, f, f, PI, PI * 2);
  q1.arc((f * 15) / 2, f * 11, f, f, PI, PI * 2);
  q1.arc((f * 19) / 2, f * 11, f, f, PI, PI * 2);
  for (i = 0; i < 20; i++) {
    u1.strokeWeight(f / 2 - (f / 40) * i);
    u1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
    u1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
    u1.arc(0, 0, f * 6, f * 6, 0, PI / 2);
    u1.arc(0, 0, f * 8, f * 8, 0, PI / 2);
    u1.arc(0, 0, f * 10, f * 10, 0, PI / 2);
    u1.arc(0, 0, f * 12, f * 12, 0, PI / 2);
    u1.arc(0, f * 11, f * 2, f * 2, (PI * 3) / 2, PI * 2);
    u1.arc(0, f * 11, f * 4, f * 4, (PI * 3) / 2, PI * 2);
    u1.arc(0, f * 11, f * 6, f * 6, (PI * 3) / 2, PI * 2);
    u1.arc(0, f * 11, f * 8, f * 8, (PI * 3) / 2, PI * 2);
    u1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 3, f * 3, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 5, f * 5, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 7, f * 7, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 9, f * 9, PI / 2, (PI * 3) / 2);
    u1.arc((f * 15) / 2, 0, f, f, 0, PI);
    u1.arc((f * 19) / 2, 0, f, f, 0, PI);
    u1.arc((f * 11) / 2, f * 11, f, f, PI, PI * 2);
    u1.arc((f * 15) / 2, f * 11, f, f, PI, PI * 2);
    u1.arc((f * 19) / 2, f * 11, f, f, PI, PI * 2);
  }
}
function s7ta() {
  s3.erase();
  s3.stroke(0);
  s3.noFill();
  s3.strokeWeight(f * 4);
  s3.arc(0, 0, f * 5, f * 5, 0, PI / 2);
  s3.strokeWeight(f * 2);
  s3.arc(0, 0, f * 15, f * 15, 0, PI / 2);
  s3.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  s3.line((f * 19) / 2, 0, (f * 19) / 2, f * 11);
  s3.arc((f * 11) / 2, f * 11, f * 4, f * 4, PI, PI * 2);
  s3.noStroke();
  s3.fill(0);
  s3.ellipse(f * 11, (f * 3) / 2, f * 2);
  s3.ellipse(f * 11, (f * 7) / 2, f * 2);
  s3.ellipse(f * 11, (f * 15) / 2, f * 2);
  s3.ellipse(f * 11, (f * 19) / 2, f * 2);
  s2.erase();
  s2.stroke(0);
  s2.noFill();
  s2.strokeWeight(f * 2);
  s2.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  s2.line((f * 19) / 2, 0, (f * 19) / 2, f * 11);
  s2.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  s2.noStroke();
  s2.fill(0);
  s2.ellipse((f * 11) / 2, f * 11, f * 2);
  s2.ellipse(f * 11, (f * 3) / 2, f * 2);
  s2.ellipse(f * 11, (f * 19) / 2, f * 2);
  p1.erase();
  p1.noFill();
  p1.stroke(0);
  p1.strokeWeight(f);
  p1.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  p1.arc(0, 0, f * 7, f * 7, 0, PI / 2);
  p1.arc(0, 0, f * 11, f * 11, 0, PI / 2);
  p1.arc(0, 0, f * 15, f * 15, 0, PI / 2);
  p1.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  p1.arc((f * 11) / 2, f * 11, f * 4, f * 4, PI, PI * 2);
  p1.line((f * 19) / 2, 0, (f * 19) / 2, f * 11);
  p1.noStroke();
  p1.fill(0);
  p1.ellipse((f * 3) / 2, 0, f);
  p1.ellipse((f * 7) / 2, 0, f);
  p1.ellipse((f * 11) / 2, 0, f);
  p1.ellipse((f * 15) / 2, 0, f);
  p1.ellipse((f * 19) / 2, 0, f);
  p1.ellipse((f * 3) / 2, f * 11, f);
  p1.ellipse((f * 7) / 2, f * 11, f);
  p1.ellipse((f * 11) / 2, f * 11, f);
  p1.ellipse((f * 15) / 2, f * 11, f);
  p1.ellipse((f * 19) / 2, f * 11, f);
  p1.ellipse(0, (f * 3) / 2, f);
  p1.ellipse(0, (f * 7) / 2, f);
  p1.ellipse(0, (f * 11) / 2, f);
  p1.ellipse(0, (f * 15) / 2, f);
  p1.ellipse(0, (f * 19) / 2, f);
  p1.ellipse(0 + f * 11, (f * 3) / 2, f);
  p1.ellipse(0 + f * 11, (f * 7) / 2, f);
  p1.ellipse(0 + f * 11, (f * 11) / 2, f);
  p1.ellipse(0 + f * 11, (f * 15) / 2, f);
  p1.ellipse(0 + f * 11, (f * 19) / 2, f);
  q1.noFill();
  q1.stroke(0);if(fbgc=="Dark")q1.stroke("#ffffff");
  q1.strokeWeight(swf);if(fbgc=="Dark")q1.strokeWeight(swf*3/4);
  q1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
  q1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
  q1.arc(0, 0, f * 6, f * 6, 0, PI / 2);
  q1.arc(0, 0, f * 8, f * 8, 0, PI / 2);
  q1.arc(0, 0, f * 10, f * 10, 0, PI / 2);
  q1.arc(0, 0, f * 12, f * 12, 0, PI / 2);
  q1.arc(0, 0, f * 14, f * 14, 0, PI / 2);
  q1.arc(0, 0, f * 16, f * 16, 0, PI / 2);
  q1.arc(0, f * 11, f * 2, f * 2, (PI * 3) / 2, PI * 2);
  q1.arc(0, f * 11, f * 4, f * 4, (PI * 3) / 2, PI * 2);
  q1.arc((f * 11) / 2, f * 11, f, f, PI, PI * 2);
  q1.arc((f * 11) / 2, f * 11, f * 3, f * 3, PI, PI * 2);
  q1.arc((f * 11) / 2, f * 11, f * 5, f * 5, PI, PI * 2);
  q1.line(f * 9, 0, f * 9, f * 11);
  q1.line(f * 10, 0, f * 10, f * 11);
  q1.arc(f * 11, (f * 3) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 7) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 15) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 19) / 2, f, f, PI / 2, (PI * 3) / 2);
  for (i = 0; i < 20; i++) {
    u1.strokeWeight(f / 2 - (f / 40) * i);
    u1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
    u1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
    u1.arc(0, 0, f * 6, f * 6, 0, PI / 2);
    u1.arc(0, 0, f * 8, f * 8, 0, PI / 2);
    u1.arc(0, 0, f * 10, f * 10, 0, PI / 2);
    u1.arc(0, 0, f * 12, f * 12, 0, PI / 2);
    u1.arc(0, 0, f * 14, f * 14, 0, PI / 2);
    u1.arc(0, 0, f * 16, f * 16, 0, PI / 2);
    u1.arc(0, f * 11, f * 2, f * 2, (PI * 3) / 2, PI * 2);
    u1.arc(0, f * 11, f * 4, f * 4, (PI * 3) / 2, PI * 2);
    u1.arc((f * 11) / 2, f * 11, f, f, PI, PI * 2);
    u1.arc((f * 11) / 2, f * 11, f * 3, f * 3, PI, PI * 2);
    u1.arc((f * 11) / 2, f * 11, f * 5, f * 5, PI, PI * 2);
    u1.line(f * 9, 0, f * 9, f * 11);
    u1.line(f * 10, 0, f * 10, f * 11);
    u1.arc(f * 11, (f * 3) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 7) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 15) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 19) / 2, f, f, PI / 2, (PI * 3) / 2);
  }
}
function s6ta() {
  s3.erase();
  s3.stroke(0);
  s3.noFill();
  s3.strokeWeight(f * 4);
  s3.arc(0, 0, f * 5, f * 5, 0, PI / 2);
  s3.arc(f * 11, f * 11, f * 5, f * 5, PI, (PI * 3) / 2);
  s3.strokeWeight(f * 2);
  s3.arc(0, 0, f * 15, f * 15, 0, PI / 2);
  s3.arc(f * 11, 0, f * 3, f * 3, PI / 2, PI);
  s3.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  s3.noStroke();
  s3.fill(0);
  s3.ellipse(f * 11, (f * 7) / 2, f * 2);
  s3.ellipse((f * 7) / 2, f * 11, f * 2);
  s2.erase();
  s2.stroke(0);
  s2.noFill();
  s2.strokeWeight(f * 2);
  s2.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  s2.arc(f * 11, 0, f * 3, f * 3, PI / 2, PI);
  s2.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  s2.arc(f * 11, f * 11, f * 3, f * 3, PI, (PI * 3) / 2);
  p1.erase();
  p1.noFill();
  p1.stroke(0);
  p1.strokeWeight(f);
  p1.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  p1.arc(0, 0, f * 7, f * 7, 0, PI / 2);
  p1.arc(0, 0, f * 11, f * 11, 0, PI / 2);
  p1.arc(0, 0, f * 15, f * 15, 0, PI / 2);
  p1.arc(f * 11, f * 11, f * 3, f * 3, PI, (PI * 3) / 2);
  p1.arc(f * 11, f * 11, f * 7, f * 7, PI, (PI * 3) / 2);
  p1.arc(f * 11, f * 11, f * 11, f * 11, PI, (PI * 3) / 2);
  p1.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  p1.arc(f * 11, 0, f * 3, f * 3, PI / 2, PI);
  p1.noStroke();
  p1.fill(0);
  p1.ellipse((f * 3) / 2, 0, f);
  p1.ellipse((f * 7) / 2, 0, f);
  p1.ellipse((f * 11) / 2, 0, f);
  p1.ellipse((f * 15) / 2, 0, f);
  p1.ellipse((f * 19) / 2, 0, f);
  p1.ellipse((f * 3) / 2, f * 11, f);
  p1.ellipse((f * 7) / 2, f * 11, f);
  p1.ellipse((f * 11) / 2, f * 11, f);
  p1.ellipse((f * 15) / 2, f * 11, f);
  p1.ellipse((f * 19) / 2, f * 11, f);
  p1.ellipse(0, (f * 3) / 2, f);
  p1.ellipse(0, (f * 7) / 2, f);
  p1.ellipse(0, (f * 11) / 2, f);
  p1.ellipse(0, (f * 15) / 2, f);
  p1.ellipse(0, (f * 19) / 2, f);
  p1.ellipse(0 + f * 11, (f * 3) / 2, f);
  p1.ellipse(0 + f * 11, (f * 7) / 2, f);
  p1.ellipse(0 + f * 11, (f * 11) / 2, f);
  p1.ellipse(0 + f * 11, (f * 15) / 2, f);
  p1.ellipse(0 + f * 11, (f * 19) / 2, f);
  q1.noFill();
  q1.stroke(0);if(fbgc=="Dark")q1.stroke("#ffffff");
  q1.strokeWeight(swf);if(fbgc=="Dark")q1.strokeWeight(swf*3/4);
  q1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
  q1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
  q1.arc(0, 0, f * 6, f * 6, 0, PI / 2);
  q1.arc(0, 0, f * 8, f * 8, 0, PI / 2);
  q1.arc(0, 0, f * 10, f * 10, 0, PI / 2);
  q1.arc(0, 0, f * 12, f * 12, 0, PI / 2);
  q1.arc(0, 0, f * 14, f * 14, 0, PI / 2);
  q1.arc(0, 0, f * 16, f * 16, 0, PI / 2);
  q1.arc(f * 11, f * 11, f * 2, f * 2, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 4, f * 4, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 6, f * 6, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 8, f * 8, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 10, f * 10, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 12, f * 12, PI, (PI * 3) / 2);
  q1.arc(f * 11, 0, f * 2, f * 2, PI / 2, PI);
  q1.arc(f * 11, 0, f * 4, f * 4, PI / 2, PI);
  q1.arc(0, f * 11, f * 2, f * 2, (PI * 3) / 2, PI * 2);
  q1.arc(0, f * 11, f * 4, f * 4, (PI * 3) / 2, PI * 2);
  q1.arc(f * 11, (f * 7) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc((f * 7) / 2, f * 11, f, f, PI, PI * 2);
  for (i = 0; i < 20; i++) {
    u1.strokeWeight(f / 2 - (f / 40) * i);
    u1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
    u1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
    u1.arc(0, 0, f * 6, f * 6, 0, PI / 2);
    u1.arc(0, 0, f * 8, f * 8, 0, PI / 2);
    u1.arc(0, 0, f * 10, f * 10, 0, PI / 2);
    u1.arc(0, 0, f * 12, f * 12, 0, PI / 2);
    u1.arc(0, 0, f * 14, f * 14, 0, PI / 2);
    u1.arc(0, 0, f * 16, f * 16, 0, PI / 2);
    u1.arc(f * 11, f * 11, f * 2, f * 2, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 4, f * 4, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 6, f * 6, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 8, f * 8, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 10, f * 10, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 12, f * 12, PI, (PI * 3) / 2);
    u1.arc(f * 11, 0, f * 2, f * 2, PI / 2, PI);
    u1.arc(f * 11, 0, f * 4, f * 4, PI / 2, PI);
    u1.arc(0, f * 11, f * 2, f * 2, (PI * 3) / 2, PI * 2);
    u1.arc(0, f * 11, f * 4, f * 4, (PI * 3) / 2, PI * 2);
    u1.arc(f * 11, (f * 7) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc((f * 7) / 2, f * 11, f, f, PI, PI * 2);
  }
}
function s5ta() {
  s3.erase();
  s3.stroke(0);
  s3.noFill();
  s3.strokeWeight(f * 4);
  s3.arc(0, 0, f * 5, f * 5, 0, PI / 2);
  s3.strokeWeight(f * 2);
  s3.arc(0, 0, f * 15, f * 15, 0, PI / 2);
  s3.arc(f * 11, 0, f * 3, f * 3, PI / 2, PI);
  s3.arc(f * 11, f * 11, f * 3, f * 3, PI, (PI * 3) / 2);
  s3.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  s3.arc(f * 11, (f * 11) / 2, f * 4, f * 4, PI / 2, (PI * 3) / 2);
  s3.arc((f * 11) / 2, f * 11, f * 4, f * 4, PI, PI * 2);
  s2.erase();
  s2.stroke(0);
  s2.noFill();
  s2.strokeWeight(f * 2);
  s2.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  s2.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  s2.arc(f * 11, 0, f * 3, f * 3, PI / 2, PI);
  s2.arc(f * 11, f * 11, f * 3, f * 3, PI, (PI * 3) / 2);
  p1.erase();
  p1.noFill();
  p1.stroke(0);
  p1.strokeWeight(f);
  p1.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  p1.arc(0, 0, f * 7, f * 7, 0, PI / 2);
  p1.arc(0, 0, f * 11, f * 11, 0, PI / 2);
  p1.arc(0, 0, f * 15, f * 15, 0, PI / 2);
  p1.arc(f * 11, f * 11, f * 3, f * 3, PI, (PI * 3) / 2);
  p1.arc(f * 11, 0, f * 3, f * 3, PI / 2, PI);
  p1.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  p1.arc(f * 11, (f * 11) / 2, f * 4, f * 4, PI / 2, (PI * 3) / 2);
  p1.arc((f * 11) / 2, f * 11, f * 4, f * 4, PI, PI * 2);
  p1.noStroke();
  p1.fill(0);
  p1.ellipse((f * 3) / 2, 0, f);
  p1.ellipse((f * 7) / 2, 0, f);
  p1.ellipse((f * 11) / 2, 0, f);
  p1.ellipse((f * 15) / 2, 0, f);
  p1.ellipse((f * 19) / 2, 0, f);
  p1.ellipse((f * 3) / 2, f * 11, f);
  p1.ellipse((f * 7) / 2, f * 11, f);
  p1.ellipse((f * 11) / 2, f * 11, f);
  p1.ellipse((f * 15) / 2, f * 11, f);
  p1.ellipse((f * 19) / 2, f * 11, f);
  p1.ellipse(0, (f * 3) / 2, f);
  p1.ellipse(0, (f * 7) / 2, f);
  p1.ellipse(0, (f * 11) / 2, f);
  p1.ellipse(0, (f * 15) / 2, f);
  p1.ellipse(0, (f * 19) / 2, f);
  p1.ellipse(0 + f * 11, (f * 3) / 2, f);
  p1.ellipse(0 + f * 11, (f * 7) / 2, f);
  p1.ellipse(0 + f * 11, (f * 11) / 2, f);
  p1.ellipse(0 + f * 11, (f * 15) / 2, f);
  p1.ellipse(0 + f * 11, (f * 19) / 2, f);
  q1.noFill();
  q1.stroke(0);if(fbgc=="Dark")q1.stroke("#ffffff");
  q1.strokeWeight(swf);if(fbgc=="Dark")q1.strokeWeight(swf*3/4);
  q1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
  q1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
  q1.arc(0, 0, f * 6, f * 6, 0, PI / 2);
  q1.arc(0, 0, f * 8, f * 8, 0, PI / 2);
  q1.arc(0, 0, f * 10, f * 10, 0, PI / 2);
  q1.arc(0, 0, f * 12, f * 12, 0, PI / 2);
  q1.arc(0, 0, f * 14, f * 14, 0, PI / 2);
  q1.arc(0, 0, f * 16, f * 16, 0, PI / 2);
  q1.arc(f * 11, f * 11, f * 2, f * 2, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 4, f * 4, PI, (PI * 3) / 2);
  q1.arc(f * 11, 0, f * 2, f * 2, PI / 2, PI);
  q1.arc(f * 11, 0, f * 4, f * 4, PI / 2, PI);
  q1.arc(0, f * 11, f * 2, f * 2, (PI * 3) / 2, PI * 2);
  q1.arc(0, f * 11, f * 4, f * 4, (PI * 3) / 2, PI * 2);
  q1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 3, f * 3, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 5, f * 5, PI / 2, (PI * 3) / 2);
  q1.arc((f * 11) / 2, f * 11, f, f, PI, PI * 2);
  q1.arc((f * 11) / 2, f * 11, f * 3, f * 3, PI, PI * 2);
  q1.arc((f * 11) / 2, f * 11, f * 5, f * 5, PI, PI * 2);
  for (i = 0; i < 20; i++) {
    u1.strokeWeight(f / 2 - (f / 40) * i);
    u1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
    u1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
    u1.arc(0, 0, f * 6, f * 6, 0, PI / 2);
    u1.arc(0, 0, f * 8, f * 8, 0, PI / 2);
    u1.arc(0, 0, f * 10, f * 10, 0, PI / 2);
    u1.arc(0, 0, f * 12, f * 12, 0, PI / 2);
    u1.arc(0, 0, f * 14, f * 14, 0, PI / 2);
    u1.arc(0, 0, f * 16, f * 16, 0, PI / 2);
    u1.arc(f * 11, f * 11, f * 2, f * 2, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 4, f * 4, PI, (PI * 3) / 2);
    u1.arc(f * 11, 0, f * 2, f * 2, PI / 2, PI);
    u1.arc(f * 11, 0, f * 4, f * 4, PI / 2, PI);
    u1.arc(0, f * 11, f * 2, f * 2, (PI * 3) / 2, PI * 2);
    u1.arc(0, f * 11, f * 4, f * 4, (PI * 3) / 2, PI * 2);
    u1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 3, f * 3, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 5, f * 5, PI / 2, (PI * 3) / 2);
    u1.arc((f * 11) / 2, f * 11, f, f, PI, PI * 2);
    u1.arc((f * 11) / 2, f * 11, f * 3, f * 3, PI, PI * 2);
    u1.arc((f * 11) / 2, f * 11, f * 5, f * 5, PI, PI * 2);
  }
}
function s4ta() {
  s3.erase();
  s3.stroke(0);
  s3.noFill();
  s3.strokeWeight(f * 4);
  s3.arc(0, 0, f * 5, f * 5, 0, PI / 2);
  s3.arc(0, 0, f * 17, f * 17, 0, PI / 2);
  s3.arc(f * 11, f * 11, f * 5, f * 5, PI, (PI * 3) / 2);
  s3.noStroke();
  s3.fill(0);
  s3.ellipse(f * 11, (f * 3) / 2, f * 2);
  s3.ellipse(f * 11, (f * 7) / 2, f * 2);
  s3.ellipse((f * 3) / 2, f * 11, f * 2);
  s3.ellipse((f * 7) / 2, f * 11, f * 2);
  s2.erase();
  s2.stroke(0);
  s2.noFill();
  s2.strokeWeight(f * 2);
  s2.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  s2.arc(0, 0, f * 19, f * 19, 0, PI / 2);
  s2.arc(f * 11, f * 11, f * 3, f * 3, PI, (PI * 3) / 2);
  s2.noStroke();
  s2.fill(0);
  s2.ellipse((f * 3) / 2, f * 11, f * 2);
  s2.ellipse(f * 11, (f * 3) / 2, f * 2);
  p1.erase();
  p1.noFill();
  p1.stroke(0);
  p1.strokeWeight(f);
  p1.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  p1.arc(0, 0, f * 7, f * 7, 0, PI / 2);
  p1.arc(0, 0, f * 11, f * 11, 0, PI / 2);
  p1.arc(0, 0, f * 15, f * 15, 0, PI / 2);
  p1.arc(0, 0, f * 19, f * 19, 0, PI / 2);
  p1.arc(f * 11, f * 11, f * 3, f * 3, PI, (PI * 3) / 2);
  p1.arc(f * 11, f * 11, f * 7, f * 7, PI, (PI * 3) / 2);
  p1.noStroke();
  p1.fill(0);
  p1.ellipse((f * 3) / 2, 0, f);
  p1.ellipse((f * 7) / 2, 0, f);
  p1.ellipse((f * 11) / 2, 0, f);
  p1.ellipse((f * 15) / 2, 0, f);
  p1.ellipse((f * 19) / 2, 0, f);
  p1.ellipse((f * 3) / 2, f * 11, f);
  p1.ellipse((f * 7) / 2, f * 11, f);
  p1.ellipse((f * 11) / 2, f * 11, f);
  p1.ellipse((f * 15) / 2, f * 11, f);
  p1.ellipse((f * 19) / 2, f * 11, f);
  p1.ellipse(0, (f * 3) / 2, f);
  p1.ellipse(0, (f * 7) / 2, f);
  p1.ellipse(0, (f * 11) / 2, f);
  p1.ellipse(0, (f * 15) / 2, f);
  p1.ellipse(0, (f * 19) / 2, f);
  p1.ellipse(0 + f * 11, (f * 3) / 2, f);
  p1.ellipse(0 + f * 11, (f * 7) / 2, f);
  p1.ellipse(0 + f * 11, (f * 11) / 2, f);
  p1.ellipse(0 + f * 11, (f * 15) / 2, f);
  p1.ellipse(0 + f * 11, (f * 19) / 2, f);
  q1.noFill();
  q1.stroke(0);if(fbgc=="Dark")q1.stroke("#ffffff");
  q1.strokeWeight(swf);if(fbgc=="Dark")q1.strokeWeight(swf*3/4);
  q1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
  q1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
  q1.arc(0, 0, f * 6, f * 6, 0, PI / 2);
  q1.arc(0, 0, f * 8, f * 8, 0, PI / 2);
  q1.arc(0, 0, f * 10, f * 10, 0, PI / 2);
  q1.arc(0, 0, f * 12, f * 12, 0, PI / 2);
  q1.arc(0, 0, f * 14, f * 14, 0, PI / 2);
  q1.arc(0, 0, f * 16, f * 16, 0, PI / 2);
  q1.arc(0, 0, f * 18, f * 18, 0, PI / 2);
  q1.arc(0, 0, f * 20, f * 20, 0, PI / 2);
  q1.arc(f * 11, f * 11, f * 2, f * 2, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 4, f * 4, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 6, f * 6, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 8, f * 8, PI, (PI * 3) / 2);
  q1.arc(f * 11, (f * 3) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 7) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc((f * 3) / 2, f * 11, f, f, PI, PI * 2);
  q1.arc((f * 7) / 2, f * 11, f, f, PI, PI * 2);
  q1.arc((f * 11) / 2, f * 11, f, f, PI, PI * 2);
  for (i = 0; i < 20; i++) {
    u1.strokeWeight(f / 2 - (f / 40) * i);
    u1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
    u1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
    u1.arc(0, 0, f * 6, f * 6, 0, PI / 2);
    u1.arc(0, 0, f * 8, f * 8, 0, PI / 2);
    u1.arc(0, 0, f * 10, f * 10, 0, PI / 2);
    u1.arc(0, 0, f * 12, f * 12, 0, PI / 2);
    u1.arc(0, 0, f * 14, f * 14, 0, PI / 2);
    u1.arc(0, 0, f * 16, f * 16, 0, PI / 2);
    u1.arc(0, 0, f * 18, f * 18, 0, PI / 2);
    u1.arc(0, 0, f * 20, f * 20, 0, PI / 2);
    u1.arc(f * 11, f * 11, f * 2, f * 2, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 4, f * 4, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 6, f * 6, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 8, f * 8, PI, (PI * 3) / 2);
    u1.arc(f * 11, (f * 3) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 7) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc((f * 3) / 2, f * 11, f, f, PI, PI * 2);
    u1.arc((f * 7) / 2, f * 11, f, f, PI, PI * 2);
    u1.arc((f * 11) / 2, f * 11, f, f, PI, PI * 2);
  }
}
function s3ta() {
  s3.erase();
  s3.stroke(0);
  s3.noFill();
  s3.strokeWeight(f * 4);
  s3.arc(0, 0, f * 5, f * 5, 0, PI / 2);
  s3.arc(f * 11, 0, f * 5, f * 5, PI / 2, PI);
  s3.arc(0, f * 11, f * 5, f * 5, (PI * 3) / 2, PI * 2);
  s3.arc(f * 11, f * 11, f * 5, f * 5, PI, (PI * 3) / 2);
  s3.strokeWeight(f * 2);
  s3.arc(f * 11, (f * 11) / 2, f * 4, f * 4, PI / 2, (PI * 3) / 2);
  s3.line((f * 15) / 2, 0, (f * 15) / 2, f * 11);
  s2.erase();
  s2.stroke(0);
  s2.noFill();
  s2.strokeWeight(f * 2);
  s2.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  s2.arc(f * 11, 0, f * 3, f * 3, PI / 2, PI);
  s2.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  s2.arc(f * 11, f * 11, f * 3, f * 3, PI, (PI * 3) / 2);
  p1.erase();
  p1.noFill();
  p1.stroke(0);
  p1.strokeWeight(f);
  p1.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  p1.arc(0, 0, f * 7, f * 7, 0, PI / 2);
  p1.arc(f * 11, f * 11, f * 3, f * 3, PI, (PI * 3) / 2);
  p1.arc(f * 11, 0, f * 3, f * 3, PI / 2, PI);
  p1.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  p1.arc(0, f * 11, f * 7, f * 7, (PI * 3) / 2, PI * 2);
  p1.line((f * 15) / 2, 0, (f * 15) / 2, f * 11);
  p1.line((f * 11) / 2, 0, (f * 11) / 2, f * 11);
  p1.arc(f * 11, (f * 11) / 2, f * 4, f * 4, PI / 2, (PI * 3) / 2);
  p1.noStroke();
  p1.fill(0);
  p1.ellipse((f * 3) / 2, 0, f);
  p1.ellipse((f * 7) / 2, 0, f);
  p1.ellipse((f * 11) / 2, 0, f);
  p1.ellipse((f * 15) / 2, 0, f);
  p1.ellipse((f * 19) / 2, 0, f);
  p1.ellipse((f * 3) / 2, f * 11, f);
  p1.ellipse((f * 7) / 2, f * 11, f);
  p1.ellipse((f * 11) / 2, f * 11, f);
  p1.ellipse((f * 15) / 2, f * 11, f);
  p1.ellipse((f * 19) / 2, f * 11, f);
  p1.ellipse(0, (f * 3) / 2, f);
  p1.ellipse(0, (f * 7) / 2, f);
  p1.ellipse(0, (f * 11) / 2, f);
  p1.ellipse(0, (f * 15) / 2, f);
  p1.ellipse(0, (f * 19) / 2, f);
  p1.ellipse(0 + f * 11, (f * 3) / 2, f);
  p1.ellipse(0 + f * 11, (f * 7) / 2, f);
  p1.ellipse(0 + f * 11, (f * 11) / 2, f);
  p1.ellipse(0 + f * 11, (f * 15) / 2, f);
  p1.ellipse(0 + f * 11, (f * 19) / 2, f);
  q1.noFill();
  q1.stroke(0);if(fbgc=="Dark")q1.stroke("#ffffff");
  q1.strokeWeight(swf);if(fbgc=="Dark")q1.strokeWeight(swf*3/4);
  q1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
  q1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
  q1.arc(0, 0, f * 6, f * 6, 0, PI / 2);
  q1.arc(0, 0, f * 8, f * 8, 0, PI / 2);
  q1.arc(f * 11, f * 11, f * 2, f * 2, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 4, f * 4, PI, (PI * 3) / 2);
  q1.arc(f * 11, 0, f * 2, f * 2, PI / 2, PI);
  q1.arc(f * 11, 0, f * 4, f * 4, PI / 2, PI);
  q1.arc(0, f * 11, f * 2, f * 2, (PI * 3) / 2, PI * 2);
  q1.arc(0, f * 11, f * 4, f * 4, (PI * 3) / 2, PI * 2);
  q1.arc(0, f * 11, f * 6, f * 6, (PI * 3) / 2, PI * 2);
  q1.arc(0, f * 11, f * 8, f * 8, (PI * 3) / 2, PI * 2);
  q1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 3, f * 3, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f * 5, f * 5, PI / 2, (PI * 3) / 2);
  q1.arc(0, (f * 11) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
  q1.line(f * 5, f * 0, f * 5, f * 11);
  q1.line(f * 6, f * 0, f * 6, f * 11);
  q1.line(f * 7, f * 0, f * 7, f * 11);
  q1.line(f * 8, f * 0, f * 8, f * 11);
  for (i = 0; i < 20; i++) {
    u1.strokeWeight(f / 2 - (f / 40) * i);
    u1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
    u1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
    u1.arc(0, 0, f * 6, f * 6, 0, PI / 2);
    u1.arc(0, 0, f * 8, f * 8, 0, PI / 2);
    u1.arc(f * 11, f * 11, f * 2, f * 2, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 4, f * 4, PI, (PI * 3) / 2);
    u1.arc(f * 11, 0, f * 2, f * 2, PI / 2, PI);
    u1.arc(f * 11, 0, f * 4, f * 4, PI / 2, PI);
    u1.arc(0, f * 11, f * 2, f * 2, (PI * 3) / 2, PI * 2);
    u1.arc(0, f * 11, f * 4, f * 4, (PI * 3) / 2, PI * 2);
    u1.arc(0, f * 11, f * 6, f * 6, (PI * 3) / 2, PI * 2);
    u1.arc(0, f * 11, f * 8, f * 8, (PI * 3) / 2, PI * 2);
    u1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 3, f * 3, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f * 5, f * 5, PI / 2, (PI * 3) / 2);
    u1.arc(0, (f * 11) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
    u1.line(f * 5, f * 0, f * 5, f * 11);
    u1.line(f * 6, f * 0, f * 6, f * 11);
    u1.line(f * 7, f * 0, f * 7, f * 11);
    u1.line(f * 8, f * 0, f * 8, f * 11);
  }
}
function s1ta() {
  s3.erase();
  s3.stroke(0);
  s3.noFill();
  s3.strokeWeight(f * 4);
  s3.arc(0, 0, f * 5, f * 5, 0, PI / 2);
  s3.arc(f * 11, 0, f * 5, f * 5, PI / 2, PI);
  s3.arc(0, f * 11, f * 5, f * 5, (PI * 3) / 2, PI * 2);
  s3.arc(f * 11, f * 11, f * 5, f * 5, PI, (PI * 3) / 2);
  s2.erase();
  s2.stroke(0);
  s2.noFill();
  s2.strokeWeight(f * 2);
  s2.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  s2.arc(f * 11, 0, f * 3, f * 3, PI / 2, PI);
  s2.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  s2.arc(f * 11, f * 11, f * 3, f * 3, PI, (PI * 3) / 2);
  p1.erase();
  p1.noFill();
  p1.stroke(0);
  p1.strokeWeight(f);
  p1.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  p1.arc(0, 0, f * 7, f * 7, 0, PI / 2);
  p1.arc(0, 0, f * 11, f * 11, 0, PI / 2);
  p1.arc(f * 11, f * 11, f * 3, f * 3, PI, (PI * 3) / 2);
  p1.arc(f * 11, f * 11, f * 7, f * 7, PI, (PI * 3) / 2);
  p1.arc(f * 11, f * 11, f * 11, f * 11, PI, (PI * 3) / 2);
  p1.arc(f * 11, 0, f * 3, f * 3, PI / 2, PI);
  p1.arc(f * 11, 0, f * 7, f * 7, PI / 2, PI);
  p1.arc(0, f * 11, f * 3, f * 3, (PI * 3) / 2, PI * 2);
  p1.arc(0, f * 11, f * 7, f * 7, (PI * 3) / 2, PI * 2);
  p1.noStroke();
  p1.fill(0);
  p1.ellipse((f * 3) / 2, 0, f);
  p1.ellipse((f * 7) / 2, 0, f);
  p1.ellipse((f * 11) / 2, 0, f);
  p1.ellipse((f * 15) / 2, 0, f);
  p1.ellipse((f * 19) / 2, 0, f);
  p1.ellipse((f * 3) / 2, f * 11, f);
  p1.ellipse((f * 7) / 2, f * 11, f);
  p1.ellipse((f * 11) / 2, f * 11, f);
  p1.ellipse((f * 15) / 2, f * 11, f);
  p1.ellipse((f * 19) / 2, f * 11, f);
  p1.ellipse(0, (f * 3) / 2, f);
  p1.ellipse(0, (f * 7) / 2, f);
  p1.ellipse(0, (f * 11) / 2, f);
  p1.ellipse(0, (f * 15) / 2, f);
  p1.ellipse(0, (f * 19) / 2, f);
  p1.ellipse(0 + f * 11, (f * 3) / 2, f);
  p1.ellipse(0 + f * 11, (f * 7) / 2, f);
  p1.ellipse(0 + f * 11, (f * 11) / 2, f);
  p1.ellipse(0 + f * 11, (f * 15) / 2, f);
  p1.ellipse(0 + f * 11, (f * 19) / 2, f);
  q1.noFill();
  q1.stroke(0);if(fbgc=="Dark")q1.stroke("#ffffff");
  q1.strokeWeight(swf);if(fbgc=="Dark")q1.strokeWeight(swf*3/4);
  q1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
  q1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
  q1.arc(0, 0, f * 6, f * 6, 0, PI / 2);
  q1.arc(0, 0, f * 8, f * 8, 0, PI / 2);
  q1.arc(0, 0, f * 10, f * 10, 0, PI / 2);
  q1.arc(0, 0, f * 12, f * 12, 0, PI / 2);
  q1.arc(f * 11, f * 11, f * 2, f * 2, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 4, f * 4, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 6, f * 6, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 8, f * 8, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 10, f * 10, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 12, f * 12, PI, (PI * 3) / 2);
  q1.arc(f * 11, 0, f * 2, f * 2, PI / 2, PI);
  q1.arc(f * 11, 0, f * 4, f * 4, PI / 2, PI);
  q1.arc(f * 11, 0, f * 6, f * 6, PI / 2, PI);
  q1.arc(f * 11, 0, f * 8, f * 8, PI / 2, PI);
  q1.arc(0, f * 11, f * 2, f * 2, (PI * 3) / 2, PI * 2);
  q1.arc(0, f * 11, f * 4, f * 4, (PI * 3) / 2, PI * 2);
  q1.arc(0, f * 11, f * 6, f * 6, (PI * 3) / 2, PI * 2);
  q1.arc(0, f * 11, f * 8, f * 8, (PI * 3) / 2, PI * 2);
  for (i = 0; i < 20; i++) {
    u1.strokeWeight(f / 2 - (f / 40) * i);
    u1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
    u1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
    u1.arc(0, 0, f * 6, f * 6, 0, PI / 2);
    u1.arc(0, 0, f * 8, f * 8, 0, PI / 2);
    u1.arc(0, 0, f * 10, f * 10, 0, PI / 2);
    u1.arc(0, 0, f * 12, f * 12, 0, PI / 2);
    u1.arc(f * 11, f * 11, f * 2, f * 2, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 4, f * 4, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 6, f * 6, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 8, f * 8, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 10, f * 10, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 12, f * 12, PI, (PI * 3) / 2);
    u1.arc(f * 11, 0, f * 2, f * 2, PI / 2, PI);
    u1.arc(f * 11, 0, f * 4, f * 4, PI / 2, PI);
    u1.arc(f * 11, 0, f * 6, f * 6, PI / 2, PI);
    u1.arc(f * 11, 0, f * 8, f * 8, PI / 2, PI);
    u1.arc(0, f * 11, f * 2, f * 2, (PI * 3) / 2, PI * 2);
    u1.arc(0, f * 11, f * 4, f * 4, (PI * 3) / 2, PI * 2);
    u1.arc(0, f * 11, f * 6, f * 6, (PI * 3) / 2, PI * 2);
    u1.arc(0, f * 11, f * 8, f * 8, (PI * 3) / 2, PI * 2);
  }
}
function s2ta() {
  s3.erase();
  s3.stroke(0);
  s3.noFill();
  s3.strokeWeight(f * 2);
  s3.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  s3.arc(0, 0, f * 19, f * 19, 0, PI / 2);
  s3.arc((f * 11) / 2, 0, f * 4, f * 4, 0, PI);
  s3.arc(0, (f * 11) / 2, f * 4, f * 4, (PI * 3) / 2, (PI * 5) / 2);
  s3.strokeWeight(f * 4);
  s3.arc(f * 11, f * 11, f * 5, f * 5, PI, (PI * 3) / 2);
  s3.noStroke();
  s3.fill(0);
  s3.ellipse(f * 11, (f * 3) / 2, f * 2);
  s3.ellipse(f * 11, (f * 7) / 2, f * 2);
  s3.ellipse((f * 3) / 2, f * 11, f * 2);
  s3.ellipse((f * 7) / 2, f * 11, f * 2);
  s2.erase();
  s2.stroke(0);
  s2.noFill();
  s2.strokeWeight(f * 2);
  s2.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  s2.arc(0, 0, f * 19, f * 19, 0, PI / 2);
  s2.arc(f * 11, f * 11, f * 3, f * 3, PI, (PI * 3) / 2);
  s2.noStroke();
  s2.fill(0);
  s2.ellipse((f * 11) / 2, 0, f * 2);
  s2.ellipse(0, (f * 11) / 2, f * 2);
  s2.ellipse((f * 11) / 2, f * 11, f * 2);
  s2.ellipse((f * 3) / 2, f * 11, f * 2);
  s2.ellipse(f * 11, (f * 3) / 2, f * 2);
  s2.ellipse(f * 11, (f * 11) / 2, f * 2);
  p1.erase();
  p1.noFill();
  p1.stroke(0);
  p1.strokeWeight(f);
  p1.arc(0, 0, f * 3, f * 3, 0, PI / 2);
  p1.arc(0, 0, f * 19, f * 19, 0, PI / 2);
  p1.arc(f * 11, f * 11, f * 3, f * 3, PI, (PI * 3) / 2);
  p1.arc(f * 11, f * 11, f * 7, f * 7, PI, (PI * 3) / 2);
  p1.arc((f * 11) / 2, 0, f * 4, f * 4, 0, PI);
  p1.arc(0, (f * 11) / 2, f * 4, f * 4, (PI * 3) / 2, (PI * 5) / 2);
  p1.noStroke();
  p1.fill(0);
  p1.ellipse((f * 3) / 2, 0, f);
  p1.ellipse((f * 7) / 2, 0, f);
  p1.ellipse((f * 11) / 2, 0, f);
  p1.ellipse((f * 15) / 2, 0, f);
  p1.ellipse((f * 19) / 2, 0, f);
  p1.ellipse((f * 3) / 2, f * 11, f);
  p1.ellipse((f * 7) / 2, f * 11, f);
  p1.ellipse((f * 11) / 2, f * 11, f);
  p1.ellipse((f * 15) / 2, f * 11, f);
  p1.ellipse((f * 19) / 2, f * 11, f);
  p1.ellipse(0, (f * 3) / 2, f);
  p1.ellipse(0, (f * 7) / 2, f);
  p1.ellipse(0, (f * 11) / 2, f);
  p1.ellipse(0, (f * 15) / 2, f);
  p1.ellipse(0, (f * 19) / 2, f);
  p1.ellipse(0 + f * 11, (f * 3) / 2, f);
  p1.ellipse(0 + f * 11, (f * 7) / 2, f);
  p1.ellipse(0 + f * 11, (f * 11) / 2, f);
  p1.ellipse(0 + f * 11, (f * 15) / 2, f);
  p1.ellipse(0 + f * 11, (f * 19) / 2, f);
  q1.noFill();
  q1.stroke(0);if(fbgc=="Dark")q1.stroke("#ffffff");
  q1.strokeWeight(swf);if(fbgc=="Dark")q1.strokeWeight(swf*3/4);
  q1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
  q1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
  q1.arc(0, 0, f * 18, f * 18, 0, PI / 2);
  q1.arc(0, 0, f * 20, f * 20, 0, PI / 2);
  q1.arc(f * 11, f * 11, f * 2, f * 2, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 4, f * 4, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 6, f * 6, PI, (PI * 3) / 2);
  q1.arc(f * 11, f * 11, f * 8, f * 8, PI, (PI * 3) / 2);
  q1.arc((f * 11) / 2, 0, f * 3, f * 3, 0, PI);
  q1.arc((f * 11) / 2, 0, f * 5, f * 5, 0, PI);
  q1.arc(0, (f * 11) / 2, f * 3, f * 3, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(0, (f * 11) / 2, f * 5, f * 5, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc((f * 11) / 2, 0, f, f, 0, PI);
  q1.arc((f * 3) / 2, f * 11, f, f, PI, PI * 2);
  q1.arc((f * 7) / 2, f * 11, f, f, PI, PI * 2);
  q1.arc((f * 11) / 2, f * 11, f, f, PI, PI * 2);
  q1.arc(0, (f * 11) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
  q1.arc(f * 11, (f * 3) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 7) / 2, f, f, PI / 2, (PI * 3) / 2);
  q1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
  for (i = 0; i < 20; i++) {
    u1.strokeWeight(f / 2 - (f / 40) * i);
    u1.arc(0, 0, f * 4, f * 4, 0, PI / 2);
    u1.arc(0, 0, f * 2, f * 2, 0, PI / 2);
    u1.arc(0, 0, f * 18, f * 18, 0, PI / 2);
    u1.arc(0, 0, f * 20, f * 20, 0, PI / 2);
    u1.arc(f * 11, f * 11, f * 2, f * 2, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 4, f * 4, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 6, f * 6, PI, (PI * 3) / 2);
    u1.arc(f * 11, f * 11, f * 8, f * 8, PI, (PI * 3) / 2);
    u1.arc((f * 11) / 2, 0, f * 3, f * 3, 0, PI);
    u1.arc((f * 11) / 2, 0, f * 5, f * 5, 0, PI);
    u1.arc(0, (f * 11) / 2, f * 3, f * 3, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(0, (f * 11) / 2, f * 5, f * 5, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc((f * 11) / 2, 0, f, f, 0, PI);
    u1.arc((f * 3) / 2, f * 11, f, f, PI, PI * 2);
    u1.arc((f * 7) / 2, f * 11, f, f, PI, PI * 2);
    u1.arc((f * 11) / 2, f * 11, f, f, PI, PI * 2);
    u1.arc(0, (f * 11) / 2, f, f, (PI * 3) / 2, (PI * 5) / 2);
    u1.arc(f * 11, (f * 3) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 7) / 2, f, f, PI / 2, (PI * 3) / 2);
    u1.arc(f * 11, (f * 11) / 2, f, f, PI / 2, (PI * 3) / 2);
  }
}

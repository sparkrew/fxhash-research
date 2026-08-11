function pastel(tw, th) {
  sh1 = color("#2d2d2d04");
  sh2 = color("#2d2d2d09");
  sh3 = color("#2d2d2d0e");
  sh4 = color("#2d2d2d13");
  sh5 = color("#2d2d2d18");
  sh6 = color("#2d2d2d1d");
  sh7 = color("#2d2d2d22");
  sh8 = color("#2d2d2d27");
  hi1 = color("#dadada04");
  hi2 = color("#dadada09");
  hi3 = color("#dadada0e");
  hi4 = color("#dadada13");
  hi5 = color("#dadada18");
  hi6 = color("#dadada1d");
  hi7 = color("#dadada22");
  hi8 = color("#dadada27");
  sha = [sh1, sh2, sh3, sh4, sh5, sh6, sh7, sh8];
  hia = [hi1, hi2, hi3, hi4, hi5, hi6, hi7, hi8];
  psw = csw / 10;
  psh = csh / 10;
  pst = createGraphics(psw, psh);
  divp = int(random(16, 21));
  ww = psw / divp;
  w = (ww * 2) / 3;
  ph = w * sqrt(2 / 3);
  divh = psh / ph;
  pst.noStroke();
  for (let j = 0; j < divh; j++) {
    for (let i = 0; i < divp; i++) {
      pst.fill(sha[int(random(0, 8))]);
      pst.beginShape();
      pst.vertex(
        i * ww + w / 2 - w * random(0, 0.2),
        j * ph * 2 + ph * random(0, 0.2)
      );
      pst.vertex(
        i * ww + w / 4 - w * random(0, 0.2),
        j * ph * 2 + ph * random(0.8, 1)
      );
      pst.vertex(
        i * ww - w / 4 + w * random(0, 0.2),
        j * ph * 2 + ph * random(0.8, 1)
      );
      pst.vertex(
        i * ww - w / 2 + w * random(0, 0.2),
        j * ph * 2 + ph * random(0, 0.2)
      );
      pst.endShape();
      pst.fill(sha[int(random(0, 8))]);
      pst.ellipse(
        i * ww + random(-w / 4, w / 4),
        j * ph * 2 + ph * random(0.3, 0.7),
        random(w * 0.2, w * 0.6),
        random(ph * 0.2, ph * 0.6)
      );
      pst.fill(hia[int(random(0, 8))]);
      pst.beginShape();
      pst.vertex(
        i * ww + w * random(0, 0.2),
        j * ph * 2 - ph * random(0.1, 0.3)
      );
      pst.vertex(
        i * ww + w / 2 - w * random(0, 0.2),
        j * ph * 2 - ph * random(0, 0.2)
      );
      pst.vertex(
        i * ww + w / 4 - w * random(0, 0.2),
        j * ph * 2 - ph * random(0.8, 1)
      );
      pst.vertex(i * ww + w * random(0, 0.2), j * ph * 2 - ph * random(0.8, 1));
      pst.endShape();
      pst.fill(hia[int(random(0, 8))]);
      pst.ellipse(
        i * ww + random(-w / 4, w / 4),
        j * ph * 2 - ph * random(0.3, 0.7),
        random(w * 0.2, w * 0.6),
        random(ph * 0.2, ph * 0.6)
      );
    }
  }
  for (let j = 0; j < divh; j++) {
    for (let i = 0; i < divp; i++) {
      pst.fill(sha[int(random(0, 8))]);
      pst.beginShape();
      pst.vertex(i * ww + (w * 3) / 4, j * ph * 2 + ph);
      pst.vertex(
        i * ww + w / 2 + (w * 3) / 4 - w * random(0, 0.2),
        j * ph * 2 + ph + ph * random(0, 0.2)
      );
      pst.vertex(
        i * ww + w / 4 + (w * 3) / 4 - w * random(0, 0.2),
        j * ph * 2 + ph + ph * random(0.8, 1)
      );
      pst.vertex(
        i * ww - w / 4 + (w * 3) / 4 + w * random(0, 0.2),
        j * ph * 2 + ph + ph * random(0.8, 1)
      );
      pst.vertex(
        i * ww - w / 2 + (w * 3) / 4 + w * random(0, 0.2),
        j * ph * 2 + ph + ph * random(0, 0.2)
      );
      pst.vertex(i * ww + (w * 3) / 4, j * ph * 2 + ph);
      pst.endShape();
      pst.fill(sha[int(random(0, 8))]);
      pst.ellipse(
        i * ww + (w * 3) / 4 + random(-w / 4, w / 4),
        j * ph * 2 + ph + ph * random(0.3, 0.7),
        random(w * 0.2, w * 0.6),
        random(ph * 0.2, ph * 0.6)
      );
      pst.fill(hia[int(random(0, 8))]);
      pst.beginShape();
      pst.vertex(
        i * ww + (w * 3) / 4 + w * random(0, 0.2),
        j * ph * 2 + ph - ph * random(0.1, 0.3)
      );
      pst.vertex(
        i * ww + (w * 3) / 4 + w / 2 - w * random(0, 0.2),
        j * ph * 2 + ph - ph * random(0, 0.2)
      );
      pst.vertex(
        i * ww + (w * 3) / 4 + w / 4 - w * random(0, 0.2),
        j * ph * 2 + ph - ph * random(0.8, 1)
      );
      pst.vertex(
        i * ww + (w * 3) / 4 + w * random(0, 0.2),
        j * ph * 2 + ph - ph * random(0.8, 1)
      );
      pst.endShape();
      pst.fill(hia[int(random(0, 8))]);
      pst.ellipse(
        i * ww + (w * 3) / 4 + random(-w / 4, w / 4),
        j * ph * 2 + ph - ph * random(0.3, 0.7),
        random(w * 0.2, w * 0.6),
        random(ph * 0.2, ph * 0.6)
      );
    }
  }
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      lm.image(pst, i * psw, j * psh);
    }
  }
}

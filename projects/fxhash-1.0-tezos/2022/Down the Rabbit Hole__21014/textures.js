function makeTexture() {
  counter += 9876;
  randomSeed(seedStart + counter);
  textType = random(12);
  //textType = 9.3;
  if (textureOn == true) {
    if (textType < 3) {
      //3
      watercolor();
    } else if (textType < 5) {
      //5
      circles();
    } else if (textType < 7) {
      //7
      paperTexture2();
    } else if (textType < 10) {
      //10
      lashes();
    } else if (textType < 12) {
      quadGrid();
    }
  }
  counter += 9876;
  randomSeed(seedStart + counter);
}

function watercolor() {
  cnv[cnt].background(h, s, b, 200);
  if (textureOn == true) {
    numb3 = (size * size) / 50; //number of watercolor drawings needed based on square inches
    t2 = x;
    u2 = y;
    hMax = h + 11;
    hMin = h - 11;
    hue2 = h;
    s2 = s;
    b2 = b;
    sMax = s + 12;
    sMin = s - 12;
    bMax = b + 10;
    bMin = b - 15;
    alph2 = 13; //13
    for (q = 0; q < numb3; q++) {
      t2 = t2 + random(-mv, mv);
      u2 = u2 + random(-mv, mv);
      hue2 = hue2 + random(-colmv, colmv);
      s2 = s2 + random(-colmv * 2, colmv * 2);
      b2 = b2 + random(-colmv * 2, colmv * 2);
      if (t2 < x - size / 1.7) {
        t2 = x + size / 1.7;
      } else if (t2 > x + size / 1.7) {
        t2 = x - size / 1.7;
      }
      if (u2 < y - size / 1.7) {
        u2 = y + size / 1.7;
      } else if (u2 > y + size / 1.7) {
        u2 = y - size / 1.7;
      }
      if (hue2 > hMax) {
        hue2 = hMax;
      } else if (hue2 < hMin) {
        hue2 = hMin;
      }
      h2 = hue2;
      if (hue2 > 360) {
        h2 = hue2 - 360;
      } else if (hue2 < 0) {
        h2 = hue2 + 360;
      }
      if (s2 > sMax) {
        s2 = sMax;
      }
      if (s2 < sMin) {
        s2 = sMin;
      }
      if (b2 > bMax) {
        b2 = bMax;
      } else if (b2 < bMin) {
        b2 = bMin;
      }
      cnv[cnt].fill(h2, s2, b2, alph2);
      cnv[cnt].noStroke();
      cnv[cnt].beginShape();
      for (m3 = 0; m3 < PI * 2; m3 += 0.9) {
        r3 = width * random(0.035, 0.07);
        let x7 = cos(m3) * r3 + t2;
        let y7 = sin(m3) * r3 + u2;
        cnv[cnt].vertex(x7, y7);
      }
      cnv[cnt].endShape(CLOSE);
    }
    counter += 999;
    randomSeed(seedStart + counter);
  }
}

function grain() {
  // pixD is pixel density
  loadPixels();
  grVary = 11; //11
  for (x = 0; x < width; x++) {
    for (y = 0; y < height * pixD * pixD; y++) {
      pos = (x + y * width) * 4;
      pixels[pos] = pixels[pos] + random(-grVary, grVary);
      pixels[pos + 1] = pixels[pos + 1] + random(-grVary, grVary);
      pixels[pos + 2] = pixels[pos + 2] + random(-grVary, grVary);
    }
  }
  updatePixels();
  print("grain done");
}

function paperTexture() {
  counter += 999;
  randomSeed(seedStart + counter);
  noFill();
  textureNum = (width * height) / 50;
  colorMode(RGB);
  loadPixels();
  for (i = 0; i < textureNum; i++) {
    x = floor(random(-width * 0.2, width * 1.2));
    y = floor(random(-height * 0.2, height * 1.2));
    pos = (x + y * width) * 4;
    rgbVary = 8;
    r = (pixels[pos] + random(-rgbVary, rgbVary)) * 0.8 + random(80, 170) * 0.2;
    g =
      (pixels[pos + 1] + random(-rgbVary, rgbVary)) * 0.8 +
      random(80, 170) * 0.2;
    b =
      (pixels[pos + 2] + random(-rgbVary, rgbVary)) * 0.8 +
      random(80, 170) * 0.2;
    stroke(r, g, b, 16); //16
    push();
    translate(x, y);
    strokeWeight(0.6);
    rotate(random(PI * 2));
    curve(
      width * random(0.035, 0.14),
      0,
      0,
      width * random(-0.03, 0.03),
      width * random(-0.03, 0.03),
      width * random(0.035, 0.07),
      width * random(0.035, 0.07),
      width * random(0.035, 0.14)
    );
    pop();
  }
  colorMode(HSB, 360, 120, 100, 255);
  counter += 999;
  randomSeed(seedStart + counter);
}

function paperTexture2() {
  cnv[cnt].noFill();
  textureNum = (size * size) / 60;
  for (a = 0; a < textureNum; a++) {
    x4 = floor(random(x - size / 1.5, x + size / 1.5));
    y4 = floor(random(y - size / 1.5, y + size / 1.5));
    cnv[cnt].stroke(
      h + random(-15, 15),
      s + random(-15, 15),
      b + random(-12, 12),
      200
    );
    cnv[cnt].push();
    cnv[cnt].translate(x4, y4);
    cnv[cnt].strokeWeight(0.6);
    cnv[cnt].point(0, 0);
    cnv[cnt].strokeWeight(1);
    cnv[cnt].rotate(random(PI * 2));
    cnv[cnt].curve(
      width * random(0.27, 0.37),
      0,
      0,
      width * random(-0.03, 0.03),
      width * random(-0.35, 0.35),
      width * random(0.35, 0.07),
      width * random(0.35, 0.07),
      width * random(0.27, 0.37)
    );
    cnv[cnt].pop();
  }
}

function circles() {
  cnv[cnt].noFill();
  cnv[cnt].strokeWeight(2);
  let circAlph = random(70, 90);
  for (a = 1; a < size * 1.3; a += random(2, 3)) {
    cnv[cnt].stroke(
      h + random(-15, 15),
      s + random(-15, 15),
      b + random(-15, 15),
      circAlph
    );
    cnv[cnt].circle(
      x + cnv[cnt].width * random(-0.03, 0.03),
      y + cnv[cnt].width * random(-0.03, 0.03),
      a
    );
  }
}

function lashes() {
  cnv[cnt].noFill();
  lashType = random(2);
  if (size3 == null) {
    size4 = size;
  } else {
    size4 = size3;
  }
  textureNum = (size4 * size4) / 60;
  cnv[cnt].push();
  cnv[cnt].translate(x, y);
  cnv[cnt].rotate(rot);
  cnv[cnt].strokeWeight(3);
  for (a = 0; a < textureNum; a++) {
    x4 = random(-size4 / 1.7, size4 / 1.7);
    y4 = random(-size4 / 1.7, size4 / 1.7);
    cnv[cnt].stroke(
      h + random(-15, 15),
      s + random(-15, 15),
      b + random(-12, 15),
      100
    );
    cnv[cnt].push();
    cnv[cnt].translate(x4, y4);
    if (lashType < 1) {
      cnv[cnt].line(
        0,
        0,
        width * random(0.06, 0.09),
        width * random(-0.02, 0.02)
      );
    } else {
      if (random(2) < 1) {
        cnv[cnt].line(
          0,
          0,
          width * random(0.06, 0.09),
          width * random(-0.02, 0.02)
        );
      } else {
        cnv[cnt].line(
          0,
          0,
          width * random(-0.02, 0.02),
          width * random(0.06, 0.09)
        );
      }
    }
    cnv[cnt].pop();
  }
  cnv[cnt].pop();
}

function quadGrid() {
  let gridSpace = width * random(0.009, 0.017);
  let points = [];
  let gridVary = gridSpace / 4;
  cnv[cnt].stroke(0, 150, 30);
  cnv[cnt].strokeWeight(0.6);
  cnv[cnt].push();
  cnv[cnt].translate(x, y);
  cnv[cnt].rotate(rot);
  let size4;
  if (size3 == null) {
    size4 = size;
  } else {
    size4 = size3;
  }
  size4 = size4 * 1.8;
  let wNumb = floor((size4 * 2) / gridSpace) + 1;
  let colGridVary = random(10, 15);
  for (y9 = -size4; y9 < size4; y9 += gridSpace) {
    for (x9 = -size4; x9 < size4; x9 += gridSpace) {
      points.push(
        createVector(
          x9 + random(-gridVary, gridVary),
          y9 + random(-gridVary, gridVary)
        )
      );
      if (y9 > -size4 + gridSpace && x9 > -size4 + gridSpace) {
        pos = points.length - 1;
        cnv[cnt].fill(
          h + random(-colGridVary, colGridVary),
          s + random(-colGridVary, colGridVary),
          b + random(-colGridVary, colGridVary)
        );
        cnv[cnt].quad(
          points[pos].x,
          points[pos].y,
          points[pos - 1].x,
          points[pos - 1].y,
          points[pos - wNumb - 1].x,
          points[pos - wNumb - 1].y,
          points[pos - wNumb].x,
          points[pos - wNumb].y
        );
      }
    }
  }
  cnv[cnt].pop();
}

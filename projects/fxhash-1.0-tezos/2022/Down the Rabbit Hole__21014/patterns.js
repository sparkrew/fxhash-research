function patterns() {
  m2 = cnt;
  cnv[m2].push();
  cnv[m2].translate(x, y);
  cnv[m2].rotate(random(PI));
  cnv[m2].strokeWeight(1);
  //pType = 0.3
  if (pType < 1) {
    petals();
  } else if (pType < 2) {
    diamonds();
  } else if (pType < 3) {
    dots();
  } else if (pType < 4) {
    print10();
  }
  cnv[m2].pop();
}

function petals() {
  cnv[m2].noStroke();
  getColor();
  cnv[m2].fill(h, s, b - 60);
  for (x9 = -cnv[m2].width * 0.61; x9 < cnv[m2].width * 0.61; x9 += dotSpace) {
    for (
      y9 = -cnv[m2].width * 0.61;
      y9 < cnv[m2].height * 0.61;
      y9 += dotSpace
    ) {
      for (i9 = 0; i9 < 8; i9++) {
        cnv[m2].push();
        cnv[m2].translate(x9, y9);
        cnv[m2].rotate(i9 * PI * 0.25);
        cnv[m2].beginShape();
        cnv[m2].curveVertex(intSpace + dotSize, 0);
        cnv[m2].curveVertex(intSpace + dotSize, 0);
        cnv[m2].curveVertex(intSpace + dotSize * 0.25, -dotSize * 0.25);
        cnv[m2].curveVertex(intSpace, 0);
        cnv[m2].curveVertex(intSpace + dotSize * 0.25, +dotSize * 0.25);
        cnv[m2].curveVertex(intSpace + dotSize, 0);
        cnv[m2].curveVertex(intSpace + dotSize, 0);
        cnv[m2].endShape();
        cnv[m2].pop();
      }
    }
  }
  if (-cnv[m2].width * 0.61 + dotSpace * 0.5 < cnv[m2].width * 0.61) {
    for (
      x9 = -cnv[m2].width * 0.61 + dotSpace * 0.5;
      x9 < cnv[m2].width * 0.61;
      x9 += dotSpace
    ) {
      for (
        y9 = -cnv[m2].width * 0.61 + dotSpace * 0.5;
        y9 < cnv[m2].width * 0.61;
        y9 += dotSpace
      ) {
        for (i9 = 0; i9 < 8; i9++) {
          cnv[m2].push();
          cnv[m2].translate(x9, y9);
          cnv[m2].rotate(i9 * PI * 0.25);
          cnv[m2].beginShape();
          cnv[m2].curveVertex(intSpace + dotSize, 0);
          cnv[m2].curveVertex(intSpace + dotSize, 0);
          cnv[m2].curveVertex(intSpace + dotSize * 0.25, -dotSize * 0.25);
          cnv[m2].curveVertex(intSpace, 0);
          cnv[m2].curveVertex(intSpace + dotSize * 0.25, +dotSize * 0.25);
          cnv[m2].curveVertex(intSpace + dotSize, 0);
          cnv[m2].curveVertex(intSpace + dotSize, 0);
          cnv[m2].endShape();
          cnv[m2].pop();
        }
      }
    }
  }
}

function diamonds() {
  cnv[m2].noStroke();
  dotSpace = dotSpace - width * 0.02;
  getColor();
  cnv[m2].fill(h, s, b - 50);
  tri1 = width * random(0.025, 0.035);
  tri2 = width * random(0.0025, 0.0035);
  tri3 = width * random(0.008, 0.012);
  for (x9 = -cnv[m2].width * 0.61; x9 < cnv[m2].width * 0.61; x9 += dotSpace) {
    for (
      y9 = -cnv[m2].width * 0.61;
      y9 < cnv[m2].height * 0.61;
      y9 += dotSpace
    ) {
      cnv[m2].triangle(
        x9,
        y9 - tri1,
        x9 - tri2,
        y9 - tri3,
        x9 + tri2,
        y9 - tri3
      );
      cnv[m2].triangle(
        x9,
        y9 + tri1,
        x9 - tri2,
        y9 + tri3,
        x9 + tri2,
        y9 + tri3
      );
      cnv[m2].triangle(
        x9 - tri1,
        y9,
        x9 - tri3,
        y9 - tri2,
        x9 - tri3,
        y9 + tri2
      );
      cnv[m2].triangle(
        x9 + tri1,
        y9,
        x9 + tri3,
        y9 - tri2,
        x9 + tri3,
        y9 + tri2
      );
    }
  }
  for (
    x9 = -cnv[m2].width * 0.61 + dotSpace / 2;
    x9 < cnv[m2].width * 0.61;
    x9 += dotSpace
  ) {
    for (
      y9 = -cnv[m2].width * 0.61 + dotSpace / 2;
      y9 < cnv[m2].height * 0.61;
      y9 += dotSpace
    ) {
      cnv[m2].triangle(
        x9,
        y9 - tri1,
        x9 - tri2,
        y9 - tri3,
        x9 + tri2,
        y9 - tri3
      );
      cnv[m2].triangle(
        x9,
        y9 + tri1,
        x9 - tri2,
        y9 + tri3,
        x9 + tri2,
        y9 + tri3
      );
      cnv[m2].triangle(
        x9 - tri1,
        y9,
        x9 - tri3,
        y9 - tri2,
        x9 - tri3,
        y9 + tri2
      );
      cnv[m2].triangle(
        x9 + tri1,
        y9,
        x9 + tri3,
        y9 - tri2,
        x9 + tri3,
        y9 + tri2
      );
    }
  }
}

function dots() {
  //circles or squares
  getColor();
  dotSpace = dotSpace / 2;
  dotSize = dotSize / 2;
  let shType, alfvary;
  if (dotDetail == 0) {
    shType = 0;
    alfvary9 = 0;
  } else if (dotDetail == 1) {
    shType = 0;
    alfvary9 = 1;
  } else if (dotDetail == 2) {
    shType = 1;
    alfvary9 = 0;
  } else if (dotDetail == 3) {
    shType = 1;
    alfvary9 = 1;
  }
  let oddDotSize = random(2);
  if (oddDotSize < 1 && random(3) < 2) {
    cnv[m2].stroke(h, s, b);
  }
  for (
    x9 = -cnv[m2].width * 0.61 - dotSpace;
    x9 < cnv[m2].width * 0.61;
    x9 += dotSpace
  ) {
    for (
      y9 = -cnv[m2].width * 0.61 - dotSpace;
      y9 < cnv[m2].height * 0.61;
      y9 += dotSpace
    ) {
      if (alfvary9 < 1) {
        cnv[m2].fill(h, s, b - 60, random(60, 255));
        cnv[m2].noStroke();
      } else {
        cnv[m2].noFill();
        cnv[m2].strokeWeight(max(1, width * 0.003));
        cnv[m2].stroke(h, s, b - 60);
      }
      if (oddDotSize < 1) {
        if (shType < 1) {
          cnv[m2].circle(x9, y9, size);
        } else {
          cnv[m2].square(x9, y9, size);
        }
      } else {
        if (shType < 1) {
          cnv[m2].circle(x9, y9, dotSize);
        } else {
          cnv[m2].square(x9, y9, dotSize);
        }
      }
    }
  }
  for (
    x9 = -cnv[m2].width * 0.61 - dotSpace;
    x9 < cnv[m2].width * 0.61;
    x9 += dotSpace
  ) {
    for (
      y9 = -cnv[m2].width * 0.61 - dotSpace;
      y9 < cnv[m2].height * 0.61;
      y9 += dotSpace
    ) {
      if (shType < 1) {
        cnv[m2].circle(x9, y9, dotSize);
      } else {
        cnv[m2].square(x9, y9, dotSize);
      }
    }
  }
}

function print10() {
  printed10 = true;
  dotSpace = dotSize/10; //dotSpace / 6 - width * 0.01;
  if (random(2) < 1) {
    cnv[m2].stroke(h, s, b - 60);
  } else {
    cnv[m2].stroke(0, 0, random(-25, 25));
  }
  cnv[m2].strokeWeight(max(1, width * 0.003));
  for (
    x9 = -cnv[m2].width * 0.61;
    x9 < cnv[m2].width * 0.61;
    x9 += dotSize + dotSpace
  ) {
    for (
      y9 = -cnv[m2].width * 0.61;
      y9 < cnv[m2].height * 0.61;
      y9 += dotSize + dotSpace
    ) {
      c9 = random(0, 2);
      if (c9 < 1) {
        cnv[m2].line(x9, y9, x9 + dotSize, y9 + dotSize);
      } else if (c9 < 2) {
        cnv[m2].line(x9, y9 + dotSize, x9 + dotSize, y9);
      } else if (c9 < 3) {
        cnv[m2].line(x9, y9, x9, y9 + dotSize);
      } else if (c9 < 4) {
        cnv[m2].line(x9, y9, x9 + dotSize, y9);
      }
    }
  }
}

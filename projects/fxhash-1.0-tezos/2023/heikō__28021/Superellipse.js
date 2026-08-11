class Superellipse {
  constructor(x, y, a, b, n, r, c) {
    this.x = x;
    this.y = y;
    this.a = a;
    this.b = b;
    this.n = n;
    // this.r = 1;
    this.rotation = r;
    this.c = c;
  }

  draw() {
    if (this.c == 1) {
      fill(plt(1));
    } else if (this.c == 2) {
      fill(243, 245, 246);
    }

    strokeJoin(ROUND);
    beginShape();
    for (let angle = 0; angle < TWO_PI; angle += 0.03) {
      let na = 2 / this.n;
      let rotatedAngle = angle + this.rotation; // Apply rotation
      let px =
        pow(abs(cos(rotatedAngle)), na) * this.a * sgn(cos(rotatedAngle)) +
        random(2);
      let py =
        pow(abs(sin(rotatedAngle)), na) * this.b * sgn(sin(rotatedAngle)) +
        random(2);

      let rotatedPx = px * cos(this.rotation) - py * sin(this.rotation);
      let rotatedPy = px * sin(this.rotation) + py * cos(this.rotation);
      noStroke();
      vertex(this.x + rotatedPx, this.y + rotatedPy);
    }
    endShape(CLOSE);
  }

  textures() {
    //texture
    let textureFill = plt(2);
    let wr = max(this.b, this.a);
    let hr = min(this.b, this.a);
    let offset = wr / hr;
    let offsetY = map(offset, 1, 2, 0, 30);

    let meanXl = this.x - wr; // Center X position
    let meanYl = this.y + hr + offsetY; // Center Y position
    let meanXr = this.x + wr; // Center X position
    let meanYr = this.y + hr + offsetY; // Center Y position

    let stdDev = map(wr, 10, 20, 6, 12); // Standard deviation (controls how spread out the points are)
    let dotsN = map(wr, 10, 20, 700, 8000); // Mapping the number of dots

    for (let i = 0; i < dotsN; i++) {
      let x = randomGaussian(meanXl, stdDev);
      if (x < meanXl) {
        x = meanXl - x + meanXl;
      }

      let y = randomGaussian(meanYl, stdDev);
      if (y > meanYl) {
        y = meanYl - y + meanYl;
      }

      let pointCheck = createVector(x, y);
      let isInside = this.isPointInside(pointCheck);
      if (isInside) {
        if (this.c == 1) {
          fill(textureFill);
        } else if (this.c == 2) {
          fill(244, 54, 105, 70);
        }

        noStroke();
        ellipse(x + 1, y + 1, 1.5, 1.5);
      }
    }

    for (let i = 0; i < dotsN; i++) {
      let x = randomGaussian(meanXr, stdDev);
      if (x > meanXr) {
        x = meanXr - x + meanXr;
      }
      let y = randomGaussian(meanYr, stdDev);
      if (y > meanYr) {
        y = meanYr - y + meanYr;
      }

      let pointCheck = createVector(x, y);
      let isInside = this.isPointInside(pointCheck);
      if (isInside) {
        noStroke();
        ellipse(x + 1, y + 1, 1.5, 1.5);
      }
    }
  }

  outlines() {
    noFill();
    strokeWeight(plt(5));
    let shift = +1;
    if (random(-1, 1) > 0) {
      shift = +1;
    } else {
      shift = -1;
    }

    beginShape();

    let shiftX = random(4, 6) * shift;
    let shiftY = random(4, 6) * shift;
    for (let angle = 0; angle < TWO_PI; angle += 0.03) {
      let na = 2 / this.n;
      let rotatedAngle = angle + this.rotation; // Apply rotation
      let px =
        pow(abs(cos(rotatedAngle)), na) * this.a * sgn(cos(rotatedAngle));
      let py =
        pow(abs(sin(rotatedAngle)), na) * this.b * sgn(sin(rotatedAngle));

      let rotatedPx = px * cos(this.rotation) - py * sin(this.rotation);
      let rotatedPy = px * sin(this.rotation) + py * cos(this.rotation);
      stroke(plt(4));

      vertex(this.x + rotatedPx + shiftX, this.y + rotatedPy + shiftY);
    }
    endShape(CLOSE);
  }

  isPointInside(point) {
    let na = 2 / this.n;
    let cosRotation = cos(this.rotation);
    let sinRotation = sin(this.rotation);
    let rotatedX =
      (point.x - this.x) * cosRotation + (point.y - this.y) * sinRotation;
    let rotatedY =
      (point.y - this.y) * cosRotation - (point.x - this.x) * sinRotation;

    let lhs =
      pow(abs(rotatedX / this.a), this.n) + pow(abs(rotatedY / this.b), this.n);
    let rhs = 1;

    return lhs <= rhs;
  }
}

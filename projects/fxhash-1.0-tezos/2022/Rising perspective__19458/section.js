class Section {
  constructor(pos, x, y, w, h, ws, hs, els, incl, bn, br, cl, rainbow) {
    this.pos = pos;
    this.x = x;
    this.y = y;
    this.cnvWidth = w;
    this.cnvHeight = h;
    this.widthSpaces = ws;
    this.heightSpaces = hs;
    this.cnv = null;
    this.cnv2 = null;
    this.elements = els;
    this.inclination = incl;
    this.inclStr = incl > 1.5 ? incl / 2 : incl;
    this.birdNumber = bn;
    this.birdRotation = br;
    this.birdXLayer = floor(bn / 5);
    this.sparingBirds = bn % 5;

    this.birds = [];

    for (let i = 0; i < 5; i++) {
      let tempBirds = [];
      for (
        let j = 0;
        j < (i == 4 ? this.birdXLayer + this.sparingBirds : this.birdXLayer);
        j++
      ) {
        tempBirds.push({
          x: rnd(0, 100),
          y: rnd(0, 80),
          dim: rnd(2.5, 8),
          rotation: rnd(-20, 20),
        });
      }
      this.birds.push(tempBirds);
    }
    this.clouds = cl;
    this.hasRainbow = rainbow;
  }

  init() {
    this.cnv = createGraphics(this.cnvWidth, this.cnvHeight);
    this.cnv.pixelDensity(1);
    this.cnv.clear();
    this.cnv.colorMode(HSB);
    this.cnv.rectMode(CENTER);
    this.cnv.angleMode(DEGREES);
    this.cnv.background(createColor(palette.bg, 1));

    this.cnv2 = createGraphics(this.cnvWidth, this.cnvHeight);
    this.cnv2.pixelDensity(1);
    this.cnv2.clear();
    this.cnv2.colorMode(HSB);
    this.cnv2.rectMode(CENTER);
    this.cnv2.angleMode(DEGREES);

    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].cnv = this.cnv;
      this.elements[i].init(this.cnvWidth, this.cnvHeight);
    }
  }

  draw(time) {
    for (let i = 0; i < this.elements.length; i++) {
      switch (this.elements[i].type) {
        case "Regular":
          this.elements[i].drawRegular(
            time,
            this.heightSpaces,
            this.inclination
          );
          break;
        case "Irregular":
          this.elements[i].drawIrregular(
            time,
            this.heightSpaces,
            this.inclination
          );
          break;
        default:
          break;
      }
    }
    if (time < 80) {
      this.cnv.noStroke();
      this.cnv.fillPattern(seaPatterns[time]);
      this.cnv.rect(0, 0, this.cnvWidth * 2, this.cnvHeight * 2);
    }

    if (time == 150 && this.hasRainbow) {
      this.drawRainbow();
    }

    if (time > maxTime - 11 && time <= maxTime - 6) {
      for (let i = 0; i < this.birds[maxTime - 6 - time].length; i++) {
        this.drawBird(this.birds[maxTime - 6 - time][i]);
      }
    }

    let clo = this.clouds.filter((c) => c.time == time);
    for (let i = 0; i < clo.length; i++) {
      this.cnv.push();
      this.cnv.noStroke();
      this.cnv.fill(
        createCloudColor(palette.clouds, clo[i].colorVar, clo[i].alpha)
      );
      this.cnv.ellipse(
        getCoordFromPerc(clo[i].x, this.cnvWidth),
        getCoordFromPerc(clo[i].y, this.cnvHeight),
        clo[i].w * mult,
        (clo[i].h / this.inclination) * mult
      );
      this.cnv.pop();
    }
  }

  drawRainbow() {
    const lineW = rnd(3, 17) * mult;
    this.cnv2.push();

    const pX = rnd(-30, 130);
    const pY = 100;
    const ww = rnd(100, 100 + 10 * this.heightSpaces);

    this.cnv2.noFill();
    this.cnv2.strokeWeight(lineW / 2);
    const colors = [300, 250, 200, 135, 80, 40, 0];

    for (let i = 0; i < 7; i++) {
      this.cnv2.stroke(createColor({ h: colors[i], s: 100, b: 100 }, 0.2));

      this.cnv2.ellipse(
        getCoordFromPerc(pX, this.cnvWidth),
        getCoordFromPerc(pY, this.cnvHeight),
        getCoordFromPerc(ww, this.cnvWidth) + lineW * i
      );
    }
    this.cnv2.pop();
  }

  drawBird(bird) {
    this.cnv.push();

    const x = getCoordFromPerc(bird.x, this.cnvWidth);
    const y = getCoordFromPerc(bird.y, this.cnvHeight);
    this.cnv.translate(x, y);
    this.cnv.rotate(this.birdRotation + bird.rotation);
    const color = createColor(palette.bird, 1);
    this.cnv.fill(color);

    let s = (bird.dim / 5) * mult;
    this.cnv.noStroke();

    this.cnv.beginShape();
    let xB = 0;
    let yB = 0;

    this.cnv.vertex(xB, yB);
    this.cnv.bezierVertex(xB, yB, xB, yB, xB + s, yB + s / 5);
    xB += s;
    yB += s / 5;
    this.cnv.bezierVertex(xB, yB, xB, yB, xB + s * 1.5, yB + s / 1.3);
    xB += s * 1.5;
    yB += s / 1.3;
    this.cnv.bezierVertex(xB, yB, xB, yB, xB, yB - s * 1.2);
    yB -= s * 1.2;
    this.cnv.bezierVertex(xB, yB, xB, yB, xB + s / 2, yB + s * 0.4);
    xB += s / 2;
    yB += s * 0.4;
    this.cnv.bezierVertex(xB, yB, xB, yB, xB, yB + s * 0.8);
    yB += s * 0.8;
    this.cnv.bezierVertex(xB, yB, xB, yB, xB + s * 1.5, yB - s / 1.3);
    xB += s * 1.5;
    yB -= s / 1.3;
    this.cnv.bezierVertex(xB, yB, xB, yB, xB + s, yB - s / 5);
    xB += s;
    yB -= s / 5;
    this.cnv.bezierVertex(
      xB - s * 2,
      yB + s * 2,
      xB - s,
      yB + s,
      xB - s * 2.5,
      yB + s * 1.8
    );
    xB -= s * 2.5;
    yB += s * 1.8;
    this.cnv.bezierVertex(xB, yB, xB, yB, xB, yB + s * 0.3);
    yB += s * 0.3;

    this.cnv.bezierVertex(xB, yB, xB, yB, xB + s * 0.5, yB);
    xB += s * 0.5;

    this.cnv.bezierVertex(
      xB - s * 0.5,
      yB + s * 1.2,
      xB - s,
      yB + s * 1.2,
      xB - s * 1.5,
      yB
    );
    xB -= s * 1.5;
    this.cnv.bezierVertex(xB, yB, xB, yB, xB + s * 0.5, yB);
    xB += s * 0.5;
    this.cnv.bezierVertex(xB, yB, xB, yB, xB, yB - s * 0.3);
    yB -= s * 0.3;

    this.cnv.bezierVertex(
      xB - s * 2,
      yB - s,
      xB - s,
      yB - s * 0.2,
      xB - s * 2.5,
      yB - s * 1.8
    );
    xB -= s * 2.5;
    yB -= s * 1.8;
    this.cnv.endShape();
    this.cnv.pop();
  }
}

class Pillar {
  constructor(type, x, y, w, dp, tr, vertex) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.initialW = w;
    this.w = w;
    this.wDir = -1;
    this.dead = false;
    this.deadPoint = dp;
    this.cnv = null;
    this.translateRange = tr;
    this.vertex = vertex;
    this.perc = 100;
  }

  init(sectionWidth, sectionHeight) {
    this.x = getCoordFromPerc(this.x, sectionWidth);
    this.y = getCoordFromPerc(this.y, sectionHeight);
  }

  drawRegular(time, heightSpaces, inclination) {
    if (!this.dead) {
      this.cnv.push();
      this.cnv.translate(0, (-time / 3) * (heightSpaces / 2) * mult);

      let r = rnd(-1.5, 1.5);
      let xVar = (this.translateRange * this.w * r * mult) / 1.1;

      this.cnv.translate(xVar, 0);

      //alone
      if (time < 60 && rnd(0, 100) > 75) {
        this.cnv.push();
        this.cnv.noFill();
        this.cnv.strokeWeight(rnd(0.3, 3) * mult);
        this.cnv.stroke(createColor(white, rnd(0.1, 0.2)));
        this.cnv.ellipse(
          this.x,
          this.y,
          this.w * 1.5 * mult,
          ((this.w * 1.5) / inclination) * mult
        );
        this.cnv.pop();
      }

      //roccia
      this.cnv.strokeWeight((0.35 / this.inclStr) * mult);

      const patt = rockPatterns[floor(rnd(0, rockPatterns.length - 1))];

      this.cnv.stroke(patt.stroke);
      this.cnv.fill(patt.stroke);
      this.cnv.fillPattern(patt.fill);
      this.cnv.ellipse(
        this.x,
        this.y,
        this.w * mult,
        (this.w / inclination) * mult
      );

      //ombra
      if (time < this.deadPoint - 1) {
        var c = createColor(black, 0.125);
        this.cnv.fill(c);
        this.cnv.stroke(c);

        this.cnv.arc(
          this.x,
          this.y,
          this.w * mult,
          (this.w / inclination) * mult,
          0,
          90
        );
        this.cnv.arc(
          this.x,
          this.y,
          this.w * mult,
          (this.w / inclination) * mult,
          13,
          77
        );
      }

      this.cnv.pop();
      this.w += rnd(0.03, 0.05) * this.wDir;

      if (time % 10 == 9) {
        this.wDir = this.wDir * -1;
        this.w += this.w * rnd(0.2, 0.7) * this.wDir;
      }
    }

    if (
      this.w <= 2.5 ||
      (time > this.deadPoint && this.wDir == 1 && time % 10 > 5)
    )
      this.dead = true;
  }

  drawIrregular(time, heightSpaces, inclination) {
    if (!this.dead) {
      this.cnv.push();
      this.cnv.translate(this.x, this.y);
      this.cnv.translate(0, (-time / 3) * (heightSpaces / 2) * mult);
 
      let r = rnd(-1.5, 1.5);
      let xVar = (this.translateRange * this.w * r * mult) / 1.5;

      this.cnv.translate(xVar, 0);

      //alone
      if (time < 60 && rnd(0, 100) > 75) {
        this.cnv.push();
        this.cnv.noFill();
        this.cnv.strokeWeight(rnd(0.3, 3) * mult);
        this.cnv.stroke(createColor(white, rnd(0.1, 0.2)));
        this.cnv.beginShape();
        for (let i = 0; i < this.vertex.length; i++) {
          this.cnv.vertex(
            (this.vertex[i].x * this.perc * 1.5) / 100,
            (this.vertex[i].y * this.perc * 1.5) / inclination / 100
          );
        }
        this.cnv.endShape(CLOSE);
        this.cnv.pop();
      }

      //roccia
      this.cnv.strokeWeight((0.35 / this.inclStr) * mult);

      const patt = rockPatterns[floor(rnd(0, rockPatterns.length - 1))];

      this.cnv.stroke(patt.stroke);
      this.cnv.fill(patt.stroke);
      this.cnv.fillPattern(patt.fill);

      this.cnv.beginShape();
      for (let i = 0; i < this.vertex.length; i++) {
        this.cnv.vertex(
          (this.vertex[i].x * this.perc) / 100,
          (this.vertex[i].y * this.perc) / inclination / 100
        );
      }
      this.cnv.endShape(CLOSE);

      //ombra
      if (time < this.deadPoint - 1) {
        var c = createColor(black, 0.25);
        this.cnv.fill(c);
        this.cnv.stroke(c);
        this.cnv.noStroke();
        this.cnv.beginShape();
        this.cnv.vertex(0, 0);
        for (let i = 0; i < this.vertex.length; i++) {
          if (this.vertex[i].x > 0 && this.vertex[i].y > 0)
            this.cnv.vertex(
              (this.vertex[i].x * this.perc) / 100,
              (this.vertex[i].y * this.perc) / inclination / 100
            );
        }
        this.cnv.endShape(CLOSE);
      }

      this.cnv.pop();
      this.perc -= 0.25;
   

      if (time % 15 == 14) {
        this.wDir = this.wDir * -1;
        this.perc +=
          this.perc *
          (this.wDir > 0 ? rnd(0.2, 0.7) : rnd(0.2, 0.5)) *
          this.wDir;
      }
    }

    if (this.perc <= 15 || time > this.deadPoint) this.dead = true;
  }
}

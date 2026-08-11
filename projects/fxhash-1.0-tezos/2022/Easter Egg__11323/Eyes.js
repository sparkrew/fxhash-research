class Eyes {
  constructor() {
    this.eyeFrameRad = rndInt(15, 40);
    this.pupilRad = rndInt(20, 40);
    this.pupilInnerOffset = { w: rndFloat(0, 0.5), h: rndFloat(-0.5, 0.5) };
    this.weirdLook = rndFloat() < 0.01;
    this.wOff = rndInt(70, 150);
    this.w = rndInt(70, 250);
    this.h = rndInt(150, 200);
    this.m = egg.p
      .copy()
      .addAngle(-PI05, egg.h + rndInt(egg.h * 0.05, egg.h * 0.25))
      .addAngle(0, this.wOff);
    this.innerRatH = rndFloat(0.15, 0.3);
    this.innerRatW = rndFloat(0.15, 0.3);
    this.innerOffsetW = rndInt(0, Math.min(this.wOff, this.w)) * 0.4;
    this.innerOffsetH = rndInt(-this.h, this.h) * 0.4;

    this.pupil = new Vec2(
      this.m.x - this.innerOffsetW,
      this.m.y + this.innerOffsetH
    );
    this.eyeColor = [
      "rgba(200,50,50,1)",
      "green",
      "blue",
      "rgba(150,150,250,1)",
      "rgba(150,250,250,1)",
      "rgba(250,150,150,1)",
      "orange",
      "yellow",
      "black",
    ][rndInt(0, 6)];
    this.initOuterShape();

    this.initInnerShape();

    this.flowField = new Flowfield(100);
  }

  renderShape() {
    let ct = cforeGround;

    ct.fillStyle = "rgba(0,0,0,0.2)";
    drawAndMirror(ct, () => {
      ct.save();
      ct.globalCompositeOperation = "destionation-out";
      ct.translate(this.m.x, this.m.y);
      ct.scale(1 + 20 / this.w, 1 + this.eyeFrameRad / this.h);
      ct.translate(-this.m.x, -this.m.y);
      ct.translate(this.w * 0.02, 0);
      ct.fillRect(this.m.x, this.m.y, 10, 10);
      ct.fill(this.outerPath);

      ct.restore();
    });

    ct.fillStyle = "rgba(220,220,220,1)";

    drawAndMirror(ct, () => {
      ct.fill(this.outerPath);
    });
    drawAndMirror(ct, () => {
      ct.save();
      ct.clip(this.outerPath);
      let is420 = new Date().getMonth() == 3 && new Date().getDate() == 20;
      for (let i = 0; i < 360; i++) {
        let ang = (i / 360) * PI2;
        let p = this.pupil.copy();
        ct.lineWidth = is420 ? 0.15 : rndFloat(0.05, 0.1);
        ct.beginPath();
        ct.moveTo(p.x, p.y);
        ct.strokeStyle = is420 ? "red" : this.eyeColor;
        for (let j = 0; j < rndInt(5, 10); j++) {
          ct.lineTo(p.x, p.y);
          p.addAngle(ang, rndInt(5, 40));
          ang += rndFloat(-0.3, 0.3);

          ang < 0 ? (ang += PI2) : null;
          let diff = ang - this.flowField.getAng(p.x, p.y);
          diff = ((diff + PI) % PI2) - PI;
          ang = ang + Math.sign(diff) * 0.2;
        }
        ct.stroke();
        ct.closePath();
      }
      ct.restore();
    });
    this.renderPupil(ct);
  }

  renderPupil(ct) {
    ct.filter = "blur(4px)";
    ct.fillStyle = this.eyeColor;
    drawAndMirror(ct, () => {
      ct.save();
      ct.clip(this.outerPath);
      ct.fillCircle(this.pupil.x, this.pupil.y, this.pupilRad + 2);
      ct.restore();
    });
    ct.filter = "blur(1px)";
    ct.fillStyle = "black";
    drawAndMirror(ct, () => {
      ct.save();
      ct.clip(this.outerPath);
      ct.fillCircle(this.pupil.x, this.pupil.y, this.pupilRad);
      ct.restore();
    });
    ct.fillStyle = "rgba(220,220,220,1)";
    drawAndMirror(ct, (isMirror) => {
      ct.save();
      ct.clip(this.outerPath);
      ct.fillCircle(
        this.pupil.x -
          this.pupilInnerOffset.w *
            this.pupilRad *
            (this.weirdLook && isMirror ? -1 : 1),
        this.pupil.y - this.pupilInnerOffset.h * this.pupilRad,
        this.pupilRad / 4
      );
      ct.restore();
      // ct.fill(this.innerPath)
    });
    ct.filter = "none";
  }

  initOuterShape() {
    let startAng = PI05 * 0.5 + rndInt(1, 3) * PI05;

    let p0 = this.m
      .copy()
      .add(Math.cos(startAng) * this.w, Math.sin(startAng) * this.h);
    let p1 = this.m
      .copy()
      .add(
        Math.cos(startAng + PI05) * this.w,
        Math.sin(startAng + PI05) * this.h
      );
    let p2 = this.m
      .copy()
      .add(Math.cos(startAng + PI) * this.w, Math.sin(startAng + PI) * this.h);
    let p3 = this.m
      .copy()
      .add(
        Math.cos(startAng + PI * 1.5) * this.w,
        Math.sin(startAng + PI * 1.5) * this.h
      );

    this.outerPath = new Path2D();
    this.shapeCurves = smoothLineThroughPoints(this.outerPath, [
      p0,
      p1,
      p2,
      p3,
    ]).curves;
    return startAng;
  }

  initInnerShape() {
    let startAng = rndInt(0, 3) * PI05;
    let w = Math.max(20, this.w * this.innerRatW);
    let h = Math.max(20, this.h * this.innerRatW);

    let p0I = this.m.copy().add(Math.cos(startAng) * w, Math.sin(startAng) * h);
    let p1I = this.m
      .copy()
      .add(Math.cos(startAng + PI05) * w, Math.sin(startAng + PI05) * h);
    let p2I = this.m
      .copy()
      .add(Math.cos(startAng + PI) * w, Math.sin(startAng + PI) * h);
    let p3I = this.m
      .copy()
      .add(
        Math.cos(startAng + PI * 1.5) * w,
        Math.sin(startAng + PI * 1.5) * h
      );
    this.innerPath = new Path2D();
    this.shapeCurvesI = smoothLineThroughPoints(this.innerPath, [
      p0I,
      p1I,
      p2I,
      p3I,
    ]).curves;
  }
}

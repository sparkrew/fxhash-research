class Legs {
  constructor() {
    this.length = rndInt(200, 500);
    this.length0 = this.length * 0.4;
    this.length1 = this.length * 0.5;
    this.legHeight = rndFloat(0.4, 0.47);
    this.hOffset = rndInt(50, egg.h / 10);
    this.handRad = rndInt(15, 20);
    this.elbowDirection = rndSign();
    this.fingerSize = rndFloat(0.1, 1);
    this.shoulderAng = PI05 + rndFloat(-0.3, 0.3);
    this.elbowAng = PI05 + rndFloat(-0.3, 0.3);
    this.shoulderAngL = PI05 + rndFloat(-0.3, 0.3);
    this.elbowAngL = PI05 + rndFloat(-0.3, 0.3);

    this.randomizeMovement();
    this.ticker = 0;
  }
  randomizeMovement() {
    this.elbowDir = rndSign();
    this.shoulderDir = rndSign();
    this.elbowDirL = this.elbowDir;
    this.shoulderDirL = this.shoulderDir;
    this.elbowSpeed = rndFloat(0, 0.05);
    this.shouldSpeed = rndFloat(0, 0.1);
  }

  render(ct) {
    this.ticker++;
    if (this.ticker % 50 == 0) {
      this.randomizeMovement();
    }
    this.shoulderAng += this.shouldSpeed * this.shoulderDir;
    if (Math.abs(this.shoulderAng - PI05) > 0.3) {
      this.shoulderAng = Math.sign(this.shoulderAng - PI05) * 0.3 + PI05;
      this.shoulderDir *= -1;
    }
    this.elbowAng += this.elbowSpeed * this.elbowDir;
    if (Math.abs(this.elbowAng - PI05) > 0.3) {
      this.elbowAng = Math.sign(this.elbowAng - PI05) * 0.3 + PI05;
      this.elbowDir *= -1;
    }
    this.shoulderAngL += this.shouldSpeed * this.shoulderDirL;
    if (Math.abs(this.shoulderAngL - PI05) > 0.3) {
      this.shoulderAngL = Math.sign(this.shoulderAngL - PI05) * 0.3 + PI05;
      this.shoulderDirL *= -1;
    }
    this.elbowAngL += this.elbowSpeed * this.elbowDirL;
    if (Math.abs(this.elbowAngL - PI05) > 0.3) {
      this.elbowAngL = Math.sign(this.elbowAngL - PI05) * 0.3 + PI05;
      this.elbowDirL *= -1;
    }
    ct.strokeStyle = "rgba(0,0,0,1)";
    ct.fillStyle = "rgba(0,0,0,1)";
    ct.lineCap = "round";
    ct.lineWidth = 20;
    let start = egg.bottomArc
      .getPointAt(this.legHeight)
      .addAngle(-PI05, this.hOffset);
    let mid = start.copy().addAngle(this.shoulderAng, this.length0);
    let end = mid.copy().addAngle(this.elbowAng, this.length1);

    let startL = egg.bottomArc
      .getPointAt(0.5 + (0.5 - this.legHeight))
      .addAngle(-PI05, this.hOffset);
    let midL = startL.copy().addAngle(this.shoulderAngL, this.length0);
    let endL = midL.copy().addAngle(this.elbowAngL, this.length1);

    this.doRender(ct, start, mid, end);
    this.doRender(ct, startL, midL, endL);

    // drawAndMirror(ct, () => this.doRender(ct, start, mid, end))

    ct.lineCap = "butt";
  }

  doRender(ct, start, mid, end) {
    ct.beginPath();
    ct.moveTo(start.x, start.y);
    ct.lineTo(mid.x, mid.y);
    ct.stroke();
    ct.closePath();
    ct.beginPath();
    ct.moveTo(mid.x, mid.y);
    ct.lineTo(end.x, end.y);
    ct.stroke();
    ct.closePath();

    ct.fillCircle(start.x, start.y, this.handRad);
    ct.fillCircle(
      mid.x,
      mid.y - this.handRad * this.elbowDirection * 0.25,
      this.handRad * 0.7
    );
    this.renderHand(mid, end, ct);
  }

  renderHand(mid, end, ct) {
    ct.fillCircle(end.x, end.y, this.handRad);
    let startAng = mid.angleTo(end);
    for (let i = 0; i < 4; i++) {
      let p = end.copy().addAngle(startAng, this.handRad);
      ct.fillCircle(p.x, p.y, this.handRad * this.fingerSize);
      startAng += PI05 / 4;
    }
  }
}

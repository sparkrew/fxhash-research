class Arms {
  constructor() {
    this.length = rndInt(200, 500);
    this.length0 = this.length * 0.4;
    this.length1 = this.length * 0.5;
    this.armHeight = rndFloat(0.15, 0.2);
    this.wOffset = rndInt(10, egg.w / 6);
    this.handRad = rndInt(15, 20);
    this.elbowDirection = rndSign();
    this.fingerSize = rndFloat(0.1, 1);
    this.shoulderAng = rndFloat(-0.3, 0.3);
    this.shoulderAngL = rndFloat(-0.3, 0.3);
    this.elbowAng = rndFloat(-0.3, 0.3);
    this.elbowAngL = rndFloat(-0.3, 0.3);
    this.elbowDir = rndSign();
    this.shoulderDir = rndSign();
    this.elbowDirL = this.elbowDir;
    this.shoulderDirL = this.shoulderDir;
    this.elbowSpeed = rndFloat(0.05, 0.1);
    this.shouldSpeed = rndFloat(0.05, 0.1);
    this.elbowMaxAng = rndFloat(0.3, PI05);
    this.shoulderMaxAng = rndFloat(0.3, PI05);
  }
  render(ct) {
    this.shoulderAng += this.shouldSpeed * this.shoulderDir;
    if (Math.abs(this.shoulderAng) > this.shoulderMaxAng) {
      this.shoulderDir *= -1;
    }
    this.elbowAng += this.elbowSpeed * this.elbowDir;
    if (Math.abs(this.elbowAng) > this.elbowMaxAng) {
      this.elbowDir *= -1;
    }
    this.shoulderAngL += this.shouldSpeed * this.shoulderDirL;
    if (Math.abs(this.shoulderAngL) > this.shoulderMaxAng) {
      this.shoulderDirL *= -1;
    }
    this.elbowAngL += this.elbowSpeed * this.elbowDirL;
    if (Math.abs(this.elbowAngL) > this.elbowMaxAng) {
      this.elbowDirL *= -1;
    }

    ct.strokeStyle = "rgba(0,0,0,1)";
    ct.fillStyle = "rgba(0,0,0,1)";
    ct.lineCap = "round";
    ct.lineWidth = 20;
    let start = egg.bottomArc
      .getPointAt(this.armHeight)
      .addAngle(PI, this.wOffset);
    let mid = start.copy().addAngle(this.shoulderAng, this.length0);
    let end = mid.copy().addAngle(this.elbowAng, this.length1);
    this.doRender(ct, start, mid, end);

    // if ()
    let startL = egg.bottomArc
      .getPointAt(1 - this.armHeight)
      .addAngle(0, this.wOffset);
    let midL = startL.copy().addAngle(PI + this.shoulderAngL, this.length0);
    let endL = midL.copy().addAngle(PI + this.elbowAngL, this.length1);
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
    ct.fillCircle(end.x, end.y, this.handRad);
    this.renderHand(mid, end, ct);
  }

  renderHand(mid, end, ct) {
    let startAng = mid.angleTo(end);
    for (let i = 0; i < 4; i++) {
      let p = end.copy().addAngle(startAng, this.handRad);
      ct.fillCircle(p.x, p.y, this.handRad * this.fingerSize);
      startAng += PI05 / 4;
    }
  }
}

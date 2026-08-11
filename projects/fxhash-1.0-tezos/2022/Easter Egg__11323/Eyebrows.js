class Eyebrows {
  constructor() {
    this.thickness = rndInt(15, 60);
    this.bushyness = rndInt(12, 22);
    let totW = eyes.w;
    let p0 = eyes.m
      .copy()
      .addAngle(-PI05, eyes.h)
      .addAngle(PI, rndInt(0, eyes.wOff));
    let p1 = p0
      .copy()
      .addAngle(-PI05, rndInt(10, 100))
      .addAngle(0, totW * 0.3);
    let p2 = p1
      .copy()
      .addAngle(-PI05, rndInt(-50, 50))
      .addAngle(0, totW * 0.3);
    let p3 = p2
      .copy()
      .addAngle(-PI05, rndInt(-50, 50))
      .addAngle(0, totW * 0.3);

    this.curve = new BezierCurve(p0, p1, p2, p3);
    this.ticker = 0;
  }
  render(ct) {
    this.ticker++;
    if (this.ticker > maxEyeBrowTicks) return;
    ct.globalCompositeOperation = this.glowing
      ? "lighter"
      : rndFloat() < 0.2
      ? "lighter"
      : "screen";

    ct.lineWidth = 0.05;
    ct.strokeStyle = hair.hairColor;
    drawAndMirror(ct, () => {
      let rnd = rndFloat();
      let p = this.curve
        .getPointAt(rnd)
        .addAngle(rndAng(), rndInt(0, this.bushyness));
      let prevP = this.curve.getPointAt(rnd - 0.05);
      let ang = prevP.angleTo(p);
      let p1 = p.copy().addAngle(ang + rndFloat(0.0, 0.5), this.thickness);

      ct.beginPath();
      ct.moveTo(p.x, p.y);
      ct.lineTo(p1.x, p1.y);
      ct.stroke();
      ct.closePath();
    });
  }
}

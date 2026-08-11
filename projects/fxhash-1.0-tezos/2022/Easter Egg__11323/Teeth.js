class Teeth {
  constructor() {
    this.wOffset = rndInt(30, 50);
    this.h = rndInt(150, 250);
    this.w = rndInt(25, 125);
    this.m = new Vec2(egg.p.x, egg.p.y - egg.h * rndFloat(0.15, 0.5)).addAngle(
      0,
      this.wOffset
    );
    this.ang0 = rndFloat(Math.max(0, hair.wFill - 0.5) + 0.05, 0.6);
    this.ang1 = rndFloat(this.ang0 + 0.1, this.ang0 + 0.6);
    this.isPointy = rndFloat() < 0.5;
    this.initSchneide();

    this.ticker = 0;
  }
  render(ct) {
    this.ticker++;
    if (this.ticker > maxTeethTicks) return;
    ct.globalCompositeOperation = "darken";

    ct.lineWidth = 0.05;
    ct.strokeStyle =
      rndFloat() < 0.8 ? "rgba(240,240,240,1)" : "rgba(0,0,0,0.2)";

    drawAndMirror(ct, () => {
      let curve0 = this.curves[rndInt(0, this.curves.length - 1)];
      let curve1 = this.curves[rndInt(0, this.curves.length - 1)];
      let p0 = curve0.getPointAt(rndFloat());
      let p1 = curve1.getPointAt(rndFloat());
      ct.beginPath();
      ct.moveTo(p0.x, p0.y);
      ct.lineTo(p1.x, p1.y);
      ct.stroke();
      ct.closePath();
    });
  }

  initSchneide() {
    this.p0 = this.m.copy();
    this.p1 = this.m
      .copy()
      .addAngle(PI05, rndInt(0, this.h))
      .addAngle(0, rndInt(-50, 50));

    this.curves = [];
    let curve0 = new BezierCurve(
      this.p0,
      Vec2.middleOf(this.p0, this.p1, 0.25).addAngle(
        0,
        rndInt(0, this.h * 0.25)
      ),
      Vec2.middleOf(this.p0, this.p1, 0.75).addAngle(
        0,
        rndInt(0, this.h * 0.25)
      ),
      this.p1
    );
    this.curves.push(curve0.copy());
    let backCurve = curve0.copy().translate(new Vec2(this.w, 0)).reverse();
    if (this.isPointy) {
      backCurve._p0.add(-this.w, 0);
    } else {
      let bridgeCurve = new BezierCurve(
        curve0.p1.copy(),
        curve0.p1.copy().addAngle(PI05, 20),
        backCurve.p0.copy().addAngle(PI05, 20),
        backCurve.p0.copy()
      );
      this.curves.push(bridgeCurve);
    }
    this.curves.push(backCurve);
    this.curves.push(
      new BezierCurve(
        backCurve.p1.copy(),
        backCurve.p1.copy().addAngle(PI05, 20),
        this.p0.copy().addAngle(PI05, 20),
        this.p0.copy()
      )
    );
  }
}

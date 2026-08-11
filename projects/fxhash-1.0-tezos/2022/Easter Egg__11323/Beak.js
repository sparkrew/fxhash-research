class Beak {
  constructor() {
    this.wOffset = rndInt(0, 100);
    this.h = rndInt(100, 350);
    this.w = rndInt(250, 325);
    this.ang0 = rndFloat(Math.max(0, hair.wFill - 0.5) + 0.05, 0.6);
    this.ang1 = rndFloat(this.ang0 + 0.1, this.ang0 + 0.6);

    let beakTop0 = new Vec2(egg.p.x, eyes.m.y + eyes.h + rndInt(egg.h / 6));
    let ang = rndFloat(-0.2, 0.2);
    let beakTop1 = beakTop0
      .copy()
      .addAngle(PI05 * 0.05 + ang, rndInt(25, this.w * 0.5));
    let beakTop2 = beakTop1
      .copy()
      .addAngle(PI05 + PI05 * 0.5 + ang, rndInt(25, this.w * 0.5));
    beakTop2._x = beakTop0.x;

    let beakPoint0 = beakTop0.copy().addAngle(PI05, this.h);
    let beakPoint1 = new Vec2(beakTop0.x, beakPoint0.y);
    let beakPoint2 = new Vec2(beakTop0.x, beakPoint0.y);
    this.getRandomBeakColor = () =>
      "rgba(" + rndInt(150, 200) + "," + rndInt(150, 200) + ",50,1)";

    this.beakColor = this.getRandomBeakColor();
    this.curves0 = [];
    this.curves1 = [];
    let curve00 = new BezierCurve(
      beakTop0.copy(),
      beakTop0.copy().copy().addAngle(-PI05, rndInt(10, 30)),
      beakTop1.copy().copy().addAngle(-PI05, rndInt(10, 30)),
      beakTop1.copy()
    );
    let curve11 = new BezierCurve(
      beakTop1.copy(),
      beakTop1.copy().copy().addAngle(-PI05, rndInt(10, 30)),
      beakTop2.copy().copy().addAngle(-PI05, rndInt(10, 30)),
      beakTop2.copy()
    );
    let curve0 = new BezierCurve(
      beakTop0,
      Vec2.middleOf(beakTop0, beakPoint0, 0.25),
      Vec2.middleOf(beakTop0, beakPoint0, 0.75),
      beakPoint0
    );
    let curve1 = new BezierCurve(
      beakTop1,
      Vec2.middleOf(beakTop1, beakPoint1, 0.25).addAngle(0, rndInt(-50, 100)),
      Vec2.middleOf(beakTop1, beakPoint1, 0.75).addAngle(0, rndInt(-50, 100)),
      beakPoint1
    );
    let curve2 = new BezierCurve(
      beakTop2,
      Vec2.middleOf(beakTop2, beakPoint2, 0.25).addAngle(0, rndInt(-50, 100)),
      Vec2.middleOf(beakTop2, beakPoint2, 0.75).addAngle(0, rndInt(-50, 100)),
      beakPoint2
    );

    this.curves0.push(curve00, curve0);
    this.curves1.push(curve11, curve1);
    this.ticker = 0;
  }
  render(ct) {
    this.ticker++;
    if (this.ticker > maxTeethTicks) return;
    ct.globalCompositeOperation = "darken";

    ct.lineWidth = 0.05;
    ct.strokeStyle = rndFloat() < 0.1 ? "black" : this.beakColor;

    drawAndMirror(ct, () => {
      let curve00 = this.curves0[rndInt(0, this.curves0.length - 1)];
      let curve10 = this.curves0[rndInt(0, this.curves0.length - 1)];
      let curve01 = this.curves1[rndInt(0, this.curves1.length - 1)];
      let curve11 = this.curves1[rndInt(0, this.curves1.length - 1)];
      let rnd = rndFloat();
      let p00 = curve00.getPointAt(rndFloat());
      let p10 = curve10.getPointAt(rndFloat());
      let p01 = curve01.getPointAt(rndFloat());
      let p11 = curve11.getPointAt(rndFloat());
      ct.beginPath();
      ct.moveTo(p01.x, p01.y);
      ct.lineTo(p11.x, p11.y);
      ct.moveTo(p00.x, p00.y);
      ct.lineTo(p10.x, p10.y);
      ct.stroke();
      ct.closePath();
    });
  }
}

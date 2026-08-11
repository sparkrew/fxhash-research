class Ears {
  constructor() {
    this.furColor = getBodyColor();
    this.innerFurColor = getRandomColor();
    this.ang0 = rndFloat(Math.max(0, hair.wFill - 0.5) + 0.05, 0.6);
    this.ang1 = rndFloat(this.ang0 + 0.1, this.ang0 + 0.6);

    this.offs0L = rndInt(50, 600);
    this.offs1L = this.offs0L * rndFloat(0.8, 1.2);
    this.offs0Ang = rndFloat(-PI05, -PI05 * 0.45);
    this.offs1Ang = rndFloat(-PI05 * 0.55, 0);

    this.getCurves(this.offs0Ang, this.offs0L, this.offs1Ang, this.offs1L);
    this.isClosed = rndFloat() < 0.5 ? false : true;

    this.rat = 0;
    this.ticker = 0;
  }
  render(ct) {
    this.ticker++;
    if (this.ticker > maxEarTicks) return;
    ct.globalCompositeOperation = "darker";

    ct.lineWidth = 0.05;
    ct.strokeStyle = getRandomBodyColor();

    this.renderOuter(ct);
    ct.strokeStyle = this.innerFurColor;

    this.renderInner(ct);
  }

  renderOuter(ct) {
    let p = this.shapeCurves[rndInt(0, this.shapeCurves.length - 1)]
      .getPointAt(rndFloat())
      .copy()
      .addAngle(rndAng(), rndFloat(0, 10));
    let p1 = this.shapeCurves[rndInt(0, this.shapeCurves.length - 1)]
      .getPointAt(rndFloat())
      .copy()
      .addAngle(rndAng(), rndFloat(0, 10));

    drawAndMirror(ct, () => {
      ct.beginPath();
      ct.moveTo(p.x, p.y);
      ct.lineTo(p1.x, p1.y);
      ct.stroke();
      ct.closePath();
    });
  }

  renderInner(ct) {
    let p = this.shapeCurvesI[rndInt(0, this.shapeCurvesI.length - 1)]
      .getPointAt(rndFloat())
      .copy()
      .addAngle(rndAng(), rndFloat(0, 5));
    let p1 = this.shapeCurvesI[0]
      .getPointAt(rndFloat())
      .copy()
      .addAngle(rndAng(), rndFloat(0, 5));

    drawAndMirror(ct, () => {
      ct.beginPath();
      ct.moveTo(p.x, p.y);
      ct.lineTo(p1.x, p1.y);
      ct.stroke();
      ct.closePath();
    });
  }
  getCurves() {
    this.p0 = egg.rightArc.getPointAt(this.ang0);
    this.p1 = egg.rightArc.getPointAt(this.ang1);
    let iOffset = rndInt(20, this.p0.distanceTo(this.p1) / 4);

    this.outerP0 = Vec2.middleOf(this.p0, this.p1, 0.5).addAngle(
      this.offs0Ang,
      this.offs0L
    );
    this.outerP1 = Vec2.middleOf(this.p0, this.p1, 0.5).addAngle(
      this.offs1Ang,
      this.offs1L
    );
    this.shapeCurves = smoothLineThroughPoints(
      new Path2D(),
      [this.p0, this.outerP0, this.outerP1, this.p1, this.p0],
      this.isClosed
    ).curves;

    this.p0I = egg.rightArc.getPointAt(
      this.ang0 +
        (iOffset / egg.rightArc.getLength()) * egg.rightArc.getAngLength()
    );
    this.p1I = egg.rightArc.getPointAt(
      this.ang1 -
        (iOffset / egg.rightArc.getLength()) * egg.rightArc.getAngLength()
    );

    this.outerP0I = Vec2.middleOf(this.p0I, this.p1I, 0.5).addAngle(
      this.offs0Ang + 0.01,
      this.offs0L - iOffset
    );
    this.outerP1I = Vec2.middleOf(this.p0I, this.p1I, 0.5).addAngle(
      this.offs1Ang - 0.01,
      this.offs1L - iOffset
    );
    this.shapeCurvesI = smoothLineThroughPoints(
      new Path2D(),
      [this.p0I, this.outerP0I, this.outerP1I, this.p1I],
      this.isClosed
    ).curves;
  }
}

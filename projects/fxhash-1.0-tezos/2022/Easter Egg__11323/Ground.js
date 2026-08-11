class Ground {
  constructor() {
    this.cnv = grndCnv;
    this.c = grndCnv.getContext("2d");
    let y = height - 50;
    this.curve = new BezierCurve(
      new Vec2(0, y),
      new Vec2(width * 0.25, y),
      new Vec2(width * 0.75, y),
      new Vec2(width, y)
    );
  }
  render() {
    this.c.strokeStyle = "black";
    this.c.lineWidth = 0.1;
    // this.c.beginPath()
    // this.curve.doCurveTo(this.c)
    // this.c.stroke()
    // this.c.closePath()
    this.curve.c0.addAngle(-PI05, rndInt(-15, 15));
    this.curve.c1.addAngle(-PI05, rndInt(-15, 15));
    this.curve.translate(
      new Vec2(0, -25 * Math.log(1 + (1 * this.curve.p0.y - egg.p.y) / egg.p.y))
    );
    if (this.curve.p0.y < egg.p.y) {
      this.curve.translate(new Vec2(0, egg.p.y + egg.w / 2));
    }
    let margin = 100;
    let wd = width - margin * 2;
    let ht = height * 0.1 - margin * 2;
    let rowAmnt = 5;
    let colAmnt = 45;
    // for (let i = 0; i < colAmnt; i++) {
    // 	for (let j = 0; j < rowAmnt; j++) {
    // 		let p = new Vec2(
    // 			margin + wd / (colAmnt * 2) + (i / colAmnt) * wd,
    // 			margin + ht / (rowAmnt * 2) + (j / rowAmnt) * ht
    // 		)
    // 		new GrassThick({
    // 			p: p
    // 				.copy()
    // 				.addAngle(PI05, height - ht / (rowAmnt * 2))
    // 				.addAngle(PI05, -rndInt(-ht / rowAmnt, ht / rowAmnt))
    // 				.addAngle(0, -rndInt(-wd / colAmnt, wd / colAmnt)),
    // 			// .addAngle(0, rndInt(-50, -50))
    // 			// .addAngle(PI05, rndInt(-50, 50)),
    // 			size: 2.5 + 5 * Math.log(1 + (0.5 * (j % rowAmnt)) / rowAmnt)
    // 		}).render(p.y > height / 2 + w / 2 ? cforeGround : cforeGround)
    // 	}
    // }
  }
}

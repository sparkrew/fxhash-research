class Egg {
  constructor(p, w = 900, h = 600) {
    this.p = p;
    this.w = w;
    this.h = h;
    this.getShape();
    this.ratioPoints = [];
    for (let i = 0; i < ratioPointAmount; i++) {
      this.ratioPoints.push(new EdgePoint());
    }
    this.furTicker = 0;
    this.lineTicker = 0;

    window.addEventListener("click", (ev) => {
      let rect = cnv.getBoundingClientRect();

      let x = ((ev.clientX - rect.left) * width) / rect.width;
      let y = ((ev.clientY - rect.top) * height) / rect.height;

      if (!hatched && c.isPointInPath(this.shape, x, y)) {
        clickedCounter++;
        window.setTimeout(() => clickedCounter--, 500);

        playSound(SOUND_IDS.CLICK);
      } else {
      }
    });
  }
  getShape() {
    //Euclidean egg
    if (!this.shape) {
      let p = this.p.copy().addAngle(-PI05, this.w / 2);
      this.shape = new Path2D();
      //points of triangle abc
      let aP = new Vec2(p.x - this.w / 2, p.y);
      let cP = new Vec2(p.x + this.w / 2, p.y);
      let acP = Vec2.middleOf(aP, cP, 0.5);
      let bP = acP.copy().addAngle(-PI05, h);

      let cbAng = cP.angleTo(bP);
      let abAng = aP.angleTo(bP);
      let acDis = aP.distanceTo(cP);
      let abDis = aP.distanceTo(bP);
      let bdDis = acDis - abDis;

      this.bottomArc = new CircularArc(acP, w / 2, 0, PI);
      this.leftArc = new CircularArc(cP, acDis, PI, cbAng + PI2);
      this.topArc = new CircularArc(bP, bdDis, cbAng + PI2, abAng + PI2);
      this.rightArc = new CircularArc(aP, acDis, abAng + PI2, PI2);

      this.arcs = [this.bottomArc, this.leftArc, this.topArc, this.rightArc];

      this.bottomArc.arc(this.shape);
      this.leftArc.arc(this.shape);
      this.topArc.arc(this.shape);
      this.rightArc.arc(this.shape);
    }
    return this.shape;
  }
  getPointAt(rat) {
    let ratioSections = this.getRatioSections();
    let currSection = Object.values(ratioSections).find(
      (section) => section.start <= rat && section.end >= rat
    );
    if (!currSection) {
      console.error("Didnt find a section");
      return new Vec2();
    }
    let currArc = currSection.arc;
    return currArc.getPointAt(
      Math.abs(rat - currSection.start) /
        Math.abs(currSection.end - currSection.start)
    );
  }
  getRatioSections() {
    if (!this.ratioSections) {
      this.ratioSections = [];
      let totCirc = this.getCircumference();
      let circRatio = 0;
      this.arcs.forEach((arc) => {
        this.ratioSections.push({
          start: circRatio,
          end: circRatio + arc.circ / totCirc,
          arc,
        });
        circRatio += arc.circ / totCirc;
      });
    }
    return this.ratioSections;
  }
  getCircumference() {
    if (!this.circ) {
      this.circ = this.arcs.reduce(
        (prev, curr, index) => prev + curr.getLength(),
        0
      );
    }
    return this.circ;
  }
  renderShape(ct) {
    ct.fillStyle = "rgba(0,0,0,1)";

    ct.fill(egg.getShape());
  }
  renderLines(ct) {
    this.lineTicker++;
    c.lineWidth = 0.05;
    c.globalCompositeOperation = "darker";
    this.ratioPoints.forEach((p) => p.update());
    this.ratioPoints.forEach((rp) => {
      c.strokeStyle = getRandomBodyColor();
      if (this.lineTicker < maxEggTicks) {
        rp.render(ct, this);
      }
      if (hatched && this.furTicker < maxFurTicks) {
        this.furTicker++;
        rp.renderFur(ct);
      }
    });
  }
}

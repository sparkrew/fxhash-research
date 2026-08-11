class Hair {
  constructor() {
    let hairstyles = [
      "flowfieldWehend",
      "flowfieldCrazy",
      "flowfieldMopf",
      "straight",
      "straightDown",
      "curlyUp",
      "curlyAway",
      "curlyDown",
      "updardsWave",
    ];
    let hairColors = [
      "black",
      "rgba(230,230,230,1)",
      "rgba(230,30,30,1)",
      "rgba(10,10,90,1)",
      "rgba(10,90,10,1)",
      "rgba(10,90,90,1)",
      "rgba(90,0,90,1)",
      "#af3a12",
      getRandomColor(),
    ];
    this.hairColor =
      rndFloat() < 0.5
        ? colors[rndInt(0, colors.length - 1)]
        : hairColors[rndInt(0, hairColors.length - 1)];
    this.wFill = rndFloat(0.01, 1);
    maxHairTicks *= this.wFill;
    this.hairStyle = hairstyles[rndInt(0, hairstyles.length - 1)];
    this.hairLength = rndInt(50, egg.h * 0.7);
    // maxHairTicks *= this.hairLength / (egg.h * 0.7);
    this.spread = rndFloat(0, PI05);
    this.direction = rndInt(0, 3) * PI05;
    this.generalDirection = rndAng();
    this.thickness = rndFloat(0.03, 0.03);
    this.haarAnsatz = rndInt(0, 55);
    this.angChange = rndFloat(0.01, 0.1);
    this.directionRandomness = rndFloat() < 0.5 ? () => 1 : () => rndSign();
    this.ticker = 0;
    this.startAng = PI05 + rndFloat(-this.spread, this.spread);
    this.glowing = rndFloat() < 0.05;
    this.ffForce = rndFloat(0.01, 0.4);
    this.ffAmount = rndInt(20, 150);
    this.isBrushed = rndFloat() < 0.5;
    this.isAway = rndFloat() < 0.5;
    this.jitter = Math.floor(rndInt(0, 5) * rndFloat());
    this.speed = rndFloat(0.5, 3);
    this.flowField = Array(100)
      .fill(0)
      .map((row) =>
        Array(100)
          .fill(0)
          .map((cell) => rndAng())
      );
  }
  getHaarAnsatz() {
    let offsetY = Math.floor(rndInt(-15, this.haarAnsatz) * rndFloat());
    let sideLength = egg.leftArc.getLength() * Math.max(0, this.wFill - 0.5);
    let topLength = egg.topArc.getLength();
    let totCirc = sideLength * 2 + topLength;
    let rnd = rndFloat();
    if (this.wFill < 0.5) {
      return egg.topArc
        .getPointAt(0.5 + (rndFloat() - 0.5) * this.wFill)
        .addAngle(PI05, offsetY);
    } else if (rnd < topLength / totCirc) {
      return egg.topArc.getPointAt(rndFloat()).addAngle(PI05, offsetY);
    } else {
      rnd -= topLength / totCirc;
      let ampl = this.wFill - 0.5;
      if (rnd < sideLength / totCirc) {
        return egg.leftArc
          .getPointAt(1 - ampl * rndFloat())
          .addAngle(PI05, offsetY);
      } else {
        return egg.rightArc
          .getPointAt(ampl * rndFloat())
          .addAngle(PI05, offsetY);
      }
    }
  }
  render(ct) {
    this.ticker++;
    if (this.ticker > maxHairTicks) {
      return;
    }
    ct.globalCompositeOperation = this.glowing ? "lighter" : "source-over";
    ct.strokeStyle = rndFloat() < 0.9 ? this.hairColor : "black";
    ct.lineWidth = this.thickness;
    let p = this.getHaarAnsatz();
    if (this.hairStyle == "flowfieldCrazy") {
      let p0 = p;
      let ang = this.generalDirection;
      ct.beginPath();
      ct.moveTo(p0.x, p0.y);

      for (let i = 0; i < this.ffAmount * 0.4; i++) {
        let dist = (i / this.ffAmount) * this.hairLength * 0.1;
        let ffCol = Math.max(
          0,
          Math.min(
            this.flowField.length - 1,
            Math.floor(
              (Math.abs(p0.x - width / 2) / (width / 2)) * this.flowField.length
            )
          )
        );
        let ffRow = Math.max(
          0,
          Math.min(
            this.flowField.length - 1,
            Math.floor((p0.y / height) * this.flowField.length)
          )
        );
        ang < 0 ? (ang += PI2) : null;
        let diff = ang - this.flowField[ffRow][ffCol];
        diff = ((diff + PI) % PI2) - PI;
        ang = ang + Math.sign(diff) * this.ffForce;
        ct.lineTo(p0.x, p0.y);
        p0.addAngle(ang, dist);
      }
      ct.stroke();
      ct.closePath();
    } else if (this.hairStyle == "flowfieldWehend") {
      let p0 = p;
      let ang = this.generalDirection;
      ct.beginPath();
      ct.moveTo(p0.x, p0.y);

      for (let i = 0; i < this.ffAmount; i++) {
        let dist = (i / this.ffAmount) * this.hairLength * 0.1;
        let ffCol = Math.max(
          0,
          Math.min(
            this.flowField.length - 1,
            Math.floor(
              (Math.abs(p0.x - width / 2) / (width / 2)) * this.flowField.length
            )
          )
        );
        let ffRow = Math.max(
          0,
          Math.min(
            this.flowField.length - 1,
            Math.floor((p0.y / height) * this.flowField.length)
          )
        );
        ang < 0 ? (ang += PI2) : null;
        ang =
          (ang - PI) * (1 - this.ffForce) +
          this.ffForce * (this.flowField[ffRow][ffCol] - PI) +
          PI;
        ct.lineTo(p0.x, p0.y);
        p0.addAngle(ang, dist);
      }
      ct.stroke();
      ct.closePath();
    } else if (this.hairStyle == "flowfieldMopf") {
      let p0 = p;
      let ang = this.generalDirection;
      ct.beginPath();
      ct.moveTo(p0.x, p0.y);

      for (let i = 0; i < this.ffAmount; i++) {
        let dist = (i / this.ffAmount) * this.hairLength * 0.1;
        let ffCol = Math.max(
          0,
          Math.min(
            this.flowField.length - 1,
            Math.floor(
              (Math.abs(p0.x - width / 2) / (width / 2)) * this.flowField.length
            )
          )
        );
        let ffRow = Math.max(
          0,
          Math.min(
            this.flowField.length - 1,
            Math.floor((p0.y / height) * this.flowField.length)
          )
        );
        ang < 0 ? (ang += PI2) : null;
        ang =
          ang * (1 - this.ffForce) -
          this.ffForce * this.flowField[ffRow][ffCol];
        ct.lineTo(p0.x, p0.y);
        p0.addAngle(ang, dist);
      }
      ct.stroke();
      ct.closePath();
    } else if (this.hairStyle == "straight") {
      let p0 = p;

      let p1 = p0
        .copy()
        .addAngle(
          -PI05 + rndFloat(-0.3, 0.3),
          rndInt(0, this.hairLength * rndFloat(0.5, 1))
        );
      ct.beginPath();
      ct.moveTo(p0.x, p0.y);
      ct.lineTo(p1.x, p1.y);
      ct.stroke();
      ct.closePath();
    } else if (this.hairStyle == "straightDown") {
      let p0 = p;
      let p1 = p0
        .copy()
        .addAngle(
          PI05 + rndFloat(-this.spread, this.spread),
          rndInt(0, this.hairLength * rndFloat(0.5, 1))
        );
      ct.beginPath();
      ct.moveTo(p0.x, p0.y);
      ct.lineTo(p1.x, p1.y);
      ct.stroke();
      ct.closePath();
    } else if (this.hairStyle == "curlyUp") {
      let ps = [];
      let p0 = p;
      let startAng = PI05 + rndFloat(-this.spread, this.spread);
      let ang = PI05 + rndFloat(-this.spread, this.spread);
      let spd = rndFloat(0.9, 1.1) * this.directionRandomness();
      let angChange = this.angChange * rndFloat(0.9, 1.1) * rndSign();
      let direction =
        this.direction + rndFloat(-0.2, 0.2) * this.directionRandomness();
      for (let i = 0; i < this.hairLength; i++) {
        ps.push(p0.copy());
        p0.addAngle(ang, spd);
        ang += this.angChange + Math.sin(startAng + ang - direction) * 0.04;
      }

      ct.beginPath();
      smoothLineThroughPoints(ct, ps, true);
      ct.stroke();
      ct.closePath();
    } else if (this.hairStyle == "curlyDown") {
      let ps = [];
      let p0 = p;
      let startAng = p0.angleTo(egg.p);
      let ang = this.isBrushed ? startAng : rndAng();
      let spd = 1;
      let amt = 50;

      ct.beginPath();
      ct.moveTo(p0.x, p0.y);
      for (let i = 0; i < amt; i++) {
        ps.push(p0.copy().addAngle(rndAng(), this.jitter));
        p0.addAngle(startAng, this.speed * 0.5);
        p0.addAngle(ang, this.speed * 2);
        ang += this.angChange * 2;
        ct.lineTo(p0.x, p0.y);
      }
      ct.stroke();
      ct.closePath();

      strokeLines(ct, ps);
      // smoothLineThroughPoints(ct, ps, true)
    } else if (this.hairStyle == "updardsWave") {
      let ps = [];
      let p0 = p;
      let startAng = egg.p.angleTo(p0);
      let ang = this.isBrushed ? startAng : rndAng();
      let spd = 1;
      let amt = 100;

      ct.beginPath();
      ct.moveTo(p0.x, p0.y);
      for (let i = 0; i < amt; i++) {
        ps.push(p0.copy().addAngle(rndAng(), this.jitter));
        p0.addAngle(startAng, this.speed);
        p0.addAngle(ang, this.speed);
        ang += this.angChange * 0.5;
        ct.lineTo(p0.x, p0.y);
      }
      ct.stroke();
      ct.closePath();

      strokeLines(ct, ps);
      // smoothLineThroughPoints(ct, ps, true)
    } else if (this.hairStyle == "curlyWeird") {
      let ps = [];
      let p0 = p;
      let startAng = PI05 + rndFloat(-this.spread, this.spread);
      let ang = p0.angleTo(egg.p);
      let spd = 1;

      let angChange = this.angChange * this.direction;
      for (let i = 0; i < 150; i++) {
        ps.push(p0.copy());
        p0.addAngle(this.generalDirection, this.hairLength / 350);
        p0.addAngle(ang, spd);
        ang += angChange + Math.sin(ang) * 0.08;
      }

      ct.beginPath();
      smoothLineThroughPoints(ct, ps, true);
      ct.stroke();
      ct.closePath();
    } else if (this.hairStyle == "curlyAway") {
      let ps = [];
      let p0 = p;
      let startAng = PI05 + rndFloat(-this.spread, this.spread);
      let ang = this.startAng;
      let spd = 1;
      this.angChange = rndFloat(0.02, 0.1);
      let angChange = this.angChange * this.direction;
      for (let i = 0; i < 150; i++) {
        ps.push(p0.copy());
        p0.addAngle(this.generalDirection, this.hairLength / 350);
        p0.addAngle(ang, spd);
        ang += angChange + Math.sin(this.startAng + ang) * 0.08;
      }

      ct.beginPath();
      smoothLineThroughPoints(ct, ps, true);
      ct.stroke();
      ct.closePath();
    }
  }
}

class brush {
  constructor() {
    this.pos = createVector(randomVal(0, w), randomVal(0, h));
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0, 0);
    this.speedLimit = spdL;
  }

  update = function () {
    this.vel.add(this.acc);
    this.vel.limit(this.speedLimit);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  applyForce = function (force) {
    this.acc.add(force);
  };

  disp = function (strokeScl) {
    strokeWeight(canv * 0.0015);
    this.maxSpread = canv * 0.01 * strokeScl;
    this.spread = map(noise(frameCount * 0.01), 0.5, 1, spdL, this.maxSpread);
    this.pts = 20 * strokeScl;
    push();
    strokeWeight(canv * 0.001);
    point(
      this.pos.x + randomVal(-this.spread * 1.75, this.spread * 1.75),
      this.pos.y + randomVal(-this.spread * 1.75, this.spread * 1.75)
    );
    pop();
    for (let i = 0; i < this.pts; i++) {
      point(
        this.pos.x + randomVal(-this.spread * sin(i), this.spread * sin(i)),
        this.pos.y + randomVal(-this.spread * cos(i), this.spread * cos(i))
      );
      push();
     
      blendMode(DIFFERENCE);
      

      point(
        this.pos.x +
          randomVal(-this.spread * 1.25 * sin(i), this.spread * 1.25 * sin(i)),
        this.pos.y +
          randomVal(-this.spread * 1.25 * cos(i), this.spread * 1.25 * cos(i))
      );
      pop();
    }
  };

  follow(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

}

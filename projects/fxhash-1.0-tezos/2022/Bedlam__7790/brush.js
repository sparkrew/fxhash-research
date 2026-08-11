class brush {
  constructor() {
    this.pos = createVector(randomVal(canv*0.05, w-canv*0.05), randomVal(canv*0.05, h-canv*0.05));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.speedLimit = spdL;
    this.prevPos = this.pos.copy();

    this.points = []
    this.angles = []
    this.size = canv * 0.1
  }

  get lastPt() {
    return this.pts[this.pts.length - 1];
  }

  addPoint(x, y) {
    if (this.points.length < 1) {
      this.points.push(new p5.Vector(x, y));
      return;
    }

    const nextPt = new p5.Vector(x, y);
    let d = p5.Vector.dist(nextPt, this.lastPt);

    while (d > this.size) {
      const diff = p5.Vector.sub(nextPt, this.lastPt);
      diff.normalize();
      diff.mult(this.size);
      this.points.push(p5.Vector.add(this.lastPt, diff));
      this.angles.push(diff.heading());
      d -= this.size;
    }
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

  dispRoundLine = function (strokeScl, ptScl) {
    strokeWeight(canv * 0.001);
    this.maxSpread = canv * 0.05 * strokeScl;
    this.spread = map(noise(frameCount * 0.01), 0.25, 1, spdL, this.maxSpread);
    this.spready = map(noise(frameCount * 0.01), 0.25, 1, spdL, this.maxSpread);
    this.colorOff = noise(frameCount*0.5)
    this.pts = 25*ptScl;


    strokeWeight(canv * 0.001);

    for (let i = 0; i < 360; i+= 360/this.pts) {
      blendMode(BLEND)

      this.r = randomInt(0, this.spread)
      this.x = this.r*sin(i)
      this.y = this.r*cos(i)
      push()

      translate(this.pos.x, this.pos.y)
      line(this.x, this.y, this.x+randomInt(-this.spread/2, this.spread/3), this.y+randomInt(-this.spready/2, this.spready/2))




      if(this.colorOff < 0.5) {
        blendMode(SCREEN);
      } else {
        blendMode(MULTIPLY)
      }

      line(this.x, this.y, this.x+randomInt(-this.spread/2, this.spread/3), this.y+randomInt(-this.spready/2, this.spready/2))
      pop()
    }
  };


  dispSwirl = function (strokeScl, ptScl) {
    strokeWeight(canv * 0.001);
    this.maxSpread = canv * 0.1 * strokeScl;
    this.spread = map(noise(frameCount * 0.01), 0.2, 1, spdL*2, this.maxSpread);
    this.spready = map(noise(frameCount * 0.01), 0.2, 1, spdL*2, this.maxSpread);
    this.colorOff = noise(frameCount*0.5)
    this.pts = 50;

    strokeWeight(canv * 0.001);

    for (let i = 0; i < 360; i+= 360/this.pts) {
      blendMode(BLEND)
      this.r = randomInt(this.spread*0.1, this.spread*0.5)
      this.x = this.r*sin(i)
      this.y = this.r*cos(i)
      this.x2 = this.r*sin(i+10)
      this.y2 = this.r*cos(i+10)
      push()
      translate(this.pos.x, this.pos.y)
      line(this.x, this.y, this.x2, this.y2)
      pop()

      if(this.colorOff < 0.5) {
        blendMode(SCREEN);
      } else {
        blendMode(MULTIPLY)
      }

      this.rb = randomInt(this.spread*0.2, this.spread*0.5)
      this.xb = this.rb*sin(i)
      this.yb = this.rb*cos(i)
      this.xb2 = this.r*sin(i+5)
      this.yb2 = this.r*cos(i+5)
      push()
      translate(this.pos.x, this.pos.y)
      line(this.xb, this.yb, this.xb2, this.yb2)
      pop()
    }
  };

  dispDigiRound = function (strokeScl, ptScl) {
    strokeWeight(canv * 0.001);
    this.maxSpread = canv * 0.1 * strokeScl;
    this.spread = map(noise(frameCount * 0.01), 0.25, 1, spdL, this.maxSpread);
    this.spready = map(noise(frameCount * 0.01), 0.25, 1, spdL, this.maxSpread);
    this.pts = 1;
    push();

    strokeWeight(canv * 0.001);
    point(
      this.pos.x + randomVal(-this.spread * 1.75, this.spread * 1.75),
      this.pos.y + randomVal(-this.spready * 1.75, this.spready * 1.75)
    );

    circle(this.pos.x, this.pos.y, this.spread)

    for (let i = 0; i < this.pts; i++) {
      point(
        this.pos.x + randomVal(-this.spread * sin(i), this.spread * sin(i)),
        this.pos.y + randomVal(-this.spread * sin(i), this.spread * cos(i))
      );
      //noFill()
      this.r = randomInt(0, this.spread)
      this.x = this.r*sin(i)
      this.y = this.r*cos(i)

      blendMode(SCREEN);
      point(
        this.pos.x +
          randomVal(-this.spread * 1.25 * sin(i), this.spread * 1.25 * sin(i)),
        this.pos.y +
          randomVal(-this.spread * 1.25 * sin(i), this.spread * 1.25 * cos(i))
      );
      pop();
    }
  };


  dispSquare = function (strokeScl, ptScl) {
    strokeWeight(canv * 0.001);
    this.maxSpread = canv * 0.1 * strokeScl;
    this.spread = map(noise(frameCount * 0.01), 0.25, 1, spdL, this.maxSpread);
    this.spready = map(noise(frameCount * 0.01), 0.25, 1, spdL, this.maxSpread);
    this.colorOff = noise(frameCount*0.05)
    this.pts = 5 * ptScl;

    for (let i = 0; i < this.pts; i++) {
      noFill()
      push()
      translate(this.pos.x, this.pos.y)
      rotate(v.heading)
      blendMode(BLEND)
      bezier(
        randomVal(-this.spread * sin(i), this.spread * sin(i)),
        randomVal(-this.spread * sin(i), this.spread * sin(i)),
        randomVal(-this.spread * sin(i), this.spread * sin(i)),
        randomVal(-this.spread * sin(i), this.spread * sin(i)),
        randomVal(-this.spread * sin(i), this.spread * sin(i)),
        randomVal(-this.spread * sin(i), this.spread * sin(i)),
        randomVal(-this.spread * sin(i), this.spread * sin(i)),
        randomVal(-this.spread * sin(i), this.spread * sin(i))
      );


      if(this.colorOff < 0.5) {
        blendMode(SCREEN);
      } else {
        blendMode(MULTIPLY)
      }

      bezier(
        randomVal(-this.spread * sin(i), this.spread * sin(i)),
        randomVal(-this.spread * sin(i), this.spread * sin(i)),
        randomVal(-this.spread * sin(i), this.spread * sin(i)),
        randomVal(-this.spread * sin(i), this.spread * sin(i)),
        randomVal(-this.spread * sin(i), this.spread * sin(i)),
        randomVal(-this.spread * sin(i), this.spread * sin(i)),
        randomVal(-this.spread * sin(i), this.spread * sin(i)),
        randomVal(-this.spread * sin(i), this.spread * sin(i))
      );
      pop()
    }
  };


  dispFlatVert = function (strokeScl, ptScl) {
    strokeWeight(canv * 0.001);
    this.maxSpread = canv * 0.1 * strokeScl;
    this.spread = map(noise(frameCount * 0.01), 0.25, 1, spdL, this.maxSpread*0.08);
    this.spready =map(noise(frameCount * 0.01), 0.25, 1, spdL, this.maxSpread*0.5);
    this.colorOff = noise(frameCount*0.01)
    this.pts = 3 * ptScl;

    for (let i = 0; i < this.pts; i++) {
      noFill()
      push()
      translate(this.pos.x, this.pos.y)
      blendMode(BLEND)
      bezier(
        randomVal(-this.spread * cos(i), this.spread * cos(i)),
        randomVal(-this.spready * cos(i), this.spready * cos(i)),
        randomVal(-this.spread * cos(i), this.spread * cos(i)),
        randomVal(-this.spready * cos(i), this.spready * cos(i)),
        randomVal(-this.spread * cos(i), this.spread * cos(i)),
        randomVal(-this.spready * cos(i), this.spready * cos(i)),
        randomVal(-this.spread * cos(i), this.spread * cos(i)),
        randomVal(-this.spready * cos(i), this.spready * cos(i))
      );

      if(this.colorOff < 0.5) {
        blendMode(SCREEN);
      } else {
        blendMode(MULTIPLY)
      }

      bezier(
        randomVal(-this.spread * cos(i), this.spread*1.1 * cos(i)),
        randomVal(-this.spready * cos(i), this.spready*1.1 * cos(i)),
        randomVal(-this.spread * cos(i), this.spread*1.1 * cos(i)),
        randomVal(-this.spready * cos(i), this.spready*1.1 * cos(i)),
        randomVal(-this.spread * cos(i), this.spread*1.1 * cos(i)),
        randomVal(-this.spready * cos(i), this.spready*1.1 * cos(i)),
        randomVal(-this.spread * cos(i), this.spread*1.1 * cos(i)),
        randomVal(-this.spready * cos(i), this.spready*1.1 * cos(i))
      );
      pop()
    }
  };

  dispFlatHoriz = function (strokeScl, ptScl) {
    strokeWeight(canv * 0.001);
    this.maxSpread = canv * 0.1 * strokeScl;
    this.spread = map(noise(frameCount * 0.01), 0.25, 1, spdL, this.maxSpread*0.5);
    this.spready =map(noise(frameCount * 0.01), 0.25, 1, spdL, this.maxSpread*0.08);
    this.colorOff = noise(frameCount*0.01)
    this.pts = 3 * ptScl;

    for (let i = 0; i < this.pts; i++) {

      noFill()
      push()
      translate(this.pos.x, this.pos.y)
      blendMode(BLEND)
      bezier(
        randomVal(-this.spread * cos(i), this.spread * cos(i)),
        randomVal(-this.spready * cos(i), this.spready * cos(i)),
        randomVal(-this.spread * cos(i), this.spread * cos(i)),
        randomVal(-this.spready * cos(i), this.spready * cos(i)),
        randomVal(-this.spread * cos(i), this.spread * cos(i)),
        randomVal(-this.spready * cos(i), this.spready * cos(i)),
        randomVal(-this.spread * cos(i), this.spread * cos(i)),
        randomVal(-this.spready * cos(i), this.spready * cos(i))
      );

      if(this.colorOff < 0.5) {
        blendMode(SCREEN);
      } else {
        blendMode(MULTIPLY)
      }

      bezier(
        randomVal(-this.spread * cos(i), this.spread*1.1 * cos(i)),
        randomVal(-this.spready * cos(i), this.spready*1.1 * cos(i)),
        randomVal(-this.spread * cos(i), this.spread*1.1 * cos(i)),
        randomVal(-this.spready * cos(i), this.spready*1.1 * cos(i)),
        randomVal(-this.spread * cos(i), this.spread*1.1 * cos(i)),
        randomVal(-this.spready * cos(i), this.spready*1.1 * cos(i)),
        randomVal(-this.spread * cos(i), this.spread*1.1 * cos(i)),
        randomVal(-this.spready * cos(i), this.spready*1.1 * cos(i))
      );
      pop()
    }
    };

  follow(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  };

  bounce = function() {

    this.marg = canv * 0.05
    if (this.pos.x > width-this.marg-this.spread) {
      this.pos.x = 0+this.marg+this.spread;
      this.updatePrev();
    }
    if (this.pos.x < 0+this.marg+this.spread) {
      this.pos.x = width-this.marg-this.spread;
      this.updatePrev();
    }
    if (this.pos.y > height-this.marg-this.spready) {
      this.pos.y = 0+this.marg+this.spready;
      this.updatePrev();
    }
    if (this.pos.y < 0+this.marg+this.spready) {
      this.pos.y = height-this.marg-this.spready;
      this.updatePrev();
    }
  };

}

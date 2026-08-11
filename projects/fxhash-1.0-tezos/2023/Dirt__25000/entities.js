// #############################################################################
// Entities.
// #############################################################################

// Vector class.
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  fromAngle(angle) {
    this.x = Math.cos(angle);
    this.y = Math.sin(angle);
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
  }

  mult(n) {
    this.x *= n;
    this.y *= n;
  }

  div(n) {
    this.x /= n;
    this.y /= n;
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  cross(v) {
    return this.x * v.y - this.y * v.x;
  }

  mag() {
    return Math.sqrt(this.dot(this));
  }

  normalize() {
    const m = this.mag();
    if (m !== 0) {
      this.div(m);
    }
  }

  limit(max) {
    if (this.mag() > max) {
      this.normalize();
      this.mult(max);
    }
  }

  copy() {
    return new Vector(this.x, this.y);
  }

  inverse() {
    this.x *= -1;
    this.y *= -1;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

// Particle class that follows the flow field.
class Particle {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(0, 0);
    this.acc = new Vector(0, 0);
    this.maxSpeed = 0.5;
    this.prevPos = this.pos.copy();
    this.direction = r(0, 1) ? 1 : -1;
    this.hor = r(0, 1);
    this.colorDirection = r(0, 1);
    this.color = {...palette.c1};
  }

  move(force) {
    if (r(0, 1)) force.add(new Vector(r(-0.6, 0.6), r(-0.6, 0.6)));
    this.acc = force;
    this.pos.add(this.vel);
    if (r(0, 1)) this.pos.add(new Vector(r(-0.9, 0.9), r(-0.9, 0.9)));
    if (this.direction === 1) this.vel.add(this.acc);
    else this.vel.sub(this.acc);
    this.vel.limit(this.maxSpeed);
    this.acc.mult(0);
  }

  show() {
    // ctx.lineWidth = 0.2;
    ctx.beginPath();
    // ctx.moveTo(this.pos.x * unit, this.pos.y * unit);
    // ctx.lineTo(this.prevPos.x * unit, this.prevPos.y * unit);

    const dim1 = r(1, 60);
    const dim2 = r(1, 60);

    if (this.hor) ctx.rect(this.pos.x * unit - dim1 / 2, this.pos.y * unit - dim2 / 2, dim1, dim2);
    else ctx.rect(this.pos.x * unit - dim2 / 2, this.pos.y * unit - dim1 / 2, dim2, dim1);

    const change = r(-3, 10) / 10
    this.color.h += r(-3, 10) / 10;
    this.color.l += this.colorDirection ? r(-3, 10) / 30 : r(3, -10) / 30;
    this.color.l = this.color.l % 100;
    ctx.strokeStyle = hsl(this.color);
    ctx.stroke();
    this.updatePrev();
    this.edges();
  }

  updatePrev() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  accelerate(x, y) {
    console.log('accelerate', x, y)
    this.acc.add(new Vector(x, y));
  }

  edges() {
    if (this.pos.x > drawingResolution) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = drawingResolution - 1;
      this.updatePrev();
    }
    if (this.pos.y > drawingResolution) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = drawingResolution - 1;
      this.updatePrev();
    }
  }
}
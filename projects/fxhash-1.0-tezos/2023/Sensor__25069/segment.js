

class Segment {
  constructor(x, y, len, i) {
      this.angle = 0;
      this.b = createVector();
      if (x instanceof Segment) {
          this.sw = map(len, 0, 20, 1, 50);
          this.a = x.b.copy();
          this.len = y;
          this.calculateB();
      } else {
          this.a = createVector(x, y);
          this.sw = map(i, 0, 20, 1, 50);
          this.len = len;
          this.calculateB();
      }
  }

  followChild(child) {
      let targetX = child.a.x;
      let targetY = child.a.y;
      this.follow(targetX, targetY);
  }

  follow(tx, ty) {
      let target = createVector(tx, ty);
      let dir = p5.Vector.sub(target, this.a);
      this.angle = dir.heading();
      dir.setMag(this.len);
      dir.mult(-1);
      this.a = p5.Vector.add(target, dir);
  }

  setA(pos) {
      this.a = pos.copy();
      this.calculateB();
  }

  calculateB() {
      let dx = this.len * cos(this.angle);
      let dy = this.len * sin(this.angle);
      this.b.set(this.a.x + dx, this.a.y + dy);
  }

  update() {
      this.calculateB();
  }

  show() {
      stroke(csa[0][2]);
      strokeWeight(lnsw);
      line(this.a.x, this.a.y, this.b.x+maxminrand(-lnx,lnx), this.b.y+maxminrand(-lnx,lnx));

  }
}

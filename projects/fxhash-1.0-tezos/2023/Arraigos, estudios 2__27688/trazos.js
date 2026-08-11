//Part of this construction was created taking into account Mamboleoo's https://www.generativehut.com/post/random-walkers

class Walker {
  constructor (x, y, speedX, speedY, stopX, stopY, frameW, frameH, h, s, l, a, w) {
    this.pos = createVector(x, y);
    this.posxy = createVector(x, y);
    this.velocityxy = createVector(speedX, speedY);
    this.stop = createVector(stopX, stopY);
    this.frame = createVector(frameW, frameH);
    this.h = h;
    this.s = s;
    this.l = l;
    this.a = a;
    this.weight = w;
  }

  space() {
    let c = 2;
    return (this.pos.x < this.stop.x + m   || this.pos.x > this.frame.x - m * 1.9 || this.pos.y < this.stop.y + m  || this.pos.y > this.frame.y - m * c);   
  }

  velocity() {
    let velocityX =map(noise(this.pos.x * sampling, this.pos.y * sampling), 0, 1, 1, 1);
    let velocityY = map(noise(this.pos.y * sampling, this.pos.x * sampling), 0, 1, 1, 1);
    let v = createVector(velocityX,velocityY);
    this.velocityxy.add(v);
  }
  
  velocityb() {
    let velocityX =map(noise(this.pos.x * sampling, this.pos.y * sampling), 0, 1, -1, -1);
    let velocityY = map(noise(this.pos.y * sampling, this.pos.x * sampling), 0, 1, 1, 1);
    let v = createVector(velocityX,velocityY);
    this.velocityxy.add(v);
  }
  
  velocityc() {
    let velocityX =map(noise(this.pos.x * sampling, this.pos.y * sampling), 0, 1, 0, 0);
    let velocityY = map(noise(this.pos.y * sampling, this.pos.x * sampling), 0, 1, 1, 1);
    let v = createVector(velocityX,velocityY);
    this.velocityxy.add(v);
  }

  velocityd() {
    let velocityX =map(noise(this.pos.x * sampling, this.pos.y * sampling), 0, 1, 1, 1);
    let velocityY = map(noise(this.pos.y * sampling, this.pos.x * sampling), 0, 1, 0, 0);
    let v = createVector(velocityX,velocityY);
    this.velocityxy.add(v);
  }

  move() {   
    this.pos.add(this.velocityxy);
  }

  draw() {
    strokeWeight(this.weight);
    stroke(this.h,this.s,this.l,this.a);
    line(this.pos.x, this.pos.y, this.posxy.x, this.posxy.y);
    this.posxy.x = this.pos.x;
    this.posxy.y = this.pos.y;
  }

  color() {
      this.h += fxrand() * 0.2;
      this.s += fxrand() * 0.30;
      this.s -= fxrand() * 0.3;
      this.l += fxrand() * 0.3;
      this.a += fxrand() * 0.1;
      this.a -= fxrand() * 0.1;
  }

  weightW() {
      let minWeight = 0.3;
      let maxWeight = 3;
      this.weight +=  fxrand() * 0.2;
      this.weight -= fxrand() * 0.2;
      if(this.weight < minWeight){
        this.weight = minWeight;
      }
      if(this.weight > maxWeight){
        this.weight = maxWeight;
      }
  }
}
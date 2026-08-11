let pointX, pointY, prevX, prevY;
let direction = 4;
let step = 20;
let thunder;
let thunders;

function setup() {
  Math.random = fxrand;
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);

  createCanvas(windowWidth, windowHeight);
  background(random(255), random(255), random(255));

  pointX = random(0, width);
  pointY = 0;
  
  thunders = []
}

function draw() {
  if (int(random(0, 10)) === 0) { 
    thunders.push(new Thunder(random(0, width), 0, random(0, min(width, height) / 10), random(0, 8)))
  }

  for (let i = 0; i < thunders.length; i++) { 
    thunders[i].strike(); 
  }
}

class Thunder {
  constructor(x, y, s, d) {
    this.pointX = x;
    this.pointY = y;
    this.prevx = 0;
    this.prexy = 0;
    this.direction = d;
    this.step = s;
  }

  strike() {
    for (let i = 0; i < 10; i++) {
      if (height <= this.pointY) {
        break;
      }
      this.direction = int(random(0, 8));

      this.prevX = this.pointX;
      this.prevY = this.pointY;

      switch (this.direction) {
        case 0:
          this.pointY += this.step;
          break;
        case 1:
          this.pointX += this.step;
          this.pointY -= this.step;
          break;
        case 2:
          this.pointX += this.step;
          break;
        case 3:
          this.pointX += this.step;
          this.pointY += this.step;
          break;
        case 4:
          this.pointY += this.step;
          break;
        case 5:
          this.pointX -= this.step;
          this.pointY += this.step;
          break;
        case 6:
          this.pointX -= this.step;
          break;
        case 7:
          this.pointX -= this.step;
          this.pointY -= this.step;
          break;
      }

      if (this.pointX >= width) {
        this.pointX = width;
      } else if (this.pointX < 0) {
        this.pointX = 0;
      }

      stroke(random(255), random(255), random(255));
      strokeWeight((20 * (height - this.pointY)) / height);
      
      // TODO use perlin noise 
      line(this.prevX, this.prevY, this.pointX, this.pointY);
    }
  }
 }

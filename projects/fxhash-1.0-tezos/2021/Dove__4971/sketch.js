let particles = [];
let unit = 40;
let count;
let x, y, xSpeed, ySpeed;
let zoff = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(4);

  seed=int(fxrand() * 100000000); 
  randomSeed(seed); 
  noiseSeed(seed);
  smooth();
  colorMode(HSB);
  rectMode(CENTER);
  // frameRate(12);


  for (let i = 0; i < width / 60; i++) {
    particles.push(new Particle());
  }

}

function draw() {
  blendMode(BLEND);
  background(15, 20, 100);
  translate(width / 2, height / 2);
  for (let i = 0; i < particles.length; i++) {
    blendMode(DIFFERENCE);
    particles[i].createParticle();
    particles[i].moveParticle();
  }
  rect(0, 0, 400, 400);
}



function shadow(xoff, yoff) {
  drawingContext.shadowOffsetX = xoff;
  drawingContext.shadowOffsetY = yoff;
  drawingContext.shadowBlur = 120;
  drawingContext.shadowColor = color(160, 20, 50);
}

class Particle {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.r = random(11, 90);
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-1, 1.5);
    this.unit = unit;
    this.diameter = height / 20 - 100;
    this.angle = 20.0;
  }

  createParticle() {
    beginShape();
    let ang = rotate(this.angle);
    shadow(ang, 140);
    let noiseMax = 1;
    for (let a = 0; a < TWO_PI; a += 0.002) {
      fill(35,10,90);
      let xoff = map(cos(a), -1, 1, 0, noiseMax);
      let yoff = map(sin(a), -1, 1, 0, noiseMax);
      let r = map(noise(xoff, yoff, zoff), 0, 1.2, 20, 400);
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y+this.y);
      // vertex(x, y);      
    }
    
    endShape(CLOSE);
    zoff += 0.01;
    
//     for (let i = 0; i < this.r; i += 5) {
//         let ang = rotate(this.angle);
//         // stroke(40, 90, 90);
        
//         fill(255);
//         circle(this.x, this.y, this.r - i);
//       }
  }

  moveParticle() {
    if (this.x < 0 || this.x > width)
      this.xSpeed *= -1;
    if (this.y < 0 || this.y > height)
      this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
}
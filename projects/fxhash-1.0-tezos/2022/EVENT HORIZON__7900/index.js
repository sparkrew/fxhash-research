// This generative drawing is based on
// the Gravitational Attraction code
// https://editor.p5js.org/codingtrain/sketches/MkLraatd
// by Daniel Schiffman from the book
// The Nature of Code
// https://natureofcode.com/
// https://github.com/nature-of-code/noc-book-2
// licensed under the MIT License
// Event Horizon @ fx(hash) / Stevan Kojic 2022

let blackHole;
let stars = [];
let max;
let img;
var features = [];
let blackHoleSize;
let starCount;
let startMove;

function preload() {
  img = loadImage('bg.jpg');

  let sizes = [1000,300,2000,500,5000];
  blackHoleSize = sizes[randInt(0,sizes.length-1)];
  console.log('Black Hole mass: ', blackHoleSize);
  features.push(blackHoleSize);

  let starCount300 = [800,250,500];
  let starCount500 = [1000,500,800];
  let starCount1000 = [1500,800,2000];
  let starCount2000 = [3300,2300,5000];
  let starCount5000 = [50000,20000,10000,100000];

  switch (blackHoleSize) {
    case 300:
      starCount = starCount300[randInt(0,2)];
      break;
    case 500:
      starCount = starCount500[randInt(0,2)];
      break;
    case 1000:
      starCount = starCount1000[randInt(0,2)];
      break;
    case 2000:
      starCount = starCount2000[randInt(0,2)];
      break;
    case 5000:
      starCount = starCount5000[randInt(0,2)];
      break;
  }

 console.log('Number of stars: ',starCount);
 features.push(starCount);

 //features
  window.$fxhashFeatures = {
    "Black Hole mass": features[0],
    "Number of stars": features[1],
  };  
  console.log(fxhash);

}

function setup() {
  max = min(windowWidth, windowHeight);
  createCanvas(max, max, WEBGL);
  background(255);

  camera = createCamera();

  blackHole = new BlackHole(max/2, max/2, blackHoleSize);

  let xPos, yPos, starSize;
  for(let i=0; i<starCount; i++ ){
    xPos = randInt(0,width);
    yPos = randInt(0,height);
    starSize = randFloat(0.1, 2);
    stars.push(new Star(xPos, yPos, starSize));
  }

  image(img,-max/2,-max/2,max,max);

  startMove = fxrand(fxhash)<0.5;
}

function draw() {

  camera.lookAt(0, 0, 0);
  camera.setPosition(0, 0, max-max/5);

  translate(-max/2, -max/2, -max/2);

  for (let [i, star] of stars.entries()) {
    star.display();
    if (frameCount<120 && startMove) {
        star.move();
    } else if (frameCount<120 && !startMove) {
        blackHole.attract(star);
        star.update();
    }
    if (frameCount>=120 && frameCount<600) {
      blackHole.attract(star);
      star.update();
    }
    if (frameCount>=600 && frameCount<1500) {
      star.move();
    }
    if (frameCount>=1500 && frameCount<2100) {
      blackHole.attract(star);
      star.update();
    }
    if (frameCount>=2100 && frameCount<3300) {
      star.move();
    }
    if (frameCount>=3300 && frameCount<3600) {
      blackHole.attract(star);
      star.update();
    }
    if (frameCount>=3600) {
      noLoop();
    }  
    if (star.colide(blackHole)) {
      stars.splice(i, 1);
    }
  }
  blackHole.display();
  if (frameCount>3600) {
    noLoop();
    fxpreview();
  }  
}

class BlackHole {
  constructor(xPos,yPos,mass) {
    this.position = createVector(xPos, yPos);
    this.mass = mass;
    this.r = sqrt(this.mass) * 2;
  }

  attract(star) {
    let force = p5.Vector.sub(this.position,star.position);
    let distanceSq = constrain(force.magSq(),10,20);
    let G = 0.025;
    let strength = G*(this.mass*star.mass)/(distanceSq*distanceSq);
    force.setMag(strength);
    star.addForce(force);
  }

  display() {
    noStroke();
    noFill();
    ellipse(this.position.x, this.position.y, this.r*2);
  }
}

class Star {
    constructor(xPos,yPos,mass) {
      this.position = createVector(xPos,yPos);
      let v = createVector(fxrand(fxhash),fxrand(fxhash),fxrand(fxhash));
      this.vel = p5.Vector.add(v);
      this.acceleration = createVector(1,1);
      this.mass = mass/10;
      this.r = sqrt(this.mass) * 2;
    }
  
    addForce(force) {
      force = p5.Vector.div(force, this.mass);
      this.acceleration.add(force);
    }

    update() {
      this.vel.add(this.acceleration);
      this.position.add(this.vel);
      this.acceleration.set(0, 0);
    }

    move() {
      this.vel.set(randFloat(-2,2),randFloat(-2,2));
      this.position.add(this.vel);
    }
  
    display() {
      noStroke();
      fill(0);
      ellipse(this.position.x, this.position.y, this.r * 2);
    }
  
    colide(blackhole) {
      if (dist(this.position.x, this.position.y, blackhole.position.x, blackhole.position.y) < this.r + blackhole.r){
        return true
      } else null;
      
    }
  }

function keyTyped() {
  if (key === 's' || key === 'S') {
      saveCanvas(canvas, 'Event-Horizon_mass-'+blackHoleSize+'_stars-'+starCount+'.png');
  } else null;
}

function randInt(x, y) {
  return Math.floor(fxrand(fxhash) * (y + 1 - x) + x);
}

function randFloat(x, y) {
  return (fxrand(fxhash) * (y - x) + x);
}
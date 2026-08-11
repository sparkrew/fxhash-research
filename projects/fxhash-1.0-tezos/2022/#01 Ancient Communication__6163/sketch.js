let curl = "https://coolors.co/223843-eff1f3-dbd3d8-d8b4a0-d77a61";

let bgColor;
let seed, noiseArg;
let num;
let obj;
let prev_id, next_id;

function setup() {
  seed=int(fxrand() * 100000000); 
  randomSeed(seed); 
  createCanvas(600, 600);
  // colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
  background(255);
   noLoop();
  //frameRate(0.5);

  pal = createPallete(curl);
  let cid = int(random(pal.length));
  bgColor = pal[cid];
  pal.splice(cid, 1);
  pal = shuffle(pal);
  
  seed = random(1e+4);
  noiseArg = random(1e+4);

  // background(bgColor);
  // effect();  // noise effect
}

function draw() {
  // randomSeed(seed);
  background(bgColor);
	pal = shuffle(pal);
  
  let obj;
  let d = 60;
  let margin = -d/2;
  let col = 10,  row = 3;
  let c1, c2;
  for (let k = 0; k < 4; k++) {
    for (let i = 0; i <= col; i++) {
      for (let j = 1; j <= row-1; j++) {
        c1 = lerpColor(pal[0], pal[2], map(margin+d*j, 0, height, 0, 1));
        c2 = lerpColor(pal[1], pal[3], map(margin+d*j, 0, height, 0, 1));
        obj = new Tile1(d/2+d*i, margin+d*j, d, c1, c2);  obj.draw();
      }
      c1 = lerpColor(pal[0], pal[2], map(margin+d*row, 0, height, 0, 1));
      c2 = lerpColor(pal[1], pal[3], map(margin+d*row, 0, height, 0, 1));
      obj = new Tile2(d/2+d*i, margin+d*row, d, c2, c1);  obj.draw();
    }
    margin += d*row;
    d /= 2;  col *= 2;  row *= 2;
    margin += d/2;
  }
  
  noStroke();  fill(bgColor);
  beginShape();
  for (let i = 0; i <= 360; i++) {
    vertex(cos(i)*250+300, sin(i)*250+300);
  }
  vertex(600, 600);
  vertex(600,   0);
  vertex(  0,   0);
  vertex(  0, 600);
  vertex(600, 600);
  endShape();
  
  strokeWeight(10);  stroke(bgColor);  noFill();
  circle(300, 300, 470);

  noiseArg += 2e-3;

  // effect();
  drawWindow();
}

class Tile1 {
  constructor(_x, _y, _d, _c1, _c2) {
    this.x = _x;
    this.y = _y;
    this.d = _d;
    this.c1 = _c1;  this.c2 = _c2;
  }
  
  draw() {
    push();
    translate(this.x, this.y);
    rotate(int(random(4)) * 90);
    // stroke(300);  fill(this.c1);
    noStroke();  fill(this.c1);
    rectMode(CENTER);
    rect(0, 0, this.d, this.d);
    rectMode(CORNER);
    
    let mode = int(random(5));
    if (mode == 0) {
      noStroke();  fill(this.c2);
      arc(this.d/2, this.d/2, this.d*2/3*2, this.d*2/3*2, 180, 270);
      noStroke();  fill(this.c1);
      arc(this.d/2, this.d/2, this.d*2/3*1, this.d*2/3*1, 180, 270);
    
      noStroke();  fill(this.c2);
      arc(-this.d/2, -this.d/2, this.d*2/3*2, this.d*2/3*2, 0, 90);
      noStroke();  fill(this.c1);
      arc(-this.d/2, -this.d/2, this.d*2/3*1, this.d*2/3*1, 0, 90);
    } else if (mode == 1) {
      noStroke();  fill(this.c2);
      rectMode(CENTER);
      rect(0, 0, this.d / 3, this.d);
      rect(0, 0, this.d, this.d / 3);
      rectMode(CORNER);
    } else if (mode == 2) {
      noStroke();  fill(this.c2);
      rect(-this.d/2, -this.d/2, this.d/3*2, this.d);
      arc(this.d/2, 0, this.d*2/3/2, this.d*2/3/2, 90, 270);
      noStroke();  fill(this.c1);
      arc(-this.d/2, -this.d/2, this.d*2/3*1, this.d*2/3*1, 0, 90);
      arc(-this.d/2,  this.d/2, this.d*2/3*1, this.d*2/3*1, 270, 360);
    } else if (mode == 3) {
      noStroke();  fill(this.c2);
      arc( this.d/2, 0, this.d/3, this.d/3, 90, -90);
      arc(-this.d/2, 0, this.d/3, this.d/3, -90, 90);
      arc(0,  this.d/2, this.d/3, this.d/3, -180, 0);
      arc(0, -this.d/2, this.d/3, this.d/3, 0, 180);
    } else if (mode == 4) {
      noStroke();  fill(this.c2);
      arc(-this.d/2, 0, this.d/3, this.d/3, -90, 90);
      arc(0, -this.d/2, this.d/3, this.d/3, 0, 180);
      arc(this.d/2, this.d/2, this.d*2/3*2, this.d*2/3*2, -180, -90);
      noStroke();  fill(this.c1);
      arc(this.d/2, this.d/2, this.d*2/3*1, this.d*2/3*1, -180, -90);
    } else {
      noStroke();  fill(this.c2);
      arc( this.d/2, 0, this.d/3, this.d/3, 90, -90);
      arc(-this.d/2, 0, this.d/3, this.d/3, -90, 90);
      rectMode(CENTER);
      rect(0, 0, this.d/3, this.d*2);
      rectMode(CORNER);
    }
    
    pop();
  }
}

class Tile2 {
  constructor(_x, _y, _d, _c1, _c2) {
    this.x = _x;
    this.y = _y;
    this.d = _d;
    this.c1 = _c1;  this.c2 = _c2;
  }
  
  draw() {
    push();
    translate(this.x, this.y);
    noStroke();  fill(this.c1);
    rectMode(CENTER);
    rect(0, 0, this.d, this.d);
    rectMode(CORNER);
    
    noStroke();  fill(this.c2);
    arc(-this.d/2, -this.d/2, this.d*2/3*1, this.d*2/3*1, 0, 90);
    noStroke();  fill(this.c2);
    arc( this.d/2, -this.d/2, this.d*2/3*1, this.d*2/3*1, 90, 180);
    noStroke();  fill(this.c2);
    arc(-this.d/2,  this.d/2, this.d*2/6*1, this.d*2/6*1, 270, 360);
    noStroke();  fill(this.c2);
    arc(        0,  this.d/2, this.d*2/6*1, this.d*2/6*1, 180, 360);
    noStroke();  fill(this.c2);
    arc( this.d/2,  this.d/2, this.d*2/6*1, this.d*2/6*1, 180, 270);
		
    pop();
  }
}

function easeInQuart(t) {
  return 1 + (--t) * t * t * t * t;
}

function easeInOutQuart(t) {
  return t < 0.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t;
}

function easeInElastic(t) {
  return (0.01 - 0.01 / t) * Math.sin(60 * t) + 1;
}

function keyPressed() {
  if (keyCode == ENTER) {
    save('200124.png');
  }
}

function effect() {
  strokeWeight(1);
  for (let i = 0; i < width * height * 5 / 100; i++) {
    stroke(0, 0, 0, 10);
    let px = random(width);
    let py = random(height);
    point(px, py);
  }
}

function drawWindow() {
  w = width / 30;
  noStroke();
  fill(255);
  rect(0, 0, width, w);
  rect(0, height - w, width, w);
  rect(0, 0, w, height);
  rect(width - w, 0, w, height);
}

function createPallete(_url) {
  let slash_index = _url.lastIndexOf('/');
  let pallate_str = _url.slice(slash_index + 1);
  let arr = pallate_str.split('-');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = color('#' + arr[i]);
  }
  return arr;
}
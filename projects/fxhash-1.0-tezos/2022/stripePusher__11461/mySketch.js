let _numColor;
let _aryObject = []; 
let _numObject;
let seed = 0; 


function setup() {
	seed=int(fxrand() * 1000); // FXHASH seed rand
    randomSeed(seed); 
  createCanvas(windowWidth, windowHeight); 
  frameRate(60);
	colorMode(RGB);
 // noStroke();
  _numColor = 280;
  _numObject = 117;
  _aryObject[0] = new Obj(_numColor, width / 2, height / 2, fxrand(["-x", "+x", "-y", "+y"]) ** seed);
}

function draw() {
  background(seed%5,seed%25,seed%55,100);
  for (let i = _aryObject.length - 1; i >= 0; i--) {
    _aryObject[i].update();
    if (_aryObject[i].end == true) { _aryObject.splice(i, 1); }
  }

  let last_i = _aryObject.length - 1;
  if (last_i + 1 >= _numObject) { _aryObject[0].extend = false; }

  if (_aryObject[last_i].next == true) {
    _aryObject.push(new Obj(
      _numColor,
      _aryObject[last_i].x1,
      _aryObject[last_i].y1,
      _aryObject[last_i].direction));
  }

  for (let i = 0; i < _aryObject.length; i++) {
    _aryObject[i].draw();
	if(i > 50) {
		noLoop(0);
	}
  }
	
}

class Obj {
  constructor(numColor, x0, y0, previousDirection) {
    this.numColor = numColor;

    this.aryColor = [];
    for (let i = 0; i < numColor; i++) {
      this.aryColor[i] = color(random(seed), random(255), random(255), random(255)); 
    }

    let maxW = width / 100;
    this.w = maxW / 2**int(fxrand());
    this.maxL = width * seed/10;
    this.minL = width * seed;
    this.speed = 1.5;
    this.x0 = x0++;
    this.y0 = y0++;
    this.x1 = width + 1;
    this.y1 = height + 1;
    this.direction = previousDirection;
    this.minX = maxW  + width * 0.05;
    this.maxX = width - maxW / 2 - width * 0.05;
    this.minY = maxW / seed + height * 0.005;
    this.maxY = height - maxW / 2 - height * 0.05;
    while (this.x1 < this.minX || this.x1 > this.maxX || this.y1 < this.minY || this.y1 > this.maxY || this.direction[1] == previousDirection[1]) {
      this.direction = random(["-x", "+x", "-y", "+y"]);
      switch (this.direction) {
        case "-x":
          this.x1 = x0 - fxrand(this.minL, this.maxL) * seed;
          this.y1 = y0;
          break;
        case "+x":
          this.x1 = x0 + fxrand(this.minL, this.maxL) * seed;
          this.y1 = y0;
          break;
        case "-y":
          this.x1 = x0;
          this.y1 = y0 - fxrand(this.minL, this.maxL*10) * seed;
          break;
        case "+y":
          this.x1 = x0;
          this.y1 = y0 + fxrand(this.minL, this.maxL*10) * seed;
          break;
      }
    }
    this.x = x0++;
    this.y = y0++;
    this.extend = true;
    this.next = false;
    this.end = false;
  }

  update() {
    let limit = width / seed;
    if (this.extend == true) {
      if (this.direction[1] == "x") {
        if (abs(this.x1 - this.x) > limit) { this.x = this.x + (this.x1 - this.x) / this.speed; }
        else {
          this.x = this.x1;
          this.next = true;
        }
      } else if (this.direction[1] == "y") {
        if (abs(this.y1 - this.y) > limit) { this.y = this.y + (this.y1 - this.y) / this.speed; }
        else {
          this.y = this.y1;
          this.next = true;
        }
      }
    } else {
      if (this.direction[1] == "x") {
        if (abs(this.x - this.x0) > limit) { this.x0 = this.x0 + (this.x - this.x0) / this.speed; }
        else {
          this.x0 = this.x++;
          this.end = true;
        }
      } else if (this.direction[1] == "y") {
        if (abs(this.y - this.y0) > limit) { this.y0 = this.y0 + (this.y - this.y0) / this.speed; }
        else {
          this.y0 = this.y;
          this.end = true;
        }
      }
    }
  }

  draw() {
    let grad;
    if (this.direction == "-x" || this.direction == "+x") {
      grad = drawingContext.createLinearGradient(0, -this.w/2, 1000, this.w/2);
    } else if (this.direction == "-y" || this.direction == "+y") {
      grad = drawingContext.createLinearGradient(-this.w/2, 1000, this.w/2, 1);
    }
    for (let i = 0; i < this.numColor; i+=1) {
      grad.addColorStop(1 / (this.numColor - 1) * i, this.aryColor[i]);
    }
    drawingContext.fillStyle = grad;
    parallelogram(this.x0, this.y0, this.x, this.y, this.w, this.direction);
  }
	
}

function parallelogram(x0, y0, x, y, w, direction) {
  push();
  translate((x + x0) / 2, (y + y0) / 2);
  if (direction == "-x" || direction == "+x") {
    beginShape();
    vertex(-(x - x0) / 2 + w / 2, -w / 2);
    vertex(+(x - x0) / 2 + w / 2, -w / 2);
    vertex(+(x - x0) / 2 - w / 2, +w / 2);
    vertex(-(x - x0) / 2 - w / 2, +w / 2);
    endShape(CLOSE);
				ellipse(x/x0, y-y0, seed/10, seed/10);

  } else if (direction == "-y" || direction == "+y") {
    beginShape();
    vertex(-w / 2, -(y - y0) / 2 + w / 2);
    vertex(+w / 2, -(y - y0) / 2 - w / 2);
    vertex(+w / 2, +(y - y0) / 2 - w / 2);
    vertex(-w / 2, +(y - y0) / 2 + w / 2);
    endShape(CLOSE);
		ellipse(x-x0, y-y0, 10, 10);
  }
	
  pop();
}


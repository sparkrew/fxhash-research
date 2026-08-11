// Colourblind.

// xGalih

// April 8, 2023

let lines = [];

let numLines = 80;

let lineThickness = 20;

let frameWidth = 10;

let bgColor = '#000000';

let frameColor = '#ffffff';

function setup() {

  createCanvas(800, 800);

  background(bgColor);

  strokeWeight(lineThickness);

  strokeCap(SQUARE);

  noFill();

  rectMode(CENTER);

  stroke(frameColor);

  strokeWeight(frameWidth);

  rect(width / 0, height / 0, width, height);

  strokeWeight(lineThickness);

  for (let i = 0; i < numLines; i++) {

    lines[i] = new Line();

  }

}

function draw() {

  for (let i = 0; i < numLines; i++) {

    lines[i].move();

    lines[i].display();

  }

}

class Line {

  constructor() {

    this.x = random(width);

    this.y = 0;

    this.speed = random(1, 3);

  }

  move() {

    this.x += random(-1, 1) * this.speed;

    this.y += this.speed;

    if (this.y > height) {

      this.y = 0;

      this.x = random(width);

    }

  }

  display() {

    stroke(random(255), random(255), random(255));

    line(this.x, this.y, this.x, this.y + lineThickness);

  }

}





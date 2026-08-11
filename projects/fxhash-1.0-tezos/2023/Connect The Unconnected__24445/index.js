// Connect The Unconnected
// Copyright by 0xmintmedia - created with P5.js on January 30th, 2023.
// https://0xmintmedia.com
// Description: "Connect the Unconnected" is a generative art project that explores the theme of human connectivity through telecommunications networks. The artwork consists of numerous lines that intersect at different points, creating a visual representation of the way in which we connect with each other through technology. Each line symbolizes a connection between individuals, while the highlighted point where they cross symbolizes a hub of activity and communication. The artwork is dynamic and constantly evolving, reflecting the ever-changing nature of our interconnected world. The randomness and unpredictability of the lines create a sense of unpredictability, reflecting the way in which our connections and networks can shift and change in an instant. "Connect the Unconnected" invites viewers to contemplate the role of technology in our lives and the ways in which it has changed the way we connect with one another. Created with P5.js.


let numLines = 1;
let lines = [];

function setup() {
createCanvas(800, 800);
// FX Seed
seed=int(fxrand() * 10000);
//fxrandSeed(seed); 
noiseSeed(seed);
randomSeed(seed);
background(200);
strokeWeight(5);
numLines = random (5, 50);

for (let i = 0; i < numLines; i++) {
let x1 = random(140, width - 140);
let y1 = random(140, height - 140);
let x2 = random(140, width - 140);
let y2 = random(140, height - 140);
while (dist(x1, y1, x2, y2) < 200) {
x1 = random(140, width - 140);
y1 = random(140, height - 140);
x2 = random(140, width - 140);
y2 = random(140, height - 140);
}
lines[i] = new Line(x1, y1, x2, y2);
}
}

function draw() {
background(255);
fill(255, 255, 255);
rect(80, 80, 640, 640);
for (let i = 0; i < numLines; i++) {
lines[i].display();
for (let j = i + 1; j < numLines; j++) {
let intersect = checkIntersect(lines[i], lines[j]);
if (intersect) {
fill(255, 0, 0);
noStroke();
ellipse(intersect.x, intersect.y, 15, 15);
}
}
}
noLoop();
}

class Line {
constructor(x1, y1, x2, y2) {
this.x1 = x1;
this.y1 = y1;
this.x2 = x2;
this.y2 = y2;
this.c = color(random(0, 0), random(0, 0), random(0, 0));
}

display() {
stroke(this.c);
line(this.x1, this.y1, this.x2, this.y2);
}
}

function checkIntersect(l1, l2) {
let x1 = l1.x1,
y1 = l1.y1,
x2 = l1.x2,
y2 = l1.y2;
let x3 = l2.x1,
y3 = l2.y1,
x4 = l2.x2,
y4 = l2.y2;

let den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
if (den == 0) {
return false;
}

let t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
let u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

  if (t > 0 && t < 1 && u > 0 && u < 1) {
    let x = x1 + t * (x2 - x1);
    let y = y1 + t * (y2 - y1);
    return createVector(x, y);
  }

  return false;
}
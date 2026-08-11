/*
Swarm of agents moving a network of springs and masses in a additive blend mode.
At the end of the generation, your mouse cursor will appear and you can then interact with the physical network to propagate your own patterns.

Note that the size of the window is important in the final image created : don't hesitate to go fullscreen ! Resizing the window will relaunch the generation with the same seeds.
*/
let nodes = [];
let springs1 = [];
let springs2 = [];
let springs3 = [];
let xspacing
let yspacing = 45
let movingNodes = []
let n

let alpha
let outMargin
let damping1
let damping2
let damping3
let yF1
let yF2
let yF3

let seed
let iter = 0;

function setup() {
  background(0);
  createCanvas(windowWidth, windowHeight);
  pixelDensity(pixelDensity())
  noCursor()
  smooth(8)
  //console.log(nodes)

  seed = fxrand() * 99999

  randomSeed(seed)
  noiseSeed(seed)

  n = int(fxrand() * 10) + 10
  render()


}


function render() {
  iter = 0
  movingNodes = []
  for (let i = 0; i < n; i++) {
    movingNodes.push(new NoiseAgent())
  }
  nodes = []
  springs = []
  background(0);

  let maxDist = map(width > height ? height : width, 600, 3860, 30, 500)
  //xspacing = map(width > height ? height : width, 600, 3860, 35, 35)

  xspacing = width / int(fxrand() * 15)
  yspacing = fxrand() * 20 + 15
  alpha = 200
  outMargin = 150
  damping1 = fxrand() * 0.5 + 0.1
  damping2 = fxrand() * 0.5 + 0.1
  damping3 = fxrand() * 0.5 + 0.1
  yF1 = fxrand() * 0.25 + 0.75
  yF2 = fxrand() * 0.25 + 0.75
  yF3 = fxrand() * 0.25 + 0.75





  for (let i = xspacing; i < width - 10; i += xspacing) {
    let nI = 0
    for (let j = -outMargin; j <= height + outMargin; j += yspacing) {
      let newNode = (new Node(i, j, maxDist, i * j))
      nodes.push(newNode)
      if (nI > 0) {
        springs1.push(new Spring(newNode, nodes[nodes.length - 2], yspacing * yF1, color(255, 50, 50, alpha), damping1))
      }
      nI++
    }
  }


  for (let i = xspacing; i < width - 10; i += xspacing) {
    let nI = 0
    for (let j = - outMargin; j <= height + outMargin; j += yspacing) {
      let newNode = (new Node(i, j, maxDist, i * j))
      nodes.push(newNode)
      if (nI > 0) {
        springs2.push(new Spring(newNode, nodes[nodes.length - 2], yspacing * yF2, color(0, 255, 0, alpha), damping2))
      }
      nI++
    }
  }

  for (let i = xspacing; i < width - 10; i += xspacing) {
    let nI = 0
    for (let j = -outMargin; j <= height + outMargin; j += yspacing) {
      let newNode = (new Node(i, j, maxDist, i * j))
      nodes.push(newNode)
      if (nI > 0) {
        springs3.push(new Spring(newNode, nodes[nodes.length - 2], yspacing * yF3, color(0, 0, 255, alpha), damping3))
      }
      nI++
    }
  }


}




function draw() {
  randomSeed(seed)
  noiseSeed(seed)
  background(0)
  iter++
  // if (iter < 400) {
  blendMode(SCREEN)
  if (iter < 400) {
    noCursor()
  }
  else {
    cursor()
  }


  for (var i = 0; i < springs1.length; i++) {
    springs1[i].update();
    if (iter > 100) springs1[i].display();

    springs2[i].update();
    if (iter > 100) springs2[i].display();

    springs3[i].update();
    if (iter > 100) springs3[i].display();
  }

  for (let j = 0; j < movingNodes.length; j++) {

    if (iter < 400) {

      movingNodes[j].update()

    }
    let n = movingNodes[j].n
    n.update()



    for (var i = 0; i < nodes.length; i++) {

      let mouseNode = new Node(mouseX, mouseY, 50)

      let maxDist = map(width > height ? height : width, 600, 3860, 50, 3000)
      let d = dist(n.location.x, n.location.y, nodes[i].location.x, nodes[i].location.y)

      if (d < maxDist) {
        nodes[i].attract(n)
      }

      if (iter > 400) {
        nodes[i].attract(mouseNode)
      }




      if (j == 0) {

      }
      if (nodes[i].location.y <= -(outMargin / 2) || nodes[i].location.y >= height + (outMargin / 2)) {
        nodes[i].update();
      } else {
        if (j == 0) nodes[i].update();
      }


    }
  }
  // }



}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  background(0)

  render()

}

class NoiseAgent {

  constructor() {
    this.x = fxrand() * width
    this.y = height * .05 + fxrand() * height * .90
    this.xnoise = random(9990)
    this.ynoise = random(19394)
    this.xspeed = random(.0001, 0.0005) * (random(1) < 0.5 ? 1 : -1)
    this.yspeed = random(.0001, 0.0005) * (random(1) < 0.5 ? 1 : -1)
    this.n = new Node(this.x, this.y, 0, 1)


  }

  update() {

    this.xnoise += this.xspeed
    this.ynoise += this.yspeed
    this.x += map(noise(this.xnoise, 17, 73), 0, 1, -1, 1) * 5
    this.y += map(noise(this.ynoise, 11, 43), 0, 1, -1, 1) * 5

    if (this.x < 0) this.x = width
    if (this.x > width) this.x = 0
    if (this.y < 0) this.y = height
    if (this.y > height) this.y = 0

    this.n.location.x = this.x
    this.n.location.y = this.y
  }


}




function Node(x, y, diam, id) {
  // ------   properties ------
  // if needed, an ID for the node
  this.id = id;
  this.diameter = diam || 25;


  this.minX = 0;
  this.maxX = windowWidth;
  this.minY = 0;
  this.maxY = windowHeight;
  this.minZ = -60000;
  this.maxZ = 60000;

  this.velocity = createVector(0, 0, 0);
  this.pVelocity = createVector(0, 0, 0);
  this.maxVelocity = 10;

  this.damping = 0.1;
  // radius of impact
  this.radius = diam * 1;
  // strength: positive for attraction, negative for repulsion (default for Nodes)
  this.strength = 5;
  // parameter that influences the form of the function
  this.ramp = 1.0;

  this.location = createVector(x, y, 0);

  this.overMe = false;
  this.page;

  this.displayLabel = true;


  this.alpha = 50;
  this.highlight = false;
}


Node.prototype.attract = function (theNode) {
  var d = dist(this.location.x, this.location.y, theNode.location.x, theNode.location.y);

  if (d > 0 && d < this.radius) {
    var s = pow(d / this.radius, 1 / this.ramp);
    var f = s * 9 * this.strength * (1 / (s + 1) + ((s - 3) / 4)) / d;
    var df = p5.Vector.sub(this.location, theNode.location);
    df.mult(f);

    this.velocity.x += df.x;
    this.velocity.y += df.y;
    this.velocity.z += df.z;
  }
}


Node.prototype.update = function () {

  this.velocity.limit(this.maxVelocity);

  this.pVelocity.set(this.velocity);

  this.location.x += this.velocity.x;
  this.location.y += this.velocity.y;
  this.location.z += this.velocity.z;


  if (this.location.x < this.minX) {
    this.location.x = this.minX - (this.location.x - this.minX);
    this.velocity.x = -this.velocity.x;
  }
  if (this.location.x > this.maxX) {
    this.location.x = this.maxX - (this.location.x - this.maxX);
    this.velocity.x = -this.velocity.x;
  }

  if (this.location.y < this.minY) {
    this.location.y = this.minY - (this.location.y - this.minY);
    this.velocity.y = -this.velocity.y;
  }
  if (this.location.y > this.maxY) {
    this.location.y = this.maxY - (this.location.y - this.maxY);
    this.velocity.y = -this.velocity.y;
  }
  /*
  if (this.location.z < this.minZ) {
    this.location.z = this.minZ - (this.location.z - this.minZ);
    this.velocity.z = -this.velocity.z;
  }
  if (this.location.z > this.maxZ) {
    this.location.z = this.maxZ - (this.location.z - this.maxZ);
    this.velocity.z = -this.velocity.z;
  } */

  this.velocity.mult(1 - this.damping);

  if (this.highlight == true) {
    this.displayLabel = true;
    this.pulse();

  }
  else {
    this.alpha = 100;
  }
}

Node.prototype.pulse = function () {
  this.alpha = 50 + 100 * abs(sin(t));

}

Node.prototype.display = function () {
  push();

  noStroke();
  fill(225, 255, 255);
  let normId = this.id / max
  let d = map(pow(normId, 0.5), 0, 1, this.diameter / 4, this.diameter / 15)

  ellipse(this.location.x, this.location.y, d, d);
  noFill()
  //stroke(255)
  fill(225, 255, 255, this.alpha);
  ellipse(this.location.x, this.location.y, d * 4, d * 4);

  pop();
}


Node.prototype.over = function (x, y) {
  //println(this.id , this.snd.isPlaying());
  var delta = dist(x, y, this.location.x, this.location.y);


  if (delta < 9) {
    push();
    stroke(255);
    noFill();
    ellipse(this.location.x, this.location.y, this.diameter + 10, this.diameter + 10);
    pop();
    this.overMe = true;
  }
  else {
    this.overMe = false;
  }


}


function Spring(fNode, tNode, len, c, damp) {
  this.fromNode = fNode;
  this.toNode = tNode;

  this.length = len;
  this.stiffness = random(1);
  this.damping = damp;

  this.noiseFx = random(500);
  this.noiseFy = random(500);
  this.step = random(1);

  this.c1XNoise;
  this.c1YNoise;
  this.c2XNoise;
  this.c2YNoise;
  this.c = c
}

Spring.prototype.update = function () {
  // calculate the target position
  // target = normalize(to - from) * length + from
  var diff = p5.Vector.sub(this.toNode.location, this.fromNode.location);
  diff.normalize();
  diff.mult(this.length);
  var target = p5.Vector.add(this.fromNode.location, diff);

  var force = p5.Vector.sub(target, this.toNode.location);
  force.mult(0.5);
  force.mult(this.stiffness);
  force.mult(1 - this.damping);

  this.toNode.velocity.add(force);
  this.fromNode.velocity.add(p5.Vector.mult(force, -1));
}

Spring.prototype.display = function () {
  push();
  noFill();
  strokeWeight(0.7)
  stroke(this.c);

  this.noiseFx += this.step;
  this.noiseFy += this.step;

  this.c1XNoise = map(noise(this.noiseFx, 10, 20), 0, 1, -150, 150);
  this.c1YNoise = map(noise(this.noiseFy, 2, 87), 0, 1, -150, 150);
  this.c2XNoise = map(noise(this.noiseFx, 5, 12), 0, 1, -150, 150);
  this.c2YNoise = map(noise(this.noiseFy, 15, 30), 0, 1, -150, 150);
  beginShape()

  curveVertex(this.fromNode.location.x, this.fromNode.location.y)

  curveVertex(this.toNode.location.x, this.toNode.location.y)

  endShape()

  curve(this.fromNode.location.x, this.fromNode.location.y,
    this.fromNode.location.x, this.fromNode.location.y,
    this.toNode.location.x, this.toNode.location.y,
    this.toNode.location.x, this.toNode.location.y);
  pop();
}


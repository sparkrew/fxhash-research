// Environment variables
let width, height, padding, gaps;
var points = []
var angleMultiplier = 0.0005


function setup() {
  width = 800;
  height = 1000;
  cnv = createCanvas(width, height);
  background(30)
  angleMode(DEGREES)
  noiseDetail(1)

  var density = 20
  var spacing = width/density

  for (var x=0; x<width; x += spacing) {
    for (var y = 0; y < height; y += spacing) {
      var point = createVector(x + random(-20, 20), y + random(-20, 20))
      points.push(point)
    }
  }
}

function draw() {
  // noLoop()
  // noStroke()
  fill(100)
  stroke(color("#fafafa"))

  for (var i = 200; i < 201; i++) {
    var angle = map(noise(points[i].x * angleMultiplier, points[i].y * angleMultiplier), 0, 1, 0, 2000)
    if (true) {
      points[i].add(createVector(cos(angle), sin(angle)))
      // ellipse(points[i].x, points[i].y, 2)
      strokeWeight(50)
      point(points[i].x, points[i].y, 2)
    }
    

    
  }
  
}














// Helpers

function keyPressed() {
  console.log("Key pressed called.");
  if (keyCode === RETURN) {
    save(cnv, "genereeritud.jpg");
  }
}

function likelyEvent() {
  let likely = Math.random();
  if (likely < 0.75) {
    return true;
  } else {
    return false;
  }
}

function unlikelyEvent() {
  let unlikely = Math.random();
  if (unlikely > 0.75) {
    return true;
  } else {
    return false;
  }
}

function coinflip() {
  let coinflip = Math.random();
  if (coinflip > 0.5) {
    return true;
  } else {
    return false;
  }
}



function setup() {
    Math.random = fxrand
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
  createCanvas(windowWidth, windowHeight);
  
  blendMode(ADD)
  
  seed = int(random(10000000))
  console.log(seed)
  noiseSeed(seed)
  randomSeed(seed)
  pixelDensity(10)
}

function draw() {
  background(0);
  
  
  for (var k = 0; k < 30; k++) {
  let xoff = random(-100+windowWidth,400)

  for (var i = 0; i < windowHeight; i++) {
    beginShape()
    stroke(nc(i))
    for (var j = 0; j < 30; j++) {
      let x = noise(i/50) * xoff + 100
      vertex(x, i+j)
    }
    endShape()
  }
  }
  
  noLoop()
}

function nc(i) {
  i = i/300
  return color(200*noise(i),200*noise(i+1),200*noise(i+2))
}

function keyPressed() {
  if (keyCode === 83) { // if "s" is pressed
    saveCanvas(seed + ".jpg");
  }
}

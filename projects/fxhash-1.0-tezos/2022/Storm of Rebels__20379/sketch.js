function setup() {
    Math.random = fxrand
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
  createCanvas(windowWidth, windowHeight);
  
  m = 10
  // blendMode(DIFFERENCE)
}

function draw() {
  background(255);
  noFill()
  for (var j = -10; j < 1200; j++) {
    beginShape()
    for (var i = 0; i < 1200; i++) {
      let y = j*100 + (i*noise(i))
      vertex(i,y)
    }
    endShape()
  }
  
  noLoop()
}
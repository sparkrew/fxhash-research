function setup() {
    Math.random = fxrand
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
  createCanvas(windowWidth, windowHeight);
  seed = int(random(10000000))
  console.log(seed)
  noiseSeed(seed)
  randomSeed(seed)
  pixelDensity(10)
  blendMode(ADD)
  
  d = 1
}

function draw() {
  background(0);
  stroke(255)
  
  translate(windowWidth/2,windowHeight/2);
  
  for (var j = 1; j < 4000; j++) {
    stroke(nc(j))
    noFill()
    beginShape()
    // x dot
    let xd = random(400);
    let yd = random(400);
    for (var i = 0; i < 100; i++) {
      // Rounded
      let xr = round(xd/d) * d
      let yr = round(yd/d) * d
      
      let a = getAngle(xr,yr)
      a += PI/2
      
      rotate(a)
      
      vertex(xr,yr)
      
      xd += sin(-a)
      yd += cos(-a)
      // line(0,0,300,0)
      // circle(0,0,r)
      // line(0,0,x,y)
      // circle(x,y,10)
    }
    endShape()
  }
  
  // circle(200,0,100)
  noLoop()
}

function getAngle(x,y) {
  let a = atan(y/x)
  
  if (x < 0) {
    a += PI
  }
  return a
}

function nc(i) {
  i = i/20
  return color(255*noise(i),255*noise(i+1),255*noise(i+2))
}

function keyPressed() {
  if (keyCode === 83) { // if "s" is pressed
    saveCanvas(seed + ".jpg");
  }
}
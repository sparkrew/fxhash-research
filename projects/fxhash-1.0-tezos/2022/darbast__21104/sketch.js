function setup() {
    Math.random = fxrand
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
  createCanvas(windowWidth, windowHeight);
  
  seed = random(10000)
  console.log(seed)
  randomSeed(seed)
  
  pixelDensity(15)
}

function draw() {
  background(255);
  
  fill(0)
  for(var i = 0; i < random(100,500); i++) {
    draw_star(random(windowWidth), random(windowHeight))
  }
  
  fill(0)
  moon_x = random(windowWidth)
  moon_y = random(windowHeight)
  
  circle(moon_x,moon_y,50)
  noStroke()
  fill(255)
  circle(moon_x + 10,moon_y + 10,50)
  
  noLoop()
}

function draw_star(x,y) {
  lines = int(random(3,6))
  push()
  translate(x,y)
  for (var i = 0; i < lines; i++) {
    line(0,-10,0,10)
    rotate(PI/(lines/2))
  }
  pop()
}

function keyPressed() {
  if (keyCode === 83) { // if "s" is pressed
    saveCanvas(seed + ".jpg");
  }
}
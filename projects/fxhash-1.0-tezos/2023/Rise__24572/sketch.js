function setup() {
  createCanvas(windowWidth, windowHeight);
   const seed = fxrand() * 9999999;
  noiseSeed(seed);
  randomSeed(seed);
  pixelDensity(10)
  blendMode(ADD)
}

function draw() {
  background(0);
  stroke(255)
  strokeWeight(3)
  
  lines = 51
  for (var i = 0; i < lines; i++) {
    stroke(nc(i))
    j = map(i,0,lines,0,PI/2)
    x = 400*cos(j)
    y = 400*sin(j)
    line(0,0,x,y)
  }
  for (i = 0; i < lines; i++) {
    stroke(nc(lines-i))
    j = map(i,0,lines,PI/2,0)
    x = 800*cos(j)
    y = 800*sin(j)
    line(400,400,x,y)
  }
  
  noLoop()
}

function nc(i) {
  i = i/70
  return color(255*noise(i),255*noise(i+1),255*noise(i+2))
}

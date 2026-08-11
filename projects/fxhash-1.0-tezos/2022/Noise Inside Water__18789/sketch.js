function setup() {
  Math.random = fxrand
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
  createCanvas(windowWidth, windowHeight);
  
  // seed = 6988930
  
  seed = int(random(10000000))
  console.log(seed)
  noiseSeed(seed)
  randomSeed(seed)
  pixelDensity(10)
  t = 0
}

function draw() {
  background(0);

  noStroke()
  d = 6
  e = 1000
  r = 1000
  
  for (var i = 0; i < windowWidth; i++) {
    for (var j = 0; j < windowHeight; j++) {
      let x = i + t
      let y = j + t
      n = nc((x/d)+10 + (r*noise(x/e,y/e) - r*2),
                  (y/d)+10 + (r*noise(x/e,j/e) - r*2))
      
      fill(n)
      // fill(nc(i,j*10))

      square(i,j,1)
    }
  }
  noLoop()
}

function nc(i,j) {
  // i = i/5
  // j = j/5
  return color(255*noise(i,j),255*noise(i+1,j+1),255*noise(i+2,j+2),random(150,255))
}
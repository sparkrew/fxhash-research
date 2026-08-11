function setup() {
    Math.random = fxrand;
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
  createCanvas(windowWidth,windowHeight);

  a = 100

  seed = int(random(10000000))
  console.log(seed)
  noiseSeed(seed)
  randomSeed(seed)
  pixelDensity(10)
  // blendMode(ADD)

  // pixelDensity(10)
  
  d = random(100000)
}

function draw() {
  background(0);
  noStroke()
  n = 16
  for (var i = 0; i < windowWidth/n; i++) {
    for (var j = 0; j < windowHeight/n; j++) {
      let d1 = 100
      let d2 = 100
      let d3 = 1

      let xn = noise(i/d1,j/d1)
      let yn = noise((i+1)/d1,(j+2)/d1)

      let x = i + xn/d2
      let y = j + yn/d2

      let c = int(a*noise(xn/d3,yn/d3)) + d
      
      console.log(c)
      randomSeed(c)
      fill(rc())
      square(i*n,j*n,n)
    }
  }

  noLoop()
}

function rc(){
  return color(random(255),random(255),random(255))
}
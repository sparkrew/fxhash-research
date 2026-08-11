var seed;
var x = 0
var a = 0
var t = 0

function setup() {
  // vars
  randomSeed(fxrand() * 10e12 || 123);
function rand(max, min = 0) {
  return Math.floor(random(max - min)) + min;
}
  createCanvas(windowWidth, windowHeight);
  
  seed = random(10000000)
  // seed = 7737224.261549229
  noiseSeed(seed)
  console.log(seed)
    
  rectMode(CENTER);
  blendMode(DIFFERENCE)
  pixelDensity(1)
    seed = int(random(10000000));
  randomSeed(seed);
  noiseSeed(seed);
}

function draw() {
  translate(windowWidth/2,windowHeight/2)

  rotate(a)
  a += PI/10
  
  background(0);
  
  fill(rc())
  
  mid = 0
  end = 200
  
  square(mid,mid,x)
  square(-end+x,mid,x)
  square(end-x,mid,x)
  
  circle(mid,end-x,x)
  circle(mid,-end+x,x)
  
  square(end-x,end-x,x)
  square(-end+x,end-x,x)
  square(end-x,-end+x,x)
  square(-end+x,-end+x,x)
  
  x += random(20,200)
  
  if (x > random(500,600)) {
    noLoop()
  }
  // noLoop()
  t += 0.01
  frameRate(random(5,25))
  
}

function rc() {
  r = noise(t)*55 + 100
  g = noise(t + 100)*55 + 100
  b = noise(t + 150)*55 + 100

  
  return color(random(200,255),random(200,255),random(200,255))
}

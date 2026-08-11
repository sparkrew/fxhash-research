function setup() {
  // vars
  randomSeed(fxrand() * 10e12 || 123);
function rand(max, min = 0) {
  return Math.floor(random(max - min)) + min;
}
  createCanvas(windowWidth, windowHeight);
  
  seed = int(random(10000000))
  console.log(seed)
  noiseSeed(seed)
  randomSeed(seed)
  pixelDensity(10)  
  
  blendMode(ADD)
}

function draw() {
  fill(random(255),random(255),random(255));
  background(random(10),random(10),random(255));
  
  sqa(windowWidth/random(1.5,6),windowHeight/random(1.5,6),random(150,300),random(.2,3))
  noLoop()
}

function sqa(x,y,r,l) {
  if (l > 5) {
    return
  }
  stroke(rc())
  square(x,y,r)
  
    if (l > 2) {
      sqa(x+(r/2),y-r,r/random(1.5,10),l+1)
      sqa(x-r,y+(r/2),r/random(1.5,10),l+1)
    }

  sqa(x+r,y+(r/2),r/random(1.5,3),l+1)
  sqa(x+(r/2),y+r,r/random(1.5,3),l+1)
}
  
function rc(){
  return color(random(255),random(255),random(255))
}
  
function keyPressed() {
  if (keyCode === 83) { // if "s" is pressed
    saveCanvas(seed + ".jpg");
  }
}

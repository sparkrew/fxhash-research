function setup() {
  // vars
  randomSeed(fxrand() * 10e12 || 123);
function rand(max, min = 0) {
  return Math.floor(random(max - min)) + min;
}
  createCanvas(windowWidth,windowHeight);
  blendMode(ADD)

  seed = random(1000000)
  //seed = 992563
  console.log(seed)
  randomSeed(seed)
  
  frame = random(3,10)
  pixelDensity(3)
  
}

function draw() {
  background(random(0,70),random(0,50),random(0,100));
  translate(0,0)
  stroke(255)
  for (var j = 0; j < 80; j++) {
    stroke(rc())
    push()
    translate(random(windowWidth), random(windowHeight))
    rotate(random(2*PI))
    noFill()
    for (var i = 0; i < 30; i++) {
      square(random(1,5)*i,2*i,2*i)
    }
    for (var i = 0; i < 30; i++) {
      let s = 60-(2*(i))
      square(2*(i+random(50,60))-s,2*(i+60)-s,s)
    }
    pop()
  }
  noLoop()
  
}

function rc() {
  return color(random(255),random(255),random(255)/2)
}

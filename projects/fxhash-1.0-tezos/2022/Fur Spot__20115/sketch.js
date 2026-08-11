
function setup() {
  
  Math.random = fxrand
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
  createCanvas(windowWidth, windowHeight);
  
  seed = int(random(10000000))
  // seed = 4010216
  //seed = 9209264
  console.log(seed)
  noiseSeed(seed)
  randomSeed(seed)
  pixelDensity(1)
  
  w = 20
  rows = random(1000)/w
  cols = random(1000)/w
  grid = {}
  
  for (var i = 0; i < rows * w; i++) {
    grid[i] = {}
  }
  
  blendMode(ADD)
  rectMode(CENTER)
}

function draw() {  
  background(0);  
  strokeWeight(1)
  
  translate(windowWidth/2,windowHeight/2)
  
  noFill()
  
  stroke(rc())
  let d = 50
  
  let curveL = 2000;
  let curves = 2000;
  // strokeWeight(10)

  console.log(grid[10])
  for (var j = 0; j < curves; j++) {
    let x = random(-200,500)
    let y = random(-200,500)
    stroke(nc(x,y))
    beginShape()

    for (i = 0; i < curveL; i++) {
      let i_ = (Math.round(x/w))
      let j_ = (Math.round(y/w))

      let x_r = i_ * w
      let y_r = j_ * w
      
      if (sqrt(x_r * x_r + y_r * y_r) >= 300) {
        break;
      }
      
      vertex(x,y)

      let a = noise(i_/d, j_/d) * PI * 2
      
      let x_vel = cos(a)
      let y_vel = sin(a)
        
      x += x_vel * 50
      y += y_vel * 50
    }

    endShape()
  }
  
  noLoop()
}

function keyPressed() {
  if (keyCode === 83) { // if "s" is pressed
    saveCanvas("favicon.ico");
  }
}

function rc(){
  return color(random(255),random(255),random(255))
}

function nc(i,j) {
  i = i/200
  j = j/200
  return color(255*noise(i,j),255*noise(i+1,j+1),255*noise(i+2,j+2))
}

function getColor(x,y){
  try {
    x = Math.round(x) * (400/3300)
    y = Math.round(y) * (400/3300)
    let index = (x + y * img.width)*4
    let r = img.pixels[index]
    let g = img.pixels[index + 1]
    let b = img.pixels[index + 2]

    return color(r,g,b);
  } catch (e) {
    return color(0,0,0)
  }
}
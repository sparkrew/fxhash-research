let pal = ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900","#fe4365", "#fc9d9a", "#f9cdad", "#c8c8a9", "#83af9b","#ecd078", "#d95b43", "#c02942", "#542437", "#53777a","#556270", "#4ecdc4", "#c7f464", "#ff6b6b", "#c44d58","#774f38", "#e08e79", "#f1d4af", "#ece5ce", "#c5e0dc","#e8ddcb", "#cdb380", "#036564", "#033649", "#031634","#490a3d", "#bd1550", "#e97f02", "#f8ca00", "#8a9b0f"]

function setup() {
  createCanvas(800, 800);
  
seed = int(fxrand() * 987654321);
  randomSeed(seed);
  noiseSeed(seed);
  blendMode(ADD)
}

function draw() {
  background(0);
  strokeWeight(10)
  stroke(10)
  w = 5
  h = 20
  for (var i = 0; i < 800/w; i++) {
    for (var j = 0; j < 800/h; j++) {
      
      if (i%2 === 0) {
        if (j%2 === 0) {
          fill(0)
        } else {
          fill(rc())
        }
      } else {
        if (j%2 !== 0) {
          fill(0)
        } else {
          fill(rc())
        }
      }
      
      rect(i*w,j*h,w,h)
    }
  }
  
  noLoop()
}

function rc(){
  return color(random(pal))
}
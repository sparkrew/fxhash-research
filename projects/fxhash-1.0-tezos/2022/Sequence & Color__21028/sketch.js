let xOff = 0
let yOff = 0
let size = 10
let life = 0
let seed = 10
let maxSize = 10
let colors = [
  [
"#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900","#fe4365", "#fc9d9a", "#f9cdad", "#c8c8a9", "#83af9b","#ecd078", "#d95b43", "#c02942", "#542437", "#53777a","#556270", "#4ecdc4", "#c7f464", "#ff6b6b", "#c44d58","#774f38", "#e08e79", "#f1d4af", "#ece5ce", "#c5e0dc","#e8ddcb", "#cdb380", "#036564", "#033649", "#031634","#490a3d", "#bd1550", "#e97f02", "#f8ca00", "#8a9b0f"
  ],
  [
"#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900","#fe4365", "#fc9d9a", "#f9cdad", "#c8c8a9", "#83af9b","#ecd078", "#d95b43", "#c02942", "#542437", "#53777a","#556270", "#4ecdc4", "#c7f464", "#ff6b6b", "#c44d58","#774f38", "#e08e79", "#f1d4af", "#ece5ce", "#c5e0dc","#e8ddcb", "#cdb380", "#036564", "#033649", "#031634","#490a3d", "#bd1550", "#e97f02", "#f8ca00", "#8a9b0f"
  ],
  [
"#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900","#fe4365", "#fc9d9a", "#f9cdad", "#c8c8a9", "#83af9b","#ecd078", "#d95b43", "#c02942", "#542437", "#53777a","#556270", "#4ecdc4", "#c7f464", "#ff6b6b", "#c44d58","#774f38", "#e08e79", "#f1d4af", "#ece5ce", "#c5e0dc","#e8ddcb", "#cdb380", "#036564", "#033649", "#031634","#490a3d", "#bd1550", "#e97f02", "#f8ca00", "#8a9b0f"
  ],
]
let palette = colors[0]

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(250)
}

function draw() {
    Math.random = fxrand
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
  noiseSeed(seed)
  let x = map(noise(xOff), 0, 1, 0, width)
  let y = map(noise(yOff), 0, 1, 0, height)
  let nSize = map(noise(yOff), 0, 1, 0, maxSize)
  let color = random(palette)

  if (life < 100) {
    noStroke()
    fill(color)
    ellipse(x, y, nSize)
  } else {
    life = 0
    seed = random(200)
    palette = random(colors)
    maxSize = random(40)
  }

  life++

  xOff += 0.012
  yOff += 0.025
}

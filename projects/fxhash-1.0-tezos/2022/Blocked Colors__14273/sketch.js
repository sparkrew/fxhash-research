let colors = [
  [245,50,90], //Vermillion
  [235,70,30], //Traffic Red
  [255,100,50], //Burnt Orange
  [250,145,15], //Orange
  [240,200,100], //Pale Yellow
  [255,205,0], //Yellow
  [255,150,150], //Brightish Pink
  [255,175,222], //Pink
  [40,120,60], //Dark Green
  [80,170,30], //Green
  [120,170,255], //Light Blue
  [60,90,225], //Blue
  [180,80,180], //Vivid Purple
  [130,80,130] //Purple
]
let greyscales = [
  [30,40,70], //dark blue
  [200,235,200], //acid green
  [245,230,235], //pink white
  [222,222,222], //bg
  [80,80,80], //dark
]
function setup() {
  noStroke()
  pixelDensity(2)
  let rand = []
  createCanvas(440, 440);
  background(222)
  let grid = [44, 88, 132, 176, 220, 264, 308]
  for (let i = 0; i<20;i++) {
    let int = floor(14*fxrand())
    let col = colors[int]
    let x =  floor(7*fxrand())
    let y =  floor(7*fxrand())
    fill(col)
    rect(grid[x],grid[y],100,100)
  }
  fill(222)
  rect(396,0,45,440)
  rect(0,396,440,45)
  filter(BLUR,20)
  for (let i = 0; i<5;i++) {
    let int = floor(5*fxrand())
    let col = greyscales[int]
    let x =  floor(7*fxrand())
    let y =  floor(7*fxrand())
    fill(col)
    rect(-6+grid[x],-6+grid[y],100,100)
  }
  for (let i = 0; i<20;i++) {
    let int = floor(14*fxrand())
    let col = colors[int]
    let x =  floor(7*fxrand())
    let y =  floor(7*fxrand())
    fill(col)
    rect(-6+grid[x],-6+grid[y],100,100)
  }
}

function draw() {
}
// canvas variables
let canvasWidth
let canvasHeight

if (window.innerWidth >= window.innerHeight) {
  canvasWidth = window.innerHeight
  canvasHeight = window.innerHeight
} else {
  canvasWidth = window.innerWidth
  canvasHeight = window.innerWidth
}

let debug = false
let padding = 0
let printAreaWidth = 0
let printAreaHeight = 0
let strokeColor = "#fff"
let gridSize = 500
let maxLines = 0
let sunOffset = 0
let strokeSize = 1
let showGrid = true
let showEndLines = false
let rows = 0
let cols = 0
let xMargin = 0
let yMargin = 0
let blocksArr = []
let altTime = 0
let altContext = null
let textureOverlay = null
let withTexture = true
let hasBg = true
let palette = [
  [["#1F2883", "#E3B963"], ["#F9EACD"]],
  [["#727FFC", "#E3B963"], ["#F9EACD"]],
  [["#1F2883", "#ffb5a7"], ["#feeae7"]],
  [["#1F2883", "#F8F1A8"], ["#FFFCDE"]],
  [["#333", "#E3B963"], ["#FFF2D9"]],
  [["#333", "#ffb5a7"], ["#fde7e3"]],
  [["#333", "#84BA6E"], ["#FFFCDE"]],
  [["#333", "#727FFC"], ["#efefef"]],
  [["#333", "#F8F1A8"], ["#FFFCDE"]],
  [["#26670B", "#EACE97"], ["#f2f0df"]],
  [["#EA5A69", "#EACE97"], ["#f2f0df"]],
  [["#ffb5a7", "#26670B"], ["#f2f0df"]],
  [["#FFE7A2", "#0012C5"], ["#FFFCDE"]],
  [["#FFFDEF", "#1F2883"], ["#f2f0df"]],
  [["#FFE7A2", "#C28952"], ["#f2f0df"]],
  [["#4e37b2", "#E3B963"], ["#f2f0df"]],
  [["#E3B963", "#995DAF"], ["#f2f0df"]],
  [["#26670B", "#E3B963"], ["#f2f0df"]],
  [["#cfcfc6", "#C28952"], ["#f2f0df"]],
  [["#efefd0", "#ff6b35"], ["#f2f0df"]],
  [["#efefd0", "#566e3d"], ["#f2f0df"]],
  [["#ff8c42", "#566e3d"], ["#fbe2d2"]],
  [["#f69332", "#5aabbc"], ["#FFFCDE"]],
]

let t
let nrFrames = 150
let playing = false

function preload() {
  textureOverlay = loadImage("texture-00.jpg")
}

function setup() {
  createCanvas(canvasWidth, canvasHeight)
  pixelDensity(2)
  angleMode(DEGREES)
  rectMode(CENTER)
  noLoop()

  var seed = fxrand() * 99999 //round(random(9999))
  randomSeed(seed)

  randpalette = palette[round(random(palette.length - 1))]
  strokeColor = randpalette[0][0]

  gridSize = width / random(3, 15)
  maxLines = round(90 / random(6, 10))
  strokeSize = round(random(1, 2))
  padding = width / 10
  printAreaWidth = width - padding * 2
  printAreaHeight = height - padding * 2
  rows = round(printAreaHeight / gridSize)
  cols = round(printAreaWidth / gridSize)
  xMargin = (width - cols * gridSize) / 2
  yMargin = (height - rows * gridSize) / 2
  hasBg = true

  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      let x = c * gridSize
      let y = r * gridSize

      blocksArr.push(
        new DrawRandomBlock(
          x,
          y,
          gridSize,
          maxLines,
          strokeSize,
          round(random(0, 3)),
          randpalette,
          t
        )
      )
    }
  }

  blocksArr.forEach((block) => {
    block.setup(t)
  })
}

function draw() {
  t = map(frameCount, 0, nrFrames, 0, 1) % 1
  background(randpalette[1])
  push()
  translate(xMargin, yMargin)
  blocksArr.forEach((block) => {
    block.run(t)
  })
  pop()

  stroke(strokeColor)
  strokeWeight(2)
  noFill()
  rect(width / 2, height / 2, cols * gridSize, rows * gridSize)

  if (withTexture) {
    push()
    addTexture(textureOverlay)
    pop()
  }
}

function DrawRandomBlock(
  xpos,
  ypos,
  gridSize,
  maxLines,
  strokeW,
  position,
  palette,
  t
) {
  this.blockType = random() > 0.9 ? 1 : 0
  this.hasBackground = hasBg //true //s.random() > 0.2 ? true : false
  this.options = [
    xpos,
    ypos,
    gridSize,
    maxLines,
    strokeW,
    position,
    palette,
    this.hasBackground,
    t,
  ]

  if (this.blockType === 0) {
    return new DrawSun(...this.options)
  } else {
    return new DrawStairs(...this.options)
  }
}

function DrawStairs(
  xpos,
  ypos,
  gridSize,
  maxLines,
  strokeW,
  position,
  palette,
  bg,
  t
) {
  this.xpos = xpos
  this.ypos = ypos
  this.gridSize = gridSize
  this.maxLines = maxLines
  this.strokeWeight = strokeW
  this.position = position
  this.palette = palette[0]
  this.strokeColor = this.palette[round(random(this.palette.length - 1))]
  this.hasBg = bg
  this.bgColor = this.palette.filter((e) => e !== this.strokeColor)
  this.lines = []

  this.setup = (t) => {
    for (var i = 0; i < this.maxLines; i++) {
      this.lines.push(
        new drawStairsLine(
          this.gridSize,
          i,
          this.maxLines,
          this.offset,
          this.strokeWeight,
          this.position,
          this.strokeColor,
          t
        )
      )
    }
  }

  this.run = (t) => {
    push()
    translate(this.xpos, this.ypos)
    translate(gridSize / 2, gridSize / 2)

    stroke(this.strokeColor)
    strokeWeight(strokeSize)

    if (this.hasBg) {
      fill(this.bgColor)
      rect(0, 0, gridSize, gridSize)
    } else {
      noFill()
    }

    this.lines.forEach((line) => {
      line.update(t)
      line.draw(t)
    })

    if (showGrid) {
      push()
      noFill()
      rect(0, 0, gridSize, gridSize)
      pop()
    }

    pop()
  }
}

function drawStairsLine(
  gridsize,
  index,
  maxLines,
  offset,
  strokeW,
  pos,
  palette,
  t
) {
  this.pos = pos
  this.index = index
  this.maxLines = maxLines
  this.minAngle = this.pos * 90
  this.maxAngle = (this.pos + 1) * 90
  this.offset = offset
  this.gridSize = gridsize
  this.posInc = (this.gridSize / this.maxLines) * this.index
  this.strokeWeight = strokeW
  this.strokeColor = palette
  this.angInc = 0

  this.update = (t) => {
    if (this.posInc >= this.gridSize) {
      this.posInc = 0
    }

    this.posInc += this.gridSize / nrFrames
  }

  this.draw = (t) => {
    push()
    noFill()
    if (this.pos == 1) {
      rotate(90)
    } else if (this.pos == 2) {
      rotate(180)
    } else if (this.pos == 3) {
      rotate(270)
    }
    strokeWeight(this.strokeWeight)
    translate(-this.gridSize / 2, -this.gridSize / 2)

    stroke(this.strokeColor)

    var x1 = this.posInc
    var y1 = 0
    var x2 = this.posInc
    var y2 = this.gridSize

    line(x1, y1, x2, y2)

    pop()
  }
}

function DrawSun(
  xpos,
  ypos,
  gridSize,
  maxLines,
  strokeW,
  position,
  palette,
  bg,
  t
) {
  this.x = xpos
  this.y = ypos
  this.pos = position
  this.a = 0
  this.angInc = 90
  this.nrLines = maxLines
  this.offset = 0
  this.lines = []
  this.palette = palette[0]
  this.strokeColor = this.palette[round(random(this.palette.length - 1))]
  this.hasBg = bg
  this.bgColor = this.palette.filter((e) => e !== this.strokeColor)
  this.rayOsc = random() > 0.5 ? true : false

  this.setup = (t) => {
    for (var i = 0; i < this.nrLines; i++) {
      this.lines.push(
        new drawSunLine(
          gridSize,
          i,
          this.nrLines,
          this.offset,
          strokeW,
          this.pos,
          this.strokeColor,
          this.rayOsc,
          t
        )
      )
    }
  }

  this.run = (t) => {
    push()
    translate(this.x, this.y)
    translate(gridSize / 2, gridSize / 2)

    stroke(this.strokeColor)
    strokeWeight(strokeW)

    if (this.hasBg) {
      fill(this.bgColor)
      rect(0, 0, gridSize, gridSize)
    } else {
      noFill()
    }

    this.lines.forEach((line) => {
      line.update(t)
      line.draw(t)
    })

    if (showGrid) {
      push()
      noFill()
      rect(0, 0, gridSize, gridSize)
      pop()
    }

    if (showEndLines) {
      push()
      translate(-gridSize / 2, -gridSize / 2)
      if (this.pos == 0) {
        line(0, sunOffset, 0, gridSize)
      } else if (this.pos == 1) {
        line(gridSize, sunOffset, gridSize, gridSize)
      } else if (this.pos == 2) {
        line(0, gridSize, gridSize - sunOffset, gridSize)
      } else if (this.pos == 3) {
        line(0, 0, 0, gridSize - sunOffset)
      }
      pop()
    }

    pop()
  }
}

function drawSunLine(
  gridsize,
  index,
  maxLines,
  offset,
  strokeW,
  pos,
  palette,
  rayOsc,
  t
) {
  this.pos = pos
  this.index = index
  this.maxLines = maxLines
  this.minAngle = this.pos * 90
  this.maxAngle = (this.pos + 1) * 90
  this.angle = this.minAngle + (90 / this.maxLines) * this.index
  this.offset = offset
  this.gridsize = gridsize
  this.strokeWeight = strokeW
  this.angInc = 0
  this.palette = palette
  this.rayOsc = rayOsc

  this.update = (t) => {
    if (this.angle + this.angInc >= this.maxAngle) {
      this.angInc -= this.maxAngle - this.minAngle
    }

    this.angInc += 90 / nrFrames
  }

  this.draw = (t) => {
    push()
    noFill()
    strokeWeight(this.strokeWeight)
    translate(-this.gridsize / 2, -this.gridsize / 2)

    if (this.pos == 1) {
      translate(this.gridsize, 0)
    } else if (this.pos == 2) {
      translate(this.gridsize, this.gridsize)
    } else if (this.pos == 3) {
      translate(0, this.gridsize)
    }

    stroke(this.palette)

    let x1 = cos(this.angle + this.angInc) * this.offset
    let y1 = sin(this.angle + this.angInc) * this.offset
    let x2 = cos(this.angle + this.angInc) * this.gridsize
    let y2 = sin(this.angle + this.angInc) * this.gridsize

    line(x1, y1, x2, y2)
    pop()
  }
}

function ease(p, g) {
  if (p < 0.5) return 0.5 * pow(2 * p, g)
  else return 1 - 0.5 * pow(2 * (1 - p), g)
}

function addTexture(tx) {
  let w = tx.width
  let h = tx.height

  let ts = min(w, h) * 0.75
  let sx = random(w - ts)
  let sy = random(h - ts)
  let sw = ts
  let sh = ts

  let dx = 0
  let dy = 0
  let dw = width
  let dh = height

  // BURN, DIFFERENCE
  // blendMode(OVERLAY)
  blendMode(ADD)
  image(tx, dx, dy, dw, dh, sx, sy, sw, sh)
}

function keyPressed() {
  if (key == "s") exportCanvas("PNG")
  if (key == "l") {
    playing ? noLoop() : loop()
    playing = !playing
  }
}

function exportCanvas(format) {
  let timestamp =
    year() +
    nf(month(), 2) +
    nf(day(), 2) +
    "-" +
    nf(hour(), 2) +
    nf(minute(), 2) +
    nf(second(), 2)

  saveCanvas(canvas, timestamp, "png")
}

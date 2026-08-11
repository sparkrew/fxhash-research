const rand = (i = 1, j = 0) =>
  Array.isArray(i) ? i[randInt(i.length)] : fxrand() * (j - i) + i
const randInt = (i = 1, j = 0) => Math.floor(rand(i, j))
const wRand = (weights) => {
  var i
  for (i = 0; i < weights.length; i++) weights[i] += weights[i - 1] || 0
  var random = rand() * weights[weights.length - 1]
  for (i = 0; i < weights.length; i++) if (weights[i] > random) break
  return i
}
let seed = fxrand() * 989134521188571

let canvasSize = Math.min(window.innerWidth, window.innerHeight)

let canvasRatio = 1
let ratio = canvasSize / 800

let field
let fieldResolution = rand([0, 4, 10, 15, 30])

let contourFinderPrecision = rand([0.01, 0.03, 0.1])

let sw = rand() ** 3 * 8 + 0.15
let fr = fieldResolution | 100
let linesQty = 60 / (sw + 0.8)

let circleDiam = 4 * (sw + 1)
let circleFrequency = rand([0, 0.1, 0.25, 0.5])
let grad = rand(["vertical", "horizontal"])
let gradFreq = Math.floor(rand() * 4 + 1)
let softBorders = rand(["", "vertical", "horizontal"])

let fieldPattern = rand([
  "noise",
  "circle",
  "verticalSine",
  "horizontalSine",
  "spiral",
])

let fieldSteps = rand([360, 2, 3, 4, 5, 6])
if (fieldSteps == 360) contourFinderPrecision = rand([0.1, 0.2])

field = createField(
  fieldSteps, // steps
  rand(2, 6), // frequency
  rand(1, 2), // amplitude
  rand(0.2, 5) // ratio
)

console.log(fieldPattern)

let agents = []

let dash =
  rand() < 0.6
    ? [
        [80, 20],
        [50, 20],
        [20, 10],
        [50, 10],
      ][Math.floor(rand() * 4)].map((x) => x * ratio)
    : [0]

let palettes = []
let palettesNames = []
let palettesWeights = []

palettes.push(["003049", "d62828", "f77f00", "fcbf49", "eae2b7"])
palettesNames.push("Coral")
palettesWeights.push(1)
palettes.push(["111111", "540d6e", "ee4266", "ffd23f", "3bceac"])
palettesNames.push("Candy")
palettesWeights.push(1)
palettes.push(["2d304b", "f4f1de", "e07a5f", "81b29a", "f2cc8f"])
palettesNames.push("Copper")
palettesWeights.push(1)
palettes.push(["0c0f0a", "ff206e", "fbff12", "41ead4", "ffffff"])
palettesNames.push("Fluorescent")
palettesWeights.push(1)
palettes.push(["191919", "f15025", "ffffff", "e6e8e6", "ced0ce"])
palettesNames.push("Tangerine")
palettesWeights.push(1)
palettes.push(["080708", "3772ff", "df2935", "fdca40", "e6e8e6"])
palettesNames.push("Arcade")
palettesWeights.push(1)
palettes.push(["0b0014", "773344", "e3b5a4", "f5e9e2", "d44d5c"])
palettesNames.push("Salmon")
palettesWeights.push(1)
palettes.push(["230c33", "81f4e1", "5cc8ff", "caa8f5", "592e83"])
palettesNames.push("Lavender")
palettesWeights.push(1)
palettes.push(["000", "f00", "0f0", "00f"])
palettesNames.push("RGB")
palettesWeights.push(0.2)
palettes.push(["fff", "000", "555"])
palettesNames.push("Black & White")
palettesWeights.push(1)
palettes.push(["000", "f00", "0ff"])
palettesNames.push("Anaglyphic")
palettesWeights.push(0.2)

let paletteIndex = wRand(palettesWeights)
let palette = palettes[paletteIndex].map((x) => "#" + x)
let paletteName = palettesNames[paletteIndex]

let offsetAngle = rand() < 0.3 ? rand() * 2 * 3.1415927 : 0
let randomOffset = rand() < 0.3 ? rand([0.02, 0.05]) : 0
let randomPosOffset = rand() < 0.3 ? rand() * 0.5 : 0

let bgColor

let features = {
  Palette: paletteName,
}

let previewRendered = false
let saveRes = 2000

console.table(features)

window.$fxhashFeatures = features

function windowResized() {
  resetRandom()
  canvasSize = min(window.innerWidth, window.innerHeight)
  ratio = canvasSize / 800
  resizeCanvas(canvasSize, canvasSize)
}

function setup() {
  resetRandom()
  createCanvas(canvasSize, canvasSize * canvasRatio)
  bgColor = palette.shift()
  palette = shuffle(palette)

  noLoop()
  strokeCap(SQUARE)
}

function draw() {
  if (paletteName == "Anaglyphic" || paletteName == "RGB") blendMode(ADD)
  sw = 1000 / linesQty ** 1.9
  strokeWeight(sw * ratio)
  resetRandom()
  setLineDash(...dash.map((x) => x * ratio))
  translate(width / 2, height / 2)
  scale(0.8)
  translate(-width / 2, -height / 2)

  background(bgColor)

  for (let x = 0; x < linesQty; x++) {
    for (let y = 0; y < linesQty; y++) {
      let c =
        grad == "vertical"
          ? lerpPalette(palette, (gradFreq * y) / linesQty, true)
          : lerpPalette(palette, (gradFreq * x) / linesQty, true)
      stroke(c)
      fill(c)
      if (softBorders == "vertical") {
        strokeWeight(
          (1 - (cos((y * TWO_PI) / linesQty) * 0.5 + 0.5) + 0.1) *
            sw *
            2 *
            ratio
        )
      } else if (softBorders == "horizontal") {
        strokeWeight(
          (1 - (cos((x * TWO_PI) / linesQty) * 0.5 + 0.5) + 0.1) *
            sw *
            2 *
            ratio
        )
      }
      nLine(
        ((x + random(-randomPosOffset, randomPosOffset)) * width) / linesQty,
        ((y + random(-randomPosOffset, randomPosOffset)) * height) / linesQty
      )
    }
  }

  resetMatrix()

  if (!previewRendered) {
    fxpreview()
    previewRendered = true
  }
}

function resetRandom() {
  randomSeed(seed)
  noiseSeed(seed)
}

function createField(steps, freq = 1, amp = 1, ratio = 1) {
  return function (x, y) {
    let out = 0
    if (fieldResolution) {
      x = round(x * fieldResolution) / fieldResolution
      y = round(y * fieldResolution) / fieldResolution
    }

    if (fieldPattern == "noise") {
      let n = noise(freq * x * ratio, freq * y)
      out = constrain(map(n, 0, 1, -(amp - 1) / 2, 1 + (amp - 1) / 2), 0, 1)
    } else if (fieldPattern == "circle") {
      out =
        round(dist(1, 1 * canvasRatio, 2 * x, 2 * y * canvasRatio) * steps) /
        steps
    } else if (fieldPattern == "horizontalSine") {
      // Sine Horizontal effect
      out = round((sin(x * TWO_PI) * 0.5 + 0.5 + y * 2) * (steps - 1)) / steps
    } else if (fieldPattern == "verticalSine") {
      // Sine Vertical effect
      out = round((sin(y * TWO_PI) * 0.5 + 0.5 + x * 2) * (steps - 1)) / steps
    } else if (fieldPattern == "spiral") {
      // Spiral
      let arms = 2
      let curvature = 2
      let r = dist(0.5, 0.5, x, y)
      let theta = r == 0 ? 0 : atan((y - 0.5) / (x - 0.5))
      out = fract((arms * theta) / 2 / PI + arms * curvature * pow(r, 0.4))
    }

    return round(out * steps) / steps
  }
}

function nLine(x, y) {
  let f = field(x / width, y / height)
  let a = PI * f + offsetAngle + random(-randomOffset, randomOffset)
  let dx = contourFinderPrecision * width * cos(a)
  let dy = contourFinderPrecision * width * sin(a)
  let [x1, y1] = findLimit(x, y, f, dx, dy)
  let [x2, y2] = findLimit(x, y, f, -dx, -dy)
  line(x1, y1, x2, y2)
  if (random() < circleFrequency) {
    push()
    noStroke()
    if (random() < 0.5) {
      circle(x1, y1, circleDiam * ratio * random(0.2, 1.5))
    } else {
      circle(x2, y2, circleDiam * ratio * random(0.2, 1.5))
    }
    pop()
  }
}

function findLimit(x, y, f, dx, dy, maxStack = 100) {
  // delta < 1 means we found the limit point
  if (maxStack-- <= 0 || dx * dx + dy * dy < 1) {
    return [x, y]
  }
  x += dx
  y += dy
  if (x > width || x < 0 || y > height || y < 0) {
    ;[x, y] = findLimit(x - dx, y - dy, f, dx / 2, dy / 2, maxStack)
  } else {
    let n = field(x / width, y / height)
    if (f == n) {
      ;[x, y] = findLimit(x, y, f, dx, dy, maxStack)
    } else {
      ;[x, y] = findLimit(x, y, n, -dx / 2, -dy / 2, maxStack)
    }
  }
  return [x, y]
}

function frame(size, col) {
  push()
  stroke(col)
  noFill()
  strokeWeight(2 * size)
  rect(0, 0, width, height)
  pop()
}

function lerpPalette(palette, amount, loopColors) {
  // If loopColors == true, copy the first color to the last position in the array
  if (loopColors) palette = [...palette, palette[0]]
  // Find the array index corresponding to the amount
  let i = fract(amount) * (palette.length - 1)
  // Lerp the corresponding color in the array
  let c = lerpColor(
    color(palette[floor(i)]),
    color(palette[floor((i + 1) % palette.length)]),
    fract(i)
  )
  return c
}

function setLineDash(...list) {
  drawingContext.setLineDash(list)
}

function keyPressed() {
  if (keyCode == 83) {
    oldCanvasSize = canvasSize
    canvasSize = saveRes
    ratio = canvasSize / 800
    resizeCanvas(canvasSize, canvasSize)
    save(`Pandora-${canvasSize}x${canvasSize}.png`)
    canvasSize = oldCanvasSize
    ratio = canvasSize / 800
    resizeCanvas(canvasSize, canvasSize)
    saveRes += 2000
    if (saveRes > 8000) saveRes = 2000
  }
}

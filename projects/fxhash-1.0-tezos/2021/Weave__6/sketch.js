let canvasWidth = window.innerWidth
let canvasHeight = window.innerHeight
let padding = canvasWidth / 8
let printArea = canvasWidth - padding - padding
var maxHeight = window.innerHeight * 0.85
var maxPointsPerLine = 100
var xOffset = 0
var bgColor = "#f2f0df"

var palette = [
  ["#222222", "Black"],
  ["#4a3596", "Purple"],
  ["#b56a1f", "Brown Orange"],
  ["#1a4166", "Indigo"],
  ["#c75a5a", "Red"],
  ["#9e8787", "Cinereous"],
  ["#9174a3", "Faded Purple"],
  ["#c4a036", "Gold"],
  ["#77773d", "Olive"],
  ["#2c5930", "Green"],
  ["#e0afa6", "Faded Pink"],
]

var debug = false
var enableNoise = false

var address = fxhash.toLowerCase()
var seedsArr = []
var seeds = []
var totalSeeds = 30
var seedLength = Math.floor(address.length / totalSeeds)
var seedCeilValue = seedLength * 25

var textureOverlay
var paletteSeed = Math.floor(fxrand() * (palette.length - 1))

seedsArr = generateSeedsFromHash(address, seedLength)
seedsArr.forEach((seed, i) => {
  return seeds.push(mapRange(seedsArr[i], 0, seedCeilValue, 0, 100))
})

var maxVertLinesSeed = Math.round(
  mapRange(seeds[seeds.length - 4], 0, 100, 8, 15)
)
var maxLinesPerGroupSeed = Math.round(
  mapRange(seeds[seeds.length - 5], 0, 100, 8, 15)
)
var maxDensitySeed = mapRange(seeds[seeds.length - 6], 0, 100, 7, 15)

var maxWaveFreqSeed = mapRange(seeds[seeds.length - 7], 0, 100, 1.8, 20)

var maxWaveAmpSeed =
  maxDensitySeed + mapRange(seeds[seeds.length - 8], 0, 100, 30, 50)

var maxSpacingSeed =
  -(maxWaveAmpSeed * 150) / (maxDensitySeed * maxVertLinesSeed) -
  (maxWaveAmpSeed - maxDensitySeed) * 2

window.$fxhashFeatures = {
  Color: palette[paletteSeed][1],
  "Line Groups": maxVertLinesSeed,
  "Lines Per Group": maxLinesPerGroupSeed,
  Density: getFeatures(maxDensitySeed, 7, 15),
  Frequency: getFeatures(maxWaveFreqSeed, 1.8, 20),
  Amplitude: getFeatures(maxWaveAmpSeed, 37, 65),
}

console.log("hash", fxhash)
console.log("fxhashFeatures", window.$fxhashFeatures)

function preload() {
  textureOverlay = loadImage("texture-00.jpg")
}

function setup() {
  CANVAS = createCanvas(canvasWidth, canvasHeight)
  pixelDensity(2)
  randomSeed(fxrand())

  // console.log("hash:", fxhash)
  // console.log("fxrand():", fxrand())
  // console.log("hash seeds:", seeds)
  // console.log(
  //   "maxVertLinesSeed:",
  //   maxVertLinesSeed,
  //   "\n",
  //   "maxLinesPerGroupSeed:",
  //   maxLinesPerGroupSeed,
  //   "\n",
  //   "maxDensitySeed:",
  //   maxDensitySeed,
  //   "\n",
  //   "maxWaveFreqSeed:",
  //   maxWaveFreqSeed,
  //   "\n",
  //   "maxWaveAmpSeed:",
  //   maxWaveAmpSeed,
  //   "\n",
  //   "maxSpacingSeed:",
  //   maxSpacingSeed,
  //   "\n",
  //   "paletteSeed:",
  //   paletteSeed
  // )

  noLoop()
  angleMode(DEGREES)
}

function getFeatures(value, min, max) {
  var percent = mapRange(value, min, max, 0, 1)
  if (percent < 0.2) return "Very Low"
  if (percent < 0.4) return "Low"
  if (percent < 0.6) return "Medium"
  if (percent < 0.8) return "High"
  else return "Very High"
}

function draw() {
  background(bgColor)
  noFill()
  stroke(palette[paletteSeed][0])
  strokeWeight(1)

  let spacing = maxSpacingSeed
  let groupWidth = maxWaveAmpSeed * 2
  let centerLineGroups = (groupWidth * maxVertLinesSeed) / 2
  let centerSpacingOffset = (spacing * (maxVertLinesSeed - 1)) / 2
  let vertLines = maxVertLinesSeed
  let linesPerGroup = maxLinesPerGroupSeed

  push()
  translate(
    width / 2 - centerLineGroups - centerSpacingOffset + xOffset,
    height / 2 - maxHeight / 2
  )

  for (let l = 0; l < vertLines; l++) {
    let xpos = (groupWidth + spacing) * l

    push()
    for (let i = 0; i < linesPerGroup; i++) {
      let pointsPerLine = maxPointsPerLine
      let waveFreq = maxWaveFreqSeed
      let waveAmp = maxWaveAmpSeed

      beginShape()
      for (let p = 0; p < pointsPerLine; p++) {
        // let osc = sin(p * waveFreq) * (waveAmp * (i / linesPerGroup))
        let osc = sin(p * waveFreq) * (waveAmp * (i / maxDensitySeed))
        let x = xpos + waveAmp + osc
        let y = map(p, 0, pointsPerLine, 0, maxHeight)

        curveVertex(x, y)
      }
      endShape()
    }
    pop()
  }
  pop()

  push()
  addTexture(textureOverlay)
  pop()
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight)
}

function add(accumulator, a) {
  return accumulator + a
}

function sliceIntoChunks(arr, chunkSize) {
  const res = []
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize)
    res.push(chunk)
  }
  return res
}

function generateSeedsFromHash(str, size) {
  var splitedNumArr = []

  arrPieces = str.match(new RegExp(".{1," + size + "}", "g"))

  arrPieces.forEach((item, i) => {
    var arrSplitedChars = arrPieces[i].split("")

    arrSplitedChars.forEach((char, c) => {
      var decrease = isNaN(char) ? 97 : 48 - 16
      splitedNumArr.push(arrSplitedChars[c].charCodeAt(0) - decrease)
    })
  })

  var numGroupArr = sliceIntoChunks(splitedNumArr, seedLength)

  var numSeeds = []

  numGroupArr.forEach((item, i) => {
    numSeeds.push(numGroupArr[i].reduce(add, 0))
  })

  return numSeeds
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
  blendMode(ADD)
  image(tx, dx, dy, dw, dh, sx, sy, sw, sh)
}

function keyPressed() {
  if (key == "s") exportCanvas("PNG")
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

function mapRange(value, a, b, c, d) {
  value = (value - a) / (b - a)
  return c + value * (d - c)
}

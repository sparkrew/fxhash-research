var ax, ay, as
var wx, wy, ws_x, ws_y
var px, py, ps
var t, dt, d, perturb, c
var prev_x, prev_y
var prev = []
const BUFFER_SIZE = 1000
const AMP_LIMIT = Math.pow(10, -5)
var size

var ratios = {
  // "unison":         1 / 1,
  "Octave":         2 / 1,
  "Perfect Fifth":  3 / 2,
  "Perfect Fourth": 4 / 3,
  "Major Sixth":    5 / 3,
  "Major Third":    5 / 4,
  "Minor Sixth":    8 / 5,
  "Minor Third":    6 / 5,
}

var keys = Object.keys(ratios)
var interval = keys[fxrand() * keys.length << 0]

window.$fxhashFeatures = {
  "Interval": interval,
  "Perturbation": Math.pow(10, -3.5 - fxrand()),
  "ωs.x": (fxrand() - 0.5) * 0.01,
  "ωs.y": (fxrand() - 0.5) * 0.01,
  "ϕy": Math.PI * (fxrand() - 0.5),
  "ϕs": Math.PI * (fxrand() - 0.5),
  "As": 0.05 * fxrand(),
}

var printWidth = 12
var printHeight = 12
var printDpi = 300

var renderWidth = printWidth * printDpi
var renderHeight = printHeight * printDpi
var rendering = false
var output



function setup() {
  size = Math.min(windowWidth, windowHeight)
  colorMode(HSB, 1)
  createCanvas(size, size)
  
  output = createGraphics(renderWidth, renderHeight);
  output.colorMode(HSB, 1)
  
  reset()
  smooth()
  // frameRate(1)
}


function mouseClicked() {
  // reset()
}


function reset() {
  if (!rendering) {
    c = fxrand()

    background((c + 0.33) % 1, 0.025, 0.95)
    strokeWeight(0.2 * size / 1000)
    noFill()
    
    var keys = Object.keys(ratios)
    interval = keys[fxrand() * keys.length << 0]
    
    perturbation = window.$fxhashFeatures["Perturbation"]
    // perturbation = 0
    
    wx = 1
    wy = ratios[interval] + perturbation
    ws_x = window.$fxhashFeatures["ωs.x"]
    ws_y = window.$fxhashFeatures["ωs.y"]
    // ws = 0

    px = map(0.5, 0, size, 0, PI)
    py = window.$fxhashFeatures["ϕy"]
    ps = window.$fxhashFeatures["ϕs"]
    // ps = ph
  
    console.log(window.$fxhashFeatures)

  } else {
    output.background((c + 0.33) % 1, 0.025, 0.95)
    output.strokeWeight(0.2 * size / 1000)
    output.noFill()
    output.translate(size / 2, size / 2)
  }

  t = 0
  dt = pow(10, -ratios[interval] * 0.8)
  d = pow(10, -4.6)
  
  ax = 0.35
  ay = 0.275
  as = window.$fxhashFeatures["As"]
  // as = 0
    
  prev = []
  loop()
}


function createPoint() {
  var x = ax * sin(wx * t + px) + as * sin(ws_x * t + ps)
  var y = ay * sin(wy * t + py) + as * cos(ws_y * t + ps)

  t += dt
  ax *= 1 - d
  ay *= 1 - d
  as *= 1 - d

  return createVector(x, y)
}


function draw() {
  var target = rendering ? output : this

  prev = prev.length < 3 ? [] : [prev.pop(), prev.pop(), prev.pop()].reverse()
  while (prev.length < BUFFER_SIZE) {
    prev.push(createPoint().mult(size))
  }
  
  var a = map(ax * ax + ay * ay, 0, 0.1, 0, 1) * 10
  target.stroke(c, 0.14, 0.31, a)
  
  if (!rendering) {
    translate(size / 2, size / 2)
  }
  target.beginShape()
  for (var p of prev) {
    target.curveVertex(p.x, p.y)
  }
  target.endShape()

  if (ax * ax < AMP_LIMIT && ay * ay < AMP_LIMIT && as * as < AMP_LIMIT) {
    if (rendering) {
      // var dateString = `${hour()}-${month()}-${day()} ${hour()}.${minute()}.${second()}`
      // output.save(dateString + ".png");
      output.save(fxhash + "-hires.png");
    } else {
      fxpreview()
    }
    noLoop()
  }
}

function keyTyped() {
  switch (key) {
    case 's':
      size = Math.min(renderWidth, renderHeight)
      rendering = true
      reset()
      break;
  }
}
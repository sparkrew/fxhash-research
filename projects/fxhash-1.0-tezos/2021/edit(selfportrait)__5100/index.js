randomColor = Math.floor(fxrand() * 100)
noiseScale = Math.floor(fxrand() * 50 + 50)

randomBackground = fxrand() > 0.5 ? true : false

randomDistortion = Math.floor(fxrand() * 10)
//------------------------------------------------------------------------------
randomRotateSize = Math.floor(fxrand() * 120 + 60)
randomStepSize = Math.floor(fxrand() * 2 + 1)
randomStrokeSize = Math.floor(fxrand() * 2 + 1)
randomAngleMultiplier = Math.floor(fxrand() * 8 + 2)
//------------------------------------------------------------------------------
randomCircle = Math.floor(fxrand() * 8 + 2)
//------------------------------------------------------------------------------
randomRectX = Math.floor(fxrand() * 17 + 3)
randomRectY = Math.floor(fxrand() * 17 + 3)
//------------------------------------------------------------------------------
randomDistortion = fxrand()
// print(randomDistortion)

let img
let imgName = 'self-portrait.jpg'
function preload() {
  img = loadImage(imgName)
}

function setup() {
  var distortionType = chooseDistortionType(
    randomDistortion
  )
  //------------------------------------------------------------------------------
  // set features
  window.$fxhashFeatures = applyfxhashFeatures(
    distortionType,
    randomRotateSize,
    randomStepSize,
    randomStrokeSize,
    randomAngleMultiplier,
    randomCircle,
    randomRectX,
    randomRectY
  )
  print($fxhashFeatures)
  //------------------------------------------------------------------------------
  // create big canvas
  cnv = createCanvas(windowWidth, windowHeight)
  //------------------------------------------------------------------------------
  // resize canvas according to big canvas
  resizeLogic(img)
  print(img.width, img.height)
  //------------------------------------------------------------------------------
  // determine position of image
  positionLogic(img)
  print(imgPositionX, imgPositionY)
  //------------------------------------------------------------------------------
  // set image canvas size and position
  imageCanvas = createCanvas(img.width, img.height)
  imageCanvas.position(imgPositionX, imgPositionY)
  //------------------------------------------------------------------------------
  // pointize(img)
  // circleEdit(img, randomCircle)
  // rectangleEdit(img, randomRectX, randomRectY)

  // curveEdit(
  //   img,
  //   (stepsize = randomStepSize),
  //   (strokeSize = randomStrokeSize),
  //   (rotateSize = randomRotateSize),
  //   (angleMultiplier = randomAngleMultiplier)
  // )
  applyDistortion(distortionType)
  fxpreview()
}

//------------------------------------------------------------------------------
function draw() {
  console.log('love u')
}
//------------------------------------------------------------------------------
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

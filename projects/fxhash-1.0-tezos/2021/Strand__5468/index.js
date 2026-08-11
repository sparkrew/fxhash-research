function preload() {
  img = loadImage('./download1.png')
}
function setup() {
  cnv = createCanvas(windowWidth, windowHeight)
  resizeMe(img, windowWidth, windowHeight)
  positionMe(img, windowWidth, windowHeight)
}
function draw() {
  image(img, x, y)
  fxpreview()
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function resizeMe(img, width, height) {
  if (height - img.height < width - img.width) {
    return img.resize(0, windowHeight)
  } else {
    return img.resize(windowWidth, 0)
  }
}

function positionMe(img, width, height) {
  x = (width - img.width) / 2
  y = (height - img.height) / 2
}

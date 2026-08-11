export function flipH(context) {
  context.scale(-1.0, 1.0)
}

export function flipV(context) {
  context.scale(1.0, -1.0)
}

export function imgRotate(context, img, x, y, r) {
  context.push()
  context.imageMode(context.CENTER)
  context.rectMode(context.CENTER)
  context.translate(x + img.width / 2, y + img.height / 2)
  context.rotate(r)
  context.image(img, 0, 0)
  context.pop()
}

export function imgRotatePi(context, img, x, y, mode) {
  context.push()
  context.translate(x, y)
  context.imageMode(mode === undefined ? context.CORNER : mode)
  context.rotate(context.PI)
  context.image(img, -img.width, -img.height)
  context.pop()
}

export function imgRotateHalfPi(context, img, x, y) {
  context.push()
  context.imageMode(context.CENTER)
  context.rectMode(context.CENTER)
  context.translate(x + img.width / 2, y + img.height / 2)
  context.rotate(context.HALF_PI)
  context.image(img, 0, 0)
  context.pop()
}

export function imgRotateHalfPiCc(context, img, x, y) {
  context.push()
  context.imageMode(context.CENTER)
  context.rectMode(context.CENTER)
  context.translate(x + img.width / 2, y + img.height / 2)
  context.rotate(-context.HALF_PI)
  context.image(img, 0, 0)
  context.pop()
}

export function imageFlipV(context, img, x, y) {
  context.push()
  context.translate(x, y)
  flipV(context)
  context.image(img, 0, -img.height)
  context.pop()
}

export function imageFlipH(context, img, x, y) {
  context.push()
  context.translate(x, y)
  flipH(context)
  context.image(img, -img.width, 0)
  context.pop()
}

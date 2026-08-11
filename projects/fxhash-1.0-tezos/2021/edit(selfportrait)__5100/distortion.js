//------------------------------------------------------------------------------
function pointize(img) {
  for (let col = 0; col < img.width; col++) {
    for (let row = 0; row < +img.height; row++) {
      let c = img.get(col, row)
      stroke(color(c))
      point(col, row)
    }
  }
}

//------------------------------------------------------------------------------
function rectangleEdit(img, rectangleX, rectangleY) {
  for (let col = 0; col < img.width; col += rectangleX) {
    for (let row = 0; row < img.height; row += rectangleY) {
      let c = img.get(col, row)
      fill(color(c))
      noStroke()
      rect(col, row, rectangleX, rectangleY)
    }
  }
}

//------------------------------------------------------------------------------
function circleEdit(img, circleSize) {
  for (
    let col = 0;
    col < img.width / 2 + img.width;
    col += circleSize
  ) {
    for (let row = 0; row < img.height; row += circleSize) {
      let c = img.get(col, row)
      stroke(color(c))
      strokeWeight(circleSize)
      point(col, row)
    }
  }
}

//------------------------------------------------------------------------------
function curveEdit(
  img,
  size,
  strokeSize,
  rotateSize,
  angleMultiplier
) {
  for (let col = 0; col < img.width; col += size) {
    for (let row = 0; row < img.height; row += size) {
      push()
      let c = img.get(col, row)
      stroke(color(c))
      translate(col, row)
      rotate(radians(rotateSize))
      noFill()
      strokeWeight(strokeSize)
      stroke(color(c))
      strokeWeight(strokeSize)
      curve(
        col,
        row,
        cos(row) * sin(col) * angleMultiplier * random(5),
        cos(row) * sin(col) * angleMultiplier * random(5),
        0,
        0,
        cos(row) * sin(col) * angleMultiplier * random(5),
        cos(row) * sin(col) * angleMultiplier * random(5)
      )
      pop()
    }
  }
  print('ready')
}

//------------------------------------------------------------------------------
function pointBackground(
  img,
  size,
  strokeSize,
  rotateSize
) {
  for (let col = 0; col < img.width; col += size) {
    for (let row = 0; row < img.height; row += size) {
      push()
      let c = img.get(col, row)
      stroke(color(c))
      translate(col, row)
      rotate(radians(rotateSize))
      noFill()
      strokeWeight(strokeSize)
      point(color(c))
    }
  }
  print('ready')
}

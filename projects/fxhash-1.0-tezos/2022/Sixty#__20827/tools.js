function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(fxrand() * (max - min + 1) + min); // The maximum is exclusive and the minimum is inclusive
}
function randomVal(min, max) {
  return fxrand() * (max - min) + min;
}
function map_range(value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

function shuff(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(fxrand() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}

function plusOrMin(x) {
  if(fxrand() < 0.5) {
    mod = 1
  } else {
    mod = -1
  }
  return x*mod
}

function keyTyped() {
  if (key === "s" || key === "S") {
    save("Sixty#.png");
  }
}

function randColor() {
  return chroma(truePal[randomInt(0, truePal.length-1)]).saturate(2).hex()
}

function angBetween(x1, y1, x2, y2) {
  return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}

////////////////////////////////////////

function triangles() {

c.push()
c.translate(centerX, centerY)

rot = randomInt(0, 120)
  col = randColor()
  numRings = randomInt(10, 30)
  expo = randomVal(0.25, 4)
  for(let i = 0; i < numRings; i++) {
    r = map(pow(i, expo), 0, pow(numRings, expo), h*2.5, 0)

    col = randColor()


    c.noStroke()
    c.fill(chroma(col).hex())
    //c.circle(0, 0, r)
    c.beginShape()
    for(let i = rot; i < 360+rot; i += 120) {
      x = cos(i)*r
      y = sin(i)*r
      c.vertex(x, y)
    }
    c.endShape(CLOSE)
  }
  c.pop()
}

function flowers() {
numPetals = randomInt(3, 8)
midPt = randomVal(0, 0.25)
c.push()
c.translate(centerX, centerY)
rot = randomInt(0, 120)
  col = randColor()
  numRings = randomInt(10, 30)
  expo = randomVal(0.25, 4)
  for(let i = 0; i < numRings; i++) {
    r = map(pow(i, expo), 0, pow(numRings, expo), h*2.5, 0)

    col = randColor()


    c.noStroke()
    c.fill(chroma(col).hex())
    c.beginShape()
    for(let i = rot; i < 360+rot; i += 360/50) {
      rad = map(abs(sin(i*numPetals)), 0, 1, r*midPt, r)
      x = cos(i)*rad
      y = sin(i)*rad
      c.vertex(x, y)
    }
    c.endShape(CLOSE)
  }
  c.pop()
}

function spiral(x, y, r) {
  c.push()
  c.translate(x, y)
  numColors = randomInt(1, 15)
  spiralPal = truePal.concat(truePal, truePal, truePal, truePal, truePal)
  numSpins = randomVal(1, 20)
  direction = plusOrMin(1)
  totalRot = 360*numSpins
  for(let i = 0; i < totalRot; i++) {
    nCol = Math.floor(map(pow(i, 2), 0, pow(totalRot, 2), 0, numColors-1))
    c.fill(spiralPal[nCol])
    radNow= map(pow(i, 2), 0, pow(totalRot, 2), 0, r/2)
    x = cos(i)*radNow
    y = sin(i)*radNow
    rad = map(i, 0, totalRot, 1, r/2)

    c.circle(x, y, rad)
  }
  c.pop()
}

function grid() {
  c.push()
  gridCols = randomInt(numGrids+1, 20)
  gridRows = randomInt(numGrids+1, 20)
  cellWG = (w-(sampleMarg*2))/gridCols
  cellHG = (h-(sampleMarg*2))/gridRows
  nAxis = fxrand()
  column = randomInt(0, gridCols)
  row = randomInt(0, gridRows)
  for(let y = 0; y < gridRows; y++) {
    for(let x = 0; x < gridCols; x++) {
      if(nAxis < 0.5 && x == column) {
        col = randColor()
        c.fill(col)
        c.noStroke()
        c.rectMode(CENTER)
        c.rect(sampleMarg+x*cellWG + cellWG/2, sampleMarg+y*cellHG+cellHG/2, cellWG, cellHG)
      } else if(nAxis > 0.5 && y == row) {
        col = randColor()
        c.fill(col)
        c.noStroke()
        c.rectMode(CENTER)
        c.rect(sampleMarg+x*cellWG + cellWG/2, sampleMarg+y*cellHG+cellHG/2, cellWG, cellHG)
      }

    }
  }
  c.pop()
}

function polarSampler() {
  p.rectMode(CENTER)


  translate(centerX, centerY)


  cols = rows/4
  cellW = (w-(marg*2))/cols
  cellH = (h-(marg*2))/rows
  rotNS = randomVal(0.005, 0.0001)
  zNS = randomVal(0.01, 0.005)
  for(let y = sampleMarg; y < height-sampleMarg; y+= cellH) {
    for(let x = sampleMarg; x < width-sampleMarg; x+= cellW) {
      index = (y*width)+x
      n = createVector(x, y)
      coords.push(n)
    }
  }
  for(let i = 0; i < coords.length-1; i++) {
    x = coords[randomInt(0, coords.length-1)].x
    y = coords[randomInt(0, coords.length-1)].y
    z = map(noise(x*zNS, y*zNS), 0, 1, 0, 100)

    here = createVector(x, y)
    nRot = noise(x*rotNS, y*rotNS)
    rot = map(nRot, 0, 1, -180, 180)

    p.push()
    p.translate(x, y, randomVal(0, 100))
    ang = angBetween(x, y, centerX, centerY);
    p.rotate(ang+rot)
    col = c.get(x, y)
    nAccent = fxrand()
    if(nAccent < 0.01) {
      col = randColor()
    }
    p.fill(col)
    p.stroke(frameCol)
    p.strokeWeight(0.5)

    p.rect(0, 0, cellW*randomVal(0.25, 4), cellH*randomVal(0.25, 4))
    p.pop()
  }
}



function flowerSampler() {
  p.rectMode(CENTER)


  translate(centerX, centerY)


  cols = rows/4
  cellW = (w-(marg*2))/cols
  cellH = (h-(marg*2))/rows
  rotNS = randomVal(0.005, 0.0001)
  zNS = randomVal(0.01, 0.005)
  for(let y = sampleMarg; y < height-sampleMarg; y+= cellH) {
    for(let x = sampleMarg; x < width-sampleMarg; x+= cellW) {
      index = (y*width)+x
      n = createVector(x, y)
      coords.push(n)
    }
  }
  for(let i = 0; i < coords.length-1; i++) {
    x = coords[randomInt(0, coords.length-1)].x
    y = coords[randomInt(0, coords.length-1)].y
    z = map(noise(x*zNS, y*zNS), 0, 1, 0, 100)

    here = createVector(x, y)
    nRot = noise(x*rotNS, y*rotNS)
    rot = map(nRot, 0, 1, -180, 180)

    p.push()
    p.translate(x, y, randomVal(0, 100))
    ang = angBetween(x, y, centerX, centerY);
    p.rotate(ang+rot)
    col = c.get(x, y)
    nAccent = fxrand()
    if(nAccent < 0.01) {
      col = randColor()
    }
    p.fill(col)
    p.stroke(frameCol)
    p.strokeWeight(0.5)

    flower(0, 0, cellW*randomVal(0.25, 4), cellH*randomVal(0.25, 4))
    p.pop()
  }
}

function flower(x, y, flowW, flowH) {
  numPetals = randomInt(3, 8)
  midPt = randomVal(0, 0.5)
  rot = 0
  p.push()
  p.fill(randColor())
  p.circle(0, 0, flowW*midPt)
  p.pop()
  p.beginShape()
  for(let i = rot; i < 360+rot; i += 360/50) {
    radX = map(abs(sin(i*numPetals)), 0, 1, flowW*midPt, flowW)
    radY = map(abs(sin(i*numPetals)), 0, 1, flowH*midPt, flowH)
    x = cos(i)*radX/2
    y = sin(i)*radY/2
    p.vertex(x, y)
  }
  p.endShape(CLOSE)
}

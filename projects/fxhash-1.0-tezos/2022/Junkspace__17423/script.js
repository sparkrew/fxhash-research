/* For license information please see license.txt under the same folder */

const canvas = 1000
const seed = Math.floor(fxrand() * 999999)
const wallThickness = canvas/110
const unitStroke = canvas/1000

function setup() {
  angleMode(DEGREES)
  colorMode(HSB,360,100,100,100)
  rectMode(CENTER)
  pixelDensity(2)
  createCanvas(canvas,canvas)
  noLoop()
}

function draw() {
  randomSeed(seed)
  const paperMode = floor(random(0,5))
  const wallMode = floor(random(0,3)) 
  const floorMode = floor(random(0,3))
  const oneFloorType = (floorMode==0) ? floor(random(0,4)) : null ;
  const matrixMode = floor(random(0,3))
  const matrixX = (matrixMode==0) ? floor(random(2,9)) : (matrixMode==1) ? floor(random(6,9)) : floor(random(2,4))
  const matrixY = (matrixMode==0) ? floor(random(2,9)) : (matrixMode==1) ? floor(random(2,4)) : floor(random(6,9))
  const shadowX = random([1,-1])
  const shadowY = random([1,-1])
  const shadowDistance = canvas*0.04
  const shadowRepeat = 20
  var matrixFloorXPos = []
  var matrixFloorYPos = []
  var wallArray = []
  var rotationArray = []

  const cp0 = [[197,3,96],[218,19,68],[235,35,26],[353,85,94]]
  const cp1 = [[105,5,98],[182,24,86],[203,56,62],[215,67,34]]
  const cp2 = [[48,19,98],[47,61,96],[28,68,93],[209,87,40]]
  const cp3 = [[195,5,98],[174,34,77],[165,100,47],[15,18,100]]
  const cp4 = [[40,71,99],[31,100,97],[0,81,84],[201,100,29]]
  const cp5 = [[50,2,96],[38,6,74],[21,10,54],[25,17,27]]
  const cp6 = [[55,80,100],[49,100,100],[0,0,30],[0,0,13]]
  const cp7 = [[192,82,74],[43,99,100],[200,97,28],[32,100,98]]
  const cp8 = [[74,48,42],[52,12,100],[88,56,21],[32,57,87]]
  const cp9 = [[166,13,100],[5,38,100],[173,35,88],[341,60,67]] 
  const cp10 = [[37,61,96],[31,9,97],[8,20,96],[165,20,65]] 
  const cp11 = [[46,12,98],[168,24,95],[188,22,88],[5,38,100]] 
  const cp12 = [[208,69,49],[164,97,84],[346,70,94],[42,60,100]] 
  const cp13 = [[339,36,96],[345,56,95],[350,80,87],[352,90,53]] 
  const cp14 = [[46,12,98],[88,13,84],[152,26,75],[176,41,69]] 
  const cp15 = [[265,25,100],[254,43,84],[238,44,55],[244,43,29]] 
  const cp16 = [[126,21,80],[130,23,73],[128,26,59],[124,30,36]] 
  const cpAll = [cp0,cp1,cp2,cp3,cp4,cp5,cp6,cp7,cp8,cp9,cp10,cp11,cp12,cp13,cp14,cp15,cp16]
  var cpNo = floor(random(0,cpAll.length))
  var cpSelected = cpAll[cpNo]

  for (let i=1;i<matrixX+1;i++) { 
    if ((matrixX-1)%i==0) {
      matrixFloorXPos.push(i)
    }
  }

  for (let i=1;i<matrixY+1;i++) { 
    if ((matrixY-1)%i==0) {
      matrixFloorYPos.push(i)
    }
  }

  const matrixFloorX = matrixFloorXPos[floor(random(0,matrixFloorXPos.length))]
  const matrixFloorY = matrixFloorYPos[floor(random(0,matrixFloorYPos.length))]

  background(cpSelected[0])

  paperPicker(matrixX,matrixY,paperMode)

  push()

  stroke(cpSelected[2])
  strokeWeight(unitStroke*2)
  fill(cpSelected[1])

  var areaFloorX = canvas-(canvas/(matrixX+1))*2
  var areaFloorY = canvas-(canvas/(matrixY+1))*2

  translate(canvas/(matrixX+1),canvas/(matrixY+1))
  translate(areaFloorX/matrixFloorX*0.5,areaFloorY/matrixFloorY*0.5)

  for (let k=0;k<matrixFloorY;k++) {
    push()
    for (let i=0;i<matrixFloorX;i++) {
      floorPicker(floorMode,oneFloorType,matrixX,matrixY,matrixFloorX,matrixFloorY,areaFloorX,areaFloorY)
      translate(areaFloorX/matrixFloorX,0)
    }  
    pop()
    translate(0,areaFloorY/matrixFloorY)
  }

  pop()

  for (let k=0;k<matrixY;k++) { 
    for (let i=0;i<matrixX;i++) {
      var wallRandom = random()
      var rotation = random([0,180])
      wallArray.push(wallRandom)
      rotationArray.push(rotation)
    }
  }

  push()
  noStroke() 
  fill(0,0,30,12)

  for (let s=0;s<shadowRepeat;s++) {
    var j = 0
    push()
    translate(shadowDistance/shadowRepeat*s*shadowX,shadowDistance/shadowRepeat*s*shadowY)
    for (let k=0;k<matrixY;k++) {
      translate(0,canvas/(matrixY+1))
      push()

      for (let i=0;i<matrixX;i++) {
        translate(canvas/(matrixX+1),0)
        wallPicker(wallArray[j],wallMode,matrixX,matrixY,rotationArray[j])
        j++
      }
      pop()
    }
    pop()
  }
  pop()

  push()
  noStroke() 
  fill(cpSelected[3])

  var j = 0
  for (let k=0;k<matrixY;k++) { 
    translate(0,canvas/(matrixY+1))
    push()
    for (let i=0;i<matrixX;i++) {
      translate(canvas/(matrixX+1),0)
      wallPicker(wallArray[j],wallMode,matrixX,matrixY,rotationArray[j])
      j++
    }
    pop()
  }
  pop()

  window.$fxhashFeatures = {
    "Paper Type": (paperMode==0) ? "Dotted Grid" : (paperMode==1) ? "Cross Grid" : (paperMode==2) ? "Line Grid" : (paperMode==3) ? "Craft" : "Clean" ,"Partition Type": (wallMode==0) ? "Flat" : (wallMode==1) ? "Corner" : "All" ,"Floor Type": (floorMode==0 || (matrixFloorX==1 && matrixFloorY==1)) ? "Mono" : (floorMode==1) ? "No Vertical Circulation" : "All" ,"Matrix Type": (matrixMode==0) ? "Free" : (matrixMode==1) ? "Horizantal" : "Vertical" ,"#Wall Matrix X": matrixX ,"#Wall Matrix Y": matrixY ,"#Floor Matrix X": matrixFloorX ,"#Floor Matrix Y": matrixFloorY ,"Shadow Direction": (shadowX==-1 && shadowY==-1) ? "Up Left" : (shadowX==1 && shadowY==-1) ? "Up Right" : (shadowX==-1 && shadowY==1) ? "Down Left" : "Down Right" ,"Color Palette": (cpNo==0) ? "Airport" : (cpNo==1) ? "Dentist" : (cpNo==2) ? "Kindergarten" : (cpNo==3) ? "Hospital" :  (cpNo==4) ? "Warehouse" :  (cpNo==5) ? "Basement" :  (cpNo==6) ? "Factory" :  (cpNo==7) ? "Toy Store" : (cpNo==8) ? "Office" : (cpNo==9) ? "Candy Shop" : (cpNo==10) ? "Royal Suite" : (cpNo==11) ? "Nail Saloon" : (cpNo==12) ? "Mall" : (cpNo==13) ? "Pet Grooming Saloon" : (cpNo==14) ? "Restroom" : (cpNo==15) ? "Flower Shop" : "Rehabilitation Center"  
  }
 
  fxpreview()
}

function paperPicker(matrixX,matrixY,paperMode) {
  push() ;
  (paperMode==0) ? drawDottedPaper(matrixX,matrixY):
  (paperMode==1) ? drawCrossgridPaper(matrixX,matrixY):
  (paperMode==2) ? drawGridPaper(matrixX,matrixY):
  (paperMode==3) ? drawCraftPaper(matrixX,matrixY):
  null
  pop()
}

function drawCraftPaper(matrixX,matrixY) {
  noStroke()
  fill(0,0,85)
  for (let i=0;i<20000;i++) {
    circle(random(canvas/(matrixX+1)*0.2,canvas/(matrixX+1)*(matrixX+0.8)),
      random(canvas/(matrixY+1)*0.2,canvas/(matrixY+1)*(matrixY+0.8)),canvas/600)
  }  
}

function drawGridPaper(matrixX,matrixY) {
  strokeWeight(unitStroke*1.2)
  stroke(0,0,85)
  for (let k=0.4;k<matrixY+0.8;k+=0.2) {
    for (let i=0.4;i<matrixX+0.8;i+=0.2) {
      line(canvas/(matrixX+1)*i,canvas/(matrixY+1)*0.2,canvas/(matrixX+1)*i,canvas/(matrixY+1)*(matrixY+0.8))
      line(canvas/(matrixX+1)*0.2,canvas/(matrixY+1)*k,canvas/(matrixX+1)*(matrixX+0.8),canvas/(matrixY+1)*k)
    }  
  }
}

function drawCrossgridPaper(matrixX,matrixY) {
  var crossgridLength = canvas/200

  strokeWeight(unitStroke*1.2)
  stroke(0,0,85)
  for (let k=0.2;k<matrixY+1;k+=0.2) {
    for (let i=0.2;i<matrixX+1;i+=0.2) {
      line(canvas/(matrixX+1)*i,canvas/(matrixY+1)*k-crossgridLength,canvas/(matrixX+1)*i,canvas/(matrixY+1)*k+crossgridLength)
      line(canvas/(matrixX+1)*i-crossgridLength,canvas/(matrixY+1)*k,canvas/(matrixX+1)*i+crossgridLength,canvas/(matrixY+1)*k)
    }  
  }
}

function drawDottedPaper(matrixX,matrixY) {
  noStroke()
  fill(0,0,85)
  for (let k=0.2;k<matrixY+1;k+=0.2) {
    for (let i=0.2;i<matrixX+1;i+=0.2) {
      circle(canvas/(matrixX+1)*i,canvas/(matrixY+1)*k,canvas/200)
    }  
  }
}

function floorPicker(floorMode,oneFloorType,matrixX,matrixY,matrixFloorX,matrixFloorY,areaFloorX,areaFloorY) {
  var areaModuleX = areaFloorX/matrixFloorX ;
  var areaModuleY = areaFloorY/matrixFloorY ;

  if (floorMode==0) {
    (oneFloorType==0) ? drawTileFloor(areaModuleX,areaModuleY):
    (oneFloorType==1) ? drawDottedFloor(areaModuleX,areaModuleY,matrixFloorX,matrixFloorY):
    (oneFloorType==2) ? drawParquetFloorX(areaModuleX,areaModuleY):
    drawParquetFloorY(areaModuleX,areaModuleY)
  } else if (floorMode==1) {
    (random()<0.20) ? drawTileFloor(areaModuleX,areaModuleY):
    (random()<0.40) ? drawDottedFloor(areaModuleX,areaModuleY,matrixFloorX,matrixFloorY):
    (random()<0.60) ? drawParquetFloorX(areaModuleX,areaModuleY):
    (random()<0.80) ? drawParquetFloorY(areaModuleX,areaModuleY):
    null  
  } else if (floorMode==2) {
    (random()<0.15) ? drawTileFloor(areaModuleX,areaModuleY):
    (random()<0.30) ? drawDottedFloor(areaModuleX,areaModuleY,matrixFloorX,matrixFloorY):
    (random()<0.45) ? drawParquetFloorX(areaModuleX,areaModuleY):
    (random()<0.60) ? drawParquetFloorY(areaModuleX,areaModuleY):
    (random()<0.75 && matrixFloorX==matrixX-1 && matrixFloorY==matrixY-1 ) ? drawElevatorFloor(areaModuleX,areaModuleY):
    (random()<0.90 && matrixFloorX==matrixX-1 && matrixFloorY==matrixY-1 ) ? drawStaircaseFloor(areaModuleX,areaModuleY):
    null
  }
}

function drawStaircaseFloor(areaModuleX,areaModuleY) {
  var countStair = 10

  if (areaModuleX>areaModuleY) {
    rect(-areaModuleX*0.4,0,areaModuleX*0.2,areaModuleY)
    rect(areaModuleX*0.4,0,areaModuleX*0.2,areaModuleY)
    rect(0,-areaModuleY*0.3,areaModuleX*0.6,areaModuleY*0.4)
    rect(0,areaModuleY*0.3,areaModuleX*0.6,areaModuleY*0.4)
    for (let i=0;i<countStair-1;i++) {
      line(-areaModuleX*0.3+(areaModuleX*0.6/countStair*(i+1)),-areaModuleY*0.5,-areaModuleX*0.3+(areaModuleX*0.6/countStair*(i+1)),-areaModuleY*0.1)
      line(-areaModuleX*0.3+(areaModuleX*0.6/countStair*(i+1)),areaModuleY*0.5,-areaModuleX*0.3+(areaModuleX*0.6/countStair*(i+1)),areaModuleY*0.1)
    }
    line(areaModuleX*0.27,-areaModuleY*0.35,areaModuleX*0.3,-areaModuleY*0.3) 
    line(areaModuleX*0.27,-areaModuleY*0.25,areaModuleX*0.3,-areaModuleY*0.3)
    line(-areaModuleX*0.4,-areaModuleY*0.3,areaModuleX*0.3,-areaModuleY*0.3) 
    line(-areaModuleX*0.4,-areaModuleY*0.3,-areaModuleX*0.4,areaModuleY*0.3)
    line(-areaModuleX*0.4,areaModuleY*0.3,areaModuleX*0.3,areaModuleY*0.3)
    circle(areaModuleX*0.3,areaModuleY*0.3,canvas/150)
  } else {
    rect(0,-areaModuleY*0.4,areaModuleX,areaModuleY*0.2)
    rect(0,areaModuleY*0.4,areaModuleX,areaModuleY*0.2) 
    rect(areaModuleX*0.3,0,areaModuleX*0.4,areaModuleY*0.6)
    rect(-areaModuleX*0.3,0,areaModuleX*0.4,areaModuleY*0.6)

    for (let i=0;i<countStair-1;i++) {
      line(-areaModuleX*0.5,-areaModuleY*0.3+(areaModuleY*0.6/countStair*(i+1)),-areaModuleX*0.1,-areaModuleY*0.3+(areaModuleY*0.6/countStair*(i+1)))
      line(areaModuleX*0.5,-areaModuleY*0.3+(areaModuleY*0.6/countStair*(i+1)),areaModuleX*0.1,-areaModuleY*0.3+(areaModuleY*0.6/countStair*(i+1)))
    }

    line(areaModuleX*0.3,areaModuleY*0.3,areaModuleX*0.35,areaModuleY*0.27)
    line(areaModuleX*0.3,areaModuleY*0.3,areaModuleX*0.25,areaModuleY*0.27) 
    line(-areaModuleX*0.3,areaModuleY*0.3,-areaModuleX*0.3,-areaModuleY*0.4)
    line(-areaModuleX*0.3,-areaModuleY*0.4,areaModuleX*0.3,-areaModuleY*0.4)
    line(areaModuleX*0.3,-areaModuleY*0.4,areaModuleX*0.3,areaModuleY*0.3) 
    circle(-areaModuleX*0.3,areaModuleY*0.3,canvas/150) 
  }
}

function drawElevatorFloor(areaModuleX,areaModuleY) {
  push()
  strokeWeight(unitStroke*3)
  if (areaModuleX>areaModuleY) {
    rect(-areaModuleX*0.22,0,areaModuleX*0.4,areaModuleY*0.85)
    rect(areaModuleX*0.22,0,areaModuleX*0.4,areaModuleY*0.85) 
  } else if (areaModuleX<areaModuleY) {
    rect(0,-areaModuleY*0.22,areaModuleX*0.85,areaModuleY*0.4)
    rect(0,areaModuleY*0.22,areaModuleX*0.85,areaModuleY*0.4) 
  } else {
    rect(0,0,areaModuleX*0.80,areaModuleY*0.80) 
  }
  pop()
}

function drawParquetFloorX(areaModuleX,areaModuleY) {
  var parquetCount = 10

  push()
  noStroke()
  rect(0,0,areaModuleX,areaModuleY)
  pop()

  for (let i=0;i<parquetCount+1;i++) {
    let x = random(-areaModuleX*0.5,areaModuleX*0.5)
    line(-areaModuleX*0.5,-areaModuleY*0.5+areaModuleY/parquetCount*i,areaModuleX*0.5,-areaModuleY*0.5+areaModuleY/parquetCount*i); 
    (parquetCount != i) ? line(x,-areaModuleY*0.5+areaModuleY/parquetCount*i,x,-areaModuleY*0.5+areaModuleY/parquetCount*(i+1)) : null
  }
  line(-areaModuleX*0.5,-areaModuleY*0.5,-areaModuleX*0.5,areaModuleY*0.5)
  line(areaModuleX*0.5,-areaModuleY*0.5,areaModuleX*0.5,areaModuleY*0.5)
}

function drawParquetFloorY(areaModuleX,areaModuleY) {
  var parquetCount = 10

  push()
  noStroke()
  rect(0,0,areaModuleX,areaModuleY)
  pop()

  for (let i=0;i<parquetCount+1;i++) {
    let y = random(-areaModuleY*0.5,areaModuleY*0.5)
    line(-areaModuleX*0.5+areaModuleX/parquetCount*i,-areaModuleY*0.5,-areaModuleX*0.5+areaModuleX/parquetCount*i,areaModuleY*0.5);
    (parquetCount != i) ? line(-areaModuleX*0.5+areaModuleX/parquetCount*i,y,-areaModuleX*0.5+areaModuleX/parquetCount*(i+1),y) : null
  }
  line(-areaModuleX*0.5,-areaModuleY*0.5,areaModuleX*0.5,-areaModuleY*0.5)
  line(-areaModuleX*0.5,areaModuleY*0.5,areaModuleX*0.5,areaModuleY*0.5)
}

function drawDottedFloor(areaModuleX,areaModuleY,matrixFloorX,matrixFloorY) {
  var dotCount = 8000/(matrixFloorX*matrixFloorY)

  push()
  noStroke()
  rect(0,0,areaModuleX,areaModuleY)
  pop()

  for (let i=0;i<dotCount;i++) {
    point(random(-areaModuleX/2,areaModuleX/2),random(-areaModuleY/2,areaModuleY/2))
  }
}

function drawTileFloor(areaModuleX,areaModuleY) {
  var tileCount = 10

  push()
  noStroke()
  rect(0,0,areaModuleX,areaModuleY)
  pop()

  for (let i=0;i<tileCount+1;i++) {
    line(-areaModuleX*0.5,-areaModuleY*0.5+areaModuleY/tileCount*i,areaModuleX*0.5,-areaModuleY*0.5+areaModuleY/tileCount*i)
    line(-areaModuleX*0.5+areaModuleX/tileCount*i,-areaModuleY*0.5,-areaModuleX*0.5+areaModuleX/tileCount*i,areaModuleY*0.5)
  }
}

function wallPicker(wallRandom,wallMode,matrixX,matrixY,rotation) {
  var wallLengthX = canvas/(matrixX+1)
  var wallLengthY = canvas/(matrixY+1) 

  if (wallMode==0) {
    (wallRandom<0.40) ? drawWallX(wallLengthX) : 
    (wallRandom<0.80) ? drawWallY(wallLengthY) :
    null
  } else if (wallMode==1) {
    (wallRandom<0.15) ? drawCrossWall(wallLengthX,wallLengthY) :
    (wallRandom<0.30) ? drawLWall1(wallLengthX,wallLengthY,rotation) :
    (wallRandom<0.45) ? drawLWall2(wallLengthX,wallLengthY,rotation) :
    (wallRandom<0.60) ? drawWallTx(wallLengthX,wallLengthY,rotation) :
    (wallRandom<0.75) ? drawWallTy(wallLengthX,wallLengthY,rotation) :
    null
  } else if (wallMode==2) {
    (wallRandom<0.10) ? drawColomn() :
    (wallRandom<0.20) ? drawWallX(wallLengthX) : 
    (wallRandom<0.30) ? drawWallY(wallLengthY) :
    (wallRandom<0.40) ? drawCrossWall(wallLengthX,wallLengthY) :
    (wallRandom<0.50) ? drawLWall1(wallLengthX,wallLengthY,rotation) :
    (wallRandom<0.60) ? drawLWall2(wallLengthX,wallLengthY,rotation) :
    (wallRandom<0.70) ? drawWallTx(wallLengthX,wallLengthY,rotation) :
    (wallRandom<0.80) ? drawWallTy(wallLengthX,wallLengthY,rotation) :
    null
  }
}

function drawWallX(wallLengthX) {
  rect(0,0,wallLengthX,wallThickness)
}

function drawWallY(wallLengthY) {
  rect(0,0,wallThickness,wallLengthY)
}

function drawCrossWall(wallLengthX,wallLengthY) {
  rect(0,0,wallLengthX,wallThickness)
  rect(0,0,wallThickness,wallLengthY)
}

function drawLWall1(wallLengthX,wallLengthY,rotation) {
  push()
  rotate(rotation)
  rect(wallLengthX*0.25-wallThickness*0.25,0,wallLengthX*0.5+wallThickness*0.5,wallThickness)
  rect(0,wallLengthY*0.25-wallThickness*0.25,wallThickness,wallLengthY*0.5+wallThickness*0.5)
  pop()
}

function drawLWall2(wallLengthX,wallLengthY,rotation) {
  push()
  rotate(rotation)
  rect(wallLengthX*0.25-wallThickness*0.25,0,wallLengthX*0.5+wallThickness*0.5,wallThickness)
  rect(0,-wallLengthY*0.25+wallThickness*0.25,wallThickness,wallLengthY*0.5+wallThickness*0.5)
  pop()
}

function drawWallTx(wallLengthX,wallLengthY,rotation) {
  push()
  rotate(rotation)
  rect(0,0,wallLengthX,wallThickness)
  rect(0,wallLengthY*0.25,wallThickness,wallLengthY*0.5)
  pop()
}

function drawWallTy(wallLengthX,wallLengthY,rotation) {
  push()
  rotate(rotation)
  rect(0,0,wallLengthX*0.5,wallThickness)
  rect(0,-wallLengthY*0.25,wallThickness,wallLengthY*0.5)
  pop()
}

function drawColomn() {
  rect(0,0,wallThickness)
}

function windowResized() {
  resizeCanvas(canvas,canvas)
}

function keyTyped() {
  if (key == 's' || key == 'S') save("junkspace by xnmtrc" + ".png");
}
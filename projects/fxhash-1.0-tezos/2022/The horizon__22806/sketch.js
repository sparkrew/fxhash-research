let pallet=[
[[44,91,99], [58,52,78], [83,63,82], [138,73,75],  [143,79,51]],
[[188,100,45], [181,97,65], [147,10,84], [32,88,91],  [92,100,72]],
[[40,52,99],  [43,89,99], [21,82,95], [12,77,65], [221,62,71]],
[[201,62,71],  [216,78,55], [351,99,44], [349,84,70], [51,54,98]],
[[214,64,33], [183,99,45], [166,76,40], [175,74,33], [146,63,56] ],
[[19,86,91], [29,90,92], [41,93,94], [47,87,93], [48,37,93]],
[[19,86,70], [29,90,80], [30,93,90], [33,95,100],  [29,90,80]],
[[316,70,67], [274,63,55], [230,68,27], [237,65,42], [220,67,64]],
[[87,67,69], [352,55,79], [0,85,74], [353,84,45], [278,60,49]],
[[53,42,94], [56,87,93], [29,88,90], [21,80,73], [241,54,58]],
[[138,73,75], [143,79,51], [352,93,57], [347,92,76],  [349,58,95]]]
function getPallet(value) {
      if      (value < 0.3) return 1
      else if (value < 0.35) return 2
      else if (value < 0.4) return 3
      else if (value < 0.45) return 4
      else if (value < 0.5) return 5
      else if (value < 0.55) return 6
      else if (value < 0.6) return 7
      else if (value < 0.65) return 8
      else if (value < 0.7) return 9
      else if (value < 0.75) return 10
      else  return 0
}

let pg;
let ww, _mode, _rows;
let c1=0,c1d=1, _landDirection, _surfaceTickness

function getSurfaceTickness(value) {
      if      (value < 0.2) return 10
      else if (value < 0.4) return 12
      else if (value < 0.6) return 14
      else if (value < 0.8) return 16
      else  return 20
}
function getLandDirection(value) {
      if      (value < 0.3) return -300
      else if (value < 0.35) return -200
      else if (value < 0.4) return -100
      else if (value < 0.45) return 0
      else if (value < 0.5) return 100
      else if (value < 0.55) return 200
      else if (value < 0.6) return 300
      else if (value < 0.65) return 400
      else if (value < 0.7) return 500
      else if (value < 0.75) return 600
      else  return 700
}
function getMode(value) {
      if      (value < 0.2) return 1
      else if (value < 0.55) return 2
      else if (value < 0.65) return 3
      else if (value < 0.8) return 4
      else  return 5
}

function getThick(value) {
      if      (value < 0.2) return 1
      else if (value < 0.4) return 2
      else if (value < 0.6) return 3
      else if (value < 0.8) return 4
      else  return 5
}
function getTmax(value) {
      if      (value < 0.2) return 7
      else if (value < 0.4) return 9
      else if (value < 0.6) return 11
      else if (value < 0.8) return 13
      else  return 15
}

function getTop(value) {
      if      (value < 0.2) return 300
      else if (value < 0.4) return 350
      else if (value < 0.6) return 400
      else if (value < 0.8) return 450
      else  return 500
}

function getFrame(value) {
      if      (value < 0.45) return 1
      else if (value < 0.7) return 2
      else  return 3
}

function getBrandAngleLeft(value) {
      if      (value < 0.2) return 3
      else if (value < 0.55) return 4
      else if (value < 0.65) return 5
      else if (value < 0.8) return 6
      else  return 7
}
function getBrandAngleRight(value) {
      if      (value < 0.2) return 3
      else if (value < 0.55) return 4
      else if (value < 0.65) return 5
      else if (value < 0.8) return 6
      else  return 7
}
window.$fxhashFeatures = {
      "_brandAngleLeft": getBrandAngleLeft(fxrand()),
      "_brandAngleRight": getBrandAngleRight(fxrand()),
      "_surfaceTickness": getSurfaceTickness(fxrand()),
      "_frame": getFrame(fxrand()),
      "_top": getTop(fxrand()),
      "_thick": getThick(fxrand()),
      "tMax": getTmax(fxrand()),
      "_mode": getMode(fxrand()),
      "_pallet_ind": getPallet(fxrand()),
      "_landDirection": getLandDirection(fxrand()),
}
function setup() {
      _brandAngleLeft = window.$fxhashFeatures._brandAngleLeft
      _brandAngleRight = window.$fxhashFeatures._brandAngleRight
      _surfaceTickness = window.$fxhashFeatures._surfaceTickness
      _frame = window.$fxhashFeatures._frame
      _top = window.$fxhashFeatures._top
      _landDirection = window.$fxhashFeatures._landDirection
      _mode = window.$fxhashFeatures._mode
      _thick = window.$fxhashFeatures._thick
      tMax = window.$fxhashFeatures.tMax
      _pallet_ind=window.$fxhashFeatures._pallet_ind
      colorMode(HSB)
      blendMode(BLEND)
      frameRate(3)
      createCanvas(800, 800);
      pixelDensity(2)
      randomSeed(_mode*_pallet_ind)
      noiseSeed(_mode*_pallet_ind)
      noiseDetail(_mode*_pallet_ind, 0.45)
      background(90)
      angleMode(RADIANS)
      //noLoop()
      curveTightness(0);

}
let y = -300, _thick, _z2, yk=0.05, cnt = 0, x
let a = 0, landSurface = [], landInd = 0
let tree= [], _treeShape = 2, treeThick = 3, max_dist = 150
let size = 900, tMax, _top, _frame, tt = 0, _brandAngleLeft, _brandAngleRight

function draw() {
      noFill()
      push()
      strokeWeight(_thick)
      if (tt == 0)
            land()
      pop()
      push()
      drawingContext.shadowOffsetX = 5;
      drawingContext.shadowOffsetY = 5;
      drawingContext.shadowBlur = 5;
      drawingContext.shadowColor = 'black';
      // Trees
      //for (let t = 0; t < tMax; t++){      
            blendMode(BLEND)
            let startPoint = [map(tt, 0, tMax, 50 + map(noise(tt), 0, 1, -30, 60), 820 + map(noise(tt, _pallet_ind), 0, 1, -30, 60)), _top - 15];
            let length = randomBetween(30, noise(tt)*150);
            let weight = randomBetween(noise(tt) * 10, noise(tt) * 25);
            strokeWeight(weight);
            stroke(0);
            if (tt%3 == 0)
                  stroke(15)
            let branchAngle = PI / 2;
            branch(startPoint, weight, length, branchAngle);
            // shadow
            drawingContext.shadowOffsetX = 0;
            drawingContext.shadowOffsetY = 0;
            drawingContext.shadowBlur = 0;
            if (_mode <= 2){
                  blendMode(DODGE)
                  stroke(color(50,0,100,1));
            }
            else
                  stroke(color(50, 0, 100, 0.1));

            startPoint = [map(tt, 0, tMax, 50, 820), _top - 15];
            length = randomBetween(30 * 1.5, noise(tt)*150 * 1.5);
            weight = randomBetween(noise(tt) * 10 * 0.8, noise(tt) * 25 * 0.8);
            strokeWeight(weight);
            branchAngle = -PI / (_mode + 1);
            branch(startPoint, weight, length, branchAngle);

      //}
      if (tt > tMax) {
            noLoop()
            if (_top >= 350)
                  frame(_frame)
      }
      else
            tt++
      pop()
}

function land(){
      for (let x = -5000; x < 5000; x += 90){
            let x1 = x, x2
            let y = 900
            noFill()
            beginShape()
            while(y >= _top){
                  y -= random(20, 25)
                  x1 += (_landDirection - x1) /20
                  x2 = x1 + map(noise(x1, y), 0, 1, -5, 5)
                  curveVertex(x2, y)
                  if (y == 900)
                        curveVertex(x2, y)
            }
            landSurface[landInd] = []
            landSurface[landInd][0] = x2
            landSurface[landInd][1] = y
            landInd++
            curveVertex(x2, y)
            curveVertex(x2, y)
            endShape()

            // /////////////////////////////////////
            push()
            strokeWeight(1)
            fill(0)
            x1 = x + 45, x2
            y = 900
            let c =0
            beginShape()
            while(y >= _top){

                  y -= random(20, 25)
                  x1 += (_landDirection - x1) /20
                  x2 = x1 + map(noise(x1, y), 0, 1, -9, 9)
                  curveVertex(x2, y)
                  if (y == 900)
                        curveVertex(x2, y)
                  if (c%floor(random(3, 5)) <= 0){
                        endShape()
                        beginShape()
                  }
                  c++
            }
            landSurface[landInd] = []
            landSurface[landInd][0] = x2
            landSurface[landInd][1] = y
            landInd++
            curveVertex(x2, y)
            curveVertex(x2, y)
            endShape()
            pop()

      }
      beginShape()
      for (let l in landSurface){
            curveVertex(landSurface[l][0], landSurface[l][1])
            if (l==0 || l == landSurface.length){
                  curveVertex(landSurface[l][0], landSurface[l][1])
            }
      }
      endShape()
      fill(0)
      for (let l in landSurface){
            curveVertex(landSurface[l][0], landSurface[l][1])
            if (l > 0){
                  beginShape()
                  curveVertex(landSurface[l-1][0], landSurface[l-1][1])
                  curveVertex(landSurface[l-1][0], landSurface[l-1][1])
                  for(let t=0; t<5; t++){
                        curveVertex(lerp(landSurface[l-1][0], landSurface[l][0], t/5), landSurface[l-1][1] - _surfaceTickness*noise(l, t) - random(0, 10%l))
                  }
                  curveVertex(landSurface[l][0], landSurface[l][1])
                  curveVertex(landSurface[l][0], landSurface[l][1])
                  endShape(CLOSE)
            }
      }
}

function branch(startPoint, weight, length, angle) {
      let x1 = startPoint[0] + length * cos(angle);
      let y1 = startPoint[1] - length * sin(angle);
      let endpoint = [x1, y1];
    
      strokeWeight(weight);
      line(startPoint[0], startPoint[1], endpoint[0], endpoint[1]);
    
      let angleMax = angle + (PI / random(4, _brandAngleLeft));
      let angleMin = angle - PI / random(4,_brandAngleRight);
      let angleDiff = randomBetween(0, angleMax - angleMin - (PI / 16));
      let angle1 = angleMax - angleDiff / 2;
      let angle2 = angleMin + angleDiff / 2;
      let newWeight = randomBetween(weight * 0.6, weight * 0.8);
      let newLength = randomBetween(length * 0.7, length * 0.9);
    
      if (newLength < 3) {
        return;
      }
    
      branch(endpoint, newWeight, newLength, angle1);
      branch(endpoint, newWeight, newLength, angle2);
    }
    
    function randomBetween(low, high) {
      return random(high - low) + low;
    }

function frame(_frame){
      if (_pallet_ind<2){
            blendMode(BLEND)
            stroke(0)
            fill(0)
      }
      else{
            blendMode(DODGE)
            let clr = floor((_mode + _top) % 4)
            fill(color(pallet[_pallet_ind][clr][0], pallet[_pallet_ind][clr][1], pallet[_pallet_ind][clr][2]))
      }
      if (_frame == 2){
            let _frameTick = random(50, 200)
            rect(0, 0, 800, _frameTick)
            rect(0, 800 - _frameTick, 800, 800)
            rect(0, 0, _frameTick/2, 800)
            rect(800 - _frameTick/2, 0, 800, 800)
      }
      else {
            let _frameTick = random(50, 300)
            rect(0, 0, 800, _frameTick/2)
            rect(0, 800 - _frameTick/2, 800, 800)
            rect(0, 0, _frameTick, 800)
            rect(800 - _frameTick, 0, 800, 800)
      }

}
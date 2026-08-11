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

let pg = [];
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
function getColumn1(value) {
      if (value < 0.15) return 1
      else if (value < 0.35) return 2
      else if (value < 0.5) return 3
      else if (value < 0.6) return 4
      else return 5
}

function getColumn2(value) {
      if (value < 0.15) return 1
      else if (value < 0.3) return 2
      else if (value < 0.4) return 3
      else return 4
}

function getColumn3(value) {
      if (value < 0.2) return 1
      else return 2
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
      "_column1": getColumn1(fxrand()),
      "_column2": getColumn2(fxrand()),
      "_column3": getColumn3(fxrand()),
      "_thick": getThick(fxrand()),
      "_mode": getMode(fxrand()),
      "_pallet_ind": getPallet(fxrand()),
      "_landDirection": getLandDirection(fxrand()),
}
function setup() {
      _brandAngleLeft = window.$fxhashFeatures._brandAngleLeft
      _brandAngleRight = window.$fxhashFeatures._brandAngleRight
      _surfaceTickness = window.$fxhashFeatures._surfaceTickness
      _column1 = window.$fxhashFeatures._column1
      _column2 = window.$fxhashFeatures._column2
      _column3 = window.$fxhashFeatures._column3
      _landDirection = window.$fxhashFeatures._landDirection
      _mode = window.$fxhashFeatures._mode
      _thick = window.$fxhashFeatures._thick
      _pallet_ind=window.$fxhashFeatures._pallet_ind
      colorMode(HSB)
      blendMode(BLEND)
      frameRate(30)
      createCanvas(800, 800);
      for (let i=0; i<9; i++){
            if ((_column1 == 1 && i == 0) || (_column2 == 1 && i == 1) || (_column3 == 1 && i == 2)) 
                  pg[i] = createGraphics(260, 790);
            else if ((_column1 == 2 && i == 0) || (_column2 == 2 && i == 1)) 
                  pg[i] = createGraphics(525, 790);
            else if ((_column1 == 3 && i == 0)) 
                  pg[i] = createGraphics(790, 790);
            else if ((_column1 == 5 && [0, 3, 6].indexOf(i) >= 0) || (_column2 == 4 && [1, 4, 7].indexOf(i) >= 0)) 
                  pg[i] = createGraphics(260 * 2 + 5, 260);
            else
                  pg[i] = createGraphics(260, 260);
            pg[i].pixelDensity(2)
            }
      pixelDensity(2)
      randomSeed(_mode*_pallet_ind)
      noiseSeed(_mode*_pallet_ind)
      noiseDetail(_mode*_pallet_ind, 0.45)
      background(255)
      angleMode(RADIANS)
      noLoop()
}
let y = -300, _thick, _z2, yk=0.05, cnt = 0, x
let columns = [], size = 260, pgw = 260, pgh = 260, pgIndex
let _column1, _column2, _column3

function draw() {            
      randomSeed(_mode*_pallet_ind)
      for (let frameNo = 0; frameNo < 9; frameNo++){
            pgIndex = frameNo
            if (frameNo <= 2)
                  size = 800
            else
                  size = pgh
            let lb = 50, up = 100
            if ((_column1 == 1 && frameNo == 0) || (_column2 == 1 && frameNo == 1) || (_column3 == 1 && frameNo == 2)) {
                  lb = 200
                  up = 500
            }

            pg[pgIndex].background(color(random(360 + _pallet_ind + _mode), random(lb, up), random(lb, up), 0.9));
            let startPoint = [size / random(1, 4), size + random(lb, 500)];
            let length = randomBetween(90, 120);
            let weight = randomBetween(20, 35);
            let branchAngle = PI / 2;
            pg[pgIndex].noFill()
            pg[pgIndex].blendMode(BLEND)
            for(let b = 0; b <= 6; b++){
                  startPoint = [size / random(1, 8), size + random(lb, 500)];
                  branch(startPoint, weight/4, length, branchAngle, 1, 2);
            }
            pg[pgIndex].blendMode(BLEND)

            pg[pgIndex].stroke(random(lb, 80));
            branch(startPoint, weight, length*1.5, branchAngle, 1, 0);
            startPoint = [size / random(1, 4), size + random(lb, up)];
            //branch(startPoint, weight/2, length*1.5, branchAngle, 1, 0);

            push()
            pg[pgIndex].stroke(10);

            startPoint = [size / random(1, 4), size + random(lb, up)];
            //branch(startPoint, weight*1.2, length*1.5, branchAngle, 1, 0);
            startPoint = [size / random(1, 4), size + random(lb, up)];
            branch(startPoint, weight*1.2, length*1.5, branchAngle, 1, 0);
            pop()
            pg[pgIndex].stroke(10);
            //startPoint = [size / random(1, 10), size + random(lb, up)];
            startPoint = [size / random(1, 10), size + random(lb, up)];
            branch(startPoint, weight * random(0.3, 0.7), length*1.5, branchAngle, 1, 0);
      }
      let x = 0, y = 0
      for (let p in pg){
            if (parseInt(p) % 2 == 0 )
                  pg[p].filter(INVERT)
            // else if (_mode == 4 )
            //       pg[p].filter(INVERT)
            
            if ((p == 0 && _column1 == 3))
                  image(pg[p], x * pgw + 5 * (1 + x), 5 + y * (pgh + 5), 3 * pgw + 10, 800 - 10)
            else if ((p == 0 && _column1 == 1) || (p == 1 && _column2 == 1 && _column1 != 2 && _column1 != 3) || (p == 2 && _column3 == 1 && _column1 != 3 && _column2 != 2))
                  image(pg[p], x * pgw + 5 * (1 + x), 5 + y * (pgh + 5), pgw, 800 - 10)
            else if ((p == 0 && _column1 == 2) || (p == 1 && _column2 == 2))
                  image(pg[p], x * pgw + 5 * (1 + x), 5 + y * (pgh + 5), 2 * pgw + 5, 800 - 10)
            else if (((['0', '3', '6'].indexOf(p) >= 0) && _column1 == 5) || ((['1', '4', '7'].indexOf(p) >= 0) && _column2 == 4)){
                  push()
                  blendMode(BLEND)
                  if (_column1 == 4){
                        if (floor(random(100) % 2) == 0)
                              blendMode(ADD)
                        else
                              blendMode(LIGHTEST)
                  }
                  image(pg[p], x * pgw + 5 * (1 + x), 5 + y * (pgh + 5), 2 * pgw + 5, pgw)
                  pop()
            }
            else if (( _column1 == 4 && [0, 3, 6].indexOf(parseInt(p)) >= 0 && floor(parseInt(p) % _pallet_ind) == 0) || (_column1 != 2 && _column1 != 3 &&  _column2 == 3 &&  [1, 4, 7].indexOf(parseInt(p)) >= 0 && floor(parseInt(p) % _pallet_ind) == 0) || ( _column1 != 3 && _column2 != 2 && _column3 == 2 && ['2', '5', '8'].indexOf(p) >= 0)){
                  image(pg[p], x * pgw + 5 * (1 + x), 5 + y * (pgh + 5))
                        }
            if (x == 2)
                  {y++; x=0;}
            else
                  x++
      }
      if (floor(floor(random(50)) % 2) == 0){
            blendMode(DODGE)
            let clr = floor((_column1 + _column2 + _column3) % 4)
            fill(color(pallet[_pallet_ind][clr][0], pallet[_pallet_ind][clr][1], pallet[_pallet_ind][clr][2]))
            circle(400, 400, 800)
      }

      filter(INVERT)
}

function branch(startPoint, weight, length, angle, branchNo, curve) {
      let x1 = startPoint[0] + length * cos(angle);
      let y1 = startPoint[1] - length * sin(angle);
      let endpoint = [x1, y1];
      if (curve == 2)
            pg[pgIndex].stroke(color(random(70, 120), random(50, 100), 100 - map(startPoint[1], 0, 500, 0, 70), map(startPoint[1], 0, 500, 0.2, 0.4)));

      pg[pgIndex].strokeWeight(weight);
      if (curve == 1) {
            pg[pgIndex].curveVertex(startPoint[0], startPoint[1])
            pg[pgIndex].curveVertex(endpoint[0], endpoint[1])
      }
      else{
            if (curve == 2)
                  pg[pgIndex].line(startPoint[0], startPoint[1], endpoint[0], endpoint[1] + ( - endpoint[1] + startPoint[1]) / length);
            else
                  pg[pgIndex].line(startPoint[0], startPoint[1], endpoint[0], endpoint[1]);
      }


      let angleMax = angle + (PI / random(6, 10));
      let angleMin = angle - PI / random(6, 10);
      let angleDiff = randomBetween(0, angleMax - angleMin - (PI / 16));
      let angle1 = angleMax - angleDiff / 2;
      let angle2 = angleMin + angleDiff / 2;
      let newWeight = randomBetween(weight * 0.6, weight * 0.9);
      let newLength = randomBetween(length * 0.4, length * (0.9 + 1.6 / (curve == 2)?1.6:branchNo));

      if (newLength < 3) {
            return;
      }
      branchNo++
      if (branchNo <= random(5,14)){
            branch(endpoint, newWeight, newLength, angle1, branchNo, curve);
            branch(endpoint, newWeight, newLength, angle2, branchNo, curve);
      }
}

function randomBetween(low, high) {
      return random(high - low) + low;
}
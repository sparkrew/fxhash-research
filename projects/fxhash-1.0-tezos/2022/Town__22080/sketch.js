let pallet=[
[[44,91,99], [58,52,78], [83,63,82], [138,73,75],  [143,79,51]],
[[219,58,75], [286,33,75], [331,64,89], [359,43,90],[40,69,100]],
[[188,100,45], [181,97,65], [147,10,84], [32,88,91],  [92,100,72]],
[[40,52,99],  [43,89,99], [21,82,95], [12,77,65], [221,62,71]],
[[15,58,96], [311,70,73], [317,47,82], [175,73,78], [77,43,88]],
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
      else if (value < 0.8) return 11
      else if (value < 0.85) return 12
      else  return 0
}

function getZoom(value) {
      if      (value < 0.3) return 0.1
      else if (value < 0.35) return 0.2
      else if (value < 0.4) return 0.3
      else if (value < 0.45) return 0.35
      else if (value < 0.5) return 0.4
      else if (value < 0.55) return 0.45
      else if (value < 0.6) return 0.5
      else if (value < 0.65) return 0.55
      else if (value < 0.7) return 0.6
      else if (value < 0.75) return 0.7
      else if (value < 0.8) return 0.8
      else if (value < 0.85) return 0.9
      else  return 1
}
let pg;
let ww, _mode, _rows;
let c1=0,c1d=1


function getMode(value) {
      if (value < .25) return 0
      else if (value < .5) return 5
      else if (value < .75) return 8
      else return 11
}
function getBackType(value) {
      if (value < .33) return 1
      else if (value < .66) return 2
      else return 3
}

function getRows(value) {
      if      (value < 0.2) return 5
      else if (value < 0.4) return 10
      else if (value < 0.6) return 15
      else if (value < 0.8) return 20
      else  return 30
}

function getBackDegree(value) {
      if      (value < 0.2) return 15
      else if (value < 0.4) return 40
      else if (value < 0.6) return 20
      else if (value < 0.8) return 65
      else  return 70
}

function getPX(value) {
      if      (value < 0.25) return -30
      else if (value < 0.5) return -60
      else if (value < 0.75) return 30
      else  return 60
}

function getPY(value) {
      if      (value < 0.25) return -30
      else if (value < 0.5) return -60
      else if (value < 0.75) return 30
      else  return 60
}
window.$fxhashFeatures = {
      "_backType": getBackType(fxrand()),
      "_px": getPX(fxrand()),
      "_py": getPY(fxrand()),
      "_zoom": getZoom(fxrand()),
      "_degree": getBackDegree(fxrand()),
      "_pallet_ind": getPallet(fxrand()),
      "_rows": getRows(fxrand()),
      "_mode": getMode(fxrand())
}
function setup() {
      _backType = window.$fxhashFeatures._backType
      _px = window.$fxhashFeatures._px
      _py = window.$fxhashFeatures._py
      _degree = window.$fxhashFeatures._degree
      _zoom = window.$fxhashFeatures._zoom
      _rows = window.$fxhashFeatures._rows
      _pallet_ind=window.$fxhashFeatures._pallet_ind
      _mode=window.$fxhashFeatures._mode
      colorMode(HSB)
      blendMode(BLEND)
      frameRate(30)
      createCanvas(800, 800);
      pixelDensity(2)
      randomSeed(_mode*_pallet_ind)
      noiseSeed(_mode*_pallet_ind)
      noiseDetail(_mode*_pallet_ind, 0.45)
      noLoop()
}
let h, w, _degree, _px, _py, _backType
let shapes = []
let k=0.1, _zoom
const maxLayer = 3

function draw() {
      background(90)
      back(_backType)
      let r0 = random(300, 600)
      drawSelings(r0, map(noise(r0),0,1,200, 300) * _zoom, 1)
}

function drawSelings(tall, size, frame){
      stroke(0)
      noFill()
      strokeWeight(3)
      
      let cnt = 0, lp=1
      beginShape()
      for(let l = 1; l <= maxLayer ; l+=lp){
            for(let i = map(l,1,maxLayer,400, 100) * _zoom; i < map(l,1,maxLayer,500, 600) ; i+=size){
                  let x = i
                  let y = tall * l/3 + map(noise(i), 0, 1, 50, 400) * sin(i)
                  push()
                  if (l == maxLayer) shadow(-2, -2, 2, 'black')
                  if (cnt % 2 == 0)
                        lineIt(x, y, random(100, 400) * _zoom * l, (800 - y) * (maxLayer - l + 1), frame, l)
                  cnt++
                  pop()
            }
            lp+=0.3
      }
      endShape()
}
function shadow(x, y, b, c){
      drawingContext.shadowOffsetX = x * _zoom;
      drawingContext.shadowOffsetY = y * _zoom;
      drawingContext.shadowBlur = b * _zoom;
      drawingContext.shadowColor = c;
}
function lineIt(x, y, w, h, frame, layer){
      stroke(pallet[_pallet_ind][floor(floor(abs(x+y))%4)][0], pallet[_pallet_ind][floor(floor(abs(x+y))%4)][1], pallet[_pallet_ind][floor(floor(abs(x+y))%4)][2]-30)
      if (frame == 1){
            for(let f = 0; f < w; f += map(noise(x,y), 0, 1, 10, 30)){
                  strokeWeight(_zoom * random(1,7) * layer / maxLayer)
                  if (floor(random(f,70))% 5 >= 3){
                        line(x + f, y, x+f, 800)
                  }
                  }
      }
      if (layer==2){
            push()
            fill(pallet[_pallet_ind][floor((x+y)%4)][0], pallet[_pallet_ind][floor((x+y)%4)][1]-50, pallet[_pallet_ind][floor((x+y)%4)][2]-10, 0.2)
            rect(x, y, w, h)
            pop()
      }
      if (layer>1){
            shadow(0, 0, 0, color(0,0,0,0))
            for(let j = y; j < y + h; j += map(noise(x,y), 0, 1, 10, 30) * _zoom){
                  strokeWeight(_zoom * random(0.5, 9) * layer / maxLayer)
                  line(x, j, x+w, j)
                  push()
                  let lt
                  for(let t = x; t<x+w; t+=random(5,15)){
                        if (floor(t) % 2 == 0){
                              strokeWeight(random(1.5,3) * _zoom * random(0.5, 9) * layer / maxLayer)
                              line(lt,j,t,j)
                        }
                        lt = t
                  }
                  pop()
                  push()
                  stroke(pallet[_pallet_ind][floor((x+y)%4)][0], pallet[_pallet_ind][floor((x+y)%4)][1], pallet[_pallet_ind][floor((x+y)%4)][2]-50)
                  if (floor(random(1,50))% 7 != 0)                  {
                        if (_px > 0)
                              line(x, j, x - _px * _zoom, j - _py * _zoom)
                        else
                              line(x+w, j, x+w - _px * _zoom, j - _py * _zoom)
                  }
                  pop()
                  for(let s = 0; s <= 3; s++)
                  if (j == y){//seil
                        push()
                        strokeWeight(_zoom * (map(noise(j),y,y+h,1,5) * layer / maxLayer)*0.1)
                        line(x - _px * _zoom - s/2, j - _py * _zoom, x + w - _px * _zoom - s/2, j - _py * _zoom)
                  }
            }
      }
}
let backColor
function back(type){
      push()
      let cc = floor(_pallet_ind%4)
      backColor = color(pallet[_pallet_ind][cc][0], pallet[_pallet_ind][cc][1], pallet[_pallet_ind][cc][2]-10, 0.3) 
      if (_mode <= 5)
            stroke(0)
      else if (_mode < 11){
            background(backColor)
            stroke(pallet[_pallet_ind][floor((_mode*_pallet_ind)%4)][0], pallet[_pallet_ind][floor((_mode*_pallet_ind)%4)][1], pallet[_pallet_ind][floor((_mode*_pallet_ind)%4)][2]-50)
      }
      else{
            background(0)
            blendMode(DODGE)
            stroke(pallet[_pallet_ind][floor((_mode*_pallet_ind)%4)][0], pallet[_pallet_ind][floor((_mode*_pallet_ind)%4)][1], pallet[_pallet_ind][floor((_mode*_pallet_ind)%4)][2]-50)
      }
      strokeWeight(random(0.01,0.1))
      if (type == 1){
            for(let i=0;i<2000;i++){
                  let x0 = random(-1000,2000)
                  let r = random(100, 1300)
                  let x1 = x0 + r * cos(_degree)
                  let y1 = random(0,400) + r * sin(_degree)
                  line(x0, 0, x1, y1)
            }
      }
      else if (type == 2){
            strokeWeight(0.01)
            for(let i=0;i<5000;i++){
                  noFill()
                  circle(random(0,800), random(0,800), 600)
            }      
      }
      else if (type == 3){
            strokeWeight(0.02)
            for(let i=0;i<25000;i++){
                  noFill()
                  let a = random(0,800)
                  let b = random(0,800)
                  arc(a, b, 60, 60, HALF_PI, PI);
                  arc(a, b, 70, 70, PI, PI + QUARTER_PI);
                  arc(a, b, 80, 80, PI + QUARTER_PI, TWO_PI);
            }      
      }      
      let rx = random(100,700)
      let ry = random(100,400)

      for(let a=0; a<360; a+=0.5){
            push()
            strokeWeight(0.03)
            let x = rx + random(50,55) * cos(a)
            let y = ry + random(50,55) * sin(a)
            let x2 = x + random(10, 130) * cos(a) * _pallet_ind
            let y2 = y + random(10, 130) * sin(a) * _pallet_ind
            line(x, y, x2, y2)
            push()
            strokeWeight(0.1)
            if (_mode > 5)
                  stroke(backColor)
            else
                  stroke(90)
            line(rx, ry, x, y)
            pop()
            pop()
      }
      pop()
}
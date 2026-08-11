let pallet=[[[0,0,90], [0,0,85], [0,0,70], [0,0,65], [0,0,60], [0,0,55]],
[[44,91,99], [58,82,98], [83,63,82], [138,73,75], [0,0,70], [143,79,51]],
[[219,58,75], [286,33,75], [331,64,89], [359,43,90], [20,73,100], [40,69,100]],
[[188,100,45], [181,97,65], [147,10,84], [32,88,91], [24,82,71], [92,100,72]],
[[40,52,99], [0,0,80], [43,89,99], [21,82,95], [12,77,65], [221,62,71]],
[[15,58,96], [311,70,73], [317,47,82], [175,73,78], [0,0,70], [77,43,88]],
[[221,62,71], [0,0,90], [216,78,55], [351,99,44], [349,84,70], [51,54,98]],
[[214,64,33], [183,99,45], [166,76,40], [175,74,33], [146,63,56], [0,0,60]],
[[19,86,91], [29,90,92], [41,93,94], [47,87,93], [48,37,93], [0,0,50]],
[[19,86,70], [29,90,80], [30,93,90], [33,95,100], [25,90,93], [29,90,80]],
[[316,70,67], [274,63,55], [230,68,27], [237,65,42], [220,67,64], [0,0,40]],
[[87,67,69], [352,55,79], [0,85,74], [353,84,45], [278,60,49], [0,0,60]],
[[53,42,94], [56,87,93], [29,88,90], [21,80,73], [241,54,58], [0,0,50]],
[[138,73,75], [143,79,51], [352,93,57], [347,92,76], [0,0,65], [349,58,95]]]
function getPallet(value) {
      if      (value < 0.07) return 1
      else if (value < 0.14) return 2
      else if (value < 0.22) return 3
      else if (value < 0.29) return 4
      else if (value < 0.36) return 5
      else if (value < 0.43) return 6
      else if (value < 0.5) return 7
      else if (value < 0.57) return 8
      else if (value < 0.64) return 9
      else if (value < 0.71) return 10
      else if (value < 0.78) return 11
      else if (value < 0.87) return 12
      else if (value < 0.94) return 13
      else return 14
}

let pg, objs=[];
let ww, _mode, _colorMode, _thick, _type;
let c1=0,c1d=1, _shape

function getMode(value) {
      if (value < .33) return 1
      else if (value < .66) return 2
      else  return 3
}
function getColorMode(value) {
      if (value < .5) return 1
      else return 2
}
function getChangePath(value) {
      if (value < .33) return 100
      else if (value < .66) return 200
      else  return 300

}
function getThick(value) {
      if (value < 0.25) return 5
      else if (value < 0.5) return 7
      else if (value < 0.75) return 9
      else return 13
}
function getShapes(value) {
      if (value < 0.08) return 11
      else if (value < 0.16) return 14
      else if (value < 0.24) return 2
      else if (value < 0.32) return 3
      else if (value < 0.4) return 13
      else if (value < 0.49) return 5
      else if (value < 0.54) return 6
      else if (value < 0.67) return 7
      else if (value < 0.76) return 12
      else if (value < 0.87) return 9
      else return 10
}
window.$fxhashFeatures = {
"_shape": getShapes(fxrand()),
"_pallet_ind": getPallet(fxrand()),
"_type": getChangePath(fxrand()),
"_mode": getMode(fxrand()),
"_thick": getThick(fxrand()),
"_colorMode": getColorMode(fxrand())
}
function setup() {
      _shape=window.$fxhashFeatures._shape
      _pallet_ind=window.$fxhashFeatures._pallet_ind-1
      _type=window.$fxhashFeatures._type
      _mode=window.$fxhashFeatures._mode  
      _thick=window.$fxhashFeatures._thick   
      _colorMode=window.$fxhashFeatures._colorMode   
      colorMode(HSB)
      blendMode(DODGE)
      createCanvas(800, 800);
}

let hasChange = 0
let shapes=[83, 95.6, 95.7, 95.8, 95.9, 96, 96.1, 96.2, 121.5,128.2,128.3]
function draw() {
      background(0);
      noFill()
      //colorize()
      bkLines()
      colorize()
}
function colorize(){
      push()
      if (frameCount<10)
            blendMode(SOFT_LIGHT)
      else
            noLoop()
      stroke(0)
      strokeWeight(3)
      let c = (_pallet_ind + _shape + _thick) % 5
      let cc = color(pallet[_pallet_ind][c][0], pallet[_pallet_ind][c][1], pallet[_pallet_ind][c][2], 0.6)
      let i = -50
      let lastPos = [0,0,0,0,0,0,0,0,0,0,0]
      let cnt2=0
      while (i < 800){
            c = (_pallet_ind + cnt2) % 5
            let cc2 = color(pallet[_pallet_ind][c][0], pallet[_pallet_ind][c][1], pallet[_pallet_ind][c][2], 0.6)
            fill((_colorMode%2==0?cc:cc2))
            noiseDetail(random(10, 30)*_pallet_ind, 1/_shape)
            noiseSeed(random(10, 30)+_thick*_pallet_ind)
            randomSeed(_thick*_pallet_ind);
            let cnt=0
            beginShape()
            for(let j = -100; j <= 900; j+=100){
                  lastPos[cnt] += map(noise(cnt+ 2*(mouseX+mouseY), i), 0, 1, -10, 50) + random(10, 30)
                  curveVertex(j, lastPos[cnt])
                  cnt++
            }
            i += map(noise(_pallet_ind, _thick),0,1,60,120)
            cnt = lastPos.length-1
            for(let j = 900; j >= -100; j-=100){
                  let func = abs(tan((4+_shape)*cnt2/2)*20)
                  if (_shape % 4 == 1)
                        func = abs(sin((4+_shape)*cnt2/2)*20)
                  if (_shape % 4 == 2)
                        func = abs(atan((4+_shape)*cnt2/2)*20)
                  if (_shape % 4 == 3)
                        func = abs(cos((4+_shape)*cnt2/2)*20)
                  
                  lastPos[cnt] += map(noise(cnt2+ 2*(mouseX+mouseY), i*cnt), 0, 1, 50, 90) + random(-10, noise(cnt2+ mouseX*mouseY)*70) + func
                  curveVertex(j, lastPos[cnt])
                  cnt--
                  cnt2++
            }
            endShape(CLOSE)
            i += map(noise(_thick+ 2*(mouseX+mouseY), _pallet_ind),0,1,-20,90)
      }

}
function keyPressed() {
      if (key == 's') {
        save("wavymood.png");
      }
    }
function bkLines(){
      push()
      stroke(90)
      strokeWeight(4)
      for(let i = 0; i <= 800; i+=7){
            beginShape()
            for(let j = 0; j <= 800; j+=50){
                  noiseDetail(_pallet_ind, 1/_shape)
                  noiseSeed(_thick*_pallet_ind)
                  let deltai = map(noise(i,j),0,1,-2,2)
                  curveVertex(i+deltai, j)
                  if (j==0 || j == 800)
                        curveVertex(i+deltai, j)
            }      
            endShape()
      }
      pop()
 }
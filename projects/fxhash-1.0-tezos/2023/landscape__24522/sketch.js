let pallet=[
      [[188,100,45], [181,97,65], [147,10,84], [32,88,91],  [92,100,72]],
      [[201,62,71],  [216,78,55], [351,99,44], [349,84,70], [51,54,98]],
      [[19,86,70], [29,90,80], [30,93,90], [33,95,100],  [29,90,80]],
      [[87,67,69], [352,55,79], [0,85,74], [353,84,45], [278,60,49]],
      [[53,42,94], [56,87,93], [29,88,90], [21,80,73], [241,54,58]],
      [[138,73,75], [143,79,51], [352,93,57], [347,92,76],  [349,58,95]],
      [[255,215,0], [255,165,0], [255, 69, 0], [255, 0, 0], [220, 20, 60]],
      [[94, 83, 37], [243, 188, 46], [212, 91, 18], [155, 38, 5], [95, 60, 20]],
      [[34, 115, 56], [243, 153, 75], [191, 144, 124], [90, 55, 53], [243, 67, 69]],
      [[3, 47, 96], [23, 109, 174],[204, 204, 204], [221, 110, 110], [204, 0, 0]],
      [[255, 194, 54], [218, 127, 10], [166, 50, 11], [110, 0, 0], [36, 0, 2]],
      [[115, 29, 68], [217, 61, 134], [242, 162, 65], [217, 103, 4], [78, 117, 64]],
      [[0, 120, 255], [0, 236, 194], [255, 196, 95], [255, 138, 37], [255, 79, 31]],
      [[61, 36, 94], [175, 42, 43], [62, 86, 101], [118, 48, 72], [0, 0, 0]]]
      function getPallet(value) {
            if      (value < 0.3) return 0
            else if (value < 0.4) return 1
            else if (value < 0.45) return 2
            else if (value < 0.5) return 3
            else if (value < 0.55) return 4
            else if (value < 0.6) return 5
            else if (value < 0.65) return 6
            else if (value < 0.7) return 7
            else if (value < 0.75) return 8
            else if (value < 0.8) return 9
            else if (value < 0.85) return 10
            else if (value < 0.9) return 11
            else if (value < 0.95) return 12
            else  return 13
      }
      
let pg;
let ww, _mode, _rows;
let c1=0,c1d=1

function getMode(value) {
      if      (value < 0.15) return 1
      else if (value < 0.3) return 2
      else if (value < 0.45) return 3
      else if (value < 0.6) return 4
      else  return 5
}
function getRotateY(value) {
      if      (value < 0.2) return -1
      else if (value < 0.4) return -4
      else if (value < 0.5) return -7
      else if (value < 0.6) return -10
      else if (value < 0.7) return -13
      else if (value < 0.8) return -16
      else if (value < 0.9) return -20
      else  return 0
}

function getRotateX(value) {
      if      (value < 0.2) return -1
      else if (value < 0.4) return -3
      else if (value < 0.5) return -6
      else if (value < 0.6) return -9
      else if (value < 0.7) return 5
      else if (value < 0.8) return 10
      else if (value < 0.9) return -13
      else  return 0
}
function getZ1(value) {
      if      (value < 0.2) return -3
      else if (value < 0.4) return -2
      else if (value < 0.6) return 1
      else if (value < 0.8) return 2
      else  return 3
}
function getZ2(value) {
      if      (value < 0.2) return -3
      else if (value < 0.4) return -2
      else if (value < 0.6) return 1
      else if (value < 0.8) return 2
      else  return 3
}

function getZoom(value) {
      if      (value < 0.2) return -400
      else if (value < 0.4) return -200
      else if (value < 0.6) return 0
      else if (value < 0.8) return 200
      else  return -600
}
window.$fxhashFeatures = {
      "_rotateX": getRotateX(fxrand()),
      "_rotateY": getRotateY(fxrand()),
      "_zoom": getZoom(fxrand()),
      "_z1": getZ1(fxrand()),
      "_z2": getZ2(fxrand()),
      "_mode": getMode(fxrand()),
      "_pallet_ind": getPallet(fxrand()),
}
function setup() {
      _rotateY = window.$fxhashFeatures._rotateY
      _rotateX = window.$fxhashFeatures._rotateX
      _mode = window.$fxhashFeatures._mode
      _zoom = window.$fxhashFeatures._zoom
      _z1 = window.$fxhashFeatures._z1
      _z2 = window.$fxhashFeatures._z2
      _pallet_ind=window.$fxhashFeatures._pallet_ind
      colorMode(RGB)
      blendMode(BLEND)
      frameRate(300)
      createCanvas(800, 800, WEBGL);
      pixelDensity(2)
      randomSeed(_mode*_pallet_ind)
      noiseSeed(_mode*_pallet_ind)
      noiseDetail(_mode*_pallet_ind, 0.45)
      background(250)
      angleMode(DEGREES)
}
let y = -200, _z1, _z2, yk=0.05, cnt = 0, _zoom, _rotateY, _rotateX
function draw() {
      if (cnt > 1100) noLoop()
            for(let x = -100; x <= 100; x+=1){
                  randomSeed(_mode*_pallet_ind+y)
                  let clr = floor(abs(_mode+_z1+_z2)%4)
                  let mode = floor(abs(_mode+_pallet_ind)%3)
                  let dark = map(y, -300, 300, 0, 50)
                  if (mode <= 1)
                        stroke(0)
                  else 
                        stroke(color(pallet[_pallet_ind][clr][0], pallet[_pallet_ind][clr][1], pallet[_pallet_ind][clr][2]-dark))
                  strokeWeight(map(y,-350,350,0.8,0.1))
                  push()
                  let z
                  let dd = 0.1
                  //waves1
                        strokeWeight(map(random(y), -300, 300, 0.1, 2))
                        if (_mode == 1){ // ok
                              rotateY( _rotateY)
                              rotateX( _rotateX)
                              translate(-100, 0 ,0 )
                              z = (- abs(_z1)*sin(1*x) + abs(_z2)/cos(1*x)) * (abs(_z1) * (.35*y - .6*x))
                        }
                        else if (_mode == 2){ // ok
                              rotateY( _rotateY)
                              rotateX( _rotateX)

                              z = (.7*x/sin(2*x)) * tan(((y>0)?.5*y:0.2*y)-0.9*x)
                        }
                        else if (_mode == 3){

                              //rotateZ( 10*_rotateY)
                              rotateX( 0)
                              z =   (.7*x/pow(2, x) + cos(0.4*y)*_z2*_z1) * tan(((y>0)?.5*y:0.2*y)-0.9*x) + ( + abs(_z2)/cos(1*x)) * (abs(_z1) * (.35*y - .6*x))
                        }
                        else if (_mode == 4){
                              dd = 0.4
                              rotateY(_rotateY - 20)
                              rotateX(_rotateX)
                              let yy = (y<0) ? y/10 : 2.52*y
                              z =   (.7*x*_z1/exp(2, x/_z2) / log(0.4, y)*_z2*_z1) * tan(((yy>0)?.5*yy:0.02*(yy-0.002*x))-0.5*x) + ( + abs(_z2)/cos(1*x)) * (abs(_z1) * (.35*yy - .6*x))
                        }
                        else if (_mode == 5){ // ok
                              dd = (y<0)?((z>500)?0.0001:0.01):0.1
                              let rad = HALF_PI;
                              let ct = _z1/cos(rad);
                              let st = _z2*cos(y - x);
                              applyMatrix(
                              ct, 0.0,  st,  0.0,
                              0.0, 1.0, 0.0,  0.0,
                              -st, 0.0,  ct,  0.0,
                              0.0, 0.0, 0.0,  1.0
                              );       
                              z = (_z1*tan(x)/sin(y) - _z2/cos(x)) * (_z1 * (y - x))
                        }
            z += _zoom + noise(x) * 15
                  if (_mode == 1 ){
                        push()
                        translate(x*2, y, z/2)
                        sphere(dd)
                        translate(0.25, 0, 0); sphere(dd)
                        pop()
                        push()
                        translate(800/abs(_z1) - x*2, y, z/2)
                        sphere(dd)
                        translate(0.25, 0, 0); sphere(dd)
                        pop()

                  }
                  else if ( _mode == 3){
                        push()
                        translate(x*2, y, z/2)
                        sphere(dd)
                        translate(0.25, 0, 0); sphere(dd)
                        pop()
                        push()
                        translate(-x*2, y, z/2)
                        sphere(dd)
                        translate(0.25, 0, 0); sphere(dd)
                        pop()

                  } else{
                        translate(x*2, y, z/2)
                        sphere(dd)
                        translate(0.25, 0, 0); sphere(dd)
                  }
                  pop()
            }
      y += yk
      yk += 0.01 * (y<=0)?1:-1
      cnt++
}


let pallet=[[[9,23,92], [14,48,93], [6,37,95], [355,58,92], [335,100,100],[25,92,67]],
[[13,100,72], [347,100,88], [325,100,64], [205,100,88], [190,100,88], [168,97,77]],
[[24,95,87], [172,84,47], [208,58,56], [200,22,76], [9,85,70], [142,98,43]],
[[48,96,60], [45,96,98], [28,95,50], [44,77,80], [71,100,78], [92,100,72]],
[[21,94,100], [40,97,100], [11,100,60], [358,100,30], [69,96,26], [316,100,60]],
[[72,99,97], [159,95,73], [112,95,47], [308,94,65], [158,86,31], [316,100,60]],
[[192,100,81], [198,98,81], [97,71,60], [157,84,49], [120,60,38], [187,91,29]],
[[0,100,20], [349,99,10], [11,100,60], [21,100,79], [193,100,30], [215,100,60]]]
function getPallet(value) {
      if      (value < 0.1) return 1
      else if (value < 0.2) return 2
      else if (value < 0.3) return 3
      else if (value < 0.4) return 4
      else if (value < 0.5) return 5
      else if (value < 0.6) return 6
      else return 7
}
function getPattern(value) {
      if      (value < 0.2) return 0.2
      else if (value < 0.4) return 0.3
      else if (value < 0.6) return 0.4
      else if (value < 0.8) return 0.5
      else  return 0.8
}
function getResolutionX(value) {
      if      (value < 0.2) return 2
      else if (value < 0.4) return 3
      else if (value < 0.6) return 4
      else if (value < 0.8) return 5
      else  return 6
}
function getResolutionY(value) {
      if      (value < 0.2) return 2
      else if (value < 0.4) return 3
      else if (value < 0.6) return 4
      else if (value < 0.8) return 5
      else  return 6
}
function getFrame(value) {
      if      (value < 0.2) return 1
      else if (value < 0.4) return 2
      else if (value < 0.6) return 3
      else if (value < 0.8) return 4
      else  return 5
}


window.$fxhashFeatures = {
      "_pallet_ind": getPallet(fxrand()),
      "_pattern": getPattern(fxrand()),
      "_frame": getFrame(fxrand()),
      "_resX": getResolutionX(fxrand()),
      "_resY": getResolutionY(fxrand()),
}
let _pallet_ind, _pattern, ww=600, _frame, _resX, _resY

let buffer, longEdge
var tree = [], _treeCount
var max_dist = 200
var min_dist = 120
var treeThick = 10, backpattern=0
function setup() {
      _resX=window.$fxhashFeatures._resX
      _resY=window.$fxhashFeatures._resY
      _frame=window.$fxhashFeatures._frame
      _pallet_ind=window.$fxhashFeatures._pallet_ind
      _pattern=window.$fxhashFeatures._pattern
      ww = 800
      createCanvas(800, 800, WEBGL);
      stroke(0);
      strokeWeight(1);
      colorMode(HSB)
      rectMode(CENTER);
      frameRate(30)
      angleMode(RADIANS);
      background(0)

}
var  r=350, dr=0, sx=0, sy=0, ti=0, img=0
function draw() {
      dr++
      if (r>=50){
      push()
      lights()
      noiseDetail(_pallet_ind*dr, _pattern);
      noiseSeed( _pallet_ind + _pattern*dr );
      translate(0,0,0)
      noStroke()
      for(var it = 0; it < 9; it++ ){
            push()
                  fill(pallet[_pallet_ind][floor(dr%5)][0], pallet[_pallet_ind][floor(dr%5)][1], pallet[_pallet_ind][floor(dr%5)][2]-3*it)
                  rotateY(PI/map(noise(dr),0,1,5,10))
                  if (_pattern*10%2 == 0)
                        rotateZ(PI/map(noise(dr),0,1,5,10))
                  rotateX(0.1*it*PI/30)
                  sphere(r, _resX, _resY)
            pop()
            for(var it2 = 0; it2 < 3; it2++ ){
                  push()
                        fill(pallet[_pallet_ind][floor(dr%5)][0], pallet[_pallet_ind][floor(dr%5)][1]-2*it2, pallet[_pallet_ind][floor(dr%5)][2]-5*it)
                        rotateY(PI/map(noise(dr),0,1,5,10))
                        if (_pattern*10%2 == 0)
                              rotateZ(PI/map(noise(dr),0,1,5,10))
                        rotateX(0.1*it*PI/(30+it2))
                        sphere(r, _resX, _resY)
                  pop()
            }
      }
      r -= 10
      pop()
      }
      else{
            if (img == 0)
                  img = get(0,0,800,800)
            // for(var i = 0; i < 800; i += 10){
                  // for(var j = 0; j < 800; j += 2){
                  //       let pc = img.get(ti, j)
                  //       if (pc[0]+pc[1]+pc[2]>0){
                  //             console.log(pc)
                  //             for(var a = 0; a<10; a+=1){
                  //                   //let x = ti + 2 * sin(a)
                  //                   //let y = j + 2 * cos(a)
                  //                   img.set(ti,j+a,lerp(pc, color(pc[0], pc[1], pc[2]+5), a/10))
                  //             }
                  //             img.updatePixels()
                  //       }
                  // }
      
            //}
            push()
            texture(img)
            translate(0,0,0)
            noStroke()
            plane(800,800)
            pop()
            //image(img, 0, 0)
      }
      if(ti>800)
            noLoop()
      else
            ti+=2

}

function keyPressed() {
      if (key == 's') {
        save("webzones.png");
      }
    }

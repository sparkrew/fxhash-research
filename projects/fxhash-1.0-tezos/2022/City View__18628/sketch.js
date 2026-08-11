let pallet=[[[0,0,90], [0,0,85], [0,0,80], [0,0,75], [0,0,70], [0,0,65]],
[[0,0,30], [347,100,88], [325,100,64], [205,100,88], [0,0,70], [168,97,77]],
[[24,95,87], [172,84,47], [208,58,56], [0,0,80], [9,85,70], [142,98,43]],
[[48,96,60], [45,96,98], [28,95,50], [44,77,80], [71,100,78], [92,100,72]],
[[21,94,100], [0,0,80], [11,100,60], [358,100,30], [0,0,70], [316,100,60]],
[[72,99,97], [159,95,73], [112,95,47], [308,94,65], [0,0,70], [316,100,60]],
[[192,100,81], [0,0,90], [97,71,60], [157,84,49], [120,60,38], [187,91,29]],
[[45,100,99], [0,0,85], [46,100,85], [0,0,70], [0,0,65], [50,100,70]]]
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
      if      (value < 0.2) return 1
      else if (value < 0.4) return 2
      else if (value < 0.6) return 3
      else if (value < 0.8) return 4
      else  return 5
}
function getFrame(value) {
      if      (value < 0.25) return 1
      else if (value < 0.5) return 2
      else if (value < 0.75) return 3
      else  return 4
}



window.$fxhashFeatures = {
      "_pallet_ind": getPallet(fxrand()),
      "_pattern": getPattern(fxrand()),
      "_frame": getFrame(fxrand()),

}
let _pallet_ind, _pattern, ww=600, _frame,_xCount,_yCount,_zCount

let buffer, longEdge
var tree = [], _treeCount
var max_dist = 200
var min_dist = 120
var treeThick = 10, backpattern=0
function setup() {

      _frame=window.$fxhashFeatures._frame
      _pallet_ind=window.$fxhashFeatures._pallet_ind-1
      _pattern=window.$fxhashFeatures._pattern
      longEdge=max(windowWidth, windowHeight);
      buffer=longEdge*1.2;
      //console.log(_pallet_ind)
      ww = 800
      createCanvas(800, 800);
      pg = createGraphics(800,800)
      pg.colorMode(HSB)
      pg.pixelDensity(2)
      pg2 = createGraphics(800,800)
      pg2.colorMode(HSB)
      pg2.pixelDensity(2)
      stroke(0);
      strokeWeight(1);
      colorMode(HSB)
      rectMode(CENTER);
      pixelDensity(2)
      frameRate(30)
      angleMode(RADIANS);
}
var  pg2, dr=0, sx=70, sy=0, w =100, c
function draw() {
      dr++

      if (dr <= 5)
            makePattern(1)
      noiseDetail(_pallet_ind*dr, 0.5);
      noiseSeed( _pallet_ind + _pattern*dr );
      stroke(0)
      if (sx < 750)
            sx += map(noise(dr),0,1,w,w+40+floor(sy%2)*50)
      if (sx>750 && sy < 1200){
            sy += map(noise(dr, sy),0,1,100,240)
            sx = map(noise(dr),0,1,floor(sy%2)*50+70,100)
      }
      w = map(sin(dr),-1,1,90,170)
      let h = map(noise(dr, sx, 2*dr),0,1,90,330)
      c = color(pallet[_pallet_ind][floor(dr%5)][0], min(pallet[_pallet_ind][floor(dr%5)][1],50), min(pallet[_pallet_ind][floor(dr%5)][2],50))
      fill(color(0,0,20,0.4))
      rect(sx-3, sy+3, w, -h)
      fill(c)
      if (floor(sx%7) == 0)
            dtree(sx, sy, w, h)
      rect(sx, sy, w, -h)
      ceiling(sx, sy, w, h)
      windows(sx, sy, w, h)
      dtree(sx, sy, w, h)
      strokeWeight(2)
      stroke(c)
      let deltax=w/2, deltay=h/2+10

      // /////////
      deltax=-w/2
      if(sy>1200)
            noLoop()
      makePattern(2)
      // frame
      push()
      noStroke()
      // left
      fill(255)
      rect(-10, 400, 110, 800)
      fill(0)
      rect(-10, 400, 100, 800)
      //right
      fill(255)
      rect(810, 400, 110, 800)
      fill(0)
      rect(810, 400, 100, 800)
      //top
      fill(255)
      rect(400 , -10, 720, 120)
      fill(0)
      rect(400, -10, 720, 110)
      //bottom
      fill(255)
      rect(400 , 820, 720, 120)
      fill(0)
      rect(400, 820, 720, 110)
      if (_frame == 2 || _frame == 4){
            fill(255)
            rect(400 , 420, 720, 50)
            fill(0)
            rect(400, 420, 720, 40)
      }
      if (_frame == 3 || _frame == 4){
            fill(255)
            rect(400 , 405, 50, 720)
            fill(0)
            rect(400, 405, 40, 720)
            if (_frame == 4)
                  rect(400, 420, 720, 40)
      }

      pop()
}
function makePattern(type){
      if (type == 1){
            for(var i=0; i<4000; i++){
                  strokeWeight(0.01)
                  stroke(color(0,0,map(sin(i),-1,1,20,60)))
                  circle(random()*800, random()*800, 800)
            }
      }
      else if (type == 2){
            for(var i=0; i<1000; i++){
                  strokeWeight(0.005)
                  stroke(color(0,0,map(sin(i),-1,1,40,100)))
                  circle(random()*800, random()*800, 800)
            }
      }

}
function dtree(sx, sy, w, h){
      push()
      let deltaX
      if(sx<400)
            deltaX = -2*w/3
      else
            deltaX = 2*w/3
      rect(sx+deltaX, sy+h/4, 1.5, -h/2)
      fill(0)
      let r = 50, x0 = sx+deltaX, y0 = sy
      noiseDetail(_pallet_ind*dr, .9);
      if (dr%4<=1){
            beginShape()
            for(var a=0;a<360;a+=5){
                  push()
                  fill(0)
                  stroke(0)
                  let x = x0 - r/4 + r/2 * sin(a) + 9 * noise(a)
                  let y=  y0 - r/6 + r/2 * cos(a) + 9 * noise(a, dr)
                  curveVertex(x, y)
                  pop()
            }
            endShape()
      }
      if (dr%4==1){
            ellipse(x0, y0-r/6, r*0.8, 1.4*r)
            ellipse(x0, y0-r/6, r*0.6, 1.6*r)
      }
      noFill()
      strokeWeight(2)
      let dinc1=1, dinc2=1
      if (dr%4<=1)
            stroke(255)
      else if (dr%4>1){
            stroke(0)
            r = r*2
            dinc1=0.5
            dinc2=1
            }
      if (dr%3==0){
            dinc1=1.5
            dinc2=2
      }
      else if (dr%3==1){
            dinc1=2
            dinc2=3
      }
      let r0
      for(var p = 0; p<4+dinc1; p+=dinc1){
            if (dr%4>1)
                  r0 = floor(map(noise(p),0,1,r*0.8,r*1.2 ))
            else
                  r0 = r
            let x = x0 + r0/3 * sin(p+dinc2)
            let y = y0 + r0/3 * cos(p+dinc2)
            point(x, y)
            beginShape()
            curveVertex(x0, y0+r0/3)
            curveVertex(x0, y0+r0/3)
            curveVertex(x0, y0+1.8*r0/3)
            curveVertex(lerp(x0, x, 0.3), y0+r0/4)
            curveVertex(lerp(x0, x, 0.6), y0+r0/6)
            curveVertex(x, y)
            curveVertex(x, y)
            endShape()
            if (dr%4>1){
                  for(var s = 0; s<10; s++){
                        let xx = lerp(lerp(x0, x, 0.6),x,s/10)
                        let yy = lerp(y0+r0/6,y,s/10)
                        if (s%2 == 0)
                              curve(xx, yy-10, xx, yy, xx-10, yy-10, xx-5, yy-30)
                        else
                              curve(xx, yy-10, xx, yy, xx+10, yy-10, xx+5, yy-30)
                              //line(xx, yy, xx+10, yy-10)
                  }
            }
      }
      pop()
}
function windows(sx, sy, w, h){
      noFill()
      strokeWeight(1)
      stroke(0)
      if (w < 100){
            for(var j=sy-h/2+30; j<sy+h/2-20; j+=40){
                  rect(sx, j, 30, 20)
                  rect(sx, j, 15, 20)
            }
      }
      else if (w < 150){
            for(var j=sy-h/2+40; j<sy+h/2-20; j+=35){
                  arc(sx-w/2+40, j, 30, 20, PI, TWO_PI , CHORD);
                  rect(sx-w/2+40, j+5, 30, 10)
                  rect(sx-w/2+40, j+5, 0.5, 10)
            }
            for(var j=sy-h/2+40; j<sy+h/2-20; j+=35){ 
                  arc(sx+30, j, 30, 20, PI, TWO_PI , CHORD);
                  rect(sx+30, j+5, 30, 10)
                  rect(sx+30, j+5, 0.5, 10)
            }
      }
      else{
            for(var j=sy-h/2+40; j<sy+h/2-20; j+=35){
                  rect(sx-w/2+30, j, 30, 20)
                  rect(sx-w/2+30, j-5, 0.5, 10)
                  rect(sx-w/2+30, j, 30, 0.5)
            }
            for(var j=sy-h/2+40; j<sy+h/2-20; j+=35){
                  rect(sx-w/3+50, j, 30, 20)
                  rect(sx-w/3+50, j, 0.5, 20)
                  rect(sx-w/3+50, j, 30, 0.5)
            }
            for(var j=sy-h/2+40; j<sy+h/2-20; j+=35){
                  rect(sx+50, j, 30, 20)
                  rect(sx+50, j, 0.5, 20)
                  rect(sx+50, j, 30, 0.5)
            }
      }
}
function ceiling(sx, sy, w, h){
      push()
      fill(0)
      if ( w > 150){
            quad(sx-w/2-10, sy-h/2,sx-w/map(noise(dr),0,1,1,7), sy-h/2-30,sx+w/map(noise(dr),0,1,1,7), sy-h/2-30,sx+w/2+10, sy-h/2)
      }
      else if (floor(sx % 3) == 0)
            triangle(sx-w/2-10, sy-h/2,sx+w/map(noise(dr),0,1,1,7), sy-h/2-30,sx+w/2+10, sy-h/2)
      else if (floor(sx % 3) == 1 )
            quad(sx-w/2-10, sy-h/2,sx-w/map(noise(dr),0,1,1,7), sy-h/2-30,sx+w/map(noise(dr),0,1,1,7), sy-h/2-30,sx+w/2+10, sy-h/2)
      else 
            arc(sx, sy-h/2, w+25, 70, PI, TWO_PI , CHORD);
      if (w > 150){
            stroke(255)
            triangle(sx-w/4-10, sy-h/2,sx, sy-h/2-50,sx+w/4+10, sy-h/2)
            fill(255)
            stroke(0)
            if (dr % 3 == 0)
                  stroke(255)
            arc(sx, sy-h/2-20, 30, 20, PI, TWO_PI , CHORD);
            rect(sx, sy-h/2-15, 30, 10)
            rect(sx, sy-h/2-15, 0.5, 10)
      }
      pop()
}

function keyPressed() {
      if (key == 's') {
        save("cityview.png");
      }
    }

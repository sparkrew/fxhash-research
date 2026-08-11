      function getBuilding(value) {
            if (value < .1) return 1
            else if (value < .2) return 2
            else if (value < .3) return 3
            else if (value < .4) return 4
            else return 5
            }
      function getRotate(value) {
            if (value < .1) return 4
            else if (value < .2) return 5
            else if (value < .3) return 6
            else if (value < .4) return 7
            else return 50
            }
      function getC(value) {
            return value
            }
      function getRotateDouble(value) {
            if (value < .5) return 1
            else return 2
            }
      window.$fxhashFeatures = {
            "_c": getC(fxrand()),
            "_building": getBuilding(fxrand()),
            "_rotated": getRotateDouble(fxrand()),
            "_rotate": getRotate(fxrand())
      }
      let theShader, pg;
      let ww, _building, _rotate, _rotated, _c;
      let c1=0, c1d=1
function preload(){
  theShader = loadShader('./shader.vert', './shader2.frag');
}
function setup() {
  _c=map(window.$fxhashFeatures._c,0,1,0,360)
  _building=window.$fxhashFeatures._building  
  _rotated=window.$fxhashFeatures._rotated   
  _rotate=window.$fxhashFeatures._rotate    
  ww = 800;
  createCanvas(ww,ww,WEBGL);
  colorMode(HSB);
  pixelDensity(1);
  pg = createGraphics(ww, ww, WEBGL)

  pg.pixelDensity(1)
}

function draw() {
  c1+=c1d
  if (c1<=0 || c1>=360)
      c1d*=-1
  theShader.setUniform("u_resolution", [width, height])
  theShader.setUniform("u_time", frameCount)
  theShader.setUniform("u_mouse", [mouseX, mouseY])
  pg.background(color(0,200,200))
  pg.rect(0,0,ww,ww);
  pg.shader(theShader);
  //translate(x, y, 0)
  push()
  texture(pg)
noStroke()
  translate(0,0,-400)
  plane(2000, 2000,2)
  pop()
    if ((mouseX > 0) && (mouseX < 800) &&
    (mouseY > 0) && (mouseY < 800)) {
      rotateX((400-mouseX )/1500.)
      rotateY((400-mouseY )/1500.)
    }
  else{
      rotateX((mouseX )/1500.)
      rotateY((mouseY )/1500.)
    
  }
  rotateZ(frameCount/500)
  
  rotateX(PI/2)
  //heram
  push()
    translate(270,-50,0)
    for(let i=0; i<120; i+=7){
      fill(color(c1,100,abs(100-i)))
      if(115-i>0)
        box(115-i, 115-i,1)
      translate(0,0,6)
    }
  pop()
  push()
    translate(270,-50,0)
    for(let i=0; i<120; i+=7){
      fill(color(c1,100,abs(100-i)))
      if(115-i>0)
        box(115-i, 115-i,1)
      translate(0,0,-6)
    }
  pop()
  // ////////////////
  //heram2
  push()
    translate(-230,-190,0)
    for(let i=0; i<120; i+=4){
      fill(color(c1,100,abs(100-i)))
      if(115-i>0)
        box(90-i*.8, 90-i*.8,1)
      translate(0,0,10)
    }
  pop()
  push()
    translate(-230,-190,0)
    for(let i=0; i<120; i+=4){
      fill(color(c1,100,abs(100-i)))
      if(115-i>0)
        box(90-i*.8, 90-i*.8,1)
      translate(0,0,-10)
    }
  pop()
  // ////////////////
  push()
    translate(150,10,0)
    translate(0,0,-70)
    for(let i=0; i<140; i+=5){
      fill(color(c1,100,abs(100-i)))
      box(100, 100, 1)
      translate(0,0,5)
    }
  pop()
  push()
    translate(-90,0,-170)
    stroke(0)
    strokeWeight(1)
    for(let i=0; i<340; i+=5){
      fill(color(_c,100,50+i/2))
      box(50, 100,.5)
      fill(color(360-_c,100,30))
      box(54, 104,3,.5)
      translate(0,0,5)
    }

  pop()
  push()
    noStroke()
    translate(100,-120,-170)
    rotateX(PI/2)
    for(let i=0; i<340; i+=5){
      fill(color(_c,100,100))
      cylinder(40, 2,16)
      fill(color(_c,100,70))
      cylinder(42, 1,16)
      translate(0,5,0)
    }

  pop()
  
  push()
    translate(-190,50,-100)
    fill(color(_c,100,100))
    for(let i=0; i<200; i+=5){
      box(70, 80,1)
      translate(0,0,5)
    }
  pop()
  push()
    noStroke()
    translate(-280,50,-30)
    rotateX(PI/2)
  
    for(let i=0; i<200; i+=15){
      fill(color(0,100,60))
      cylinder(10, 1)
      fill(color(0,100,100))
      cylinder(8, 2, 3)
      translate(0,5,0)
    }
  pop()



  push()
  noStroke()
  rotateY(frameCount/200)
  fill(color(c1,100,abs(100)))
  cylinder(70, 205,_rotate);
    push()
    fill(color(360-c1,100,abs(100)))
    rotateX(PI/160)
    cylinder(68, 205,_rotate);
    fill(color(360-c1,100,80))
    rotateX(-2*PI/160)
    cylinder(68, 205,_rotate);
    pop()
  pop()
  if (_rotated == 2){
  push()
    noStroke()
    if (_rotate == 6)
      rotateY(PI/5.5+frameCount/200)
    else if (_rotate == 5)
      rotateY(PI/4.5+frameCount/200)
    else if (_rotate == 7)
      rotateY(PI/6.5+frameCount/200)
    else if (_rotate == 4)
      rotateY(PI/3.5+frameCount/200)
    fill(color(c1,100,abs(100)))
    cylinder(70, 205,_rotate);
      push()
      fill(color(360-c1,100,abs(100)))
      rotateX(PI/160)
      cylinder(68, 205,_rotate);
      fill(color(360-c1,100,80))
      rotateX(-2*PI/160)
      cylinder(68, 205,_rotate);
      pop()
    pop()
    
  }

  push()
  fill(color(120,100,40))
  translate(0,-100,0)
  box(700,400, 4)
  pop()
}
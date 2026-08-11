let theShader, pg;
let ww, _building, _rotate, _rotated, _c;
let c1=0,c1d=1

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

function preload(){
  theShader = loadShader('./shader.vert', './shader2.frag');
}
function setup() {
  _c=map(window.$fxhashFeatures._c,0,1,0,360)
  _building=window.$fxhashFeatures._building  
  _rotated=window.$fxhashFeatures._rotated   
  _rotate=window.$fxhashFeatures._rotate    
  colorMode(HSB)
  pixelDensity(1.5)
  blendMode(ADD)
  ww = 800
  createCanvas(ww, ww, WEBGL);
  pg = createGraphics(ww, ww, WEBGL)
  pg.pixelDensity(1.5)
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
  translate(0,0,-400)
  noStroke()
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
  // /////////////////// quarter1
  // /////////////////// quarter1
  // /////////////////// quarter1
  push()
    translate(270,-50,0)
    for(let i=0; i<120; i+=7){
      fill(color(c1,100,abs(100-i)))
      if(115-i>0)
        box(115-i, 115-i,1)
      translate(0,0,-6)
    }
  pop()
    push()
    noStroke()
    translate(100,-120,-170)
    rotateX(PI/2)
    for(let i=0; i<170; i+=5){
      fill(color(_c,100,100))
      cylinder(40, 2,16)
      fill(color(_c,100,70))
      cylinder(42, 1,16)
      translate(0,5,0)
    }

  pop()
  // {
  push()
    noStroke()
    translate(150,-50,-90)
    for(let i=0; i<70; i+=5){
      fill(color(90-c1,100,abs(100-i)))
      box(80, 80, 1)
      translate(0,0,7)
    }
  pop()
  push()
    noStroke()
    translate(150,-50,-94)
    for(let i=0; i<70; i+=5){
      fill(color(360-c1,100,abs(100-i)))
      box(80, 80, 1)
      translate(0,0,7)
    }
  pop()  
  // }
  // ////////////////////quarter2
  // ////////////////////quarter2
  // ////////////////////quarter2
  push()
    rotateY(-PI/2)
    translate(-230,-150,0)
    for(let i=0; i<100; i+=4){
      fill(color(c1,100,abs(100-i)))
      if(115-i>0)
        box(90-i*.9, 90-i*.9,1)
      translate(0,0,10)
    }
  pop()

  //{
  push()
    noStroke()
    translate(-55, -40,-280)
    fill(color(abs(250-c1),100,100))
    for(let i=0; i<30; i+=5){
      box(100, 80,1)
      translate(0,0,8)
    }
  pop()  
  push()
    noStroke()
    translate(-55, -40,-274)
    fill(color(abs(c1),100,100))
    for(let i=0; i<30; i+=5){
      box(100, 80,1)
      translate(0,0,8)
    }
  pop()  
  //}

  push()
    noStroke()
    translate(-5,-50, -121)
    rotateX(PI/2)
    rotateZ(PI/2)
  
    for(let i=0; i<210; i+=15){
      fill(color(0,170,60))
      cylinder(20, 3)
      fill(color(0,170,100))
      cylinder(25,4, 3)
      translate(0,5,0)
    }
  pop()    
  // /////////////////// quarter3
  // /////////////////// quarter3
  // /////////////////// quarter3
  //{
  push()
    translate(-110,-80,4)
    noStroke()
    for(let i=0; i<90; i+=5){
      rotateZ(i*PI/10)
      fill(color(220-c1,100,50+i/2))
      box(50, 100,.5)
      translate(0,0,8)
    }

  pop()  
  push()
    translate(-110,-80,0)
    noStroke()
    for(let i=0; i<90; i+=5){
      rotateZ(i*PI/10)
      fill(color(50-c1,100,50+i/2))
      box(50, 100,.5)
      translate(0,0,8)
    }

  pop()  
  //}
  
  push()
    noStroke()
    translate(-280,-50,5)
    rotateX(PI/2)
  
    for(let i=0; i<290; i+=15){
      fill(color(abs(180-c1),100,60))
      cylinder(25, 3)
      fill(color(abs(180-c1),100,100))
      cylinder(24,4, 3)
      translate(0,5,0)
    }
  pop()  
  
  push()
    translate(-220,-60,0)
    for(let i=0; i<120; i+=7){
      fill(color(c1,100,abs(100-i)))
      if(115-i>0)
        box(95-i*.85, 95-i*.85,1)
      translate(0,0,6)
    }
  pop()
  
  // ///////////////////quarter4
  // ///////////////////quarter4
  // ///////////////////quarter4
  //{
  push()
    noStroke()
    rotateY(PI/2)
    translate(-140, -50,4)
    fill(color(c1,100,100))
    for(let i=0; i<80; i+=5){
      box(70, 80,1)
      translate(0,0,8)
    }
  pop()  
  push()
    noStroke()
    rotateY(PI/2)
    translate(-140, -50,0)
    fill(color(360-c1,100,100))
    for(let i=0; i<80; i+=5){
      box(70, 80,1)
      translate(0,0,8)
    }
  pop()  

  
  push()
    noStroke()
    //rotateY(PI/2)
    translate(60, -50, 110)
    fill(color(50-c1,100,100))
    for(let i=0; i<40; i+=5){
      box(120, 80,1)
      translate(0,0,9)
    }
  pop()  
  //}
  //{
  push()
  noStroke()
    rotateY(-PI/2)
    translate(340,-150,0)
    for(let i=0; i<80; i+=4){
      fill(color(165-c1,100,abs(100-i)))
      if(115-i>0)
        box(90-i*1.1, 90-i*1.1,1)
      translate(0,0,-10)
    }
  pop()
  push()
    noStroke()
    rotateY(-PI/2)
    translate(340,-150,4)
    for(let i=0; i<80; i+=4){
      fill(color(c1,100,abs(100-i)))
      if(115-i>0)
        box(90-i*1.1, 90-i*1.1,1)
      translate(0,0,-10)
    }
  pop()
  //}
  push()
    noStroke()
    translate(5,-50, 230)
    rotateX(PI/2)
    rotateZ(PI/2)
  
    for(let i=0; i<210; i+=15){
      fill(color(0,170,60))
      cylinder(20, 3)
      fill(color(140,170,100))
      cylinder(25,4, 3)
      translate(0,-5,0)
    }
  pop()    

  // ///////// Center
  // ///////// Center
  // ///////// Center

  push()
  noStroke()
  rotateY(frameCount/200)
  fill(color(c1,100,abs(100)))
  cylinder(55, 205,_rotate);
    push()
    fill(color(360-c1,100,abs(100)))
    rotateX(PI/160)
    cylinder(48, 205,_rotate);
    fill(color(360-c1,100,80))
    rotateX(-2*PI/160)
    cylinder(48, 205,_rotate);
    pop()
  pop()

    // ///////// base
    // ///////// base
    // ///////// base
  
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
      cylinder(48, 205,_rotate);
      fill(color(360-c1,100,80))
      rotateX(-2*PI/160)
      cylinder(48, 205,_rotate);
      pop()
    pop()
    
  }

  push()
  fill(color(120,100,40))
  translate(0,-100,0)
  box(700,200, 2)
  rotateY(PI/2)
  box(700,200, 2)
  pop()
}
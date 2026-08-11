let s = 1;
let bgColor 
let bgColorRGBA;
let shifters = [];
let dt = 1.0;

let X_MIN,X_MAX,Y_MIN,Y_MAX

/*
let pallete = [
  ["Permanent Green Light" ,"#5A8A0E" , [83,90,54]],
  ["Naples Yellow Red", "#e3ae9a" , [16,32,89]],
  ["Titanium White", "#f2f2f2" , [0,0,95]],
  ["Ultramarine Blue" , "#27487d" , [217,69,49]],
  ["Cobalt Green Light" , "#aabfb9" , [163,11,75]],
  ["Cobalt Blue Light" , "#a5c2c9" , [192,18,79]],
  ["Salmon", "#e0cbbf" , [22,15,88]],
  ["Cadmium Red Light" ,"#e63720" , [7,86,90]],
  ["Cadmium Orange", "#f5741d" , [24,88,96]], 
  ["Sap Green", "#33520d" , [87,84,32]],
  ["Soft Pink", "#edc2c2" , [0,18,93]],
  ["Rosa", "#e39e9a", [3,32,89]],
  ["Creme", "#eddfcc" , [34,14,93]],
  ["Cadmium Red Light" , "#e64820" , [12, 86 , 90]], 
  ["Cadmium Yellow" , "#e8b81c" , [46,88,91]],
  ["Titan Buff" , "#e3d29a" , [46,32,89]],
  ["Cobalt Red Dark", "#660803", [3,97,40]]  
]
*/


let pallete = [
  ["Brown 1" , "#87693b" , "0"],
  ["Brown 2" , "#af8c3e" , "1"],
  ["Yellow 1" , "#fffec1" , "2"],
  ["Yellow 2" , "#dbb724" , "3"],
  ["Brown 3" , "#cfb998" , "4"],
  ["Salmon" , "#fde6bd" , "5"],
  ["Yellow 3" , "#facd4b" , "6"],
  
  ["Red 1" , "#e14d45" , "7"],
  ["Red 2" , "#7a0704" , "8"],
  ["Red 3" , "#640000" , "9"],
  ["Red 4" , "#c40101" , "a"],
  ["Pink 1" , "#f07e91" , "b"],

  ["Blue 1" , "#028e96" , "c"],
  ["Blue 2" , "#24b8c5" , "d"],
  ["Green" , "#405c08" , "e"],
  ["Pink 2" , "#f5aa9f" , "f"]

]


function getRandomColor(){
  let l = pallete.length;
  let i = Math.floor(fxrand()*l);
  return pallete[i][1];
}

function getRandomColorReplace(){
  let l = pallete.length;
  let i = Math.floor(fxrand()*l);
  let el = pallete.splice(i , 1)[0]
  return el[1];
}

function updateBounds(){
  X_MIN = -50/s;
  Y_MIN = -50/s;
  X_MAX=(width+50)/s;
  Y_MAX=(height+50)/s;
}


function setup() {
  let w = max(windowWidth,windowHeight)
  createCanvas(windowWidth,windowHeight );
  s = w/400;
  updateBounds();



  bgColor = color(getRandomColorReplace());

  let maxShifters = Math.floor(fxrand()*5)+1;

  for(let i = 0 ; i < maxShifters ; i++){
    let shifter = shifterRandomizer(color( getRandomColor() ))
    shifters.push ( shifter )
  }
  
 

  //noStroke()
  noFill();
  strokeWeight(0.5);
  //blendMode(DIFFERENCE);
  background(bgColor);

}

function rInt(max){
  return Math.floor(fxrand()*max)
}

function windowResized() {
  var w = max(windowWidth,windowHeight)
  resizeCanvas(windowWidth,windowHeight);
  s = w/400;
  updateBounds();
  background(bgColor);

  if(!isLooping())loop();
}




function draw() {
  //background(bgColor);
  //updatePixels();

  //noStroke()
 // blendMode(BURN)


  if (keyIsDown(187)) {
    if(dt < 2.0)dt += 0.01;
  } else if (keyIsDown(189)) {
    if(dt > 0.51)dt -= 0.01;
  }

  let r = red(bgColor)
  let g = green(bgColor)
  let b = blue(bgColor)

  bgColorRGBA = color(r,g,b, 32 * dt);

  
  fill(bgColorRGBA);
  rect(0,0,width,height);
 //blendMode(BLEND)

  scale(s)

  let mx = mouseX/s;
  let my = mouseY/s;
  if(isFxpreview){
    mx = -1000;
    my = -1000;
  }
  for(let i = 0 ; i < shifters.length ; i++){
    let shifter = shifters[i]
    shifter.draw(mouseX/s,mouseY/s);
  }

  
  //if(frameCount % 1 == 0) loadPixels();
  if(isFxpreview && frameCount == 120){
    fxpreview();
    noLoop();
  }
}

function keyPressed() {
  if (keyCode === 32) {
    if( isLooping() ) noLoop();
    else loop();
  } 

  if (key === 's') {
    saveCanvas('BriefFramgemts', 'png');
  }
}


function shifterRandomizer(color){
  if(fxrand() > .5)return new Shifter(color);
  else return new Liner(color);
}

class Liner{
  constructor(color){
    this.color = color;
    this.balls = [];
    
    for(let i = 0 ; i < int(fxrand()*8) + 4; i++){
      this.balls.push(new Ball_Liner());
    }
  }
  
  draw(mx,my){
    let balls = this.balls;
    
    stroke(this.color)
    beginShape();
    
    for(let i = 0 ; i < balls.length ; i++){
      balls[i].anim(mx,my);
      balls[i].draw();
    }
    
    
    endShape();
  }
  
}

class Shifter{
  constructor(color){
    this.color = color;
    this.balls = [];
    
    for(let i = 0 ; i < int(fxrand()*8) + 4 ; i++){
      this.balls.push(new Ball_Shifter());
    }
  }
  
  draw(mx,my){
    let balls = this.balls;
    
    stroke(this.color)
    beginShape();
    
    for(let i = 0 ; i < balls.length ; i++){
      balls[i].anim(mx,my);
      balls[i].draw();
    }
    balls[0].draw();
    balls[1].draw();
    balls[2].draw();
    endShape();
  }
  
}

class Ball{
   constructor() {
    this.x = (fxrand()*(width+200)-100)  /s;
    this.y = (fxrand()*(height+200)-100)  /s;
     
    this.vx = fxrand()-0.5;
    this.vy = fxrand()-0.5;

    this.ovx = this.vx;
    this.ovy = this.vy;

    this.radius = fxrand()*15 + 2;
  }
  
  draw(){
    circle(this.x ,this.y , this.radius);
  }
  
  anim(mx,my){
    let dx = Math.abs(this.x - mx)
    if( dx < 20){
      let dy = this.y - my;
      let d = dx*dx+dy*dy
      if(d<400){
        this.vx += (this.x - mx)*0.01
        this.vy += (this.y - my)*0.01

        //also give it a new target speed
        this.ovx = fxrand()-0.5;
        this.ovy = fxrand()-0.5;
      }
    }

    this.vx += (this.ovx - this.vx)*0.01
    this.vy += (this.ovy - this.vy)*0.01

    this.x += this.vx * dt
    this.y += this.vy * dt
    
    if(this.x > X_MAX){
      this.ovx = - abs(this.ovx);
    }
    
    if(this.x < X_MIN){
      this.ovx = abs(this.ovx);
    }
    
    if(this.y > Y_MAX){
      this.ovy = - abs(this.ovy);
    }
    
    if(this.y < Y_MIN){
      this.ovy = abs (this.ovy);
    }
  }
}

class Ball_Shifter extends Ball{
  draw(){
    curveVertex(this.x , this.y)
    circle(this.x ,this.y , this.radius);
  }
}

class Ball_Liner extends Ball{
  draw(){
    vertex(this.x , this.y)
    //circle(this.x ,this.y , this.radius);
  }
}
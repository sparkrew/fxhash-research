let canvasSize;
let canv;
let rainDropH;
let rain = [];
let cloud;
let Ac = 1;
let bgC,cloudC,txtC;
let sun=null,sunFollowsCloud;
let myMouseReleased = false;
let mouseJustPressed = false;

let myFont;
function preload() {
  myFont = loadFont("./Inconsolata.ttf");
}

let gSpeed = window.$fxhashFeatures["cloud speed"] == "slow" ? 0.1 : window.$fxhashFeatures["cloud speed"] == "fast" ? 7 : 3;
let gColor = window.$fxhashFeatures["color"] == "gray" ? 0 : window.$fxhashFeatures["color"] == "sunset" ? 1 : 2;

if(true){
  console.log(window.$fxhashFeatures["color"]+" "+gColor);
  console.log(window.$fxhashFeatures["cloud speed"]+" "+gSpeed);
}

function setup() {
  noCursor();
  canvasSize = getCanvasSize();
  canv = createCanvas(canvasSize, canvasSize);
  cloud = new Cloud();
  chooseColor(); // includes setSun()... 
  noStroke();
  rainDropH = height/32;
  textAlign(CENTER);
  textFont(myFont);
  textSize(rainDropH);
}

function draw(){
  background(bgC);
  if(sun!=null){
    if(sunFollowsCloud)
      sun.move(cloud.x+cloud.r*2,
               cloud.y-cloud.r*2);
      sun.display();
  }

  //rain
  fill(txtC);
  rain.forEach(word => {
    word.move();
    word.display();
    if(word.y > height+rainDropH){
      rain.shift();
    }
  });
  //cloud
  fill(cloudC);
  cloud.move();
  cloud.display();

  if(mouseIsPressed){
    rain.push(new Word());  
  }

  if(!mouseIsPressed && mouseJustPressed){
    //mouseReleased!
    console.log("released!");
    fxpreview();
    noLoop();
  }
  //update mouseJustPressed();
  mouseJustPressed = mouseIsPressed;

}

function getCanvasSize(){
  return min(windowHeight,windowWidth);
}

class Cloud {
  constructor() {
    this.x = width/2;
    this.y = height/3.5;
    this.cumulus = [];
    this.speed = (gSpeed/(gSpeed*(width/37)));
    this.r = width/22;
    this.sF = 2;
  }

  move() {
    this.x += (mouseX-this.x)*this.speed; //eassing motion
  }

  display() {
    ellipse(this.x-this.r*this.sF, this.y-this.r/2, this.r*2, this.r*2);
    ellipse(this.x+this.r*this.sF, this.y-this.r/2, this.r*2, this.r*2);
    rect(this.x-this.r*this.sF,
      abs(this.y-this.r/2),
      this.r*this.sF*2,
      this.r);
    ellipse(this.x-this.r, this.y-this.r*this.sF/1.5, this.r*this.sF, this.r*this.sF);
    ellipse(this.x+this.r/2, this.y-this.r*this.sF/1.5, this.r*this.sF*1.5, this.r*this.sF*1.5);
  }
}

class Word {
  constructor() {
    this.x = cloud.x;
    this.y = cloud.y;
    this.h = rainDropH;
    this.string = ""; 
    for(let i = 0; i < 8; i++){
      this.string = this.string+floor((fxrand()*10))%2;
    }
    this.speed = 0.1;
    this.ac = Ac;
  }

  move() {
    this.speed = this.speed*Ac;
    this.y += this.speed*this.h*7;
  }

  display() {
    text(this.string, this.x,this.y);
  }

  rain(){
    rain.push(new Word());
  }
}

function chooseColor(){
  switch(gColor){
    case 0: //gray
      bgC = color(110);
      cloudC = color(210);
      txtC = color(240);
      break;
    case 1: //sunset
      bgC = color(255, 153, 0);
      cloudC = color(255, 200, 204);
      txtC = color(240);
      setSunsetSun();
      break;
    case 2: //sunny
      bgC = color(0, 221, 255);
      cloudC = color(250);
      txtC = color(150, 254, 255);
      setSunnySun();
      break;
  }  
}

function setSunnySun(){
  //(x,y,r,df,l,rayN,strW,cr,cg,cb)
  sun = new Sun(width/2, //x
               height/3.5, //y
               width*0.2, //r 
               0.01, //df
               width*0.02, //l
               16, //rayN
               width*0.01, //strW
               255, //cr
               195, //cg
               0); //cb
  sunFollowsCloud = false;  
}

function setSunsetSun(){
  //(x,y,r,df,l,rayN,strW,cr,cg,cb)
  sun = new Sun(cloud.x+cloud.r, //x
               cloud.y+cloud.r, //y
               width*0.08, //r 
               0.01, //df
               width*0.02, //l
               16, //rayN
               width*0.01, //strW
               255, //cr
               195, //cg
               0); //cb
  sunFollowsCloud = true;  
}

class Sun {
  constructor(x,y,r,df,l,rayN,strW,cr,cg,cb) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.f = 0;
    this.df = df;
    this.rPad = 0.8;
    this.l = l;
    this.a = 0;
    this.da = TWO_PI/rayN;
    this.strW = strW;
    this.c = color(cr,cg,cb);
  }

  move(x,y) {
    this.x = x;
    this.y = y;
  }

  display() {
    this.f+=this.df;
    fill(this.c);
    push();
    translate(this.x,this.y);
    rotate(this.f);
    noStroke();
    let R = this.r+sin(this.f*5)*this.r/6;
    ellipse(0,0,R,R);
    stroke(this.c);
    strokeWeight(this.strW);
    while(this.a < TWO_PI+1){
      push();
      translate(this.r*this.rPad,0);
      line(0,0,this.l+(sin(this.f*this.a)*this.l/2),0);
      pop();
      rotate(this.a);
      this.a+=this.da;
    }
    this.a = 0;
    pop();
  }
}

function windowResized() {
  if(isLooping()){
  canvasSize = getCanvasSize();
  resizeCanvas(canvasSize, canvasSize);
  cloud = new Cloud();
  chooseColor(); // setSun() inside... 
  noStroke();
  rainDropH = height/32;
  textSize(rainDropH);
  }
}

function keyPressed() {
  if (key === 's') {
    getSnapshot();
  }
}

function getSnapshot(){
  save( "bitStream_" + frameCount + ".jpg");  
}

function snap(){
  fxpreview(); 
}
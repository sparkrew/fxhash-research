//Author: Deniz Ekiz
//Detailed license can be found at license.txt
var ParticleCount = fxrand()*2000+2000;
var particles = [ParticleCount];
var time = 0;
z = false;
function setup() {

  background(0);
  noiseSeed(fxrand()*200);
  randomSeed(99);
  frameRate(24);
  createCanvas(1024, 1024);
  noStroke();
  for (let i=0; i<ParticleCount; i++) {
    var angle = 30; //Starting Angle
    var dir = createVector(cos(angle), sin(angle));
    var speed = fxrand()*2+0.9;
    var pos = createVector(fxrand()*width*1.2, fxrand()*height, 2);
    particles[i]= new Particle(pos, dir, speed,i);
  }
}

function windowResized() {
   //for (let i=0; i<ParticleCount; i++) {
   //  particles[i].updateResize();
  // }
 // resizeCanvas(windowWidth, windowHeight);

  
}
function draw() {
  time+= 0.002;
  fill(0,20);
  noStroke();
  rect(0, 0, width, height);
  for (let i=0; i<particles.length; i++) {
    particles[i].run();
  }
  if(time>0.1 && !(z)){
    fxpreview();
    z= true;
   
  }
}

class Particle{
  constructor(mypos,mydir,myspeed,mycolor){
    this.pos = mypos;
    this.dir = mydir;
    this.speed = myspeed;
    this.color = mycolor;
  }
  
  updateResize(){
    var xr = this.pos.x/width;
    var yr = this.pos.y/height;
    this.pos.x = this.pos.x*windowWidth;
    this.pos.y = this.pos.y*windowHeight;
    
  }
  
  run() {
    this.move();
    this.IsOut();
    this.updatePos();
  }
  move(){
    let angle=noise(time+this.pos.x/width, time+this.pos.y/height)*TWO_PI*2; 
    this.dir.x = cos(angle);
    this.dir.y = sin(angle);
    var vel = this.dir.copy(); 
    vel.mult(this.speed*0.5);
    this.pos.add(vel); 
  }
  IsOut(){
    if (this.pos.x<0 || this.pos.x>width || this.pos.y<0 || this.pos.y>height) {   
      this.pos.x = fxrand()*width*1.2;
      this.pos.y = fxrand()*height;
    }
  }
  updatePos(){
    fill(50,255*this.color/ParticleCount,255);
    rect(this.pos.x, this.pos.y,width/75,width/75);
  }
}


window.$fxhashFeatures = {
    ParticleAmount: ParticleCount
};


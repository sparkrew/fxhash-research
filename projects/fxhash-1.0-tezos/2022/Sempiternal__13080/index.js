// Wander (Perlin Noise)
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/ujsR2vcJlLk
// https://thecodingtrain.com/learning/nature-of-code/5.5-wander.html

// Main: https://editor.p5js.org/codingtrain/sketches/LVtVlS52Q
// With Sliders: https://editor.p5js.org/codingtrain/sketches/uxemh7FGc
// Deleting Positions: https://editor.p5js.org/codingtrain/sketches/EWHjy--Os
// 3D: https://editor.p5js.org/codingtrain/sketches/t6sFXmVrk
// Displacement: https://editor.p5js.org/codingtrain/sketches/VdHUvgHkm
// Perlin Noise: https://editor.p5js.org/codingtrain/sketches/XH2DtikuI

let vehicle;
let vehicle2;



function startpoint(min, max) {
  return fxrand() * (max - min) + min;
}
function startpoint1(min, max) {
  return fxrand() * (max - min) + min;
}
function framestop(min, max) {
  return fxrand() * (max - min) + min;
}
function rectwidth(min, max) {
  return fxrand() * (max - min) + min;
}
function rectwidth2(min, max) {
  return fxrand() * (max - min) + min;
}

function strokeWeightrand(min, max) {
  return fxrand() * (max - min) + min;
}
function thisrandom(min, max) {
  return fxrand() * (max - min) + min;
}
function rectrandom(min, max) {
  return fxrand() * (max - min) + min;
}
function rectrandom2(min, max) {
  return fxrand() * (max - min) + min;
}
function rand1(min, max) {
  return fxrand() * (max - min) + min;
}
function rand1(min, max) {
  return fxrand() * (max - min) + min;
}




function setup() {
  createCanvas(1500, 1500);
  noiseSeed((fxrand() * 100))
  colorMode(HSB)
  
  t = 0;
  
  satrand=(fxrand() * 10)

  // fillarray=[]
  fillarray=["rgb(231,213,194)","rgb(247,237,224)","rgb(216,192,190)","rgb(197,189,189)","rgb(219,219,219)","rgb(236,235,235)","rgb(197,189,189)","rgb(211,206,207)","rgb(196,184,177)","rgb(201,176,162)","rgb(185,179,172)","rgb(160,159,156)","rgb(233,220,217)","rgb(221,220,218)","rgb(168,168,168)","rgb(173,160,160)","rgb(165,160,157)","rgb(61,60,60)"]
  
  maxchoice=(fxrand() * 100)
  
  if (maxchoice<4){
  maxspeedarray=[2,3] 
  }
  else{
  maxspeedarray=[4,5,6]   
  }
  
  rectlength1=[100,150,200,250,300]
  rectlength2=[600,650,700,750,800]
  
  rectlengthchoice1=(rectlength1[Math.floor(fxrand() * rectlength1.length)])
  
  rectlengthchoice2=(rectlength2[Math.floor(fxrand() * rectlength2.length)])
  
  rectlength3=[100,150,200,250,300]
  rectlength4=[600,650,700,750,800]
  
  rectlengthchoice3=(rectlength3[Math.floor(fxrand() * rectlength3.length)])
  rectlengthchoice4=(rectlength4[Math.floor(fxrand() * rectlength4.length)])
  
  
  thisrarray=[8,12,16,24,32]
  
  backgroundhuearray=[0,5,10,15,20,25,30]

  backbright=[20,22,25,27,30,80,82,85,87,90]  

  background((backgroundhuearray[Math.floor(fxrand() * backgroundhuearray.length)]),satrand,(backbright[Math.floor(fxrand() * backbright.length)]))

  rectfill=(fillarray[Math.floor(fxrand() * fillarray.length)])
  
  rectfill2=(fillarray[Math.floor(fxrand() * fillarray.length)])

  mxspeed=(maxspeedarray[Math.floor(fxrand() * maxspeedarray.length)])
  
  thisr=(thisrarray[Math.floor(fxrand() * thisrarray.length)])
  
  startpoint=startpoint(1,6)

  startpoint1=startpoint1(1,6)

  vehicle = new Vehicle(width /startpoint, height / startpoint1);
  framestop=Math.floor(framestop(900,1200))
  
  rectwidthchoice=(fxrand() * 100)
  
  if (rectwidthchoice<50){
  rectwidth=rectwidth(10,60)
  rectwidth2=rectwidth2(10,60)
  }
  else{
  rectwidth=rectwidth(10,60)
  rectwidth2=rectwidth
  }

  
  console.log(rectfill)
  rectrand=(fxrand() * 100)
  rectrand2=(fxrand() * 100)
  framerand=[1,2,4,6]
  framerand2=[3,5,7]
  framescount=(framerand[Math.floor(fxrand() * framerand.length)])
  framescount2=(framerand[Math.floor(fxrand() * framerand.length)])

  extralines=(fxrand() * 100)
  blendchoice=(fxrand() * 100)
}

function draw() {

  vehicle.wander();
  vehicle.update();
  vehicle.show();
  vehicle.edges();
  
  strokeWeight(1.5);


  if(frameCount % framestop == 0){ 
  noLoop()   
} 
  
}





/////////////////////////////////////////////////////
//////////////////////////////////////////////////////
////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////




// Wander (Perlin Noise)
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/ujsR2vcJlLk
// https://thecodingtrain.com/learning/nature-of-code/5.5-wander.html

// Main: https://editor.p5js.org/codingtrain/sketches/LVtVlS52Q
// With Sliders: https://editor.p5js.org/codingtrain/sketches/uxemh7FGc
// Deleting Positions: https://editor.p5js.org/codingtrain/sketches/EWHjy--Os
// 3D: https://editor.p5js.org/codingtrain/sketches/t6sFXmVrk
// Displacement: https://editor.p5js.org/codingtrain/sketches/VdHUvgHkm
// Perlin Noise: https://editor.p5js.org/codingtrain/sketches/XH2DtikuI

class Vehicle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
    this.acc = createVector(0, 0);
    
    this.maxSpeed = mxspeed
    this.maxForce = 0.2;
    this.r = thisr

    this.xoff = 0;

    this.currentPath = [];
    this.paths = [this.currentPath];
  }

  wander() {

    let angle = noise(this.xoff) * TWO_PI * 2;
    let steer = p5.Vector.fromAngle(angle);
    steer.setMag(this.maxForce);
    this.applyForce(steer);
    this.xoff += 0.01;
  }

  evade(vehicle) {
    let pursuit = this.pursue(vehicle);
    pursuit.mult(-1);
    return pursuit;
  }

  pursue(vehicle) {
    let target = vehicle.pos.copy();
    let prediction = vehicle.vel.copy();
    prediction.mult(10);
    target.add(prediction);
    fill(0, 255, 0);
    circle(target.x, target.y, 16);
    return this.seek(target);
  }

  arrive(target) {
    // 2nd argument true enables the arrival behavior
    return this.seek(target, true);
  }

  flee(target) {
    return this.seek(target).mult(-1);
  }

  seek(target, arrival = false) {
    let force = p5.Vector.sub(target, this.pos);
    let desiredSpeed = this.maxSpeed;
    if (arrival) {
      let slowRadius = 100;
      let distance = force.mag();
      if (distance < slowRadius) {
        desiredSpeed = map(distance, 0, slowRadius, 0, this.maxSpeed);
      }
    }
    force.setMag(desiredSpeed);
    force.sub(this.vel);
    force.limit(this.maxForce);
    return force;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    this.currentPath.push(this.pos.copy());

    // Count positions
    let total = 0;
    for (let path of this.paths) {
      total += path.length;
    }

    if (total > 200 || (total > 10 && millis() > 3000)) {
      this.paths[0].shift();
      if (this.paths[0].length === 0) {
        this.paths.shift();
      }
    }
  }

  show() {
    angleMode(DEGREES);
    strokeWeight(strokeWeightrand(.1,.2));

    push();
    
    translate(this.pos.x, this.pos.y);

    
    rotate(this.vel.heading());

    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)-thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)-thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)-thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)-thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)-thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)-thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
    
   if (extralines<30) {
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
   }
    
   else if (extralines<60) {
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
   }    
    
  else if (extralines<100) {
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
    line(-this.r+thisrandom(200,1000), sin(-this.r / 3)+thisrandom(200,1000), -this.r-thisrandom(200,1000), (this.r / 3)+thisrandom(200,1000) );
   }       
    
    
    

    if(frameCount % framescount == 0){  
    fill(rectfill)
    push()
            
    if(frameCount % 1 == 0){ 
    blendMode(DIFFERENCE)
    } 

    if (rectrand2<50){    
    rect(-this.r-10, (-this.r / 3)-100, 30,700,100)
    }
    else{
    rect(-this.r-10, (-this.r / 3)-100,rectwidth,rectrandom(rectlengthchoice3,rectlengthchoice4),50)   
    }
      
    pop()
} 
   
    
    if(frameCount % 3 == 0){ 
      if (blendchoice<50){
    blendMode(EXCLUSION)
      }
      else {
    blendMode(DIFFERENCE)
      }
    fill("rgb(236,235,235)")
      
    push()
          
    if (rectrand<50){
    rect(-this.r-10, (-this.r / 3)-100, rectwidth2,rectrandom2(rectlengthchoice1,rectlengthchoice2),100)
    }
    else {
    rect(-this.r-10, (-this.r / 3)-100, rectwidth2,700,50)
    }
    pop()
} 
    
    noFill()    
    pop();
    
    
  }

  edges() {
    let hitEdge = false;
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
      hitEdge = true;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
      hitEdge = true;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
      hitEdge = true;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
      hitEdge = true;
    }

    if (hitEdge) {
      this.currentPath = [];
      this.paths.push(this.currentPath);
    }
  }
}

class Target extends Vehicle {
  constructor(x, y) {
    super(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(5);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    // fill("#F063A4");
    push();
    translate(this.pos.x, this.pos.y);
    circle(0, 0, this.r * 2);
    pop();
  }
}






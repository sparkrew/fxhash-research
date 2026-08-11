var face = 9; //face size
var faceY = 100; //starting y coordinate for face
var w = 2; //stroke weight
var eye = {LX: 0, LY: 0, RX: 0, RY: 0}; // eye coordinates
var lipX; // lip x position
var lipY; //lip y position
var cycle = true;

function setup() {
  let seed=floor(999999*fxrand());
randomSeed(seed);
noiseSeed(seed);
    createCanvas(640, 640);
     colors = [];
  //color scheme 1
  colors.push("#CE6187");// 0 pink 
  colors.push("#D96B62");// 3 green
  colors.push("#F5CE3E");// 4 white
   colors.push("#2096C4");// 4 white
  colors.push("#AB5ABE");// 1 purple
  colors.push("#4EF33A");// 2 blue
    colors.push("#3AE5F3");// 4 white
   colors.push("#BBF33A");// 4 white
  colors.push("#F33AC1");// 1 purple
  colors.push("#3AF391");// 2 blue
  
  //colour scheme 2
//   colors.push("#415AA6");// 0 pink 
//   colors.push("#A7BAF2");// 3 green
//   colors.push("#F2B749");// 4 white
//    colors.push("#F2AA52");// 4 white
//   colors.push("#F2834A");// 1 purple
//   colors.push("#F393A6");// 2 blue
  
  //colour scheme 3
  //  colors.push("#FF7674");// 0 pink 
  // colors.push("#8BC7AA");// 3 green
  // colors.push("#FFD11E");// 4 white
  //  colors.push("#FF6937");// 4 white
  // colors.push("#FEC0C1");// 1 purple
  // colors.push("#F393A6");// 2 blue
    noLoop();
    frameRate(1);
  noLoop();
}

function draw() {
    noStroke();
  dots();
  grids();  
  circles();
  wave();
  lines();
}


  
function lines(){
  for (let k=0; k<6; k++){
    push();
    stroke(0);
    noFill();
    strokeWeight(5);
    translate(random(width-100), random (height-100));
     let rot=random(PI);
  rotate(rot);
    let l=random(70, 180);
    for (let i=0; i<30; i+=10){
       line(0, i, l, i);
    }
   
  }
  pop();
}

function wave(){

  for (let k=0; k<3; k++){
    push();
        translate(random(width), random (height));
        let rot=random(PI);
        rotate(rot);
        stroke(255);
        strokeWeight(6);
        let limit=random(13, 10);
        for (let i=0; i<limit*PI; i+=radians(1)){
        let y=sin(i)*6;
        point(i*5, y);
      }
    pop();
  }
  
 
}

function circles(){
  for (let k=0; k<10; k++){
    push();
    translate(random(width-100), random (height-100));
     let size=random(10, 50);
    fill(random(colors));
    ellipse(0, 0, size);
    noFill();
    stroke(0);
    strokeWeight(5);
    ellipse (4, 4, size);
    pop();
  }
}

function grids(){
    for (let k=0; k<5; k++){
  push();
 
  translate(random(width-10), random (height-10));
  let r=int(random(2, 6));
  let c=int(random(2, 6));
  let size=random(7, 10);
  let rot=random(PI/2);
  rotate(rot);
  stroke(255);
  strokeWeight(5);
 fill(random(colors));
  for (let i=0; i<r; i++){
    for (let j=0; j<c; j++){
      rect (i*size, j*size, size);
    }
  }  
  pop();
  }            
  
}

function dots() {
  push();
  let sep = 3;
  fill(255);
  let w = width / sep;

  for (let i = 0; i < sep; i+=1) {
    for (let j = 0; j < sep; j+=1) {
      let x = i * w;
      let y = j * w;
      if (noise(x * 0.01, y * 0.01) < 0.1) 
              ellipse(x, y, 3);
    }
  }
  pop();


  background(random(colors));

    for (var i = 0; i < 1; i++) {
      var turt = makeTurtle(290 + i * 550, faceY);
      turt.penDown();
      turt.setColor("black");

      //draw face features
      faceBrowsNose(turt);
      eyes(turt);
      glasses(turt);
      lips(turt);
    }

}



//draws face, eyebrows and nose
function faceBrowsNose(ttl) {
  //FACE
  for (var i = 0; i < 180; i++) {
    turtlepressure(ttl);
    ttl.right(360 / 100 + random(-2.5, 2.5));
    ttl.forward(face + random(-face / 3, face / 3));
  }
  ttl.left(20);

  //LEFT EYEBROW
  for (var i = 0; i < 50; i++) {
    turtlepressure(ttl);
    ttl.right(360 / 100);
    ttl.forward(2 + random(-2, 2));
    //save coordinates at top of brow to assign eye position
    if (i == 25) {
      eye.LX = ttl.x;
      eye.LY = ttl.y + random(10, 25);
    }
  }
  //LEFT NOSE
  for (var i = 0; i < 10; i++) {
    turtlepressure(ttl);
    ttl.right(random(-0.5, .5));
    ttl.forward(1);
  }
  //BOTTOM NOSE
  for (var i = 0; i < 50; i++) {
    turtlepressure(ttl);
    ttl.left(360 / 100);
    ttl.forward(0.5 + random(-1, 1));
    //save bottom of nose coordinates for lip position
    if (i == 25) 
      lipY = ttl.y + random (20, 30);
      lipX = ttl.x + random (-30, 10);
  }
  //RIGHT NOSE
  for (var i = 0; i < 10; i++) {
    turtlepressure(ttl);
    ttl.right(random(-0.5, .5));
    ttl.forward(1);
  }
  //RIGHT EYEBROW
  for (var i = 0; i < 50; i++) {
    turtlepressure(ttl);
    ttl.right(360 / 100);
    ttl.forward(2 + random(-2, 2));
    if (i == 25) {
      eye.RX = ttl.x;
      eye.RY = ttl.y  + random(10, 25);
    }
  }
}


//draws eyes
function eyes(ttl) {
    ttl.penUp();
    ttl.goto(eye.LX, eye.LY);
    ttl.penDown();

    //left eye
    for (var i = 0; i < 100; i++) {
      turtlepressure(ttl);
      ttl.right(360 / 50);
      ttl.forward(.5 + random(-0.75, 0.75));
    }

    ttl.penUp();
    ttl.goto(eye.RX, eye.RY);
    ttl.penDown();

    //right eye
    for (var i = 0; i < 100; i++) {
      turtlepressure(ttl);
      ttl.right(360 / 50);
      ttl.forward(.5 + random(-0.75, 0.75));
    }
}


//draws glasses
function glasses(ttl) {
  ttl.penUp();
  ttl.goto(eye.LX + random(10, 18), eye.LY);
  ttl.penDown();

  //lens 1
  ttl.face(90);
  for (var i = 0; i < 100; i++) {
    turtlepressure(ttl);
    ttl.right(360 / 50 + random(-4, 4));
    ttl.forward(2 + random(-0.75, 0.75));
  }

  ttl.penUp();
  ttl.goto(eye.RX - random(10, 18), eye.RY);
  ttl.face(330);
  ttl.penDown();

  //lens 2
  ttl.face(270);
  for (var i = 0; i < 100; i++) {
    turtlepressure(ttl);
    ttl.right(360 / 50 + random(-4, 4));
    ttl.forward(2 + random(-0.75, 0.75));
  }
}


//draws lips
function lips(ttl) {

  ttl.penUp();
  ttl.goto(lipX, lipY);
  ttl.penDown();
  ttl.face(310);

  //TOP LEFT
  for (var i = 0; i < 20; i++) {
    turtlepressure(ttl);
    ttl.right(360 / 100);
    ttl.forward(1 + random(-1, 1));
  }
  ttl.left(50);

  //TOP RIGHT
  for (var i = 0; i < 20; i++) {
    turtlepressure(ttl);
    ttl.right(360 / 100);
    ttl.forward(1 + random(-1, 1));
  }
  ttl.face(180);

  //LINE
  for (var i = 0; i < 30; i++) {
    turtlepressure(ttl);
    ttl.forward(1);
    ttl.right(random(-2, 2));
  }
  ttl.face(90);

  //BOTTOM LIP
  for (var i = 0; i < 50; i++) {
    turtlepressure(ttl);
    ttl.left(360 / 100);
    ttl.forward(1 + random(-1, 1));
  } 
}


//varies stroke weight to create "hand drawn" effect
function turtlepressure(turtle) {
  w += random(-0.4, 0.4);
  if (w <=0) w = 0.4;
  else if (w>= 3) w = 2.7;
  turtle.setWeight(w);

} 

/////////////////////////////////////////////////////////////////
function turtleLeft(d) {
    this.angle -= d;
}


function turtleRight(d) {
    this.angle += d;
}


function turtleForward(p) {
    var rad = radians(this.angle);
    var newx = this.x + cos(rad) * p;
    var newy = this.y + sin(rad) * p;
    this.goto(newx, newy);
}


function turtleBack(p) {
    this.forward(-p);
}


function turtlePenDown() {
    this.penIsDown = true;
}


function turtlePenUp() {
    this.penIsDown = false;
}


function turtleGoTo(x, y) {
    if (this.penIsDown) {
      stroke(this.color);
      strokeWeight(this.weight);
      line(this.x, this.y, x, y);
    }
    this.x = x;
    this.y = y;
}


function turtleDistTo(x, y) {
    return sqrt(sq(this.x - x) + sq(this.y - y));
}


function turtleAngleTo(x, y) {
    var absAngle = degrees(atan2(y - this.y, x - this.x));
    var angle = ((absAngle - this.angle) + 360) % 360.0;
    return angle;
}


function turtleTurnToward(x, y, d) {
    var angle = this.angleTo(x, y);
    if (angle < 180) {
        this.angle += d;
    } else {
        this.angle -= d;
    }
}


function turtleSetColor(c) {
    this.color = c;
}


function turtleSetWeight(w) {
    this.weight = w;
}


function turtleFace(angle) {
    this.angle = angle;
}


function makeTurtle(tx, ty) {
    var turtle = {x: tx, y: ty,
                  angle: 0.0, 
                  penIsDown: true,
                  color: color(128),
                  weight: 1,
                  left: turtleLeft, right: turtleRight,
                  forward: turtleForward, back: turtleBack,
                  penDown: turtlePenDown, penUp: turtlePenUp,
                  goto: turtleGoTo, angleto: turtleAngleTo,
                  turnToward: turtleTurnToward,
                  distanceTo: turtleDistTo, angleTo: turtleAngleTo,
                  setColor: turtleSetColor, setWeight: turtleSetWeight,
                  face: turtleFace};
    return turtle;
}
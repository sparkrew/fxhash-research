var sphereArr = [];
var sphereMax = 255;
var sphereMin = 64;
var glowImg;
let glowImg2;
let glowImg3;
var camX = 0;
var camY = 0;
var camZ = 750;
var camRad = 1200;
var camPos = 0;

let p5seed = 0;

let frameLimiter;

let cR;
let cG;
let cB;

function setup() {
     p5Seed = $fx.rand() * 999999;
    randomSeed(p5Seed);
	glowImg = loadImage('./glow.png');
	glowImg2 = loadImage('./glow2.png');
	glowImg3 = loadImage('./glow3.png');
  
  frameLimiter = random(18,256);
  
	createCanvas(2048, 2048, WEBGL);
	perspective(radians(45), width / height, 0, 3000);
    cR = int(random(1,160));
    cG = int(random(1,160));
    cB = int(random(1,160));
	noStroke();
	for (var i = 0; i < int(random(sphereMin,sphereMax)) ; i++) {
		sphereArr[i] = new PointObj(i);
	}
}

function draw() {
  background(cR, cG, cB);
	camCordUpdate();
	camera(camX, camY, camZ, 0, 0, 0, 0, 1, 0);
  let sphereOrBox = int(random(1,4));
  
  
  if (sphereOrBox == 1) {	sphereArr.forEach(spObj => { spObj.drawPlane(); spObj.drawPlane2(); spObj.drawPlane3();  spObj.drawBox();  spObj.update();  });
	sphereArr.sort(zOrder);}
  
  if (sphereOrBox == 2){	sphereArr.forEach(spObj => { spObj.drawPlane(); spObj.drawPlane2(); spObj.drawPlane3();  spObj.drawSphere();  spObj.update();  });
	sphereArr.sort(zOrder);}
    
  if (sphereOrBox == 3){	sphereArr.forEach(spObj => { spObj.drawPlane(); spObj.drawPlane2();  spObj.update();  });
	sphereArr.sort(zOrder);}
  

  if (frameCount>+frameLimiter){  
    $fx.preview();
    noLoop();
}
}

function zOrder(obj1, obj2) {
	return obj2.distToCam - obj1.distToCam;
}

function camCordUpdate() {
	camX = cos(radians(camPos)) * camRad;
	camZ = sin(radians(camPos)) * camRad;
	camY = 0;
}

class PointObj {
	constructor(depth) {
		this.x = random(-5, 5);
		this.y = random(-5, 5);
		this.z = random(-5, 5);
		this.xmove = random(-5, 5);
		this.ymove = random(-5, 5);
		this.zmove = random(-5, 5);
		this.distToCam = 200;
	}
  	drawPlane() {
		push();
		translate(-this.x, -this.y, -this.z);
		rotateY(radians(180 - camPos));
		texture(glowImg);
      
		plane(int(random(500,1500)), int(random(150,200)));
		pop();
	}
  
  drawPlane2() {
		push();
		translate(this.x, this.y, this.z);
		rotateY(radians(180 - camPos));
		texture(glowImg2);
      
		plane(int(random(1000,1500)), int(random(100,200)));
		pop();
	}

   	drawPlane3() {
		push();
		translate(2*this.x, 2*this.y, 2*this.z);
		rotateY(radians(180 - camPos));
		texture(glowImg3);
		plane(int(random(1000,1500)), int(random(100,200)));
		pop();
	}
  
  
 drawSphere() {
		push();
		translate(this.x, this.y, this.z);
		ambientLight(120);
		pointLight(int(random(196,256)), int(random(196,256)), int(random(196,256)), random(-width/2, width), random(-height/2, height), int(random(-300,300)));
		ambientMaterial(int(random(160,256)), int(random(160,256)), int(random(160,256)));
		sphere(int(random(2,25)));
		pop();
	}
  
  
  
 drawBox() {
		push();
		translate(this.x, this.y, this.z);
		ambientLight(120);
		pointLight(int(random(196,256)), int(random(196,256)), int(random(196,256)), random(-width/2, width), random(-height/2, height), int(random(-300,300)));
		ambientMaterial(int(random(160,256)), int(random(160,256)), int(random(160,256)));
		box(int(random(20,128)),int(random(20,32)),int(random(20,96)), 124,124);
		pop();
   
	}
  
  
  
	update() {
		this.x = this.x + this.xmove;
		this.y = this.y + this.ymove;
		this.z = this.z + this.zmove;
		if (this.x > 300 || this.x < -300) { this.xmove = -this.xmove; }
		if (this.y > 300 || this.y < -300) { this.ymove = -this.ymove; }
		if (this.z > 300 || this.z < -300) { this.zmove = -this.zmove; }
		this.distToCam = dist(this.x, this.y, this.z, camX, camY, camZ);
	}
}


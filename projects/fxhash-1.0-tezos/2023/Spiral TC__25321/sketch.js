var palettes = [];
palettes[0] = ["bf4e30","c6ccb2","093824","e5eafa","78fecf"];
palettes[1] = ["ffcab1","69a2b0","659157","a1c084","e05263"];
palettes[2] = ["595959","808f85","91c499","f2e9dc","cfd11a"];
palettes[3] = ["103356","87bff0","dc9fc3","0b1621","fcc7b5","5a5485","66a8e0","e18ca0","255484","996c96", "ED1D40"];
palettes[4] = ["14110f","34312d","7e7f83","d9c5b2","f3f3f4"];
palettes[5] = ["262322","63372c","c97d60","ffbcb5","f2e5d7"];
palettes[6] = ["351431","775253","bdc696","d1d3c4","dfe0dc"];
palettes[7] = ["262626","acbfa4","e2e8ce","ff7f11","ff1b1c"];
palettes[8] = ["010400","30332e","fffbfc","62bbc1","ec058e"]
palettes[9] = ["208567","181E1B","879A4E","23211F","AA4A23","36294B","111312","C6B336","574C29","22301C", "ED1D40"];
palettes[10] = ["000000", "566150","F0D40F","4D4A51","DDD677"];
palettes[11] = ["645B43","0C2228","48342E","D5C9BF","B25551","A62C35","7C6950","081A22","1E949E","8D473C", "ED1D40"];
palettes[12] = ["E0AA81","C56C2B","8E4A0D","E5C7A7","4F4E36","F0CDCC","DFA9A2","D07A6F","834C46","9F8A75", "ED1D40"];
palettes[13] = ["B99288","352A6B","CBDFE1","684E8B","272856","88444D","537297","4D3B5D","D6F9F5","90B0C1", "ED1D40"];
palettes[14] = ["FFFFFF","000000","cccccc","666666","333333","999999"];

var rc = Math.floor(fxrand(0,palettes[0].length-1));

let myScaledCanvas;
let y = 0;
let cw = 900;
let pass = 1;
let range = 200;
let bandX = 200;
let startY = 0;
let b = 0;
let blur = 0;
var horizRand = 0;
var shapeW = 0;
var shapeH = 0;
var shapeCount = 20;
var angleBrush = 0;
var matericRand = 0;
var selectedPalette = 0;
var grain = 2;
var clipX = 0;
vplipY = 0;
var clipR = 100;
var a = 0;
var spiralR = 100;
var iterations = 100;
var num = 300;
var noiseScale= 50, noiseStrength=1;
var particles = [num];
var shapeSides = 6;

function setup() {
  let seed = floor(fxrand()*10000000)
  randomSeed(seed);
  noiseSeed(seed);
  
  const square = random() < 0.5;
    createCanvas(...(square ? [max(600, 450), max(200, 450)] : [450, 600]));
  
  frameRate(200);
  noStroke();
  selectedPalette = Math.floor(random(0, palettes.length));
  rc = Math.floor(random(0, palettes[selectedPalette].length));
  background("#ffffff");
  fill("#" + palettes[selectedPalette][rc]);
  rect(b, b, cw - b * 2, cw - b * 2);
  clipX = random(0, width);
  clipY = random(0, width);
  angleBrush = 0.1;
  matericRand = random(0.1, 0.9);
  horizRand = 1 + random(-50, 50);
  particles = createParticles(num);
}

function createParticles(num) {
  let particles = [];
  for (let i = 0; i < num; i++) {
    let loc = createVector(random(width * 1), random(height), random(0.01));
    let angle = 0;
    let dir = createVector(cos(angle), sin(angle));
    let speed = random(0.1, 2);
    particles.push(new Particle(loc, dir, speed));
  }
  return particles;
}


function draw() {	
	push();
	
	if(y <= windowHeight-shapeH){
		noStroke();
		noFill();
	}else{
		
		if(shapeCount > 5 && shapeW < width/2 && shapeH < height/2)
		{
			shapeW += 1;
			shapeH += 1;
			shapeCount = 0;
			clipX = random(0, width);
			clipY = random(0, width);
			clipR = random(10, 300);
		}
		
		if(shapeW > 10 && shapeW < 12){
			clipX = height/2;
			clipY = width/2;
			clipR = 150;
			rc = Math.floor(random(0, palettes[0].length-1) );
		}else if(shapeW >= 10){
			noLoop();
		}else{
			var arr = [3, 6, 500];
			shapeSides = arr[floor(random(0, 3))];
		}
		
		rc = Math.floor(random(0, palettes[selectedPalette].length-1) );
		angleBrush = random(-0.5, 0.5);
		shapeCount++;
		matericRand = random(0.1,0.5);
		bandX = Math.floor(random(shapeW, width/2-shapeW));
		startY = shapeH;
		range = random(200, 400);
		pass++;
		y = shapeH;
		horizRand = 1+random(-10,10);
		grain = random(5, 14);
		spiralR = random(100, 300);
		
		fill(0,0.1);
		
	}
	
	
	if(shapeW > 1){
			noFill();
			stroke("#"+palettes[selectedPalette][rc]);
			strokeWeight(random()*0.2);
			drawNoiseCircle(clipR, {x:clipX, y:clipY}, shapeSides);
			
			clip();
			
		}else{
			
			for (let i=0; i<particles.length; i++) {
    		particles[i].run();
  		}
			
			rc = 0;
			grain = 1;
		}
	
	
	y += iterations;

	var c = color("#"+palettes[selectedPalette][rc]);
	c.setAlpha(250);
	fill(c);
	
	noStroke();
	

	rotate(angleBrush);
	var trgX = bandX;
	var rangeNoise = range/3;

	for(var h = 0; h<iterations; h+=grain){
		
		trgX += ((horizRand/2)-random(horizRand));
		rangeNoise += ((horizRand/2)-random(horizRand));

		for(var i = trgX; i < trgX + rangeNoise; i+=grain){
			var xCoor = trgX + i+ random() * blur;
				if(random() > matericRand && xCoor < width-shapeH){
					if(random()>0.5){
						circle(xCoor, y - h + random() * blur, grain);
					}else{
						circle(xCoor, y - h + random() * blur, grain);
	    		}
				
			}
		}
		
	}
	
	pop();
		
	fill("#ffffff");
	rect(0, 0, b, windowHeight);
	rect(cw-b, 0, b, windowHeight);
	rect(0, 0, cw, b);
	rect(0, windowHeight-b, cw, b);
	
	
}

class Particle {
  constructor(_loc,_dir,_speed) {
    this.loc = _loc;
    this.dir = _dir;
    this.speed = _speed;
  }

  run() {
    this.move();
    this.checkEdges();
    this.update();
  }

  move() {
    let angle = noise(this.loc.x/noiseScale, this.loc.y/noiseScale, frameCount/noiseScale) * TWO_PI * noiseStrength;
    this.dir.x = cos(angle);
    this.dir.y = sin(angle);
    var vel = this.dir.copy();
    var d = 20;
    vel.mult(this.speed*d);
    this.loc.add(vel);
  }

  checkEdges() {
    if (this.loc.x < 2 || this.loc.x > width || this.loc.y < 2 || this.loc.y > height) {
      this.loc.x = random(width*1.2);
      this.loc.y = random(height);
    }
  }

  update() {
    fill(0);
    strokeWeight(random(0, 1.5));
    stroke("#"+palettes[selectedPalette][2]);
    ellipse(this.loc.x, this.loc.y, this.loc.z);
  }
}

function drawGradient(cc, cc2) {
  for (let y = 0; y < height; y++) {
    var n = map(y, 0, height, 0, 1);
    let newc = lerpColor(color(cc), color(cc2), n);
    stroke(newc);
    line(0, y, width, y);
  }
}

function setLineDash(list) {
  this.drawingContext.setLineDash(list);
}

p5.prototype.clip = function () {
  this.drawingContext.clip();
}

function windowResized() {
  if (random(1) < 0.5) {
    resizeCanvas(windowHeight, windowWidth);
  } else {
    resizeCanvas(windowWidth, windowHeight);
  }
}

function keyTyped() {
    switch (key) {
    case "s":
      saveCanvas("Spiral_TC", "png")
    }
}
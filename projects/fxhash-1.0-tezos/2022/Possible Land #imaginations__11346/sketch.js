// Possible Land #imaginations

var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

var engine = Engine.create();
var ground

var world;
var boxes = [];
let options;

let h;
let b;
let noiseMax = 1;
let s;

let rooms = [];
let tree;
let trees = [];

let img;
let c;

let treeRow;
let skyColor;
let leading;

let when;
let roomFunction = ["fabrication lab", "archive library", "studio",
                    "shower", "kitchen", "gallery",
										"living room", "coffee shop", "store", "sun",
                    "planting", "terracotta", "gold", "tree", "harvesting",
                    "art", "science", "collaboration", "demo room" ];

let branchColor = ["#283618", "#344e41", "#414833", "#656D4A", "#582F0E"];
let labColor = ["#606c38", "#283618", "#fefae0", "#dda15e", "#bc6c25"];

let skyColorArray = ["#02000c", "#02000c", "#02000c", "#02000c", "#02000c", "#02000c",
                    "#001893", "#b4cded",  "#fffbe9", "#fffbe9","#b7f2f4",  "#b7f2f4",
                    "#b7f2f4",   "#f8ee78", "#f9f3ae", "#f9f3ae", "#f9f3ae","#ffc851",
                    "#315396", "#0d0538", "#060022", "#02000c", "#02000c", "#02000c"];

let nightSky = "#02000c";
let daySky = "#fffbe9";

let currentSkyColor;
let currentSkyColorIndex = 0;
let mountainB_x;
let mountainB2_x;

let hr;
let fontRegular;
let k = 0;
let manualSky = false;

let dot;
let dots = [];

let isNight = false;
let setNightMode = false;
let isDarker = false;


let b1; // brightness
let b2;
let b3;

let tempC;

function preload(){
	img = loadImage('noise_800.jpg');
  fontRegular = loadFont('BebasNeue-Regular.ttf');
}

function setup() {
  createCanvas(800, 800);
  frameRate(15);
  let seed = floor(fxrand()*9999999);
  randomSeed(seed);
  noiseSeed(seed);

  colorMode(HSB);
  h = map(random(), 0, 1, 0, 50);
  b = map(random(), 0, 1, 80, 95);
	s = map(random(), 0, 1, 90, 100) ;
  b1 = b;

	mountain_h = map(random(), 0, 1, 60, 180);
	mountain_b = map(random(), 0, 1, 30, 50);
  b2 = mountain_b;

  mountainB2_b = mountain_b-15;
  b3 = mountainB2_b;

	colorMode(HSB);
  textFont(fontRegular);
  leading = random(width*0.3, width*0.7);
  mountainB_x = random(width*0.3, width*0.95);
  mountainB2_x = random(width*0.55, width*0.85);

  genDot();

  engine = Engine.create()
  world = engine.world
  Engine.run(engine)

  ground = new Boundary(width*0.5, height*0.5, width*1, 20, "");
  Composite.add(engine.world, ground);

  skyColor = random(0, 1);
  // print("skyColor: "+ skyColor);
  for(let k=0; k<15; k++){
	boxes.push(new Box(leading + random(-40, 40), 0, 100, 50, random(roomFunction), random(labColor), when));
  }
  genTree();
  drawTree();
  genDot();

}

function draw() {
  hr = hour();
  setSky(hr, manualSky);

  genMountain_Back();
  genMountain();
  if(when == "night"){
		stroke(62, 29, 80);
	}else{
		stroke(0);
	}

  genLand();
  drawTree();
  genNoise();
  drawDot();
  drawBox();
  drawFrame();
}

// function mousePressed(){
    // print("manualSky: "+manualSky);
    // genSky();
    // boxes[0].removeFromWorld();
    // boxes.splice (0, 1);
    // boxes.push(new Box(leading + random(-40, 40), 0, 100, 50, random(roomFunction), random(labColor), when));
    // print("boxes:"+ boxes.length, "world bodies:"+world.bodies.length);
// }

function setSky(h, manualSky){
  // let tempC = 22;
  if(manualSky == false){
    currentSkyColor = skyColorArray[h];
    background(currentSkyColor);
    if(h >= 21 || h <= 4){
      isNight = true;
      setNightMode = true;
      setDarker();
      if(h >= 20 || h < 6){
        drawMoon();
      }
    }else{
      isNight = false;
      setNightMode = true;
      resetBrightness();
    }
    // print("manualSky: "+manualSky);

  }else if(manualSky == true){
    if( isNight == true){
      drawDay();
    }else if(isNight == false){
      drawNight();
      drawMoon();
    }
  }
}

function drawMoon(){
  push();
  noStroke();
  fill(255);
  ellipse(width*0.2, height *0.1, 60, 60);
  fill("#02000c");
  ellipse(width*0.18, height *0.1, 51, 51);
  pop();
}

function generateHouse(x){
  let genX = x;
	for(let k=0; k<10; k++){
		boxes.push(new Box(genX-40, 0, 200, 100, random(roomFunction), random(labColor), when));
	}
}

function genTree(){
  treeAmount = random(50, 100);
	// trees
	treeRow = int(random(8,10));
	for(let j=0; j<treeRow; j++){
		let treeColumn = int(random(6,8));
		for(let i=0; i<treeColumn; i++){
			let tree = new Tree({
				p: {x: map(i, 0, treeColumn, width*0.03, width*0.97 + random(-width*0.3, width*0.3)),
						y: map(j, 0, treeRow, height*0.45, height*0.9) + random(height*0.2, height*0.3)},
				avgTall: random(50, 80),
				r:random(10, 20),
				clr: random(branchColor)
			});
			tree.setBranches();
			trees.push(tree);
		}
	}
}

function drawTree(){
  // draw tree
  for(let i=0; i<trees.length; i++){
    let tree = 	trees[i];
    tree.draw();
  }
}

function genDot(){
  for(let i=0; i<10; i++){
    dot = new Dots();
    dot.createDots();
    dots.push(dot);
  }
}

function drawDot(){
  let tempd;
  for(let i=0; i<dots.length; i++){
    tempd = dots[i];
    // tempd.createDots();
    tempd.draw();
  }
}

function genSky(){
  skyColor = random(0, 1);
}

function genLand(){
  // land (red)
  push();
  colorMode(HSB);
  translate(width*0.5, height*0.5);
  strokeWeight(3);
  stroke(0);
  fill(h, s, b);
  // fill(255);
  beginShape();
  scale(1, 0.6);
    for(let a=0; a<TWO_PI; a+=0.02){
      let xoff = map(cos(a), -1, 1, 0, noiseMax);
      let yoff = map(sin(a), -1, 1, 0, noiseMax);
      let r = map(noise(xoff, yoff), 0, 1, 100, width-300);
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
    }
  endShape(CLOSE);
  pop();
}

function genMountain_Back(){
  // mountain (green)
  push();
  colorMode(HSB);
  translate(mountainB2_x, height*0.38);
  strokeWeight(3);
  stroke(0);
  fill(mountain_h, 100, mountainB2_b);
  beginShape();
  scale(1, 0.7);
    for(let a=0; a<TWO_PI; a+=0.02){
      let xoff = map(cos(a), -1, 1, 2000, noiseMax+2000);
      let yoff = map(sin(a), -1, 1, 2000, noiseMax+2000);
      let r = map(noise(xoff, yoff), 0, 1, 100, width-200);
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
    }
  endShape(CLOSE);
  pop();

  // mountain (green)
  push();
  colorMode(HSB);
  translate(mountainB_x, height*0.38);
  strokeWeight(3);
  stroke(0);
  fill(mountain_h, 100, mountain_b-10);
  beginShape();
  scale(0.7, 0.7);
    for(let a=0; a<TWO_PI; a+=0.02){
      let xoff = map(cos(a), -1, 1, 4000, noiseMax+4000);
      let yoff = map(sin(a), -1, 1, 4000, noiseMax+4000);
      let r = map(noise(xoff, yoff), 0, 1, 100, width-300);
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
    }
  endShape(CLOSE);
  pop();
}

function genMountain(){
  // mountain
  push();
  translate(width*0.5, height);
  strokeWeight(2);
  stroke(0);
  fill(mountain_h, 100, mountain_b);
  beginShape();
  scale(1.5, 1);
    for(let a=0; a<TWO_PI; a+=0.02){
      let xoff = map(cos(a), -1, 1, 1000, noiseMax+1000);
      let yoff = map(sin(a), -1, 1, 1000, noiseMax+1000);
      let r = map(noise(xoff, yoff), 0, 1, 100, width+200);
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
    }
  endShape(CLOSE);
  pop();
}

function drawBox(){
  push();
  for(let i=0; i<boxes.length; i++){
    boxes[i].show();
  }
  ground.show();
  pop();
}

function genNoise(){
  push();
  blendMode(MULTIPLY);
  image(img, 0, 0, width, height);
  pop();
}

function drawFrame(){
  push();
  noFill();
  stroke(0);
  strokeWeight(10);
  rect(0, 0, width, height);
  pop();
}

function keyPressed() {
  k = key.toLowerCase();
  if (k === 's') {
    saveCanvas('PossibleLand_#imaginations_', 'jpeg');
    k = 0;
  }else if (k === 'g') {
    genSky();
    k = 0;
    boxes[0].removeFromWorld();
    boxes.splice (0, 1);
    boxes.push(new Box(leading + random(-40, 40), 0, 100, 50, random(roomFunction), random(labColor), when));
  }else if (k === 't') {
    if(manualSky == false){
      manualSky = true;
    }else{
      manualSky = false;
    }
    // print("isNight: "+ isNight);
    // print("manualSky: "+manualSky);
  }else if (k === 'r') {
    manualSky = false;
  }
}

function setDarker(){
  if(isDarker == false){
    b = b - 22;
    mountain_b = mountain_b - 22;
    mountainB2_b = mountain_b - 22;
    isDarker = true;
  }
}

function resetBrightness(){
  if(isDarker == true){
    b = b1;
    mountain_b = b2;
    mountainB2_b = b3;
    isDarker = false;
  }
}

function drawNight(){
  background(nightSky);
  setDarker();
  isDarker = true;
}

function drawDay(){
  background(daySky);
  resetBrightness();
  isDarker = false;
}

function rand(min, max){
	return fxrand() * (max - min) + min;
}

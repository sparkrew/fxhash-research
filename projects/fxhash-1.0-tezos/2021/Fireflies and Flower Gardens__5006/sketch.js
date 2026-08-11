//FEDE PARTICLES
var inc = 0.02;
var timeInc = 0.004
var skale = 1;
var col;
var row;
var zOff = 1;

var particleList = [];
var particleNbr = randRange(1, 10);

// SPEED
var overallspeed;

// VAR X SCROLLING
//var bg1Img1;
//var bg1Img2;

var bg1x1 = 0;
var bg1x2;

var Planetx1 = 0;

var Cloudx1;
var Cloudx2;

// CANVAS
let maxCanvasW = 800;
let maxCanvasH = 800;
let canvas;

//DRAGONFLY MOVEMENT
//const wiggliness = 40;
//const floatiness = -30;
//const Size = 100;

var radius = 60;
var angle = 0;
var speed = 0.04;
var centerX;
var centerY;

//SPRITE ANIMATION
let animation = [];

let speedAnim = 0.4;

//SCROLLING POSITION
var posX1 = 0;
var posX2;
var posX3 = 0;
var posX4;

//FEDE PARTICLES CLASS
class Particle {
  constructor(x, y) {
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.maxSpeed = 4;
    this.attr = 0;
  }
  
  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0); // reset acc at evry update.
    
    this.edges();
  }
  
  applyForce(force) {
    this.acc.add(force);
  }
  
  show() {
    stroke('yellow');
    strokeWeight(12); 
    point(this.pos.x, this.pos.y);
  }
  
  edges() {
    if (this.pos.x < 0) {
      this.pos.x = width;
    } else if (this.pos.x > width) {
      this.pos.x = 0;
    }

    if (this.pos.y < 0) {
      this.pos.y = height;
    } else if (this.pos.y > height) {
      this.pos.y = 0;
    }
  }
  
  follow() {
    var iCol = floor(this.pos.x / skale);
    var jRow = floor(this.pos.y / skale);
    
    var xOffset = inc * iCol;
    var yOffset = inc * jRow;
    
    var angle = noise(xOffset, yOffset, zOff) * TWO_PI;
    var force = p5.Vector.fromAngle(angle);
    force.setMag(0.1);
    
    this.applyForce(force);
  }
}

function preload() {
  
//Preload the BACKGROUND nightsky Images
    bg1Img1 = loadImage('./images/BG.png');
    bg1Img2 = loadImage('./images/BG2.png');

//Preload the Planet image
    sourcePlanet = loadImage('./images/planet.png');  
  
//Preload the BACK CLOUD image
    CloudBack = loadImage('./images/CloudsBack.png');
  
//Preload the FRONT CLOUD image
    CloudFront = loadImage('./images/CloudsFront.png');
    
//Preload the PLANTS ON THE BACK array
//create an array of image files names
	landscapeBack = [
	"./images/plant1.png",
    "./images/plant2.png",
    "./images/plant3.png",
    "./images/plant4.png",
    "./images/plant5.png"
    ];
   
    //Probabilities
  var plantProb = fxrand();
  var plantId = {id: 0, name:""};
  if (plantProb < 0.2) {
     plantId = {id: 0, name:"Ocimum Basilicum"};
  }
  else if (plantProb < 0.4) {
     plantId = {id: 1, name:"Lamprocapnos Spectabilis"};
  }
   else if (plantProb < 0.6) {
     plantId = {id: 2, name:"Conium Maculatum"};
  }
   else if (plantProb < 0.8) {
     plantId = {id: 3, name:"Stapelia Gigantea"};
  }
   else {
     plantId = {id: 4, name:"Amorphophallus Titanium"};
  }

  
    let pos = randRangeInt(0, landscapeBack.length -1);
  // Load the picked image
  	sourceLandscapeBack = loadImage(landscapeBack[pos]);

  
// Preload the DRAGONFLY array 
   	Dragonfly = [
		"./images/DF1.png",
        "./images/DF2.png",
        "./images/DF3.png"
    ];
  
// Preload the DRAGONFLY Animation SpriteSheet 

  //Probabilities
  var flyProb = fxrand();
  var flyId = {id: 0, name:""};
  if (flyProb < 0.5) {
     flyId = {id: 0, name:"Common Pig Firefly"};
  }
  else if (flyProb < 0.8) {
     flyId = {id: 1, name:"Rare Shark Firefly"};
  }
   else {
     flyId = {id: 2, name:"Very Rare Tiger Firefly"};
  }
  
  
  	//load the picked image
  	sourceDragonfly = loadImage(Dragonfly[flyId.id]);
    spritedata = loadJSON('dragonfly1.json'); 
  
  
// Preload the PLANTS ON THE FRONT array
  // Create an array of image files names
	landscapeFront = [
	"./images/front1.png",
    "./images/front2.png",
    "./images/front3.png",
    "./images/front4.png",
    "./images/front5.png",
    ];
  
  	//let pos2 = randRangeInt(0, landscapeFront.length -1);
  	//load the picked image
  	sourceLandscapeFront = loadImage(landscapeFront[pos]);


  window.$fxhashFeatures = {
 "Firefly family": flyId.name,
 "Garden family": plantId.name
  }    

}

function setup() {

overallspeed = randRangeInt(1, 4); 
  
centerX = width / 2;
centerY = height / 2;
  
// FEDE PARTICLES SETUP
  col = floor(width / skale);
  row = floor(height / skale);
  
  for (let i = 0; i < particleNbr; i++) {
    particleList[i] = new Particle(random(width), random(height));  
  }

  
// Init the canvas, center and resize it
  canvas = createCanvas(maxCanvasW, maxCanvasH);
  canvas.style('display', 'block');
  centerCanvas();
  
  
  // SCROLLING BG 2 INITIAL POSITION
  bg1x2 = width;
  
  // SCROLLING PLANTS BACK 2 INITIAL POSITION
  posX2 = width;
  
  // SCROLLING PLANTS FRONT 2 INITIAL POSITION
  posX4 = width;

  // SCROLLING PLANET
  Planetx1 = width;
  
  // SCROLLING CLOUDS
  CloudX1 = 0;
  CloudX2 = 0;
  
// DRAGONFLY MOVEMENT COORDINATES
// moveX = width / 2;
// moveY = height / 2; 
// PROBLEMS!
  moveX = width / 2;
  moveY = height / 2;

  
// COLOR OFFSET  
let hueOffset;

    // BACKGROUND 1/2 / CLOUDS
    // Pick a random offset for the Background
    hueOffset = randRangeInt(0, 360);

    // BG Create an image with the same size of the source one
    destBG = createImage(width, height);
    
    // BG Create an image with the same size of the source one
    destBG2 = createImage(width, height);
  
    // BG Apply the hue shift to the destination image
    shift_hue(bg1Img1, destBG, hueOffset);
  
    // BG Apply the hue shift to the destination image
    shift_hue(bg1Img2, destBG2, hueOffset);
  
// PLANET
    // Pick a random offset for the PLANET
    hueOffset = randRangeInt(0, 360);

    // PLANET Create an image with the same size of the source one
    destPlanet = createImage(sourcePlanet.width, sourcePlanet.height);

    // PLANET Apply the hue shift to the destination image
    shift_hue(sourcePlanet, destPlanet, hueOffset);
  
    //Random Planet size and position parameters
    planetPosition = {
    xpos: randRangeInt(0, width),
    ypos: randRangeInt(-(height / 8), height / 4),
    scale: randRangeInt(width /4, width / 1.5)
    }; 
  
// PLANTS BACK / PLANTS FRONT
  // Pick a random offset for the PLANTS BACK / FRONT
    hueOffset = randRangeInt(0, 360);

  // Create an image with the same size of the source one for the PLANTS BACK
    destLandscapeBack = createImage(sourceLandscapeFront.width, sourceLandscapeFront.height);
    destLandscapeBack2 = createImage(sourceLandscapeFront.width, sourceLandscapeFront.height);
    // Apply the hue shift to the PLANTS BACK destination images
    shift_hue(sourceLandscapeBack, destLandscapeBack, hueOffset);
    shift_hue(sourceLandscapeBack, destLandscapeBack2, hueOffset);
  
  // Create an image with the same size of the source one for the PLANTS FRONT
    destLandscapeFront = createImage(sourceLandscapeFront.width, sourceLandscapeFront.height);
    destLandscapeFront2 = createImage(sourceLandscapeFront.width, sourceLandscapeFront.height);
    // Apply the hue shift to the PLANTS FRONT destination images
    shift_hue(sourceLandscapeFront, destLandscapeFront, hueOffset);
    shift_hue(sourceLandscapeFront, destLandscapeFront2, hueOffset);

    
// DRAGONFLY
    // Pick a random offset for the Monster SpriteSheet
    hueOffset = randRangeInt(0, 360);
    //hueOffset = delta * i;
  
    // Create an image with the same size of the source one
    destDragonfly = createImage(sourceDragonfly.width, sourceDragonfly.height);

    // Apply the hue shift to the destination image
    shift_hue(sourceDragonfly, destDragonfly, hueOffset);  
  
  // SPRITES
    let frames = spritedata.frames;
    for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = destDragonfly.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }  
  
   
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);
}


function windowResized() {
  let currentW = Math.min(maxCanvasW, windowWidth);
  let currentH = Math.min(maxCanvasH, windowHeight);
//  resizeCanvas(currentW, currentH);

centerCanvas();
}

function draw() {
    
  background(0, 0, 0);
  
// Draw the SCROLLING BACKGROUND1 two images alternating
  image(destBG, bg1x1, 0, width, height);
  image(destBG2, bg1x2, 0, width, height);
  
  bg1x1 -= overallspeed * 0.8;
  bg1x2 -= overallspeed * 0.8;
  
  if (bg1x1 < -width){
    bg1x1 = width - (width/100);
  }
  if (bg1x2 < -width){
    bg1x2 = width - (width/100);
  }

// Draw the scrolling PLANET 
    image(destPlanet, planetPosition.xpos + Planetx1, planetPosition.ypos, planetPosition.scale, planetPosition.scale);
  
    Planetx1 -= overallspeed * 0.9;
  
    if (Planetx1 < -width * 2){
    Planetx1 = width;
  }
  
// Draw the CLOUDS BACK scrolling clouds
  
     CloudX1 -= overallspeed * 1.1;
  
    image(CloudBack, CloudX1, 0, width, height)
    if (CloudX1 <-width) {
      CloudX1 = width;
    } 
  
  
// Draw the CLOUDS FRONT scrolling clouds
  
    CloudX2 -= overallspeed * 1.3;
  
    image(CloudFront, CloudX2, 0, width, height)
    if (CloudX2 < -width) {
      CloudX2 = width;
    } 
  
  
  
// Draw the scrolling PLANTS BACK two images alternating
  
  image(destLandscapeBack, posX1, 0, width, height);
  image(destLandscapeBack2, posX2, 0, width, height);

  posX1 -= overallspeed * 1.5;
  posX2 -= overallspeed * 1.5;

  if (posX1 < -width){
    posX1 = width;
  }
    if (posX2 < -width){
    posX2 = width;
  }

  
// DRAW FEDE PARTICLES
  zOff += timeInc;
  
  for (let i = 0; i < particleList.length; i++) {
    particleList[i].follow();
    particleList[i].update();
    particleList[i].show();
  }
  
// Draw the DRAGONFLY
    
  var x = centerX + radius * cos(angle);
  var y = centerY + radius * sin(angle);
  //ellipse(x, y, 50, 50);
  var spriteId =  floor(frameCount * speedAnim) % animation.length;
   image(animation[spriteId], (cos(frameCount / 10) - width / 10) + x, (cos(frameCount / 10) - height / 8) + y);
  angle = angle + speed;
    
// Draw the PLANTS FRONT two images alternating
  image(destLandscapeFront, posX3, 0, width, height);
  image(destLandscapeFront2, posX4, 0, width, height);

  
  posX3 -= overallspeed * 1.8;
  posX4 -= overallspeed * 1.8;

  if (posX3 < -width){
    posX3 = width;
  }
  
  if (posX4 < -width){
    posX4 = width;
  }

}








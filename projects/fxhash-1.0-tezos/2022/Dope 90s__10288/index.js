

let canvasSize, imageSize;
let canvasRatio;

let imageGraphics;

let maskImage;
let sprinkleImage;
let blackImage;

let colorThemeImg, colorTheme;

let largeShapeSizeMax, largeShapeSizeMin;

let TWO_PI = Math.PI * 2;
let arcLength = TWO_PI/4;


/* Features */
window.$fxhashFeatures = {
  "Description": getDescriptionRarity(fxrand()),
  "Background Type": getBackgroundRarity(fxrand()),
  "Frame Type": getFrameRarity(fxrand()),
  "Squiggle Type": getSquiggleRarity(fxrand())
}

function getDescriptionRarity(value){
  if (value > 0.8) {
    return "Radical";
  } else if ( value < 0.3){
    return "Tubular";
  }
  return "Bodacious";
}

function getBackgroundRarity(value){
  if (value > 0.9) {
    return "Black";
  }
  return "Color";
}

function getFrameRarity(value){
  if (value < 0.25){
    return "Thick";
  }
  return "Thin";
}

function getSquiggleRarity(value){
  if (value < 0.15){
    return "Straight";
  }
  return "Curved";
}
/* End of Features */



function preload() {
  colorThemeImg = loadImage('./colorThemes.png');
}

function setup() {
  canvasSize = windowHeight;
  imageSize = 1200;
  createCanvas(canvasSize, canvasSize);

  canvasRatio = canvasSize/imageSize;

  largeShapeSizeMax = imageSize/2;
  largeShapeSizeMin = imageSize/3;

  imageGraphics = createGraphics(imageSize, imageSize);
  gradientImage = createGraphics(imageSize, imageSize);
  maskImage = createGraphics(imageSize, imageSize);
  blackImage = createGraphics(imageSize, imageSize);

  colorTheme = Math.floor(fxrand() * colorThemeImg.height);

  console.log("Color Theme:", colorTheme);


  if( window.$fxhashFeatures["Background Type"] == "Black") {
    bg = color(20);
  } else { 
    bg = color(colorSample(fxrand() * 0.1), 230);
  }


  imageGraphics.background(bg);


  /* ---------- The big draw ---------- */
  drawLargeShapes();
  drawMediumShapes();
  drawFrame();
  drawForegroundShapes();

  image(imageGraphics, 0, 0, canvasSize, canvasSize);
  console.log(window.$fxhashFeatures );


  fxpreview()
  noLoop();
}

function drawForegroundShapes() {
  drawSquiggles(window.$fxhashFeatures["Squiggle Type"]);
}

function drawSquiggles( style ){
  let squiggleCount = 8;

  let squigglePoints = 8;

  let pointHistory = [];



  let margin = 400;
  let r = fxrand() * TWO_PI/6 - TWO_PI/12;
  let w = randRange(40, 55);

  for(let s = 0; s < squiggleCount; s++) {

    let squiggleWidth = randRange(imageSize/3, imageSize/5);
    let stepSize = squiggleWidth/(squigglePoints-2);
    let amp = randRange(0.90, 2.75);
    let x_offset = randRange(margin, imageSize - margin) - squiggleWidth/2;
    let y_offset = randRange(margin, imageSize - margin);

    let collision = false;
    for (let p = 0; p < pointHistory.length; p++ ){
      if( dist(pointHistory[p].x + squiggleWidth/2, pointHistory[p].y, x_offset + squiggleWidth/2, y_offset) < imageSize/3.5){
        collision = true;
      }
    }

    if( collision == false) {
      let c = colorSample(randRange(0.9, 1.0));
      if(style == "Straight"){
        imageGraphics.strokeCap(SQUARE);
        squigglePoints = 10;
      }
      imageGraphics.noFill();
      imageGraphics.stroke(c);
      imageGraphics.strokeWeight(w);
      imageGraphics.push();
      imageGraphics.translate(x_offset , y_offset);
      imageGraphics.rotate(r);
      imageGraphics.beginShape()

      let v1 = createVector(x_offset, y_offset);
      pointHistory.push(v1);
      for(let i = 0; i < squigglePoints; i++){
        let x = stepSize * i;
        let y = (stepSize * amp) * (i%2 - 1); // alternate between up and down
        if(style == "Straight"){
          imageGraphics.vertex(x, y);
        } else {
          imageGraphics.curveVertex(x, y);
        }
      }

      imageGraphics.endShape();
      imageGraphics.pop();
    }


  }

}


function drawFrame(){
  c1 = color(colorSample(randRange(0.6, 1)));
  imageGraphics.stroke(c1);
  imageGraphics.noFill();
  if( window.$fxhashFeatures["Frame Type"] == "Thick"){
    imageGraphics.strokeWeight(randRange(15, 40));
  } else {
    imageGraphics.strokeWeight(randRange(4, 6));
  }

  imageGraphics.rectMode(CENTER);
  let frameWidth = imageSize * randRange(0.75, 0.80);
  let frameHeight = imageSize * randRange(0.40, 0.80);
  if(  window.$fxhashFeatures["Description"] != "Radical"){
    imageGraphics.push();
    imageGraphics.rotate(fxrand() * TWO_PI/120 - TWO_PI/240);
    imageGraphics.rect(imageSize/2, imageSize/2, frameWidth, frameHeight);
    imageGraphics.pop();
  } else {
    imageGraphics.rect(imageSize/2, imageSize/2, frameWidth, frameHeight);
  }
}

function drawMediumShapes() {
  if( window.$fxhashFeatures["Description"] == "Radical") {
    // textured
    drawCircles("Radical");

  } else if(window.$fxhashFeatures["Description"] == "Tubular") {
    drawCircles("Tubular");

  } else { // Bodacious
    // solid with dropshadow
    drawCircles("Bodacious");
  }
}

function drawCircles( style ) {
  let c1, c2;
  if( style == "Tubular") {
    // solid
    let circleCount = 5;
    let rMin = 60;
    let rMax = 120;
    let margin = 200;
    c1 = color(colorSample(randRange(0.1, 0.45)));

    gradientImage.clear();
    maskImage.clear();
    maskImage.fill(255);
    maskImage.noStroke();

    for (let i = 0; i < circleCount; i++){
      let x = randRange(margin, imageSize-margin);
      let y = randRange(margin, imageSize-margin);
      let r = randRange(rMin, rMax);
      // imageGraphics.fill(c1);
      // imageGraphics.noStroke();
      // imageGraphics.ellipse(x, y, r*2, r*2);

      maskImage.ellipse(x, y, r*2, r*2);
    }

    drawTexture( maskImage );
    imageGraphics.image(gradientImage, 0, 0, imageSize, imageSize);

  } else if( style == "Bodacious"){
    // gradient
    let circleCount = 3;
    let rMin = 70;
    let rMax = 200;
    let margin = 200;
    for (let i = 0; i < circleCount; i++){
      let x = randRange(margin, imageSize-margin);
      let y = randRange(margin, imageSize-margin);
      let r = randRange(rMin, rMax);
      c1 = color(colorSample(fxrand()));
      c2 = color(colorSample(fxrand()));

      drawGradientCircle(x, y, r, c1, c2);
    }

  } else if ( style == "Radical") {
    // solid
    let circleCount = 3;
    let rMin = 10;
    let rMax = 100;
    let margin = 200;
    c1 = color(colorSample(randRange(0.1, 0.45)));
    for (let i = 0; i < circleCount; i++){
      let x = randRange(margin, imageSize-margin);
      let y = randRange(margin, imageSize-margin);
      let r = randRange(rMin, rMax);
      imageGraphics.fill(c1);
      imageGraphics.noStroke();
      imageGraphics.ellipse(x, y, r*2, r*2);
    }
  }
}

function drawGradientCircle( x, y, r, c1, c2) {
  imageGraphics.noFill();

  let diameter = r*2;
  let gradient = createGraphics(diameter, diameter);
  let maskCircle = createGraphics(diameter, diameter);

  maskCircle.fill(255);
  maskCircle.ellipse(r, r, diameter * 0.95, diameter * 0.95);

  // Left to right gradient
  for (let i = 0; i < diameter; i++) {
    let progress = map(i, 0, diameter, 0, 1);
    let c = lerpColor(c1, c2, progress);
    gradient.strokeWeight(2);
    gradient.stroke(c);
    gradient.line(i, 0, i, diameter);
  }

  let newCircle = gradient.get();
  newCircle.mask(maskCircle);
  imageGraphics.push();
  imageGraphics.imageMode(CENTER);
  imageGraphics.image(newCircle, x, y);
  imageGraphics.pop();
}


function drawLargeShapes() {
  if( window.$fxhashFeatures["Description"] == "Radical") {
    // textured
    drawTriangles("Radical");

  } else if(window.$fxhashFeatures["Description"] == "Tubular") {
    drawTriangles("Tubular");

  } else { // Bodacious
    // solid with dropshadow
    drawTriangles("Bodacious");
  }
}

function drawTriangles( style ) {
 // gradient with dropshadow
  let c1, c2;
  let offsetMax;


  let x_offset = fxrand(offsetMax);
  let y_offset = fxrand(offsetMax);

  maskImage.clear();
  maskImage.push();
  maskImage.translate(imageSize/2, imageSize/2);
  maskImage.fill(255);
  maskImage.beginShape();
  maskImage.translate( x_offset, y_offset );

  let thetaOffset = fxrand() * TWO_PI;

  for(let t = 0; t < 3; t++){
    let r = randRange(largeShapeSizeMin, largeShapeSizeMax);
    let theta = (TWO_PI/3) * t + thetaOffset;
    let x = r * Math.cos(theta);
    let y = r * Math.sin(theta);
    maskImage.vertex(x, y);
  }
  maskImage.endShape();
  maskImage.pop();

  // triangle gradients and texture
  if( style == "Tubular") {
    c1 = color(colorSample(fxrand()));
    c2 = color(randRange(0.6, 0.9));
    offsetMax = imageSize/15;
    drawGradient(c1, c2);
  } else if( style == "Bodacious"){
    c1 = color(colorSample(randRange(0.20, 0.65)));
    c2 = c1;
    offsetMax = imageSize/15;
    drawGradient(c1, c2);
  } else if ( style == "Radical") {
    drawTexture(maskImage);
  }


  blackImage.background(0, 167);

  let dropshadow;
  if( style == "Bodacious"){
    blackImage.background(colorSample(0.85, 1));
  }
  dropshadow = blackImage.get();

  dropshadow.mask(maskImage);

  let newShape = gradientImage.get();

  newShape.mask((maskImage.get()));
  imageGraphics.push();
  imageGraphics.translate(imageSize/2, imageSize/2);
  imageGraphics.imageMode(CENTER);

  let r = randRange(TWO_PI/60, TWO_PI/50);
  if( style == "Bodacious"){
    r = fxrand() * TWO_PI;
  }

  if(fxrand() > 0.5){
    r *= -1;
  }
  imageGraphics.rotate(r);
  imageGraphics.image(dropshadow, 0, 0, imageSize, imageSize);
  imageGraphics.pop();
  if ( style != "Radical"){
    imageGraphics.image(newShape, 0, 0, imageSize, imageSize); // this is outside to allow the dropshadow to be offset
  } else {
    imageGraphics.image(gradientImage, 0, 0, imageSize, imageSize); // this is outside to allow the dropshadow to be offset
  }
}

function randRange( n1, n2) {
  let r = n2 - n1;
  return (fxrand() * r) + n1;
}


function drawGradient(c1, c2) {
  imageGraphics.noFill();

  // Left to right gradient
  for (let i = 0; i < imageSize; i++) {
    let progress = map(i, 0, imageSize, 0, 1);
    let c = lerpColor(c1, c2, progress);
    gradientImage.strokeWeight(2);
    gradientImage.stroke(c);
    gradientImage.line(i, 0, i, imageSize);
  }
}

function colorSample( uv ) {
  let w = colorThemeImg.width;
  return colorThemeImg.get(w * uv, colorTheme);
}

// measure radius of objects to make sure you aren't too close and if you're good then draw
function drawTexture( maskImage ){
  noFill();

  let whiteColor = color(255);

  let maxPoints = 8000;
  let sprinkleRadius = 20;
  if(window.$fxhashFeatures["Description"] == "Tubular"){
      sprinkleRadius = 15;
  }


  let sprinkles = [];

  let c = color(colorSample(randRange(0.9, 1)));

  for( let i = 0 ; i < maxPoints; i++){
    let x = fxrand() * imageSize;
    let y = fxrand() * imageSize;
    let offset = fxrand() * TWO_PI;

    if( maskImage.get(x, y)[0] == 255){

      let newSprinkle = new Sprinkle(x, y, sprinkleRadius, c, offset);

      for ( let t = 0; t < sprinkles.length; t++){
        if(sprinkles[t].collides(x, y) == true) {
          newSprinkle = undefined;
          break;
        }
      }

      if(newSprinkle){
        sprinkles.push(newSprinkle);
      }
    }
  }

  for ( let t = 0; t < sprinkles.length; t++){
    sprinkles[t].draw();
  }

}



class Sprinkle {
  constructor( _x, _y, _r, _c, _offset) {
    this.x = _x;
    this.y = _y;
    this.r = _r;
    this.c = _c;
    this.offset = _offset;
  }

  draw(){
    gradientImage.ellipseMode(CENTER);
    gradientImage.noFill();
    gradientImage.strokeWeight(5);

    let x = this.x  - (this.r/2) * Math.cos(this.offset + arcLength/2);
    let y = this.y  - (this.r/2) * Math.sin(this.offset + arcLength/2);

    gradientImage.stroke(this.c);
    gradientImage.arc(x, y, this.r * 0.8, this.r * 0.8, this.offset, this.offset + arcLength); //almost full circle
    // gradientImage.stroke(255,0,0);
    // gradientImage.arc(this.x, this.y, this.r * 0.8, this.r * 0.8, this.offset, TWO_PI * 0.90);
  }

  collides(_x, _y){
    let d = dist(this.x, this.y, _x, _y);
    if( d < this.r) {
      return true;
    }
    return false;
  }
}
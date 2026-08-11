var cnv,
  r,
  g,
  b,
  a,
  theta,
  angle = 0;

// Predefined colors
var clr = ["#CBCE9F", "#F2F2F2", "#F0D8AE", "#ECA153", "#FF6E6E"];
var clr2 = ["#CBCE9F", "#F2F2F2", "#F0D8AE", "#ECA153", "#FF6E6E"];
var clr3 = ["#CBCE9F", "#F2F2F2", "#F0D8AE", "#ECA153", "#FF6E6E"];
var clr4 = ["#CBCE9F", "#F2F2F2", "#F0D8AE", "#ECA153", "#FF6E6E"];
var clr5 = ["#CBCE9F", "#F2F2F2", "#F0D8AE", "#ECA153", "#FF6E6E"];
var clr6 = ["#CBCE9F", "#F2F2F2", "#F0D8AE", "#ECA153", "#FF6E6E"];
var clr7 = ["#CBCE9F", "#F2F2F2", "#F0D8AE", "#ECA153", "#FF6E6E"];
var clr8 = ["#CBCE9F", "#F2F2F2", "#F0D8AE", "#ECA153", "#FF6E6E"];
var clr9 = ["#CBCE9F", "#F2F2F2", "#F0D8AE", "#F2F2F2", "#FF6E6E"];

var couleur = [clr, clr2, clr3, clr4, clr5, clr6, clr7, clr8, clr9];
var marci;
var modele;
var transmission;
var fuel;
var mileage;
var customFont;

function preload() {
  // Load font in the preload function
  customFont = loadFont('Crescendo-514Pa.ttf');

  // Load .txt files with callback functions
  marci = loadStrings('marci.txt', onMarciLoad);
  modele = loadStrings('modele.txt', onModeleLoad);
  transmission = loadStrings('transmission.txt', onTransmissionLoad);
  fuel = loadStrings('fuel.txt', onFuelLoad);
  mileage = loadStrings('mileage.txt', onMileageLoad);
}

// Callback function for marci.txt
function onMarciLoad(data) {
  console.log('Loaded marci.txt:', data);
  // Continue with any other code associated with loading marci.txt
  const nonEmptyData = data.filter(item => item.trim() !== '');
}

// Callback functions for other .txt files
function onModeleLoad(data) {
  console.log('Loaded modele.txt:', data);
  const nonEmptyData = data.filter(item => item.trim() !== '');
}

function onTransmissionLoad(data) {
  console.log('Loaded transmission.txt:', data);
  const nonEmptyData = data.filter(item => item.trim() !== '');
}

function onFuelLoad(data) {
  console.log('Loaded fuel.txt:', data);
  const nonEmptyData = data.filter(item => item.trim() !== '');
}

function onMileageLoad(data) {
  console.log('Loaded mileage.txt:', data);
  const nonEmptyData = data.filter(item => item.trim() !== '');
}

var Car1; // Declare Car1 as a global variable


function setup() {
   seed = floor($fx.rand() * 123456789),
  // Set the random seed
  randomSeed(seed);
    (c = random(couleur)),
    (cnv = createCanvas(windowWidth, windowHeight)),
    (theta = HALF_PI),
    background(random(c)),
        // drawRoad();
    (drawingContext.shadowOffsetX = 15 * $fx.rand() + 15),
    (drawingContext.shadowOffsetY = -(15 * $fx.rand() + 15)),
    (drawingContext.shadowBlur = 230),
    (drawingContext.shadowColor = color(0)),
    noFill(),
    strokeWeight(0.3),
    translate(width / 2, height / 2);
    push(),
    blendMode(OVERLAY),
    frame(),
    pop(),
    push();

  // Specify the size you want for the cars
  let carSize = 1400;


  let middleX = 0;
  let middleY = 0;

  // Instantiate the car class with middle positions and size
  Car1 = new car(middleX, middleY, carSize);
  Car1.show();
 addCarDetails(Car1);
  pop();
  Grain();
}
function addCarDetails(carInstance) {
  textAlign(CENTER, BOTTOM);
  textSize(38);

  // Verificați dacă fișierele sunt încărcate și fontul este disponibil
  if (marci && modele && transmission && fuel && customFont) {
    // Schimbare font
    textFont(customFont);

    fill("white");

    // Alegeți aleatoriu o marcă și un model
    let marcaAleasa = random(marci);
    let modelAles = random(modele);
    let fuelales = random(fuel);
    let transmissionAles = random(transmission);
    let mileageAles = random(mileage);

    text(`Make : ${marcaAleasa}`, carInstance.x, carInstance.y - carInstance.height / 2 - 80);
    text(`Year : ${modelAles}`, carInstance.x, carInstance.y - carInstance.height / 2 - 10);
  textAlign(CENTER, BOTTOM);
  textSize(38);
 text(`Fuel Type : ${fuelales}`, carInstance.x, carInstance.y - carInstance.height / 2 - -340);
   text(`Mileage : ${mileageAles}`, carInstance.x, carInstance.y - carInstance.height / 2 - -390);

 text(`Transmission : ${transmissionAles}`, carInstance.x, carInstance.y - carInstance.height / 2 - -440);
  } else {

    console.log('Așteptați ca fișierele să se încarce și fontul să fie disponibil...');
  }
}


function draw() {}
function part(r) {
  (r *= 0.36 *$fx.rand() + 0.5) > height / (480 *$fx.rand() + 20) &&
    (stroke(random(c)),
    fill(random(c)),
    push(),
    angleMode(RADIANS),
    rotate(theta),
   $fx.rand() > 0.5
      ? rect(0, 0, width / 2, -r)
      : (push(),
        blendMode(BLEND),
        strokeWeight(0.9 *$fx.rand() + 0.1),
        pop(),
        rect(r, 0, width / 2, r)),
    translate(0, -r),
    part(r),
    pop(),
    push(),
    angleMode(RADIANS),
    rotate(-theta),
    rect(0, 0, width / 2, -r),
    translate(0, -r),
    part(r),
    pop());
}


function Grain() {
  loadPixels();
  let e = pixelDensity(),
    t = width * e * 4 * (height * e);
  blendMode(HARD_LIGHT);
  for (let e = 0; e < t; e += 4)
    (grainAmount = random(-50, 50)),
      (pixels[e] = pixels[e] + grainAmount),
      (pixels[e + 1] = pixels[e + 1] + grainAmount),
      (pixels[e + 2] = pixels[e + 2] + grainAmount),
      (pixels[e + 3] = pixels[e + 3] + grainAmount);
  updatePixels();
}

function frame() {
  push(),
    (drawingContext.shadowOffsetX = 0),
    (drawingContext.shadowOffsetY = 0),
    rectMode(CENTER),
    noFill(),
    stroke(random(c)),
    blendMode(BLEND),
    strokeWeight(width / 95),
    rect(0, 0, 0.85 * width, 0.85 * height),
    strokeWeight(width / 10),
    rect(0, 0, width, height),
    pop();
}
class Glitch {
  constructor(t) {
    (this.p5 = void 0 !== t ? t : p5.instance),
      (this.mode = "image"),
      (this.width = 1),
      (this.height = 1),
      (this.image = this.p5.createImage(1, 1)),
      (this.bytes = []),
      (this.bytesGlitched = []),
      (this.hex = []),
      (this.hexGlitched = []),
      (this.base64 = ""),
      (this.base64Glitched = ""),
      (this.base64Type = ""),
      (this.limitStart = 4.2),
      (this.limitStop = 1),
      (this.fileType = "image/jpeg"),
      (this.fileQuality = 1),
      (this.fileFormat = "jpeg"),
      (this.types = []),
      this.initTypes(),
      this.initBase64(),
      (this.errorOut = !0),
      (this.debugOut = !1);
  }

  
}

class car {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size; // Assign the specified size

    this.length = floor(random(220, 380));
    this.height = floor(random(100, 280));

    this.wheelSize = floor(random(30, 50));
    this.partsWeight = floor(random(10, 20));
    this.strokeWeight = 5;

    this.carColourR = random(0, 255);
    this.carColourG = random(0, 255);
    this.carColourB = random(0, 255);

    this.carStartPointx = -this.length / 2;
    this.carStartPointy = this.height / 2;
    this.carSectionx = this.length / 4;
    this.carSectiony = this.height / 2;
    this.bonnetSize = floor(random(this.carSectionx/4, this.carSectionx/2));

    this.bonnet = [
      { x: this.carStartPointx, y: this.carStartPointy },
      { x: this.carStartPointx, y: this.carStartPointy-this.carSectiony/2 },
      { x: this.carStartPointx+this.carSectionx/2-this.bonnetSize, y: this.carStartPointy-this.carSectiony },
      { x: this.carStartPointx+this.carSectionx-this.bonnetSize, y: this.carStartPointy-this.carSectiony },
    ];

    this.roof = [
      { x: this.carStartPointx+this.carSectionx, y: this.carStartPointy-this.carSectiony },
      { x: this.carStartPointx+this.carSectionx, y: this.carStartPointy-this.carSectiony*1.5 },
      { x: this.carStartPointx+this.carSectionx*1.5, y: this.carStartPointy-this.height },
      { x: this.carStartPointx+this.carSectionx*2, y: this.carStartPointy-this.height },
    ];
  }

  show() {
    // Scale the car based on the specified size
    let scaleValue = this.size / 1300; // Adjust this ratio based on your needs

    strokeWeight(this.strokeWeight * scaleValue);
    stroke("black");
    fill(this.carColourR, this.carColourG, this.carColourB);

    push();
    translate(this.x, this.y);
    scale(scaleValue); // Apply scaling
    beginShape();
    vertex(this.bonnet[0].x, this.bonnet[0].y);

    bezierVertex(
      this.bonnet[1].x,
      this.bonnet[1].y,
      this.bonnet[2].x,
      this.bonnet[2].y,
      this.bonnet[3].x,
      this.bonnet[3].y
    );
    vertex(this.roof[0].x,this.roof[0].y);

    bezierVertex(
      this.roof[1].x,
      this.roof[1].y,
      this.roof[2].x,
      this.roof[2].y,
      this.roof[3].x,
      this.roof[3].y
    );
    bezierVertex(
      this.roof[3].x+this.carSectionx,
      this.roof[3].y,
      this.roof[1].x+this.carSectionx*2,
      this.roof[2].y,
      this.roof[0].x+this.carSectionx*3,
      this.roof[0].y
    );

    bezierVertex(
      this.bonnet[0].x+this.carSectionx*4,
      this.bonnet[1].y,
      this.bonnet[0].x+this.carSectionx*4,
      this.bonnet[2].y,
      this.bonnet[0].x+this.carSectionx*4,
      this.bonnet[0].y
    );

    bezierVertex(
      this.bonnet[0].x+this.length,
      this.bonnet[0].y,
      this.bonnet[0].x,
      this.bonnet[0].y,
      this.bonnet[0].x,
      this.bonnet[0].y
    );
    endShape();
    pop();

    rect(this.x-this.length/2-this.partsWeight/2,this.y+this.height/2-this.partsWeight/2,this.carSectionx,this.partsWeight,this.partsWeight/2);

    rect(this.x+this.length/2-this.partsWeight,this.y+this.height/2-this.partsWeight/2,this.partsWeight*1.5,this.partsWeight,this.partsWeight/2);

    fill('white');
    ellipse(this.x-this.length/2+this.partsWeight/2,this.y+this.partsWeight*2,this.partsWeight*2,this.partsWeight*2);

    fill('red');
    rect(this.x+this.length/2-this.partsWeight,this.y+this.partsWeight,this.partsWeight,this.partsWeight*2,this.partsWeight/2);

    fill('white');
    push();
    translate(
      this.x-this.carSectionx+this.partsWeight,
      this.y
    );
    
    beginShape();
    vertex(0, 0);

    bezierVertex(
      0,-this.carSectiony/2+this.partsWeight,
      this.carSectionx/2-this.partsWeight,-this.carSectiony+this.partsWeight,
      this.carSectionx-this.partsWeight, -this.carSectiony+this.partsWeight
    );
    vertex(this.carSectionx-this.partsWeight, 0);
    vertex(0, 0);
    endShape();
    pop();

    push();
    translate(
      this.x+this.partsWeight*2,
      this.y
    );
    beginShape();
    vertex(0, 0);
    vertex(0, -this.carSectiony+this.partsWeight);

    bezierVertex(
      this.carSectionx-this.partsWeight*4,-this.carSectiony+this.partsWeight,
      this.carSectionx-this.partsWeight*2,-this.carSectiony+this.partsWeight,
      this.carSectionx*2-this.partsWeight*4, 0
    );
    vertex(0, 0);
    endShape();
    pop();

    line(this.x+this.partsWeight,this.y-this.height/2,this.x+this.partsWeight,this.y+this.height/2);

    rect(this.x-this.partsWeight,this.y+this.partsWeight,this.partsWeight,this.partsWeight/1.5);

    stroke("white");
    fill('white');
    ellipse(this.x - this.length / 4, this.y + this.height / 2, this.wheelSize+this.strokeWeight);
    ellipse(this.x + this.length / 4, this.y + this.height / 2, this.wheelSize+this.strokeWeight);

    stroke("black");
    fill('white');
    ellipse(this.x - this.length / 4, this.y + this.height / 2, this.wheelSize);
    ellipse(this.x + this.length / 4, this.y + this.height / 2, this.wheelSize);

    fill('black');
    ellipse(this.x - this.length / 4, this.y + this.height / 2, this.wheelSize/3);
    ellipse(this.x + this.length / 4, this.y + this.height / 2, this.wheelSize/3);
  }
  
}
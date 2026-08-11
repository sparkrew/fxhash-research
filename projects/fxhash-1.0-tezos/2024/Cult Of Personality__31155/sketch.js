let seed = 0;

var angle = 1;
var offset = 400;
var scalar = 1;
var speedx = 1;
var qq = 1;
var kk = 1;

var angle2 = 1;
var offset2 = 400;
var scalar2 = 1;
var scalarM =1;
var back1;
var back2;
var back3;

var speedx2 = 2;
var qq2 = 1;
var qq2X;
var kk2 = 1;
var circ = 1;
let box_alpha =true;
let transi;


var colorss = {
  r: 0,
  g: 0,
  b: 0
};

let table;

function preload() {
  table = loadTable("color.csv", "csv", "header");
}

//function windowResized() {
  //resizeCanvas(windowWidth, windowHeight);
//}

//od function to create canvas and resize functions. I use this in all examples.
const C = {
    loaded: false,
    prop() {return this.height/this.width},
    isLandscape() {return window.innerHeight <= window.innerWidth * this.prop()},
    resize () {
        if (this.isLandscape()) {
         
            document.getElementById(this.css).style.height = "100%";
            document.getElementById(this.css).style.removeProperty('width');
        } else {
            document.getElementById(this.css).style.removeProperty('height');
            document.getElementById(this.css).style.width = "100%";
        }
    },
    setSize(w,h,p,css) {
        this.width = w, this.height = h, this.pD = p, this.css = css;
    },
    createCanvas() {
        this.main = createCanvas(this.width,this.height,RGB), pixelDensity(this.pD), this.main.id(this.css), this.resize();
    }
};
C.setSize(2200,2500,1,'mainCanvas')

function windowResized () {
    C.resize();
}

//////////////////////////////////////////////////
// The example really starts here


function setup() { 
  
  seed = int($fx.rand()*9999999);
  randomSeed(seed);
  noiseSeed(seed);
  
  C.createCanvas();
  pixelDensity(1), angleMode(DEGREES);
  
  //  translate(-width/2,-height/2);
  
//frameRate= 60;
 // canvas = createCanvas(2200, 2500);
 
  background (6,2,15);
  
  angleX=1;
  circ = random(400, 1000);
  transi = 255;
  qq = qq*random(-22,24)
  qq2 = qq2*random(0,360);
   qq2X = 45;
  kk2 = kk2*random(-1000,1000)
  speedx2 = speedx2+random(01,0.2)
  speedx = 0.05;
   scalar2 = random(1,3);
  scalar = 2;
  scalrM=2;
  jarak2=random(2,45);
  
  
  if(box_alpha==true){
    transi=255;
  }
  else{
    transi=0;
  }
  
 
  //fill(250, 230,230);
//strokeWeight(1);
//stroke(45, 230,230);

  
  
 // }
  
  //moon();
 // luna(width/1.7, height/2.3, 300);
  bulan(width/2+60, height/2.3, 280);
  bulan2(width/2+60, height/2.3, 200);
  
   bulan3(width/2+20, height/2.3 +15, 700);
     bulan3(width/2+20, height/2.3+15, 400);
  
  glowbulan(width/2+15, height/2.3-10, 330);
  glowbulan(width/2+15, height/2.3-10, 335);
  glowbulan(width/2+15, height/2.3-10, 340);
  glowbulan(width/2+15, height/2.3-10, 345);
  glowbulan(width/2+15, height/2.3-10, 350);
  glowbulan(width/2+15, height/2.3-10, 355);
  glowbulan(width/2+15, height/2.3-10, 360);
  glowbulan(width/2+15, height/2.3-10, 370);
  glowbulan(width/2+15, height/2.3-10, 390);
  glowbulan(width/2+15, height/2.3-10, 400);
  glowbulan(width/2+15, height/2.3-10, 410);
  glowbulan(width/2+15, height/2.3-10, 420);
  glowbulan(width/2+15, height/2.3-10, 430);
  glowbulan(width/2+15, height/2.3-10, 440);
  glowbulan(width/2+15, height/2.3-10, 450);
  glowbulan(width/2+15, height/2.3-10, 460);
  glowbulan(width/2+15, height/2.3-10, 470);
  glowbulan(width/2+15, height/2.3-10, 480);
  glowbulan(width/2+15, height/2.3-10, 500);
  glowbulan(width/2+15, height/2.3-10, 550);
  glowbulan(width/2+15, height/2.3-10, 600);
  glowbulan(width/2+15, height/2.3-10, 700);
  glowbulan(width/2+15, height/2.3-10, 800);
  glowbulan(width/2+15, height/2.3-10, 900);
  glowbulan(width/2+15, height/2.3-10, 1000);
   glowbulan(width/2+15, height/2.3-10, 1100);
    glowbulan(width/2+15, height/2.3-10, 1300);
    glowbulan(width/2+15, height/2.3-10, 1500);
 
  //satelit
  glowbulan(width/2, height/1.3, 80);
   glowbulan(width/2, height/1.3, 150);
  ///satelit samll 1
  glowbulan(width/2-390, height/1.3-335, 40);
  glowbulan(width/2-390, height/1.3-335, 80);
  //satelit small 2
  glowbulan(width/2-660, height/2-710, 20);
  glowbulan(width/2-660, height/2-710, 100);
  
   //satelit small 3
  glowbulan(width/2+440, height/2-750, 30);
  glowbulan(width/2+440, height/2-750, 250);
  ///satelit samll 1
  glowbulan(width/2+790, height/1.3-330, 90);
  glowbulan(width/2+790, height/1.3-330, 270);
  
  orbit();
  rain();
  rain2();
  rain3();
  rain4();
//noLoop();
  $fx.preview();
} 




////////////////////////////////////////////////
/////////////////////////////////////////////////////
function bulan(x, y, diameter) {
  fill("navajowhite"); // White fill color for the circle
  noStroke();
  //ellipse(x, y, diameter);

  // Add texture by layering small strokes and ellipses
  for (let i = 0; i < 7000; i++) {
    let offsetX = random(-diameter / 2, diameter / 2);
    let offsetY = random(-diameter / 2, diameter / 2);
    let distFromCenter = dist(x, y, x + offsetX, y + offsetY);

    // Only draw inside the circle
    if (distFromCenter < diameter / 2) {
      let alpha = random(50, 150); // Transparency for texture
      let textureColor = color(random(223,225), random(218,221), random(179,184), alpha); // Slightly varying shades of white
      fill(textureColor);
      
      // Randomly alternate between small strokes and ellipses
    if (random(1) > 0.5) {
        stroke(textureColor);
        strokeWeight(random(1, 3));
        line(x + offsetX - 90, y + offsetY - 10, x + offsetX + random(-2, 2), y + offsetY + random(-2, 2));
      } else {
        noStroke();
        ellipse(x + offsetX, y + offsetY, random(1, 18), random(1, 8));
        
      //   ellipse(x + offsetX +30, y + offsetY -30, random(1,3), random(1, 3));
        
        
      }
    }
  }
}

/////////////////////////////////////////////////
  ////////////////////////////////

////////////////////////////////////////////////
/////////////////////////////////////////////////////
function bulan2(x, y, diameter) {
  fill("navajowhite"); // White fill color for the circle
  noStroke();
  //ellipse(x, y, diameter);

  // Add texture by layering small strokes and ellipses
  for (let i = 0; i < 3000; i++) {
    let offsetX = random(-diameter / 2, diameter / 2);
    let offsetY = random(-diameter / 2, diameter / 2);
    let distFromCenter = dist(x, y, x + offsetX, y + offsetY);

    // Only draw inside the circle
    if (distFromCenter < diameter / 2) {
      let alpha = random(50, 150); // Transparency for texture
      let textureColor = color(random(223,225), random(218,221), random(179,184), alpha); // Slightly varying shades of white
      fill(textureColor);
      
      // Randomly alternate between small strokes and ellipses
    if (random(1) > 0.5) {
        stroke(textureColor);
        strokeWeight(random(1, 3));
        line(x + offsetX - 90, y + offsetY - 10, x + offsetX + random(-2, 2), y + offsetY + random(-2, 2));
      } else {
        noStroke();
        ellipse(x + offsetX, y + offsetY, random(1, 18), random(1, 8));
        
      //   ellipse(x + offsetX +30, y + offsetY -30, random(1,3), random(1, 3));
        
        
      }
    }
  }
}

/////////////////////////////////////////////////
  ////////////////////////////////


////////////////////////////////////////////////
/////////////////////////////////////////////////////
function bulan3(x, y, diameter) {
  fill("navajowhite"); // White fill color for the circle
  noStroke();
  //ellipse(x, y, diameter);

  // Add texture by layering small strokes and ellipses
  for (let i = 0; i < 4400; i++) {
    let offsetX = random(-diameter / 2, diameter / 2);
    let offsetY = random(-diameter / 2, diameter / 2);
    let distFromCenter = dist(x, y, x + offsetX, y + offsetY);

    // Only draw inside the circle
    if (distFromCenter < diameter / 2) {
      let alpha = random(20, 90); // Transparency for texture
      let textureColor = color(random(223,225), random(218,221), random(179,184), alpha); // Slightly varying shades of white
      fill(textureColor);
      
      // Randomly alternate between small strokes and ellipses
    if (random(1) > 0.5) {
        stroke(textureColor);
        strokeWeight(random(1, 3));
        line(x + offsetX - 10, y + offsetY - 50, x + offsetX + random(-2, 2), y + offsetY + random(-2, 2));
      } else {
        noStroke();
        ellipse(x + offsetX, y + offsetY, random(1, 18), random(1, 8));
        
      //   ellipse(x + offsetX +30, y + offsetY -30, random(1,3), random(1, 3));
        
        
      }
    }
  }
}

/////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////////////////////////////////////////
function glowbulan(x, y, diameter) {
  fill("navajowhite"); // White fill color for the circle
  noStroke();
  //ellipse(x, y, diameter);

  // Add texture by layering small strokes and ellipses
  for (let i = 0; i < 3000; i++) {
    let offsetX = random(-diameter / 2, diameter / 2);
    let offsetY = random(-diameter / 2, diameter / 2);
    let distFromCenter = dist(x, y, x + offsetX, y + offsetY);

    // Only draw inside the circle
    if (distFromCenter < diameter / 2) {
      let alpha = random(50, 150); // Transparency for texture
      let textureColor = color(random(223,225), random(218,221), random(179,184), alpha); // Slightly varying shades of white
      fill(textureColor);
      
      // Randomly alternate between small strokes and ellipses
    if (random(1) > 0.5) {
        stroke(textureColor);
        strokeWeight(random(1, 3));
        line(x + offsetX, y + offsetY, x + offsetX + random(-2, 2), y + offsetY + random(-2, 2));
      } else {
        noStroke();
      //  ellipse(x + offsetX, y + offsetY, random(1, 18), random(1, 8));
        
         ellipse(x + offsetX, y + offsetY, random(1,3), random(1, 3));
        
        
      }
    }
  }
}

/////////////////////////////////////////////////
  



////////////////////////////////


function rain() {
  
  let sun=50;
      y=height;
     for (var q = 0; q < 20; q++) {
         fill(214,232,212, random(30,230));  
   var x = width/2;
  var y = y-sun+cos(180) + 20;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  noSmooth();
  noStroke();
  rect(x, y, random(1,2), sun);
  
      pop();
       
     }
  
  
  
  sun=1;
      x=width-width;
      y=height-200;
     for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
   var x = x+1;
  var y = y-1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  noSmooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
   for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
   var x = x+1;
  var y = y-1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  noSmooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
  
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
   var x = x+1;
  var y = y-1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  noSmooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
   for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
   var x = x+1;
  var y = y-1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  noSmooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
   var x = x+1;
  var y = y-1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  noSmooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
   for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
   var x = x+1;
  var y = y-1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
   var x = x+1;
  var y = y-1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
   for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
   var x = x+1;
  var y = y-1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
   var x = x+1;
  var y = y-1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
   for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
   var x = x+1;
  var y = y-1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
   var x = x+1;
  var y = y-1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
   for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
   var x = x+1;
  var y = y-1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
   var x = x+1;
  var y = y-1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
   for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
   var x = x+1;
  var y = y-1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
//filter (BLUR,1.5);
}

function rain2() {
  
  
  
  
  sun=1;
      x=width-width;
      y=height-2400;
     for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
   var x = x+1;
  var y = y+1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
   for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
   var x = x+1;
  var y = y+1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
  
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
   var x = x+1;
  var y = y+1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
   for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
   var x = x+1;
  var y = y+1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
   var x = x+1;
  var y = y+1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
   for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
   var x = x+1;
  var y = y+1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
   var x = x+1;
  var y = y+1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
   for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
   var x = x+1;
  var y = y+1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
   var x = x+1;
  var y = y+1;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  

//filter (BLUR,1.5);
}

//////////////////////////////////////


function rain3() {
  
  
  
  
  sun=1;
      x=width;
      y=height-2000;
     for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
   var x = x-1;
  var y = y+0;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
   for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
   var x = x-1;
  var y = y+0;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
  
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
   var x = x-1;
  var y = y+0;
    
       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
   for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
  var x = x-1;
  var y = y+0;
       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
   var x = x-1;
  var y = y+0;
       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
   for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
  var x = x-1;
  var y = y+0;
       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
    var x = x-1;
  var y = y+0;
       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
   for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
   var x = x-1;
  var y = y+0;
       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
    var x = x-1;
  var y = y+0;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
   var x = x-1;
  var y = y+0;
       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
    var x = x-1;
  var y = y+0;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
   var x = x-1;
  var y = y+0;
       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
    var x = x-1;
  var y = y+0;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  

//filter (BLUR,1.5);
}


//////////////////////////////////////


function rain4() {
  
  
  
  
  sun=1;
      x=width;
      y=height/2+500;
     for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
   var x = x-1;
  var y = y-0.5;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
   for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
   var x = x-1;
  var y = y-0.5;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
 // smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
  
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
      var x = x-1;
  var y = y-0.5;

    
       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  noSmooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
   for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
     var x = x-1;
  var y = y-0.5;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  //smooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(200,250));  
     var x = x-1;
  var y = y-0.5;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  noSmooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }
  
   for (var q = 0; q < 50; q++) {
         fill(214,232,212, random(0,250));  
     var x = x-1;
  var y = y-0.5;

       push();
   angle2 += speedx2;
  scalar2 += speedx2 *0.5;
  
  noSmooth();
  noStroke();
  circle(x, y, 2);
  
      pop();
       
     }


  

//filter (BLUR,1.5);
}

function orbit() {
  
  let sun=1500;
     
     for (var q = 0; q < 30; q++) {
         stroke(214,232,212, random(230,250));  
         strokeWeight(1);
   let x = width/2;
  let y = height/2.3;

   
  noSmooth();
  noFill();
  ellipse(x, y, sun+(200*q),  sun+(200*q) );
  
    
       
     }
//filter (BLUR,1.5);
}



  
  
  
  
  

   

function keyPressed() {
  // this will download the first 5 seconds of the animation!

  
if (key === '2') {
    saveCanvas('cult of personality ', 'jpg');
  }}


//function watcol()
//{filter(BLUR,5)}
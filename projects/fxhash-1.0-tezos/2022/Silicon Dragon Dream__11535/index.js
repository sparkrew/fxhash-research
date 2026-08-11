// Silicon Dragon Dream
// @Qotonana, April, 2022

// these are the variables you can use as inputs to your algorithms
//console.log(fxhash)    // the 64 chars hex number fed to your algorithm
//console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//  "Background": "Black",
//  "Number of lines": 10,
//  "Inverted": true
// }
//let seed = Math.trunc(fxrand() * 10000000);

let h;
let s;
let b;
let a;

let colorHue;
let colorHueChanged = false;

let sscaleFactor; // strokeScaleFactor
let differentPalette = false;

let size;
let defaultSize;
let renderScaleFactor;

let renderImageScale;

let renderCanvasSize=1000;

let pg; // createGraphic
let sf; // scaleFactor rendering recursive short

// variations
let shapeType;
let drawPrismType;
let fullHueSpectrum;
let arrangement;
let grayscale;

let planetShineCounter;

let fractalRecursiveCounter; 

let dragonXshape;
let dragonYshape;

function setup() {

   pixelDensity(2);

   let canvasSize = min(windowWidth, windowHeight);
   createCanvas(canvasSize, canvasSize);
   //size=canvasSize;

   seed = Math.trunc(fxrand() * 10000000);
   colorMode(HSB,360,100,100,1);
   angleMode(DEGREES);
   rectMode(CENTER);


renderImageScale = canvasSize/renderCanvasSize;
   
   //let img = makeImage(canvasSize);
   let img = makeImage(renderCanvasSize);
   //image(img, 0, 0);

   image(pg, 0,0, width, width);
   //fxpreview();
   noLoop();
}


function makeImage(renderCanvasSize) {

randomSeed(seed);
noiseSeed(seed);
   
    size=renderCanvasSize;
   pg = createGraphics(renderCanvasSize, renderCanvasSize);
  
   
   sscaleFactor=size/800;
   defaultSize = 800;

   renderScaleFactor = defaultSize/renderCanvasSize;

   sf = renderCanvasSize/size;

   colorHueChanged = false;
   differentPalette = false;


   pg.colorMode(HSB,360,100,100,1);
   pg.angleMode(DEGREES);
   pg.rectMode(CENTER);
   pg.background(random(1)*360,10,random(10,15));
   
   
   shapeType = random(1);
   fullHueSpectrum = random(1);
   drawPrismType = random(1);
   arrangement = random(1);
   grayscale = random(1);
   //planetShineCounter = int(random(5,10));

   fractalRecursiveCounter=0;

   dragonXshape = int(random(2,4));
   dragonYshape = int(random(2,5));
   print(dragonXshape);
   print(dragonYshape);
   
   PaintColorHue();

   pg.strokeWeight(0.5*sscaleFactor);
   
   pg.push();
   pg.noStroke(0);
   Stars();
   pg.pop();

   pg.push();
   pg.pop();

   
   pg.push();
   Dirt(0,1, 0.2, 5000);
   pg.pop();
   
   pg.push();
   Planets(size/2, size, size);
   pg.pop();

      pg.push();
   PlanetsShine(size/2, size, size, renderCanvasSize, 8);
   pg.pop();
    //Moon();
if (arrangement > 0.8) {
      drawPicture2();
   }
   else {
      drawPicture1(); 
   }
   


   pg.push();
   pg.noStroke();
   pg.blendMode(MULTIPLY);
   //drawPrism();
   pg.pop();
   pg.push();
   Dirt(1, 0, 0.3, 2000);
   pg.pop();

   pg.push();
   PlanetsShine(size/2, size, size, renderCanvasSize, 2);
   pg.pop();

return pg;
}



function drawPicture2 () {

   pg.push();
   Color();
   pg.translate( random(-size/6,size/2), random(-size/2, size/3));
  
   drawFractalTriangles((size/3)*sf, (size/3)*sf, size*0.83*sf);

      let dp2 = random(1);
      if ( dp2>0.4) {
         differentPalette = true;
      }
      if (differentPalette) {
         PaintColorHue();
      }
   pg.pop();

   pg.push();
   pg.translate( random(-size/6,size/3), random(-size/4,size/4));
   Color();
   drawFractalTriangles((size/2)*sf,(size/2)*sf,size*sf);
   pg.pop();

   pg.push();
   Color();
   pg.translate( random(0,size/4), random(-size/4,size/3));

   if (differentPalette) {
      PaintColorHue();
   }
   drawFractalTriangles((size)*sf,(size)*sf,size*sf);
   pg.pop();


   pg.push();
   Color();
   pg.translate( random(0,size-(size/4)), random(-size/3, size-(size/2)));

   if (differentPalette) {
      PaintColorHue();
   }
  
   drawFractalTriangles((size/3)*sf, (size/3)*sf, size*0.83*sf);
   pg.pop();
}


function drawPicture1 () {

   pg.push();
   Color();
   pg.translate( random(0,size/5), random(0, -size/3));  
   drawFractalTriangles((size/3)*sf, (size/3)*sf, size*0.83*sf);

   let dp = random(1);
   if ( dp>0.3) {
      differentPalette = true;
   }
   if (differentPalette) {
      PaintColorHue();
   }
   pg.pop();

   pg.push();
   pg.translate( random(0,size/4), random(size/3));
   Color();
   drawFractalTriangles((size/2)*sf,(size/2)*sf,size*sf);

   pg.pop();

   pg.push();
   Color();
   pg.translate( random(-size/2,size/4), random(-size/2,size/2));

   if (differentPalette) {
      PaintColorHue();
   }
   drawFractalTriangles((size/2)*sf,(size/2)*sf,size*sf);
   pg.pop();


   pg.push();
   Color();
   pg.translate( random(size/2,size-(size/6)), random(-size/6, size/2));

   if (differentPalette) {
      PaintColorHue();
   }
   drawFractalTriangles((size/3)*sf, (size/3)*sf, size*0.83*sf);

   pg.pop();
}


function Stars() {
   for (i=0; i<4000; i++) {
      let starSize = random(size/1000,size/300);
      let xp = random(0,size);
      let yp = random(0,size);
      let starAlpha = random(0.3, 0.9);
      //pg.colorMode(HSB,1);
      pg.fill(random(150, 210), random(10,30), 100, starAlpha);
      pg.beginShape();
      pg.ellipse(xp, yp, starSize);
      pg.endShape();
   }
}



function Planets(x, y, radius) {

      pg.push();
      for (i=0; i<30; i++) {
         let planetSize = random(size/200,size/30);
         //let xp = tempRadius * sin(angle);
         //let yp = tempRadius * cos(angle);
         let saturn = random(1);
         let xp = random(0,size);
         let yp = random(0,size);
         for (j=0; j<20; j++) {
            let starAlpha = random(0.03, 0.05);
            let tempPlanetSize = planetSize - random(planetSize/20, planetSize);
            //pg.colorMode(HSB,1);
            pg.noStroke();
            pg.fill(random(0, 360), random(10,30), 100, starAlpha);
            pg.beginShape();
            if (saturn > 0.7) {
               pg.push();
               pg.ellipse(xp, yp, tempPlanetSize, tempPlanetSize-(random(tempPlanetSize/20,tempPlanetSize/2)));
               pg.pop();
            }
            else {
               pg.ellipse(xp, yp, tempPlanetSize);

            }
            pg.endShape();
         }
   }
      pg.pop();
}



function PlanetsShine(x, y, radius, renderCanvasSize, counter) {
      pg.blendMode(OVERLAY);
      
      pg.push();

      
      defaultSize=renderCanvasSize;
      renderScaleFactor = defaultSize/renderCanvasSize;

      for (i=0; i<counter; i++) {
         let planetShineSizeRnd = random(size/20, size/3)*renderScaleFactor;
         let planetShineSize = planetShineSizeRnd/renderScaleFactor;

         //let xp = tempRadius * sin(angle);
         //let yp = tempRadius * cos(angle);
         let saturnS = random(1);
         let xps = (random(0, size))*renderScaleFactor;
         let yps = (random(0, size))*renderScaleFactor;

                  //let yps = (random(0,(size*renderScaleFactor)));

         for (j=0; j<50; j++) {
            let starAlphaS = random(0.03, 0.05);
            let tempPlanetShineSize = planetShineSizeRnd - (random((planetShineSizeRnd/20), planetShineSizeRnd));
            //pg.colorMode(HSB,1);
            pg.noStroke();
            pg.fill(random(0, 360), random(10,30), 100, starAlphaS);
            pg.beginShape();
            if (saturnS > 0.7) {
               //pg.ellipse(xps, yps, tempPlanetShineSize, tempPlanetShineSize-(random(tempPlanetShineSize/20,tempPlanetShineSize/2)));
                  
                  pg.ellipse(xps, yps, tempPlanetShineSize, tempPlanetShineSize-(random(tempPlanetShineSize/20,tempPlanetShineSize/2)));
         
            }
            else {

               //pg.ellipse(xps, yps, tempPlanetShineSize);
                  pg.ellipse(xps, yps, tempPlanetShineSize);


            }
            pg.endShape();
            
            //angle=angle+step;
         }
   }
      pg.pop();
}

function PaintColorHue(){
   if (differentPalette && random(1)>0.4 && !colorHueChanged) {
      let chStep = random(1);
      if (chStep < 0.5) {
         colorHue = (colorHue + 120) %360;
         colorHueChanged = true;
      }
      else {
         colorHue = (colorHue + 60) %360;
         colorHueChanged = true;
      }
   }
   if (!differentPalette) {
      colorHue = random(1)*360 %360;
   }
}

function drawFractalTriangles(x,y,r) {
   Color();
   let screenMode = random(1);
   if (screenMode >0.5) {
      pg.blendMode(SCREEN);
   }
   else if (screenMode > 0.55) {
      pg.blendMode(MULTIPLY);
   }
   else {
      pg.blendMode(BLEND);
   }

// Changing TRIANGLE SHAPES

   pg.triangle(x, y, x+cos(60)*r, y+sin(60)*r, (x+cos(60)*r)*dragonXshape-x+cos(60)*r, (y+sin(60)*r)*dragonYshape-y+sin(60)*r);

 
      pg.beginShape(TRIANGLES);
      pg.triangle(x, y, x+cos(60)*r, y+sin(60)*r, size/8, size/4);
      pg.endShape();
  
   r=r-3;

   if (r>(size/50)*sf) {
//drawFractalTriangles(x+100, y+100, r*sf-((random(1)*(size/6)*sf)));
      drawFractalTriangles(x+(random(1)*(size/50)*sf), y-(random(1)*(size/50)*sf), r*sf-((random(1)*(size/6)*sf))); //(size/6) main rendering speed factor
      drawFractalTriangles(x-(random(1)*(size/50)*sf), y+(random(1)*(size/50)*sf), r*sf-((random(1)*(size/6)*sf)));
      Color();
   }
}

function drawFractals(x,y,r) {
   //Color();
   let screenMode = random(1);
   if (screenMode >0.5) {
      pg.blendMode(SCREEN);
   }
   else if (screenMode > 0.55) {
      pg.blendMode(MULTIPLY);
   }
   else {
      pg.blendMode(BLEND);
   }

   if (shapeType > 0.9) {
      
      pg.rect(x,y,r*sf+(random(1)*(size/50)*sf),r*sf-(random(1)*(size/50)*sf));
   }
   else if (shapeType > 0.85) {
      pg.square(x,y,r*sf+(random(1)*(size/50)*sf));
   }
   else {
      pg.ellipse(x,y,r*sf+(random(1)*(size/50)*sf), r*sf-(random(1)*(size/50)*sf));
   }

   if (x<size*2*sf && x>-size*sf && y<size*2*sf && y>-size*sf && r>(size/50)*sf) {
      drawFractals(x+(random(1)*(size/50)*sf), y-(random(1)*(size/50)*sf), r*sf-((random(1)*(size/7)*sf))); //(size/7) main rendering speed factor
      drawFractals(x-(random(1)*(size/50)*sf), y+(random(1)*(size/50)*sf), r*sf-((random(1)*(size/7)*sf)));
      Color();
   }
}



function drawFractalStrokes(x,y,r) {
   
}

   
function Color() {
   if (fullHueSpectrum > 0.02) {
        h = random(colorHue, colorHue+20) %360;
   }
   else {
      h = random(1)*360;
   }
    
      
   if (grayscale > 0.03) {
      s = random(50, 90);
   }
   else {
      s = random(0, 6); //grayscale
   }
   b = random(30, 70);
      a = random(0.1, 0.3);
      pg.strokeWeight = random(1)*80*sscaleFactor;
      let fullColor = random(1);
      if (fullColor > 0.5) {
         //stroke(h, s, b, a*3);
         pg.fill(h, s, b, 1);
      }
      else {
         pg.stroke(h, s, b, a*3);
         pg.fill(h, s, b, a);
      }
      //return color(h,s,b,a);
   }
   
function ColorFullSpectrum() {
   h = random(colorHue+20, colorHue+40) %360;
   s = random(10, 20);
   b = random(70, 80);
   a = random(0.1, 0.2);
   pg.strokeWeight = random(1)*size/20*sscaleFactor;
   pg.stroke(h, s, b, a*3);
   pg.fill(h, s, b, a*0.2);
   //return color(h,s,b,a);
}
   
function drawPrism() {
      pg.strokeWeight = 0.015*sscaleFactor;
      pg.blendMode(MULTIPLY);
      for (i=0; i<size; i+=(size/200)) {
         for (j=0; j<size; j+=(size/200)) {
            
            if (drawPrismType >0.8) {
               pg.beginShape();
               pg.ellipse(i+(size/400), j+(size/400), size/200);
               ColorFullSpectrum();
               pg.endShape();
            }
            else {
               pg.beginShape();
               pg.triangle(i, j, i+(size/400), j+(size/200), i+(size/200), j);
               ColorFullSpectrum();
               pg.endShape();
            }
         }
      }
   }

function drawQuad(x,y) {
      pg.beginShape(QUADS);
      let quad = createVector(x,y);

      pg.vertex(quad.x,quad.y);
      pg.vertex(quad.x,quad.y+(size/5));
      pg.vertex(quad.x+(size/5),quad.y+(size/5));
      pg.vertex(quad.x+(size/5),quad.y);
      
      pg.endShape();
   }


function Dirt(screen, multiply, transparency, counter) {

      if (screen==1) {
         pg.blendMode(SCREEN);
         //pg.stroke(24,25,30,transparency);
         pg.stroke(random(130,230),25,30,transparency);
      }
      else if (multiply==1){
         pg.blendMode(MULTIPLY);
         //pg.stroke(random(140,210),25,30,transparency);
         pg.stroke(24,25,30,transparency);
      }
      pg.noFill();
      
      pg.beginShape(QUADS);
      for (let i = 0; i < counter; i++) {
        let quad = pg.createVector((random((-size/8)*renderScaleFactor, (size+(size/8))*renderScaleFactor))/renderScaleFactor, (random((-size/8)*renderScaleFactor, (size+(size/8))*renderScaleFactor))/renderScaleFactor);
        
         if (screen==1) {
            let aa = random(0.05, 0.12);
         pg.stroke(random(150,250),45,30,aa);
      }
      else if (multiply==1){
         let ab = random(0.3, 0.5);
         pg.stroke(random(18,28), 25, 30, ab);
      }
        pg.strokeWeight=(random(0.08, 0.15)*sscaleFactor);
        pg.vertex(quad.x, quad.y);
      }
      pg.endShape();
   }


function keyTyped() {
   
   if (key === 's' || key === 'S') {
      saveCanvas('Silicon Dragon Dream', 'png'); 
   }


   if (key === 'h' || key === 'H') {
      // HiRes image
      //let hdImg = makeImage(2000);
      save(pg, 'Silicon Dragon Dream HD', 'png'); 
   }   
} 

function windowResized() {
   let newSize = Math.min(windowWidth, windowHeight);
   resizeCanvas(newSize, newSize);
   //let imgResized = makeImage(newSize);
   //image(imgResized, 0, 0);
   image(pg, 0,0, width, width);
   fxpreview();
}

function Percent(part, total) {
   return (100 * part) / total;
} 
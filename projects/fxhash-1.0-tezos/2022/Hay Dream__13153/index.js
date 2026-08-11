// Hay Dream
// @Qotonana, May, 2022

// these are the variables you can use as inputs to your algorithms
console.log(fxhash)    // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

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

let size = 3000, x, y, vx, vy, ang, sz, max_sz, sz_inc, pg;

// previous points
let px;
let py;

let p = [];

let renderCanvasSize;
let scaleFactor;
let sf; //stroke scale faktor

let canvasImage;

let h = 0;
let s = 0;
let b = 0;
let hb = 0; // background color
let sb = 0;
let bb = 0;
let hue = 0;
let brightnes = 0;

let updateVeceOd;
let updateManjeOd;

// variations
let slucaj;

let Paleta1 = [0, 10, 20, 30, 30, 60, 90, 110, 120, 130];
let Paleta2 = [10, 20, 20, 30, 30, 40, 60];

let paletaColor1;
let paletaColor2;

let multicolor;
let nightMode;
let duotone;
let coolNight;
let hotSun;

let curvedFactor;



function setup() {

   pixelDensity(1);

   seed = Math.trunc(fxrand()*9999999999);
   //seedNoise = Math.trunc(fxrand()*9999999999);
      
   let aaa = Math.min(windowWidth, windowHeight);

   colorMode(HSB, 360,100,100,1);
   angleMode(DEGREES);

   makeImage(aaa);

   fxpreview();
   noLoop();
}

function makeImage(canvasSize) {

   size = 3000;   

   randomSeed(seed);
   //noiseSeed(seedNoise); 

   renderCanvasSize = canvasSize;
   scaleFactor = renderCanvasSize/size;

   sf = renderCanvasSize/1000;

   canvasImage = createCanvas(canvasSize, canvasSize);

   pixelDensity(1);
   colorMode(HSB, 360,100,100,1);
   angleMode(DEGREES);

      pg = createGraphics(renderCanvasSize, renderCanvasSize);

      pg.pixelDensity(1);
      pg.colorMode(HSB, 360,100,100,1);
      pg.angleMode(DEGREES);  
      pg.rectMode(CORNERS);

   p = [];
   px = 0;
   py = 0;


   h = 0;
   s = 0;
   b = 0;
   a = 1;

   hb = 0; // background color
   sb = 0;
   bb = 0;

   hue = 0;
   brightnes = 0;

   updateVeceOd = ((size-(size/40)) * scaleFactor);
   updateManjeOd = ((size/40)* scaleFactor);
    
   max_sz = random(20, 200) ;
   x = (renderCanvasSize / 2) ;
   y = (renderCanvasSize / 2) ;
   px = x;
   py = y;
   vx = random(-60, 60) * scaleFactor;  
   vy = random(-60, 60) * scaleFactor;
   sz = random(0, max_sz)* scaleFactor ;  
   sz_inc = random(1, 50) * scaleFactor;
   ang = 30;

  // Varijacije
  paletaColor1 = random(Paleta1);
  paletaColor2 = random(Paleta2);

  multicolor = int(random(1,5));
  nightMode = int(random(1,4));
  duotone = int(random(1,5));
  coolNight = int(random(1,3));
  hotSun = int(random(1,4));


   pg.background(ColorBackground());

   noiseTexture(150000);

   Nebo();

   Pod();

   if (nightMode == 1) {
      Mjesec(400);
   }
   else {
      Sunce(400);
   }
   

   for (var i = 0; i < 3; i++) { //do 3 default
      pg.push();
      pg.translate(random(0,size/5)*scaleFactor, random(0,size/6)*scaleFactor);

      Crtaj();
      //pg.reset();
      pg.pop();
   }

   image(pg, 0,0, renderCanvasSize, renderCanvasSize);
   fxpreview();
   noLoop(); 

   return(pg);

  }

function Nebo() {

   let nFactor = 0.6;
   let dotNeboSize = 20;

   for (let j = 0; j < size/2; j+=10) {

      for (let i = 0; i < size; i+=3)  {
         //ColorOrig();
         if (duotone == 1 && nightMode !=1) 
            ColorOrig();
         else
            ColorNebo();

         if (random(1) > nFactor) {

         pg.strokeWeight(random(0.2, dotNeboSize) * scaleFactor);
         pg.point(i*scaleFactor, j*scaleFactor);
         }

      }
      nFactor+=0.003;

      if (dotNeboSize > 0.5) {
         dotNeboSize-=0.1;
      }
   }
}


function Pod() {

   let pFactor = 0.6;
   let dotPodSize = 20;
   let podStep = renderCanvasSize/250;

   for (let j = size; j > size*2/3; j-=3) {

      for (let i = 0; i < size; i+=3)  {
         ColorOrig();
         if (random(1) > pFactor) {

         //pg.fill(h,s,b,a*2);
         pg.strokeWeight(random(0.2, dotPodSize) * scaleFactor);
         pg.point(i*scaleFactor, j*scaleFactor);
         //pg.circle(i,j, random(0.2, dotNeboSize/5));
         }

      }
      pFactor+=0.003;

      if (dotPodSize > 1.0) {
         dotPodSize-=0.2;
      }
   }
}

function Sunce(sunceRadius) {

   pg.noFill();
   let r = sunceRadius*scaleFactor;
   let sunPosX = random(size/40, (size-(size/40))) * scaleFactor;
   let sunPosY = random(size/5, size/3) * scaleFactor;

   let krugStepFaktor = 20;
   let dotSize = 40;
  

   for (let i = 3*scaleFactor; i < r; i+=5*scaleFactor) {

      for (let j = 0; j < 360; j+=krugStepFaktor) {
      
            ColorSun();

         pg.strokeWeight(random(0.2, dotSize) * scaleFactor);
         let rRandomFactor = random(1,20)*scaleFactor ;
         let xSun = i*2 * Math.sin(j);
         let ySun = i*2 * Math.cos(j);

         pg.point(sunPosX+ xSun+rRandomFactor, sunPosY + ySun+rRandomFactor);

         pg.point(sunPosX- xSun-rRandomFactor, sunPosY - ySun-rRandomFactor);

      }
      if (krugStepFaktor > 5) {
         krugStepFaktor-=3;
      }

      if (dotSize > 2) {
         dotSize-=0.5; //0.5 default
      }
      
   }
}

function Mjesec(sunceRadius) {

   pg.noFill();
   let r = sunceRadius*scaleFactor;
   let mjPosX = random(size/40, (size-(size/40))) * scaleFactor;
   let mjPosY = random(size/5, size/3) * scaleFactor;

   let krugStepFaktor = 20;
   let dotSize = 40;
  

   for (let i = 3*scaleFactor; i < r; i+=5*scaleFactor) {

      for (let m = 0; m < 360/PI; m+=krugStepFaktor) {
         //ColorOrig();
         ColorMoon();
         pg.strokeWeight(random(0.2, dotSize) * scaleFactor);
         let rRandomFactor = random(1,20)*scaleFactor ;
         let xMje = i*2 * Math.sin(m/2);
         let yMje = i*2 * Math.cos(m/2);

         pg.point(mjPosX+ xMje+rRandomFactor, mjPosY + yMje+rRandomFactor);

         pg.point(mjPosX- xMje-rRandomFactor, mjPosY - yMje-rRandomFactor);

      }
      if (krugStepFaktor > 5) {
         krugStepFaktor-=3;
      }

      if (dotSize > 2) {
         dotSize-=0.5; //0.5 default
      }
      
   }
}




function noiseTexture(gustoca) {

  pg.noStroke();
  ColorBackground();
  let velicinaNoise1 = size/400;
  let velicinaNoise2 = size/800;

   for (var i = 0; i < gustoca; i++) {

      let newbb = bb - random(10);
      pg.fill(hb - random(5), sb - random(5), newbb, 1);
      pg.circle(random(size)*scaleFactor, random(size)*scaleFactor, random(velicinaNoise1, velicinaNoise2)*scaleFactor) ; 

      }      
}


function update() {
  if (x + vx > (updateVeceOd) || x + vx < (updateManjeOd)) {
   vx *= -(1);
  }
   
   if (y + vy > ((size-(size/40)) * scaleFactor) || y + vy < (size/2* scaleFactor)) {
   vy *= -(1);
  }
    
  if (sz + sz_inc > max_sz   || sz + sz_inc < 0) {
   sz_inc *= -(1);
  }
    
  px = x;
  py = y;
  p.push(px,py);

  x += vx;
  y += vy;
  sz += sz_inc;

}


function Crtaj() {

   BufferiCrtaj(1000); // 1000 - 2000 default

}


function BufferiCrtaj(iteration_count) {

for (let i = 0; i < iteration_count ; i++) {


 if (random(1) < 0.8) {
      pg.stroke(h, s, 0);
      pg.noFill();
    }
     
    else {

      if (random(1) > 0.2) {
         ColorOrig();
      }
      if (random(1) > 0.95) {
        // pg.fill(h,0,b,a);
      }
   }

   if (random(1) > 0.4) {
   

      if (random(1) > 0.2) {
         ColorOrig();
      }
      if (random(1) > 0.8) {
      }
   }



    let lerpCounter = 5; // 10 default

    let squareSize;

    let ellipseSize = random(0.1, 25); // default 0.1 - 40

    if (random(1) > 0.1) {
         squareSize = random(0.1,5); 
    }
    else {
         squareSize = random(0.1,25); 
    }

    let d = dist(px, py, x, y);
    let lerpRadius = d * squareSize;

    pg.strokeWeight(random(0.008,2.009) * scaleFactor);
   

   for (ff = 0; ff < 36; ff+=10) {
         
      if (random(1) > 0.8) {

         // bijeli kvadrati
         if (random(1) > 0.99) {

            if (random(1) > 0.3) {
               squareSize = squareSize/5;
            }

            pg.stroke(h,0,90,1);

         
         }

      // pauk
      pg.noFill();

         
      pg.strokeWeight(random(0.2,5.5) * scaleFactor);
      if (random() > 0.98) { //0.99 default

         for (s = 0; s < 360; s+=20) {

            if (random() > 0.8 ) {
               pg.blendMode(SOFT_LIGHT);
            }
            else {
               pg.blendMode(BLEND);
            }

            let xS = d *1 * Math.sin(s); // *vx za 360 
            let yS = d *1 * Math.cos(s);

            pg.strokeWeight(random(0.2, 10.5)*scaleFactor);

            pg.bezier(x, y, x-xS, y-yS, x+xS, y+yS, px, py); // bezier pauci
         }
      }

       let lerpRadiusSizeFactor = random(1,20)*scaleFactor ;

       ///// POINTS
          for (k = 1; k < 360; k+=10) {
            
            let lerpRadiusRandomFactor = random(1,20)*scaleFactor ;
            let xR = lerpRadius * Math.sin(k);
            let yR = lerpRadius * Math.cos(k);

            if (random(1) > 0.1) {
              pg.point(xR+x+lerpRadiusRandomFactor, yR+y+lerpRadiusRandomFactor);
              pg.point(xR+x-lerpRadiusRandomFactor, yR+y-lerpRadiusRandomFactor);   
            }
         }
            
      }
   }

   // if (random() > 0.8 ) {
   //    pg.blendMode(SOFT_LIGHT);
   // }
   // else {
   //    pg.blendMode(BLEND);
   // }
   
   curvedFactor = 200*scaleFactor; // 200 default 0.2 20  manji duže linije , veći valovitije

   let bzControlPointsX = (size*scaleFactor/curvedFactor)*vx;
   let bzControlPointsY = (size*scaleFactor/curvedFactor)*vx;
   
   //SHAPES BEZIER
   pg.noFill();
   
   pg.beginShape();
     if (random(1) > 0.2) {
        pg.strokeWeight(random(0.2, 5.5)*scaleFactor);
    
        pg.bezier(x-(size*scaleFactor), y+(size*scaleFactor), size*scaleFactor/2, size*scaleFactor, x+(bzControlPointsX), y+(bzControlPointsY), px, py); 
     }

   pg.endShape();
  


   vx = random(-60, 60) * scaleFactor;  
   vy = random(-60, 60) * scaleFactor;
   sz = random(0, max_sz)* scaleFactor ;  
   sz_inc = random(1, 50) * scaleFactor;
   ang = random(0, 360);
   update();    
  }
}



function ColorOrig() {

   s = random(30, 72); // orig

   if (random(1) > 0.95) {
      b = random(10,30);
   }
   else {
      b = random(40, 70); //orig 
   }
   
   if (random(1) > 0.5) {
      if(multicolor == 1) {
         h = random(Paleta1);
      }
      else {
         h = paletaColor1;
      }
   }
   else {
      if(multicolor == 1) {
         h = random(Paleta2);
      }
      else {
         h = paletaColor2;
      }
   }

   if (duotone) {
      if(multicolor == 1) {
         h = random(Paleta1);
      }
      else {
         h = paletaColor1;
      }
   }

   a = random(0.6, 0.9);
   brightnes = random(20, 30);
   //pg.fill(h, s, b, a*2);


   if (nightMode == 1) {
      if (coolNight == 1)
         ColorMoon();
      else {
         s = random (10, 30);
         b = random (20,60);
      }
   }
   //return color(h,s,b);
   
   pg.stroke(h,s,b);
}



function ColorSun() {

   if (random(1) > 0.1) {
      s = random(50, 92); // orig
      b = random(40, 90); //orig  
   }
   else {
      s = random(0, 10); // WHITE
      b = random(90, 95); //WHITE
   }
   
   h = random(0,40);

   a = random(0.6, 0.9);
   //pg.fill(h, s, b, a*2);
   pg.stroke(h,s,b);


   //return color(h,s,b);
}


function ColorMoon() {

   if (random(1) > 0.2) {
      s = random(20, 92); // orig
      b = random(20, 90); //orig  
   }
   else {
      s = random(0, 10); // WHITE
      b = random(90, 95); //WHITE
   }
   
   h = random(180,210);

   a = random(0.6, 0.9);
   //pg.fill(h, s, b, a*2);
   pg.stroke(h,s,b);


   //return color(h,s,b);
}

function ColorNebo() {

   s = random(50, 92); // orig

   if (random(1) > 0.95) {
      b = random(10,30);
   }
   else {
      b = random(40, 80); //orig 
   }
   
   if (hotSun == 1) {
      h = random(0,30);
   }
   else {
      h = random(180,230);
   }


   a = random(0.6, 0.9);
   //pg.fill(h, s, b, a*2);
   pg.stroke(h,s,b,a);

   //return color(h,s,b);
}



function windowResized() {
   let newSize = Math.min(windowWidth, windowHeight);
   resizeCanvas(newSize, newSize);
   let imgResized = makeImage(newSize);
   //image(imgResized, 0, 0);
}


function ColorBackground() {
     
   if (nightMode == 1) {
      hb = random(200, 240);
      sb = random(60, 70);
      //bb = random(10,15);
      bb = random(20,30);

   }
   else {
      if (hotSun == 1){
         hb = random(20, 40);
         sb = random(80, 90);
         bb = random(69, 80);
      } 
      else {
         hb = random(0, 360);
         sb = random(1, 2);
         bb = random(94,98); 
      }
   }

   if (duotone == 1 && nightMode != 1) {
      if(multicolor == 1) {
         hb = random(Paleta1);
         if (nightMode == 1) {
            sb = random(60, 70);
            bb = random(20,30);
         }
         
      }
      else {
         hb = paletaColor1;
         if (nightMode == 1) {
            sb = random(60, 70);
            bb = random(20,30);
         }
      }
   }

   pg.fill(hb, sb, bb);
   return color(hb,sb,bb);
}




function keyTyped() {
   
   if (key === 's' || key === 'S') {
      
      saveCanvas('Hay_Dream', 'png'); 
      //save(pg, 'Hay_Dream', 'png'); 
   }
   
   
   if (key === 'h' || key === 'H') {
      // HiRes image
      let hdImg = makeImage(2000);
      //saveCanvas('Hay_Dream HD', 'png'); 
      save(hdImg, 'Hay_Dream HD', 'png'); 
   }
   
   if (key === '4') {
      // 4000x4000px image
      let hdImg = makeImage(4000);
      saveCanvas('Hay_Dream 4000x4000', 'png'); 
   }
   
   if (key === '8') {
       // 8000x8000px image
      let hdImg = makeImage(8000);
      saveCanvas('Hay_Dream 8000x8000', 'png'); 
   }
   
   
} 
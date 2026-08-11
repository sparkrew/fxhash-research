let seed = fxrand() * 989134521188571;

let canvasSize = Math.min(window.innerWidth, window.innerHeight);

let features = {};

function setup() {
   var canvas = createCanvas(windowWidth, windowHeight);
 noLoop();
    resetRandom();
  
  randomColor1 = color(random(0, 255), random(0, 255), random(0, 255), 255);
  rc1 = randomColor1.toString('#rrggbb');

 color1 = rc1;
  
 document.documentElement.style.setProperty('--c1', color1);

   features.Color1 = color1;
  
  
  
  
    randomColor2 = color(random(0, 255), random(0, 255), random(0, 255), 255);
  rc2 = randomColor2.toString('#rrggbb');

 color2 = rc2;
  
 document.documentElement.style.setProperty('--c2', color2);

   features.Color2 = color2;
  
  
  
    
    randomColor3 = color(random(0, 255), random(0, 255), random(0, 255), 255);
  rc3 = randomColor3.toString('#rrggbb');

 color3 = rc3;
  
 document.documentElement.style.setProperty('--c3', color3);

   features.Color3 = color3;
  
  
  
  window.$fxhashFeatures = features;
  
     console.log(features);
   
}

function windowResized() {
  resizeCanvas(canvasSize, canvasSize);
   resetRandom();
}

function draw() {

     resetRandom();
  
     let color1parent = createDiv(color1);
color1parent.addClass('color1parent');
  
  
     let color2parent = createDiv();
color2parent.addClass('color2parent');
  
  
       let color3parent = createDiv(color2);
color3parent.addClass('color3parent');
  
         let color4parent = createDiv();
color4parent.addClass('color4parent');
  
           let color5parent = createDiv(color3);
color5parent.addClass('color5parent');
  
           let color6parent = createDiv();
color6parent.addClass('color6parent');
  
  
       let color7parent = createDiv(color3);
color7parent.addClass('color7parent');
  
  
     let color8parent = createDiv();
color8parent.addClass('color8parent');
  
         let color9parent = createDiv(color1);
color9parent.addClass('color9parent');
  
  
     let color10parent = createDiv();
color10parent.addClass('color10parent');
  
  
}

function resetRandom() {
  randomSeed(seed);
}
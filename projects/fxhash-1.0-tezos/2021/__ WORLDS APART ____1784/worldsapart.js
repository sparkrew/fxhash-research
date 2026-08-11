let hash = fxhash;

let colorA, colorB;
let x,y,z;
let sz; 
let mult = fxrand();
let spheresize = fxrand();
let spherex, spherey, spherez;


let features = {};

if (parseInt(hash.substring(2,3)) < 6) {
  features.Signed = true;
  let sig;
}

if (parseInt(hash.substring(3,4)) < 8) {
      features.Color = "CYBERPUNK";
}
else {
  features.Color = "monochrome";
}

if (hash.substring(3, 4).toLowerCase() == "i") {
  features.Inverted = true;
}

window.$fxhashFeatures = features;


window.addEventListener("resize", setup);



function preload() {
  if (features.Signed) {
    sig = loadImage('./sig.png');
    sigblack = loadImage('./sigblack.png');
  }
}


function setup(e) {

  if (e) {
    sz = e.target.outerWidth < e.target.outerHeight ? e.target.outerWidth : e.target.outerHeight;
  }
  else {
    sz = windowWidth < windowHeight ? windowWidth : windowHeight;
    spherex = (fxrand() * (sz * 2)) - (sz);
    spherey = (fxrand() * (sz * 2)) - (sz);
    spherez = (fxrand() * (sz * 2)) - (sz);
  }


  sz *= .95;
  createCanvas(sz, sz, WEBGL);
  background(0);



  if (features.Inverted) {
    let rx = 10 - (sz / 2);
    rect(rx, rx, sz - 10);
  }

  if (features.Color == "CYBERPUNK") {
    colorA = color("#FF0000");
    colorB = color("#0000FF");
  }
  else {
    colorA = color("#FFFFFF");
    colorB = color("#000000");
  }

  strokeWeight(sz * .015);
  stroke(colorA);
  let counter = 1;
  
  ambientLight(100);
  specularMaterial(colorA);
  shininess(100);
  curveDetail(30); 
  curveTightness(5);
  
  for (let i = 4; i < 24; i++) {
    if (counter == 1) {
      beginShape();
    }  
    
    stroke(lerpColor(colorA, colorB, i / 24)); 

    x = Math.trunc((parseInt("0x" + hash.charAt(i)) / 15) * sz);
    y = Math.trunc((parseInt("0x" + hash.charAt(i+1)) / 15) * sz);
    z = Math.trunc((parseInt("0x" + hash.charAt(i+2)) / 15) * sz);
    x -= sz / 2;
    y -= sz / 2;
    z -= sz / 2;

    curveVertex(x, y, z);    
    
    if (counter == 4) {
      endShape();
      counter = 1;
      i -= 3;
    }
    else {
      counter++;
    }

    
    point(z, y, x);
    point(z, x, y);
    point(z, z, z);

  }


  translate(x, y, z);
  
  strokeWeight(3);
  stroke(colorA);
  
  ambientLight(50);
  pointLight(255, 255, 255, 700, 700, 500);
  
  colorB.setAlpha(50); // FINE TUNE TRANSPARENCY LEVEL
  specularMaterial(colorB);
  shininess(100);
  if (features.Color == "CYBERPUNK") {
    stroke(color('#EA00D9'));
  }
  

  if (features.Signed) {
    sigx = (fxrand() * (sz * .8)) - (sz / 2) + (sz * .1);
    sigy = (fxrand() * (sz * .8)) - (sz / 2) + (sz * .1);
    sigh = (mult * (sz / 10)) + (sz * .05);
    sigw = sigh * .678;
  }
}

function draw() {
  push();
  translate(spherex, spherey, spherez);
  sphere(spheresize * (sz/3)); 
  pop();

  if (features.Signed) {
    noStroke();
    if (features.Inverted) {
      texture(sigblack);
    }
    else {
      texture(sig); 
    }
    translate(sigx, sigy);
    angleMode(DEGREES);
    rotate(-15);
    plane(sigh, sigw);
  }
}

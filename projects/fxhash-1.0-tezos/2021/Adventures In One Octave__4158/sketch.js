//Adventures in One Octave ~ ArtikGenerative.xyz

let random = (a = 1, b = 0) => fxrand() * (b - a) + a
let art;
let art2;
let art3;
function preload() {
 	art1 = loadImage("artik01.jpg");
    art2 = loadImage("artik02.jpg");
    art3 = loadImage("artik03.jpg");
}

function setup() {
    m = min(windowWidth, windowHeight);
    createCanvas(m*0.8, m);
    background(255);
    noLoop();
	splcGen();
}

function draw() {  
  loadPixels();
    let p = pixelDensity(),
      e = 1000 * p * 4 * (m * p);
    for (let p = 0; p < e; p += 4)
        (grainQty = fxrand()*60 + 20),
        (pixels[p] = pixels[p] + grainQty),
        (pixels[p + 1] = pixels[p + 1] + grainQty),
        (pixels[p + 2] = pixels[p + 2] + grainQty),
        (pixels[p + 3] = pixels[p + 3] + grainQty);  
    updatePixels();  
}
    
  function imgPick(rand) {
    if (rand < 1) {
      return art1;
    } else if (1 < rand && rand < 2) {
      return art2;
    } else if (2 < rand && rand < 3) {
      return art3;
    } else if (3 < rand && rand < 4) {
      return art1;
    } else if (4 < rand && rand < 5) {
      return art2;
    }
  }

function splcGen(){  
 gridder(0,0,800); 
}

function gridder(x, y, g) {
  let divGrd = int(fxrand() * (6-2) + 2);
  let w = g / divGrd;
  for (let i = x; i < x + g - fxrand() * 10 + (-10); i += w) {
  for (let j = y; j < y + g - fxrand() * 10 + (-10); j += w) {
      if (fxrand() * 1 < 0.6 && g > m/5) {
        gridder(i, j, w);
      } else {
		  pixelate(i,j,w); }
    }
  }
}

function pixelate(x,y,p){  
    let artUse = imgPick(fxrand() * 5);
    let amt = p/int(fxrand() * (8-4) + 4);
	artUse.loadPixels();
	for(var i = x; i < x+p; i+=amt){
      for(var j = y; j < y+p; j+=amt){
        var screen = (j*artUse.width+i)*int(fxrand() * (4-2) + 2);
        var c = artUse.pixels[screen+0];
			fill(c,c,c);
			noStroke();
      	rect(i,j,m*0.8, m);
      }
    }
}


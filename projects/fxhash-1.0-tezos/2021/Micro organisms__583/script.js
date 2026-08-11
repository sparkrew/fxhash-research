// your code goes here

var blobs = []
let xx = [];
let yy = [];
let cnv;
console.log(Math.round(getRandMinMax(1,15), 0))
function setup() {
    // square dimensions
    w = min(windowWidth, windowHeight)
    cnv = createCanvas(w,w);
    centerCanvas();
  colorMode(HSB);
  for (i = 0; i < fxrand()*30; i++) blobs.push(new Blob(fxrand()*height, fxrand()*width));
  
  for(let i = 0; i < Math.round(getRandMinMax(1,15), 0); i++){
   xx.push(i * 10);
   yy.push(20);
  }
}

//function getFeatureString(value) {
//  if (value < 5) return "low"
//  if (value < 10) return "medium"
//  else return "high"
//}

function getRandMinMax(min,max) {
  return fxrand()*(max-min)+min
}

//window.$fxhashFeatures = {
//  // feature can only be "low", "medium" or "high"
//  "Orbs Density": getFeatureString(getRandMinMax(1,15))
//}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}


function draw() {
  background(0);

  loadPixels();
  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      let sum = 0;
      for (i = 0; i < blobs.length; i++) {
        let xdif = x - blobs[i].x;
        let ydif = y - blobs[i].y;
        let d = sqrt((xdif * xdif)/fxrand() + (ydif * ydif));
        sum += 15/fxrand() * blobs[i].r / d;
      }
	  	
	  
      set(x, y, color(sum+Math.round(getRandMinMax(1,15), 0), Math.round(getRandMinMax(1,15), 0)*100, 255));
    }
  }
  
	updatePixels();
   
	//for(let i = 0; i < xx.length; i++){
	//	let xo = cos(0.1 + i*0.1) * 130; 
	//	let yo = sin(0.1 + i*0.1) * 100; 
	//	c = color(65);
	//	fill(c);
	//	noStroke();
	//	ellipse(xx[i] + xo, yy[i] + yo, 10);
		
	//}
}


class Blob {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = fxrand()*90;
  }

 

  show() { 
    noFill();
    noStroke();
    rect(this.x, this.y, this.r * 30, this.r * 20);
  }
}

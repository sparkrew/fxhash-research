
// soft wired by Fills | @no_fills
// Please refer to License.txt file for more info

// variables for fxrand function - uncomment these two lines before loading to fxhash
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()



let p=1000
var cnv;

function setup() {
  preDraw()
  noLoop()
  
  
}

function draw() {

  background(random(220,255),random(220,255),random(220,255));
  stroke(random(255), random(255), random(255));
  strokeWeight(random(0,0.2));
  
  for (let i = 0; i < random(1000,100000); i++) {

        rect(random(p/5,p - p/5), random(p/6, p - p/5), random(p/8), random(p/8), random(20))

        fill(random(255),random(255),random(255), 20);
   
    
}
  
fxpreview()
}

function preDraw(){
  
  seed=int(fxrand() * 100000000); 

  randomSeed(seed);
  noiseSeed(seed);
  let tempcanvas=createCanvas(p, p);
  tempcanvas.parent('fullscreen');
  rectMode(CENTER)
  pixelDensity(1);
  
}

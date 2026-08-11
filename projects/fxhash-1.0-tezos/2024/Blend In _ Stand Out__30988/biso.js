let rw, rh;

let fc;

let zed;

let bm;

let p5Seed = 0;

let brdr;

let canW, canH;

let howMany;



function setup() {
    
  p5Seed = $fx.rand() * 999999;
  randomSeed(p5Seed);
  canW = int(random(1266, 2048)); 
  canH =  int(random(1266, 2048)); 
  createCanvas(canW, canH, WEBGL);

  background(0);
  
  sw = int(random(10, 24));
  
  zed = 0;
  fc = random(['red', 'yellow', 'blue', 'green', 'orange', 'purple']);
  
  brdr = random(32, 64);
  
  howMany = int(random(2, 4));

}

function draw() {
  
  bm = random([EXCLUSION, SCREEN, ADD])
  
  rw = random(width * 0.05, width * 0.75);
  rh = random(height * 0.05, height * 0.75);
  blendMode(bm);
  push();
  noStroke();
  fill(fc);
  plane(rw, rh, 1,1);
  pop();
  
  zed++;
  
  switch(fc){
      
    case 'red':
        fc = random([ 'yellow', 'blue', 'green', 'orange', 'purple']);
      break;
      
     
      case 'yellow':
        fc = random([ 'red', 'blue', 'green', 'orange', 'purple']);
      break;
     
      case 'blue':
        fc = random([ 'yellow', 'red', 'green', 'orange', 'purple']);
      break;
     
      case 'green':
        fc = random(['yellow', 'red', 'blue', 'orange', 'purple']);
      break;
            
      case 'orange':
        fc = random([ 'red', 'yellow', 'blue', 'green', 'purple']);
      break;
            
      case 'purple':
        fc = random([ 'red', 'yellow', 'blue', 'green', 'orange']);
      break;
  
  }



	if (frameCount > howMany) {
    $fx.preview();
    noLoop();
	}
    
  
  
}

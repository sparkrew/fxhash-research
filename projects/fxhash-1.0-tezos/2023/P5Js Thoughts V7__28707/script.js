var t;

let seed = 0; // to hold random seed

const isMob = /Android|webOS|iPhone|iPad|IEMobile|Opera Mini/i.test(navigator.userAgent);

function preload()  
{
  seed = int(fxrand() * 999999);
}  

function setup() {
  (isMob) ? pixelDensity(1): pixelDensity(min(window.devicePixelRatio), 2);
  randomSeed(seed);
  noiseSeed(seed);

  createCanvas(2048, 2048);
  background(255);

  drawingContext.shadowOffsetX = 4;
  drawingContext.shadowOffsetY = -4;
  drawingContext.shadowBlur = 15;
  drawingContext.shadowColor = 'black';

  strokeWeight(2);
  fill(random(30,255), random(30,255), random(30,255), 255);
  rectMode(CENTER);
  rect(1024, 1024, 1800);
  stroke(3,12);
  noFill();
  t = 0;
  frameRate(60);

}

function draw() {

noiseDetail(8);

  var x1 = width * noise(t + cos(250*PI / 3));
  var x2 = width * noise(t + cos(170*PI / 3));
  var x3 = width * noise(t + cos(60*PI / 2));
  var x4 = width * noise(t + cos(45*PI / 3));
  var y1 = height * noise(t + sin(325*PI / 3));
  var y2 = height * noise(t + sin(200*PI / 3));
  var y3 = height * noise(t + sin(125*PI / 2));
  var y4 = height * noise(t + sin(410*PI / 2));

   strokeWeight(1);
   stroke(5, 5, 5, random(50));
   circle(x1, y1, random(10,200));
   square(x4, y4, random(10,200));

   colorMode(HSL, random(100, 255));
   strokeWeight(random(2));
   stroke(5,5,5,random(255));
   fill(random(20,255), random(20,255), random(255), random(50,255));

  bezier(x1, y1, x2, y2, 1000, 1000, x4, y4);
  bezier(x2, y2, x3, y3, x4, y4, 1000, 1000);
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

strokeWeight(0.5);
  noFill();
  stroke(10, 10, 10, random(25,170));
  line(128, y1, x2, y2, x3, 1920);
  line(1920, y4, x3, y3, x2, 128);

  t += random(0.03, 0.05);
  
  //squares
   noFill();
   strokeWeight(0.4);
   stroke(5, 5, 5, random(20));
   square(x1, y1, random(2000));
   square(x4, y4, random(-2000));
   square(x2, y2, random(2000));
   square(x3, y3, random(-2000));

   if(frameCount>350){noLoop()
}

  if (frameCount === 350) fxpreview();
}

// function to save an output, with a the unique hash as the filename (so you can always come back to it), 
// when the user presses 's' (upper or lower-case)
function keyTyped() {
    if (keyCode === 83) {
        save(fxhash);
    }
    return false; // prevent any unwanted default browser behaviour
}

// Function by Ynnckth// Fxhash Function by Cassio Dezotti// CreativeCommons Attribution ShareAlike //https://creativecommons.org/licenses/by-sa/4.0/
  var tk1 =0; 
  var tk2  =0;
  var tk3 =0;
  var tk4=0;

var xOffset = 0.1;     // Perlin x-offset
var yOffset = 0.1;     // Perlin y-offset
var offsetInc = 0.005; // Perlin offset increment
var inc = 0.6        // Perin increment
var s = 1       // Start size of perlin ring
var m = 1.005;         // Size multiplier

 


function setup() 
{
  print(fxhash[3])
   frameRate(240)
            
  
   for(var x = 0; x < fxhash.length; x++){
    if(x<13){
      tk1 += unchar(fxhash[x]); 
    }
    if (x>13 && x < 27){
      tk2 += unchar(fxhash[x]);
    }
    if (x>27 && x < 40){
      tk3 += unchar(fxhash[x]);
    }
    if (x>40 ){
      tk4 += unchar(fxhash[x]);
    }
  }
  tk5 = map (tk1,850,1000,150,300);
  tk6 = map (tk2,900,9000,1,90);
  tk7 = map (tk3,850,9000,150,2000);
  tk8 = map (tk4,900,9000,0,80);
  print(tk5,tk6,tk7,tk8); 
 
{
	createCanvas(windowWidth, windowHeight);
  background(0);
  blendMode(ADD);
  noFill();
  stroke(tk5 - 95 - tk7, tk7 - 30 * tk6, 5 * tk7 - 850, 80 * tk6)
}
  }
function draw() {
  translate(width * 0.6, height * 0.6);

  if (s < 2000) {
    // Create a series of perlin rings from big to small
    for (var nTimes = 0; nTimes < 6; nTimes++) {

      // Less points for smaller rings
      nPoints = int(1.5 * PI * s);
      nPoints = min(nPoints, 10000);

      // Create ring
      beginShape();
      for (var i = 0; i < nPoints; i++) {
        var a = i / nPoints * TAU;
        var p = p5.Vector.fromAngle(i / nPoints  * TAU);
        var n = noise(xOffset + p.x * (tk6 - 2) * inc, yOffset + p.y * (tk6 - 2) * inc) * s;
        p.mult(n);
        vertex(p.x, p.y);
      }
      endShape(CLOSE);

      // Increment perlin offset for next ring
      xOffset += offsetInc;
      yOffset += offsetInc;

      // Reduce size for next ring
      s *= 1.001 * m;
    }
  } else {
    noLoop();
  }
}

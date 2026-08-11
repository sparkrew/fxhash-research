
let palette = ["#310906", "#353535", "#633533", "#90605E", "#E9B6B4", "#F3EFE0", "#212121", "#C1D3C8", "#8FB7B0", "597380", "#101010", "#3E5168", "#222E50", "#171717", "#BC9E32", "#0D152D", "#562524"]
const isMob = /Android|webOS|iPhone|iPad|IEMobile|Opera Mini/i.test(navigator.userAgent);
function preload()  
{
  seed = int(fxrand() * 999999);
}  
function setup() {
  (isMob) ? pixelDensity(1): pixelDensity(min(window.devicePixelRatio), 2);
  randomSeed(seed);
  noiseSeed(seed);
   createCanvas(1600,1600, WEBGL)
   angleMode(DEGREES);
   background("#fffceb");
}

function draw() {
   frameRate(10)
   brush.scaleBrushes(2)
   translate(-width/2,-height/2)
   brush.field("curved")
   brush.pick("marker2")
   rotateX(random(-4,4));
   rotateY(random(-4,6));
   rotateZ(random(-1,1));
   for (let j = 0; j < random(3,10); j++) {

   brush.stroke(random(palette));
   brush.beginStroke("curve", width * random(0.1,0.9), height * random(0.1,0.9));
   //brush.bleed(0.3, "out");
   let init_angle = random(width);
   let init_angle2 = random(height);
   for (let i = 0; i < height/2; i++) {
   brush.clip([100,100,1500,1500]);
   brush.strokeWeight(random(0.3,0.7));

   brush.segment(i, init_angle, 10, true);
   brush.segment(init_angle2, i, 6, true);
   brush.flowLine(init_angle2, i, init_angle, i);
   brush.flowLine(i, init_angle, i, init_angle2);
   brush.circle(init_angle2, init_angle, random(20,150), true);

      }
   brush.endStroke(0 + init_angle,1)
   }

    console.log(floor(frameRate()));
   if(frameCount>5){noLoop()
}

  if (frameCount === 5) fxpreview();
}

// function to save an output, with a the unique hash as the filename (so you can always come back to it), 
// when the user presses 's' (upper or lower-case)
function keyTyped() {
    if (keyCode === 83) {
        save(fxhash);
    }
    return false; // prevent any unwanted default browser behaviour
}

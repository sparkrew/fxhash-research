let inc = 0.33;
let zoff = 0.25;
let particles = [];
let flowfield;
const isMob = /Android|webOS|iPhone|iPad|IEMobile|Opera Mini/i.test(navigator.userAgent);
function preload()  
{
  seed = int(fxrand() * 999999);
}  
function setup() {
  (isMob) ? pixelDensity(1): pixelDensity(min(window.devicePixelRatio), 2);
  randomSeed(seed);
  noiseSeed(seed);
    createCanvas(1600,1600);
    background(random(50,230));

for (let i = 0; i < 100000; i++) {
    strokeWeight(random(2,3));
    stroke(random(1,20), random(1,20), random(1,20), 10);
    point(random(1600), random(1600));
  }

  drawingContext.shadowBlur = 6;
  drawingContext.shadowColor = 'black';

    scl = random(75,400);
    cols = floor(width / scl);
    rows = floor(height / scl);
    flowfield = new Array(cols * rows);
    for (let i = 0; i < 15; i++) {
        particles[i] = new Particle();
    }
}

function draw() {
    let yoff = 0.15

    for (let y = 0; y < rows; y++) {
        let xoff = 0.35;
        for (let x = 0; x < cols; x++) {
            let index = x + y * cols;
            let angle = noise(xoff, yoff, zoff) * TWO_PI * 15
            let v = p5.Vector.fromAngle(angle);
            v.setMag(9);
            flowfield[index] = v;
            xoff += inc;


        }
        yoff += inc;
        zoff += 0.0003;
    }

    for (let i = 0; i < particles.length; i++) {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show();
    }
    console.log(floor(frameRate()));
   if(frameCount>500){noLoop()
}

  if (frameCount === 500) fxpreview();
}

// function to save an output, with a the unique hash as the filename (so you can always come back to it), 
// when the user presses 's' (upper or lower-case)
function keyTyped() {
    if (keyCode === 83) {
        save(fxhash);
    }
    return false; // prevent any unwanted default browser behaviour
}
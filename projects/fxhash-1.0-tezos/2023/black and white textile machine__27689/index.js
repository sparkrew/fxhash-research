//0619t2

let canvasWidth = 2000;
let canvasHeight = 2000;
let canvas;

$fx.params([
  {
    id: "a10",
    name: "size variable 1",
    type: "number",
    default: 0.91,
    options: {
      min: 0.7,
      max: 1.3,
      step: 0.01,
    },
  },
  {
    id: "a11",
    name: "size variable 2",
    type: "number",
    default: 2.1,
    options: {
      min: 1.5,
      max: 2.6,
      step: 0.01,
    },
  },
  {
    id: "a12",
    name: "translate variable 1",
    type: "number",
    default: 3.1,
    options: {
      min: 2.5,
      max: 3.6,
      step: 0.01,
    },
  },
  {
    id: "a13",
    name: "size variable 3",
    type: "number",
    default: 3.1,
    options: {
      min: 2.5,
      max: 3.6,
      step: 0.01,
    },
  },
  {
    id: "a14",
    name: "size variable 4",
    type: "number",
    default: 1.1,
    options: {
      min: 0.5,
      max: 1.6,
      step: 0.01,
    },
  },
  {
    id: "a15",
    name: "translate variable 2",
    type: "number",
    default: 1.1,
    options: {
      min: 0.7,
      max: 1.6,
      step: 0.01,
    },
  },
  {
    id: "a26",
    name: "density",
    type: "number",
    default: 12,
    options: {
      min: 8,
      max: 32,
      step: 1,
    },
  },

]);

a10 = $fx.getParam("a10");
a11 = $fx.getParam("a11");
a12 = $fx.getParam("a12");
a13 = $fx.getParam("a13");
a14 = $fx.getParam("a14");
a15 = $fx.getParam("a15");
a26 = $fx.getParam("a26");



function setup() {
  c2 = min(windowWidth, windowHeight);
  createCanvas(c2, c2, WEBGL);
  canvas = createGraphics(canvasWidth, canvasHeight, WEBGL);
  background(255);
  cs = canvasWidth;
  // a10 = 0.91;
  //  a11 = 2.1;
  //  a12 = 3.1;
  // a13 = 3.1;
  // a14 = 1.1;
  // a15 = 1.1;

  // a26 = 28; //8-32
  // b11 = 80 * fxrand();
  frameRate(30);
  window.$fx.features({
    "size variable 1": $fx.getParam("a10"),
    "size variable 2": $fx.getParam("a11"),
    "translate variable 1": $fx.getParam("a12"),
    "size variable 3": $fx.getParam("a13"),
    "size variable 4": $fx.getParam("a14"),
    "translate variable 2": $fx.getParam("a15"),
    "density": $fx.getParam("a26"),
  });
}

function draw() {
  let fc = frameCount+1;

  canvas.push();
  //  scale(1.05)

  for (x = -cs / 2; x < cs / 2; x = x + cs / a26) {
    for (y = -cs / 2; y < cs / 2; y = y +cs / a26+fc) {
     // canvas.strokeWeight(cs / 1000);
      canvas.noStroke();

      if ((fc % 2) == 0) {
        canvas.fill(0);
      } else {
        canvas.fill(255);
      }

     canvas.push();

     push();
     canvas.translate(x + cs / a26 / 2, y *atan(fc*a12)*tan(fc*a15)/2);

     canvas.box(
      (cs / a26) * sin(fc * a10) * cos(fc * 1.1),//sincos,cos cos
      (cs / a26) * cos(fc * a11) * cos(fc * 2.2),//cossin
    
      (cs / a26)// * cos(fc * a12)//atan
    ); //ssat

    pop()
    push()
    canvas.box(
      (cs / a26 / 4) * tan(fc * a13)*sin(fc),
      (cs / a26 / 4) * sin(fc * a14) * atan(fc * 2.1),
      (cs / a26 / 4) 
    );
      pop();

      canvas.pop();
    }
  }

  if (frameCount > 300) {
     //noLoop();
    $fx.preview();
  }

  image(canvas, -width / 2, -height / 2, width, height);
  canvas.pop();
  
}

function windowResized() {
  resizeCanvas(windowHeight, windowHeight);
}


var scribble;
var b = [];
var r1;
var sym;
var tresh;
function setup() {
  r1 = fxrand() * 400 + 50;
  b[0] = fxrand() * 150 + 105;
  b[1] = fxrand() * 150;
  b[2] = fxrand() * 150;
  sym = fxrand();
  tresh = fxrand() * 29 + 1;
  scribble = new Scribble()
  scribble.bowing = -10;          // changes the bowing of lines
  scribble.roughness = 1;       // changes the roughness of lines
  scribble.numEllipseSteps = 7; // defines how much curves will be used to draw an ellipse
  createCanvas(500,500);
}

function draw() {
  background(color(b[0], b[1], b[2], 255));
  drawCircle(width/2,height/2,r1);
  noLoop();
}

function drawCircle(x,y,r) {
  stroke(255);
  noFill();
  scribble.scribbleEllipse(x, y, r, r)
  if(r > tresh) {
    p1 = fxrand() * 3 + 1;
    p2 = fxrand() * 3 + 1;
    if (sym > 0.5) {
      p = fxrand();
      if (p > 0.6) {
        drawCircle(x + r/2, y, r/2);
        drawCircle(x - r/2, y, r/2);
      } else {
        drawCircle(x + r/p1, y, r/p2);
        drawCircle(x - r/p1, y, r/p2);
      }
    } else {
      drawCircle(x + r/2, y, r/2);
      drawCircle(x - r/2, y, r/2);
    }
  }
}

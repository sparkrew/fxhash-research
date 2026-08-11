let numPoints, helixDist, dotSize, angle;
let radius = 150;
let strokeColors;

var w = window.innerWidth / 1.6;
var h = window.innerHeight / 1.3;  

var cnv;

function setup() {
  cnv = createCanvas(w, h);
  numPoints = fxrand() * 150;
  helixDist = fxrand() * 150;
  dotSize = fxrand() * 10;
  console.log(fxrand())
  if (fxrand() < 0.2){
    angle = fxrand() * -100;
  }else{
    angle = fxrand() * 100;
  }
  strokeColors = [color('#E84855'), color('#B1B5E2'), color('#F5A962'), color('#575AC5')];
  //noLoop();
};

function draw() {
  background('#F1CBCB');
  translate(width/2, height/2);
  centerCanvas()
  
  for (let i = 0; i < numPoints; i++) {
    let x1 = radius * cos(i * TWO_PI / numPoints + angle);
    let y1 = radius * sin(i * TWO_PI / numPoints + angle);
    let z1 = i * helixDist / numPoints;
    let x2 = -radius * sin(i * TWO_PI / numPoints + angle);
    let y2 = -radius * cos(i * TWO_PI / numPoints + angle);
    let z2 = i * helixDist / numPoints;
    
    let colorIndex = i % strokeColors.length;
    stroke(strokeColors[colorIndex]);
    strokeWeight(dotSize);
    point(x1, y1);
    point(x2, y2);
    
    if (i > 0) {
      stroke(strokeColors[colorIndex]);
      strokeWeight(dotSize / 2);
      line(x1, y1, z1, x1, y1, z2);
      line(x2, y2, z1, x2, y2, z2);
      stroke(strokeColors[(colorIndex + 1) % strokeColors.length]);
      strokeWeight(dotSize);
      line(x1, y1, z1, x2, y2, z1);
    }
  }
  
  angle += 0.005;
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
    centerCanvas();
}
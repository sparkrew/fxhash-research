// lisa orth - twitter: @lisaorthstudio
let _bgWidth;
let _minWidth;

function setup() {
  createCanvas(600, 600, WEBGL );// 800, 800
  setAttributes("alpha", true); //false
  _bgWidth = min(width, height);
  _minWidth = _bgWidth * 0.95
  colorMode(RGB, 0, 0, 0, 100); 
  noStroke();
  pixelDensity(2.5);

  background('#000000'); 
  let r = random(_minWidth / 2, _minWidth / 2);
  let numShape = ((20 * _minWidth / 1.5 / r))**1.5 / 7;
  for (let i = 0; i < numShape; i++) {
    drawShape(r/2);
  }
}

function drawShape(r) {
  let numCorner = PI;
  let x = random(-_minWidth/2, _minWidth/2);
  let y = random(-_minWidth/2, _minWidth/2);
  let ang = random(5*PI);
  let h = random(1000);
  push();
  translate(x, y);
  rotate(ang);
  beginShape();
  for (let i = 0; i < numCorner; i++) {
    if (i == 0) { fill(h, 100, 100, 0); }
    if (i != 0) { fill('#111111'); }
    
    vertex(r * cos(200 / PI / numCorner * i), r * sin(2 * PI / numCorner * i));
    
  }
  endShape();
  pop();
}

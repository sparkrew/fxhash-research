let canvasWidth;
let canvasHeight;
let seed;
let pd = 1


function setup() {
  let seed = $fx.rand() * 999999;
  $fx.rand.reset();
  randomSeed(seed);
  noiseSeed(seed);
  canvasWidth = random(500, 700); 
  canvasHeight = random(700, 1000); 
  createCanvas(canvasWidth, canvasHeight);
  background(random(255), random(255), random(255));
  noLoop();
}

function draw() {
  pixelDensity(pd);
  translate(width / 2, height / 2);
  strokeWeight(random(0.5, 2)); 
  const perspectiveDepth = random(10, 100);
  randomSeed(random(10000));
  const numLayers = floor(random(50, 150)); 
  for (let layer = 0; layer < numLayers; layer++) {
  const numShapes = floor(random(1, 200)); 
  const brushSize = random(1, 20); 
  const colorPalette = ["#034AA6", "#72B6F2", "#73BFB1", "#F2A30F", "#F26F63", "#8D95A6", "#0A7360", "#F28705", "#D98825", "#F2F2F2", "#906FA6", "#025951", "#252625", "#D99191", "#F2F2F2"];
  const fillColor = random(colorPalette);
  fill(fillColor); 

    for (let i = 0; i < numShapes; i++) {
      const x = random(-width / 2, width / 2);
      const y = random(-height / 2, height / 2);

      
      const z = random(perspectiveDepth, perspectiveDepth * 2 );
      const px = (x * perspectiveDepth) / z;
      const py = (y * perspectiveDepth) / z;

      
      drawBrushstroke(px, py, brushSize);
       $fx.preview();
    }
  }

  drawBorder();
}

function drawBrushstroke(x, y, size) {
  const numPoints = 150;
  const m = random(0.1, 5);
  const n1 = random(0.1, 5);
  const n2 = random(0.1, 5);
  const n3 = random(0.1, 5);

  beginShape();
  for (let i = 0; i <= numPoints; i++) {
    const angle = map(i, 0, numPoints, 0, TWO_PI);
    const radius = supershape(angle, m, n1, n2, n3);
    const xPos = x + radius * cos(angle) * size;
    const yPos = y + radius * sin(angle) * random(size / 7);
    vertex(xPos, yPos);
  }
  endShape(CLOSE);
 
}

function supershape(theta, m, n1, n2, n3) {
  const t1 = abs(cos(m * theta / 4));
  const t2 = abs(sin(m * theta / 4));
  const t3 = pow(t1, n2);
  const t4 = pow(t2, n3);
  const r = pow(t3 + t4, -1 / n1);
  return r;
}

function drawBorder() {
  noFill();
  stroke(random(255), random(255), random(255));
  strokeWeight(random(10, 30)); 
  rect(-width / 2, -height / 2, width, height);
}
function keyPressed() {
   if (key === 's' || key === 'S') {
    save('fx.cartography' + ".png"); 
  }
}
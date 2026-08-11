let colorPalette = ['#121212', '#f1f1f1', '#2f2f2f', '#eaeaea', '#000000'];
let c, pc = -1;
function setup() {
  createCanvas(windowHeight, windowHeight);
  //setAttributes('antialias', true);
  pixelDensity(2);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);

  while (colorPalette.length < 5) {
    for (let i = 0; i < colorPalette.length; i++) {
      let c = color(colorPalette[i]);
       c.setAlpha(0);
      colorPalette[i] = c;
    }
  }
}

function draw() {
  clear();
  cells = int(random(2, 5));
  offset = width / 20;
  margin = offset / 5+int(random(5));
  d = (width - offset * 2 - margin * (cells + 1)) / cells;
  for (let j = 0; j < cells; j++) {
    for (let i = 0; i < cells; i++) {
      let cx = offset + i * (d + margin) + d / 2;
      let cy = offset + j * (d + margin) + d / 2;
      drawShape(cx, cy, d);
    }
  }
  let g = get();
  background(0, 0, int(random(7)));  
  push();
  image(g, 0, 0);
  pop();
  noLoop();
}

function drawShape(x, y, w) {
  push();
  translate(x, y);
  rotate(random(360));
  blendMode(HARD_LIGHT);
  let radius = w / 2;
  let numSeed = random(500, 5000);
  let freqOne = random(1, 5);
  let freqTwo = random(1, 5);
  
  for (let angle = 0; angle < 360; angle += 1 / 5) {
    let noiseX = (x + sin(angle) * radius) / w;
    let noiseY = (y + cos(angle) * radius) / w;
    let noize = noise(noiseX / numSeed, noiseY / numSeed, sin(angle * freqOne));
    let noizeMap = noise(noiseX * tan(freqTwo), noiseY * tan(freqTwo), cos(angle * freqOne) * tan(angle));
    let cNum = map(noizeMap, 0, 1, 0, colorPalette.length);
    let ci = int(cNum) % colorPalette.length;
    let cj = cNum % 2;
    colorMode(RGB, 255, 255, 255, 255);
    let c = lerpColor(
      color(colorPalette[ci]),
      color(colorPalette[(ci + 1) % colorPalette.length]),
      cj
    );
    colorMode(HSB, 360, 100, 100, 100);

    let nRadius = noize * radius;
    let mapX = sin(angle) * nRadius;
    let mapY = cos(angle) * nRadius;
    
    let d = (cos(angle * freqOne) * sin(angle * freqTwo) * radius) / 2;
    let posX = mapX + sin(angle) * (d / 2);
    let posY = mapY + cos(angle) * (d / 2);
    push();
    translate(posX, posY);
    noStroke();
    smooth();
    let gradient = drawingContext.createRadialGradient(0, 0, 0, 0, 0, max(d*15+int(random(5)), w/2)
    );
    c.setAlpha(90);
    gradient.addColorStop(0, c);
    c.setAlpha(0);
    gradient.addColorStop(1, c);
    drawingContext.fillStyle = gradient; 
    arc(d, d/4, d*200+random(200), d*200+random(100), 0, PI);
    beginShape();
    vertex(230, 200);
    vertex(230, 60); 
    vertex(368, 200); 
    vertex(230, 340); 
    vertex(88, 200); 
    vertex(230, 60); 
    endShape();
    rectMode(CENTER);
    pop();
  }
  pop();
}
//save PNG
function keyPressed(){
    save("gen_" + month() + '-' + day() + '_' + hour() + '-' + minute() + '-' + second() + ".png");
}

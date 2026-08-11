// By Roni Block
// August 2023

// License: CC BY-NC-SA 4.0

let cvsSize, mySeed;

let N;
let s, margin;

let detail = 25;

let palette1, palette2;
let p1, p2, p3, p4;

let colorsUsed;

function setup() {
  mySeed = $fx.rand()*1000000;
  initParams(windowWidth, windowHeight);
  
  createCanvas(cvsSize, cvsSize, WEBGL);
  pixelDensity(2);
  
  noStroke();
  noLoop();
}

function draw() {
  randomSeed(mySeed);

  N = random([3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 8]);
  s = cvsSize/(N+2*margin);
  margin *= s;

  translate(-width/2, -height/2);

  [p1, p2, p3, p4] = random([[0, 0, 0, 0], [0, 0, 0, 1/2], [0, 0, 0, 1], [1/4, 0, 0, 0], [1/4, 0, 0, 1/4], [1/2, 0, 0, 1], [1, 0, 3/4, 0], [1, 0, 1, 0], [1, 1/4, 1, 0], [1/4, 1, 1, 0]]);

  let green1 = "#abcd5e", green2 = "#29ac9f", green3 = "#14976b";
  let blue1 = "#b3dce0", blue2 = "#62b6de", blue3 = "#2b67af";
  let yellow1 = "#f9d531", pink1 = "#f589a3", red1 = "#ef562f", orange1 = "#fc8405";
  let allColors = [green1, green2, green3, blue1, blue2, blue3, pink1, red1, orange1, yellow1];

  let black1 = "#050505", white1 = "#fffbe6";
  palette2 = [black1, white1];
  if (random() < 3/4) {
    if (random() < 1/3) {
      palette1 = random([
        [green1, green2],
        [green1, green3],
        [blue1, blue2],
        [blue1, blue3],
        [blue2, blue3],
        [pink1, red1],
        [red1, yellow1],
        [orange1, yellow1],
        [yellow1, pink1],
        [pink1, blue3],
        [yellow1, green2]
      ]);
    } else if (random() < 1/2) {
      palette1 = random([
        [pink1, blue3, yellow1],
        [red1, yellow1, blue3],
        [green1, green2, green3],
        [red1, orange1, yellow1],
        [blue1, blue2, blue3],
        [blue2, blue3, yellow1],
        [blue2, green1, yellow1],
        [yellow1, red1, green3],
        [green1, green3, yellow1],
        [red1, yellow1, pink1],
        [blue2, blue3, pink1]
      ]);
    } else {
      palette1 = [random(allColors)];
    }
  } else {
    palette1 = [...allColors];
  }
  shuffle(palette2, true);

  let backCol = random(palette2);
  if ((palette1.length < 3 || (p1 == 0 && p2 == 0 && p3 == 0 && p4 == 0)) && random() < 1/10) backCol = random(palette1);
  background(backCol);

  colorsUsed.push(backCol, ...palette2);

  document.body.style["background-color"] = backCol;
  
  for (let i = 0; i <= N; i++) {
    let x = i*s+margin;
    for (let j = 0; j <= N; j++) {
      let y = j*s+margin;
      fill(palette2[1]);
      ellipse(x, y, 2*s/3, 2*s/3, detail*4);
      
      fill(palette2[0]);
      if (i < N) ellipse(x+s/2, y, s/3, s/3, detail*4);
      if (j < N) ellipse(x, y+s/2, s/3, s/3, detail*4);
    }
  }
  
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      makeTile(i, j);
    }
  }

  colorsUsed = [...new Set(colorsUsed)];
  
  let dotModePossibilities = [1, 2];
  if (palette1.length < 3) dotModePossibilities.push(0);
  if (N < 6) dotModePossibilities.push(3);
  if (colorsUsed.length == 2) dotModePossibilities = [0];
  if (palette1.length == 2) dotModePossibilities.push(4);
  let dotMode = random(dotModePossibilities);
  let variation = random() < 1/2;
  let col;
  for (let i = 0; i <= N; i++) {
    let x = i*s+margin;
    for (let j = 0; j <= N; j++) {
      let y = j*s+margin;
      if (dotMode == 0) {
        col = random(palette1);
      } else if (dotMode == 1) {
        col = random(palette2);
      } else if (dotMode == 2) {
        if (variation) col = palette2[1-(i+j)%2];
        else col = palette2[(i+j)%2];
      } else if (dotMode == 3) {
        col = palette2[0];
      } else {
        if (variation) col = palette1[1-(i+j)%2];
        else col = palette1[(i+j)%2];
      }
      colorsUsed.push(col);
      fill(col);
      ellipse(x, y, s/3, s/3, detail*4);
    }
  }

  colorsUsed = [...new Set(colorsUsed)];
  let idx = colorsUsed.indexOf(black1);
  if (idx > -1) colorsUsed.splice(idx, 1);
  idx = colorsUsed.indexOf(white1);
  if (idx > -1) colorsUsed.splice(idx, 1);

  $fx.features({
		"N": N,
		"Dot style": dotMode,
		"p1": p1,
    "p2": p2,
    "p3": p3,
    "p4": p4,
		"Number of colors": colorsUsed.length,
    "Background": backCol == black1 ? "Black" : (backCol == white1 ? "Off-white" : "Color")
  	});
  	$fx.preview();
}

function keyPressed() {
  if (key == "s") {
    initParams(2048, 2048);
    resizeCanvas(cvsSize, cvsSize);
    saveCanvas("out.png");
    initParams(windowWidth, windowHeight);
    resizeCanvas(cvsSize, cvsSize);
  }
}

function windowResized() {
  initParams(windowWidth, windowHeight);
  resizeCanvas(cvsSize, cvsSize);
}

function initParams(w, h) {
  cvsSize = min(w, h);
  margin = 1.5;
  colorsUsed = [];
}


function makeTile(i, j) {
  let x = i*s+margin;
  let y = j*s+margin;
  
  push();
  translate(x+s/2, y+s/2);
  rotate(random([0, PI/2, PI, 3*PI/2]));
  
  if (random() < p1) {
    let col1 = random(palette1);
    let col2 = palette2[0];
    if (random() < p2) [col1, col2] = [col2, col1];

    fill(col1);
    colorsUsed.push(col1);
    square(-s/2, -s/2, s);
    fill(col2);
    if (random() < p3) {
      arc(-s/2, -s/2, s*4/3, s*4/3, 0, PI/2, PIE, detail);
      colorsUsed.push(col2);
    }
    if (random() < p3) {
      arc(s/2, s/2, s*4/3, s*4/3, PI, 3*PI/2, PIE, detail);
      colorsUsed.push(col2);
    }
  } else {
    fill(palette2[1]);
    colorsUsed.push(palette2[1]);
    square(-s/2, -s/2, s);
    
    let col = random() < p4 ? random(palette1) : palette2[0];
    fill(col);
    colorsUsed.push(col);
    arc(-s/2, -s/2, s*4/3, s*4/3, 0, PI/2, PIE, detail);
    col = random() < p4 ? random(palette1) : palette2[0];
    fill(col);
    colorsUsed.push(col);
    arc(s/2, s/2, s*4/3, s*4/3, PI, 3*PI/2, PIE, detail);
  }
  
  fill(palette2[0]);
  arc(0, -s/2, s/3, s/3, 0, PI, PIE, 2*detail);
  arc(s/2, 0, s/3, s/3, PI/2, 3*PI/2, PIE, 2*detail);
  arc(0, s/2, s/3, s/3, PI, TAU, PIE, 2*detail);
  arc(-s/2, 0, s/3, s/3, 3*PI/2, 5*PI/2, PIE, 2*detail);
  
  fill(palette2[1]);
  arc(-s/2, -s/2, 2*s/3, 2*s/3, 0, PI/2, PIE, detail);
  arc(s/2, -s/2, 2*s/3, 2*s/3, PI/2, PI, PIE, detail);
  arc(s/2, s/2, 2*s/3, 2*s/3, PI, 3*PI/2, PIE, detail);
  arc(-s/2, s/2, 2*s/3, 2*s/3, 3*PI/2, TAU, PIE, detail);
  
  pop();
}
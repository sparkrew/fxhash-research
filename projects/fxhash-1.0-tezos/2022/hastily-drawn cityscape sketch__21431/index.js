let palette, skyClr, skyClr2, starClr, numStars;
let rc, fillStyle, fit, wt, hangle;
let blgStyle;
const palettes = [
  ["#fac901", "#225095", "#dd0100", "#1133ff"], //mondrian
  ["#eff1ee", "#f9a705", "#c0a7e0", "#600d07", "#da2021", "#ebb628"], //o'keefe
  ["#bf5b37", "#eed09e", "#b2cfd5", "#524f58", "#b2c245"], //magritte
  ["#003049", "#d62828", "#f77f00", "#fcbf49", "#eae2b7"],
  ["#000000", "#14213d", "#fca311", "#e5e5e5", "#ffffff"],
  ["#3d5a80", "#98c1d9", "#e0fbfc", "#ee6c4d", "#293241"],
  ["#06aed5", "#086788", "#f0c808", "#fff1d0", "#dd1c1a"],
  ["#011627", "#f71735", "#41ead4", "#fdfffc", "#ff9f1c"],
  ["#f6511d", "#ffb400", "#00a6ed", "#7fb800", "#0d2c54"],
  ["#cfdbd5", "#e8eddf", "#f5cb5c", "#242423", "#333533"],
  ["#083d77", "#ebebd3", "#f4d35e", "#ee964b", "#f95738"],
  ["#ffbf00", "#e83f6f", "#2274a5", "#32936f", "#ffffff"],
  ["#292f36", "#4ecdc4", "#f7fff7", "#ff6b6b", "#ffe66d"],
  ["#1b998b", "#2d3047", "#fffd82", "#ff9b71", "#e84855"],
  ["#e74645", "#fb7756", "#facd60", "#fdfa66", "#1ac0c6"],
  ["#072448", "#54d2d2", "#ffcb00", "#f8aa4b", "#ff6150"],
  ["#12492f", "#0a2f35", "#f56038", "#f7a325", "#ffca7a"],
  ["#f7a400", "#3a9efd", "#3e4491", "#292a73", "#1a1b4b"],
  ["#ffa822", "#134e6f", "#ff6150", "#1ac0c6", "#dee0e6"],
];

function preload() {
  noiseSeed(fxrand() * 999999);
  randomSeed(fxrand() * 999999);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rc = rough.canvas(document.querySelector("canvas"));
  fillStyle = random(["dashed", "hachure"]);
  fit = .75 //random(0.95, 1);
  wt = random(.5, 1);
  hangle = random(15, 70);
  blgStyle = random(["none","none", "#000", "#222", "#ccc", "#fff"]);
  palette = random(palettes);
  skyClr = color(random(palette));
  skyClr.setAlpha(2);
  skyClr2 = skyClr;
  skyClr2.setAlpha(1);
  starClr = color(255, 255, 255, 3);
  numStars = floor(random(15,75));
  noLoop();
}


function draw() {
  background(0);
  noStroke();
  makeSky();
  makeStars();
  makeMoon();
  makeBgBuildings();
  makeBuildings();
}

function makeSky() {
  let x, y;
  for (i = 0; i < 4000; i++) {
    fill(skyClr);
    x = random(-width / 2, width * 1.5);
    y = random(0, randomGaussian(height * 0.66, 130));
    push();
    translate(x, y);
    rotate(i);
    if (y < height * 0.4) fill(skyClr2);
    drawPoly(0, 0, randomGaussian(50, 30), 7);
    pop();
  }
}
function makeStars() {
  fill(starClr);
  for (j = 0; j < numStars; j++) {
    let x = random(-width / 2, width * 1.5);
    let y = random(0, randomGaussian(height * 0.35, 130));
    let r = random(1, 3);
    for (i = 0; i < 60; i++) {
      push();
      translate(x, y);
      rotate(i);
      drawPoly(0, 0, randomGaussian(r, 2), 7);
      pop();
    }
  }
}
function makeMoon() {
    let clr = color(random(palette));
    clr.setAlpha(random(120,240));
    let x = random(0, width);
    let y = randomGaussian(height*.15,10);
    let r = random(width*.2, width*.85);
    fill(random([20, 220]), random(180));
    circle(x,y,r*.98);
        rc.circle(x, y, r, {
          fill: clr,
          fillStyle: random(["zigzag", "hachure", "dashed"]),
          fillWeight: 1,
          hachureGap: 4,
          stroke: clr,
          curveFitting: .99,
          roughness: 3,
          hachureAngle: hangle + random(-15, 15),
        });
}
function makeBgBuildings() {
  fill(0, 3, 10, 7);
  for (let i = 0; i < 11; i++) {
    let type = random(["rect", "point", "poly"]);
    push();
    translate(randomGaussian(width / 2, 200), randomGaussian(height * 0.3, 80));
    drawBuilding(0, 0, randomGaussian(width / 20, 30), height, type, 15, 1);
    pop();
  }
}
function makeBuildings() {
  let grid = floor(random(width / 20,width/6));
  for (let y = height * random(.25, .5); y < height * 0.9; y += grid) {
    for (let x = 0; x < width; x += grid) {
      let clr = color(random(palette));
      //clr.setAlpha(random(150, 250));
      fillStyle = random(["dashed","dashed","dashed", "solid", "solid", "hachure"]);
      clr.setAlpha(125);
      let type = random(["rect"]);
      push();
      translate(randomGaussian(x, 12), randomGaussian(y, 12));
if(random()>0.5){
      for(let i=0;i<2;i++){
        fill(0,20);
        let w = randomGaussian(grid, 30);
        rect(0, 0, w, height);
        fill(clr);  
        rc.rectangle(randomGaussian(0,3), randomGaussian(0,3), w, height, {
          fill: clr,
          fillStyle: fillStyle,
          fillWeight: wt,
          stroke: blgStyle,
          //curveFitting: fit,
          roughness: 5,
          hachureAngle: hangle + random(-5, 5),
        });
      }
    }
      pop();
    }
  }
}
function drawPoly(x, y, radius, pts) {
  const angle = TWO_PI / pts;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function drawBuilding(x, y, w, h, type, fuzzX, fuzzY) {
  for (let i = 0; i < 300; i++) {
    if (type == "rect" || type == "point") {
      rect(randomGaussian(x, fuzzX), randomGaussian(y, fuzzY), w, h);
    }
    if (type == "point") {
      triangle(
        randomGaussian(x, fuzzX),
        randomGaussian(y, fuzzY),
        randomGaussian(x + w, fuzzX),
        randomGaussian(y, fuzzY),
        randomGaussian(w / 2, fuzzY * 2),
        randomGaussian(y - height / 50, fuzzY)
      );
    }
  }
}

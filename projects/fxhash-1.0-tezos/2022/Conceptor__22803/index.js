//coded by Victor Doval 2021. All rights reserved
/*
Oniric Spaces
Generative art by Victor Doval 2021

https://twitter.com/vicdoval

https://www.fxhash.xyz/u/Victor%20Doval
https://teia.art/vicdoval

*/

let lvMax = 4 + randomWeighted([3, 5, 3, 2, 1]);
window.$fxhashFeatures = {
  Depth: lvMax,
  Palette: Math.floor(fxrand() * 43),
  Pad: fxrand() > 0.8,
  Textured: fxrand() > 0.9,
  Outline: fxrand() > 0.9,
};

var features = window.$fxhashFeatures;

var title = "Conceptor";

var eyeZ = 0;

var base_size = 200;
let theShader;
var canvas;

var canvas2;

let pal = [];
let cubes = [];
let newCubes = [];
let drawCubes = [];
let t = 0;
var gl;
let propFactor = 2 / 3;
let threshold = 0.2 + 0.5 * fxrand();

let spheresNum =
  lvMax > 5 ? Math.floor(1 + 4 * fxrand()) : Math.floor(5 * fxrand());
if (lvMax < 3) spheresNum = 0;
let spheres = [];
let minThres = 0.1 + uneasySine(fxrand()) * 0.58;
if (lvMax === 8) {
  threshold = 0.7 + fxrand() * 0.2;
  minThres = 0.65 + fxrand() * 0.1;
}


function preload() {
  pals = loadImage("palette.jpg");
}
function setup() {
  vmin = min(windowWidth / propFactor, windowHeight);
  canvas = createCanvas(vmin * propFactor, vmin, WEBGL);
  canvas2 = createGraphics(vmin * propFactor, vmin);

  smooth();
  shake();
  gl = document.getElementById("defaultCanvas0").getContext("webgl");

  var palete_num = features.Palette; // 0+0*int(random(pals.height));
  print("palete_num", palete_num);

  for (var i = 0; i < 4; i++) {
    pal[i] = color(pals.get(i, palete_num));
  }
  shuffle(pal, true);
  rotAng = random(TAU);
  camY = random(-200, 200);
  dur = 20; //int(random(10,20))
  darkMode = random(1) > 0.8;

  for (var i = 0; i < spheresNum; i++) {
    pos = [
      -300 / 2 + 300 * fxrand(),
      -300 / 2 + 300 * fxrand(),
      -800 / 2 + 800 * fxrand(),
    ];
    rad = 20 + map(spheresNum, 1, 4, 180, 100) * fxrand();
    spheres[i] = [pos, rad];
  }

  frameRate(25);

  rectMode(CENTER);

  startGeo();
  background(pal[3]);

  let br = brightness(pal[3]);
  let lc = 255;
  if (br > 50) lc = 0;

  rectMode(CENTER);
  noFill();
  stroke(lc, 127);
  let mar = width * 0.03;
  drawTexture();
}
function drawTexture() {
  canvas2.noStroke();
  let sub = 60;
  rows = 250;
  spy = int(height / rows);
  rows = height / spy;
  canvas2.strokeWeight(width / 2000);
  if (features.Textured) {
    canvas2.stroke(255, 10);
    for (let i = 0; i < rows * propFactor; i++) {
      for (let j = 0; j < rows; j++) {
        canvas2.fill(noise(0.01 * i, 0.01 * j) * 255, 10);
        canvas2.rect(
          (i * width) / rows / propFactor,
          (j * height) / rows,
          width / rows / propFactor,
          height / rows
        );
      }
    }
  }
}
function startGeo() {
  boundX = 1 * 250;
  boundY = 1 * 250;
  boundZ = 3 * 250;
  cubes.push([0, 0, 0, boundX, boundY, boundZ, lvMax]);
}

function draw() {
  newCubes = [];
  for (let i = 0; i < cubes.length; i++) {
    c = cubes[i];
    octBuilding(c[0], c[1], c[2], c[3], c[4], c[5], c[6]);
  }
  cubes = newCubes;
  if (newCubes.length == 0 && drawCubes.length < 9) {
    minThres -= 0.1;
    threshold -= 0.05;
    drawCubes = [];
    startGeo();
  }

  if (newCubes.length == 0) {
    drawBuilding()
  }
  // pop();
}
function drawBuilding(){
  stroke(255, 127);
  ortho(-500 * propFactor, 500 * propFactor, -500, 500, 1, 10000);
  // push();
  camera(1000, 1000, -1000, 0, 0, 0, 0, 0, 1);
  // directionalLight(pal[0], -0, -0, 1);
  directionalLight(pal[0], -0, -0, 1);
  directionalLight(pal[1], -1, -0, 0);
  directionalLight(pal[2], -0, -1, 0);
  marked = features.Pad;
  outline = features.Outline
  for (var i = 0; i < drawCubes.length; i++) {
    c = drawCubes[i];
    push();
    translate(c[0], c[1], c[2]);
    fill(255);

    
    
    if(outline){stroke(pal[3])}else{
      noStroke();
    }
    if (marked) {
      box(c[3] * 0.97, c[4] * 0.97, c[5] * 0.97);
    } else {
      box(c[3], c[4], c[5]);
    }
    pop();
  }
  stroke(255);
  noFill();

  noLoop();
  print("done");
  gl.disable(gl.DEPTH_TEST);
  let eyeZ = height / 2 / tan(PI / 6);
  perspective(PI / 3, width / height, eyeZ / 10, eyeZ * 10);
  camera(0, 0, height / 2 / tan(PI / 6), 0, 0, 0, 0, 1, 0);
  fill(255);
  imageMode(CENTER);
  image(canvas2, 0, 0);
  fxpreview()

}
let child_th = 0.3;
function octBuilding(x, y, z, s1, s2, s3, lv) {
  if ((lv > 0 && random(1) > minThres) || lv > lvMax - 2) {
    let xo = random(0.1, 1 - 0.1) * s1;
    let ns10 = s1 - xo;
    let nx0 = x - s1 / 2 + ns10 / 2;
    let ns11 = s1 - ns10;
    let nx1 = x + s1 / 2 - ns11 / 2;
    let yo = random(0.1, 1 - 0.1) * s2;
    let ns20 = s2 - yo;
    let ny0 = y - s2 / 2 + ns20 / 2;
    let ns21 = s2 - ns20;
    let ny1 = y + s2 / 2 - ns21 / 2;

    let zo = random(0.1, 1 - 0.1) * s3;
    let ns30 = s3 - zo;
    let nz0 = z - s3 / 2 + ns30 / 2;
    let ns31 = s3 - ns30;
    let nz1 = z + s3 / 2 - ns31 / 2;
    if (noise(nx0, ny0, nz0) > child_th)
      newCubes.push([nx0, ny0, nz0, ns10, ns20, ns30, lv - 1]);
    if (noise(nx1, ny0, nz0) > child_th)
      newCubes.push([nx1, ny0, nz0, ns11, ns20, ns30, lv - 1]);
    if (noise(nx1, ny1, nz0) > child_th)
      newCubes.push([nx1, ny1, nz0, ns11, ns21, ns30, lv - 1]);
    if (noise(nx0, ny1, nz0) > child_th)
      newCubes.push([nx0, ny1, nz0, ns10, ns21, ns30, lv - 1]);

    if (noise(nx0, ny0, nz1) > child_th)
      newCubes.push([nx0, ny0, nz1, ns10, ns20, ns31, lv - 1]);
    if (noise(nx1, ny0, nz1) > child_th)
      newCubes.push([nx1, ny0, nz1, ns11, ns20, ns31, lv - 1]);
    if (noise(nx1, ny1, nz1) > child_th)
      newCubes.push([nx1, ny1, nz1, ns11, ns21, ns31, lv - 1]);
    if (noise(nx0, ny1, nz1) > child_th)
      newCubes.push([nx0, ny1, nz1, ns10, ns21, ns31, lv - 1]);
  } else {
    c1 = lerpColor(pal[0], pal[1], random(1));
    c2 = lerpColor(pal[2], pal[3], random(1));
    c3 = lerpColor(c1, c2, random(1));

    if (random(1) > threshold) {
      drawBox = true;
      for (i = 0; i < spheresNum; i++) {
        pos = spheres[i][0];
        rad = spheres[i][1];
        drawBox = dist(pos[0], pos[1], pos[2], x, y, z) > rad;
        if (!drawBox) break;
      }
      if (drawBox) drawCubes.push([x, y, z, s1, s2, s3, c3, true]);
    }
  }
}

function randomWeighted(w) {
  accS = [0];
  for (var i = 0; i < w.length; i++) {
    nv = accS[i] + w[i];
    accS.push(nv);
  }
  v = fxrand() * accS[w.length];
  out = 0;
  for (var i = 0; i < w.length; i++) {
    if (v >= accS[i] && v < accS[i + 1]) {
      out = i;
      break;
    }
  }
  return out;
}

function uneasySine(t) {
  return mlerp(
    Math.sin(t * Math.PI) * 0.5,
    1 + Math.sin(t * Math.PI + Math.PI) * 0.5,
    t
  );
}
function mlerp(a, b, x) {
  return (1 - x) * a + x * b;
}
function shake() {
  noiseSeed(~~(fxrand() * 123456789));
  randomSeed(~~(fxrand() * 123456789));
}
function keyPressed() {
  if (key === "s") {
    saveCanvas(title, "png");
  }

  print(keyCode, key);
}

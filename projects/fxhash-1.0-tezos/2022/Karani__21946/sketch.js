// create by NotaArtist
// twitter: https://twitter.com/mrmecroni/
// created with p5js: https://p5js.org/

let W, WW, HH;
let palette, bgC;
let totalFloor = [];
let buildingHeight = [];
let initialDetails = [];
let chars =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let num, sNum, seed;

// checking if url contains scale para
check(
  (scaleFromUrl = new URLSearchParams(window.location.search).get("scale"))
);

// render image in high quality
function check(url) {
  if (url == "2") {
    sNum = 2;
  } else if (url == "3") {
    sNum = 3;
  } else if (url == "4") {
    sNum = 4;
  } else {
    sNum = 1;
  }
}

function setup() {
  seed = int(fxrand() * 1e8);
  randomSeed(seed);
  pixelDensity(sNum);

  W = min(windowWidth, windowHeight);
  let C = createCanvas(W * 0.75, W);
  C.parent("canvas");
  C.position((windowWidth - width) * 0.5, (windowHeight - height) * 0.5);
  rectMode(CENTER);
  angleMode(DEGREES);

  // initial setup
  WW = width;
  HH = height;
  paletteNumber = int(fxrand() * colors.length);
  palette = shuffle(colors[paletteNumber].mColor, true);
}

function draw() {
  bgC = random(colors[paletteNumber].bg);
  background(bgC);

  // adding drawing area
  let o = WW / 5;
  let w = WW - o * 2;
  let h = HH - o * 2;

  // drawing area
  drawingArea(o, o, w, h);

  // top pattern
  addPattern();

  // text layer
  addLayer();
  
  fxpreview();
  noLoop();
}

// text layer
function getArtCode(arr, num = 8) {
  let val = [];
  shuffle(arr, true);
  for (let i = 0; i < num; i++) {
    val.push(arr[i]);
  }

  return `#${val.toString().replaceAll(",", "")}`;
}

function addLayer() {
  push();
  let name = getArtCode(chars, 12);
  let details = `BUILDINGS:${num} X MAXHEIGHT:${max(
    buildingHeight
  )} X APARTMENTS:${totalFloor.length}`;
  let nameHeight = textSize(9);
  let detailsWidth = textWidth(details);
  text(name, width / 25, height - height / 35);
  text(details, width - width / 25 - detailsWidth, height - height / 35);
  consoleDetails(arr={ART_CODE:name,BUILDINGS:num,MAX_FLOOR_HEIGHT:max(
    buildingHeight),APARTMENTS:totalFloor.length,SEED:seed,FXHASH:fxhash})
  pop();
}

function drawingArea(x, y, w, h) {
  push();
  // initial details
  translate(x, y);
  strokeWeight(1.6);
  strokeCap(ROUND);
  strokeJoin(BEVEL);
  fill(bgC);

  // building drawing Area
  addBuilding(0, 0, w, h);
  pop();
}

// creating line style
function getLineStyle(arr) {
  drawingContext.setLineDash(arr);
}

function createLineArr(num) {
  let val = [];
  for (let i = 0; i < num; i++) {
    if (fxrand() < 1 / 2) val.push(i);
  }
  return val;
}

function addBuilding(x, y, w, h) {
  push();
  translate(x, y);

  let www = width;
  // adding line style
  // arr = shuffle(createLineArr(int(random(8, 30))), true);
  getLineStyle([www*0.00550395596, 0, www*0.02063983488, www*0.00825593395, www*0.0165118679, www*0.01375988992, www*0.00137598899]);

  num = int(9+fxrand()*5);
  let sw = w / num;
  let sh = sw;
  for (let i = 0; i < num; i++) {
    const nx = i * sw;
    const start = h - sh;
    let num2 = int(num / 4 + fxrand() * ((num * 1.6) - (num / 4)));
    let ran = fxrand();
    let ran2 = fxrand();
    buildingHeight.push(num2);

    for (let j = 0; j < num2; j++) {
      const ny = j * sh;
      const c = color(palette[int(fxrand()*palette.length)]);
      const radius = sw * fxrand();

      push();
      fill(c);
      translate(nx + sw / 2, start + sh / 2 - ny);
      const obj = {
        x: nx + sw / 2,
        y: start + sh / 2 - ny,
        s: sw,
        r: radius,
      };

      // adding floors
      if (j == num2 - 1 && ran2 < 1 / 2 && num2 !== 1) triangle(0, -sh / 2, sw / 2, sh / 2, -sw / 2, sh / 2);
      else if (num2 !== 1) rect(0, 0, sw, sh, radius);

      // adding top flags
      if (j == num2 - 1 && ran2 < 1 / 2 && num2 !== 1 && fxrand() < 1 / 2) addTop(0, 0, sw, sh);

      fill(bgC);
      // circle windows
      if (ran < 1 / 2 && j !== num2 - 1) rect(0, 0, sw / 2, sh / 2, sw * random(0.2, 0.9));
      else if (ran > 1 / 2 && j !== num2 - 1 && radius > sw / 3) addWindows2(0, 0, sw, sh);

      // square windows
      if (ran > 1 / 2 && j !== num2 - 1 && radius < sw / 4) addWindows(0, 0, sw, sh);

      // other type of apartments
      if (fxrand() < 1/4 && ran < 1/2 && j !== num2 - 1) addOther(0, 0, sw, sh);
      totalFloor.push(obj);
      pop();
    }
  }
  pop();
}

// other style of apartments
function addOther(x, y, w, h) {
  push();
  translate(x, y);
  let ran = fxrand();
  fill(palette[int(fxrand()*palette.length)]);
  if (ran < 1 / 3) {
    for (let i = 0; i < 3; i++) {
      let ss = w / 3;
      let nx = i * ss;
      rect(nx - ss, 0, ss, h);
    }
  } else if (ran < 2 / 3) {
    for (let i = 0; i < 3; i++) {
      let ss = h / 3;
      let ny = i * ss;
      rect(0, ny - ss, w, ss);
    }
  } else {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let ss = h / 3;
        let nx = i * ss;
        let ny = j * ss;
        rect(nx - ss, ny - ss, ss, ss);
      }
    }
  }
  pop();
}

// adding top part
function addTop(x, y, w, h) {
  push();
  translate(x, y);
  let ran = fxrand();
  if (ran < 1 / 5) addP1(0, -h, w, h);
  else if (ran < 2 / 5) addP2(0, -h, w, h);
  else if (ran < 3 / 5) addP3(0, -h, w, h);
  else if (ran < 4 / 5) addP4(0, -h, w, h);
  else if (ran < 5 / 5) addP5(0, -h, w, h);

  // rect(0,-h,w,h)
  pop();
}

// all flags
function addP5(x, y, w, h) {
  push();
  translate(x, y);
  line(0, 0, 0, h / 2);
  triangle(0, 0, w / 6, h / 12, 0, h / 6);
  triangle(0, h / 7, w / 4, h / 8 + h / 7, 0, h / 4 + h / 7);
  pop();
}

function addP4(x, y, w, h) {
  push();
  translate(x, y);
  line(0, 0, 0, h / 2);
  triangle(0, 0, w / 4, h / 8, 0, h / 4);
  pop();
}

function addP3(x, y, w, h) {
  push();
  translate(x, y);
  line(0, 0, 0, h / 2);
  rect(w / 5, 0, w / 2.5, h / 5);
  pop();
}

function addP2(x, y, w, h) {
  push();
  translate(x, y);
  line(0, 0, 0, h / 2);
  circle(0, 0, h / 4);
  pop();
}

function addP1(x, y, w, h) {
  push();
  translate(x, y);
  line(0, -h / 2 + h / 2, 0, h / 2);
  line(-w / 2 / 3, h / 4, w / 2 / 3, h / 4);
  pop();
}

// adding windows
// for square
function addWindows(x, y, w, h) {
  push();
  translate(x, y);
  let num = 3;
  let sw = (w * 0.75) / num;
  let sh = (h * 0.75) / num;
  let gap = sw * 0.3;

  translate(-sw, -sh);
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      const nx = i * sw;
      const ny = j * sh;
      if (fxrand() < 1 / 3) rect(nx, ny, sw - gap, sh - gap, fxrand() * sw);
    }
  }
  pop();
}

// for circle
function addWindows2(x, y, w, h) {
  push();
  translate(x, y);
  for (let i = 0; i < 360; i += 360 / 6) {
    let xx = (sin(i) * w) / 3;
    let yy = (cos(i) * h) / 3;

    if (fxrand() < 1 / 4) circle(xx, yy, w / 5);
  }
  pop();
}

// adding top layer pattern
function addPattern() {
  push();
  let ss = 4;
  let rows = height / ss;
  let cols = width / ss;
  strokeWeight(0.55);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let nx = i * ss;
      let ny = j * ss;

      push();
      stroke(random(50, 200), random(5, 25));
      translate(nx, ny);
      line(0, 0, ss, ss);
      line(ss, 0, 0, ss);
      pop();
    }
  }
  pop();
}

// export image
function keyPressed() {
  if (key === "s" || key === "S") {
    save(`Karani_${int(fxrand()*1e6)}_${fxhash}.jpg`);
  }else if (key === "p" || key === "p") {
    save(`Karani_${int(fxrand()*1e6)}_${fxhash}.png`);
  }
}

// console details
function consoleDetails(obj){
  console.table(obj)
}

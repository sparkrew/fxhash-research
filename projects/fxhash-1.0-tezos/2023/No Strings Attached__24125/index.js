/**
 *
 * No Strings Attached
 * VGA 2022
 * @VG41414
 *
 * Created with P5JS: https://p5js.org/
 * Licensed under: CC-BY-NC 4.0 / https://creativecommons.org/licenses/by-nc-sa/4.0/
 *
 **/

const seed = ~~(fxrand() * 414141414141);
const canvasWidth = fxrand() > 0.5 ? 2560 : 3840;
const canvasHeight = canvasWidth > 2560 ? 2560 : 3840;

let pixDensity = 1;

let randomShape = [];

let hueNames = [
  "red",
  "vermilion",
  "orange",
  "golden-yellow",
  "yellow",
  "yellowish-green",
  "chartreuse",
  "leaf-green",
  "green",
  "cobalt-green",
  "emerald-green",
  "turquoise-green",
  "cyan",
  "cerulean-blue",
  "azure",
  "cobalt-blue",
  "blue",
  "hyacinth",
  "violet",
  "purple",
  "magenta",
  "reddish-purple",
  "ruby-red",
  "carmine",
];

let strokeArr = [];

function setup() {
  // LET'S GO!!
  randomSeed(seed);
  noiseSeed(seed);
  pixelDensity(pixDensity);
  createCanvas(canvasWidth, canvasHeight);
  colorMode(HSB);
  stroke1Canv = createGraphics(width, height);
  stroke2Canv = createGraphics(width, height);
  stroke1Canv.colorMode(HSB);
  stroke2Canv.colorMode(HSB);
  // Main stuff
  areasX = random() > 0.75 ? 1 : random() > 0.5 ? 2 : 4;
  areasY = random() > 0.75 ? 1 : random() > 0.5 ? 2 : 4;
  drawWidth = width / areasX;
  drawHeight = height / areasY;
  drawArr = [];
  backgroundBri = random() > 0.85 ? 100 : 0;
  colorAmount = floor(random(1, 5));
  mainHue = floor(random(361));
  colorArr = [];
  bgColor = [mainHue, 0, backgroundBri];
  stroke1Canv.background(bgColor);
  colorMode1 = random();
  colorMode2 = random(0.9, 1);
  drawMode = random() > 0.5 ? "bobble" : "bristle";
  palette1 = createPalette(colorMode1);
  palette2 = createPalette(colorMode2);
  for (let i = 0; i < areasX; i++) {
    for (let j = 0; j < areasY; j++) {
      let x = (width / areasX) * i;
      let y = (height / areasY) * j;
      let w = width / areasX;
      let h = height / areasY;
      let cx = i % 2 == 0 ? 0 : w;
      let cy = j % 2 == 0 ? 0 : h;
      let p = areasX > 1 && areasY > 1 && random() > 0.25;
      if (
        p &&
        colorMode1 < 0.95 &&
        colorMode2 > 0.95 &&
        !colorArr.includes(backgroundBri < 50 ? "white" : "black")
      )
        colorArr.push(backgroundBri < 50 ? "white" : "black");
      drawArr.push({ x: x, y: y, w: w, h: h, c: { x: cx, y: cy }, p: p });
    }
  }
  randomLines = floor(random(1, 6));
  let tmpX = random(-1, 1),
    tmpY = random(-1, 1);
  for (let i = 0; i < randomLines; i++) {
    let x1 = random(-1, 1);
    let y1 = random(-1, 1);
    randomShape.push([
      [tmpX, tmpY],
      [x1, y1],
    ]);
    tmpX = x1;
    tmpY = y1;
  }
  sx =
    random() > 0.5 ? 0 : random() > 0.5 ? drawWidth : floor(random(drawWidth));
  sy =
    random() > 0.5
      ? 0
      : random() > 0.5
      ? drawHeight
      : floor(random(drawHeight));
  shapeWidth = floor(random(drawWidth / 2, drawWidth * 2));
  // Arrays
  pathQueue = [];
  pathArray = [];
  fieldPoints = [];
  grid = [];
  counter = 0;
  noiseVal1 = 1000;
  if (random() > 0.5) strokeArr.push("bristle");
  else strokeArr.push("bobble");
  if (strokeArr[0] == "bobble" && random() > 0.5) strokeArr.push("bristle");
  strokedPaths = random() > 0.5;
  margin = floor(random(20)) * 10;
  maxR = floor(random(areasX * areasY > 1 ? 25 : 50, 101));
  minR = maxR / 2;
  gap = 10;
  maxAngle = floor(random(1, 101));
  gridWidth = random() > 0.5 ? minR : maxR;
  gridHeight = random() > 0.5 ? minR : maxR;
  // Create points for random rune
  for (let i = 0; i < randomShape.length; i++) {
    for (let j = 0; j < randomShape[i].length - 1; j++) {
      for (let t = 0; t < 1; t += 0.05) {
        let x1 = lerp(
          sx + (randomShape[i][j][0] * shapeWidth) / 2,
          sx + (randomShape[i][j + 1][0] * shapeWidth) / 2,
          t
        );
        let y1 = lerp(
          sy + (randomShape[i][j][1] * shapeWidth) / 2,
          sy + (randomShape[i][j + 1][1] * shapeWidth) / 2,
          t
        );
        fieldPoints.push({ x: x1, y: y1 });
      }
    }
  }
  // Create grid for vector field
  for (
    let i = 0;
    i < ceil(max(drawWidth, width - drawWidth) / gridWidth) + 1;
    i++
  ) {
    grid[i] = [];
    for (
      let j = 0;
      j < ceil(max(drawHeight, height - drawHeight) / gridHeight) + 1;
      j++
    ) {
      let closest = getClosest(i * gridWidth, j * gridHeight);
      let angle = atan2(closest.y - j * gridHeight, closest.x - i * gridWidth);
      grid[i][j] = angle;
    }
  }
  let r1 = floor(random(minR, maxR));
  pathQueue.push({
    x: sx,
    y: sy,
    r: r1,
    a: getAngle(sx, sy),
    dir: 1,
    id: 0,
    path: [],
    topPath: [],
    bottomPath: [],
    c1: random(palette1).hsb,
    c2: random(palette2).hsb,
    angleLerp: random(0, 0.5),
    angleMod: random(PI * 2),
    step: random() > 0.5 ? random(0.25, 4) : 1,
    drawMode: random(strokeArr),
    startAngle: random(PI * 2),
    branch: random() > 0.8,
    special: random() > 0.5,
  });
  // FEATURES
  window.$fxhashFeatures = {
    background: backgroundBri > 50 ? "white" : "black",
    color: colorArr.join(" "),
    orientation: width > height ? 'landscape' : 'portrait',
    stroke: strokeArr.join(" "),
    size: maxR > 75 ? "large" : maxR > 50 ? "medium" : "small",
    split:
      areasX * areasY == 1
        ? "one"
        : areasX * areasY == 2
        ? "two"
        : areasX * areasY == 4
        ? "four"
        : areasX * areasY == 8
        ? "eight"
        : "sixteen",
    string: [
      areasX * areasY == 1
        ? "one"
        : areasX * areasY == 2
        ? "two"
        : areasX * areasY == 4
        ? "four"
        : areasX * areasY == 8
        ? "eight"
        : "sixteen",
      maxR > 75 ? "large" : maxR > 50 ? "medium" : "small",
      (strokedPaths ? "shady " : "") + colorArr.join(" "),
      strokeArr.join(" "),
      "on " + (backgroundBri > 50 ? "white" : "black"),
      width > height ? 'landscape' : 'portrait'
    ].join(" "),
  };
  if (loader.style.display === "none") {
    loader.style.display = "block";
  } else {
    loader.style.display = "none";
  }
}
function draw() {
  image(stroke1Canv, 0, 0);
  image(stroke2Canv, 0, 0);
  let len = pathQueue.length;
  if (len > 0) {
    for (let i = 0; i < 3; i++)
      if (len > i) {
        let path = pathQueue.sort((a, b) => b.id - a.id).pop();
        if (pathCollision(path)) {
          // draw this path
          drawPath(path);
          // continue this path
          createPath(path);
          // create new paths left
          let r1 = floor(random(minR, maxR));
          let x1 =
            path.x + (path.r / 2 + r1 / 2 + 2 + gap) * cos(path.a + HALF_PI);
          let y1 =
            path.y + (path.r / 2 + r1 / 2 + 2 + gap) * sin(path.a + HALF_PI);
          if (pathCollision({ x: x1, y: y1, r: r1 })) {
            if (path.branch && path.path.length > 1 && random() > 0.25)
              pathQueue.push({
                x: x1,
                y: y1,
                r: path.r * 0.95,
                a: path.a + path.startAngle,
                id: floor(random(10)),
                path: [
                  path.path[path.path.length - 2],
                  path.path[path.path.length - 1],
                ],
                topPath: [],
                bottomPath: [],
                c1: path.c1,
                c2: path.c2,
                angleLerp: path.angleLerp,
                angleMod: path.angleMod,
                step: path.step,
                drawMode: path.drawMode,
                startAngle: path.startAngle,
                branch: path.branch,
                special: path.special,
              });
            else
              pathQueue.push({
                x: x1,
                y: y1,
                r: r1,
                a: path.a + path.startAngle,
                id: floor(random(20)),
                path: [],
                topPath: [],
                bottomPath: [],
                c1: random(palette1).hsb,
                c2: random(palette2).hsb,
                angleLerp: random(),
                angleMod: random(PI * 2),
                step: random() > 0.5 ? random(0.25, 4) : 1,
                drawMode: random(strokeArr),
                startAngle: random(PI * 2),
                branch: random() > 0.8,
                special: random() > 0.5,
              });
          }
          // create new paths right
          r1 = floor(random(minR, maxR));
          x1 = path.x + (path.r / 2 + r1 / 2 + 2 + gap) * cos(path.a - HALF_PI);
          y1 = path.y + (path.r / 2 + r1 / 2 + 2 + gap) * sin(path.a - HALF_PI);
          if (pathCollision({ x: x1, y: y1, r: r1 })) {
            if (path.branch && path.path.length > 1 && random() > 0.25)
              pathQueue.push({
                x: x1,
                y: y1,
                r: path.r * 0.95,
                a: path.a - path.startAngle,
                id: floor(random(10)),
                path: [
                  path.path[path.path.length - 2],
                  path.path[path.path.length - 1],
                ],
                topPath: [],
                bottomPath: [],
                c1: path.c1,
                c2: path.c2,
                angleLerp: path.angleLerp,
                angleMod: path.angleMod,
                step: path.step,
                drawMode: path.drawMode,
                startAngle: path.startAngle,
                branch: path.branch,
                special: path.special,
              });
            else
              pathQueue.push({
                x: x1,
                y: y1,
                r: r1,
                a: path.a - path.startAngle,
                id: floor(random(20)),
                path: [],
                topPath: [],
                bottomPath: [],
                c1: random(palette1).hsb,
                c2: random(palette2).hsb,
                angleLerp: random(),
                angleMod: random(PI * 2),
                step: random() > 0.5 ? random(0.25, 4) : 1,
                drawMode: random(strokeArr),
                startAngle: random(PI * 2),
                branch: random() > 0.8,
                special: random() > 0.5,
              });
          }
        } else {
          if (maxR > 50 && counter == 357) {
            maxR *= 0.75;
            minR *= 0.5;
          }
          counter++;
        }
      }
  } else if (counter < 714) {
    let r1 = floor(random(minR, maxR));
    let x1 = floor(random(grid.length)) * gridWidth + gridWidth / 2;
    let y1 = floor(random(grid[0].length)) * gridHeight + gridHeight / 2;
    pathQueue.push({
      x: x1,
      y: y1,
      r: r1,
      a: getAngle(x1, y1),
      id: 0,
      path: [],
      topPath: [],
      bottomPath: [],
      c1: random(palette1).hsb,
      c2: random(palette2).hsb,
      angleLerp: random(),
      angleMod: random(PI * 2),
      step: random() > 0.5 ? random(0.25, 4) : 1,
      drawMode: random(strokeArr),
      startAngle: random(PI * 2),
      branch: random() > 0.5,
      special: random() > 0.5,
    });
  } else {
    noLoop();
    console.log("%cNo Strings Attached", "font-size: 20px");
    console.log("%cBut..", "font-size: 16px");
    console.log("%cThis one:", "font-size: 16px");
    let string =
      window.$fxhashFeatures.string.charAt(0).toUpperCase() +
      window.$fxhashFeatures.string.slice(1) +
      ".";
    console.log("%c" + string, "font-size: 20px");
    console.log("%cVGA 2022", "font-size: 20px");
    fxpreview();
  }
}
function drawPath(path) {
  stroke1Canv.noStroke();
  stroke2Canv.noStroke();
  stroke2Canv.fill(bgColor);
  let len = path.path.length;
  if (len > 0) {
    let d = dist(path.path[len - 1].x, path.path[len - 1].y, path.x, path.y);
    let step =
      path.drawMode == "bristle"
        ? max(path.r / 5, 1) / d
        : (path.r * path.step) / d;
    for (let t = 0; t < 1; t += step) {
      let x = lerp(path.path[len - 1].x, path.x, t);
      let y = lerp(path.path[len - 1].y, path.y, t);
      let r = lerp(path.path[len - 1].r, path.r, t);
      pathArray.push({
        x: x,
        y: y,
        r: r / 2,
        id: path.id,
        a: path.a,
        startAngle: path.startAngle,
      });
      if (path.drawMode === "bobble") {
        for (let i = 0; i < drawArr.length; i++) {
          let fillColor = !drawArr[i].p || path.special ? path.c1 : path.c2;
          stroke1Canv.fill(fillColor);
          drawShape(
            drawArr[i].x + (drawArr[i].c.x > 0 ? drawArr[i].c.x - x : x),
            drawArr[i].y + (drawArr[i].c.y > 0 ? drawArr[i].c.y - y : y),
            r
          );
        }
      }
    }
  } else {
    if (path.drawMode === "bobble") {
      pathArray.push({
        x: path.x,
        y: path.y,
        r: path.r / 2,
        id: path.id,
        a: path.a,
        startAngle: path.startAngle,
      });
      let x = path.x;
      let y = path.y;
      let r = path.r;
      for (let i = 0; i < drawArr.length; i++) {
        let fillColor = !drawArr[i].p || path.special ? path.c1 : path.c2;
        stroke1Canv.fill(fillColor);
        drawShape(
          drawArr[i].x + (drawArr[i].c.x > 0 ? drawArr[i].c.x - x : x),
          drawArr[i].y + (drawArr[i].c.y > 0 ? drawArr[i].c.y - y : y),
          r
        );
      }
    }
  }
  if (len > 1 && path.drawMode === "bristle") {
    let v1 = createVector(path.path[len - 1].x, path.path[len - 1].y);
    let v2 = createVector(path.path[len - 2].x, path.path[len - 2].y);
    let v3 = createVector(path.x, path.y);
    let r1 = path.path[len - 1].r / 2;
    let n1 = v2.copy().sub(v1).normalize();
    let n2 = v1.copy().sub(v3).normalize();
    if (p5.Vector.dot(n1, n2) < HALF_PI / 4) r1 = sqrt(pow(r1 * 1.25, 2));
    let n3 = n1.copy().add(n2).normalize().mult(r1);
    let p1 = v1.copy().add(-n3.y, n3.x);
    let p2 = v1.copy().add(n3.y, -n3.x);
    if (len === 2) {
      let v4 = v2.copy().add(
        v2
          .copy()
          .sub(v1)
          .normalize()
          .mult(path.path[len - 2].r / 4)
      );
      let n4 = v4
        .copy()
        .sub(v1)
        .normalize()
        .mult(path.path[len - 2].r / 2);
      let p3 = v4.copy().add(-n4.y, n4.x);
      let p4 = v4.copy().add(n4.y, -n4.x);
      path.topPath.push({ x: p3.x, y: p3.y });
      path.bottomPath.push({ x: p4.x, y: p4.y });
    }
    path.topPath.push({ x: p1.x, y: p1.y });
    path.bottomPath.push({ x: p2.x, y: p2.y });
  }
  if (
    path.topPath.length > 0 &&
    path.bottomPath.length > 0 &&
    path.drawMode === "bristle"
  ) {
    for (let i = 0; i < drawArr.length; i++) {
      let fillColor = !drawArr[i].p || path.special ? path.c1 : path.c2;
      stroke1Canv.fill(fillColor);
      stroke1Canv.stroke(fillColor);
      if (
        strokedPaths &&
        noise(
          (drawArr[i].c.x > 0
            ? drawArr[i].x + drawArr[i].c.x - path.x
            : drawArr[i].x + path.x) / 500,
          (drawArr[i].c.x > 0
            ? drawArr[i].y + drawArr[i].c.y - path.y
            : drawArr[i].y + path.y) / 500
        ) > 0.25
      )
        stroke1Canv.noFill();
      drawStroke(
        stroke1Canv,
        path,
        drawArr[i].c.x > 0 ? -(drawArr[i].x + drawArr[i].c.x) : drawArr[i].x,
        drawArr[i].c.y > 0 ? -(drawArr[i].y + drawArr[i].c.y) : drawArr[i].y
      );
    }
  }
  path.path.push({ x: path.x, y: path.y, r: path.r });
}
function finishPath(path) {
  stroke1Canv.noStroke();
  stroke2Canv.noStroke();
  let len = path.path.length;
  if (len > 1 && path.drawMode === "bristle") {
    let v1 = createVector(path.path[len - 1].x, path.path[len - 1].y);
    let v2 = createVector(path.path[len - 2].x, path.path[len - 2].y);
    let v3 = v1.copy().add(
      v1
        .copy()
        .sub(v2)
        .normalize()
        .mult(path.path[len - 1].r / 4)
    );
    let n1 = v3
      .copy()
      .sub(v1)
      .normalize()
      .mult(path.path[len - 1].r / 2);
    let p1 = v3.copy().add(n1.y, -n1.x);
    let p2 = v3.copy().add(-n1.y, n1.x);
    let d = v3.dist(v1);
    for (let t = 0; t <= 1; t += 1 / d) {
      let x = lerp(v3.x, v1.x, t);
      let y = lerp(v3.y, v1.y, t);
      pathArray.push({
        x: x,
        y: y,
        r: path.r / 2,
        id: path.id,
        a: path.a,
        startAngle: path.startAngle,
      });
    }
    if (len === 2) {
      let v4 = v2.copy().add(
        v2
          .copy()
          .sub(v1)
          .normalize()
          .mult(path.path[len - 2].r / 4)
      );
      let n4 = v4
        .copy()
        .sub(v1)
        .normalize()
        .mult(path.path[len - 2].r / 2);
      let p3 = v4.copy().add(-n4.y, n4.x);
      let p4 = v4.copy().add(n4.y, -n4.x);
      path.topPath.push({ x: p3.x, y: p3.y });
      path.bottomPath.push({ x: p4.x, y: p4.y });
    }
    path.topPath.push({ x: p1.x, y: p1.y });
    path.bottomPath.push({ x: p2.x, y: p2.y });
  }
  if (
    path.topPath.length > 0 &&
    path.bottomPath.length > 0 &&
    path.drawMode === "bristle"
  ) {
    for (let i = 0; i < drawArr.length; i++) {
      let fillColor = !drawArr[i].p || path.special ? path.c1 : path.c2;
      stroke1Canv.fill(fillColor);
      stroke1Canv.stroke(fillColor);
      if (
        strokedPaths &&
        noise(
          (drawArr[i].c.x > 0
            ? drawArr[i].x + drawArr[i].c.x - path.x
            : drawArr[i].x + path.x) / 500,
          (drawArr[i].c.x > 0
            ? drawArr[i].y + drawArr[i].c.y - path.y
            : drawArr[i].y + path.y) / 500
        ) > 0.25
      )
        stroke1Canv.noFill();
      drawStroke(
        stroke1Canv,
        path,
        drawArr[i].c.x > 0 ? -(drawArr[i].x + drawArr[i].c.x) : drawArr[i].x,
        drawArr[i].c.y > 0 ? -(drawArr[i].y + drawArr[i].c.y) : drawArr[i].y
      );
    }
  }
}
function drawStroke(canv, path, offsetX = 0, offsetY = 0) {
  let points1 = [
    path.topPath[path.topPath.length - 2],
    path.topPath[path.topPath.length - 1],
  ];
  let points2 = [
    path.bottomPath[path.bottomPath.length - 2],
    path.bottomPath[path.bottomPath.length - 1],
  ];
  let len = points1.length;
  if (
    (offsetX >= 0 ? points1[0].x + offsetX : abs(offsetX) - points1[0].x) >
      margin &&
    (offsetX >= 0 ? points1[0].x + offsetX : abs(offsetX) - points1[0].x) <
      width - margin &&
    (offsetY >= 0 ? points1[0].y + offsetY : abs(offsetY) - points1[0].y) >
      margin &&
    (offsetY >= 0 ? points1[0].y + offsetY : abs(offsetY) - points1[0].y) <
      height - margin &&
    (offsetX >= 0 ? points1[1].x + offsetX : abs(offsetX) - points1[1].x) >
      margin &&
    (offsetX >= 0 ? points1[1].x + offsetX : abs(offsetX) - points1[1].x) <
      width - margin &&
    (offsetY >= 0 ? points1[1].y + offsetY : abs(offsetY) - points1[1].y) >
      margin &&
    (offsetY >= 0 ? points1[1].y + offsetY : abs(offsetY) - points1[1].y) <
      height - margin &&
    (offsetX >= 0 ? points2[0].x + offsetX : abs(offsetX) - points2[0].x) >
      margin &&
    (offsetX >= 0 ? points2[0].x + offsetX : abs(offsetX) - points2[0].x) <
      width - margin &&
    (offsetY >= 0 ? points2[0].y + offsetY : abs(offsetY) - points2[0].y) >
      margin &&
    (offsetY >= 0 ? points2[0].y + offsetY : abs(offsetY) - points2[0].y) <
      height - margin &&
    (offsetX >= 0 ? points2[1].x + offsetX : abs(offsetX) - points2[1].x) >
      margin &&
    (offsetX >= 0 ? points2[1].x + offsetX : abs(offsetX) - points2[1].x) <
      width - margin &&
    (offsetY >= 0 ? points2[1].y + offsetY : abs(offsetY) - points2[1].y) >
      margin &&
    (offsetY >= 0 ? points2[1].y + offsetY : abs(offsetY) - points2[1].y) <
      height - margin
  ) {
    for (let l = 0.5; l < 10; l++) {
      canv.beginShape();
      for (let i = 0; i < len - 1; i++) {
        let x1 =
          (offsetX >= 0
            ? points1[i].x + offsetX
            : abs(offsetX) - points1[i].x) +
          noise(points1[i].x / noiseVal1, points1[i].y / noiseVal1) *
            (path.path[i].r / 8 - -path.path[i].r / 8) +
          -path.path[i].r / 8;
        let y1 =
          (offsetY >= 0
            ? points1[i].y + offsetY
            : abs(offsetY) - points1[i].y) +
          noise(points1[i].x / noiseVal1, points1[i].y / noiseVal1) *
            (path.path[i].r / 8 - -path.path[i].r / 8) +
          -path.path[i].r / 8;
        let x2 =
          (offsetX >= 0
            ? points2[i].x + offsetX
            : abs(offsetX) - points2[i].x) +
          noise(points2[i].x / noiseVal1, points2[i].y / noiseVal1) *
            (path.path[i].r / 8 - -path.path[i].r / 8) +
          -path.path[i].r / 8;
        let y2 =
          (offsetY >= 0
            ? points2[i].y + offsetY
            : abs(offsetY) - points2[i].y) +
          noise(points2[i].x / noiseVal1, points2[i].y / noiseVal1) *
            (path.path[i].r / 8 - -path.path[i].r / 8) +
          -path.path[i].r / 8;
        let x3 =
          (offsetX >= 0
            ? points1[i + 1].x + offsetX
            : abs(offsetX) - points1[i + 1].x) +
          noise(points1[i + 1].x / noiseVal1, points1[i + 1].y / noiseVal1) *
            (path.path[i + 1].r / 8 - -path.path[i + 1].r / 8) +
          -path.path[i + 1].r / 8;
        let y3 =
          (offsetY >= 0
            ? points1[i + 1].y + offsetY
            : abs(offsetY) - points1[i + 1].y) +
          noise(points1[i + 1].x / noiseVal1, points1[i + 1].y / noiseVal1) *
            (path.path[i + 1].r / 8 - -path.path[i + 1].r / 8) +
          -path.path[i + 1].r / 8;
        let x4 =
          (offsetX >= 0
            ? points2[i + 1].x + offsetX
            : abs(offsetX) - points2[i + 1].x) +
          noise(points2[i + 1].x / noiseVal1, points2[i + 1].y / noiseVal1) *
            (path.path[i + 1].r / 8 - -path.path[i + 1].r / 8) +
          -path.path[i + 1].r / 8;
        let y4 =
          (offsetY >= 0
            ? points2[i + 1].y + offsetY
            : abs(offsetY) - points2[i + 1].y) +
          noise(points2[i + 1].x / noiseVal1, points2[i + 1].y / noiseVal1) *
            (path.path[i + 1].r / 8 - -path.path[i + 1].r / 8) +
          -path.path[i + 1].r / 8;
        let sx = lerp(x1, x2, noise(x1 / (l * 100), y1 / (l * 100)) * (l / 10));
        let sy = lerp(y1, y2, noise(x1 / (l * 100), y1 / (l * 100)) * (l / 10));
        let ex = lerp(x3, x4, noise(x3 / (l * 100), y3 / (l * 100)) * (l / 10));
        let ey = lerp(y3, y4, noise(x3 / (l * 100), y3 / (l * 100)) * (l / 10));
        let a1 = atan2(ey - sy, ex - sx);
        let a2 = atan2(sy - ey, sx - ex);
        let r1 =
          noise(sx / 100, sy / 100) *
            (path.path[i].r / 8 - -path.path[i].r / 8) +
          -path.path[i].r / 8;
        let r2 =
          noise(ex / 100, ey / 100) *
            (path.path[i + 1].r / 8 - -path.path[i + 1].r / 8) +
          -path.path[i + 1].r / 8;
        sx += r1 * sin(a2);
        sy += r1 * cos(a2);
        ex += r2 * sin(a1);
        ey += r2 * cos(a1);
        let d = dist(sx, sy, ex, ey);
        for (let t = 0; t <= 1; t += 1 / d) {
          let x = lerp(sx, ex, t);
          let y = lerp(sy, ey, t);
          x +=
            noise(x / noiseVal1, y / noiseVal1) *
              (path.path[i].r / 8 - -path.path[i].r / 8) +
            -path.path[i].r / 8;
          y +=
            noise(x / noiseVal1, y / noiseVal1) *
              (path.path[i].r / 8 - -path.path[i].r / 8) +
            -path.path[i].r / 8;
          canv.vertex(x, y);
        }
      }
      for (let i = len - 1; i >= 1; i--) {
        let x1 =
          (offsetX >= 0
            ? points1[i].x + offsetX
            : abs(offsetX) - points1[i].x) +
          noise(points1[i].x / noiseVal1, points1[i].y / noiseVal1) *
            (path.path[i].r / 8 - -path.path[i].r / 8) +
          -path.path[i].r / 8;
        let y1 =
          (offsetY >= 0
            ? points1[i].y + offsetY
            : abs(offsetY) - points1[i].y) +
          noise(points1[i].x / noiseVal1, points1[i].y / noiseVal1) *
            (path.path[i].r / 8 - -path.path[i].r / 8) +
          -path.path[i].r / 8;
        let x2 =
          (offsetX >= 0
            ? points2[i].x + offsetX
            : abs(offsetX) - points2[i].x) +
          noise(points2[i].x / noiseVal1, points2[i].y / noiseVal1) *
            (path.path[i].r / 8 - -path.path[i].r / 8) +
          -path.path[i].r / 8;
        let y2 =
          (offsetY >= 0
            ? points2[i].y + offsetY
            : abs(offsetY) - points2[i].y) +
          noise(points2[i].x / noiseVal1, points2[i].y / noiseVal1) *
            (path.path[i].r / 8 - -path.path[i].r / 8) +
          -path.path[i].r / 8;
        let x3 =
          (offsetX >= 0
            ? points1[i - 1].x + offsetX
            : abs(offsetX) - points1[i - 1].x) +
          noise(points1[i - 1].x / noiseVal1, points1[i - 1].y / noiseVal1) *
            (path.path[i - 1].r / 8 - -path.path[i - 1].r / 8) +
          -path.path[i - 1].r / 8;
        let y3 =
          (offsetY >= 0
            ? points1[i - 1].y + offsetY
            : abs(offsetY) - points1[i - 1].y) +
          noise(points1[i - 1].x / noiseVal1, points1[i - 1].y / noiseVal1) *
            (path.path[i - 1].r / 8 - -path.path[i - 1].r / 8) +
          -path.path[i - 1].r / 8;
        let x4 =
          (offsetX >= 0
            ? points2[i - 1].x + offsetX
            : abs(offsetX) - points2[i - 1].x) +
          noise(points2[i - 1].x / noiseVal1, points2[i - 1].y / noiseVal1) *
            (path.path[i - 1].r / 8 - -path.path[i - 1].r / 8) +
          -path.path[i - 1].r / 8;
        let y4 =
          (offsetY >= 0
            ? points2[i - 1].y + offsetY
            : abs(offsetY) - points2[i - 1].y) +
          noise(points2[i - 1].x / noiseVal1, points2[i - 1].y / noiseVal1) *
            (path.path[i - 1].r / 8 - -path.path[i - 1].r / 8) +
          -path.path[i - 1].r / 8;
        let sx = lerp(
          x1,
          x2,
          noise(x1 / (l * 100), y1 / (l * 100)) * ((l + 1.5) / 10)
        );
        let sy = lerp(
          y1,
          y2,
          noise(x1 / (l * 100), y1 / (l * 100)) * ((l + 1.5) / 10)
        );
        let ex = lerp(
          x3,
          x4,
          noise(x3 / (l * 100), y3 / (l * 100)) * ((l + 1.5) / 10)
        );
        let ey = lerp(
          y3,
          y4,
          noise(x3 / (l * 100), y3 / (l * 100)) * ((l + 1.5) / 10)
        );
        let a1 = atan2(ey - sy, ex - sx);
        let a2 = atan2(sy - ey, sx - ex);
        let r1 =
          noise(sx / 100, sy / 100) *
            (path.path[i].r / 8 - -path.path[i].r / 8) +
          -path.path[i].r / 8;
        let r2 =
          noise(ex / 100, ey / 100) *
            (path.path[i - 1].r / 8 - -path.path[i - 1].r / 8) +
          -path.path[i - 1].r / 8;
        sx += r1 * sin(a1);
        sy += r1 * cos(a1);
        ex += r2 * sin(a2);
        ey += r2 * cos(a2);
        let d = dist(sx, sy, ex, ey);
        for (let t = 0; t <= 1; t += 1 / d) {
          let x = lerp(sx, ex, t);
          let y = lerp(sy, ey, t);
          x +=
            noise(x / noiseVal1, y / noiseVal1) *
              (path.path[i].r / 8 - -path.path[i].r / 8) +
            -path.path[i].r / 8;
          y +=
            noise(x / noiseVal1, y / noiseVal1) *
              (path.path[i].r / 8 - -path.path[i].r / 8) +
            -path.path[i].r / 8;
          canv.vertex(x, y);
        }
      }
      canv.endShape(CLOSE);
    }
  }
}
function createPath(path) {
  let step = path.r * 1.25;
  // last position
  path.lastX = path.x;
  path.lastY = path.y;
  path.lastA = path.a;
  // update
  path.x += step * cos(path.a);
  path.y += step * sin(path.a);
  path.a = lerpAngle(path.a, getAngle(path.x, path.y), path.angleLerp);
  path.a = round(path.a / path.angleMod) * path.angleMod;
  path.r +=
    random(-path.r / 4, path.r / 4) *
    noise(path.x / noiseVal1, path.y / noiseVal1);
  path.r = max(minR / 2, min(path.r, maxR));
  // go forward
  if (pathCollision(path)) {
    pathQueue.push({
      x: path.x,
      y: path.y,
      r: path.r,
      a: path.a,
      id: path.id,
      topPath: path.topPath,
      bottomPath: path.bottomPath,
      path: path.path,
      c1: path.c1,
      c2: path.c2,
      angleLerp: path.angleLerp,
      angleMod: path.angleMod,
      step: path.step,
      drawMode: path.drawMode,
      startAngle: path.startAngle,
      branch: path.branch,
      special: path.special,
    });
  } else {
    // wobble to next pos
    for (let i = 1; i < maxAngle + 1; i++) {
      let a =
        i % 2 == 0 ? i * (HALF_PI / maxAngle) : -(i * (HALF_PI / maxAngle));
      path.x = path.lastX + step * cos(path.lastA + a);
      path.y = path.lastY + step * sin(path.lastA + a);
      if (pathCollision(path)) {
        path.a = lerpAngle(
          path.lastA + a,
          getAngle(path.x, path.y),
          path.angleLerp
        );
        path.a = round(path.a / path.angleMod) * path.angleMod;
        pathQueue.push({
          x: path.x,
          y: path.y,
          r: path.r,
          a: path.a,
          id: path.id,
          topPath: path.topPath,
          bottomPath: path.bottomPath,
          path: path.path,
          c1: path.c1,
          c2: path.c2,
          angleLerp: path.angleLerp,
          angleMod: path.angleMod,
          step: path.step,
          drawMode: path.drawMode,
          startAngle: path.startAngle,
          branch: path.branch,
          special: path.special,
        });
        return;
      }
      a *= -1;
      path.x = path.lastX + step * cos(path.lastA + a);
      path.y = path.lastY + step * sin(path.lastA + a);
      if (pathCollision(path)) {
        path.a = lerpAngle(
          path.lastA + a,
          getAngle(path.x, path.y),
          path.angleLerp
        );
        path.a = round(path.a / path.angleMod) * path.angleMod;
        pathQueue.push({
          x: path.x,
          y: path.y,
          r: path.r,
          a: path.a,
          id: path.id,
          topPath: path.topPath,
          bottomPath: path.bottomPath,
          path: path.path,
          c1: path.c1,
          c2: path.c2,
          angleLerp: path.angleLerp,
          angleMod: path.angleMod,
          step: path.step,
          drawMode: path.drawMode,
          startAngle: path.startAngle,
          branch: path.branch,
          special: path.special,
        });
        return;
      }
    }
    if (path.path.length > 0) {
      finishPath(path);
    }
  }
}
function drawShape(x, y, r, splatter = true) {
  let splatArr = [];
  stroke1Canv.beginShape();
  if (
    x - r > margin &&
    x + r < width - margin &&
    y - r > margin &&
    y + r < height - margin
  ) {
    x += noise(x / noiseVal1, y / noiseVal1) * (r / 4 - -r / 4) + -r / 4;
    y += noise(x / noiseVal1, y / noiseVal1) * (r / 4 - -r / 4) + -r / 4;
    for (let a = 0; a < PI * 2; a += PI / 180) {
      let x1 = x + (r / 2) * cos(a);
      let y1 = y + (r / 2) * sin(a);
      let r1 = r - noise(x1 / 50, y1 / 50) * (r / 2);
      let x2 = x + (r1 / 2) * cos(a);
      let y2 = y + (r1 / 2) * sin(a);
      stroke1Canv.vertex(x2, y2);
      if (noise(x1 / 100, y1 / 100) > 0.8 && splatter) {
        splatArr.push({ x: x1, y: y1, r: r1 / 4 });
        splatter = false;
      }
    }
    stroke1Canv.endShape(CLOSE);
    if (splatArr.length > 0) {
      for (let i = 0; i < splatArr.length; i++)
        drawShape(splatArr[i].x, splatArr[i].y, splatArr[i].r, false);
    }
    if (strokedPaths && noise(x / 500, y / 500) > 0.25 && r > minR) {
      let splatArr = [];
      stroke2Canv.beginShape();
      for (let a = 0; a < PI * 2; a += PI / 180) {
        let x1 = x + (r / 4) * cos(a);
        let y1 = y + (r / 4) * sin(a);
        let r1 = noise(x1 / 50, y1 / 50) * r;
        let x2 = x + (r1 / 2) * cos(a);
        let y2 = y + (r1 / 2) * sin(a);
        stroke2Canv.vertex(x2, y2);
        if (noise(x1 / 50, y1 / 50) > 0.8 && splatter) {
          splatArr.push({ x: x1, y: y1, r: r1 / 4 });
          splatter = false;
        }
      }
      stroke2Canv.endShape(CLOSE);
      if (splatArr.length > 0) {
        for (let i = 0; i < splatArr.length; i++) {
          stroke2Canv.beginShape();
          for (let a = 0; a < PI * 2; a += PI / 180) {
            let x1 = splatArr[i].x + (splatArr[i].r / 2) * cos(a);
            let y1 = splatArr[i].y + (splatArr[i].r / 2) * sin(a);
            let r1 =
              splatArr[i].r - noise(x1 / 100, y1 / 100) * (splatArr[i].r / 2);
            let x2 = splatArr[i].x + (r1 / 2) * cos(a);
            let y2 = splatArr[i].y + (r1 / 2) * sin(a);
            stroke2Canv.vertex(x2, y2);
          }
          stroke2Canv.endShape(CLOSE);
        }
      }
    }
  }
}
function lerpAngle(a, b, i) {
  var va = p5.Vector.fromAngle(a);
  var vb = p5.Vector.fromAngle(b);
  return p5.Vector.lerp(va, vb, i).heading();
}
function pathCollision(path) {
  let w = drawWidth;
  let h = drawHeight;
  let marginLeft = path.r / 2;
  let marginRight = path.r / 2;
  let marginTop = path.r / 2;
  let marginBottom = path.r / 2;
  if (
    path.x < marginLeft ||
    path.x > w - marginRight ||
    path.y < marginTop ||
    path.y > h - marginBottom
  )
    return false;
  for (let i = 0; i < pathArray.length; i++) {
    if (
      pathArray[i].x < path.x + maxR * 2 &&
      pathArray[i].x > path.x - maxR * 2 &&
      pathArray[i].y < path.y + maxR * 2 &&
      pathArray[i].y > path.y - maxR * 2
    ) {
      let d = dist(path.x, path.y, pathArray[i].x, pathArray[i].y);
      if (d < path.r / 2 + pathArray[i].r + gap / 2) {
        return false;
      }
    }
  }
  return true;
}
function getAngle(x, y) {
  if (x < 0) x = 0;
  else if (x > drawWidth) x = drawWidth;
  if (y < 0) y = 0;
  else if (y > drawHeight) y = drawHeight;
  return grid[floor(x / gridWidth)][floor(y / gridHeight)];
}
function getClosest(x, y) {
  let d = 99999;
  let closest = { x: 0, y: 0 };
  for (let i = 0; i < fieldPoints.length; i++) {
    let td = dist(x, y, fieldPoints[i].x, fieldPoints[i].y);
    if (td < d) {
      closest.x = fieldPoints[i].x;
      closest.y = fieldPoints[i].y;
      d = td;
    }
  }
  return closest;
}
function keyPressed() {
  if (key === "s") save(fxhash + ".png");
  else if (key == "S") save(fxhash + ".jpg");
  else if (key === "1")
    (pixDensity = 1),
      clear(),
      setup(),
      loader.style.display === "none"
        ? (loader.style.display = "block")
        : (loader.style.display = "none"),
      loop();
  else if (key === "2")
    (pixDensity = 2),
      clear(),
      setup(),
      loader.style.display === "none"
        ? (loader.style.display = "block")
        : (loader.style.display = "none"),
      loop();
  else if (key === "4")
    (pixDensity = 4),
      clear(),
      setup(),
      loader.style.display === "none"
        ? (loader.style.display = "block")
        : (loader.style.display = "none"),
      loop();
}
function createPalette(mode) {
  let palette = [];
  let sat = mode < 0.95 ? (backgroundBri > 50 ? 100 : 90) : 0;
  let bri = mode < 0.95 ? (backgroundBri > 50 ? 80 : 100) : 100 - backgroundBri;
  let paletteColors = 5;
  let colors = [];
  for (let i = 0; i < colorAmount; i++) {
    let hue1 =
      i == 0
        ? mainHue
        : random() > 0.5
        ? mainHue > 180
          ? mainHue - floor(random(181))
          : mainHue + floor(random(181))
        : mainHue < 180
        ? mainHue + floor(random(181))
        : mainHue - floor(random(181));
    colors.push(hue1);
  }
  let index = 0;
  for (let j = 0; j < paletteColors; j++) {
    let hue1 = colors[index];
    let sat1 = sat - j * (sat / paletteColors);
    let bri1 = bri;
    palette.push({
      hsb: [hue1, sat1, bri1],
    });
    if (index < colorAmount - 1) index++;
    else index = 0;
    if (
      colorMode1 > 0.95 &&
      colorArr.length == 0 &&
      !colorArr.includes(backgroundBri > 50 ? "black" : "white")
    )
      colorArr.push(backgroundBri > 50 ? "black" : "white");
    else if (
      colorMode1 < 0.95 &&
      !colorArr.includes(hueNames[(floor(hue1 / 15) * 15) / 15])
    )
      colorArr.push(hueNames[(floor(hue1 / 15) * 15) / 15]);
  }
  return palette;
}

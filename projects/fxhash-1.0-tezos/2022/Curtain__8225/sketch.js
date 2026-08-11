let parts;

let distThresh;
let mapScale;
let offset;
let initOffset;
let nParts,
  nAdded = 0;
let wobble;
let margin = 50;
let mainC, fillC, frameFill;
let partRad;
let speed;
let dark;
let drawCircles;
let singleColor;
let spawnRad, spawnWidth;
let hueOffset;
let white;
let spawnLen;
let circle;

let done = false;
let resizeTimer = 0;
let needResizing = false;

let main, disp;
let mainBufferScale;
let packLength = 800;

function setup() {
  noiseSeed(fxrand()*1000);
  
  colorMode(HSB, 255);
  c = createCanvas(
    int(min(windowWidth, windowHeight)),
    int(min(windowWidth, windowHeight))
  );

  circle = fxrand() < 0.8;
  white = color(250);
  hueOffset = fxrand()*255;

  let r1 = fxrand();
  if (r1 < 0.25) {
    print("0");
    dark = false;
    drawCircles = false;
    mainC = color(255);
    singleColor = true;
    singleFill = fxrand() < 0.5;
    let r = fxrand();
    if (r < 0.13) {
      print("a");
      fillC = color(hueOffset, 255, 255);
      if (brightness(fillC) > 128) {
        fillC = color(255 - hueOffset, 255, 255);
      }
    } else if (r < 0.66) {
      print("b");
      fillC = color(0);
    } else {
      print("c");
      fillC = color(255);
      singleFill = false;
    }
  } else if (r1 < 0.3) {
    print("1");
    dark = true;
    drawCircles = false;
    singleColor = false;
    mainC = color(fxrand()*255, fxrand()*255, fxrand()*255);
    singleFill = false;
  } else if (r1 < 0.35) {
    print("2");
    dark = true;
    drawCircles = false;
    singleColor = !true;
    mainC = color(fxrand()*255, 155, 255);
    fillC = color(0);
    singleFill = true;
  } else {
    print("3");
    dark = false;
    drawCircles = true;
    singleColor = true;
    singleFill = true;
    mainC = color(0);
    fillC = white;
  }

  if (dark) {
    frameFill = color(0);
  } else {
    frameFill = white;
  }

  main = createGraphics(3200, 3200);
  disp = createGraphics(width, height);
  mainBufferScale = packLength / main.width;
  if (dark) {
    main.background(0);
    disp.background(0);
  } else {
    main.background(white);
    disp.background(white);
  }

  pixelDensity(1);

  if (dark) {
    background(0);
  } else {
    background(white);
  }
  nParts = fxrand()*(300-150) + 150;
  wobble = fxrand()*(10-4) + 4;
  offset = fxrand()*TWO_PI;
  initOffset = fxrand()*TWO_PI;
  distThresh = (fxrand()*(60-40) + 40) * (float(width) / float(packLength));
  mapScale = 0.02;
  speed = 4;
  spawnRad = fxrand() * (0.25 - 0.15) + 0.15;
  spawnWidth = fxrand() * (0.3-0.2) + 0.2;
  spawnLen = fxrand() * (2-0.5) + 0.5;

  partRad = fxrand() * (10-5) + 5;

  parts = [];
}

function draw() {
  if (!done) {
    if (nAdded < nParts) {
      if (circle) {
        let a = map(nAdded, 0, nParts, 0, TWO_PI * spawnLen) + initOffset;
        parts.push(
          new Part(
            cos(a) * spawnRad * packLength + packLength / 2 + (fxrand()*2-1) * wobble,
            sin(a) * spawnRad * packLength + packLength / 2 + (fxrand()*2-1) * wobble
          )
        );
        nAdded++;
      } else {
        let a = map(nAdded, 0, nParts, 0, 1);
        parts.push(
          new Part(
            lerp(packLength * spawnWidth, packLength * (1 - spawnWidth), a) +
              (fxrand()*2-1) * wobble,
            packLength * spawnWidth + (fxrand()*2-1) * wobble
          )
        );
        parts.push(
          new Part(
            lerp(packLength * (1 - spawnWidth), packLength * spawnWidth, a) +
              (fxrand()*2-1) * wobble,
            packLength * (1 - spawnWidth) + (fxrand()*2-1) * wobble
          )
        );
        parts.push(
          new Part(
            packLength * spawnWidth + (fxrand()*2-1) * wobble,
            lerp(packLength * spawnWidth, packLength * (1 - spawnWidth), a) +
              (fxrand()*2-1) * wobble
          )
        );
        parts.push(
          new Part(
            packLength * (1 - spawnWidth) + (fxrand()*2-1) * wobble,
            lerp(packLength * (1 - spawnWidth), packLength * spawnWidth, a) +
              (fxrand()*2-1) * wobble
          )
        );
        nAdded += 4;
      }
    }

    let i, c;
    let p1, p2;
    let d;
    for (i = 0; i < parts.length - 1; i++) {
      p1 = parts[i];
      for (c = i + 1; c < parts.length; c++) {
        p2 = parts[c];
        dd = pow(p1.p.x - p2.p.x, 2) + pow(p1.p.y - p2.p.y, 2);
        if (dd < distThresh * distThresh) {
          if (p2.available && p1.available) {
            p1.nodes.push(p2);
          }
        }
      }
    }

    let nAlive = 0;
    for (i = parts.length - 1; i >= 0; i--) {
      if (parts[i].done) {
      } else {
        nAlive++;
        parts[i].update();
        // if (!parts[i].available) {
          parts[i].draw();
        // }
      }
    }

    disp.push();
    disp.scale(
      float(width) / float(packLength),
      float(width) / float(packLength)
    );

    disp.noStroke();
    disp.fill(frameFill);
    frameWidth = packLength / 8;
    disp.rect(0, 0, packLength, frameWidth);
    disp.rect(0, packLength - frameWidth, packLength, frameWidth);
    disp.rect(0, frameWidth - 10, frameWidth, packLength - 2 * frameWidth + 20);
    disp.rect(
      packLength - frameWidth,
      frameWidth - 10,
      frameWidth,
      packLength - 2 * frameWidth + 20
    );
    disp.pop();

    main.push();
    main.scale(1 / mainBufferScale, 1 / mainBufferScale);
    main.noStroke();
    main.fill(frameFill);
    frameWidth = packLength / 8;
    main.rect(0, 0, packLength, frameWidth);
    main.rect(0, packLength - frameWidth, packLength, frameWidth);
    main.rect(0, frameWidth - 10, frameWidth, packLength - 2 * frameWidth + 20);
    main.rect(
      packLength - frameWidth,
      frameWidth - 10,
      frameWidth,
      packLength - 2 * frameWidth + 20
    );
    main.pop();

    image(disp, 0, 0, width, height);

    if (nAlive == 0) {
      resize();
      done = true;
      fxpreview();
      console.log("done");
      print("done");
      // noLoop();
    }
  } else {
    if (needResizing && resizeTimer <= 0) {
      resize();
      needResizing = false;
      resizeTimer = 30;
    } else {
      if (resizeTimer > 0) {
        resizeTimer--;
      }
    }
  }

}

function resize() {
  resizeCanvas(min(windowWidth, windowHeight), min(windowWidth, windowHeight));
  background(white);
  image(disp, 0, 0, width, height);
}

function windowResized() {
  needResizing = true;
}

function keyTyped() {
  if (key === "s") {
    console.log("saving!");
    saveCanvas(main, "map", "jpg");
  }
}

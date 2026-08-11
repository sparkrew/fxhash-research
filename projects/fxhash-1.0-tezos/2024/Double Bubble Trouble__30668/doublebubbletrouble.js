let transX, transY, transZ;

let rcR, rcG, rcB, rcA, rSwitch;

let sphereRadius;

let frameLimit;

let p5seed = 0;

let torusRad, torusTubeRad;

let toAlfa;

let torusLooperLimiter;

function preload() {}

function setup() {
  p5Seed = $fx.rand() * 999999;
  randomSeed(p5Seed);

  rcR = int(random(1, 64));
  rcG = int(random(1, 64));
  rcB = int(random(1, 64));
  rSwitch = 1;
  gSwitch = 1;
  bSwitch = 1;
  aSwitch = 1;

  createCanvas(2048, 2048, WEBGL);
  let canvasC = color(rcR, rcG, rcB);
  background(canvasC);
  //background(0);
  frameRate(120);

  fill(rcR, rcG, rcB, rcA);
  noStroke();

  transX = int(random(-width / 2, width / 2));
  transY = int(random(-height / 2, height / 2));
  transZ = int(random(-77, 77));

  torusLooperLimiter = int(random(120, 240));

  for (let loopi = 0; loopi <= int(random(4, 8)); loopi++) {
    translate(0, 0, 0);
    for (let sci = 0; sci <= int(random(16, 33)); sci++) {
      putTori();
    }
  }

  putTori();
}

function draw() {
  noLoop();
  $fx.preview();
}

function putTori() {
  push();
  toAlfa = 128;
  transX = int(random(-width / 2, width / 2));
  transY = int(random(-height / 2, height / 2));
  transZ = int(random(-77, 77));
  translate(transX, transY, transZ);
  torusRadius = int(random(8, 164));
  sphereRadius = torusRadius / int(random(1.5, 5));
  for (let torusLooper = 0; torusLooper < torusLooperLimiter; torusLooper++) {
    toAlfa = 128;

    pointLight(
      int(random(1, 256)),
      int(random(1, 256)),
      int(random(1, 256)),
      int(random(-width / 2, width / 2)),
      int(random(-height / 2, height / 2)),
      int(random(640, 720))
    );
    let torusFiller = color(
      int(random(196, 256)),
      int(random(196, 256)),
      int(random(196, 256)),
      toAlfa
    );

    if (torusLooper < 1) {
      fill(torusFiller);
      pointLight(
        int(random(196, 256)),
        int(random(196, 256)),
        int(random(196, 256)),
        int(random(-width / 2, width / 2)),
        int(random(-height / 2, height / 2)),
        int(random(640, 720))
      );

      sphere(sphereRadius, 124, 124);
    }

    fill(torusFiller);
    torus(torusRadius, 1, 124, 3);
    toAlfa -= 10;
    rotateX((2 * PI) / int(random(8, 13)));
  }

  pop();
}

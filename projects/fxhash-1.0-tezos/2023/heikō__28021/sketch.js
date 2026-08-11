let Stones = [];
let pd = 2; //pixel density
let mainCanvas, seed;
let colorTheme, paletteName, typography, typeName, customFont, clownNose;
let ovals = 0;
let squares = 0;

$fx.features({
  "Clown Nose": noseFeature(),
  Theme: themeFeature(),
  Name: typeFeature(),
});

function preload() {
  textureImage = loadImage("./assets/texture2.jpg");
  customFont = loadFont("./assets/LINESeedJP_A_TTF_Th.ttf");
}

function setup() {
  createCanvas(800, 1000);
  seed = int($fx.rand() * 9999999);
  p5grain.setup();

  noLoop();

  draws();

  console.log($fx.getFeatures());
}

function draws() {
  pixelDensity(pd);
  randomSeed(seed);
  noiseSeed(seed);
  let ovals = 0;
  let squares = 0;

  //Start coding here.
  background(plt(3));
  noFill();
  stroke(plt(4));
  strokeWeight(1);
  rect(30, 30, width - 60, height - 60);

  fill(0);

  let w = random(20, 150);
  let h;
  if (w > 75) {
    h = random(20, w / 1.5);
  } else if (w < 75) {
    h = random(20, w);
  }
  let h2 = h;
  let startPoint = 80 + h;
  let xs = 0;
  let ys = height - startPoint;
  let space = 10;
  let rotation = random(-0.05, 0.05);

  stroke(plt(4), 70);
  strokeWeight(1);
  line(width / 2 - w - 100, height - 65, width / 2 + w + 100, height - 65);
  line(width / 2 - w, height - 55, width / 2 + w, height - 55);

  let shapeChance;
  if (clownNose == false) {
    shapeChance = 100;
  } else {
    shapeChance = 0;
  }

  for (let y = height; y > 300; y -= h2 * 2 + space) {
    if (ys > h2 + 40) {
      if (shapeChance > 25) {
        let stone = new Superellipse(
          400 + xs,
          ys,
          w,
          h,
          random(2, 2.4),
          rotation,
          1
        );
        Stones.push(stone);

        stone.draw();
        stone.textures();
        stone.outlines();

        w = random(20, 150);
        if (w > 75) {
          h = random(20, w / 1.5);
        } else if (w < 75) {
          h = random(20, w);
        }

        ys = ys - h2 - h - space;
        xs = map(rotation, -0.05, 0.05, 15, -15);
        rotation = random(-0.05, 0.05);
        h2 = h;
        shapeChance = chances();

        ovals = ovals + 1;
      } else if (shapeChance < 5) {
        let stone = new Superellipse(400 + xs, ys, h, h, 2, 0.5, 2);
        Stones.push(stone);

        stone.draw();
        stone.textures();
        stone.outlines();

        w = random(20, 150);
        if (w > 75) {
          h = random(20, w / 1.5);
        } else if (w < 75) {
          h = random(20, w);
        }

        ys = ys - h2 - h - space;
        xs = map(rotation, -0.05, 0.05, 15, -15);
        rotation = random(-0.05, 0.05);
        h2 = h;
        shapeChance = chances();
      } else if (shapeChance <= 25 && shapeChance >= 5) {
        let rotationP = rotation;
        let brickWidth = random(100, 250);
        let brickHeight = random(15, 25);
        let sh = h;

        let stone = new Superellipse(
          400 + xs,
          ys + sh - brickHeight,
          brickWidth,
          brickHeight,
          40,
          rotation,
          1
        );
        Stones.push(stone);

        stone.draw();
        stone.textures();
        stone.outlines();

        w = random(20, 150);
        if (w > 75) {
          h = random(20, w / 1.5);
        } else if (w < 75) {
          h = random(20, w);
        }

        ys = ys - h + sh - brickHeight * 2 - space;
        xs = map(rotation, -0.05, 0.05, 15, -15);
        rotation = rotationP;

        h2 = h;
        shapeChance = chances();

        squares = squares + 1;
      }
    }
  }

  //squares and ovals

  let ovy = 45;
  let sqy = 950;
  stroke(plt(4));

  // noStroke();

  for (x = 0; x < ovals; x++) {
    circle(755, ovy, 10);
    ovy += 15;
  }
  for (x = 0; x < squares; x++) {
    strokeWeight(1);
    rect(750, sqy, 10, 10);
    sqy -= 17;
  }

  //typography

  textSize(32);
  textFont(customFont); // Set the loaded font as the current font
  textAlign(CENTER, TOP);

  fill(plt(4));
  noStroke();
  text(types[typography].type, 53, 30);

  textureOverlay(textureImage, {
    width: 150,
    height: 150,
    mode: OVERLAY,
  });

  fxpreview();
}

function sgn(w) {
  if (w < 0) return -1;
  else if (w == 0) return 0;
  else return 1;
}

function keyTyped() {
  if (key === "s") {
    save("heiko_" + seed + ".png");
  }
  if (key === "2") {
    pd = 2;
    draws();
  }
  if (key === "3") {
    pd = 3;
    draws();
  }
  if (key === "4") {
    pd = 4;
    draws();
  }
  if (key === "5") {
    pd = 5;
    draws();
  }
  if (key === "6") {
    pd = 6;
    draws();
  }
  if (key === "7") {
    pd = 7;
    draws();
  }
}

function themeFeature() {
  let palettesN = palettes.length;

  for (let x = 0; x < palettesN; x++) {
    let numPushes = palettes[x].chance[0];

    for (let y = 0; y < numPushes; y++) {
      paletteChance.push(x);
    }
  }
  let randomIndex = Math.floor($fx.rand() * paletteChance.length);
  colorTheme = paletteChance[randomIndex];
  // colorTheme = 17;

  return palettes[colorTheme].name;
}

function typeFeature() {
  typography = Math.floor($fx.rand() * types.length);
  return types[typography].name;
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function mapRange(value, inputMin, inputMax, outputMin, outputMax) {
  return (
    ((value - inputMin) * (outputMax - outputMin)) / (inputMax - inputMin) +
    outputMin
  );
}

function noseFeature() {
  let randomNose = Math.random() * 100;
  if (randomNose > 5) {
    clownNose = false;
  } else {
    clownNose = true;
  }
  return clownNose;
}

function chances() {
  let value;

  if (clownNose == false) {
    value = random(5, 100);
  } else {
    value = random(0, 100);
  }

  return value;
}

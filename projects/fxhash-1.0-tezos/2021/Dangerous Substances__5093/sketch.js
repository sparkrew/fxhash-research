function preload() {
  bg01 = loadImage("assets/bg1.png");
  bg02 = loadImage("assets/bg2.png");
  bg03 = loadImage("assets/bg3.png");
  bg04 = loadImage("assets/bg4.png");

  bottle1_01 = loadImage("assets/bottle1_1.png");
  bottle1_02 = loadImage("assets/bottle1_2.png");
  bottle1_03 = loadImage("assets/bottle1_3.png");
  bottle1_04 = loadImage("assets/bottle1_4.png");

  bottle2_01 = loadImage("assets/bottle2_1.png");
  bottle2_02 = loadImage("assets/bottle2_2.png");
  bottle2_03 = loadImage("assets/bottle2_3.png");
  bottle2_04 = loadImage("assets/bottle2_4.png");
  bottle2_05 = loadImage("assets/bottle2_5.png");
  bottle2_06 = loadImage("assets/bottle2_6.png");
  bottle2_07 = loadImage("assets/bottle2_7.png");
  bottle2_08 = loadImage("assets/bottle2_8.png");
  bottle2_09 = loadImage("assets/bottle2_9.png");
  bottle2_10 = loadImage("assets/bottle2_10.png");
  bottle2_11 = loadImage("assets/bottle2_11.png");
  bottle2_12 = loadImage("assets/bottle2_12.png");

  cat01 = loadImage("assets/cat1.png");
  cat02 = loadImage("assets/cat2.png");

  skull01 = loadImage("assets/skull1.png");
  skull02 = loadImage("assets/skull2.png");
  skull03 = loadImage("assets/skull3.png");

  snake01 = loadImage("assets/zmey1.png");
  snake02 = loadImage("assets/zmey2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // console.log('Fxhash is: ' + fxhash);

  var fxhashLength = 49;
  let splitfxhash = split(fxhash, '');

  let value = [];
  let valueUnchar = [];

  for (i = 0; i < fxhashLength; i++) {
    value[i] = splitfxhash[i];
    valueUnchar[i] = unchar(value[i]);
  }

  background(0);

  // skull, snake and cat logic
  threshSkull = 1/2;
  threshSnake = 1/2;
  threshCat = 1/5;
  feats = [];
  while (feats.length == 0) {
    probSkull = fxrand();
    probSnake = fxrand();
    probCat = fxrand();
    if (probSkull < threshSkull) {
      append(feats, 'skull');
    }
    if (probSnake < threshSnake) {
      append(feats, 'snake');
    }
    if (probCat < threshCat) {
      append(feats, 'cat');
    }
  }

  reset();
  var assetsArrayBg = [bg01, bg02, bg03, bg04];
  let chosenBg = valueUnchar[5] % assetsArrayBg.length;
  // console.log('Chosen background is: ' + chosenBg);
  image(assetsArrayBg[chosenBg], 0, 0);

  reset();
  var assetsBottle1 = [bottle1_01, bottle1_02, bottle1_03, bottle1_04];
  let chosenBottle1 = valueUnchar[6] % assetsBottle1.length;
  // console.log('Chosen bottle1 is: ' + chosenBottle1);
  image(assetsBottle1[chosenBottle1], 0, 0);

  reset();
  var assetsSkull = [skull01, skull02, skull03];
  let chosenSkull = valueUnchar[9] % assetsSkull.length;
  if (feats.includes('skull')) {
    // console.log('Chosen skull is: ' + chosenSkull);
    image(assetsSkull[chosenSkull], 0, 0);
  }

  reset();
  var assetsBottle2 = [bottle2_01, bottle2_02, bottle2_03, bottle2_04, bottle2_05, bottle2_06,
                       bottle2_07, bottle2_08, bottle2_09, bottle2_10, bottle2_11, bottle2_12];
  let chosenBottle2 = valueUnchar[7] % assetsBottle2.length;
  // console.log('Chosen bottle2 is: ' + chosenBottle2);
  image(assetsBottle2[chosenBottle2], 0, 0);

  reset();
  var assetsCat = [cat01, cat02];
  let chosenCat = valueUnchar[8] % assetsCat.length;
  if (feats.includes('cat')) {
    // console.log('Chosen cat is: ' + chosenCat);
    image(assetsCat[chosenCat], 0, 0);
  }

  reset();
  var assetsSnake = [snake01, snake02];
  let chosenSnake = valueUnchar[10] % assetsSnake.length;
  if (feats.includes('snake')) {
    // console.log('Chosen snake is: ' + chosenSnake);
    image(assetsSnake[chosenSnake], 0, 0);
  }

  noLoop();
}


function reset() {
  resetMatrix();
  imageMode(CENTER);
  translate(width / 2, height / 2);
}

function draw() {
  fxpreview();
}

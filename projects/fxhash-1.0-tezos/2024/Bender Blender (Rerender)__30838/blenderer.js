let img01, img02, img03, img04, img05, img06, img07, img08, img09;
let img11, img12, img13;
let img21, img22, img23; 
let img31, img32, img33;
let img0, img1, img2, img3, img4, img5, img6, img7;


let p5seed = 0;

function preload() {
  
  
}

function setup() {
  
  createCanvas(1080,1080);
  frameRate (2);
  p5Seed = $fx.rand() * 999999;
  randomSeed(p5Seed);
  
  img01 = loadImage("./001.png");
  img02 = loadImage("./002.png");
  img03 = loadImage("./003.png");
  img04 = loadImage("./004.png");
  img05 = loadImage("./005.png");
  img06 = loadImage("./006.png");
  img07 = loadImage("./007.png");
  img08 = loadImage("./008.png");
  img09 = loadImage("./009.png");

  img11 = loadImage("./101.png");
  img12 = loadImage("./102.png");
  img13 = loadImage("./103.png");

  img21 = loadImage("./201.png");
  img22 = loadImage("./202.png");
  img23 = loadImage("./203.png");

  img31 = loadImage("./301.png");
  img32 = loadImage("./302.png");
  img33 = loadImage("./303.png");

  img0 = random([img01, img02, img03, img04, img05, img06, img07, img08, img09]);
  img1 = random([img11, img12, img13]);
  img2 = random([img21, img22, img23]);
  img3 = random([img31, img32, img33]);
  img4 = random([img01, img02, img03, img04, img05, img06, img07, img08, img09]);
  img5 = random([img11, img12, img13]);
  img6 = random([img21, img22, img23]);
  img7 = random([img31, img32, img33]);
  

}

function draw() {

  blendMode(random([MULTIPLY, OVERLAY, SCREEN, DARKEST, LIGHTEST, SOFT_LIGHT, DIFFERENCE, EXCLUSION]));
  image(img0, 0, 0, 1080, 1080);
  blendMode(random([MULTIPLY, OVERLAY, SCREEN, DARKEST, LIGHTEST, SOFT_LIGHT, DIFFERENCE, EXCLUSION]));
  image(img1, 0, 0, 1080, 1080);
  blendMode(random([MULTIPLY, OVERLAY, SCREEN, DARKEST, LIGHTEST, SOFT_LIGHT, DIFFERENCE, EXCLUSION]));
  image(img2, 0, 0, 1080, 1080);
  blendMode(random([MULTIPLY, OVERLAY, SCREEN, DARKEST, LIGHTEST, SOFT_LIGHT, DIFFERENCE, EXCLUSION]));
  image(img3, 0, 0, 1080, 1080);
  blendMode(random([MULTIPLY, OVERLAY, SCREEN, DARKEST, LIGHTEST, SOFT_LIGHT, DIFFERENCE, EXCLUSION]));
  image(img4, 0, 0, 1080, 1080);
  blendMode(random([MULTIPLY, OVERLAY, SCREEN, DARKEST, LIGHTEST, SOFT_LIGHT, DIFFERENCE, EXCLUSION]));
  image(img5, 0, 0, 1080, 1080);
  blendMode(random([MULTIPLY, OVERLAY, SCREEN, DARKEST, LIGHTEST, SOFT_LIGHT, DIFFERENCE, EXCLUSION]));
  image(img6, 0, 0, 1080, 1080);
  blendMode(random([MULTIPLY, OVERLAY, SCREEN, DARKEST, LIGHTEST, SOFT_LIGHT, DIFFERENCE, EXCLUSION]));
  image(img7, 0, 0, 1080, 1080);
  
  
  
    $fx.preview();
    noLoop();
}

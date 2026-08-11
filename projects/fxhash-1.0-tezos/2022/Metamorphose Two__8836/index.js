let metamorphose_one;
let metamorphose_two;
let rand1 = 'assets/'+randomInt(1, 64)+'.jpg';
let rand2 = 'assets/'+randomInt(1, 64)+'.jpg';
let i = 0;
let rangeMin = randomInt(0,64);
let rangeMax = randomInt(65,128);

let randomRed = randomFloat(0.9, 1.7);
let randomBlue = randomFloat(1.1, 2.1);
let randomGreen = randomFloat(1.3, 2.7);

let w = 700;
let h = 700;

function randomFloat(min, max) {
  return Number((min + (max-min)*fxrand()).toFixed(3));
}

function preload() {
  metamorphose_one = loadImage(rand1);
  metamorphose_two = loadImage(rand2);
}

function setup() {

  cnv = createCanvas(w, h);
  cnv.style('display', 'block');
  centeredX = (w-metamorphose_one.width)/2;
  centeredY = (h-metamorphose_one.height)/2;
  metamorphose_one.resize(width, height);
  metamorphose_two.resize(width, height);

  noLoop();
  noSmooth();
}

function draw() {

  metamorphose_one.loadPixels();
  metamorphose_two.loadPixels();

  for (let y = 0; y <= metamorphose_one.height; y++) {
    for (let x = 0; x <= metamorphose_one.width; x++) {
      const colour_one = metamorphose_one.get(x, y);
      const colour_two = metamorphose_two.get(x, y);

      let fx_red = (red(colour_one) + red(colour_two)  ) / 2;
      let fx_green = (green(colour_one) + green(colour_two)) / 2;
      let fx_blue = (blue(colour_one) + blue(colour_two)  ) / 2;
     
        if(fx_red>=rangeMin && fx_red<=rangeMax) {
          noStroke();
          fill(fx_red/randomRed, fx_green/randomGreen, fx_blue/randomBlue,2);
          rect(randomInt(-100, w),randomInt(-100, h),18);
        }
     
        fill(fx_red, fx_green, fx_blue);
        noStroke();
        square(x, y, 1);
      
    }
  }
}
function randomInt(min, max) { 
  return Math.floor(min + (max-min)*fxrand());
}
function keyPressed() {
  if (key == 's') {
    save("metamorphosis.jpg");
  }
}
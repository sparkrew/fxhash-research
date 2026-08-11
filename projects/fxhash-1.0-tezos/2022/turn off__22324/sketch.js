let pallete = [ "#3a2aaf",   "#f6c2c2", "#FAE5D3"]; //"#B6bcdf","#b62ca1",
let rs;
let count;

function setup() {
  Math.random = fxrand;
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);

  pixelDensity(4);
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(5, 10, 100);
  rs = random(10000);
  count = 0;
}

function draw() {
  if (count == 2) noLoop();

  for (let x = 0; x < height; x += 24) {
    for (let c = 0; c < 2; c++) {
      let c1 = random(pallete);
      let c2 = random(pallete);
      let c3 = random(pallete);
      let c4 = random(pallete);


      var gradX = (0, width);
      var gradY = (0, height);
      var gradient = drawingContext.createLinearGradient(0, 200, width / 4, height * 0.8);
      gradient.addColorStop(0, c1, 1);
      gradient.addColorStop(0.3, c2, 1);
      gradient.addColorStop(0.4, c2, 1);
      gradient.addColorStop(1, c3, 1);

      var gradient_1 = drawingContext.createLinearGradient(100, 400, width / 2, height * 0.8);
      gradient_1.addColorStop(0, c1, 1);
      gradient_1.addColorStop(0.3, c2, 1);
      gradient_1.addColorStop(0.5, c2, 1);
      gradient_1.addColorStop(1, c3, 1);



      drawingContext.strokeStyle = gradient;
      stroke(2);
      strokeWeight(20);
      // noFill();

      line(x, 0, x, height);
      line(x, 0, x, height/random(2));

      strokeWeight(10);
      drawingContext.strokeStyle = gradient_1;
      line(x, height/random(4), x, height/random(4));
      strokeWeight(5);
      line(x, height/random(2), x, height/random(2));

      drawingContext.shadowOffsetX = 10;
      drawingContext.shadowOffsetY = 20;
      drawingContext.shadowBlur = 60;
      drawingContext.shadowColor = color(20, 20, 100);

    }
  }
  count += 1;
}
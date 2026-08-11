var colorList = [
  "#3b00bd",
  "#0433ff",
  "#00c7fd",
  "#8bfeff",
  "#ffffff",
  "#fffffd",
  "#000000",
  "#ffdc12",
  "#f75504",
  "#ff4c4c",
  "#ff0000",
  "#f85a40",
  "#ffc20e",
  "#efdf00",
  "#2dde98",
  "#1cc7d0",
  "#003666",
  "#e4002b",
  "#ff0000",
  "#ffd900",
  "#ffc845",
  "#f3f4f7",
  "#ff4f81",
  "#0079c1",
  "#003666",
  "#ffc20e",
  "#0dd3ff",
  "#fb8a2e",
  "#002663",
  "#fff9ea",
  "#fff9ea",
  "#ff6908",
  "#ed1b2e",
  "#ecb731",
  "#00a98f",
  "#e4e932",
  "#008374",
  "#11862f",
  "#ed1b2e",
];

function setup() {
    Math.random = fxrand
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(220);

  push();
  rotateX(radians(50));
  translate(-width / 2, -height / 2);

  for (var j = 0; j < 500; j++) {
    var x = random(width);
    var y = random(height);

    var largo = int(random(5, 50));
    beginShape();

    var rand01 = random(1);
    for (var i = 0; i < largo; i++) {
      var rot = noise(x / 1200, y / 1200) * TWO_PI * 12;
      var x0 = x + sin(rot) * 5;
      var y0 = y + cos(rot) * 5;

      strokeWeight(random(1));
      point(x, y);
      if (rand01 <= 0.5) {
        fill(random(colorList));
      } else {
        noFill();
      }
      vertex(x0, y0, random(100));

      x = x0;
      y = y0;
    }
    endShape();
  }
}

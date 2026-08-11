function setup() {
  const canvasSize = 512;
  createCanvas(canvasSize, canvasSize);
  colorMode(RGB);
}

function draw() {
  image(bgImg[bgFt], 0, 0);

  push();
  translate(sumoPositionSet.x, sumoPositionSet.y);
  rotate(sumoPositionSet.angle);
  for (let i = 0; i < sumoMaps[sumoBaseFt].length; i++) {
    let x = i % sumoRes * scaleFt - sumoRes * scaleFt / 2;
    let y = int(i / sumoRes) * scaleFt - sumoRes * scaleFt / 2;
    let colorIndex = int(sumoMaps[sumoBaseFt].charAt(i))
    if (colorIndex > 0) {
      fill(paletteFt[colorIndex]);
      stroke(paletteFt[colorIndex]);
      rect(x, y, scaleFt, scaleFt);  
    }
  }
  pop();

  noLoop();
}

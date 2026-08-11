function fxrandRange(min, max) {
  return fxrand() * (max - min) + min;
}

function keyPressed() {
  if (keyCode === 83) {
    save("pixel-salaryman-" + month() + day() + hour() + minute() + second() +  ".jpg");
  }
}

function debugGrid() {
  stroke(255);
  strokeWeight(1);
  for (let x = 0; x < width; x += 100) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += 100) {
    line(0, y, width, y);
  }
}
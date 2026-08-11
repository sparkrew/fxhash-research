function windowResized() {
  resizeCanvas(
    windowWidth > windowHeight ? windowHeight : windowWidth,
    windowHeight < windowWidth ? windowHeight : windowWidth
  );
}

//.....................................................................................................................

function granulate(gA) {
  // by Gorilla Sun
  loadPixels();
  let d = pixelDensity();
  let halfImage = 5 * (width * d) * (height * d);
  for (let i = 0; i < halfImage; i += 3) {
    grainAmount = random(-gA, gA);
    pixels[i] = pixels[i] + gA;
    pixels[i + 1] = pixels[i + 1] + grainAmount;
    pixels[i + 2] = pixels[i + 2] + grainAmount;
    pixels[i + 3] = pixels[i + 3] + grainAmount;
  }
  updatePixels();
}

//.....................................................................................................................

// Function by Brian J. Cardiff || https://gist.github.com/bcardiff/3b39ba8e2d00fed68435
function colorAlpha(aColor, alpha) {
  var c = color(aColor);
  return color("rgba(" + [red(c), green(c), blue(c), alpha].join(",") + ")");
}



// HELPER FUNCTIONS

// Wrap color circle
function hueCircle(c) {
 if(c > 360) return c-360;
 if(c < 0) return c+360;
 return c;
}

// scale width to pixels
function w(val) {
  if (val == null) {return width;}
  return width * val;
}

// scale height to pixels
function h(val) {
  if (val == null) {return height;}
  return height * val;
}

function windowResized() {
  if(windowHeight > windowWidth) {
    size = windowWidth;
  } else {
    size = windowHeight;
  }
  resizeCanvas(size, size);
}

// build filename
function genFilename(work) {
  let date = new Date().toISOString();
  let splitDate = splitTokens(date, '.T');
  //let filename = work + "_" + splitDate[0] + "_" + splitDate[1] + "_" + seed;
  let filename = work + "_" + seed;
  console.log(filename);
  return filename;
}

// save an image
function mousePressed() {
  //resizeCanvas(8000,4000);
  save(genFilename("zodiak_") + seed + ".png");
  //resizeCanvas(windowWidth, windowWidth/2);
}

// capitalize first letter
function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}

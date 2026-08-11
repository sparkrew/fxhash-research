// HELPER FUNCTIONS

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
  let filename = work + "_" + fxhash;
  console.log(filename);
  return filename;
}

// gaussian for params
function gaussianRandom(mean=0, stdev=1) {
    let u = 1 - $fx.rand(); // Converting [0,1) to (0,1]
    let v = $fx.rand();
    let z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    return z * stdev + mean;
}

const Y_AXIS = 1;
const X_AXIS = 2;

function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
    if (axis === Y_AXIS) {
      // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    } else if (axis === X_AXIS) {
      // Left to right gradient
      for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
      }
    }
  }

const TOTAL_DATA = 1000;
var randomData = [];
var randomData2 = [];
var noiseData = [];

function generateRandomData(){
  for (let i = 0; i < TOTAL_DATA; i++){
    randomData[i] = [fxrand(),fxrand(),fxrand(),fxrand()];
  }

  for (let i = 0; i < TOTAL_DATA; i++){
    randomData2[i] = [fxrand(),fxrand(),fxrand(),fxrand()];
  }
  
  for(let i = 0; i < TOTAL_DATA; i++){
    for(let j = 0; j < TOTAL_DATA; j++){
      let offset = 0.005;
      noiseData[i*TOTAL_DATA+j] = noise(i*offset,j*offset);
    }
  }
}

function keyPressed() {
	if (key.toLowerCase() === "s") save("paper_noise.jpg"); //to save screenshot
}

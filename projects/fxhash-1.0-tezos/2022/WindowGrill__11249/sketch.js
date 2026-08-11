let data = fxhash;

let v1 = [];
let h1 = [];
let v2 = [];
let h2 = [];
let t2 = 0;
let x, y;
let t = 0;
function setup() {
  for (let j = 0; j < data.length; j++) {
    if (data.charCodeAt(j) >= 80) {
      v1[j] = 1;
      h1[j] = 1;
    } else {
      v1[j] = 0;
      h1[j] = 0;
    }
  }
  for (let k = data.length; k > 0; k--) {
    if (data.charCodeAt(k) <= 80) {
      v2[t2] = 1;
      h2[t2] = 1;
    } else {
      v2[t2] = 0;
      h2[t2] = 0;
    }
    t2++;
  }

  colorMode(HSB);
  createCanvas(700, 700);
  background(40,20,80+map(data.charCodeAt(14), 40, 140, 0, 150));
  strokeWeight(4);
  noFill();
}

function draw() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      x = j * 70;
      y = i * 70;
      translate(x, y);
      stroke(map(data.charCodeAt(21), 65, 120, 15, 330), 70, 75);
      mode(h1[j + 3], v1[i + 3]);
      stroke(map(data.charCodeAt(35), 140, 40, 10, 360), 30, 70);
      mode(v2[i * 2], h2[j + 2]);
      translate(-x, -y);
    }
  }  
  rect(2, 2, 696, 696);
}

function mode(valueX, valueY) {
  if (valueX == 1 && valueY == 1) {
    rect(0, 0, 70, 70);
    arc(0, 0, 140, 140, 0, HALF_PI);
  } else if (valueX == 0 && valueY == 1) {
    rect(0, 0, 70, 70);
    arc(0, 70, 140, 140, PI + HALF_PI, 0);
  } else if (valueX == 1 && valueY == 0) {
    rect(0, 0, 70, 70);
    arc(70, 0, 140, 140, HALF_PI, PI);
  } else if (valueX == 0 && valueY == 0) {
    rect(0, 0, 70, 70);
    arc(70, 70, 140, 140, PI, PI + HALF_PI);
  }
}

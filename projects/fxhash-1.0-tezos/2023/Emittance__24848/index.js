// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }


let colorArr = [
  "#5A3D2B",
  "#D74923",
  "#F4EEE1",
  "#36241c",
  "#b19a81",
  "#75b9be",
  "#696d7d",
  "#005f73",
  "#0a9396",
  "#94d2bd",
  "#e9d8a6",
  "#ca6702",
  "#bb3e03",
  "#ae2012",
  "#9b2226",
  "#2a9d8f",
];

let rotateBy = 2;

function setup() {
  createCanvas(1000, 1000);
  randomSeed(fxrand() * 1000);
  background(random(colorArr));
  rectMode(CENTER);
  angleMode(DEGREES);
  noLoop();
  noise(0, 9);
}

function draw() {
  stroke("#231205");
  rotateBy += 20;

  {
    //Circles
    let circleX = random(width);
    let circleY = random(height);
    let circleSize = random(2, 12);

    drawCircle(width / 2, 1000, circleSize);

    function drawCircle(circleX, radius, level) {
      const tt = (126 * level) / 4.0;
      ellipseColor = random(colorArr);
      fill(ellipseColor);
      strokeWeight(2);
      stroke("#231205");
      ellipse(circleX, height / 2, radius / 2, radius / 2);
      if (level > 1) {
        level = level - 2;
        drawCircle(circleX - radius / 4, radius / 2, level);
        drawCircle(circleX + radius / 4, radius / 2, level);
      }
    }
  }
}

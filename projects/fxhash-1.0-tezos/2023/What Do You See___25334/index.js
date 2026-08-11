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


// Thank you to generative-light/p5.scribble.js which is licensed under the MIT License
let scribble = new Scribble();
scribble.roughness = 3;
scribble.maxOffset = 6;
scribble.bowing = 6;
scribble.numEllipseSteps = 2;
let noiseScale = 0.9;
let width = 1000;
let height = 1000;
//let rows = 10;
//let cols = 10;
//let rectSize = width / 15;

let colorArr = [
  "#8ecae6",
  "#219ebc",
  "#ffb703",
  "#F2C288",
  "#F26241",
  "#01573C",
  "#F3A004",
  "#D6C7BA",
  "#57523E",
  "#D94C1A",
  "#6593A6",
  "#58595B",
  "#D95F69",
  "#A3D9CF",
  "#F26D3D",
  "#1712A6",
  "#5503A6",
  "#D92378",
  "#2A9D8F",
  "#E9C46A",
  "#759f89",
  "#e63946",
  "#1d3557",

  "#88d4e2",
  "#4cc9f0",
  "#9a964f",
  "#456455",
  "#fcd16b",
  "#cab19d",
  "#429ab2",
  "#7ab6c1",
  "#eacb3d",
  "#deae26",
  "#da8c37",
  "#e3cf2e",
  "#264653",
  "#2a9d8f",
  "#e9c46a",
  "#f4a261",
  "#e76f51",
  "#f58323",
  "#5fbad5",
];

function setup() {
  createCanvas(1000, 1000);
  randomSeed(fxrand() * 1000);
   noLoop();
    background(random(colorArr));
}

function draw() {
  stroke(random(colorArr));
  // stroke(0);
  strokeWeight(2);
  for (let y = 0; y < width; y += 100) {
    for (let x = 0; x < height; x += 100) {
      scribble.scribbleLine(x + 100, y, x, y + 1000);
    }
    stroke(random(colorArr));
    // stroke(0);
    strokeWeight(2);
    for (let y = 0; y < width; y += 10) {
      for (let x = 0; x < height; x += 10) {
        scribble.scribbleLine(x + 200, y, x, y + 500);
      }
      //Circles
      let circleX = random(width);
      let circleY = random(height);
      let circleSize = random(15, 20);

      drawCircle(width / 4, random(180), random(circleSize));

      function drawCircle(circleX, radius, level) {
        const tt = (126 * level) / 4.0;
        ellipseColor = random(colorArr);
        fill(ellipseColor);
        strokeWeight(2);
        stroke(0);
        scribble.scribbleEllipse(width / 2, height / 2, radius * 2, radius * 2);
        rotate(random(90));
        if (level > 1) {
          level = level - 2;
          drawCircle(circleX - radius / 4, radius / 2, level);
          drawCircle(circleX + radius / 4, radius / 2, level);
        }
      }
    }
  }
}

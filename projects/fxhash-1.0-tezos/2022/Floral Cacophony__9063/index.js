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
scribble.roughness = 4;
scribble.maxOffset = 8;
let noiseScale = 0.08;

let colorArr = [
  "#8C2B4F",
  "#F2528D",
  "#89A64B",
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
  "#d6a499",
  "#d6a499",
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
  "#4badc8",
  "#e38523",
  "#b21a26",
  "#16a089",
  "#f0ab29",
  "#f58323",
  "#5fbad5",
];

function setup() {
  createCanvas(1000, 1000);
  randomSeed(fxrand() * 1000);
  noLoop();

}

function draw() {
  background((rand = random(colorArr)));

  let x = randomGaussian(0, 1000);

  for (let i = 0; i < 500; i++) {
    flower(random(width), random(height));
  }

}

function flower(x, y) {
  stroke(50);
  strokeWeight(3);
  ellipseColor = random(colorArr);
  fill(ellipseColor);
  scribble.scribbleEllipse(x, y, 35, 35);
  scribble.scribbleEllipse(x, y, 35, 35);

  //outer petals
  stroke(50);
  strokeWeight(1);
  scribble.scribbleEllipse(x + 40, y + 30, 40, 40);
  scribble.scribbleEllipse(x - 10, y - 30, 40, 40);
  scribble.scribbleEllipse(x + 40, y - 30, 40, 40);
  scribble.scribbleEllipse(x - 10, y + 30, 40, 40);

  scribble.scribbleEllipse(x, y + 40, 40, 40);
  scribble.scribbleEllipse(x, y - 10, 40, 40);
  scribble.scribbleEllipse(x + 40, y, 40, 40);
  scribble.scribbleEllipse(x - 10, y, 40, 40);

  //inner petals
  ellipseColor = random(colorArr);
  fill(ellipseColor);
  stroke(50);
  strokeWeight(1);
  scribble.scribbleEllipse(x, y - 20, 10, 40);
  scribble.scribbleEllipse(x, y + 20, 10, 40);
  scribble.scribbleEllipse(x - 20, y, 40, 10);
  scribble.scribbleEllipse(x + 20, y, 40, 10);

  // petal highlights
  stroke(random(colorArr));
  strokeWeight(2);
  scribble.scribbleLine(x, y, x + 26, y + 36);
  scribble.scribbleLine(x, y, x + 26, y - 36);
  scribble.scribbleLine(x, y, x - 26, y + 36);
  scribble.scribbleLine(x, y, x - 26, y - 36);

  //centre
  ellipseColor = random(colorArr);
  fill(ellipseColor);
  stroke(50);
  strokeWeight(2);
  scribble.scribbleEllipse(x, y, 15, 15);
}

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



let noiseScale = 0.08;

let colorArr = [
  "#1B618C",
  "#55CCD9",
  "#F2BC57",
  "#F24949",
  "#023059",
  "#459DBF",
  "#87BF60",
  "#D9D16A",
  "#F2F2F2",
  "#632973",
  "#02734A",
  "#F25C05",
  "#8D95A6",
  "#0A7360",
  "#F28705",
  "#D98825",
  "#F2F2F2",
  "#D9D7D8",
  "#3B5159",
  "#5D848C",
  "#7CA2A6",
  "#262321",
  "#906FA6",
  "#025951",
  "#252625",
  "#D99191",
  "#F2F2F2",
];


function setup() {
    createCanvas(1000, 1000);
  randomSeed(fxrand() * 1000);
   noLoop();
  angleMode(DEGREES);
}

function draw() {
  //background((rand = random(colorArr)));
  background(0);

  let x = randomGaussian(0, 500);

  for (let i = 0; i < 100; i++) {
    flow(random(width), random(height));
  }
}

function flow(x, y) {
  push();
  translate(x, y);
  rotate(random(90, 270));

  //inner
  ellipseColor = random(colorArr);
  fill(ellipseColor);
  stroke(50);
  strokeWeight(1);
  ellipse(x, y - 20, 10, 4000);
  ellipse(x, y + 20, 10, 4000);
  ellipse(x - 20, y, 4000, 10);
  ellipse(x + 20, y, 4000, 10);

 ellipse(x, y + 20, 10, 4000);
  ellipse(x, y - 20, 10, 4000);
 ellipse(x + 20, y, 4000, 10);
  ellipse(x - 20, y, 4000, 10);

  // lines
  stroke(random(colorArr));
  strokeWeight(2);
  line(x, y, x + 126, y + 136);
  line(x, y, x + 126, y - 136);
  line(x, y, x - 126, y + 136);
  line(x, y, x - 126, y - 136);

  pop();
  //}
  noStroke();
  fill(0);
  rect(0, 0, 1000, 25);
  rect(0, 975, 1000, 25);
  rect(0, 0, 25, 1000);
  rect(975, 0, 25, 1000);
}


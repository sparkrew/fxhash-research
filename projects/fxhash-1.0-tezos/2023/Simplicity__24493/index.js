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
  "#6c757d",
  "#eae0d5",
  "#c6ac8f",
  "#5e503f",
  "#6b705c",
  "#d8e2dc",
  
];

function setup() {
  createCanvas(1000, 1000);
  randomSeed(fxrand() * 1000);
    background(random(colorArr));
  

  let cols = 4;
  let rows = cols;
  let cirW = width / rows;
  let cirH = height / cols;

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let x = i * cirW;
      let y = j * cirH;
      let d = cirW;

      if (x + cirW < height) {
        if (y + cirH < width) {
          noStroke();
          if (random(200) < 60) {
            fill(random(colorArr));
            circle(x + cirW, y + cirH, d);
          } else {
            fill(random(colorArr));
            circle(x + cirW, y + cirH, d);
          }
        }
      }

      if (random(200) < 40) {
        fill(random(colorArr));
        circle(x + cirW / 2, y + cirH / 2, d);
        if (random(150) < 60) {
          fill(random(colorArr));
          circle(x + cirW / 2, y + cirH / 2, d / 2);
        }
      } else {
        fill(random(colorArr));
        circle(x + cirW / 2, y + cirH / 2, d);
        if (random(50) < 100) {
          fill(random(colorArr));
          circle(x + cirW / 2, y + cirH / 2, d / 2);
        }
      }
    }
  }
}

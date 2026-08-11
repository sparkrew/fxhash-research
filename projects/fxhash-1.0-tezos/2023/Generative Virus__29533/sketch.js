let numOfFeatures;
let popmax;
let mutationRatespopulation;
let showDebug = false;
let hashseed;
let minterseed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  angleMode(DEGREES);
  // hashseed = 1;
  hashseed = int($fx.rand() * 100000000);
  minterseed = int($fx.randminter() * 100000000); // optional use of this
  randomSeed(hashseed); //each coin will look different, but stay the same across minters
  noiseSeed(hashseed); //each coin will look different, but stay the same across minters

  popmax = 1;
  mutationRate = 0.03; // a bit higher than usual as we don't have many examples
  numOfFeatures = 15; // aka num of genes
  // Create a population with a target phrase, mutation rate, and population max
  population = new Population(numOfFeatures, mutationRate, popmax);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  scale(map(width, 0, 1920, 0, 6));
  population.draw();

  if (frameCount == 200) {
    $fx.preview(); // line of code that tells fxhash to take pic of canvas
    // noLoop(); //stop looping ->OPTIONAL: ONLY USE IF you don't want animation after 200 frames
  }
}

function keyPressed() {
  if (key == "g" || key == "G") {
    population.selection();
    population.generate();
  } else if (key == "d" || key == "D") {
    population.debug();
  } else if (key >= 48 || key <= 57) {
    population.pick(int(key));
  }
}
//if window is resized, restart sketch
function windowResized() {
  setup();
}

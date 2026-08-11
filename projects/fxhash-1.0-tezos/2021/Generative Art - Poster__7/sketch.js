// BASIC TEMPLATE

// p5.js template for minting on Hic et Nunc
// Made for Processing's 20th anniversary Fundraiser
// By Raphaël de Courville (@sableraph)
// Find the latest version at https://github.com/SableRaf/HicEtNunc-p5js-templates

// hicetnunc code is adapted from https://github.com/hicetnunc2000/hicetnunc/tree/main/templates/html-p5js-template
// More hicetnunc html templates (three.js, glsl, etc) can be found at
// https://github.com/hicetnunc2000/hicetnunc/tree/main/templates

// 🤓 Note: replace thumbnail.png with your own thumbnail (512×512 pixels is best)

// **************************
// *       PARAMETERS       *
// **************************

// Set this to true when minting
p5.disableFriendlyErrors = true;

// The title of your piece goes here (not visible on hicetnunc)
document.title = "Generative Art - Poster";

// Describe what your piece looks like to screen reader users
let description =
  "Generate your own Poster for Event";

// **************************
// *    GLOBAL VARIABLES    *
// **************************

// **************************
// *        PRELOAD         *
// **************************

function preload() { }

// **************************
// *          SETUP         *
// **************************

var tileSize = 50;

function setup() {
  createCanvas(600, 600);
  // set colour palette
  let colors = [
    color(242, 93, 81),
    color(153, 42, 95),
    color(255, 234, 86),
    color(255, 187, 51),
    color(255, 234, 86),
    color(92, 162, 216),
    color(53, 60, 129),
    color(2, 140, 127),
    color(153, 46, 98),
  ];

  // choose random from palette
  let randomColors = random(colors);
  background(220, 229, 235);
  noStroke();

  for (var y = 0; y < height; y = y + tileSize) {
    for (var x = 0; x < width; x = x + tileSize * 2) {
      let drawingChance = random(0, 10);
      if (drawingChance > 3) {
        // drawing rects
        randomColors = random(colors);
        fill(randomColors);
        rect(x, y, tileSize * 2, tileSize);
        fill(1);

        // drawing lines
        // level 1
        drawingChance = random(0, 10);
        if (drawingChance > 3) {
          var randomSize = random(0, 10);
          let randomHeight = random(0, 3);
          rect(x, y + randomSize, tileSize * 2, randomHeight);

          randomSize = random(0, 10);
          randomHeight = random(0, 3);
          rect(x, y + randomSize, tileSize * 2, randomHeight);

          // level 2
          drawingChance = random(0, 10);
          if (drawingChance > 5) {
            randomSize = random(10, 20);
            randomHeight = random(0, 3);
            rect(x, y + randomSize, tileSize * 2, randomHeight);

            randomSize = random(10, 20);
            randomHeight = random(0, 3);
            rect(x, y + randomSize, tileSize * 2, randomHeight);

            randomSize = random(10, 20);
            randomHeight = random(0, 3);
            rect(x, y + randomSize, tileSize * 2, randomHeight);

            randomSize = random(10, 20);
            randomHeight = random(0, 3);
            rect(x, y + randomSize, tileSize * 2, randomHeight);
          }

          // level 3
          drawingChance = random(0, 10);
          if (drawingChance > 8) {
            randomSize = random(20, 30);
            randomHeight = random(0, 3);
            rect(x, y + randomSize, tileSize * 2, randomHeight);

            randomSize = random(20, 30);
            randomHeight = random(0, 8);
            rect(x, y + randomSize, tileSize * 2, randomHeight);

            randomSize = random(20, 30);
            randomHeight = random(0, 8);
            rect(x, y + randomSize, tileSize * 2, randomHeight);

            randomSize = random(20, 30);
            randomHeight = random(0, 3);
            rect(x, y + randomSize, tileSize * 2, randomHeight);
          }
        }
      }
    }
  }

  fill(220, 229, 235);
  rect(tileSize * 2, tileSize * 2, tileSize * 4, tileSize * 4);
  rect(tileSize, tileSize, tileSize * 2, tileSize * 2);
  rect(tileSize * 6, tileSize * 8, tileSize * 4, tileSize * 4);

  fill(30);

  // singleWord
  // words array
  let singleWord = [
    "S",
    "R",
    "G",
    "H",
    "O",
    "g",
    "P",
    "W",
    "Q",
  ];

  // choose random from palette
  let randomSingleWord = random(singleWord);
  textSize(500);
  text(randomSingleWord,1 , tileSize * 10);

  fill(1);

  // text
  // words array
  let wordsEventName = [
    "Season 8",
    "React",
    "999999",
    "No Sleep",
    "A Space",
    "The Third",
    "Motos",
    "Break",
    "Open Call",
  ];

  // choose random from palette
  let randomEventNameWords = random(wordsEventName);
  textSize(100);
  text(randomEventNameWords, tileSize * 2 - 5, tileSize * 3);

  // place
  // place array
  let wordsCity = [
    "Belgrade",
    "Paris",
    "Berlin",
    "Prague",
    "Madrid",
    "Lisabon",
    "Rome",
    "Hamburg",
    "Helsinki",
  ];
  // choose random from palette
  let randomCityWords = random(wordsCity);
  textSize(65 / 1.5);
  text(randomCityWords, tileSize * 2 - 2, tileSize * 4);

  // dates
  // dates array
  let wordsDates = [
    "11-12-2021",
    "04.11.2021",
    "01.May.21",
    "7.7.21",
    "21/11/2021",
    "11.Sep.21",
    "4.2.21",
    "09.FEB.21",
    "4.4.2021",
  ];
  // choose random from palette
  let randomDatesWords = random(wordsDates);
  textSize(65 / 4);
  text(randomDatesWords, tileSize * 2 - 2, tileSize * 6);

  // ppl
  // ppl array
  let wordsPpl1 = [
    "Got Herbie",
    "Centre The Speech",
    "Tullio Reach",
    "Nightclubbing Silence",
    "Adeva Cure",
    "Meets Source",
    "The Poing Fire",
    "Yang Theme",
    "Cool Uncle",
  ];
  // choose random from palette
  let randomPpl1Words = random(wordsPpl1);
  textSize(65 / 2);
  text(randomPpl1Words, tileSize * 4 - 2, tileSize * 6);

  // ppl
  // ppl array
  let wordsPpl2 = [
    "Tree The Kaito",
    "Talking Jeff",
    "Universal Tonite",
    "The Seeing Read",
    "Solid Five",
    "Got Robbie",
    "The Poing Monolake",
    "Ball The Duck",
    "Hour Mills",
  ];
  // choose random from palette
  let randomPpl2Words = random(wordsPpl2);
  textSize(65 / 2);
  text(randomPpl2Words, tileSize * 4 - 2, tileSize * 7);

  // ppl
  // ppl array
  let wordsPpl3 = [
    "Small Jones",
    "Optiv Battlefield",
    "Redshape",
    "Soul",
    "Freeform",
    "Streets",
    "The Speed",
    "Hermann",
    "Sampler",
  ];
  // choose random from palette
  let randomPpl3Words = random(wordsPpl3);
  textSize(65 / 1.5);
  text(randomPpl3Words, tileSize * 4 - 2, tileSize * 9);


  //ellipse
  noFill();
  stroke(1);
  let randomEllipse1 = random(100,500);
  let randomEllipse2 = random(100,500);
  let randomEllipse3 = random(100,500);
  let randomEllipse4 = random(100,500);
  ellipse(randomEllipse1, randomEllipse2, randomEllipse3, randomEllipse4);
  ellipse(randomEllipse1 + 10, randomEllipse2, randomEllipse3, randomEllipse4);
  ellipse(randomEllipse1 + 20, randomEllipse2, randomEllipse3, randomEllipse4);
  ellipse(randomEllipse1 + 30, randomEllipse2, randomEllipse3, randomEllipse4);
  ellipse(randomEllipse1 + 40, randomEllipse2, randomEllipse3, randomEllipse4);
  ellipse(randomEllipse1 + 50, randomEllipse2, randomEllipse3, randomEllipse4);
  ellipse(randomEllipse1 + 60, randomEllipse2, randomEllipse3, randomEllipse4);
}

function draw() {}

function mouseClicked() {
  // set colour palette
  let colors = [
    color(242, 93, 81),
    color(153, 42, 95),
    color(255, 234, 86),
    color(255, 187, 51),
    color(255, 234, 86),
    color(92, 162, 216),
    color(53, 60, 129),
    color(2, 140, 127),
    color(153, 46, 98),
  ];

  // choose random from palette
  let randomColors = random(colors);
  background(220, 229, 235);
  noStroke();

  for (var y = 0; y < height; y = y + tileSize) {
    for (var x = 0; x < width; x = x + tileSize * 2) {
      let drawingChance = random(0, 10);
      if (drawingChance > 3) {
        // drawing rects
        randomColors = random(colors);
        fill(randomColors);
        rect(x, y, tileSize * 2, tileSize);
        fill(1);

        // drawing lines
        // level 1
        drawingChance = random(0, 10);
        if (drawingChance > 3) {
          var randomSize = random(0, 10);
          let randomHeight = random(0, 3);
          rect(x, y + randomSize, tileSize * 2, randomHeight);

          randomSize = random(0, 10);
          randomHeight = random(0, 3);
          rect(x, y + randomSize, tileSize * 2, randomHeight);

          // level 2
          drawingChance = random(0, 10);
          if (drawingChance > 5) {
            randomSize = random(10, 20);
            randomHeight = random(0, 3);
            rect(x, y + randomSize, tileSize * 2, randomHeight);

            randomSize = random(10, 20);
            randomHeight = random(0, 3);
            rect(x, y + randomSize, tileSize * 2, randomHeight);

            randomSize = random(10, 20);
            randomHeight = random(0, 3);
            rect(x, y + randomSize, tileSize * 2, randomHeight);

            randomSize = random(10, 20);
            randomHeight = random(0, 3);
            rect(x, y + randomSize, tileSize * 2, randomHeight);
          }

          // level 3
          drawingChance = random(0, 10);
          if (drawingChance > 8) {
            randomSize = random(20, 30);
            randomHeight = random(0, 3);
            rect(x, y + randomSize, tileSize * 2, randomHeight);

            randomSize = random(20, 30);
            randomHeight = random(0, 8);
            rect(x, y + randomSize, tileSize * 2, randomHeight);

            randomSize = random(20, 30);
            randomHeight = random(0, 8);
            rect(x, y + randomSize, tileSize * 2, randomHeight);

            randomSize = random(20, 30);
            randomHeight = random(0, 3);
            rect(x, y + randomSize, tileSize * 2, randomHeight);
          }
        }
      }
    }
  }

  fill(220, 229, 235);
  rect(tileSize * 2, tileSize * 2, tileSize * 4, tileSize * 4);
  rect(tileSize, tileSize, tileSize * 2, tileSize * 2);
  rect(tileSize * 6, tileSize * 8, tileSize * 4, tileSize * 4);

  fill(30);

  // singleWord
  // words array
  let singleWord = [
    "S",
    "R",
    "G",
    "H",
    "O",
    "g",
    "P",
    "W",
    "Q",
  ];

  // choose random from palette
  let randomSingleWord = random(singleWord);
  textSize(500);
  text(randomSingleWord,1 , tileSize * 10);

  fill(1);

  // text
  // words array
  let wordsEventName = [
    "Season 8",
    "React",
    "999999",
    "No Sleep",
    "A Space",
    "The Third",
    "Motos",
    "Break",
    "Open Call",
  ];

  // choose random from palette
  let randomEventNameWords = random(wordsEventName);
  textSize(100);
  text(randomEventNameWords, tileSize * 2 - 5, tileSize * 3);

  // place
  // place array
  let wordsCity = [
    "Belgrade",
    "Paris",
    "Berlin",
    "Prague",
    "Madrid",
    "Lisabon",
    "Rome",
    "Hamburg",
    "Helsinki",
  ];
  // choose random from palette
  let randomCityWords = random(wordsCity);
  textSize(65 / 1.5);
  text(randomCityWords, tileSize * 2 - 2, tileSize * 4);

  // dates
  // dates array
  let wordsDates = [
    "11-12-2021",
    "04.11.2021",
    "01.May.21",
    "7.7.21",
    "21/11/2021",
    "11.Sep.21",
    "4.2.21",
    "09.FEB.21",
    "4.4.2021",
  ];
  // choose random from palette
  let randomDatesWords = random(wordsDates);
  textSize(65 / 4);
  text(randomDatesWords, tileSize * 2 - 2, tileSize * 6);

  // ppl
  // ppl array
  let wordsPpl1 = [
    "Got Herbie",
    "Centre The Speech",
    "Tullio Reach",
    "Nightclubbing Silence",
    "Adeva Cure",
    "Meets Source",
    "The Poing Fire",
    "Yang Theme",
    "Cool Uncle",
  ];
  // choose random from palette
  let randomPpl1Words = random(wordsPpl1);
  textSize(65 / 2);
  text(randomPpl1Words, tileSize * 4 - 2, tileSize * 6);

  // ppl
  // ppl array
  let wordsPpl2 = [
    "Tree The Kaito",
    "Talking Jeff",
    "Universal Tonite",
    "The Seeing Read",
    "Solid Five",
    "Got Robbie",
    "The Poing Monolake",
    "Ball The Duck",
    "Hour Mills",
  ];
  // choose random from palette
  let randomPpl2Words = random(wordsPpl2);
  textSize(65 / 2);
  text(randomPpl2Words, tileSize * 4 - 2, tileSize * 7);

  // ppl
  // ppl array
  let wordsPpl3 = [
    "Small Jones",
    "Optiv Battlefield",
    "Redshape",
    "Soul",
    "Freeform",
    "Streets",
    "The Speed",
    "Hermann",
    "Sampler",
  ];
  // choose random from palette
  let randomPpl3Words = random(wordsPpl3);
  textSize(65 / 1.5);
  text(randomPpl3Words, tileSize * 4 - 2, tileSize * 9);


  //ellipse
  noFill();
  stroke(1);
  let randomEllipse1 = random(100,500);
  let randomEllipse2 = random(100,500);
  let randomEllipse3 = random(100,500);
  let randomEllipse4 = random(100,500);
  ellipse(randomEllipse1, randomEllipse2, randomEllipse3, randomEllipse4);
  ellipse(randomEllipse1 + 10, randomEllipse2, randomEllipse3, randomEllipse4);
  ellipse(randomEllipse1 + 20, randomEllipse2, randomEllipse3, randomEllipse4);
  ellipse(randomEllipse1 + 30, randomEllipse2, randomEllipse3, randomEllipse4);
  ellipse(randomEllipse1 + 40, randomEllipse2, randomEllipse3, randomEllipse4);
  ellipse(randomEllipse1 + 50, randomEllipse2, randomEllipse3, randomEllipse4);
  ellipse(randomEllipse1 + 60, randomEllipse2, randomEllipse3, randomEllipse4);
}

// **************************
// * HIC ET NUNC VARIABLES  *
// **************************

// If you want to create OBJKT's with different seeds,
// you can access the creator and viewer wallet ids.
// This values will only be injected once the piece has been minted
// they will not work locally.
const creator = new URLSearchParams(window.location.search).get("creator");
const viewer = new URLSearchParams(window.location.search).get("viewer");
// NOTE: if the user is viewing the page on hicetnunc while unsynced,
// the viewer variable will return a string of value "false" (NOT a boolean)

// The ID of the OBJKT is also passed via the URL parameters
const objkt = new URLSearchParams(window.location.search).get("objkt");

console.log("NFT created by", creator); // null if local
console.log("NFT viewed by", viewer); // null if local
console.log("OBJKT ID", objkt); // null if local

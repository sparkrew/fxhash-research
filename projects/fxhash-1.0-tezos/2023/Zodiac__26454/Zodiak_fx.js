// Zodiac
// Generative nebulae and zodiak constelations
// ©2023 Matthew Mosher
// See license.md file for copyright information and references

let seed, s, numStars;
let accent, recur = 2;
let hues = [];
let stars = [];
let rHues = ["rose", "aqua", "regal", "gold"];
let strokeColor = 95;
let images = [];
let zodiaks = ["aquarius", "ares", "cancer", "capricorn", "gemini", "leo", "libra", "ophiuchus", "pisces", "sagittarius", "scorpio", "taurus", "virgo"];

// rarities
let huei;//, suit, number;
//let zodiak;

function preload() { 
  // set color rarity 1-4
  let colorRarity = $fx.rand();
  if(colorRarity < 0.1) {    // exotic
    huei = 3;
  } else if(colorRarity < 0.3) {    // rare
    huei = 2;
  } else if(colorRarity < 0.6){    // uncommon
    huei = 1;
  } else {    // common
    huei = 0;
  }
  
  for(let i = 0; i < zodiaks.length; i++) {
    images.push(loadImage('./assets/'+zodiaks[i]+'.png'));
  }
  
  $fx.params([
    {
      id: "select_id",
      name: "Zodiac",
      type: "select",
      //default: "pear",
      options: {
        options: ["aquarius", "ares", "cancer", "capricorn", "gemini", "leo", "libra", "ophiuchus", "pisces", "sagittarius", "scorpio", "taurus", "virgo"],
      }
    },
   ]);
 
  $fx.features({
    "Color": rHues[huei],
    "Zodiac": $fx.getParam("select_id")
  })
  console.log(window.$fx.getFeatures());
}

function setup() {
  // basic inits
  seed = $fx.hash;//int(random(9999));  // update with hash algorithm
  let size;
  if(windowHeight > windowWidth) {
    size = windowWidth;
  } else {
    size = windowHeight;
  }
  createCanvas(size, size);  //SVG?  cards are 7/12
  s = int($fx.rand()*123456789);
  colorMode(HSB, 360, 100, 100, 1.0);
  rectMode(CENTER);
  //textAlign(CENTER, CENTER);
  imageMode(CENTER);
  smooth();
  noLoop();
  // red/magenta = 300-360, cyan/green = 150-180, violet/blue = 200-260, gold = 30-40
  //hues.push(random(310, 330)); hues.push(random(150, 175)); hues.push(random(245,260)); hues.push(random(15,25)); // with +value*80
  console.log(seed);
}


function draw() {
  randomSeed(s);
  noiseSeed(s);
  hues.push(random(310, 330)); hues.push(random(150, 175)); hues.push(random(245,260)); hues.push(random(15,25)); // with +value*80
  background(100-strokeColor);
  drawBackground();
  drawStars();
  push();
    translate(w(0.5), h(0.5));
    rotate(random()*2*PI);
    //let z = images[zodiak];
    let z;
    for(let i = 0; i < zodiaks.length; i++) {
      if($fx.getParam("select_id") == zodiaks[i]) {
        z = images[i];
      }
    } 
    image(z, 0, 0, z.width*width*0.0008, z.height*height*0.0008);
  pop();
  $fx.preview();
}

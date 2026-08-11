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
window.$fxhashFeatures = {
  "Rarity": getFeatureString(fxrand()),
  "Suit": determineSuit(fxrand()),
  "Value": determineValue(fxrand())
}

function preloadImage(url) {
  const img = new Image();
  img.src = url;
  return img;
}

function getFeatureString(value) {
  if (value < 0.75) return "standard" // standard deck (75%)
  if (value < 0.95) return "flaming" // flaming deck (20%)
  else return "rainbow" // rainbow deck (5%)
}

function determineValue(num) {
  if(num < 1/13) return "ace";
  if(num < 2/13) return "two";
  if(num < 3/13) return "three";
  if(num < 4/13) return "four";
  if(num < 5/13) return "five";
  if(num < 6/13) return "six";
  if(num < 7/13) return "seven";
  if(num < 8/13) return "eight";
  if(num < 9/13) return "nine";
  if(num < 10/13) return "ten";
  if(num < 11/13) return "jack";
  if(num < 12/13) return "queen";
  else return "king";
}

function determineSuit(value) {
  if(value < .25) return "spades";
  if(value < .5) return "diamonds";
  if(value < .75) return "clubs";
  else return "hearts";
}

const canvas = document.querySelector('#canvas');
const width = canvas.width;
const height = canvas.height;
const ctx = canvas.getContext('2d');

ctx.webkitImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

const border = preloadImage("./empty_card.png");

var template = document.getElementById(`${$fxhashFeatures.Rarity}`);
template.style.visibility = "visible";
container.style.backgroundImage = template.src;

border.onload = function() { 
  ctx.drawImage(border, 0, 0); 
  
  const card = preloadImage(`${$fxhashFeatures.Suit}/${$fxhashFeatures.Value}.png`);
  card.src = `${$fxhashFeatures.Suit}/${$fxhashFeatures.Value}.png`;      
  card.onload = function() { 
    ctx.drawImage(card, 0, 0); 
  }
}
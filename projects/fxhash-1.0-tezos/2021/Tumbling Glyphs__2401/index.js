// "Tumbling Glyphs" by nuflark
// https://twitter.com/enuflark
// Special thanks to Liam Egan (https://twitter.com/neuromantic6) for help with debugging! 
// 2021



console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()


const firstDoodle = document.querySelector('.first-doodle');
firstDoodle.grid = "40";
firstDoodle.seed = fxrand();
console.log(firstDoodle.grid);
console.log(firstDoodle.seed);

const secondDoodle = document.querySelector('.second-doodle');
secondDoodle.grid = "40";
secondDoodle.seed = fxrand();
console.log(secondDoodle.grid);
console.log(secondDoodle.seed);


function getFeatureString(value) {
  if (value === 1) return "mint"
  if (value === 2) return "pale purp"
  if (value === 3) return "pale purp"
  else return "purp"
}

window.$fxhashFeatures = {
  "Theme": getFeatureString(x)
}
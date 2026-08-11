// these are the variables you can use as inputs to your algorithms
// console.log(fxhash)   // the 64 chars hex number fed to your algorithm
// console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

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
  "number of lines": num,
  "subdivision of cirle": sub,
  "bw palet A": paletA+1,
  "bw palet B": paletB+1,
  "the color of inside": paletC+1,
  "surface trancparency": alfa,
  "iris open":center,
  "lineWeight":lineWeight,
}

// this code writes the values to the DOM as an example
const container = document.createElement("div")
container.innerText = `
  random hash: ${fxhash}\n
  number of lines: ${$fxhashFeatures["number of lines"]}\n
  subdivision of cirle: ${$fxhashFeatures["subdivision of cirle"]}\n
  bw palet A: ${$fxhashFeatures["bw palet A"]}\n
  bw palet B: ${$fxhashFeatures["bw palet B"]}\n
  the color of inside: ${$fxhashFeatures["the color of inside"]}\n
  surface trancparency: ${$fxhashFeatures["surface trancparency"]}\n
  iris open: ${$fxhashFeatures["iris open"]}\n
  lineWeight: ${$fxhashFeatures["lineWeight"]}\n
`
// document.body.prepend(container)
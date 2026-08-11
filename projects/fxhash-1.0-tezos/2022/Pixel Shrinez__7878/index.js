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

// features that will display at fxhash.xyz
window.$fxhashFeatures = {
  "Background" : featBackground(),
  "Aura" : featAura(),
  "Foreground" : featForeground(),
  "Plinth" : featPlinth(),
  "Statue" : featStatue(),
}

// set circle color feature
function featBackground() {
	return randomValue(
    "Background 1", 10,
    "Background 2", 10,
    "Background 3", 10,
    "Background 4", 25,
    "Background 5", 25,
    "Background 6", 25,
    "Background 7", 25,
    "Background 8", 25,
    "Background 9", 25,
    "Background 10", 25,
    "Background 11", 25,
    "Background 12", 25,
    "Background 13", 25,
    "Background 14", 25,
	);
}

function featAura() {
  return randomValue(
    "Aura 1", 10,
    "Aura 2", 10,
    "Aura 3", 10,
    "Aura 4", 25,
    "Aura 5", 25,
    "Aura 6", 25,
  );
}

function featForeground() {
  return randomValue(
    "Foreground 1", 10,
    "Foreground 2", 10,
    "Foreground 3", 10,
    "Foreground 4", 25,
    "Foreground 5", 25,
    "Foreground 6", 25,
  );
}

function featPlinth() {
  return randomValue(
    "Plinth 1", 10,
    "Plinth 2", 10,
    "Plinth 3", 10,
    "Plinth 4", 25,
    "Plinth 5", 25,
    "Plinth 6", 25,
  );
}

function featStatue() {
  return randomValue(
    "Grimiya 1", 10,
    "Antlins 2", 10,
    "Ushi 3", 10,
    "Toscanoh 4", 25,
    "Seracrim 5", 25,
    "Stolahs 6", 25,
  );
}

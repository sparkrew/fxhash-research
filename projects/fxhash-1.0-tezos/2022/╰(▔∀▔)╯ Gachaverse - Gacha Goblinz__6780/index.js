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
  //"Background": "Sky Blue",
  "Background Color" : featBackgroundColor(),
  "Hand Type" : featHandType(),
  "Drippp" : featWatchType(),
  "Goblin" : featGoblinType(),
  "Capsule Color" : featCapsuleCap(),
}

// set circle color feature
function featBackgroundColor() {
	return randomValue(
		"Blue", 50,
		"Yellow", 50,
		"Purple", 50,
    "Red", 50,
    "Green", 50,
	);
}

function featHandType() {
	return randomValue(
		"Infected", 3,
		"Undead", 5,
		"Skele", 5,
    "Normal 1", 50,
    "Normal 2", 50,
	);
}

function featWatchType() {
	return randomValue(
    "Gold Band", 3,
  	"Platinum Band", 10,
  	"Silver Band", 25,
  	"Leather", 40,
	);
}

function featGoblinType() {
  return randomValue(
    "Gold Angore", 5,
    "Blue Angore", 50,
    "Green Angore", 50,
    "Purple Angore", 50,
    "Red Angore", 50,
    "Gold Buglin", 5,
    "Blue Buglin", 50,
    "Green Buglin", 50,
    "Purple Buglin", 50,
    "Red Buglin", 50,
    "Gold Chirpin", 5,
    "Blue Chirpin", 50,
    "Green Chirpin", 50,
    "Purple Chirpin", 50,
    "Red Chirpin", 50,
    "Gold Gobby", 5,
    "Blue Gobby", 50,
    "Green Gobby", 50,
    "Purple Gobby", 50,
    "Red Gobby", 50,
  );
}

function featCapsuleCap() {
	return randomValue(
		"Purple", 20,
		"Blue", 20,
		"Green", 20,
    "Yellow", 20,
    "Red", 20,
	);
}

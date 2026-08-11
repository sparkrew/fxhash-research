// these are the variables you can use as inputs to your algorithms
// console.log(fxhash)   // the 64 chars hex number fed to your algorithm
// console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()
// console.log(window.$fxhashFeatures)

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

// get fxhash value
function fxhash_get() {
	return fxhash;
}
// get fxhash feature
function fxhash_get_feature(_feature) {
	if (typeof window.$fxhashFeatures === 'undefined') {
		// return Null which is "" in GMS2
		return 'undefined';
	}
	else {
		// the variable is defined
		return window.$fxhashFeatures[_feature];
	}
}
// fxrandom (replace fxrand for gms2)
function fxrandom() {
	// get random (use math function if fxrand is undefined for in editor testing)
	var rand = 0;
	if (typeof fxrand === 'undefined') rand = Math.random();
	else rand = fxrand();
	// get argument
	var x1 = (arguments.length > 0) ? (arguments[0]) : (1);
	// return the value
	return rand * x1;
}
// ifxrand
function ifxrand(x1) {
	// get random (use math function if fxrand is undefined for in editor testing)
	var rand = 0;
	if (typeof fxrand === 'undefined') rand = Math.random();
	else rand = fxrand();
	// return the value
	return Math.round(rand * x1);
}
// fxrand_range
function fxrand_range(x1, x2) {
	// get random (use math function if fxrand is undefined for in editor testing)
	var rand = 0;
	if (typeof fxrand === 'undefined') rand = Math.random();
	else rand = fxrand();
	// return the value
	var range = Math.abs(x1 - x2);
	return Math.min(x1,x2) + range * rand;
}
// fxrand_range
function ifxrand_range(x1, x2) {
	// get random (use math function if fxrand is undefined for in editor testing)
	var rand = 0;
	if (typeof fxrand === 'undefined') rand = Math.random();
	else rand = fxrand();
	// return the value
	var range = Math.abs(x1 - x2);
	return Math.round(Math.min(x1,x2) + range * rand);
}
// fxrand_spectrum (takes number and returns a random number between it's positive and negative values)
function fxrand_spectrum() {
	// get random (use math function if fxrand is undefined for in editor testing)
	var rand = 0;
	if (typeof fxrand === 'undefined') rand = Math.random();
	else rand = fxrand();
	// get argument
	var x1 = (arguments.length > 0) ? (Math.abs(arguments[0])) : (1);
	// return the value
	return -x1 + (x1*2) * rand;
}
// fxrand_spectrum (takes number and returns a random number between it's positive and negative values)
function ifxrand_spectrum(x1) {
	// get random (use math function if fxrand is undefined for in editor testing)
	var rand = 0;
	if (typeof fxrand === 'undefined') rand = Math.random();
	else rand = fxrand();
	// get argument
	var x1 = Math.abs(x1);
	// return the value
	return Math.round(-x1 + (x1*2) * rand);
}
// fxrand_range
function fxrand_choose(x1, x2) {
	// get random (use math function if fxrand is undefined for in editor testing)
	var rand = 0;
	if (typeof fxrand === 'undefined') rand = Math.random();
	else rand = fxrand();
	// return the value
	var id = Math.round(rand * (arguments.length-1));
	return arguments[id];
}



























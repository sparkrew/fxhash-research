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

// // features that will display at fxhash.xyz
// _snakeCount = 0;
// window.$fxhashFeatures = {
	// "Snake Count": snakeCount(),
	// "Body Count (HP)": HP(),
	// "Snake Speed (SP)": 1,
	// "Bottom Frame": 0,
	// "Stage Walls Type": 0,
	// "Stage Floor Type": 0,
	// "Stage Walls Color": 0,
	// "Stage Floor Color": 0,
// }

// function snakeCount() {
	// _snakeCount = randomValue(
		// 1, 100,
		// 2, 50,
		// 3, 10,
	// );
	// return _snakeCount;
// }

// function HP {
	// var _HP = 0;
	// for(var i = 0; i < _snakeCount; i++) {
		// _HP += randomValue(
			// 4 : 100,
			// 5 : 100,
			// 6 : 100,
			// 7 : 100,
		// );
	// }
// }





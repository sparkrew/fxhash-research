
// the get a random value from a simple list
// Hot to use:
//randomValue(returnValue, chance) // first input what value you want to be returned and then the chance of it being picked
// Example:
// var value = randomValue(
	// "Red", 100, // highest chance to be picked
	// "Blue", 50, // second highest chance
	// "Green", 50, // tied for second highest chance
	// "White", 10, // lowest chance
// );

function randomValue() {
    // get vars
    var values = [];
    var chancesBars = [];
    var chanceBar = 0;
    // register
    for(var i = 0; i < arguments.length; i += 2) {
        var value = arguments[i];
        var chance = arguments[i+1];
        // add to chance bar
        chanceBar += chance;
        // add to arrays
        values.push(value);
        chancesBars.push(chanceBar);
    }
    // get random
    var ran = fxrand() * chanceBar;
    var id = 0;
    for(var i = 0; i <  chancesBars.length; i++) {
        var v = ran - chancesBars[i];
        if (v <= 0) {
            // this is it
            id = i;
            break;
        }
    }
    // return 
    return values[id];
}



/*

 For the Boirds
 Generative art by thermo (tz1Qjz5VggR1C6ShiarAYVmEoSoVqLva78Km)

 https://twitter.com/MUTANtz_023
 https://www.fxhash.xyz/u/thermo
 https://objkt.com/profile/tz1Qjz5VggR1C6ShiarAYVmEoSoVqLva78Km/

*/

// Screen Properties
let cnv;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let windowScaler = windowHeight;
let windowMax = windowWidth;
let shiftX = 0;
let shiftY = 0;
let controlAreaHeight = 0;

let lineThickness = 0.001;

// Background Stuff
//let gradBGChance = fxrand();
let gradBGChance = 1;
let bgColour;
let bgGradSteps = 10;
let gradBGFlag = false;
let darkBGFlag = false;
let polygonNum = Math.floor(8*fxrand());
let polyOutline = fxrand();
let polyOutlineThickness = 0.015 + fxrand()*0.185;
let polyDarkFlag = fxrand();

//Boid Stuf
let boidSetup = fxrand();
let maxBoidSize = 0.01;
let minBoidSize = 0.03;

// gif Stuff
var gif = new GIF({
	workers: 2,
	quality: 10
});
let origWidth = window.innerWidth;
let origHeight = window.innerHeight;
let gifWidth = 100;
let gifHeight = 100;


let makingGIFFlag = false;
let makingGIFCounter = 0;
let currentGIFButton;

let boidSets;
let boidSettings = [
	{
		name:"Cruise",
		startAlign:1.8,
		startCohesion:1.3,
		startSeparation:1.5,
		maxForce:0.00025,
		maxSpeed:0.003,
		affectRadius:0.1
	},
	{
		name:"Flying Fish",
		startAlign:0.55,
		startCohesion:0.8,
		startSeparation:0.75,
		maxForce:0.0008,
		maxSpeed:0.004,
		affectRadius:0.04
	},
	{
		name:"Go With The Flow",
		startAlign:1.55,
		startCohesion:1.3,
		startSeparation:1.5,
		maxForce:0.00025,
		maxSpeed:0.008,
		affectRadius:0.04
	}
	]

let windForce;

let previewDone = false;

let things = [];
let numThings = 100;
let thingIndex = 0;

let curTime = 0;
let timestep = 30;
let animateFlag = true;
let updatePhysFlag = false;
//let animateFlag = false;

let palettesObj = new palettes();

let controls;
let controlArray = [];

function windowResized()
{

	//console.log("windowResized");
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight-controlAreaHeight;

	if(windowWidth > windowHeight)
	{
		shiftX = (windowWidth - windowHeight)/2.0;
		shiftY = 0;
		windowScaler = windowHeight;
		windowMax = windowWidth;
	} else {
		shiftX = 0;
		shiftY = (windowHeight - windowWidth)/2.0;
		windowScaler = windowWidth;
		windowMax = windowHeight;
	}

	resizeCanvas(windowWidth, windowHeight);

}

function getPalette(t) {
	// if (t<0.025)
	// 	return "Line Art";
	// else if(t<0.05)
	// 	return "Line Art Dark";
	// else if(t<0.1)
	// 	return "Solid";
	// else if(t<0.2)
	// 	return "Silhouette";
	// else if(t<0.4)
	// 	return "Single Dark";
	// else if(t<0.6)
	// 	return "Duo Dark";
	// else if(t<0.8)
	// 	return "Spectrum";
	// else
		return "True Colours";
}

window.$fxhashFeatures = {};

function setup() {

	windowResized();
	cnv = createCanvas(windowWidth,windowHeight, P2D);
	cnv.doubleClicked(togglMenu);

	controls = createDiv();
	controls.id("controls");
	controls.addClass("hide");

	boidSets = boidSettings[0];
	// Pick our Boid Setup
	if ( boidSetup < 0.25 )
		boidSets = boidSettings[1];
	else if ( boidSetup < 0.5 )
		boidSets = boidSettings[2];

	window.$fxhashFeatures["Flow"] = boidSets.name;

	this.addPropertyLabel("Flock Preset");

	this.addControl("align",0,5,boidSets.startAlign,0.01);
	this.addControl("cohesion",0,5,boidSets.startCohesion,0.01);
	this.addControl("separation",0,5,boidSets.startSeparation,0.01);
	this.addControl("maxForce",0,0.01,boidSets.maxForce,0.00001);
	this.addControl("maxSpeed",0,0.05,boidSets.maxSpeed,0.001);
	this.addControl("affectRadius",0,0.5,boidSets.affectRadius,0.01);

//	this.addPropertyLabel("pixelDensity");
//	this.addPropertyLabel("firstWindowScaler");
// 	this.addPropertyLabel("windowScaler");
// 	this.addPropertyLabel("windowWidth");
// 	this.addPropertyLabel("windowHeight");
//	this.addPropertyLabel("windForce");

	this.addButton("Save PNG", saveImage);
	this.addButton("Save GIF", saveGIF);
	//this.addButton("Save GIF (100 x 100)", saveGIF100100);
	// this.addButton("Save GIF (200 x 200)", saveGIF200200);
	// this.addButton("Save GIF (400 x 400)", saveGIF400400);
	// this.addButton("Save GIF (400 x  * )", saveGIF400Star);


	console.log("For the Boirds by thermo");
	console.log("fxhash: ",fxhash);

//	window.$fxhashFeatures["Palette One"] = getPalette(fxrand());
	window.$fxhashFeatures["Background"] = "";
	let PaletteOneSetup = getPalette(fxrand());
	let paletteOne = palettesObj.getPaletteByName(PaletteOneSetup);

	window.$fxhashFeatures["Presence"] = getPolygonNameFromPoints(polygonNum);

	if(polyDarkFlag < 0.1)
		window.$fxhashFeatures["Presence Shade"] = "Bright";
	else if (polyDarkFlag < 0.5)
		window.$fxhashFeatures["Presence Shade"] = "Colour";
	else
		window.$fxhashFeatures["Presence Shade"] = "Dark";

	//choose our palette
	let ourPalette = paletteOne.background[floor(fxrand()*paletteOne.background.length)];

	bgColour = color(ourPalette.R,ourPalette.G,ourPalette.B);

	window.$fxhashFeatures["Background"] = palettesObj.getColourNameFromRGB(ourPalette.R,ourPalette.G,ourPalette.B);

	numThings = floor(numThings); //*fxrand());
//	window.$fxhashFeatures["# Things"] = numThings;

	for(let i = 0; i < numThings; i++)
	{
		things.push(new thing(createVector(fxrand(),fxrand()), 0.01*fxrand(),fxrand()*2*PI, minBoidSize + (maxBoidSize-minBoidSize)*fxrand()));
		thingIndex++;
	}

	// Is it a dark BG?

	//console.log("ourPalette.R:", ourPalette.R, " ourPalette.G: ", ourPalette.G, " ourPalette.B: ", ourPalette.B);

	if( palettesObj.getColourNameFromRGB(ourPalette.R, ourPalette.G, ourPalette.B) == "Grey" )
	{
		darkBGFlag = true;
		//console.log("DARK BG");
	}

	if( fxrand() < gradBGChance )
	{
		gradBGFlag = true;
		window.$fxhashFeatures["Background"] = window.$fxhashFeatures["Background"] + " Step Gradient"
	}

	let windRot = fxrand()*2*PI;
	let windVelMag = fxrand()*0.0001;

	windForce = createVector( windVelMag*cos(windRot), windVelMag*sin(windRot) );

	//things.sort( revSizeSort );
	things.sort( sizeSort );

	console.table(window.$fxhashFeatures);

}

function draw()
{

	push();

	translate(shiftX, shiftY);
	scale(windowScaler);

	if (millis() > curTime + timestep )
	{
		updatePhysFlag = true;
		curTime = millis();

		drawBackground()

		// Draw our scene here
		if (animateFlag)
		{
			// Do we need to change anything to animate?
			for(let thing of things)
			{
				thing.flock(things);
			}
			// Do we need to change anything to animate?
			for(let thing of things)
			{
				thing.update();
			}
		}

		let thingCounter = 0;
		let presenceFlag = false;
		for(let thing of things)
		{
			thing.draw();
			thingCounter++

			//Draw the presence once
			if(thingCounter > things.length/2 && presenceFlag == false){
				if(polyOutline > 0.25)
				{
					let whiteColour = color(255);
					let blackColour = color(0);
					if(polyDarkFlag < 0.1)
						stroke(lerpColor(whiteColour, bgColour, 0.05));
					else if (polyDarkFlag < 0.5)
						stroke(bgColour);
					else
						stroke(lerpColor(blackColour, bgColour, 0.1));
					strokeWeight(polyOutlineThickness);
					noFill();
				} else {
					let whiteColour = color(255);
					let blackColour = color(0);
					if(polyDarkFlag < 0.1)
						fill(lerpColor(whiteColour, bgColour, 0.05));
					else if (polyDarkFlag < 0.5)
						stroke(bgColour);
					else
						fill(lerpColor(blackColour, bgColour, 0.1));
					noStroke();
				}

				if(polygonNum < 3)
				{
					circle(0.5, 0.5, 0.6);
				} else {
					polygon(0.5, 0.5, 0.3, polygonNum);
				}
					presenceFlag = true;
			}
		}

		this.updateControls();
		this.updatePropertyLabels();

		if(makingGIFFlag)
		{
			gif.addFrame(canvas, {delay: 30, copy: true});
			makingGIFCounter++;

			this.currentGIFButton.ourLabel.html("GIF " + floor(100*makingGIFCounter/90) + "%" );

			if( makingGIFCounter > 90 )
			{
				makingGIFFlag = false;
				makingGIFCounter = 0;

				// window.innerWidth = windowWidth;
				// window.innerHeight = windowHeight;

				//windowResized();

				gif.on('finished', function(blob) {
					addLinkButton("Download GIF", URL.createObjectURL(blob));
					resetGIFButton();
				});
				gif.render();

				this.currentGIFButton.ourLabel.html("Preparing Download" );
			}
		}

		updatePhysFlag = false;

	}

	pop();

	if (!previewDone)
	{
		fxpreview();
		previewDone = true;
	}

}

function drawBackground() {
	background(bgColour);

	let bgColourLocal = {r: bgColour.levels[0], g: bgColour.levels[1], b: bgColour.levels[2]};

	if( gradBGFlag == true )
	{
		let startColour = color(0);
		let endColour = color(32);

		if (bgColourLocal.r > bgColourLocal.g && bgColourLocal.r > bgColourLocal.b)
		{
			startColour = color(bgColourLocal.r, 0, 0);
			if (bgColourLocal.g > bgColourLocal.b)
			{
				startColour = color(bgColourLocal.r, bgColourLocal.g*0.5, 0);
				endColour = color(bgColourLocal.r, bgColourLocal.g, 0);
			}
			else
			{
				startColour = color(bgColourLocal.r, 0, bgColourLocal.b*0.5);
				endColour = color(bgColourLocal.r, 0, bgColourLocal.b);
			}
		}
		else if (bgColourLocal.g > bgColourLocal.r && bgColourLocal.g > bgColourLocal.b)
		{
			startColour = color(0, bgColourLocal.g, 0);
			if (bgColourLocal.r > bgColourLocal.b)
			{
				startColour = color(bgColourLocal.r*0.5, bgColourLocal.g, 0);
				endColour = color(bgColourLocal.r, bgColourLocal.g, 0);
			}
			else
			{
				startColour = color(0, bgColourLocal.g, bgColourLocal.b*0.5);
				endColour = color(0, bgColourLocal.g, bgColourLocal.b);
			}
		}
		else if (bgColourLocal.b > bgColourLocal.r && bgColourLocal.b > bgColourLocal.g)
		{
			startColour = color(0, 0, bgColourLocal.b);
			if (bgColourLocal.r > bgColourLocal.g)
			{
				startColour = color(bgColourLocal.r*0.5, 0, bgColourLocal.b);
				endColour = color(bgColourLocal.r, 0, bgColourLocal.b);
			}
			else
			{
				startColour = color(0, bgColourLocal.g*0.5, bgColourLocal.b);
				endColour = color(0, bgColourLocal.g, bgColourLocal.b);
			}
		}

		let colourName = palettesObj.getColourNameFromRGB(bgColourLocal.r,bgColourLocal.g,bgColourLocal.b);
		if(colourName  == "Red" || colourName  == "Green" || colourName == "Blue" )
		{
			startColour = color(bgColourLocal.r*0.8,bgColourLocal.g*0.8,bgColourLocal.b*0.8);
		}

		if(colourName == "White" )
		{
			startColour = color(bgColourLocal.r,bgColourLocal.g,bgColourLocal.b);
			endColour = color(bgColourLocal.r*0.8,bgColourLocal.g*0.8,bgColourLocal.b*0.8);
		}

		noStroke();
		fill(startColour);
		rect(-10, 0, 20, -5);
		for (let i = (bgGradSteps+2); i > 0; i--)
		{
			let gradColour = lerpColor(startColour, endColour, i / (bgGradSteps+3)); // added one to the denominator here to get a colour change a the bottom with the end colour to match the top behaviour.
			fill(gradColour);
			rect(-10, 0, 20, (i / (bgGradSteps+2)));
		}
		fill(endColour);
		rect(-10, 1, 20, 5);

	}

}

function keyPressed() {
	if (key == " ") {
		flipAnimFlag();
	}
	if (key == "1") {
		pixelDensity(1);
	} else if (key == "2") {
		pixelDensity(2);
	} else if (key == "4") {
		pixelDensity(4);
	} else if (key == "8") {
		pixelDensity(8);
	}

}

function touchStarted() {
	//flipAnimFlag();
}

function flipAnimFlag() {
	if(animateFlag == true){
		animateFlag = false;
	} else {
		animateFlag = true;
	}

}

function sizeSort( a, b ) {
	if ( a.ourSize < b.ourSize ){
		return -1;
	}
	if ( a.ourSize > b.ourSize ){
		return 1;
	}
	return 0;
}

function revSizeSort( a, b ) {
	if ( a.ourSize > b.ourSize ){
		return -1;
	}
	if ( a.ourSize < b.ourSize ){
		return 1;
	}
	return 0;
}

function addControl(name, low, high, start, grad) {

	let newDiv = createDiv();
	newDiv.id(name);
	newDiv.parent(controls);
	newDiv.style("display:block;");

	let newLabel = createDiv();
	newLabel.id(name+"Label");
	newLabel.parent(newDiv);
	newLabel.html(name);

	let newSlider = createSlider(low,high,start,grad);
	newSlider.parent(newDiv);
	newSlider.id(name+"Slider");

	let newValue = createDiv();
	newValue.id(name+"Value");
	newValue.parent(newDiv);
	newValue.style("display: inline-block; vertical-align: top;");

	let newSliderControl = {name:name, slider:newSlider, ourLabel:newValue};
	controlArray.push(newSliderControl);

}


function addPropertyLabel(name) {

	let newDiv = createDiv();
	newDiv.id(name.replace(/\s/g, ''));
	newDiv.parent(controls);
	newDiv.style("display:block;");

	let newValue = createDiv();
	newValue.id(name.replace(/\s/g, '')+"Value");
	newValue.parent(newDiv);
	newValue.style("display: inline-block; vertical-align: top;");
	newValue.html(name);

	let newLabelControl = {name:name.replace(/\s/g, ''), ourLabel:newValue};
	controlArray.push(newLabelControl);

}


function addButton(name, callbackFunc) {

	let newDiv = createDiv();
	newDiv.id(name.replace(/\s/g, '')); //remove spaces from name
	newDiv.parent(controls);
	newDiv.style("display:block;");

	let newButton = createDiv();
	newButton.id(name.replace(/\s/g, '')+"Button");
	newButton.parent(newDiv);
	newButton.addClass("controlButton");
	newButton.html(name);

	//newDiv.touchStarted(saveImage);
	newDiv.mouseClicked(callbackFunc);

	let gifButtons = controlArray.find(obj => {
		//console.log(obj.name);
		return obj.name.slice(0, 7) === "SaveGif";
	})

	let numGIFButtons = 0;
	if(gifButtons != undefined)
		numGIFButtons = gifButtons.length;

	let newButtonControl = {name:name.replace(/\s/g, '')+"_"+numGIFButtons, ourLabel:newButton};
	this.currentGIFButton = newButtonControl;
	controlArray.push(newButtonControl);

}

function addLinkButton(name, link) {

	//console.log("addLinkButton");
	let newDiv = createDiv();
	newDiv.id(name.replace(/\s/g, '')); //remove spaces from name
	newDiv.parent(controls);
	newDiv.style("display:block;");

	let newButton = createDiv();
	newButton.id(name.replace(/\s/g, '')+"Button");
	newButton.parent(newDiv);
	newButton.addClass("controlButton");

	let ourLink = createA(link, name, "_blank");

	let ourExt = "gif";
	if(link.slice(-3) == "png")
		ourExt = "png";

	ourLink.attribute("download", "ForTheBoirds."+ourExt);

	ourLink.parent(newButton);

	let newButtonControl = {name:name.replace(/\s/g, ''), ourLabel:newButton};
	controlArray.push(newButtonControl);

}

function updatePropertyLabels () {

	// setLabelValueByName("pixelDensity", pixelDensity());
	// setLabelValueByName("firstWindowScaler", firstWindowScaler );
	// setLabelValueByName("windowScaler", windowScaler );
	// setLabelValueByName("windowWidth", windowWidth );
	// setLabelValueByName("windowHeight", windowHeight );
	//setLabelValueByName("windForce", windForce.x + ", " + windForce.y);
	setLabelValueByName("FlockPreset", boidSets.name);

}

function updateControls() {
	for(let control of controlArray){
		if (control.hasOwnProperty('slider'))
			control.ourLabel.html(control.slider.value());
	}

	maxForce = getSliderValueByName('maxForce');
	maxSpeed = getSliderValueByName('maxSpeed');
	affectRadius = getSliderValueByName('affectRadius');
}

function getSliderValueByName(name) {
	let ourControl = controlArray.find((e) => e.name === name);
	return ourControl.slider.value();
}

function setLabelValueByName(name, value) {
	let ourControl = controlArray.find((e) => e.name === name);
	ourControl.ourLabel.html(name+": "+value);
}

function polygon(x, y, radius, npoints) {
	let angle = TWO_PI / npoints;
	let triangleShift = (1-cos(PI/6))/2;
	beginShape();
	for (let a = -PI/2; a < -PI/2+TWO_PI; a += angle) {
		let sx = x + cos(a) * radius;
		let sy = y + sin(a) * radius;
		if(npoints == 3)
			sy = y + sin(a) * radius + triangleShift;

		vertex(sx, sy);
	}
	endShape(CLOSE);
}

function getPolygonNameFromPoints(npoints)
{
	if(npoints <= 2)
		return "Circle";
	else if (npoints == 3)
		return "Triangle";
	else if (npoints == 4)
		return "Diamond";
	else if (npoints == 5)
		return "Pentagon";
	else if (npoints == 6)
		return "Hexagon";
	else if (npoints == 7)
		return "Heptagon";
	else if (npoints == 8)
		return "Octagon";

}

function togglMenu() {
	controls.toggleClass('hide');
	//console.log("toggleMenu");
}

function saveImage() {
	saveCanvas(cnv, 'ForTheBoirds', 'png');
}

function saveGIF() {
	gif = new GIF({
		workers: 2,
		quality: 10
	});

	makingGIFFlag = true;

	// origWidth = window.innerWidth;
	// origHeight = window.innerHeight;
	//
	// window.innerWidth = gifWidth;
	// window.innerHeight = gifHeight;
	//windowResized();
}

function resetGIFButton() {
	this.currentGIFButton.ourLabel.html("Save GIF");
}

function saveGIF100100() {
	gifWidth = 100;
	gifHeight = 100;
	saveGIF()
}

function saveGIF200200() {
	gifWidth = 200;
	gifHeight = 200;
	saveGIF()
}

function saveGIF400400() {
	gifWidth = 400;
	gifHeight = 400;
	saveGIF()
}

function saveGIF400Star() {
	gifWidth = 400;
	gifHeight = 400*(origHeight/origWidth);
	saveGIF()
}
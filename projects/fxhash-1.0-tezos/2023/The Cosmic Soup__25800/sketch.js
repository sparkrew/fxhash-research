import config from "./config.js";
import { easeInOutCirc, linear } from "./easing.js";
import pseudorandom from "./pseudorandom.js";
import query from "./querystring.js";

let RESOLUTION, ASPECT_RATIO, SIZE_X, SIZE_Y;

let canv
let canvasWidth, canvasHeight;
let option;
let n, i, j, a, b, x, y, t, s, p, q;
let pointx, pointy, pixelw, pixelh;
let backgroundColor, mode, mass, shapes, iterations, colorMode, palette;
let density, energy, dl, dh;
let minParticles, maxParticles;
let gravity;
let offsetx, offsety, zoom, zoomModifier;
let calledFxPreview = false;
let loops;
let paused;

let colorMatrix;
let glitchColumn, isGlitched;

let renderBackgroundOnly;

let startTime, endTime;

const DIV_NAME = 'thecosmicsoup';


function startTimer() {
	startTime = new Date();
};

function endTimer() {
	endTime = new Date();
	var timeDiff = endTime - startTime; //in ms
	timeDiff /= 1000;
	// console.log("Elapsed time: " + timeDiff.toFixed(3) + " seconds");
}


const init = _ => {
	if (query.seed) {
		fxhash = query.seed;
	}

	// console.log(`Hash: ${fxhash}`)
	pseudorandom.seed(fxhash);
	noiseSeed(pseudorandom.decimal(0, 10000));

	renderBackgroundOnly = query.bgOnly == "true";

	offsetx = pseudorandom.decimal(0, 300);
	offsety = pseudorandom.decimal(0, 300);
	zoom = pseudorandom.decimal(380, 400);

	const forcedOptions = config.options.filter(o => o.force);
	if (forcedOptions.length == 0) {
		const optionWeights = config.options.filter(o => o.active).map(o => o.chance);
		option = pseudorandom.weightedPick(config.options.filter(o => o.active), optionWeights);
	} else if (forcedOptions.length > 1) {
		throw "There is more than 1 forced option. Please fix.";
	} else {
		option = forcedOptions[0];
	}

	mode = pseudorandom.weightedPick(["Poster", "Cinematic"], [1, 2]);

	mass = pseudorandom.pick(option.mass)
	shapes = mass.shapes;
	iterations = mass.iterations;

	energy = pseudorandom.pick(option.energy)

	density = pseudorandom.pick(option.density)
	dl = 3 - density.value + 0.12
	dh = 3 + density.value + 0.33

	gravity = option.gravity || 1.5

	minParticles = option.particles.min;
	maxParticles = option.particles.max;

	colorMode = pseudorandom.pick(option.color.mode)
	loops = option.color.loops

	if (option.color.backgroundsWeights) {
		backgroundColor = pseudorandom.weightedPick(option.color.backgrounds, option.color.backgroundsWeights)
	} else {
		backgroundColor = pseudorandom.pick(option.color.backgrounds)
	}
	palette = option.color.palette;

	isGlitched = pseudorandom.decimal() < option.glitchChance

	
	const fxhashFeatures = {
		"Colors": palette.name,
		"Mode": mode,
		"Background": backgroundColor.label,
		"Color Mode": colorMode,
		"Energy": energy,
		"Density": density.label,
		"Glitch": isGlitched ? "Yes" : "No",
	};
	window.$fxhashFeatures = fxhashFeatures;
	
	
	if (mode == "Cinematic") {
		ASPECT_RATIO = 9 / 16;
		
		canvasWidth = 4096;    // Resolution: 4096
		canvasHeight = canvasWidth * ASPECT_RATIO;
		
		RESOLUTION = canvasWidth;
		if (isGlitched) {
			RESOLUTION /= 2;
		}
		SIZE_X = RESOLUTION;
		SIZE_Y = RESOLUTION * ASPECT_RATIO;
		
		zoomModifier = RESOLUTION / 1920
	} else {
		ASPECT_RATIO = 2 / 3;

		canvasHeight = 5400;   // Resolution: 2700
		canvasWidth = canvasHeight * ASPECT_RATIO;

		RESOLUTION = canvasHeight;
		if (isGlitched) {
			RESOLUTION /= 4;
		}
		SIZE_X = RESOLUTION * ASPECT_RATIO;
		SIZE_Y = RESOLUTION;
		
		zoomModifier = RESOLUTION / 1920
	}
	
	pixelw = canvasWidth / SIZE_X
	pixelh = canvasHeight / SIZE_Y
	
	buildColorMatrix();
	
	if (isGlitched) {
		buildGlitchColumn();
	}
	
	setupCanvas();


	// console.log(fxhashFeatures);
	// console.log(`(Gradient spread: ${option.color.gradientSpread || 1})`)
	// console.log(`(Mass: ${mass.label} shapes: ${mass.shapes}, iterations: ${mass.iterations} )`)
	// console.log(`(Particles: ${minParticles} - ${maxParticles})`)
	// console.log(`(Gravity: ${gravity})`)
	// console.log(`(Offset: ${offsetx}, ${offsety})`)
	// console.log(`(Zoom: ${zoom})`)
	
	return fxhashFeatures
}


const buildGlitchColumn = _ => {
	glitchColumn = new Array(SIZE_Y);
	for (let m = 0; m < SIZE_Y; m++) {
		if (pseudorandom.decimal() > 0.07) {
			glitchColumn[m] = 1 - (Math.pow(pseudorandom.decimal(), 14));
		}
	}
	// console.log(glitchColumn)
}

const buildColorColumn = (colors, weights, size, transformFunction, colorOffset, loops = 1) => {
	const colorColumn = new Array(size)
	
	if (!weights) {
		weights = new Array(colors.length).fill(1)
	}
	if (colors.length != weights.length) {
		throw "Palette weights array must have the same length as colors"
	}
	const totalWeight = weights.reduce((a, b) => a + b)
	const weightsProcessed = weights.map(w => Math.ceil((size / loops) * (w / totalWeight)))
	const colorsProcessed = colors.map(buildColor)

	let weightCounter = 0, ticks = 0, value, currentWeight
	let firstColor = colorOffset, secondColor = colorOffset + 1

	for (let k = 0; k < size; k++) {
		currentWeight = weightsProcessed[weightCounter % weights.length]
		if (ticks >= currentWeight) {
			ticks = 0
			weightCounter++
			firstColor++
			secondColor++
		}

		value = ticks++ / currentWeight
		colorColumn[k] = lerpColor(
			colorsProcessed[firstColor % colors.length],
			colorsProcessed[secondColor % colors.length],
			transformFunction(value)).toString();
	}

	return colorColumn
}

const buildColor = (colorObj) => {
	const r = color(colorObj.hex)
	switch (energy) {
		case "Low":
			r.setAlpha(colorObj.alpha * 2 * 255);
			break;
	}
	return r
}

const buildColorMatrix = _ => {
	const colors = palette.colors.map(buildColor)
	colorMatrix = new Array(shapes);

	for (let k = 0; k < shapes; k++) {

		if (colorMode === "Mono" || colorMode === "Discreet") {
			colorMatrix[k] = new Array(iterations);
			for (let m = 0; m < iterations; m++) {
				if (colorMode === "Mono") {
					colorMatrix[k][m] = colors[k % colors.length].toString()
				} else if (colorMode == "Discreet") {
					colorMatrix[k][m] = colors[Math.floor((k + m / iterations * colors.length * loops) % colors.length)].toString()
				}
			}
		} else if (colorMode = "Continuous") {
			colorMatrix[k] = (buildColorColumn(palette.colors, palette.weights, iterations, linear, k, option.color.gradientSpread || 1))
		}
	}
	// console.log(colorMatrix)
}


const reset = _ => {
	i = 0, a = 0, b = 0, x = 0, y = 0, t = 0;
	paused = false;

	pseudorandom.seed(fxhash);
	noiseSeed(pseudorandom.decimal(0, 10000));

	background(backgroundColor.color);
	noStroke();

	startTimer();
}

p5.disableFriendlyErrors = true;

window.setup = _ => {
	init();
	reset();
}

function setupCanvas() {
	pixelDensity(1)

	canv = createCanvas(canvasWidth, canvasHeight)
	canv.id(DIV_NAME);

	resizeCanvas()
}


function resizeCanvas() {
	const scale = Math.min(window.innerWidth / canvasWidth, window.innerHeight / canvasHeight);

	const canvas = document.getElementById(DIV_NAME);
	canvas.style.transform = `scale(${scale})`;
}

window.windowResized = _ => {
	resizeCanvas();
}

window.draw = _ => {
	if (renderBackgroundOnly) {
		fxpreview();
	} else if (i < iterations) {
		if (!paused) {
			t += 0.000000023 * a * a * i; // Cosmic soup,  
	
			for (n = 0; n < shapes; n++) {
				fill(colorMatrix[n][i]);
	
				for (j = 0; j < (minParticles + ((maxParticles - minParticles) * (i / iterations))); j++) {
					s = TAU * t;
	
					p = s + n / 1;
					q = s + TAU * n / 1;
	
					a = Math.tan(p + q) - Math.sin(p - y) + Math.cos(q + x) + gravity * noise(x / dh, y / dl) - 1;
					b = Math.tan(p - q) + Math.sin(p + x) + Math.cos(q + y) + gravity * noise(x / dl, y / dh) - 1;
	
					x = a;
					y = b;
	
					pointy = Math.round((zoomModifier * zoom * (offsety + y)) % SIZE_Y) / SIZE_Y;
					pointx = Math.round((zoomModifier * zoom * (offsetx + x)) % SIZE_X) / SIZE_X;
	
					pointx = pointx >= 0 ? pointx : 1 + pointx;
					pointy = pointy >= 0 ? pointy : 1 + pointy;
	
					if (isGlitched) {
						if (pointx > glitchColumn[pointy * SIZE_Y]) {
							pixelw = canvasWidth * (1 - pointx)
							if (pseudorandom.boolean()) {
								pointx = 0
							}
						} else {
							pixelw = canvasWidth / SIZE_X
						}
					}
	
					rect(pointx * canvasWidth, pointy * canvasHeight, pixelw, pixelh);
				}
			}
			i++;
			if (i % 10 == 0) {
				// console.log(`Step ${i} of ${iterations}`);
			}
		}
	} else {
		if (!calledFxPreview) {
			fxpreview();
			calledFxPreview = true;
			endTimer();
		}
	}
}


window.keyPressed = _ => {
	if (key == 's' || key == 'S') {
		saveCanvas('thecosmicsoup_' + fxhash + "_", 'png');
	} else if (key == 'r' || key == 'R') {
		reset();
	} else if (key == 'f' || key == 'F') {
		if (window.innerHeight < screen.height) {
			const canvas = document.getElementById(DIV_NAME);
	
			if (canvas.requestFullscreen) {
				canvas.requestFullscreen();
			} else if (canvas.webkitRequestFullscreen) { /* Safari */
				canvas.webkitRequestFullscreen();
			} else if (canvas.msRequestFullscreen) { /* IE11 */
				canvas.msRequestFullscreen();
			}
			
			reset();
		}
	} else if (keyCode == 32) {
		paused = !paused;
	}
}

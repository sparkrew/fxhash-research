"use strict";

const fxr = (f, t) => f + (t - f) * $fx.rand();
const fxi = (f, t) => Math.floor(fxr(f, t + 1));
const fxb = (p) => $fx.rand() < p;

const rS = ~~($fx.rand() * 65536);
const nS = ~~($fx.rand() * 65536);
let sR, gC;
const gB = 2048;
const rF = 360;

let gridSize = [8, 16, 32, 48][fxi(0, 3)];
let shifted = fxb(0.25);
let sheared = fxb(0.25);
let rotateThreshold = $fx.rand() * $fx.rand();
let renderThreshold = 0.25 + $fx.rand() * $fx.rand();
let colourThreshold = $fx.rand() * $fx.rand();
let rectSizing = fxr(0.5, 0.8);
let darknessFalls = fxb(0.25);

$fx.features({
	"grid": gridSize + " x " + gridSize,
	"shift": shifted ? "y" : "n",
	"shear": shifted ? "y" : "n",
	"sizing": rectSizing > 0.7 ? "l" : (rectSizing > 0.6 ? "m" : "s"),
	"rotation": rotateThreshold > 0.5 ? "l" : (rotateThreshold > 0.25 ? "m" : "s"),
	"colour": colourThreshold > 0.5 ? "l" : (colourThreshold > 0.25 ? "m" : "s"),
	"population": renderThreshold > 0.5 ? "l" : (renderThreshold > 0.25 ? "m" : "s"),
});

function setup() {
  pixelDensity(1);
  randomSeed(rS);
  noiseSeed(nS);
  sR = min(windowWidth, windowHeight);
  createCanvas(sR, sR);
  imageMode(CENTER);
  colorMode(HSB, 360);
  gC = createGraphics(gB, gB);
  gC.colorMode(HSB, 360);
  gC.imageMode(CENTER);
  gC.rectMode(CENTER);
}


function draw() {

	if (frameCount === 1) {
		gC.resetMatrix();
		gC.translate(0.5 * gB, 0.5 * gB);
		gC.noStroke();
		gC.background(fxr(0, 360), 360, 300);
		if (darknessFalls) {
			gC.background(fxr(0, 360), 360, 90);
			gC.fill(360);
		} else {
			gC.background(fxr(0, 360), 30, 360);
			gC.fill(0);
		}
		let rectSize = gB / gridSize * rectSizing;
		let limits = gB - gB / gridSize;
	
		for (let i = 0; i < gridSize; i += 1) {
			for (let j = 0; j < gridSize; j += 1) {
				let xPos = map(i, 0, gridSize - 1, -0.45 * limits, 0.45 * limits);
				let yPos = map(j, 0, gridSize - 1, -0.45 * limits, 0.45 * limits);
				if (shifted && i % 2 === 0) {
					yPos = map(j + 0.25, 0, gridSize - 1, -0.45 * limits, 0.45 * limits);
				} else {
					yPos = map(j - 0.25, 0, gridSize - 1, -0.45 * limits, 0.45 * limits);
				}
				gC.push();
				gC.translate(xPos, yPos);
				if (noise(i, j) < rotateThreshold) {
					gC.rotate(map(noise(i, j), 0, 1, -0.1, 0.1));
				}
				if (noise(i, j) < colourThreshold) {
					gC.fill(map(noise(i, j), 0, 1, 0, 360), 360, 360);
				}
				if (sheared) {
					gC.shearX(fxr(-1, 1) * $fx.rand() * $fx.rand() * $fx.rand());
				}
				if (noise(i + 0.1, j * 0.1) > renderThreshold || random() < 0.25) {
					gC.rect(0, 0, rectSize, rectSize);
				}
				gC.pop();
			}
		}
		
		background(360);
		image(gC, sR * 0.5, sR * 0.5, sR * 1, sR * 1);
		
		$fx.preview();
		noLoop();
	} else {
		background(360);
		image(gC, sR * 0.5, sR * 0.5, sR * 1, sR * 1);
	}
}

function keyPressed() {
  if (key == "s") {
    save(gC, nf(hour(), 2, 0) + nf(minute(), 2, 0) + nf(second(), 2), "png");
  }
}

function windowResized() {
  sR = min(windowWidth, windowHeight);
  resizeCanvas(sR, sR);
}

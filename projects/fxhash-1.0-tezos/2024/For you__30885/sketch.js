//--------------
//"For you" by Senbaku
//https://twitter.com/senbaku
//https://linktr.ee/senbaku
//--------------

let palette_selected;
let wSize = 1800;
let gaussianSize;
let seed;
let density;

function setup() {
	seed = $fx.rand() * 999999999;
	randomSeed(seed);
	noiseSeed(seed);
	initialize()
}

function initialize() {
	createCanvas(1 * wSize, Math.sqrt(2) * wSize)

	const isMob = /Android|webOS|iPhone|iPad|IEMobile|Opera Mini/i.test(navigator.userAgent);
	if (isMob) {
		pixelDensity();
	} else {
		pixelDensity(Math.min(window.devicePixelRatio + 1, 4));
	}

	rectMode(CENTER)
	angleMode(DEGREES);
	gaussianSize = width * random(0.04, 0.1)
	palette_selected = random(palettes);
	paletteSelected1 = random(palettes);
	paletteSelected2 = random(palettes);

	pg = createGraphics(width, height);
	pg.noStroke();
	for (let i = 0; i < 300000; i++) {
		let x = random(width);
		let y = random(height);
		let n = noise(x * 0.01, y * 0.01) * width * 0.002;
		pg.fill(30, 30);
		pg.rect(x, y, n, n);
	}
	pg2 = createGraphics(width, height);
	for (let j = 0; j < 1000; j++) {
		pg2.noStroke();
		pg2.fill(random(palette_selected));
		pg2.ellipse(randomGaussian(width / 2, width * 0.3), randomGaussian(height / 2, height * 0.3), random() < 0.9 ? width * random(0.001, 0.003) : width * random(0.005, 0.007));
	}
//	noLoop();
}

function draw() {
	randomSeed(seed);
	noiseSeed(seed);
	background(30);
	stroke("#355070");
	backgroundFlowers();
	image(pg, 0, 0)
	mainFlower();
	image(pg2, 0, 0)
}

function randomCol() {
	let randoms = int(random(1, palette_selected.length));
	return color(palette_selected[randoms]);
}

function flower(x, y, radius) {
	push();
	translate(x, y)
	let petal = 10;
	let petalSize = radius / (petal / 15)
	for (let i = 0; i < 360; i += 360 / petal) {
		let ex = radius * sin(i);
		let ey = radius * cos(i);
		heart(ex, ey, petalSize, 80);
	}

	pop();
}

function mainFlower() {
	push();
	noFill();
	let pos1 = createVector(width * random(0.4, 0.6), height * 0.3);
	let pos2 = createVector(width * random(0.4, 0.6), height * 0.8);
	let center = createVector(width / 2, height * random(0.29, 0.4));
	//stem
	stroke(randomCol());
	strokeWeight(width * 0.012);
	stem(center, pos1, pos2);

	stroke('#99b898');
	strokeWeight(width * 0.01);
	stem(center, pos1, pos2);
	pop();
	//pettal
	push();
	translate(center.x, center.y);
	flower(0, 0, width * 0.18)
	flower(0, 0, width * 0.15)
	flower(0, 0, width * 0.1)
	pop();
}

function stem(center, pos1, pos2) {
	beginShape();
	vertex(center.x, center.y);
	bezierVertex(pos1.x, pos1.y, pos2.x, pos2.y, width / 2, height);
	endShape();
}

function backgroundFlowers() {
	let pnum = random([10, 100, 200])
	for (let i = 0; i < pnum; i++) {
		push();
		let x = randomGaussian(width / 2, width * 0.3)
		let y = randomGaussian(height * 0.8, height * 0.4)
		translate(x, y)
		rotate(360 * noise(x, y, x * y))
		push();
		heart(0, 0, randomGaussian(width * 0.01, gaussianSize), 0)
		pop();
		pop();
	}

}

function heart(x, y, sizes, alpha) {
	push();
	col1 = color(random(paletteSelected1));
	col1.setAlpha(alpha)
	col2 = color(random(paletteSelected2));

	let gradientFill = drawingContext.createLinearGradient(
		0,
		-sizes,
		0,
		sizes
	);
	gradientFill.addColorStop(0, color(col1));
	gradientFill.addColorStop(1, color(col2));
	drawingContext.fillStyle = gradientFill;
	stroke(randomCol())
	strokeWeight(width * 0.001);
	translate(x, y)
	let angle = atan2(y, x)
	rotate(angle + 90)
	let w = sizes * random(0.5, 0.7);
	let h = sizes;
	let posCRan = w * random(0.1, 0.2)
	let posCenter = createVector(0, -h * random(0.2, 0.4))
	let posRURan = w * random(0.1, 0.8)
	let posRU = createVector(w * random(0.5, 0.8), -h * random(0.5, 0.8))
	let posCDRan = w * random(0.1, 0.5)
	let posCD = createVector(w * random(-0.2, 0.2), h * random(0.5, 0.8))
	let posLURan = w * random(0.1, 0.8)
	let posLU = createVector(-w * random(0.5, 0.8), -h * random(0.5, 0.6))

	beginShape()
	vertex(posCenter.x, posCenter.y)
	bezierVertex(posCenter.x + posCRan, posCenter.y, posRU.x - posRURan, posRU.y - posRURan, posRU.x, posRU.y)
	bezierVertex(posRU.x + posRURan, posRU.y + posRURan, posCD.x + posCDRan, posCD.y + posCDRan, posCD.x, posCD.y)
	bezierVertex(posCD.x - posCDRan, posCD.y - posCDRan, posLU.x - posLURan, posLU.y + posLURan, posLU.x, posLU.y)
	bezierVertex(posLU.x + posLURan, posLU.y - posLURan, posCenter.x - posCRan, posCenter.y, posCenter.x, posCenter.y)

	endShape()

	pop();
}

const palettes = [
	["#e9dbce", "#fceade", "#ea526f", "#e2c290", "#6b2d5c", "#25ced1"],
	["#223843", "#e9dbce", "#eff1f3", "#dbd3d8", "#d8b4a0", "#d77a61"],
	["#e29578", "#ffffff", "#006d77", "#83c5be", "#ffddd2", "#edf6f9"],
	["#e9dbce", "#ffffff", "#cc3528", "#028090", "#00a896", "#f8c522"],
	["#e9dbce", "#f8f7c1", "#f46902", "#da506a", "#fae402", "#92accc"],
	["#e42268", "#fb8075", "#761871", "#5b7d9c", "#a38cb4", "#476590"],
	['#f9b4ab', '#fdebd3', '#264e70', '#679186', '#bbd4ce'],
	['#1f306e', '#553772', '#8f3b76', '#c7417b', '#f5487f'],
	['#e0f0ea', '#95adbe', '#574f7d', '#503a65', '#3c2a4d'],
	['#413e4a', '#73626e', '#b38184', '#f0b49e', '#f7e4be'],
	['#ff4e50', '#fc913a', '#f9d423', '#ede574', '#e1f5c4'],
	['#99b898', '#fecea8', '#ff847c', '#e84a5f', '#2a363b'],
	['#69d2e7', '#a7dbd8', '#e0e4cc', '#f38630', '#fa6900'],
	['#fe4365', '#fc9d9a', '#f9cdad', '#c8c8a9', '#83af9b'],
	['#ecd078', '#d95b43', '#c02942', '#542437', '#53777a'],
	['#556270', '#4ecdc4', '#c7f464', '#ff6b6b', '#c44d58'],
	['#774f38', '#e08e79', '#f1d4af', '#ece5ce', '#c5e0dc'],
	['#e8ddcb', '#cdb380', '#036564', '#033649', '#031634'],
	['#490a3d', '#bd1550', '#e97f02', '#f8ca00', '#8a9b0f'],
	['#594f4f', '#547980', '#45ada8', '#9de0ad', '#e5fcc2'],
	['#00a0b0', '#6a4a3c', '#cc333f', '#eb6841', '#edc951'],
	['#5bc0eb', '#fde74c', '#9bc53d', '#e55934', '#fa7921'],
	['#ed6a5a', '#f4f1bb', '#9bc1bc', '#5ca4a9', '#e6ebe0'],
	['#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#073b4c'],
	['#22223b', '#4a4e69', '#9a8c98', '#c9ada7', '#f2e9e4'],
	['#114b5f', '#1a936f', '#88d498', '#c6dabf', '#f3e9d2'],
	['#3d5a80', '#98c1d9', '#e0fbfc', '#ee6c4d', '#293241'],
	['#06aed5', '#086788', '#f0c808', '#fff1d0', '#dd1c1a'],
	['#540d6e', '#ee4266', '#ffd23f', '#3bceac', '#0ead69'],
	['#c9cba3', '#ffe1a8', '#e26d5c', '#723d46', '#472d30'],
	["#3c4cad", "#5FB49C", "#e8a49c"],
	["#1c3560", "#f2efdb", "#fea985", "#ff6343"],
	["#e0d7c5", "#488a50", "#b59a55", "#bf5513", "#3b6fb6", "#4f3224", "#9a7f6e"],
	["#ffb53c", "#eeb3a3", "#f3553c", "#642a02"], //bloodOrange
	["#DEEFB7", "#5FB49C", "#ed6a5a"],
	["#2B2B2B", "#91B3E1", "#2F5FB3", "#3D4B89", "#AE99E8", "#DBE2EC"],
	["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"]
];
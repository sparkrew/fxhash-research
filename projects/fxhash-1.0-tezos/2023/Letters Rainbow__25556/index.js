var nx = 0.01;
var ny = 0;
var nz = fxrand () * 100 - 50;

var a = 10;
var b = 28;
var c = 8.0 / 3.0;

var distance;

var noisex;
var noisey;
var noisez;

var hue_val = fxrand () * 360;

var rad = 0.0;

var letters_order = "abcdefghijklmnopqrstuvwxyz" +
					"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var letters_array = [];
var letter;

function preload () {

	font_data = loadFont('commons/arial_bold.ttf');

}


function setup () {

	canvas = createCanvas (windowWidth, windowHeight, WEBGL);
	canvas.id ("top_view");

	pixelDensity (displayDensity ());
	colorMode (HSB, 256);
	background (0);

	textFont (font_data);
	textAlign (CENTER, CENTER);

	letters_array = split (letters_order, '');
	letter = letters_array[int (fxrand () * letters_array.length)];

	noiseSeed (int (fxrand () * 100000));

}

function draw () {

	translate (0, 0, 100);
	rotateZ (rad);

	var dt = 0.01;
	var dx = (a * (ny - nx)) * dt;
	var dy = (nx * (b - nz) - ny) * dt;
	var dz = (nx * ny - c * nz) * dt;

	nx = nx + dx;
	ny = ny + dy;
	nz = nz + dz;

	distance = sqrt ((dx * dx) + (dy * dy) + (dz * dz)) * 20;

	noisex = noise (frameCount * 0.005);
	noisey = noise (frameCount * 0.005);
	noisez = noise (frameCount * 0.005);

	hue_val += 1;

	if (hue_val > 255) {
		hue_val = 0;
	}

	push ();
	translate (nx * noisex * 40, ny * noisey * 20, nz * noisez * 10);
	rotateZ (-rad);
	noStroke ();
	fill (hue_val, 255, nz * 8, nz * 4);
	textSize (distance * distance);
	text (letter, 0, 0);
	pop ();

	rad = (noise (frameCount * 0.005) - 0.5) * 40;

	if (frameCount == 500) {
		fxpreview ();
	}

}

function mousePressed () {

	background (0);

}

function keyPressed () {

	letter = key;

}
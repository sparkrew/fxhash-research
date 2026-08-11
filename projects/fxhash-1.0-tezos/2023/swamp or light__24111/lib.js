// COLORS
//   Comments: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Vivamus ullamcorper elit ut sagittis consectetur.
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
const colors = ["#cf2b34", "#f08f46", "#f0c129", "#196e94", "#353a57"];
const lightBgColor = "#f8f4e9";
const darkBgColor = "#f8f4e9";

function getAvailableColors(colors, color) {
	let available_colors = [];

	for (let i = 0; i < colors.length; i++) {
		if (colors[i] != color) {
			available_colors.push(colors[i]);
		}
	}

	return available_colors;
}

// TWISTY LINES
//   Comments: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Vivamus ullamcorper elit ut sagittis consectetur.
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
function twistyLineWLine(baseX, baseY, toX, toY, steps, color, twistyIndex, exact) {
	const stepX = (toX - baseX) / steps;
	const stepY = (toY - baseY) / steps;
	stroke(color);

	for (let j = 0; j < steps; j++) {
		let oldBaseX = baseX;
		let oldBaseY = baseY;

		let moveY = (random() - 0.5) * twistyIndex;
		let moveX = (random() - 0.5) * twistyIndex;
		baseX = baseX + stepX + moveX;
		baseY = baseY + stepY + moveY;

		if (exact && j == steps - 1) {
			baseX = toX;
			baseY = toY;
		}

		line(oldBaseX, oldBaseY, baseX, baseY);
	}

	return [baseX, baseY];
}

function twistyLineWVertex(baseX, baseY, toX, toY, steps, color, twistyIndex, exact) {
	const stepX = (toX - baseX) / steps;
	const stepY = (toY - baseY) / steps;
	stroke(color);

	for (let j = 0; j < steps; j++) {
		vertex(baseX, baseY);
		let moveY = (random() - 0.5) * twistyIndex;
		let moveX = (random() - 0.5) * twistyIndex;
		baseX = baseX + stepX + moveX;
		baseY = baseY + stepY + moveY;

		if (exact && j == steps - 1) {
			baseX = toX;
			baseY = toY;
		}

		vertex(baseX, baseY);
	}

	return [baseX, baseY];
}

// SHAPES PEN STYLE PAINTED (SPSP)
//   Comments: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Vivamus ullamcorper elit ut sagittis consectetur.
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
function spspSquarePyramid(x, y, w, increase, color) {
	let fp; // final point de la ultima twisty line

	for (let d = 0; d < w; d = d + increase) { // d stands for difference from original point
		fp = twistyLineWLine(x + d, y + d, x + w - d, y + d, 10, color, 1);
		fp = twistyLineWLine(fp[0], fp[1], x + w - d, y + w - d, 10, color, 1);
		fp = twistyLineWLine(fp[0], fp[1], x + d, y + w - d, 10, color, 1);
		fp = twistyLineWLine(fp[0], fp[1], x + d, y + d, 10, color, 1, true);
	}
}

function spspSquareSquarish(x, y, w, d, color) {
	let fp = [x, y]; // final point de la ultima twisty line

	// d stands for difference from line
	const dd = d * 2; // d times 2 xd

	for (let t = 0; t < w / dd; t++) { // t stands for times
		fp = twistyLineWLine(fp[0], fp[1], x + dd * t, y + w, 10, color, 1);
		fp = twistyLineWLine(fp[0], fp[1], x + d + dd * t, y + w, 10, color, 1);
		fp = twistyLineWLine(fp[0], fp[1], x + d + dd * t, y, 10, color, 1);

		if (t + 1 < round(w / dd)) { // si no es la ultima, hago la ultima pare para que siga
			fp = twistyLineWLine(fp[0], fp[1], x + dd + dd * t, y, 10, color, 1);
		}
	}
}


// FREEHAND SHAPES
//   Comments: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Vivamus ullamcorper elit ut sagittis consectetur.
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.

function fhTransparentCube(x, y, w, steps, twistyIdx, col) {
	const stroke_weight = w * 3 / 50;
	const sqWdth = w * 2 / 3

	const ftlx = x;             const ftly = y + w / 3;     // square Front Top Left corner
	const ftrx = ftlx + sqWdth; const ftry = ftly;          // square Front Top Right corner
	const fblx = ftlx;          const fbly = ftly + sqWdth; // square Front Bottom Left corner
	const fbrx = ftrx;          const fbry = fbly;          // square Front Bottom Right corner
	const btlx = x + w / 3;     const btly = y;             // square Back Top Left corner
	const btrx = btlx + sqWdth; const btry = btly;          // square Back Top Right corner
	const bblx = btlx;          const bbly = btly + sqWdth; // square Back Top Right corner
	const bbrx = btrx;          const bbry = bbly;          // square Back Top Right corner

	push();
	strokeWeight(stroke_weight);
	noFill();
	strokeCap(ROUND);
	const strokeMargin = stroke_weight / 8;

	twistyLineWLine(ftlx, ftly, ftrx, ftry, steps, col, twistyIdx); // -+
	twistyLineWLine(ftrx, ftry, fbrx, fbry, steps, col, twistyIdx); //  |=> front square
	twistyLineWLine(fbrx, fbry, fblx, fbly, steps, col, twistyIdx); //  |
	twistyLineWLine(fblx, fbly, ftlx, ftly, steps, col, twistyIdx); // -+

	twistyLineWLine(btlx, btly, btrx, btry, steps, col, twistyIdx); // -+
	twistyLineWLine(btrx, btry, bbrx, bbry, steps, col, twistyIdx); //  |=> back square
	twistyLineWLine(bbrx, bbry, bblx, bbly, steps, col, twistyIdx); //  |
	twistyLineWLine(bblx, bbly, btlx, btly, steps, col, twistyIdx); // -+

	twistyLineWLine(ftlx, ftly, btlx, btly, steps, col, twistyIdx);
	twistyLineWLine(fblx, fbly, bblx, bbly, steps, col, twistyIdx);
	twistyLineWLine(ftrx, ftry, btrx, btry, steps, col, twistyIdx);
	twistyLineWLine(fbrx, fbry, bbrx, bbry, steps, col, twistyIdx);

	pop();
}

function fhSquare(x, y, w, steps, twistyIdx, col1, col2, drawBorder) {
	let fp; // final point de la ultima twisty line

	// hacer el cuadrado relleno
	fill(col1);
	beginShape();
	fp = twistyLineWVertex(    x,     y, x+w,   y, steps, col1, twistyIdx, false);
	fp = twistyLineWVertex(fp[0], fp[1], x+w, y+w, steps, col1, twistyIdx, false);
	fp = twistyLineWVertex(fp[0], fp[1],   x, y+w, steps, col1, twistyIdx, false);
	fp = twistyLineWVertex(fp[0], fp[1],   x,   y, steps, col1, twistyIdx, true);
	endShape(CLOSE);

	// hacer un bordecito. podria ser hasta del otro color
	if (drawBorder) {
		fp = twistyLineWLine(x, y, x + w, y, steps, col2, twistyIdx);
		fp = twistyLineWLine(fp[0], fp[1], x + w, y + w, steps, col2, twistyIdx);
		fp = twistyLineWLine(fp[0], fp[1], x, y + w, steps, col2, twistyIdx);
		fp = twistyLineWLine(fp[0], fp[1], x, y, steps, col2, twistyIdx);
	}
}

// RANDOM NUMBERS
//   Comments: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Vivamus ullamcorper elit ut sagittis consectetur.
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.

function getRandomInt(min, max) {
	// Retorna un entero aleatorio entre min (incluido) y max (excluido)
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

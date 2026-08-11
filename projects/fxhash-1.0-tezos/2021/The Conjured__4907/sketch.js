let palette = ["#gf3050", "#10gg50", "#3010gf", "#60ffff", "#ff30ff", "#ffff40"];

function setup() {
	createCanvas(666, 666);
	rectMode(CENTER);
	noLoop();
}

function draw() {
	background(25);
	grid();
}

function grid() {
	let seg = 1;
	let w = width / seg;
	for (let i = 0; i < seg; i++) {
		for (let j = 0; j < seg; j++) {
			let x = i * w;
			let y = j * w;
			let off = 2;
			fill(random(palette));
			noStroke();
			rect(x + w * 0.5, y + w * 0.5, w - off, w - off);
			fill(255, 90);
			rect(x + w * 0.5, y + w * 0.5, w - off, w - off);
			dots(x + w * 0.5, y + w * 0.5, w * 0.99);
			face(x + w * 0.5, y + w * 0.55, w - off);
			noFill();
			stroke(255);
			strokeWeight(off * 3);
			rect(x + w * 0.5, y + w * 0.5, w, w);
		}
	}
}

function face(x, y, s) {
	strokeWeight(10);
	fill(random(palette));
	stroke(0);

	//Ornament
	let rnd = int(random(7));
	fill(random(palette));
	if (rnd == 0) {
		circle(x + s * 0.3, y - s * 0.3, s * 0.35);
		circle(x - s * 0.3, y - s * 0.3, s * 0.35);
	}
	if (rnd == 1) {
		circle(x + s * 0.3, y + s * 0.2, s * 0.32);
		circle(x - s * 0.3, y + s * 0.2, s * 0.32);
	}
	if (rnd == 2) {
		circle(x, y - s * 0.06, s * 0.77);
		circle(x + s * 0.3, y + s * 0.05, s * 0.32);
		circle(x - s * 0.3, y + s * 0.05, s * 0.32);
	}
	if (rnd == 3) {
		circle(x, y - s * 0.06, s * 0.77);
		circle(x + s * 0.3, y + s * 0.05, s * 0.32);
		circle(x - s * 0.3, y + s * 0.05, s * 0.32);
	}
	if (rnd == 4) {
		arc(x + s * 0.2, y - s * 0.14, s * 0.6, s * 0.6, PI * 0.75, PI + PI * 0.75, CHORD);
		arc(x - s * 0.2, y - s * 0.14, s * 0.6, s * 0.6, PI + PI * 0.25, TAU + PI * 0.25, CHORD);
	}
	if (rnd == 5) {
		circle(x, y - s * 0.3, s * 0.35);
	}
	if (rnd == 6) {
		circle(x, y - s * 0.06, s * 0.77);
	}

	fill("#fff3f2");
	ellipse(x, y, s * 0.7, s * 0.67);

	fill(255, 30, 30, 160);
	noStroke();
	heart(x + s * 0.15, y + s * 0.25, s * 0.07);

	hair(x, y, s);
	eyes(x, y, s);

	mouth(x, y, s);

}

function hair(x, y, s) {
	let p1 = {
		x: 0,
		y: -s * 0.37
	};
	let p2 = {
		x: s * 0.37,
		y: 0
	};
	let p3 = {
		x: s * 0.2,
		y: s * 0.35
	};
	let p4 = {
		x: s * 0.25,
		y: s * 0.06
	};
	let p5 = {
		x: 0,
		y: -s * 0.02
	};
	let ap1 = {
		x: s * 0.2,
		y: p1.y
	}
	let ap2 = {
		x: p2.x,
		y: -s * 0.2
	}
	let ap3 = {
		x: p2.x,
		y: s * 0.2
	}
	let ap4 = {
		x: p3.x,
		y: p3.y
	}
	let ap5 = {
		x: p3.x + s * 0.1,
		y: p3.y - s * 0.2
	}
	let ap6 = {
		x: p4.x,
		y: p4.y
	}
	let ap7 = {
		x: p4.x,
		y: p4.y
	}
	let ap8 = {
		x: p5.x + s * 0.2,
		y: p5.y
	}
	push();
	translate(x, y);
	fill(random(palette));
	stroke(0);
	beginShape();
	vertex(p1.x, p1.y);
	bezierVertex(ap1.x, ap1.y, ap2.x, ap2.y, p2.x, p2.y);
	bezierVertex(ap3.x, ap3.y, ap4.x, ap4.y, p3.x, p3.y);
	bezierVertex(ap5.x, ap5.y, ap6.x, ap6.y, p4.x, p4.y);
	bezierVertex(ap7.x, ap7.y, ap8.x, ap8.y, p5.x, p5.y);
	bezierVertex(-ap8.x, ap8.y, -ap7.x, ap7.y, -p4.x, p4.y);
	bezierVertex(-ap6.x, ap6.y, -ap5.x, ap5.y, -p3.x, p3.y);
	bezierVertex(-ap4.x, ap4.y, -ap3.x, ap3.y, -p2.x, p2.y);
	bezierVertex(-ap2.x, ap2.y, -ap1.x, ap1.y, -p1.x, p1.y);
	endShape();

	let cp1 = {
		x: s * 0.14,
		y: -s * 0.01
	};
	let cp2 = {
		x: s * 0.135,
		y: -s * 0.08
	};
	let cp3 = {
		x: s * 0.12,
		y: -s * 0.17
	};
	noFill();
	beginShape();
	curveVertex(cp1.x, cp1.y);
	curveVertex(cp1.x, cp1.y);
	curveVertex(cp2.x, cp2.y);
	curveVertex(cp3.x, cp3.y);
	curveVertex(cp3.x, cp3.y);
	endShape();

	beginShape();
	curveVertex(-cp1.x, cp1.y);
	curveVertex(-cp1.x, cp1.y);
	curveVertex(-cp2.x, cp2.y);
	curveVertex(-cp3.x, cp3.y);
	curveVertex(-cp3.x, cp3.y);
	endShape();

	noStroke();
	fill(255);
	ellipse(-s * 0.2, -s * 0.23, s * 0.1, s * 0.1);
	ellipse(-s * 0.1, -s * 0.2, s * 0.05, s * 0.05);
	pop();
}

function eyes(x, y, s) {
	let ex1 = s * 0.135;
	let ey1 = y + s * 0.14;
	let ew1 = s * 0.17;
	let eh1 = s * 0.21;

	let ex2 = ex1 - s * 0.045;
	let ey2 = ey1 + s * 0.0;
	let ew2 = ew1 * 0.55;
	let eh2 = eh1 * 0.55;
	let eex2 = ex1 + s * 0.041;

	let hloff = s * 0.02;
	let hlw = ew2 * 0.3;
	let hlh = eh2 * 0.3;
	
	stroke(0);
	noFill();
	arc(x + ex1, ey1, ew1, eh1, PI, TAU + PI * 0.25);
	arc(x - ex1, ey1, ew1, eh1, PI * 0.75, TAU);
	noStroke();
	fill(0);

	//Pupils
	let rnd = random();
	if (rnd < 0.33) {
		ellipse(x + ex2, ey2, ew2, eh2);
		ellipse(x - ex2, ey2, ew2, eh2);
		fill(255);
		ellipse(x + ex2 - hloff, ey2 - hloff, hlw, hlh);
		ellipse(x - ex2 - hloff, ey2 - hloff, hlw, hlh);
	} else if (rnd < 0.66) {
		ellipse(x + ex2, ey2, ew2, eh2);
		ellipse(x - eex2, ey2, ew2, eh2);
		fill(255);
		ellipse(x + ex2 - hloff, ey2 - hloff, hlw, hlh);
		ellipse(x - eex2 - hloff, ey2 - hloff, hlw, hlh);
	} else {
		ellipse(x + eex2, ey2, ew2, eh2);
		ellipse(x - ex2, ey2, ew2, eh2);
		fill(255);
		ellipse(x + eex2 - hloff, ey2 - hloff, hlw, hlh);
		ellipse(x - ex2 - hloff, ey2 - hloff, hlw, hlh);
	}


	// fill(255);
	// stroke(255);

	//Lash
	let lAng1 = PI * 0.05;
	let lAng2 = PI * 0.15;
	let cos1 = ew1 * 0.5 * cos(lAng1);
	let sin1 = eh1 * 0.5 * sin(lAng1);
	let cos2 = ew1 * 0.5 * cos(lAng2);
	let sin2 = eh1 * 0.5 * sin(lAng2);
	let len = 1.5;

	stroke(0);
	strokeWeight(1.5);
	line(x + ex1 + cos1, ey1 + sin1, x + ex1 + cos1 * len, ey1 + sin1 * len);
	line(x + ex1 + cos2, ey1 + sin2, x + ex1 + cos2 * len, ey1 + sin2 * len);

	cos1 = cos1 / cos(lAng1) * cos(PI - lAng1);
	sin1 = sin1 / sin(lAng1) * sin(PI - lAng1);
	cos2 = cos2 / cos(lAng1) * cos(PI - lAng1);
	sin2 = sin2 / sin(lAng1) * sin(PI - lAng1);
	line(x - ex1 + cos1, ey1 + sin1, x - ex1 + cos1 * len, ey1 + sin1 * len);
	line(x - ex1 + cos2, ey1 + sin2, x - ex1 + cos2 * len, ey1 + sin2 * len);
}

function mouth(x, y, s) {
	let rnd = int(random(5));
	stroke(0);
	strokeWeight(2);
	if (rnd == 0) line(x - s * 0.02, y + s * 0.28, x + s * 0.02, y + s * 0.28);
	if (rnd == 1) ellipse(x, y + s * 0.28, s * 0.05, s * 0.07);
	if (rnd == 2) ellipse(x, y + s * 0.28, s * 0.02, s * 0.02);
	if (rnd == 3) ellipse(x, y + s * 0.27, s * 0.06, s * 0.045);
	if (rnd == 4) {
		// ellipse(x, y + s * 0.28, s * 0.02, s * 0.02);
		beginShape();
		curveVertex(x - s * 0.04, y + s * 0.26);
		curveVertex(x - s * 0.04, y + s * 0.26);
		curveVertex(x, y + s * 0.275);
		curveVertex(x + s * 0.04, y + s * 0.26);
		curveVertex(x + s * 0.04, y + s * 0.26);
		endShape();
	}
}

function heart(x, y, s) {
	let hs = s / 2;
	let px1 = 0;
	let py1 = hs * 0.9;
	let px2 = hs * 0.9;
	let py2 = -hs * 0.2;
	let px3 = 0;
	let py3 = -hs * 0.4;

	let ax1 = px1;
	let ay1 = py1;
	let ax2 = hs * 0.9;
	let ay2 = hs * 0.2;
	let ax3 = hs;
	let ay3 = -hs;
	let ax4 = 0;
	let ay4 = -hs;
	let angle = PI;

	push();
	translate(x, y);
	rotate(angle);
	beginShape();
	vertex(px1, py1);
	bezierVertex(ax1, ay1, ax2, ay2, px2, py2);
	bezierVertex(ax3, ay3, ax4, ay4, px3, py3);
	bezierVertex(-ax4, ay4, -ax3, ay3, -px2, py2);
	bezierVertex(-ax2, ay2, -ax1, ay1, -px1, py1);
	endShape();
	pop();
}

function dots(x_, y_, w_) {
	let seg = 50;
	let w = w_ / seg;
	noStroke();
	fill(random(palette));
	for (let i = 0; i <= seg; i++) {
		for (let j = 0; j <= seg; j++) {
			let x = x_ - w_ / 2 + i * w;
			let y = y_ - w_ / 2 + j * w;
			let ps = noise(x * 0.002, y * 0.002) * w * 1.5;
			if ((i % 2) == 0) circle(x, y + w / 2, ps);
			else circle(x, y, ps);
		}
	}
}
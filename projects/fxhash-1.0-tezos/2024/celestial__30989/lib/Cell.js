class Cell {
	constructor({x: _x, y: _y, siz: _siz}) {
		this.p = createVector(_x, _y);
		this.siz = _siz;
		this.frame = 0;
	}

	update() {
		let a = noise(this.p.x*4e-3, this.p.y*4e-3)*3000;
		a = random(0, 360);
		let v = createVector(cos(a), sin(a));
		let mode = int(random(0, 4));
		if (mode == 0) { v = createVector(cos(30), sin(30)); }
		else if (mode == 1) { v = createVector(cos(-30), sin(-30)); }
		else if (mode == 2) { v = createVector(cos(30-180), sin(30-180)); }
		else if (mode == 3) { v = createVector(cos(-30+180), sin(-30+180)); }

		this.p.x += v.x*5;  this.p.y += v.y*5;
	}

	draw() {
		let d = max(this.siz - this.frame*0.2, 0);
		if (d > 0) {
			push();
			translate(this.p.x, this.p.y);
			strokeWeight(2);  stroke(0);  fill(pallette[Math.floor($fx.rand()*pallette.length)]);
			quad(cos(0)*d*2, sin(0)*d*2,
							cos(240)*d*2, sin(240)*d*2,
							cos(240)*d*2, sin(240)*d*2+d*4,
							 cos(0)*d*2, sin(0)*d*2+d*4
			);



			pop();

			this.update();
		}

		this.frame++;
	}
}

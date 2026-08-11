let incident_num;
let static_num;
let incident_pts = [];
let static_pts = [];
let k;

let tmp_rand;

let incident_pg;
let incident_px;
let incident_py;
let incident_vx;
let incident_vy;
let incident_mass;
let incident_charge;
let incident_col;

let static_pg;
let static_px;
let static_py;
let static_vx;
let static_vy;
let static_mass;
let static_charge;
let static_col;

let count_flag = true;
let loop_flag = false;

let frame_count = 0;

function setup () {

	let canvas = createCanvas (windowWidth, windowHeight);
	canvas.id ('top_view');

	pixelDensity (displayDensity ());
	colorMode (HSB, 360, 100, 100, 100);
	background (0, 0, 0);
	ellipseMode (CENTER);

	incident_pg = createGraphics (width, height);
	static_pg = createGraphics (width, height);

	init_particles ();

}

function draw () {

	background (0, 0, 0);

	for (let i = 0; i < incident_num; i++) {
		for (let j = 0; j < static_num; j++) {
			let dx = static_pts[j].x - incident_pts[i].x;
			let dy = static_pts[j].y - incident_pts[i].y;
			let r = sqrt (dx * dx + dy * dy);
			let force = k * ((incident_pts[i].charge * static_pts[j].charge) / (r * r));
			let deg = atan2 (dy, dx);
			let fx = force * cos (deg);
			let fy = force * sin (deg);
			static_pts[j].apply_force (fx, fy);
			incident_pts[i].set_color (force);
			incident_pts[i].apply_force (-fx, -fy);
		}
	}

	static_pg.background (0);
	for (let i = 0; i < static_num; i++) {
		static_pts[i].update ();
		static_pts[i].render ();
	}

	for (let i = 0; i < incident_num; i++) {
		incident_pts[i].update ();
		incident_pts[i].render ();
	}

	image (static_pg, 0, 0);
	image (incident_pg, 0, 0);

	if (frame_count == 4000) {
		count_flag = false;
		frame_count = 0;
		$fx.preview ();
		//console.log ('preview');
	}

	if (count_flag == true) {
		frame_count += 1;
	}

}

function init_particles () {

	incident_pts = [];
	static_pts = [];
	static_pg.background (0, 0, 0);
	incident_pg.clear ();
	static_num = int ($fx.rand () * 8 + 2);
	incident_num = 1000;
	k = $fx.rand () * 78 + 2;
	console.log ("Coulomb's Constant : k = " + k);

	for (let i = 0; i < incident_num; i++) {
		incident_px = width / 2;
		incident_py = 0;
		incident_vx = 0;
		incident_vy = 1;
		incident_mass = 2;
		incident_charge = $fx.rand () * 4 - 2;
		incident_col = color (0, 0, 100);
		incident_pts.push (new Particle (incident_px, incident_py, incident_vx, incident_vy, incident_mass, incident_charge, incident_col, 1));
	}

	for (let i = 0; i < static_num; i++) {
		static_px = $fx.rand () * width;
		static_py = $fx.rand () * height;
		static_vx = 0;
		static_vy = 0;
		static_mass = $fx.rand () * 30 + 10;
		tmp_rand = $fx.rand ();
		if (tmp_rand < 0.5) {
			static_charge = $fx.rand () * 20 + 20;
		} else {
			static_charge = $fx.rand () * (-20) -20;
		}
		static_col = color (0, 0, 80);
		static_pts.push (new Particle (static_px, static_py, static_vx, static_vy, static_mass, static_charge, static_col, 0));
	}

}

function Particle (x, y, vx, vy, mass, charge, col, flag) {

	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.mass = mass;
	this.charge = charge;
	this.col = col;
	this.flag = flag;

	let power = abs (charge);
	let radius = map (power, 20, 40, 1, 20);

	this.set_color = function (force) {

		let tmp_h = map (abs (force), 0, 0.01, 0, 360);

		if (tmp_h > 360) {
			tmp_h - 360;
		}

		let hue = tmp_h;
		let sat = map (abs (force), 0, 0.01, 40, 80);
		let bri = map (abs (force), 0, 0.01, 40, 80);

		this.col = color (hue, sat, bri);

	}

	this.apply_force = function (fx, fy) {

		this.vx += fx / this.mass;
		this.vy += fy / this.mass;

	}

	this.update = function () {

		if (flag == 1) {
			this.x += this.vx;
			this.y += this.vy;
		}

	}

	this.render = function () {

		if (flag == 1) {
			incident_pg.fill (this.col);
			incident_pg.noStroke ();
			incident_pg.ellipse (this.x, this.y, 1, 1);
		} else {
			static_pg.noFill ();
			static_pg.stroke (this.col);
			static_pg.strokeWeight (1);
			static_pg.ellipse (this.x, this.y, radius, radius);
		}

	}

}

function keyReleased () {

	if (key == 'p' || key == 'P') {
		loop_flag = !loop_flag;
		if (loop_flag == true) {
			noLoop ();
		} else {
			loop ();
		}
	}

	if (key == 'c' || key == 'C') {
		init_particles ();
	}

	if (key == 'f' || key == 'F') {
		var fs = fullscreen ();
		fullscreen (!fs);
	}

	if (key == 's' || key == 'S') {
		save ('sample_image.png');
	}

}
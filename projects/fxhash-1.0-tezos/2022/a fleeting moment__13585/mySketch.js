let sqr, pX, big, fxCol, mCol, inv, mode, img;
let brush = [];
let render = false;
let col = "888888-f94144-f3722c-f8961e-f9844a-f9c74f-90be6d-43aa8b-4d908e-577590-277da1".split("-").map(a=>"#"+a);

function getMode(v){
	if (v < 0.01) mode = "monolith";
	else if (v < 0.06) mode = "circuit";
	else if (v < 0.15) mode = "chunk";
	else if (v < 0.25) mode = "fracture";
	else if (v < 0.35) mode = "tinted";
	else if (v < 0.45) mode = "mosaic";
	else if (v < 0.5) mode = "digits";
	else mode = "organic";
	return mode;
}

function getColor(v){
	if (mode == "monolith") fxCol = "#3c763f";
	else fxCol = col[Math.floor(v * col.length)];
	return fxCol; 
}

function isInverse(v){
	if (mode == "monolith") inv = false; 
	else inv = v < 0.2 ? true : false;
	return inv;
}

function getRand(v){
	return fxrand() * v;
}

function getRandRange(a,b){
	return getRand(b - a) + a;
}

function setup() {
	windowResized();
}

function windowResized(){
	if (render == true) sqr = 8000;
	else sqr = Math.min(windowWidth, windowHeight);
	createCanvas(sqr,sqr);
	ellipseMode(CENTER);
	pX = sqr * 0.01;
	canvas.getContext("2d", { colorSpace: "display-p3" })
	img = createGraphics(sqr,sqr);
	mCol = color("#e1e2ce");

	window.$fxhashFeatures = {
		"Mode": getMode(fxrand()),
		"Highlight Color": getColor(fxrand()),
		"Inverted": isInverse(fxrand())
	}
	
	img.background((mode == "monolith") ?  mCol : 240);
	
	// create brushes
	brush = [];
	var c = color(fxCol);
	var numBrushes = getRandRange(5,50);
	for (let xx = 0; xx < numBrushes; xx++){
		var num = getRandRange(5,(mode == "digits") ? 15 : 50);
		brush[xx] = createGraphics(pX * getRandRange(1,50), pX * getRandRange(1,20));
		brush[xx].noStroke();
		for (let i = 0; i < num; i++){
			let clr;
			clr = (getRand(1.0) > 0.8) ? c : color(20);
	    clr.setAlpha(getRandRange(5,200));
			brush[xx].fill(clr);
			if (mode == "digits"){
				brush[xx].textSize(getRand(brush[xx].height));
				brush[xx].text(getRand(10000000), getRand(brush[xx].width), getRand(brush[xx].height));
			} else brush[xx].rect(getRand(brush[xx].width), getRand(brush[xx].height), getRand(brush[xx].width), pX * getRand((mode == "mosaic") ? brush[xx].height : 1.0));
		}
	}			
	
	// create vignette
	let rad = pX * 47.5;
	let m = sqr/2;
	img.fill(190);
	img.noStroke();
	for (let i = 0; i < 150000; i++)
	{
		let sz = getRand(1.0) * pX * 0.1;
		img.ellipse(m + (rad * cos(getRand(360))),m + (rad * sin(getRand(360))), sz, sz);
	}
	noLoop();
}

function draw() {
	
	for (let xx = 0; xx < brush.length; xx++){
		var num = getRandRange(25,500);
		var step = getRand(1.0);
		img.push();
		img.blendMode(OVERLAY);
		if (getRand(1.0) < 0.5 || mode == "monolith"){
			img.translate(sqr/2,sqr/2);
			img.rotate(radians(90));
			img.translate(sqr/-2,sqr/-2);
		}
		img.translate(getRand(width), getRand(height));
		for (let i = 0; i < num; i++){
			if (getRand(1.0) < 0.15 && mode == "fracture") img.rotate(radians(45));
			if (mode != "circuit" && mode != "digits") img.scale(getRandRange(0.5,1.5), getRandRange(0.25, mode == "chunk" ? 3.5 : 1.5));
			img.image(brush[xx],0,0);
			img.translate(0,step * pX);
		}
		img.pop();
	}
	
	// inverse feature
	if (inv == true) img.filter(INVERT);
	
	// tint mode
	img.blendMode(BURN);
	let c = color(fxCol);
	c.setAlpha(255);
	fill(c);
	if (mode == "tinted") img.rect(0,0,width,height);
	
	// frame
	img.blendMode(BLEND);
	img.noFill();
	if (inv == true) img.stroke(20);
	else img.stroke((mode == "monolith") ?  mCol : 240);
	img.strokeWeight(pX * 5);
	img.rect(0,0,width,height);
	
	img.stroke(75);
	img.strokeWeight(pX * 0.1);
	img.rect(pX * 2.5,pX * 2.5,pX * 95,pX * 95);

	// display final image
	image(img,0,0);

	// preview
	fxpreview();
	
	if (render == true){
		save(img, "fleeting_moment_render_8K.png");
		render = false;
	}
}

function keyPressed() {
  if (keyCode === 83) {
		loop();
		render = true;
		windowResized();
	}
}


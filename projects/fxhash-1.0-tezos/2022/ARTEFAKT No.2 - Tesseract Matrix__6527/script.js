//1.0-framed-feather

// Golden ratio
let C_GOLD_RATIO = (1+Math.sqrt(5))/2;


// The Scene
let s;


// The Blur Shader
// https://openprocessing.org/sketch/760546/
// let blurShader;

// function preload(){
// 	console.log('preload()',vertShadEr_blur,fragShadEr_blur);
// 	//blurShader = new p5.Shader(this._renderer, blurVert, blurFrag);
// 	//blurShader = loadShader('./base.vert', './blur.frag');
// 	//blurShader = loadShader(blurVert, blurFrag);
// 	blurShader = createShader(vertShadEr_blur,fragShadEr_blur);
// }

function setup(){
	console.log('setup');

	//let seed = random();
	let seed = fxrand();
	console.log('fxhash, seed', fxhash, seed);

	s = new Scene(seed);

	s.init();
	s.draw();
	//s.doRecord();
	fxpreview();

	console.log('features: ',window.$fxhashFeatures);
}

function draw() {
	// 
	console.log('draw()');
	s.draw();
}

function windowResized() {
	console.log('windowResized()');

	s.resize();
	s.render();
	s.draw();
}

function keyPressed(){
	console.log('keyPressed()',keyCode);

	if( keyCode == 'R'.charCodeAt(0) ){
		if( s.record == true ){
			s.record = false;
		}else{
			s.record = true;
		}
		console.log('starting screen capture recording');
	}else if( keyCode == 'S'.charCodeAt(0) ){
		frameRate(0);
	}
}

///////////////////


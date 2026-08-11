let EDITMODE = true;
let QUADCANVAS = false;
let disableDrawInterface = false;
let cargoArchivo = true;
let WEBGL_ON = false; //Algunas funcionan con esto otras no. //Si cambia esto cambia e
var dropzone;
document.addEventListener("keypress", documentOnKeyPressed, false);
var RM;
var img;
var interface;
var font;
let shtest;
let pgtest;
var p5jsdraw; 
//play a middle 'C' for the duration of an 8th note

let click_duration = 5000;
let click_lasttime = 0;
let first_click = false;
let gmixer;

//DesolatedLandManager
//ooxNM5jwVNtV7F2viGJ3Su9Temt5dhvtuhL3uma2fpgRAF5xAuz

let musicplaying = false;



//let musicscale;
//let synth;
let synth2;
let synth3;

//let loop;
let loop2;
let loop3;

let scale;
let prevNote;



function preload() {
	//setFxhashValues_noiseWorms();
	//setFxhashValues_minigame();
	//setFxhashValues_rxrpure();
	//setFxhashValues_degrade();
//	setFxhashValues_dblc();

	RM = new RenderManager();
	//p5jsdraw1 = new DesolatedLandManager();
	//p5jsdraw1 = new LerpQuadManager();

	//setFxhashValues_ride();
	//p5jsdraw1 = new RideManager();

	//setFxhashValues_alien();
	//p5jsdraw1 = new AlienManager();
	//p5jsdraw1 = new GlitchFlowerManager();
	//p5jsdraw1 = new GlitchFlowerManager2();

	//p5jsdraw1 = new HandsManager();


	//p5jsdraw1 = new GlitchFlowerManager();

	p5jsdraw1 = new CandeManager();
	//lowerfield
	//p5jsdraw1 = new FlowerField();
	//p5jsdraw1 = new Prueba();
	//RM.addP5draw(p5jsdraw1, 0);
	//RM.addShader("shaders/imageprocessing/edges.frag", 1, "edges.frag");
	//p5jsdraw1 = new PolarSequencerManager();
	//p5jsdraw1 = new FeedbackLimitManager();
	//p5jsdraw1 = new MosaicManager();
	//p5jsdraw1 = new JuninManager();
	//p5jsdraw1 = new ShadowPolyManager();
	//p5jsdraw1 = new VaginereitorManager();
	//p5jsdraw1 = new NoiseWormsManager();
	//p5jsdraw1 = new AudioExperimentManager();
	//setFxhashValues_minigame();
	//p5jsdraw1 = new MiniGameManager1();
	//p5jsdraw1 = new MiniMoonManager();
	//p5jsdraw1 = new ShadowPolyManager3();

	setFxhashValues_cande();
	RM.addP5draw(p5jsdraw1, 0);


	RM.addShader('shaders/imageprocessing/smoothstep.frag', 1, "sm");
	RM.addShader('shaders/imageprocessing/oldvideo.frag', 2, "oldvideo");


	//RM.addShader('shaders/imageprocessing/dblc.frag', 1, "dblc.frag"); Este va con el shadowpolymanager3

	//p5jsdraw1 = new GridManager();
	//p5jsdraw1 = new InstanceFractalManager();
	//lerpquad = new LerpQuadManager();
	//RM.addP5draw(InstaFractal, 0);
	
	//RM.addP5draw(p5jsdraw1, 0);


	font = loadFont('./font/chicamono.ttf');
	
	//pgtest = createGraphics(windowWidth, windowHeight, WEBGL);
	//img = loadImage('img/tz.png');
	//QUE PASE POR EL INDEX ASI DESPUES PUEDO CAMBIARLO CUANDO QUIERA PONERLE UN OBJT



//	RM.addShader('shaders/generative/paintexplotions_buffer1.frag', 0, "PE1.frag");
//	RM.addShader('shaders/generative/paintexplotions_buffer2.frag', 1, "PE2.frag");
	//RM.addShader('shaders/generative/livegen.frag', 0, "livegen.frag");


//	RM.addP5draw(p5jsdraw1, 1);
	//RM.addShader('shaders/imageprocessing/dblc.frag', 1, "dblc.frag");
	//RM.addShader('shaders/imageprocessing/vignette.frag', 2, "vignette.frag");
	//RM.addShader('shaders/generative/videosinte.frag', 0, "videosinte.frag");
	//RM.addShader('shaders/imageprocessing/lighting3d.frag', 1, "lighting3D.frag");
	//RM.addShader('shaders/generative/voronoiinvoroni.frag', 0, "voronoiinvoroni.frag");
	//RM.addShader('shaders/generative/feedbackpointer4.frag', 0, "fb.frag");

	//setFxhashValues_hippielava();
	
	//setFxhashValues_sinth();

	//VAPORWAVE 
	
	/*RM.addShader("shaders/generative/retrowave.frag", 0, "cyberfuji2020.frag");
	RM.addShader('shaders/imageprocessing/vhs.frag', 1, "vhs");
	RM.addShader('shaders/imageprocessing/rotatecolor.frag', 2, "rotatecolor");
	RM.addShader('shaders/imageprocessing/invert.frag', 3, "invert2");
	*/




	//RM.addShader("shaders/imageprocessing/feedback8.frag", 2, "fb");
	//RM.addShader("shaders/imageprocessing/edges.frag", 1, "edges.frag");

	//RM.addShader("shaders/generative/palos.frag", 0,"palos");
	//RM.addShader("shaders/imageprocessing/bloom.frag", 1, "bloom");
	//RM.addShader("shaders/imageprocessing/huerotate.frag", 2, "huerotate");
	//setFxhashValues_test();


	//RM.addShader("shaders/imageprocessing/huerotate.frag", 2, "huerotate.frag");
	//RM.addShader("shaders/generative/degradeofdegrade.frag", 0,"degrade.frag");
	//RM.addShader("shaders/imageprocessing/edges.frag", 1,"edges.frag");
	//RM.addShader('shaders/imageprocessing/displace.frag', 1, "displace.frag");
	//RM.addShader('shaders/generative/simplequads.frag', 0, "simplequads.frag");
	//RM.addShader('shaders/generative/feedbackpointer1.frag', 0, "FBpointer.frag");
	//RM.addShader('shaders/generative/klingon.frag', 1,"klingon.frag");
	//RM.addShader('shaders/generative/klingon.frag', 0);
	//RM.addShader('shaders/generative/dientes.frag', 0,"dientes.frag");
	//RM.addShader('shaders/generative/klingon.frag', 0, "klingon.frag");
	//RM.addShader('shaders/generative/circulo.frag', 0);
	
	//RM.addShader('shaders/generative/rxrpure.frag', 0,"rxrpure.frag");
	//RM.addShader('shaders/generative/rxrglitch2.frag', 0,"rxrglitch.frag");

	
	/*RM.addShader('shaders/generative/videosinte.frag', 0,"videosinte");
	RM.addShader('shaders/generative/starnest.frag', 1,"starnest");
	RM.addShader('shaders/blending/matrixiterations.frag', 2, "matrixiterations");
	RM.addShader('shaders/imageprocessing/displace.frag', 3, "displace");
	RM.addShader('shaders/imageprocessing/huerotate.frag', 4, "huerotate");
	RM.addShader('shaders/imageprocessing/lighting3d.frag', 5, "lighting3d");
	setFxhashValues_megaspace();*/


	//RM.addShader('shaders/blending/mix.frag', 2, "MIX.frag");
	
	//RM.addShader('shaders/imageprocessing/lighting3d.frag', 1, "L3D.frag");
	//RM.addShader('shaders/imageprocessing/flip.frag', 2, "flip.frag");
	//RM.addShader('shaders/imageprocessing/vignette2.frag', 1,"VIG2.frag");
	//RM.addShader('shaders/imageprocessing/invert.frag', 1, "invert.frag");
	//RM.addShader('shaders/imageprocessing/huerotate.frag', 1, "huerotate.frag");
	//RM.addShader('shaders/imageprocessing/feedback6.frag', 1,"feedback6.frag");
	//RM.activeRender = 0;
	//RM.addShader('shaders/imageprocessing/multiply.frag', 1,"multiply.frag");

	//RM.addShader('shaders/imageprocessing/flip.frag', 1,"flip.frag");
	//RM.addShader('shaders/imageprocessing/feedback1.frag', 1);

	//RM.addShader('shaders/imageprocessing/edges2.frag', 1);
	//RM.addShader('shaders/imageprocessing/feedback3.frag', 2);
	//RM.addShader('shaders/imageprocessing/edges.frag', 3);
	//RM.addShader('shaders/imageprocessing/displace.frag', 1,"displace.frag");
	//InstaFractal = new InstanceFractalManager();
	//fifulim = new Fifuli();
	//	shtest = loadShader('shaders/base.vert', 'shaders/generative/circulotest.frag');

	//shtest = loadShader('shaders/base.vert', 'shaders/generative/circulotest.frag');
	//	addShader();

	//loadJSONonStart("savefiles/savefile8.json");
	//loadJSONonStart("savefiles/quads2.json");
	//loadJSONonStart("savefiles/feedbackpointer3.json");
}
function setup() {
	

	noiseSeed(genR(1, 100));
	//setFxhashValues_megaspace();
	//setFxhashValues_feedbackpointer();


	if (QUADCANVAS) {
		createCanvas(windowHeight, windowHeight, WEBGL)
	} else {
		createCanvas(windowWidth, windowHeight, WEBGL) 
	}


	//createCanvas(windowWidth, windowHeight, WEBGL) 
	interface = new Interface(RM);



	if (p5jsdraw1) {
		p5jsdraw1.setup();
	}
	//p5jsdraw1.setImagePositions();

	frameRate(60)
	pixelDensity(1);
	//Esto es para que no tire error en FXHASH
	if (!disableDrawInterface) {
		textFont(font);
	}
	textFont(font);
	//textFont('Helvetica');
	//noCursor();
	//background(0)

	//RM.addP5draw(InstaFractal, 0);


	//RM.activeRender = 0;
	//console.log(STsh[4]);
	/*
	window.$fxhashFeatures = {
		"Frequency 1": uniforms_klingon.f1,
		"Frequency 2": uniforms_klingon.f2,
		"Frequency 3": uniforms_klingon.f3,
		"Frequency 4": uniforms_klingon.f4,
		"Fase R": uniforms_klingon.faser,
		"Fase G": uniforms_klingon.faseg,
		"Fase B": uniforms_klingon.faseb,
	}*/

	//setTimeout(RM.addShader('shaders/generative/circulo.frag', 0), 2000);

	dropzone = select('#defaultCanvas0');
	dropzone.dragOver(highlight);
	dropzone.dragLeave(unhighlight);
	dropzone.drop(processFile, unhighlight);
	textureMode(NORMAL);
	//interface.drawActive = !interface.drawActive;
}
function mousePressed() {
	first_click = true;
	/*uniforms_klingon.f1 = fxrand();
	uniforms_klingon.f2 = fxrand();
	uniforms_klingon.f3 = fxrand();
	uniforms_klingon.f4 = fxrand();
	uniforms_klingon.faser = fxrand();
	uniforms_klingon.faseg = fxrand();
	uniforms_klingon.faseb = fxrand();*/
	/*const synth = new Tone.PolySynth(Tone.Synth).toDestination();
	const now = Tone.now()
	
	synth.triggerAttack("D4", now);
	synth.triggerAttack("F4", now + 1.);
	synth.triggerAttack("A4", now + 1.0);
	synth.triggerAttack("C5", now + 1.0);
	synth.triggerAttack("E5", now + 1.0);
	*/
	
	/*if(millis() -  click_lasttime > click_duration || first_click){
		click_lasttime = millis();
		runAudio();	
		RM.objts[0].generate2();
		first_click = false;
	}*/
	
	//if(p5jsdraw1
	//p5jsdraw1.initAudio();
	/*osc.frequency.value = "C4";
			osc.frequency.rampTo("C2", 2);
			osc.start().stop("+8");*/

	//runAudio2();
	//runAudio3();


	if (uniforms_fxhash.cancion == 1) {
		runAudioAlien();
	} else if (uniforms_fxhash.cancion == 2) {
		runAudioAlien2();
	} else if (uniforms_fxhash.cancion == 3){
		runAudioAlien3();
	} 
	//runAudioAlien();
	
	//runAudioAlien3();
	//runAudioAlien2();
}
function mouseWheel(event) {
	//print(event.delta);
	//mw += 0.000001 * event.delta;
	//mw = constrain(mw, -0.002, 0.002);
}
function documentOnKeyPressed(event) {
	var keyCode = event.keyCode;
	let chrCode = keyCode - 48 * Math.floor(keyCode / 48);
	let chr = String.fromCharCode(keyCode);
//	console.log("BUTTON PRESSED" + chr);

	if(chr == 'r'){
		location.reload();
	}
	if (chr == 'b') {
		//RM.pgs[0].background(0);

		//RM.clean();
		//RM.activeRender = -1;
		//interface.cleanSliders();
	//	background(0);

	}

	if (!disableDrawInterface) {


		if (chr == 'y') {
			grilla.generate = true;
		}
		if (chr == 'r') {
			interface.randomizeValues();

		}
		if (chr == 's') {
			saveToJson();
		}
		if (chr == 'l') {

		}
		if (chr == 'a') {
			//console.log("A");
			//RM.addShader('shaders/generative/circulotest.frag', 0);
		}
		if (chr == 'd' && !disableDrawInterface) {
			interface.drawActive = !interface.drawActive;
		}

		if (chr == 'c') {
			//InstaFractal.rdmColors();
			//fifulim.randomizeValues();
		}

		if (chr == 'b') {
			RM.pgs[0].background(0);

			//RM.clean();
			RM.activeRender = -1;
			interface.cleanSliders();
			background(0);

		}
		//mw = constrain(mw, -0.002, 0.002);

		//console.log("SIZ " + RM.objts.length);

		for (var i = 0; i < 9; i++) {
			if (chr == str(i) && i <= RM.objts.length && i > 0) {
				RM.activeRender = i - 1;
//				console.log("Render active" + chr);
				interface.generateSliders();

				interface.drawActive = true;

			}
		}
	}
	for (var i = 0; i < 9; i++) {
		if (chr == str(i) && i <= RM.objts.length && i > 0) {
			RM.activeRender = i - 1;
		}
	}
}
function windowResized() {


	if (QUADCANVAS) {
		resizeCanvas(windowHeight, windowHeight);
	} else {
		resizeCanvas(windowWidth, windowHeight);
	}
	
	//lerpquad = new LerpQuadManager();
	//RM.addP5draw(lerpquad, 0);
	RM.resize();
	//location.reload();
}
function updateNONglobalUniforms() {
	//Pasar buffers por defecto 

	if (RM.objts.length > 0) {
		for (var i = 1; i < RM.objts.length; i++) {
			if (RM.objts[i] != null && RM.shorojb[i] == 0) {
				RM.objts[i].sh.setUniform("tx", RM.pgs[i - 1]);
			}
		}
	}
	

	//HARDCODING PARA FXHASH : 

	//No se que tan bien esta que esto lo haga todos los frames pero bueno. 
	for (let j = 0; j < RM.objts.length; j++) {
		if (RM.objts[j] != null) {
			for (let i = 0; i < RM.objts[j].localUniformsNames.length; i++) {
				for (let k = 0; k < Object.keys(uniforms_fxhash).length; k++) {
					if (RM.objts[j].localUniformsNames[i] == Object.keys(uniforms_fxhash)[k]) {
						RM.objts[j].sh.setUniform(RM.objts[j].localUniformsNames[i], Object.values(uniforms_fxhash)[k]);
					}

					for (let u = 0; u < interface.sliders.length; u++) {
						if (interface.sliders[u].name == Object.keys(uniforms_fxhash)[k]) {
							interface.sliders[u].isFxHashControlled = true;
							interface.sliders[u].value = Object.values(uniforms_fxhash)[k];
						}
					}
				}
			}
		}
	}
	
	
	//RM.setValue("circlesize",0.1);
	
	//RM.setValue("tx2",RM.pgs[0]);
	
	//RM.objts[2].sh.setUniform("tx2",RM.pgs[0]);
	/*for (let u = 0; u < interface.sliders.length; u++) {		
			interface.sliders[u].isFxHashControlled = true;
			interface.sliders[u].value = Object.values(uniforms_fxhash)[k];
	}*/
	//}
}
function draw() {
	
	updateNONglobalUniforms();
	translate(-width / 2, -height / 2, 0); //moves our drawing origin to the top left corner
	interface.drawActive = false;
	RM.draw();
	RM.update();
	//updateNONglobalUniforms();
	if (cargoArchivo) {
	//	RM.draw();
	}
	interface.update();
	if (!disableDrawInterface) {
		interface.draw();
		fill(255);
	}

	fill(255, 255);
	//textSize(30);
	//text("FPS " + getFrameRate().toFixed(2), 30, 30);
	for (let i = 0; i < touches.length; i++) {
		fill(255, 0, 0);
		ellipse(touches[i].x, touches[i].y, 10, 10);
	}
	//fill(255, 0, 0);
	//ellipse(touches[0].x, touches[0].y, 30, 30);
}
function highlight() {
	//console.log("HIGHLIGHT");
}
function unhighlight() {
	//console.log("UNHIGHLIGHT");
}
function processFile(file) {
	console.log("processfile");
	console.log(file.name);
	let coso;


	if (file.name.includes(".frag")) {


		/*if (RM.objts.length == 0) {
			RM.addShader(file.data, RM.activeRender + 1);
		} else {
		}*/
		interface.drawActive = false;
		interface.cleanSliders();
		console.log(file.data);
		RM.addShader(file.data, RM.activeRender + 1, file.name);

	} else if (file.name.includes(".json")) {
		loadJSONjp(file.data);
	}
}
function loadJSONjp(filedata) {

	RM.clean();
	let k = 0;

	let GlocalNames = [];
	let GlocalValues = [];

	for (let key in filedata) {
		if (filedata.hasOwnProperty(key)) {
			RM.addShader(filedata[key].dir, k, filedata[key].name);
			let localNames = [];
			let localValues = [];
			let l = 0;
			for (let [key2, value] of Object.entries(filedata[key])) {
				if (l != 0) {
					localNames.push(key2);
					localValues.push(value);
				}
				l++;
			}
			setTimeout(() => {
				if (!disableDrawInterface) {
					interface.cleanSliders();
				}
				for (let i = 0; i < RM.objts.length; i++) {
					for (let o = 0; o < RM.objts[i].localUniformsNames.length; o++) {

						RM.objts[i].localUniformsNames[o] = GlocalNames[i][o + 1];
						//Le pongo el +1 para que no me tome el name como uno de los parametros del shader.
						RM.objts[i].localUniformsValues[o] = GlocalValues[i][o + 1];
						/*console.log(RM.objts[i].localUniformsNames[o]);
						console.log(RM.objts[i].localUniformsValues[o]);
						console.log(GlocalNames[i][o]);
						console.log(GlocalValues[i][o]);*/
					}
				}
				console.log("TERMINO DE SETEAR LOS ARCHIVOS ")
				RM.activeRender = RM.objts.length - 1;
				cargoArchivo = true;
			}, 500);
			GlocalNames.push(localNames);
			GlocalValues.push(localValues);
		}
		k++;
	}
}
function loadJSONonStart(filedata) {



	let coso = loadJSON(filedata, () => {
		//	console.log(coso)

		loadJSONjp(coso);
	});
	//console.log(filedata);
}
function loadSaveFile(data) {
	console.log(data);
}
function saveToJson() {
	let json = {}
	for (var k = 0; k < RM.objts.length; k++) {
		json["box" + k] = {};
		json["box" + k].dir = RM.objts[k].dir;
		json["box" + k].name = RM.objts[k].name;
		for (var i = 0; i < RM.objts[k].localUniformsNames.length; i++) {
			json["box" + k][RM.objts[k].localUniformsNames[i]] = RM.objts[k].localUniformsValues[i];
		}
		if (json["box" + k]["data"]) {
			delete json["box" + k]["data"];
		}
	}
	saveJSON(json, 'savefile1.json');
}
function touchStarted() {
	return false;
}
function touchEnded() {
	return false;
}

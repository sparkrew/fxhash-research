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

//let scale;
let prevNote;

let init = false;
//setFxhash_cirline();
//setFxhash_luzYSombra();
let lerpmouse = 0.0;

let loopBeat;
let bassSynth;

//let jpsyncplayer;
window.onload = function() {
	//setFxhash_luzYSombra();
//	setFxhash_FBPointer();
	setFxhash_tommy();
	//preload();
	init = true;
	///doSomethingElse();

	//console.log("SOMETHING")
	/*window.$fxhashFeatures = {
		"Threads ": 0.2,
		"Nodes " : 45
	}*/
	//setFxhash_chalk();
	//console.table(window.$fxhashFeatures);
};
function preload() {

    RM = new RenderManager();
	
	p5jsdraw1 = new TommyManager();
	//console.log("D e e e e s");
	RM.addP5draw(p5jsdraw1, 0);


	if(genR(1) < .1){
		RM.addShader('shaders/imageprocessing/smoothstep.frag', RM.pgs.length, "smoothstep.frag");
	}

	if(genR(1) < .5){
		RM.addShader('shaders/imageprocessing/edges.frag', RM.pgs.length, "Edges.frag");
	}
	/*if(genR(1) < .1){
		RM.addShader('shaders/imageprocessing/rotatecolor.frag', RM.pgs.length, "Rotatecolor.frag");
	}*/
	
	if(genR(1) < .1){
		RM.addShader('shaders/imageprocessing/vhs.frag', RM.pgs.length, "vhs.frag");
	}



	font = loadFont('./font/ss.ttf');
	document.getElementById("loading").style.visibility = "hidden";

}
function setup() {
	

	noiseSeed(genR(1, 100));
	//setFxhashValues_megaspace();
	//setFxhashValues_feedbackpointer();
	document.addEventListener('contextmenu', event => event.preventDefault());
	if (QUADCANVAS) {
		createCanvas(windowHeight, windowHeight, WEBGL)
	} else {
		const cnv = createCanvas(windowWidth, windowHeight, WEBGL) 
		cnv.elt.addEventListener("contextmenu", (e) => e.preventDefault())
	}


	//createCanvas(windowWidth, windowHeight, WEBGL) 
	interface = new Interface(RM);
	if (p5jsdraw1) {
		p5jsdraw1.setup();
	}
	//p5jsdraw1.addShader("/imageprocessing/edges.frag",1,"edge");
	//this.RM.addShader("shaders/imageprocessing/edges.frag", 1, "GEN.frag");
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
	interface.drawActive = false;

	//loopBeat = new Tone.Loop(song,'4n');
	//bassSynth = new Tone.MembraneSynth().toMaster();
}
function mousePressed() {

	toggle();
	first_click = true;

	
	
	//runAudioAlien3();
	//runAudioAlien2();
	//p5jsdraw1.runAudio();
}
function song(time){
  
	console.log(time);
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
		//location.reload();
	}
	if (chr == 'b') {
		//RM.pgs[0].background(0);

		//RM.clean();
		//RM.activeRender = -1;
		//interface.cleanSliders();
	//	background(0);

	}
     if (chr =='s') {
    /*const elem = document.getElementById('defaultCanvas0');
    const saveBlob = (function() {
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      return function saveData(blob, fileName) {
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        w = windowWidth; h = windowHeight;
        resizeCanvas(w, h);
        gfx.resizeCanvas(w, h);
        elem.style.visibility = "visible";
        };
    }());
    elem.style.visibility = "hidden";
    w = 1920 * 2; h = 1080 * 2;
    resizeCanvas(w, h);
    gfx.resizeCanvas(w, h);
    draw();
    canvas.toBlob((blob) => {
      saveBlob(blob, `pointless-structure-${canvas.width}x${canvas.height}.png`);
    });*/
  };
	if (!disableDrawInterface) {


		if (chr == 'y') {
			grilla.generate = true;
		}
		if (chr == 'r') {
			//interface.randomizeValues();

		}
		if (chr == 'o') {
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
						if (interface.sliders[u].name == Object.keys(uniforms_fxhash)[k] || 
						interface.sliders[u].name == "autoposx" || 
						interface.sliders[u].name == "autoposy" || 
						interface.sliders[u].name == "lerpm") {
							interface.sliders[u].isFxHashControlled = true;
							interface.sliders[u].value = Object.values(uniforms_fxhash)[k];
						}
					}
				}
			}
		}
	}

	if(mouseIsPressed){
		lerpmouse+=0.01;
	}else{
		lerpmouse-=0.01;
	}
	lerpmouse = constrain(lerpmouse,0.0,1.0);
}
function draw() {

	/*push();

	scale(sin(millis() * 0.001) * 0.5 + 0.5, cos(millis() * 0.001) * 0.5 + 0.5);
	ellipse(mouseX, mouseY, 150, 150);
	pop();*/
	//scale(0.8);
	background(0);
	updateNONglobalUniforms();
	translate(-width / 2, -height / 2, 0); //moves our drawing origin to the top left corner
	//interface.drawActive = false;
	
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
	for (let i = 0; i < touches.length; i++) {
		fill(255, 0, 0);
		ellipse(touches[i].x, touches[i].y, 10, 10);
	}
	
	if(p5jsdraw1.jpsyncplayer.layers[0].loaded && 
		p5jsdraw1.jpsyncplayer.layers[1].loaded && 
		p5jsdraw1.jpsyncplayer.layers[2].loaded && 
		p5jsdraw1.jpsyncplayer.layers[3].loaded){


	}else{

		textSize(10);
		textAlign(CENTER,CENTER);
		text("LOADING SOUNDS",80,30);	

	}

	//EMPROLIJA ESTO SORETE : 
	/*let mv1 = meter1.getValue();
	mv1 = abs(mv1);
	mv1 = constrain(mv1,0.0,100);
	mv1 = map(mv1,0.0,100.,1.,0.);

	let mv2 = meter2.getValue();
	mv2 = abs(mv2);
	mv2 = constrain(mv2,0.0,100);
	mv2 = map(mv2,0.0,100.,1.,0.);

	let mv3 = meter3.getValue();
	mv3 = abs(mv3);
	mv3 = constrain(mv3,0.0,100);
	mv3 = map(mv3,0.0,100.,1.,0.);

	let mv4 = meter4.getValue();
	mv4 = abs(mv4);
	mv4 = constrain(mv4,0.0,100);
	mv4 = map(mv4,0.0,100.,1.,0.);

	//fill(255,0,0);
	//ellipse(width/2,height/2,mv1*100.,mv1*100.);
	
	p5jsdraw1.mvs[0] = mv1;
	p5jsdraw1.mvs[1] = mv2;
	p5jsdraw1.mvs[2] = mv3;
	p5jsdraw1.mvs[3] = mv4;*/
	
	fill(255,255);
	//textSize(30);
	//text("FPS "+frameRate(),30,30);
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


function toggle() {

	if(p5jsdraw1.jpsyncplayer.layers[0].loaded && 
		p5jsdraw1.jpsyncplayer.layers[1].loaded && 
		p5jsdraw1.jpsyncplayer.layers[2].loaded && 
		p5jsdraw1.jpsyncplayer.layers[3].loaded){
		if (Tone.Transport.state === "started") {
		Tone.Transport.pause();
		//toggleButton.innerText = "play";
		} else {
		Tone.start();
		Tone.Transport.start();
		//toggleButton.innerText = "pause";
		}
	}


  }
  
  function stop() {
	Tone.Transport.stop()
	//toggleButton.innerText = "play";
  }
let EDITMODE = true;


var uniforms_fxhash = [];

var dropzone; 
document.addEventListener("keypress", documentOnKeyPressed, false);

function mapr(_value,_low2, _high2) {
	let val = _low2 + (_high2 - _low2) * (_value - 0.) / (1.0 - 0.);
	//float val = 0.1;
	return val;
}



uniforms_fxhash.speed = fxrand();
uniforms_fxhash.flush = fxrand();
uniforms_fxhash.ite_scale = fxrand();
uniforms_fxhash.speed2 = fxrand();

var edgesA = "SSS"
if (fxrand() > 0.9) {
	uniforms_fxhash.effect_mix = 1.0;
	edgesA = "Activated";

} else {
	uniforms_fxhash.effect_mix = 0.0;
	edgesA = "Desactivated";
}
/*uniforms_fxhash.size = 0.0;
uniforms_fxhash.effect_exp = 0.3;
uniforms_fxhash.color_mix = 1.0;
uniforms_fxhash.sample_size = 0.33;
uniforms_fxhash.brightness = 0.76;
*/

let maxb = 255;
let minb = 0;



let stringPalette = "ice";

/*
window.$fxhashFeatures = {
	"Speed": uniforms_fxhash.speed.toFixed(2),
	"Speed 2": uniforms_fxhash.sc1.toFixed(2),
	"Flush  ": uniforms_fxhash.flush.toFixed(2) ,
	"Scale" : uniforms_fxhash.sc1.toFixed(2),
	"Edges": edgesA
}*/



let mw = 0.001;
document.addEventListener("keypress",  documentOnKeyPressed, false);

var RM;
var img;

var scx = 0.1;
var scy = 0.1;
var isRDMSC = true;


var InstaFractal;//Instances Fractal Object Manager
var fifulim; //Fifuli object manager
var grilla; // grilla manager
var interface;

var centerPower = 0.0;
var font;



let shtest;
let pgtest;


let disableDrawInterface = true;
let cargoArchivo = true;
function preload(){ 
	
	RM = new RenderManager();

	if (!disableDrawInterface) {
		font = loadFont('font/Chica Mono.ttf');
	}
	//pgtest = createGraphics(windowWidth, windowHeight, WEBGL);
	//img = loadImage('img/tz.png');
	//QUE PASE POR EL INDEX ASI DESPUES PUEDO CAMBIARLO CUANDO QUIERA PONERLE UN OBJT
	//RM.addShader('shaders/generative/random.frag', 0, "random.frag");
	//RM.addShader('shaders/generative/voronoiinvoroni.frag', 0, "voronoiinvoroni.frag");
	//RM.addShader('shaders/generative/infection.frag', 0, "infection.frag");

	//RM.addShader("shaders/imageprocessing/edges.frag", 1,"edges.frag");
	//RM.addShader('shaders/imageprocessing/displace.frag', 1, "displace.frag");
	//RM.addShader('shaders/generative/simplequads.frag', 0, "simplequads.frag");
	//RM.addShader('shaders/generative/rxrconchas.frag', 0, "rxrconchas.frag");
	//RM.addShader('shaders/generative/klingon.frag', 0,"klingon.frag");
	//RM.addShader('shaders/generative/klingon.frag', 0);
	//RM.addShader('shaders/generative/dientes.frag', 0,"dientes.frag");
	//RM.addShader('shaders/generative/klingon.frag', 0, "klingon.frag");
	//RM.addShader('shaders/generative/circulo.frag', 0);
	//RM.addShader('shaders/generative/circulo.frag', 0);


	//RM.addShader('shaders/imageprocessing/invert.frag', 1, "invert.frag");
	//RM.addShader('shaders/imageprocessing/huerotate.frag', 1, "huerotate.frag");
	//RM.addShader('shaders/imageprocessing/feedback6.frag', 1,"feedback6.frag");
	//RM.activeRender = 0;
	//RM.addShader('shaders/imageprocessing/multiply.frag', 1,"multiply.frag");
	//RM.addShader('shaders/imageprocessing/lighting3D.frag', 1, "lighting3D.frag");
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
	//loadJSONonStart("savefiles/quads5.json");
}
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL) // Shaders require WEBGL
	interface = new Interface(RM);
	
	pixelDensity(1);
	//Esto es para que no tire error en FXHASH
	if (!disableDrawInterface) {
		textFont(font);
	}
	//textFont('Helvetica');
	//noCursor();
	//background(0)
	
	//InstaFractal = new InstanceFractalManager();
	grilla = new GridManager2();
	RM.addP5draw(grilla, 0);
	//RM.addP5draw(InstaFractal, 0);
	//RM.addP5draw(fifulim, 0);

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
	
}


function mousePressed(){
	/*uniforms_klingon.f1 = fxrand();
	uniforms_klingon.f2 = fxrand();
	uniforms_klingon.f3 = fxrand();
	uniforms_klingon.f4 = fxrand();
	uniforms_klingon.faser = fxrand();
	uniforms_klingon.faseg = fxrand();
	uniforms_klingon.faseb = fxrand();*/
}
function mouseWheel(event) {
  print(event.delta);
  mw+=0.000001*event.delta;
  mw = constrain(mw,-0.002,0.002);
}
function documentOnKeyPressed(event) {
	var keyCode = event.keyCode;
	let chrCode = keyCode - 48 * Math.floor(keyCode / 48);
	let chr = String.fromCharCode(keyCode);
//	console.log("BUTTON PRESSED" + chr);


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
			//RM.pgs[0].background(0);

			RM.clean();
			RM.activeRender = -1;
			interface.cleanSliders();
			background(0);
		
		}
		mw = constrain(mw, -0.002, 0.002);

		//console.log("SIZ " + RM.objts.length);
	
		for (var i = 0; i < 9; i++) {
			if (chr == str(i) && i <= RM.objts.length  && i > 0) {
				RM.activeRender = i-1;
				console.log("Render active" + chr);
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
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	RM.resize();
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
			if (RM.objts[j] != null ) {
				for (let i = 0; i < RM.objts[j].localUniformsNames.length; i++) {
					for (let k = 0; k < Object.keys(uniforms_fxhash).length; k++) {
						if (RM.objts[j].localUniformsNames[i] == Object.keys(uniforms_fxhash)[k]) {
							RM.objts[j].sh.setUniform(RM.objts[j].localUniformsNames[i], Object.values(uniforms_fxhash)[k]);
							//if (interface.sliders[j] != null) {
								//interface.sliders[j].isFxHashControlled = true;
								//interface.sliders[j].value = Object.values(uniforms_fxhash)[k];
							//}
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
	/*for (let u = 0; u < interface.sliders.length; u++) {
		
			interface.sliders[u].isFxHashControlled = true;
			interface.sliders[u].value = Object.values(uniforms_fxhash)[k];
		
	}*/
	//}

	//interface.sliders[3].value = 0.3;
	//interface.sliders[3].isFxHashControlled = true;
	//console.log(interface.sliders[3].value);



}
function draw() {
	updateNONglobalUniforms();
	translate(-width / 2, -height / 2, 0); //moves our drawing origin to the top left corner
	/*if (mouseIsPressed) {
		centerPower += 0.01;
	} else {
		centerPower -= 0.01;
    }
	centerPower = constrain(centerPower, 0.0, 1.0);

	updateNONglobalUniforms();*/
	//RM.objts[1].sh.setUniform("tx", RM.pgs[0]);
	//	RM.objts[0].sh.setUniform("scalex",scx);
	//	RM.objts[0].sh.setUniform("scaley",scy);
	//  shs[1].setUniform("tx", pgs[0]);
	//shs[2].setUniform("tx", pgs[1]);	
	 /* RM.objts[1].sh.setUniform("tx",RM.pgs[0]);
	  RM.objts[2].sh.setUniform("tx",RM.pgs[1]);
	  RM.objts[3].sh.setUniform("tx",RM.pgs[2]);
	  RM.objts[4].sh.setUniform("tx",RM.pgs[3]);*/
	  //RM.objts[2].sh.setUniform("tx",RM.pgs[1]);
	//RM.shs[1].setUniform("tz",RM.pgs[0]);
	//RM.shs[2].setUniform("tz",RM.pgs[0]);

	//console.log(RM.objts[0].localUniformsValues);
	//RM.objts[0].sh.setUniform(RM.objts[0].localUniformsNames[0], RM.objts[0].localUniformsValues[0]);
	RM.draw();
	RM.update();
	updateNONglobalUniforms();
	if (cargoArchivo) {
		RM.draw();
	}


	interface.update();
	if (!disableDrawInterface) {
		interface.draw();
	}
	//interface.draw();
   /* RM.s = 20;
    RM.update();
	RM.draw();
	interface.update();
	interface.draw();


	/*fill(255);
	textSize(40);
	text("ASASD", mouseX-width/2, mouseY-height/2);*/

	
	/*
	if (cargoShader) {
		shtest.setUniform("resolution", [windowWidth, windowHeight])
		shtest.setUniform("time", millis() * .001)
		shtest.setUniform("mouse", [mouseX / width, mouseY / height])
		if (mouseIsPressed) {
			shtest.setUniform("mousePressed", 1)
		} else {
			shtest.setUniform("mousePressed", 0)
		}
		shader(shtest);
	}

	// rect gives us some geometry on the screen
	rect(0, 0, width, height);*/

	//pgtest.shader(shtest);
	//pgtest.rect(width, height, 0, 0);


	//image(pgtest, -width / 2, -height / 2, windowWidth, windowHeight);
	//ellipse(mouseX, mouseY, 10, 10);


	if (!disableDrawInterface) {
		fill(255);
		//ellipse(mouseX, mouseY, 10, 10);
	}
	//fill(255, 0, 0);
	//ellipse(width / 2, height / 2, 200 * fxrand(), 200 * fxrand());
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

/*
async function InitShaderAsync() {
	// This function returns a promise!
	let val = await runShader();
	//await someThingElse();
	//let val = await somethingElseElse();
	//return val;
}
function runShader() {
	shtest = loadShader('shaders/base.vert', 'shaders/generative/circulotest.frag', () => {
		console.log("termino de cargar");
		cargoShader = true;
		//	resolve;
	});
}*/
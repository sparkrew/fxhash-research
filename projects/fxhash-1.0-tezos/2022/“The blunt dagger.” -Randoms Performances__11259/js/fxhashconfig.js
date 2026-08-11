uniforms_fxhash = [];
u_fxhash = [];

function setFxhashValues_feedbackpointer(){	
	uniforms_fxhash.height = 0.73;
	uniforms_fxhash.light_dir_x = 0.5;
	uniforms_fxhash.light_dir_y = 0.35;
	uniforms_fxhash.light_dir_z = 0.10;
	uniforms_fxhash.ambient = 0.23;
	uniforms_fxhash.diffuse = 0.98;
	uniforms_fxhash.specular_red = 0.1;
	uniforms_fxhash.specular_green = 0.1;
	uniforms_fxhash.specular_blue = 0.1;
	uniforms_fxhash.specular_size = 0.95;
	uniforms_fxhash.circlesize = 0.15;
}
function setFxhashValues_megaspace(){
	

	//VIDEOSINTE
	uniforms_fxhash.v1 = 0.40;
	uniforms_fxhash.v1_amp = genR(0.7,1);
	uniforms_fxhash.v2 = genR(0.2, 0.4);
	uniforms_fxhash.v2_amp = 0.41;
	uniforms_fxhash.v3 = genR(0.14, 0.55);
	uniforms_fxhash.v3_amp = genR(0.1, 0.4);
	uniforms_fxhash.v4 =genR(0.1,0.7);
	uniforms_fxhash.v4_amp = genR(0.1, 0.4);
	uniforms_fxhash.faser = 0.53;
	uniforms_fxhash.faseg = 0.51;
	uniforms_fxhash.faseb = 0.45;
	uniforms_fxhash.speed = 0.00;
	uniforms_fxhash.e_force = 1.0;


	//STARNEST:
	uniforms_fxhash.iterations = 0.;
	uniforms_fxhash.formuparam = 0.50;
	uniforms_fxhash.volsteps = 0.53;
	uniforms_fxhash.stepsize = 0.30;
	uniforms_fxhash.zoom = 0.25;
	uniforms_fxhash.tile = 0.3;
	uniforms_fxhash.speedx = 0.52;
	uniforms_fxhash.speedy = 0.45;
	uniforms_fxhash.brightness = genR(0.17, 0.3);
	uniforms_fxhash.darkmatter = genR(0.63, 0.68);
	uniforms_fxhash.distfading = genR(0.417, 0.4285);
	uniforms_fxhash.saturation = 0.6;
	uniforms_fxhash.ma1 = 0.25;
	uniforms_fxhash.ma2 = 0.40;
	uniforms_fxhash.freq = genR(1.);

	uniforms_fxhash.rv2 = 0.0;
	


	//MATRIX ITERATIONS : 
	uniforms_fxhash.cnt = genR(0.4);
	uniforms_fxhash.zoom2 = 0.01;
	uniforms_fxhash.zoom2_index = 0.01;
	//uniforms_fxhash.freq = 0.30 ;
	uniforms_fxhash.speedrot = 0.5;
	uniforms_fxhash.fractalize = 0.5;
	uniforms_fxhash.fractalize_index = 0.1;
	uniforms_fxhash.speedx2 = 0.5;
	uniforms_fxhash.speedy2 = 0.0;

	uniforms_fxhash.texturewrap = 0.25;
	uniforms_fxhash.blendmode = 1.0;
	uniforms_fxhash.colormix = 1.0;
	uniforms_fxhash.freq = genR(1);

	/*	uniforms_fxhash.cnt = 0.37 ;
		uniforms_fxhash.zoom2 = 0.01 ;
		uniforms_fxhash.zoom2_index = 0.01 ;
		uniforms_fxhash.freq = 0.30 ;
		uniforms_fxhash.speedrot = 0.5 ;
		uniforms_fxhash.fractalize = 0.5 ;
		uniforms_fxhash.fractalize_index = 0.4 ;
		uniforms_fxhash.speedx2 = 0.5 ;
		uniforms_fxhash.speedy2 = 0.5;*/

	//uniforms_fxhash.texturewrap = 0.74 ; 
	//uniforms_fxhash.blendmode = 1.0 ;
	uniforms_fxhash.colormix = 0.68;

	//LIGHTINING3D
	uniforms_fxhash.height = genR(0.4, 0.6);
	uniforms_fxhash.light_dir_x = genR(1);
	uniforms_fxhash.light_dir_y = genR(1);
	uniforms_fxhash.light_dir_z = genR(1);
	uniforms_fxhash.ambient = genR(0.2, 0.5);
	uniforms_fxhash.diffuse = genR(0.2, 0.7);
	uniforms_fxhash.specular_red = 0.0;
	uniforms_fxhash.specular_green = 0.0;
	uniforms_fxhash.specular_blue = 0.0;
	uniforms_fxhash.specular_size = 0.0;
	//uniforms_fxhash.texturewrap = 0.74 ; 
	//uniforms_fxhash.blendmode = 1.0 ;
	uniforms_fxhash.colormix = 0.68;

	//DISPLACE
	uniforms_fxhash.offsetx = genR(0.35, 0.65);
	uniforms_fxhash.offsety = genR(0.35, 0.65);

	uniforms_fxhash.hue = genR(0.3, 1.0);
}
function setFxhashValues_noiseWorms(){
	
	uniforms_fxhash.maxamp = genR(150,350);
	uniforms_fxhash.rows = genR(5,8);
	uniforms_fxhash.cols = genR(2,5);
	uniforms_fxhash.noiseforce = genR(0.2,2.20);
	uniforms_fxhash.palette = 0;
	uniforms_fxhash.tpalette = 0;
	uniforms_fxhash.singlecolor = floor(genR(8));
	uniforms_fxhash.noshadow = 0;
	uniforms_fxhash.specialform = 0;
	uniforms_fxhash.mandala = 1; 
	//uniform_fxhash
	
	//sound
	uniforms_fxhash.dir = fxrand();
	
	let strColorMix= "No";
	if(genR(1) < 0.17){
		uniforms_fxhash.tpalette = 1;
		strColorMix= "Yes";
	}
	
	let strPalette = "Standart";
	//uniforms_fxhash.tpalette = 1;
	if(genR(1) < 0.18){
		if(genR(1) < 0.5){
			uniforms_fxhash.palette = 1;
			strPalette = "Black and white"
		}else{
			uniforms_fxhash.palette = 2;
			strPalette = "Special" 
		}
	}
	if(genR(1)< 0.9){
		uniforms_fxhash.noshadow	= 1;
	}
	if(genR(1) < 0.1){
		uniforms_fxhash.specialform = 1;
	}
	if(genR(1) < 0.1){
		uniforms_fxhash.mandala = floor(genR(2,4));
	}
	/**********************/
	
	let strRectangle = "No";
	
	if(uniforms_fxhash.specialform == 1){
		strRectangle = "Yes";
	}
	window.$fxhashFeatures = {
		"Palette": strPalette,
		"Rectangle": strRectangle,
		"Mandala": uniforms_fxhash.mandala,
		"Noise Chaos": uniforms_fxhash.noiseforce.toFixed(2),
		"X amplitud" : 	uniforms_fxhash.maxamp.toFixed(2),
		"Special Color Mix" :strColorMix
	}
}

function setFxhashValues_minigame(){
	
	
	uniforms_fxhash.meteormaxsize = 15;
	uniforms_fxhash.meteorminsize = 2;
	u_fxhash.maxite = 4;
	
	
	
	//SPACESHIP STATS : 
	
	//MOVE
	//SHOOT FREQUENCY
	
	
	u_fxhash.startf = 500;
	u_fxhash.startmov = 0.1;
	u_fxhash.meteorssize = 1;
	
	
}
function setFxhashValues_rxrpure(){
	uniforms_fxhash.sc = fxrand();
	uniforms_fxhash.sc2 = fxrand();
	uniforms_fxhash.seed = fxrand();
	uniforms_fxhash.r1 = fxrand();
	uniforms_fxhash.g1 = fxrand();
	uniforms_fxhash.b1 = fxrand();
	uniforms_fxhash.flush = fxrand();
}

function setFxhashValues_degrade(){
	
	uniforms_fxhash.r1 = fxrand();
	uniforms_fxhash.g1 = fxrand();
	uniforms_fxhash.b1 = fxrand();
	
	uniforms_fxhash.r2 = fxrand();
	uniforms_fxhash.g2 = fxrand();
	uniforms_fxhash.b2 = fxrand();
	
	uniforms_fxhash.r3 = fxrand();
	uniforms_fxhash.g3 = fxrand();
	uniforms_fxhash.b3 = fxrand();
	
	uniforms_fxhash.r4 = fxrand();
	uniforms_fxhash.g4 = fxrand();
	uniforms_fxhash.b4 = fxrand();
}
function setFxhashValues_dblc(){
	
	uniforms_fxhash.r1 = fxrand();
	uniforms_fxhash.r2 = fxrand();
	uniforms_fxhash.nube = fxrand();
	
	uniforms_fxhash.rdmtexture = fxrand();
	uniforms_fxhash.ispoly = fxrand();
	uniforms_fxhash.hasanimation = fxrand();
	let strnube = "no";
	let strpoly = "no";
	let strani = "no";
	if(uniforms_fxhash.nube < 0.03){
		strnube = "yes";
	}
	if(uniforms_fxhash.ispoly < 0.3){
	   strpoly = "yes";
	}
	if(uniforms_fxhash.hasanimation < 0.2){
		strani = "yes";
	}
	window.$fxhashFeatures = {
		"Radio 1 ": uniforms_fxhash.r1.toFixed(2),
		"Radio 2": uniforms_fxhash.r2.toFixed(2),
		"nube": strnube,
		"Noise Force": uniforms_fxhash.rdmtexture.toFixed(2),
		"Has polys" : 	strpoly,
		"Invert Animation": strani
	}
}
function setFxhashValues_hippielava() {

	uniforms_fxhash.f1 = fxrand();
	uniforms_fxhash.f2 = fxrand();
	uniforms_fxhash.f3 = fxrand();


	if (fxrand() < 0.8) {
		uniforms_fxhash.effect_mix = 0.0;
	} else {
		uniforms_fxhash.effect_mix = 1.0;
    }

	uniforms_fxhash.effect_exp = fxrand();
	uniforms_fxhash.color_mix = 1.0; 
	uniforms_fxhash.sample_size = fxrand();
	uniforms_fxhash.brightness = fxrand();
	uniforms_fxhash.hue = fxrand();
}

function setFxhashValues_alien() {

	uniforms_fxhash.cancion = floor(genR(3) + 1);
	uniforms_fxhash.planta1 = floor(genR(4) + 1);
	uniforms_fxhash.planta2 = floor(genR(2) + 1);
	uniforms_fxhash.marco = floor(genR(8));


	/*
	console.log("Plant 1 " + uniforms_fxhash.planta1);
	console.log("Plant 2 " + uniforms_fxhash.planta2);
	console.log("Song " + uniforms_fxhash.cancion);
	console.log("Marco " + uniforms_fxhash.marco);
	*/
	console.log("Song " + uniforms_fxhash.cancion);
	let strplanta1 = ["Mαr⍵il ༄ೃ°༄ ", "PΞρtφus ·˚ ༘", "Ro∈liμs ✧˚ · .", "∁rameαs ೄྀ࿐ ˊˎ-"];
	let strplanta2 = ["𒆜Ҟ i れ𒆜", "𒆜ℛ i h𒆜 ", "𒆜𝕋 i h𒆜"];


	window.$fxhashFeatures = {
		"Song": uniforms_fxhash.cancion,
		"Principal Plant": strplanta1[uniforms_fxhash.planta1-1],
		"Secondary Plant": strplanta2[uniforms_fxhash.planta2-1],
		"Picture Frame": uniforms_fxhash.marco,
	}
}

function setFxhashValues_ride() {

	uniforms_fxhash.whitebg = genR(1);
	uniforms_fxhash.bgtype = genR(1);
	uniforms_fxhash.mirrorx = genR(1);

	let minc = 50;

	uniforms_fxhash.r1 = genR(minc, 255);
	uniforms_fxhash.g1 = genR(minc, 255);
	uniforms_fxhash.b1 = genR(minc, 255);

	uniforms_fxhash.r2 = genR(minc, 255);
	uniforms_fxhash.g2 = genR(minc, 255);
	uniforms_fxhash.b2 = genR(minc, 255);


	uniforms_fxhash.alien = floor(genR(5)) + 1;

	uniforms_fxhash.weapon = floor(genR(6) + 1);
	let strwhite = "No";
	let strbgtype = "1";
	let strmirrorx = "Left";
	
	if (uniforms_fxhash.bgtype < 0.5) {
		strbgtype = "2";
	}

	if (uniforms_fxhash.mirrorx < 0.5) {
		strmirrorx = "Right";
	}
	window.$fxhashFeatures = {
		"Background type": strbgtype,
		"Orientation ": strmirrorx,
		"Color 1": "R:" + uniforms_fxhash.r1.toFixed(0) + " G:" + uniforms_fxhash.g1.toFixed(0) + " B:" + uniforms_fxhash.b1.toFixed(0),
		"Color 2": "R:" + uniforms_fxhash.r2.toFixed(0) + " G:" + uniforms_fxhash.g2.toFixed(0) + " B:" + uniforms_fxhash.b2.toFixed(0),
		"Alien": uniforms_fxhash.alien,
		"Weapon": uniforms_fxhash.weapon
	}



}

function setFxhashValues_test() {

	uniforms_fxhash.effect_mix = 1.0;
	uniforms_fxhash.color_mix = genR(0.4, 1.0);
}
function setFxhashValues_sinth() {
	uniforms_fxhash.height = fxrand();
	uniforms_fxhash.light_dir_x = 0.86;
	uniforms_fxhash.light_dir_y = .78;
	uniforms_fxhash.light_dir_z = .78;
	uniforms_fxhash.ambient = 0.4;
	uniforms_fxhash.diffuse = genR(0.0,0.2);
	uniforms_fxhash.specular_red = 1.0;
	uniforms_fxhash.specular_green = 0.2;
	uniforms_fxhash.specular_blue = 1.0;
	uniforms_fxhash.specular_size = 0.98;
	uniforms_fxhash.isinvert = 0.0;


	let strinvert = "true";
	if (genR(1.0) < 0.92) {
		uniforms_fxhash.isinvert = 1.0;
		strinvert = "false";
	} else {
		uniforms_fxhash.isinvert = 0.0;
		strinvert = "true";
    }
	uniforms_fxhash.sample  = floor(genR(2) + 1);
	
	window.$fxhashFeatures = {
		"Inverted colors": strinvert,
		"Sample": uniforms_fxhash.sample
	}
}

function setFxhashValues_cande() {
	uniforms_fxhash.min1 = 0.0;
	uniforms_fxhash.max1 = 0.51;

}
class RenderManager{
	//var cosos = [];
	
	constructor(){
		this.pgs = [];//ARRAY DE LOS PGRAPHICS
		//this.shs = []; //ARRAY DE LOS SHADERS
		this.objts = [];//ARRAY DE LOS OBJETOS
		this.shorojb = []; //ESTO ES PARA QUE SEPA SI TIPO TIENE QUE O ACTUALIZAR EL SHADER O EL OBJETO.
	
		this.s = 10;
		this.activeRender = 0;
	}
	
	clean() {

		this.pgs = [];//ARRAY DE LOS PGRAPHICS
		this.objts = [];//ARRAY DE LOS OBJETOS
		this.shorojb = []; //Array que determina si el objeto es un shader o no (?)
	}

	addShader(dir,index,_name){
		this.objts[index] = new ShaderManager(dir);
		this.objts[index].name = _name;
	//	this.objts[index].loadAllVariables();
		let auxpg = createGraphics(windowWidth, windowHeight, WEBGL);
		this.pgs.push(auxpg);	
		this.shorojb[index] = 0;

		if (index > this.activeRender) {
			this.activeRender = index;
		}
		
	}	
	addP5draw(obj,index){
		
		this.pgs[index] = createGraphics(windowWidth,windowHeight),WEBGL;
		this.objts[index] = obj;
		
		//var pg_aux = createGraphics(windowWidth, windowHeight, WEBGL);
		//pg_aux.translate(-windowWidth / 2, -windowHeight / 2);
		//pg_aux.textureMode(NORMAL);
		//this.pgs.push(pg_aux);
		this.shorojb[index] = 1;
		//console.log(this.objts[0]);

		if (index > this.activeRender) {
			this.activeRender = index;
		}
	}
	
	resize(){
		for (var i =0; i<this.pgs.length; i++){
			console.log("RISIZ "+i);
			this.pgs[i].resizeCanvas(windowWidth,windowHeight);
		}
	}

	draw(){	
		for(var i=0; i<this.pgs.length; i++){
			if (this.shorojb[i] == 1) {
				if (this.objts[i] != null) {
					this.objts[i].draw(this.pgs[i]);
				}
			} else if (this.shorojb[i] == 0) {
				if (this.objts[i].loaded) {
					this.pgs[i].shader(this.objts[i].sh);
				}
				this.pgs[i].rect(windowWidth, windowHeight,0,0);
			}
		}
		if (this.pgs.length > 0 && this.pgs[this.activeRender] != null) {
			//image(this.pgs[this.activeRender], -windowWidth / 2, -windowHeight / 2, windowWidth, windowHeight); 
			image(this.pgs[this.activeRender], 0,0, windowWidth, windowHeight); 	
		}
	}
	update(){
		for (var i =0; i<this.objts.length; i++){		
			if (this.shorojb[i] == 1) {
				if (this.objts[i] != null) {
					this.objts[i].update();
				}
			}else if(this.shorojb[i] == 0){
				this.objts[i].update(this.pgs[i]);
			}
		}
	}
}

class ShaderManager{
	constructor(dir) {
		this.loaded = false;

		if (!this.loaded) {
			this.localUniformsNames = [];
			this.localUniformsValues = [];
			this.dir = dir;

			this.name = dir;
			//pasarAarray();
			loadStrings(dir, (result) => {
				let localUniformsValues = [];
				let localUniformsNames = [];
				for (let i = 0; i < result.length; i++) {
					let nombreUniform;
					let words = result[i].split(' ');
					//localUniformsNames.push(words[2]);
					//localUniformsValues.push(random(1));

					if (result[i].includes("uniform") &&
						words[2] != "feedback" &&
						words[2] != "resolution" &&
						words[2] != "time" &&
						words[2] != "mouse" &&
						words[2] != "tx" &&
						words[2] != "float" &&
						words[2] != "mousePressed" ) {

						localUniformsNames.push(words[2]);
						localUniformsValues.push(random(1));

					}
					/*
					if (STsh[i].includes("uniform") &&
						(!STsh[i].includes("feedback") &&
							!STsh[i].includes("resolution") &&
							!STsh[i].includes("time") &&
							!STsh[i].includes("mouse") &&
							!STsh[i].includes("mousePressed") && 
							!STsh[i].includes("tx")

						)) {
						//console.log(STsh[i]);
						//let words = STsh[i].split(' ');
						localUniformsNames.push(words[2]);
						localUniformsValues.push(random(1));
					}
					*/
				}
				//console.log("TERMINO EL CALLBACK");
				this.localUniformsNames = localUniformsNames;
				this.localUniformsValues = localUniformsValues;
			});




			this.sh = loadShader('shaders/base.vert', this.dir, () => {
			//	console.log("Termino de cargar el shader");
				this.loaded = true;
			});
		}
	}


	loadAllVariables() {
		
		if (!this.loaded) {
			this.localUniformsNames = [];
			this.localUniformsValues = [];
			this.dir = dir;


			//pasarAarray();
			loadStrings(dir, (result) => {
				let localUniformsValues = [];
				let localUniformsNames = [];
				for (let i = 0; i < result.length; i++) {
					let nombreUniform;
					let words = result[i].split(' ');
					//localUniformsNames.push(words[2]);
					//localUniformsValues.push(random(1));
					
					if (result[i].includes("uniform") &&
						words[2] != "feedback" &&
						words[2] != "resolution" &&
						words[2] != "time" &&
						words[2] != "mouse" &&
						words[2] != "tx" &&
						words[2] != "float" &&
						words[2] != "mousePressed" ) {

						localUniformsNames.push(words[2]);
						localUniformsValues.push(random(1));

					}
					/*
					if (STsh[i].includes("uniform") &&
						(!STsh[i].includes("feedback") &&
							!STsh[i].includes("resolution") &&
							!STsh[i].includes("time") &&
							!STsh[i].includes("mouse") &&
							!STsh[i].includes("mousePressed") && 
							!STsh[i].includes("tx")

						)) {
						//console.log(STsh[i]);
						//let words = STsh[i].split(' ');
						localUniformsNames.push(words[2]);
						localUniformsValues.push(random(1));
					}
					*/
				}
				//console.log("TERMINO EL CALLBACK");
				this.localUniformsNames = localUniformsNames;
				this.localUniformsValues = localUniformsValues;
			});




			this.sh = loadShader('shaders/base.vert', this.dir, () => {
				console.log("Termino de cargar el shader");
				this.loaded = true;
			});
		}
	}






	update(_pg) {
		if (this.loaded) {
			this.sh.setUniform("feedback",_pg) 
			this.sh.setUniform("resolution", [width, height]) 
			this.sh.setUniform("time", millis()*.001) 
			this.sh.setUniform("mouse", [mouseX/width,mouseY/height])
			if(mouseIsPressed){
				this.sh.setUniform("mousePressed", 1);
				//console.log("mouseP");
			}else{
				this.sh.setUniform("mousePressed", 0);
				//console.log("mouseNOP");
			}
			//this.sh.setUniform("fafafa", 1);
			for (var i = 0; i < this.localUniformsNames.length; i++) {
				this.sh.setUniform(this.localUniformsNames[i], this.localUniformsValues[i]);
			}
		}
		/*if (this.localUniformsNames.length > 1) {
			for (var i = 0; i < this.localUniformsNames.length; i++) {
				this.sh.setUniform(this.localUniformsNames[i], this.localUniformsValues[i]);
			}
		} else {
			this.sh.setUniform("f1", 0.7);
			this.sh.setUniform("f2", 0.7);
			this.sh.setUniform("f3", 0.7);
			this.sh.setUniform("f4", 0.7);
			this.sh.setUniform("a4", 0.7);
			this.sh.setUniform("faser", 0.7);
			this.sh.setUniform("faseb", 0.7);
			this.sh.setUniform("faseg", 0.7);
        }*/
	}
}

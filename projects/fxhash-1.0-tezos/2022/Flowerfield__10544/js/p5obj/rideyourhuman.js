
class RideManager{
	//var cosos = [];

   

	constructor(){


		this.RM = new RenderManager();
		this.RM.addShader('shaders/generative/fondoride.frag', 0, "fondodesolated.frag");

		this.RM2 = new RenderManager();
		this.RM2.addShader('shaders/generative/f5.frag', 0, "f5.frag");



		this.name = "RideYourHuman";
		this.dir = "RideYourHuman";
		this.localUniformsNames = [];
		this.localUniformsValues = [];

        this.generate = true;

		let b = function (coso) {
			console.log(coso);
			console.log("dale gato");
		}


		this.imgmanagers = [];
		this.colorslayer = [];




		//this.alien = new imgManager(0, 0, "img/rideyourhuman/alien", 5, windowWidth, windowHeight); 
		this.boca = new imgManager(0, 0, "img/rideyourhuman/boca", 6, windowWidth, windowHeight); 
		this.brazo = new imgManager(0, 0, "img/rideyourhuman/brazo", 5, windowWidth, windowHeight); 
		this.cuerpo = new imgManager(0, 0, "img/rideyourhuman/cuerpo", 2, windowWidth, windowHeight); 
		this.cara = new imgManager(0, 0, "img/rideyourhuman/face", 6, windowWidth, windowHeight); 
		this.cabeza = new imgManager(0, 0, "img/rideyourhuman/head", 5, windowWidth, windowHeight); 
		this.mano = new imgManager(0, 0, "img/rideyourhuman/mano", 5, windowWidth, windowHeight); 
		//this.montana2 = new imgManager(genR(width), windowHeight * .5, "img/desolated/Mountain", 0, windowWidth, windowHeight, 0); 


		//HAND
		//this.loadVariation("img/rideyourhuman/hand/", 4, floor(genR(6)+1));
		this.loadVariation("img/rideyourhuman/hand/", 4, uniforms_fxhash.weapon);
		//Cuerpo
		let idxbody = floor(genR(2)) + 1;
		this.loadVariation("img/rideyourhuman/body/", idxbody + 6, idxbody);

	
		//CABEZA
		let idxhead = floor(genR(5)) + 1;
		if (idxhead == 1) {
			this.loadVariation("img/rideyourhuman/head/", 3, idxhead);
		} else {
			this.loadVariation("img/rideyourhuman/head/", 2, idxhead);
		}
		//Aliens
		//this.loadVariation("img/rideyourhuman/aliens/", 10,2);
		this.loadVariation("img/rideyourhuman/aliens/", 10, uniforms_fxhash.alien);
		//Bocas
		this.loadVariation("img/rideyourhuman/bocas/", 2, floor(genR(6)) + 1);

		//Brazos
		let idxbrazo = floor(genR(5)) + 1;
		if (idxbrazo == 1) {
			this.loadVariation("img/rideyourhuman/arm/", 2, idxbrazo);
		} else if (idxbrazo == 2) {
			this.loadVariation("img/rideyourhuman/arm/", 1, idxbrazo);
		} else if (idxbrazo == 3) {
			this.loadVariation("img/rideyourhuman/arm/", 3, idxbrazo);
		} else if (idxbrazo == 4) {
			this.loadVariation("img/rideyourhuman/arm/", 1, idxbrazo);
		} else if (idxbrazo == 5) {
			this.loadVariation("img/rideyourhuman/arm/", 2, idxbrazo);
		}

		

		//CARA
		this.cara = new imgManager(0, 0, "img/rideyourhuman/faces/", 6, windowWidth, windowHeight);
		this.imgmanagers.push(this.cara);

		let minc = 50;
		this.col1 = color(genR(minc, 255), genR(minc, 255), genR(minc, 255));
		this.col2 = color(genR(minc, 255), genR(minc, 255), genR(minc, 255));


		this.col1 = color(uniforms_fxhash.r1, uniforms_fxhash.g1, uniforms_fxhash.b1);
		this.col2 = color(uniforms_fxhash.r2, uniforms_fxhash.g2, uniforms_fxhash.b2);

		/*
		this.RM.objts[0].localUniformsValues[0] = red(col1) / 255;
		this.RM.objts[0].localUniformsValues[1] = green(col1) / 255;
		this.RM.objts[0].localUniformsValues[2] = blue(col1) / 255;

		this.RM.objts[0].localUniformsValues[3] = red(col2) / 255;
		this.RM.objts[0].localUniformsValues[4] = green(col2) / 255;
		this.RM.objts[0].localUniformsValues[5] = blue(col2) / 255;
		*/

		//this.RM2.objts[0].localUniformsValues[0] = 1.0;

		for (let i = 0; i < this.imgmanagers.length; i++) {
			let cf = lerpColor(this.col1, this.col2, genR(1));
			cf = lerpColor(cf, color(genR(100, 200)), genR(1));
			this.colorslayer.push(cf);
		}
	}
	loadVariation(dir, cnt, idx) {
		for (let i = 0; i < cnt; i++) {


			
			let fafa = new imgManager2(0, 0, dir + idx.toString() + "/" + (i + 1).toString(), windowWidth, windowHeight);


			this.imgmanagers.push(fafa);
		}
	}
	setup() {

		this.RM.objts[0].localUniformsValues[0] = red(this.col1) / 255;
		this.RM.objts[0].localUniformsValues[1] = green(this.col1) / 255;
		this.RM.objts[0].localUniformsValues[2] = blue(this.col1) / 255;

		this.RM.objts[0].localUniformsValues[3] = red(this.col2) / 255;
		this.RM.objts[0].localUniformsValues[4] = green(this.col2) / 255;
		this.RM.objts[0].localUniformsValues[5] = blue(this.col2) / 255;
		this.RM.objts[0].localUniformsValues[6] = genR(1);
		this.RM.objts[0].localUniformsValues[7] = uniforms_fxhash.bgtype;
		this.RM.objts[0].localUniformsValues[8] = uniforms_fxhash.whitebg;


		//uniforms_fxhash.whitebg
		for (let i = 0; i < this.imgmanagers.length; i++) {
			this.imgmanagers[i].setW(height);
			this.imgmanagers[i].setH(height);

			this.imgmanagers[i].setPos(width / 2 - height/2 ,
									  0 );
		}

    }
	
	draw(_ps) {
		push();
		translate(width / 2, height / 2);
		if (uniforms_fxhash.mirrorx < 0.5) {
			scale(-1, 1)
		} else {
			scale(1, 1)
        }

		translate(-width / 2, -height / 2);
		this.RM.update();
		this.RM.draw();
		for (let i = 0; i < this.imgmanagers.length; i++) {
			tint(this.colorslayer[i]);
		//	tint(255, 255);
			this.imgmanagers[i].display();
		}
		pop();
	
		//this.RM2.update();
		//this.RM2.draw();
		//this.RM2.draw();
    }
	update(){
	
	}
}




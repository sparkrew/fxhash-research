/*var uniforms_fxhash = [];

let percent = [];

percent.chulu = 3;
percent.stone = 20;
percent.mountains = 40;
percent.frontleft = 35;
percent.frontright = 35;
percent.frontcenter = 35;
percent.ruinleft = 35;
percent.ruinright = 35;
percent.bloodsky = 5;

uniforms_fxhash.chulu = fxrand() * 100.;
uniforms_fxhash.stone = fxrand() * 100.;
uniforms_fxhash.mountains = fxrand() * 100.;
uniforms_fxhash.frontleft = fxrand() * 100.;
uniforms_fxhash.frontright = fxrand() * 100.;
uniforms_fxhash.frontcenter = fxrand() * 100.;
uniforms_fxhash.ruinleft = fxrand() * 100.;
uniforms_fxhash.ruinright = fxrand() * 100.;
uniforms_fxhash.horizonte = Math.floor(genR(2));
uniforms_fxhash.bloodsky = fxrand() * 100.; 


uniforms_fxhash.floortype = Math.floor(genR(6));
uniforms_fxhash.warlike = Math.floor(genR(8));
uniforms_fxhash.frontleft = Math.floor(genR(10));
uniforms_fxhash.frontright = Math.floor(genR(7));*/

//console.log(uniforms_fxhash);

let strchulu = "No";
let strstone = "No";
let strmountains = "No";
let strgreenland = "No";
let strwarlike = "No"
let strfloor = "No";
let barricade = "No";
let strbloodsky = "No";
let strflag = "No";

function setFeatures() {
	if (uniforms_fxhash.chulu < percent.chulu) {
		strchulu = "Yes"
	}
	if (uniforms_fxhash.stone < percent.stone) {
		strstone = "Yes"
	}
	if (uniforms_fxhash.mountains < percent.mountains) {
		strmountains = "Yes"
	}
	if (uniforms_fxhash.floortype == 0 || uniforms_fxhash.floortype == 2 || uniforms_fxhash.floortype == 3) {
		strfloor = "Yes";
	}
	if (uniforms_fxhash.horizonte == 0) {
		strwarlike = "Yes";
	}
	if (uniforms_fxhash.warlike == 0) {
		barricade ="Yes"
	}
	if (uniforms_fxhash.bloodsky < percent.bloodsky) {
		strbloodsky = "Yes"
	}

	if (uniforms_fxhash.frontleft == 9 || uniforms_fxhash.frontright == 5) {
		strflag = "Yes"
	}

	console.log(uniforms_fxhash.warlike);
	console.log(uniforms_fxhash.floortype);
	window.$fxhashFeatures = {
		"Mr Chulu ": strchulu,
		"Mountains ": strmountains,
		"Magic Stone ": strstone,
		"Greenland": strfloor,
		"Remains of war": strwarlike,
		"Barricade ": barricade,
		"Blood Sky": strbloodsky,
		"Flag": strflag
		//"Pattern Scale": uniforms_fxhash.rxr_sc.toFixed(2),
		//"Palette": pal
	} 
}

//setFeatures();




/*
window.$fxhashFeatures = {
	"MR Chulu ": uniforms_fxhash.scx1_lines.toFixed(2),
	"Magic Stone": uniforms_fxhash.scy1_lines.toFixed(2),
	"Mountains ": uniforms_fxhash.rot_lines.toFixed(2),
	"Ruin Left": uniforms_fxhash.rxr_sc.toFixed(2),
	"Ruin Right": pal
} */


class DesolatedLandManager{
	//var cosos = [];

   

	constructor(){


		this.RM = new RenderManager();
		this.RM.addShader('shaders/generative/fondodesolated.frag', 0, "fondodesolated.frag");

		this.RM2 = new RenderManager();
		this.RM2.addShader('shaders/generative/delantedesolated.frag', 0, "delantedesolated.frag");

		this.layers = [];

		this.fondos = [];
		this.pisos = [];
		this.plantas = [];
		this.ruinas = [];
		this.montanas = [];


		this.name = "Desolated";
		this.dir = "Desolated";
		this.localUniformsNames = [];
		this.localUniformsValues = [];

        this.generate = true;




		//this.layers.push(new imgManager(0, windowHeight/4, "img/Fondo", 2,windowWidth,windowHeight));

		//this.layers.push(new imgManager(0, windowHeight-900, "img/Planta", 3));


		//for (let i = 0; i < 8; i++) {

		
		let b = function (coso) {
			console.log(coso);
			console.log("dale gato");
			//console.log(this.img.width);
		}

		let ruina;

		let cntruinas = 1;
		//let ranNums = shuffle([0, 1, 2, 3, 4, 5, 0, 1, 2, 3]);
		let ranNums = shuffle([0, 1, 2, 3, 4, 5,6,7,8,9,10,0]);
		let ranNums2 = shuffle([0, 1, 2]);

	
		for (var i = 0; i < cntruinas; i++) {
			ruina = new imgManager(windowWidth / 2, windowHeight / 2, "img/desolated/RuinCenter", 10, 0, 0, floor(genR(10)));
			this.ruinas.push(ruina);
		}

	



		let ranNums3 = shuffle([0, 1, 2, 3, 4, 5, 0]);
		/*let cntmontanas = 5;
		for (var i = 0; i < cntmontanas; i++) {
			let montana = new imgManager(windowWidth / 2, windowHeight / 2, "img/Mountain", 8, 0, 0, ranNums3[i]);
			this.montanas.push(montana);
		}*/
		this.montana = new imgManager(genR(width), windowHeight * .5, "img/desolated/Mountain", 0, windowWidth, windowHeight, 0); 
		this.montana2 = new imgManager(genR(width), windowHeight * .5, "img/desolated/Mountain", 0, windowWidth, windowHeight, 0); 

		this.chulu = new imgManager(genR(width), windowHeight * .5, "img/desolated/Chulu", 0, windowWidth, windowHeight, 0);
		let cntplantas = floor(genR(3));
		for (let i = 0; i < cntplantas; i++) {
			let planta = new imgManager(genR(windowWidth), 0.0, "img/desolated/Planta", 3, 0, 0, floor(genR(3)));
			this.plantas.push(planta);
		}
		this.horizonte = new imgManager(windowWidth, windowHeight, "img/desolated/Horizonte", 2, windowWidth, 0, uniforms_fxhash.horizonte);
		this.piso = new imgManager(windowWidth, windowHeight, "img/desolated/Piso", 6, windowWidth, windowHeight, uniforms_fxhash.floortype);
		this.stone = new imgManager(genR(width), windowHeight * .5, "img/desolated/Stone", 4, 0, 0, floor(genR(4)));
		this.chulu = new imgManager(genR(width), windowHeight * .5, "img/desolated/Chulu", 0, windowWidth, windowHeight, 0);
		this.objfront = new imgManager(genR(width), windowHeight * .5, "img/desolated/objfront", 1, 0, 0, floor(genR(1)));

		this.front = new imgManager(genR(width), windowHeight * .5, "img/desolated/FrontCenter", 8, 0, 0, uniforms_fxhash.warlike);
		this.frontleft = new imgManager(genR(width), windowHeight * .5, "img/desolated/FrontLeft", 10, 0, 0, uniforms_fxhash.frontleft);
		this.frontright = new imgManager(genR(width), windowHeight * .5, "img/desolated/FrontRight", 7, 0, 0, uniforms_fxhash.frontright);


		this.ruinright = new imgManager(genR(width), windowHeight * .5, "img/desolated/RuinLeft", 7, 0, 0, floor(genR(2)));
		this.ruinleft = new imgManager(genR(width), windowHeight * .5, "img/desolated/RuinRight", 7, 0, 0, floor(genR(2)));
	}
	
	setImagePositions() {
		let sepX = 0; 
		for (let i = 0; i < this.ruinas.length; i++) {
			/*if (i == 0) {
				this.ruinas[i].setPos(0, windowHeight - this.ruinas[i].imgH());
			} else {
				sepX += this.ruinas[i - 1].imgW()+genR(200,400);
				this.ruinas[i].setPos(sepX, windowHeight - this.ruinas[i].imgH());
				this.ruinas[i].setW(this.ruinas[i].imgW());
				this.ruinas[i].setH(this.ruinas[i].imgH());
            }*/
			this.ruinas[i].setPos(genR(windowWidth*1/8,windowWidth*7/8), windowHeight - this.ruinas[i].imgH());
		}

		for (let i = 0; i < this.plantas.length; i++) {
			this.plantas[i].setPos(genR(windowWidth), windowHeight - this.plantas[i].imgH());
		}

		this.stone.setPos(genR(windowWidth), windowHeight - this.stone.imgH());
		this.front.setW(this.front.imgW());
		this.front.setH(this.front.imgH() + 30);
		this.front.setPos(genR(this.front.imgW(), windowWidth - this.front.imgW()), windowHeight - this.front.imgH());
		this.objfront.setW(this.objfront.imgW());
		this.objfront.setH(this.objfront.imgH());
		this.objfront.setPos(genR(windowWidth*1/8,windowWidth*7/8), windowHeight - this.objfront.imgH()+50);
		this.frontleft.setPos(0, windowHeight - this.frontleft.imgH());
		this.frontright.setPos(windowWidth - this.frontright.imgW() + 50, windowHeight - this.frontright.imgH() + 50);

		this.ruinright.setPos(-50, windowHeight - this.ruinright.imgH());
		this.ruinleft.setPos(windowWidth - this.ruinleft.imgW() + 50, windowHeight - this.ruinleft.imgH() + 50);

		//console.log(this.piso);
		this.piso.setPos(0, 100);


		this.montana.setW(windowWidth * .51);
		this.montana.setH(windowHeight * .5);
		this.montana2.setW(windowWidth * .51);
		this.montana2.setH(windowHeight * .5);

		let moffsety = 100;
		this.montana.setPos(-windowWidth * .01, windowHeight - this.montana.imgH() - moffsety);
		this.montana2.setPos(windowWidth * .5 + windowWidth * .000, windowHeight - this.montana2.imgH() - moffsety);

		this.horizonte.setPos(0, windowHeight - this.horizonte.imgH() - 20);

		this.chulu
		this.chulu
		this.chulu.setPos(0, 120);
		//setTimeout(() => {
		this.RM.objts[0].localUniformsValues[0] = genR(1);


		if (uniforms_fxhash.bloodsky < percent.bloodsky) {
			this.RM.objts[0].localUniformsValues[1] = 1.0;
			this.RM2.objts[0].localUniformsValues[0] = 1.0;
		} else {
			this.RM.objts[0].localUniformsValues[1] = 0.0;
			this.RM2.objts[0].localUniformsValues[0] = 0.0;

        }

		//}, 50);
    }
	
	draw(_ps) {

		/*image(this.fondos[this.fondoindex],0,0,width,height);
		image(this.pisos[this.pisoindex],0,0, width, height);
		image(this.plantas[this.plantasindex],0,0, width, height);
		image(this.ruinas[this.ruinasindex],0,0, width, height);
*/


		this.RM.update();
		this.RM.draw();

		if (uniforms_fxhash.bloodsky < percent.bloodsky) {
			tint(255, 150, 150);
		} 
		if (uniforms_fxhash.mountains < percent.mountains) {
			this.montana.display();
			this.montana2.display();
		}

		this.horizonte.display();

		if (uniforms_fxhash.chulu < percent.chulu) {
			this.chulu.display();
        }
		
		for (let i = 0; i < this.ruinas.length; i++) {
			this.ruinas[i].display();
		}

		if (uniforms_fxhash.ruinleft < percent.ruinleft) {
			this.ruinleft.display();
		}
		if (uniforms_fxhash.ruinright < percent.ruinright) {
			this.ruinright.display();
		}

		
		for (let i = 0; i < this.plantas.length; i++) {
			this.plantas[i].display();
		}

		if (uniforms_fxhash.stone < percent.stone) {
			this.stone.display();
		}
		
		this.piso.display();
		this.RM2.update();
		this.RM2.draw();

		if (uniforms_fxhash.frontleft < percent.frontleft) {
			this.frontleft.display();
		}
		if (uniforms_fxhash.frontright < percent.frontright) {
			this.frontright.display();
		}
		//if (uniforms_fxhash.frontcenter < percent.frontcenter) {
		this.front.display();
		//}

		if (uniforms_fxhash.wheel < percent.wheel) {
			//this.objfront.display();
		}
		//fill(genR(255), genR(255), genR(255));
		//ellipse(genR(width), genR(height), genR(10, 20), genR(10, 20));
    }
	update(){
	
	}
}




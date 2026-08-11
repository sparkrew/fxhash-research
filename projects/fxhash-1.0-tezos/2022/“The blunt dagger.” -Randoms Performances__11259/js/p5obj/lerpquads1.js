
class LerpQuadManager{
	//var cosos = [];
	constructor(){
		this.lerpquads = [];
		//maxpasadas = 9;
		this.name = "LerpQuad";
		this.dir = "lerpQuad";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;

	//	this.RM2 = new RenderManager();
	//	this.RM2.addShader('shaders/generative/fondolerparty2.frag', 0, "fondolerparty2.frag");

		this.RM = new RenderManager();
		this.RM.addShader('shaders/generative/f1.frag', 0, "FondoParty.frag");

		this.RM2 = new RenderManager();
		this.RM2.addShader('shaders/generative/f2.frag', 0, "DelanteParty.frag");


		let cnt = genR(20,70);
		//let c1 = color(uniforms_fxhash.r1, uniforms_fxhash.g1, uniforms_fxhash.b1);
		//let c2 = color(uniforms_fxhash.r2, uniforms_fxhash.g2, uniforms_fxhash.b2);

		
	
	 	this.c1 = color(genR(255), genR(255), genR(255));
		this.c2 = color(genR(255), genR(255), genR(255));


		//console.log(palet.c1);
		let palet = getFromPalette();
		
		this.c1 = palet.c1;
		this.c2 = palet.c2;
		console.log(this.c1);
		//console.log(this.c2);


		

		/*setTimeout(() => {
			RM.objts[0].sh.setUniform("r1", 1.0);
			RM.objts[0].sh.setUniform("g1", 1.0);
			RM.objts[0].sh.setUniform("b1", 1.0);
			RM.objts[0].sh.setUniform("r2", 0.0);
			RM.objts[0].sh.setUniform("g2", 0.0);
			RM.objts[0].sh.setUniform("b3", 0.0);
		}, 500);*/
	//	c1 = color(255);
		//c2 = color(0);



			for (let i = 0; i < cnt; i++) {
				let index = map(i, 0, cnt - 1, 0, 1);
				let a = index * TWO_PI;

				let xx = windowWidth * .5;
				let x1 = xx + sin(a * genR(1, 2)) * genR(50);
					// x1 = windowWidth * .5 + genR(-50,50);
				let x2 = x1 + sin(a + index * TWO_PI) * 600;
				x2 = genR(windowWidth);

				let y1 = map(i, 0, cnt - 1, windowHeight * 1 / 10, windowHeight*9/10);
				let y2 = y1+genR(20);
				let s1 = genR(50, 80) + sin(a * genR(1, 8)) * genR(20);
				let s2 = genR(2, 5) + sin(a * genR(1, 8)) * genR(20);





			//	noStroke();
				let c1_1 = this.c1;
				let c1_2 = this.c2;
				let fase = 0;

				if (i % 2 == 0) {
					 c1_1 = this.c2;
					 c1_2 = this.c1;
			
					fase = PI;
				} else {
					c1_1 = this.c1;
					c1_2 = this.c2;
					fase = 0;
			
				}
			//	c1_1 = lerpColor(this.c1, this.c2, sin(a *15 )*.5+.5);
			//	c1_2 = lerpColor(this.c1, this.c2, sin(a  *15+PI)*.5+.5);
				this.lerpquads.push(new LerpQuads(x1, x2, y1, y2, c1_1, c1_2, s1, s2, 30, fase));
			//	this.lerpquads.push(new LerpQuads(x1, windowWidth - x2, y1, y2, c1_1, c1_2, s1, s2, 30, fase));
			}
		
	}
	draw(_ps) {
		background(255, 255, 220);



		setTimeout(() => {


			this.RM.objts[0].localUniformsValues[0] = red(this.c1)/255;
			this.RM.objts[0].localUniformsValues[1] = green(this.c1) / 255;
			this.RM.objts[0].localUniformsValues[2] = blue(this.c1) / 255;
			this.RM.objts[0].localUniformsValues[3] = red(this.c2) / 255;
			this.RM.objts[0].localUniformsValues[4] = green(this.c2) / 255;
			this.RM.objts[0].localUniformsValues[5] = blue(this.c2) / 255;
			/*this.RM.objts[0].sh.setUniform("r1", 1.0);
			this.RM.objts[0].sh.setUniform("g1", 1.0);
			this.RM.objts[0].sh.setUniform("b1", 1.0);
			this.RM.objts[0].sh.setUniform("r2", 0.0);
			this.RM.objts[0].sh.setUniform("g2", 0.0);
			this.RM.objts[0].sh.setUniform("b3", 0.0);*/
			//console.log(this.RM.objts[0]);
		}, 50);

		this.RM.update();
		this.RM.draw();

		rectMode(CORNER);
		let ms = 25;
		noStroke();
		fill(200, 200, 100);

		rectMode(CENTER);
		for (let i = 0; i < this.lerpquads.length; i++) {
			this.lerpquads[i].display();
		}

		for (let i = 0; i < this.lerpquads.length; i++) {

			let a = map(i, 0, this.lerpquads.length - 1, 0, TWO_PI);
			let x1 = this.lerpquads[i].x1 + sin(millis() * .0001+a*2.) * 50;

			let y1 = this.lerpquads[i].y1;

			let x2 = lerp(this.lerpquads[i].x1, this.lerpquads[i].x2orig, sin(millis()*0.000025+a*15) * 0.3 + .7);


			this.lerpquads[i].setPos(x1,
				y1,
				x2,
				this.lerpquads[i].y2);


		}
		this.RM2.update();
		this.RM2.draw();
    }
	update(){
	
	}
}
class LerpQuads {

	constructor(x1, x2, y1, y2, c1, c2, s1, s2,cnt,_fase) {
		this.quads = [];


		this.cnt = cnt;
		this.fase = _fase;
		let f = 0.0;
		this.freq = genR(6);

		this.x1 = x1;
		this.x2 = x2;

		this.x2orig = x2;
		this.y1 = y1;
		this.y2 = y2;


		let amp = genR(5,30);
		for (let i = 0; i < cnt; i++) {

			let index = map(i, 0, cnt - 1, 0, 1);
			let xx = map(i, 0, cnt - 1, x1, x2);
			let yy = map(i, 0, cnt - 1, y1, y2);
			let cf = lerpColor(c1, c2, sin(index * TWO_PI*1.5)*.5+.5);
			let s = map(i, 0, cnt - 1, s1, s2);


			cf.setAlpha(220);


			this.quads.push(new LQuad(xx, yy, cf, s, i, cnt, this.fase,this.freq,amp));
        }
	}

	display(pg) {
	
	

	//	pg.fill(255, 0, 0);
		//pg.ellipse(mouseX, mouseY,80, 80);
		for (let i = 0; i < this.quads.length; i++) {
			this.quads[i].display();
        }
	}

	setPos(x1, y1, x2, y2) {
		for (let i = 0; i < this.quads.length; i++) {
			let xx = map(i, 0, this.quads.length - 1, x1, x2);
			let yy = map(i, 0, this.quads.length - 1, y1, y2);
			this.quads[i].setPos(xx, yy);
		}
	}

}
class LQuad {

	constructor(x1, y1, c1, s1,index,cnt,fase,freq,amp) {
		this.x = x1;
		this.y = y1;
		this.c1 = c1;
		this.s1 = s1;
		this.index = index;
		this.cnt = cnt;
		this.freq = freq;
		this.fase = fase;
		this.n = 0.0;
		this.amp = amp;

		this.lx = x1;
		this.ly = y1;
    }

   display(pg) {
	   this.n += genR(-0.1, 0.1);
	   let angle = map(this.index, 0, this.cnt - 1, 0, this.freq);
	   let distm = dist(mouseX, mouseY, this.x1, this.y1);
	   let md = map(mouseX, 0, width, 0, -PI*2.);
	   let sf = map(sin(millis() * 0.00123 + angle + this.fase+md), -1, 1,0 , this.s1);
	   sf = this.s1;
	   noStroke();
	   fill(lerpColor(this.c1, color(255, 255, 220), 0.2));


	   if (dist(mouseX, mouseY, this.x1, this.y1) < 20) {



		//   this.lx = lerp(this.lx, mouseX, 0.8);
		//   this.ly = lerp(this.ly, mouseY, 0.8);
		 //  console.log("sobre ese circulo");

	   } else {
		  // this.lx = lerp(this.x1, this.origx, 0.2);
		   //this.ly = lerp(this.y1, this.origy, 0.2);
       }
	   /*
	   if (abs(mouseX - this.lx) < 150) {
		   this.lx = lerp(this.lx, mouseX, 0.001);
	   } else {
		   this.lx = lerp(this.x, this.lx, 0.2);
	   }

	   if (abs(mouseY - this.ly) < 150) {
		   this.ly = lerp(this.ly, mouseY, 0.001);
	   } else {
		   this.ly = lerp(this.y, this.ly, 0.2);
	   }*/

	   this.ly = this.y;
	   this.lx = this.x;
	   push();

	   translate(this.lx, this.ly + sin(angle * 4. + millis() * 0.0003) * this.amp + this.amp);
	   fill(lerpColor(this.c1, color(255, 255, 220), 0.2));

		ellipse(0, 0, sf, sf);
	 //  rect(0, 0, sf, sf);
	  // triangle(0, -sf, sf, sf, -sf, sf);
	   pop();
   }
	setPos(x,y) {
		this.x = x;
		this.y = y;
    }
}
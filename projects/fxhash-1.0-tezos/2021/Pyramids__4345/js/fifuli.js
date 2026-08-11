class Fifuli {
	//var cosos = [];

	constructor() {

		/*this.alpha = random(255);
		this.col1 = color(random(255), random(255), random(255), alpha);
		this.col2 = color(random(255), random(255), random(255), alpha);
		this.col1.setAlpha(this.alpha);
		this.col2.setAlpha(this.alpha);
		this.size = random(10, 30);
		this.maxamp = random(30, 500);
		this.sizeSpeed = random(1, 20);
		this.ampspeed = random(1, 2);
		this.circularSpeed = random(-5, 5);
		this.cantidadPuntas = random(3, 10);
		this.cantidadPolys = random(1, 20);
		this.alphaBorder = random(255);
		this.borderSize = random(1, 10);*/

		this.randomizeValues();

	}

	resize() {
		/*for (var i =0; i<this.pgs.length; i++){
			console.log("RISIZ "+i);
			this.pgs[i].resizeCanvas(windowWidth,windowHeight);
		}*/
	}

	randomizeValues() {
	//	this.alpha = random(50, 255);
		this.alpha = 255;
		this.alphaBorder = random(255);
		this.col1 = color(random(255), random(255), random(255), alpha);
		this.col2 = color(random(255), random(255), random(255), alpha);
		this.col1.setAlpha(this.alpha);
		this.col2.setAlpha(this.alpha);
		this.size = random(10, 30);
		this.maxamp = random(40,height/4);
		this.sizeSpeed = random(1, 20);
		this.ampspeed = random(1, 2);
		this.circularSpeed = random(-5, 5);
		this.cantidadPuntas = random(3, 7);
		//this.cantidadPuntas = 4;
		this.cantidadPolys = random(4, 10);
		//this.cantidadPolys = 50;
		//this.cantidadPolys = 1;
		//this.alphaBorder = random(255);
		this.borderSize = random(1, 10);
		this.isBorder = true;
	}
	polygon(_ps,x, y, radius, npoints, fase) {
		let angle = TWO_PI / npoints;
		_ps.beginShape();
		for (let a = 0; a < TWO_PI; a += angle) {
			let sx = x + cos(a + fase) * radius;
			let sy = y + sin(a + fase) * radius;
			_ps.vertex(sx, sy);
		}
		_ps.endShape(CLOSE);
	}




	draw(_ps){	
	//	_ps.blendMode(REPLACE);

		//_ps.fill(200, 100, 255);
		//_ps.ellipse(mouseX, mouseY, 150, 150);
		//_ps.background(0);
		//_ps.blendMode(REPLACE);
		//_ps.fill(0, 255);
	//	_ps.rect(-width / 2, -height / 2, width, height);
		if (mouseIsPressed) {
			//console.log("ASADASD");
			var T = millis() * 0.001;

			var Mx = mouseX;
			var My = mouseY;

			var cnt = floor(this.cantidadPolys);
			for (var i = 0; i < cnt; i++) {
				var a = map(i, 0.0, cnt, 0.0, PI * 2.0);
				//a = millis()*0.01;
				a += this.circularSpeed * T;
				var xx = Math.sin(a) * (sin(T * this.ampspeed) * this.maxamp + this.maxamp) + Mx;
				//xx = i*50+_data.x;

				var yy = Math.cos(a) * (sin(T * this.ampspeed) * this.maxamp + this.maxamp) + My;
				//yy = i*50+_data.y;

				//strokeWeight(linesiz);

				//stroke(lerpColor(_data.bc1,_data.bc2,sin(_data.t)*0.5+.5));
				//noStroke();
				//fill(lerpColor(_data.c1,_data.c2,(sin(_data.t)*0.5+.5)*i%2    ));

				var colf = color(lerpColor(this.col1, this.col2, sin(T) * 0.5 + .5));

				var colf2 = color(lerpColor(this.col1, this.col2, sin(T) * 0.5 + .5));
				if (i % 2 == 0) {
					colf = color(lerpColor(this.col1, this.col2, sin(T + millis() * 0.01) * 0.5 + .5));
					colf2 = color(lerpColor(this.col2, this.col1, sin(T + millis() * 0.01) * 0.5 + .5));
				} else {
					colf = color(lerpColor(this.col2, this.col1, sin(T + millis() * 0.01) * 0.5 + .5));
					colf2 = color(lerpColor(this.col1, this.col2, sin(T + millis() * 0.01) * 0.5 + .5));
				}

				colf2.setAlpha(this.alphaBorder);
				

				_ps.strokeWeight(this.borderSize);
				if (this.isBorder) {
					_ps.stroke(colf2);
				} else {
					_ps.noStroke();
				}
				_ps.noStroke();
				colf.setAlpha(this.alpha);
				_ps.fill(colf);

				/*if(i%2 == 0){
					fill(0,alfa1);
				}else{
					fill(255,alfa1);
				}*/
				//ellipse(xx,yy,sin(_data.t*_data.sp)*_data.s+_data.s*2,sin(_data.t*_data.sp)*_data.s+_data.s*2);

				_ps.push();
				_ps.translate(xx-width/2, yy-height/2);
				_ps.rotate(a + PI);
				if (this.cantidadPolys > 6) {
					_ps.ellipse(0, 0, sin(T * this.sizeSpeed) * this.size + this.size * 2,
									  sin(T * this.sizeSpeed) * this.size + this.size * 2)
				} else {
					this.polygon(_ps, 0, 0, sin(T * this.sizeSpeed) * this.size + this.size * 2, this.cantidadPuntas, 0);
				}
				_ps.pop();
			}
		}
	}
	update(){



	}



}

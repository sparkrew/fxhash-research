
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


		let cnt = uniforms_fxhash.cnt1;
		let c1 = color(random(255), random(255), random(255));
		let c2 = color(random(255), random(255), random(255));
	//	c1 = color(255);
		//c2 = color(0);
		for (let i = 0; i < cnt; i++) {
			let index = map(i, 0, cnt - 1, 0, 1);

			let x1 = width * 1 / 8;
			let x2 = width * 7 / 8;
			let y1 = map(index, 0,1,0, height);
			let y2 = y1;
			let s1 = 20;
			let s2 = 20;
			noStroke();
			let c1_1 = c1;
			let c1_2 = c2;
			if (i % 2 == 0) {
				 c1_1 = c2;
				 c1_2 = c1;
				console.log("A");
			} else {
				c1_1 = c1;
				 c1_2 = c2;

				console.log("E");
			}
			this.lerpquads.push(new LerpQuads(x1, x2, y1, y2, c1_1, c1_2, s1, s2, uniforms_fxhash.cnt2));
		}
	}
	

	
	draw(_ps) {
		background(255,255,220);
        if (this.generate) {
        
        }
        //rectMode(CENTER);
		//rect(width / 2, height / 2 + sin(millis() * 0.01) * 100, 50, 50);
		rectMode(CENTER);
		for (let i = 0; i < this.lerpquads.length; i++) {
			this.lerpquads[i].display();
		}

    }


	
	update(){
	
	}
}
class LerpQuads {

	constructor(x1, x2, y1, y2, c1, c2, s1, s2,cnt) {
		this.quads = [];


		this.cnt = cnt;
		this.fase = random(TWO_PI);
		this.freq = uniforms_fxhash.freq;
		for (let i = 0; i < cnt; i++) {

			let index = map(i, 0, cnt - 1, 0, 1);
			let xx = map(i, 0, cnt - 1, x1, x2);
			let yy = map(i, 0, cnt - 1, y1, y2);
			let cf = lerpColor(c1, c2, index);
			let s = map(i, 0, cnt - 1, s1, s2);
			
			this.quads.push(new LQuad(xx, yy, cf, s, i, cnt, this.fase,this.freq));
        }
	}

	display(pg) {
	
		//rect(width / 2, height / 2 + sin(millis() * 0.01) * 100, 50, 50);

		for (let i = 0; i < this.quads.length; i++) {
			this.quads[i].display();
        }
	}

}
class LQuad {

	constructor(x1, y1, c1, s1,index,cnt,fase,freq) {
		this.x1 = x1;
		this.y1 = y1;
		this.c1 = c1;
		this.s1 = s1;
		this.index = index;
		this.cnt = cnt;
		this.freq = freq;
		this.fase = fase;
		this.n = 0.0;
    }

   display(pg) {
	  



	   this.n += random(-0.1, 0.1);
	   let angle = map(this.index, 0, this.cnt - 1, 0, this.freq);


	   let distm = dist(mouseX, mouseY, this.x1, this.y1);

	   let md = map(mouseX, 0, width, 0, -PI*2.);
	   let sf = map(sin(millis() * 0.00073 + angle + this.fase+md), -1, 1, this.s1 * uniforms_fxhash.sm1, this.s1 * uniforms_fxhash.sm2);

	
	   fill(lerpColor(this.c1, color(255, 255, 220), 0.2));
	   push();
	   translate(this.x1, this.y1);
	   //rotate(angle*.5+millis()*0.002);
	   rect(0,0, sf, sf);
	   pop();
   }
    
}

class Dots{
	constructor(args){
		this.x = random(width);
		this.y = random(height);
		this.r = random(1, 6);
		this.p = [];
		// this.count = int(random(200, 240));
		this.clr = "#ff0000";
		this.reduce = random(0.96, 0.99);
	}

	createDots(){
		for(let i=0; i<4; i++){
			let p = createVector(random(width), random(height));
			this.p.push(p);
		}
		// print(this.p);
	}
	draw(){
		let r = this.r;
		push();
		for(let i=0; i<this.p.length; i++){
			let p = this.p[i];
			fill(this.clr);
      noStroke();
			ellipse(p.x, p.y, r);
			r *= this.reduce;
		}
		pop();
	}
}

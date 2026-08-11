class Tree{
	constructor(args){
		this.p = args.p;
		this.leafType = args.lt;
		this.avgTall = args.avgTall;
		this.r = args.r;
		this.color = args.clr;
		this.ranX = random(-10, 10);
		this.ranY = random(-10, 10);
		this.ranR = random(30, 50);
		this.sw = (random(5, 10)); //stroke weight
		this.branchAmount = args.branchAmount || 10;
		this.branches = [];
	}

	setBranches(){
		for(let i=0; i<this.branchAmount; i++){
			let tempBranch = {
				x: random(-33, 33),
				y: random(-33, 33),
				r: random(5, 10),
				clr: this.color
			};
			this.branches.push(tempBranch);
		}
	}

	draw(){
		colorMode(HSB);
		push();
			stroke(0, 100, 36);
			strokeWeight(this.sw);
			line(this.p.x, this.p.y, this.p.x, this.p.y-this.avgTall);
			fill(0, 100, 36);
			// quad(189, 18, 216, 18, 216, 360, 144, 360);
			quad(this.p.x-2, this.p.y-this.avgTall, this.p.x+2, this.p.y-this.avgTall, this.p.x+5, this.p.y, this.p.x-5, this.p.y);
			// triangle(this.p.x, this.p.y, this.p.x -20, this.p.y - this.avgTall, this.p.x + 20, this.p.y - this.avgTall);

			noStroke();
			// fill(86, 100, 20);

			translate(this.p.x, this.p.y-this.avgTall);
			for(let i=0; i<this.branches.length; i++){
				let tempB = this.branches[i];
				fill(tempB.clr);

				ellipse(tempB.x + this.ranX, tempB.y + this.ranY, tempB.r + this.ranR, tempB.r + this.ranR);
			}
			// for(let i=0; i<this.branches.length; i++){
			// 	let tempBranch = this.branches[i];
			// 	ellipse(tempBranch.x+this.ranX,
			// 				tempBranch.y-this.avgTall+this.ranY,
			// 				tempBranch.r+this.ranR);
			// 	}
		pop();
	}
}

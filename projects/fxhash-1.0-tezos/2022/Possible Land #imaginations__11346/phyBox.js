class Box{
	constructor(x, y, w, h, label, col, time){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = random(0, h);
		this.rand = random(0, w);
		this.label = label;

		this.clr = col;
		this.txtX = random(x-2, x+2);
		this.txtY = random(y-2, y+2);
		this.time = time;
		let options = {
			friction: 1,
			restitution: 0
		};
		this.body = Bodies.rectangle(this.x, this.y, this.rand, this.h);
		// this.body.friction = 1;
		Composite.add(engine.world, this.body);

	}

	show(){

		strokeWeight(2);
		let pos = this.body.position;
		let angle = this.body.angle;
		push();

			fill(this.clr);
			stroke(0);
			translate(pos.x, pos.y);
			rotate(radians(angle));
			rectMode(CENTER);
			rect(0, 0, this.rand, this.h);
		pop();

		push();
			textSize(18);
			noStroke();
			if(this.time == "night"){
				fill(255);
			}else{
				fill(0);
			}
			text(this.label, pos.x-10, pos.y-30);
			// stroke(0);
			// line(pos.x, pos.y, this.txtX, this.txtY);
		pop();
	}

    removeFromWorld(){
      World.remove(world, this.body);
    }

}

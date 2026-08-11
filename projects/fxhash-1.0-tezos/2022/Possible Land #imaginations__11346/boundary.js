class Boundary{
	constructor(x, y, w, h, label){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.label = label;
        this.l = leading;
		let options = {
			friction: 1,
			restitution: 0,
			isStatic: true,
			angle: 0
		};	
		this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
		// this.body.friction = 1;
		Composite.add(engine.world, this.body);
	}
	
	show(){
		strokeWeight(2);
		let pos = this.body.position;
		let angle = this.body.angle;
		push();
			translate(pos.x, pos.y);
			rotate(angle);
			rectMode(CENTER);
			// noFill();
			// stroke(0);
			// // strokeWeight(2);
			// rect(0, 0, this.w, this.h);
		pop();
	}
	
}
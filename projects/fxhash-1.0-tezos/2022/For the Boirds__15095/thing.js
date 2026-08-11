/*

 For the Boirds
 Generative art by thermo (tz1Qjz5VggR1C6ShiarAYVmEoSoVqLva78Km)

 https://twitter.com/MUTANtz_023
 https://www.fxhash.xyz/u/thermo
 https://objkt.com/profile/tz1Qjz5VggR1C6ShiarAYVmEoSoVqLva78Km/

*/

class thing {

	constructor(pos, velMag, rot, ourSize) {
		this.pos = pos;
		this.rot = rot;
		this.vel = createVector(velMag*cos(this.rot), velMag*sin(this.rot));
		this.ourSize = ourSize;
		this.accel = createVector();
		this.thingIndex = thingIndex;

		this.trailCounter = 0;
		this.trailCounterMax = 1;
		this.trailLength = 25;
		this.trail = [];

		this.orphanedTrail = [];

		this.setup();
	}

	setup() {

		// Do some precompute to make drawing faster

	}

	draw()
	{

		push();

		//this.drawLineTrail();
		this.drawThickTrail();
		//this.drawThickRibbonTrail();

		translate(this.pos.x,this.pos.y);

		this.updateRotationFromVel();
		rotate(this.rot);

		this.drawBoird();

		pop();

	}

	drawBoird() {
		beginShape();
		let blackColour = color(0);
		if(!darkBGFlag)
			fill(lerpColor(blackColour, bgColour, 0.35));
		else
			fill(32,32,32);
		noStroke();
		vertex(0, 0);
		vertex(-this.ourSize, this.ourSize);
		vertex(-this.ourSize*0.75, 0);
		vertex(-this.ourSize, -this.ourSize);
		vertex(0, 0);
		endShape();
	}

	drawBoirdTrail(){
		for(let i = 0; i < this.trail.length - 1; i++) {
			stroke(255);
			strokeWeight(0.001);
			line(this.trail[i].x, this.trail[i].y, this.trail[i+1].x, this.trail[i+1].y);
		}
		for(let i = this.trail.length - 2; i >= 0; i--) {
			stroke(255);
			strokeWeight(0.001);
			line(this.trail[i].x, this.trail[i].y, this.trail[i+1].x, this.trail[i+1].y);
		}

		for(let i = 0; i < this.orphanedTrail.length - 1; i++) {
			stroke(255);
			strokeWeight(0.001);
			line(this.orphanedTrail[i].x, this.orphanedTrail[i].y, this.orphanedTrail[i+1].x, this.orphanedTrail[i+1].y);
		}

	}

	drawLineTrail(){
		for(let i = 0; i < this.trail.length - 1; i++) {
			stroke(255);
			strokeWeight(0.001);
			line(this.trail[i].x, this.trail[i].y, this.trail[i+1].x, this.trail[i+1].y);
		}

		for(let i = 0; i < this.orphanedTrail.length - 1; i++) {
			stroke(255);
			strokeWeight(0.001);
			line(this.orphanedTrail[i].x, this.orphanedTrail[i].y, this.orphanedTrail[i+1].x, this.orphanedTrail[i+1].y);
		}
	}

	drawThickTrail(){

		let blackColour = color(96,96,96,10);
		if(darkBGFlag != true)
			fill(lerpColor(blackColour, bgColour, 0.05));
			//fill(0,0,0,16);
		else
			fill(128,128,128,16);
		noStroke();
		beginShape();

		for(let i = 0; i <= this.trail.length - 2; i++) {
			let perpVec1 = createVector(this.trail[i+1].y - this.trail[i].y, -(this.trail[i+1].x - this.trail[i].x));
			curveVertex(this.trail[i].x + perpVec1.x*(i)/this.trail.length, this.trail[i].y + perpVec1.y*(i)/this.trail.length);
		}

		for(let i = this.trail.length - 2; i >= 0; i--) {
			let perpVec1 = createVector(-(this.trail[i+1].y - this.trail[i].y), this.trail[i+1].x - this.trail[i].x);
			curveVertex(this.trail[i].x + perpVec1.x*(i)/this.trail.length, this.trail[i].y + perpVec1.y*(i)/this.trail.length);
		}

		endShape();

		//fill(0,255,0);
		beginShape();
		for(let i = 0; i <= this.orphanedTrail.length - 2; i++) {
			let perpVec1 = createVector(this.orphanedTrail[i+1].y - this.orphanedTrail[i].y, -(this.orphanedTrail[i+1].x - this.orphanedTrail[i].x));
			curveVertex(this.orphanedTrail[i].x + perpVec1.x*(i)/this.orphanedTrail.length, this.orphanedTrail[i].y + perpVec1.y*(i)/this.orphanedTrail.length);
		}

		for(let i = this.orphanedTrail.length - 2; i >= 0; i--) {
			let perpVec1 = createVector(-(this.orphanedTrail[i+1].y - this.orphanedTrail[i].y), this.orphanedTrail[i+1].x - this.orphanedTrail[i].x);
			curveVertex(this.orphanedTrail[i].x + perpVec1.x*(i)/this.orphanedTrail.length, this.orphanedTrail[i].y + perpVec1.y*(i)/this.orphanedTrail.length);
		}

		if(animateFlag == true && updatePhysFlag == true )
			this.orphanedTrail.shift();
		endShape();

	}


	drawThickRibbonTrail(){

		let blackColour = color(0,0,0,128);
		if(darkBGFlag != true)
			fill(lerpColor(blackColour, bgColour, 0.1));
		//fill(0,0,0,16);
		else
			fill(128,128,128,16);
		noStroke();
		beginShape();

		for(let i = 0; i < this.trail.length - 2; i++) {
			let perpVec1 = createVector(this.trail[i+1].y - this.trail[i].y, -(this.trail[i+1].x - this.trail[i].x));
			curveVertex(this.trail[i].x + perpVec1.x, this.trail[i].y + perpVec1.y);
		}

		for(let i = this.trail.length - 2; i >= 0; i--) {
			let perpVec1 = createVector(-(this.trail[i+1].y - this.trail[i].y), this.trail[i+1].x - this.trail[i].x);
			curveVertex(this.trail[i].x + perpVec1.x, this.trail[i].y + perpVec1.y);
		}

		endShape();

		beginShape();
		for(let i = 0; i < this.orphanedTrail.length - 2; i++) {
			let perpVec1 = createVector(this.orphanedTrail[i+1].y - this.orphanedTrail[i].y, -(this.orphanedTrail[i+1].x - this.orphanedTrail[i].x));
			curveVertex(this.orphanedTrail[i].x + perpVec1.x, this.orphanedTrail[i].y + perpVec1.y);
		}

		for(let i = this.orphanedTrail.length - 2; i >= 0; i--) {
			let perpVec1 = createVector(-(this.orphanedTrail[i+1].y - this.orphanedTrail[i].y), this.orphanedTrail[i+1].x - this.orphanedTrail[i].x);
			curveVertex(this.orphanedTrail[i].x + perpVec1.x, this.orphanedTrail[i].y + perpVec1.y);
		}
		endShape();
		this.orphanedTrail.shift();

	}

	updateRotationFromVel(){
		this.rot =  Math.atan2(this.vel.y, this.vel.x);
	}

	wrapScreen(){

		// If we are out the corner prevent nuking the orphan trail with the empty trail
		let orphanFlag = false;

		// Sides
		if(this.pos.x < 0 - shiftX/windowScaler - this.ourSize)
		{
			if(this.orphanedTrail.length == 0)
				this.orphanedTrail = [...this.trail];
			//move the trail
			for (let i = 0; i < this.trail.length; i++){
				this.trail[i] = createVector(this.trail[i].x + 1 + 2*shiftX / windowScaler + this.ourSize, this.trail[i].y );
			}
			//this.pos.x = 1 + shiftX / windowScaler + this.ourSize;
			this.pos.x = 1 + shiftX / windowScaler - this.vel.x;
		} else {
			if(this.pos.x > 1 + shiftX/windowScaler + this.ourSize)
			{
				if(this.orphanedTrail.length == 0)
					this.orphanedTrail = [...this.trail];
				//move the trail
				for (let i = 0; i < this.trail.length; i++){
					this.trail[i] = createVector(this.trail[i].x - (1 + 2*shiftX / windowScaler + this.ourSize), this.trail[i].y );
				}
				//this.pos.x = 0 - shiftX / windowScaler - this.ourSize;
				this.pos.x = 0 - shiftX / windowScaler - this.vel.x;
			}
		}
		if(this.pos.y < 0 - shiftY/windowScaler - this.ourSize)
		{
			if(this.orphanedTrail.length == 0)
				this.orphanedTrail = [...this.trail];
			//move the trail
			for (let i = 0; i < this.trail.length; i++){
				this.trail[i] = createVector(this.trail[i].x, this.trail[i].y + 1 + 2*shiftY / windowScaler + this.ourSize);
			}
			//this.pos.y = 1 + shiftY / windowScaler + this.ourSize;
			this.pos.y = 1 + shiftY / windowScaler - this.vel.y;
		} else {
			if(this.pos.y > 1 + shiftY/windowScaler + this.ourSize)
			{
				if(this.orphanedTrail.length == 0)
					this.orphanedTrail = [...this.trail];
				//move the trail
				for (let i = 0; i < this.trail.length; i++){
					this.trail[i] = createVector(this.trail[i].x, this.trail[i].y - (1 + 2*shiftY / windowScaler + this.ourSize) );
				}
				//this.pos.y = 0 - shiftY / windowScaler - this.ourSize;
				this.pos.y = 0 - shiftY / windowScaler - this.vel.y;
			}
		}

	}

	update(){

		this.vel.add(this.accel);
		this.vel.add(windForce.limit(maxForce));
		this.vel.limit(this.maxSpeed);
		this.pos.add(this.vel);

		if(this.trailCounter >= this.trailCounterMax) {
			this.trail.push(createVector(this.pos.x, this.pos.y));
			if(this.trail.length > this.trailLength )
			{
				this.trail.shift();
				this.orphanedTrail.shift();
			}
			this.trailCounter = 0;
		}

		this.trailCounter++;

		this.wrapScreen();

		//this.updateRotationFromVel();
	}

	align(things) {

		let steering = createVector();
		let total = 0;

		for (let neighbour of things) {
			let d = dist(this.pos.x, this.pos.y, neighbour.pos.x, neighbour.pos.y );
			if ( neighbour != this && d < affectRadius*(this.ourSize/maxBoidSize) ) {
				steering.add(neighbour.vel);
				total++;
			}
		}
		if (total > 0 ) {
			steering.div(total);
			steering.setMag(maxSpeed*(this.ourSize/maxBoidSize));
			steering.sub(this.vel);
			steering.limit(maxForce);
		}

		return steering;
	}

	cohesion(things) {

		let steering = createVector();
		let total = 0;

		for (let neighbour of things) {
			let d = dist(this.pos.x, this.pos.y, neighbour.pos.x, neighbour.pos.y );
			if ( neighbour != this && d < affectRadius*(this.ourSize/maxBoidSize) ) {
				steering.add(neighbour.pos);
				total++;
			}
		}
		if (total > 0 ) {
			steering.div(total);
			steering.sub(this.pos);
			steering.setMag(maxSpeed*(this.ourSize/maxBoidSize));
			steering.sub(this.vel);
			steering.limit(maxForce);
		}

		return steering;
	}

	separation(things) {

		let steering = createVector();
		let total = 0;

		for (let neighbour of things) {
			let d = dist(this.pos.x, this.pos.y, neighbour.pos.x, neighbour.pos.y );
			if ( neighbour != this && d < affectRadius*(this.ourSize/maxBoidSize) ) {
				let diff = p5.Vector.sub(this.pos, neighbour.pos);
				diff.div(d);
				steering.add(diff);
				total++;
			}
		}
		if (total > 0 ) {
			steering.div(total);
			steering.setMag(maxSpeed*(this.ourSize/maxBoidSize));
			steering.sub(this.vel);
			steering.limit(maxForce);
		}

		return steering;
	}

	flock (things) {
		this.accel.set(0,0);
		let alignment = this.align(things);
		let cohesion = this.cohesion(things);
		let separation = this.separation(things);

		alignment.mult(getSliderValueByName('align'));
		cohesion.mult(getSliderValueByName('cohesion'));
		separation.mult(getSliderValueByName('separation'));

		this.accel.add(alignment);
		this.accel.add(cohesion);
		this.accel.add(separation);
	}

}
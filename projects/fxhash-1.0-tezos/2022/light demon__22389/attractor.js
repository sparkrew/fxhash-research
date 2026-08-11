class Attractor{
	constructor(x,y,m,g){
		this.pos = createVector(x,y)
		this.vel = createVector(0,0)
		this.acc = createVector(0,0)
		this.mass = m
		this.r = sqrt(this.mass)*2
		this.g = g
		
	}
	
	attract(single){
		let forceG = p5.Vector.sub(this.pos,single.pos)
		let distanceSq = constrain(forceG.magSq(),50,600)
		let strength =( (this.mass*single.mass)*this.g)/distanceSq
		forceG.setMag(strength)
		single.applyForce(forceG)
	}
	
		update(){
		// this.vel.x = 1.4*(sin(frameCount/-50)+cos(frameCount/2000))
		// this.pos.add(0,30*sin(PI/(0.1*frameCount)))
		this.vel.add(this.acc)
		this.pos.add(this.vel)
		this.acc.set(0,0)
	
	
	}

	show(){
		noStroke()
		// noFill()
		rectMode(CENTER)
		stroke(25,50,250)
		noStroke()
		ellipse(this.pos.x,this.pos.y,this.r*6)
		// pop()
	}
}
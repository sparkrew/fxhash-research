class Boid {
	// Represents one boid
	constructor(mainHue, initSpeedX, initSpeedY, initPos, pack){		
		// Position, speed, acceleration. I split them between current and next to make the update together and avoid having values from next iter influencing current one
		let initX = initPos.x + $fx.rand() * .01
		let initY = initPos.y + $fx.rand() * .01
		this.initPackPos	= initPos.copy()
		this.initPos		= createVector(initX, initY)
		this.currPos		= createVector(initX, initY)
		this.nextPos		= createVector(initX, initY)
		let initSpeedFactor = 0.002
		// this.currSpeed = createVector(0,0)
		this.currSpeed = createVector(0, -.05)
		this.nextSpeed	= createVector(0,0)
		this.color = [fxRandCentered(mainHue, 50), 100, 100]
		this.mass = $fx.rand() * 2 + 1
		this.size = 0.003 * this.mass
		// Parametres de la simulation
		let forceDivFactor = 10e3
		this.centerDivFactor = forceDivFactor
		this.avoidDivFactor = forceDivFactor / 100
		this.alignDivFactor = forceDivFactor / 100
		this.protectedRange = .015
		// Relations to other objects
		this.square; // Square of the grid the boid belongs to
		this.pack = pack
		this.packId = str(this.pack.id)
	}
	update = function(){
		// // Jump quand arrive dans la bordure
		if (this.nextPos.x < 0) {this.nextPos.x = this.currPos.x - Math.floor(this.currPos.x); }
		if (this.nextPos.y < 0) {this.nextPos.y = this.currPos.y - Math.floor(this.currPos.y); }
		if (this.nextPos.x > 1) {this.nextPos.x = this.currPos.x - Math.floor(this.currPos.x); }
		if (this.nextPos.y > 1) {this.nextPos.y = this.currPos.y - Math.floor(this.currPos.y); }
		// Jump quand arrive dans la bordure
		let margin = .1; let turnfactor = 0.0001;
		let speedMax = 0.01;
		let speedMin = 0.001;
		if (this.nextPos.x < margin) this.nextSpeed.x = this.nextSpeed.x + turnfactor
		if (this.nextPos.y < margin) this.nextSpeed.y = this.nextSpeed.y + turnfactor
		if (this.nextPos.x > 1-margin) this.nextSpeed.x = this.nextSpeed.x - turnfactor
		if (this.nextPos.y > 1 - margin) this.nextSpeed.y = this.nextSpeed.y - turnfactor
		this.nextSpeed.limit(speedMax)
		if (this.nextSpeed.mag() < speedMin) this.nextSpeed.setMag(speedMin)
		
		if (this.pack.explosionFrame > -1){
			this.currPos.x = this.nextPos.x
			this.currPos.y = this.nextPos.y
			this.currSpeed.x = this.nextSpeed.x
			this.currSpeed.y = this.nextSpeed.y
		}
		else {
			let p = easing.quinticOut((this.pack.explodeAfter - this.pack.explodeIn)/this.pack.explodeAfter)
			this.currPos.y = this.initPos.y + ((this.pack.explodeHeight - (this.initPos.y - this.initPackPos.y)) - this.initPos.y) * p * 1.02
			// this.currPos.add(this.currSpeed)
			this.nextPos = this.currPos.copy()
			// if(this.currSpeed.y < -.01) this.currSpeed.y += 0.004
		}
		
	}
	computeIter = function(influencers) {
		// Parcours de tous les boids
		let separation	= createVector(0, 0)
		let alignement	= createVector(0, 0)
		let cohesion	= createVector(0, 0)
		let currentCOM = createVector(0,0) // current center of mass
		let perceivedVelocity = createVector(0, 0)
		let nAttractors = 0;
		for (let influencer of influencers) {
			// Calcul des forces (séparation, alignement, cohésion)
			if (influencer !== this) {
				if (this.currPos.dist(influencer.currPos) < this.protectedRange){
					separation.add(this.calculateSeparation(influencer));
				}else{
					currentCOM.add(influencer.currPos)
					perceivedVelocity.add(influencer.currSpeed)
					nAttractors += 1
				}
			}
		}
		// Cohesion (tendency towards center of mass)
		if (nAttractors > 0) currentCOM.div(nAttractors)
		cohesion = p5.Vector.sub(currentCOM, this.currPos).mult(this.pack.centerForce/ this.centerDivFactor)

		// Alignment: Align with neighbors speed
		if (nAttractors > 0) perceivedVelocity.div(nAttractors)
		alignement = p5.Vector.sub(perceivedVelocity, this.currSpeed).mult(this.pack.alignForce/ this.alignDivFactor)

		// Separation: Be repelled by too close boids
		separation.mult(this.pack.avoidForce/ this.avoidDivFactor)

		this.nextSpeed.add(alignement).add(separation).add(cohesion);

		// Mise à jour de la position en fonction de la vitesse
		this.nextPos.add(this.nextSpeed);
	}
	
	calculateSeparation = function(other) {
		return p5.Vector.sub(this.currPos, other.currPos)
	}
	
	show = function(id){
		push()
			strokeWeight(0)
			fill(this.color)
			circle(ltg(this.currPos.x), ltg(this.currPos.y), ltg(this.size), ltg(this.size))
			if (DEBUG) {fill('white'); text(id, ltg(this.currPos.x), ltg(this.currPos.y))}
		pop()
	}
};
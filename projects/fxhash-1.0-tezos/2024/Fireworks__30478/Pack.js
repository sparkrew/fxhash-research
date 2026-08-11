class ExplodeEvent{
	constructor(initLife){
		this.initLife	= initLife
		this.life		= initLife
	}
	decrease = function(){
		this.life -= 1
	}
	isActive = function(){
		return this.life > 0 && this.life < int(this.initLife * 8/10)
	}
}

class Pack{
	constructor(mainHue, id){
		let nbrBoids = 500
		let initSpeedX	= 0
		let initSpeedY	= - 2 + $fx.rand()
		let margin = 0.1
		let initPosVar = 0.2
		let initPos = createVector(0.5 + (($fx.rand() * 2 - 1) * initPosVar) - initPosVar/2 + margin, (1 - margin) - $fx.rand()*.1)
		this.exploded = false
		this.centerForce	= 0
		this.avoidForce		= 0
		this.alignForce		= 1
		this.explosionFrame = -1
		this.explodeAfter	= fxRandCentered(50, 10)
		this.explodeIn		= this.explodeAfter
		this.to_delete = 0
		this.delayFromCreation = int($fx.rand() * 100)
		this.explodeHeight = fxRandCentered(0.5, 0.25)
		this.explodeEvent = null
		// this.delayFromCreation = 0
		this.boids = []
		this.grid = new Grid(30, 30)
		for (let i = 0; i < nbrBoids;i++){
			let newBoid = new Boid(mainHue, initSpeedX, initSpeedY, initPos, this)
			this.boids[i] = newBoid
			this.grid.assignBoidToSquares(newBoid)
		}
	}

	computeIter = function(){
		if(this.delayFromCreation == 0){
			if (this.boids[0].currPos.y < this.explodeHeight && this.explosionFrame < 0){
				this.avoidForce = $fx.rand() + .5
				this.centerForce = 0
				this.explosionFrame = frameCount
				this.explodeEvent = new ExplodeEvent(200)
			}
			if(this.explosionFrame > -1){
				for (let boid of this.boids) {
					let influencers = this.getInfluencers(boid)
					if (influencers.length != 0)
						boid.computeIter(influencers)
				}
			}
			else{
				this.explodeIn -= 1
			}
			this.grid.resetBoidSquareAssignment()
			for (let boid of this.boids) {
				boid.update()
				this.grid.assignBoidToSquares(boid)	
			}
		}else {
			this.delayFromCreation -= 1	
		}
	}

	show = function(){
		if(this.delayFromCreation == 0){
			for (let i = 0; i < this.boids.length; i++) {
				this.boids[i].show(i)
			}
		}
	}
	
	getInfluencers = function(boid){
		// For now, just get boids from neighboring cells
		let squares = this.grid.getNeighborsSquares(boid.square)
		squares = squares.concat(boid.square)
		let influencers = []
		for(let square of squares){
			influencers = influencers.concat(square.boids)
		}
		return influencers
		
	}
}

class Grid{
	constructor(nSquaresX, nSquaresY){
		this.nSquaresX = nSquaresX
		this.nSquaresY = nSquaresY
		this.squares = new Array(nSquaresX*nSquaresY)
		for(let i=0; i < nSquaresX; i++){
			for(let j=0; j < nSquaresY; j++){
				this.squares[i * nSquaresX + j] = new Square(i, j, i * nSquaresX + j)
			}
		}
	}

	assignBoidToSquares = function(boid){
		let boidProj	= boid.currPos.copy().mult(this.nSquaresX, this.nSquaresY)
		boidProj.x = constrain(boidProj.x, 0, this.nSquaresX - 1)
		boidProj.y = constrain(boidProj.y, 0, this.nSquaresY - 1)
		let squareId = Math.floor(boidProj.x) * this.nSquaresX + Math.floor(boidProj.y)
		if (squareId < this.squares.length){
			let matchingSquare = this.squares[squareId]
			matchingSquare.boids.push(boid)
			boid.square = matchingSquare
		}else{
			// If somehow the boid got out of the frame, put it back in and assign new square.
			// This code should be unreachable as we constrain boidProj
			boid.currSpeed	= createVector(0,0)
			let newPos = createVector($fx.rand(), $fx.rand())
			boid.currPos = newPos
			boid.nextPos = newPos
			this.assignBoidToSquares(boid)
		}
	}
	
	resetBoidSquareAssignment = function(){
		for(let square of this.squares){
			// for(let boid of square.boids){
			// 	boid.square = null
			// }
			square.boids = []
		}
	}
	
	getNeighborsSquares = function(square){
		// Returns the Squares object of the neighbors of square
		let distance = 2
		let idx = square.id
		const neighbors = [];
		const x = idx % this.nSquaresX;
		const y = Math.floor(idx / this.nSquaresX);

		// Calculate the bounds of the search area
		const minX = Math.max(0, x - distance);
		const maxX = Math.min(this.nSquaresX - 1, x + distance);
		const minY = Math.max(0, y - distance);
		const maxY = Math.min(this.nSquaresY - 1, y + distance);

		// Loop through the search area and add neighboring indices
		for (let i = minY; i <= maxY; i++) {
			for (let j = minX; j <= maxX; j++) {
				// Skip the selected index itself
				if (i === y && j === x) continue;

				// Calculate the distance between the current square and the selected square
				const dist = Math.abs(i - y) + Math.abs(j - x);
				if (dist <= distance) {
					neighbors.push(i * this.nSquaresX + j);
				}
			}
		}
		return neighbors.map((idx)=>this.squares[idx]);
	
	}
	
	show = function(){
		push()
			stroke('red')
			fill(backColor)
			strokeWeight(1)
			rectMode(CORNERS)
			// fill('red')
			for(let square of this.squares){
				rect(ltg(square.pos.x / this.nSquaresX), ltg(square.pos.y / this.nSquaresY), ltg(square.pos.x / this.nSquaresX + 1 / this.nSquaresX), ltg(square.pos.y / this.nSquaresY + 1/this.nSquaresY))
				for(let boid of square.boids){
					line(ltg(square.pos.x / this.nSquaresX), ltg(square.pos.y / this.nSquaresY),ltg(boid.currPos.x), ltg(boid.currPos.y))
				}
			}
		pop()
	}
}

class Square{
	constructor(x,y,id) {
		this.pos	= createVector(x,y)
		this.id		= id // Id in the grid array
		this.boids	= []
	}
	
}
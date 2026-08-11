let brickFamilies = []
const COLORS = ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900","#fe4365", "#fc9d9a", "#f9cdad", "#c8c8a9", "#83af9b","#ecd078", "#d95b43", "#c02942", "#542437", "#53777a","#556270", "#4ecdc4", "#c7f464", "#ff6b6b", "#c44d58","#774f38", "#e08e79", "#f1d4af", "#ece5ce", "#c5e0dc","#e8ddcb", "#cdb380", "#036564", "#033649", "#031634","#490a3d", "#bd1550", "#e97f02", "#f8ca00", "#8a9b0f"]
const BASE_R_SIZE = 100
const R_SIZE_RATIO = 2
const R_SIZE = BASE_R_SIZE * R_SIZE_RATIO // room size
const C_SIZE = 1000 // canvas size
const R_PER_ROW = 7
const GAP_SIZE = -20
const START_OFFSET = 0

function setup() {
    Math.random = fxrand
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
	createCanvas(C_SIZE, C_SIZE);
	background("#dbcbd8");
	for (let row = 0; row < R_PER_ROW; row++) {
		const y = START_OFFSET + R_SIZE * row + GAP_SIZE * row
		const midRow = Math.floor(R_PER_ROW/2)
		const lengthRatio = 1+ map(abs(midRow - abs(midRow-row)), 0, midRow, 0, 0.7) * 1.5
		brickFamilies.push(new BrickFamily(0, y, 0.55*lengthRatio*C_SIZE))
	}
}

const T_X = -Math.sqrt(Math.pow(C_SIZE/2, 2)/2) - 50
const T_Y = C_SIZE - Math.sqrt(Math.pow(C_SIZE/2, 2)/2) + 50

function draw() {
	translate(T_X,T_Y)
	rotate(-PI/4)
	brickFamilies.forEach((brickFamily) => {
		brickFamily.draw()
		brickFamily.update()
	})
}

class BrickFamily {
	constructor(x, y, maxLength) {
		const colors = shuffle([...COLORS])
		const _bricks = [
			{
				w: random(40 * R_SIZE_RATIO, 50 * R_SIZE_RATIO),
				h: random(75 * R_SIZE_RATIO, 95 * R_SIZE_RATIO),
			},
			{
				w: 40 * R_SIZE_RATIO,
				h: 40 * R_SIZE_RATIO,
			},
			{
				w: random(8 * R_SIZE_RATIO, 16 * R_SIZE_RATIO),
				h: random(40 * R_SIZE_RATIO, 55 * R_SIZE_RATIO),
			},
			{
				w: random(15 * R_SIZE_RATIO, 25 * R_SIZE_RATIO),
				h: random(10 * R_SIZE_RATIO, 15 * R_SIZE_RATIO),
			},
		]
		const smallShapeAmount = Math.floor(random(3,8))
		for (let i = 0; i < smallShapeAmount; i++) {
			const size = random(4, 10)
			_bricks.push({ w: size, h: size })
		}
		this.bricks = _bricks.map(({ w, h }, index) => new Rec({ w, h, clr: colors[index % COLORS.length] }))
		this.x = x
		this.y = y
		this.maxLength = maxLength
		this.noiseRatio = random(5, 12)
		this.noiseSeed = Math.floor(random(10, 20))
		this.speed = random(3,6)
	}
	
	update() {
		if (this.x < this.maxLength) {
			this.x+=this.speed
			this.y += (noise(this.noiseSeed + frameCount/20)-0.5)*this.noiseRatio
		}
	}
	
	draw() {
		push()
			translate(this.x, this.y)
			this.bricks.forEach((rec) => {
				rec.draw(0, 0)
			})
		pop()
	}
}

class Rec {
	constructor({ w, h, clr }) {
		this.w = w
		this.h = h
		this.x = 0
		this.y = 0
		this.setPosition()
		this.clr = clr
	}

	setPosition() {
		const [w, h] = this.getSize()
		this.x = random(w/2, R_SIZE-w/2)
		this.y = random(h/2, R_SIZE-h/2)
		this.w = w
		this.h = h
	}
	
	getSize() {
		return random([
			[this.w, this.h],
			[this.h, this.w]
		])
	}
	
	draw(roomX, roomY) {
		push()
			translate(roomX, roomY)
			fill(this.clr)
			noStroke()
			rectMode(CENTER)
			rect(this.x, this.y, this.w, this.h)
		pop()
	}
}
	
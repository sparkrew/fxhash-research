class Nest {
	constructor() {
		this.c = cforeGround
		let p = egg.p
		let w = egg.w
		this.curve = new BezierCurve(
			new Vec2(p.x - w / 1.5, p.y + w / 4),
			new Vec2(p.x - w / 4, p.y + w / 4 + rndInt(50, w / 2)),
			new Vec2(p.x + w / 4, p.y + w / 4 + rndInt(50, w / 2)),
			new Vec2(x + w / 1.5, p.y + w / 4)
		)

		this.backCurve = new BezierCurve(
			new Vec2(p.x - w / 1.5, p.y + w / 4),
			new Vec2(p.x - w / 4, p.y + w / 4 + rndInt(50, w / 2)),
			new Vec2(p.x + w / 4, p.y + w / 4 + rndInt(50, w / 2)),
			new Vec2(p.x + w / 1.5, p.y + w / 4)
		)

		this.pairs = []
		this.pairsBack = []
		// for (let i = 0; i < 20; i++) {
		// 	this.createPair()
		// 	this.createBackPair()
		// }
	}
	createBackPair() {
		let rat = rndFloat()
		let p0 = this.backCurve.getPointAt(rat).addAngle(rndAng(), rndInt(0, 100))
		let p1 = this.backCurve
			.getPointAt(Math.min(1, Math.max(0, rat + rndFloat(-0.2, 0.2))))
			.addAngle(rndAng(), rndInt(0, 100))
		this.pairsBack.push({ p0, p1, ticker: 0, ang0: rndAng(), ang1: rndAng() })
	}
	createPair() {
		let rat = rndFloat()
		let p0 = this.curve.getPointAt(rat).addAngle(rndAng(), rndInt(0, 100))
		let p1 = this.curve
			.getPointAt(Math.min(1, Math.max(0, rat + rndFloat(-0.2, 0.2))))
			.addAngle(rndAng(), rndInt(0, 100))
		this.pairs.push({ p0, p1, ticker: 0, ang0: rndAng(), ang1: rndAng() })
	}

	render() {
		this.c.lineWidth = 0.1
		this.c.fillStyle = "rgba(0,0,0,0.1)"
		this.c.globalCompositeOperation = "hard-light"
		this.renderBack()
		this.renderFront()

		for (let i = 0; i < 10; i++) {
			let rat = rndFloat()
			let p = this.backCurve.getPointAt(rat)
			// new Stem({
			// 	p: p.copy().addAngle(rndAng(), rndInt(-150, 150)),
			// 	size: rndFloat(1, 1),
			// 	ang: rndAng(),
			// 	stroke: true,
			// 	fill: true,
			// 	strokeStyle: "rgba(0,0,0,1)",
			// 	fillStyle: "rgba(50,10,10,1)"
			// }).render(cGround)
			p = this.curve.getPointAt(rat)
			new Stem({
				p: p.copy().addAngle(rndAng(), rndInt(-150, 150)),
				size: rndFloat(1, 1),
				ang: rndAng(),
				strokeStyle: "rgba(0,0,0,1)",
				fillStyle: "rgba(" + rndInt(80, 100) + "," + rndInt(30, 60) + ",10,1)"
			}).render(cforeGround)
		}
	}

	renderBack() {
		let ct = cGround
		ct.lineWidth = 0.1
		ct.fillStyle = "rgba(0,0,0,0.1)"
		ct.globalCompositeOperation = "overlay"
		ct.strokeStyle = "rgba(90 ,50,0,1)"
		this.backCurve = new BezierCurve(
			new Vec2(width / 2 - w / 1.5, height / 2 + w / 4),
			new Vec2(width * 0.25, height / 2 + w / 4 - rndInt(50, w / 3)),
			new Vec2(width * 0.75, height / 2 + w / 4 - rndInt(50, w / 3)),
			new Vec2(width / 2 + w / 1.5, height / 2 + w / 4)
		)

		this.pairsBack.forEach(pair => {
			pair.ticker++
			pair.p0.addAngle(pair.ang0, 1)
			pair.p1.addAngle(pair.ang1, 1)
			pair.ang0 += 0.1
			pair.ang1 += 0.1
			ct.beginPath()
			// curvedLine(this.c, pair.p0, pair.p1, 0.01)
			ct.moveTo(pair.p0.x, pair.p0.y)
			let m0 = Vec2.middleOf(pair.p0, pair.p1)
				.addAngle((pair.ticker / 10) * PI2, 15)
				.addAngle(rndAng(), rndInt(0, 10))
			ct.quadraticCurveTo(m0.x, m0.y, pair.p1.x, pair.p1.y)
			// this.c.lineTo(pair.p1.x, pair.p1.y)
			ct.stroke()
			ct.fill()
			ct.closePath()
			if (pair.ticker > 10) {
				this.pairsBack.splice(this.pairsBack.indexOf(pair), 1)
				this.createBackPair()
			}
		})
	}
	renderFront() {
		this.c.strokeStyle = "rgba(130 ,90,20,1)"
		this.curve = new BezierCurve(
			new Vec2(width / 2 - w * rndFloat(0.5, 0.8), height / 2 + w / 4),
			new Vec2(width * 0.25, height / 2 + w / 4 + rndInt(50, w / 2)),
			new Vec2(width * 0.75, height / 2 + w / 4 + rndInt(50, w / 2)),
			new Vec2(width / 2 + w * rndFloat(0.5, 0.8), height / 2 + w / 4)
		)

		this.pairs.forEach(pair => {
			pair.ticker++
			pair.p0.addAngle(pair.ang0, 1)
			pair.p1.addAngle(pair.ang1, 1)
			pair.ang0 += 0.1
			pair.ang1 += 0.1
			this.c.beginPath()
			// curvedLine(this.c, pair.p0, pair.p1, 0.01)
			this.c.moveTo(pair.p0.x, pair.p0.y)
			let m0 = Vec2.middleOf(pair.p0, pair.p1)
				.addAngle((pair.ticker / 10) * PI2, 15)
				.addAngle(rndAng(), rndInt(0, 10))
			this.c.quadraticCurveTo(m0.x, m0.y, pair.p1.x, pair.p1.y)
			// this.c.lineTo(pair.p1.x, pair.p1.y)
			this.c.stroke()
			this.c.fill()
			this.c.closePath()
			if (pair.ticker > 10) {
				this.pairs.splice(this.pairs.indexOf(pair), 1)
				this.createPair()
			}
		})
	}
}

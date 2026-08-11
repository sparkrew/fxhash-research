class Shape {
	constructor(opts) {
		this.d = opts.d
		this.p = opts.p || new Vec2(0, 0)
		this.fillStyle = opts.fillStyle || "white"
		this.strokeStyle = opts.strokeStyle || "black"
		this.lineWidth = opts.hasOwnProperty("lineWidth") ? opts.lineWidth : 1
		this.path2d = opts.path
		this.stroke = opts.hasOwnProperty("stroke") ? opts.stroke : true
		this.fill = opts.hasOwnProperty("fill") ? opts.fill : false
		this.transform = opts.transform || false
	}
	render(c) {
		if (this.transform) {
			c.save()
			let t = this.transform
			c.transform(t[0], t[1], t[2], t[3], t[4], t[5])
		}
		if (this.fill) {
			c.fillStyle = this.fillStyle
			c.fill(this.path2d)
		}
		if (this.stroke) {
			c.strokeStyle = this.strokeStyle
			c.stroke(this.path2d)
		}
		if (this.transform) {
			c.restore()
		}
	}
}

class Component {
	constructor(opts = {}) {
		this.opts = opts
		this.shapes = []
		this.initShape()
	}
	render(c) {
		this.shapes.forEach(shape => {
			shape.render(c)
		})
	}
	addShape(opts) {
		this.shapes.push(new Shape(opts))
	}
}

class GrassFine extends Component {
	initShape() {
		let size = 100

		let p = this.opts.p || new Vec2(0, 0)
		let ht = size * this.opts.size
		let wd = Math.max(2, ht * 0.2)
		let mainCurve = new BezierCurve(
			new Vec2(p.x, p.y),
			new Vec2(p.x + rndFloat(-1, 1) * ht * 0.5, p.y - rndFloat(0.2, 0.4) * ht),
			new Vec2(p.x + rndFloat(-1, 1) * ht * 0.5, p.y - rndFloat(0.6, 0.8) * ht),
			new Vec2(p.x + rndFloat(-1, 1) * ht * 0.5, p.y - ht)
		)
		let path = new Path2D()
		path.moveTo(p.x, p.y)
		mainCurve.curveTo(path)
		mainCurve.p0.addAngle(0, wd)
		mainCurve.reverseCurveTo(path)
		path.lineTo(p.x, p.y)
		this.addShape({
			path,
			fill: true,
			stroke: true,

			fillStyle: "rgba(0,150,0,1)"
		})
	}
}

class GrassThick extends Component {
	initShape() {
		let ht = 200 * this.opts.size
		let wd = Math.max(2, this.opts.size * 5)
		let maxOffset = 0.2
		let offs = rndFloat(-1, 1) * ht * maxOffset

		let p = this.opts.p || new Vec2(0, 0)
		let p2 = new Vec2(p.x + rndFloat(-1, 1) * ht * maxOffset * 1.5, p.y - ht)

		const c0 = Vec2.middleOf(p, p2, rndFloat(0.2, 0.4)).addAngle(0, offs)
		const c1 = Vec2.middleOf(p, p2, rndFloat(0.6, 0.8)).addAngle(0, offs)

		let mainCurve = new BezierCurve(p.copy(), c0, c1, p2)
		let path = new Path2D()
		path.moveTo(p.x, p.y)
		mainCurve.curveTo(path)
		mainCurve.translate(new Vec2(wd, 0))
		mainCurve.p0.addAngle(0, wd)
		c.lineTo(mainCurve.p1.x, mainCurve.p1.y)
		mainCurve.reverseCurveTo(path)
		let mP = Vec2.middleOf(mainCurve.p0, p, rndFloat(0.5, 0.5)).addAngle(
			PI05,
			rndFloat(0.1, 0.4) * wd
		)
		path.lineTo(mP.x, mP.y)
		path.lineTo(p.x, p.y)
		this.addShape({
			path,
			fill: true,
			stroke: true,
			fillStyle: "rgba(200,220,200,1)"
		})
	}
}

class Stem extends Component {
	initShape() {
		this.initStem()
	}

	initStem() {
		let ht = 150 * this.opts.size
		let wd = Math.max(2, this.opts.size * 5)
		let maxOffset = 0.2
		let offs = rndFloat(-1, 1) * ht * maxOffset

		let p = this.opts.p || new Vec2(0, 0)
		let p2 = p.copy().addAngle(this.opts.ang, ht)

		this.stemEnd = p2.copy().addAngle(0, wd / 2)

		const c0 = Vec2.middleOf(p, p2, rndFloat(0.2, 0.4)).addAngle(0, offs)
		const c1 = Vec2.middleOf(p, p2, rndFloat(0.6, 0.8)).addAngle(0, offs)

		this.stemCurve = new BezierCurve(p.copy(), c0, c1, p2)
		let path = new Path2D()
		path.moveTo(p.x, p.y)
		this.stemCurve.curveTo(path)
		this.stemCurve.translate(new Vec2(5, 0))
		path.lineTo(this.stemCurve.p1.x, this.stemCurve.p1.y)
		this.stemCurve.reverseCurveTo(path)
		let mP = Vec2.middleOf(this.stemCurve.p0, p, rndFloat(0.5, 0.5)).addAngle(
			PI05,
			rndFloat(0.1, 0.4) * wd
		)
		path.lineTo(mP.x, mP.y)
		path.lineTo(p.x, p.y)
		this.addShape({
			path,
			fill: true,
			stroke: true,
			fillStyle: this.opts.fillStyle,
			strokeStyle: this.opts.strokeStyle,
			lineWidth: 0.1
		})
		let tip = new Path2D()
		tip.arc(p2.x - 5 / 2, p2.y, 5 / 2, 0, PI2)
		this.addShape({
			path: tip,
			fill: true,
			stroke: true,
			fillStyle: this.opts.fillStyle,
			strokeStyle: this.opts.strokeStyle,
			lineWidth: 0.1
		})
	}
}

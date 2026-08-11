class Curve {
	constructor(ps, opts = {}) {
		this.ps = ps.map((p, i) => new Point(p, i))
		this.opts = opts
		this.ticks = opts.ticks || Infinity
		this.initPoints()
	}
	getGco() {
		if (!this.hasOwnProperty("gco")) {
			this.gco = this.opts.gco || getRandomGco()
		}
		return this.gco
	}
	getStrokeStyle() {
		if (!this.hasOwnProperty("strokeStyle")) {
			this.strokeStyle = this.opts.strokeStyle || getRandomColor()
		}
		return this.strokeStyle
	}
	getLineWidth() {
		if (!this.hasOwnProperty("lineWidth")) {
			this.lineWidth =
				this.opts.lineWidth || rndFloat(LINEWIDTH_MIN, LINEWIDTH_MAX)
		}
		return this.lineWidth
	}
	isClosed() {
		if (!this.hasOwnProperty("closed")) {
			this.closed = this.opts.hasOwnProperty("closed")
				? this.opts.closed
				: false
		}
		return this.closed
	}
	move() {
		this.ps.forEach(p => p.move())
	}
	render() {
		c.save()
		c.globalCompositeOperation =
			rndFloat(0, 1) < 0.3 ? "overlay" : this.getGco()

		if (isNoHardwareAccel) {
			c.globalCompositeOperation = "source-over"
		}
		let rnd = rndFloat(0, 1)
		c.strokeStyle =
			rnd < 1 / 2
				? isNoHardwareAccel
					? "rgba(20,20,20,0.2)"
					: "rgba(20,20,20,1)"
				: this.getStrokeStyle()

		if (rndFloat(0, 1) < 0.05) c.strokeStyle = "rgba(255,0,0,1)"

		if (this.opts.transform) {
			this.opts.transform(c)
		}

		let line = smoothLineThroughPoints(this.ps, !this.isClosed())
		c.lineWidth = this.getLineWidth()
		c.beginPath()
		c.moveTo(
			Math.floor(line.curves[0].p0.x),
			Math.floor(line.curves[0].p0.y) + 0.5
		)
		line.curves.forEach(qCurve => qCurve.curveTo(c))
		c.stroke()
		c.closePath()
		c.restore()
	}
	initPoints() {
		let opts = this.opts
		let ps = this.ps
		if (!opts.dir) {
			opts.dir = opts => rndAng()
		}
		if (!opts.dirChange) {
			opts.dirChange = opts => {
				let ch = rndFloat(0.01, 0.15)
				return ch * rndSign()
			}
		}
		if (!opts.hasOwnProperty("speed")) {
			opts.speed = args => (args.isStart || args.isEnd ? 0 : rndFloat(0.5, 1))
		}
		let lastP = ps[0]
		ps.forEach((p, i) => {
			let ang = lastP.angleTo(p)
			let args = {
				i,
				isStart: i == 0,
				isEnd: i == ps.length - 1,
				isEven: i % 2 == 0,
				ang: ang || 0,
				rat: i / (ps.length - 1),
				p
			}
			lastP = p
			p.dir = opts.dir(args)
			p.dirChange = opts.dirChange(args)
			p.speed = opts.speed(args)
			p.mot = new Vec2(0, 0)
		})

		if (opts.closed) {
			let lastP = ps[ps.length - 1]
			let firstP = ps[0]

			lastP.dir = firstP.dir
			lastP.dirChange = firstP.dirChange
			lastP.speed = firstP.speed
		}
	}
}

class PointsOptions {
	constructor(lineOpts) {
		this.dir = lineOpts.dir
	}
}

class Point extends Vec2 {
	constructor(p, i) {
		super(p.x, p.y)
		this.i = i

		// this.init()
	}
	init() {
		this.dir = this.opts.dir
		this.dirChange = this.opts.dirChange
		this.speed = this.opts.speed
		this.mot = new Vec2(0, 0)
	}
	move() {
		this.addAngle(this.dir, this.speed)
		this.dir += this.dirChange
	}
}

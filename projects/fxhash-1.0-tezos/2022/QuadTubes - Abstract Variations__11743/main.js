window.$fxhashFeatures = {}

let isIOS = iOS()
var isNoHardwareAccel =
	(navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ||
		getUrlParam("noHA") ||
		isIOS) &&
	!getUrlParam("forceHA")
const BG_COLOR = "rgba(255,255,255,1)"
const BG_STROKES = "rgba(0,0,0,1)"
const BG_STROKE_WIDTH = rndFloat(
	isNoHardwareAccel ? 0.05 : 0.01,
	isNoHardwareAccel ? 0.05 : 0.01
)
const CURVE_AMNT = rndInt(4, 4)
let urlSpeed = getUrlParam("Speed")
var SPEED = urlSpeed ? urlSpeed : isNoHardwareAccel ? 10 : 25
isFxpreview ? (SPEED = 200) : null
let totTurn = 0
let TURN_SPEED = 0.0
const TURN_SPEED_CHANGE = 0.9999
const LINEWIDTH_MIN = isNoHardwareAccel ? 0.05 : 0.01
const LINEWIDTH_MAX = isNoHardwareAccel ? 0.05 : 0.01
c.globalAlpha = 1
let BG_TICKS_MAX = isNoHardwareAccel ? rndInt(400, 450) : rndInt(1000, 2000)
let STROKE_TICKS_MAX = isNoHardwareAccel ? 2000 : 10000
let bgTicks = 0
let strokeTicks = 0

initBg()
function initBg() {
	c.fillStyle = BG_COLOR
	c.fillRect(0, 0, width, height)
}

function renderBgTexture() {
	if (bgTicks > BG_TICKS_MAX) {
		return
	}
	bgTicks++
	c.beginPath()
	c.globalCompositeOperation = "source-over"
	c.strokeStyle = BG_STROKES
	c.lineWidth = BG_STROKE_WIDTH
	for (let i = 0; i < 2222; i++) {
		let p = Vec2.random(10)
		c.moveTo(p.x, p.y - rndInt(5, 10))
		c.lineTo(p.x + rndInt(-10, 10), p.y + rndInt(-10, 10))
	}
	c.stroke()
	c.closePath()
}

let curves = []

createTheCurvesLines()

function createCurve(ps, opts) {
	let curve = new Curve(ps, opts)
	curves.push(curve)
	return curve
}

function initPoint(p, dir, dirChange, speed) {
	p.dir = dir
	p.dirChange = dirChange
	p.speed = speed
	p.mot = new Vec2(0, 0)
}
function copyPoint(p) {
	let copy = new Point(p.copy(), p.i)
	copy.dir = p.dir
	copy.dirChange = p.dirChange
	copy.speed = p.speed

	return copy
}
function initPoints(ps, opts = {}) {
	if (!opts.dir) {
		opts.dir = (i, ang, isStart, isEnd, isEven) => rndAng()
	}
	if (!opts.dirChange) {
		opts.dirChange = (i, isStart, isEnd, isEven) => {
			let ch = rndFloat(0.01, 0.15)
			return ch * rndSign()
		}
	}
	if (!opts.speed) {
		opts.speed = (i, s, e, ev) => (s || e ? 0 : rndFloat(0.5, 1))
	}
	let lastP = ps[0]
	ps.forEach((p, i) => {
		let s = i == 0
		let e = i == ps.length - 1
		let ev = i % 2 == 0
		let ang = lastP.angleTo(p)
		p.dir = opts.dir(i, ang, s, e, ev)
		p.dirChange = opts.dirChange(i, s, e, ev)
		p.speed = opts.speed(i, s, e, ev)
		p.mot = new Vec2(0, 0)
	})
}

function initLine(line, opts = {}) {
	line.gco = opts.gco || getRandomGco()
	line.strokeStyle = opts.strokeStyle || getRandomColor()
	line.lineWidth = opts.lineWidth || rndFloat(LINEWIDTH_MIN, LINEWIDTH_MAX)
	line.closed = opts.closed
}

let delta = 0
let tickerSpeed = 1
let lastTsp = window.performance.now()
function render() {
	if (paused) {
		window.requestAnimationFrame(render)
		return
	}
	let now = window.performance.now()
	delta += now - lastTsp
	lastTsp = now

	if (delta > tickerSpeed) {
		delta = 0
		for (let i = 0; i < SPEED; i++) {
			renderLines()
			renderBgTexture()
		}
	}

	window.requestAnimationFrame(render)
}

render()
function renderLines() {
	if (strokeTicks == STROKE_TICKS_MAX) {
		paused = true
	}
	strokeTicks++
	curves
		.filter(curve => curve.ticks > strokeTicks)
		.forEach(curve => {
			curve.move()
			curve.render()
		})
}

function getRandomGco() {
	//"copy","multiply","darken","lighten","color-dodge","hard-light","soft-light","difference","exclusion","color","luminosity"
	let arr = ["hard-light"]
	return "hard-light" // arr[rndInt(0, arr.length - 1)]
}

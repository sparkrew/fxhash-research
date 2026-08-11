class Vector {
	constructor(x, y) {
		this._x = x
		this._y = y
	}
	x() {
		return this._x
	}
	y() {
		return this._y
	}
	addVector(vector) {
		this._x += vector.x
		this._y += vector.y
		return this
	}
	addAngle(angle, dist) {
		this._x += Math.cos(angle) * dist
		this._y += Math.sin(angle) * dist
		return this
	}
	multiply(number) {
		this._x *= number
		this._y *= number
		return this
	}
	ceiling(num) {
		this._x = Math.min(num, this._x)
		this._y = Math.min(num, this._y)
		return this
	}
	bottom(num) {
		this._x = Math.max(num, this._x)
		this._y = Math.max(num, this._y)
		return this
	}
	peg(min, max) {
		this.ceiling(max)
		this.bottom(min)
		return this
	}
	distanceTo(vector) {
		return distance(this, vector)
	}
	distanceToOrigin() {
		return distance(this, Vector.origin())
	}
	angleTo(vector) {
		return angle(this, vector)
	}
	angleToOrigin() {
		return this.angleTo(Vector.origin())
	}
	copy() {
		return new Vector(this._x, this._y)
	}
	isInBound() {
		return this._x > 0 && this._x < 500 && this._y > 0 && this._y < 500
	}
	static random(x, y) {
		x = x || 500
		y = y || 500
		return new Vector(randomInt(0, x), randomInt(0, y))
	}
	static create(x, y) {
		return new Vector(x, y)
	}
	static origin() {
		return new Vector(0, 0)
	}
}

function angle(point1, point2) {
	return Math.atan2(point2.y() - point1.y(), point2.x() - point1.x())
}
function distance(point1, point2) {
	return Math.sqrt(
		(point1.x() - point2.x()) * (point1.x() - point2.x()) +
			(point1.y() - point2.y()) * (point1.y() - point2.y())
	)
}
function randomInt(min, max) {
	return Math.floor(randomFloat(min, max))
}
function randomFloat(min, max) {
	return min + fxrand() * (max - min)
}
function rgba(r, g, b, a) {
	return "rgba(" + r + "," + g + "," + b + "," + a + ")"
}

function createCanvas(width, height) {
	width = width || 50
	height = height || 50
	const cnv = document.createElement("canvas")
	cnv.width = width
	cnv.height = height
	return cnv
}
CanvasRenderingContext2D.prototype.fillCircle = function (x, y, radius) {
	this.beginPath()
	this.arc(x, y, radius, 0, Math.PI * 2, 0)
	this.fill()
	this.closePath()
}

function doXTimes(times, toDo) {
	while (times--) {
		toDo()
	}
}

function rndFloat(min, max) {
	return min + (max - min) * fxrand()
}
function rndInt(min, max) {
	return Math.floor(min + (max - min) * fxrand() + 0.5)
}

function getClosestDirection(fromAngle, toAngle, turnSpeed) {
	let provisional = toAngle - fromAngle
	while (provisional < 0) {
		provisional += Math.PI * 2
	}
	return provisional < Math.PI ? -1 : provisional > Math.PI ? 1 : 0
}

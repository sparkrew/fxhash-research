const HORIZONTAL_NORETURN = 0
const HORIZONTAL_RETURN = 1
const VERTICAL_NORETURN = 2
const VERTICAL_RETURN = 3
const SPIRAL = 4
const CIRCLE = 5
const MAZE = 6
const CENTRIC_TWIRL = 7
const HORIZONTAL_LINES = 8
const VERTICAL_LINES = 9
const VERTICAL_ZIPPERS = 10
const HORIZONTAL_ZIPPERS = 11
const CIRCLES = 12
const HANGING = 13

function createTheCurvesLines(pattern = rndInt(0, 13)) {
	let marginW = 200
	let marginH = 200
	let w = width - marginW * 2
	let h = height - marginH * 2
	let rows =
		rndInt(5, 5) *
		(pattern == VERTICAL_RETURN || pattern == VERTICAL_NORETURN ? 4 : 1)
	let cols =
		rndInt(5, 5) *
		(pattern == HORIZONTAL_NORETURN || pattern == HORIZONTAL_RETURN ? 4 : 1)
	let jitter = rndInt(0, 0)
	let mW = marginW + (w / cols) * 0.5
	let stepW = w / cols
	let mH = marginH + (h / rows) * 0.5
	let stepH = h / rows
	let opts = {
		w,
		h,
		marginW,
		marginH,
		rows,
		cols,
		jitter,
		mW,
		mH,
		stepW,
		stepH,
		constantDirChange: rndFloat() < 0,
		constantDir: rndFloat() < 0.1 ? rndAng() : 0,
		randomDir: rndFloat() < 0.3 ? true : false
	}

	if (pattern == VERTICAL_RETURN) {
		if (rndFloat() < 0.2) {
			thePallete = "Green/Black"
		}
		createVerticalReturn(opts)
	} else if (pattern == VERTICAL_NORETURN) {
		createVerticalNoReturn(opts)
	} else if (pattern == HORIZONTAL_RETURN) {
		if (rndFloat() < 0.2) {
			thePallete = "Green/Black"
		}
		createHorizontalReturn(opts)
	} else if (pattern == HORIZONTAL_NORETURN) {
		createHorizontalNoReturnPs(opts)
	} else if (pattern == SPIRAL) {
		createSpiral(opts)
	} else if (pattern == CIRCLE) {
		createCircles(opts)
	} else if (pattern == MAZE) {
		createMaze(opts)
	} else if (pattern == CENTRIC_TWIRL) {
		createCentricTwirl(opts)
	} else if (pattern == HORIZONTAL_LINES) {
		createHorizontalLines(opts)
	} else if (pattern == VERTICAL_LINES) {
		createVerticalLines(opts)
	} else if (pattern == VERTICAL_ZIPPERS) {
		createVerticalZippers(opts)
	} else if (pattern == HORIZONTAL_ZIPPERS) {
		createHorizontalZippers(opts)
	} else if (pattern == CIRCLES) {
		createCirclesArrangement(opts)
	} else if (pattern == HANGING) {
		createHanging(opts)
	}
}

function createSpiral(opts) {
	let ps = []
	let amnt = rndInt(50, 200)
	let rad = opts.w / 2
	let turns = 2
	let angChange = (PI2 * turns) / amnt
	let midW = opts.marginW + opts.w / 2
	let midH = opts.marginH + opts.h / 2
	let startAng = rndAng()
	for (let i = 20; i < amnt + 10; i++) {
		ps.push(
			new Vec2(midW, midH).addAngle(startAng + i * angChange, (i / amnt) * rad)
		)
	}
	let maxSpeed = rndFloat(4, 5)
	let curveAmnt = rndInt(1, 3)
	if (ps.length > 2) {
		for (let i = 0; i < curveAmnt; i++) {
			createCurve(ps, {
				closed: false,
				gco: getRandomGco(),
				strokeStyle: getRandomColor(),
				dir: args =>
					opts.constantDir
						? opts.constantDir + PI * (i % 2)
						: args.ang - rndInt(0, 1) * PI + PI * (i % 2),
				dirChange: () => rndFloat(opts.constantDirChange ? 0.15 : 0.05, 0.15),
				speed: args => (args.isEven ? 0.05 : 2) * rndFloat(0.01, maxSpeed)
			})
		}
	}
}

function createCircles(opts) {
	let circleAmount = rndInt(3, 7)
	let curvesPerCircle = rndInt(1, 2)
	for (let i = 0; i < circleAmount * curvesPerCircle; i++) {
		let rad = (opts.w / 12) * (Math.floor(i / curvesPerCircle) * 2 + 1)
		let amnt = (rad * PI2) / 50
		let midW = opts.marginW + opts.w / 2
		let midH = opts.marginH + opts.h / 2
		let p = new Vec2(midW, midH)

		createCircle(p, rad, amnt, opts)
	}
	return closed
}

function createCircle(p, rad, amnt = (rad * PI2) / 50, opts, irregular) {
	let ps = []
	let startAng = rndAng()
	for (let j = 0; j < amnt; j++) {
		let a = startAng + (j / amnt) * PI2
		ps.push(p.copy().addAngle(a, rad))
	}
	let maxSpeed = rndFloat(2, 3)
	let defaultOpts = {
		closed: false,
		dir: args =>
			opts.randomDir
				? rndAng()
				: opts.constantDir
				? opts.constantDir
				: args.ang + rndInt(0, 1) * PI,
		dirChange: () => rndFloat(opts.constantDirChange ? 0.15 : 0.01, 0.15),
		speed: args =>
			args.isEnd
				? 0
				: (args.isEven ? 0.05 : 2) *
				  rndFloat(0.1, maxSpeed) *
				  (opts.constantDirChange ? 4 : 1)
	}

	if (!opts) {
		opts = defaultOpts
	}
	Object.keys(defaultOpts)
		.filter(key => !opts.hasOwnProperty(key))
		.forEach(key => (opts[key] = defaultOpts[key]))
	let curve = createCurve(ps, opts)
	let firstCopy = copyPoint(curve.ps[0])
	firstCopy.i = curve.ps.length - 1
	curve.ps.push(firstCopy)
}

function createMaze(opts) {
	rndFloat() < 0.5 ? getBorderLines() : null
	let gridX = {}

	let gridLength = () =>
		Object.values(gridX).flatMap(obj => Object.values(obj)).length
	let tries = 0
	let rows = rndInt(10, 20)
	let cols = rows
	let stepW = opts.w / cols
	let stepH = opts.h / rows
	while (gridLength() < cols * rows * 1 && tries < 125) {
		let ps = []
		tries++
		let pX = rndInt(0, cols - 1)
		let pY = rndInt(0, rows - 1)

		let hasNextMove = true
		ps.push(
			new Vec2(
				opts.marginW + stepW / 2 + pX * stepW,
				opts.marginH + stepH / 2 + pY * stepH
			)
		)
		while (hasNextMove) {
			hasNextMove = false
			let possibleMoves = []
			//top
			if (!(gridX[pX] && gridX[pX][pY - 1]) && pY - 1 > 0) {
				possibleMoves.push([pX, pY - 1])
			}
			//bottom
			if (!(gridX[pX] && gridX[pX][pY + 1]) && pY + 1 < rows - 1) {
				possibleMoves.push([pX, pY + 1])
			}
			//left
			if (!(gridX[pX - 1] && gridX[pX - 1][pY]) && pX - 1 > 0) {
				possibleMoves.push([pX - 1, pY])
			}
			//right
			if (!(gridX[pX + 1] && gridX[pX + 1][pY]) && pX + 1 < cols - 1) {
				possibleMoves.push([pX + 1, pY])
			}
			if (possibleMoves.length > 0) {
				hasNextMove = true
				let next = possibleMoves[rndInt(0, possibleMoves.length - 1)]
				pX = next[0]
				pY = next[1]
				if (!gridX.hasOwnProperty(pX)) {
					gridX[pX] = {}
				}
				gridX[pX][pY] = true
				let newP = new Vec2(
					opts.marginW + stepW / 2 + pX * stepW,
					opts.marginH + stepH / 2 + pY * stepH
				)
				ps.push(Vec2.middleOf(ps[ps.length - 1], newP, rndFloat(0, 1)))
				ps.push(newP)
			}
		}
		if (ps.length) {
			if (ps.length > 4) {
				createCurve(ps, {
					dir: args =>
						opts.constantDir ? opts.constantDir : Math.sin(args.ang) + PI05,
					dirChange: () => rndFloat(opts.constantDirChange ? 0.1 : 0.01, 0.1),
					speed: args =>
						args.isEnd || args.isStart || args.isEven ? 0 : rndFloat(0.01, 6)
				})
			}
		}
	}
}

function createAbstractSnakes(opts) {
	let gridX = {}
	let gridLength = () =>
		Object.values(gridX).flatMap(obj => Object.values(obj)).length
	let tries = 0
	while (gridLength() < opts.cols * opts.rows * 1 && tries < 125) {
		let ps = []
		tries++
		let pX = rndInt(0, opts.cols - 1)
		let pY = rndInt(0, opts.rows - 1)

		let hasNextMove = true
		while (hasNextMove) {
			hasNextMove = false
			let possibleMoves = []
			//top
			if (!(gridX[pX] && gridX[pX][pY - 1]) && pY - 1 > 0) {
				possibleMoves.push([pX, pY - 1])
			}
			//bottom
			if (!(gridX[pX] && gridX[pX][pY + 1]) && pY + 1 < opts.rows - 1) {
				possibleMoves.push([pX, pY + 1])
			}
			//left
			if (!(gridX[pX - 1] && gridX[pX - 1][pY]) && pX - 1 > 0) {
				possibleMoves.push([pX - 1, pY])
			}
			//right
			if (!(gridX[pX + 1] && gridX[pX + 1][pY]) && pX + 1 < opts.cols - 1) {
				possibleMoves.push([pX + 1, pY])
			}
			if (possibleMoves.length > 0) {
				hasNextMove = true
				let next = possibleMoves[rndInt(0, possibleMoves.length - 1)]
				pX = next[0]
				pY = next[1]
				if (!gridX.hasOwnProperty(pX)) {
					gridX[pX] = {}
				}
				gridX[pX][pY] = true

				ps.push(
					new Vec2(
						opts.marginW + opts.stepW / 2 + pX * opts.stepW,
						opts.marginH + opts.stepH / 2 + pY * opts.stepH
					)
				)
			}
		}
		if (ps.length) {
			if (ps.length > 2) {
				createCurve(ps, {
					dir: args => args.ang + PI * rndInt(0, 1),
					dirChange: () => rndFloat(0.05, 0.05),
					speed: args =>
						args.isEnd || args.isStart
							? 0
							: args.isEven
							? 0
							: rndFloat(1, 2) * 5
				})
			}
		}
	}
}

function createCentricTwirl(opts) {
	let ps = []
	let amount = rndInt(5, 17)
	let constantDirChange = rndFloat() < 0.6 ? true : false
	let lineLength = rndInt(20, 30)
	let minDirChange = rndFloat(0.001, 0.005)
	let maxSpeed = rndInt(4, 5)
	for (let j = 0; j < amount; j++) {
		let baseAng = (j / amount) * PI2
		ps = []
		let p = new Vec2(width / 2, height / 2).addAngle(baseAng, rndInt(50, 150))
		for (let i = 0; i < lineLength; i++) {
			baseAng += 0.1
			ps.push(p.copy())
			p.addAngle(baseAng + rndSign() * 0.1, rndInt(1, 15) * i)
		}

		if (ps.length) {
			if (ps.length > 2) {
				createCurve(ps, {
					closed: false,
					dir: args =>
						opts.randomDir
							? rndAng()
							: opts.constantDir
							? opts.constantDir
							: PI05 * rndSign(),
					dirChange: () =>
						rndFloat(
							opts.constantDirChange ? 0.05 : minDirChange,
							opts.constantDirChange ? 0.05 : 0.1
						),
					speed: args =>
						((args.isEnd || args.isStart || args.isEven ? 0.0 : 1) *
							rndFloat(0.1, maxSpeed) *
							args.i) /
						(opts.constantDirChange ? 11.1 : 4)
				})
			}
		}
	}
}

function createHorizontalNoReturnPs(opts) {
	let ps = []
	let rows = rndInt(5, 17)
	let cols = rndInt(15, 30)
	for (let j = 0; j < rows; j++) {
		for (let i = 0; i < cols; i++) {
			ps.push(
				new Vec2(
					opts.marginW +
						opts.w / (cols * 2) +
						(i * opts.w) / cols +
						rndInt(-opts.jitter, opts.jitter),
					opts.marginH +
						opts.h / (rows * 2) +
						(j * opts.h) / rows +
						rndInt(-opts.jitter, opts.jitter)
				)
			)
		}
	}
	if (ps.length > 2) {
		let minDirChange = rndFloat(0.001, 0.005)
		let maxSpeed = rndInt(4, 5)
		createCurve(ps, {
			closed: false,
			dir: args =>
				opts.randomDir
					? rndAng()
					: opts.constantDir
					? opts.constantDir
					: PI05 * rndSign(),
			dirChange: () =>
				rndFloat(
					opts.constantDirChange ? 0.05 : minDirChange,
					opts.constantDirChange ? 0.05 : 0.1
				),
			speed: args =>
				(args.isEnd || args.isStart ? 0 : args.isEven ? 0.05 : 1) *
				rndFloat(0.1, maxSpeed)
		})
	}
}

function createVerticalNoReturn(opts) {
	let ps = []
	let rows = rndInt(15, 30)
	let cols = rndInt(5, 17)
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			ps.push(
				new Vec2(
					opts.marginW +
						opts.w / (cols * 2) +
						(opts.w / cols) * i +
						rndInt(-opts.jitter, opts.jitter),
					opts.marginH +
						(opts.h / rows) * j +
						opts.h / (rows * 2) +
						rndInt(-opts.jitter, opts.jitter)
				)
			)
		}
	}
	let minDirChange = rndFloat(0.001, 0.005)
	let maxSpeed = rndInt(4, 5)
	if (ps.length > 2) {
		createCurve(ps, {
			closed: false,
			dir: args =>
				opts.randomDir
					? rndAng()
					: opts.constantDir
					? opts.constantDir
					: PI05 * rndSign(),
			dirChange: () =>
				rndFloat(
					opts.constantDirChange ? 0.05 : minDirChange,
					opts.constantDirChange ? 0.05 : 0.1
				),
			speed: args =>
				(args.isEnd || args.isStart ? 0 : args.isEven ? 0.05 : 1) *
				rndFloat(0.1, maxSpeed)
		})
	}
}

function createHorizontalReturn(opts) {
	let ps = []
	opts.jitter = 20
	let rows = rndInt(5, 17)
	let cols = rndInt(15, 30)
	for (let j = 0; j < rows; j++) {
		for (let i = 0; i < cols; i++) {
			ps.push(
				new Vec2(
					opts.marginW +
						opts.w / (cols * 2) +
						(j % 2 == 0
							? i * (opts.w / cols)
							: opts.w - ((i + 1) * opts.w) / cols) +
						rndInt(-opts.jitter, opts.jitter),
					opts.marginH +
						opts.h / (rows * 2) +
						(j * opts.h) / rows +
						rndInt(-opts.jitter, opts.jitter)
				)
			)
		}
	}
	if (ps.length > 2) {
		let minDirChange = rndFloat(0.001, 0.005)
		let maxSpeed = rndInt(4, 5)

		createCurve(ps, {
			closed: false,
			gco: getRandomGco(),
			strokeStyle: getRandomColor(),
			lineWidth: rndFloat(LINEWIDTH_MIN, LINEWIDTH_MAX),
			dir: args =>
				opts.randomDir
					? rndAng()
					: opts.constantDir
					? opts.constantDir
					: args.ang + PI05 * rndSign(),
			dirChange: () =>
				rndFloat(
					opts.constantDirChange ? 0.05 : minDirChange,
					opts.constantDirChange ? 0.05 : 0.1
				),
			speed: args =>
				(args.isEnd || args.isStart ? 0 : args.isEven ? 0.05 : 1) *
				rndFloat(0.1, maxSpeed)
		})
	}
}

function createVerticalReturn(opts) {
	let ps = []
	let rows = rndInt(15, 30)
	let cols = rndInt(6, 20)
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			ps.push(
				new Vec2(
					opts.marginW +
						(i * opts.w) / cols +
						opts.w / (cols * 2) +
						rndInt(-opts.jitter, opts.jitter),
					opts.marginH +
						(i % 2 == 0 ? (j * opts.h) / rows : opts.h - (j * opts.h) / rows) +
						opts.h / (rows * 2) +
						rndInt(-opts.jitter, opts.jitter)
				)
			)
		}
	}
	let minDirChange = rndFloat(0.001, 0.005)
	let maxSpeed = rndInt(4, 5)
	if (ps.length > 2) {
		createCurve(ps, {
			closed: false,
			dir: args =>
				opts.randomDir
					? rndAng()
					: opts.constantDir
					? opts.constantDir
					: args.ang + PI05 * rndSign(),
			dirChange: () =>
				rndFloat(
					opts.constantDirChange ? 0.05 : minDirChange,
					opts.constantDirChange ? 0.05 : 0.1
				),
			speed: args =>
				(args.isEnd || args.isStart ? 0 : args.isEven ? 0.05 : 1) *
				rndFloat(0.1, maxSpeed)
		})
	}
}
function createHorizontalLines(opts) {
	let cols = rndInt(20, 35)
	let stepW = opts.w / cols
	let lineAmnt = rndInt(3, 6)
	let spd = rndInt(20, 40)
	for (let j = 0; j < lineAmnt * 2; j++) {
		opts.jitter = rndInt(0, 0)

		let lineOrient = j % 2 == 0 ? 0 : 1
		let ps = []
		for (let i = 1; i < cols; i++) {
			ps.push(
				new Vec2(
					opts.marginW +
						(i * opts.w) / cols +
						rndInt(-opts.jitter, opts.jitter),
					opts.marginH +
						opts.h / (lineAmnt * 2) +
						(opts.h / lineAmnt) * Math.floor(j / 2)
				)
			)
		}
		createCurve(ps, {
			closed: false,
			dir: args => args.ang + PI * lineOrient + (args.isEven ? PI : 0),
			dirChange: () => rndFloat(opts.constantDirChange ? 0.05 : 0.05, 0.05),
			speed: args =>
				args.isStart || args.isEnd
					? 0
					: rndFloat(0.01, 3) * (spd / (lineAmnt * 2))
		})
	}
}
function createVerticalLines(opts) {
	let rows = rndInt(20, 35)
	let stepH = opts.w / rows
	let cols = rndInt(5, 12)
	let curvesPerLine = rndInt(1, 2)
	for (let j = 0; j < cols * curvesPerLine; j++) {
		opts.jitter = rndInt(0, 50)

		let lineOrient = j % curvesPerLine == 0 ? 0 : 1
		let ps = []
		for (let i = 1; i < rows; i++) {
			ps.push(
				new Vec2(
					opts.marginW +
						opts.w / (cols * 2) +
						(opts.w / cols) * Math.floor(j / curvesPerLine),
					opts.marginH +
						opts.h / (rows * 2) +
						(i - 0.5) * stepH +
						rndInt(-opts.jitter, opts.jitter)
				)
			)
		}
		let spd = rndFloat(20, 40)
		createCurve(ps, {
			closed: false,
			dir: args =>
				opts.randomDir
					? rndAng()
					: args.ang + PI * lineOrient + (args.isEven ? PI : 0),
			dirChange: () => rndFloat(opts.constantDirChange ? 0.05 : 0.01, 0.05),
			speed: args =>
				args.isStart || args.isEnd || args.isEven
					? 0
					: (rndFloat(0.01, 3) * spd) / (cols + rows)
		})
	}
}
function createVerticalZippers(opts) {
	let rows = rndInt(10, 35)
	let cols = rndInt(3, 5)
	let mainCurve
	let isRandomSide = 1

	for (let j = 0; j < cols * 2; j++) {
		opts.jitter = rndInt(0, 150)
		let x =
			opts.marginW + opts.w / (cols * 2) + (opts.w / cols) * Math.floor(j / 2)
		let p0 = new Vec2(x, opts.marginH + rndInt(-opts.jitter, opts.jitter))
		let p1 = new Vec2(
			x,
			height - opts.marginH + rndInt(-opts.jitter, opts.jitter)
		)
		if (j % 2 == 0) {
			mainCurve = new BezierCurve(
				p0,
				Vec2.middleOf(p0, p1, 0.25).addAngle(rndAng(), rndInt(0, 300)),
				Vec2.middleOf(p0, p1, 0.75).addAngle(rndAng(), rndInt(0, 300)),
				p1
			)
		} else {
			mainCurve.c0.addAngle(0, rndInt(0, (opts.w / cols) * 0.5))
			mainCurve.c1.addAngle(0, rndInt(0, (opts.w / cols) * 0.5))
		}

		let lineOrient = j % 2 == 0 ? 0 : 1
		let ps = []
		for (let i = 1; i < rows; i++) {
			ps.push(mainCurve.getPointAt(i / rows))
		}
		createCurve(ps, {
			closed: false,
			dir: args =>
				args.ang +
				PI * lineOrient +
				(args.isEven ? PI : 0) * isRandomSide +
				rndFloat(-0.2, 0.2),
			dirChange: () => rndFloat(0.05, 0.05),
			speed: args =>
				args.isStart || args.isEnd ? 0 : rndFloat(0.01, 3) / (rows / 30)
		})
	}
}

function createHorizontalZippers(opts) {
	let cols = rndInt(15, 35)
	let stepW = opts.w / cols
	let rows = rndInt(3, 5)
	let linesPerRow = rndInt(2, 2)
	let speedDiv = rows / rndInt(12, 12)
	let mainCurve
	let isRandomSide = 1
	for (let j = 0; j < rows * linesPerRow; j++) {
		opts.jitter = rndInt(0, 150)
		let y =
			opts.marginH +
			opts.h / (rows * 2) +
			(opts.h / rows) * Math.floor(j / linesPerRow)

		if (j % linesPerRow == 0) {
			let p0 = new Vec2(opts.marginW + rndInt(-opts.jitter, opts.jitter), y)
			let p1 = new Vec2(
				width - opts.marginW + rndInt(-opts.jitter, opts.jitter),
				y
			)
			mainCurve = new BezierCurve(
				p0,
				Vec2.middleOf(p0, p1, 0.25).addAngle(rndAng(), rndInt(0, 300)),
				Vec2.middleOf(p0, p1, 0.75).addAngle(rndAng(), rndInt(0, 300)),
				p1
			)
		} else {
			mainCurve.p0.addAngle(PI05, rndInt(0, (opts.h / rows) * 0.5))
			mainCurve.p1.addAngle(PI05, rndInt(0, (opts.h / rows) * 0.5))
		}
		let ps = []
		for (let i = 1; i < cols; i++) {
			ps.push(mainCurve.getPointAt(i / cols))
		}
		createCurve(ps, {
			closed: false,
			dir: args =>
				args.ang + PI - PI * (j % linesPerRow) - rndInt() * isRandomSide * PI,
			dirChange: () => rndFloat(0.05, 0.05),

			speed: args =>
				args.isStart || args.isEnd || args.isEven
					? 0
					: rndFloat(0.5, 2) / speedDiv
		})
	}
}

function createCirclesArrangement(opts) {
	let rows = rndInt(2, 4)
	let cols = rndInt(2, 4)
	let marg = 150
	let w = width - marg * 2
	let h = height - marg * 2
	let isXor = rndFloat(0, 1) < 0.2
	let constantAng = rndFloat(0, 1) < 0.5
	let maxSpeed = rndFloat(2, 10)
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			for (let k = 0; k < rndInt(1, 1); k++) {
				let circleSegmentAmount = rndInt(15, 25)
				createCircle(
					new Vec2(
						marg + w / (cols * 2) + (w / cols) * j,
						marg + h / (rows * 2) + (h / rows) * i
					),
					w / Math.max(cols, rows) / 2 - 150 - k * rndInt(30, 50),
					circleSegmentAmount
				)
			}
		}
	}
}
function createSquare(opts) {
	let cols = rndInt(30, 40)
	let marg = rndInt(400, 600)
	let w = width - marg * 2
	let ang = rndInt(0, 3) * PI05
	let p = Vec2.middle().addAngle(ang - PI05 * 0.5, -Math.sqrt((w / 2) ** 2 * 2))
	let ps = []
	let curveAmnt = 1 + Math.floor(0.5 + rndFloat() * rndFloat() * rndFloat())
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < cols; j++) {
			ps.push(p.copy())
			p.addAngle(ang, w / cols)
		}
		ang -= PI05
	}
	for (let i = 0; i < curveAmnt; i++) {
		createCurve(ps, {
			closed: true,
			dir: args => (opts.randomDir ? rndAng() : args.ang + rndInt() * PI),
			dirChange: args =>
				rndFloat(opts.constantDirChange ? 0.015 : 0.005, 0.015),
			speed: args =>
				args.isEnd || args.isStart || args.isEven ? 0 : rndFloat(0.1, 1)
		})
	}
}
function createSteps(opts) {
	let wOff = rndInt(0, 20)
	let p = new Vec2(width / 10, height)
	let size = rndInt(100, 200) * Math.log(1 + p.y / height)
	let amt = rndInt(13, 30)
	let topOffset = rndInt(-100, 100)
	for (let i = 0; i < amt; i++) {
		createStep({
			p: p.copy(),
			dir: -PI05,
			size,
			topOffset
		})
		p.addAngle(-PI05, size)
		p.addAngle(0, wOff)
		size = rndInt(100, 400) * Math.log(1 + p.y / height)
	}
}
function createStep(opts) {
	let p = opts.p
	let dir = opts.dir
	let size = opts.size

	let ps = []
	for (let j = 0; j < 14; j++) {
		ps.push(p.copy().addAngle(-PI05, opts.topOffset))
		p.addAngle(dir, size / 14)
	}
	for (let j = 0; j < 50; j++) {
		ps.push(p.copy())
		p.addAngle(0, rndInt(50, 200))
	}
	let getRat = i => {
		let rat = Math.min(1, i / 14)
		let turnPoint = rndFloat(0.3, 0.7)
		if (i > 14) return 5
		if (rat < turnPoint) {
			return Ease.easeOutQuad(rat / turnPoint)
		} else {
			return Ease.easeOutQuint(1 - (rat - turnPoint) / (1 - turnPoint))
		}
	}
	createCurve(ps, {
		closed: false,
		dir: args => (args.i > 14 ? rndAng() : dir + PI05),
		dirChange: args => rndFloat(0.015, 0.015),
		speed: args =>
			args.isEnd || args.isStart
				? 0
				: rndFloat(0.1, 1) * getRat(args.i) * size * rndFloat(0.001, 0.002)
	})
}
function createGrid(opts) {
	let margin = 55
	let w = width - margin * 2
	let h = height - margin * 2

	let vertAmnt = rndInt(3, 3)
	let horizAmnt = rndInt(3, 7)

	for (let i = 0; i < horizAmnt; i++) {
		let ps = []
		let size = rndFloat(1, 2)
		let y = margin + h / (horizAmnt * 2) + (h * i) / horizAmnt
		let p = new Vec2(0, y)
		let dotAmnt = rndInt(20, 50)
		for (let j = 0; j <= dotAmnt; j++) {
			ps.push(p.copy())
			p.addAngle(0, width / dotAmnt)
		}
		createCurve(ps, {
			closed: false,

			dir: args =>
				opts.randomDir
					? rndAng()
					: Math.floor((args.p.x - margin) / (width / vertAmnt) + i) % 2 == 0
					? PI
					: 0,
			dirChange: args => rndFloat(opts.constantDirChange ? 0.015 : 0.01, 0.015),
			speed: args => (args.isEnd || args.isStart ? 0 : rndFloat(0.1, 2.1))
		})
	}
}
function createHanging(opts) {
	let margin = 250
	let w = width - margin * 2
	let segLengthMin = rndInt(25, 155)
	let segLengthMax = segLengthMin + rndInt(0, 15)
	let amnt = rndInt(5, 15)
	for (let i = 0; i < amnt; i++) {
		let ps = []
		let size = rndFloat(0.5, 1)
		let p = new Vec2(margin + w / (amnt * 2) + (w * i) / amnt, rndInt(0, 0))
		let inneraAmnt = rndInt(40, 70)
		for (let j = 0; j < inneraAmnt; j++) {
			ps.push(p.copy())
			p.addAngle(PI05, rndInt(segLengthMin, segLengthMax) * size)
		}
		createCurve(ps, {
			closed: false,
			dir: args =>
				opts.randomDir ? rndAng() : opts.constantDir ? opts.constantDir : PI,
			dirChange: args => rndFloat(0.003, 0.015),
			speed: args =>
				args.isEnd || args.isStart || args.isEven
					? 0
					: rndFloat(1.2, 2.5) / Math.log(100 + (args.i + 1))
		})
	}
}
function createUpAndDown(opts) {
	let innerPs = []
	let amnt = rndInt(5, 12)
	let constantDir = rndFloat(0, 1) < 0.5
	let segLengthMin = rndInt(5, 30)
	let segLengthMax = segLengthMin + rndInt(0, 20)
	let constantLinkAmnt = rndFloat(0, 1) < 0.5 ? rndInt(50, 120) : 0
	for (let i = 0; i < amnt; i++) {
		let ps = []
		let p = new Vec2(
			width / (amnt * 2) + (width / amnt) * i,
			i % 2 == 0 ? height + 150 : -150
		)

		let ang = i % 2 == 0 ? -PI05 : PI05
		let linkAmount = constantLinkAmnt > 0 ? constantLinkAmnt : rndInt(50, 120)

		for (let j = 0; j < linkAmount; j++) {
			ps.push(
				p
					.addAngle(
						ang + rndFloat(-0.4, 0.4),
						rndInt(segLengthMin, segLengthMax)
					)
					.copy()
			)
		}

		innerPs.push(ps[ps.length - 1].copy())
		createCurve(ps, {
			closed: false,
			dir: args =>
				opts.randomDir
					? rndAng()
					: opts.constantDir
					? opts.constantDir
					: rndAng(),
			dirChange: args => rndFloat(constantDir ? 0.01 : 0.005, 0.01),
			speed: args =>
				args.isEnd ? 0 : (rndFloat(0.1, 5) * (1.5 - args.rat)) / amnt
		})
	}
}

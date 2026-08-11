function getBorderLines() {
	let margin = 122
	let linePoints = []
	linePoints.push(
		getBorderPoints(new Vec2(margin, margin), new Vec2(width - margin, margin))
	)

	linePoints.push(
		getBorderPoints(
			new Vec2(width - margin, margin),
			new Vec2(width - margin, height - margin)
		)
	)
	linePoints.push(
		getBorderPoints(
			new Vec2(width - margin, height - margin),
			new Vec2(margin, height - margin)
		)
	)
	linePoints.push(
		getBorderPoints(new Vec2(margin, height - margin), new Vec2(margin, margin))
	)
	let ps = linePoints.flatMap(_ => _)
	createCurve(ps, {
		closed: true,
		strokeStyle: "black",
		lineWidth: 0.05,
		dir: args => args.ang + PI * rndInt(0, 1),
		dirChange: () => rndFloat(0.05, 0.15),
		speed: args => (args.isEven ? 0.05 : 2) * rndFloat(0.1, 3)
	})
}

function getBorderPoints(p0, p1) {
	let amnt = 25
	let ps = [p0]
	for (let i = 1; i < amnt; i++) {
		ps.push(Vec2.middleOf(p0, p1, i / amnt))
	}
	ps.push(p1)

	ps.forEach(p => {
		p.dir = rndFloat(0, PI2)
		p.dirChange = rndFloat(0.01, 0.15)
		p.speed = rndFloat(1, 2)
		p.mot = new Vec2(0, 0)
	})
	return ps
}

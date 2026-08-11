function offsetPoints(points, x, y) {
    points.forEach(p => {
        p.pos.x += x
        p.pos.y += y
    })
}

function getPointOnEllipse(w, h, a) {
    return createVector(w * 0.5 * cos(a), h * 0.5 * sin(a))
}
function getEllipse(w,h,step=1,s=0,e=360){
    const ps = []
    for (let a=s;a<e;a+=step) ps.push(getPointOnEllipse(w,h,a))
    return ps
}

function makeCurve(ps) {
    const newCurve = []
    for (let i = 0; i < ps.length - 1; i++) {
        const curr = ps[i]
        const next = ps[i + 1]
        const l = p5.Vector.dist(curr, next)
        for (let j = 0; j < l; j++) {
            const t = j / l
            const control1 = i > 0 ? ps[i - 1] : curr
            const control2 = i < ps.length - 1 ? ps[i + 1] : next
            const x = curvePoint(control1.x, curr.x, next.x, control2.x, t)
            const y = curvePoint(control1.y, curr.y, next.y, control2.y, t)
            newCurve.push(v(x, y))
        }
    }
    return newCurve
}

function revolve(ps) {
    const newPs = []
    ps.forEach(p => p.pos.y *= -1)

    let lastPos = ps[0].pos
    for (let i = 1; i < ps.length - 1; i++) {
        const last = ps[i - 1]
        const curr = ps[i]
        const next = ps[i + 1]

        const totalLength = p5.Vector.dist(last.pos, curr.pos)
        const lengthToNext = p5.Vector.dist(next.pos, curr.pos)

        actualR = min([curr.r, totalLength * .6, lengthToNext * .6])
        const startR = p5.Vector.sub(last.pos, curr.pos).setMag(actualR).add(curr.pos)
        const startR_control = p5.Vector.sub(last.pos, curr.pos).setMag(actualR * 4).add(curr.pos)
        const endR = p5.Vector.sub(next.pos, curr.pos).setMag(actualR).add(curr.pos)
        const endR_control = p5.Vector.sub(next.pos, curr.pos).setMag(actualR * 4).add(curr.pos)
        const l = p5.Vector.dist(lastPos, startR)

        for (let j = 0; j < l; j += 2) {
            const p = p5.Vector.lerp(lastPos, startR, j / l)
            newPs.push(p)
        }
        for (let j = 0; j < curr.r * 2; j += 2) {
            const t = j / (curr.r * 2)
            const x = curvePoint(startR_control.x, startR.x, endR.x, endR_control.x, t)
            const y = curvePoint(startR_control.y, startR.y, endR.y, endR_control.y, t)
            newPs.push(v(x, y))
        }

        lastPos = endR
    }

    const last = ps[ps.length - 1]
    const l = p5.Vector.dist(lastPos, last.pos)
    for (let j = 0; j < l; j += 2) {
        const p = p5.Vector.lerp(lastPos, last.pos, j / l)
        newPs.push(p)
    }

    return newPs
}
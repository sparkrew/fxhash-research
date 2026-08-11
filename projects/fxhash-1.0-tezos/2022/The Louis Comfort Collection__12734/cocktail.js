/// <reference path="./p5.global-mode.d.ts" />

const random = (a = 1, b = 0) => fxrand() * (b - a) + a
const round_random = (a = 1, b = 0) => floor(random(a, b + 1))
const choose = (arr) => arr[Math.floor(random(arr.length))]

const happy = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51']
const liquidColors = [choose(happy), choose(happy)]

const kP = .9

let renderStrength = 200
function setup() {
    createCanvas(1000, 1000);
    angleMode(DEGREES)
    fill(0)
    noLoop()
    noStroke()
    makeImage()
}

function makeImage() {

    const wine = [
        { pos: v(0, 0), thickness: .5, r: 0 },
        { pos: v(130, 0), thickness: 1, r: 10 },
        { pos: v(100, 30), thickness: 1, r: 30 },
        { pos: v(10, 35), thickness: 1, r: 30 },
        { pos: v(10, 350), thickness: 1, r: 20 },
        { pos: v(150, 450), thickness: .1, r: 100 },
        { pos: v(140, 750), thickness: .05, r: 20 },
    ]

    const shot = [
        { pos: v(0, 0), thickness: .5, r: 0 },
        { pos: v(150, 0), thickness: 1, r: 0 },
        { pos: v(160, 100), thickness: .2, r: 0 },
        { pos: v(170, 400), thickness: .2, r: 0 },
    ]

    let shape = wine

    translation = v(width*.5, height*.9)
    translate(translation.x,translation.y)

    let inner = getInner(shape)
    inner = revolve(inner)
    shape = revolve(shape)


    straw(inner)
    liquid(inner)

    drawRevolve(inner)

    filter(BLUR,1)

    drawRevolve(shape)
    drawTop(shape)

    


    resetMatrix()
    addBG()

    finishImage()
    fxpreview()
}

function straw(ps){
    const startP = ps[0].pos
    resetMatrix()
    for (let i=-200;i<50;i++){
        translate(translation.x,translation.y)
        translate(startP.x-12,startP.y)

        rotate(30)
        translate(0,-i)

        renderStrength = 200+i
        revolveAt(v(10,0),0.2)
        resetMatrix()
    }

    for (let i=0;i<100;i+=2){
        translate(translation.x,translation.y)
        translate(startP.x-12,startP.y  )
        rotate(30)
        translate(0,-50)

        translate(50,0)
        rotate(i*.5)
        translate(-50,0)

        revolveAt(v(10,0),0.2)
        resetMatrix()
    }

    for (let i=0;i<100;i++){
        translate(translation.x,translation.y)
        translate(startP.x-12,startP.y)
        rotate(30)
        translate(0,-50)

        translate(50,0)
        rotate(50)
        translate(-50,0)

        translate(0,-i)

        revolveAt(v(10,0),0.2)
        resetMatrix()
    }

    translate(translation.x,translation.y)
}


function liquid(ps) {
    
    // CREATE SHAPE MASK
    const currBG = get()
    clear()
    fill(255,200)
    ps.reverse()
    m = floor((ps.length - 1) * random(.9, .9))
    beginShape()
    for (let i = 0; i < m; i++) vertex(ps[i].pos.x, ps[i].pos.y)
    for (let i = m; i >= 0; i--) vertex(-ps[i].pos.x, ps[i].pos.y)
    endShape()
    shapeMask = get()

    // DRAW LIQUID
    // background(choose(happy))
    for (let t = 0; t < 15; t++) {
        const c = v(random(-100, 100), random(0, -300))
        fill(choose(liquidColors) + "01")
        baseShape = getEllipse(100, 100, 30)
        for (let i = 0; i < 5; i++) baseShape = deform(baseShape)

        for (let i = 0; i < 30; i++) {
            newShape = [...baseShape]
            for (let i = 0; i < 5; i++) {
                newShape = deform(newShape)
                beginShape()
                newShape.forEach(p => vertex(p.x + c.x, p.y + ps[0].pos.y + c.y))
                endShape()
            }
        }
    }
    // fill(0, 50)
    // z = random()
    // for (let y = -400; y < 0; y++) {
    //     p = y
    //     for (let x = -width / 2; x < width / 2; x++) {
    //         p += noise(x / 30, y / 30, z) - .5
    //         circle(x, p + ps[0].pos.y, random(0, 2))
    //     }
    // }


    // APPLY SHAPE MASK
    loadPixels()
    shapeMask.loadPixels()
    for (let i = 3; i < pixels.length; i += 4) pixels[i] = shapeMask.pixels[i]
    updatePixels()

    const newImg = get()
    clear()
    resetMatrix()
    image(currBG,0,0)
    image(newImg,0,0)

    translate(translation.x,translation.y)
}

function deform(ps) {
    const newPS = []
    for (let i = 0; i < ps.length; i++) {
        const curr = ps[i]
        const next = ps[(i + 1) % ps.length]
        newPS.push(ps[i])
        const newP = p5.Vector.lerp(curr, next, random())
        const dir = p5.Vector.sub(next, curr).rotate(90).mult(random(-1,1))
        newP.add(dir)
        newPS.push(newP)
    }
    return newPS
}


function getInner(ps) {
    const newPs = []
    for (let i = ps.length - 1; i >= 0; i--) {
        const curr = ps[i]
        if (curr.thickness == 1) {
            if (newPs.length > 0) {
                const lastR = newPs[newPs.length - 1].pos.x * .3
                newPs.push({ pos: v(lastR / 2, curr.pos.y + 50), thickness: 1, r: lastR })
                newPs.push({ pos: v(0, curr.pos.y + 50), thickness: 1, r: 0 })
                return newPs
            }
        } else {
            const p = { pos: v(curr.pos.x * (1 - curr.thickness / 2), curr.pos.y), thickness: curr.thickness, r: max(curr.r, 50) }
            newPs.push(p)
        }
    }
    return newPs
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
            const thickness = lerp(last.thickness, curr.thickness, (j / l) * (l / totalLength))
            newPs.push({ pos: p, thickness: thickness })
        }
        for (let j = 0; j < curr.r * 2; j += 2) {
            const t = j / (curr.r * 2)
            const x = curvePoint(startR_control.x, startR.x, endR.x, endR_control.x, t)
            const y = curvePoint(startR_control.y, startR.y, endR.y, endR_control.y, t)
            const thickness = lerp(last.thickness, curr.thickness, t * (1 - l / totalLength) + l / totalLength)
            newPs.push({ pos: v(x, y), thickness: thickness })
        }

        lastPos = endR
    }

    const last = ps[ps.length - 1]
    const l = p5.Vector.dist(lastPos, last.pos)
    for (let j = 0; j < l; j += 2) {
        const p = p5.Vector.lerp(lastPos, last.pos, j / l)
        const thickness = last.thickness
        newPs.push({ pos: p, thickness: thickness })
    }

    return newPs
}

function drawRevolve(ps) {
    ps.forEach(p => revolveAt(p.pos, p.thickness))
}
function drawTop(ps) {
    const last = ps[ps.length - 1]
    for (let i = 0; i < last.pos.x; i++) {
        revolveAt(v(i, last.pos.y), 1)
    }
}

function revolveAt(pos, thickness) {
    ps = getPointOnEllipse
    const shade_by_thickness = [[0.0, 1], [0.3 * thickness, 0], [1 - 0.3 * thickness, 0], [1.0, 1]]
    for (let a = 0; a < 180; a += .8) {
        let val = getShadeAtAngle(shade_round_shiny, a)/2
        val += getShadeAtAngle(shade_by_thickness, a) 
        val = renderStrength * val
        fill(0,val)
        p = getPointOnEllipse(pos.x * 2, pos.x * 2 * perspectiveK(-pos.y), a).add(0, pos.y)
        drawDot(p)
        // circle(p.x,p.y,1)
    }
}

function perspectiveK(y) {
    return map(y, 0, height, .1, -.1)
}

function v(x, y) {
    return createVector(x, y)
}

function addBG() {
    const fg_image = get()
    background(255)
    loadPixels()
    for (let x = 0; x < width; x += 1) {
        for (let y = 0; y < height; y++) {
            pIndex = (round(y) * width + round(x)) * 4
            v = noise(x / 150, 0) * 50
            v *= (1 - y / (height * 2))
            pixels[pIndex] -= v
            pixels[pIndex + 1] -= v
            pixels[pIndex + 2] -= v
        }
    }
    updatePixels()
    image(fg_image, 0, 0)
}
const vdist = (a, b) => p5.Vector.dist(a, b)
const random = (a = 1, b = 0) => fxrand() * (b - a) + a
const round_random = (a = 1, b = 0) => Math.floor(random(a, b + 1))
const choose = (arr) => arr[Math.floor(random(arr.length))]

function setup() {
    const ratio = choose([1,2,3])
    if (windowWidth < windowHeight * ratio) {
        createCanvas(windowWidth, windowWidth / ratio)
    } else {
        createCanvas(windowHeight * ratio, windowHeight)
    }
    angleMode(DEGREES)
    v = createVector
    noStroke()
    doTheThing()
}


function doTheThing() {
    background(25, 25, 20)
    const s = new Grrr(1)
    let y = -height * random(.3, .7)

    dir = random() < 0.7 ? 'right' : 'left'
    const stepSize = random(.08, 0.3)
    for (let x = -width * .5; x < width; x += width * random(stepSize)) {
        const xx = width * random(-0.12, 0.12) + (dir == 'left' ? width / 2 - x : x)
        const pnt = v(xx, y + height * random(-0.12, 0.12), 0)
        s.addPoint(pnt)
        y *= -1 * random(.8, 1.2)
    }

    colorMode(HSB)
    const saturation = random(30, 100)
    s.startColor = color(random(360), saturation, 50)
    s.endColor = color(random(360), saturation, random() < 0.1 ? 0 : 100)

    s.startR = height * random(.5, 1)
    s.endR = s.startR

    s.prepare()

    translate(width / 2, height / 2)
    s.drawAtZ(0)
    resetMatrix()

    if (random() < 0.2) grain()
    if (random() < 0.2) slot()
    if (random() < 0.4) centerBouble()
    if (random() < 0.2) lightStrokes()

    border()
    fxpreview()
}

function slot() {
    const y = height * .8
    const x = width * .5
    const r = height * .015
    strokeWeight(r)
    drawingContext.filter = 'blur(5px)'
    stroke(0, 0, 100, 0.2)
    const w = width * .3
    line(x - w, y + r / 2, x + w, y + r / 2)
    stroke(0, 0, 0, 0.2)
    line(x - w, y - r / 2, x + w, y - r / 2)
    drawingContext.filter = 'none'
    stroke('black')
    line(x - w, y, x + w, y)
    noStroke()
}

function grain() {
    loadPixels()
    for (let i = 0; i < pixels.length; i += 4) {
        const r = random(-20, 20)
        pixels[i] += r
        pixels[i + 1] += r
        pixels[i + 2] += r
    }
    updatePixels()
}

function lightStrokes() {
    gradient = drawingContext.createLinearGradient(0, 0, width, height)
    if (random() > .5)
        drawingContext.createLinearGradient(0, width, 0, height)
    gradient.addColorStop(0, '#ffffff00')
    let val = 0, i = 0
    while (val <= 1) {
        gradient.addColorStop(val, i++ % 2 == 0 ? '#ffffff00' : '#ffffff55')
        val += random(.3)
    }
    gradient.addColorStop(1, '#ffffff')
    drawingContext.fillStyle = gradient
    rect(0, 0, width, height)

}

function centerBouble() {
    img = get()
    boubleType = choose([1, 2])
    getImg = boubleType == 1 ? () => get() : () => img
    const r = random(.15, .35)
    getR = boubleType == 1 ? () => width * .15 : (i) => width * r - i / 10

    const rotateScale = random(1, 5)
    for (let i = 0; i < 90; i++) {
        push()
        translate(width / 2, height / 2)
        rotate(i * rotateScale)
        drawingContext.beginPath()
        drawingContext.moveTo(width / 2, height / 2)
        drawingContext.arc(0, 0, getR(i), 0, Math.PI * 2)
        drawingContext.clip()
        imageMode(CENTER)
        image(getImg(), 0, 0, width, height)
        pop()
    }
}

function border() {
    resetMatrix()
    gradient = drawingContext.createLinearGradient(0, 0, width, 0)
    let v = 0
    let i = 0
    while (v <= 1) {
        gradient.addColorStop(0, i++ % 2 == 0 ? '#ffffff00' : '#ffffff55')
        v += random(.3)
    }
    gradient.addColorStop(1, '#ffffff00')

    drawingContext.fillStyle = gradient
    drawingContext.filter = 'blur(5px)'
    rect(0, 0, width, height * .11)
    gradient = drawingContext.createLinearGradient(0, 0, width, 0)
    v = 0
    i = 0
    while (v <= 1) {
        gradient.addColorStop(0, i++ % 2 == 0 ? '#00000000' : '#00000055')
        v += random(.3)
    }
    gradient.addColorStop(1, '#00000000')

    drawingContext.fillStyle = gradient
    rect(0, height, width, -height * .11)
    drawingContext.filter = 'none'

    noFill()
    colorMode(HSB)
    stroke(10)
    strokeWeight(height * .2)
    rect(0, 0, width, height, height * .15)
}


class Grrr {
    constructor(r) {
        this.startColor = color('blue')
        this.endColor = color('green')
        this.startR = r
        this.endR = r
        this.points = []
    }
    addPoint(x, y, z) {
        if (x instanceof p5.Vector)
            this.points.push(x)
        else
            this.points.push(v(x, y, z))
    }

    prepare() {
        this.points.push(this.points[this.points.length - 1])
        this.points.push(this.points[this.points.length - 1])
        this.points.splice(0, 0, this.points[0])

        const crv = []
        for (let i = 0; i < this.points.length - 3; i++) {
            const nextP = this.points[i + 1]
            const nextnextP = this.points[i + 2]
            const l = vdist(nextP, nextnextP)
            for (let t = 0; t < l; t++) {
                const x = curvePoint(this.points[i].x, this.points[i + 1].x, this.points[i + 2].x, this.points[i + 3].x, t / l)
                const y = curvePoint(this.points[i].y, this.points[i + 1].y, this.points[i + 2].y, this.points[i + 3].y, t / l)
                const z = curvePoint(this.points[i].z, this.points[i + 1].z, this.points[i + 2].z, this.points[i + 3].z, t / l)
                crv.push(v(x, y, z))
            }
        }

        this.points = []
        for (let i = 0; i < crv.length; i++) {
            const t = i / crv.length
            const c = lerpColor(this.startColor, this.endColor, t)
            const r = lerp(this.startR, this.endR, t)
            this.points.push({ x: crv[i].x, y: crv[i].y, z: crv[i].z, c, r })
        }
    }

    drawAtZ(z) {
        const drawPoints = this.points.filter(p => p.z <= z)
        for (const pnt of drawPoints) {
            this.drawPoint(pnt)
        }
        this.points = this.points.filter(p => p.z > z)
    }
    drawPoint(pnt) {
        const r = pnt.r
        let gradient = drawingContext.createLinearGradient(pnt.x - r, pnt.y - r, pnt.x + r, pnt.y + r)
        gradient.addColorStop(0, 'rgba(0,0,0,1)')
        gradient.addColorStop(.5, pnt.c)
        gradient.addColorStop(1, 'rgba(255,255,255,0)')
        drawingContext.fillStyle = gradient
        circle(pnt.x, pnt.y, r)

        const clr = dir == 'right' ? 'ffffff' : '000000'
        gradient = drawingContext.createLinearGradient(pnt.x + r / 4, pnt.y - r / 4, pnt.x + r / 2, pnt.y - r / 2)
        gradient.addColorStop(0, `#${clr}00`)
        gradient.addColorStop(1, `#${clr}`)
        drawingContext.fillStyle = gradient
        circle(pnt.x, pnt.y, r)

        gradient = drawingContext.createLinearGradient(pnt.x - r / 4, pnt.y + r / 4, pnt.x - r / 2, pnt.y + r / 2)
        gradient.addColorStop(0, '#ffff0000')
        gradient.addColorStop(1, '#ffff0077')
        drawingContext.fillStyle = gradient
        circle(pnt.x, pnt.y, r)
    }
}
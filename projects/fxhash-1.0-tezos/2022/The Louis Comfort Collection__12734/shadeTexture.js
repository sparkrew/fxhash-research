const emptyThreshold = random()<0.0
const hRange = [random(360),random(360)]
const strokeStrength = 255
const strokeColor = 0
const strokeThickness = random(3,5)

const textureSize = 1000
const sum = 400

class LampTexture{
    constructor(sections){
        this.baseTxtr = createGraphics(textureSize,textureSize)
        this.blackLinesTexture = createGraphics(textureSize,textureSize)
        this.baseTxtr.angleMode(DEGREES)
        this.blackLinesTexture.angleMode(DEGREES)
        const ct = random(1.5)**2
        this.baseTxtr.curveTightness(ct)
        this.blackLinesTexture.curveTightness(ct)
        
        this.baseTxtr.translate(this.baseTxtr.width / 2, this.baseTxtr.height / 2)
        this.blackLinesTexture.translate(this.baseTxtr.width / 2, this.baseTxtr.height / 2)
        for (let i = 0; i < sum; i++) {
            const pos = p5.Vector.fromAngle(radians(random(360 / 4))).setMag(random(this.baseTxtr.width*0.4))
            colorMode(HSB)
            const clr = color(random(hRange[0],hRange[1]), 360, 360)
            colorMode(RGB)
            const r = random(20, 100)

            const ps = getEllipse(r, r, 45)
            this.baseTxtr.push()
            this.baseTxtr.translate(pos.x, pos.y)
            this.baseTxtr.paint(ps, clr)
            this.baseTxtr.pop()

            this.blackLinesTexture.push()
            this.blackLinesTexture.translate(pos.x, pos.y)
            this.blackLinesTexture.outline(ps)
            this.blackLinesTexture.pop()
        }
        this.baseTxtr.rotationalSymmetry(sections)
        this.blackLinesTexture.rotationalSymmetry(sections)
        // this.finalTxtr = createGraphics(width,height)
        // this.lightTxtr = createGraphics(width,height)
        // this.lightTxtr.blendMode(MULTIPLY)
        // this.lightTxtr.noStroke()
        // this.flares = [new Flare(this.lightTxtr)]

    }
    update(){
        // this.flares.forEach(flr=>flr.update())
        // this.flares = this.flares.filter(flr=>flr.isLive)
        // if (frameCount%3==0) this.flares.push(new Flare(this.lightTxtr))
    }
    getTxtr(){
        // this.finalTxtr.image(this.baseTxtr,0,0)
        // this.finalTxtr.image(this.lightTxtr,0,0)
        // return this.finalTxtr
        return this.baseTxtr
    }
}

// class Flare{
//     constructor(gr){
//         this.gr = gr
//         this.startTime = performance.now()
//         this.liveTime = random(1000)
//         this.isLive = true
//         this.pos = createVector(random(gr.width),random(gr.height))
//     }
//     update(){
//         if (performance.now() < this.startTime + this.liveTime){
//             const v = (performance.now()-this.startTime)/this.liveTime
//             this.gr.fill(255,255*sin(v*360))
//             this.gr.circle(this.pos.x,this.pos.y,10)
//         } else {
//             this.isLive = false
//         }
//     }
// }

p5.Graphics.prototype.paint = function paint(ps, clr) {  
    const empty = random()<emptyThreshold
    if (empty) this.blendMode(REMOVE)
    for (let i = 0; i < 5; i++) {
        colorMode(HSB)
        clr = color(hue(clr) + random(-2, 2), saturation(clr) + random(-10, 10), brightness(clr), 0.06)
        colorMode(RGB)
        this.fill(clr)
        const ps2 = ps.map(p => p.copy().mult(random(.8, 1.2)))
        this.drawShape(ps2)
    }
    if (empty) this.blendMode(BLEND)
    this.noFill()
    this.stroke(strokeColor,strokeStrength)
    this.strokeWeight(strokeThickness)
    this.drawShape(ps)
}

p5.Graphics.prototype.outline = function outline(ps){
    this.blendMode(REMOVE)
    this.fill(0)
    this.drawShape(ps)
    this.blendMode(BLEND)
    this.noFill()
    this.stroke(0)
    this.strokeWeight(strokeThickness+1)
    this.drawShape(ps)
}

p5.Graphics.prototype.drawShape = function drawShape(ps) {
    this.beginShape()
    this.curveVertex(ps[0].x, ps[0].y)
    ps.forEach(p => this.curveVertex(p.x, p.y))
    this.curveVertex(ps[0].x, ps[0].y)
    this.endShape()
}

p5.Graphics.prototype.rotationalSymmetry = function rotationalSymmetry(sections) {
    sections *= 2
    this.resetMatrix()
    const sectionInDegrees = 360 / sections
    this.translate(this.width / 2, this.height / 2)

    const pos = v(0, this.height)
    this.blendMode(REMOVE)
    this.noStroke()
    this.beginShape()
    this.vertex(0, 0)
    for (let i = 0; i < 360 - sectionInDegrees; i++ ) {
        this.vertex(pos.x, pos.y)
        pos.rotate(1)
    }
    this.endShape()
    this.blendMode(BLEND)

    const p1 = this.get(this.width / 2, this.height / 2, this.width / 2, this.height / 2)
    this.imageMode(CORNER)
    this.scale(-1, 1)
    this.image(p1, 0, 0)
    this.scale(-1, 1)
    const p2 = this.get(0, this.height / 2, this.width / 2, this.height / 2)
    this.clear()
    for (let i = 0; i < sections; i++) {
        this.rotate(sectionInDegrees)
        if (i % 2 == 0) this.image(p1, 0, 0)
        else {
            this.rotate(-sectionInDegrees)
            this.image(p2, -this.width / 2, 0)
            this.rotate(sectionInDegrees)
        }
    }
    this.resetMatrix()
}
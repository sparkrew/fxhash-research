const dropPerc = random() < 0.2 ? random(.6, 0.9) : false
const shapeScl = 8
const upsidedown = random()<0.5

class Lamp {
    constructor(pos, sections) {
        this.pos = pos; this.sections = sections
        this.txtr = new LampTexture(sections)
        this.shape = this.makeLampshade(sections, this.txtr.baseTxtr)
        this.rotationSpeed = random(0.05, 0.1)
        if (random() < 0.5) this.rotationSpeed *= -1

        this.poleSpheres = Array(round_random(5)).fill(0).map(a => { return { y: random(height), r: random(6, 15) } })
        const sumWire = round_random(7, 15)
        this.wirePos = Array(sumWire).fill(0).map((a, i) => p5.Vector.random3D().mult(random(10, 30)).add(0, i * 1000 / sumWire, 0))

        if (random() < 0.08) this.special = round_random(5)
        this.spreadGraphics = createGraphics(width, height, WEBGL)
    }
    bgLight() {
        lightFalloff(.6, 0, 0)
        pointLight(250, 100, 0, this.pos.x, this.pos.y + 150, 0);
    }
    spread() {
        this.spreadGraphics.shader(spreadShader);
        spreadShader.setUniform('tex0', this.txtr.baseTxtr);
        spreadShader.setUniform('height', -this.pos.y / height);
        spreadShader.setUniform('time', -frameCount * this.rotationSpeed / 5);
        this.spreadGraphics.rect(-width / 2, -height / 2, width, height)

        texture(this.spreadGraphics)
        plane(width)
    }
    startDraw() {
        push()
        translate(this.pos.x, this.pos.y, this.pos.z)
        rotateY(180 + frameCount * this.rotationSpeed)
        if (upsidedown) {
            translate(0, 350, 0)
            rotateX(180)
        }
    }
    draw() {
        this.startDraw()
        if (upsidedown) this.drawWires()
        this.drawLamp()
        if (!upsidedown) this.drawWires()

        // if (this.special) {
        //     push()
        //     for (let i = 0; i < this.special; i++) {
        //         translate(0, -50, 0)
        //         scale(0.8, 0.8, 0.8)
        //         texture(this.txtr.baseTxtr)
        //         model(this.shape)
        //     }
        //     pop()
        // }



        rotateX(180)
        fill(0)

        pop()
    }

    drawLamp() {
        // shader(materialShader)
        // materialShader.setUniform('tex', this.txtr.baseTxtr);
        pointLight(250, 160, 130, this.pos.x - 30, this.pos.y + 200, this.pos.z - 30);
        pointLight(250, 160, 130, this.pos.x + 30, this.pos.y + 300, this.pos.z + 30);
        texture(this.txtr.baseTxtr)
        // specularMaterial(200)
        lightFalloff(.1, 0, 0)
        model(this.shape)
        texture(this.txtr.blackLinesTexture)
        for (let i = 0; i < 8; i++) {
            lightFalloff(6, 6, 6)
            shininess(0)
            translate(0, -.5, 0)
            model(this.shape)
        }
    }
    drawWires() {
        push()
        strokeWeight(4)
        stroke(0)
        fill(0)

        if (upsidedown) {
            translate(0, this.lastY, 0)
            if (!this.wireCount) this.wireCount = round_random(2,6)
            for (let i = 0; i < this.wireCount; i++)
                line(cos(i * 360 / this.wireCount) * this.lastR, 0, sin(i * 360 / this.wireCount) * this.lastR, 0, 1000, 0)
            push()
            rotateX(90)
            torus(this.lastR, 1)
            pop()
        } else {
            rotateX(180)
            this.poleSpheres.forEach(s => {
                push()
                translate(0, s.y, 0)
                sphere(s.r)
                pop()
            })
    
            sphere(10)
            line(0, 0, 0, 0, 700, 0)
        }

        strokeWeight(3)
        noFill()
        beginShape()
        curveVertex(0, 0, 0)
        curveVertex(0, 0, 0)
        this.wirePos.forEach((p, i) => curveVertex(p.x, p.y, p.z))
        endShape()

        noStroke()
        pop()
    }

    makeLampshade(sections, txtr) {
        const shapeOffset = random(180)
        const shapeSinSize = random(30, 200)
        const sectionStrength = random(2)
        const waveSize = random(8) ** 2
        let lastY, lastR
        const shape = new p5.Geometry(150, random(30, 50),
            function () {
                for (let y = 0; y < this.detailY; y++) {
                    let c = (cos(shapeOffset - shapeSinSize * y / this.detailY) + 1) / 2
                    c = map(c, 0, 1, 0.1, 1)
                    let r = y * c * width / 1000 + sin(y * waveSize)
                    if (dropPerc)
                        if (y > this.detailY * dropPerc) r = this.detailY * dropPerc * c * width / 1000 + sin(y * waveSize)
                    const startAngle = (y % 2) * (360 / this.detailX) / 2
                    for (let a = startAngle; a < 360; a += 360 / this.detailX) {
                        const rOffset = (sin(a * sections) + 1) * sectionStrength
                        const x = cos(a + 90) * (r + rOffset)
                        const z = sin(a + 90) * (r + rOffset)
                        this.vertices.push(new p5.Vector(x * shapeScl, y * shapeScl * width / 1000, z * shapeScl))

                        const uvr = (y / this.detailY) / 2
                        const u = 0.5 + cos(a) * uvr
                        const v = 0.5 + sin(a) * uvr
                        this.uvs.push([u, v]);

                        if (txtr.get(round(txtr.width * u), round(txtr.height * v))[3] > 0) {
                            lastY = y * shapeScl * width / 1000
                            lastR = (r + rOffset) * shapeScl
                        }
                    }
                }
                for (let y = 0; y < this.detailY; y++) {
                    for (let x = 0; x < this.detailX; x++) {
                        const v1 = x + this.detailX * y
                        const v2 = ((x + 1) % this.detailX) + this.detailX * y
                        const nextX = x + y % 2
                        if (y < this.detailY - 1) {
                            const v3 = nextX % this.detailX + this.detailX * (y + 1)
                            this.faces.push([v1, v2, v3])
                        }
                        if (y > 0) {
                            const v3_2 = nextX % this.detailX + this.detailX * (y - 1)
                            this.faces.push([v1, v2, v3_2])
                        }
                    }
                }
                this.computeNormals()
            })
        shape.gid = modelNumber++
        this.lastY = lastY
        this.lastR = lastR
        return shape
    }
}

let modelNumber = 1
const sunColor = [247, 233, 35]
const mercuryColor = [173, 71, 19]
const venusColor = [227, 213, 177]
const earthColor = [111, 148, 232]
const marsColor = [138, 49, 17]
const jupiterColor = [163, 149, 96]
const saturnColor = [207, 193, 140]
const uranusColor = [90, 217, 219]
const neptuneColor = [39, 105, 176]
let x0
let y0
let planets = []

const sizeScale = 0.4
const orbitRadiusScale = sizeScale * 30

function setup() {
    createCanvas(800, 800)
    x0 = width / 2
    y0 = height / 2
    background(0)
    fill(255)
    stroke(255)
    const mercury = new Planet(0.38, 47.87, 0.382, mercuryColor)
    const venus = new Planet(0.72, 35.02, 0.949, venusColor)
    const earth = new Planet(1, 29.76, 1, earthColor)
    const mars = new Planet(1.52, 24.13, 0.53, marsColor)
    const jupiter = new Planet(5.2, 13.07, 11.2, jupiterColor)
    const saturn = new Planet(9.54, 9.67, 9.41, saturnColor)
    const uranus = new Planet(19.22, 6.84, 3.98, uranusColor)
    const neptune = new Planet(30.06, 5.48, 3.81, neptuneColor)
    planets.push(mercury, venus, earth, mars, jupiter, saturn, uranus, neptune)
}

function draw() {
    background(0)
    stroke(...sunColor)
    fill(...sunColor)
    circle(x0, y0, 109 * sizeScale)
    planets.forEach(planet => {
        noFill()
        stroke(255, 30)
        circle(x0, y0, planet.orbitRadius * 2)
        planet.rotate()
    })
}

class Planet {
    constructor(orbitRadius, rotationalSpeed, size, color) {
        this.orbitRadius = orbitRadius * orbitRadiusScale + 109 * sizeScale / 2
        this.rotationalSpeed = (1 / rotationalSpeed) * sizeScale * 4000
        this.size = size * sizeScale * 2
        this.color = color
        this.rotation = fxrand() * 2 * PI
    }

    rotate() {
        stroke(...this.color)
        fill(...this.color)
        circle(x0 + sin(frameCount / this.rotationalSpeed + this.rotation) * this.orbitRadius,
            y0 + cos(frameCount / this.rotationalSpeed + this.rotation) * this.orbitRadius,
            this.size)
    }
}
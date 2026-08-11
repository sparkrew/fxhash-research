var numRepulsors = 5
var numParticles = 100 + fxrand() * 350
var particleSize = 5 + fxrand() * 10
let system
let gui

// Colours
let colourBackground
let colourParticle
let colourRepulsor

function generateColours() {
    let primaryColouR =  fxrand()*255
    let primaryColouG =  fxrand()*255
    let primaryColouB =  fxrand()*255

    let primaryColour = color(primaryColouR, primaryColouG, primaryColouB)
    let colour = ['black', 'white', primaryColour]
    colour.sort(() => .5 - fxrand())

    colourBackground = colour[0]
    colourParticle = colour[1]
    colourRepulsor = colour[2]

    window.$fxhashFeatures = {
        "Color": rgbToHex(primaryColouR, primaryColouG, primaryColouB),
        "Particle Count": int(numParticles),
        "Particle Size": int(particleSize),
    }
}

function rgbToHex(red, green, blue) {
    const rgb = (red << 16) | (green << 8) | (blue << 0);
    return '#' + (0x1000000 + rgb).toString(16).slice(1);
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    pixelDensity(2)

    generate()
}

function generate() {
    generateColours()
    background(colourBackground)
    this.system = new System()
}

function draw() {
    // Stop looping after 10 secs
    if (millis() > 10000) {
        noLoop()
    }

    // Regenerate
    // if (frameCount % 100 === 0) {
    //     generate()
    // }

    this.system.display()
}

function doubleClicked() {
    saveCanvas('canvas', 'png')
}
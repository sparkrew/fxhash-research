/*
Organicon, variation I, Frederik Vanhoutte, @wblut, 2022
This work is licensed under the Creative Commons Attribution-NonCommercial 4.0 Unported License. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
p5.js, GNU Lesser General Public License as published by the Free Software Foundation, version 2.1.
*/

'use strict'
const REFSIZE = 5600.0
const circles = []
let rescale
let numberOfFrames
let startHue, dHue
let numberOfCircles
let simpleSymmetry, superSymmetry, symmetryRoll, symmetryDegree
let tracer
let recursion
let ring
let bigC
let startRadius
let decay
let type
let subtype
let active

const getScale = () => {
    rescale = Math.min(windowWidth, windowHeight) / REFSIZE
    
}

const randomRange = (a, b) => {
    return a + (b - a) * fxrand()
}

const randomValue = (a) => {
    return a * fxrand()
}

const roll = () => {
    startHue = randomValue(360)
    dHue = randomRange(12, 140) * (randomValue(100) < 50 ? 1 : -1)
    numberOfCircles = Math.floor(randomRange(8, 31))
    simpleSymmetry = (randomValue(100) < 10) ? 0 : 100
    superSymmetry = (simpleSymmetry === 100) ? randomValue(100) < 25 : false
    symmetryRoll = randomValue(100)
    symmetryDegree = 4
    do {
        symmetryDegree = Math.floor(randomRange(2, 8))
    } while (symmetryDegree === 4)
    ring = randomRange(0.2, 0.8)
    bigC = new Circle(0.0, 0.0, randomRange(800, 1600))
    startRadius = randomValue(800)
    decay = randomRange(0.4, 1.4)
    type = Math.floor(randomValue(3))
    subtype = 0//Math.floor(randomValue(3))
    recursion = (type === 0) ? Math.floor(randomRange(1, 3.4)) : Math.floor(randomRange(3, 6))
    numberOfFrames = 1000//Math.floor(rescale * 2000)
}

const variation = () => {
    createCircles(1500 + startRadius, numberOfCircles)
}

const createCircles = (radius, nr) => {
    let pmin = new Point(10000, 10000)
    let pmax = new Point(-10000, -10000)
    do{
    circles.length = 0
    let p, q
     pmin = new Point(10000, 10000)
     pmax = new Point(-10000, -10000)
    let r
    for (let i = 0; i < nr; i++) {
        p = randomPointInCircle(radius)
        r = randomRange(80.0, 500.0)
        minComponent(pmin, p)
        maxComponent(pmax, p)
        circles[i] = new Circle(p.x, p.y, r)
        if (symmetryRoll < 25) {
            for (let sd = 1; sd < symmetryDegree; sd++) {
                q = rotatePoint(p, 2.0 * Math.PI / symmetryDegree * sd)
                minComponent(pmin, q)
                maxComponent(pmax, q)
                i++
                circles[i] = new Circle(q.x, q.y, r)
            }
        } else {
            if (randomValue(100) < simpleSymmetry) {
                q = scalePoint(p, -1, 1)
                minComponent(pmin, q)
                maxComponent(pmax, q)
                i++
                circles[i] = new Circle(q.x, q.y, r)
                if (superSymmetry) {
                    q = scalePoint(p, -1, -1)
                    minComponent(pmin, q)
                    maxComponent(pmax, q)
                    i++
                    circles[i] = new Circle(q.x, q.y, r)
                    q = scalePoint(p, 1, -1)
                    minComponent(pmin, q)
                    maxComponent(pmax, q)
                    i++
                    circles[i] = new Circle(q.x, q.y, r)
                }
            }
        }
    }
}while(pmax.x-pmin.x<400 || pmax.y-pmin.y<400)
    let d = 0.0
    circles.forEach(circle => {
        circle.x -= 0.5 * (pmin.x + pmax.x)
        circle.y -= 0.5 * (pmin.y + pmax.y)
        d = Math.max(d, circle.x * circle.x + circle.y * circle.y)
    })
    d = Math.sqrt(d)
    circles.forEach(circle => {
        circle.x *= radius / d
        circle.y *= radius / d
    })
}

const minComponent = (p, c) => {
    p.x = Math.min(p.x, c.x)
    p.y = Math.min(p.y, c.y)
}

const maxComponent = (p, c) => {
    p.x = Math.max(p.x, c.x)
    p.y = Math.max(p.y, c.y)
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    smooth()
    noCursor()
    colorMode(HSB)
    getScale()
    roll()
    variation()
    tracer = new Tracer(0.0, 0.0, 1.0, color(0))
}

function draw() {
    let frames=1
   if(isFxpreview){
     numberOfFrames=200
        frames=200
   }
    translate(windowWidth / 2, windowHeight / 2)
    if(active){
        noStroke()
        fill(startHue,80,80)
        ellipse(windowWidth / 2-6,windowHeight/2-6,4,4)
    }else{
        noStroke()
        fill(startHue,4,245)
        ellipse(windowWidth / 2-6,windowHeight/2-6,4,4)
    }
    if (frameCount === 1) {
        background(startHue,4,245)
    }
    scale(rescale)
    for(let frame=0;frame<frames;frame++){
    if (type === 0 || type === 1) {
        if (frameCount < numberOfFrames/2) {
            tracer.size =1
            let nr = startRadius + (frameCount % 15 + 1) * 100
            for (let i = 0; i < nr * nr / 500; i++) {
                resetTracerRandomInRing(tracer, nr, nr - ring * 100)
                strokeWeight(rescale * tracer.size)
                stroke(tracer.color)
                for (let rec = 0; rec < recursion; rec++) {
                    weightedInversion(tracer, circles, decay)
                    point(tracer.x, tracer.y)
                }
            }
        } else if (frameCount < numberOfFrames) {
            let nr = startRadius + (frameCount % 15 + 1) * 100
            let aoffset = randomValue(2.0 * Math.PI / nr)
            tracer.color = color(0)
            tracer.size = 0.3
            for (let i = 0; i < nr; i++) {
                tracer.x = nr * Math.cos(i * 2.0 * Math.PI / nr + aoffset)
                tracer.y = nr * Math.sin(i * 2.0 * Math.PI / nr + aoffset)
                strokeWeight(rescale * tracer.size)
                stroke(0, 0.6)
                for (let rec = 0; rec < recursion; rec++) {
                    weightedInversion(tracer, circles, decay)
                    point(tracer.x, tracer.y)
                }
            }
            for (let i = 0; i < nr; i++) {
                tracer.x = (nr - ring * 100) * Math.cos(i * 2.0 * Math.PI / nr + aoffset)
                tracer.y = (nr - ring * 100) * Math.sin(i * 2.0 * Math.PI / nr + aoffset)
                strokeWeight(rescale * tracer.size)
                stroke(0, 0.6)
                for (let rec = 0; rec < recursion; rec++) {
                    weightedInversion(tracer, circles, decay)
                    point(tracer.x, tracer.y)
                }
            }
        } else if (frameCount < 1.5*numberOfFrames) {
            tracer.size = 1.0
            let nr = startRadius + (frameCount % 15 + 1) * 100
            for (let i = 0; i < nr * nr / 500; i++) {
                resetTracerRandomInRing(tracer, nr, nr - ring * 100)
                strokeWeight(rescale * tracer.size)
                stroke(tracer.color)
                for (let rec = 0; rec < recursion; rec++) {
                    weightedInversion(tracer, circles, decay)
                    point(tracer.x, tracer.y)
                }
            }
        } else if (frameCount < 2 * numberOfFrames) {
            let nr = startRadius + (frameCount % 15 + 1) * 100
            let aoffset = randomValue(2.0 * Math.PI / nr)
            tracer.color = color(0)
            tracer.size = 0.3
            for (let i = 0; i < nr; i++) {
                tracer.x = nr * Math.cos(i * 2.0 * Math.PI / nr + aoffset)
                tracer.y = nr * Math.sin(i * 2.0 * Math.PI / nr + aoffset)
                strokeWeight(rescale * tracer.size)
                stroke(0, 0.6)
                for (let rec = 0; rec < recursion; rec++) {
                    weightedInversion(tracer, circles, decay)
                    point(tracer.x, tracer.y)
                }
            }
            for (let i = 0; i < nr; i++) {
                tracer.x = (nr - ring * 100) * Math.cos(i * 2.0 * Math.PI / nr + aoffset)
                tracer.y = (nr - ring * 100) * Math.sin(i * 2.0 * Math.PI / nr + aoffset)
                strokeWeight(rescale * tracer.size)
                stroke(0, 0.6)
                for (let rec = 0; rec < recursion; rec++) {
                    weightedInversion(tracer, circles, decay)
                    point(tracer.x, tracer.y)
                }
            }
        }
    }
    if (type === 0 || type === 2) {
        if (frameCount < numberOfFrames/2) {
            let nr = startRadius + (frameCount % 15 + 1) * 100
            tracer.size = 1.0
            for (let i = 0; i < nr * nr / 500; i++) {
                resetTracerRandomInRing(tracer, nr, nr - ring * 100)
                strokeWeight(rescale * tracer.size)
                stroke(tracer.color)
                for (let rec = 0; rec < recursion; rec++) {
                    weightedInversion(tracer, circles, decay)
                    singleInversion(tracer, bigC)
                    if (subtype === 0 || subtype === 1) {
                        point(0.5 * tracer.x + 0.5 * tracer.ix, 0.5 * tracer.y + 0.5 * tracer.iy)
                    }
                    if (subtype === 0 || subtype === 2) {
                        point(tracer.ix, tracer.iy)
                    }
                }
            }
        } else if (frameCount <  numberOfFrames) {
            let nr = startRadius + (frameCount % 15 + 1) * 100
            let aoffset = randomValue(2.0 * Math.PI / nr)
            tracer.color = color(0)
            tracer.size = 0.3
            for (let i = 0; i < nr; i++) {
                tracer.x = nr * Math.cos(i * 2.0 * Math.PI / nr + aoffset)
                tracer.y = nr * Math.sin(i * 2.0 * Math.PI / nr + aoffset)
                strokeWeight(rescale * tracer.size)
                stroke(0, 0.6)
                for (let rec = 0; rec < recursion; rec++) {
                    weightedInversion(tracer, circles, decay)
                    singleInversion(tracer, bigC)
                    if (subtype === 0 || subtype === 1) {
                        point(0.5 * tracer.x + 0.5 * tracer.ix, 0.5 * tracer.y + 0.5 * tracer.iy)
                    }
                    if (subtype === 0 || subtype === 2) {
                        point(tracer.ix, tracer.iy)
                    }
                }
            }
            for (let i = 0; i < nr; i++) {
                tracer.x = (nr - ring * 100) * Math.cos(i * 2.0 * Math.PI / nr + aoffset)
                tracer.y = (nr - ring * 100) * Math.sin(i * 2.0 * Math.PI / nr+ aoffset)
                strokeWeight(rescale * tracer.size)
                stroke(0, 0.6)
                for (let rec = 0; rec < recursion; rec++) {
                    weightedInversion(tracer, circles, decay)
                    singleInversion(tracer, bigC)
                    if (subtype === 0 || subtype === 1) {
                        point(0.5 * tracer.x + 0.5 * tracer.ix, 0.5 * tracer.y + 0.5 * tracer.iy)
                    }
                    if (subtype === 0 || subtype === 2) {
                        point(tracer.ix, tracer.iy)
                    }
                }
            }
        } else if (frameCount < 1.5*numberOfFrames) {
            let nr = startRadius + (frameCount % 15 + 1) * 100
            tracer.size = 1.0
            for (let i = 0; i < nr * nr / 500; i++) {
                resetTracerRandomInRing(tracer, nr, nr - ring * 100)
                strokeWeight(rescale * tracer.size)
                stroke(tracer.color)
                for (let rec = 0; rec < recursion; rec++) {
                    weightedInversion(tracer, circles, decay)
                    singleInversion(tracer, bigC)
                    if (subtype === 0 || subtype === 1) {
                        point(0.5 * tracer.x + 0.5 * tracer.ix, 0.5 * tracer.y + 0.5 * tracer.iy)
                    }
                    if (subtype === 0 || subtype === 2) {
                        point(tracer.ix, tracer.iy)
                    }
                }
            }
        } else if (frameCount < 2 * numberOfFrames) {
            let nr = startRadius + (frameCount % 15 + 1) * 100
            let aoffset = randomValue(2.0 * Math.PI / nr)
            tracer.color = color(0)
            tracer.size = 0.3
            for (let i = 0; i < nr; i++) {
                tracer.x = nr * Math.cos(i * 2.0 * Math.PI / nr + aoffset)
                tracer.y = nr * Math.sin(i * 2.0 * Math.PI / nr + aoffset)
                strokeWeight(rescale * tracer.size)
                stroke(0, 0.6)
                for (let rec = 0; rec < recursion; rec++) {
                    weightedInversion(tracer, circles, decay)
                    singleInversion(tracer, bigC)
                    if (subtype === 0 || subtype === 1) {
                        point(0.5 * tracer.x + 0.5 * tracer.ix, 0.5 * tracer.y + 0.5 * tracer.iy)
                    }
                    if (subtype === 0 || subtype === 2) {
                        point(tracer.ix, tracer.iy)
                    }
                }
            }
            for (let i = 0; i < nr; i++) {
                tracer.x = (nr - ring * 100) * Math.cos(i * 2.0 * Math.PI / nr + aoffset)
                tracer.y = (nr - ring * 100) * Math.sin(i * 2.0 * Math.PI / nr + aoffset)
                strokeWeight(rescale * tracer.size)
                stroke(0, 0.6)
                for (let rec = 0; rec < recursion; rec++) {
                    weightedInversion(tracer, circles, decay)
                    singleInversion(tracer, bigC)
                    if (subtype === 0 || subtype === 1) {
                        point(0.5 * tracer.x + 0.5 * tracer.ix, 0.5 * tracer.y + 0.5 * tracer.iy)
                    }
                    if (subtype === 0 || subtype === 2) {
                        point(tracer.ix, tracer.iy)
                    }
                }
            }

        }
    }
    if(frame>0){ frameCount++}
    }
    if (frameCount >= 4 * numberOfFrames && active) {
        reset()
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    getScale()
    frameCount = 0
}

function keyPressed() {
    if(key==='+'){
        rescale*=1.1
        frameCount = 0
    }else  if(key==='-'){
        rescale/=1.1
        frameCount = 0
    }
}

function mousePressed() {
    if(!active){
        reset()
    }
    active = !active
}

const reset = () => {
    frameCount = 0
    variation()
}

class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

const rotatePoint = (p, a) => {
    let ca = Math.cos(a)
    let sa = Math.sin(a)
    return new Point(ca * p.x - sa * p.y, sa * p.x + ca * p.y)
}

const scalePoint = (p, sx, sy) => {
    return new Point(sx * p.x, sy * p.y)
}

const randomPointInCircle = (radius) => {
    let r = radius * Math.sqrt(randomValue(1.0))
    let t = randomValue(2 * Math.PI)
    return new Point(r * Math.cos(t), r * Math.sin(t))
}

const resetTracerRandomInCircle = (tracer, radius) => {
    let r = Math.sqrt(randomValue(1.0))
    let t = randomValue(2 * Math.PI)
    tracer.x = radius * r * Math.cos(t)
    tracer.y = radius * r * Math.sin(t)
    tracer.color = color((map(radius * r, 0, 1500, startHue, startHue + hueRange) + 360) % 360, 100, 100)

}

const resetTracerRandomInRing = (tracer, outerRadius, innerRadius) => {
    let r
    do {
        r = Math.sqrt(randomValue(1.0))
    } while (r * outerRadius < innerRadius)
    let t = randomValue(2 * Math.PI)
    tracer.x = outerRadius * r * Math.cos(t)
    tracer.y = outerRadius * r * Math.sin(t)
    tracer.color = color((map(outerRadius * r, 0, 1500, startHue, startHue + dHue) + 360) % 360, 100, 100)
}

const resetTracerRandomOnCircle = (tracer, radius) => {
    let r = radius
    let t = randomValue(2 * Math.PI)
    tracer.x = r * Math.cos(t)
    tracer.y = r * Math.sin(t)

}

class Tracer {
    constructor(x, y, s, c) {
        this.x = x
        this.y = y
        this.ix = 0.0
        this.iy = 0.0
        this.size = s
        this.color = c
    }
}

class Circle {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
        this.r2 = r * r
    }

}

const singleInversion = (tracer, circle) => {
    let d2 = (tracer.x - circle.x) * (tracer.x - circle.x) + (tracer.y - circle.y) * (tracer.y - circle.y)
    tracer.ix = circle.x + (tracer.x - circle.x) * circle.r2 / d2
    tracer.iy = circle.y + (tracer.y - circle.y) * circle.r2 / d2
}
const weightedInversion = (tracer, circles, decay) => {
    let accWeight = 0.0
    let weight = 0.0
    let x = 0.0
    let y = 0.0
    let rs = 1.0 + Math.min(decay / 1.24 - 1.0, 0.0)
    circles.forEach(circle => {
        weight = 1.0 / Math.pow((tracer.x - circle.x) * (tracer.x - circle.x) + (tracer.y - circle.y) * (tracer.y - circle.y), decay)
        singleInversion(tracer, circle)
        x += weight * tracer.ix
        y += weight * tracer.iy
        accWeight += weight
    })
    tracer.x = x / (rs * accWeight)
    tracer.y = y / (rs * accWeight)
}
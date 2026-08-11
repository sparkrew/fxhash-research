const MAX_GUN_LENGTH = 800

class RayGun {
    constructor() {
        this.bodyLength = random(250, 450)
        this.bodyWidth = random(100, 200)

        this.barrelLength = random(100, MAX_GUN_LENGTH - this.bodyLength)
        this.barrelWidth = random(10, 20)
    }



    createBody() {
        const bodyTypes = ['random', 'zeplin', 'straight']
        // const bodyType = choose(bodyTypes)
        const bodyType = 'random'

        this.body = [{ pos: v(0, 0), r: 0 }]
        if (bodyType == 'random') {
            let l = 0
            while (l < this.bodyLength) {
                this.body.push({ pos: v(random(this.barrelWidth * 3, this.bodyWidth), l), r: random(100) })
                l += random(200)
            }
            this.body.push({ pos: v(random(this.barrelWidth, this.barrelWidth), this.bodyLength), r: 0 })
        }
        this.shape = [...this.body]
    }

    createBarrel() {
        const barrelTaper = random(-5, 5)
        this.barrel = [
            { pos: v(this.barrelWidth, this.bodyLength), r: 0 },
            { pos: v(this.barrelWidth + barrelTaper, this.bodyLength + this.barrelLength), r: 0 }
        ]

        this.shape = booleanAnd(this.shape, this.barrel)
    }

    createBarrelTeslas() {
        const teslaSizeL = this.barrelWidth * random(3, 7)
        const teslaSizeS = random(this.barrelWidth * 1.5, teslaSizeL)

        const sumTestals = floor(random(0, 10))
        const places = Array(sumTestals).fill(0).map(a => random(.1, .9)).sort()
        places.forEach((place, i) => {
            const pos = this.bodyLength + this.barrelLength * place
            const barrelSizeAtPos = lerp(this.barrelWidth, this.barrel[1].pos.x, place)
            const currTeslaSize = lerp(teslaSizeL, teslaSizeS, i / sumTestals)
            this.shape = booleanAnd(this.shape, [
                { pos: v(barrelSizeAtPos, pos - 15), r: 0 },
                { pos: v(currTeslaSize, pos - 5), r: 0 },
                { pos: v(currTeslaSize, pos + 5), r: 0 },
                { pos: v(barrelSizeAtPos, pos + 15), r: 0 },
            ])
        })
    }

    createNozzle(){
        const barrelEndPos = this.barrel[this.barrel.length-1].pos
        const nozzleSize = random(20,50)
        const nozzleTypes = ['random', 'ball', 'steps',]
        const nozzleType = choose(nozzleTypes)
        // const nozzleType = 'steps'
        this.nozzle = []
        if (nozzleType == 'random'){
            let l=0
            while (l<nozzleSize){
                const r = random(barrelEndPos.x,nozzleSize)
                this.nozzle.push({pos:v(r,barrelEndPos.y+l), r:20})
                l+=random(nozzleSize)
            }
            this.nozzle.push({pos:v(0,barrelEndPos.y+nozzleSize), r:0})
        }
        if (nozzleType == 'ball'){
            this.nozzle = [
                {pos:v(barrelEndPos.x,barrelEndPos.y),r:0},
                {pos:v(nozzleSize,barrelEndPos.y),r:nozzleSize},
                {pos:v(nozzleSize,barrelEndPos.y+nozzleSize),r:nozzleSize},
                {pos:v(0,barrelEndPos.y+nozzleSize),r:0},
            ]
        }
        if (nozzleType == 'steps'){
            for (let i=nozzleSize;i>5;i-=5){
                this.nozzle.push({pos:v(barrelEndPos.x - i,barrelEndPos.y+(5-i)*2),r:0})
                this.nozzle.push({pos:v(barrelEndPos.x - (i-1),barrelEndPos.y+(4-i)*2),r:0})
            }
        }
        this.shape = booleanAnd(this.shape, this.nozzle)
    }

    handle(s,w,h) {
        const startHandle = s

        let tries = 0
        let rStart = this.revolveShape.reduce((a, b) => abs(a.pos.y + startHandle) < abs(b.pos.y + startHandle) ? a : b).pos.x
        let handleWidth = min(rStart * random(.5, 2), w)
        let endHandle = startHandle + handleWidth
        let rEnd = this.revolveShape.reduce((a, b) => abs(a.pos.y + endHandle) < abs(b.pos.y + endHandle) ? a : b).pos.x

        while (rEnd < handleWidth && tries < 10){
            handleWidth*=0.8
            endHandle = startHandle + handleWidth
            rEnd = this.revolveShape.reduce((a, b) => abs(a.pos.y + endHandle) < abs(b.pos.y + endHandle) ? a : b).pos.x
            tries++
        }


        const handleHeight = h*random(.5, 1)

        let l = 0
        let leftCurve = [v(0, 0)]
        while (l < handleHeight) {
            l += random(100, 200)
            if (l < handleHeight) leftCurve.push(v(random(-handleWidth * .2, handleWidth * .2), l))
        }
        leftCurve.push(v(handleWidth * random(0, .2), handleHeight))


        l = 0
        let rightCurve = [v(0, 0)]
        while (l < handleHeight) {
            l += random(100, 200)
            if (l < handleHeight) rightCurve.push(v(random(-handleWidth * .2, handleWidth * .2), l))
        }
        rightCurve.push(v(handleWidth * random(-.2, 0), handleHeight))

        leftCurve = makeCurve(leftCurve)
        rightCurve = makeCurve(rightCurve)
        leftCurve.forEach(p => p.x += startHandle)
        rightCurve.forEach(p => p.x += endHandle)

        leftCurve.reverse()
        rightCurve.reverse()

        
        if (!this.handles) this.handles = []

        const handleCurve = []
        for (let i = 0; i < leftCurve.length; i++) {
            const start = leftCurve[i]
            const end = rightCurve.reduce((a, b) => abs(a.y - start.y) < abs(b.y - start.y) ? a : b)
            const center = p5.Vector.add(start, end).div(2)
            const r = p5.Vector.dist(start, end)
            handleCurve.push({ pos: center, r: r })
        }
        this.handles.push(handleCurve)
    }

    prepare() {
        this.revolveShape = revolve(this.shape)
        this.revolveShape = addShadows(this.revolveShape)
    }

    draw() {
        this.handles.forEach(handleCurve=>drawHandle(handleCurve))
        drawRevolve(this.revolveShape)
    }

    placeAntenas() {
        const sumAntenas = floor(random(1, 5))
        const places = Array(sumAntenas).fill(0).map(a => random(.1, .9)).sort()
        places.forEach(place => {
            place *= this.bodyLength
            const startPos = random(150,180)
            for (let i = 0; i < 50; i++) {
                const r = this.revolveShape.reduce((a, b) => abs(a.pos.y + place - i) < abs(b.pos.y + place - i) ? a : b).pos.x
                fill(0, 150 * (1 - i / 50))
                for (let j = 0; j < 6; j++) {
                    p = getPointOnEllipse(r * 2, r * 2 * .4, startPos - i - j).add(0, -place + i)
                    drawDot(p)
                }
            }

            const r = this.revolveShape.reduce((a, b) => abs(a.pos.y + place) < abs(b.pos.y + place) ? a : b).pos.x
            const antenaPos = getPointOnEllipse(r * 2, r * 2 * .4, startPos).add(0, -place)
            translate(antenaPos.x, antenaPos.y)
            antena()
            resetTranslation()
        })
    }

    addStrokes(places) {
        places.forEach(place=>{
            const newShape = new ExtrudedShape([
                { y: this.bodyLength*.1, r: 0, h: 0 },
                { y: this.bodyLength*.2, r: 0, h: 30 },
                { y: this.bodyLength*.8, r: 0, h: 0 }
            ], this.revolveShape, place, 10)
            newShape.draw()
        })
    }

    createCanister(){
        const p = this.shape.reduce((a,b)=>{
            if (b.pos.y > this.bodyLength) return a
            if (a.pos.x > b.pos.x) return a 
            return b
        })
        
        const canisterHeight = random(50,100)
        const canisterR = random(30,80)
        const canisterLength = random(100,250)

        const yPos = max(p.pos.y+canisterLength*.5,0)
        
        const r = this.revolveShape.reduce((a, b) => abs(a.pos.y + yPos+canisterLength*.5) < abs(b.pos.y + yPos+canisterLength*.5) ? a : b).pos.x
        fill(0)
        for (let i=0;i<canisterHeight+canisterR;i++){
            drawDot(v(-r-i,yPos+canisterLength*.5))
        }
        
        let canister = [
            {pos:v(0,0),r:0},
            {pos:v(canisterR,0),r:canisterR},
            {pos:v(canisterR,canisterLength),r:canisterR},
            {pos:v(0,canisterLength),r:0}
        ]
        let holder = [
            {pos:v(canisterR,canisterLength*.4),r:0},
            {pos:v(canisterR+10,canisterLength*.4),r:0},
            {pos:v(canisterR+10,canisterLength*.6),r:0},
            {pos:v(canisterR,canisterLength*.6),r:0}
        ]
        translate(-p.pos.x-canisterHeight,yPos)
        canister = booleanAnd(canister,holder)
        drawRevolve(revolve(canister))
        resetTranslation()
    }
}








function drawHandle(handleCurve) {
    rotate(-90)

    let handleColor = choose(colors)
    for (let i = 0; i < handleCurve.length; i++) {
        const center = handleCurve[i].pos
        const r = handleCurve[i].r
        const start = handleCurve[i].start ?? 0
        const end = handleCurve[i].end ?? 180
        const arcPoints = getEllipse(r, r * .4, 1, start, end)
        arcPoints.forEach(p => p.add(center))

        if (random() < 0.01) handleColor = choose(colors)
        fill(handleColor)
        beginShape()
        arcPoints.forEach(p => vertex(p.x, p.y))
        endShape()

        const shadeAngle = center.y < 250 ? map(center.y, 250, 60, 180, 0) : false
        arcPoints.forEach((p, a) => {
            let val = getShadeAtAngle(shade_round_shiny, a)
            val *= 255
            if (shadeAngle)
                if (a > shadeAngle)
                    val += 250 - center.y
            fill(0, val)
            drawDot(p)
        })
    }

    rotate(90)
}









function antena() {
    fill(0)
    rotate(90)

    const bottomLength = random(60)
    const topLength = random(60)
    const twists = round(random(0, 3))
    const ballSize = random(10, 20)
    const bottomBend = random(-.2, .2)
    const topBend = random(-.2, .2)
    const twistRadius = random(25, 100)


    for (let i = 0; i < bottomLength; i++) {
        translate(0, 2)
        rotate(bottomBend)
        circle(0, 0, 2)
    }
    for (let i = 0; i < 180 * twists; i++) {
        translate(0, .1)
        rotate(-.1 + i / (360 * twists))
        pos = getPointOnEllipse(twistRadius, twistRadius * 0.4, i * 2)
        circle(pos.x - twistRadius / 2, pos.y, 2)
    }
    for (let i = 0; i < topLength; i++) {
        translate(0, 2)
        rotate(topBend)
        circle(0, 0, 2)
    }
    ball = [
        { pos: v(0, 0), r: 0 },
        { pos: v(ballSize, 0), r: ballSize },
        { pos: v(ballSize, ballSize * 1.61), r: ballSize },
        { pos: v(0, ballSize * 1.61), r: 0 },
    ]
    ball = revolve(ball)
    drawRevolve(ball)
}











// handle() {
//     const startHandle = 80
//     const rStart = this.revolveShape.reduce((a, b) => abs(a.pos.y + startHandle) < abs(b.pos.y + startHandle) ? a : b).pos.x

//     const handleWidth = min(rStart * random(.5, 2), 200)

//     const endHandle = startHandle + handleWidth
//     const rEnd = this.revolveShape.reduce((a, b) => abs(a.pos.y + endHandle) < abs(b.pos.y + endHandle) ? a : b).pos.x

//     const handleHeight = random(200, 350)


//     let l = 0
//     let leftCurve = [v(0, 0)]
//     while (l < handleHeight) {
//         l += random(100, 200)
//         if (l < handleHeight) leftCurve.push(v(random(-handleWidth * .2, handleWidth * .2), l))
//     }
//     leftCurve.push(v(handleWidth * random(0, .2), handleHeight))


//     l = 0
//     let rightCurve = [v(0, 0)]
//     while (l < handleHeight) {
//         l += random(100, 200)
//         if (l < handleHeight) rightCurve.push(v(random(-handleWidth * .2, handleWidth * .2), l))
//     }
//     rightCurve.push(v(handleWidth * random(-.2, 0), handleHeight))

//     leftCurve = makeCurve(leftCurve)
//     rightCurve = makeCurve(rightCurve)
//     leftCurve.forEach(p => p.x += startHandle)
//     rightCurve.forEach(p => p.x += endHandle)

//     leftCurve.reverse()
//     rightCurve.reverse()

    // const handleR = (endHandle - startHandle) / 2
    // const connections = []
    // for (let i = startHandle; i < endHandle; i++) {
    //     const t = i - startHandle
    //     const r2 = t < handleR ? handleR - t : t - handleR
    //     const handleRAtPos = sqrt(handleR ** 2 - r2 ** 2)

    //     const pInShape = this.revolveShape.findIndex(p => abs(p.pos.y + i) < 2)
    //     const val = 90 - acos(handleRAtPos / this.revolveShape[pInShape].pos.x)
    //     this.revolveShape[pInShape].start = val

    //     connections.push([i - startHandle, this.revolveShape[pInShape].pos.x - sqrt(this.revolveShape[pInShape].pos.x ** 2 - handleRAtPos ** 2)])
    // }

    // this.handleCurve = []
    // for (let i = 0; i < leftCurve.length; i++) {
    //     const start = leftCurve[i]
    //     const end = rightCurve.reduce((a, b) => abs(a.y - start.y) < abs(b.y - start.y) ? a : b)
    //     const center = p5.Vector.add(start, end).div(2)
    //     const r = p5.Vector.dist(start, end)
    //     this.handleCurve.push({ pos: center, r: r })
    // }


    // const lastCenter = this.handleCurve[this.handleCurve.length-1].pos
    // const lastR = this.handleCurve[this.handleCurve.length-1].r

    // const connectionsReverse = [...connections].reverse()
    // const heighest = max(connections.map(a => a[1]))
    // const lowest = min(connections.map(a => a[1]))

    // for (let i = lowest; i < heighest; i++) {
    //     let startArc = connections.find(p => abs(p[1] - i) < 1)[0]
    //     let endArc = connectionsReverse.find(p => abs(p[1] - i) < 1)[0]
    //     if (startArc == endArc) {
    //         if (startArc < connections.length / 2) endArc = connections.length
    //         else startArc = 0
    //     }


    //     const vStart = startArc < handleR ? handleR - startArc : startArc - handleR
    //     let endAng = 180-acos(vStart/lastR)
    //     if (startArc > handleR) endAng-=90

    //     const vEnd = endArc < handleR ? handleR - endArc : endArc - handleR
    //     let startAng = 180-acos(vEnd/lastR)
    //     if (endArc > handleR) startAng-=90

    //     this.handleCurve.push({ pos: v(lastCenter.x,lastCenter.y-i+lowest), r: lastR, start:startAng, end:endAng })
    // }

// }
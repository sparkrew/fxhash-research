const elements = []
let windows = []
const groups = []


const roomWidth = 200
const roomOffset = random(-0.45, 0.45)
const roomHeight = 200
const roomDepth = 100
const lightDistance = 100
const cameraPosition = new Vec3(roomWidth * roomOffset, random(roomHeight), random(100, 200))
let cameraTarget = new Vec3(roomWidth * random(0, .5), random(roomHeight * .5), 0)

const coloringType = choose(['bw', 'mono', 'duo'])
const clr1 = HSBtoRGB(random(360), random(.6, .99), 0.99)
const clr2 = HSBtoRGB(random(360), random(.5), random(.2))

const windowsDeform = [random(.1), random() < 0.9 ? 0 : random(50)]
const windowsGrain = [10, random() < 0.8 ? 0 : 10]
const imageDeform = [random(5, 15), random() < 0.9 ? 0 : random(.01)]

windowSpace = 50
windowFunc = choose([doorWay, dividedWindows, blinds, arch, cross, gothic])()

windowFunc(0)

for (let x = -windowSpace; x > -100; x -= windowSpace) windowFunc(x)
for (let x = windowSpace; x < roomDepth; x += windowSpace) windowFunc(x)

function doorWay() {
    const doorH = random(40, roomHeight)
    const doorW = random(10, 50)
    return x => {
        addWindowPart('rect', x, doorH / 2, doorW, doorH, ['union'])
    }
}

function dividedWindows() {
    const windowSize = random(10, 20)
    const borderSize = random(3)
    const gridSize = [round_random(2, 5), round_random(2, 5)]
    const minHeight = random(10, roomHeight * .5)

    return x => {
        for (let x = 0; x < gridSize[0]; x++) {
            for (let y = 0; y < gridSize[1]; y++) {
                addWindowPart('rect', x * (windowSize + borderSize), minHeight + y * (windowSize + borderSize), windowSize / 2, windowSize / 2, ['union'])
            }
        }
    }
}

function blinds() {
    const windowSize = [random(40, 100), random(30, 100)]
    const blindHeight = random(1, 7)
    const nonBlindHeight = random(1, 3)
    const blindWidth = windowSize[0] - (random() < 0.5 ? 0 : random(10))
    const minHeight = random(10, roomHeight * .5)
    const blindMinHeight = minHeight + random(10, windowSize[1])

    return x => {
        addWindowPart('rect', x, minHeight + windowSize[1], windowSize[0], windowSize[1], ['union'])
        for (let y = blindMinHeight; y < minHeight + windowSize[1] * 2; y += blindHeight + nonBlindHeight) {
            addWindowPart('rect', x, y + blindHeight / 2, blindWidth, blindHeight / 2, ['subtract'])
        }
    }
}

function arch() {
    const windowSize = [random(10, 30), random(20, 60)]
    const minHeight = random() < 0.4 ? 0 : random(10, roomHeight * .5)
    const t = choose([0, 1, 2])

    return x => {
        addWindowPart('rect', x, minHeight + windowSize[1], windowSize[0], windowSize[1], ['union'])
        addWindowPart('circle', x, minHeight + windowSize[1] * 2, windowSize[0], 0, ['union'])

        if (t == 1) addWindowPart('circle', x, minHeight + windowSize[1] * 2, windowSize[0] * .5, 0, ['subtract'])
        else if (t == 2) {
            addWindowPart('rect', x, minHeight + windowSize[1] * 2, windowSize[0], 1, ['subtract'])
            addWindowPart('rect', x, minHeight + windowSize[1] * 2 / 3, windowSize[0], 1, ['subtract'])
            addWindowPart('rect', x, minHeight + windowSize[1] * 4 / 3, windowSize[0], 1, ['subtract'])
            addWindowPart('rect', x, minHeight + windowSize[1], 1, windowSize[1] * 1.5, ['subtract'])
        }
    }
}

function cross() {
    return x => {
        addWindowPart('rect', x, 50, 5, 50, ['union'])
        addWindowPart('rect', x, 70, 30, 5, ['smoothUnion'])
    }
}

function gothic() {
    const partWidth = random(5, 10)
    const numParts = round_random(2, 5)
    const minHeight = random(30)
    const partHeight = random(10, 50)
    const totalWidth = partWidth * numParts
    return x => {
        addWindowPart('rect', x, minHeight + partHeight, totalWidth, partHeight, ['union'])
        addWindowPart('arch', x, minHeight + partHeight * 2 + totalWidth, totalWidth, totalWidth, ['union'])
        for (let i = -1; i < numParts + 1; i++) {
            const xx = x - totalWidth + partWidth * (i + 1) * 2
            addWindowPart('rect', xx, minHeight + partHeight, 2, partHeight, ['subtract'])
            addWindowPart('arch', xx, minHeight + partHeight * 2 + totalWidth, totalWidth, totalWidth, ['subtract', 'border'])
        }
    }
}

numSpheres = random(25, 75)

// -------- COLUMNS --------

if (random() < 0.3) {
    if (random() < 0.5) {
        column(roomWidth / 2 - 20, 0, 10)
        column(roomWidth / 2 - 20, -50, 10)
        column(roomWidth / 2 - 20, -100, 10)
        column(roomWidth / 2 - 20, 50, 10)
        column(roomWidth / 2 - 20, 100, 10)
        numSpheres -= random(15)
        cameraPosition.x = Math.min(cameraPosition.x, roomWidth / 2 - 20)
    }
    if (random() < 0.5) {
        column(-roomWidth / 2 + 20, 0, 10)
        column(-roomWidth / 2 + 20, -50, 10)
        column(-roomWidth / 2 + 20, -100, 10)
        column(-roomWidth / 2 + 20, 50, 10)
        column(-roomWidth / 2 + 20, 100, 10)
        numSpheres -= random(15)
        cameraPosition.x = Math.max(cameraPosition.x, -roomWidth / 2 + 20)
    }
}


// -------- STAIRS --------

// stairs = []
// for (let i = 0; i < 50; i++) {
//     stairs.push(box(0, 0, 0, 50, 1, 10, ['union', 'round']))
//     stairs[i].translate(new Vec3(0, i * 3, -i * 10))
// }
// stairsGroup = new Group(stairs)
// stairsGroup.translate(new Vec3(roomWidth / 2, 0, 0))
// groups.push(stairsGroup)




// -------- BLOB --------

// base
const isStatue = random() < .5
if (isStatue) {
    baseSize = { x: random(10, 40), y: random(5, 15), z: random(10, 40) }
    groups.push(new Group([box(0, baseSize.y / 2, 0, baseSize.x, baseSize.y, baseSize.z, ['union'])]))
}
const withRods = isStatue  ? false : random() < .5
spheres = []
sphereMaxHeight = roomHeight * random(.2, .5)
if (numSpheres < 5) numSpheres = 5

rods = []
for (let i = 0; i < numSpheres; i++) {
    const r = random(isStatue ? 6 : 12)

    let spherePosition = [0, 0, 0]
    if (isStatue) spherePosition = [baseSize.x * random(-.4, .4), baseSize.y + r + random(sphereMaxHeight), baseSize.z * random(-.4, .4)]
    else spherePosition = [roomWidth * random(-.5, .5), random(r, 50), random(roomDepth * .5)]

    newSphere = sphere(...spherePosition, r, ['smoothUnion'])
    spheres.push(newSphere)

    if (withRods && random() < .5) {
        const rodRadius = .5
        const rod = cylinder(spherePosition[0], 0, spherePosition[2], rodRadius, spherePosition[1], ['union'])
        rods.push(rod)
    }
}
groups.push(new Group(spheres))
if (rods.length > 0) groups.push(new Group(rods))




// -------- BENCHES --------

// seat = box(0, 5, 0, 10, 6, 10, 'union')
// back = box(0, 10, -9, 10, 20, 1, 'union')
// bench = new Group([seat, back])

// bench2 = bench.clone()
// bench2.translate(new Vec3(0, 0, -30))
// bench2.rotate(new Vec3(0, 180, 0))
// coupleBenches = new Group([bench, bench2])
// groups.push(coupleBenches)

// coupleBenches2 = coupleBenches.clone()
// coupleBenches2.translate(new Vec3(0, 0, 55))
// groups.push(coupleBenches2)

// coupleBenches3 = coupleBenches.clone()
// coupleBenches3.translate(new Vec3(-35, 0, 0))
// groups.push(coupleBenches3)

// coupleBenches4 = coupleBenches3.clone()
// coupleBenches4.translate(new Vec3(0, 0, 55))
// groups.push(coupleBenches4)



// -------- STATUE --------

// groups.push(new Group([
//     box(16, 22, 0, 5, 5, 30, ['union']),
//     sphere(0, 30, 0, 10, ['smoothUnion']),
// ]))

// grp = new Group([
//     box(0, 5, 0, 20, 10, 20, ['union']),
//     sphere(0, 15, 5, 10, ['smoothUnion']),
//     sphere(0, 33, 5, 8, ['smoothUnion']),
//     sphere(5, 45, 5, 5, ['smoothUnion'])
// ])
// grp.rotate(new Vec3(0, -30, 0))
// groups.push(grp)







windows = windows.map(w => w.extract()[0])

groups.forEach(group => group.extract())
centers = groups.map(group => group.boundingBox().position)
centeroid = centers.reduce((a, b) => a.add(b)).multS(1 / centers.length)
cameraTarget = centeroid
// cameraTarget.y = 0

room = [
    { normal: new Vec3(-1, 0, 0), distance: roomWidth / 2 + .1 },
    { normal: new Vec3(1, 0, 0), distance: roomWidth / 2 },
    { normal: new Vec3(0, 0, 1), distance: roomDepth },
    { normal: new Vec3(0, 1, 0), distance: 0 },
    { normal: new Vec3(0, -1, 0), distance: roomHeight },
]


// ------------------ Window Parts
function addWindowPart(type, x, y, w, h, operations, rot = 0) {
    const part = new Object3D(type, operations)
    part.translate(new Vec3(x, y, 0))
    part.scale = new Vec3(w, h, 0)
    part.rotate(new Vec3(0, 0, rot))
    windows.push(part)
    return part
}
function window_rect(x, y, w, h, operations = []) {
    const obj = new Object3D('rect', operations)
    obj.translate(new Vec3(x, y, 0))
    obj.scale = new Vec3(w, h, 1)
    windows.push(obj)
    return obj
}
function window_circle(x, y, r, operations = []) {
    const circle = new Object3D('circle', operations)
    circle.translate(new Vec3(x, y, 0))
    circle.scale.x = r
    windows.push(circle)
    return circle
}

// ------------------ Objects
function box(x, y, z, w, h, d, operations, rx = 0, ry = 0, rz = 0) {
    const box = new Object3D('box', operations)
    box.translate(new Vec3(x, y, z))
    box.scale = new Vec3(w, h, d)
    box.rotation = new Vec3(rx, ry, rz)
    return box
}
function sphere(x, y, z, r, operations) {
    const sphere = new Object3D('sphere', operations)
    sphere.translate(new Vec3(x, y, z))
    sphere.scale.x = r
    return sphere
}
function cylinder(x, y, z, r, h, operations) {
    const cylinder = new Object3D('cylinder', operations)
    cylinder.translate(new Vec3(x, y, z))
    cylinder.scale = new Vec3(r, h, 0)
    return cylinder
}


function column(x, z, r) {
    const elements = [cylinder(0, roomHeight / 2, 0, r, roomHeight, ['union'])]
    for (let i = 0; i < 16; i++) {
        const x = Math.sin(radians(i * 22.5)) * r
        const z = Math.cos(radians(i * 22.5)) * r
        // elements.push(cylinder(x, 0, z, r*.2, roomHeight, 'subtract'))
    }
    elements.push(cylinder(0, 3, 0, r * 1.2, 6, ['union']),)
    columnGroup = new Group(elements)
    columnGroup.translate(new Vec3(x, 0, z))
    groups.push(columnGroup)
}
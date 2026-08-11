// these are the variables you can use as inputs to your algorithms
// console.log(fxhash)   // the 64 chars hex number fed to your algorithm
// console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// fxpreview(): a function you can call whenever the code is ready to be captured
// isFxpreview: a boolean, true when the code is executed to take the capture, false otherwise

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }

// !! you must handle any viewport size (by implementing a response to the resize event of the window)

// this code writes the values to the DOM as an example
// container.innerText = `
//   random hash: ${fxhash}\n
//   some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]\n
// `

// constants
const WIDTH = 200 * 1.0
const HEIGHT = 282 * 1.0
const SCALE_UP = true
const MAX_LENGTH = 600
// const MAX_SCALE = 1.5

// setup
// import Noise from './noise.js'
const min = Math.min
const max = Math.max
const floor = Math.floor
const ceil = Math.ceil
const random = (a, b) => fxrand() * (b - a) + a
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')
const clear = () => ctx.clearRect(0, 0, canvas.width, canvas.height)
const moveTo = (x, y) => {
    const RENDER_SCALE = canvas.width / WIDTH
    ctx.moveTo(x * RENDER_SCALE, y * RENDER_SCALE)
}
const lineTo = (x, y) => {
    const RENDER_SCALE = canvas.width / WIDTH
    ctx.lineTo(x * RENDER_SCALE, y * RENDER_SCALE)
}
const log = console.log


const updateCanvasSize = () => {
    const vw = min(max(document.documentElement.clientWidth || 0, window.innerWidth || 0), MAX_LENGTH)
    const vh = min(max(document.documentElement.clientHeight || 0, window.innerHeight || 0), MAX_LENGTH)

    const vws = vw / WIDTH
    const vhs = vh / HEIGHT
    const scale = min(vws, vhs)

    var canvasWidth = WIDTH
    var canvasHeight = HEIGHT

    if (scale < 1.0 || SCALE_UP) {
        canvasWidth *= scale
        canvasHeight *= scale
    }

    canvas.width = canvasWidth
    canvas.height = canvasHeight
    canvas.style.width = canvasWidth
    canvas.style.height = canvasHeight
}

window.addEventListener('resize', () => {
    updateCanvasSize()
    render()
}, true)


const render = () => {
    fxrand = sfc32(...hashes)
    const simplex = new Noise(fxhash)
    const noise = simplex.noise

    log(fxhash)

    // const CANVAS_WIDTH = canvas.width
    // const CANVAS_HEIGHT = canvas.height
    const RENDER_SCALE = canvas.width / WIDTH

    ctx.strokeStyle = 'black';
    ctx.lineWidth = random(1, 2) * RENDER_SCALE * 0.5; // 1-2.5 (2)

    ctx.lineJoin = random(1, 2) > 1.5 ? 'round' : 'miter';


    var target_step_size_x = random(2, 4) // 2 - 4 (3)
    var target_step_size_y = random(8, 14) // 8 - 14  (12)
    var step_size_x = WIDTH / floor(WIDTH / target_step_size_x)
    var step_size_y = HEIGHT / floor(HEIGHT / target_step_size_y)
    var steps_x = WIDTH / step_size_x
    var steps_y = HEIGHT / step_size_y

    // generate symbols
    var symbols = [[]]

    for (var i = 0; i < 28; i++) {
        var point_count = random(2, 3)
        var symbol_points = []

        for (var j = 0; j < point_count; j++) {
            var xo = noise([i + 10, j], 1, 2, 1) * 1.1
            var yo = noise([i * 10, j], 1, 2, 1) * 0.9

            symbol_points.push([xo, yo])
        }

        symbols.push(symbol_points)
    }

    const draw_letter = (i, j) => {
        // console.log("drawing", i , j)
        ctx.beginPath();

        var x = i * step_size_x + step_size_x / 2
        var y = j * step_size_y + step_size_y / 2

        y += noise([x, y * 99], 0.005, 1.5, 1)

        moveTo(x, y)

        if (i !== 3 && random(1, 10) > 9) {
            j += 2
        }

        var char_index = (noise([i * 30 + j], 1, 1, 3) / 4 + 0.5) * symbols.length
        char_index = floor(char_index)

        var symbol_points = symbols[char_index]

        for (var point of symbol_points) {
            var [xo, yo] = point

            xo += noise([i, j], 1, 1, 1)
            yo += noise([i * 4, j + 10], 1, 1, 1)

            var amp = 1.6 + noise([i * 42 + j * 1], 1, 1, 3)

            lineTo(x + xo * amp, y + yo * amp)
        }

        ctx.stroke()
        ctx.closePath()
    }

    const draw_calls = []

    for (var j = steps_y - 4; j > 2; j--) {
        for (var i = steps_x - 7; i > 5; i--) {
            const i2 = i
            const j2 = j

            const call = () => draw_letter(i2, j2)

            draw_calls.push(call)
            // draw_letter(i, j)
            // setTimeout()
        }
    }

    // const pop_draw = () => {
    //     // console.log("drawing")
    //     const call = draw_calls.pop()

    //     if (call) {
    //         setTimeout(() => {
    //             call()
    //             pop_draw()
    //         }, random(2, 5))
    //     } else {
    //         fxpreview()
    //     }
    // }

    // if (isFxpreview) {
    //     draw_calls.map(call => call())
    // } else {
    //     pop_draw()
    // }

    draw_calls.map(call => call())
    fxpreview()

}


updateCanvasSize()
render()
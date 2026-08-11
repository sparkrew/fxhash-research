// these are the variables you can use as inputs to your algorithms
console.log(fxhash) // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

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

// this code writes the values to the DOM as an example
const container = document.createElement("div")
container.innerText = `
  random hash: ${fxhash}\n
  some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]\n
`
document.body.prepend(container)

var canvas = document.getElementById('unkple')
var ctx = canvas.getContext('2d')

var backgcol = ['Black', 'Red', 'LightCoral', 'DeepPink',
    'Pink', 'OrangeRed', 'LightSalmon', 'Yellow', 'Khaki', 'Purple', 'Violet', 'Darkgreen', 'Lime', 'Blue', 'SkyBlue', 'Brown', 'Wheat', 'Beige'
];

var bgcol = backgcol[Math.floor(fxrand() * backgcol.length)];

var fillcol = ['Black', 'Red', 'LightCoral', 'DeepPink',
    'Pink', 'OrangeRed', 'LightSalmon', 'Yellow', 'Khaki', 'Purple', 'Violet', 'Darkgreen', 'Lime', 'Blue', 'SkyBlue', 'Brown', 'Wheat', 'Beige'
];

var fillcolor = fillcol[Math.floor(fxrand() * fillcol.length)];

var strkcol = ['DarkRed', 'Salmon', 'MediumVioletRed', 'Hotpink', 'Tomato', 'Orange', 'Gold', 'DeepPink', 'PeachPuff', 'Indigo', 'Orchid', 'Teal', 'PaleGreen', 'MidnightBlue', 'Aquamarine', 'Maroon', 'Azure'];

var strokecolor = strkcol[Math.floor(fxrand() * strkcol.length)];

var strksize = ['1', '2', '3', '4'];

var strokesize = strksize[Math.floor(fxrand() * strksize.length)];

ctx.fillStyle = bgcol
ctx.fillRect(0, 0, canvas.width, canvas.height)

var xMin = 150
var xMax = canvas.width - xMin
var yMin = 110
var yMax = canvas.height - yMin

var nLines = 80
var nPoints = 100

var mx = (xMin + xMax) / 2
var dx = (xMax - xMin) / nPoints
var dy = (yMax - yMin) / nLines

var x = xMin
var y = yMin
ctx.moveTo(xMin, yMin)

function rand(min, max) {
    return Math.random() * (max - min) + min
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function randNormal(mu, sigma) {
    var sum = 0
    for (var i = 0; i < 6; i += 1) {
        sum += rand(-1, 1)
    }
    return mu + sigma * sum / 6
}

function gaussianPDF(x, mu, sigma) {
    var sigma2 = Math.pow(sigma, 2)
    var numerator = Math.exp(-Math.pow((x - mu), 2) / (2 * sigma2))
    var denominator = Math.sqrt(2 * Math.PI * sigma2)
    return numerator / denominator
}

ctx.strokeStyle = strokecolor
ctx.lineWidth = strokesize
ctx.fillStyle = fillcolor

for (var i = 0; i < nLines; i++) {
    ctx.beginPath()
    var nModes = randInt(1, 4)
    var mus = []
    var sigmas = []
    for (var j = 0; j < nModes; j++) {
        mus[j] = rand(mx - 50, mx + 50)
        sigmas[j] = randNormal(24, 30)
    }
    var w = y
    for (var k = 0; k < nPoints; k++) {
        x = x + dx
        var noise = 0
        for (var l = 0; l < nModes; l++) {
            noise += gaussianPDF(x, mus[l], sigmas[l])
        }
        var yy = 0.2 * w + 0.8 * (y - 500 * noise + noise * Math.random() * 180 + Math.random())
        ctx.lineTo(x, yy)
        w = yy
    }

    ctx.fill()
    ctx.stroke()
    x = xMin
    y = y + dy
    ctx.moveTo(x, y)
}

function getStrokesize(value) {
  if (strokesize < 2) return "Small"
  if (strokesize < 3) return "Medium"
  if (strokesize < 4) return "Big"
  else return "Extra Big"
}

window.$fxhashFeatures = {
  "Background": bgcol,
  "Fill color": fillcolor,
  "Stroke color": strokecolor,
  "Stroke Size": getStrokesize()
}
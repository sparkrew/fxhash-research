function Perlin(x, y, z) {

    var p = new Array(512)
    var permutation = [151, 160, 137, 91, 90, 15,
        131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23,
        190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
        88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166,
        77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244,
        102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
        135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123,
        5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42,
        223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9,
        129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228,
        251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107,
        49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254,
        138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180
    ];
    for (var i = 0; i < 256; i++)
        p[256 + i] = p[i] = permutation[i];

    var X = Math.floor(x) & 255, // FIND UNIT CUBE THAT
        Y = Math.floor(y) & 255, // CONTAINS POINT.
        Z = Math.floor(z) & 255;
    x -= Math.floor(x); // FIND RELATIVE X,Y,Z
    y -= Math.floor(y); // OF POINT IN CUBE.
    z -= Math.floor(z);
    var u = fade(x), // COMPUTE FADE CURVES
        v = fade(y), // FOR EACH OF X,Y,Z.
        w = fade(z);
    var A = p[X] + Y,
        AA = p[A] + Z,
        AB = p[A + 1] + Z, // HASH COORDINATES OF
        B = p[X + 1] + Y,
        BA = p[B] + Z,
        BB = p[B + 1] + Z; // THE 8 CUBE CORNERS,

    return scale(lerp(w, lerp(v, lerp(u, grad(p[AA], x, y, z), // AND ADD
                grad(p[BA], x - 1, y, z)), // BLENDED
            lerp(u, grad(p[AB], x, y - 1, z), // RESULTS
                grad(p[BB], x - 1, y - 1, z))), // FROM  8
        lerp(v, lerp(u, grad(p[AA + 1], x, y, z - 1), // CORNERS
                grad(p[BA + 1], x - 1, y, z - 1)), // OF CUBE
            lerp(u, grad(p[AB + 1], x, y - 1, z - 1),
                grad(p[BB + 1], x - 1, y - 1, z - 1)))));
}

function fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(t, a, b) {
    return a + t * (b - a);
}

function grad(hash, x, y, z) {
    var h = hash & 15; // CONVERT LO 4 BITS OF HASH CODE
    var u = h < 8 ? x : y, // INTO 12 GRADIENT DIRECTIONS.
        v = h < 4 ? y : h == 12 || h == 14 ? x : z;
    return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v);
}

function scale(n) {
    return (1 + n) / 2;
}


// I am very ashamed of my code
// I am very ashamed of my code
// I am very ashamed of my code
// I am very ashamed of my code
// I am very ashamed of my code
let canvas = document.getElementById('canvas');
let body = document.getElementById('body');
let ctx = canvas.getContext('2d');
let width = canvas.width = 800;
let height = canvas.height = 800;

let trigonometricName1, trigonometricName2, colorTheme, perlinStatus, alphamode, orientation,superColor, x, y, dd, xx, yy;

let colorsHue = [100, 200, 300];
let powMiltiX = [1, 2, 3, 4, 5, 6];
let powMiltiY = [0, 1];
let trigonometric = [Math.sin, Math.cos, Math.tan];

let trigonometricStatus = fxrand();
let trigonometricStatus2 = fxrand();

if (fxrand() > 0.95) {
    superColor = true;
} else {
    superColor = false;
}

if (fxrand() < 0.6) {
    perlinStatus = false;
} else {
    perlinStatus = true;
}

if (fxrand() < 0.6) {
    orienration = 1;
} else {
    orienration = -1;
}

if (fxrand() < 0.8) {
    alphamode = false;
} else {
    alphamode = true;
}

if (trigonometricStatus < 0.4) {
    trigonometricName1 = Math.sin;
}
if (trigonometricStatus >= 0.4 && trigonometricStatus < 0.94) {
    trigonometricName1 = Math.cos;
}
if (trigonometricStatus >= 0.94) {
    trigonometricName1 = Math.tan;
}

if (trigonometricStatus2 < 0.4) {
    trigonometricName2 = Math.sin;
}
if (trigonometricStatus2 >= 0.4 && trigonometricStatus2 < 0.94) {
    trigonometricName2 = Math.cos;
}
if (trigonometricStatus2 >= 0.94) {
    trigonometricName2 = Math.tan;
}

let parameters = {
    'saturate': `60%`,
    'light': `60%`,
    'randX': fxrand().toFixed(2),
    'randY': fxrand().toFixed(2),
    'speed': perlinStatus,
    'alpha': alphamode,
    'orienration': orienration,
    'superColor': superColor,
    'hue': colorsHue[Math.floor(fxrand() * 3)],
    'powX': powMiltiX[Math.floor(fxrand() * 6)],
    'powY': powMiltiY[Math.floor(fxrand() * 2)],
    'theme': function () {
        if (this.hue === colorsHue[0]) {
            return 'Green'
        };
        if (this.hue === colorsHue[1]) {
            return 'Blue'
        };
        if (this.hue === colorsHue[2]) {
            return 'Red'
        }
    },
    'trigonometric1': trigonometricName1,
    'trigonometric2': trigonometricName2,
    'trigonometricName1': function () {
        if (this.trigonometric1 === Math.sin) {
            return 'Sin'
        };
        if (this.trigonometric1 === Math.cos) {
            return 'Cos'
        };
        if (this.trigonometric1 === Math.tan) {
            return 'Tan'
        }
    },
    'trigonometricPeriod1': function () {
        if (this.trigonometric1 === Math.sin) {
            return 2
        };
        if (this.trigonometric1 === Math.cos) {
            return 2
        };
        if (this.trigonometric1 === Math.tan) {
            return 1
        }
    },
    'trigonometricName2': function () {
        if (this.trigonometric2 === Math.sin) {
            return 'Sin'
        };
        if (this.trigonometric2 === Math.cos) {
            return 'Cos'
        };
        if (this.trigonometric2 === Math.tan) {
            return 'Tan'
        }
    },
    'trigonometricPeriod2': function () {
        return 2
    },

}
let time = 0;
let time1 = 0;

window.$fxhashFeatures = {
    'Color theme': parameters.theme(),
    'Function X': parameters.trigonometricName1(),
    'Function Y': parameters.trigonometricName2(),
    'Async speed': parameters.speed,
    'Alpha mode': parameters.alpha,
    'Orientation': parameters.orienration,
    'Super color': parameters.superColor
};

function lerpus(x, y, c) {
    return x * (1 - c) + y * c
}

function drawus1(time) {
    return [100 * Math.pow(Math.cos(time * 2 * Math.PI), 1) - 50 * parameters.randX,
        100 * Math.pow(trigonometricName1(time * parameters.trigonometricPeriod1() * Math.PI), parameters.powX)
    ]
}

function drawus2(time) {
    return [400 * parameters.randY + 1 * 350 * Math.cos(time * 2 * Math.PI),
        100 + 1 * 50 * Math.pow(trigonometricName2(time * parameters.trigonometricPeriod2() * Math.PI), parameters.powY)
    ]
}

function draw() {
    time = (time + 0.015) % 1;
    time1++;
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, width, height);
    ctx.translate(width / 2, height / 2 - 100);
    for (let i = 0; i < 10; i++) {
        if (parameters.alpha) {
            ctx.globalAlpha = 1 / (i / 2);
        }
        for (let d = 0; d < 300; d++) {
            if (parameters.speed) {
                if (d < Math.floor(Perlin(Math.sin(i * 2) * 0.5, time1 / ((i + 1) * 400), time1 / 10000) * 200)) {
                    continue;
                }
            }
            if (!parameters.superColor) {
                ctx.strokeStyle = `hsl(${parameters.hue + i * 10 * Perlin(Math.cos(d*2) * 0.5, time1 / 20, 0)},${parameters.saturate},60%)`;
            } else {
                ctx.strokeStyle = `hsl(${parameters.hue + (i*100) * 10 * Perlin(Math.cos(d*2) * 0.5, time1 / 20, 0)},${parameters.saturate},60%)`;
            }
            dd = d / 600;
            ctx.beginPath();
            xx = lerpus(drawus1(0.5 * dd)[0], drawus2(time - dd)[0], dd);
            yy = lerpus(drawus1(time - 1.5 * dd)[1], drawus2(dd)[1], dd);
            ctx.beginPath();
            ctx.arc(xx, yy + i * 20, 1, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(-xx, parameters.orienration * yy + i * 20, 1, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.stroke();
        }
    }
    ctx.translate(-width / 2 + 0, -height / 2 + 100);
}

function render() {
    draw();
    window.requestAnimationFrame(render);
}

render();

window.onkeyup = function (e) {
    if (e.code === 'Space') {
        body.classList.toggle('body--invert');
    }
};
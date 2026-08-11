/*
 * Rainbow Drenk.
 *
 */


// Event Listeners
addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});

function makeNoiseMap(scale) {
    var imgData = ctx.createImageData(canvas.width, canvas.height);
    var i;
    let brightness;
    let x, y;
    for (i = 0; i < imgData.data.length; i += 4) {
        //normalized coordinates
        x = i / 4 % canvas.width * scale;
        y = (i / 4 - x) / canvas.width * scale;
        imgData.data[i + 0] = noise.simplex2(x / canvas.width + 0.5, y / canvas.height) * 100;
        imgData.data[i + 1] = noise.simplex2(x / canvas.width, y / canvas.height) * 100;
        imgData.data[i + 2] = noise.simplex2(x / canvas.width - 0.5, y / canvas.height) * 100;
        imgData.data[i + 3] = 255;
    }
    return imgData;
}

function distort(ctx, displacementMap, intensity) {
    let outBuffer = ctx.createImageData(canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let dispData = displacementMap.data;

    for (var i = 0; i < outBuffer.data.length; i += 4) {
        //calculate offset per pixel
        // x-offset dispData[i]
        // y-offset dispData[i+1]
        // values 0-255
        // xoffset in target pixel coordinates x-offset/255*canvas.width * 4 in bytes
        // yoffset in target pixel coordinates y-offset/255*canvas.height
        //let xoffset = dispData[i]/255*canvas.width * 4;
        //console.log(xoffset);
        let offsetx = Math.floor(dispData[i] / intensity);
        let offsety = Math.floor(dispData[i + 1] / intensity);
        let offset = offsetx * 4 + offsety * canvas.width * 4;
        outBuffer.data[i + 0] = imageData[i + offset]; // red
        outBuffer.data[i + 1] = imageData[i + offset + 1]; // green
        outBuffer.data[i + 2] = imageData[i + offset + 2];  // blue
        outBuffer.data[i + 3] = 255;
    }

    ctx.putImageData(outBuffer, 0, 0);
};

// Objects
class Circle {
    constructor(x, y, radius, color, offset) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.offset = offset;
    }

    draw() {
        ctx.save();
        ctx.alpha = 0.01;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = 'hsla(' + hue + ', 75%, 50%, 0.5)'; // this.color;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }

    update() {
        this.draw();
    }
}

function init() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    circles = [];

    for (let i = 0; i < 24; i++) {
        circles.push(
            new Circle(
                // Given a radius length r and an angle t in radians and a circle's center (h,k)
                r * Math.cos(i) + canvas.width / 2,
                r * Math.sin(i) + canvas.height / 2,
                fxrand() * 40,
                `hsl(${255 * (i / 500)}, 50%, 50%)`,
                0));
    }
}

function animate() {
    requestAnimationFrame(animate);

    circles.forEach(circle => {
        circle.x += noise.simplex3(circle.x / canvas.width, circle.y / canvas.height, time) * 10;
        circle.y += noise.simplex3(circle.x / canvas.width, circle.y / canvas.height, time) * 10;
        circle.draw();
    });

    hue = ((hue + fxrand()) % 360);
    time += 0.01;
    distort(ctx, noiseMap, 24);
}

// Animation Loop
// start-o
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let circles;
let distance = 50;
let amount = 5;
let r = 200;
let hue = fxrand() * 360;
let time = 0;

canvas.width = innerWidth;
canvas.height = innerHeight;
noise.seed(fxrand());

let noiseMap = makeNoiseMap(4);

init();
ctx.putImageData(noiseMap, 0, 0);
animate();
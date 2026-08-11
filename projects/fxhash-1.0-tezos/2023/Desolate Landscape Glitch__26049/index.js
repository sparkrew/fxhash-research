/*
epileptic pixels
by Daniel Oropeza
23/02/2023
*/


function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

document.addEventListener("keyup", (event) => {
    if (event.key === "s" || event.key === "S") {
        event.preventDefault();
        screencap();
    }
})

// Hydra code:
R1 = random() * 5
R2 = random() * 5
R3 = random() * (.75 - .15) + .15
R4 = random() * (.75 - .15) + .15
R5 = random() * (.75 - .15) + .15
R6 = random() * (.75 - .15) + .15
R7 = Math.ceil(random() * (25 - 5) + 5)
R8 = Math.ceil(random() * (25 - 5) + 5)
R9 = random() * (5 - 1) + 1
R10 = random() - .5
R11 = random() - .5
AR1 = [-1.25, 1.25];
R12 = AR1[Math.floor(random() * AR1.length)]

let r1 = random(0.1, 1.3) * 2
let r2 = random(0.1, 1.3) * 2
let r3 = random(0.1, 1.3) * 2
let r4 = random(0.1, 1.3) * 2
let r5 = random(0.1, 1.3) * 2
let r6 = random(0.1, 1.3) * 2
let r7 = random(0.1, 1.3) * 2
let r8 = random(0.1, 1.3) * 2
let r9 = random(0.1, 1.3) * 2
let r10 = random(0.1, 1.3) * 2
let r11 = random(0.1, 1.3) * 2
let r12 = random(0.1, 1.3) * 2
let r13 = random(0.1, 1.3) * 2
let r14 = random(0.1, 1.3) * 2
let r15 = random(0.1, 1.3) * 2
let r16 = random(0.1, 1.3) * 2
let r17 = random(0.1, 1.3) * 2
let r18 = random(0.1, 1.3) * 2
let r19 = random(0.1, 1.3) * 2
let r20 = random(0.1, 1.3) * 2

let xx1 = random() * 100
let xx2 = random() * 100
let xx3 = random() * 100
let xx4 = random() * 100
let xx5 = random() * 100
let xx6 = random() * 100
let xx7 = random() * 100

let yy1 = random() * 100
let yy2 = random() * 100
let yy3 = random() * 100
let yy4 = random() * 100
let yy5 = random() * 100
let yy6 = random() * 100
let yy7 = random() * 100


RT1 = random() * (.75 - .25) + .25
RT2 = random() * (.75 - .25) + .25
RT3 = random() * (.75 - .5) + .5
RT4 = random() * (.75 - .5) + .5
RT5 = random() * (.75 - .25) + .25
RT6 = random() * (.75 - .25) + .25
RT7 = random() * (.85 - .5) + .5
RT8 = random() * (.95 - .5) + .5
RT9 = random() * (.85 - .4) + .4
RT10 = random() * (.95 - .5) + .5
RT11 = random() * (.5 - .125) + .125
RT12 = random() * (.5 - .125) + .125
RT13 = random() * (.5 - .125) + .125

BLUR = 50
B = .2

A = () => window.innerHeight / window.innerWidth

src(o0)
	.contrast(1.05)
	.saturate(1.25)
	.diff(osc(2,0,7)
		.scale(1, r1, r2)
		.hue(RT1)
		.thresh(RT7)
		.scroll(xx1, yy1))
	.diff(osc(2,0,7)
		.scale(1, r3, r4)
		.hue(RT2)
		.thresh(RT6)
		.scroll(xx2, yy2))
	.diff(osc(2,0,7)
		.scale(r5, r6, r7)
		.hue(RT3)
		.thresh(RT5)
		.scroll(xx3, yy3))
	.diff(osc(2,0,7)
		.scale(r8, r9, r10)
		.hue(RT4)
		.thresh(RT4)
		.scroll(xx4, yy4))
	.diff(osc(2,0,7)
		.scale(r11, r12, r13)
		.hue(RT5)
		.thresh(RT3)
		.scroll(xx5, yy5))
	.diff(osc(2,0,7)
		.scale(r14, r15, r16)
		.hue(RT6)
		.thresh(RT2)
		.scroll(xx6, yy6))
	.diff(osc(2,0,7)
		.scale(r17, r18, r19)
		.hue(RT7)
		.thresh(RT1)
		.scroll(xx7, yy7))
	.diff(osc(2,0,7))
	.add(shape(4, .9925, 0.015), 0)
	.add(noise(innerWidth, 0)
		.modulateRotate(noise(100, 0)), .025)
	.modulateScale(src(o0), .2)
	.modulateRotate(src(o0), .05)
	.modulateScale(gradient())
	.modulatePixelate(src(o0)
		.rotate(random() * 999)
		.hue(random(0.1, 200))
		.thresh(RT1)
		.invert(), random(1, 1000), random(1, 1000))
    .rotate(random() * 999)
	.scale(r18, r19, r20)
	.color(random(-1, 1), -1, random(0, 1))
  .saturate(random(1.05,1.79))
	.contrast(R12)
	.luma(0.25)
	.diff(src(o0)
		.scrollX(0.001))
	.blend(src(o0))
.blend(src(o0))
	.hue(random(0.1, 200))
	.out(o0)

solid(0,0,0)
      .color(-1,0.5,1).hue(random(0.1, 200)).contrast(1.05).saturate(1.9)
		.scale(1, window.innerHeight/window.innerWidth)
		.modulate(noise(300), 0.01)
                   .modulate(noise(8,0.1),0.02)
           .modulateScale(gradient()
			.r(0.01))
	.layer(src(o0)
		.blend(src(o0)
			.scrollX(.001), .148)
		.modulate(noise(200)
			.pixelate()
			.thresh(RT2), .001)

		.saturate(2.0)
		.brightness(-.001)
		.layer(noise(300, .125)
			.luma(random(.71, .79)))

		.hue())
	.mult(shape(4, .95)
		.thresh()
		.scale(1, 1, () => (window.innerWidth / window.innerHeight) * .4)
		.luma())
	.out(o2)

render(o2)


function random(min, max) {
	let rand = fxrand();
	if (typeof min === "undefined") {
		return rand;
	} else if (typeof max === "undefined") {
		if (min instanceof Array) {
			return min[Math.floor(rand * min.length)];
		} else {
			return rand * min;
		}
	} else {
		if (min > max) {
			const tmp = min;
			min = max;
			max = tmp;
		}

		return rand * (max - min) + min;
	}
}

function map(current, in_min, in_max, out_min, out_max) {
	return (
		((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
	);
}

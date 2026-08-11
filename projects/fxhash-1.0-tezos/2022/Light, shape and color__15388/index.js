/*
Light, shape and color
by Daniel Oropeza
23/06/2022
*/


function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}


// Hydra code:

//A = ()=> window.innerHeight/window.innerWidth

AR1 = [-1,1];
R12 = AR1[Math.floor(fxrand() * AR1.length)]

const colourGap = fxrand(0.25, 1)
const r = fxrand(colourGap, colourGap + 1);
const g = fxrand(colourGap, colourGap + 1);
const b = fxrand(colourGap, colourGap + 1);

const r2 = fxrand(colourGap, colourGap + 1);
const g2 = fxrand(colourGap, colourGap + 1);
const b2 = fxrand(colourGap, colourGap + 1);

const r3 = fxrand(colourGap, colourGap + 1);
const g3 = fxrand(colourGap, colourGap + 1);
const b3 = fxrand(colourGap, colourGap + 1);

const r4 = fxrand(colourGap, colourGap + 1);
const g4 = fxrand(colourGap, colourGap + 1);
const b4 = fxrand(colourGap, colourGap + 1);

const r5 = fxrand(colourGap, colourGap + 1);
const g5 = fxrand(colourGap, colourGap + 1);
const b5 = fxrand(colourGap, colourGap + 1);

const r6 = fxrand(colourGap, colourGap + 1);
const g6 = fxrand(colourGap, colourGap + 1);
const b6 = fxrand(colourGap, colourGap + 1);

const r7 = fxrand(colourGap, colourGap + 1);
const g7 = fxrand(colourGap, colourGap + 1);
const b7 = fxrand(colourGap, colourGap + 1);

const r8 = fxrand(colourGap, colourGap + 1);
const g8 = fxrand(colourGap, colourGap + 1);
const b8 = fxrand(colourGap, colourGap + 1);
const rStart = fxrand(1, 9);
const gStart = fxrand(1, 9);
const bStart = fxrand(1, 9);
const hue1 = fxrand(0.1,200);

A = ()=> window.innerHeight/window.innerWidth
amt = 20
s = solid();
for (i = 0; i < amt; i++) {
	step = 1 / amt;
	s = s.layer(shape(4, 1, 0)
		.luma(0.05)
		.color(r8,g8,b8)
		.saturate(1.1)
		.brightness(0))
}
s.color(r7,g7,b7)
	.modulate(solid(1,1,1)
	.brightness(0.5)
    .pixelate()
    .scale(1,A)
    .invert(4)
     .layer(solid(.9,.9,.9).hue().brightness(0))
.mult(solid().hue(0.5).saturate(3).scroll(0,0).scale(1.5,A,1)), -8)
	.layer(osc(random(random([5,10]), random([2,4,8])), random(-0.001, 0.001), Math.sin((rStart * gStart * bStart))).color(r, g, b)
		.mask(shape(4, 2, [1e-6,0.2].smooth().fast(1/8))
			.repeat(1, 1)
			.scale(1, A,1)
              .mult(
    osc(Math.PI * 1, 0, fxrand())
      .modulate(
        shape(4, 0.6, 0.1)
        .scale(1, A,1)
          .saturate(50), 0.5)
      .mask(shape(4, 0.6, 0).scale(1,A,1),0.1)
  .layer(shape(4,.96,0.05).scale(0.6, A,1).thresh().mult(shape(4,.945,0.05).scale(0.6, A,1).thresh().invert()).luma())
              .scrollY(0.1)
			.scrollX(-0.1))
		)).layer(osc(random(random([5,10]), random([2,4,8])), random(-0.001, 0.001), Math.sin((rStart * gStart * bStart))).color(r2, g2, b2)
		.mask(shape(4, 2, [1e-6,0.2].smooth().reverse().fast(1/8))
			.repeat(1, 1)
			.scale(1, A,1)
              .mult(
    osc(Math.PI * 1, 0, fxrand())
      .modulate(
        shape(4, 0.6, 0.1)
        .scale(1, A,1)
          .saturate(50), 0.5)
      .mask(shape(4, 0.6, 0).scale(1,A,1))
  .layer(shape(4,.96,0.05).scale(0.6,A,1).thresh().mult(shape(4,.945,0.05).scale(0.6,A,1).thresh().invert()).luma())
              .scrollY(-0.1)
			.scrollX(0.1))
		)).layer(osc(random(random([5,10]), random([2,4,8,10])), random(-0.001, 0.001), Math.sin((rStart * gStart * bStart))).color(r3, g3, b3)
		.mask(shape(4, 2, [1e-6,0.2].smooth().reverse().fast(1/8))
			.repeat(1, 1)
			.scale(1, A,1)
              .mult(
    osc(Math.PI * 1, 0, fxrand())
      .modulate(
        shape(4, 0.6, 0.1)
        .scale(1, A,1)
          .saturate(50), 0.5)
      .mask(shape(4, 0.6, 0).scale(1,A,1))
  .layer(shape(4,.96,0.05).scale(0.6,A,1).thresh().mult(shape(4,.945,0.05).scale(0.6,A,1).thresh().invert()).luma())
              .scrollY(0)
			.scrollX(0)
			))
)
 .layer(osc(random(random([5,10]), random([2,4,8,10])), random(-0.001, 0.001), Math.sin((rStart * gStart * bStart))).color(r4, g4, b4)
		.mask(shape(400, 2, [1e-6,0.2].smooth().reverse().fast(1/8))
			.repeat(1, 1)
			.scale(1, A,1)
              .mult(
    osc(Math.PI * 1, 0, fxrand())
      .modulate(
        shape(400, 0.55, 0.1)
        .scale(1, A,1)
          .saturate(50), 0.5)
      .mask(shape(400, 0.55, 0).scale(1,A,1))
  .layer(shape(400,.96,0.05).scale(0.55, A,1).thresh().mult(shape(400,.945,0.05).scale(0.55, A,1).thresh().invert()).luma())
              .scrollY(0)
			.scrollX(0))))
 .layer(osc(random(random([5,10]), random([2,4,8,10])), random(-0.001, 0.001), Math.sin((rStart * gStart * bStart))).color(r5, g5, b5)
		.mask(shape(400, 2, [1e-6,0.2].smooth().reverse().fast(1/8))
			.repeat(1, 1)
			.scale(1, A,1)
              .mult(
    osc(Math.PI * 1, 0, fxrand())
      .modulate(
        shape(400, 0.55, 0.1)
        .scale(1, A,1)
          .saturate(50), 0.5)
      .mask(shape(400, 0.55, 0).scale(1,A,1))
  .layer(shape(400,.96,0.05).scale(0.55, A,1).thresh().mult(shape(400,.945,0.05).scale(0.55, A,1).thresh().invert()).luma())
              .scrollY(0)
			.scrollX(0.2))))
 .layer(osc(random(random([5,10]), random([2,4,8,10])), random(-0.001, 0.001), Math.sin((rStart * gStart * bStart))).color(r6, g6, b6)
		.mask(shape(400, 2, [1e-6,0.2].smooth().reverse().fast(1/8))
			.repeat(1, 1)
			.scale(1, A,1)
              .mult(
    osc(Math.PI * 1, 0, fxrand())
      .modulate(
        shape(400, 0.55, 0.1)
        .scale(1, A,1)
          .saturate(50), 0.5)
      .mask(shape(400, 0.55, 0).scale(1,A,1))
  .layer(shape(400,.96,0.05).scale(0.55, A,1).thresh().mult(shape(400,.945,0.05).scale(0.55, A,1).thresh().invert()).luma())
              .scrollY(0)
			.scrollX(-0.2))))
.saturate(1.15)
.contrast(R12)
.add(noise(innerWidth,0).modulateRotate(noise(100,0)),.25)
  	.out()

render(o0)

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

document.addEventListener("keyup", (event) => {
    if (event.key === "s" || event.key === "S") {
        event.preventDefault();
        screencap();
    }
})

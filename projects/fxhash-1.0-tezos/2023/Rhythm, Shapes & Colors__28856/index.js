/*
Rhythm, Shapes & Colors
by Daniel Oropeza
11/09/2023
*/


function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

// Hydra code:

//A = ()=> window.innerHeight/window.innerWidth

AR1 = [-1,1];
R12 = AR1[Math.floor(random() * AR1.length)]

AR2 = [3,4,400];
R13 = AR2[Math.floor(random() * AR2.length)]

AR3 = [3,4,400];
R14 = AR3[Math.floor(random() * AR3.length)]

AR4 = [3,4,400];
R15 = AR4[Math.floor(random() * AR4.length)]


const colourGap = random(0.25, 1)
const r = random(colourGap, colourGap + 1);
const g = random(colourGap, colourGap + 1);
const b = random(colourGap, colourGap + 1);

const r2 = random(colourGap, colourGap + 1);
const g2 = random(colourGap, colourGap + 1);
const b2 = random(colourGap, colourGap + 1);

const r3 = random(colourGap, colourGap + 1);
const g3 = random(colourGap, colourGap + 1);
const b3 = random(colourGap, colourGap + 1);

const r4 = random(colourGap, colourGap + 1);
const g4 = random(colourGap, colourGap + 1);
const b4 = random(colourGap, colourGap + 1);

const r5 = random(colourGap, colourGap + 1);
const g5 = random(colourGap, colourGap + 1);
const b5 = random(colourGap, colourGap + 1);

const r6 = random(colourGap, colourGap + 1);
const g6 = random(colourGap, colourGap + 1);
const b6 = random(colourGap, colourGap + 1);

const r7 = random(colourGap, colourGap + 1);
const g7 = random(colourGap, colourGap + 1);
const b7 = random(colourGap, colourGap + 1);

const r8 = random(colourGap, colourGap + 1);
const g8 = random(colourGap, colourGap + 1);
const b8 = random(colourGap, colourGap + 1);
const rStart = random(1, 9);
const gStart = random(1, 9);
const bStart = random(1, 9);
const hue1 = random(0.1,200);

A = ()=> window.innerHeight/window.innerWidth
amt = 2
s = solid();
for (i = 0; i < amt; i++) {
	step = 1 / amt;
	s = s.layer(shape(4, 1, 0)
		.luma(0.0)
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
		.mask(gradient().colorama(.1).colorama(.1)
			.repeat(1, 1)
			.scale(1, A,1)
              .mult(
    osc(Math.PI * 1, 0, random())
      .modulate(
        shape(4, 0.6, 0.1)
        .scale(1, A,1)
          .saturate(50), 0.5)
      .mask(gradient().hue(random()).scale(1,A,1),0.1)
  .layer(gradient().scale(0.6, A,1).thresh().mult(shape(4,.945,0.05).scale(0.6, A,1).thresh().invert()).luma())
              .scrollY(0.1)
			.scrollX(-0.1))
		)).layer(osc(random(random([5,10]), random([2,4,8])), random(-0.001, 0.001), Math.sin((rStart * gStart * bStart))).color(r2, g2, b2)
		.mask(gradient().hue(random()).colorama(.1).colorama(.1)
			.repeat(1, 1)
			.scale(1, A,1)
              .mult(
    osc(Math.PI * 1, 0, random())
      .modulate(
        gradient()
        .scale(1, A,1)
          .saturate(50), 0.5)
      .mask(gradient().scale(1,A,1))
  .layer(gradient().scale(0.6,A,1).thresh().mult(shape(4,.945,0.05).scale(0.6,A,1).thresh().invert()).luma())
              .scrollY(-0.1)
			.scrollX(0.1))
		)).layer(osc(random(random([5,10]), random([2,4,8,10])), random(-0.001, 0.001), Math.sin((rStart * gStart * bStart))).color(r3, g3, b3)
		.mask(gradient().colorama(.1).colorama(.1)
			.repeat(1, 1)
			.scale(1, A,1)
              .mult(
    osc(Math.PI * 1, 0, random())
      .modulate(
        gradient()
        .scale(1, A,1)
          .saturate(50), 0.5)
      .mask(gradient().scale(1,A,1))
  .layer(gradient().scale(0.6,A,1).thresh().mult(shape(4,.945,0.05).scale(0.6,A,1).thresh().invert()).luma())
              .scrollY(0)
			.scrollX(0)
			))
)
 .layer(osc(random(random([5,10]), random([2,4,8,10])), random(-0.001, 0.001), Math.sin((rStart * gStart * bStart))).color(r4, g4, b4)
		.mask(gradient()
			.repeat(1, 1)
			.scale(1, A,1)
              .mult(
    osc(Math.PI * 1, 0, random())
      .modulate(
        shape(R13, 0.55, 0.1)
        .scale(1, A,1)
          .saturate(50), 0.5)
      .mask(gradient().scale(1,A,1))
  .layer(shape(R13,.96,0.05).scale(0.55, A,1).thresh().mult(shape(R13,.945,0.05).scale(0.55, A,1).thresh().invert()).luma())
              .scrollY(random(05-75)+0.05)
			.scrollX(random(15-175)+0.05))))
 .layer(osc(random(random([5,10]), random([2,4,8,10])), random(-0.001, 0.001), Math.sin((rStart * gStart * bStart))).color(r5, g5, b5)
		.mask(gradient()
			.repeat(1, 1)
			.scale(1, A,1)
              .mult(
    osc(Math.PI * 1, 0, random())
      .modulate(
        shape(R14, 0.55, 0.1)
        .scale(1, A,1)
          .saturate(50), 0.5)
      .mask(gradient().scale(1,A,1))
  .layer(gradient().scale(0.55, A,1).thresh().mult(shape(R14,.945,0.05).scale(0.55, A,1).thresh().invert()).luma())
              .scrollY(random(05-75)+0.05)
			.scrollX(random(05-175)+0.05))))
 .layer(osc(random(random([5,10]), random([2,4,8,10])), random(-0.001, 0.001), Math.sin((rStart * gStart * bStart))).color(r6, g6, b6)
		.mask(gradient().colorama(.1).colorama(.1)
			.repeat(1, 1)
			.scale(1, A,1)
              .mult(
    osc(Math.PI * 1, 0, random())
      .modulate(
        shape(R15, 0.55, 0.1)
        .scale(1, A,1)
          .saturate(50), 0.5)
      .mask(gradient().colorama(.1).colorama(.1).scale(1,A,1))
  .layer(gradient().scale(0.55, A,1).thresh().mult(shape(R15,.945,0.05).scale(0.55, A,1).thresh().invert()).luma())
              .scrollY(random(05-75)+0.05)
			.scrollX(random(15-175)+0.05))))
.posterize(30,1)
.saturate(1.15)
.contrast(-1)
.hue(hue1)
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

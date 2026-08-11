/*
Psychedelic Dance of Pixels
by Daniel Oropeza
12/08/2022
*/


function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}


// Hydra code:

const colourGap = fxrand(0.25, 1)
const r = fxrand(colourGap, colourGap + 1);
const g = fxrand(colourGap, colourGap + 1);
const b = fxrand(colourGap, colourGap + 1);

const rStart = fxrand(1, 9);
const gStart = fxrand(1, 9);
const bStart = fxrand(1, 9);

const modScaleXOff = fxrand(-1, 1);
const modScaleYOff = fxrand(-1, 1);
const modAmountXOff = fxrand(-1, 1);
const modAmountYOff = fxrand(-1, 1);
const multScrollXOff = fxrand(-Math.PI, Math.PI);

AR1 = [2,3,4,5,6];
R12 = AR1[Math.floor(random() * AR1.length)]

AR2 = [-1,1];
R13 = AR2[Math.floor(random() * AR2.length)]

A = ()=> window.innerHeight/window.innerWidth

let scan = () => osc(10,0.1)
	.mask(shape(4, 0.5)
		.scale(1, 3, 0.7)
		.scrollY(0.0025)
		.scrollX(0.025)
		)

scan()
.kaleid(2)
	.kaleid(2)
.colorama(10)
	.modulate(scan(), 0.6)
	.modulate(osc())
	.kaleid(2)
	.kaleid(2)
 .rotate(fxrand()*999)
.layer(scan()
		.scrollX(0.001)
		.kaleid(2))
	.diff(o0)
//.thresh()
.layer(solid(.9,.9,.95).hue(fxrand(0.1,1))
.mult(shape(4,.9925).thresh().invert().luma())).mult(gradient(1).hue(fxrand(0.1,1)).rotate(fxrand()*999).pixelate().kaleid(R12))
       .add(shape(4,.9925,0.015).thresh(.2,3.9).brightness(.1),0)
.colorama(fxrand()*0.2+0.1)
.scale(.9,A)
.hue(-.05)
    .pixelate(80,80)
	.scale(1.11)
	.scale(.888)
  .modulateRotate(o0, () => Math.sin(time) * 0.003)
  .color(1, -g, 1)
  .hue(Math.sin(rStart * gStart * bStart))
  .saturate(1.8)
  .contrast(R13)
	.scale(1.05)
  .out(o0)


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

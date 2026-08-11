/*
Storm Chamber
by Daniel Oropeza & Somfay
18/05/2022
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

function c(min=0,max=1) { return fxrand()*(max-min)+min; }
function d(min=0,max=1) { return fxrand()*(max-min)+min; }

//Variables

A = ()=> window.innerHeight/window.innerWidth

AR1 = [3,4,5,400];
R12 = AR1[Math.floor(fxrand() * AR1.length)]

let osc1 = rnd_btwexp(0.001,1000)
let speed = rnd_btwexp(0,4000)
let offset = rnd_btwexp(2,18)
let print = rnd_btw(0.001,0.01)
let hue1 = rnd_btwexp(0.018,0.022)
let hue2 = rnd_btwexp(1,200)
let modpix = rnd_btwexp(4,15)
let sat = rnd_btwexp(0.999,1.095)

rect = ()=> shape(R12,0.5,0.0).scale(1,A,1).mult(osc(osc1,speed,offset))
src(o0)
.modulate(osc(10,0.1,1.5).modulate(noise(4,0.1),40).brightness(-0.6),print)
.modulateHue(src(o0).scale([1.01,1.02].smooth(1)),1)
.hue(hue1)
.color(0.99, 0.98, 0.98)
.modulate(gradient().pixelate(5000, 5000).brightness(-.5), -0.009)
.diff(
	shape(R12, [0.01, 1].smooth(), [0, 0.1].reverse().smooth()
)
.g()
.scale(1, A, 1)
.colorama([0, 0.1].smooth().fast(1 / 10))
.thresh([0, 0.89].smooth())
.mult(
	solid(c(),c(),c())
	.hue(hue2)
	.scale(1, innerHeight / innerWidth),-1)
	.scroll(({time}) => Math.random(time * 0.01) * innerHeight, ({time}) => Math.random(time * 0.01) * innerWidth)
)
.layer(
	rect()
	.mask(
		shape(3, [0.01, 0.3].smooth(), 0)
		.rotate(() => time / Math.PI * 4)
		.modulatePixelate(o0, modpix)
		.scroll(({time}) => Math.random(time * 0.001) * innerHeight, ({time}) => Math.random(time * 0.001) * innerWidth)
		.modulateScale(gradient().g(3).rotate(() => time / 360), 0.02, 0.9)
    )
	.color(c(),c(),c())
	.colorama(d()*300.2+1000.7)
)
.blend(o0,0.3)
.saturate(sat)
.out()

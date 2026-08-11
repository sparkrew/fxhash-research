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


if ( random()<0.5 ) { y = 0 } else { y = 0.5 }
r=random(1,4)
r2=random(1,2)
x=random(1,6)/10
  cor = random(0, 1)
  cor1 = random(0, 1)
  cor2 = random(0, 1)
p=random(80, 120)

A = ()=> innerHeight/innerWidth
AA =  innerHeight/innerWidth
d=0.001

const colourGap = random(0.25, 1)
const r1 = random(colourGap, colourGap + 1);
const g1 = random(colourGap, colourGap + 1);
const b1 = random(colourGap, colourGap + 1);
const rStart = random(1, 9);
const gStart = random(1, 9);
const bStart = random(1, 9);
R1 = random()*(30-10)+10
R2 = random()*(800-160)+160
R3 = random()*(15-1)+1
R4 = random()*(50-1)+1
RA5 = [2,3,4,300];
R5 = RA5[Math.floor(random() * RA5.length)]
R51 = RA5[Math.floor(random() * RA5.length)]
R6 = random()*(10-5)+5
if (R5 == 300) {
R7 = 300;
R8 = .625;
R9 = -.1
}
else {
R7 = 0;
R8 = 1;
R9 = 0
}

P1 = [10,5,2,20]
P2 = [10,5,2,20,3]

R1 = [1,3,1,1,10,2]
P3 = [4,1,2,16,4,4]

AR2 = [-1,1];
R13 = AR2[Math.floor(random() * AR2.length)]
rn=()=>Math.random()*random()*(.15-.75)+1

n=()=>shape(R5,rn)


m=()=>shape(300,.75,0).color(0,0,1).scale(()=>.9+a.fft[0]/10)
      .mult(noise(20,.25).thresh().invert().pixelate(P1,P2))
.mask(src(o0).scrollY([.01,.5]),[.5,0,1,1,1.5,0])

.layer(shape(300,.75,0).color(1,0,1)
      .mult(noise(20,.25).thresh().pixelate(P1,P2).luma())
      .scale(()=>1+a.fft[2]/5) )
.repeat(R1,R1)
.pixelate(200,200/AA)
.kaleid(R5)


n()
  .diff(n().scale(0.98).diff(shape(R51, 0.90, 0.0)
.scale(1, innerHeight/innerWidth, 1))
.mult(osc(100, 0.01, 2)
.pixelate()
.modulateRotate(noise(3, 0.1)
.pixelate(4, 4)
.thresh(.5, 0), Math.PI / 2)
.modulateScale(
noise(20, 0)
.pixelate(64, 64)
.thresh(-.2, -0.4)
.modulatePixelate(
noise(10, .0)
.pixelate(16, 16)
.thresh(), 2000, 8)
.modulatePixelate(
noise(5, 0.1)
.pixelate(4, 4)
.thresh(), 2000, 2), 2, .01)))
  .modulateRepeat(solid(R1,R2,R3).pixelate(p,p),R1,R2)
  .add(n().scale(rn))
  .add(m())
  .add(m().rotate((Math.PI/x)+(Math.PI/x)*x/(x/0)))
  .add(m().rotate((Math.PI/x)+(Math.PI/x)*x/(x/1)))
  .add(m().rotate((Math.PI/x)+(Math.PI/x)*x/(x/2)))
  .add(m().rotate((Math.PI/x)+(Math.PI/x)*x/(x/3)))
  .add(m().rotate((Math.PI/x)+(Math.PI/x)*x/(x/4)))
.luma().invert()
  .pixelate(p,p)
  .scale(1.5,innerHeight/innerWidth)
  .color(-r1,0,b1)
  .saturate(0.5).colorama(random()*0.1+0.1)
  .color(1, -g1, 1)
  .hue(random(0.1,300))
  .saturate(1.8)
  .contrast(R13)
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

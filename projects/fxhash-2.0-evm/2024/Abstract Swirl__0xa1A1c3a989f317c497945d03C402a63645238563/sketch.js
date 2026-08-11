

 
/*
Rythm and Colour
by Daniel Oropeza
09/09/2022
*/

d = 0.001

var sc = 1;
var col = 1;
R1 = random()
R2 = random()*(15-2)+2
R3 = random()*(10-1)+1
R4 = random()
R5 = random()*.25
R6 = Math.round(random()*(2.5-.5)+.5)
R7 = Math.round(random()*(4.5-.5)+.5)
R8 = random()
R9 = random()*.5
R10 = random()
R11 = Math.round(random()*(6-1)+1)
R12 = random()*(100-25)+25
R13 = Math.round(random()*(5-1)+1)
A = () => window.innerHeight / window.innerWidth

s0.initImage("dibujo.jpeg")

cir1 = () => shape(400, 0.8, 0.0)
.scale(1, A, 1)
.mult(gradient()
.brightness(random(-0.5, 0.5))
.hue(random(0.1, 200)), R12)

cir2 = () => shape(400, 0.8, 0.0)
.scale(1, A, 1)
.mult(gradient()
.brightness(random(-0.5, 0.5))
.hue(random(0.1, 200)), R13)

src(o0).brightness(-0.3)
	.modulateHue(src(o0)
		.modulate(
			osc(6, 0, 1.5)
			.brightness(-.5)
			.modulate(noise(3, .1)
				.modulatePixelate(
					noise(3, .1)
					.thresh(), 504, 8)
				.add(gradient(), -1), 1)
			.add(gradient()
				.brightness(-.5), .5), -1))
	.layer(o0)
	.blend(o0, 0.19)
	.modulateHue(src(o0)
		.rotate(), 2)
	.layer(src(s0)
		.color(1, 0.5, -1)
		.colorama(0.04)
		.hue(random(0.1,200))
		.luma(0.9)
		.contrast(-1.05)
		.saturate(1.05)
           
		.scale(1, A)
		.modulate(noise(3), 0.01)
		.modulateScale(shape(4, 1, 1)
			.brightness(-0.5), R6)
		.modulate(noise(8, 0.1), 0.02)
		.modulateScale(gradient()
			.r(R2))
		.modulateRotate(o0, 0.002)
		.modulatePixelate(src(o0), 1, 1000)
		.scrollY(0.003) //.scrollX(0.002)
		.add(src(s0)
			.hue(random(0.1,200))
			.saturate(10.0), 0.5)
		.mult(src(s0).posterize(30, 1)
            .colorama(random()*-.125)
            .brightness(random(-0.15,0.15))
            .saturate(random(-2,2))
            .hue(random(0.1,200)).brightness(random(0.025,-0.025)), Math.PI / 16)
		.modulateRotate(src(s0), 3)
		.luma(.79)
		.diff(src(s0)
			.scale(2))
           
		.layer(src(s0)
		
			.modulateRotate(voronoi(10, 0))
			.modulateScale(noise(.1), -.05))
           
		.layer(shape(300, .95)
			.scale(1, .56, .75)
			.repeat(1, 2)
			.thresh()
			.luma()
			.color(1, .5, -1).hue(random()*999)
			.scrollY(random()*100)
            .scrollX(random()*100)

		)
           
  .diff(
    cir1().color(R2, R3, R4)
    .brightness(random(-0.15,0.15))
    .saturate(random(-2,2))
    .hue(random(0.1,200))
	.luma()
      .scrollY(random()*100)
      .scrollX(random()*100)
  )
		.blend(src(s0)
			.scale(1, 1, 1, R1, R1)
			.modulateScale(osc(10, .05), R6)
			.luma(0.9, 0.01)
			.modulateScale(gradient()
				.r()
				)
			.scale(0.75),0.25)
		.scale(.5)
		.modulateScale(noise(1.5, 0),R10)
		.layer(noise(20, .05)
			.thresh(.7)
			.luma()
			.thresh()
			.color(.2, .5, .96).hue(R1))
	)
	.scrollY(-0.001)
	.scale(-1.003)
	.blend(o0).blend(o0)
	.out()



osc(5, 0.01, 2)
	.luma(0.9)
	.out(o3)

src(o0)
	.mult(src(o0)
		.scroll(0.00, d)
		.add(src(o0)
			.scroll(0.00, -d))
		.add(src(o0)
			.scroll(d, 0.00))
		.add(src(o0)
			.scroll(-d, 0.00))
		.color(.5, .5, .5)
		.add(src(o0))
		.color(1 / 3, 1 / 3, 1 / 3), R5)
	.blend(src(o3), 0.01)
	.luma(0.059, 0)
	.modulate(src(o0)
		.add(solid(1, 2), -0.5), 0.01)
	.modulateRotate(osc(10, 0.01))
.rotate(random()*999)
	
	.add(noise(innerWidth, 0)
		.modulateRotate(noise(100, 0)), .15)
	.layer(solid(1, 1, 1)
		.brightness(0.5)
		.mask(shape(4, 1, 0)
			.thresh()
			.invert()
			.luma())
		.scale(0.9, () => A() * 7 / 9, 1))

	.mult(noise(innerWidth, 0)
		.modulateRotate(noise(100, 0)), .15)
	.brightness(0)
	.saturate(1.09)

	.out(o2)

render(o2)


function random(min, max) {
	let rand = $fx.rand();
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

   // hush()

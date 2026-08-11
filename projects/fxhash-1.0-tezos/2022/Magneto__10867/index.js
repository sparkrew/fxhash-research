//Magneto
//March 22 2022
//@Hicpunks

function rnd_btw(min, max) {
    return fxrand() * (max - min) + min;
}
function rnd_btwexp(min, max) {
    return fxrand() ** 2 * (max - min) + min;
}
function rnd_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(fxrand() * (max - min + 1)) + min;
}

var direction;
osc1=rnd_btw(14,60)
osc2=rnd_btw(.01,.12)
osc3=rnd_btw(.001,.07)
vor1=rnd_btw(4,20)
vor2=rnd_btw(5,18)
vor3=rnd_btw(1.1,2.9)
shape1=rnd_int(3,9)
shape2=rnd_int(3,9)
shape3=rnd_int(2,8)
scale=rnd_btw(0.16,0.45)
mod=rnd_btw(-0.1,1.6)
col=rnd_btw(6,19)
val=rnd_int(3,4)

dir=fxrand();

if (dir > 0.5) direction =0.2
else direction =-0.2

voronoi(vor1, vor2, vor3)
	osc(direction,0.45,0.15)
  .luma(0.015)
      .add(shape(shape1,scale,shape3)
      .luma(0.16))
      .pixelate(2048)
		.add(shape(shape2,.05,.45))
.luma(mod)
              .colorama(col)
              .kaleid(val)
            .out()

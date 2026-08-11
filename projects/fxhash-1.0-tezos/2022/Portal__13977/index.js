//Portal
//June 2nd 2022
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

colHash = fxrand();

if (colHash > 0.7) col=rnd_btw(50.00,52.999)
else if (colHash > 0.6) col=rnd_btw(950.01,952.99)
else if (colHash > 0.3) col=rnd_btw(620.00,660.999)
else  col=rnd_btw(80.00,84.999)

shapeHash = fxrand();

if (shapeHash > 0.7) shpM=4
else if (shapeHash > 0.4) shpM=200
else if (shapeHash > 0.2) shpM=6
else  shpM=8

osc2=rnd_btw(4.35,8.72)
osc3=rnd_btw(.1021,.3)
vor1=rnd_btw(20,60)
vor2=rnd_btw(20,60)
vor3=rnd_btw(20,60)
shape1=rnd_int(5,8)
shape2=rnd_int(5,8)
shapeS=rnd_int(5,8)
scale=rnd_btw(0.115,0.60)
mod=rnd_btw(-0.013,0.013)
scroll=rnd_btw(-0.0055,0.0055)
rep=rnd_btw(128,256)
dir = fxrand();
sz =rnd_btw(.22,.42)
szB =rnd_btw(.34,.46)

console.log("osc2 " + osc2)
console.log("osc3 " + osc3)
console.log("vor1 " + vor1)
console.log("vor2 " + vor2)
console.log("vor3 " + vor3)
console.log("shape1 " + shape1)
console.log("shape2 " + shape2)
console.log("shapeS " + shapeS)
console.log("scale " + scale)
console.log("mod " + mod)
console.log("col " + col)
console.log("scroll " + scroll)
console.log("rep " + rep)

voronoi(vor1, vor2, vor3)
	shape(3)
  .luma(0.3)
  .modulatePixelate(noise(6))
      .add((shape(shape1,scale,shapeS,(shape(6,.25,5))))
      .blend(shape(6,3).luma(.5))
      .luma(0.5))
    	.add(shape(shape2,.25,.215))
      .repeatX(rep,scroll)
      .pixelate(1080,800)
      .luma(0.2)
      .blend(shape(shpM,sz,szB))
      .colorama(col)
.out()

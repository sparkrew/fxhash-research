//Oil Slick
//September 13th 2022
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

dir = fxrand();
pix = fxrand();
xDir = fxrand();
yDir = fxrand();
xRep = fxrand();
yRep = fxrand();
xDen = fxrand();
yDen = fxrand();
shp = fxrand();
mod = fxrand()*35;
rep= rnd_btw(1,5)
console.log(rep)
let inverted;
var scaleZoom, scaleName;
let xD,yD,xR,yR,xDenA,yDenA,type
let rot =rnd_btw(1,9)

if (dir > 0.6) direction=rnd_btw(.322,.555), inverted=true
else  direction=rnd_btw(-.555,-.322), inverted=false

if (xDir > 0.75) xD = 8
else if (xDir > 0.5) xD = 16
else if (xDir > 0.25) xD = 32
else xD = 64

if (yDir > 0.75) yD = 8
else if (yDir > 0.5) yD = 16
else if (yDir > 0.25) yD = 32
else yD = 64

if (xRep > 0.75) xR = 8
else if (xRep > 0.5) xR = 16
else if (xRep > 0.25) xR = 32
else xR = 4

if (yRep > 0.75) yR = 8
else if (yRep > 0.5) yR = 16
else if (yRep > 0.25) yR = 32
else yR = 4

if (xDen > 0.5) xDenA = 800
else if (xRep > 0.2) xDenA = 400
else xDenA = 1600

if (yDen > 0.5) yDenA = 800
else if (yDen > 0.2) yDenA = 400
else yDenA = 1600

if (shp > 0.9) type = 14
else if (yDen > 0.7) type = 56
else if (yDen > 0.55) type = 88
else type = 150

console.log(mod)

h1=rnd_btw(10.1,40.9)
h2=rnd_btw(10.25,30.75)
h3=rnd_btw(11.15,33.85)
h4=rnd_btw(10.5,70.75)
osc1=rnd_btw(6,26)
p1=rnd_btw(39.63,40.3)
scale=rnd_btw(0.08,0.2724)
ln = shape(type,h1,.5)
sq1 = shape(rnd_btw(24,34),rnd_btw(24,214),h2,h4).scrollX(6+fxrand()*4)
osc(osc1,scale*direction,p1)
.modulate(noise(mod))
.repeatY(xR,yR)
.repeatX(rep)
.modulateRotate(shape(4,0.5,0.65).scrollX(fxrand()),Math.PI/-2)
.rotate(rot)
.luma(rnd_btw(0.2,.32))
.pixelate(1080,1900)
.out()

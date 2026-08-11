function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}
document.addEventListener("keyup", (event) => {
    if (event.key === "s" || event.key === "S") {
        event.preventDefault();
        screencap();
    }
})

speed=0.1
a = rnd_btw(-20,200)
b = rnd_btw(-20,200)
c = rnd_btw(-20,200)
d = rnd_btw(-20,200)
e = rnd_btw(-20,200)
f = rnd_btw(-20,200)

shape(4,0.1,0).scale(1,innerHeight/innerWidth,1).scrollX(a).scrollY(b).pixelate().color(0,1,0)
.diff( shape(4,0.2,0).scale(1,innerHeight/innerWidth,1).scrollX(a).scrollY(b).pixelate() )

.diff( shape(4,0.3,0).scale(1,innerHeight/innerWidth,1).scrollX(c).scrollY(d).pixelate() )
.diff( shape(4,0.4,0).scale(1,innerHeight/innerWidth,1).scrollX(c).scrollY(d).pixelate() )

.diff( shape(4,0.3,0).scale(1,innerHeight/innerWidth,1).scrollX(e).scrollY(f).pixelate() )
.diff( shape(4,0.4,0).scale(1,innerHeight/innerWidth,1).scrollX(e).scrollY(f).pixelate() )

.kaleid(1).repeat(2,2)
.modulateKaleid(osc(10,0.05,0).rotate(Math.PI/2))
.diff( src(o0).scale([0.993,0.996].smooth(0.5).fast(10) ).color(1,0,[1,0,2].fast(5).smooth(0.75)) )
.out()

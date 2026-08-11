function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b


//2022-02-01
//wind
//@Brunewnhoous
n=rnd_int(1,4)
if ( n == 1 ) {a = 1 ; b = 1 ; c = 1 }
if ( n == 2 ) {a = 1 ; b = 1 ; c = 0 }
if ( n == 3 ) {a = 1 ; b = 0 ; c = 1 }
if ( n == 4 ) {a = 0 ; b = 1 ; c = 1 }
//
x=rnd_int(1,2)
if ( x > 1 ) {y = 0.99} else {y = 1}
//
gradient()
.colorama(()=>(time/100))
.blend(o0).blend(o0).blend(o0).blend(o0).blend(o0).blend(o0)
.modulateScale(o0,0.02)
.modulateRotate(o0,rnd_btw(0.001,0.01))
.saturate(1)
.colorama(rnd_btwexp(0.0025,0.005))
 .color(a,b,c)
.scale(y)


.out()
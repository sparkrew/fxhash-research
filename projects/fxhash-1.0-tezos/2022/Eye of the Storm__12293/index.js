function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b


//Variables
//shapes
s1 =  rnd_int(3,7);
s2 =  rnd_int(3,7);
s3 =  rnd_int(3,7);
s4 =  rnd_int(3,7);
s5 =  rnd_int(3,7);
s6 =  rnd_int(3,7);

//rotations
r1 = rnd_int(40,100);
r2 = rnd_int(40,100);
r3 = rnd_int(40,100);
r4 = rnd_int(40,100);
r5 = rnd_int(40,100);
r6 = rnd_int(40,100);

//hues
h1 = rnd_btwexp(0,200);
h2 = rnd_btwexp(0,200);
h3 = rnd_btwexp(0,200);
h4 = rnd_btwexp(0,200);
h5 = rnd_btwexp(0,200);
h6 = rnd_btwexp(0,-200);



osc(30, 0.1, 0).luma(0.9)
.diff(shape(s1).scale(3.0).modulate(o0).rotate(r1, 0.01).colorama().hue(h1))
.diff(shape(s2).scale(2.7).modulate(o0).rotate(r2, 0.02).colorama().hue(h2))
.diff(shape(s3).scale(1.9).modulate(o0).rotate(r3, 0.014).colorama().hue(h3))
.diff(shape(s4).scale(1.4).modulate(o0).rotate(r4, 0.017).colorama().hue(h4).color(0, 0, 0.5).hue(0.2))
.diff(shape(s5).scale(1).modulate(o0).rotate(r5, 0.019).colorama().hue(h5).color(0, 0.5, 0.10).hue(0.2))
.add(shape(s6).scale(0.5).diff(o0).invert().rotate(r6, -0.2).hue(h6).color(1, 1, 0))
     .out(o0)

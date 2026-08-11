function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b

  	


//começo=rnd_btw(0.01,0.99,0)

//a=rnd_btw(1,100)

 

 

 

 

     












osc(6.293, 0.082, 0.036)
    .kaleid(4)
    .mult(osc(2, 0.001, 0.81)
        .rotate(1.309))
    .blend(o0, 0.913)
    .modulateScale(osc(4, 0.773), -0.007)
    .scale(0.692, () => 1.962 + 0.026 * Math.sin(0.047 * time))
    .out(o0)


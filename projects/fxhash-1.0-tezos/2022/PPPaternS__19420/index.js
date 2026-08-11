function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b


//Variables
efeito = rnd_btw(0.1, 0.2)
forma = rnd_btw(0.1, 1.4)
vermelho = fxrand()
verde = fxrand()
azul = fxrand()
poligono = rnd_btwexp(3, 60)
p1 = rnd_btw(0.1, 0.5)
p2 = rnd_btw(0.1, 0.5)


src(o0)
.layer(src(o0).scale(0.7, 0.87, 0.7) //SCALE X = [0.98, 1.2] Y = 0.8, Z = 0.9
         .layer(osc(10, 0.05, 2).thresh(efeito) //X = [1, 10] Z = [1, 3]
                .mask(shape(poligono, p1, p2) //SHAPE Y = 0.5, Z = 0.5
.colorama(0.01)
))
.scrollX(()=>0.0001*Math.sin(time/11)) //TEMPO [1,11]
.scrollY(()=>0.0001*Math.sin(time/11) //TEMPO [1,11]
        ))
.modulate(o0, 0.0001) 
.contrast(1)
.saturate(0.8)
.scale(forma) //0.1, 1.4
.color(vermelho, verde, azul) //variar cores
.out(o0)
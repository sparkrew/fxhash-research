// Alexandre Rangel, 2023
// www.alexandrerangel.art.br 

function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

speed=0.001

let var1 = rnd_btw(0,3.14*0.63)
let var2 = rnd_btw(0,3.14*0.63)
let var3 = rnd_btw(0,3.14*0.63)
let var4 = rnd_btw(0,3.14*0.63)
let var5 = rnd_btw(-0.1,0.1)
let var6 = rnd_btw(-1,1)
let var7 = rnd_btw(-0.05,-0.01)
let var8 = rnd_btw(1,2)
let var9 = rnd_btw(1,2)


const start = async function(a, b) {
  const result = await loadScript("./-libs/hydra-blending-modes.js") 
  speed = rnd_btw(0.8,0.9)

  noise()
  .scrollX(var1,var3*0.005)
  .scrollY(var2,var4*0.005)
  .pixelate().color(var8,0,var9)
  
  .hardMix(
    noise()
    .scrollX(var3)
    .scrollY(var4)
    .pixelate()
    .repeat(4,4)
    .color(var8,0,var9)
  )

  .add(
  noise(0.9+var5,0.05)
  .scrollX(var3,var1*0.005)
  .scrollY(var4,var2*0.005)
  .pixelate().color(0,1,1)
  .colorama(var7)
  )

.mult(
  noise(10+var6,0.005)
  .scrollX(var3,var2*0.005)
  .scrollY(var4,var1*0.005)
  .pixelate(5,5)
)

  .linearDodge(src(o0).scale(0.5).color(0.4,0.4,0.4),0.5)
  .out()
  

}

start();

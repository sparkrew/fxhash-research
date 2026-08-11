/*
Psychedelic pixels
by Daniel Oropeza
15/12/2022
*/


function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

document.addEventListener("keyup", (event) => {
    if (event.key === "s" || event.key === "S") {
        event.preventDefault();
        screencap();
    }
})

// mousedown plays audio and switches images
//document.addEventListener("mousedown", ()=>loadAudio() )
//document.addEventListener("mousedown", ()=>loadImage() )

// Hydra code:


if ( random()<0.5 ) { y = 0 } else { y = 0.5 }
r=random(1,4)
r2=random(1,2)
x=random(1,6)/10
 cor = random(0, 1)
 cor1 = random(0, 1)
 cor2 = random(0, 1)
p=random(80, 120)

A = ()=> window.innerHeight/window.innerWidth
d=0.001
R1 = random()*(30-10)+10
R2 = random()*(800-160)+160
R3 = random()*(15-1)+1
R4 = random()*(50-1)+1
RA5 = [2,3,4,300];
R5 = RA5[Math.floor(random() * RA5.length)]
R6 = random()*(10-5)+5
if (R5 == 300) {
R7 = Math.PI/3;
R8 = .625;
R9 = -.1
}
else {
R7 = 0;
R8 = 1;
R9 = 0
}

rn=()=>Math.random()*random()*(.15-.75)+1

n=()=>shape(R5,rn)

m=()=>n().scale(()=>(Math.sin(time*3)+20)*0.01)
 .scrollX(0.151).rotate(()=>(time)/r2)
 .scrollX(()=>Math.sin(time*r)/10)


n()
 .diff(n().scale(0.98)).modulateRepeat(solid(R1,R2,R3).pixelate(p,p),R1,R2)
 .add(n().scale(0.1))
 .add(m())
 .add(m().rotate((Math.PI/x)+(Math.PI/x)*x/(x/0)))
 .add(m().rotate((Math.PI/x)+(Math.PI/x)*x/(x/1)))
 .add(m().rotate((Math.PI/x)+(Math.PI/x)*x/(x/2)))
 .add(m().rotate((Math.PI/x)+(Math.PI/x)*x/(x/3)))
 .add(m().rotate((Math.PI/x)+(Math.PI/x)*x/(x/4)))
 .thresh()
 .pixelate(p,p)
 .scale(1.5,innerHeight/innerWidth)
.add(o0)
 .color(()=>((Math.sin(time/2)+0.1+cor)/2)
 ,()=>((Math.sin(time/2.5)+.1+cor1)/2)
 ,()=>((Math.sin(time/3)+.1+cor2)/2))
 .saturate(0.5).colorama(random(0.002,0.08))
.out()


render(o0)


function random(min, max) {
 let rand = fxrand();
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

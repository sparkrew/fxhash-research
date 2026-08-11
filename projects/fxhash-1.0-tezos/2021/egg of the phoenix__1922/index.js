function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}
document.addEventListener("keyup", (event) => {
    if (event.key === "s" || event.key === "S") {
        event.preventDefault();
        screencap();
    }
})
let rot1=rnd_btw(0,Math.PI*2)
let rot2=rnd_btw(0,Math.PI*2)
let rot3=rnd_btw(0,Math.PI*2)
let rot4=rnd_btw(0,Math.PI*2)
let rot5=rnd_btw(0,Math.PI*2)
speed = 1.1
shape(99,.15,.5).color(0,fxrand(),fxrand()*1.2)
.diff( shape(99,.5,0.005).scrollX(.05).rotate(rot1).rotate( ()=>time/10.235 ).color(1,0,.75) )
.diff( shape(99,.4,0.005).scrollX(.10).rotate(rot2).rotate( ()=>time/20.346 ).color(1,0,.75) )
.diff( shape(99,.3,0.005).scrollX(.15).rotate(rot3).rotate( ()=>time/30.4567 ).color(1,0,.75) )
.diff( shape(99,.2,0.005).scrollX(.20).rotate(rot4).rotate( ()=>time/40.234 ).color(1,0,.75) )
.diff( shape(99,.1,0.005).scrollX(.25).rotate(rot5).rotate( ()=>time/50.7689 ).color(1,0,.75) )
.modulateScale(
    shape(99,.5,0.005).scrollX(.05).rotate( ()=>time/10 )
    , ()=>(Math.sin(time/3)*.2)+.2 )
.scale(1.5)
.scale(1,innerHeight/innerWidth,1)
.out()
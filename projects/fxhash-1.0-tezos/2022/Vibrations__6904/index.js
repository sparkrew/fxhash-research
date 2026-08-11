/*
Vibrations
by Daniel Oropeza
13/1/2022
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

line = ()=> shape(2).color(fxrand()*2+0.5, 0, fxrand()*2+0.5).hue(fxrand()*200).contrast(1.01).saturate(2.01).scale(0.006).rotate(0.000001).modulateScale(noise(rnd_btw(1,3),rnd_btw(0.08,0.1)),0.02,0.99)


solid()
 .add(line().color(1,0,0).hue(fxrand()*200).scroll(0,0.01).scrollY(0,[0.005,-0.005].smooth(0).fast(.25)).modulate(
    noise(()=>Math.atan(time)*2).scale(
      5,
      0.1
    )))
 .add(line().color(0,1,0).hue(fxrand()*200).scroll(0,0.015).scrollY(0,[0.006,-0.006].smooth(0).fast(.26)).modulate(
    noise(()=>Math.atan(time)*2.2).scale(
      5,
      0.1
    )))
 .add(line().color(0,1,1).hue(fxrand()*200).scroll(0,0.019).scrollY(0,[0.007,-0.007].smooth(0).fast(.27)).modulate(
    noise(()=>Math.atan(time)*2.4).scale(
      5,
      0.1
    )))
 .add(line().color(0,0,1).hue(fxrand()*200).scroll(0,0.021).scrollY(0,[0.004,-0.004].smooth(0).fast(.28)).modulate(
    noise(()=>Math.atan(time)*2.6).scale(
      5,
      0.1
    )))
 .add(line().color(1,1,0).hue(fxrand()*200).scroll(0,0.025).scrollY(0,[0.003,-0.003].smooth(0).fast(.29)).modulate(
    noise(()=>Math.atan(time)*2.8).scale(
      5,
      0.1
    )))
 .add(line().color(1,0,1).hue(fxrand()*200).scroll(0,0.029).scrollY(0,[0.002,-0.002].smooth(0).fast(.24)).modulate(
    noise(()=>Math.atan(time)*2.9).scale(
      5,
      0.1
    )))
.add(line().color(0.5,1,1).hue(fxrand()*200).scroll(0,0.029).scrollY(0,[0.008,-0.008].smooth(0).fast(.23)).modulate(
    noise(()=>Math.atan(time)*3.0).scale(
      5,
      0.1
    )))
.add(line().color(0.5,1,0).scroll(0,0.029).hue(fxrand()*200).scrollY(0,[0.001,-0.001].smooth(0).fast(.22)).modulate(
    noise(()=>Math.atan(time)*3.1).scale(
      5,
      0.1
    )))
.add(line().color(0.5,0.5,1).hue(fxrand()*200).scroll(0,0.029).scrollY(0,[0.005,-0.005].smooth(0).fast(.21)).modulate(
    noise(()=>Math.atan(time)*3.2).scale(
      5,
      0.1
    )))
.add(line().color(0.9,1,0.5).hue(fxrand()*200).scroll(0,0.029).scrollY(0,[0.009,-0.009].smooth(0).fast(.20)).modulate(
    noise(()=>Math.atan(time)*3.3).scale(
      5,
      0.1
    )))
.add(o0,0.999)
.blend(o0)
.out()

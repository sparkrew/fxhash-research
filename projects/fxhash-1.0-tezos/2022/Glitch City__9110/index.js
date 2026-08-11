/*
Glitch City
by Daniel Oropeza
09/02/2022
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

var myShift=fxrand()
function loadImage() {
  var image1 = new Image()
  image1.onload = ()=> s0.init({src:image1, dynamic:false})
  var num = Math.floor(rnd_btwexp(0,4))
  image1.src = './images/Dan-'+num+'.jpg'

}

loadImage()

hue1=rnd_btwexp(0,200)
hue2=rnd_btwexp(0,200)

src(o0)
  .scrollX(() => Math.random(time)*0.0001)
  .modulate(o0, () => Math.sin(time)*0.00001)
  .scale([1.001,-1.001].fast(0.25))
 .modulateScale(osc(8).rotate(Math.sin(time)),.5)
  	.thresh(.8)
	.modulateRotate(osc(7),.4)
	.thresh(.7)
  	.diff(src(o0).scale(1.8)).pixelate(100,100)
	.modulateScale(osc(2))
	.diff(src(s0).rotate([-.012,.01,-.002,0]))
	.brightness([-.02,-.17].smooth().fast(.5)).posterize(10,1)
.mult(s0).color(2,1).hue(hue1).blend(o0,0.29)
  .contrast(1.05)
.saturate(1.9).add(o0,0.50).luma(0.25,0.01).posterize(10,1)
.pixelate(1000,990)
.scrollY(-0.0005,-0.000007)
  .layer(
    src(s0)
      .repeat(1, 1)
      .invert(1)
      .luma()
      .invert()
      .color(myShift*1.2, myShift*1, myShift*1)
.scrollX(({time}) => (Math.sin(time* 0.4) * 0.08), 0.00)
.scale(1.1)
.rotate(0.0001, 0.00001)
  )
  .hue(hue2)
  .luma(0.1)
  .out();

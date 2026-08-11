//code by @ltnft21 made on hydra (hydra.ojack.xyz)
//Big Thanks to @AlexandreRangel for Save Canvas Feature code.

function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}


//voronoi
vrn1=rnd_int(2,9)
vrn2=rnd_btw(.1,.7)
vrn3=rnd_int(1,10)
//voronoi pxl
vrn4=rnd_int(3,10)
vrn5=rnd_btw(.1,.5)
vrn6=rnd_btw(.1,1)
vrn7=rnd_int(3,25)
//modpixl
pxl1=rnd_btw(.2,2)
pxl2=rnd_btw(.1,.9)
//repeat
//rpt1=rnd_int(1,9)
//Oscilator
osc1=rnd_int(5,20)
osc2=rnd_btw(.1,.8)
osc3=rnd_int(1,8)
//Kaleid 
kld1=rnd_int(1,10)
//speed
spd1=rnd_btw(0.07,.2)

window.$fxhashFeatures = {
 'Speed': Math.round(spd1*100)/100,
 'Kaleid Sides': Math.round(kld1*100)/100,
 'Oscilator': Math.round(osc1*100)/100,
 'Color': Math.round(osc3*100)/100,
 'Voronoi': Math.round(vrn7*100)/100,
 //'Mirrors': Math.round(rpt1*100)/100,

};

//Big Thanks to @AlexandreRangel for this code feature ▼
document.addEventListener("keyup", (event) => {
  if (event.key === "s" || event.key === "S") {
      event.preventDefault();
      screencap();
  }
})

speed = spd1
voronoi(vrn1,vrn2,vrn3)
	.modulatePixelate(voronoi(vrn4,vrn5,vrn6),pxl1,pxl2)

		.diff(voronoi(vrn7)
			//.repeat(rpt1)
			)

		.mult(osc(osc1,osc2,osc3)
			.kaleid(kld1)
			)
.out()


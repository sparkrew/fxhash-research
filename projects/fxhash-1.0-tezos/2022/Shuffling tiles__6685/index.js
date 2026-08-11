function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

// Thank you Alex for helping me with the save function
document.addEventListener("keyup", (event) => { 
    if (event.key === "s" || event.key === "S") {
        event.preventDefault();
        screencap();
    }
}) 

//by ~ Bagre_p 𝄞 ~

voronoiTamanho=rnd_btw(1,5)
voronoiFrequencia=rnd_btw(.2,.7)
voronoiQuantidade=rnd_btw(4,10)
velocidadeOscilador=rnd_btw(.5,1.1)
shapes1=rnd_int(1,4)
shapesSuavidade=rnd_btw(0,0.6)
shapes2=rnd_btw(.1,.9)
shapes2Tamanho=rnd_btw(.10,.19)
barulho=rnd_btw(5,30)
barulhoVelocidade=rnd_btw(.1,.8)
pixels=rnd_btw(15,70)
rotacao=rnd_btw(-15,15)
controle1=rnd_btw(.6,2.5)
controle2=rnd_btw(.6,1.8)
escalaModular=rnd_btw(.12,.27)
faixaTamanho=rnd_btw(.2,1)
rotacao=rnd_btw(-10,10)
forma=rnd_int(1,2)
r=rnd_btw(.5,2.3)
g=rnd_btw(.6,3.4)
b2=rnd_btw(1,5)
equacao=rnd_btw(1.8,4)
oscilaTamanho=rnd_btw(.1,.7)
suavidade=rnd_btw(.3,1)
bordas=rnd_btw(.3,.6)
tempo=rnd_btw(.7,1.6)
proximidade=rnd_btw(0,0.4)
proximidade2=rnd_btw(0,0.1)
proximidade3=rnd_btw(3,9)
velocidade=rnd_btw(1,1.6)


voronoi(voronoiTamanho,voronoiFrequencia,voronoiQuantidade).pixelate(pixels).rotate(-2.3)
.modulate(osc(.8,velocidadeOscilador,2)).add(noise(barulho,barulhoVelocidade,1))
.diff(noise(shapes1,.1,shapesSuavidade)).modulatePixelate(osc(1,0.2,1)).thresh(controle1)
.diff(shape(shapes2,shapes2Tamanho)).invert(3).modulatePixelate(osc(1,.2,2)).thresh(controle2)
.modulateScale(osc(1,.4,bordas))
.diff(shape(7,.2,.6)).color(Math.PI/equacao,g,b2).scrollX(.7,.1).scrollY(.2,.1).rotate(rotacao)
.out(o1)

src(o1)
.layer(src(o1))
.modulatePixelate(osc(oscilaTamanho)).diff(shape(forma,faixaTamanho,suavidade)
.rotate(()=> time*tempo).modulateScale(noise(escalaModular,.1)))
.modulateScale(noise(proximidade,proximidade2,proximidade3))
.out()

speed=velocidade







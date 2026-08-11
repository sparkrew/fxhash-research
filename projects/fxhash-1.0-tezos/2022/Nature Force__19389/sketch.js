//Sounds - https://www.audiotool.com/user/ianpernambuco/tracks
//code references : https://hydra-book.glitch.me/
//https://naotohieda.com/
//https://github.com/ojack/hydra/blob/main/docs/funcs.md#colorama
//Some sounds are free from https://freesfx.co.uk/
//Thanks to @GZotti1 For all help and functions for this work


//function by Kukuti @NFT_Kukuti89
//function by eduxdux @eduxdux_

function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

function rnd_btm(min, max) {return fxrand() * (max - min) + max;}

//variaveis

//form
var form1 = rnd_int(1,10)
var col1 = rnd_btw(0.1,1).toFixed(1)
var col2 = rnd_btw(0.4,1).toFixed(1)
var col3 = rnd_btw(0.1,1).toFixed(1)
var osci31 = rnd_int(1, 10)
//form4
var col14 = rnd_btw(0.4,1).toFixed(1)
var col15 = rnd_btw(0.4,1).toFixed(1)
var col16 = rnd_btw(0.1,1).toFixed(1)

var voroi1 = rnd_btw(0.4,1).toFixed(1)
var voroi2 = rnd_btw(0.4,1).toFixed(1)
var voroi3 = rnd_btw(0.1,1).toFixed(1)

var music = rnd_int(1,3)
var rarity = fxrand()
var specialPlace = rarity >= 0.985 ? 1 : 0
    
var place = rnd_int(1,10)
var cornerNumber = rnd_int(1,3)
var tijoloSize = 0.03
var tijoloCorner = 3
var speed = 0.03
//novas
//bordas-osc 11
var bord1 = rnd_btw(0.1,1).toFixed(2)
var bord2 = rnd_btw(0.1,1).toFixed(2)
var bord3 = rnd_btw(0.1,1).toFixed(2)
var rect1 = rnd_btw(0.1,1).toFixed(1)
var rect2 = rnd_btw(0.4,1).toFixed(1)
var rect3 = rnd_btw(0.1,1).toFixed(1)
//bord14
var pix14 = rnd_int(5,50)
//bord13
var scale13 = rnd_btw(0.2,2).toFixed(1)

//fundo3
var fund31 = rnd_btw(0.1,1).toFixed(1)
var fund32 = rnd_btw(0.4,1).toFixed(1)
var fund33 = rnd_btw(0.1,1).toFixed(1)
var kaleid31 = rnd_int(3, 20)
var noise31 = rnd_int(1, 10)
//variações
var vari1 = rnd_int(1,4)
var vari2 = rnd_int(1,4)
var vari3 = rnd_int(1,4)
// let sound;
let sound1;
let sound2;
let sound3;




//variavel pra mostrar imagem
	var show = false;


function preload(){
	sound1 = loadSound('./sound1.mp3');
	sound2 = loadSound('./sound2.mp3');
	sound3 = loadSound('./sound3.mp3');
}

let hc = document.createElement('canvas')
hc.id =  'canvas'
hc.width =  800//window.innerWidth
hc.height = 800//window.innerHeight
document.body.appendChild(hc)
let hydra = new Hydra({detectAudio: false, canvas: hc })


let pg 

window.$fxhashFeatures = {
  "Music": getMusic(),
  "Reflection": Math.round(rect1*10),
	"Piece": getVar3(),
	"Canvas": getVar2(),
	"Picture": getVar1(),
	"Nature Life Power": getRare(),
  }

function getRare(){
	var r = specialPlace * 100
	return 	r.toFixed(2)
}



function getMusic() {
   switch(this.music){
         case 1:
          return "Waterfalls"
         break;
         case 2:
          return "Thunder rain"
         break;
         case 3:
          return "Sing Wind"
         break;
         default:
          break;
         }
}
function getVar1() {
   switch(this.vari1){
         case 1:
          return "Simple"
         break;
         case 2:
          return "Thunder"
         break;
         case 3:
          return "Booger"
         break;
			 case 4:
          return "Pixel"
         break;
        default:
          break;
         }
}
function getVar2() {
   switch(this.vari2){
         case 1:
          return "Simple"
         break;
         case 2:
          return "Wind"
         break;
         case 3:
          return "Mandala"
         break;
			 case 4:
          return "Liquify"
         break;
        default:
          break;
         }
}
function getVar3() {
   switch(this.vari3){
         case 1:
          return "Simple"
         break;
         case 2:
          return "Swirl"
         break;
         case 3:
          return "Radiant"
         break;
			 case 4:
          return "Atom"
         break;
        default:
          break;
         }
}


//dependendo de uma variavel do hash define a variação. Com saidas o1,o2,o3.
var variação1 = () => {
    switch (this.vari1) {
        case 1: return
        case 2: return (// borda fundo nao osc
          shape(4,0.8,0.1).add(osc(40,0.1,0).color(rect1,rect2,rect3).modulatePixelate(noise(20,0.5),100)).luma().out(o1)
                )
        case 3: return (// borda3
         shape(4,0.8,0.1).color(rect1,rect2,rect3).add(gradient(10,1,0).modulateRotate(noise(1,0.5,0).scale(scale13),15,0)).luma()
                .out(o1))
        case 4: return (
            // Borda pixel
         shape(4,0.8,0.1).color(rect1,rect2,rect3).add(osc(10,1,0).modulateRotate(noise(5,0.5,0).pixelate(pix14,pix14).scale(0.5),15,0)).luma()
                .out(o1))
        default: return (
           shape(4,0.8,0.1).mask(noise(40,0.1,0).modulatePixelate(noise(20,0.5),100)).luma()
            )
    }
}
var variação2 = () => {
    switch (this.vari2) {
        case 1: return
        case 2: return (// wind
          shape(4,0.8,0.1).color(voroi1,voroi2,voroi3).mask(voronoi(20,0.1,0).modulatePixelate(noise(2,0.5),100)).luma()
                .out(o2))
        case 3: return (// mandala
         shape(4,0.8,0.1).color(fund31,fund32,fund33).mask(osc(30,0.1,0).modulateRotate(noise(noise31,0.5,0).kaleid(kaleid31).scale(3),15,0)).luma()
                .out(o2))
        case 4: return (
            //liquify
         shape(4,0.8,0.1).mask(osc(4,0.1,0).pixelate(50,50).color(col1,col2,col3).modulatePixelate(noise(20,0.5),10)).luma()
                .out(o2))
        default: return (
           shape(4,0.8,0.1).mask(noise(40,0.1,0).modulatePixelate(noise(20,0.5),100)).luma()
            )
    }
}
var variação3 = () => {
    switch (this.vari3) {
        case 1: return
        case 2: return (
          // peça central
solid(1,1,0.5).mult(shape(3,0.3).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3))
.layer(solid(1,1,0.1).mult(shape(3,0.258).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.2).mult(shape(3,0.222).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.3).mult(shape(3,0.191).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.4).mult(shape(3,0.164).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.5).mult(shape(3,0.141).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.6).mult(shape(3,0.121).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.7).mult(shape(3,0.105).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.8).mult(shape(3,0.09).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.9).mult(shape(3,0.077).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.99).mult(shape(3,0.066).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.8).mult(shape(3,0.057).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.8).mult(shape(3,0.049).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.8).mult(shape(3,0.042).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.8).mult(shape(3,0.036).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.8).mult(shape(3,0.031).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.8).mult(shape(3,0.027).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.8).mult(shape(3,0.023).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.8).mult(shape(3,0.020).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.8).mult(shape(3,0.017).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.8).mult(shape(3,0.014).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.8).mult(shape(3,0.012).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.83).mult(shape(3,0.011).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())

.luma().out(o3))
        case 3: return (// OSC10 forma
   osc(osci31,1,500).color(col1,col2,col3).mult(shape(3,0.3).modulateRotate(osc(10,0.5,0).kaleid(50).scale(0.1),15,0).color(1,1,1).luma())
.layer(osc(1,1,0.1).mult(shape(99,0.258).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.1),3,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.2).mult(shape(99,0.222).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.1),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.3).mult(shape(99,0.191).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.1),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.4).mult(shape(99,0.164).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.1),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.5).mult(shape(99,0.141).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.1),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.6).mult(shape(99,0.121).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.1),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.7).mult(shape(3,0.105).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.09).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.9).mult(shape(3,0.077).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.99).mult(shape(3,0.066).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.057).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.049).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.042).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.036).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.031).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.027).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.023).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.020).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.017).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.014).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.012).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.83).mult(shape(3,0.011).modulateRotate(osc(form1,0.5,0).kaleid(50).scale(0.5),15,0).color(col1,col2,col3)).luma())					

                .out(o3))
        case 4: return (
            // Pixel form
         solid(1,1,0.5).mult(shape(3,0.3).modulateRotate(osc(10,5,0).pixelate(100,100).scale(0.2),15,0).color(col14,col15,col16)).luma()
					.layer(solid(1,1,0.1).mult(shape(3,0.258).modulateRotate(osc(10,5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
					.layer(solid(1,1,0.2).mult(shape(3,0.222).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.3).mult(shape(3,0.191).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.4).mult(shape(3,0.164).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
.layer(solid(1,1,0.5).mult(shape(3,0.141).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
					.layer(osc(1,1,0.6).mult(shape(99,0.121).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.7).mult(shape(3,0.105).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.09).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.9).mult(shape(3,0.077).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.99).mult(shape(3,0.066).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.057).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.049).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.042).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.036).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.031).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.027).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.023).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.020).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.017).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.014).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.8).mult(shape(3,0.012).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())
.layer(osc(1,1,0.83).mult(shape(3,0.011).modulateRotate(osc(10,0.5,0).pixelate(50,50).scale(0.2),15,0).color(col1,col2,col3)).luma())		
                .out(o3))
        default: return (
         solid(1,1,0.5).mult(shape(3,0.3).modulateRotate(osc(1,0.5,0).kaleid(50).scale(0.5),15,0).color(0,1,1)).luma()
					.layer(solid(1,1,0.1).mult(shape(3,0.258).modulateRotate(osc(1,0.5,0).kaleid(50).scale(0.5),15,0).color(0,1,1)).luma())
            )
    }
}
function setup() {
	console.log(getMusic(),Math.round(rect1*10),getVar2(),getVar3(),getVar1(),getRare())

	

	//musica
  switch(music){
    case 1:
      sound1.loop();
      break;
      case 2:
      sound2.loop();
      break;
      case 3:
      sound3.loop();
      break;
      default:
      break;
         }
}


// retrato manchas

variação1()

variação2()

variação3()


//cores retarto, osc da borda
speed=0.01*specialPlace
solid(bord1,bord2,bord3)




//sun
.layer(src(o1))

.layer(src(o2))
.layer(src(o3))

			 
.hue(0.1).blend(noise(1,0.1),0.25).blend(noise(1000,0.1),0.099)

.out(o0)
 



function draw() {

	
	
	
//vê se tem q exibir imagem ou nao
	
}

function windowResized(){

}
function keyPressed() {
    //Salva na resolução 4K apertando S.
   // Se quiser outra resolução substitua o 4000 pela desejada.
    if (keyCode == 83) {
     
      print("Saving image in 2K...")
      canvas = 4000
      M = canvas / 1080
      resizeCanvas(canvas * aspectRatio, canvas)
      save("Teste-2K")
      canvas =
        window.innerWidth / window.innerHeight < aspectRatio
          ? window.innerWidth / aspectRatio
          : window.innerHeight
      M = canvas / 1080
      resizeCanvas(canvas * aspectRatio, canvas)
    }
}


//detecta mouse pressionado e altera variavel
function mousePressed(){
	
	if (show) {
    show = false;
  } else {
    show = true;
  }

}

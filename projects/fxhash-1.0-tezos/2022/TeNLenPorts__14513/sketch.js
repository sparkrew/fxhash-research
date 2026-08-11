//Sounds - https://www.audiotool.com/user/ianpernambuco/tracks
//code references : https://hydra-book.glitch.me/
//https://naotohieda.com/
//https://github.com/ojack/hydra/blob/main/docs/funcs.md#colorama
//All images are free from https://unsplash.com

//function by Kukuti @NFT_Kukuti89
//function by eduxdux @eduxdux_
function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//varias dessas variaveis só estao sendo usadas na hora de fazer os features, nao sei se é o que você
var windVel = rnd_btw(0.05,0.4).toFixed(2)
var windVel2 = rnd_btw(0.05,0.3).toFixed(2)
var windVel3 = rnd_btw(0.05,0.3).toFixed(2)
var TamNuvens3 = rnd_btw(0.65,0.75)
var TamNuvens2 = rnd_btw(0.75,0.85)
var TamNuvens1 = rnd_btw(0.8,0.95)
var break1 = rnd_btw(0.2,1).toFixed(2)
var break2 = rnd_btw(0.2,1).toFixed(2)
var break3 = rnd_btw(0.05,2).toFixed(2)
var GrassN = rnd_int(80, 5000)
var music = rnd_int(1,3)
var rarity = fxrand()
var specialPlace = rarity >= 0.985 ? 1 : 0
    
var place = rnd_int(1,10)
var nuvens = rnd_int(1,4)
var cornerNumber = rnd_int(1,3)
var tijoloSize = 0.03
var tijoloCorner = 3
var speed = 0.03
// let sound;
let sound1;
let sound2;
let sound3;
var imageName = ''


function preload(){
	sound1 = loadSound('./sound1.mp3');
	sound2 = loadSound('./sound2.mp3');
	sound3 = loadSound('./sound3.mp3');
}

let hc = document.createElement('canvas')
hc.width =  window.innerWidth
hc.height = window.innerHeight
document.body.appendChild(hc)
let hydra = new Hydra({detectAudio: false, canvas: hc })


let pg 

window.$fxhashFeatures = {
  "Music": getMusic(),
  "Wind m/s": getWind(),
  "Portal Color": Math.round(break3*10),
	"Bricks": getBricks(),
	"Clouds": getCloud(),
	"Place": getPlace(),
  }

function getWind(){
	var w = windVel * 100
	return 	w.toFixed(2)
}

function getPlace() {
	if (specialPlace) {
		this.imageName = './pandora.jpg';
			return "Pandora"
	} else {
		switch(this.place){
         case 1:
					this.imageName = './waterfall.jpg';
			return "Waterfall"
         break;
         case 2:
          this.imageName = './japan.jpg';
			return "Japanese Temple"
         break;
         case 3:
          this.imageName = './castle.jpg';
			return "French Castle"
         break;
				case 4:
          this.imageName = './tajmahal.jpg';
			return "Taj Mahal"
         break;
				case 5:
          this.imageName = './montain.jpg';
			return "Brazil Mountains"
         break;
				case 6:
          this.imageName = './boreal.jpg';
			return "Northern Lights"
         break;
				case 7:
          this.imageName = './farol.jpg';
			return "Swiss Lighthouse"
         break;
				case 8:
          this.imageName = './egipt.jpg';
			return "Sphinx"
         break;
				case 9:
          this.imageName = './paris.jpg';
			return "Eiffel Tower"
         break;
				case 10:
          this.imageName = './hongkong.jpg';
			return "Urban HongKong"
         break;
         default:
          break;
         }
	}
	
}
function getBricks() {
   switch(this.cornerNumber){
         case 1:
          return "Triangular"
         break;
         case 2:
          return "Pentagonal"
         break;
         case 3:
          return "Hexagonal"
         break;
         default:
          break;
         }
}
function getMusic() {
   switch(this.music){
         case 1:
          return "Intensivity"
         break;
         case 2:
          return "Skymov"
         break;
         case 3:
          return "Sunnyday"
         break;
         default:
          break;
         }
}
function getCloud() {
   switch(this.nuvens){
         case 1:
          return "0"
         break;
         case 2:
          return "2"
         break;
         case 3:
          return "4"
         break;
			 case 4:
          return "6"
         break;
         default:
          break;
         }
}



//dependendo de uma variavel do hash define qual o tipo de tijolo, triangulo, hexagono e pentagono
var calculaTijolos = () => {
	if(cornerNumber == 1 ){
            return 3;
        } else if(cornerNumber == 2){
            return 5;
        }else{
					return 6;
				}
}
var calculaTamTijolos = () => {
	if(cornerNumber == 1 ){
		//tamanho tijolo triangular
            return 0.03;
        }else{
					//tamanho tijolo hexagonal e pentagonal
					return 0.036;
				}
}

//dependendo de uma variavel do hash define quantas nuvens terao 
var calculaNuvens = () => {
    switch (this.nuvens) {
        case 1: return
        case 2: return (// Nuvens
            shape(99, 0.15, 0.05)
                .add(shape(99, 0.1, 0.05).scrollX(0.09, 0))
                .add(shape(99, 0.12, 0.05).scrollX(0.09, 0))
                .add(shape(99, 0.12, 0.05).scrollY(0.07, 0))
                .add(shape(99, 0.1, 0.05).scrollY(0.07, 0).scrollX(0.9, 0))
                .add(shape(99, 0.1, 0.05).scrollY(1, 0).scrollX(0.84, 0))
                .add(shape(99, 0.12, 0.05).scrollY(0.1, 0))
                .add(shape(99, 0.12, 0.05).scrollX(0.9, 0).blend(noise(20, 0.7))).luma()
                .scrollY(0.2, 0).scrollX(0, windVel).scale(TamNuvens3)
                .out(o2))
        case 3: return (// Nuvens
            shape(99, 0.15, 0.05)
                .add(shape(99, 0.1, 0.05).scrollX(0.09, 0))
                .add(shape(99, 0.12, 0.05).scrollX(0.09, 0))
                .add(shape(99, 0.12, 0.05).scrollY(0.07, 0))
                .add(shape(99, 0.1, 0.05).scrollY(0.07, 0).scrollX(0.9, 0))
                .add(shape(99, 0.1, 0.05).scrollY(1, 0).scrollX(0.84, 0))
                .add(shape(99, 0.12, 0.05).scrollY(0.1, 0))
                .add(shape(99, 0.12, 0.05).scrollX(0.9, 0).blend(noise(20, 0.7))).luma()
                .scrollY(0.2, 0).scrollX(0, windVel).scale(TamNuvens3)
                // //nuvem 2
                .layer(shape(99, 0.15, 0.05)
                    .add(shape(99, 0.1, 0.05).scrollX(0.09, 0))
                    .add(shape(99, 0.12, 0.05).scrollX(0.09, 0))
                    .add(shape(99, 0.12, 0.05).scrollY(0.07, 0))
                    .add(shape(99, 0.1, 0.05).scrollY(0.07, 0).scrollX(0.9, 0))
                    .add(shape(99, 0.1, 0.05).scrollY(1, 0).scrollX(0.84, 0))
                    .add(shape(99, 0.12, 0.05).scrollY(0.1, 0))
                    .add(shape(99, 0.12, 0.05).scrollX(0.9, 0).blend(noise(20, 0.7)))
                    .scrollY(0.27, 0).scrollX(0, windVel2).scale(TamNuvens2).luma())

                .out(o2))
        case 4: return (
            // Nuvens
            shape(99, 0.15, 0.05)
                .add(shape(99, 0.1, 0.05).scrollX(0.09, 0))
                .add(shape(99, 0.12, 0.05).scrollX(0.09, 0))
                .add(shape(99, 0.12, 0.05).scrollY(0.07, 0))
                .add(shape(99, 0.1, 0.05).scrollY(0.07, 0).scrollX(0.9, 0))
                .add(shape(99, 0.1, 0.05).scrollY(1, 0).scrollX(0.84, 0))
                .add(shape(99, 0.12, 0.05).scrollY(0.1, 0))
                .add(shape(99, 0.12, 0.05).scrollX(0.9, 0).blend(noise(20, 0.7))).luma()
                .scrollY(0.2, 0).scrollX(0, windVel).scale(TamNuvens3)
                // //nuvem 2
                .layer(shape(99, 0.15, 0.05)
                    .add(shape(99, 0.1, 0.05).scrollX(0.09, 0))
                    .add(shape(99, 0.12, 0.05).scrollX(0.09, 0))
                    .add(shape(99, 0.12, 0.05).scrollY(0.07, 0))
                    .add(shape(99, 0.1, 0.05).scrollY(0.07, 0).scrollX(0.9, 0))
                    .add(shape(99, 0.1, 0.05).scrollY(1, 0).scrollX(0.84, 0))
                    .add(shape(99, 0.12, 0.05).scrollY(0.1, 0))
                    .add(shape(99, 0.12, 0.05).scrollX(0.9, 0).blend(noise(20, 0.7)))   
                    .scrollY(0.27, 0).scrollX(0, windVel2).scale(TamNuvens2).luma())
                // //nuvem 3
                .layer(shape(99, 0.15, 0.05)
                    .add(shape(99, 0.1, 0.05).scrollX(0.09, 0))
                    .add(shape(99, 0.12, 0.05).scrollX(0.09, 0))
                    .add(shape(99, 0.12, 0.05).scrollY(0.07, 0))
                    .add(shape(99, 0.1, 0.05).scrollY(0.07, 0).scrollX(0.9, 0))
                    .add(shape(99, 0.1, 0.05).scrollY(1, 0).scrollX(0.84, 0))
                    .add(shape(99, 0.12, 0.05).scrollY(0.1, 0))
                    .add(shape(99, 0.12, 0.05).scrollX(0.9, 0).blend(noise(20, 0.7)))
                    .scrollY(0.39, 0).scrollX(0, windVel3).scale(TamNuvens1).luma())
                .out(o2))
        default: return (
            shape(99, 0.15, 0.05)
                .add(shape(99, 0.1, 0.05).scrollX(0.09, 0))
                .add(shape(99, 0.12, 0.05).scrollX(0.09, 0))
                .add(shape(99, 0.12, 0.05).scrollY(0.07, 0))
                .add(shape(99, 0.1, 0.05).scrollY(0.07, 0).scrollX(0.9, 0))
                .add(shape(99, 0.1, 0.05).scrollY(1, 0).scrollX(0.84, 0))
                .add(shape(99, 0.12, 0.05).scrollY(0.1, 0))
                .add(shape(99, 0.12, 0.05).scrollX(0.9, 0).blend(noise(20, 0.7)))
                .scale(1.1)
                .scrollY(0.39, 0).scrollX(0, windVel).luma().scale(0.85)
            )
    }
}

// Sun
shape(99,0.3,0.01).rotate(1).scrollX(0.42)
.scrollY(0.4).color(300,1,0).modulate(noise(50,4)).modulatePixelate(noise(2,0.5),1000)
.luma()
.add(shape(99,0.1,0.07).scrollX(0.418)
.scrollY(0.4).color(250,0.2,0).blend(noise(200,0.1)).modulatePixelate(noise(2,0.1),1000)
.luma()).out(o1)


calculaNuvens()

// grama atras
solid(1,1).mult(shape(2,0.2).color(0,1,0,1))
.scale([0.1,0.2].smooth(0.5).fast(0.1))
.modulate(osc(5))
.modulateScale(osc([1,3].smooth(0.5),0))
.repeat(GrassN,1)
.scrollY(0.5,0).luma().out(o3)


solid(0,0,3).brightness(0.70)
//sun
.layer(src(o1))

.layer(src(o2))

			 
//pontos port
.layer(shape(calculaTijolos(),0.05,0).scrollX(1,0)
.scrollY(1.7,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000).modulateRotate(shape(3,0.01,0.5),200,2).rotate(10,1).rotate(1.05)
.luma())



//floor
.layer(solid(6,0,0).mult(shape(2,0.18).color(0.1,6,0,1).scrollY(0.554,0).luma()))
// Plantas atras
.layer(src(o3))


//back
.layer(shape(4,0.29,0).scrollX(1,0)
.scrollY(0.92,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())

//portal
.layer(src(o0).scale(1.01).mask(shape(4,0.32).scrollY(0.89,0).scale(1,1,()=>hc.width/hc.height))).blend(shape(99).scrollY(0.05,0).scale(10,1,()=>hc.width/hc.height).mult(osc(20,0.1,2).scrollY(0.05,0)),0.1).scrollY(0.04,0)
.layer(src(o0).scale(1.01).mask(shape(4).scrollY(0.73,0).scale(1,1,()=>hc.width/hc.height))).blend(shape(4).scrollY(0.73,0).scale(1,1,()=>hc.width/hc.height).mult(osc() // com isso começa verde e só depois muda de cor ai todos os previews ficam verde, nao sei se era a intenção.mult(osc(() => mouse.x * 0.1,0.1,100)
.modulateRotate(shape(999,0.3,0.5).diff(osc(20)),1.57).rotate(90,5).kaleid(30)),0.1)


// Tijolos up
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.862,0)
.scrollY(1.09,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.898,0)
.scrollY(1.09,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.933,0)
.scrollY(1.09,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.969,0)
.scrollY(1.09,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(1.004,0)
.scrollY(1.09,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(1.039,0)
.scrollY(1.09,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(1.074,0)
.scrollY(1.09,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(1.109,0)
.scrollY(1.09,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(1.144,0)
.scrollY(1.09,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())

//tijolos
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.17,0)
.scrollY(1.09,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.17,0)
.scrollY(1.055,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.17,0)
.scrollY(1.02,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.17,0)
.scrollY(0.985,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.17,0)
.scrollY(0.95,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.17,0)
.scrollY(0.915,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.17,0)
.scrollY(0.88,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.17,0)
.scrollY(0.845,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.17,0)
.scrollY(0.81,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.17,0)
.scrollY(0.775,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.17,0)
.scrollY(0.74,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.17,0)
.scrollY(0.705,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.17,0)
.scrollY(0.67,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.17,0)
.scrollY(0.635,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.17,0)
.scrollY(0.6,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())

//tijolos
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.831,0)
.scrollY(1.09,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.831,0)
.scrollY(1.055,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.831,0)
.scrollY(1.02,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.831,0)
.scrollY(0.985,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.831,0)
.scrollY(0.95,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.831,0)
.scrollY(0.915,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.831,0)
.scrollY(0.88,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.831,0)
.scrollY(0.845,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.831,0)
.scrollY(0.81,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.831,0)
.scrollY(0.775,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.831,0)
.scrollY(0.74,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.831,0)
.scrollY(0.705,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.831,0)
.scrollY(0.67,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.831,0)
.scrollY(0.635,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())
.layer(shape(calculaTijolos(),calculaTamTijolos(),0).rotate(10,1).scrollX(0.831,0)
.scrollY(0.6,0).color(break1,break2,break3).modulatePixelate(noise(2,0.5),1000)
.luma())

//plantas  da frente
.layer(solid(1,1).mult(shape(2,0.2).color(0,1,0,1))
.scale([0.1,0.2].smooth(0.7).fast(0.1))
.modulate(osc(2))
//.modulateScale(osc([1,3].smooth(0.5),0))
.repeat(GrassN,1)
.scrollY(0.52,0).luma())


.out(o0)
 
//variavel pra mostrar imagem
	var show = false;
let h5;
let portal;
var transparencyIn = 0;
var transparencyOut = 1;
var cover;
var op = 1;
var pass = 0.0005
function setup() {
	console.log(getMusic(),getWind(),Math.round(break3*10),getBricks(),getCloud(),getPlace())
	getPlace();
	h5 =  createImg(this.imageName,' ');
	
	h5.style("width", String(hc.width/3 - 25)+"px", "heigh",String(hc.height + 100)+"px");
	
	//transparencia 
	h5.style("opacity","0.8");
	//blur
	h5.style("filter","blur(1.5px)");
	h5.position(hc.width/2 - (hc.width/3 - 25)/2 , hc.height/2 - 55);
	
	portal = createImg('portal.png',' ');
	portal.style("width", String(hc.width/3 - 25)+"px", "heigh",String(hc.height + 100)+"px");
	//blur
	portal.style("filter","blur(2px)");
	portal.position(hc.width/2 - (hc.width/3 - 25)/2 , hc.height/2 - 55);
	
  cover = createCanvas(hc.width, hc.height,);
  cover.position(0, 0);
  background(0, 0, 0);
	
	
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

function draw() {
	//aumentar aqui diminui o tempo q o quadrado preto no inicio fica na tela
	pass = pass * 1.0045
	
	if(op == 0) { 
		cover.remove()
		op = 1;
	}else {
		op = op - pass
		cover.style("opacity",String(op));
	}
//vê se tem q exibir imagem ou nao
	if(show){
		//transparencia 
		//aumentar aqui diminui o tempo q a imagem do portal fica na tela
		
		if(transparencyOut == 1){
			console.log("transparencyOut 1");
			transparencyIn = transparencyIn + 0.008;
			portal.style("opacity",String(transparencyIn));
			portal.show();
			if(transparencyIn >= 1) {
				h5.show();
				console.log("transparencyIn 1");
				transparencyOut = transparencyOut - 0.003
			}
		} else {
			console.log("transparencyOut != 1");
			if(transparencyOut > 0 ) {
				console.log("transparencyOut > 0");
			transparencyOut = transparencyOut - 0.003;
			portal.style("opacity",String(transparencyOut));
			portal.show();
			h5.show();
			}
		}
	}else {
		transparencyIn = 0;
		transparencyOut = 1;
		portal.hide();
		h5.hide();
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
//.-,.-.,-.    /`-.  .'(     /`-.     /`-.  .'(   )\  )\     )\.-.           .-./(       .-.  .-,.-.,-.
//) ,, ,. (  ,' _  \ \  )  ,' _  \  ,' _  \ \  ) (  \, /   ,' ,-,_)        ,'     )  ,'  /  ) ) ,, ,. (
//\( |(  )/ (  '-' ( ) (  (  '-' ( (  '-' ( ) (   ) \ (   (  .   __       (  .-, (  (  ) | (  \( |(  )/
//   ) \     ) ,_ .' \  )  ) ,._.'  ) ,._.' \  ) ( ( \ \   ) '._\ _)       ) '._\ )  ) '._\ )    ) \
//   \ (    (  ' ) \  ) \ (  '     (  '      ) \  `.)/  ) (  ,   (        (  ,   (  (  ,   (     \ (
//    )/     )/   )/   )/  )/       )/        )/     '.(   )/'._.'         )/ ._.'   )/ ._.'      )/

//         ______      __________________
//__________<  /___  ___|__  /__  /__  /____________  __
//___  __ \_  /__  |/_/__/_ <__  /__  __ \  __ \_  / / /
//__  /_/ /  / __>  < ____/ /_  / _  /_/ / /_/ /  /_/ /
//_  .___//_/  /_/|_| /____/ /_/  /_.___/\____/_\__, /
///_/                                          /____/
//

let hash = fxrand();
let bghash = fxrand();
let yhash = fxrand();
let xhash = fxrand();
let varhash = fxrand();
let ySize, ySizeName;
let xSize, xSizeName;
let penname;
let bgname;
let variety, varname
let bg;
var pal
var cl=[];
let alterations = [];

if (varhash > 0.85) variety = 8, varname ="Low"
else if (varhash > 0.25) variety=16, varname ="Medium"
else variety=24, varname ="High"

if (hash > 0.95) cl[0]='#222222', cl[1]='#44313d' ,cl[2]='#fca311', cl[3]='#aaaaaa', cl[4]='#eeeeee', cl[5]='#000000', pal="Cairo"
else if (hash > 0.9) cl[0]='#5bc0eb', cl[1]='#fde74c' ,cl[2]='#9bc53d', cl[3]='#e55934', cl[4]='#fa7921', cl[5]='#000000', pal="Luminous"
else if (hash > 0.85) cl[0]='#ff00c1', cl[1]='#9600ff' ,cl[2]='#4900ff', cl[3]='#00b8ff', cl[4]='#00fff9', cl[5]='#000000', pal="Neon"
else if (hash > 0.80) cl[0]='#0b3954', cl[1]='#bfd7ea', cl[2]='#ff6663', cl[3]='#e0ff4f', cl[4]='#dddddd', cl[5]='#000000', pal="Spark"
else if (hash > 0.75) cl[0]='#d81159', cl[1]='#8f2d56' ,cl[2]='#218380', cl[3]='#fbb13c', cl[4]='#73d2de', cl[5]='#000000', pal="Marrakesh"
else if (hash > 0.7) cl[0]='##6667ab', cl[1]='#b2b3d5' ,cl[2]='#8485bb', cl[3]='#474877', cl[4]='#abaa66', cl[5]='#000000', pal="Very Peri"
else if (hash > 0.65) cl[0]='#da8c2f', cl[1]='#d7bc8a', cl[2]='#d16a65', cl[3]='#8fdccd', cl[4]='#51c8be', cl[5]='#000000', pal="Popsicle"
else if (hash > 0.6) cl[0]='#d72638', cl[1]='#3f88c5', cl[2]='#f49d37', cl[3]='#5a576c', cl[4]='#f22b29', cl[5]='#000000', pal="Retro"
else if (hash > 0.55) cl[0]='#2e294e', cl[1]='#efbcd5', cl[2]='#be97c6', cl[3]='#8661c1', cl[4]='#4b5267', cl[5]='#000000', pal="Evening"
else if (hash > 0.50) cl[0]='#E3E8EA', cl[1]='#222222', cl[2]='#9BA8AE', cl[3]='#707A7E', cl[4]='#495054', cl[5]='#000000', pal="Monochrome"
else if (hash > 0.45) cl[0]='#c2e812', cl[1]='#91f5ad', cl[2]='#8b9eb7', cl[3]='#745296', cl[4]='#632a50', cl[5]='#000000', pal="Nightmare"
else if (hash > 0.4) cl[0]='#b9e3c6', cl[1]='#59c9a5', cl[2]='#d81e5b', cl[3]='#23395b', cl[4]='#fffd98', cl[5]='#000000', pal="Dali"
else if (hash > 0.35) cl[0]='#242323', cl[1]='#3a4e48', cl[2]='#6a7b76', cl[3]='#8b9d83', cl[4]='#beb0a7', cl[5]='#000000', pal="Metro"
else if (hash > 0.3) cl[0]='#EEF8FF', cl[1]='#D1F5FF', cl[2]='#78E3FD', cl[3]='#34F6F2', cl[4]='#7D53DE', cl[5]='#000000', pal="Blue Neon"
else if (hash > 0.25) cl[0]='#582936', cl[1]='#8c2f39', cl[2]='#b23a48', cl[3]='#fcb9b2', cl[4]='#fed0bb', cl[5]='#000000', pal="Reds"
else if (hash > 0.20) cl[0]='#073b3a', cl[1]='#0b6e4f', cl[2]='#08a045', cl[3]='#6bbf59', cl[4]='#ddb771', cl[5]='#000000', pal="Greens"
else if (hash > 0.15) cl[0]='#022b3a', cl[1]='#1f7a8c', cl[2]='#bfdbf7', cl[3]='#e1e5f2', cl[4]='#eeeeee', cl[5]='#000000', pal="Winter"
else if (hash > 0.10) cl[0]='#c1edcc', cl[1]='#b0c0bc', cl[2]='#a7a7a9', cl[3]='#797270', cl[4]='#453f3c', cl[5]='#000000', pal="Cabin Fever"
else if (hash > 0.05) cl[0]='#780116', cl[1]='#f7b538', cl[2]='#db7c26', cl[3]='#d8572a', cl[4]='#c32f27', cl[5]='#000000', pal="Flames"
else cl[0]='#072ac8', cl[1]='#1e96fc', cl[2]='#a2d6f9', cl[3]='#fcf300', cl[4]='#ffc600', cl[5]='#000000', pal="Beach"

if (bghash > 0.99) bg='#DDDDDD', bgname ="Light Gray"
else if (bghash > 0.98) bg='#FFFFFF', bgname ="White"
else if (bghash > 0.97) bg='#777777', bgname ="Mid Grey"
else if (bghash > 0.96) bg ='#F7EFD4', bgname ="Cream"
else bg='#000000', bgname ="Black"

if (xhash > 0.75) xSize=1.5, xSizeName ="Major Up"
else if (xhash > 0.50) xSize=0.5, xSizeName ="Minor Up"
else if (xhash > 0.25) xSize=-0.5, xSizeName ="Minor Down"
else xSize=-1.5, xSizeName ="Major Down"

if (yhash > 0.75) ySize=3.5, ySizeName ="Major Right"
else if (yhash > 0.50) ySize=1.5, ySizeName ="Minor Right"
else if (yhash > 0.25) ySize=-1.5, ySizeName ="Minor Left"
else ySize=-3.5, ySizeName ="Major Left"

console.log (pal)
console.log (bg)
console.log (variety)
console.log (xSizeName)
console.log (ySizeName)

function preload() {
  pal = window.$fxhashFeatures["Palette Type"]
  //bgname = window.$fxhashFeatures["Background Color"]
  ySizeName= window.$fxhashFeatures["Horizontal Tilt"]
  xSizeName= window.$fxhashFeatures["Vetical Tilt"]
  variety= window.$fxhashFeatures["Palette Variety"]
}

function setup() {
  frameRate(3)
  createCanvas(400, 400, WEBGL);
  pixelDensity(2.2);
  rectMode(CENTER);
  //ellipseMode();
  blendMode(MULTIPLY);

  stroke(cl[int(Math.floor(fxrand()*6))]);
  noStroke();
}

function draw() {
 background(bg);
 //noLoop()

    for (let i = 0; i < variety; i++){
    alterations[i] = new Alteration();
    }

    for (let i = 0; i < variety; i++){
    alterations[i].display();
    }
}

window.$fxhashFeatures = {
"Palette Type": pal,
//"Background Color": bgname,
"Horizontal Tilt": ySizeName,
"Vetical Tilt": xSizeName,
"Palette Variety": variety
}
class Alteration{

  display(){
    //rotateY(radians(10));
    //rotateX(radians(10));
    //rotateZ(radians(8));
    push();
    rotateY(radians(ySize));
    rotateX(radians(xSize));

    var diam = int(Math.floor(fxrand()*30)+2);
    fill(cl[int(Math.floor(fxrand()*6))])
    for(let i = 0; i < 14; i++){
      rotateX(radians(.0002));
    ellipse(0,0,diam+(i*45),diam+(i*45));
    }
    pop();
  }
}

function keyPressed() {
	if (key == "s") save('tripping-p1x3lboy.png');
}

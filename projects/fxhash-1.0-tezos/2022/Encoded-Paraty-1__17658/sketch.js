// encoded-paraty-1 | photography and code
// coded and photography by artpardini 
// twitter: @artpardini 
// photos from Paraty-RJ 
// special thanks for @morbeck_art and @eduxdux_



console.log(rnd_int(0,10))

Bg = fxrand();

bg001 = Bg > 0.75 ? 1 : Bg > 0.50 ? 2 : Bg > 0.25 ? 3 : 4;

casa1 = rnd_int(1, 6);
casa2 = rnd_int(1, 3);
casa3 = rnd_int(1, 4);
casa4 = rnd_int(1, 3);

porta1 = rnd_int(1, 52);
porta2 = rnd_int(1, 52);
porta3 = rnd_int(1, 52);
porta4 = rnd_int(1, 52);




function preload() {
  Cm001 = loadImage(`photo/casa_m${casa1}.jpg`);
  Cm002 = loadImage(`photo/casa_e${casa2}.jpg`);  
  Cm003 = loadImage(`photo/casa_g${casa3}.jpg`);   
  Cm004 = loadImage(`photo/casa_g_e${casa4}.jpg`);
  Pj001 = loadImage(`photo/p${porta1}.png`);  
  Pj002 = loadImage(`photo/p${porta2}.png`);  
  Pj003 = loadImage(`photo/p${porta3}.png`); 
  Pj004 = loadImage(`photo/p${porta4}.png`);
  Sw01 = loadImage(`photo/sombra.png`);
  Sw02 = loadImage(`photo/sombra-2.png`);
}





function setup() {

  let can = 1800;
  createCanvas(can, 3*can/4);
  
  
  xx = width;
  yy = height;
  colorMode(RGB);
  background(0);
  imageMode(LEFT);
  
  

}




function draw() {
   
  
  if (bg001 == 1) { bg01(); }
  if (bg001 == 2) { bg02(); }
  if (bg001 == 3) { bg03(); }
  if (bg001 == 4) { bg04(); }

  
                        
  
 fxpreview();
    
}



function bg01(){
  
 image(Cm001, 0, 0, xx, yy);
  
  image(Pj001, 0.08*xx, 0.225*yy, 0.22*xx, 0.62*yy);
  image(Pj002, 0.38*xx, 0.225*yy, 0.22*xx, 0.62*yy);
  image(Pj003, 0.69*xx, 0.225*yy, 0.22*xx, 0.62*yy);
  
}

function bg02(){
  
 image(Cm002, 0, 0, xx, yy);
  
  image(Pj001, 0.30*xx, 0.19*yy, 0.25*xx, 0.66*yy);
  image(Pj002, 0.64*xx, 0.19*yy, 0.25*xx, 0.66*yy);
  
}

function bg03(){
  
 image(Cm003, 0, 0, xx, yy);
  
  image(Pj001, 0.046*xx, 0.215*yy, 0.19*xx, 0.54*yy);
  image(Pj002, 0.285*xx, 0.215*yy, 0.19*xx, 0.54*yy);
  image(Pj003, 0.52*xx, 0.215*yy, 0.19*xx, 0.54*yy);
  image(Pj004, 0.75*xx, 0.215*yy, 0.19*xx, 0.54*yy);
  shadow2();
  
}
function bg04(){
  
 image(Cm004, 0, 0, xx, yy);
  
  image(Pj001, 0.24*xx, 0.215*yy, 0.19*xx, 0.54*yy);
  image(Pj002, 0.49*xx, 0.215*yy, 0.19*xx, 0.54*yy);
  image(Pj003, 0.74*xx, 0.215*yy, 0.19*xx, 0.54*yy);
  shadow(); 
  
}

function shadow(){
  if (casa4 == 3) {
     push();
    tint(255, 130); 
     image(Sw01, 0, 0, xx, yy);     
    pop(); 
  };  
}

function shadow2(){
  if (casa3 == 1) {
     push();
    tint(255, 40); 
     image(Sw02, 0, 0, xx, yy);     
    pop(); 
  };  
}




function rnd_btw(a, b) {
  return fxrand() * (b - a) + a;
}
function rnd_btwexp(a, b) {
  return fxrand() ** 2 * (b - a) + a;
}
function rnd_int(a, b) {
  return (
    (a = Math.ceil(a)),
    (b = Math.floor(b)),
    Math.floor(fxrand() * (b - a + 1)) + a
  );
}

window.$fxhashFeatures = {Format:getsquare(bg001)}

function getsquare(bg001) {
  if (bg001 == 1) return "Zoom:3 Gates:3";
  if (bg001 == 2) return "Zoom:3 Gates:2";
  if (bg001 == 3) return "Zoom:1 Gates:4";
  if (bg001 == 4) return "Zoom:2 Gates:3";
  
}


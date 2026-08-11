// f3 ei vaikuta suoraan sekä valkoseen että gridiin vaan molempiin erikseen eli piirtää vähemmän taustoja tai gridejä
//outo missa 4x kokonen koko kuva
//tekstuuri non determi
//pohja color mode


let max_col = 9

let f1 = Math.round(fxrand() *4)// hajanaisuus 0-4
let f1a = Math.round(fxrand() *4)+2 // angle array määrä
let f1b = Math.round(fxrand() *2)+1 // amount of layers

let f1c = Math.round(fxrand()) 

let f2 = Math.round(fxrand() *2)+1// break modes 1 no break, 2 mid brake, 3 out break

let f3 = Math.round(fxrand() *(max_col-1))+1// nmbr of columns
let f33 = Math.round(fxrand() *(max_col-1))+1
let f3_1 = Math.round(fxrand() *2)+1 // 1 no change, 2 less bg col, 3 less grid col
let f3_2;
let f3_3;

if (f3_1 == 2)
{ f3_2 = f3+(Math.round(fxrand()*max_col)+(Math.round(max_col/2)))  // number of backgrounds if not tied
f3_2 = f3_2%max_col
}
else
{
 f3_2 = f3
}


if (f3_1 == 3)
{
let f3_3 = f3+(Math.round(fxrand()*max_col)+(Math.round(max_col/2)))  // number of backgrounds if not tied
f3_2 = f3_2%max_col
}
else
{
 f3_3 = f3
}

let f4 = Math.round(fxrand() *4)+1// top mode
let f5 = Math.round(fxrand() *4)+1// bottom mode
let f6 = Math.round(fxrand() *2)+1 // bg color mode
let f61 = Math.round(fxrand()) // screen bg color mode
let f62 = Math.round(fxrand() *3)+1 // split mode
let f63 = Math.round(fxrand() *5)// background texture mode
let f64 = Math.round(fxrand() *2)// background texture brush
let f65 = Math.round(fxrand() *3)// background hairmode
let f66 =Math.round(fxrand() *3)//  rotate bacground


let f7 = Math.round(fxrand())//90 degree flip
let f71 = Math.round(fxrand())//mirror degree flip
let f8 = Math.round(fxrand()*3)//tausta random rotate mode
let f9 = Math.round(fxrand()*2)//väli vs päällekkäin
let f10 = Math.round(fxrand() *4) +1 // column size mode
let f11 = Math.round(fxrand()) //pivot point
let f12 = (fxrand()*0.7)+0.3  //amount of serpenttiini
let f12a = (fxrand()*90)+10 // serpentiini copy distance
let f12b = Math.round(fxrand())
let f12c = 0
if (f12b === 1)
{ f12c = Math.round(fxrand()* 4)+1}
let f12d = Math.round(fxrand()) // mega lonkero
let f12e = Math.round(fxrand()) // ympyrä true false
let f12f = Math.round(fxrand()) // vesi aallot ympyrä true false
let f12g = Math.round(fxrand()*3) // ympyrä scale

let f13 = Math.round(fxrand()) // tri rotate angle
let f14 = Math.round(fxrand()*2) //isometrik mode
let f141 = Math.round(fxrand()*2) //isometrik mirroring

let f142 = Math.round(fxrand()*2) //isometrik colormode
let f143 = Math.round(fxrand()) //isometrik 90 deg mode

let f15 = Math.round(fxrand())//screen noise shade

let f16 = Math.round(fxrand()*4)+1 //viiva määrä
let f16a = Math.round(fxrand()*30)+10 //viiva määrä
let f16b = Math.round(fxrand())//line rotate lock 0 = no rotate


if (f1b === 1)
{
f14 = 0
}
//let f17 = Math.round(fxrand())// liitu fat = 1
//f1b = 2
//print ('layer maara = '+f1b)
//f14 = 0;
//f1 = 4
//f61=1
//f63=1
//f64=2
f66=2
//f4 = 1
//f5 = 1
//f3 = 1;
//f33 = 1
//f2 = 1
//f3_1 = 2

f7 = 0;
//f9 = 0;
//f8 = 0
//f10 = 2;  //fiksaa f10 modet!!!
//f71 = 0;
//f13 = 1;
//f14 = 0;
//f141 = 0;
//f142 = 1;
//f143 = 0;
f15 = 1;

let All_ang = [22.5,-22.5,45,-45,67.5,-67.5,90,-90,112.5,-112.5,135,-135,157.5,-157.5,180,-180,202.5,-202.5,225,-225,247.5,-247.5,270,-270,292.5,-292.5,315,-315,337.5,-337.5]
let ang_arr = []
let W2 = window.innerWidth
let H2 = Math.round((window.innerWidth/16)*9)

let Flow_s = 1500
let H = (Flow_s/16)*9 //flowfield 
let W = Flow_s

let DIM = Math.min(W, H)
let DIM2 = Math.min(W2, H2)

let M = DIM2 / DIM

let WIDTH = W2
let HEIGHT = H2

let W_MOD = 0.8
let H_MOD = 0.8

let W3 = W_MOD*W
let H3 = H_MOD*H
let M2 = (W_MOD+H_MOD)/2


let pic_width
let pic_height

let offX;
let offY;

let taustaW = 1000
let taustaH = 1000
let rnd_run

let clr_T_ar = [];
let clr_bg1;
let clr_bg2;

let clr_sc1;
let clr_sc2;


let clr1;
let clr2;
let clr3;
let clr_loik = clr2;




var clr_seed = (170,100,50);
var clrs = 1; // 1 = monotone 2 = monocrhrome 3=duotone
var clr_mode = 1; // 1 = monotone 2 = Complementary

var clr_aL = (11,0,200,70);
var clr_ar = [];
var marginaali = 60;
let screen_clr_ar = [];
let clr_M_ar = [];


let blockX = WIDTH/2

let gridX = Math.round(blockX/(5*M))
let gridY ;

let col_width;
let col_height;
let col_dist;

let bend_arX = []
let bend_arY = []
let tausta_arr =[];

let siiv1;
let siiv2;

 let grid_dist

  let screen_offX
  let screen_offY
  let main_offX
  let main_offY
  
  
  let scr_clr_1;
  let scr_clr_2;
  
  let vali_c;
  
  let tausta_vali
  let tausta_vali2
  
  let Tsiivu_valiX;
  let Tsiivu_valiY;
  
  let gridlngth_mod
  let rota_off;
  
  let pivotX
  let pivotY 
  let pivotAng= (fxrand()*14)-7
  
  
  let gr_size;
  var num = 1;
  var noiseScale=500, noiseStrength=1;
  var cray = [num];
  let size_mod;
  let clr_line
  
  let bgbgclr;
  
  let randomi, randomi2;
  let tri_ang
  let isoW 
  let isoH
    let iso_midW 
  let iso_midH
  
  let hor_mov 
  let tri_ang2
  
  let clr_arr_valu;
  let max_conf_leng = Math.round(fxrand()*500);
  
  let colerp;
  let t_draw
  
  let vali_kork 
  let vali_leve
  let reso = 2
  
  let noize
  
  let mastOfstX = 0
  let mastOfstY = 0
  
  let kaskireuna
  let reunat
  let masked
  
function preload()
{
 shady = loadShader('shady.vert', 'shady.frag');
 noize = loadShader('effect2.vert', 'effect2.frag');
 let params = getURLParams();
   reso = int(params.pixDens)
   
   if(typeof params.pixDens === 'undefined'){
    reso = 2;
    }
}



function setup() {
  createCanvas(WIDTH, HEIGHT);
  colorMode(HSB,360,100,100)
  pic_width = WIDTH-((marginaali*M)*2);
  pic_height = HEIGHT-((marginaali*M)*2);
  tausta = createGraphics(taustaW,taustaH, WEBGL);
  grid = createGraphics(WIDTH,HEIGHT, WEBGL);
  grid2 = createGraphics(WIDTH,HEIGHT, WEBGL);
  piirto = createGraphics(WIDTH,HEIGHT);
  liitu = createGraphics(WIDTH,HEIGHT);
  paakuva = createGraphics(WIDTH,HEIGHT);
  reunat = createGraphics(WIDTH,HEIGHT);
  kaskireuna = createGraphics(WIDTH,HEIGHT);
  
  
  gl = grid.GL;
 // gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  //gl = getContext("webgl", { alpha: false });
  //grid.setAttributes('alpha', true)
    //grid.setAttributes("premultipliedAlpha", false)
  background(color('red'))
  print ('fxhash = '+fxhash)
  //print ('layermaara = '+f1b)
  pixelDensity(reso);
  grid.pixelDensity(reso);
  grid2.pixelDensity(reso);
  piirto.pixelDensity(reso);
  liitu.pixelDensity(reso);
   //tausta.angleMode(DEGREES);
   //tausta.colorMode(HSB,360,100,100,100);
   
   piirto.angleMode(DEGREES);
   piirto.colorMode(HSB,360,100,100);
   piirto.rectMode(CENTER);
   
   
   liitu.angleMode(DEGREES);
   liitu.colorMode(HSB,360,100,100);
   liitu.rectMode(CENTER);
   
   
   grid.rectMode(CENTER);
   grid.angleMode(DEGREES);
   //blendMode(MULTIPLY)
   
   grid.colorMode(HSB,360,100,100,100);
   
      grid2.rectMode(CENTER);
   grid2.angleMode(DEGREES);
   //blendMode(MULTIPLY)
   
   grid2.colorMode(HSB,360,100,100,100);
   
  tausta.rectMode(CENTER);
  angleMode(DEGREES);
  rectMode(CENTER);
  
  noiseSeed(fxrand()*(999999));
  for (let i = 0; i < f1a ; i++)
  {
  ang_arr[i]=All_ang[Math.round(fxrand()*(All_ang.length-1))]
  }
  // offX =(fxrand()*(col_width))-col_width/2
//   offY = (fxrand()*(col_height/2))-((col_height/3)*2)
offX =0
  offY = 0
//   print ('offX = '+offX)
//   print ('offY = '+offY)
    
  screen_offX = ((fxrand()*30)-15)*M
  screen_offY = ((fxrand()*30)-15)*M
  
  //tausta.setAttributes('alpha', false) 
  
  Grid = new grids();
  BendArr = new bendArr();
  Taustarr = new tausta_arrer();
  Piirto = new piirturi();
  CLR = new colors();
  Liidut = new liidut();
  clr_seed = [(fxrand()*(360)), (fxrand()*(150)), (fxrand()*(120))];
  //tile_size = (WIDTH/(hor_tiles*M));
  
  
  //Tausta = new taustat();
  //Tausta.display(50);
  
  
  CLR.colormap(clr_seed,clrs,clr_mode) ;
  Taustarr.run();
  Piirto.run();

  
  //gridX = Math.round(col_width/(6*M))
  //gridY = Math.round(col_height/(6*M))
  
    // gridX = Math.round(col_width/(6*M))
//     gridY = Math.round(col_height/(6*M))
  
   // print ('gridX = '+gridX)
   // print ('gridY = '+gridY)
  
  
  //image(piirto,0,0)
  
    // image(piirto,0,0)
    // piirto.clear();
     
     
     
     BendArr.run(f4);
     Grid.run(WIDTH/2,HEIGHT/2,0,0);
     //background(bgbgclr);
     //this.values();
     //image(piirto,0,0)
     piirto.clear();
     
     
//      
//       f3 = Math.round(fxrand() *(max_col-1))+1// nmbr of columns
// 	 f33 = Math.round(fxrand() *(max_col-1))+1
//       f4 = Math.round(fxrand() *4)+1// top mode
//  f5 = Math.round(fxrand() *4)+1// bottom mode
//  f6 = Math.round(fxrand() *2)+1 // bg color mode
//  f61 = Math.round(fxrand()) // screen bg color mode
//  f62 = Math.round(fxrand() *3)+1 // split mode
//  f63 = Math.round(fxrand() *2)
// 
// 
//  f7 = Math.round(fxrand())//90 degree flip
//  f71 = Math.round(fxrand())//mirror degree flip
//  f8 = Math.round(fxrand()*2)//tausta random rotate mode
//  f9 = Math.round(fxrand())//väli vs päällekkäin
//  f10 = Math.round(fxrand() *3) +1 // column size mode
//  f11 = Math.round(fxrand()) //pivot point
     
     
     
     
//      Taustarr.run();
//      Piirto.run2();
//      image(piirto,0,0)
//      
//        BendArr.run(f4);
//      Grid.run(WIDTH/2,HEIGHT/2,0,0);
//      
//      
//      Taustarr.run();
//      Piirto.run2();
//      image(piirto,0,0)
     
     
     
     
     

  
  
  push()
//     if (f7 ==1)
//   {
//     rotate(90)
//  translate(0,-WIDTH,0)
//  }
 
  push()
  //rotate((fxrand()*4)-2)
   
  pop()
  pop()
  
  
  
    // generate bend arrays
  
  
  

 
  
  BendArr.run(f5);
  push();
  
  
  clr1 = clr2
  scale(-1,-1)
  translate(-WIDTH,-HEIGHT,0)
  push()
  if (f7 ==1)
  {
    rotate(90)
 translate(0,-WIDTH,0)
 }
  push();
  rotate((fxrand()*4)-2)
  //Grid.run(WIDTH/2,HEIGHT/2,0,0);
  pop();
  pop();
  pop();
  
  
  push();
//translate(,(fxrand*(WIDTH/4))-HEIGHT/2,0)
  
  //image(grid, 0,0)
  pop();
  //rect (0,0,50,50);
  
  //image(grid, 0,0)
  //noLoop()
  
  
  //image(grid, 0,0)
  //Piirto.tekstuuri();
//   num = 1;
//     for (let i=0; i<num; i++) {
//     //x value start slightly outside the right of canvas, z value how close to viewer
//     var loc = createVector(fxrand()*WIDTH, fxrand()*HEIGHT, 2);
//     var angle = 0; //any value to initialize
//     var dir = createVector(cos(angle), sin(angle));
//     var speed = random(0.5,2);
//     // var speed = random(5,map(mouseX,0,width,5,20));   // faster
//     cray[i]= new liidut(loc, dir, speed);
//   }
  
  
//   randomi = random(0.01, 0.1)
//   randomi2 = random(0.01, 0.05)
  //print ('f3 = '+f3)
  //circle (1200*M,300*M,100*M)
  image(reunat,0,0)
  
}

function draw() {
  //background(245);
  //rect(marginaali*M,marginaali*M, pic_width, pic_height);
//   print('hep') 
//   clr_line =clr2;
//   for (let i=0; i<cray.length; i++) {
//     cray[i].run();
//   }
  //image(liitu,0,0)
  //liitu.clear();
//   paakuva.shader(noize);
//   noize.setUniform('tex0', paakuva);
//   noize.setUniform('amt', 0.3);
//image(paakuva,0,0)
noLoop();
fxpreview()
//print('vika randomi = '+ fxrand())
}


// function mouseClicked() {
//  
//  saveCanvas( 'matriisi', 'jpg');
// 
//  
//  }

function keyPressed() {
  if (keyCode === 82) {
  window.location.reload()
  }
  
    if (keyCode === 74) {
  saveCanvas('Matriisi', 'jpg');
  }
  
      if (keyCode === 80) {
  saveCanvas('Matriisi', 'png');
  }
}


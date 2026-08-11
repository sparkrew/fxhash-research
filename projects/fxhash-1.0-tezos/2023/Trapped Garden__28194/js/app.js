//**Generative art project for fxhash
//**Twitter: @rosbeldev

const title = "Trapped Garden"
let canvasPal;
let interval;
let ink;
let canvasType;
let features;
setTitle(title);

const d = new DEBUG(false);
let seed,maxCanvas;

let leavesColorsTree;
let actualColor;


function setup()
{ 
  d.interfaz();
  seed      = int(99999999 * fxrand());
  angleMode(DEGREES)

  restart();
}


function restart()
{

  randomSeed(seed);
  noiseSeed(seed);

  
  
  features = 
  {
    format:        random(format),
    background:    random(colorCanvas),
    inkCol:        random(colorInk_),
    bushPalette:   random(colorGrass),
    treePalette:   random(colorFlowers),
    wallPal:       random(wallPalette),
    leaves:        random(leafType),
  }

  leavesColorsTree = features.treePalette;

  $fx.features(
    {
      "Format":         features.format.name,
      "Ink":            features.inkCol.name,
      "bushPalette":    features.bushPalette.name,
      "treePalette":    features.treePalette.name,
      "wallPalette":    features.wallPal.name,
      "Leaves":         features.leaves.name
    }
  )

 canvasType = features.format.id;

 //canvasType = 2;  
  if(canvasType == 1)
  {
    createCanvas(windowWidth,(windowWidth/ 3) * 4);
    if(height > windowHeight){
      resizeCanvas((windowHeight / 4) * 3, windowHeight)
    }
  }

  if(canvasType == 2)
  {
    createCanvas(windowWidth,windowWidth);
    if(height > windowHeight){
      resizeCanvas(windowHeight, windowHeight)
    }
  }

  if(canvasType == 3)
  {
    createCanvas(windowWidth,(windowWidth/ 4) * 3);
    if(height > windowHeight){
      resizeCanvas((windowHeight / 3) * 4, windowHeight)
    }
  }

  if(canvasType == 4)
  {
    createCanvas(windowWidth,(windowWidth/ 2) * 4);
    if(height > windowHeight){
      resizeCanvas((windowHeight / 4) * 2, windowHeight)
    }
  }


  canvasPal = features.background.hex;
  ink       = features.inkCol.hex;

  maxCanvas = height;
  pixelDensity(8);
  noLoop();
  //background(canvasPal);

  angleMode(RADIANS)
  //getPattern(ink)
  angleMode(DEGREES)
  

  /////////////////////////////////////////////////////////////////////////////////////////
  let framColor = wall();

  /////////////////////////////////////////////////////////////////////////////////////////
  let num_cubes = 100;
  let limites = [];
  let limit;
  let contador = 0;
  let caraB;
  let caraF;
  
  let frontales = [];
  let traseras = [];

  let parametros = [];
  

  for(let i=0;i<num_cubes;i++){
    let x = random()
    let y = random()
    let alto = random(height*0.1,height*0.4)
    let ancho = alto*random(1,2)
    let rot = random(-60,60)

    limit =  calculate_cube([x*width,y*height],alto,ancho,alto/4,rot)

    if(overlapping1(limit,limites)==true && limit.xmin>0 && limit.xmax<width &&
      limit.ymin>0 && limit.ymax<height){
      
      contador = contador + 1;
      caraB=create_cube_back([x*width,y*height],alto,ancho,alto/4,rot);
      traseras.push(caraB);
      limites.push(limit);
      parametros.push([x,y,alto,ancho,rot])
    }
  }



  //////////////////////////////////////////////////////////////////////////////////////
  let x = 0;
  let y = 0;
  let step = height * .07;
  let repX = 30;
  let repY = 50;
  let m = 0.07;
  let col = "#ffffff";



  push()
  stroke(ink)

  for(let i = 0; i < repY; i++){
    for(let j = 0; j < repX; j++){

      random() < .6 ? col = random(features.bushPalette.hex): col = "#ffffff"
      create_mata_filtrada([x + random(-height*m,height*m),y+ random(-height*m,height*m)],random(0.12,0.35) *maxCanvas,random(-30,30),col,maxCanvas * 0.002,maxCanvas * 0.0015,features.leaves.id,traseras)

      x += step;
    }
    x = 0; 
    y +=step;

  }
  pop()


 
//////////////////////////////////////////////////////////////////////////////
 let x1
 let y1
 let alto1
 let ancho1
 let rot1

 for(let i = 0;i<parametros.length;i++){
  x1=parametros[i][0]
  y1=parametros[i][1]
  alto1=parametros[i][2]
  ancho1=parametros[i][3]
  rot1=parametros[i][4] 
  caraF=create_cube([x1*width,y1*height],alto1,ancho1,alto1/4,rot1);
  frontales.push(caraF)
 }
 
  
 ///////////////////////////////////////////////////////////////////////////
  x = 0;
  y = 0;
  step = height * .1;
  repX = 20;
  repY = 40;
  m = 0.07;
  col = canvasPal;



  push()
  stroke(ink)

  for(let i = 0; i < repY; i++){
    for(let j = 0; j < repX; j++){
      random() < .9 ? col = random(features.bushPalette.hex): col = canvasPal;
      create_mata_flower([x + random(-height*m,height*m),y+ random(-height*m,height*m)],random(0.12,0.2) *maxCanvas,random(-30,30),col,maxCanvas * 0.002,maxCanvas * 0.0015,random([1,2,3,4,5]),frontales)

      x += step;
    }
    x = 0; 
    y +=step;

  }

  pop()


  
  
 







  d.restartInterfaz();

  fxpreview();
}


function windowResized()
{
  restart();
}


function keyPressed() {
  //--Salva la imagen en formato .PNG
  if (key === 's' || key === 'S') {
    saveCanvas(title, 'png');
  }

}





//For lefet
function diagonalLine(inkColor)
{
    let x = maxCanvas * 0.1;
    let y = maxCanvas * 0.1;
    let s = maxCanvas * 0.02;
    let n = 100;

    inkColor = hexToRgb(inkColor);
    inkColor = [inkColor.red,inkColor.green,inkColor.blue, $fx.getParam("alpha_id")]

    for(let i = 0; i < n; i++){
        push()
        stroke(inkColor);
        line(0,x,y,0)
        pop()
        x+=s;
        y+=s;
    }
}




















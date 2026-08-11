//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// drawing by AliaK 04/08/2022
//
// fierce
// the extinct fierce snake skeleton / xray
// modifications & tweaks by AliaK
//
// using p5.min.js
//
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::


document.title = "fierce";

  let fxh=fxhash;


function setup() {
  createCanvas(windowWidth, windowHeight);
//    createCanvas(1024, 1024);

  fileName = "tzHash-.jpg";
  
// unique hash
//  print('fxh = ' + fxh);

  // use fxrand once  
  ran=fxrand(); 
//  print('ran = ' + ran);
  

  // use fxrand once and calc scales of it as globals
  // see if this fixes scaling issues with main & preview images 
  ranx10i=int(ran*10);    // int
  ranx100i=int(ran*100);  // int
  ranx1000i=int(ran*1000);  // int
  randiv10f=ran/10;       // float
  randiv100f=ran/100;     // float
  

  
  // checks
  
  seed=int(ranx100i); // FXHASH seed rand
  //print('seed = ' + seed);
  
  brushSize=getBrushSize();
//  print('getBrushSize = ' + brushSize);
  
  stepSize = getStepSize();
//  print('stepSize = ' + stepSize);
  
  speciesId=getSpeciesId();
//  print('speciesId = ' + speciesId);
  
//  species=getExtinctSpecies(speciesId);
//  print('species = ' + species);
  
  penColour=getPenColour();
//  print('getPenColour = ' + penColour);

  iterations=getNumIterations(ran);
//  print('iterationsSetup = ' + iterations);
  
  modelScale=getScale();
  //print('modelScale = ' + modelScale);
  
  trNum=0;

  loopitr=5000; 
  itrc=map(penColour+ranx10i, 1, loopitr, 1, 255, 10); 
  
  pcx=map(itrc, 1, 255, 1, 155, 5);  
  pcy=map(penColour+iterations, 1, 100, 4, 255, 88); 

  x = 0;
  y = 0;
  
  col1 = color(penColour+ran*2, 43+iterations, 33+iterations);
  col2 = color(17-ranx10i, ran, 101-ranx10i);
  

  
  lerpCol = lerpColor(col1, col2, ran);  

  bCol = int(map(lerpCol, 1, 500, 10, 250, 10));  
//print('bCol = ' + bCol);

  background(ceil(ranx10i/23));
//  background(255);
//  background(lerpCol);
  
  //colorMode(HSB);
  strokeWeight(brushSize+ran+0.1);
//  noStroke();
  
  cPt = 0; // circumferencePoint of circle
//  step = 14;
  step = 3;
  
  
  
//  saveImg(fileName);

/*  
    // FX Features
  window.$fxhashFeatures = {
 "colour1" : col1,
 "colour2" : col2    
  };
*/

} // end setup()






function draw() {
//  noLoop();
  //noprotect
  
        
  for (w=1; w<5; w++){
      for (h=1; h<11; h++){

    strokeWeight(1-ran);
    stroke(col1);
    drawCircle(ranx10i, ranx10i);
        
    translate(10+w, 10+h); // reposition centre of circle
 //   strokeWeight(map(ran, 0.1, 1, 0.4, 0.7));     
    stroke(col2);
    drawCircle(seed-ranx10i, seed/2+ranx10i);
        
        
        
    } // end for h        
  } // end for w  

  
  for (w2=1; w2<(map(w2, 1, 23, 2, 7)); w2++){
    for (h2=1; h2<17; h2++){
  
    strokeWeight(ran);    
    translate(ranx10i*w2, ranx10i*h2); // reposition centre of circle
    stroke(col1*ran);
    drawCircle(ranx100i+w2, ranx100i+h2);

    strokeWeight(ran/2);
    translate(ranx10i+w2, ranx10i+h2); // reposition centre of circle
    stroke(col2*ran*ran);
    strokeWeight((map(ran, 0.1, 1, 0.3, 0.9)));
    drawCircle(ranx100i-w2, ranx100i-h2);
        

} // end for h2        
  } // end for w2 
  
  
} // end draw()





function saveImg(){
// use this one in setup() not in draw() loop
  
  saveCanvas(fxh + '_col' + penColour + '_it' + iterations + '_scl' + modelScale, 'jpg');

} // end saveImg()




function drawCircle(offsetX, offsetY) {
  
  for (i=1; i<50; i++){
     cPt = cPt + step;
     if (cPt > 360){
       cPt = cPt - 360;
     } // end if cPt
     x = offsetX +1 + cos(cPt*PI/180)*(offsetX+i+1);
     y = offsetY +1 + sin(cPt*PI/180)*(offsetY+i+1);
    
    point(x, y); // draw circumference of circle
  
    } // end for i


} // end drawCircle()






function getExtinctSpecies(value) {
  if (value < 0.03) return "bilby";
  if (value < 0.06) return "numbat";
  else return "fierce snake";
  
} // end getExtinctSpecies()





function getNumIterations(r) {
  let ni = int(map(int(round(r*100)), 0, 100, 23, 77));
  return ni;  

 } // end getNumIterations()


  


  
function getPenColour() { 
  let pc=ranx100i * 3; 
  if (pc < 2) 
    {
      pc=int(pc+23)
//      print('PenColour0 = ' + pc);
      return pc;
       
    }  
  if (pc > 200) 
    {
      pc=int(pc/3-17);
//      print('PenColour300 = ' + pc); 
      return pc;
      
    }
  else
//  print('PenColour = ' + pc);  
  return pc;

 } // end getPenColour()





function getStepSize() {
  let ss=ran;  
    if (ss < 5) 
    {
      ss=ss*10;
    }
//  print('stepSize = ' + ss);  
    return ss;

 } // end getStepSize()





function getScale() {
  let scl=ranx1000i;  
    if (scl <= 1) 
    {
      scl=scl*seed;
    } 
//  print('scale = ' + scl);  
  return scl;

 } // end getScale





function getSpeciesId() {
    let si=randiv10f;  
        if (si < 0.01) 
    {
      si=si*10;
    }
//  print('speciesId = ' + si);  
  return si;

 } // end getSpeciesId()





function getBrushSize() {
    let bs=randiv10f;
        if (bs < 0.01) 
    {
      bs=bs*10;
    }
  else
    if (bs > 1.5)
      {
        bs=map(bs, 0, 10, 0.1, 1.4);
      }
//  print('brushSize = ' + bs);  
  return bs;

 } // end getBrushSize()





function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //  background(255);
  
} // end windowResized()


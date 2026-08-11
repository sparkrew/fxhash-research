//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// grasses of the hay plain
// part of my specture series
//
// drawing by AliaK 09/01/2023
//
// using p5.min.js
//
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::


document.title = "grasses of the hay plain";

  let fxh=fxhash;




function setup() {
  createCanvas(windowWidth, windowHeight);

  runInit();

  while (counter < 172){

    evolveForm(); 
    drawFeathers(counter);
    
    counter++
    
  } // end while counter
  
  
    while (counter < 72){

    //evolveForm(); 
    //drawFeathers();
    
    push();
      translate(500, 0);
      drawFeathers(counter);
    pop();
    
    counter++
    
  } // end while counter
  
  
  
  //saveImg(fileName);

  
    // FX Features
  window.$fxhashFeatures = {
//   "colour" : penColour
  };


  
  
  
  
} // end setup()






function draw() {
 //noLoop(); 
  //  evolveForm(); 

  
  
} // end draw()





function runInit(){
  
  fileName = "tzHash-.jpg";
  
// unique hash
//  print('fxh = ' + fxh);

  // use fxrand once  
  ran=fxrand();
  //print('ran = ' + ran);

  // to use random with same seed for deterministic use
  ranInt=floor(fxrand() * 1e5);
  //print('ranInt = ' + ranInt);
  randomSeed(ranInt);
  noiseSeed(ranInt);
  
  // use fxrand once and calc scales of it as globals
  // see if this fixes scaling issues with main & preview images 
  ranx10i=int(ran*10);    // int
  ranx100i=int(ran*100);  // int
  ranx1000i=int(ran*1000);  // int
  randiv10f=ran/10;       // float
  randiv100f=ran/100;     // float
  
  
  // set & checks
  
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

  loopitr=2500;
  //loopitr=5000;
  itrc=map(penColour+ranx10i, 1, loopitr, 1, 255, 10); 
  
  pcx=map(itrc, 1, 255, 1, 155, 5);  
  pcy=map(penColour+iterations, 1, 100, 4, 255, 88); 

  x = 1;
  y = 1;
  z = 1;
  
  col1 = color(penColour, iterations, seed);
  col2 = color(penColour+23, iterations*3, seed*4);
  lerpCol = lerpColor(col1, col2, ran);  
  bCol = int(map(lerpCol, 1, 500, 10, 250, 10)); 
  //print('bCol = ' + bCol);

  background(lerpCol);
  //background(255);
  
  colorMode(RGB);
  strokeWeight(brushSize+ran+0.3);
//  noStroke();
  stroke(penColour);
  
  fill(random(penColour));

  // text won't display in webgl mode if either of these are enabled
  blendMode(SCREEN); // for WEBGL
  //blendMode(LIGHTEST); // for WEBGL
  bSize = 20+ranx10i;
  textSize(random(bSize*10));
  
  counter=1;  
  
} // end runInit()





function saveImg(){
// use this one in setup() not in draw() loop
  
  saveCanvas(fxh + '_col' + penColour + '_it' + iterations + '_scl' + modelScale, 'jpg');

} // end saveImg()






function keyPressed(){
   if (key == 's')
   { 
     saveImg();
   }
}



function evolveForm(){
  
  // Define the initial shape
  let shape = [];
  for (let sh = 0; sh < 8; sh++) { 
    shape.push(random(-100*sh+ranx10i, 100*sh+ranx10i));
  }  // for sh

  for (let sh2 = 0; sh2 < shape.length-1; sh2++) {
    shape[sh2] += random(-(random(width-20)), (random(height-20)));
  } // end for sh2
  
  push();
  beginShape(TRIANGLES);
    vertex(shape[0], shape[1], shape[2]);
    vertex(shape[3], shape[4], shape[5]);
    vertex(shape[6], shape[7], shape[8]);
    vertex(shape[9], shape[10], shape[11]);
  endShape(CLOSE);
  pop();
  
  
  push();
  translate(50+ranx100i, 10+ranx100i);
    beginShape(QUADS);
    vertex(shape[0], shape[1], shape[2]);
    vertex(shape[3], shape[4], shape[5]);
    vertex(shape[6], shape[7], shape[8]);
    vertex(shape[9], shape[10], shape[11]);
  endShape(CLOSE);
  pop();

  
} // end evolveForm()




function drawBrown(steps){
  
  let x = int(windowWidth / (steps + steps));
  let y = int(windowHeight / (steps + steps));
//  print('x = ' + x);
//  print('y = ' + y);
  
  i = 0;
  stroke(0);
  noFill();
  
  beginShape();
  for (let i=1; i < iterations; i++){  
    strokeWeight(brushSize);
    fill(penColour);
    stroke(random(10)); 
    
    vertex(x, y);
    
    x += random(-steps,steps);
    y += random(-steps,steps);
    
  } // end for  
  endShape();
  
  
} // end drawBrown()



function drawGrass(steps){
  
  let x = int(windowWidth / (steps + steps));
  let y = int(windowHeight / (steps + steps));
//  print('x = ' + x);
//  print('y = ' + y);
  
  i = 0;
  stroke(0);
  noFill();
  
  beginShape();
  for (let i=1; i < iterations; i++){  
    strokeWeight(brushSize);
    fill(penColour);
    stroke(random(10)); 
    
    vertex(x, y);
    vertex(-x, -y);
    
    x += random(-steps,steps);
    y += random(-steps,steps);
    
  } // end for  
  endShape();
  
  
} // end drawBrown()





function drawFeathers(offset){
  
  for (let i=1; i < iterations; i++){
    
    drawBrown(i);

   // translate(windowWidth/iterations-i, windowHeight/iterations+i);
    translate(windowWidth/iterations-i+offset, windowHeight/iterations+i+offset);
    colorMode(HSB);
    fill(penColour+i, penColour-i, penColour+2*i);
    
   push();
    fill(penColour-(3*i), penColour+i+23, penColour+23*i);   
    drawGrass(i);
   pop();   
   
   
  } // end for 
  
} // end drawFeathers()




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


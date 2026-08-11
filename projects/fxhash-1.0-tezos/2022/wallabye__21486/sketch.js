//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// wallabye
// part of my specture series
// 3 species of wallaby are classed as extinct in NSW, Australia
// with others listed as endangered
// via https://www.environment.nsw.gov.au/threatenedSpeciesApp
//
// drawing by AliaK 17/11/2022
// API drawing - offline API request (to keep the drawing self-contained)
//
// using p5.min.js, WEBGL
//
// using  p5.3D for 3D text - A library extending the functionality of WebGL allowing users to easily create 3D objects - via https://github.com/FreddieRa/p5.3D
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::


document.title = "wallabye";

  let fxh=fxhash;



function preload() {

  // preload font file
  fontSlimedunk = loadFont('./slimedunk.otf');
  
  
  //  JSONArray values: blockchain data from file;
  // curl https://api.tzkt.io/v1/accounts/KT1KEa8z6vWXDJrVqtMrAeDVzsvxat3kHaCE/operations |jq . >fxhop.json
// fxh gentk_v1 via https://www.fxhash.xyz/doc/fxhash/integration-guide#fxhash-contracts
    values = loadJSON('./fxhop.json');
//    print('api values = ' + values);
  
// awaken species
  mdl = loadModel('./wallabye.obj');
  
} // end preload()




function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  runInit();

  getBlockchainData();
  
  text(tzBlock, -200, -200);
   

  while (counter < 7){  
    drawSpecies();
    drawBlockchainData(); 
    counter++
  } // end while(counter)

  
 // saveImg(fileName);

/*  
    // FX Features
  window.$fxhashFeatures = {
//   "species" : species
  };
*/

} // end setup()






function draw() {
 noLoop(); 
  
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

  x = 0;
  y = 0;
  
  col1 = color(penColour, iterations, seed);
  col2 = color(penColour+23, iterations*3, seed*4);
  lerpCol = lerpColor(col1, col2, ran);  
  bCol = int(map(lerpCol, 1, 500, 10, 250, 10)); 
  //print('bCol = ' + bCol);

  //background(lerpCol);
  background(0);
  
  colorMode(RGB);
  strokeWeight(brushSize+ran+0.3);
//  noStroke();
  stroke(penColour);

  // text won't display in webgl mode if either of these are enabled
  //blendMode(SCREEN); // for WEBGL
  ////blendMode(LIGHTEST); // for WEBGL
  textFont(fontSlimedunk);
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





function drawModelFS(modelName){
  
for (let i=1; i < int(iterations+7); i++)
  {
    scale(modelScale*0.1);   
    rotateX(270+ranx100i);
    rotateY(310+ranx100i);
    rotateZ(72+ranx100i);
    stroke(20);
    model(modelName); 

   } // end for(i)

}










function drawSpecies(){
  
  startX = width / ranx100i + seed - 1;
  startY = height / ranx100i + seed - 1; 
  for (rot=0; rot<4; rot++){
    push();
      translate(startX+rot, startY+rot);
      drawModelFS(mdl);
    pop();
  } // end for rot  
 
} // end drawSpecies()






function getBlockchainData(){

for (let tzi=0; tzi <= 99; tzi++)
  {

    tzTimestamp = values[tzi].timestamp;
    //print('tzTimestamp = ' + tzTimestamp);
    
    tzType = values[tzi].type;
    //print('tzType = ' + tzType);

    tzId = values[tzi].id;
    //print('tzId = ' + tzId);
    
    tzHash = values[tzi].hash;
    //print('tzHash = ' + tzHash);
    
    tzBlock = values[tzi].block;
    //print('tzBlock = ' + tzBlock);
    
    tzGasUsed = values[tzi].gasUsed;
    //print('tzGasUsed = ' + tzGasUsed);
    
      
 } // end for(tzi)
    
} // end getBlockchainData()

  




function drawBlockchainData(){
  
  for (let itj=1; itj <= iterations; itj++)    
    {

  push();  
    textSize(ranx10i*itj*2);
    for (loop1=1; loop1<13; loop1++)
    {  
      text(tzType, random(-50+itj+loop1)*2, random(-150-itj+loop1)*2);
    } // end for loop1
  pop();

      
  push();
    fill(random(int(200/2)));
    textSize(random(ranx100i*itj*0.5));
    translate(random(-300), random(-240));
    for (loop2=1; loop2<23; loop2++)
    { 
      text(tzId, (50+itj+loop2), (50-itj+loop2+itj));
    } // end for loop2
  pop();
      

  push();
    fill(random(50));
    translate(random(-900), random(-840));
    for (loop3=1; loop3<13; loop3++){ 
      text(tzHash, (((width-itj)/itj*loop3)*ranx10i), (height*itj+loop3*itj));
    } // end for loop3
  pop();
      
      
  push();
    fill(random(172));
    translate(random(620), random(850));
    for (loop4=1; loop4<33; loop4++){ 
      text(tzBlock, ((width)*itj+loop4), (height+itj+(seed+loop4)));
    } // end for loop4
  pop();      
      
      
  push();
    translate(random(1130), random(3000));
    textSize(random(23*itj));
    rotate(ranx100i, ranx100i);
    fill(penColour*2);  
    for (loop5=1; loop5<17; loop5++){
      text(tzGasUsed, ((-width)*ranx100i+loop5), (-height-loop5));
    } // end for loop5
  pop();
     

   } // end for(itj)
  
} // end drawBlockchainData()



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



/*
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
} // end windowResized()
*/

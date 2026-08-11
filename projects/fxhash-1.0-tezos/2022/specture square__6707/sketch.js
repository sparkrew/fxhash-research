// drawing by AliaK 12/01/2022
// using p5.min.js
// using  p5.3D - A library extending the functionality of WebGL allowing users to easily create 3D objects - via https://github.com/FreddieRa/p5.3D
//
//       var fxhash = "oo" + Array(49).fill(0).map(_=>alphabet[(Math.random()*alphabet.length)|0]).join('')
//

document.title = "specture square";

  let fxh=fxhash;


function setup() {

    createCanvas(900, 900, WEBGL);
//    createCanvas(windowWidth, windowHeight, WEBGL);
//    createCanvas(windowWidth, windowHeight);

//    background(255);  // for black & white background viewing
  
  

//  print('fxh = ' + fxh);
  
  ran=fxrand(); 
//  print('ran = ' + ran);
  
  seed=int(fxrand()*100); // FXHASH seed rand
//  print('seed = ' + seed);
  
  stepSize = getStepSize();
//  print('stepSize = ' + stepSize);
  
  speciesId=getSpeciesId();
//  print('speciesId = ' + speciesId);
  
  species=getExtinctSpecies(speciesId);
//  print('species = ' + species);
  
  penColour=getPenColour();
//  print('getPenColour = ' + penColour);

  iterations=getNumIterations();
//  print('iterationsSetup = ' + iterations);
  
  modelScale=getScale();
//  print('modelScale = ' + modelScale);
  
  // FX Features
  window.$fxhashFeatures = {
 "iterations" : iterations,
 "extinct species" : species, 
 "scale" : modelScale, 
 "colour set" : penColour,    
  };

  

  
} // end setup



function draw() {
  
  let col1 = color(penColour+23+iterations+10, modelScale-23+iterations, 32+iterations);
  let col2 = color(modelScale+123+iterations, penColour+23-iterations+10, 132+iterations);
  lerpCol=lerpColor(col1, col2, ran);
  fill(lerpCol);

 
    background(col1);  // 255 for white background (black text) viewing

  

  
//  normalMaterial();
  
//  draw3Dtext(5, 23, 23, 0, fxh, 4, windowWidth/300, 70, false, "Georgia", NORMAL);
  draw3Dtext(23, iterations, modelScale, penColour, fxh, 4, windowWidth/225, penColour, false, "Georgia", NORMAL);   
  
  
  fill(lerpCol);
  
//  draw3Dtext(10, 23, 23, 0, "bilby", 2, windowWidth/500, 40, true, "Georgia", NORMAL);
    draw3Dtext(10, iterations, penColour, modelScale, species, 6, windowWidth/150, modelScale, true, "Georgia", NORMAL); 

  
  fill(col2);
  
  draw3Dtext(iterations, modelScale, modelScale, iterations, fxh, 4, windowWidth/150, penColour, true, "Georgia", NORMAL);

      fill(col1);
  
  draw3Dtext(iterations, iterations, modelScale, modelScale, fxh, 5, windowWidth/300, modelScale, true, "Georgia", NORMAL);
  
    //word = new Word3D(w, 4, windowWidth/250, 70, false, "Georgia", NORMAL);
  
//  noLoop();
  
//  saveImg();

  fxpreview();  
  noLoop();
  
} // end draw




function draw3Dtext(scl, rx, ry, rz, w, th, unit, cs, bev, f, st)
{


// help info

/*  
  word = new Word3D(
  	"P5.3D",       // The actual character that you want to draw (anything that can be passed into "text()")
  	4,             // How thick the 3D rendered letter is (i.e. how many cube pixels of size "size" it is on z-axis)  
  	width/200,     // The size of a unit "box()" making up part of the letter  
  	50,            // The size of the canvas it renders the letter on (higher is more detailed, 30-40 is a good range)  
  	true,          // [OPTIONAL, default = true] Gives the bevelled, embossed 3D look (as seen in screenshot)  
  	"Arial",     // [OPTIONAL, default = "Georgia"] Gives the font uses, can be any default ones or anything added  
  	BOLD           // [OPTIONAL, default = BOLD] Gives the chosen style out of BOLD, NORMAL, ITALIC  
	);
*/

  scale(scl);
  rotateX(rx);
  rotateY(ry);
  rotateZ(rz);
  word = new Word3D(w, th, unit, cs, bev, f, st);
  
  wordDisplay = word.show();
  return wordDisplay;

}





function saveImg(){
  
  saveCanvas(fxh + '_' + penColour + '_' + iterations + '_' + modelScale + '_' + species, 'jpg');
}


function getExtinctSpecies(value) {
  if (value < 0.03) return "bilby";
  if (value < 0.06) return "numbat";
  else return "black throated finch";
}



function getNumIterations() {
  let ni = round(ran*ran*100); 
    if (ni===0) 
    {
//      print('Iterations2 = ' + ni); 
      return int(23*(ran*10)+23);
    }
    if (ni<3) 
    {
//      print('Iterations3 = ' + ni); 
      return 23;
    }  
    if (ni<10) 
    {
//      print('Iterations17 = ' + ni); 
      return int(ni+(ran*10*2));
    }
    if (ni>50) 
    {
//      print('Iterations50 = ' + ni); 
      return int(ni/2);
    }
    else
    {
//      print('numIterationsNI = ' + ni); 
      return ni;
    }  

 }


  
  
function getPenColour() {
  let pc=int(fxrand() * 100); 
  if (pc < 2) 
    {
      pc=int(pc+23)
//      print('PenColour0 = ' + pc);
      return pc;
       
    }  
  if (pc > 200) 
    {
      pc=int(pc/3);
//      print('PenColour300 = ' + pc); 
      return pc;
      
    }
  else
//  print('PenColour = ' + pc);  
  return pc;

 }


function getStepSize() {
  let ss=fxrand();
    if (ss < 0.01) 
    {
      ss=ss*10;
    }
//  print('stepSize = ' + ss);  
  return ss;

 }


function getScale() {
  let scl=int(fxrand()*100);
    if (scl < 0.01) 
    {
      scl=scl+10+23;
    }
    if (scl === 1) 
    {
      scl=scl+40;
    }  
//  print('stepSize = ' + scl);  
  return scl;

 }


function getSpeciesId() {
  let si=fxrand()/10;
        if (si < 0.01) 
    {
      si=si*10;
    }
//  print('speciesId = ' + si);  
  return si;

 }



function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
  resizeCanvas(900, 900);
  background(255); // keep this value for fullscreen mode
  
}

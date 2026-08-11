// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }

// this code writes the values to the DOM as an example
//color(fxrand()*255,fxrand()*255,fxrand()*255);

/**isso dentro do setup para features
 * 
window.$fxhashFeatures = {
    "LOVE": red(c2),
    "PEACE": blue(c3),
    "ROYALTY": green(c5),
    "SPIRITUALITY": blue(c1),
    "HEALING": blue(c6),
    };


**/
//randomSeed(fxrand()*1000);

/**function randY(){
  ry1=.1+fxrand()*.2;
  ry2=.1+fxrand()*.9;
  ry3=.01+fxrand()*.6;
  ry4=.5+fxrand()*4;
  ry5=4+fxrand()*8;
  c1 = color(fxrand()*255,fxrand()*255,fxrand()*255);
  c2 = color(fxrand()*255,fxrand()*255,fxrand()*255);
  c3 = color(fxrand()*255,fxrand()*255,fxrand()*255);
  c4 = color(fxrand()*255,fxrand()*255,fxrand()*255,50+fxrand()*150); 
  c5 = color(fxrand()*255,fxrand()*255,fxrand()*255,50+fxrand()*150);
  c6 = color(fxrand()*255,fxrand()*255,fxrand()*255,50+fxrand()*150);
      
      na=random(2,130);
      sinmod=sin(fxrand()*(TWO_PI));
      sinmod2=sin(fxrand()*(TWO_PI));
      sinmod3=sin(fxrand()*(TWO_PI));
      sinmod4=sin(fxrand()*(TWO_PI));
}

**/


let bgcor;
let spcor;


let paleta,paletanome;

let tamL, tamA, tamP,margem;

function doNum(){
  let tamLt = fxrand();
  tamL=round(width/map(tamLt,0,1,3,10));
  paleta=round(fxrand()*3);
  //paleta=3;
  if (paleta==1){
    //blendMode(HARD_LIGHT);
    paletanome = "black olive";
    bg=[33, 34, 0];
spcor=[254, 255, 184];


    
  }
  
  if (paleta==2){
    paletanome = "blue panties";
    bg=[14, 70, 86]; 
    spcor=[214, 239, 245]; //quadrado direita
    
    
  }
  
  if (paleta==0){
    paletanome = "red wine";
    spcor=[242, 183, 205]; 
     //quadrado direita
    bg=[90, 0, 33]; 
  
    
  }
  
  if (paleta==3){
    paletanome = "greyish green";
    spcor=[236, 241, 206]; 
     //quadrado direita
    bg=[88, 114, 99]; 
  
    
  }
  
  
}




function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //background(100);
  
  margem=width*0.08;
  
  noLoop();
  doNum();
  window.$fxhashFeatures = {
    "color palete": paletanome,
    "size": tamL,
    };
  
}
let ry;
//sine no tamanho com angulo inicial diferente randomico
function draw() {
  
  background(bg[0],bg[1],bg[2]);

  
  
  //material
  stroke(spcor[0],spcor[1],spcor[2]);
  
  noFill();
  push();
  let angy = fxrand();
  rotateY(map(angy,0,1,PI*0.015*-1,PI*0.015));
  for (let x=margem;x<width-margem;x+=tamL){
    for (let y=height*0.15;y<height-margem;y+=tamL*1.2){
      for (let z=height*0.15;z<height-margem;z+=tamL*1.2){
    push();
    translate(x-width/2,y-height/2,z-height);
    box(tamL/2+fxrand()*(tamL),tamL/2+fxrand()*(tamL),tamL/2+fxrand()*(tamL));
    pop();
      }
    }
  }
  pop();
}

windowResized = function() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
  //background(237,237,211);
}



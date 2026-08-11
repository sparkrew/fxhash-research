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
//Charles Green Shaw Sunrise

let tam, ang;
let tamC, wr1,hr1, wr2,hr2,pxr1,pxr2,pcx,pyr1,pyr2,pcy,angi,angf;
let paleta, paletanome;
let bg, fr1, cr1, fr2, cr2, fr3, cr3, fc, corc,loops;

function doNum(){
  tamC=width*3 *fxrand();
  pcx = width/2+(width/4*-1)+fxrand()*width/2;

  pcy=height/2+(height/4*-1)+fxrand()*height/2;
  angi=fxrand()*(TWO_PI);  
  angf=angi+fxrand()*(TWO_PI);
  
  
  tamr1 = width/4+fxrand()*width;
  wr1=fxrand()*(width*3);
  hr1=fxrand()*(height*3);
  pxr1=0+fxrand()*(width);
  pyr1=height-hr1;
  
  tamr2 = fxrand()*width*4;
  wr2=fxrand()*(width*4);
  hr2=wr2;
  let tpxr2 = fxrand();
  pxr2=width/2+map(tpxr2,0,1,width/2*-1,width/2);;
  pyr2=0;
  
  //ellipse
  tamr3 = width/4+fxrand()*width-width/4;
  wr3=width/5+fxrand()*width;
  hr3=height/5+fxrand()*height;
  let tpxr3 = fxrand();
  pxr3=width/2+map(tpxr3,0,1,width/4*-1,width/4);
  let tpyr3 = fxrand();
  pyr3=height/3+map(tpyr3,0,1,height/5*-1,height/5);
  
  
  //paleta=4;
  if (paleta==1){
    //blendMode(HARD_LIGHT);
    paletanome = "Artic Grey";
    bg=[129, 133, 137]; 
    fr1=[160, 160, 125]; //quadrado direita
    cr1=[195, 195, 174]; 
    //retangulo direita
    fr2=[129, 133, 137]; 
    cr2=[83, 94, 104]; 
    //fr3=[33, 0, 114,120];
    //retangulo fundo
    cr3=[83, 94, 104];
    //circulo
    fc=[195, 182, 174]; 
    corc=[249, 249, 213];
    
  }
  
  if (paleta==0){
    paletanome = "Truta Selvagem";
    //blendMode(BLEND);
    blendMode(SUBTRACT);
    bg=[99, 71, 77]; 
    fr1=[214, 161, 132]; //quadrado direita
    cr1=[255, 245, 107]; 
    //retangulo esquerda
    fr2=[255, 166, 134]; 
    cr2=[23, 146, 129,100]; 
    //fr3=[33, 0, 114,120];
    //retangulo fundo
    cr3=[170, 118, 124,150];
    //circulo
    fc=[254, 193, 150]; 
    corc=[255, 231, 163];
    
  }
  
  if (paleta==2){
    paletanome = "Blue Sun";
    blendMode(SUBTRACT);
    bg=[191, 204, 177]; 
    fr1=[98, 191, 144]; //quadrado direita
    cr1=[145, 138, 153]; 
    //retangulo esquerda
    fr2=[116, 125, 120]; 
    cr2=[206, 222, 213]; 
    //fr3=[33, 0, 114,120];
    //retangulo fundo
    cr3=[184, 121, 70];
    //circulo
    fc=[214, 255, 246]; 
    corc=[35, 116, 171];
    
  }

  if (paleta==3){
    paletanome = "Pink Velvet";
    blendMode(SUBTRACT);
    bg=[105, 184, 139]; 
    fr1=[131, 242, 179]; //quadrado direita
    cr1=[145, 138, 153]; 
    //retangulo esquerda
    fr2=[237, 50, 156]; 
    cr2=[206, 222, 213]; 
    //fr3=[33, 0, 114,120];
    //retangulo fundo
    cr3=[131, 242, 179];
    //circulo
    fc=[114, 50, 199]; 
    corc=[131, 242, 179];
    
  }

  if (paleta==4){
    paletanome = "Fruta do Conde";
    //blendMode(SUBTRACT);
    bg=[173, 79, 176]; 
    fr1=[222, 14, 230]; //quadrado direita
    cr1=[106, 189, 186]; 
    //retangulo esquerda
    fr2=[249, 146, 252]; 
    cr2=[206, 222, 213]; 
    //fr3=[33, 0, 114,120];
    //retangulo fundo
    cr3=[34, 22, 94];
    //circulo
    fc=[6, 191, 185]; 
    corc=[222, 14, 230];
    
  }
  
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();
  paleta=round(fxrand()*4);
  doNum();
    window.$fxhashFeatures = {
    "PALETA NAME": paletanome,
    };
}

function draw() {
  background(bg[0], bg[1], bg[2]);
  //blendMode(MULTIPLY);
  //blendMode(EXCLUSION);
  for(let i =0;i<1+round(fxrand()*10);i++){
    doNum();
  fill(fr1[0], fr1[1], fr1[2],fr1[3]);
  rect(pxr1,pyr1,wr1,hr1);
  
  fill(fc[0], fc[1], fc[2],fc[3]);

  arc(pcx, pcy,tamC, tamC,angi,angf);
  
  fill(fr2[0], fr2[1], fr2[2],fr2[3]);
  rect(pxr2,pyr2,wr2,hr2);
  
  
  for (let i=0;i<65000;i++){
    //noise texture
    ang=angi+fxrand()*angf-angi;
    push();
    //lado esquerdo fundo
    fill(cr3[0], cr3[1], cr3[2],cr3[3]);
    ellipse(pxr3+fxrand()*(wr3),pyr3+fxrand()*(hr1),5,5);
    
    //lado direito rect
    fill(cr2[0], cr2[1], cr2[2],cr2[3]);
    ellipse(pxr1+fxrand()*(wr1),pyr1+fxrand()*(hr1),4,4);
    
    //elipse
    tam=fxrand()*(tamC);
    //rotate(PI);
    fill(corc[0], corc[1],corc[2]);
    ellipse(pcx+tam/2*cos(ang),pcy+tam/2*sin(ang),3,3);
    

    //quadrado
    fill(cr1[0], cr1[1],cr1[2]);
    ellipse(pxr2+fxrand()*(wr2),pyr2+fxrand()*(hr2),3,3);
    pop();
  }
  }
}

windowResized = function() {
  resizeCanvas(windowWidth, windowHeight);
  clear();
  redraw();
  //background(237,237,211);
}



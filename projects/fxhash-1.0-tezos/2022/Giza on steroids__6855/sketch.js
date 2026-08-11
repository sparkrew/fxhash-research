var distSerra = 6;
var egiptos =[];


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


function preload() {
  rnd = map(fxrand(), 0, 1, 0, 10000);
  noiseSeed(rnd);
  randomSeed(rnd);
}


function preload() {
  for (im=0;im<10;im++){
    egiptos[im] = loadImage('./assets/egypt-' + im + '.png');
  }
}

function back () {
  colorMode (HSB);
    s1 = random (200,230);
    s2 = random (30,50);
    s3 = random (20,40);
    fill (s1,s2,s3);
  noStroke();
  aux1=(height/2) + height/6;
  rect (0,0,width,aux1);
  
}

function areia (npontos) {
  //altura = (height/2) - (height/2)*0.1;
  altura = (height/2) + (height/6);
  for (pontos = 0; pontos < npontos; pontos++ ){
        colorMode (HSB);
    s1 = random (0,50);
    s2 = random (30,50);
    s3 = random (64,100);
    stroke (s1,s2,s3);
    x=random (0, width);
    y=random (0,altura);
       point (x,y); 
  }
  noStroke();
  //triangle (0,height,width,height,width,height/2);
}


function relogio(){
  xInicial =random (width*0.5, width*0.7);
  yInicial =random (height*0.2,height*0.3);
  aRel = random (height*0.55,height*0.75);
  lRel = random (width*0.1,width*0.11);
  stroke(0);
  strokeWeight(1);
  //rectMode (CORNERS);
  rect (xInicial,yInicial,lRel,aRel);
  //fill (0,0,0);
  quad (xInicial+lRel,yInicial,xInicial+lRel+lRel*0.2,yInicial+lRel*0.2,xInicial+lRel+lRel*0.2,yInicial+aRel-lRel*0.2,xInicial+lRel,yInicial+aRel);
  //fill (255,0,0);
  circle(xInicial+lRel/2,yInicial+aRel*0.1,lRel*0.8);
  
}


function nuvens (){
  //definir numero de nuvens
  //definir numero de linhas
  //definir onde desenhar
  //desenhar
    stroke (0);
    strokeWeight (2);
    colorMode (HSB);
    s1 = random (330,333);
    s2 = random (0,12);
    s3 = random (80,100);
    stroke (s1,s2,s3);
  
  nuvensRand = random (27,35);
  g = random (0,10);
 for (n = 0; n < nuvensRand; n++){
  linhasRand = random (3,20);
  pontoixRand = random (1,width*0.9);
  pontoiyRand = random (0,height*0.2);
   
 for (l = 0; l < linhasRand; l++) {
    g = random (-15,15); 
    xn = pontoixRand + g;
    yn = pontoiyRand - g;
    line (pontoixRand, pontoiyRand, xn, yn );
    pontoixRand = pontoixRand +4;
    //pontoiyRand = pontoiyRand -4;
  }
 }
}



function setup() {
  createCanvas(600, 600);
  //var altMinima = (height/2) - (height/2)*0.1;
}

function draw() {
  //onde podem começar e terminar as linhas de serra
  var altMinima = (height/2) + (height/6);
  var altMaxima = (height/2) - (height/2)*0.5;
  
  var sd = random (0,1);
  
  noLoop();

  colorMode(HSB);
  stroke(37,42,94);
  strokeWeight(2);
  for (f=0;f<width;f = f+1){
    line (0,height - f*4, width,height - f*4);
  }

  //background(239,200,139);
  back ();
  nuvens ();
  strokeWeight (1);
  stroke (255,0,0);
  // define a coordenada y da primeira linha
  var y = random (altMinima,altMaxima);
  y1 = y;
  
  for (j=0; j < width; j = j){
    //y1 = y;
    sd = random (0,1);
    colorMode (HSB);
    s1 = random (23,25);
    s2 = random (60,80);
    s3 = random (40,90);
    stroke (s1,s2,s3);
    
    if (sd > 0.5){ 
      var varAltura1 = random (10,15);
      for (i=1; i < varAltura1 && y1 < altMinima*0.9  ; i++){
        line (i*3+j,altMinima, i*3+j, y1);
        y1 = y1 + 4;
      }
      j = j + i*3-3;
    }
    
    if (sd < 0.5) { 
      var varAltura2 = random (10,15);
      for (i=1; i < varAltura2 && y1 > altMaxima*0.9  ; i++){
        line (i*3+j,altMinima, i*3+j, y1);
        y1 = y1 - 4;
      }
      j = j + i*3-3;
    }   
    
    //else if (sd >0.33 && sd<0.66){
    //  var varAltura3 = random (5,15);
    //  for (i=1; i < varAltura3; i++){
    //    //line (i*3+j,altMinima, i*3+j, y1);
    //  }
    //  j = j + i*3-3;
   // }
    
  }
  //back ();
  stroke (0);
  strokeWeight(1);
  //line (0,height, width,height/2);
  strokeWeight(1);
  stroke (0,0,0);
  //relogio ();
  areia (5000);
  strokeWeight(1);
  
  stroke(29,54,84);
  //for (d=0;d<60;d++){
  //line (0+d*10,height, width,height-d*10);
  //}
  for (e=0;e<500;e++){
    line (width,0, e*15,height - height+e*5);
  }
  //stroke(21,22,47);
  //for (f=0;f<100;f = f+1){
  //  line (0,height - f*2, width,height - f*2);
  //}

  stroke (37,42,94);
  fill (25,78,47);
  ellipse (width*0.2,height*0.83,width*0.2, width*0.2);
  var t = floor (random (0,10));
  var t1 = egiptos[t];
  t1.resize(75, 75);
  image(t1,width*0.14,height*0.76,);

}

  


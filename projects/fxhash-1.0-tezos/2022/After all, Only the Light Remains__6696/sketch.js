// Fxhash Function by Cassio Dezotti//
// a fork by polisphere by TAKU SAKU
//CreativeCommons Attribution ShareAlike //https://creativecommons.org/licenses/by-sa/4.0/


  var tk1 =0; 
  var tk2  =0;
  var tk3 =0;
  var tk4=0;


let x = [];
let y = [];
let z = [];

let a;
let b;
let sc;

function setup() {
  
  print(fxhash[3])
  
   for(var x = 0; x < fxhash.length; x++){
    if(x<13){
      tk1 += unchar(fxhash[x]); 
    }
    if (x>13 && x < 27){
      tk2 += unchar(fxhash[x]);
    }
    if (x>27 && x < 40){
      tk3 += unchar(fxhash[x]);
    }
    if (x>40 ){
      tk4 += unchar(fxhash[x]);
    }
  }
  tk1 = map (tk1,850,1000,150,300);
  tk2 = map (tk2,900,9000,1,90);
  tk3 = map (tk3,850,8000,150,3000);
  tk4 = map (tk4,900,9000,0,80);
  print(tk1,tk2,tk3,tk4); 
 
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB)
  pixelDensity(5.0);
  
  stroke(255);
  strokeWeight(0.2);
  
  a = (0,tk2,tk3) * PI/tk4;
  b = (tk4,tk2) * PI;
}

function draw() 

{
  background(0);
  
  rotateX(PI/tk2);
  rotateZ(-frameCount*PI/40);

  for (let i=1;i<tk1*tk2;i++) {
    sc = min(width, height) / 2.7;

    x[i] = sc * (cos(i*b) * cos(i*a));
    y[i] = sc * (cos(i*b) * sin(i*a));
    z[i] = sc * (sin(i*b));
    
    if(i>0){
     stroke(y[i]*.30%tk3, tk3/tk2%tk3, 250);
      line(x[i-1], y[i-1], z[i-1], x[i], y[i], z[i]);
    }
  }



}
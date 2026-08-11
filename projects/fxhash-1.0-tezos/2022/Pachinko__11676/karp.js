// these are the variables you can use as inputs to your algorithms

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


// this code writes the values to the DOM as an example
/* const container = document.createElement("div")
container.innerText = `
  random hash: ${fxhash}\n
  some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]\n
`
document.body.prepend(container)
 */
//var angle = 2.0 * fxrand() * 180;
var offset = 400;
var scalar = 2.5 * fxrand();
lock =false;
var sty = fxrand() * 50;
var ep = 1;
var ss = fxrand();

//var nb=10*fxrand();
let sens=true;


var a=0;

var tye = fxrand();

if ( tye<0.2)
{seed=3;}
else if ( tye<0.4)
{seed=13;}
else if ( tye<0.6)
{seed=23;}
else if ( tye<0.8)
{seed=53;}
else 
{seed=103;}

var tyre = fxrand();

if ( tyre<0.2)
{see=2;}
else if ( tyre<0.4)
{see=10;}
else if ( tyre<0.6)
{see=20;}
else if ( tyre<0.8)
{see=30;}
else 
{see=60;}
var nb=seed*fxrand()+3;
//nb=3;


var n =2*nb+1;
var speed = n/(500);

var col=74.26*fxrand();
var rou=20*see+50 ;
 
console.log('couleur', col, 'graine', seed,'taille', rou, 'finesse', see);
function setup() {

  createCanvas(windowWidth, windowHeight);
 //render();
  //noStroke();
  //redraw();
  //noLoop();
  frameRate(60);
  background(0);
  //colorMode(HSB, 360, 100, 100);Y
  ra=height/2;
  ta=width/2;
  type=1;
 blend=[BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY, EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN, ADD, REMOVE]
 

 nblend=3;
 nnblend=3 ;


angle=[];

angke=[];
va = 1;



for (let i = 0; i <nb-1; i++)
  {

   angle[i]=(PI / 6 + i*PI /nb);
   angke[i]=(-PI / 6 + (i+1)*PI /nb);
  }
}



function keyTyped( ) {
  if (key === 'c' )
  { clear();
    lock =false;
    a=0;
    loop();
    speed = n/(500);
    
    a=0;

    
  }
  if ( key === 'p')
  {
  if ( lock == false) 
    {
     noLoop();
     lock =true;
     
     dev=(mouseX+mouseY)/200;
    }
   
    else {loop();
    
    //clear();
     lock =false;}
   }

   if (key === '3' )
   {type=100;}
 if (key === '1' )
   {type=1;}
 if (key === '2' )
   {type=10;
 
 }
 if (key === '4' )
   {type=100;}
 if (key === '5' )
   {type=1000;}
 if (key === '6' )
   {type=10000;
 
 }
 if (key === 'm' )
 {if(nblend<14){nblend= nblend+1;}
 else {nblend=0;}




}
    }
    
 



function draw() {

  ta= 0.1;
 translate(width/2,height/2);

 ra=height  ;
 ta=width/10;
 blendMode(blend[nblend]);
  

  //for (let a = 0; a < n+1; a=a+0.01) {
   
    i=floor(a)+3;
    j=floor(a)+2;
      if (i % 2 == 0) {

        x = -ra * (a - (i - 3)) * cos(angle[i/2-1]);
        y = -ra * (a - (i - 3)) * sin(angle[i/2-1]) - 1;
      }

      else {
        blendMode(blend[nblend]);
        x = -ra * (i - 2 - a) * cos(angle[(i - 1)/2-1]);
        y = -ra* (i - 2 - a) * sin(angle[(i - 1)/2-1]) - 1;
      }
     
      if (j % 2 == 0) {
        blendMode(blend[nnblend]);
       
        xk = -ra * (a - (j - 2)) * cos(angke[j/2-1]);
        yk =- ra * (a - (j - 2)) * sin(angke[j/2-1]) - 1;
      }

      else {
        xk =- ra * (j - 1 - a) * cos(angke[(j - 1)/2-1]);
        yk = -ra* (j - 1- a) * sin(angke[(j - 1)/2-1]) - 1;
      }
    

     

speed+=0.000001*type;
//rotate(0.05*a) ;
if (sens==true){
a+=speed;
//rou-=10;
}
else {a-=speed;
}
//console.log(a);



if (a>n/2+1)
{
  //noLoop(); 
sens = false;
       }
       if (a<0)
{
    noLoop(); 
sens = true;
       }
     //blendMode(blend[nblend]);
     //blendMode(blend[nnblend]);
     console.log(blend[nblend]);
     //nblend=floor(15*fxrand());
     //nnblend=floor(15*fxrand());
     
      
      noFill();
      //strokeWeight(fxrand()*10*noise(x,y));
      strokeWeight(rou*noise(a));
      strokeCap(SQUARE);
      strokeCap(ROUND);
      //stroke(noise(x,y)*255*fxrand(),noise(xk,yk)*255*fxrand(),noise(x,y)*55*a/n);
      //stroke(noise(x,y)*col,noise(xk,yk)*col,noise(a)*255*a/n);
      //stroke(noise(x,y)*col,noise(xk,yk)*col,noise(a)*255*(n-a)/n);
      colorMode(HSB);
//
      if ( col<190){
        stroke(noise(x,y)*col,noise(xk,yk)*col,noise(a)*255*(n-a)/n);
      }
      else if (col<220){
        stroke(noise(x,y)*col,noise(xk,yk)*col,noise(a)*255*a/n);

      }
     else {
        stroke(noise(x)*155*fxrand()*(n-a)/n);
      }
 
      Bez(x,y,xk,yk ,8);
    


}



function Bezar(x,y,xk,yk) {
  bezier(x,y,fxrand()*width/2-width/2,fxrand()*height/2-height/2,fxrand()*width/2-width/2,fxrand()*height/2-height/2,xk,yk);
  bezier(x,-y,fxrand()*width/2-width/2,fxrand()*height/2-height/2,fxrand()*width/2-width/2,fxrand()*height/2-height/2,xk,-yk);
  bezier(-x,y,fxrand()*width/2-width/2,fxrand()*height/2-height/2,fxrand()*width/2-width/2,fxrand()*height/2-height/2,-xk,yk);
  bezier(-x,-y,fxrand()*width/2-width/2,fxrand()*height/2-height/2,fxrand()*width/2-width/2,fxrand()*height/2-height/2,-xk,-yk);
}



function Bez(x,y,xk,yk,v) {


    bezier(x,y,x,height/v,x,-height/v,xk,yk);
    bezier(x,-y,x,-height/v,x,+height/v,xk,-yk);
    bezier(-x,y,-x,height/v,-x,-height/v,-xk,yk);
    bezier(-x,-y,-x,-height/v,-x,+height/v,-xk,-yk);
    
    if ((x+y+xk+yk)/4>1)
  {
    //rotate(135);
    Bez(x/2,y/2,xk/2,yk/2,v*1.5);
  }


}



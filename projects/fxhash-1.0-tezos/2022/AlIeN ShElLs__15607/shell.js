

function setup() {
 createCanvas(windowWidth, windowHeight);
  //noLoop();
  //initialize variables
  r     = windowHeight/5.5;
  angle = 0;
  n = 2000*fxrand() ;
  step  = TWO_PI*(1/n); //in radians equivalent of 360/6 in degrees
  //tab = floor(2000*fxrand());
  tab= 100*fxrand()+50  ;
   dev = fxrand();
   lock = false ; 

spike = fxrand();	 
ep=fxrand()*500;  
  
}


function draw() {

	
  translate(width/2, height/2);
  
  for (i=0 ; i<n ; i++ ) {

	 
	 if ( spike<0.5) { 
	var x = r * sin(angle);
	var y = r * cos(angle);  
	 }
	 else {
	var x = r*spike* sin(angle);
	var y = r*spike* cos(angle);  
	 }
  //draw ellipse at every x,y point
	//ellipse(x, y, i);
  strokeWeight(ep/500*noise(i));
	stroke(i/(n)*255*noise(i));
	mul = (i*tab) % n ;
	//line(x,y,r*fxrand()* sin(mul*step),r * cos(mul*step));
	fill(1,1);
	//blendMode(LIGHTEST);
	bezier(x*sin(angle),y*sin(angle),2*r* sin(mul*step/2)*dev,2*r * cos(mul*step/2)*2*dev,0.5*r*sin(mul*step)*2*dev,0.5*r * cos(mul*step)*dev,r* sin(mul*step)+x,y+r * cos(mul*step));
 	//blendMode(LIGHTEST); 
  //stroke((n-i)/(n)*255*noise(n-i));
  strokeWeight(ep/1000*noise(i));
  Stellar(x*sin(angle),y*sin(angle),r* sin(mul*step)+x,y+r * cos(mul*step));
//Stellap(x*sin(angle),y*sin(angle),r* sin(mul*step)+x,y+r * cos(mul*step));

//drawTarget(x*sin(angle),y*sin(angle),mul*i,mul*step ); 


	angle = angle + step;
	//rotate(PI);
	
   }
}



function keyTyped( ) {
    if (key === 'c' )
    { clear();
      lock =false;
      i=0;
      loop();
    }
    if ( key === 'p')
    {
    if ( lock == false) 
      {
       noLoop();
       lock =true;
       
      }
     
      else {loop();
      x = 0;
       y = 0;
      //clear();
       lock =false;}
     }
  
    }





function Stellar(a,b,c,d) {
  // nblend=floor(15*fxrand());
  // nnblend=floor(15*fxrand());

  line(a,b,c,d);
  line(a,-b,c,-d);
  line(-a,b,-c,d);
  line(-a,-b,-c,-d);
  if ((a+b+c+d)/4>10)
  {
    //rotate((a+b+c+d));
    Stellar(a/2,b/2,c/2,d/2);
  }
}


function Bezar(x,y,xk,yk) {
  bezier(x,y,fxrand()*width/2-width/2,fxrand()*height/2-height/2,fxrand()*width/2-width/2,fxrand()*height/2-height/2,xk,yk);
  bezier(x,-y,fxrand()*width/2-width/2,fxrand()*height/2-height/2,fxrand()*width/2-width/2,fxrand()*height/2-height/2,xk,-yk);
  bezier(-x,y,fxrand()*width/2-width/2,fxrand()*height/2-height/2,fxrand()*width/2-width/2,fxrand()*height/2-height/2,-xk,yk);
  bezier(-x,-y,fxrand()*width/2-width/2,fxrand()*height/2-height/2,fxrand()*width/2-width/2,fxrand()*height/2-height/2,-xk,-yk);
}





 inc=counter=seed=Math.round(fxrand()*100000000000); 

 //jump=Math.ceil(4*fxrand())+2;
 jump=3;
 trail=	55;
 disp=1;
 sl=fxrand()*2;
 sw=0.1;
 amin=60;
 amax=160;
 angle=4500;

function setup(){
sz=Math.min(windowWidth,windowHeight);
margin=sz/10;
createCanvas(sz,sz);
randomSeed(seed);
colorMode(HSB,255,255,255,255);
background(255, 0, 0, 255);

}
 xprev=0;
 yprev=0;
 xprev2=0;
 yprev2=0;
 x2=0;
 y2=0;
 x3=0; 
 y3=0;
 dispx=0;
 dispy=0;
 
 hi=Math.round(fxrand()*255);
 si=0;
 bi=255;
 

function initNewStroke( x1, y1,  x4, y4) {
   maxStrokeLength = sqrt(pow((x4-x1),2) + pow((y4-y1),2));
   sLength = (randomGaussian() * maxStrokeLength*sl );
  if(x2 == 0){  
    x2 = x1 + random(-sLength, sLength);
    y2 = y1 + random(-sLength, sLength);
  }else{
    x2=x1-dispx;
    y2=y1-dispy;
  }
  dispx=random(-sLength, sLength);
  dispy=random(-sLength, sLength);  
  x3 = x1 +dispx;
  y3 = y1 + dispy;  
	
  bezier(x1, y1, x2, y2, x3, y3, x4, y4); 
  //noFill();

}
ang=0;
function draw(){

	
		
	ang++;
	angle=angle+cos(radians(counter))/5;
	angle= (angle>amax)? amax: angle;
	angle= (angle<amin)? amin: angle;
	
	hi=hi+cos(radians(counter));
	hi= (hi>255)? 255: hi;
	hi= (hi<0)? 0: hi;
	

	
	fill(0,0,0,trail);
noStroke();
rect(0,0,sz,sz);
strokeWeight(sw);
noFill();


for(  r= margin; r<sz-margin; r=r+jump){
    
  for ( i=ang; i<(360+ang); i=i+angle){
      bi=255*sin(radians(i));
      if (bi>255){bi=0};
   x= (sz)/2+sin(radians(i+counter))*((sz)-2*margin)/2 ;
   y= (sz)/2+cos(radians(i+counter))*((sz)-2*margin)/2  ; 
  	if(xprev==0){
    xprev=(sz)/2+sin(radians(360))*(r+angle);
    yprev=margin ; 
  	}
   
   //h=fxrand()*hi+25*sin(radians(i+r/jump));
   
   h=hi;
   s=si;
   b=bi;
   a=195+100*sin(radians(i+r/jump))-r/4;
   stroke(h,s,b,a) ;
   // stroke (h,s,255,a);
    if(r==margin){
      stroke(0,0);
    }


    initNewStroke(xprev,yprev, x,y);

    xprev=x;
    yprev=y;

}

 for ( i=ang; i<(360+ang); i=i+angle){
    bi=255*cos(radians(i));
  
   x= (sz)/2+sin(radians(i-counter))*((sz)-2*margin)/2 ;
   y= (sz)/2+cos(radians(i-counter))*((sz)-2*margin)/2  ; 
  if(xprev==0){
    xprev2=(sz)/2+sin(radians(360))*(r-angle);
    yprev2=margin ; 
  }


  //hi=hi+0.1;
  	 h=255-hi;
     s=si;
     b=bi;
     a=195+100*sin(radians(i+r/jump))-r/4;
    stroke(h,s,b,a) ;
   


    if(r==margin){
      stroke(0,0);
    }

 
    
	
    initNewStroke(xprev2,yprev2, x,y);
	
 

    xprev2=x;
    yprev2=y;

}

randomSeed(seed);
counter=counter+disp;

}

inc--;
counter=inc;
//noLoop();


}

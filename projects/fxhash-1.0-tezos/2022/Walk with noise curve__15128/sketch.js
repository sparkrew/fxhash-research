 //"Follow the curve of noise".
//In the spotlight of art -  the "noise curve"  , and all artwork is dependent from this curve.
function setup() {
  createCanvas(1200, 1200);   
	scale(1.2);
	// noprotect
	
	let nois=int(fxrand()*999999999); 
  randomSeed(nois);
	noiseSeed(nois); 
  
  let y1=0;
  let vni=0;
  let ran2=int(random(1,6));  
  let ran3=int(random(1,4));
  let ran4=int(random(2,4));
	let a3=int(random(1,3));
  
  background(random(100,255),random(255),random(255)); 
  fill(random(100,255),random(255),random(255)); 
     

for (let x23=0; x23<=1010; x23 +=ran4) { 
for (let x22=0; x22<=790; x22 += 1) {     
 
   //point(random(1000),x23);
	 point(fxrand()*1000,x23);
}
}

for (let x77=0; x77<=6; x77 +=a3) {   // draw
  
  //////////////////////  
  
   if (ran2==1) {
 rotate(random(x77));
}
else if (ran2==2) {
	rotate(x77);
}
else if (ran2==3) {
  translate(x77*50,x77*50);
	}  
else if (ran2==4) {
rotate(x77);
translate(x77*random(50,100),x77*random(50,100));
}

 /////////////////////////// 
  
 noiseDetail(200);

let x1=0;   

 for (let x=0; x<=1000; x += 1) {  
    
  let y=noise(x1,y1)*1000; 
   strokeWeight(1); 
	 rect(x,y+vni,5,5);
   
///////////////////////////////////////////// 
   for (let xx=0; xx<=7; xx += 1) {
   push();
     translate(x,y);
     
 //////////////////////  
   if (ran3==1) {
rotate(random(6));    
}
else if (ran3==2) {
rotate(random(xx));
}
else if (ran3==3) {
rotate(xx);
}  
 ///////////////////////////    
     strokeWeight(2);
		 let a1=random(10);
		 let a2=random(100);
     rect(x,y,a1,a2);
		 rect(x+1,y+1,a1,a2);
		 rect(x+2,y+2,a1,a2);
     pop(); 
   }
  /////////////////////////////////////////       
  
    
    x1 += 0.002;
  }
  
  vni += 5.2;
  y1 += 0.002; 
   
 }
 fxpreview();
}
//see license file name LICENSE.md
function hoddveven(){
  vm=vn/4;
  vtot=vn/2;
  hm=(hw+3)/4;
  htot=(hw+1)/2;
hcount=0;
  for(let i=0;i<hm;i++){
let vcount=hcount;
for(let j=0;j<=vm;j++){//left top
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
translate(i*3*w,j*2*h);
    eval(tlq[ctl[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w,-j*2*h);
  vcount++;
  }
  vcount--;                                            
for(let j=vm;j<=vtot;j++){//left bottom
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
translate(i*3*w,j*2*h);
    eval(blq[ctl[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w,-j*2*h);
  vcount--;  
  } hcount++;   
  }  
  hcount-=2;  
  for(let i=hm;i<htot;i++){
let vcount=hcount;
for(let j=0;j<=vm;j++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
translate(i*3*w,j*2*h);
    eval(trq[ctl[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w,-j*2*h);
  vcount++;
  }
  vcount--;                                            
for(let j=vm;j<=vtot;j++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
translate(i*3*w,j*2*h);
    eval(brq[ctl[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w,-j*2*h);
  vcount--;  
  } hcount--;   
  }  
  vm=vn/4;
  vtot=vn/2;
  hm=(hw+3)/4;
  htot=(hw+1)/2;
hcount=20;
  for(let i=0;i<hm-1;i++){
let vcount=hcount;
for(let j=0;j<=vm;j++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
translate(i*3*w+w*3/2,j*2*h+h);
    eval(tlq[ctl[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);fill(255,0,0);
translate(-i*3*w-w*3/2,-j*2*h-h);
  vcount++;
  }
  vcount-=2;                                            
for(let j=vm;j<=vtot;j++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
translate(i*3*w+w*3/2,j*2*h+h);
    eval(blq[ctl[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);fill(0,255,0);
translate(-i*3*w-w*3/2,-j*2*h-h);
  vcount--;  
  } hcount++;   
  }  
  hcount-=1;  
  for(let i=hm-1;i<htot;i++){
let vcount=hcount;
for(let j=0;j<=vm;j++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
translate(i*3*w+w*3/2,j*2*h+h);
    eval(trq[ctl[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);fill(255,0,255);
translate(-i*3*w-w*3/2,-j*2*h-h);
  vcount++;
  }
  vcount-=2;                                            
for(let j=vm;j<=vtot;j++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
translate(i*3*w+w*3/2,j*2*h+h);
    eval(brq[ctl[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);fill(0,0,255);
translate(-i*3*w-w*3/2,-j*2*h-h);
  vcount--;  
  } hcount--;   
  }  
  vm=vn/4;
  vtot=vn/2;
  hm=(hw+3)/4;
  htot=(hw+1)/2;
vcount=vct[0];
for(let j=0;j<=vm;j++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
let i = (hw+3)/4-1;
translate(i*3*w,j*2*h);
    eval(scvertt[ccv[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w,-j*2*h);
  vcount++;
  }
  vcount--;                                            
for(let j=vm;j<=vtot;j++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
let i = (hw+3)/4-1;
translate(i*3*w,j*2*h);
    eval(scvertb[ccv[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w,-j*2*h);
  vcount--;  
  }    
hcount=0;
for(let i=0;i<hm-1;i++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
let j = (vn/4);
translate(i*3*w,j*2*h);
    eval(schorl[cch[hcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w,-j*2*h);
  hcount++;
  }  
for(let i=hm-1;i<htot;i++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
let j = (vn/4);
translate(i*3*w,j*2*h);
    eval(schorr[cch[hcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w,-j*2*h);
  hcount--;  
  }  
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
translate(((hw+3)/4-1)*3*w,((vn/4))*2*h);
    eval(scentre[ccc[0]]+"();");
    hexerase();
    image(hx,-w,-h);fill(0,0,255);
translate(-((hw+3)/4-1)*3*w,-((vn/4))*2*h);
}



function hevenveven(){
  vm=vn/4;
  vtot=vn/2;
  hm=(hw+1)/4;
  htot=(hw+1)/2;
hcount=10;
  for(let i=0;i<hm;i++){
let vcount=hcount;
for(let j=0;j<=vm;j++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
translate(i*3*w,j*2*h);
    eval(tlq[ctl[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w,-j*2*h);
  vcount++;
  }
  vcount--;                                            
for(let j=vm;j<=vtot;j++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
translate(i*3*w,j*2*h);
    eval(blq[ctl[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w,-j*2*h);
  vcount--;  
  } hcount++;   
  }  
  hcount-=1;  
  for(let i=hm;i<htot;i++){
vcount=hcount;
for(let j=0;j<=vm;j++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
translate(i*3*w,j*2*h);;
    eval(trq[ctl[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w,-j*2*h);
  vcount++;
  }
  vcount--;                                            
for(let j=vm;j<=vtot;j++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
translate(i*3*w,j*2*h);
    eval(brq[ctl[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w,-j*2*h);
  vcount--;  
  } hcount--;   
  }  
hcount=20;
  for(let i=0;i<hm-1;i++){
vcount=hcount;
for(let j=0;j<=vm;j++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
translate(i*3*w+w*3/2,j*2*h+h);
    eval(tlq[ctl[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w-w*3/2,-j*2*h-h);
  vcount++;
  }
  vcount-=2;                                            
for(let j=vm;j<=vtot;j++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
translate(i*3*w+w*3/2,j*2*h+h);
    eval(blq[ctl[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w-w*3/2,-j*2*h-h);
  vcount--;  
  } hcount++;   
  }  
  hcount-=1;  
  for(let i=hm;i<htot;i++){
vcount=hcount;
for(let j=0;j<=vm+1;j++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
translate(i*3*w+w*3/2,j*2*h+h);
    eval(trq[ctl[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w-w*3/2,-j*2*h-h);
  vcount++;
  }
  vcount-=3;                                            
for(let j=vm;j<=vtot;j++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
translate(i*3*w+w*3/2,j*2*h+h);
    eval(brq[ctl[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w-w*3/2,-j*2*h-h);
  vcount--;  
  } hcount--;   
  }  
vcount=vct[10];
for(let j=0;j<vm;j++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
let i = (hw+1)/4;
translate(i*3*w-w*3/2,j*2*h+h);
    eval(scvertt[ccv[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w+w*3/2,-j*2*h-h);
  vcount++;
  }
  vcount--;                                            
for(let j=vm;j<=vtot;j++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
let i = (hw+1)/4;
translate(i*3*w-w*3/2,j*2*h+h);if(vcount<0)print(vcount);
    eval(scvertb[ccv[vcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w+w*3/2,-j*2*h-h);
  vcount--;  
  }    
hcount=30;
for(let i=0;i<hm;i++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
let j = (vn/4);
translate(i*3*w,j*2*h);
    eval(schorl[cch[hcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w,-j*2*h);
  hcount++;
  }  
  hcount--;
for(let i=hm;i<htot;i++){
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
let j = (vn/4);
translate(i*3*w,j*2*h);
    eval(schorr[cch[hcount]]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w,-j*2*h);
  hcount--;  
  }  
}
function s1(){
  hex1();
}
function s2(){
  hex2();
}
function s2r1(){
  hx.rotate(PI/3);
  hex2();
}
function s2r2(){
  hx.rotate(PI*2/3);
  hex2();
}
function s2r3(){
  hx.rotate(PI*3/3);
  hex2();
}
function s2r4(){
  hx.rotate(PI*4/3);
  hex2();
}
function s2r5(){
  hx.rotate(PI*5/3);
  hex2();
}
function s3(){
  hex3();
}
function s3r1(){
  hx.rotate(PI*1/3);
  hex3();
}
function s3r2(){
  hx.rotate(PI*2/3);
  hex3();
}
function s3r3(){
  hx.rotate(PI*3/3);
  hex3();
}
function s3r4(){
  hx.rotate(PI*4/3);
  hex3();
}
function s3r5(){
  hx.rotate(PI*5/3);
  hex3();
}
function s4(){
  hex4();
}
function s5(){
  hex5();
}
function s5r1(){
  hx.rotate(PI*1/3);
  hex5();
}
function s5r2(){
  hx.rotate(PI*2/3);   
  hex5(); 
}
function s6(){   
  hex6(); 
}
function s6r1(){   
  hx.rotate(PI*1/3);   
  hex6(); 
}
function s6r2(){   
  hx.rotate(PI*2/3);   
  hex6(); 
}
function s6r3(){   
  hx.rotate(PI*3/3);   
  hex6(); 
}
function s6r4(){   
  hx.rotate(PI*4/3);   
  hex6(); 
}
function s6r5(){   
  hx.rotate(PI*5/3);   
  hex6(); 
}
function s7(){   
  hex7(); 
}
function s7r1(){   
  hx.rotate(PI*1/3);   
  hex7(); 
}
function s7r2(){   
  hx.rotate(PI*2/3);   
  hex7(); 
}
function s8(){   
  hex8(); 
}
function s8r1(){   
  hx.rotate(PI*1/3);   
  hex8(); 
}
function s8r2(){   
  hx.rotate(PI*2/3);   
  hex8(); 
}
function s8r3(){   
  hx.rotate(PI*3/3);   
  hex8(); 
}
function s8r4(){   
  hx.rotate(PI*4/3);   
  hex8(); 
}
function s8r5(){   
  hx.rotate(PI*5/3);   
  hex8(); 
}
function s9(){    
  hex9(); 
}
function s9r1(){   
  hx.rotate(PI*1/3);   
  hex9(); 
}
function s9r2(){   
  hx.rotate(PI*2/3);   
  hex9(); 
}
function s9r3(){   
  hx.rotate(PI*3/3);   
  hex9(); 
}
function s9r4(){   
  hx.rotate(PI*4/3);   
  hex9(); 
}
function s9r5(){   
  hx.rotate(PI*5/3);   
  hex9(); 
}
function s10(){   
  hex10(); 
}
function s10r1(){   
  hx.rotate(PI*1/3);   
  hex10(); 
}
function s10r2(){   
  hx.rotate(PI*2/3);   
  hex10(); 
}
function s10r3(){   
  hx.rotate(PI*3/3);   
  hex10(); 
}
function s10r4(){   
  hx.rotate(PI*4/3);   
  hex10(); 
}
function s10r5(){   
  hx.rotate(PI*5/3);   
  hex10(); 
}
function s11(){     
  hex11(); 
}
function s11r1(){   
  hx.rotate(PI*1/3);   
  hex11(); 
}
function s12(){   
  hex12(); 
}
function s12r1(){   
  hx.rotate(PI*1/3);   
  hex12(); 
}
function hexagons(csw,csh){
  noStroke();
  hexnum=features.hexnum;
  turncount=0;
  for(let j=0;j<vn/2+1;j++){
  for(let i=0;i<hw/2;i++){
  hexagon(i*3*w,j*2*h); 
  hexdots(i*3*w,j*2*h); 
  }}
  for(let j=0;j<vn/2;j++){
  for(let i=0;i<hw/2-1;i++){
  hexagon(i*3*w+w*3/2,j*2*h+h);  
    hexdots(i*3*w+w*3/2,j*2*h+h); 
  }} 
  for(let j=0;j<vn/2+1;j++){
  for(let i=0;i<hw/2;i++){
  hexdots(i*3*w,j*2*h); 
  }}
  for(let j=0;j<vn/2;j++){
  for(let i=0;i<hw/2-1;i++){ 
  hexdots(i*3*w+w*3/2,j*2*h+h); 
  }} 
}   
function symmetry(){
tlq=["s1","s1","s1","s1","s1","s1","s2","s2r1","s2r2","s2r3","s2r4","s2r5","s3","s3r1","s3r2","s3r3","s3r4","s3r5","s4","s4","s4","s4","s4","s4","s5","s5r1","s5r2","s5","s5r1","s5r2","s6","s6r1","s6r2","s6r3","s6r4","s6r5","s7","s7r1","s7r2","s7","s7r1","s7r2","s8","s8r1","s8r2","s8r3","s8r4","s8r5","s9","s9r1","s9r2","s9r3","s9r4","s9r5","s10","s10r1","s10r2","s10r3","s10r4","s10r5","s11","s11r1","s11","s11r1","s11","s11r1","s12","s12","s12","s12","s12","s12"];
trq=["s1","s1","s1","s1","s1","s1","s8r4","s8r3","s8r2","s8r1","s8","s8r5","s3r4","s3r3","s3r2","s3r1","s3","s3r5","s4","s4","s4","s4","s4","s4","s5","s5r2","s5r1","s5","s5r2","s5r1","s10r4","s10r3","s10r2","s10r1","s10","s10r5","s7r1","s7","s7r2","s7r1","s7","s7r2","s2r4","s2r3","s2r2","s2r1","s2","s2r5","s9","s9r5","s9r4","s9r3","s9r2","s9r1","s6r4","s6r3","s6r2","s6r1","s6","s6r5","s11","s11r1","s11","s11r1","s11","s11r1","s12r1","s12r1","s12r1","s12r1","s12r1","s12r1"];
blq=["s1","s1","s1","s1","s1","s1","s8r1","s8","s8r5","s8r4","s8r3","s8r2","s3r1","s3","s3r5","s3r4","s3r3","s3r2","s4","s4","s4","s4","s4","s4","s5","s5r2","s5r1","s5","s5r2","s5r1","s10r1","s10","s10r5","s10r4","s10r3","s10r2","s7r1","s7","s7r2","s7r1","s7","s7r2","s2r1","s2","s2r5","s2r4","s2r3","s2r2","s9r3","s9r2","s9r1","s9","s9r5","s9r4","s6r1","s6","s6r5","s6r4","s6r3","s6r2","s11r1","s11","s11r1","s11","s11r1","s11","s12","s12","s12","s12","s12","s12"];
brq=["s1","s1","s1","s1","s1","s1","s2r3","s2r4","s2r5","s2","s2r1","s2r2","s3r3","s3r4","s3r5","s3","s3r1","s3r2","s4","s4","s4","s4","s4","s4","s5","s5r1","s5r2","s5","s5r1","s5r2","s6r3","s6r4","s6r5","s6","s6r1","s6r2","s7","s7r1","s7r2","s7","s7r1","s7r2","s8r3","s8r4","s8r5","s8","s8r1","s8r2","s9r3","s9r4","s9r5","s9","s9r1","s9r2","s10r3","s10r4","s10r5","s10","s10r1","s10r2","s11r1","s11","s11r1","s11","s11r1","s11","s12r1","s12r1","s12r1","s12r1","s12r1","s12r1"];
  for(let i=0;i<100;i++){  
  cccvh.push(int(random(0,2)));
  cchvh.push(int(random(0,5)));
  ccvvh.push(int(random(0,6)));
  ctlvh.push(int(random(0,71)));
  vtcvh.push(int(random(10,30)));
  hctvh.push(int(random(0,20)));
  }
  ccc=shuffle(cccvh);
  cch=shuffle(cchvh);
  ccv=shuffle(ccvvh);
  ctl=shuffle(ctlvh);
  vct=shuffle(vtcvh);
  hct=shuffle(hctvh);
  scentre=["s1","s4"];
  schorr=["s1","s4","s5","s12","s12r1"];
  schorl=["s1","s4","s5","s12r1","s12"];
  scvertt=["s1","s4","s5","s9","s9r3","s11","s11r1"];
  scvertb=["s1","s4","s5","s9r3","s9","s11r1","s11"];   
if((hw+1)/4!=int((hw+1)/4) && vn/4==int(vn/4)){
  hoddveven();
}
if((hw+1)/4==int((hw+1)/4) && vn/4==int(vn/4)){
  hevenveven();
}
  for(let j=0;j<vn/2+1;j++){
  for(let i=0;i<hw/2;i++){
  hexdots(i*3*w,j*2*h); 
  }}
  for(let j=0;j<vn/2;j++){
  for(let i=0;i<hw/2-1;i++){ 
  hexdots(i*3*w+w*3/2,j*2*h+h); 
  }} 
}
function tile(csw,csh){
    if(hexnum==1)hexch=[1,2,3,4,5,6,7,8,9,10,11,12];
    if(hexnum==2)hexch=[1,4,5,11,12];
    if(hexnum==3)hexch=[5,7,9,11,12];
    if(hexnum==4)hexch=[1,3,4,7,9,12];
    if(hexnum==5)hexch=[2,5,6,8,10,12];
    if(hexnum==6)hexch=[2,8,12];
    if(hexnum==7)hexch=[3,5,6,10,12];
    if(hexnum==8)hexch=[11];
    if(hexnum==9)hexch=[2,8];
    if(hexnum==10)hexch=[12];
tileh=[];tilev=[];tilerot=[];tilec=[];
for(let k=0;k<(hw+1)/2;k++){
    hxch=shuffle(hexch);
  tilec.push(hxch[0]);
}
for(let i=0;i<(hw+1)/2;i++){
    hxch=shuffle(hexch);
  tileh.push(hxch[0]);
}
for(let i=0;i<vn/2;i++){
    hxch=shuffle(hexch);
  tilev.push(hxch[0]);
}
  for(let t=0;t<(hw+vn)*4;t++){
  tilerot.push(int(random(0,6)));}
for(let i=0;i<(hw+1)/2;i++){
translate(i*3*w,0);
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
  hx.rotate(PI*tilerot[i]/3);
    eval("hex"+tileh[i]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w,0);
  hexdots(i*3*w,0);
}
for(let i=0;i<(hw+1)/2;i++){
translate(i*3*w,h*vn);
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
  hx.rotate(PI*tilerot[i]/3);
    eval("hex"+tileh[i]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i*3*w,-h*vn);
  hexdots(i*3*w,h*vn);
}
for(let j=0;j<vn/2;j++){
translate(0,j*2*h);
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
  hx.rotate(PI*tilerot[j]/3);
    eval("hex"+tilev[j]+"();");
    hexerase();
    image(hx,-w,-h);
translate(0,-j*2*h);
  hexdots(0,j*2*h);
}
for(let j=0;j<vn/2;j++){
translate(hn*w,j*2*h);
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
  hx.rotate(PI*tilerot[j]/3);
    eval("hex"+tilev[j]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-hn*w,-j*2*h);
  hexdots(hn*w,j*2*h);
}
translate(0,0);
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
  hx.rotate(PI*tilerot[0]/3);
    eval("hex"+tilec[0]+"();");
    hexerase();
    image(hx,-w,-h);
translate(0,0);
  hexdots(0,0);
  
translate(hn*w,h*vn);
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
  hx.rotate(PI*tilerot[0]/3);
    eval("hex"+tilec[0]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-hn*w,-h*vn);
  hexdots(hn*w,h*vn);
  
translate(0,h*vn);
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
  hx.rotate(PI*tilerot[0]/3);
    eval("hex"+tilec[0]+"();");
    hexerase();
    image(hx,-w,-h);
translate(0,-h*vn);
  hexdots(0,h*vn);
  
translate(hn*w,0);
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
  hx.rotate(PI*tilerot[0]/3);
    eval("hex"+tilec[0]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-hn*w,0);
  hexdots(hn*w,0);

}
function hexturn(){
  for(let i=0;i<hexcoord.length;i++){
  let distance=dist(mouseX,mouseY,hexcoord[i].x,hexcoord[i].y);
  if (distance<w){
  translate(hexcoord[i].x,hexcoord[i].y);
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
  hx.rotate(PI*turncount/3);turncount++;
  eval("hex"+hexcount[i]+"();");
  hexerase();
  image(hx,-w,-h);
  translate(-hexcoord[i].x,-hexcoord[i].y);
  hexdots(hexcoord[i].x,hexcoord[i].y);
                 }
  }
}
  function hexagon(i,j){
    if(hexnum==1)hexch=[1,2,3,4,5,6,7,8,9,10,11,12];
    if(hexnum==2)hexch=[1,4,5,11,12];
    if(hexnum==3)hexch=[5,7,9,11,12];
    if(hexnum==4)hexch=[1,3,4,7,9,12];
    if(hexnum==5)hexch=[2,5,6,8,10,12];
    if(hexnum==6)hexch=[2,8,12];
    if(hexnum==7)hexch=[3,5,6,10,12];
    if(hexnum==8)hexch=[11];
    if(hexnum==9)hexch=[2,8];
    if(hexnum==10)hexch=[12];
    hxch=shuffle(hexch);
translate(i,j);
    hexrotate();
    eval("hex"+hxch[0]+"();");
    hexerase();
    image(hx,-w,-h);
translate(-i,-j);
    hexcount.push(hxch[0]);
    hco=createVector(i,j);
    hexcoord.push(hco);
}
function hexrotate(){
  rot=int(random(0,6));
  hx=createGraphics(w*2,h*2);
  hx.noStroke();
  hx.translate(w,h);
  if(rot==1)hx.rotate(PI/3);
  if(rot==2)hx.rotate(PI*2/3);
  if(rot==3)hx.rotate(PI);
  if(rot==4)hx.rotate(PI*4/3);
  if(rot==5)hx.rotate(PI*5/3);}
function hex1(){
  hx.fill(col1);hx.ellipse(0,0,d*14);
  hx.fill(col4);
  hx.ellipse(0,0,d*8);
  hx.fill(col3);
  hx.ellipse(0,0,d*6);
  hx.fill(col4);
  hx.ellipse(0,0,d*4);
  hx.fill(col1);
  hx.ellipse(0,0,d*2);
  hx.fill(col4);
  hx.arc(0,-h,d*3,d*3,0,PI);
  hx.arc(0,h,d*3,d*3,PI,PI*2);
  hx.arc(w*3/4,-h/2,d*3,d*3,PI/3,PI*4/3);
  hx.arc(w*3/4,h/2,d*3,d*3,PI*2/3,PI*5/3);
  hx.arc(-w*3/4,h/2,d*3,d*3,PI*4/3,PI*7/3);
  hx.arc(-w*3/4,-h/2,d*3,d*3,PI*5/3,PI*8/3);
}
function hex2(){
  hx.fill(col1);hx.ellipse(0,0,d*14);
  hx.fill(col4);
  hx.arc(-w*3/4,-h/2,d*3,d*3,PI*5/3,PI*8/3);
  hx.fill(col3);
  hx.ellipse(-w*3/4,-h/2,d);
  hx.fill(col4);  
  hx.arc(w*3/2,-h,d*24,d*24,PI*2/3,PI);
  hx.fill(col3);  
  hx.arc(w*3/2,-h,d*22,d*22,PI*2/3,PI);
  hx.fill(col4);  
  hx.arc(w/2,-h,d*6,d*6,PI/3,PI);
  hx.arc(w,0,d*6,d*6,PI*2/3,PI*4/3);
  hx.fill(col1);  
  hx.arc(w/2,-h,d*4,d*4,PI/3,PI);
  hx.arc(w,0,d*4,d*4,PI*2/3,PI*4/3);
  hx.fill(col4);  
  hx.arc(-w/2,h,d*10,d*10,PI*4/3,PI*2);
  hx.fill(col3);  
  hx.arc(-w/2,h,d*8,d*8,PI*4/3,PI*2);
  hx.fill(col4);  
  hx.arc(-w/2,h,d*6,d*6,PI*4/3,PI*2);
  hx.fill(col1);  
  hx.arc(-w/2,h,d*4,d*4,PI*4/3,PI*2);
}
function hex3(){
  hx.fill(col1);hx.ellipse(0,0,d*14);
  hx.fill(col4);  
  hx.arc(w*3/2,-h,d*24,d*24,PI*2/3,PI);
  hx.fill(col3);  
  hx.arc(w*3/2,-h,d*22,d*22,PI*2/3,PI);
  hx.fill(col4);  
  hx.arc(w*3/2,-h,d*20,d*20,PI*2/3,PI);
  hx.fill(col1);  
  hx.arc(w*3/2,-h,d*18,d*18,PI*2/3,PI);  
  hx.fill(col4);
  hx.arc(-w*3/4,-h/2,d*3,d*3,PI*5/3,PI*8/3); 
  hx.arc(w*3/4,-h/2,d*3,d*3,PI*1/3,PI*4/3); 
  hx.arc(-w*3/4,h/2,d*3,d*3,PI*4/3,PI*7/3); 
  hx.arc(0,h,d*3,d*3,PI*3/3,PI*6/3);  
}
function hex4(){
  hx.fill(col3);hx.ellipse(0,0,d*14);
  hx.fill(col4);  
  hx.ellipse(0,0,d*6);
  hx.fill(col1);  
  hx.ellipse(0,0,d*4);
  hx.fill(col2);  
  hx.ellipse(0,0,d*2);
  hx.fill(col4);  
  hx.arc(w/2,-h,d*6,d*6,PI*1/3,PI*3/3);
  hx.arc(w,0,d*6,d*6,PI*2/3,PI*4/3);
  hx.arc(w/2,h,d*6,d*6,PI*3/3,PI*5/3);
  hx.arc(-w/2,h,d*6,d*6,PI*4/3,PI*6/3);
  hx.arc(-w,0,d*6,d*6,PI*5/3,PI*7/3);
  hx.arc(-w/2,-h,d*6,d*6,PI*0/3,PI*2/3);
  hx.fill(col1);  
  hx.arc(w/2,-h,d*4,d*4,PI*1/3,PI*3/3);
  hx.arc(w,0,d*4,d*4,PI*2/3,PI*4/3);
  hx.arc(w/2,h,d*4,d*4,PI*3/3,PI*5/3);
  hx.arc(-w/2,h,d*4,d*4,PI*4/3,PI*6/3);
  hx.arc(-w,0,d*4,d*4,PI*5/3,PI*7/3);
  hx.arc(-w/2,-h,d*4,d*4,PI*0/3,PI*2/3);  
}
function hex5(){
  hx.fill(col1);hx.ellipse(0,0,d*14);
  hx.fill(col2);  
  hx.ellipse(0,0,d*2);
  hx.fill(col4);  
  hx.arc(0,-h,d*3,d*3,PI*0/3,PI*3/3);
  hx.arc(0,h,d*3,d*3,PI*3/3,PI*6/3);
  hx.arc(w,0,d*10,d*10,PI*2/3,PI*4/3);
  hx.arc(-w,0,d*10,d*10,PI*5/3,PI*7/3);
  hx.fill(col3);  
  hx.arc(w,0,d*8,d*8,PI*2/3,PI*4/3);
  hx.arc(-w,0,d*8,d*8,PI*5/3,PI*7/3);
  hx.fill(col4);  
  hx.arc(w,0,d*6,d*6,PI*2/3,PI*4/3);
  hx.arc(-w,0,d*6,d*6,PI*5/3,PI*7/3);
  hx.fill(col1);  
  hx.arc(w,0,d*4,d*4,PI*2/3,PI*4/3);
  hx.arc(-w,0,d*4,d*4,PI*5/3,PI*7/3);
}
function hex6(){
  hx.fill(col1);hx.ellipse(0,0,d*14);
  hx.fill(col4);  
  hx.arc(w*3/2,-h,d*24,d*24,PI*2/3,PI);
  hx.fill(col3);  
  hx.arc(w*3/2,-h,d*22,d*22,PI*2/3,PI);
  hx.fill(col4);  
  hx.arc(w*3/2,-h,d*20,d*20,PI*2/3,PI);
  hx.fill(col1);  
  hx.arc(w*3/2,-h,d*18,d*18,PI*2/3,PI);   
  hx.fill(col4);  
  hx.arc(-w,0,d*10,d*10,PI*5/3,PI*7/3);
  hx.fill(col3);  
  hx.arc(-w,0,d*8,d*8,PI*5/3,PI*7/3);
  hx.fill(col4);  
  hx.arc(-w,0,d*6,d*6,PI*5/3,PI*7/3);
  hx.fill(col1);  
  hx.arc(-w,0,d*4,d*4,PI*5/3,PI*7/3);   
  hx.fill(col4);
  hx.arc(0,h,d*3,d*3,PI*3/3,PI*6/3);  
  hx.arc(w*3/4,-h/2,d*3,d*3,PI*1/3,PI*4/3);  
}
function hex7(){
  hx.fill(col3);  
  hx.ellipse(0,0,d*14);
  hx.fill(col4);  
  hx.arc(w*3/2,-h,d*20,d*20,PI*2/3,PI*3/3);
  hx.arc(-w*3/2,h,d*20,d*20,PI*5/3,PI*6/3);
  hx.fill(col1);  
  hx.arc(w*3/2,-h,d*18,d*18,PI*2/3,PI*3/3);
  hx.arc(-w*3/2,h,d*18,d*18,PI*5/3,PI*6/3); 
  hx.fill(col4);  
  hx.ellipse(0,0,d*2); 
  hx.arc(w*3/4,-h/2,d*3,d*3,PI*1/3,PI*4/3);
  hx.arc(-w*3/4,h/2,d*3,d*3,PI*4/3,PI*7/3);
  hx.arc(-w/2,-h,d*6,d*6,PI*0/3,PI*2/3);
  hx.arc(w/2,h,d*6,d*6,PI*3/3,PI*5/3);  
  hx.fill(col1);  
  hx.arc(-w/2,-h,d*4,d*4,PI*0/3,PI*2/3);
  hx.arc(w/2,h,d*4,d*4,PI*3/3,PI*5/3);  
}
function hex8(){
  hx.fill(col1);hx.ellipse(0,0,d*14);
  hx.fill(col4);
  hx.arc(0,h,d*3,d*3,PI*3/3,PI*6/3);
  hx.arc(-w,0,d*10,d*10,PI*5/3,PI*7/3);  
  hx.fill(col3);  
  hx.arc(-w,0,d*8,d*8,PI*5/3,PI*7/3);  
  hx.fill(col4);  
  hx.arc(-w,0,d*6,d*6,PI*5/3,PI*7/3);  
  hx.fill(col1);  
  hx.arc(-w,0,d*4,d*4,PI*5/3,PI*7/3); 
  hx.fill(col4);  
  hx.arc(w*3/2,-h,d*24,d*24,PI*2/3,PI);
  hx.fill(col3);  
  hx.arc(w*3/2,-h,d*22,d*22,PI*2/3,PI);
  hx.fill(col4);  
  hx.arc(w/2,-h,d*6,d*6,PI/3,PI);
  hx.arc(w,0,d*6,d*6,PI*2/3,PI*4/3);
  hx.fill(col1);  
  hx.arc(w/2,-h,d*4,d*4,PI/3,PI);
  hx.arc(w,0,d*4,d*4,PI*2/3,PI*4/3);
  
}
function hex9(){
  hx.fill(col3);  
  hx.ellipse(0,0,d*14);
  hx.fill(col4);  
  hx.arc(w*3/2,h,d*20,d*20,PI*3/3,PI*4/3);
  hx.arc(-w*3/2,h,d*20,d*20,PI*5/3,PI*6/3);
  hx.fill(col1);  
  hx.arc(w*3/2,h,d*18,d*18,PI*3/3,PI*4/3);
  hx.arc(-w*3/2,h,d*18,d*18,PI*5/3,PI*6/3); 
  hx.fill(col4);  
  hx.ellipse(0,0,d*2); 
  hx.arc(w*3/4,h/2,d*3,d*3,PI*2/3,PI*5/3);
  hx.arc(-w*3/4,h/2,d*3,d*3,PI*4/3,PI*7/3);
  hx.arc(-w/2,-h,d*6,d*6,PI*0/3,PI*2/3);
  hx.arc(w/2,-h,d*6,d*6,PI*1/3,PI*3/3);  
  hx.fill(col1);  
  hx.arc(-w/2,-h,d*4,d*4,PI*0/3,PI*2/3);
  hx.arc(w/2,-h,d*4,d*4,PI*1/3,PI*3/3);  
}
function hex10(){
  hx.fill(col1);hx.ellipse(0,0,d*14);
  hx.fill(col4);  
  hx.arc(w*3/2,-h,d*24,d*24,PI*2/3,PI);
  hx.fill(col3);  
  hx.arc(w*3/2,-h,d*22,d*22,PI*2/3,PI);
  hx.fill(col4);  
  hx.arc(w*3/2,-h,d*20,d*20,PI*2/3,PI);
  hx.fill(col1);  
  hx.arc(w*3/2,-h,d*18,d*18,PI*2/3,PI);   
  hx.fill(col4);  
  hx.arc(-w/2,h,d*10,d*10,PI*4/3,PI*6/3);
  hx.fill(col3);  
  hx.arc(-w/2,h,d*8,d*8,PI*4/3,PI*6/3);
  hx.fill(col4);  
  hx.arc(-w/2,h,d*6,d*6,PI*4/3,PI*6/3);
  hx.fill(col1);  
  hx.arc(-w/2,h,d*4,d*4,PI*4/3,PI*6/3);   
  hx.fill(col4);
  hx.arc(-w*3/4,-h/2,d*3,d*3,PI*5/3,PI*8/3);  
  hx.arc(w*3/4,-h/2,d*3,d*3,PI*1/3,PI*4/3);  
}
function hex11(){
  hx.fill(col3);  
  hx.ellipse(0,0,d*14);
  hx.fill(col4);  
  hx.arc(w*3/2,h,d*20,d*20,PI*3/3,PI*4/3);
  hx.arc(-w*3/2,h,d*20,d*20,PI*5/3,PI*6/3);
  hx.arc(0,-h*2,d*20,d*20,PI*1/3,PI*2/3);
  hx.fill(col1);  
  hx.arc(w*3/2,h,d*18,d*18,PI*3/3,PI*4/3);
  hx.arc(-w*3/2,h,d*18,d*18,PI*5/3,PI*6/3); 
  hx.arc(0,-h*2,d*18,d*18,PI*1/3,PI*2/3);
  hx.fill(col4);  
  hx.ellipse(0,0,d*2);
  hx.arc(0,-h,d*3,d*3,PI*0/3,PI*3/3);
  hx.arc(w*3/4,h/2,d*3,d*3,PI*2/3,PI*5/3);
  hx.arc(-w*3/4,h/2,d*3,d*3,PI*4/3,PI*7/3);  
}
function hex12(){
  hx.fill(col1);hx.ellipse(0,0,d*14);
  hx.fill(col4);  
  hx.ellipse(0,0,d*2);
  hx.arc(-w/2,h,d*10,d*10,PI*4/3,PI*2);
  hx.fill(col3);  
  hx.arc(-w/2,h,d*8,d*8,PI*4/3,PI*2);
  hx.fill(col4);  
  hx.arc(-w/2,h,d*6,d*6,PI*4/3,PI*2);
  hx.fill(col1);  
  hx.arc(-w/2,h,d*4,d*4,PI*4/3,PI*2);
  hx.fill(col4);  
  hx.arc(-w/2,-h,d*10,d*10,PI*0/3,PI*2/3);
  hx.fill(col3);  
  hx.arc(-w/2,-h,d*8,d*8,PI*0/3,PI*2/3);
  hx.fill(col4);  
  hx.arc(-w/2,-h,d*6,d*6,PI*0/3,PI*2/3);
  hx.fill(col1);  
  hx.arc(-w/2,-h,d*4,d*4,PI*0/3,PI*2/3);
  hx.fill(col4);  
  hx.arc(w,0,d*10,d*10,PI*2/3,PI*4/3);
  hx.fill(col3);  
  hx.arc(w,0,d*8,d*8,PI*2/3,PI*4/3);
  hx.fill(col4);  
  hx.arc(w,0,d*6,d*6,PI*2/3,PI*4/3);
  hx.fill(col1);  
  hx.arc(w,0,d*4,d*4,PI*2/3,PI*4/3);
}
function hexerase(){
  hx.erase();
  hx.triangle(w,-h,w,0,w/2,-h);
  hx.triangle(w,h,w,0,w/2,h);
  hx.triangle(-w,-h,-w,0,-w/2,-h);
  hx.triangle(-w,h,-w,0,-w/2,h);  
  hx.triangle(-w/4,-h*3/2,w/2,-h,-w/2,-h);
  hx.triangle(w/4,-h*3/2,-w/2,-h,w/2,-h);  
  hx.triangle(w*5/4,-h/2,w,0,w/2,-h); 
  hx.triangle(-w*5/4,-h/2,-w,0,-w/2,-h);
  hx.triangle(-w*5/4,h/2,-w,0,-w/2,h); 
  hx.triangle(w*5/4,h/2,w,0,w/2,h);   
  hx.triangle(-w/4,h*3/2,w/2,h,-w/2,h);
  hx.triangle(w/4,h*3/2,-w/2,h,w/2,h); 
  hx.noErase();
}
function hexdots(i,j){
fill(col1);
ellipse(i-w*17/28,j-h*11/14,d);
ellipse(i-w*25/28,j-h*3/14,d);
ellipse(i-w*17/28,j+h*11/14,d);
ellipse(i-w*25/28,j+h*3/14,d);
ellipse(i+w*17/28,j-h*11/14,d);
ellipse(i+w*25/28,j-h*3/14,d);
ellipse(i+w*17/28,j+h*11/14,d);
ellipse(i+w*25/28,j+h*3/14,d);
ellipse(i+w*2/7,j+h,d);
ellipse(i+w*2/7,j-h,d);
ellipse(i-w*2/7,j+h,d);
ellipse(i-w*2/7,j-h,d);
fill(col2);
ellipse(i-w/2,j-h,d*2);
ellipse(i+w/2,j-h,d*2);
ellipse(i+w,j,d*2);
ellipse(i+w/2,j+h,d*2);
ellipse(i-w/2,j+h,d*2);
ellipse(i-w,j,d*2);
fill(col3);
ellipse(i,j-h,d);
ellipse(i,j+h,d);
ellipse(i+w*3/4,j-h/2,d);
ellipse(i+w*3/4,j+h/2,d);
ellipse(i-w*3/4,j+h/2,d);
ellipse(i-w*3/4,j-h/2,d); 
fill(col4);
e=d-s[2];
ellipse(i-w/7,j-h,d);
ellipse(i+w/7,j-h,d);
ellipse(i-w/7,j+h,d);
ellipse(i+w/7,j+h,d);
ellipse(i-w*19/28,j-h*9/14,d);
ellipse(i+w*19/28,j-h*9/14,d);
ellipse(i-w*19/28,j+h*9/14,d);
ellipse(i+w*19/28,j+h*9/14,d);
ellipse(i-w*23/28,j-h*5/14,d);
ellipse(i+w*23/28,j-h*5/14,d);
ellipse(i-w*23/28,j+h*5/14,d);
ellipse(i+w*23/28,j+h*5/14,d);
}





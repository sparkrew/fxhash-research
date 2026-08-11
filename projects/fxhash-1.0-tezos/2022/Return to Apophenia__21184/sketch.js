function setup() {
  cs =2000;
  nseed = int(fxrand() * 100000000);
  rseed = int(fxrand() * 100000000);
  colrotate=0;
mydraw(cs);
}
function mydraw(cs){
  noiseSeed(nseed);
  randomSeed(rseed);
  hw=int(random(1,9))*2+1;
  vn=18;
  while(vn/4!=int(vn/4)){
  if(hw<5)vn=hw+int(random(-1,4))*2-1;
  if(hw>3)vn=hw+int(random(-2,10))*2-1;
  if(hw>11)vn=hw+int(random(-5,12))*2-1;
  }
  hn=3*(hw-1)/2;
  w=cs/hn;
  h=w*sqrt(3)/2;
  d=w/7;
  tothex=hw*vn/2+(hw+1)/2;
  csw=w*hn;
  csh=h*vn;
  createCanvas(csw,csh);
  makearrays(cs);
  choosecolors();
  background(col1);
  hexagons(csw,csh);
}
function mouseClicked(){
hexturn();
}
  function keyTyped() {
  if (key ==="r"){
  clear();
  background(col1);
makearrays();
hexagons(csw,csh);
}
  if (key ==="t"){
tile(csw,csh);
}
  if (key ==="y"){
symmetry(csw,csh);
}
  if (key ==="s"){
saveCanvas('myCanvas', 'png');
}
  if (key === '2'){
  clear();
  cs=2000;
  mydraw(cs);
  }
  if (key === '3'){
  clear();
  cs=3000;
  mydraw(cs);
  }
  if (key === '4'){
  clear();
  cs=4000;
  mydraw(cs);
  }
  if (key === '5'){
  clear();
  cs=5000;
  mydraw(cs);
  }
  if (key === '6'){
  clear();
  cs=6000;
  mydraw(cs);
  } 
  if (key === '7'){
  clear();
  cs=7000;
  mydraw(cs);
  } 
  if (key === '8'){
  clear();
  cs=8000;
  mydraw(cs);
  } 
  if (key === '9'){
  clear();
  cs=9000;
  mydraw(cs);
  } 
  if (key === 'c'){
  clear();
  if(colrotate<7){colrotate++;}else{colrotate=0;}
  mydraw(cs);              
  }
  }
let h1, s1, l1, c1, c2;

function changeBg() {

  //to draw polaroid white -ish frame
  polaroidHR.colorMode(HSL);
  polaroidHR.background((30 + fxrand() * 7),25,(88 + fxrand() * 5)); 
}

function backgroundC2(){

  //to draw sky
  h1 = 215 + fxrand() * 40;
  s1 = 35 + fxrand() * 35;
  l1 = 30 + fxrand() * 58;
  
  polaroidHR.noStroke();
  polaroidHR.fill(h1,s1,l1);
  polaroidHR.rect(margin, margin, wx - margin, hy - margin);

  if(margin === 0){
    h1 = 220 + fxrand() * 50;
    s1 = 35 + fxrand() * 65;
    l1 = 30 + fxrand() * 70;
  
  polaroidHR.noStroke();
  polaroidHR.fill(h1,s1,l1);
  polaroidHR.rect(margin, margin, wx - margin, hy - margin);
  
  }

} 

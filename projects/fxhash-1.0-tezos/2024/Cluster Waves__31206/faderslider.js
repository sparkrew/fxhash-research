class FaderSlider {
  constructor(x1, y1, x2, y2, clr6,clr7) {
    
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.clr6 = clr6;
    this.clr7 = clr7;
    
  }
  
     display () {
     strokeWeight((400*pix)/960/glscale);
     stroke(clr6[0],clr6[1],clr6[2]);
     line(this.x1, this.y1, this.x2, this.y2);
     noStroke();
     rectMode(CENTER);
     fill(clr7[0],clr7[1],clr7[2]);
     rect(this.x1-s/10, this.y1*cos(frameCount+random(-1500,1500)), s/80, s/80);  
   }
  
  
  
}

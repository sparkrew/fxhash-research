class Block {
    constructor(px,py,w,h,depth,alpha) {
      this.px = px;
      this.py = py;
      this.w = w;
      this.h = h;
      this.finallDepth = depth*(fxrand()+1);
      this.depth = 0;
      this.dDepth = 0.8*fxrand();
      this.shadowAlpha = (TWO_PI / 360) * alpha; //32º
      this.c = color(230,130+(fxrand()*90),0,(alpha/90)*255);
      this.finish = false;
      this.depthAcel = fxrand()*0.08 + 0.02;
    }
  
    update(){
      if(this.depth < this.finallDepth) 
        this.depth += (this.finallDepth - this.depth)*this.depthAcel + this.dDepth - (this.depth)*this.depthAcel;
      else
        this.finish = true;
    }
  
    displayShadow() {
      push(); // Start a new drawing state
      beginShape();
      translate(this.px+this.w/2,this.py-this.h/2);
      vertex(0,0);
      vertex(sin(this.shadowAlpha)*this.depth,cos(this.shadowAlpha)*this.depth);
      vertex(sin(this.shadowAlpha)*this.depth,cos(this.shadowAlpha)*this.depth+this.h);
      vertex(sin(this.shadowAlpha)*this.depth-this.w,cos(this.shadowAlpha)*this.depth+this.h);
      vertex(-this.w,this.h);
      vertex(-this.w,0);
      endShape();
      pop(); // Restore original state
      
    }

    displaySolid() {
      fill(this.c);
      for(let s = 1; s > 0.1; s/=2){
      rect(this.px,this.py,this.w*s,this.h*s);
      }
    }
  }
  
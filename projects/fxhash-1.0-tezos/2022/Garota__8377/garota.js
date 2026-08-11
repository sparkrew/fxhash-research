/* class Garota by atxabuiro */

class Garota {



    constructor(rr, hh1,ss1,bb1, hh2,ss2,bb2, rl, dd) {
  
        this.radius = rr
        this.relation = rl
  
        this.hue1 = hh1
        this.sat1 = ss1
        this.bri1 = bb1
        this.hue2 = hh2
        this.sat2 = ss2
        this.bri2 = bb2
  
        this.direction = dd
        
  
        
  
    }
  
    
    paint(){
      
      push()
      rotateY(frameCount * 0.004 * this.direction);
      rotateX(frameCount * 0.0004 * this.direction);
      
      strokeWeight(this.radius/75)
      this.bucle(this.hue1, this.sat1, this.bri1)
  
      scale(this.relation)
      strokeWeight(this.radius/150)
      this.bucle(this.hue2, this.sat2, this.bri2)
      pop()
    }
  
    bucle(hue, sat, bri){
      var t=0;
      var s=0;
  
      var lastx = 0;
      var lasty = 0;
      var lastz = 0;
  
      while(t < 180){
        s+=sInc;
        t+=tInc;
        var radS = radians(s);
        var radT = radians(t)
    
        var thisx = 0+(this.radius * cos(radS) * sin(radT)*1.6)
        var thisy = 0+(this.radius * sin(radS) * sin(radT)*1.6)
        var thisz = 0+(this.radius * cos(radT))
    
        if(lastx !=0){
          
            stroke(color(hue,sat,bri))
            line(thisx, thisy, thisz,lastx, lasty, lastz)
    
        }
    
        lastx = thisx
        lasty = thisy
        lastz = thisz
      }
    }
  
    setRadius(rr){
      this.radius = rr
    }
  
  
  
  }
class Addsynt {
  
  constructor() {
    
    this.amplif = 0.016;
   //this.ampCurve = 1;
    
    //this.note = note;
    this.osc = new p5.Oscillator();
    this.osc.setType(oscTypes);
    this.note = random(modernAmixolydian);
    this.osc.freq(midiToFreq(this.note));
    this.osc.amp(0);
    this.osc.start();
    this.osc.pan(random(-0.5,0.5), 0.2);

  }
  
  update() {	
    
    //COEFFS AMPLIFIERS X4
  if (this.note <= 28) {
this.osc.amp((this.amplif*5)*(cos(frameCount+random(-500,500))), 2.5);
     } else if (28 < this.note <= 35) {  this.osc.amp((this.amplif*4.64)*(cos(frameCount+random(-500,500))), 2.5);
     } else if (35 < this.note <= 43) {  this.osc.amp((this.amplif*4.2)*(cos(frameCount+random(-500,500))), 2.5);
     } else if (43 < this.note <= 55) {  this.osc.amp((this.amplif*4)*(cos(frameCount+random(-500,500))), 2.5);
     } else if (55 < this.note <= 62) {  this.osc.amp((this.amplif*3.92)*(cos(frameCount+random(-500,500))), 2.5);
     } else if (62 < this.note <= 71) {  this.osc.amp((this.amplif*3.8)*(cos(frameCount+random(-500,500))), 2.5);
     } else if (71 < this.note <= 84) {  this.osc.amp((this.amplif*3.92)*(cos(frameCount+random(-500,500))), 2.5);
     } else if (84 < this.note <= 96) {  this.osc.amp((this.amplif*3.88)*(cos(frameCount+random(-500,500))), 2.5);
     } else if (96 < this.note <= 105) {  this.osc.amp((this.amplif*3.56)*(cos(frameCount+random(-500,500))), 2.5);
     } else if (105 < this.note <= 110) {  this.osc.amp((this.amplif*3.52)*(cos(frameCount+random(-500,500))), 2.5);
     } else if (110 < this.note <= 113) {  this.osc.amp((this.amplif*3.68)*(cos(frameCount+random(-500,500))), 2.5);
     } else if (113 < this.note <= 117) {  this.osc.amp((this.amplif*3.88)*(cos(frameCount+random(-500,500))), 2.5);
     } else if (117 < this.note <= 124) {  this.osc.amp((this.amplif*4.28)*(cos(frameCount+random(-500,500))), 2.5);
     } else if (124 < this.note <= 128) {  this.osc.amp((this.amplif*4.16)*(cos(frameCount+random(-500,500))), 2.5);
     }
    
        //this.osc.amp(0.083*(cos(frameCount+random(-500,500))), 2.5);
       
	}
	
  
}
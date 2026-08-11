class Block {

  constructor(i, j, r, clr1, clr2, clr3, clr4, clr5) {
        colorMode(HSB);
        this.i = i;
        this.j = j;
        this.r = r;


        this.c = pg.get(i, j);
        this.b = brightness(this.c);      
        this.val = map(this.b, 0, 100, 0, 1);
        this.col = lerpColor(c1,c2, this.val);
        this.r = map(this.b,0, 100, 0, res);
    
        this.clr1 = clr1;
        this.clr2 = clr2;
        this.clr3 = clr3;
        this.clr4 = clr4;
        this.clr5 = clr5;

  }
  
    update() {

    
  }
  

    display() {
      push();
      rotate(QUARTER_PI*this.j);
      
      fill(clr1[0],clr1[1],clr1[2]);
      //rect(this.i,this.j,this.r,this.r);
      fill(clr2[0],clr2[1],clr2[2]);
      rect(this.i,this.j,this.r/4,this.r);
      fill(clr3[0],clr3[1],clr3[2]);
      rect(this.i,this.j,this.r,this.r/4);
      fill(clr4[0],clr4[1],clr4[2]); rect(this.i+this.r/4*3+this.r/4,this.j,this.r/8,this.r);
      fill(clr5[0],clr5[1],clr5[2]); rect(this.i,this.j+this.r/4*3+this.r/4,this.r,this.r/8);
      
    pop();
  }

}
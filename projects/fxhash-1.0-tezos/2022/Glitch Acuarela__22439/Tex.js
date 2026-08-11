class Tex {
  constructor(ruleset) {
    this.ruleset = ruleset;
    this.R = 1;
    this.g = g;
    this.negative_color = 0;
    this.generation = 0;
    this.cells = Array(cell_factor - border/cell_size*2)
    
    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i] = 0;
    } 
    
  }
  
  start(){
    if (this.generation==0){
      
      for (let i=0;i<this.cells.length;i++){
        this.cells[(ran_translate[i])] = 1;  
        this.cells[this.cells.length/2] = 0;    
        
      }
      
      if (ran_translate[2] > 10){    
        land.ruleset = ruleset3;
        //print('RULESET 3  = = = = = = = == = = = == = 3.0')
        if (ran_translate[2] > 20 && thirds ==2){   
          //print('RULESET 3  = = = = = = = == = = = == = 3')
          land.negative_color = 1;
        }
      }
      if (ran_translate[3] > 10){
        land.ruleset = ruleset4;
        //print('RULESET 4  = = = = = = = == = = = == =4')
      }
    }
  }
  
  generate() {    
    
    this.nextgen = Array(this.cells.length);
    
    for (let i = 0; i < this.cells.length; i++) {
      this.left   = this.cells[i-1];   
      this.me     = this.cells[i];    
      this.right  = this.cells[i+1];   
      this.nextgen[i] = this.rules(this.left, this.me, this.right); 
    }
   
      let left_right = int(ran_translate[this.generation]*this.R);
      let tail = this.nextgen.splice(left_right);    
      tail.push(...this.nextgen);
      this.cells = tail;    
            
    this.generation++;  
  }
  
  
  
  render(){
  noStroke();
  //strokeWeight(g/500);
    
    let rt = int(ran_translate[this.generation]*this.R)*cell_size;
    //print('trans sun',rt)
    let trans_sun = floor(this.cells.length/thirds)
    
    let move = 0;
    if (thirds==3 && ran_translate[5]>0){move = 1}else{move = 0}
    
    this.angle = PI; //lerp(abs(ran_translate[0]),ran0,PI,TWO_PI);
    
    //*drying effect
    push()
    if (this.generation > this.cells.length-4*abs(ran_translate[0])){
    fill(360-this.generation,10,100,0.4);
    rect(0,0,g-2*border,g-2*border)
    }
    pop()
    //*/
    
    for (let i = 0; i < this.cells.length; i++){      
      if (this.cells[i] == 1){        
        fill(360-this.generation,100,100-100*this.negative_color,100-2*abs(ran_translate[this.generation]));                
      } else {        
        fill(this.generation,100,100-100*this.negative_color,10);
        }

     
      //GLITCH 1 R + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + 
      if (ran_translate[1]>ran0*0 && this.generation > this.cells.length/3*2){            
        this.R = 1.1;        
      }//END GLITCH 1 R + + + + + + + + + + + + + + + + + + + + + + + + + + +  

      //if (this.generation<abs(ran_translate[1]*15+10)){rect(i * cell_size,(this.generation)* cell_size+2*cell_size, cell_size/2, cell_size);}
      if (this.generation<this.cells.length/thirds){rect(i * cell_size,(this.generation)* cell_size+2*cell_size, cell_size/2, cell_size);}
      
      
      if (this.generation < trans_sun-3){
        //print('RECT0 = = = = = = = = = == = =000',this.generation)
        let x = (this.generation)* cos(this.angle);     
        let y = (this.generation)* sin(this.angle);
        
        push()
        translate((trans_sun+move*this.cells.length/3)*cell_size,trans_sun*cell_size)                
        rect(x*cell_size,y*cell_size, cell_size, cell_size);        
        pop()
        
      }else{//print('RECT = = = = = = = = = == = =',this.generation)
        rect(i * cell_size,(this.generation)* cell_size, cell_size, cell_size);
      }
      
      //glitch 2
      if (ran_translate[this.generation]>ran0*0.95 && this.generation > trans_sun*2){            
        this.R = 3;        
        rect(i * cell_size, this.generation*cell_size-abs(rt), cell_size, cell_size*3); 
        //this.negative_color = 0;
      }
            
     this.angle+=PI/(this.cells.length);
     
    }  
            
}
  

  
  finished(){
    if (this.generation >=this.cells.length){return true}
  }
  
  rules(a, b, c) {
    if (a == 1 && b == 1 && c == 1) return this.ruleset[0];
    if (a == 1 && b == 1 && c == 0) return this.ruleset[1];
    if (a == 1 && b == 0 && c == 1) return this.ruleset[2];
    if (a == 1 && b == 0 && c == 0) return this.ruleset[3];
    if (a == 0 && b == 1 && c == 1) return this.ruleset[4];
    if (a == 0 && b == 1 && c == 0) return this.ruleset[5];
    if (a == 0 && b == 0 && c == 1) return this.ruleset[6];
    if (a == 0 && b == 0 && c == 0) return this.ruleset[7];
    return 0;
  }
}
  
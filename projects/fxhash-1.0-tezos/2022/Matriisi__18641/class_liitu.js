




class liidut {
   constructor(_loc,_dir,_speed,color_in){
    this.loc = _loc;
    this.dir = _dir;
    this.speed = _speed;
    this.clr = color_in
  }
  
  run() {
  //print ('test')
  this.move();
  //this.checkEdges()
  this.update();
  
  //print ('locc = '+ this.loc)
}

move(){
 noiseScale=10;
 noiseDetail(0.1, 4);
    let angle=noise(this.loc.x/noiseScale, this.loc.y/noiseScale, frameCount/noiseScale)*TWO_PI*noiseStrength; //0-2PI
    //print ('yep')
    //part_rot_ar[layer] += angle
    angle += frameCount/10;
    this.dir.x = cos(angle*10);
    this.dir.y = sin(angle*10);
   //print (this.dir);
    var vel = this.dir.copy();
    var d =1;  //direction change 
    vel.mult(this.speed); //vel = vel * (speed*d)
    this.loc.add(vel); //loc = loc + vel
   // print (this.loc)
  }
  
    checkEdges(){
    //float distance = dist(width/2, height/2, loc.x, loc.y);
    //if (distance>150) {
    if (this.loc.x<0 || this.loc.x>width || this.loc.y<0 || this.loc.y>height) {    
      this.loc.x = random(width*1.2);
      this.loc.y = random(height);
    }
    }
    
    update(){
  
  
    //fill(255);
    //print ('x = '+ this.loc.x+' y = '+this.loc.y+' z = '+ this.loc.z)
    //ellipse(this.loc.x, this.loc.y, this.loc.z);
     push();
     //print('draw2')
     let drawMod = noise(this.loc.x/noiseScale, this.loc.y/noiseScale, frameCount/noiseScale)*TWO_PI*noiseStrength;
        size_mod = drawMod/1000;
        let c = color(clr_line)
        //print ('size mod = ' + drawMod)
        c.setAlpha = drawMod/100
        clr_line = c
        
          this.nelio((this.loc.x*M),(this.loc.y*M),clr_line,size_mod);
          pop();
          push();
          this.circle((this.loc.x*M),(this.loc.y*M),clr_line,size_mod);
          pop();
          push();
          this.kolmio((this.loc.x*M),(this.loc.y*M),clr_line,size_mod);
          this.kolmio((this.loc.x*M),(this.loc.y*M),clr_line,size_mod);
          this.kolmio((this.loc.x*M),(this.loc.y*M),clr_line,size_mod);
          this.kolmio((this.loc.x*M),(this.loc.y*M),clr_line,size_mod);
          pop();
          //noiseScale=500;
  }



  
  
  
  
   kolmio(loc_X,loc_Y,clr_in,size_mod_in) {
      
    gr_size =((fxrand()*2)+0.1)*M;
    push();
    translate (loc_X+(((fxrand()*8)-6)*M)*(size_mod_in),loc_Y+(((Math.round(fxrand()*(8*M)))-(6*M)))*(size_mod_in+(loc_Y/1000)),0);
    push();
    let c = color(clr_in)
     let c2 = color(hue(c)+((fxrand()*40)-20),saturation(c),brightness(c))
    c2.setAlpha(0.40);
      fill (c2);
     rotate(fxrand()*(360));
  noStroke();
    let rnd_dist = gr_size-(size_mod_in);
    scale (0.5*M,0.5*M);
    triangle(0, 0, rnd_dist, rnd_dist, rnd_dist+rnd_dist, -rnd_dist);
    pop();
    pop();  
  }
  
  
    nelio(loc_X,loc_Y,clr_in,size_mod_in) {
    gr_size = ((fxrand()*5)+1)*M;
    translate (loc_X+(((fxrand()*6)-3)*M)*(size_mod_in),loc_Y+(((fxrand()*6)-3)*M)*(size_mod_in),0);
    push();
       let c = color(clr_in)
        let c2 = color(hue(c)+((fxrand()*40)-20),saturation(c),brightness(c))
    c2.setAlpha(0.4);
    fill (c2);
    rotate(fxrand()*(360));
    noStroke();
    rect (0,0, gr_size,gr_size/(gr_size/2))
    //rect (0,0,gr_size*(size_mod_in),gr_size-(size_mod_in/2));
    pop();
  }
  
  
   circle(loc_X,loc_Y,clr_in,size_mod_in) {
      
    gr_size = ((fxrand()*4)+1)*M;
    translate (loc_X+(((fxrand()*3)-1.5)*M),loc_Y+(((fxrand()*2)-1)*M)*(size_mod_in),0);
    push();
       let c = color(clr_in)
       let c2 = color(hue(c)+((fxrand()*20)-10),saturation(c),brightness(c))
    c2.setAlpha(0.30);
    fill (c2);
    noStroke();
    circle (0,0,gr_size-(size_mod_in));
    pop();
  } 
  
  
  
}
var piere=fxrand()*6;

class Particle {
  constructor() {
    this.pos = createVector(width/4+fxrand()*width/2+fxrand()*width/4-fxrand()*width/4,height/4+fxrand()*height/2+fxrand()*height/4-fxrand()*height/4);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.maxspeed = maxspeed;
    this.prevPos = this.pos.copy();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.maxspeed=this.maxspeed - fxrand()*2; 
    if (this.maxspeed<-50)
      {this.maxspeed=-this.maxspeed;}
    
  }

  follow(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = floor(x + y * cols);
    var force = vectors[index];
    this.applyForce(force);
  }

  applyForce(force) {
    this.acc.add(force);
  }





  show(r,g,b,size,clor,count) {


 image(gm, this.pos.x+count*count/5000/piere-fxrand()*count*count/700/piere, this.pos.y+count*count/5000/piere-fxrand()*count*count/400/piere, size,size, this.pos.x, this.pos.y,Math.abs(size),Math.abs(size))


if (piere>4){
 
  image(gm, this.pos.x+count*count/13000/piere-fxrand()*count*count/7000/piere, this.pos.y+count*count/10000/piere-fxrand()*count*count/5000/piere, size,size, this.pos.x, this.pos.y,Math.abs(size),Math.abs(size))

}
if (size==15){image(gm, this.pos.x, this.pos.y, size,size, this.pos.x, this.pos.y,Math.abs(size),Math.abs(size))}

   if (size!=15) {

   erase();
   if (size>28) {
   
    curve(this.pos.y-size, this.pos.y+fxrand()*5, this.pos.x, this.pos.y+fxrand()*5, this.prevPos.x, this.prevPos.y, this.prevPos.x+size,this.prevPos.x);


}
noErase();

if(size==5) {

push();
  stroke(clor);
  let wakki = fxrand()*width;
  let makki = fxrand()*height;
for (let al=0;al<10;al++){
  line(wakki ,this.pos.y,this.prevPos.x, this.prevPos.y);
  line( this.pos.x, makki , this.prevPos.x, this.prevPos.y);
}
pop();
}

if (size==10||size==20||size==16||size==25||size==13) {
//flow
push();
stroke(r,g,b,noise(size)*100);
curve(this.pos.x, this.pos.y, this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y, this.prevPos.x,this.prevPos.y);
pop();
}}


let pr= Math.floor(fxrand()*6);

if (size==15) {
if (this.prevPos.x<sz/pr){
if ((this.prevPos.y > (sz-sz/5-150*noise(this.prevPos.x)))||(this.prevPos.y < (100*noise(this.prevPos.x))))
{
 
    let clory=color(noise(size/2)*150,noise(size)*150,noise(size*2)*150);

    clory.setAlpha(Math.floor(map(noise(this.prevPos.y),0,1,70,160)));
    clor.setAlpha(Math.floor(map(noise(this.prevPos.y),0,1,70,160)));
    push();
    stroke(clor);

    line(this.prevPos.x*pr, this.prevPos.y, this.prevPos.x*pr+1 , this.prevPos.y-fxrand()*size*2);
     stroke(clory);

    line(this.prevPos.x*pr, this.prevPos.y, this.prevPos.x*pr+1 , this.prevPos.y-fxrand()*size*2);
 pop();
}}}
 


    this.updatePrev();
  }

  updatePrev() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  edges() {
    if (this.pos.x > width) {
      this.pos.x =  0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y =height;
      this.updatePrev();
    }

  }

}
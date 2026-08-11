//Pierre MARZIN 14/11/2018
// Trying to get realistic digital 2d trees
var arbres;
var narbres;
var nh, nv;
var noisescale=.003;
var maxlife=15;
function setup() {
  createCanvas(1024, 768, P2D);
  colorMode(HSB, 360, 255, 255);
  frameRate(200);
  smooth(4);
  background(random(1,255),random(1,255),random(1,255));
  noiseSeed(frameCount);
  arbres=[];
  nh=10;
  nv=5;
  narbres=0;
  for (var i=0; i<nh; i++) {
    createArbre(i, 0);
  }
  var tint=random(100, 360);
  for (var i=0; i<50; i++) {
    fill(tint-2*i, 20+i, 3*(55-i));
    noStroke();//
    stroke(50-i, 50, 120, 100);
    beginShape(CLOSE);
    vertex(width, 1.2*height);
    vertex(0, 1.2*height);
    var y=int(0.1*height+i*int(height/50));
    vertex(0, y);
    for (var j=0; j<1.1*width; j+=width/200) {      
      vertex(j+100-200*noise(noisescale*y, noisescale*j), y+100-200*noise(noisescale*j, noisescale*y));
    }
    endShape();
  }
}

function draw() {
  for (var i=0; i<nh; i++) {
    arbres[i].grow();
  }
}
function createArbre(i, j) {
  var x=.1*width+i*int(.9*width/nh);
  var y=int(.2*height+j*int(.8*height/nv));
  var start=createVector(x+100-200*noise(noisescale*y, noisescale*x), y+100-200*noise(noisescale*x, noisescale*y));
  arbres[i]=new Arbre(start, start.y/(height-130), i);//
  arbres[i].branches[0]=new Branche(start, 15*start.y/height, 0, 1, i);
  narbres++;
}
function mouseReleased() {
  setup();
}
function Arbre(start, coeff, index) {
  this.branches=[];
  this.coeff=coeff;
  this.teinte=random(20);
  this.index=index;  
  this.start=start;
  this.proba1=random(.8, 1);
  this.proba2=random(.8, 1);
  this.proba3=random(.2, .6);
  this.proba4=random(.2, .6);
  this.deviation=random(.2, .6);
}
Arbre.prototype.grow=function() {
  var found=false;
  for (var i=0; i<this.branches.length; i++) {
    var b=this.branches[i];    
    if (b.alive) {
      found=true;
      b.age++;
      b.update();
      b.display();
    }
  }
  if (!found) {    
    if (narbres<nh*nv) {
      var m=int(narbres/nh);
      var n=narbres%nh;
      createArbre(n, m);
    }
  }
}
function Branche(start, stw, angle, gen, index) {
  this.position=start.copy();
  this.start=start;
  this.stw=stw;
  this.gen=gen;  
  this.age=0;
  this.angle=angle;
  this.alive=true;
  this.speed=createVector(0, -3);
  this.index=index;
  this.maxlife=maxlife*random(.7, 1.2)*(.4+.2*start.y/height);
  this.proba1=arbres[this.index].proba1;
  this.proba2=arbres[this.index].proba2;
  this.proba3=arbres[this.index].proba3;
  this.proba4=arbres[this.index].proba4;
  this.deviation=arbres[this.index].deviation;
}
Branche.prototype.update=function() {
  if (this.age==int(this.maxlife/this.gen)) {
    this.alive=false;
    var brs=arbres[this.index].branches;
    var c=.5*this.start.y/height*sqrt(this.start.y/height);
    if (random(1)<this.proba1/this.gen&&this.stw>c)brs.push(new Branche(createVector(this.position.x, this.position.y), this.stw*random(.2, 1), this.angle+random(.7, 1.1)*this.deviation, this.gen+.1, this.index));//;//
    if (random(1)<this.proba2/this.gen&&this.stw>c)brs.push(new Branche(createVector(this.position.x, this.position.y), this.stw*random(.2, 1), this.angle-random(.7, 1.1)*this.deviation, this.gen+.1, this.index));
    if (random(1)<this.proba3/this.gen&&this.stw>c)brs.push(new Branche(createVector(this.position.x, this.position.y), this.stw*random(.5, .8), this.angle+random(.2, 1)*this.deviation, this.gen+.1, this.index));
    if (random(1)<this.proba4/this.gen&&this.stw>c)brs.push(new Branche(createVector(this.position.x, this.position.y), this.stw*random(.5, .8), this.angle-random(.2, 1)*this.deviation, this.gen+.1, this.index));
  } else {
    this.speed.x+=random(-.5, .5);
  }
}
Branche.prototype.display=function() {  
  var c=arbres[this.index].coeff;  
  var st=arbres[this.index].start;
  var x0=this.position.x;
  var y0=this.position.y;
  this.position.x+=-this.speed.x*cos(this.angle)+this.speed.y*sin(this.angle);
  this.position.y+=this.speed.x*sin(this.angle)+this.speed.y*cos(this.angle);  
  push();
  stroke(arbres[this.index].teinte+this.age+10*this.gen, 0, 0, .03);//
  strokeWeight(map(this.age, 0, this.maxlife, this.stw*1.3, this.stw)); 
  translate(st.x, st.y);
  var lx0=x0-st.x;
  var ly0=y0-st.y;
  var lx=this.position.x-st.x;
  var ly=this.position.y-st.y;
  rotate(.9);
  line(lx0*2*noise(noisescale*y0, noisescale*x0)*random(.9, 1.1), ly0*2*noise(noisescale*x0, noisescale*y0)*random(.9, 1.1), lx*2*noise(noisescale*this.position.y, noisescale*this.position.x)*random(.9, 1.1), ly*2*noise(noisescale*this.position.x, noisescale*this.position.y)*random(.9, 1.1));
  pop();
  strokeWeight(map(this.age, 0, this.maxlife, this.stw, this.stw*.6));
  stroke(arbres[this.index].teinte+this.age+20*this.gen, 175*c, 150+20*this.gen, 10*c);//
  line(x0, y0, this.position.x, this.position.y); 
  stroke(arbres[this.index].teinte+this.age+10*this.gen, 100*c, 50+20*this.gen, 5*c);//
  strokeWeight(map(this.age, 0, this.maxlife, this.stw, this.stw*.6));
  line(x0, y0, this.position.x, this.position.y);
}
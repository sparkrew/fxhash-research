let qTree;
let density;
let nesw;
let grid;
let BLURR;
let HVB;
let label01;
let label02;
var imgs = [];
var numIMG = 12;
var palette = [];


function preload() {
  for (var i=0; i<numIMG; i++) {
    imgs[i] = loadImage("./pic/pic-"+i+".png"); 
  }
}

function setup() {
  createCanvas(windowWidth, windowWidth);
  
  palette = [
    color('white'),
    color('lime'),
    color('aqua'),
    color('yellow'),
    color('violet')]
  ;
  
  let boundary = new Rectangle(windowWidth/2, windowWidth/2, windowWidth/2, windowWidth/2);
  qTree = new QuadTree(boundary,4);
  
  density = ceil(3+fxrand()*(99-3));
  nesw = floor(fxrand()*2);
  HVB = floor(fxrand()*3);
  BLURR = ceil(1+fxrand()*(2-1));
                  
  grid = new Grid(density);
   
  label01 = new Label01(nesw,palette[floor(fxrand()*palette.length)]);
  
  label02 = new Label02(nesw,imgs[floor(fxrand()*imgs.length)]);

  for(let i = 0; i < 3+fxrand()*(11-3); i++){
    let p = new Point(fxrand()*width, fxrand()*height);
    qTree.insert(p);
  }
  
  qTree.show();
  
  noLoop();
}

function draw(){
  background(255);
  qTree.show();
  
  filter(INVERT);
  filter(BLUR, BLURR);
  filter(POSTERIZE, 2);

  switch(HVB){
    case 0:
      grid.show();    
      break;
    case 1:
      push();
      translate(width, 0);
      rotate(PI/2);
      grid.show();
      pop();  
      break;
    case 2:
      grid.show();  
      push();
      translate(width, 0);
      rotate(PI/2);
      grid.show();
      pop();     
      break;
    default:
      //
      break;
  }
    
  label01.show();
  tint(palette[floor(fxrand()*palette.length)]);
  label02.show();
  
  noFill();
  stroke(0);
  strokeWeight(width/16);
  rect(width/2, height/2, width,height);
  
}

class Point {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}

class Rectangle {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  
  contains(point){
    return(point.x > this.x - this.w &&
           point.x <= this.x + this.w &&
           point.y > this.y - this.h &&
           point.y <= this.y + this.h);
  }
}

class QuadTree {
  constructor(boundary, n){
    this.boundary = boundary;
    this.capacity = n;
    this.points = [];
    this.divided = false;
  }
  
  subdivide(){
    let x =this.boundary.x;
    let y =this.boundary.y;
    let w =this.boundary.w;
    let h =this.boundary.h;
    
    let ne = new Rectangle(x + w /2, y - h/2, w/2, h/2);
    let nw = new Rectangle(x - w /2, y - h/2, w/2, h/2);
    let se = new Rectangle(x + w /2, y + h/2, w/2, h/2);
    let sw = new Rectangle(x - w /2, y + h/2, w/2, h/2);
    this.northeast = new QuadTree(ne, this.capacity);
    this.northwest = new QuadTree(nw, this.capacity);
    this.southeast = new QuadTree(sw, this.capacity);
    this.southwest = new QuadTree(se, this.capacity);
    this.divided = true;
  }
  
  insert(point){
    
    if(!this.boundary.contains(point)){
      return;
    }
    
    if(this.points.lenght < this.capacity) {
      this.point.push(point);
    } else {
      if(!this.divided){
        this.subdivide();
        this.divided = true;
      }
      this.northeast.insert(point);
      this.northwest.insert(point);
      this.southeast.insert(point);
      this.southwest.insert(point);
    }
  }
  
  show(){
    let x =this.boundary.x;
    let y =this.boundary.y;
    let w =this.boundary.w;
    let h =this.boundary.h;
    
    let r =this.boundary.r;
    r = floor(fxrand()*numIMG);
    
    stroke(1);
    strokeWeight(1);
    noFill();
    rectMode(CENTER);
    //rect(x,y,w*2,h*2);
    circle(x, y, w*2);
    //tint(255, 126);
    
    push();
    
    scale(1.5+fxrand()*(windowWidth/150-1.5));
    translate(width/3.5, -height/3.5);
    rotate(PI / 7.0);
    image(imgs[r], x-w/2, y-h, w, h*2);
    
    pop();
   
    if(this.divided){
      this.northeast.show();
      this.northwest.show();
      this.southeast.show();
      this.southwest.show();
    }
  }
}

class Grid {
  constructor(density){
    this.density = density;
  }
  
  show(nesw){
    noFill();
    stroke(255);
    strokeWeight(2);
    
    for(var i=0; i<width; i=i+this.density){
      line(i,0, i, height);
    } 
    
  }
}

class Label01 {
  constructor(nesw,color){
    this.nesw = nesw;
    this.color = color;
  }
  
  show(nesw){
    
    rectMode(CENTER);
    fill(this.color);
    noStroke();
    push();
    
    switch (this.nesw) {
    case 0:
      //      
      break;
    case 1:
      translate(width,0);  
      rotate(PI/2);  
      break;
    default:
      //  
    }
    
    var barHeight = height/(6+fxrand()*(9-6));
    
    rect(width/2,0, width, barHeight);
    
    textSize(17);
    fill(255);
    stroke(0);
    strokeWeight(2.5);
    
    translate(width/17, barHeight/2 + windowWidth/25);
    
    text(str(fxrand()*100).substring(0, floor(7+fxrand()*(15-7))),0,0);

    pop();
  }
}

class Label02 {
  constructor(nesw,img){
    this.nesw = nesw;
    this.img = img;
  }
  
  show(nesw){
    push();
    
    var steps = ceil(fxrand()*5);
    
    translate(-5*steps,-5*steps);
    
    for(var i=0; i<steps; i++){
      image(this.img, width/4, 0, width/2, height);
      translate(20,20);
    }
    
    pop();
  }
}

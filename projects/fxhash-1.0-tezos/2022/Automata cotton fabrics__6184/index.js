//Automata cotton fabrics by @beardcoded
var ca;
var rr,gg,bb;
var rr1,gg1,bb1;

var mode = 0;
var ruleset = [1,1,0,0,1,0,0,0];

var w = 100;
var h = 1000;
var cnv;
var count=0;
var cc = [];

var DEFAULT_SIZE = 500;
var ds=DEFAULT_SIZE;
var WIDTH = 0;
var HEIGHT = 0;
var DIM = Math.min(WIDTH, HEIGHT);
var M = DIM / DEFAULT_SIZE;

function resize(){
  WIDTH = windowWidth;
  HEIGHT = windowHeight;
  DIM = Math.min(WIDTH, HEIGHT);
  M = DIM / DEFAULT_SIZE;
}

let pg;
var fullImage;
var d;

window.onresize = function() {
  centerCanvas();
}

function centerCanvas() {
  var x = (windowWidth - DIM) / 2;
  var y = (windowHeight - DIM) / 2;
  cnv.position(x, y);
}


function set_values(){
  rr = new cauto(int(frand(255)),1);
  gg = new cauto(int(frand(255)),1);
  bb = new cauto(int(frand(255)),1);
  
  rr1 = new cauto(int(frand(255)),1);
  gg1 = new cauto(int(frand(255)),1);
  bb1 = new cauto(int(frand(255)),1);

  mode = int(frand(3));
  rep = int(frand_range(1,100));
  ca = new CA(ruleset);
  }

var step = 1;
var rep = 10;

function setup() {
  resize();
  cnv=createCanvas(DIM, DIM);
  cnv.style('display', 'block');
  centerCanvas();

  pg = createGraphics(ds, ds);
  pg.noStroke();
  pg.pixelDensity(1);
  d = pixelDensity();
  pg.colorMode(RGB, 255);
  set_values();
  step=1;
}


function draw() {
  ca.render();    
  ca.generate();
  
  if (ca.finished()) {  
    noLoop();
  }  
}

class cauto
{
  constructor(pr, rt){
    this.pos = pr;
    this.rate = rt;
  }
  
  rerate(rt){
    this.rate = int(frand(rt));
  }
  
  update_disc(){
    this.pos = this.pos + this.rate;
    if(this.pos > 255){
      this.pos = int(frand(255));
    }
    if(this.pos < 0){
      this.pos = int(frand(255));
    }
    return this.pos;
  }
  
  update(){
    this.pos = this.pos + this.rate;
    if(this.pos > 255){
      this.pos=254;
      this.rate = -this.rate;
    }
    if(this.pos < 0){
      this.pos=0;
      this.rate = -this.rate;
    }
    return this.pos;
  }
}

class CA {

  constructor(r) {
    this.rules = r;
    this.scl = 1;
    this.cell_size = ds/this.scl;
    this.cells = [];
    this.randomize();
    this.restart();

    if(mode===0){
      pg.background(0);
    }
    else if(mode===1){
      pg.background(255);
    }
    else{
      pg.background(255);
    }
    
  }
  
  setRules(r) {
    this.rules = r;
  }
  
  randomize() {
    for (var i = 0; i < 8; i++) {
      this.rules[i] = int(frand(2));
    }
  }
  
  restart() {
    for (var i = 0; i < this.cell_size; i+=step) {
      var t = int(frand(rep));
      if(t === 1){
        this.cells[i] = 1;
      }
      else
      {
        this.cells[i] = 0;
      }      
    }
    this.generation = 0;
  }

  generate() {
    var flip = int(frand(rep));
    if(flip===0)
    {
      this.randomize();
    }
    var nextgen = [];
    for (var i = 1; i < this.cell_size-1; i+=step) {
      var left = this.cells[i-1];   
      var me = this.cells[i];       
      var right = this.cells[i+1];  
      nextgen[i] = this.executeRules(left,me,right); 
    }
    for (var i = 1; i < this.cell_size-1; i+=step) {
      this.cells[i] = nextgen[i];
    }
    this.generation += 1;
  }
  
  render() {    
    for (var i = 0; i < this.cell_size; i+=step) {
      if (this.cells[i] === 0) {
        if(mode === 0){
          pg.fill(0);
        }
        else if(mode===1){
          pg.fill(255);
        }
        else
        {
          pg.fill(rr1.pos,gg1.pos,bb1.pos);
        }
      }
      else { 
        pg.fill(rr.update(),gg.update(),bb.update());
      }
      
      pg.rect(i*this.scl,this.generation*this.scl, this.scl,this.scl);
    }

    image(pg,0,0,DIM,DIM);
  }
  
  executeRules = function(a, b, c) {
    if (a === 1 && b === 1 && c === 1) { return this.rules[0]; }
    if (a === 1 && b === 1 && c === 0) { return this.rules[1]; }
    if (a === 1 && b === 0 && c === 1) { return this.rules[2]; }
    if (a === 1 && b === 0 && c === 0) { return this.rules[3]; }
    if (a === 0 && b === 1 && c === 1) { return this.rules[4]; }
    if (a === 0 && b === 1 && c === 0) { return this.rules[5]; }
    if (a === 0 && b === 0 && c === 1) { return this.rules[6]; }
    if (a === 0 && b === 0 && c === 0) { return this.rules[7]; }
    return 0;
  }
  
  finished() {
    if (this.generation > (ds)/this.scl) {
       return true;
    } else {
       return false;
    }
  }
}

function keyPressed() {
    //save image 's'
    if (keyCode === 83) {
      saveCanvas('wolfram cotton sarees by beardcoded -'+fxhash+'.png');
    }
  }

  function frand(n){
    var temp = map(fxrand(),0,1,0,n);
    return temp;
  }
  
  function frand_range(n1,n2){
    var temp = map(fxrand(),0,1,n1,n2);
    return temp;
  }
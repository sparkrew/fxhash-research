// Currency 3.0
// This is 3rd work of a series of conceptual artworks about art and valuation.
// Each token has an individual value of 1 FXT, but it never looks the same.
// Each time the token is loaded, it renders a different image.

// Currency 3.0 @beardcoded

var DEFAULT_SIZE = 600;
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
window.onresize = function() {
  centerCanvas();
}
function centerCanvas() {
  var x = (windowWidth - DIM) / 2;
  var y = (windowHeight - DIM) / 2;
  cnv.position(x, y);
}


function setup() {
  resize();
  cnv=createCanvas(DEFAULT_SIZE*M, DEFAULT_SIZE*M);
  cnv.style('display', 'block');
  centerCanvas();
  pixelDensity(pixelDensity());
  colorMode(RGB, 255);
  init();
}

var writer;
function init(){
  writer = new BStyle(random(0,DEFAULT_SIZE), random(0,DEFAULT_SIZE));
}
const message = "This is not a coin";
var itxt = 1;

var r=0;

var pointsx = [];
var pointsy = [];
var pointshx1 = [];
var pointshy1 = [];
var pointshx2 = [];
var pointshy2 = [];

class BStyle
{
  constructor(xmm,ymm) {
    this.setset(xmm,ymm);
  }

  setset(xmm,ymm){
    this.x=xmm;
    this.y=ymm;

    this.szx = DEFAULT_SIZE/random(1,10);
    this.szy = DEFAULT_SIZE/random(1,10);
    this.xc1 = random(-this.szx,this.szx);
    this.xc2 = random(-this.szx,this.szx);
    this.xc3 = random(-this.szx,this.szx);
    this.yc1 = random(-this.szy,this.szy);
    this.yc2 = random(-this.szy,this.szy);
    this.yc3 = random(-this.szy,this.szy);
    this.xd1 = random(-this.szx,this.szx);
    this.xd2 = random(-this.szx,this.szx);
    this.xd3 = random(-this.szx,this.szx);
    this.yd1 = random(-this.szy,this.szy);
    this.yd2 = random(-this.szy,this.szy);
    this.yd3 = random(-this.szy,this.szy);
    this.zd1 = random(-this.szx,this.szx);
    this.zd2 = random(-this.szx,this.szx);
    this.zd3 = random(-this.szx,this.szx);
    this.zc1 = random(-this.szy,this.szy);
    this.zc2 = random(-this.szy,this.szy);
    this.zc3 = random(-this.szy,this.szy);

    this.t = random(0.1,1000);
    this.incr = random(0.1,1000);


    this.config=int(random(5));
    this.config2=int(random(2));
    // this.config = int(random(2));
    this.rr = this.ox1();
    this.gg = this.oy1();
    this.bb = this.oz1();
  }

  getLocColour(){
    this.t+=this.incr;

    if(this.config===0){
      return color(this.rr,this.oy1()%255,this.oz1()%255);
    }else if(this.config===1){
      return color(this.ox1()%255,this.gg,this.oz1()%255);
    }else if(this.config===2){
      return color(this.ox1()%255,this.oy1()%255,this.bb);
    }
    else if(this.config===3){
      var rf = random(1,255);
      // var rf=255;
      return color(this.ox1()%rf,this.oy1()%rf,this.oz1()%rf);
    }
    else{
      return color(255-this.ox1(),255-this.oy1(),255-this.oz1());
    }
  }

  ox1(){
    return sin(this.t/this.xd1)*this.xc1+cos(this.t/this.xd2)*this.xc2+tan(this.t/this.xd3)*this.xc3;
  }

  oy1(){
    return sin(this.t/this.yd1)*this.yc1+cos(this.t/this.yd2)*this.yc2+tan(this.t/this.yd3)*this.yc3;
  }

  oz1(){
    return sin(this.t/this.zd1)*this.zc1+cos(this.t/this.zd2)*this.zc2+tan(this.t/this.zd3)*this.zc3;
  }
}

function drawTest(){
  for(var j=0; j<height; j++){
    for(var i=0; i<width; i++){
      var cc0=writer.getLocColour();
      stroke(red(cc0),green(cc0),blue(cc0));
      point(i,j);
    }
  }
}

function drawHatch(){
  r=width/2;  
  r=r/2;
  var t=0;
  var dh = (width/2)+r;
  var pdh = (width/2)-r;
  // var htchIncr = 2*M;
  var htchIncr = 1;
  
  for(var i=pdh; i<dh; i++){
    pointsx[i] = i;
    pointsy[i] = i
    var a = abs(width/2-i);
    var b = sqrt(r*r-a*a);
    var p1 = createVector((width/2)-b, i);
    var p2 = createVector((width/2)+b, i);
    rendLine(p1,p2,b);
  }
}

function rendLine(p1,p2,b){  
  if(writer.config2===0){
    for(var j=width/2-r; j<=width/2+r; j++){
    var cc0=writer.getLocColour();
    stroke(red(cc0),green(cc0),blue(cc0));

    if(j>=p1.x && j<=p2.x){
      point(j,p1.y);
    }
  }  
  }
  else
  {
    for(var j=p1.x-r; j<=p2.x+r; j++){
    var cc0=writer.getLocColour();
    stroke(red(cc0),green(cc0),blue(cc0));

    if(j>=p1.x && j<=p2.x){
      point(j,p1.y);
    }
  }  
  }
}

function draw() {
  background(255);
  noFill();
  rectMode(CENTER);
  r=width/2;  
  r=r/2;
  drawHatch();
  textSize(width/10);
  textAlign(CENTER, CENTER);
  if(writer.config===4){
    fill(0);
  }else{
    fill(255);
  }

  itxt = round(random(0.1,9.9),1);
  text(itxt, width/2,width/2-(width/10)*0.5);
  textSize(width/16);
  text('FXT', width/2,width/2+(width/10)*0.5);

  textSize(width/40);
  translate(width/2, height/2);
  var arclength = 0;
  r=width/2;  
  r=r/2.2;
  for(i=0; i<message.length; i++){
    var currentChar = message.charAt(i);
    var w = textWidth(currentChar);
    arclength -= w/2;
    var theta = PI -QUARTER_PI -0.4+ arclength / r;    
    push();
    translate(r*cos(theta), r*sin(theta));
    rotate(theta-PI/2 );
    // fill(255);
    text(currentChar, 0, 0);
    pop();
    arclength -= w / 2;
  }

  textSize(width/45);
  noStroke();
  var arclength = 0;
  r=width/2;  
  r=r/2.2;
  for(i=0; i<fxhash.length; i++){
    var currentChar = fxhash.charAt(i);
    var w = textWidth(currentChar);
    arclength -= w/2;
    var theta = TWO_PI + PI/9 -0.45+ arclength / r;    
    push();
    translate(r*cos(theta), r*sin(theta));
    rotate(theta-PI/2 );
    text(currentChar, 0, 0);
    pop();
    arclength -= w / 2;
  }

  noLoop();
}

function mouseClicked(){
  writer.setset(writer.x, writer.y);
  loop();
}
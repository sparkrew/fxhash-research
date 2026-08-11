var DSW = 1200;
var DSH = 1200;
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var DIM = Math.min(WIDTH, HEIGHT);

function rend(){  
  image(pg,0,0,ww,hh);
}

window.onresize = function() {
  centerCanvas();
}

function centerCanvas() {
  var x = (windowWidth - ww) / 2;
  var y = (windowHeight - hh) / 2;
  cnv.position(x, y);
}


var cnv;
let font;

var cx, cy;
var ww, hh;
var opt = 0;
function makeCanvas(){

  if(WIDTH>=HEIGHT){
    hh=HEIGHT;
    ww = hh;
  }
  else{
    ww = WIDTH;
    hh = ww;
  }

  var x = (WIDTH-ww)/2;
  var y = (HEIGHT-hh)/2;
  cx=x;
  cy=y;

  cnv = createCanvas(ww,hh);
  cnv.style('display', 'block');
  cnv.position(x,y);
}

let pg;

function setup() {
  makeCanvas();
  pixelDensity(3);
  background(255);

  pg = createGraphics(DSW,DSH);
  pg.background(255);
  pg.pixelDensity(pixelDensity());

  let rr = DSW*DSH;
  pg.colorMode(RGB,255);

  init();
}

var flip = [1,1];
class ParamStyle
{
  constructor(xmm,ymm) {

    this.x=xmm;
    this.y=ymm;
    this.z=1;

    this.px=xmm;
    this.py=ymm;

    this.reInit();
  }


    reInit(){

      this.x=frand_range(1,DSW);
      this.y=frand_range(1,DSH);
      this.z=1;

      this.px=this.x;
      this.py=this.y;
      this.incr = frand_range(0.1,3);
      this.inc1 = frand_range(0.1,3);
      this.inc2 = frand_range(0.1,3);
      this.inc3 = frand_range(0.1,3);
      
      this.t=frand_range(0.1,3);
      this.t1=frand_range(0.1,3);

      this.szx = DSW/10;
      this.szy = DSH/10;

      this.xc1 = frand_range(0.1,this.szx)*1.5* flip[frandi(2)];
      this.xc2 = frand_range(0.1,this.szx)*1.5* flip[frandi(2)];
      this.xc3 = frand_range(0.1,this.szx)*1.5* flip[frandi(2)];
      this.yc1 = frand_range(0.1,this.szy)*1.5* flip[frandi(2)];
      this.yc2 = frand_range(0.1,this.szy)*1.5* flip[frandi(2)];
      this.yc3 = frand_range(0.1,this.szy)*1.5* flip[frandi(2)];

      this.xd1 = frand_range(0.1,this.szx)* flip[frandi(2)];
      this.xd2 = frand_range(0.1,this.szx)* flip[frandi(2)];
      this.xd3 = frand_range(0.1,this.szx)* flip[frandi(2)];
      this.yd1 = frand_range(0.1,this.szy)* flip[frandi(2)];
      this.yd2 = frand_range(0.1,this.szy)* flip[frandi(2)];
      this.yd3 = frand_range(0.1,this.szy)* flip[frandi(2)];

      this.zd1 = frand_range(0.1,this.szx)* flip[frandi(2)];
      this.zd2 = frand_range(0.1,this.szx)* flip[frandi(2)];
      this.zd3 = frand_range(0.1,this.szx)* flip[frandi(2)];
      this.zc1 = frand_range(0.1,this.szy)*1.5* flip[frandi(2)];
      this.zc2 = frand_range(0.1,this.szy)*1.5* flip[frandi(2)];
      this.zc3 = frand_range(0.1,this.szy)*1.5* flip[frandi(2)];

      this.tansup = frand_range(0.01, 0.5);

      this.donebkg=false;

      this.config=frandi(8);

      this.rr = frandi(255);
      this.gg = frandi(255);
      this.bb = frandi(255);

      this.jmbl = frandi(6);

      this.prt=255;

    }

    getLoc(){
    this.px = this.x;
    this.py= this.y;
    this.t+=this.incr;

     
    if(this.jmbl === 0){
      this.x = this.ox1();
      this.y = this.oy1();
      this.z = this.oz1();
    }else if(this.jmbl === 1){
      this.x = this.oy1();
      this.y = this.oz1();
      this.z = this.ox1();
    }else if(this.jmbl === 2){
      this.x = this.oz1();
      this.y = this.ox1();
      this.z = this.oy1();
    }else if(this.jmbl === 3){
      this.x = this.ox1();
      this.y = this.oz1();
      this.z = this.oy1();
    }else if(this.jmbl === 4){
      this.x = this.oz1();
      this.y = this.oy1();
      this.z = this.ox1();
    }else if(this.jmbl === 5){
      this.x = this.oy1();
      this.y = this.ox1();
      this.z = this.oz1();
    }


    if(this.config===0){
      return color(this.rr,this.y%255,this.z%255);
    }else if(this.config===1){
      return color(this.x%255,this.gg,this.z%255);
    }else if(this.config===2){
      return color(this.x%255,this.y%255,this.bb);
    }
    else if(this.config===3){
      return color(this.x%255,this.y%255,this.z%255);
    }
    else if(this.config===4){
      return color(255-this.rr,255-(this.y%255),255-(this.z%255));
    }else if(this.config===5){
      return color(255-(this.x%255),255-(this.gg),255-(this.z%255));
    }else if(this.config===6){
      return color(255-(this.x%255),255-(this.y%255),255-this.bb);
    }   
    else if(this.config===7){
      return color(255-(this.x%255),255-(this.y%255),255-(this.z%255));
    } 
  }


  ox1(){
    return (sin(this.t/this.xd1)*this.xc1+cos(this.t/this.xd2)*this.xc2+tan(this.t/this.xd3)*this.xc3);
  }

  oy1(){
    return (sin(this.t/this.yd1)*this.yc1+cos(this.t/this.yd2)*this.yc2+tan(this.t/this.yd3)*this.yc3);
  }

  oz1(){
    return (sin(this.t/this.zd1)*this.zc1+cos(this.t/this.zd2)*this.zc2+tan(this.t/this.zd3)*this.zc3);
  }

}

var objs = 10;
var writers = [];
const bod = 31;


function init()
{
  var xc=frand_range(1,DSW);
  var yc=frand_range(1,DSH);
  var cc0;
  var cc1;
  var cc2;
  var counter = 0;
  writers[0] = new ParamStyle(xc, yc);
  writers[1] = new ParamStyle(frand_range(1,DSW), frand_range(1,DSH));
  writers[2] = new ParamStyle(frand_range(1,DSW), frand_range(1,DSH)); 

  for(j=0; j<DSH; j++){
    for(i=0; i<DSW; i++){
      cc0 = color(writers[0].getLoc());
      pg.strokeWeight(1);
      pg.stroke(red(cc0),green(cc0), blue(cc0));
      pg.point(i,j);
    }
  }

  rend();
  recurse(0,DSW,0, DSH);
  // recurse(0,DSW,0, DSH);

  rend();

  limit=frandi_range(7,35);
  myblock = frandi(8);
}

let blocks = [10,20,40,80,160,320,640,1280];
var myblock = 0;

function recurse(x,x1,y,y1){
  recurse_fin(x,x1,y,y1);
  
  var gmb = frandi(2);
    if(gmb===0 && x1-x < x1/3 && y1-y < y1/3) return;

  if(x1-x > int(blocks[myblock]) && y1-y > int(blocks[myblock])){
    var xt = frand_range(x,x1);
    var yt = frand_range(y,y1);
            
    var dee=frandi(4);
    if(dee===0){
      recurse(x,xt,y,yt);
      recurse(xt,x1,yt,y1);
    }if(dee===1){
      recurse(xt,x1,y,yt);
      recurse(x,xt,yt,y1);
    }
    else if(dee===2){
      recurse(x,xt,y,y1);
      recurse(xt,x1,y,y1);
    }else if(dee===3){
      recurse(x,x1,y,yt);
      recurse(x,x1,yt,y1);
    }

  }else{
    return;
  }
}


function recurse_fin(x,x1,y,y1){      
      var ttmp = writers[2].getLoc();
      pg.stroke(red(ttmp),green(ttmp), blue(ttmp));
      pg.strokeWeight(1);

      pg.line(x,y,x1,y);
      pg.line(x1,y,x1,y1);
      pg.line(x1,y1,x,y1);
      pg.line(x,y1,x,y);

      var sl1 = frandi_range(-2,2);
      var sl2 = frandi_range(-2,2);
      
      var wp = new ParamStyle(frand_range(1,DSW), frand_range(1,DSH));

      if(wp.x===undefined || wp.y===undefined || wp.z===undefined){
            wp = new ParamStyle(frand_range(1,DSW), frand_range(1,DSH));
          }

      var opa = frandi(255,255);

      for(var i=y; i<y1; i++){
        for(var j=x; j<x1; j++){
          var ccd = wp.getLoc();
          var ccc = color(ccd);
          pg.strokeWeight(1);
          pg.stroke(red(ccc),green(ccc), blue(ccc), opa);
          pg.point(j,i);          
        }
      }
}


var ppcounter = 0;
var limit = 2;
function draw(){
  if(ppcounter < limit){

      var sl1 = frandi_range(-2,2);
      var sl2 = frandi_range(-2,2);
      
      var wp = new ParamStyle(frand_range(1,DSW), frand_range(1,DSH));
      if(wp.x===undefined || wp.y===undefined || wp.z===undefined){
            wp = new ParamStyle(frand_range(1,DSW), frand_range(1,DSH));
          }
      var varyby = 0;

      var opa = frandi(255,255);
      var choice = frandi(2);
      var varyby = frandi_range(0,2);
      var carpx = frand_range(bod,DSW-bod);
      var carpx1 = frand_range(carpx,DSW-bod);

      var carpy = frand_range(bod,DSH-bod);
      var carpy1 = frand_range(carpy,DSH-bod);
      var varyx = 0;
      var varyy = 0;

      for(var i=carpy; i<carpy1; i++){
        for(var j=carpx; j<carpx1; j++){
          var ccd = wp.getLoc();
          var ccc = color(ccd);
            varyx = frandi_range(-varyby,varyby);
            varyy = frandi_range(-varyby,varyby);

          pg.strokeWeight(1);
          pg.stroke(red(ccc),green(ccc), blue(ccc), opa);
          pg.point(j+varyy,i+varyx);
        }
        carpx+=sl1;
        carpx1+=sl2;
        // varyy += frandi_range(-varyby,varyby);
      }

      rend();
      ppcounter+=1;
    }
    else{
      noLoop();
      fxpreview();
    }
}


function keyPressed() {
    if (keyCode === 83) {
      save(pg,'interference_architecture_'+fxhash+'.jpeg');    
    }
  }


function frandi(n){
  var temp = int(map(fxrand(),0,1,0,n));
  return temp;
}

function frandi_range(n1,n2){
  var temp = int(map(fxrand(),0,1,n1,n2));
  return temp;
}

function frand(n){
  var temp = map(fxrand(),0,1,0,n);
  return temp;
}

function frand_range(n1,n2){
  var temp = map(fxrand(),0,1,n1,n2);
  return temp;
}
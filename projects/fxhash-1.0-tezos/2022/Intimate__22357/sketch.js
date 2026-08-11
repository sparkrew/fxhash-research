var circleX = 20;
var circleY = 20;
var origcanvas,canvasSize;
var myGraphic,myGraphicL;
let fxcanvas = fx.canvas();
let density=3;
var points=[120,100,150,100,80,90];
var curves=[];
var contours=[];
var isInit=true;
var keepplaying=false;
var stage=0;
var pdstart=false;
var basenote;
var turnofftimeout,fadeouttimeout,fadeintimeout,playnotetimeout;
var callfxpreview=0;
var calledfxpreview=false;
var colorset=[
  [191, 95, 95],
  [180, 80, 95],
  [56, 97, 95],
  [50, 98, 95],
  [11, 47, 95]
];

class contour{
  constructor(posx,posy,points){
    this.curves=[];
    this.size=points.length;
    this.color=colorset[floor(fxrand()*5)];
    for(var i=0;i<this.size;i++){
      for(var j=0;j<10;j++){
        var m=cubic_interpolate(points[(i+this.size-1)%this.size],points[(i+this.size)%this.size],points[(i+this.size+1)%this.size],points[(i+this.size+2)%this.size],j/10);
        var iter=i*10+j;
        var x=cos(iter/(this.size*10)*TWO_PI)*m+posx;
        var y=sin(iter/(this.size*10)*TWO_PI)*m+posy;

        this.curves.push(createVector(x,y));
      }   
    }
  }
}

function setup() {
    canvasSize=min(windowWidth,windowHeight);
    origcanvas=createCanvas(canvasSize, canvasSize);
    myGraphic=createGraphics(canvasSize,canvasSize);
    myGraphic.colorMode(HSB,360,100,100);
    myGraphic.pixelDensity(density);
    myGraphicL=createGraphics(canvasSize,canvasSize);
    myGraphicL.colorMode(HSB,360,100,100);
    myGraphicL.pixelDensity(2);
    colorMode(HSB,360,100,100);
    myGraphic.blendMode(DIFFERENCE);
    myGraphicL.blendMode(DIFFERENCE);
    basenote=floor(fxrand()*12);
    for(var i=0;i<500;i++){
      var posx=fxrand()*canvasSize;
      var posy=fxrand()*canvasSize;
      var randomscale=fxrand()*canvasSize;
      var mypoints=[];
      for(var j=0;j<10;j++){
        mypoints.push(fxrand()*randomscale+randomscale);
      }
      contours.push(new contour(posx,posy,mypoints));

    }
}

function draw() {

  //noLoop();
  
  if(stage==0){  myGraphic.noStroke();
    for(var i=0;i<contours.length;i++){
      var my_contour=contours[i];
      myGraphic.fill(contours[i].color);
      myGraphicL.fill(contours[i].color);
      myGraphic.beginShape();
      myGraphicL.beginShape();
      for(var j=0;j<my_contour.curves.length;j++){
        myGraphic.vertex(my_contour.curves[j].x,my_contour.curves[j].y);
        myGraphicL.vertex(my_contour.curves[j].x,my_contour.curves[j].y);
      }
      myGraphic.endShape(CLOSE);
      myGraphicL.endShape(CLOSE);

    }
    stage=1;
    
  }else if(stage==1){
      var texture = fxcanvas.texture(myGraphic.elt);
      fxcanvas.draw(texture);
      var a=4;
      fxcanvas.unsharpMask(50*density*a,       1*density).noise(0.008*density*a).ink(0.1*density).ink(0.2*density).ink(0.3*density);
      fxcanvas.brightnessContrast(-0.5, 0.5);
      var huerandom=1;
      fxcanvas.hueSaturation(huerandom, -0.9);
      fxcanvas.update();
      origcanvas.blendMode(SCREEN);


      origcanvas.drawingContext.drawImage(fxcanvas,0,0,canvasSize,canvasSize);
      
    if(callfxpreview!=10){
      callfxpreview++;
    }else{
      if(calledfxpreview==false){
        fxpreview();
        console.log(fxhash);
        callfxpreview++;
        
      }

    }


    
  }else if(stage==2){
      var texture = fxcanvas.texture(myGraphicL.elt);
      fxcanvas.draw(texture);
      var a=fxrand()*3;
      fxcanvas.unsharpMask(100*density*a,       1*density).noise(0.01*density*a).ink(0.1*density).ink(0.2*density).ink(0.3*density);
      fxcanvas.brightnessContrast(-0.5, 0.5);
      var huerandom=fxrand()*2-1;
      fxcanvas.hueSaturation(huerandom, -0.9);
      fxcanvas.update();
      bmode=floor(fxrand()*3);
      if(bmode==0){
        origcanvas.blendMode(SCREEN);
      }else if(bmode==1){
        origcanvas.blendMode(DIFFERENCE);
      }else if(bmode==2){
        origcanvas.blendMode(EXCLUSION);
      }

      origcanvas.drawingContext.drawImage(fxcanvas,0,0,canvasSize,canvasSize);
    
  }

}

function cubic_interpolate( y0, y1, y2, y3, mu ) {

   var a0, a1, a2, a3, mu2;

   mu2 = mu*mu;
   a0 = y3 - y2 - y0 + y1; //p
   a1 = y0 - y1 - a0;
   a2 = y2 - y0;
   a3 = y1;

   return ( a0*mu*mu2 + a1*mu2 + a2*mu + a3 );
}

function keyPressed() {
  if (keyCode === 65) {
      playnote();
  }
}

function mouseClicked() {
  if (stage==1) {
      if(pdstart==false){
        Pd.start();
        pdstart=true;
      }
      keepplaying=true;
      playnote();
      loop();
      stage=2;
      draw();
    } else {
      stage=1;
      clearTimeout(playnotetimeout);
      Pd.send("fadeout",["bang"]);
      keepplaying=false;

    }
}

function playnote(){
      if(keepplaying==true){
        clearTimeout(fadeouttimeout);
        clearTimeout(turnofftimeout);
        clearTimeout(playnotetimeout);
        
        var base1=fxrand()*12+40+basenote;
        var base2=fxrand()*12+44+basenote;
        var base3=fxrand()*12+48+basenote;
        var note=fxrand()*12+52+basenote;
        var diff=fxrand()*0.2+1;

        Pd.send("base1",[base1]);
        Pd.send("base2", [base2]);
        Pd.send("base3", [base3]);
        Pd.send("note", [note]);
        Pd.send("diff", [diff]);

        Pd.send("vol", [0.0]);

        Pd.send("fadein",["bang"]);
        fadeouttimeout=setTimeout(offplaynote,3000);

        
      }
      if(keepplaying==true){
        playnotetimeout=setTimeout(playnote,6000);      
      }else{
        turnofftimeout=setTimeout(turnoff,6000);      
      }

}

function turnoff(){
      Pd.send("vol", [0.0]);
}

function offplaynote(){
      Pd.send("fadeout",["bang"]);
}
let soundswitch=0;
let pointwindow=[];
let building=[];
let car=[];
let carposition=[];
let rndLR=fxrand();
let racemode=Math.floor(fxrand()*10);
let carcount=1+Math.floor(fxrand()*3);
let wheel=[];
let wd=[];
let basecolor=10+fxrand()*40;
let rectsize=100;
let refreshtime=0;

function preload() {
  inconsolata = loadFont('assets/SourceSansPro-Black.ttf');
}



function setup() {
  
  createCanvas(windowWidth, windowHeight,WEBGL);
  //makerect(pointwindow,createVector(10, 10),100);
  colorMode(HSB, 100);
  background(0);
  strokeWeight(1.5);
  translate(0,100);
  stroke(basecolor,100,100);
  for(let i=0;i<10;i++){
    let floor=Math.floor(fxrand()*15)+2;
    let ws=Math.floor(fxrand()*2)+2;

    push();
    translate((i/10-0.45)*windowWidth,-floor*12);
    makebuilding(floor,ws);
    pop();
  }
  carposition=[(0.5-fxrand())*windowWidth,(0.5-fxrand())*windowWidth,(0.5-fxrand())*windowWidth,(0.5-fxrand())*windowWidth]

  for(let i=0;i<carcount;i++){
      let carx=carposition[i];
      push();
      translate(carx,60+80*i);
      onecar();
      pop();
  }

}

function draw() {
  textFont(inconsolata);
  textSize(15);
  textAlign(CENTER, CENTER);

  
  refreshtime+=deltaTime;
  translate(0,100);
  if(focused){
    if(soundswitch==0){
      Pd.start(); 
      soundswitch=1;        
    }
    let rndLR=fxrand();
    if(refreshtime>180){
      background(0);
      rndLR=fxrand();
      scene();

      if(rndLR<0.5){
        Pd.send("slapL",['bang']);
      }else{
        Pd.send("slapR",['bang']);
      }
      let seed=fxrand()*180;
      let rnd=80+seed;
      Pd.send("bfreq1",[190+rnd/5]);
      
      Pd.send("bfreq2",[110+rnd/5]);

      refreshtime=0;
    }
  }else{
    soundswitch=0;
    Pd.stop();
    text('Click', 0, -380);
  } 
}
function scene(){
  for(let i=0;i<10;i++){
        let distance=abs(rndLR-(i/10));
    
        let rdistance=(1-distance);
        let floor=Math.floor(fxrand()*20*rdistance)+2;
        let ws=Math.floor(fxrand()*2)+2;

        push();
        translate((i/10-0.45)*windowWidth,-floor*12);
        makebuilding(floor,ws);
        pop();
      }
      for(let i=0;i<carcount;i++){
        switch(racemode){
          case 0:
          case 1:
          case 2:
            carposition=[(0.5-fxrand())*windowWidth,(0.5-fxrand())*windowWidth,(0.5-fxrand())*windowWidth,(0.5-fxrand())*windowWidth]

                              break;
          default:
            carposition[i]+=(0.5-carposition[i]/windowWidth-fxrand())*60; 
            break;
        }
        let carx=carposition[i];
        push();
        translate(carx,60+80*i);
        onecar();
        pop();
      }
  
  
}

function makebuilding(w,h){
  makerect(pointwindow,100,createVector(h*24, w*24));
  drawrect(pointwindow);

  for(let j=0;j<w;j++){
    for(let i=0;i<h;i++){
      push();
      translate((i/h-0.5)*24*h+12,(j/w-0.5)*24*w+12);
      makerect(wd,4,15);
      if(fxrand()>0.5){
        drawrect(wd);      
      }else{
        fillrect(wd);
      }
      pop();
    }
  } 
}
function makerect(rect,rectsize,windowsize){
  for(let i=0;i<rectsize;i++){
    let position=i/rectsize;
    let pcase=Math.floor(position*4);
    let p=createVector(0,0);
    let pnoise=createVector(fxrand()*4,fxrand()*8);
    let p1=createVector(-0.5, -0.5).mult(windowsize).add(pnoise);
    let p2=createVector(-0.5, 0.5).mult(windowsize).add(pnoise);
    let p3=createVector(0.5, 0.5).mult(windowsize).add(pnoise);
    let p4=createVector(0.5, -0.5).mult(windowsize).add(pnoise);
    
    switch (pcase){
      case 0:
        p=p1.add(p2.sub(p1).mult(position*4));
        break;
      case 1:
        p=p2.add(p3.sub(p2).mult((position-0.25)*4));
        break;
      case 2:
        p=p3.add(p4.sub(p3).mult((position-0.5)*4));
        break;
      case 3:
        p=p4.add(p1.sub(p4).mult((position-0.75)*4));
        break;        
    }
    rect[i]=p;
  }
  
}

function makerect2(rect,rectsize,windowsize){
  for(let i=0;i<rectsize;i++){
    let position=i/rectsize;
    let pcase=Math.floor(position*4);
    let p=createVector(0,0);
    let pnoise=createVector(fxrand()*2,fxrand()*2);
    let p1=createVector(-0.5, -0.5).mult(windowsize).add(pnoise);
    let p2=createVector(-0.5, 0.5).mult(windowsize).add(pnoise);
    let p3=createVector(0.5, 0.5).mult(windowsize).add(pnoise);
    let p4=createVector(0.5, -0.5).mult(windowsize).add(pnoise);
    
    switch (pcase){
      case 0:
        p=p1.add(p2.sub(p1).mult(position*4));
        break;
      case 1:
        p=p2.add(p3.sub(p2).mult((position-0.25)*4));
        break;
      case 2:
        p=p3.add(p4.sub(p3).mult((position-0.5)*4));
        break;
      case 3:
        p=p4.add(p1.sub(p4).mult((position-0.75)*4));
        break;        
    }
    rect[i]=p;
  }
  
}

function drawrect(rect){
  for(let i=0;i<rect.length;i++){
 line(rect[i].x,rect[i].y,0,rect[(i+1)%rect.length].x,rect[(i+1)%rect.length].y,0);
  }
  
}
function fillrect(rect){
  beginShape();
  for(let i=0;i<rect.length;i++){
    vertex(rect[i].x,rect[i].y);
  }
  endShape(CLOSE);
  
}


function onecar(){
    makecar(car,100,20);
    drawrect(car);
    push();
    translate(-19,0);
    makecircle(wheel,20,1);
    drawrect(wheel);
    pop();
    push();
    translate(19,0);
    makecircle(wheel,20,1);
    drawrect(wheel);
    pop();
    push()
    translate(7,-25);
    makerect2(wd,4,10);
    fillrect(wd);
    pop();
    push()
    translate(-7,-25);
    makerect2(wd,4,10);
    fillrect(wd);
    pop();
  
  
  
}
function makecar(car,pointcount,carsize){
  for(let i=0;i<pointcount;i++){
    let position=i/pointcount;
    let pcase=Math.floor(position*10);
    let p=createVector(0,0);
    let pnoise=createVector(fxrand()*20-10,fxrand()*2);
    let p1=createVector(-1.5, 0).mult(carsize).add(pnoise);
    let p2=createVector(-2, 0).mult(carsize).add(pnoise);
    let p3=createVector(-2, -1).mult(carsize).add(pnoise);
    let p4=createVector(-1, -1).mult(carsize).add(pnoise);
    let p5=createVector(-1, -1.8).mult(carsize).add(pnoise);
    let p6=createVector(1, -1.8).mult(carsize).add(pnoise);
    let p7=createVector(1, -1).mult(carsize).add(pnoise);
    let p8=createVector(2, -1).mult(carsize).add(pnoise);
    let p9=createVector(2, 0).mult(carsize).add(pnoise);
    let p10=createVector(1.5, 0).mult(carsize).add(pnoise);

    switch (pcase){
      case 0:
        p=p1.add(p2.sub(p1).mult(position*10));
        break;
      case 1:
        p=p2.add(p3.sub(p2).mult((position%0.1)*10));
        break;
      case 2:
        p=p3.add(p4.sub(p3).mult((position%0.1)*10));
        break;
      case 3:
        p=p4.add(p5.sub(p4).mult((position%0.1)*10));
        break; 
      case 4:
        p=p5.add(p6.sub(p5).mult((position%0.1)*10));
        break;
      case 5:
        p=p6.add(p7.sub(p6).mult((position%0.1)*10));
        break;
      case 6:
        p=p7.add(p8.sub(p7).mult((position%0.1)*10));
        break;
      case 7:
        p=p8.add(p9.sub(p8).mult((position%0.1)*10));
        break;
      case 8:
        p=p9.add(p10.sub(p9).mult((position%0.1)*10));
        break;
      case 9:
        p=p10.add(p1.sub(p10).mult((position%0.1)*10));
        break;
    }
    car[i]=p;
  }
  
}

function makecircle(circle,pointcount,circlesize){
  
  for(let i=0;i<pointcount;i++){
    let rnd=fxrand()*2;
    let index=(i/pointcount-1)*6.28;
    let pnoise=createVector(fxrand()*2,fxrand()*3);

    let r=10+cos(index*4)*rnd;
    let p=createVector(cos(index)*r+pnoise.x,sin(index)*r+pnoise.y);
    circle[i]=p; 

  }

}


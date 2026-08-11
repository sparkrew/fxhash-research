
let colors=['rgb(0,104,255)','green','#FF4B00','rgb(252,102,128)','purple']
let colors2=["#47E400","#eaf0ce","#c0c5c1","#7d8491","#443850"]
let colors3=["#FF9800","#eaf0ce","#c0c5c1","#7d8491","#443850"]
let colors4=['#E91E63',"#eaf0ce","#c0c5c1","#7d8491","#443850"]
let colors5=['#FFEB3B',"#eaf0ce","#c0c5c1","#7d8491","#443850"]
let colors6=['#E5CBD4',"#D993F3","#c0c5c1","#8597B6","#443850"]
let colors7=['#349ED1',"#93F3DB","#2B40B9","#8597B6","#443850"]
let rdf, rd2, rd3;
let seed;

function preload(){
  seed=int(fxrand() * 100000000);
  randomSeed(seed);
  noiseSeed(seed);
}
function setup() {
  w=windowWidth; hh= windowHeight;
  if(w>=hh){w=hh;} else{hh=w;}
  createCanvas(w,hh);
  pixelDensity(1);


  maxRecursionDepth = 2;
  maxRecursionDepth2 = 3;
  maxRecursionDepth3 = 5;
  maxRecursionDepth4 = 3;
  rad = w/4;
  rad2 = w/2;
  rad3 = w/2;
  rd2 = int(random(6));
  rd3 = int(random(8));
  rdf = int(random(4));
  strokeJoin(ROUND)
}

function draw() {
  background(20);
  translate(w/2, w/2)
  noStroke();
  noFill()
  strokeWeight(1)

  if(rdf==1){
  push()

  recursiveHexagon2(0,0,maxRecursionDepth2,rad2)
  pop();
  }

  if(rdf==2){
  var rd = int(random(2));
  if(rd==0){background(0);} if(rd==1){background(50);}
  push();
  maxRecursionDepth3 = 3; rad3 = w/1;
  translate(0, 0);
  recursiveHexagon3(0,0,maxRecursionDepth3,rad3)
  pop();
  }

  if(rdf==0){
    background(100);
  var rd0 = int(random(2));
  if(rd0==0){background(150);} if(rd0==1){background(100);}
  push();
  maxRecursionDepth3 = 3; rad3 = w/2;
  translate(0, 0)
  recursiveHexagon34(0,0,maxRecursionDepth3,rad3)
  pop();
  }

  if(rdf==3){
  var rd1 = int(random(2));
  if(rd1==0){background(10);} if(rd1==1){background(10);}
  push();
  maxRecursionDepth3 = 3; rad3 = w/1;
  translate(0, 0)
  recursiveHexagon33(0,0,maxRecursionDepth3,rad3)
  pop();
  }

  push();
  translate(w/1.1,0)
  pop();

  if(rdf==1){
  push();
  recursiveHexagon(-w/2, w/4, maxRecursionDepth,rad)
  recursiveHexagon(w/2, -w/4, maxRecursionDepth,rad)
  pop();

  push();
  recursiveHexagon(-w/2.1, -w/1.80, maxRecursionDepth,rad)
  recursiveHexagon(w/2.1, w/1.80, maxRecursionDepth,rad)
  pop();
  }

  if(rdf==2){
  push();
  maxRecursionDepth = 1;
  var rd2 = int(random(2));
  var rd3 = int(random(4));
  if(rd2==0){rad = w/4;} if(rd2==1){rad = w/3;}
  if(rd3==0){
  recursiveHexagon(w/2.5, w/3, maxRecursionDepth,rad)
  recursiveHexagon(w/2, -w/1.8, maxRecursionDepth,rad)
  }
  if(rd3==1){
  recursiveHexagon(-w/2.5, w/3, maxRecursionDepth,rad)
  recursiveHexagon(-w/2, -w/1.8, maxRecursionDepth,rad)
  }
  if(rd3==2){
  recursiveHexagon(-w/2.5, w/3, maxRecursionDepth,rad)
  recursiveHexagon(w/2, -w/1.8, maxRecursionDepth,rad)
  }
  if(rd3==3){
  recursiveHexagon(w/2.5, w/3, maxRecursionDepth,rad)
  recursiveHexagon(-w/2, -w/1.8, maxRecursionDepth,rad)
  }
  pop();
  }

  if(rdf==0){
  push();
  maxRecursionDepth = 1;
  var rd2 = int(random(2));
  var rd3 = int(random(4));
  if(rd2==0){rad = w/4;} if(rd2==1){rad = w/3;}
  if(rd3==0){
  recursiveHexagon(w/2.5, w/3, maxRecursionDepth,rad)
  recursiveHexagon(w/2, -w/1.8, maxRecursionDepth,rad)
  }
  if(rd3==1){
  recursiveHexagon(-w/2.5, w/3, maxRecursionDepth,rad)
  recursiveHexagon(-w/2, -w/1.8, maxRecursionDepth,rad)
  }
  if(rd3==2){
  rad = w/4;
  recursiveHexagon(-w/8, w/2, maxRecursionDepth,rad)
  recursiveHexagon(w/8, w/2, maxRecursionDepth,rad)
  }
  if(rd3==3){
  recursiveHexagon(w/2.5, w/3, maxRecursionDepth,rad)
  recursiveHexagon(-w/2, -w/1.8, maxRecursionDepth,rad)
  }
  pop();
  }

  noLoop()
}

function drawHexagon(cX, cY, r){
  drawingContext.shadowOffsetX = 15;
  drawingContext.shadowOffsetY = -15;
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = 'black';
  var rd = int(random(2));
  beginShape()
  for(let a = TAU/12; a < TAU + TAU/12; a+=TAU/6){
    var x1 = cX + r * cos(a)
    var y1 = cY + r * sin(a)
    if(rdf==0 || rdf==2 || rdf==3){fill(random(20, 135));}
    if(rdf==1){
    if(rd==0){noFill();}
    if(rd==1){fill(random(20, 135));}
    }

    vertex(x1, y1)
  }
  endShape(CLOSE)
}

function drawHexagon2(cX, cY, r){
  drawingContext.shadowOffsetX = 2;
  drawingContext.shadowOffsetY = -2;
  drawingContext.shadowBlur = 1;
  if(rd3==0){drawingContext.shadowColor =  random(colors);}
  if(rd3==1){drawingContext.shadowColor =  random(colors6);}
  if(rd3==2){drawingContext.shadowColor = '#FF9B22';}
  if(rd3==3){drawingContext.shadowColor =  random(colors7);}
  if(rd3==4){drawingContext.shadowColor =  random(colors2);}
  if(rd3==5){drawingContext.shadowColor =  random(colors3);}
  if(rd3==6){drawingContext.shadowColor =  random(colors4);}
  if(rd3==7){drawingContext.shadowColor =  random(colors5);}

  var rd = int(random(1));
  beginShape()
  for(let a = TAU/12; a < TAU + TAU/12; a+=TAU/6){
    var x1 = cX + r * cos(a)
    var y1 = cY + r * sin(a)

    fill(20);
    stroke(50);
    strokeWeight(1)
    vertex(x1, y1)

  }
  endShape(CLOSE)
}

function drawHexagon3(cX, cY, r){
  if(rdf==3||rdf==2){
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 15;

  if(rd3==0){drawingContext.shadowColor =  random(colors);}
  if(rd3==1){drawingContext.shadowColor =  random(colors6);}
  if(rd3==2){drawingContext.shadowColor = 'rgb(43,139,119)';}
  if(rd3==3){drawingContext.shadowColor =  random(colors7);}
  if(rd3==4){drawingContext.shadowColor =  random(colors2);}
  if(rd3==5){drawingContext.shadowColor =  random(colors3);}
  if(rd3==6){drawingContext.shadowColor =  random(colors4);}
  if(rd3==7){drawingContext.shadowColor =  random(colors5);}
  }
  if(rdf==1){
    drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 0;
  }
  var rd = int(random(5));

  beginShape()
  for(let a = TAU/12; a < TAU + TAU/12; a+=TAU/6){
    var x1 = cX + r * cos(a)
    var y1 = cY + r * sin(a)
    fill(45);
    if(rdf==0){
    if(rd2==0){
      if(rd==1){noFill();}
      if(rd==4){noFill();}
      if(rd==2){noFill();}
      if(rd==3){noFill();}
      if(rd==0){fill(random(colors));}
       stroke(10);}


    if(rd2==1){

      if(rd==1){noFill();}
      if(rd==4){noFill();}
      if(rd==2){noFill();}
      if(rd==3){noFill();}
      if(rd==0){fill(random(colors2));}
       stroke(10);}


    if(rd2==2){

      if(rd==1){noFill();}
      if(rd==4){noFill();}
      if(rd==2){noFill();}
      if(rd==3){noFill();}
      if(rd==0){fill(random(colors3));}
       stroke(10);}

      if(rd2==3){

      if(rd==1){noFill();}
      if(rd==4){noFill();}
      if(rd==2){noFill();}
      if(rd==3){noFill();}
      if(rd==0){fill(random(colors7));}
       stroke(10);}

    if(rd2==4){

      drawingContext.shadowOffsetX = 5;
      drawingContext.shadowOffsetY = -5;
      drawingContext.shadowBlur = 15;
      if(rd3==0){drawingContext.shadowColor =  random(colors);}
      if(rd3==1){drawingContext.shadowColor =  random(colors6);}
      if(rd3==2){drawingContext.shadowColor = 'rgb(43,139,119)';}
      if(rd3==3){drawingContext.shadowColor = '#A7D2E7';}
      if(rd3==4){drawingContext.shadowColor =  random(colors2);}
      if(rd3==5){drawingContext.shadowColor =  random(colors3);}

      if(rd==1){noFill();}
      if(rd==4){noFill();}
      if(rd==2){noFill();}
      if(rd==3){noFill();}
      if(rd==0){fill(random(20, 50));}
       stroke(10);
    }

      if(rd2==5){

      if(rd==1){noFill();}
      if(rd==4){noFill();}
      if(rd==2){noFill();}
      if(rd==3){noFill();}
      if(rd==0){fill(random(colors6));}
       stroke(10);}
}

    if(rdf==3){
      fill(random(20, 50));
      noStroke();}

    vertex(x1, y1)

  }
  endShape(CLOSE)
}

function drawHexagon4(cX, cY, r){
  drawingContext.shadowOffsetX = 10;
  drawingContext.shadowOffsetY = -10;
  drawingContext.shadowBlur = 55;
  drawingContext.shadowColor = 'black';
  var rd = int(random(1));

  beginShape()
  for(let a = TAU/12; a < TAU + TAU/12; a+=TAU/6){
    var x1 = cX + r * cos(a)
    var y1 = cY + r * sin(a)
    if(rd==1){noFill();}
    if(rd==4){noFill();}
    if(rd==2){noFill();}
    if(rd==3){noFill();}
    if(rd==0){fill(45);}
    fill(20, 150, 200);
    vertex(x1, y1)

  }
  endShape(CLOSE)
}

function recursiveHexagon(cX, cY, depth, r){
  if(depth == 0){
    drawHexagon(cX,cY,r)
  }else{
    recursiveHexagon(cX,cY,depth-1,r/2)
    for(let a = 0; a<TAU; a+=TAU/6){
      var x = cX + r * cos(a)
      var y = cY + r * sin(a)

      if(depth > 0){
        recursiveHexagon(x,y,depth-1,r/2)
      }
    }
  }
}

function recursiveHexagon2(cX, cY, depth, r){
  if(depth == 0){
    drawHexagon2(cX,cY,r)
  }else{
    recursiveHexagon2(cX,cY,depth-1,r/2)
    for(let a = 0; a<TAU; a+=TAU/6){
      var x = cX + r * cos(a)
      var y = cY + r * sin(a)

      if(depth > 0){
        recursiveHexagon2(x,y,depth-1,r/2)
      }
    }
  }
}

function recursiveHexagon3(cX, cY, depth, r){
  if(depth == 0){
    drawHexagon3(cX,cY,r)
  }else{
    recursiveHexagon3(cX,cY,depth-1,r/2)
    for(let a = 0; a<TAU; a+=TAU/6){
      var x = cX + r * cos(a)
      var y = cY + r * sin(a)

      if(depth > 0){
        recursiveHexagon3(x,y,depth-1,r/2)

      }
    }
  }
}

function recursiveHexagon33(cX, cY, depth, r){

  if(depth == 0){
    drawHexagon3(cX,cY,r)
  }else{
    recursiveHexagon33(cX,cY,depth-1,r/int(random(3,8)));
    for(let a = 0; a<TAU; a+=TAU/6){
      var x = cX + r * cos(a)
      var y = cY + r * sin(a)

      if(depth > 0){
        recursiveHexagon33(x,y,depth-1,r/2)

      }
    }
  }
}

function recursiveHexagon34(cX, cY, depth, r){
  var rd = int(random(2));
  if(depth == 0){
    drawHexagon3(cX,cY,r)
  }else{
    if(rd==0){
    recursiveHexagon34(cX,cY,depth-1,r/int(random(2, 8)));}
    if(rd==1){
    recursiveHexagon34(cX,cY,depth-1,r/2);}
    for(let a = 0; a<TAU; a+=TAU/6){
      var x = cX + r * cos(a)
      var y = cY + r * sin(a)

      if(depth > 0){
        if(rd==0){
        recursiveHexagon34(x,y,depth-1,r/2)}
        if(rd==1){
        recursiveHexagon34(x,y,depth-1,r/4)}
       console.log(rd)
      }
    }
  }
}

function recursiveHexagon4(cX, cY, depth, r){
  if(depth == 0){
    drawHexagon4(cX,cY,r)
  }else{
    recursiveHexagon4(cX,cY,depth-1,r/2)
    for(let a = 0; a<TAU; a+=TAU/6){
      var x = cX + r * cos(a)
      var y = cY + r * sin(a)

      if(depth > 0){
        recursiveHexagon4(x,y,depth-1,r/2)
      }
    }
  }
}

function windowResized(){
  w=windowWidth; hh= windowHeight;
  if(w>=hh){w=hh;} else{hh=w;}
  createCanvas(w,hh);

}

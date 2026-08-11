// Alex Stonn   2022 - alexzstonnn@gmail.com

var xoff1 = 0;
var xoff2 = 2000;
let c1, rbg;
let seed;
let angle;

function preload(){
    seed=int(fxrand() * 100000000);
    randomSeed(seed);
    noiseSeed(seed);
}

function setup() {
  ww=windowWidth; hh= windowHeight;
  if(ww>=hh){ww=hh;} else{hh=ww;}
  createCanvas(ww,hh);
  pixelDensity(1);
  imageMode(CENTER);

  rbg = int(random(2));

}

function draw() {
  colorMode(HSB, 300, 1 , 10);
  if(rbg == 0){background(140,1, 4);} // 0, 1, 2 = definem as 3 cores de fundo
  if(rbg == 1){background(140,1, 2);}
  if(rbg == 2){background(230,1, 10);}

  c1 = random(360); // cores aleatórias das planícies
  translate(0, height/8)

  push(); // sol / lua
  translate(random(0, width/2), -height/1.2);
  beginShape(TESS);
  var x;
  var y;
  var xoff = 0;
  for(var i = 0; i <2000; i++){
    x = map(noise(xoff1), 0, 1, 0, width/2);
    y = map(noise(xoff2), 0, 1, height/3, height);
    stroke(c1,10, 30 );
    strokeWeight(width/50000);
    //strokeWeight(0.013);
    noFill();

    vertex(x, y+width/10);
    vertex(x, y+width/2.5);

    xoff1 += 0.1;
    xoff2 += 0.0001;
  }

  endShape();
  noFill();
  strokeWeight(width/4.5);
  if(rbg == 0){stroke(140,1, 4);}
  if(rbg == 1){stroke(140,1, 2);}
  if(rbg == 2){stroke(230,1, 10);}
  ellipse(x, y+width/4,width/2);
  pop();

  push(); // sol / lua
  translate(random(0, width/2), -height/1.5);
  beginShape(TESS);
  var x;
  var y;
  var xoff = 0;
  for(var i = 0; i <2000; i++){
    x = map(noise(xoff1), 0, 1, -width, width*2);
    y = map(noise(xoff2), 0, 1, 0, height);
    stroke(c1,1, 20 );
    strokeWeight(width/10000);
    noFill();

    vertex(x, y+width/25);
    vertex(x, y+width/2);


    xoff1 += 1;
    xoff2 += 0.01;
  }



  endShape();
  noFill();
  strokeWeight(width/3);
  if(rbg == 0){stroke(140,1, 4);}
  if(rbg == 1){stroke(140,0, 4);}
  if(rbg == 2){stroke(230,1, 10);}
  //ellipse(x, y+150,width/2);
  pop();

  // push(); // luzes brancas
  // rotate(-3.15)
  // translate(0, -height/1.6)
  // beginShape(TESS);
  // var x;
  // var y;
  // var xoff = 0;
  // for(var i = 0; i <58000; i++){
  //
  //   x = map(cos(xoff1/2)+noise(xoff1), 0, 1, -width, width/3);
  //   y = map(noise(xoff2), 0, 1, -height, height);
  //
  //   stroke(random(70),0,20 );
  //   strokeWeight(width/4000);
  //   noFill();
  //
  //   point(x, y-200)
  //
  //   xoff1 += 0.01;
  //   stroke(random(100),0,0 );
  //   xoff2 += 0.0001;
  // }
  // endShape();
  // pop();

  push(); // primeira planície ao fundo mais escura
  rotate(-3.15)
  translate(0, -height/1.6)
  beginShape(TESS);
  var x;
  var y;
  var xoff = 0;
  for(var i = 0; i <8000; i++){

    x = map(cos(xoff1/2)+noise(xoff1), 0, 1, -width, width/6);
    y = map(noise(xoff2), 0, 1, -height/1.9, height);

    stroke(random(70),0,20 );
    strokeWeight(width/4000);
    noFill();

    curveVertex(x, y+random(-5, 5))
    curveVertex(x, 10)

    point(x, y+random(90))
    point(x, y-25)

    xoff1 += 0.001;
    stroke(random(120, 250),40,25 );
    xoff2 += 0.001;
  }
  endShape();
  pop();

  push();
  rotate(-3.15)
  translate(0, -height/1.6)
  beginShape(TESS);
  var x;
  var y;
  var xoff = 0;
  for(var i = 0; i <8000; i++){

    x = map(cos(xoff1/2)+noise(xoff1), 0, 1, -width, width/6);
    y = map(noise(xoff2), 0, 1, -height/1.9, height);

    stroke(random(70),50,20 );
    strokeWeight(width/4000);
    noFill();

    curveVertex(x, y+random(-5, 5))
    curveVertex(x, 10)

    point(x, y+10)

    xoff1 += 0.001;
    stroke(random(100),0,0 );
    xoff2 += 0.001;
  }
  endShape();
  pop();

  push();
  rotate(-3.15)
  translate(0, -height/1.6)
  beginShape(TESS);
  var x;
  var y;
  var xoff = 0;
  for(var i = 0; i <8000; i++){

    x = map(cos(xoff1/2)+noise(xoff1), 0, 1, -width, width/6);
    y = map(noise(xoff2), 0, 1, -height/1.9, height);

    stroke(random(200),0,0 );
    strokeWeight(width/4000);
    noFill();

    curveVertex(x, y+random(-5, 5))
    curveVertex(x, 10)

    //point(x, y-random(90, 100))
    point(x, y-random(width/5, width/5.2))

  //  point(x, y-random(width/4, width/4.1))

    point(x, y-width/3)

    xoff1 += 0.0013;
    xoff2 += 0.001;
  }
  endShape();
  pop();

  push();
  rotate(-3.15)
  translate(0, -height/1.6)
  beginShape(TESS);
  var x;
  var y;
  var xoff = 0;
  for(var i = 0; i <8000; i++){


    x = map(cos(xoff1/2)+noise(xoff1), 0, 1, -width, width/6);
    y = map(noise(xoff2), 0, 1, -height/3, height/2.5);

    stroke(random(70),50,20 );
    strokeWeight(width/3000);
    noFill();

    curveVertex(x, y+random(-5, 5))
    curveVertex(x, 10)

    point(x, y+10)

    xoff1 += 0.001;
    stroke(random(100),0,0 );
    xoff2 += 0.001;
  }
  endShape();
  pop();

  push(); // luzes brancas
  rotate(-3.15)
  translate(0, -height/1.5)
  beginShape(TESS);
  var x;
  var y;
  var xoff = 0;
  for(var i = 0; i <58000; i++){

    x = map(cos(xoff1/2)+noise(xoff1), 0, 1, -width, width/3);
    y = map(noise(xoff2), 0, 1, -height, height*2);

    stroke(random(70),0,7 );
    strokeWeight(width/4000);
    noFill();

    point(x, y-200)

    xoff1 += 0.01;
    stroke(random(100),0,0 );
    xoff2 += 0.0001;
  }
  endShape();
  pop();

  fxpreview();
  noLoop();
}

function windowResized(){
  ww=windowWidth; hh= windowHeight;
if(ww>=hh){ww=hh;} else{hh=ww;}
createCanvas(ww,hh);

}

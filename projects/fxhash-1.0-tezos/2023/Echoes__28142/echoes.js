/* ---------------------------- Copyright (c) 2023 Patricia Rocha
                                pattrochaa@gmail.com
                                https://twitter.com/pat_rochaa -------------------------------*/

let seed;
let graphics;
let yoff = 0.0;
let pallete, plants, composition
let c1, c2
let bgC, bgS, bgB, rdBG, rdComp, rdcolors
let cor, cc;
let rdV, rdV2, rdV3, rdSat
let saturation, layout
let l = 2.5
let vcor = [], vcor2=[], vcor3=[], vcor4=[], vcor5=[], vcor6=[], vcor7=[], vcor8=[], vcor9=[], vcor10=[], vcor11=[], vcor12=[], vcor13=[], vcor14=[], vcor15=[], vcor16=[], vcor17=[], vcor18=[], vcor19=[], vcor20=[], vcor21=[], vcor22=[], vcor23=[], vcor24=[], vcor25=[], vcor26=[], vcor27=[], vcor28=[], vcor29=[], vcor30=[], vcor31=[], vcor32=[], vcor33=[], vcor34=[], vcor35=[]
let vccor = [], vccor2=[], vccor3=[], vccor4=[], vccor5=[], vccor6=[], vccor7=[], vccor8=[], vccor9=[], vccor10=[], vccor11=[], vccor12=[], vccor13=[], vccor14=[], vccor15=[], vccor16=[], vccor17=[], vccor18=[], vccor19=[], vccor20=[], vccor21=[], vccor22=[], vccor23=[], vccor24=[], vccor25=[], vccor26=[], vccor27=[], vccor28=[], vccor29=[], vccor30=[], vccor31=[], vccor32=[], vccor33=[], vccor34=[], vccor35=[]
let morro, lua, satlua, sl, rdRamo, satflor, rdsatflor, rdcflores, cflores1, cflores2, rdflor;
let vcor0, vccor0;
let rdcc;
let cont2, cont3, cont4, cont5, cont6, cont7, cont8, cont9, cont10, cont11, cont12, cont13, cont14, cont15, cont16, cont17, cont18, cont19, cont20, cont21, cont22, cont23, cont24, cont25, cont26, cont27, cont28, cont29, cont30, cont31, cont32, cont33, cont34, cont35;
let sat3, rdcomp;

function preload(){
    seed=int(fxrand() * 100000000);
    randomSeed(seed);
    noiseSeed(seed);

    rdsatflor = int(random(2))
    if(rdsatflor == 0){satflor = 0}
    if(rdsatflor == 1){satflor = 200}
    rdcflores = int(random(3))
    if(rdcflores == 0){cflores1 = 0, cflores2 = 20}
    if(rdcflores == 1){cflores1 = 40, cflores2 = 60}
    if(rdcflores == 2){cflores1 = 320, cflores2 = 300}
    if(rdcflores == 3){cflores1 = 20, cflores2 = 100}

    rdflor = int(random(2))
    rdRamo = int(random(3))
    morro = int(random(3))
    lua = int(random(2))
    satlua = int(random(2))
    rdcomp = int(random(1))
    rdSat = int(random(3))
    rdV = int(random(3))  
    rdV2 = int(random(3)) 
    rdV3 = int(random(3)) 
    if(rdSat == 0){sat = 1150}else{sat = 150}
    vcor0 = random(300)
    vccor0 = random(300)
    rdcc = int(random(2))
    if(rdcc == 0){cc = random(100, 250)}
    if(rdcc == 1){cc = random(-50, 240)}
    cont2 = int(random(10))
    cont3 = int(random(10))
    cont4 = int(random(10))
    cont5 = int(random(10))
    cont6 = int(random(10))
    cont7 = int(random(10))
    cont8 = int(random(10))
    cont9 = int(random(10))
    cont10 = int(random(10))
    cont11 = int(random(10))
    cont12 = int(random(10))
    cont13 = int(random(10))
    cont14 = int(random(10))
    cont15 = int(random(10))
    cont16 = int(random(10))
    cont17 = int(random(10))
    cont18 = int(random(10))
    cont19 = int(random(10))
    cont20 = int(random(10))
    cont21 = int(random(10))
    cont22 = int(random(10))
    cont23 = int(random(10))
    cont24 = int(random(10))
    cont25 = int(random(10))
    cont26 = int(random(10))
    cont27 = int(random(10))
    cont28 = int(random(10))
    cont29 = int(random(10))
    cont30 = int(random(10))
    cont31 = int(random(10))
    cont32 = int(random(10))
    cont33 = int(random(10))
    cont34 = int(random(10))
    cont35 = int(random(10))
  }

  const aspect = 1 / 1;
  function setupCanvas() {
  const height2 = min(windowWidth, windowHeight * aspect) / aspect;
  const width2 = height2 * aspect;
  createCanvas(width2, height2, WEBGL);
  pixelDensity(2);
  }

function setup() {
  setupCanvas();
  colorMode(HSB, 350, 300, 7)
 // pixelDensity(3)
  imageMode(CENTER);

  var rdcor1 = random(300)
  var rdcor2 = random(300)
  var dim = abs(rdcor1 - rdcor2)
  while(dim > 190 || dim < 40){
      rdcor1 = random(300)
      rdcor2 = random(300)
      dim = abs(rdcor1 - rdcor2)
  }
  for(var i = 1; i<9; i++){
    vcor.push(random(rdcor1,rdcor2))
    vcor2.push(random(rdcor1,rdcor2))
    vcor3.push(random(rdcor1,rdcor2))
    vcor4.push(random(rdcor1,rdcor2))
    vcor5.push(random(rdcor1,rdcor2))
    vcor6.push(random(rdcor1,rdcor2))
    vcor7.push(random(rdcor1,rdcor2))
    vcor8.push(random(rdcor1,rdcor2))
    vcor9.push(random(rdcor1,rdcor2))
    vcor10.push(random(rdcor1,rdcor2))
    vcor11.push(random(rdcor1,rdcor2))
    vcor12.push(random(rdcor1,rdcor2))
    vcor13.push(random(rdcor1,rdcor2))
    vcor14.push(random(rdcor1,rdcor2))
    vcor15.push(random(rdcor1,rdcor2))
    vcor16.push(random(rdcor1,rdcor2))
    vcor17.push(random(rdcor1,rdcor2))
    vcor18.push(random(rdcor1,rdcor2))
    vcor19.push(random(rdcor1,rdcor2))
    vcor20.push(random(rdcor1,rdcor2))
    vcor21.push(random(rdcor1,rdcor2))
    vcor22.push(random(rdcor1,rdcor2))
    vcor23.push(random(rdcor1,rdcor2))
    vcor24.push(random(rdcor1,rdcor2))
    vcor25.push(random(rdcor1,rdcor2))
    vcor26.push(random(rdcor1,rdcor2))
    vcor27.push(random(rdcor1,rdcor2))
    vcor28.push(random(rdcor1,rdcor2))
    vcor29.push(random(rdcor1,rdcor2))
    vcor30.push(random(rdcor1,rdcor2))
    vcor31.push(random(rdcor1,rdcor2))
    vcor32.push(random(rdcor1,rdcor2))
    vcor33.push(random(rdcor1,rdcor2))
    vcor34.push(random(rdcor1,rdcor2))
    vcor35.push(random(rdcor1,rdcor2))
  }

  for(var i = 1; i<9; i++){
    vccor.push(random(rdcor1,rdcor2))
    vccor2.push(random(rdcor1,rdcor2))
    vccor3.push(random(rdcor1,rdcor2))
    vccor4.push(random(rdcor1,rdcor2))
    vccor5.push(random(rdcor1,rdcor2))
    vccor6.push(random(rdcor1,rdcor2))
    vccor7.push(random(rdcor1,rdcor2))
    vccor8.push(random(rdcor1,rdcor2))
    vccor9.push(random(rdcor1,rdcor2))
    vccor10.push(random(rdcor1,rdcor2))
    vccor11.push(random(rdcor1,rdcor2))
    vccor12.push(random(rdcor1,rdcor2))
    vccor13.push(random(rdcor1,rdcor2))
    vccor14.push(random(rdcor1,rdcor2))
    vccor15.push(random(rdcor1,rdcor2))
    vccor16.push(random(rdcor1,rdcor2))
    vccor17.push(random(rdcor1,rdcor2))
    vccor18.push(random(rdcor1,rdcor2))
    vccor19.push(random(rdcor1,rdcor2))
    vccor20.push(random(rdcor1,rdcor2))
    vccor21.push(random(rdcor1,rdcor2))
    vccor22.push(random(rdcor1,rdcor2))
    vccor23.push(random(rdcor1,rdcor2))
    vccor24.push(random(rdcor1,rdcor2))
    vccor25.push(random(rdcor1,rdcor2))
    vccor26.push(random(rdcor1,rdcor2))
    vccor27.push(random(rdcor1,rdcor2))
    vccor28.push(random(rdcor1,rdcor2))
    vccor29.push(random(rdcor1,rdcor2))
    vccor30.push(random(rdcor1,rdcor2))
    vccor31.push(random(rdcor1,rdcor2))
    vccor32.push(random(rdcor1,rdcor2))
    vccor33.push(random(rdcor1,rdcor2))
    vccor34.push(random(rdcor1,rdcor2))
    vccor35.push(random(rdcor1,rdcor2))
  }
}

function draw() {


  if(rdcomp == 0){
    let rbgB = int(random(2))
    if(rbgB == 0){bgB = 5}else{bgB = 10}
    bgC = random(300); bgS = random(50); 
    background(bgC, bgS, bgB);

    if(rdRamo == 0){

      if(rdflor == 1){
        push()
        var rdC = random(360);
        var soma = -width/2
          for(var i =0; i<63; i++){
            push()
            translate(soma, height/random(2, 1.5), width/10)
            ramo5(width/random(10 ,25), rdC, rdC, 4, 1, cflores1, cflores2, 3, 3, width/10800, 1)
            soma += random(width/60, width/78)
            pop()
        }
        pop()
      }

    push()
    translate(-width/4, -height/4)
    var rdC = random(360);
    for(var i =0; i<20; i++){
    push()
    rotate(random(0.2,0.6))
    translate(random(-width/3, width/4), random(height/1, height/0.8), -width/4);
    ramo7(width/random(12 ,22), rdC, rdC, 10, 15, 1, 0, 0, 1, width/2000)
    pop()
    }
    pop()
    }

    if(rdRamo == 1){
    push()
    translate(-width/4, -height/4)
    var rdC = random(360);
    for(var i =0; i<30; i++){
    push()
   // rotate(random(-0.5,-0.9))
    translate(random(-width/3, width/1), random(height/1.1, height/1.15), -width/4);
    ramo(width/random(22 ,5), rdC, rdC, 10, 15, 1, 1, 0, 1, width/1000)
    pop()
    }
    pop()
  }

  if(rdRamo == 2){

    if(rdflor == 1){
        push()
        var rdC = random(360);
        var soma = -width/2
          for(var i =0; i<63; i++){
            push()
            translate(soma, height/random(2, 1.5), width/10)
            ramo5(width/random(10 ,25), rdC, rdC, random(2,4), 1, cflores1, cflores2, 3, 3, width/10800, 1)
            soma += random(width/60, width/78)
            pop()
        }
        pop()
      }
  push()
  translate(-width/4, -height/4)
  var rdC = random(360);
  for(var i =0; i<20; i++){
  push()
  scale(-1, 1);
  rotate(random(0.2,0.7))
    translate(random(-width/3, -width/1.5), random(height/0.6, height/0.9), -width/4);
    ramo7(width/random(12 ,22), rdC, rdC, 10, 15, 1, 0, 0, 1, width/2000)
  pop()
  }
  pop()
  }

 

    if(morro == 0){

    push()
    translate(-width/3, -width/1.5, -width/3.8)
      stroke(1)
      noFill();
      beginShape();
      for (let x3 = 0; x3 <= width*2; x3 += width/2000) {
        let y3 = map(noise(x3/width*3), 0, 1, height/2.4, height/2.1);
        vertex(x3-width/2, y3+width/55);
        vertex(x3 , y3 );
      }

      endShape();
      pop()

      // morro baixo
      pop()
    push()
    translate(-width/3, width/3.5, -width/3.8)
      stroke(1)
      noFill();
      beginShape();
      for (let x3 = 0; x3 <= width*2; x3 += width/2000) {
        let y3 = map(noise(x3/width*3), 0, 1, height/2.4, height/5.1);
        vertex(x3-width/2, y3+width/55);
        vertex(x3 , y3 +width);
      }

      endShape();
      pop()
    }

    if(morro == 1){
  
      // morro baixo
      pop()
      push()
      translate(-width/2, -width/6.5, -width/3.8)
        stroke(1)
        noFill();
        beginShape();
        for (let x3 = 0; x3 <= width*2; x3 += width/2000) {
          let y3 = map(noise(x3/width*3), 0, 1, height/1.4, height/10.1);
          vertex(x3-width/2, y3+width/55);
          vertex(x3 , y3 +width);
        }
  
        endShape();
        pop()
      }

      if(morro == 2){
  
        // morro baixo
        
        pop()
        push()
        translate(-width/3, width/4.5, -width/3.8)
          stroke(1)
          noFill();
          beginShape();
          for (let x3 = 0; x3 <= width*2; x3 += width/2000) {
            let y3 = map(noise(x3/width*3), 0, 1, height/3.4, height/5.1);
            vertex(x3-width/2, y3+width/55);
            vertex(x3 , y3 +width);
          }
    
          endShape();
          pop()
        }

    translate(width/27, 0)
    comp6()
    noStroke()
    fill(bgC, bgS, bgB)
    rect(width/2.15, -height, width/25, height*2)
    push()

    if(rbgB == 0){ sl = 10}
    if(rbgB == 1){ sl = 4}
    fill(sl)
    noStroke()
    if(morro == 1){
      translate(random(-width/4, width/3), random(-width/2, -width/10), -width/3)
      ellipse(0, 0, width/5)
    }else{
      translate(random(-width/4, width/3), -width/3, -width/3)
      ellipse(0, 0, width/7)}
    
    pop()
    translate(random(width/4, -width/4), 0)
    comp7()
    
  }
  if(rdcomp == 1){comp2()}

  noLoop();
  fxpreview();
}

function windowResized() {
  setupCanvas();
  redraw();
}

function keyPressed() {
  if (key.toLowerCase() === "s") 
  save('Echoes');
}

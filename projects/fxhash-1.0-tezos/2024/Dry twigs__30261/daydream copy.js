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
let vcccor = [], vcccor2=[], vcccor3=[], vcccor4=[], vcccor5=[], vcccor6=[], vcccor7=[], vcccor8=[], vcccor9=[], vcccor10=[], vcccor11=[], vcccor12=[], vcccor13=[], vcccor14=[], vcccor15=[], vcccor16=[], vcccor17=[], vcccor18=[], vcccor19=[], vcccor20=[], vcccor21=[], vcccor22=[], vcccor23=[], vcccor24=[], vcccor25=[], vcccor26=[], vcccor27=[], vcccor28=[], vcccor29=[], vcccor30=[], vcccor31=[], vcccor32=[], vcccor33=[], vcccor34=[], vcccor35=[]

let morro, lua, satlua, sl, rdRamo, satflor, rdsatflor, rdcflores, cflores1, cflores2, rdflor;
let vcor0, vccor0, vcccor0;
let rdcc;
let cont2, cont3, cont4, cont5, cont6, cont7, cont8, cont9, cont10, cont11, cont12, cont13, cont14, cont15, cont16, cont17, cont18, cont19, cont20, cont21, cont22, cont23, cont24, cont25, cont26, cont27, cont28, cont29, cont30, cont31, cont32, cont33, cont34, cont35;
let sat3, rdcomp;

function preload(){
    seed=int($fx.rand() * 100000000);
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
    vcccor0 = random(300)
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
  let rdsat = int(random(2))
  let rdsat1 
  if(rdsat == 0){rdsat1 = 120}
  if(rdsat == 1){rdsat1 = 320}
  //if(rdsat == 2){rdsat1 = 1250}
  colorMode(HSB, 350, rdsat, 7)
  imageMode(CENTER);

  var rdcor1 = 0
  var rdcor2 = 50

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

  for(var i = 1; i<9; i++){
    vcccor.push(random(rdcor1,rdcor2))
    vcccor2.push(random(rdcor1,rdcor2))
    vcccor3.push(random(rdcor1,rdcor2))
    vcccor4.push(random(rdcor1,rdcor2))
    vcccor5.push(random(rdcor1,rdcor2))
    vcccor6.push(random(rdcor1,rdcor2))
    vcccor7.push(random(rdcor1,rdcor2))
    vcccor8.push(random(rdcor1,rdcor2))
    vcccor9.push(random(rdcor1,rdcor2))
    vcccor10.push(random(rdcor1,rdcor2))
    vcccor11.push(random(rdcor1,rdcor2))
    vcccor12.push(random(rdcor1,rdcor2))
    vcccor13.push(random(rdcor1,rdcor2))
    vcccor14.push(random(rdcor1,rdcor2))
    vcccor15.push(random(rdcor1,rdcor2))
    vcccor16.push(random(rdcor1,rdcor2))
    vcccor17.push(random(rdcor1,rdcor2))
    vcccor18.push(random(rdcor1,rdcor2))
    vcccor19.push(random(rdcor1,rdcor2))
    vcccor20.push(random(rdcor1,rdcor2))
    vcccor21.push(random(rdcor1,rdcor2))
    vcccor22.push(random(rdcor1,rdcor2))
    vcccor23.push(random(rdcor1,rdcor2))
    vcccor24.push(random(rdcor1,rdcor2))
    vcccor25.push(random(rdcor1,rdcor2))
    vcccor26.push(random(rdcor1,rdcor2))
    vcccor27.push(random(rdcor1,rdcor2))
    vcccor28.push(random(rdcor1,rdcor2))
    vcccor29.push(random(rdcor1,rdcor2))
    vcccor30.push(random(rdcor1,rdcor2))
    vcccor31.push(random(rdcor1,rdcor2))
    vcccor32.push(random(rdcor1,rdcor2))
    vcccor33.push(random(rdcor1,rdcor2))
    vcccor34.push(random(rdcor1,rdcor2))
    vcccor35.push(random(rdcor1,rdcor2))
  }
}

function draw() {

  if(rdcomp == 0){
    let rbgB = int(random(2))
    if(rbgB == 0){bgB = 10}else{bgB = 15}
    bgC = random(20, 300); bgS = random(50); 
    var rdbgr = int(random(2))
    if (rdbgr == 0) {bgB = 5}else { bgB = 10}
    background(bgC, 100, bgB);
      var x = width/50
      var y = width/50

      push()
    translate(-width/1.5, -width/1.4, -width/2.9)
     // stroke(1)
     stroke(50, 200, 1)
      noFill();
      beginShape();
      for (let x3 = 0; x3 <= width*2; x3 += width/2000) {
        
        let y3 = map(noise(x3/width*3), 0, 1, height/2.6, height/2.1);
        vertex(x3-width/2, y3+width/10);
        vertex(x3 , y3 );
      }

      endShape();
      pop()

        push()
        translate(0, -height/random(3.2, 3.3), -width/2.8)
        fill(bgC, 100, 50)
        noStroke()
        push()
        translate(random(-width/2, width/2), 0)
        ellipse(0, 0, width/4)
        pop()
        translate(-width/6, height/8, 0)
        for(var i = 0; i<2; i++){
          push()
          translate(-width/1.5, -width/20, width/10)
          if (rdbgr == 0){fill(bgC, 100, 80)} else {fill(bgC, 100, 5)}
          noStroke()
          rect(0, 0, width*2, height/1.5)
          pop()
        }

        pop()

      for(var i = 0; i<5; i++){
        push()
        translate(random(-width/1.15, width/2), height/random(3.3, 5), -width/10)
        fill(0)
        noStroke()
        rect(0, 0, width/random(2,3), height/random(200,150))
        pop()
      }

      push()
      rotate(1.58)
      translate(-width/5, -height/0.8, 0)
      comp6(0.2) //random(0.02, 0.08)
      pop()

      push()
      rotate(-1.58)
      translate(-width/1.2, -height/1.7, width/9)
      comp7() //random(0.02, 0.08)
      pop()


        
    
          for(var x = 0; x< 3; x++){
          push()
          rotate(random(-0.5, 0.5))
          translate(random(-width/2, width/4), -width/random(2, 2), -width/10)
        //  arvore(int(random(2)), 0.5)
          pop()
          }
    
          for(var x = 0; x< 7; x++){
            push()
            rotate(random(1, -1.6))
            translate(random(-width/4, -width/6), -width/random(10, 10), width/10)
          //  arvore2(int(random(2)), 1)
            pop()
            }

            for(var x = 0; x< 7; x++){
              push()
              rotate(random(-0.5, -1.6))
              translate(random(-width/3, -width/1.5), -width/random(10, 10), width/10)
           //   arvore2(int(random(2)), random(1, 2))
              pop()
              }

            

                push()
                var rdC = random(360);
                 var soma = -width/3
                 for(var i =0; i<15; i++){
                push()
                translate(soma, height/random(1, 1.5),random(width/10, width/10))
              //   ramo5(width/random(6 ,2), rdC, rdC, 10, 3, cflores1, cflores2, 1, 0, width/10800, 1)
                soma += random(width/20, width/28)
                pop()
                pop()
                
                 }

               //  if(rdRamo == 1){
                  push()
                  translate(-width/4, -height/4)
                  var rdC = random(360);
                  for(var i =0; i<50; i++){
                  push()
                 // rotate(random(-0.5,-0.9))
                  translate(random(-width/2, width/1.5), random(height/1.5, height/1.15), width/8);
              //   ramo(width/random(10 ,30), bgC, bgC, 10, bgC, bgC, 4, 6, 4, width/2000)
                  pop()
                  }
                  pop()
              //  }

      push()
      //ARVORE
      translate(random(-width/1.5, -width/2), -width/2.5, -width/10)
      for(var i = 0; i< 5; i++){
        cb = 10
        cb2 = 1
        var xoff2 = 0
        var xoff1 = 0
          translate(-width/200, 0)
        for (var x = 0; x < width; x++){
           cb2 += 0.09
          strokeWeight(width/random(100, 100))
          var y = noise(xoff1)*height/10
          xoff1+= 0.004
          cb -= 0.05
          var rdt = int(random(15))
          if(rdt == 0){stroke(50, 100, 1)}else{stroke(50, 100, 5-i*2)}
          point(y, x-width/5)
        }  
      }
      pop()

        push()
        translate(0, 0, width/50)
        for(var i = 0; i< 100; i++){
          fill(bgC, 120, random(3,10))
          noStroke()
          ellipse(random(-width/2, width/2), random(-height/3, height/2), width/random(300, 220), width/random(100, 320))
        }
        pop()
        
        push()
        translate(0, 0, width/50)
        for(var i = 0; i< 100; i++){
          fill(random(0))
          noStroke()
          ellipse(random(-width/2, width/2), random(height/11, height/2), width/random(300, 220), width/random(300, 220))
        }
        
        pop()
        
  }
    
  noLoop();
 // $fx.preview();
}

function windowResized() {
  setupCanvas();
  redraw();
}

function keyPressed() {
  if (key.toLowerCase() === "s") 
  save('Daydream');
}

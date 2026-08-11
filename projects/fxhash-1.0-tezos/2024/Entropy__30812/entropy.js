/* ---------------------------- Copyright (c) 2024 Patricia Rocha
                                pattrochaa@gmail.com
                                https://twitter.com/pat_rochaa -------------------------------*/

let seed;
let corfundo, cor1, cor2, cor3, corD1, corD2
let sat, satD1, satD2
let corF1, corF2, satF
let corLM, corCM, satCM, briSM, expLM, expLM1
let corBG, satBR, briBG
let rdForma
let dist1, dist2, dist3, dist4, rddist, vv1, vv2

function preload(){
  seed=int($fx.rand() * 100000000);
  randomSeed(seed);
  noiseSeed(seed);

  cor1 = 100;
  cor2 = 150   
  sat = random(100,200)
  corF1 = 0
  corF2 = 40
  satF = 200
  corD1 = random(300)
  corD2 = random(200, 300)
  satD1 = 200
  satD2 = 250
  corLM = 0
  expLM = int(random(2))
  corCM = corD1
  satCM = 200
  briSM = 5
  corBG = random(300)
  satBR = 30
  briBG = int(random(5,7))
  rdForma = int(random(2))
  dist3 = 2.5
  dist4 = 2
  rddist = int(random(3))

  dist1 = int(random(20, 10))
  dist2 = int(random(3, 5))
  var dim = abs(dist1 - dist2)
  console.log(dist1, dist2)
  corF1 = int(random(320))
  corF2 = int(random(320))
  var dimF = abs(corF1 - corF2)

  while(dimF > 50 && dimF > 100){
    corF1 = int(random(320))
    corF2 = int(random(320))
    dimF = abs(corF1 - corF2)
  }

  if(expLM == 0){expLM1 = 400}else{expLM1 = 550}

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
  imageMode(CENTER);

  cor1 = random(300)
  cor2 = random(300)
  var dim = abs(cor1 - cor2)
  while(dim > 60 || dim < 30){
      cor1 = random(300)
      cor2 = random(300)
      dim = abs(cor1 - cor2)
  }

  if(rddist == 0){
    dist1 = int(random(20, 10))
    dist2 = random(3, 5)
  }
  if(rddist == 1){
    dist1 = int(random(3, 3))
    dist2 = random(2, 1.5)
  }
  if(rddist == 2){
    dist1 = int(random(2, 2))
    dist2 = random(1.3, 1.5)
  }
  
   if(rddist == 0){
    dist3 = int(random(20, 10))
    dist4 = int(random(3, 5))
  }
  if(rddist == 1){
    dist3 = int(random(3, 3))
    dist4 = random(2, 1.5)
  }
  if(rddist == 2){
    dist3 = int(random(2, 2))
    dist4 = random(1.3, 1.5)
  }
 
}

function draw() {

  background(corBG, satBR, briBG);


    posX = -width/4.5
    posY = -width/3.2
    tamanho = width/10
    translate(-width/2.5, -height/2.3)
    noStroke()
 
    
    noFill()
    stroke(corBG, satBR, briBG+int(random(-2, 2)))
    strokeWeight(width/10)
    rect(-width/8.5, -height/10.5, width*1.03, height*1.06)

    // DOIS
    var rd5 = int(random(4))
    var rd = int(random(2))
    var bri = 4
    tamanho = width/15
    noStroke()
    for (var x = 0; x < width/1.3; x += tamanho) {

      for (var y = 0; y < height/1.2; y += tamanho) {


        var rdcor = int(random(2))
        var rd = int(random(14))
        var rd2 = int(random(4))
        var rd3 = int(random(4))
        var rd4 = int(random(2))

        strokeWeight(width/550);
        noStroke()

        line(x, 0, x, height/1.11);
        line(0, y, width/1.25, y);

     if(rdcor == 0){fill(200, 200, 6)}
       if(rdcor == 1){fill(200, 300, 4)}
noFill()
       
beginShape();
        if(rd5 == 0){if(y> height/dist1 && y < height/dist2){noFill()}else{fill(random(cor1, cor2), sat, 4)}}
        if(rd5 == 1){if(y> height/dist3 && y < height/dist4){fill(corBG, 150, 5); noFill()}else{fill(random(cor1, cor2), sat, 4)}}
        if(rd5 == 2){fill(random(cor1, cor2), sat, 4)}
        if(rd5 == 3){fill(random(cor1, cor2), sat, 4)}



      //  var ma = []
        var b = []
        var b2 = []
        var c = int(random(1,3))
        noStroke()
        for(var i = 0; i< 100; i++){
          b[i] = int(random(width/15, width/10))
        }
        for(var i = 0; i< 100; i++){

        b2[i] = int(random(width/70, width/50))
        }
        var cont = 0
          for(var a = 0; a < TWO_PI; a += random(0.15,0.3)){
           
          var xoff = cos(a) + 1;
          var yoff = sin(a) + 1;
          r = map(noise(xoff, yoff), 0, 1, b2[cont], b[cont]);
          var x2 = x+tamanho/2 + r * sin(a);
          var y2 = y+tamanho/2+ r/c * cos(a);
          vertex(x2, y2);
          cont += 1
        //  console.log(b2[cont])
          }
        endShape(CLOSE);
       if(rd2 == 0){rect(x, y, tamanho/2, tamanho)}
       if(rd2 == 1){rect(x+(tamanho/2), y, tamanho/2, tamanho)}
       if(rd2 == 2){rect(x, y, tamanho, tamanho/2)}
       if(rd2 == 3){rect(x, y+(tamanho/2), tamanho, tamanho/2)}
       strokeWeight(width/550);

       var rdsat = int(random(2))
       if(rdsat == 0){var rdsat1 = sat; var rdbri = bri}else{var rdsat1 = 0; var rdbri = random(5,10)}

       if(rd5 == 0){if(y> height/dist1 && y < height/dist2){
        if(rdcor == 0){noFill(); noStroke()}
        if(rdcor == 1){noFill(); noStroke()}
      }else{
       if(rdcor == 0){fill(corD1, int(random(satD1,satD1+50)), int(random(5,7))); stroke(0)}
       if(rdcor == 1){fill(corD2, satD2, 0); noStroke()}
      }}
      var clinha = int(random(2))
      if(clinha == 0){var cl = 0}else{var cl = 10}
      if(rd5 == 1){if(y> height/dist3 && y < height/dist4){
        if(rdcor == 0){fill(random(cor1, cor2), rdsat1, rdbri); stroke(cl)}
        if(rdcor == 1){noFill(); stroke(cl)}
      }else{
       if(rdcor == 0){fill(corD1, int(random(satD1,satD1+50)), int(random(5,7))); stroke(0)}
       if(rdcor == 1){fill(corD2, satD2, 0); noStroke()}
      }}

      if(rd5 == 2){
       if(rdcor == 0){fill(corD1, int(random(satD1,satD1+50)), int(random(5,7))); stroke(0)}
       if(rdcor == 1){fill(corD2, satD2, 0); noStroke()}
      }
      if(rd5 == 3){
        if(rdcor == 0){fill(corD1, int(random(satD1,satD1+50)), int(random(5,7))); stroke(0)}
        if(rdcor == 1){fill(random(300), satD2, random(4)); noStroke()}
       }
       if(rd3 == 0){rect(x, y, tamanho/2, tamanho)}
       if(rd3 == 1){rect(x+(tamanho/2), y, tamanho/2, tamanho)}
       if(rd3 == 2){rect(x, y, tamanho, tamanho/2)}
       if(rd3 == 3){rect(x, y+(tamanho/2), tamanho, tamanho/2)}
      // noStroke()
      if(rd5 == 0){
        var v1 = 2 
        var v2 = 2}
      else{
        var v1 = random(0.2,2)  
        var v2 = random(0.2,2)   
      }
      
      if(rd5 == 0){if(y> height/dist1 && y < height/dist2){strokeWeight(width/550);  stroke(random(cor1, cor2), sat, bri-random(3))}else{stroke(corD2, satD2, 4)}}
      if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke()}else{stroke(corD2, satD2, 4)}}
      if(rd5 == 2){stroke(corD2, satD2, 4)}
      if(rd5 == 3){stroke(corD2, satD2, 4)}

      // MEXER NESTE DAQUI
      if(rd5 == 0){if(y> height/dist1 && y < height/dist2){strokeWeight(width/550); stroke(random(cor1, cor2), sat, bri-random(3)); noFill()}else{if(rd == 0){fill(random(cor1, cor2), sat, bri)}else if(rd == 1){fill(random(cor1, cor2), sat, bri)}else{fill(random(cor1, cor2), sat, bri)}}}
      if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{if(rd == 0){fill(random(cor1, cor2), sat, bri)}else if(rd == 1){fill(random(cor1, cor2), sat, bri)}else{fill(random(cor1, cor2), sat, bri)}}}
      if(rd5 == 2){if(rd == 0){fill(random(cor1, cor2), sat, bri)}else if(rd == 1){fill(random(cor1, cor2), sat, bri)}else{fill(random(cor1, cor2), sat, bri)}}
      if(rd5 == 3){if(rd == 0){fill(random(cor1, cor2), sat, bri)}else if(rd == 1){fill(random(cor1, cor2), sat, bri)}else{fill(random(cor1, cor2), sat, bri)}}

        //fill(0) // esse
        if(rd == 0 || rd2 == 0 || rd3 == 0){arc(x, y+(tamanho), tamanho, tamanho, PI+HALF_PI, 0)}
     //   if(rd == 0){fill(200, 300, 4)}else{fill(200, 300, 6)}
     if(rd5 == 0){if(y> height/dist1 && y < height/dist2){strokeWeight(width/550); stroke(random(cor1, cor2), sat, bri-random(3)); noFill()}else{fill(corBG, satBR, briBG)}}
     if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{fill(corBG, satBR, briBG)}}
     if(rd5 == 2){fill(corBG, satBR, briBG)}
     if(rd5 == 3){fill(corBG, satBR, briBG)}

        
          //fill(random(150, 300), 300, 4)}else if(rd == 1){fill(random(150, 300), 300, 4)}else{fill(random(150, 300), 300, 4) }
        if(rd == 0 || rd2 == 0 || rd3 == 0){arc(x, y+(tamanho), tamanho/v2, tamanho/v1, PI+HALF_PI, 0)}
        
        //fill(0) // esse
        if(rd5 == 0){if(y> height/dist1 && y < height/dist2){strokeWeight(width/550); stroke(random(cor1, cor2), sat, bri-random(3)); noFill()}else{if(rd == 0){fill(random(cor1, cor2), sat, bri)}else if(rd == 1){fill(random(cor1, cor2), sat, bri)}else{fill(random(cor1, cor2), sat, bri)}}}
        if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{if(rd == 0){fill(random(cor1, cor2), sat, bri)}else if(rd == 1){fill(random(cor1, cor2), sat, bri)}else{fill(random(cor1, cor2), sat, bri)}}}
        if(rd5 == 2){if(rd == 0){fill(random(cor1, cor2), sat, bri)}else if(rd == 1){fill(random(cor1, cor2), sat, bri)}else{fill(random(cor1, cor2), sat, bri)}}
        if(rd5 == 3){if(rd == 0){fill(random(cor1, cor2), sat, bri)}else if(rd == 1){fill(random(cor1, cor2), sat, bri)}else{fill(random(cor1, cor2), sat, bri)}}

       if(rd == 1 || rd2 == 1 || rd3 == 1){arc(x+(tamanho), y+(tamanho), tamanho, tamanho, PI, PI+HALF_PI)}
       if(rd5 == 0){if(y> height/dist1 && y < height/dist2){strokeWeight(width/550); stroke(random(cor1, cor2), sat, bri-random(3)); noFill()}else{fill(corBG, satBR, briBG)}}
       if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{fill(corBG, satBR, briBG)}}
       if(rd5 == 2){fill(corBG, satBR, briBG)}
       if(rd5 == 3){fill(corBG, satBR, briBG)}

         // if(rd == 0){fill(random(cor1, cor2), sat, bri)}else if(rd == 1){fill(random(cor1, cor2), sat, bri)}else{fill(random(cor1, cor2), sat, bri)}
        if(rd == 1 || rd2 == 1 || rd3 == 1){arc(x+(tamanho), y+(tamanho), tamanho/v2, tamanho/v1, PI, PI+HALF_PI)}
        
        //fill(0) // esse
        if(rd == 2 || rd2 == 2 || rd3 == 2){arc(x+(tamanho), y, tamanho, tamanho, HALF_PI, PI)}
        if(rd == 0){fill(random(cor1, cor2), sat, bri)}else if(rd == 1){fill(random(cor1, cor2), sat, bri)}else{fill(random(cor1, cor2), sat, bri)}

        if(rd5 == 0){if(y> height/dist1 && y < height/dist2){strokeWeight(width/550); stroke(random(cor1, cor2), sat, bri-random(3)); noFill()}else{fill(corBG, satBR, briBG)}}
        if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{fill(corBG, satBR, briBG)}}
        if(rd5 == 2){fill(corBG, satBR, briBG)}
        if(rd5 == 3){fill(corBG, satBR, briBG)}

        if(rd == 2 || rd2 == 2 || rd3 == 2){arc(x+(tamanho), y, tamanho/v2, tamanho/v1, HALF_PI, PI)}
        
        //fill(0) // esse
        if(rd5 == 0){if(y> height/dist1 && y < height/dist2){strokeWeight(width/550); stroke(random(cor1, cor2), sat, bri-random(3)); noFill()}else{if(rd == 0){fill(random(cor1, cor2), sat, bri)}else if(rd == 1){fill(random(cor1, cor2), sat, bri)}else{fill(random(cor1, cor2), sat, bri)}}}
        if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{if(rd == 0){fill(random(cor1, cor2), sat, bri)}else if(rd == 1){fill(random(cor1, cor2), sat, bri)}else{fill(random(cor1, cor2), sat, bri)}}}
        if(rd5 == 2){if(rd == 0){fill(random(cor1, cor2), sat, bri)}else if(rd == 1){fill(random(cor1, cor2), sat, bri)}else{fill(random(cor1, cor2), sat, bri)}}

        if(rd5 == 3){if(rd == 0){fill(random(cor1, cor2), sat, bri)}else if(rd == 1){fill(random(cor1, cor2), sat, bri)}else{fill(random(cor1, cor2), sat, bri)}}
        // noFill()
        if(rd == 3 || rd2 == 3 || rd3 == 3){arc(x, y, tamanho, tamanho, 0, HALF_PI)}
        if(rd5 == 0){if(y> height/dist1 && y < height/dist2){strokeWeight(width/550); stroke(random(cor1, cor2), sat, bri-random(3)); noFill()}else{fill(corBG, satBR, briBG)}}
        if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{fill(corBG, satBR, briBG)}}
        if(rd5 == 2){fill(corBG, satBR, briBG)}
        if(rd5 == 3){fill(corBG, satBR, briBG)}

      //  if(rd == 0){fill(random(cor1, cor2), sat, bri)}else if(rd == 1){fill(random(cor1, cor2), sat, bri)}else{fill(random(cor1, cor2), sat, bri)}
        if(rd == 3 || rd2 == 3 || rd3 == 3){arc(x, y, tamanho/v2, tamanho/v1, 0, HALF_PI)}

        
      //  ellipse(x,y, width/50)
      //  fill(200, 300, 4)
       // stroke(0, 100, 20)
       // noStroke()
        //noFill()
        strokeWeight(width/550);
        if(rd5 == 0){if(y> height/dist1 && y < height/dist2){noStroke(); noFill()}else{if(rd2 == 0){fill(corBG, satBR, briBG)}else{fill(corBG, satBR, briBG+random(2))}; stroke(0)}}
        if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{if(rd2 == 0){fill(corBG, satBR, briBG)}else{fill(corBG, satBR, briBG+random(2))}; stroke(0)}}
        if(rd5 == 2){if(rd2 == 0){fill(corBG, satBR, briBG)}else{fill(corBG, satBR, briBG+random(2))}; stroke(0)}
        if(rd5 == 3){if(rd2 == 0){fill(corBG, satBR, briBG)}else{fill(corBG, satBR, briBG+random(2))}; stroke(0)}
      

   // noFill()
        if(rd == 4){triangle(x, y, x, y+(tamanho), x+(tamanho/1.8), y+(tamanho))}
         if(rd == 5){triangle(x+(tamanho), y, x+(tamanho), y+(tamanho), x+(tamanho/2.2), y+(tamanho))}
        if(rd == 6){triangle(x+(tamanho), y, x+(tamanho), y+(tamanho), x+(tamanho/2.2), y)}
        if(rd == 7){triangle(x, y, x, y+(tamanho), x+(tamanho/1.8), y)}
        if(rd == 8){triangle(x, y, x, y+(tamanho/1.8), x+(tamanho), y)}
        if(rd == 9){triangle(x, y, x+(tamanho), y+(tamanho/1.8), x+(tamanho), y)}
        if(rd == 10){triangle(x, y+(tamanho), x+(tamanho), y+(tamanho), x+(tamanho), y+(tamanho/2.2))} 
      //  if(rd == 9){flower(x, y, width/200, height/10, 5);         ;}
        stroke(corBG, satBR, briBG)
        var cont = 0
        noFill()
        for(var i = 1; i <15; i++){
          push()
          //rotate(1/cont)
        if(rd == 10){rect(x, y, tamanho-cont, tamanho-cont)} 
        if(rd == 10){rect(x, y, tamanho-cont, tamanho-cont)} 

        cont +=5
        pop()
        }



       // }
      }
    }

       //-------------------------------------------------------
    // BORDAS
    tamanho = width/15
    noStroke()
   
      for (var x = -width/15; x < 0; x += tamanho) {
        var v1 = int(random(2,5))
        for (var y = 0; y < height/1.2; y += tamanho) {

        var rd = int(random(14))
        var rd2 = int(random(4))
        var rd3 = int(random(4))
        var rd4 = int(random(2))

        strokeWeight(width/550);
        noStroke()
        
        fill(corBG, satBR, briBG)
        line(x, 0, x, height/2);
        line(0, y, width/3, y);

       if(rd2 == 0){rect(x, y, tamanho/2, tamanho)}
       if(rd2 == 1){rect(x+(tamanho/2), y, tamanho/2, tamanho)}
       if(rd2 == 2){rect(x, y, tamanho, tamanho/2)}
       if(rd2 == 3){rect(x, y+(tamanho/2), tamanho, tamanho/2)}

       if(rd3 == 0){rect(x, y, tamanho/2, tamanho)}
       if(rd3 == 1){rect(x+(tamanho/2), y, tamanho/2, tamanho)}
       if(rd3 == 2){rect(x, y, tamanho, tamanho/2)}
       if(rd3 == 3){rect(x, y+(tamanho/2), tamanho, tamanho/2)}

          if(rd == 3 || rd2 == 3 ){
           // fill(0)
           // ellipse(x, y+(tamanho/2), width/random(100,70)) 
         //  if(rdForma == 0){flower(x, y, width/200, height/10, 5, 6); }
        //   if(rdForma == 1){flower(x, y, width/700, height/random(40,15), 10, 4); }

          //  ponto1.push(createVector(x, y));
          }
        }
      
    }

// -------------------------------------------------------------------------------

 noStroke()

   for (var x = width/1.25; x < width/1.2; x += tamanho) {
     var v1 = int(random(2,5))
     for (var y = 0; y < height/1.2; y += tamanho) {

     var rd = int(random(14))
     var rd2 = int(random(4))
     var rd3 = int(random(4))
     var rd4 = int(random(2))

     strokeWeight(width/550);
     noStroke()
     

    fill(corBG, satBR, briBG)
     line(x, 0, x, height/2);
     line(0, y, width/3, y);

    if(rd2 == 0){rect(x, y, tamanho/2, tamanho)}
    if(rd2 == 1){rect(x+(tamanho/2), y, tamanho/2, tamanho)}
    if(rd2 == 2){rect(x, y, tamanho, tamanho/2)}
    if(rd2 == 3){rect(x, y+(tamanho/2), tamanho, tamanho/2)}

    if(rd3 == 0){rect(x, y, tamanho/2, tamanho)}
    if(rd3 == 1){rect(x+(tamanho/2), y, tamanho/2, tamanho)}
    if(rd3 == 2){rect(x, y, tamanho, tamanho/2)}
    if(rd3 == 3){rect(x, y+(tamanho/2), tamanho, tamanho/2)}

       if(rd == 3 || rd2 == 3 ){
        // fill(0)
        // ellipse(x, y+(tamanho/2), width/random(100,70)) 
      //  if(rdForma == 0){flower(x, y, width/200, height/10, 5, 6); }
     //   if(rdForma == 1){flower(x, y, width/700, height/random(40,15), 10, 4); }

       //  ponto1.push(createVector(x, y));
       }
     }
   
 }

// -------------------------------------------------------------------------------

 noStroke()

   for (var x = 0; x < width/1.25; x += tamanho) {
     var v1 = int(random(2,5))
     for (var y = height/1.18; y < height/1.15; y += tamanho) {

     var rd = int(random(14))
     var rd2 = int(random(4))
     var rd3 = int(random(4))
     var rd4 = int(random(2))

     strokeWeight(width/550);
     noStroke()
     

    fill(corBG, satBR, briBG)
     line(x, 0, x, height/2);
     line(0, y, width/3, y);

    if(rd2 == 0){rect(x, y, tamanho/2, tamanho)}
    if(rd2 == 1){rect(x+(tamanho/2), y, tamanho/2, tamanho)}
    if(rd2 == 2){rect(x, y, tamanho, tamanho/2)}
    if(rd2 == 3){rect(x, y+(tamanho/2), tamanho, tamanho/2)}

    if(rd3 == 0){rect(x, y, tamanho/2, tamanho)}
    if(rd3 == 1){rect(x+(tamanho/2), y, tamanho/2, tamanho)}
    if(rd3 == 2){rect(x, y, tamanho, tamanho/2)}
    if(rd3 == 3){rect(x, y+(tamanho/2), tamanho, tamanho/2)}

       if(rd == 3 || rd2 == 3 ){
        // fill(0)
        // ellipse(x, y+(tamanho/2), width/random(100,70)) 
      //  if(rdForma == 0){flower(x, y, width/200, height/10, 5, 6); }
     //   if(rdForma == 1){flower(x, y, width/700, height/random(40,15), 10, 4); }

       //  ponto1.push(createVector(x, y));
       }
     }
   
 }

// -------------------------------------------------------------------------------


 noStroke()

   for (var x = 0; x < width/1.25; x += tamanho) {
     var v1 = int(random(2,5))
     for (var y = -height/18; y < -height/19; y += tamanho) {

     var rd = int(random(14))
     var rd2 = int(random(4))
     var rd3 = int(random(4))
     var rd4 = int(random(2))

     strokeWeight(width/550);
     noStroke()
     

    fill(corBG, satBR, briBG)
     line(x, 0, x, height/2);
     line(0, y, width/3, y);

    if(rd2 == 0){rect(x, y, tamanho/2, tamanho)}
    if(rd2 == 1){rect(x+(tamanho/2), y, tamanho/2, tamanho)}
    if(rd2 == 2){rect(x, y, tamanho, tamanho/2)}
    if(rd2 == 3){rect(x, y+(tamanho/2), tamanho, tamanho/2)}

    if(rd3 == 0){rect(x, y, tamanho/2, tamanho)}
    if(rd3 == 1){rect(x+(tamanho/2), y, tamanho/2, tamanho)}
    if(rd3 == 2){rect(x, y, tamanho, tamanho/2)}
    if(rd3 == 3){rect(x, y+(tamanho/2), tamanho, tamanho/2)}

       if(rd == 3 || rd2 == 3 ){
        // fill(0)
        // ellipse(x, y+(tamanho/2), width/random(100,70)) 
      //  if(rdForma == 0){flower(x, y, width/200, height/10, 5, 6); }
     //   if(rdForma == 1){flower(x, y, width/700, height/random(40,15), 10, 4); }

       //  ponto1.push(createVector(x, y));
       }
     }
   
 }

// -------------------------------------------------------------------------------
    tamanho = width/5
    var ponto1 = []
    if(rddist == 2){ vv1 = 3;  vv2 = 1}
    if(rddist == 0){ vv1 = 0; vv2 = 1.25}
    if(rddist == 1){ vv1 = 0; vv2 = 1.25}

    noStroke()
      for (var x = 0; x < width/1.2; x += tamanho) {
        var v1 = int(random(2,5))
        for (var y = 0; y < height/1.2; y += tamanho) {
        var rdcor = int(random(2))
        var rd = int(random(14))
        var rd2 = int(random(4))
        var rd3 = int(random(4))
        var rd4 = int(random(2))

        strokeWeight(width/550);
        noStroke()
        noFill()
        line(x, 0, x, height/2);
        line(0, y, width/3, y);

       if(rd2 == 0){rect(x, y, tamanho/2, tamanho)}
       if(rd2 == 1){rect(x+(tamanho/2), y, tamanho/2, tamanho)}
       if(rd2 == 2){rect(x, y, tamanho, tamanho/2)}
       if(rd2 == 3){rect(x, y+(tamanho/2), tamanho, tamanho/2)}

       if(rd3 == 0){rect(x, y, tamanho/2, tamanho)}
       if(rd3 == 1){rect(x+(tamanho/2), y, tamanho/2, tamanho)}
       if(rd3 == 2){rect(x, y, tamanho, tamanho/2)}
       if(rd3 == 3){rect(x, y+(tamanho/2), tamanho, tamanho/2)}

          if(rd == 3 || rd2 == 3 ){
            fill(0)
           // ellipse(x, y+(tamanho/2), width/random(100,70)) 
           if(rdForma == 0){flower(x, y, width/200, height/10, 5, 6); }
           if(rdForma == 1){flower(x, y, width/700, height/random(40,15), 10, 4); }

            ponto1.push(createVector(x, y));
          }
        
      noFill()
      }
    }

    beginShape();
    strokeWeight(width/300)

    if(rd5 == 2){stroke(corCM, satCM+50 , briSM+16)}else{stroke(10)}

    for(var i = 0; i <= ponto1.length*0.43; i++){

          curveVertex(ponto1[i].x, ponto1[i].y);

    }
    endShape();

    beginShape();

    if(rd5 == 2){stroke(corCM, satCM+50 , briSM+16)}else{stroke(10)}


    for(var i = int(ponto1.length*0.13); i <= int(ponto1.length*0.66); i++){

          curveVertex(ponto1[i].x, ponto1[i].y);
    }
    endShape();


    beginShape();

    if(rd5 == 2){stroke(corCM, satCM+50 , briSM+16)}else{stroke(10)}


    for(var i = int(ponto1.length*0.46); i < ponto1.length; i++){

          curveVertex(ponto1[i].x, ponto1[i].y);
    }
    endShape();

//-------------------------------------------------------
    tamanho = width/5
    noStroke()
    for (var x = 0; x < width/1.3; x += tamanho) {
      for (var y = 0; y < height/1.25; y += tamanho) {

        var rdcor = int(random(2))
        var rd = int(random(14))
        var rd2 = int(random(4))
        var rd3 = int(random(4))
        var rd4 = int(random(2))

        strokeWeight(width/550);
        noStroke()

        line(x, 0, x, height/2);
        line(0, y, width/3, y);

     if(rdcor == 0){fill(200, 200, 6); stroke(0)}
       if(rdcor == 1){fill(200, 300, 4); noStroke()}
noFill()
       

       if(rd2 == 0){rect(x, y, tamanho/2, tamanho)}
       if(rd2 == 1){rect(x+(tamanho/2), y, tamanho/2, tamanho)}
       if(rd2 == 2){rect(x, y, tamanho, tamanho/2)}
       if(rd2 == 3){rect(x, y+(tamanho/2), tamanho, tamanho/2)}
       strokeWeight(width/expLM1);

       
    
      tamanho = width/5

      var v1 = random(0.2,2)  
      var v2 = random(0.2,2)  
      var v3 = random(1,2)  
      var v4 = random(1,2)

      if(rd5 == 0){if(y> height/dist1 && y < height/dist2){noStroke(); noFill()}else{stroke(corLM); fill(corBG, satBR, briBG)}}
      if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{stroke(corLM); fill(corBG, satBR, briBG)}}
      if(rd5 == 2){stroke(corLM); fill(corBG, satBR, briBG)}
      if(rd5 == 3){stroke(corLM); fill(corBG, satBR, briBG)}

        
      if(rd5 == 0){if(y> height/dist1 && y < height/dist2){noStroke(); noFill()}else{if(rd == 0){fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4)}}}
      if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{if(rd == 0){fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4)}}}
      if(rd5 == 2){if(rd == 0){fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4)}}
      if(rd5 == 3){if(rd == 0){fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4)}}


        //fill(0) // esse
        if(rd == 0 || rd2 == 0 || rd3 == 0){arc(x, y+(tamanho), tamanho, tamanho, PI+HALF_PI, 0)}
     //   if(rd == 0){fill(200, 300, 4)}else{fill(200, 300, 6)}
     if(rd5 == 0){if(y> height/dist1 && y < height/dist2){noStroke(); noFill()}else{fill(corCM, satCM , briSM)}}
     if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{fill(corCM, satCM , briSM)}}
     if(rd5 == 2){fill(corCM, satCM , briSM)}
     if(rd5 == 3){fill(corCM, satCM , briSM)}

          //fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4) }
        if(rd == 0 || rd2 == 0 || rd3 == 0){arc(x, y+(tamanho), tamanho/v4, tamanho/v3, PI+HALF_PI, 0)}

        if(rd5 == 0){if(y> height/dist1 && y < height/dist2){noStroke(); noFill()}else{stroke(corLM); fill(corBG, satBR, briBG)}}
        if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{stroke(corLM); fill(corBG, satBR, briBG)}}
        if(rd5 == 2){stroke(corLM); fill(corBG, satBR, briBG)}
        if(rd5 == 3){stroke(corLM); fill(corBG, satBR, briBG)}

                //fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4) }
      if(rd == 0 || rd2 == 0 || rd3 == 0){arc(x, y+(tamanho), tamanho/v2, tamanho/v1, PI+HALF_PI, 0)}

        
      //fill(0) // esse
      if(rd5 == 0){if(y> height/dist1 && y < height/dist2){noStroke(); noFill()}else{if(rd == 0){fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4)}}}
      if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{if(rd == 0){fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4)}}}
      if(rd5 == 2){if(rd == 0){fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4)}}
      if(rd5 == 3){if(rd == 0){fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4)}}
        

     //   noFill()
       if(rd == 1 || rd2 == 1 || rd3 == 1){arc(x+(tamanho), y+(tamanho), tamanho, tamanho, PI, PI+HALF_PI)}
       
       if(rd5 == 0){if(y> height/dist1 && y < height/dist2){noStroke(); noFill()}else{fill(corCM, satCM , briSM)}}
        if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{fill(corCM, satCM , briSM)}}
        if(rd5 == 2){fill(corCM, satCM , briSM)}
        if(rd5 == 3){fill(corCM, satCM , briSM)}

       // if(rd == 0){fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4)}
        if(rd == 1 || rd2 == 1 || rd3 == 1){arc(x+(tamanho), y+(tamanho), tamanho/v4, tamanho/v3, PI, PI+HALF_PI)}

        if(rd5 == 0){if(y> height/dist1 && y < height/dist2){noStroke(); noFill()}else{stroke(corLM); fill(corBG, satBR, briBG)}}
        if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{stroke(corLM); fill(corBG, satBR, briBG)}}
        if(rd5 == 2){stroke(corLM); fill(corBG, satBR, briBG)}
        if(rd5 == 3){stroke(corLM); fill(corBG, satBR, briBG)}

               // if(rd == 0){fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4)}
        if(rd == 1 || rd2 == 1 || rd3 == 1){arc(x+(tamanho), y+(tamanho), tamanho/v2, tamanho/v1, PI, PI+HALF_PI)}
        
        //fill(0) // esse
        if(rd5 == 0){if(y> height/dist1 && y < height/dist2){noStroke(); noFill()}else{if(rd == 0){fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4)}}}
        if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{if(rd == 0){fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4)}}}
        if(rd5 == 2){if(rd == 0){fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4)}}
        if(rd5 == 3){if(rd == 0){fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4)}}

        if(rd == 2 || rd2 == 2 || rd3 == 2){arc(x+(tamanho), y, tamanho, tamanho, HALF_PI, PI)}
       // if(rd == 0){fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4)}
       if(rd5 == 0){if(y> height/dist1 && y < height/dist2){noStroke(); noFill()}else{fill(corCM, satCM , briSM)}}
       if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{fill(corCM, satCM , briSM)}}
       if(rd5 == 2){fill(corCM, satCM , briSM)}
       if(rd5 == 3){fill(corCM, satCM , briSM)}

       if(rd == 2 || rd2 == 2 || rd3 == 2){arc(x+(tamanho), y, tamanho/v4, tamanho/v3, HALF_PI, PI)}

       
       if(rd5 == 0){if(y> height/dist1 && y < height/dist2){noStroke(); noFill()}else{stroke(corLM); fill(corBG, satBR, briBG)}}
       if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{stroke(corLM); fill(corBG, satBR, briBG)}}
       if(rd5 == 2){stroke(corLM); fill(corBG, satBR, briBG)}
       if(rd5 == 3){stroke(corLM); fill(corBG, satBR, briBG)}

       if(rd == 2 || rd2 == 2 || rd3 == 2){arc(x+(tamanho), y, tamanho/v2, tamanho/v1, HALF_PI, PI)}
        
        //fill(0) // esse
       // if(rd == 0){fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4)}
         // ponto = createVector(x, y)
       // noFill()
        if(rd == 3 || rd2 == 3 || rd3 == 3){
          arc(x, y, tamanho, tamanho, 0, HALF_PI)
       
     
        }     

        if(rd5 == 0){if(y> height/dist1 && y < height/dist2){noStroke(); noFill()}else{fill(corCM, satCM , briSM)}}
        if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{fill(corCM, satCM , briSM)}}
        if(rd5 == 2){fill(corCM, satCM , briSM)}
        if(rd5 == 3){fill(corCM, satCM , briSM)}


        //  if(rd == 0){fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4)}
          if(rd == 3 || rd2 == 3 || rd3 == 3){
            arc(x, y, tamanho/v4, tamanho/v3, 0, HALF_PI)
          //  ellipse(x, y, width/30)
        }
  
        if(rd5 == 0){if(y> height/dist1 && y < height/dist2){noStroke(); noFill()}else{stroke(corLM); fill(corBG, satBR, briBG)}}
        if(rd5 == 1){if(y> height/dist3 && y < height/dist4){noStroke(); noFill()}else{stroke(corLM); fill(corBG, satBR, briBG)}}
        if(rd5 == 2){stroke(corLM); fill(corBG, satBR, briBG)}
        if(rd5 == 3){stroke(corLM); fill(corBG, satBR, briBG)}

              //  if(rd == 0){fill(random(cor1, cor2), sat, 4)}else if(rd == 1){fill(random(cor1, cor2), sat, 4)}else{fill(random(cor1, cor2), sat, 4)}
        if(rd == 3 || rd2 == 3 || rd3 == 3){arc(x, y, tamanho/v2, tamanho/v1, 0, HALF_PI)}
            arc(x, y, tamanho/v4, tamanho/v3, 0, HALF_PI)
        
      
        if(rd2 == 0){fill(4)}else{noFill()}
   
      }
    }

// -------------------------------------------------------------------


  noLoop();
}

function windowResized() {
  setupCanvas();
  redraw();
}

function keyPressed() {
  if (key.toLowerCase() === "s") 
  save('Entropy');
}

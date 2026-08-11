// Copyright 2023 Patricia Rocha
// pattrochaa@gmail.com

function comp6(posW){

  push()
  noFill()
  var rdCL = int(random(2))
  if(rdCL == 0){stroke(0)}
  if(rdCL == 1){stroke(0)}
  strokeWeight(width/300)
 // translate(0, 0, -width/4)
  var rd 

  for(var i = width/15; i< width/1.1; i += width/1550){
    beginShape();
    let xoff = 0; 
    stroke(0, 150, 4)
    for (let x = 0; x <= width*1.6; x += width/random(10, 150)) {
      rd = int(random(2))
      let y = map(noise(xoff, yoff), -0.5, 3, i*1, i*6);
      
    

  let rdc = 0.6
  
    /* let sat = 200
    let bri = 6
    let exp = 100 */
    let sat2 = 300
    let sat = 200
    let bri2 = 0
    let exp = 10000
    let sd = 1
    
    // cor = cc
  for(let l = 0; l<4 ; l++){

    if(rdc == 1){bri = 1}
    if(rdc == 1.3){bri = 2}
    if(rdc == 1.6){bri = 3}
    if(rdc == 1.9000000000000001){bri = 4}
    if(rdc == 2.2){bri = 5}
    if(rdc == 2.5){bri =5.5}
    if(rdc == 2.8){bri = 6}
    if(rdc == 3.0999999999999996){bri = 6.5}
    bri = random(3)
  
    if(xoff > rdc && xoff < rdc+0.3){  
      vertex(x, y-width/30);
    
    if(l == cont3){
      if(yoff > 0.65 && yoff < 1.75){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); rect(x, y, width/300, height/1000)}
      if(yoff > 0.75 && yoff < 1.8){strokeWeight(width/200); stroke(0); }
    }else{
      if(yoff > 0.65 && yoff < 1.75){strokeWeight(width/exp); stroke(vcor2[l], sat, bri); rect(x, y, width/300, height/1000)}
      if(yoff > 0.75 && yoff < 1.8){strokeWeight(width/200); stroke(0); }
    }
    if(l == cont4){
      if(yoff > 0.8 && yoff < 1.85){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))}
      if(yoff > 0.85 && yoff < 1.9){strokeWeight(width/200); stroke(0); }
    }else{
      if(yoff > 0.8 && yoff < 1.85){strokeWeight(width/exp); stroke(vcor3[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))}
      if(yoff > 0.85 && yoff < 1.9){strokeWeight(width/200); stroke(0); }
    }
    if(l == cont5){
      if(yoff > 0.9 && yoff < 1.95){strokeWeight(width/exp); stroke(vcor0, sat2, bri2);  ellipse(x, y, width/random(1,50), height/random(1,100))} 
      if(yoff > 0.95 && yoff < 2){strokeWeight(width/200); stroke(0); }
    }else{
      if(yoff > 0.9 && yoff < 1.95){strokeWeight(width/exp); stroke(vcor4[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
      if(yoff > 0.95 && yoff < 2){strokeWeight(width/200); stroke(0); }
    } 
    if(l == cont6){
      if(yoff > 1 && yoff < 2.05){strokeWeight(width/exp); stroke(vcor0, sat2, bri2);  ellipse(x, y, width/random(1,50), height/random(1,100))}
      if(yoff > 1.05 && yoff < 2.1){strokeWeight(width/200); stroke(0); }
    }else{
      if(yoff > 1 && yoff < 2.05){strokeWeight(width/exp); stroke(vcor5[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))}
      if(yoff > 1.05 && yoff < 2.1){strokeWeight(width/200); stroke(0); }
    }
    if(l == cont7){
      if(yoff > 1.1 && yoff < 2.15){strokeWeight(width/exp); stroke(vcor0, sat2, bri2);  ellipse(x, y, width/random(1,50), height/random(1,100))}
      if(yoff > 1.15 && yoff < 2.2){strokeWeight(width/200); stroke(0); }
    }else{
      if(yoff > 1.1 && yoff < 2.15){strokeWeight(width/exp); stroke(vcor6[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))}
      if(yoff > 1.15 && yoff < 2.2){strokeWeight(width/200); stroke(0); }
    }
    if(l == cont8){
      if(yoff > 1.2 && yoff < 2.25){strokeWeight(width/exp); stroke(vcor0, sat2, bri2);  ellipse(x, y, width/random(1,50), height/random(1,100))} 
      if(yoff > 1.25 && yoff < 2.3){strokeWeight(width/200); stroke(0); }
    }else{
      if(yoff > 1.2 && yoff < 2.25){strokeWeight(width/exp); stroke(vcor7[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
      if(yoff > 1.25 && yoff < 2.3){strokeWeight(width/200); stroke(0); }
    }
    if(l == cont9){
      if(yoff > 1.3 && yoff < 2.35){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
      if(yoff > 1.35 && yoff < 2.4){strokeWeight(width/200); stroke(0); }
    }else{
      if(yoff > 1.3 && yoff < 2.35){strokeWeight(width/exp); stroke(vcor8[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
      if(yoff > 1.35 && yoff < 2.4){strokeWeight(width/200); stroke(0); }
    }
  
  if(l == cont10){
      if(yoff > 1.4 && yoff < 2.45){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
      if(yoff > 1.45 && yoff < 2.5){strokeWeight(width/200); stroke(0); }
  }else{
      if(yoff > 1.4 && yoff < 2.45){strokeWeight(width/exp); stroke(vcor9[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
      if(yoff > 1.45 && yoff < 2.5){strokeWeight(width/200); stroke(0); }
  }
  if(l == cont11){
      if(yoff > 1.5 && yoff < 2.55){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))}
      if(yoff > 1.55 && yoff < 2.6){strokeWeight(width/200); stroke(0); }
  }else{
      if(yoff > 1.5 && yoff < 2.55){strokeWeight(width/exp); stroke(vcor10[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))}
      if(yoff > 1.55 && yoff < 2.6){strokeWeight(width/200); stroke(0); }
  }
  if(l == cont12){
    if(yoff > 1.6 && yoff < 2.65){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 1.65 && yoff < 2.7){strokeWeight(width/200); stroke(0); }
  }else{
    if(yoff > 1.6 && yoff < 2.65){strokeWeight(width/exp); stroke(vcor11[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 1.65 && yoff < 2.7){strokeWeight(width/200); stroke(0); }
  }
  if(l == cont13){
    if(yoff > 1.7 && yoff < 2.75){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 1.75 && yoff < 2.8){strokeWeight(width/200); stroke(0); }
  }else{
    if(yoff > 1.7 && yoff < 2.75){strokeWeight(width/exp); stroke(vcor12[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 1.75 && yoff < 2.8){strokeWeight(width/200); stroke(0); }
  }
  
  if(l == cont14){
    if(yoff > 1.8 && yoff < 2.85){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 1.85 && yoff < 2.9){strokeWeight(width/200); stroke(0); }
  }else{
    if(yoff > 1.8 && yoff < 2.85){strokeWeight(width/exp); stroke(vcor13[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 1.85 && yoff < 2.9){strokeWeight(width/200); stroke(0); }
  }
  if(l == cont15){
    if(yoff > 1.9 && yoff < 2.95){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 1.95 && yoff < 3){strokeWeight(width/200); stroke(0); }
  }else{
    if(yoff > 1.9 && yoff < 2.95){strokeWeight(width/exp); stroke(vcor14[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 1.95 && yoff < 3){strokeWeight(width/200); stroke(0); }
  }
  if(l == cont16){
    if(yoff > 2 && yoff < 3.05){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 2.05 && yoff < 3.1){strokeWeight(width/200); stroke(0); }
  }else{
    if(yoff > 2 && yoff < 3.05){strokeWeight(width/exp); stroke(vcor15[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 2.05 && yoff < 3.1){strokeWeight(width/200); stroke(0); }
  }
  if(l == cont17){
    if(yoff > 2.1 && yoff < 3.15){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 2.1 && yoff < 3.15){strokeWeight(width/exp); stroke(vcor16[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont18){
    if(yoff > 2.2 && yoff < 3.25){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 2.25 && yoff < 3.3){strokeWeight(width/exp); stroke(vcor17[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont19){
    if(yoff > 2.3 && yoff < 3.35){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 2.35 && yoff < 3.4){strokeWeight(width/exp); stroke(vcor18[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont20){
    if(yoff > 2.4 && yoff < 3.45){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 2.45 && yoff < 3.5){strokeWeight(width/exp); stroke(vcor19[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont21){
    if(yoff > 2.5 && yoff < 3.55){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 2.55 && yoff < 3.6){strokeWeight(width/exp); stroke(vcor20[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  
  if(l == cont22){
    if(yoff > 2.6 && yoff < 3.65){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 2.65 && yoff < 3.7){strokeWeight(width/exp); stroke(vcor21[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont23){
    if(yoff > 2.7 && yoff < 3.75){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 2.75 && yoff < 3.8){strokeWeight(width/exp); stroke(vcor22[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont24){
    if(yoff > 2.8 && yoff < 3.85){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 2.85 && yoff < 3.9){strokeWeight(width/exp); stroke(vcor23[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont25){
    if(yoff > 2.9 && yoff < 3.95){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 2.95 && yoff < 4){strokeWeight(width/exp); stroke(vcor24[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont26){
    if(yoff > 3 && yoff < 4.05){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.05 && yoff < 4.1){strokeWeight(width/exp); stroke(vcor25[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont27){
    if(yoff > 3.1 && yoff < 4.15){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.15 && yoff < 4.2){strokeWeight(width/exp); stroke(vcor26[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont28){
    if(yoff > 3.2 && yoff < 4.25){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.25 && yoff < 4.3){strokeWeight(width/exp); stroke(vcor27[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont29){
    if(yoff > 3.3 && yoff < 4.35){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.35 && yoff < 4.4){strokeWeight(width/exp); stroke(vcor28[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont30){
    if(yoff > 3.4 && yoff < 4.45){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.45 && yoff < 4.5){strokeWeight(width/exp); stroke(vcor29[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont31){
    if(yoff > 3.5 && yoff < 4.55){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.55 && yoff < 4.6){strokeWeight(width/exp); stroke(vcor30[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont32){
    if(yoff > 3.6 && yoff < 4.65){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.65 && yoff < 4.7){strokeWeight(width/exp); stroke(vcor31[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont33){
    if(yoff > 3.7 && yoff < 4.75){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); rect(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.75 && yoff < 4.8){strokeWeight(width/exp); stroke(vcor32[l], sat, bri); rect(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont34){
    if(yoff > 3.8 && yoff < 4.85){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); rect(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.85 && yoff < 4.9){strokeWeight(width/exp); stroke(vcor33[l], sat, bri); rect(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont35){
    if(yoff > 3.9 && yoff < 4.95){strokeWeight(width/exp); stroke(vcor0, sat2, bri2); rect(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.95 && yoff < 5){strokeWeight(width/exp); stroke(vcor34[l], sat, bri); rect(x, y, width/random(1,50), height/random(1,100))} 
  } 
  
  
  
  strokeWeight(width/1000)
  stroke(bgC, 120, random(2,10))
  
  }
  rdc += 0.7
}
    if(rd == 1){
  }
    xoff += 0.05 //posW; // aumentar vai pra esquerdar, diminuir, para a direita random(0.02, 0.08)
  }
  yoff += 0.003;
  l += 0.03
  endShape(); 
  }

  pop()
  
}

function comp7(){

  push()
  noFill()
  var rdCL = int(random(2))
  if(rdCL == 0){stroke(0)}
  if(rdCL == 1){stroke(0)}
  strokeWeight(width/300)
 // translate(-width, -height, -width/4)
  var rd 

  for(var i = width/50; i< width/1.1; i += width/random(100, 700)){
    beginShape();
    let xoff = 0; 
    stroke(0, 150, 4)
    for (let x = 0; x <= width*1.6; x += width/random(30,250)) {
      rd = int(random(2))
      let y = map(noise(xoff, yoff), -0.1, 3, i*1, i*6);
      
    

  let rdc = 0.6
  
    /* let sat = 200
    let bri = 6
    let exp = 100 */
    let sat2 = 100
    let sat = 100
    let bri2 = random(6,6)
    let exp = 56000
    let sd = 1
    
    // cor = cc
  for(let l = 0; l<4 ; l++){

    if(rdc == 1){bri = 1}
    if(rdc == 1.3){bri = 2}
    if(rdc == 1.6){bri = 3}
    if(rdc == 1.9000000000000001){bri = 4}
    if(rdc == 2.2){bri = 5}
    if(rdc == 2.5){bri =5.5}
    if(rdc == 2.8){bri = 6}
    if(rdc == 3.0999999999999996){bri = 6.5}
    bri = random(6)
  
    if(xoff > rdc && xoff < rdc+0.3){  
     // vertex(x, y);
    //  rect(x, y, width/random(5000), width/random(5000))
    
    if(l == cont3){
      if(yoff > 0.65 && yoff < 1.75){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); rect(x, y, width/300, height/1000)}
      if(yoff > 0.75 && yoff < 1.8){strokeWeight(width/200); stroke(0); }
    }else{
      if(yoff > 0.65 && yoff < 1.75){strokeWeight(width/exp); stroke(vccor2[l], sat, bri); rect(x, y, width/300, height/1000)}
      if(yoff > 0.75 && yoff < 1.8){strokeWeight(width/200); stroke(0); }
    }
    if(l == cont4){
      if(yoff > 0.8 && yoff < 1.85){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))}
      if(yoff > 0.85 && yoff < 1.9){strokeWeight(width/200); stroke(0); }
    }else{
      if(yoff > 0.8 && yoff < 1.85){strokeWeight(width/exp); stroke(vccor3[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))}
      if(yoff > 0.85 && yoff < 1.9){strokeWeight(width/200); stroke(0); }
    }
    if(l == cont5){
      if(yoff > 0.9 && yoff < 1.95){strokeWeight(width/exp); stroke(vccor0, sat2, bri2);  ellipse(x, y, width/random(1,50), height/random(1,100))} 
      if(yoff > 0.95 && yoff < 2){strokeWeight(width/200); stroke(0); }
    }else{
      if(yoff > 0.9 && yoff < 1.95){strokeWeight(width/exp); stroke(vccor4[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
      if(yoff > 0.95 && yoff < 2){strokeWeight(width/200); stroke(0); }
    } 
    if(l == cont6){
      if(yoff > 1 && yoff < 2.05){strokeWeight(width/exp); stroke(vccor0, sat2, bri2);  ellipse(x, y, width/random(1,50), height/random(1,100))}
      if(yoff > 1.05 && yoff < 2.1){strokeWeight(width/200); stroke(0); }
    }else{
      if(yoff > 1 && yoff < 2.05){strokeWeight(width/exp); stroke(vccor5[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))}
      if(yoff > 1.05 && yoff < 2.1){strokeWeight(width/200); stroke(0); }
    }
    if(l == cont7){
      if(yoff > 1.1 && yoff < 2.15){strokeWeight(width/exp); stroke(vccor0, sat2, bri2);  ellipse(x, y, width/random(1,50), height/random(1,100))}
      if(yoff > 1.15 && yoff < 2.2){strokeWeight(width/200); stroke(0); }
    }else{
      if(yoff > 1.1 && yoff < 2.15){strokeWeight(width/exp); stroke(vccor6[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))}
      if(yoff > 1.15 && yoff < 2.2){strokeWeight(width/200); stroke(0); }
    }
    if(l == cont8){
      if(yoff > 1.2 && yoff < 2.25){strokeWeight(width/exp); stroke(vcor0, sat2, bri2);  ellipse(x, y, width/random(1,50), height/random(1,100))} 
      if(yoff > 1.25 && yoff < 2.3){strokeWeight(width/200); stroke(0); }
    }else{
      if(yoff > 1.2 && yoff < 2.25){strokeWeight(width/exp); stroke(vccor7[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
      if(yoff > 1.25 && yoff < 2.3){strokeWeight(width/200); stroke(0); }
    }
    if(l == cont9){
      if(yoff > 1.3 && yoff < 2.35){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
      if(yoff > 1.35 && yoff < 2.4){strokeWeight(width/200); stroke(0); }
    }else{
      if(yoff > 1.3 && yoff < 2.35){strokeWeight(width/exp); stroke(vccor8[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
      if(yoff > 1.35 && yoff < 2.4){strokeWeight(width/200); stroke(0); }
    }
  
  if(l == cont10){
      if(yoff > 1.4 && yoff < 2.45){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
      if(yoff > 1.45 && yoff < 2.5){strokeWeight(width/200); stroke(0); }
  }else{
      if(yoff > 1.4 && yoff < 2.45){strokeWeight(width/exp); stroke(vccor9[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
      if(yoff > 1.45 && yoff < 2.5){strokeWeight(width/200); stroke(0); }
  }
  if(l == cont11){
      if(yoff > 1.5 && yoff < 2.55){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))}
      if(yoff > 1.55 && yoff < 2.6){strokeWeight(width/200); stroke(0); }
  }else{
      if(yoff > 1.5 && yoff < 2.55){strokeWeight(width/exp); stroke(vccor10[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))}
      if(yoff > 1.55 && yoff < 2.6){strokeWeight(width/200); stroke(0); }
  }
  if(l == cont12){
    if(yoff > 1.6 && yoff < 2.65){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 1.65 && yoff < 2.7){strokeWeight(width/200); stroke(0); }
  }else{
    if(yoff > 1.6 && yoff < 2.65){strokeWeight(width/exp); stroke(vccor11[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 1.65 && yoff < 2.7){strokeWeight(width/200); stroke(0); }
  }
  if(l == cont13){
    if(yoff > 1.7 && yoff < 2.75){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 1.75 && yoff < 2.8){strokeWeight(width/200); stroke(0); }
  }else{
    if(yoff > 1.7 && yoff < 2.75){strokeWeight(width/exp); stroke(vccor12[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 1.75 && yoff < 2.8){strokeWeight(width/200); stroke(0); }
  }
  
  if(l == cont14){
    if(yoff > 1.8 && yoff < 2.85){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 1.85 && yoff < 2.9){strokeWeight(width/200); stroke(0); }
  }else{
    if(yoff > 1.8 && yoff < 2.85){strokeWeight(width/exp); stroke(vccor13[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 1.85 && yoff < 2.9){strokeWeight(width/200); stroke(0); }
  }
  if(l == cont15){
    if(yoff > 1.9 && yoff < 2.95){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 1.95 && yoff < 3){strokeWeight(width/200); stroke(0); }
  }else{
    if(yoff > 1.9 && yoff < 2.95){strokeWeight(width/exp); stroke(vccor14[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 1.95 && yoff < 3){strokeWeight(width/200); stroke(0); }
  }
  if(l == cont16){
    if(yoff > 2 && yoff < 3.05){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 2.05 && yoff < 3.1){strokeWeight(width/200); stroke(0); }
  }else{
    if(yoff > 2 && yoff < 3.05){strokeWeight(width/exp); stroke(vccor15[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
    if(yoff > 2.05 && yoff < 3.1){strokeWeight(width/200); stroke(0); }
  }
  if(l == cont17){
    if(yoff > 2.1 && yoff < 3.15){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 2.1 && yoff < 3.15){strokeWeight(width/exp); stroke(vccor16[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont18){
    if(yoff > 2.2 && yoff < 3.25){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 2.25 && yoff < 3.3){strokeWeight(width/exp); stroke(vccor17[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont19){
    if(yoff > 2.3 && yoff < 3.35){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 2.35 && yoff < 3.4){strokeWeight(width/exp); stroke(vccor18[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont20){
    if(yoff > 2.4 && yoff < 3.45){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 2.45 && yoff < 3.5){strokeWeight(width/exp); stroke(vccor19[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont21){
    if(yoff > 2.5 && yoff < 3.55){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 2.55 && yoff < 3.6){strokeWeight(width/exp); stroke(vccor20[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  
  if(l == cont22){
    if(yoff > 2.6 && yoff < 3.65){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 2.65 && yoff < 3.7){strokeWeight(width/exp); stroke(vccor21[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont23){
    if(yoff > 2.7 && yoff < 3.75){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 2.75 && yoff < 3.8){strokeWeight(width/exp); stroke(vccor22[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont24){
    if(yoff > 2.8 && yoff < 3.85){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 2.85 && yoff < 3.9){strokeWeight(width/exp); stroke(vccor23[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont25){
    if(yoff > 2.9 && yoff < 3.95){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 2.95 && yoff < 4){strokeWeight(width/exp); stroke(vccor24[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont26){
    if(yoff > 3 && yoff < 4.05){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.05 && yoff < 4.1){strokeWeight(width/exp); stroke(vccor25[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont27){
    if(yoff > 3.1 && yoff < 4.15){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.15 && yoff < 4.2){strokeWeight(width/exp); stroke(vccor26[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont28){
    if(yoff > 3.2 && yoff < 4.25){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.25 && yoff < 4.3){strokeWeight(width/exp); stroke(vccor27[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont29){
    if(yoff > 3.3 && yoff < 4.35){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.35 && yoff < 4.4){strokeWeight(width/exp); stroke(vccor28[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont30){
    if(yoff > 3.4 && yoff < 4.45){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.45 && yoff < 4.5){strokeWeight(width/exp); stroke(vccor29[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont31){
    if(yoff > 3.5 && yoff < 4.55){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.55 && yoff < 4.6){strokeWeight(width/exp); stroke(vccor30[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont32){
    if(yoff > 3.6 && yoff < 4.65){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.65 && yoff < 4.7){strokeWeight(width/exp); stroke(vccor31[l], sat, bri); ellipse(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont33){
    if(yoff > 3.7 && yoff < 4.75){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); rect(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.75 && yoff < 4.8){strokeWeight(width/exp); stroke(vccor32[l], sat, bri); rect(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont34){
    if(yoff > 3.8 && yoff < 4.85){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); rect(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.85 && yoff < 4.9){strokeWeight(width/exp); stroke(vccor33[l], sat, bri); rect(x, y, width/random(1,50), height/random(1,100))} 
  }
  if(l == cont35){
    if(yoff > 3.9 && yoff < 4.95){strokeWeight(width/exp); stroke(vccor0, sat2, bri2); rect(x, y, width/random(1,50), height/random(1,100))} 
  }else{
    if(yoff > 3.95 && yoff < 5){strokeWeight(width/exp); stroke(vccor34[l], sat, bri); rect(x, y, width/random(1,50), height/random(1,100))} 
  } 
  
  
  
  strokeWeight(random(width/15000, width/15000))
  stroke(bgC, random(300), random(0))
  
  }
  rdc += 0.5
}
    if(rd == 1){
  }
    xoff += 0.01;
  }
  yoff += 0.004;
  l += 0.03
  endShape();
  }

  pop()
  
}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b
console.log(fxrand())

let dirX, dirY;
let aux = 0;
let eye, mouth;
let candleLight = ['#E09DAA', '#74DEFA', '#FFD21C', '#E09D37'];
let candleColor;
let mouthX = 0;
let mouthY = 0;
let onOff = 0;
let d20;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  
  d20 = rnd_int(0, 20);
  if (d20 == 20) {
    eye = 4;
  } else {
    eye = rnd_int(0, 3);
  }
  
  mouth = rnd_int(0, 2);
  
  candleColor = rnd_int(0, 3);
}

function draw() {
  background(0);

  if(onOff == 1) {
    noStroke();
    fill(150);
    rect(-15, 290, 30, 60);
    
    fill(candleLight[candleColor]);
    ellipse(0, 260, 40, 40);
    
    beginShape();
        
        fill(150);
        vertex(0, 320, 0);
        vertex(-30, 260, 0);
        vertex(30, 260, 0);

      endShape(CLOSE);
    
    strokeWeight(1);
    stroke(candleLight[candleColor]);
    line(-15, 240, -41, 210);
    line(0, 235, 0, 200);
    line(15, 240, 41, 210);
    
    
  } else {
    noStroke();
    fill(150);
    rect(-15, 290, 30, 60);
    beginShape();
        
        fill(150);
        vertex(0, 320, 0);
        vertex(-30, 260, 0);
        vertex(30, 260, 0);

      endShape(CLOSE);
  }
  
  if (aux == 1) {
    dirX = (mouseX / width - 0.5);
    dirY = (mouseY / height - 0.5);
    if(candleColor == 0) {
      directionalLight(224, 157, 170, -dirX, -dirY, -0.05);
    } else if(candleColor == 1) {
      directionalLight(116, 222, 250, -dirX, -dirY, -0.05);
    } else if (candleColor == 2) {
      directionalLight(255, 210, 28, -dirX, -dirY, -0.05);
    } else {
      directionalLight(224, 157, 55, -dirX, -dirY, -0.05);
    }
    
  } else {
    ambientLight(0);
  } 

  fill(220);
  strokeWeight(1);
  stroke(0);
  
  lightFalloff(0.001, 0.001, 0);
  
  switch (eye) { 
  
    case 0:
      push();
      rotateZ(10);
      beginShape();

          vertex(-100, -150, 0);
          vertex(-175, -150, 0);
          vertex(-200, -160, 0);
          vertex(-200, -200, 0);

      endShape(CLOSE);
      pop();

      push();
        rotateZ(-10);
        beginShape();

          vertex(100, -150, 0);
          vertex(175, -150, 0);
          vertex(200, -160, 0);
          vertex(200, -200, 0);

        endShape(CLOSE);
      pop();
      push();
        noStroke();
        fill(255, 0, 0);
        ellipse(-110, -180, 5, 15);
      pop();

      push();
        noStroke();
        fill(255, 0, 0);
        ellipse(110, -180, 5, 15);
      pop();
    break;
    case 1:
      
      fill(225, 193, 110);
      ellipse(0, -200, 200, 85);
      
      fill(164, 56, 171);
      strokeWeight(3);
      stroke(0);
      ellipse(0, -210, 85, 85);
      
      fill(0);
      strokeWeight(3);
      stroke(0);
      ellipse(0, -200, 42, 42);
      
       
      noFill();
      strokeWeight(20);
      stroke(6);
      ellipse(0, -200, 200, 85);
      
      
    break;
    case 2:
      
      push();
        rotateZ(7);
        fill(118, 29, 19);
        ellipse(-200, -200, 170, 80);
      pop();
      
      fill(255,255,51);
      ellipse(-174, -221, 20, 80);
      fill(0);
      ellipse(-174, -221, 10, 78);
       
      push();
        rotateZ(-7);
        fill(118, 29, 19);
        ellipse(200, -200, 170, 80);
      pop();
      
      fill(255,255,51);
      ellipse(174, -221, 20, 80);
      fill(0);
      ellipse(174, -221, 10, 78);
      
    break;
    case 3:
      
      fill(255, 210, 28);
      ellipse(0, -200, 50, 150);
      
      fill(0);
      ellipse(0, -200, 5, 120);
      
    break;
     
    case 4:
           
      beginShape();
        fill(213, 223, 174);
        vertex(-100, -175, 0);
        vertex(0, -325, 0);
        vertex(100, -175, 0);
      
      endShape(CLOSE);
      
      strokeWeight(2);
      fill(213, 223, 174);
      ellipse(0, -225, 125, 60);
      
      fill(0);
      ellipse(0, -225, 70, 60);
      
      push();
        noFill();
        ellipse(0, -225, 145, 80);
        ellipse(0, -225, 165, 100);
        ellipse(0, -225, 185, 120);
        ellipse(0, -225, 205, 140);
        ellipse(0, -225, 225, 160);
      pop();
      
    break;
     
  }
  
  switch (mouth) {
    case 0:
    
      noStroke();
      beginShape();
      
        fill(50);
        curveVertex(-200, 0, 0);
        curveVertex(-200, 0, 0);
        curveVertex(-100, 3, 0);
        curveVertex(0, 7, 0);
        curveVertex(100, 3, 0);
        curveVertex(200, 0, 0);
        curveVertex(200, 0, 0);
      
      endShape();
      
      beginShape();
      
        fill(255);
        stroke(0);
        strokeWeight(1);
        vertex(-100, 0, 0);
        vertex(-75, 70, 0);
        vertex(-63, 0, 0);
      
      endShape(CLOSE);
      
      beginShape();
      
        fill(255);
        stroke(0);
        strokeWeight(1);
        vertex(100, 0, 0);
        vertex(75, 70, 0);
        vertex(63, 0, 0);
      
      endShape(CLOSE);

    break;
    case 1:
      
      noStroke();
      beginShape();
      
        fill(50);
        curveVertex(-200, 0, 0);
        curveVertex(-200, 0, 0);
        curveVertex(-100, 3, 0);
        curveVertex(0, 7, 0);
        curveVertex(100, 3, 0);
        curveVertex(200, 0, 0);
        curveVertex(200, 0, 0);
      
      endShape();
      
     
      beginShape();
        
        noStroke();
        fill(100);
        vertex(-160, 25, 0);
        vertex(-150, -25, 0);
        vertex(-153, -28, 0);
        vertex(-163, 28, 0);
              
      endShape(CLOSE);
      
      beginShape();
        
        noStroke();
        fill(100);
        vertex(-110, 25, 0);
        vertex(-90, -25, 0);
        vertex(-93, -28, 0);
        vertex(-113, 28, 0);
              
      endShape(CLOSE);
      
      beginShape();
        
        noStroke();
        fill(100);
        vertex(-60, 25, 0);
        vertex(-40, -25, 0);
        vertex(-43, -28, 0);
        vertex(-63, 28, 0);
              
      endShape(CLOSE);
      
      beginShape();
        
        noStroke();
        fill(100);
        vertex(160, 25, 0);
        vertex(150, -25, 0);
        vertex(153, -28, 0);
        vertex(163, 28, 0);
              
      endShape(CLOSE);
      
      beginShape();
        
        noStroke();
        fill(100);
        vertex(110, 25, 0);
        vertex(90, -25, 0);
        vertex(93, -28, 0);
        vertex(113, 28, 0);
              
      endShape(CLOSE);
      
      beginShape();
        
        noStroke();
        fill(100);
        vertex(60, 25, 0);
        vertex(40, -25, 0);
        vertex(43, -28, 0);
        vertex(63, 28, 0);
              
      endShape(CLOSE);
    
      
    break;
    case 2:
      for( i= 0 ; i < 20 ; i++) {
        beginShape();
      
          fill(198, 141, 243);
          stroke(0);
          strokeWeight(1);
          vertex(-15, 0, 0);
          vertex(0, 80, 0);
          vertex(15, 0, 0);
      
        endShape(CLOSE);
        rotateZ(72);
        
      }
    break;
  }
}

function mouseReleased() {
  
  if (onOff == 0) {
    aux = 1;
    onOff++;
  } else {
    aux = 0;
    onOff--;
  }

}

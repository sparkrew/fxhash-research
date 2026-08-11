

function drawIt(grouping){
    
  if(grouping == 'Packed'){
    drawPacked(grouping);
  } else if(grouping == 'Spread'){
    drawSpread(grouping);
  } else if(grouping == 'Split'){
    drawSplit(grouping);
  } 
}

function drawPacked(grouping){
  let w, h;
  w = collector.width;
  h = collector.height;
  // collector.translate(w/2, h/2, 0);
doDashes(grouping);
  // collector.rectMode(CENTER);
  collector.noFill();
  collector.strokeWeight(12*scl);
    for(let x=-2; x<2; x++){
      for(let y=-2; y<2; y++){
        leNum = random(255);
          collector.noFill();
          collector.stroke(leNum);
        if(random()>0.5){
          collector.noStroke();
          collector.fill(leNum);
        }
        collector.push();
        collector.translate((90*scl)+x*180*scl,(90*scl)+y*180*scl,0);
        collector.rotateZ(random(PI));
        collector.box(180*scl,180*scl,leNum*scl*3);

        if((x*y)%3==0){
          collector.rotateZ(0.25*PI);
          collector.box(180*scl,180*scl,leNum*scl*3*1.1);
        }
        collector.pop()
      }
    }
}

function drawSpread(grouping){
  let w, h;
  w = collector.width;
  h = collector.height;
  collector.noStroke();
doDashes(grouping);
  for(let s=0; s<20; s++){
    collector.push();
    collector.translate(random(-w/2,w/2),random(-h/2,h/2), random(-300,300)*scl);
    collector.rotateX(random(2*PI));
    collector.rotateY(random(2*PI));
    collector.rotateZ(random(2*PI));
    for(let c=0; c<3; c++){
      collector.fill(255);
      if(c==1){collector.rotateZ(PI/2)} else if(c==2){collector.rotateX(PI/2)} 
      collector.cylinder(3*scl,random(150,360)*scl);          
    }
    le = random(6,210)*scl;
    he = random(6,210)*scl;
    de = random(6,210)*scl;
    collector.box(le,he,de);
      collector.rotateZ(0.5*PI);
      collector.box(le,he,de);
    collector.pop();
  }
}

function drawSplit(grouping){
  let w, h, k1, k2, c1, c2;
  w = collector.width;
  h = collector.height;
  k1 = random(-w/2.5,w/2.5);
  if(k1<0){
    k2 = random((k1 + w/5), w/2);
  } else {
    k2 = random(-w/2,random(k1-w/5));
  }
  if(random()>0.5){
    c1 = createVector(k1, -h/3);
    c2 = createVector(k2, h/3);
  } else {
    c1 = createVector(-w/3, k1);
    c2 = createVector(w/3, k2);
  }
  
  collector.noStroke();
  collector.fill(255);
  
  collector.push();
  collector.translate(c1.x, c1.y, 0);
  collector.sphere(120*scl,8*scl,8*scl);
  collector.pop();
  
  collector.push();
  collector.translate(c2.x, c2.y, 0);
  collector.sphere(120*scl,8*scl,8*scl);
  collector.pop();
  
  centers = [c1,c2];

  collector.noFill();
  collector.strokeWeight(12*scl);

  for(let l=0; l<20; l++){
    collector.stroke(random(255));
    collector.line(c1.x+random(-150,150)*scl,c1.y+random(-150,150)*scl,c2.x+random(-150,150)*scl,c2.y+random(-150,150)*scl)
  }
  for(let c=0; c<centers.length; c++){
    collector.push();
    collector.translate(centers[c].x,centers[c].y,0);
    for(let x=-2; x<2; x++){
      for(let y=-2; y<2; y++){
        leNum = random(255);
        collector.noFill();
        collector.stroke(leNum);
        if(random()>0.5){
          collector.noStroke();
          collector.fill(leNum);
        }
        collector.push();
        collector.translate((90*scl)+x*180*scl,(90*scl)+y*180*scl,0);
        collector.rotateZ(random(PI));
        collector.box(180*scl,180*scl,leNum*scl*3);
        if((x*y)%3==0){
          collector.rotateZ(0.25*PI);
          collector.box(180*scl,180*scl,leNum*scl*3*1.1);
        }
        collector.pop();
      }
    }
    collector.pop();
  }
doDashes(grouping);
}

function doDashes(grouping){
  let w, h;
  w = collector.width/skl;
  h = collector.height/skl;
  
  for(let s=0; s<16; s++){
      collector.fill(255);
    collector.push();
    collector.translate(random(-w/2,w/2),random(-h/2,h/2), random(-100,100)*scl);
    collector.plane(10*scl,40*scl)
    collector.pop();
  }  
  
  collector.push();
  collector.rotate(rotation);

  for(let s=0; s<16; s++){
    collector.strokeWeight(2*scl);
    collector.stroke(95);
    nh = random(-h,h);
    collector.line(-w/2,nh,w/2,nh+random(100,200)*random([-1,1])*scl)
    collector.line(nh,-w/2,nh+random(100,200)*random([-1,1])*scl,w/2)
  }

  for(let s=0; s<16; s++){
    collector.push();

    leNum = random(255);
      collector.noFill();
      collector.stroke(leNum);
      collector.strokeWeight(3*scl);
    if(random()>0.5){
      collector.noStroke();
      collector.fill(leNum);
    }

    collector.rotateY(random(-0.4,0.4));
    collector.rotateZ(random(-0.4,0.4));
      cpx = random(collector.width/2);
      cpy = random(-collector.width/2,collector.width/2);
      rlength = random(60,600)*scl;

    if(grouping != 'split'){
      collector.push();
      collector.rectMode(CENTER);
      collector.rect(cpx,cpy,600*scl,random(210)*scl);
      collector.pop();
    } else {
      collector.rect(cpx,cpy,rlength,rlength/3);
      collector.push();
      collector.translate(cpx+random(rlength), cpy+random(rlength/3),0);
      collector.scale(random(1,1.5),random(0.2,0.5),random(0.2,1.5))
      collector.rotateY(random(-0.4,0.4));
      collector.rotateZ(random(-0.4,0.4));
      collector.sphere(60*scl,8*scl,8*scl)
      collector.pop();
    }
    collector.fill(200);
    for(let sq=0; sq<5; sq++){
    rx = random(-1,1)*collector.width;
    ry = random(-1,1)*collector.width;
    rl = random(10,20*scl);
      collector.rect(rx,ry,rl,rl/2);
      collector.rect(rx+random(-25,25)*scl,ry+random(25,30)*scl,1*scl,rl*5*scl);
    }

    collector.pop();
  }
  collector.pop();
}
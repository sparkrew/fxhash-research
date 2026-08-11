


function Fama(){

  var v = [];
  var rows = 60, cols = 120;
  //clear();

  rotateX(random(200));
  rotateY(random(200));
  //rotateZ(random(40));

  if(rt==0){rtt=70; rha= 220; rha1= 66; rhap= 270; rhap1= 81;}
  if(rt==1){rtt=120; rha= 66; rha1= 220; rhap= 81; rhap1= 270;}



  for(theta = 0; theta < rows; theta += 1){
    v.push([]);
    for(let phi = 0; phi < cols; phi += 1){
      let r = (height/rha * pow(abs(sin(5/2*phi*360/cols)),1)+ height/rha1) * theta/rows;
      let x = r * cos(phi*360/cols);
      let y = r * sin(phi*360/cols);
      let z = vShape(rtt, r/150, 0.8, 0.2, 1.5)   + height/30  +
        bumpiness(1.5, r/100, 12, phi*360/cols);
        //let z = vShape(rtt, r/150, 0.2, 0.5, 1.5) (haste longa)
        let pos = createVector(x, y, z);

        v[theta].push(pos);
    }
  }

  for(let theta = 0; theta < v.length; theta++){
    for(let phi = 0; phi < v[theta].length; phi++){
    //  stroke(random(190,200), random(50, 100),  random(200, 250));
      if(rd==0){fill(45, 60-theta, 150);} // amarela
      if(rd==1){fill(400, 30-theta, 150);} // branca
      if(rd==2){fill(20, 65-theta, 150);} // laranja
      if(rd==3){fill(270, 65-theta, 150);} // lilas
      if(rd==4){fill(400, 65-theta, 150);} // vermelha
      if(rd==5){fill(300, 65-theta, 150);} // rosa escuro
      if(rd==6){fill(220, 65-theta, 150);} // azul

      if(theta < v.length-1 && phi < v[theta].length-1){

        beginShape();
        vertex(v[theta][phi].x, v[theta][phi].y, v[theta][phi].z);
        vertex(v[theta+1][phi].x, v[theta+1][phi].y, v[theta+1][phi].z);
        vertex(v[theta+1][phi+1].x, v[theta+1][phi+1].y, v[theta+1][phi+1].z);
        vertex(v[theta][phi+1].x, v[theta][phi+1].y, v[theta][phi+1].z);
        endShape(CLOSE);
      }else if(theta < v.length-1 && phi == v[theta].length-1){
        beginShape();
        vertex(v[theta][phi].x, v[theta][phi].y, v[theta][phi].z);
        vertex(v[theta][0].x, v[theta][0].y, v[theta][0].z);
        vertex(v[theta+1][0].x, v[theta+1][0].y, v[theta+1][0].z);
        vertex(v[theta+1][phi].x, v[theta+1][phi].y, v[theta+1][phi].z);
        endShape(CLOSE);
      }
    }
  }

  v = [];
 // noLoop();
}

// function vShape(A, r, a, b, c){
//   return A*pow(Math.E, -b*pow(abs(r), c))*pow(abs(r), a);
// }
//
// function bumpiness(A, r, f, angle){
//   return 1 + A * pow(r, 2) * sin(f * angle);
// }


function Famap(){

  var v = [];
  var rows = 60, cols = 120;

  rotateX(random(200));
  rotateY(random(200));

  if(rt==0){rtt=120; rha= 200; rha1= 60; rhap= 250; rhap1= 75;}
  if(rt==1){rtt=70; rha= 60; rha1= 200; rhap= 75; rhap1= 250;}

  for(theta = 0; theta < rows; theta += 1){
    v.push([]);
    for(let phi = 0; phi < cols; phi += 1){
      let r = (height/rhap * pow(abs(sin(5/2*phi*360/cols)),1)+ height/rhap1) * theta/rows;
      let x = r * cos(phi*360/cols);
      let y = r * sin(phi*360/cols);
      let z = vShape(rtt, r/150, 0.8, 0.2, 1.5)   + height/30  +
        bumpiness(1.5, r/100, 12, phi*360/cols);
        //let z = vShape(rtt, r/150, 0.2, 0.5, 1.5) (haste longa)
        let pos = createVector(x, y, z);

        v[theta].push(pos);
    }
  }


  for(let theta = 0; theta < v.length; theta++){
    for(let phi = 0; phi < v[theta].length; phi++){
    //  stroke(random(190,200), random(50, 100),  random(200, 250));
    if(rd==0){fill(45, 60-theta, 150);} // amarela
    if(rd==1){fill(400, 30-theta, 150);} // branca
    if(rd==2){fill(20, 65-theta, 150);} // laranja
    if(rd==3){fill(270, 65-theta, 150);} // lilas
    if(rd==4){fill(400, 65-theta, 150);} // vermelha
    if(rd==5){fill(300, 65-theta, 150);} // rosa escuro
    if(rd==6){fill(220, 65-theta, 150);} // azul
      if(theta < v.length-1 && phi < v[theta].length-1){

        beginShape();
        vertex(v[theta][phi].x, v[theta][phi].y, v[theta][phi].z);
        vertex(v[theta+1][phi].x, v[theta+1][phi].y, v[theta+1][phi].z);
        vertex(v[theta+1][phi+1].x, v[theta+1][phi+1].y, v[theta+1][phi+1].z);
        vertex(v[theta][phi+1].x, v[theta][phi+1].y, v[theta][phi+1].z);
        endShape(CLOSE);
      }else if(theta < v.length-1 && phi == v[theta].length-1){
        beginShape();
        vertex(v[theta][phi].x, v[theta][phi].y, v[theta][phi].z);
        vertex(v[theta][0].x, v[theta][0].y, v[theta][0].z);
        vertex(v[theta+1][0].x, v[theta+1][0].y, v[theta+1][0].z);
        vertex(v[theta+1][phi].x, v[theta+1][phi].y, v[theta+1][phi].z);
        endShape(CLOSE);
      }
    }
  }


  v = [];
 // noLoop();
}

// function vShape(A, r, a, b, c){
//   return A*pow(Math.E, -b*pow(abs(r), c))*pow(abs(r), a);
// }
//
// function bumpiness(A, r, f, angle){
//   return 1 + A * pow(r, 2) * sin(f * angle);
// }

function Famapeq(){ //somente uma
  var v = [];
  var rows = 60, cols = 120;


  rotateX(random(40, 100));

  if(rt==0){rtt=120; rha= 200; rha1= 60; rhap= 250; rhap1= 75;}
  if(rt==1){rtt=70; rha= 60; rha1= 200; rhap= 75; rhap1= 250;}

  for(theta = 0; theta < rows; theta += 1){
    v.push([]);
    for(let phi = 0; phi < cols; phi += 1){
      let r = (height/rha * pow(abs(sin(5/2*phi*360/cols)),1)+ height/rha1) * theta/rows;
      let x = r * cos(phi*360/cols);
      let y = r * sin(phi*360/cols);
      let z = vShape(rtt, r/150, 0.8, 0.2, 1.5)   + height/30  +
        bumpiness(1.5, r/100, 12, phi*360/cols);
        //let z = vShape(rtt, r/150, 0.2, 0.5, 1.5) (haste longa)
        let pos = createVector(x, y, z);

        v[theta].push(pos);
    }
  }


  for(let theta = 0; theta < v.length; theta++){
    for(let phi = 0; phi < v[theta].length; phi++){
    //  stroke(random(190,200), random(50, 100),  random(200, 250));
    if(rd==0){fill(45, 60-theta, 150);} // amarela
    if(rd==1){fill(400, 30-theta, 150);} // verde
    if(rd==2){fill(20, 65-theta, 150);} // laranja
    if(rd==3){fill(270, 65-theta, 150);} // lilas
    if(rd==4){fill(400, 65-theta, 150);} // vermelha
    if(rd==5){fill(300, 65-theta, 150);} // rosa escuro
    if(rd==6){fill(220, 65-theta, 150);} // azul
      if(theta < v.length-1 && phi < v[theta].length-1){

        beginShape();
        vertex(v[theta][phi].x, v[theta][phi].y, v[theta][phi].z);
        vertex(v[theta+1][phi].x, v[theta+1][phi].y, v[theta+1][phi].z);
        vertex(v[theta+1][phi+1].x, v[theta+1][phi+1].y, v[theta+1][phi+1].z);
        vertex(v[theta][phi+1].x, v[theta][phi+1].y, v[theta][phi+1].z);
        endShape(CLOSE);
      }else if(theta < v.length-1 && phi == v[theta].length-1){
        beginShape();
        vertex(v[theta][phi].x, v[theta][phi].y, v[theta][phi].z);
        vertex(v[theta][0].x, v[theta][0].y, v[theta][0].z);
        vertex(v[theta+1][0].x, v[theta+1][0].y, v[theta+1][0].z);
        vertex(v[theta+1][phi].x, v[theta+1][phi].y, v[theta+1][phi].z);
        endShape(CLOSE);
      }
    }
  }

  v = [];
 // noLoop();
}

function Famapeq2(){ //somente uma
  var v = [];
  var rows = 60, cols = 120;


  rotateX(80);

  if(rt==0){rtt=40; rha= 200; rha1= 60; rhap= 250; rhap1= 75;}
  if(rt==1){rtt=40; rha= 60; rha1= 200; rhap= 75; rhap1= 250;}

  for(theta = 0; theta < rows; theta += 1){
    v.push([]);
    for(let phi = 0; phi < cols; phi += 1){
      let r = (height/rha * pow(abs(sin(5/2*phi*360/cols)),1)+ height/rha1) * theta/rows;
      let x = r * cos(phi*360/cols);
      let y = r * sin(phi*360/cols);
      let z = vShape(rtt, r/150, 0.8, 0.2, 1.5)   + height/30  +
        bumpiness(1.5, r/100, 12, phi*360/cols);
        //let z = vShape(rtt, r/150, 0.2, 0.5, 1.5) (haste longa)
        let pos = createVector(x, y, z);

        v[theta].push(pos);
    }
  }


  for(let theta = 0; theta < v.length; theta++){
    for(let phi = 0; phi < v[theta].length; phi++){
    //  stroke(random(190,200), random(50, 100),  random(200, 250));
    if(rd==0){fill(45, 60-theta, 150);} // amarela
    if(rd==1){fill(400, 30-theta, 150);} // verde
    if(rd==2){fill(20, 65-theta, 150);} // laranja
    if(rd==3){fill(270, 65-theta, 150);} // lilas
    if(rd==4){fill(400, 65-theta, 150);} // vermelha
    if(rd==5){fill(300, 65-theta, 150);} // rosa escuro
    if(rd==6){fill(220, 65-theta, 150);} // azul
      if(theta < v.length-1 && phi < v[theta].length-1){

        beginShape();
        vertex(v[theta][phi].x, v[theta][phi].y, v[theta][phi].z);
        vertex(v[theta+1][phi].x, v[theta+1][phi].y, v[theta+1][phi].z);
        vertex(v[theta+1][phi+1].x, v[theta+1][phi+1].y, v[theta+1][phi+1].z);
        vertex(v[theta][phi+1].x, v[theta][phi+1].y, v[theta][phi+1].z);
        endShape(CLOSE);
      }else if(theta < v.length-1 && phi == v[theta].length-1){
        beginShape();
        vertex(v[theta][phi].x, v[theta][phi].y, v[theta][phi].z);
        vertex(v[theta][0].x, v[theta][0].y, v[theta][0].z);
        vertex(v[theta+1][0].x, v[theta+1][0].y, v[theta+1][0].z);
        vertex(v[theta+1][phi].x, v[theta+1][phi].y, v[theta+1][phi].z);
        endShape(CLOSE);
      }
    }
  }

  v = [];
 // noLoop();
}




// function vShape(A, r, a, b, c){
//   return A*pow(Math.E, -b*pow(abs(r), c))*pow(abs(r), a);
// }
//
// function bumpiness(A, r, f, angle){
//   return 1 + A * pow(r, 2) * sin(f * angle);
// }

function Famaso(){

  var v = [];
  var rows = 60, cols = 120;
  rotateX(40);

  if(rt==0){rtt=80; rha= 200; rha1= 60; rhap= 250; rhap1= 75;}
  if(rt==1){rtt=70; rha= 60; rha1= 200; rhap= 75; rhap1= 250;}

  for(theta = 0; theta < rows; theta += 1){
    v.push([]);
    for(let phi = 0; phi < cols; phi += 1){
      let r = (height/rhap * pow(abs(sin(5/2*phi*360/cols)),1)+ height/rhap1) * theta/rows;
      let x = r * cos(phi*360/cols);
      let y = r * sin(phi*360/cols);
      let z = vShape(rtt, r/150, 0.8, 0.2, 1.5)   + height/30  +
        bumpiness(1.5, r/100, 12, phi*360/cols);
        //let z = vShape(rtt, r/150, 0.2, 0.5, 1.5) (haste longa)
        let pos = createVector(x, y, z);

        v[theta].push(pos);
    }
  }


  for(let theta = 0; theta < v.length; theta++){
    for(let phi = 0; phi < v[theta].length; phi++){
    //  stroke(random(190,200), random(50, 100),  random(200, 250));
    stroke(300, 2, 7);



    //  fill(100, 4,  15);
      if(theta < v.length-1 && phi < v[theta].length-1){

        beginShape();
        vertex(v[theta][phi].x, v[theta][phi].y, v[theta][phi].z);
        vertex(v[theta+1][phi].x, v[theta+1][phi].y, v[theta+1][phi].z);
        vertex(v[theta+1][phi+1].x, v[theta+1][phi+1].y, v[theta+1][phi+1].z);
        vertex(v[theta][phi+1].x, v[theta][phi+1].y, v[theta][phi+1].z);
        endShape(CLOSE);
      }else if(theta < v.length-1 && phi == v[theta].length-1){
        beginShape();
        vertex(v[theta][phi].x, v[theta][phi].y, v[theta][phi].z);
        vertex(v[theta][0].x, v[theta][0].y, v[theta][0].z);
        vertex(v[theta+1][0].x, v[theta+1][0].y, v[theta+1][0].z);
        vertex(v[theta+1][phi].x, v[theta+1][phi].y, v[theta+1][phi].z);
        endShape(CLOSE);
      }
    }
  }

  v = [];
 // noLoop();
}

function vShape(A, r, a, b, c){
  return A*pow(Math.E, -b*pow(abs(r), c))*pow(abs(r), a);
}

function bumpiness(A, r, f, angle){
  return 1 + A * pow(r, 2) * sin(f * angle);
}

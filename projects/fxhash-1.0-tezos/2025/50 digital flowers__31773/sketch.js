let dotsX = [];
let dotsY = [];
let ran;
let petalcolor;
function setup() {
  
  can = createCanvas(400, 500);
  can.id("can1");
  can.center('horizontal');
  
  frameRate(5); 
  noLoop();
  
  ranLine = $fx.randminter();
  ranPetal = $fx.randminter();
  petalcolor = round($fx.randminter());
  console.log(ranLine + "," +petalcolor);
  
  
  drawSky();
}

function draw() {
  let size =map($fx.randminter(), 0, 1, 10, 50); 
  let fw = size*5/2 + map($fx.randminter(), 0, 1, 10, 50);
  let fh = size*1 + map($fx.randminter(), 0, 1, 10, 50);
  let cx = map($fx.randminter(), 0, 1, 100,width - 100);
  let cy = map($fx.randminter(), 0, 1, 100,height - 200);
  let n = fw*fh/6250/2;
  console.log(size);
  console.log(n);
  
  drawStem(cx, cy, size/3, ranLine)
  for(let i = 0; i < n; i++){
    //w,h,petalw,petalh,n of dots, dots, line, curve
    for(let j = 0; j < (size/10) + map($fx.randminter(), 0, 1, 0, 5); j++){
      drawCalyx(cx, cy, fw, fh, ranLine);
    }
    drawPetal(cx, cy, fw, fh, 20 + fw/4, 60 + fh/2, petalcolor, 10, ranLine, ranPetal);
  }
  
  if(cy < 200 && (map($fx.randminter(), 0, 1, 0, 5) < 1)){
    let cx = map($fx.randminter(), 0, 1,100,width - 100);
    let cy = map($fx.randminter(), 0, 1, 200,height - 200);
    ranLine = round($fx.rand());
    ranPetal = $fx.rand();
    petalcolor = round($fx.rand());
    drawStem(cx, cy+20, size/3, ranLine)
    for(let i = 0; i < n; i++){
      //w,h,petalw,petalh,n of dots, dots, line, curve
      for(let j = 0; j < (size/10) + map($fx.randminter(), 0, 1, 0, 5); j++){
         drawCalyx(cx, cy, fw, fh, ranLine);
      }
     
      drawPetal(cx, cy, fw, fh, 20+fw/4, 40+fh/2, petalcolor, 10, ranLine, ranPetal);
    }
  }
  $fx.preview();
}



function drawSky(){
  let from = color(0, 28, 207);
  let to = color(130, 198, 237);
  let a = color(0,0,0);
  let b = color(255,0,0);
  for(let y = 0; y < height; y++){
    let current = lerpColor(from, to, y/height);
    stroke(current);
    line(0, y, width, y);
  }
}

function Sqr(x, y, w, h, ar, ag, ab, br, bg, bb, r){
  push();
  translate(x , y-h/2 );
  rotate(r*PI/180);
  let a = color(ar, ag, ab);
  let b = color(br, bg, bb);
  for(let y = 0; y < h; y++){
    let current = lerpColor(a, b, y/h);
    stroke(current);
    strokeWeight(2);
    line(0, y, w, y);
  }
  pop();
}

function drawCalyx(cx, cy, w, h, c){
  let x1 = map($fx.randminter(), 0, 1, cx-w/2, cx+w-2);
  let x2 = map($fx.randminter(), 0, 1, cx-w/2, cx+w-2);
  let x4 = map($fx.randminter(), 0, 1, cx-w/2, cx+w-2);
  
  let y1 = map($fx.randminter(), 0, 1, cx-w/2, cx+w-2);
  let y2 = map($fx.randminter(), 0, 1, cx-w/2, cx+w-2);
  let y4 = map($fx.randminter(), 0, 1, cx-w/2, cx+w-2);
  
  for(let i = 0; i <20; i++){
    let x = curvePoint(x1, x2, cx, x4, i/20);
    let y = curvePoint(y1, y2, cy, y4, i/20);
    Sqr(x, y, i, i,134, 255, 82, 8, 82, 24, 90);
    
    if(c > 0.6){
      fill(255, 187, 0);
      noStroke();
      ellipse(x2, y2, 5, 5);
      ellipse(cx, cy, 5, 5);
      stroke(255, 187, 0);
      noFill();
      curve(x1, y1, x2, y2, cx, cy, x4, y4);
    }
    
  }
  
}

function drawStem(cx, cy, w, c){
  let endX = map($fx.randminter(), 0, 1, 100, 400);
  let ax = map($fx.randminter(), 0, 1, cx-100, cx+100);
  let ay = map($fx.randminter(), 0, 1, 0, cy);
  let bx = map($fx.randminter(), 0, 1, endX-100, endX+100);
  let by = map($fx.randminter(), 0, 1, height, height + 100);
  console.log("bx = "+ bx);
  
  for(let i = cy; i < height; i += 5){
    push();
    let x = curvePoint(ax, cx, endX, bx, (i-cy)/(height-cy));
    let y = curvePoint(ay, cy, height+30, by, (i-cy)/(height-cy));
    //rotate(PI/2);
    Sqr(x, y, 10, w,134, 255, 82, 8, 82, 24, 90);
    pop();
  }
  
 
  
  //curve
  if(c >0.6){
    fill(255, 187, 0);
    noStroke();
    //ellipse(ax, ay, 5, 5);
    //ellipse(bx, by, 5, 5);
    ellipse(cx, cy, 5, 5);
    ellipse(endX, height, 5, 5);
    stroke(255, 187, 0);
    noFill();
    curve(ax, ay, cx, cy, endX, height, bx, by)
  }
  
  
}

function drawPetal (x, y, w, h, rw, rh, pc, n, c, p){
  //posx, posy, flowerw, flowerh, rectw, recth, petalcolor,  number, show curve, show petal
  let X = [];
  let Y = [];
  let X1 = [];
  let Y1 = [];
  let cx = x;
  let cy = y;
  let c1 = [255, 0, 0,  245, 254, 255]
  let c2 = [  0, 0, 0,  219, 190, 230]
  
  let a = 0 ;
  console.log(cx + "," + cy);
  for(let i = 0 ;i < n; i++){
    // X.push(random(cx-w/2, cx+w/2));
    // Y.push(random(cy-h/2, cy+h/2));
    
    a += $fx.randminter() * PI;
    X.push(cx + sin(a)*map($fx.randminter(), 0, 1, 1, w));
    Y.push(cy + cos(a)*map($fx.randminter(), 0, 1, 1, h));
    
  }
  for(let j = 0; j < 2; j++){
    a = 0.3;
    for(let i = 0; i < 4; i++){
      a += ($fx.randminter()+0.3) * PI;
      X1.push(cx + sin(a)*map($fx.randminter(), 0, 1, 1, w));
      Y1.push(cy + cos(a)*map($fx.randminter(), 0, 1, 1, h) + h/4);
    
     }
  }
  
 
  
  //inner square
  if(p < 0.8){
    let sw, sh;
    for(let i = 0; i < X.length-3; i  ++){
      for(let j = 0; j < 10; j ++){
        let x = curvePoint(X[i], X[i+1], X[i+2], X[i+3], j/10);
        let y = curvePoint(Y[i], Y[i+1], Y[i+2], Y[i+3], j/10);
        if(j <= map($fx.randminter(), 0, 1, 0, 7)){
          sw = lerp(rw/3, rw, (j)/n*2 );
          sh = lerp(rh/3, rh, (j)/n*2);
        }else{
          sw = lerp(rw, rw/3, j/n);
          sh = lerp(rh, rh/3,j/n);
        }
      
        Sqr(x, y, sw, sh, c1[pc*3], c1[pc*3+1], c1[pc*3+2], c2[pc*3], c2[pc*3+1], c2[pc*3+2], 0);
      }
    }
  }
  
  
  
  
  if(c > 0.6){
    
    //dots
    for( let i = 1; i < X.length-1; i++){
      fill(255, 187, 0);
      noStroke();
      ellipse(X[i], Y[i], 5, 5);
    }
    
    //curve
    for( let i = 0; i < X.length-2; i ++){
      noFill();
      stroke(255, 187, 0);
      curve(X[i], Y[i], X[i+1], Y[i+1], X[i+2], Y[i+2], X[i+3], Y[i+3]);
    }
  }
  
  
  
  
  
  
  //outer square
  if(p < 0.8){
    for(let i = 0; i < X1.length-3; i += 4){
    for(let j = 0; j < 10; j ++){
      let x = curvePoint(X1[i], X1[i+1], X1[i+2], X1[i+3], j/10);
      let y = curvePoint(Y1[i], Y1[i+1], Y1[i+2], Y1[i+3], j/10);
      if(j <= 5){
        sw = lerp(rw/3, rw, (j)/n*2 );
        sh = lerp(rh/20, rh, (j)/n*2);
      }else{
        sw = lerp(rw, rw/2, j/n);
        sh = lerp(rh, rh/20,j/n);
      }
      Sqr(x, y, sw, sh, c1[pc*3], c1[pc*3+1], c1[pc*3+2], c2[pc*3], c2[pc*3+1], c2[pc*3+2], 0);
      }
    }
  }
  
  
  
  if(c > 0.6){
    
    //outter dots
    for( let i = 1; i < X.length-1; i+= 4){
      fill(255, 187, 0);
      noStroke();
      ellipse(X1[i], Y1[i], 5, 5);
      ellipse(X1[i+1], Y1[i+1], 5, 5);
      
      //outer curve
      for( let i = 0; i < X1.length-2; i += 4){
        noFill();
        stroke(255, 187, 0);
        //stroke(255, 255, 255);
        curve(X1[i], Y1[i], X1[i+1], Y1[i+1], X1[i+2], Y1[i+2], X1[i+3], Y1[i+3]);
      }
    }
  }
 
  
}

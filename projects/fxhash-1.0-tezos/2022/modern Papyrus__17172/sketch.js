let w = 600, h = 600;
let o = 10, o2 = 30, o3 = 5;
let l1 = 10, l2 = 35;
let p1, p2, p3, p4;
let a = 10, b = 80, c = 20;
let h1, h2;
let h1Arr = [75,2955,15,195];
let h2Arr = [160, 350, 50, 235];
var actRandomSeed = fxrand() * 1912;

function setup() {
   randomSeed(actRandomSeed);
  createCanvas(w, h);
  pixelDensity(3);
  colorMode(HSB, 360, 100, 100, 100);
  rectMode(RADIUS);
  smooth();
  noLoop();
}

function drawWhiteCircles(n) {
  for(let j = 0; j < n; j++) {
    sx = random(0, w*4/5);
    sy = random(h/8, h*7/8);
    r = random(5, 20);
    pn = random(50,80);
    strokeWeight(.2);
    for(let i = 0; i < random(5, 15); i++) {
      stroke(0, 0, 0, pn);
      fill(0, 0, 100, pn);
      circle(sx, sy, r);
      sx += r*1.5;
      sy += random(-14,14);
    }    
  }
}

function drawColorLine(n) {
  noStroke();
  for(let i = 0; i < n; i++) {
    dir = -1;
    if(random() < 0.4) {
      dir = 1;
    }
    al = 5;
    r = 3;
    hh = h2+random(-20,20);
    if(random()<.4) {
      hh = h1+random(-20,20);  
    }
    cx = random(w);
    cy = random(h);
    for(let j = 0; j < 160; j++) {
      al += 0.05;
      r *= random(0.95, 1.05);
      cx += random(0, dir*0.5);
      cy += random(-1, 1);
      fill(hh + random(-10,10), 100, 100, al);
      circle(cx, cy, r);      
    }
  }
}

function drawDarkCircles() {
  noStroke();
  hh = h2;
  if(random()<.4) {
    hh = h1;  
  }
  for(let k = 0; k < 32; k++) {
    r = random(2,8);
    cx = random(w);
    cy = random(h);
    al = 0;

    for(let i = 0; i < 50; i ++) {
      al += 0.15;
      r *= 0.98;
      cx += random(-1.5, 1.5);
      cy += random(-1.5, 1.5);
      fill(0, 0, 0, al);
      circle(cx, cy, r);
    }    
  }
}

function drawThickLine() {
  stroke(0,0,0,3);
  noFill();
  strokeWeight(2);

  c1 = random(3);
  for(let c = 0; c < c1; c++) {
    startH = random(h);
    endW = random(w*1/3);
    endH = random(h/3, h*2/3);
    p2 = [random(w), random(h*1/5,h*4/5)];
    p3 = [random(w), random(h*1/5,h*4/5)];

    for(let i = 0; i < 15; i++) {
      p1 = [0, startH+2*i]; // start point(red)
      p4 = [endW, endH]; // end point

      bezier(p1[0],p1[1],p2[0],p2[1],p3[0],p3[1],p4[0],p4[1]);    
    }    
  }
  
  c1 = random(3);
  for(let c = 0; c < c1; c++) {
    startH = random(h);
    endW = random(w*2/3, w);
    endH = random(h/3, h*2/3);
    p2 = [random(w), random(h*1/5,h*4/5)];
    p3 = [random(w), random(h*1/5,h*4/5)];

    for(let i = 0; i < 10; i++) {
      p1 = [w, startH+2*i]; // start point(red)
      p4 = [endW, endH]; // end point

      bezier(p1[0],p1[1],p2[0],p2[1],p3[0],p3[1],p4[0],p4[1]);    
    }    
  }
}

function drawCircle(x, y, edge, hh, tt) {
  hh += random(-20, 20);
  r = random(l1,l2);
  if(random() < edge) {
    noStroke();
    al = 10;
    for(let i = 0; i < 60; i++) {
      al += 0.1;
      r *= 0.98;
      x += random(-2, 2);
      y += random(-1*tt, 1*tt);
      fill(hh, 100, 100, al);
      circle(x, y, r);      
    }
  } else if(random() <edge) {
    stroke(hh,100,0,90);
    noFill();
    
    strokeWeight(0.15);
    circle(x, y, r);

    r *= random(1.5, 4.0);
    circle(x, y, r);
    
    r *= random(1.5, 2.0);
    circle(x, y, r);

    r *= random(1.5, 2.0);
    circle(x, y, r);
  }
  strokeWeight(1);
}

function drawBGCurves(c1, c2) {
  t = 45;
  span = h/t;
  noFill();

  g1 = random(0,w/2);
  k1 = random(0,h/5);
  g2 = random(w/2,h);
  k2 = random(h*4/5,h);
  for(let i = -h*2; i < h*3; i+=span) {
    p1 = [0, i]; // start point
    p2 = [g1, k1];
    p3 = [g2, k2];
    p4 = [w, i]; // end point
    
    el = random();
    if(el<0.7) {
      continue;
    } else if(el < 0.95) {
      stroke(0, 0, 0, 100);
      strokeWeight(0.1);  
    } else {
      strokeWeight(3);
      if(random() < .4) {
        stroke(c1+random(-20,20),100,100,14);
      } else {
        stroke(c2+random(-20,20),100,100,14);
      }
    }
    bezier(p1[0],p1[1],p2[0],p2[1],p3[0],p3[1],p4[0],p4[1]);
  }
}

function drawWhiteLines(c) {
  noStroke();
  fill(0, 0, 100, random(20,60));
  for(let i = 0; i < c; i++) {
    rect(random(w), random(h), random(1,3), random(20, 380));
  }
}

function drawGradientBG() {
  color1 = color(53, 10, 90, 55);
  color2 = color(53, 10, 90, 15);

  for(let y = 0; y < h; y++) {
    c = lerpColor(color2, color1, y / h);
    stroke(c);
    line(0, y, w, y);
  }
}

function drawTriangles(n) {
  for(let i = 0; i < n; i++) {
    dst = random(50, 300);
    ll = random(30,90);
    step = dst/ll;
    st = step/(random(1,5));
    strokeWeight(.2);
    
    q1 = [random(w/5,w*4/5), random(h/5,h*4/5)];
    if(random()<.4) {
      stroke(h1+random(-30,30),100,100,81);
    } else {
      stroke(h2+random(-30,30),100,100,81);      
    }

    dd = -2;
    if(random() < .4) {
      dd = 2;
    }
    for(let v = 0; v < ll; v++) {
      l = map(v, 0, ll, dst, 0);
      g = random(-5, 5);
      e = q1[0] + l;
      e -= random(0, l/1.5);
      line(q1[0], q1[1], e, q1[1]);
      q1 = [q1[0] + st, q1[1] + dd];
    }
  }
}

function drawArcs() {
  s = random(10,20);
  for(let i = 0; i < 15; i++) {
    x = random(w);
    y = random(h);
    c = random(4, 8);
    dir = [PI, 0];
    if(random() < .4) {
      dir = [0, PI];
    }
    ss = s*random(0.8, 1.2);
    
    if(random()<.4) {
      noStroke();
      fill(0,0,0,10);
    } else {
      stroke(0,0,0,24);
      noFill();
      strokeWeight(1.2);
    }
    for(let j = 0; j < c; j++) {
      arc(x, y+ j*10, s, ss, dir[0], dir[1], OPEN);  
    }    
  }
}

function drawGrids(x, y, n1, n2) {
  stroke(0,0,60,100);
  strokeWeight(0.45);

  t = 550;
  e = 5;
  for(let i = 0; i < n1; i++) {
    sx = x + i * 20;
    sy = y + random(-e, e);
    line(sx, sy, sx, sy + random(t,t+100));    
  }
  x += random(-30, -10);
  y += random(10, 30);
  t = 200;
  for(let i = 0; i < n2; i++) {
    sx = x + random(-e, e);
    sy = y + i * 20;
    line(sx, sy, sx + random(t,t+100), sy);   
  }
  
  stroke(0,0,60,100);
  strokeWeight(0.45);
  x = w - x;
  y = h - y;
  t = 350;
  for(let i = 0; i < n1; i++) {
    sx = x - i * 20;
    sy = y + random(-e, e);
    line(sx, sy, sx, sy - random(t,t+100));    
  }
  x += random(-10, -30);
  y += random(10, 30);
  t = 200;
  for(let i = 0; i < n2; i++) {
    sx = x + random(-e, e);
    sy = y - i * 20;
    line(sx, sy, sx - random(t,t+100), sy);   
  }
}

function mouseClicked() {
	redraw();
}
	

function draw() {
   randomSeed(actRandomSeed);
	var index = int(random(0,4));
	var h1 = h1Arr[ index ];
	var h2 = h2Arr[ index ];
  background(0, 0, 100);
  
  drawGradientBG();
  drawBGCurves(h1, h2);
  drawThickLine();
  drawWhiteCircles(30);
  drawArcs();
  drawWhiteLines(130);
  drawColorLine(12);
  drawDarkCircles();
  drawGrids(50, 60, 13, 18);
  drawTriangles(4);

  n1 = 700;
  n2 = 650;
  
  for(let i = 0; i < 18; i++) {
    b = random(30, 50);

    // bottom to top
    
    p1 = [random(w/6,w*5/6), random(n1,n2)]; // start point(red)
    p2 = [random(w), random(h*2/5,h)];
    p3 = [random(w), random(h*2/5,h)];
    p4 = [random(w/2+o2,w/2-o2), h/2]; 
    
    col = random();
    stroke(0,0,0,b);
    if(col < 0.3) {
      fill(h1+random(-10,10),100,100,a);
    } else if(col < 0.6) {
      fill(h2+random(-10,10),100,100,a);
    } else {
      noFill();
    }
    strokeWeight(random(0.3, 1.2));
    bezier(p1[0],p1[1],p2[0],p2[1],p3[0],p3[1],p4[0],p4[1]);

    drawCircle(p1[0], p1[1], 0.7, h1, 1);

    
    stroke(0, 0, 0, b);
    p1 = [random(w/6,w*5/6), random(h-n1,h-n2)];
    p2 = [random(w), random(h*3/5,0)];
    p3 = [random(w), random(h*3/5,0)];
    p4 = [random(w/2+o2,w/2-o2), h/2];

    col = random();
    if(col < 0.3) {
      fill(h1+random(-10,10),100,100,a);
    } else if(col < 0.6) {
      fill(h2+random(-10,10),100,100,a);
    } else {
      noFill();
    }
    strokeWeight(random(0.3, 1.2));
    bezier(p1[0],p1[1],p2[0],p2[1],p3[0],p3[1],p4[0],p4[1]);

    drawCircle(p1[0], p1[1], 0.7, h2, 1);
  }
}
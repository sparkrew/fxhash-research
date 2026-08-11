function windowResized(){
   init();
   redraw();
}

function setup() {
  init();
}

function init(){
  w = min(windowWidth, windowHeight);
  createCanvas(w, w);
  colorMode(HSB);

  let seed=0;
  for(let i=0;i<fxhash.length-1;i++){
    seed += fxhash.charCodeAt(i) * (i-fxhash.length*0.5) *3.557 + 2.1;
  }

  randomSeed(seed);
  noiseSeed(seed);

  noLoop();
}

function draw(){
 cset = [random(360), random(360), random(360)];

 background(bg=random(cset), 20, 100);

 let N = 6;
  for(let i=0;i<=N;i++){
     for(let j=0;j<=N;j++){
        let dx = random(-1,1)*w/N*0.5;
        let dy = random(-1,1)*w/N*0.5;
        let ds = random(0.5,3.5);
        push();
        translate(w/N*i+dx, w/N*j+dy);
        rotate(random(TAU));
        blendMode(BLEND);
        line_polygon_2(0, 0, int(random(0.3,0.7)*w/N*ds), int(random(3,16)));
        blendMode(HARD_LIGHT);
        line_polygon_2(0, 0, int(random(0.3,0.7)*w/N*ds), int(random(3,16)));
        blendMode(SCREEN);
        line_polygon_2(0, 0, int(random(0.3,0.7)*w/N*ds), int(random(3,16)));
        pop()
     }
  }

  blendMode(BLEND);


  imageMode(CENTER);
  let img = get();

  background(bg, 20, 100);

  let rt = random([0, PI/2, -PI/2, PI]);
  push();
  translate(w*0.25, w*0.25);
  rotate(rt);
  image(img, 0, 0, w*0.5, w*0.5);
  pop();

  push();
  translate(w*0.25, w*0.75);
  scale(1, -1);
  rotate(rt);
  image(img, 0, 0, w*0.5, w*0.5);
  pop();

  push();
  translate(w*0.75, w*0.25);
  scale(-1, 1);
  rotate(rt);
  image(img, 0, 0, w*0.5, w*0.5);
  pop();

  push();
  translate(w*0.75, w*0.75);
  scale(-1, -1);
  rotate(rt);
  image(img, 0, 0, w*0.5, w*0.5);
  pop();


}

function line_polygon_2(x, y, size, point_num){
  let cx = [];
  let cy = [];
  for(let i=0;i<point_num;i++){
   let theta = TAU/point_num*i + random(-1,1)*PI*0.1;
   let rn = random(0.5,1.5);
   cx.push(rn*0.5 * size * cos(theta));
   cy.push(rn*0.5 * size * sin(theta));
  }

  let c = random(cset);
 
  push();
  translate(x, y);

  st = random(20,90);
  linedash = int(random(size*1.5));
  drawingContext.setLineDash([linedash, linedash]);
  strokeWeight( we=int(random(size*0.015,size*0.7)) );
  strokeCap( random([ROUND, SQUARE, PROJECT]) );
  for(let i=0;i<point_num;i++){
     lines(cx[i], cy[i], cx[(i+1)%point_num], cy[(i+1)%point_num],we,c,st);
  }

  st = random(60,100);
  linedash = int(random(size*1.5));
  drawingContext.setLineDash([linedash, linedash]);
  strokeWeight( we=int(random(size*0.015,size*0.7)) );
  strokeCap( random([ROUND, SQUARE, PROJECT]) );
  for(let i=0;i<point_num;i++){
     lines(cx[i], cy[i], 0, 0,we,c,st);
  }
  pop();
}

function lines(x0,y0,x1,y1,we,c,st){
 let n = 20;
 for(let i=1;i<=n;i++){
   push();
   stroke(c, st, 40 + 60/n*i, 0.95/n);
   strokeWeight(we/n*i);
   line(x0,y0,x1,y1);
   pop();
 }
}
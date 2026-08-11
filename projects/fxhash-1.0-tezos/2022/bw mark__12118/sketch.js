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

  let seed=0;
  for(let i=0;i<fxhash.length-1;i++){
    seed += fxhash.charCodeAt(i) * (i-fxhash.length*0.5) *3.557 + 2.1;
  }

  randomSeed(seed);
  noiseSeed(seed);

  colorMode(HSB);
  background(100);
  stroke(100);

  blendMode(DIFFERENCE);

  let N=7;
  for(let i=1;i<N;i++){
     for(let j=1;j<N;j++){
        line_polygon_2(i*w/N, j*w/N, int(0.15*w*random(0.35,0.55)), int(random(3,20)));
     }
  }

}
function line_polygon_2(x, y, size, point_num){
  let cx = [];
  let cy = [];
  for(let i=0;i<point_num;i++){
     let theta = TAU/point_num*i;
     cx.push(0.5 * size * cos(theta));
     cy.push(0.5 * size * sin(theta));
  }

  push();
  translate(x, y);

  strokeWeight( int(random(size*0.05,size*0.75)) );
  strokeCap( random([ROUND, SQUARE, PROJECT]) );
  for(let i=0;i<point_num;i++){
     line(cx[i], cy[i], cx[(i+1)%point_num], cy[(i+1)%point_num]);
  }

  strokeWeight( int(random(size*0.05,size*0.75)) );
  strokeCap( random([ROUND, SQUARE, PROJECT]) );
  for(let i=0;i<point_num;i++){
     line(cx[i], cy[i], 0, 0);
  }
  pop();
}
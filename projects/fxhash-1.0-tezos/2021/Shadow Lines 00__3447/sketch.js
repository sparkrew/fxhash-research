function windowResized(){
   w = min(windowHeight, windowWidth);
   resizeCanvas(w, w);
   init();
   redraw();
}

function setup() {
  w = min(windowHeight, windowWidth);
  createCanvas(w, w);
  init();
 }

 function draw() {
   background(0);
   let n=3;
   let is = w/n;
 
   for(let i=0.5;i<n;i++){
     for(let j=0.5;j<n;j++){
      img = draw_lines(is*0.98, is*0.98, is*0.05);
 
      image(img, is*j, is*i);
     }
   }

	noLoop();
 }

function init(){
   let seed=0;
   for(let i=0;i<fxhash.length-1;i++){
     seed += fxhash.charCodeAt(i) * (i-fxhash.length*0.5) *1.511;
   }
   console.log(seed)

   randomSeed(seed);
   noiseSeed(seed);

   imageMode(CENTER);
}


function draw_lines(ww, hh, size){
   let img = createGraphics(ww, hh);
   let N = 100;
 
   let color_pat = [[50, 320, 200],
                    [10, 130, 290],
                    [30, 20, 230],
                    [250, 190, 90],
                    [0, 160, 280]
                   ];
   let cpat = random(color_pat);
 
   img.colorMode(HSB);
   img.background(0);
   img.stroke(0);
 
   img.strokeWeight(size);
 
   let pos = [{x:rand_margin(ww, size), y:rand_margin(hh, size)}];
   pos.push(pos[0]);
 
   img.drawingContext.shadowBlur = size*0.25;
 
   for(let i=0;i<N;i++){
     let icol ;
     if(random()<0.5){
       img.blendMode(ADD);
       icol = img.color(random(cpat), 100, 40);
     } else{
       img.blendMode(BLEND);
       icol = img.color(random(cpat), 100, 100, 0.7);
     }


     img.drawingContext.shadowColor = icol;
     img.drawingContext.shadowOffsetX = random(-1, 1) * size*1.25;
     img.drawingContext.shadowOffsetY = random(-1, 1) * size*1.25;

     img.line(pos[0].x, pos[0].y, pos[1].x, pos[1].y);
 
     pos[1] = pos[0];
 
     if(i%3 == 0){
       pos[0] = {x:rand_margin(ww, size), y:rand_margin(hh, size)};
       img.push();
       img.fill(img.color(random(cpat), 100, 100, 0.5));
       img.ellipse(pos[1].x, pos[1].y, random(size*2, size*4));
       img.pop();
     }
     else if(i%3 == 1){
       pos[0] = {x:pos[0].x, y:rand_margin(hh, size)};
     }
     else{
       pos[0] = {x:rand_margin(ww, size), y:pos[0].y};
     }
   }
   return img;
 }
 
 function rand_margin(max, mar){
   return random( mar, max-mar );
 }
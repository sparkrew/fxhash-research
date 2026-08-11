/**************************
 * fxhash-Works
 * PETRI DISH
 * by E.C.H (Eiichi Ishii)
 **************************/

 let num = 16;
 let w, g;
 let pg = [];
 let msk = [];
 let dis = [];
 let cp = ["#B54837", "#EDD882", "#A5BB90", "#5E6327", "#A68D18"];
 let pp = ["#2A994D", "#C1CF1B", "#FADB5F", "#F5981C", "#DF3A1F"];
 let fxSeed;
 
 function setup() {
   w = min(windowWidth, windowHeight);
   createCanvas(w, w);
   fxSeed = int(fxrand() * 100000000);
   randomSeed(fxSeed);
   noiseSeed(fxSeed);
   angleMode(DEGREES);
   imageMode(CENTER);
   rectMode(CENTER);
   noLoop();
 
   g = w / 4;
 }
 
 function draw() {
   background(0);
 
   for (let i = 0; i < num; i++) {
     pg[i] = createGraphics(g, g);
     pg[i].randomSeed(fxSeed);
     pg[i].noiseSeed(fxSeed);
     pg[i].angleMode(DEGREES);
     let vg = random([4, 6, 8, 10]);
     let lg = g / vg;
     let xn = random(-g / 4, g / 4);
     let lindex = int(random(2));
     let sw = int(random(2));
     let c1 = random(cp);
     let c2 = random(cp);
     while (c1 == c2) {
       c2 = random(cp);
     }
     pg[i].push();
     pg[i].translate(g / 2, 0);
     pg[i].strokeWeight(lg * 1.1);
     for (let ly = lg / 2; ly <= g + lg / 2; ly += lg) {
       let lx = map(noise(xn), 0, 1, -g / 4, g / 4);
       xn += 0.1;
       if (lindex % 2 == 0) {
         pg[i].stroke(c1);
         pg[i].line(lx, ly, g / 2, ly);
         pg[i].stroke(c2);
         if (sw == 0) {
           pg[i].stroke(random(cp));
         } else {
           pg[i].stroke(c2);
         }
         pg[i].line(lx + random(lg / 10, lg * 2), ly, -g / 2, ly);
       } else {
         if (sw == 0) {
           pg[i].stroke(random(cp));
         } else {
           pg[i].stroke(c2);
         }
         pg[i].line(lx, ly, -g / 2, ly);
         pg[i].stroke(c1);
         pg[i].line(lx - random(lg / 10, lg * 2), ly, g / 2, ly);
       }
       lindex++;
     }
     pg[i].pop();
 
     pg[i].push();
     pg[i].translate(g / 2, g / 2);
     let pnum = int(random(10, 80));
     for (let j = 0; j < pnum; j++) {
       if (int(random(2)) == 0) {
         pg[i].fill(random(pp));
         pg[i].noStroke();
       } else {
         pg[i].stroke(random(pp));
         pg[i].strokeWeight(1);
         pg[i].fill(random([0, 255]));
       }
       let mr = g * 1.2 * sqrt(random(1));
       let angle = random(360);
       let er = random(g / 80, g / 10);
       pg[i].ellipse((mr / 2) * cos(angle), (mr / 2) * sin(angle), er, er);
     }
     pg[i].pop();
 
     msk[i] = createGraphics(g, g);
     msk[i].randomSeed(fxSeed);
     msk[i].noiseSeed(fxSeed);
     msk[i].angleMode(DEGREES);
     msk[i].rectMode(CENTER);
     msk[i].translate(g / 2, g / 2);
     msk[i].fill(255);
     msk[i].noStroke();
     let rr = g / 1.05;
     msk[i].rect(
       0,
       0,
       rr,
       rr,
       random(rr / 2.5),
       random(rr / 2.5),
       random(rr / 2.5),
       random(rr / 2.5)
     );
     msk[i].filter(BLUR, random(10));
 
     (dis[i] = pg[i].get()).mask(msk[i]);
   }
 
   let index = 0;
   for (let x = g / 2; x <= w - g / 2; x += g) {
     for (let y = g / 2; y <= w - g / 2; y += g) {
       push();
       translate(x, y);
 
       rotate(random([0, 90, -90, 180]));
       scale(random([-1, 1]), 1);
       scale(0.98);
 
       push();
       scale(1.03);
       image(msk[index], 0, 0, g, g);
       pop();
 
       image(dis[index], 0, 0, g, g);
       index++;
       if (index >= num) {
         index = 0;
       }
       pop();
     }
   }
 }

 function keyPressed() {
    save("export.PNG");
}
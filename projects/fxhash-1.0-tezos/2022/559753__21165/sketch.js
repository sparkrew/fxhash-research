function setup() {
  
pixelDensity(1);
  
createCanvas(1000, 1000);

let nois=int(fxrand()*999999999); 
randomSeed(nois);



let sh = [-10,0,10];

let x = 500;   

let y = 500;

let A=int(random(5,16));
  
  
background(random(255),random(255),random(255));
  
fill(random(255),random(255),random(255));

 strokeWeight(5);
  
  
  
beginShape();
  
  
  
for (let i = 0; i <= 11; i += 1) {

let x2=random(1000);

let y2=random(1000);

vertex(x2,y2);


ellipse(x2,y2,50,50);

}

  
fill(random(255),random(255),random(255)); 

endShape(CLOSE);

loadPixels();
  
background(0);
  
strokeWeight(1);

for (let i11 = 0; i11 < 50000; i11 += 1) {
let poz=(x+y*width)*4;

let r=pixels[poz];

let g=pixels[poz+1];

let b=pixels[poz+2];

stroke(r,g,b); 
 
fill(r,g,b);

rect(x,y,A,A);

x = constrain(x, 50, 950-A);

y = constrain(y, 50, 950-A);

//x=x+sh[int(random(3))];         

//y=y+sh[int(random(3))];

x=x+sh[int(fxrand()*2.99)];         

y=y+sh[int(fxrand()*2.99)];




 }
    
  


fxpreview();
//see license file name LICENSE.md

}


function setup() {
  createCanvas(1000, 1000);
background(0);

let nois=int(fxrand()*1000000000000000000);    
randomSeed(nois);

let ran=int(random(1,7));
let r=int(random(256));
let g=int(random(256));
let b=int(random(256));
let pr=int(random(30,251)); 
let ran100=int(random(1,5));
let ran101=int(random(5,9));
let sh=int(random(20,151));  
let sh2=int(random(20,51)); 

for (let i = 0; i <= 1200; i += sh) {             
  for (let i2 = 0; i2 <= 1100; i2 += sh2) {        
  push();
translate(i2+random(-10,10), i+random(-10,10));

 let shir=random(20,50);   
 let vis=random(50,130);   
noStroke();


if (ran==1) {
fill(r,g,random(255),pr);
}
else if (ran==2) {
fill(r,random(255),b,pr);
}
else if (ran==3) {
fill(random(255),g,b,pr);
}
else if (ran==4) {
fill(random(255),random(255),b,pr);
}

else if (ran==5) {
fill(r,random(255),random(255),pr);
}

else if (ran==6) {
fill(random(255),g,random(255),pr);
}


let okn=vis/10;   


if (ran100==1) {
for (let i1 = 1; i1 < 100; i1 += 1) {  
ellipse(random(-shir-okn)*1.5, random(-vis-okn)*1.5, okn/random(0.1,1), okn/random(0.1,1));

}
}

else if (ran100==2) {
for (let i1 = 1; i1 < 100; i1 += 1) {  
rect(random(-shir-okn)*1.5, random(-vis-okn)*1.5, okn/random(0.1,1), okn/random(0.1,1));
}
}

else if (ran100==3) {
for (let i1 = 1; i1 < 100; i1 += 1) {  
rect(random(-shir-okn)*1.5, random(-vis-okn)*1.5, okn/random(0.1,1), ran101);
}
}

else if (ran100==4) {
for (let i1 = 1; i1 < 100; i1 += 1) {  
triangle(random(-shir-okn)*1.5, random(-vis-okn)*1.5, okn/random(0.1,1), okn/random(0.1,1),0,0);

}
}

pop();
}
}
}
//see license file name LICENSE.md
  
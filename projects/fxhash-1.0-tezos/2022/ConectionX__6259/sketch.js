
//code by dev subjective
var r;
var g;
var b;

var r1;
var g1;
var b1;

var v1;
var v2;

palette = [
  "#f2eb8a",
  "#fed000",
  "#fc8405",
  "#ed361a",
  "#e2f0f3",  
  "#b3dce0",
  "#4464a1",
  "#203051",
  "#ffc5c7",
  "#f398c3",
  "#cf3895",
  "#6d358a",
  "#06b4b0",
  "#4b8a5f",
  "#011627",
  "#fdfffc",
  "#2ec4b6",
  "#e71d36",
  "#ff9f1c"
];



  
  function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return     Math.floor(fxrand() * (max - min + 1)) + min;}
  


linhaT= rnd_int(400,1100)
linhaC=rnd_int(1,20)

k1= rnd_int(0,18)
k2= rnd_int(0,18)
k3= rnd_int(0,18)
k4= rnd_int(0,18)
k5= rnd_int(0,18)
k6= rnd_int(0,18)
k7= rnd_int(0,18)


  r = rnd_int(0, 255)
 
  
  g = rnd_int(0, 255)
  
  
  b = rnd_int(0, 255)
  
   
   r1 = rnd_int(0, 255)
  
  
  g1 = rnd_int(0, 255) 
 
  
  b1 = rnd_int(0, 255) 

 r2 = rnd_int(0, 255)
  
  
  g2 = rnd_int(0, 255) 
 
  
  b2 = rnd_int(0, 255) 

r3 = rnd_int(0, 255)
  
  
  g3 = rnd_int(0, 255) 
 
  
  b3 = rnd_int(0, 255) 

let em1,em2;

console.log(fxhash);
console.log(fxrand());

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  }

function draw() {
  
  spotLight(255, 250, 255, 0, 0, 3500, 0, 0, -1, Math.PI / 16);
  
  rotateY(frameCount * 0.00);
  sin(rotateZ(frameCount * 0.00));
  
   background(palette[k1]);

  for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 30 ; i++) {
      translate(
        tan(frameCount * 0.002 + j) * 300,
        sin(frameCount * 0.002 + j) * 300,
        cos(frameCount * 0.002 + j) * 300,
        
       
        
        i * 0.09
      );
      rotateZ(frameCount * 0.002);
      rotateY(frameCount * 0.002);
      rotateX(frameCount * 0.002);
      push();
      
      fill(palette[k2])
       box(50, 200,40);
      fill(palette[k3])
     box(200,50,40)
      fill(palette[k4])
      box(40,50,200)
      
      
      
      
      
      
      pop();
    }
    pop();
  }
  
    for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 30 ; i++) {
      translate(
        tan(frameCount * 0.002 + j) * 300,
        sin(frameCount * 0.002 + j) * 300,
        cos(frameCount * 0.002 + j) * 300,
        
       
        
        i * 0.09
      );
      rotateZ(frameCount * -0.007);
      rotateY(frameCount * 0.009);
      rotateX(frameCount * -0.007);
      push();
      
      fill(palette[k5])
      
       box(200,50,40)
      fill(palette[k6])
      box(40,50,200)
      
              
            pop();
    }
    pop();
  }
  
  
   for (let j = 0; j < 3; j++) {
    push();
    for (let i = 0; i < 5; i++) {
      translate(
        -tan(frameCount * 0.002 + j) * 300,
        sin(frameCount * 0.002 + j) * 300,
        cos(frameCount * 0.002 + j) * 300,
       
        
        i * 0.09
      );
      rotateZ(frameCount * -0.008);
      rotateY(frameCount * -0.008);
      rotateX(frameCount * -0.008);
      push();
      
      fill(palette[k7])
      box(50, 200,40);
     
      
      
     
      
      
      pop();
    }
    pop();
  }
  
   for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 80; i++) {
      translate(
        sin(frameCount * 0.019 + j) * 100,
        cos(frameCount * 0.009 + j) * 100,
       
        
        i * 0.09
      );
      rotateZ(frameCount * 0.005);
      rotateY(frameCount * -0.005);
      rotateX(frameCount * 0.005);
      
      push();
      
      
      fill(r,g,b)
      
      //50- 100  1 a 20
     sphere(linhaT, 1,linhaC);
      
      
      pop();
    }
    pop();
  }
  
    pop();
  
  
}

switch (k1) {
    
  case 0: rr51 = "Solitud"; break;
  case 1: rr51 = "happiness"; break;
  case 2: rr51 = "Vitality"; break;
  case 3: rr51 = "Blood Love"; break;
  case 4: rr51 = "Frozen Heart"; break;
  case 5: rr51 = "Cold"; break; 
  case 6: rr51 = "Serenity"; break;
  case 7: rr51 = "Strong Serenity"; break;
  case 8: rr51 = "Fellinig good"; break;
  case 9: rr51 = "Lovely"; break;
  case 10: rr51 = "In love"; break;
  case 11: rr51 = "Nostalgy"; break;
  case 12: rr51 = "Fear"; break;
  case 13: rr51 = "Desconfort"; break;
  case 14: rr51 = "Amazon"; break; 
  case 15: rr51 = "Dark"; break;
  case 16: rr51 = "lost"; break;
  case 17: rr51 = "Injured"; break;
  case 18: rr51 = "Fun"; break;
  
  
}
switch (k2) {
    
  case 0: rr52 = "Solitud"; break;
  case 1: rr52 = "happiness"; break;
  case 2: rr52 = "Vitality"; break;
  case 3: rr52 = "Blood Love"; break;
  case 4: rr52 = "Frozen Heart"; break;
  case 5: rr52 = "Cold"; break; 
  case 6: rr52 = "Serenity"; break;
  case 7: rr52 = "Strong Serenity"; break;
  case 8: rr52 = "Fellinig good"; break;
  case 9: rr52 = "Lovely"; break;
  case 10: rr52 = "In love"; break;
  case 11: rr52 = "Nostalgy"; break;
  case 12: rr52 = "Fear"; break;
  case 13: rr52 = "Desconfort"; break;
  case 14: rr52 = "Amazon"; break; 
  case 15: rr52 = "Dark"; break;
  case 16: rr52 = "lost"; break;
  case 17: rr52 = "Injured"; break;
  case 18: rr52 = "Fun"; break;
  
  
}
switch (k3) {
    
  case 0: rr53 = "Solitud"; break;
  case 1: rr53 = "happiness"; break;
  case 2: rr53 = "Vitality"; break;
  case 3: rr53 = "Blood Love"; break;
  case 4: rr53 = "Frozen Heart"; break;
  case 5: rr53 = "Cold"; break; 
  case 6: rr53 = "Serenity"; break;
  case 7: rr53 = "Strong Serenity"; break;
  case 8: rr53 = "Fellinig good"; break;
  case 9: rr53 = "Lovely"; break;
  case 10: rr53 = "In love"; break;
  case 11: rr53 = "Nostalgy"; break;
  case 12: rr53 = "Fear"; break;
  case 13: rr53 = "Desconfort"; break;
  case 14: rr53 = "Amazon"; break; 
  case 15: rr53 = "Dark"; break;
  case 16: rr53 = "lost"; break;
  case 17: rr53 = "Injured"; break;
  case 18: rr53 = "Fun"; break;
  
  
}
switch (k4) {
    
  case 0: rr54 = "Solitud"; break;
  case 1: rr54 = "happiness"; break;
  case 2: rr54 = "Vitality"; break;
  case 3: rr54 = "Blood Love"; break;
  case 4: rr54 = "Frozen Heart"; break;
  case 5: rr54 = "Cold"; break; 
  case 6: rr54 = "Serenity"; break;
  case 7: rr54 = "Strong Serenity"; break;
  case 8: rr54 = "Fellinig good"; break;
  case 9: rr54 = "Lovely"; break;
  case 10: rr54 = "In love"; break;
  case 11: rr54 = "Nostalgy"; break;
  case 12: rr54 = "Fear"; break;
  case 13: rr54 = "Desconfort"; break;
  case 14: rr54 = "Amazon"; break; 
  case 15: rr54 = "Dark"; break;
  case 16: rr54 = "lost"; break;
  case 17: rr54 = "Injured"; break;
  case 18: rr54 = "Fun"; break;
  
  
}
switch (k5) {
    
  case 0: rr55 = "Solitud"; break;
  case 1: rr55 = "happiness"; break;
  case 2: rr55 = "Vitality"; break;
  case 3: rr55 = "Blood Love"; break;
  case 4: rr55 = "Frozen Heart"; break;
  case 5: rr55 = "Cold"; break; 
  case 6: rr55 = "Serenity"; break;
  case 7: rr55 = "Strong Serenity"; break;
  case 8: rr55 = "Fellinig good"; break;
  case 9: rr55 = "Lovely"; break;
  case 10: rr55 = "In love"; break;
  case 11: rr55 = "Nostalgy"; break;
  case 12: rr55 = "Fear"; break;
  case 13: rr55 = "Desconfort"; break;
  case 14: rr55 = "Amazon"; break; 
  case 15: rr55 = "Dark"; break;
  case 16: rr55 = "lost"; break;
  case 17: rr55 = "Injured"; break;
  case 18: rr55 = "Fun"; break;
  
  
}
switch (k6) {
    
  case 0: rr56 = "Solitud"; break;
  case 1: rr56 = "happiness"; break;
  case 2: rr56 = "Vitality"; break;
  case 3: rr56 = "Blood Love"; break;
  case 4: rr56 = "Frozen Heart"; break;
  case 5: rr56 = "Cold"; break; 
  case 6: rr56 = "Serenity"; break;
  case 7: rr56 = "Strong Serenity"; break;
  case 8: rr56 = "Fellinig good"; break;
  case 9: rr56 = "Lovely"; break;
  case 10: rr56 = "In love"; break;
  case 11: rr56 = "Nostalgy"; break;
  case 12: rr56 = "Fear"; break;
  case 13: rr56 = "Desconfort"; break;
  case 14: rr56 = "Amazon"; break; 
  case 15: rr56 = "Dark"; break;
  case 16: rr56 = "lost"; break;
  case 17: rr56 = "Injured"; break;
  case 18: rr56 = "Fun"; break;
  
  
}
switch (k7) {
    
  case 0: rr57 = "Solitud"; break;
  case 1: rr57 = "happiness"; break;
  case 2: rr57 = "Vitality"; break;
  case 3: rr57 = "Blood Love"; break;
  case 4: rr57 = "Frozen Heart"; break;
  case 5: rr57 = "Cold"; break; 
  case 6: rr57 = "Serenity"; break;
  case 7: rr57 = "Strong Serenity"; break;
  case 8: rr57 = "Fellinig good"; break;
  case 9: rr57 = "Lovely"; break;
  case 10: rr57 = "In love"; break;
  case 11: rr57 = "Nostalgy"; break;
  case 12: rr57 = "Fear"; break;
  case 13: rr57 = "Desconfort"; break;
  case 14: rr57 = "Amazon"; break; 
  case 15: rr57 = "Dark"; break;
  case 16: rr57 = "lost"; break;
  case 17: rr57 = "Injured"; break;
  case 18: rr57 = "Fun"; break;
  
}

//linhaT= rnd_int(400,1100)
//linhaC=rnd_int(1,20)

if(linhaT >900){
  em1="High"
}else if(linhaT>600){
  em1= "Medium"
}else if(linhaT>400){
  em1="Low"
}

if(linhaC > 15){
   em2= "Large"
   }else if(linhaC > 10){
     em2= "More"
   }else if( linhaC >5){
     em2="Medium"
   }else if( linhaC >1){
     em2="Small"
   }

console.log(rr51)
console.log(rr52)
console.log(rr53)
console.log(rr54)
console.log(rr55)
console.log(rr56)
console.log(rr57)
console.log(em1)
console.log(em2)


window.$fxhashFeatures = {
  Feeling1: rr51,
  Feeling2: rr52,
  Feeling3: rr53,
  Feeling4: rr54,
  Feeling5: rr55,
  Feeling6: rr56,
  Feeling7: rr57,
  Emossion1: em1,
  Emossion2: em2,
  
};



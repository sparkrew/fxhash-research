
var cl=[]
var grid=[]
var pl=[]
var lightningmethod=fxrand()
var lightningcolor=9*fxrand()
var maxdiameter=30+30*fxrand()
var a2=fxrand()
var a5=fxrand()
var a6=fxrand()
var pencillevel=4+14*fxrand()
var a11=50+120*fxrand()
var a13=1+4*fxrand()
var a33=5+5*fxrand()

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
   ortho(-width / 2, width / 2, height / 2, -height / 2, -4000, 4000);
  //noLoop()
  
  angleMode(DEGREES)
 noStroke()
   frameRate(30)
  
  for(var i=0;i<5;++i){
    cll1=20+225*fxrand()
    cll2=cll1+10
    cll3=20+225*fxrand()
    cll4=cll3+10
    cll5=20+225*fxrand()
    cll6=cll5+10
     if(fxrand()>0.5){
       a1=255
     }else{
       a1=200+20*fxrand()
     }
    cl[i]=color(random(cll1,cll2),random(cll3,cll4),random(cll5,cll6),a1)
  }
   
  strokeWeight(2.5)
 
  a3=10*int(a33)
  a4=int(maxdiameter)
  while (grid.length < a3) {
   
    let mostatil = {
      x: -200+400*fxrand(),
      y: -200+400*fxrand(),
      r: 10+a4*fxrand(),
    };

    let barkhord = false;

    let hefazat = 0;

    for (let j = 0; j < grid.length; j++) {
      let other = grid[j];
      var d = dist(mostatil.x, mostatil.y, other.x, other.y);
      if (d < mostatil.r + other.r) {
        barkhord = true;
        break;
      }
    }

    if (!barkhord) {
      grid.push(mostatil);
    }

    hefazat++;

    if (hefazat > 85) {
      break;
    }
  }


  ertefa=int(a11)
  a9=int(pencillevel)
  a10=0.7+0.3*fxrand();
  a12=map(a10,0.7,1,1,0.7)
  sorat=0.5*int(a13)  
  
   cll1=random(100,255)
    cll2=random(100,255)
    cll3=random(100,255)
  
   randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
  h=0;
  
  pl[0]='#FCDC5C'
  pl[1]='#EDD59E'
  pl[2]='#FADE85'
  pl[3]='#F1CD6C'
  pl[4]='#F4E99B'
  pl[5]='#FCE570'
  pl[6]='#FFE06A'
  pl[7]='#F7CD5D'
  pl[8]='#FFCC33'
  
  
}

function draw() {
  

  
  if(lightningmethod<0.5){
   ambientLight(red(pl[int(lightningcolor)]),green(pl[int(lightningcolor)]),blue(pl[int(lightningcolor)]));
   directionalLight(red(pl[int(lightningcolor)]),green(pl[int(lightningcolor)]),blue(pl[int(lightningcolor)]),-200,200,200)
    
  }else if(lightningmethod<0.8){
    ambientLight(red(pl[int(lightningcolor)]),green(pl[int(lightningcolor)]),blue(pl[int(lightningcolor)]));
      directionalLight(red(pl[int(lightningcolor)]),green(pl[int(lightningcolor)]),blue(pl[int(lightningcolor)]),200,200,200)
    
  }else{
    ambientLight(255-red(pl[int(lightningcolor)]),255-green(pl[int(lightningcolor)]),255-blue(pl[int(lightningcolor)]));
     pointLight(red(pl[8]),green(pl[8]),blue(pl[8]),220*sin(3*frameCount),220*cos(3*frameCount),300)
    pointLight(red(pl[8]),green(pl[8]),blue(pl[8]),220*sin(3*frameCount+180),220*cos(3*frameCount+180),300)
  }
	
 background(255-red(pl[int(lightningcolor)]),255-green(pl[int(lightningcolor)]),255-blue(pl[int(lightningcolor)]),150);
  // rotate the whole cube
  rotateX(-35.26)
  rotateZ(45)
  
  
  
  translate(0,0,-20)
    
  
  
  for (let i = 0; i < grid.length; i++) {

   
    push();
    translate(grid[i].x, grid[i].y,0);
   
     p1=cl[int(map(i,0,a3,0,5))]
   
      if(a2>0.4){
        noStroke()
        specularMaterial(p1)
      }else{
         stroke(0,200)
         specularMaterial(p1)
      }
    
    if(a6<0.4){
     h=ertefa+int(map(i,0,a3,0,180))*sin(sorat*frameCount)
    }else{
    h=ertefa+ertefa*sin(sorat*frameCount)
    }
    
    
      rotateX(90)
    
    if(a5<0.4){
      cylinder(grid[i].r*a12,h,a9,1)
    translate(0,h-1,0)
    }else if(a5<0.7){
      cylinder(grid[i].r*a12,h,a9,1)
    translate(0,h-1,0)
      cone(grid[i].r*a10,h,a9,1)
    }else{
      cone(grid[i].r*a10,h,a9,1)
    }
    
  
    pop();

  }
  
  
  push();
  rotateZ(45)
  torus(370,25,4,24)
  pop();
  
  shininess(20);
   orbitControl();
  
}

function lighmethod(a){

  if(lightningmethod<0.5){
    return 'First directional light'
  }else if(lightningmethod<0.8){
    return 'Second directional light'
  }else{
    return 'Rotional Ponit light'
  }
  
}

function sunlightname(a){

  if(lightningcolor<1){
    return 'Electric Sunshine'
  }
  if(lightningcolor<2){
    return 'Sunlight(pantone)'
  }
  if(lightningcolor<3){
    return 'sunshine(pantone)'
  }
  if(lightningcolor<4){
    return 'Warm sun color'
  }
  if(lightningcolor<5){
    return 'Sunlight color'
  }
  if(lightningcolor<6){
    return 'Sun color'
  }
  if(lightningcolor<7){
    return 'Sun CMYK color '
  }
  if(lightningcolor<8){
    return "Sunrise color"
  }
  
  if(lightningcolor<9){
    return "Sunglow color"
  }
 
}

function maxdia(a){

  if(a<40){
    return 'Small'
  }else if(a<50){
     return 'Medium'
  }else{
     return 'Big'
  }
  
}

function strokeornot(a){

  if(a>0.4){
    return 'No'
  }else{
    return 'Yes'
  }
  
}

function pencilbody(a){

  if(a<0.4){
    return 'Body'
  }else if(a<0.7){
    return 'Body & Cone'
  }else{
    return 'Cone'
  }
  
}



function pencilheight(a){

  if(a<0.4){
    return 'Variable height'
  }else{
    return 'Same height'
  }
  
}

function plevel(a){

  if(a<5){
    return 3
  }
  if(a<6){
    return 4
  }
  if(a<7){
    return 5
  }
  if(a<8){
    return 6
  }
  if(a<9){
    return 7
  }
  if(a<10){
    return 8
  }
  if(a<11){
    return 9
  }
  if(a<12){
    return 10
  }
  
  
  if(a<13){
    return 11
  }

  if(a<14){
    return 12
  }


  if(a<15){
    return 13
  }


  if(a<16){
    return 14
  }


  if(a<17){
    return 15
  }


  if(a<18){
    return 16
  }
  
 
}


function maxheight(a){

  if(a<90){
    return 'short'
  }else if(a<130){
     return 'Medium'
  }else{
    return 'tall'
  }
  
}

function motionspeed(a){

  if(a<2){
    return 1
  }
  if(a<3){
    return 2
  }
  if(a<4){
    return 3
  }
  if(a<5){
    return 4
  }
}

window.$fxhashFeatures = {
  
  "Lightning Method" : lighmethod(lightningmethod),
  "Sunlight Name" : sunlightname(lightningcolor),
  "Diameter" : maxdia(maxdiameter),
  "Stroke" : strokeornot(a2),
  "Oil pastel Structure" : pencilbody(a5),
  "Oil pastel Height Type" : pencilheight(a6),
  "Oil pastel type" : plevel(pencillevel),
  "Oil pastel Height" : maxheight(a11),
  "Motion speed" : motionspeed(a13) 
}
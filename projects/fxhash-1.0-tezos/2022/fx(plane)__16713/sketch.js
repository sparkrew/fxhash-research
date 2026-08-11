let pallete = [['#9b5de5','#f15bb5','#fee440','#00bbf9','#00bbf9','#00f5d4'],['#ff595e','#ffca3a','#8ac926','#1982c4','#6a4c93'],['#264653','#2a9d8f','#e9c46a','#f4a261','#e76f51'],['#003049','#d62828','#f77f00','#fcbf49','#eae2b7'],['#e63946','#f1faee','#a8dadc','#457b9d','#1d3557'],['#0081a7','#00afb9','#fdfcdc','#fed9b7','#f07167'],['#ff9f1c','#ffbf69','#ffffff','#cbf3f0','#2ec4b6'],['#390099','#9e0059','#ff0054','#ff5400','#ffbd00'],['#335c67','#fff3b0','#e09f3e','#9e2a2b','#540b0e'],['#227c9d','#17c3b2','#ffcb77','#fef9ef','#fe6d73'],['#0d3b66','#faf0ca','#f4d35e','#ee964b','#f95738'],['#ff0000','#ff8700','#ffd300','#deff0a','#a1ff0a','#0aff99','#0aefff','#0aefff','#147df5','#580aff'],['#011627','#fdfffc','#2ec4b6','#e71d36','#ff9f1c'],['#eac435','#345995','#03cea4','#fb4d3d','#ca1551'],['#cc5803','#e2711d','#ff9505','#ffb627','#ffc971'],['#5aa9e6','#7fc8f8','#f9f9f9','#ffe45e','#ff6392'],['#1a535c','#4ecdc4','#f7fff7','#ff6b6b','#ffe66d'],['#ff0000','#ff8700','#ffd300','#deff0a','#a1ff0a','#0aff99','#0aefff','#0aefff','#147df5','#580aff'],['#54478c','#2c699a','#048ba8','#0db39e','#16db93','#83e377','#b9e769','#efea5a','#f1c453','#f29e4c'],['#dcdcdd','#c5c3c6','#46494c','#4c5c68','#1985a1'],['#2F3837','#C5C7B6','#FFF8D3','#4C493E','#222028'],['#C44C51','#FFB6B8','#FFEFB6','#A2B5BF','#5F8CA3'],['#E1DA36','#FFEA1B','#6FE4DA','#1DB0BC','#007BBC']];

var cl
var nl=5*fxrand();
var loopN =8+nl;
var ns=8*fxrand();
var de=6*fxrand();
var ertefa=2+6*fxrand();
var cam=4*fxrand();

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
   background(255);
  camera(500,500,500+25*int(cam), 0, 0, 0, 0, 0, 1)
  //noStroke()
  noLoop()
  ortho(-width/2 , width/2 , height/2 , -height/2 , 0, 4000);
  //noStroke()
  
  strokeWeight(0.7)
  angleMode(DEGREES)
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
}

function draw() {
  ambientLight(255, 214,170);
  //directionalLight(255, 214,170,-cos(60),cos(60),cos(60))
  pointLight(255, 214,170,20,20,300)
  
  

  //specularMaterial(p1)
      shuffle(pallete, true);
  translate(-1000,-1000,0)
  let m = width*0.01;
  mostatilmotofavet(m, m, 5*width-m*2, 5*height-m*2,int(loopN));
      
  
}

function mostatilmotofavet(x, y, w, h, n){
  // draw rectangle
  
  fill(pallete[0][floor(random(pallete[0].length))]);
  rect(x, y, w, h);
  translate(0,0,0.01)
  
  n--;
  if(n == 0){
    cl=pallete[0][floor(random(pallete[0].length))];
    fill(cl)
    var m = int(de);
     
    push()
    r11=random();
   if(r11<0.4){
      h1max=int(ertefa)
     for(let h1=1;h1<h1max;h1=h1+0.3){
        translate(0,0,h1)
rect(x, y, w, h);
     
       alamt(x,y,w,h,ns)
       
     }
    }

    pop()
    
  } 
  if(n > 0){
		var m =int(de);
    let r = floor(random(2));
    // if width is longer than height or width is equal to height
    if(w >= h){
      let randomW =w*0.3+w*0.4854*fxrand();
      mostatilmotofavet(x+m, y+m, randomW-m*2, h-m*2, n);
      mostatilmotofavet(x+randomW+m, y+m, w-randomW-m*2, h-m*2, n);
    }  
    // if width is less than hight
    else if(w < h){
      let randomH = h*0.3+h*0.4854*fxrand();
      mostatilmotofavet(x+m, y+m, w-m*2, randomH-m*2, n);    
      mostatilmotofavet(x+m, y+randomH+m, w-m*2, h-randomH-m*2, n); 
    }
  }

}


function alamt(x,y,w,h,ns){
  
  switch(int(ns)){
    case 0:
      circle(x+w/2,y+h/2,min(w,h))
      break;
         
      case 1:
      line(x,y,x+w,y+h)
      break;
      
      case 2:
      line(x,y,x+w,y+h)
      line(x+w,y,x,y+h)
      break;
      
      case 3:
      line(x,y+h/2,x+w/2,y)
      line(x+w/2,y,x+w,y+h/2)
      line(x+w,y+h/2,x+w/2,y+h)
      line(x+w/2,y+h,x,y+h/2)
      break;
      
      case 4:
      line(x+w/2,y,x+w/2,y+h)
      line(x,y+h/2,x+w,y+h/2)
      break;
      
      case 5:
      hm=2.5;
      rect(x+hm,y+hm,-2*hm+w/2,-2*hm+h/2)
       rect(x+hm+w/2,y+hm,-2*hm+w/2,-2*hm+h/2)
       rect(x+hm,y+hm+h/2,-2*hm+w/2,-2*hm+h/2)
       rect(x+hm+w/2,y+hm+h/2,-2*hm+w/2,-2*hm+h/2)
      break;
      
      case 6:
       hm=2.5;
      rect(x+hm,y+hm,-2*hm+w/2,-2*hm+h)
       rect(x+hm+w/2,y+hm,-2*hm+w/2,-2*hm+h)
     
      break;
      
      case 7:
      
      break;
         
         }
}


function dencity(a){

  if(a<1){
    return 1
  }
  if(a<2){
    return 2
  }
  if(a<3){
    return 3
  }
  if(a<4){
    return 4
  }
  if(a<5){
    return 5
  }
}

function sign(a){

  if(a<1){
    return 1
  }
  if(a<2){
    return 2
  }
  if(a<3){
    return 3
  }
  if(a<4){
    return 4
  }
  if(a<5){
    return 5
  }
  if(a<6){
    return 6
  }
  if(a<7){
    return 7
  }
  if(a<8){
    return "None"
  }
 
}

function level(a){

  if(a<1){
    return 1
  }
  if(a<2){
    return 2
  }
  if(a<3){
    return 3
  }
  if(a<4){
    return 4
  }
  if(a<5){
    return 5
  }
  if(a<6){
    return 6
  }
}

function maxheight(a){

  if(a<3){
    return 2
  }
  if(a<4){
    return 3
  }
  if(a<5){
    return 4
  }
  if(a<6){
    return 5
  }
  if(a<7){
    return 6
  }
  if(a<8){
    return 7
  }
}

function cameraview(a){

  if(a<1){
    return 1
  }
  if(a<2){
    return 2
  }
  if(a<3){
    return 3
  }
  if(a<4){
    return 4
  }
}


window.$fxhashFeatures = {
  
  "Dencity" : dencity(nl),
  "Sign" : sign(ns),
  "Level" : level(de),
  "Max Height" : maxheight(ertefa),
  "Camera View" : cameraview(cam)
  
}
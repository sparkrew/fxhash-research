//erfanhoseini.xyz
//Buildings

let numb4 =0;
let wx =0;
let hy =0;
let lis1x =[];
let lis1y =[];
let lis2x =[];
let lis2y =[];
let numstrow =2;
let strocol ;
let ranlis1 = [[ 10,20,10,20 ],[ 10,10,10,10 ],[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,70]];
let ranlis2 = [[10,20,30,50],[10,20,20,60],[10,20,20,30],[10,20,20,100]];
let ran1,ran2,ran3,ran4,ran5,ran6,ran7,ran8,ran9,ran10,ran11;
let dm ;
let lisran1=[1,1,0,0,0,0,1,1,0];
let lisran2=[1,1,0,0,0,2,2,1,1,1,0,0,2,2,0 ];
let lisran3=[1,1,0,1,0,1,1,0,1,1,0,0,1,1,0 ];
let lisran4=[5,10,20];
let lisran5=[-1,1];
let lisran6=[10,20,50,70];
let lisran7=[12,13,12,11];
let lisran8=[-1,1];
let lisran9=[20,40,60,80];
let lisran10=[5,10,20,40,60];
let lisran11=[100,200,100,200,100,200,300,400,500,600,800,1000,1500];
let lisran12=[200,300,400,500,600,800,1000];
let lisran13=[10,10,20,30,40];
let lisran14=[2,3,4,3,4];
let lisran15=[0,1 ];
let num9 ;
let num1 =0;
let num2 =0;
let num3 =0;
let colorr1 ;
let num1p =0;
function setup() {
  
  dm = min(windowWidth,windowHeight);
  createCanvas(dm,dm);
  noiseSeed(fxrand()*500);
  scale(dm/1080);
  
  ran6 = lisran1[int(fxrand()*lisran1.length)];
  if(ran6 == 1){
  colorMode(RGB,120);
  }
  background(250);
  
  ran3 = int(fxrand()*3)+2;
  numb4 =0.8;
  num9 = 1/ran3;
  scale(num9);
  
  strokeWeight(1.5);
  ran1 = lisran2[int(fxrand()*lisran2.length)];
  ran2 = int(fxrand()*28)+1;
  ran4 =  (fxrand()*1.5)+0.5;
  ran5 = lisran3[int(fxrand()*lisran3.length)]; 
  ran7 = int(fxrand()*4) ;
  ran8 = int(fxrand()*3);
  ran9 =   (fxrand()*2)+0.2 ;
  ran10 =  (fxrand()*3)+3;
  ran11 = lisran4[int(fxrand()*lisran4.length)];
  
 
  
  
  
  
  if(ran5==1){

  for(let ay =1; ay <110 ;ay++){
    num1p =0;
  for(let ax =-2; ax < 70 ;ax++){
    
    wx = int((fxrand()*2)+3)*10;  
    hy = int((fxrand()*2)+3)*10;  
 
     num1  =  ranlis2[ran7][int(fxrand()*ranlis2[ran7].length)]*10;
 
     num2  =  ranlis1[ran8][int(fxrand()*ranlis1[ran8].length)]*10;
 
    
   
    num3  = int((fxrand()*25)+5)*5; 
 
    if(ax % 2 ==0 && ay % 1 ==0){
        colorr1 = color1( 255,ran2);
        push();
        translate(num1p,ay*40-num2);
        objj(0,0,num1,num2, num3,colorr1,color(0 ));
        pop();
      if(num2 <= 200 && 3 < int(fxrand()*10) && num1 <= 200 ){
        push();
        translate(num1p,ay*40-num2-50);
        objj3(0,0,num1,50, num3,colorr1,color(0 ));
        pop();
      }
    
    }
    
    if( ax % 2 == 0 && ay <140-1 && 2.5 < int(fxrand()*9)){
      noiseSeed(fxrand()*500);
      push();
      translate(num1p+(fxrand()*90)-10,ay*40);
      if(ran1==1){
      plants2(0,0,color(0),100,ran4);
      }else if(ran1==0){
      plants1(0,0,color(0),100,ran4/3);  
      }else{
      plants3(0,0,color(0),100,ran4);    
      }
      pop();
     lis1x =[];
     lis1y =[];
     lis2x =[];
     lis2y =[];
    }
    
    num1p += num1;
    
    
  }  
  }
  
  
  
  
  
} else{
    ran7 = int(fxrand()*3);
    let num2p=0;
    let num3p=0;
    let num4p=lisran5[int(fxrand()*lisran5.length)];
    let num5p=lisran6[int(fxrand()*lisran6.length)];
 for(let ay =0; ay <=140 ;ay+=1){
      num1p =0;
  for(let ax =0; ax <= 80 ;ax+=5){
    
    wx = int((fxrand()*2)+3)*10; 
    hy = int((fxrand()*2)+3)*10; 
    num1  = ranlis2[ran7][int(fxrand()*ranlis2[ran7].length)]*10;
    num2  = ranlis1[ran8][int(fxrand()*ranlis1[ran8].length)]*10; 
    num3  = int((fxrand()*25)+5)*5; 
    num2p=   (fxrand()*100)-50  ;
    num3p= (fxrand()*20)-10 ;
    if(ax % 1 ==0 && ay % 2 ==0 && 3 < sin((ay/10+(ax/num5p)*num4p)*6)*10 && num1 <= 200){
      colorr1 = color1( 255,ran2);
      
      objj(ax*50+num2p,ay*80-num2+num3p,num1,num2, num3,colorr1,color(0 ));
      if(num2 <= 200 && 3 < int(fxrand()*9) && num1 <= 200){
      objj3(ax*50+num2p,ay*80-num2-50+num3p,num1,50, num3,colorr1,color(0 ));
      }
      
    }
    
    if( ax % 1 == 0 && ay <60-1  ){
 
      noiseSeed(fxrand()*500);
      plants2(ax*50+(fxrand()*90)-10+num2p*4,ay*70+(fxrand()*20) ,color(0 ),100,0.5);
     lis1x =[];
     lis1y =[];
     lis2x =[];
     lis2y =[];
     }
  
  }  
  }
 
  }

 
  
  cadr(lisran7[int(fxrand()*lisran7.length)] ,237);
  
}




function cadr(s,f){ 
 
 fill(f); 
 
 scale(( ran3)/(dm/1080));
 noStroke();
 rect(0,0,width/s,height);
 rect(0,0,width,height/s);
 rect(width-width/s,0,width/s,height);
 rect( 0,height-height/s,width,height/s);
 
}

 
 
function draw() {
 
   
     
} 
 
 
 

function plant(x,y,s){
  let noiss = 0.01;
  push();
  stroke(s);
  strokeWeight(numstrow);
  noFill();
 
  this.x =x;
  this.y =y;
  this.num1 = lisran8[int(fxrand()*lisran8.length)] ; 
   beginShape();
  let longf = lisran9[int(fxrand()*lisran9.length)]/2;
  for(let a=0;a< longf  ;a+=1){
    if(a < longf-3){
    vertex(this.x,this.y);
    }
    let n = noise(this.x*noiss,this.y*noiss);
    let b = 5 * n;
    this.x += abs(cos(b))/ this.num1 ;
    this.y += abs(sin(a/30))*-1 ;
     
  } 
  endShape(); 
  
  fill(0);
  circle(this.x,this.y,8);
  pop();
}
function plant5(x,y,s,n1){
  let noiss = 0.01;
  push();
   stroke(s);
 
  noFill();
 
  this.x =x;
  this.y =y;
  this.num1 = lisran8[int(fxrand()*lisran8.length)] ; 
 
  let longf = lisran9[int(fxrand()*lisran9.length)]*2 ;
  for(let a=0;a< longf  ;a+=1){
    if(a < longf-3){
     strokeWeight((longf/17)-(a/17)+2);
     point(this.x,this.y);
    }
    let n = noise(this.x*noiss,this.y*noiss);
    let b = 5 * n;
    this.x += abs(cos(b))/ this.num1 ;
    this.y += abs(sin(a/30))*-1 ;
    if(a % n1  == 0 && a < int((longf/8)*7.5)){
     lis2x.push(this.x);
     lis2y.push(this.y);
    }  
  } 
  
 
  pop();
}
function plant2(x,y,s,n1,n2){
  
  let noiss = 0.01;
   push();
   stroke(s);
   strokeWeight(numstrow);
   noFill();
 
  this.x =x;
  this.y =y;
  this.num1 = lisran8[int(fxrand()*lisran8.length)] ;
   beginShape();
  let longf = lisran10[int(fxrand()*lisran10.length)]*n1;
  for(let a=0;a< longf  ;a+=1){

    vertex(this.x,this.y);
    let n = noise(this.x*noiss,this.y*noiss);
    let b = 5 * n;
    this.x += abs(cos(b))/ this.num1 ;
    this.y += abs(sin(a/30))*-1 ;
    
  } 
  endShape(); 
  leaves(this.x,this.y,n2+(fxrand()*4-2),n2*2+(fxrand()*8-4),3+this.num1,s); 
pop();
}



function plant3(x,y,s){
  let noiss = 0.003;
  push();
  stroke(s);
  strokeWeight(numstrow);
  noFill();
 
  this.x =x;
  this.y =y;
  this.num1 = lisran8[int(fxrand()*lisran8.length)] ;
  this.num2 = fxrand()*2+1 ;
    for(let j =2;j<100;j+=1){
      if(j % 10 == 0){
        let longf =  (fxrand()*40+40)*this.num2;
    this.x =x;
    this.y =y;
  beginShape();
  for(let a=0;a< longf  ;a+=1){

    vertex(this.x,this.y);
    let n = noise(this.x*noiss,this.y*noiss);
    let b = 30 * n;
    this.x += (abs(cos(b))/ this.num1)/ (j/ 5)     ;
    this.y += abs(sin(a/40))*-1 ;
     
  } 
  endShape();
      }

 }
 for(let j =2;j<100;j+=1){
   if(j % 10 == 0){
    let longf = (fxrand()*40+40)*this.num2;
    this.x =x;
    this.y =y;
    beginShape();
    for(let a=0;a< longf  ;a+=1){

      vertex(this.x,this.y);
      let n = noise(this.x*noiss,this.y*noiss);
      let b = 30 * n; 
      this.x += (abs(cos(b))/ this.num1*-1)/(j/5)  ;
      this.y += abs(sin(a/40))*-1 ;
     
    } 
    endShape();
   }
  }
 
 
 
    pop();
}
    
 
 function plant1(x,y,s,n1,n2){
 push();
 stroke(s);
 strokeWeight(numstrow);
 let noiss = 0.001;
 
  noFill();
   
  this.x =x;
  this.y =y;
  this.num1 = lisran8[int(fxrand()*lisran8.length)] ;
 
  beginShape();
  let longf = lisran11[int(fxrand()*lisran11.length)]*n2;
  for(let a=0;a<  longf  ;a+=1){

    vertex(this.x,this.y);
    let n = noise(this.x*noiss,this.y*noiss);
    let b = 5 * n;
    this.x += abs(b/ran11)/ this.num1/3  ;
    this.y += abs(sin(b))*-1  ;
    if(a % n1 == 0 && a < int((longf/8)*7.5)){
     lis1x.push(this.x);
     lis1y.push(this.y);
    }
  } 
  endShape(); 
  pop();
  push();
  translate(this.x,this.y);
  rotate(this.num1/2);
  if(2<int(fxrand()*8)){
    plant3(0,0,s);
  }
  pop();
}
 
 function plant4(x,y,s,n1,n2){
  push();
  stroke(s);
 
  let noiss = 0.001;
 
  noFill();
   
  this.x =x;
  this.y =y;
  this.num1 = lisran8[int(fxrand()*lisran8.length)] ;
 
   let longf = lisran12[int(fxrand()*lisran12.length)]*n2 ;
  for(let a=0;a<  longf  ;a+=1){
    strokeWeight((longf/35)-(a/35)+5);
    point(this.x,this.y);
    let n = noise(this.x*noiss,this.y*noiss);
    let b = 5 * n;
    this.x += abs(cos(b))/this.num1/3;
    this.y += abs(sin(b))*-1;
    if(a % n1 == 0 && a < int((longf/8)*7.5)){
    lis1x.push(this.x);
    lis1y.push(this.y);
    }
  } 
  if(2<int(fxrand()*8)){
    fill(s);
    treee(this.x,this.y );
  }
  
  pop();
 
} 
 
 
function plants1(x,y,s,n1,n2){
  plant4( x, y,s,n1,n2);
  for(let i =0;i<lis1x.length;i++){
    plant5(lis1x[i],lis1y[i],s,int(n1/2));
  }
 
  for(let i =0;i<lis2x.length;i++){
    plant2(lis2x[i],lis2y[i],s,ran9,ran10); 
  }
}


function plants2(x,y,s,n1,n2){
  plant1( x, y,s,n1,n2);
  for(let i =0;i<lis1x.length;i++){
    plant2(lis1x[i],lis1y[i],s,ran9,ran10);
  }
} 

function plants3(x,y,s,n1,n2){
  plant1( x, y,s,n1,n2);
  for(let i =0;i<lis1x.length;i++){
    plant(lis1x[i],lis1y[i],s,ran9,ran10);
  }
} 


  
 
 
 
 
function leavess(x,y){
  
  let xl1 =0;
  let yl1=0;
 
  xl1 =0;
  yl1=0;
  for(let a=0;a< PI  ;a+=0.3){
    xl1 -= sin(a)*30 ;
    yl1 -= cos(a)*30 ;
 
  }
  let xl =xl1/2;
  let yl =yl1/2;
  for(let a=0;a<TWO_PI ;a+=0.3){
    xl += sin(a)*30 ;
    yl += cos(a)*30 ;
    leaves(x+xl,y+yl,10,10,-a +1.4,0);
  }
  
  xl1 =0;
  yl1=0;
  for(let a=0;a< PI  ;a+=0.7){
    xl1 -= sin(a)*15 ;
    yl1 -= cos(a)*15 ;
 
  }
    xl =xl1/2;
    yl =yl1/2;
  for(let a=0;a<TWO_PI ;a+=0.7){
    xl += sin(a)*15 ;
    yl += cos(a)*15 ;
    leaves(x+xl,y+yl,10,10,-a +1.4,0);
  }
  
  
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
function treee(x,y ){
 let xc=x;
 let yc=y; 
 this.num2 =0;
 for(let h=0;h<4;h++){
 xc=x;
 yc=y;
 this.num1 =0;
 this.num4 =0;
 this.wh =lisran13[int(fxrand()*lisran13.length)];
 for(let i=0;i< PI;i+=0.2){
   this.num4 += sin(i)*this.wh ;
 
 }

 this.num3=lisran14[int(fxrand()*lisran14.length)];
 strokeWeight(2);
 beginShape();
 for(let i=0;i<TWO_PI;i+=0.2){
   xc += sin(i)*this.wh ;
   yc += cos(i)*this.wh/this.num3  ; 
 
   curveVertex(xc+noise(i)*100 -this.num1/2 +this.num2-this.num4,yc+noise(i)*100);
 }
 for(let i=0;i< PI;i+=0.2){
   this.num1 += sin(i)*10 ;
 } 
  this.num2 = this.num1* lisran8[int(fxrand()*lisran8.length)] ;
 endShape(CLOSE);
  
 }
}
 
 
 
 
 
 
 
 
 
 
 


function objj(x,y,w,h,z,f,s){
  this.z = z/2;
 
  push();
  translate(x ,y);
  push();
  noStroke();
  fill(f);
  beginShape(); 
  lineillu1( 0 , 5 , 0 , h- 5);
 
  lineillu1(  0+5 , h  ,  w  ,  h  ); 
  lineillu1( w +7,   h-3  ,  this.z + w ,   -this.z/1.7 +h  );
  lineillu1( this.z +w,   -this.z/1.7 +h-12 , this.z +w,   -this.z/1.7 +5 );  
  lineillu1( this.z +w-5,   -this.z/1.7 ,  this.z+2 ,   -this.z/1.7   ); 

  lineillu1( this.z-8 , -this.z/1.7+5 , 0 , 0 );

 
  endShape();
  pop();
  stroke(s);
  lineillu( 0 , 0 , 0 , h);
  
  lineillu( w ,  0 , w , h); 
 
  lineillu(  0 ,  0 ,  w  ,  0 );
  lineillu(  0 , h  ,  w  ,  h  ); 
  
  lineillu(  this.z ,   -this.z/1.7  ,  this.z +w,   -this.z/1.7); 
  lineillu( this.z +w,   -this.z/1.7 ,this.z +w,   -this.z/1.7 +h ); 
 
  lineillu( 0 ,   0 ,  this.z ,   -this.z/1.7 );
  lineillu( w ,   h  ,  this.z +w,   -this.z/1.7 +h);
  lineillu( w ,   0  ,  this.z +w,   -this.z/1.7  );
  
  
  let scax =  wx+wx/2;
  let scay =  hy+hy/3;
  let ran1 = lisran15[int(fxrand()*lisran15.length)];
  
  for(let by =scay; by < h-scay  ;by+=scay){
 
  for(let bx =scax; bx < w-scax  ;bx+=scax){
  push();
  translate(  fxrand()*4-2, fxrand()*4-2);
  objj1(bx ,by ,wx,hy,40,s,ran1);
  pop();
  }
  }
  pop(); 
}
 
function objj1(x,y,w,h,z,f,num1){
  this.z = z/2;
  if(num1 ==0){
  push();
  translate(x ,y);
  push();
 noStroke();
 fill(f);
 
  beginShape(); 
   

   lineillu1( w/2 , 0 , w/2 , h/2+1);
  
   lineillu1(  w/2+4 , h/2 +8 ,  w -4 ,  h/2 +8 ); 
 

   lineillu1( w , h/2 +4 , w ,  0); 
 
  
  endShape();
  pop();
  stroke(f);
  lineillu( 0 , 0 , 0 , h);
  
  lineillu( w ,  0 , w , h); 
 
  lineillu(  0 ,  0 ,  w  ,  0 );
  lineillu(  0 , h  ,  w  ,  h  ); 
  
 
  lineillu( 0 ,   0  +h,  w/1.2 ,    h/1.6 );   
   
  pop(); 
} else if(num1 ==1){
 
 
 
  push();
  translate(x ,y);
  fill(f);
  beginShape(); 
 
  lineillu1( 0 , h , 0 , 6 );
  lineillu1( 6 , 0 , w-6 , 0); 
  lineillu1( w , 6  ,  w  ,  h  ); 
 
  endShape();
  
  pop(); 
  
  }
}
  
 function objj2(x,y,w,h,z,f){
  this.z = z/2;
  push();
  translate(x ,y);
  push();
 noStroke();
 fill(f);
 
  pop();
 
 fill(f);
 beginShape(); 
 
     
    lineillu1( 0 , h , 0 , 6 );
   lineillu1( 6 , 0 , w-6 , 0); 
 lineillu1( w , 6  ,  w  ,  h  ); 
 

  
 
   
   endShape();
  
  pop(); 
}
 
 
 
function objj3(x,y,w,h,z,f,s){
  this.z = z/2;
 
  push();
  translate(x ,y);
  push();
  noStroke();
  fill(f);
  beginShape(); 
  lineillu1(w/2 , 5 , 0 , h- 5);
 
  lineillu1(  0+5 , h  ,  w  ,  h  ); 
  lineillu1( w +7,   h-3  ,  this.z + w ,   -this.z/1.7 +h  );
  lineillu1( this.z +w,   -this.z/1.7 +h-12 , this.z +w/2,   -this.z/1.7 +5 );  
 

 
  endShape();
  pop();
  stroke(s);
  lineillu( w/2 , 0 , 0 , h);
  
  lineillu( w/2 ,  0 , w , h); 
  
   
  lineillu(  0 , h  ,  w  ,  h  ); 
  
   
  for(let k=0;k<= this.z;k+=8){
  lineillu( k +w/2,   -k/1.7 ,k +w,   -k/1.7 +h ); 
  }
 
  lineillu( w ,   h  ,  this.z +w,   -this.z/1.7 +h);
  lineillu( w/2 ,   0  ,  this.z +w/2,   -this.z/1.7  );
  
  
  
  
 
  pop(); 
  
  
} 
 
 
 
 
 
 
 
 
 
 
 
 
function color1(c1,ran){
  let sewitchcol ;
  this.ran = ran ;
  this.c  =0;
 
    scol = int(fxrand()*5+1);
    if( this.ran == 1  ){
           if(  scol == 1){
         
         return color(57,61,70,c1);
      }else if(scol == 2){
       
         return color(214,96,58,c1);
      }else if(scol == 3){
        
         return color(114,104,103,c1);
      }else if(scol == 4){
        
         return color(53,49,48,c1);
      }else if(scol == 5){
        
         return color(226,222,211,c1);
      }
      
      
    }else if(this.ran == 2){
      if(  scol == 1){
         
         return color(245,235,182,c1);
      }else if(scol == 2){
       
         return color(192,222,152,c1);
      }else if(scol == 3){
        
         return color(58,120,99,c1);
      }else if(scol == 4){
        
         return color(51,46,76,c1);
      }else if(scol == 5){
        
         return color(223,61,50,c1);
      }
    }else if(this.ran ==3){
      if(  scol == 1){
         
         return color(210,218,220,c1);
      }else if(scol == 2){
       
         return color(198,193,189,c1);
      }else if(scol == 3){
        
         return color(107,102,99,c1);
      }else if(scol == 4){
        
         return color(232,205,167,c1);
      }else if(scol == 5){
        
         return color(232,205,167,c1);
      }
      
    }else if(this.ran ==4){
      if(  scol == 1){
         
         return color(51,61,255,c1);
      }else if(scol == 2){
       
         return color(255,230,51,c1);
      }else if(scol == 3){
        
         return color(255,11,11,c1);
      }else if(scol == 4){
        
         return color(255,255,255,c1);
      }else if(scol == 5){
        
         return color(150,150,150,c1);
      }
      
    }else if(this.ran ==5){
      if(  scol == 1){
         
         return color(235,151,213,c1);
      }else if(scol == 2){
       
         return color(80,177,232,c1);
      }else if(scol == 3){
        
         return color(204,239,173,c1);
      }else if(scol == 4){
        
         return color(211,219,212,c1);
      }else if(scol == 5){
        
         return color(0,32,40,c1);
      }
      
    }else if(this.ran ==6){
      if(  scol == 1){
         
         return color(254,193,6,c1);
      }else if(scol == 2){
       
         return color(255,108,2,c1);
      }else if(scol == 3){
        
         return color(224,7,2,c1);
      }else if(scol == 4){
        
         return color(171,0,104,c1);
      }else if(scol == 5){
        
         return color(88,2,1,c1);
      }
      
    }else if(this.ran ==7){
      if(  scol == 1){
         
         return color(217,121,1,c1);
      }else if(scol == 2){
       
         return color(249,170,0,c1);
      }else if(scol == 3){
        
         return color(168,163,165,c1);
      }else if(scol == 4){
        
         return color(231,230,232,c1);
      }else if(scol == 5){
        
         return color(119,133,99,c1);
      }
      
    }else if(this.ran ==8){
      if(  scol == 1){
         
         return color(246,239,217,c1);
      }else if(scol == 2){
       
         return color(195,172,122,c1);
      }else if(scol == 3){
        
         return color(58,176,150,c1);
      }else if(scol == 4){
        
         return color(11,137,82,c1);
      }else if(scol == 5){
        
         return color(66,191,187,c1);
      }
      
    }else if(this.ran ==9){
      if(  scol == 1){
         
         return color(230,2,55,c1);
      }else if(scol == 2){
       
         return color(255,113,157,c1);
      }else if(scol == 3){
        
         return color(195,212,228,c1);
      }else if(scol == 4){
        
         return color(37,181,208,c1);
      }else if(scol == 5){
        
         return color(0,165,201,c1);
      }
      
    }else if(this.ran == 10){
      if(  scol == 1){
         
         return color(218,204,193,c1);
      }else if(scol == 2){
       
         return color(201,163,92,c1);
      }else if(scol == 3){
        
         return color(125,51,66,c1);
      }else if(scol == 4){
        
         return color(94,64,90,c1);
      }else if(scol == 5){
        
         return color(169,194,172,c1);
      }
      
    }else if(this.ran == 11){
      if(  scol == 1){
         
         return color(215,161,0,c1);
      }else if(scol == 2){
       
         return color(226,179,197,c1);
      }else if(scol == 3){
        
         return color(198,181,171,c1);
      }else if(scol == 4){
        
         return color(109,109,109,c1);
      }else if(scol == 5){
        
         return color(227,67,101,c1);
      }
      
    }else if(this.ran == 12){
      if(  scol == 1){
         
         return color(255,124,85,c1);
      }else if(scol == 2){
       
         return color(241,83,72,c1);
      }else if(scol == 3){
        
         return color(214,194,185,c1);
      }else if(scol == 4){
        
         return color(255,244,174,c1);
      }else if(scol == 5){
        
         return color(219,219,219,c1);
      }
      
    }else if(this.ran == 13){
      if(  scol == 1){
         
         return color(217,217,217,c1);
      }else if(scol == 2){
       
         return color(236,230,180,c1);
      }else if(scol == 3){
        
         return color(229,231,124,c1);
      }else if(scol == 4){
        
         return color(173,186,81,c1);
      }else if(scol == 5){
        
         return color(173,166,156,c1);
      }
      
    }else if(this.ran == 14){
      if(  scol == 1){
         
         return color(122,180,168,c1);
      }else if(scol == 2){
       
         return color(42,116,127,c1);
      }else if(scol == 3){
        
         return color(120,156,69,c1);
      }else if(scol == 4){
        
         return color(218,219,99,c1);
      }else if(scol == 5){
        
         return color(99,221,159,c1);
      }
      
    }else if(this.ran == 15){
      if(  scol == 1){
         
         return color(9,175,165,c1);
      }else if(scol == 2){
       
         return color(199,231,190,c1);
      }else if(scol == 3){
        
         return color(212,182,148,c1);
      }else if(scol == 4){
        
         return color(255,111,66,c1);
      }else if(scol == 5){
        
         return color(138,105,122,c1);
      }
      
    }else if(this.ran == 16){
      if(  scol == 1){
         
         return color(223,163,103,c1);
      }else if(scol == 2){
       
         return color(214,101,45,c1);
      }else if(scol == 3){
        
         return color(194,64,38,c1);
      }else if(scol == 4){
        
         return color(62,53,56,c1);
      }else if(scol == 5){
        
         return color(158,170,196,c1);
      }
      
    }else if(this.ran == 17){
      if(  scol == 1){
         
         return color(194,136,98,c1);
      }else if(scol == 2){
       
         return color(155,150,118,c1);
      }else if(scol == 3){
        
         return color(200,187,168,c1);
      }else if(scol == 4){
        
         return color(53,35,31,c1);
      }else if(scol == 5){
        
         return color(152,118,81,c1);
      }
      
    }else if(this.ran == 18){
      if(  scol == 1){
         
         return color(250,243,215,c1);
      }else if(scol == 2){
       
         return color(235,215,208,c1);
      }else if(scol == 3){
        
         return color(242,198,197,c1);
      }else if(scol == 4){
        
         return color(194,191,160,c1);
      }else if(scol == 5){
        
         return color(100,133,80,c1);
      }
      
    }else if(this.ran == 19){
      if(  scol == 1){
         
         return color(32, c1);
      }else if(scol == 2){
       
         return color(79, c1);
      }else if(scol == 3){
        
         return color(151, c1);
      }else if(scol == 4){
        
         return color(192, c1);
      }else if(scol == 5){
        
         return color(232, c1);
      }
      
    }else if(this.ran == 20){
      if(  scol == 1){
         
         return color(241,173,12,c1);
      }else if(scol == 2){
       
         return color(224,47,3,c1);
      }else if(scol == 3){
        
         return color(9,58,29,c1);
      }else if(scol == 4){
        
         return color(41,178,230,c1);
      }else if(scol == 5){
        
         return color(14,52,117,c1);
      }
      
    }else if(this.ran == 21){
      if(  scol == 1){
         
         return color(75,58,147,c1);
      }else if(scol == 2){
       
         return color(241,123,176,c1);
      }else if(scol == 3){
        
         return color(249,85,58,c1);
      }else if(scol == 4){
        
         return color(170,174,179,c1);
      }else if(scol == 5){
        
         return color(233,231,231,c1);
      }
      
    }else if(this.ran == 22){
      if(  scol == 1){
         
         return color(206,254,58,c1);
      }else if(scol == 2){
       
         return color(1,79,205,c1);
      }else if(scol == 3){
        
         return color(249,0,110,c1);
      }else if(scol == 4){
        
         return color(97,77,226,c1);
      }else if(scol == 5){
        
         return color(57,234,44,c1);
      }
      
    }else if(this.ran == 23){
      if(  scol == 1){
         
         return color(4,168,70,c1);
      }else if(scol == 2){
       
         return color(250,241,234,c1);
      }else if(scol == 3){
        
         return color(42,91,216,c1);
      }else if(scol == 4){
        
         return color(177,191,224,c1);
      }else if(scol == 5){
        
         return color(232,216,206,c1);
      }
      
    }else if(this.ran == 24){
      if(  scol == 1){
         
         return color(32,65,18,c1);
      }else if(scol == 2){
       
         return color(79,131,46,c1);
      }else if(scol == 3){
        
         return color(151,189,102,c1);
      }else if(scol == 4){
        
         return color(192,214,141,c1);
      }else if(scol == 5){
        
         return color(232,242,192,c1);
      }
      
    }else if(this.ran == 25){
      if(  scol == 1){
         
         return color(236,236,236,c1);
      }else if(scol == 2){
       
         return color(144,144,144,c1);
      }else if(scol == 3){
        
         return color(49,49,49,c1);
      }else if(scol == 4){
        
         return color(242,102,34,c1);
      }else if(scol == 5){
        
         return color(239,61,35,c1);
      }
    }else if(this.ran == 26){
      if(  scol == 1){
         
         return color(224,221,214,c1);
      }else if(scol == 2){
       
         return color(104+20,168+20,68+20,c1);
      }else if(scol == 3){
        
         return color(83+20,17+20,43+20,c1);
      }else if(scol == 4){
        
         return color(163+20,33+20,108+20,c1);
      }else if(scol == 5){
        
         return color(0+20,115+20,59+20,c1);
      }
    }else if(this.ran == 27){
      if(  scol == 1){
         
         return color(230,232,229,c1);
      }else if(scol == 2){
       
         return color(141,187,224,c1);
      }else if(scol == 3){
        
         return color(52,142,232,c1);
      }else if(scol == 4){
        
         return color(19,69,142,c1);
      }else if(scol == 5){
        
         return color(0,87,165,c1);
      }
    }else if(this.ran == 28){
      if(  scol == 1){
         
         return color(232,59,52,c1);
      }else if(scol == 2){
       
         return color(209,57,43,c1);
      }else if(scol == 3){
        
         return color(242,212,178,c1);
      }else if(scol == 4){
        
         return color(255,236,205,c1);
      }else if(scol == 5){
        
         return color(255,242,220,c1);
      }
    } 
   
  
} 








function lineillu(x,y,x2,y2){
  
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  
  let num2 = abs( x2 - x ) ;
  let num3 = abs( y2 - y ) ; 
  let num4 = 0 ;
  let num5 = 0 ;
  let fornum = 0 ;
  if(num2>num3){
    fornum =num2;
    if(y2 - y >0){
      num5 = num3/num2;
    }else {
      num5 = (num3/num2 )*-1;
    }
    if(x2 - x >0){
      num4 = 1;
    }else if (x2 - x == 0){
      num4 = 0;
    }else if (x2 - x < 0){
      num4 = -1;
    }
  }else{
    fornum =num3;
    if(x2 - x >0){
      num4 = num2/num3;
    }else {
      num4 = (num2/num3 )*-1;
    }
    if(y2 - y >0){
      num5 = 1;
    }else if (y2 - y == 0){
      num5 = 0;
    }else if (y2 - y < 0){
      num5 = -1;
    }
  }  
   
  if(num4 == Infinity){
    num4 =0;
  }
 
  if(num5 == 0 && y2 - y >0){
    num5 =  1;
  }else if(num5 == 0 && y2 - y <0){
    num5 = -1;
  }else if(num5 == -Infinity  ){
    num5 = -1;
  }else if(  num5 ==  Infinity){
    num5 =  1;
  }
  
  
  push();
  noFill();
    beginShape(); 
  for(let a=-6; a <=   abs(fornum) +8  ;a+=6){
    curveVertex(this.x+num4*a +(fxrand()*(numb4*2)-numb4)+noise(a/40)*5,this.y+ num5*a+(fxrand()*(numb4*2)-numb4)+noise(a/40)*5 ); 
  }
   endShape();
  pop();
 
 
}

 function lineillu1(x,y,x2,y2){
  
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  
  let num2 = abs( x2 - x ) ;
  let num3 = abs( y2 - y ) ; 
  let num4 = 0 ;
  let num5 = 0 ;
  let fornum = 0 ;
  if(num2>num3){
    fornum =num2;
    if(y2 - y >0){
      num5 = num3/num2;
    }else {
      num5 = (num3/num2 )*-1;
    }
    if(x2 - x >0){
      num4 = 1;
    }else if (x2 - x == 0){
      num4 = 0;
    }else if (x2 - x < 0){
      num4 = -1;
    }
  }else{
    fornum =num3;
    if(x2 - x >0){
      num4 = num2/num3;
    }else {
      num4 = (num2/num3 )*-1;
    }
    if(y2 - y >0){
      num5 = 1;
    }else if (y2 - y == 0){
      num5 = 0;
    }else if (y2 - y < 0){
      num5 = -1;
    }
  }  
   
  if(num4 == Infinity){
    num4 =0;
  }
 
  if(num5 == 0 && y2 - y >0){
    num5 =  1;
  }else if(num5 == 0 && y2 - y <0){
    num5 = -1;
  }else if(num5 == -Infinity  ){
    num5 = -1;
  }else if(  num5 ==  Infinity){
    num5 =  1;
  }
  
  
 
  for(let a=-6; a <=   abs(fornum) +8  ;a+=6){
    curveVertex(this.x+num4*a +(fxrand()*(numb4*2)-numb4),this.y+ num5*a+(fxrand()*(numb4*2)-numb4) ); 
  }
 
 
}
 

function leaves(x,y,w,h,r,s){
  
  let num1 = 0.5;
  let start  ;
  let stop  ;
  push();
  fill(s);
  stroke(s);
  translate(x,y);
  rotate(r);
  beginShape();
  for(let i=0;i< PI;i+=0.3){
   curveVertex(0+ (sin(i))*w+(fxrand()*(num1*2)-num1),0+ (i)*h+(fxrand()*(num1*2)-num1)); 
    
  }
  for(let i=PI;i>0 ;i-=0.3){
   curveVertex(0- (sin(i))*w+(fxrand()*(num1*2)-num1),0+ (i)*h+(fxrand()*(num1*2)-num1)); 
 
  }
  endShape(CLOSE);
  pop();
 
 
 
  
 
 
} 





 



 


console.log(fxrand());

let noiseScale=0.02;
let roots=[];
let outer =[];
let shadows =[];
let dice ;
let size;
let colors =["#404B049E","#02332EA5","#00352B9E","#01472082"];
let ring_colors =["#A1D093","#7E55C7","#962811","#0E7DA1"];
let frame_colors =["#699269","#344539","#FFFED9","#022873"];
let sky_colors =["#022C30A0","#444D4EBA","#263D3FC1","#2A3132C1"];
let sky_colors2 =["#2F310B96","#623A07A3","#022873"];
let leaf_color =["#c864c8","#2b2bed","#F7F073","#EBF7DF"];
let root_color =["#C8C864","#A67255","#5F6438C1","#C5DB1D"];
let shadow_color= ["#000000C1","#344539C1","#453445C1","#423e30C1"];
let cnv,cnv2,cnv3,cnv4;
let cnv_mask,cnv2_mask,cnv3_mask,cnv4_mask;
let pos;


function setup() {
  createCanvas(400, 600);
  cnv  = createGraphics(800,600);
  cnv2 = createGraphics(800,600);
  cnv3 = createGraphics(800,600);
  cnv4 = createGraphics(800,600);
  
  blendMode(BLEND);
  noiseSeed(fxrand()*123456);
  randomSeed(fxrand()*123456);
    
  background(random(frame_colors));
  root_color= random(root_color);
  leaf_color= random(leaf_color);
  colors = random(colors);
  ring_colors = random(ring_colors);
  shadow_color=random(shadow_color);
    frame_colors = random(frame_colors);
    
  pos = random(10);
    
   let  a = random(0.99,0.999);
  let  w = 600;
  let  h = 600; 
  let  amount = random(200,350);
    
    
    
   dice = int((random(-10,0)));
  if(dice<-5){
    
    console.log("Ring","pixelsky", dice);
    pixelsky();
      if(dice == -9){
          
          
          blendMode(LIGHTEST);
      }
  }
  else {

     console.log("noRing","normalsky", dice);
     normalsky();
      
      
  }
  
 
  
  for(let i=0;i<5;i++){
      size = float(random(10,16));
      roots[i]= new root(random(width/2,(width/3)*2),height,-90,size,dice);
    
  
       }
  
 
  //let  a = random(1.001,1.005);
 
   for(let i=0;i<1;i++){
      outer[i]= new back(width/2,height/2,w,h,a, amount,210);
     shadows[i]= new shadow(width/2,height/2,amount,amount,a);
    }
  
 
  
  }
  
 



function draw() {
    
    for(let i=0;i<outer.length;i++){
     outer[i].show();  
      shadows[i].show();
       if(outer[i].w < 200){
     
         outer.splice(i,1);
     
      }
    
    }
   
  cnv2_mask=cnv2.get();
  cnv2_mask.mask(cnv);
  
 
  cnv3_mask=cnv3.get();
  cnv3_mask.mask(cnv);
  
  cnv4_mask=cnv4.get();
  cnv4_mask.mask(cnv2_mask);
  
  
  
   for(let i=0;i<roots.length;i++){
    
     roots[i].show();  
      
     if(roots[i].r < 1){
     
     roots.splice(i,1);
     
      }
    }
  
   // image(cnv3,0,0);//shadow
  
  
  if(dice<-5){
    
    image(cnv2,0,0); //backing
      
    
  }else if(dice>-5){
      
      image(cnv2_mask,0,0); 
      
  }
  
       
    image(cnv3_mask,0,0);//shadow
     image(cnv4_mask,0,0); //rare tree
  
  
  if(dice != -8){
      
        push();
  scale(0.5);
     image(cnv,pos,height); //front tree
  
  pop();
      
  }

 
  
  


}






function normalsky(){
   let col1=color(random(sky_colors));
   let col2=color(220,10);
  
  for(let x=20; x<=width-20; x++){
		for(let y=20; y<=height-20; y++){
		//	let col1=color(128,128,255);
		//	let col2=color(255,255,55);
			let fraction=noise(x/50,y/50)*sin(90);
			let col=lerpColor(col1,col2,fraction);
			stroke(col,50);
            fill(col,50);
			circle(x,y,random(1));
          //rect(x,y,random(10));
		
	}
  } 
}

function pixelsky(){
          
			let col1=color(random(sky_colors2));
           let col2=color(220,10);
  
  for(let x=noise(100)*20; x<=width-noise(100)*20; x+=1){
		for(let y=noise(100)*20; y<=height-noise(100)*20; y++){
			
            let fraction=sin(x)*cos(y)*noise(x/50,y/50);
			let col=lerpColor(col1,col2,fraction);
			stroke(col,50);
        
			rect(x,y,random(5));
		
	}
  } 
}

class root{
  constructor(_x,_y,_a,_r,_wind){
    this.x= _x;
    this.y= _y;
    this.a= _a;
    this.r= _r;
    this.maxR = _r;
    this.wind = _wind;
   
  }
    show(){
    

     if(dice<-8){
           cnv.fill(lerpColor(color(root_color),color(leaf_color),noise(this.r),100)); //root_color
     }else{
       
          cnv.fill(root_color);  //root_color
     }
        
      cnv.stroke(leaf_color); // leaf_color
      cnv.strokeWeight(0.2);
      
      
      cnv4.fill(0);  //root_color
      cnv4.stroke(100); // leaf_color
      cnv4.strokeWeight(0.2);
   
  //a = random(0.9,1.1);
  this.y = this.y+this.r*sin(radians(this.a))*0.5;
  this.x = this.x+this.r*cos(radians(this.a))*0.5;
  this.r = this.r*random(0.96,0.99);
  this.a = this.a + random(-10,10);
      
    cnv.push();
      
       cnv.fill(color(colors));
       cnv.stroke(leaf_color); // leaf_color
       cnv.strokeWeight(0.2);
       cnv.circle(this.x,this.y,this.r);
      
       cnv4.fill(200);
       cnv4.stroke(leaf_color); // leaf_color
       cnv4.strokeWeight(0.2);
       cnv4.circle(this.x,this.y,this.r);
      
      
    cnv.pop();
      
       cnv.rect(this.x,this.y,this.r,this.r);
       cnv4.rect(this.x,this.y,this.r,this.r);
        //cnv.ellipse(this.x,this.y,100,100);
      
       if(random(100)>96){
       // this.r = this.maxR;
       roots.push(new root(this.x,this.y,this.a + random(-30,30),this.r*1.2));
      }
  }
  
  
}



class back{
  constructor(_x,_y,_w,_h,_a,_amount,_color_ramp){
    this.x= _x;
    this.y= _y;
    this.w= _w;
    this.h= _h;
    this.a= _a;
    this.amount = _amount;
    this.color_ramp=_color_ramp;
  }
    show(){
    
      
  //this.y = this.y+this.r*sin(radians(this.a))*0.5;
  //this.x = this.x+this.r*cos(radians(this.a))*0.5;
      
      let noiseVal = noise(this.w*50, this.w*noiseScale);
      let y = sin(this.w)*150*noiseVal+this.w;
      let from = color(ring_colors);
      let to = color(80,100);
      let fraction=0.01;
      let d = map (this.w,600,this.amount,0.01,0.6);
      
 if(dice < -5  ){ //draw ring
   
   if(this.w > this.amount){
     this.w = this.w*this.a;
     this.h = this.h*this.a;   

       cnv2.push(); 
      
       cnv2.noFill();
       cnv2.strokeWeight(0.03 * d);
       cnv2.stroke(lerpColor(from,to,d/2),10);
       cnv2.ellipse(this.x,this.y,this.w,this.h);
      
            
      cnv2.strokeWeight(3*d);
      cnv2.erase();
      cnv2.line(this.x,this.y,random(width),random(height));
      cnv2.noErase();
     
       cnv2.pop();
      
      }
 }
        
        
      
    }

      
   
      
    //get paint  
      
      
   //  if(mouseIsPressed==true) {
   //    for(let i =0 ; i<height; i++){
   //       cnv2.noFill();
   //  cnv2.strokeWeight(0.04);
   //  cnv2.stroke(lerpColor(from,to,fraction),20);
     // cnv2.line(0,mouseY,width,mouseY);
   //  cnv2.circle(mouseX+noise(i)*sin(i),noise(100)+i,1);
         
   //    }
    
  //   } 
      
     
 
      
      
     
   
    
     
 
  
  
}





class shadow{
  constructor(_x,_y,_w,_h,_a){
    this.x= _x;
    this.y= _y;
    this.w= _w;
    this.h= _h;
    this.a= _a;
   
  }
    show(){
       
  
    let noiseVal = noise(this.w*50, this.w*noiseScale);
    let y = sin(this.w)*150*noiseVal+this.w;
     
  
      let fraction=noise(this.w)*sin(90);
         let d = map (this.w,600,this.amount,0.01,0.6);
        
  if(dice < -5  ){

      this.w = this.w*this.a;
      this.h = this.h*this.a;
    let from = color(shadow_color);
      let to = color(frame_colors);
      
      
       cnv3.push();  
       cnv3.noFill();
       
      
       cnv3.strokeWeight(0.05);
       cnv3.stroke(lerpColor(from,to,fraction),10);
       cnv3.ellipse(this.x,this.y,this.w,this.h);
       
       cnv3.pop();
     
      
  }else{
      
       this.w = this.w*this.a;
       this.h = this.h*this.a;
   let from2 = color(leaf_color);
      let to2 = color(frame_colors);
      
      
       cnv3.push();  
       cnv3.noFill();
       
    
       cnv3.strokeWeight(0.2);
       cnv3.stroke(lerpColor(from2,to2,fraction),20);
       cnv3.ellipse(this.x,this.y,this.w,this.h);
      // cnv3.circle(this.amount,this.amount,this.w);
      
       cnv3.pop();
      
      
  }
    
     
      
     
  }
}



console.log(fxrand());
let noiseScale = fxrand() <= 0.5? 0.012 :0.02;
let rivers = [];
let leafs=[];
let cnv_river,cnv_leaf;
let cnv_river_mask;
//let colors =["#141609","#02332E","#002B22","#D97E96","#A1A1A6"];


let iscot,spacing,rain, dropX,dropY, angle, root_height,horizon, h,leaf_angle,bold,space_h, style,theta,rug,offset,twist;
let root_fraction, root_gray,g, san_color, light;

const isRain = fxrand() <= 0.4 ;
const special = fxrand() <= 0.5 ;
 let spaceState = true;
let sizeX;
function setup() {
  randomSeed(fxrand()*820606);
  noiseSeed(fxrand()*820606);
      bold = random(3,60);
  
 const size = min(windowWidth, windowHeight);
sizeX = fxrand()< 0.3 ? size*1.77: size-bold*0.77

 pixelDensity(2);
iscot =  random(100)< 50 ? 0 : random(-3,1);
 spacing = fxrand()< 0.5 ? 20 : 40;
 style = fxrand()< 0.5 ? 0.3 : 0.7;
 
  
  root_height = isRain? random(18,23) : random(15,20);
  horizon = fxrand()< 0.7 ? int(random(size*0.48,size*0.51)) : int(random(size*0.45,size*0.49));
  
  

  ellipseMode(RADIUS);
 san_color = fxrand()< 0.7 ? 10 : 190; 
 light = random(160,190);
  twist = random(10,20);
console.log(special);
 //blendMode(ADD);
  createCanvas(sizeX,size);
  background(random(6,15));
  //background(sky_colors);
  cnv_leaf = createGraphics(sizeX,size);
    root_fraction = 0.01;
  root_gray = random(200,222);
  
  theta = random(180,360);
 bold = random(3,120);
  space_h = random(60,100);
  g = random(100,200);
  rug = random(125,165);

  
  if(random(100)>50){
     pixelsky();
    
  }else{
    
     normalsky();

  }

   for(let i = 0; i < random(1,3); i++){
  	rivers[i] = new river(bold+random(i),random(0,space_h),0+i*36,60);
   
  }
  
}

function draw() {
  
   
  space();
  
  for(let i=0;i<rivers.length;i++){
     rivers[i].show(); 
    
     
      if(rivers[i].a > 360){
             rivers.splice(i,1);
            
      }
   }
  
  for(let i =1;i < leafs.length ; i++){
      if(leafs[i].r > 1){
      leafs[i].show();
      }else 
        {
           leafs.splice(i,1);
          
        }
    }
     image(cnv_leaf,0,0);
 
}

function normalsky(){
  let px,py,px_offset,py_offset;
   let col1=color(random(15,100),120);
   let col2=color(random(2,20),10);
  let a = random(100)>30 ? 1: random(2);
      let b = random(10)>6 ? 1: random(3);
  let r = 3;
  for(let x=0; x<=sizeX; x+=a){
		for(let y=0; y<=height; y+=randomGaussian(b,spacing)){
		 theta += 1;
			let fraction=noise(x/50,y/50)*fxrand()*cos(y)*random(1);
			let col=lerpColor(col1,col2,fraction);
          let noiseVal = noise((random(-10,10),x)*noiseScale, y*noiseScale);
    px = r*noiseVal*sin(theta)+x;
    py = r*noiseVal*cos(theta)+y; 
    px_offset = px+fraction*width;
    py_offset = py+fraction*height;
          
	stroke(col,50);
    strokeWeight(fraction/10);
    //fill(col,50);
	noFill();
  // rect(x,y,random(10,30),sqrt(x),random(20));     
  // ellipse(px_offset,py_offset,random(10));
            //line(px,py,x,y);
         
        beginShape();
        curveVertex(width/2+x, y);
       
        curveVertex(px,py);
       curveVertex(px_offset+random(-50,50),py_offset+random(-50,50));
         
          curveVertex(-px,-py);
          curveVertex(x,y);
        endShape(CLOSE);
         
          
		 
	}
  } 
}

function pixelsky(){
          
     let col1=color(random(90,128),10) ;
     let col2=color(20,10);
      let a = random(100)>30 ? 2: random(5);
      let b = random(10)>5 ? 2: random(5);
    let px,py,px_offset,py_offset;
  
  let r = 0.8;
  for(let x=bold; x<=width-bold; x+=a){
		for(let y=0; y<=space_h; y+=b){
		
			let fraction=noise(fxrand()/x,fxrand()/y)+tan(sqrt(y)*sqrt(x));
          
          
           let fraction_map = map(fraction,-10,10,0,0.66); 
          theta = theta*r;
          px = x*tan(theta)+random(x);
          py = y*sin(theta)+random(y);
          px_offset = px*fraction_map;
          py_offset = py*fraction_map;
         
          
			let col=lerpColor(col1,col2,fraction);
          push();
          
			fill(col,5);
            noStroke();
          //ellipse(px,py,random(20),random(20));
           beginShape();
           curveVertex(x, y);
           curveVertex(px, py);
           curveVertex(px+px_offset, py);
           curveVertex(px,py+py_offset);
           curveVertex(px-px_offset, py);
           curveVertex(px,py-py_offset);
        curveVertex(x, y);
          
          endShape(CLOSE);
			
         //rect(x,y,10,10);
		//  line(width/2,height/2,x,y);
          pop();
        
          
	}
  } 
}

function space(){
  
  if(spaceState != false){
    for (let x=bold; x < width-bold; x+=0.5) {
      
       let san_fraction;
  
      san_fraction =special?  noise(fxrand()/x)*sin(sqrt(x)) :  noise(fxrand()/x)*tan(sqrt(x)/twist);
      
         let noiseVal = noise((random(-10,10),x)*noiseScale, frameCount*noiseScale+san_fraction);
     
     let py ;
     let py2 = -frameCount+noiseVal*60;
      // let fraction=noise(py/50,py2/50);
     
       //let d = map (frameCount,0,1000,0.01,0.6);
      
        
           py = frameCount+noiseVal*rug;   
      
   push();//mountain
   stroke(noiseVal*san_color,random(45));
   strokeWeight(style);
   line(x, space_h+py, x+iscot, space_h+random(2,6)+py);
   
   pop();
      
   push();//horizon
   stroke(noiseVal*10,random(30));
   strokeWeight(0.5);
   line(x+random(-10,10), height-100+py2, x+random(-10,10), height-100+fxrand()*50+py2);
   line(x+random(-bold,bold), height-random(60,80)+py2, x+random(-bold,bold), height-random(60,80)+5+py2);
   pop();
     
    
   push(); //line_reflection_lake
   stroke(25,100,100,5);
   strokeWeight(0.3);
   //line(x, space_h+0+py, x, height+py2);
      
      stroke(abs(san_fraction)+noiseVal*light,random(30));
      strokeWeight(sqrt(x)/10);
      line(x, space_h+0+py, x, height+horizon*random(0.1,0.3)+py2);
  
   pop();
      
       if(py>= horizon){
        spaceState = false;
         fxpreview();
         console.log("capture");
          } 
     
      
        }  
 
  }
      
    
}

class river{
  constructor(_x,_y,_a,_r,_dir){
    this.x= _x;
    this.y= _y;
    this.a= _a;
    this.r= _r;
    this.dir = _dir;
   
  }
    show(){
      if(iscot == 0.5 && isRain == false){
        
   
   
     this.x = this.x+this.r*sin(radians(this.a)*0.8); 
     this.y = this.y+this.r*sin(radians(this.a)*2);
     
       
  this.r = this.r*0.99;
  this.a = this.a + random(-180,180);
      
        
            leafs.push(new leaf(this.x,this.y,random(-50,50),1.3));
        
        
        
      }
 
       
  }
}


class leaf{
  constructor(_x,_y,_a,_r,_wind){
    this.x= _x;
    this.y= _y;
    this.a= _a;
    this.r= _r;
    this.maxR = _r;
    this.wind = _wind;
   
  }
    show(){
      let cloud_W = isRain ? 0.5:1;
      let from = color(32,100);
      let to = color(16,100);
      
   
  
  this.x = this.x+this.r*sin(radians(this.a))*0.8;
  this.y = this.y+this.r*cos(radians(this.a))*0.5;
  this.r = this.r*random(0.8,0.999);
  this.a = this.a+random(-30,30) ;
      
      
   let d = map (this.y,0,1000,0.01,0.6);
      let fraction=noise(fxrand()/this.x,fxrand()/this.y)*sin(90);
      
       for(let i=0;i<10;i++){
        
      cnv_leaf.push();     
      cnv_leaf.noFill();
      cnv_leaf.stroke(lerpColor(from,to,fraction));
      cnv_leaf.strokeWeight(0.5*d);
       cnv_leaf.ellipse(this.x+random(i/2),this.y+random(-i/2,i/2),this.r*random(2),this.r*random(2));
      
   cnv_leaf.pop();
         if(fraction>0.2){
          fraction = fraction*0.05 ;
          }
      }
  }
}





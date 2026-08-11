//J.Still
//Sun


var1=fxrand()*20-11;
var2=fxrand()*20-11;
var3=fxrand()*20-11;
var4=fxrand()*20-11;


let solar = [];
let script;
let num
let getcolor
let dim;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  if (fxrand()>.75){blendMode(OVERLAY);}
  else {
  blendMode(OVERLAY);}
  

stroke(200*fxrand(),200*fxrand(), fxrand()*108)
  strokeWeight(10)
  fill(200*fxrand(),200*fxrand(), fxrand()*108)
  background("grey")
 noLoop();
}

function draw() {

  for (let i=0;i<100000000*fxrand();i++){
    a = 200*sin(2*fxrand()*fxrand())+fxrand()*2
    r = 100+fxrand()*200*sin(1800*fxrand())
    
    v = p5.Vector.fromAngle(a).setMag(r)
    
    x = width/2+v.x
    y = height/2+v.y
    
    x = int(x/5)*5
    y  = int(y/5)*5
    
    rect(x,y,2,10)
  }
  
  push();
  randomSeed(script)
	background("linen");
	noStroke();
	rectMode(CENTER);
	num = 0
	let start = 0;
	let end = 800;
	let leng = 12.5900*fxrand();
	let yz = .3;
  
 for (let x = start; x < end + 0; x += (leng / num)) {
		push();
		translate(x, y);
		rotate(fxrand()*10);
		let w = dim*.93
		let h = dim*9.3
		pnum = int(random(colors.length))
		getcolor = colors[pnum]
		console.log(script)
		let c1 = getcolor[0]
		let c2 = getcolor[1]
		let c3 = getcolor[2]
	
   
	circle(dim/2, dim/2, dim*fxrand()-300);
   if (fxrand()>.75){circle(dim/1, dim/3, dim*fxrand()-100);}
   else if (fxrand()>.5){	circle(dim-fxrand()*100, dim/4, 400*fxrand());}
   else if (fxrand()>.25) {	circle(fxrand()*400, dim/2, dim*fxrand());}
	else 	{circle(dim/2, dim/2, dim*fxrand());}
		pop();
  rect(width/2, height/2, dim+100*fxrand(), 22*dim);
     let y1 = 0;
  let y2 = dim / (27*fxrand());
  for (let i = 0; i < dim; i += 8) {
    stroke(solar[i] * 505);
    line(i, y1, i, y2);
  }

  y1 = y2;
  y2 = y1 + y1;
  for (let i = 0; i < dim; i += 1) {
    stroke(255*fxrand(), 255*fxrand()*fxrand(), 100*fxrand()+155);
    circle(i, y1, i, y2);
  }

  y1 = y2;
  y2 = dim;
  for (let i = 0; i < dim*2.2; i += 200) {
    line(i, y1, i, y2);
rect(dim/2, dim/2, dim, dim);
    push();
    strokeWeight(200);
    stroke("crimson");
    line(0, i, y2, i);
    pop();


  }
  
  
  for (let i=0;i<1;i++){
    a = 400*sin(2*fxrand()*fxrand())+fxrand()*2
    r = 100+fxrand()*200*sin(1800*fxrand())
    
    v = p5.Vector.fromAngle(a).setMag(r)
    
    x = width/2+v.x
    yz = height/2+v.yz
    
    x = int(x/5)*5
    yz  = int(yz/50)*5
  
    push();
   

    rect(sin(2*x+200*fxrand())*100+100, fxrand()*yz+400,1,1)
    pop();
     push();
    

    rect(sin(2*x+200*fxrand())*100+300, fxrand()*yz+400,1,1)
    pop();
       push();
 

    rect(sin(2*x+200*fxrand())*100+500, fxrand()*yz+400,1,1)
    pop();
      push();
   
  
    rect(sin(2*x+200*fxrand())*100+700, fxrand()*yz+400,1,1)
    pop();
    
  
      push();
   

    rect(sin(2*x+200*fxrand())*100+100, fxrand()*yz,1,1)
    pop();
    
       push();

  
    rect(sin(2*x+200*fxrand())*100+300, fxrand()*yz,1,1)
    pop();
    
    
       push();
 
 
    rect(sin(2*x+200*fxrand())*100+500, fxrand()*yz,1,1)
    pop();
    
       push();
     

    rect(sin(2*x+200*fxrand())*100+700, fxrand()*yz,1,1)
    pop();
    
   
       push();
   

    rect(fxrand()*x, sin(2*x+200*fxrand())*100+300,1,1)
    pop();
    
      push();


    rect(fxrand()*x, sin(2*x+200*fxrand())*100+700,1,1)
    pop();
  
      push();

    rect(fxrand()*x, sin(2*x+200*fxrand())*100+100,1,1)
    pop();
    
      push();
  

    rect(fxrand()*x, sin(2*x+200*fxrand())*100+500,1,1)
    pop();
    
      push();


    rect(fxrand()*x+400, sin(2*x+200*fxrand())*100+700,1,1)
    pop();
    
    push();
    
    rect(fxrand()*x+400, sin(2*x+200*fxrand())*100+500,1,1)
    pop();
    
    push();
   

    rect(fxrand()*x+400, sin(2*x+200*fxrand())*100+300,1,1)
    pop();
    
    push();
 

    rect(fxrand()*x+400, cos(2*x+200*fxrand())*100+100,1,1)
    pop();
    
  }

	
  
}
   pop();
}
colors = [
[ "green", "linen", "green", "linen", "teal", "gold", "crimson", "white", "linen", "black", "teal", "coral", "sandybrown", "teal", "gold", "crimson", "white", "linen", "black", "teal", "coral", "sandybrown", "white"]
]


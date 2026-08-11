//1-eval

cs = [upigrRandomInt(10,250),upigrRandomInt(10,250),upigrRandomInt(10,250),
    upigrRandomInt(100,200)
    ];
    
larf = upigrRandomInt(10,100);
xuad = upigrRandomInt(10,100);
figure = upigrRandomInt(2,8);
strw = upigrRandomFloat(0.5,1.0);

function setup() {
 	createCanvas(windowWidth, windowHeight);
  	background(0);
};


function draw() {
noLoop();

upigrStars(windowWidth,windowHeight,1000);
upigrStars(windowWidth,windowHeight,1000);

rectMode(CENTER);
translate(windowWidth/2, windowHeight/2); 		
for(var i=0;i<larf;i++){
 rotate(radians(i));
 noFill();
 stroke(cs[0],cs[1],cs[2],cs[3]);
 strokeWeight(strw);
 upigrPoly(0,0,(windowWidth/xuad)*i,figure);
 
}	
	 
	}
  


	  
	  












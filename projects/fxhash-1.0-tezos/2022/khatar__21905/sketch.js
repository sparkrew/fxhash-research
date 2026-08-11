
class Particle {

	constructor(posX, posY){
			this.positionX = posX;
			this.positionY = posY;
			this.color   = "white";
			this.speed = 20;
			this.size = 2;
			
	}
	
	
	incrementPositionX(){
	  this.positionX += random(40);
	}
	incrementPositionY(){
	  this.positionY += random(100);
	}
	//change size randomly whithin 0 and 15
	changeSize(){
		this.size = random(15);
	}
	changeColor(){
		this.color = random(255);
}
	//everytime a mouse is pressed the speed will decrease
	changeSpeed(){
		this.speed --;
}
}

var particle;
var particles = [];

function setup(){
  Math.random = fxrand;
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);

	createCanvas(windowWidth,windowHeight);

particle = new Particle(random(width), random(height));
print(particle.color);	

	for(var i=0; i < 100; i++){
	  particles.push( new Particle( random(width), random(height) ) );
	}
	
	
}


function draw(){
	r = random(255); 
  g = random(255); 
  b = random(255);
	
	
	for(var i=0; i < particles.length; i++){
	  ellipse(particles[i].positionX, particles[i].positionY, particles[i].size,particles[i].size); 
		particles[i].incrementPositionY();
		particles[i].incrementPositionX();
		particles[i].changeSize();
		particles[i].changeSpeed();
		
	
	}
	
	print(particle.positionX);

}
//when mouse is pressed make more instance of object Partivle

function mousePressed(){
	for(var i=0; i < 200; i++){
		
	  particles.push( new Particle( random(width), random(height) ) );
		ellipse(particles[i].positionX - 10, particles[i].positionY + 20, particles[i].size,particles[i].size);
		particles[i].changeSize();
		particles[i].incrementPositionY();
		particles[i].incrementPositionX();

	
		
		fill(particles[i].color);
		
		
		 if (mousePressed){
      particles[i].changeColor();
			 fill(particles[i].color);
			 
			 //if right mouse button is pressed clear everything and change color of the background to the random color
			 if (mouseButton === RIGHT) {
     				background(r,g,b);
    	}
    }
		
		
	
	}
}
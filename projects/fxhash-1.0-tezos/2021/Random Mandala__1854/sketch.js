var s = 10, m = 20;
let timer = 2000;
let nextChange = timer; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeJoin(ROUND);
  strokeWeight(3);
	noFill(200);
  frameRate(30);
	//fill(150,50,200);
  stroke(random(0, 255),random(0, 255),random(0, 255));
}

function draw() {
  background(0,12);
  translate(windowWidth/2, windowHeight/2);

  for (var i = 0; i < 500; i+=m) {
    push();
    translate(0, 0);
    rotate(radians(i));
		beginShape();

		
    for (var j = 0; j <= m; j+=0.5) {
      var line1 = (sin(radians(j*15+frameCount))*(5+sin(radians(j*30))*(j*5)));
      vertex(sin(radians(0))*(30+j*s)+line1, (10+j*s)+10);
    }
		
    for (var k = m; k >= 0; k-=0.5) {
      var line2 = (sin(radians(k*15+frameCount))*(5+sin(radians(k*30))*(k*5)));
      vertex(sin(radians(0))*(30+k*s)-line2, (10+k*s)+10);
    }
   
    endShape(CLOSE);
    pop();
  }

}

function mouseReleased() {
  stroke(random(0, 255),random(0, 255),random(0, 255));
  s=random(10, 20)
}
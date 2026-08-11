document.oncontextmenu = () => false;
const globe = [];
const r = 200;
const ra = 100;
const total = 25;
let angleX = 0;
let angleY = 0;
let angleA = 0;
let angleB = 0;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
	//createEasyC0  noFill();
	//specularMaterial (200,50,150);
  //strokeWeight(2);
	noStroke();
  stroke(200);

  for (let i = 0; i < total + 1; i++) {
    globe[i] = [];
    const lat = map(i, 0, total, 0, PI);
    for (let j = 0; j < total + 1; j++) {
      const lon = map(j, 0, total, 0, TWO_PI);
      const x = r * sin(lat) * cos(lon);
      const y = r * sin(lat) * sin(lon);
      const z = r * cos(lat);
      globe[i][j] = createVector(x, y, z);
     
      
    }
  }
}



function draw() {
 
 /* colorMode(RGB);
 
  background(59,122,175);*/
  //background(15);
	/*ambientLight(105);
	pointLight(255,0 , 0, -200, 100, 0);
	pointLight(0, 0 , 100, 200, -200, 0);
	pointLight(0, 100 , 0, -100, 300, 100);*/
  rotateX(angleX);
  rotateY(angleY);
  
   background(20);
  
 ambientLight(50);
  directionalLight(255, 0, 0, 0.25, 0.25, 0);
  pointLight(0, 0, 255,0,0, 250);
  ambientLight(50);
  directionalLight(255, 0, 0, 0.25, 0.25, 0);
  pointLight(0, 0, 255,0,0, 250);
  
  
 
  //specularMaterial(255);
  sphere(100);
  rotateX(angleA);
  rotateY(angleB);

  for (let i = 0; i < total; i++) {
    beginShape(QUAD_STRIP);
		
    for (let j = 0; j < total + 1; j++) {
      const v1 = globe[i][j];
      vertex(v1.x, v1.y, v1.z);
      const v2 = globe[i + 1][j];
      vertex(v2.x, v2.y, v2.z);
      
			
    }
    endShape();
    
  }
  

  angleX += 0.005;
  angleY += 0.006;
  angleA += 0.009;
  angleB += 0.01;
}


function setup() {
  createCanvas(2000, 2400);
  
  pg=createGraphics(2000,2400,WEBGL);
  
  setAttributes({ antialias: false });
   seed = floor($fx.rand() * 123456789)
      randomSeed(seed)
     noiseSeed(seed)
  
  
   background('#E4DADD');
  
  frameRate(1)
  
  x=0
  y=0
  z=0
  pg.angleMode(DEGREES);
    h2=random(255)
  s2=random(255)
  b2=random(255)
  dg=random([0,180])
  pr=1
   h1=random(360)
  s1=random(255)
  b1=random(255)
  
  h=h1
  s=s1
  b=b1
  k=random([225,250,275,300,250,250])
  colorMode(HSB);
  
}

function draw() {

  pg.reset()
  
  pg.push();
  pg.translate(x,y,z);
  pg.rotateZ(dg)
  
  
 pg.noFill();
  pg.beginShape();
  for (let x = - width/2+k; x < width/2-k; x += 5) {

    for (let y = - height/2+k; y < height/2-k; y += 5) {
  
      
      for (let z = -1; z < 0; z += 1) {
        
        let n = noise(x * 0.01, y * 0.01, z * 0.01);
        let s = map(n, 0, 1, 0, 20);
        pg.push();
        pg.translate(x, y, z);
        //noStroke();
        pg.colorMode(RGB);
        pg.stroke(0,0,0,35)
        pg.strokeWeight(2);
         pg.fill(h,s,b,55)
        //sphere(s);
        //pg.noStroke();
        pg.box(s,s,s*s)
        pg.colorMode(RGB);
        pg.stroke(h2,s2,b2,15)
        pg.strokeWeight(10);
       // pg.line(0,0,0,0+random(-15,15),0+random(-15,15),0+50)
       pg.noStroke();
        pg.fill(h2,s2,b2,15);
        pg.box(10,10,100)
        pg.pop();
        
      }
    }
  }
  pg.endShape();
 // pg.translate(x,y,z+1);
 //  pg.fill(h2,s2,b2,15);
     //   pg.plane(2000)
  pg.pop();
  
  if(frameCount==1){
    noLoop();
  }
  
  //noLoop();
  
  image(pg,0,0)
}

  function keyTyped() {
    if (key === 's') {
    saveCanvas('earthen rampart', 'png');
    }
    }
    
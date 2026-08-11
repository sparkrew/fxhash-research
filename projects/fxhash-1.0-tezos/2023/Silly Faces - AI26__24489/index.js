function setup(){
randomSeed(int(fxrand()*987654321))
  createCanvas(800, 800);
  background(245, 255, 250);
  noStroke();
  let skinA = (random(150,255))
  let skinB = (random(150,240))
  let skinC = (random(140,240))
  
  // Create a face using simple shapes
  fill(skinA, skinB, skinC);
  ellipse(400, 400, random(200, 600), random(200, 600));
  
  // Add eyes
  fill(255);
  ellipse(345, 375, random(50, 100), random(50, 100));
  ellipse(455, 375, random(50, 100), random(50, 100));
  
  // Add eyeballs
  fill(0); 
  ellipse(random(325,370), 375, random(10, 40), random(10, 40));
  ellipse(455, random(375,400), random(10, 40), random(10, 40));
  
  // Add nose
  fill(skinA - 30, skinB - 30, skinC - 30);
  triangle(400, 425, random(390,430), random(455,475), random(410,450), random(455,475));
  
  // Add mouth
  fill("black");
  arc(400, random(495,530), random(100, 200), random(50, 100), 0, PI, CHORD);
  
  // Add funny marks
  stroke("black");
  strokeWeight(1);
  line(random(200, 600), random(200, 600), random(200, 600), random(200, 600));
  line(random(200, 600), random(200, 600), random(200, 600), random(200, 600));
  line(random(200, 600), random(200, 600), random(200, 600), random(200, 600));
  line(random(200, 600), random(200, 600), random(200, 600), random(200, 600));
  line(random(200, 600), random(200, 600), random(200, 600), random(200, 600));
  line(random(200, 600), random(200, 600), random(200, 600), random(200, 600));
  line(random(200, 600), random(200, 600), random(200, 600), random(200, 600));
  line(random(200, 600), random(200, 600), random(200, 600), random(200, 600));
}
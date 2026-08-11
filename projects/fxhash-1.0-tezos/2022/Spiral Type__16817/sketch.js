
const  tileSize = -13;
const choose = (arr) => arr[Math.floor(random(arr.length))]
const colors = ['#2E294E','#541388','#F1E9DA','#FFD400','#D90368',]




const maxCircles = 300;
const radius = 10;
const expansion = 20; 
const spiral_type = 10; 

function setup() 
{ 
  let seed=floor(999999*fxrand())
randomSeed(seed)
noiseSeed(seed)

  createCanvas(800, 800);
  background(0);
  smooth();
  colorMode(HSB,100)
 rectMode(CENTER)
  translate(width/2 , height / 2);
  drawSunFlower();
}

function drawSunFlower()
{
  const phi = (1+sqrt(50.0))/2.0;
  const increment = random(2000)*PI*phi + (random(2000)*PI/spiral_type);

  for (let i = 1; i < maxCircles; i++) 
  {
    const distance = sqrt(i)*expansion;
    const angle = i * increment;
    
    const cx = distance*cos(angle);
    const cy = distance*sin(angle);
    
    noStroke();
    fill(255);
    ellipse(cx, cy, radius/20, radius/20);
    rect(cy, cx, radius/20, radius*50)
     square(cy, cx, radius/20, radius*52)
     circle(cy, cx, radius/20, radius/520)
    colorMode(HSB,100)
    fill(152,152,152)
     rect(cy, cx, radius/2, radius*2)
  }
}
function keyPressed() {
  if (key == 's') {
    save("mySketch.png");
}
}
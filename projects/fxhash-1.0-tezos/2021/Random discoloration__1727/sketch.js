function setup() {
  createCanvas(1000, 1000);
  background(0);
  rectMode(CENTER);
  colorMode(HSB,360,80,80);
}
function draw(){
  for(let x=0;x<1050;x+=50){
    for(let y=0;y<1050;y+=50){
      stroke(random(360,80,80));
      fill(random(360),80,80);
      rect(x,y,random(50),random(50));
    }
  }
}

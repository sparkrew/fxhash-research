let image; 
let canvas; 
function preload(){ image = loadImage('assets/pp.jpeg');
}
  //only run once 
function setup() {
  canvas = createCanvas(image.width, image.height); 
let newCanvasX = (windowWidth - image.width)/2; 
let newCanvasY = (windowHeight - image.height)/2; 
  canvas.position(newCanvasX, newCanvasY);
  for(let col = 0; col< image.width; col+=2){
    for(let row = 0; row <image.height; row+=2){
      let xPos = col;
      let yPos = row;
      let c = image.get(xPos,yPos);
      push();
      translate(xPos, yPos);
      rotate(radians(random()*270))
      noFill();
      strokeWeight(random(fxrand())*2);
      stroke(color(c));
      rect(10,1,fxrand(),1);
      curve(xPos, yPos, sin(xPos) * random()*50, cos(xPos) * sin(xPos) * random()*85, random(fxrand())*12, fxrand(), cos(yPos) * sin(yPos) * random()*132, cos(xPos) * sin(xPos) * 51)
      pop();
    }
  }
}


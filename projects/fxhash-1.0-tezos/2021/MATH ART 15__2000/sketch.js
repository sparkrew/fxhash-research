/**

█▀▀▀ █▀▄▀█ 
█░▀█ █░▀░█ 
▀▀▀▀ ▀░░░▀
**/

function setup() {
  createCanvas(600,600);
 //blendMode(BLEND)
  //frameRate(4)
  stroke(255)
  loop()
  //noStroke()
}
let theta=10
let s=620
let a=0;
function draw() {
  //if (frameCount<=15){
  background(0);
 noFill() //fill(255,255,255,random(20,10))
  //stroke(255)
  strokeWeight(.23)
  translate(width/2,height/2)
  for (let x = 0; x < s; x +=.8) {
    let c=sin(90)
  rotate(c)
    //stroke(random(250),random(250),random(250),random(50,100))
        arc(height/2+x,width/2+x,windowWidth-300,windowHeight/2-300, theta, theta+PI,PI/2,PI);
   //stroke(random(250),random(250),random(250),random(50,120))
    arc(height/2-x,width/2-x,windowWidth/2-300,windowHeight-300, theta, theta+PI,PI/2,PI);
  //  stroke(random(250),random(250),random(250),random(50,100))
    arc(height/2+x,width/2-x,windowWidth/2-300,windowHeight/2-300, theta, theta+PI,PI/2,PI);
  //stroke(random(250),random(250),random(250),random(50,150))
   arc(height/2-x,width/2+x,windowWidth-300,windowHeight, theta, theta+PI,PI/2,PI);

      theta += PI/2+36;
    
  }
  //}else 
   //   s=s-100;
}
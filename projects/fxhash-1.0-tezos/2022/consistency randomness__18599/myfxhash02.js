let s1, s2,c1,c2,c3,c4,stop;

function setup() {
  randomSeed(fxrand() * 10000000);
  createCanvas(1200,1200);
  background(255);
  s1= random(width/2,width*6);
  s2 = random(width/2,width*8);
  s3= random(width/2,width*3);
  s4 = random(width/2,width*2);
  c1 = color(int(random(200,255)),int(random(180,220)),int(random(130,230)),2);
  c2 = color(int(random(200,255)),int(random(180,220)),int(random(130,230)),2);
  c3 = color(int(random(200,255)),int(random(180,220)),int(random(130,230)));
  // c3 = 0;
  c4 = color(int(random(200,255)),int(random(180,220)),int(random(130,230)));
  c4= 255;
  c4 = c3;
  stop=int(40,80)
}

function draw() {
 fill(random(255), 145, random(255))
    if(frameCount<stop){
      blendMode(DIFFERENCE);
      lines()
    }
  
  else {
    frameRate(0);
  }
}


function lines(){
strokeWeight(width/2);

    if(s3 > 0){
      s3 = s3-1;
    }
    if(s4>0){
      s4=s4-1;
    }
 stroke(c3); 
    ellipse(width/2+width/2*sin(frameCount),height/2+height/2*sin(frameCount),s3)
     
 stroke(c4) ;
    ellipse(width/2-width/2*sin(frameCount),height/2+height/2*sin(frameCount),s4)

}
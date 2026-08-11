
PImage daPic; 

int x_;
int y_; 
  
int [] stp = {-5, 5};  
void setup() {
  size(2048,1200);
  
  seeder = fxrand();
  randomSeed(seeder * 999999);

  daPic = loadImage("./assets/abeautifulscar.jpg");

  background (0);
   x_ = int(random(0, width));
   y_ = int(random(0, height));
}


void draw() {
  
  if (frameCount <= 1) {
  
     x_ = int(random(0, width));
     y_ = int(random(0, height));
  if ( daPic != null ) {
     image(daPic,width/4,height/4, width - width/4, height - height/4);
      
      
      loadPixels();  
    
    
      daPic.resize(width/4, height/4);
    
      daPic.loadPixels();  
      background(int(random(32)),int(random(32)),int(random(32)));
      
      
      for (int x = 0; x < daPic.width; x++) {
        
       
        for (int y = 0; y < daPic.height; y++) {
        int eSize = int(random(5,20)) ;
        int disPixl = x+y*daPic.width;
        float r_ = red(daPic.pixels[disPixl]);
        float g_ = green(daPic.pixels[disPixl]);
        float b_ = blue(daPic.pixels[disPixl]);
        color filler = color (r_, g_, b_);
         if (x_ >= width) {
          x_ = x_ - eSize;
        }
        
        if (y_ >= height) {
          y_ = y_ - eSize;
        }
        if (x_ <= 0) {
        x_ = x_ + eSize;
      }
        if (y_ <= 0) {
        y_ = y_ + eSize;  
       }
       
        
        stroke(255-(r_/1.5), 255-(g_/1.5), 255-(b_/1.5), int(random(1,8)));
        strokeWeight(1);
        fill(filler);
        line(x_,y_, x_, y_ + int(random(eSize, (height-y_)/1.35)));
        stroke(255-r_, 255-g_, 255-b_, int(random(127, 255)));
        ellipse(x_,y_,eSize,eSize);
        x_ = x_ + stp[int(random(0, stp.length))];
        y_ = y_ + stp[int(random(0, stp.length))];
      }  
      
     }
    }
  }
  
  
    fxpreview();
    noLoop();
}

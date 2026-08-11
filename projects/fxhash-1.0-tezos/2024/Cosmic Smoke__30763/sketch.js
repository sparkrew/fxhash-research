function setup() {
    STOP_FRAME = 180;
    cells = []
    randomSeed(int($fx.rand()*987654321));
    noiseSeed(int($fx.rand()*987654321));
    h = random(0, 360);
    c = color(h, 75, 75);
    h_incr = random(-1,1)
    s_incr = random(-0.5,0.5)
    b_incr = random(-0.25,1)
    imageMode(CENTER);
    rectMode(CENTER);
    ellipseMode(CENTER);
    colorMode(HSB);
    let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.id("C4-621");
    
    // CHANGE BELOW
    short_side = min(width, height);
    noise_scale = random(short_side*0.01,short_side*0.25);
    x_stretch = (width/1920)*random(2,33);
    y_stretch = (height/1080)*random(2,33);
    n_cells = Math.floor(short_side*8);
    // CHANGE ABOVE
    
    buff0 = createFramebuffer();
    buff1 = createFramebuffer();
    
    for (let i = 0; i < n_cells; i++){
        let new_cell = new Cell(random(-width/2, width/2), random(-height/2, height/2), color(h,80,50), vx=0, vy=0)
        cells.push(new_cell)
    }
    
    background(0);
}

function draw() {
    [buff0, buff1] = [buff1, buff0];
    
    buff1.begin();
    c = color((h+(h_incr*frameCount))%360, 75+(s_incr*frameCount), 75+(b_incr*frameCount));
    stroke(c);
    clear();
    push();
    scale(0.999);
    image(buff0, -width/2, -height/2);
    filter(BLUR, 0.0001);
    pop();
    if (frameCount == STOP_FRAME){
        filter(BLUR, 1);
        noLoop();
        if ($fx.isPreview){
            $fx.preview();
        }
        return;
    }
    cells.forEach(cell => {
        if ((STOP_FRAME - frameCount) > 2){
            let dv = createVector(x_stretch*(0.5-noise(cell.p.x/noise_scale, 9999+cell.p.y/noise_scale)), y_stretch*(0.5-noise(9999+cell.p.x/noise_scale, cell.p.y/noise_scale)));
            cell.v = dv;
            cell.move();
            cell.render();
        }
    })
    buff1.end();
    background(0);
    //image(buff1, -width/2, -height/2);	
    image(buff1, -width*0.45, -height*0.45, width*0.9, height*0.9);
}

/*
function windowResized(){
    frameCount = 1;
    setup();
    loop();
}
*/

function keyPressed(){
    if (key == 's'){
        save($fx.hash)
    }
}

class Cell{
  constructor(x, y, c=color(255,0,0), vx=0, vy=0){
    this.p = createVector(x,y);
    this.v = createVector(vx,vy);
    this.c = c;
  }
  
  move(){
    this.p.add(this.v);
  }

  render(){
    circle(this.p.x, this.p.y, 1)
  }
}

var sz = {
  ratio: ecx([0.7, 1/0.7]),
};

var resize = {
  time: 0,
  delay: 300,
  handled: true
}

function calculateCanvasSize(){
  sz.w = Math.floor(window.innerWidth);
  sz.h = Math.floor(sz.w * sz.ratio);

  if (sz.h > window.innerHeight){
    sz.h = Math.floor(window.innerHeight);
    sz.w = Math.floor(sz.h / sz.ratio);
  }

  if (sz.h > sz.w){
    sz.nw = 1000;
    sz.nh = Math.floor(sz.nw * sz.ratio);
  }
  else{
    sz.nh = 1000;
    sz.nw = Math.floor(sz.nh / sz.ratio);
  }

  sz.dim = min(sz.nw, sz.nh);
  sz.ldim = max(sz.nw, sz.nh);

  sz.f = {
    x: sz.w / sz.nw ,
    y: sz.h / sz.nh
  }


  sz.ts = {
    x: sz.w*0.5,
    y: sz.h*0.5,
    rx: -(sz.w/sz.f.x) * 0.5,
    ry: -(sz.h/sz.f.y) * 0.5,
  }
}

function checkResizeNeeded(){
  if (!resize.handled){
    // Check the last time the window resized so we dont constantly deal with it
    // as someone is dragging the window size.
    // Instead, it waits for a pause in resizing.
    if (millis()){
      if (resize.time + resize.delay < millis() && drawn){
        handleResize();
        resize.handled = true;
      }
    }
  }
}

//handle resizing and regenerating image
function handleResize(){
  calculateCanvasSize();

  resizeCanvas(sz.w, sz.h);
  clear();
  blendMode(BLEND);
  noStroke();
  background(sx.p.bg);

  drawn = false;
}

// Event called whenever the browser window is resized
function myResize() {
  if (millis()) resize.time = millis();
  resize.handled = false;
}

window.addEventListener('resize', myResize);

let data = "tz1ag1rRrxmyP6bWf5jYj8NE65HH7qq4NWBC";
let size, size_n;
let bg_color;
let arc_c, c1, c2, cr, cg, cb;
let data_sum, data_num_sum, data_2_sum;
let n;

function setup() {
  if(fxhash != null){
    data = fxhash;
  }
  createCanvas(windowHeight*1.1, windowHeight);
  frameRate(10);
  size = 80;
  size_n = size;
  w = width;
  h = height;
  data_sum = 0;
  data_num_sum = 0;
  data_2_sum = 0;
  n = 0;
  for(let i = 2; i < data.length; i=i+1){
    data_sum += data.charCodeAt(i);
    if(data.charCodeAt(i) <= 57 && data.charCodeAt(i) >= 48){
      data_num_sum += data.charCodeAt(i);
    }
    if(i%2 == 0){
      data_2_sum += data.charCodeAt(i);
    }
  }
  bg_color = 0;
  cr = map(data_sum%20, 0, 19, 150, 180);
  cg = map(data_num_sum%20, 0, 19, 160, 200);
  cb = map(data_2_sum%20, 0, 19, 220, 255);
}

function draw(){
  refresh();
}

function refresh(){
  let index = 2;
  background(bg_color);
  c1 = [cr, cg, cb];
  c2 = map(fxrand(), 0, 1, 220, 255);
  for(let j=0; j<h+size; j+=size/2+noise(n)*12){
    n+=0.001;
    size = size_n;
    size_n = data.charCodeAt(index);
    index++;
    if(size < size_n){
      for(let i=0; i<w+size_n; i+=size_n){
        arc_c = c1;
        draw_arc(i, j, size, arc_c);
      }
      for(let i=size_n/2; i<w+size_n; i+=size_n){
        arc_c = [c2,c2,c2];
        draw_arc(i, j+size/4, size, arc_c);
      }
    } else {
      for(let i=0; i<w+size; i+=size){
        arc_c = c1;
        draw_arc(i, j, size, arc_c);
      }
      for(let i=size_n/2; i<w+size; i+=size){
        arc_c = [c2,c2,c2];
        draw_arc(i, j+size/4, size, arc_c);
      }
    }
  }
}

function draw_arc(_px, _py, _size, _arc_c){
  let spacing = 18;
  let s = 3;
  stroke(_arc_c[0], _arc_c[1], _arc_c[2]);
  strokeWeight(s);
  fill(bg_color);
  arc(_px, _py, _size, _size, radians(200), radians(-20));
  if(_size > 0){
    _size -= spacing;
    _arc_c = [_arc_c[0]*0.8, _arc_c[1]*0.8, _arc_c[2]*0.8];
    draw_arc(_px, _py, _size, _arc_c);
  }
}

function mouseClicked(){
  refresh();
}

function windowResized() {
  resizeCanvas(windowHeight*1.1, windowHeight);
  w = width;
  h = height;
  refresh();
}
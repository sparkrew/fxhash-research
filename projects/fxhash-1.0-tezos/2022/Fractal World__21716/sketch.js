let sketch = function(p) {
  let steps = 20;
  let windowSize = getWindowSize();

  let size = windowSize[0];
  if(windowSize[1] < windowSize[0]){
    size = windowSize[1];
  }

  p.setup = function() {
    p.createCanvas(windowSize[0], windowSize[1]);
    
    p.noStroke();
    p.fill(255,240,230);
    p.blendMode(p.OVERLAY);
    p.noLoop();
    p.frameRate(12);
  }

  p.draw = function() {
    p.clear();
    p.fill(215,150,60);
    let s = generate_string(8);
    display(s);
    p.fill(185,50,130);
    s = generate_string(8);
    display(s);
    p.fill(80,190,155);
    s = generate_string(8);
    display(s);
  }

  function generate_string (d) {
    if (d == 0) {
      let r = p.random(5);
      if (r < 1) return "W";
      return "B";
    }

    let r = p.random(10 + (d * 8));
    if (r < 5) return "W";
    if (r < 10) return "B";
    let ul = generate_string(d - 1);
    let ur = generate_string(d - 1);
    let ll = generate_string(d - 1);
    let lr = generate_string(d - 1);
    return "[" + ul + "-" + ur + "/" + ll + "-" + lr + "]";
  }

  function display(s) {
    let depth = 0;
    for(let i = 0; i < s.length; i++) {
      let t = s[i];
      let cur_size = size / p.pow(2, depth);
      //p.fill(p.random(255),p.random(255),p.random(255));
      if (t == "B") {
        p.rect(0, 0, cur_size-1, cur_size-1);
      } else if (t == "[") {
        depth++;
      } else if (t == "]") {
        p.translate(-cur_size, -cur_size);
        depth--;
      } else if (t == "-") {
        p.translate(cur_size, 0);
      } else if (t == "/") {
        p.translate(-cur_size, cur_size);
      }
    }
  }


  function getWindowSize(){
    var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;

    return [x, y];
  }

}

new p5(sketch);

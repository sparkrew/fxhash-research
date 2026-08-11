// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

var rnn_model;
var rnn_model_data;
var screen_width;
var screen_height;

var draw_example = function(example, start_x, start_y, line_color) {
  var i;
  var x=start_x, y=start_y;
  var dx, dy;
  var pen_down, pen_up, pen_end;
  var prev_pen = [0, 1, 0];

  for(i=0;i<example.length;i++) {
    // sample the next pen's states from our probability distribution
    [dx, dy, pen_down, pen_up, pen_end] = example[i];

    if (prev_pen[2] == 1) { // end of drawing.
      break;
    }

    // only draw on the paper if the pen is touching the paper
    if (prev_pen[0] == 1) {
      stroke(line_color);
      strokeWeight(2.0);
      line(x, y, x+dx, y+dy); // draw line connecting prev point to current point.
    }

    // update the absolute coordinates from the offsets
    x += dx;
    y += dy;

    // update the previous pen's state to the current one we just sampled
    prev_pen = [pen_down, pen_up, pen_end];
  }

};

var setup = function() {

  var drawing, i, temperature;

  screen_width = window.innerWidth;
  screen_height = window.innerHeight;

  createCanvas(screen_width, screen_height, SVG);

  var rnn_model_data = JSON.parse(model_raw_data);
  rnn_model = new SketchRNN(rnn_model_data);

  var z = [];

  for(i=0;i<128;i++) {
    z.push(fxrand() * 1 - 1);
  }

  temperature = 0.1 + 0.2*fxrand();

  c = color(0, 0, 0);
  drawing = rnn_model.decode(z, temperature);
  drawing = rnn_model.scale_drawing(drawing, screen_height / 2);
  drawing = rnn_model.center_drawing(drawing);
  draw_example(drawing, screen_width / 2, screen_height / 2, c);

  fxpreview();

};
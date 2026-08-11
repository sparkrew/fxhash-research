// Author: Matthew Burke, @yot_club on twitter, @yot_club_ on instagram

let seed = 0; //seed Hash


const palettes = [
  'https://coolors.co/264653-2a9d8f-e9c46a-f4a261-e76f51',
  'https://coolors.co/03045e-023e8a-0077b6-0096c7-00b4d8-48cae4-90e0ef-ade8f4-caf0f8',
  'https://coolors.co/e63946-f1faee-a8dadc-457b9d-1d3557',
  'https://coolors.co/003049-d62828-f77f00-fcbf49-eae2b7',
  'https://coolors.co/f4f1de-e07a5f-3d405b-81b29a-f2cc8f',
  'https://coolors.co/006d77-83c5be-edf6f9-ffddd2-e29578',
  'https://coolors.co/335c67-fff3b0-e09f3e-9e2a2b-540b0e',
  'https://coolors.co/353535-3c6e71-ffffff-d9d9d9-284b63',
  'https://coolors.co/3d5a80-98c1d9-e0fbfc-ee6c4d-293241',
  'https://coolors.co/588b8b-ffffff-ffd5c2-f28f3b-c8553d',
  'https://coolors.co/780116-f7b538-db7c26-d8572a-c32f27',
  'https://coolors.co/495867-577399-bdd5ea-f7f7ff-fe5f55',
  'https://coolors.co/8cb369-f4e285-f4a259-5b8e7d-bc4b51',
]


let palette_colors;

let bg_color;

let alpha;
let start_color;
let end_color;

let inner_radius;
let outer_radius;;
let dot_radius;
let jitter_weight;
let color_jitter;


function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth(8);

  palette_colors = get_palette_colors(palettes, 3);

  bg_color = color('#' + palette_colors[0]);

  alpha = 150;
  start_color = color('#' + palette_colors[1]);
  end_color = color('#' + palette_colors[2]);

  inner_radius = width / 10 + fxrand() * width / 10;
  outer_radius = inner_radius + width / 8 + fxrand() * width / 4;
  dot_radius = height / 120;
  jitter_weight = 0.2;
  color_jitter = 0.3;

  seed = int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed);

  generate();
  noLoop();
}


function generate() {
  push();
  translate(width / 2, height / 2);

  background(bg_color);

  draw_circle_ring(start_color, end_color, inner_radius, outer_radius, dot_radius, jitter_weight, color_jitter, bg_color)

  stroke(bg_color);
  noFill();
  strokeWeight(height / 80);
  draw_cutting_shapes()
  pop();
}


function draw_cutting_shapes() {
  const num_sides = 3 + Math.floor(fxrand() * 12);
  const num_shapes = 5 + Math.floor(fxrand() * 10);
  const shape_radius = width / 4 + width / 4 * fxrand();
  const shape_out_radius = width / 8 + width / 4 * fxrand();

  const offset = fxrand() * PI * 2;

  noFill();
  for (let i = 0; i < num_shapes; i++) {
    push();
    rotate(PI * 2 * i / num_shapes);
    translate(0, shape_out_radius);
    draw_polygon(num_sides, shape_radius);
    pop();
  }

}


function draw_polygon(num_sides, radius) {
  beginShape();
  for (let i = 0; i < num_sides; i++) {
    const angle = PI * 2 * i / num_sides;
    vertex(radius * cos(angle), radius * sin(angle));
  }
  endShape(CLOSE);
}


function draw_circle_ring(start_color, end_color, inner_radius, outer_radius, dot_radius, jitter_weight, color_jitter, bg_color) {

  noStroke();
  let curr_radius = inner_radius;

  while (curr_radius < outer_radius) {
    const num_dots = curr_radius * 2 * PI  / (dot_radius * 0.5);
    const offset = 2 * PI * fxrand();
    const color_ratio = (curr_radius - inner_radius) / (outer_radius - inner_radius);

    for (let i = 0; i < num_dots; i++) {
      const angle = offset + 2 * PI * i / num_dots;
      const x = curr_radius * cos(angle) + fxrand() * dot_radius * jitter_weight;
      const y = curr_radius * sin(angle) + fxrand() * dot_radius * jitter_weight;
      const dot_color = lerpColor(start_color, end_color, color_ratio + (fxrand() - 0.5) * color_jitter);
      fill(dot_color);
      circle(x, y, dot_radius);
    }

    curr_radius += dot_radius * 0.5;
  }

  noFill();
  stroke(bg_color);
  strokeWeight(height / 40);
  circle(0, 0, outer_radius * 2);

  fill(bg_color);
  circle(0, 0, inner_radius * 1.01 * 2);

}

function get_palette_colors(palettes, n) {
  const palette = palettes[Math.floor(fxrand() * palettes.length)];
  let palette_arr = parse_palette(palette);
  shuffleArray(palette_arr);
  return palette_arr.slice(0, n);
}


function parse_palette(palette_str) {
  const base_str = palette_str.substr(19);
  const str_arr = base_str.split('-');
  return str_arr;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(fxrand() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  generate();
}

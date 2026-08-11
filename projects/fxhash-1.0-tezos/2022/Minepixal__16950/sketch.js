let border = 92
let obj_count = 16
let obj_size = 26
let obj_limit = 72
let objs = []

og_palette = ["#000000", "#FFFFFF", "#9A9899", "#3C5DE7", "#B0587C",
                "#F6521C", "#FF9204", "#FCC400", "#4C9A1B", "#B68817"]

alt_palette = ["#000000", "#FFFFFF", "#F94144", "F3722C", "#F8961E",
                  "#F9844A", "#F9C74F", "#90BE6D", "#43AA8B", "#4D908E",
                  "#577590", "#277DA1"]

let palette
let squircle
let blend_chance

function get_size(){
  return [randint(1, 4), randint(1, 4)]
}

function get_pos(size){
  return [randint(0, 16 - size[0]), randint(0, 16 - size[1])]
}

function get_color_index(palette){
  return palette[randint(0, palette.length - 1)]
}

function setup() {
  	 seed=int(fxrand() * 100000000); 
  randomSeed(seed); 
  noiseSeed(seed);
  noLoop();
  createCanvas(800,600);
  
  // decisions from random()!
  palette = (random() >= 0.25) ? og_palette : alt_palette;
  squircle = random() <= 0.25
  blend_chance = random()
  if (blend_chance <= 0.1){
    blendMode(MULTIPLY)
  } else if (blend_chance <= 0.2){
    blendMode(HARD_LIGHT)
  }
  
  for(let i = 0; i < obj_limit; i++){
    new_size = get_size()
    new_pos = get_pos(new_size)
    new_color = get_color_index(palette)
    objs.push([new_pos, new_size, new_color])
  }
  
  noStroke()
}

function draw() {
  clear()
  background("#EAE2D4");
  
  if (frameCount % 4 == 0){
    new_size = get_size()
    new_pos = get_pos(new_size)
    new_color = get_color_index(palette)
    objs.push([new_pos, new_size, new_color])
    if (objs.length > obj_limit){
      objs.shift()
    }
  }
  
  for(let i = 0; i < objs.length; i++){
    let pos = objs[i][0]
    let size = objs[i][1]
    let color = objs[i][2]
    fill(color)
    if (squircle){
      rect(border + pos[0] * obj_size, border + pos[1] * obj_size, size[0] * obj_size, size[1] * obj_size, 5)
    } else{
      rect(border + pos[0] * obj_size, border + pos[1] * obj_size, size[0] * obj_size, size[1] * obj_size)
    }
  }
}

function randint(min, max) {
  // max and min are inclusive
  return min + Math.floor(Math.random() * Math.floor(1 + max - min));
}
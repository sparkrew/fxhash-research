

let word_dict = [
  'C0NSUME',
  'CONSUME',
  'D4NCE',
  'DANCE',
  'L4UGH',
  'LAUGH',
  'L1VE',
  'LIVE',
  'L0VE',
  'LOVE',
  'P4RTY',
  'PARTY',
  'P3ACE',
  'PEACE',
  'S3X',
  'SEX',
  'TR4VEL',
  'TRAVEL',
  'W0RK',
  'WORK',
];

let color_dict = [
  [0, 0, 0],
  [0, 0, 255],
  [0, 255, 0],
  [255, 0, 0],
  
  [0, 255, 255],
  [255, 255, 0],
  
  [0, 255, 255],
  [255, 255, 0],
  
  [255, 0, 255],
  [255, 255, 255]
];

let step_dict = [
  0.12500,
  0.16666,
  0.25000,
  0.33333,
  0.37500,
  0.50000,
  0.66666,
  0.75555
];

let bpm = 89.0;
let text_height;

let font; 

let vs, fs;
let main_shader;
let back;
let front;

let polySynth;
let lp_filter;
let delay;
let hp_filter;

let frame_count = 0;
let next_beat_trigger = 0;
let index = 0;




function vs_load_callback(text_lines) {
  vs_text = text_lines.join('\n');
}
function fs_load_callback(text_lines) {
  fs_text = text_lines.join('\n');
}


let word_list = ['', '', '', ''];
let tone_list = ['', '', '', ''];
let step_list = ['', '', '', ''];
let color_1 = [0, 0, 0];
let color_2 = [0, 0, 0];

function preload() {
  loadStrings('./assets/main.vert', vs_load_callback);
  loadStrings('./assets/main.frag', fs_load_callback);
  font = loadFont('./assets/monogram.otf');
  
  word_list[0] = word_dict[Math.floor(fxrand() * word_dict.length)];
  word_list[1] = word_dict[Math.floor(fxrand() * word_dict.length)];
  word_list[2] = word_dict[Math.floor(fxrand() * word_dict.length)];
  word_list[3] = word_dict[Math.floor(fxrand() * word_dict.length)];
  
  step_list[0] = 1.0 * step_dict[Math.floor(fxrand() * step_dict.length)];
  step_list[1] = 1.0 * step_dict[Math.floor(fxrand() * step_dict.length)];
  step_list[2] = 1.0 * step_dict[Math.floor(fxrand() * step_dict.length)];
  step_list[3] = 1.0 * step_dict[Math.floor(fxrand() * step_dict.length)];
  
  
  tone_list[0] = Math.floor(440.0 * pow(2.0, Math.floor(fxrand() * 12) / 12.0));
  tone_list[1] = Math.floor(440.0 * pow(2.0, Math.floor(fxrand() * 12) / 12.0));
  tone_list[2] = Math.floor(440.0 * pow(2.0, Math.floor(fxrand() * 12) / 12.0));
  tone_list[3] = Math.floor(440.0 * pow(2.0, Math.floor(fxrand() * 12) / 12.0));
  
  color_1 = color_dict[Math.floor(fxrand() * color_dict.length)];
  color_2 = color_dict[Math.floor(fxrand() * color_dict.length)];
  
  delay_length = step_dict[Math.floor(fxrand() * step_dict.length)];
  
  window.$fxhashFeatures = {
	"color_1 (RGB8)": color_1.join(' '),
	"color_2 (RGB8)": color_2.join(' '),
	"words (english)": word_list.join(' '),
	"notes (hz)": tone_list.join(' '),
	"notes (beats)": step_list.join(' '),
	"delay (beats)": delay_length
  };
  
}

function setup() {  
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  noStroke();
  smooth();  
  
  text_height = windowWidth / 24;
  
  front = createGraphics(windowWidth, windowHeight, WEBGL);
  
  main_shader = front.createShader(vs_text, fs_text);
  front.shader(main_shader);
  
  back = createGraphics(windowWidth, windowHeight);
  back.smooth();
  back.textFont(font);
  back.textAlign(CENTER);
  back.noStroke();
  
  smooth();
  textFont('Mono');
  textAlign(LEFT);
  noStroke();
  
  

  polySynth = new p5.PolySynth();
  polySynth.setADSR(0.1, 0.1, 1.0, 0.1);
  userStartAudio();

  lp_filter = new p5.LowPass();
  lp_filter.freq(880.0);
  lp_filter.res(0.01);
  polySynth.disconnect();
  polySynth.connect(lp_filter);

  lp_filter.disconnect();
  
  delay = new p5.Delay();
  step_dict[Math.floor(fxrand() * step_dict.length)];
  delay.process(lp_filter, delay_length * 60.0 / bpm, .4, 1600);
  
  
  hp_filter = new p5.HighPass();
  hp_filter.freq(440.0);
  hp_filter.res(0.01);
  
  delay.disconnect();
  delay.connect(hp_filter);
}


function draw() {
  let beat = millis() * bpm / 60.0 / 1000.0;
  
  if (beat >= next_beat_trigger) {
    let color_tmp = color_1;
    color_1 = color_2;
    color_2 = color_tmp;
    let old_index = index;
    while (old_index == index) {
    	index = Math.floor(fxrand() * word_list.length);
    }
    
    let note_length_index = index; //Math.floor(fxrand() * step_list.length);
    let note_length = 0.5 * step_list[note_length_index] * 60.0 / bpm;
    let octave = (1.0 + Math.floor(fxrand() * 2.0));
	polySynth.play(tone_list[index] * octave, 0.25 / octave, 0, note_length);
  
  	next_beat_trigger = beat + step_list[note_length_index];
  }
  
  text_value = word_list[index];
  
  
  let text_width = back.textWidth(text_value);
  let text_x = windowWidth * 0.5;
  let text_y = windowHeight * 0.5 + text_height / 4.0;
  
  
  

  
  main_shader.setUniform('iResolution', [windowWidth, windowHeight]);
  main_shader.setUniform('color_1', [color_1[0] / 255.0, color_1[1] / 255.0, color_1[2] / 255.0]);
  main_shader.setUniform('color_2', [color_2[0] / 255.0, color_2[1] / 255.0, color_2[2] / 255.0]);
  main_shader.setUniform('offset', text_height * 3);
  
  main_shader.setUniform('bb', back);  
  main_shader.setUniform('beat', beat);
  
  front.background(0);
  front.quad(-1, -1, 1, -1, 1, 1, -1, 1);
  
  back.image(front, 0,0);
  
  back.textSize(text_height);
  
  back.fill(color_1[0], color_1[1], color_1[2]);
  back.stroke(0, 0, 0);
  back.rect(text_x - text_width * 0.5 - 2, text_y - text_height * 0.66 - 2, text_width + 4, text_height * 0.66 + 8);
  back.noStroke();
  
  back.fill(color_2[0], color_2[1], color_2[2]);
  //back.strokeWeight(1000);
  back.textStyle(NORMAL);
  back.text(text_value, text_x, text_y);
  
  
  
  image(back, 0, 0); 
  
  /*
  fill(0, 0, 0);
  //back.strokeWeight(1000);
  textStyle(NORMAL);
  
  text_x = text_height;
  text_y = windowHeight - 0.75 *  text_height;
  
  let color_1_info = 'COLOR 1 | ' + 'R: ' + String(color_1[0]).padStart(3, '0') + ' G: ' + String(color_1[1]).padStart(3, '0') + ' B: ' + String(color_1[2]).padStart(3, '0') ;
  text_width = textWidth(color_1_info);
  
  fill(color_1[0], color_1[1], color_1[2]);
  stroke(0, 0, 0);
  rect(text_x - 0.5 * text_height, text_y - text_height - 2, text_width + text_height, text_height + 8);
  noStroke();
  
  fill(255 - color_1[0], 255 - color_1[1], 255 - color_1[2]);
  textStyle(NORMAL);
  text(color_1_info, text_x, text_y);
  
  text_y -= text_height * 2.0;
  
  let color_2_info = 'COLOR 2 | ' + 'R: ' + String(color_2[0]).padStart(3, '0') + ' G: ' + String(color_2[1]).padStart(3, '0') + ' B: ' + String(color_2[2]).padStart(3, '0');
  text_width = textWidth(color_2_info);
  
  fill(color_2[0], color_2[1], color_2[2]);
  stroke(0, 0, 0);
  rect(text_x - 0.5 * text_height, text_y - text_height - 2, text_width + text_height, text_height + 8);
  noStroke();
  
  fill(255 - color_2[0], 255 - color_2[1], 255 - color_2[2]);
  textStyle(NORMAL);
  text(color_2_info, text_x, text_y);
  */
  
  frame_count += 1;
}

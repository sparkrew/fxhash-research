


let l = true;
function playPause() {
  if (l) {
    noLoop();
    l = false;
  } else {
    loop();
    l = true;
  }
}

document.addEventListener('keydown', e => {
  if (e.key == "s") {
    saveCanvas(canvas, 'Chladni', 'png');
  } else if (e.key == "p") {
    if (l) {
      noLoop();
      l = false;
    } else {
      loop();
      l = true;
    }
  } else if (e.key == "ArrowUp") {
    global_speed = global_speed + 1;
    console.log("Global Speed: " + global_speed);
  } else if (e.key == "ArrowDown") {
    if (global_speed > 1) {
      global_speed = global_speed - 1;
    }
    console.log("Global Speed: " + global_speed);
  }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let val = Math.floor(fxrand() * (max - min + 1)) + min;
  return val;
}

function getRandomFloat(min, max) {
  const result = min + (max - min) * fxrand();
  return result;
}

function getRandomFromArray(array) {
  let selector = getRandomInt(0, array.length-1);
  let choice = array[selector];
  return choice;
}

function getCurrentTimePerc() {
  let ms_in_day = 86400000;
  let now = new Date();
  const ms_passed = now.getTime() - new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const percentage_of_day = ms_passed / ms_in_day;
  
  return percentage_of_day;
}

let harmony = getRandomFromArray([1, 2, 3]);
let subtle = getRandomFromArray([0.001, 0.0005, 0.0001, 0.00005]);
let intermediate = getRandomFromArray([0.15, 0.25, 0.35, 0.45]);
let balance = getRandomFromArray([0.0, 0.25, 0.4, 0.5, 0.51, 0.55]);
let relaxed = getRandomFromArray([0.001, 0.0005, 0.0001]);
let zero = getRandomFromArray([0.15, 0.25, 0.35, 0.45]);
let analogous = getRandomFromArray([0.001, 0.0005, 0.0001, 0.00005, 0.00001]);
let synchronous = getRandomFromArray([0.5, 1, 2, 3]);
let generous = getRandomFromArray([0.5, 1, 2, 3]);
let equivalent = getRandomFromArray([0.001, 0.0005, 0.0001, 0.00005, 0.00001]);
let exclusion = getRandomFromArray([0.0011, 0.00052, 0.00013, 0.000054, 0.000016]);
let diffuse_ab = getRandomFromArray([0.51, 1.2, 2.3, 3.4]);
let diffuse_nm = getRandomFromArray([0.0011, 0.00052, 0.00013, 0.000054, 0.000016]);

let settings = [
  [0.5, harmony, 0.5, getRandomFromArray([1, 2, 3]), 0.5, subtle, 0.5, 0.0],
  [0.5, harmony, intermediate, 0, 0.5, 0.001, balance, 0.001],
  [0.5, 1, 0.5, 1, 0.5, relaxed, 0.5, analogous],
  [intermediate, 0, zero, 0, -0.25, relaxed, 0.25, analogous],
  [0.5, synchronous, 0.5, generous, 0.5, relaxed, 0.5, equivalent],
  [0.5, synchronous, 0.5, generous, 0.5, relaxed, 0.5, exclusion],
  [0.5, synchronous, 0.5, diffuse_ab, 0.5, relaxed, 0.5, diffuse_nm]
];

let settings_selector = getRandomInt(0, settings.length-1);

let a_init = settings[settings_selector][0];
let a_freq = settings[settings_selector][1];

let b_init = settings[settings_selector][2];
let b_freq = settings[settings_selector][3];

let n_init = settings[settings_selector][4];
let n_freq = settings[settings_selector][5];

let m_init = settings[settings_selector][6];
let m_freq = settings[settings_selector][7];


let settings_name_array_ab = [
  `Harmony - ${harmony}`,
  `Intermediate - ${intermediate}`,
  `Equal - 1`,
  `Zero - ${zero}`,
  `Synchronous - ${synchronous}`,
  `Generous - ${generous}`,
  `Diffuse - ${diffuse_ab}`
];
let settings_name_array_nm = [
  `Subtle - ${subtle}`,
  `Balance - ${balance}`,
  `Relaxed - ${relaxed}`,
  `Analogous - ${analogous}`,
  `Equivalent - ${equivalent}`,
  `Exclusion - ${exclusion}`,
  `Diffuse - ${diffuse_nm}`
];

let global_speed = getRandomInt(20, 70);

let scale_amount = getRandomFloat(0.07, 0.2);

let round_amount = getRandomInt(0, 100) < 70 ? getRandomFloat(2.0, 8.0) : getRandomFloat(8.0, 16.0);;


let color_threshold_min_array = [0, 25, 50, 75, 100, 150];
let color_threshold_max_array = [500, 750, 1000, 1500, 2000];
let color_threshold_init = (getRandomFloat(0.0, 2.0)) - 1.0;
let color_threshold_freq = getRandomFloat(0.0, 4.0);
let color_threshold_min = color_threshold_min_array[getRandomInt(0, color_threshold_min_array.length-1)];
let color_threshold_max = color_threshold_max_array[getRandomInt(0, color_threshold_max_array.length-1)];

let color_scheme_names = [
  "Monochrome Symmetric", 
  "Monochrome Asymmetric", 
  "Monochrome Fading", 
  "8 Color Asymmetric",
  "8 Color Asymmetric on Monochrome",
  "8 Color Symmetric",
  "8 Color Symmetric on Monochrome",
  "8 Color All Positive",
  "4 Color Asymmetric",
  "4 Color Asymmetric on Monochrome",
  "4 Color Symmetric",
  "4 Color Symmetric on Monochrome",
  "4 Color All Positive",
  "3 Color Asymmetric",
  "3 Color Asymmetric on Monochrome",
  "3 Color Symmetric",
  "3 Color Symmetric on Monochrome",
  "2 Color Symmetric",
  "Experimental 1",
  "Experimental 2",
  "Experimental 3",
  "Experimental 4"
];

let color_arrays_rgb = [
  [0.941,0.973,1.000],
  [0.980,0.922,0.843],
  [0.000,1.000,1.000],
  [0.498,1.000,0.831],
  [0.941,1.000,1.000],
  [0.961,0.961,0.863],
  [1.000,0.894,0.769],
  [0.000,0.000,0.000],
  [1.000,0.922,0.804],
  [0.000,0.000,1.000],
  [0.541,0.169,0.886],
  [0.647,0.165,0.165],
  [0.871,0.722,0.529],
  [0.373,0.620,0.627],
  [0.498,1.000,0.000],
  [0.824,0.412,0.118],
  [1.000,0.498,0.314],
  [0.392,0.584,0.929],
  [1.000,0.973,0.863],
  [0.863,0.078,0.235],
  [0.000,1.000,1.000],
  [0.000,0.000,0.545],
  [0.000,0.545,0.545],
  [0.722,0.525,0.043],
  [0.663,0.663,0.663],
  [0.663,0.663,0.663],
  [0.000,0.392,0.000],
  [0.741,0.718,0.420],
  [0.545,0.000,0.545],
  [0.333,0.420,0.184],
  [1.000,0.549,0.000],
  [0.600,0.196,0.800],
  [0.545,0.000,0.000],
  [0.914,0.588,0.478],
  [0.561,0.737,0.561],
  [0.282,0.239,0.545],
  [0.184,0.310,0.310],
  [0.184,0.310,0.310],
  [0.000,0.808,0.820],
  [0.580,0.000,0.827],
  [1.000,0.078,0.576],
  [0.000,0.749,1.000],
  [0.412,0.412,0.412],
  [0.412,0.412,0.412],
  [0.118,0.565,1.000],
  [0.698,0.133,0.133],
  [1.000,0.980,0.941],
  [0.133,0.545,0.133],
  [1.000,0.000,1.000],
  [0.863,0.863,0.863],
  [0.973,0.973,1.000],
  [1.000,0.843,0.000],
  [0.855,0.647,0.125],
  [0.502,0.502,0.502],
  [0.502,0.502,0.502],
  [0.000,0.502,0.000],
  [0.678,1.000,0.184],
  [0.941,1.000,0.941],
  [1.000,0.412,0.706],
  [0.804,0.361,0.361],
  [0.294,0.000,0.510],
  [1.000,1.000,0.941],
  [0.941,0.902,0.549],
  [0.902,0.902,0.980],
  [1.000,0.941,0.961],
  [0.486,0.988,0.000],
  [1.000,0.980,0.804],
  [0.678,0.847,0.902],
  [0.941,0.502,0.502],
  [0.878,1.000,1.000],
  [0.980,0.980,0.824],
  [0.827,0.827,0.827],
  [0.827,0.827,0.827],
  [0.565,0.933,0.565],
  [1.000,0.714,0.757],
  [1.000,0.627,0.478],
  [0.125,0.698,0.667],
  [0.529,0.808,0.980],
  [0.467,0.533,0.600],
  [0.467,0.533,0.600],
  [0.690,0.769,0.871],
  [1.000,1.000,0.878],
  [0.000,1.000,0.000],
  [0.196,0.804,0.196],
  [0.980,0.941,0.902],
  [1.000,0.000,1.000],
  [0.502,0.000,0.000],
  [0.400,0.804,0.667],
  [0.000,0.000,0.804],
  [0.729,0.333,0.827],
  [0.576,0.439,0.859],
  [0.235,0.702,0.443],
  [0.482,0.408,0.933],
  [0.000,0.980,0.604],
  [0.282,0.820,0.800],
  [0.780,0.082,0.522],
  [0.098,0.098,0.439],
  [0.961,1.000,0.980],
  [1.000,0.894,0.882],
  [1.000,0.894,0.710],
  [1.000,0.871,0.678],
  [0.000,0.000,0.502],
  [0.992,0.961,0.902],
  [0.502,0.502,0.000],
  [0.420,0.557,0.137],
  [1.000,0.647,0.000],
  [1.000,0.271,0.000],
  [0.855,0.439,0.839],
  [0.933,0.910,0.667],
  [0.596,0.984,0.596],
  [0.686,0.933,0.933],
  [0.859,0.439,0.576],
  [1.000,0.937,0.835],
  [1.000,0.855,0.725],
  [0.804,0.522,0.247],
  [1.000,0.753,0.796],
  [0.867,0.627,0.867],
  [0.690,0.878,0.902],
  [0.502,0.000,0.502],
  [0.400,0.200,0.600],
  [1.000,0.000,0.000],
  [0.737,0.561,0.561],
  [0.255,0.412,0.882],
  [0.545,0.271,0.075],
  [0.980,0.502,0.447],
  [0.957,0.643,0.376],
  [0.180,0.545,0.341],
  [1.000,0.961,0.933],
  [0.627,0.322,0.176],
  [0.753,0.753,0.753],
  [0.529,0.808,0.922],
  [0.416,0.353,0.804],
  [0.439,0.502,0.565],
  [0.439,0.502,0.565],
  [1.000,0.980,0.980],
  [0.000,1.000,0.498],
  [0.275,0.510,0.706],
  [0.824,0.706,0.549],
  [0.000,0.502,0.502],
  [0.847,0.749,0.847],
  [1.000,0.388,0.278],
  [0.251,0.878,0.816],
  [0.933,0.510,0.933],
  [0.961,0.871,0.702],
  [1.000,1.000,1.000],
  [0.961,0.961,0.961],
  [1.000,1.000,0.000],
  [0.604,0.804,0.196]
]

function getColor() {
  let color_arrays_length = color_arrays_rgb.length - 1;
  let seed_no = getRandomInt(0, color_arrays_length);
  let color_name = color_arrays_rgb[seed_no];
  color_arrays_rgb.splice(seed_no, 1);
  return color_name;
}

let base_color_selector = getRandomInt(0, 100);
let base_color = [0.0, 0.0, 0.0];
if (base_color_selector < 33) {
  base_color = [1.0, 1.0, 1.0];
} else if (base_color_selector < 66) {
  let gray = getRandomFloat(0.0, 1.0);
  base_color = [gray.toFixed(2), gray.toFixed(2), gray.toFixed(2)];
}

let color1 = getColor();
let color2 = getColor();
let color3 = getColor();
let color4 = getColor();
let color5 = getColor();
let color6 = getColor();
let color7 = getColor();
let color8 = getColor();

let color_val_1 = getRandomFloat(0, 1);
let color_val_2 = getRandomFloat(0, 1);
let color_val_3 = getRandomFloat(0, 1);
let color_val_4 = getRandomFloat(0, 1);
let color_val_5 = getRandomFloat(0, 1);
let color_val_6 = getRandomFloat(0, 1);

let color_scheme;
let color_scheme_selector = getRandomInt(0, 100);
if (color_scheme_selector < 5) { 
  color_scheme = getRandomInt(1, 3);
}
else if (color_scheme_selector < 10) {
  color_scheme = getRandomInt(19, 22);
}
else {
  color_scheme = getRandomInt(4, 18);
}

let word1_array = ["Exponential", "Division", "Rotary", "Tensor", "Earnest", "Contention", "Benevolent", "Retraction", "Apocalyptic", "Serial", "Diffusion", "Analogue", "Independance", "Counterparty", "Explanation", "Material", "Digital", "Disparate", "Asymmetrical", "Symmetrical", "Incongruous", "Variegates", "Ambiguous", "Acoustic", "Symptomatic", "Academic", "Pattern", "Uniform", "Volcanic", "Natural", "Interdisciplinary", "Practical", "Ontological", "Anthropic", "Fundamental"];
let word2_array = ["Protraction", "Permanence", "Extension", "Endurance", "Arrangement", "Production", "Obstacle", "Conflict", "Hypnosis", "Fluctuation", "Settlement", "Stealth", "Communication", "Continuance", "Correlation", "Counterpoint", "Expression", "Waveform", "Divergent", "Rotundary", "Distance", "Velocity", "Transcendence", "Supremacy", "Calculation", "Relativity", "Statistic", "Partical", "Threshold"];
let word3_array = ["Resolution", "Recognition", "Chladni", "Revelation", "Engagement", "Divination", "Movement", "Continuity", "Progression", "Indication", "Dissonance", "Heterogeneous", "Inconsistency", "Prevarocation", "Transformation", "Observation", "Vibration", "Meteorite", "Resonating", "Opposition", "Concentration", "Frequency", "Consolidation", "Formation", "Demonstration", "Manifestation", "Conservation", "Inaccuracy", "Interaction", "Precision", "Computation", "Application"];
let word4_array = ["Appliance", "Application", "Assertion", "Acknowledgement", "Declaration", "Communication", "Thesis", "Exposition", "Exercise", "Quandry", "Dispute", "Drama", "Dilemma", "Suggestion", "Proposal", "Problem", "Broadcast", "Exposition", "Epiphany", "Succession", "Series", "Correspondence", "Phenomenon", "Conclusion", "Anthology", "Philosophy", "Membrane", "Super-position", "Technique", "Figures", "Hypothesis", "Model"];

let word1 = word1_array[getRandomInt(0, word1_array.length-1)];
let word2 = word2_array[getRandomInt(0, word2_array.length-1)];
let word3 = word3_array[getRandomInt(0, word3_array.length-1)];
let word4 = word4_array[getRandomInt(0, word4_array.length-1)];

let quilting_word = getRandomInt(1, 3);

if (quilting_word == 1) {
  word1 = "Quilting"
} else if (quilting_word == 2) {
  word2 = "Quilting"
} else if (quilting_word == 3) {
  word3 = "Quilting"
}

let title = `${word1} ${word2} ${word3} ${word4}`;


console.log(`
a_init: ${a_init}, a_freq: ${a_freq}
b_init: ${b_init}, b_freq: ${b_freq}
n_init: ${n_init}, n_freq: ${n_freq}
m_init: ${m_init}, m_freq: ${m_freq}
scale_amount: ${scale_amount.toFixed(4)}
round_amount: ${round_amount.toFixed(4)}
color_scheme: ${color_scheme}
base_color: ${base_color}
color_palette: [
  [${color1}],
  [${color2}],
  [${color3}],
  [${color4}],
  [${color5}],
  [${color6}],
  [${color7}],
  [${color8}]
]
color_threshold_init: ${color_threshold_init.toFixed(4)}
color_threshold_freq: ${color_threshold_freq.toFixed(4)}
color_threshold_min: ${color_threshold_min}
color_threshold_max: ${color_threshold_max}
global_speed: ${global_speed}
`);

$fx.features({
  "Title": title,
  "Colorization Schematic": color_scheme_names[color_scheme-1],
  "Color Palette": "Individual",
  "Pixel Size": round_amount.toFixed(),
  "a/b Context": settings_name_array_ab[settings_selector],
  "n/m Context": settings_name_array_nm[settings_selector]
});

let ms;

let window_width = window.innerWidth;
let window_height = window.innerHeight;

function preload() {
    ms = loadShader('chladni.vert', 'chladni.frag');
}

function setup() {
    let canvas = createCanvas(window_width, window_height, WEBGL);
    canvas.mouseClicked(playPause);
    pixelDensity(1);
    noStroke();
    shader(ms);
    frameRate(25);
}

function draw() {
    let time_perc = getCurrentTimePerc() * 100;
    let global_position = time_perc * global_speed

    let sine_a = sin(global_position * a_freq + a_init);
    let a = map(sine_a, -1, 1, -5000, 5000);
    let sine_n = sin(global_position * n_freq + n_init);
    let n = map(sine_n, -1, 1, -1000, 1000);
    let sine_b = sin(global_position * b_freq + b_init);
    let b = map(sine_b, -1, 1, -5000, 5000);
    let sine_m = sin(global_position * m_freq + m_init);
    let m = map(sine_m, -1, 1, -1000, 1000);

    let sine_color_threshold = sin(global_position * color_threshold_freq + color_threshold_init);
    color_threshold = map(sine_color_threshold, -1, 1, color_threshold_min, color_threshold_max);

    ms.setUniform('window_width', window_width);
    ms.setUniform('window_height', window_height);
  
    ms.setUniform('a', a);
    ms.setUniform('n', n);
    ms.setUniform('b', b);
    ms.setUniform('m', m);
  
    ms.setUniform('scale_amount', scale_amount);
    ms.setUniform('round_amount', round_amount);

    ms.setUniform('color_scheme', color_scheme);
    ms.setUniform('color_threshold', color_threshold);
    ms.setUniform('global_speed', global_speed);

    ms.setUniform('base_color', base_color);

    ms.setUniform('color1', color1);
    ms.setUniform('color2', color2);
    ms.setUniform('color3', color3);
    ms.setUniform('color4', color4);
    ms.setUniform('color5', color5);
    ms.setUniform('color6', color6);
    ms.setUniform('color7', color7);
    ms.setUniform('color8', color8);

    ms.setUniform('color_val_1', color_val_1);
    ms.setUniform('color_val_2', color_val_2);
    ms.setUniform('color_val_3', color_val_3);
    ms.setUniform('color_val_4', color_val_4);
    ms.setUniform('color_val_5', color_val_5);
    ms.setUniform('color_val_6', color_val_6);
  
    rect(-width / 2, -height / 2, width, height);

}


function debounce(func){
  var timer;
  return function(event){
      if(timer) clearTimeout(timer);
      timer = setTimeout(func,100,event);
  };
}

window.addEventListener("resize",debounce(function(e){
  resizeCanvas(windowWidth, windowHeight);
  window_width = windowWidth;
  window_height = windowHeight;
}));
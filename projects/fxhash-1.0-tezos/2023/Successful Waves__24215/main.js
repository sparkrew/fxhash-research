function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(fxrand() * (max - min + 1)) + min;
}

function getRandomFloat(min, max) {
    return (fxrand() * (min - max) + max); // (fxrand() * (max - min + 1)) + min;
}

let brush_functions = [];

const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let loading = document.getElementById("loading");
let title = document.getElementById("title");

let window_w, window_h;

if (params.w) {
    window_w = parseInt(params.w);
} else {
    window_w = window.innerWidth;
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
}
if (params.h) {
    window_h = parseInt(params.h);
} else {
    window_h = window.innerHeight;
}

let canvas;
let looping = true;

let brush_function_index = getRandomInt(0, 4);
let brush_match_h_and_w = getRandomInt(0, 1) >= 0.5? true : false;
let max_brush_size = window_w/5;
let brush_w, brush_h;
let no_of_columns = getRandomInt(1, 10);
let no_of_rows = getRandomInt(1, 10);
let brush_size_always_the_same = getRandomInt(0, 100) >= 50 ? true : false;
let brush_type_always_the_same = getRandomInt(0, 100) >= 50 ? true : false;
let change_colorscheme_each_wave = getRandomInt(0, 100) >= 95 ? true : false;
let skip_every_start = getRandomInt(2, 8);
let extra_spacious_brushes = getRandomInt(0, 100) >= 90 ? true : false;
let extra_spacious_brushes_multiplier = getRandomInt(2, 6);

let wave_start_inc_max = window_w/6 > 400 ? 400 : window_w/6;
let wave_start_inc = getRandomInt(window_w/20, wave_start_inc_max);
let waves_l_or_r = getRandomInt(0, 100) >= 50 ? "l" : "r";
let inc_from_top_or_bottom = getRandomInt(0, 100) >= 50 ? "top" : "bottom";
let wave_x_inc = waves_l_or_r == "r" ? getRandomFloat(0.2, 2) : getRandomFloat(-2, -0.2);
let wave_y_inc = getRandomFloat(0.01, 1);
let wave_x_or_y = getRandomInt(0, 100) >= 50 ? "x" : "y";

let amp_selector = getRandomInt(0, 100);
let amp = amp_selector < 30 ? 5 : amp_selector < 60 ? 1 : amp_selector < 90 ? 0.5 : 0.1;
let freq = amp == 5 ? getRandomFloat(0.02, 0.002) : amp == 1 ? getRandomFloat(0.05, 0.001) : amp == 0.5 ? getRandomFloat(0.02, 0.001) : getRandomFloat(0.1, 0.01);

let fill_h = getRandomInt(0, 360);
let fill_s = 100;
let fill_l = 50;
let fill_a = 100;
let fill_increment_h = false;
let fill_h_inc = 0.01;
let fill_increment_s = true;
let fill_s_inc = 0.01;
let fill_increment_l = true;
let fill_l_inc = 0.01;
let fill_increment_a = false;
let fill_a_inc = 0.012;

let stroke_h = getRandomInt(0, 360);
let stroke_s = 100;
let stroke_l = 50;
let stroke_a = 100;
let stroke_increment_h = false;
let stroke_h_inc = 0.003;
let stroke_increment_s = false;
let stroke_s_inc = 0.003;
let stroke_increment_l = false;
let stroke_l_inc = 0.0035;
let stroke_increment_a = true;
let stroke_a_inc = 0.15;

let grad_h = getRandomInt(0, 360);
let grad_s = 100;
let grad_l = 50;
let grad_a = 100;
let grad_increment_h = false;
let grad_h_inc = 0.02;
let grad_increment_s = true;
let grad_s_inc = 0.3;
let grad_increment_l = true;
let grad_l_inc = 0.35;
let grad_increment_a = false;
let grad_a_inc = 0.05;

let stroke_outline = getRandomInt(0, 100) >= 50 ? true : false;
let stroke_weight = getRandomInt(0, 100) <= 5 ? getRandomInt(1, 5) : 1;
let stroke_weight_4  = getRandomInt(1, 10);
let change_stroke_outline_every_time = getRandomInt(0, 100) >= 50 ? true : false;
let border_radius = getRandomInt(0, 100) >= 50 ? getRandomInt(0, 100) : 1;

let fx_previewed = false;


let color_schemes = [];

color_schemes.push(function sameStartHues_45degRotations() {
    let universal_hue_start = getRandomInt(0, 360);
    fill_h = universal_hue_start;
    fill_s = 100;
    fill_l = 50;
    fill_a = 100;
    fill_increment_h = true;
    fill_h_inc = 45;
    fill_increment_s = true;
    fill_s_inc = 0.1;
    fill_increment_l = true;
    fill_l_inc = 0.12;
    fill_increment_a = false;
    fill_a_inc = 0.01;

    stroke_h = universal_hue_start;
    stroke_s = 100;
    stroke_l = 50;
    stroke_a = 100;
    stroke_increment_h = true;
    stroke_h_inc = 45;
    stroke_increment_s = true;
    stroke_s_inc = 0.01;
    stroke_increment_l = true;
    stroke_l_inc = 0.012;
    stroke_increment_a = false;
    stroke_a_inc = 1;

    grad_h = universal_hue_start;
    grad_s = 100;
    grad_l = 50;
    grad_a = 100;
    grad_increment_h = true;
    grad_h_inc = 45;
    grad_increment_s = true;
    grad_s_inc = 1;
    grad_increment_l = true;
    grad_l_inc = 1;
    grad_increment_a = false;
    grad_a_inc = 1;
})

color_schemes.push(function sameStartHues_90degRotations() {
    let universal_hue_start = getRandomInt(0, 360);
    fill_h = universal_hue_start;
    fill_s = 100;
    fill_l = 50;
    fill_a = 100;
    fill_increment_h = true;
    fill_h_inc = 90;
    fill_increment_s = true;
    fill_s_inc = 0.1;
    fill_increment_l = true;
    fill_l_inc = 0.12;
    fill_increment_a = false;
    fill_a_inc = 0.01;

    stroke_h = universal_hue_start;
    stroke_s = 100;
    stroke_l = 50;
    stroke_a = 100;
    stroke_increment_h = true;
    stroke_h_inc = 90;
    stroke_increment_s = true;
    stroke_s_inc = 0.01;
    stroke_increment_l = true;
    stroke_l_inc = 0.012;
    stroke_increment_a = false;
    stroke_a_inc = 1;

    grad_h = universal_hue_start;
    grad_s = 100;
    grad_l = 50;
    grad_a = 100;
    grad_increment_h = true;
    grad_h_inc = 90;
    grad_increment_s = true;
    grad_s_inc = 1;
    grad_increment_l = true;
    grad_l_inc = 1;
    grad_increment_a = false;
    grad_a_inc = 1;
})

color_schemes.push(function sameStartHues_120degRotations() {
    let universal_hue_start = getRandomInt(0, 360);
    fill_h = universal_hue_start;
    fill_s = 100;
    fill_l = 50;
    fill_a = 100;
    fill_increment_h = true;
    fill_h_inc = 120;
    fill_increment_s = true;
    fill_s_inc = 0.1;
    fill_increment_l = true;
    fill_l_inc = 0.12;
    fill_increment_a = false;
    fill_a_inc = 0.01;

    stroke_h = universal_hue_start;
    stroke_s = 100;
    stroke_l = 50;
    stroke_a = 100;
    stroke_increment_h = true;
    stroke_h_inc = 120;
    stroke_increment_s = true;
    stroke_s_inc = 0.01;
    stroke_increment_l = true;
    stroke_l_inc = 0.012;
    stroke_increment_a = false;
    stroke_a_inc = 1;

    grad_h = universal_hue_start;
    grad_s = 100;
    grad_l = 50;
    grad_a = 100;
    grad_increment_h = true;
    grad_h_inc = 120;
    grad_increment_s = true;
    grad_s_inc = 1;
    grad_increment_l = true;
    grad_l_inc = 1;
    grad_increment_a = false;
    grad_a_inc = 1;
})

color_schemes.push(function sameStartHues_120degRotations() {
    let universal_hue_start = getRandomInt(0, 360);
    fill_h = universal_hue_start;
    fill_s = 100;
    fill_l = 50;
    fill_a = 100;
    fill_increment_h = true;
    fill_h_inc = 180;
    fill_increment_s = true;
    fill_s_inc = 0.1;
    fill_increment_l = true;
    fill_l_inc = 0.12;
    fill_increment_a = false;
    fill_a_inc = 0.01;

    stroke_h = universal_hue_start;
    stroke_s = 100;
    stroke_l = 50;
    stroke_a = 100;
    stroke_increment_h = true;
    stroke_h_inc = 180;
    stroke_increment_s = true;
    stroke_s_inc = 0.01;
    stroke_increment_l = true;
    stroke_l_inc = 0.012;
    stroke_increment_a = false;
    stroke_a_inc = 1;

    grad_h = universal_hue_start;
    grad_s = 100;
    grad_l = 50;
    grad_a = 100;
    grad_increment_h = true;
    grad_h_inc = 180;
    grad_increment_s = true;
    grad_s_inc = 1;
    grad_increment_l = true;
    grad_l_inc = 1;
    grad_increment_a = false;
    grad_a_inc = 1;
})

color_schemes.push(function slowRainbows() { 
    fill_h = getRandomInt(0, 360);
    fill_s = 100;
    fill_l = 50;
    fill_a = 100;
    fill_increment_h = true;
    fill_h_inc = getRandomFloat(0.001, 0.01);
    fill_increment_s = false;
    fill_s_inc = 0.1;
    fill_increment_l = false;
    fill_l_inc = 0.12;
    fill_increment_a = false;
    fill_a_inc = 0.01;

    stroke_h = getRandomInt(0, 360);
    stroke_s = 100;
    stroke_l = 50;
    stroke_a = 100;
    stroke_increment_h = true;
    stroke_h_inc = getRandomFloat(0.001, 0.01);
    stroke_increment_s = false;
    stroke_s_inc = 0.01;
    stroke_increment_l = false;
    stroke_l_inc = 0.012;
    stroke_increment_a = false;
    stroke_a_inc = 1;

    grad_h = getRandomInt(0, 360);
    grad_s = 100;
    grad_l = 50;
    grad_a = 100;
    grad_increment_h = true;
    grad_h_inc = getRandomFloat(0.001, 0.01);
    grad_increment_s = false;
    grad_s_inc = 1;
    grad_increment_l = false;
    grad_l_inc = 1;
    grad_increment_a = false;
    grad_a_inc = 1;
})

color_schemes.push(function fastRainbows() { 
    fill_h = getRandomInt(0, 360); // 0 = rgb, 180 = cmy
    fill_s = 100;
    fill_l = 50;
    fill_a = 100;
    fill_increment_h = true;
    fill_h_inc = getRandomFloat(0.1, 2);
    fill_increment_s = false;
    fill_s_inc = 0.1;
    fill_increment_l = false;
    fill_l_inc = 0.12;
    fill_increment_a = false;
    fill_a_inc = 0.01;

    stroke_h = getRandomInt(0, 360);
    stroke_s = 100;
    stroke_l = 50;
    stroke_a = 100;
    stroke_increment_h = true;
    stroke_h_inc = getRandomFloat(0.1, 2);
    stroke_increment_s = false;
    stroke_s_inc = 0.01;
    stroke_increment_l = false;
    stroke_l_inc = 0.012;
    stroke_increment_a = false;
    stroke_a_inc = 1;

    grad_h = getRandomInt(0, 360);
    grad_s = 100;
    grad_l = 50;
    grad_a = 100;
    grad_increment_h = true;
    grad_h_inc = getRandomFloat(10, 0.01); // 30?
    grad_increment_s = false;
    grad_s_inc = 1;
    grad_increment_l = false;
    grad_l_inc = 1;
    grad_increment_a = false;
    grad_a_inc = 1;
})

color_schemes.push(function monochromeWithGradRainbow() {
    fill_h = getRandomInt(0, 360); // 0 = rgb, 180 = cmy
    fill_s = 0;
    fill_l = 50;
    fill_a = 100;
    fill_increment_h = true;
    fill_h_inc = 45; // getRandomFloat(0.1, 2);
    fill_increment_s = false;
    fill_s_inc = 0.1;
    fill_increment_l = true;
    fill_l_inc = 0.01;
    fill_increment_a = false;
    fill_a_inc = 0.01;

    stroke_h = getRandomInt(0, 360);
    stroke_s = 0;
    stroke_l = 50;
    stroke_a = 100;
    stroke_increment_h = true;
    stroke_h_inc = 45; // getRandomFloat(0.1, 2);
    stroke_increment_s = false;
    stroke_s_inc = 0.01;
    stroke_increment_l = true;
    stroke_l_inc = 0.01;
    stroke_increment_a = false;
    stroke_a_inc = 1;

    grad_h = getRandomInt(0, 360);
    grad_s = 100;
    grad_l = 50;
    grad_a = 100;
    grad_increment_h = true;
    grad_h_inc = 0.005; // getRandomFloat(10, 0.01); // 30?
    grad_increment_s = false;
    grad_s_inc = 1;
    grad_increment_l = true;
    grad_l_inc = 1;
    grad_increment_a = false;
    grad_a_inc = 1;
})

color_schemes.push(function monochromeWithStrokeRainbow() {
    fill_h = getRandomInt(0, 360); // 0 = rgb, 180 = cmy
    fill_s = 0;
    fill_l = 50;
    fill_a = 100;
    fill_increment_h = true;
    fill_h_inc = 45; // getRandomFloat(0.1, 2);
    fill_increment_s = false;
    fill_s_inc = 0.1;
    fill_increment_l = true;
    fill_l_inc = 0.01;
    fill_increment_a = false;
    fill_a_inc = 0.01;

    stroke_h = getRandomInt(0, 360);
    stroke_s = 0;
    stroke_l = 50;
    stroke_a = 100;
    stroke_increment_h = true;
    stroke_h_inc = 45; // getRandomFloat(0.1, 2);
    stroke_increment_s = false;
    stroke_s_inc = 0.01;
    stroke_increment_l = true;
    stroke_l_inc = 0.01;
    stroke_increment_a = false;
    stroke_a_inc = 1;

    grad_h = getRandomInt(0, 360);
    grad_s = 100;
    grad_l = 50;
    grad_a = 100;
    grad_increment_h = true;
    grad_h_inc = 0.005; // getRandomFloat(10, 0.01); // 30?
    grad_increment_s = false;
    grad_s_inc = 1;
    grad_increment_l = true;
    grad_l_inc = 1;
    grad_increment_a = false;
    grad_a_inc = 1;

    stroke_outline = true;
})

color_schemes.push(function monochromeWithFillRainbow() {
    fill_h = getRandomInt(0, 360); // 0 = rgb, 180 = cmy
    fill_s = 100;
    fill_l = 50;
    fill_a = 100;
    fill_increment_h = true;
    fill_h_inc = 45; // getRandomFloat(0.1, 2);
    fill_increment_s = false;
    fill_s_inc = 0.1;
    fill_increment_l = true;
    fill_l_inc = 0.01;
    fill_increment_a = false;
    fill_a_inc = 0.01;

    stroke_h = getRandomInt(0, 360);
    stroke_s = 0;
    stroke_l = 50;
    stroke_a = 100;
    stroke_increment_h = true;
    stroke_h_inc = 45; // getRandomFloat(0.1, 2);
    stroke_increment_s = false;
    stroke_s_inc = 0.01;
    stroke_increment_l = true;
    stroke_l_inc = 0.01;
    stroke_increment_a = false;
    stroke_a_inc = 1;

    grad_h = getRandomInt(0, 360);
    grad_s = 0;
    grad_l = 50;
    grad_a = 100;
    grad_increment_h = false;
    grad_h_inc = 0.005; // getRandomFloat(10, 0.01); // 30?
    grad_increment_s = false;
    grad_s_inc = 1;
    grad_increment_l = true;
    grad_l_inc = 1;
    grad_increment_a = false;
    grad_a_inc = 1;
})

color_schemes.push(function monochromeWithFillSingleColor() {
    fill_h = getRandomInt(0, 360); // 0 = rgb, 180 = cmy
    fill_s = 100;
    fill_l = 50;
    fill_a = 100;
    fill_increment_h = false;
    fill_h_inc = 45; // getRandomFloat(0.1, 2);
    fill_increment_s = false;
    fill_s_inc = 0.1;
    fill_increment_l = true;
    fill_l_inc = 0.01;
    fill_increment_a = false;
    fill_a_inc = 0.01;

    stroke_h = getRandomInt(0, 360);
    stroke_s = 0;
    stroke_l = 50;
    stroke_a = 100;
    stroke_increment_h = true;
    stroke_h_inc = 45; // getRandomFloat(0.1, 2);
    stroke_increment_s = false;
    stroke_s_inc = 0.01;
    stroke_increment_l = true;
    stroke_l_inc = 0.01;
    stroke_increment_a = false;
    stroke_a_inc = 1;

    grad_h = getRandomInt(0, 360);
    grad_s = 0;
    grad_l = 50;
    grad_a = 100;
    grad_increment_h = false;
    grad_h_inc = 0.005; // getRandomFloat(10, 0.01); // 30?
    grad_increment_s = false;
    grad_s_inc = 1;
    grad_increment_l = true;
    grad_l_inc = 1;
    grad_increment_a = false;
    grad_a_inc = 1;
})

color_schemes.push(function mostThingsOn_AlphaStroke() {
    fill_h = getRandomInt(0, 360); // 0 = rgb, 180 = cmy
    fill_s = 100;
    fill_l = 50;
    fill_a = 100;
    fill_increment_h = true;
    fill_h_inc = 0.1; // getRandomFloat(0.1, 2);
    fill_increment_s = true;
    fill_s_inc = 0.01; // getRandomFloat(0.001, 0.5);
    fill_increment_l = true;
    fill_l_inc = 0.01; // getRandomFloat(0.001, 0.5);
    fill_increment_a = false;
    fill_a_inc = 0.1;

    stroke_h = getRandomInt(0, 360);
    stroke_s = 100;
    stroke_l = 50;
    stroke_a = 100;
    stroke_increment_h = true;
    stroke_h_inc = 0.1; // getRandomFloat(0.1, 2);
    stroke_increment_s = true;
    stroke_s_inc = 0.01; // getRandomFloat(0.001, 0.5);
    stroke_increment_l = true;
    stroke_l_inc = 0.01; // getRandomFloat(0.001, 0.5);
    stroke_increment_a = true;
    stroke_a_inc = 0.01;

    grad_h = getRandomInt(0, 360);
    grad_s = 100;
    grad_l = 50;
    grad_a = 100;
    grad_increment_h = true;
    grad_h_inc = 5; // getRandomFloat(10, 0.01); // 30?
    grad_increment_s = true;
    grad_s_inc = 1;
    grad_increment_l = true;
    grad_l_inc = 1;
    grad_increment_a = false;
    grad_a_inc = 1;

    stroke_outline = true;
})

color_schemes.push(function mostThingsOn_AlphaAndFillStroke() {
    fill_h = getRandomInt(0, 360); // 0 = rgb, 180 = cmy
    fill_s = 100;
    fill_l = 50;
    fill_a = 100;
    fill_increment_h = true;
    fill_h_inc = 0.01; // getRandomFloat(0.1, 2);
    fill_increment_s = true;
    fill_s_inc = 0.01; // getRandomFloat(0.001, 0.5);
    fill_increment_l = true;
    fill_l_inc = 0.011; // getRandomFloat(0.001, 0.5);
    fill_increment_a = true;
    fill_a_inc = 0.012;

    stroke_h = getRandomInt(0, 360);
    stroke_s = 100;
    stroke_l = 50;
    stroke_a = 100;
    stroke_increment_h = true;
    stroke_h_inc = 0.011; // getRandomFloat(0.1, 2);
    stroke_increment_s = true;
    stroke_s_inc = 0.013; // getRandomFloat(0.001, 0.5);
    stroke_increment_l = true;
    stroke_l_inc = 0.014; // getRandomFloat(0.001, 0.5);
    stroke_increment_a = true;
    stroke_a_inc = 0.015;

    grad_h = getRandomInt(0, 360);
    grad_s = 100;
    grad_l = 50;
    grad_a = 100;
    grad_increment_h = true;
    grad_h_inc = 5; // getRandomFloat(10, 0.01); // 30?
    grad_increment_s = true;
    grad_s_inc = 1;
    grad_increment_l = true;
    grad_l_inc = 1;
    grad_increment_a = false;
    grad_a_inc = 0.05;

    stroke_outline = true;
});

color_schemes.push(function mostThingsOn_SlowWeirdRainbow() {
    fill_h = getRandomInt(0, 360); // 0 = rgb, 180 = cmy
    fill_s = 100;
    fill_l = 50;
    fill_a = 100;
    fill_increment_h = true;
    fill_h_inc = getRandomFloat(0.001, 0.005);
    fill_increment_s = true;
    fill_s_inc = getRandomFloat(0.001, 0.005);
    fill_increment_l = true;
    fill_l_inc = getRandomFloat(0.001, 0.005);
    fill_increment_a = true;
    fill_a_inc = 0.012;

    stroke_h = getRandomInt(0, 360);
    stroke_s = 100;
    stroke_l = 50;
    stroke_a = 100;
    stroke_increment_h = true;
    stroke_h_inc = getRandomFloat(0.001, 0.005);
    stroke_increment_s = true;
    stroke_s_inc = getRandomFloat(0.001, 0.005);
    stroke_increment_l = true;
    stroke_l_inc = getRandomFloat(0.001, 0.005);
    stroke_increment_a = true;
    stroke_a_inc = 0.015;

    grad_h = getRandomInt(0, 360);
    grad_s = 100;
    grad_l = 50;
    grad_a = 100;
    grad_increment_h = true;
    grad_h_inc = getRandomFloat(10, 0.01); // 30?
    grad_increment_s = true;
    grad_s_inc = getRandomFloat(0.5, 3);
    grad_increment_l = true;
    grad_l_inc = getRandomFloat(0.5, 3);
    grad_increment_a = false;
    grad_a_inc = 0.05;

    stroke_outline = true;
})

color_schemes.push(function monochrome_StrokeSingleColor_AlphaFill() {
    fill_h = getRandomInt(0, 360); // 0 = rgb, 180 = cmy
    fill_s = 0;
    fill_l = 50;
    fill_a = 100;
    fill_increment_h = true;
    fill_h_inc = getRandomFloat(0.001, 0.005);
    fill_increment_s = false;
    fill_s_inc = getRandomFloat(0.001, 0.005);
    fill_increment_l = true;
    fill_l_inc = getRandomFloat(0.001, 0.005);
    fill_increment_a = true;
    fill_a_inc = 0.012;

    stroke_h = getRandomInt(0, 360);
    stroke_s = 100;
    stroke_l = 50;
    stroke_a = 50;
    stroke_increment_h = false;
    stroke_h_inc = getRandomFloat(0.001, 0.005);
    stroke_increment_s = false;
    stroke_s_inc = getRandomFloat(0.001, 0.005);
    stroke_increment_l = false;
    stroke_l_inc = getRandomFloat(0.001, 0.005);
    stroke_increment_a = false;
    stroke_a_inc = 0.015;

    grad_h = getRandomInt(0, 360);
    grad_s = 0;
    grad_l = 50;
    grad_a = 100;
    grad_increment_h = true;
    grad_h_inc = getRandomFloat(10, 0.01); // 30?
    grad_increment_s = false;
    grad_s_inc = getRandomFloat(0.5, 3);
    grad_increment_l = true;
    grad_l_inc = getRandomFloat(0.5, 3);
    grad_increment_a = false;
    grad_a_inc = 0.05;

    stroke_outline = true;
})

color_schemes.push(function slowFillRotate_StrokeSingleColor_AlphaFill() {
    fill_h = getRandomInt(0, 360); // 0 = rgb, 180 = cmy
    fill_s = 0;
    fill_l = 50;
    fill_a = 100;
    fill_increment_h = true;
    fill_h_inc = getRandomFloat(0.001, 0.005);
    fill_increment_s = true;
    fill_s_inc = getRandomFloat(0.001, 0.005);
    fill_increment_l = true;
    fill_l_inc = getRandomFloat(0.001, 0.005);
    fill_increment_a = true;
    fill_a_inc = 0.012;

    stroke_h = getRandomInt(0, 360);
    stroke_s = 100;
    stroke_l = 50;
    stroke_a = 100;
    stroke_increment_h = false;
    stroke_h_inc = getRandomFloat(0.001, 0.005);
    stroke_increment_s = true;
    stroke_s_inc = getRandomFloat(0.001, 0.005);
    stroke_increment_l = true;
    stroke_l_inc = getRandomFloat(0.001, 0.005);
    stroke_increment_a = false;
    stroke_a_inc = 0.015;

    grad_h = getRandomInt(0, 360);
    grad_s = 0;
    grad_l = 50;
    grad_a = 100;
    grad_increment_h = true;
    grad_h_inc = getRandomFloat(10, 0.01); // 30?
    grad_increment_s = false;
    grad_s_inc = getRandomFloat(0.5, 3);
    grad_increment_l = true;
    grad_l_inc = getRandomFloat(0.5, 3);
    grad_increment_a = false;
    grad_a_inc = 0.05;

    stroke_outline = true;
})

color_schemes.push(function StrokeBlackorWhite() {
    universal_hue_start = getRandomInt(0, 360);
    fill_h = universal_hue_start;
    fill_s = 100;
    fill_l = 80;
    fill_a = 100;
    fill_increment_h = false;
    fill_h_inc = getRandomFloat(0.001, 0.005);
    fill_increment_s = true;
    fill_s_inc = getRandomFloat(0.001, 0.005);
    fill_increment_l = true;
    fill_l_inc = getRandomFloat(0.001, 0.005);
    fill_increment_a = false;
    fill_a_inc = 0.012;

    stroke_h = getRandomInt(0, 360);
    stroke_s = 100;
    stroke_l = getRandomInt(0, 100) >= 50 ? 0 : 100;
    stroke_a = 100;
    stroke_increment_h = false;
    stroke_h_inc = getRandomFloat(0.001, 0.005);
    stroke_increment_s = false;
    stroke_s_inc = getRandomFloat(0.001, 0.005);
    stroke_increment_l = false;
    stroke_l_inc = getRandomFloat(0.001, 0.005);
    stroke_increment_a = true;
    stroke_a_inc = 0.15; // getRandomFloat(0.001, 0.005);

    grad_h = universal_hue_start; // getRandomInt(0, 360);
    grad_s = 100;
    grad_l = 50;
    grad_a = 100;
    grad_increment_h = false;
    grad_h_inc = 0.02; // getRandomFloat(10, 0.01);
    grad_increment_s = true;
    grad_s_inc = 0.3; // getRandomFloat(0.5, 3);
    grad_increment_l = true;
    grad_l_inc = 0.35; // getRandomFloat(0.5, 3);
    grad_increment_a = false;
    grad_a_inc = 0.05;
})

color_schemes.push(function twoTones() {
    universal_hue_start = getRandomInt(0, 360);
    fill_h = universal_hue_start; // getRandomInt(0, 360);
    fill_s = 100;
    fill_l = 80;
    fill_a = 100;
    fill_increment_h = false;
    fill_h_inc = getRandomFloat(0.001, 0.005);
    fill_increment_s = true;
    fill_s_inc = getRandomFloat(0.001, 0.005);
    fill_increment_l = true;
    fill_l_inc = getRandomFloat(0.001, 0.005);
    fill_increment_a = false;
    fill_a_inc = 0.012;

    stroke_h = universal_hue_start +90; // (0, 360);
    stroke_s = 100;
    stroke_l = 50; // getRandomInt(0, 100) >= 50 ? 0 : 100;
    stroke_a = 100;
    stroke_increment_h = false;
    stroke_h_inc = getRandomFloat(0.001, 0.005);
    stroke_increment_s = false;
    stroke_s_inc = getRandomFloat(0.001, 0.005);
    stroke_increment_l = false;
    stroke_l_inc = getRandomFloat(0.001, 0.005);
    stroke_increment_a = true;
    stroke_a_inc = 0.15; // getRandomFloat(0.001, 0.005);

    grad_h = universal_hue_start +90; // getRandomInt(0, 360);
    grad_s = 100;
    grad_l = 50;
    grad_a = 100;
    grad_increment_h = false;
    grad_h_inc = 0.02; // getRandomFloat(10, 0.01);
    grad_increment_s = true;
    grad_s_inc = 0.3; // getRandomFloat(0.5, 3);
    grad_increment_l = true;
    grad_l_inc = 0.35; // getRandomFloat(0.5, 3);
    grad_increment_a = false;
    grad_a_inc = 0.05;

    stroke_outline = true;
})


const wave = async (wave_x, wave_y) => {
    if (!brush_size_always_the_same) {
        setBrushSize();
        setRowsAndColumns();
    }

    if (!brush_type_always_the_same) {
        brush_function_index = getRandomInt(0, 4);
    }

    if (change_colorscheme_each_wave) {
        color_schemes[getRandomInt(0, 16)]();
    }

    if (brush_function_index != 4 && stroke_outline === false) {
        noStroke();
    } else if (brush_function_index != 4 && stroke_outline === true) {
        strokeWeight(stroke_weight);
    }

    if (brush_function_index == 0) {
        no_of_columns = 2 * Math.floor(no_of_columns/2) + 1;
        no_of_rows = 2 * Math.floor(no_of_rows/2) + 1;
    }
    
    while (wave_y < (window_h + max_brush_size) && wave_x > -window_w*2 && wave_x < window_w*2) {
        // await sleep(1);
        if (wave_x_or_y == "y") {
            sin_y = amp * Math.sin(2 * Math.PI * freq * wave_x);
            wave_y = wave_y + sin_y;
        }else if (wave_x_or_y == "x") {
            sin_x = amp * Math.sin(2 * Math.PI * freq * wave_y);
            wave_x = wave_x + sin_x;
        }

        brush_functions[brush_function_index](wave_x, wave_y);

        wave_x = wave_x + wave_x_inc;
        wave_y = wave_y + wave_y_inc;
    }
}

function setup() {
    canvas = createCanvas(window_w, window_h);
    colorMode(HSL, 360, 100, 100, 100);
    background(fill_h, fill_s, fill_l, fill_a);

    setBrushSize();
    noStroke();

    if (wave_x_inc > 0 && inc_from_top_or_bottom == "top") {
        x = window_w + max_brush_size;
        y = -max_brush_size;
    } else if (wave_x_inc > 0 && inc_from_top_or_bottom == "bottom") {
        x = -max_brush_size;
        y = window_h + max_brush_size;
    } else if (wave_x_inc < 0 && inc_from_top_or_bottom == "top") {
        x = -max_brush_size;
        y = -max_brush_size;
    } else if (wave_x_inc < 0 && inc_from_top_or_bottom == "bottom") {
        x = window_w + max_brush_size;
        y = window_h + max_brush_size;
    }

    color_schemes[getRandomInt(0, 16)]();

    title.style.color = `hsla(${fill_h},${fill_s}%,${fill_l}%,1)`;
    title.style.backgroundColor = `hsla(${fill_h+120},${100}%,${fill_l}%,1)`;
}

function draw() {
    if (mouseIsPressed === true) {
        wave(mouseX, mouseY);
    } else {
        if (wave_x_inc > 0 && inc_from_top_or_bottom == "top") {
            if (x > -max_brush_size) {
                wave(x, y);
                x = x - wave_start_inc;
            } else if (y < window_h + max_brush_size) {
                wave(x, y);
                y = y + wave_start_inc;
            } else if (!fx_previewed) {
                loading.remove();
                fxpreview();
                fx_previewed = true;
            }
        } else if (wave_x_inc > 0 && inc_from_top_or_bottom == "bottom") {
            if (y > -max_brush_size) {
                wave(x, y);
                y = y - wave_start_inc;
            } else if (x < window_w + max_brush_size) {
                wave(x, y);
                x = x + wave_start_inc;
            } else if (!fx_previewed) {
                loading.remove();
                fxpreview();
                fx_previewed = true;
            }
        } else if (wave_x_inc < 0 && inc_from_top_or_bottom == "top") {
            if (x < window_w + max_brush_size) {
                wave(x, y);
                x = x + wave_start_inc;
            } else if (y < window_h + max_brush_size) {
                wave(x, y);
                y = y + wave_start_inc;
            } else if (!fx_previewed) {
                loading.remove();
                fxpreview();
                fx_previewed = true;
            }
        } else if (wave_x_inc < 0 && inc_from_top_or_bottom == "bottom") {
            if (y > -max_brush_size) {
                wave(x, y);
                y = y - wave_start_inc;
            } else if (x > -max_brush_size) {
                wave(x, y);
                x = x - wave_start_inc;
            } else if (!fx_previewed) {
                loading.remove();
                fxpreview();
                fx_previewed = true;
            }
        }
    }
}

function keyPressed(e) {
    console.log(keyCode);
    if (keyCode == 83) { // s
        saveCanvas(canvas, 'Successful Waves - ' + fxhash, 'png');
    } else if (keyCode == 68) { // d
        if (looping) {
            looping = false
            noLoop();
            console.log("Drawing disabled");
        } else {
            looping = true;
            loop();
            console.log("Drawing enabled");
        }   
    }
}


function setBrushSize() {
    brush_w = getRandomInt(5, max_brush_size);
    if (brush_match_h_and_w) {
        brush_h = brush_w;
    } else {
        brush_h = getRandomInt(5, max_brush_size);
    }
}

function setRowsAndColumns() {
    no_of_columns = getRandomInt(1, 10);
    no_of_rows = getRandomInt(1, 10);
}

function incrementFills() {
    if (fill_increment_h) {
        fill_h = (fill_h + fill_h_inc) % 360;
    } 
    if (fill_increment_s) {
        fill_s = (fill_s + fill_s_inc) % 100;
    }
    if (fill_increment_l) {
        fill_l = (fill_l + fill_l_inc) % 100;
    }
    if (fill_increment_a) {
        fill_a = (fill_a + fill_a_inc) % 100;
    }
    fill(fill_h, fill_s, fill_l, fill_a);
}

function incrementStrokes() {
    if (stroke_increment_h) {
        stroke_h = (stroke_h + stroke_h_inc) % 360;
    } 
    if (stroke_increment_s) {
        stroke_s = (stroke_s + stroke_s_inc) % 100;
    }
    if (stroke_increment_l) {
        stroke_l = (stroke_l + stroke_l_inc) % 100;
    }
    if (stroke_increment_a) {
        stroke_a = (stroke_a + stroke_a_inc) % 100;
    }

    if (stroke_outline) {
        stroke(stroke_h, stroke_s, stroke_l, stroke_a);
    } else {
        noStroke();
    }
}

function incrementGradientStrokes() {
    if (grad_increment_h) {
        grad_h = (grad_h + grad_h_inc) % 360;
    } 
    if (grad_increment_s) {
        grad_s = (grad_s + grad_s_inc) % 100;
    }
    if (grad_increment_l) {
        grad_l = (grad_l + grad_l_inc) % 100;
    }
    if (grad_increment_a) {
        grad_a = (grad_a + grad_a_inc) % 100;
    }
    stroke(grad_h, grad_s, grad_l, grad_a);
}


brush_functions[0] = function pixelPattern(x, y) {
    let x_start = x;
    let column_w = brush_w / no_of_columns;
    let row_h = brush_h / no_of_rows;
    
    for (let j = 0; j < brush_h; j = j + row_h) {
        for (let i = 0; i < brush_w; i = i + column_w) {
            incrementFills();
            incrementStrokes();

            rect(x, y, column_w+1, row_h+1);
            
            if (extra_spacious_brushes) {
                x = x + (column_w * extra_spacious_brushes_multiplier);
            } else {
                x = x + column_w;
            }
        }
        x = x_start;
        if (extra_spacious_brushes) {
            y = y + (row_h * extra_spacious_brushes_multiplier);
        } else {
            y = y + row_h;
        }
        
    }
}

brush_functions[1] = function verticalStripes(x, y) {
    let column_w = brush_w / no_of_columns;
    let row_h = brush_h;
    
    for (let i = 0; i < brush_w; i = i + column_w) {
        rect(x, y, column_w, row_h, border_radius);

        incrementFills();
        incrementStrokes();

        if (extra_spacious_brushes) {
            x = x + (column_w * extra_spacious_brushes_multiplier);
        } else {
            x = x + column_w;
        }
    }
}

brush_functions[2] = function horizontalStripes(x, y) {
    let x_start = x;
    let column_w = brush_w;
    let row_h = brush_h / no_of_rows;

    for (let i = 0; i < brush_h; i = i + row_h) {
        rect(x, y, column_w, row_h, border_radius);

        incrementFills();
        incrementStrokes();

        x = x_start;

        if (extra_spacious_brushes) {
            y = y + (row_h * extra_spacious_brushes_multiplier);
        } else {
            y = y + row_h;
        }
    }
}

brush_functions[3] = function moduloBrush(x, y) {
    let x_start = x;
    let column_w = brush_w / no_of_columns;
    let row_h = brush_h / no_of_rows;
    
    let skip_every = 2;
    let skip_counter = 0;
    
    for (let j = 0; j < brush_h; j = j + row_h) {
        for (let i = 0; i < brush_w; i = i + column_w) {
            if (skip_counter % skip_every == 0) {
                rect(x, y, column_w, row_h, border_radius);
                incrementFills();
                incrementStrokes();
            }

            if (extra_spacious_brushes) {
                x = x + (column_w * 2);
            } else {
                x = x + column_w;
            }

            skip_counter++;
        }
        x = x_start
        if (extra_spacious_brushes) {
            y = y + (row_h * extra_spacious_brushes_multiplier);
        } else {
            y = y + row_h;
        }
    }
}

brush_functions[4] = function gradientBrush(x, y) {
    strokeWeight(stroke_weight_4);

    let x_start = x;

    for (let i = 0; i <= brush_w; i++) {
        x = x_start + i;

        line(x, y, x, y + brush_h);
        incrementGradientStrokes()
    }
}




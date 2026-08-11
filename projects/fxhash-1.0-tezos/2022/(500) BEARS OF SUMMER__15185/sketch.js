/*

   _   _   _   _   _     _   _   _   _   _     _   _     _   _   _   _   _   _  
  / \ / \ / \ / \ / \   / \ / \ / \ / \ / \   / \ / \   / \ / \ / \ / \ / \ / \ 
 ( ( | 5 | 0 | 0 | ) ) ( B | E | A | R | S ) ( O | F ) ( S | U | M | M | E | R )
  \_/ \_/ \_/ \_/ \_/   \_/ \_/ \_/ \_/ \_/   \_/ \_/   \_/ \_/ \_/ \_/ \_/ \_/ 

ฅʕ'ᴥ'ʔฅ ʕ•ᴥ•ʔっ ฅʕ•ᴥ•ʔฅ ʕ ꈍᴥꈍʔ ⋐ʕ˵• ᴥ •˵ʔ⋑ ＼ʕ•ᴥ•ʔ／ ʕっ￫ᴥ￩ʔっ ʕ♥ᴥ♥ʔ ʕ♥ᴥ♥ʔ ʕಠಿᴥಠʔ (ᵔᴥᵔ)
                                                           
                                                           
"(500) BEARS OF SUMMER" BY THOMAS NOYA | GENERATIVE PROJECT FOR FX(HASH) | JUNE 2022
IG: @TSNOYA | TT: @O2HT | THOMASNOYA.COM | linktr.ee/tsnoya    

Copyright (©) 2022 Thomas Noya
Licensed under CC BY-NC-SA 4.0

"This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA."

PLEASE DO NOT STRAIGHT UP COPY OUR CODE, WE'VE LEFT IT EASY TO READ SO YOU CAN STUDY IT AND UNDERSTAND IT. BUILD ON TOP OF IT. EXPERIMENT. DON'T BE AN ASSHOLE

With help from:
http://www.generative-gestaltung.de
https://github.com/aferriss/p5jsShaderExamples

Licensed under the Apache License, Version 2.0 (the "License");
You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
*/

let canvasSize = 1000;
let u_Size = 128;

let tex = [];

let tileCount;
let tileWidth;
let tileHeight;
let tileDepth;

let shapeAngle;
let maxDist;

let mult_1, mult_2, mult_3, mult_4;
let ranX, ranY;

let myColor;

let which_prim;
let which_rot;
let which_translate;

let seed_1, seed_2, seed_3, seed_4;

let shader_Pattern;
let shader_Gradient;
let shaderTexture_1;
let shaderTexture_2;

let system;

let start, end, elapsed;

function preload() { 
    start = millis();
    for (i = 1; i < 36; i++) {     
        tex[i] = loadImage("assets_1/tex_" + i + ".jpg");
    } 
    shader_Pattern = loadShader('s_pattern.vert','s_pattern.frag');
    shader_Gradient = loadShader('s_gradient.vert','s_gradient.frag');
}

function setup() {
    createCanvas(canvasSize, canvasSize, WEBGL);
    pixelDensity(3);
    noStroke();
    
    shaderTexture_1 = createGraphics(u_Size, u_Size, WEBGL);
    shaderTexture_1.noStroke();
    shaderTexture_2 = createGraphics(u_Size, u_Size, WEBGL);
    shaderTexture_2.noStroke();
    
    // 1 = SMALL | 2 = MEDIUM | 3 = LARGE V1 | 4 = LARGE V2
    system = int(map(fxrand(), 0, 1, 1, 5));
    
    tileCount = int(map(fxrand(), 0, 1, 55, 251));
    tileWidth = width / tileCount;
    tileHeight = height / tileCount;
    tileDepth = width / tileCount; 
    
    maxDist = sqrt(pow(width, 2) - pow(height, 2));
    shapeAngle = int(map(fxrand(), 0, 1, 0, 15));
    
    ranX = int(map(fxrand(), 0, 1, 150, 850));
    ranY = int(map(fxrand(), 0, 1, 150, 850));
    
    if (system == 1) {
        mult_1 = int(map(fxrand(), 0, 1, 10, 36));
    }
    else if (system == 2) {
        mult_1 = int(map(fxrand(), 0, 1, 15, 81));
    }
    else if (system == 3) {
        mult_1 = int(map(fxrand(), 0, 1, 90, 256));
    }
    else if (system == 4) {
        mult_1 = int(map(fxrand(), 0, 1, 150, 256));
    }
    
    mult_2 = int(map(fxrand(), 0, 1, 20, 100));
    mult_3 = int(map(fxrand(), 0, 1, 20, 100));
    mult_4 = int(map(fxrand(), 0, 1, 20, 100));
    
    myColor = int(map(fxrand(), 0, 1, 1, 31));
    
    which_rot = int(map(fxrand(), 0, 1, 1, 6));
    which_translate = int(map(fxrand(), 0, 1, 1, 4));
    which_prim = int(map(fxrand(), 0, 1, 1, 4));
    
    seed_1 = int(map(fxrand(), 0, 1, 1, tex.length));
    seed_2 = int(map(fxrand(), 0, 1, 1, tex.length));
    seed_3 = int(map(fxrand(), 0, 1, 1, tex.length));
    seed_4 = int(map(fxrand(), 0, 1, 1, tex.length));
    
    console.log('main system: ' + system);
    console.log('tile count: ' + tileCount);
    console.log('size multiplier: '+ mult_1);
    //console.log('mult 2: '+ mult_2);
    //console.log('mult 3: '+ mult_3);
    //console.log('mult 4: '+ mult_4);
    console.log('palette: ' + myColor);
    console.log('translation system: ' + which_translate);
    console.log('rotation system: ' + which_rot);
    console.log('tex seed 1: ' + seed_1);
    console.log('tex seed 2: ' + seed_2);
    console.log('tex seed 3: ' + seed_3);
    console.log('tex seed 4: ' + seed_4);
}

function m_Red_1() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let red = int(map(fxrand(), 0, 1, 1, 13));
    if (red == 1) {
        shader_Gradient.setUniform('color_1', [0.733, 0.0, 0.0]); // #bb0000
        shader_Gradient.setUniform('color_2', [0.812, 0.0, 0.0]); // #cf0000
        texture(shaderTexture_2); 
    }
    else if (red == 2) {
        shader_Gradient.setUniform('color_1', [0.835, 0.0, 0.0]); // #d50000
        shader_Gradient.setUniform('color_2', [0.933, 0.0, 0.0]); // #ee0000
        texture(shaderTexture_2); 
    }
    else if (red == 3) {
        shader_Gradient.setUniform('color_1', [0.655, 0.0, 0.0]); // #a70000
        shader_Gradient.setUniform('color_2', [0.635, 0.0, 0.0]); // #a20000
        texture(shaderTexture_2); 
    }
    else if (red == 4) {
        shader_Pattern.setUniform('val_1', [100.0, 0]);
        shader_Pattern.setUniform('val_2', [4.0, 0]);
        texture(shaderTexture_1);
    }
    else if (red == 5) {
        texture(tex[4]);
    }
    else if (red == 6) {
        texture(tex[2]);
    }
    else if (red == 7) {
        texture(tex[1]);
    }
    else {
        texture(tex[7]);
    }
}

function m_Red_2() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let red = int(map(fxrand(), 0, 1, 1, 13));
    if (red == 1) {
        shader_Gradient.setUniform('color_1', [1.0, 0.89, 0.89]); // #ffe3e3
        shader_Gradient.setUniform('color_2', [1.0, 0.506, 0.506]); // #ff8181
        texture(shaderTexture_2); 
    }
    else if (red == 2) {
        shader_Gradient.setUniform('color_1', [0.835, 0.0, 0.0]); // #d50000
        shader_Gradient.setUniform('color_2', [0.78, 0.031, 0.031]); // #c70808
        texture(shaderTexture_2); 
    }
    else if (red == 3) {
        shader_Gradient.setUniform('color_1', [0.655, 0.0, 0.0]); // #a70000
        shader_Gradient.setUniform('color_2', [0.965, 0.0, 0.0]); // #f60000
        texture(shaderTexture_2); 
    }
    else if (red == 4) {
        shader_Pattern.setUniform('val_1', [200.0, 0]);
        shader_Pattern.setUniform('val_2', [5.0, 0]);
        texture(shaderTexture_1);
    }
    else if (red == 5) {
        shader_Pattern.setUniform('val_1', [50.0, 0]);
        shader_Pattern.setUniform('val_2', [4.0, 0]);
        texture(shaderTexture_1);
    }
    else if (red == 6) {
        texture(tex[25]);
    }
    else if (red == 7) {
        texture(tex[31]);
    }
    else if (red == 8) {
        texture(tex[26]);
    }
    else {
        texture(tex[29]);
    }
}

function m_Red_3() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let red = int(map(fxrand(), 0, 1, 1, 11));
    if (red == 1) {
        shader_Gradient.setUniform('color_1', [0.733, 0.0, 0.0]); // #bb0000
        shader_Gradient.setUniform('color_2', [1.0, 0.012, 0.012]); // #ff0303
        texture(shaderTexture_2); 
    }
    else if (red == 2) {
        shader_Gradient.setUniform('color_1', [0.835, 0.0, 0.0]); // #d50000
        shader_Gradient.setUniform('color_2', [1.0, 0.235, 0.235]); // #ff3c3c
        texture(shaderTexture_2); 
    }
    else if (red == 3) {
        shader_Gradient.setUniform('color_1', [0.933, 0.0, 0.0]); // #ee0000
        shader_Gradient.setUniform('color_2', [1.0, 0.933, 0.933]); // #ffeeee
        texture(shaderTexture_2); 
    }
    else if (red == 4) {
        texture(tex[3]);
    }
    else if (red == 5) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 250.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1);
    }
    else if (red == 6) {
        texture(tex[22]);
    }
    else if (red == 7) {
        texture(tex[14]);
    }
    else if (red == 8) {
        texture(tex[13]);
    }
    else if (red == 9) {
        texture(tex[32]);
    }
    else {
        specularMaterial(255);
    }
}

function m_Blue_1() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [3]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let blue = int(map(fxrand(), 0, 1, 1, 12));
    if (blue == 1) {
        shader_Gradient.setUniform('color_1', [0.0, 0.067, 0.733]); // #0011bb
        shader_Gradient.setUniform('color_2', [0.733, 0.757, 1.0]); // #bbc1ff
        texture(shaderTexture_2); 
    }
    else if (blue == 2) {
        shader_Gradient.setUniform('color_1', [0.063, 0.18, 0.733]); // #102ebb
        shader_Gradient.setUniform('color_2', [0.271, 0.337, 1.0]); // #4556ff
        texture(shaderTexture_2); 
    }
    else if (blue == 3) {
        shader_Gradient.setUniform('color_1', [0.0, 0.027, 0.655]); // #0007a7
        shader_Gradient.setUniform('color_2', [0.071, 0.173, 0.569]); // #122c91
        texture(shaderTexture_2); 
    }
    else if (blue == 4) {
        shader_Pattern.setUniform('val_1', [100.0, 0]);
        shader_Pattern.setUniform('val_2', [4.0, 0]);
        texture(shaderTexture_1);
    }
    else if (blue == 5) {
        texture(tex[19]);
    }
    else if (blue == 6) {
        texture(tex[10]);
    }
    else if (blue == 7) {
        texture(tex[11]);
    }
    else if (blue == 8) {
        shader_Pattern.setUniform('val_1', [100.0, 0]);
        shader_Pattern.setUniform('val_2', [10.0, 0]);
        texture(shaderTexture_1);
    }
    else if (blue == 9) {
        specularMaterial(0, 17, 187);
    }
    else {
        texture(tex[5]);
    }
}

function m_Blue_2() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let blue = int(map(fxrand(), 0, 1, 1, 13));
    if (blue == 1) {
        shader_Gradient.setUniform('color_1', [0.0, 0.067, 0.733]); // #0011bb
        shader_Gradient.setUniform('color_2', [0.0, 0.039, 0.435]); // #000a6f
        texture(shaderTexture_2); 
    }
    else if (blue == 2) {
        shader_Gradient.setUniform('color_1', [0.812, 0.922, 1.0]); // #cfebff
        shader_Gradient.setUniform('color_2', [0.0, 0.184, 0.655]); // #002fa7
        texture(shaderTexture_2); 
    }
    else if (blue == 3) {
        shader_Gradient.setUniform('color_1', [0.0, 0.027, 0.655]); // #0007a7
        shader_Gradient.setUniform('color_2', [0.349, 0.737, 1.0]); // #59bcff
        texture(shaderTexture_2); 
    }
    else if (blue == 4) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 250.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1);
    }
    else if (blue == 5) {
        texture(tex[15]);
    }
    else if (blue == 6) {
        texture(tex[20]);
    }
    else if (blue == 7) {
        texture(tex[seed_1]);
    }
    else if (blue == 8) {
        texture(tex[30]);
    }
    else if (blue == 9) {
        specularMaterial(0, 17, 187);
    }
    else {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 250.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1);
    }
}

function m_Blue_3() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let blue = int(map(fxrand(), 0, 1, 1, 14));
    if (blue == 1) {
        shader_Gradient.setUniform('color_1', [0.0, 0.067, 0.733]); // #0011bb
        shader_Gradient.setUniform('color_2', [0.0, 0.106, 0.812]); // #001bcf
        texture(shaderTexture_2); 
    }
    else if (blue == 2) {
        shader_Gradient.setUniform('color_1', [0.031, 0.122, 1.0]); // #081fff
        shader_Gradient.setUniform('color_2', [0.196, 0.267, 1.0]); // #3244ff
        texture(shaderTexture_2); 
    }
    else if (blue == 3) {
        shader_Gradient.setUniform('color_1', [0.0, 0.027, 0.655]); // #0007a7
        shader_Gradient.setUniform('color_2', [0.071, 0.173, 0.569]); // #122c91
        texture(shaderTexture_2); 
    }
    else if (blue == 4) {
        texture(tex[1]);
    }
    else if (blue == 5) {
        texture(tex[4]);
    }
    else if (blue == 6) {
        texture(tex[5]);
    }
    else if (blue == 7) {
        texture(tex[9]);
    }
    else if (blue == 8) {
        texture(tex[20]);
    }
    else if (blue == 9) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 250.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1);
    }
    else if (blue == 10) {
        specularMaterial(0, 17, 187);
    }
    else {
        specularMaterial(255);
    }
}

function m_Yellow_1() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let yellow = int(map(fxrand(), 0, 1, 1, 11));
    if (yellow == 1) {
        shader_Gradient.setUniform('color_1', [1.0, 0.925, 0.0]); // #ffec00
        shader_Gradient.setUniform('color_2', [1.0, 0.965, 0.694]); // #fff6b1
        texture(shaderTexture_2); 
    }
    else if (yellow == 2) {
        shader_Gradient.setUniform('color_1', [1.0, 0.965, 0.0]); // #fff600
        shader_Gradient.setUniform('color_2', [1.0, 0.976, 0.302]); // #fff94d
    }
    else if (yellow == 3) {
        specularMaterial(255, 226, 0);
        shader_Gradient.setUniform('color_1', [1.0, 0.886, 0.0]); // #ffe200
        shader_Gradient.setUniform('color_2', [1.0, 0.949, 0.537]); // #fff289
    }
    else if (yellow == 4) {
        shader_Pattern.setUniform('val_1', [120.0, 0]);
        shader_Pattern.setUniform('val_2', [4.5, 0]);
        texture(shaderTexture_1);
    }
    else if (yellow == 5) {
        texture(tex[18]);
    }
    else if (yellow == 6) {
        texture(tex[27]);
    }
    else if (yellow == 7) {
        texture(tex[24]);
    }
    else if (yellow == 8) {
        specularMaterial(255, 236, 0);
    }
    else {
        texture(tex[7]);
    } 
}

function m_Yellow_2() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let yellow = int(map(fxrand(), 0, 1, 1, 11));
    if (yellow == 1) {
        shader_Gradient.setUniform('color_1', [1.0, 0.925, 0.0]); // #ffec00
        shader_Gradient.setUniform('color_2', [1.0, 0.965, 0.694]); // #fff6b1
        texture(shaderTexture_2); 
    }
    else if (yellow == 2) {
        shader_Gradient.setUniform('color_1', [1.0, 0.965, 0.0]); // #fff600
        shader_Gradient.setUniform('color_2', [1.0, 0.976, 0.302]); // #fff94d
    }
    else if (yellow == 3) {
        specularMaterial(255, 226, 0);
        shader_Gradient.setUniform('color_1', [1.0, 0.886, 0.0]); // #ffe200
        shader_Gradient.setUniform('color_2', [1.0, 0.949, 0.537]); // #fff289
    }
    else if (yellow == 4) {
        texture(tex[13]);
    }
    else if (yellow == 5) {
        texture(tex[21]);
    }
    else if (yellow == 6) {
        texture(tex[seed_1]);
    }
    else if (yellow == 7) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 100.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 5.0), 0]);
        texture(shaderTexture_1);
    }
    else if (yellow == 8) {
        specularMaterial(255, 244, 157); // #fff49d
    }
    else {
        texture(tex[28]);
    } 
}

function m_Yellow_3() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let yellow = int(map(fxrand(), 0, 1, 1, 13));
    if (yellow == 1) {
        shader_Gradient.setUniform('color_1', [1.0, 0.925, 0.0]); // #ffec00
        shader_Gradient.setUniform('color_2', [1.0, 0.965, 0.694]); // #fff6b1
        texture(shaderTexture_2); 
    }
    else if (yellow == 2) {
        shader_Gradient.setUniform('color_1', [1.0, 0.957, 0.616]); // #fff49d
        shader_Gradient.setUniform('color_2', [1.0, 0.976, 0.302]); // #fff94d
    }
    else if (yellow == 3) {
        specularMaterial(255, 226, 0);
        shader_Gradient.setUniform('color_1', [1.0, 0.886, 0.0]); // #ffe200
        shader_Gradient.setUniform('color_2', [1.0, 0.949, 0.537]); // #fff289
    }
    else if (yellow == 4) {
        texture(tex[seed_1]);
    }
    else if (yellow == 5) {
        texture(tex[23]);
    }
    else if (yellow == 6) {
        specularMaterial(0);
    }
    else if (yellow == 7) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 150.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 4.0, 8.0), 0]);
        texture(shaderTexture_1);
    }
    else if (yellow == 8) {
        specularMaterial(255, 228, 20); // #ffe414
    }
    else {
        shader_Pattern.setUniform('val_1', [250.0, 0]);
        shader_Pattern.setUniform('val_2', [4.0, 0]);
        texture(shaderTexture_1);
    } 
}

function m_Mixed_1() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let mixed = int(map(fxrand(), 0, 1, 1, 10));
    if (mixed == 1) {
        shader_Gradient.setUniform('color_1', [0.0, 0.0, 0.0]); // #000000
        shader_Gradient.setUniform('color_2', [0.039, 0.039, 0.039]); // #0a0a0a
        texture(shaderTexture_2); 
    }
    else if (mixed == 2) {
        shader_Gradient.setUniform('color_1', [0.906, 0.937, 0.953]); // #e7eff3
        shader_Gradient.setUniform('color_2', [1.0, 0.98, 0.753]); // #fffac0
        texture(shaderTexture_2);    
    }
    else if (mixed == 3) {
        shader_Gradient.setUniform('color_1', [1.0, 0.886, 0.886]); // #ffe2e2
        shader_Gradient.setUniform('color_2', [0.89, 0.812, 0.875]); // #e3cfdf
        texture(shaderTexture_2); 
    }
    else if (mixed == 4) {
        shader_Gradient.setUniform('color_1', [0.933, 0.0, 0.0]); // #ee0000
        shader_Gradient.setUniform('color_2', [0.733, 0.0, 0.0]); // #bb0000
        texture(shaderTexture_2); 
    }
    else if (mixed == 5) {
        shader_Gradient.setUniform('color_1', [0.89, 0.965, 0.961]); // #e3f6f5
        shader_Gradient.setUniform('color_2', [0.878, 0.941, 0.918]); // #e0f0ea
        texture(shaderTexture_2); 
    }
    else if (mixed == 6) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 120.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 6.0), 0]);
        texture(shaderTexture_1);
    }
    else if (mixed == 7) {
        texture(tex[6]);
    }
    else {
        specularMaterial(255);
    }
}

function m_Mixed_2() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let mixed = int(map(fxrand(), 0, 1, 1, 10));
    if (mixed == 1) {
        shader_Gradient.setUniform('color_1', [0.941, 0.408, 0.408]); // #f06868
        shader_Gradient.setUniform('color_2', [1.0, 0.518, 0.482]); // #ff847b
        texture(shaderTexture_2); 
    }
    else if (mixed == 2) {
        shader_Gradient.setUniform('color_1', [0.835, 0.0, 0.0]); // #d50000
        shader_Gradient.setUniform('color_2', [1.0, 0.235, 0.235]); // #ff3c3c
        texture(shaderTexture_2);   
    }
    else if (mixed == 3) {
        shader_Gradient.setUniform('color_1', [0.933, 0.0, 0.0]); // #ee0000
        shader_Gradient.setUniform('color_2', [1.0, 0.953, 0.984]); // #fff3fb
        texture(shaderTexture_2); 
    }
    else if (mixed == 4) {
        shader_Gradient.setUniform('color_1', [1.0, 0.98, 0.753]); // #fffac0
        shader_Gradient.setUniform('color_2', [0.988, 1.0, 0.533]); // #fcff88
        texture(shaderTexture_2); 
    }
    else if (mixed == 5) {
        shader_Gradient.setUniform('color_1', [0.0, 0.0, 0.0]); // #000000
        shader_Gradient.setUniform('color_2', [0.039, 0.039, 0.039]); // #0a0a0a
        texture(shaderTexture_2); 
    }
    else if (mixed == 6) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 120.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 6.0), 0]);
        texture(shaderTexture_1);
    }
    else if (mixed == 7) {
        texture(tex[35]);
    }
    else {
        specularMaterial(255);
    }
}

function m_Mixed_3() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [1]);
    shaderTexture_1.rect(0, 0,width,  height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let mixed = int(map(fxrand(), 0, 1, 1, 10));
    strokeWeight(map(fxrand(), 0, 1, 0.05, 3.5));
    if (mixed == 1) {
        shader_Gradient.setUniform('color_1', [0.796, 0.953, 0.941]); // #cbf3f0
        shader_Gradient.setUniform('color_2', [0.733, 0.757, 1.0]); // #bbc1ff
        texture(shaderTexture_2); 
    }
    else if (mixed == 2) {
        shader_Gradient.setUniform('color_1', [0.878, 0.984, 0.988]); // #e0fbfc
        shader_Gradient.setUniform('color_2', [0.271, 0.337, 1.0]); // #4556ff
        texture(shaderTexture_2);    
    }
    else if (mixed == 3) {
        shader_Gradient.setUniform('color_1', [0.871, 0.988, 0.976]); // #defcf9
        shader_Gradient.setUniform('color_2', [0.792, 0.871, 0.988]); // #cadefc
        texture(shaderTexture_2); 
    }
    else if (mixed == 4) {
        shader_Gradient.setUniform('color_1', [0.0, 0.0, 0.0]); // #000000
        shader_Gradient.setUniform('color_2', [0.039, 0.039, 0.039]); // #0a0a0a
        texture(shaderTexture_2); 
    }
    else if (mixed == 5) {
        shader_Gradient.setUniform('color_1', [0.635, 0.804, 0.949]); // #a2cdf2
        shader_Gradient.setUniform('color_2', [0.722, 0.949, 0.902]); // #b8f2e6
        texture(shaderTexture_2); 
    }
    else if (mixed == 6) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 120.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 6.0), 0]);
        texture(shaderTexture_1);
    }
    else if (mixed == 7) {
        texture(tex[1]);
    }
    else {
        specularMaterial(255);
    }
}

function m_Mixed_4() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [2]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let mixed = int(map(fxrand(), 0, 1, 1, 10));
    if (mixed == 1) {
        shader_Gradient.setUniform('color_1', [0.725, 0.808, 0.922]); // #b9ceeb
        shader_Gradient.setUniform('color_2', [0.878, 0.925, 0.957]); // #e0ecf4
        texture(shaderTexture_2); 
    }
    else if (mixed == 2) {
        shader_Gradient.setUniform('color_1', [0.643, 0.965, 0.976]); // #a4f6f9
        shader_Gradient.setUniform('color_2', [0.894, 1.0, 0.996]); // #e4fffe
        texture(shaderTexture_2);     
    }
    else if (mixed == 3) {
        shader_Gradient.setUniform('color_1', [0.996, 0.941, 1.0]); // #fef0ff
        shader_Gradient.setUniform('color_2', [0.839, 0.784, 1.0]); // #d6c8ff
        texture(shaderTexture_2); 
    }
    else if (mixed == 4) {
        shader_Gradient.setUniform('color_1', [0.114, 0.153, 0.525]); // #1d2786
        shader_Gradient.setUniform('color_2', [0.529, 0.878, 1.0]); // #87e0ff
        texture(shaderTexture_2); 
    }
    else if (mixed == 5) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 120.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 6.0), 0]);
        texture(shaderTexture_1);
    }
    else if (mixed == 6) {
        shader_Gradient.setUniform('color_1', [0.0, 0.0, 0.0]); // #000000
        shader_Gradient.setUniform('color_2', [0.039, 0.039, 0.039]); // #0a0a0a
        texture(shaderTexture_2); 
    }
    else if (mixed == 7) {
        texture(tex[31]);
    }
    else {
        specularMaterial(255);
    }
}

function m_Mixed_5() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [3]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]); 
    shaderTexture_2.rect(0, 0, width, height);
    
    let mixed = int(map(fxrand(), 0, 1, 1, 10));
    if (mixed == 1) {
        shader_Gradient.setUniform('color_1', [1.0, 0.925, 0.0]); // #ffec00
        shader_Gradient.setUniform('color_2', [0.988, 1.0, 0.533]); // #fcff88
        texture(shaderTexture_2); 
    }
    else if (mixed == 2) {
        shader_Gradient.setUniform('color_1', [0.878, 0.976, 0.71]); // #e0f9b5
        shader_Gradient.setUniform('color_2', [0.996, 0.992, 0.792]); // #fefdca
        texture(shaderTexture_2);     
    }
    else if (mixed == 3) {
        shader_Gradient.setUniform('color_1', [1.0, 0.871, 0.49]); // #ffde7d
        shader_Gradient.setUniform('color_2', [1.0, 0.18, 0.388]); // #ff2e63
        texture(shaderTexture_2); 
    }
    else if (mixed == 4) {
        shader_Gradient.setUniform('color_1', [0.0, 0.004, 0.039]); // #00010a
        shader_Gradient.setUniform('color_2', [0.22, 0.259, 0.349]); // #384259
        texture(shaderTexture_2); 
    }
    else if (mixed == 5) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 100.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 4.0), 0]);
        texture(shaderTexture_1);
    }
    else if (mixed == 6) {
        shader_Gradient.setUniform('color_1', [0.0, 0.0, 0.0]); // #000000
        shader_Gradient.setUniform('color_2', [0.039, 0.039, 0.039]); // #0a0a0a
        texture(shaderTexture_2); 
    }
    else if (mixed == 7) {
        texture(tex[35]);
    }
    else {
        specularMaterial(255);
    }
}

function m_Mixed_6() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0 ,width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let mixed = int(map(fxrand(), 0, 1, 1, 10));
    if (mixed == 1) {
        shader_Gradient.setUniform('color_1', [0.639, 0.576, 0.922]); // #a393eb
        shader_Gradient.setUniform('color_2', [0.839, 0.784, 1.0]); // #d6c8ff
        texture(shaderTexture_2); 
    }
    else if (mixed == 2) {
        shader_Gradient.setUniform('color_1', [0.996, 0.808, 0.659]); // #fecea8
        shader_Gradient.setUniform('color_2', [1.0, 0.518, 0.486]); // #ff847c
        texture(shaderTexture_2);     
    }
    else if (mixed == 3) {
        shader_Gradient.setUniform('color_1', [0.988, 0.89, 0.541]); // #fce38a
        shader_Gradient.setUniform('color_2', [0.878, 0.976, 0.71]); // #e0f9b5
        texture(shaderTexture_2); 
    }
    else if (mixed == 4) {
        shader_Gradient.setUniform('color_1', [0.0, 0.004, 0.039]); // #00010a
        shader_Gradient.setUniform('color_2', [1.0, 1.0, 1.0]); // #ffffff
        texture(shaderTexture_2); 
    }
    else if (mixed == 5) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 100.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 4.0), 0]);
        texture(shaderTexture_1);
    }
    else if (mixed == 6) {
        shader_Gradient.setUniform('color_1', [0.0, 0.0, 0.0]); // #000000
        shader_Gradient.setUniform('color_2', [0.039, 0.039, 0.039]); // #0a0a0a
        texture(shaderTexture_2); 
    }
    else if (mixed == 7) {
        texture(tex[27]);
    }
    else {
        specularMaterial(255);
    }
}

function m_Mixed_7() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let mixed = int(map(fxrand(), 0, 1, 1, 10));
    if (mixed == 1) {
        shader_Gradient.setUniform('color_1', [1.0, 1.0, 0.761]); // #ffffc2
        shader_Gradient.setUniform('color_2', [0.78, 0.961, 0.996]); // #c7f5fe
        texture(shaderTexture_2); 
    }
    else if (mixed == 2) {
        shader_Gradient.setUniform('color_1', [1.0, 0.776, 0.592]); // #ffc697
        shader_Gradient.setUniform('color_2', [1.0, 0.749, 0.412]); // #ffbf69
        texture(shaderTexture_2);    
    }
    else if (mixed == 3) {
        shader_Gradient.setUniform('color_1', [0.0, 0.0, 0.0]); // #000000
        shader_Gradient.setUniform('color_2', [0.039, 0.039, 0.039]); // #0a0a0a
        texture(shaderTexture_2); 
    }
    else if (mixed == 4) {
        shader_Gradient.setUniform('color_1', [0.863, 0.929, 0.761]); // #dcedc2
        shader_Gradient.setUniform('color_2', [0.929, 0.914, 0.761]); // #ede9c2
        texture(shaderTexture_2); 
    }
    else if (mixed == 5) {
        shader_Gradient.setUniform('color_1', [0.988, 0.89, 0.541]); // #fce38a
        shader_Gradient.setUniform('color_2', [0.976, 0.929, 0.412]); // #f9ed69
        texture(shaderTexture_2); 
    }
    else if (mixed == 6) {
        shader_Gradient.setUniform('color_1', [0.941, 0.902, 0.937]); // #f0e6ef
        shader_Gradient.setUniform('color_2', [0.894, 0.992, 0.882]); // #e4fde1
        texture(shaderTexture_2); 
    }
    else if (mixed == 7) {
        texture(tex[7]);
    }
    else if (mixed == 8) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 100.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 4.0), 0]);
        texture(shaderTexture_1);
    }
    else {
        shader_Gradient.setUniform('color_1', [0.992, 0.973, 0.98]); // #fdf8fa
        shader_Gradient.setUniform('color_2', [1.0, 1.0, 1.0]); // #000000
        texture(shaderTexture_2); 
    }
}

function m_Black_White() {
    let black_white = int(map(fxrand(), 0, 1, 1, 7));
    if (black_white == 1) {
        specularMaterial(0, 0, 0);
    }
    else if (black_white == 2) {
        specularMaterial(5, 5, 5);    
    }
    else if (black_white == 3) {
        specularMaterial(10, 10, 10);
    }
    else if (black_white == 4) {
        texture(tex[7]);
    }
    else if (black_white == 5) {
        texture(tex[28]);
    }
    else {
        specularMaterial(255);
    }
}

function m_Tri_1() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0, width, height);
    
    let tri = int(map(fxrand(), 0, 1, 1, 30));
    if (tri == 1) {
        specularMaterial(187, 0, 0);
    }
    else if (tri == 2) {
        specularMaterial(207, 0, 0);
    }
    else if (tri == 3) {
        specularMaterial(167, 0, 0);
    }
    else if (tri == 4) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 100.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1);
    }
    else if (tri == 5) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 250.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1);  
    }
    else if (tri == 6) {
        specularMaterial(0);
    }
    else if (tri == 7) {
        specularMaterial(255, 236, 0);
    }
    else if (tri == 8) {
        specularMaterial(255, 246, 0); 
    }
    else if (tri == 9) {
        specularMaterial(255, 226, 0);
    }
    else if (tri == 10) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 250.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1); 
    }
    else if (tri == 11) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 200.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1); 
    }
    else if (tri == 12) {
        texture(tex[27]);
    }
    else if (tri == 13) {
        texture(tex[7]);
    }
    else {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 350.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1); 
    }
}

function m_Tri_2() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0, width, height);
    
    let tri = int(map(fxrand(), 0, 1, 1, 30));
    if (tri == 1) {
        specularMaterial(172, 196, 245);
    }
    else if (tri == 2) {
        specularMaterial(218, 228, 250);    
    }
    else if (tri == 3) {
        specularMaterial(149, 180, 242);
    }
    else if (tri == 4) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 250.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1);
    }
    else if (tri == 5) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 100.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1);  
    }
    else if (tri == 6) {
        specularMaterial(0);
    }
    else if (tri == 7) {
        specularMaterial(249, 240, 253);
    }
    else if (tri == 8) {
        specularMaterial(230, 195, 248); 
    }
    else if (tri == 9) {
        specularMaterial(212, 149, 242);
    }
    else if (tri == 10) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 200.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1); 
    }
    else if (tri == 11) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 350.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1); 
    }
    else if (tri == 12) {
        texture(tex[seed_1]);
    }
    else if (tri == 13) {
        texture(tex[13]);
    }
    else if (tri == 14) {
        texture(tex[20]);
    }
    else {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 350.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1); 
    }
}

function m_Tri_3() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let tri = int(map(fxrand(), 0, 1, 1, 20));
    if (tri == 1) {
        specularMaterial(233, 245, 172);
    }
    else if (tri == 2) {
        specularMaterial(245, 250, 218);    
    }
    else if (tri == 3) {
        specularMaterial(221, 240, 126);
    }
    else if (tri == 4) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 250.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1);
    }
    else if (tri == 5) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 350.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1);  
    }
    else if (tri == 6) {
        shader_Gradient.setUniform('color_1', [0.0, 0.0, 0.0]); // #000000
        shader_Gradient.setUniform('color_2', [0.039, 0.039, 0.039]); // #0a0a0a
        shader_Pattern.setUniform('p_color', [4]);
        texture(shaderTexture_2); 
    }
    else if (tri == 7) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 100.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1); 
    }
    else if (tri == 8) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 200.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1); 
    }
    else if (tri == 9) {
        texture(tex[7]);
    }
    else if (tri == 10) {
        texture(tex[13]);
    }
    else if (tri == 11) {
        texture(tex[8]);
    }
    else if (tri == 12) {
        shader_Gradient.setUniform('color_1', [0.737, 1.0, 0.659]); // #bcffa8
        shader_Gradient.setUniform('color_2', [0.584, 1.0, 0.459]); // #95ff75
        texture(shaderTexture_2); 
    }
    else {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 350.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        shader_Pattern.setUniform('p_color', [2]);
        texture(shaderTexture_1); 
    }
}

function m_Tri_4() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [1]);
    shaderTexture_1.rect(0, 0, width, height);
    
    let tri = int(map(fxrand(), 0, 1, 1, 30));
    if (tri == 1) {
        specularMaterial(245, 172, 196);
    }
    else if (tri == 2) {
        specularMaterial(250, 218, 228);    
    }
    else if (tri == 3) {
        specularMaterial(242, 149, 180);
    }
    else if (tri == 4) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 250.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1);
    }
    else if (tri == 5) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 350.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1);  
    }
    else if (tri == 6) {
        specularMaterial(0);
    }
    else if (tri == 7) {
        specularMaterial(245, 185, 172);
    }
    else if (tri == 8) {
        specularMaterial(250, 223, 218); 
    }
    else if (tri == 9) {
        specularMaterial(242, 166, 149);
    }
    else if (tri == 10) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 100.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1); 
    }
    else if (tri == 11) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 200.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1); 
    }
    else if (tri == 12) {
        texture(tex[seed_1]);
    }
    else if (tri == 13) {
        texture(tex[23]);
    }
    else if (tri == 14) {
        texture(tex[31]);
    }
    else {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 350.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1); 
    }
}

function m_Tri_5() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0, width, height);
    
    let tri = int(map(fxrand(), 0, 1, 1, 30));
    if (tri == 1) {
        specularMaterial(251, 0, 2);
    }
    else if (tri == 2) {
        specularMaterial(250, 17, 13);    
    }
    else if (tri == 3) {
        specularMaterial(15, 20, 23);
    }
    else if (tri == 4) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 250.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1);
    }
    else if (tri == 5) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 350.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1);  
    }
    else if (tri == 6) {
        specularMaterial(0);
    }
    else if (tri == 7) {
        specularMaterial(215, 35, 35);
    }
    else if (tri == 8) {
        specularMaterial(247, 247, 247); 
    }
    else if (tri == 9) {
        specularMaterial(255, 235, 187);
    }
    else if (tri == 10) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 100.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1); 
    }
    else if (tri == 11) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 200.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1); 
    }
    else if (tri == 12) {
        texture(tex[seed_1]);
    }
    else if (tri == 13) {
        texture(tex[16]);
    }
    else if (tri == 14) {
        texture(tex[17]);
    }
    else {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 350.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 9.0), 0]);
        texture(shaderTexture_1); 
    }
}

function m_Patterns() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0, width, height);
    
    let patterns = int(map(fxrand(), 0, 1, 1, 15));
    if (patterns == 1) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 100.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 6.0), 0]);
        texture(shaderTexture_1); 
    }
    else if (patterns == 2) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 100.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 6.0), 0]);
        texture(shaderTexture_1); 
    }
    else if (patterns == 3) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 300.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 8.0), 0]);
        texture(shaderTexture_1); 
    }
    else if (patterns == 4) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 200.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 8.0), 0]);
        texture(shaderTexture_1); 
    }
    else if (patterns == 5) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 200.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 8.0), 0]);
        texture(shaderTexture_1); 
    }
    else if (patterns == 6) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 200.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 8.0), 0]);
        texture(shaderTexture_1); 
    }
    else if (patterns == 7) {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 200.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 8.0), 0]);
        texture(shaderTexture_1); 
    }
    else if (patterns == 8) {
        specularMaterial(0);
    }
    else {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 200.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 8.0), 0]);
        texture(shaderTexture_1); 
    }
}

function m_Textures() {
    let textures = int(map(fxrand(), 0, 1, 1, 7));
    if (textures == 1) {
        texture(tex[seed_1]);
    }
    else if (textures == 2) {
        texture(tex[seed_2]);
    }
    else if (textures == 3) {
        texture(tex[seed_3]);
    }
    else {
        texture(tex[seed_4]);
    }
}

function m_Gradients_1() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let gradients = int(map(fxrand(), 0, 1, 1, 8));
    if (gradients == 1) {
        shader_Gradient.setUniform('color_1', [0.89, 0.992, 0.992]); // #e3fdfd
        shader_Gradient.setUniform('color_2', [0.918, 0.918, 0.918]); // #eaeaea
        texture(shaderTexture_2); 
    }
    else if (gradients == 2) {
        shader_Gradient.setUniform('color_1', [0.733, 0.0, 0.0]); // #bb0000
        shader_Gradient.setUniform('color_2', [0.843, 0.137, 0.137]); // #d72323
        texture(shaderTexture_2); 
    }
    else if (gradients == 3) {
        shader_Gradient.setUniform('color_1', [1.0, 0.494, 0.404]); // #ff7e67
        shader_Gradient.setUniform('color_2', [1.0, 0.78, 0.78]); // #ffc7c7
        texture(shaderTexture_2); 
    }
    else if (gradients == 4) {
        specularMaterial(0);
    }
    else {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 200.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 8.0), 0]);
        texture(shaderTexture_1); 
    }
}

function m_Gradients_2() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [3]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let gradients = int(map(fxrand(), 0, 1, 1, 8));
    if (gradients == 1) {
        shader_Gradient.setUniform('color_1', [0.106, 0.243, 0.631]);
        shader_Gradient.setUniform('color_2', [0.686, 0.922, 0.941]);
        texture(shaderTexture_2); 
    }
    else if (gradients == 2) {
        shader_Gradient.setUniform('color_1', [0.851, 0.949, 1.0]);
        shader_Gradient.setUniform('color_2', [0.906, 0.937, 0.953]);
        texture(shaderTexture_2); 
    }
    else if (gradients == 3) {
        shader_Gradient.setUniform('color_1', [0.996, 1.0, 0.761]);
        shader_Gradient.setUniform('color_2', [1.0, 0.561, 0.337]);
        texture(shaderTexture_2); 
    }
    else if (gradients == 4) {
        specularMaterial(0);
    }
    else {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 200.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 8.0), 0]);
        texture(shaderTexture_1); 
    }
}

function m_Gradients_3() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let gradients = int(map(fxrand(), 0, 1, 1, 8));
    if (gradients == 1) {
        shader_Gradient.setUniform('color_1', [0.969, 0.957, 0.545]);
        shader_Gradient.setUniform('color_2', [0.965, 0.788, 0.055]);
        texture(shaderTexture_2); 
    }
    else if (gradients == 2) {
        shader_Gradient.setUniform('color_1', [1.0, 0.851, 0.2]);
        shader_Gradient.setUniform('color_2', [1.0, 0.745, 0.0]);
        texture(shaderTexture_2); 
    }
    else if (gradients == 3) {
        shader_Gradient.setUniform('color_1', [0.839, 0.894, 0.941]);
        shader_Gradient.setUniform('color_2', [0.753, 1.0, 0.761]);
        texture(shaderTexture_2); 
    }
    else if (gradients == 4) {
        specularMaterial(0);
    }
    else {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 200.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 8.0), 0]);
        texture(shaderTexture_1); 
    }
}

function m_Gradients_4() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]); 
    shaderTexture_2.rect(0, 0, width, height);
    
    let gradients = int(map(fxrand(), 0, 1, 1, 8));
    if (gradients == 1) {
        shader_Gradient.setUniform('color_1', [0.698, 0.969, 0.937]); // #b2f7ef
        shader_Gradient.setUniform('color_2', [0.584, 0.882, 0.827]); // #95e1d3
        shader_Pattern.setUniform('p_color', [4]);
        texture(shaderTexture_2); 
    }
    else if (gradients == 2) {
        shader_Gradient.setUniform('color_1', [0.918, 1.0, 0.816]); // #eaffd0
        shader_Gradient.setUniform('color_2', [0.988, 0.89, 0.541]); // #fce38a
        shader_Pattern.setUniform('p_color', [2]);
        texture(shaderTexture_2); 
    }
    else if (gradients == 3) {
        shader_Gradient.setUniform('color_1', [0.357, 0.753, 0.745]); // #5bc0be
        shader_Gradient.setUniform('color_2', [0.067, 0.541, 0.698]); // #118ab2
        texture(shaderTexture_2); 
    }
    else if (gradients == 4) {
        specularMaterial(0);
    }
    else {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 200.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 8.0), 0]);
        texture(shaderTexture_1); 
    }
}

function m_Gradients_5() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let gradients = int(map(fxrand(), 0, 1, 1, 8));
    if (gradients == 1) {
        shader_Gradient.setUniform('color_1', [1.0, 0.624, 0.11]); // #ff9f1c
        shader_Gradient.setUniform('color_2', [0.961, 0.796, 0.361]); // #f5cb5c
        texture(shaderTexture_2); 
    }
    else if (gradients == 2) {
        shader_Gradient.setUniform('color_1', [0.949, 0.843, 0.933]); // #f2d7ee
        shader_Gradient.setUniform('color_2', [0.941, 0.902, 0.937]); // #f0e6ef
        texture(shaderTexture_2); 
    }
    else if (gradients == 3) {
        shader_Gradient.setUniform('color_1', [0.008, 0.004, 0.345]); // #020158
        shader_Gradient.setUniform('color_2', [0.369, 0.349, 0.506]); // #5e5981
        texture(shaderTexture_2); 
    }
    else if (gradients == 4) {
        specularMaterial(0);
    }
    else {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 200.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 8.0), 0]);
        texture(shaderTexture_1); 
    }
}

function m_Gradients_6() {
    shaderTexture_1.shader(shader_Pattern);
    shader_Pattern.setUniform('resolution', [u_Size, u_Size]);
    shader_Pattern.setUniform('p_color', [4]);
    shaderTexture_1.rect(0, 0, width, height);
    
    shaderTexture_2.shader(shader_Gradient);
    shader_Gradient.setUniform('resolution', [u_Size, u_Size]);
    shaderTexture_2.rect(0, 0, width, height);
    
    let gradients = int(map(fxrand(), 0, 1, 1, 30));
    if (gradients == 1) {
        shader_Gradient.setUniform('color_1', [1.0, 0.624, 0.11]); // #ff9f1c
        shader_Gradient.setUniform('color_2', [0.961, 0.796, 0.361]); // #f5cb5c
        texture(shaderTexture_2); 
    }
    else if (gradients == 2) {
        shader_Gradient.setUniform('color_1', [0.949, 0.843, 0.933]); // #f2d7ee
        shader_Gradient.setUniform('color_2', [0.941, 0.902, 0.937]); // #f0e6ef
        texture(shaderTexture_2); 
    }
    else if (gradients == 3) {
        shader_Gradient.setUniform('color_1', [0.008, 0.004, 0.345]); // #020158
        shader_Gradient.setUniform('color_2', [0.369, 0.349, 0.506]); // #5e5981
        texture(shaderTexture_2); 
    }
    else if (gradients == 4) {
        shader_Gradient.setUniform('color_1', [0.89, 0.992, 0.992]); // #e3fdfd
        shader_Gradient.setUniform('color_2', [0.918, 0.918, 0.918]); // #eaeaea
        texture(shaderTexture_2); 
    }
    else if (gradients == 5) {
        shader_Gradient.setUniform('color_1', [0.733, 0.0, 0.0]); // #bb0000
        shader_Gradient.setUniform('color_2', [0.843, 0.137, 0.137]); // #d72323
        texture(shaderTexture_2); 
    }
    else if (gradients == 6) {
        shader_Gradient.setUniform('color_1', [1.0, 0.494, 0.404]); // #ff7e67
        shader_Gradient.setUniform('color_2', [1.0, 0.78, 0.78]); // #ffc7c7
        texture(shaderTexture_2); 
    }
    else if (gradients == 7) {
        shader_Gradient.setUniform('color_1', [0.106, 0.243, 0.631]);
        shader_Gradient.setUniform('color_2', [0.686, 0.922, 0.941]);
        texture(shaderTexture_2); 
    }
    else if (gradients == 8) {
        shader_Gradient.setUniform('color_1', [0.851, 0.949, 1.0]);
        shader_Gradient.setUniform('color_2', [0.906, 0.937, 0.953]);
        texture(shaderTexture_2); 
    }
    else if (gradients == 9) {
        shader_Gradient.setUniform('color_1', [0.996, 1.0, 0.761]);
        shader_Gradient.setUniform('color_2', [1.0, 0.561, 0.337]);
        texture(shaderTexture_2); 
    }
    else if (gradients == 10) {
        shader_Gradient.setUniform('color_1', [0.969, 0.957, 0.545]);
        shader_Gradient.setUniform('color_2', [0.965, 0.788, 0.055]);
        texture(shaderTexture_2); 
    }
    else if (gradients == 11) {
        shader_Gradient.setUniform('color_1', [1.0, 0.851, 0.2]);
        shader_Gradient.setUniform('color_2', [1.0, 0.745, 0.0]);
        texture(shaderTexture_2); 
    }
    else if (gradients == 12) {
        shader_Gradient.setUniform('color_1', [0.839, 0.894, 0.941]);
        shader_Gradient.setUniform('color_2', [0.753, 1.0, 0.761]);
        texture(shaderTexture_2); 
    }
    else if (gradients == 13) {
        shader_Gradient.setUniform('color_1', [0.698, 0.969, 0.937]); // #b2f7ef
        shader_Gradient.setUniform('color_2', [0.584, 0.882, 0.827]); // #95e1d3
        texture(shaderTexture_2); 
    }
    else if (gradients == 14) {
        shader_Gradient.setUniform('color_1', [0.918, 1.0, 0.816]); // #eaffd0
        shader_Gradient.setUniform('color_2', [0.988, 0.89, 0.541]); // #fce38a
        texture(shaderTexture_2); 
    }
    else if (gradients == 15) {
        shader_Gradient.setUniform('color_1', [0.357, 0.753, 0.745]); // #5bc0be
        shader_Gradient.setUniform('color_2', [0.067, 0.541, 0.698]); // #118ab2
        texture(shaderTexture_2); 
    }
    else if (gradients == 16) {
        shader_Gradient.setUniform('color_1', [1.0, 0.624, 0.11]); // #ff9f1c
        shader_Gradient.setUniform('color_2', [0.961, 0.796, 0.361]); // #f5cb5c
        texture(shaderTexture_2); 
    }
    else if (gradients == 17) {
        shader_Gradient.setUniform('color_1', [0.949, 0.843, 0.933]); // #f2d7ee
        shader_Gradient.setUniform('color_2', [0.941, 0.902, 0.937]); // #f0e6ef
        texture(shaderTexture_2); 
    }
    else if (gradients == 18) {
        shader_Gradient.setUniform('color_1', [0.008, 0.004, 0.345]); // #020158
        shader_Gradient.setUniform('color_2', [0.369, 0.349, 0.506]); // #5e5981
        texture(shaderTexture_2); 
    }
    else if (gradients == 19) {
        specularMaterial(0);
    }
    else if (gradients == 20) {
        texture(tex[35]);
    }
    else if (gradients == 21) {
        texture(tex[7]);
    }
    else if (gradients == 22) {
        texture(tex[seed_1]);
    }
    else {
        shader_Pattern.setUniform('val_1', [map(fxrand(), 0, 1, 50.0, 200.0), 0]);
        shader_Pattern.setUniform('val_2', [map(fxrand(), 0, 1, 2.0, 8.0), 0]);
        texture(shaderTexture_1); 
    }
}

function myMaterials() {
        if (myColor == 1) {
            m_Red_1();
        }
        else if (myColor == 2) {
            m_Red_2();
        }
        else if (myColor == 3) {
            m_Red_3();
        }
        else if (myColor == 4) {
            m_Blue_1();
        }
        else if (myColor == 5) {
            m_Blue_2();
        }
        else if (myColor == 6) {
            m_Blue_3();
        }
        else if (myColor == 7) {
            m_Yellow_1();
        }
        else if (myColor == 8) {
            m_Yellow_2();
        }
        else if (myColor == 9) {
            m_Yellow_3();
        }
        else if (myColor == 10) {
            m_Mixed_1();
        }
        else if (myColor == 11) {
            m_Mixed_2();
        }
        else if (myColor == 12) {
            m_Mixed_3();
        }
        else if (myColor == 13) {
            m_Mixed_4();
        }
        else if (myColor == 14) {
            m_Mixed_5();
        }
        else if (myColor == 15) {
            m_Mixed_6();
        }
        else if (myColor == 16) {
            m_Mixed_7();
        }
        else if (myColor == 17) {
            m_Black_White();
        }
        else if (myColor == 18) {
            m_Tri_1();
        }
        else if (myColor == 19) {
            m_Tri_2();
        }
        else if (myColor == 20) {
            m_Tri_3();
        }
        else if (myColor == 21) {
            m_Tri_4();
        }
        else if (myColor == 22) {
            m_Tri_5();
        }
        else if (myColor == 23) {
            m_Patterns();
        }
        else if (myColor == 24) {
            m_Textures();
        }
        else if (myColor == 25) {
            m_Gradients_1();
        }
        else if (myColor == 26) {
            m_Gradients_2();
        }
        else if (myColor == 27) {
            m_Gradients_3();
        }
        else if (myColor == 28) {
            m_Gradients_4();
        }
        else if (myColor == 29) {
            m_Gradients_5();
        }
        else if (myColor == 30) {
            m_Gradients_6();
        }
}

function draw() {
    background(255);
    
    if (system == 1) {
        camera(0, 0, 1250, 0, 0, 0);
    }
    else if (system == 2) {
        camera(0, 0, 1350, 0, 0, 0);
    }
    else if (system == 3 || system == 4) {
        camera(0, 0, 1625, 0, 0, 0);
    }

    ambientLight(255);

    for (let gridY = 0; gridY < tileCount; gridY++) {
        for (let gridX = 0; gridX < tileCount; gridX++) {

            let posX = tileWidth * gridX + tileWidth / 2;
            let posY = tileHeight * gridY + tileHeight / 2;
            let posZ = tileDepth * gridY + tileDepth / 2;
            let angle = Math.atan2(ranY - posY, ranX - posX) + (shapeAngle * (PI / 180));
            
            myMaterials();
    
            push();
            
            if (which_translate == 1) {
                translate(posX - width / 2, posY - height / 2, 0);
            }
            else if (which_translate == 2) {
                translate(posX - width / 2, posY - height / 2, Math.cos(posZ - width / 2));
            }
            else if (which_translate == 3) {
                translate(posX - width / 2, posY - height / 2, Math.cos(map(fxrand(), 0, 1, -200, 100)));
            }
            
            if (which_rot == 1) {
                rotateX(Math.sin(angle % fxrand() * mult_2));
                rotateZ(angle + fxrand() * mult_3);
                rotateY(Math.cos(angle % fxrand() * mult_4));
            }
            else if (which_rot == 2) {
                rotateX(angle + fxrand() * mult_1);
                rotateZ(angle + fxrand() * mult_3);
                rotateY(angle + fxrand() * mult_4);  
            }
            else if (which_rot == 3) {  
                rotateX(1);
                rotateZ(0);
                rotateY(0);
            }
            else if (which_rot == 4) {  
                rotateX(0);
                rotateZ(0);
                rotateY(1);
            }
            else if (which_rot == 5) {
                rotateX(angle % fxrand() * mult_2);
                rotateZ(angle + fxrand() * mult_3);
                rotateY(angle % fxrand() * mult_4);   
            }
            
            if (which_prim == 1 || which_prim == 3) {
                box(fxrand() * mult_1);
            }
            else if (which_prim == 2) {
                plane(fxrand() * mult_1);
            }
            
            pop();
        }
    }
    
    noLoop();
    
    end = millis();
    elapsed = (end - start) / 1000;
    console.log('render time: ' + elapsed + 's');
    console.log('hash: ' + fxhash);
    //fxpreview();
    setTimeout(fxpreview, 200000);
    //save('(500) BEARS OF SUMMER_' + fxhash + 'png');
}

function keyReleased() {
    // save as PNG by pressing "s" or "S"
    if (key == 's' || key == 'S') {
		save('(500) BEARS OF SUMMER_' + fxhash + 'png');
	}
    
    // render alternate versions at same res by pressing "a" or "A"
    if (key == 'a' || key == 'A') {
        redraw();
	}
    
    // render alternate versions at higher res by pressing "x" or "X"
    if (key == 'x' || key == 'X') {
        pixelDensity(5);
        setTimeout(redraw, 500);
	}
}
let shader_img;
let _hash;
let s_texture;

let view_fix;
let gamma_cor;

function preload(){
    shader_img = loadShader('shader.vert', 'shader.frag');
}

function setup() {
    _hash = fxrand();

    createCanvas(windowWidth, windowHeight, WEBGL);
    
    view_fix = 0.0;
    gamma_cor = 0.0;
}

function ResizeWindow() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    ResizeWindow();
    background(0);

    shader_img.setUniform('iTime', millis() / 1000);
    shader_img.setUniform('Resolution', [width, height]);
    shader_img.setUniform('HASH', _hash);
    shader_img.setUniform('vFix', view_fix);
    shader_img.setUniform('Gc', gamma_cor);
    //shader_img.setUniform('Hash', random());

    shader(shader_img);
    rect(0, 0, width, height);

    //fxpreview();
}

function keyPressed() {
    if(key == 's') {
        save("Planetaroom.png");
    }
    if(key == 'f') {
        view_fix = fract(view_fix + 0.5);
    }
    if(key == 'g') {
        gamma_cor = fract(gamma_cor + 0.5);
    }
}
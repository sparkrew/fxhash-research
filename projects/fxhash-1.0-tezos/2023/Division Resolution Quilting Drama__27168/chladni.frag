precision highp float;

uniform vec2 u_resolution;
uniform float time;
uniform vec2 resolution;

uniform float window_width;
uniform float window_height;

uniform float a;
uniform float n;
uniform float b;
uniform float m;

uniform int color_scheme;
uniform float color_threshold;

uniform float scale_amount;
uniform float round_amount;

uniform vec3 base_color;

uniform vec3 color1;
uniform vec3 color2;
uniform vec3 color3;
uniform vec3 color4;
uniform vec3 color5;
uniform vec3 color6;
uniform vec3 color7;
uniform vec3 color8;

uniform float color_val_1;
uniform float color_val_2;
uniform float color_val_3;
uniform float color_val_4;
uniform float color_val_5;
uniform float color_val_6;

varying vec4 v_position;

float round_to_nearest( float number, float round ){
    number = number * 10000.0;
    round = round * 10000.0;
    number = ceil( number / round ) * round;
    return number / 10000.0;
}

void main() {
    vec2 st = gl_FragCoord.xy;

    highp float pos_x = (st.x+0.5) - window_width/2.0;
    highp float pos_y = (st.y+0.5) - window_height/2.0;

    pos_x = round_to_nearest( pos_x, round_amount );
    pos_y = round_to_nearest( pos_y, round_amount );

    pos_x = pos_x * scale_amount;
    pos_y = pos_y * scale_amount;

    highp float chladni = a * sin( 3.141592 * n * pos_x ) * sin( 3.141592 * m * pos_y ) + b * sin( 3.141592 * m * pos_x ) * sin( 3.141592 * n * pos_y );

    if (color_scheme == 1) {
        if (chladni > -color_threshold && chladni < color_threshold) {
            gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
        } else {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
    else if (color_scheme == 2) {
        if (chladni > 0.0 && chladni < (color_threshold * 3.0)){
            gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
        } else {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
    else if (color_scheme == 3) {
        if (chladni > -(color_threshold * 1.5) && chladni < (color_threshold * 1.5)) {
            float v = ((chladni - -(color_threshold * 1.5)) / ((color_threshold * 1.5) - -(color_threshold * 1.5))) * (1.0 - 0.0) + 0.0;
            gl_FragColor = vec4(v, v, v, 1.0);
        } else {
            float v = ((chladni - -(color_threshold * 3.0)) / ((color_threshold * 3.0) - -(color_threshold * 3.0))) * (1.0 - 0.0) + 0.0;
            float v_inv = 1.0 - (v - 0.0);
            gl_FragColor = vec4(v_inv, v_inv, v_inv, 1.0);
        }
    }

    else if (color_scheme == 4) {
        if (chladni < -(color_threshold * 3.0)) {
            gl_FragColor = vec4(color1, 1.0);
        } else if (chladni < -(color_threshold * 2.0)) {
            gl_FragColor = vec4(color2, 1.0);
        } else if (chladni < (color_threshold)) {
            gl_FragColor = vec4(color3, 1.0);
        } else if (chladni < 0.0) {
            gl_FragColor = vec4(color4, 1.0);
        } else if (chladni < (color_threshold)) {
            gl_FragColor = vec4(color5, 1.0);
        } else if (chladni < (color_threshold * 2.0)) {
            gl_FragColor = vec4(color6, 1.0);
        } else if (chladni < (color_threshold * 3.0)){
            gl_FragColor = vec4(color7, 1.0);
        } else {
            gl_FragColor = vec4(color8, 1.0);
        }
    }
    else if (color_scheme == 5) {
        if ( chladni < -(color_threshold * 4.0)) {
            gl_FragColor = vec4(base_color, 1.0);
        } else if (chladni < -(color_threshold * 3.0)) {
            gl_FragColor = vec4(color1, 1.0);
        } else if (chladni < -(color_threshold * 2.0)) {
            gl_FragColor = vec4(color2, 1.0);
        } else if (chladni < (color_threshold)) {
            gl_FragColor = vec4(color3, 1.0);
        } else if (chladni < 0.0) {
            gl_FragColor = vec4(color4, 1.0);
        } else if (chladni < (color_threshold)) {
            gl_FragColor = vec4(color5, 1.0);
        } else if (chladni < (color_threshold * 2.0)) {
            gl_FragColor = vec4(color6, 1.0);
        } else if (chladni < (color_threshold * 3.0)){
            gl_FragColor = vec4(color7, 1.0);
        } else if (chladni < (color_threshold * 4.0)){
            gl_FragColor = vec4(color8, 1.0);
        } else {
            gl_FragColor = vec4(base_color, 1.0);
        }
    }
    else if (color_scheme == 6) {
        if (chladni > -(color_threshold) && chladni < (color_threshold)) {
            gl_FragColor = vec4(color1, 1.0);
        } else if (chladni > -(color_threshold * 2.0) && chladni < (color_threshold * 2.0)) {
            gl_FragColor = vec4(color2, 1.0);
        } else if (chladni > -(color_threshold * 3.0) && chladni < (color_threshold * 3.0)) {
            gl_FragColor = vec4(color3, 1.0);
        } else if (chladni > -(color_threshold * 4.0) && chladni < (color_threshold * 4.0)) {
            gl_FragColor = vec4(color4, 1.0);
        } else if (chladni > -(color_threshold * 5.0) && chladni < (color_threshold * 5.0)) {
            gl_FragColor = vec4(color5, 1.0);
        } else if (chladni > -(color_threshold * 6.0) && chladni < (color_threshold * 6.0)) {
            gl_FragColor = vec4(color6, 1.0);
        } else if (chladni > -(color_threshold * 7.0) && chladni < (color_threshold * 7.0)) {
            gl_FragColor = vec4(color7, 1.0);
        } else {
            gl_FragColor = vec4(color8, 1.0);
        }
    }
    else if (color_scheme == 7) {
        if (chladni > -(color_threshold) && chladni < (color_threshold)) {
            gl_FragColor = vec4(color1, 1.0);
        } else if (chladni > -(color_threshold * 2.0) && chladni < (color_threshold * 2.0)) {
            gl_FragColor = vec4(color2, 1.0);
        } else if (chladni > -(color_threshold * 3.0) && chladni < (color_threshold * 3.0)) {
            gl_FragColor = vec4(color3, 1.0);
        } else if (chladni > -(color_threshold * 4.0) && chladni < (color_threshold * 4.0)) {
            gl_FragColor = vec4(color4, 1.0);
        } else if (chladni > -(color_threshold * 5.0) && chladni < (color_threshold * 5.0)) {
            gl_FragColor = vec4(color5, 1.0);
        } else if (chladni > -(color_threshold * 6.0) && chladni < (color_threshold * 6.0)) {
            gl_FragColor = vec4(color6, 1.0);
        } else if (chladni > -(color_threshold * 7.0) && chladni < (color_threshold * 7.0)) {
            gl_FragColor = vec4(color7, 1.0);
        } else if (chladni > -(color_threshold * 8.0) && chladni < (color_threshold * 8.0)) {
            gl_FragColor = vec4(color8, 1.0);
        } else {
            gl_FragColor = vec4(base_color, 1.0);
        }
    }
    else if (color_scheme == 8) {
        if (chladni > 0.0 && chladni < (color_threshold)) {
            gl_FragColor = vec4(color1, 1.0);
        } else if (chladni < (color_threshold * 2.0)) {
            gl_FragColor = vec4(color2, 1.0);
        } else if (chladni < (color_threshold * 3.0)) {
            gl_FragColor = vec4(color3, 1.0);
        } else if (chladni < (color_threshold * 4.0)) {
            gl_FragColor = vec4(color4, 1.0);
        } else if (chladni < (color_threshold * 5.0)) {
            gl_FragColor = vec4(color5, 1.0);
        } else if (chladni < (color_threshold * 6.0)) {
            gl_FragColor = vec4(color6, 1.0);
        } else if (chladni < (color_threshold * 7.0)) {
            gl_FragColor = vec4(color7, 1.0);
        } else {
            gl_FragColor = vec4(color8, 1.0);
        }
    }
    
    else if (color_scheme == 9) {
        if (chladni < -(color_threshold * 2.0)) {
            gl_FragColor = vec4(color1, 1.0);
        } else if (chladni < 0.0) {
            gl_FragColor = vec4(color2, 1.0);
        } else if (chladni < (color_threshold * 2.0)) {
            gl_FragColor = vec4(color3, 1.0);
        } else {
            gl_FragColor = vec4(color4, 1.0);
        }
    }
    else if (color_scheme == 10) {
        if (chladni < -(color_threshold * 4.0)) {
            gl_FragColor = vec4(base_color, 1.0);
        } else if (chladni < -(color_threshold * 2.0)) {
            gl_FragColor = vec4(color1, 1.0);
        } else if (chladni < 0.0) {
            gl_FragColor = vec4(color2, 1.0);
        } else if (chladni < (color_threshold * 2.0)) {
            gl_FragColor = vec4(color3, 1.0);
        } else if (chladni < (color_threshold * 4.0)) {
            gl_FragColor = vec4(color4, 1.0);
        } else {
            gl_FragColor = vec4(base_color, 1.0);
        }
    }
    else if (color_scheme == 11) {
        if (chladni > -(color_threshold) && chladni < (color_threshold)) {
            gl_FragColor = vec4(color1, 1.0);
        } else if (chladni > -(color_threshold * 2.0) && chladni < (color_threshold * 2.0)) {
            gl_FragColor = vec4(color2, 1.0);
        } else if (chladni > -(color_threshold * 3.0) && chladni < (color_threshold * 3.0)) {
            gl_FragColor = vec4(color3, 1.0);
        } else {
            gl_FragColor = vec4(color4, 1.0);
        }
    }
    else if (color_scheme == 12) {
        if (chladni > -(color_threshold) && chladni < (color_threshold)) {
            gl_FragColor = vec4(color1, 1.0);
        } else if (chladni > -(color_threshold * 2.0) && chladni < (color_threshold * 2.0)) {
            gl_FragColor = vec4(color2, 1.0);
        } else if (chladni > -(color_threshold * 3.0) && chladni < (color_threshold * 3.0)) {
            gl_FragColor = vec4(color3, 1.0);
        } else if (chladni > -(color_threshold * 4.0) && chladni < (color_threshold * 4.0)) {
            gl_FragColor = vec4(color4, 1.0);
        } else {
            gl_FragColor = vec4(base_color, 1.0);
        }
    }
    else if (color_scheme == 13) {
        if (chladni > 0.0 && chladni < (color_threshold )) {
            gl_FragColor = vec4(color1, 1.0);
        } else if (chladni < (color_threshold * 2.0)) {
            gl_FragColor = vec4(color2, 1.0);
        } else if (chladni < (color_threshold * 4.0)) {
            gl_FragColor = vec4(color3, 1.0);
        } else {
            gl_FragColor = vec4(color4, 1.0);
        }
    }


    else if (color_scheme == 14) {
        if (chladni > -(color_threshold * 4.0) && chladni < 0.0) {
            gl_FragColor = vec4(color1, 1.0);
        } else if (chladni >= (color_threshold * 0.0) && chladni < (color_threshold * 4.0)) {
            gl_FragColor = vec4(color2, 1.0);
        } else {
            gl_FragColor = vec4(color3, 1.0);
        }
    }
    else if (color_scheme == 15) {
        if (chladni >= 0.0 && chladni < (color_threshold * 2.0)) {
            gl_FragColor = vec4(color1, 1.0);
        } else if (chladni > (color_threshold * 2.0) && chladni < (color_threshold * 4.0)) {
            gl_FragColor = vec4(color2, 1.0);
        } else {
            gl_FragColor = vec4(color3, 1.0);
        }
    }
    else if (color_scheme == 16) {
        if (chladni > -(color_threshold * 2.0) && chladni < (color_threshold * 2.0)) {
            gl_FragColor = vec4(color1, 1.0);
        } else if (chladni > -(color_threshold * 4.0) && chladni < (color_threshold * 4.0)) {
            gl_FragColor = vec4(color2, 1.0);
        } else {
            gl_FragColor = vec4(color3, 1.0);
        }
    }
    else if (color_scheme == 17) {
        if (chladni > -(color_threshold * 2.0) && chladni < (color_threshold * 2.0)) {
            gl_FragColor = vec4(color1, 1.0);
        } else if (chladni > -(color_threshold * 4.0) && chladni < (color_threshold * 4.0)) {
            gl_FragColor = vec4(color2, 1.0);
        } else {
            gl_FragColor = vec4(base_color, 1.0);
        }
    }

    else if (color_scheme == 18) {
        if (chladni > -(color_threshold * 2.0) && chladni < (color_threshold * 2.0)) {
            gl_FragColor = vec4(color1, 1.0);
        } else {
            gl_FragColor = vec4(color2, 1.0);
        }
    }

    else if (color_scheme == 19) {
        if (chladni > -color_threshold && chladni < color_threshold) {
            float v = ((chladni - -(color_threshold)) / ((color_threshold) - -(color_threshold))) * (1.0 - 0.0) + 0.0;
            gl_FragColor = vec4(v, v, color_val_1, 1.0);
        } else if (chladni > -(color_threshold*3.0) && chladni < (color_threshold*3.0)) {
            float v = ((chladni - -(color_threshold*3.0)) / ((color_threshold*3.0) - -(color_threshold*3.0))) * (1.0 - 0.0) + 0.0;
            gl_FragColor = vec4(color_val_2, v, v, 1.0);
        } else if (chladni > -(color_threshold*6.0) && chladni < (color_threshold*6.0)) {
            float v = ((chladni - -(color_threshold*6.0)) / ((color_threshold*6.0) - -(color_threshold*6.0))) * (1.0 - 0.0) + 0.0;
            gl_FragColor = vec4(v, color_val_3, v, 1.0);
        } else {
            gl_FragColor = vec4(color1, 1.0);
        }
    }
    else if (color_scheme == 20) {
        if (chladni > -color_threshold && chladni < color_threshold) {
            float v = ((chladni - -(color_threshold)) / ((color_threshold) - -(color_threshold))) * (1.0 - 0.0) + 0.0;
            gl_FragColor = vec4(v, color_val_1, color_val_2, 1.0);
        } else if (chladni > -(color_threshold*3.0) && chladni < (color_threshold*3.0)) {
            float v = ((chladni - -(color_threshold*3.0)) / ((color_threshold*3.0) - -(color_threshold*3.0))) * (1.0 - 0.0) + 0.0;
            gl_FragColor = vec4(color_val_3, v, color_val_4, 1.0);
        } else if (chladni > -(color_threshold*6.0) && chladni < (color_threshold*6.0)) {
            float v = ((chladni - -(color_threshold*6.0)) / ((color_threshold*6.0) - -(color_threshold*6.0))) * (1.0 - 0.0) + 0.0;
            gl_FragColor = vec4(color_val_5, color_val_6, v, 1.0);
        } else {
            gl_FragColor = vec4(color1, 1.0);
        }
    }
    else if (color_scheme == 21) {
        if (chladni > -color_threshold && chladni < color_threshold) {
            float v = ((chladni - -(color_threshold)) / ((color_threshold) - -(color_threshold))) * (1.0 - 0.0) + 0.0;
            float v_inv = 1.0 - (v - 0.0);
            gl_FragColor = vec4(v, v_inv, 1.0, 1.0);
        } else if (chladni > -(color_threshold*2.0) && chladni < (color_threshold*2.0)) {
            float v = ((chladni - -(color_threshold*2.0)) / ((color_threshold*2.0) - -(color_threshold*2.0))) * (1.0 - 0.0) + 0.0;
            float v_inv = 1.0 - (v - 0.0);
            gl_FragColor = vec4(1.0, v, v_inv, 1.0);
        } else if (chladni > -(color_threshold*4.0) && chladni < (color_threshold*4.0)) {
            float v = ((chladni - -(color_threshold*4.0)) / ((color_threshold*4.0) - -(color_threshold*4.0))) * (1.0 - 0.0) + 0.0;
            float v_inv = 1.0 - (v - 0.0);
            gl_FragColor = vec4(v_inv, 1.0, v, 1.0);
        } else if (chladni > -(color_threshold*6.0) && chladni < (color_threshold*6.0)) {
            float v = ((chladni - -(color_threshold*6.0)) / ((color_threshold*6.0) - -(color_threshold*6.0))) * (1.0 - 0.0) + 0.0;
            float v_inv = 1.0 - (v - 0.0);
            gl_FragColor = vec4(v, 1.0, v_inv, 1.0);
        } else if (chladni > -(color_threshold*8.0) && chladni < (color_threshold*8.0)) {
            float v = ((chladni - -(color_threshold*8.0)) / ((color_threshold*8.0) - -(color_threshold*8.0))) * (1.0 - 0.0) + 0.0;
            float v_inv = 1.0 - (v - 0.0);
            gl_FragColor = vec4(v_inv, v, 1.0, 1.0);
        } else {
            float v = ((chladni - -(color_threshold*10.0)) / ((color_threshold*10.0) - -(color_threshold*10.0))) * (1.0 - 0.0) + 0.0;
            gl_FragColor = vec4(color_val_1, v, color_val_2, 1.0);
        }
    }
    else if (color_scheme == 22) {
        if (chladni > -color_threshold && chladni < color_threshold) {
            float v = ((chladni - -(color_threshold)) / ((color_threshold) - -(color_threshold))) * (1.0 - 0.0) + 0.0;
            gl_FragColor = vec4(v, v, 1.0, v);
        } else if (chladni > -(color_threshold*2.0) && chladni < (color_threshold*2.0)) {
            float v = ((chladni - -(color_threshold*2.0)) / ((color_threshold*2.0) - -(color_threshold*2.0))) * (1.0 - 0.0) + 0.0;
            gl_FragColor = vec4(1.0, v, v, v);
        } else if (chladni > -(color_threshold*4.0) && chladni < (color_threshold*4.0)) {
            float v = ((chladni - -(color_threshold*4.0)) / ((color_threshold*4.0) - -(color_threshold*4.0))) * (1.0 - 0.0) + 0.0;
            gl_FragColor = vec4(v, 1.0, v, v);
        } else if (chladni > -(color_threshold*6.0) && chladni < (color_threshold*6.0)) {
            float v = ((chladni - -(color_threshold*6.0)) / ((color_threshold*6.0) - -(color_threshold*6.0))) * (1.0 - 0.0) + 0.0;
            gl_FragColor = vec4(v, 1.0, v, v);
        } else if (chladni > -(color_threshold*8.0) && chladni < (color_threshold*8.0)) {
            float v = ((chladni - -(color_threshold*8.0)) / ((color_threshold*8.0) - -(color_threshold*8.0))) * (1.0 - 0.0) + 0.0;
            gl_FragColor = vec4(v, v, 1.0, v);
        } else {
            float v = ((chladni - -(color_threshold*10.0)) / ((color_threshold*10.0) - -(color_threshold*10.0))) * (1.0 - 0.0) + 0.0;
            gl_FragColor = vec4(color_val_1, v, color_val_2, v);
        }
    }
}


#ifdef GL_ES
precision highp float;
#endif

uniform vec2 iResolution;
uniform float iTime;
uniform vec2 iMouse;

uniform float iFrame;
varying vec2 vTexCoord;


void main() {
  
  // copy the vTexCoord
    // vTexCoord is a value that goes from 0.0 - 1.0 depending on the pixels location
    // we can use it to access every pixel on the screen
  
    vec2 coord = vTexCoord;

    float u = coord.x * 2.0 - 1.0;
    float v = coord.y * 2.0 - 1.0;
    const float scale = .35;
  
    //float u = coord.x;
    //float v = coord.y;
    //const float scale = 1.0;

    // Make sure pixels are square
    u = u * scale * iResolution.x / iResolution.y + 0.5;
    v = v * scale + 0.5;

    vec2 uv = vec2(u, v);
   
   // Calculate the to center distance
    float d = cos(length(uv - 0.5) * 1.0);
    
    // Calculate the ripple time
    //float t = d * d * 25.0 - iTime * 3.0;
    //float t = d * d * 25.0  * 3.0 - iTime;
    float t = d * sin(d * 25.0)  * 3.0 - iTime;
    
    // Calculate the ripple thickness
    //d = (cos(t) * 0.5 + 0.5) * (1.5 - d);
    d = (cos(t) * 0.5 + 0.5) * (1.5 - d);
    
    // Time varying pixel color
    vec3 col = 0.5 + 0.5 * cos(t / 10.0 + uv.xyx + vec3(0.0,2.0,4.0));

    // Set the output color to rgb channels and the thickness to alpha channel
    
    gl_FragColor = vec4(col, d);

	
}
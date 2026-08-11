#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D texture;
varying vec2 vTexCoord;
uniform vec2 resolution;

// Subtle CRT effect with scanlines, chromatic aberration, and dithering
void main() {
  vec2 uv = vTexCoord;
  
  // Add this line to fix the upside-down issue
  uv.y = 1.0 - uv.y;
  
  // Subtle chromatic aberration (RGB channel separation)
  float aberrationAmount = 0.001; // Very subtle amount
  vec3 color;
  color.r = texture2D(texture, vec2(uv.x + aberrationAmount, uv.y)).r;
  color.g = texture2D(texture, uv).g;
  color.b = texture2D(texture, vec2(uv.x - aberrationAmount, uv.y)).b;
  
  // Subtle scanlines
  float scanlineIntensity = 0.99; // Higher value = less visible scanlines
  float scanline = scanlineIntensity + (1.0 - scanlineIntensity) * sin(uv.y * resolution.y * 0.7);
  color *= scanline;
  
  // Simple ordered dithering
  float dither = mod(floor(uv.x * resolution.x) + floor(uv.y * resolution.y), 2.0) * 0.01;
  color += dither;
  
  gl_FragColor = vec4(color, 1.0);
}

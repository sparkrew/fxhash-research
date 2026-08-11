#ifdef GL_ES
precision highp float;
#endif

// Uniforms for resolution, time, and custom parameters
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_tempo;
uniform float u_colore1_1;
uniform float u_colore1_2;
uniform float u_colore1_3;
uniform float u_colore2_1;
uniform float u_colore2_2;
uniform float u_colore2_3;
uniform float u_colore3_1;
uniform float u_colore3_2;
uniform float u_colore3_3;
uniform float u_cameraZ;
uniform float u_scaleBox;
uniform float u_minRadius;
uniform int u_casoUD;
uniform float u_returnScene;
uniform float u_layer1R;
uniform float u_layer2R;
uniform float u_layer3R;
uniform float u_sfumatura1;
uniform float u_sfumatura2;
uniform float u_lPos;
uniform float u_lCol;
uniform float u_epsNormal;
uniform bool u_scambio;
uniform bool u_luci;
uniform bool u_luci2;
uniform int u_scelta;

// Constants
#define MAX_DISTANCE 100.0
#define MIN_DIST 0.001

// Mandelbox function to iterate points
vec3 mandelbox(vec3 z, float scale, float minRadius) {
    float r = length(z);
    // Scale and fold the point
    z = clamp(z * scale, -1.0, 1.0) * 1.0 - z;
    // Sphere folding
    if (r < minRadius) {
        z = z * minRadius / r;
    }
    return z;
}

// Scene distance function based on Mandelbox iteration
float scene(vec3 pos) {
    float scale = u_scaleBox;
    float minRadius = u_minRadius;
    vec3 z = pos;
    float dr = 1.0;
// Iteration based on 'u_scelta' parameter	
if(u_scelta == 1){
  for (int i = 0; i < 8; i++) {z = mandelbox(z, scale, minRadius);dr = length(z);if (dr < MIN_DIST || dr > MAX_DISTANCE) break;}
}else if(u_scelta == 2){
  for (int i = 0; i < 10; i++) {z = mandelbox(z, scale, minRadius);dr = length(z);if (dr < MIN_DIST || dr > MAX_DISTANCE) break;}
}else if(u_scelta == 3){
  for (int i = 0; i < 12; i++) {z = mandelbox(z, scale, minRadius);dr = length(z);if (dr < MIN_DIST || dr > MAX_DISTANCE) break;}
}else if(u_scelta == 4){
  for (int i = 0; i < 14; i++) {z = mandelbox(z, scale, minRadius);dr = length(z);if (dr < MIN_DIST || dr > MAX_DISTANCE) break;}
}else if(u_scelta == 5){
  for (int i = 0; i < 16; i++) {z = mandelbox(z, scale, minRadius);dr = length(z);if (dr < MIN_DIST || dr > MAX_DISTANCE) break;}
}else if(u_scelta == 6){
  for (int i = 0; i < 18; i++) {z = mandelbox(z, scale, minRadius);dr = length(z);if (dr < MIN_DIST || dr > MAX_DISTANCE) break;}
}				
    return u_returnScene * log(length(z) * scale) * length(z) / dr;
}

// Calculate surface normal using finite difference method
vec3 normal(vec3 pos) {
    vec3 eps = vec3(u_epsNormal, 0.0, 0.0);
    return normalize(vec3(
        scene(pos + eps.xyy) - scene(pos - eps.xyy),
        scene(pos + eps.yxy) - scene(pos - eps.yxy),
        scene(pos + eps.yyx) - scene(pos - eps.yyx)
    ));
}

// Lighting calculation
vec3 lighting(vec3 eye, vec3 rayDir, vec3 materialColor) {
		vec3 lightPos;
		vec3 lightColor;
		if(u_luci2){
    lightPos = vec3(3.0, 3.0, -3.0)+ vec3(cos(u_time * 0.2), sin(u_time * 2.1), 0.0);
		}else{
		lightPos = vec3(3.0, 3.0, -3.0);
		}
		if(u_luci){
    lightColor = vec3(1.0, 1.0, 1.0)+ vec3(cos(u_time * 0.2), sin(u_time * 2.1), 0.0);
		}else{
		lightColor = vec3(1.0, 1.0, 1.0);
		}
    vec3 ambientColor = vec3(0.2, 0.1, 0.2);
    vec3 normalDir = normal(eye);
    vec3 lightDir = normalize(lightPos - eye);
    float diffuse = max(dot(normalDir, lightDir), 0.0);
    vec3 reflectionDir = reflect(-lightDir, normalDir);
    vec3 viewDir = normalize(-eye);
    float specular = pow(max(dot(reflectionDir, viewDir), 0.0), 5.0);
    return ambientColor + materialColor * lightColor * diffuse + vec3(specular);
}

void main(void) {
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
    // Parallax layers
    float layer1 = u_layer1R ;
    float layer2 = u_layer2R ;
    float layer3 = u_layer3R;
		vec3 cameraPos;
		vec3 rayDir;
    // Camera position with optional oscillation based on 'u_casoUD' and 'u_scambio'
		if(u_casoUD == 1){
		if(!u_scambio){
		cameraPos = vec3(0.0, 0.0, u_cameraZ)+ vec3(cos(u_time * 0.002), sin(u_time * 0.001), 0.0);
		}else{
		cameraPos = vec3(0.0, 0.0, u_cameraZ);
		}
		}else if(u_casoUD == 2){
		if(!u_scambio){
		cameraPos = vec3(0.0, 0.0, u_cameraZ)- vec3(cos(u_time * 0.002), sin(u_time * 0.001), 0.0);
		}else{
		cameraPos = vec3(0.0, 0.0, u_cameraZ);
		}
		}else if(u_casoUD == 3){
		if(!u_scambio){
		cameraPos = vec3(0.0, 0.0, u_cameraZ)+ vec3(sin(u_time * 0.002), cos(u_time * 0.001), 0.0);		
		}else{
		cameraPos = vec3(0.0, 0.0, u_cameraZ);	
		}
		}else{
		if(!u_scambio){
		cameraPos = vec3(0.0, 0.0, u_cameraZ)- vec3(sin(u_time * 0.002), cos(u_time * 0.001), 0.0);
		}else{
		cameraPos = vec3(0.0, 0.0, u_cameraZ);
		}
		}
    // Ray direction
		if(!u_scambio){
    rayDir = normalize(vec3(uv,2.0+u_tempo));
    }else{
		rayDir = normalize(vec3(uv,2.0));
		}
    // Ray marching through layers
    vec3 eye1 = cameraPos + rayDir * layer1;
    vec3 eye2 = cameraPos + rayDir * layer2;
    vec3 eye3 = cameraPos + rayDir * layer3;
    float depth1 = scene(eye1);
    float depth2 = scene(eye2);
    float depth3 = scene(eye3);
    // Color modifications based on time
    vec3 color1 = vec3(u_colore1_1, u_colore1_2, u_colore1_3) + vec3(0.1 * cos(u_time * 0.1), 0.05 * sin(u_time * 0.1), 0.0);
    vec3 color2 = vec3(u_colore2_1, u_colore2_2, u_colore2_3) + vec3(0.05 * cos(u_time * 0.1), 0.1 * sin(u_time * 0.1), 0.0);
    vec3 color3 = vec3(u_colore3_1, u_colore3_2, u_colore3_3)+ vec3(0.075 * cos(u_time * 0.1), 0.075 * sin(u_time * 0.1), 0.0);
     // Final lighting and color mixing
    vec3 finalColor1 = lighting(eye1, rayDir, color1);
    vec3 finalColor2 = lighting(eye2, rayDir, color2);
    vec3 finalColor3 = lighting(eye3, rayDir, color3);
    // Mix colors based on depth
    vec3 finalColor = mix(mix(finalColor1, finalColor2, u_sfumatura1), finalColor3, u_sfumatura2);
    gl_FragColor = vec4(finalColor, 0.0);
}


#ifdef GL_ES
precision mediump float;
#endif

uniform vec3 u_Resolution;           // viewport resolution (in pixels)
uniform float u_Time;           // viewport resolution (in pixels)
uniform vec3 u_MainColor;

// PLANET
const float u_PlanetContrast = 0.5;
const vec2 u_PlanetOffset = vec2(2.0, 2.0);
const float u_PlanetSize = 10.0;
const int u_PlanetOctaves = 4;

uniform float u_Seed;
uniform float u_Pixels;
//const float pixels = 1000.0;

// find a better hash function (again)
float hash( float n )
{
    return fract(sin(n)*43758.5453);
}

float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * (43758.5453123 + u_Seed));
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm (vec2 st, int octaves) {
    // Initial values
    float value = 0.0;
    float amplitude = .5;
    float frequency = 0.;

    // Loop of octaves
    for (int i = 0; i < u_PlanetOctaves; i++) {
        value += amplitude * noise(st);
        // I am not very impressed with the 3D noise/real time results
        // value += amplitude * noise3D(vec3(st.x, st.y, u_Time));

        st *= 2.;
        amplitude *= .5;
    }
    return value;
}

vec2 spherify(vec2 uv) {
	vec2 centered = uv * 2.0 - 1.0;
	float z = sqrt(1.0 - dot(centered.xy, centered.xy));
	vec2 sphere = centered / (z + 1.0);

	return sphere * 0.5 + 0.5;
}

// * https://www.shadertoy.com/view/ll2GD3
// * inigo iquilez <3 but a simpler version, gives a two-colour gradient
vec3 myPalette(in float t, in vec3 cycler, in vec3 mainColour)
{
    return cycler + cycler * cos(6.28318 * (cycler * t + mainColour));
}

vec2 Planet(vec2 uv, vec2 position, float size)
{
	// distance from center, to create a circle
	float d_to_center = distance(uv, position);

	if (d_to_center > size) {
		return (vec2(0.0, 0.0));
	}

	uv = spherify(uv);

	// noise for the planet
    // * stack fbms as far as you dare
	float n = fbm(uv * u_PlanetSize + u_PlanetOffset, u_PlanetOctaves);
	float n2 = fbm(uv * u_PlanetSize + n * 3.0, u_PlanetOctaves);
	float n3 = fbm(uv * u_PlanetSize + n2 * 5.0, u_PlanetOctaves);

	float mixed = mix(n2, n3, n);
	
	// optionally create some contrast with this
	if (u_PlanetContrast > 0.0) {
		mixed = pow(abs(mixed), u_PlanetContrast);
	}

	// apply alpha
	float a = step(d_to_center, size);
	return (vec2(mixed, a));
}

void main()
{
	// vec2 uv = gl_FragCoord.xy / u_Resolution.xy;

    // * allows for pixelisation
    vec2 UV = gl_FragCoord.xy / u_Resolution.xy;
    vec2 uv = (floor(UV * u_Pixels) / u_Pixels);
    // vec2 uv = UV;


    // * planet values

    vec2 planetPos = vec2(0.5, 0.5);
    float d = distance(uv, planetPos);

    float planetSize = .50;
	vec2 planetRes = Planet(uv, planetPos, planetSize);

    float planet_val = planetRes.x;
	float planet_a = planetRes.y;

    float lerpVal = 0.0;

    if (planet_a > 0.0)
        lerpVal = planet_val;


    // * using the planet's value for colour 1 just random
    vec3 col1 = myPalette(lerpVal, vec3(0.1961, 0.8902, 0.9412), u_MainColor);
    // * but here, uv.x gives a bit of a shading effect
    vec3 col2 = myPalette(uv.x, vec3(0.5647, 0.7216, 0.7216), u_MainColor);

    vec3 color = mix(col1, col2, lerpVal);

    // * produces brighter or darker tones
    // color = mix(color, vec3(1.0, 1.0, 1.0), fbm(UV, 1));
    // color = mix(color, vec3(0.0, 0.0, 0.0), fbm(UV, 1));

    // * this is nice but it messes up the save feature
    // if (d > planetSize && d < 0.6) {
    //     color = mix(color, vec3(0.0, 0.0, 0.0), d * 1.75);
	//     gl_FragColor = vec4(color, d);
    //     return;
    // }

    float borderThickness = 0.005;


    float t1 = 1.0 - smoothstep(planetSize - borderThickness, planetSize, d);
    float t2 = 1.0 - smoothstep(planetSize, planetSize + borderThickness, d);

    gl_FragColor = vec4(mix(vec3(0.0, 0.0, 0.0), color.rgb, t1), t2);
    // gl_FragColor = vec4(color.rgb, planet_a);


    // gl_FragColor = vec4(mix(color.rgb, vec3(0.0, 0.0, 0.0), t1), t2);
}
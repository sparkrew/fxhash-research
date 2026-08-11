/**
 * Film grain & scanlines shader
 *
 * - ported from HLSL to WebGL / GLSL
 * https://web.archive.org/web/20210226214859/http://www.truevision3d.com/forums/showcase/staticnoise_colorblackwhite_scanline_shaders-t18698.0.html
 *
 * Screen Space Static Postprocessor
 *
 * Produces an analogue noise overlay similar to a film grain / TV static
 *
 * Original implementation and noise algorithm
 * Pat 'Hawthorne' Shearon
 *
 * Optimized scanlines + noise version with intensity scaling
 * Georg 'Leviathan' Steinrohder
 *
 * This version is provided under a Creative Commons Attribution 3.0 License
 * http://creativecommons.org/licenses/by/3.0/
 */

const FilmShader = {

	uniforms: {

		'tDiffuse': { value: null },
		'time': { value: 10.0 },
		'nIntensity': { value: 0.5 },
		'sIntensity': { value: 0.5 },
		'sCount': { value: 4096 },
		'grayscale': { value: 1 }

	},

	vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

	fragmentShader: /* glsl */`

		#include <common>

		// control parameter
		uniform float time;

		uniform bool grayscale;

		// noise effect intensity value (0 = no effect, 1 = full effect)
		uniform float nIntensity;

		// scanlines effect intensity value (0 = no effect, 1 = full effect)
		uniform float sIntensity;

		// scanlines effect count value (0 = no effect, 4096 = full effect)
		uniform float sCount;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			// sample the source
			vec4 cTextureScreen = texture2D(tDiffuse, vUv);
		
			// make some noise
			float dx = rand(vUv + time);
		
			// add noise
			vec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp(0.1 + dx, 0.0, 1.0);
		
			// get us a sine and cosine
			vec2 sc = vec2(sin(vUv.y * sCount), cos(vUv.y * sCount));
		
			// add scanlines
			cResult += cTextureScreen.rgb * vec3(sc.x, sc.y, sc.x) * sIntensity;
		
			// Convert to grayscale
			if (!grayscale) {
				// Calculate grayscale value
				float gray = cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11;
				// Set RGB components to grayscale value
				cResult = vec3(gray);
			}
		
			// Make colors more muted
			cResult *= 0.7; // Adjust the value (0.7) to control the level of desaturation
		
			// Convert to black and white
			float threshold = 0.5; // Adjust the value (0.5) to control the threshold for black and white
			if (cResult.r < threshold) {
				cResult = vec3(0.0); // Set color to black if below the threshold
			} else {
				cResult = vec3(1.0); // Set color to white if above the threshold
			}
		
			gl_FragColor = vec4(cResult, cTextureScreen.a);
		
		}
		
		
		
		
		`,

};

export { FilmShader };

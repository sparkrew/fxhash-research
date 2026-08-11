/**
 * Full-screen textured quad shader
 */

THREE.CopyShader = {

	uniforms: {

		'tDiffuse': { value: null },
		'opacity': { value: 1.0 }

	},

	vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

	fragmentShader: /* glsl */`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`

};

THREE.CopyShaderBg = {

	uniforms: {

		'tDiffuse': { value: null },
		'opacity': { value: 1.0 },
        'actualTex': {value: null},

	},

	vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

	fragmentShader: /* glsl */`

		uniform float opacity;

		uniform sampler2D tDiffuse;
		uniform sampler2D actualTex;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( actualTex, vUv );
			gl_FragColor = opacity * texel * 1.0;

		}`

};

THREE.CopyShaderBgFb = {

	uniforms: {

		'tDiffuse': { value: null },
		'ttDiffuse': { value: null },
		'opacity': { value: 1.0 },
        'actualTex': {value: null},
        'time': { value: 0 },
        'mixx': { value: 0.05 + fxrand()*0.1 },
        'noisem': { value: fxrand()*0.15 },

	},

	vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

	fragmentShader: /* glsl */ shader_noise + `

		uniform float opacity;

		uniform sampler2D ttDiffuse;
		uniform sampler2D actualTex;
        uniform float time;
        uniform float mixx;
        uniform float noisem;

		varying vec2 vUv;

		void main() {
			vec4 texel1 = texture2D( ttDiffuse, vUv );
			vec4 texel2 = texture2D( ttDiffuse, vUv +0.008);
			vec4 texel3 = texture2D( ttDiffuse, vUv -0.009);
            vec4 texel = vec4(texel1.r, texel2.g, texel3.b, 1.0);
			//vec4 canvas = texture2D( actualTex, vUv.yx * 0.99 + 0.005);
            float noisemapx = snoise(vec3(vUv.x*0.1, vUv.y*0.13, time*0.00015));
            float noisemapy = snoise(vec3(10.0+vUv.y*0.5, 13.0+vUv.x*0.38, time*0.00011));
			//vec4 canvas = texture2D( actualTex, vUv * (1.0 + (noisemap) * 0.01));
			//vec4 canvas = texture2D( actualTex, vUv.yx + vec2(noisemapx, noisemapy)* noisem);
			vec4 canvas = texture2D( actualTex, vUv.xy * (1.-noisem) + noisem/2.);
            vec4 renderTargetAux = texel1;
			gl_FragColor = mix(canvas, renderTargetAux, mixx);
		}`
};


THREE.CopyShaderBgBit = {

	uniforms: {

		'tDiffuse': { value: null },
		'canvas': { value: null },
		'opacity': { value: 1.0 },
        'time': { value: 0 },
        'rtime': { value: 0 },
        'mixx': { value: 0.05 + fxrand()*0.1 },
        'noisem': { value: fxrand()*0.15 },
        'mousex': { value: 0 },
        'mousey': { value: 0 },
	},

	vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

	fragmentShader: /* glsl */ shader_noise + bitfb

};

precision mediump float;

varying vec2 vuv;

uniform vec2 iResolution;

uniform sampler2D tex0;
uniform sampler2D noise_tex;

void main(){
	vec2 uv = gl_FragCoord.xy / iResolution.xy;
	uv.x *= iResolution.x / iResolution.y;

	uv.y = 1.0 - uv.y;

	vec4 noi = texture2D(noise_tex, uv*2.0);
	vec4 col = texture2D(tex0, vuv);
	vec4 col_n = texture2D(tex0, vuv + 16.0*noi.xy/iResolution.xy);
	col_n = mix(col_n, texture2D(tex0, vuv + 4.0*noi.zw/iResolution.xy), 0.5);

	vec4 out_col = mix(col_n, col, 0.5);
	out_col = mix(out_col, col*vec4(noi.rgb,1.0), 0.09*noi.a);

	gl_FragColor = out_col;
}

precision mediump float;

varying vec2 vTexCoord;
uniform sampler2D tex0;
uniform vec2 texelSize;
uniform vec2 direction;
uniform float force;

vec4 colorBloom(sampler2D t, vec2 texUV, vec2 stepSize){   
	vec4 colOut = vec4( 0.0 );
	const int stepCount = 8;
  
	float gWeights[stepCount];
	    gWeights[0] = 0.10035;
	    gWeights[1] = 0.09006;
	    gWeights[2] = 0.07216;
	    gWeights[3] = 0.06880;
	    gWeights[4] = 0.03828;
	    gWeights[5] = 0.02883;
	    gWeights[6] = 0.01141;
        gWeights[7] = 0.00655;

	float gOffsets[stepCount];
	    
	    gOffsets[0] = 1.5;
	    gOffsets[1] = 2.5;
	    gOffsets[2] = 3.5;
	    gOffsets[3] = 4.7;
	    gOffsets[4] = 5.5;
	    gOffsets[5] = 6.7;
	    gOffsets[6] = 7.5;
        gOffsets[7] = 8.7;
  
    const int forCount = 8;
	colOut += texture2D(t, texUV).rgba;
	for( int i = 0; i < forCount; i++ ){  

	  vec2 texCoordOffset = gOffsets[i] * stepSize;
	    vec3 col = 
          texture2D(t, texUV + texCoordOffset).rgb + 
          texture2D(t, texUV - texCoordOffset).rgb;
		col *= gWeights[i]*force;
	    colOut +=  vec4(col,(col.r+col.g+col.b)*3.0);  
	}
	return colOut;
} 


void main() {

  vec2 uv = vTexCoord;
  // the texture is loaded upside down and backwards by default so lets flip it
  uv = 1.0 - uv;
  
  vec4 tex = texture2D(tex0, uv);

  vec4 bloom = colorBloom(tex0, uv, texelSize * direction);

  gl_FragColor = vec4(bloom);
}
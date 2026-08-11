const vertShadEr_blur = `
	// our vertex data
	attribute vec3 aPosition;
	attribute vec2 aTexCoord;

	// lets get texcoords just for fun! 
	varying vec2 vTexCoord;

	void main() {
		// copy the texcoords
		vTexCoord = aTexCoord;

		// copy the position data into a vec4, using 1.0 as the w component
		vec4 positionVec4 = vec4(aPosition, 1.0);
		positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

		// send the vertex information on to the fragment shader
		gl_Position = positionVec4;
	}`;
	
const fragShadEr_blur = `
	precision mediump float;

	// lets grab texcoords just for fun
	varying vec2 vTexCoord;

	// our texture coming from p5
	uniform sampler2D tex0;
	uniform vec2 texelSize;

	void main() {

		vec2 uv = vTexCoord;
		// the texture is loaded upside down and backwards by default so lets flip it
		uv = 1.0 - uv;

		// a single pass blur works by sampling all the neighbor pixels and averaging them up
		// this is somewhat inefficient because we have to sample the texture 9 times -- texture2D calls are slow :( 
		// check out the two-pass-blur example for a better blur approach
		// get the webcam as a vec4 using texture2D

		// spread controls how far away from the center we should pull a sample from
		// you will start to see artifacts if you crank this up too high
		float spread = 4.0;

		// create our offset variable by multiplying the size of a texel with spread
		vec2 offset = texelSize * spread;

		// get all the neighbor pixels!
		vec4 tex = texture2D(tex0, uv); // middle middle -- the actual texel / pixel
		tex += texture2D(tex0, uv + vec2(-offset.x, -offset.y)); // top left
		tex += texture2D(tex0, uv + vec2(0.0, -offset.y)); // top middle
		tex += texture2D(tex0, uv + vec2(offset.x, -offset.y)); // top right

		tex += texture2D(tex0, uv + vec2(-offset.x, 0.0)); //middle left
		tex += texture2D(tex0, uv + vec2(offset.x, 0.0)); //middle right

		tex += texture2D(tex0, uv + vec2(-offset.x, offset.y)); // bottom left
		tex += texture2D(tex0, uv + vec2(0.0, offset.y)); // bottom middle
		tex += texture2D(tex0, uv + vec2(offset.x, offset.y)); // bottom right

		// we added 9 textures together, so we will divide by 9 to average them out and move the values back into a 0 - 1 range
		tex /= 9.0;

		gl_FragColor = tex;
	}`;


const vertShader_2d=`
	precision highp float;

	attribute vec3 aPosition;

	attribute vec2 aTexCoord;

	varying vec2 vTexCoord;

	void main() {
		vTexCoord = aTexCoord;

		vec4 positionVec4 = vec4(aPosition, 1.0);
		positionVec4.xy = positionVec4.xy * 2.0 - 1.0; 

		gl_Position = positionVec4;
	}

`

const vertShader01 = `
	//standard vertex shader
	attribute vec3 aPosition;
	
	void main() {
	  // Copy the position data into a vec4, adding 1.0 as the w parameter
	  vec4 positionVec4 = vec4(aPosition, 1.0);
	
	  // Scale to make the output fit the canvas
	  positionVec4.xy = positionVec4.xy * 2.0 - 1.0; 
	
	  // Send the vertex information on to the fragment shader
	  gl_Position = positionVec4;
	}`;


const fragShader01 = `
	#ifdef GL_ES
	precision mediump float;
	#endif
	
	uniform vec2 u_resolution; // This is passed in as a uniform from the sketch.js file
	uniform float u_time;// send time
	
	uniform float u_hue;

	// Convert HSB to RGB
	// https://gist.github.com/yiwenl/745bfea7f04c456e0101
	vec3 hsb2rgb(vec3 c)
	{
	    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
	    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
	    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
	}

	void main() {
	  // position of the pixel divided by resolution, to get normalized positions on the canvas
	  vec2 st = gl_FragCoord.xy/u_resolution.xy; 

	  // gl_FragColor = vec4(abs(sin(u_time + st.x*2.0)),abs(sin(u_time / st.y)),abs(sin(u_time)),1.0); // R,G,B,A
	  //gl_FragColor = vec4(abs(sin(u_time + st.x*2.0)),1,abs(sin(u_time)),1);

	  vec3 color = hsb2rgb(vec3(u_hue, st.x, st.y));

	  gl_FragColor = vec4(color, 1.0);

	}
`;

const vertShader_basic=`
	attribute vec3 aPosition;

	// P5 provides us with texture coordinates for most shapes
	attribute vec2 aTexCoord;

	// This is a varying variable, which in shader terms means that it will be passed from the vertex shader to the fragment shader
	varying vec2 vTexCoord;

	void main() {
	  // Copy the texcoord attributes into the varying variable
	  vTexCoord = aTexCoord;
	   
	  vec4 positionVec4 = vec4(aPosition, 1.0);
	  //positionVec4.xyz = positionVec4.xyz * 2.0 - 1.0;
	  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
	  gl_Position = positionVec4;
}`;

const vertShader_bloat=`
	attribute vec3 aPosition;

	// P5 provides us with texture coordinates for most shapes
	attribute vec2 aTexCoord;

	// This is a varying variable, which in shader terms means that it will be passed from the vertex shader to the fragment shader
	varying vec2 vTexCoord;

	void main() {
	  // Copy the texcoord attributes into the varying variable
	  vTexCoord = aTexCoord;
	   
	  vec4 positionVec4 = vec4(aPosition, 1.0);
	  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
	  positionVec4.z = positionVec4.z*(100.0); //(sin(positionVec4.x)-1.0);

	  gl_Position = positionVec4;
}`;


const fragShader_basic=`
	precision mediump float;

	// Receive the texCoord variable from the vertex shader
	varying vec2 vTexCoord;

	// Receive the texture from our p5 sketch
	// Uniform is a variable type used for sending data from your sketch to the shader
	// sampler2D is the type of variable we use for textures
	// uTexture is the name of our texture. It could be anything you want though!
	uniform sampler2D uTexture;

	void main() {
	  // Call texture2D with our image and texture coordinates
	  // texture2D typically takes two arguments
	  // First is the sampler2D you want to use
	  // Second is a vec2 containing the texture coordinates you want to use
	  vec4 color = texture2D(uTexture, vTexCoord);
	  
	  // Send the color to the screen
	  gl_FragColor = color;
	}
`;


const fragShader_blur3=`
	precision mediump float;

	// Receive the texCoord variable from the vertex shader
	varying vec2 vTexCoord;

	// Receive the texture from our p5 sketch
	// Uniform is a variable type used for sending data from your sketch to the shader
	// sampler2D is the type of variable we use for textures
	// uTexture is the name of our texture. It could be anything you want though!
	uniform sampler2D uTexture;

	// the size of a texel or 1.0 / width , 1.0 / height
	uniform vec2 uTexelSize;
	// which way to blur, vec2(1.0, 0.0) is horizontal, vec2(0.0, 1.0) is vertical
	uniform vec2 uDirection;

	// uniform int uBlurSize;       
	// uniform int uHorizontalPass; // 0 or 1 to indicate vertical or horizontal pass
	// uniform float uSigma;

	vec3 gaussianBlur( sampler2D t, vec2 texUV, vec2 stepSize ){   
		// a variable for our output                                                                                                                                                                 
		vec3 colOut = vec3( 0.0 );                                                                                                                                   

		// stepCount is 9 because we have 9 items in our array , const means that 9 will never change and is required loops in glsl                                                                                                                                     
		const int stepCount = 9;

		// these weights were pulled from the link above
		float gWeights[stepCount];
		    gWeights[0] = 0.10855;
		    gWeights[1] = 0.13135;
		    gWeights[2] = 0.10406;
		    gWeights[3] = 0.07216;
		    gWeights[4] = 0.04380;
		    gWeights[5] = 0.02328;
		    gWeights[6] = 0.01083;
		    gWeights[7] = 0.00441;
		    gWeights[8] = 0.00157;

		// these offsets were also pulled from the link above
		float gOffsets[stepCount];
		    gOffsets[0] = 0.66293;
		    gOffsets[1] = 2.47904;
		    gOffsets[2] = 4.46232;
		    gOffsets[3] = 6.44568;
		    gOffsets[4] = 8.42917;
		    gOffsets[5] = 10.41281;
		    gOffsets[6] = 12.39664;
		    gOffsets[7] = 14.38070;
		    gOffsets[8] = 16.36501;
		
		// lets loop nine times
		for( int i = 0; i < stepCount; i++ ){  

			// multiply the texel size by the by the offset value                                                                                                                                                               
		    vec2 texCoordOffset = gOffsets[i] * stepSize;

			// sample to the left and to the right of the texture and add them together                                                                                                           
		    vec3 col = texture2D( uTexture, texUV + texCoordOffset ).xyz + texture2D( uTexture, texUV - texCoordOffset ).xyz; 

			// multiply col by the gaussian weight value from the array
			col *= gWeights[i];

			// add it all up
		    colOut +=  col;                                                                                                                               
		}

		// our final value is returned as col out
		return colOut;                                                                                                                                                   
	} 

	void main() {

	  	vec2 uv = vTexCoord;
		// the texture is loaded upside down and backwards by default so lets flip it
		uv = 1.0 - uv;

		// use our blur function
		vec3 blur = gaussianBlur(uTexture, uv, uTexelSize * uDirection);

		gl_FragColor = vec4(blur, 1.0);
	}
`;


const fragShader_spread=`
	precision mediump float;

	// Receive the texCoord variable from the vertex shader
	varying vec2 vTexCoord;

	// Receive the texture from our p5 sketch
	uniform sampler2D uTexture;

	

	//uniform vec2 uTexSize;

	// Convert HSB to RGB
	// https://gist.github.com/yiwenl/745bfea7f04c456e0101
	vec3 hsb2rgb(vec3 c)
	{
	    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
	    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
	    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
	}

	void main() {
		// Get coord and flip
		//vec2 uv = 1.0-vTexCoord;
		vec2 uv = 1.0-vTexCoord;
		vec2 o = vec2(0.5,0.5);
		vec2 p0 = uv-o;
		vec2 n = abs(p0);
		float l = length(abs(p0));

		vec2 p1 = p0 * 0.99;
		vec2 p2 = p0 * 0.97;
		vec2 p3 = p0 * 0.97;

		float w0 = 1.0;
		float w1 = 1.0;
		float w2 = 1.0;
		float w3 = 0.3;

		vec4 col0  = texture2D( uTexture, uv);
		vec4 col1 = texture2D( uTexture, p1+o);
		vec4 col2 = texture2D( uTexture, p2+o);
		vec4 col3 = texture2D( uTexture, p3+o);
		

		// vec3 c = hsb2rgb(vec3(l,1.0,1.0));
		// vec3 c = vec3(0.0, 0.0, 0.0);
		
		gl_FragColor = vec4((col1*w1+col2*w2+col3*w3)/(w1+w2+w3));
		// if(length(vec3(col3[0],col3[1],col3[2]))>50.0){
		// 	gl_FragColor = vec4((col1*w1+col2*w2+col3*w3)/(w1+w2+w3));
		// }else{
		// 	gl_FragColor = vec4((col1*w1+col2*w2)/(w1+w2));
		// }
		
		//gl_FragColor = vec4(col2);

		// vec4 color = texture2D(uTexture, vTexCoord);
		// gl_FragColor = color;
	}
`;
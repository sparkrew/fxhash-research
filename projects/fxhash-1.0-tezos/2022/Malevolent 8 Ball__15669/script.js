const canvas = document.createElement('canvas')
document.body.appendChild(canvas)

const gl = canvas.getContext('webgl')

function resize() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

resize()

window.addEventListener('resize', resize)

const mouse = { x: 0, y: 0 }

document.body.addEventListener('pointermove', function (e) {
  mouse.x = e.pageX
  mouse.y = e.pageY
})

const vertexShaderSource = `attribute vec2 aVertexPosition;
void main() {
  gl_Position = vec4(aVertexPosition, 0.0, 1.0);
}`

var fragmentShaderSource2 = `
float snow = 0.0;
float gradient = (1.0-float(fragCoord.y / iResolution.x))*0.4;
float random = fract(sin(dot(fragCoord.xy,vec2(12.9898,78.233)))* 50342.5453);
for(int k=0;k<6;k++){
  for(int i=0;i<12;i++){
      float cellSize = 20.0 + (float(i)*3.0);
      float downSpeed = 0.1+(sin(iTime*0.4+float(k+i*20))+1.0)*0.0001;
      vec2 uv = (fragCoord.xy / iResolution.x)+vec2(0.01*sin((iTime+float(k*6185))*-0.6+float(i))*(-10.0/float(i)),downSpeed*(iTime+float(k*1352))*(-1.0/float(i)));
      vec2 uvStep = (ceil((uv)*cellSize-vec2(0.5,0.5))/cellSize);
      float x = fract(sin(dot(uvStep.xy,vec2(12.9898+float(k)*12.0,78.233+float(k)*315.156)))* 43758.5453+float(k)*12.0)-0.5;
      float y = fract(sin(dot(uvStep.xy,vec2(62.2364+float(k)*23.0,94.674+float(k)*95.0)))* 62159.8432+float(k)*12.0)+0.5;

      float randomMagnitude1 = sin(iTime*2.5)*0.7/cellSize;
      float randomMagnitude2 = cos(iTime*2.5)*0.7/cellSize;

      float d = 2.0*distance((uvStep.xy + vec2(x*sin(y),y) * randomMagnitude1 * vec2(y,x)*randomMagnitude2),uv.xy);

      float omiVal = fract(sin(dot(uvStep.xy,vec2(32.4691,94.615)))* 31572.1684);
      if(omiVal<0.08?true:false){
        float newd = (x+1.0)*0.4*clamp(1.9-d*(15.0+(x*6.3))*(cellSize/1.4),0.0,1.0);
        /*snow += d<(0.08+(x*0.3))/(cellSize/1.4)?
            newd
            :newd;*/
        snow -= newd;
      }
    }
  }
  gl_FragColor = vec4(snow) + gradient*vec4(.5,1.1,1.3,1.0) + random*0.01;
}`

var fragmentShaderSource = `
#ifdef GL_ES
precision highp float;
#endif

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define CHAR_SIZE vec2(6, 7)
#define CHAR_SPACING vec2(6, 9)

#define DOWN_SCALE 2.0

vec2 res = resolution.xy / DOWN_SCALE;
vec2 start_pos = vec2(0);
vec2 print_pos = vec2(0);
vec2 print_pos_pre_move = vec2(0);
vec3 text_color = vec3(1);

/*
Top left pixel is the most significant bit.
Bottom right pixel is the least significant bit.

 ███  |
█   █ |
█   █ |  
█   █ |
█████ |
█   █ |
█   █ |

000000 
100010
100010  
100010
111110
100010
100010

011100 (upper 21 bits)
100010 -> 011100 100010 100010 100 -> 935188
100010  
100
   010 (lower 21 bits)
111110 -> 010 111110 100010 100010 -> 780450
100010
100010

vec2(935188.0,780450.0)
*/

//Text coloring
#define HEX(i) text_color = mod(vec3(i / 65536,i / 256,i),vec3(256.0))/255.0;
#define RGB(r,g,b) text_color = vec3(r,g,b);

#define STRWIDTH(c) (c * CHAR_SPACING.x)
#define STRHEIGHT(c) (c * CHAR_SPACING.y)
#define BEGIN_TEXT(x,y) print_pos = floor(vec2(x,y)); start_pos = floor(vec2(x,y));

//Automatically generated from the sprite sheet here: http://uzebox.org/wiki/index.php?title=File:Font6x8.png
#define _ col+=char(vec2(0.0,0.0),uv);
#define _spc col+=char(vec2(0.0,0.0),uv)*text_color;
#define _exc col+=char(vec2(276705.0,32776.0),uv)*text_color;
#define _quo col+=char(vec2(1797408.0,0.0),uv)*text_color;
#define _hsh col+=char(vec2(10738.0,1134484.0),uv)*text_color;
#define _dol col+=char(vec2(538883.0,19976.0),uv)*text_color;
#define _pct col+=char(vec2(1664033.0,68006.0),uv)*text_color;
#define _amp col+=char(vec2(545090.0,174362.0),uv)*text_color;
#define _apo col+=char(vec2(798848.0,0.0),uv)*text_color;
#define _lbr col+=char(vec2(270466.0,66568.0),uv)*text_color;
#define _rbr col+=char(vec2(528449.0,33296.0),uv)*text_color;
#define _ast col+=char(vec2(10471.0,1688832.0),uv)*text_color;
#define _crs col+=char(vec2(4167.0,1606144.0),uv)*text_color;
#define _per col+=char(vec2(0.0,1560.0),uv)*text_color;
#define _dsh col+=char(vec2(7.0,1572864.0),uv)*text_color;
#define _com col+=char(vec2(0.0,1544.0),uv)*text_color;
#define _lsl col+=char(vec2(1057.0,67584.0),uv)*text_color;
#define _0 col+=char(vec2(935221.0,731292.0),uv)*text_color;
#define _1 col+=char(vec2(274497.0,33308.0),uv)*text_color;
#define _2 col+=char(vec2(934929.0,1116222.0),uv)*text_color;
#define _3 col+=char(vec2(934931.0,1058972.0),uv)*text_color;
#define _4 col+=char(vec2(137380.0,1302788.0),uv)*text_color;
#define _5 col+=char(vec2(2048263.0,1058972.0),uv)*text_color;
#define _6 col+=char(vec2(401671.0,1190044.0),uv)*text_color;
#define _7 col+=char(vec2(2032673.0,66576.0),uv)*text_color;
#define _8 col+=char(vec2(935187.0,1190044.0),uv)*text_color;
#define _9 col+=char(vec2(935187.0,1581336.0),uv)*text_color;
#define _col col+=char(vec2(195.0,1560.0),uv)*text_color;
#define _scl col+=char(vec2(195.0,1544.0),uv)*text_color;
#define _les col+=char(vec2(135300.0,66052.0),uv)*text_color;
#define _equ col+=char(vec2(496.0,3968.0),uv)*text_color;
#define _grt col+=char(vec2(528416.0,541200.0),uv)*text_color;
#define _que col+=char(vec2(934929.0,1081352.0),uv)*text_color;
#define _ats col+=char(vec2(935285.0,714780.0),uv)*text_color;
#define _A col+=char(vec2(935188.0,780450.0),uv)*text_color;
#define _B col+=char(vec2(1983767.0,1190076.0),uv)*text_color;
#define _C col+=char(vec2(935172.0,133276.0),uv)*text_color;
#define _D col+=char(vec2(1983764.0,665788.0),uv)*text_color;
#define _E col+=char(vec2(2048263.0,1181758.0),uv)*text_color;
#define _F col+=char(vec2(2048263.0,1181728.0),uv)*text_color;
#define _G col+=char(vec2(935173.0,1714334.0),uv)*text_color;
#define _H col+=char(vec2(1131799.0,1714338.0),uv)*text_color;
#define _I col+=char(vec2(921665.0,33308.0),uv)*text_color;
#define _J col+=char(vec2(66576.0,665756.0),uv)*text_color;
#define _K col+=char(vec2(1132870.0,166178.0),uv)*text_color;
#define _L col+=char(vec2(1065220.0,133182.0),uv)*text_color;
#define _M col+=char(vec2(1142100.0,665762.0),uv)*text_color;
#define _N col+=char(vec2(1140052.0,1714338.0),uv)*text_color;
#define _O col+=char(vec2(935188.0,665756.0),uv)*text_color;
#define _P col+=char(vec2(1983767.0,1181728.0),uv)*text_color;
#define _Q col+=char(vec2(935188.0,698650.0),uv)*text_color;
#define _R col+=char(vec2(1983767.0,1198242.0),uv)*text_color;
#define _S col+=char(vec2(935171.0,1058972.0),uv)*text_color;
#define _T col+=char(vec2(2035777.0,33288.0),uv)*text_color;
#define _U col+=char(vec2(1131796.0,665756.0),uv)*text_color;
#define _V col+=char(vec2(1131796.0,664840.0),uv)*text_color;
#define _W col+=char(vec2(1131861.0,699028.0),uv)*text_color;
#define _X col+=char(vec2(1131681.0,84130.0),uv)*text_color;
#define _Y col+=char(vec2(1131794.0,1081864.0),uv)*text_color;
#define _Z col+=char(vec2(1968194.0,133180.0),uv)*text_color;
#define _lsb col+=char(vec2(925826.0,66588.0),uv)*text_color;
#define _rsl col+=char(vec2(16513.0,16512.0),uv)*text_color;
#define _rsb col+=char(vec2(919584.0,1065244.0),uv)*text_color;
#define _pow col+=char(vec2(272656.0,0.0),uv)*text_color;
#define _usc col+=char(vec2(0.0,62.0),uv)*text_color;
#define _a col+=char(vec2(224.0,649374.0),uv)*text_color;
#define _b col+=char(vec2(1065444.0,665788.0),uv)*text_color;
#define _c col+=char(vec2(228.0,657564.0),uv)*text_color;
#define _d col+=char(vec2(66804.0,665758.0),uv)*text_color;
#define _e col+=char(vec2(228.0,772124.0),uv)*text_color;
#define _f col+=char(vec2(401543.0,1115152.0),uv)*text_color;
#define _g col+=char(vec2(244.0,665474.0),uv)*text_color;
#define _h col+=char(vec2(1065444.0,665762.0),uv)*text_color;
#define _i col+=char(vec2(262209.0,33292.0),uv)*text_color;
#define _j col+=char(vec2(131168.0,1066252.0),uv)*text_color;
#define _k col+=char(vec2(1065253.0,199204.0),uv)*text_color;
#define _l col+=char(vec2(266305.0,33292.0),uv)*text_color;
#define _m col+=char(vec2(421.0,698530.0),uv)*text_color;
#define _n col+=char(vec2(452.0,1198372.0),uv)*text_color;
#define _o col+=char(vec2(228.0,665756.0),uv)*text_color;
#define _p col+=char(vec2(484.0,667424.0),uv)*text_color;
#define _q col+=char(vec2(244.0,665474.0),uv)*text_color;
#define _r col+=char(vec2(354.0,590904.0),uv)*text_color;
#define _s col+=char(vec2(228.0,114844.0),uv)*text_color;
#define _t col+=char(vec2(8674.0,66824.0),uv)*text_color;
#define _u col+=char(vec2(292.0,1198868.0),uv)*text_color;
#define _v col+=char(vec2(276.0,664840.0),uv)*text_color;
#define _w col+=char(vec2(276.0,700308.0),uv)*text_color;
#define _x col+=char(vec2(292.0,1149220.0),uv)*text_color;
#define _y col+=char(vec2(292.0,1163824.0),uv)*text_color;
#define _z col+=char(vec2(480.0,1148988.0),uv)*text_color;
#define _lpa col+=char(vec2(401542.0,66572.0),uv)*text_color;
#define _bar col+=char(vec2(266304.0,33288.0),uv)*text_color;
#define _rpa col+=char(vec2(788512.0,1589528.0),uv)*text_color;
#define _tid col+=char(vec2(675840.0,0.0),uv)*text_color;
#define _lar col+=char(vec2(8387.0,1147904.0),uv)*text_color;
#define _nl print_pos = start_pos - vec2(0,CHAR_SPACING.y);

//Extracts bit b from the given number.
float extract_bit(float n, float b)
{
	b = clamp(b,-1.0,22.0);
	return floor(mod(floor(n / pow(2.0,floor(b))),2.0));   
}

//Returns the pixel at uv in the given bit-packed sprite.
float sprite(vec2 spr, vec2 size, vec2 uv)
{
	uv = floor(uv);
	float bit = (size.x-uv.x-1.0) + uv.y * size.x;  
	bool bounds = all(greaterThanEqual(uv,vec2(0)))&& all(lessThan(uv,size)); 
	return bounds ? extract_bit(spr.x, bit - 21.0) + extract_bit(spr.y, bit) : 0.0;
}

//Prints a character and moves the print position forward by 1 character width.
vec3 char(vec2 ch, vec2 uv)
{
	float px = sprite(ch, CHAR_SIZE, uv - print_pos);
	print_pos.x += CHAR_SPACING.x;
	print_pos.y += sin(4.*print_pos.x-time*10.);
	return vec3(px);
}


vec3 Text(vec2 uv)
{
    	vec3 col = vec3(0.0);
    	
    	vec2 center_pos = vec2(res.x/2.0 - STRWIDTH(20.0)/2.0,res.y/2.0 - STRHEIGHT(1.0)/2.0);
       	
    	BEGIN_TEXT(center_pos.x,center_pos.y)
	HEX(0xFF00DD) _S _K _A _S _H _ _B _E _T _T _E _R _ _T _H _A _N _ _R _I _C _H;
	BEGIN_TEXT(res.x/2.0-STRWIDTH(11.0)/2.0,res.y/2.0)
	print_pos += vec2(cos(time)*96.,sin(time)*96.);
	
	// RGB(1,0,0) _M RGB(1,.5,0)_o RGB(1,1,0)_v RGB(0,1,0)_i RGB(0,.5,1)_n RGB(0.5,0,1)_g _ RGB(1,0,0)_T RGB(1,.5,0)_e RGB(1,1,0)_x RGB(0,1,0)_t
    
    	return col;
}

void main( void )
{
	vec2 uv = gl_FragCoord.xy / DOWN_SCALE;
	vec2 duv = floor(gl_FragCoord.xy / DOWN_SCALE);
    
	vec3 pixel = Text(duv);
    
	vec3 col = pixel*0.9+0.1;
	col *= (1.-distance(mod(uv,vec2(1.0)),vec2(0.65)))*1.2;
	
	gl_FragColor = vec4(vec3(col), 1.0);
}
`

const vertexShader = gl.createShader(gl.VERTEX_SHADER)
gl.shaderSource(vertexShader, vertexShaderSource)
gl.compileShader(vertexShader)

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
gl.shaderSource(fragmentShader, fragmentShaderSource)
gl.compileShader(fragmentShader)

const program = gl.createProgram()
gl.attachShader(program, vertexShader)
gl.attachShader(program, fragmentShader)
gl.linkProgram(program)

const vertices = new Float32Array([-1, 1, 1, 1, 1, -1, -1, 1, 1, -1, -1, -1])

const vertexBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

const itemSize = 2
const numItems = vertices.length / itemSize

program.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition')
gl.enableVertexAttribArray(program.aVertexPosition)
gl.vertexAttribPointer(program.aVertexPosition, itemSize, gl.FLOAT, false, 0, 0)

gl.useProgram(program)

gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)

function render() {
  gl.viewport(0, 0, canvas.width, canvas.height)
  gl.clearColor(1, 1, 1, 1)
  gl.clear(gl.COLOR_BUFFER_BIT)

  program.uColor = gl.getUniformLocation(program, 'uColor')
  gl.uniform4fv(program.uColor, [0.0, 0.0, 0.0, 1.0])

  program.uPosition = gl.getUniformLocation(program, 'uPosition')
  gl.uniform2fv(program.uPosition, [mouse.x, mouse.y])

  program.uTime = gl.getUniformLocation(program, 'uTime')
  gl.uniform1f(program.uTime, 0.001 * performance.now())

  gl.drawArrays(gl.TRIANGLES, 0, numItems)

  requestAnimationFrame(render)
}

render()
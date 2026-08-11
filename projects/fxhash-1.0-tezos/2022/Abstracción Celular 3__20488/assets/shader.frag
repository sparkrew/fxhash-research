#ifdef GL_ES
precision mediump float;
#endif

#define PROCESSING_COLOR_SHADER
#define pi 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
//uniform float u_tinte1;
//uniform float u_tinte2;
//uniform float u_tam1;
//uniform float u_tam2;
//uniform float u_var1;
//uniform float u_var2;
//uniform float u_vel;
uniform vec2 graf_resolution;
uniform sampler2D laImagen;
uniform sampler2D ImagenFondo;

//-------------------------------------------------------------------------
vec3 rgb2hsb( in vec3 c ){
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz),
                 vec4(c.gb, K.xy),
                 step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r),
                 vec4(c.r, p.yzx),
                 step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)),
                d / (q.x + e),
                q.x);
}
//-------------------------------------------------------------------------
//  Function from Iñigo Quiles
//  https://www.shadertoy.com/view/MsS3Wc
vec3 hsb2rgb( in vec3 c ){
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                             6.0)-3.0)-1.0,
                     0.0,
                     1.0 );
    rgb = rgb*rgb*(3.0-2.0*rgb);
    return c.z * mix(vec3(1.0), rgb, c.y);
}
//-------------------------------------------------------------------------
//devuelve float
float random (in vec2 _st) { 
    return fract(sin(dot(_st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}
//-------------------------------------------------------------------------
//devuelve vec2
vec2 random2( vec2 p ) { 
    return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
}
//-------------------------------------------------------------------------
mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}
//-------------------------------------------------------------------------
vec3 voronoi( in vec2 st , in float escala , in float u_time , in float conCurvas ){
    
    st.x *= u_resolution.x/u_resolution.y;
    vec3 color = vec3(.0);

    // Scale
    st *= escala;

    // Tile the space
    vec2 i_st = floor(st);
    vec2 f_st = fract(st);
    vec2 diff = vec2(0);

    float m_dist = 1.0;  // minimum distance

    for (int y= -1; y <= 1; y++) {
        for (int x= -1; x <= 1; x++) {
            // Neighbor place in the grid
            vec2 neighbor = vec2(float(x),float(y));

            // Random position from current + neighbor place in the grid
            vec2 suma = i_st + neighbor;
            vec2 point = random2( suma );


            point.x = 0.5 + 0.5 * cos( u_time + 6.2831 * point.x );
            // Animate the point
            point.y = 0.5 + 0.5 * sin( u_time + 6.2831 * point.y );

            // Vector between the pixel and the point
            vec2 diff = neighbor + point - f_st;

            // Distance to the point
            float dist = length(diff);

            // Keep the closer distance
            m_dist = min(m_dist, dist);
            //*/
        }
    }

    color += m_dist;

    // Draw the min distance (distance field)
    //color = vec3( u_time );
    //color = vec3( u_mouse.x );

    // Draw cell center
    color += 1.0-step(0.02, m_dist);

    if( conCurvas>0.0 ){
        color -= step( conCurvas ,abs(sin(27.0*m_dist)) ) * 0.5;
    }    

    return color;
}
//-------------------------------------------------------------------------
float mapC( in float x , in float x1 , in float x2 , in float y1 , in float y2 ){
    float valor = (x-x1)/(x2-x1)*(y2-y1)+y1;
    return valor;    
}
//-------------------------------------------------------------------------
vec3 degrade( in vec2 st , in float angulo , in vec3 color1 , in vec3 color2 , in float margen ){   

    st = rotate2d( angulo ) * st;    

    float posi = mapC( st.x , 0.0+margen , 1.0-margen , 0.0 , 1.0 );

    vec3 color = mix( color1 , color2 , posi );

    return color;    
}
//-------------------------------------------------------------------------
vec3 amplificar( in vec3 color , in float valor , in float piso ){
    return clamp( color * valor + piso , 0.0 , 1.0 );
}
//-------------------------------------------------------------------------
//la utiliza la función noise
vec2 hash( vec2 p ) // replace this by something better
{
    p = vec2( dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)) );
    return -1.0 + 2.0*fract(sin(p)*43758.5453123);
}
//-------------------------------------------------------------------------
//función noise inicial
float noise( in vec2 pp , in float escala )
{

    vec2 p = pp * escala;
    const float K1 = 0.366025404; // (sqrt(3)-1)/2;
    const float K2 = 0.211324865; // (3-sqrt(3))/6;

    vec2  i = floor( p + (p.x+p.y)*K1 );
    vec2  a = p - i + (i.x+i.y)*K2;
    float m = step(a.y,a.x); 
    vec2  o = vec2(m,1.0-m);
    vec2  b = a - o + K2;
    vec2  c = a - 1.0 + 2.0*K2;
    vec3  h = max( 0.5-vec3(dot(a,a), dot(b,b), dot(c,c) ), 0.0 );
    vec3  n = h*h*h*h*vec3( dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)));
    return dot( n, vec3(70.0) );
}
//-------------------------------------------------------------------------
//función noise más refinada
float noise2( in vec2 st , in float escala ){
    
    vec2 uv = st;
    float f = 0.0;
    mat2 m = mat2( 1.6,  1.2, -1.2,  1.6 );
        f  = 0.5000*noise( uv , escala ); uv = m*uv;
        f += 0.2500*noise( uv , escala ); uv = m*uv;
        f += 0.1250*noise( uv , escala ); uv = m*uv;
        f += 0.0625*noise( uv , escala ); uv = m*uv;
    
    return f;
}
//-------------------------------------------------------------------------
vec2 kaleido( in vec2 uv , in float valor )
{
    float th = atan(uv.y, uv.x);
    float r = pow(length(uv), 1.);

    float p1 = sin(2. * pi * valor / 10.);
    float q = 2. * pi / ( 5. + 4. * p1);
    th = abs(mod(th, q) - 0.5 * q);
    return vec2(cos(th), sin(th)) * pow(r, 1.3 + 1.3 / (1.3 + sin(2. * pi *valor / 3.))) * .1;
}
//-------------------------------------------------------------------------
vec2 kaleido2( in vec2 st , in vec2 centro , in float _SegmentCount , in float rotacion )
{
    vec2 shiftUV = st - centro;
    float radius = sqrt( dot(shiftUV, shiftUV) );
    float angle = atan( shiftUV.y , shiftUV.x ) + rotacion;
    float segmentAngle = pi * 2.0 / _SegmentCount;

    angle -= segmentAngle * floor( angle / segmentAngle );

    angle = min(angle, segmentAngle - angle);
    vec2 uv = vec2( cos(angle) , sin(angle) ) * radius + 0.5;
    uv = max( min( uv , 2.0 - uv ), -uv );
    return uv;
}
//-------------------------------------------------------------------------
void main() {

	vec2 st = gl_FragCoord.xy/u_resolution;
    vec2 mt = u_mouse/u_resolution;

    float modx = 1.0/graf_resolution.x;
    float mody = 1.0/graf_resolution.y;
    float nx = floor( st.x/modx ) * modx;
    float ny = floor( st.y/mody ) * mody;
    float difx = st.x-nx;
    float dify = st.y-ny;
    vec2 nt = vec2( nx , ny );

    vec2 posText = vec2( st.x * 0.5 , 1.0-st.y*0.5 );
    vec4 estePixel = texture2D( laImagen , posText );

    float gris  = estePixel.r;
    //vec2 posEnFondo = vec2( gris * 0.5 , 0.5 );
    float angulo = gris * 2.0 * pi;

    float x = 0.45 * cos(angulo) + 0.5;// + difx;
    float y = 0.45 * sin(angulo) + 0.5;// + dify;

    vec2 posEnFondo = vec2( x * 0.5 , 1.0 - y * 0.5 );

    vec4 estePixFondo = texture2D( ImagenFondo , posEnFondo );
    
	gl_FragColor = estePixFondo;
}
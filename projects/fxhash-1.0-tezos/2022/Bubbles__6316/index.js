function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//Variables
osc1=rnd_btw(5,0.01,3)
osc1color=fxrand(0.75,0.01,4)
rot=fxrand(1,0.01,7)
vel=rnd_int(0.1,0.01,8)
oscscale=fxrand(0.5,0.01,4)

setFunction({
  name: 'sphereDisplacement2',
  type: 'combineCoord',
  inputs: [
    {name: 'radius', type: 'float', default: 4.0},
    {name: 'rot', type: 'float', default: 0.0}
  ],
  glsl: `
  vec2 pos = _st-0.5;
  vec3 rpos = vec3(0.0, 0.0, -10.0);
  vec3 rdir = normalize(vec3(pos * 3.0, 1.0));
  float d = 0.0;
  for(int i = 0; i < 16; ++i){
    float height = length(_c0);
    d = length(rpos) - (radius+height);
    rpos += d * rdir;
    if (abs(d) < 0.001)break;
  }
  if(d > 0.5) return vec2(0.5,0.5);
  else return vec2(atan(rpos.z, rpos.x)+rot, atan(length(rpos.xz), rpos.y));
`})

osc(10,0,2).layer(shape().luma().color(0,0,0)).sphereDisplacement2(noise(osc1,rot,oscscale).color(osc1,osc1color,rot), oscscale)

.scale(osc1,osc1color,oscscale)


.out()

speed = 1

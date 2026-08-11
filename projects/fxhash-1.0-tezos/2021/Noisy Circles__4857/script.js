var WIDTH=window.innerWidth,HEIGHT=window.innerHeight,DEFAULT=1e3,M=Math.min(WIDTH,HEIGHT)/DEFAULT,r1=fxrand(),r2=fxrand(),r3=fxrand();let d;var pl,rpl,co,ns,ty,an,te,img,ts,ptc=[],p=[],t=[],zo=0,b=75,s=Math.min(WIDTH,HEIGHT)-b*M*2,f=`
precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D tex0;
uniform vec2 resolution;
uniform float M;

void main() {
  vec2 uv = vTexCoord;
  uv.y = 1.0 - uv.y;
  vec2 pixelSize = vec2(1.0) / resolution;
  vec2 offset;
  offset.x = -distance(uv.x,0.5)/200.0 - 0.0005;
  offset.y = distance(uv.y,0.5)/200.0 + 0.0005;
  vec4 rTex = texture2D(tex0, uv - offset);
  vec4 gTex = texture2D(tex0, uv);
  vec4 bTex = texture2D(tex0, uv + offset);
  vec4 color = vec4(rTex.r, gTex.g, bTex.b, 1.0);
  gl_FragColor = color;
}
`,v=`
attribute vec3 aPosition;
attribute vec2 aTexCoord;
varying vec2 vTexCoord;
void main() {
  vTexCoord = aTexCoord;
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;
}
`;function setup(){createCanvas(WIDTH,HEIGHT,WEBGL),te=createGraphics(WIDTH,HEIGHT),noiseDetail(1),noiseSeed(int(fxrand()*(1<<31))),ts=createShader(v,f),d=r1<.2?25:r1<.8?50:75,ns=r2<.3?.01:r2<.7?.02:r2<.9?.03:.05,ty=(t=["Trickle","Ghosts","Galaxy","Spiral","Splines","Orifices"])[Math.floor(fxrand()*t.length)],pl=[{name:"Black",c1:"#000000",c2:"#FFFFFF",alpha:12},{name:"White",c1:"#FFFFFF",c2:"#000000",alpha:18}],rpl=[{name:"Infrared",c1:"#bf0078",c2:"#fb7300",alpha:22},{name:"Ultraviolet",c1:"#2c0250",c2:"#020116",alpha:22}],co=r3<.9?pl[Math.floor(fxrand()*pl.length)]:rpl[Math.floor(fxrand()*rpl.length)];for(let e=0;e<DEFAULT;e+=DEFAULT/d)for(let t=0;t<DEFAULT;t+=DEFAULT/d)dist(t,e,DEFAULT/2,DEFAULT/2)<DEFAULT/2-b&&ptc.push(new Particle(t,e));window.$fxhashFeatures={Type:ty,Palette:co.name,Density:d,"Noise Scale":ns},te.background(co.c1)}function draw(){1==frameCount&&te.translate((width-b*M*2-s)/2,(height-b*M*2-s)/2),frameCount<500?(ptc.forEach(t=>{t.drawParticle()}),zo+=.2):501==frameCount&&(console.log("done"),noLoop()),shader(ts),ts.setUniform("tex0",te),ts.setUniform("resolution",[width,height]),ts.setUniform("M",M),rect(0,0,width,height)}class Particle{constructor(t,e){this.x=t,this.y=e,this.x0=t,this.y0=e}drawParticle(){switch(ty){case"Trickle":var t=360-te.dist(this.x,this.y,DEFAULT/2,DEFAULT/2)+te.map(te.noise(this.x*ns,this.y*ns,zo*ns),0,1,0,360)/7;this.x+=50%Math.cos(t),this.y+=50%Math.sin(t);break;case"Ghosts":t=360-te.dist(this.x,this.y,DEFAULT/2,DEFAULT/2)+te.map(te.noise(this.x*ns,this.y*ns,zo*ns),0,1,0,360)/7;this.x+=10*Math.cos(t)/2,this.y+=10*Math.sin(t)/2;break;case"Galaxy":t=360-te.dist(this.x,this.y,DEFAULT/2,DEFAULT/2)+te.map(te.noise(this.x*ns,this.y*ns,zo*ns),0,1,0,360)/7;this.x+=10*Math.cos(t)/2,this.y+=10*Math.sin(t)/2,t=360-te.dist(this.x,this.y,DEFAULT/2,DEFAULT/2)+te.map(te.noise(this.x*ns,this.y*ns,zo*ns),0,1,0,360)/6,this.x+=Math.cos(t),this.y+=Math.sin(t);break;case"Spiral":t=360-te.dist(this.x,this.y,DEFAULT/2,DEFAULT/2)/10+te.dist(this.x,this.y,DEFAULT/2,DEFAULT/2)/M/te.map(te.noise(this.x*ns,this.y*ns,zo*ns),0,1,0,360)/3;this.x+=Math.cos(t),this.y+=Math.sin(t);break;case"Splines":t=360-te.dist(this.x,this.y,DEFAULT/2,DEFAULT/2)+te.map(te.noise(this.x*ns,this.y*ns,zo*ns),0,1,0,360);this.x+=Math.cos(Math.log(Math.exp(t)/20)/20),this.y+=Math.sin(Math.log(Math.exp(t)/20))/20;break;case"Orifices":t=360-te.dist(this.x,this.y,DEFAULT/2,DEFAULT/2)+te.map(te.noise(this.x*ns,this.y*ns,zo*ns/3),0,1,0,360);this.x+=Math.cos(Math.log(Math.exp(t)/2)/2),this.y+=Math.sin(Math.log(Math.exp(t)/2)/2)}te.noStroke(),te.fill(te.red(co.c2),te.green(co.c2),te.blue(co.c2),co.alpha),te.ellipse(this.x*M,this.y*M,(fxrand()+1.5)*M)}}
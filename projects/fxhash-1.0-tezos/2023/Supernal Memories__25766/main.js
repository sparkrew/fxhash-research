const TITLE="Supernal Memories",PALETTES=[{name:"Postit",colors:["#e5571e","#edba2d","#51aedb","#b9c2e9","#144355","#39200b"],bgs:["#144355","#39200b"]},{name:"Severo",colors:["#001b84","#013aad","#d7241f","#ff9f00"],bgs:["#001b84","#013aad","#d7241f","#ff9f00"]},{name:"Mochila",colors:["#fce3de","#ec4e47","#a06a6b","#579a9c","#f5f3e4","#6576b2","#725e63","#f8c066"],bgs:["#ec4e47","#6576b2"]},{name:"Guernika",colors:["#b8b8b5","#262c33","#75787f","#3b414c","#575b63","#151519","#e9e8e8"],bgs:["#262c33","#3b414c","#e9e8e8"]},{name:"Firefall",colors:["#ff9b09","#ca4900","#1b222a","#434d5c"],bgs:["#1b222a","#ca4900","#ff9b09","#434d5c"]},{name:"Balance",colors:["#ca2f2e","#492316","#b0790d","#f3b41b","#a2957c","#ebe2cc","#2e6ca4"],bgs:["#3384c5","#ca2f2e"]},{name:"Batman",colors:["#181616","#edba2d","#f3b41b","#b0790d","#5d5e64","#3d3d41","#2c2b2e"],bgs:["#181616","#2c2b2e"]},{name:"Harley Quinn",colors:["#a22325","#C91A09","#fa0000","#fffcfc","#262522","#444542"],bgs:["#191717","#fa0000"]},{name:"Artemisia",colors:["#71171a","#a22325","#34160d","#755829","#9a783b","#b9975d","#d7b783","#edd8ab"],bgs:["#4c1313"]},{name:"Wolverine",colors:["#ffe823","#ffc70b","#ffb510","#fffcfc","#31659d"],bgs:["#ffb510","#31659d"]},{name:"Lego",colors:["#FC97AC","#0055BF","#237841","#F3C305","#FE8A18","#C91A09"],bgs:["#FC97AC","#0055BF","#237841","#F3C305","#FE8A18","#C91A09"]},{name:"Feliz",colors:["#f7c129","#053e6b","#3384c5","#c93a2a"],bgs:["#f7c129","#053e6b","#c93a2a"]},{name:"Invierno",colors:["#243546","#a0b3aa","#f0ece6","#ee4425"],bgs:["#243546","#a0b3aa","#f0ece6","#ee4425"]},{name:"Ajeno",colors:["#ea000d","#a0b3aa","#0063a2","#ffa400","#185379","#2e2d2e","#df9c5a"],bgs:["#ea000d","#0063a2","#ffa400","#2e2d2e"]},{name:"Ausencia",colors:["#375780","#ffcb5d","#8da5a5","#ea6a5d"],bgs:["#8da5a5"]},{name:"Amigos",colors:["#037bc7","#176b51","#ffce41","#ffc42a","#fe7040","#fe5b3a","#ff7376","#f2f5ee"],bgs:["#fe5b3a"]},{name:"Suave",colors:["#fffeff","#d8495b","#f6ca67","#375780"],bgs:["#4b6073"]},{name:"Paula",colors:["#c4ab82","#93806f","#8b966c","#c5cf9d","#ffb5d7","#df6f97"],bgs:["#93806f","#ff6f97","#8b966c"]},{name:"Tierra",colors:["#ffe8db","#c12e28","#536b65","#472722","#29211a","#f0ba71","#a22e29","#25242d"],bgs:["#c12e28","#536b65","#29211a","#a22e29","#25242d"]},{name:"Arrow",colors:["#9d4043","#c84c50","#de5359","#6a6955","#03755d","#1f7560","#0b6551"],bgs:["#de5359","#6a6955","#03755d"]},{name:"contrastes",colors:["#d9f7ff","#991c22","#4d423c","#aca577"],bgs:["#d9f7ff","#991c22","#4d423c","#aca577"]},{name:"primos",colors:["#F3C305","#b92430","#3a75dd"],bgs:["#F3C305","#b92430","#3a75dd"]}];let vertShader=`
attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 vTexCoord;

void main(){
    vTexCoord=aTexCoord;
    
    vec4 positionVec4=vec4(aPosition,1.);
    positionVec4.xy=positionVec4.xy*2.-1.;
    
    gl_Position=positionVec4;
}`,fragShader=`precision highp float;

varying vec2 vTexCoord;

uniform sampler2D tex0;
uniform vec2 res;
uniform float pd;
uniform float u_time;
uniform float seed;
uniform float staticseed;
uniform float u_anaglyph;

uniform float ruido;
uniform float ambient;
const int octaves = $octaves;

// noise && random from here
// https://www.shadertoy.com/view/wdfcDr


float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}
float noise2( in vec2 p )
{
    vec2 i = floor( p );
    vec2 f = fract( p );
	
	vec2 u = f*f*(3.0-2.0*f);

    return mix( mix( random( i + vec2(0.0,0.0) ), 
                     random( i + vec2(1.0,0.0) ), u.x),
                mix( random( i + vec2(0.0,1.0) ), 
                     random( i + vec2(1.0,1.0) ), u.x), u.y);
}

// tomado de un shader de iquilez, el clasico de dave haskins parece no funcionar bien
vec2 hash22( vec2 x )  
{
    const vec2 k = vec2( 0.3183099, 0.3678794 );
    x = x*k + k.yx;
    return -1.0 + 2.0*fract( 16.0 * k*fract( x.x*x.y*(x.x+x.y)) );
}

// perlin noise: igual que vnoise pero en vez de valores random son gradientes
// la pral diferencia es que con vnoise te pueden salir valores parecidos en
// una misma fila o columna dejando zonas claras/oscuras que no parecen muy random
// con los gradientes no ocurre esto al seguir una direccion
float pnoise(vec2 p)
{
    vec2 id = floor(p);
    vec2 st = fract(p);
    
    vec2 f = st;
    f = f*f*f*(f*(f*6.0-15.0)+10.0);
    
    return 
        mix(
        	mix(dot(hash22(id + vec2(0., 0.)), vec2(0., 0.) - st),
                dot(hash22(id + vec2(1., 0.)), vec2(1., 0.) - st), 
                f.x),
            mix(dot(hash22(id + vec2(0., 1.)), vec2(0., 1.) - st),
                dot(hash22(id + vec2(1., 1.)), vec2(1., 1.) - st), 
                f.x),
        	f.y
		);
}

// fractional brownian motion
// sumas de ruido doblando la frecuencia en cada sumando. 
// cada sumando pesa la mitad que el anterior
float fbm(vec2 p, float laccun, float gain)
{   
    float c = 0.;
    
    float g = gain, l = 1.;
    float total_g = 0.0;
    
    for (int iter = 0; iter < octaves; ++iter)
    {
        c += g * pnoise(p * l);
        total_g += g;
        g *= gain;
        l *= laccun;        
    }
    
    return c / total_g;
}

void main(){
    
    vec2 uv=vTexCoord;
    // the texture is loaded upside down and backwards by default so lets flip it
    uv.y=1.-uv.y;
    

    vec4 tex=texture2D(tex0,uv);
    float avg = (tex.r + tex.g + tex.b)/3.0;
    float grain = ruido;//*uv.y;
    float r = -grain*0.5 + random(uv*5.0) * grain;
    //if(uv.x<.5) tex = vec4(avg,avg,avg,1);
    
    //float n = 1.0-ambient*0.25+noise2(uv*(2.0+3.0*staticseed))*ambient;
    float n = 0.5 * fbm(uv*(0.5 + 0.5*staticseed), 2.0, 0.5) + 1.0;

    // vec3 color=vec3((tex.r+r)*n,(tex.g+r)*n,(tex.b+r)*n);
    vec4 color;
    if(u_anaglyph<.03) {
        vec4 anaglyph = texture2D(tex0, uv + vec2(0.01, 0.005));
        color=vec4((tex.r+r)*n,(anaglyph.g+r)*n,(anaglyph.b+r)*n, 1.0);
    } else {
        color=vec4((tex.r+r)*n,(tex.g+r)*n,(tex.b+r)*n, 1.0);
    }

    gl_FragColor=color;//vec4(color);
}`;function applyShader(a){var o=random();shadraux||((shadraux=createGraphics(width,height,WEBGL)).pixelDensity=pixelDensity(),shadr=shadraux.createShader(vertShader,fragShader.replace("$octaves",octaves)),shadraux.shader(shadr),shadraux.noStroke());let e=a.get();return[["res",[width,height]],["pd",pixelDensity()],["seed",o],["staticseed",staticseed],["ruido",shadergrain],["ambient",shaderambient],["u_anaglyph",anaglyph],["tex0",e]].map(a=>shadr.setUniform(a[0],a[1])),shadraux.rect(-width/2,-height/2,width,height),e.canvas.width=e.canvas.height=1,e=null,shadraux}function checkGLLimits(){var a,o=createGraphics(width,height,WEBGL),e=o.drawingContext;(floor(width*pixelDensity())>e.drawingBufferWidth||floor(height*pixelDensity())>e.drawingBufferHeight)&&(console.log("gl limits"),console.log(e.getParameter(e.MAX_VIEWPORT_DIMS)),a=e.drawingBufferWidth/pixelDensity(),e=e.drawingBufferHeight/pixelDensity(),resizeCanvas(a,e)),o.remove()}let aux,pal,timer,tiempo,shadr,shadraux,blackandwhites,centers,anaglyph,staticseed,gotcircles,fullcircles,printmode,printparam=new URLSearchParams(window.location.search).get("print"),printinfo,fullcirclesprob,blackorwhiteprob,colorprob,drawcirclesprob,moresmall,halfmoons,halfmoonsprob,colorful,neutralbg,monochrome,octaves,shadergrain,shaderambient,postpro;function setup(){mainseedrdm=Math.floor(1e9*fxrand()),randomSeed(mainseedrdm),noiseSeed(mainseedrdm);let a=2,o=(isFxpreview&&(a=4),printmode=!!printparam&&0<int(printparam)&&int(printparam/a),min(windowWidth,windowHeight));var e=o=printmode?printmode:o,r=1.3*o;createCanvas(e,r),background(255),pixelDensity(a),printmode?(printinfo=document.createElement("div"),document.body.appendChild(printinfo),printinfo.className="printinfo",drawingContext&&(fill(255),rect(3,3,1,1),noLoop(),setTimeout(function(){0!==drawingContext.getImageData(3,3,1,1).data[3]?(info("drawing, please wait..."),loop()):info("size exceeds browser limits, try with a smaller number (e.g 14000)")},300))):checkGLLimits(),(aux=createGraphics(width,height)).pixelDensity(a),aux.background(255),blackandwhites=["#101010","#f1f1f1"],colorMode(HSB,360,100,100,1),reset()}function reset(){staticseed=random(2),postpro=random()<.8,octaves=round(random(1,3)),monochrome=random()<.1,colorful=random()<.4,neutralbg=random()<.65,gotcircles=random()<.35,fullcircles=random()<.4,distribution=colorful?random()<.65:random()<.25,moresmall=random()<.5,halfmoons=random()<.3,anaglyph=random(),monochrome&&(colorful=!1),shadergrain=random(.1,.35),shaderambient=random(.1,.3),fullcirclesprob=random(.02,.03),drawcirclesprob=random(.1,.3),halfmoonsprob=random(.02,.03),resetColors(),background("#fff");var n=colorful?Math.round(random(1,6)):random()<.05?1:Math.round(1+random()*random()*6);if(1<=(centers=Array(n)).length){var t=random(360);for(let r=0;r<n;r++){let a,o;if(distribution){var i=t+random(360/n*r,360/(n+1)*r),d=.5*(1-random()*random());a=.5+d*Math.cos(radians(i)),o=.5+d*Math.sin(radians(i))}else if(a=.5+.15*randomGaussian(),o=.5+.15*randomGaussian(),0<r)for(;abs(a-centers[r-1].x)<.25&&abs(o-centers[r-1].y)<.25;)a=.5+.15*randomGaussian(),o=.5+.15*randomGaussian();var s=.05+(1-n/7)/15;let e=s+random()*random()*.1;var l=s+random()*random()*(.15+.3*s);if(n<=1)if(!colorful&&random()<.8)a=o=.5;else for(;abs(e-l)<.04;)e=s+random()*random()*.1;d=random(.3,.4);centers[r]={x:a,y:o,xgauss:e,ygauss:l,size:d}}}else{let a,o;distribution?a=o=.5:(a=.5+.1*randomGaussian(),o=.5+.1*randomGaussian()),centers[0]={x:a,y:o,size:random(.3,.4),xgauss:random(.1,.15),ygauss:random(.1,.2)}}window.$fxhashFeatures={palette:pal.name,centers:centers.length,anaglyph:anaglyph<.03&&postpro,fullcircles:fullcircles,moons:halfmoons,gotcircles:gotcircles,distribution:distribution?"ordered":"unordered",colorful:colorful,grain:postpro},console.table(window.$fxhashFeatures),tiempo=Math.abs(random(100,200)+Math.pow(centers.length,2)),timer=0,printmode||isLooping()||loop()}function resetColors(){pal=random(PALETTES),blackorwhiteprob=.5;let a=random()<.7?"#fff":"#e8e6dd";if(a=neutralbg?(o=random(pal.bgs),random()<.4?color(hue(o),random(10),0):color(hue(o),random(5),100)):random(pal.bgs),aux.blendMode(BLEND),aux.background(a),monochrome){blackandwhites=["#101010","#fafafa"];var o=random(pal.colors),e=(pal.colors=["#101010","#101010","#101010","#fafafa"],[]);for(let a=0;a<20;a++)e.push(random()*random()*180);pal.colors=e,a=color(hue(o),random()*random()*30,brightness(o)),aux.background(a),pal.name="monochrome"}colorprob=random()<.05?random(.3,.5):random(.005,.15)}function keyPressed(){"s"==key&&saveCanvas(TITLE+"_by_@dondiegotez&@tender_art"+fxhash,"png"),"p"==key&&(timer>=tiempo&&(timer=0),(isLooping()?noLoop:loop)())}function info(a){printinfo.innerHTML="Print mode<br>"+a}function drawRandomGradient(){aux.blendMode(OVERLAY),random()<.1&&aux.blendMode(BLEND);var a=!!halfmoons&&random()<halfmoonsprob,o=random(centers),e=o.x+randomGaussian()*o.xgauss,r=o.y+randomGaussian()*o.ygauss;let n=random(.03,o.size);moresmall&&timer>.9*tiempo&&(n=.03+random()*random()*o.size);let t,i;if(colorful){t=random(pal.colors);let a="B&W"!=pal.name?saturation(t)+20*randomGaussian():saturation(t),o=random()<colorprob?brightness(t):random()<blackorwhiteprob?80+random(20):20-random(20);random()<.15&&(a=0,o=random()<.25?0:100),i=color(hue(t),a,o)}else t=random()<colorprob?random(pal.colors):random()<blackorwhiteprob?"#000":"#f1f1f1",i=color(t);aux.push();let d=aux.drawingContext.createRadialGradient(e*width,r*height,0,e*width,r*height,n*width*.5);if(i.setAlpha(.9),d.addColorStop(0,i),fullcircles&&random()<fullcirclesprob&&timer<.9*tiempo&&(random()<.5&&(i=color(random(pal.colors))),d.addColorStop(.95,i)),i.setAlpha(0),d.addColorStop(1,i),a&&timer<.95*tiempo&&(random()<.1&&(i=color(random(pal.colors))),o=e+.001*randomGaussian(),a=e+.001*randomGaussian(),d=aux.drawingContext.createRadialGradient(o*width,a*height,0,e*width,r*height,n*width*.5),i.setAlpha(0),d.addColorStop(0,i),d.addColorStop(random(.5,.7),i),i.setAlpha(1),d.addColorStop(.85,i),i.setAlpha(0),d.addColorStop(.9,i)),aux.noStroke(),aux.drawingContext.fillStyle=d,aux.ellipse(e*width,r*height,n*width,n*width),d=null,aux.pop(),gotcircles&&random()<drawcirclesprob&&timer<.95*tiempo){aux.noFill();var s=random(2,7);for(let a=0;a<s;a++){let a=random()<.5?color(hue(random(pal.colors)),5,100):color(hue(random(pal.colors)),5,0);random()<.35&&(a=color(t)),(a=random()<.05?color(hue(random(pal.colors)),random(100),random(100)):a).setAlpha(postpro?random(.35):random(.25));postpro?random(.2,3):random(.1,.7);aux.strokeWeight(random(.2,2)*width*.0013),aux.stroke(a);var l=e+.005*randomGaussian(),c=r+.005*randomGaussian();let o=(1-random()*random()*random())*n;random()<.01&&(o=1.1*n),aux.ellipse(l*width,c*height,o*width,o*width)}aux.noStroke()}aux.noStroke();var m=random()<.65?color(t):color("#fafafa");let f=random(radians(360));for(let a=0;a<50;a++){var u=.5*n+.01*randomGaussian(),h=(u*=width,f+=radians(5*randomGaussian()),random()<.1&&(f=random(radians(360))),e*width+u*Math.cos(f)),u=r*height+u*Math.sin(f);m.setAlpha(random(.4,.6)),aux.fill(m),siz=postpro?random(5,8)*width*21e-5:random(2,4)*width*21e-5,aux.ellipse(h,u,siz,siz)}}function printExport(){if(postpro){aux.loadPixels();var o=100*shadergrain,e=shaderambient,r=aux.width*aux.pixelDensity()*4*(aux.height*aux.pixelDensity()),n=aux.pixels;for(let a=0;a<r;a+=4){var t=-o+random()*o*2,i=Math.floor(a/4)%width,d=Math.floor(a/(4*width)),i=1-.25*e+noise(4*i,height-4*d)*e;n[a+0]+=t,n[a+1]+=t,n[a+2]+=t,n[a+0]*=i,n[a+1]*=i,n[a+2]*=i}aux.updatePixels()}info('Ready. Press "s" to save a '+width*pixelDensity()+"x"+height*pixelDensity()+" image."),image(aux,0,0)}function draw(){timer++>tiempo&&(noLoop(),fxpreview(),printmode)&&(info("creating ambient grain, almost finished..."),setTimeout(printExport,1e3));for(let a=0;a<10;a++)drawRandomGradient();printmode?postpro&&random():postpro?image(applyShader(aux),0,0):image(aux,0,0)}
function preload() {
    for (let j = 0; j < 500; j++) {
        fxrandArr.push(fxrand())
    }
    GrainShader = new p5.Shader(this._renderer, `
    precision highp float;
    attribute vec3 aPosition;
    attribute vec2 aTexCoord;
    varying vec2 vUv;
  
    void main(){
      vUv=aTexCoord;
      vec4 positionVec4=vec4(aPosition,1.);
      positionVec4.xy=positionVec4.xy*2.-1.;
      gl_Position=positionVec4;
    }`, `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D tex;
    uniform float strength;
    uniform float seed;
    uniform float offset;
  
    float rand(vec2 vUv){
      float bigNum = 234554.;
      float id = vUv.x * vUv.y * bigNum;
      float r = fract(sin(id)*bigNum); // [-1,1]
      return r;
    }
  
    void main(){
      float r = rand(vUv);
      float offset = offset;
      vec3 noise3 = vec3((r+offset) * strength); // [-1.5,0.5] * strength
      vec4 color = texture2D(tex,vec2(vUv.x,1.-vUv.y));
      gl_FragColor=	color + vec4(noise3, 0.);
  }`);
}

function grain(strength, seed, inpG, outG) {
    if (!strength) {
        strength = 0.06;
    }
    if (!seed) {
        seed = random(1000);
    }
    if (!inpG) {
        inpG = get(0, 0, width, height);
    }
    grainG.randomSeed(seed);
    grainG.shader(GrainShader);
    GrainShader.setUniform('tex', inpG);
    GrainShader.setUniform('strength', strength);
    GrainShader.setUniform('offset', -0.5);
    GrainShader.setUniform('seed', grainG.random(10));
    grainG.rect(width, height, width, height);

    if (!outG) {
        image(grainG, 0, 0, width, height);
    } else {
        outG.image(grainG, 0, 0, outG.width, outG.height);
    }
}
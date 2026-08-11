let noiseShader, spreadShader, shaderGraphics
function preloadShader(){
  noiseShader = loadShader('shader.vert', 'noise.frag');
  spreadShader = loadShader('shader.vert', 'spread.frag');
}

function applyNoise(){
  const pic = get()
  const graphics = createGraphics(width, height, WEBGL );
  graphics.noStroke()
  graphics.shader(noiseShader);
  noiseShader.setUniform('tex0', pic);
  graphics.rect(-width/2,-height/2,width,height)
  resetMatrix()
  image(graphics,0,0)
}

function applySpread(tex){
  shader(spreadShader);
  spreadShader.setUniform('tex0', tex);
  spreadShader.setUniform('time', millis()/1000);
  rect(-width/2,-height/2,width,height)
}
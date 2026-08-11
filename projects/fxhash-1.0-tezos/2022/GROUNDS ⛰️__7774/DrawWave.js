function drawWave (_canvas, _offsetY) {

  _canvas.beginShape();
  for (let i = 0; i < segments; i++)
  {
    //line(i * wStep, step + noise(i*noiseScale,step*noiseScale)*offset, (i+1) * wStep, step + noise((i+1)*noiseScale,step*noiseScale)*offset );
    //topo.vertex(i * wStep, step + noise(i*noiseScale-noiseOffsetX, 0, noiseZ)*offset);
    _canvas.vertex(i * widthStep, heightStep + noise((i/segments)*noiseScale*1000, 0, noiseStep) * displaceStep -_offsetY );
  }

  _canvas.vertex(wWidth + 5, wHeight+5);
  _canvas.vertex(-5, wHeight + 5);
  _canvas.endShape();
}

function drawWaveStrip (_canvas, _offsetY, _w) {
 
  _canvas.beginShape();
  for (let i = 0; i < segments; i++)
  {
    //line(i * wStep, step + noise(i*noiseScale,step*noiseScale)*offset, (i+1) * wStep, step + noise((i+1)*noiseScale,step*noiseScale)*offset );
    //topo.vertex(i * wStep, step + noise(i*noiseScale-noiseOffsetX, 0, noiseZ)*offset);
    _canvas.vertex(i * widthStep, heightStep + noise((i/segments)*noiseScale*1000, 0, noiseStep) * displaceStep -_offsetY );
  }

  for (let i = segments-1; i > 0; i--)
  {
    //line(i * wStep, step + noise(i*noiseScale,step*noiseScale)*offset, (i+1) * wStep, step + noise((i+1)*noiseScale,step*noiseScale)*offset );
    //topo.vertex(i * wStep, step + noise(i*noiseScale-noiseOffsetX, 0, noiseZ)*offset);
    _canvas.vertex(i * widthStep, heightStep + noise((i/segments)*noiseScale*1000, 0, noiseStep) * displaceStep -_offsetY + _w );
  }

  //_canvas.vertex(wWidth + 5, wHeight+5);
  //_canvas.vertex(-5, wHeight + 5);
  _canvas.endShape();
}

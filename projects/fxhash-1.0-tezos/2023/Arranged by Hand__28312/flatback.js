function skyback(){
let lh=csh/800;
strokeWeight(h[12]);
for(let i=0;i<800;i++){
stroke(sky[i]);
line(0,lh*i,csw,lh*i);
}

}
  function fsandback(){
  fl=createGraphics(csw,csh/2);
    sandh=random(0.125,0.375);
    sandv=sandh+0.03;
  fl.background(fsandcol[int(random(fsandcol.length))]);
  fl.noStroke();  
  for(let j=0; j<300000; j++){
  fl.fill(sandcol[int(random(12))]);
  dotx=random(csw);
  csm=random(0.5);
  doty=csh*csm
  dw=int(57*csm); 
  dw2=random(h[5],h[12]); 
  dots=new FDots(h[dw],dotx,doty);
  dots.draw();
  }
    st1=csh*random(sandh,sandv);
    fi1=csh*random(sandh,sandv);
    fl.erase();
    fl.beginShape();
    fl.curveVertex(-h[50],st1);
    fl.curveVertex(-h[50],st1);
    fl.curveVertex(csw/5,csh*random(sandh,sandv));
    fl.curveVertex(csw*2/5,csh*random(sandh,sandv));
    fl.curveVertex(csw*3/5,csh*random(sandh,sandv));
    fl.curveVertex(csw*4/5,csh*random(sandh,sandv));
    fl.curveVertex(csw+h[50],fi1);
    fl.curveVertex(csw+h[50],fi1);
    fl.vertex(csw,0);
    fl.vertex(0,0);
    fl.vertex(-h[50],st1);
    fl.endShape(CLOSE);
  image(fl,0,csh/2);
  }
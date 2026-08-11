var pjca1=[];var pjca2=[];var pjcch1=[];var pjcch2=[];var pjach=[];var pja=[];
var pjyb;
function pjposter() {
  noiseSeed(10000);
  pjcsw=cs*0.85;
  pjcsh=cs*0.85;
  pj = createGraphics(pjcsw, pjcsh);
  choosecolor();
  pj.background(features.hcol);
  pjca1=[features.l1,features.l2,features.l3,features.l4,features.l5,features.l6,features.l7,features.l8];
  pjach=shuffleArray(pjca1);
  pj.noStroke();
  pj.fill(pjach[0]);
  pj.rect(h[25],h[25],pjcsw/2-h[25],pjcsh/2-h[25]);
  pj.fill(pjach[1]);
  pj.rect(pjcsw/2,h[25],pjcsw/2-h[25],pjcsh/2-h[25]);
  pj.fill(pjach[2]);
  pj.rect(h[25],pjcsh/2,pjcsw/2-h[25],pjcsh/2-h[25]);
  pj.fill(pjach[3]);
  pj.rect(pjcsw/2,pjcsh/2,pjcsw/2-h[25],pjcsh/2-h[25]);
  pj.fill(pjach[4]);
  pj.beginShape();
  pj.vertex(h[75],h[25]);
  pj.vertex(h[150],h[25]);
  pj.vertex(h[150],h[350]);
  pj.vertex(h[375],h[350]);
  pj.vertex(h[375],h[425]);
  pj.vertex(h[75],h[425]);
  pj.endShape();
  pj.fill(pjach[5]);
  pj.beginShape();
  pj.vertex(h[475],h[425]);
  pj.vertex(h[775],h[425]);
  pj.vertex(h[775],h[500]);
  pj.vertex(h[550],h[500]);
  pj.vertex(h[550],h[575]);
  pj.vertex(h[725],h[575]);
  pj.vertex(h[725],h[650]);
  pj.vertex(h[550],h[650]);
  pj.vertex(h[550],h[750]);
  pj.vertex(h[775],h[750]);
  pj.vertex(h[775],h[825]);
  pj.vertex(h[475],h[825]);
  pj.endShape();
  pj.fill(pjach[6]);
  pj.beginShape();
  pj.vertex(h[75],h[425]);
  pj.vertex(h[150],h[425]);
  pj.vertex(h[225],h[675]);
  pj.vertex(h[300],h[425]);
  pj.vertex(h[375],h[425]);
  pj.vertex(h[250],h[825]);
  pj.vertex(h[200],h[825]);
  pj.endShape();
  pj.fill(pjach[7]);
  pj.beginShape();
  pj.vertex(h[590],h[75]);//1
  pj.vertex(h[660],h[75]);//2
  pj.vertex(h[660],h[225]);//3
  pj.vertex(h[750],h[325]);//4
  pj.vertex(h[725],h[375]);//5
  pj.vertex(h[660],h[300]);//6
  pj.vertex(h[660],h[400]);//7
  pj.vertex(h[590],h[400]);//8
  pj.vertex(h[590],h[300]);//9
  pj.vertex(h[525],h[375]);//10
  pj.vertex(h[500],h[325]);//11
  pj.vertex(h[590],h[225]);//12
  pj.endShape();
  pj.strokeWeight(h[60]);
  pj.noFill(0);
  pj.stroke(pjach[7]);
  pj.ellipse(h[625],h[225],h[340]);
  pjvripleft();  pjvripright();  pjvriptop();  pjvripbottom();
}



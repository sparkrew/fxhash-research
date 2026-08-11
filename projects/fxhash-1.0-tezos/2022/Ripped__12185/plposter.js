var plca1=[];var plca2=[];var plcch1=[];var plcch2=[];var plach=[];var pla=[];
var plyb;
function plposter() {
  noiseSeed(10000);
  plcsw=cs*0.63;
  plcsh=cs*0.9;
  pl = createGraphics(plcsw, plcsh);
  choosecolor();
  plca1=[features.pc0,features.pc1,features.pc2,features.pc3,features.pc4];
  plca2=[features.pc10,features.pc11,features.pc12,features.pc13,features.pc14];
  plall=[features.pc0,features.pc1,features.pc2,features.pc3,features.pc4,features.pc10,features.pc11,features.pc12,features.pc13,features.pc14];
  pla= [features.apc0,features.apc1,features.apc2,features.apc3,features.apc4,features.apc10,features.apc11,features.apc12,features.apc13,features.apc14,features.apc0,features.apc1,features.apc2,features.apc3,features.apc4,features.apc10,features.apc11,features.apc12,features.apc13,features.apc14];
  plcch1=shuffleArray(plca1);
  plcch2=shuffleArray(plca2);
  plallch=shuffleArray(plall);
  plach=shuffleArray(pla);
  pl.background("#D1DADD");
  pl.noStroke();
  pl.fill(plallch[0]);
  pl.rect(h[20],h[20],h[590],h[860]);
  pl.fill(features.dcol);
  let l=h[40];
  for(let i=0;i<28;i++){
  pl.rect(l,h[40],h[10],h[740]);
  l+=h[20];  
  }
  pl.fill(plallch[2]);
  pl.ellipse(h[315],h[350],h[360]);
  choosefont();
  pl.fill(features.dcol);
  pl.textWrap(CHAR);
  pl.textAlign(LEFT);
  pl.textFont(tfont);
  pl.textSize(h[70]);
  n2();
  pl.text(tn2, h[40], h[790], h[550],h[40]);
  pl.textAlign(RIGHT);
  title(0);
  pl.text(tt, h[40], h[790], h[550],h[40]);
  plvripleft();  plvripright();  plvriptop();  plvripbottom();
}



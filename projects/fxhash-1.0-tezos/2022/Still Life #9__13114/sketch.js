function setup() {
    let seed=floor(999999*fxrand())
  randomSeed(seed);
  noiseSeed(seed);
  createCanvas(min(windowWidth, windowHeight), min(windowWidth, windowHeight));
  // createCanvas(4000,4000);
  xcloud = random((width / 1000) * 0, (width / 1000) * 150);
  xcloud2 = random((width / 1000) * -100, (width / 1000) * 100);
  xWin = random((width / 1000) * 80, (width / 1000) * 400);
  // y = random((width / 1000) * 0, (width / 1000) * 200);
  y = 0;
  xgirl = random((width / 1000) * 0, (width / 1000) * 600);
  ygirl = random((width / 1000) * 270, (width / 1000) * 380);
  if (xgirl > (width / 1000) * 400) {
    xChair = random((width / 1000) * 70, (width / 1000) * 300);
  } else {
    xChair = random((width / 1000) * 500, (width / 1000) * 800);
  }
  yChair = random(y + (width / 1000) * 78, y + (width / 1000) * 400);
  var xSun = random(xWin + (width / 1000) * 250, xWin + (width / 1000) * 650);
  var ySun = random(0, 100);
  background("#F4F1E5");
    ddr=random(0,100)
if( ddr>=95){ 
    sss=['#B81616']
   } else if ( ddr>=50 && ddr<=90){
         sss=[100]

  } else{
             sss=[255]

  }
}

function draw() {
  noStroke();

  fill("#F4F1E5");
  rect(
    (width / 1000) * 0,
    (width / 1000) * 319 + y,
    (width / 1000) * 1000,
    (width / 1000) * 1000
  );
  Cloud();
    tree((width / 1000) * 400, (width / 1000) * random(350, 450), 50, 0, 50);
 tex(0, (width / 1000) * 319 + y)

  // earthline
  fill("#87784C");
  rect((width / 1000) * 0, (width / 1000) * 319 + y, width, (width / 1000) * 4);

 
  fill("#F4F1E5");

  Win();

  Paper();
  Chair(0, 0);

  Girl(0, 0);
 
  fill("#E2DFD3");
  noStroke();
  beginShape();
  vertex((width / 1000) * 874, (height / 1000) * 0);
  vertex((width / 1000) * 874, (height / 1000) * 944);
  vertex((width / 1000) * 903, (height / 1000) * 986);
  vertex((width / 1000) * 903, (height / 1000) * 0);
  vertex((width / 1000) * 874, (height / 1000) * 0);
  endShape(); 
  noStroke();
  beginShape();
  vertex((width / 1000) * 60, (height / 1000) * 0);
  vertex((width / 1000) * 60, (height / 1000) * 319);
  vertex((width / 1000) * 30, (height / 1000) * 419);
  vertex((width / 1000) * 30, (height / 1000) * 0);
  vertex((width / 1000) * 60, (height / 1000) * 0);
  endShape();
     fill("#CEC9BD");

  rect(
    (width / 1000) * 903,
    (height / 1000) * 0,
    (width / 1000) * 110,
    (height / 1000) * 986
  );
  rect(
    (width / 1000) * 0,
    (height / 1000) * 0,
    (width / 1000) * 30,
    (height / 1000) * 419
  );
  strokeWeight((width / 1000) * 4)
  stroke("#87784C");
  line((width / 1000) * 30, (width / 1000) * 419 + y, (width / 1000) *0, (width / 1000) * 419);
  line((width / 1000) * 59, (width / 1000) * 321 + y, (width / 1000) *30, (width / 1000) * 419);
  noStroke()
   push()
  scale(0.4)
cat((width / 1000) *1300,(width / 1000) * 2000,sss)
  pop()

  noLoop();
}
function cat(d,s,ggg) {
  
  fill(0,100)
  noStroke()
  beginShape();
curveVertex( d+width/1000*	503	,  s+height/1000*	446	);
curveVertex( d+width/1000*	850	,  s+height/1000*	300	);
curveVertex( d+width/1000*	936	,  s+height/1000*	365	);
curveVertex( d+width/1000*	954	,  s+height/1000*	384	);
curveVertex( d+width/1000*	1000	,  s+height/1000*	429	);
curveVertex( d+width/1000*	951	,  s+height/1000*	464	);
curveVertex( d+width/1000*	903	,  s+height/1000*	467	);
curveVertex( d+width/1000*	816	,  s+height/1000*	477	);
curveVertex( d+width/1000*	706	,  s+height/1000*	485	);
curveVertex( d+width/1000*	583	,  s+height/1000*	473	);
curveVertex( d+width/1000*	703	,  s+height/1000*	473	);
curveVertex( d+width/1000*	583	,  s+height/1000*	473	);
    endShape(CLOSE);
  
  fill(ggg)
  stroke(0)
     strokeWeight(width/1000*1)
  beginShape();
vertex( d+width/1000*	703	,  s+height/1000*	169	);
vertex( d+width/1000*	723	,  s+height/1000*	192	);
vertex( d+width/1000*	730	,  s+height/1000*	189	);
vertex( d+width/1000*	738	,  s+height/1000*	188	);
vertex( d+width/1000*	747	,  s+height/1000*	187	);
vertex( d+width/1000*	755	,  s+height/1000*	189	);
vertex( d+width/1000*	765	,  s+height/1000*	191	);
vertex( d+width/1000*	773	,  s+height/1000*	193	);
vertex( d+width/1000*	779	,  s+height/1000*	192	);
vertex( d+width/1000*	786	,  s+height/1000*	188	);
vertex( d+width/1000*	805	,  s+height/1000*	172	);
vertex( d+width/1000*	805	,  s+height/1000*	201	);
vertex( d+width/1000*	805	,  s+height/1000*	206	);
vertex( d+width/1000*	807	,  s+height/1000*	212	);
vertex( d+width/1000*	809	,  s+height/1000*	217	);
vertex( d+width/1000*	811	,  s+height/1000*	223	);
vertex( d+width/1000*	812	,  s+height/1000*	229	);
vertex( d+width/1000*	821	,  s+height/1000*	233	);
vertex( d+width/1000*	832	,  s+height/1000*	238	);
vertex( d+width/1000*	843	,  s+height/1000*	242	);
vertex( d+width/1000*	857	,  s+height/1000*	250	);
vertex( d+width/1000*	868	,  s+height/1000*	256	);
vertex( d+width/1000*	879	,  s+height/1000*	263	);
vertex( d+width/1000*	889	,  s+height/1000*	270	);
vertex( d+width/1000*	903	,  s+height/1000*	279	);
vertex( d+width/1000*	915	,  s+height/1000*	289	);
vertex( d+width/1000*	925	,  s+height/1000*	300	);
vertex( d+width/1000*	933	,  s+height/1000*	311	);
vertex( d+width/1000*	937	,  s+height/1000*	324	);
vertex( d+width/1000*	940	,  s+height/1000*	337	);
vertex( d+width/1000*	942	,  s+height/1000*	352	);
vertex( d+width/1000*	939	,  s+height/1000*	369	);
vertex( d+width/1000*	936	,  s+height/1000*	385	);
vertex( d+width/1000*	931	,  s+height/1000*	399	);
vertex( d+width/1000*	925	,  s+height/1000*	411	);
vertex( d+width/1000*	919	,  s+height/1000*	423	);
vertex( d+width/1000*	911	,  s+height/1000*	435	);
vertex( d+width/1000*	895	,  s+height/1000*	439	);
vertex( d+width/1000*	876	,  s+height/1000*	443	);
vertex( d+width/1000*	855	,  s+height/1000*	448	);
vertex( d+width/1000*	825	,  s+height/1000*	454	);
vertex( d+width/1000*	791	,  s+height/1000*	461	);
vertex( d+width/1000*	758	,  s+height/1000*	468	);
vertex( d+width/1000*	732	,  s+height/1000*	471	);
vertex( d+width/1000*	703	,  s+height/1000*	474	);
vertex( d+width/1000*	678	,  s+height/1000*	473	);
vertex( d+width/1000*	652	,  s+height/1000*	470	);
vertex( d+width/1000*	627	,  s+height/1000*	464	);
vertex( d+width/1000*	608	,  s+height/1000*	458	);
vertex( d+width/1000*	595	,  s+height/1000*	453	);
vertex( d+width/1000*	581	,  s+height/1000*	451	);
vertex( d+width/1000*	515	,  s+height/1000*	450	);
vertex( d+width/1000*	503	,  s+height/1000*	446	);
vertex( d+width/1000*	490	,  s+height/1000*	436	);
vertex( d+width/1000*	480	,  s+height/1000*	423	);
vertex( d+width/1000*	479	,  s+height/1000*	410	);
vertex( d+width/1000*	483	,  s+height/1000*	396	);
vertex( d+width/1000*	517	,  s+height/1000*	337	);
vertex( d+width/1000*	525	,  s+height/1000*	326	);
vertex( d+width/1000*	536	,  s+height/1000*	315	);
vertex( d+width/1000*	545	,  s+height/1000*	306	);
vertex( d+width/1000*	557	,  s+height/1000*	298	);
vertex( d+width/1000*	570	,  s+height/1000*	291	);
vertex( d+width/1000*	584	,  s+height/1000*	284	);
vertex( d+width/1000*	598	,  s+height/1000*	279	);
vertex( d+width/1000*	615	,  s+height/1000*	275	);
vertex( d+width/1000*	633	,  s+height/1000*	273	);
vertex( d+width/1000*	651	,  s+height/1000*	273	);
vertex( d+width/1000*	668	,  s+height/1000*	275	);
vertex( d+width/1000*	682	,  s+height/1000*	276	);
vertex( d+width/1000*	695	,  s+height/1000*	277	);
vertex( d+width/1000*	692	,  s+height/1000*	271	);
vertex( d+width/1000*	686	,  s+height/1000*	263	);
vertex( d+width/1000*	683	,  s+height/1000*	252	);
vertex( d+width/1000*	682	,  s+height/1000*	240	);
vertex( d+width/1000*	682	,  s+height/1000*	227	);
vertex( d+width/1000*	687	,  s+height/1000*	215	);
vertex( d+width/1000*	693	,  s+height/1000*	207	);
vertex( d+width/1000*	698	,  s+height/1000*	202	);
vertex( d+width/1000*	703	,  s+height/1000*	169	);
    endShape(CLOSE);
noFill()
  beginShape();
vertex( d+width/1000*	703	,  s+height/1000*	169	);
vertex( d+width/1000*	704	,  s+height/1000*	179	);
vertex( d+width/1000*	709	,  s+height/1000*	196	);
 endShape();
  beginShape();
  vertex( d+width/1000*	805	,  s+height/1000*	172	);
vertex( d+width/1000*	795	,  s+height/1000*	197	);
vertex( d+width/1000*	789	,  s+height/1000*	201	);
    endShape();
    beginShape();
curveVertex( d+width/1000*	695	,  s+height/1000*	277	);
curveVertex( d+width/1000*	695	,  s+height/1000*	277	);
curveVertex( d+width/1000*	706	,  s+height/1000*	277	);
curveVertex( d+width/1000*	733	,  s+height/1000*	280	);
curveVertex( d+width/1000*	750	,  s+height/1000*	280	);
curveVertex( d+width/1000*	769	,  s+height/1000*	276	);
curveVertex( d+width/1000*	783	,  s+height/1000*	270	);
curveVertex( d+width/1000*	795	,  s+height/1000*	262	);
curveVertex( d+width/1000*	805	,  s+height/1000*	251	);
curveVertex( d+width/1000*	810	,  s+height/1000*	239	);
curveVertex( d+width/1000*	812	,  s+height/1000*	229	);
curveVertex( d+width/1000*	812	,  s+height/1000*	229	);
    endShape();
   noStroke()
  fill('#05C7CC')
  circle(d+width/1000*	702	,  s+height/1000*	249,width/1000*13)
  circle(d+width/1000*	740	,  s+height/1000*	251,width/1000*13)
  fill('#000000')
  circle(d+width/1000*	702	,  s+height/1000*	250,width/1000*9)
  circle(d+width/1000*	740	,  s+height/1000*	252,width/1000*9)
  fill('#ffffff')
  circle(d+width/1000*	702	,  s+height/1000*	249,width/1000*3)
  circle(d+width/1000*	740	,  s+height/1000*	251,width/1000*3)
   fill(ggg)
  beginShape();
vertex( d+width/1000*	689	,  s+height/1000*	239	);
vertex( d+width/1000*	702	,  s+height/1000*	238	);
vertex( d+width/1000*	713	,  s+height/1000*	243	);
vertex( d+width/1000*	713	,  s+height/1000*	252	);
vertex( d+width/1000*	704	,  s+height/1000*	259	);
vertex( d+width/1000*	688	,  s+height/1000*	252	);
vertex( d+width/1000*	695	,  s+height/1000*	249	);
vertex( d+width/1000*	699	,  s+height/1000*	252	);
vertex( d+width/1000*	702	,  s+height/1000*	253	);
vertex( d+width/1000*	704	,  s+height/1000*	253	);
vertex( d+width/1000*	708	,  s+height/1000*	253	);
vertex( d+width/1000*	710	,  s+height/1000*	249	);
vertex( d+width/1000*	708	,  s+height/1000*	247	);
vertex( d+width/1000*	697	,  s+height/1000*	243	);
vertex( d+width/1000*	689	,  s+height/1000*	239	);
    endShape();
     beginShape();
vertex( d+width/1000*	749	,  s+height/1000*	251	);
vertex( d+width/1000*	741	,  s+height/1000*	255	);
vertex( d+width/1000*	728	,  s+height/1000*	255	);
vertex( d+width/1000*	732	,  s+height/1000*	248	);
vertex( d+width/1000*	740	,  s+height/1000*	246	);
vertex( d+width/1000*	748	,  s+height/1000*	245	);
vertex( d+width/1000*	749	,  s+height/1000*	242	);
vertex( d+width/1000*	743	,  s+height/1000*	240	);
vertex( d+width/1000*	725	,  s+height/1000*	242	);
vertex( d+width/1000*	719	,  s+height/1000*	255	);
vertex( d+width/1000*	733	,  s+height/1000*	261	);
vertex( d+width/1000*	748	,  s+height/1000*	261	);
vertex( d+width/1000*	749	,  s+height/1000*	251	);
  endShape();
  noFill()
  stroke(0)
       strokeWeight(width/1000*1)

  beginShape();
vertex( d+width/1000*	691	,  s+height/1000*	234	);
vertex( d+width/1000*	692	,  s+height/1000*	240	);
vertex( d+width/1000*	697	,  s+height/1000*	243	);
vertex( d+width/1000*	709	,  s+height/1000*	247	);
vertex( d+width/1000*	711	,  s+height/1000*	252	);
vertex( d+width/1000*	710	,  s+height/1000*	277	);
    endShape();
  
       beginShape();
vertex( d+width/1000*	692	,  s+height/1000*	240	);
vertex( d+width/1000*	695	,  s+height/1000*	249	);
vertex( d+width/1000*	699	,  s+height/1000*	252	);
vertex( d+width/1000*	702	,  s+height/1000*	253	);
vertex( d+width/1000*	704	,  s+height/1000*	253	);
  vertex( d+width/1000*	711	,  s+height/1000*	252	);
    endShape();
  
       beginShape();
vertex( d+width/1000*	753	,  s+height/1000*	243	);
vertex( d+width/1000*	743	,  s+height/1000*	246	);
vertex( d+width/1000*	732	,  s+height/1000*	248	);
vertex( d+width/1000*	728	,  s+height/1000*	255	);
vertex( d+width/1000*	741	,  s+height/1000*	255	);
vertex( d+width/1000*	750	,  s+height/1000*	250	);
vertex( d+width/1000*	753	,  s+height/1000*	243	);
vertex( d+width/1000*	758	,  s+height/1000*	236	);
    endShape();
  
}
function Chair(d, s) {
 

  noStroke()
  // fill(100, 77, 47, 70);
  fill(100, 77, 47, 20);
  beginShape();
   vertex( d+width/1000*	2	+	xChair	,  s+height/1000*	345	+	yChair	);
vertex( d+width/1000*	-38	+	xChair	,  s+height/1000*	478	+	yChair	);
vertex( d+width/1000*	-27	+	xChair	,  s+height/1000*	492	+	yChair	);
vertex( d+width/1000*	147	+	xChair	,  s+height/1000*	503	+	yChair	);
vertex( d+width/1000*	103	+	xChair	,  s+height/1000*	609	+	yChair	);
vertex( d+width/1000*	147	+	xChair	,  s+height/1000*	612	+	yChair	);
vertex( d+width/1000*	211	+	xChair	,  s+height/1000*	287	+	yChair	);
vertex( d+width/1000*	202	+	xChair	,  s+height/1000*	284	+	yChair	);
vertex( d+width/1000*	179	+	xChair	,  s+height/1000*	335	+	yChair	);
vertex( d+width/1000*	98	+	xChair	,  s+height/1000*	335	+	yChair	);
vertex( d+width/1000*	118	+	xChair	,  s+height/1000*	254	+	yChair	);
vertex( d+width/1000*	105	+	xChair	,  s+height/1000*	261	+	yChair	);
vertex( d+width/1000*	85	+	xChair	,  s+height/1000*	330	+	yChair	);
vertex( d+width/1000*	-5	+	xChair	,  s+height/1000*	416	+	yChair	);
vertex( d+width/1000*	18	+	xChair	,  s+height/1000*	342	+	yChair	);
vertex( d+width/1000*	2	+	xChair	,  s+height/1000*	345	+	yChair	);
 
  
  endShape();



  fill("#8B8852");
  noStroke();
  beginShape();
  vertex(d + (width / 1000) * 125 + xChair, s + (height / 1000) * 143 + yChair);
  vertex(d + (width / 1000) * 206 + xChair, s + (height / 1000) * 147 + yChair);
  vertex(d + (width / 1000) * 208 + xChair, s + (height / 1000) * 150 + yChair);
  vertex(d + (width / 1000) * 206 + xChair, s + (height / 1000) * 154 + yChair);
  vertex(d + (width / 1000) * 182 + xChair, s + (height / 1000) * 177 + yChair);
  vertex(d + (width / 1000) * 164 + xChair, s + (height / 1000) * 192 + yChair);
  vertex(d + (width / 1000) * 146 + xChair, s + (height / 1000) * 201 + yChair);
  vertex(d + (width / 1000) * 110 + xChair, s + (height / 1000) * 206 + yChair);
  vertex(d + (width / 1000) * 73 + xChair, s + (height / 1000) * 206 + yChair);
  vertex(d + (width / 1000) * 20 + xChair, s + (height / 1000) * 204 + yChair);
  vertex(d + (width / 1000) * 18 + xChair, s + (height / 1000) * 202 + yChair);
  vertex(d + (width / 1000) * 17 + xChair, s + (height / 1000) * 198 + yChair);
  vertex(d + (width / 1000) * 75 + xChair, s + (height / 1000) * 166 + yChair);
  vertex(d + (width / 1000) * 101 + xChair, s + (height / 1000) * 150 + yChair);
  vertex(d + (width / 1000) * 112 + xChair, s + (height / 1000) * 145 + yChair);
  vertex(d + (width / 1000) * 125 + xChair, s + (height / 1000) * 143 + yChair);
  endShape();

  // fill("#4D3428");
       fill("#AAA690")

  beginShape();
  vertex(d + (width / 1000) * 230 + xChair, s + (height / 1000) * 0 + yChair);
  vertex(d + (width / 1000) * 233 + xChair, s + (height / 1000) * 0 + yChair);
  vertex(d + (width / 1000) * 236 + xChair, s + (height / 1000) * 1 + yChair);
  vertex(d + (width / 1000) * 237 + xChair, s + (height / 1000) * 3 + yChair);
  vertex(d + (width / 1000) * 238 + xChair, s + (height / 1000) * 6 + yChair);
  vertex(d + (width / 1000) * 239 + xChair, s + (height / 1000) * 15 + yChair);
  vertex(d + (width / 1000) * 236 + xChair, s + (height / 1000) * 20 + yChair);
  vertex(d + (width / 1000) * 236 + xChair, s + (height / 1000) * 26 + yChair);
  vertex(d + (width / 1000) * 233 + xChair, s + (height / 1000) * 32 + yChair);
  vertex(d + (width / 1000) * 231 + xChair, s + (height / 1000) * 37 + yChair);
  vertex(d + (width / 1000) * 228 + xChair, s + (height / 1000) * 47 + yChair);
  vertex(d + (width / 1000) * 226 + xChair, s + (height / 1000) * 57 + yChair);
  vertex(d + (width / 1000) * 224 + xChair, s + (height / 1000) * 63 + yChair);
  vertex(d + (width / 1000) * 223 + xChair, s + (height / 1000) * 73 + yChair);
  vertex(d + (width / 1000) * 222 + xChair, s + (height / 1000) * 83 + yChair);
  vertex(d + (width / 1000) * 219 + xChair, s + (height / 1000) * 98 + yChair);
  vertex(d + (width / 1000) * 218 + xChair, s + (height / 1000) * 110 + yChair);
  vertex(d + (width / 1000) * 215 + xChair, s + (height / 1000) * 128 + yChair);
  vertex(d + (width / 1000) * 208 + xChair, s + (height / 1000) * 275 + yChair);
  vertex(d + (width / 1000) * 209 + xChair, s + (height / 1000) * 281 + yChair);
  vertex(d + (width / 1000) * 210 + xChair, s + (height / 1000) * 287 + yChair);
  vertex(d + (width / 1000) * 209 + xChair, s + (height / 1000) * 289 + yChair);
  vertex(d + (width / 1000) * 207 + xChair, s + (height / 1000) * 290 + yChair);
  vertex(d + (width / 1000) * 205 + xChair, s + (height / 1000) * 290 + yChair);
  vertex(d + (width / 1000) * 203 + xChair, s + (height / 1000) * 289 + yChair);
  vertex(d + (width / 1000) * 202 + xChair, s + (height / 1000) * 288 + yChair);
  vertex(d + (width / 1000) * 201 + xChair, s + (height / 1000) * 284 + yChair);
  vertex(d + (width / 1000) * 199 + xChair, s + (height / 1000) * 278 + yChair);
  vertex(d + (width / 1000) * 199 + xChair, s + (height / 1000) * 272 + yChair);
  vertex(d + (width / 1000) * 198 + xChair, s + (height / 1000) * 263 + yChair);
  vertex(d + (width / 1000) * 198 + xChair, s + (height / 1000) * 255 + yChair);
  vertex(d + (width / 1000) * 197 + xChair, s + (height / 1000) * 246 + yChair);
  vertex(d + (width / 1000) * 197 + xChair, s + (height / 1000) * 236 + yChair);
  vertex(d + (width / 1000) * 198 + xChair, s + (height / 1000) * 227 + yChair);
  vertex(d + (width / 1000) * 169 + xChair, s + (height / 1000) * 254 + yChair);
  vertex(d + (width / 1000) * 164 + xChair, s + (height / 1000) * 260 + yChair);
  vertex(d + (width / 1000) * 161 + xChair, s + (height / 1000) * 264 + yChair);
  vertex(d + (width / 1000) * 160 + xChair, s + (height / 1000) * 267 + yChair);
  vertex(d + (width / 1000) * 160 + xChair, s + (height / 1000) * 273 + yChair);
  vertex(d + (width / 1000) * 162 + xChair, s + (height / 1000) * 299 + yChair);
  vertex(d + (width / 1000) * 170 + xChair, s + (height / 1000) * 340 + yChair);
  vertex(d + (width / 1000) * 172 + xChair, s + (height / 1000) * 345 + yChair);
  vertex(d + (width / 1000) * 171 + xChair, s + (height / 1000) * 346 + yChair);
  vertex(d + (width / 1000) * 166 + xChair, s + (height / 1000) * 346 + yChair);
  vertex(d + (width / 1000) * 159 + xChair, s + (height / 1000) * 345 + yChair);
  vertex(d + (width / 1000) * 156 + xChair, s + (height / 1000) * 333 + yChair);
  vertex(d + (width / 1000) * 146 + xChair, s + (height / 1000) * 284 + yChair);
  vertex(d + (width / 1000) * 145 + xChair, s + (height / 1000) * 270 + yChair);
  vertex(d + (width / 1000) * 145 + xChair, s + (height / 1000) * 253 + yChair);
  vertex(d + (width / 1000) * 40 + xChair, s + (height / 1000) * 253 + yChair);
  vertex(d + (width / 1000) * 24 + xChair, s + (height / 1000) * 263 + yChair);
  vertex(d + (width / 1000) * 24 + xChair, s + (height / 1000) * 268 + yChair);
  vertex(d + (width / 1000) * 24 + xChair, s + (height / 1000) * 277 + yChair);
  vertex(d + (width / 1000) * 23 + xChair, s + (height / 1000) * 288 + yChair);
  vertex(d + (width / 1000) * 17 + xChair, s + (height / 1000) * 342 + yChair);
  vertex(d + (width / 1000) * 8 + xChair, s + (height / 1000) * 348 + yChair);
  vertex(d + (width / 1000) * 2 + xChair, s + (height / 1000) * 345 + yChair);
  vertex(d + (width / 1000) * 6 + xChair, s + (height / 1000) * 291 + yChair);
  vertex(d + (width / 1000) * 7 + xChair, s + (height / 1000) * 279 + yChair);
  vertex(d + (width / 1000) * 7 + xChair, s + (height / 1000) * 268 + yChair);
  vertex(d + (width / 1000) * 6 + xChair, s + (height / 1000) * 254 + yChair);
  vertex(d + (width / 1000) * 4 + xChair, s + (height / 1000) * 239 + yChair);
  vertex(d + (width / 1000) * 1 + xChair, s + (height / 1000) * 226 + yChair);
  vertex(d + (width / 1000) * 0 + xChair, s + (height / 1000) * 218 + yChair);
  vertex(d + (width / 1000) * 0 + xChair, s + (height / 1000) * 208 + yChair);
  vertex(d + (width / 1000) * 1 + xChair, s + (height / 1000) * 202 + yChair);
  vertex(d + (width / 1000) * 3 + xChair, s + (height / 1000) * 198 + yChair);
  vertex(d + (width / 1000) * 17 + xChair, s + (height / 1000) * 196 + yChair);
  vertex(d + (width / 1000) * 22 + xChair, s + (height / 1000) * 199 + yChair);
  vertex(d + (width / 1000) * 20 + xChair, s + (height / 1000) * 203 + yChair);
  vertex(d + (width / 1000) * 45 + xChair, s + (height / 1000) * 204 + yChair);
  vertex(d + (width / 1000) * 73 + xChair, s + (height / 1000) * 205 + yChair);
  vertex(d + (width / 1000) * 92 + xChair, s + (height / 1000) * 205 + yChair);
  vertex(d + (width / 1000) * 110 + xChair, s + (height / 1000) * 205 + yChair);
  vertex(d + (width / 1000) * 123 + xChair, s + (height / 1000) * 204 + yChair);
  vertex(d + (width / 1000) * 133 + xChair, s + (height / 1000) * 203 + yChair);
  vertex(d + (width / 1000) * 146 + xChair, s + (height / 1000) * 201 + yChair);
  vertex(d + (width / 1000) * 148 + xChair, s + (height / 1000) * 191 + yChair);
  vertex(d + (width / 1000) * 150 + xChair, s + (height / 1000) * 173 + yChair);
  vertex(d + (width / 1000) * 151 + xChair, s + (height / 1000) * 154 + yChair);
  vertex(d + (width / 1000) * 152 + xChair, s + (height / 1000) * 144 + yChair);
  vertex(d + (width / 1000) * 152 + xChair, s + (height / 1000) * 138 + yChair);
  vertex(d + (width / 1000) * 153 + xChair, s + (height / 1000) * 126 + yChair);
  vertex(d + (width / 1000) * 154 + xChair, s + (height / 1000) * 113 + yChair);
  vertex(d + (width / 1000) * 156 + xChair, s + (height / 1000) * 96 + yChair);
  vertex(d + (width / 1000) * 157 + xChair, s + (height / 1000) * 86 + yChair);
  vertex(d + (width / 1000) * 159 + xChair, s + (height / 1000) * 76 + yChair);
  vertex(d + (width / 1000) * 161 + xChair, s + (height / 1000) * 68 + yChair);
  vertex(d + (width / 1000) * 162 + xChair, s + (height / 1000) * 64 + yChair);
  vertex(d + (width / 1000) * 165 + xChair, s + (height / 1000) * 63 + yChair);
  vertex(d + (width / 1000) * 219 + xChair, s + (height / 1000) * 34 + yChair);
  vertex(d + (width / 1000) * 224 + xChair, s + (height / 1000) * 28 + yChair);
  vertex(d + (width / 1000) * 225 + xChair, s + (height / 1000) * 23 + yChair);
  vertex(d + (width / 1000) * 225 + xChair, s + (height / 1000) * 17 + yChair);
  vertex(d + (width / 1000) * 225 + xChair, s + (height / 1000) * 12 + yChair);
  vertex(d + (width / 1000) * 225 + xChair, s + (height / 1000) * 9 + yChair);
  vertex(d + (width / 1000) * 226 + xChair, s + (height / 1000) * 5 + yChair);
  vertex(d + (width / 1000) * 226 + xChair, s + (height / 1000) * 3 + yChair);
  vertex(d + (width / 1000) * 228 + xChair, s + (height / 1000) * 1 + yChair);
  vertex(d + (width / 1000) * 230 + xChair, s + (height / 1000) * 0 + yChair);
  beginContour();
  vertex(d + (width / 1000) * 200 + xChair, s + (height / 1000) * 213 + yChair);
  vertex(d + (width / 1000) * 204 + xChair, s + (height / 1000) * 161 + yChair);
  vertex(d + (width / 1000) * 164 + xChair, s + (height / 1000) * 199 + yChair);
  vertex(d + (width / 1000) * 161 + xChair, s + (height / 1000) * 252 + yChair);
  vertex(d + (width / 1000) * 200 + xChair, s + (height / 1000) * 213 + yChair);
  endContour();

  beginContour();
  vertex(d + (width / 1000) * 19 + xChair, s + (height / 1000) * 210 + yChair);
  vertex(d + (width / 1000) * 19 + xChair, s + (height / 1000) * 222 + yChair);
  vertex(d + (width / 1000) * 23 + xChair, s + (height / 1000) * 240 + yChair);
  vertex(d + (width / 1000) * 23 + xChair, s + (height / 1000) * 245 + yChair);
  vertex(d + (width / 1000) * 31 + xChair, s + (height / 1000) * 245 + yChair);
  vertex(d + (width / 1000) * 81 + xChair, s + (height / 1000) * 213 + yChair);
  vertex(d + (width / 1000) * 66 + xChair, s + (height / 1000) * 213 + yChair);
  vertex(d + (width / 1000) * 50 + xChair, s + (height / 1000) * 212 + yChair);
  vertex(d + (width / 1000) * 37 + xChair, s + (height / 1000) * 212 + yChair);
  vertex(d + (width / 1000) * 23 + xChair, s + (height / 1000) * 212 + yChair);
  vertex(d + (width / 1000) * 19 + xChair, s + (height / 1000) * 210 + yChair);
  endContour();
  beginContour();
  vertex(d + (width / 1000) * 99 + xChair, s + (height / 1000) * 212 + yChair);
  vertex(d + (width / 1000) * 77 + xChair, s + (height / 1000) * 229 + yChair);
  vertex(d + (width / 1000) * 51 + xChair, s + (height / 1000) * 245 + yChair);
  vertex(d + (width / 1000) * 110 + xChair, s + (height / 1000) * 246 + yChair);
  vertex(d + (width / 1000) * 145 + xChair, s + (height / 1000) * 246 + yChair);
  vertex(d + (width / 1000) * 145 + xChair, s + (height / 1000) * 238 + yChair);
  vertex(d + (width / 1000) * 145 + xChair, s + (height / 1000) * 229 + yChair);
  vertex(d + (width / 1000) * 145 + xChair, s + (height / 1000) * 221 + yChair);
  vertex(d + (width / 1000) * 146 + xChair, s + (height / 1000) * 208 + yChair);
  vertex(d + (width / 1000) * 140 + xChair, s + (height / 1000) * 212 + yChair);
  vertex(d + (width / 1000) * 99 + xChair, s + (height / 1000) * 212 + yChair);
  endContour();
  beginContour();
  vertex(d + (width / 1000) * 208 + xChair, s + (height / 1000) * 139 + yChair);
  vertex(d + (width / 1000) * 192 + xChair, s + (height / 1000) * 151 + yChair);
  vertex(d + (width / 1000) * 179 + xChair, s + (height / 1000) * 158 + yChair);
  vertex(d + (width / 1000) * 168 + xChair, s + (height / 1000) * 164 + yChair);
  vertex(d + (width / 1000) * 166 + xChair, s + (height / 1000) * 166 + yChair);
  vertex(d + (width / 1000) * 165 + xChair, s + (height / 1000) * 170 + yChair);
  vertex(d + (width / 1000) * 164 + xChair, s + (height / 1000) * 191 + yChair);
  vertex(d + (width / 1000) * 175 + xChair, s + (height / 1000) * 183 + yChair);
  vertex(d + (width / 1000) * 182 + xChair, s + (height / 1000) * 176 + yChair);
  vertex(d + (width / 1000) * 189 + xChair, s + (height / 1000) * 167 + yChair);
  vertex(d + (width / 1000) * 195 + xChair, s + (height / 1000) * 160 + yChair);
  vertex(d + (width / 1000) * 206 + xChair, s + (height / 1000) * 154 + yChair);
  vertex(d + (width / 1000) * 208 + xChair, s + (height / 1000) * 139 + yChair);
  endContour();
  beginContour();
  vertex(d + (width / 1000) * 169 + xChair, s + (height / 1000) * 152 + yChair);
  vertex(d + (width / 1000) * 190 + xChair, s + (height / 1000) * 140 + yChair);
  vertex(d + (width / 1000) * 208 + xChair, s + (height / 1000) * 128 + yChair);
  vertex(d + (width / 1000) * 210 + xChair, s + (height / 1000) * 112 + yChair);
  vertex(d + (width / 1000) * 187 + xChair, s + (height / 1000) * 128 + yChair);
  vertex(d + (width / 1000) * 169 + xChair, s + (height / 1000) * 136 + yChair);
  vertex(d + (width / 1000) * 169 + xChair, s + (height / 1000) * 152 + yChair);

  endContour();

  endShape();

  beginShape();
  vertex(d + (width / 1000) * 112 + xChair, s + (height / 1000) * 210 + yChair);
  vertex(d + (width / 1000) * 126 + xChair, s + (height / 1000) * 210 + yChair);
  vertex(d + (width / 1000) * 125 + xChair, s + (height / 1000) * 223 + yChair);
  vertex(d + (width / 1000) * 120 + xChair, s + (height / 1000) * 246 + yChair);
  vertex(d + (width / 1000) * 113 + xChair, s + (height / 1000) * 260 + yChair);
  vertex(d + (width / 1000) * 107 + xChair, s + (height / 1000) * 262 + yChair);
  vertex(d + (width / 1000) * 104 + xChair, s + (height / 1000) * 261 + yChair);
  vertex(d + (width / 1000) * 110 + xChair, s + (height / 1000) * 246 + yChair);
  vertex(d + (width / 1000) * 113 + xChair, s + (height / 1000) * 230 + yChair);

  endShape();

}
function Girl(d, s) {
  fill(100, 77, 47, 70);
  beginShape();
  curveVertex(
    d + (width / 1000) * 136 + xgirl,
    s + (height / 1000) * 500 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 158 + xgirl,
    s + (height / 1000) * 516 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 160 + xgirl,
    s + (height / 1000) * 541 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 151 + xgirl,
    s + (height / 1000) * 589 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 139 + xgirl,
    s + (height / 1000) * 635 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 117 + xgirl,
    s + (height / 1000) * 689 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 298 + xgirl,
    s + (height / 1000) * 679 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 304 + xgirl,
    s + (height / 1000) * 629 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 330 + xgirl,
    s + (height / 1000) * 598 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 363 + xgirl,
    s + (height / 1000) * 587 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 327 + xgirl,
    s + (height / 1000) * 634 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 342 + xgirl,
    s + (height / 1000) * 682 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 394 + xgirl,
    s + (height / 1000) * 689 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 431 + xgirl,
    s + (height / 1000) * 711 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 421 + xgirl,
    s + (height / 1000) * 755 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 411 + xgirl,
    s + (height / 1000) * 819 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 387 + xgirl,
    s + (height / 1000) * 877 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 45 + xgirl,
    s + (height / 1000) * 855 + ygirl
  );
  curveVertex(
    d + (width / 1000) * -13 + xgirl,
    s + (height / 1000) * 824 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 3 + xgirl,
    s + (height / 1000) * 747 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 13 + xgirl,
    s + (height / 1000) * 734 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 47 + xgirl,
    s + (height / 1000) * 696 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 82 + xgirl,
    s + (height / 1000) * 649 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 120 + xgirl,
    s + (height / 1000) * 600 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 136 + xgirl,
    s + (height / 1000) * 553 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 136 + xgirl,
    s + (height / 1000) * 500 + ygirl
  );

  endShape();

  fill("#B09A71");
  beginShape();
  vertex(d + (width / 1000) * 247 + xgirl, s + (height / 1000) * 72 + ygirl);
  vertex(d + (width / 1000) * 256 + xgirl, s + (height / 1000) * 73 + ygirl);
  vertex(d + (width / 1000) * 262 + xgirl, s + (height / 1000) * 80 + ygirl);
  vertex(d + (width / 1000) * 267 + xgirl, s + (height / 1000) * 89 + ygirl);
  vertex(d + (width / 1000) * 271 + xgirl, s + (height / 1000) * 94 + ygirl);
  vertex(d + (width / 1000) * 268 + xgirl, s + (height / 1000) * 97 + ygirl);
  vertex(d + (width / 1000) * 246 + xgirl, s + (height / 1000) * 108 + ygirl);
  vertex(d + (width / 1000) * 241 + xgirl, s + (height / 1000) * 108 + ygirl);
  vertex(d + (width / 1000) * 231 + xgirl, s + (height / 1000) * 102 + ygirl);
  vertex(d + (width / 1000) * 229 + xgirl, s + (height / 1000) * 97 + ygirl);
  vertex(d + (width / 1000) * 230 + xgirl, s + (height / 1000) * 91 + ygirl);
  vertex(d + (width / 1000) * 237 + xgirl, s + (height / 1000) * 79 + ygirl);
  vertex(d + (width / 1000) * 247 + xgirl, s + (height / 1000) * 72 + ygirl);
  endShape();

  fill("#424540");
  beginShape();
  vertex(d + (width / 1000) * 236 + xgirl, s + (height / 1000) * 141 + ygirl);
  vertex(d + (width / 1000) * 247 + xgirl, s + (height / 1000) * 162 + ygirl);
  vertex(d + (width / 1000) * 234 + xgirl, s + (height / 1000) * 170 + ygirl);
  vertex(d + (width / 1000) * 223 + xgirl, s + (height / 1000) * 146 + ygirl);
  vertex(d + (width / 1000) * 236 + xgirl, s + (height / 1000) * 141 + ygirl);
  endShape();

  fill("#574639");
  beginShape();
  vertex(d + (width / 1000) * 145 + xgirl, s + (height / 1000) * 483 + ygirl);
  vertex(d + (width / 1000) * 148 + xgirl, s + (height / 1000) * 480 + ygirl);
  vertex(d + (width / 1000) * 151 + xgirl, s + (height / 1000) * 477 + ygirl);
  vertex(d + (width / 1000) * 157 + xgirl, s + (height / 1000) * 475 + ygirl);
  vertex(d + (width / 1000) * 162 + xgirl, s + (height / 1000) * 476 + ygirl);
  vertex(d + (width / 1000) * 165 + xgirl, s + (height / 1000) * 481 + ygirl);
  vertex(d + (width / 1000) * 165 + xgirl, s + (height / 1000) * 486 + ygirl);
  vertex(d + (width / 1000) * 163 + xgirl, s + (height / 1000) * 494 + ygirl);
  vertex(d + (width / 1000) * 160 + xgirl, s + (height / 1000) * 501 + ygirl);
  vertex(d + (width / 1000) * 156 + xgirl, s + (height / 1000) * 509 + ygirl);
  vertex(d + (width / 1000) * 158 + xgirl, s + (height / 1000) * 513 + ygirl);
  vertex(d + (width / 1000) * 158 + xgirl, s + (height / 1000) * 516 + ygirl);
  vertex(d + (width / 1000) * 154 + xgirl, s + (height / 1000) * 524 + ygirl);
  vertex(d + (width / 1000) * 148 + xgirl, s + (height / 1000) * 523 + ygirl);
  vertex(d + (width / 1000) * 140 + xgirl, s + (height / 1000) * 518 + ygirl);
  vertex(d + (width / 1000) * 138 + xgirl, s + (height / 1000) * 513 + ygirl);
  vertex(d + (width / 1000) * 137 + xgirl, s + (height / 1000) * 509 + ygirl);
  vertex(d + (width / 1000) * 137 + xgirl, s + (height / 1000) * 504 + ygirl);
  vertex(d + (width / 1000) * 145 + xgirl, s + (height / 1000) * 483 + ygirl);

  endShape();

  fill("#B09A71");
  beginShape();
  vertex(d + (width / 1000) * 324 + xgirl, s + (height / 1000) * 383 + ygirl);
  vertex(d + (width / 1000) * 328 + xgirl, s + (height / 1000) * 389 + ygirl);
  vertex(d + (width / 1000) * 328 + xgirl, s + (height / 1000) * 391 + ygirl);
  vertex(d + (width / 1000) * 326 + xgirl, s + (height / 1000) * 408 + ygirl);
  vertex(d + (width / 1000) * 325 + xgirl, s + (height / 1000) * 423 + ygirl);
  vertex(d + (width / 1000) * 328 + xgirl, s + (height / 1000) * 442 + ygirl);
  vertex(d + (width / 1000) * 338 + xgirl, s + (height / 1000) * 482 + ygirl);
  vertex(d + (width / 1000) * 346 + xgirl, s + (height / 1000) * 511 + ygirl);
  vertex(d + (width / 1000) * 351 + xgirl, s + (height / 1000) * 525 + ygirl);
  vertex(d + (width / 1000) * 352 + xgirl, s + (height / 1000) * 559 + ygirl);
  vertex(d + (width / 1000) * 336 + xgirl, s + (height / 1000) * 551 + ygirl);
  vertex(d + (width / 1000) * 323 + xgirl, s + (height / 1000) * 528 + ygirl);
  vertex(d + (width / 1000) * 325 + xgirl, s + (height / 1000) * 520 + ygirl);
  vertex(d + (width / 1000) * 323 + xgirl, s + (height / 1000) * 511 + ygirl);
  vertex(d + (width / 1000) * 311 + xgirl, s + (height / 1000) * 484 + ygirl);
  vertex(d + (width / 1000) * 294 + xgirl, s + (height / 1000) * 455 + ygirl);
  vertex(d + (width / 1000) * 287 + xgirl, s + (height / 1000) * 433 + ygirl);
  vertex(d + (width / 1000) * 282 + xgirl, s + (height / 1000) * 408 + ygirl);
  vertex(d + (width / 1000) * 293 + xgirl, s + (height / 1000) * 393 + ygirl);
  vertex(d + (width / 1000) * 324 + xgirl, s + (height / 1000) * 383 + ygirl);
  endShape();

  beginShape();
  vertex(d + (width / 1000) * 121 + xgirl, s + (height / 1000) * 397 + ygirl);
  vertex(d + (width / 1000) * 139 + xgirl, s + (height / 1000) * 393 + ygirl);
  vertex(d + (width / 1000) * 143 + xgirl, s + (height / 1000) * 404 + ygirl);
  vertex(d + (width / 1000) * 144 + xgirl, s + (height / 1000) * 440 + ygirl);
  vertex(d + (width / 1000) * 145 + xgirl, s + (height / 1000) * 467 + ygirl);
  vertex(d + (width / 1000) * 146 + xgirl, s + (height / 1000) * 485 + ygirl);
  vertex(d + (width / 1000) * 147 + xgirl, s + (height / 1000) * 484 + ygirl);
  vertex(d + (width / 1000) * 156 + xgirl, s + (height / 1000) * 483 + ygirl);
  vertex(d + (width / 1000) * 159 + xgirl, s + (height / 1000) * 485 + ygirl);
  vertex(d + (width / 1000) * 158 + xgirl, s + (height / 1000) * 490 + ygirl);
  vertex(d + (width / 1000) * 150 + xgirl, s + (height / 1000) * 512 + ygirl);
  vertex(d + (width / 1000) * 146 + xgirl, s + (height / 1000) * 512 + ygirl);
  vertex(d + (width / 1000) * 139 + xgirl, s + (height / 1000) * 509 + ygirl);
  vertex(d + (width / 1000) * 137 + xgirl, s + (height / 1000) * 506 + ygirl);
  vertex(d + (width / 1000) * 135 + xgirl, s + (height / 1000) * 500 + ygirl);
  vertex(d + (width / 1000) * 124 + xgirl, s + (height / 1000) * 478 + ygirl);
  vertex(d + (width / 1000) * 117 + xgirl, s + (height / 1000) * 442 + ygirl);
  vertex(d + (width / 1000) * 118 + xgirl, s + (height / 1000) * 415 + ygirl);
  vertex(d + (width / 1000) * 121 + xgirl, s + (height / 1000) * 397 + ygirl);
  endShape();

  fill("#574639");
  beginShape();
  vertex(d + (width / 1000) * 325 + xgirl, s + (height / 1000) * 519 + ygirl);
  vertex(d + (width / 1000) * 342 + xgirl, s + (height / 1000) * 548 + ygirl);
  vertex(d + (width / 1000) * 355 + xgirl, s + (height / 1000) * 562 + ygirl);
  vertex(d + (width / 1000) * 363 + xgirl, s + (height / 1000) * 584 + ygirl);
  vertex(d + (width / 1000) * 362 + xgirl, s + (height / 1000) * 587 + ygirl);
  vertex(d + (width / 1000) * 356 + xgirl, s + (height / 1000) * 588 + ygirl);
  vertex(d + (width / 1000) * 339 + xgirl, s + (height / 1000) * 572 + ygirl);
  vertex(d + (width / 1000) * 328 + xgirl, s + (height / 1000) * 552 + ygirl);
  vertex(d + (width / 1000) * 314 + xgirl, s + (height / 1000) * 533 + ygirl);
  vertex(d + (width / 1000) * 313 + xgirl, s + (height / 1000) * 529 + ygirl);
  vertex(d + (width / 1000) * 318 + xgirl, s + (height / 1000) * 523 + ygirl);
  vertex(d + (width / 1000) * 325 + xgirl, s + (height / 1000) * 519 + ygirl);
  endShape();

  fill("#86968D");
  beginShape();
  vertex(d + (width / 1000) * 0 + xgirl, s + (height / 1000) * 348 + ygirl);
  vertex(d + (width / 1000) * 77 + xgirl, s + (height / 1000) * 257 + ygirl);
  vertex(d + (width / 1000) * 96 + xgirl, s + (height / 1000) * 236 + ygirl);
  vertex(d + (width / 1000) * 115 + xgirl, s + (height / 1000) * 220 + ygirl);
  vertex(d + (width / 1000) * 175 + xgirl, s + (height / 1000) * 186 + ygirl);
  vertex(d + (width / 1000) * 200 + xgirl, s + (height / 1000) * 129 + ygirl);
  vertex(d + (width / 1000) * 229 + xgirl, s + (height / 1000) * 97 + ygirl);
  vertex(d + (width / 1000) * 245 + xgirl, s + (height / 1000) * 106 + ygirl);
  vertex(d + (width / 1000) * 249 + xgirl, s + (height / 1000) * 105 + ygirl);
  vertex(d + (width / 1000) * 253 + xgirl, s + (height / 1000) * 101 + ygirl);
  vertex(d + (width / 1000) * 260 + xgirl, s + (height / 1000) * 98 + ygirl);
  vertex(d + (width / 1000) * 264 + xgirl, s + (height / 1000) * 96 + ygirl);
  vertex(d + (width / 1000) * 271 + xgirl, s + (height / 1000) * 94 + ygirl);
  vertex(d + (width / 1000) * 274 + xgirl, s + (height / 1000) * 101 + ygirl);
  vertex(d + (width / 1000) * 276 + xgirl, s + (height / 1000) * 104 + ygirl);
  vertex(d + (width / 1000) * 277 + xgirl, s + (height / 1000) * 107 + ygirl);
  vertex(d + (width / 1000) * 278 + xgirl, s + (height / 1000) * 109 + ygirl);
  vertex(d + (width / 1000) * 278 + xgirl, s + (height / 1000) * 111 + ygirl);
  vertex(d + (width / 1000) * 280 + xgirl, s + (height / 1000) * 113 + ygirl);
  vertex(d + (width / 1000) * 282 + xgirl, s + (height / 1000) * 117 + ygirl);
  vertex(d + (width / 1000) * 282 + xgirl, s + (height / 1000) * 121 + ygirl);
  vertex(d + (width / 1000) * 276 + xgirl, s + (height / 1000) * 133 + ygirl);
  vertex(d + (width / 1000) * 275 + xgirl, s + (height / 1000) * 134 + ygirl);
  vertex(d + (width / 1000) * 276 + xgirl, s + (height / 1000) * 137 + ygirl);
  vertex(d + (width / 1000) * 277 + xgirl, s + (height / 1000) * 142 + ygirl);
  vertex(d + (width / 1000) * 277 + xgirl, s + (height / 1000) * 146 + ygirl);
  vertex(d + (width / 1000) * 275 + xgirl, s + (height / 1000) * 149 + ygirl);
  vertex(d + (width / 1000) * 273 + xgirl, s + (height / 1000) * 151 + ygirl);
  vertex(d + (width / 1000) * 270 + xgirl, s + (height / 1000) * 155 + ygirl);
  vertex(d + (width / 1000) * 266 + xgirl, s + (height / 1000) * 160 + ygirl);
  vertex(d + (width / 1000) * 236 + xgirl, s + (height / 1000) * 140 + ygirl);
  vertex(d + (width / 1000) * 232 + xgirl, s + (height / 1000) * 147 + ygirl);
  vertex(d + (width / 1000) * 232 + xgirl, s + (height / 1000) * 158 + ygirl);
  vertex(d + (width / 1000) * 231 + xgirl, s + (height / 1000) * 159 + ygirl);
  vertex(d + (width / 1000) * 231 + xgirl, s + (height / 1000) * 162 + ygirl);
  vertex(d + (width / 1000) * 232 + xgirl, s + (height / 1000) * 163 + ygirl);
  vertex(d + (width / 1000) * 233 + xgirl, s + (height / 1000) * 166 + ygirl);
  vertex(d + (width / 1000) * 239 + xgirl, s + (height / 1000) * 165 + ygirl);
  vertex(d + (width / 1000) * 295 + xgirl, s + (height / 1000) * 306 + ygirl);
  vertex(d + (width / 1000) * 301 + xgirl, s + (height / 1000) * 314 + ygirl);
  vertex(d + (width / 1000) * 309 + xgirl, s + (height / 1000) * 324 + ygirl);
  vertex(d + (width / 1000) * 322 + xgirl, s + (height / 1000) * 333 + ygirl);
  vertex(d + (width / 1000) * 330 + xgirl, s + (height / 1000) * 343 + ygirl);
  vertex(d + (width / 1000) * 341 + xgirl, s + (height / 1000) * 352 + ygirl);
  vertex(d + (width / 1000) * 339 + xgirl, s + (height / 1000) * 385 + ygirl);
  vertex(d + (width / 1000) * 335 + xgirl, s + (height / 1000) * 394 + ygirl);
  vertex(d + (width / 1000) * 331 + xgirl, s + (height / 1000) * 390 + ygirl);
  vertex(d + (width / 1000) * 306 + xgirl, s + (height / 1000) * 404 + ygirl);
  vertex(d + (width / 1000) * 287 + xgirl, s + (height / 1000) * 412 + ygirl);
  vertex(d + (width / 1000) * 279 + xgirl, s + (height / 1000) * 413 + ygirl);
  vertex(d + (width / 1000) * 274 + xgirl, s + (height / 1000) * 418 + ygirl);
  vertex(d + (width / 1000) * 263 + xgirl, s + (height / 1000) * 418 + ygirl);
  vertex(d + (width / 1000) * 242 + xgirl, s + (height / 1000) * 424 + ygirl);
  vertex(d + (width / 1000) * 239 + xgirl, s + (height / 1000) * 418 + ygirl);
  vertex(d + (width / 1000) * 228 + xgirl, s + (height / 1000) * 416 + ygirl);
  vertex(d + (width / 1000) * 209 + xgirl, s + (height / 1000) * 416 + ygirl);
  vertex(d + (width / 1000) * 192 + xgirl, s + (height / 1000) * 422 + ygirl);
  vertex(d + (width / 1000) * 168 + xgirl, s + (height / 1000) * 420 + ygirl);
  vertex(d + (width / 1000) * 150 + xgirl, s + (height / 1000) * 414 + ygirl);
  vertex(d + (width / 1000) * 144 + xgirl, s + (height / 1000) * 414 + ygirl);
  vertex(d + (width / 1000) * 143 + xgirl, s + (height / 1000) * 411 + ygirl);
  vertex(d + (width / 1000) * 115 + xgirl, s + (height / 1000) * 412 + ygirl);
  vertex(d + (width / 1000) * 111 + xgirl, s + (height / 1000) * 411 + ygirl);
  vertex(d + (width / 1000) * 107 + xgirl, s + (height / 1000) * 395 + ygirl);
  vertex(d + (width / 1000) * 103 + xgirl, s + (height / 1000) * 396 + ygirl);
  vertex(d + (width / 1000) * 98 + xgirl, s + (height / 1000) * 383 + ygirl);
  vertex(d + (width / 1000) * 87 + xgirl, s + (height / 1000) * 383 + ygirl);
  vertex(d + (width / 1000) * 85 + xgirl, s + (height / 1000) * 379 + ygirl);
  vertex(d + (width / 1000) * 74 + xgirl, s + (height / 1000) * 379 + ygirl);
  vertex(d + (width / 1000) * 60 + xgirl, s + (height / 1000) * 378 + ygirl);
  vertex(d + (width / 1000) * 60 + xgirl, s + (height / 1000) * 374 + ygirl);
  vertex(d + (width / 1000) * 49 + xgirl, s + (height / 1000) * 377 + ygirl);
  vertex(d + (width / 1000) * 36 + xgirl, s + (height / 1000) * 366 + ygirl);
  vertex(d + (width / 1000) * 26 + xgirl, s + (height / 1000) * 360 + ygirl);
  vertex(d + (width / 1000) * 14 + xgirl, s + (height / 1000) * 360 + ygirl);
  vertex(d + (width / 1000) * 12 + xgirl, s + (height / 1000) * 351 + ygirl);
  vertex(d + (width / 1000) * 0 + xgirl, s + (height / 1000) * 348 + ygirl);
  endShape();

  fill("#424540");
  beginShape();
  vertex(d + (width / 1000) * 244 + xgirl, s + (height / 1000) * 184 + ygirl);
  vertex(d + (width / 1000) * 240 + xgirl, s + (height / 1000) * 189 + ygirl);
  vertex(d + (width / 1000) * 238 + xgirl, s + (height / 1000) * 192 + ygirl);
  vertex(d + (width / 1000) * 227 + xgirl, s + (height / 1000) * 197 + ygirl);
  vertex(d + (width / 1000) * 219 + xgirl, s + (height / 1000) * 199 + ygirl);
  vertex(d + (width / 1000) * 212 + xgirl, s + (height / 1000) * 198 + ygirl);
  vertex(d + (width / 1000) * 203 + xgirl, s + (height / 1000) * 196 + ygirl);
  vertex(d + (width / 1000) * 192 + xgirl, s + (height / 1000) * 192 + ygirl);
  vertex(d + (width / 1000) * 190 + xgirl, s + (height / 1000) * 190 + ygirl);
  vertex(d + (width / 1000) * 206 + xgirl, s + (height / 1000) * 193 + ygirl);
  vertex(d + (width / 1000) * 220 + xgirl, s + (height / 1000) * 194 + ygirl);
  vertex(d + (width / 1000) * 237 + xgirl, s + (height / 1000) * 189 + ygirl);
  vertex(d + (width / 1000) * 244 + xgirl, s + (height / 1000) * 184 + ygirl);
  endShape();

  fill("#B09A71");
  beginShape();
  vertex(d + (width / 1000) * 295 + xgirl, s + (height / 1000) * 306 + ygirl);
  vertex(d + (width / 1000) * 288 + xgirl, s + (height / 1000) * 302 + ygirl);
  vertex(d + (width / 1000) * 281 + xgirl, s + (height / 1000) * 306 + ygirl);
  vertex(d + (width / 1000) * 268 + xgirl, s + (height / 1000) * 275 + ygirl);
  vertex(d + (width / 1000) * 264 + xgirl, s + (height / 1000) * 269 + ygirl);
  vertex(d + (width / 1000) * 259 + xgirl, s + (height / 1000) * 262 + ygirl);
  vertex(d + (width / 1000) * 255 + xgirl, s + (height / 1000) * 253 + ygirl);
  vertex(d + (width / 1000) * 248 + xgirl, s + (height / 1000) * 241 + ygirl);
  vertex(d + (width / 1000) * 242 + xgirl, s + (height / 1000) * 227 + ygirl);
  vertex(d + (width / 1000) * 241 + xgirl, s + (height / 1000) * 222 + ygirl);
  vertex(d + (width / 1000) * 240 + xgirl, s + (height / 1000) * 217 + ygirl);
  vertex(d + (width / 1000) * 239 + xgirl, s + (height / 1000) * 190 + ygirl);
  vertex(d + (width / 1000) * 237 + xgirl, s + (height / 1000) * 148 + ygirl);
  vertex(d + (width / 1000) * 233 + xgirl, s + (height / 1000) * 142 + ygirl);
  vertex(d + (width / 1000) * 237 + xgirl, s + (height / 1000) * 138 + ygirl);
  vertex(d + (width / 1000) * 243 + xgirl, s + (height / 1000) * 136 + ygirl);
  vertex(d + (width / 1000) * 249 + xgirl, s + (height / 1000) * 126 + ygirl);
  vertex(d + (width / 1000) * 251 + xgirl, s + (height / 1000) * 121 + ygirl);
  vertex(d + (width / 1000) * 253 + xgirl, s + (height / 1000) * 117 + ygirl);
  vertex(d + (width / 1000) * 256 + xgirl, s + (height / 1000) * 115 + ygirl);
  vertex(d + (width / 1000) * 265 + xgirl, s + (height / 1000) * 111 + ygirl);
  vertex(d + (width / 1000) * 274 + xgirl, s + (height / 1000) * 114 + ygirl);
  vertex(d + (width / 1000) * 275 + xgirl, s + (height / 1000) * 126 + ygirl);
  vertex(d + (width / 1000) * 273 + xgirl, s + (height / 1000) * 139 + ygirl);
  vertex(d + (width / 1000) * 267 + xgirl, s + (height / 1000) * 157 + ygirl);
  vertex(d + (width / 1000) * 266 + xgirl, s + (height / 1000) * 187 + ygirl);
  vertex(d + (width / 1000) * 267 + xgirl, s + (height / 1000) * 196 + ygirl);
  vertex(d + (width / 1000) * 269 + xgirl, s + (height / 1000) * 209 + ygirl);
  vertex(d + (width / 1000) * 273 + xgirl, s + (height / 1000) * 228 + ygirl);
  vertex(d + (width / 1000) * 279 + xgirl, s + (height / 1000) * 260 + ygirl);
  vertex(d + (width / 1000) * 281 + xgirl, s + (height / 1000) * 268 + ygirl);
  vertex(d + (width / 1000) * 285 + xgirl, s + (height / 1000) * 280 + ygirl);
  vertex(d + (width / 1000) * 294 + xgirl, s + (height / 1000) * 297 + ygirl);
  vertex(d + (width / 1000) * 295 + xgirl, s + (height / 1000) * 302 + ygirl);
  vertex(d + (width / 1000) * 295 + xgirl, s + (height / 1000) * 306 + ygirl);
  endShape();

  fill("#B08565");
  beginShape();
  vertex(d + (width / 1000) * 304 + xgirl, s + (height / 1000) * 37 + ygirl);
  vertex(d + (width / 1000) * 308 + xgirl, s + (height / 1000) * 56 + ygirl);
  vertex(d + (width / 1000) * 307 + xgirl, s + (height / 1000) * 59 + ygirl);
  vertex(d + (width / 1000) * 303 + xgirl, s + (height / 1000) * 64 + ygirl);
  vertex(d + (width / 1000) * 300 + xgirl, s + (height / 1000) * 65 + ygirl);
  vertex(d + (width / 1000) * 297 + xgirl, s + (height / 1000) * 66 + ygirl);
  vertex(d + (width / 1000) * 297 + xgirl, s + (height / 1000) * 70 + ygirl);
  vertex(d + (width / 1000) * 297 + xgirl, s + (height / 1000) * 71 + ygirl);
  vertex(d + (width / 1000) * 296 + xgirl, s + (height / 1000) * 71 + ygirl);
  vertex(d + (width / 1000) * 294 + xgirl, s + (height / 1000) * 70 + ygirl);
  vertex(d + (width / 1000) * 293 + xgirl, s + (height / 1000) * 69 + ygirl);
  vertex(d + (width / 1000) * 294 + xgirl, s + (height / 1000) * 75 + ygirl);
  vertex(d + (width / 1000) * 295 + xgirl, s + (height / 1000) * 78 + ygirl);
  vertex(d + (width / 1000) * 295 + xgirl, s + (height / 1000) * 79 + ygirl);
  vertex(d + (width / 1000) * 293 + xgirl, s + (height / 1000) * 80 + ygirl);
  vertex(d + (width / 1000) * 291 + xgirl, s + (height / 1000) * 80 + ygirl);
  vertex(d + (width / 1000) * 289 + xgirl, s + (height / 1000) * 79 + ygirl);
  vertex(d + (width / 1000) * 286 + xgirl, s + (height / 1000) * 83 + ygirl);
  vertex(d + (width / 1000) * 285 + xgirl, s + (height / 1000) * 83 + ygirl);
  vertex(d + (width / 1000) * 284 + xgirl, s + (height / 1000) * 83 + ygirl);
  vertex(d + (width / 1000) * 279 + xgirl, s + (height / 1000) * 82 + ygirl);
  vertex(d + (width / 1000) * 281 + xgirl, s + (height / 1000) * 83 + ygirl);
  vertex(d + (width / 1000) * 279 + xgirl, s + (height / 1000) * 87 + ygirl);
  vertex(d + (width / 1000) * 274 + xgirl, s + (height / 1000) * 90 + ygirl);
  vertex(d + (width / 1000) * 268 + xgirl, s + (height / 1000) * 90 + ygirl);
  vertex(d + (width / 1000) * 265 + xgirl, s + (height / 1000) * 88 + ygirl);
  vertex(d + (width / 1000) * 261 + xgirl, s + (height / 1000) * 87 + ygirl);
  vertex(d + (width / 1000) * 257 + xgirl, s + (height / 1000) * 82 + ygirl);
  vertex(d + (width / 1000) * 255 + xgirl, s + (height / 1000) * 77 + ygirl);
  vertex(d + (width / 1000) * 266 + xgirl, s + (height / 1000) * 47 + ygirl);
  vertex(d + (width / 1000) * 304 + xgirl, s + (height / 1000) * 37 + ygirl);
  endShape();

  fill("#664D2F");
  beginShape();
  curveVertex(
    d + (width / 1000) * 258 + xgirl,
    s + (height / 1000) * 0 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 271 + xgirl,
    s + (height / 1000) * 5 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 293 + xgirl,
    s + (height / 1000) * 16 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 301 + xgirl,
    s + (height / 1000) * 21 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 310 + xgirl,
    s + (height / 1000) * 37 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 310 + xgirl,
    s + (height / 1000) * 59 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 308 + xgirl,
    s + (height / 1000) * 63 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 308 + xgirl,
    s + (height / 1000) * 59 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 306 + xgirl,
    s + (height / 1000) * 61 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 309 + xgirl,
    s + (height / 1000) * 55 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 306 + xgirl,
    s + (height / 1000) * 59 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 306 + xgirl,
    s + (height / 1000) * 54 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 304 + xgirl,
    s + (height / 1000) * 59 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 303 + xgirl,
    s + (height / 1000) * 50 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 299 + xgirl,
    s + (height / 1000) * 56 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 298 + xgirl,
    s + (height / 1000) * 52 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 292 + xgirl,
    s + (height / 1000) * 59 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 279 + xgirl,
    s + (height / 1000) * 49 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 268 + xgirl,
    s + (height / 1000) * 57 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 270 + xgirl,
    s + (height / 1000) * 63 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 263 + xgirl,
    s + (height / 1000) * 74 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 255 + xgirl,
    s + (height / 1000) * 77 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 253 + xgirl,
    s + (height / 1000) * 81 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 245 + xgirl,
    s + (height / 1000) * 108 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 235 + xgirl,
    s + (height / 1000) * 127 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 243 + xgirl,
    s + (height / 1000) * 75 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 232 + xgirl,
    s + (height / 1000) * 123 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 236 + xgirl,
    s + (height / 1000) * 85 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 223 + xgirl,
    s + (height / 1000) * 141 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 216 + xgirl,
    s + (height / 1000) * 155 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 200 + xgirl,
    s + (height / 1000) * 209 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 215 + xgirl,
    s + (height / 1000) * 137 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 216 + xgirl,
    s + (height / 1000) * 122 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 205 + xgirl,
    s + (height / 1000) * 152 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 192 + xgirl,
    s + (height / 1000) * 190 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 191 + xgirl,
    s + (height / 1000) * 224 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 183 + xgirl,
    s + (height / 1000) * 257 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 188 + xgirl,
    s + (height / 1000) * 223 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 186 + xgirl,
    s + (height / 1000) * 189 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 165 + xgirl,
    s + (height / 1000) * 236 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 181 + xgirl,
    s + (height / 1000) * 185 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 173 + xgirl,
    s + (height / 1000) * 198 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 166 + xgirl,
    s + (height / 1000) * 217 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 152 + xgirl,
    s + (height / 1000) * 239 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 165 + xgirl,
    s + (height / 1000) * 209 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 172 + xgirl,
    s + (height / 1000) * 179 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 160 + xgirl,
    s + (height / 1000) * 202 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 156 + xgirl,
    s + (height / 1000) * 215 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 140 + xgirl,
    s + (height / 1000) * 237 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 150 + xgirl,
    s + (height / 1000) * 218 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 164 + xgirl,
    s + (height / 1000) * 178 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 146 + xgirl,
    s + (height / 1000) * 213 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 140 + xgirl,
    s + (height / 1000) * 218 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 127 + xgirl,
    s + (height / 1000) * 232 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 150 + xgirl,
    s + (height / 1000) * 195 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 151 + xgirl,
    s + (height / 1000) * 187 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 159 + xgirl,
    s + (height / 1000) * 168 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 120 + xgirl,
    s + (height / 1000) * 225 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 134 + xgirl,
    s + (height / 1000) * 192 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 140 + xgirl,
    s + (height / 1000) * 185 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 143 + xgirl,
    s + (height / 1000) * 174 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 149 + xgirl,
    s + (height / 1000) * 169 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 158 + xgirl,
    s + (height / 1000) * 154 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 142 + xgirl,
    s + (height / 1000) * 168 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 137 + xgirl,
    s + (height / 1000) * 178 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 124 + xgirl,
    s + (height / 1000) * 206 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 142 + xgirl,
    s + (height / 1000) * 161 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 147 + xgirl,
    s + (height / 1000) * 150 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 149 + xgirl,
    s + (height / 1000) * 129 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 157 + xgirl,
    s + (height / 1000) * 113 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 177 + xgirl,
    s + (height / 1000) * 68 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 193 + xgirl,
    s + (height / 1000) * 56 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 221 + xgirl,
    s + (height / 1000) * 21 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 239 + xgirl,
    s + (height / 1000) * 5 + ygirl
  );
  curveVertex(
    d + (width / 1000) * 247 + xgirl,
    s + (height / 1000) * 1.5 + ygirl
  );
  vertex(d + (width / 1000) * 258 + xgirl, s + (height / 1000) * 0 + ygirl);
  endShape();

  fill("#B09A71");
  beginShape();

  endShape();

  fill("#B09A71");
  beginShape();

  endShape();

  fill("#B09A71");
  beginShape();

  endShape();

  fill("#B09A71");
  beginShape();

  endShape();

  fill("#B09A71");
  beginShape();

  endShape();

  fill("#B09A71");
  beginShape();

  endShape();

  fill("#B09A71");
  beginShape();

  endShape();
}

function Paper() {
  //paper
  fill(0, 100);
  rect(
    xWin + (width / 1000) * -22,
    (width / 1000) * 62 + y,
    (width / 1000) * 60,
    (width / 1000) * 80
  );
  fill("#ffffff");
  rect(
    xWin + (width / 1000) * -20,
    (width / 1000) * 60 + y,
    (width / 1000) * 60,
    (width / 1000) * 80
  );
  stroke(0);
  strokeWeight(0.2);
  noFill();
  beginShape();
  vertex(xWin + (width / 1000) * -18, (width / 1000) * 65 + y);
  vertex(
    xWin + (width / 1000) * random(-18, 30),
    (width / 1000) * random(60, 135) + y
  );
  vertex(
    xWin + (width / 1000) * random(-18, 30),
    (width / 1000) * random(60, 135) + y
  );
  vertex(
    xWin + (width / 1000) * random(-18, 30),
    (width / 1000) * random(60, 135) + y
  );
  vertex(
    xWin + (width / 1000) * random(-18, 30),
    (width / 1000) * random(60, 135) + y
  );
  vertex(
    xWin + (width / 1000) * random(-18, 30),
    (width / 1000) * random(60, 135) + y
  );
  vertex(
    xWin + (width / 1000) * random(-18, 30),
    (width / 1000) * random(60, 135) + y
  );
  vertex(
    xWin + (width / 1000) * random(-18, 30),
    (width / 1000) * random(60, 135) + y
  );
  vertex(
    xWin + (width / 1000) * random(-18, 30),
    (width / 1000) * random(60, 135) + y
  );
  vertex(
    xWin + (width / 1000) * random(-18, 30),
    (width / 1000) * random(60, 135) + y
  );
  vertex(
    xWin + (width / 1000) * random(-18, 30),
    (width / 1000) * random(60, 135) + y
  );
  vertex(
    xWin + (width / 1000) * random(-18, 30),
    (width / 1000) * random(60, 135) + y
  );
  vertex(xWin + (width / 1000) * 30, (width / 1000) * 135 + y);

  endShape();
}
function Cloud() {
 
  fill("#F4F1E5");
  noStroke();
  rect(0, 0, width, (width / 1000) * 319+y);
  var t = (width / 1000) * 3;
  for (
    var u = (height / 1000) * 0 + y;
    u <= (height / 1000) * 300 + y;
    u += (width / 1000) * 5
  ) {
    stroke("#1B8CE0");
    strokeWeight(t);
    line(
      xWin + (width / 1000) * 70,
      (width / 1000) * 0 + y + u - 30,
      xWin + (width / 1000) * 410,
      (width / 1000) * 0 + y + u
    );
    t = t - 0.03;
  }

  var xSun = random((width / 1000) * 300, (width / 1000) * 900);
  var ySun = random(0, 100);
  var h = random(20, 80);
  fill(255, 200, 0);
  circle(xWin+(width / 1000) * xSun, (height / 1000) * ySun, h);

  noStroke();
  //Cloud
  fill(255, 120);
  beginShape();
  vertex(xWin + xcloud + (width / 1000) * 171, (height / 1000) * 50 + y);
  vertex(xWin + xcloud + (width / 1000) * 181, (height / 1000) * 50 + y);
  vertex(xWin + xcloud + (width / 1000) * 193, (height / 1000) * 43 + y);
  vertex(xWin + xcloud + (width / 1000) * 212, (height / 1000) * 39 + y);
  vertex(xWin + xcloud + (width / 1000) * 230, (height / 1000) * 45 + y);
  vertex(xWin + xcloud + (width / 1000) * 240, (height / 1000) * 30 + y);
  vertex(xWin + xcloud + (width / 1000) * 251, (height / 1000) * 19 + y);
  vertex(xWin + xcloud + (width / 1000) * 261, (height / 1000) * 26 + y);
  vertex(xWin + xcloud + (width / 1000) * 270, (height / 1000) * 34 + y);
  vertex(xWin + xcloud + (width / 1000) * 272, (height / 1000) * 45 + y);
  vertex(xWin + xcloud + (width / 1000) * 274, (height / 1000) * 52 + y);
  vertex(xWin + xcloud + (width / 1000) * 272, (height / 1000) * 56 + y);
  vertex(xWin + xcloud + (width / 1000) * 284, (height / 1000) * 66 + y);
  vertex(xWin + xcloud + (width / 1000) * 276, (height / 1000) * 70 + y);
  vertex(xWin + xcloud + (width / 1000) * 270, (height / 1000) * 72 + y);
  vertex(xWin + xcloud + (width / 1000) * 263, (height / 1000) * 70 + y);
  vertex(xWin + xcloud + (width / 1000) * 255, (height / 1000) * 61 + y);
  vertex(xWin + xcloud + (width / 1000) * 247, (height / 1000) * 70 + y);
  vertex(xWin + xcloud + (width / 1000) * 240, (height / 1000) * 74 + y);
  vertex(xWin + xcloud + (width / 1000) * 236, (height / 1000) * 82 + y);
  vertex(xWin + xcloud + (width / 1000) * 224, (height / 1000) * 82 + y);
  vertex(xWin + xcloud + (width / 1000) * 215, (height / 1000) * 72 + y);
  vertex(xWin + xcloud + (width / 1000) * 208, (height / 1000) * 66 + y);
  vertex(xWin + xcloud + (width / 1000) * 199, (height / 1000) * 68 + y);
  vertex(xWin + xcloud + (width / 1000) * 193, (height / 1000) * 66 + y);
  vertex(xWin + xcloud + (width / 1000) * 185, (height / 1000) * 58 + y);
  vertex(xWin + xcloud + (width / 1000) * 171, (height / 1000) * 50 + y);

  endShape();
  beginShape();
  vertex(xWin + xcloud2 + (width / 1000) * 251, (height / 1000) * 140 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 277, (height / 1000) * 136 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 285, (height / 1000) * 130 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 293, (height / 1000) * 126 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 305, (height / 1000) * 124 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 309, (height / 1000) * 131 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 314, (height / 1000) * 126 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 321, (height / 1000) * 119 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 329, (height / 1000) * 120 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 339, (height / 1000) * 118 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 343, (height / 1000) * 127 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 349, (height / 1000) * 136 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 349, (height / 1000) * 144 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 367, (height / 1000) * 136 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 396, (height / 1000) * 123 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 379, (height / 1000) * 119 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 390, (height / 1000) * 123 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 392, (height / 1000) * 131 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 398, (height / 1000) * 136 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 404, (height / 1000) * 140 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 412, (height / 1000) * 150 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 401, (height / 1000) * 149 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 396, (height / 1000) * 144 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 386, (height / 1000) * 150 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 379, (height / 1000) * 161 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 367, (height / 1000) * 161 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 366, (height / 1000) * 152 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 359, (height / 1000) * 161 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 357, (height / 1000) * 165 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 349, (height / 1000) * 170 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 345, (height / 1000) * 170 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 339, (height / 1000) * 180 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 329, (height / 1000) * 180 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 318, (height / 1000) * 174 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 305, (height / 1000) * 166 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 299, (height / 1000) * 168 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 290, (height / 1000) * 168 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 285, (height / 1000) * 162 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 281, (height / 1000) * 156 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 271, (height / 1000) * 149 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 267, (height / 1000) * 149 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 262, (height / 1000) * 141 + y);
  vertex(xWin + xcloud2 + (width / 1000) * 251, (height / 1000) * 140 + y);
  endShape();
}

function Win() {


  noStroke();
  fill("#F4F1E5");
    beginShape();
    vertex((width / 1000) * 395 + xWin, 0);
    vertex(width, 0);
    vertex(width, (height / 1000) * 319 + y);
    vertex(0, (height / 1000) * 319 + y);
    vertex(0,0);
      vertex((width / 1000) * 60 + xWin, (height / 1000) * 0 + y);
      vertex((width / 1000) * 60 + xWin, (height / 1000) * 265 + y);
      vertex((width / 1000) * 395 + xWin, (height / 1000) * 265 + y);
    vertex((width / 1000) * 395 + xWin, 0);
    endShape();


  fill("#F4F1E5");

  stroke(0);
  strokeWeight((width / 1000) * 0.2);
  rect(
    xWin + (width / 1000) * 178,
    (width / 1000) * 0 + y,
    (width / 1000) * 18,
    (width / 1000) * 220
  );
  rect(
    xWin + (width / 1000) * 280,
    (width / 1000) * 0 + y,
    (width / 1000) * 18,
    (width / 1000) * 220
  );
  // fill("#726142");
  rect(
    xWin + (width / 1000) * 182,
    (width / 1000) * 0 + y,
    (width / 1000) * 18,
    (width / 1000) * 220
  );
  rect(
    xWin + (width / 1000) * 284,
    (width / 1000) * 0 + y,
    (width / 1000) * 18,
    (width / 1000) * 220
  );

  // fill("#726142");
  for (var i = 0; i <= 220; i += 8) {
    rect(
      xWin + (width / 1000) * 93,
      (width / 1000) * i + y,
      (width / 1000) * 90,
      (width / 1000) * 5
    );
  }
  // fill("#5B4838");
  beginShape();
  vertex((width / 1000) * 395 + xWin, (height / 1000) * -20 + y);
  vertex((width / 1000) * 380 + xWin, (height / 1000) * 0 + y);
  vertex((width / 1000) * 380 + xWin, (height / 1000) * 220 + y);
  vertex((width / 1000) * 395 + xWin, (height / 1000) * 240 + y);
  vertex((width / 1000) * 395 + xWin, (height / 1000) * -20 + y);
  endShape();
  // fill("#726142");
  beginShape();
  vertex((width / 1000) * 395 + xWin, (height / 1000) * -20 + y);
  vertex((width / 1000) * 80 + xWin, (height / 1000) * -20 + y);
  vertex((width / 1000) * 80 + xWin, (height / 1000) * 240 + y);
  vertex((width / 1000) * 395 + xWin, (height / 1000) * 240 + y);
  vertex((width / 1000) * 380 + xWin, (height / 1000) * 220 + y);
  vertex((width / 1000) * 95 + xWin, (height / 1000) * 220 + y);
  vertex((width / 1000) * 95 + xWin, (height / 1000) * 0 + y);
  vertex((width / 1000) * 380 + xWin, (height / 1000) * 0 + y);

  endShape();

  // fill("#635640");
  beginShape();
  vertex((width / 1000) * 420 + xWin, (height / 1000) * -40 + y);
  vertex((width / 1000) * 395 + xWin, (height / 1000) * -20 + y);
  vertex((width / 1000) * 395 + xWin, (height / 1000) * 240 + y);
  vertex((width / 1000) * 420 + xWin, (height / 1000) * 265 + y);
  vertex((width / 1000) * 420 + xWin, (height / 1000) * -40 + y);
  endShape();

  // fill("#503E2E");
  beginShape();
  vertex((width / 1000) * 420 + xWin, (height / 1000) * -40 + y);
  vertex((width / 1000) * 395 + xWin, (height / 1000) * -20 + y);
  vertex((width / 1000) * 80 + xWin, (height / 1000) * -20 + y);
  vertex((width / 1000) * 80 + xWin, (height / 1000) * 240 + y);
  vertex((width / 1000) * 395 + xWin, (height / 1000) * 240 + y);
  vertex((width / 1000) * 420 + xWin, (height / 1000) * 265 + y);
  vertex((width / 1000) * 55 + xWin, (height / 1000) * 265 + y);
  vertex((width / 1000) * 55 + xWin, (height / 1000) * -40 + y);
  vertex((width / 1000) * 420 + xWin, (height / 1000) * -40 + y);
  endShape();
}

function tree(x, y, brightness, angle, length) {
  colorMode(HSB);

  // current detail
  strokeWeight(length / 20);
  stroke(0, length / 30);

  var x1 = x + length * sin(angle);
  var y1 = y - length * cos(angle);

  line(x, y, x1, y1);

  // stop condition
  if (length > 10) {
    tree(
      x1,
      y1,
      brightness + random(-10, 10),
      angle + random(5, 45),
      (length * random(50, 90)) / 100
    );
    tree(
      x1,
      y1,
      brightness + random(-10, 10),
      angle + random(-45, -5),
      (length * random(50, 90)) / 100
    );

    tree(
      x1,
      y1,
      brightness + random(-10, 10),
      angle + random(0, 1),
      length * 0.8
    );
  }
  colorMode(RGB);
}

function tex(d,s){
   noStroke()
  fill("#F4F1E5");
rect(0+d, 0+s, width, height);
   stroke(0, 90);
  strokeWeight((width / 1000) * 0.015);
  for (var x = 0; x <= width * 2; x += (width / 1000) *10) {
    for (var rr = 0; rr <= height * 2; rr += (width / 1000) *10) {
      line(-height + x+d, height+s, x+d, 0+s);
    }
  }
  for (var x = 0; x <= height * 2; x += (width / 1000) *10) {
    for (var rr = 0; rr <= height * 2; rr += (width / 1000) *10) {
      line(-height + x+d, 0+s, x+d, height+s);
    }
  }
}


  function randmax(min, max){
  return Math.round(fxrand() * (max-min) + min);
}

  function randmaxdouble(min, max){
  return fxrand() * (max-min) + min;
}



function HSLToHEX(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}



const HSLToRGB = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [255 * f(0), 255 * f(8), 255 * f(4)];
};


let colorMain, colorMain2, palette;

  colorMain = HSLToHEX(randmax(0, 360), randmax(70, 90), randmax(50, 60));
  colorMain2 = tinycolor(colorMain).complement().toHexString();
  palette = [colorMain, colorMain2];



  //Link

  // lm
  var centerx;
  var centery;
  var smallEvenChangesToLmWeight;
  var changeweightDuringLine;
  var changeweightBeforeLine;
  var changeweightbyhistory;
  var sccc;
  var scc;
  var goSmallerSizeChoice;
  var addx;
  var addy;
  var addl1;
  var addflo;
  var useaddx;
  var nlines = 0;
  var x;
  var y;
  var changeweight;
  var z=1;
  let myArray = [];
  let choices = [-1,0,1];
  var ndraws = 0;
  var n=0;
  var scb;
  var dvi;
  var bw;
  let frees = [];
  var bufferx;
  var buffery;
  var zzm;
  var uum;
  var sizeChoice;
  var fatnessx;
  var fatnessy;
  var l2;
  var ins;
  var l1;
  var past_x;
  var past_y;
  var cutofff;
  var randomop;
  var opmult;
  var op=100;
  var c1;// = (random(-50,50));
  var c2;// = (random(-50,50));
  var c3;// =(random(-50,50));
  var nlim;
  var sw;
  var lm;
  var alm;
  var blm;
  var sqs;
  var msw=1;
  var cc;
  var minn = 500;
  var chooserandomdist;
  var mins;
  var maxs;
  var ns;
  //print(choices);
  var chanSC;
  var chSWbySC;
  var scm;
  var mmult;

  function setup() {
  	createCanvas(windowWidth, windowHeight);
    randomSeed(randmax(0,1000));
  	addl1 =0; //int(random(0,1.01));
  	addflo =1;//int(random(0,1.02));
  	changeweightDuringLine = random([0,1]);
  	changeweightBeforeLine = int(random(0.5,1.9));
  	changeweightbyhistory = int(random(.9,1.7));
  	smallEvenChangesToLmWeight = int(random(.5,1.5));
  	chSWbySC = 0;//int(random(0.1,1.8));
  	//print(chSWbySC);
  	chanSC=1;//int(random(0.8,1.8));
  	//scc = int(random(0,1));
    scc = 1;
  	var windowSizeChoice = int(windowWidth*windowHeight/20000);

  	if (chanSC==1){

  	minSizeChoice = 1;
  	maxSizeChoice = min(10,max(windowSizeChoice,minSizeChoice));

  	sizeChoice = maxSizeChoice;//int(random(5,maxSizeChoice+0.1)); // start at max, should get smaller
  	}else{
  	maxSizeChoice =min(5,max(windowSizeChoice,2));
  	sizeChoice=int(random(2,maxSizeChoice+0.1));
  	}
  	scb = sizeChoice+2;

  	scm = random(0.01,0.2);
  	mins = 0.1*sizeChoice;
  	maxs = scm*sizeChoice;//#max(1.1,sizeChoice-3);
  	ns = 0.1;
  	sw = 0.01;//random(0,maxs);

  	sw=min(sw+max(random(-ns,ns),mins),maxs);// +random(-sizeChoice*.3+0.1,0);
  	goSmallerSizeChoice = 1;//int(random(0,1.1));
  	fatnessx = sizeChoice-1;
  	fatnessy = sizeChoice-1;
  	bufferx = maxSizeChoice+scb+10;
  	buffery = maxSizeChoice+scb+10;
  	dvi = random(2,4);
  	var sf = random(500,700)
  	zzm = 0;//int(random(0,(windowHeight+windowWidth)/sf));
  	uum = 0;//int(random(0,(windowWidth+windowHeight)/sf));
  	nlim = random(minn,(windowWidth*windowHeight));
  	centerx = int(windowWidth/2);
  	//print(int(centerx));
  	centery = int(windowHeight/2);

  	addx = random(bufferx,centerx/3);
  	addy = random(buffery,centery/3);
  	//print(addx);
  	//print(addy);
  	x =int(random(bufferx,(windowWidth-bufferx)));
  	y =int(random(buffery,(windowHeight-buffery)));
  	past_x = x+random([-1,0,1]);
  		past_y = y+random([-1,0,1]);
  	 cc = random(2,10);
  	c1=(random(-5,255));
  	c2=(random(-5,255));
  	c3=(random(-5,255));
  	var mc = (c1+c2+c3)/3;
  		track=1;
  	bw = int(random(0,1.2));
  	if (bw==1){
  	c1=10;
  	c2=10;
  	c3=10;
  		track =int(random(0,1.1));
  		cc=random(0,2);
  	}

  	//l1 = int(random(0,1.2));
  	useaddx = 1;// int(random(0,1.2));

  background(16);
  	chooserandomdist = int(random(0,1.5));
  	//l2 = 1;//int(random(0,1.5));
  	lm = 0;//int(random(0,1.5));
  	changeweight = 0;int(random(0,1.5));
  	sqs = int(random(0,1.5));
  	lzs = int(random(0,1.8));

  	// exquisitely sensitive to these initial weights. can look like l2/l2 norm
  	// if they are set to eg random([-0.1,0.1]) or [-10,10]
  	// or even i think random(-0.1,0.101)
  	mmult = random(0.1,10);
  	if (smallEvenChangesToLmWeight==1 || changeweightbyhistory==1){
  	alm = random(-0.1*mmult,(0.10+0.001)*mmult);
  	blm = random(-0.1*mmult,(0.10+0.001)*mmult);
  	}else{
  	alm = random(-10,10+0.001);
  	blm = random(-10,10+0.001);
  	}
  	//print(l1);
  	//print(l2);
  	cutofff = random(200,290);
    for (let x = 0; x < windowWidth; x++) {
      myArray[x] = []; // create nested array
      for (let y = 0; y < windowHeight; y++) {
        myArray[x][y] = 0;
      }
  	}
  	//var k = 0;
  	//for (let x = 0; x < windowWidth; x++) {
     // for (let y = 0; y < windowHeight; y++) {
     //   let frees[k] = [];
  	//		frees[k][1] =x;
  	//		frees[k][2] = y;
  	//		k++;
     // }
  	//}

  	  for (let x = 0; x < windowWidth; x++) {
      for (let y = 0; y < buffery; y++) {
        myArray[x][y] = 1;
      }
  	}

  		  for (let x = 0; x < windowWidth; x++) {
      for (let y = windowHeight-buffery; y < windowHeight; y++) {
        myArray[x][y] = 1;
      }
  	}

  	for (let y = 0; y < windowHeight; y++) {
      for (let x = windowWidth-bufferx; x < windowWidth; x++) {
        myArray[x][y] = 1;
      }
  	}

  	for (let y = 0; y < windowHeight; y++) {
      for (let x = 0; x < bufferx; x++) {
        myArray[x][y] = 1;
      }
  	}



  	if (lzs==1){

    for (let zz=0; zz<zzm; zz++){
    //var v1 = int(random(buffery,windowHeight-buffery));
  		var a = int(random(-1000,1000));
  		var b = int(random(-10,10));
  	   for (let ii=0;ii<windowWidth;ii++){
  		for (let sc=-int((sizeChoice+1)/2); sc<int((sizeChoice+1)/2); sc++){

  					var v11 = int(a + b*ii);
  				//print(ii);
  				//print(v11);
  				if ((v11+sc)<windowHeight){

          myArray[ii][v11+sc] = 1;
  				}
  			}
    }
  	}
  	}

  	//print(windowWidth);
  	//print(bufferx);
  	if (sqs==1){
  	  for (let zz=0; zz<zzm; zz++){
    var v1 = int(random(buffery,windowHeight-buffery));
  	   for (let ii=0;ii<windowWidth;ii++){
  		for (let sc=-int((sizeChoice+1)/2); sc<int((sizeChoice+1)/2); sc++){


  				//print(ii);
  				//print(v11);


          myArray[ii][v1 + sc] = 1;

  			}
    }
  	}

  	for (let uu=0; uu<uum; uu++){
    var h1 = int(random(bufferx,windowWidth-bufferx));
  				for (let sc=-int((sizeChoice+1)/2); sc<int((sizeChoice+1)/2); sc++){
    for (let ii=0;ii<windowHeight;ii++){
         myArray[h1+sc][ii] = 1;
  	}
    }
    }
  	}


  	smooth()

  }


  function draw() {
   for(let iz=1;iz<=4000;iz++){


  //		x = x + random(choices);
  //		y = y + random(choices);
  //		z = z + random(choices);


  	    //fill(c1,c2,c3,randomop+op+opmult*log(n/100));
        //stroke(c1,c2,c3,randomop+op+opmult*log(n/100));
  		//ellipse(centerx+x, centery+y, (n>10)*(sizeChoice+log(n/1000)), (n>10)*sizeChoice+log(n/1000));
  			//ellipse(centerx+x+random(-2,2), centery+y+random(-2,2), (n>10)*(sizeChoice+log(n/1000)), (n>10)*sizeChoice+log(n/1000));
  		//ellipse(centerx+x+random(-5,5), centery+y+random(-5,5), (n>10)*(sizeChoice+log(n/1000)), (n>10)*sizeChoice+log(n/1000));
  			//ellipse(centerx+x+random(-10,10), centery+y+random(-10,10), (n>10)*(sizeChoice+log(n/1000)), (n>10)*sizeChoice+log(n/1000));
  			//ellipse(centerx+x+random(-5,5), centery+y+random(-5,5), (n>10)*(sizeChoice+log(n/1000)), (n>10)*sizeChoice+log(n/1000));
  			//ellipse(centerx+x+random(-5,5), centery+y+random(-5,5), (n>10)*(sizeChoice+log(n/1000)), (n>10)*sizeChoice+log(n/1000));
  		//ellipse(centerx+x, centery+y, 1, 1);
  var ss = (n>10)*(n+100);
  		if (track==1){
  			strokeWeight(sw);
  	stroke(255-c1,255-c2,255-c3,ss);
  	line(centerx + past_x+1,centery + past_y+1, centerx+x+1,centery+y+1)
  	line(centerx + past_x+1.5,centery + past_y+1.5, centerx+x+1.5,centery+y+1.5)
  		}
  strokeWeight(sw);
   stroke(c1,c2,c3,ss);
  	//strokeWeight(sw+random(0,2));
  	  //line(centerx + past_x +random(-1,1),centery + past_y+random(-1,1), centerx+x+random(-1,1),centery+y+random(-1,1))
  	  //line(centerx + past_x+random(-5,5),centery + past_y +random(-5,5), centerx+x+random(-5,5),centery+y+random(-5,5))
  	  line(centerx + past_x,centery + past_y, centerx+x,centery+y);

  	if (track==1){
  				//strokeWeight(sw);//+random(0,2));
  			 //stroke(255-c1,255-c2,255-c3,ss);
  		  //line(centerx + past_x-1,centery + past_y-1, centerx+x-1,centery+y-1);
  	//line(centerx + past_x-1,centery + past_y-1, centerx+x+random(-1,1)-1,centery+y+random(-1,1)-1)
  	}
  	//strokeWeight(4);
  	//ellipse(centerx+x,centery+y,10);
  	//line(centerx + past_x,centery + past_y, centerx+x,centery+y);
  	//	 stroke(1,1,1,(n>10)*(n+100));
  	//strokeWeight(.05);
  	//ellipse(centerx+x,centery+y,10);
  	//line(centerx + past_x,centery + past_y, centerx+x,centery+y);
  	//line(centerx + past_x+1,centery + past_y+1, centerx+x+1,centery+y+1)
  	//line(centerx + past_x-1,centery + past_y-1, centerx+x-1,centery+y-1)



  		mx = centerx+x;
  		my = centery+y;

  	 var oldx=centerx+x;
    var oldy=centery+y;

  	  for(let i=-fatnessx;i<=fatnessx;i++){
      for(let j=-fatnessy;j<=fatnessy;j++){
               if (centerx+x+i>bufferx){

                 if(centerx+x+j<centerx*2-bufferx){

                  if(centery+y+i<centery*2-buffery){

                    if(centery+y+j>buffery){


                       myArray[centerx+x+i][centery+y+j]=1;



                    }
                  }
                 }
               }
      }

    }


  	var chosen_s=0;
    var chosen_t=0;
    var Longest=0;
    var frompi =100000;
    var Len=0;
  	 for(let s=-sizeChoice;s<=sizeChoice;s++){

      for(let t=-sizeChoice;t<=sizeChoice;t++){
               if (centery+y+t>buffery){

          if(centerx+x+s<centerx*2-bufferx){

            if(centery+y+t<centery*2-buffery){

              if(centerx+x+s>bufferx){
                //if (abs(t)>0||abs(s)>0){
                if(myArray[centerx+x+s][centery+y+t]!=1){

                    if (l2==1){
                    Len=sqrt(sq((past_x +centerx)-(centerx+x+s)) + sq((centery+past_y) - (centery+y+t)));

                   if(Len>=Longest){
                         Longest=Len;
                         chosen_s=s;
                         chosen_t=t;

                     }
                    }else if (l1==1){
                                Len=(abs((past_x +centerx)-(centerx+x+s))+abs((centery+past_y) - (centery+y+t)));
                    if(Len>=Longest){
                         Longest=Len;
                         chosen_s=s;
                         chosen_t=t;

                     }
                    }else if(lm==1){

  										Len = sqrt(sq((past_x +centerx)*alm-(centerx+x+s)*blm) + sq((centery+past_y)*alm - (centery+y+t)*blm))
  										  if(Len>=Longest){
                         Longest=Len;
                         chosen_s=s;
                         chosen_t=t;

                     }
  									//}else if (fp==1){

  									//	var xpast = (past_x +centerx)*alm;
  									//	var ypast = (centery+past_y)*alm;
  									//	var xcurr = (centerx+x+s)*blm;
  									//	var ycurr = (centery+y+t)*blm;

  									//		Len = sqrt(sq(xpast-xcurr) + sq(ypast - ycurr))
  									//	  if(Len>=Longest){
                     //    Longest=Len;
                     //    chosen_s=s;
                      //   chosen_t=t;

  									}

                    else{

                    prev_x = (past_x-x);
                    prev_y = (past_y-y);

                    cand_x = (s);
                    cand_y = (t);

                    prevxcand = prev_x*cand_x + prev_y*cand_y;
                    prevxprev = prev_x*prev_x + prev_y*prev_y;
                    candxcand = cand_x*cand_x + cand_y*cand_y;

                    den = sqrt(prevxprev)*sqrt(candxcand);
                    rat = prevxcand/den;
                    if (rat>1){
                      rat=1;
                    }else if (rat<-1){
                    rat = -1;
                    }
                    Len = acos(rat);



                    //color c1 = img.get(centerx+past_x,centery+past_y);



                     myfrompi = abs(Len-PI);
                     if (myfrompi<=frompi){
                      frompi=myfrompi;
                      chosen_s=s;
                      chosen_t=t;
                     }

                    }


                }else{
                  //println("the point",centerx+x+s,centery+y+t,"was in myArray");
                }


                }}}}
              }
              }

  	past_x=x;
    past_y=y;

    x=x+chosen_s;
    y=y+chosen_t;

      n++;


  		if (n>nlim || ((centerx+x)==oldx)&((centery+y)==oldy)){
  			if (changeweightDuringLine==1){
  			changeweightDuringLine = random([0,1]);
  			}
  			nlines++;

  		//var lqrandom = random(100,900);
  	//if (lqrandom>850){
  		//	lm= int(random(0,1.8));


  		if (addflo==1){
  		  //l1 = int(random(0,1.5));
  			//l2 = int(random(0,1.1));
  			lm=   int(random(0,1.8));
  		}

  	//}


  		if (chanSC==1){
  		if (goSmallerSizeChoice){
  			sccc =random(-1.5,1);
  		}else{
  			sccc =random([-1.5,1]);
  		}
  		//print(sccc);
  		sizeChoice = max(minSizeChoice,min(int(sizeChoice + sccc),maxSizeChoice));
  			//print(sizeChoice);
  				fatnessx = sizeChoice-1;
  				fatnessy = sizeChoice-1;
  				scb = sizeChoice+2;
  			if (chSWbySC==1){
  						mins = 0.1*sizeChoice;
  						maxs = scm*sizeChoice;//#max(1.1,sizeChoice-3);
  			}


  		}

  			ins++;
  			var bb = int(random(-3,3));

  		c1 = c1+random([-(cc),0,cc]);
     	c2 = c2+random([-(cc),0,cc]);
     	c3 = c3+random([-(cc),0,cc]);

  	//var rv3 = random(-2,499);
  	//if (rv3>100){
  	//		c1 = 255-c1;
    // 	c2 = 255-c2;
    // 	c3 = 255-c3;
  	//}

  		//sw = random(1,msw);
  			var drawra =0
  		if (drawra==1){
  			// only draw random

  	  x = int(random(bufferx-centerx,windowWidth-centerx-bufferx));
      y = int(random(buffery-centery,windowHeight-centery-buffery));
  		}else{
  			// try to stay on track. draw random if necc
  		  x = x+int(random(-(sizeChoice+scb),(sizeChoice+scb)));
    		y = y+int(random(-(sizeChoice+scb),(sizeChoice+scb)));
  			if (useaddx==1){
  				x = int(random(bufferx-centerx+addx,windowWidth-centerx-bufferx-addx));
      y = int(random(buffery-centery+addy,windowHeight-centery-buffery-addy));
  			}
  	if (((centerx+x)<bufferx) || ((centerx+x)>(centerx*2-bufferx))||((centery+y)>(centery*2-buffery))||((centery+y)<buffery)){

  	  x = int(random(bufferx-centerx,windowWidth-centerx-bufferx));
      y = int(random(buffery-centery,windowHeight-centery-buffery));
  		if (useaddx==1){
  			 x = int(random(bufferx-centerx+addx,windowWidth-centerx-bufferx-addx));
      y = int(random(buffery-centery+addy,windowHeight-centery-buffery-addy));

  		}
       // if(myArray[centerx+x][centery+y]==1){
  		//		  x = int(random(bufferx-centerx,windowWidth-centerx-bufferx));
      	//		y = int(random(buffery-centery,windowHeight-centery-buffery));

  			//}
          }


  		}
  		past_x = x+random([-1,0,1]);
  		past_y = y+random([-1,0,1]);
  		randomop = random(1,100);
      opmult = random(1,5);
  		z=0;
  		n=0
     	if (changeweightBeforeLine==1){
  		if (smallEvenChangesToLmWeight==1){
  			alm = alm + random([-0.1,0.1]);//random(-1,1.01);
  			blm = blm + random([-0.1,0.1]);//random(-1,1.01);
  		}else if (changeweightbyhistory==1){
  			alm = alm + chosen_s;//random(-1,1.01);
  			blm = blm + chosen_t;//random(-1,1.01);
  		}
  		else{
  			alm = alm + random(-1,1.01);
  			blm = blm + random(-1,1.01);
  		}
  		}

  		}

  		var randomVar = random(-2,5);
      randomop = random(1,100);
      opmult = random(1,5);
  		if (changeweightDuringLine==1){
  		if (smallEvenChangesToLmWeight==1){
  			alm = alm + random([-0.1*mmult,0.1*mmult]);//random(-1,1.01);
  			blm = blm + random([-0.1*mmult,0.1*mmult]);//random(-1,1.01);
  		}else if (changeweightbyhistory==1){
  			alm = alm + chosen_s*mmult;//random(-1,1.01);
  			blm = blm + chosen_t*mmult;//random(-1,1.01);
  		}
  		else{
  			alm = alm + random(-10*mmult,10.01*mmult);
  			blm = blm + random(-10*mmult,10.01*mmult);
  		}
  		}
    //int cutofff = 200;
    if(randomVar>=cutofff){
  		//sw = mins;
  	if (scc==1){
  	sw = min(max(sw + random(-ns,ns),mins),maxs);// +random(-sizeChoice*0.3+0.1,0);
  	}
  		c1 = c1+random([-(cc),0,cc]);
     	c2 = c2+random([-(cc),0,cc]);
     	c3 = c3+random([-(cc),0,cc]);
  		x = x+int(random(-(sizeChoice+scb),(sizeChoice+scb)));
    	y = y+int(random(-(sizeChoice+scb),(sizeChoice+scb)));
  		past_x = x+random([-1,0,1]);
  		past_y = y+random([-1,0,1]);
      randomVar=0;
  		nlim = random(minn,(windowWidth*windowHeight));
      //n=0;
      //divMe = random(500,1000);
      //a = (int)random(900);
      //b= (int)random(1200);
  	//sw = random(0,msw);
  		//if (changeweight==1){
  	//alm = alm + random([-1,1]);
  	//blm = blm + random([-1,1]);
  	//	}

    }

  	var rv2 = random(-2,499);
    if(rv2>=cutofff){

  	if (scc==1){
  	//sw = min(max(sw + random(-ns,ns),mins),maxs);//sw+random(0.01,sizeChoice*0.3)*0.2 +random(-sizeChoice*0.3+0.1,0);
  		sw=min(sw+max(random(-ns,ns),mins),maxs);
  	}
  		c1 = c1+random([-(cc),0,cc]);
     	c2 = c2+random([-(cc),0,cc]);
     	c3 = c3+random([-(cc),0,cc]);
  		nlim = random(minn,(windowWidth*windowHeight));
  		if (chooserandomdist==1){
      //l1 = int(random(0,1.8));
  	  //l2 = int(random(0,1.8));
  	  //lm = int(random(0,1.8));

  		//if (changeweight==1){
  	//alm = alm + random([-1,1]);
  	//blm = blm + random([-1,1]);
  		//}
  		}
  	}


   // if(n>=1000||ndraws>=5000){
  	 if(n>=100){

  	l1 =0; //int(random(0,1.8));
  	l2 = 0;//int(random(0,1.8));
  	lm =0; //int(random(0,1.01));
  		//l1 = 0;
  		//l2=0;
  		 if(nlines<20){
  		lm = int(random(0,1.2));
  		 }
  	}

  	//	if (nlines==1){
  	//sw = 0;
  		//lm=0;
  	//}

  	if (n<20){
  	//sw = 0;//mins;
  		//lm=0;
  	}

  	//var cwrandom = random(100,900);
  	//if (cwrandom>850){
  	//		changeweight = int(random(0,1.5));
  	//}

  	var cwrandom = random(100,900);
  	if (cwrandom>(898 + nlines)){
  		x = x + random([-1,0,1]);
  		  y = y + random([-1,0,1])
  	}

  //	if (nlines==6){print("ok")}
  	if (nlines==10){
  	sizeChoice = max(minSizeChoice,min(int(sizeChoice -2),maxSizeChoice));
  			if (chSWbySC==1){
  						mins = 0.1*sizeChoice;
  						maxs = scm*sizeChoice;//#max(1.1,sizeChoice-3);
  			}
  	}

    sw = min(maxs,max(sw + random([-0.1*sw,0,0.1*sw]),mins));
  		//lm = 1;

  		ndraws++;
   }
  }

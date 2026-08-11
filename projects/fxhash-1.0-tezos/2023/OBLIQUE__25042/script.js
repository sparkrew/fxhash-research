let gridSize = 400; // グリッドのサイズ   　　
//let bb = [];
//let bb_ = [];
//let bb__ = [];
//let bb___ = [];
//let bb____ = [];
//let bb_____ = [];
//let cc = [];
//let dd = [];
//let ee = [];
let bb___g = [];
let bb___g2 = [];
let bb___g3 = [];
let interval = 20;
let counter = 0;
const tileSize = 50;
let count;
let xoff1 = 0.0;
let xoff2 = 10000.0;
let xoff3 = 20000.0;
let xoff = 0.0;
//let ite=23;
let ite = 100;
let iteexe = 0;
dots = [];
maxR = 100;

const num_columns = 500;
const num_rows = 500;

let grid = [];
let grid2 = [];

var noiseScale = 0.001;
var stripeWidth = 4;
let lastX;
let lastY;
let xx;
let yy;
let vecX;
let crand = 0;
let phi = (1 + Math.sqrt(5)) / 2;
let drawrate = 40;
let gmode = 0;
let gmode2 = 0;
let fluxmode = 0;
let bcde;
let bc;
let g3;
let hai;
let crprand = 0;
let crprand2 = 0;
let crprand3 = 0;
let crp = true;
let colorMode;
let colorr = 0;
let colorr2 = 0;
let sublime = false;
let transrand;
let lineg1 =0;
let lineg2 =0;
let lineg3 =0;
let colorMode_;
let flux="///////";
let bkColor=0;
let cloud=false;

let seed = fxrand() * 100000;

function setup() {
  noiseSeed(seed);
  //blendMode(SOFT_LIGHT);
  //colorMode(HSB,fxrand() * (380),  fxrand() * (360),  fxrand() * (360),  fxrand() * (360));
  //	colorMode(HSB, fxrand() * (300,400),200,200,200);
  //  createCanvas(1080, 1920);
  createCanvas(1920, 1080);
  //	createCanvas(1920,1920 );
  pixelDensity(3);


  let iterand = int(fxrand() * (100));
  if (iterand > 15) {
     ite = 35;
     interval = 10;
     flux="///////";
  } else if (iterand > 0) {
      ite = 25;
      interval = 10;
      flux="/////";
  }
  //console.log("ite:" + ite);
  //console.log("interval:" + interval);
  //	noLoop();
  //	background(245,245,230);
  //	background(210);
  //	background(255,255,240);

  //	background(146,7,131);
  //	background(89,87,87);
  //	background(201,202,202);
  //	background(132,149,158);

  bkrand = int(fxrand() * (100));
  if (bkrand > 90) {
    background(245, 245, 255);
    bkColor=0;
  } else if (bkrand > 80) {
    background(245, 245, 230);
    bkColor=1;
  } else if (bkrand > 70) {
    background(245, 245, 255);
    bkColor=2;
  } else if (bkrand > 60) {
    background(231, 232, 232);
    bkColor=3;
  } else if (bkrand > 50) {
    background(240);
    bkColor=4;
	} else if (bkrand > 40) {
		background(224, 221, 209);
    bkColor=5;
	} else if (bkrand > 30) {
		background(221, 224, 209);
    bkColor=6;
	} else if (bkrand > 20) {
		background(209, 221, 224);
    bkColor=7;
	} else if (bkrand > 10) {
	  background(209, 224,221);
    bkColor=8;
	} else if (bkrand > 0) {
		background(240);
    bkColor=4;
	}
	//console.log("bkrand:"+bkrand)
	/**
  background(240);
  background(203, 213, 220);
  background(140, 140, 180);
  background(147, 180, 197);
  background(118, 161, 172)
  background(240);
	background(224, 221, 209);
	*/
	//background(114, 108, 93);
	//background(57, 43, 36);



  for (let i = 0; i < 1020; i++) {
   // bb[i] = new Bb___();
   // bb_[i] = new Bb___1();
   // bb__[i] = new Bb___2();
  //  bb___[i] = new Bb___3();
  //  bb____[i] = new Bb___4();
  //  bb_____[i] = new Bb___5();
    bb___g[i] = new Bb___g();
    bb___g2[i] = new Bb___g2();
    bb___g3[i] = new Bb___g3();
  //  cc[i] = new Cc___();
  //  dd[i] = new Dd___();
  //  ee[i] = new Ee___();
  }
  for (let i = 0; i < 53020; i++) {
    stroke(fxrand() * (255))
    point(fxrand() * (width), fxrand() * (height))
  }



  stroke(55)
  a = 450+fxrand() * (width / 2 - 450);
  b = width / 2 + fxrand() * (width - width / 2);
  c = 450+fxrand() * (height / 2 -450);
  d = height / 2 + fxrand() * (800-height / 2);
  //console.log("a:" + a);
  //console.log("b:" + b);
  //console.log("c:" + c);
  //console.log("d:" + d);
  fill(255);
  //rect(a,c,b-a,d-c)
  //	line(0,0,a,b);
  //	line(0,height,a,d);
//  rand = fxrand() * (1000);
  push();
  //for (let i = 0; i < 10; i++) {
    //	fill(fxrand() * (255),fxrand() * (255),fxrand() * (255));
    // rotate(fxrand() * (1));
    //  rect(fxrand() * (width),fxrand() * (height),fxrand() * (width),fxrand() * (height));
//  }


  rand = fxrand() * (1000);
  /**
	rand = fxrand() * (1000);
  //	if(rand>800){
  stroke(fxrand() * (255), fxrand() * (255), fxrand() * (255), 150)
  for (let o = 0; o < width; o += 4) {
    if (rand > 0) {
      // 	line(0+o,0,a+o,b);
      //	line(0+o,0,0+o,height);
    }
  }
  for (let o = 0; o < 800; o += 15) {
    // line(0+o,c,b+o,d);
  }
  push();
  stroke(fxrand() * (255), fxrand() * (255), fxrand() * (255))
  for (let o = 0; o < 1400; o += 1) {
    if (rand > 400) {
      //	  line(0+o,d+o*2,b+o*4,c+o*2);
    }
  }
  push();
  push();
  stroke(fxrand() * (255), fxrand() * (255), fxrand() * (255))
  for (let o = 0; o < 800; o += 15) {
    if (rand > 900) {
    //   line(0+o+200,c,b+o,d);
    }
  }
  pop();
  let backnoise = false;
  if (backnoise) {
    for (let i = 0; i < bb.length; i++) {
      //	if(count<2){
      //  bb_____[i].draw();
      //	bb[i].draw();
      //}
    }
  }
  */


  drawrand = fxrand() * (10);
  if (drawrand > 8) {
    drawrate = int(30 + fxrand() * (85-30));
  } else {
    drawrate = 30;
  }
  if(ite==25){
    drawrate = 30;
  }
  //console.log("drawrate:" + drawrate);
//  line1 = int(fxrand() * (8));
//  lineC1 = int(fxrand() * (8));
//  lineD1 = int(fxrand() * (8));
//  lineE1 = int(fxrand() * (8));
  mcol = int(fxrand() * (5));
  mcol2 = int(fxrand() * (4));

	/**
  randomLine = fxrand() * (10);

  if (randomLine > 0) {
    line1 = 1;
    lineC1 = 6;
    lineD1 = 3;
    lineE1 = 3;
    lineg1 = 8;
    lineg2 = 9;
    console.log("lineg1" + lineg1);
  }
  console.log("line1:" + line1);
  console.log("lineC1:" + lineC1);
  console.log("lineD1:" + lineD1);
  console.log("lineE1:" + lineE1);
  console.log("mcol:" + mcol);
  console.log("mcol2:" + mcol2);
  crand = int(-100+fxrand() * (100-(-100)));
  drand = int(-100+fxrand() * (100-(-100)));
  erand = int(-10+fxrand() * (10-(-10)));
  */
  //randi = fxrand() * (10);
  counter = 0;
  //console.log("gmode:" + gmode)
  //console.log("gmode2:" + gmode2)　
 // lineg1 = int(fxrand() * (10));
  //lineg2 = int(fxrand() * (10));
	//lineg3 = int(fxrand() * (10));
	//console.log("lineg1:" + lineg1)
  //console.log("lineg2:" + lineg2)　
	//console.log("lineg3:" + lineg3)　

  gmode = int(fxrand() * (3));
  gmode2 = int(fxrand() * (3));

  let gmoderand=(fxrand() *(10));
  if(gmoderand > 6){
    gmode=0;
    gmode2=0;
  }


  fluxmode = int(fxrand() * (2)); //henkou
  let randflux=fxrand() * (10);
  if(randflux>7){
    fluxmode = 1;
  }
	//console.log("fluxmode:"+fluxmode);

	/**
	bcderand=fxrand() * (10);
	if(bcderand>9){
    bcde = true;
	}else{
	  bcde = false;
	}

	bcrand=fxrand() * (10);
	if(bcrand>9){
    bc = true;
	}else{
	  bc = false;
	}
	*/

	g3rand=fxrand() * (10);
	if(g3rand>9.7){
    g3 = true;
		lineg3 = int(fxrand() * (10));
    colorMode_3=lineg3;
	}else{
	  g3 = false;
    colorMode_3="N/A";
	}
	//console.log("g3:"+g3)


	hairand=fxrand() * (10);
	if(hairand>9){
    hai = true;
    mcol="hai";
	}else{
	  hai = false;
	}

  crprand = int(fxrand() * (100));
  crprand2 = int(fxrand() * (10));
  crprand3 = int(fxrand() * (10));

	crplr=int(fxrand() * (10));
	if(crplr>8){
	  crplinerando=0;
	}else if(crplr>5){
	  crplinerando=300;

	}else if(crplr>3){
	  crplinerando=500;
	}else{
	  crplinerando=800;
	}

	//console.log("crprand:"+crprand);
	//console.log("crprand2:"+crprand2);
	//console.log("crprand3:"+crprand3);
	//console.log("crplinerand:"+crplinerando);


  linegrand = int(fxrand() * (100));
  if (linegrand > 80) {
    lineg1 = 0;
    lineg2 = 0;
  } else if (linegrand > 60) {
    lineg1 = 6;
    lineg2 = 0;
  } else if (linegrand > 40) {
    lineg1 = 6;
    lineg2 = 6;
  } else if (linegrand > 30) {
    lineg1 = 1;
    lineg2 = 1;
  } else if (linegrand > 25) {
    lineg1 = 3;
    lineg2 = 3;
  }else{
    lineg1 = 9;
    lineg2 = 9;
  }
  ranc = fxrand() * (10);
  if (ranc > 2) {
    cloud = false;
  } else {
    cloud = true;
  }


  crp = true;
  randdd = int(fxrand() * (100));
	if (randdd > 90) {
		crp = false;
	}else if (randdd > 50) {
 //   lineg1 = 0;
 //   lineg2 = 0;
    crp = false;
    cloud = false;
  }
 // lineg1 = 8;
 // lineg2 = 8;
	subrand=int(fxrand() * (10));
	if(subrand>7){
	  sublime=true;
	}else{
		sublime=false
	}


	colorr = int(fxrand() * (10));
  colorr2 = int(fxrand() * (10));

  if(crp){
   flowFieldColor=colorr+"-"+colorr2;

  }else{
   flowFieldColor="N/A";
  }

  if(cloud){
    cloudColor1=mcol;
  //  cloudColor2=mcol2;
  }else{
    cloudColor1="N/A";
  //  cloudColor2="N/A";
  }


  randclm = fxrand() * (100);
  if (randclm > 50) {
    colorMode = "A";
	//	console.log("colorMode:"+colorMode+"__code:"+lineg1)
    colorMode_1= colorMode+":"+lineg1;
    colorMode_2= colorMode+":"+lineg2;
  } else {
    colorMode = "B";
    colorMode_1= colorMode+":"+colorr+"-"+colorr2;
    colorMode_2= "N/A";
	//	console.log("colorMode:"+colorMode+"__code:"+colorr+"-"+colorr2)
  }

	//console.log("colorMode:"+colorMode+"gline1")


//	transrand=fxrand() * (10);
//	transrand=1;
//	console.log("transrand:"+transrand);

  for (let column = 0; column < num_columns; column++) {
    grid2[column] = [];
    for (let row = 0; row < num_rows; row++) {
      grid2[column][row] = 0;
    }
  }
  pr = 2 + fxrand() * (20 - 2)
  for (let column = 0; column < num_columns; column++) {
    for (let row = 0; row < num_rows; row++) {
      let scaled_x = column * 0.005;
      let scaled_y = row * 0.005;
      let noise_val = noise(scaled_x, scaled_y);
      let angle = map(noise_val, 0.0, 1.0, 0.2, PI * pr);
      grid2[column][row] = angle;
    }
  }
  for (let column = 0; column < num_columns; column++) {
    for (let row = 0; row < num_rows; row++) {
      let radius = 5;
      let x = column * radius * 2;
      let y = row * radius * 2;
      let angle = grid2[column][row];
      if (crp) {
        crpfunc(x, y, radius, angle);
      }
    }
  }
  noisepw = fxrand() * (width);
  noiseph = fxrand() * (height);

  window.$fxhashFeatures = {
    FLUX: flux,
    FLUXMode:fluxmode,
    LineGenMode_1: gmode,
    LineGenMode_2: gmode2,
    BKColor: bkColor,
    DrawRate: 100-drawrate,
    ColorMode_1: colorMode_1,
    ColorMode_2: colorMode_2,
    ColorMode_3: colorMode_3,
    FlowField: crp,
    FlowFieldColor: flowFieldColor,
    Cloud: cloud,
    CloudColor: cloudColor1,
    Sublime: sublime
  }
}



function crpfunc(x, y, radius, angle) {
  let vector = p5.Vector.fromAngle(angle);
  push();
  translate(x, y);
  // stroke(fxrand() * (100,150));
  stroke(170, 202, 222, 55); //mizuiro
  //	stroke(170,202,222,255); //mizuiro
  stroke(252, 102, 100, 255); //mizuiro
  //rand=fxrand() * (100);
  if (crprand > 90) {
    if (vector.x * radius * radius * 5 * radius / 20 < 6) {
      //stroke(102,192,120,255);
      stroke(170, 202, 222, 255);
    } else {
      //stroke(232,232,120,255);
      stroke(232, 232, 230, 255);
      //	stroke(32,32,30,255);
    }
  } else if (crprand > 80) {
    stroke(102, 192, 120, 55); //midori
  } else if (crprand > 70) {
    stroke(170, 202, 222, 255);
  } else if (crprand > 60) {
    if (vector.x * radius * radius * 5 * radius / 20 < 6) {
      //stroke(102,192,120,255);
      stroke(220, 222, 122, 255);
    } else {
      //stroke(232,232,120,255);
      stroke(232, 232, 230, 255);
      //	stroke(32,32,30,255);
    }
  } else if (crprand > 50) {
    stroke(170, 202, 222, 255);
  } else if (crprand > 0)
    if (vector.x * radius * radius * 5 * radius / 20 < 6) {
      //stroke(102,192,120,255);
      //	ra=fxrand() * (10);
      if (crprand2 > 8) {
        stroke(120, 22, 122, 85); //murasaki
			//	stroke(120, 200,222, 155);
      } else if (crprand2 > 7) {
        stroke(220, 242, 122, 155);
      } else if (crprand2 > 5) {
        stroke(150, 242, 122, 155);
      } else if (crprand2 > 4) {
        stroke(240, 52, 122, 155);
      } else if (crprand2 > 3){
        stroke(150, 240, 240, 155);
			} else {
				stroke(152, 180, 240, 155);
      }
    } else {
      //	ra=fxrand() * (10);
      if (crprand3 > 5) {
        //stroke(232,232,120,255);
        stroke(232, 232, 230, 255);
      } else {
        stroke(202, 222, 230, 255);
      }
      //	stroke(32,32,30,255);
    }

  strokeWeight(3);
  //rect(0,0,4);
  //rect(0, 0, 4,10)
  //	line(0, 0,20,4);
  push();
 // shearX((PI / 360) * 45 * sin((x + width * y) / 10));
	rando=fxrand() * (1000);
	if(rando>crplinerando){
    line(0, 0, vector.x * radius * radius * 5 * radius / 20, vector.y * radius * 15 * radius / 30);
	}
  pop();
  //	if(vector.x * radius* radius*5* radius/20 <-33){
  //  rect(0, 0, 4);
  //	}
  //rect(0,0,0+10 * radius,0+10 * radius);
  //arc(0,0,vector.x * radius, vector.y * radius*2,PI, PI + QUARTER_PI)
  pop();
  //  stroke(0);
  //	fill(fxrand() * (255))
  //point(x, y)
  //ellipse(x, y, radius * 2);
}



function draw() {

  // draw__();
  //	blendMode(EXCLUSION)
	translate(-100, -100)
	/**
	if(transrand>5){
		translate(-100, -100)
		tr = 100; //height+
	}else if(transrand>0){
		translate(-100, 0)
		tr = 0; //height+
	}
	*/
		/**
	}else{
		trand=fxrand() * (10);
		if(trand>5){
			translate(-100, -100)
			 tr = 0; //height+
		}else{
			translate(-100, 0)
		   tr = 0; //height+
		}
	}
	*/

  if (counter > ite || counter > 37) { //39
    //	noLoop();
  //  console.log("stop");
    push();
    fill(250, 250, 245)
    stroke(0, 0, 0, 0);
    tr = 100; //height+
    tw = 200; //width+
    rect(0, height + tr, (width + tw) / 18, height + tr);
    rect(0, 0, width + tw, (height) / 60 + tr);
    rect(width + tw - (width + tw) / 18, 0, width, height + tr);
    rect(0, height + tr - (height) / 60, width + tw, height + tr);
    rect(0, 0, (width + tw) / 18, height + tr);
    rect(width + tw - (width + tw) / 18, 0, width, height + tr);
    rect(0, height + 100, (width + tw) / 18, height);
    rect(0, 0, width + tw, (height) / 60 + tr);
    rect(width + tw - (width + tw) / 18, 0, width, height + tr);
    rect(0, height + tr - (height) / 60, width + tw, height + tr);
    rect(0, 0, (width + tw) / 18, height + tr);
    rect(width + tw - (width + tw) / 18, 0, width, height + tr);
    pop();

    img = get(0, 0, width, height);
    //noLoop();
    minCanvasSize = min(windowWidth, windowHeight);

    if (windowWidth < windowHeight) {
      //		if(minCanvasSize<800){ minCanvasSize=800;}
      //		createCanvas(minCanvasSize, minCanvasSize*1.7777);
      //	console.log("A")
      //	console.log(minCanvasSize+"A:"+ minCanvasSize*1.7777)
      //	img.resize(width, height);
    //  console.log("A1");
      set(0, 0, img);
      let canvas = document.getElementById('defaultCanvas0');
      //let canvas = document.getElementsByClassName("p5Canvas")
      canvas.style.width = parseInt(windowWidth)+"px";
      canvas.style.height = parseInt((windowWidth)*0.5625)+"px";
      //console.log("B1:"+canvas.style.width+":"+canvas.style.height);

    } else {

    //  console.log("A2");
    //  console.log(minCanvasSize);
    //  img.resize(800, 1421);
      set(0, 0, img);
      let canvas = document.getElementById('defaultCanvas0');
      //let canvas = document.getElementsByClassName("p5Canvas")
      canvas.style.width = parseInt(windowWidth)+"px";
      canvas.style.height = parseInt((windowWidth)*0.5625)+"px";
    //  console.log("B2:"+canvas.style.width+":"+canvas.style.height);

    }
    noLoop();
  }
  // bcde=true;
  randraw = fxrand() * (10);
  for (let i = 0; i < bb___g.length / drawrate; i++) {
    bc = false;
		/**
    if (bc) {
      bb[i].draw();
      cc[i].draw();
    }
    if (bcde) {
      bb[i].draw();
      cc[i].draw();
      dd[i].draw();
      ee[i].draw();
    }
    if (randraw > 0) {
      //  dd[i].draw();
      //  ee[i].draw();
    }
		*/
    if (randraw > 0) {
      //	bb_[i].draw();
      //	bb__[i].draw();
      //	bb___[i].draw();
      bb___g[i].draw();
      bb___g2[i].draw();
      if (g3) {
        bb___g3[i].draw();
      }
    }
    //	bb____[i].draw();

  }
  counter++;
  if (counter > 0　 && counter < 32) {
    for (let i = 0; i < 1; i++) {
      xxx = fxrand() * (width);
      yyy = fxrand() * (height)
      www = fxrand() * (100);
      hhh = fxrand() * (200);
      if (fluxmode == 0) {
        ose = 15;
      } else {
        ose = 30;
      }
      push();
      stroke(100, 100, 100);
      stroke(0, 0, 0, 0);
      fill(240, 240, 240, 220);
      fill(250, 250, 250, 250);
      stroke(250, 250, 250, 250); //白stripe
      //	quad(xxx,yyy,xxx,yyy+hhh,xxx+www,yyy+hhh+ose*www/100,xxx+www,yyy+ose*www/100)
      ra = 1 + fxrand() * (4 - 1);
      for (let i = 0; i < 5; i++) {
        for (let l = 0; l < www; l += 2) {
          //	line(xxx+l,yyy+ose/100*l,xxx+l,yyy+hhh+ose/100*l)
					if(sublime){
            line(xxx + l, yyy + ose / 100 * l, xxx + l, yyy + hhh / ra + ose / 100 * l);
            line(xxx + l + 30, yyy + ose / 100 * l, xxx + l + 30, yyy + hhh / (3 - ra) + ose / 100 * l);
					}else{
					   line(xxx + l, yyy + ose / 100 * l, xxx + l, yyy + hhh / ra + ose / 100 * l);
					}
        }
      }
      stroke(0, 0, 250, 200);
      line(xxx - 4, yyy, xxx - 4, yyy + hhh);
      //quad(xxx+50,yyy,xxx+50,yyy+hhh,xxx+50+www/3,yyy/4+hhh+ose*www/100,xxx+50+www/3,yyy/4+ose*www/100)
      pop();
    }
    if (colorMode == "A") {
      rand = fxrand() * (100);
      if (rand > 80) {
        push();
        stroke(0, 70, 180, 250)
        fill(250, 250, 250, 250);
        fill(0, 0, 200, 70);　 //青stripe
        colorg(lineg1, 1, 250);
        for (let i = 0; i < 5; i++) {
          // quad(xxx+i,yyy,xxx+i,yyy+hhh,xxx+www+i,yyy+hhh+ose*www/100,xxx+www+i,yyy+ose*www/100)
          for (let j = 0; j < www; j += 2) {
            line(xxx + j, yyy + ose / 100 * j, xxx + j, yyy + hhh + ose / 100 * j)
          }
        }
        pop();
      }
    } else if (colorMode == "B") {
      rand2 = fxrand() * (100);
      if (rand2 > 80) {
        push();
        stroke(0, 70, 180, 250)
        fill(250, 250, 250, 250);
        fill(0, 0, 200, 70);　 //青stripe
        colorgB(colorr, 1, 200)
        for (let i = 0; i < 5; i++) {
          // quad(xxx+i,yyy,xxx+i,yyy+hhh,xxx+www+i,yyy+hhh+ose*www/100,xxx+www+i,yyy+ose*www/100)
          for (let j = 0; j < www; j += 2) {
            line(xxx + j, yyy + ose / 100 * j, xxx + j, yyy + hhh + ose / 100 * j)
          }
        }
        pop();
      }
    }
  }
  if (counter > 0) {
    for (let i = 0; i < 2; i++) {
      xxx = fxrand() * (width);
      yyy = fxrand() * (height)
      www = fxrand() * (100);
      hhh = fxrand() * (200);
      if (fluxmode == 1) {
        ose = 30;
      } else {
        ose = 15;
      }
      push();
      stroke(100, 100, 100);
      stroke(0, 0, 0, 0);
      fill(240, 240, 240, 220);
      fill(220, 220, 220, 230);
      stroke(220, 220, 220, 250); //灰stripe
      //	quad(xxx,yyy,xxx,yyy+hhh,xxx+www,yyy+hhh+ose*www/100,xxx+www,yyy+ose*www/100)
      for (let i = 0; i < 5; i++) {
        for (let k = 0; k < www; k += 2) {
          line(xxx + k, yyy + ose / 100 * k, xxx + k, yyy + hhh + ose / 100 * k)
        }
      }
      raa = fxrand() * (10);
      if (raa > 8) {
        push();
        stroke(120, 120, 120)
        // line(xxx,yyy+ose/100,xxx,yyy+hhh+ose/100)
        //line(xxx+www,yyy+ose/100,xxx+www,yyy+hhh+ose/100)
        pop()
      }
      pop();
    }
  }
  //circle
  push();
  ciw = 100 + fxrand() * (1000-100);
  colorg(lineg1, 1, 250);
  fill(0, 0, 0, 0)
  cr = fxrand() * (100);
  if (cr > 50 && counter < 30) {
    strokeWeight(4)
    arc(fxrand() * (width), fxrand() * (height), ciw, ciw, PI / 6)
    strokeWeight(1)
    circle(fxrand() * (width), fxrand() * (height), ciw)
  }
  pop();
  //	}
  if (counter % interval === 0) {
    for (let i = 0; i < 125; i++) { //52
      let x = parseInt(fxrand() * (width));
      let y = parseInt(fxrand() * (height));
      let w = parseInt(2 + fxrand() * ((100+fxrand() * (312-100))-2));
      let h = parseInt(2 + fxrand() * (112-2));
      let x2 = parseInt(fxrand() * (width));
      let y2 = parseInt(fxrand() * (height));
      let w2 = parseInt(20 + fxrand() * (40-20));
      let h2 = parseInt(20 + fxrand() * (40-20));
      if (x + w > width - 10) {
        w = 0;
        h = 0;
      }
      if (y + h > height - 10) {
        w = 0;
        h = 0;
      }
      if (w !== 0 && h !== 0) {
        let img = get(x, y, w, h);　
        if (fluxmode == 0) {
          for (let j = 0; j < 15; j++) {
            if (rand > 98) {
              set(x + j * 5, y + j, img);
            } else if (rand > 50) {
              set(x + j * 3, y + j, img);
            } else {
              set(x + j * 3, y + j / 2, img);
            }
          }
        } else if (fluxmode == 1) {
          for (let j = 0; j < 15; j++) {
            if (rand > 98) {
              set(x + j * 5, y + j * 2, img);
            } else if (rand > 50) {
              set(x + j * 3, y + j * 2, img);
            } else {
              set(x + j * 3, y + j, img);
            }
          }
        } else if (fluxmode == 2) {
          for (let j = 0; j < 25; j++) {
            let n = noise(x * 0.005, y * 0.005, frameCount * 0.005);
            let r = map(n, 0, 1, 0.1, TWO_PI * 4);
            if (rand > 98) {
              //let r = map(n, 0, 1,0.1, TWO_PI);
              set(x - cos(r) * j * 5, y + sin(r) * j, img);
            } else if (rand > 50) {
              set(x - cos(r) * j * 3, y + sin(r) * j, img);
            } else {
              set(x - cos(r) * j * 3, y + sin(r) * j / 2, img);
            }
          }
        }else{
				  for (let j = 0; j < 15; j++) {
            if (rand > 98) {
              set(x + j * 5, y + j, img);
            } else if (rand > 50) {
              set(x + j * 3, y + j, img);
            } else {
              set(x + j * 3, y + j / 2, img);
            }
          }

				}
      }
    }
  }
  fluxrand = fxrand() * (10);

  /**
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.001) {
    let offset = noise(xoff) * 10;
    let r = 100 + offset;
    let x = r * cos(a);
    let y = r * sin(a);
    let d = dist(x + 500, y + 500, x + 2209 + cos(r), y + 2209 + sin(r));
    let mx = x + cos(r) * d * 0.08 + fxrand() * (0.1 - 0.08);
    let my = y + sin(r) * d * 0.08 + fxrand() * (0.1 - 0.08);
    xoff += 0.01;
    x = lerp(mx, mx + 10, 11);
    y = lerp(my, my + 10, 11);
    // let d = dist(this.x1, this.y1, this.x2, this.y2);
    let n = noise(x * 0.001, y * 0.001, frameCount * 0.005);
    r = map(n, 0, 0.3, 0, TWO_PI);
    mx = x + cos(r) * d * 0.1
    my = y + sin(r) * d * 0.1
    offset = -1 + fxrand() * (1-(-1));
    mx += offset;
    my += offset;
    //  point(mx+noisepw, my+noiseph);
		/**
    rand = fxrand() * (10000);
    if (rand > 9980) {
      for (let u = 0; u < 5; u++) {
        //  vertex(mx,my);
        push();
        stroke(255, 0, 0);
        //	vertex(mx+u,my+fxrand() * (-(u),u));
        pop();
      }
    }
		*/
//  }
//  endShape(CLOSE);



  let yoff = 0.0;
  randd = fxrand() * (10000);
  if (randd > 8050 && cloud) {
    for (let y = 0; y <= height + 400; y += 10) {
      let xoff = 10.0;
      for (let x = 0; x <= width + 200; x += 10) {
        let n = noise(xoff, yoff);
        let c = map(n, 0, 1, 0, 255);
        stroke(c, c, c);
        if (c > 140) {
          push();
          stroke(150, 150, 150, 255);
          stroke(0, 0, 0, 0);
          for (let i = 0; i < 4; i++) {
            let rr = fxrand() * (10);
            if (rr > 9) {
              aa = 45;
            } else {
              aa = 5;
            }
            //	mcol=3;
            if (mcol == 0) {
              if (rr > 9) {
                fill(200, c - y / 10, c - y / 10, aa)
              } else if (rr > 8) {
                fill(200, 200, width / 50, aa)
                // fill(240,240,240,0)
              } else {
                fill(0, 0, 0, 0)
              }
            } else if (mcol == 1) {
              if (rr > 9) {
                fill(200, 180, c - y / 10, aa)
              } else if (rr > 8) {
                fill(200, 200, width / 50, aa)
                // fill(240,240,240,0)
              } else {
                fill(0, 0, 0, 0)
              }
            } else if (mcol == 2) {
              if (rr > 9) {
                fill(c - y / 10, c - y / 10, 200, aa)
              } else if (rr > 8) {
                fill(200, 200, width / 50, aa)
                // fill(240,240,240,0)
              } else {
                fill(0, 0, 0, 0)
              }
            } else if (mcol == 3) {
              if (rr > 9) {
                fill(width / 50, 160, 200, aa)
              } else if (rr > 8) {
                fill(200, 200, width / 50, aa)
                // fill(240,240,240,0)
              } else {
                fill(0, 0, 0, 0)
              }
            } else {
              if (rr > 5) {
                fill(200, 200, 200, aa)
              } else {
                fill(240, 240, 240, 0)
              }
            }
            if (hai) {
              fill(210, 210, 210, 40)
            }
            rect(x, y, 8)
          }
          pop();
        }
        if (c > 90 && c < 130) {
          /**
          push();
          stroke(150, 150, 150, 255);
          stroke(0, 0, 0, 0);
          if (mcol2 == 0) {
            fill(245, 240, 240, 150)
          } else if (mcol2 == 1) {
            fill(240, 240, 240, 150)
          } else if (mcol2 == 2) {
            fill(240, 250, 240, 150)
          } else if (mcol2 == 3) {
            fill(240, 240, 250, 50)
          } else if (mcol2 == 4) {
            fill(240, 240, 240, 150);
          }
          for (let i = 0; i < 40; i++) {
            //rect(x+fxrand() * (-100,100),y+fxrand() * (-100,100),2)
            //rect(x,y,10)
            //rect(x+fxrand() * (-10,10),y+fxrand() * (-10,10),2)
          }
          pop();
          */
        }
        if (c < 80) {
          push();
          stroke(200, 200, 200, 255);
          fill(240, 240, 240, 250);
          let rr = fxrand() * (10);
          if (rr > 5) {
            rect(x, y, 4)
          }
          pop();
        }
        xoff += 0.05;
      }
      yoff += 0.05;
    }
  }
}

function colorg(lineg, t, aa) {
  if (lineg == 0) {
    stroke(0, 50, 120 + fxrand() * (200 - 120), aa);
  } else if (lineg == 1) {
    stroke(244 - t * 200, 165 - t * 200, 50, aa); //orange
  } else if (lineg == 2) {
    stroke(244 - t * 200, 65 - t * 200, 50, aa); // Red
  } else if (lineg == 3) {
    stroke(100, 100, 255 - t * 200, aa) //blue-black
  } else if (lineg == 4) {
    stroke(180, 100, 255 - t * 200, aa) //purple-pink
  } else if (lineg == 5) {
    stroke(100, 180 - t * 200, 255 - t * 200, aa)
  } else if (lineg == 6) {
    stroke(240 - t * 400, 240 - t * 400, 145, aa)
  } else if (lineg == 7) {
    stroke(145 - t * 400, 240 - t * 400, 145, aa)
  } else if (lineg == 8) {
    stroke(202 - t * 400, 202 - t * 400, 202, aa)
  } else if (lineg == 9) {
		stroke(240-t*400,240-t*400,145,255-t*200)
   // stroke(t * 400, t * 400,202 - t * 400, aa)
	//	stroke(0, 0, 0, aa)
	//	console.log("lineg8")
	//	stroke(240-t*400,240-t*400,145,255-t*200)
  } else if (lineg == 10) {
    stroke(38, 143, 188, aa)
  } else if (lineg == 11) {
    stroke(143, 188, 38, aa)
  } else if (lineg == 12) {
    stroke(173, 138, 38, aa)
  } else {
    stroke(38, 143, 188, aa)
  }
  /**
	      else{

					stroke(240-t*400,240-t*400,145,aa)
				}
				*/
}

function colorgB(lineg, t, aa) {
  if (colorr > 9) {
    stroke(161 - t * 400, 24, 38, aa);
  } else if (colorr > 9) {
    stroke(143 - t * 400, 16, 16, aa);
  } else if (colorr > 8) {
    stroke(15, 64, 63, aa);
  } else if (colorr > 7) {
    stroke(32, 64, 48, aa);
  } else if (colorr > 5) {
    stroke(4, 4, 92, aa);
  } else if (colorr > 4) {
    stroke(6, 6, 146, aa);
  } else if (colorr > 3) {
    stroke(189 - t * 400, 147, 2, aa);
  } else {
    stroke(88, 55, 130, aa);
  }
}
class Bb___g {
  constructor() {
    this.x1 = floor(50 + fxrand() * (gridSize - 50)) * (width / gridSize);
    this.y1 = floor(fxrand() * (gridSize)) * (height / gridSize);
    this.x2 = floor(50 + fxrand() * (gridSize-50)) * (width / gridSize);
    this.y2 = floor(fxrand() * (gridSize)) * (height / gridSize);
  }
  draw() {
    stroke(0);
    stroke(120, 0, 50)
    strokeWeight(1);
    for (let t = 0; t <= 1; t += 0.0005) {
      let x = lerp(this.x1, this.x2, t);
      let y = lerp(this.y1, this.y2, t);
      let d = dist(width + t * 4, this.y1 + t * 3, width, this.y2 * 4);
      let n = noise(x * 0.005, y * 0.005, frameCount * 0.005);
      //  let r = map(n+t/2, 0, 1,0.1, TWO_PI*t); //saiyo
      //	let r = map(n, 0, 1,1, TWO_PI*t);
      let r = map(n, 0, 1, 0.1, TWO_PI * t);
      if (gmode == 0) {
        r = map(n + t / 2, 0, 1, 0.1, TWO_PI * t); //saiyo
      } else if (gmode == 1) {
        r = map(n + t / 2, 0, 1, 1, TWO_PI * t);
      } else if (gmode == 2) {
        r = map(n + t / 2, 0.2, 1, 0.1 + t * 10, TWO_PI * t); //saiyo
      } else if (gmode == 3) {
        r = map(n, 0, 1, 0.1, TWO_PI * t);
      }
      let mx = x + cos(r) * d * 0.05;
      let my = y + sin(r) * d * 0.05;
      for (let i = 0; i < 1; i++) {
        //let p = fxrand() * (150,255);
        let p = fxrand() * (15);
        let aa = y / 15;
     //   stroke(p, p, p, fxrand() * (200, 255))
        //	stroke(fxrand() * (120,200),0,50,fxrand() * (255))
      //  stroke(0, 50, fxrand() * (120, 200), fxrand() * (255))
        //lineg1=8;
				push();
        if (colorMode == "A") {
          colorg(lineg1, t, 70);
					//console.log()
        } else if (colorMode == "B") {
          colorgB(colorr, t, 70)
        }

        let ra = fxrand() * (1000)
        let rara = fxrand() * (50000)
        fill(0, 0, 0, 0);

        rand = fxrand() * (100)
        if (rand > 5) {
          point(mx + i * 3 + cos(r), my + i * 3 + sin(r));
        }
				pop();
      }
    }
  }
}
class Bb___g2 {
  constructor() {
    this.x1 = floor(50 + fxrand() * (gridSize - 50)) * (width / gridSize);
    this.y1 = floor(fxrand() * (gridSize)) * (height / gridSize);
    this.x2 = floor(50 + fxrand() * (gridSize - 50)) * (width / gridSize);
    this.y2 = floor(fxrand() * (gridSize)) * (height / gridSize);
  }
  draw() {
    stroke(0);
    stroke(120, 0, 50)
    strokeWeight(1);
    for (let t = 0; t <= 1; t += 0.0005) {
      let x = lerp(this.x1, this.x2, t);
      let y = lerp(this.y1, this.y2, t);
      let d = dist(width + t * 4, this.y1 + t * 3, width, this.y2 * 4);
      let n = noise(x * 0.005, y * 0.005, frameCount * 0.005);
      let r = map(n, 0, 0, 0, TWO_PI * t);
      if (gmode2 == 0) {
        r = map(n + t / 2, 0, 1, 0.1, TWO_PI * t); //saiyo
      } else if (gmode2 == 1) {
        r = map(n + t / 2, 0, 1, 1, TWO_PI * t);
      } else if (gmode2 == 2) {
        r = map(n + t / 2, 0.2, 1, 0.1 + t * 10, TWO_PI * t); //saiyo
      } else if (gmode2 == 3) {
        r = map(n, 0, 1, 0.1, TWO_PI * t);
      }
      let mx = x + cos(r) * d * 0.05;
      let my = y + sin(r) * d * 0.05;
      for (let i = 0; i < 1; i++) {
        let p = fxrand() * (15);
        let aa = y / 20;
      //  stroke(p, p, p, fxrand() * (200, 255))
       // stroke(0, 50, fxrand() * (120, 200), fxrand() * (255))
				push();
        if (colorMode == "A") {
          colorg(lineg2, t, 80);
        } else if (colorMode == "B") {
          colorgB(colorr, t, 80)
        }

        let ra = fxrand() * (1000)
        let rara = fxrand() * (50000)
        fill(0, 0, 0, 0);
        rand = fxrand() * (100)
        if (rand > 5) {
          point(mx + i * 3 + cos(r), my + i * 3 + sin(r));
        } else {
          //	circle(mx, my,1);
        }
				pop();
      }
    }
  }
}
class Bb___g3 {
  constructor() {
    this.x1 = floor(50 + fxrand() * (gridSize - 50)) * (width / gridSize);
    this.y1 = floor(fxrand() * (gridSize)) * (height / gridSize);
    this.x2 = floor(50 + fxrand() * (gridSize - 50)) * (width / gridSize);
    this.y2 = floor(fxrand() * (gridSize)) * (height / gridSize);
  }
  draw() {
    stroke(0);
    stroke(120, 0, 50)
    strokeWeight(1);
    for (let t = 0; t <= 1; t += 0.0005) {
      let x = lerp(this.x1, this.x2, t);
      let y = lerp(this.y1, this.y2, t);
      let d = dist(width + t * 4, this.y1 + t * 3, width, this.y2 * 4);
      let n = noise(x * 0.005, y * 0.005, frameCount * 0.005);
      let r = map(n, 0, 0, 0, TWO_PI * t);
      if (gmode2 == 0) {
        r = map(n + t / 2, 0, 1, 0.1, TWO_PI * t); //saiyo
      } else if (gmode2 == 1) {
        r = map(n + t / 2, 0, 1, 1, TWO_PI * t);
      } else if (gmode2 == 2) {
        r = map(n + t / 2, 0.2, 1, 0.1 + t * 10, TWO_PI * t); //saiyo
      } else if (gmode2 == 3) {
        r = map(n, 0, 1, 0.1, TWO_PI * t);
      }
      let mx = x + cos(r) * d * 0.05;
      let my = y + sin(r) * d * 0.05;
      for (let i = 0; i < 1; i++) {
        let p = fxrand() * (15);
        let aa = y / 20;
      //  stroke(p, p, p, fxrand() * (200, 255))
      //  stroke(0, 50, fxrand() * (120, 200), fxrand() * (255))
        colorg(lineg3, t, aa);
        /**
        if(lineg2==0){
          stroke(0,50,fxrand() * (120,200),aa);
        }else if(lineg2==1){
          stroke(244-t*200,165-t*200,50,aa); //orange
        }else if(lineg2==2){
          stroke(244-t*200,65-t*200,50,aa); // Red
        }else if(lineg2==3){
          stroke(100,100,255-t*200,aa)//blue-black
        }else if(lineg2==4){
          stroke(180,100,255-t*200,aa)//purple-pink
        }else if(lineg2==5){
          stroke(100,180-t*200,255-t*200,aa)
        }else if(lineg2==6){
          stroke(240-t*400,240-t*400,145,aa)
        }else if(lineg2==7){
          stroke(145-t*400,240-t*400,145,aa)
        }else{
          stroke(240-t*400,240-t*400,145,aa)
        }
        */
        //console.log("lineg1:"+lineg1);
        push();
      //  let ra = fxrand() * (1000)
      //  let rara = fxrand() * (50000)
        fill(0, 0, 0, 0);
        pop();
        rand = fxrand() * (100)
        if (rand > 5) {
          point(mx + i * 3 + cos(r), my + i * 3 + sin(r));
        } else {
          //	circle(mx, my,1);
        }
      }
    }
  }
}

/**
class Bb___g4 {
  constructor() {
    this.x1 = floor(fxrand() * (0, gridSize)) * (width / gridSize);
    this.y1 = floor(fxrand() * (0, gridSize)) * (height / gridSize);
    this.x2 = floor(fxrand() * (0, gridSize)) * (width / gridSize);
    this.y2 = floor(fxrand() * (0, gridSize)) * (height / gridSize);
  }
  draw() {
    stroke(0);
    strokeWeight(1);
    for (let t = 0; t <= 1; t += 0.001) {
      let x = lerp(this.x1, this.x2, t);
      let y = lerp(this.y1, this.y2, t);
      let d = dist(this.x1, this.y1 / 2, this.x2, this.y2);
      let n = noise(x * 0.005, y * 0.005, frameCount * 0.05);
      let r = map(n, 0, 1, 1.5, TWO_PI * 5);
      let mx = x + cos(r) * d * 0.1;
      let my = y + sin(r) * d * 0.1;
      let p = fxrand() * (0, 15);
      let aa = my / 15;
      stroke(p, p, p, fxrand() * (200, 255))
      //	stroke(fxrand() * (120,200),0,50,fxrand() * (255))
      stroke(0, 50, fxrand() * (120, 200), fxrand() * (255))
      //lineg1=8;
      colorg(lineg3, t, aa);
      for (let i = 0; i < 1; i++) {
        //let p = fxrand() * (150,255);
        let p = fxrand() * (0, 15);
        //stroke(p,p,p,fxrand() * (200,255))
        rand = fxrand() * (100)
        if (rand > 5) {
          point(mx + i * 3, my + i * 3);
        } else {
          //	circle(mx, my,1);
        }
      }
    }
  }
}
class Bb___ {
  constructor() {
    this.x1 = floor(fxrand() * (50, gridSize)) * (width / gridSize);
    this.y1 = floor(fxrand() * (0, gridSize)) * (height / gridSize);
    this.x2 = floor(fxrand() * (50, gridSize)) * (width / gridSize);
    this.y2 = floor(fxrand() * (0, gridSize)) * (height / gridSize);
  }
  draw() {
    stroke(0);
    stroke(120, 0, 50)
    strokeWeight(1);
    for (let t = 0; t <= 1; t += 0.001) { //henkou
      let x = lerp(this.x1, this.x2, t);
      let y = lerp(this.y1, this.y2, t);
      let d = dist(this.x1, this.y1, this.x2, this.y2);
      let n = noise(x * 0.005, y * 0.005, frameCount * 0.005);
      let r = map(n, 0, 1, 0, TWO_PI);
      let mx = x + cos(r) * d * 0.1;
      let my = y + sin(r) * d * 0.1;
      for (let i = 0; i < 1; i++) {
        //let p = fxrand() * (150,255);
        let p = fxrand() * (0, 15);
        if (line1 == 0) {
          stroke(0, 50, fxrand() * (120, 200), fxrand() * (155));
        } else if (line1 == 1) {
          stroke(244 - t * 200, 165 - t * 200, 50, fxrand() * (155)); //orange
        } else if (line1 == 2) {
          stroke(244 - t * 200, 65 - t * 200, 50, fxrand() * (155)); // Red
        } else if (line1 == 3) {
          stroke(100, 100, 255 - t * 200, fxrand() * (155)) //blue-black
        } else if (line1 == 4) {
          stroke(180, 100, 255 - t * 200, fxrand() * (155)) //purple-pink
        } else if (line1 == 5) {
          stroke(100, 180 - t * 200, 255 - t * 200, fxrand() * (155))
        } else if (line1 == 6) {
          stroke(240 - t * 400, 240 - t * 400, 145, fxrand() * (155))
        } else if (line1 == 7) {
          stroke(145 - t * 400, 240 - t * 400, 145, fxrand() * (155))
        } else {
          stroke(240 - t * 400, 240 - t * 400, 145, fxrand() * (155))
        }
        point(mx + i * 3 + cos(r) * 4, my + i * 3 + sin(r) * 2);
      }
    }
  }
}
class Cc___ {
  constructor() {
    this.x1 = floor(fxrand() * (50, gridSize)) * (width / gridSize);
    this.y1 = floor(fxrand() * (0, gridSize)) * (height / gridSize);
    this.x2 = floor(fxrand() * (50, gridSize)) * (width / gridSize);
    this.y2 = floor(fxrand() * (0, gridSize)) * (height / gridSize);
  }
  draw() {
    stroke(0);
    stroke(120, 0, 50)
    strokeWeight(1);
    for (let t = 0; t <= 1; t += 0.003) { //henkou
      let x = lerp(this.x1, this.x2, t);
      let y = lerp(this.y1, this.y2, t);
      let d = dist(this.x1, this.y1, this.x2, this.y2);
      let n = noise(x * 0.005, y * 0.005, frameCount * 0.005);
      let r = map(n, 0, 1, 0, TWO_PI);
      let mx = x + cos(r) * d * 0.1;
      let my = y + sin(r) * d * 0.1;
      for (let i = 0; i < 1; i++) {
        //let p = fxrand() * (150,255);
        let p = fxrand() * (0, 15);
        if (lineC1 == 0) {
          stroke(0, 50, fxrand() * (120, 200), fxrand() * (155));
        } else if (lineC1 == 1) {
          stroke(244 - t * 200, 165 - t * 200, 50, fxrand() * (155)); //orange
        } else if (lineC1 == 2) {
          stroke(244 - t * 200, 65 - t * 200, 50, fxrand() * (155)); // Red
        } else if (lineC1 == 3) {
          stroke(100, 100, 255 - t * 200, 255 - t * 200) //blue-black
        } else if (lineC1 == 4) {
          stroke(180, 100, 255 - t * 200, 255 - t * 200) //purple-pink
        } else if (lineC1 == 5) {
          stroke(100, 180 - t * 200, 255 - t * 200, 255 - t * 200)
        } else if (lineC1 == 6) {
          stroke(240 - t * 400, 240 - t * 400, 145, 255 - t * 200)
        } else if (lineC1 == 7) {
          stroke(145 - t * 400, 240 - t * 400, 145, 255 - t * 200)
        } else {
          stroke(240 - t * 400, 240 - t * 400, 145, 255 - t * 200)
        }
        rand = fxrand() * (1000)
        if (rand > 5) {
          rect(mx + i * 3 + crand, my + i * 3 + crand, 1);
          push();
          noFill();
          stroke(fxrand() * (200, 250), fxrand() * (200, 250), 100, 220)
          stroke(120, 100, 100, 220)
          let rando = fxrand() * (10000)
          if (rando > 9980) {
            //  fill(120,100,100,fxrand() * (220))
          }
          let ra = fxrand() * (1000)
          let rara = fxrand() * (20000)
          pop();
        } else {}
      }
    }
  }
}
class Dd___ {
  constructor() {
    this.x1 = floor(fxrand() * (50, gridSize)) * (width / gridSize);
    this.y1 = floor(fxrand() * (0, gridSize)) * (height / gridSize);
    this.x2 = floor(fxrand() * (50, gridSize)) * (width / gridSize);
    this.y2 = floor(fxrand() * (0, gridSize)) * (height / gridSize);
  }
  draw() {
    stroke(0);
    stroke(120, 0, 50)
    strokeWeight(1);
    for (let t = 0; t <= 1; t += 0.0005) {
      let x = lerp(this.x1, this.x2, t);
      let y = lerp(this.y1, this.y2, t);
      let d = dist(width + t * 4, this.y1 + t * 3, width, this.y2 * 4);
      let n = noise(x * 0.005, y * 0.005, frameCount * 0.005);
      let r = map(n, 0, 1, 0.1, TWO_PI * t);
      let mx = x + cos(r) * d * 0.1;
      //	let mx = width/2;
      let my = y + sin(r) * d * 0.1;
      for (let i = 0; i < 1; i++) {
        //let p = fxrand() * (150,255);
        let p = fxrand() * (0, 15);
        if (lineD1 == 0) {
          stroke(0, 50, fxrand() * (120, 200), fxrand() * (155));
        } else if (lineD1 == 1) {
          stroke(244 - t * 200, 165 - t * 200, 50, fxrand() * (155)); //orange
        } else if (lineD1 == 2) {
          stroke(244 - t * 200, 65 - t * 200, 50, fxrand() * (155)); // Red
        } else if (lineD1 == 3) {
          stroke(100, 100, 255 - t * 200, 255 - t * 200) //blue-black
        } else if (lineD1 == 4) {
          stroke(180, 100, 255 - t * 200, 255 - t * 200) //purple-pink
        } else if (lineD1 == 5) {
          stroke(100, 180 - t * 200, 255 - t * 200, 255 - t * 200)
        } else if (lineD1 == 6) {
          stroke(240 - t * 400, 240 - t * 400, 145, 255 - t * 200)
        } else if (lineD1 == 7) {
          stroke(145 - t * 400, 240 - t * 400, 145, 255 - t * 200)
        } else {
          stroke(240 - t * 400, 240 - t * 400, 145, 255 - t * 200)
        }
        rand = fxrand() * (1000)
        if (rand > 5) {
          rect(mx + i * 3 + drand, my + i * 3 + drand, 1);
          push();
          noFill();
          stroke(fxrand() * (200, 250), fxrand() * (200, 250), 100, 220)
          stroke(120, 100, 100, 220)
          let rando = fxrand() * (10000)
          if (rando > 9980) {
            //  fill(120,100,100,fxrand() * (220))
          }
          let ra = fxrand() * (1000)
          let rara = fxrand() * (20000)
          pop();
        } else {}
      }
    }
  }
}
class Ee___ {
  constructor() {
    this.x1 = floor(fxrand() * (50, gridSize)) * (width / gridSize);
    this.y1 = floor(fxrand() * (0, gridSize)) * (height / gridSize);
    this.x2 = floor(fxrand() * (50, gridSize)) * (width / gridSize);
    this.y2 = floor(fxrand() * (0, gridSize)) * (height / gridSize);
  }
  draw() {
    stroke(0);
    stroke(120, 0, 50)
    strokeWeight(1);
    for (let t = 0; t <= 1; t += 0.0005) {
      let x = lerp(this.x1, this.x2, t);
      let y = lerp(this.y1, this.y2, t);
      let d = dist(width + t * 4, this.y1 + t * 3, width, this.y2 * 4);
      let n = noise(x * 0.005, y * 0.005, frameCount * 0.005);
      let r = map(n, 0, 1, 0.1, TWO_PI * t);
      let mx = x + cos(r) * d * 0.1;
      //	let mx = width/2;
      let my = y + sin(r) * d * 0.1;
      for (let i = 0; i < 1; i++) {
        //let p = fxrand() * (150,255);
        let p = fxrand() * (0, 15);
        if (lineE1 == 0) {
          stroke(0, 50, fxrand() * (120, 200), fxrand() * (155));
        } else if (lineE1 == 1) {
          stroke(244 - t * 200, 165 - t * 200, 50, fxrand() * (155)); //orange
        } else if (lineE1 == 2) {
          stroke(244 - t * 200, 65 - t * 200, 50, fxrand() * (155)); // Red
        } else if (lineE1 == 3) {
          stroke(100, 100, 255 - t * 200, 255 - t * 200) //blue-black
        } else if (lineE1 == 4) {
          stroke(180, 100, 255 - t * 200, 255 - t * 200) //purple-pink
        } else if (lineE1 == 5) {
          stroke(100, 180 - t * 200, 255 - t * 200, 255 - t * 200)
        } else if (lineE1 == 6) {
          stroke(240 - t * 400, 240 - t * 400, 145, 255 - t * 200)
        } else if (lineE1 == 7) {
          stroke(145 - t * 400, 240 - t * 400, 145, 255 - t * 200)
        } else {
          stroke(240 - t * 400, 240 - t * 400, 145, 255 - t * 200)
        }
        rand = fxrand() * (1000)
        if (rand > 5) {
          rect(mx + i * 3 + erand, my + i * 3 + erand, 1);
          push();
          noFill();
          stroke(fxrand() * (200, 250), fxrand() * (200, 250), 100, 220)
          stroke(120, 100, 100, 220)
          let rando = fxrand() * (10000)
          if (rando > 9980) {
            //  fill(120,100,100,fxrand() * (220))
          }
          pop();
        }
      }
    }
  }
}
class Bb___1 {
  constructor() {
    this.x1 = floor(fxrand() * (0, gridSize)) * (width / gridSize);
    this.y1 = floor(fxrand() * (0, gridSize)) * (height / gridSize);
    this.x2 = floor(fxrand() * (0, gridSize)) * (width / gridSize);
    this.y2 = floor(fxrand() * (0, gridSize)) * (height / gridSize);
  }
  draw() {
    //Line2:
    stroke(0);
    stroke(0, 50, fxrand() * (200, 200), fxrand() * (155))
    stroke(240);
    // stroke(40,200,150);
    strokeWeight(1);
    for (let t = 0; t <= 1; t += 0.003) { //henkou
      let x = lerp(this.x1, this.x2, t);
      let y = lerp(this.y1, this.y2, t);
      let d = dist(this.x1, this.y1, this.x2, this.y2);
      let n = noise(x * 0.005, y * 0.005, frameCount * 0.005);
      let r = map(n, 0, 1, 0, TWO_PI);
      let mx = x + cos(r) * d * 0.1;
      let my = y + sin(r) * d * 0.1;
      point(mx, my);
    }
  }
}
class Bb___2 {
  constructor() {
    this.x1 = floor(fxrand() * (0, gridSize)) * (width / gridSize);
    this.y1 = floor(fxrand() * (0, gridSize)) * (height / gridSize);
    this.x2 = floor(fxrand() * (0, gridSize)) * (width / gridSize);
    this.y2 = floor(fxrand() * (0, gridSize)) * (height / gridSize);
  }
  draw() {
    //Line3
    stroke(240);
    stroke(0, 50, fxrand() * (200, 200), fxrand() * (155))
    stroke(100, 100, 40);
    //	stroke(50,90,40);
    //	stroke(29,32,136);
    //	stroke(159,32,86);
    stroke(0, 50, fxrand() * (120, 200), fxrand() * (155))
    strokeWeight(1);
    for (let t = 0; t <= 1; t += 0.001) {
      let x = lerp(this.x1, this.x2, t);
      let y = lerp(this.y1, this.y2, t);
      let d = dist(this.x1, this.y1, this.x2, this.y2);
      let n = noise(x * 0.005, y * 0.005, frameCount * 0.005);
      let r = map(n, 0, 1, 0, TWO_PI);
      let mx = x + cos(r) * d * 0.1;
      let my = y + sin(r) * d * 0.1;
      point(mx, my);
    }
  }
}
class Bb___3 {
  constructor() {
    this.x1 = floor(fxrand() * (0, gridSize)) * (width / gridSize);
    this.y1 = floor(fxrand() * (0, gridSize)) * (height / gridSize);
    this.x2 = floor(fxrand() * (0, gridSize)) * (width / gridSize);
    this.y2 = floor(fxrand() * (0, gridSize)) * (height / gridSize);
  }
  draw() {
    //Line4
    stroke(220, 220, 220);
    //stroke(0,50,fxrand() * (120,200),fxrand() * (155))
    strokeWeight(1);
    for (let t = 0; t <= 1; t += 0.001) {
      let x = lerp(this.x1, this.x2, t);
      let y = lerp(this.y1, this.y2, t);
      let d = dist(this.x1, this.y1, this.x2, this.y2);
      let n = noise(x * 0.005, y * 0.005, frameCount * 0.005);
      let r = map(n, 0, 1, 0, TWO_PI);
      let mx = x + cos(r) * d * 0.1;
      let my = y + sin(r) * d * 0.1;
      point(mx, my);
    }
  }
}
class Bb___4 {
  constructor() {
    this.x1 = floor(fxrand() * (50, gridSize)) * (width / gridSize);
    this.y1 = floor(fxrand() * (0, gridSize)) * (height / gridSize);
    this.x2 = floor(fxrand() * (50, gridSize)) * (width / gridSize);
    this.y2 = floor(fxrand() * (0, gridSize)) * (height / gridSize);
  }
  draw() {
    stroke(0);
    stroke(120, 0, 50)
    strokeWeight(1);
    for (let t = 0; t <= 1; t += 0.0005) {
      let x = lerp(this.x1, this.x2, t);
      let y = lerp(this.y1, this.y2, t);
      let d = dist(width + t * 4, this.y1 + t * 3, width, this.y2 * 4);
      let n = noise(x * 0.005, y * 0.005, frameCount * 0.005);
      let r = map(n, 0, 1, 0.1, TWO_PI * t);
      let mx = x + cos(r) * d * 0.1;
      //	let mx = width/2;
      let my = y + sin(r) * d * 0.1;
      for (let i = 0; i < 1; i++) {
        //Line4
        //let p = fxrand() * (150,255);
        let p = fxrand() * (0, 15);
        stroke(p, p, p, fxrand() * (200, 255))
        //	stroke(fxrand() * (120,200),0,50,fxrand() * (255))
        stroke(0, 50, fxrand() * (120, 150), fxrand() * (255))
        stroke(255 - t * 200, 100, 255 - t * 200)
        stroke(255)
        rand = fxrand() * (1000)
        if (rand > 5) {
          point(mx + i * 3 + cos(r), my + i * 3 + sin(r));
          stroke(255)
          point(mx + i * 3 + cos(r) * 4, my + i * 3 + sin(r) * 2);
        } else {}
      }
    }
  }
}
class Bb___5 {
  constructor() {
    this.x1 = floor(fxrand() * (0, 40)) * (width / 40);
    this.y1 = floor(fxrand() * (0, 40)) * (height / 40);
    this.x2 = floor(fxrand() * (0, 40)) * (width / 40);
    this.y2 = floor(fxrand() * (0, 40)) * (height / 40);
  }
  draw() {
    push();
    stroke(0);
    strokeWeight(1);
    for (let t = 0; t <= 1; t += 0.001) {
      let x = lerp(this.x1, this.x2, t);
      let y = lerp(this.y1, this.y2, t);
      let d = dist(this.x1, this.y1, this.x2, this.y2);
      let n = noise(x * 0.005, y * 0.005, frameCount * 0.05);
      let r = map(n, 0, 1, 1.5, TWO_PI * 5);
      let mx = x + cos(r) * d * 0.1;
      let my = y + sin(r) * d * 0.1;
      for (let i = 0; i < 1; i++) {
        //let p = fxrand() * (150,255);
        //let p = fxrand() * (150,250);
        let p = fxrand() * (0, 15);
        stroke(p, p, p, fxrand() * (200, 255))
        stroke(40, 50, 120)
        stroke(255)
        rand = fxrand() * (100)
        if (rand > 5) {
          point(mx + i * 3, my + i * 3);
        } else {
          //	circle(mx, my,1);
        }
      }
    }
    pop();
  }
}
*/

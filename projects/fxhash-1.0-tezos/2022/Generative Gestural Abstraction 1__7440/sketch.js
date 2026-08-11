var features;
var shadows = true;
var whiteOutline = false;
var complexity1 = 0;
var complexity2 = 0;
var complexity3 = 0;
var complexity4 = 0;
var complexity5 = 0;
var complexity6 = 0;
var complexity7 = 0;
var closedLoops = 0;
var transparency = 0;


function setup() {
  pseudorandom.fxhash();
  
  features = calculateFeatures();


  
  
  
  console.log("Layers =", features["Layers"]);
  
  console.log("Layer 1 Complexity =", features["Layer 1 Complexity"]);
  //print("complexity1 = " + complexity1);
  console.log("Layer 2 Complexity =", features["Layer 2 Complexity"]);
  //print(complexity2);
  console.log("Layer 3 Complexity =", features["Layer 3 Complexity"]);
  //print(complexity3);
  console.log("Layer 4 Complexity =", features["Layer 4 Complexity"]);
  //print(complexity4);
  console.log("Layer 5 Complexity =", features["Layer 5 Complexity"]);
  //print(complexity5);
  console.log("Layer 6 Complexity =", features["Layer 6 Complexity"]);
  //print(complexity6);
  console.log("Layer 7 Complexity =", features["Layer 7 Complexity"]);
  //print(complexity7);
  console.log("Closed Loops? =", features["ClosedLoops"]);
  console.log("Dark Mode =", features["DarkMode"]);
  console.log("Transparency =", features["Transparency"]);
  
  if(windowWidth < windowHeight){
  createCanvas(windowWidth, windowWidth); 
  }else{
    createCanvas(windowHeight, windowHeight);
  }
  noLoop();
}

function draw() {
  
  // normalize values for a 1000px width canvas
  let x = (width/1000);
  
  background(0);
  noFill();
  strokeWeight(30*x);
  strokeCap(PROJECT);
  
  let a = pseudorandom.integer(0, 255);
  let b = pseudorandom.integer(0, 255);
  let c = pseudorandom.integer(0, 255);
  let d = pseudorandom.integer(0, 255);
  let e = pseudorandom.integer(0, 255);
  let f = pseudorandom.integer(0, 255);
  let g = pseudorandom.integer(0, 255);
  let h = pseudorandom.integer(0, 255);
  let i = pseudorandom.integer(0, 255);
  let j = pseudorandom.integer(0, 255);
  let k = pseudorandom.integer(0, 255);
  let l = pseudorandom.integer(0, 255);  
  let m = pseudorandom.integer(0, 255);
  let n = pseudorandom.integer(0, 255);
  let o = pseudorandom.integer(0, 255);
  let p = pseudorandom.integer(33, 255);
  let q = pseudorandom.integer(33, 255);
  let r = pseudorandom.integer(33, 255); 
  
  complexity1 = pseudorandom.weightedPick(["1", "2", "3", "4"], [30, 20, 20, 30]); print("complexity1 = " + complexity1);
  
  complexity2 = pseudorandom.weightedPick(["1", "2", "3", "4"], [40, 40, 10, 10]); print("complexity2 = " + complexity2);
  
  complexity3 = pseudorandom.weightedPick(["1", "2", "3", "4"], [40, 40, 10, 10]); print("complexity3 = " + complexity3);
  
  complexity4 = pseudorandom.weightedPick(["1", "2", "3", "4"], [30, 40, 20, 10]); print("complexity4 = " + complexity4);
  
  complexity5 = pseudorandom.weightedPick(["1", "2", "3", "4"], [30, 40, 20, 10]); print("complexity5 = " + complexity5);
  
  complexity6 = pseudorandom.weightedPick(["1", "2", "3", "4"], [30, 20, 20, 30]); print("complexity6 = " + complexity6);
  
  complexity7 = pseudorandom.weightedPick(["1", "2", "3", "4"], [30, 20, 20, 30]); print("complexity7 = " + complexity7);


  closedLoops = features.ClosedLoops;
  transparency = features.Transparency;
  
  push();
  
  // define background color using a square the size of the canvas
  // darkMode aka "Dark Mode", has a 1-in-10 probability
  
  if(features.DarkMode == "Yes"){
    fill(0);
  }else{
  fill(p,q,r);
  };
  strokeWeight(0);
  square(0, 0, width);
  
  pop();
  
  
  // START THE SCRIBBLES

  
  let scribbleWeight1 = pseudorandom.integer(60*x, 90*x);
  let scribbleWeight2 = pseudorandom.integer(50*x, (scribbleWeight1-10*x));
  let scribbleWeight3 = pseudorandom.integer(40*x, (scribbleWeight2-10*x));
  let scribbleWeight4 = pseudorandom.integer(30*x, scribbleWeight3);
  let scribbleWeight5 = pseudorandom.integer(20*x, scribbleWeight4);
  let scribbleWeight6 = pseudorandom.integer(15*x, 30*x);
  let scribbleWeight7 = pseudorandom.integer(15*x, 40*x);




// "shape" creates the grouped background shape that casts a single shadow
  
let shape = createGraphics(width, height);
    push();
  
    shape.strokeCap(ROUND);
    shape.noFill();
    shape.stroke(0);
    
    // set drop shadow
    drawingContext.shadowBlur = 0;
  if(features.DarkMode == "Yes"){ 
    //lighter shadow color if "darkMode"
    drawingContext.shadowColor = 'rgba(180,180,255,.3)';
  }else{
    drawingContext.shadowColor = 'rgba(0,0,0,.5)';
  };
    drawingContext.shadowOffsetX = width/40;
    drawingContext.shadowOffsetY = width/40;
     
    shape.translate(width/20, 0);
    if(a > 100){
      //sometimes we rotate the scribble to get more variety
      shape.translate(width/4, -width/10);
      shape.rotate(PI / 7);
    };
  
  // render scribble1 shadow layer
  shape.strokeWeight(scribbleWeight1 + 18*x);
  shape.beginShape();
    curvesScribble1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity1,closedLoops);
  shape.endShape(); 
  
  // render scribble2 shadow layer
  if(features.Layers >= 2){
    shape.strokeWeight(scribbleWeight2 + 18*x);
    shape.beginShape(); 
      curvesScribble2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity2,closedLoops);
    shape.endShape();
  };
  
  // render scribble3 shadow layer
  if(features.Layers >= 3){
    shape.strokeWeight(scribbleWeight3 + 18*x);
    shape.beginShape();
      curvesScribble3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity3,closedLoops);
    shape.endShape(); 
  };
  
  // render scribble4 shadow layer
  if(features.Layers >= 4){
    shape.strokeWeight(scribbleWeight4 + 18*x);
    shape.beginShape();
      curvesScribble4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity4,closedLoops);
    shape.endShape(); 
  };
  
  // render scribble5 shadow layer
  if(features.Layers >= 5){
    shape.strokeWeight(scribbleWeight5 + 18*x);
    shape.beginShape();
      curvesScribble5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity5,closedLoops);
    shape.endShape(); 
  };
  
  // render scribble6 shadow layer
  if(features.Layers >= 6){
    shape.strokeWeight(scribbleWeight6 + 18*x);
    shape.beginShape(); 
      curvesScribble6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity6,closedLoops);
    shape.endShape();  
  };
  
  // render scribble7 shadow layer
  if(features.Layers >= 7){
    shape.strokeWeight(scribbleWeight7 + 18*x);
    shape.beginShape(); 
      curvesScribble7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity7,closedLoops);
    shape.endShape();  
  };
  
  image(shape, 0,0)
  
  pop();
  
  
  
  
  // create the white outline layer of scribbles
  whiteOutline = true;
  
  scribble1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight1,whiteOutline,complexity1,closedLoops);
  if(features.Layers >= 2){
    scribble2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight2,whiteOutline,complexity2,closedLoops,transparency);
  };
  if(features.Layers >= 3){
    scribble3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight3,whiteOutline,complexity3,closedLoops,transparency);
  };
  if(features.Layers >= 4){
    scribble4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight4,whiteOutline,complexity4,closedLoops,transparency);
  };
  if(features.Layers >= 5){
    scribble5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight5,whiteOutline,complexity5,closedLoops,transparency);
  };
  if(features.Layers >= 6 ){
    scribble6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight6,whiteOutline,complexity6,closedLoops,transparency);
  };
  if(features.Layers == 7 ){
    scribble7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight7,whiteOutline,complexity7,closedLoops,transparency);
  };
  
  //create the color layer of scribbles
  whiteOutline = false;
  
  scribble1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight1,whiteOutline,complexity1,closedLoops);
  if(features.Layers >= 2){
  //if(d > 127){
    scribble2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight2,whiteOutline,complexity2,closedLoops,transparency);
  };
  if(features.Layers >= 3 ){
  //if(e > 127){
    scribble3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight3,whiteOutline,complexity3,closedLoops,transparency);
  };
  if(features.Layers >= 4 ){
  //if(f > 127){
    scribble4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight4,whiteOutline,complexity4,closedLoops,transparency);
  };
  if(features.Layers >= 5 ){
  //if(g > 127){
    scribble5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight5,whiteOutline,complexity5,closedLoops,transparency);
  };
  if(features.Layers >= 6 ){
    scribble6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight6,whiteOutline,complexity6,closedLoops,transparency);
  };
  if(features.Layers == 7 ){
    scribble7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight7,whiteOutline,complexity7,closedLoops,transparency);
  };
  
  
  // transparent dark overlay for Dark Mode
  
  if(features.DarkMode == "Yes"){
    push();
    blendMode(MULTIPLY);
    fill('rgba(22,0,22, .2)');
    strokeWeight(0);
    square(0, 0, width);
    pop();
  }
  
  
  
  //grain = 15;
  //addGrain(grain);
  
  // write values to console
  print('a = ' + a);
  print('b = ' + b);
  print('c = ' + c);
  print('d = ' + d);
  print('e = ' + e);
  print('f = ' + f);
  print('g = ' + g);
  print('h = ' + h);
  print('i = ' + i);
  print('j = ' + j);
  print('k = ' + k);
  print('l = ' + l);
  print('m = ' + m);
  print('n = ' + n);
  print('o = ' + o);
  print('p = ' + p);
  print('q = ' + q);
  print('r = ' + r);
  print('darkMode = ' + features.DarkMode);
  print('scribbleWeight1 = ' + scribbleWeight1);
  print('scribbleWeight2 = ' + scribbleWeight2);
  print('scribbleWeight3 = ' + scribbleWeight3);
  print('scribbleWeight4 = ' + scribbleWeight4);
  print('scribbleWeight5 = ' + scribbleWeight5);
  print('scribbleWeight6 = ' + scribbleWeight6);
  print('scribbleWeight7 = ' + scribbleWeight7);
  print('scribbleLayers = ' + features.Layers);
}


function curvesScribble1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity1,closedLoops){ 
        curveVertex((200+g)*x,(100+i)*x);
        curveVertex((440+d)*x,(300+c)*x);
        curveVertex((100+a)*x,(200+b)*x);
        curveVertex((150+c)*x,(460+j)*x);
        curveVertex((200+f)*x,(350+a)*x);
        curveVertex((550+k)*x,(450+l)*x);
        curveVertex((100+g)*x,(300+h)*x);
        curveVertex((400+b)*x,(100+e)*x);
        //closed loop
        if(closedLoops == "Yes" && complexity1 < 2){
          print('closedLoops 1 is working ');
          curveVertex((440+d)*x,(300+c)*x);
          curveVertex((400+b)*x,(100+e)*x);
        };
        if(complexity1 >= 2){
          curveVertex((100+i)*x,(350+f)*x);
          curveVertex((100+b)*x,(150+a)*x);
          curveVertex((300+b)*x,(100+o)*x);
          curveVertex((180+g)*x,(420+f)*x);
          curveVertex((300+i)*x,(150+g)*x);
          curveVertex((150+c)*x,(260+c)*x);
          //closed loop
          if(closedLoops == "Yes" && complexity1 < 3){
            print('closedLoops 1 is working ');
            curveVertex((440+d)*x,(300+c)*x);
            curveVertex((150+c)*x,(260+c)*x);
          };
          if(complexity1 >= 3){
            curveVertex((300+a)*x,(150+a)*x);
            curveVertex((300+b)*x,(150+c)*x);
            curveVertex((100+a)*x,(300+i)*x);
            curveVertex((300+i)*x,(100+j)*x);
            curveVertex((100+h)*x,(150+a)*x); 
            curveVertex((150+c)*x,(180+m)*x);
            curveVertex((400+e)*x,(200+b)*x);
            curveVertex((160+c)*x,(290+j)*x);
            curveVertex((400+a)*x,(100+e)*x);
            curveVertex((100+f)*x,(400+e)*x);
            curveVertex((160+c)*x,(420+a)*x);
            //closed loop
            if(closedLoops == "Yes" && complexity1 < 4){
              print('closedLoops 1 is working ');
              curveVertex((440+d)*x,(500+c)*x);
              curveVertex((160+c)*x,(420+a)*x);
            };    
            if(complexity1 >= 4){
              curveVertex((300+a)*x,(150+a)*x);
              curveVertex((200+b)*x,(400+c)*x);
              curveVertex((120+i)*x,(200+i)*x);
              curveVertex((480+o)*x,(120+b)*x);
              curveVertex((100+f)*x,(150+g)*x);
              curveVertex((150+c)*x,(260+c)*x);
              curveVertex((200+b)*x,(400+e)*x);
              curveVertex((100+b)*x,(100+e)*x);
              curveVertex((260+c)*x,(120+j)*x);
              curveVertex((100+a)*x,(250+a)*x);
              curveVertex((200+b)*x,(350+c)*x);
              curveVertex((350+i)*x,(100+i)*x);
              curveVertex((400+i)*x,(400+i)*x);
              curveVertex((200+h)*x,(350+a)*x);            
              curveVertex((250+c)*x,(130+c)*x);
              curveVertex((100+o)*x,(300+e)*x);
              curveVertex((160+c)*x,(120+j)*x);
              curveVertex((300+f)*x,(150+g)*x);
              curveVertex((150+c)*x,(460+c)*x);
              curveVertex((200+b)*x,(200+e)*x);
              curveVertex((100+b)*x,(100+e)*x);
              curveVertex((260+c)*x,(120+j)*x);
              curveVertex((100+a)*x,(450+a)*x);
              curveVertex((300+b)*x,(350+c)*x);
              curveVertex((420+i)*x,(100+i)*x);
              curveVertex((400+i)*x,(200+i)*x);
              //closed loop
              if(closedLoops == "Yes" && complexity1 < 5){
                print('closedLoops 1 is working ');
                curveVertex((440+d)*x,(500+c)*x);
                curveVertex((400+i)*x,(200+i)*x);
              };
            }
          }
        } 
};

function curvesScribble2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity2,closedLoops){
        curveVertex((200+g)*x,(100+i)*x);
        curveVertex((140+d)*x,(300+c)*x);
        curveVertex((100+a)*x,(300+b)*x);
        curveVertex((190+c)*x,(100+j)*x);
        curveVertex((505+f)*x,(350+i)*x);
        curveVertex((305+a)*x,(350+l)*x);
        curveVertex((100+g)*x,(300+b)*x);
        curveVertex((400+b)*x,(100+e)*x);
        //closed loop
        if(closedLoops == "Yes" && complexity2 < 2){
          print('closedLoops 2 is working ');
          curveVertex((140+d)*x,(300+c)*x);
          curveVertex((400+b)*x,(100+e)*x);
        };
        if(complexity2 >= 2){
          curveVertex((200+a)*x,(450+a)*x);
          curveVertex((105+b)*x,(150+o)*x);
          curveVertex((305+i)*x,(100+i)*x);
          curveVertex((185+f)*x,(420+b)*x);
          curveVertex((305+f)*x,(150+g)*x);
          curveVertex((150+c)*x,(260+c)*x);
          //closed loop
          if(closedLoops == "Yes" && complexity2 < 3){
            print('closedLoops 2 is working ');
            curveVertex((140+d)*x,(300+c)*x);
            curveVertex((150+c)*x,(260+c)*x);
          };
          if(complexity2 >= 3){
            curveVertex((400+b)*x,(100+e)*x);
            curveVertex((100+b)*x,(400+e)*x);
            curveVertex((160+c)*x,(320+j)*x);
            curveVertex((305+a)*x,(150+a)*x);
            curveVertex((305+b)*x,(150+c)*x);
            curveVertex((105+i)*x,(300+i)*x);
            curveVertex((305+i)*x,(100+i)*x);
            curveVertex((105+h)*x,(150+a)*x); 
            curveVertex((150+c)*x,(180+c)*x);
            curveVertex((400+b)*x,(200+e)*x);
            curveVertex((160+c)*x,(290+j)*x);
            //closed loop
            if(closedLoops == "Yes" && complexity2 < 4){
              print('closedLoops 2 is working ');
              curveVertex((140+d)*x,(300+c)*x);
              curveVertex((160+c)*x,(290+j)*x);
            };  
            if(complexity2 >= 4){
              curveVertex((300+a)*x,(150+a)*x);
              curveVertex((200+b)*x,(300+c)*x);
              curveVertex((120+i)*x,(400+i)*x);
              curveVertex((485+f)*x,(120+b)*x);
              curveVertex((505+f)*x,(150+g)*x);
              curveVertex((150+o)*x,(360+c)*x);
              curveVertex((200+b)*x,(400+e)*x);
              curveVertex((100+b)*x,(100+e)*x);
              curveVertex((265+c)*x,(120+j)*x);
              curveVertex((105+a)*x,(400+a)*x);
              curveVertex((305+b)*x,(350+c)*x);
              curveVertex((455+i)*x,(100+i)*x);
              curveVertex((405+i)*x,(400+o)*x);
              curveVertex((205+h)*x,(350+a)*x);            
              curveVertex((255+c)*x,(130+c)*x);
              curveVertex((105+b)*x,(300+e)*x);
              curveVertex((165+c)*x,(120+j)*x);
              curveVertex((505+f)*x,(150+g)*x);
              curveVertex((155+c)*x,(360+c)*x);
              curveVertex((205+b)*x,(200+e)*x);
              curveVertex((105+b)*x,(100+e)*x);
              curveVertex((265+c)*x,(120+j)*x);
              curveVertex((105+a)*x,(250+a)*x);
              curveVertex((300+b)*x,(350+c)*x);
              curveVertex((450+i)*x,(100+i)*x);
              curveVertex((400+i)*x,(200+i)*x);
              //closed loop
              if(closedLoops == "Yes" && complexity2 < 5){
                print('closedLoops 2 is working ');
                curveVertex((140+d)*x,(300+c)*x);
                curveVertex((400+i)*x,(200+i)*x);
              };
            }
          }
        }
};

function curvesScribble3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity3,closedLoops){
        curveVertex((100+g)*x,(100+i)*x);
        curveVertex((140+d)*x,(350+b)*x);
        curveVertex((100+a)*x,(200+i)*x);
        curveVertex((200+a)*x,(400+b)*x);
        curveVertex((150+c)*x,(160+j)*x);
        curveVertex((500+f)*x,(320+a)*x);
        curveVertex((100+a)*x,(300+n)*x);
        curveVertex((200+o)*x,(100+j)*x);
        //closed loop
        if(closedLoops == "Yes" && complexity3 < 2){
          print('closedLoops 3 is working ');
          curveVertex((140+d)*x,(350+b)*x);
          curveVertex((200+o)*x,(100+j)*x);
        };
        if(complexity3 >= 2){
          curveVertex((250+c)*x,(130+c)*x);
          curveVertex((500+f)*x,(150+g)*x);
          curveVertex((150+c)*x,(460+c)*x);
          curveVertex((100+b)*x,(300+e)*x);
          curveVertex((160+c)*x,(120+j)*x);
          curveVertex((200+b)*x,(500+e)*x);
          //closed loop
          if(closedLoops == "Yes" && complexity3 < 3){
            print('closedLoops 3 is working ');
            curveVertex((140+d)*x,(350+b)*x);
            curveVertex((200+b)*x,(500+e)*x);
          };
          if(complexity3 >= 3){
            curveVertex((440+d)*x,(500+c)*x);
            curveVertex((100+a)*x,(300+b)*x);
            curveVertex((150+c)*x,(160+j)*x);
            curveVertex((100+b)*x,(400+e)*x);
            curveVertex((160+c)*x,(420+j)*x);
            curveVertex((300+a)*x,(150+a)*x);
            curveVertex((500+f)*x,(350+a)*x);
            curveVertex((300+k)*x,(350+l)*x);
            curveVertex((400+b)*x,(100+e)*x);
            curveVertex((300+b)*x,(150+c)*x);
            curveVertex((100+i)*x,(300+i)*x);
            //closed loop
            if(closedLoops == "Yes" && complexity3 < 4){
              print('closedLoops 3 is working ');
              curveVertex((140+d)*x,(350+b)*x);
              curveVertex((100+i)*x,(300+i)*x);
            };  
            if(complexity3 >= 4){
              curveVertex((300+a)*x,(150+a)*x);
              curveVertex((200+b)*x,(450+c)*x);
              curveVertex((120+i)*x,(400+i)*x);
              curveVertex((480+f)*x,(120+b)*x);
              curveVertex((500+f)*x,(150+g)*x);
              curveVertex((150+c)*x,(460+c)*x);
              curveVertex((200+b)*x,(500+e)*x);
              curveVertex((100+b)*x,(100+e)*x);
              curveVertex((260+c)*x,(120+j)*x);
              curveVertex((100+a)*x,(450+a)*x);
              curveVertex((300+b)*x,(350+c)*x);
              curveVertex((450+i)*x,(100+i)*x);
              curveVertex((400+i)*x,(400+i)*x);
              curveVertex((200+h)*x,(350+a)*x);            
              curveVertex((250+c)*x,(130+c)*x);
              curveVertex((100+b)*x,(300+e)*x);
              curveVertex((160+c)*x,(120+j)*x);
              curveVertex((500+f)*x,(150+g)*x);
              curveVertex((150+c)*x,(460+c)*x);
              curveVertex((200+b)*x,(500+e)*x);
              curveVertex((100+b)*x,(100+e)*x);
              curveVertex((260+c)*x,(120+j)*x);
              curveVertex((100+a)*x,(450+a)*x);
              curveVertex((300+b)*x,(350+c)*x);
              curveVertex((450+i)*x,(100+i)*x);
              curveVertex((400+i)*x,(400+i)*x);
              curveVertex((200+g)*x,(100+i)*x);
              curveVertex((440+d)*x,(500+c)*x);
              curveVertex((100+a)*x,(300+o)*x);
              curveVertex((150+c)*x,(160+j)*x);
              curveVertex((500+f)*x,(350+a)*x);
              curveVertex((300+k)*x,(350+l)*x);
              curveVertex((100+g)*x,(300+h)*x);
              curveVertex((400+b)*x,(100+e)*x);
              //closed loop
              if(closedLoops == "Yes" && complexity3 < 5){
                print('closedLoops 3 is working ');
                curveVertex((140+d)*x,(350+b)*x);
                curveVertex((400+b)*x,(100+e)*x);
              }; 
            }
          }
        }   
};

function curvesScribble4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity4,closedLoops){
        curveVertex((100+g)*x,(100+i)*x);
        curveVertex((140+d)*x,(350+b)*x);
        curveVertex((300+a)*x,(500+o)*x);
        curveVertex((100+a)*x,(200+b)*x);
        curveVertex((250+c)*x,(160+h)*x);
        curveVertex((100+f)*x,(120+n)*x);
        curveVertex((100+a)*x,(300+a)*x);
        curveVertex((400+a)*x,(100+e)*x);
        //closed loop
        if(closedLoops == "Yes" && complexity4 < 2){
          print('closedLoops 4 is working ');
          curveVertex((140+d)*x,(350+b)*x);
          curveVertex((400+a)*x,(100+e)*x);
        };
        if(complexity4 >= 2){
          curveVertex((250+c)*x,(130+c)*x);
          curveVertex((200+b)*x,(380+e)*x);
          curveVertex((460+c)*x,(190+j)*x);
          curveVertex((100+f)*x,(150+g)*x);
          curveVertex((150+c)*x,(260+c)*x);
          curveVertex((200+b)*x,(500+e)*x);
          //closed loop
          if(closedLoops == "Yes" && complexity4 < 3){
            print('closedLoops 4 is working ');
            curveVertex((140+d)*x,(350+b)*x);
            curveVertex((200+b)*x,(500+e)*x);
          };
          if(complexity4 >= 3){
            curveVertex((440+d)*x,(500+c)*x);
            curveVertex((100+a)*x,(300+b)*x);
            curveVertex((150+c)*x,(360+j)*x);
            curveVertex((100+b)*x,(100+e)*x);
            curveVertex((360+c)*x,(320+j)*x);
            curveVertex((200+a)*x,(150+g)*x);
            curveVertex((150+c)*x,(460+o)*x);
            curveVertex((400+i)*x,(500+e)*x);
            curveVertex((100+m)*x,(100+e)*x);
            curveVertex((260+c)*x,(120+j)*x);
            curveVertex((100+i)*x,(300+i)*x);
            //closed loop
            if(closedLoops == "Yes" && complexity4 < 4){
              print('closedLoops 4 is working ');
              curveVertex((140+d)*x,(350+b)*x);
              curveVertex((100+i)*x,(300+i)*x);
            };  
            if(complexity4 >= 4){
              curveVertex((300+a)*x,(150+a)*x);
              curveVertex((200+b)*x,(450+c)*x);
              curveVertex((100+b)*x,(100+e)*x);
              curveVertex((260+c)*x,(120+j)*x);
              curveVertex((450+i)*x,(100+i)*x);
              curveVertex((500+f)*x,(355+a)*x);
              curveVertex((300+k)*x,(355+l)*x);
              curveVertex((400+b)*x,(105+e)*x);
              curveVertex((100+b)*x,(405+e)*x);
              curveVertex((300+b)*x,(355+c)*x);
              curveVertex((450+i)*x,(100+i)*x);
              curveVertex((400+i)*x,(405+i)*x);
              curveVertex((100+a)*x,(450+a)*x);
              curveVertex((300+b)*x,(350+c)*x);
              curveVertex((200+h)*x,(355+a)*x);            
              curveVertex((250+c)*x,(135+c)*x);
              curveVertex((100+a)*x,(455+a)*x);
              curveVertex((400+i)*x,(400+i)*x);
              curveVertex((200+g)*x,(105+i)*x);
              curveVertex((120+i)*x,(405+i)*x);
              curveVertex((480+f)*x,(125+b)*x);
              curveVertex((160+c)*x,(420+j)*x);
              curveVertex((300+a)*x,(155+a)*x);
              curveVertex((300+b)*x,(155+c)*x);
              curveVertex((500+f)*x,(155+g)*x);
              curveVertex((150+c)*x,(465+c)*x);
              curveVertex((200+b)*x,(505+e)*x);
              curveVertex((140+d)*x,(305+c)*x);
              curveVertex((400+a)*x,(100+b)*x);
              curveVertex((450+c)*x,(460+j)*x);
              curveVertex((200+f)*x,(150+a)*x);
              curveVertex((400+k)*x,(450+l)*x);
              curveVertex((200+g)*x,(400+h)*x);
              curveVertex((200+c)*x,(100+a)*x);
              //closed loop
              if(closedLoops == "Yes" && complexity4 < 5){
                print('closedLoops 4 is working ');
                curveVertex((140+d)*x,(350+b)*x);
                curveVertex((200+c)*x,(100+a)*x);
              }; 
            }
          }
        }   
};

function curvesScribble5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity5){
        curveVertex((100+g)*x,(200+i)*x);
        curveVertex((140+a)*x,(350+c)*x);
        curveVertex((300+a)*x,(200+i)*x);
        curveVertex((250+c)*x,(200+b)*x);
        curveVertex((150+c)*x,(360+j)*x);
        curveVertex((200+f)*x,(120+a)*x);
        curveVertex((300+a)*x,(100+b)*x);
        curveVertex((400+a)*x,(100+e)*x);
        //closed loop
        if(closedLoops == "Yes" && complexity5 < 2){
          print('closedLoops 5 is working ');
          curveVertex((140+a)*x,(350+c)*x);
          curveVertex((400+a)*x,(100+e)*x);
        };
        if(complexity5 >= 2){
          curveVertex((250+c)*x,(130+c)*x);
          curveVertex((100+b)*x,(300+e)*x);
          curveVertex((160+c)*x,(120+j)*x);
          curveVertex((500+f)*x,(150+g)*x);
          curveVertex((150+c)*x,(460+c)*x);
          curveVertex((200+b)*x,(500+e)*x);
          //closed loop
          if(closedLoops == "Yes" && complexity5 < 3){
            print('closedLoops 5 is working ');
            curveVertex((140+a)*x,(350+c)*x);
            curveVertex((200+b)*x,(500+e)*x);
          };
          if(complexity5 >= 3){
            curveVertex((440+d)*x,(500+c)*x);
            curveVertex((100+a)*x,(300+b)*x);
            curveVertex((150+c)*x,(160+j)*x);
            curveVertex((505+f)*x,(350+o)*x);
            curveVertex((305+k)*x,(350+l)*x);
            curveVertex((405+b)*x,(100+e)*x);
            curveVertex((105+b)*x,(400+e)*x);
            curveVertex((165+c)*x,(420+j)*x);
            curveVertex((305+a)*x,(150+a)*x);
            curveVertex((300+b)*x,(150+c)*x);
            curveVertex((100+i)*x,(400+i)*x);
            //closed loop
            if(closedLoops == "Yes" && complexity5 < 4){
              print('closedLoops 5 is working ');
              curveVertex((140+a)*x,(350+c)*x);
              curveVertex((100+i)*x,(400+i)*x);
            };  
            if(complexity5 >= 4){
              curveVertex((300+a)*x,(150+a)*x);
              curveVertex((450+i)*x,(100+i)*x);
              curveVertex((400+i)*x,(400+i)*x);
              curveVertex((200+g)*x,(100+i)*x);
              curveVertex((440+d)*x,(500+c)*x);
              curveVertex((100+a)*x,(300+b)*x);
              curveVertex((480+f)*x,(120+b)*x);
              curveVertex((500+f)*x,(150+g)*x);
              curveVertex((150+c)*x,(460+c)*x);
              curveVertex((200+b)*x,(500+e)*x);
              curveVertex((100+b)*x,(100+e)*x);
              curveVertex((200+b)*x,(450+c)*x);
              curveVertex((120+i)*x,(400+i)*x);
              curveVertex((160+c)*x,(120+j)*x);
              curveVertex((500+f)*x,(150+g)*x);
              curveVertex((150+c)*x,(460+c)*x);
              curveVertex((200+b)*x,(500+e)*x);
              curveVertex((100+b)*x,(100+e)*x);
              curveVertex((260+c)*x,(120+j)*x);
              curveVertex((100+a)*x,(450+a)*x);
              curveVertex((300+b)*x,(350+c)*x);
              curveVertex((260+c)*x,(120+j)*x);
              curveVertex((100+a)*x,(450+a)*x);
              curveVertex((300+b)*x,(350+c)*x);
              curveVertex((450+i)*x,(100+i)*x);
              curveVertex((400+i)*x,(400+i)*x);
              curveVertex((200+h)*x,(350+a)*x);            
              curveVertex((250+c)*x,(130+c)*x);
              curveVertex((100+b)*x,(300+e)*x);
              curveVertex((150+c)*x,(160+j)*x);
              curveVertex((500+f)*x,(350+a)*x);
              curveVertex((300+k)*x,(350+l)*x);
              curveVertex((100+g)*x,(350+h)*x);
              curveVertex((300+b)*x,(100+e)*x);
              //closed loop
              if(closedLoops == "Yes" && complexity5 < 5){
                print('closedLoops 5 is working ');
                curveVertex((140+a)*x,(350+c)*x);
                curveVertex((300+b)*x,(100+e)*x);
              };
            }
          }
        }  
};

function curvesScribble6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity6){
        curveVertex((100+g)*x,(100+i)*x);
        curveVertex((180+d)*x,(350+b)*x);
        curveVertex((100+b)*x,(300+i)*x);
        curveVertex((300+b)*x,(100+b)*x);
        curveVertex((150+d)*x,(260+j)*x);
        curveVertex((500+g)*x,(380+a)*x);
        curveVertex((300+a)*x,(300+b)*x);
        curveVertex((400+a)*x,(500+e)*x);
        //closed loop
        if(closedLoops == "Yes" && complexity6 < 2){
          print('closedLoops 6 is working ');
          curveVertex((180+d)*x,(350+b)*x);
          curveVertex((400+a)*x,(500+e)*x);
        };
        if(complexity6 >= 2){
          curveVertex((250+c)*x,(130+c)*x);
          curveVertex((100+b)*x,(200+e)*x);
          curveVertex((160+c)*x,(120+j)*x);
          curveVertex((100+f)*x,(250+g)*x);
          curveVertex((150+c)*x,(460+c)*x);
          curveVertex((200+b)*x,(500+e)*x);
          //closed loop
          if(closedLoops == "Yes" && complexity6 < 3){
            print('closedLoops 6 is working ');
            curveVertex((180+d)*x,(350+b)*x);
            curveVertex((200+b)*x,(500+e)*x);
          };
          if(complexity6 >= 3){
            curveVertex((440+d)*x,(500+c)*x);
            curveVertex((100+a)*x,(300+b)*x);
            curveVertex((150+c)*x,(160+j)*x);
            curveVertex((100+a)*x,(155+a)*x);
            curveVertex((350+a)*x,(255+o)*x);
            curveVertex((300+l)*x,(155+a)*x);
            curveVertex((100+e)*x,(355+l)*x);
            curveVertex((200+e)*x,(205+e)*x);
            curveVertex((100+b)*x,(400+e)*x);
            curveVertex((220+c)*x,(520+j)*x);
            curveVertex((100+c)*x,(200+i)*x);
            //closed loop
            if(closedLoops == "Yes" && complexity6 < 4){
              print('closedLoops 6 is working ');
              curveVertex((180+d)*x,(350+b)*x);
              curveVertex((100+c)*x,(200+i)*x);
            };  
            if(complexity6 >= 4){
              curveVertex((300+a)*x,(150+a)*x);
              curveVertex((200+b)*x,(450+c)*x);
              curveVertex((125+i)*x,(400+i)*x);
              curveVertex((485+f)*x,(120+b)*x);
              curveVertex((505+f)*x,(150+g)*x);
              curveVertex((405+i)*x,(400+i)*x);
              curveVertex((200+g)*x,(100+i)*x);
              curveVertex((440+d)*x,(505+c)*x);
              curveVertex((200+b)*x,(505+e)*x);
              curveVertex((100+b)*x,(105+e)*x);
              curveVertex((260+c)*x,(125+j)*x);
              curveVertex((100+a)*x,(455+a)*x);
              curveVertex((300+b)*x,(355+c)*x);
              curveVertex((450+i)*x,(100+i)*x);
              curveVertex((400+a)*x,(405+i)*x);
              curveVertex((200+c)*x,(355+a)*x);            
              curveVertex((250+c)*x,(130+c)*x);
              curveVertex((150+g)*x,(460+c)*x);
              curveVertex((500+c)*x,(150+g)*x);
              curveVertex((150+k)*x,(460+c)*x);
              curveVertex((200+b)*x,(500+e)*x);
              curveVertex((100+b)*x,(100+e)*x);
              curveVertex((260+o)*x,(120+j)*x);
              curveVertex((100+a)*x,(450+a)*x);
              curveVertex((300+m)*x,(350+c)*x);
              curveVertex((450+i)*x,(100+i)*x);
              curveVertex((100+n)*x,(300+e)*x);
              curveVertex((160+j)*x,(120+j)*x);
              curveVertex((100+m)*x,(300+b)*x);
              curveVertex((150+l)*x,(160+j)*x);
              curveVertex((500+f)*x,(350+a)*x);
              curveVertex((300+k)*x,(350+l)*x);
              curveVertex((200+g)*x,(300+h)*x);
              curveVertex((100+b)*x,(500+e)*x);
              //closed loop
              if(closedLoops == "Yes" && complexity6 < 5){
                print('closedLoops 6 is working ');
                curveVertex((180+d)*x,(350+b)*x);
                curveVertex((100+b)*x,(500+e)*x);
              };
            }
          }
        }   
};

function curvesScribble7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity7){
        curveVertex((100+a)*x,(100+i)*x);
        curveVertex((140+d)*x,(350+b)*x);
        curveVertex((300+n)*x,(500+i)*x);
        curveVertex((100+c)*x,(200+b)*x);
        curveVertex((250+n)*x,(160+h)*x);
        curveVertex((100+o)*x,(120+c)*x);
        curveVertex((100+a)*x,(300+d)*x);
        curveVertex((400+a)*x,(100+e)*x);
        //closed loop
        if(closedLoops == "Yes" && complexity7 < 2){
          print('closedLoops 7 is working ');
          curveVertex((140+d)*x,(350+b)*x);
          curveVertex((400+a)*x,(100+e)*x);
        };
        if(complexity7 >= 2){
          curveVertex((250+c)*x,(130+c)*x);
          curveVertex((200+d)*x,(380+e)*x);
          curveVertex((460+c)*x,(190+a)*x);
          curveVertex((100+i)*x,(150+g)*x);
          curveVertex((150+c)*x,(260+g)*x);
          curveVertex((200+b)*x,(500+e)*x);
          //closed loop
          if(closedLoops == "Yes" && complexity7 < 3){
            print('closedLoops 7 is working ');
            curveVertex((140+d)*x,(350+b)*x);
            curveVertex((200+b)*x,(500+e)*x);
          };
          if(complexity7 >= 3){
            curveVertex((440+d)*x,(500+c)*x);
            curveVertex((100+c)*x,(300+b)*x);
            curveVertex((150+c)*x,(360+j)*x);
            curveVertex((100+b)*x,(100+e)*x);
            curveVertex((360+c)*x,(320+i)*x);
            curveVertex((200+b)*x,(150+h)*x);
            curveVertex((150+a)*x,(460+m)*x);
            curveVertex((400+i)*x,(500+c)*x);
            curveVertex((100+n)*x,(100+h)*x);
            curveVertex((260+a)*x,(120+g)*x);
            curveVertex((100+i)*x,(300+i)*x);
            //closed loop
            if(closedLoops == "Yes" && complexity7 < 4){
              print('closedLoops 7 is working ');
              curveVertex((140+d)*x,(350+b)*x);
              curveVertex((100+i)*x,(300+i)*x);
            };  
            if(complexity7 >= 4){
              curveVertex((300+a)*x,(150+a)*x);
              curveVertex((200+b)*x,(450+c)*x);
              curveVertex((100+a)*x,(100+e)*x);
              curveVertex((260+b)*x,(120+a)*x);
              curveVertex((100+c)*x,(450+j)*x);
              curveVertex((300+a)*x,(350+k)*x);
              curveVertex((450+b)*x,(100+i)*x);
              curveVertex((400+i)*x,(405+a)*x);
              curveVertex((200+h)*x,(355+c)*x);            
              curveVertex((250+c)*x,(135+a)*x);
              curveVertex((100+a)*x,(455+a)*x);
              curveVertex((500+f)*x,(355+l)*x);
              curveVertex((300+k)*x,(355+e)*x);
              curveVertex((400+b)*x,(105+e)*x);
              curveVertex((100+b)*x,(405+j)*x);
              curveVertex((160+k)*x,(420+a)*x);
              curveVertex((300+k)*x,(155+e)*x);
              curveVertex((300+b)*x,(155+a)*x);
              curveVertex((300+a)*x,(355+i)*x);
              curveVertex((450+i)*x,(100+i)*x);
              curveVertex((400+i)*x,(400+g)*x);
              curveVertex((200+g)*x,(105+i)*x);
              curveVertex((120+i)*x,(405+f)*x);
              curveVertex((480+f)*x,(125+f)*x);
              curveVertex((500+f)*x,(155+c)*x);
              curveVertex((150+c)*x,(465+b)*x);
              curveVertex((200+b)*x,(505+d)*x);
              curveVertex((140+d)*x,(305+a)*x);
              curveVertex((400+a)*x,(100+e)*x);
              curveVertex((450+c)*x,(460+j)*x);
              curveVertex((200+f)*x,(150+a)*x);
              curveVertex((400+k)*x,(450+l)*x);
              curveVertex((200+g)*x,(400+h)*x);
              curveVertex((200+c)*x,(100+a)*x);
              //closed loop
              if(closedLoops == "Yes" && complexity7 < 5){
                print('closedLoops 7 is working ');
                curveVertex((140+d)*x,(350+b)*x);
                curveVertex((200+c)*x,(100+a)*x);
              };
            }
          }
        }   
};

function scribble1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight1,whiteOutline,complexity1,closedLoops) {

  push();
  
  strokeCap(ROUND);

  if(whiteOutline){
    if(features.DarkMode == "Yes"){
      stroke(120,110,130);
      strokeWeight(scribbleWeight1 + 20*x);
    }else{
      stroke(255,255,255);
      strokeWeight(scribbleWeight1 + 20*x);}
  }else{
      stroke(a,b,c);
      strokeWeight(scribbleWeight1);
  };
  
  translate(width/20, 0);
  if(a > 100){
    translate(width/4, -width/10);
    rotate(PI / 7);
  };
  beginShape();
    curvesScribble1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity1,closedLoops);
  endShape();
  
  pop();
  
}



function scribble2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight2,whiteOutline,complexity2,closedLoops,transparency) {
  
  push();
  
  strokeCap(ROUND);

  if(whiteOutline){
    if(features.DarkMode == "Yes"){
      stroke(120,110,130);
      strokeWeight(scribbleWeight2 + 20*x);
    }else{
      stroke(255,255,255);
      strokeWeight(scribbleWeight2 + 20*x);}
  }else{
    if(transparency == "Yes"){
      blendMode(MULTIPLY);  //blendMode(HARD_LIGHT); 
    };
    stroke(d,e,f);
    strokeWeight(scribbleWeight2);
  };
  
  translate(width/20, 0);
  if(a > 100){
    translate(width/4, -width/10);
    rotate(PI / 7);
  };
  beginShape();
    curvesScribble2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity2,closedLoops);
  endShape();
  
  pop();
  
};



function scribble3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight3,whiteOutline,complexity3,closedLoops,transparency) {
  
  push();
  strokeCap(ROUND);

  if(whiteOutline){
    if(features.DarkMode == "Yes"){
      stroke(120,110,130);
      strokeWeight(scribbleWeight3 + 20*x);
    }else{
      stroke(255,255,255);
      strokeWeight(scribbleWeight3 + 20*x);}
  }else{
    if(transparency == "Yes"){
      blendMode(HARD_LIGHT); blendMode(DARKEST); //blendMode(MULTIPLY);
    };
    stroke(g,h,i);
    strokeWeight(scribbleWeight3);
  };
  translate(width/20, 0);
  if(a > 100){
    translate(width/4, -width/10);
    rotate(PI / 7);
  };
  beginShape();
    curvesScribble3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity3,closedLoops);
  endShape();
  
  pop();
};


function scribble4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight4,whiteOutline,complexity4,closedLoops,transparency) {
  
  push();
  
  strokeCap(ROUND);

  if(whiteOutline){
    if(features.DarkMode == "Yes"){
      stroke(120,110,130);
      strokeWeight(scribbleWeight4 + 20*x);
    }else{
      stroke(255,255,255);
      strokeWeight(scribbleWeight4 + 20*x);}
  }else{
    if(transparency == "Yes"){
      blendMode(HARD_LIGHT); blendMode(DARKEST); //blendMode(MULTIPLY);
    };
    stroke(j,k,l);
    strokeWeight(scribbleWeight4);
  };
  translate(width/20, 0);
  if(a > 100){
    translate(width/4, -width/10);
    rotate(PI / 7);
  };
  beginShape();
    curvesScribble4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity4,closedLoops);
  endShape();
  
  pop();
};


function scribble5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight5,whiteOutline,complexity5,closedLoops,transparency) {
  
  push();
  
  strokeCap(ROUND);

  if(whiteOutline){
    if(features.DarkMode == "Yes"){
      stroke(120,110,130);
      strokeWeight(scribbleWeight5 + 20*x);
    }else{
      stroke(255,255,255);
      strokeWeight(scribbleWeight5 + 20*x);}
  }else{
    if(transparency == "Yes"){
      blendMode(HARD_LIGHT); blendMode(DARKEST); //blendMode(MULTIPLY);
    };
    stroke(m,n,o);
    strokeWeight(scribbleWeight5);
  };
  translate(width/20, 0);
  if(a > 100){
    translate(width/4, -width/10);
    rotate(PI / 7);
  };
  beginShape();
    curvesScribble5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity5,closedLoops);
  endShape();
  
  pop();
};


function scribble6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight6,whiteOutline,complexity6,closedLoops,transparency) {
  
  push();
  
  strokeCap(ROUND);

  if(whiteOutline){
    if(features.DarkMode == "Yes"){
      stroke(120,110,130);
      strokeWeight(scribbleWeight6 + 20*x);
    }else{
      stroke(255,255,255);
      strokeWeight(scribbleWeight6 + 20*x);}
  }else{
    if(transparency == "Yes"){
      blendMode(HARD_LIGHT); blendMode(DARKEST); //blendMode(MULTIPLY);
    };
    stroke(i,c,e);
    strokeWeight(scribbleWeight6);
  };
  translate(width/20, 0);
  if(a > 100){
    translate(width/4, -width/10);
    rotate(PI / 7);
  };
  beginShape();
    curvesScribble6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity6,closedLoops);
  endShape();
  
  pop();
};

function scribble7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,scribbleWeight7,whiteOutline,complexity7,closedLoops,transparency) {
  
  push();
  
  strokeCap(ROUND);

  if(whiteOutline){
    if(features.DarkMode == "Yes"){
      stroke(120,110,130);
      strokeWeight(scribbleWeight7 + 20*x);
    }else{
      stroke(255,255,255);
      strokeWeight(scribbleWeight7 + 20*x);}
  }else{
    if(transparency == "Yes"){
      blendMode(HARD_LIGHT); blendMode(DARKEST); //blendMode(MULTIPLY);
    };
    stroke(n,e,o);
    strokeWeight(scribbleWeight7);
  };
  translate(width/20, 0);
  if(a > 100){
    translate(width/4, -width/10);
    rotate(PI / 7);
  };
  beginShape();
    curvesScribble7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,x,complexity7,closedLoops);
  endShape();
  
  pop();
};


function addGrain(grain){
    loadPixels();
    for(let e = 0; e < width * pixelDensity() * (height * pixelDensity()) * 4; e += 4) {
        let i = map(random(), 0, 1, -grain, grain);
        pixels[e]     = pixels[e] + i,
        pixels[e + 1] = pixels[e + 1] + i,
        pixels[e + 2] = pixels[e + 2] + i,
        pixels[e + 3] = pixels[e + 3] + i;
    }
    updatePixels();
}










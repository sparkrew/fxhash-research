var points = [];
const size = 120;
const yScale = 0.8;
const radius = 30;
space = 10;
var totalPerRow;

///////////////////////////

var points1 = [];
const yScale1 = 0.8;
const radius1 = 30;
space1 = 10;
var totalPerRow1;

///////////////////////////

var points2 = [];
const yScale2 = 0.8;
const radius2 = 30;
const space2 = 10;
var totalPerRow2;

/////////////////////////////////////////////////////////////////////////////////

function blockdensity(min, max) {
  return fxrand() * (max - min) + min;
}
function chance(min, max) {
  return fxrand() * (max - min) + min;
}
function chance(min, max) {
  return fxrand() * (max - min) + min;
}
function chance(min, max) {
  return fxrand() * (max - min) + min;
}
function chance(min, max) {
  return fxrand() * (max - min) + min;
}
function chance(min, max) {
  return fxrand() * (max - min) + min;
}
function chance(min, max) {
  return fxrand() * (max - min) + min;
}
function chance(min, max) {
  return fxrand() * (max - min) + min;
}
function chance(min, max) {
  return fxrand() * (max - min) + min;
}
function chance(min, max) {
  return fxrand() * (max - min) + min;
}


/////////////////////////////////////////////////////////////////////////////////

// original code from https://editor.p5js.org/Vamoss/sketches/Qvr_RvKrg
//BY-SA 3.0
function setup() {
  createCanvas(size*10, size*10);
  colorMode(HSB)

  boardheight=1.15
  boardwidth=1.15
  translateX=73
  translateY=79
  boardheightedit=2.12
  boardwidthedit=2.12
  scalefactor=1.75
  blockdensity=100
  bullseyecolor=fxrand() * 100
  bullseyetypechoice=fxrand() * 100
  bullseyefrequencychoice=fxrand() * 100

  if (bullseyefrequencychoice<50){
  bullseyefrequency=80//low
  }
  else if (bullseyefrequencychoice<85){
  bullseyefrequency=50//mid
  }
  else if (bullseyefrequencychoice<100){
  bullseyefrequency=10//high
  }

  colorsbackchoice=fxrand() * 100

  if (colorsbackchoice<75.76){
    backgroundColor="White"
    }
    else if (colorsbackchoice<85.76){
      backgroundColor="Yellow"
    }
    else if (colorsbackchoice<92.76){
      backgroundColor="Red"
    }
    else if (colorsbackchoice<97.26){
      backgroundColor="Beige"
    }
    else if (colorsbackchoice<98.76){
      backgroundColor="Black" 
    }
    else if (colorsbackchoice<99.76){
      backgroundColor="Blue"
    }
    else if (colorsbackchoice<100){
      backgroundColor="Green" 
    }


  if (colorsbackchoice<98.76 && colorsbackchoice>97.26){
  
  if (bullseyetypechoice<18){
    //double
    anchorstyle="Small Bullseye"

    bullseyetype1=20
    bullseyetype2=10
  }
  else if (bullseyetypechoice<47){
    anchorstyle="Large Bullseye"
    //double large center
    bullseyetype1=30
    bullseyetype2=15
  }
  else if (bullseyetypechoice<70){
    anchorstyle="Triple Bullseye"
    //triple
    bullseyetype1=30
    bullseyetype2=10
  }
  else if (bullseyetypechoice<75){
    anchorstyle="Quadruple Bullseye"
    //quad
    bullseyetype1=30
    bullseyetype2=8
  }
  else if (bullseyetypechoice<100){
    anchorstyle="Bullseye"
    //double small center
    bullseyetype1=30
    bullseyetype2=20
  }
    
}
  
  else{
  if (bullseyetypechoice<18){
    anchorstyle="Small Bullseye"
    //double
    bullseyetype1=20
    bullseyetype2=10
  }
  else if (bullseyetypechoice<47){
    anchorstyle="Large Bullseye"
    //double large center
    bullseyetype1=30
    bullseyetype2=15
  }
  else if (bullseyetypechoice<65){
    anchorstyle="Triple Bullseye"
    //triple
    bullseyetype1=30
    bullseyetype2=10
  }
  else if (bullseyetypechoice<70){
    anchorstyle="Quadruple Bullseye"
    //quad
    bullseyetype1=30
    bullseyetype2=8
  }
  else if (bullseyetypechoice<80){
    anchorstyle="Solid"
    //solid
    bullseyetype1=15
    bullseyetype2=1
    bullseyefrequency=70
  }
  else if (bullseyetypechoice<100){
    anchorstyle="Bullseye"
    //double small center
    bullseyetype1=30
    bullseyetype2=20
  }
}
 

  blockcolorchoice=fxrand() * 100
  anchorcolorchoice=fxrand() * 100
  blackorwhite=fxrand() * 100
  blockstrokecolor=null
  nostrokeselect=fxrand() * 100
  colorsplicerate=(Math.floor(fxrand() * 4))
  whitestroketoggle=fxrand() * 100
  BWtoggle=fxrand() * 100
  BWtoggle2=fxrand() * 100
  solidcolortoggle=fxrand() * 100


if(blockcolorchoice<25){
  blockColor="B&W"
  if (colorsbackchoice<98.76 && colorsbackchoice>97.26){
  if (blackorwhite<50){
      colors1=["#2b2b2b","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5"]
      blockstrokecolor="#2b2b2b"
      colors1.splice(0,1)
  
  }
  else if (blackorwhite<100){
      colors1=["#f5f5f5","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b"]
      blockstrokecolor="#f5f5f5"
    if (BWtoggle<50){
      colors1.splice(0,1)

    }
  }
}

  else{
      if (blackorwhite<50){
      colors1=["#f5f5f5","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b"]
        if (whitestroketoggle<50){
      blockstrokecolor="#2b2b2b"
        }
        else {
      blockstrokecolor="#f5f5f5"
        }
        if (BWtoggle<50){
      colors1.splice(0,1)
    }
        else if (BWtoggle<100){      
        if (colorsbackchoice<75.76){
      blockstrokecolor="#2b2b2b"
         }
        if (colorsbackchoice>92.76 && colorsbackchoice<97.26){
      colors1.splice(0,1)
         }
        }
        if (colorsbackchoice>92.76 && colorsbackchoice<97.26 && whitestroketoggle<50 && BWtoggle<50){
      // colors1.splice(0,1)
      colors1.push("#f5f5f5")
         }
}

      else{
      colors1=["#2b2b2b","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5"]
        if (whitestroketoggle<50){
      blockstrokecolor="#2b2b2b"
        }
        else {
      blockstrokecolor="#f5f5f5"
        }
        if (BWtoggle<50){
      colors1.splice(0,1)
        if (colorsbackchoice>92.76 && colorsbackchoice<97.26){
      blockstrokecolor="#2b2b2b"
         }
    }
        else if (BWtoggle<100){
        if (colorsbackchoice>92.76 && colorsbackchoice<97.26){
      blockstrokecolor="#2b2b2b"
         }
        }
        if (colorsbackchoice<75.76){
      blockstrokecolor="#2b2b2b"   
   }
  }
 }

}
  
////////////////////////////////////////////////////////////////
  else if(blockcolorchoice<47){
  blockColor="B&W + Yellow"
  if (blackorwhite<50){
      colors1=["#2b2b2b","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5"]
      blockstrokecolor="#2b2b2b"
      // colors1.splice(0,1)
  if (colorsbackchoice<98.76 && colorsbackchoice>97.26){
      colors1.splice(0,1)
  }
  if (BWtoggle<50){
      colors1.splice(0,1)
    }
  }
  else if (blackorwhite<100){
      colors1=["#f5f5f5","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b"]
      blockstrokecolor="#f5f5f5"
  if (BWtoggle<50){
      colors1.splice(0,1)
    }
  else if (BWtoggle<100){
     if (colorsbackchoice<75.76){
      blockstrokecolor="#2b2b2b"
     }
     if (colorsbackchoice>92.76 && colorsbackchoice<97.26){
      blockstrokecolor="#2b2b2b"
    }
    }
    if (colorsbackchoice>92.76 && colorsbackchoice<97.26){
      colors1.splice(0,1)
    }
  }
    colors1.push("#f2c945","#f2c945","#f2c945","#f2c945","#f2c945") 
    colors1.splice(colors1.length-3,colorsplicerate)
  if (colorsbackchoice<85.76 && colorsbackchoice>75.76){
    blockstrokecolor="#2b2b2b"
  }
  if (colorsbackchoice>92.76 && colorsbackchoice<97.26 && BWtoggle<50 && BWtoggle2<50){
    blockstrokecolor="#2b2b2b"
    colors1.push("#f5f5f5")
  }    
    
    if (solidcolortoggle<10){
      colors1=["#f2c945","#f2c945","#f2c945","#f2c945"]
      blockColor="Yellow"

    }
  }
  
////////////////////////////////////////////////////////////////
  else if(blockcolorchoice<77){
    blockColor="B&W + Red"    
  if (blackorwhite<50){
      colors1=["#2b2b2b","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5"]
      blockstrokecolor="#2b2b2b"
    
     if (colorsbackchoice>98.76 && colorsbackchoice<99.76 && BWtoggle2<50){
      blockstrokecolor="#f5f5f5"
     }    
     if (colorsbackchoice>99.76 && colorsbackchoice<100 && BWtoggle2<50){
      blockstrokecolor="#f5f5f5"
     }   
     if (BWtoggle<50){
      colors1.splice(0,1)
    }
  else if (BWtoggle<100){
     if (colorsbackchoice<75.76){
      blockstrokecolor="#2b2b2b"
     }
     if (colorsbackchoice>97.26 && colorsbackchoice<98.76){
      colors1.splice(0,1)
     }
    }
  }

  else if (blackorwhite<100){
      colors1=["#f5f5f5","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b"]
      blockstrokecolor="#f5f5f5"
    
     if (colorsbackchoice>98.76 && colorsbackchoice<99.76 && BWtoggle2<50){
      blockstrokecolor="#2b2b2b"
     }    
    
     if (BWtoggle<50){
      colors1.splice(0,1)
    }
  else if (BWtoggle<100){
    
      if (colorsbackchoice>92.76 && colorsbackchoice<97.26 && BWtoggle2<50){
    blockstrokecolor="#2b2b2b"
  }  
    
      if (colorsbackchoice<75.76){
    blockstrokecolor="#2b2b2b"     
  }
    }
        if (colorsbackchoice>92.76 && colorsbackchoice<97.26){
      colors1.splice(0,1)
    }
  }

    colors1.push("#c3423f","#c3423f","#c3423f","#c3423f","#c3423f") 
    colors1.splice(colors1.length-4,colorsplicerate)
  if (colorsbackchoice<85.76 && colorsbackchoice>75.76){
    blockstrokecolor="#2b2b2b"
    }
    
  if (colorsbackchoice>92.76 && colorsbackchoice<97.26 && BWtoggle<50 && BWtoggle2<50){
    blockstrokecolor="#2b2b2b"
    colors1.push("#f5f5f5")
  }   
    
    
  if (solidcolortoggle<10){
    colors1=["#c3423f","#c3423f","#c3423f","#c3423f"]
    blockColor="Red"
    }
  }
  
////////////////////////////////////////////////////////////////
  else if(blockcolorchoice<98.5){
    blockColor="B&W + Blue"    

  if (blackorwhite<50){
      colors1=["#2b2b2b","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5"]
      blockstrokecolor="#2b2b2b"
  }
  else if (blackorwhite<100){
      colors1=["#f5f5f5","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b"]
      blockstrokecolor="#f5f5f5"
        if (colorsbackchoice<75.76){
      blockstrokecolor="#2b2b2b"
  }    
  }
    
    
    colors1.push("#4381c1","#4381c1","#4381c1","#4381c1","#4381c1") 
    colors1.splice(colors1.length-4,colorsplicerate) 
    
  if (colorsbackchoice>92.76 && colorsbackchoice<97.26 && blackorwhite<100 && blackorwhite>50){
    if(BWtoggle<50){
      colors1.splice(0,1)
    }
      blockstrokecolor="#2b2b2b"
    if (BWtoggle<50 && BWtoggle2<50){
      blockstrokecolor="#f5f5f5"
      }
  }   
        if (colorsbackchoice<75.76 && BWtoggle2<50){
      colors1.splice(0,1)
  }    
    
    if (solidcolortoggle<10){
      colors1=["#4381c1","#4381c1","#4381c1","#4381c1"]
      blockColor="Blue"    
    }
    
  }
  
////////////////////////////////////////////////////////////////
  else if(blockcolorchoice<99.7){
    blockColor="B&W + Green" 
  if (blackorwhite<50){
      colors1=["#2b2b2b","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5"]
      blockstrokecolor="#2b2b2b"
      if (colorsbackchoice>92.76 && colorsbackchoice<97.26 && BWtoggle2<50){
      colors1.splice(0,1)
      }
      if (colorsbackchoice<75.76){
        blockstrokecolor="#2b2b2b"
        if (BWtoggle2<50){
          colors1.splice(0,1)
          }
    }
  }
  else if (blackorwhite<100){
      colors1=["#f5f5f5","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b"]
      blockstrokecolor="#f5f5f5"
  }
    
    colors1.push("#3b9764","#3b9764","#3b9764","#3b9764","#3b9764") 
    colors1.splice(colors1.length-4,colorsplicerate)

      if (colorsbackchoice>92.76 && colorsbackchoice<97.26 && blackorwhite<100 && blackorwhite>50){
        blockstrokecolor="#2b2b2b"
        
    if(BWtoggle<50){
      colors1.splice(0,1)
      if (BWtoggle<50 && BWtoggle2<50){
        blockstrokecolor="#f5f5f5"
      }
    }
  }   

  if (colorsbackchoice<75.76 && blackorwhite<100 && blackorwhite>50){
    blockstrokecolor="#2b2b2b"
    if (BWtoggle2<50){
      colors1.splice(0,1)
      }
}
    
    if (solidcolortoggle<20){
      colors1=["#3b9764","#3b9764","#3b9764","#3b9764"]
      blockColor="Green" 

    }    
    
  }
  
////////////////////////////////////////////////////////////////////////////  
  
else if(blockcolorchoice<100){
  blockColor="B&W + Red + Yellow + Blue" 
  if (blackorwhite<50){
      colors1=["#2b2b2b","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5"]
      blockstrokecolor="#2b2b2b"
    
  if (colorsbackchoice>97.26 && colorsbackchoice<98.76){
      colors1.splice(0,1)
      }
    
    if (colorsbackchoice>75.76 && colorsbackchoice<85.76){
      if (BWtoggle2<50){
      colors1.splice(0,1)
      }
    }
  }

  else if (blackorwhite<100){
      colors1=["#f5f5f5","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b","#2b2b2b"]
      blockstrokecolor="#f5f5f5"
    
    if (colorsbackchoice>75.76 && colorsbackchoice<85.76){
      if (BWtoggle2<50){
      colors1.splice(0,1)
      }
    }
    
  }
    colors1.push("#4381c1","#c3423f","#f2c945","#4381c1","#c3423f","#f2c945") 
    
  if (colorsbackchoice<85.76 && colorsbackchoice>75.76){
    blockstrokecolor="#2b2b2b"
  }
    
  if (colorsbackchoice<75.76 && blackorwhite<100 && blackorwhite>50 || colorsbackchoice>92.76 && colorsbackchoice<97.26 && blackorwhite<100 && blackorwhite>50){
    if (BWtoggle<50){
      colors1.splice(0,1)
    }
      blockstrokecolor="#2b2b2b"
  }
    
  if (colorsbackchoice<75.76 && blackorwhite<100 && blackorwhite<50 || colorsbackchoice>92.76 && colorsbackchoice<97.26 && blackorwhite<50){
    if (BWtoggle<50){
      colors1.splice(0,1)
    }
  }
    
  if (colorsbackchoice>75.76 && colorsbackchoice>85.76){
      blockstrokecolor="#2b2b2b"
  }

  if (colorsbackchoice>97.26 && colorsbackchoice<98.76 && blackorwhite>50){
      colors1.splice(0,1)
          blockstrokecolor="#f5f5f5"
      }
  if (solidcolortoggle<50){
      colors1=["#4381c1","#c3423f","#f2c945","#4381c1","#c3423f","#f2c945"]
      blockColor="Red + Yellow + Blue" 
    }      
}  
  
////////////////////////////////////////////////////////////////
  if(anchorcolorchoice<35){
    anchorcolor="B&W"
  anchorcolors1=["#2b2b2b","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5"]
  bullseyecolors1=["#2b2b2b","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5","#f5f5f5"]
  }
  else if(anchorcolorchoice<64.75){
    anchorcolor="B&W + Yellow"
  anchorcolors1=["#2b2b2b","#2b2b2b","#f2c945","#f5f5f5","#f5f5f5"]
  bullseyecolors1=["#2b2b2b","#f2c945","#f5f5f5"]
  }
  else if(anchorcolorchoice<84.75){
    anchorcolor="B&W + Red"
  anchorcolors1=["#2b2b2b","#2b2b2b","#c3423f","#f5f5f5","#f5f5f5"]
  bullseyecolors1=["#2b2b2b","#c3423f","#f5f5f5"]
  }
  else if(anchorcolorchoice<94.2){
    anchorcolor="B&W + Blue"
  anchorcolors1=["#2b2b2b","#2b2b2b","#4381c1","#f5f5f5","#f5f5f5"]
  bullseyecolors1=["#2b2b2b","#4381c1","#f5f5f5"]
  }
  else if(anchorcolorchoice<98.6){
    anchorcolor="B&W + Green"
  anchorcolors1=["#2b2b2b","#2b2b2b","#3b9764","#f5f5f5","#f5f5f5"]
  bullseyecolors1=["#2b2b2b","#3b9764","#f5f5f5"]
  }
  else if(anchorcolorchoice<100){
    anchorcolor="B&W + Red + Yellow + Blue"
  anchorcolors1=["#2b2b2b","#2b2b2b","#4381c1","#c3423f","#f2c945","#f5f5f5","#f5f5f5"]
  bullseyecolors1=["#2b2b2b","#4381c1","#c3423f","#f2c945","#f5f5f5"]
  }
  

  if (BWtoggle<50){
    
    if(anchorcolorchoice<35){
      anchorcolors1.splice(0,1)
      bullseyecolors1.splice(0,1)
    }
    else{
      anchorcolors1.splice(0,3)
      bullseyecolors1.splice(0,1)
    }
  }
  
  if (colorsbackchoice<75.76){
  colorsback=["#f5f5f5"]    
  }
  else if (colorsbackchoice<85.76){
  colorsback=["#f2c945"] 
  }
  else if (colorsbackchoice<92.76){
  colorsback=["#c3423f"] 
  }
  else if (colorsbackchoice<97.26){
  colorsback=["#f7f7e6"] 
  }
  else if (colorsbackchoice<98.76){
  colorsback=["#2b2b2b"]  
  }
  else if (colorsbackchoice<99.76){
  colorsback=["#4381c1"] 
  }
  else if (colorsbackchoice<100){
  colorsback=["#3b9764"] 
  }
  
  for (var y = size/2*yScale; y < height/boardheight/boardheightedit; y += size/2*yScale) {
    var x = ((y) % (size*yScale) == 0) ? size : size/2;
    var firstInRow = true;
    for (; x < width/boardwidth/boardwidthedit; x += size) {//1.25,
      var p = createVector(x, y, 1);
      orientationrand=["left", "right"]
      p.orientation = orientationrand[Math.floor(fxrand() * 2)]

      if(firstInRow){
        firstInRow = false;
        p.orientation = "right";
      }
      points.push(p);
    }
    points[points.length-1].orientation = "left";
    if(!totalPerRow) totalPerRow = points.length;
  }
  
///////////////////////////////////////////////////////////////////////////
  
    for (var y1 = size/2*yScale1; y1 < height/boardheight/boardheightedit; y1 += size/2*yScale1) {
    var x1 = ((y1) % (size*yScale1) == 0) ? size : size/2;
    var firstInRow1 = true;
    for (; x1 < width/boardwidth/boardwidthedit; x1 += size) {//1.25,
      var p1 = createVector(x1, y1, 1);
      orientationrand1=["left", "right"]
      p1.orientation = orientationrand1[Math.floor(fxrand() * 2)]
      if(firstInRow1){
        firstInRow1 = false;
        p1.orientation = "right";
      }
      points1.push(p1);
    }
    points1[points1.length-1].orientation = "left";
    if(!totalPerRow1) totalPerRow1 = points1.length;
  }

  
  noLoop();
print (anchorcolor)
  window.$fxhashFeatures={
    "Background Color": getbackgroundcolor(backgroundColor),
    "Block Color Palette": getblockcolor(blockColor),
    "Anchor Style": getanchorstyle(anchorstyle),
    "Anchor Color Palette": getanchorcolor(anchorcolor),
  }
}


function getbackgroundcolor(backgroundColor) {
  return backgroundColor
}
function getblockcolor(blockColor) {
  return blockColor
}
function getanchorstyle(anchorstyle) {
  return anchorstyle
}
function getanchorcolor(anchorcolor) {
  return anchorcolor
}



function draw() {
  background(colorsback[Math.floor(fxrand() * colorsback.length)]);
  scale(scalefactor)
  translate(translateX,translateY)
  stroke(blockstrokecolor)
  strokeWeight(3)
  for(var t = 0; t < blockdensity; t++){
    var p = points[Math.floor(fxrand() * points.length)]
    var i = points.indexOf(p);
    if(
      p.z == 1 &&
      i<points.length-totalPerRow
    ){
      p.z = 0;
      var quad = [];
      if(p.orientation == "right" && points[i+totalPerRow].z == 1) {
        points[i+totalPerRow].z = 0;
        quad.push(createVector(p.x-size/2+space, p.y));
        quad.push(createVector(p.x, p.y-size/2*yScale+space));
        quad.push(createVector(p.x+size-space, p.y+size/2*yScale));
        quad.push(createVector(p.x+size/2, p.y+size*yScale-space));
      }
      else if(p.orientation == "left" && points[i+totalPerRow-1].z == 1){
        points[i+totalPerRow-1].z = 0;
        quad.push(createVector(p.x-size+space, p.y+size/2*yScale));
        quad.push(createVector(p.x, p.y-size/2*yScale+space));
        quad.push(createVector(p.x+size/2-space, p.y));
        quad.push(createVector(p.x-size/2, p.y+size*yScale-space));    
      }

      
      fill(colors1[Math.floor(fxrand() * colors1.length)]);
      drawRoundedPolygon(quad, radius);
    }
  }
  
  //////////////////////////////////////////////////////////////////////
  
    for(var t = 0; t < blockdensity; t++){
    var p1 = points1[Math.floor(fxrand() * points1.length)]
    var i1 = points1.indexOf(p1);
    if(
      p1.z == 1 &&
      i1<points1.length-totalPerRow1 
    ){
      p1.z = 0;
      var quad1 = [];
      if(p1.orientation == "right" && points1[i1+totalPerRow1].z == 1) {
        points1[i1+totalPerRow1].z = 0;
        quad1.push(createVector(p1.x-size/2+space1, p1.y));
        quad1.push(createVector(p1.x, p1.y-size/2*yScale1+space1));
        quad1.push(createVector(p1.x+size-space1, p1.y+size/2*yScale1));
        quad1.push(createVector(p1.x+size/2, p1.y+size*yScale1-space1));
      }
      else if(p1.orientation == "left" && points1[i1+totalPerRow1-1].z == 1){
        points1[i1+totalPerRow1-1].z = 0;
        quad1.push(createVector(p1.x-size+space1, p1.y+size/2*yScale1));
        quad1.push(createVector(p1.x, p1.y-size/2*yScale1+space1));
        quad1.push(createVector(p1.x+size/2-space1, p1.y));
        quad1.push(createVector(p1.x-size/2, p1.y+size*yScale1-space1));    
      }
      fill(colors1[Math.floor(fxrand() * colors1.length)]);
      drawRoundedPolygon(quad1, radius1);
    }
  }
  
  points.forEach((p, i) => {

    push()
    strokeWeight(3)
    stroke("#2b2b2b")
    bullseye= fxrand() * (100);
    push()
    fill(bullseyecolors1[Math.floor(fxrand() * bullseyecolors1.length)]);

    if (bullseye<bullseyefrequency)
    ellipse(p.x, p.y, 15, 15);
    
    else{
    for (let i = bullseyetype1; i > 0; i -= bullseyetype2) {
    if (i % 30 == 0) {
      fill("#f5f5f5");
    } 
      fill(bullseyecolors1[Math.floor(fxrand() * bullseyecolors1.length)]);
      ellipse(p.x, p.y, i, i);
  }
}
    pop()
  pop()
  });
}

//original code from https://openprocessing.org/sketch/679507/
function convertToClosed(points, radius) {
  // this value *actually* depends on the angle between the lines.
  // a 180 degree angle means f can be 1, a 10 degree angle needs
  // an f closer to 4!
  const f = 2.5;
  var closed = [];
  var p1,p2,p3,p2l,p2l_guide,p2r,p2r_guide,pc;
  var dx1, dy1, dx2, dy2, m;
  
  
  for(var i=0, last=points.length; i<last; i++) { // >
    p1 = points[i];
    p2 = points[(i+1)%last];
    p3 = points[(i+2)%last];

    dx1 = p2.x - p1.x;
    dy1 = p2.y - p1.y;
    m = sqrt(dx1*dx1+dy1*dy1);
    p2l = createVector(p2.x-radius*dx1/m, p2.y-radius*dy1/m);

    dx2 = p3.x-p2.x;
    dy2 = p3.y-p2.y;
    m = sqrt(dx2*dx2+dy2*dy2);
    p2r = createVector(p2.x+radius*dx2/m, p2.y+radius*dy2/m);

    closed.push(p2l);
    closed.push(p2);
    closed.push(p2r);
  }
  return closed;
}


//////////////////////////////////////////////////////////////////////////////

function convertToClosed(points1, radius1) {
  // this value *actually* depends on the angle between the lines.
  // a 180 degree angle means f can be 1, a 10 degree angle needs
  // an f closer to 4!
  const f = 2.5;
  var closed = [];
  var p1,p2,p3,p2l,p2l_guide,p2r,p2r_guide,pc;
  var dx1, dy1, dx2, dy2, m;
  
  
  for(var i=0, last=points1.length; i<last; i++) { // >
    p1 = points1[i];
    p2 = points1[(i+1)%last];
    p3 = points1[(i+2)%last];

    dx1 = p2.x - p1.x;
    dy1 = p2.y - p1.y;
    m = sqrt(dx1*dx1+dy1*dy1);
    p2l = createVector(p2.x-radius1*dx1/m, p2.y-radius1*dy1/m);

    dx2 = p3.x-p2.x;
    dy2 = p3.y-p2.y;
    m = sqrt(dx2*dx2+dy2*dy2);
    p2r = createVector(p2.x+radius1*dx2/m, p2.y+radius1*dy2/m);

    closed.push(p2l);
    closed.push(p2);
    closed.push(p2r);
  }
  return closed;
}



function roundIsosceles(p1, p2, p3, t) {
  var mt = 1-t,
        c1x = (mt*p1.x + t*p2.x),
        c1y = (mt*p1.y + t*p2.y),
        c2x = (mt*p3.x + t*p2.x),  
        c2y = (mt*p3.y + t*p2.y);
  return [c1x, c1y, c2x, c2y];
}

function drawRoundedPolygon(points1, radius1) {
  var closed = convertToClosed(points1, radius1);
  var p1,p2,p3;
  beginShape();
  for(var i=0, last=closed.length; i<last; i+=3) { //>
    p1 = closed[i];
    p2 = closed[i+1];
    p3 = closed[i+2];
    // rounded isosceles triangle connector values:
    var c = roundIsosceles(p1, p2, p3, 1);
    // tell Processing that we have points to add to our shape:
    vertex(p1.x,p1.y);
    bezierVertex(c[0], c[1], c[2], c[3], p3.x, p3.y);
  }
  endShape(CLOSE);
}
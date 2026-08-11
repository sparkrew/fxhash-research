var n = rnd(0, 100);
var f = rnd(0, 100);
var ff = rnd(0, 100);
// var d;

var a = [["q"],
     ["w"],
     ["e"],
     ["r"],
     ["t"],
     ["y"],
     ["u"],
     ["i"],
     ["o"],
     ["p"],
     ["a"],
     ["s"],
     ["d"],
     ["f"],
     ["g"],
     ["h"],
     ["j"],
     ["k"],
     ["l"],
     ["z"],
     ["x"],
     ["c"],
     ["v"],
     ["b"],
     ["n"],
     ["m"]
 ];
     
     
     





function setup() {
   createCanvas(600, 600);

  noiseSeed(fxrand() *9999);
  randomSeed(fxrand() *9999);
//   if (n < 60) {
//     if (f < 20) {
//       var d = "#FFF5E4";
//       window.$fxhashFeatures = {
//         "Day color": "The first morning sky",
//       };
//     }
//     if ((f > 20) & (f < 40)) {
//       var d = "#FDFDBD";
//       window.$fxhashFeatures = {
//         "Day color": "The sun-set sky",
//       };
//     }
//     if ((f > 40) & (f < 60)) {
//       var d = "#FFEEEE";
//       window.$fxhashFeatures = {
//         "Day color": "The sun-rise sky",
//       };
//     }
//     if ((f > 60) & (f < 80)) {
//       var d = "#FFFDDE";
//       window.$fxhashFeatures = {
//         "Day color": "clear-sky",
//       };
//     }
//     if ((f > 80) & (f < 100)) {
//       var d = "#D6CDA4";
//       window.$fxhashFeatures = {
//         "Day color": "smoky sky",
//       };
//     }

//     background("d");
//   } else {
//     background(0);
//   }
  
  
 

}

function draw() {

if(n<60){
   var d = (rnd(230,255),rnd(230,255),rnd(230,255))
}
  else{
    var d =(0)
  }
  
  background(d)
  
  
   if (n < 60) {
    if (ff < 20) {
      fill(252, 231, 0, 250);
      // window.$fxhashFeatures = {
      //   sun: "bright-yellow-sun",
      // };
    }
    if ((ff > 20) & (ff < 40)) {
      fill(255, 213, 36, 250);
      // window.$fxhashFeatures = {
      //   sun: "dark-yellow-sun",
      // };
    }
    if ((ff > 40) & (ff < 60)) {
      fill(186, 19, 93, 250);
      // window.$fxhashFeatures = {
      //   sun: "abstract-purple-sun",
      // };
    }
    if ((ff > 60) & (ff < 80)) {
      fill(205, 17, 59, 250);
      // window.$fxhashFeatures = {
      //   sun: "dark-red",
      // };
    }
    if ((ff > 80) & (ff < 100)) {
      fill(207, 0, 0, 250);
      // animS.fill()
      // window.$fxhashFeatures = {
      //   sun: "red of the setting sun",
      // };
    }
  } 
  else {
    fill("#F3EFE0");
     // window.$fxhashFeatures = {
     //    moon: "white moon",
     //  };
  }

  strokeWeight(0);

  circle(rnd(100, 500), rnd(30, 200), rnd(180, 240));

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  for(o = 0 ; o<rnd(1,6);o++){
  var f = rnd(100,400)
 var si = rnd(6,16)
  var x = rnd(0,500)
  var x2 = rnd(4,10)
  var yy = rnd(-10,10)
  strokeWeight(rnd(0.05,1.8))
    
    if(n<60){
    fill(rnd(0,100),rnd(0,100),rnd(0,100))
  }
      else{
        
         fill(rnd(180,250),rnd(180,250),rnd(180,250))
      }
for(j= 0; j<200;j++){
  for(i=0;i<x2;i++){

    
    
  var t = round(rnd(0,25))


 
 
    // strokeWeight(0.5)
    // stroke(0)
  textSize(si)
   
  text(a[t],x+si*i*0.7,f+si*j+yy*i)
   
   
  }
  }
  }
  
  
  
  
  
  
  noLoop()
}
function rnd(min,max){
  return fxrand()*(max-min) + min;
}
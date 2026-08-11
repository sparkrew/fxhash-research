function rnd_btw(min, max) {
  return fxrand() * (max - min) + min;
}

a1 = rnd_btw(1,50)
a22 = rnd_btw(1,255)
a2 = rnd_btw(1,255)
c = rnd_btw(220,255)
c1= rnd_btw(220,255)
c2 = rnd_btw(200,255)
radius =  rnd_btw(100,2000)
radius2 =  rnd_btw(100,2000)
map1=rnd_btw(1,10)
map2=rnd_btw(1,10)
map3=rnd_btw(1,10)
a3 = rnd_btw(1,20)

a4 = rnd_btw(1,10)
nseed = rnd_btw(1000,10000)
strkz = rnd_btw(0.3,0.8)
let quant = rnd_btw(1000, 2000);
let j = 1; j < quant; j++
position1 = rnd_btw(200,500)
position2 = rnd_btw(200,500)
var arr = [];
var zoom = rnd_btw( 0.1,0.2);
var n = rnd_btw(3000,6000);

function setup() {
   createCanvas(
    int(min(windowWidth, windowHeight/2)),
    int(min(windowWidth, windowHeight))
  );



angleMode(DEGREES)
 ellipseMode(CENTER)
 scale(50)
  noiseSeed(nseed)
  frameRate(60)

  for(var i = 0; i < n; i++){
    arr.push(createVector(fxrand(width + frameCount), fxrand(height*frameCount)));
  rect((map(100,100,500,500)))
 if(a1 > 35){
    background(25,255);}
else{
  background(0,255)
}
 
	   arr.push(createVector(fxrand(width ), fxrand(height*a1)));
  }
}

function draw() {
push()
  border()
  pop()
  noFill();






 
  var k = sin(frameCount * a2)
  for(var i = 0; i < n; i++){
    var v = arr[i];
    
  let r = map(sin(frameCount * map1), -1, 1, 0, c2);
    let g = map(i, 0, n - 1, 0, c2);
    let b = map(cos(frameCount * map2 ), -1, 1, 0, c1);

rotate(sin(angle / frameCount))
    
    if (a1 > 45) {
      stroke(255);
    } else if (a1 > 40) {
      stroke(255);
    } else if (a1 > 35) {
      stroke(b, r, g);
    } else if (a1 > 30) {
      stroke(g, r, b);
    } else if (a1 > 25) {
      stroke(b, g, r);
    } else if (a1 > 20) {
      stroke(g, b, r);
    } else if (a1 > 15) {
      stroke(r, r, g);
    } else if (a1 > 10) {
      stroke(g, r, g);
    } else if (a1 > 5) {
      stroke(b, r, b);
    } else if (a1 > 3) {
      stroke(255);
    } else {
      stroke(255);
    }
    
    stroke(r,g,b,255)
    strokeWeight(strkz)
    if (a4 > 5){
      point(v.x /radius2+ frameCount * 8 , v.y
            /a3) }
  else{
    point(v.x /radius+ frameCount *5 , v.y/frameCount * a4) 
  }
    var mod = noise(v.x * zoom + 150 * a4, v.y * zoom * a1);
    var angle = k*mod
    k += rnd_btw(50,200)
    v.x = v.x + cos(angle + frameCount* a2)
    v.y = v.y + sin(angle / a1 / frameCount ) 
    if(v.x <= 0 || v.x >= width * frameCount || v.y <= 0 || v.y >= height){
      v.x = rnd_btw(width + frameCount, width * frameCount)
      v.y = rnd_btw(height + height + frameCount, height + height + frameCount/2)
      angle+=rnd_btw(100,200)
      if(frameCount > 175){
        noLoop()
      }
    }
    
}

}


function border() {
  push();
  translate(-0, -0);
if(a1 > 25)  {
stroke(220, 255);
}
  else{
    stroke(20, 255)
  }
  strokeWeight(50);
  noFill();
  rect(0, 0, width, height);
  pop();

  push();
  translate(0, 0);
 if(a1 > 25)  {
  stroke(175);
 }
else{
  stroke(0)
}
  strokeWeight(10, 255);
  noFill();
  rect(0, 0, width, height);
  pop();
}


function windowResized() {
  sz = min(windowWidth, windowHeight/2);
  resizeCanvas(sz, sz);

  myFrameCount = 1;
setup()
  sca = sz / 617;
  loop();
}



function pulse(value) {
  if (a4 > 5) return "sequential pulse"
  else  return "retroactive pulse"
}


function bordercolor(value) {
  if (a1 > 25) return "white"
  else  return "black"
}

function colormap(value) {



if (a1 > 45) {
  return "1"
} else if (a1 > 40) {
  return "2"
} else if (a1 > 35) {
  return "3"
} else if (a1 > 30) {
  return "4"
} else if (a1 > 25) {
  return "5"
} else if (a1 > 20) {
  return "6"
} else if (a1 > 15) {
  return "7";
} else if (a1 > 10) {
  return "8"
} else if (a1 > 5) {
  return "9"
} else if (a1 > 3) {
  return "10"
} else {
  return "11"
}}



function noiseseed(value) {



  if (nseed > 9000) {
    return "9"
  } else if (nseed > 8000) {
    return "8"
  } else if (nseed > 7000) {
    return "7"
  } else if (nseed > 6000) {
    return "6"
  } else if (nseed > 5000) {
    return "5"
  } else if (nseed > 4000) {
    return "4"
  } else if (nseed > 3000) {
    return "3";
  } else if (nseed > 2000) {
    return "2"
  } else {
    return "1"
  }}





window.$fxhashFeatures = {
  "frame": bordercolor(),
"color map" : colormap(),
"noise seed" :noiseseed(),
"pulse" : pulse()


}

console.log(window.$fxhashFeatures);
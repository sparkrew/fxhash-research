function setup() {
  ww=windowWidth; hh= windowHeight;
  if(ww>=hh){ww=hh;} else{hh=ww;}
  createCanvas(ww,hh, WEBGL);
}

function draw() {
  background(220);

  console.log(width/7.4)// 100

  console.log(width/14.8) // 50
  console.log(width/35.8) // 20
  console.log(width/32.8) //22
  console.log(width/37.8) // 19
  console.log(width/49)
  console.log(width/145)
  console.log(width/13.4) //55
  console.log(width/16.4) //45
  console.log(width/9.8) //75
  console.log(width/11.34) //65
  console.log(width/18.4) //40

  noLoop()
}

function windowResized(){
  ww=windowWidth; hh= windowHeight;
if(ww>=hh){ww=hh;} else{hh=ww;}
createCanvas(ww,hh, WEBGL);

}

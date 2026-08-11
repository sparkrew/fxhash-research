let w = 1000;
let h = 1000;
let cp = []
let step = ['shadow', 'all', 'shadow', 'line']
let lin = ['no', 'yes']

function setup() {
  colorMode(HSB)
  createCanvas(w, h);
  noStroke()
  bcol = int(fxrand()*360)
  if(bcol<=120){
    col1 = bcol + 120
    col2 = bcol + 240
  } else if (bcol >120 && bcol <= 240){
    col1 = bcol -120
    col2 = bcol +120
  } else {
    col1 = bcol -120
    col2 = bcol-240
  }
  col = [col1, col2]
  background(bcol, 70, 70)
  nLin = 500
  k = 0
  c = 0
  if (lin[int(fxrand()+0.2)] == 'yes'){
    while (k < nLin){
      sX = int(w*fxrand())
      sY = int(h*fxrand())
      maxszeX =25
      maxszeY =25
      szeXl = (2*fxrand()-1)*maxszeX
      szeYl = (2*fxrand()-1)*maxszeY
      strokeWeight(3)
      if (c == 0){
        stroke(col1, 70, 70)
      } else if (c == 1){
        stroke(col2, 70, 70)
      } else if (c == 2 && col1 >= 180){
        stroke(col1 -180, 70, 70)
      } else if (c == 2 && col1 < 180){
        stroke(col1+180, 70, 70)
      } else if (c == 3 && col2>= 180){
        stroke(col2 -180, 70, 70)
      } else if (c == 3 && col2 < 180){
        stroke(col2+180, 70, 70)
      }
      line(sX, sY, sX+szeXl, sY + szeYl)
      k = k + 1
      c += 1
      if (c == 4) {
        c = 0
      }
    }
  }

  noLoop()
  
}

function draw() {
  cp = []
  num_p = 2*int(10 + 15*fxrand())
  
  for(i = 0; i < num_p; i++){
    scol = col1
    fcol = col2
    xoy = 0
    if(i%2 == 0){
      if (xoy =='x'&& i>1){
        cp[i] = cp[i-2]
      } else {
        cp[i] = int(100+fxrand()*(w-200))
      }
    } else {
      if (xoy == 'y'&& i>1){
        cp[i] = cp[i-2]
      } else {
        cp[i] = int(100+fxrand()*(h-200))
      }
      
    }
}
  
  // Draw the shadow
  for (d = 0; d < 4; d++){
    if (step[d] == 'shadow'){
      strokeWeight(5)
      noFill()
      stroke(0)
      sh = 4
    } else if (step[d] == 'all'){
      fill(fcol, 70, 70)
      stroke(scol, 70, 70)
      sh = 0
    } else if (step[d] == 'line'){
      stroke(scol, 70, 70)
      sh = 0
      noFill()
    }
    beginShape()
    curveVertex(cp[0]+sh, cp[1]+sh)
    curveVertex(cp[0]+sh, cp[1]+sh)
    for (k = 0; k<(num_p/2)-1; k++){
      curveVertex(cp[k*2]+sh, cp[k*2+1]+sh)
    }
    curveVertex(cp[0]+sh, cp[1]+sh)
    curveVertex(cp[0]+sh, cp[1]+sh)
    endShape()
  }
}
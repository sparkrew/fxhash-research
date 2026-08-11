function el1() {
  
form1 = form > 0.8 ? octo : form > 0.6 ? hept : form > 0.4 ? hexagon : form > 0.2 ? pent : form > 0.1 ? rect : rightTri;
  
  for (var i = -xW; i < xW; i += 150) {
    for (var j = -yH; j < yH; j += 150) {
      push();
      translate(xW / 2, yH / 2);
      noStroke();
      fill(colorAlpha(coolor[coolor1], a1));
      form1(random(i), random(j), xW / random(A, B));
      fill(colorAlpha(coolor[coolor2], a2));
      form1(random(i), random(j), xW / random(A, B));
      fill(colorAlpha(coolor[coolor3], a3));
      form1(random(i), random(j), xW / random(A, B));
      fill(colorAlpha(coolor[coolor4], a4));
      form1(random(i), random(j), xW / random(A, B));
      pop();
    }
  }
}

function fio1() {
  push();
  noFill();
  blendMode(SCREEN);
  strokeWeight(random(0.1, 0.15));
  stroke(236, 233, 222, 100);

  for (i = -xW; i < xW; i += 25) {
    for (j = -yH; j < yH; j += 25) {
      rect(
        i,
        j,
        xW / random(1, random(10, 25)),
        yH / random(1, random(10, 25))
      );
    }
  }

  pop();
}

function fio2() {
  push();
  noFill();
  blendMode(SCREEN);
  strokeWeight(random(0.05, 0.15));
  stroke(136, 133, 122, 75);
  for (i = -xW; i < xW; i += 25) {
    for (j = -yH; j < yH; j += yH / 50) {
      ellipse(0, j, xW * random(2, 5), yH / random(20, 50));
    }
  }
  pop();
}

function fio3() {
  push();
  rotate(TAU/4)
  noFill();
  blendMode(SCREEN);
  strokeWeight(random(0.05, 0.15));
  stroke(136, 133, 122, 75);
  for (i = -xW; i < xW; i += 25) {
    for (j = -yH; j < yH; j += yH / 50) {
      ellipse(0, j, xW * random(2, 5), yH / random(20, 50));
    }
  }
  pop();
}

function ouri() {
  push();
  strokeWeight(1.5);
  stroke("#ECDEDE");
  rectMode(CORNER);
  noFill()

  switch (ouri1) {
        case 0:
        rotate(TAU / E);
      for (i = -xW / C; i < C + xW /C; i += D) {
        rect(i,yH/75,N,random(yH/F),M);
      }
      for (j = -xW / H; j < H + xW /H; j += D) {
        rect(j,-yH/75,N,-random(yH/F),M);
      }
      break;
            
     case 1:
        rotate(TAU/E);      for (i = -xW / C; i < C + xW / C; i += D) {
        rect(i, yH / 75, N, random(yH / 15), M);
        rect(i, -yH / 75,N, -random(yH / 15), M);
      }
         for (j = -xW / H; j < H + xW / H; j += D) {
          rect(j, yH / 10,O, random(yH / 7.5), M);
          rect(j, -yH / 10,O, -random(yH / 7.5), M);
      }  
      break;

    case 2:
        rotate(TAU/E);
      for (i = -xW / C; i < C + xW / C; i += D) {
        rect(i, yH / 75,N, random(yH / 50), M);
        rect(i, -yH / 75,N, -random(yH / 50), M);
      }
         for (j = -xW / H; j < H + xW / H; j += D) {
        rect(j, yH / 20,O, random(yH / 15), M);
        rect(j, -yH / 20,O, -random(yH / 15), M);
      }    
        for (j1 = -xW / K; j1 < K + xW / K; j1 += D) {
        rect(j1, yH / 7.5,P, random(yH / 7.5), M);
        rect(j1, -yH / 7.5,P, -random(yH / 7.5), M);
      }  
      break;
      
          case 3:
        rotate(TAU/E);
      for (i = -xW / C; i < C + xW / C; i += D) {
        rect(i, yH / 125,N, random(O), M);
        rect(i, -yH / 125,N, random(-O), M);
      }
         for (j = -xW / H; j < H + xW / H; j += D) {
        rect(j, yH / 25,O, random(P), M);
        rect(j, -yH / 25,O, random(-P), M);
      }    
        for (j1 = -xW / K; j1 < K + xW / K; j1 += D) {
        rect(j1, yH / 15,P,random(N), M);
        rect(j1, -yH / 15,P,random(-N) , M);
      }  
      break;
    default:
  }
  pop();
}

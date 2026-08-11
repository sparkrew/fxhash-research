function formas() {
  for (var i = 10; i < numero; i++) {
    
    switch (rot) {
        case 0:
        mm1.rotate(TAU);
        break;
        case 1:
        mm1.rotate(TAU/4);
        break;
        case 2:
        mm1.rotate(TAU/8)
        break;
        case 3:
        mm1.rotate(TAU/10)
        break;
        case 4:
        mm1.rotate(TAU/16)
        break;
        case 5:
        mm1.translate(0,0)
        mm1.rotate(TAU/0.9)
        break;
        case 6:
        mm1.translate(0,0)
        mm1.rotate(TAU/0.35)
        break;
        case 7:
        mm1.translate(0,0)
        mm1.rotate(TAU/250)
        break;
        case 8:
        mm1.translate(0,0)
        mm1.rotate(TAU/500)
        break;
      default:
    }
    
    shuffle(cor, true);
    
    for (let d = 0; d < quantA; d += 1) {
      mm1.noStroke();
      shuffle(cor,true)
      mm1.fill(colorAlpha(cor[cor1],0.75));
      switch(dir){
      case 0:
          scribbleRectangle(random(xx),random(yy),random(xx / random(10,20), xx) * fatorN,random(yy / random(random(50, 200), random(15,10)), yy / 100) * fatorN);
        scribbleRectangle(random(xx),random(yy),xx,1);
        scribbleRectangle(random(xx),random(yy),(yy) * fatorN,(random(yy/200,yy/500)) * fatorN);
        scribbleRectangle(random(xx),random(yy),10,10);
        break;      
        case 1:
          scribbleRectangle(random(xx),random(yy),random(yy / 10, yy/2)* fatorN,random(xx / random(random(5, 10), 5), xx / 50)* fatorN);
          scribbleRectangle(random(xx),random(yy),xx,1);
          scribbleRectangle(random(xx),random(yy),(random(yy/50,yy/10)),(random(yy/200,yy/150)));
          scribbleRectangle(random(xx),random(yy),(random(yy/2,yy/5)),(random(yy/500,yy/100)));
         break;
        case 2:
          scribbleRectangle(random(xx),random(yy),random(yy / random(random(5, 20), 10), yy / 100) * fatorN,random(xx / 20, xx) * fatorN);
          scribbleRectangle(random(xx),random(yy),random(yy / 20, xx / 100) * fatorN,random(xx, xx / 20) * fatorN);
          scribbleRectangle(random(xx),random(yy),random(yy / random(10, 15)) * fatorN,random(xx / random(20, 5)) * fatorN);
          scribbleRectangle(random(xx),random(yy),random(yy / random(15, 25)) * fatorN,random(xx, xx / 10) * fatorN);
          scribbleRectangle(random(xx),random(yy),1,yy);
          scribbleRectangle(random(xx),random(yy),(random(yy/2000,yy/500)) * fatorN,(yy) * fatorN);
          break;
        case 3:
          scribbleRectangle(random(xx),random(yy),random(yy / random(random(25, 100), 50), yy / 50) * fatorN,random(xx / 20, xx) * fatorN);
          scribbleRectangle(random(xx),random(yy),random(yy / random(15, 25)) * fatorN,random(xx, xx / 10) * fatorNQ);
          scribbleRectangle(random(xx),random(yy),1,yy);
          scribbleRectangle(random(xx),random(yy),(random(yy/2000,yy/500)) * fatorN,(yy*5) * fatorN);
          break;
        case 4:
          scribbleRectangle(random(xx),random(yy),random(yy / 350, yy / 300) * fatorN,random(xx /5, xx/2) * fatorN);
          scribbleRectangle(random(xx),random(yy),random(yy / random(15, 25)) * fatorN,random(xx, xx / 10) * fatorNQ);
          scribbleRectangle(random(xx),random(yy),1,yy*5);
          scribbleRectangle(random(xx),random(yy),random(10),50);
          scribbleRectangle(random(xx),random(yy),yy/500,yy);
          noStroke()
          break;
          case 5:
          a = random(yy / 25, yy / 10) * fatorN
          b = random(yy / random(15, 25)) * fatorN
          c = random(yy / 50, yy / 100) * fatorN
          scribbleRectangle(random(xx),random(yy),a,a)
          scribbleRectangle(random(xx),random(yy),b,b)
          scribbleRectangle(random(xx),random(yy),yy,1);
          scribbleRectangle(random(xx),random(yy),15,15);
          scribbleRectangle(random(xx),random(yy),c,c)
          noStroke()
          break;
        default:
      }
    }
  }
}

function scribbleRectangle(x, y, w, h) {
  mm1.strokeWeight(1);
  mm1.beginShape();
  mm1.vertex(x, y);
  for (let i = 0; i < w; i += passo) {
    let nx = x + i + map(noise(i * 0.1, y * 0.1), 0, 1, -long, long);
    let ny = y + map(noise(x * 0.1, i * 0.1), 0, 1, -long, long);
    mm1.vertex(nx, ny);}
  mm1.vertex(x + w, y);
  for (let i = 0; i < h; i += passo) {
    let nx = x + w + map(noise(w * 0.1, (y + i) * 0.1), 0, 1, -long, long);
    let ny = y + i + map(noise((x + w) * 0.1, i * 0.1), 0, 1, -long, long);
    mm1.vertex(nx, ny);}
  mm1.vertex(x + w, y + h);
  for (let i = 0; i < w; i += passo) {
    let nx = x + w - i + map(noise((w - i) * 0.1, (y + h) * 0.1), 0, 1, -long, long);
    let ny = y + h + map(noise((x + w) * 0.1, (h + i) * 0.1), 0, 1, -long, long);
    mm1.vertex(nx, ny);}
  mm1.vertex(x, y + h);
  for (let i = 0; i < h; i += passo) {
    let nx = x + map(noise(x * 0.1, (y + h - i) * 0.1), 0, 1, -long, long);
    let ny = y + h - i + map(noise(i * 0.1, (y + h) * 0.1), 0, 1, -long, long);
    mm1.vertex(nx, ny);}
  mm1.endShape(CLOSE);
}

function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand() ** 2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min); max = Math.floor(max); return Math.floor(fxrand() * (max - min + 1)) + min;}

// Function by Brian J. Cardiff || https://gist.github.com/bcardiff/3b39ba8e2d00fed68435
function colorAlpha(aColor, alpha) {
  var c = color(aColor);
  return color("rgba(" + [red(c), green(c), blue(c), alpha].join(",") + ")");
}

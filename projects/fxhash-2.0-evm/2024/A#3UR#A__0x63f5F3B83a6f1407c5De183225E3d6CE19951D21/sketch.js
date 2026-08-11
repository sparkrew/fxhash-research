const seed = Math.floor(999999999 * $fx.rand())
  , taille = 2e3;
let pds = 1
  , done = !1
  , palet = ["#84DE02", "#E88E5A", "#DDE26A", "#C53151", "#FFDF46", "#B05C52", "#FF4466", "#828E84", "#FD5240", "#391285", "#FF85CF", "#FF4681", "#4BC7CF", "#FF6D3A", "#FF404C", "#A0E6FF", "#ED0A3F", "#C32148", "#FD0E35", "#C62D42", "#CC474B", "#CC3336", "#E12C2C", "#D92121", "#B94E48", "#FF5349", "#FE4C40", "#FE6F5E", "#B33B24", "#CC553D", "#E6735C", "#FF9980", "#E58E73", "#FF7F49", "#FF681F", "#FF8833", "#FFB97B", "#ECB176", "#E77200", "#FFAE42", "#F2BA49", "#FBE7B2", "#F2C649", "#F8D568", "#FCD667", "#FED85D", "#FBE870", "#F1E788", "#FFEB00", "#B5B35C", "#ECEBBD", "#FAFA37", "#FFFF99", "#FFFF9F", "#D9E650", "#ACBF60", "#AFE313", "#BEE64B", "#C5E17A", "#5E8C31", "#7BA05B", "#9DE093", "#63B76C", "#4D8C57", "#3AA655", "#6CA67C", "#5FA777", "#93DFB8", "#33CC99", "#1AB385", "#29AB87", "#00CC99", "#00755E", "#8DD9CC", "#01786F", "#30BFBF", "#00CCCC", "#008080", "#8FD8D8", "#95E0E8", "#6CDAE7", "#2D383A", "#76D7EA", "#7ED4E6", "#0095B7", "#009DC4", "#02A4D3", "#47ABCC", "#4997D0", "#339ACC", "#93CCEA", "#2887C8", "#00468C", "#0066CC", "#1560BD", "#0066FF", "#A9B2C3", "#C3CDE6", "#4570E6", "#7A89B8", "#4F69C6", "#8D90A1", "#8C90C8", "#7070CC", "#9999CC", "#ACACE6", "#766EC8", "#6456B7", "#3F26BF", "#8B72BE", "#652DC1", "#6B3FA0", "#8359A3", "#8F47B3", "#C9A0DC", "#BF8FCC", "#803790", "#733380", "#D6AEDD", "#C154C1", "#FC74FD", "#732E6C", "#E667CE", "#E29CD2", "#8E3179", "#D96CBE", "#EBB0D7", "#C8509B", "#BB3385", "#D982B5", "#A63A79", "#A50B5E", "#614051", "#F653A6", "#DA3287", "#FF3399", "#FBAED2", "#FFB7D5", "#FFA6C9", "#F7468A", "#E30B5C", "#FDD7E4", "#E62E6B", "#DB5079", "#FC80A5", "#F091A9", "#FF91A4", "#A55353", "#CA3435", "#FEBAAD", "#F7A38E", "#E97451", "#AF593E", "#9E5B40", "#87421F", "#926F5B", "#DEA681", "#D27D46", "#664228", "#D99A6C", "#EDC9AF", "#FFCBA4", "#805533", "#FDD5B1", "#EED9C4", "#665233", "#837050", "#E6BC5C", "#D9D6CF", "#92926E", "#E6BE8A", "#C9C0BB", "#DA8A67", "#C88A65"]
  , r = 30
  , g = 30
  , b = 30;
function preload() {}
function setup() {
    setupNoise(seed),
    setupCanvas(taille, pds);

    Math.floor(nrand(0, palet.length));
    let F = color(nrand(0, 200))
      , C = Math.floor(nrand(1, 5));
    pg.background(F),
    pg.strokeWeight(C);
    let e = nrand(1, 9) / nrand(5e3, 1e4)
      , n = nrand(1, 9) / nrand(5e3, 1e4)
      , E = nrand(1, 9) / nrand(5e3, 1e4)
      , o = nrand(0, 50)
      , a = nrand(0, 50)
      , t = nrand(0, 50)
      , D = Math.floor(nrand(4e3, 4e3))
      , r = nrand(700, 1e3)
      , B = (Math.floor((1e3 - Math.max(o, a, t) + Math.min(o, a, t) - r) / 2),
    nrand(700, 1600))
      , A = C * nrand(2, 4)
      , l = Math.floor(nrand(0, palet.length))
      , p = Math.floor(nrand(0, palet.length))
      , d = Math.floor(nrand(0, palet.length))
      , g = color(palet[l])
      , h = color(palet[p])
      , s = color(palet[d]);
    pg.push(),
    pg.angleMode(DEGREES),
    pg.translate(0, nrand(-100, 0)),
    pg.rotate(nrand(-20, 20));
    for (let F = 1e3 - Math.floor(D / 2); F < 1e3 + Math.floor(D / 2); F += B)
        for (let C = -1e3; C < 3e3; C += A)
            pg.stroke(h),
            pg.line(F, C - a + A * noise(F * n, C * n) - A / 2, F + B, C - a + r * noise((F + B) * n, C * n) - r / 2);
    pg.pop(),
    pg.push(),
    pg.angleMode(DEGREES),
    pg.translate(0, nrand(-100, 0)),
    pg.rotate(nrand(-20, 20));
    for (let F = 1e3 - Math.floor(D / 2); F < 1e3 + Math.floor(D / 2); F += B)
        for (let C = -0; C < 1500; C += A)
            pg.stroke(s),
            pg.line(F, C - t + A * noise(F * E, C * E) - A / 2, F + B, C - t + r * noise((F + B) * E, C * E) - r / 2);
    pg.pop(),
    pg.push(),
    pg.angleMode(DEGREES),
    pg.translate(0, nrand(0, 500)),
    pg.rotate(nrand(-45, 45));
    for (let F = 1e3 - Math.floor(D / 2); F < 1e3 + Math.floor(D / 2); F += B)
        for (let C = 300; C < 1700; C += A)
            pg.stroke(g),
            pg.line(F, C - o + A * noise(F * e, C * e) - A / 2, F + B, C - o + r * noise((F + B) * e, C * e) - r / 2);
    pg.pop();
  
    makeSomeNoise();

    pg.noFill();
    pg.strokeWeight(2);
    pg.stroke('black');
    pg.rect(0.025*taille,0.025*taille,0.95*taille,0.95*taille);
}

function draw() {
  


    let f = Math.min(window.innerWidth, window.innerHeight);
    image(pg, 0, 0, f, f);
    $fx.preview();
    done=true;

}

function makeSomeNoise() {
  a1=[random(1),random(1),random(1)];
  a2=[random(1),random(1),random(1)];
  let img = createGraphics(taille, taille);
  img.copy(pg,0,0,taille,taille,0,0,taille,taille)
  
  img.loadPixels();
  let res=0.001
  let pw=200

  for (let i = 0; i < img.pixels.length; i += 4) {
    let ind=Math.floor(i/4);
    let y = Math.floor(ind/taille);
    let x =(ind/taille-y)*taille;
    moy=(img.pixels[i+0]+img.pixels[i+1]+img.pixels[i+2])/3;
    if (moy<50){
      img.pixels[i+0] = 255-(map(moy,0,50,120,220)+(noise(x*res,y*res)-0.5)*pw)
      img.pixels[i+1] = 255-(map(moy,0,50,120,220)+(noise((x+taille)*res,(y+taille)*res)-0.5)*pw)
      img.pixels[i+2] = 255-(map(moy,0,50,120,220)+(noise((x+2*taille)*res,(y+2*taille)*res)-0.5)*pw)
    }else{
      img.pixels[i+0] = (img.pixels[i+0]+50+(noise(x*res,y*res)-0.5)*pw);
      img.pixels[i+1] = (img.pixels[i+1]+50+(noise((x+taille)*res,(y+taille)*res)-0.5)*pw);
      img.pixels[i+2] = (img.pixels[i+2]+50+(noise((x+2*taille)*res,(y+2*taille)*res)-0.5)*pw);
    }

  }
  img.updatePixels();

  img.loadPixels();
  for (let i = 0; i < img.pixels.length; i += 4) {
    let ind=Math.floor(i/4);
    let y = Math.floor(ind/taille);
    let x =(ind/taille-y)*taille;
    moy=(img.pixels[i+0]+img.pixels[i+1]+img.pixels[i+2])/3;
    if (moy>110 && moy<130){
      img.pixels[i+0] = 0;
      img.pixels[i+1] = 0;
      img.pixels[i+2] = 0;
    }
  }
  img.updatePixels();

  pg.image(img,0,0,taille,taille);
}


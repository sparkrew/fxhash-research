let x;
let y;
let speedX = 3;
let speedY = 5;
let lineLength = 1;

function setup() {
    var cnv = createCanvas(windowHeight*0.8, windowHeight);
    cnv.style('display', 'block');
    background(240);
    setTimeout(parar, random(37000, 45000));
    setTimeout (doPreview, 52000);

    randomSeed( fxrand() * 9999 );


    const numAleatorio = fxrand()
    //const esMayor = numAleatorio > 0.5

    x = random(0, width);
    y = random(0, height);

    speedX = random(-1, 2);
    speedY = random(-3, 1);
    lineLength = random(-5, -10);

}

    function draw() {
      const redVal = map(x, 0, width, 0, 255);
      const greenVal = map(y, 0, height, 50, 150);
      const blueVal = map(x, 0, width, 20, 80);
      lineLength = lineLength += 1;


      translate(x, y);
      const rotation = map(x, 0, width, 0, TWO_PI);
      rotate(rotation);
      stroke(redVal, greenVal, random(255));
      line(lineLength, 0, 80, 0);

      x = x + speedX;
      y = y + speedY;
      if (x > width || x < 0){
        speedX = -speedX;
        lineLength = -lineLength;
      }

      if (y > height || y < 0){
        speedY = -speedY;
      }
    }


    function mousePressed(){
      save('myMoireArt.png');
      return false;

    }
    function touchStarted(){
      if(!fullscreen()){
        fullscreen(true);
      }
    }

    function windowResized(){
      resizeCanvas(windowHeight*0.8, windowHeight);
        background(240);
    }

    function parar() {
      noLoop();
     }

     function doPreview(){
       fxpreview();
     }

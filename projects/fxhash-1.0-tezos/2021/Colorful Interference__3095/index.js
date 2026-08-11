console.log(fxhash)   
console.log(fxrand()) 

let randColor1 = fxrand()*124;
let randColor2 = fxrand()*164;
let randColor3 = fxrand()*100;
let count = 1;

function setup() {
    createCanvas(vmin(100), vmin(100), WEBGL);
    noFill();
    background(randColor1,randColor2,randColor3);
    drawingContext.shadowBlur = fxrand()*42;
    drawingContext.shadowColor = color((fxrand()*15)%360, 360, 360);
}


function draw() {
  
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(locX, locY, 60);
  pointLight(255, 255, 255, locX, locY, 100);

  for (let j = 0; j < 5; j++) {
    if (count > 31500) { break; }
      push();

      for (let i = 0; i < 4; i++) {
        translate(
          cos(frameCount * 0.001 + j) * fxrand(),
          sin(frameCount * 0.001 + j) * 90 - fxrand(),
          i * 0.1
        );
        // fill(randColor1*j, randColor2-frameCount,randColor2*i,20);
        // stroke(randColor2,20*i,70*j,0.5);
        // sphere(9,9,33);
        //console.log("i =" + i);
        rotateZ(frameCount * 0.01);
        push();

        fill(randColor1*i+frameCount, randColor2*frameCount,randColor1*i,20);
        stroke(randColor1+frameCount,50*i,60*j,1);
        box(9, 15, 12);
        pop();
        count++;
      }

      pop();


    }
  }


function vmin(viewport_percent) {

  var canvas_size = windowWidth > windowHeight ? windowHeight : windowWidth;
  canvas_size -= canvas_size * ((100 - viewport_percent) / 100);
  return canvas_size;
  }

function windowResized() {
    (theSize = int(0.8 * min(windowWidth, windowHeight))), resizeCanvas(theSize, theSize, WEBGL), centerCanvas(), draw();
}




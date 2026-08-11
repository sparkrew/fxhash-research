let layer1_inc = 0.7
let layer2_inc = 0.5
let cantidad 
let rot_inc
let rot_offset

////////////////////////

let index
let index_fondo
let str_alpha

cols = [
  ['#1A374D', '#406882', '#6998AB', '#B1D0E0'],

  ['#495867', '#577399', '#bdd5ea', '#f7f7ff', '#fe5f55'],
  ['#0d3b66', '#faf0ca', '#f4d35e', '#ee964b', '#f95738'],
  ['#6f1d1b', '#bb9457', '#432818', '#99582a', '#ffe6a7'],
  ['#022b3a', '#1f7a8c', '#bfdbf7', '#e1e5f2', '#ffffff'],
  ['#22223b', '#4a4e69', '#9a8c98', '#c9ada7', '#f2e9e4'],
  ['#006d77', '#83c5be', '#edf6f9', '#ffddd2', '#e29578'],
  ['#2b2d42', '#8d99ae', '#edf2f4', '#ef233c', '#d90429'],
  ['#355070', '#6d597a', '#b56576', '#e56b6f', '#eaac8b'],
  ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'],
  ['#e63946', '#f1faee', '#a8dadc', '#457b9d', '#1d3557'],


  ['#433520', '#025955', '#00917C', '#FDE8CD'], //
  ['#781D42', '#A3423C', '#DE834D', '#F0D290'],

  ['#FF5959', '#676FA3', '#CDDEFF', '#EEF2FF'],

  ['#2F5D62', '#5E8B7E', '#A7C4BC', '#DFEEEA'],
  
  ['#6E3CBC', '#7267CB', '#98BAE7', '#B8E4F0'],
  ['#32502E', '#406343', '#ECE7B4', '#F3EFCC'],

  ['#483434', '#6B4F4F', '#EED6C4', '#FFF3E4'],
  ['#F3D5C0', '#D4B499', '#889EAF', '#506D84'],
  ['#F0ECE3', '#DFD3C3', '#C7B198', '#A68DAD'],
  ['#F5C6A5', '#FF7777', '#A2416B', '#852747'],
  ['#911F27', '#630A10', '#FCF0C8', '#FACE7F'],
  ['#000B49', '#9B0000', '#FF7272', '#FFB5B5'],
  ['#1C1124', '#693E52', '#74B49B', '#A7D7C5'],
  ['#64868E', '#98B4A6', '#D1E4D1', '#F3FBF1'],
  ['#93E4C1', '#3BAEA0', '#118A7E', '#1F6F78'],
  ['#18587A', '#FC624D', '#FCA7A7', '#FFD6D6']
  ]

let color1, color2
let color3, color4
let color5, color6
let spacing
let luces = 0
let rnd_fondo

function init()
{
  background(30)
  luces = 0
}

//////////////////////////////////

function setup() {
  
  if(windowWidth > windowHeight)
  {
    createCanvas(windowHeight, windowHeight);
  }
  else if(windowWidth < windowHeight)
  {
    createCanvas(windowWidth, windowWidth)
  }
  else if(windowWidth == windowHeight)
  {
    createCanvas(windowWidth, windowHeight)
  }


  randomSeed(fxhash)
  noiseSeed(fxhash)

  spacing = floor(fxrand() * 15 + 15)

  index = floor(fxrand() * cols.length)
  //index=1
  print('index: ' + index)

  tile = floor(fxrand() * (24 - 12 + 1) + 12);
  rnd_fondo = fxrand()

  color1 = color(cols[index][floor(fxrand() * cols[index].length)])
  color2 = color(cols[index][floor(fxrand() * cols[index].length)])

  color3 = color(cols[index][floor(fxrand() * cols[index].length)])
  color4 = color(cols[index][floor(fxrand() * cols[index].length)])

  color5 = color(cols[index][floor(fxrand() * cols[index].length)])
  color6 = color(cols[index][floor(fxrand() * cols[index].length)])

  str_alpha = random(75, 127)

  //noStroke()
  stroke(color(red(color1), green(color1), blue(color1), 200))
  strokeWeight(1.3)
  //angleMode(DEGREES)

  cantidad = floor(fxrand() * (24 - 12) + 12)
  print('cantidad: ' + cantidad)
  //cantidad = 25
  rot_inc = 360 / cantidad
}

function draw() {
  background(30);
  
  // fondos
  push()
  rnd_fondo > 0.5 ? fondo1() : fondo2()
  luz()
  pop()
  
  let vit = 0.025
  
  let valbend = cos(frameCount * vit) * 20
 
  let bend = createVector(sin(frameCount * vit) * valbend,    // x
                          cos(frameCount * vit) * valbend)    // y
 
  let movimiento = createVector(sin(frameCount * vit),            // x  
                               cos(frameCount * vit - HALF_PI))   // y  
  
  
  layer1_inc = map(sin(frameCount / 60), -1, 1, 0.1, 0.15) + 0.6

  
  for(let i = 0; i < cantidad; i++)
    {
        fill(color(red(color1), green(color1), blue(color1), 100))
        push()
        
        let x = cos(i) + width / 2
        let y = sin(i) + height / 2
        
        translate(x, y)
        if(cantidad < 10)
        {
         rotate( radians(rot_inc) * i + sin(frameCount / 200) / 10)
        }
        else
        {
         rotate(i)
        }
        
      
        let p1 = createVector(movimiento.x * valbend / 2, movimiento.y);

        drawingContext.shadowBlur = 45
        drawingContext.shadowColor = color(red(color2), green(color2), blue(color2))
        
        beginShape()
      
        vertex(0, 0)

        bezierVertex(100, 100, 100, 200, 0, 300 + (sin(i * 0.08) * i + i));
        bezierVertex(-100, 200, -100, 100, 0, 0);

        endShape(CLOSE)
        pop()
    }
  
    
   for(let i = 0; i < cantidad; i++)
    {
      
        fill(color(red(color3), green(color3), blue(color3), 100))
        push()
        
        let x = cos(i) + width / 2
        let y = sin(i) + height / 2
        
        translate(x, y)
        if(cantidad < 10)
        {
         rotate(i * 2)
        }
        else
        {
         rotate(i)
        }
      
      // let p1 = createVector(movimiento.x * valbend / 2, movimiento.y);

        drawingContext.shadowBlur = 25
        drawingContext.shadowColor = color(red(color4), green(color4), blue(color4))
        
        beginShape()
        vertex(0, 0)

        bezierVertex(100 * layer1_inc, 100 * layer1_inc, 100 * layer1_inc, 200 * layer1_inc, 0, 300 * layer1_inc + (sin(i * 0.08) * i + i));
        bezierVertex(-100 * layer1_inc, 200 * layer1_inc, -100 * layer1_inc, 100 * layer1_inc, 0, 0);

        endShape(CLOSE)
        pop()
    }
  
    let cantidad_sup

    if(cantidad < 10)
    {
      cantidad_sup = cantidad * 2
    }
    else
    {
      cantidad_sup = cantidad
    }

    for(let i = 0; i < cantidad_sup; i++)
    {
      
        fill(color(red(color5), green(color5), blue(color5), 100))
        stroke(color(red(color1), green(color1), blue(color1), random(175, 255)))


        push()
        strokeWeight(random(1, 3))
        
        let x = cos(i) + width / 2
        let y = sin(i) + height / 2
        
        translate(x, y)
        //rotate( radians(rot_inc) * i)
        rotate(i)
      
      // let p1 = createVector(movimiento.x * valbend / 2, movimiento.y);      
      
        drawingContext.shadowBlur = 25
        drawingContext.shadowColor = color(red(color6), green(color6), blue(color6))
      
             linearGradient(
                            0, 0, //Start point
                            random(50, 150), random(20, 75), //End point
                            color(red(color5), green(color5), blue(color5), random(50, 170)), //Start color
                            color(red(color6), green(color6), blue(color6), random(50, 170)) //End color
                          );

            strokeGradient(
                            random(50, 150), random(20, 75), //Start point
                            0, 0, //End point
                            color(red(color1), green(color1), blue(color1), str_alpha), //Start color
                            color(red(color2), green(color2), blue(color2), str_alpha) //End color
                          );
      
        beginShape()
        vertex(movimiento.x * 6, 0)

        bezierVertex(100 * layer2_inc, 100 * layer2_inc, 100 * layer2_inc, 200 * layer2_inc, 0, 300 * layer2_inc + (sin(i * 0.08) * i + i));
        bezierVertex(-100 * layer2_inc, 200 * layer2_inc, -100 * layer2_inc, 100 * layer2_inc, 0, 0);

        endShape(CLOSE)
        pop()
    }


    
    filter(BLUR, 0.7)
    grain()
    noLoop()
}





function linearGradient(sX, sY, eX, eY, colorS, colorE)
{
  let gradient = drawingContext.createLinearGradient
  (
    sX, sY, eX, eY
  )
  
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  
  drawingContext.fillStyle = gradient;
  //drawingContext.strokeStyle = gradient;
}

function strokeGradient(sX, sY, eX, eY, colorS, colorE)
{
  let gradient = drawingContext.createLinearGradient
  (
    sX, sY, eX, eY
  )
  
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  
  
  drawingContext.strokeStyle = gradient;
}


function grain()
{
  loadPixels()
  for (let i = 0; i < 8 * (width * height / 2); i += 4)
    {
      let rand = random(-13, 13)
      pixels[i] += rand
      pixels[i + 1] += rand
      pixels[i + 2] += rand
      pixels[i + 3] += 0
    }
  updatePixels()
}

////////////////////////////
let tile 

function fondo2()
{
    push();

    let amt = 0

    for(let i = 0; i < fxrand() * (30 - 15 + 1) + 15; i++)
    {
      let fcol =  lerpColor(color1, color2, sin(amt))
      stroke(red(fcol), green(fcol), blue(fcol), noise(amt) * 2 + 1);

      for(let x = 0; x < width; x += tile)
      {
        for(let y = 0; y < height; y += tile)
        {
          if(fxrand() < 0.2)
          {
            line(x, y + tile, x + tile, y)
          }
          else if(fxrand() > 0.2 && fxrand() < 0.4)
          {
            line(x, y, x + tile, y + tile)
          }
          else if(fxrand() > 0.6 && fxrand() < 0.8)
          {
            line(x + tile / 2, y, x + tile / 2, y + tile);
          }
          else if(fxrand() > 0.8)
          {
            line(x, y + tile / 2, x + tile, y + tile / 2);
          }
        }
      }
      amt += 0.35
    }
     pop();

  
}

// fondo
function fondo1() 
{
  noFill();
  stroke(255, 50);
  strokeWeight(0.1);
  
  let x = 0//random(width);
  let y = 0//random(height);
  let j = random(2, 10);

  let border = 100;
  
  beginShape();
  for (let i = 0; i < 50000; i++)
   {
    vertex(x, y);
    let qx = fxrand() < 0.5 ? -1 : 1;
    let qy = fxrand() < 0.5 ? -1 : 1;
    x += qx * j;
    y += qy * j;
    x = constrain(x, -border, width + border);
    y = constrain(y, -border, height + border);
  }
  endShape();
}


/*
function fondo()
{
  strokeWeight(0.5)
  print('spacing: ' + spacing)
  for (let i = -width * 1.5; i < (height + width); i += spacing)
    {
      stroke(200, random(5, 15));
      gridline(i, 0, i + height, height);
    }
  
  for (let i = height + width; i >= -width; i -= spacing)
    {
      stroke(200, random(5, 15));
      gridline(i, 0, i - height, height);
    }
    back = 1
    print('fondo')
}

function gridline( x1,  y1,  x2,  y2) {
  let tmp;

  if (x1 > x2) 
  {
   tmp = x1;
   x1 = x2;
   x2 = tmp;
    
   tmp = y1;
   y1 = y2;
   y2 = tmp;
  }

  let dx = x2 - x1;
  let dy = y2 - y1;
  let step = 1;

  if (x2 < x1)
    {
      step = -step;
    }
  
  let sx = x1;
  let sy = y1;
  for (let x = x1 + step; x <= x2; x += step)
  {
    let y = y1 + step * dy * (x - x1) / dx;
    strokeWeight(2 + map(noise(sx, sy), 0, 1, -0.5, 0.5));
    line(sx, sy, x + map(noise(x, y), 0, 1, -1, 1), y + map(noise(x, y), 0, 1, -1, 1));
    sx = x;
    sy = y;
  }
}
*/

///////////////////////////

function luz()
{
  push()
  noStroke()
  let amt = 0
  while(luces < fxrand() * (40 - 20 + 1) + 20)
  {
    let xpos = fxrand() * width;
    let ypos = fxrand() * height;

    let s = fxrand() * (475 - 200 + 1) + 200;

    let lcol

    for(let i = 0; i < fxrand() * (10 - 3 + 1) + 3; i++)
      {
        push()
        rectMode(CENTER)

        lcol = lerpColor(color1, color2, sin(amt))

        fill(red(lcol), green(lcol), blue(lcol), 1)
        stroke(red(lcol), green(lcol), blue(lcol), randomGaussian() * 3 + 2)

        translate(xpos, ypos);
        rotate(PI / fxrand() * (24 - 12 + 1) + 12);
        rect(randomGaussian() * 20, randomGaussian() * 25, s + randomGaussian() * 15)
        amt += 0.35
        pop()
      }
    luces++
  }
  pop()
}

///////////////////

function windowResized()
{
  if(windowWidth > windowHeight)
  {
    resizeCanvas(windowHeight, windowHeight);
  }
  else if(windowWidth < windowHeight)
  {
    resizeCanvas(windowWidth, windowWidth)
  }
  else if(windowWidth == windowHeight)
  {
    resizeCanvas(windowWidth, windowHeight)
  }
  init()
  loop()
}
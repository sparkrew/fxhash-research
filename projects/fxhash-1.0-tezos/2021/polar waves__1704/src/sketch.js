let t;
let factoresT = [4];
let color1;
let color2;
let posicion1, posicion2, poisicon3, posicion4;
let buffer;
let interpolar = false;
let contador_lerp = 0;

// paletas
let cols = [
  ['#1B2B40', '#F2F2DF', '#F2B84B', '#F2A444'],
  ['#2E4C6D', '#396EB0', '#DADDFC', '#FC997C'],
  ['#66806A', '#B4C6A6', '#FFC286', '#FFF1AF'],
  ['#CEE5D0', '#F3F0D7', '#FED2AA', '#FFBF86'],
  ['#89B5AF', '#96C7C1', '#DED9C4', '#D0CAB2'],
  ['#FFE699', '#FFF9B6', '#FF9292', '#FFCCD2'],
  ['#FFA6D5', '#100505', '#9CC094', '#FFF7E0'],
  ['#E5DCC3', '#C7BEA2', '#AAA492', '#9A9483'],
  ['#F5C6A5', '#FF7777', '#A2416B', '#852747'],
  ['#D1E8E4', '#C37B89', '#BCCC9A', '#EAE7C6'],
  ['#6E3CBC', '#7267CB', '#98BAE7', '#B8E4F0'],
  ['#FFE699', '#FFF9B6', '#FF9292', '#FFCCD2'],
  ['#F9F3DF', '#CDF2CA', '#FFDEFA', '#FFC898'],
  ['#F5C6A5', '#FF7777', '#A2416B', '#852747'],
  ['#00A19D', '#FFF8E5', '#FFB344', '#E05D5D']
];

let index;

let sw
let line_alpha = 4
let end = 450
let len = 150

let buffer_fondo;
let back;
let tile

function init()
{
  if(windowHeight < windowWidth)
  {
    len = windowHeight / 5
  } 
  else if(windowWidth < windowHeight)
  {
    len = windowWidth / 5
  } 
  else if (windowWidth == windowHeight)
  {
    len = windowHeight / 5
  }

  back = 0
  buffer_fondo = createGraphics(windowWidth, windowHeight) 
  buffer_fondo.background(20)
  fondo(buffer_fondo) 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  
  pixelDensity(1);

  let comienzo = createVector();
  let fin = createVector();
  
  buffer = createGraphics(windowWidth, windowHeight);
 // buffer.background(20)
  sw = 1
  
  posicion1 = createVector();
  posicion2 = createVector();
  posicion3 = createVector();
  posicion4 = createVector();
  
  comienzo.set(20, width / 2);
  fin.set(width - 20, height / 2);

  index = floor(fxrand() * cols.length)

  color1 = color(cols[index][1]);
  color2 = color(cols[index][1]);
  
  t = 2;
  
  for(let i = 0; i < 4; i++)
    {
      factoresT[i] = fxrand() * 0.050;
    } 
    
    tile = floor(fxrand() * (30 - 10 + 1) + 10)
    init();
}

let cambio = 0

function draw() {
  
  image(buffer_fondo, 0, 0)
  
  let rnd = fxrand(1)
  
  if(rnd < 0.01)
    {
      change();
      cambio++;
      print(cambio)
    }
  if(frameCount > end / 2 && cambio == 0)
  {
    change();
  } 
 


  buffer.push()
  buffer.translate(width / 2, height / 2)
  for(let i = 0; i < 10; i++)
  {
    buffer.stroke(red(color1), green(color1), blue(color1), line_alpha);
    buffer.strokeWeight(sw);
      
    posicion1 = pos(t + i * 10, factoresT).mult(len)
    posicion2 = pos((t * 2) + i * 10, factoresT).mult(len)
      
      
    buffer.line(posicion1.x, posicion1.y, posicion2.x, posicion2.y);
  }
  
  for(let i = 0; i < 10; i++)
  {
    buffer.stroke(red(color2), green(color2), blue(color2), line_alpha);
    buffer.strokeWeight(sw);
      
    posicion3 = pos(t + i * 10, factoresT).mult(-len)
    posicion4 = pos((t * 2) + i * 10, factoresT).mult(-len)
      
      
    buffer.line(posicion3.x, posicion3.y, posicion4.x, posicion4.y);
  }

  buffer.pop()
  
  image(buffer, 0, 0);

  t += 0.9;
  
  if(interpolar)
  {
    interpolar_color();
    contador_lerp++;
  }
  
  if(contador_lerp > 90)
  {
    contador_lerp = 0;
    interpolar = false;
  }
  
  if(frameCount >= end)
    {
      noLoop();
    }
  
}

function change()
{
  contador_lerp = 0;
  interpolar = false;
  
  for(let i = 0; i < 4; i++)
  {
    factoresT[i] = fxrand() * 0.050;
  } 
  
  interpolar = true;
  
  prev_index = index;

  while(prev_index == index)
  {
    index = floor(fxrand() * cols.length)
  }
}

function interpolar_color()
{ 
    color1 = lerpColor(color(color1), color(cols[index][floor(fxrand() * 4)]), 0.03);
    color2 = lerpColor(color(color2), color(cols[index][floor(fxrand() * 4)]), 0.03);
}

function pos(t, factores)
{
  let posicion = createVector()
  posicion.x = sin(t * factores[0]) + sin(t * factores[1]);
  posicion.y = sin(t * factores[2]) + sin(t * factores[3]);
  return posicion;
}

function fondo(_buffer)
{
  let buffer = _buffer
  if(back == 0)
  {
    buffer.push();
    buffer.stroke(255, 2);
    for(let i = 0; i < fxrand() * (24 - 12 + 1) + 12; i++)
    {
      for(let x = 0; x < width; x += tile)
      {
        for(let y = 0; y < height; y += tile)
        {
          if(fxrand() < 0.2)
          {
            buffer.line(x, y + tile, x + tile, y)
          }
          else if(fxrand() > 0.2 && fxrand() < 0.4)
          {
            buffer.line(x, y, x + tile, y + tile)
          }
          else if(fxrand() > 0.6 && fxrand() < 0.8)
          {
            buffer.line(x + tile / 2, y, x + tile / 2, y + tile);
          }
          else if(fxrand() > 0.8)
          {
            buffer.line(x, y + tile / 2, x + tile, y + tile / 2);
          }
        }
      }
    }
     buffer.pop();
     back = 1;
  }
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
  buffer.clear()
  frameCount = 0;
  init()
  loop()
}
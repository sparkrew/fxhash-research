function setup() {
  createCanvas(1500, 1500)
  colorMode(HSB)
  noLoop()
  angleMode(DEGREES)
}

function draw() {
  var bb = map(fxrand(),0,1,0,70)
  background(0,0,bb)
  
  hashedBox(0,0,width,height,10,60,0.25, 0, 0, bb+30, 0.5)
  hashedBox(0,0,width,height,30,20,0.25, 0, 0, bb+30, 0.5)
  push()
    rotate(90)
    translate(0,-height)
    hashedBox(0,0,height,width,20,55,0.25,0,0,bb+30,0.5)
    hashedBox(0,0,height,width,5,30,0.25,0,0,bb+30,0.5)
  pop()

  
  var notUpDown = fxrand()
  var col = round(map(fxrand(),0,1,4,7))
  var rows = round(map(fxrand(),0,1,4,7))
  var spacing = 15
  var colorRange = floor(map(fxrand(),0,1,80,130))
  var colorPicker = floor(map(fxrand(),0,1,0,6.99))
  var colors = [0, 20, 80, 100, 140, 170, 230]
  var color =  colors[colorPicker]
  var boxSizeWidth = 0
  if(notUpDown < 0.2){boxSizeWidth = (width-100-(spacing*(col-1)))/col} 
  if(notUpDown >= 0.2){boxSizeWidth = (width-100-((spacing/2*rows-spacing)*col))/col}
  var boxSizeHeight = 0
  if(notUpDown < 0.2){boxSizeHeight = (height-100-(spacing*(rows-1)))/rows} 
  if(notUpDown >= 0.2){boxSizeHeight = (height-100-((spacing/2*col+spacing/4)*rows))/rows}
  var UpOrDown = round(fxrand())
  var boxTranslateInnerHeight = 0
  var boxTranslateInnerWidth = 0
  var boxTranslateHeight = 0
  var boxTranslateWidth = 0
  
  if(notUpDown < 0.2)
    {
      boxTranslateInnerHeight = spacing+boxSizeHeight
      boxTranslateInnerWidth = 0
      boxTranslateHeight = -(boxSizeHeight+spacing)
      boxTranslateWidth = boxSizeWidth+spacing
    }
  if(UpOrDown == 1 && notUpDown >= 0.2)
    {
      boxTranslateInnerHeight = -spacing-boxSizeHeight
      boxTranslateInnerWidth = spacing/2
      boxTranslateHeight = (spacing/2+boxSizeHeight)
      boxTranslateWidth = boxSizeWidth-spacing
    }
  if(UpOrDown == 0 && notUpDown >= 0.2)
    {
      boxTranslateInnerHeight = spacing+boxSizeHeight
      boxTranslateInnerWidth = spacing/2
      boxTranslateHeight = -(spacing/2+boxSizeHeight)
      boxTranslateWidth = boxSizeWidth-spacing
    }

      if(UpOrDown ==1&&notUpDown >=0.2){translate(50,height-boxSizeHeight-50)}
      if(UpOrDown ==0||notUpDown < 0.2){translate(50,50)}
      for(var c3 = 0; c3<col; c3++)
        {
          for(var r3 = 0; r3<rows; r3++)
            {
              var bxs = map(fxrand(),0,1,15,50)
              var bxa = map(fxrand(),0,1,5,70)
              var bxlw = map(fxrand(),0,1,2,7)
              var bxhu = map(fxrand(),0,1,color,color+colorRange)
              var bxsat = map(fxrand(),0,1,60,90)
              var bxbgt = map(fxrand(),0,1,60,90)
              
              var rotater = fxrand()
              if(rotater >= 0.6)
                {
                   hashedBox(0,0,boxSizeWidth,boxSizeHeight,bxs,bxa,bxlw,bxhu,bxsat,bxbgt,1)
                  push()
                  rotate(90)
                  translate(0,-boxSizeWidth)
                  hashedBox(0,0,boxSizeHeight,boxSizeWidth,bxs,bxa,bxlw,bxhu,bxsat,bxbgt,1)
                  translate(0,boxSizeWidth)
                  rotate(-90)
                  pop()
                }
              
              if(rotater < 0.6 && rotater >= 0.3)
                {
                  push()
                  rotate(90)
                  translate(0,-boxSizeWidth)
                  hashedBox(0,0,boxSizeHeight,boxSizeWidth,bxs,bxa,bxlw,bxhu,bxsat,bxbgt,1)
                  translate(0,boxSizeWidth)
                  rotate(-90)
                  pop()
                }
              
              if(rotater < 0.3)
                {
 hashedBox(0,0,boxSizeWidth,boxSizeHeight,bxs,bxa,bxlw,bxhu,bxsat,bxbgt,1)
                }
              translate(boxTranslateInnerWidth,boxTranslateInnerHeight)
            }
          translate(boxTranslateWidth,boxTranslateHeight*rows)
        }
}

function hashedBox(x, y, w, h, s, a, lw, hu, sa, br, al)
{
  strokeWeight(lw)
  stroke(hu, sa, br, al)
  var lines = h/s
  var startx = x
  var starty = y
  var hypotenuse = w/cos(a)
  var opposite = sin(a)*hypotenuse
  var topHash = ((opposite)/s)
  
  //main lines
  for(var l = 0; l < lines; l++)
    {
      if(starty+opposite < h)
        {
          line(startx, starty, startx+w, starty+opposite)
          starty += s
        }
    }
  
  startx = w-(cos(a)*((opposite-s)/sin(a)))
  var starty2 = y
  
  var botHypotenuse = (h-starty) / cos(90-a)
  var botOpposite = sin(90-a)*botHypotenuse
  var bottomHash = ceil((h-starty)/s)
  var endx = botOpposite
  
  //top hash
  for(var t = 0; t < topHash; t++)
    { 
      //print((opposite))
      if(startx != x+w && (y+opposite-s) >= 0 && (y+opposite-s) <= h)
      { 
        line(startx, starty2, x+w, y+opposite-s)
        opposite -= s
        startx = w - (cos(a)*((opposite-s)/sin(a)))
      }
      
      if(startx != x+w && (y+opposite-s) >= 0 && (y+opposite-s) > h)
      {
        line(startx, starty2, x+botOpposite+((x+botOpposite)/bottomHash)+((w/topHash)* t), h)
        opposite -= s
        startx = w - (cos(a)*((opposite-s)/sin(a)))
      }
    }
  
  //bottom hash
  for(var b = 0; b < bottomHash; b++)
    {
      if(starty < h){line(x, starty, endx, h)}
      starty += s
      endx -= botOpposite - (sin(90-a) * ((h-starty) / cos(90-a)))
      botOpposite = (sin(90-a) * ((h-starty) / cos(90-a)))
    }
  
}
function setup() {
  createCanvas(1000, 1000)
  colorMode(HSB)
  noLoop()
  angleMode(DEGREES)
  pixelDensity(1)
}

function draw() {
  var shapeOptions = [3,3,3,4,4,4,4,4,4,6,6,6,8,10]
  var shape = shapeOptions[floor(map(fxrand(),0,1,0,13.99))]
  
  var orientationOptions = [0,30,45,60,90,120,135,150]
  var orientation = orientationOptions[floor(map(fxrand(),0,1,0,7.99))]
  
  var canvasMod = 1
  if(orientation == 0 || orientation == 90){canvasMod = 1.1}
  if(orientation != 0 && orientation != 90){canvasMod = 1.4}
  
  if(orientation == 150)
  {
    translate(width*1.45,height*0.75)
    rotate(150)
  }
  
  if(orientation == 135)
  {
    translate(width*1.5,height*0.5)
    rotate(135)
  }
  
  if(orientation == 120)
  {
    translate(width*1.45,height*0.25)
    rotate(120)
  }
  
  if(orientation == 0)
  {
    translate(-width*0.02,-height*0.02)
    rotate(0)
  }
  
  if(orientation == 90)
  {
    translate(width,0)
    rotate(90)
  }
  
  if(orientation == 45)
  {
    translate(width*0.5,-height*0.5)
    rotate(45)
  }
  
  if(orientation == 30)
  {
    translate(width*0.25,-height*0.5)
    rotate(30)
  }
  
  if(orientation == 60)
  {
    translate(width*0.75,-height*0.45)
    rotate(60)
  }
  
  background(0,0,90)
  noStroke()
  var outerAmtOptions = [5,6,7,8,10,12]
  var outerAmt = outerAmtOptions[floor(map(fxrand(),0,1,0,5.99))]
  var middleAmtOptions = [4,5,6]
  var middleAmt = middleAmtOptions[floor(map(fxrand(),0,1,0,2.99))]
  var innerAmtOptions = [4,5,6,7]
  var innerAmt = innerAmtOptions[floor(map(fxrand(),0,1,0,3.99))]

  var secondaryOuterAmtOptions = [3,4,5]
  var secondaryOuterAmt = secondaryOuterAmtOptions[floor(map(fxrand(),0,1,0,2.99))]
  var secondaryInnerAmtOptions = [3,4,5]
  var secondaryInnerAmt = secondaryInnerAmtOptions[floor(map(fxrand(),0,1,0,2.99))]
  
  var orderOptionOptions = [0,1,2,3,4,5]
  var orderOption = orderOptionOptions[floor(map(fxrand(),0,1,0,5.99))]
  var secondOrderOptionOptions = [0,1]
  var secondOrderOption = secondOrderOptionOptions[floor(map(fxrand(),0,1,0,1.99))]
  
  var noiseOptionOptions = [1,2,3]
  var noiseOption = noiseOptionOptions[floor(map(fxrand(),0,1,0,2.99))]
  var blendOptionOptions = [0,1,2,3,4,5]
  var blendOption = blendOptionOptions[floor(map(fxrand(),0,1,0,5.99))]
  
  var hueRangeOptions = [60,80,120,180,260]
  var hueRange = hueRangeOptions[floor(map(fxrand(),0,1,0,4.99))]
  var startHue = floor(map(fxrand(),0,1,0,360-hueRange))
  var secondaryHue = floor((startHue + map(fxrand(),0,1,120,360)) % 180)
  var secondaryHueRange = floor(map(fxrand(),0,1,120,360-secondaryHue))
  
  var brightnessRangeOptions = [30,40,50,60,70,80,90]
  var brightnessRange = brightnessRangeOptions[floor(map(fxrand(),0,1,0,6.99))]
  var brightnessStart = floor(map(fxrand(),0,1,0,100-brightnessRange))
  
  var saturationRangeOptions = [30,40,50,60,70,80,90]
  var saturationRange = saturationRangeOptions[floor(map(fxrand(),0,1,0,6.99))]
  var saturationStart = floor(map(fxrand(),0,1,0,100-saturationRange))
  
  var secondaryNoiseAmtOptions = [0.1,0.15,0.2,0.25,0.3]
  var secondaryNoiseAmt = secondaryNoiseAmtOptions[floor(map(fxrand(),0,1,0,4.99))]
  var secondaryNoiseVarOptions = [1,1.05,1.1,1.15]
  var secondaryNoiseVar = secondaryNoiseVarOptions[floor(map(fxrand(),0,1,0,3.99))]
  
  var sizeShiftAmtOptions = [3,4,5,6,7,8]
  var sizeShiftAmt = sizeShiftAmtOptions[floor(map(fxrand(),0,1,0,5.99))]
  var sizeRangeOptions = [1,1.25,1.5,2]
  var sizeRange = sizeRangeOptions[floor(map(fxrand(),0,1,0,3.99))]
  
  var rotAmtRangeOptions = [0,15,20,25,30,35,40,45,50,60,120,180,360]
  var rotAmtRange = rotAmtRangeOptions[floor(map(fxrand(),0,1,0,12.99))]
  
  var cornerRoundingOptions = [0.1,0.15,0.2,0.25]
  var cornerRounding = cornerRoundingOptions[floor(map(fxrand(),0,1,0,3.99))]
  var cornerRoundingRangeOptions = [1,1.25,1.5,2]
  var cornerRoundingRange = cornerRoundingRangeOptions[floor(map(fxrand(),0,1,0,3.99))]
  
  var trailRepullOptions = [1,1.1,1.2,1.3,1.5,2]
  var trailRepull = trailRepullOptions[floor(map(fxrand(),0,1,0,5.99))]
  
  var noSecondaryLayer = fxrand()
  
  var noiseRangeOptions = [1,2,20,50,100,1000]
  var noiseRange = noiseRangeOptions[floor(map(fxrand(),0,1,0,5.99))]
  var noiseVarOptions = [1,2,3]
  var noiseVar = noiseVarOptions[floor(map(fxrand(),0,1,0,2.99))]
  var noiseAmtOptions = [0.5,0.75,1,1.25,1.5]
  var noiseAmt = noiseAmtOptions[floor(map(fxrand(),0,1,0,4.99))]
  
  var rows = outerAmt
  var columns = outerAmt
  var rows2 = middleAmt
  var columns2 = middleAmt
  var rows3 = innerAmt
  var columns3 = innerAmt
  var rows4 = secondaryOuterAmt
  var columns4 = secondaryOuterAmt
  var rows5 = secondaryInnerAmt
  var columns5 = secondaryInnerAmt
  
  var noiseInc = (1*noiseAmt)/outerAmt
  var noiseInc2 = (1*noiseAmt)/middleAmt
  var noiseInc3 = (1*noiseAmt)/innerAmt
  var noiseInc4 = (0.125*noiseAmt)/secondaryOuterAmt
  var noiseInc5 = (0.125*noiseAmt)/secondaryInnerAmt
  var noiseSeedInc = fxrand() * 100000

  push()
  for(var r = 0; r < rows; r++)
    {
      push()
      for(var c = 0; c < columns; c++)
        {
          push()
          for(var r2 = 0; r2 < rows2; r2++)
            {
              push()
              for(var c2 = 0; c2 < columns2; c2++)
                {
                  push()
                  for(var r3 = 0; r3 < rows3; r3++)
                    {
                      push()
                      for(var c3 = 0; c3 < columns3; c3++)
                        {
                          noiseSeed(noiseSeedInc)
                          
                          //HSB
                          if(orderOption == 0){fill(map(noise(r * noiseInc, c * noiseInc),0,1,startHue,startHue+hueRange),map(noise(r2 * noiseInc2, c2 * noiseInc2),0,1,saturationStart,saturationStart+saturationRange),map(noise(r3 * noiseInc3, c3 * noiseInc3),0,1,brightnessStart,brightnessStart+brightnessRange))}
                          
                          //SHB
                          if(orderOption == 1){fill(map(noise(r2 * noiseInc2, c2 * noiseInc),0,1,startHue,startHue+hueRange),map(noise(r * noiseInc, c * noiseInc),0,1,saturationStart,saturationStart+saturationRange),map(noise(r3 * noiseInc3, c3 * noiseInc3),0,1,brightnessStart,brightnessStart+brightnessRange))}
                          
                          //BHS
                          if(orderOption == 2){fill(map(noise(r2 * noiseInc2, c2 * noiseInc2),0,1,startHue,startHue+hueRange),map(noise(r3 * noiseInc3, c3 * noiseInc3),0,1,saturationStart,saturationStart+saturationRange),map(noise(r * noiseInc, c * noiseInc),0,1,brightnessStart,brightnessStart+brightnessRange))}
                          
                          //HBS
                          if(orderOption == 3){fill(map(noise(r * noiseInc, c * noiseInc),0,1,startHue,startHue+hueRange),map(noise(r3 * noiseInc3, c3 * noiseInc3),0,1,saturationStart,saturationStart+saturationRange),map(noise(r2 * noiseInc2, c2 * noiseInc2),0,1,brightnessStart,brightnessStart+brightnessRange))}
                          
                          //BSH
                          if(orderOption == 4){fill(map(noise(r3 * noiseInc3, c3 * noiseInc3),0,1,startHue,startHue+hueRange),map(noise(r2 * noiseInc2, c2 * noiseInc2),0,1,saturationStart,saturationStart+saturationRange),map(noise(r * noiseInc, c * noiseInc),0,1,brightnessStart,brightnessStart+brightnessRange))}
                          
                          //SBH
                          if(orderOption == 5){fill(map(noise(r3 * noiseInc3, c3 * noiseInc3),0,1,startHue,startHue+hueRange),map(noise(r * noiseInc, c * noiseInc),0,1,saturationStart,saturationStart+saturationRange),map(noise(r2 * noiseInc2, c2 * noiseInc2),0,1,brightnessStart,brightnessStart+brightnessRange))}
                            var sizeShift = map(fxrand(),0,1,sizeShiftAmt,sizeShiftAmt*sizeRange)
                            var rotAmt = map(fxrand(),0,1,-rotAmtRange,rotAmtRange)
                            rotate(rotAmt)
                            if(shape != 4){polygon(0,0,((((width*canvasMod)/columns3) / columns2) / columns)*1.1*sizeShift,shape)}
                            if(shape == 4){square(0,0,((((width*canvasMod)/columns3) / columns2) / columns)*1.1*sizeShift,((((width*canvasMod)/columns3) / columns2) / columns)*(sizeShift*map(fxrand(),0,1,cornerRounding,cornerRounding*cornerRoundingRange)))}
                            rotate(-rotAmt/trailRepull)
                          
                          
                            translate(((((width*canvasMod)/columns3) / columns2) / columns),0)
                          if(noiseOption == 0){noiseSeedInc += ceil(map(fxrand(),0,1,1*noiseRange,noiseVar*noiseRange))}
                        }
                      pop()
                      translate(0,(((width*canvasMod)/rows) / rows2) / rows3)
                      if(noiseOption == 1){noiseSeedInc += ceil(map(fxrand(),0,1,1*noiseRange,noiseVar*noiseRange))}
                    }
                  pop()
                  translate(((width*canvasMod)/columns) / columns2,0)
                  if(noiseOption == 2){noiseSeedInc += ceil(map(fxrand(),0,1,1*noiseRange,noiseVar*noiseRange))}
                }
              pop()
              translate(0,((height*canvasMod)/rows) / rows2)
             if(noiseOption == 3){noiseSeedInc += ceil(map(fxrand(),0,1,1*noiseRange,noiseVar*noiseRange))}
            }
          pop()
          translate((width*canvasMod)/columns,0)
        }
      pop()
      translate(0,(height*canvasMod)/rows)
    }
  pop()
  
  if(blendOption == 0){blendMode(DIFFERENCE)}
  if(blendOption == 1){blendMode(OVERLAY)}
  if(blendOption == 2){blendMode(BURN)}
  if(blendOption == 3){blendMode(HARD_LIGHT)}
  if(blendOption == 4){blendMode(DARKEST)}
  if(blendOption == 5){blendMode(DODGE)}
  push()
  for(var r4 = 0; r4 < rows4; r4++)
    {
      push()
      for(var c4 = 0; c4 < columns4; c4++)
        {
          push()
          for(var r5 = 0; r5 < rows5; r5++)
            {
              push()
              for(var c5 = 0; c5 < columns5; c5++)
                {
                  var blrd = fxrand()
                  noiseSeed(noiseSeedInc)
                          
                  //HB
                  if(secondOrderOption == 0){fill(map(noise(r4 * noiseInc4, c4 * noiseInc4),0,1,secondaryHue,secondaryHue + secondaryHueRange),100,map(noise(r5 * noiseInc5, c5 * noiseInc5),0,1,60,100),map(fxrand(),0,1,secondaryNoiseAmt,secondaryNoiseAmt*secondaryNoiseVar))}
                  
                  //BH
                  if(secondOrderOption == 1){fill(map(noise(r5 * noiseInc5, c5 * noiseInc5),0,1,secondaryHue,secondaryHue + secondaryHueRange),100,map(noise(r4 * noiseInc4, c4 * noiseInc4),0,1,60,100),map(fxrand(),0,1,secondaryNoiseAmt,secondaryNoiseAmt*secondaryNoiseVar))}
                  if(noSecondaryLayer > 0.15){square(0,0,(((width*canvasMod)/columns4) / columns5)*1.00)}
                  translate((((width*canvasMod)/columns4) / columns5)*1.00,0)
                }
              pop()
              translate(0,((height*canvasMod)/rows4) / rows5)
            }
          pop()
          translate((width*canvasMod)/columns4,0)
        }
      pop()
      translate(0,(height*canvasMod)/rows4)
    }
  pop()
  
  
  loadPixels()
  for(var y = 0; y < height; y++)
    {
      for(var x = 0; x < width; x++)
        {  
          var layers = map(fxrand(),0,1,2,4)
          
          var pixelIndex = (x+y*width)*4
          var avgRVal = 0
          var avgGVal = 0
          var avgBVal = 0
          var avgAVal = 0
          
          for(var l = 0; l < layers; l++)
            {
              var pixelIndexLeftNeighbor = ((x-l)+y*width)*4
              var pixelIndexRightNeighbor = ((x+l)+y*width)*4
              var pixelIndexTopNeighbor = (x+(y-l)*width)*4
              var pixelIndexBottomNeighbor = (x+(y+l)*width)*4
              
              var pixelIndexLeftUpperNeighbor = ((x-l)+(y-1)*width)*4
              var pixelIndexLeftBottomNeighbor = ((x-l)+(y+1)*width)*4
              var pixelIndexRightUpperNeighbor = ((x+l)+(y-1)*width)*4
              var pixelIndexRightBottomNeighbor = ((x+l)+(y+1)*width)*4

              avgRVal += (pixels[pixelIndexLeftUpperNeighbor+0] + pixels[pixelIndexRightBottomNeighbor+0] + pixels[pixelIndex+0]) / 3
              avgGVal += (pixels[pixelIndexLeftUpperNeighbor+1] + pixels[pixelIndexRightBottomNeighbor+1] + pixels[pixelIndex+1]) / 3
              avgBVal += (pixels[pixelIndexLeftUpperNeighbor+2] + pixels[pixelIndexRightBottomNeighbor+2] + pixels[pixelIndex+2]) / 3
              avgAVal += (pixels[pixelIndexLeftUpperNeighbor+3] + pixels[pixelIndexRightBottomNeighbor+3] + pixels[pixelIndex+3]) / 3
            }
          
          avgRVal = avgRVal / layers
          avgGVal = avgGVal / layers
          avgBVal = avgBVal / layers
          avgAVal = avgAVal / layers
          
          pixels[pixelIndex+0] = avgRVal
          pixels[pixelIndex+1] = avgGVal
          pixels[pixelIndex+2] = avgBVal
          pixels[pixelIndex+3] = avgAVal
          
          avgRVal = 0
          avgGVal = 0
          avgBVal = 0
          avgAVal = 0
        }
    }
  
  
  updatePixels()
  
}


function polygon(x, y, radius, npoints) {
  let angle = 360 / npoints;
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
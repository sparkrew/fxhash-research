function customEllipse(gb, _startVector, _color, _alpha, _strokeSize, _radius, _noiseFrequency, _noiseAmp, _density, _colorEffect) {
  let startVector = _startVector
  let strokeSize = _strokeSize
  let noiseFrequency = _noiseFrequency // controls the frequncy of the noise
  let noiseAmp = _noiseAmp
  let density = _density
  let c = _color
  c.setAlpha(_alpha)
  let colorEffect = _colorEffect === undefined ? "variable" : _colorEffect

  let h = hue(_color)
  let s = saturation(_color)
  let b = brightness(_color)
  let dimMin = 0.75
  let dimMax = 0.75
  switch(colorEffect) {
    case "solid":
      c = color(h,s * random(1,1),b * random(1,1))
      break;
    case "variable":
      c = color(h, s * random(dimMin, dimMax), b * random(dimMin, dimMax))
      break;
  }
  c.setAlpha(_alpha)
  
  gb.push();
  gb.translate(startVector.x, startVector.y)
  gb.stroke(c)
  gb.strokeWeight(strokeSize)
  gb.noFill()
  
  // let maxRadius = canvasSize * 0.0065
  let offMax = _noiseFrequency / _radius
  let concentricCircleCount = _radius / strokeSize * _density

  for (let radius = 0; radius <= _radius; radius += _radius / concentricCircleCount) {    
    let x = sin(0) * radius
    let y = cos(0) * radius

    gb.beginShape()
    // mainBuffer.curveVertex(x, y)
    
    let t = random(TWO_PI)
    let zoff = random(1000)
    for (let theta = 0; theta <= TWO_PI; theta+=TWO_PI/(TWO_PI * 10)) {
      let xoff = map(sin(theta + t) * radius,-1,1,0,offMax)
      let yoff = map(cos(theta + t) * radius,-1,1,0,offMax)
      let r = map(noise(xoff, yoff, zoff), 0, 1, radius * (1 - noiseAmp), radius * (1 + noiseAmp))
      // r=radius
      x = sin(theta) * r
      y = cos(theta) * r
      
      gb.vertex(x, y)
    }
    
    gb.endShape(CLOSE)    
  }
  
  gb.pop()
}

function customLinebySquiggles(gb, _v1, _v2, _color, _alpha, _strokeSize, _canvasSize, _segmentCount, _squiggleXDirection , _squiggleYDirection, _density, _colorEffect) {
  let lineDist = (_v1.dist(_v2))
  let lineDistPercentofCanvas = lineDist / _canvasSize
  let totalSquiggleCount = ceil(50 * lineDistPercentofCanvas)
  //shorter lines should have fewer segments but more densely packed squiggles
  // let newSquiggleCount = lineDist * 0.15
  _density = _density === undefined ? 0.25 : _density
  let newSquiggleCount = ceil(_density * round((lineDist / (canvasMinSize)), 8) * 1000)
  let newSegmentCount = _segmentCount

  if (frameCount == debugFrame && printDebugs == 1 && debugLineCt < 1000) {    
    print(debugLineCt + " customLinebySquiggles 1 (" + frameCount + "): " + random().toFixed(2), _density, (lineDist / canvasMinSize)); debugLineCt++;
  }


  // totalSquiggleCount = 

  for (let squiggleCount = 0, breakPoint = 0; squiggleCount <= newSquiggleCount && breakPoint < 9000; squiggleCount++, breakPoint++) {
    let startVector = p5.Vector.lerp(_v1, _v2, (squiggleCount/newSquiggleCount))
    
    if (isWithinBounds(startVector.x, startVector.y, 0, outputWidth, 0, outputHeight)) {

      if (frameCount == debugFrame && printDebugs == 1 && debugLineCt < 1000) {    
        print(debugLineCt + " customLinebySquiggles pre-squiggle (" + frameCount + "): " + random().toFixed(2), newSquiggleCount); debugLineCt++;
      }

      squiggle(gb, _color, _alpha, _strokeSize, _canvasSize, startVector, newSegmentCount, _squiggleXDirection , _squiggleYDirection, _colorEffect)
      
      if (frameCount == debugFrame && printDebugs == 1 && debugLineCt < 1000) {    
        print(debugLineCt + " customLinebySquiggles post-squiggle (" + frameCount + "): " + random().toFixed(2)); debugLineCt++;
      }
    }
  }
}

function squiggle(gb, _color, _alpha, _strokeSize, _canvasSize, startVector, _totalSquiggleSegmentCount, prefx, prefy, _colorEffect) {
  let xNoise = random(100)
  let yNoise = random(100)
  let offInc = random(0.01, 3.8)
  offInc = 0.1 //debug
  let newSegmentLen = 0.0075 * _canvasSize
  let colorEffect = _colorEffect === undefined ? "variable" : _colorEffect
  
  let h = hue(_color)
  let s = saturation(_color)
  let b = brightness(_color)
  let alpha = _alpha
  _color.setAlpha(alpha)
  let color2 = color(h,s * random(0.2,1),b * random(0.2,1))

  let dimMin = 0.5
  let dimMax = 1.5
  let dimAvg = (dimMin + dimMax) / 2
  switch(colorEffect) {
    case "solid":
      color2 = color(h,s * random(1,1),b * random(1,1))
      break;
    case "variable":
      color2 = color(h,s * random(dimMin, dimMax),b * random(dimMin, dimMax))
      break;
  }
  color2.setAlpha(alpha)

  // let xoff = 0.01 * _canvasSize
  // let yoff = 0.01 * _canvasSize 
  
  let rotationAmount = random(-PI, PI)
  let previousHeading = PI * 0.5
  let currentVector = startVector.copy()
  angleScopeMax = (PI)
  angleScopeMin = random(0.25, 0.5) * angleScopeMax
  angleScope = random(-angleScopeMax, angleScopeMax)
  
  gb.push()
  gb.noFill()
  gb.strokeWeight(_strokeSize)
  // print(_color,color2)
  gb.stroke(color2);
  gb.beginShape()
  gb.curveVertex(currentVector.x, currentVector.y)
  for (let squiggleSegmentCount = 0; squiggleSegmentCount < _totalSquiggleSegmentCount; squiggleSegmentCount++) {
    // let prevxoff = xoff
    // let prevyoff = yoff
    if (random()>1.5) {
      offInc = random(0.1, 3.8)
      // rotationAmount *= 1
    }
    if (random()>0.75) {
      xNoise = random(100)
      // offInc = random(0.1, 1)
      // angleScopeMax = random(PI * 0.1)
      // angleScopeMin = random(0.25, 0.75) * angleScopeMax
      // angleScope = random(-angleScopeMax, angleScopeMax)
      rotationAmount *= -1
      
      gb.push()
      gb.noFill()
      gb.strokeWeight(_strokeSize*2)
      gb.stroke(color("white"));
      // gb.point(currentVector.x, currentVector.y)
      gb.pop()
    }
    rotationAmount = rotationAmount + map(noise(xNoise), 0, 1, -angleScope, angleScope)
    let newSegment = p5.Vector.fromAngle(previousHeading + rotationAmount, newSegmentLen)
    let endVector = p5.Vector.add(currentVector, newSegment)
    // let newHeading = p5.Vector.sub(currentVector, endVector).heading()
    previousHeading = newSegment.heading()

    // xoff += 0.01 * _canvasSize
    // yoff += 0.01 * _canvasSize
    
    // gb.push()
    // gb.noFill()
    // gb.strokeWeight(_strokeSize)
    // gb.stroke(_color);
    // gb.line(currentVector.x, currentVector.y, endVector.x, endVector.y)
    // gb.pop()
    
    gb.curveVertex(currentVector.x, currentVector.y)
    
    xNoise+=offInc
    yNoise+=offInc
    currentVector = endVector.copy()
    currentVector.x += (prefx * _canvasSize)
    currentVector.y += (prefy * _canvasSize)
  }
  gb.curveVertex(currentVector.x, currentVector.y)
  gb.endShape()
  gb.pop()
}

function squiggleOLD(gb, _color, _alpha, _strokeSize, _canvasSize, startVector, _totalSquiggleSegmentCount, prefx, prefy) {
  let xNoise = random(100)
  let yNoise = random(100)
  let offInc = random(0.1, 0.8)
  
  // let cHue = hue(_color)
  // let cSaturation = saturation(_color)
  // let cBrightness = brightness(_color)
  // let alpha = _alpha
  _color.setAlpha(_alpha)

  let xoff = map(noise(xNoise), 0, 1, -0.01, 0.01) * _canvasSize
  let yoff = map(noise(yNoise), 0, 1, -0.01, 0.01) * _canvasSize 
  
  for (let squiggleSegmentCount = 0; squiggleSegmentCount < _totalSquiggleSegmentCount; squiggleSegmentCount++) {

    let prevxoff = xoff
    let prevyoff = yoff

    xoff += map(noise(xNoise), 0, 1, -0.01, 0.01) * _canvasSize + (random() * prefx * _canvasSize)
    yoff += map(noise(yNoise), 0, 1, -0.01, 0.01) * _canvasSize + (random() * prefy * _canvasSize)

    // print(startVector.x + prevxoff)
    gb.push()
    gb.noFill()
    gb.strokeWeight(_strokeSize)
    gb.stroke(_color);
    // print("sketch.js -> steps -> strokeWeight = " + _strokeSize.toFixed(1))
    //  customLinebyCrosses(qubesBuffer, _v1, _v2, drawConsistency, customDrawSegmentLimits, c, alpha, strokeSize * 1, outputWidth, outputHeight, "perfect", humanDrawErrorFactor, spaceBetweenPercStep/3)
    gb.line(startVector.x + prevxoff, startVector.y + prevyoff, startVector.x + xoff, startVector.y + yoff)
    // gb.strokeWeight(10)
    // gb.point(startVector.x , startVector.y, )

    gb.pop()
    xNoise+=offInc
    yNoise+=offInc
  }
}

// Provide a way that the space mark Lenght is not just the same as _distBetweenMarks
function customLinebyCrosses(gb, _v1, _v2, _doffInc, _percStep, _color, _alpha, _strokeSize, _outputWidth, _outputHeight, _drawType, _drawErrorRate, _distBetweenMarks, _lenghtOfMarks, _colorEffect) {
// compare output when drawing a perfect line between using perfect hashes vs just drawing the whole line in one shot
  let drawType = _drawType === undefined ? "hash" : _drawType
  //let drawType = "continuous"
  let doff = random(100000)
  let previousPlotPoint
  let ow = _outputWidth === undefined ? 1 : _outputWidth
  let oh = _outputHeight === undefined ? 1 : _outputHeight
  let lineHeading = p5.Vector.sub(_v2, _v1).heading()
  let slashErroRate = drawType == "hash" ? 0.1 : 0 
  let stopErrorRate = drawType == "hash" ? 0.05 : 0
  let drawErrorRate = drawType == "hash" ? _drawErrorRate : 0
  let colorEffect = _colorEffect === undefined ? "solid" : _colorEffect

  let secondCrossProbability 
  switch (featureText_humanDrawErrorFactor) {
    case "Skilled":
      secondCrossProbability = 0.33
      break;
    case "Amateur":
      secondCrossProbability = 0.45
      break;
    case "Wild":
      secondCrossProbability = 0.65
      break;
    default:
      secondCrossProbability = 0.5
  }

  let secondCrossStrokeSizeMaxMultiplier
  switch (featureText_humanDrawErrorFactor) {
    case "Skilled":
      secondCrossStrokeSizeMaxMultiplier = 1.33
      break;
    case "Amateur":
      secondCrossStrokeSizeMaxMultiplier = 2
      break;
    case "Wild":
      secondCrossStrokeSizeMaxMultiplier = 3
      break;
    default:
      secondCrossStrokeSizeMaxMultiplier = 2
  }
  
  // let cHue = hue(_color)
  // let cSaturation = saturation(_color)
  // let cBrightness = brightness(_color)
  // let alpha = _alpha
  _color.setAlpha(_alpha)

  

  let h = hue(_color)
  let s = saturation(_color)
  let b = brightness(_color)
  let dimMin = 0.5
  let dimMax = 1.0
  let dimAvg = (dimMin + dimMax) / 2
  let n = map(noise(i * 0.05), 0, 1, dimMin, dimMax)
  switch(colorEffect) {
    case "solid":
      color2 = color(h, s * 1, b * 1)
      break;
    case "variable":
      color2 = color(h, s * n, b * n)
      break;
    case "dim":
      color2 = color(h, s * dimAvg, b * dimAvg)
      break;
  }
  _color.setAlpha(alpha)
    
    gb.push()
    gb.stroke(255)
    // gb.ellipse(_v2.x, _v2.y, 5, 5)
    // gb.line(_v1.x, _v1.y, _v2.x, _v2.y)
    gb.pop()
  
  
  previousPlotPoint = _v1.copy()
  
  let actualStopDistance = _v1.dist(_v2)  //-_distBetweenMarks
  let actualStartPerc = _distBetweenMarks + (_distBetweenMarks * slashErroRate * random([-1, 1]))
  let lineMidPoint = p5.Vector.lerp(_v1, _v2, 0.5)
  for (let i=.001, inc = _distBetweenMarks; i <= actualStopDistance; inc = _distBetweenMarks + (_distBetweenMarks * slashErroRate * random([-1, 1])), i += inc) {

    actualStartPerc = i + (_distBetweenMarks * slashErroRate * random([-1, 1]))
    let drawVector = p5.Vector.fromAngle(lineHeading, inc)
    let offsetErrorFactor = 0 
    let startDrawVectorOffset = 8
    let angle =PI/2
    let angle2 = PI/2 + randomSV((PI/2) * 0.1, (PI/2) * 0.4)
    let markLength = _lenghtOfMarks + (_lenghtOfMarks * slashErroRate * random([-1, 1]))
    let markLength2 = _lenghtOfMarks + (_lenghtOfMarks * slashErroRate * random([-1, 1]))
    let startDrawVector = p5.Vector.fromAngle(lineHeading + angle, markLength)
    let endDrawVector = p5.Vector.fromAngle(lineHeading - angle, markLength)
    let endDrawVector2 = p5.Vector.fromAngle(lineHeading - angle2, markLength2)
    let perfectStartPoint = p5.Vector.lerp(_v1, _v2, (min(actualStopDistance, actualStartPerc)/actualStopDistance))
    let perfectEndPoint = p5.Vector.lerp(_v1, _v2, ((actualStartPerc + inc))/actualStopDistance)
    let midPoint = p5.Vector.lerp(perfectStartPoint, perfectEndPoint, 0.5)
    let swingStartPoint = createVector(midPoint.x - (cos(angle - lineHeading) * markLength * 0.5), midPoint.y + (sin(angle - lineHeading) * markLength * 0.5))
    let swingEndPoint = createVector(midPoint.x + (cos(angle - lineHeading) * markLength * 0.5), midPoint.y - (sin(angle - lineHeading) * markLength * 0.5))
    let swingEndPoint2 = createVector(midPoint.x + (cos(angle2 - lineHeading) * markLength2 * 0.5), midPoint.y - (sin(angle2 - lineHeading) * markLength2 * 0.5))
    // this was a bug but so good looking, lets try to add it .. debug
    // let perfectStartPoint = p5.Vector.lerp(_v1, _v2, (min(actualStopDistance, actualStartPerc)/actualStopDistance))
    // let perfectEndPoint = p5.Vector.lerp(_v1, _v2, (max(actualStopDistance, (actualStartPerc + inc))/actualStopDistance))
    let hashStartPoint = p5.Vector.add(perfectStartPoint, startDrawVector)
    let hashEndPoint = p5.Vector.add(perfectEndPoint, endDrawVector)
    let hashEndPoint2 = p5.Vector.add(perfectEndPoint, endDrawVector2)
    // let perfectHeadingFromOffset = p5.Vector.sub(perfectEndPoint, hashStartPoint).heading()
    //  deviate more from perfectHeadingFromOffset when further from end points
    //rotate less from the start and near the end
    // drawVector.rotate(random() * drawErrorRate * random([-1,1]))
    // print(startDrawVectorOffset)
    // drawVector.rotate(perfectHeadingFromOffset - lineHeading)
    
    let startPoint
    let endPoint
        
    if (drawType == "hash") {
      startPoint = swingStartPoint.copy()
      // endPoint = p5.Vector.add(startPoint, drawVector)
      endPoint = swingEndPoint.copy()
      endPoint2 = swingEndPoint2.copy()
    } else  {
      startPoint = hashStartPoint.copy()
      endPoint = hashEndPoint.copy()
      endPoint2 = hashEndPoint2.copy()
    }
    
    gb.push()
    gb.fill(0,255,0,150)
    // gb.ellipse(perfectStartPoint.x, perfectStartPoint.y, 5, 5)
    gb.fill(255,0,0,150)
    // gb.ellipse(perfectEndPoint.x, perfectEndPoint.y, 8, 15)
    gb.pop()
    
    if (drawType == "perfect" && _v1.dist(_v2) < _v1.dist(endPoint)) {
      endPoint = hashEndPoint.copy()
    }
    
    if (isWithinBounds(startPoint.x, startPoint.y, 0, outputWidth, 0, outputHeight) || isWithinBounds(endPoint.x, endPoint.y, 0, outputWidth, 0, outputHeight)) {
      gb.push();
      gb.stroke(_color);
      let csize = map(noise(doff), 0, 1, _strokeSize, _strokeSize * 2.5)
      gb.strokeWeight(csize * 0.5)
      gb.noFill();
      // gb.line(startPoint.x, startPoint.y, endPoint.x, endPoint.y)
      // gb.ellipse(perfectStartPoint.x, perfectStartPoint.y, inc * random(0.75, 0.9), inc * random(0.75, 0.9))
      // gb.textSize(inc * random(0.5, 0.9), inc * random(0.5, 0.9))
      // gb.text("---", perfectStartPoint.x, perfectStartPoint.y)
      customLine(gb, startPoint, endPoint, _doffInc, _percStep, _color, _alpha, _strokeSize, _outputWidth, _outputHeight, _drawType, _drawErrorRate, undefined, undefined, colorEffect)
      if (random() < secondCrossProbability) {
        customLine(gb, startPoint, endPoint2, _doffInc, _percStep, _color, _alpha, _strokeSize * random(1, secondCrossStrokeSizeMaxMultiplier), _outputWidth, _outputHeight, _drawType, _drawErrorRate, undefined, undefined, colorEffect)
      }
      customLine(gb, startPoint, endPoint, _doffInc, _percStep, _color, _alpha, _strokeSize, _outputWidth, _outputHeight, _drawType, _drawErrorRate, undefined, undefined, colorEffect)
      gb.pop();
    }
    // doff += _doffInc

    previousPlotPoint = endPoint.copy()
  }
}

function customArc(gb, _x, _y, _w, _h, _strokeSize, _doff, _color, _alpha, _arcAmount) {
  
  // let cHue = hue(_color)
  // let g = saturtion(_color)
  // let cBrightness = brightness(_color)
  // let alpha = _alpha
    _color.setAlpha(_alpha)

  //do the trig stuff to plot around a circle by arc amount

  gb.push();
  gb.stroke(_color);
  let csize = map(noise(doff), 0, 1, _strokeSize, _strokeSize * 2.5)
  gb.strokeWeight(csize)
  gb.noFill();
  // gb.line(startPoint.x, startPoint.y, endPoint.x, endPoint.y)
  // gb.ellipse(perfectStartPoint.x, perfectStartPoint.y, inc * random(0.75, 0.9), inc * random(0.75, 0.9))
  gb.textSize(inc * random(0.75, 0.9), inc * random(0.75, 0.9))
  gb.text("(", perfectStartPoint.x, perfectStartPoint.y)
  gb.pop();
}

function customLine(gb, _v1, _v2, _doffInc, _percStep, _color, _alpha, _strokeSize, _outputWidth, _outputHeight, _drawType, _drawErrorRate, _incOverlapRate, _breakOnOutofBounds, _colorEffect) {

  let shouldWeContinue = (isWithinBounds(_v1.x, _v1.y, 0, outputWidth, 0, outputHeight) || isWithinBounds(_v2.x, _v2.y, 0, outputWidth, 0, outputHeight))
  let breakOnOutofBounds = _breakOnOutofBounds === undefined ? true : false

    // stroke _strokeSize and _lineOffsetFactor must include canvas size factor
    // debug - the length of each stroke should not be a factor of how long the total line is.
    //          This means not incremeting perc2 by %, but then do I screw up dimensionlessness
    //          Each stroke should always be % of canvas  
    let drawType = _drawType === undefined ? "hash" : _drawType
    //let drawType = "continuous"
    let doff = random(100000)
    let previousPlotPoint
    let ow = _outputWidth === undefined ? 1 : _outputWidth
    let oh = _outputHeight === undefined ? 1 : _outputHeight
    let lineHeading = p5.Vector.sub(_v2, _v1).heading()
    let incOverlapRate = drawType == "hash" ? (_incOverlapRate === undefined || _incOverlapRate >=1 ? 0.66 : _incOverlapRate) : 0 
    let stopErrorRate = drawType == "hash" ? 0.05 : 0
    let drawErrorRate = drawType == "hash" ? _drawErrorRate : 0
    let colorEffect = _colorEffect === undefined ? "solid" : _colorEffect
  
    let h = hue(_color)
    let s = saturation(_color)
    let b = brightness(_color)
    let alpha = _alpha
    _color.setAlpha(alpha)
    let color2 = color(h,s * random(0.5,1),b * random(0.5,1))
    color2.setAlpha(alpha)
    previousPlotPoint = _v1.copy()
    // print("customShapes.js -> customLine() -> _strokeSize = " + _strokeSize.toFixed(1))

    
    let actualStopDistance = _v1.dist(_v2) * map(noise(doff), 0, 1, 1 - stopErrorRate, 1 + stopErrorRate)
    if (frameCount == debugFrame && printDebugs == 1) {    
      print(debugLineCt + " Custom Line 3 (" + frameCount + "): " + random().toFixed(2), actualStopDistance / canvasMinSize)
      debugLineCt++
    }
    // for (let i=.001, inc = random(_percStep.min, _percStep.max), breakCount = 0; i <= actualStopDistance + _percStep.max && breakCount < 2000 && shouldWeContinue; inc = random(_percStep.min,  _percStep.max), i += inc - (inc * incOverlapRate), breakCount++) {
    for (let i=.001, inc = random(_percStep.min, _percStep.max), breakCount = 0; i <= actualStopDistance + 0 && breakCount < 2000 && shouldWeContinue; inc = random(_percStep.min,  min(_percStep.max, actualStopDistance - i)), i += inc - (inc * incOverlapRate), breakCount++) {
      if (breakCount == 1999) {
        print(debugLineCt + " breaking: inc=" + inc + " i=" + i + " actualStopDistance="+ actualStopDistance)
        print(_v1, _v2)
      }
  
      let dimMin = 0.5
      let dimMax = 1.0
      let dimAvg = (dimMin + dimMax) / 2
      let n = map(random(), 0, 1, dimMin, dimMax) //debug, is random better than noise?
      // let n = map(noise(i * 0.05), 0, 1, dimMin, dimMax)
      switch(colorEffect) {
        case "solid":
          color2 = color(h, s * 1, b * 1)
          break;
        case "variable":
          color2 = color(h, s * n, b * n)
          break;
        case "dim":
          color2 = color(h, s * dimAvg, b * dimAvg)
          break;
      }
      
      let actualStartPerc
      if (i <= 0.001 && incOverlapRate < 0) {
        actualStartPerc = random(0, i-(inc * incOverlapRate))
      } else {
        actualStartPerc = max(0, i-(inc * incOverlapRate)) 
      }
      // let actualStartPerc = max(0, i-(inc * incOverlapRate))  //debug trying to fix negative overlaps (explosive) from starting too far from origin

      let distanceRemainingFromActualStart = actualStopDistance - actualStartPerc
      let drawVector = p5.Vector.fromAngle(lineHeading, min(inc, distanceRemainingFromActualStart))
      let offsetErrorFactor = map(drawErrorRate, 0, PI, 0, 1)
      let startDrawVectorOffset = map(min(actualStopDistance - i, actualStartPerc), 0, actualStopDistance / 2, inc * offsetErrorFactor * 0.3, inc * offsetErrorFactor)
      let startDrawVector = p5.Vector.fromAngle(lineHeading + (PI/2 * random([-1,1])), startDrawVectorOffset)
      //rotate towards the centerline
      //  calculate perfectHeadingFromOffset
      let hashStartPoint = p5.Vector.add(p5.Vector.lerp(_v1, _v2, (actualStartPerc/actualStopDistance)), startDrawVector)
      let perfectHeadingFromOffset = p5.Vector.sub(_v2, hashStartPoint).heading()
      //  deviate more from perfectHeadingFromOffset when further from end points
      //rotate less from the start and near the end
      // drawVector.rotate(random() * drawErrorRate * random([-1,1]))
      // print(startDrawVectorOffset)
      let erroredHeading = random() * random([-1,1]) * drawErrorRate * map(abs(actualStartPerc - (actualStopDistance / 2)), 0, (actualStopDistance / 2) , 1, .2)
      let ultimateHeading = perfectHeadingFromOffset +  (erroredHeading)
      drawVector.rotate(ultimateHeading - lineHeading)
      let hashEndPoint = p5.Vector.add(hashStartPoint, drawVector)
      
      let startPoint
      let endPoint
          
      if (drawType == "hash") {
        startPoint = hashStartPoint.copy()
        // endPoint = p5.Vector.add(startPoint, drawVector)
        endPoint = hashEndPoint.copy()
      } else  {
        startPoint = previousPlotPoint.copy()
        endPoint = p5.Vector.add(previousPlotPoint, drawVector)
      }
      
      if (drawType == "perfect" && _v1.dist(_v2) < _v1.dist(endPoint)) {
        endPoint = _v2.copy()
      }


      if (frameCount == debugFrame && printDebugs == 1) {    
        print(debugLineCt + " Custom Line 6 (" + frameCount + "): " + random().toFixed(2), i/canvasMinSize, actualStopDistance/canvasMinSize)
      }
      if ((isWithinBounds(startPoint.x, startPoint.y, 0, outputWidth, 0, outputHeight) || isWithinBounds(endPoint.x, endPoint.y, 0, outputWidth, 0, outputHeight)) || !breakOnOutofBounds) {
        gb.push();
        gb.stroke(color(color2));
        let csize = map(noise(doff), 0, 1, _strokeSize, _strokeSize * 1)
        // print("customShapes.js -> customLine() -> alpha = " + alpha.toFixed(1))
        gb.strokeWeight(csize)
        gb.noFill();
        gb.line(startPoint.x, startPoint.y, endPoint.x, endPoint.y)
        gb.pop();
      }
      doff += _doffInc

      // if (round(_v2.y,2) == 566.97 && round(_v2.x,2) == 103.76) {print(endPoint, _v1, _v2, hashStartPoint, inc)} //debug failed fixing of outline closure
  
      previousPlotPoint = endPoint.copy()

      if (!isWithinBounds(endPoint.x, endPoint.y, 0, outputWidth, 0, outputHeight) && breakOnOutofBounds) {
        breakCount = 200000
        
        if (frameCount == debugFrame && printDebugs == 1) {    
          print(debugLineCt + " Custom Line out of bounds (" + frameCount + "): " + random().toFixed(2))
          debugLineCt++
        }
      }
      // if(_v2.x == 103.75999999999999 && _v2.y == 838.7266666666667) {print("OL - customline()", startPoint, endPoint, _v2, i, inc, incOverlapRate, actualStopDistance, _percStep.min,  _percStep.max)}
    }
    // colorMode(HSB, 255)
    // gb.colorMode(HSB, 255)
  if (frameCount == debugFrame && printDebugs == 1) {    
    print(debugLineCt + " Custom Line END (" + frameCount + "): " + random().toFixed(2))
    debugLineCt++
  }
  }

function customLineOlder(_v1, _v2, _doffInc, _percStep, _h, _s, _b, _a, _strokeSize, _outputWidth, _outputHeight) {
  
    // stroke _strokeSize and _lineOffsetFactor must include canvas size factor
    // debug - the length of each stroke should not be a factor of how long the total line is.
    //          This means not incremeting perc2 by %, but then do I screw up dimensionlessness
    //          Each stroke should always be % of canvas
    
    let doff = random(1000)
    let plotPoint
    let previousPlotPoint
    let lineOffsetFactor = _lineOffsetFactor === undefined ? 1 : _lineOffsetFactor
    let ow = _outputWidth === undefined ? 1 : _outputWidth
    let oh = _outputHeight === undefined ? 1 : _outputHeight
    let lineHeading = p5.Vector.sub(_v2, _v1).heading()
  
    for (let i=0, inc = random(_percStep.min, _percStep.max); i <= _v1.dist(_v2) * map(noise(doff), 0, 1, 0.95, 1.05); inc = random(_percStep.min, _percStep.max), i += inc) {
      let percComplete = (i) / _v1.dist(_v2) * map(noise(doff), 0, 1, 0.95, 1.05)
      let perfectPoint = p5.Vector.lerp(_v1, _v2, percComplete)
        
      if (previousPlotPoint != undefined) {      
  
        let drawVector = p5.Vector.fromAngle(lineHeading, inc)
        drawVector.rotate(random() * (PI / 24) * random([-1,1]))
  
        plotPoint = p5.Vector.add(previousPlotPoint, drawVector)
  
        qubesBuffer.push();
        // fill(_color.h, _color.s, _color.b, alpha*3);
        // noStroke();
        qubesBuffer.stroke(_h, _s, _b, _a);
        let csize = map(noise(doff), 0, 1, _strokeSize, _strokeSize * 2.5)
        qubesBuffer.strokeWeight(csize)
        qubesBuffer.noFill();
        // let lineOffsetFactor = 0.0008 //increase for more feathering
        // let lineOffsetFactor = 0.005  * canvasFactor //increase for more feathering
        let previousPlotPointOffset = createVector(previousPlotPoint.x + (random() * ow * lineOffsetFactor * random([-1,1])), previousPlotPoint.y + (random() * oh * lineOffsetFactor * random([-1,1])))
        qubesBuffer.line(previousPlotPoint.x, previousPlotPoint.y, plotPoint.x, plotPoint.y)
        // qubesBuffer.fill(0)
        // qubesBuffer.ellipse(plotPoint.x, plotPoint.y, 2, 2)
        qubesBuffer.pop();
        doff += _doffInc
      } else {
        i -= inc
        plotPoint = perfectPoint.copy()
      }
  
      previousPlotPoint = plotPoint.copy()
    }
  }
  
  // function customPoly(gb, _vectors, _doffInc, _percStep, _color, _alpha, _strokeSize, _outputWidth, _outputHeight, _drawType, _drawErrorRate, _distBetweenMarks, _lenghtOfMarks) {
  //   for (let i = 0; i < _vectors.length - 1; i++) {
  //     //Shouldn't reference this here as this won't be usable in other projects.  Figure how to pass this feature as a param for this and other functions here debug
  //       customLinebyCrosses(gb, _vectors[i], _vectors[i+1], _doffInc, _percStep, _color, _alpha, _strokeSize, _outputWidth, _outputHeight, _drawType, _drawErrorRate, _distBetweenMarks, _lenghtOfMarks)
  //     if (featureText_drawStyle == "Slashes") {
  //       customLine(gb, _vectors[i], _vectors[i+1], _doffInc, _percStep, _color, _alpha, _strokeSize, _outputWidth, _outputHeight, _drawType, _drawErrorRate)
  //     } else {
  //     }
  //   }
  // }
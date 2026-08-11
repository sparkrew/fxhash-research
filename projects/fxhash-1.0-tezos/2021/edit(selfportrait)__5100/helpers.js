//------------------------------------------------------------------------------
function resizeLogic(img) {
  if (windowHeight - img.height < windowWidth - img.width) {
    return img.resize(0, windowHeight * 0.75)
  } else {
    return img.resize(windowWidth * 0.75, 0)
  }
}
//------------------------------------------------------------------------------
function positionLogic(img) {
  imgPositionX = (windowWidth - img.width) / 2
  imgPositionY = (windowHeight - img.height) / 2
}
//------------------------------------------------------------------------------
function keyPressed() {
  if (key === 's') {
    saveCanvas('edit' + '-' + imgName)
  }
}
//------------------------------------------------------------------------------
function chooseDistortionType(randomNumber) {
  if (randomNumber < 0.5) {
    return 'curveEdit'
  } else if (randomNumber < 0.75) {
    return 'circleEdit'
  } else if (randomNumber < 1) {
    return 'rectangleEdit'
  }
}
//------------------------------------------------------------------------------
async function applyDistortion(distortionType) {
  if (distortionType === 'curveEdit') {
    curveEdit(
      img,
      randomStepSize,
      randomStrokeSize,
      randomRotateSize,
      randomAngleMultiplier
    )
  } else if (distortionType === 'circleEdit') {
    circleEdit(img, randomCircle)
  } else if (distortionType === 'rectangleEdit') {
    rectangleEdit(img, randomRectX, randomRectY)
  }
  fxpreview()
}
//------------------------------------------------------------------------------
function applyfxhashFeatures(
  distortionType,
  randomRotateSize,
  randomStepSize,
  randomStrokeSize,
  randomAngleMultiplier,
  randomCircle,
  randomRectX,
  randomRectY
) {
  if (distortionType === 'curveEdit') {
    window.$fxhashFeatures = {
      Distortion: 'Curve',
      Rotate: randomRotateSize,
      Step: randomStepSize,
      Stroke: randomStrokeSize,
      Angle: randomAngleMultiplier,
    }
    return window.$fxhashFeatures
  } else if (distortionType === 'circleEdit') {
    window.$fxhashFeatures = {
      Distortion: 'Circle',
      Size: randomCircle,
    }
    return window.$fxhashFeatures
  } else if (distortionType === 'rectangleEdit') {
    window.$fxhashFeatures = {
      Distortion: 'Rectangle',
      X: randomRectX,
      Y: randomRectY,
    }
    return window.$fxhashFeatures
  }
}

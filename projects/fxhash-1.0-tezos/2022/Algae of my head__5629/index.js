const getBackground = (value) => {
  const folder = '01'
  const format = 'gif'
  value *= 100
  if (value < 55) return `./src/${folder}/${folder}_01.${format}`
  return `./src/${folder}/${folder}_02.${format}`
}

const getShape1 = (value) => {
  const folder = '02'
  const format = 'gif'
  value *= 100
  if (value < 30) return `./src/${folder}/${folder}_01.${format}`
  if (value < 55) return `./src/${folder}/${folder}_02.${format}`
  if (value < 75) return `./src/${folder}/${folder}_03.${format}`
  return `./src/${folder}/${folder}_04.${format}`
}


const getFileDigits = (name) => {
  return name.split('_')[1].split('.')[0]
}

const config = {
  background: getBackground(fxrand()),
  shape1: getShape1(fxrand()),
}

window.$fxhashFeatures = {
  background: getFileDigits(config.background),
  shape1: getFileDigits(config.shape1),
}

const allImages = Object.entries(config).map((entrie) => entrie[1])
allImages.forEach((image) => {
  const $wrapp = document.createElement('div')
  const $image = document.createElement('img')
  $wrapp.classList.add('image')
  $image.setAttribute('src', image)
  $wrapp.append($image)
  document.body.append($wrapp)
})

const getBackground = (value) => {
  const folder = '01'
  const format = 'gif'
  value *= 100
  if (value < 30) return `./src/${folder}/${folder}_01.${format}`
  if (value < 65) return `./src/${folder}/${folder}_02.${format}`
  return `./src/${folder}/${folder}_03.${format}`
}

const getShape1 = (value) => {
  const folder = '02'
  const format = 'gif'
  value *= 100
  if (value < 15) return `./src/${folder}/${folder}_01.${format}`
  if (value < 30) return `./src/${folder}/${folder}_02.${format}`
  if (value < 45) return `./src/${folder}/${folder}_03.${format}`
  if (value < 60) return `./src/${folder}/${folder}_04.${format}`
  if (value < 80) return `./src/${folder}/${folder}_05.${format}`
  return `./src/${folder}/${folder}_06.${format}`
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

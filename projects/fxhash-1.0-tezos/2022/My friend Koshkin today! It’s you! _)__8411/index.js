const getBackground = (value) => {
  const folder = '01'
  const format = 'gif'
  value *= 100
  if (value < 20) return `./src/${folder}/${folder}_01.${format}`
  if (value < 45) return `./src/${folder}/${folder}_02.${format}`
  if (value < 75) return `./src/${folder}/${folder}_03.${format}`
  return `./src/${folder}/${folder}_04.${format}`
}

const getShape1 = (value) => {
  const folder = '02'
  const format = 'png'
  value *= 100
  if (value < 30) return `./src/${folder}/${folder}_01.${format}`
  if (value < 45) return `./src/${folder}/${folder}_02.${format}`
  if (value < 60) return `./src/${folder}/${folder}_03.${format}`
  if (value < 70) return `./src/${folder}/${folder}_04.${format}`
  if (value < 85) return `./src/${folder}/${folder}_05.${format}`
  if (value < 90) return `./src/${folder}/${folder}_06.${format}`
  return `./src/${folder}/${folder}_07.${format}`
}

const getShape2 = (value) => {
  const folder = '03'
  const format = 'png'
  value *= 100
  if (value < 20) return `./src/${folder}/${folder}_01.${format}`
  if (value < 30) return `./src/${folder}/${folder}_02.${format}`
  if (value < 40) return `./src/${folder}/${folder}_03.${format}`
  if (value < 55) return `./src/${folder}/${folder}_04.${format}`
  if (value < 65) return `./src/${folder}/${folder}_05.${format}`
  if (value < 75) return `./src/${folder}/${folder}_06.${format}`
  if (value < 80) return `./src/${folder}/${folder}_07.${format}`
  if (value < 90) return `./src/${folder}/${folder}_08.${format}`
  return `./src/${folder}/${folder}_09.${format}`
}

const getShape3 = (value) => {
  const folder = '04'
  const format = 'png'
  value *= 100
  if (value < 30) return `./src/${folder}/${folder}_01.${format}`
  if (value < 70) return `./src/${folder}/${folder}_02.${format}`
  return `./src/${folder}/${folder}_03.${format}`
}

const getShape4 = (value) => {
  const folder = '05'
  const format = 'png'
  value *= 100
  if (value < 30) return `./src/${folder}/${folder}_01.${format}`
  if (value < 70) return `./src/${folder}/${folder}_02.${format}`
  if (value < 70) return `./src/${folder}/${folder}_03.${format}`
  return `./src/${folder}/${folder}_04.${format}`
}
const getFileDigits = (name) => {
  return name.split('_')[1].split('.')[0]
}

const config = {
  background: getBackground(fxrand()),
  shape1: getShape1(fxrand()),
  shape2: getShape2(fxrand()),
  shape3: getShape3(fxrand()),
  shape4: getShape4(fxrand()),
}

window.$fxhashFeatures = {
  background: getFileDigits(config.background),
  shape1: getFileDigits(config.shape1),
  shape2: getFileDigits(config.shape2),
  shape3: getFileDigits(config.shape3),
  shape4: getFileDigits(config.shape4),

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


let rectangles = [];
let options;
let colors;

// цветов в массивах должно быть на 1 больше, чем число слоев!!!!!!!!!
const colors0 = ["#F0EEE7", "black", "#97BCC9", "#365D6A", "#B0C6C7", "#000000"];

const colors1 = ["#000000", "#bcbab3", "black", "black", "#641202", "black"];
const colors2 = ["#dfddd9", "#000000", "#869da7", "#399DC5", "#641202", "#bcbab3"];
const colors3 = ["#bcbab3", "black", "#bcbab3", "#bcbab3", "#641202", "black"];
const colors4 = ["#dfddd9", "#884804", "#a3621b", "#d2914c", "#000000", "#5e5e5e"];
const colors5 = ["#dfddd9", "#000000", "#7C95A0", "#869da7", "#641202", "#bcbab3"];
const colors6 = ["#dfddd9", "#641202", "#442b3e", "#534450", "#787722", "#bcbab3"];
const colors7 = ["#dfddd9", "#0F0F0F", "#DDBC05", "#0F0F0F", "#787722", "#bcbab3"];
const colors8 = ["#dfddd9", "#6f8586", "#5a6f70", "#641202", "#000000", "#252424"];
const colors9 = ["#dfddd9", "#9B9892", "#615F5C", "#000000", "#726E6D", "#000000", "#252424"];
const colors10 = ["#000000", "#9B9892", "#615F5C", "#3D0202", "#000000", "#000000", "#252424"];
const colors11 = ["#dfddd9", "#000000", "#9B9892", "#100000", "#0000004C", "#100000", "#000000", "#252424"];


let initialRect;
let start;
let seed;

let buff;

let var0 = {
  border: 40, //бордюр

  gridType: "regular", // 'regular', 'nested', 'nestedVertical' или 'irregular'

  // настройки регулярной и nested vertical сетки
  cols: 15, //столбцы
  rows: 3, //строки
  // для nested vertical
  maxCols: 4, //макс. число маленьких столбцов в одном большом
  maxRows: 4, //макс. число маленьких строк в одной большой

  // настройки нерегулярной сетки
  xPad: 13, //держать близко (лучше равным) minWidth
  yPad: 50, //держать близко (лучше равным) minHeight
  minWidth: 13, //минимальная ширина
  minHeight: 50, //минимальная высота
  maxWidth: 25, //максимальная ширина
  maxHeight: 90, //максимальная высота

  clipped: true, //включена ли обрезка штриховки
  maxAngle: 360, //максимальный угол поворота
  angleVariation: 1, //вариативность углов штриховки
  spacingMin: 2, //мин. расстояние между штрихами
  spacingMax: 4, //макс. расстояние между штрихами
  thickMin: 1, //минимальная толщина штрихов
  thickMax: 2.5, //максимальная толщина штрихов
  pointGap: 1, //расстояние между точками штрихов
  pointShift: 0, //случайный сдвиг точек штрихов
  hatchingBorder: 1, //бордюр штриховки в прямоугольнике
  hatchingShift: 2, //случайный сдвиг штриховки в прямоугольнике
  curvature: 40, //кривизна кривых

  enableNoiseShift: true, //если выключить, все нойзы одного масштаба будут одинаковыми 

  // слои
  layersNumber: 5, //не меньше, чем элементов в массивах ниже
  thresholds: [1, 1, 1, 1, 1], //пороги отрисовки (1 = 100%)
  nFactors: [1000, 1000, 1000, 1000, 370], //масштабы нойза
  aModes: ["noise", "axis", "noise", "random", "fixed"], //режимы углов
  // "noise", "axis", "random", "fixed"
  hatchTypes: ["line", "line", "line", "line", "line"],
  //'fill', 'line', 'quadratic', 'cubic' или 'various'

  palettes: [colors0, colors3],
};

let var1 = {
  border: 40, //бордюр

  gridType: "nested", // 'regular', 'nested', 'nestedVertical' или 'irregular'

  // настройки регулярной и nested vertical сетки
  cols: 18, //столбцы
  rows: 3, //строки
  // для nested vertical
  maxCols: 4, //макс. число маленьких столбцов в одном большом
  maxRows: 4, //макс. число маленьких строк в одной большой

  // настройки нерегулярной сетки
  xPad: 13, //держать близко (лучше равным) minWidth
  yPad: 150, //держать близко (лучше равным) minHeight
  minWidth: 13, //минимальная ширина
  minHeight: 150, //минимальная высота
  maxWidth: 35, //максимальная ширина
  maxHeight: 200, //максимальная высота

  clipped: true, //включена ли обрезка штриховки
  maxAngle: 90, //максимальный угол поворота
  angleVariation: 1, //вариативность углов штриховки
  spacingMin: 2.7, //мин. расстояние между штрихами
  spacingMax: 3.7, //макс. расстояние между штрихамиs
  thickMin: 1, //минимальная толщина штрихов
  thickMax: 2.2, //максимальная толщина штрихов
  pointGap: 1.5, //расстояние между точками штрихов
  pointShift: 0.3, //случайный сдвиг точек штрихов
  hatchingBorder: 1, //бордюр штриховки в прямоугольнике
  hatchingShift: 0, //случайный сдвиг штриховки в прямоугольнике
  curvature: 8, //кривизна кривых

  enableNoiseShift: true, //если выключить, все нойзы одного масштаба будут одинаковыми 

  // слои
  layersNumber: 4, //не меньше, чем элементов в массивах ниже
  thresholds: [1, 0.85, 0.8, 0.4, 0.55], //пороги отрисовки (1 = 100%)
  nFactors: [300, 270, 270, 150, 70], //масштабы нойза
  aModes: ["fixed", "fixed", "fixed", "fixed", "fixed"], //режимы углов
  // "noise", "axis", "random", "fixed"
  hatchTypes: ["fill", "line", "line", "fill", "line"],
  //'fill', 'line', 'quadratic', 'cubic' или 'various'

  palettes: [colors3],
};

let var2 = {
  border: 40, //бордюр

  gridType: "nested", // 'regular', 'nested', 'nestedVertical' или 'irregular'

  // настройки регулярной и nested vertical сетки
  cols: 3, //столбцы
  rows: 3, //строки
  // для nested vertical
  maxCols: 1, //макс. число маленьких столбцов в одном большом
  maxRows: 1, //макс. число маленьких строк в одной большой

  // настройки нерегулярной сетки
  xPad: 5, //держать близко (лучше равным) minWidth
  yPad: 15, //держать близко (лучше равным) minHeight
  minWidth: 5, //минимальная ширина
  minHeight: 15, //минимальная высота
  maxWidth: 15, //максимальная ширина
  maxHeight: 100, //максимальная высота

  clipped: true, //включена ли обрезка штриховки
  maxAngle: 360, //максимальный угол поворота
  angleVariation: 1, //вариативность углов штриховки
  spacingMin: 2.7, //мин. расстояние между штрихами
  spacingMax: 3.7, //макс. расстояние между штрихамиs
  thickMin: 1, //минимальная толщина штрихов
  thickMax: 2.2, //максимальная толщина штрихов
  pointGap: 1.5, //расстояние между точками штрихов
  pointShift: 0.3, //случайный сдвиг точек штрихов
  hatchingBorder: 1, //бордюр штриховки в прямоугольнике
  hatchingShift: 0, //случайный сдвиг штриховки в прямоугольнике
  curvature: 8, //кривизна кривых

  enableNoiseShift: true, //если выключить, все нойзы одного масштаба будут одинаковыми 

  // слои
  layersNumber: 4, //не меньше, чем элементов в массивах ниже
  thresholds: [1, 0.6, 0.6, 0.6, 0.6], //пороги отрисовки (1 = 100%)
  nFactors: [300, 300, 50, 20, 70], //масштабы нойза
  aModes: ["noise", "axis", "noise", "random", "fixed"], //режимы углов
  // "noise", "axis", "random", "fixed"
  hatchTypes: ["line", "line", "line", "line", "line"],
  //'fill', 'line', 'quadratic', 'cubic' или 'various'
  palettes: [colors9, colors3, colors8],


};

let var3 = {
  border: 40, //бордюр

  gridType: "regular", // 'regular', 'nested', 'nestedVertical' или 'irregular'

  // настройки регулярной и nested vertical сетки
  cols: 5, //столбцы
  rows: 1, //строки
  // для nested vertical
  maxCols: 8, //макс. число маленьких столбцов в одном большом
  maxRows: 8, //макс. число маленьких строк в одной большой

  // настройки нерегулярной сетки
  xPad: 13, //держать близко (лучше равным) minWidth
  yPad: 50, //держать близко (лучше равным) minHeight
  minWidth: 13, //минимальная ширина
  minHeight: 50, //минимальная высота
  maxWidth: 25, //максимальная ширина
  maxHeight: 90, //максимальная высота

  clipped: true, //включена ли обрезка штриховки
  maxAngle: 360, //максимальный угол поворота
  angleVariation: 1, //вариативность углов штриховки
  spacingMin: 2, //мин. расстояние между штрихами
  spacingMax: 5, //макс. расстояние между штрихами
  thickMin: 1, //минимальная толщина штрихов
  thickMax: 2, //максимальная толщина штрихов
  pointGap: 1.5, //расстояние между точками штрихов
  pointShift: 0.4, //случайный сдвиг точек штрихов
  hatchingBorder: 1, //бордюр штриховки в прямоугольнике
  hatchingShift: 3, //случайный сдвиг штриховки в прямоугольнике
  curvature: 90, //кривизна кривых

  enableNoiseShift: false, //если выключить, все нойзы одного масштаба будут одинаковыми 

  // слои
  layersNumber: 4, //не меньше, чем элементов в массивах ниже
  thresholds: [1, 1, 1, 0.9, 0.55], //пороги отрисовки (1 = 100%)
  nFactors: [300, 300, 300, 300, 70], //масштабы нойза
  aModes: ["noise", "noise", "noise", "noise", "fixed"], //режимы углов
  // "noise", "axis", "random", "fixed"
  hatchTypes: ["fill", "line", "line", "line", "line"],
  //'fill', 'line', 'quadratic', 'cubic' или 'various'

  palettes: [colors1],
};

let var4 = {
  border: 40, //бордюр

  gridType: "nested", // 'regular', 'nested', 'nestedVertical' или 'irregular'

  // настройки регулярной и nested vertical сетки
  cols: 3, //столбцы
  rows: 3, //строки
  // для nested vertical
  maxCols: 1, //макс. число маленьких столбцов в одном большом
  maxRows: 1, //макс. число маленьких строк в одной большой

  // настройки нерегулярной сетки
  xPad: 10, //держать близко (лучше равным) minWidth
  yPad: 70, //держать близко (лучше равным) minHeight
  minWidth: 10, //минимальная ширина
  minHeight: 70, //минимальная высота
  maxWidth: 45, //максимальная ширина
  maxHeight: 300, //максимальная высота

  clipped: true, //включена ли обрезка штриховки
  maxAngle: 360, //максимальный угол поворота
  angleVariation: 1, //вариативность углов штриховки
  spacingMin: 2.2, //мин. расстояние между штрихами
  spacingMax: 3.1, //макс. расстояние между штрихамиs
  thickMin: 1, //минимальная толщина штрихов
  thickMax: 2.2, //максимальная толщина штрихов
  pointGap: 1.5, //расстояние между точками штрихов
  pointShift: 0.4, //случайный сдвиг точек штрихов
  hatchingBorder: 1, //бордюр штриховки в прямоугольнике
  hatchingShift: 2, //случайный сдвиг штриховки в прямоугольнике
  curvature: 8, //кривизна кривых

  enableNoiseShift: true, //если выключить, все нойзы одного масштаба будут одинаковыми 

  // слои
  layersNumber: 4, //не меньше, чем элементов в массивах ниже
  thresholds: [1, 0.7, 0.4, 0.3, 0.4], //пороги отрисовки (1 = 100%)
  nFactors: [300, 300, 150, 20, 70], //масштабы нойза
  aModes: ["fixed", "fixed", "noise", "random", "fixed"], //режимы углов
  // "noise", "axis", "random", "fixed"
  hatchTypes: ["line", "line", "line", "fill", "line"],
  //'fill', 'line', 'quadratic', 'cubic' или 'various'

  palettes: [colors1, colors3],

};

let var5 = {
  border: 40, //бордюр

  gridType: "nested", // 'regular', 'nested', 'nestedVertical' или 'irregular'
  // настройки регулярной и nested vertical сетки
  cols: 3, //столбцы
  rows: 3, //строки
  // для nested vertical
  maxCols: 1, //макс. число маленьких столбцов в одном большом
  maxRows: 1, //макс. число маленьких строк в одной большой

  // настройки нерегулярной сетки
  xPad: 40, //держать близко (лучше равным) minWidth
  yPad: 300, //держать близко (лучше равным) minHeight
  minWidth: 40, //минимальная ширина
  minHeight: 300, //минимальная высота
  maxWidth: 100, //максимальная ширина
  maxHeight: 400, //максимальная высота


  clipped: true, //включена ли обрезка штриховки
  maxAngle: 360, //максимальный угол поворота
  angleVariation: 0, //вариативность углов штриховки
  spacingMin: 4, //мин. расстояние между штрихами
  spacingMax: 5, //макс. расстояние между штрихами
  thickMin: 1, //минимальная толщина штрихов
  thickMax: 2.5, //максимальная толщина штрихов
  pointGap: 1.5, //расстояние между точками штрихов
  pointShift: 0, //случайный сдвиг точек штрихов
  hatchingBorder: 1, //бордюр штриховки в прямоугольнике
  hatchingShift: 7, //случайный сдвиг штриховки в прямоугольнике
  curvature: 30, //кривизна кривых

  enableNoiseShift: true, //если выключить, все нойзы одного масштаба будут одинаковыми 

  // слои
  layersNumber: 5, //не меньше, чем элементов в массивах ниже
  thresholds: [1, 0.85, 0.8, 0.4, 0.55], //пороги отрисовки (1 = 100%)
  nFactors: [300, 70, 70, 70, 70], //масштабы нойза
  aModes: ["random", "axis", "noise", "random", "fixed"], //режимы углов
  // "noise", "axis", "random", "fixed"
  hatchTypes: ["line", "line", "line", "fill", "line"],
  //'fill', 'line', 'quadratic', 'cubic' или 'various'

  palettes: [colors1],
};

let var6 = {
  border: 40, //бордюр

  gridType: "nestedVertical", // 'regular', 'nested', 'nestedVertical' или 'irregular'

  // настройки регулярной и nested vertical сетки
  cols: 25, //столбцы
  rows: 25, //строки
  // для nested vertical
  maxCols: 13, //макс. число маленьких столбцов в одном большом
  maxRows: 13, //макс. число маленьких строк в одной большой

  // настройки нерегулярной сетки
  xPad: 2, //держать близко (лучше равным) minWidth
  yPad: 10, //держать близко (лучше равным) minHeight
  minWidth: 2, //минимальная ширина
  minHeight: 10, //минимальная высота
  maxWidth: 45, //максимальная ширина
  maxHeight: 300, //максимальная высота

  clipped: true, //включена ли обрезка штриховки
  maxAngle: 360, //максимальный угол поворота
  angleVariation: 1, //вариативность углов штриховки
  spacingMin: 2.1, //мин. расстояние между штрихами
  spacingMax: 3.7, //макс. расстояние между штрихамиs
  thickMin: 1, //минимальная толщина штрихов
  thickMax: 2, //максимальная толщина штрихов
  pointGap: 1.5, //расстояние между точками штрихов
  pointShift: 0.4, //случайный сдвиг точек штрихов
  hatchingBorder: 0, //бордюр штриховки в прямоугольнике
  hatchingShift: 3, //случайный сдвиг штриховки в прямоугольнике
  curvature: 90, //кривизна кривых

  enableNoiseShift: true, //если выключить, все нойзы одного масштаба будут одинаковыми 

  // слои
  layersNumber: 2, //не меньше, чем элементов в массивах ниже
  thresholds: [1, 0.3, 0.3, 0.4, 0.4], //пороги отрисовки (1 = 100%)
  nFactors: [300, 250, 50, 120, 70], //масштабы нойза
  aModes: ["noise", "axis", "noise", "random", "fixed"], //режимы углов
  // "noise", "axis", "random", "fixed"
  hatchTypes: ["fill", "quadratic", "line", "line", "line"],
  //'fill', 'line', 'quadratic', 'cubic' или 'various'

  palettes: [colors3, colors5, colors7],
};

let var7 = {
  border: 40, //бордюр

  gridType: "regular", // 'regular', 'nested', 'nestedVertical' или 'irregular'

  // настройки регулярной и nested vertical сетки
  cols: 18, //столбцы
  rows: 5, //строки
  // для nested vertical
  maxCols: 10, //макс. число маленьких столбцов в одном большом
  maxRows: 15, //макс. число маленьких строк в одной большой

  // настройки нерегулярной сетки
  xPad: 15, //держать близко (лучше равным) minWidth
  yPad: 180, //держать близко (лучше равным) minHeight
  minWidth: 15, //минимальная ширина
  minHeight: 180, //минимальная высота
  maxWidth: 65, //максимальная ширина
  maxHeight: 300, //максимальная высота

  clipped: true, //включена ли обрезка штриховки
  maxAngle: 360, //максимальный угол поворота
  angleVariation: 1, //вариативность углов штриховки
  spacingMin: 1, //мин. расстояние между штрихами
  spacingMax: 3.1, //макс. расстояние между штрихамиs
  thickMin: 1, //минимальная толщина штрихов
  thickMax: 2.2, //максимальная толщина штрихов
  pointGap: 1.1, //расстояние между точками штрихов
  pointShift: 0.4, //случайный сдвиг точек штрихов
  hatchingBorder: 1, //бордюр штриховки в прямоугольнике
  hatchingShift: 3, //случайный сдвиг штриховки в прямоугольнике
  curvature: 90, //кривизна кривых

  enableNoiseShift: true, //если выключить, все нойзы одного масштаба будут одинаковыми 

  // слои
  layersNumber: 5, //не меньше, чем элементов в массивах ниже
  thresholds: [0.5, 1, 0.4, 0.3, 0.35], //пороги отрисовки (1 = 100%)
  nFactors: [100, 100, 50, 120, 70], //масштабы нойза
  aModes: ["noise", "axis", "noise", "noise", "axis"], //режимы углов
  // "noise", "axis", "random", "fixed"
  hatchTypes: ["fill", "line", "quadratic", "fill", "quadratic"],
  //'fill', 'line', 'quadratic', 'cubic' или 'various'

  palettes: [colors1, colors3, colors8],

};

let var8 = {
  border: 40, //бордюр

  gridType: "nested", // 'regular', 'nested', 'nestedVertical' или 'irregular'

  // настройки регулярной и nested vertical сетки
  cols: 10, //столбцы
  rows: 1, //строки
  // для nested vertical
  maxCols: 4, //макс. число маленьких столбцов в одном большом
  maxRows: 4, //макс. число маленьких строк в одной большой

  // настройки нерегулярной сетки
  xPad: 13, //держать близко (лучше равным) minWidth
  yPad: 100, //держать близко (лучше равным) minHeight
  minWidth: 13, //минимальная ширина
  minHeight: 100, //минимальная высота
  maxWidth: 90, //максимальная ширина
  maxHeight: 390, //максимальная высота

  clipped: true, //включена ли обрезка штриховки
  maxAngle: 360, //максимальный угол поворота
  angleVariation: 1, //вариативность углов штриховки
  spacingMin: 2, //мин. расстояние между штрихами
  spacingMax: 4, //макс. расстояние между штрихами
  thickMin: 1, //минимальная толщина штрихов
  thickMax: 2.2, //максимальная толщина штрихов
  pointGap: 1.9, //расстояние между точками штрихов
  pointShift: 0.4, //случайный сдвиг точек штрихов
  hatchingBorder: 2, //бордюр штриховки в прямоугольнике
  hatchingShift: 5, //случайный сдвиг штриховки в прямоугольнике
  curvature: 40, //кривизна кривых

  enableNoiseShift: true, //если выключить, все нойзы одного масштаба будут одинаковыми 

  // слои
  layersNumber: 5, //не меньше, чем элементов в массивах ниже
  thresholds: [1, 0.55, 0.6, 0.6, 0.5], //пороги отрисовки (1 = 100%)
  nFactors: [300, 300, 300, 170, 170], //масштабы нойза
  aModes: ["noise", "axis", "noise", "random", "fixed"], //режимы углов
  // "noise", "axis", "random", "fixed"
  hatchTypes: ["fill", "line", "line", "fill", "line"],
  //'fill', 'line', 'quadratic', 'cubic' или 'various'

  palettes: [colors4, colors8],
};

let var9 = {
  border: 40, //бордюр

  gridType: "nested", // 'regular', 'nested', 'nestedVertical' или 'irregular'

  // настройки регулярной и nested vertical сетки
  cols: 10, //столбцы
  rows: 1, //строки
  // для nested vertical
  maxCols: 4, //макс. число маленьких столбцов в одном большом
  maxRows: 4, //макс. число маленьких строк в одной большой

  // настройки нерегулярной сетки
  xPad: 30, //держать близко (лучше равным) minWidth
  yPad: 370, //держать близко (лучше равным) minHeight
  minWidth: 30, //минимальная ширина
  minHeight: 370, //минимальная высота
  maxWidth: 175, //максимальная ширина
  maxHeight: 950, //максимальная высота

  clipped: true, //включена ли обрезка штриховки
  maxAngle: 360, //максимальный угол поворота
  angleVariation: 1, //вариативность углов штриховки
  spacingMin: 1.2, //мин. расстояние между штрихами
  spacingMax: 4.5, //макс. расстояние между штрихами
  thickMin: 1, //минимальная толщина штрихов
  thickMax: 2.5, //максимальная толщина штрихов
  pointGap: 1.9, //расстояние между точками штрихов
  pointShift: 0.4, //случайный сдвиг точек штрихов
  hatchingBorder: 3, //бордюр штриховки в прямоугольнике
  hatchingShift: 6, //случайный сдвиг штриховки в прямоугольнике
  curvature: 40, //кривизна кривых

  enableNoiseShift: true, //если выключить, все нойзы одного масштаба будут одинаковыми 

  // слои
  layersNumber: 5, //не меньше, чем элементов в массивах ниже
  //thresholds: [1, 0.55, 0.6, 0.6, 0.5], //пороги отрисовки (1 = 100%)
  thresholds: [1, 0.55, 0.6, 0.7, 0.5], //пороги отрисовки (1 = 100%)
  nFactors: [300, 300, 300, 170, 20], //масштабы нойза
  aModes: ["noise", "axis", "noise", "random", "fixed"], //режимы углов
  // "noise", "axis", "random", "fixed"
  hatchTypes: ["fill", "line", "line", "fill", "line"],
  //'fill', 'line', 'quadratic', 'cubic' или 'various'

  palettes: [colors4, colors8],
  //palettes: [colors9]
};

let var10 = {
  border: 40, //бордюр

  gridType: "nested", // 'regular', 'nested', 'nestedVertical' или 'irregular'

  // настройки регулярной и nested vertical сетки
  cols: 10, //столбцы
  rows: 1, //строки
  // для nested vertical
  maxCols: 4, //макс. число маленьких столбцов в одном большом
  maxRows: 4, //макс. число маленьких строк в одной большой

  // настройки нерегулярной сетки
  xPad: 20, //держать близко (лучше равным) minWidth
  yPad: 90, //держать близко (лучше равным) minHeight
  minWidth: 20, //минимальная ширина
  minHeight: 90, //минимальная высота
  maxWidth: 110, //максимальная ширина
  maxHeight: 290, //максимальная высота

  clipped: true, //включена ли обрезка штриховки
  maxAngle: 360, //максимальный угол поворота
  angleVariation: 1, //вариативность углов штриховки
  spacingMin: 1.2, //мин. расстояние между штрихами
  spacingMax: 2, //макс. расстояние между штрихами
  thickMin: 1, //минимальная толщина штрихов
  thickMax: 2.5, //максимальная толщина штрихов
  pointGap: 1.2, //расстояние между точками штрихов
  pointShift: 0.4, //случайный сдвиг точек штрихов
  hatchingBorder: 1, //бордюр штриховки в прямоугольнике
  hatchingShift: 3, //случайный сдвиг штриховки в прямоугольнике
  curvature: 120, //кривизна кривых

  enableNoiseShift: true, //если выключить, все нойзы одного масштаба будут одинаковыми 

  // слои
  layersNumber: 3, //не меньше, чем элементов в массивах ниже
  thresholds: [1, 1, 0.5, 0.6, 0.5], //пороги отрисовки (1 = 100%)
  nFactors: [300, 300, 150, 170, 170], //масштабы нойза
  aModes: ["noise", "fixed", "noise", "random", "fixed"], //режимы углов
  // "noise", "axis", "random", "fixed"
  hatchTypes: ["fill", "line", "quadratic", "quadratic", "line"],
  //'fill', 'line', 'quadratic', 'cubic' или 'various'

  palettes: [colors9],
};

const variations = [var0, var1, var2, var4, var6, var7, var8, var9, var10];
 //const variations = [var10];

function render(pDensity) {
  noiseSeed(seed);
  randomSeed(seed);

  pixelDensity(1);

  let minDimension = min(windowWidth, windowHeight);
  createCanvas(minDimension, minDimension);

  buff = createGraphics(750, 750)
  buff.pixelDensity(pDensity);

  options = random(variations);

  colors = random(options.palettes);

  buff.background(colors[0]);
  buff.noFill();

  const { border, nFactors, thresholds, aModes, hatchTypes } = options;
  
  initialRect = new Rectangle(border, border, buff.width - border, buff.height - border);

  switch (options.gridType) {
    case "regular":
      rectangles = regularGrid(initialRect, options.cols, options.rows);
      break;
    case "nested":
      rectangles = nestedGrid(initialRect);
      break;
    case "nestedVertical":
      rectangles = nestedVerticalGrid(
        initialRect,
        options.cols,
        options.rows,
        options.maxCols,
        options.maxRows
      );
      break;
    case "irregular":
      rectangles = irregularGrid(initialRect, options.xPad, options.yPad);
      break;
  }

  for (let i = 0; i < options.layersNumber; i++) {
    nShift = round(random(10000, 1000000));

    showRectangles(
      colors[i + 1],
      nShift,
      thresholds[i],
      nFactors[i],
      aModes[i],
      hatchTypes[i]
    );

  }

  // let secs = round((Date.now() - start) / 10) / 100;
  // console.log("seconds: " + secs);
}

function setup() {
  // start = Date.now();

  seed = floor($fx.rand() * 9999999999);
  // seed = 2525;


  render(3);

  $fx.preview();
}

function windowResized() {
  let minDimension = min(windowWidth, windowHeight);
  createCanvas(minDimension, minDimension);
}

function regularGrid(sourceRect, cols, rows) {
  let tempRects = [];

  let gapX = sourceRect.w / cols;
  let gapY = sourceRect.h / rows;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = sourceRect.min.x + i * gapX;
      let y = sourceRect.min.y + j * gapY;
      let r = new Rectangle(x, y, x + gapX, y + gapY);
      tempRects.push(r);
    }
  }
  return tempRects;
}

function nestedVerticalGrid(sourceRect, cols, rows, maxCols, maxRows) {
  let stepX = sourceRect.w / cols;
  let stepY = sourceRect.h / rows;

  let r;
  let tempRects = [];

  let freeWidth = sourceRect.w;
  let x = sourceRect.min.x;
  let y = sourceRect.min.y;

  while (x < sourceRect.max.x && freeWidth >= stepX / 2) {
    let stepsNumberX = round(random(1, maxCols));
    let rWidth = stepX * stepsNumberX;

    if (x + rWidth > sourceRect.max.x) {
      rWidth = sourceRect.max.x - x;
    }

    r = new Rectangle(x, y, x + rWidth, sourceRect.max.y);
    tempRects.push(r);
    freeWidth -= rWidth;
    x += rWidth;
  }

  let indivisibleRects = [];
  for (let rectangle of tempRects) {
    let freeHeight = rectangle.h;
    let y = rectangle.min.y;
    let x = rectangle.min.x;
    while (y < rectangle.max.y && freeHeight >= stepY / 2) {
      let stepsNumberY = round(random(1, maxRows));
      let rHeight = stepY * stepsNumberY;

      if (y + rHeight > rectangle.max.y) {
        rHeight = rectangle.max.y - y;
      }

      r = new Rectangle(x, y, rectangle.max.x, y + rHeight);
      indivisibleRects.push(r);
      freeHeight -= rHeight;
      y += rHeight;
    }
  }
  return indivisibleRects;
}

function nestedGrid(sourceRect) {
  let freeHeight = sourceRect.h;
  let y = sourceRect.min.y;

  let tempRects = [];

  while (freeHeight > 0) {
    let rHeight;
    if (freeHeight <= options.maxHeight) {
      rHeight = freeHeight;
    } else {
      rHeight = random(options.minHeight, options.maxHeight);
    }

    let r = new Rectangle(sourceRect.min.x, y, sourceRect.max.x, y + rHeight);
    tempRects.push(r);
    y += rHeight;
    freeHeight -= rHeight;
  }

  let indivisibleRects = [];
  for (let rectangle of tempRects) {
    let freeWidth = rectangle.w;
    let x = rectangle.min.x;
    while (freeWidth > 0) {
      let rWidth;
      if (freeWidth <= options.maxWidth) {
        rWidth = freeWidth;
      } else {
        rWidth = random(options.minWidth, options.maxWidth);
      }
      let r = new Rectangle(x, rectangle.min.y, x + rWidth, rectangle.max.y);
      indivisibleRects.push(r);
      x += rWidth;
      freeWidth -= rWidth;
    }
    rectangle.isSplit = true;
  }
  return indivisibleRects;
}

function irregularGrid(sourceRect, xPad, yPad) {
  let stack = [sourceRect];
  let indivisibleRects = [];
  let counter = 0;

  while (stack.length > 0) {
    let current = stack.pop();
    // counter++;

    if (current.w > options.minWidth && current.h > options.minHeight) {
      let splitResults = current.split(xPad, yPad);
      stack.push(splitResults[0], splitResults[1]);
    } else {
      indivisibleRects.push(current);
    }
  }
  return indivisibleRects;
}

function showRectangles(col, nShift, threshold, nFactor, aMode, hatchType) {
  rectangles.forEach((rectangle) =>
    rectangle.show(col, nShift, threshold, nFactor, aMode, hatchType)
  );
}

function draw() {
  image(buff, 0, 0, width, height);
}

function keyPressed() {
  if (key === "s" || key === "S") {
    buff.save("Living_Structures.png");
  }
  if (key === "1") {
    render(3);
    buff.save("Living_Structures.png");
  }
  if (key === "2") {
    render(4);
    buff.save("Living_Structures.png");
  }
  if (key === "3") {
    render(5);
    buff.save("Living_Structures.png");
  }
  if (key === "4") {
    render(6);
    buff.save("Living_Structures.png");
  }
  if (key === "5") {
    render(7);
    buff.save("Living_Structures.png");
  }
  if (key === "6") {
    render(8);
    buff.save("Living_Structures.png");
  }
  if (key === "7") {
    render(9);
    buff.save("Living_Structures.png");
  }
}
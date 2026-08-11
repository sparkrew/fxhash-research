//https://stackoverflow.com/a/9733420
function luminance(r, g, b) {
  var a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928
          ? v / 12.92
          : Math.pow( (v + 0.055) / 1.055, 2.4 );
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function contrast(rgb1, rgb2) {
  var lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
  var lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
  var brightest = Math.max(lum1, lum2);
  var darkest = Math.min(lum1, lum2);
  return (brightest + 0.05)
       / (darkest + 0.05);
}

//https://stackoverflow.com/a/41661388
function isArrayInArray(arr, item){
var item_as_string = JSON.stringify(item);

var contains = arr.some(function(ele){
  return JSON.stringify(ele) == item_as_string;
});
return contains;
}

//https://forum.processing.org/two/discussion/comment/92946/#Comment_92946
function lerpColors(amt, colors) {
if(colors.length==1){ return colors[0]; }
let cunit = 1.0/(colors.length-1);
let colorA = color(colors[floor(amt / cunit)])
let colorB = color(colors[ceil(amt / cunit)])
return lerpColor(color(colorA), color(colorB), amt%cunit/cunit);
}

// Rarity picker
// Thanks to: https://github.com/yenrenART/fxhash-canvas-template/
function rarityPicker(values, fxrand) {
  var weight = values[0].w;
  const sumWeights = values.reduce((p, c) => p+c.w, 0) || 100;

  for (var i = 0; i < values.length; i++) {
    if (fxrand < weight / sumWeights) {
      return values[i].v;
    }
    weight += values[i + 1].w;
  }
}

function median(numbers) {
    const sorted = Array.from(numbers).sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

//https://stackoverflow.com/questions/52898456/simplest-way-of-finding-mode-in-javascript
const mode = a => 
  Object.values(
    a.reduce((count, e) => {
      if (!(e in count)) {
        count[e] = [0, e];
      }
      
      count[e][0]++;
      return count;
    }, {})
  ).reduce((a, v) => v[0] < a[0] ? a : v, [0, null])[1];
;

function valueInArray(inputArray, searchValue) {
  return inputArray.indexOf(searchValue) > -1 ? true : false
}

function randomSV(_minValue, _maxValue) {
  return (random(_minValue, _maxValue) * random ([-1, 1]))
}

function noiseSV(_off) {
  return (noise(_off) * random ([-1, 1]))
}

function isWithinBounds(x,y,minX,maxX,minY,maxY) {
  if (x < minX || x > maxX || y < minY || y > maxY) {return false} else {return true}
}

//learned from Nat Sarkissian's Reconnaissance: https://www.fxhash.xyz/generative/slug/reconnaissance
function handleUrlParams() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  
  // const seedValueParam = urlParams.get('seedValue')
  // if (seedValueParam > 0) {
  //   print("seedValueParam = ", seedValueParam)
  //   seedValue = parseInt(seedValueParam)
  // }

  // const generatorModeParam = urlParams.get('generatorMode')
  // if (generatorModeParam == null || generatorModeParam == 0) {
  //   // print("no geratorMode specified, setting scale mode to Discover");
  //   generatorMode = 0;
  // } else if (generatorModeParam == 1) {
  //     print("Generator Mode!");
  //     generatorMode = 1
  // }

  // const maxGenerationCountParam = urlParams.get('maxGenerationCount')
  // if (maxGenerationCountParam == null || maxGenerationCountParam == 0) {
  //   // print("no geratorMode specified, setting scale mode to Discover");
  //   maxGenerationCount = 0;
  // } else if (maxGenerationCountParam > 0) {
  //   maxGenerationCount = maxGenerationCountParam
  // }
  
//   const enableParamsParam = urlParams.get('params')
//   print("enableParams = ", enableParamsParam)
//   if (enableParamsParam > 0 || enableParamsParam === null) {
//     enableParams = 0
//   } else {
//     enableParams = 0
//   }
}
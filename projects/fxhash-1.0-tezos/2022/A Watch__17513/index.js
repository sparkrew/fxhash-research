// A Watch by Ross Goodwin
// Software text clock
// Copyright (C) 2022  Ross Goodwin

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.


let currentMinute;
let currentText;

function downloadText(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16));


function choose(choices) {
  var index = Math.floor(fxrand() * choices.length);
  return choices[index];
}

function replaceCharacterNames(txt) {
  // console.log(txt);

  const regexp = /\$((FIRSTNAME)(F|M|B)|SURNAME)(\d)/g;

  const matches = [...txt.matchAll(regexp)];

  // console.log(matches);

  let toReplace = {};

  for (let i=0; i<matches.length; i++) {

    let curMatch = matches[i];

    let toReplaceKey = `$${curMatch[1]}${curMatch[4]}`;

    if (!(toReplaceKey in toReplace)) {

      if (curMatch[1] === "SURNAME") {

        if (isLinear) {

          toReplace[toReplaceKey] = characterNamesObj.surnames[parseInt(curMatch[4])]

        }
        else {

          toReplace[toReplaceKey] = choose( namesObj['surnames'] );

        }

      }
      else if (curMatch[2] === "FIRSTNAME") {

        if (isLinear) {

          if (curMatch[3] === 'F') toReplace[toReplaceKey] = characterNamesObj.firstnamesFemale[parseInt(curMatch[4])];
          else if (curMatch[3] === 'M') toReplace[toReplaceKey] = characterNamesObj.firstnamesMale[parseInt(curMatch[4])];
          else if (curMatch[3] === 'B') toReplace[toReplaceKey] = characterNamesObj.firstnamesBoth[parseInt(curMatch[4])];

        }
        else {

          if (curMatch[3] === 'F') toReplace[toReplaceKey] = choose( namesObj['firstnames']['female'] );
          else if (curMatch[3] === 'M') toReplace[toReplaceKey] = choose( namesObj['firstnames']['male'] );
          else if (curMatch[3] === 'B') toReplace[toReplaceKey] = choose( namesObj['firstnames']['male'].concat(namesObj['firstnames']['female']) )

        }

      }

    }

  }

  // console.log(toReplace);

  for (const [k,v] of Object.entries(toReplace)) {

    txt = txt.replaceAll(k, v);

  }

  // console.log(txt);

  return txt;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  // var h = 6;
  var m = today.getMinutes();
  // var m = 56;

  const txtTrack = isLinear ? 2 : choose([0,1]);
  // const txtTrack = 1;


  let timeTxt = replaceCharacterNames( clockObj[`${txtTrack}_${h}_${m}`] );

  // console.log(timeTxt);

  document.querySelector('div.clockblock').innerHTML = timeTxt.replaceAll('\n', '<br>');
  currentText = timeTxt;

  updateCSS();
}

function checkMinute() {
  var minute = new Date().getMinutes();
  if (minute != currentMinute) {
    currentMinute = minute;
    startTime();
  }
}

function updateCSS() {
  document.body.style.backgroundColor = palette.background;
  document.body.style.fontFamily = fontChoice.cssName;
  document.body.style.fontWeight = fontChoice.baseWeight;

  // const boxShadowWidth = '0.25vmin'; // hasBezel ? bezelWidth : '0.25vmin'; box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  const boxShadowStr = `rgba(0, 0, 0, 0.3) 0vmin ${parseFloat(boxShadowWidth)*2+'vmin'} ${parseFloat(boxShadowWidth)*4+'vmin'}, rgba(0, 0, 0, 0.22) 0vmin ${boxShadowWidth} ${boxShadowWidth}`;
  const insetBoxShadowStr = `rgba(0, 0, 0, 0.3) 0vmin ${parseFloat(boxShadowWidth)*2+'vmin'} ${parseFloat(boxShadowWidth)*4+'vmin'} inset, rgba(0, 0, 0, 0.22) 0vmin ${boxShadowWidth} ${parseFloat(boxShadowWidth)*1.5}vmin inset`;

  document.getElementById('box-container').style.boxShadow = insetBoxShadowStr;

  // const insetBoxShadowStr = `rgba(50, 50, 93, 0.25) 0vmin ${parseFloat(boxShadowWidth)*8}vmin ${parseFloat(boxShadowWidth)*16}vmin -${parseFloat(boxShadowWidth)*4}vmin inset, rgba(0, 0, 0, 0.3) 0vmin ${parseFloat(boxShadowWidth)*6}vmin ${parseFloat(boxShadowWidth)*12}vmin -${parseFloat(boxShadowWidth)*6}vmin inset`;

  document.getElementById('clockbox').style.boxShadow = boxShadowStr;


  const bgRgb = hexToRgb(palette.background);
  const maskRgbaStr = `rgba(${bgRgb[0]},${bgRgb[1]},${bgRgb[2]},0.5)`;
  const outerMaskRgbaStr = `rgba(${bgRgb[0]},${bgRgb[1]},${bgRgb[2]},0.25)`;

  document.getElementById('clockbox').style.backgroundColor = maskRgbaStr;
  document.getElementById('box-container').style.backgroundColor = outerMaskRgbaStr;

  document.querySelectorAll('div.clockblock').forEach(x=>{ 
    x.style.color = palette.grafText;
    x.style.fontSize = fontChoice.baseSize;

    if (x.firstChild) {

      x.style.padding = '1vmin';

    }
    else {

      x.style.padding = '0px';

    }

    const textShadowStr = `rgba(0, 0, 0, 0.19) 0vmin ${boxShadowWidth} ${parseFloat(boxShadowWidth)*2}vmin, rgba(0, 0, 0, 0.23) 0vmin ${parseFloat(boxShadowWidth)/2.0}vmin ${parseFloat(boxShadowWidth)/2.0}vmin`;

    x.style.textShadow = textShadowStr

    // x.style.boxShadow = boxShadowStr;
  });

  document.querySelectorAll('span.clocktext').forEach(x=>{ 

    if (fontChoice.cssBoldName) {
      x.style.fontFamily = fontChoice.cssBoldName;
    }


    x.style.color = palette.clockText;
    x.style.fontSize = fontChoice.clockSize;
    x.style.lineHeight = fontChoice.baseSize;
    x.style.fontWeight = fontChoice.clockWeight;


  });

}

// init features obj

let featuresObj = {};

// color palette

const paletteList = [
  {
    name: "lightning",
    background: "#3C3C3C",
    grafText: "#A0B9BF",
    clockText: "#F0F66E"
  },
  {
    name: "twilight",
    background: "#033860",
    grafText: "#9EB3C2",
    clockText: "#F4D58D"
  },
  {
    name: "lilac",
    background: "#EAEAEA",
    grafText: "#73628A",
    clockText: "#1B2021"
  },
  {
    name: "cosmic",
    background: "#2A2B2A",
    grafText: "#F8F4E3",
    clockText: "#6B7FD7"
  },
  {
    name: "slate (light)",
    background: "#F9F9F9",
    grafText: "#70798C",
    clockText: "#252323"
  },
  {
    name: "slate (dark)",
    background: "#252323",
    grafText: "#70798C",
    clockText: "#F9F9F9"
  },
  {
    name: "reference",
    background: "#EAE0D5",
    grafText: "#79745C",
    clockText: "#280004"
  },
  {
    name: "pure bred (light)",
    background: "#FFF",
    grafText: "#000",
    clockText: "#FF0000"
  },
  {
    name: "pure bred (dark)",
    background: "#000",
    grafText: "#FFF",
    clockText: "#FF0000"
  },
  {
    name: "classic",
    background: "#F2F1EF",
    grafText: "#333333",
    clockText: "#F22613"
  },
  {
    name: "classic (inverted)",
    background: "#333333",
    grafText: "#F2F1EF",
    clockText: "#F22613"
  },
  {
    name: "sunrise",
    background: "#373F47",
    grafText: "#E8F1F2",
    clockText: "#FCAF58"
  },
  {
    name: "regal",
    background: "#756D54",
    grafText: "#201335",
    clockText: "#F1E9DA"
  },
  {
    name: "clarity",
    background: "#F6F8FF",
    grafText: "#38AECC",
    clockText: "#3E5C76"
  },
  {
    name: "grayscale",
    background: "#333",
    grafText: "#CCC",
    clockText: "#FFF"
  },
  {
    name: "emerald",
    background: "#111",
    grafText: "#009B77",
    clockText: "#EFEFEF"
  }
];

  // {
  //   name: "",
  //   background: "#",
  //   grafText: "#",
  //   clockText: "#"
  // },

const palette = choose(paletteList);
// const palette = paletteList[paletteList.length-1];

featuresObj["Palette"] = palette.name + ` (${palette.background},${palette.grafText},${palette.clockText})`;

// fonts

const fontList = [
  {
    cssName: "localLora",
    displayName: "Lora",
    baseSize: "1.7vmin",
    clockSize: "2.3vmin",
    baseWeight: "400",
    clockWeight: "700",
    cssBoldName: false
  },
  {
    cssName: "localCousine",
    displayName: "Cousine",
    baseSize: "1.5vmin",
    clockSize: "2vmin",
    baseWeight: "400",
    clockWeight: "700",
    cssBoldName: "localCousineBold"
  },
  {
    cssName: "localOpenSans",
    displayName: "Open Sans",
    baseSize: "1.6vmin",
    clockSize: "2.2vmin",
    baseWeight: "300",
    clockWeight: "800",
    cssBoldName: false
  },
  {
    cssName: "localLato",
    displayName: "Lato",
    baseSize: "1.6vmin",
    clockSize: "2.2vmin",
    baseWeight: "300",
    clockWeight: "900",
    cssBoldName: "localLatoBold"
  },
  {
    cssName: "localBitter",
    displayName: "Bitter",
    baseSize: "1.6vmin",
    clockSize: "2.1vmin",
    baseWeight: "300",
    clockWeight: "900",
    cssBoldName: false
  },
  {
    cssName: "localSourceCodePro",
    displayName: "Source Code Pro",
    baseSize: "1.5vmin",
    clockSize: "2vmin",
    baseWeight: "300",
    clockWeight: "900",
    cssBoldName: false
  },
  {
    cssName: "localOverpassMono",
    displayName: "Overpass Mono",
    baseSize: "1.5vmin",
    clockSize: "2vmin",
    baseWeight: "300",
    clockWeight: "700",
    cssBoldName: false
  },
  {
    cssName: "localSpaceMono",
    displayName: "Space Mono",
    baseSize: "1.4vmin",
    clockSize: "1.9vmin",
    baseWeight: "400",
    clockWeight: "700",
    cssBoldName: "localSpaceMonoBold"
  },
];

const fontChoice = choose(fontList);

featuresObj["Font"] = fontChoice.displayName;

// box shadow

const boxShadowWidth = choose(['0.125vmin', '0.25vmin', '0.375vmin', '0.5vmin', '0.625vmin', '0.75vmin', '0.875vmin']);
// const boxShadowWidth = '0.875vmin';

featuresObj["Depth"] = parseFloat(boxShadowWidth);

// numerals

const numeralType = choose([ 'Arabic', 'Roman', 'dots', 'none' ]);
// const numeralType = 'dots';

const numeralColor = choose([ palette.clockText, palette.grafText ]);

let romanLowerCase = false;

if (numeralType === 'Roman') {
  romanLowerCase = choose([true,false]);
}

featuresObj["Numerals type"] = numeralType + (romanLowerCase ? ' (lowercase)' : '');
featuresObj["Numerals color"] = numeralColor;

// hands

const handsType = choose([ 'lines', 'points', 'diamonds' ]);
// const handsType = 'diamonds';

const hasSecondHandRand = fxrand();
let hasSecondHand;
if (hasSecondHandRand > 0.85) {
  hasSecondHand = false;
}
else {
  hasSecondHand = true;
}

let secondHandAccentColor;
if (hasSecondHand) {
  secondHandAccentColor = choose([ true, false ]);
}
else {
  secondHandAccentColor = false;
}

featuresObj["Hands type"] = handsType;
featuresObj["Has second hand"] = hasSecondHand;
featuresObj["Second hand accent color"] = secondHandAccentColor;

// minute and hour marks

let hasHourMarks = true;
const hourMarksRand = fxrand();
if ( numeralType === 'none' ) {
  if (hourMarksRand > 0.5) {
    hasHourMarks = false;
  }
}

let hasMinuteMarks;
if (hasHourMarks) {
  const minuteMarksRand = fxrand();

  if (minuteMarksRand > 0.75) {
    hasMinuteMarks = false;
  }
  else {
    hasMinuteMarks = true;
  }
}
else {
  hasMinuteMarks = false;
}

featuresObj['Has hour marks'] = hasHourMarks;
featuresObj['Has minute marks'] = hasMinuteMarks;

// linear v nonlinear

const linearityRand = fxrand();
const isLinear = linearityRand > 0.66;

let characterNamesObj = {
  surnames: [],
  firstnamesFemale: [],
  firstnamesMale: [],
  firstnamesBoth: []
};

if (isLinear) {

  for (let i=0;i<16;i++) {

    characterNamesObj.surnames.push( choose( namesObj['surnames'] ) );
    characterNamesObj.firstnamesFemale.push( choose( namesObj['firstnames']['female'] ) );
    characterNamesObj.firstnamesMale.push( choose( namesObj['firstnames']['male'] ) );
    characterNamesObj.firstnamesBoth.push( choose( namesObj['firstnames']['female'].concat(namesObj['firstnames']['male']) ) );

  }

  // console.log(characterNamesObj);

}

featuresObj['Text sequence type'] = isLinear ? 'linear' : 'nonlinear';

// set features

console.log(featuresObj);
window.$fxhashFeatures = featuresObj;

// run run run...

async function loadFonts() {
  const localLora = new FontFace('localLora', 'url("./fonts/lora.ttf")', { weight: '400 700' });
  const localCousine = new FontFace('localCousine', 'url("./fonts/cousine.ttf")', { weight: '400' });
  const localCousineBold = new FontFace('localCousineBold', 'url("./fonts/cousinebold.ttf")', { weight: '700' });
  const localOpenSans = new FontFace('localOpenSans', 'url("./fonts/opensans.ttf")', { weight: '300 800' });
  const localLato = new FontFace('localLato', 'url("./fonts/lato.ttf")', { weight: '300' });
  const localLatoBold = new FontFace('localLatoBold', 'url("./fonts/latobold.ttf")', { weight: '900' });
  const localBitter = new FontFace('localBitter', 'url("./fonts/bitter.ttf")', { weight: '300 900' });
  const localSourceCodePro = new FontFace('localSourceCodePro', 'url("./fonts/sourcecodepro.ttf")', { weight: '300 900' });
  const localOverpassMono = new FontFace('localOverpassMono', 'url("./fonts/overpassmono.ttf")', { weight: '300 700' });
  const localSpaceMono = new FontFace('localSpaceMono', 'url("./fonts/spacemono.ttf")', { weight: '400' });
  const localSpaceMonoBold = new FontFace('localSpaceMonoBold', 'url("./fonts/spacemonobold.ttf")', { weight: '700' });


  await localLora.load();
  await localCousine.load();
  await localCousineBold.load();
  await localOpenSans.load();
  await localLato.load();
  await localLatoBold.load();
  await localBitter.load();
  await localSourceCodePro.load();
  await localOverpassMono.load();
  await localSpaceMono.load();
  await localSpaceMonoBold.load();


  document.fonts.add(localLora);
  document.fonts.add(localCousine);
  document.fonts.add(localCousineBold);
  document.fonts.add(localOpenSans);
  document.fonts.add(localLato);
  document.fonts.add(localLatoBold);
  document.fonts.add(localBitter);
  document.fonts.add(localSourceCodePro);
  document.fonts.add(localOverpassMono);
  document.fonts.add(localSpaceMono);
  document.fonts.add(localSpaceMonoBold);

  document.body.classList.add('fonts-loaded');
}

loadFonts().then(()=>{
  currentMinute = new Date().getMinutes();

  startTime();
  setInterval(checkMinute, 10);
});











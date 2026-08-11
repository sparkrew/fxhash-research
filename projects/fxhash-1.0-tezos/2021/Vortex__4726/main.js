//Copyright 2021 @bitcoinski
//Walletizer is your Tezos wallet's fingerprint - this generative piece takes your wallet address and translates the public key into gradients of colors and layers that cycle on a loop. Every wallet address will be rendered uniquely, with no two wallets ever looking the same.

let viewer;
let colorString = "";
let seed;

window.onload = async function () {
  await load();
};

const load = async () => {
  seed= parseFloat('0.' + Math.floor(fxrand() * 100000000));
  console.log('seed', seed);
  viewer =
    new URLSearchParams(window.location.search).get("viewer") || "tz2NHCNf862d1j9pfEk37vRRwv8tMCE2hJFv";
  colorString = await calcColorString(viewer);
  let gradientColors = await calcGradientColors(colorString);
  let previous_object = document.body;
  previous_object = await addBox(previous_object, gradientColors, 1);
  for(let i = 1; i < gradientColors.length; i++){
    previous_object = await addBox(previous_object, gradientColors, i + 1);
  }
  document.getElementById('main').style = `-webkit-border-radius: 100vw;border-radius: 100vw;width:100%; height: 100%; padding:1.25vw; background: linear-gradient(10deg, ${gradientColors.join(",")});background-size: 600% 600%;text-align:center;z-index:1;position:relative;-webkit-animation: Cycle 10s ease infinite;-moz-animation: Cycle 10s ease infinite; animation: Cycle 10s ease infinite;`;
};

const addBox = async (parent, colors, index) => {
  let div = document.createElement("div");
  div.style = `-webkit-border-radius: 100vw;border-radius: 100vw;width:100%; height: 100%; padding:1.25vw; background: linear-gradient(${index * 10}deg, ${colors.join(",")});background-size: 600% 600%;text-align:center;z-index:${index};position:relative;-webkit-animation: Cycle 10s ease infinite;-moz-animation: Cycle 10s ease infinite; animation: Cycle 10s ease infinite;`;
  parent.appendChild(div);
  return div;
}
const calcColorString = async (wallet_address) => {
  let color_string = "";
  console.log('wallet_address', wallet_address)
  for (let i = 0; i < wallet_address.length; i++) {
    color_string += await translateCharToColor(wallet_address.charAt(i));
  }
  console.log('color_string', color_string)
  return color_string + color_string;
};
const calcGradientColors = async (color_string) => {
  let colors = [];
  let runs = Math.floor(color_string.length / 6);
  for (let i = 0; i < runs; i++) {
    let hex = Math.floor(parseInt(color_string.substring(i * 6, (i + 1) * 6)) * seed).toString();
    console.log(hex.length)
    if(hex.length < 6){
      for (x = 0; x <= 6 - hex.length; x++){
        hex = hex + '0';
      }
    }
    console.log('hex',hex)
    colors.push("#" + hex);
  }
  return colors;
};
const translateCharToColor = async (character) => {
  let code = character.charCodeAt(0);
  return code;
};

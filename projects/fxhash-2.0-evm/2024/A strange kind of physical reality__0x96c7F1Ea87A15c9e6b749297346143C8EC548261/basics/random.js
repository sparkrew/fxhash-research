function rand(a, b){
  if (a == null){
    a = 0;
    b = 1;
  }
  if (b == null){
    b = a;
    a = 0;
  }
  let n = randomNumber(a, b);

  return n;
}

function randomNumber(a, b){
  return a + (b - a) * $fx.rand();
}

function nwcx(n, options){  
  let opt = [];
  for (let o of options){
    for (let i = 0; i < o[1]; i++){
      opt.push(o[0]);
    }
  }

  let m = constrain(map(n, 0, 1, -0.4, 1.6), 0, 1);

  let c = map(m, 0, 1, 0, opt.length - 1);

  return opt[Math.floor(c)];
}

function ywcx(y, options, min, max){
  let opt = [];
  for (let o of options){
    for (let i = 0; i < 1; i++){
      opt.push(o[0]);
    }
  }

  let m = map(y, min, max, 0, 1, true);
  let c = Math.floor(map(m, 0, 1, 0, opt.length - 1));

  // console.log(nf(y, 0, 2), c, opt.length - 1)

  return opt[c];
}

function wcx(options) {
  let opt = [];
  for (let o of options){
    for (let i = 0; i < o[1]; i++){
      opt.push(o[0]);
    }
  }
  return opt[Math.floor(rand(opt.length))];
}

function ecx(options){  // equal
  return options[Math.floor(rand(options.length))];
}

function diffChoices(options, num){  // remove first choice from array
  let results = [], opt = [];

  for(let o of options){
    opt.push(o);
  }

  for(let i = 0; i < num; i++){
    let choice = int(rand(opt.length));
    results[i] = opt[choice];

    opt.splice(choice, 1);
  }

  return results;
}

function shuffleArray(arr){
  let temp = [];

  for(let i = 0; i < arr.length; i++){
    let cx = int(rand(arr.length))
    temp[i] = arr[cx];
    arr.splice(cx, 1);
  }

  return temp;
}


// Distruibution functions
function easeInSine(min, max){
  let x = rand();
  angleMode(RADIANS);
  let ans = 1 - cos((x * PI) / 2);
  angleMode(DEGREES);

  return returnEasing(ans, min, max);
}

function easeOutSine(min, max){
  let x = rand();
  angleMode(RADIANS);
  let ans = Math.sin((x * Math.PI) / 2);
  angleMode(DEGREES);

  return returnEasing(ans, min, max);
}

function easeInCirc(min, max) {
  let x = rand();
  let ans = 1 - sqrt(1 - pow(x, 2));
  return returnEasing(ans, min, max);
}

function easeOutCubic(min, max) {
  let x = rand();
  let ans= 1 - Math.pow(1 - x, 3);
  return returnEasing(ans, min, max);
}

function easeInOutCubic(min, max) {
  let x = rand();
  let ans = x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
  return returnEasing(ans, min, max);
}

function returnEasing(ans, min, max){
  return map(ans, 0, 1, min, max);
}

function adjEaseOutCubic(x, min, max) {
  let ans = 1 - Math.pow(1 - x, 3);
  return returnEasing(ans, min, max);
}

function adjEaseInCirc(x, min, max){
  let ans = 1 - sqrt(1 - pow(x, 2));
  return returnEasing(ans, min, max);
}


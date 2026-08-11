let BG = [];
let noiseBG = [];
let table = [];
let BWtable = [];
let allburger = [];
let BWallburger = [];

//burgerread
let bacon = [];
let beef = [];
let baseburger = [];
let basesandwich = [];
let sandwich = [];
let topburger = [];
let tomato = [];
let cream = [];
let meltedcheese = [];
let frenchfries = [];
let cheese = [];
let bill = [];
let book = [];
let lettuce = [];
let donut = [];
let phone = [];
let fish = [];
let egg = [];
let flag = [];

//BWburgerread
let BWbacon = [];
let BWbeef = [];
let BWbaseburger = [];
let BWbasesandwich = [];
let BWsandwich = [];
let BWtopburger = [];
let BWtomato = [];
let BWcream = [];
let BWmeltedcheese = [];
let BWfrenchfries = [];
let BWcheese = [];
let BWbill = [];
let BWbook = [];
let BWlettuce = [];
let BWdonut = [];
let BWphone = [];
let BWfish = [];
let BWegg = [];
let BWflag = [];

//toonburgerread
let toonbacon = [];
let toonbeef = [];
let toonbaseburger = [];
let toonbasesandwich = [];
let toonsandwich = [];
let toontopburger = [];
let toontomato = [];
let tooncream = [];
let toonmeltedcheese = [];
let toonfrenchfries = [];
let tooncheese = [];
let toonbill = [];
let toonbook = [];
let toonlettuce = [];
let toondonut = [];
let toonphone = [];
let toonfish = [];
let toonegg = [];
let toonflag = [];

//Right
let basecan = [];
let can = [];
let candleR = [];
let cup = [];
let sugar = [];

//BWRight
let BWbasecan = [];
let BWcan = [];
let BWcandleR = [];
let BWcup = [];
let BWsugar = [];

//Left
let knife = [];
let chopsticks = [];
let spoon = [];
let candleL = [];

//BWLeft
let BWknife = [];
let BWchopsticks = [];
let BWspoon = [];
let BWcandleL = [];

function preload() {
  noiseBG[1] = loadImage('GBurger/noise.png')
  for (let i = 1; i < 10; i++) {
    BG[i] = loadImage('GBurger/BG' + i + '.png')
  }
  for (let i = 1; i < 8; i++) {
    table[i] = loadImage('GBurger/table' + i + '.png')
  } for (let i = 1; i < 7; i++) {
    BWtable[i] = loadImage('GBurger/BWtable' + i + '.png')
  }
  allburger[1] = loadImage('GBurger/allburger.png')
  BWallburger[1] = loadImage('GBurger/BWallburger.png')

  //burgerREAD
  bacon[1] = loadImage('GBurger/bacon.png');
  beef[1] = loadImage('GBurger/beef.png');
  baseburger[1] = loadImage('GBurger/baseburger.png');
  basesandwich[1] = loadImage('GBurger/basesandwich.png');
  sandwich[1] = loadImage('GBurger/sandwich.png');
  topburger[1] = loadImage('GBurger/topburger.png');
  tomato[1] = loadImage('GBurger/tomato.png');
  cream[1] = loadImage('GBurger/cream.png');
  meltedcheese[1] = loadImage('GBurger/meltedcheese.png');
  frenchfries[1] = loadImage('GBurger/frenchfries.png');
  cheese[1] = loadImage('GBurger/cheese.png');
  bill[1] = loadImage('GBurger/bill.png');
  lettuce[1] = loadImage('GBurger/lettuce.png');
  donut[1] = loadImage('GBurger/donut.png');
  fish[1] = loadImage('GBurger/fish.png');
  egg[1] = loadImage('GBurger/egg.png');
  for (let i = 1; i < 4; i++) {
    phone[i] = loadImage('GBurger/phone' + i + '.png')
  }
  for (let i = 1; i < 5; i++) {
    book[i] = loadImage('GBurger/book' + i + '.png')
  }
  for (let i = 1; i < 8; i++) {
    flag[i] = loadImage('GBurger/flag' + i + '.png')
  }

  //BWburgerREAD
  BWbacon[1] = loadImage('GBurger/BWbacon.png');
  BWbeef[1] = loadImage('GBurger/BWbeef.png');
  BWbaseburger[1] = loadImage('GBurger/BWbaseburger.png');
  BWbasesandwich[1] = loadImage('GBurger/BWbasesandwich.png');
  BWsandwich[1] = loadImage('GBurger/BWsandwich.png');
  BWtopburger[1] = loadImage('GBurger/BWtopburger.png');
  BWtomato[1] = loadImage('GBurger/BWtomato.png');
  BWcream[1] = loadImage('GBurger/BWcream.png');
  BWmeltedcheese[1] = loadImage('GBurger/BWmeltedcheese.png');
  BWfrenchfries[1] = loadImage('GBurger/BWfrenchfries.png');
  BWcheese[1] = loadImage('GBurger/BWcheese.png');
  BWbill[1] = loadImage('GBurger/BWbill.png');
  BWlettuce[1] = loadImage('GBurger/BWlettuce.png');
  BWdonut[1] = loadImage('GBurger/BWdonut.png');
  BWfish[1] = loadImage('GBurger/BWfish.png');
  BWegg[1] = loadImage('GBurger/BWegg.png');
  for (let i = 1; i < 4; i++) {
    BWphone[i] = loadImage('GBurger/BWphone' + i + '.png')
  }
  for (let i = 1; i < 5; i++) {
    BWbook[i] = loadImage('GBurger/BWbook' + i + '.png')
  }
  for (let i = 1; i < 8; i++) {
    BWflag[i] = loadImage('GBurger/BWflag' + i + '.png')
  }

  //TOON burgerREAD
  toonbacon[1] = loadImage('GBurger/toonbacon.png');
  toonbeef[1] = loadImage('GBurger/toonbeef.png');
  toonbaseburger[1] = loadImage('GBurger/toonbaseburger.png');
  toonbasesandwich[1] = loadImage('GBurger/toonbasesandwich.png');
  toonsandwich[1] = loadImage('GBurger/toonsandwich.png');
  toontopburger[1] = loadImage('GBurger/toontopburger.png');
  toontomato[1] = loadImage('GBurger/toontomato.png');
  tooncream[1] = loadImage('GBurger/tooncream.png');
  toonmeltedcheese[1] = loadImage('GBurger/toonmeltedcheese.png');
  toonfrenchfries[1] = loadImage('GBurger/toonfrenchfries.png');
  tooncheese[1] = loadImage('GBurger/tooncheese.png');
  toonbill[1] = loadImage('GBurger/toonbill.png');
  toonlettuce[1] = loadImage('GBurger/toonlettuce.png');
  toondonut[1] = loadImage('GBurger/toondonut.png');
  toonfish[1] = loadImage('GBurger/toonfish.png');
  toonegg[1] = loadImage('GBurger/toonegg.png');
  toonphone[1] = loadImage('GBurger/toonphone.png')
  toonbook[1] = loadImage('GBurger/toonbook.png')
  for (let i = 1; i < 3; i++) {
    toonflag[i] = loadImage('GBurger/toonflag' + i + '.png')
  }

  //RightREAD
  candleR[1] = loadImage('GBurger/candleR.png');
  sugar[1] = loadImage('GBurger/sugar.png');
  for (let i = 1; i < 4; i++) {
    basecan[i] = loadImage('GBurger/basecan' + i + '.png');
  }
  for (let i = 1; i < 4; i++) {
    can[i] = loadImage('GBurger/can' + i + '.png');
  }
  for (let i = 1; i < 7; i++) {
    cup[i] = loadImage('GBurger/cup' + i + '.png');
  }

  //BWRightREAD
  BWcandleR[1] = loadImage('GBurger/BWcandleR.png');
  BWsugar[1] = loadImage('GBurger/BWsugar.png');
  for (let i = 1; i < 4; i++) {
    BWbasecan[i] = loadImage('GBurger/BWbasecan' + i + '.png');
  }
  for (let i = 1; i < 4; i++) {
    BWcan[i] = loadImage('GBurger/BWcan' + i + '.png');
  }
  for (let i = 1; i < 5; i++) {
    BWcup[i] = loadImage('GBurger/BWcup' + i + '.png');
  }

  //LeftREAD
  spoon[1] = loadImage('GBurger/spoon.png');
  chopsticks[1] = loadImage('GBurger/chopsticks.png');
  knife[1] = loadImage('GBurger/knife.png');
  candleL[1] = loadImage('GBurger/candleL.png');

  //BWLeftREAD
  BWspoon[1] = loadImage('GBurger/BWspoon.png');
  BWchopsticks[1] = loadImage('GBurger/BWchopsticks.png');
  BWknife[1] = loadImage('GBurger/BWknife.png');
  BWcandleL[1] = loadImage('GBurger/BWcandleL.png');
}


function fxRandom(from=0, to =1){
  let diff = to - from;
  return from+fxrand()*diff;
}

let originCanvasWidth=1080;
let originCanvasHeight=1080;

let canvasWidth=1080;
let canvasHeight=1080;

function setupCanvasRatio () {
  let originRatio = originCanvasWidth / originCanvasHeight;
  let screenRatio = windowWidth / windowHeight;
  console.log(originRatio);
  console.log(screenRatio);

  // 如果螢幕的比例比作品比例寬，就以螢幕高度來當畫布高度
  if(screenRatio > originRatio)
  {
    canvasHeight = windowHeight;
    canvasWidth = canvasHeight * originRatio;
  }
  // 如果螢幕的比例比較窄，就以螢幕寬度來當畫布寬度
  else
  {
    canvasWidth = windowWidth;
    canvasHeight = canvasWidth / originRatio;
  }

  canvasRatio = canvasWidth / originCanvasWidth;
}

async function setup() {
  console.log(fxhash);
  setupCanvasRatio ();
  
  createCanvas(canvasWidth, canvasHeight);

  let styleburger = fxRandom(0, 10);
  print(styleburger);

  //TOON version
  if (styleburger < 1) {
    colorMode(HSB);
    background(fxRandom(0, 360), fxRandom(0, 40), fxRandom(20, 90));

    //choosing background
    if (floor(fxRandom(0, 10)) > 6) {
      let BGindex = floor(fxRandom(1, 10));
      image(BG[BGindex], 0, 0, width, height);
    }
    //noise background
    image(noiseBG[1], 0, 0, width, height);

    //table
    if (floor(fxRandom(0, 10)) > 4) {
      let tableindex = floor(fxRandom(1, 8));
      image(table[tableindex], 0, 0, width, height);
    }
    //rightcandle
    if (fxRandom(0, 10) > 6) {
      image(candleR[1], 0, 0, width, height);
    }

    //burger

    let burgerHeight = 0;
    let burgerCount = fxRandom(1, 9);
    if (floor(fxRandom(0, 10)) == 6) {
      print("tallVersion")
      burgerCount=20;
    }
    //base
    if (fxRandom(1, 11) > 5) {
      image(toonbaseburger[1], 0, burgerHeight, width, height);
    }
    else {
      image(toonbasesandwich[1], 0, burgerHeight, width, height);
    }
    //ingredient
    for (let i = 1; i < burgerCount; i++) {
      let ingredient = floor(fxRandom(1, 13));

      print(ingredient);
      if (ingredient == 1) {
        image(toonbeef[1], 0, burgerHeight, width, height);

        let moreingredient = floor(fxRandom(0, 10));
        if (moreingredient == 7) {
          image(tooncream[1], 0, burgerHeight, width, height);
          burgerHeight -= 28* canvasRatio;
        }
        else if (moreingredient == 8) {
          image(toonmeltedcheese[1], 0, burgerHeight, width, height);
          burgerHeight -= 28* canvasRatio;
        }
        else if (moreingredient == 9) {
          image(toonbill[1], 0, burgerHeight, width, height);
          burgerHeight -= 1* canvasRatio;
        }

        burgerHeight -= 74* canvasRatio;
      }
      else if (ingredient == 2) {
        image(toonbacon[1], 0, burgerHeight, width, height);

        let moreingredient = floor(fxRandom(0, 10));
        if (moreingredient == 7) {
          image(tooncream[1], 0, burgerHeight, width, height);
          burgerHeight -= 10* canvasRatio;
        }
        else if (moreingredient == 8) {
          image(toonmeltedcheese[1], 0, burgerHeight, width, height);
          burgerHeight -= 10* canvasRatio;
        }
        else if (moreingredient == 9) {
          image(toonbill[1], 0, burgerHeight, width, height);
          burgerHeight -= 1* canvasRatio;
        }
        burgerHeight -= 85* canvasRatio;
      }
      else if (ingredient == 3) {
        image(toonlettuce[1], 0, burgerHeight, width, height);

        let moreingredient = floor(fxRandom(0, 10));
        if (moreingredient == 7) {
          image(tooncream[1], 0, burgerHeight, width, height);
          burgerHeight -= 10* canvasRatio;
        }
        else if (moreingredient == 8) {
          image(toonmeltedcheese[1], 0, burgerHeight, width, height);
          burgerHeight -= 10* canvasRatio;
        }
        else if (moreingredient == 9) {
          image(toonbill[1], 0, burgerHeight, width, height);
          burgerHeight -= 1* canvasRatio;
        }
        burgerHeight -= 75* canvasRatio;
      }
      else if (ingredient == 4) {
        image(toontomato[1], 0, burgerHeight, width, height);

        burgerHeight -= 45* canvasRatio;
      }
      else if (ingredient == 5) {
        image(tooncheese[1], 0, burgerHeight, width, height);

        burgerHeight -= 10* canvasRatio;
      }
      else if (ingredient == 6) {

        image(toonphone[1], 0, burgerHeight, width, height);


        burgerHeight -= 16* canvasRatio;
      }
      else if (ingredient == 7) {
        image(toonbook[1], 0, burgerHeight, width, height);

        let moreingredient = floor(fxRandom(0, 10));
        if (moreingredient == 9) {
          image(toonbill[1], 0, burgerHeight, width, height);
          burgerHeight -= 1* canvasRatio;
        }
        burgerHeight -= 93* canvasRatio;
      }
      else if (ingredient == 8) {
        image(toonegg[1], 0, burgerHeight, width, height);

        let moreingredient = floor(fxRandom(0, 10));
        if (moreingredient == 7) {
          image(tooncream[1], 0, burgerHeight, width, height);
          burgerHeight -= 10* canvasRatio;
        }
        else if (moreingredient == 8) {
          image(toonmeltedcheese[1], 0, burgerHeight, width, height);
          burgerHeight -= 10* canvasRatio;
        }
        else if (moreingredient == 9) {
          image(toonbill[1], 0, burgerHeight, width, height);
          burgerHeight -= 1* canvasRatio;
        }
        burgerHeight -= 70* canvasRatio;
      }
      else if (ingredient == 9) {
        image(toondonut[1], 0, burgerHeight, width, height);

        let moreingredient = floor(fxRandom(0, 10));
        if (moreingredient == 7) {
          image(tooncream[1], 0, burgerHeight, width, height);
          burgerHeight -= 10* canvasRatio;
        }
        else if (moreingredient == 8) {
          image(toonmeltedcheese[1], 0, burgerHeight, width, height);
          burgerHeight -= 10* canvasRatio;
        }
        else if (moreingredient == 9) {
          image(toonbill[1], 0, burgerHeight, width, height);
          burgerHeight -= 1* canvasRatio;
        }
        burgerHeight -= 77* canvasRatio;
      }
      else if (ingredient == 10) {
        image(toonfrenchfries[1], 0, burgerHeight, width, height);

        let moreingredient = floor(fxRandom(0, 10));
        if (moreingredient == 9) {
          image(toonbill[1], 0, burgerHeight, width, height);
          burgerHeight -= 1* canvasRatio;
        }
        burgerHeight -= 93* canvasRatio;
      }
      else if (ingredient == 11) {
        image(toonsandwich[1], 0, burgerHeight, width, height);
        let moreingredient = floor(fxRandom(0, 10));
        if (moreingredient == 9) {
          image(toonbill[1], 0, burgerHeight, width, height);
          burgerHeight -= 1* canvasRatio;
        }
        burgerHeight -= 80* canvasRatio;
      }
      else if (ingredient == 12) {
        image(toonfish[1], 0, burgerHeight, width, height);

        let moreingredient = floor(fxRandom(0, 10));
        if (moreingredient == 7) {
          image(tooncream[1], 0, burgerHeight, width, height);
          burgerHeight -= 10* canvasRatio;
        }
        else if (moreingredient == 8) {
          image(toonmeltedcheese[1], 0, burgerHeight, width, height);
          burgerHeight -= 10* canvasRatio;
        }
        else if (moreingredient == 9) {
          image(toonbill[1], 0, burgerHeight, width, height);
          burgerHeight -= 1* canvasRatio;
        }
        burgerHeight -= 87* canvasRatio;
      }




      await sleep(200); // 等待 200 毫秒
    }
    //top
    let topbread = floor(fxRandom(1, 4));
    if (topbread == 1) {
      image(toontopburger[1], 0, burgerHeight, width, height);
      burgerHeight -= 80* canvasRatio;
    }
    else if (topbread == 2) {
      image(toonsandwich[1], 0, burgerHeight, width, height);
      burgerHeight -= 80* canvasRatio;
    }
    else if (topbread == 3) {
    }
    //flag
    let topflag = floor(fxRandom(0, 10));
    print(topflag);
    if (topflag > 2) {
      image(toonflag[floor(fxRandom(1, 3))], 0, burgerHeight, width, height);
    }
    else if (topflag == 2) {
    }

    //left
    if (fxRandom(0, 10) > 6) {
      image(chopsticks[1], 0, 0, width, height);
    }
    if (fxRandom(0, 10) > 6) {
      image(candleL[1], 0, 0, width, height);
    }
    if (fxRandom(0, 10) > 6) {
      image(spoon[1], 0, 0, width, height);
    }
    if (fxRandom(0, 10) > 7) {
      image(knife[1], 0, 0, width, height);
    }

    //right
    let cuporcan = (fxRandom(0, 10));
    if (fxRandom(0, 10) > 6) {
      if (cuporcan < 6) {
        image(cup[floor(fxRandom(1, 6))], 0, 0, width, height);
      }
      else {
        let canCount = floor(fxRandom(1, 5))
        let canHeight = 0;
        image(basecan[floor(fxRandom(1, 4))], 0, 0, width, height);

        for (let c = 1; c < canCount; c++) {
          image(can[floor(fxRandom(1, 4))], 0, canHeight, width, height);
          canHeight -= 306* canvasRatio;
          await sleep(100); // 等待 200 毫秒
        }
        if (fxRandom(0, 10) > 5) {
          image(sugar[1], 0, 0, width, height);
        }
      }
    }
  }

  //BW version
  else if (styleburger > 9) {
    background(fxRandom(10, 200));

    //choosing background
    if (floor(fxRandom(0, 10)) > 6) {
      let BGindex = floor(fxRandom(1, 10));
      image(BG[BGindex], 0, 0, width, height);
    }
    //noise background
    image(noiseBG[1], 0, 0, width, height);

    //BWtable
    if (floor(fxRandom(0, 10)) > 4) {
      let BWtableindex = floor(fxRandom(1, 7));
      image(BWtable[BWtableindex], 0, 0, width, height);
    }
    //rightcandle
    if (fxRandom(0, 10) > 6) {
      if (floor(fxRandom(0, 10)) == 6) {
        image(candleR[1], 0, 0, width, height);
      }
      else {
        image(BWcandleR[1], 0, 0, width, height);
      }
    }
    //rareburger
    if (floor(fxRandom(0, 100) == 1) ){
      image(BWallburger[1], 0, 0, width, height);
    }
    //burger
    else {
      let burgerHeight = 0;
      let burgerCount = fxRandom(1, 9);
      if (floor(fxRandom(0, 10)) == 6) {
        print("tallVersion")
        burgerCount=20;
      }
      //base
      if (fxRandom(1, 11) > 5) {
        if (floor(fxRandom(0, 10)) == 6) {
          image(baseburger[1], 0, burgerHeight, width, height);
        }
        else {
          image(BWbaseburger[1], 0, burgerHeight, width, height);
        }

      }
      else {
        if (floor(fxRandom(0, 10)) == 6) {
          image(basesandwich[1], 0, burgerHeight, width, height);
        }
        else {
          image(BWbasesandwich[1], 0, burgerHeight, width, height);
        }
      }
      //ingredient
      for (let i = 1; i < burgerCount; i++) {
        let ingredient = floor(fxRandom(1, 13));

        print(ingredient);
        if (ingredient == 1) {
          if (floor(fxRandom(0, 10)) == 6) {
            image(beef[1], 0, burgerHeight, width, height);
          }
          else {
            image(BWbeef[1], 0, burgerHeight, width, height);
          }

          let moreingredient = floor(fxRandom(0, 10));
          if (moreingredient == 7) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(cream[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWcream[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 8) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(meltedcheese[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWmeltedcheese[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 2* canvasRatio;
          }
          else if (moreingredient == 9) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(bill[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWbill[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 1* canvasRatio;
          }

          burgerHeight -= 74* canvasRatio;
        }
        else if (ingredient == 2) {
          if (floor(fxRandom(0, 10)) == 6) {
            image(bacon[1], 0, burgerHeight, width, height);
          }
          else {
            image(BWbacon[1], 0, burgerHeight, width, height);
          }

          let moreingredient = floor(fxRandom(0, 10));
          if (moreingredient == 7) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(cream[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWcream[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 8) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(meltedcheese[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWmeltedcheese[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 9) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(BWbill[1], 0, burgerHeight, width, height);
            }
            else {
              image(bill[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 1* canvasRatio;
          }
          burgerHeight -= 82* canvasRatio;
        }
        else if (ingredient == 3) {
          if (floor(fxRandom(0, 10)) == 6) {
            image(lettuce[1], 0, burgerHeight, width, height);
          }
          else {
            image(BWlettuce[1], 0, burgerHeight, width, height);
          }

          let moreingredient = floor(fxRandom(0, 10));
          if (moreingredient == 7) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(cream[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWcream[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 8) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(meltedcheese[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWmeltedcheese[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 9) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(bill[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWbill[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 1* canvasRatio;
          }
          burgerHeight -= 75* canvasRatio;
        }
        else if (ingredient == 4) {
          if (floor(fxRandom(0, 10)) == 6) {
            image(tomato[1], 0, burgerHeight, width, height);
          }
          else {
            image(BWtomato[1], 0, burgerHeight, width, height);
          }

          burgerHeight -= 45* canvasRatio;
        }
        else if (ingredient == 5) {
          if (floor(fxRandom(0, 10)) == 6) {
            image(cheese[1], 0, burgerHeight, width, height);
          }
          else {
            image(BWcheese[1], 0, burgerHeight, width, height);
          }
          
          burgerHeight -= 10* canvasRatio;
        }
        else if (ingredient == 6) {
          let numberphone = floor(fxRandom(1, 4));
          if (numberphone == 1) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(phone[floor(fxRandom(1, 4))], 0, burgerHeight, width, height);
            }
            else {
              image(BWphone[floor(fxRandom(1, 4))], 0, burgerHeight, width, height);
            }
          }
          else if (numberphone == 2) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(phone[floor(fxRandom(1, 4))], 0, burgerHeight, width, height);
            }
            else {
              image(BWphone[floor(fxRandom(1, 4))], 0, burgerHeight, width, height);
            }
            if (floor(fxRandom(0, 10)) == 6) {
              image(phone[floor(fxRandom(1, 4))], 0, burgerHeight, width, height);
            }
            else {
              image(BWphone[floor(fxRandom(1, 4))], 0, burgerHeight, width, height);
            }
          }
          else if (numberphone == 3) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(phone[3], 0, burgerHeight, width, height);
            }
            else {
              image(BWphone[3], 0, burgerHeight, width, height);
            }
            if (floor(fxRandom(0, 10)) == 6) {
              image(phone[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWphone[1], 0, burgerHeight, width, height);
            }
            if (floor(fxRandom(0, 10)) == 6) {
              image(phone[2], 0, burgerHeight, width, height);
            }
            else {
              image(BWphone[2], 0, burgerHeight, width, height);
            }

          }

          burgerHeight -= 16* canvasRatio;
        }
        else if (ingredient == 7) {
          if (floor(fxRandom(0, 10)) == 6) {
            image(book[floor(fxRandom(1, 5))], 0, burgerHeight, width, height);
          }
          else {
            image(BWbook[floor(fxRandom(1, 5))], 0, burgerHeight, width, height);
          }

          let moreingredient = floor(fxRandom(0, 10));
          if (moreingredient == 9) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(bill[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWbill[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 1* canvasRatio;
          }
          burgerHeight -= 93* canvasRatio;
        }
        else if (ingredient == 8) {
          if (floor(fxRandom(0, 10)) == 6) {
            image(egg[1], 0, burgerHeight, width, height);
          }
          else {
            image(BWegg[1], 0, burgerHeight, width, height);
          }

          let moreingredient = floor(fxRandom(0, 10));
          if (moreingredient == 7) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(cream[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWcream[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 8) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(meltedcheese[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWmeltedcheese[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 9) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(bill[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWbill[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 1* canvasRatio;
          }
          burgerHeight -= 70* canvasRatio;
        }
        else if (ingredient == 9) {
          if (floor(fxRandom(0, 10)) == 6) {
            image(donut[1], 0, burgerHeight, width, height);
          }
          else {
            image(BWdonut[1], 0, burgerHeight, width, height);
          }

          let moreingredient = floor(fxRandom(0, 10));
          if (moreingredient == 7) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(cream[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWcream[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 8) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(meltedcheese[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWmeltedcheese[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 9) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(bill[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWbill[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 1* canvasRatio;
          }
          burgerHeight -= 77* canvasRatio;
        }
        else if (ingredient == 10) {
          if (floor(fxRandom(0, 10)) == 6) {
            image(frenchfries[1], 0, burgerHeight, width, height);
          }
          else {
            image(BWfrenchfries[1], 0, burgerHeight, width, height);
          }

          let moreingredient = floor(fxRandom(0, 10));
          if (moreingredient == 9) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(bill[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWbill[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 1* canvasRatio;
          }
          burgerHeight -= 93* canvasRatio;
        }
        else if (ingredient == 11) {
          if (floor(fxRandom(0, 10)) == 6) {
            image(sandwich[1], 0, burgerHeight, width, height);
          }
          else {
            image(BWsandwich[1], 0, burgerHeight, width, height);
          }
          let moreingredient = floor(fxRandom(0, 10));
          if (moreingredient == 9) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(bill[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWbill[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 1* canvasRatio;
          }
          burgerHeight -= 80* canvasRatio;
        }
        else if (ingredient == 12) {
          if (floor(fxRandom(0, 10)) == 6) {
            image(fish[1], 0, burgerHeight, width, height);
          }
          else {
            image(BWfish[1], 0, burgerHeight, width, height);
          }

          let moreingredient = floor(fxRandom(0, 10));
          if (moreingredient == 7) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(cream[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWcream[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 8) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(meltedcheese[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWmeltedcheese[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 9) {
            if (floor(fxRandom(0, 10)) == 6) {
              image(bill[1], 0, burgerHeight, width, height);
            }
            else {
              image(BWbill[1], 0, burgerHeight, width, height);
            }
            burgerHeight -= 1* canvasRatio;
          }
          burgerHeight -= 87* canvasRatio;
        }




        await sleep(200); // 等待 200 毫秒
      }
      //top
      let topbread = floor(fxRandom(1, 4));
      if (topbread == 1) {
        if (floor(fxRandom(0, 10)) == 6) {
          image(topburger[1], 0, burgerHeight, width, height);
        }
        else {
          image(BWtopburger[1], 0, burgerHeight, width, height);
        }

        burgerHeight -= 80* canvasRatio;
      }
      else if (topbread == 2) {

        if (floor(fxRandom(0, 10)) == 6) {
          image(sandwich[1], 0, burgerHeight, width, height);
        }
        else {
          image(BWsandwich[1], 0, burgerHeight, width, height);
        }
        burgerHeight -= 80* canvasRatio;
      }
      else if (topbread == 3) {
      }
      //flag
      let topflag = floor(fxRandom(0, 10));
      if (topflag > 2) {
        if (floor(fxRandom(0, 10)) == 6) {
          image(flag[floor(fxRandom(1, 8))], 0, burgerHeight, width, height);
        }
        else {
          image(BWflag[floor(fxRandom(1, 8))], 0, burgerHeight, width, height);
        }
      }
      else if (topflag == 2) {
      }
    }

    //left
    if (fxRandom(0, 10) > 6) {
      if (floor(fxRandom(0, 10)) == 6) {
        image(chopsticks[1], 0, 0, width, height);
      }
      else {
        image(BWchopsticks[1], 0, 0, width, height);
      }
    }
    if (fxRandom(0, 10) > 6) {
      if (floor(fxRandom(0, 10)) == 6) {
        image(candleL[1], 0, 0, width, height);
      }
      else {
        image(BWcandleL[1], 0, 0, width, height);
      }
    }
    if (fxRandom(0, 10) > 6) {
      if (floor(fxRandom(0, 10)) == 6) {
        image(spoon[1], 0, 0, width, height);
      }
      else {
        image(BWspoon[1], 0, 0, width, height);
      }
    }
    if (fxRandom(0, 10) > 7) {
      if (floor(fxRandom(0, 10)) == 6) {
        image(knife[1], 0, 0, width, height);
      }
      else {
        image(BWknife[1], 0, 0, width, height);
      }
    }

    //right
    let cuporcan = (fxRandom(0, 10));
    if (fxRandom(0, 10) > 6) {
      if (cuporcan < 6) {
        if (floor(fxRandom(0, 10)) == 6) {
          image(cup[floor(fxRandom(1, 5))], 0, 0, width, height);
        }
        else {
          image(BWcup[floor(fxRandom(1, 5))], 0, 0, width, height);
        }
      }
      else {
        let canCount = floor(fxRandom(1, 5))
        let canHeight = 0;
        if (floor(fxRandom(0, 10)) == 6) {
          image(basecan[floor(fxRandom(1, 4))], 0, 0, width, height);
        }
        else {
          image(BWbasecan[floor(fxRandom(1, 4))], 0, 0, width, height);
        }

        for (let c = 1; c < canCount; c++) {
          if (floor(fxRandom(0, 10)) == 6) {
            image(can[floor(fxRandom(1, 4))], 0, canHeight, width, height);
          }
          else {
            image(BWcan[floor(fxRandom(1, 4))], 0, canHeight, width, height);
          }
          canHeight -= 306* canvasRatio;
          await sleep(100); // 等待 200 毫秒
        }
        if (fxRandom(0, 10) > 5) {
          if (floor(fxRandom(0, 10)) == 6) {
            image(BWsugar[1], 0, 0, width, height);
          }
          else {
            image(sugar[1], 0, 0, width, height);
          }
        }

      }
    }


  }

  //normal version
  else {
    colorMode(HSB);
    background(fxRandom(0, 360), fxRandom(0, 40), fxRandom(20, 90));

    //choosing background
    if (floor(fxRandom(0, 10)) > 6) {
      let BGindex = floor(fxRandom(1, 10));
      image(BG[BGindex], 0, 0, width, height);
    }
    //noise background
    image(noiseBG[1], 0, 0, width, height);

    //table
    if (floor(fxRandom(0, 10)) > 4) {
      let tableindex = floor(fxRandom(1, 8));
      image(table[tableindex], 0, 0, width, height);
    }
    //rightcandle
    if (fxRandom(0, 10) > 6) {
      image(candleR[1], 0, 0, width, height);
    }
    //rareburger
    if (floor(fxRandom(0, 100) == 1)) {
      image(allburger[1], 0, 0, width, height);
    }
    //burger
    else {
      let burgerHeight = 0;
      let burgerCount = fxRandom(1, 9);
      if (floor(fxRandom(0, 10)) == 6) {
        print("tallVersion")
        burgerCount=20;
      }
      print(burgerCount);
      //base
      if (fxRandom(1, 11) > 5) {
        image(baseburger[1], 0, burgerHeight, width, height);
      }
      else {
        image(basesandwich[1], 0, burgerHeight, width, height);
      }
      //ingredient
      for (let i = 1; i < burgerCount; i++) {
        let ingredient = floor(fxRandom(1, 13));

        print(ingredient);
        if (ingredient == 1) {
          image(beef[1], 0, burgerHeight, width, height);

          let moreingredient = floor(fxRandom(0, 10));
          if (moreingredient == 7) {
            image(cream[1], 0, burgerHeight, width, height);
            burgerHeight -= 28 * canvasRatio;
          }
          else if (moreingredient == 8) {
            image(meltedcheese[1], 0, burgerHeight, width, height);
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 9) {
            image(bill[1], 0, burgerHeight, width, height);
            burgerHeight -= 1* canvasRatio;
          }

          burgerHeight -= 74* canvasRatio;
        }
        else if (ingredient == 2) {
          image(bacon[1], 0, burgerHeight, width, height);

          let moreingredient = floor(fxRandom(0, 10));
          if (moreingredient == 7) {
            image(cream[1], 0, burgerHeight, width, height);
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 8) {
            image(meltedcheese[1], 0, burgerHeight, width, height);
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 9) {
            image(bill[1], 0, burgerHeight, width, height);
            burgerHeight -= 1* canvasRatio;
          }
          burgerHeight -= 82* canvasRatio;
        }
        else if (ingredient == 3) {
          image(lettuce[1], 0, burgerHeight, width, height);

          let moreingredient = floor(fxRandom(0, 10));
          if (moreingredient == 7) {
            image(cream[1], 0, burgerHeight, width, height);
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 8) {
            image(meltedcheese[1], 0, burgerHeight, width, height);
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 9) {
            image(bill[1], 0, burgerHeight, width, height);
            burgerHeight -= 1* canvasRatio;
          }
          burgerHeight -= 75* canvasRatio;
        }
        else if (ingredient == 4) {
          image(tomato[1], 0, burgerHeight, width, height);

          burgerHeight -= 45* canvasRatio;
        }
        else if (ingredient == 5) {
          image(cheese[1], 0, burgerHeight, width, height);

          burgerHeight -= 10* canvasRatio;
        }
        else if (ingredient == 6) {
          let numberphone = floor(fxRandom(1, 4));
          if (numberphone == 1) {
            image(phone[floor(fxRandom(1, 4))], 0, burgerHeight, width, height);
          }
          else if (numberphone == 2) {
            image(phone[floor(fxRandom(1, 4))], 0, burgerHeight, width, height);
            image(phone[floor(fxRandom(1, 4))], 0, burgerHeight, width, height);
          }
          else if (numberphone == 3) {
            image(phone[3], 0, burgerHeight, width, height);
            image(phone[1], 0, burgerHeight, width, height);
            image(phone[2], 0, burgerHeight, width, height);

          }

          burgerHeight -= 16* canvasRatio;
        }
        else if (ingredient == 7) {
          image(book[floor(fxRandom(1, 5))], 0, burgerHeight, width, height);

          let moreingredient = floor(fxRandom(0, 10));
          if (moreingredient == 9) {
            image(bill[1], 0, burgerHeight, width, height);
            burgerHeight -= 1* canvasRatio;
          }
          burgerHeight -= 93* canvasRatio;
        }
        else if (ingredient == 8) {
          image(egg[1], 0, burgerHeight, width, height);

          let moreingredient = floor(fxRandom(0, 10));
          if (moreingredient == 7) {
            image(cream[1], 0, burgerHeight, width, height);
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 8) {
            image(meltedcheese[1], 0, burgerHeight, width, height);
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 9) {
            image(bill[1], 0, burgerHeight, width, height);
            burgerHeight -= 1* canvasRatio;
          }
          burgerHeight -= 70* canvasRatio;
        }
        else if (ingredient == 9) {
          image(donut[1], 0, burgerHeight, width, height);

          let moreingredient = floor(fxRandom(0, 10));
          if (moreingredient == 7) {
            image(cream[1], 0, burgerHeight, width, height);
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 8) {
            image(meltedcheese[1], 0, burgerHeight, width, height);
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 9) {
            image(bill[1], 0, burgerHeight, width, height);
            burgerHeight -= 1* canvasRatio;
          }
          burgerHeight -= 77* canvasRatio;
        }
        else if (ingredient == 10) {
          image(frenchfries[1], 0, burgerHeight, width, height);

          let moreingredient = floor(fxRandom(0, 10));
          if (moreingredient == 9) {
            image(bill[1], 0, burgerHeight, width, height);
            burgerHeight -= 1* canvasRatio;
          }
          burgerHeight -= 93* canvasRatio;
        }
        else if (ingredient == 11) {
          image(sandwich[1], 0, burgerHeight, width, height);
          let moreingredient = floor(fxRandom(0, 10));
          if (moreingredient == 9) {
            image(bill[1], 0, burgerHeight, width, height);
            burgerHeight -= 1* canvasRatio;
          }
          burgerHeight -= 80* canvasRatio;
        }
        else if (ingredient == 12) {
          image(fish[1], 0, burgerHeight, width, height);

          let moreingredient = floor(fxRandom(0, 10));
          if (moreingredient == 7) {
            image(cream[1], 0, burgerHeight, width, height);
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 8) {
            image(meltedcheese[1], 0, burgerHeight, width, height);
            burgerHeight -= 28* canvasRatio;
          }
          else if (moreingredient == 9) {
            image(bill[1], 0, burgerHeight, width, height);
            burgerHeight -= 1* canvasRatio;
          }
          burgerHeight -= 87* canvasRatio;
        }




        await sleep(200); // 等待 200 毫秒
      }
      //top
      let topbread = floor(fxRandom(1, 4));
      if (topbread == 1) {
        image(topburger[1], 0, burgerHeight, width, height);
        burgerHeight -= 80* canvasRatio;
      }
      else if (topbread == 2) {
        image(sandwich[1], 0, burgerHeight, width, height);
        burgerHeight -= 80* canvasRatio;
      }
      else if (topbread == 3) {
      }
      //flag
      let topflag = floor(fxRandom(0, 10));
      print(topflag);
      if (topflag > 2) {
        image(flag[floor(fxRandom(1, 8))], 0, burgerHeight, width, height);
      }
      else if (topflag == 2) {
      }
    }
    //left
    if (fxRandom(0, 10) > 6) {
      image(chopsticks[1], 0, 0, width, height);
    }
    if (fxRandom(0, 10) > 6) {
      image(candleL[1], 0, 0, width, height);
    }
    if (fxRandom(0, 10) > 6) {
      image(spoon[1], 0, 0, width, height);
    }
    if (fxRandom(0, 10) > 7) {
      image(knife[1], 0, 0, width, height);
    }

    //right
    let cuporcan = (fxRandom(0, 10));
    if (fxRandom(0, 10) > 6) {
      if (cuporcan < 6) {
        image(cup[floor(fxRandom(1, 6))], 0, 0, width, height);
      }
      else {
        let canCount = floor(fxRandom(1, 5))
        let canHeight = 0;
        image(basecan[floor(fxRandom(1, 4))], 0, 0, width, height);

        for (let c = 1; c < canCount; c++) {
          image(can[floor(fxRandom(1, 4))], 0, canHeight, width, height);
          canHeight -= 306* canvasRatio;
          await sleep(100); // 等待 200 毫秒
        }
        if (fxRandom(0, 10) > 5) {
          image(sugar[1], 0, 0, width, height);
        }
      }
    }
  }
  function draw() {

  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

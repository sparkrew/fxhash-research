
// LOADING... by fauxjebus
// fxhash project 008

function setup() {

  Math.random = fxrand;
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999); // Thank you Sableraph

  colorMode(HSB);
  frameRate(60);
  createCanvas(windowWidth+1, windowHeight);
  Speed=0;
  roundedCorners = int(random(2));
  margin = 50;

  if (roundedCorners == 0){
    corners=0;
    roundedCorners = "No";
  }
  if (roundedCorners == 1){
    corners=int(random(10));
    roundedCorners = "Yes";
  }

 RxB = [[5,90,75],[50,88,95],[40,2,95],[215,69,60],[0,0,15]];
  Cmyk = [[0,0,10],[196,92,87],[328,85,83],[53,80,100]];
  Dream = [[0,30,95],[45,30,99],[110,30,90],[200,40,95],[330,20,99]];
  Citrus = [[120,50,15],[99,79,36],[89,100,57],[75,86,77],[50,80,100],[90,7,98]];
  Jazz = [[317,72,34],[337,92,56],[343,100,78],[11,80,97],[40,82,97]];
  ShadesofGrey = [[0,0,95],[240,1,85],[225,2,70],[225,2,60],[216,3,40],[216,3,30],[216,3,20],[216,3,10],[216,3,5]];
  Seuss = [[337,43,95],[100,37,83],[56,47,96],[248,30,85],[38,63,96],[199,87,79],[26,2,96]];
  Lean = [[334,63,95],[270,20,99],[308,79,56],[284,74,48],[261,71,42],[247,72,36], [236,78,28],[210,89,85],[230,71,52]];
  Repetition = [[248,69,45],[184,100,91],[40,5,95],[51,97,97],[13,97,95]];
  Halloween= [[40,5,95],[40,70,95],[24,80,92],[0,0,15]];
  Melons = [[152,54,50],[325,40,91],[10,84,86],[19,85,93],[45,0,13],[45,0,95]];
  Coffee = [[20,60,15],[22,78,28],[19,78,42],[21,70,54],[28,50,82],[35,23,93]];
  Strain = [[166,5,56],[13,100,100],[63,100,100],[105,100,90],[190,100,100],[270,100,100]];
  Cluck = [[348,84,96],[15,90,98],[55,65,99],[348,14,96],[55,15,99],[45,0,13]];
  Kasparov = [[242,99,29],[240,100,47],[238,100,69],[235,100,87],[232,99,100]];
  Marston = [[13,100,15],[9,100,28],[6,100,52],[4,100,71],[350,100,100]];
  Tommy = [[167,94,14],[149,100,30],[143,87,51],[126,63,75],[114,44,94]];
  Midas = [[39,93,100],[45,93,100],[49,93,100],[50,66,100],[55,40,100]];
  Freddy = [[16,93,90],[21,93,94],[25,93,100],[27,63,100],[29,40,100]];
  Monday = [[197,94,14],[199,100,30],[199,87,51],[196,63,75],[194,44,94]];
  Claire = [[340,94,30],[330,100,60],[334,80,90],[340,53,95],[340,30,100]];

  palettes = [RxB, Cmyk, Dream, Citrus, Jazz, ShadesofGrey, Seuss, Lean, Repetition, Halloween, Melons, Coffee, Strain, Cluck, Kasparov, Marston, Tommy, Midas, Freddy, Monday, Claire];
  paletteNames = ["RXB","CMYK","Dream","Citrus","Jazz","Shades of Grey","Seuss","Lean","Repetition","Halloween","Melons","Coffee","Strain","Cluck","Kasparov","Marston","Tommy","Midas","Freddy","Monday","Claire"];

  palettePicker = int(random(palettes.length));
  palette = palettes[palettePicker];
  paletteName = paletteNames[palettePicker];
  paletteChange = int(random(20));
  gradientRoll = int(random(18));

  colourX = random(palette);
  colourY = random(palette);
  colourZ = random(palette);

  for (c = 0; c < 10; c++) {
    if (colourY == colourX){
      colourY=random(palette);
    }
    if (colourZ == colourX){
      colourZ=random(palette);
    }
    if (colourZ == colourY){
      colourZ=random(palette);
    }}

    background(colourZ);

    barType = int(random(6));
    barChange = int(random(10));

    slowSpeed = random(0.1,1);
    mediumSpeed = random(1,3);
    fastSpeed = random(3,20);

    transferSpeed = int(random(7));

    if (transferSpeed == 0){
      transferRate = slowSpeed;
      transferSpeedFeat = "Slow";
    }
    if (transferSpeed == 1){
      transferRate = mediumSpeed;
      transferSpeedFeat = "Medium";
    }
    if (transferSpeed == 2){
      transferRate = fastSpeed;
      transferSpeedFeat = "Fast";
    }
    if (transferSpeed >= 3){
      transferRate = random(0.1,20);
      transferSpeedFeat = "Random";
    }

    bgChange = int(random(3));

    // FX Features
    paletteFeat = paletteName;
    if ( paletteChange == 4){
      paletteFeat = "Random"
    }

    bgChangeFeat = "No"
    if (bgChange == 0 || paletteChange == 4){
      bgChangeFeat = "Yes";
    }

    barVariation = "No"
    if (barChange >=5 && barChange <= 8){
      barVariation = "Slight"
    }
    if (barChange == 9){
      barVariation = "Random"
    }


    if (barType <=  2){
      barHeight=random(3,50)
      barThickness = "Thin";
    }
    if (barType ==  3){
      barHeight=random(height/10,height/3)
      barThickness = "Medium";
    }
    if (barType ==  4){
      barHeight=random(height/2.8,height-100)
      barThickness = "Thick";
    }
    if (barType ==  5){
      barThickness = "Full Screen";
      barVariation = "No"
      roundedCorners = "No";
    }

    bgGradFeat = "No"
    if (gradientRoll == 17){
      bgGradFeat = "Yes"
    }

    window.$fxhashFeatures = {
      "Palette": paletteFeat,
      "Background Gradient": bgGradFeat,
      "Background Change": bgChangeFeat,
      "Bar Thickness": barThickness,
      "Bar Variation": barVariation,
      "Rounded Corners": roundedCorners,
      "Loading Speed": transferSpeedFeat,
    }
  }


  function draw() {

    push();

    background(colourX);

    // gradient bg
    if (gradientRoll == 17){
      for (let x = 0; x < width+1; x++) {
        let h = map(x, 0, width*100, 0, 100);
        stroke(colourZ[0],colourZ[1],colourZ[2],h);
        line(x, 0, x, height);
      }
    }


    fill(colourY);
    noStroke();

    Speed=Speed+transferRate;

    rightEdge = width-(margin*2)
    if (barType >=  5){
      rightEdge = width
    }


    // reset when bar gets to edge

    if (Speed>rightEdge){
      Speed=0;

      if (barType <=  4){
        if (bgChange == 0 || paletteChange ==4){
          colourX = random(palette); // Change BG colour
        }
      }

      colourY = colourZ;
      colourZ = random(palette);

      if (barType >=  5){
        colourY = colourX;
        colourX = random(palette);
      }

      for (c = 0; c < 10; c++) {
        if (colourY == colourX){
          colourY=random(palette);
        }
        if (colourZ == colourX){
          colourZ=random(palette);
        }
        if (colourZ == colourY){
          colourZ=random(palette);
        }
      }


      if (transferSpeed == 0){
        transferRate = random(0.1,1);
      }
      if (transferSpeed == 1){
        transferRate = random(1,3);
      }
      if (transferSpeed == 2){
        transferRate = random(3,20);
      }
      if (transferSpeed >= 3){
        transferRate = random(0.1,20);
      }

      if (barChange >=5 && barChange <= 8){
        if (barType <=  2){
          barHeight=random(3,50)
        }
        if (barType ==  3){
          barHeight=random(height/10,height/3)
        }
        if (barType ==  4){
          barHeight=random(height/2.8,height-100)
        }
      }

      if (barChange == 9){
        barHeight=random(3,height-100)
      }

      if ( paletteChange == 4){
        palettePicker = int(random(palettes.length));
        palette = palettes[palettePicker];
        paletteName = paletteNames[palettePicker];
      }

      //  console.log(transferRate);
      // console.log(paletteName);
    }

    // end reset loop

    if (barType <=  4){
      translate(0,height/2-(barHeight/2));
      drawBar1();
    }

    // Full screen Bar
    if (barType >= 5){
      fill(colourY);
      rect(0,0,width+1,height); // Background

      if (gradientRoll == 17){
        for (let x = 0; x < width+1; x++) {
          let h = map(x, 0, width*100, 0, 100);
          stroke(colourZ[0],colourZ[1],colourZ[2],h);
          line(x, 0, x, height);
        }
      }
      fill(colourX);
      rect(0,0,Speed,height);
    }
  }


  function drawBar1(){
    fill(colourY);
    rect(margin,0,width-(margin*2),barHeight,corners); // back bar

    fill(colourZ);
    rect(margin,0,Speed,barHeight,corners); // bar
  }

  function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }
  function keyPressed() {
    if (key ==="s"){
      save('Loading.png');
    }
    if (key ==="f"){
      let f=fullscreen();fullscreen(!f)
    }
  }

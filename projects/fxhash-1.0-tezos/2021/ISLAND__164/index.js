// these are the variables you can use as inputs to your algorithms
console.log(fxhash);  // the 64 chars hex number fed to your algorithm
console.log(fxrand());// deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//


// this code writes the values to the DOM as an example
// const container = document.createElement("div");
// container.innerText = `
//   random hash: ${fxhash}\n
//   some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]\n
// `
// document.body.prepend(container);


var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

    canvas.width = window.innerHeight;
    canvas.height = canvas.width; 

var randomValue = fxrand()*10,

    blocksRows = Math.ceil(randomValue);
    if (blocksRows==1){blocksRows++};

var blocksColumns = blocksRows,
    blockWidth = (canvas.width - 30 * 2) / blocksRows,
    blockHeight = (canvas.height - 30 * 2) / blocksColumns,
    blockElHeight = blockHeight * 2,

    blocksName = ["Water", "Earth", "Sand"],
    waterSpriteNum = [0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    sandSpriteNum = [2,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
    rocksSpriteNum = [2,18,21,22,23,24,31,34,30,29,25,27];
    blocksBaseSprites = [
    "./S/Water.svg", "./S/Plain.svg", "./S/Rock2.svg", //0,1,2
    "./S/WaterUp.svg", "./S/WaterRight.svg", "./S/WaterDown.svg", "./S/WaterLeft.svg", //3,4,5,6
    "./S/WaterAlone.svg", //7
    "./S/WTripleUp.svg", "./S/WTripleRight.svg", "./S/WTripleDown.svg", "./S/WTripleLeft.svg", //8,9,10,11
    "./S/WCornerUR.svg", "./S/WCornerUL.svg", "./S/WCornerRD.svg", "./S/WCornerLD.svg", "./S/WLR.svg", //12,13,14,15,16
    "./S/WUD.svg", //17
    "./S/Rock2.svg", "./S/Rock3.svg", "./S/Rock4.svg", //18,19,20
    "./S/ST.svg", "./S/SR.svg", "./S/SB.svg", "./S/SL.svg", //21,22,23,24
    "./S/S2UR.svg", "./S/S2UB.svg", "./S/S2UL.svg", "./S/S2RB.svg", "./S/S2LB.svg", "./S/S2LR.svg", //25,26,27,28,29,30
    "./S/S3B.svg", "./S/S3L.svg", "./S/S3U.svg","./S/S3R.svg", //31,32,33,34
    "./S/S4.svg"]; //35

    blockOffsetTop = 30;
    blockOffsetLeft = 30;
    blocks = [];
    percentOfWater = fxrand();

    waterAmount = 0,
    earthAmount = 0,
    sandAmount = 0,
    rocksAmount = 0;


   /* ------
    Создаем массив соответствующий количеству частям карты.
    Каждый элемент массива - объект с параметрами необходимыи для отрисовки
    x, y - координаты блока, src - базовый спрайт из трех вариантов (вода, земля, песок), 
  

  -------------*/

  

  function blockCreation() {
      for(let i = 0; i < (blocksColumns*blocksRows); i++){
              blocks[i] = { x: 0, y: 0, src: Math.floor(fxrand()*2)};
      }
    
  }

  blockCreation();


  /* ------------

Вычисляем соотношения полученных полей (вода к земле). 
Заменяем лишние элементы с водой на землю, в соответсвии с заданым процентом.

-------------*/

function blockCount() {
  let water = 0,
      earth = 0;

  for (let i = 0; i < blocks.length; i++){blocks[i].src == 0 ? water += 1 : earth += 1;}

  let correlation = (water / (water + earth));
  if (correlation > percentOfWater) {
      let waterToReplace  = Math.round((water - ((water + earth) * percentOfWater))),
          waterArr = [];

      blocks.forEach(function(item, i){
          if (item.src == 0 && waterToReplace > 0){
              waterArr.push(i);
          }
  });

      for (let i = 0; i < waterToReplace; i++){
          let water = waterArr[Math.floor(fxrand()*waterArr.length)];
          blocks[water].src = 1;
      }
  }
}

/* ----------------

Создаем области с песком в больших пространствах с землей.
Корректируем области с водой и землей.
Заменяем граничащие спрайты на более подходящие.

------------------- */ 

function change () {
  let waterArr = [],
  earthArr = [],
  sandArr = [],
  waterReplacedArr = [];

  blocks.forEach(function(item, i){
      if (item.src == 0){waterArr.push(i);}
      if (item.src == 1){earthArr.push(i);}
      if (item.src == 19){sandArr.push(i);}
      if (waterSpriteNum.includes(item.src)) {waterReplacedArr.push(i);}
  });

  earthArr.forEach(function(item){
      let left = item - blocksRows,
          up = item - 1,
          right = item + blocksRows,
          down = item + 1;
      if (left >= 0 && up >= 0 && right < blocksColumns*blocksRows && down < blocksColumns*blocksRows && (blocks[left].src == 1 || blocks[left].src > 17) &&
          (blocks[right].src == 1 || blocks[right].src > 17) && (blocks[down].src == 1 || blocks[down].src > 17) && (blocks[up].src == 1 || blocks[up].src > 17)){
              blocks[item].src = 19;
          }
  });

  sandArr.forEach(function(item){
      let left = item - blocksRows,
          up = item - 1,
          right = item + blocksRows,
          down = item + 1,
          earthArr = [0, 0, 0, 0],
          earthAround = 0;

      function earthDetect(imgSrc, earthPosition){
          blocks[item].src = imgSrc;
          earthAround ++;
          earthArr[earthPosition] = 1;
      }

      if (left >= 0 && blocks[left].src == 1){earthDetect(24,3);}
      if (up >= 0 && blocks[up].src == 1){earthDetect(21,0);}
      if (right < blocksColumns*blocksRows && blocks[right].src == 1){earthDetect(22,1);}
      if (down < blocksColumns*blocksRows && blocks[down].src == 1){earthDetect(23,2);}

      if (earthAround == 4){blocks[item].src = 35}

      if (earthAround == 3){
          earthArr.forEach (function(ite, i){
              ite == 0 ? blocks[item].src = 31 + i : blocks[item].src = blocks[item].src; 
          });
      }
      if (earthAround == 2){
          if (earthArr[0] == 1 && earthArr[1] == 1){blocks[item].src = 25} 
          if (earthArr[0] == 1 && earthArr[2] == 1){blocks[item].src = 26} 
          if (earthArr[0] == 1 && earthArr[3] == 1){blocks[item].src = 27} 
          if (earthArr[1] == 1 && earthArr[2] == 1){blocks[item].src = 28} 
          if (earthArr[1] == 1 && earthArr[3] == 1){blocks[item].src = 30} 
          if (earthArr[2] == 1 && earthArr[3] == 1){blocks[item].src = 29} 
      }    
  });
  

  waterArr.forEach(function(item){
      let left = item - blocksRows,
          up = item - 1,
          right = item + blocksRows,
          down = item + 1,
          earthArr = [0, 0, 0, 0],
          earthAround = 0;
      
      function earthDetect(imgSrc, earthPosition){
          blocks[item].src = imgSrc;
          earthAround ++;
          earthArr[earthPosition] = 1;
      }

      if (left >= 0 && blocks[left].src == 1){earthDetect(6,3);}
      if (up >= 0 && blocks[up].src == 1){earthDetect(3,0);}
      if (right < blocksColumns*blocksRows && blocks[right].src == 1){earthDetect(4,1);}
      if (down < blocksColumns*blocksRows && blocks[down].src == 1){earthDetect(5,2);}

      if (earthAround == 4){blocks[item].src = 7};

      if (earthAround == 3){
          earthArr.forEach (function(ite, i){
              ite == 0 ? blocks[item].src = 8 + i : blocks[item].src = blocks[item].src; 
          });
      }
      if (earthAround == 2){
          if (earthArr[0] == 1 && earthArr[1] == 1){blocks[item].src = 12}
          if (earthArr[0] == 1 && earthArr[2] == 1){blocks[item].src = 17}
          if (earthArr[0] == 1 && earthArr[3] == 1){blocks[item].src = 13}
          if (earthArr[1] == 1 && earthArr[2] == 1){blocks[item].src = 14}
          if (earthArr[1] == 1 && earthArr[3] == 1){blocks[item].src = 16}
          if (earthArr[2] == 1 && earthArr[3] == 1){blocks[item].src = 15}
      }
  });
}

/* ------------

В зависимости от значения параметра src отрисовываем картинку на месте поля.
Если у блок-объекта есть дополнительный спрайт(постройка), то отрисовываем соответствующую картинку)

-------------*/

function make_base(x, y, sprite){
  base_image = new Image();
  base_image.src = blocksBaseSprites[sprite];
  ctx.drawImage(base_image, x, y, blockWidth, blockHeight);
}

/* ------------

Распределяем по сanvas блоки, присваиваем каждому блоку координату. 
Для каждого элемента массива определяем координаты и вызываем функцию отрисовки изображения. 

-------------*/

function drawBricks () {
  let i = 0;
      for (var c = 0; c < blocksColumns; c++){
          for (var r = 0; r < blocksRows; r++){
              var blockX = (c*(blockWidth))+blockOffsetLeft;
              var blockY = (r*(blockHeight))+blockOffsetTop;
              blocks[i].x = blockX;
              blocks[i].y = blockY;
              make_base(blocks[i].x, blocks[i].y, blocks[i].src);
              i++;
          }
      }
}

/* ------------
Инициирующая функция. 
-------------*/

function draw(){
  ctx.clearRect(0, 0, 600, 600);
  drawBricks();
  blockCount();
  change();
  // mouseOnBlock(mouseX,mouseY);
  // if (menu.state){drawActionMenu();};
  // actionCounterElement.innerHTML = "Actions to make: " + actions.limit;
  // inventoryBlocks[1].innerHTML = "Rocks: " + inventory.rocks; 
  // inventoryBlocks[0].innerHTML = "Seeds: " + inventory.seeds; 
  // inventoryBlocks[2].innerHTML = "Water: " + inventory.water; 
  requestAnimationFrame(draw);
}


// setTimeout(draw, 2000);
draw();

function counter(){

  let w = 0,
      s = 0,
      e = 0,
      r = 0;
  
    blocks.forEach(function(item, i){
      if (waterSpriteNum.includes(item.src)){w ++};
      if (sandSpriteNum.includes(item.src)){s ++};
      if (rocksSpriteNum.includes(item.src)){r ++};
      if (item.src == 1){e ++};
  });
  
  waterAmount = w;
  sandAmount = s;
  earthAmount = e;
  rocksAmount = r;
  
  }

  counter();

window.$fxhashFeatures = {
  "Island size": blocksRows*blocksRows,
  "Water blocks": waterAmount,
  "Sand blocks": sandAmount,
  "Grass blocks": earthAmount,
  "Rocks": rocksAmount
};


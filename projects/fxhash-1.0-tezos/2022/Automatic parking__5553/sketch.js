
let parkMap = []
let catWay = [];

let rowNum;
let colNum;
let perRow = 100;
let perCol = 80;
let lineArry = [];
let lineArryX = [];
let lineArryY = [];
let img;
let imgs = [];
let carIndex = 0;
let carX = 0;
let carY = 0;

let parCar = 0;
let parkCarX = 0;
let parkCarY = 0;
let inRow = 0;
let dir = 0;
let isStart = 0;
function preload() {
  img = loadImage("8.png");
  for (let i = 0; i < 8; i++) {
    imgs[i] = loadImage(i + ".png");
  }
}

function setup() {
  rowNum = int(windowHeight / perRow);
  colNum = int(windowWidth / perCol) ;
  createCanvas(colNum * perCol, rowNum * perRow);
  rowNum = height / perRow;
  colNum = width / perCol;
  carIndex = int(random(rowNum * 2));
  if (carIndex >= rowNum) {
    carX = 0;//perCol / 2;
  } else {
    carX = colNum - 1;//width - perCol / 2;
  }
  carY = (carIndex % rowNum);// * perCol + perCol / 2;

  img.resize(perRow - 10, perCol - 25);
  for (let i = 0; i < 8; i++) {
    imgs[i].resize(perRow - 10, perCol - 25);
  }
  for (let i = 0; i < rowNum; i++) {
    if (i === 1) {
      if (lineArry[0] === 1) {
        lineArry[i] = 0;
      } else {
        lineArry[i] = int(random(2));
      }
    } else if (i === rowNum - 1) {
      if (lineArry[i - 1] === 1) {
        lineArry[i] = 0;
      } else {
        lineArry[i] = int(random(2));
      }
    } else if (i >= 2) {
      if (lineArry[i - 1] === 1 && lineArry[i - 2] === 1) {
        lineArry[i] = 0;
      } else {
        lineArry[i] = int(random(2));
      }
    } else {
      lineArry[i] = int(random(2));
    }
  }

  for (let i = 0; i < rowNum; i++) {
    for (let j = 1; j < colNum - 1; j++) {
      if (lineArry[i] === 0) {
        parkMap[i * colNum + j] = 0;
      } else {
        parkMap[i * colNum + j] = int(random(10));
        if (parkMap[i * colNum + j] === 1) {
          parCar++;
        }
      }
    }
  }

  //随机产生停车位置
  parCar = floor(random(parCar));
  console.log(parCar)
  let kk = 0;
  for (let i = 0; i < rowNum; i++) {
    for (let j = 1; j < colNum - 1; j++) {
      if (parkMap[i * colNum + j] === 1) {
        if (kk === parCar) {
          parkCarX = j;
          parkCarY = i;
        }
        kk++;
      }
    }
  }
  dir = PI / 2;
}



function showCar(x, y, angle) {
  push();
  imageMode(CENTER);
  let xx = x;
  let yy = y;
  translate(xx, yy);
  if (isStart != 0) {
    if (mouseIsPressed === true) {
      lineArryX.push(xx);
      lineArryY.push(yy);
    }
    else {
      if (frameCount % 10 === 0) {
        if (angle == PI / 2 || angle == -PI / 2) {
          xx = x + random(-6, 6);
        } else {
          yy = y + random(-6, 6);
        }
        lineArryX.push(xx);
        lineArryY.push(yy);
      }
    }
  }
  rotate(angle);
  image(img, 0, 0);
  pop();
}

function showPCar(x, y, angle, index) {
  push();
  imageMode(CENTER);
  translate(x, y);
  rotate(angle);
  image(imgs[index], 0, 0);
  pop();
}


function draw() {
  background(255);
  noFill();
  stroke(0);
  strokeWeight(5);
  rect(10, 0, width - 20, height);
  stroke(255);
  strokeWeight(6);
  line(10, 3 * height / 4, 10, 3 * height / 4 + 100);
  line(width - 10, height / 4, width - 10, height / 4 + 100);

  for (let i = 0; i < rowNum; i++) {
    for (let j = 0; j < colNum; j++) {
      let xx = j * perCol;
      let yy = i * perRow;
      if (parkMap[i * colNum + j] === 0) {

      }
      if (parkMap[i * colNum + j] === 1) {
        noFill();
        stroke(0);
        strokeWeight(3);
        rect(xx, yy, perCol, perRow);

        //停车位开口方向
        if (i > 0 && i < rowNum - 1) {
          //判断两侧是否为空
          if (parkMap[(i - 1) * colNum + j] === 0) {
            stroke(255);
            strokeWeight(4);
            line(xx, yy, xx + perCol, yy);
          }
          if (parkMap[(i + 1) * colNum + j] === 0) {
            stroke(255);
            strokeWeight(4);
            line(xx, yy + perRow, xx + perCol, yy + perRow);
          }
        }
        if (i === 0) {
          stroke(255);
          strokeWeight(4);
          line(xx, yy + perRow, xx + perCol, yy + perRow);
        }
        if (i === rowNum - 1) {
          stroke(255);
          strokeWeight(4);
          line(xx, yy, xx + perCol, yy);
        }
      }
      if (parkMap[i * colNum + j] >= 2) {
        noFill();
        stroke(0);
        strokeWeight(3);
        rect(xx, yy, perCol, perRow);
        // rect(xx + 5, yy + 5, perCol - 10, perRow - 10);

        //停车位开口方向
        if (i > 0 && i < rowNum - 1) {
          //判断两侧是否为空
          let rangle = 0;
          if (parkMap[(i - 1) * colNum + j] === 0) {
            stroke(255);
            strokeWeight(4);
            line(xx, yy, xx + perCol, yy);
            rangle = -PI / 2
          }
          if (parkMap[(i + 1) * colNum + j] === 0) {
            stroke(255);
            strokeWeight(4);
            line(xx, yy + perRow, xx + perCol, yy + perRow);
            rangle = PI / 2
          }
          showPCar(xx + perCol / 2, yy + perRow / 2, rangle, parkMap[i * colNum + j] - 2);
        }
        if (i === 0) {
          stroke(255);
          strokeWeight(4);
          line(xx, yy + perRow, xx + perCol, yy + perRow);
          showPCar(xx + perCol / 2, yy + perRow / 2, PI / 2, parkMap[i * colNum + j] - 2);
        }
        if (i === rowNum - 1) {
          stroke(255);
          strokeWeight(4);
          line(xx, yy, xx + perCol, yy);
          showPCar(xx + perCol / 2, yy + perRow / 2, -PI / 2, parkMap[i * colNum + j] - 2);
        }
      }
    }
  }

  let xx = parkCarX * perCol;
  let yy = parkCarY * perRow;
  fill(255, 0, 0);
  ellipse(xx + perCol / 2, yy + perRow / 2, 20, 20);

  showCar(carX * perCol + perCol / 2, carY * perRow + perRow / 2, dir);

  //判断入口
  if (parkCarY === 0) {
    inRow = 1;
  } else if (parkCarY === rowNum - 1) {
    inRow = rowNum - 2;
  } else {
    if (lineArry[parkCarY - 1] === 0) {
      inRow = parkCarY - 1;
    } else {
      inRow = parkCarY + 1;
    }
  }

  if (mouseIsPressed === true) {
    if (dist(mouseX, mouseY, carX * perCol + perCol / 2, carY * perRow + perRow / 2) < perCol / 2) {
      isStart = 1;
      carX = (mouseX - perCol / 2) / perCol;
      carY = (mouseY - perRow / 2) / perRow;

      dir = atan((mouseY - pmouseY) / (mouseX - pmouseX));
      if (mouseX < pmouseX) {
        dir = dir + PI;
      }
    }
  } else {
    if (frameCount % 10 === 0 && isStart === 1) {
      if (carX > colNum / 2) {
        if (carX < colNum - 1) {
          carX = carX + 0.4;
        } else {
          carX = colNum - 1;
          isStart = 2;
        }
        dir = 0;
      } else {
        if (carX > 0) {
          carX = carX - 0.4;
        } else {
          carX = 0;
          isStart = 2;
        }
        dir = PI;
      }

    }
    if (frameCount % 10 === 0 && isStart === 2) {
      if (carY != parkCarY || carX != parkCarX) {
        if (carY != inRow) {
          if ((inRow - carY) < 0) {
            carY = carY - 0.4;
            dir = -PI / 2;
          } else {
            carY = carY + 0.4;
            dir = PI / 2;
          }
          if (dist(inRow, 0, carY, 0) <= 0.4) {
            carY = inRow;
          }
          console.log(333);
        } else {
          if (carX != parkCarX) {
            if (parkCarX - carX < 0) {
              carX = carX - 0.4;
              dir = PI;
            } else {
              carX = carX + 0.4;
              dir = 0;
            }
            if (dist(parkCarX, 0, carX, 0) <= 0.4) {
              carX = parkCarX;
            }
            console.log(111);
          }
          else {
            if (carY < parkCarY) {
              dir = PI / 2;
              carY = carY + 0.4;
            } else {
              dir = -PI / 2;
              carY = carY - 0.4;
            }
            carY = parkCarY;
            console.log(222);
          }
        }
      } else {
        lineArryX.push(carX * perCol + perCol / 2);
        lineArryY.push(carY * perRow + perRow / 2);
        noLoop()
        // console.log(444);
        // console.log(carY,carX);
        // console.log(parkCarY,parkCarX);
      }
    }
  }
  stroke(255, 0, 0);
  strokeWeight(1);
  noFill();
  beginShape();
  for (let i = 0; i < lineArryY.length; i++) {
    push();

    // line(lineArryX[i],lineArryY[i],lineArryX[i+1],lineArryY[i+1]);
    curveVertex(lineArryX[i], lineArryY[i]);
    pop();

  }
  endShape();
}

function randomList(list) {
    return list[Math.floor(fxrand() * list.length)];
}

function setTitle(title){
    document.querySelector("title").innerHTML = title;
}
  
function createVector_(x, y) {
    let vector = [];
  
    for (let i = x; i < 1 + y; i++) {
      vector.push(i);
    }
  
    return vector;
}

function create2DArray(rows, cols) {
    let arr = new Array(rows);
    for (let i = 0; i < rows; i++) {
      arr[i] = new Array(cols);
    }
    return arr;
  }
  
//Solo para modo HSB
function randomColor() {
    let colorArray = [];
  
    let color = randomList(createVector_(0, 360));
    let sat = randomList(createVector_(0, 120));
    let value = randomList(createVector_(0, 100));
    let alph = randomList(createVector_(0, 255));
  
    colorArray.push(color);
    colorArray.push(sat);
    colorArray.push(value);
    colorArray.push(alph);
  
    return colorArray;
}

//Solo modo rgb

function randomColorRGB(){
    let colorArray = [];

    let r = randomList( createVector_(0,255) );
    let g = randomList( createVector_(0,255) );
    let b = randomList( createVector_(0,255) );

    colorArray.push(r);
    colorArray.push(g);
    colorArray.push(b);

    return colorArray;
}

function Print(x){

    if(x.length > 1){
        return console.table(x)
    }
    else{
        return console.log(x)
    }
    
}

function createBorder(borderW,boerderC){
    push()
    strokeWeight(borderW)
    stroke(boerderC)
    for(let i = 0; i<dx ;i++){
        square(i,0,1)
    }

    for(let i = 0; i<dx ;i++){
        square(i,dy,1)
    }

    for(let i = 0; i < dy;i++){
        square(0,i,1)
    }

    for(let i = 0; i < dy; i++){
        square(dx,i,1)
    }

    pop()

    
}




// Hue - Saturation - Brightnees - Opacity
//Tono - Saturacion - Brillo     - Opacity
//colorMode(HSB, 360, 120, 100, 255);

//El tono cambia el color como tal
//La saturacion digamos que baja la intensidad con que se ve el color, mas clarito u oscuro
//El brillo se puede interpretar como una capa transpartente de color negro




function createHeightMap()
{
    let rows = dx;
    let cols = dx;
    loadPixels();
    let arr = new Array(rows);
    for (let i = 0; i < rows; i++) {
      arr[i] = new Array(cols);
    }

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            arr[i][j] = noise(i,j) + 0.1 * noise(2 * i,2 *j) + 0.2* noise(4*i,4*j);
            let n = arr[i][j];
            
            if(n < 0.2){set(i,j,color(random(255 * n)))}
            else if(n < 0.4){set(i,j,color(random(255 * n)))}
            else if(n < 0.6){set(i,j,color(random(255 * n)))}
            else if(n < 0.7){set(i,j,color(random(255 * n)))}
            else if(n < 0.8){set(i,j,color(random(255 * n)))}
            else if(n < 0.10){set(i,j,color(random(255 * n)))}
            else if(n < 1.1){set(i,j,color(random(255 * n)))}
            else if(n < 1.2){set(i,j,color(random(255 * n)))}
            else if(n < 1.4){set(i,j,color(random(255 * n)))}
        }
    }

    updatePixels()

    return arr;

}



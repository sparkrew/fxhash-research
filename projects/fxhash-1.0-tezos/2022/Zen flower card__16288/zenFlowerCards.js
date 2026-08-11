

function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
  }

function setup() {
    createCanvas(windowHeight*0.75, windowHeight);
    background(255);
    randomSeed( fxrand() * 9999 )

    // capa1
    // creo una constante con las imagenes que tengo en la capa 1
    const numerosCapa1 = ["01","02","03","04","05","06","07"];

    // creo una variable, para almacenar la imagen elegida aleatoreamente
    let numeroCapa1;

    // asigno la imagen aleatoreamente a la variable creada
    numeroCapa1 = randomFromList(numerosCapa1);

    // precargo la imagen
    capa1 =loadImage(`img/capa1/${numeroCapa1}.png`)


    // termina capa1

    // capa2
    const numerosCapa2 = ["01","02","03","04","05","06","07"];
    let numeroCapa2;
    numeroCapa2 = randomFromList(numerosCapa2);
    capa2 =loadImage(`img/capa2/${numeroCapa2}.png`)
    // termina capa2

    // capa3
    const numerosCapa3 = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14"];
    let numeroCapa3;
    numeroCapa3 = randomFromList(numerosCapa3);
    capa3 =loadImage(`img/capa3/${numeroCapa3}.png`)
    // termina capa3

    // capa4
    const numerosCapa4 = ["01","02","03","04","05","06","07","08"];
    let numeroCapa4;
    numeroCapa4 = randomFromList(numerosCapa4);
    capa4 =loadImage(`img/capa4/${numeroCapa4}.png`)
    // termina capa4
}


function draw() {
    fill(255)
    image(capa1,0,0,windowHeight*0.75, windowHeight);
    image(capa2,0,0,windowHeight*0.75, windowHeight);
    image(capa3,0,0,windowHeight*0.75, windowHeight);
    image(capa4,0,0,windowHeight*0.75, windowHeight);
}

function windowResized() {
  resizeCanvas(windowHeight*0.75, windowHeight);
}

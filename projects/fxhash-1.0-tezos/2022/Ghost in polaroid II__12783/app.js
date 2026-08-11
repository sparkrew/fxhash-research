

function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
    }

function setup() {

    
    createCanvas(windowHeight*(661/800), windowHeight);
    background(256)
    loop(1)
  
    // // capa1

    // // creo una constante con las imagenes que tengo en la capa 1
    // const numerosCapa1 = ["01","02","03"];

    // // creo una variable, para almacenar la imagen elegida aleatoreamente
    // let numeroCapa1;

    // // asigno la imagen aleatoreamente a la variable creada
    // numeroCapa1 = randomFromList(numerosCapa1);


    // precargo la imagen

    const numerosCapa1 = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16"];

    let numeroCapa1;

    numeroCapa1 = randomFromList(numerosCapa1);

    capa1 =loadImage(`img/capa1/${numeroCapa1}.png`)

    
    // termina capa1
    

   


    // capa2

    const numerosCapa2 = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21"];

    let numeroCapa2;

    numeroCapa2 = randomFromList(numerosCapa2);

    capa2 =loadImage(`img/capa2/${numeroCapa2}.png`)

    
    // termina capa2


    // capa3

    

    const numerosCapa3 = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"];

    let numeroCapa3;

    numeroCapa3 = randomFromList(numerosCapa3);

    capa3 =loadImage(`img/capa3/${numeroCapa3}.png`)

    
    // termina capa3




    // capa4

    capa4 =loadImage(`img/capa4/01.png`)
     
    // termina capa4
    


   

    fxpreview()
    
  
}

    


function draw() {

  
   
    image(capa1,0,0,windowHeight*(661/800), windowHeight)
    image(capa2,0,0,windowHeight*(661/800), windowHeight)
    image(capa3,0,0,windowHeight*(661/800), windowHeight)
    image(capa4,0,0,windowHeight*(661/800), windowHeight)
    
    
    fxpreview()

    
     
    
    
    

}



    
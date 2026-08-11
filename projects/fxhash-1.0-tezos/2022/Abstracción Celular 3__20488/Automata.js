let CON_ANIMA = true;

let xoff = 0;
let pasoXoff = 0.001;
let yoff = 0;
let pasoYoff = 0.001;
let escala = 0.005;
let CICLOS = 18;
let limite = 255;
//----------------------------------------------------------
function dibujarCelula( actual, x, y, ancho, alto , columna , fila ){
	//fill( actual );
	//rect( x , y , ancho , alto );

	//let base = noise( (x+xoff)*escala , (y+yoff)*escala  ) * limite/10;
	//console.log( base );
	xoff += pasoXoff;
	yoff += pasoYoff;

	//let valor = max(actual,base);

	let gris = int( actual % limite ) + int( random(10) );

	let angulo = ( gris<200 ? map( gris , 0 , 200 , 0 , HALF_PI ) : 
		map( gris , 200 , 255 , HALF_PI , PI ) );
	let gris2 = map( sin( angulo ) , -1 , 1 , 0 , 255) ; 
	let gris3 = constrain( actual , 0 , 255 );

	imagen.set( columna , fila , color(gris,gris2,gris3) );
	/*
	grafico.push();
	grafico.fill(gris);
	grafico.noStroke();
	grafico.rect( x , y , ancho , alto);
	grafico.pop();
	*/
}
//----------------------------------------------------------
function iniciarCelula(){
	let valor = 100;//random(255);
	return valor;
}
//----------------------------------------------------------
function actualizarCelula( este, n, ne, e, se, s, 
  so, o, no, x, y ) {

	let tamanio = ladoMasCorto*0.225;
  	let diametroAccion = sin( radians(frameCount*4) ) * tamanio * 0.8 + tamanio;

  	let incremento = 160;
  	let decremento = 3;

	let promedio = (este+n+ne+e+se+s+so+o+no)/9.0;

  	promedio = ( promedio<decremento ? 0 : promedio-decremento);
  	let f = 0.32;
  	let proximo = este*f + promedio*(1-f);

  	if( CON_ANIMA && anima.activo && anima.pulsando && dist(x,y,anima.x,anima.y)<random(diametroAccion) ){    	
    	if( proximo < limite*CICLOS - incremento*2 ){
    		proximo = este+incremento;	
    	}
    	//console.log("Hola");
  	}	
  
  	if( mouseIsPressed && dist(x,y,mouseX,mouseY)<random(diametroAccion) ){    	
    	if( proximo < limite*CICLOS ){
    		proximo = este+incremento;	
    	}
    	//console.log("Hola");
  	}// */
  	//proximo = int( random(10) );
  	return proximo;

}
//----------------------------------------------------------
class Automata{
	

	constructor( ancho , alto ){
		this.col = ancho;
		this.fil = alto;

		this.celulas = [];
		for( let i=0 ; i<this.col ; i++ ){
			this.celulas[ i ] = [];
			for( let j=0 ; j<this.fil ; j++ ){
				this.celulas[ i ][ j ] = new Celula( i , j , ancho , alto ); 
			}
		}
		this.localizar( 0, 0, windowWidth, windowHeight );
		this.iniciar();
	}

	actualizar(){
		for( let i=0 ; i<this.col ; i++ ){
			for( let j=0 ; j<this.fil ; j++ ){
				this.celulas[i][j].operar( this );				
			}
		}
		for( let i=0 ; i<this.col ; i++ ){
			for( let j=0 ; j<this.fil ; j++ ){
				this.celulas[i][j].actualizar();				
			}
		}
	}

	dibujar(){
		for( let i=0 ; i<this.col ; i++ ){
			for( let j=0 ; j<this.fil ; j++ ){
				this.celulas[i][j].dibujar();				
			}
		}
	}

	iniciar(){
		for( let i=0 ; i<this.col ; i++ ){
			for( let j=0 ; j<this.fil ; j++ ){
				this.celulas[i][j].iniciar();
				
			}
		}
	}

	localizar( left , top , right , botton ){
		let pasox = (right-left) * 1.0 / this.col;
    	let pasoy = (botton-top) * 1.0 / this.fil;

		for( let i=0 ; i<this.col ; i++ ){
			for( let j=0 ; j<this.fil ; j++ ){
				this.celulas[ i ][ j ].localizar( pasox*i+left, pasoy*j+top, pasox, pasoy );
			}
		}

	}

}
//----------------------------------------------------------
class Celula{

	constructor( i , j , col , fil ){
		this.actual = 0;
		this.futuro = 0;
		this.x = 0;
		this.y = 0;
		this.ancho = 1;
		this.alto = 1;
		this.vecinoX = [];
		this.vecinoY = [];

		this.cualColumna = i;
		this.cualFila = j;

		//n
    	this.vecinoX[0] = i;
    	this.vecinoY[0] = j-1;
    	//ne
    	this.vecinoX[1] = i+1;
    	this.vecinoY[1] = j-1;
    	//e
    	this.vecinoX[2] = i+1;
    	this.vecinoY[2] = j;
    	//se
    	this.vecinoX[3] = i+1;
    	this.vecinoY[3] = j+1;
    	//s
    	this.vecinoX[4] = i;
    	this.vecinoY[4] = j+1;
    	//so
    	this.vecinoX[5] = i-1;
    	this.vecinoY[5] = j+1;
    	//o
    	this.vecinoX[6] = i-1;
    	this.vecinoY[6] = j;
    	//no
    	this.vecinoX[7] = i-1;
    	this.vecinoY[7] = j-1;

    	for ( let k=0; k<8; k++ ) {
      		this.vecinoX[k] = ( this.vecinoX[k] < 0 ? col-1 : this.vecinoX[k] );
      		this.vecinoX[k] = ( this.vecinoX[k] > col-1 ? 0 : this.vecinoX[k] );
      		this.vecinoY[k] = ( this.vecinoY[k] < 0 ? fil-1 : this.vecinoY[k] );
      		this.vecinoY[k] = ( this.vecinoY[k] > fil-1 ? 0 : this.vecinoY[k] );
      		//console.log( this.vecinoX[k] + "  " + this.vecinoY[k] );
    	}

	}

	actualizar(){
		this.actual = this.futuro;
	}

	dibujar(){
		dibujarCelula( this.actual , this.x , this.y , this.ancho , this.alto , this.cualColumna , 
			this.cualFila );
	}

	iniciar(){
		this.actual = iniciarCelula();
	}

	localizar( x , y , ancho , alto ){
		this.x = x;
		this.y = y;
		this.ancho = ancho;
		this.alto = alto;
	}

	operar( todos ) {

	   	this.futuro = actualizarCelula( this.actual 
      	, todos.celulas[ this.vecinoX[0] ][ this.vecinoY[0] ].actual 
      	, todos.celulas[ this.vecinoX[1] ][ this.vecinoY[1] ].actual 
      	, todos.celulas[ this.vecinoX[2] ][ this.vecinoY[2] ].actual
      	, todos.celulas[ this.vecinoX[3] ][ this.vecinoY[3] ].actual 
      	, todos.celulas[ this.vecinoX[4] ][ this.vecinoY[4] ].actual
      	, todos.celulas[ this.vecinoX[5] ][ this.vecinoY[5] ].actual
      	, todos.celulas[ this.vecinoX[6] ][ this.vecinoY[6] ].actual
      	, todos.celulas[ this.vecinoX[7] ][ this.vecinoY[7] ].actual
      	, this.x
      	, this.y
      	); 

  	}
  
}
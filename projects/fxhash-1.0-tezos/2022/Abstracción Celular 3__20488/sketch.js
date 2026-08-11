//version 1.1 con fxpreviw que se ejecuta una vez

let COLUMNAS = [ 16 ,40 , 80 , 120 ];
let FILAS = [ 12, 30 , 60 , 90 ];
let ETIQUETA_GRILLA = [ "super-robusto", "robusta" , "delicada" , "pixelar reactiva" ];
let CUAL_GRILLA;

let archivos = [ 
	'assets/otonio.jpeg',
	'assets/cebras.jpg',
	'assets/serpiente.jpeg',
	'assets/flores.png',
	'assets/piedras.png',
	'assets/bandas.png',
	'assets/arcoiris.png'
	];

	let etiquetasArchivos = [ 'madera',
	'metal',
	'barro',
	'vino',
	'platino',
	'agua',
	'nieve'
	];

let anima;
let automata;
let estado;
//let grafico;
let imagen;
let elShader;
let imagenFondo;

let contadorActivacion = 0;

let ladoMasCorto;
//--------------------------------------------------------------------
function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
}
//--------------------------------------------------------------------
function traducirGrilla(numero){
    return ETIQUETA_GRILLA[numero];
}
//--------------------------------------------------------------------
function traducirSustancia(numero){
    return etiquetasArchivos[ numero ];
}
//--------------------------------------------------------------------
function preload() {
	elShader = loadShader('assets/default.vert', 'assets/shader.frag');

	

	CUAL_ARCHIVO = Math.floor(fxrand()*archivos.length);
	let cualArchivo =  archivos[ CUAL_ARCHIVO ];

	imagenFondo = loadImage( cualArchivo );

	CUAL_GRILLA = int( COLUMNAS.length*fxrand() );

	window.$fxhashFeatures = {
        "Composición": traducirGrilla( CUAL_GRILLA ),
        "Sustancia": traducirSustancia( CUAL_ARCHIVO )
    }	

}
//--------------------------------------------------------------------
function setup() {

	createCanvas( windowWidth, windowHeight , WEBGL );
	randomSeed( fxrand() * 9999 );
	noiseSeed( fxrand() * 9999 );
	angleMode( RADIANS );

	ladoMasCorto = min( windowWidth, windowHeight );
	
	automata = new Automata( COLUMNAS[ CUAL_GRILLA ] , FILAS[ CUAL_GRILLA ] );

	//grafico = createGraphics( windowWidth, windowHeight );

	imagen = createImage( COLUMNAS[ CUAL_GRILLA ] , FILAS[ CUAL_GRILLA ] );

	estado = "dibujar";
	anima = new Anima();
}
//--------------------------------------------------------------------
function draw() {

	anima.actualizar();	

	automata.actualizar();

	imagen.loadPixels();
	automata.dibujar();
	imagen.updatePixels();
	//let imagen = grafico.get( 0 , 0 , windowWidth, windowHeight );
	//image( imagen , 0 , 0  , windowWidth, windowHeight );

	shader( elShader );
	elShader.setUniform( "u_resolution" , [float(windowWidth), float(windowHeight)] );
	elShader.setUniform( "u_mouse" , [float(mouseX), float(mouseY)] );
	elShader.setUniform( "u_time" , millis()/1000.0 );
	/*elShader.setUniform( "u_tinte1" , tinte1 );
	elShader.setUniform( "u_tinte2" , tinte2 );
	elShader.setUniform( "u_tam1" , tam1 );
	elShader.setUniform( "u_tam2" , tam2 );
	elShader.setUniform( "u_var1" , var1 );
	elShader.setUniform( "u_var2" , var2 );
	elShader.setUniform( "u_vel" , velocidad );*/
	elShader.setUniform("graf_resolution", [float(COLUMNAS[ CUAL_GRILLA ]) , 
		float( FILAS[ CUAL_GRILLA ]) ] );
  	elShader.setUniform("laImagen", imagen );
  	elShader.setUniform("ImagenFondo", imagenFondo );
	//elShader.setUniform( "u_tamanios" , [valorTamanio1,valorTamanio2] );
	//elShader.setUniform( "u_color" , [valorColor1,valorColor2] );	
	rect(0,0, windowWidth, windowHeight );

	fxpreview();

}
//--------------------------------------------------------------------
function keyPressed(){
}
//--------------------------------------------------------------------
function windowResized() {
  	resizeCanvas(windowWidth, windowHeight);
  	if( automata != null ){
  		automata.localizar(0,0,windowWidth, windowHeight);	
  	}	
  	ladoMasCorto = min( windowWidth, windowHeight );
}
//--------------------------------------------------------------------



let TIEMPO_MINIMO_CAMBIOS = 1000;
let TIEMPO_MAXIMO_CAMBIOS = 6000;

class Anima{

	constructor(){
		this.activo = true;
		this.pulsando = true;
		this.antesPulsando = false;
		this.inicio = false;
		this.marcaTiempo = 0;
		this.tiempoReActivacion = 8000;
		this.tiempoCambios = int( random( TIEMPO_MINIMO_CAMBIOS , TIEMPO_MAXIMO_CAMBIOS ));
		this.x = random(windowWidth);
		this.y = random(windowHeight);
		this.marcaCambios = millis();
		this.duracionPulso = 2500;

	}

	activar(){
		this.activo = true;
		this.tiempoCambios = int( random( TIEMPO_MINIMO_CAMBIOS , TIEMPO_MAXIMO_CAMBIOS ));
		this.pulsando = true;
		this.x = random(windowWidth);
		this.y = random(windowHeight);
		this.marcaCambios = millis();
	}

	actualizar(){
		if( mouseIsPressed ){
			this.activo = false;
			this.marcaTiempo = millis();			
		}
		if( this.activo ){
			if( millis() > this.marcaCambios+this.duracionPulso ){
				this.pulsando = false;
			}
			if( millis() > this.marcaCambios+this.tiempoCambios ){
				this.tiempoCambios = int( random( TIEMPO_MINIMO_CAMBIOS , TIEMPO_MAXIMO_CAMBIOS ));
				this.pulsando = true;
				this.x = random(windowWidth);
				this.y = random(windowHeight);
				this.marcaCambios = millis();
			}
		}else{
			if( millis() > this.marcaTiempo+this.tiempoReActivacion ){
				this.activo = true;				
			}
		}
		this.inicio = !this.antesPulsando && this.pulsando;
		this.antesPulsando = this.pulsando;
	}

	dibujar(){
		push();
		//console.log( "Puta madre" );
		//console.log( this.activo );
		if( this.activo ){
			if( this.pulsando ){
				ellipse( this.x , this.y  , 30 , 30 );
			}
			fill(255);
		}else{
			fill(0);
		}	
		rect(50,50,100,100);
		pop();
	}


}
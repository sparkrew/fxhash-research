//This software is licensed under The MIT License (MIT). See License file for more information.
//Copyright 2021->present Simone Pompei
//http://www.randomlandscape.com

var tmontagne, tcolline, tpianure;

var mont = [];

var colorescuro, coloreombre, coloremedio, coloresfondo, colorecielo;

var condizione;
var distance;
let monochrome;
let tipoPalette;


let weatherFeature;
let moon,sun;
let sunmoon = false;
let sunmoondim;

function setup() {
createCanvas(windowWidth, windowWidth, P2D);

  randomSeed(fxhash);
  fxrand = sfc32(...hashes);

  frameRate(120);


  colorMode(RGB, 255, 255, 255, 100);

  var rangeminimo, rangemassimo;

   let montagne = int(fxrand()*7)+1;
  //let montagne = 8;
  //print(montagne);

  //sunmoon = false;

   moon = createVector(fxrand()*width,fxrand()*height*0.3);
  sunmoondim = 10+fxrand()*width/20;

  for (let i = 0; i < montagne; i++) {
    //riempio il contenitore
    
    rangeminimo = random(height/8, height - (height/5));
    rangeminimo = constrain(rangeminimo, moon.y + 20, height - (height/5));
    rangemassimo = rangeminimo + random(0,height/2);

    mont[i] = new Montagna(rangeminimo, rangemassimo, int(random(1, 5)), random(100) ); //_rangehmin, _rangehmax, _tipo, _noiset
  }


  var rtop = int(fxrand()*255);
  var gtop = int(fxrand()*255);
  var btop = int(fxrand()*255);

  colorescuro = color(rtop - 120, gtop - 120, btop - 120);
  coloreombre = color(rtop - 100, gtop - 100, btop - 0);
  coloremedio = color(rtop - 50, gtop - 50, btop - 50,30);
  coloresfondo = color(fxrand()*255, fxrand()*255, fxrand()*255, 100);
 

 

  var R = red(coloremedio);
  var G = green(coloremedio);
  var B = blue(coloremedio);
  var minRGB = min(R, min(G, B));
  var maxRGB = max(R, max(G, B));
  var minPlusMax = minRGB + maxRGB;
  var complement = color(minPlusMax - R, minPlusMax - G, minPlusMax - B, 60);

  colorecielo = complement;

  

  if(fxrand()>0.9){  //---------------------------------

    monochrome = true;
    tipoPalette = "Monochrome";
    //print("monocromo");
  }else{
    monochrome = false;
    background(coloremedio);
    tipoPalette = "Colored";
  }

 

  let tempo = fxrand();

  if(tempo>0.5 && tempo<0.8 ){
  //pioggia
    weather = 1;
    weatherFeature = "Rain";
  } else if (tempo>0.8){
  //neve
    weather = 2;
    weatherFeature = "Snow";
  }else{
  //bel tempo
    weather = 3;
    weatherFeature = "Clear";

    if(fxrand() >0.5){
      sunmoon = true;
    }

    
  }


  window.$fxhashFeatures = {
    "Palette": tipoPalette,
    "Mountains": montagne,
    "Weather": weatherFeature,
    "Sun/Moon": sunmoon,
  }
  
}

function draw() {
  for (i = 0; i < mont.length; i++) {
    //mostro gli elementi nel contenitore

    mont[i].show(colorescuro, coloresfondo);

    if(monochrome==true){
      //print("monochrome");
    }else{
      mont[i].cielo(colorecielo);
      mont[i].cielopuntinato(colorecielo);

    }
    
    if (mont[i].tipo == 1 && weather == 2) {
      mont[i].cimeinnevate();
    }
    
    mont[i].ombre(coloreombre);
    mont[i].sfondopuntinato(coloresfondo);
    mont[i].sabbiagrossolana(colorescuro);
    mont[i].sabbiafine(colorescuro);
    mont[i].sabbiaultrafine(colorescuro);

    if(weather == 1){
      if(monochrome == false){
      mont[i].rain();
      mont[i].cloudy();
      }
    //print("rain");

    } else if (weather == 2){
      mont[i].snow();
    //print("snow");

    } else {
      print("What a wonderful weather!")
    }
    
  }

}

var rangehmin;
var rangehmax;
var tipoaltura;
var tipo;
let t;
let tt;

var randomity;
var posizionevecchiay = 0;
var nuovaposizione = 0;

let counter;
let inizionevey;

let posizionex;
let posizioney;

let octave;
let falloff;

class Montagna {

  constructor(_rangehmin, _rangehmax, _tipo, _noiset) {
    this.rangehmin = _rangehmin;
    this.rangehmax = _rangehmax;
    this.tipo = _tipo;
    this.t = _noiset;

    
    this.posizionex = 0;
    this.counter = 0;

    this.tt=fxrand()*100;

    if (this.tipo == 1) {
      this.tipoaltura = random(0.0005, 0.0009); //montagne
    } else if (this.tipo == 2) {
      this.tipoaltura = random(0.001, 0.008); //colline
    } else if (this.tipo == 3) {
      this.tipoaltura = random(0.01, 0.05);
    } else if (this.tipo == 4) {
      this.tipoaltura = random(0.06, 0.09);
    } else {
      this.tipoaltura = random(0.1, 0.5); //pianure //0.0009
    }

     octave = int(random(4, 14));
     falloff = random(0.8);
     noiseDetail(this.octave, this.falloff);

  }

  show(c, coloresfondo) {
    stroke(c);
    strokeWeight(2);

    this.posizioney = noise(this.t);

    this.posizioney = map(this.posizioney,0,1,this.rangehmin,this.rangehmax);

    stroke(c);
    strokeWeight(2);
    //print(aggiunta);
    point(this.posizionex, this.posizioney);

    point(this.posizionex, this.posizioney + random(width/14));
    
    this.posizionex = this.posizionex + 4;
    this.t = this.t + this.tipoaltura;

    if (this.posizionex > width) {
      if(weather == 3){
        if(sunmoon == true){
          let sunmoonC = color(255,255,fxrand()*255,50);
          fill(sunmoonC); 
          stroke(sunmoonC);
          ellipse(moon.x,moon.y, sunmoondim,sunmoondim);
        }
      }
      noLoop();
      
    }
  }

  cloudy(){

    stroke(120,120,120,80);
    let ycloud = noise(this.tt);
    ycloud = map(ycloud,0,1,height/6,height/5);
    line(this.posizionex,ycloud,this.posizionex,0);

    this.tt = this.tt + 0.09;

  }

  posx() {
    return this.posizionex;
  }

  cimeinnevate() {
    if (this.posizioney < this.posizionevecchiay) {
      this.counter++;
      if (this.counter > 30) {
        if (this.counter == 31) {
          this.inizionevey = this.posizioney;
        }

        this.innevamento();
      }
    } else if (this.posizioney > this.posizionevecchiay) {
      this.counter--;
      if (this.counter > 30) {
        this.innevamento();
        //print("cade la neve");
      }

      if (this.counter < 1) {
        this.counter = 0;

      }
    }
    this.posizionevecchiay = this.posizioney;
  }

  innevamento() {
    stroke(255, 255, 255, 10);

    strokeWeight(4);
    
    for (let n = 0; n < 10; n++) {
      
      if (this.counter > 30) {
        stroke(255, 255, 255, 10);
        strokeWeight(4);
      } else {
        stroke(255, 255, 255, 2);
        strokeWeight(2);
      }
      if (this.counter > 30) {
        point(this.posizionex,random(this.posizioney, this.inizionevey) + fxrand()*2);
      } else {
        point(this.posizionex, random(this.posizioney, this.inizionevey));
      }
    }
  }

  ombre(c) {
    stroke(c);

    strokeWeight(2);
    if (this.posizioney > this.posizionevecchiay) {

      for (let n = 0; n < 30; n++) {
        point(this.posizionex, this.posizioney + random(width/20));

        let media = (this.posizionevecchiay + this.posizioney) / 2;
        let distanza = dist(this.posizionex,this.posizionevecchiay, this.posizionex, this.posizioney);
        //println(distanza);
        if (distanza < 2) {
          //per avere un gradiente non troppo netto
          strokeWeight(1);
        }
      }
    }
    this.posizionevecchiay = this.posizioney;
  }

  sabbiagrossolana(c) {
    stroke(c);
    strokeWeight(1);
    for (let n = 0; n < 20; n++) {
      point(this.posizionex, this.posizioney + random(width/25));
    }
  }

  sabbiafine(c) {
    stroke(c);
    strokeWeight(0.8);
    for (let n = 0; n < 20; n++) {
      point(this.posizionex, this.posizioney + random(width/16));
    }
  }

  sabbiaultrafine(c) {
    stroke(c);
    strokeWeight(0.6);
    for (let n = 0; n < 20; n++) {
      point(this.posizionex, this.posizioney + random(width/11));
    }
  }


  sfondopuntinato(c) {
    stroke(c);
    strokeWeight(0.4);
    
    for (let n = 0; n < 500; n++) {
      point(this.posizionex, this.posizioney + random(width/3.3));
    }
  }


  cielo(c) {
    stroke(c, 10);
    strokeWeight(4);

    line(this.posizionex, this.posizioney, this.posizionex, 0);

    stroke(240);
    strokeWeight(2);
    point(this.posizionex, random(0, this.posizioney));

  }

  cielopuntinato(c) {
    stroke(c,50);
    strokeWeight(0.6);

    for (let n = 0; n < 1000; n++) {
      point(this.posizionex, this.posizioney - random(width/3.3));
    }

  }

  snow(){
    stroke(240);
    strokeWeight(4);
    point(this.posizionex, random(0, this.posizioney));

  }

  rain(){
    stroke(240,20);
    strokeWeight(2.5);
    let posizioneYRain = random(0,this.posizioney);
    let posRain = createVector(this.posizionex,posizioneYRain);
    

    line(posRain.x,posRain.y, posRain.x - 10,posRain.y + 10);

  }

}

//Thank you for watching! Please don't copymint!






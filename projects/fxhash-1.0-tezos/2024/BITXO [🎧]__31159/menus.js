function menu_principal(){
	//pgTxt=createGraphics(pcanvasW,pcanvasH);
  pgTxt.clear();
  pgTxt.background(colorFons);
  pgTxt.textAlign(CENTER, CENTER);
  pgTxt.textFont(font);
  pgTxt.textSize(min([canvasW,canvasH])/6);
  pgTxt.fill(colorLinia);
  pgTxt.text("BITXO", pgTxt.width/2,pgTxt.height/9);
  pgTxt.textSize(min([canvasW,canvasH])/16);
  pgTxt.text("["+iter+"]", pgTxt.width/2,pgTxt.height/3.8);
  pgTxt.textSize(min([canvasW,canvasH])/24);
  pgTxt.text("by poperbu", pgTxt.width/2,pgTxt.height/2.8);
  pgTxt.text("MIDI: "+quinMidi,pgTxt.width/2,pgTxt.height/2.2)
  pgTxt.textSize(min([canvasW,canvasH])/16);
  pgTxt.text(">> Click to start <<", pgTxt.width/2,(pgTxt.height/4)*2.4);
  pgTxt.text("+INFO", pgTxt.width/2,(pgTxt.height/4)*3.2);
  //pgTxt.textSize(min([canvasW,canvasH])/28);

  //pgTxt.text("[S or drag on top of screen->Save PNG]", pgTxt.width/2,(pgTxt.height/4)*3.2);
  //  pgTxt.text("[G or drag on bottom of screen->Save 2s GIF]", pgTxt.width/2,(pgTxt.height/4)*3.6);
  var midax=pgTxt.width/3.6
  var miday=pgTxt.height/20
  if(mouseY > (canvasH/4)*3){
      infoButActive=1
  }else{
      infoButActive=0
  }
}

function menu_info(){
  var separacio=pgTxt.height/4
  pgTxt.clear();
  pgTxt.background(colorFons);
  pgTxt.textAlign(CENTER, CENTER);
  pgTxt.textFont(font);
  pgTxt.textSize(min([canvasW,canvasH])/16);
  pgTxt.fill(colorLinia);
  pgTxt.text("Keyboard", pgTxt.width/2,separacio);
  pgTxt.text("MIDI nanoKontrol", pgTxt.width/2,separacio*2);
  pgTxt.text("<< back", pgTxt.width/2,separacio*3);

  if(mouseY < separacio*1.5){
      info2Buton=0
  }else if(mouseY < separacio*2.5){
      info2Buton=1
  }else{
      info2Buton=2
  }



}


function menu_keyboard(){
  var separacio=pgTxt.height/15
  pgTxt.clear();
  pgTxt.background(colorFons);
  pgTxt.textAlign(CENTER, CENTER);
  pgTxt.textFont(font);
  pgTxt.textSize(min([canvasW,canvasH])/16);
  pgTxt.fill(colorLinia);
  pgTxt.text("Keyboard:", pgTxt.width/2,separacio*1);
  pgTxt.textSize(min([canvasW,canvasH])/30);

  pgTxt.text("            \tPatternUp\tPatternDown\tReverbUp\tReverbDown", pgTxt.width/2,separacio*2);

  pgTxt.text("kick      \t\t\tq\t\t\t\t\ta\t\t\t\t\tQ\t\t\t\t\tA", pgTxt.width/2,separacio*3);
  pgTxt.text("hihat     \t\t\tw\t\t\t\t\ts\t\t\t\t\tW\t\t\t\t\tS",pgTxt.width/2,separacio*4);
  pgTxt.text("beep      \t\t\te\t\t\t\t\td\t\t\t\t\tE\t\t\t\t\tD", pgTxt.width/2,separacio*5);
  pgTxt.text("clic      \t\t\tr\t\t\t\t\tf\t\t\t\t\tR\t\t\t\t\tF", pgTxt.width/2,separacio*6);
  pgTxt.text("noise     \t\t\tt\t\t\t\t\tg\t\t\t\t\tT\t\t\t\t\tG", pgTxt.width/2,separacio*7);
  pgTxt.text("BITXO     \t\t\ty\t\t\t\t\th\t\t\t\t\t \t\t\t\t\t ", pgTxt.width/2,separacio*8);


  pgTxt.text("u/j->period time Up/Down",pgTxt.width/2, separacio*10)
  pgTxt.text("'space'->bitxo off",pgTxt.width/2, separacio*11)
  pgTxt.text("p->save png",pgTxt.width/2, separacio*12)
  pgTxt.text("m->save 2s GIF",pgTxt.width/2, separacio*13)



}

function menu_nanoKontrol(){
  var separacio=pgTxt.height/15
  pgTxt.clear();
  pgTxt.background(colorFons);
  pgTxt.textAlign(CENTER, CENTER);
  pgTxt.textFont(font);
  pgTxt.textSize(min([canvasW,canvasH])/16);
  pgTxt.fill(colorLinia);
  pgTxt.text("MIDI nanoKontrol:", pgTxt.width/2,separacio*1);
  pgTxt.textSize(min([canvasW,canvasH])/30);

  pgTxt.text("            \tPattern Up/Down\t\tReverb Up/Down", pgTxt.width/2,separacio*2);

  pgTxt.text("kick        \tslider1        \t\tknob1", pgTxt.width/2,separacio*3);
  pgTxt.text("hihat       \tslider2        \t\tknob2",pgTxt.width/2,separacio*4);
  pgTxt.text("beep        \tslider3        \t\tknob3", pgTxt.width/2,separacio*5);
  pgTxt.text("clic        \tslider4        \t\tknob4", pgTxt.width/2,separacio*6);
  pgTxt.text("noise       \tslider5        \t\tknob5", pgTxt.width/2,separacio*7);
  pgTxt.text("BITXO       \tslider6        \t\t     ", pgTxt.width/2,separacio*8);


  pgTxt.text("slider7->period time Up/Down",pgTxt.width/2, separacio*10)
  pgTxt.text("stop/play->bitxo off/on",pgTxt.width/2, separacio*11)
  pgTxt.text("[>>]->save png",pgTxt.width/2, separacio*12)
  pgTxt.text("rec->save 2s GIF",pgTxt.width/2, separacio*13)



}
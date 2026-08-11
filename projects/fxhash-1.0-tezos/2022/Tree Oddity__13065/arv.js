
        function branch16(len){

          push();

          if (len > 7){
            strokeWeight(map(len, 15, 100, 0.9, 5));

            if(ra == 0){stroke(random(50), 200, random(100, 200));} //laranja
            if(ra == 1){stroke(random(220), random(30, 60), random(100, 200));} // laranja e verde
            if(ra == 2){stroke(random(30, 400), random(30, 60), random(100, 200));} //multi
            if(ra == 3){stroke(random(50, 300), 10, 50);} // mesclado verde e lilas
            if(ra == 4){stroke(random(350, 450), random(20, 50), random(100, 200));} // mesclado vermelho
            if(ra == 5){stroke(random(280, 400), random(20, 50), random(100, 200));} //mesclaro rosa e vermelho
            if(ra == 6){stroke(random(10, 50), random(20, 50), random(100, 200));} // mesclado laranjado
            if(ra == 7){stroke(random(30, 80), random(20, 50), random(100, 200));} // mesclado amarelo
            if(ra == 8){stroke(random(100, 200), random(20, 50), random(100, 200));} //masclado verde
            if(ra == 9){stroke(random(220, 400), 25, random(100, 200));} //rosa claro
            if(ra == 10){stroke(random(220, 350), random(20, 50), random(100, 200));} // masclado rosa e azul
            if(ra == 11){stroke(random(230, 300), random(20, 50), random(100, 200));} // lilas e azul
            if(ra == 12){stroke(random(5, 150), random(50, 100), random(100, 200));} // verde mesclado
            if(ra == 13){stroke(random(250, 350), random(20, 50), random(100, 200));} // rosa mesclado
            if(ra == 14){stroke(random(190,200), random(50, 100),  random(200, 250));} // azul claro
            if(ra == 15){stroke(random(170,215), random(50, 200),  random(100, 250));} //azul mesclado
            if(ra == 16){stroke(random(160,190), 10, random(100, 200));}// branca
            line(0,0,0, -len);
            translate(0, -len);
            rotate(16);
            branch16(len * 0.5);

            rotate(random(-20-20.1));
            branch16(len * 0.9);

            rotate(random(-22-22.1));
            branch16(len * 0.5);

          }
          pop();
        }


        function branch166(len){
          push();
          if (len > 3){
            strokeWeight(map(len, 25, 100, 0.9, 10));
            stroke(300, 2, 7); // escuro

            line(0,0,0, -len);
            translate(0, -len);
            rotate(27);
            branch166(len * 0.5);

            rotate(random(-26-27.1));
            branch166(len * 0.85);

            rotate(random(-26-27.1));
            branch166(len * 0.03);
          }

          pop();
        }

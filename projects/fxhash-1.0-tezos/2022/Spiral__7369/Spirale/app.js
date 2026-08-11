
var nx = 50,ny=50;
var liens = [];//new Array(nx,ny,4); //new int[nx][ny][4]// 0 --> gauche ; 1 --> haut ; 2 --> droite ; 3 --> bas
var liant = [[-1,0] , [0,-1] , [1,0] , [0,1]];
var reciprocite = [2,3,0,1];
var position =  [0,0];
var historique = [];// = new ArrayList<int>();
var deltaX,deltaY;

var importanceDist = 3;//3;
var delinearisation = 7;//10;
var importanceAngle = 0.5;//0.5;
var rayonMax;

var fini = false;
var iteration = 1;
var gold = false;

var fond;
var delta;
var sensG;
var nCercle = 10,couleurCercle = [],largeurCercle = [],rayonCercle = [],baseCercle = [],longueurCercle = [],vitesseCercle=[];

function setup(){
  sensG = aleatoire(0,1);
  if(sensG < 0.5){
    sensG = 1;
  }else{
    sensG = -1;
  }
    for(var x = 0; x < nx ; x ++){
        var liensy = []
        for(var y = 0; y < ny ; y ++){
            liensy.push([0,0,0,0]);
        }
        liens.push(liensy);
    }
    createCanvas(min(windowWidth,windowHeight)*0.95, min(windowWidth,windowHeight)*0.95);
  if(aleatoire(0,1) < 1.0/64.0){
    gold = true;
  }
  deltaX = (width)/nx;
  deltaY = (height)/ny;
  delta = min(deltaX,deltaY);
  
  rayonMax = min(width,height)*0.5*0.8;
  
  position[0] = nx/2;
  position[1] = ny/2;
  historique.push(copiePos());

  // while(fini == false){
  //   executer();
  // }
  fond = color(aleatoire(0,40),aleatoire(0,40),aleatoire(0,40));
  
  dessiner();
  background(fond);
  initialisationCercle();

}

function initialisationCercle(){
  for(let i = 0 ; i < nCercle ; i ++){
    var colTemp = color(aleatoire(50,200),aleatoire(50,200),aleatoire(50,200),aleatoire(120,200));
    if(gold){
      colTemp = color(255,215,0);
  }
    couleurCercle.push(colTemp);
    largeurCercle.push(aleatoire(0.2,1.5)*min(width,height)/100.0);
    rayonCercle.push(aleatoire(1.05*rayonMax,0.9*sqrt(2)*min(width,height)/2));
    baseCercle.push(radians(aleatoire(0,360)));
    longueurCercle.push(radians(aleatoire(25,100)));
    vitesseCercle.push(aleatoire(radians(-1.0/10),radians(1.0/10)) );
  }
}

function affCercle(){
  background(fond);
  for(let i = 0 ; i < nCercle ;i  ++){
    stroke(couleurCercle[i]);
    noFill();
    strokeWeight( largeurCercle[i]);
    var rayon = rayonCercle[i];
    var base = baseCercle[i];
    var longueur = longueurCercle[i];
    arc(width/2,height/2,rayon*2,rayon*2, base,base+longueur );
    baseCercle[i] += vitesseCercle[i];
    longueurCercle[i];
    baseCercle[i] = baseCercle[i]%360;

  }
}



function draw(){
  frameRate(120);
  // background(255);
  // for(var a = -180; a < 180 ; a ++){if(sens((atan2(mouseY-height/2,mouseX-width/2)),radians(a)) > 0){noStroke();fill(0);ellipse(width/2+cos(radians(a))*100,height/2+sin(radians(a))*100,10,10);}
  //   if( (degrees(atan2(mouseY-height/2,mouseX-width/2))) == a){noStroke();fill(255,0,0);ellipse(width/2+cos(radians(a))*100,height/2+sin(radians(a))*100,10,10);}}
  // frameRate = 0.5;
  affCercle();
  if(fini == false){executer();}
  if(fini == false){executer();}
  if(fini == false){executer();}
  dessiner();
}



function dessiner(){
  
  for(var x = 0; x < nx ; x ++){
    for(var y = 0; y < ny ; y ++){
      for(var i = 0; i < 4 ; i ++){
        if(liens[x][y][i] > 0){
          stroke(240);
          if(gold){
            stroke(255,215,0);
          }
          strokeWeight(delta/4.0/  (1+10*liens[x][y][i]/nx/ny)  );
          line(x*delta+deltaX/2.0,y*delta+deltaY/2.0,(x+liant[i][0])*delta+deltaX/2.0,(y+liant[i][1])*delta+deltaY/2.0);
        }
      }
      //Povar de position
      //if(x == position[0] && y == position[1]){stroke(255,0,0);fill(255,0,0);ellipse(x*deltaX+deltaX/2.0,y*deltaY+deltaY/2.0,5,5);}
      
      //Bords
      //for(var i = 0; i < 4 ; i ++){var xv = position[0]+liant[i][0];var yv = position[1]+liant[i][1];
        //if(xv >= 0 && xv < nx && yv >= 0 && yv < ny){if( estLier(xv,yv)){stroke(255,0,0);line(nx*xv-nx/4,ny*yv-ny/4,nx*xv+nx/4,ny*yv+ny/4);line(nx*xv-nx/4,ny*yv+ny/4,nx*xv+nx/4,ny*yv-ny/4);}}}
    }
  }
}

function executer(){
  
  var probas = [0,0,0,0];
  for(var i = 0; i < 4 ; i ++){
    probas[i] = 0;
    var xv = position[0]+liant[i][0];
    var yv = position[1]+liant[i][1];
    var positionVoisin = [xv,yv];

    //if(distance(historique[0],positionVoisin)*delta > rayonMax){
    //prvarln("dist : "+distance(historique[0],positionVoisin)*delta);
    //prvarln("rayon : "+rayonMax);
    //}// && distance(historique.get(0),positionVoisin)*deltaX < rayonMax
    if(xv >= 0 && xv < nx && yv >= 0 && yv < ny && distance(historique[0],positionVoisin)*delta < rayonMax){//Dans la zone  
      if( estLier(xv,yv) == false){// N'est pas lier
        probas[i] += importanceDist*1.0/distance(historique[0],positionVoisin);
        
        var angleM = angle(historique[0],position);
        var angleV = angle(historique[0],positionVoisin);
        
        if(sensG*sens(angleM,angleV) > 0 && (position[0] != historique[0][0] || position[1] != historique[0][1]) ){
          probas[i] += importanceAngle*1.0/distance(historique[0],position);
        }
        
      }
    }
  }
  
  //Normalisation des probas :
  for(var i = 0; i < 4 ; i ++){
    probas[i] = pow(probas[i],delinearisation);
  }
  var total = 0;
  for(var i = 0; i < 4 ; i ++){
    total += probas[i];
  }
  if(total > 0.000001){
    for(var i = 0; i < 4 ; i ++){
      probas[i] /= total;
    }
    
    var dest = -1;
    var r = aleatoire(0,1);
    if(r < probas[0]){
      dest = 0;
    }else if(r < probas[0]+probas[1]){
      dest = 1;
    }else if(r < probas[0]+probas[1]+probas[2]){
      dest = 2;
    }else{
      dest = 3;
    }
    
    lier(position[0],position[1],dest);
    position[0] += liant[dest][0];
    position[1] += liant[dest][1];
    historique.push(copiePos());
  }else{
    historique.pop(historique.length-1);
    if((historique.length-1) > 0){
      var sol = historique[((historique.length-1))];
      position[0] = sol[0];
      position[1] = sol[1];
    }else{
      fini = true;
    }
  }
  
}

function copiePos(){
  var cp = [position[0],position[1]];
  return cp;
}

function distance(p1,p2){
  return sqrt( (p1[0]-p2[0])*(p1[0]-p2[0])+(p1[1]-p2[1])*(p1[1]-p2[1]));
}

function angle(p1,p2){
  return atan2(p2[1]-p1[1],p2[0]-p1[0]);
}

function sens( angle1, angle2){
  
  var aD = degrees(angle1)+180;
  var aMin = aD-180;
  var aC = degrees(angle2)+180;
  if(aMin < 0){
    if( aC > aMin+360 || aC < aD ){return 1;}else{return -1;}
  }else{
    if( aC > aMin && aC < aD ){return 1;}else{return -1;}
  }
}

function lier(x1, y1, lien){
  liens[x1][y1][lien] = iteration;
  liens[x1+liant[lien][0]][y1+liant[lien][1]][reciprocite[lien]] = iteration;
  iteration ++;
}

function estLier( x1,  y1){
  var rep = false;
  for(var i = 0; i < 4 ; i ++){
    if(liens[x1][y1][i] > 0){
      rep = true;
    }
  }
  return rep;
}

function aleatoire(min,max){
    return fxrand()*(max-min)+min;
}
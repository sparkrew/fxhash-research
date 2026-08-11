class grids {
    constructor(_col_width,_col_height,_col_dist,mode_in,_offX,_offY) {
    this.mode = mode_in;
    this.dist = col_dist;
    this.height = col_height;
    this.width = col_width;
    this.offsetX =offX;
    this.offsetY =offY;
    
    }
    
  run ()
  {

   this.values();

   grid.push()
   grid.translate(-WIDTH/2,-HEIGHT/2,0)
   grid.image(piirto,0,0)
   piirto.clear();
   grid.pop()
   grid2.push();
   rnd_run = fxrand()
        if (rnd_run > 0.95)
   {
   grid2.rotate(fxrand()*360);
   }
     if (rnd_run > 0.6)
   {
   grid2.rotate(180);
   }
   if (rnd_run > 0.4)
   {
   grid2.rotate(-90);
   }
   if (rnd_run > 0.2)
   {
   grid2.rotate(90);
   }

   this.display();

 
   grid2.pop();


if (f1b > 1)
{
 tausta_arr = []
 W_MOD = (fxrand()*0.2)+0.7
 H_MOD = 0.7

 W3 = W_MOD*W
H3 = H_MOD*H
M2 = (W_MOD+H_MOD)/2

         f3 = Math.round(fxrand() *(max_col-1))+1// nmbr of columns
	 f33 = Math.round(fxrand() *(max_col-1))+1
      f4 = Math.round(fxrand() *4)+1// top mode
 f5 = Math.round(fxrand() *4)+1// bottom mode
 f6 = Math.round(fxrand() *2)+1 // bg color mode
 f61 = Math.round(fxrand()) // screen bg color mode
 f62 = Math.round(fxrand() *3)+1 // split mode
 f63 = Math.round(fxrand() *2)


 f7 = Math.round(fxrand())//90 degree flip
 f71 = Math.round(fxrand())//mirror degree flip
 f8 = Math.round(fxrand()*2)//tausta random rotate mode
 //f9 = Math.round(fxrand())//väli vs päällekkäin
 f10 = Math.round(fxrand() *3) +1 // column size mode
 f11 = Math.round(fxrand()) //pivot point
   
   
 f13 = Math.round(fxrand()) // tri rotate angle
 f14 = Math.round(fxrand()*2) //isometrik mode
 f141 = Math.round(fxrand()*2) //isometrik mirroring

 f142 = Math.round(fxrand()*2) //isometrik colormode
 f143 = Math.round(fxrand()) //isometrik 90 deg mode

f15 = 1;

   shuffle1(clr_ar);
    clr_sc1 = color(clr_ar[1]);  
 clr_sc2 = color(clr_ar[2]);  
 clr1 = color(clr_ar[3]); 
 clr2 = color(clr_ar[4]);   
   for (let i=0; i<f3; i++)
    {
    let inter = map(i, 0, f3, 0, 1);
    let c = lerpColor(color(clr_sc1), color(clr_sc2), inter);
    screen_clr_ar[i] = color(c)
    
    }
   
   grid.push()
   Taustarr.run();
   Piirto.run2();
   
   
   grid.translate(-WIDTH/2,-HEIGHT/2,100*M)
   grid.image(piirto,0,0)
   piirto.clear();
   grid.pop()
   
   
   grid.push()
        if (rnd_run > 0.8)
   {
   grid.rotate(fxrand()*360);
   }
     if (rnd_run > 0.6)
   {
   grid.rotate(180);
   }
   if (rnd_run > 0.4)
   {
   grid.rotate(-90);
   }
   if (rnd_run > 0.2)
   {
   grid.rotate(90);
   }
   image(grid,0,0) 


   grid.pop();

      CLR.colormap(clr_seed,clrs,clr_mode) ;
      

}



if (f1b > 2)
{
 tausta_arr = []
 W_MOD = (fxrand()*0.2)+0.7
 H_MOD = 0.7

 W3 = W_MOD*W
H3 = H_MOD*H
M2 = (W_MOD+H_MOD)/2

         f3 = Math.round(fxrand() *(max_col-1))+1// nmbr of columns
	 f33 = Math.round(fxrand() *(max_col-1))+1
      f4 = Math.round(fxrand() *4)+1// top mode
 f5 = Math.round(fxrand() *4)+1// bottom mode
 f6 = Math.round(fxrand() *2)+1 // bg color mode
 f61 = Math.round(fxrand()) // screen bg color mode
 f62 = Math.round(fxrand() *3)+1 // split mode
 f63 = Math.round(fxrand() *2)


 f7 = Math.round(fxrand())//90 degree flip
 f71 = Math.round(fxrand())//mirror degree flip
 f8 = Math.round(fxrand()*2)//tausta random rotate mode
 //f9 = Math.round(fxrand())//väli vs päällekkäin
 f10 = Math.round(fxrand() *3) +1 // column size mode
 f11 = Math.round(fxrand()) //pivot point
   
   
 f13 = Math.round(fxrand()) // tri rotate angle
 f14 = Math.round(fxrand()*2) //isometrik mode
 f141 = Math.round(fxrand()*2) //isometrik mirroring

 f142 = Math.round(fxrand()*2) //isometrik colormode
 f143 = Math.round(fxrand()) //isometrik 90 deg mode


f15 = 1;

   shuffle1(clr_ar);
    clr_sc1 = color(clr_ar[1]);  
 clr_sc2 = color(clr_ar[2]);  
 clr1 = color(clr_ar[3]); 
 clr2 = color(clr_ar[4]);   
   for (let i=0; i<f3; i++)
    {
    let inter = map(i, 0, f3, 0, 1);
    let c = lerpColor(color(clr_sc1), color(clr_sc2), inter);

    screen_clr_ar[i] = color(c)
    
    }

   grid.push()
   Taustarr.run();

   Piirto.run2();

   
   grid.translate(-WIDTH/2,-HEIGHT/2,100*M)
   grid.image(piirto,0,0)

   grid.pop()
   

   
   grid.push()
        if (rnd_run > 0.8)
   {
   grid.rotate(fxrand()*360);
   }
     if (rnd_run > 0.6)
   {
   grid.rotate(180);
   }
   if (rnd_run > 0.4)
   {
   grid.rotate(-90);
   }
   if (rnd_run > 0.2)
   {
   grid.rotate(90);
   }
 
   grid.pop();
   
      CLR.colormap(clr_seed,clrs,clr_mode) ;
      

   grid.push();
   rnd_run = fxrand()
       if (rnd_run > 0.8)
   {
   grid.rotate(fxrand()*360);
   }
     if (rnd_run > 0.6)
   {
   grid.rotate(180);
   }
   if (rnd_run > 0.4)
   {
   grid.rotate(-90);
   }
   if (rnd_run > 0.2)
   {
   grid.rotate(90);
   }
   image(grid,0,0)

   grid.pop();
   
   
  
}
// 
// 


  }
  
  
  values()
  {
   grid_dist = (((W/f3)/f3)+(((fxrand()*60)-30)))
   //print ('grid distance = '+grid_dist )
   gridlngth_mod = Math.round(fxrand()*(col_height*2))
   //gridlngth_mod = 200;
   //print ('length mod = '+gridlngth_mod)
   
   

  }
  
  
  
  display()
  {
//   grid.push()
//   grid.translate(-WIDTH/2,-HEIGHT/2,0)
//    grid.image(piirto,0,0)
//    piirto.clear();
//    grid.pop()

grid.push()

//grid.circle(0,0,100*M)

let grid_dist = (WIDTH-((marginaali*M)*2))/f3   
grid.translate (-WIDTH/2-(grid_dist/4),0,0)
grid.translate ((marginaali*M),0,0)
let X_mod = 0;
let Y_mod = 0;

  if (fxrand() > 0.7)
  {
   Y_mod = ((fxrand()*100)-50)*M
  }
  else {Y_mod = 0}
  
    if (fxrand() > 0.9)
  {
   X_mod = ((fxrand()*100)-50)*M
  }
  else {X_mod = 0}



   for (let i = 0;i < f3; i++)
{

grid.push();
grid.translate (col_width*M,0,0)
//=============================================================
grid.translate (grid_dist*i,-gridlngth_mod*M,0) //-200 pitäis olla 0 !!!!!
//=============================================================
grid.translate (X_mod*i,Y_mod*i,0);
 if (f4 > fxrand()*(f4+(f4*(f4/100))))
   {
this.gridMake2();
}
grid.pop()
}
   grid.pop()
  image(grid, 0,0)
  //grid.clear();
  }
  
    display2()
  { 

grid2.push()



let grid_dist = (WIDTH-((marginaali*M)*2))/f3   

grid2.translate (-WIDTH/2-(grid_dist/4),0,0)
grid2.translate ((marginaali*M),0,0)

let X_mod = 0;
let Y_mod = 0;

  if (fxrand() > 0.7)
  {
   Y_mod = ((fxrand()*100)-50)*M
  }
  else {Y_mod = 0}
  
    if (fxrand() > 0.9)
  {
   X_mod = ((fxrand()*100)-50)*M
  }
  else {X_mod = 0}



   for (let i = 0;i < f3; i++)
{

grid2.push();
grid2.translate (col_width*M,0,0)
//=============================================================
grid2.translate (grid_dist*i,-gridlngth_mod*M,0) //-200 pitäis olla 0 !!!!!
//=============================================================
grid2.translate (X_mod*i,Y_mod*i,0);   



 if (f4 > fxrand()*(f4+(f4*(f4/100))))
   {
this.gridMake3();
}
grid2.pop()
}
   grid2.pop()
   grid2.shader(noize);
noize.setUniform('tex0', grid2);
noize.setUniform('amt', 0.4);
noize.setUniform('amt2', 2.0);
grid2.push();
grid2.noStroke();
grid2.rect(0,0,WIDTH,HEIGHT)
grid2.pop()

  grid.image(grid2,-WIDTH/2,-HEIGHT/2)
  image(grid, 0,0)

  }
  
  
  
  
  
  
    gridMake1() //sama mode kaikissa vaaka tai nouseva/ laskeva
  { 
  
  let X_mod = 0;
  let Y_mod = 0;
  
  if (fxrand() > 0.8)
  {
   Y_mod = ((fxrand()*8)-4)*M
  }
  else {Y_mod = 0}
  
    if (fxrand() > 0.9)
  {
   X_mod = ((fxrand()*8)-4)*M
  }
  else {X_mod = 0}
  
  
  
  
  let grid_vali = ((col_width*M)/gridX)
  grid.push()
  //gridlngth_mod = 0
  for (let j = 0; j<gridY+1+gridlngth_mod;j++)
  {
  let noiseScale = 10;
  let nMod = noise(0,noise(j/noiseScale),0)
  grid.push()
  grid.translate (bend_arX[j]*M,((grid_vali*j)+(nMod-0.5))*M,bend_arY[j]*M)
  
 
  for (let i = 0; i<gridX+1;i++)
  {
  let noiseScale = 30;
  let nMod = noise(0,noise(j/noiseScale),0)
  grid.push()
  grid.translate ((grid_vali*i),0,((nMod)*100)*M)
  grid.translate(X_mod*i,X_mod*i,0)
  if (f2 == 3)
  {
  let rnd_run2 = (fxrand())
  if (fxrand() > j/(gridX+1)-rnd_run2)
  {
  this.toks();
  }
  }
  
   if (f2 == 2)
  {
  let rnd_run2 = (fxrand()/20)
  if (fxrand() < (j/(gridX+1)))
  {
  this.toks();
  }
  }
  
  if (f2 == 1)
  {
  this.toks();
  }
  grid.pop()
  }
  grid.pop();
  }
 grid.pop()

  }
  
  
  
  
  
      gridMake2() //sama mode kaikissa vaaka tai nouseva/ laskeva
  { 
  f4 = Math.round(fxrand() *4)+1// top mode
  BendArr.run(f4);
  let X_mod = 0;
  let Y_mod = 0;
  
  if (fxrand() > 0.8)
  {
   Y_mod = (fxrand()*(8*M))-(4*M)
  }
  else {Y_mod = 0}
  
    if (fxrand() > 0.9)
  {
   X_mod = (fxrand()*(8*M))-(4*M)
  }
  else {X_mod = 0}
  
  
  
  
  let grid_vali = ((col_width*M)/gridX)
  grid.push()
  
  for (let j = 0; j<gridY+1+gridlngth_mod;j++)
  {
  let noiseScale = 10;
  let nMod = noise(0,noise(j/noiseScale),0)
  grid.push()
  grid.translate (bend_arX[j]*M,(grid_vali*j)+(nMod-0.5),bend_arY[j]*M)
  
 
  for (let i = 0; i<gridX+1;i++)
  {
  let noiseScale = 30;
  let nMod = noise(0,noise(j/noiseScale),0)
  grid.push()
  grid.translate ((grid_vali*i),0,((nMod)*100)*M)
  grid.translate(X_mod*i,X_mod*i,0)
  if (f2 == 3)
  {
  let rnd_run2 = (fxrand())
  if (fxrand() > j/(gridX+1)-rnd_run2)
  {
  this.toks();
  }
  }
  
   if (f2 == 2)
  {
  let rnd_run2 = (fxrand()/20)
  if (fxrand() < (j/(gridX+1)))
  {
  this.toks();
  }
  }
  
  if (f2 == 1)
  {
  this.toks();
  }
  grid.pop()
  }
  grid.pop();
  }
 grid.pop()

  }
  
  
  
        gridMake3() //sama mode kaikissa vaaka tai nouseva/ laskeva
  { 
  f4 = Math.round(fxrand() *4)+1// top mode
  BendArr.run(f4);
  let X_mod = 0;
  let Y_mod = 0;
  
  if (fxrand() > 0.8)
  {
   Y_mod = (fxrand()*(8*M))-(4*M)
  }
  else {Y_mod = 0}
  
    if (fxrand() > 0.9)
  {
   X_mod = (fxrand()*(8*M))-(4*M)
  }
  else {X_mod = 0}
  
  
  
  
  let grid_vali = ((col_width*M)/gridX)
  grid2.push()
  
  for (let j = 0; j<gridY+1+gridlngth_mod;j++)
  {
  let noiseScale = 10;
  let nMod = noise(0,noise(j/noiseScale),0)
  grid2.push()
  grid2.translate (bend_arX[j]*M,(grid_vali*j)+(nMod-0.5),bend_arY[j]*M)
  
 
  for (let i = 0; i<gridX+1;i++)
  {
  let noiseScale = 30;
  let nMod = noise(0,noise(j/noiseScale),0)
  grid2.push()
  grid2.translate ((grid_vali*i),0,((nMod)*100)*M)
  grid2.translate(X_mod*i,X_mod*i,0)
  if (f2 == 3)
  {
  let rnd_run2 = (fxrand())
  if (fxrand() > j/(gridX+1)-rnd_run2)
  {
  this.toks2();
  }
  }
  
   if (f2 == 2)
  {
  let rnd_run2 = (fxrand()/20)
  if (fxrand() < (j/(gridX+1)))
  {
  this.toks2();
  }
  }
  
  if (f2 == 1)
  {
  this.toks2();
  }
  grid2.pop()
  }
  grid2.pop();
  }
 grid2.pop()

  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  toks()
  { 
  grid.push()
  grid.noStroke();
  let c = color(clr1)
  //print (c)
  c.setAlpha (0.8);
  grid.fill(c)
  for (let i = 0; i < 2; i++)
  {
  grid.push()
  grid.rotate (fxrand()*90)
  grid.ellipse (0,0,(((fxrand()*3)+3)-i)*M,(((fxrand()*3)+3)-i)*M)
  for (let j = 0; j < 3 ; j++)
  {
  push();
  translate (((fxrand()*3)-1.5)*M,((fxrand()*3)-1.5)*M,);
  grid.rect (0,0,((fxrand()*1)+0.2)*M,((fxrand()*2)+0.2)*M)
  pop();
  }
  grid.pop()
  }
  
  
  for (let i = 0; i < 1; i++)
  {
  grid.push()
  //grid.rotate (fxrand()*90)
  grid.ellipse (0,0,((fxrand()*5)+3)*M,((fxrand())+0.5)*M)
  grid.ellipse (0,0,((fxrand())+0.5)*M,((fxrand()*5)+3)*M)
  grid.pop()
  }
  grid.pop()
  }
  
  
    toks2()
  { 
  grid2.push()
  grid2.noStroke();
  let c = color(clr1)
  //print (c)
  c.setAlpha (0.7);
  grid2.fill(c)
  for (let i = 0; i < 2; i++)
  {
  grid2.push()
  grid2.rotate (fxrand()*90)
  grid2.ellipse (0,0,(((fxrand()*3)+3)-i)*M,(((fxrand()*3)+3)-i)*M)
  for (let j = 0; j < 3 ; j++)
  {
//   push();
//   translate (((fxrand()*3)-1.5)*M,((fxrand()*3)-1.5)*M,);
  grid2.rect (0,0,((fxrand()*1)+0.2)*M,((fxrand()*2)+0.2)*M)
//   pop();
  }
  grid2.pop()
  }
  
  
  for (let i = 0; i < 1; i++)
  {
  grid2.push()
  //grid.rotate (fxrand()*90)
  grid2.ellipse (0,0,((fxrand()*5)+3)*M,((fxrand())+0.5)*M)
  grid2.ellipse (0,0,((fxrand())+0.5)*M,((fxrand()*5)+3)*M)
  grid2.pop()
  }
  grid2.pop()
  }
  }
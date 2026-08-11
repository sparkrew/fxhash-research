//fixaa tausta lerp tummuusvaihtelu koon muuttuessa


//hmmm onkohan tuo mapista tuleva value oikeasti kokonaisluku





// 10:10
// processingissa tuo map kŠyttŠŠ flotareita
// 10:10
// p5js sanoo ettŠ map on Number
// 10:11
// mulla oli omassa lerpissa just float/int tyyppimuunnos-ongelma
// 10:11
// joka ratkoontui sillŠ ettŠ pidin huolta ettŠ kaikki on kokonaislukuja


class piirturi{
  constructor(_col_width,_col_height,_col_dist) {
    this.dist = col_dist;
    this.height = col_height;
    this.width = col_width;
    }
   runBg() 
   {
   
   }
    
run()
{
piirto.push();
this.values()

piirto.background(bgbgclr);
//print ('bg bg color = '+ bgbgclr)
//f66 = 0;
if (f66 === 0)
{
this.taust()
}

if (f66 === 1)
{  
piirto.push()  
piirto.translate(0,HEIGHT,0);
piirto.scale(1,-1)
this.taust()
piirto.pop()
}

if (f66 === 2)
{  
piirto.push()  
piirto.translate(WIDTH,0,0);
piirto.rotate(90)
this.taust()
piirto.pop()
}

if (f66 === 3)
{  
piirto.push()  
piirto.translate(0,HEIGHT,0);
piirto.rotate(-90)
this.taust()
piirto.pop()
}


//piirto.circle (1200*M,300*M,40*M)
this.karvv()
let vjjoku = 20
// reunat.copy(piirto, 0, 0, Math.round(vjjoku*M), HEIGHT, 0,0, Math.round(vjjoku*M), HEIGHT)
// reunat.copy(piirto, 0, 0, WIDTH, Math.round(vjjoku*M), 0,0, WIDTH, Math.round(vjjoku*M))
// reunat.copy(piirto,0,HEIGHT-(Math.round(vjjoku*M)),WIDTH,Math.round(vjjoku*M),0,HEIGHT-(Math.round(vjjoku*M)),WIDTH,Math.round(vjjoku*M))
// reunat.copy(piirto,WIDTH-(Math.round(vjjoku*M)),0,vjjoku*M,HEIGHT,WIDTH-(Math.round(vjjoku*M)),0,Math.round(vjjoku*M),HEIGHT)
 reunat.copy(piirto,0,0,WIDTH,HEIGHT,0,0,WIDTH,HEIGHT) 
 this.tekstuuri2();
 this.tekstuuri2();
 //this.tekstuuri2();

 reunat.erase()
 reunat.push()
 reunat.translate(vjjoku*M,vjjoku*M,0);

//this.siivumask(0,'white','white',255,Math.floor((WIDTH/M)-((vjjoku*2.1))),Math.floor((HEIGHT/M)-((vjjoku*2))));
this.siivumask(0,'white','white',255,(W)-((vjjoku*2)),(H)-((vjjoku*2)));

reunat.pop();
 //reunat.mask(reunat._renderer);
// ( masked = reunat.get()).mask(reunat.get);

//print ('valmis')
//print ('f14 = '+f14)
if (f14 > 0)
{
//piirto.circle(0,0,100)
piirto.push();

if (f143 ===1)
{
//piirto.translate(WIDTH,0,0);
piirto.rotate(0)
}

if (f141 === 1)
{
 piirto.scale(1,1)
 //piirto.translate(-WIDTH,0,0);
}

if (f141 === 2)
{
 piirto.scale(1,1)
 //piirto.translate(0,-HEIGHT,0);
}

this.isom();
piirto.pop()

 //piirto.circle(0,0,100)
}

else
{
//piirto.circle(0,0,100)
t_draw = 1
this.pohja() 
t_draw = 0;

this.screen()
}
//piirto.circle(0,0,100)
this.tekstuuri();
//this.tekstuuri();
col_height = tausta_arr[0][0][1]

piirto.pop();
}

run2()
{
//print('MENEEKST€H€?!?!?!?!')
//piirto.circle(0,0,100)
//piirto.translate(500,0,0)
this.values()
//this.taust()
piirto.push()
piirto.translate(420*M,0*M,0)

piirto.scale(0.65,0.65)
t_draw = 1
piirto.push()
this.pohja()
piirto.pop()

t_draw = 0
        // print('vika randomi = '+ fxrand())

//0
//this.tekstuuri();
this.screen()
        // print('vika randomi = '+ fxrand())

piirto.pop();
//this.tekstuuri();
grid.push();
//grid.translate(-WIDTH/2,-HEIGHT/2,0)
//piirto.image(reunat,0,0)
grid.pop();
//print ('hephephep')
//<





this.tekstuuri();

}

run3()
{
this.values()
//this.taust()
//this.pohja()
//this.tekstuuri();
piirto.push()
//piirto.image(reunat,0,0)

piirto.translate(420*M,0*M,0)

piirto.scale(0.65,0.65)
this.screen()
piirto.pop()
this.tekstuuri();
}


values()
{
  
  

  screen_offX = ((fxrand()*50)-25)*M
  screen_offY = ((fxrand()*50)-25)*M
//   main_offX = ((fxrand()*100)-50)*M
//   main_offY = ((fxrand()*100)-50)*M

     main_offX = 0;
    main_offY = 0;
    mastOfstX = (fxrand()*(50*M))-(25*M)
    mastOfstY = (fxrand()*(50*M))-(25*M)
  
     
       pivotX = (WIDTH/2)+((fxrand()*(200*M))-(100*M))
       pivotY = (HEIGHT/2)+((fxrand()*(200*M))-(100*M))
  // main_offX = ((fxrand()*40)-20)*M
 //  main_offY = ((fxrand()*40)-20)*M
  //rota_off = (fxrand()*WIDTH)-(WIDTH/2)
  rota_off = 0
  Tsiivu_valiX = fxrand()*(20*M);
  Tsiivu_valiY = fxrand()*(marginaali*M)
  isoW = f3 * tausta_arr[0][0][0]
  isoH = f33 * (tausta_arr[0][0][1]/2)
  //print ('iso H = '+isoH)
  if (f14 === 2)
  {
      iso_midW =((W-isoW)/2)
       iso_midH =(H-(isoH))/2

  }
  else
  {
    iso_midW =(W-(isoW))/2
     iso_midH =(H-(isoH/2))/2
  }
 

  tri_ang2 = ang_arr[Math.round(fxrand()*(ang_arr-length-1))]


}

taust()
{

//webgl siirto ja taustavŠri
  //piirto.translate (-WIDTH/2,-HEIGHT/2,0);
  //piirto.smooth();
  



//taustaneliš + lerp
piirto.push();
let jyva_jako = (Math.round(fxrand()*300)+200)/f62
let jyva_tresh = ((fxrand()*0.3)+0.3)




piirto.translate (marginaali*M,marginaali*M,0);
if (f66 > 1)
{
vali_kork = WIDTH;
vali_leve = HEIGHT;
}

else
{
vali_kork = HEIGHT;
vali_leve = WIDTH;
}

for (let i = 0; i < f62; i++)
{
	{//piirto.translate (-Tsiivu_valiX/2,Tsiivu_valiY/2,0)
	piirto.push();
      		piirto.translate(((vali_leve-((marginaali*M)*2))/f62)*i,(fxrand()*Tsiivu_valiY)-(Tsiivu_valiY/2),0)
      		
  		for (let j = 0; j <= vali_kork -(2*(marginaali*M)); j++) {
      		let inter = map(j, 0, vali_kork -(2*(marginaali*M)), 0, 1);
      		//print('1*M ='+(i*M));
      		let c = lerpColor(color(clr_bg2), color(clr_bg1), inter);
      		//piirto.stroke(c);
      		//piirto.strokeWeight(2*M)
      		piirto.push()
      		piirto.noStroke();
      		piirto.fill(c)
      		//piirto.line(0, j, ((WIDTH-((marginaali*M)*2))/f62)-(((f62-1)*Tsiivu_valiX)/2) , j);
      		piirto.translate((((vali_leve-((marginaali*M)*2))/f62)-(((f62-1)*Tsiivu_valiX)/2))/2,0,0);
      		piirto.rect(0,j,((vali_leve-((marginaali*M)*2))/f62)-(((f62-1)*Tsiivu_valiX)/2),2)
      		piirto.pop()
      		
      		//print ('j = '+j)
      	if (j >= (vali_kork -(2*(marginaali*M)))-1 && f63 === 2)
      	{	//print ('jaba')
      	noiseScale = (fxrand()*100)+1;
      		   	for (let x = 0; x < jyva_jako; x++)
   	{
   		for (let y = 0; y < jyva_jako; y ++)
   			{
   			 
   			 let nois_bool = noise(x/noiseScale,y/noiseScale,200)
   			 //print ('noice '+nois_bool+(y/jyva_jako))
   			 
   			 if (nois_bool > jyva_tresh)
   			   {
   			   if((y/jyva_jako) > (fxrand()*2))
   			   {
   			   piirto.push();
   			   //piirto.scale ((nois_bool),(nois_bool),0)
   			   piirto.translate(x*((((WIDTH-((marginaali*M)*2))/f62)-(((f62-1)*Tsiivu_valiX)/2))/jyva_jako),y*((HEIGHT -(2*(marginaali*M)))/jyva_jako),0);
   				this.Bnoise1(nois_bool);
   		 	piirto.pop();
   		 }
   			 }
   			 }
   		}
   	}
      		
      		
      		
      		
      		}
      		
      		
      	
piirto.pop();


}
}
//print('f63 = '+f63)
   		 if (f63 === 1 || f63 === 2 || f63 === 5)
   		 {
   	for (let x = 0; x < jyva_jako; x++)
   	{
   		for (let y = 0; y < jyva_jako; y ++)
   			{
   			 noiseScale = 50;
   			 let nois_bool = noise(x/noiseScale,y/noiseScale,200)
   			 //print ('noice '+nois_bool+(y/jyva_jako))
   			 
   			 if (nois_bool > jyva_tresh)
   			   {
   			   if((y/jyva_jako) > (fxrand()*2))
   			   {
   			   piirto.push();
   			   //piirto.scale ((nois_bool),(nois_bool),0)
   			   piirto.translate(x*(vali_leve/jyva_jako),y*(vali_kork/jyva_jako),0);
				this.Bnoise1(nois_bool)
   		
   		 piirto.pop();
   			 }
   			 }
   			if (y === (jyva_jako-1))
   			{
   			
   			}
   		}
   	}		
   		 }
   		 
   		 if (f63 === 3)
   		 {
   		 piirto.push();
   		 piirto.translate(-(marginaali*M),-(marginaali*M),0)
   		 let vali_max = (fxrand()*3500)+1500
   		 let vali_kerr = (fxrand()*3)+1.5
   		       for (let i = 0; i < vali_max;i++)
    {
       			 

  let x=map(this.randn_bm(), -4,4,0,W)
  //x = x*(3*M)
  
  let y=map(this.randn_bm(), -4,4,0,H)
  //y = y*(16*M)
  let nois_bool = noise(x/noiseScale,y/noiseScale,200)*vali_kerr
  piirto.push()
  piirto.translate(x*M,y*M,0)
  this.Bnoise1(nois_bool)
  piirto.pop();
    }
   		 piirto.pop();
   		 }
   		 
   	

   		 
   		 
    		 if (f63 === 4)
   		 {
   		 
   		 let valiW = W
   		 let valiH = H
   		 piirto.push();
   		 piirto.translate(-(marginaali*M)/2,-(marginaali*M)/2,0)
   		 let vali_max = (fxrand()*13500)+13500
   		 let vali_kerr = (fxrand()*2)+1.5
   		       for (let i = 0; i < vali_max;i++)
    {
       			 

  let x=map(this.rnd_kulmat(), -4,4,0,1)
  x = x > 0.5 ? x - 0.5 : x + 0.5;
  x = x*valiW
  //print ('noise X ='+x)
  let y=map(this.rnd_kulmat(), -4,4,0,1)
  y = y > 0.5 ? y - 0.5 : y + 0.5;
  y = y*valiH
   //print ('noise Y ='+y)
  //y = y*(16*M)
  let nois_bool = noise((x)/noiseScale,(y)/noiseScale,200)*vali_kerr
  piirto.push()
  //print ('vali x = '+ x)
  piirto.translate(y*M,x*M,0)
  this.Bnoise1(nois_bool)
  piirto.pop();
    }
    
    
    
   		 piirto.pop();
   		 } 		 
   		 
   		 
   		 
//  if (f63 === 4)
//    		 {  		 
//    		  for (let x = 0; x < jyva_jako; x++)
//    	{
//    	let antigX = map(x, )
//    		for (let y = 0; y < jyva_jako; y ++)
//    			{
//    			 noiseScale = 50;
//    			 let nois_bool = noise(x/noiseScale,y/noiseScale,200)
//    			 //print ('noice '+nois_bool+(y/jyva_jako))
//    			  piirto.push()
//   			  piirto.translate(x*(HEIGHT/jyva_jako),y*(HEIGHT/jyva_jako),0)
//   			  //if ()
//   			  this.Bnoise1(nois_bool)
//              piirto.pop();
//    			 
//    			 
//    			 }
//    			 
//    			 }
//    		 }
   		 
   		 //piirto.noErase();
piirto.pop();
// karvageneraattori
}
karvv(){
             piirto.push();
             piirto.translate ((-marginaali/2)*M,0,0);
			 
			 
if (f65 === 0)
{			 
			 for (let i = 0; i < ((fxrand()*50000)+50000); i++)
			
{
				piirto.push();
				piirto.translate(fxrand()*WIDTH,fxrand()*HEIGHT,2);
 				piirto.rotate (-41)
				
				rnd_run = fxrand();
				piirto.scale (rnd_run/2, rnd_run/2)
				let c;
				c = color(clr_T_ar[Math.round(fxrand() * (clr_T_ar.length-1))]);
			    c.setAlpha((fxrand()*0.05)+0.05)
				piirto.stroke (c);
				piirto.strokeWeight(fxrand()*3*M);
				piirto.noFill();
				piirto.curve(16*M, 26*M, 33*M, 24*M, 73*M, 61*M, 45*M, 65*M)
				piirto.pop();
				}
				piirto.pop();
}

if (f65 === 1) {
			 for (let i = 0; i < ((fxrand()*50000)+50000); i++)
			
{ 
				
				piirto.push();
				piirto.translate(25*M,0,0);
				piirto.translate(fxrand()*WIDTH,fxrand()*HEIGHT,2);
 				piirto.rotate (-41)
				
				rnd_run = fxrand();
				piirto.scale (rnd_run/2, rnd_run/2)
				let c;
				c = color(clr_T_ar[Math.round(fxrand() * (clr_T_ar.length-1))]);
			    c.setAlpha((fxrand()*0.05)+0.05)
				piirto.stroke (c);
				piirto.strokeWeight(fxrand()*3*M);
				piirto.noFill();
				piirto.curve(fxrand()*(16*M), fxrand()*(26*M), fxrand()*(33*M), fxrand()*(24*M), fxrand()*(73*M), fxrand()*(61*M), fxrand()*(45*M), fxrand()*(65*M))
				piirto.pop();
				}
				piirto.pop();
}

if (f65 === 2) {
			 for (let i = 0; i < ((fxrand()*50000)+50000); i++)
			
{ 
				let valiX =fxrand()*W
				let valiY =fxrand()*H
				
				piirto.push();
				piirto.translate(25*M,0,0);
				piirto.translate(valiX*M,valiY*M,2);
 				
 				let vali_noic = noise(valiX/noiseScale,valiY/noiseScale,20)
				//print ('noic = '+vali_noic)
				piirto.rotate (vali_noic*90)
				rnd_run = fxrand();
				piirto.scale (rnd_run/2, rnd_run/2)
				let c;
				c = color(clr_T_ar[Math.round(fxrand() * (clr_T_ar.length-1))]);
			    c.setAlpha((fxrand()*0.05)+0.05)
				piirto.stroke (c);
				piirto.strokeWeight(fxrand()*3*M);
				piirto.noFill();
				piirto.curve(fxrand()*(16*M), fxrand()*(26*M), fxrand()*(33*M), fxrand()*(24*M), fxrand()*(73*M), fxrand()*(61*M), fxrand()*(45*M), fxrand()*(65*M))
				piirto.pop();
				}
				piirto.pop();
}


if (f65 === 3) {

			 for (let i = 0; i < ((fxrand()*50000)+50000); i++)
			
{ 
				let valiX =fxrand()*W
				let valiY =fxrand()*H
				piirto.push();
				piirto.translate(25*M,-15*M,0);
				piirto.translate(valiX*M,valiY*M,2);
 				//noiseScale = 400
 				let vali_noic = noise(valiX/noiseScale,valiY/noiseScale,20)
				//print ('noic = '+vali_noic)
				piirto.rotate (vali_noic*180)
				rnd_run = fxrand();
				piirto.scale (rnd_run/2, rnd_run/2)
				let c;
				c = color(clr_T_ar[Math.round(fxrand() * (clr_T_ar.length-1))]);
			    c.setAlpha((fxrand()*0.05)+0.05)
				piirto.stroke (c);
				piirto.strokeWeight(fxrand()*3*M);
				piirto.noFill();
				piirto.curve(16*M, 26*M, 33*M, 24*M, 73*M, 61*M, 45*M, 65*M)
				piirto.pop();
				}
				piirto.pop();
}
}



//				piirto.curve(fxrand()*(16*M), fxrand()*(26*M), fxrand()*(33*M), fxrand()*(24*M), fxrand()*(73*M), fxrand()*(61*M), fxrand()*(45*M), fxrand()*(65*M))

Bnoise1(nois_bool_in)
{
f64= 1;
//print('kokko = '+f64)
//nois_bool_in = nois_bool_in
if (f64 === 0)
{
 piirto.rotate(fxrand()*180)
   		 piirto.noStroke();
   		 piirto.fill (bgbgclr)
   		 piirto.ellipse (0,0,nois_bool_in*(8*M),nois_bool_in*(4*M))
   		 piirto.push()
   		 piirto.translate((fxrand()*(4*M))-(2*M),(fxrand()*(4*M))-(2*M),0)
   		 piirto.circle (0,0,nois_bool_in*(5*M))
   		 piirto.pop();
   		  piirto.push()
   		 piirto.translate((fxrand()*(4*M))-(2*M),(fxrand()*(4*M))-(2*M),0)
   		 piirto.circle (0,0,nois_bool_in*(5*M))
   		 piirto.pop();
   		 }
   	if (f64 === 1)
{	 
//nois_bool_in = nois_bool_in
 piirto.rotate(fxrand()*180)
   		 piirto.noStroke();
   		 piirto.fill (bgbgclr)
   		 piirto.rect (0,0,nois_bool_in*(30*M),nois_bool_in*(2*M))
   		 piirto.push()
   		  piirto.rotate(fxrand()*180)
   		 piirto.translate((fxrand()*(4*M))-(2*M),(fxrand()*(4*M))-(2*M),0)
   		 piirto.rect (0,0,nois_bool_in*(20*M),nois_bool_in*(2*M))
   		 piirto.pop();
   		  piirto.push()
   		   piirto.rotate(fxrand()*180)
   		 piirto.translate((fxrand()*(4*M))-(2*M),(fxrand()*(4*M))-(2*M),0)
   		 piirto.rect (0,0,nois_bool_in*(2*M),nois_bool_in*(20*M))
   		 piirto.pop();
}
	if (f64 === 2)
{	 
 piirto.rotate(fxrand()*180)
 piirto.scale(0.7,0.7)
   		 //piirto.noStroke();
   		 piirto.stroke (bgbgclr)
     piirto.strokeWeight((fxrand()*3)*M);
				piirto.noFill();
				piirto.curve(fxrand()*(16*M), fxrand()*(26*M), fxrand()*(33*M), fxrand()*(24*M), fxrand()*(73*M), fxrand()*(61*M), fxrand()*(45*M), fxrand()*(65*M))
				piirto.push()
   		  piirto.rotate(fxrand()*180)
   		 piirto.translate((fxrand()*(4*M))-(2*M),(fxrand()*(4*M))-(2*M),0)
piirto.strokeWeight((fxrand()*2)*M);
				
				piirto.curve(fxrand()*(16*M), fxrand()*(26*M), fxrand()*(33*M), fxrand()*(24*M), fxrand()*(73*M), fxrand()*(61*M), fxrand()*(45*M), fxrand()*(65*M))
				piirto.pop();
   		  piirto.push()
   		   piirto.rotate(fxrand()*180)
   		 piirto.translate((fxrand()*(4*M))-(2*M),(fxrand()*(4*M))-(2*M),0)
piirto.strokeWeight((fxrand()*2)*M);
				
				piirto.curve(fxrand()*(16*M), fxrand()*(26*M), fxrand()*(33*M), fxrand()*(24*M), fxrand()*(73*M), fxrand()*(61*M), fxrand()*(45*M), fxrand()*(65*M))
				piirto.pop();
}
   		 
}



pohja()
{
//piirto.circle(0,0,100*M)
//print ('f3 = '+f3)
//print ('f7 ='+f7)
let siiv1;
let siiv2;
//print ('f61 = '+f61)
//piirto.translate(-400*M,0,0)
if (f61 === 1)

{
siiv1 = (fxrand()*90)+10
siiv2 = siiv1+((fxrand()*10)-5)

}

else{
//let vall_rnd = Math.round(fxrand()*(clr_ar.length-1))
siiv1 = color(clr_ar[Math.round(fxrand()*4)]);
siiv2 = siiv1;
}
piirto.push();

//print('siiv1 tausta = '+siiv1)
//print('siiv2 tausta = '+siiv2)


if (f7 ==1)
  {
 
    piirto.rotate(90)
     piirto.translate(rota_off,-HEIGHT,0)

 }
 
  if (f71 ==1)
  {
    piirto.scale (-1,-1)
    piirto.translate(-WIDTH,-HEIGHT,0)
     
 }

if (f10 === 4)
{ 
//piirto.translate((iso_midW/2)*M,0,0)
}

for (let i = 0; i < f33; i++)
   { 

   
      for (let j = 0; j < f3; j++)
      {
      
           if (f8 === 2)
{



piirto.translate(pivotX,pivotY,0)
piirto.rotate(pivotAng)
piirto.translate(-pivotX,-pivotY,0)
}
      

piirto.push()

piirto.translate ((tausta_arr[i][j][2]*M)+(main_offX*M),(tausta_arr[i][j][3]*M)+(main_offY*M),0)

//print ('f9 = '+f9)

if (f9 === 1 && f10 === 1)
{
//======================================================================
//piirto.translate(hor_mov*M,0,0)  
piirto.translate(((WIDTH/(f3+1))-((tausta_arr[i][j][0]*M))),(HEIGHT/(f33+1))-(tausta_arr[i][j][0]*M),0)  

//======================================================================
}
else
{
//======================================================================
//print ('onkstŠŠ perk')
//piirto.translate(300,0,0)
piirto.translate(((WIDTH/(f3+1))-((tausta_arr[i][j][0]*M))),(HEIGHT/(f33+1))-(tausta_arr[i][j][0]*M),0)  
//======================================================================
}


//print ('f8 = '+f8)
//piirto.circle(0,0,100)
if (f8 === 1)
{

piirto.rotate(tausta_arr[i][j][4])
}

if (f8 === 3)
{
 let flo_rot = noise(tausta_arr[i][j][2]/noiseScale,tausta_arr[i][j][3]/noiseScale,0)
 let flo_rot2 = Math.round(map(flo_rot, 0,1,0,15))
 //print('florot = '+flo_rot2)
 let flo_rot3 = flo_rot2*22.5
 
 piirto.rotate(flo_rot3)
}

if (f4 > (fxrand()*4) || f3 === 1)
   {
   
   if (f61 === 1)
   {
   siiv1 = siiv1+((fxrand()*10)-5)
   siiv2 = siiv1+((fxrand()*10)-5) 
   }
   
   if (fxrand() > 0.7)
   {
   piirto.push();
piirto.translate(((tausta_arr[i][j][0])/2)*M,((tausta_arr[i][j][1])/2)*M,0)
this.circ(tausta_arr[i][j][0],siiv1,siiv2,0.6)
//print ('circ = '+tausta_arr[i][j][0])
piirto.pop();
   }
   
   else{
this.siivu(tausta_arr[i][j][2],siiv1,siiv2,0.6,tausta_arr[i][j][0],tausta_arr[i][j][1]);
}

if (fxrand() > 0.6)
{
piirto.push();
piirto.translate(((tausta_arr[i][j][0])/2)*M,0,0)

this.circ(tausta_arr[i][j][0],siiv1,siiv2,0.6)
piirto.pop();
}
}




piirto.pop();
}
}
piirto.pop(); 
//print ('1 = '+fxrand())
//print ('2 = '+fxrand())
//print ('3 = '+fxrand())
}


screen()
{
//piirto.circle(0,0,100*M)
piirto.push();
//print ('f7 = '+f7)
//print ('f71 = '+f71)
//piirto.translate (0,200,0)
// print('tarray'+tausta_arr[i][j][2])
//print('rota ='+rota_off)

if (f7 ==1)
  {
    piirto.rotate(90)
    
     piirto.translate(rota_off,-HEIGHT,0)
     piirto.translate(0,0,0)
     
 }
 
 if (f71 ==1)
  {
    piirto.scale (-1,-1)
    piirto.translate(-WIDTH,-HEIGHT,0)
     
 }
if (f10 === 4)
{ 
//piirto.translate((iso_midW/2)*M,0,0)
}

for (let i = 0; i < f33; i++)     
{
    //piirto.translate (0,(HEIGHT/(f33+(i+2))),0)

      for (let j = 0; j < f3; j++)
      {
      
                 if (f8 === 2)
{
piirto.translate(pivotX,pivotY,0)
piirto.rotate(pivotAng)
piirto.translate(-pivotX,-pivotY,0)
}
      
      let vali_j = j
      //print ('vali_j = '+ vali_j)
      if (colerp === 0)
      {
      //print('ei pitŠis tŠtŠ = '+clr_arr_valu)
      siiv1 = clr1;
	  siiv2 = clr1;
	  }
	  else{
	  siiv1 = color(screen_clr_ar[vali_j]);
	  siiv2 = color(screen_clr_ar[vali_j]);
	  
	 
	  }
	  //print ('onkomusta ='+siiv1+'  '+siiv2)
piirto.push()
piirto.translate ((tausta_arr[i][j][2]*M)+screen_offX,(tausta_arr[i][j][3]*M)+screen_offY,0)
//
//this.siivu(tausta_arr[i][j][2],siiv1,siiv2,60,tausta_arr[i][j][0],tausta_arr[i][j][1]);

piirto.push();
//piirto.translate (screen_offX,screen_offY,0)

if (f9 === 1 && f10 === 1)
{
//======================================================================
//piirto.translate(hor_mov*M,0,0) 
piirto.translate(((WIDTH/(f3+1))-((tausta_arr[i][j][0]*M))),(HEIGHT/(f33+1))-(tausta_arr[i][j][0]*M),0)  
 
//======================================================================
}
else
{
//======================================================================
piirto.translate(((WIDTH/(f3+1))-((tausta_arr[i][j][0]*M))),(HEIGHT/(f33+1))-(tausta_arr[i][j][0]*M),0)  
//======================================================================
}


if (f8 === 1)
{
//print('yep')
piirto.rotate(tausta_arr[i][j][4])
} 



if (f8 === 3)
{
 let flo_rot = noise(tausta_arr[i][j][2]/noiseScale,tausta_arr[i][j][3]/noiseScale,0)
  let flo_rot2 = Math.round(map(flo_rot, 0,1,0,15))
 //print('florot = '+flo_rot2)
 let flo_rot3 = flo_rot2*22.5
 
 piirto.rotate(flo_rot3)
}


if (f4 > fxrand()*(5) || f3 === 1)
   {
  
if (fxrand() > 0.5) 
{  //print('onksonks') 
if (fxrand() > 0.5)
{
piirto.scale(-1,-1)
piirto.translate(-tausta_arr[i][j][0]*M,-tausta_arr[i][j][1]*M,0)
}
this.siivu2(tausta_arr[i][j][2],siiv1,siiv2,0.5,tausta_arr[i][j][0],tausta_arr[i][j][1]);
}
else
{
   if (fxrand() > 0.7)
   {
   piirto.push();
piirto.translate(((tausta_arr[i][j][0])/2)*M,((tausta_arr[i][j][1])/2)*M,0)
this.circ(tausta_arr[i][j][0],siiv1,siiv2,0.6)
piirto.pop();
   }
   
   else{
this.siivu(tausta_arr[i][j][2],siiv1,siiv2,0.5,tausta_arr[i][j][0],tausta_arr[i][j][1]);
}
}


if (fxrand() < 0.5) 
{  

if (fxrand() > 0.5)
{
//print('siivutus')
piirto.scale(-1,-1)
piirto.translate(-tausta_arr[i][j][0]*M,-tausta_arr[i][j][1]*M,0)

this.siivutus(tausta_arr[i][j][2],siiv1,siiv2,0.5,tausta_arr[i][j][0],tausta_arr[i][j][1]);
}
else
{
   if (fxrand() > 0.7)
   {
   piirto.push();
piirto.translate(((tausta_arr[i][j][0])/2)*M,((tausta_arr[i][j][1])/2)*M,0)
this.circ(tausta_arr[i][j][0],siiv1,siiv2,0.6)
piirto.pop();
   }
   
   else{
this.siivu(tausta_arr[i][j][2],siiv1,siiv2,0.6,tausta_arr[i][j][0],tausta_arr[i][j][1]);
}

if (fxrand() > 0.7)
{
if (fxrand() > 0.9){
piirto.push();
piirto.translate(((tausta_arr[i][j][0])/2)*M,0,0)
this.circ(tausta_arr[i][j][0],siiv1,siiv2,0.6)
piirto.pop();}

else
{
//print('pitsipštsi')
piirto.push();
piirto.translate((fxrand()*tausta_arr[i][j][0])*M,((tausta_arr[i][j][1])/2)*M,0)
let vali_vari = color(clr_ar[Math.round((fxrand()*4))]); 
this.circ(tausta_arr[i][j][0],vali_vari,vali_vari,0.6)
piirto.pop();
}
}
}

if (fxrand() > 0.2)
{
 //print ('jep3')
 piirto.push();
 this.siivu3(tausta_arr[i][j][2],siiv1,siiv2,0.5,tausta_arr[i][j][0],tausta_arr[i][j][1]);
 piirto.pop();
}

}

if (fxrand() > 0.3)
{
//piirto.circle(0,0,100)
piirto.push();
//this.roisk(tausta_arr[i][j][0],tausta_arr[i][j][1]);
if (fxrand() > 0.5)
{
  this.neli(tausta_arr[i][j][0],tausta_arr[i][j][1],100*M,siiv1,siiv1,0.6);

}
else
{
  this.neli(tausta_arr[i][j][0]/2,tausta_arr[i][j][1]/2,100*M,siiv1,siiv1,0.6);

} 
piirto.pop();
}

let rnd_kulmat = Math.round(fxrand()*4)
piirto.push();


if (rnd_kulmat === 0)
{

}

if (rnd_kulmat === 1)
{
piirto.translate(tausta_arr[i][j][0]*M,0,0)

}

if (rnd_kulmat === 2)
{
piirto.translate(0,tausta_arr[i][j][1]*M,0)

}

if (rnd_kulmat === 3)
{
piirto.translate(tausta_arr[i][j][0]*M,tausta_arr[i][j][1]*M,0)

}

if (rnd_kulmat === 4)
{
piirto.translate((tausta_arr[i][j][0]/2)*M,(tausta_arr[i][j][1]/2)*M,0)

}



//piirto.circle(0,0,10)
//T€€ TAKAS
f12g = 2
let rnd_jako = 0;
if (f12g === 0)
{
 rnd_jako = fxrand()+1
}
if (f12g > 0)
{
 rnd_jako = f12g
}
this.ympyr(tausta_arr[i][j][0]/rnd_jako,tausta_arr[i][j][1]/rnd_jako,tausta_arr[i][j][0]/rnd_jako,siiv1,siiv1,0.6);
piirto.push()
piirto.translate(-100*M,-((f16a*M)*(i+1))/2,0)
if (f16b === 1)
{
 piirto.rotate(ang_arr[Math.round(fxrand()*(ang_arr.length-1))])
}
for (let i = 0; i < f16;i++)
{
piirto.translate(0,(f16a*M),0)

//T€€ TAKAS
this.viivain(100,100,100,1)
}
piirto.pop()

piirto.pop();


// piirto.push();
// piirto.fill('red')
// piirto.circle(0,0,10)
// piirto.pop();
// 
// piirto.push();
// piirto.fill('blue')
// piirto.circle(0,0,10)
// piirto.pop();
// 
// piirto.push();
// piirto.fill('purple')
// piirto.circle(0,0,10)
// piirto.pop();
// 
// piirto.push();
// piirto.fill('black')
// piirto.circle(0,0,10)
// piirto.pop();

}
f12d = 0
if (f12d === 0)
{
piirto.push();
piirto.translate((tausta_arr[i][j][0]/2)*M,(tausta_arr[i][j][1]/2)*M,0)
//piirto.fill('black')
//piirto.circle(0,0,10)
//this.siivu(tausta_arr[i][j][2],siiv1,siiv2,0.5,tausta_arr[i][j][0],tausta_arr[i][j][1]);
 this.siivu3(tausta_arr[i][j][2],siiv1,siiv2,0.5,tausta_arr[i][j][0],tausta_arr[i][j][1]);


piirto.pop();
}

this.roisk(tausta_arr[i][j][0],tausta_arr[i][j][1]);


piirto.pop();
piirto.pop();



}



}
piirto.pop(); 
}


isom()
{
//print('isomid W = '+iso_midW)
//print('isomid H = '+iso_midH)
//piirto.push();
 let siiv1;
let siiv2;
piirto.push();
if (f141 === 1)
{
//piirto.scale(-1.0)
//piirto.translate(WIDTH,0,0)
}
if (f61 === 1)

{
siiv1 = (fxrand()*150)+30
siiv2 = siiv1+((fxrand()*10)-5)

}

else{
siiv1 = color(clr_ar[Math.round(fxrand()*(4))]);
siiv2 = siiv1;
}

piirto.translate((iso_midW)*M,(iso_midH)*M,0)
//piirto.translate(700,0,0)
for (let i = 0; i < f33; i++)
   { 
    piirto.push();
	if (f14 === 1)
	{
	//print ('mitamita')
if (fxrand() > 0.5 && i > 0)
{
  //print('wahtwaht')
     piirto.translate ((tausta_arr[0][0][0]*i)*M,((tausta_arr[0][0][1]/2)*i)*-M,0)
//piirto.translate(88*M,88*M,0)
   
   }
   else {
     piirto.translate ((tausta_arr[0][0][0]*i)*M,((tausta_arr[0][0][1]/2)*i)*M,0)
//piirto.translate((88*i)*M,(88*i)*M,0)
   }
   }
   
   
   	if (f14 === 2)
	{
	
	//piirto.translate (WIDTH/4,HEIGHT/4,0)
	//piirto.translate (((tausta_arr[0][0][2]+8)*i)*M,0,0)
// if (fxrand > 0.5 && i > 0)
// {
// 
// 	 piirto.translate (tausta_arr[0][0][2]*(-i),0,0)
// 
//    
//    }
//    else {
//      piirto.translate (tausta_arr[0][0][2]*(i+2),0,0)
// 
//    }
   }
   
   
      for (let j = 0; j < f3; j++)
      {

let sizz = tausta_arr[i][j][0];
let m = sizz*(tan(27))
let n = sqrt(sq(sizz)-sq(m))
//piirto.translate (tausta_arr[i][j][2]+main_offX,tausta_arr[i][j][3]+main_offY,0)
if (f14 === 1)
	{
//piirto.translate (0,(tausta_arr[i][j][3]*M)+main_offY,0)
}
if (f14 === 2)
	{
//piirto.translate (0,tausta_arr[0][0][3]+main_offY,0)
piirto.translate (0,0,0)
}
piirto.push()
piirto.rotate(60*j)
let c2;
if (f142 === 0){
c2 = color(hue(color(siiv1)),saturation(color(siiv1)),brightness(color(siiv1)))
}

if (f142 === 1){
c2 = color(hue(color(siiv1)),saturation(color(siiv1)),brightness(color(siiv1))-(j))
}

if (f142 === 2){
if (j === 0)
{
c2 = siiv1;
}
c2 = color(hue(color(siiv1)),saturation(color(siiv1)),brightness(color(siiv1))-(j*2))
}

if (f142 === 3){
if (j === 0)
{
//siiv1 =color(clr_ar[4])
c2 = color(clr_ar[Math.round(fxrand()*4)]);
//print ('iso testi vari ='+c2)
}
c2 = color(hue(color(siiv1)),saturation(color(siiv1)),brightness(color(siiv1))-(j*2))
}


//siiv1 = color(c2);
//siiv2 = siiv1
 piirto.push();
 piirto.rotate (ang_arr[Math.round(fxrand()*(ang_arr.length-1))])
 this.siivu3(tausta_arr[i][j][2],c2,c2,0.5,tausta_arr[i][j][0],tausta_arr[i][j][1]);
 piirto.pop();
this.siivu4(tausta_arr[i][j][2],c2,c2,0.5,n,tausta_arr[i][j][1],m);


//print ('jep3')
 


if (fxrand() > 0.8)
{
//piirto.circle(0,0,100)
piirto.push();
//this.ympyr(tausta_arr[i][j][2],tausta_arr[i][j][3],tausta_arr[i][j][2]/2,'red','red',1.0);
piirto.pop();
}
piirto.pop();

}


piirto.pop();
}
piirto.pop();
}






siivutus(dist_in,clr1_in,clr2_in,alpha_in,col_width_in,col_height_in)
{
 let siivu_amt = (fxrand()*6)+1
 let siivu_h = col_height_in/siivu_amt
 
 for (let i = 0; i < siivu_amt; i++)
 {
 piirto.push()
     piirto.translate(0,(siivu_h*i)*M,0)
     if (fxrand() > 0.6)
     {
     siiv1 = color(fxrand()*250)
     siiv2 = siiv1;
     }
     else{
     siiv1 = color(clr_ar[Math.round(fxrand()*(clr_ar.length-1))])
     siiv2 = siiv1;
     }
     if (fxrand() > 0.9)
     {
         this.siivu2(dist_in,siiv1,siiv2,0.5,col_width_in,siivu_h);
     }
     else {
     
     piirto.translate((fxrand()*(20*M))-(10*M),0,0)
 	 this.siivu(dist_in,siiv1,siiv2,0.5,col_width_in,siivu_h);
 	 
 	 }
 	 piirto.pop();

 }

}

siivu(dist_in,clr1_in,clr2_in,alpha_in,col_width_in,col_height_in)
{
let c3 = color(clr1_in);
let c4 = color(clr2_in);
//print ('colerp = '+colerp)
if (f15 === 1 && colerp === 0 && t_draw === 0)
{
noiseScale = 4;
let mstr_shd = noise((dist_in*col_width_in)/noiseScale,(dist_in*col_height)/noiseScale)
   mstr_shd = (-mstr_shd)*15

      		c3 = color(hue(c3),saturation(c3)+mstr_shd,brightness(c3)+mstr_shd)
      		c4 = color(hue(c4),saturation(c4)+mstr_shd,brightness(c4)+mstr_shd)
//clr2_in = clr1_in


}


let smud = Math.round(fxrand())
	piirto.push();
 	//piirto.translate ((WIDTH/2)-(col_width/M)/2,HEIGHT/2-((col_height/M)/2),3)
 	
  		for (let i = 0; i <= (col_height_in); i++) 
  		{
  		let noiseScale = 4;
  		let nd_vas = noise(0/noiseScale,((i)+(dist_in))/noiseScale)*2
  		let nd_oik = noise(((i)+(dist_in))/noiseScale,0/noiseScale)*2
      		let inter = map((i), 0, (col_height_in*M), 0, 1);
      		let c = lerpColor(color(c3), color(c3), inter);
      		if (smud === 1)
      		{
      		let c2 = color(hue(c),saturation(c),brightness(c)-(i/15))

      		c =c2;
      		}
      		c.setAlpha((fxrand()*0.3)+alpha_in)
      		clr_loik = c;
      		piirto.strokeWeight(((fxrand()+1)*1)*M);
      		piirto.stroke(c);
      		piirto.push()
      		piirto.rotate((fxrand()*0.4)-0.2)
      		piirto.line(((nd_vas-2)*M), (i*M)+((nd_vas/2)*M), (col_width_in*M)+((nd_oik+2)*M) , (i*M)+((nd_oik/2)*M));
      		piirto.pop()
      		//piirto.line((nd_vas)-(2*M), (fxrand()*(col_height_in/M)), (col_width_in/M)+(nd_oik)+(2*M) , (fxrand()*(col_height_in/M)));
      		//print('i count 2 ='+i)
   		 }
   		piirto.pop(); 
   		 
    
    
    piirto.push();
 	//piirto.translate (((WIDTH/2)-(col_width/M)/2)+(2*M),HEIGHT/2-((col_height/M)/2),3)
  		for (let i = 0; i <= (col_width_in)+(2); i++) 
  		{
  		let noiseScale = 4;
  		let nd_vas = noise(0/noiseScale,((i)+dist_in)/noiseScale)*2
  		let nd_oik = noise(((i)+dist_in)/noiseScale,0/noiseScale)*2
      		let inter = map(i, 0, (col_width_in*M), 0, 1);
      		let c = lerpColor(color(c3), color(c3), inter);
      		piirto.strokeWeight((((fxrand()*2)+1)*1)*M);
      		c.setAlpha((fxrand()*0.3)+alpha_in)
      		  clr_loik = c;
      		piirto.stroke(c);
      		piirto.push()
      		piirto.rotate((fxrand()*0.2)-0.1)
      		piirto.line((i*M)+((nd_vas/2)*M), (nd_vas-2)*M, (i*M)+((nd_oik/2)*M) , (col_height_in*M)+(nd_oik*M));
      		piirto.pop()
      		//piirto.line((fxrand()*(col_height_in/M)), (nd_vas)-(2*M), (fxrand()*(col_height_in/M)) , (col_height_in/M)+(nd_oik));
		//print('i count 2 ='+i)
   		 }
    piirto.pop();
    
}

siivumask(dist_in,clr1_in,clr2_in,alpha_in,col_width_in,col_height_in)
{
let c3 = color(clr1_in);
let c4 = color(clr2_in);
//print ('colerp = '+colerp)
if (f15 === 1 && colerp === 0 && t_draw === 0)
{
noiseScale = 4;
let mstr_shd = noise((dist_in*col_width_in)/noiseScale,(dist_in*col_height)/noiseScale)
   mstr_shd = (-mstr_shd)*15

      		c3 = color(hue(c3),saturation(c3)+mstr_shd,brightness(c3)+mstr_shd)
      		c4 = color(hue(c4),saturation(c4)+mstr_shd,brightness(c4)+mstr_shd)
//clr2_in = clr1_in


}

//print('reunamaski W = '+ col_width_in)
//print('reunamaski H = '+ col_height_in)

let smud = Math.round(fxrand())
	reunat.push();
 	//piirto.translate ((WIDTH/2)-(col_width/M)/2,HEIGHT/2-((col_height/M)/2),3)
 	
  		for (let i = 0; i <= (col_height_in); i++) 
  		{
  		let noiseScale = 4;
  		let nd_vas = noise(0/noiseScale,((i)+(dist_in))/noiseScale)*2
  		let nd_oik = noise(((i)+(dist_in))/noiseScale,0/noiseScale)*2
      		let inter = map((i), 0, (col_height_in*M), 0, 1);
      		let c = lerpColor(color(c3), color(c3), inter);
      		if (smud === 1)
      		{
      		let c2 = color(hue(c),saturation(c),brightness(c)-(i/15))

      		c =c2;
      		}
      		c.setAlpha((fxrand()*0.3)+alpha_in)
      		clr_loik = c;
      		reunat.strokeWeight(((fxrand()+1)*1)*M);
      		reunat.stroke(c);
      		reunat.push()
      		reunat.line(((nd_vas-2)*M), (i*M)+((nd_vas/2)*M), (col_width_in*M)+((nd_oik+2)*M) , (i*M)+((nd_oik/2)*M));
      		reunat.pop()
      		//piirto.line((nd_vas)-(2*M), (fxrand()*(col_height_in/M)), (col_width_in/M)+(nd_oik)+(2*M) , (fxrand()*(col_height_in/M)));
      		//print('i count 2 ='+i)
   		 }
   		reunat.pop(); 
   		 
    
    
    reunat.push();
 	//piirto.translate (((WIDTH/2)-(col_width/M)/2)+(2*M),HEIGHT/2-((col_height/M)/2),3)
  		for (let i = 0; i <= (col_width_in)+(2); i++) 
  		{
  		let noiseScale = 4;
  		let nd_vas = noise(0/noiseScale,((i)+dist_in)/noiseScale)*2
  		let nd_oik = noise(((i)+dist_in)/noiseScale,0/noiseScale)*2
      		let inter = map(i, 0, (col_width_in*M), 0, 1);
      		let c = lerpColor(color(c3), color(c3), inter);
      		reunat.strokeWeight((((fxrand()*2)+1)*1)*M);
      		c.setAlpha((fxrand()*0.3)+alpha_in)
      		  clr_loik = c;
      		reunat.stroke(c);
      		reunat.push()
      		//mask.rotate((fxrand()*0.2)-0.1)
      		reunat.line((i*M)+((nd_vas/2)*M), (nd_vas-2)*M, (i*M)+((nd_oik/2)*M) , (col_height_in*M)+(nd_oik*M));
      		reunat.pop()
      		//piirto.line((fxrand()*(col_height_in/M)), (nd_vas)-(2*M), (fxrand()*(col_height_in/M)) , (col_height_in/M)+(nd_oik));
		//print('i count 2 ='+i)
   		 }
    reunat.pop();
    
}

siivu2(dist_in,clr1_in,clr2_in,alpha_in,col_width_in,col_height_in)
{
piirto.push();
let vari_bri = (fxrand()*20)-10
let vari_sat = (fxrand()*20)-10

//piirto.translate((fxrand()*(50*M))-(25*M),(fxrand()*(50*M))-(25*M),0)
	piirto.push();
 	//piirto.translate ((WIDTH/2)-(col_width/M)/2,HEIGHT/2-((col_height/M)/2),3)
 	
  		for (let i = 0; i <= (col_height_in); i++) 
  		{
  		let noiseScale = 4;
  		let nd_vas = noise(0/noiseScale,(i+dist_in)/noiseScale)*2
  		let nd_oik = noise((i+dist_in)/noiseScale,0/noiseScale)*2
      		let inter = map(i, 0, (col_height_in), 0, 1);
      		let c = lerpColor(color(clr1_in), color(clr2_in), inter);
      		c.setAlpha((fxrand()*0.3)+alpha_in)
      		      		clr_loik = c;

      		piirto.strokeWeight(((fxrand()*2)+1)*M);
      		piirto.stroke(c);
      		let lerps = lerp((col_width_in),0,inter)
      		piirto.line((nd_vas-2)*M, i*M, (lerps+nd_oik+2)*M , i*M);
   		 }
   		piirto.pop(); 
   		 
    
    
    piirto.push();
 	//piirto.translate (((WIDTH/2)-(col_width/M)/2)+(2*M),HEIGHT/2-((col_height/M)/2),3)
  		for (let i = 0; i <= (col_width_in)+(2); i++) 
  		{
  		let noiseScale = 4;
  		let nd_vas = noise(0/noiseScale,(i+dist_in)/noiseScale)*2
  		let nd_oik = noise((i+dist_in)/noiseScale,0/noiseScale)*2
      		let inter = map(i, 0, (col_width_in), 0, 1);
      		let c = lerpColor(color(clr1_in), color(clr2_in), inter);
      		piirto.strokeWeight((fxrand()+1)*M);
      		c.setAlpha((fxrand()*0.3)+alpha_in)
      		piirto.stroke(c);
      		let lerps = lerp((col_height_in),0,inter)
      		piirto.line(i*M, (nd_vas-2)*M, i*M , (lerps+nd_oik)*M);
   		 }
    piirto.pop();
    
   piirto.pop(); 
    
    
  piirto.push();
//   piirto.push();
// piirto.translate((fxrand()*(50*M))-(25*M),(fxrand()*(50*M))-(25*M),0)  
//   piirto.pop();
piirto.translate(mastOfstX,mastOfstY,0)
if (fxrand()>1)
{ 
  if (f13 === 1)
  {
  piirto.rotate(tri_ang2)
  }

else {
  piirto.rotate(ang_arr[Math.floor(fxrand()*ang_arr.length)])
  }
}
    piirto.push();
   		for (let i = 0; i <= (col_height_in)+(2); i++) 
  		{
  		let noiseScale = 4;
  		noiseDetail(4,0.5);
  		let nd_vas = noise(0/noiseScale,(i+dist_in)/noiseScale)*2
  		let nd_oik = noise((i+dist_in)/noiseScale,0/noiseScale)*2
      		let inter = map(i, 0, (col_height_in), 0, 1);
      		let c = lerpColor(color(clr1_in), color(clr2_in), inter);
      		let c2 = color(hue(c),saturation(c)+vari_sat,brightness(c)+vari_bri)
	 		c = color(c2)
      		c.setAlpha((fxrand()*0.3)+alpha_in)
      		piirto.strokeWeight(((fxrand()*2)+1)*M);
      		piirto.stroke(c);
      		let lerps = lerp(0,col_width_in,inter)
      		piirto.line(((col_width_in)+(nd_vas)-(2)-lerps)*M, i*M, ((col_width_in)+(nd_oik)+(2))*M, i*M);
   		 }
   		piirto.pop();   
   		
   		
   		 piirto.push();
   		for (let i = 0; i <= (col_width_in)+(2); i++) 
  		{
  		let noiseScale = 4;
  		let nd_vas = noise(0/noiseScale,(i+dist_in)/noiseScale)*2
  		let nd_oik = noise((i+dist_in)/noiseScale,0/noiseScale)*2
      		let inter = map(i, 0, (col_width_in), 0, 1);
      		let c = lerpColor(color(clr1_in), color(clr2_in), inter);
      		let c2 = color(hue(c),saturation(c)+vari_sat,brightness(c)+vari_bri)
       		c = color(c2)
      		c.setAlpha((fxrand()*0.3)+alpha_in)
      		piirto.strokeWeight((fxrand()+1)*M);
      		piirto.stroke(c);
      		let lerps = lerp(0,col_height_in,inter)
      		piirto.line(i*M,(col_height_in+nd_vas-2-lerps)*M,i*M, ((col_height_in)+nd_oik+2)*M);
   		 }
   		piirto.pop();   
    piirto.pop();

}


siivu3(dist_in,clr1_in,clr2_in,alpha_in,col_width_in,col_height_in)
{
  //f12 = 0
  if ((fxrand()*2) > f12)
{
  
    piirto.translate(fxrand()*(-400*M),0,0)
	piirto.push();
 	//piirto.translate ((WIDTH/2)-(col_width/M)/2,HEIGHT/2-((col_height/M)/2),3)
 	let piirto_pituus = Math.round(fxrand()*500)+20
 	//let piirto_pituus = 20
 	//let ns_rnd = (fxrand()*400);
 	let ns_rnd = (fxrand()*400)+4	
 	//print ('ns rndm  = '+ns_rnd)
 	//let ns_rnd = 4
 	for (let l = 0; l < f12c; l++)
 	{
 	piirto.push()
 	piirto.translate((f12a*l)*M,0,0)
  		for (let i = 0; i <= piirto_pituus; i++) 
  		{
  		let noiseScale = 8;
  		let nd_vas = noise(0/noiseScale,(i+dist_in)/noiseScale)*2
  		let nd_oik = noise((i+dist_in)/noiseScale,0/noiseScale)*2
  		noiseScale = ns_rnd
  		let nd_rot = noise((i+dist_in)/noiseScale,(dist_in*2)/noiseScale)*2
      		let inter = map(i, 0, (col_height_in), 0, 1);
      		let c = lerpColor(color(clr1_in), color(clr2_in), inter);
      		
      		//c.setSaturation(nd_rot*50)
      		let vali_luku = map(nd_rot,0,2,0,60)
      	//print ('nd rot = '+nd_rot)
      		let c2 = color(hue(c),vali_luku,brightness(c)+((vali_luku)-30))
      		c = color(c2);
      		c.setAlpha((fxrand()*0.3)+alpha_in)
      		piirto.strokeWeight((((fxrand())+1)*nd_rot)*M);
      		piirto.stroke(c);
      		let vali_paska = (nd_rot-1)/2
      		piirto.rotate(vali_paska)
      		//print('valipaska ='+vali_paska)
      		piirto.push();
      		piirto.rotate((nd_rot-1)/2)
      		//print ('rotate'+ (nd_rot-1)/2)
      		piirto.line(((nd_vas-2)*M), (i+(fxrand()-0.5))*M, (2+nd_oik+(3*nd_rot))*M , (i+(fxrand()-0.5))*M);
      		piirto.pop();
      		//piirto.line((nd_vas)-(2*M), (fxrand()*(col_height_in/M)), (col_width_in/M)+(nd_oik)+(2*M) , (fxrand()*(col_height_in/M)));
   		 }
   		piirto.pop(); 
   		 
    
    
    piirto.push();
 	//piirto.translate (((WIDTH/2)-(col_width/M)/2)+(2*M),HEIGHT/2-((col_height/M)/2),3)
//   		for (let i = 0; i <= (col_width_in/M)+(2*M); i++) 
//   		{
//   		let noiseScale = 4;
//   		let nd_vas = noise(0/noiseScale,(i+dist_in)/noiseScale)*2
//   		let nd_oik = noise((i+dist_in)/noiseScale,0/noiseScale)*2
//       		let inter = map(i, 0, (col_width_in/M), 0, 1);
//       		let c = lerpColor(color(clr1_in), color(clr2_in), inter);
//       		piirto.strokeWeight((fxrand()*(2))+1)*M;
//       		c.setAlpha((fxrand()*0.3)+alpha_in)
//       		piirto.stroke(c);
//       		piirto.line(i+(fxrand()-0.5), (nd_vas)-(2*M), i+(fxrand()-0.5) , (col_height_in/M)+(nd_oik));
//       		//piirto.line((fxrand()*(col_height_in/M)), (nd_vas)-(2*M), (fxrand()*(col_height_in/M)) , (col_height_in/M)+(nd_oik));
// 
//    		 }
    piirto.pop();
    }
    piirto.pop()
 }   
}


siivu4(dist_in,clr1_in,clr2_in,alpha_in,col_width_in,col_height_in,tilt_in)
{
	piirto.push();
 	//piirto.translate ((WIDTH/2)-(col_width/M)/2,HEIGHT/2-((col_height/M)/2),3)
 	
  		for (let i = 0; i <= (col_height_in); i++) 
  		{
  		let noiseScale = 4;
  		let nd_vas = noise(0/noiseScale,(i+dist_in)/noiseScale)*2
  		let nd_oik = noise((i+dist_in)/noiseScale,0/noiseScale)*2
      		let inter = map(i, 0, (col_height_in), 0, 1);
      		let c = lerpColor(color(clr1_in), color(clr2_in), inter);
      		
      		c.setAlpha((fxrand()*0.3)+alpha_in)
      		clr_loik = c;
      		piirto.strokeWeight(((fxrand())+1)*M);
      		piirto.stroke(c);
      		piirto.line((nd_vas-2)*M, (i+(fxrand()-0.5))*M, (col_width_in+nd_oik+2)*M , ((i+(fxrand()-0.5))+tilt_in)*M);
      		//piirto.line((nd_vas)-(2*M), (fxrand()*(col_height_in/M)), (col_width_in/M)+(nd_oik)+(2*M) , (fxrand()*(col_height_in/M)));
   		 }
   		piirto.pop(); 
   		 
    
    
    piirto.push();
 	//piirto.translate (((WIDTH/2)-(col_width/M)/2)+(2*M),HEIGHT/2-((col_height/M)/2),3)
  		for (let i = 0; i <= (col_width_in)+(2); i++) 
  		{
  		let noiseScale = 4;
  		let nd_vas = noise(0/noiseScale,(i+dist_in)/noiseScale)*2
  		let nd_oik = noise((i+dist_in)/noiseScale,0/noiseScale)*2
      		let inter = map(i, 0, (col_width_in), 0, 1);
      		let c = lerpColor(color(clr1_in), color(clr2_in), inter);
      		piirto.strokeWeight(((fxrand()*(2))+1)*M);
      		c.setAlpha((fxrand()*0.3)+alpha_in)
      		  clr_loik = c;
      		piirto.stroke(c);
      		let lerps = lerp(0,tilt_in,inter)
      		piirto.line((i+(fxrand()-0.5))*M, (((nd_vas)-(2*M))+lerps)*M, (i+(fxrand()-0.5))*M , (((col_height_in)+(nd_oik))+lerps)*M);
      		//piirto.line((fxrand()*(col_height_in/M)), (nd_vas)-(2*M), (fxrand()*(col_height_in/M)) , (col_height_in/M)+(nd_oik));

   		 }
    piirto.pop();
    
}

circ(radius_in,clr1_in,clr2_in,alpha_in)
{
 var radius = (radius_in/2)*M;
  var centx = 0;
  var centy = 0;

  //stroke(20, 50, 70);
  var x, y;
  //translate(200,200,0)
  let vari_ang = (fxrand())+2;
  piirto.push();
  piirto.rotate (fxrand()*180)
  for (var ang = 0; ang <= 180; ang += vari_ang) {
  piirto.push();
    var rad = degrees(ang);
    //console.log('bsetup -> rad', rad);
    x = centx + (radius * cos(rad));
    y = centy + (radius * sin(rad));
    let noiseScale = 4;
  		let nd_vas = noise(0/noiseScale,(ang)/noiseScale)*2
  		let nd_oik = noise((ang)/noiseScale,0/noiseScale)*2
      		let inter = map(ang, 0, (radius), 0, 1);
      		let c = lerpColor(color(clr1_in), color(clr2_in), inter);
      		
      		c.setAlpha((fxrand()*0.3)+alpha_in)
      		clr_loik = c;
      		
      		piirto.strokeWeight(((fxrand()*3)+2)*M);
      		piirto.rotate((fxrand()*6)-3)
      		piirto.stroke(c);
      		
    //line(x-5,y,x+5, y);
    piirto.line(x,y+nd_vas,x, -y-nd_oik);
    //vari_ang += 1;
    piirto.pop()
  }
  piirto.push()
  piirto.rotate(90)
   for (var ang = 0; ang <= 180; ang += vari_ang) {
  piirto.push();
    var rad = degrees(ang);
    //console.log('bsetup -> rad', rad);
    x = centx + (radius * cos(rad));
    y = centy + (radius * sin(rad));
    let noiseScale = 4;
  		let nd_vas = noise(0/noiseScale,(ang)/noiseScale)*2
  		let nd_oik = noise((ang)/noiseScale,0/noiseScale)*2
      		let inter = map(ang, 0, (radius/M), 0, 1);
      		let c = lerpColor(color(clr1_in), color(clr2_in), inter);
      		
      		c.setAlpha((fxrand()*0.3)+alpha_in)
      		clr_loik = c;
      		
      		piirto.strokeWeight(((fxrand()*3)+2)*M);
      		piirto.rotate((fxrand()*6)-3)
      		piirto.stroke(c);
      		
    //line(x-5,y,x+5, y);
    piirto.line(x,y,x, -y);
    //vari_ang += 1;
    piirto.pop()
  }
  piirto.pop()
  
   piirto.push()
  piirto.rotate(45)
   for (var ang = 0; ang <= 180; ang += vari_ang) {
  piirto.push();
    var rad = degrees(ang);
    //console.log('bsetup -> rad', rad);
    x = centx + (radius * cos(rad));
    y = centy + (radius * sin(rad));
    let noiseScale = 4;
  		let nd_vas = noise(0/noiseScale,(ang)/noiseScale)*2
  		let nd_oik = noise((ang)/noiseScale,0/noiseScale)*2
      		let inter = map(ang, 0, (radius/M), 0, 1);
      		let c = lerpColor(color(clr1_in), color(clr2_in), inter);
      		
      		c.setAlpha((fxrand()*0.3)+alpha_in)
      		clr_loik = c;
      		
      		piirto.strokeWeight(((fxrand()*3)+2)*M);
      		piirto.rotate((fxrand()*6)-3)
      		piirto.stroke(c);
      		
    //line(x-5,y,x+5, y);
    piirto.line(x,y,x, -y);
    //vari_ang += 1;
    piirto.pop()
  }
  piirto.pop()
  
     piirto.push()
  piirto.rotate(-45)
   for (var ang = 0; ang <= 180; ang += vari_ang) {
  piirto.push();
    var rad = degrees(ang);
    //console.log('bsetup -> rad', rad);
    x = centx + (radius * cos(rad));
    y = centy + (radius * sin(rad));
    let noiseScale = 4;
  		let nd_vas = noise(0/noiseScale,(ang)/noiseScale)*2
  		let nd_oik = noise((ang)/noiseScale,0/noiseScale)*2
      		let inter = map(ang, 0, (radius/M), 0, 1);
      		let c = lerpColor(color(clr1_in), color(clr2_in), inter);
      		
      		c.setAlpha((fxrand()*0.3)+alpha_in)
      		clr_loik = c;
      		
      		piirto.strokeWeight(((fxrand()*3)+2)*M);
      		piirto.rotate((fxrand()*6)-3)
      		piirto.stroke(c);
      		
    //line(x-5,y,x+5, y);
    piirto.line(x,y,x, -y);
    //vari_ang += 1;
    piirto.pop()
  }
  piirto.pop()
  
  piirto.pop();
}


roisk(colW_in,colH_in)
{
var loc = createVector(0, 0, 2);
    var angle = 0; //any value to initialize
    var dir = createVector(cos(angle), sin(angle));
    var speed = (fxrand()*1.5)+0.5; 

 if (fxrand() > 0.3)
 {
    
 
 
 
  let ln_lngth = (fxrand()*250)+(20)
 for (let i = 0; i < ln_lngth; i++ )
 {
  
  piirto.push()
 noiseScale=10;
 noiseDetail(0.1, 4);
    let angle=noise(loc.x/noiseScale, loc.y/noiseScale, frameCount/noiseScale)*TWO_PI*noiseStrength; //0-2PI
    angle += 1;
    dir.x = cos(angle*100);
    dir.y = sin(angle*100);
    
    var vel = dir.copy();
    var d =1;  //direction change 
    vel.mult(speed); //vel = vel * (speed*d)
    loc.add(vel); //loc = loc + vel
    //print ('loc = '+loc)
    this.liidu(loc.x*M,loc.y*M,clr_loik,0)
  piirto.pop()
 }
 }
 }


neli(colW_in,colH_in,radius_in,clr1_in,clr2_in,alpha_in)
{
  if (colW_in > 30)
 {
 piirto.push();
 //piirto.scale(0.8,0,8)
 piirto.translate(((fxrand()*30)-15)*M,((fxrand()*30)-15)*M,0)
 this.viivain(colW_in,colH_in,colW_in*0.55,-8*M)
 piirto.push()
 piirto.rotate(90)
 this.viivain(colW_in,colH_in,colW_in*0.55,-8*M)
 piirto.pop();
  piirto.push()
  piirto.translate(colW_in*M,colH_in*M,0)
  piirto.push()
 piirto.rotate(-90)
 
 this.viivain(colW_in,colH_in,colH_in*0.8,-8*M)
 piirto.pop();
 piirto.push();
  piirto.rotate(-180)
 
 this.viivain(colW_in,colH_in,colW_in*0.8,-8*M)
 piirto.pop();
 piirto.pop();
 piirto.pop();
 }
}
ympyr(colW_in,colH_in,radius_in,clr1_in,clr2_in,alpha_in)
{
 var radius = (radius_in);
  var centx = 0;
  var centy = 0;

 if (fxrand() > 0.3)
 {

 for (var ang = 0; ang <= 360; ang += 1) {
  piirto.push();
    var rad = degrees(ang/50);
    //console.log('bsetup -> rad', rad);
    let noiseScale = 0.4; 
  		let nd_vas = noise(0/noiseScale,(ang)/noiseScale)*30
  		let nd_oik = noise((ang)/noiseScale,0/noiseScale)*10
      		let inter = map(ang, 0, (radius), 0, 1);
      		//let c = lerpColor(color(clr1_in), color(clr2_in), inter);
    let x = (centx+sin(rad*nd_vas)) + (radius * cos(rad));
    let y = (centy+(cos(rad*nd_oik))) + (radius * sin(rad));
    		
      		//c.setAlpha((fxrand()*0.3)+alpha_in)
      		//clr_loik = c;
      		
      	
      		
    //line(x-5,y,x+5, y);
    piirto.push()
    this.liidu3(x*M,y*M,clr2,0.5)
    piirto.pop()
    
    piirto.pop()
  }
 }
 
 else {
 // if (colW_in > 30)
//  {
//  piirto.push();
//  //piirto.scale(0.8,0,8)
//  piirto.translate(((fxrand()*30)-15)*M,((fxrand()*30)-15)*M,0)
//  this.viivain(colW_in,colH_in,colW_in*0.55,-8*M)
//  piirto.push()
//  piirto.rotate(90)
//  this.viivain(colW_in,colH_in,colW_in*0.55,-8*M)
//  piirto.pop();
//   piirto.push()
//   piirto.translate(colW_in*M,colH_in*M,0)
//   piirto.push()
//  piirto.rotate(-90)
//  
//  this.viivain(colW_in,colH_in,colH_in*0.8,-8*M)
//  piirto.pop();
//  piirto.push();
//   piirto.rotate(-180)
//  
//  this.viivain(colW_in,colH_in,colW_in*0.8,-8*M)
//  piirto.pop();
//  piirto.pop();
//  piirto.pop();
//  }
//  piirto.push()
//   let ln_lngth = (fxrand()*30)+(-15)
//   piirto.push();
//  for (let i = 0; i < colW_in/1.5; i++ )
//  { 
//   piirto.push()
//    piirto.translate(-8*M,-10*M,0)
// 
//  noiseScale=10;
//  noiseDetail(0.1, 4);
//     let angle=noise(loc.x/noiseScale, loc.y/noiseScale, frameCount/noiseScale)*TWO_PI*noiseStrength; //0-2PI
//     angle += 0;
//     dir.x = cos(angle*0);
//     dir.y = sin(angle*0);
//     
//     var vel = dir.copy();
//     var d =1;  //direction change 
//     vel.mult(speed); //vel = vel * (speed*d)
//     loc.add(vel); //loc = loc + vel
//     //print ('loc = '+loc)
//     this.liidu2(loc.x*M,loc.y*M,clr2)
//     this.liidu2(loc.x*M,(loc.y)*M,clr2)
//   piirto.pop()
//  }
//  piirto.pop();
// //  piirto.push();
// //  piirto.rotate(90)
// //  for (let i = 0; i < colW_in/1.5; i++ )
// //  { 
// //   piirto.push()
// //    piirto.translate(-50*M,-10*M,0)
// // 
// //  noiseScale=10;
// //  noiseDetail(0.1, 4);
// //     let angle=noise(loc.x/noiseScale, loc.y/noiseScale, frameCount/noiseScale)*TWO_PI*noiseStrength; //0-2PI
// //     angle += 0;
// //     dir.x = cos(angle*0);
// //     dir.y = sin(angle*0);
// //     
// //     var vel = dir.copy();
// //     var d =1;  //direction change 
// //     vel.mult(speed); //vel = vel * (speed*d)
// //     loc.add(vel); //loc = loc + vel
// //     //print ('loc = '+loc)
// //     this.liidu2(loc.x*M,loc.y*M,clr2)
// //     this.liidu2(loc.x*M,(loc.y)*M,clr2)
// //   piirto.pop()
// //  }
// //  
// //  piirto.pop();
//   piirto.pop()

 }
}

ympyr2(colW_in,colH_in,radius_in,clr1_in,clr2_in,alpha_in)
{
 var radius = (radius_in/2)*M;
  var centx = 0;
  var centy = 0;

 if (fxrand() > 0.6)
 {

 for (var ang = 0; ang <= 180; ang += 1) {
  piirto.push();
    var rad = degrees(ang/50);
    //console.log('bsetup -> rad', rad);
    let noiseScale = 0.4; 
  		let nd_vas = noise(0/noiseScale,(ang)/noiseScale)*30
  		let nd_oik = noise((ang)/noiseScale,0/noiseScale)*10
      		let inter = map(ang, 0, (radius), 0, 1);
      		//let c = lerpColor(color(clr1_in), color(clr2_in), inter);
    let x = (centx+sin(rad*nd_vas)) + (radius * cos(rad));
    let y = (centy+(cos(rad*nd_oik))) + (radius * sin(rad));
    		
      		//c.setAlpha((fxrand()*0.3)+alpha_in)
      		//clr_loik = c;
      		
      	
      		
    //line(x-5,y,x+5, y);
    piirto.push()
    this.liidu(x,y,clr2)
    piirto.pop()
    
    piirto.pop()
  }
 }
 
 else {

 }
}


viivain(colW_in,colH_in,length_in,pos_mod_in)
{
var loc = createVector(0, 0, 2);
    var angle = 0; //any value to initialize
    var dir = createVector(cos(angle), sin(angle));
    var speed = (fxrand()*1.5)+0.5; 
   let ln_lngth = (fxrand()*50)+(-40) 
  let pituus = length_in
  
 piirto.push()
  
  piirto.push();
 for (let i = 0; i < pituus; i++ )
 { 
  piirto.push()
   piirto.translate(pos_mod_in,0,0)
 noiseScale=10;
 noiseDetail(0.1, 4);
    let angle=noise(loc.x/noiseScale, loc.y/noiseScale, frameCount/noiseScale)*TWO_PI*noiseStrength; //0-2PI
    angle += 0;
    dir.x = cos(angle*0);
    dir.y = sin(angle*0);
    
    var vel = dir.copy();
    var d =1;  //direction change 
    vel.mult(speed); //vel = vel * (speed*d)
    loc.add(vel); //loc = loc + vel
    //print ('loc = '+loc)
    
piirto.push()
piirto.scale(0.8,0.8)
    this.liidu2(loc.x*M,(loc.y+(angle/4))*M,clr2,0.2+(angle/4))
    piirto.pop()
//     if ((colW_in+colH_in)/2 > (50*M))
//     {

    piirto.push()
piirto.scale(0.8,0.8)
    this.liidu2(loc.x*M,(loc.y+(angle/4))*M,clr2,0.2+(angle/4))
    piirto.pop()
//     }
    
  piirto.pop()
 }
 piirto.pop();

  piirto.pop()
}


liidu(x_in,y_in,clr_in)
{
 piirto.push()
 this.ymmyr(x_in,y_in,clr_in,0)
 this.nelio(x_in,y_in,clr_in,0)
 this.nelio(x_in,y_in+(fxrand()*(4*M)),clr_in,0)
 this.nelio(x_in,y_in+(fxrand()*(4*M)),clr_in,0)
 this.kolmio(x_in,y_in,clr_in,0)
 this.kolmio(x_in,y_in,clr_in,0)
 this.kolmio(x_in,y_in,clr_in,0)
 piirto.pop()
}

liidu2(x_in,y_in,clr_in,size_mod_in)
{
 piirto.push()
 //piirto.circle(x_in,y_in,1*M)
 this.ymmyr2(x_in,y_in,clr_in,size_mod_in)
 this.nelio2(x_in/3,y_in,clr_in,size_mod_in)
 this.nelio2(x_in/3,y_in+(fxrand()*(2*M)),clr_in,size_mod_in)
 this.nelio2(x_in/3,y_in+(fxrand()*(2*M)),clr_in,size_mod_in)
//  if (f17 === 1)
//  {
 this.kolmio2(x_in/3,y_in,clr_in,size_mod_in)
 this.kolmio2(x_in/3,y_in,clr_in,size_mod_in)
 this.kolmio2(x_in/3,y_in,clr_in,size_mod_in)
 //}
 piirto.pop()
}

liidu3(x_in,y_in,clr_in)
{
 piirto.push()
 this.ymmyr(x_in,y_in,clr_in,0)
 piirto.pop()
 piirto.push()
 this.nelio(x_in,y_in,clr_in,0)
 piirto.pop()
 piirto.push()
 this.nelio(x_in,y_in+(fxrand()*(4*M)),clr_in,0)
 piirto.pop()
 piirto.push()
 this.nelio(x_in,y_in+(fxrand()*(4*M)),clr_in,0)
 piirto.pop()
 piirto.push()
 this.kolmio(x_in,y_in,clr_in,0)
 piirto.pop()
 piirto.push()
 this.kolmio(x_in,y_in,clr_in,0)
 piirto.pop()
 piirto.push()
 this.kolmio(x_in,y_in,clr_in,0)
 piirto.pop()
}


   kolmio(loc_X,loc_Y,clr_in,size_mod_in) {
      
    gr_size =((fxrand())+0.1)*M;
    piirto.push();
    piirto.translate (loc_X+(((fxrand()*8)-6)*M)*(0),loc_Y+(((Math.round(fxrand()*(8*M)))-(6*M)))*(0+(loc_Y/1000)),0);
    piirto.push();
    let c = color(clr_in)
     let c2 = color(hue(c)+((fxrand()*10)-5),saturation(c)+((fxrand()*10)-5),brightness(c))
    c2.setAlpha(0.8);
      piirto.fill (c2);
     piirto.rotate(fxrand()*(360));
  piirto.noStroke();
    let rnd_dist = gr_size-(0);
    //piirto.scale (0.5*M,0.5*M);
   piirto.triangle(0, 0, rnd_dist, rnd_dist, rnd_dist+rnd_dist, -rnd_dist);
    piirto.pop();
    piirto.pop();  
  }
  
  
    nelio(loc_X,loc_Y,clr_in,size_mod_in) {
    gr_size = ((fxrand()*3)+1)*M;
    piirto.translate (loc_X+(((fxrand()*6)-3)*M)*(0),loc_Y+(((fxrand()*6)-3)*M)*(0),0);
    piirto.push();
       let c = color(clr_in)
        let c2 = color(hue(c)+((fxrand()*4)-2),saturation(c),brightness(c)+((fxrand()*10)-5))
    c2.setAlpha(0.7);
    piirto.fill (c2);
    piirto.rotate(fxrand()*(360));
    piirto.noStroke();
    piirto.rect (0,0, gr_size,gr_size/((fxrand()*4)+1))
    //rect (0,0,gr_size*(size_mod_in),gr_size-(size_mod_in/2));
    piirto.pop();
  }
  
  
   ymmyr(loc_X,loc_Y,clr_in,size_mod_in) {
      
    gr_size = ((fxrand()*3)+1)*M;
    piirto.translate (loc_X+(((fxrand()*3)-1.5)*M),loc_Y+(((fxrand()*2)-1)*M)*(0),0);
    piirto.push();
       let c = color(clr_in)
       let c2 = color(hue(c)+((fxrand()*2)-1),saturation(c),brightness(c)+((fxrand()*6)-3))
    c2.setAlpha(0.80);
    piirto.fill (c2);
    piirto.noStroke();
    piirto.circle (0,0,gr_size);
    piirto.pop();
  } 


   kolmio2(loc_X,loc_Y,clr_in,size_mod_in) {
      
    gr_size =(((fxrand())+0.1)*M);
    piirto.push();
    piirto.translate (loc_X+(((fxrand()*8)-6)*M)*(0),loc_Y+(((((Math.round(fxrand()*(8*M)))-(6*M)))*(0+(loc_Y/1000)))*size_mod_in),0);
    piirto.push();
    let c = color(clr_in)
     let c2 = color(hue(c)+((fxrand()*10)-5),saturation(c)+((fxrand()*10)-5),brightness(c))
    c2.setAlpha(0.8);
      piirto.fill (c2);
     piirto.rotate(fxrand()*(360));
  piirto.noStroke();
    let rnd_dist = gr_size-(0);
    //piirto.scale (0.5*M,0.5*M);
   piirto.triangle(0, 0, rnd_dist, rnd_dist, rnd_dist+rnd_dist, -rnd_dist);
    piirto.pop();
    piirto.pop();  
  }
  
  
    nelio2(loc_X,loc_Y,clr_in,size_mod_in) {
    gr_size = (((fxrand()*3)+1)*M)*size_mod_in;
    piirto.translate (loc_X+(((fxrand()*6)-3)*M)*(0),loc_Y,0);
    piirto.push();
       let c = color(clr_in)
        let c2 = color(hue(c)+((fxrand()*4)-2),saturation(c),brightness(c)+((fxrand()*10)-5))
    c2.setAlpha(0.7);
    piirto.fill (c2);
    piirto.rotate(fxrand()*(360));
    piirto.noStroke();
    piirto.rect (0,0, gr_size,gr_size/((fxrand()*4)+1))
    //rect (0,0,gr_size*(size_mod_in),gr_size-(size_mod_in/2));
    piirto.pop();
  }
  
  
   ymmyr2(loc_X,loc_Y,clr_in,size_mod_in) {
      
  let gr_size = (fxrand()*3)+1;
   piirto.translate (loc_X+(((fxrand()*3)-1.5)*M),loc_Y+((((fxrand()*2)-1)*M)*(size_mod_in)),0);
//    let moddX = ((fxrand()*3)-1.5)
//    let moddY = ((fxrand()*2)-1)
//    piirto.translate(loc_X++moddX,loc_Y+moddY,0)
     piirto.push();
        let c = color(clr_in)
        let c2 = color(hue(c)+((fxrand()*2)-1),saturation(c),brightness(c)+((fxrand()*6)-3))
     c2.setAlpha(0.80);
     piirto.fill (c2);
     piirto.noStroke();
     piirto.circle (0,0,(gr_size*size_mod_in)*M);
    //let psk = fxrand()
    //piirto.circle(loc_X,loc_Y,1*M)
    
    piirto.pop();
  } 


tekstuuri()
{

			
				piirto.push();
  	//tausta.translate((marginaali*M)/2,(marginaali*M)/2,1);
  	//piirto.translate(taustaW/2,0,1);
    for (var x = 0; x < W; x+=(3)) {
			for (var y = 0; y < H; y+=(3 )) {
				piirto.push();
				//noiseDetail(40, 1);
				var c = color(0,0,(140 * noise(0.01 * (x), 0.01 * (y)))-10,fxrand()+3);
				c.setAlpha(0.03);
				piirto.fill(c);
				piirto.noStroke();
				push()
				//piirto.translate(((fxrand()*4)-2)*M,((fxrand()*4)-2)*M,0)
				piirto.circle(x*M, y*M, ((fxrand()*3)+3)*M);
				pop();
				piirto.pop();
				
					
				}
				
			}
  
//print ('1 = '+fxrand())
//				print ('2 = '+fxrand())
//				print ('3 = '+fxrand())




}

tekstuuri2()
{

			
				reunat.push();
  	//tausta.translate((marginaali*M)/2,(marginaali*M)/2,1);
  	//piirto.translate(taustaW/2,0,1);
    for (var x = 0; x < W; x+=(3)) {
			for (var y = 0; y < H; y+=(3 )) {
				reunat.push();
				//noiseDetail(40, 1);
				var c = color(0,0,(140 * noise(0.01 * (x), 0.01 * (y)))-10,fxrand()+3);
				c.setAlpha(0.03);
				reunat.fill(c);
				reunat.noStroke();
				push()
				//reunat.translate(((fxrand()*4)-2)*M,((fxrand()*4)-2)*M,0)
				reunat.circle(x*M, y*M, ((fxrand()*3)+3)*M);
				pop();
				reunat.pop();
				
					
				}
				
			}
  




}


randn_bm() {
    var u = 0, v = 0;
    while(u === 0) u = fxrand(); //Converting [0,1) to (0,1)
    while(v === 0) v = fxrand();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}

rnd_kulmat() {
    var u = 0, v = 0;
    while(u === 0) u = fxrand(); //Converting [0,1) to (0,1)
    while(v === 0) v = fxrand();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}


}

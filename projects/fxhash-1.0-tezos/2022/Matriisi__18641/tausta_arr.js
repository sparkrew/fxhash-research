class tausta_arrer 
{
constructor()
{

}

run()
{
 ;
 //this.valit();
  if (f14 != 0)
  {
  if (fxrand() > 0.5)
  {
    W3 = W
    H3 = H
  }
  
  }
 
 if (f10 === 1)
 {
   this.values3()
  this.equal();
  hor_mov = (fxrand()*(W-((tausta_arr[0][0][0]*f3)+(tausta_arr[0][0][2]))*2))+((tausta_arr[0][0][0]*f3)+(tausta_arr[0][0][2]))

 }
 
  if (f10 === 2)
 {
 this.values3()
  this.noisesize();
  hor_mov = 0
 }
 
   if (f10 === 3)
 {
 this.values()
  this.variheight();
  hor_mov = 0
 }
 
    if (f10 === 4)
 {
 this.values3()
  this.noisesizedist();
 }
 
     if (f10 === 5)
 {

  this.values2();
  this.uusio();
 }
 
//  if (fxrand()>0.5)
//  {
//    
//  }
// else{
//  this.variheight();
//  }
 
}
values()
{

let vali_val = Math.max(f3,f33)
//tausta_vali = ((WIDTH/f3)/f3)+(((fxrand()*(WIDTH/f3))-((WIDTH/f3)/2)))
if (f9 === 1)
{
tausta_vali2 = 0 -(fxrand()*(30))
}

tausta_vali = (((W3/(f3+1))/(f3+1))+((fxrand()*30)))
tausta_vali2 =tausta_vali;
//tausta_vali =10



//tausta_vali = (fxrand()*(400*M))+(100*M)
//print ('f10 = '+f10)
//print ('taustavali = '+tausta_vali)

col_width = ((W3-((marginaali)*2))-(tausta_vali*(f3+1)))/f3
col_height = (fxrand()*(H3/(f33+2)))+col_width
//print('col_height = '+col_height)
//if (col_width < )


//col_height = 50;


}



values2()
{
 //tausta_vali = ((WIDTH/f3)/f3)+(((fxrand()*(WIDTH/f3))-((WIDTH/f3)/2)))
if (f9 === 1)
{
tausta_vali2 = 0 -(fxrand()*(30*M))
}

//tausta_vali = ((WIDTH/(f3+1))/(f3+1))+((fxrand()*(90*M)))
if (f3 === 1)
{
tausta_vali = 320
}
if (f3 ===2)
{
tausta_vali = 120
}

if (f3 === 3)
{
tausta_vali = 50
}

if (f3 === 4)
{
tausta_vali = 80
}

if (f3 === 5)
{
tausta_vali = 50
}

if (f3 > 5)
{
tausta_vali = 30
}
//tausta_vali = (fxrand()*(400*M))+(100*M)
//print ('f10 = '+f10)
//print ('taustavali = '+tausta_vali)

col_width = ((W-((marginaali)*2))-(tausta_vali*(f3+1)))/(f3)
col_height = (fxrand()*(H/(f33+2)))+col_width/2
//print('col_width = '+col_width)
//if (col_width < )


//col_height = 50;

 //(WIDTH/f3)f3
//print ('vali = '+tausta_vali)

}

values3()
{

let vali_val = Math.max(f3,f33)
//tausta_vali = ((WIDTH/f3)/f3)+(((fxrand()*(WIDTH/f3))-((WIDTH/f3)/2)))
if (f9 === 1)
{
tausta_vali2 = 0 -(fxrand()*(30))
}

tausta_vali = (((W3/(vali_val+1))/(vali_val+1))+((fxrand()*30)))/1.5
//print ('taustavali values 3 = '+tausta_vali)
tausta_vali2 =tausta_vali;
//tausta_vali =10



//tausta_vali = (fxrand()*(400*M))+(100*M)
//print ('f10 = '+f10)
//print ('taustavali = '+tausta_vali)

col_width = ((W3-((marginaali)*2))-(tausta_vali*(vali_val+1)))/vali_val
col_height = (fxrand()*(H3/(f33+2)))+col_width
//print('col_height = '+col_height)
//if (col_width < )


//col_height = 50;


}
equal()
{
 col_height = (H3/(f33+1))+tausta_vali



 for (let i = 0; i < f33; i++)
   {
     tausta_arr[i] = []
      for (let j = 0; j < f3; j++)
      {
        let rot_var;
             
       if (fxrand() > 0.4)      
       {
       rot_var = (fxrand()*(10))-(5)
       }
       else
       {
       rot_var = j+i
       }
       
       if (fxrand() > 0.5)
       {
        rot_var = 90; 
       
       }
       
      
    if (fxrand() > 0.5)
{
//print ('dingdong')
tausta_arr[i][j] = [col_width,col_height,tausta_vali2+(j*(col_width+tausta_vali2)),((col_height+tausta_vali2)*i)+tausta_vali2,rot_var]
}
 
 else {
 
       tausta_arr[i][j] = [col_width,col_height,tausta_vali+(j*(col_width+tausta_vali)),((col_height+tausta_vali)*i)+tausta_vali,rot_var]
       }
       
       
       
       //print (tausta_arr[i][j])
      }
   
   }

}

variheight()
{
for (let i = 0; i < f33; i++)
   {
     tausta_arr[i] = []
      for (let j = 0; j < f3; j++)
      {
        
       col_height = (fxrand()*(H/(f33+2)))+col_width 
        // tausta arr = width, height, xpos, ypos, 
       tausta_arr[i][j] = [col_width,col_height,tausta_vali+(j*(col_width+tausta_vali)),((col_height+tausta_vali)*i)+tausta_vali]
       //print (tausta_arr[i][j])
      }
   
   }

}

noisesize()
{
for (let i = 0; i < f33; i++)
   {
     tausta_arr[i] = []
      for (let j = 0; j < f3; j++)
      {
        
       col_height = (fxrand()*(H/(f33+2)))+col_width 
        // tausta arr = width, height, xpos, ypos,
    let noiseScale = 10; 
       let siz_mod = noise((tausta_vali+(j*(col_width+tausta_vali)))/noiseScale,(((col_height+tausta_vali)*i)+tausta_vali)/noiseScale,0)
       //print ('sizemod = '+siz_mod)
       tausta_arr[i][j] = [col_width*(siz_mod*2),col_height*(siz_mod*2),(tausta_vali+(j*(col_width+tausta_vali)))*(siz_mod*2),(((col_height+tausta_vali)*i)+tausta_vali)*(siz_mod*2)]
       //print (tausta_arr[i][j])
      }
   
   }

}



noisesizedist()
{
for (let i = 0; i < f33; i++)
   {
     tausta_arr[i] = []
      for (let j = 0; j < f3; j++)
      {
        
       col_height = (fxrand()*(H/(f33+2)))+col_width 
        // tausta arr = width, height, xpos, ypos,
    let noiseScale = 10; 
       let siz_mod = noise((tausta_vali+(j*(col_width+tausta_vali)))/noiseScale,(((col_height+tausta_vali)*i)+tausta_vali)/noiseScale,0)
       //print ('sizemod = '+siz_mod)
       tausta_arr[i][j] = [col_width*siz_mod,col_height*(siz_mod*2),(tausta_vali+(j*(col_width+tausta_vali)))*(siz_mod*2),(((col_height+tausta_vali)*i)+tausta_vali)]
       //print (tausta_arr[i][j])
      }
   
   }

}

uusio()
{
//print ('f33 = '+f33)
 for (let i = 0; i < f33; i++)
   {
     tausta_arr[i] = []
      for (let j = 0; j < f3; j++)
      {
        let rot_var;
             
       if (fxrand() > 0.4)      
       {
       rot_var = (fxrand()*(10))-(5)
       }
       else
       {
       rot_var = j+i
       }
       
       if (fxrand() > 0.5)
       {
        rot_var = 90; 
       
       }
       
       if (f10 === 5)
{    if (fxrand() > 1)
{
//print ('dingdong')
tausta_arr[i][j] = [col_width,col_height,tausta_vali2+(j*(col_width+tausta_vali2)),((col_height+tausta_vali2)*i)+tausta_vali2,rot_var]
}
 
 else {
 
       tausta_arr[i][j] = [col_width,col_height,tausta_vali+(j*(col_width+tausta_vali)),((col_height+tausta_vali)*i)+tausta_vali,rot_var]
       }
       
       
       }
       //print (tausta_arr[i][j])
      }
   
   }

}
}
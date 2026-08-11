class colors {
  constructor(clr_seed,clrs,clr_mode) {

  }
  
  colormap (clr_seed,clrs,clr_mode)
  {
  
  if (f6 != 4)
  {
  
  if (f6 == 1)
  {
  clr_T_ar =['#d4ab87','#d3ac88','#c69b78','#b19071', '#d4a986' , '#cba07e', '#e8c9a6','#ead0b4','#c2bab1','#ae967d','#d1c2ad']
  }
   if (f6 == 2)
  {
clr_T_ar =['#232323','#1C1C1C','#151515','#262626','#2F2F2F','#1E1E1E','#0D0D0C','#590C0C','#171715','#1D1B19','#252525','#3F0C07']
  }
  
     if (f6 == 3)
  {
    clr_T_ar =['#dcdee1','#bcbec2','#aaa9ad','#d6d8dc','#ccccd0','#d3d4d8','#767275','#bec0c4','#595352','#d1d3d7','#cbcace','#dcdee1']
  }
  
  rnd_run = Math.round(fxrand() * 10);

    
    clr_bg1 = color(clr_T_ar[rnd_run]);
    
    let c = color( clr_bg1)
    let c2 = color(hue(c),saturation(c),brightness(c)-50)

    
    clr_bg1 = c2
    
    rnd_run = Math.round(fxrand() * 10);
    
    clr_bg2 = color(clr_T_ar[rnd_run]);
  
  
    if (fxrand > 0.5)
    {
     clr_bg1 = clr_bg2;
     clr_bg2 = c2;
    
    }
    }
    
    if (f6 == 4)
    {
    
    
    
    }
    
    
  
  
   let rnd_hue = fxrand()*360

   scr_clr_1 = color('#ffd166')
   let _vali_c = scr_clr_1.levels[0]+rnd_hue
   vali_c = vali_c%360;
   
   clr_ar = ['#ccd5ae','#ccff33','#f72585','#4895ef']
   
          
    clr_seed = [(fxrand()*(360)), (fxrand()*(150)), (fxrand()*(120))];

    for (let i = 0; i < 10; i++) {
    clr_seed[0]  = clr_seed[0] + 30;
      clr_seed[0] = clr_seed[0]%360;  
      clr_ar[i] = clr_seed[0];
    }   
   
   scr_clr_2 = color(clr_ar[0])
   scr_clr_2 = color(clr_ar[1])
   clr1 = color(clr_ar[2]);
   clr2 = color(clr_ar[3])
   

    for (let i=0; i<f3; i++)
    {
     let inter = map(i, 0, f3_2, 0, 1);
    let c = lerpColor(color(scr_clr_1), color(scr_clr_2), inter);
    let c2 = color(hue(c),saturation(c)-(i*6),brightness(c))

    screen_clr_ar[i] = color(c)
    
    }

    
    let rndm1 = Math.round(fxrand()*9);
    clr1 = [clr_ar[rndm1],clr_seed[1],70];
    rndm1 = Math.round(fxrand()*9);
    clr2 = [clr_ar[rndm1],clr_seed[1],100];
    rndm1 = Math.round(fxrand()*9);
    clr3 = [clr_ar[rndm1],clr_seed[1],100];
    rndm1 = Math.round(fxrand()*9);
    scr_clr_1 = [clr_ar[rndm1],clr_seed[1],100];
    rndm1 = Math.round(fxrand()*9);
    scr_clr_2 = [clr_ar[rndm1],clr_seed[1],100];
    
    
    
clr_M_ar = [
['#f4f1de', '#e07a5f', '#3d405b', '#81b29a', '#f2cc8f'],['#233d4d','#F07F34','#fcca46','#a1c181','#619b8a'],['#dad7cd', '#a3b18a', '#588157', '#3a5a40', '#344e41'],
['#0b132b', '#1c2541', '#3a506b', '#5bc0be', '#6fffe9'],['#fffcf2', '#ccc5b9', '#403d39', '#252422', '#eb5e28'],['#87b38d', '#ff70a6', '#5d576b', '#ffd400', '#202030'],
['#475055', '#BFAE71', '#882C30', '#838987', '#B5A07C'],['#D39169', '#053E41', '#085456', '#E81C23', '#0A7274'],['#FFD12F', '#1E809B', '#EEDF9E', '#7B7663', '#F0BF1D'],
["#3C1E0E", "#DFBC14", "#C95327", "#F5F1BA", "#C42828"]
]


clr_arr_valu = Math.round(fxrand()*9)

clr_ar = clr_M_ar[clr_arr_valu];
if (clr_arr_valu === 1  ||  clr_arr_valu === 5  || clr_arr_valu === 6 || clr_arr_valu === 7
|| clr_arr_valu === 8 || clr_arr_valu === 8)
      {
      colerp = 0;
      }
      
      else
      {
      colerp = 1;
      }


shuffle1(clr_ar);

clr_bg1 = color(clr_ar[0]);
    
    let c = color(clr_bg1)
    let c2 = color(hue(c),saturation(c),brightness(c)-50)

    
    clr_bg1 = c2

    
    rnd_run = Math.round(fxrand() * 10);
    
    clr_bg2 = color(clr_ar[0]);
  
  
    if (fxrand > 0.5)
    {
     clr_bg1 = clr_bg2;
     clr_bg2 = c2;
    
    }
    
    
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




    
    if (fxrand()>1){
    bgbgclr = color((fxrand()*45)+5)
    }
    else{
       // print ('ou shit')
   
    let vall_rnd = Math.round(fxrand()*4);

    bgbgclr =color(clr_ar[vall_rnd])

  while (saturation(bgbgclr) < 20 && brightness(bgbgclr) > 85)
  {
  bgbgclr =color(clr_ar[Math.round(fxrand()*4)])
  }

    }
    
    

  
}
}

function shuffle1(array) {
  var m = array.length, t, i;

  while (m) {

    i = Math.floor(fxrand() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
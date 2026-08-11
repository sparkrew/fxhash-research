class taustat {
  constructor(_col_width,_col_height,_col_dist) {
    this.dist = col_dist;
    this.height = col_height;
    this.width = col_width;
  }
  
  
  run(clr_in)
  {
  this.display(clr_in);
  
  
  
  }
  
  
  display(clr_in)
  {
  tausta.translate (-taustaW/2,-taustaH/2,0);
  smooth();
  tausta.background(clr_in);
  //let run_count = 0;
  push();
	
  	tausta.push();
  	
  	
 	
 	if (1 == 1)
 	{   
 	
 		tausta.translate (marginaali,marginaali,0);
  		for (let i = 0; i <= taustaH -(2*(marginaali)); i++) {
      		let inter = map(i, 0, taustaH -(2*(marginaali)), 0, 1);
      		let c = lerpColor(color(clr_bg2), color(clr_bg1), inter);
      		tausta.stroke(c);
      		tausta.line(0, i, (taustaW-((marginaali)*2)) , i);
      		
   		 }
   		 }
//     
   tausta.pop();
//     if (f4>0)
//     {
//     for (let i = 0; i < f4; i++)
//     {
// 
// 
// if (4 == 4)
//   	{
//   	t_dia_l = fxrand()
//   	t_dia_r = fxrand()
//   	}
//   	else 
//   	{
//   	let t_dia_l = 0
//   	let t_dia_r = 0
//   	}
// 
// 	tausta.push();
// 	tausta.translate (fxrand()*WIDTH,fxrand()*HEIGHT,0);
// 	tausta.rotate(fxrand()*360);
// 	this.siivu();
//     tausta.pop()
//     }
//     }
    
 
 
			 for (let i = 0; i < ((fxrand()*50000)+50000); i++)
			
				{
				 tausta.push();
				tausta.translate(fxrand()*taustaW,fxrand()*taustaH,2);
				
			// 	if (fxrand() < 0.5)
// 				{rotate (-45)}
// 				else
 				tausta.rotate (0)
				
				rnd_run = fxrand();
				tausta.scale (rnd_run/2, rnd_run/2)
				let c;
				c = color(clr_T_ar[Math.round(fxrand() * (clr_T_ar.length-1))]);
				//print ('taustaväri c = '+ c)
				c.setAlpha((fxrand()*6)+0.8)
				tausta.stroke (c);
				tausta.strokeWeight(fxrand()*3*M);
				tausta.noFill();
				tausta.curve(16, 26, 33, 24, 73, 61, 45, 65)
				
				//print ('x = '+ x)
				//print ('y = '+ y)
				tausta.pop();
  	//print (c);
				}
//f3 = 5				
				
	let siiv1;
let siiv2;
tausta.push()
tausta.translate (-taustaW/2,0,0)
let tausta_dist = taustaW/f3_2
//tausta.push()

for (let i = 0;i < f3_2; i++)
{
 if (f4 > fxrand()*(f4+(f4*(f4/100))))
   {
siiv1 = color(200);
siiv2 = color(200);
tausta.push()
if (f7 ==1)
  {
    tausta.rotate(90)
     tausta.translate(-taustaW/2,-taustaH*1.5,0)
 }
//tausta.translate (tausta_dist,0,0)
tausta.translate (tausta_dist/2,0,0)
tausta.translate (tausta_dist*i,0,0)
this.siivu(tausta_dist*i,siiv1,siiv2,60);

tausta.pop();
}
}	

// screenprint
tausta.push()
tausta.translate (0,0,0)
 tausta_dist = taustaW/f3_2
//tausta.push()


for (let i = 0;i < f3_2; i++)
{
 if (f4 > fxrand()*(f4+(f4*(f4/100))))
   {
siiv1 = color(screen_clr_ar[i]);
siiv2 = color(screen_clr_ar[i]);
tausta.push()
if (f7 ==1)
  {
    tausta.rotate(90)
     tausta.translate(-taustaW/2,-taustaH*1.5,0)
 }
//tausta.translate (tausta_dist,0,0)
tausta.translate (tausta_dist/2,0,0)
tausta.translate (tausta_dist*i,0,0)
tausta.translate (screen_offX,screen_offY,0)
this.siivu(tausta_dist*i,siiv1,siiv2,30);

tausta.pop();
}
}



		
				
				tausta.push();
  	//tausta.translate((marginaali*M)/2,(marginaali*M)/2,1);
  	tausta.translate(taustaW/2,0,1);
    for (var x = 0; x < taustaW; x+=3) {
			for (var y = 0; y < taustaH; y+=3) {
				tausta.push();
				//noiseDetail(40, 1);
				var c = color(0,0,(140 * noise(0.01 * x, 0.01 * y))-10,fxrand()+3);
				tausta.fill(c);
				tausta.noStroke();
				push()
				translate(((fxrand()*4)-2)*M,((fxrand()*4)-2)*M,0)
				tausta.circle(x, y, (fxrand()*(3))+3*M);
				pop();
				tausta.pop();
				
					
				}
				
			}
  

//   pop();
//   push()
//   let co =color('white')
//   co.setAlpha(70);
//   tausta.fill(co)
//   tausta.noStroke();
//   tausta.translate (taustaW/2,taustaH/2,3)
//   //for (let i = 0, i < 
//   tausta.rect (0,0,this.width/M,this.height/M)
//   pop();

// for (let i = 0;i < f3; i++)
// {

//tausta.pop();






tausta.pop();

  
  image(tausta,0,0, WIDTH, HEIGHT);
  
  
  
  }


siivu(dist_in,clr1_in,clr2_in,alpha_in)
{
//tausta.colorMode(RGB)
 rnd_run = Math.round(fxrand() * 10);
    
    
    clr_bg1 = color(clr_T_ar[rnd_run]);
    
    rnd_run = Math.round(fxrand() * 10);
    
    clr_bg2 = color(clr_T_ar[rnd_run]);
    let noiseScale = 100;
    
    //let siiv1 = color(200);
    //let siiv2 = color(200);
 
//  let siiv1 = color('yellow');
//     let siiv2 = color('orange');


//print (dist_in)
		tausta.push();
 	tausta.translate ((taustaW/2)-(col_width/M)/2,taustaH/2-((col_height/M)/2),3)
  		for (let i = 0; i <= (col_height/M); i++) 
  		{
  		noiseScale = 100;
  		let n_vas = noise(0/noiseScale,(i+dist_in)/noiseScale)*30
  		let n_oik = noise((i+dist_in)/noiseScale,0/noiseScale)*30
  		noiseScale = 4;
  		let nd_vas = noise(0/noiseScale,(i+dist_in)/noiseScale)*2
  		let nd_oik = noise((i+dist_in)/noiseScale,0/noiseScale)*2
      		let inter = map(i, 0, (col_height/M), 0, 1);
      		let c = lerpColor(color(clr1_in), color(clr2_in), inter);
      		c.setAlpha((fxrand()*3)+alpha_in)
      		tausta.strokeWeight((fxrand()*(2))+1)*M;
      		tausta.stroke(c);
      		//tausta.line(noise(0,i)*30, i, ((taustaW/2)-((marginaali)*2))+(((noise(0,i)-0.5)*30) , i));
      	
      		tausta.stroke(c);
      		tausta.line((nd_vas)-(2*M), i, (col_width/M)+(nd_oik) , i);
   		 }
    //tausta.colorMode(HSB)
    tausta.pop();
    
    		tausta.push();
 	tausta.translate (((taustaW/2)-(col_width/M)/2)+(2*M),taustaH/2-((col_height/M)/2),3)
  		for (let i = 0; i <= (col_width/M)-(2*M); i++) 
  		{
  		noiseScale = 100;
  		let n_vas = noise(0/noiseScale,i/noiseScale)*30
  		let n_oik = noise(i/noiseScale,0/noiseScale)*30
  		noiseScale = 4;
  		let nd_vas = noise(0/noiseScale,(i+dist_in)/noiseScale)*2
  		let nd_oik = noise((i+dist_in)/noiseScale,0/noiseScale)*2
      		let inter = map(i, 0, (col_width/M), 0, 1);
      		let c = lerpColor(color(clr1_in), color(clr2_in), inter);
      		tausta.strokeWeight((fxrand()*(2))+1)*M;
      		c.setAlpha((fxrand()*10)+alpha_in)
      		tausta.stroke(c);
      		//tausta.line(noise(0,i)*30, i, ((taustaW/2)-((marginaali)*2))+(((noise(0,i)-0.5)*30) , i));
      	
      		tausta.stroke(c);
      		tausta.line(i, (nd_vas)-(4*M), i , (col_height/M)+(nd_oik));
   		 }
    //tausta.colorMode(HSB)
    tausta.pop();
    
}
  
  
  }
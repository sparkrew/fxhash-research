class bendArr {
    constructor(_col_width,_col_height,_col_dist,mode_in,_offX,_offY,) {
    this.mode = mode_in;
    this.dist = col_dist;
    this.height = col_height;
    this.width = col_width;
    this.offsetX =offX;
    this.offsetY =offY;
    
    }
    run(mode_in)
    { 
     gridX = Math.round(col_width/(6))
     gridY = Math.round(col_height/(6))  
     gridY += Math.round(fxrand()*100); 
    
    
     if (mode_in == 5)
     {
     this.mode0()
     }
     
     if (mode_in == 1)
     {
     this.mode1()
     }
     
     if (mode_in == 2)
     {
     this.mode2()
     }
     
     if (mode_in == 3)
     {
     this.mode3()
     }
     
     if (mode_in == 4)
     {
     this.mode4()
     }
    
    
     if (mode_in == 6)
     {
     this.mode6()
     }
    }
    
    
    mode0()
    {
    for (let i = 0; i < gridY+1; i++)
  {
    bend_arX[i] = 0
    bend_arY[i] = 0
    }
    }
    
    
    mode1()
    {
    let wait_time = Math.round((fxrand()*(gridY/2))+(gridY/8))
     for (let i = 0; i < gridY+1; i++)
  {
   if (i > wait_time)
   {
    bend_arX[i] = -(i-wait_time)
    bend_arY[i] = i-wait_time
   }
   else 
   {
    bend_arX[i] = 0
    bend_arY[i] = 0
   }
  } 
    }
    
    
    mode2()
    {
    let wait_time = Math.round((fxrand()*(gridY/2))+(gridY/8))
    let run_rnd = fxrand();
     for (let i = 0; i < gridY+1; i++)
  {
   if (i > wait_time)
   {
   if (run_rnd>0.5)
   {
    bend_arX[i] = -((sin(i))-wait_time)
    bend_arY[i] = (sin(i))-wait_time
    }
    else
    {
    bend_arX[i] = ((sin(i))-wait_time)
    bend_arY[i] = (sin(i))-wait_time
    }
   }
   else 
   {
    bend_arX[i] = 0
    bend_arY[i] = 0
   }
  } 
    }
    
    
    
    
     
    
    
     mode3()
    {
    let wait_time = Math.round((fxrand()*(gridY/2))+(gridY/8))
    let run_rnd = fxrand();
     for (let i = 0; i < gridY+1; i++)
  {
   if (i > wait_time)
   {
   if (run_rnd>0.5)
   {
    bend_arX[i] = -((tan(i))-wait_time)
    bend_arY[i] = (sin(i))-wait_time
    }
    else
    {
    {
    bend_arX[i] = ((tan(i))-wait_time)
    bend_arY[i] = (sin(i))-wait_time
    }
    }
   }
   else 
   {
    bend_arX[i] = 0
    bend_arY[i] = 0
   }
  }
  }
    
    
    
    mode4()
    {
    let wait_time = Math.round((fxrand()*(gridY/2))+(gridY/8))
     for (let i = 0; i < gridY+1; i++)
  {
   if (i > wait_time)
   {
   if (fxrand()>0.5)
   {
    bend_arX[i] = -((tan(i))-wait_time)
    bend_arY[i] = (sin(i))-wait_time
    }
    else
    {
    {
    bend_arX[i] = ((tan(i))-wait_time)
    bend_arY[i] = (sin(i))-wait_time
    }
    }
   }
   else 
   {
    bend_arX[i] = 0
    bend_arY[i] = 0
   }
  } 
    }
    
    
    mode6()
    {
    let wait_time = Math.round((fxrand()*(gridY/2))+(gridY/8))
    let run_rnd = fxrand();
    let run_rnd2 = (fxrand()*10);
    
     for (let i = 0; i < gridY+1; i++)
  {
   if (i > wait_time)
   {
   if (run_rnd>0.5)
   {
    bend_arX[i] = -((sin(i*run_rnd2)))
    bend_arY[i] = (sin(i))
    }
    else
    {
    {
    bend_arX[i] = (((i)))
    bend_arY[i] = ((i))
    }
    }
   }
   else 
   {
    bend_arX[i] = 0
    bend_arY[i] = 0
   }
  }
  }

    
    

    }
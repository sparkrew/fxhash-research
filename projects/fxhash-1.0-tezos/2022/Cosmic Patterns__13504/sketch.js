let arr0 = []
let arr1 = []

let A = 0

let width=  675
let height= 954

let r
let g
let b
let Alpha
let alpha
let spontanity
let pixArray
let scale =1
let equlibrium = 0


function Scale(scale)
{
  width = 675
  height = 954
  createCanvas(width, height);
  width = width*scale
  height = height*scale


  pixelDensity(scale);

  translate(width/2,height/2)
  
  for(let i=0;i<width*scale;i++)
  {
    arr0[i] = [];
    arr1[i] = [];
    
    for(let j=0;j<height*scale;j++)
    {
      
      arr0[i][j] = createVector(A)
      arr1[i][j] = createVector(A)
    }
  }
  return console.log('Canvas Scaled Current Resolution = ',width,'*',height)

}




function setup() {
  
  // width = 675
  // height = 954
  
  r = fxrand()
  g = fxrand()
  b = fxrand()
  spontanity  = fxrand()
  
  
  alpha= map(fxrand(),0,1,0.1,0.6)
  
  
  
  Alpha = map(fxrand(),0,1,240,255)
  A= fxrand()*0.5

  
  background(220);
  strokeWeight(5)
  Scale(scale)

  
  // scale=  int(window.prompt('Enter Scale value','between 1-3'))%3


  
  
}

function draw() 
{
  

  
  
  for(let i=20*scale;i<(width-20)*scale;i++)
  {
    
    for(let j=20*scale;j<(height-20)*scale;j++)
    {
      let tempA = laplaceX(i,j)
      let tempB = laplaceY(i,j)
      
      if(spontanity>0.5)
      {
        
        arr1[i][j].y = (tempB+alpha*300*tempA*sin(i*j*alpha))
        arr1[i][j].z = (tempB+alpha*300*tempA*cos(i*j*alpha))
      }
      else
      {
        arr1[i][j].y = (tempB+alpha*10*tempA*tan(tan(i*j*alpha)))
        arr1[i][j].z = (tempB+alpha*10*tempA*tan(tan(i*j*alpha)))
        
      }
      
    }
  }
  
  loadPixels()
  
  for(let i=0;i<width*scale;i++)
  {
    
    for(let j=0;j<height*scale;j++)
    {
      
      
      let pix = (i+j*width*scale)*4
      pixels[pix+0] = floor((arr1[i][j].y+arr1[i][j].z)*r)
      pixels[pix+1] = floor((arr1[i][j].y+arr1[i][j].z)*g)
      pixels[pix+2] = floor((arr1[i][j].y+arr1[i][j].z)*b)
      pixels[pix+3] = Alpha
    }
  }
  
  
  
  updatePixels()  
  swap()
  
  equlibrium+=1
  
  
  if(equlibrium>250)
  {
    console.log('The reaction has reached the Equlibrium')
    noLoop()
  }
}

function keyPressed()
{
  
  if(keyCode == 83)
  {
    saveCanvas('Cosmic Patterns','.jpg')
    console.log('Saved Successfully')
    noLoop()
  }
}

function swap()
{
  let temp = arr0
  arr0 = arr1
  arr1 = temp
  
}

function laplaceX(i,j)
{
  let sumX =0
  for(let k =0;k<=2;k++)
  {
    for(let l = 0;l<=2;l++)
    {
      sumX+=arr0[k+i-1][l+j-1].x
    }
  } 
  return sumX/9   
}


function laplaceY(i,j)
{
  let sumY =0
  for(let k =0;k<=2;k++)
  {
    for(let l = 0;l<=2;l++)
    {
      sumY+=arr0[k+i-1][l+j-1].y
    }
  } 
  return sumY/9   
}

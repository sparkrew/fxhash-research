function setup() {
  const size=window.screen.width
  
  
  // var number_layers = fxrand()*50+15;
  var number_layers = fxrand()*250+15;
  var stroke_max = fxrand();

  var grayscale=false;
  
  createCanvas(1000, 1000);	





  var CoolTint="False";

  const colors = ["1", "2", "3", "4", "5", "6"];
  
  cool_colors=[[0,0,0],[1,1,1],[61, 224, 242],[242, 61, 160],[35, 130, 140],[142, 30, 217],[217, 91, 125],[99, 104, 191],[242, 19, 123],[19, 201, 242],[242, 19, 123],[13, 159, 217],[242, 99, 152],[142, 242, 114],[68, 128, 166],[126, 242, 231],[60, 115, 109],[216, 242, 240],[241, 148, 242],[57, 115, 82],[99, 191, 139],[242, 48, 84],[242, 121, 153],[46, 187, 242],[107, 229, 242],[124, 166, 154],[191, 52, 77],[191, 52, 103],[52, 191, 140]];

  background(0, 0, 0);

  var strokewidth = fxrand()*5;

  var strokeStyle;
  var density;
  frameRate(3);


  starting_x=Math.floor(fxrand()*800);
  starting_y=Math.floor(fxrand()*800);

  // console.log(starting_x);
  // console.log(starting_y);


  var shift=0;

  
  for (let i = 0; i < 7; i++) {
    // console.log(number_layers);
  
  twins_calc=fxrand();

  isTwins=false;


  const size= 800; 
  strokeWeight(strokewidth+fxrand()*2);
  fill(Math.floor(fxrand() * size), Math.floor(fxrand() * size),Math.floor(fxrand() * size));
  
  

  var copyesque_color = cool_colors[Math.floor(fxrand()*cool_colors.length)];

  function face(shift){
  starting_x_position=Math.floor(fxrand() * size)
  starting_y_position=Math.floor(fxrand() * size)


  
  circle_size=fxrand()*250
  circle(starting_x+50+shift, starting_y+50+shift, circle_size);

  fill(copyesque_color);
 rect(starting_x+50+shift,starting_y+50+shift+40, circle_size/10);

line(starting_x+50+shift, starting_y+40+50+shift, starting_x+fxrand()*20+50+shift, starting_y+40+fxrand()*20+50+shift);
fill(cool_colors[Math.floor(fxrand()*cool_colors.length)])

  second_circle_x=starting_x+getRandomInt(10,20)+50+shift
  second_circle_y=starting_y+getRandomInt(10,20)+50+shift
  
  circle(second_circle_x, second_circle_y, circle_size/5)
  circle(second_circle_x-40, second_circle_y, circle_size/5)

  fill(cool_colors[Math.floor(fxrand()*cool_colors.length)])
  
  // #black part
  circle(second_circle_x+8, starting_y_position+20, 8)
  circle(second_circle_x-40+8, starting_y_position+20, 8)

  fill(cool_colors[Math.floor(fxrand()*cool_colors.length)])

  }


  if (starting_y<200 && starting_x<200){
    face(0);
    face(300);
    isTwins=true;
    
  }

  else {
    face(0);
  }
 

  window.$fxhashFeatures = {
    "Twins": isTwins
  
  
  }






  
  
  }


}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(fxrand() * (max - min + 1)) + min;
}
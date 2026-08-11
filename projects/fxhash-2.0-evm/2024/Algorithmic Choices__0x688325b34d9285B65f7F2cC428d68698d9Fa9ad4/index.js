let divWidth = 800;
let divHeight = 800;
let checkboxSize = 20;
let color_palettes = [
  ["#fdfce0","#fdfce0","#fdfce0","#ec1a37","#f59db3","#2a2776","#94d8ef","#eacb18","#fbaa1b","#85ccaa","#cae3aa"],
  ["#fdfce0","#fdfce0","#fdfce0","#ec1a37","#f59db3","#2a2776","#94d8ef","#eacb18","#fbaa1b","#85ccaa","#cae3aa"],
  ["#ffe9c7","#ffe9c7","#ffe9c7","#ffe9c7","#e6513b","#e48a29","#eca62d","#057f82","#425666"],
   ["#f2f1dd","#f2f1dd","#f2f1dd","#f2f1dd","#00ab98","#08ace1","#273574","#e72385","#e52e20","#f0801a","#f6a019","#f6a019"],
   ["#e8dad1","#e8dad1","#e8dad1","#e8dad1","#ecedf1","##e25e2d","#e1c49a","#a2b5a1","##0e8697","#15234a"],
  ["red","cyan","lime","yellow","magenta","red","blue","lime","yellow","magenta"],
  ["#f5f5f5","#f5f5f5","#f5f5f5","#d43338","#f9c706","#2683c6","#2b2b2b"],
  ['#ff1d58','#f75990','#fff685','#00DDFF','#0049B7','#ff1d58','#f75990','#fff685','#00DDFF','#0049B7'],
  ["#FFC300", "#FF5733", "#C70039", "#581845","#FFC300", "#FF5733", "#C70039", "#581845"],
  ["#f8c91e","#f5efef","#f5efef",   "#ccc02c","#f8c91e","#e67c2e","#3b92a8","#f8c91e","#f5efef","#f5efef","#ccc02c","#f8c91e","#e67c2e","#3b92a8"],
  ["#32CD32", "#FFD700", "#FF69B4", "#FF4500", "#32CD32", "#FFD700", "#FF69B4", "#FF4500"],
  ["#FFF100", "#006BFF", "#08C2FF", "#BCF2F6", "#FFF100", "#006BFF", "#08C2FF", "#BCF2F6"],
  ["#B4D6CD", "#FFDA76", "#FF8C9E", "#F4E88", "#B4D6CD", "#FFDA76", "#FF8C9E", "#F4E88"],
  ["#808836", "#FFBF00", "#FF9A00", "#D10363", "#808836", "#FFBF00", "#FF9A00", "#D10363"],
  ];
let color_palette;
let checkboxes = [];
let noise_index_x = 0;
let noise_index_y = 0;
let noise_x_increment = 0.01;
let noise_y_increment = 0.01;
let checkbox_mode = 1;
let mouse_mode = false;
let checkbox_toggles = {};
let noise_indexes_array = [
  [4, 4], 
  [4, 4], 
  [4, 10], 
  [4, 18], 
  [4, 24],
  [10, 4], 
  [10, 10], 
  [10, 10], 
  [10, 10], 
  [18, 4], 
  [18, 10], 
  [18, 18], 
  [24, 4], 
];
let noise_index;
let border_mode = 1;
let font;

function preload() {
  font = loadFont('font.ttf');
}

function setup() {
  noCanvas();
  Math.random = $fx.rand;
  noiseSeed($fx.rand() * 99999);
  randomSeed($fx.rand() * 99999);
  divWidth = min(windowWidth,windowHeight)*0.95;
  divHeight = divWidth;
  checkboxSize = (divWidth)/random([35,40,46,50,55]);

 noise_x_increment = Math.random() < 0.5 ? 0.01 : 0.001;
 noise_y_increment = Math.random() < 0.5 ? 0.01 : 0.001;

if (noise_x_increment === 0.001 && noise_y_increment === 0.001) {
    if (Math.random() < 0.5) {
        noise_x_increment = 0.01;
    } else {
        noise_y_increment = 0.01;
    }
    if (Math.random() < 0.2) {
      noise_x_increment = 0.01;
      noise_y_increment = 0.01;
    }
}
  checkbox_mode = random([1,2,1,2]);
  border_mode = random([1,2,1,1,1,2]);

  color_palette = random(color_palettes);
  noise_index = random(noise_indexes_array);
  let container = createDiv();
  container.style('width', `${divWidth}px`);
  container.style('height', `${divHeight}px`);
  container.style('display', 'grid');
  container.style('grid-template-columns', `repeat(auto-fit, minmax(${checkboxSize}px, 1fr))`);
  container.style('grid-template-rows', `repeat(auto-fit, ${checkboxSize}px)`); 
  container.style('gap', '0px');
  container.style('position', 'absolute');
  container.style('top', '50%');
  container.style('left', '50%');
  container.style('transform', 'translate(-50%, -50%)');
  
  let cols = Math.floor(divWidth / checkboxSize);
  let rows = Math.floor(divHeight / checkboxSize);
  
  for (let i = 0; i < rows * cols; i++) {
    const accentColor = color_palette[round(map(noise(parseInt(i / cols) / noise_index[0], (i % cols) / noise_index[1]), 0, 1, 0, color_palette.length - 1))];
    
    const customCheckbox = createCustomCheckbox(accentColor,checkboxSize,i);

    customCheckbox.style.transformOrigin = 'top left';
    customCheckbox.style.margin = '0';
    customCheckbox.style.padding = '0';

    checkbox_toggles[i] = 0; 
    checkboxes.push([customCheckbox, parseInt(i / cols) / noise_index[0], (i % cols) / noise_index[1]]);
    container.child(customCheckbox);
  }
}


function draw(){
noise_index_x += noise_y_increment;
noise_index_y += noise_y_increment;
let checkbox_index = 0;
checkboxes.forEach(item => {
   
  let x = item[1]*checkboxSize*10;
  let y = item[2]*checkboxSize*10;
  if(checkbox_mode==1) {
    item[0].style.backgroundColor = color_palette[round(map(noise(item[1]+noise_index_x,item[2]+noise_index_y),0,1,0,color_palette.length-1))];
  }else if (checkbox_mode==2) {
  item[0].style.backgroundColor = color_palette[round(map(noise(item[1]+noise_index_x+dist(checkboxSize*(divWidth/checkboxSize)/2,checkboxSize*(divHeight/checkboxSize)/2,x*checkboxSize,y*checkboxSize)/1022,item[2]+noise_index_y),0,1,0,color_palette.length-1))];
  
}
  let checkbox_pos_x = item[0].getBoundingClientRect().x;
  let checkbox_pos_y = item[0].getBoundingClientRect().y;

  if (dist(mouseX, mouseY, checkbox_pos_x, checkbox_pos_y)<checkboxSize*1) {
    if (frameCount - checkbox_toggles[checkbox_index]>20) {
      if (mouseIsPressed) {
        item[0].checked = !item[0].checked; 
      checkbox_toggles[checkbox_index] = frameCount;
      }
    
    }
  }
  checkbox_index+=1;
});

if (frameCount==12) {
  $fx.preview();
  }
}



function mouseMoved(){
  mouse_mode = true;
}



function createCustomCheckbox(accentColor, checkbox_size, checkbox_index) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.style.width = `${checkbox_size}px`;
  checkbox.style.height = `${checkbox_size}px`;
  checkbox.style.border = `1px solid ${accentColor}`;
  if (border_mode==1) {
  checkbox.style.borderRadius = '1px';
  }else if (border_mode==2) {
  checkbox.style.borderRadius = `${parseInt(checkbox_size)}px`;
  }
  checkbox.style.appearance = 'none';
  checkbox.style.outline = 'none';
  checkbox.style.cursor = 'pointer';
  checkbox.style.position = 'relative';
  checkbox.style.display = 'flex';
  checkbox.style.alignItems = 'center';
  checkbox.style.justifyContent = 'center';
  checkbox.style.backgroundColor = 'transparent';

  if (noise(checkbox_index/12)<0.6) {
  checkbox.checked = true;
  }else{
  checkbox.checked = false;

  }

  checkbox.onchange = function() {
      this.style.backgroundColor = this.checked ? `${accentColor}` : 'transparent';
  };

  checkbox.style.backgroundColor = checkbox.checked ? accentColor : 'transparent';

  const style = document.createElement('style');
  style.textContent = `
      @font-face {
          font-family: 'check_font';
          src: url('font.ttf') format('truetype');
      }
      input[type="checkbox"]:checked {
          background-color: ${accentColor};
      }
      input[type="checkbox"]:checked::before {
          content: "✔";
          font-family: 'check_font';
          color: #242424;
          font-size: ${checkbox_size / 1.75}px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
      }
      input[type="checkbox"]::before {
          content: "";
      }
  `;
  document.head.appendChild(style);

  return checkbox;
}


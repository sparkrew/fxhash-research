// FXHASH vars
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// Features

// BEES
var bees = false;
if (fxrand()>0.6){bees = true}

// Poppies
var poppies = false
if (fxrand()>0.8){poppies = true}

// Additional attributes
function randomRGBA() {
  h = 120 + fxrand()*240
  s = 0.3+fxrand()*0.7
  l = 0.1+fxrand()*0.3

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;  
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  // let mx = 220/Math.max(r, g, b)
  // if (blur < 2){
  //   mx = 150/Math.max(r, g, b)
  // }
  // r *= mx
  // g *= mx
  // b  *= mx
  


  return [r/255, g/255, b/255, 0.3+fxrand()*0.7]
}
var color = randomRGBA();
console.log('Color', color);

var random_steer_factor = 0.01 + 0.05*(fxrand()) 
var constant_steer_factor = 0.1 + fxrand()-0.5 
var speed_factor = 0.01*fxrand();
var min_speed =  0.003*fxrand();
var max_size = 2 + 10*fxrand();
var sense_radius = 0.05

//----------------------
// defining features
//----------------------
window.$fxhashFeatures = {
  "Bees": bees,
  'Poppies': poppies
}
console.log(window.$fxhashFeatures)


// Drawing Canvas
var canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 800;
var ctx = canvas.getContext('2d'); // The drawing context
var canvasImageData = ctx.getImageData(0, 0, 800, 800);

// Rendering Canvas render_canvas
var render_canvas = document.getElementById('render_canvas')
var render_ctx = render_canvas.getContext('2d');


// Handle resize
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}
window.addEventListener('resize', () => {
  console.log('Updating sizes')
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  console.log('sizes', sizes);
  // We want to resize the underlying image thingee
  render_ctx.canvas.width  = window.innerWidth;
  render_ctx.canvas.height = window.innerHeight;
  render_ctx.fillStyle =  'rgba(0, 1, 0, 1)'
  render_ctx.fillRect(0, 0, sizes.width, sizes.height)
})
window.dispatchEvent(new Event('resize')); // Trigger event once to start

// Wait for doubleclick
window.addEventListener('dblclick', () => {
  if(!document.fullscreenElement){
    render_canvas.requestFullscreen()
    console.log('Go Fullscreen')
  }
  else{
    console.log('Leave fullscreen')
    document.exitFullscreen() 
  }
})

// Wait for click (pause/unpause)
var pause = 0
var fps_avg = 60
window.addEventListener('click', (e) => {
  console.log('click', e)
  if(pause==0){
    pause=1
    console.log('FPS', Math.floor(fps_avg))
    console.log('Paused')
  }
  else{
    pause=0
    console.log('Resumed')
  }
})


// Setup for things to draw
var points = []

// Autumn leaves
red_yellows = [(0.1 + fxrand()*0.3 * 255),
  0.6 + fxrand()*0.4,
  0.1 + fxrand()*0.3,
  255]; 

// Grass
for (let i = 0; i < parseInt(60 + fxrand()*200); i++){
  let x = fxrand()
  let y = 1.15 - fxrand()*0.4
  const p = {
        'x': x,
        'y': y,
        'start_y':y,
        'dest_y': y - 0.2 - fxrand()*0.1,
        'speed':fxrand()*0.01 + 0.005, // Grass speed
        'direction':(fxrand())*2*Math.PI, // TODO fix
        'size':4 + fxrand()*3, // Grass size
        'sense_radius':sense_radius,
        'sense_angle':0.2, // << Tweak?
        'color':[0.1+0.3*fxrand(), 0.6+fxrand()*0.4, 0.2+0.3*fxrand(), 1.0], // Greens
        'constant_steer_factor':constant_steer_factor,
        'random_steer_factor':random_steer_factor,
        'update':function (p){
          p['y'] -= p['speed'];
          if (p['y'] < p['dest_y']){p['y'] = p['start_y']}
        }
      }
  points.push(p);
}

// Flowers
for (let i = 0; i < parseInt(3 + fxrand()*10); i++){
  let x = fxrand()
  let y = 1 - fxrand()*0.3
  let dest_y = y - 0.3 - fxrand()*0.1
  let dest_x = x + fxrand()*0.05 - 0.025

  // Stems
  for (let n = 0; n < 10; n++){
    const p = {
      'x': x,
      'x_freq':5 + 5*fxrand(),
      'y': (n/10)*y + (1-n/10)*dest_y,
      'start_x':x,
      'start_y':y,
      'dest_x':dest_x,
      'dest_y': dest_y,
      'speed':0.01, // stem speed
      'direction':(fxrand())*2*Math.PI,
      'size':4 + fxrand()*3,
      'sense_radius':sense_radius,
      'sense_angle':0.2, // << Tweak?
      'color':[1,0.6+fxrand()*0.4,0.1 + fxrand()*0.3,1],
      'constant_steer_factor':constant_steer_factor,
      'random_steer_factor':random_steer_factor,
      'update':function (p){
        let frac = (p['dest_y']-p['y']) / (p['dest_y'] - p['start_y'])
        p['y'] -= p['speed'];
        if (p['y'] < p['dest_y']){
          p['y'] = p['start_y']
        }
        p['x'] =  p['start_x'] 
                  + (1-frac) * (p['dest_x'] - p['start_x'])
                  + frac*0.01*Math.sin(3.1415*p['x_freq'] * frac)
      }
    }
points.push(p);
  }

  // Flowers
  let c  = [0.3+0.6*fxrand(), 0.3+0.6*fxrand(), 0.3+0.6*fxrand(), 1.0]
  for (let n = 0; n < 50; n++){
    const p = {
      'x': dest_x,
      'y': dest_y,
      'start_x': dest_x,
      'start_y': dest_y,
      'size':3+fxrand()*3, // Flower size
      'color':c,
      'direction':(fxrand())*2*Math.PI,
      'sense_radius':sense_radius,
      'sense_angle':0.2,
      'constant_steer_factor':constant_steer_factor,
      'random_steer_factor':random_steer_factor,
      'speed':fxrand()*0.01 + 0.005,
      'update':function (p){
        let x = p['x']*canvas.width;
        let y = p['y']*canvas.height;
  
  
        // Sense forward
        var forward_red_index = (p['y'] + p['sense_radius'] * Math.sin(p['direction']))*canvas.height  * (canvas.width * 4) +  
                        (p['x'] + p['sense_radius'] * Math.cos(p['direction']))*canvas.width * 4 
        let sense_forward = canvasImageData.data[Math.floor(forward_red_index)] // << Looking just at red channel, feel free to change
        // Sense left
        var left_red_index = (p['y'] + p['sense_radius'] * Math.sin(p['direction']+p['sense_angle']))*canvas.height  * (canvas.width * 4) +  
                        (p['x'] + p['sense_radius'] * Math.cos(p['direction']+p['sense_angle']))*canvas.width * 4 
        let sense_left = canvasImageData.data[Math.floor(left_red_index)]
        // Sense right
        var right_red_index = (p['y'] + p['sense_radius'] * Math.sin(p['direction']-p['sense_angle']))*canvas.height  * (canvas.width * 4) + 
                        (p['x'] + p['sense_radius'] * Math.cos(p['direction']-p['sense_angle']))*canvas.width * 4 
        let sense_right = canvasImageData.data[Math.floor(right_red_index)] // << Looking just at red channel, feel free to change
  
        // Steering logic
        let random_steer_amout = p['random_steer_factor'] * (fxrand()-0.5);
        let steeramount = p['constant_steer_factor'] + random_steer_amout
        if (sense_forward > sense_left && sense_forward > sense_right){ // Straight ahead
          p['direction'] += 0.0;
        }
        else if (sense_forward < sense_left && sense_forward < sense_right){ // random << TODO better random
          p['direction'] += random_steer_amout
        }
        else if (sense_right > sense_left){p['direction'] -= steeramount;} // Turn Right
        else if (sense_right < sense_left){p['direction'] += steeramount;} // Turn Left
  
  
  
        p['x'] += p['speed'] * Math.cos(p['direction'])
        p['y'] += p['speed'] * Math.sin(p['direction'])
  
        // CIRCLE FOUNTAIN
        if ((p['x']-p['start_x'])**2 + (p['y']-p['start_y'])**2 > 0.1**2){ // <<0.1 flower radius
          p['x'] = p['start_x']
          p['y'] = p['start_y']
        }
      }
    }
    points.push(p);
  }
  
  
}

//BEES
if (bees==true){
  for (let i = 0; i < parseInt(3 + fxrand()*5); i++){
    let x = fxrand()
    let y = 0.6 - fxrand()*0.5
    let freq = 15 + 10*fxrand()
    let speed = 0.003*fxrand()+0.001
  
    const p = {
      'x': x,
      'x_freq':freq,
      'y': y,
      'start_x':x,
      'start_y':y,
      'speed': speed,
      'size':4 + fxrand()*3,
      'color':[1,0.6+fxrand()*0.4,0.1 + fxrand()*0.3,1],
      'update':function (p){
        p['y'] = p['start_y'] +0.02*Math.sin(p['x']*p['x_freq'])
        p['x'] += p['speed']
        p['x'] = p['x'] % 1
      }
    }
    points.push(p);
    const p2 = {
      'x': x-0.005,
      'x_freq':freq,
      'y': y,
      'start_x':x,
      'start_y':y,
      'speed': speed,
      'size':2 + fxrand()*2,
      'color':[1,1, 1,1],
      'update':function (p){
        p['y'] = p['start_y'] +0.02*Math.sin(p['x']*p['x_freq'])
        p['x'] += p['speed']
        p['x'] = p['x'] % 1
      }
    }
    points.push(p2);
  }
}


// POPPIES
if (poppies == true){
  for (let i = 0; i < parseInt(3 + fxrand()*10); i++){
    let x = fxrand()
    let y = 1 - fxrand()*0.3
    let dest_y = y - 0.1 - fxrand()*0.05
    let dest_x = x + fxrand()*0.05 - 0.025
  
    // Stems
    for (let n = 0; n < 10; n++){
      const p = {
        'x': x,
        'x_freq':5 + 5*fxrand(),
        'y': (n/10)*y + (1-n/10)*dest_y,
        'start_x':x,
        'start_y':y,
        'dest_x':dest_x,
        'dest_y': dest_y,
        'speed':0.01, // stem speed
        'direction':(fxrand())*2*Math.PI,
        'size':4 + fxrand()*3,
        'sense_radius':sense_radius,
        'sense_angle':0.2, // << Tweak?
        'color':[0.3+fxrand()*0.4,0.6+fxrand()*0.4,0.3+fxrand()*0.4,1],
        'constant_steer_factor':constant_steer_factor,
        'random_steer_factor':random_steer_factor,
        'update':function (p){
          let frac = (p['dest_y']-p['y']) / (p['dest_y'] - p['start_y'])
          p['y'] -= p['speed'];
          if (p['y'] < p['dest_y']){
            p['y'] = p['start_y']
          }
          p['x'] =  p['start_x'] 
                    + (1-frac) * (p['dest_x'] - p['start_x'])
                    + frac*0.01*Math.sin(3.1415*p['x_freq'] * frac)
        }
      }
  points.push(p);
    }
  
    // Flowers
    let c  = [0.7+0.3*fxrand(), 0.3+0.2*fxrand(), 0.3+0.2*fxrand(), 1.0]
    for (let n = 0; n < 8; n++){
      const p = {
        'x': dest_x,
        'y': dest_y,
        'start_x': dest_x,
        'start_y': dest_y,
        'size':3+fxrand()*3, // Flower size
        'color':c,
        'direction':(fxrand())*2*Math.PI,
        'sense_radius':sense_radius,
        'sense_angle':0.2,
        'constant_steer_factor':constant_steer_factor,
        'random_steer_factor':random_steer_factor,
        'speed':fxrand()*0.01 + 0.005,
        'update':function (p){
          let x = p['x']*canvas.width;
          let y = p['y']*canvas.height;
    
    
          // Sense forward
          var forward_red_index = (p['y'] + p['sense_radius'] * Math.sin(p['direction']))*canvas.height  * (canvas.width * 4) +  
                          (p['x'] + p['sense_radius'] * Math.cos(p['direction']))*canvas.width * 4 
          let sense_forward = canvasImageData.data[Math.floor(forward_red_index)] // << Looking just at red channel, feel free to change
          // Sense left
          var left_red_index = (p['y'] + p['sense_radius'] * Math.sin(p['direction']+p['sense_angle']))*canvas.height  * (canvas.width * 4) +  
                          (p['x'] + p['sense_radius'] * Math.cos(p['direction']+p['sense_angle']))*canvas.width * 4 
          let sense_left = canvasImageData.data[Math.floor(left_red_index)]
          // Sense right
          var right_red_index = (p['y'] + p['sense_radius'] * Math.sin(p['direction']-p['sense_angle']))*canvas.height  * (canvas.width * 4) + 
                          (p['x'] + p['sense_radius'] * Math.cos(p['direction']-p['sense_angle']))*canvas.width * 4 
          let sense_right = canvasImageData.data[Math.floor(right_red_index)] // << Looking just at red channel, feel free to change
    
          // Steering logic
          let random_steer_amout = p['random_steer_factor'] * (fxrand()-0.5);
          let steeramount = p['constant_steer_factor'] + random_steer_amout
          if (sense_forward > sense_left && sense_forward > sense_right){ // Straight ahead
            p['direction'] += 0.0;
          }
          else if (sense_forward < sense_left && sense_forward < sense_right){ // random << TODO better random
            p['direction'] += random_steer_amout
          }
          else if (sense_right > sense_left){p['direction'] -= steeramount;} // Turn Right
          else if (sense_right < sense_left){p['direction'] += steeramount;} // Turn Left
    
    
    
          p['x'] += p['speed'] * Math.cos(p['direction'])
          p['y'] += p['speed'] * Math.sin(p['direction'])
    
          // CIRCLE FOUNTAIN
          if ((p['x']-p['start_x'])**2 + (p['y']-p['start_y'])**2 > 0.03**2){ // <<0.1 flower radius
            p['x'] = p['start_x']
            p['y'] = p['start_y']
          }
        }
      }
      points.push(p);
    }
  }
}



// Array.from({length: n_points}, (x, i) => {
//   const p = {
//     'x': 0.5,
//     'y': 0.5,
//     'speed':fxrand()*speed_factor + min_speed,
//     'direction':(fxrand())*2*Math.PI,
//     'size':fxrand()*max_size,
//     'sense_radius':sense_radius,
//     'sense_angle':0.2, // << Tweak?
//     'color':color,
//     'constant_steer_factor':constant_steer_factor,
//     'random_steer_factor':random_steer_factor,

//   }
//   // Init pattern
//   if (init_pattern == 'center'){
//     p['x'] = fxrand()*0.1 + 0.45;
//     p['y'] = fxrand()*0.1 + 0.45;
//   }
//   else if (init_pattern == 'ring'){
//     let angle = fxrand()*2*Math.PI;
//     let radius = 0.3;
//     p['x'] = Math.sin(angle)*radius + 0.5;
//     p['y'] = Math.cos(angle)*radius + 0.5;
//   }
//   else if (init_pattern == 'random'){
//     p['x'] = (fxrand()-0.5)*0.9 + 0.5;
//     p['y'] = (fxrand()-0.5)*0.9 + 0.5;
//   }
//   return p
// });


// Update points (speed, dir etc)
const update_points = () => {

  // points
  points.map(function (p){
    p['update'](p);
  })
}

// Drawing an individual point
const draw_point = (p) => {
  let x = p['x']*canvas.width;
  let y = p['y']*canvas.height;
  let radius = p['size']
  let color = p['color']
  // TODO colour in various ways
  ctx.fillStyle = 'rgba('+Math.floor(color[0]*255)+', '+Math.floor(color[1]*255)+', '+Math.floor(color[2]*255)+', '+Math.floor(color[3]*255)+')'; // << Alpha changes a lot
  ctx.fillRect(x, y, radius, radius);
}

// Drawing all points
const draw = () => {
  // ctx.clearRect(0, 0, w, h); // Clear
  // Points
  points.map(function (p){
    draw_point(p)
  })
}

// Applying a blur and darken to the canvas as a whole (simulates diffusion)
let fade = '99.5';
let blur = 2;
const post_process = () => {
  ctx.filter = 'blur(' + blur + 'px) brightness('+fade+'%)'; // << Brightness changes a lot
  ctx.drawImage(canvas, 0, 0)
  ctx.filter = "none"
}

// Animate
var lastLoop = new Date();
const tick = () => {
  if (pause == 0){
    post_process() // Process the canvas
    canvasImageData = ctx.getImageData(0, 0, 400, 400); // Update canvasImageData
    update_points(); // Calculate new positions (uses canvasImageData)
    draw(); // Draw the points

    // Draw (square) the drawing canvas to the main render canvas
    if (sizes.width < sizes.height){
      render_ctx.drawImage(canvas, 0, sizes.height/2 - sizes.width/2, sizes.width, sizes.width);
    }
    else{
      render_ctx.drawImage(canvas, sizes.width/2 - sizes.height/2, 0, sizes.height, sizes.height);
    }
  }
  

  // Keep track of fps
  var thisLoop = new Date();
  var fps = 1000 / (thisLoop - lastLoop);
  fps_avg = 0.99*fps_avg + 0.01*fps
  lastLoop = thisLoop;

  // Tick so this repeats forever
  window.requestAnimationFrame(tick) 

}

tick()




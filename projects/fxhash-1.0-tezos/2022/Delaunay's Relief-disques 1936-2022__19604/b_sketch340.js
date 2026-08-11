
var draw_debug = false;
var DRAW_VERTICES = true;
var AXE_HEIGHT = 5;
var object_width = 2000;
var object_height = 1000;
var canvas_width = 0; 
var canvas_height = 0;
var graphics_width = 0;
var graphics_height = 0;
var png_width = 4000;
var png_height = Math.floor(9 * png_width / 16);
var g = null; 

var drawables = [];
var circles = []; 
var backgroundColor;
var default_pixel_density = null;
var planets = [];
var main_circles = []; 
var layer_circles = []; 
var axes = [];
var rings = [];
var min_ring_position = 3;
var mode = null;
var static_start_time = null;
var moon_circles = [];
var moons = [];
var max_try_jupiter = 30;
var jupiter_circles = [];
var jupiter = null;
var orbits_angles_speed = [];
var orbit_iteration = 0;
var orbit_iteration2PI = 0; 
var animate_iteration = 0; 
var orbit_frame_rate = 0;
var X0 = 0;
var Y0 = 0;
var max_level = 0;
var min_level = 0;
var color_debug = 1;
var colormaps_proba = [
    {"proba": 0.15, "colormap": "Rythmes", "colors": colors5},
    {"proba": 0.3, "colormap": "Joie de vivre", "colors": colors6},
    {"proba": 0.5, "colormap": "Relief disque", "colors": colors31},
    {"proba": 0.6, "colormap": "Greece", "colors": colors11b},
    {"proba": 0.65, "colormap": "Chicago", "colors": colors15},
    {"proba": 0.75, "colormap": "Miami", "colors": colors17},
    {"proba": 0.8, "colormap": "Niterói", "colors": colors18},
    {"proba": 0.85, "colormap": "Venezia", "colors": colors22},
    {"proba": 0.90, "colormap": "Marrakech", "colors": colors25},
    {"proba": 0.95, "colormap": "New York", "colors": colors27},
    {"proba": 1.00, "colormap": "Flowers", "colors": colors29}
 ];
var random_colormap = null; 
var base_colors = null;
var colors = null;
var colors2 = null;
var colormap = "";
var chosen_colors = [];
var FRAME_RATE = 30;
orbit_frame_rate = FRAME_RATE * 6 * 60; // 6 * 60
var orbits_angles_speed_min = 1;
var orbits_angles_speed_max = 5;

//-----------------------------------------------------------
//------------- utils ---------------------------------------
//-----------------------------------------------------------
function cloneColor(){
    
    let cloned_colors = {}
    cloned_colors["cumweight"] = base_colors["cumweight"];
    cloned_colors["bases"]=[];

    for(let i = 0; i < base_colors["bases"].length; i++){
        cloned_colors["bases"].push(base_colors["bases"][i]);
    }

    for(let i = 0; i < base_colors["bases"].length; i++){
        let base = base_colors["bases"][i];
        cloned_colors[base]={};
        cloned_colors[base]["weight"] = base_colors[base]["weight"];
        cloned_colors[base]["cumweight"] = base_colors[base]["cumweight"];
        cloned_colors[base]["colors"] = [];
        
        for(let j = 0; j < base_colors[base]["colors"].length; j++){
            let c = [
                base_colors[base]["colors"][j][0],
                base_colors[base]["colors"][j][1],
                base_colors[base]["colors"][j][2]
            ];
            cloned_colors[base]["colors"].push(c);
        };
        
        cloned_colors[base]["cumweights"] = [];
        for(let j = 0; j < base_colors[base]["cumweights"].length; j++){
            cloned_colors[base]["cumweights"].push(base_colors[base]["cumweights"][j]);
        };
    }
    return cloned_colors;
}

function randomInt(first, last){
    return Math.floor(fxrand() * (last-first + 1)) + first;
}

function randomFloat(first, last){
    return fxrand() * (last-first) + first;
}

random_colormap = randomFloat(0, 1);
for(const element of colormaps_proba){
    if(random_colormap <= element["proba"]){
        colormap = element["colormap"];
        console.log(colormap);
        base_colors = element["colors"];
        colors = cloneColor();
        break;
    }
}

function rotation(x, y, angle){
    if(x==X0 && y==Y0){
        return [X0, Y0];
    }
    let ca = Math.cos(angle);
    let sa = Math.sin(angle);
    let x2 = (x - X0) * ca - (y - Y0) * sa + X0;
    let y2 = (x - X0) * sa + (y - Y0) * ca + Y0;
    return [x2, y2];
}

window.$fxhashFeatures = {
    "colormap": colormap,
}

function keyPressed(){
    if((key == 'p') || (key == 'P')){
        coef = png_width / object_width;
        pixelDensity(1);
        g_png = createGraphics(png_width, png_height);
        g_png.background(backgroundColor);
        g_png.rectMode(CENTER);
        draw_graphics(g_png, coef);
        save(g_png, 'artgorithm_experiment17', 'png');
        pixelDensity(default_pixel_density);
    }
}

//-----------------------------------------------------------
//------------- colors --------------------------------------
//-----------------------------------------------------------
function removeColor(base, indice){
    //remove colors already chosen.
    let weight = colors[base]["cumweights"][indice];
    if(indice > 0){
        weight -= colors[base]["cumweights"][indice-1];
    }
    if(indice < colors[base]["cumweights"].length-1){
        for(let i = indice+1; i<colors[base]["cumweights"].length; i++){
            colors[base]["cumweights"][i] = colors[base]["cumweights"][i] - weight;
        }
    }
    colors[base]["weight"] = colors[base]["weight"] - weight;
    colors[base]["cumweights"].splice(indice, 1);
    colors[base]["colors"].splice(indice, 1);
}

function randomColor(base="", excluded=""){
    let color_base = base;    
    if(color_base == "" || (base != "" && colors[base]["cumweights"].length==0)){
        var do_it_base = true;
        let k = 0;
        while(do_it_base){
            k += 1;
            let r = fxrand() * colors["cumweight"];
            for (const name of colors["bases"]){
                if(r <= colors[name]["cumweight"]){
                    color_base = name;
                    if(colors[name]["weight"] > 0 && (excluded == "" || color_base != excluded)){
                        do_it_base = false;
                    }
                    break;
                }
            }
            if(k > 200){
                do_it_base = false;
                color_base = colors["bases"][0];
            }
        }
    }
    let do_it = true;
    let k = 0; 
    while(do_it){
        k += 1;
        let r = fxrand() * colors[color_base]["weight"];
        for(let i = 0; i < colors[color_base]["cumweights"].length; i++){
            if(r <= colors[color_base]["cumweights"][i]){
                let c = colors[color_base]["colors"][i]
                let chosen = false;
                for(let k = 0; k < chosen_colors.length; k++){
                    if((c[0] == chosen_colors[k][0])&&(c[1] == chosen_colors[k][1])&&(c[2] == chosen_colors[k][2])){
                        chosen = true;
                    }
                }
                if(chosen && k < 100) break;
                if(!chosen){
                    chosen_colors.push(c);
                    removeColor(color_base, i);
                }
                c.push(255);
                let color_output = color(c);
                return [color_output, color_base];
            }
        }
    }
}

//------------------------------------------------------------------------
//-----------------      classes     -------------------------------------
//------------------------------------------------------------------------

class Drawable {

    constructor(x, y, angle_radian, level, draft=false){
        this.draft = draft;
        this.x = x;
        this.y = y;
        this.level = level;
        this.orbit = -1;
        this.angle_radian = angle_radian;
        this.is_planet = false;
        if(!draft){
            drawables.push(this);
            this.id = drawables.length - 1;
        }else{
            this.id = -1;
        }
        this.set_type();
        this.drawed = false;
        this.xyr = null;
    }
    set_type(){
        this.type = "Drawable";
    }

    get_angle_radian(){
        if((orbit_iteration == 0) || this.orbit < 0 ){
            return this.angle_radian;
        }
        return this.angle_radian + orbit_iteration2PI * (orbits_angles_speed[this.orbit] / orbit_frame_rate);
    }


    planet_center_radius(){
        if((this.xyr == null)||(orbit_iteration!=0)){
            this.xyr = rotation(this.x, this.y, this.get_angle_radian());        
            this.xyr.push(this.radius);
        }
        return this.xyr;
    }

    draw(g, level, coef){
    }

    is_drawable(level, only_drawed=true){
        if(this.level != level){ 
            return false;}
        if(!this.is_planet){
            return true;
        }
        if(this.drawed){
            return true;
        }
        let p = this.planet_center_radius();
        let xyr = null;
        let xi = 0;
        let yi = 0;
        let ri = 0;
        let d2 = 0;
        let r2 = 0;

        for(let i=0;i<planets.length;i++){
            if(only_drawed && !planets[i].drawed) continue;
            if(planets[i].id != this.id){
                xyr = planets[i].planet_center_radius();
                xi = xyr[0];
                yi = xyr[1];
                ri = xyr[2];
                d2 = (xi - p[0]) * (xi - p[0]) + (yi - p[1]) * (yi - p[1]);
                r2 = (ri + p[2])*(ri + p[2]);
                if(d2 < r2 - 0.5){
                    return false;
                }
            }
        }
        return true;
    }
    ad_as_planet(){
        planets.push(this);
    }
}

class Axe extends Drawable {
    
    constructor(x0, y0, angle, circles, level, no_circle){
        super(x0, y0, angle * Math.PI, level, false)
        let w0 = 0;
        let previous_radius = 0;
        if(circles[0] == 0){
            w0 = x0;
            previous_radius = 0;
        }else{
            previous_radius = main_circles[circles[0]-1].radius;
            w0 = x0 + previous_radius;
        }
        
        let last_circle = circles[circles.length-1];
        let w1 = x0 + main_circles[last_circle].radius;
        this.width = w1 - w0;
        this.circles = circles;
        this.angle = angle; 
        this.x0 = x0; 
        this.y0 = y0;
        this.no_circle = no_circle;
        this.list_dcircles = [];
        if(!this.no_circle){
            for(let i=0; i<circles.length; i++){
                let new_radius = main_circles[circles[i]].radius;
                if(!main_circles[circles[i]].ring){
                    let x = x0 + previous_radius + 0.5 * (new_radius - previous_radius);
                    let r =(new_radius - previous_radius)/2;
                    let dcircle = new DCircle(x, this.y0, r, this.angle_radian, this.level);
                    dcircle.set_orbit(main_circles[circles[i]].orbit);
                    this.list_dcircles.push(dcircle);
                }
                previous_radius = new_radius;
            }
        }
    }

    draw(g, level, coef=1){
        for(let i=0; i<this.list_dcircles.length;i++){
            this.list_dcircles[i].draw(g, level, coef);
        }    
    }
}

class HalfCircle extends Drawable {

    constructor(x, y, radius, version, angle_radian, level, color, is_moon=false){
        super(x, y, angle_radian, level);
        this.radius = radius;
        this.version = version;
        if(color==null){
            let c = randomColor();
            this.color = c[0];
            this.color_base = c[1];
        }else{
            this.color = color[0];
            this.color_base = color[1];
        }
        this.is_moon = is_moon;
        this.set_angles();
    }

    set_type(){
        this.type = "HalfCircle";
    }

    set_angles(){
        if(this.version == "up"){
            if(this.is_moon){
                this.angle_start = 1.5 * Math.PI;
                this.angle_stop = 2.5 * Math.PI;
            }else{
                this.angle_start = Math.PI + this.angle_radian;
                this.angle_stop = 2 * Math.PI + this.angle_radian;
            }
        }else{
            if(this.is_moon){
                this.angle_start = 0.5 * Math.PI;
                this.angle_stop = 1.5 * Math.PI;
            }else{
                this.angle_start = 0 + this.angle_radian;
                this.angle_stop = Math.PI + this.angle_radian;
            }
        }
    }
    
    get_angle_start(){
        if(orbit_iteration == 0 || this.orbit < 0 || this.is_moon){
            return this.angle_start;
        }
        return this.angle_start + orbit_iteration2PI * (orbits_angles_speed[this.orbit] / orbit_frame_rate);
    }

    get_angle_stop(){
        if(orbit_iteration == 0 || this.orbit < 0 || this.is_moon){
            return this.angle_stop;
        }
        return this.angle_stop + orbit_iteration2PI * (orbits_angles_speed[this.orbit] / orbit_frame_rate);
    }


    draw(g, level, coef=1){
        if(this.is_drawable(level)){
            let c = this.planet_center_radius();
            g.fill(this.color);
            g.noStroke();
            g.arc(
                coef * c[0],
                coef * c[1],
                coef * this.radius * 2,
                coef * this.radius * 2,
                this.get_angle_start(),
                this.get_angle_stop()
            );
            this.drawed = true;
        }
    } 
}

class ArcCircle extends Drawable {
    constructor(x, y, radius, angle_start, angle_stop, level, color){
        super(x, y, 0, level);
        this.radius = radius;
        this.angle_start = angle_start;
        this.angle_stop = angle_stop;
        if(color==null){
            let c = randomColor();
            this.color = c[0];
            this.color_base = c[1];
        }else{
            this.color = color[0];
            this.color_base = color[1];
        }
    }
    set_type(){
        this.type = "ArcCircle";
    }    
    get_angle_start(){
        if(orbit_iteration == 0 || this.orbit < 0 ){
            return this.angle_start;
        }
        return this.angle_start + orbit_iteration2PI * (orbits_angles_speed[this.orbit] / orbit_frame_rate);
    }

    get_angle_stop(){
        if(orbit_iteration == 0 || this.orbit < 0 ){
            return this.angle_stop;
        }
        return this.angle_stop + orbit_iteration2PI * (orbits_angles_speed[this.orbit] / orbit_frame_rate);
    }

    draw(gr, level, coef=1){
        if(this.is_drawable(level)){
            gr.fill(this.color);
            gr.noStroke();
            gr.arc(coef * this.x, coef * this.y, coef * this.radius * 2, coef * this.radius * 2, this.get_angle_start(), this.get_angle_stop());
            this.drawed = true;
        }
    } 
}

class Circle extends Drawable {
    constructor(x, y, angle_radian, radius, level, excluded_color, draft){
        super(x, y, angle_radian, level, draft);
        let c = randomColor("", excluded_color);
        this.color = c[0];
        this.color_base = c[1];
        this.radius = radius;
        this.ring = false;
    }
    set_type(){
        this.type = "Circle";
    }
    draw(gr, level, coef){
        if(this.is_drawable(level)){
            let c = this.planet_center_radius();
            gr.fill(this.color);
            gr.noStroke();
            gr.circle(coef * c[0], coef * c[1], coef * this.radius * 2);
            this.drawed = true;
        }
    }
}

class LayerCircles extends Drawable {
    constructor(circle, angles){
        super(circle.x, circle.y, 0, circle.level);
        this.circle = circle;
        this.arc_circles = [];
        if(angles.length>1){
            for(let i=0;i<angles.length;i++){
                let start = angles[i];
                let stop = 0;
                if(i==angles.length-1){ 
                    stop = angles[0] + Math.PI * 2;
                }else{
                    stop = angles[i+1];
                }
                let arc_circle = new ArcCircle(circle.x, circle.y, circle.radius, start, stop, circle.level);
                arc_circle.orbit = circle.orbit;
                this.arc_circles.push(arc_circle);
                
            }
        }
    }

    draw(g, level, coef=1){
        if(this.is_drawable(level)){
            if(this.arc_circles.length==0){
                this.circle.draw(g, level, coef);
            }
            else{
                for(let i = 0; i<this.arc_circles.length; i++){
                    this.arc_circles[i].draw(g, level, coef);
                }
            }
            this.drawed = true;
        }
    }
}


class DCircle extends Drawable {
    constructor(
        x, y, radius, angle_radian, level,
        color1=null, color2=null, draft=false, is_moon=false
    ){
        super(x, y, angle_radian, level, draft);
        this.radius = radius;
        this.half_circle1 = new HalfCircle(x, y, radius, "up", angle_radian, level, color1, is_moon);
        this.half_circle2 = new HalfCircle(x, y, radius, "down", angle_radian, level, color2, is_moon);
        this.is_planet = true;
        if(this.draft==false){
            this.ad_as_planet();
        }
    }
    set_orbit(orbit){
        this.orbit = orbit;
        this.half_circle1.orbit = orbit;
        this.half_circle2.orbit = orbit;
    }
    set_type(){
        this.type = "DCircle";
    }
    draw(gr, level, coef){
        if(this.is_drawable(level)){
            this.half_circle1.draw(gr, level, coef);
            this.half_circle2.draw(gr, level, coef);
            this.drawed = true;
        }
    }

    draw_debug(gr, level, coef){
            let xyr = this.planet_center_radius();
            gr.stroke('green');
            gr.noFill();
            gr.strokeWeight(5);
            gr.circle(xyr[0] * coef, xyr[1] * coef, xyr[2] * 2 * coef);
    }

}

class Moon extends DCircle {
    constructor(x, y, radius, angle_radian, level, color1, color2){
        super(x, y, radius, angle_radian, level, color1, color2, true, true);
    }

    set_type(){
        this.type = "Moon";
    }

    set_orbit(orbit){
        this.orbit = orbit;
        this.half_circle1.orbit = orbit;
        this.half_circle2.orbit = orbit;
    }

    undraft(){
        this.draft = false;
        drawables.push(this);
        this.id = drawables.length - 1;
        this.ad_as_planet();
    }

    draw(gr, level, coef){
        if(this.is_drawable(level)){
            this.half_circle1.draw(gr, level, coef);
            this.half_circle2.draw(gr, level, coef);

            this.drawed = true;
        }
    }
}

class Jupiter extends Drawable {
    constructor(x, y, radius, angle_radian, level, draft){
        super(x, y, angle_radian, level, draft);
        this.angle_radian = angle_radian;
        this.radius = radius;
        if(this.draft==false){
            this.ad_as_planet();
        }
        this.circles = [];
        
    }
    
    set_type(){
        this.type = "Jupiter";
    }

    set_orbit(orbit){
        this.orbit = orbit;
        for(let i = 0; i < this.circles.length; i++){
            this.circles[i].orbit = orbit;
        }
    }

    undraft(){
        this.draft = false;
        drawables.push(this);
        this.id = drawables.length - 1;
        this.ad_as_planet();
        let r = this.radius / 5;
        let kernel = new Circle(this.x, this.y, this.angle_radian, r/2, -1,"",true);
        this.circles.push(kernel);
        let previous_base = kernel.color_base;
        for(let i=1;i<=4;i++){
            let layer = new Circle(this.x, this.y, this.angle_radian, r/2 + i*r,-1, previous_base , true);
            this.circles.push(layer);
            previous_base = layer.color_base;
        }
        let border = new Circle(this.x, this.y, this.angle_radian, this.radius,-1, previous_base, true);
        this.circles.push(border);
    }

    draw(gr, level, coef){
        if(this.is_drawable(level)){
            
            for(let i=this.circles.length-1; i>=0; i--){
                this.circles[i].draw(gr, level, coef);
            }
            this.drawed = true;
        }
    }
}

//-----------------------------------------------------------
//-------------- p5js dynamic functions ---------------------
//-----------------------------------------------------------
function windowResized(){
    canvas_height = windowHeight;
    if(windowWidth < 16 * canvas_height / 9){
        canvas_width = windowWidth;
        canvas_height = Math.floor( (9 * canvas_width) / 16);
    }else{
        canvas_width = (16 * canvas_height) / 9;
    }
    resizeCanvas(canvas_width, canvas_height, P2D);
    graphics_width = canvas_width;
    graphics_height = canvas_height;
    coef = graphics_width / object_width;
    g = createGraphics(graphics_width, graphics_height);
    g.noSmooth();
    g.background(backgroundColor);
    g.rectMode(CENTER);
    
    draw_graphics(g, coef);
    image(g, 0, 0);
}

function setup() {
    default_pixel_density = pixelDensity();
    canvas_height = windowHeight;
    if(windowWidth < 16 * canvas_height / 9){
        canvas_width = windowWidth;
        canvas_height = Math.floor( (9 * canvas_width) / 16);
    }else{
        canvas_width = (16 * canvas_height) / 9;
    }
    if(isFxpreview){
        canvas_width = Math.min(windowHeight, windowHeight);
        canvas_height = canvas_width;
        graphics_height = canvas_height;
        graphics_width = Math.floor((canvas_height * 16) / 9);
    }else{
        graphics_width = canvas_width;
        graphics_height = canvas_height;
    }

    canvas = createCanvas(canvas_width, canvas_height);
    object_width = Math.max(graphics_width, object_width);
    object_height = Math.floor((9 * object_width) / 16);

    coef = graphics_width / object_width;
    global_setup();
    draw_all();
}

function global_setup() {
    frameRate(FRAME_RATE);
    chosen_colors = [];
    g = createGraphics(graphics_width, graphics_height);
    g.noSmooth();
    c = randomColor();
    backgroundColor = c[0];
    g.background(backgroundColor);
    g.rectMode(CENTER);
    objects_setup();
}

function randomCircleList(n_circle){
    let c1 = randomInt(1, n_circle-1);
    let c2 = randomInt(1, n_circle-1);
    if((Math.abs(c2-c1) + 1 < n_circle / 2) && randomFloat(0, 1)<2/3){
        return randomCircleList(n_circle);
    }
    circles = []
    for(let i = Math.min(c1, c2); i <= Math.max(c1, c2); i++){
        circles.push(i);
    }
    return circles;
}

function randomAngleAxe(){
    epsilon = 1 / 12;
    n_angle = randomInt(7, 10);

    angles = [];
    for(let i=0; i<n_angle; i++){
        let not_found = true;
        while(not_found){
            let a = randomFloat(0,2);
            for(let j=0; j <= 8; j++){
                if(Math.abs(a-j/4)< epsilon){
                    a = j / 4;
                    if(a == 2) a=0;
                    break;
                }
            }
            let ok = true;
            for(let j=0; j < angles.length; j++){
                if (Math.abs(a - angles[j])< epsilon || Math.abs(a - angles[j] - 2 * Math.PI) < epsilon){
                    ok = false;
                    break;
                }
            }
            if(ok){
                angles.push(a);
                not_found = false;
            }
        }
    }
    angles = angles.sort(function(a,b) { return a - b; });
    return angles;
}

function objects_setup() {

    n_main_circles = randomInt(9, 13);
    min_main_diameter = Math.sqrt(object_width * object_width + object_height * object_height);
    max_main_diameter = min_main_diameter * (1 + 1 / n_main_circles);
    main_diameter = randomFloat(min_main_diameter, max_main_diameter);
    let a = ( main_diameter / (n_main_circles) ) / 2;
    changes = [0];
    for(let i = 0; i < 8; i++){
        indice = randomInt(0, n_main_circles-1);
        if(!changes.includes(indice)){
            changes.push(indice);
        }
        if((i>=4 && changes.length>=2) || (changes.length>=4)){
            break;
        }
    }
    deltas = [];
    let sum_deltas_dispo = main_diameter - a * (n_main_circles);
    let max_delta = sum_deltas_dispo / (n_main_circles);
    delta0 = randomFloat(max_delta / (2 * changes.length), 3 * max_delta / (2 * changes.length));
    sum_deltas_dispo -= delta0 * (n_main_circles+1);
    deltas.push(delta0);
    let delta = 0;
    for(let i=1; i < changes.length -1; i++){
        max_delta = sum_deltas_dispo / (n_main_circles - changes[i]);
        delta = randomFloat(max_delta / (2 * (changes.length-i)), 3 * max_delta / (2 * (changes.length-i)));
        deltas.push(delta);
        sum_deltas_dispo -= delta * (n_main_circles - changes[i]);
    }
    delta = sum_deltas_dispo / (n_main_circles - changes[changes.length-1]);
    deltas.push(delta);
    sum_deltas_dispo -= delta * (n_main_circles - changes[changes.length-1]);
    main_circles = [];
    drawables = [];
    X0 = object_width / 2;
    Y0 = object_height / 2;
    delta = 0;
    let d0 = 0;
    let k = 0;
    let excluded_color_base = "";
    for(let i = 0; i < n_main_circles; i++){
        if(k < changes.length && changes[k] == i){
            delta += deltas[k];
            k += 1;
        
        }
        d0 = d0 + a + delta;
        let circle = new Circle(X0, Y0, 0,  d0 / 2, i, excluded_color_base);
        circle.orbit = i;
        excluded_color_base = circle.color_base;
        main_circles.push(circle);
    } 
    max_level = main_circles[main_circles.length-1].level;
    min_level = 0;

    let n_rings = randomInt(1, 3);
    let color_rings = randomColor("");
    let ring_thickness = (main_circles[min_ring_position].radius - main_circles[min_ring_position-1].radius) / 4;
    rings = [];

    for(let i = 0; i< n_rings; i++){
        let position = randomInt(min_ring_position, main_circles.length-2);
        if(!rings.includes(position)){
            if(position == 4 && rings.includes(5)) continue;
            if(position == 5 && rings.includes(4)) continue;
            rings.push(position);
        }
    }
    rings.sort(function(a,b) { return a - b; });
    rings.push(main_circles.length-2);

    for(let p = rings.length - 1; p>=0; p--){
        let position = rings[p];
        let level = main_circles[position].level;
        let radius = main_circles[position].radius;
        let ring = null;
        let thickness = ring_thickness;
        if(p == rings.length - 1){
            thickness *= 2;
            ring = new Circle(X0,Y0, 0, radius + thickness, level + 1, main_circles[position].color_base);
        }else{
            ring = new Circle(X0,Y0, 0, radius + thickness, level + 1, "");
            ring.color = color_rings[0];
            ring.color_base = color_rings[1];
        }
        ring.ring = true;
        main_circles.splice(position+1, 0, ring);
        for(let i = position+2; i< main_circles.length; i++){
            main_circles[i].radius += thickness;
            main_circles[i].level += 1;
            main_circles[i].orbit = main_circles[i].level;            
        }
    }
    max_level = main_circles[main_circles.length-1].level;

    for(let i=0; i < max_level;i++){
        orbits_angles_speed.push(randomInt(orbits_angles_speed_min, orbits_angles_speed_max));
    }
    angles_axes = randomAngleAxe();

    axes = []
    let n_axes_no_circle_max = angles_axes.length * 0.25;
    let n_axes_no_circle = 0;
    for(let i = 0; i < angles_axes.length; i++){
        let list_circles = randomCircleList(n_main_circles);
        let no_circle = randomFloat(0, 1) < 0.25;
        if(no_circle) n_axes_no_circle++;
        if(n_axes_no_circle > n_axes_no_circle_max){
            no_circle = false;
        }
        let axe = new Axe(X0,Y0, angles_axes[i], list_circles, -1, no_circle);
        axes.push(axe);
    }

    layer_circles = []
    for(let i = 0; i < main_circles.length; i++){
        let angles = []
        if(!main_circles[i].ring){
            for(let j = 0; j<axes.length; j++){
                let axe = axes[j];
                if(axe.circles.includes(i)){
                    angles.push(axe.angle_radian);
                }
            }
        }  
        lc = new LayerCircles(main_circles[i], angles);
        layer_circles.push(lc); 
    }    
    
    moon_circles = [4, 5];
    if(main_circles[4].ring){
        if(main_circles[6].ring){
            moon_circles = [7, 8];
        }else if(main_circles[7].ring){
            moon_circles = [6, 7];
        }else{
            moon_circles = [5, 6];
        }
    }
    if(main_circles[5].ring){
        moon_circles = [6, 7];
    }
    let x_moon = X0 + 0.5 * (main_circles[moon_circles[1]].radius + main_circles[moon_circles[0]-1].radius);
    let radius_moon = 0.5 * (main_circles[moon_circles[1]].radius - main_circles[moon_circles[0]-1].radius);
    let color1 = randomColor("grey");
    let color2 = randomColor("white");
    moons = [];
    
    
    for(let i = 0; i < 4; i++){
        let angle_center = Math.PI * ( 1 / 4 + i / 2 )
        let angle_min = angle_center - Math.PI * (1/4 - 1/9);
        let angle_max = angle_center + Math.PI * (1/4 - 1/9);
        let k = 10;
        let angle = 0;
        let moon = null;      
    
        while(k > 0){
            angle = randomFloat(angle_min, angle_max);
            moon = new Moon(x_moon, Y0, radius_moon, angle, -1, color1, color2);
            
            if(moon.is_drawable(-1, false)){
                moon.undraft();
                moon.set_orbit(main_circles[moon_circles[1]].orbit);
                moons.push(moon);

                break;
            }
            k--;
            moon = null;
        }
        if(i == 0 || i== 2){
            let color_tmp = color2;
            color2 = color1;
            color1 = color_tmp;
        }
    }

    jupiter_circles = [];
    let possible_jupiter_circles = [];    
    let test_7 = true;
    for(let i = 4; i <= 7; i++){
        if(i==7&&!test_7) continue;
        if(!main_circles[i].ring&&!main_circles[i+1].ring&&!main_circles[i+2].ring){
            possible_jupiter_circles.push([i, i+1, i+2]);
            if(i==4) test_7 = false;
        }        
    }

    if(possible_jupiter_circles.length > 0){
        let p = randomInt(0, possible_jupiter_circles.length-1);
        jupiter_circles = possible_jupiter_circles[p];

        let n_try_jupiter = 0;

        let rayon_max = main_circles[jupiter_circles[jupiter_circles.length-1]].radius - main_circles[jupiter_circles[0]-1].radius;
        let x = X0 + 0.5 * (main_circles[jupiter_circles[jupiter_circles.length-1]].radius + main_circles[jupiter_circles[0]-1].radius);
        while(n_try_jupiter < max_try_jupiter){
            let rayon = 0.9 * rayon_max / 2;
            let  angle = randomFloat(0, 2 * Math.PI);
            jupiter = new Jupiter(x, Y0, rayon, angle, -1, true);
            jupiter.is_planet = true;
            if(jupiter.is_drawable(-1, false)){
                jupiter.undraft();
                jupiter.set_orbit(main_circles[jupiter_circles[1]].orbit);
                break;
            }else{
                jupiter = null;
            }
            n_try_jupiter++;
        }
    }

}


function draw_graphics(gr, coef){

    for(let i = layer_circles.length-1; i >= 0; i--){
        layer_circles[i].draw(gr, layer_circles[i].level, coef);
    }
    
    for(let i = 0; i < axes.length; i++){
        axes[i].draw(gr, -1, coef);
    } 

    for(let i=0; i  < moons.length; i++){
        moons[i].draw(gr, -1, coef);
    }

    if(jupiter!=null){
        jupiter.draw(gr, -1, coef);
    }
}

function draw(){
    draw_all();
}

function draw_all(){
    if(mode == "ANIMATE"){
        
        orbit_iteration += 1;
        orbit_iteration2PI = orbit_iteration * 2 * Math.PI;
        draw_graphics(g, coef);
        image(g, 0, 0);
        if(orbit_iteration == orbit_frame_rate){
            mode = null;
            for(let i=0; i< orbits_angles_speed.length;i++){
                orbits_angles_speed[i] = randomInt(orbits_angles_speed_min, orbits_angles_speed_max);
            }
        }

    }
    else if(mode == "STATIC"){
        let now = Date.now();
        if(now - static_start_time>30000){
            animate_iteration++;
            mode = "ANIMATE";
            orbit_iteration = 0;
            orbit_iteration2PI = 0;
            static_start_time = Date.now();
        }
    }
    else{ 
        draw_graphics(g, coef);
        if(isFxpreview){
            image(g, -graphics_width/4, 0);
            frameRate(1);
            fxpreview();
        }else{
            image(g, 0, 0);
            mode = "STATIC";
            static_start_time = Date.now();
        }
    }
}

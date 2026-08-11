window.addEventListener('resize', () => {
    let canvas = document.getElementById('defaultCanvas0');
    let size = (window.innerWidth > window.innerHeight) ? '100vh' : '100vw';

    canvas.style.width = size;
    canvas.style.height = size;
    canvas.firstChild.style.width = size;
    canvas.firstChild.style.height = size;
});


let ancho_canvas = 1024,
    alto_canvas = ancho_canvas,
    margen = 112,

    dimensiones_grid = ancho_canvas - margen*2,
    resolucion_grid = parseInt(fxrand()*19)+1,
    total_bloques = resolucion_grid * resolucion_grid,
    celda_grid = dimensiones_grid / resolucion_grid;

let pool_paletas = [
    ["#5b5b5b", "#7d7c7a", "#c9c19f", "#edf7d2", "#edf7b5"],
    ["#ccd5ae", "#e9edc9", "#fefae0", "#faedcd", "#d4a373"],
    ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"],
    ["#ffcdb2", "#ffb4a2", "#e5989b", "#b5838d", "#6d6875"],
    ["#ffb5a7", "#fcd5ce", "#f8edeb", "#f9dcc4", "#fec89a"],
    ["#353535", "#3c6e71", "#ffffff", "#d9d9d9", "#284b63"],
    ["#8e9aaf", "#cbc0d3", "#efd3d7", "#feeafa", "#dee2ff"],
    ["#6b9080", "#a4c3b2", "#cce3de", "#eaf4f4", "#f6fff8"],
    ["#032639", "#045d7e", "#0e7ea8", "#5faec0", "#66c6d0"],
    ["#0b050a", "#302f30", "#575149", "#8e735d", "#a89787"],
    ["#f8f1dd", "#cab795", "#aa8157", "#875a37", "#6e4431"],
    ["#1e1227", "#692363", "#a7296f", "#d95da4", "#e798b2"],
    ["#fdfcfd", "#f3dffa", "#e59bf6", "#c15eff", "#731bf6"],
    ["#e3cf9a", "#c1a27d", "#b98164", "#aa4b54", "#b81c4a"],
    ["#b4d0ba", "#aeaa8a", "#9f8362", "#905e37", "#77411f"],
    ["#f1fcfd", "#95d5ec", "#37a0f3", "#2673cb", "#004aa7"],
    ["#0b0d0f", "#352a28", "#65574f", "#928272", "#c0a99a"],
    ["#f9c7c8", "#f6fbf8", "#cab4be", "#9b9fb3", "#676990"],
    ["#fdfbf8", "#e6eae1", "#a7cbbd", "#0b8f5f", "#037246"],
    ["#384b6d", "#456766", "#648a83", "#95c1b1", "#fafcfc"],
    ["#080f17", "#113631", "#22634d", "#459872", "#33a07c"],
    ["#18120e", "#2c282a", "#575958", "#8d9592", "#b3b1af"],
    ["#7b4697", "#aa3354", "#d85560", "#fe7539", "#ffa66b"],
    ["#e8e3e4", "#9da3a9", "#717375", "#545253", "#d5443a"],
    ["#fafcf6", "#f2dab5", "#d9ac9e", "#9f696e", "#6d524e"],
    ["#e0472d", "#e6826b", "#daa859", "#e1762d", "#599aa4"],
    ["#ff511f", "#2e3150", "#6a3858", "#905663", "#e75b61"],
    ["#c7d0d5", "#218c87", "#efd5c1", "#6bc290", "#9d3a60"],
    ["#fefffe", "#33122b", "#3f598f", "#354f64", "#24677e"],
    ["#e2f1f7", "#ccabb4", "#b5a2b9", "#8c3ca3", "#b015aa"]
];

let paleta_random = random_array_selector( pool_paletas ),
    color_fondo = random_array_selector( paleta_random ),
    paleta_sin_c_fondo = paleta_random.filter( color => color != color_fondo );

let forma_type = [
        'sim', 
        'mult'
    ],
    formas_varios_colores = ['mult_4', 'mult_5', 'mult_8', 'mult_9'],
    type_length = [28, 22];

let path_string = 'src/shapes/';
let spot_array = [];
let void_cells = 0;

function preload() {
    let x_pos, y_pos;
    for (let i = 0; i < resolucion_grid; i++) {
        for (let j = 0; j < resolucion_grid; j++) {
            x_pos = margen+celda_grid*i;
            y_pos = margen+celda_grid*j;
            let spot = new Slot(x_pos, y_pos);
            spot.preload_spot();
            spot_array.push(spot);
        }
    }
}

function setup() {
    noLoop();
    createCanvas(ancho_canvas, alto_canvas, SVG);
    imageMode( CENTER );
    angleMode( DEGREES );
}

function draw() {
    fill(color_fondo);
    rect(0,0, ancho_canvas, ancho_canvas);
    noFill();
    strokeWeight(2);
    stroke(0);

    spot_array.forEach( el => {
        el.print_spot();
    });
    filter(BLUR, 0.5)

    //Ruido general con filtro LUZ SUAVE
    gen_noise(ancho_canvas, alto_canvas);
    let canvas = document.getElementById('defaultCanvas0');
    let size = (window.innerWidth > window.innerHeight) ? '100vh' : '100vw';
    console.log(canvas);
    canvas.style.width = size;
    canvas.style.height = size;
    canvas.firstChild.style.width = size;
    canvas.firstChild.style.height = size;
    fxpreview();
}

//Funciones útiles
function gen_noise(w_canvas, h_canvas) {
    let ruido = createGraphics(w_canvas, h_canvas);
    ruido.loadPixels();
    for (let i = 0; i < ruido.width; i++) {
        for (let j = 0; j < ruido.height; j++) {
            ruido.set(i,j,fxrand()*255);
        }
    }
    ruido.updatePixels();
    blendMode( SOFT_LIGHT );
    tint(255, 15);
    image(ruido, w_canvas/2, h_canvas/2);
    blendMode( BLEND );
    noTint();
}

function random_array_selector(array) {
    return array[parseInt(fxrand()*(array.length))];
}

class Slot {
    static not_void = 0;
    
    constructor (x_coord, y_coord) {        
        this.coords = {
            'x': x_coord,
            'y': y_coord
        };
        this.forma_seleccionada = this._shape_selector();

        this.image = false;

        this.empty_spot = (fxrand() < 0.15);
        
        this.rand_color = false;
        
        this.multiple_colors = false
        if (!this.empty_spot) {
            this.multiple_colors = (formas_varios_colores.includes(this.forma_seleccionada))
        }

        if (!this.empty_spot) {
            let multiple_colors = (formas_varios_colores.includes(this.forma_seleccionada))
            if (multiple_colors) {
                let color_a, color_b, paleta_sin_color_a;
                color_a = random_array_selector(paleta_sin_c_fondo);
                paleta_sin_color_a = paleta_sin_c_fondo.filter( color => color != color_a);
                color_b = random_array_selector(paleta_sin_color_a);
                this.rand_color = [color_a, color_b];
            } else {
                this.rand_color = random_array_selector(paleta_sin_c_fondo);
            }
        }
    }

    _shape_selector() {
        let type = random_array_selector(forma_type),
            number = 0;
        if (type == 'sim') {
            number = type_length[0] * fxrand()
        } else {
            number = type_length[1] * fxrand()
        }

        return `${type}_${parseInt(number)+1}`
    }

    preload_spot () {
        if (!this.empty_spot) {
            let ruta = `${path_string+this.forma_seleccionada}.svg`
            this.image = loadSVG(ruta);
            this.not_void = Slot.not_void++;
        }
    }

    print_spot () {
        if (!this.empty_spot) {
            if( this.image ) {
                let is_g_depth_one = Array.from(this.image.elt.childNodes),
                    resultado = is_g_depth_one.some( el => el.nodeName == 'g');

                let paths;
                if (!resultado) {
                    paths = Array.from(this.image.elt.childNodes).filter( el => el.nodeName == 'path')
                } else {
                    paths = Array.from(this.image.elt.childNodes[2].childNodes).filter( el => el.nodeName == 'path')
                }
                
                if (this.multiple_colors) {
                    paths[0].style.fill = `${this.rand_color[0]}`
                    paths[1].style.fill = `${this.rand_color[1]}`
                } else {
                    paths.forEach( el => {
                        el.style.fill = `${this.rand_color}`
                    })
                }
                let cent_coords = [this.coords.x+(celda_grid/2), this.coords.y+(celda_grid/2)];
                image(this.image, cent_coords[0], cent_coords[1], celda_grid, celda_grid);
            }
        }
    }
}

let idx_paleta = pool_paletas.indexOf(paleta_random);


$fx.features({
    "Cells": total_bloques,
    "Palette": idx_paleta
  })
var canvas = document.getElementById('draw_canv');
    canvas_bck = document.getElementById('bck_canv');
    ctx = canvas.getContext("2d");
    ctx_bck = canvas_bck.getContext("2d");

    canvWidthArr = [1000,1200,800];
    canvHeightArr = [1000,800,1200];

    function setFormats(){
        screen_w = window.innerWidth;
        screen_h = window.innerHeight;
        a = screen_h * 0.8
        b = screen_h * 0.9
        c = screen_h * 0.7
        canvWidthArr = [a,b,c];
        canvHeightArr = [a,c,b];

    }
    // setFormats()

    stampFormat = rndValue(3);

    stampEffect = true;

    // SKY PALETTES
    s_pal1 = ["#00b4d8","#48cae4","#90e0ef","#ade8f4","#caf0f8"] // DAY BLUE
    s_pal2 = ["#cfbaf0","#f1c0e8","#ffcfd2","#fde4cf","#fbf8cc"] // SUNSET LIGH ROSE
    s_pal3 = ["#ffcdb2","#ffb4a2","#e5989b","#b5838d","#6d6875"] // PEACHY
    s_pal4 = ["#ffba08","#faa307","#f48c06","#e85d04","#dc2f02"] // ORANGE
    s_pal5 = ["#DDDDE3","#C7C7D1","#B0B0BF","#9A9AAC","#84849A"] // BW
        //NIGHT
        s_pal6 = ["#10002b","#2F0939","#2F0939","#6A1E3F","#B0592B"]
        s_pal7 = ["#000814","#001d3d","#003566","#003F7A","#B0592B"]
        s_pal8 = ["#1F3055","#1F3055","#1F3055","#1F3055","#1F3055"]

    s_pal9 = ["#FEFEFE","#FEFEFE","#FEFEFE","#FEFEFE","#FEFEFE"]
    s_pal10 = ["#F0B6CE","#F0B6CE","#F0B6CE","#F0B6CE","#F0B6CE"]
    s_pal11 = ["#F7F6F1","#F7F6F1","#F7F6F1","#F7F6F1","#F7F6F1"]
    
    // GROUND PALETTES

    // HOUSE PALETTES
    // FIRST_COLOR = DARK, SECOND_COLOR = MID, THIRD_COLOR = LIGHT
    h_pal1 = ["#481D24","#C5283D","#FFC857"]  // BASE RED AND YELLOW
    h_pal2 = ["#293241","#3d5a80","#e0fbfc"]  // DARK BLUE AND ALMOST WHITE ROOF
    h_pal3 = ["#2f3e46","#52796f","#d9ed92"]  // SOFT GREENS
    h_pal4 = ["#372549","#b75d69","#eacdc2"]  // SOFT VIOLET
    h_pal5 = ["#343a40","#6c757d","#e9ecef"]  // BLACK AND WHITE
        // NIGHT
        h_pal6 = ["#10002B","#FB6376","#FCB1A6"]
        h_pal7 = ["#000814","#006494","#caf0f8"]
        h_pal8 = ["#1F3055","#F1EFC5","#F1EFC5"]

    h_pal9 = ["#001346","#FF2400","#FEFEFE"]
    h_pal10 = ["#1C4597","#758AC5","#FFFFFF"]
    h_pal11 = ["#363434","#E84636","#F7F6F1"]

    
    s_palettes = [s_pal1,s_pal2,s_pal3,s_pal4,s_pal5,s_pal6,s_pal7,s_pal8,s_pal9,s_pal10,s_pal11];
    g_palettes = ["#a4ac86","#2E4460","#495057","#aacc00","#04363A","#48305F","#281B36","#644A4C","#10002B","#001429","#1F3055","#001346","#004D97","#E84636"];
    h_palettes = [h_pal1,h_pal2,h_pal3,h_pal4,h_pal5,h_pal6,h_pal7,h_pal8,h_pal9,h_pal10,h_pal11];
    m_palettes = ["#889263","#7D7190","#6F7A85","#88A300","#42618A","#8D686B","#C22020","#523D3E","#10002B","#001429","#1F3055","#001346","#004D97","#E84636C"];
    // ["#88A300","#cfbaf0", "#b5838d","#dc2f02","#84849A"]
    // ["#a4ac86","#2E4460","#495057","#aacc00","#04363A","#48305F","#281B36","#644A4C"];
    
    // skyColorsArr = s_palettes[rndValue(s_palettes.length)]
    // groundColorsArr = g_palettes[rndValue(g_palettes.length)]
    // houseColors = h_palettes[rndValue(h_palettes.length)]

    // Palette combinations:
    // Sky:       4 0 1 1 2 2 2 3 3 4 5
    // Ground:    2 3 1 5 1 6 7 1 5 1 8
    // House:     4 1 1 3 1 3 4 1 3 1 5
    // Mountains: 2 3 1 1 4 0 5 6 6 4 8
    s_v = [4,0,1,1,2,2,2,3,3,4,5,6,7,8,9,10]
    g_v = [2,3,1,5,1,6,7,1,5,1,8,9,10,11,12,13]
    h_v = [4,1,1,3,1,3,4,1,3,1,5,6,7,8,9,10]
    m_v = [2,3,1,1,4,0,5,6,6,4,8,9,10,11,12,13]

    combinations_n = ["Grayscale","Sunny day", "Peachy sunrise","Violet shades",
    "Peachy sunset","Green field","The first concrete building in the village",
    "Fire in the fields","Fiery sunset","Cold place","Rose night","Freezy night","Moonlight","Close to Mount Fuji","Web 3.0 village","Mars colony"]

    choosen_combination = rndValue(16);
    // choosen_combination = 15;

    skyColorsArr = s_palettes[s_v[choosen_combination]]
    groundColorsArr = g_palettes[g_v[choosen_combination]]
    houseColors = h_palettes[h_v[choosen_combination]]
    mountainColors = m_palettes[m_v[choosen_combination]]
    
    // skyColorsArr = s_palettes[7]
    // groundColorsArr = g_palettes[10]
    // houseColors = h_palettes[7]
    // mountainColors = m_palettes[10]
    
    night_variant = true
    if((choosen_combination == 10) ||(choosen_combination ==  11) ||(choosen_combination ==  12)){
        night_variant = true
    } else {
        night_variant = false
    }

    // choosen_combination == (10 || 11 || 12) ? night_variant = true : night_variant = false

    function resize(){
        var ratio = canvas.width / canvas.height;
        var canvas_height = window.innerHeight- window.innerWidth*0.2;
        var canvas_width = canvas_height * ratio;
        var bck_add = 0;

        switch(stampFormat){
            case 0:
                canvas_height = window.innerHeight- window.innerWidth*0.2;
                canvas_width = canvas_height * ratio;
                bck_add = canvas_width*0.05
                break;
            case 1:
                canvas_width = window.innerWidth- window.innerWidth*0.23;
                canvas_height = canvas_width / ratio;
                bck_add = canvas_width*0.04
                break;
            case 2:
                canvas_height = window.innerHeight- window.innerWidth*0.17;
                canvas_width = canvas_height * ratio;
                bck_add = canvas_width*0.06
                break;
        }

        if(canvas_width>window.innerWidth){
            canvas_width=window.innerWidth;
            canvas_height=canvas_width/ratio;
        }

        canvas_bck.style.width = canvas_width + 'px';
        canvas_bck.style.height = canvas_height + 'px';

        canvas.style.width = canvas_width - bck_add + 'px';
        canvas.style.height = canvas_height - bck_add + 'px';
    
    }

    function canvSetUp(){
        canvas.width = canvWidthArr[stampFormat];
        canvas.height = canvHeightArr[stampFormat];
        canvas.style.width = canvWidthArr[stampFormat] / 2.5 + 'px'
        canvas.style.height = canvHeightArr[stampFormat] / 2.5 + 'px'

        canvas_bck.width = canvWidthArr[stampFormat] + 50;
        canvas_bck.height = canvHeightArr[stampFormat] + 50;
        canvas_bck.style.width = (canvWidthArr[stampFormat] + 50) / 2.5 + 'px'
        canvas_bck.style.height = (canvHeightArr[stampFormat] + 50) / 2.5 + 'px'
        resize()
    }
    
    function rndValue(max){
        return Math.floor(fxrand()*max);
    }

    abstrStyle = {
        backgroundColor: houseColors[0],
        stampColor: houseColors[0],
        stampBorderStyle: rndValue(2)
    }

function stampBorderSetUp(){
    if (abstrStyle.stampBorderStyle == 1){
        document.body.style.background = abstrStyle.backgroundColor;
        ctx_bck.fillStyle = "#ffffff";
        ctx_bck.fillRect(0,0,canvas_bck.width, canvas_bck.height);
        stroke_color = "#ffffff";

    } else {
        document.body.style.background = "#ffffff";
        ctx_bck.fillStyle = abstrStyle.backgroundColor;
        ctx_bck.fillRect(0,0,canvas_bck.width, canvas_bck.height);
        stroke_color = abstrStyle.backgroundColor;

    }   

    if (stampEffect){
        stampBorderEffect(Math.floor(canvas_bck.height/30),Math.floor(canvas_bck.width/30))
    } else {
        stamp_stroke_bck(0,0,canvas_bck.width,canvas_bck.height,"#FFFFFF")

    }
};

function chaosGen(start,end,y_start,y,den,width,color){
// start = x position to start
// end = x position to end
// y = bottom border by y axis
// den = Density of dots filling 1(small amount) 0.01(big amount)
// width = Size of a square (dot)

    for (i=start; i < end; i+=den){
        dot_opacity = (1 + rndValue(8))/10
        ctx.fillStyle = hexToRgbA(color,dot_opacity);
        y_plus = (Math.sin(i * i * i + Math.floor(fxrand()*canvas.width)) * y)
        ctx.fillRect(i,y_start + y_plus, width*rndValue(3), width*rndValue(3));
    };
};

function fillCircle(canv,x_pos,y_pos,radius){
    canv.beginPath();
    canv.arc(x_pos, y_pos, radius, 0, 2 * Math.PI);
    canv.fill();
};

function wiglyLine(start, end, x_offset, radius_max, orientation){
    // ctx.fillStyle = abstrStyle.circleColor;
    let density = 0.0001;
        
    for (i=start; i < end; i+=density){
        // let amplitude = Math.floor(fxrand()*50);
        let radius = rndValue(radius_max);
        let shift =  10000

        if(orientation == 0){  //vertical orientation
            fillCircle(ctx,(Math.sin(i*i)*100)+100+radius*2 + x_offset, i*shift, radius)
        } else if (orientation == 1){
            fillCircle(ctx,i*shift, (Math.sin(i*i)*100)+100+radius*2 + x_offset, radius)
        }
        // density += 0.00001
    };
};

function verticalLines(amount, lineWeight,orientation){
// Drawing wigly lines with different amont and width
// amount = amount of lines on canvas
// lineWeight = width of lines
    stampFormat == 2 ? lineSpace = (canvas.height / amount) : lineSpace = (canvas.width / amount);
    let lineHeight = 0.9
    
    for (j=0; j<amount; j++){
        wiglyLine(0.5-lineHeight, 0.35,(lineSpace*j)-100,lineWeight,orientation);
    }
};

function stampBorderEffect(vertical_amount,horizontal_amount){
    abstrStyle.stampBorderStyle == 1 ? ctx_bck.fillStyle = abstrStyle.backgroundColor : ctx_bck.fillStyle = "#ffffff";

    for (g=0; g<=vertical_amount; g++){
        let y_coord = g*(canvas_bck.height/vertical_amount)

        // for back rect
        fillCircle(ctx_bck,0, y_coord , 8)  // LEFT SIDE
        fillCircle(ctx_bck,canvas_bck.width, y_coord, 8) // RIGHT SIDE
    }

    for (k=0; k<=horizontal_amount; k++){
        let  x_coord = k*(canvas_bck.height/vertical_amount)

        // for back rect
        fillCircle(ctx_bck,x_coord,0, 8)  // TOP SIDE
        fillCircle(ctx_bck,x_coord,canvas_bck.height, 8) // BOTTOM SIDE
    }
};

function stampDownload(el) {
        ctx_bck.drawImage(canvas,25,25)
        var imageURI = canvas.toDataURL("image/png");
        var imageBackURI = canvas_bck.toDataURL("image/png")
        // var together = imageURI + imageBackURI
        var link = document.getElementById("download")
        link.download = "Lonely_village.png"
        link.href = imageBackURI
        link.click()
        // return imageBackURI;
};

function hexToRgbA(hex,opacity){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+ opacity + ')';
    }
    throw new Error('Bad Hex');
};

houseStyle = {
    width: 50+rndValue(70),
    height: 50+rndValue(100),
    y_position: (canvHeightArr[stampFormat])*0.5 + rndValue((canvHeightArr[stampFormat])*0.2),
    x_position: rndValue(500),
    skyes_stripes_amount: 2 + rndValue(3),
    ground_stripes_amount: 1,
    small_house: rndValue(2),
    house_colors_variant: rndValue(2),
    grass_density: 3 + rndValue(7),
    clouds_amount: 5 + rndValue (35),
    tube: rndValue(2),
    trees: rndValue(2),
    trees_amount: 1 + rndValue(5),
    mountain_shift: 100 + rndValue(1000),
    mountain_period: 160 + rndValue(100)
};

// houseType = 4
houseType = rndValue(5)


// window.$fxhashFeatures = {
//     stampFormat: stampFormats[stampFormat],
//     backgroundFigure: figure[abstrStyle.backgroundFormType],
//     palette: palettesName[choosen_palette]
// };

window.addEventListener('resize', function(event) {
    resize();
}, true);

function houseDraw(x_pos,y_pos,h_width,h_height,door){

    // houseStyle.house_colors_variant == 1 ? ctx.fillStyle = houseColors[2] : ctx.fillStyle = houseColors[1];
    door_width = h_width / 4
    door_height = h_width / 2
    door_pos = rndValue(3)
    window_width = h_width / 4

    if (houseStyle.house_colors_variant == 1){
        upper_color = houseColors[2];
        bottom_color = houseColors[1];
    } else {
        upper_color = houseColors[1];
        bottom_color = houseColors[2];
    }

    switch(houseType){
        // TYPE 1 height = width 
        case 0:  
            light_wall_width = h_width;
            light_wall_height = h_width;

            dark_wall_width = light_wall_width * 2

            lr_start_x = x_pos + h_width // light roof x start
            lr_start_y = y_pos - h_width // light roof y start
            
            lr_line_start_x = x_pos + h_width * 2 + 10  // light roof wigly diagonal line x start
            lr_line_end_x = x_pos + h_width + 10 // light roof wigly diagonal line x end

            dr_start_x = x_pos+h_width // dark roof x start
            dr_end_x = x_pos+h_width*3  // dark roof x end
            dr_var_x = dr_start_x + houseStyle.width // dark roof center of roof

            dr_line_end_x = lr_line_end_x+h_width*2 - 10 // dark roof wigly diagonal line x end

            door_x = x_pos + h_width/2 - door_width/2
            door_y = y_pos + h_height / 2

            d_l_x = (x_pos + houseStyle.width * 3)-105; // Dark vertical line x

            break;
        // TYPE 2 wide x2 
        case 1:
            light_wall_width = h_width * 2;
            light_wall_height = h_width;

            dark_wall_width = light_wall_width * 0.5

            lr_start_x = x_pos + light_wall_width/4
            lr_start_y = y_pos - light_wall_width + light_wall_width/1.5

            lr_line_start_x = x_pos + light_wall_width/4+light_wall_width
            lr_line_end_x = x_pos + light_wall_width + 10

            dr_start_x = x_pos + light_wall_width
            dr_end_x = x_pos + light_wall_width + light_wall_width/2
            dr_var_x = dr_start_x + houseStyle.width/2

            dr_line_end_x = lr_line_end_x + light_wall_width/2 - 10

            door_x = x_pos + houseStyle.width + houseStyle.width/2 - door_width/2
            door_y = y_pos + houseStyle.width / 2

            d_l_x = (x_pos + houseStyle.width + light_wall_width)-105;

            break;
        // TYPE 3 wide x3
        case 2:
            light_wall_width = h_width * 3;
            light_wall_height = h_width;

            dark_wall_width = light_wall_width / 3 * 2

            lr_start_x = x_pos + h_width
            lr_start_y = y_pos - h_width

            lr_line_start_x = x_pos + h_width * 4
            lr_line_end_x = x_pos + light_wall_width + 10

            dr_start_x = x_pos + light_wall_width
            dr_end_x = x_pos+ light_wall_width + h_width * 2
            dr_var_x = dr_start_x + h_width

            dr_line_end_x = lr_line_end_x + h_width * 2 - 10

            door_x = x_pos + houseStyle.width * door_pos + houseStyle.width/2 - door_width/2
            door_y = y_pos + houseStyle.width / 2

            d_l_x = (x_pos + houseStyle.width + light_wall_width)-105;

            break;
        // TYPE 4 tall x2
        case 3:
            light_wall_width = h_width;
            light_wall_height = h_width*2;
            y_pos = y_pos - h_width;

            dark_wall_width = light_wall_width

            lr_start_x = x_pos + h_width/2
            lr_start_y = y_pos - h_width/2

            lr_line_start_x = x_pos + h_width * 1.5
            lr_line_end_x = x_pos + h_width + 10
            
            dr_start_x = x_pos + light_wall_width
            dr_end_x = x_pos + light_wall_width * 2
            dr_var_x = dr_start_x + h_width/2

            dr_line_end_x = x_pos + h_width * 2 + 5

            door_x = x_pos + houseStyle.width/2 - door_width/2
            door_y = y_pos + houseStyle.width + (houseStyle.width - door_height)

            d_l_x = (x_pos + houseStyle.width + light_wall_width)-105;

            break;
        // TYPE 5 tall x3
        case 4:
            light_wall_width = h_width;
            light_wall_height = h_width*3;
            y_pos = y_pos - h_width*2;

            dark_wall_width = light_wall_width * 2

            lr_start_x = x_pos + h_width
            lr_start_y = y_pos - h_width

            lr_line_start_x = x_pos + h_width * 2
            lr_line_end_x = x_pos + h_width * 3

            dr_start_x = x_pos + h_width
            dr_end_x = x_pos+ h_width * 3
            dr_var_x = dr_start_x + h_width  //center of triangle

            dr_line_end_x = x_pos + h_width

            door_x = x_pos + h_width/2 - door_width/2
            door_y = y_pos + houseStyle.width*2 + (houseStyle.width - door_height)

            d_l_x = (x_pos + dark_wall_width + light_wall_width)-105;

            break;
        }

    // LIGHT WALL
        ctx.fillStyle = bottom_color
        ctx.fillRect(x_pos,y_pos,light_wall_width,light_wall_height)

    // SECOND WALL DARK
        ctx.fillStyle = houseColors[0];
        ctx.fillRect(x_pos + light_wall_width,y_pos,dark_wall_width,light_wall_height);

    // LIGHT ROOF
        ctx.fillStyle = upper_color
        for (j=0; j<light_wall_width; j++){drawLine(lr_start_x+j, x_pos+j,lr_start_y,y_pos)}
        drawWiglyLine(lr_start_x,x_pos,lr_start_y,y_pos)

    // DARK ROOF
        for (k = dr_start_x; k < dr_end_x; k++){
            ctx.fillStyle = houseColors[0];
            drawLine(dr_var_x, k, lr_start_y,y_pos)
        }
        drawWiglyLine(lr_line_start_x,lr_line_end_x,lr_start_y,y_pos)
        drawWiglyLine(lr_line_start_x,dr_line_end_x,lr_start_y,y_pos)
        
    // DOOR
        if (door == 1){
            ctx.fillStyle = houseColors[0];
            ctx.fillRect(door_x,door_y,door_width,door_height);
        }

    // WINDOWS
        switch(houseType){
                case 0:
                    ctx.fillStyle = houseColors[2];
                    window_x = x_pos + houseStyle.width*2 - window_width/2 + 5
                    window_y = y_pos + houseStyle.width/2 - window_width/2 - 5
                    wigglyFilledSquare(window_x - houseStyle.width/2 + 5,window_y,window_width);
                    wigglyFilledSquare(window_x + houseStyle.width/2 - 5,window_y,window_width);
                    break;
                case 1:
                    window_x = x_pos + houseStyle.width/2 - window_width/2 + 5 + houseStyle.width*2
                    window_y = y_pos + houseStyle.width/2 - window_width/2 - 5

                    ctx.fillStyle = houseColors[2];
                    wigglyFilledSquare(window_x,window_y,window_width);
                    break;
                case 2:
                    window_x = x_pos + houseStyle.width/2 - window_width/2 + 5
                    window_y = y_pos + houseStyle.width/2 - window_width/2 - 5

                    if (door_pos == 0){
                        wigglyFilledSquare(window_x + houseStyle.width*2,window_y,window_width);
                        wigglyFilledSquare(window_x + houseStyle.width,window_y,window_width);

                    } else if (door_pos == 1){
                        wigglyFilledSquare(window_x + houseStyle.width*2,window_y,window_width);
                        wigglyFilledSquare(window_x,window_y,window_width);

                    } else {
                        wigglyFilledSquare(window_x,window_y,window_width);
                        wigglyFilledSquare(window_x + houseStyle.width,window_y,window_width);
                    } 

                    ctx.fillStyle = houseColors[2];
                    wigglyFilledSquare(window_x + houseStyle.width*3,window_y,window_width);
                    wigglyFilledSquare(window_x + houseStyle.width*4,window_y,window_width);

                    break;
                case 3:
                    window_x = x_pos + houseStyle.width/2 - window_width/2
                    window_y = y_pos + houseStyle.width/2 - window_width/2 - 5

                    wigglyFilledSquare(window_x,window_y,window_width);
                    wigglyFilledSquare(window_x,window_y + houseStyle.width/1.5,window_width);
                    
                    ctx.fillStyle = houseColors[2];
                    wigglyFilledSquare(window_x + houseStyle.width + 5,window_y,window_width);
                    wigglyFilledSquare(window_x + houseStyle.width + 5,window_y + houseStyle.width/1.5,window_width);

                    break;
                case 4:
                    window_x = x_pos + houseStyle.width/2 - window_width/2
                    window_y = y_pos + houseStyle.width/2 - window_width/2 - 5
                    light_switch = [0,2]

                    wigglyFilledSquare(window_x,window_y,window_width);
                    wigglyFilledSquare(window_x,window_y + houseStyle.width/1.3,window_width);
                    wigglyFilledSquare(window_x,window_y + 2*(houseStyle.width/1.3),window_width);
                    
                    for (z=0; z<3; z++){
                        ctx.fillStyle = houseColors[light_switch[rndValue(2)]];
                        wigglyFilledSquare(window_x + houseStyle.width + 10,window_y + (houseStyle.width/1.3)*z,window_width);
                        ctx.fillStyle = houseColors[light_switch[rndValue(2)]];
                        wigglyFilledSquare(window_x + houseStyle.width*2 ,window_y + (houseStyle.width/1.3)*z,window_width);
                    }
                    break;
            }

    // VERTICAL LINES
        l_end = (y_pos + light_wall_height)/10000,
        l_start = y_pos/10000

        if (houseType == 3){l_end = (y_pos + houseStyle.width*2)/10000}

        // FIRST WALL LINES
        ctx.fillStyle = bottom_color;
        wiglyLine(l_start,l_end,x_pos-105,5,0);
        wiglyLine(l_start,l_end,(x_pos + light_wall_width)-105,5,0);

        // DARK WALL LINES
        ctx.fillStyle = houseColors[0];
        wiglyLine(l_start,l_end,d_l_x,5,0);
        
    // HORIZNTAL LINES
        
        // BOTTOM ROOF LINES
        ctx.fillStyle = bottom_color;
        l_end = (x_pos + light_wall_width)/ 10000,
        l_start = x_pos / 10000
        wiglyLine(l_start,l_end,y_pos-105,5,1);
        
        // TOP ROOF LINES
        l_end = (lr_start_x + light_wall_width - 10)/ 10000,
        l_start = (lr_start_x) / 10000
        ctx.fillStyle = upper_color;
        wiglyLine(l_start,l_end,lr_start_y -105 ,5,1);

    // TUBE 
    if (houseStyle.tube == 1){
            switch(houseType){
        // TYPE 1 height = width 
        case 0:
            tube_width = houseStyle.width/3.9
            tube_height = houseStyle.width/1.5
            tube_x = x_pos + light_wall_width
            tube_y = y_pos - houseStyle.width*1.2

            st_x = tube_x + tube_width + houseStyle.width/4.1
            end_x = st_x - houseStyle.width/3.5
            st_y = tube_y + houseStyle.width/2.2
            end_y = st_y - houseStyle.width/3.5

            ctx.fillStyle = upper_color;
            wigglyFilledRect(tube_x,tube_y,tube_width,tube_height);
           
            ctx.fillStyle = houseColors[0];
            wigglyFilledRect(tube_x + tube_width,tube_y,tube_width - 6,tube_height);
            
            ctx.fillStyle = upper_color;  
            for (j=0; j<h_width/6; j++){
                drawLine(st_x+j, end_x+j,st_y,end_y)
            }
    
            break;
        // TYPE 2 wide x2 
        case 1:
            tube_width = houseStyle.width/3.9
            tube_height = houseStyle.width/1.5
            tube_x = x_pos + light_wall_width/1.2
            tube_y = y_pos - houseStyle.width

            st_x = tube_x + tube_width + houseStyle.width/5
            end_x = st_x - houseStyle.width/5
            st_y = tube_y + houseStyle.width/2.2
            end_y = st_y - houseStyle.width/3.5

            ctx.fillStyle = upper_color;
            wigglyFilledRect(tube_x,tube_y,tube_width,tube_height);
            
            ctx.fillStyle = houseColors[0];
            wigglyFilledRect(tube_x + tube_width,tube_y,tube_width-6,tube_height);
            
            ctx.fillStyle = upper_color;
            // ctx.fillStyle = "#FF0000";
            
            for (j=0; j<h_width/6; j++){
                drawLine(st_x+j, end_x+j,st_y,end_y)
            }
            break;
        // TYPE 3 wide x3
        case 2:
            tube_width = houseStyle.width/3.9
            tube_height = houseStyle.width/1.5
            tube_x = x_pos + light_wall_width/1.1
            tube_y = y_pos - houseStyle.width*1.3

            st_x = tube_x + tube_width + houseStyle.width/5
            end_x = st_x - houseStyle.width/5
            st_y = tube_y + houseStyle.width/2.2
            end_y = st_y - houseStyle.width/3.5

            ctx.fillStyle = upper_color;
            wigglyFilledRect(tube_x,tube_y,tube_width,tube_height);
            
            ctx.fillStyle = houseColors[0];
            wigglyFilledRect(tube_x + tube_width,tube_y,tube_width-6,tube_height);
            
            ctx.fillStyle = upper_color;
            // ctx.fillStyle = "#FF0000";
            
            for (j=0; j<h_width/6; j++){
                drawLine(st_x+j, end_x+j,st_y,end_y)
            }
            break;
        // TYPE 4 tall x2
        case 3:
            tube_width = houseStyle.width/5
            tube_height = houseStyle.width/2.5
            tube_x = x_pos + light_wall_width/1.1
            tube_y = y_pos - houseStyle.width/1.4

            st_x = tube_x + tube_width + (tube_width-8)
            end_x = st_x - (tube_width)
            st_y = tube_y + tube_width + tube_width-10
            end_y = st_y - tube_width

            ctx.fillStyle = upper_color;
            wigglyFilledRect(tube_x,tube_y,tube_width,tube_height);
            
            ctx.fillStyle = houseColors[0];
            wigglyFilledRect(tube_x + tube_width,tube_y,tube_width-6,tube_height);
            
            ctx.fillStyle = upper_color;
            // ctx.fillStyle = "#FF0000";
            
            for (j=0; j<h_width/9; j++){
                drawLine(st_x+j, end_x+j,st_y,end_y)
            }
            break;
        // TYPE 5 tall x3
        case 4:
            tube_width = houseStyle.width/5
            tube_height = houseStyle.width/2.5
            tube_x = lr_start_x + light_wall_width/2.7
            tube_y = lr_start_y - light_wall_width/3.5

            st_x = tube_x + tube_width + (tube_width-8)
            end_x = st_x - (tube_width)
            st_y = tube_y + tube_width + tube_width-10
            end_y = st_y - tube_width

            ctx.fillStyle = upper_color;
            wigglyFilledRect(tube_x,tube_y,tube_width,tube_height);
            
            ctx.fillStyle = houseColors[0];
            wigglyFilledRect(tube_x + tube_width,tube_y,tube_width-6,tube_height);
            
            ctx.fillStyle = upper_color;
            // ctx.fillStyle = "#FF0000";
            
            for (j=0; j<h_width/9; j++){
                drawLine(st_x+j, end_x+j,st_y,end_y)
            }
            // ctx.fillRect(x_pos + h_width,y_pos,h_width*2,h_height);
            break;
            }
    }

        
}

function drawLine(start_x,end_x,start_y,end_y){
// DRAW LINE FROM (X,Y) TO (X2,Y2)

    let dif_y = Math.abs(end_y - start_y),
        dif_x = Math.abs(start_x - end_x),
        step_x = dif_x/dif_y;
        // plus_x = step_y/step_x

    for (i=0; i<dif_y;i++){
        let x_coord = start_x+(step_x*i),
            y_coord = start_y+i

        if (start_x > end_x){
            x_coord = start_x-(step_x*i)
        }
        fillCircle(ctx,x_coord,y_coord,1)
    }

}

function drawWiglyLine(start_x,end_x,start_y,end_y){
    // DRAW LINE FROM (X,Y) TO (X2,Y2)
    
        let dif_y = Math.abs(end_y - start_y),
            dif_x = Math.abs(start_x - end_x),
            step_x = dif_x/dif_y;
            // plus_x = step_y/step_x
    
        for (i=0; i<dif_y;i++){
            let x_coord = start_x+(step_x*i),
                y_coord = start_y+i
    
            if (start_x > end_x){
                x_coord = start_x-(step_x*i)
            }
            fillCircle(ctx,x_coord + (rndValue(2) - 4),y_coord + (rndValue(2) - 4),1+rndValue(6))
        }
        
        // Math.sin(i*i)*100)+100+radius*2 
    }

function groundDraw(){
    ctx.fillStyle = "#255F85";
    let stripe_height = (canvas.height - (houseStyle.y_position + houseStyle.width))/houseStyle.ground_stripes_amount;
    for (i=0; i < houseStyle.ground_stripes_amount; i++){
        ctx.fillStyle = groundColorsArr;
        // if (houseStyle.ground_stripes_amount == 1){
        //     ctx.fillStyle = groundColorsArr[rndValue(4)];
        // }
        ctx.fillRect(0,houseStyle.y_position + houseStyle.width + i*stripe_height,canvas.width,800);
    }

    for (k=0; k<houseStyle.ground_stripes_amount; k++){
        ctx.fillStyle = groundColorsArr[k];
        let line_draw_x = (houseStyle.y_position + houseStyle.width + k*stripe_height) - 107
        wiglyLine(0,1,line_draw_x,5,1);

    }

}


function skyDraw(){
    let sky_height = (houseStyle.y_position + houseStyle.width) / houseStyle.skyes_stripes_amount
    for (j=0; j<houseStyle.skyes_stripes_amount; j++){
        ctx.fillStyle = skyColorsArr[j];
        ctx.fillRect(0,j*sky_height,canvas.width,sky_height);
    }

    for (k=0; k<houseStyle.skyes_stripes_amount; k++){
        ctx.fillStyle = skyColorsArr[k];
        let line_draw_x = (k*sky_height + sky_height) - 107
        wiglyLine(0,1,line_draw_x,10,1);
    }
}

function draw(){
    ctx.fillStyle = "#000000";
    ctx.clearRect(0,0,800,800)
    skyDraw();

  
    if (night_variant){
        stars();
        moon();
    } else {
        drawClouds(houseStyle.clouds_amount);
    }

    if (choosen_combination == 13){
        sun()
    }
    // m_period = 160 + rndValue(100)
    valley(houseStyle.mountain_period, houseStyle.mountain_shift, houseStyle.y_position + (houseStyle.width/8));
    mountain(houseStyle.mountain_period, houseStyle.mountain_shift, houseStyle.y_position + (houseStyle.width/8));
    // mountain(160 + rndValue(100), m_shift + rndValue(200));

    // SMALL HOUSE
    if (houseStyle.small_house == 1){
        houseDraw(houseStyle.x_position- houseStyle.width/2, houseStyle.y_position + houseStyle.width/2, houseStyle.width/2, houseStyle.width/2,0);
    }

    // BIG HOUSE
    houseDraw(houseStyle.x_position, houseStyle.y_position, houseStyle.width, houseStyle.width,1);
    
    // MORE HOUSES
    
    groundDraw();
    if (!night_variant){
    ground_texture();
        
    }

    house_space = houseStyle.x_position + houseStyle.width;
    space_for_trees_start = 0;
    space_for_trees_end = 0;
    
    if (house_space > canvas.width/2){
        space_for_trees_start = 0;
        space_for_trees_end = houseStyle.x_position
        treeX = space_for_trees_end;

    } else {
        space_for_trees_start = houseStyle.x_position + (houseStyle.width*2)
        space_for_trees_end = canvas.width
        treeX = space_for_trees_start;

    }
    space_between = (space_for_trees_start - space_for_trees_end)/houseStyle.trees_amount;
    for (k=1; k<houseStyle.trees_amount; k++){
        
        if (house_space > canvas.width/2){
            treeDraw(treeX + space_between*k + rndValue(20),houseStyle.width,4+rndValue(3));
        } else {
            treeDraw(treeX - space_between*k - rndValue(20),houseStyle.width,4+rndValue(3));
        }
        
    }
    grass();

    ctx.fillStyle = "rgba(3,4,94,0.1)";


    if (night_variant){ctx.fillStyle = "rgba(255,255,255,0.05)"; stroke_color = houseColors[2]}

    vl_extra_amount = rndValue(20)
    verticalLines(40 + vl_extra_amount,2,1)
    verticalLines(40 + vl_extra_amount,2,0)

    if(choosen_combination == 13){
        stroke_color = houseColors[1]
    }
    stamp_stroke(20,20,canvas.width - 40,canvas.height - 40,stroke_color)
    document.getElementById('loading').style.display = "none";
    console.log("Hi! Happy to see you here :) Feel free to use my code in learning purposes. You can also aks me anything about this project https://twitter.com/LikeMurvin")
    fxpreview();

};

function textAdd(symbol,str_amount){
    ctx.font = "30px Georgia";
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    string_value = symbol.repeat(85);
    for (i=1; i<str_amount; i+=2){
        ctx.fillText(string_value, 0, 15*i);
    }
}

function grass(){
    ctx.fillStyle = groundColorsArr;
    let end_pos = (houseStyle.y_position + houseStyle.width)/10000,
        start_pos = 0,
        steps_amount = canvas.width/houseStyle.grass_density
    for (j=0; j<steps_amount; j+=1){
        start_pos = end_pos - ((1+rndValue(20))/10000)
        wiglyLine(start_pos,end_pos,houseStyle.grass_density*j - 100,3,0);
    }
}


function wigglyFilledSquare(x,y,width){
    sq_x = x/10000
    sq_y = y/10000

    ctx.fillRect(x,y,width,width);

    // vertical 
    wiglyLine(sq_y,sq_y+(width/10000),x -105,3,0);
    wiglyLine(sq_y,sq_y+(width/10000),x + width -105,3,0);
    // horizontal
    wiglyLine(sq_x,sq_x+(width/10000),y -105,3,1);
    wiglyLine(sq_x,sq_x+(width/10000),y+ width -105,3,1);

}

function wigglyFilledRect(x,y,width,height){
    sq_x = x/10000
    sq_y = y/10000

    ctx.fillRect(x,y,width,height);

    // vertical 
    wiglyLine(sq_y,sq_y+(height/10000),x -105,3,0);
    wiglyLine(sq_y,sq_y+(height/10000),x + width -105,3,0);
    // horizontal
    wiglyLine(sq_x,sq_x+(width/10000),y -105,3,1);
    wiglyLine(sq_x,sq_x+(width/10000),y+ height -105,3,1);

}

function clouds(x,x2,y,width,transparency){
    transparency /= 100
    ctx.fillStyle = 'rgba(255,255,255,'+transparency+')';
    wiglyLine(x/10000,x2/10000,y - 105,width,1);
}

function drawClouds(amount){
    space = (houseStyle.y_position + houseStyle.width) / amount
    opacity = 3;

    for(l=0; l<amount; l++){
        x_start = rndValue(canvWidthArr[stampFormat]);
        x_end = x_start + rndValue(canvWidthArr[stampFormat] - x_start); 
        clouds(x_start,x_end,space*l,rndValue(20),opacity);
    }
}


canvSetUp();
stampBorderSetUp();
draw();
// animate();


function treeDraw(t_x,t_height,leaf_crown){
    ctx.fillStyle = houseColors[0];
    t_y = houseStyle.y_position + houseStyle.width - t_height
    wigglyFilledRect(t_x,t_y, houseStyle.width/6, t_height)

    ctx.fillStyle = houseColors[1];
    wigglyFilledRect(t_x,t_y, houseStyle.width/18, t_height)

    ctx.fillStyle = houseColors[2];
    for (l=0; l<leaf_crown; l++){
        // fillCircle(ctx,t_x + houseStyle.width/8,(t_y+t_height*0.3) - 20*l,(houseStyle.width/3)-2*l)
        wiglyFilledCircle(t_x + houseStyle.width/12,(t_y+t_height*0.3) - 20*l,(houseStyle.width/4 + rndValue(5))-2*l,houseColors[1])
    }
}

function wiglyCircle(xc,yc,r,brush_step,brush_radius,color){

    // DRAWING A CIRCLE WITH ANOTHER CIRCLES
    // xc = x coordinate of circle center
    // yc = y coordinate of circle center
    // r = radius of the circle
    // brush_step = density of brush
    c_a = [color,houseColors[0]];
    // ctx.fillStyle = color;
    
        for (j=0; j<1000; j+= brush_step){
    
                let radius = r*r,
                    y_coord = Math.sqrt(radius-(j*j)),
                    brush_r = brush_radius + rndValue(3);

                ctx.fillStyle = color
                fillCircle(ctx,xc-j, y_coord+yc, brush_r)  // left down
                ctx.fillStyle = color
                fillCircle(ctx,xc-j, yc-y_coord, brush_r)  // left up

                ctx.fillStyle = c_a[rndValue(2)];
                fillCircle(ctx,j+xc, y_coord+yc, brush_r)  // right down
                ctx.fillStyle =  color
                fillCircle(ctx,j+xc, yc-y_coord, brush_r)  // right up
        }
    };
    
    function wiglyFilledCircle(x_coord,y_coord,radius,color){
    // DRAWING A BIG SIRCLE WITH WIGLY STROKE AND FILL
        ctx.fillStyle = color;
        fillCircle(ctx,x_coord,y_coord,radius)
        wiglyCircle(x_coord,y_coord,radius,2*0.3,1,color);
    };

function sun(s_x,s_y,s_r,s_c){
    wiglyFilledCircle(s_x,s_y,s_r,s_c);

    for (j=0; j<800; j+=40){
        drawWiglyLine(s_x,0,s_y,j)
        drawWiglyLine(s_x,1000,s_y,j)
    }
}

function sinWave(start,end,amp,per,den,width,shift,y_c,color){
    // start = x position to start
    // end = x position to end
    // amp = amplitude of wave
    // per = period of wave (distance beetween vertices)
    // den = Density of dots filling 1(small amount) 0.01(big amount)
    // width = Size of a square (dot)
    // shift = wave shift by x axis
    
        for (i=start; i < end; i+=den){
            // color.a = fxrand();
            ctx.fillStyle = color;
            // ctx.fillRect(i*per,(Math.sin(i+shift)*amp)+amp, width, width);
            fillCircle(ctx,i*per + i,y_c+((Math.sin(i+shift)*amp)+amp),1+ rndValue(width))
        };
};

// Texture for mountain
function mountain(m_period,shift,m_y){
    m_color = hexToRgbA(houseColors[2],0.2);
    for (j=0; j<200; j+= 6){
        sinWave(0,100,80,m_period,0.02,3,shift,m_y+j,m_color);
    }
}


// Mountain main form 
function valley(m_period,shift,m_y){
    m_color = mountainColors
    for (j=0; j<200; j+= 1){
        sinWave(0,100,80 + j*2,m_period + j*2,0.02,5,shift,m_y+j,m_color);
    }
}

function stars(){
    chaosGen(0,canvas.width,0,houseStyle.y_position + houseStyle.width,0.5,2,"#FFFFFF")
}


function moon(){
    sky_height = (houseStyle.y_position + houseStyle.width) / houseStyle.skyes_stripes_amount
    radius = 60
    pos_y = rndValue(sky_height) - radius
    light_pos_x = 500
    shadow_pos_x = (light_pos_x - radius) + rndValue(radius*2);


    wiglyFilledCircle(light_pos_x,pos_y,radius,houseColors[2])
    wiglyFilledCircle(shadow_pos_x,pos_y,radius,skyColorsArr[0])

    // ctx.fillStyle = s_palettes[5[0]]
    // fillCircle(ctx,500,450,100)

}

function sun(){
    sky_height = (houseStyle.y_position + houseStyle.width) / houseStyle.skyes_stripes_amount
    radius = 60
    pos_y = rndValue(sky_height)
    light_pos_x = 500

    wiglyFilledCircle(light_pos_x,pos_y,radius,houseColors[1])
    // wiglyFilledCircle(shadow_pos_x,pos_y,radius,skyColorsArr[0])

    // ctx.fillStyle = s_palettes[5[0]]
    // fillCircle(ctx,500,450,100)

}

function stamp_stroke(x,y,width,height,color){
    sq_x = x/10000
    sq_y = y/10000
    ctx.fillStyle = color;
    // vertical 
    wiglyLine(sq_y,sq_y+(height/10000),x -105,3,0);
    wiglyLine(sq_y,sq_y+(height/10000),x + width -105,3,0);
    // horizontal
    wiglyLine(sq_x,sq_x+(width/10000),y -105,3,1);
    wiglyLine(sq_x,sq_x+(width/10000),y+ height -105,3,1);

}


function ground_texture(){
    ground_midle = ((houseStyle.y_position + houseStyle.width)) +  ((canvas.height - (houseStyle.y_position + houseStyle.width))/2)
    ground_half = (canvas.height -(houseStyle.y_position + houseStyle.width))/2

    y_start_pos = (houseStyle.y_position + houseStyle.width)* 2.25
    chaosGen(0,canvas.width,ground_midle,ground_half,0.3,2,houseColors[1])
    // chaosGen()
}


function wiglyLineBack(start, end, x_offset, radius_max, orientation){
    // ctx.fillStyle = abstrStyle.circleColor;
    let density = 0.0001;
        
    for (i=start; i < end; i+=density){
        // let amplitude = Math.floor(fxrand()*50);
        let radius = rndValue(radius_max);
        let shift =  10000

        if(orientation == 0){  //vertical orientation
            fillCircle(ctx_bck,(Math.sin(i*i)*100)+100+radius*2 + x_offset, i*shift, radius)
        } else if (orientation == 1){
            fillCircle(ctx_bck,i*shift, (Math.sin(i*i)*100)+100+radius*2 + x_offset, radius)
        }
        // density += 0.00001
    };
};

function stamp_stroke_bck(x,y,width,height,color){
    abstrStyle.stampBorderStyle == 1 ? ctx_bck.fillStyle = abstrStyle.backgroundColor : ctx_bck.fillStyle = "#ffffff";
    sq_x = x/10000
    sq_y = y/10000
    // ctx.fillStyle = color;
    // vertical 
    wiglyLineBack(sq_y,sq_y+(height/10000),x -105,3,0);
    wiglyLineBack(sq_y,sq_y+(height/10000),x + width -105,10,0);
    // horizontal
    wiglyLineBack(sq_x,sq_x+(width/10000),y -105,3,1);
    wiglyLineBack(sq_x,sq_x+(width/10000),y+ height -105,5,1);

}

document.addEventListener('keydown', (event) =>{
    var name = event.key;
    if ((name === "d")||(name == "D")){
        stampDownload();
    }

    if ((name === "f")||(name == "F")){
        stampEffect = !stampEffect;
        stampBorderSetUp();
        // draw();
    }
})

window.$fxhashFeatures = {
    Palette: combinations_n[choosen_combination]
};

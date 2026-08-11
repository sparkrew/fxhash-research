//////////////////////////////////////////////////
// GENESIS PROJECT ON FXHASH
// Collection: CANTABILE
// Filename: palette_hsba.js
// Project Author: Neverfamousartists, Jan Studio 
// Twitter: @nfamousartists, @jan_studio8
// Date: 1 April 2023
//////////////////////////////////////////////////

// https://en.wikipedia.org/wiki/Shades_of_pink (HSV/HSB)
function getPinkSakuraPalette(){ //colorPalette=[fColors,bgColors,blColors]
    
    let colorPalette; let fColors=[]; let bgColors=[]; let blColors=[];
    let a=40;
    
    // flower colors
    fColors.push([350,25,100,a]); //pink
    fColors.push([351,29,100,a]); //light pink
    fColors.push([330,59,100,a]); //hot pink
    fColors.push([328,92,100,a]); //deep pink
    fColors.push([346,18,100,a]); //pastel pink
    
    fColors.push([25,14,95,a]); //champagne pink
    fColors.push([319,13,100,a]); //pink lace
    fColors.push([343,13,99,a]); //piggy pink
    fColors.push([3,19,98,a]); //pale pink
    fColors.push([0,20,96,a]); //baby pink
    
    fColors.push([342,22,95,a]); //orchid pink
    fColors.push([348,28,100,a]); //cherry blossom pink
    fColors.push([332,31,98,a]); //lavendar pink
    fColors.push([336,35,100,a]); //carnation pink
    fColors.push([342,46,99,a]); //tickle me pink
    
    fColors.push([338,35,95,a]); //amaranth pink
    fColors.push([6,12,100,a]); //misty rose
    fColors.push([315,19,86,a]); // pink lavendar
    fColors.push([327,89,85,a]); // barbie pink
    fColors.push([347,73,90,a]); // paradise pink
    
    // background colors
    bgColors.push(color(241,95,87,70)); //ultramarine
    bgColors.push(color(215,100,50,100)); //cobalt blue variant
    bgColors.push(color(291,25,50,50)); //purple
    bgColors.push(color(75,100,72,50)); //apple green
    bgColors.push(color(0,0,83,50)); // light grey
    bgColors.push(color(60,10,96,50)); // beige
    
    // blob colors
    blColors.push(color(241,95,87,20)); //ultramarine
    blColors.push(color(240,99,47,20)); //navy
    blColors.push(color(200,84,76,20)); //summer sky
    blColors.push(color(37,89,100,70)); //bright(crayola)
    blColors.push(color(40,50,100,70)); //orange
    
    // Choose background color
    let bgColor;
    let bgColorChoice=random(1);
    if(bgColorChoice<0.05){
        bgColor=bgColors[0]
    } else if(bgColorChoice<0.1){
        bgColor=bgColors[1]
    } else if(bgColorChoice<0.15){
        bgColor=bgColors[2]
    } else if(bgColorChoice<0.2){
        bgColor=bgColors[3]
    } else if(bgColorChoice<0.5){
        bgColor=bgColors[4]
    } else{
        bgColor=bgColors[5]
    }
    
    // Choose 3 blob colors
    let sel; let seColor; let blColorChoices=[];
    for(let i=0; i<3;i++){
        sel=floor(random(blColors.length));
        selColor=blColors[sel]
        if(blColorChoices.includes(selColor)){
            i--;
            continue;
        }else{
            blColorChoices.push(selColor)
        }
        
    }
    //print(blColorChoices)
    
    colorPalette = [fColors,bgColor,blColorChoices]
    
    return colorPalette;
}

//https://en.wikipedia.org/wiki/Shades_of_yellow
function getYellowSakuraPalette(){
    
    let colorPalette; let fColors=[]; let bgColors=[]; let blColors=[];
    let a=40;
    
    // flower colors
    fColors.push([56, 100, 100, a]); //canary yellow
    fColors.push([50, 100, 100, a]); //yellow
    fColors.push([50, 48, 99, a]); //yellow(crayola)
    fColors.push([60, 41, 99, a]); //pastel
    fColors.push([60, 20, 100, a]); //cream
    
    fColors.push([54, 20, 100, a]); //lemon chiffon
    fColors.push([60, 96, 93, a]); //xanthic
    fColors.push([60, 60, 100, a]); //unmellow
    fColors.push([48, 62, 98, a]); //royal
    fColors.push([51, 100, 100, a]); //gold
    
    fColors.push([53, 99, 93, a]); //safety
    fColors.push([37, 89, 100, a]); //bright(crayola)
    
    // background colors
    bgColors.push(color(241,95,87,50)); //ultramarine
    bgColors.push(color(315,50,50,50)); //purple
    
    // blob colors
    blColors.push(color(241,95,87,20)); //ultramarine
    blColors.push(color(240,99,47,20)); //navy
    blColors.push(color(200,84,76,20)); //summer sky
    
    let bgColor;
    let bgColorChoice=random(1);
    if(bgColorChoice<0.1){
        bgColor=bgColors[0]
    }
    else{
        bgColor=bgColors[1]
    }
    
    colorPalette = [fColors,bgColor,blColors]
    
    return colorPalette;
}

// https://en.wikipedia.org/wiki/Shades_of_blue
function getBlueSakuraPalette(){
    
    let colorPalette; let fColors=[]; let bgColors=[]; let blColors=[];
    let a=40;
    
    // flower colors
    fColors.push([231, 100, 66, a]); //pantone
    fColors.push([190, 100, 69, a]); //munsell
    fColors.push([217, 88, 100, a]); //crayola
    fColors.push([240, 20, 100, a]); //periwinkle
    fColors.push([255, 100, 100, a]); //ultramarine
    
    fColors.push([230, 64, 82, a]); //savoy
    fColors.push([240, 88, 94, a]); //blue bonnet
    fColors.push([203, 20, 93, a]); //twin bed
    fColors.push([235, 64, 95, a]); //blurple(now)
    fColors.push([199, 43, 94, a]); //baby blue
    
    fColors.push([195, 25, 90, a]); //light blue
    fColors.push([187, 23, 90, a]); //powder blue
    
    // background colors
    bgColors.push(color(60, 100, 100, 50)); //gold
    
    // blob colors
    blColors.push(color(291, 60, 50, 70)); //purple
    blColors.push(color(0, 60, 96, 80)); //pink
    
    // choose background color
    let bgColor = bgColors[0]
    
    colorPalette = [fColors,bgColor,blColors]
    
    return colorPalette; 
}
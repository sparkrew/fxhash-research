let layer0 = [];
let layer1 = [];
let layer2 = [];
let layer3 = [];
let layer4 = [];
let layer5 = [];
let layer6 = [];
let layer7 = [];
let layer8 = [];

const layer0_count = 1;//количество картинок в папке
const layer1_count = 8;
const layer2_count = 6;
const layer3_count = 8;
const layer4_count = 6;
const layer5_count = 6;
const layer6_count = 6;
const layer7_count = 6;
const layer8_count = 4;

function loadPics(folder_name, count){
    let arr=[];
    for (let i = 0; i < count; i++) {
        let img = loadImage("pics/"+folder_name+"/"+nf(i+1,3)+".PNG");
        arr[i]=img;
    }
    return arr;
}

function preload(){
    // layer0=loadPics("layer0", layer0_count)//"layer0" название папки
    layer1=loadPics("layer1", layer1_count);
    layer2=loadPics("layer2", layer2_count);
    layer3=loadPics("layer3", layer3_count);
    layer4=loadPics("layer4", layer4_count);
    layer5=loadPics("layer5", layer5_count);
    layer6=loadPics("layer6", layer6_count);
    layer7=loadPics("layer7", layer7_count);
    layer8=loadPics("layer8", layer8_count);    
}



let layer0_img;
let layer1_img;
let layer2_img;
let layer3_img;
let layer4_img;
let layer5_img;
let layer6_img;
let layer7_img;
let layer8_img;

function choosePic(array){
    let rand = int(floor(fxrand()*array.length));
    console.log(rand)
    let pic = array[rand];
    return pic;
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    // layer0_img=choosePic(layer0);
    layer1_img=choosePic(layer1);
    layer2_img=choosePic(layer2);
    layer3_img=choosePic(layer3);
    layer4_img=choosePic(layer4);
    layer5_img=choosePic(layer5);
    layer6_img=choosePic(layer6);
    layer7_img=choosePic(layer7);
    layer8_img=choosePic(layer8);
    side=600;
    w=600;
    h=600;
    windowResized();
}
let side;
let h;
let w;
function draw() {
    background(0);
    // image(layer0_img,0,0,layer0_img.width,layer0_img.height);//windowWidth, windowHeight означает, что картинка на растянется на весь экран
    push();
    if(w>h){
        translate((w-h)/2,0)
    }
    else{
        translate(0,(h-w)/2)

    }
        // console.log(w)
        // console.log(h)
    image(layer1_img, 0, 0, side, side);//картинка будет оригинального размера
    image(layer2_img, 0, 0, side, side);
    image(layer3_img, 0, 0, side, side);
    image(layer4_img, 0, 0, side, side);
    image(layer5_img, 0, 0, side, side);
    image(layer6_img, 0, 0, side, side);
    image(layer7_img, 0, 0, side, side);
    image(layer8_img, 0, 0, side, side);
    pop();


}

function windowResized() {
    const css = getComputedStyle(canvas.parentElement),
          marginWidth = round(float(css.marginLeft) + float(css.marginRight)),
          marginHeight = round(float(css.marginTop) + float(css.marginBottom));
          w = windowWidth - marginWidth, h = windowHeight - marginHeight;
  
    resizeCanvas(w, h, true);
        console.log(w)

    side=w>h?h:w;
  }
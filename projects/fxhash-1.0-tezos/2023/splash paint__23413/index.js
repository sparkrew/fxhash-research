// these are the variables you can use as inputs to your algorithms
//console.log(fxhash)   // the 64 chars hex number fed to your algorithm
//console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

// note about the fxrand() function 
// when the "fxhash" is always the same, it will generate the same sequence of
// pseudo random numbers, always

//----------------------
// defining features
//----------------------
// You can define some token features by populating the $fxhashFeatures property
// of the window object.
// More about it in the guide, section features:
// [https://fxhash.xyz/articles/guide-mint-generative-token#features]
//
// window.$fxhashFeatures = {
//   "Background": "Black",
//   "Number of lines": 10,
//   "Inverted": true
// }

/*
// this code writes the values to the DOM as an example
const container = document.createElement("div")
container.innerText = `
  random hash: ${fxhash}¥n
  some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]¥n
`
document.body.prepend(container)
*/


let seed = fxrand() * 100000;


Matter.use('matter-attractors');
let attractor;

// matter.jsのモジュールを読み込む
var Engine = Matter.Engine,
    //Render = Matter.Render,//レンダリングにははp5jsのエンジンを使ってる
    World = Matter.World,//ワールド
	Composite = Matter.Composite,
    Composites = Matter.Composites,
	Common = Matter.Common,
    Bodies = Matter.Bodies;//ボディ
	//Runner = Matter.Runner;//ランナー

var engine;
var world;

var circles_pos = [];//多数の円のための多次元配列

var splash_times = 12;//Splashの個数の定義■色が10色しかないから10が上限になる

//動き続けるミリセカンド数
let time2 = 500;

//circles0の中心点の定義
let circles0_center_x;
let circles0_center_y;


function setup(){
    randomSeed(seed);//fxrandの設定
    
    createCanvas(windowWidth, windowHeight).style("filter", 'url(#particles-filter)');
    
    translate(width/2,height/2);
    
	engine = Engine.create();
	world = engine.world;

    //重力は下向きに1.7
    world.gravity.y = 1.0;

	Engine.run(engine);

	//アトラクターと引力に対して固定させる定義
	let isStaticoptions = {
	isStatic: true
	}
	
    
    for(h=0; h<splash_times; h++){
        
        let circles = [];//circlesの中心点のための配列
    
        //多数の円の集まりの中心点をランダムに決める
        circles0_center_x = int(random(-width/2,width/2));
        circles0_center_y = int(random(-height/2, height/2));

        //多数の円の集まりの大きさをランダムにする
        circle_size = int((width+height)/int(random(12,70)));

        //▼//////////////////////////////
        //多数の円をWorldに追加する//円形に配置する//シンプル版
        for (let i = -100; i < 100; i++) {
          for (let j = -100; j < 100; j++) {
              
          // 円の範囲内に点を描画する条件を指定する
              
              //各点のサイズをランダムにする
              point_size = random((width+height)/110,(width+height)/1200);
              
              //円の範囲内の点の密度
              point_pitch = random((width+height)/50,(width+height)/300);
            
              //多数の円の集まりの中心点と各点の距離を測る
              let distance0 = dist(circles0_center_x, circles0_center_y, circles0_center_x + point_pitch * i, circles0_center_y + point_pitch * j);
              
              //多数の円の集まりの中心点と各点の距離がcircle_size以内なら
            if (distance0 < circle_size) {
                circle0 = Bodies.circle(circles0_center_x+point_pitch*i,circles0_center_y+point_pitch*j,point_size,{ restitution: 2.5, friction: 0.2, frictionAir: 0.7 });
                circles.push(circle0);
            }
          }
        }
        //▲//////////////////////////////

        circles_pos.push(circles);
        
        //▼//////////////////////////////
        // circles[i]をWorldに加える★これでcircle0に引力を加えられる！
        for (i = 0; i < circles.length; i ++) {
        World.add(world, circles[i]);
        }
        //▲//////////////////////////////
    }
    
    //背景色の配列
    colors_bg = ["#000000","#006666","#ffccff","#660099","#cb4800","#330099","#d90033","#817d78","#157f99","#ed5a6f","#ffffff","#330000"];
    
    //点の色の配列
    colors_point = ["#000000","#000033","#006666","#ff9900","#660099","#cb4800","#330099","#d90033","#817d78","#157f99","#996699","#ed5a6f"];
    
    //colors_pointの配列の順番をランダムに変える
    colors_point.sort(function() {
        return 0.5 - Math.random();
    });
    
    
    //背景色のグラデーション
    backgroundColor = colors_bg[int(random(colors_bg.length))];//背景色
    backgroundColor_2 = colors_bg[int(random(colors_bg.length))];//背景色2
    backgroundColor_3 = colors_bg[int(random(colors_bg.length))];//背景色3
    document.body.style.background = "linear-gradient(" + Math.random() * 360 + "deg, " + backgroundColor + ", " + backgroundColor_2 + "," + backgroundColor_3 + ")";
    
}




function draw(){
    
    translate(width/2,height/2);
	noStroke();

	rectMode(CENTER);//matter.jsに合わせてオブジェクトのxyを中心にする。

    const currentTime = millis();//現在のミリセカンド

    for(i=0; i<circles_pos.length; i++){
        for(j=0; j<circles_pos[i].length; j++){
            
            //色を指定
            if(i < circles_pos.length){
               fill(colors_point[i]);
            }
        
          
          push();
          translate(circles_pos[i][j].position.x, circles_pos[i][j].position.y);
          rectMode(CENTER);
          ellipse(0, 0, (circles_pos[i][j].circleRadius));//■matterjsは半径、p5jsは直径
          pop();
            
            
            if (currentTime > time2*2){ //time2のミリセカンドが終わったら■要調整
                // 弾ける動きを0にする
                for (let l = 0; l < circles_pos[i].length; l++) {
                  circles_pos[i][l].restitution = 0;
                }
            }
            
            
            
            if (currentTime > (time2*3)){ //time2のミリセカンドが終わったら■要調整
                // 垂れる動きを個別に少なくする
                for (let m = 0; m < circles_pos[i].length; m++) {
                  circles_pos[i][m].frictionAir = random(0,1.5);
                }
            }
            
            
            if (currentTime > time2*7){//time2のミリセカンドが終わったら■要調整
                // 配列からランダムに要素を選択して動きを止める
                for (let k = 0; k < (circles_pos[i].length-int(random(20,100))); k++) {
                  var index = floor(random(circles_pos[i].length));
                  circles_pos[i][k].isSleeping = true;//これでmatter.jsの動きを止められる
                }
            }
            
            
        }//jの終わり
    }//iの終わり
    
    
  //time2のミリセカンド*10が終わったらdrawを終わる
  if (currentTime > (time2*10)){ 
    noLoop();
  }

}//drawの終わり


function mousePressed() {
window.location.reload();
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function r(min, max){
    return Math.round((min + fxrand()*(max-min))*100)/100;
}

function setup() {
  resizeCanvas(windowWidth, windowHeight);
}

let startValue = r(1,50);

function getData(startValue){
  let today = new Date();
  let start = new Date("03/01/2022");

  let days = Math.ceil((today.getTime() - start.getTime())/(1000 * 3600 * 24))

  let currentValue = startValue;
  let data = [];

  for (let i = 0; i <= days ; i++){
    let changePercentage = 0;
    if(currentValue > 1000000){
      changePercentage = r(-0.99,0.0001);
    }
    else if(currentValue < 100){
      changePercentage = r(-0.99,2);
    }
    else if(currentValue < 10){
      changePercentage = r(-0.99,4);
    }
    else if(currentValue < 1){
      changePercentage = r(-0.99,100);
    }
    else{
      changePercentage = r(-0.99,0.5);
    }
    let newValue = currentValue+(currentValue*changePercentage);
    data.push(newValue);
    currentValue = newValue;
  }
//   return only last 25 days + 1 history
  return data.slice(-26);
}

function getName(){
    let names = ["Baby","Elon","Safe","Moon","Cum","Scam","Pyramid","Doge","Coin","Rocket",
        "Snoop","Squid","Tech","FX","Hash","Weed","Drug","Cannabis","Sex", "Planet", "Shiba", "Inu",
    "Bull", "Capybara", "Snow", "Profit", "Gain", "Small", "Great", "Super", "Mega"];
    let name = "";
    let abbr = "";
    let nameLength = 0;
    for (let i = 0; nameLength < 3; i++) {
        let part = names[Math.round(r(0,names.length-1))];
        if(!name.includes(part)){
          name = name + " " + part;
          abbr = abbr + part[0];
          nameLength++;
        }
    }
    return name + "(" + abbr + ")";
}

function draw() {
  let padding = 60;
  let points = getData(startValue);
  let pointWidth = (windowWidth-(padding*2))/(points.length-1);

  noLoop();
  noFill();

  background(0,0,0);

  stroke(255);
  line(padding,padding,padding,windowHeight-padding);
  line(padding,windowHeight-padding,windowWidth-padding,windowHeight-padding);

  textAlign(LEFT);
  fill(255, 255, 255);
  textSize(20);
  text(getName(), 10, 30);
  textAlign(RIGHT);
  text("Current value: $"+Math.round(points[points.length-1]*100)/100, windowWidth-10, 30);

  textSize(12);

  for (let i = points.length-2; i >= 0; i--){
//     dates
   let d = new Date();
   d.setDate(d.getDate()-(points.length-i-2));

    line(padding+(i*pointWidth), windowHeight-padding, padding+(i*pointWidth), windowHeight-padding+5);
    textAlign(CENTER);
    text(d.toISOString().slice(5, 10), padding+2+(i*pointWidth), windowHeight-padding+5, pointWidth, windowHeight-padding+5);
  }

  //prices
  let pricesMax = 0;
  for(i in points){
    if(points[i] > pricesMax){
      pricesMax = points[i];
    }
  }


  let priceHeight = (windowHeight-(padding*2))/10;
  for (let i = 0; i <= 10 ; i++){
    line(padding-5, padding+(i*priceHeight), padding, padding+(i*priceHeight));
    textAlign(RIGHT);
    text(Math.ceil(pricesMax - (pricesMax/10)*i), -10, (padding+(i*priceHeight))-5, padding, (padding+(i*priceHeight))-5);
  }

//   draw green/red dildos
  let prevY = windowHeight-padding;
  for (let i = 0; i <= points.length; i++){
    let yVal = (windowHeight-padding)-((points[i]/pricesMax)*(windowHeight-(padding*2)));
    if(i > 0){
      if(prevY-yVal < 0){
        fill(color(255,0,0));
      }
      else{
        fill(color(0,255,0));
      }
      noStroke();
      rect(padding+((i-1)*pointWidth), yVal, pointWidth, prevY-yVal);
    }
    prevY = yVal;
  }

}
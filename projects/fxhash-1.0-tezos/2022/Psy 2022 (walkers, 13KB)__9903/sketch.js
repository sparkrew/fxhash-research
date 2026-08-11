(function() {

  'use strict';
  // initialise canvas
  const canvas = document.getElementById('sketch');
  const ctx = canvas.getContext('2d');
  const width = canvas.width = window.innerWidth;
  const height = canvas.height = window.innerHeight;
  const step = 1;
  const isToRight = window.$fxhashFeatures['Psy Matrix'] ? 0 : window.$fxhashFeatures['To Right'];
  const isToTop = window.$fxhashFeatures['Psy Matrix'] ? 0 : window.$fxhashFeatures['To Top'];
  const isToDown = window.$fxhashFeatures['Psy Matrix'] ? 0 : window.$fxhashFeatures['To Down'];

  const round = function (float) {
    return float^0;
  };


  const colors = [
    ["f94144","f3722c","f8961e","f9844a","f9c74f","90be6d","43aa8b","4d908e","577590","277da1"],
    ["ffadad","ffd6a5","fdffb6","caffbf","9bf6ff","a0c4ff","bdb2ff","ffc6ff"],
    ["f94144","f3722c","f8961e","f9c74f","90be6d","43aa8b","577590"],
    ["fbf8cc","fde4cf","ffcfd2","f1c0e8","cfbaf0","a3c4f3","90dbf4","8eecf5","98f5e1","b9fbc0"],
    ["6a040f","9d0208","d00000","dc2f02","e85d04","f48c06","faa307","ffba08"],
    ["013a63","01497c","014f86","2a6f97","2c7da0","468faf","61a5c2","89c2d9","a9d6e5"],
    ["ced4da","adb5bd","6c757d","495057","343a40","212529"],
  ];


  const Walker = function(i) {
    const self = this;
    self.x = rand(0,width);
    self.y = rand(0,height);
    if(window.$fxhashFeatures['Palette'] === 'Original'){
      self.color = 'rgb(' + rand(180, 240) + ',' + rand(180, 240) + ',' + rand(180, 240) + ')';
    } else {
      const palette = colors[window.$fxhashFeatures['Palette'] - 1]
      self.color = '#' + palette[i % palette.length];
    }

    if(window.$fxhashFeatures['Psy Matrix']){
      const cM = ["10451d","155d27","1a7431","208b3a","25a244","2dc653","4ad66d","6ede8a","92e6a7","b7efc5"];
      self.color = '#' + cM[i % cM.length];
    }
    
  };

  Walker.prototype.display = function() {
    const self = this;
    ctx.beginPath();
    ctx.fillStyle = self.color;
    ctx.rect(self.x, self.y, 1, 1);
    ctx.fill();
    ctx.closePath();
  };

  Walker.prototype.walk = function () {
    const choice = fxrand();
    if (choice >= 0 && choice < 0.25) {
      this.x = this.x + step * (isToRight ? 3 : 1);
    } else if (choice >= 0.25 && choice < 0.5) {
      this.x = this.x - step;
    } else if (choice >= 0.5 && choice < 0.75) {
      this.y += step * (window.$fxhashFeatures['Psy Matrix'] ? 3 : 1) * (isToDown ? 3 : 1);
    } else {
      this.y -= step * (isToTop ? 3 : 1);
    }
  };

  const w = [];

  const collectWalkers1 = function () {
    w.length = 0;
    ctx.clearRect ( 0 , 0 , canvas.width, canvas.height );
    for (let i = 0; i < window.$fxhashFeatures['Amount']; i++) {
      w.push(new Walker(i));
    }
  };
  collectWalkers1();

 const _step = 20;


  const collectWalkers = function () {
    w.length = 0;
    let v;
    for (const x = 0; x < width; x += _step) {
      for (const y = 0; y < height; y += _step/2) {
        v = new Walker(x,y);
        v.color = '#ccc';
        w.push(v);
      }
    }
  };

  const draw = function() {
    for (let n = 0; n < w.length; n++){
      w[n].walk();
      w[n].display();
    }
  };
  draw();

  if ( !window.requestAnimationFrame ) {
    window.requestAnimationFrame = ( function() {
      return window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback, element) {
          window.setTimeout( callback, 70 );
        };
    } )();
  }

  let animId;
  const animloop = function(){
    draw();
    animId = requestAnimationFrame(animloop);
  };
  ctx.fillStyle= $fxhashFeatures['Psy Matrix'] ? "#000" : "#fff";
  ctx.fillRect(0, 0, width, height);

  if(window.$fxhashFeatures['Sign']){
    ctx.font = '140px Helvetica';
    ctx.fillStyle = $fxhashFeatures['Psy Matrix'] ? '#fff' : '#5e5e5e';
    ctx.fillText('HaSh2aRt', 395, 380);
  }

  animloop();
  canvas.addEventListener('click', function(evt){
    const img = canvas.toDataURL("image/jpg");
    const base64ImageData = img;
    const contentType = 'image/png';
    const byteCharacters = atob(base64ImageData.substr(`data:${contentType};base64,`.length));
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
        const slice = byteCharacters.slice(offset, offset + 1024);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, {type: contentType});
    const blobUrl = URL.createObjectURL(blob);
    // window.open(blobUrl, '_blank', 'height='+height/1.5+',width='+width/1.5);
    const a  = document.createElement('a');
    a.href = blobUrl;
    a.download = 'image.png';
    a.click()
  });
})();

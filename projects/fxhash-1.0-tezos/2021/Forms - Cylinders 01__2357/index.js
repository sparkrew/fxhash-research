var canvas = document.getElementById("canvas");
var engine = new BABYLON.Engine(canvas, true);

let clockRotation;
let numberOfIterations;
let glow;
let presenceGrain;
let firstColor;
let secondColor;
let thirdColor;
let fourColor;

let rgbBack = [fxrand()*1, fxrand()*1, fxrand()*1];
let rgb = [fxrand()*1, fxrand()*1, fxrand()*1];
let rgb02 = [fxrand()*1, fxrand()*1, fxrand()*1];
let rgb03 = [fxrand()*1, fxrand()*1, fxrand()*1];
let rgb04 = [fxrand()*1, fxrand()*1, fxrand()*1];

const randRotate = fxrand() * 1;
let ratioRX = 2 + (fxrand() * 5);
const frame = 100 + (fxrand()*250);
const randMesh = fxrand() * 100;
const glowRand = fxrand() * 1;
const rdAnimOrNot = fxrand() * 1;
const grainOrNot = fxrand() * 1;


const rd = 1 * fxrand();

const cubeRotationX = new BABYLON.Animation("cubeRotationX", "rotation.x", ratioRX, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
const cubeRotationX02 = new BABYLON.Animation("cubeRotationX02", "rotation.x", ratioRX, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);


const rotateKeysX = [];
const rotateKeysX02 = [];

if(randRotate > 0.5){
  ratioRX = ratioRX;
}
else if(randRotate < 0.5){
  ratioRX = -ratioRX;
}
rotateKeysX.push({
    frame: 0,
    value: 0
});

rotateKeysX.push({
    frame: 120,
    value: ratioRX  * (1 * Math.PI)
});
rotateKeysX.push({
    frame: 240,
    value: 0
});

cubeRotationX.setKeys(rotateKeysX);

/*rotateKeysX02.push({
    frame: 0,
    value: 0
});

rotateKeysX02.push({
    frame: 120,
    value: -(ratioRX  * (1 * Math.PI))
});
rotateKeysX02.push({
    frame: 240,
    value: 0
});

cubeRotationX02.setKeys(rotateKeysX02);*/


  var createScene = function (){


        BABYLON.SceneLoader.ShowLoadingScreen = false;
        BABYLON.SceneLoader.Load("", "ABSTRACT04.babylon", engine, function (scene) {

          var pipeline = new BABYLON.DefaultRenderingPipeline(
    "defaultPipeline", // The name of the pipeline
    true, // Do you want the pipeline to use HDR texture?
    scene, // The scene instance
    [scene.cameras[0]] // The list of cameras to be attached to
);

          pipeline.samples = 4;
          pipeline.fxaaEnabled = true;

          if(grainOrNot > 0.9){
            pipeline.grainEnabled = true;
            pipeline.grain.intensity = 20;
          } else{
            pipeline.grainEnabled = false;
          }

          scene.clearColor = new BABYLON.Color3(rgbBack[0], rgbBack[1], rgbBack[2]);

          if(randMesh < 9.5){
            scene.meshes[0].isVisible = false;
            scene.meshes[1].isVisible = false;
          }
          else if(randMesh > 9.5 && randMesh < 19){
            scene.meshes[0].isVisible = false;
            scene.meshes[2].isVisible = false;
          }
          else if(randMesh > 19 && randMesh < 28.5){
            scene.meshes[0].isVisible = false;
            scene.meshes[3].isVisible = false;
          }
          else if(randMesh > 28.5 && randMesh < 38){
            scene.meshes[1].isVisible = false;
            scene.meshes[3].isVisible = false;
          }
          else if(randMesh > 38 && randMesh < 47.5){
            scene.meshes[2].isVisible = false;
            scene.meshes[3].isVisible = false;
          }
          else if(randMesh > 47.5 && randMesh < 57){
            scene.meshes[2].isVisible = false;
            scene.meshes[1].isVisible = false;
          }
          else if(randMesh > 57 && randMesh < 66.5){
            scene.meshes[0].isVisible = false;
            scene.meshes[1].isVisible = false;
            scene.meshes[2].isVisible = false;
          }
          else if(randMesh > 66.5 && randMesh < 75.5){
            scene.meshes[0].isVisible = false;
            scene.meshes[1].isVisible = false;
            scene.meshes[3].isVisible = false;
          }
          else if(randMesh > 75.5 && randMesh < 85){
            scene.meshes[1].isVisible = false;
            scene.meshes[3].isVisible = false;
            scene.meshes[2].isVisible = false;
          }
          else if(randMesh > 85 && randMesh < 94.5){
            scene.meshes[3].isVisible = false;
            scene.meshes[2].isVisible = false;
            scene.meshes[0].isVisible = false;
          }
          else if(randMesh > 94.5){

          }

          var materialEm = new BABYLON.StandardMaterial("mm", scene);
          materialEm.diffuseColor = new BABYLON.Color3(rgb[0], rgb[1], rgb[2]);
          materialEm.specularColor = new BABYLON.Color3(rgb[0], rgb[1], rgb[2]);
          materialEm.emissiveColor = new BABYLON.Color3(rgb[0], rgb[1], rgb[2]);
          materialEm.ambientColor = new BABYLON.Color3(rgb[0], rgb[1], rgb[2]);
          scene.meshes[0].material = materialEm;

          var materialEm02 = new BABYLON.StandardMaterial("mm", scene);
          materialEm02.diffuseColor = new BABYLON.Color3(rgb02[0], rgb02[1], rgb02[2]);
          materialEm02.specularColor = new BABYLON.Color3(rgb02[0], rgb02[1], rgb02[2]);
          materialEm02.emissiveColor = new BABYLON.Color3(rgb02[0], rgb02[1], rgb02[2]);
          materialEm02.ambientColor = new BABYLON.Color3(rgb02[0], rgb02[1], rgb02[2]);
          scene.meshes[1].material = materialEm02;

          var materialEm03 = new BABYLON.StandardMaterial("mm", scene);
          materialEm03.diffuseColor = new BABYLON.Color3(rgb03[0], rgb03[1], rgb03[2]);
          materialEm03.specularColor = new BABYLON.Color3(rgb03[0], rgb03[1], rgb03[2]);
          materialEm03.emissiveColor = new BABYLON.Color3(rgb03[0], rgb03[1], rgb03[2]);
          materialEm03.ambientColor = new BABYLON.Color3(rgb03[0], rgb03[1], rgb03[2]);
          scene.meshes[2].material = materialEm03;

          var materialEm04 = new BABYLON.StandardMaterial("mm", scene);
          materialEm04.diffuseColor = new BABYLON.Color3(rgb04[0], rgb04[1], rgb04[2]);
          materialEm04.specularColor = new BABYLON.Color3(rgb04[0], rgb04[1], rgb04[2]);
          materialEm04.emissiveColor = new BABYLON.Color3(rgb04[0], rgb04[1], rgb04[2]);
          materialEm04.ambientColor = new BABYLON.Color3(rgb04[0], rgb04[1], rgb04[2]);
          scene.meshes[3].material = materialEm04;

          console.log(scene.meshes);

          const animationRotation = scene.meshes[0];
          const animationRotation02 = scene.meshes[1];
          const animationRotation03 = scene.meshes[2];
          const animationRotation04 = scene.meshes[3];

          animationRotation.animations = [];
          animationRotation02.animations = [];
          animationRotation03.animations = [];
          animationRotation04.animations = [];

          if(rdAnimOrNot > 0.5){
            if(rd < 0.5)
            {
              animationRotation.animations.push(cubeRotationX);
              animationRotation02.animations.push(cubeRotationX);
              animationRotation03.animations.push(cubeRotationX);
              animationRotation04.animations.push(cubeRotationX);
              scene.beginAnimation(animationRotation, 0, 100000, true);
              scene.beginAnimation(animationRotation02, 0, 100000, true);
              scene.beginAnimation(animationRotation03, 0, 100000, true);
              scene.beginAnimation(animationRotation04, 0, 100000, true);
            }
            else if(rd > 0.5)
            {
              animationRotation.animations.push(cubeRotationX);
              animationRotation02.animations.push(cubeRotationX);
              animationRotation03.animations.push(cubeRotationX);
              animationRotation04.animations.push(cubeRotationX);
              scene.beginAnimation(animationRotation, 0, 100000, true);
              scene.beginAnimation(animationRotation02, 0, 100000, true);
              scene.beginAnimation(animationRotation03, 0, 100000, true);
              scene.beginAnimation(animationRotation04, 0, 100000, true);
            }
          } else{

          }



                engine.runRenderLoop(function() {
                    scene.render();
                });
            });

            (function (progress) {

            });

        var gl = new BABYLON.GlowLayer("glow", scene, {
        mainTextureSamples: 16
        });
        if(glowRand > 0.1){
          gl.intensity = 0;
        }
        else if(glowRand < 0.1){
          gl.intensity = 0.5;
        }

    return scene;

  };
  var scene = createScene();

  if(grainOrNot > 0.9){
    presenceGrain = "Grain"
  } else{
    presenceGrain = "No Grain"
}
if(randRotate > 0.5){
  if(rdAnimOrNot > 0.5){
      clockRotation = "ClockWise";
  } else{
    clockRotation = "No animation";
  }
}
else if(randRotate < 0.5){
  if(rdAnimOrNot > 0.5){
      clockRotation = "Counter ClockWise"
  } else{
    clockRotation = "No animation";
  }
}

if(glowRand > 0.1){
  glow = "Not Glowy"
}
else if(glowRand < 0.1){
  glow = "Glowy"
}

if(randMesh > 94.5){
  numberOfIterations = 4;
  firstColor =  " Red : " + (rgb[0] * 255).toFixed(0) + " Green : " + (rgb[1] * 255).toFixed(0) + " Blue : " + (rgb[2] * 255).toFixed(0);
  secondColor =  " Red : " + (rgb02[0]*255).toFixed(0) + " Green : " + (rgb02[1]*255).toFixed(0) + " Blue : " + (rgb02[2]*255).toFixed(0);
  thirdColor = " Red : " + (rgb03[0]*255).toFixed(0) + " Green : " + (rgb03[1]*255).toFixed(0) + " Blue : " + (rgb03[2] * 255).toFixed(0);
  fourColor =  " Red : " + (rgb04[0]*255).toFixed(0) + " Green : " + (rgb04[1]*255).toFixed(0) + " Blue : " + (rgb04[2]*255).toFixed(0);
}
else if(randMesh < 9.5){
  numberOfIterations = 2;
  firstColor =  "No iteration";
  secondColor =  "No iteration";
  thirdColor = " Red : " + (rgb03[0]*255).toFixed(0) + " Green : " + (rgb03[1]*255).toFixed(0) + " Blue : " + (rgb03[2] * 255).toFixed(0);
  fourColor =  " Red : " + (rgb04[0]*255).toFixed(0) + " Green : " + (rgb04[1]*255).toFixed(0) + " Blue : " + (rgb04[2]*255).toFixed(0);
}
else if(randMesh > 9.5 && randMesh < 19){
  numberOfIterations = 2;
  firstColor =   "No iteration";
  secondColor =  " Red : " + (rgb02[0]*255).toFixed(0) + " Green : " + (rgb02[1]*255).toFixed(0) + " Blue : " + (rgb02[2]*255).toFixed(0);
  thirdColor = "No iteration";
  fourColor =  " Red : " + (rgb04[0]*255).toFixed(0) + " Green : " + (rgb04[1]*255).toFixed(0) + " Blue : " + (rgb04[2]*255).toFixed(0);

}
else if(randMesh > 19 && randMesh < 28.5){
  numberOfIterations = 2;
  firstColor =   "No iteration";
  secondColor =  " Red : " + (rgb02[0]*255).toFixed(0) + " Green : " + (rgb02[1]*255).toFixed(0) + " Blue : " + (rgb02[2]*255).toFixed(0);
  thirdColor = " Red : " + (rgb03[0]*255).toFixed(0) + " Green : " + (rgb03[1]*255).toFixed(0) + " Blue : " + (rgb03[2] * 255).toFixed(0);
  fourColor =  "No iteration";

}
else if(randMesh > 28.5 && randMesh < 38){
  numberOfIterations = 2;
  firstColor =  " Red : " + (rgb[0] * 255).toFixed(0) + " Green : " + (rgb[1] * 255).toFixed(0) + " Blue : " + (rgb[2] * 255).toFixed(0);
  secondColor =  "No iteration";
  thirdColor = " Red : " + (rgb03[0]*255).toFixed(0) + " Green : " + (rgb03[1]*255).toFixed(0) + " Blue : " + (rgb03[2] * 255).toFixed(0);
  fourColor =  "No iteration";

}
else if(randMesh > 38 && randMesh < 47.5){
  numberOfIterations = 2;
  firstColor =  " Red : " + (rgb[0] * 255).toFixed(0) + " Green : " + (rgb[1] * 255).toFixed(0) + " Blue : " + (rgb[2] * 255).toFixed(0);
  secondColor =  " Red : " + (rgb02[0]*255).toFixed(0) + " Green : " + (rgb02[1]*255).toFixed(0) + " Blue : " + (rgb02[2]*255).toFixed(0);
  thirdColor = "No iteration";
  fourColor =  "No iteration";

}
else if(randMesh > 47.5 && randMesh < 57){
  numberOfIterations = 2;
  firstColor =  " Red : " + (rgb[0] * 255).toFixed(0) + " Green : " + (rgb[1] * 255).toFixed(0) + " Blue : " + (rgb[2] * 255).toFixed(0);
  secondColor =  "No iteration";
  thirdColor = "No iteration";
  fourColor =  " Red : " + (rgb04[0]*255).toFixed(0) + " Green : " + (rgb04[1]*255).toFixed(0) + " Blue : " + (rgb04[2]*255).toFixed(0);

}
else if(randMesh > 57 && randMesh < 66.5){
  numberOfIterations = 1;
  firstColor =   "No iteration";
  secondColor =  "No iteration";
  thirdColor = "No iteration";
  fourColor =  fourColor =  " Red : " + (rgb04[0]*255).toFixed(0) + " Green : " + (rgb04[1]*255).toFixed(0) + " Blue : " + (rgb04[2]*255).toFixed(0);

}
else if(randMesh > 66.5 && randMesh < 75.5){
  numberOfIterations = 1;
  firstColor =   "No iteration";
  secondColor =  "No iteration";
  thirdColor = " Red : " + (rgb03[0]*255).toFixed(0) + " Green : " + (rgb03[1]*255).toFixed(0) + " Blue : " + (rgb03[2] * 255).toFixed(0);
  fourColor =  "No iteration";

}
else if(randMesh > 75.5 && randMesh < 85){
  numberOfIterations = 1;
  firstColor =  " Red : " + (rgb[0] * 255).toFixed(0) + " Green : " + (rgb[1] * 255).toFixed(0) + " Blue : " + (rgb[2] * 255).toFixed(0);
  secondColor =  "No iteration";
  thirdColor = "No iteration";
  fourColor =  "No iteration";

}
else if(randMesh > 85 && randMesh < 94.5){
  numberOfIterations = 1;
  firstColor =   "No iteration";
  secondColor =  " Red : " + (rgb02[0]*255).toFixed(0) + " Green : " + (rgb02[1]*255).toFixed(0) + " Blue : " + (rgb02[2]*255).toFixed(0);
  thirdColor = "No iteration";
  fourColor =  "No iteration";
}

window.$fxhashFeatures = {
  "Rotation": clockRotation,
  "Number of Iterations": numberOfIterations,
  "Glow": glow,
  "Grain": presenceGrain,
  "Background Color": " Red : " + (rgbBack[0] * 255).toFixed(0) + " Green : " + (rgbBack[1] * 255).toFixed(0) + " Blue : " + (rgbBack[2] * 255).toFixed(0),
  "First Iteration Color": firstColor,
  "Second Iteration Color": secondColor,
  "Third Iteration Color": thirdColor,
  "Fourth Iteration Color": fourColor
}

        window.addEventListener("resize", function () {
            engine.resize();
        });

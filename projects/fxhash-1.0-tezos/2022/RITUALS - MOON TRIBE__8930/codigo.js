var canvas = document.getElementById("renderCanvas");
var engine = null;
var scene = null;
var sceneToRender = null;
var createDefaultEngine = function() { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true,  disableWebGL2Support: false}); };
var createScene = function () {



// This creates a basic Babylon Scene object (non-mesh)
var scene = new BABYLON.Scene(engine);
var rotando=0;
var baseNro;
var base;
var mdNro;
var md;
var muNro;
var topNro;
var md;
var luzNro;
var partiNro;
var varianteNro=0;
var solNro;
var energia;
var tribu;
var poder;
var polvo="";
function randomizar() {
   baseNro= Math.floor(fxrand() * 4 + 1);
   mdNro= Math.floor(fxrand() * 5 + 1);
   muNro= Math.floor(fxrand() *4+ 1);
   topNro= Math.floor(fxrand() * 4 + 1);
  luzNro= fxrand() * 100 + 1;
  partiNro= fxrand() * 100 + 1;
   varianteNro=Math.floor( fxrand() * 100);

 solNro=Math.floor( fxrand() * 100);
 if(luzNro>90){
energia="Eclypse"; }else{  energia="Moon";}

if(solNro<=5){
  tribu="The enlightened shaman"}
  if(solNro>5&&solNro<=20){
    tribu="The Shaman"}
    if(solNro>20&&solNro<=25){
      tribu="The Priests of enlightenment"}
      if(solNro>25&&solNro<=40){
        tribu="The Priests"}
        if(solNro>40){
          tribu="The Crowd"}

          if(varianteNro<10){
            poder="Dark ring"}
            if(varianteNro>=10&&varianteNro<20){
              poder="Light ring"}
              if(varianteNro>=20&&varianteNro<=30){
                poder="Light spheres"}
                if(varianteNro>=30&&varianteNro<40){
                  poder="Triad"}
                  if(varianteNro>=40&&varianteNro<50){
                    poder="Light bars"}
                    if(varianteNro>=50&&varianteNro<60){
                      poder="Offerings"}
                    if(varianteNro>=60&&varianteNro<70){
                      poder="Ground Spheres"}
                      if(varianteNro>=70&&varianteNro<80){
                        poder="Levitating Rocks"}

                          if(varianteNro>=80&&varianteNro<90){
                            poder="Mystical offering"}
                            if(varianteNro>=90){
                              poder="Six souls"}
                              //
                              if(partiNro<30){
                                polvo="Total"}
                                if(partiNro>=30&&partiNro<60){
                                  polvo="Crown"}
                                if(partiNro>=60){
                                  polvo="Ground"
                                }


}

//
randomizar();
//

//

window.$fxhashFeatures = {

  // feature can only be "low", "medium" or "high"
  "Tribe": energia,
  "Society":tribu,
  "Energy":poder,
  "Glowing Dust":polvo
}


var colores=["#151529","#444444","#00000","#0FF7C0","#2E063D","#666666"];
var luzArray=["#FF8800","#666666","#009922"];
var fondo=new BABYLON.Color3.FromHexString(colores[0]);
if(luzNro>90){
  var colorLuz=new BABYLON.Color3.FromHexString(luzArray[1]);
}
if(luzNro<=90){
  var colorLuz=new BABYLON.Color3.FromHexString(luzArray[2]);
}
scene.clearColor =fondo;
    var camera = new BABYLON.ArcRotateCamera("camera", Math.PI/2 ,0, 15, new BABYLON.Vector3(0,-.9,0), scene);
    camera.wheelPrecision = 120;
    camera.attachControl(canvas, false);
    camera.panningDistanceLimit=0;
    camera.setPosition(new BABYLON.Vector3(0, -1.6, -10));
  //  camera.radius=11;
  var radio=10.5;
  camera.radius=radio;

    camera.lowerRadiusLimit=4;
    camera.upperRadiusLimit=16;
    camera.upperBetaLimit = Math.PI / 1.8;
   camera.panningAxis = new BABYLON.Vector3(0, 0, 0);
var gl = new BABYLON.GlowLayer("glow", scene);
gl.intensity = 1;
    const box = BABYLON.MeshBuilder.CreateBox("box", {height: 1, width: 0.75, depth: 0.25});
    box.position=new BABYLON.Vector3(0,4,0);
    box.visibility=false;
  camera.parent=box;

// This creates a light, aiming 0,1,0 - to the sky (non-mesh)
var light = new BABYLON.PointLight("l1", new BABYLON.Vector3(0, 0, 0), scene);
          light.Color4=new BABYLON.Color4(51/255,40/255, 88/255, 1);
        light.position = new BABYLON.Vector3(5,10,10);
        light.diffuse = new BABYLON.Color4(0/255, 0/255, 255/255, 1);
        light.intensity =100;
        light.range=100;

//
var light2 = new BABYLON.PointLight("l1", new BABYLON.Vector3(0, 0, 0), scene);
          light2.Color4=new BABYLON.Color4(51/255,40/255, 88/255, 1);
        light2.position = new BABYLON.Vector3(-5,10,-10);
        light2.diffuse = new BABYLON.Color4(0/255, 0/255, 255/255, 1);
        light2.intensity =100;
        light2.range=40;
///
var lightT = new BABYLON.PointLight("l1", new BABYLON.Vector3(0, 0, 0), scene);
          lightT.Color4=new BABYLON.Color3(1, .5, 0);
        lightT.position = new BABYLON.Vector3(0,9,0);
        lightT.diffuse = colorLuz;
        lightT.intensity =100;
        lightT.range=50;
        ///
        var light3= new BABYLON.PointLight("l1", new BABYLON.Vector3(0, 0, 0), scene);
                  light3.Color4=new BABYLON.Color3(0, 0, 1);
                //light3.position = new BABYLON.Vector3(0,.9,-8);
                light3.diffuse = colorLuz;
                light3.intensity =30;
                light3.range=80;
                light3.parent=box;
                const boxLight = BABYLON.MeshBuilder.CreateBox("box", {height: 1, width: 1, depth: 1});
                boxLight.position=new BABYLON.Vector3(0,10,-8);
                boxLight.parent=box;
            //    boxLight.visibility=false;
//

//
     // Reflection probe
//

// Our built-in 'sphere' shape.
var spot = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0,5, 0), new BABYLON.Vector3(0, -1, 0), Math.PI / 2, 10, scene);
spot.diffuse = new BABYLON.Color3(1, .5, 0);
spot.specular = new BABYLON.Color3(1,.5, 0);
spot.intensity=80;
///
var pivot = new BABYLON.TransformNode("root");
pivot.position=new BABYLON.Vector3(0,3,0);
var colorPersonaje=new BABYLON.Color3(0, 0,0);

var mat5 = new BABYLON.StandardMaterial("mat4", scene);
mat5.specularColor = new BABYLON.Color3(0, 0, 0);
mat5.diffuseColor = new BABYLON.Color3(0, 0, 0);
mat5.emissiveColor = colorPersonaje;
mat5.backFaceCulling = false;
//
//
var matInterior = new BABYLON.StandardMaterial("mat6", scene);
matInterior.specularColor = new BABYLON.Color3(0, 0, 0);
matInterior.diffuseColor = new BABYLON.Color3(0, 0, 0);
var colorInterior=new BABYLON.Color3(0, 0,0);

matInterior.emissiveColor = colorInterior;
//
//
          var negro = new BABYLON.PBRMaterial("negro", scene);
          negro.environmentIntensity =0.5;
          negro.specularIntensity = 1;
          negro.metallic=.9;
          negro.roughness=1;
          negro.albedoColor = new BABYLON.Color4(100/255, 100/255, 100/255, 1);
//
var luzMat = new BABYLON.PBRMaterial("negro", scene);
luzMat.environmentIntensity =0.5;
luzMat.specularIntensity = 1;
luzMat.metallic=.9;
luzMat.roughness=1;
luzMat.albedoColor = colorLuz;
luzMat.emissiveColor=colorLuz;

//
  var luz =new BABYLON.StandardMaterial("luz", scene);
  luz.metallic=0;
  luz.roughness=0;
  luz.albedoColor = new BABYLON.Color4(100/255, 100/255, 100/255, 1);

  luz.emissiveColor = new BABYLON.Color4(255/255, 80/255, 0/255, 1);

//

  var piso = new BABYLON.PBRMaterial("piso", scene);
      negro.environmentIntensity =2;
      piso.albedoTexture = new BABYLON.Texture("textures/ground1_c.jpg", scene, false, false);
      piso.albedoColor = albedoColor = new BABYLON.Color4(100/255, 100/255, 255/255, 1)
      piso.albedoTexture.uScale = 1.0;
      piso.albedoTexture.vScale = 1.0;
     piso.metallicTexture = new BABYLON.Texture("textures/ground1_r.jpg", scene, false, false);
     piso.metallicTexture.uScale = 1.0;
     piso.metallicTexture.vScale = 1.0;
       piso.metallic=1;
       piso.roughness=1;
      piso.bumpTexture = new BABYLON.Texture("textures/ground1_n.jpg", scene, false, false);
      piso.bumpTexture.uScale = 1.0;
      piso.bumpTexture.vScale = 1.0;

const ground = BABYLON.MeshBuilder.CreateGround("ground", {height: 40, width: 40, subdivisions:20});
    ground.position=new BABYLON.Vector3(0,0,0);
    ground.material=piso;
    ground.metallic=2;
//

scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
      scene.fogStart =9;
      scene.fogEnd = 20;
      scene.fogColor = fondo;



var emisivo;
var piedra;
var base1;
//

//
BABYLON.SceneLoader.ImportMesh("", "", "./models/bottom.babylon", scene, function (meshes) {
  //
  for(i=1;i<5;i++){
    if (i!=baseNro){
   var base=scene.getMeshByName("b"+i);
    base.dispose();
}
if(i ==baseNro){
  base1=scene.getMeshByName("b"+i);
  var  emi4 =scene.getMaterialByName("eb"+baseNro);
       emi4.albedoColor=colorLuz;
       emi4.emissiveColor=colorLuz;
       emi4.metallic=1;
       emi4.roughness=1;
}
    }

  });


  BABYLON.SceneLoader.ImportMesh("", "", "./models/md.babylon", scene, function (meshes) {
    //
    for(i=1;i<6;i++){
      if (i!=mdNro){
    var  md=scene.getMeshByName("md"+i);
      md.dispose();
  }
  if(i ==mdNro){
    var  emi3 =scene.getMaterialByName("emd"+mdNro);
         emi3.albedoColor=colorLuz;
         emi3.emissiveColor=colorLuz;
         emi3.metallic=1;
         emi3.roughness=1;
  }

      }

    });



      //
      BABYLON.SceneLoader.ImportMesh("", "", "./models/mu.babylon", scene, function (meshes) {
        //
        for(i=1;i<5;i++){
          if (i!=muNro){
        var  mu=scene.getMeshByName("mu"+i);
          mu.dispose();
      }
      if(i ==muNro){
        var  emi2 =scene.getMaterialByName("emu"+muNro);
             emi2.albedoColor=colorLuz;
             emi2.emissiveColor=colorLuz;
             emi2.metallic=1;
             emi2.roughness=1;
      }

          }

        });
      //

      BABYLON.SceneLoader.ImportMesh("", "", "./models/top.babylon", scene, function (meshes) {
        //

        for(i=1;i<5;i++){

          if (i!=topNro){
        var  top=scene.getMeshByName("t"+i);
          top.dispose();

      }

      if(i ==topNro){
        var  emi1 =scene.getMaterialByName("em"+topNro);
             emi1.albedoColor=colorLuz;
             emi1.emissiveColor=colorLuz;
             emi1.metallic=1;
             emi1.roughness=1;
      }
          }



        });
        ///
        var roca1;
        var roca2;
        var roca3;
        var roca4;
        BABYLON.SceneLoader.ImportMesh("", "", "./models/personajes.babylon", scene, function (meshes) {
          //
          var personas= scene.getMeshByName("personajes");
          var betas = Math.random() * 2* Math.PI;
          personas.rotate(BABYLON.Axis.Y,  betas, BABYLON.Space.WORLD);
          var dorado= scene.getMeshByName("sol");
          var beta2 = Math.random() * 2* Math.PI;
      //    box.rotate(BABYLON.Axis.Y,  beta2, BABYLON.Space.WORLD);
          //
          roca1 = scene.getMeshByName("roca1");
          roca2 = scene.getMeshByName("roca2");
          roca3 = scene.getMeshByName("roca3");
          roca4 = scene.getMeshByName("roca4");
          roca1.visibility=roca2.visibility=roca3.visibility=roca4.visibility=false;
          var resa= scene.getMeshByName("resadores");

          resa.rotate(BABYLON.Axis.Y,  betas, BABYLON.Space.WORLD);
          resa.visibility=false;
          //
          personas.visibility=false;
          dorado.visibility=false;
        //      resadores.visibility=false;
          if(solNro<=5){
           dorado.visibility=true;
           dorado.material=luzMat;

          }
          if(solNro>5 && solNro<=20){
            dorado.visibility=true;
            //  resadores.visibility=true;
          }
          if(solNro>20 && solNro<=25){
              resa.visibility=true;
              resa.material=luzMat;
          }

          if(solNro>25 && solNro<=40){
              resa.visibility=true;
          }



          if(solNro>40){
             personas.visibility=true;
          }

          if(varianteNro>70 && varianteNro<80){

             roca1.visibility=roca2.visibility=roca3.visibility=roca4.visibility=true;
          }


                  //   for(i=1;i<5;i++){
        //     if (i!=topNro){
        //   var  top=scene.getMeshByName("t"+i);
        //     top.dispose();
        // }
        //     }


          });
      //
      ground.position.y = 0;
      var beta = Math.random() * 2* Math.PI;
      ground.rotate(BABYLON.Axis.Y,  beta, BABYLON.Space.WORLD);
      //


  var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: .5, segments: 32}, scene);
  sphere.position.x=0.6;
  sphere.position.y=.3;
    sphere.position.z=-2;
    sphere.material=negro;
    sphere.visibility=false;
    //
    var shadowGenerator00 = new BABYLON.ShadowGenerator(512, light2);
   shadowGenerator00.getShadowMap().renderList.push(sphere);
   shadowGenerator00.useContactHardeningShadow = true;
   shadowGenerator00.contactHardeningLightSizeUVRatio = 0.0075;
  // ground.receiveShadows = true;
  //  shadowGenerator.getShadowMap().renderList.push(sphere);
  //shadowGenerator.addShadowCaster(sphere);
      //
      music = new BABYLON.Sound("", "./audio.mp3", scene, null, {
      loop: true,
      autoplay: true,
      spatialSound: false,
      //distanceModel: "exponential",
      rolloffFactor:2,
      volume:1
      });
      //
      var t=0;
      var movimiento=0;
      scene.registerBeforeRender(function() {
        pivot.addRotation(0,0.0004,0.001);
        movimiento+=0.0055;
      //  camera.radius=radio-movimiento;
      if(roca1!=null){
      roca1.addRotation(0.002,0.004,0);
      roca2.addRotation(-0.002,0.002,0.004);
      roca3.addRotation(0.004,0,0.002);
      roca4.addRotation(-0.002,0.001,-0.003);
      }
      if(rotando>0){
      box.addRotation(0,-0.0004,0);
//  box.addRotation(0,-0.0006,0);

      }
      t+=0.01;
    torus.position.y=  Math.sin(t*.2)*1.5+2;
    cilindro.position.y=  Math.sin(t*.2)*1.5+2;
      })
      //
      //
      var rotando=0;
      var advancedTexture =BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("advancedTexture",true,scene);
      var button = BABYLON.GUI.Button.CreateImageButton("but", "", "textures/bienvenido.png");
   button.width = "1000px";
   button.height = "1000px";
   button.color = "white";
   button.thickness=0;

      BABYLON.Engine.audioEngine.useCustomUnlockedButton = true;
      button.onPointerDownObservable.add(() => {
        button.dispose();
        BABYLON.Engine.audioEngine.unlock();
        rotando+=2;
      })      ;
      var text1 = new BABYLON.GUI.TextBlock();
    //  text1.text ="base>" +baseNro+" md>"+mdNro+" mu>"+muNro+" top>"+topNro;
      text1.text ="    ";

      text1.color = "white";
      text1.fontSize = 14;
      text1.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
      advancedTexture.addControl(text1);
          advancedTexture.addControl(button);

//
var torus  = BABYLON.MeshBuilder.CreateTorus("torus", {thickness:.05, diameter: 4,tessellation:36});
torus.visibility=false;
var cilindro  = BABYLON.MeshBuilder.CreateTorus("torus", {thickness:.05, diameter: 4,tessellation:3});
cilindro.visibility=false;
cilindro.rotation = new BABYLON.Vector3(0, 45, 0);
//
//
if(varianteNro<10){
  torus.material=negro;
torus.visibility=1;

}
if(varianteNro>=10 && varianteNro<20){
  torus.material=luzMat;
  torus.visibility=1;
}
if(varianteNro>=20 && varianteNro<30){
  var bola1 = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: .3}, scene);
  var bola2 = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: .22}, scene);
  var bola3 = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: .1}, scene);

 bola1.parent=bola2.parent=bola3.parent=pivot;
 bola1.position=new BABYLON.Vector3(1.5,0.5,0);
  bola2.position=new BABYLON.Vector3(-2.3,1,2);
   bola3.position=new BABYLON.Vector3(-1,0,-2);
// bola1.position.y=3;
//   bola1.position.z=0;
   bola1.material= bola2.material= bola3.material=luzMat;
}

if(varianteNro>=30 && varianteNro<40){
  cilindro.material=luzMat;
  cilindro.visibility=1;
}
if(varianteNro>=40 && varianteNro<50){

    const cyl1 = BABYLON.MeshBuilder.CreateCylinder("cylinder", {diameter:0.03, height:1});
    const cyl2 = BABYLON.MeshBuilder.CreateCylinder("cylinder", {diameter:0.03, height:1});
    const cyl3= BABYLON.MeshBuilder.CreateCylinder("cylinder", {diameter:0.03, height:1});
        const cyl4= BABYLON.MeshBuilder.CreateCylinder("cylinder", {diameter:0.03, height:1});
    cyl1.position=new BABYLON.Vector3(-2,1,0);
     cyl2.position=new BABYLON.Vector3(2.4,1.2,2);
      cyl3.position=new BABYLON.Vector3(.6,0,2.2);
      cyl4.position=new BABYLON.Vector3(-.5,2,-2.2);
      cyl1.parent=cyl2.parent=cyl3.parent=cyl4.parent=pivot;
      cyl1.material=cyl2.material=cyl3.material=cyl4.material=luzMat;
      cyl1.rotation = new BABYLON.Vector3(0, 50, -.4);
      cyl2.rotation = new BABYLON.Vector3(40, 0, 0);
      cyl3.rotation = new BABYLON.Vector3(40, 20, 0);
      cyl4.rotation = new BABYLON.Vector3(20,-30, 0);
    }
if(varianteNro>=50 && varianteNro<60){
  for(i=0;i<11;i++){
    var ss = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: .2, segments: 5}, scene);
    ss.material=piso;
    ss.position.x=2.3;  ss.position.y=.09; ss.position.z=0;
    var eje = new BABYLON.TransformNode("root");
    ss.parent=eje;
  var ang=BABYLON.Tools.ToRadians(36*i);
    eje.rotate(BABYLON.Axis.Y,  ang, BABYLON.Space.WORLD);

  }
}
  if(varianteNro>=60 && varianteNro<70){
    var s1 = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: .2, segments: 32}, scene);
    var s2 = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: .2, segments: 32}, scene);
    var s3 = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: .2, segments: 32}, scene);
    var s4 = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: .2, segments: 32}, scene);
    var s5 = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: .2, segments: 32}, scene);
    s1.material=s2.material=s3.material=s4.material=s5.material=luzMat;
    s1.position.x=2;  s1.position.y=.14; s1.position.z=0;
    s2.position.x=-.6;  s2.position.y=.14; s2.position.z=-3;
    s3.position.x=-2; s3.position.y=.14; s3.position.z=10;
    s4.position.x=-3;  s5.position.y=.14; s4.position.z=2.5;
    s5.position.x=1.6;  s4.position.y=.14; s5.position.z=7;
}



if(varianteNro>=80 && varianteNro<90){
  for(i=0;i<11;i++){
    var ss = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: .15, segments: 5}, scene);
    ss.material=piso;
    ss.position.x=2;  ss.position.y=2.4; ss.position.z=0;
    var eje = new BABYLON.TransformNode("root");
    ss.parent=eje;
  var ang=BABYLON.Tools.ToRadians(36*i);
    eje.rotate(BABYLON.Axis.Y,  ang, BABYLON.Space.WORLD);

  }


}
if(varianteNro>=90){
  for(i=0;i<7;i++){
    var ss = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: .1, segments: 5}, scene);
    ss.material=luzMat;
    ss.position.x=1.87;  ss.position.y=3; ss.position.z=0;
    var eje = new BABYLON.TransformNode("root");
    ss.parent=eje;
  var ang=BABYLON.Tools.ToRadians((360/6)*i);
    eje.rotate(BABYLON.Axis.Y,  ang, BABYLON.Space.WORLD);

  }


}


// Create a particle system
   var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);

   //Texture of each particle
   particleSystem.particleTexture = new BABYLON.Texture("textures/cuadrado.png", scene);

   // Where the particles come from
   particleSystem.emitter = BABYLON.Vector3.Zero(); // the starting location

   // Colors of all particles
   particleSystem.color1 = new BABYLON.Color4(colorLuz.r, colorLuz.g, colorLuz.b, 0);
   particleSystem.color2 = new BABYLON.Color4(colorLuz.r, colorLuz.g, colorLuz.b, 1);
   particleSystem.colorDead = new BABYLON.Color4(colorLuz.r, colorLuz.g, colorLuz.b, 0);

   // Size of each particle (random between...
   particleSystem.minSize = 0.02;
   particleSystem.maxSize = 0.02;

   // Life time of each particle (random between...
   particleSystem.minLifeTime = 1.5;
   particleSystem.maxLifeTime = 2.5;

   // Emission rate
   particleSystem.emitRate = 50;


   /******* Emission Space ********/
    if( partiNro<30){
   particleSystem.createCylinderEmitter(4,9,1,8);
    particleSystem.gravity = new BABYLON.Vector3(0, .4, 0);
 }
   if(partiNro>=30 && partiNro<60){
     var sphereEm = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 1}, scene);
      sphereEm.position.y=5.5;

      var meshEmitter = new BABYLON.MeshParticleEmitter(sphereEm);
     particleSystem.particleEmitterType = meshEmitter;
     particleSystem.emitter= sphereEm;
     sphereEm.visibility=0;
       particleSystem.gravity = new BABYLON.Vector3(0, .3, 0);
    }
    if(partiNro>=60){
       particleSystem.createCylinderEmitter(2,1,0,0);
     }
  //


   // Speed
   particleSystem.minEmitPower = 0;
   particleSystem.maxEmitPower = 1.5;
   particleSystem.updateSpeed = 0.005;

   // Start the particle system

   particleSystem.start();


//
BABYLON.Effect.ShadersStore["customFragmentShader"] = `
#ifdef GL_ES
    precision highp float;
#endif

// Samplers
varying vec2 vUV;
uniform sampler2D textureSampler;

// Parameters
uniform vec2 screenSize;
uniform float threshold;

void main(void)
{
    vec2 texelSize = vec2(1.0 / screenSize.x, 1.0 / screenSize.y);
    vec4 baseColor = texture2D(textureSampler, vUV);


    if (baseColor.r < threshold) {
        gl_FragColor = baseColor;
    } else {
        gl_FragColor = vec4(0);
    }
}
`;




return scene;
};
        window.initFunction = async function() {


            var asyncEngineCreation = async function() {
                try {
                return createDefaultEngine();
                } catch(e) {
                console.log("the available createEngine function failed. Creating the default engine instead");
                return createDefaultEngine();
                }
            }

            window.engine = await asyncEngineCreation();
if (!engine) throw 'engine should not be null.';
window.scene = createScene();};
initFunction().then(() => {sceneToRender = scene
    engine.runRenderLoop(function () {
        if (sceneToRender && sceneToRender.activeCamera) {
            sceneToRender.render();
        }
    });
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});

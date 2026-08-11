// Hi, THOR here, this is my first attempt at coding
// I've used ChatGPT 4 for most of it
// I'm fully aware it's a mess and shouldn't be copied
// Feel free to use any part of it for whatever you want (:
          
          
          //Canvas & Scene
          
          var canvas = document.getElementById("renderCanvas");
          var engine = new BABYLON.Engine(canvas, true);


          var createScene = function () {
                    
                    
              var scene = new BABYLON.Scene(engine);
              
              
              var rnd3 = Math.floor(fxrand() * 3) + 1;
              
              
              //Fullscreen
              
                window.addEventListener('keydown', function(event) {
                    if (event.key === 'f' || event.key === 'F') {
                        let element = engine.getRenderingCanvas();                
                        if (element.requestFullscreen) {
                            element.requestFullscreen();
                        } else if (element.mozRequestFullScreen) { /* Firefox */
                            element.mozRequestFullScreen();
                        } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                            element.webkitRequestFullscreen();
                        } else if (element.msRequestFullscreen) { /* IE/Edge */
                            element.msRequestFullscreen();
                        }
                    }
                });

              
              //Sky
              
              let FogNumber = (genR(0.007,0.01));
              
              var skyNum;
              var skyVar;

                 skyNum=Math.round(genR(0,160));

                  if(skyNum<=10){
                    scene.clearColor = BABYLON.Color3.FromHexString("#ddeded");
                    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
                    scene.fogColor = new BABYLON.Color3.FromHexString("#ddeded");
                    scene.fogDensity = FogNumber;
                    skyVar="Light Blue";
                  }
                  if(skyNum>10 && skyNum<=20){
                    scene.clearColor = BABYLON.Color3.FromHexString("#EEEBDD");
                    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
                    scene.fogColor = new BABYLON.Color3.FromHexString("#EEEBDD");
                    scene.fogDensity = FogNumber;
                    skyVar="Cloudy";
                  }
                  if(skyNum>20 && skyNum<=30){
                    scene.clearColor = BABYLON.Color3.FromHexString("#EDCFB2");
                    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
                    scene.fogColor = new BABYLON.Color3.FromHexString("#EDCFB2");
                    scene.fogDensity = FogNumber;
                    skyVar="Sunset";
                  }
                  if(skyNum>30 && skyNum<=40){
                    scene.clearColor = BABYLON.Color3.FromHexString("#DAF6ED");
                    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
                    scene.fogColor = new BABYLON.Color3.FromHexString("#DAF6ED");
                    scene.fogDensity = FogNumber;
                    skyVar="Turquoise";
                  }
                  if(skyNum>40 && skyNum<=50){
                    scene.clearColor = BABYLON.Color3.FromHexString("#FFBCB5");
                    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
                    scene.fogColor = new BABYLON.Color3.FromHexString("#FFBCB5");
                    scene.fogDensity = FogNumber;
                    skyVar="Bloody";
                  }
                  if(skyNum>50 && skyNum<=60){
                    scene.clearColor = BABYLON.Color3.FromHexString("#DEF8BD");
                    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
                    scene.fogColor = new BABYLON.Color3.FromHexString("#DEF8BD");
                    scene.fogDensity = FogNumber;
                    skyVar="Toxic";
                  }
                  if(skyNum>60 && skyNum<=70){
                    scene.clearColor = BABYLON.Color3.FromHexString("#FFFDC6");
                    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
                    scene.fogColor = new BABYLON.Color3.FromHexString("#FFFDC6");
                    scene.fogDensity = FogNumber;
                    skyVar="Radioactive";
                  }
                  if(skyNum>70 && skyNum<=80){
                    scene.clearColor = BABYLON.Color3.FromHexString("#D6C0FA");
                    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
                    scene.fogColor = new BABYLON.Color3.FromHexString("#D6C0FA");
                    scene.fogDensity = FogNumber;
                    skyVar="Purple Rain";
                  }
                  if(skyNum>80 && skyNum<=90){
                    scene.clearColor = BABYLON.Color3.FromHexString("#7571CC");
                    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
                    scene.fogColor = new BABYLON.Color3.FromHexString("#7571CC");
                    scene.fogDensity = FogNumber;
                    skyVar="Blue Night";
                  }
                  if(skyNum>90 && skyNum<=100){
                    scene.clearColor = BABYLON.Color3.FromHexString("#81759A");
                    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
                    scene.fogColor = new BABYLON.Color3.FromHexString("#81759A");
                    scene.fogDensity = FogNumber;
                    skyVar="Stormy";
                  }
                  if(skyNum>100 && skyNum<=110){
                    scene.clearColor = BABYLON.Color3.FromHexString("#FAFAFA");
                    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
                    scene.fogColor = new BABYLON.Color3.FromHexString("#FAFAFA");
                    scene.fogDensity = FogNumber;
                    skyVar="White";
                  }
                  if(skyNum>110 && skyNum<=120){
                    scene.clearColor = BABYLON.Color3.FromHexString("#FFCAF4");
                    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
                    scene.fogColor = new BABYLON.Color3.FromHexString("#FFCAF4");
                    scene.fogDensity = FogNumber;
                    skyVar="Pink";
                  }
                  if(skyNum>120 && skyNum<=130){
                    scene.clearColor = BABYLON.Color3.FromHexString("#FFD376");
                    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
                    scene.fogColor = new BABYLON.Color3.FromHexString("#FFD376");
                    scene.fogDensity = FogNumber;
                    skyVar="Golden Hour";
                  }
                  if(skyNum>130 && skyNum<=140){
                    scene.clearColor = BABYLON.Color3.FromHexString("#8FA8C5");
                    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
                    scene.fogColor = new BABYLON.Color3.FromHexString("#8FA8C5");
                    scene.fogDensity = FogNumber;
                    skyVar="Teal";
                  }
                  if(skyNum>140 && skyNum<=150){
                    scene.clearColor = BABYLON.Color3.FromHexString("#95C484");
                    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
                    scene.fogColor = new BABYLON.Color3.FromHexString("#95C484");
                    scene.fogDensity = FogNumber;
                    skyVar="Smog";
                  }
                  if(skyNum>150 && skyNum<=160){
                    scene.clearColor = BABYLON.Color3.FromHexString("#9A5F77");
                    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
                    scene.fogColor = new BABYLON.Color3.FromHexString("#9A5F77");
                    scene.fogDensity = FogNumber;
                    skyVar="Wine";
                  }
                  
                  
                    var currentIndex = 0;
                    window.addEventListener('keydown', function(event) {
                        if (event.key === 's' || event.key === 'S') {
                            currentIndex = (currentIndex + 1) % 16;
                            updateSkyFromIndex();
                        }
                    });
                    function updateSkyFromIndex() {
                        let skyValues = [
                            "#ddeded", "#EEEBDD", "#EDCFB2", "#DAF6ED", "#FFBCB5", "#DEF8BD", "#FFFDC6", "#D6C0FA",
                            "#7571CC", "#81759A", "#FAFAFA", "#FFCAF4", "#FFD376", "#8FA8C5", "#95C484", "#9A5F77"
                        ];
                        
                        let selectedColor = skyValues[currentIndex];
                        
                        FogNumber = genR(0.007, 0.037);
                        
                        scene.clearColor = BABYLON.Color3.FromHexString(selectedColor);
                        scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
                        scene.fogColor = new BABYLON.Color3.FromHexString(selectedColor);
                        scene.fogDensity = FogNumber;
                    }

                  
             
              //Camera
              
              var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 2.7, 0), scene);
              camera.setTarget(new BABYLON.Vector3(genR(1,2), genR(2.6,2.8), genR(1,2)));
              camera.inputs.clear();
              camera.inputs.addMouse();
              camera.attachControl(canvas, true);
              
                    var originalPosition = camera.position.clone();
                    window.addEventListener("keydown", function (event) {
                        if (event.key === "c" || event.key === "C") {
                            animateCameraBounce();
                        }
                    });
                    function animateCameraBounce() {
                        var midwayPosition = BABYLON.Vector3.Lerp(originalPosition, camera.getTarget(), 1);
                        var animation = new BABYLON.Animation(
                            "cameraBounceAnimation", 
                            "position", 
                            60, 
                            BABYLON.Animation.ANIMATIONTYPE_VECTOR3, 
                            BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
                        );
                        var keys = [];
                        keys.push({ frame: 0, value: originalPosition });
                        keys.push({ frame: 7, value: midwayPosition });
                        keys.push({ frame: 14, value: originalPosition });
                        animation.setKeys(keys);
                        camera.animations = [];
                        camera.animations.push(animation);
                        scene.beginAnimation(camera, 0, 14, false);
                    }

              
              //Light
              
              scene.meshes.forEach(function(mesh) {
              if (mesh.material) {
              mesh.material.maxSimultaneousLights = 11;
              }
              });
              
              var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, genR(1,2), 0), scene);
              
              var ligNum;
              var ligVar;

                 ligNum=Math.round(genR(0,100));
                 
                  if(ligNum<=5){
                    light.intensity = 0.25;
                    
                    var lA = new BABYLON.StandardMaterial("lightA", scene);
                    lA.diffuseTexture = new BABYLON.Texture("./elements/lightA" + rnd3 + ".png", scene);
                    lA.diffuseTexture.hasAlpha = true;
                    lA.backFaceCulling = false;
                    lA.flip = fxrand() >= 0.5;
                    
                    for (let i = 0; i < genR(10,15); i++) {
                        var planelA = BABYLON.MeshBuilder.CreatePlane("planelA", { width: 2, height: 10 }, scene);
                        planelA.material = lA;
                        planelA.width = 2;
                        planelA.height = 10;
                        planelA.position.x = fxrand() * 100 - 50;
                        planelA.position.z = fxrand() * 100 - 50;
                        planelA.position.y = 5;
                    
                        var lightAAA = new BABYLON.SpotLight("spotLight", planelA.position.add(new BABYLON.Vector3(0, 11, 0)), new BABYLON.Vector3(0, -0.000001, 0), Math.PI / 2, 10, scene);
                        lightAAA.intensity = 9;             
                        if (Math.sqrt(Math.pow(planelA.position.x, 2) + Math.pow(planelA.position.z, 2)) < 20) {
                            planelA.dispose();
                            lightAAA.dispose();
                        }
                    
                        if (lA.flip) {
                            planelA.scaling.x *= -1;
                        }
                    }

                    ligVar="Somber";
                  }
                  
                  if(ligNum>5 && ligNum<=45){
                    light.intensity = 1.2;
                    
                    var lB = new BABYLON.StandardMaterial("lightB", scene);
                    lB.diffuseTexture = new BABYLON.Texture("./elements/lightA" + rnd3 + ".png", scene);
                    lB.diffuseTexture.hasAlpha = true;
                    lB.backFaceCulling = false;
                    lB.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 22; i++) {
                      var planelB = BABYLON.MeshBuilder.CreatePlane("planelB", { width: 2, height: 10 }, scene);
                      planelB.material = lB;
                      planelB.width = 2;
                      planelB.height = 10;
                      planelB.position.x = fxrand() * 200 - 100;
                      planelB.position.z = fxrand() * 200 - 100;
                      planelB.position.y = 5;
                    if (Math.sqrt(Math.pow(planelB.position.x, 2) + Math.pow(planelB.position.z, 2)) < 20)
                    {planelB.dispose();}
                    if (lB.flip) {
                      planelB.scaling.x *= -1;
                    }
                    }
                    
                    ligVar="Neutral";
                  }
                  
                  if(ligNum>45 && ligNum<=85){
                    light.intensity = 1.2;
                    light.diffuse = new BABYLON.Color3(genR(0,1), genR(0,1), genR(0,1));
                    light.specular = new BABYLON.Color3(genR(0,1), genR(0,1), genR(0,1));
                    light.groundColor = new BABYLON.Color3(genR(0,1), genR(0,1), genR(0,1));
                    
                    var lC = new BABYLON.StandardMaterial("lightC", scene);
                    lC.diffuseTexture = new BABYLON.Texture("./elements/lightA" + rnd3 + ".png", scene);
                    lC.diffuseTexture.hasAlpha = true;
                    lC.backFaceCulling = false;
                    lC.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 22; i++) {
                      var planelC = BABYLON.MeshBuilder.CreatePlane("planelC", { width: 2, height: 10 }, scene);
                      planelC.material = lC;
                      planelC.width = 2;
                      planelC.height = 10;
                      planelC.position.x = fxrand() * 200 - 100;
                      planelC.position.z = fxrand() * 200 - 100;
                      planelC.position.y = 5;
                    if (Math.sqrt(Math.pow(planelC.position.x, 2) + Math.pow(planelC.position.z, 2)) < 20)
                    {planelC.dispose();}
                    if (lC.flip) {
                      planelC.scaling.x *= -1;
                    }
                    }
                    
                    ligVar="Tinted";
                  }
                  
                  if(ligNum>85 && ligNum<=100){
                    light.intensity = 1.4;
                    light.diffuse = new BABYLON.Color3(1, 1, 0);
                    
                    var lD = new BABYLON.StandardMaterial("lightD", scene);
                    lD.diffuseTexture = new BABYLON.Texture("./elements/lightA" + rnd3 + ".png", scene);
                    lD.diffuseTexture.hasAlpha = true;
                    lD.backFaceCulling = false;
                    lD.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 22; i++) {
                      var planelD = BABYLON.MeshBuilder.CreatePlane("planelD", { width: 2, height: 10 }, scene);
                      planelD.material = lD;
                      planelD.width = 2;
                      planelD.height = 10;
                      planelD.position.x = fxrand() * 200 - 100;
                      planelD.position.z = fxrand() * 200 - 100;
                      planelD.position.y = 5;
                    if (Math.sqrt(Math.pow(planelD.position.x, 2) + Math.pow(planelD.position.z, 2)) < 20)
                    {planelD.dispose();}
                    if (lD.flip) {
                      planelD.scaling.x *= -1;
                    }
                    }
                    
                    ligVar="Strong Yellow";
                  }
                  
  
              //Grounds
              
              var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 300, height: 300}, scene);
              let groundMaterial = new BABYLON.StandardMaterial("Ground Material", scene);
              ground.material = groundMaterial;
                        
              var floorNum;
              var floorVar;

                  floorNum=Math.round(genR(0,80));

                  if(floorNum<=10){
                    ground.material.diffuseColor = BABYLON.Color3.FromHexString("#0d0b0b");
                    var gridA = {
                    'h' : 40,
                    'w' : 40
                    };	
                    const tiledGround = new BABYLON.MeshBuilder.CreateTiledGround("Tiled Ground", {xmin: -60, zmin: -60, xmax: 60, zmax: 60, subdivisions: gridA});
                    const multimat = new BABYLON.MultiMaterial("multi", scene);
                    const grassMaterial = new BABYLON.StandardMaterial("grass");
                    grassMaterial.diffuseTexture = new BABYLON.Texture("./grounds/groundA.png");
                    multimat.subMaterials.push(grassMaterial);
                    tiledGround.material = multimat;
                    tiledGround.position.y = 0.01;
                    floorVar="Asymmetrical";
                    }
                  
                  if(floorNum>10 && floorNum<=20){
                    ground.material.diffuseColor = BABYLON.Color3.FromHexString("#1d1c1d");
                    var gridB = {
                    'h' : 40,
                    'w' : 40
                    };	
                    const tiledGround = new BABYLON.MeshBuilder.CreateTiledGround("Tiled Ground", {xmin: -60, zmin: -60, xmax: 60, zmax: 60, subdivisions: gridB});
                    const multimat = new BABYLON.MultiMaterial("multi", scene);
                    const grassMaterial = new BABYLON.StandardMaterial("grass");
                    grassMaterial.diffuseTexture = new BABYLON.Texture("./grounds/groundB.png");
                    multimat.subMaterials.push(grassMaterial);
                    tiledGround.material = multimat;
                    tiledGround.position.y = 0.01;
                    floorVar="Grey";
                    }
                    
                  if(floorNum>20 && floorNum<=30){
                    ground.material.diffuseColor = BABYLON.Color3.FromHexString("#1c1b19");
                    var gridC = {
                    'h' : 100,
                    'w' : 100
                    };	
                    const tiledGround = new BABYLON.MeshBuilder.CreateTiledGround("Tiled Ground", {xmin: -60, zmin: -60, xmax: 60, zmax: 60, subdivisions: gridC});
                    const multimat = new BABYLON.MultiMaterial("multi", scene);
                    const grassMaterial = new BABYLON.StandardMaterial("grass");
                    grassMaterial.diffuseTexture = new BABYLON.Texture("./grounds/groundC.png");
                    multimat.subMaterials.push(grassMaterial);
                    tiledGround.material = multimat;
                    tiledGround.position.y = 0.01;
                    floorVar="Cobblestone";
                    }
                    
                    if(floorNum>30 && floorNum<=40){
                    ground.material.diffuseColor = BABYLON.Color3.FromHexString("#1c1b19");
                    var gridD = {
                    'h' : 40,
                    'w' : 40
                    };	
                    const tiledGround = new BABYLON.MeshBuilder.CreateTiledGround("Tiled Ground", {xmin: -60, zmin: -60, xmax: 60, zmax: 60, subdivisions: gridD});
                    const multimat = new BABYLON.MultiMaterial("multi", scene);
                    const grassMaterial = new BABYLON.StandardMaterial("grass");
                    grassMaterial.diffuseTexture = new BABYLON.Texture("./grounds/groundD.png");
                    multimat.subMaterials.push(grassMaterial);
                    tiledGround.material = multimat;
                    tiledGround.position.y = 0.01;
                    floorVar="Sidewalk";
                    }
                    
                    if(floorNum>40 && floorNum<=50){
                    ground.material.diffuseColor = BABYLON.Color3.FromHexString("#1c1b19");
                    var gridE = {
                    'h' : 140,
                    'w' : 140
                    };	
                    const tiledGround = new BABYLON.MeshBuilder.CreateTiledGround("Tiled Ground", {xmin: -60, zmin: -60, xmax: 60, zmax: 60, subdivisions: gridE});
                    const multimat = new BABYLON.MultiMaterial("multi", scene);
                    const grassMaterial = new BABYLON.StandardMaterial("grass");
                    grassMaterial.diffuseTexture = new BABYLON.Texture("./grounds/groundE.png");
                    multimat.subMaterials.push(grassMaterial);
                    tiledGround.material = multimat;
                    tiledGround.position.y = 0.01;
                    floorVar="Grid";
                    }
                    
                    if(floorNum>50 && floorNum<=60){
                    ground.material.diffuseColor = BABYLON.Color3.FromHexString("#1c1b19");
                    var gridF = {
                    'h' : 50,
                    'w' : 50
                    };	
                    const tiledGround = new BABYLON.MeshBuilder.CreateTiledGround("Tiled Ground", {xmin: -60, zmin: -60, xmax: 60, zmax: 60, subdivisions: gridF});
                    const multimat = new BABYLON.MultiMaterial("multi", scene);
                    const grassMaterial = new BABYLON.StandardMaterial("grass");
                    grassMaterial.diffuseTexture = new BABYLON.Texture("./grounds/groundF.png");
                    multimat.subMaterials.push(grassMaterial);
                    tiledGround.material = multimat;
                    tiledGround.position.y = 0.01;
                    floorVar="White Squares";
                    }
                    
                    if(floorNum>60 && floorNum<=70){
                    ground.material.diffuseColor = BABYLON.Color3.FromHexString("#1c1b19");
                    var gridG = {
                    'h' : 70,
                    'w' : 70
                    };	
                    const tiledGround = new BABYLON.MeshBuilder.CreateTiledGround("Tiled Ground", {xmin: -60, zmin: -60, xmax: 60, zmax: 60, subdivisions: gridG});
                    const multimat = new BABYLON.MultiMaterial("multi", scene);
                    const grassMaterial = new BABYLON.StandardMaterial("grass");
                    grassMaterial.diffuseTexture = new BABYLON.Texture("./grounds/groundG.png");
                    multimat.subMaterials.push(grassMaterial);
                    tiledGround.material = multimat;
                    tiledGround.position.y = 0.01;
                    floorVar="Squares";
                    }
                    
                    if(floorNum>70 && floorNum<=80){
                    ground.material.diffuseColor = BABYLON.Color3.FromHexString("#1c1b19");
                    var gridH = {
                    'h' : 30,
                    'w' : 30
                    };	
                    const tiledGround = new BABYLON.MeshBuilder.CreateTiledGround("Tiled Ground", {xmin: -60, zmin: -60, xmax: 60, zmax: 60, subdivisions: gridH});
                    const multimat = new BABYLON.MultiMaterial("multi", scene);
                    const grassMaterial = new BABYLON.StandardMaterial("grass");
                    grassMaterial.diffuseTexture = new BABYLON.Texture("./grounds/groundH.png");
                    multimat.subMaterials.push(grassMaterial);
                    tiledGround.material = multimat;
                    tiledGround.position.y = 0.01;
                    floorVar="Pavement";
                    }
                    
                    
                    
                    
                    var a1 = new BABYLON.StandardMaterial("alca", scene);
                    a1.diffuseTexture = new BABYLON.Texture("./grounds/alca.png");
                    a1.diffuseTexture.hasAlpha = true;
                    a1.backFaceCulling = false;
                    for (let i = 0; i < 3; i++) {
                      var planea1 = BABYLON.MeshBuilder.CreateGround("planea1", { width: 1, height: 1 }, scene);
                      planea1.material = a1;
                      planea1.width = 1;
                      planea1.height = 1;
                      planea1.position.x = fxrand() * 50 - 25;
                      planea1.position.z = fxrand() * 50 - 25;
                      planea1.position.y = 0.02;
                    if (Math.sqrt(Math.pow(planea1.position.x, 2) + Math.pow(planea1.position.z, 2)) < 3)
                    {planea1.dispose();}                   
                    }

                    var a3 = new BABYLON.StandardMaterial("oil", scene);
                    a3.diffuseTexture = new BABYLON.Texture("./grounds/oil.png");
                    a3.diffuseTexture.hasAlpha = true;
                    a3.useAlphaFromDiffuseTexture = true;
                    a3.backFaceCulling = false;
                    a3.alpha = 0.2;
                    for (let i = 0; i < 4; i++) {
                      var planea3 = BABYLON.MeshBuilder.CreateGround("planea3", { width: 0.86, height: 1 }, scene);
                      planea3.material = a3;
                      planea3.width = 0.86;
                      planea3.height = 1;
                      planea3.position.x = fxrand() * 30 - 15;
                      planea3.position.z = fxrand() * 30 - 15;
                      planea3.position.y = 0.025;
                      if (Math.sqrt(Math.pow(planea3.position.x, 2) + Math.pow(planea3.position.z, 2)) < 3) {
                        planea3.dispose();
                      }
                    }
                    
                    var a4 = new BABYLON.StandardMaterial("rainbow", scene);
                    a4.diffuseTexture = new BABYLON.Texture("./grounds/rainbow.png");
                    a4.diffuseTexture.hasAlpha = true;
                    a4.useAlphaFromDiffuseTexture = true;
                    a4.backFaceCulling = false;
                    a4.alpha = 0.2;
                    for (let i = 0; i < 1; i++) {
                      var planea4 = BABYLON.MeshBuilder.CreateGround("planea4", { width: 1.52, height: 1.3 }, scene);
                      planea4.material = a4;
                      planea4.width = 1.52;
                      planea4.height = 1.3;
                      planea4.position.x = fxrand() * 10 - 5;
                      planea4.position.z = fxrand() * 10 - 5;
                      planea4.position.y = 0.015;
                      if (Math.sqrt(Math.pow(planea4.position.x, 2) + Math.pow(planea4.position.z, 2)) < 3) {
                        planea4.dispose();
                      }
                    }
                    
                    
                    var chalk0;
                    chalk0=Math.round(genR(0,40));
   
                    if(chalk0<=10){                    
                              var a5 = new BABYLON.StandardMaterial("hopscotch", scene);
                              a5.diffuseTexture = new BABYLON.Texture("./grounds/hopscotch.png");
                              a5.diffuseTexture.hasAlpha = true;
                              a5.useAlphaFromDiffuseTexture = true;
                              a5.backFaceCulling = false;
                              a5.alpha = 0.4;
                              for (let i = 0; i < 1; i++) {
                                var planea5 = BABYLON.MeshBuilder.CreateGround("planea5", { width: 1.7, height: 3.7 }, scene);
                                planea5.material = a5;
                                planea5.width = 1.7;
                                planea5.height = 3.7;
                                planea5.position.x = fxrand() * 14 - 7;
                                planea5.position.z = fxrand() * 14 - 7;
                                planea5.position.y = 0.03;
                                if (Math.sqrt(Math.pow(planea5.position.x, 2) + Math.pow(planea5.position.z, 2)) < 3) {
                                  planea5.dispose();
                                }
                              }
                    }
   
                    if(chalk0>10 && chalk0<=20){
                              var a2 = new BABYLON.StandardMaterial("long1", scene);
                              a2.diffuseTexture = new BABYLON.Texture("./grounds/long1.png");
                              a2.diffuseTexture.hasAlpha = true;
                              a2.useAlphaFromDiffuseTexture = true;
                              a2.backFaceCulling = false;
                              a2.alpha = 0.4;
                              for (let i = 0; i < 1; i++) {
                                var planea2 = BABYLON.MeshBuilder.CreateGround("planea2", { width: 3.26, height: 1.5 }, scene);
                                planea2.material = a2;
                                planea2.width = 3.26;
                                planea2.height = 1.5;
                                planea2.position.x = fxrand() * 14 - 7;
                                planea2.position.z = fxrand() * 14 - 7;
                                planea2.position.y = 0.03;
                                if (Math.sqrt(Math.pow(planea2.position.x, 2) + Math.pow(planea2.position.z, 2)) < 3) {
                                  planea2.dispose();
                                }
                              }
                    }
                    
                    if(chalk0>20 && chalk0<=30){
                              var a15 = new BABYLON.StandardMaterial("long2", scene);
                              a15.diffuseTexture = new BABYLON.Texture("./grounds/long2.png");
                              a15.diffuseTexture.hasAlpha = true;
                              a15.useAlphaFromDiffuseTexture = true;
                              a15.backFaceCulling = false;
                              a15.alpha = 0.4;
                              for (let i = 0; i < 1; i++) {
                                var planea15 = BABYLON.MeshBuilder.CreateGround("planea15", { width: 3.43, height: 1.5 }, scene);
                                planea15.material = a15;
                                planea15.width = 3.43;
                                planea15.height = 1.5;
                                planea15.position.x = fxrand() * 14 - 7;
                                planea15.position.z = fxrand() * 14 - 7;
                                planea15.position.y = 0.03;
                                if (Math.sqrt(Math.pow(planea15.position.x, 2) + Math.pow(planea15.position.z, 2)) < 3) {
                                  planea15.dispose();
                                }
                              }
                    }
                    
                    if(chalk0>30 && chalk0<=40){
                    }
                    
                    
                    var chalk1;
                    chalk1=Math.round(genR(0,40));
   
                     if(chalk1<=10){
                           var a6 = new BABYLON.StandardMaterial("chalk1A", scene);
                           a6.diffuseTexture = new BABYLON.Texture("./grounds/demon1.png");
                           a6.diffuseTexture.hasAlpha = true;
                           a6.useAlphaFromDiffuseTexture = true;
                           a6.backFaceCulling = false;
                           a6.alpha = 0.5;
                           for (let i = 0; i < 1; i++) {
                             var planea6 = BABYLON.MeshBuilder.CreateGround("planea6", { width: 1.38, height: 1.8 }, scene);
                             planea6.material = a6;
                             planea6.width = 1.38;
                             planea6.height = 1.8;
                             planea6.position.x = fxrand() * 14 - 7;
                             planea6.position.z = fxrand() * 14 - 7;
                             planea6.position.y = 0.035;
                             if (Math.sqrt(Math.pow(planea6.position.x, 2) + Math.pow(planea6.position.z, 2)) < 3) {
                               planea6.dispose();
                             }
                           }
                     }
   
                     if(chalk1>10 && chalk1<=20){
                              var a7 = new BABYLON.StandardMaterial("chalk1B", scene);
                              a7.diffuseTexture = new BABYLON.Texture("./grounds/demon2.png");
                              a7.diffuseTexture.hasAlpha = true;
                              a7.useAlphaFromDiffuseTexture = true;
                              a7.backFaceCulling = false;
                              a7.alpha = 0.5;
                              for (let i = 0; i < 1; i++) {
                                var planea7 = BABYLON.MeshBuilder.CreateGround("planea7", { width: 1.2, height: 1.2 }, scene);
                                planea7.material = a7;
                                planea7.width = 1.2;
                                planea7.height = 1.2;
                                planea7.position.x = fxrand() * 14 - 7;
                                planea7.position.z = fxrand() * 14 - 7;
                                planea7.position.y = 0.035;
                                if (Math.sqrt(Math.pow(planea7.position.x, 2) + Math.pow(planea7.position.z, 2)) < 3) {
                                  planea7.dispose();
                                }
                              }
                     }
   
                     if(chalk1>20 && chalk1<=30){
                              var a8 = new BABYLON.StandardMaterial("chalk1C", scene);
                              a8.diffuseTexture = new BABYLON.Texture("./grounds/demon3.png");
                              a8.diffuseTexture.hasAlpha = true;
                              a8.useAlphaFromDiffuseTexture = true;
                              a8.backFaceCulling = false;
                              a8.alpha = 0.5;
                              for (let i = 0; i < 1; i++) {
                                var planea8 = BABYLON.MeshBuilder.CreateGround("planea8", { width: 1.58, height: 2.2 }, scene);
                                planea8.material = a8;
                                planea8.width = 1.58;
                                planea8.height = 2.2;
                                planea8.position.x = fxrand() * 14 - 7;
                                planea8.position.z = fxrand() * 14 - 7;
                                planea8.position.y = 0.035;
                                if (Math.sqrt(Math.pow(planea8.position.x, 2) + Math.pow(planea8.position.z, 2)) < 3) {
                                  planea8.dispose();
                                }
                              }
                     }
                     
                     if(chalk1>30 && chalk1<=40){
                     }
                    
                    
                    var chalk2;
                    chalk2=Math.round(genR(0,40));
   
                     if(chalk2<=10){
                              var a9 = new BABYLON.StandardMaterial("chalk2A", scene);
                              a9.diffuseTexture = new BABYLON.Texture("./grounds/buddy1.png");
                              a9.diffuseTexture.hasAlpha = true;
                              a9.useAlphaFromDiffuseTexture = true;
                              a9.backFaceCulling = false;
                              a9.alpha = 0.5;
                              for (let i = 0; i < 1; i++) {
                                var planea9 = BABYLON.MeshBuilder.CreateGround("planea9", { width: 1.6, height: 1.8 }, scene);
                                planea9.material = a9;
                                planea9.width = 1.6;
                                planea9.height = 1.8;
                                planea9.position.x = fxrand() * 14 - 7;
                                planea9.position.z = fxrand() * 14 - 7;
                                planea9.position.y = 0.045;
                                if (Math.sqrt(Math.pow(planea9.position.x, 2) + Math.pow(planea9.position.z, 2)) < 3) {
                                  planea9.dispose();
                                }
                              }
                     }
   
                     if(chalk2>10 && chalk2<=20){
                              var a10 = new BABYLON.StandardMaterial("chalk2B", scene);
                              a10.diffuseTexture = new BABYLON.Texture("./grounds/buddy2.png");
                              a10.diffuseTexture.hasAlpha = true;
                              a10.useAlphaFromDiffuseTexture = true;
                              a10.backFaceCulling = false;
                              a10.alpha = 0.5;
                              for (let i = 0; i < 1; i++) {
                                var planea10 = BABYLON.MeshBuilder.CreateGround("planea10", { width: 1.44, height: 1.8 }, scene);
                                planea10.material = a10;
                                planea10.width = 1.44;
                                planea10.height = 1.8;
                                planea10.position.x = fxrand() * 14 - 7;
                                planea10.position.z = fxrand() * 14 - 7;
                                planea10.position.y = 0.045;
                                if (Math.sqrt(Math.pow(planea10.position.x, 2) + Math.pow(planea10.position.z, 2)) < 3) {
                                  planea10.dispose();
                                }
                              }
                     }
   
                     if(chalk2>20 && chalk2<=30){
                              var a11 = new BABYLON.StandardMaterial("chalk2C", scene);
                              a11.diffuseTexture = new BABYLON.Texture("./grounds/buddy3.png");
                              a11.diffuseTexture.hasAlpha = true;
                              a11.useAlphaFromDiffuseTexture = true;
                              a11.backFaceCulling = false;
                              a11.alpha = 0.5;
                              for (let i = 0; i < 1; i++) {
                                var planea11 = BABYLON.MeshBuilder.CreateGround("planea11", { width: 1.48, height: 1.9 }, scene);
                                planea11.material = a11;
                                planea11.width = 1.48;
                                planea11.height = 1.9;
                                planea11.position.x = fxrand() * 14 - 7;
                                planea11.position.z = fxrand() * 14 - 7;
                                planea11.position.y = 0.045;
                                if (Math.sqrt(Math.pow(planea11.position.x, 2) + Math.pow(planea11.position.z, 2)) < 3) {
                                  planea11.dispose();
                                }
                              }
                     }
                     
                     if(chalk2>30 && chalk2<=40){
                     }
                     
                     
                    var chalk3;
                    chalk3=Math.round(genR(0,40));
   
                     if(chalk3<=10){
                              var a12 = new BABYLON.StandardMaterial("chalk3A", scene);
                              a12.diffuseTexture = new BABYLON.Texture("./grounds/body1.png");
                              a12.diffuseTexture.hasAlpha = true;
                              a12.useAlphaFromDiffuseTexture = true;
                              a12.backFaceCulling = false;
                              a12.alpha = 0.5;
                              for (let i = 0; i < 1; i++) {
                                var planea12 = BABYLON.MeshBuilder.CreateGround("planea12", { width: 1.93, height: 1.9 }, scene);
                                planea12.material = a12;
                                planea12.width = 1.93;
                                planea12.height = 1.9;
                                planea12.position.x = fxrand() * 14 - 7;
                                planea12.position.z = fxrand() * 14 - 7;
                                planea12.position.y = 0.055;
                                if (Math.sqrt(Math.pow(planea12.position.x, 2) + Math.pow(planea12.position.z, 2)) < 3) {
                                  planea12.dispose();
                                }
                              }
                     }
   
                     if(chalk3>10 && chalk3<=20){
                              var a13 = new BABYLON.StandardMaterial("chalk3B", scene);
                              a13.diffuseTexture = new BABYLON.Texture("./grounds/body2.png");
                              a13.diffuseTexture.hasAlpha = true;
                              a13.useAlphaFromDiffuseTexture = true;
                              a13.backFaceCulling = false;
                              a13.alpha = 0.5;
                              for (let i = 0; i < 1; i++) {
                                var planea13 = BABYLON.MeshBuilder.CreateGround("planea13", { width: 2.04, height: 1.8 }, scene);
                                planea13.material = a13;
                                planea13.width = 2.04;
                                planea13.height = 1.8;
                                planea13.position.x = fxrand() * 14 - 7;
                                planea13.position.z = fxrand() * 14 - 7;
                                planea13.position.y = 0.055;
                                if (Math.sqrt(Math.pow(planea13.position.x, 2) + Math.pow(planea13.position.z, 2)) < 3) {
                                  planea13.dispose();
                                }
                              }
                     }
   
                     if(chalk3>20 && chalk3<=30){
                              var a14 = new BABYLON.StandardMaterial("chalk3C", scene);
                              a14.diffuseTexture = new BABYLON.Texture("./grounds/body3.png");
                              a14.diffuseTexture.hasAlpha = true;
                              a14.useAlphaFromDiffuseTexture = true;
                              a14.backFaceCulling = false;
                              a14.alpha = 0.5;
                              for (let i = 0; i < 1; i++) {
                                var planea14 = BABYLON.MeshBuilder.CreateGround("planea14", { width: 1.74, height: 1.3 }, scene);
                                planea14.material = a14;
                                planea14.width = 1.74;
                                planea14.height = 1.3;
                                planea14.position.x = fxrand() * 14 - 7;
                                planea14.position.z = fxrand() * 14 - 7;
                                planea14.position.y = 0.055;
                                if (Math.sqrt(Math.pow(planea14.position.x, 2) + Math.pow(planea14.position.z, 2)) < 3) {
                                  planea14.dispose();
                                }
                              }
                     }
                     
                     if(chalk3>30 && chalk3<=40){
                     }
                    
                    
                    var chalk4;
                    chalk4=Math.round(genR(0,40));
   
                     if(chalk4<=10){
                              var a16 = new BABYLON.StandardMaterial("chalk4A", scene);
                              a16.diffuseTexture = new BABYLON.Texture("./grounds/cat1.png");
                              a16.diffuseTexture.hasAlpha = true;
                              a16.useAlphaFromDiffuseTexture = true;
                              a16.backFaceCulling = false;
                              a16.alpha = 0.5;
                              for (let i = 0; i < 1; i++) {
                                var planea16 = BABYLON.MeshBuilder.CreateGround("planea16", { width: 1.84, height: 1.7 }, scene);
                                planea16.material = a16;
                                planea16.width = 1.84;
                                planea16.height = 1.7;
                                planea16.position.x = fxrand() * 14 - 7;
                                planea16.position.z = fxrand() * 14 - 7;
                                planea16.position.y = 0.04;
                                if (Math.sqrt(Math.pow(planea16.position.x, 2) + Math.pow(planea16.position.z, 2)) < 3) {
                                  planea16.dispose();
                                }
                              }
                     }
                    
                     if(chalk4>10 && chalk4<=20){
                              var a17 = new BABYLON.StandardMaterial("chalk4B", scene);
                              a17.diffuseTexture = new BABYLON.Texture("./grounds/cat2.png");
                              a17.diffuseTexture.hasAlpha = true;
                              a17.useAlphaFromDiffuseTexture = true;
                              a17.backFaceCulling = false;
                              a17.alpha = 0.5;
                              for (let i = 0; i < 1; i++) {
                                var planea17 = BABYLON.MeshBuilder.CreateGround("planea17", { width: 1.13, height: 2 }, scene);
                                planea17.material = a17;
                                planea17.width = 1.13;
                                planea17.height = 2;
                                planea17.position.x = fxrand() * 14 - 7;
                                planea17.position.z = fxrand() * 14 - 7;
                                planea17.position.y = 0.04;
                                if (Math.sqrt(Math.pow(planea17.position.x, 2) + Math.pow(planea17.position.z, 2)) < 3) {
                                  planea17.dispose();
                                }
                              }
                     }
                     
                     if(chalk4>20 && chalk4<=30){
                              var a18 = new BABYLON.StandardMaterial("chalk4C", scene);
                              a18.diffuseTexture = new BABYLON.Texture("./grounds/cat3.png");
                              a18.diffuseTexture.hasAlpha = true;
                              a18.useAlphaFromDiffuseTexture = true;
                              a18.backFaceCulling = false;
                              a18.alpha = 0.5;
                              for (let i = 0; i < 1; i++) {
                                var planea18 = BABYLON.MeshBuilder.CreateGround("planea18", { width: 1.47, height: 1.5 }, scene);
                                planea18.material = a18;
                                planea18.width = 1.47;
                                planea18.height = 1.5;
                                planea18.position.x = fxrand() * 14 - 7;
                                planea18.position.z = fxrand() * 14 - 7;
                                planea18.position.y = 0.04;
                                if (Math.sqrt(Math.pow(planea18.position.x, 2) + Math.pow(planea18.position.z, 2)) < 3) {
                                  planea18.dispose();
                                }
                              }
                     }
                     
                     if(chalk4>30 && chalk4<=40){
                     }
                     
                     
                    var chalk5;
                    chalk5=Math.round(genR(0,40));
   
                     if(chalk5<=10){
                              var a19 = new BABYLON.StandardMaterial("chalk5A", scene);
                              a19.diffuseTexture = new BABYLON.Texture("./grounds/extra1.png");
                              a19.diffuseTexture.hasAlpha = true;
                              a19.useAlphaFromDiffuseTexture = true;
                              a19.backFaceCulling = false;
                              a19.alpha = 0.5;
                              for (let i = 0; i < 1; i++) {
                                var planea19 = BABYLON.MeshBuilder.CreateGround("planea19", { width: 1.79, height: 1.8 }, scene);
                                planea19.material = a19;
                                planea19.width = 1.79;
                                planea19.height = 1.8;
                                planea19.position.x = fxrand() * 14 - 7;
                                planea19.position.z = fxrand() * 14 - 7;
                                planea19.position.y = 0.05;
                                if (Math.sqrt(Math.pow(planea19.position.x, 2) + Math.pow(planea19.position.z, 2)) < 3) {
                                  planea19.dispose();
                                }
                              }
                     }
                     
                     if(chalk5>10 && chalk5<=20){
                              var a20 = new BABYLON.StandardMaterial("chalk5B", scene);
                              a20.diffuseTexture = new BABYLON.Texture("./grounds/extra2.png");
                              a20.diffuseTexture.hasAlpha = true;
                              a20.useAlphaFromDiffuseTexture = true;
                              a20.backFaceCulling = false;
                              a20.alpha = 0.5;
                              for (let i = 0; i < 1; i++) {
                                var planea20 = BABYLON.MeshBuilder.CreateGround("planea20", { width: 1.57, height: 1.7 }, scene);
                                planea20.material = a20;
                                planea20.width = 1.57;
                                planea20.height = 1.7;
                                planea20.position.x = fxrand() * 14 - 7;
                                planea20.position.z = fxrand() * 14 - 7;
                                planea20.position.y = 0.05;
                                if (Math.sqrt(Math.pow(planea20.position.x, 2) + Math.pow(planea20.position.z, 2)) < 3) {
                                  planea20.dispose();
                                }
                              }
                     }
                     
                     if(chalk5>20 && chalk5<=30){
                              var a21 = new BABYLON.StandardMaterial("chalk5C", scene);
                              a21.diffuseTexture = new BABYLON.Texture("./grounds/extra3.png");
                              a21.diffuseTexture.hasAlpha = true;
                              a21.useAlphaFromDiffuseTexture = true;
                              a21.backFaceCulling = false;
                              a21.alpha = 0.5;
                              for (let i = 0; i < 1; i++) {
                                var planea21 = BABYLON.MeshBuilder.CreateGround("planea21", { width: 1.44, height: 1.6 }, scene);
                                planea21.material = a21;
                                planea21.width = 1.44;
                                planea21.height = 1.6;
                                planea21.position.x = fxrand() * 14 - 7;
                                planea21.position.z = fxrand() * 14 - 7;
                                planea21.position.y = 0.05;
                                if (Math.sqrt(Math.pow(planea21.position.x, 2) + Math.pow(planea21.position.z, 2)) < 3) {
                                  planea21.dispose();
                                }
                              }
                     }
                     
                     if(chalk5>30 && chalk5<=40){
                     }
                     
                     
                    
                    
                 //Music

                 var musNum;
                 var musVar;
                 let animationSpeed;
                 var currentSound;

                 musNum=Math.round(genR(0,90));

                  if(musNum<=10){
                    var sound = new BABYLON.Sound("Music", "music/busycity.mp3", scene, function() {
                        sound.play();
                    }, {
                        loop: true,
                        autoplay: false,
                        spatialSound: false
                    });
                    currentSound = sound;
                    animationSpeed = 1450;
                  musVar="Busy City";
                  }
                  
                  if(musNum>10 && musNum<=20){
                    var sound2 = new BABYLON.Sound("Music", "music/fractalized.mp3", scene, function() {
                        sound2.play();
                    }, {
                        loop: true,
                        autoplay: false,
                        spatialSound: false
                    });
                    currentSound = sound2;
                    animationSpeed = 1450;
                  musVar="Fractalized";
                  }
                  
                  if(musNum>20 && musNum<=30){
                    var sound3 = new BABYLON.Sound("Music", "music/harshlife.mp3", scene, function() {
                        sound3.play();
                    }, {
                        loop: true,
                        autoplay: false,
                        spatialSound: false
                    });
                    currentSound = sound3;
                    animationSpeed = 1350;
                  musVar="Harsh Life";
                  }
                  
                  if(musNum>30 && musNum<=40){
                    var sound4 = new BABYLON.Sound("Music", "music/intelligentartificiality.mp3", scene, function() {
                        sound4.play();
                    }, {
                        loop: true,
                        autoplay: false,
                        spatialSound: false
                    });
                    currentSound = sound4;
                    animationSpeed = 1800;
                  musVar="Intelligent Artificiality";
                  }
                  
                  if(musNum>40 && musNum<=50){
                    var sound5 = new BABYLON.Sound("Music", "music/introspective.mp3", scene, function() {
                        sound5.play();
                    }, {
                        loop: true,
                        autoplay: false,
                        spatialSound: false
                    });
                    currentSound = sound5;
                    animationSpeed = 1600;
                  musVar="Introspective";
                  }
                  
                  if(musNum>50 && musNum<=60){
                    var sound6 = new BABYLON.Sound("Music", "music/joiedevivre.mp3", scene, function() {
                        sound6.play();
                    }, {
                        loop: true,
                        autoplay: false,
                        spatialSound: false
                    });
                    currentSound = sound6;
                    animationSpeed = 1400;
                  musVar="Joie De Vivre";
                  }

                  if(musNum>60 && musNum<=70){
                    var sound7 = new BABYLON.Sound("Music", "music/machineinsurrection.mp3", scene, function() {
                        sound7.play();
                    }, {
                        loop: true,
                        autoplay: false,
                        spatialSound: false
                    });
                    currentSound = sound7;
                    animationSpeed = 1550;
                  musVar="Machine Insurrection";
                  }

                  if(musNum>70 && musNum<=80){
                    var sound8 = new BABYLON.Sound("Music", "music/nightfevers.mp3", scene, function() {
                        sound8.play();
                    }, {
                        loop: true,
                        autoplay: false,
                        spatialSound: false
                    });
                    currentSound = sound8;
                    animationSpeed = 1400;
                  musVar="Night Fevers";
                  }

                  if(musNum>80 && musNum<=90){
                    var sound9 = new BABYLON.Sound("Music", "music/recursiverepetition.mp3", scene, function() {
                        sound9.play();
                    }, {
                        loop: true,
                        autoplay: false,
                        spatialSound: false
                    });
                    currentSound = sound9;
                    animationSpeed = 1350;
                  musVar="Recursive Repetition";
                  }
                  
                  window.addEventListener("keydown", function(event) {
                    if (event.key === 'M' || event.keyCode === 77) {
                        if (currentSound.isPlaying) {
                            currentSound.pause();
                        } else {
                            currentSound.play();
                        }
                    }
                });
                    
                    
                 // Filters
        
        
                 var filNum;
                 var filVar;

                 filNum=Math.round(genR(0,130));

                  if(filNum<=12){
                    var parameters = {
                      edge_blur: genR(1.5,2.5),
                      chromatic_aberration: genR(0.75,1.3),
                      distortion: 0.5,
                    };
                    new BABYLON.LensRenderingPipeline('lensEffects', parameters, scene, 1.0, camera);
                    filVar="Mild";
                  }
                  
                  if(filNum>12 && filNum<=28){
                      var parameters2 = {
                      edge_blur: genR(2.5,3.5),
                      chromatic_aberration: genR(1.5,2.5),
                      distortion: 0.5,
                    };
                    new BABYLON.LensRenderingPipeline('lensEffects', parameters2, scene, 1.0, camera);
                    filVar="Intense";
                  }
                  
                      if(filNum>28 && filNum<=41){
                      var parameters3 = {
                      edge_blur: genR(1.5,2.5),
                      chromatic_aberration: genR(0.75,1.3),
                      distortion: 0.5,
                      grain_amount: genR(1.5,2.5),
                    };
                    new BABYLON.LensRenderingPipeline('lensEffects', parameters3, scene, 1.0, camera);
                    filVar="Grainy";
                  }
                  
                  if(filNum>41 && filNum<=58){
                      var parameters4 = {
                      edge_blur: genR(3,5),
                      chromatic_aberration: genR(3,5),
                      distortion: 0.65,
                    };
                    new BABYLON.LensRenderingPipeline('lensEffects', parameters4, scene, 1.0, camera);
                    filVar="Strong";
                  }
                  
                  if(filNum>58 && filNum<=69){
                      var parameters5 = {
		  dof_focus_distance: 30,
		  dof_aperture: 2.0,
		  dof_pentagon: true,
		  dof_gain: 1.0,
		  dof_threshold: 1.0,
		  dof_darken: 0.1,
                      chromatic_aberration: 1.0,
                      distortion: 0.5,
                    };
                    new BABYLON.LensRenderingPipeline('lensEffects', parameters5, scene, 1.0, camera);
                    filVar="Oneiric";
                  }
                  
                  if(filNum>69 && filNum<=79){
                      var parameters6 = {
                      edge_blur: genR(2,4),
                      chromatic_aberration: genR(2,4),
                      distortion: genR(1.2,1.5),
                    };
                    new BABYLON.LensRenderingPipeline('lensEffects', parameters6, scene, 1.0, camera);
                    filVar="Distorted";
                  }
                  
                  if(filNum>79 && filNum<=94){
                    BABYLON.Effect.ShadersStore.customGrainFragmentShader = `
                    precision highp float;
                    varying vec2 vUV;
                    uniform sampler2D textureSampler;
                    uniform sampler2D grainTexture;
                    uniform float grainSize;  // A factor to control the tiling of the grain
                    uniform float grainAmount;  // A factor to control the intensity of the grain
                    uniform float verticalOffset;  // Offset to control vertical movement
                    
                    void main(void) {
                        vec4 color = texture2D(textureSampler, vUV);
                        vec4 grainColor = texture2D(grainTexture, vec2(vUV.x * grainSize, mod(vUV.y + verticalOffset, 1.0) * grainSize));
                        grainColor = mix(vec4(1.0), grainColor, grainAmount); // Interpolate based on grainAmount
                    
                        // Blending the grain with the original color
                        gl_FragColor = color * grainColor;
                    }
                    `;
                    
                    var grainTexture = new BABYLON.Texture("./elements/tv.png", scene);
                    
                    var postProcess = new BABYLON.PostProcess("grainEffect", "customGrain", ["grainSize", "grainAmount", "verticalOffset"], ["grainTexture"], 1.0, camera);
                    
                    let offset = 0;
                    const speed = 0.00005;
                    
                    scene.registerBeforeRender(function() {
                        offset -= speed;
                        if (offset <= 0) offset += 1;
                    
                        postProcess.onApply = function (effect) {
                            effect.setTexture("grainTexture", grainTexture);
                            effect.setFloat("grainSize", 30.0);
                            effect.setFloat("grainAmount", genR(0.2, 0.3));
                            effect.setFloat("verticalOffset", offset);
                        };
                    });
                    
                    var parameters7 = {
                        edge_blur: genR(2,3),
                        chromatic_aberration: genR(1,1.5),
                        distortion: 0.5,
                        grain_texture: grainTexture
                    };
                    new BABYLON.LensRenderingPipeline('lensEffects', parameters7, scene, 1.0, camera);
                    filVar="Old TV";
                  }
                  
                  if(filNum>94 && filNum<=99){
                    BABYLON.Effect.ShadersStore.pixelationFragmentShader = `
                    precision highp float;
                    
                    varying vec2 vUV;
                    uniform sampler2D textureSampler;
                    uniform float pixelSize;
                    uniform vec2 resolution;
                    
                    void main(void) {
                        vec2 uv = vUV;
                        
                        // Translate UV coordinates to pixel coordinates
                        uv *= resolution;
                        
                        // Floor the values to get the top-left corner of the pixel
                        uv = floor(uv / pixelSize) * pixelSize;
                        
                        // Translate it back to UV space
                        uv /= resolution;
                        
                        gl_FragColor = texture2D(textureSampler, uv);
                    }
                    `;
                    var pixelationPostProcess = new BABYLON.PostProcess("pixelationEffect", "pixelation", ["pixelSize", "resolution"], [], 1.0, camera);
                    pixelationPostProcess.onApply = function(effect) {
                        effect.setFloat("pixelSize", 4);
                        effect.setVector2("resolution", new BABYLON.Vector2(scene.getEngine().getRenderWidth(), scene.getEngine().getRenderHeight()));
                    };
                    filVar="Pixelated";
                  }
                  
                  if(filNum>99 && filNum<=113){
                    BABYLON.Effect.ShadersStore.feedbackShaderFragmentShader = `
                    precision mediump float;
                    
                    uniform sampler2D textureSampler;
                    uniform vec2 resolution;
                    uniform float time;
                    uniform float feedbackMix;
                    uniform float waveIntensity;  // New uniform for wave intensity
                    
                    void main() {
                        vec2 uv = gl_FragCoord.xy / resolution.xy;
                        uv += waveIntensity * vec2(sin(uv.y * 10.0 + time), cos(uv.x * 10.0 + time));  // Use the dynamic wave intensity
                        vec4 currentColor = texture2D(textureSampler, uv);
                        vec4 previousColor = texture2D(textureSampler, uv + vec2(sin(time) * 0.01, cos(time) * 0.01));
                        gl_FragColor = mix(currentColor, previousColor, feedbackMix);
                    }
                    `;
                    var postProcessFeedback = new BABYLON.PostProcess("FeedbackEffect", "feedbackShader", ["time", "resolution", "feedbackMix", "waveIntensity"], null, 1.0, camera);  // Added "waveIntensity" to the uniforms
                    
                    var feedbackMixValue = genR(0.8, 1.1);
                    var waveIntensityValue = genR(0.005, 0.010);
                    
                    postProcessFeedback.onApply = function(effect) {
                        effect.setFloat("time", scene.getEngine().getDeltaTime() / animationSpeed / 4);
                        effect.setVector2("resolution", new BABYLON.Vector2(scene.getEngine().getRenderWidth(), scene.getEngine().getRenderHeight()));
                        effect.setFloat("feedbackMix", feedbackMixValue);
                        effect.setFloat("waveIntensity", waveIntensityValue);
                    };
                    
                    setInterval(function() {
                        feedbackMixValue = genR(0.8, 1.1);
                        waveIntensityValue = genR(0.005, 0.010);
                    }, animationSpeed / 4);
                    
                    var parameters8 = {
                        edge_blur: genR(2,5),
                        chromatic_aberration: genR(2,5),
                        distortion: 0.5,
                    };
                    new BABYLON.LensRenderingPipeline('lensEffects', parameters8, scene, 1.0, camera);
                  filVar="Trippy";
                  }
                  
                  
                  if(filNum>113 && filNum<=120){
                    BABYLON.Effect.ShadersStore.customCuadGrainFragmentShader = `
                    precision highp float;
                    varying vec2 vUV;
                    uniform sampler2D textureSampler;
                    uniform sampler2D grainTexture;
                    uniform float grainSize;  
                    uniform float grainAmount;  
                    
                    void main(void) {
                        vec4 color = texture2D(textureSampler, vUV);
                        vec4 grainColor = texture2D(grainTexture, vec2(vUV.x * grainSize, vUV.y * grainSize));
                        grainColor = mix(vec4(1.0), grainColor, grainAmount); 
                        gl_FragColor = mix(color, color * grainColor, 0.5);
                    }`;
                    
                    var cuadGrainTexture = new BABYLON.Texture("./elements/cuad.png", scene);
                    var cuadGrainPostProcess = new BABYLON.PostProcess("cuadGrainEffect", "customCuadGrain", ["grainSize", "grainAmount"], ["grainTexture"], 1.0, camera);
                    
                    let updateTimer = 0;
                    const updateInterval = animationSpeed / 1000;
                    
                    scene.registerBeforeRender(function() {
                        updateTimer += 1/60;
                    
                        cuadGrainPostProcess.onApply = function (effect) {
                            effect.setTexture("grainTexture", cuadGrainTexture);
                    
                            if (updateTimer >= updateInterval) {
                                effect.setFloat("grainSize", genR(90, 100));
                                updateTimer = 0;
                            }
                            effect.setFloat("grainAmount", 0.2);
                        };
                    });
                    
                    var cuadParameters = {
                        edge_blur: genR(2,3),
                        chromatic_aberration: genR(1,1.5),
                        distortion: 0.5,
                        grain_texture: cuadGrainTexture
                    };
                    
                    new BABYLON.LensRenderingPipeline('cuadLensEffects', cuadParameters, scene, 1.0, camera);
                  filVar="Grid";
                  }
                  
                  
                  if(filNum>120 && filNum<=126){          
                    BABYLON.Effect.ShadersStore.patternGrainFragmentShader = `
                    precision highp float;
                    varying vec2 vUV;
                    uniform sampler2D textureSampler;
                    uniform sampler2D patternGrainTexture;
                    uniform float patternGrainSize;
                    uniform float patternGrainAmount;
                    
                    void main(void) {
                        vec4 color = texture2D(textureSampler, vUV);
                        vec4 grainColor = texture2D(patternGrainTexture, vec2(vUV.x * patternGrainSize, vUV.y * patternGrainSize));
                        grainColor = mix(vec4(1.0), grainColor, patternGrainAmount);
                        gl_FragColor = mix(color, color * grainColor, 0.5);
                    }`;
                    
                    var patternTexture = new BABYLON.Texture("./elements/pattern.png", scene);
                    var patternGrainPostProcess = new BABYLON.PostProcess("patternGrainEffect", "patternGrain", ["patternGrainSize", "patternGrainAmount"], ["patternGrainTexture"], 1.0, camera);
                    
                    let patternUpdateTimer = 0;
                    const patternUpdateInterval = animationSpeed / 1000;
                    
                    scene.registerBeforeRender(function() {
                        patternUpdateTimer += 1/60;
                    
                        patternGrainPostProcess.onApply = function (effect) {
                            effect.setTexture("patternGrainTexture", patternTexture);
                    
                            if (patternUpdateTimer >= patternUpdateInterval) {
                                effect.setFloat("patternGrainSize", genR(30, 40));
                                patternUpdateTimer = 0;
                            }
                            effect.setFloat("patternGrainAmount", 0.2);
                        };
                    });
                    
                    var patternParameters = {
                        edge_blur: genR(2,3),
                        chromatic_aberration: genR(1,1.5),
                        distortion: 0.5,
                        grain_texture: patternTexture
                    };
                    
                    new BABYLON.LensRenderingPipeline('patternLensEffects', patternParameters, scene, 1.0, camera);
                  filVar="Pattern";
                  }
                  
                  if(filNum>126 && filNum<=130){
                    BABYLON.Effect.ShadersStore.anotherGrainFragmentShader = `
                    precision highp float;
                    varying vec2 vUV;
                    uniform sampler2D textureSampler;
                    uniform sampler2D anotherGrainTexture;
                    uniform float anotherGrainSize;
                    uniform float anotherGrainAmount;
                    
                    void main(void) {
                        vec4 color = texture2D(textureSampler, vUV);
                        vec4 grainColor = texture2D(anotherGrainTexture, vec2(vUV.x * anotherGrainSize, vUV.y * anotherGrainSize));
                        grainColor = mix(vec4(1.0), grainColor, anotherGrainAmount);
                        gl_FragColor = mix(color, color * grainColor, 0.5);
                    }`;
                    
                    var newGrainTexture = new BABYLON.Texture("./elements/69.png", scene);
                    var anotherGrainPostProcess = new BABYLON.PostProcess("anotherGrainEffect", "anotherGrain", ["anotherGrainSize", "anotherGrainAmount"], ["anotherGrainTexture"], 1.0, camera);
                    
                    let anotherUpdateTimer = 0;
                    const anotherUpdateInterval = animationSpeed / 1000;
                    
                    scene.registerBeforeRender(function() {
                        anotherUpdateTimer += 1/60;
                    
                        anotherGrainPostProcess.onApply = function (effect) {
                            effect.setTexture("anotherGrainTexture", newGrainTexture);
                    
                            if (anotherUpdateTimer >= anotherUpdateInterval) {
                                effect.setFloat("anotherGrainSize", genR(40, 50));
                                anotherUpdateTimer = 0;
                            }
                            effect.setFloat("anotherGrainAmount", 0.2);
                        };
                    });
                    
                    var anotherParameters = {
                        edge_blur: genR(2,3),
                        chromatic_aberration: genR(1,1.5),
                        distortion: 0.5,
                        grain_texture: newGrainTexture
                    };
                    
                    new BABYLON.LensRenderingPipeline('anotherLensEffects', anotherParameters, scene, 1.0, camera);
                  filVar="69";
                  }

                    
                    //Buildings
                    
                    var buiNum;
                    var buiVar;
   
                    buiNum=Math.round(genR(0,50));
   
                    if(buiNum<=14){
                    
                    var bA1 = new BABYLON.StandardMaterial("buildingA1", scene);
                    bA1.diffuseTexture = new BABYLON.Texture("./buildings/buildingA1.png", scene);
                    bA1.diffuseTexture.hasAlpha = true;
                    bA1.backFaceCulling = false;
                    bA1.flip = fxrand() >= 0.5; 
                    for (let i = 0; i < genR(26,50); i++) {
                      var planebA1 = BABYLON.MeshBuilder.CreatePlane("planebA1", { width: 10, height: 30 }, scene);
                      planebA1.material = bA1;
                      planebA1.width = 10;
                      planebA1.height = 30;
                      planebA1.position.x = fxrand() * 300 - 150;
                      planebA1.position.z = fxrand() * 300 - 150;
                      planebA1.position.y = 15;
                    if (Math.sqrt(Math.pow(planebA1.position.x, 2) + Math.pow(planebA1.position.z, 2)) < 60)
                    {planebA1.dispose();}                   
                    if (bA1.flip) {
                      planebA1.scaling.x *= -1;
                    }
                    }
                    
                    var bA3 = new BABYLON.StandardMaterial("buildingA3", scene);
                    bA3.diffuseTexture = new BABYLON.Texture("./buildings/buildingA3.png", scene);
                    bA3.diffuseTexture.hasAlpha = true;
                    bA3.backFaceCulling = false;
                    bA3.flip = fxrand() >= 0.5; 
                    for (let i = 0; i < genR(26,50); i++) {
                      var planebA3 = BABYLON.MeshBuilder.CreatePlane("planebA3", { width: 10, height: 30 }, scene);
                      planebA3.material = bA3;
                      planebA3.width = 10;
                      planebA3.height = 30;
                      planebA3.position.x = fxrand() * 300 - 150;
                      planebA3.position.z = fxrand() * 300 - 150;
                      planebA3.position.y = 15;
                    if (Math.sqrt(Math.pow(planebA3.position.x, 2) + Math.pow(planebA3.position.z, 2)) < 60)
                    {planebA3.dispose();}                   
                    if (bA3.flip) {
                      planebA3.scaling.x *= -1;
                    }
                    }
                    
                    var bB1 = new BABYLON.StandardMaterial("buildingB1", scene);
                    bB1.diffuseTexture = new BABYLON.Texture("./buildings/buildingB1.png", scene);
                    bB1.diffuseTexture.hasAlpha = true;
                    bB1.backFaceCulling = false;
                    bB1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planebB1 = BABYLON.MeshBuilder.CreatePlane("planebB1", { width: 13.33, height: 40 }, scene);
                      planebB1.material = bB1;
                      planebB1.width = 13.33;
                      planebB1.height = 40;
                      planebB1.position.x = fxrand() * 300 - 150;
                      planebB1.position.z = fxrand() * 300 - 150;
                      planebB1.position.y = 20;
                    if (Math.sqrt(Math.pow(planebB1.position.x, 2) + Math.pow(planebB1.position.z, 2)) < 60)
                    {planebB1.dispose();}
                    if (bB1.flip) {
                      planebB1.scaling.x *= -1;
                    }
                    }
                    
                    var bB2 = new BABYLON.StandardMaterial("buildingB2", scene);
                    bB2.diffuseTexture = new BABYLON.Texture("./buildings/buildingB2.png", scene);
                    bB2.diffuseTexture.hasAlpha = true;
                    bB2.backFaceCulling = false;
                    bB2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(22,40); i++) {
                      var planebB2 = BABYLON.MeshBuilder.CreatePlane("planebB2", { width: 16.66, height: 50 }, scene);
                      planebB2.material = bB2;
                      planebB2.width = 16.66;
                      planebB2.height = 50;
                      planebB2.position.x = fxrand() * 300 - 150;
                      planebB2.position.z = fxrand() * 300 - 150;
                      planebB2.position.y = 25;
                    if (Math.sqrt(Math.pow(planebB2.position.x, 2) + Math.pow(planebB2.position.z, 2)) < 70)
                    {planebB2.dispose();}
                    if (bB2.flip) {
                      planebB2.scaling.x *= -1;
                    }
                    }
                    
                    var bB3 = new BABYLON.StandardMaterial("buildingB3", scene);
                    bB3.diffuseTexture = new BABYLON.Texture("./buildings/buildingB3.png", scene);
                    bB3.diffuseTexture.hasAlpha = true;
                    bB3.backFaceCulling = false;
                    bB3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planebB3 = BABYLON.MeshBuilder.CreatePlane("planebB3", { width: 10, height: 30 }, scene);
                      planebB3.material = bB3;
                      planebB3.width = 10;
                      planebB3.height = 30;
                      planebB3.position.x = fxrand() * 300 - 150;
                      planebB3.position.z = fxrand() * 300 - 150;
                      planebB3.position.y = 15;
                    if (Math.sqrt(Math.pow(planebB3.position.x, 2) + Math.pow(planebB3.position.z, 2)) < 60)
                    {planebB3.dispose();}
                    if (bB3.flip) {
                      planebB3.scaling.x *= -1;
                    }
                    }
                    
                    var bC1 = new BABYLON.StandardMaterial("buildingC1", scene);
                    bC1.diffuseTexture = new BABYLON.Texture("./buildings/buildingC1.png", scene);
                    bC1.diffuseTexture.hasAlpha = true;
                    bC1.backFaceCulling = false;
                    bC1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planebC1 = BABYLON.MeshBuilder.CreatePlane("planebC1", { width: 10, height: 30 }, scene);
                      planebC1.material = bC1;
                      planebC1.width = 10;
                      planebC1.height = 30;
                      planebC1.position.x = fxrand() * 300 - 150;
                      planebC1.position.z = fxrand() * 300 - 150;
                      planebC1.position.y = 15;
                    if (Math.sqrt(Math.pow(planebC1.position.x, 2) + Math.pow(planebC1.position.z, 2)) < 60)
                    {planebC1.dispose();}
                    if (bC1.flip) {
                      planebC1.scaling.x *= -1;
                    }
                    }
                    
                    var bC2 = new BABYLON.StandardMaterial("buildingC2", scene);
                    bC2.diffuseTexture = new BABYLON.Texture("./buildings/buildingC2.png", scene);
                    bC2.diffuseTexture.hasAlpha = true;
                    bC2.backFaceCulling = false;
                    bC2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planebC2 = BABYLON.MeshBuilder.CreatePlane("planebC2", { width: 10, height: 30 }, scene);
                      planebC2.material = bC2;
                      planebC2.width = 10;
                      planebC2.height = 30;
                      planebC2.position.x = fxrand() * 300 - 150;
                      planebC2.position.z = fxrand() * 300 - 150;
                      planebC2.position.y = 15;
                    if (Math.sqrt(Math.pow(planebC2.position.x, 2) + Math.pow(planebC2.position.z, 2)) < 60)
                    {planebC2.dispose();}
                    if (bC2.flip) {
                      planebC2.scaling.x *= -1;
                    }
                    }
                    
                    var bC3 = new BABYLON.StandardMaterial("buildingC3", scene);
                    bC3.diffuseTexture = new BABYLON.Texture("./buildings/buildingC3.png", scene);
                    bC3.diffuseTexture.hasAlpha = true;
                    bC3.backFaceCulling = false;
                    bC3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(22,40); i++) {
                      var planebC3 = BABYLON.MeshBuilder.CreatePlane("planebC3", { width: 16.66, height: 50 }, scene);
                      planebC3.material = bC3;
                      planebC3.width = 16.66;
                      planebC3.height = 50;
                      planebC3.position.x = fxrand() * 300 - 150;
                      planebC3.position.z = fxrand() * 300 - 150;
                      planebC3.position.y = 25;
                    if (Math.sqrt(Math.pow(planebC3.position.x, 2) + Math.pow(planebC3.position.z, 2)) < 70)
                    {planebC3.dispose();}
                    if (bC3.flip) {
                      planebC3.scaling.x *= -1;
                    }
                    }
                    
                    var bD2 = new BABYLON.StandardMaterial("buildingD2", scene);
                    bD2.diffuseTexture = new BABYLON.Texture("./buildings/buildingD2.png", scene);
                    bD2.diffuseTexture.hasAlpha = true;
                    bD2.backFaceCulling = false;
                    bD2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planebD2 = BABYLON.MeshBuilder.CreatePlane("planebD2", { width: 10, height: 30 }, scene);
                      planebD2.material = bD2;
                      planebD2.width = 10;
                      planebD2.height = 30;
                      planebD2.position.x = fxrand() * 300 - 150;
                      planebD2.position.z = fxrand() * 300 - 150;
                      planebD2.position.y = 15;
                    if (Math.sqrt(Math.pow(planebD2.position.x, 2) + Math.pow(planebD2.position.z, 2)) < 60)
                    {planebD2.dispose();}
                    if (bD2.flip) {
                      planebD2.scaling.x *= -1;
                    }
                    }
                    
                    var bD3 = new BABYLON.StandardMaterial("buildingD3", scene);
                    bD3.diffuseTexture = new BABYLON.Texture("./buildings/buildingD3.png", scene);
                    bD3.diffuseTexture.hasAlpha = true;
                    bD3.backFaceCulling = false;
                    bD3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planebD3 = BABYLON.MeshBuilder.CreatePlane("planebD3", { width: 10, height: 30 }, scene);
                      planebD3.material = bD3;
                      planebD3.width = 10;
                      planebD3.height = 30;
                      planebD3.position.x = fxrand() * 300 - 150;
                      planebD3.position.z = fxrand() * 300 - 150;
                      planebD3.position.y = 15;
                    if (Math.sqrt(Math.pow(planebD3.position.x, 2) + Math.pow(planebD3.position.z, 2)) < 60)
                    {planebD3.dispose();}
                    if (bD3.flip) {
                      planebD3.scaling.x *= -1;
                    }
                    }
                    
                    var bE1 = new BABYLON.StandardMaterial("buildingE1", scene);
                    bE1.diffuseTexture = new BABYLON.Texture("./buildings/buildingE1.png", scene);
                    bE1.diffuseTexture.hasAlpha = true;
                    bE1.backFaceCulling = false;
                    bE1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(16,33); i++) {
                      var planebE1 = BABYLON.MeshBuilder.CreatePlane("planebE1", { width: 20, height: 60 }, scene);
                      planebE1.material = bE1;
                      planebE1.width = 20;
                      planebE1.height = 60;
                      planebE1.position.x = fxrand() * 300 - 150;
                      planebE1.position.z = fxrand() * 300 - 150;
                      planebE1.position.y = 30;
                    if (Math.sqrt(Math.pow(planebE1.position.x, 2) + Math.pow(planebE1.position.z, 2)) < 90)
                    {planebE1.dispose();}
                    if (bE1.flip) {
                      planebE1.scaling.x *= -1;
                    }
                    }
                    
                    var bE2 = new BABYLON.StandardMaterial("buildingE2", scene);
                    bE2.diffuseTexture = new BABYLON.Texture("./buildings/buildingE2.png", scene);
                    bE2.diffuseTexture.hasAlpha = true;
                    bE2.backFaceCulling = false;
                    bE2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(16,33); i++) {
                      var planebE2 = BABYLON.MeshBuilder.CreatePlane("planebE2", { width: 20, height: 60 }, scene);
                      planebE2.material = bE2;
                      planebE2.width = 20;
                      planebE2.height = 60;
                      planebE2.position.x = fxrand() * 300 - 150;
                      planebE2.position.z = fxrand() * 300 - 150;
                      planebE2.position.y = 30;
                    if (Math.sqrt(Math.pow(planebE2.position.x, 2) + Math.pow(planebE2.position.z, 2)) < 90)
                    {planebE2.dispose();}
                    if (bE2.flip) {
                      planebE2.scaling.x *= -1;
                    }
                    }
                    
                    buiVar="Colorful";
                    }
                    
                    
                    if(buiNum>14 && buiNum<=27){
                    
                    var brut1 = new BABYLON.StandardMaterial("brut1", scene);
                    brut1.diffuseTexture = new BABYLON.Texture("./buildings/brut1.png", scene);
                    brut1.diffuseTexture.hasAlpha = true;
                    brut1.backFaceCulling = false;
                    brut1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planebrut1 = BABYLON.MeshBuilder.CreatePlane("planebrut1", { width: 16.85, height: 50 }, scene);
                      planebrut1.material = brut1;
                      planebrut1.width = 16.85;
                      planebrut1.height = 50;
                      planebrut1.position.x = fxrand() * 300 - 150;
                      planebrut1.position.z = fxrand() * 300 - 150;
                      planebrut1.position.y = 25;
                    if (Math.sqrt(Math.pow(planebrut1.position.x, 2) + Math.pow(planebrut1.position.z, 2)) < 70)
                    {planebrut1.dispose();}
                    if (brut1.flip) {
                      planebrut1.scaling.x *= -1;
                    }
                    }
                    
                    var brut2 = new BABYLON.StandardMaterial("brut2", scene);
                    brut2.diffuseTexture = new BABYLON.Texture("./buildings/brut2.png", scene);
                    brut2.diffuseTexture.hasAlpha = true;
                    brut2.backFaceCulling = false;
                    brut2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planebrut2 = BABYLON.MeshBuilder.CreatePlane("planebrut2", { width: 11.2, height: 40 }, scene);
                      planebrut2.material = brut2;
                      planebrut2.width = 11.2;
                      planebrut2.height = 40;
                      planebrut2.position.x = fxrand() * 300 - 150;
                      planebrut2.position.z = fxrand() * 300 - 150;
                      planebrut2.position.y = 20;
                    if (Math.sqrt(Math.pow(planebrut2.position.x, 2) + Math.pow(planebrut2.position.z, 2)) < 60)
                    {planebrut2.dispose();}
                    if (brut2.flip) {
                      planebrut2.scaling.x *= -1;
                    }
                    }
                    
                    var brut3 = new BABYLON.StandardMaterial("brut3", scene);
                    brut3.diffuseTexture = new BABYLON.Texture("./buildings/brut3.png", scene);
                    brut3.diffuseTexture.hasAlpha = true;
                    brut3.backFaceCulling = false;
                    brut3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planebrut3 = BABYLON.MeshBuilder.CreatePlane("planebrut3", { width: 12.05, height: 40 }, scene);
                      planebrut3.material = brut3;
                      planebrut3.width = 12.05;
                      planebrut3.height = 40;
                      planebrut3.position.x = fxrand() * 300 - 150;
                      planebrut3.position.z = fxrand() * 300 - 150;
                      planebrut3.position.y = 15;
                    if (Math.sqrt(Math.pow(planebrut3.position.x, 2) + Math.pow(planebrut3.position.z, 2)) < 60)
                    {planebrut3.dispose();}
                    if (brut3.flip) {
                      planebrut3.scaling.x *= -1;
                    }
                    }
                    
                    var brut4 = new BABYLON.StandardMaterial("brut4", scene);
                    brut4.diffuseTexture = new BABYLON.Texture("./buildings/brut4.png", scene);
                    brut4.diffuseTexture.hasAlpha = true;
                    brut4.backFaceCulling = false;
                    brut4.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planebrut4 = BABYLON.MeshBuilder.CreatePlane("planebrut4", { width: 19.16, height: 46 }, scene);
                      planebrut4.material = brut4;
                      planebrut4.width = 19.16;
                      planebrut4.height = 46;
                      planebrut4.position.x = fxrand() * 300 - 150;
                      planebrut4.position.z = fxrand() * 300 - 150;
                      planebrut4.position.y = 23;
                    if (Math.sqrt(Math.pow(planebrut4.position.x, 2) + Math.pow(planebrut4.position.z, 2)) < 60)
                    {planebrut4.dispose();}
                    if (brut4.flip) {
                      planebrut4.scaling.x *= -1;
                    }
                    }
                    
                    var brut5 = new BABYLON.StandardMaterial("brut5", scene);
                    brut5.diffuseTexture = new BABYLON.Texture("./buildings/brut5.png", scene);
                    brut5.diffuseTexture.hasAlpha = true;
                    brut5.backFaceCulling = false;
                    brut5.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planebrut5 = BABYLON.MeshBuilder.CreatePlane("planebrut5", { width: 15.06, height: 50 }, scene);
                      planebrut5.material = brut5;
                      planebrut5.width = 15.06;
                      planebrut5.height = 50;
                      planebrut5.position.x = fxrand() * 300 - 150;
                      planebrut5.position.z = fxrand() * 300 - 150;
                      planebrut5.position.y = 25;
                    if (Math.sqrt(Math.pow(planebrut5.position.x, 2) + Math.pow(planebrut5.position.z, 2)) < 70)
                    {planebrut5.dispose();}
                    if (brut5.flip) {
                      planebrut5.scaling.x *= -1;
                    }
                    }
                    
                    var brut6 = new BABYLON.StandardMaterial("brut6", scene);
                    brut6.diffuseTexture = new BABYLON.Texture("./buildings/brut6.png", scene);
                    brut6.diffuseTexture.hasAlpha = true;
                    brut6.backFaceCulling = false;
                    brut6.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planebrut6 = BABYLON.MeshBuilder.CreatePlane("planebrut6", { width: 12.85, height: 40 }, scene);
                      planebrut6.material = brut6;
                      planebrut6.width = 12.85;
                      planebrut6.height = 40;
                      planebrut6.position.x = fxrand() * 300 - 150;
                      planebrut6.position.z = fxrand() * 300 - 150;
                      planebrut6.position.y = 20;
                    if (Math.sqrt(Math.pow(planebrut6.position.x, 2) + Math.pow(planebrut6.position.z, 2)) < 60)
                    {planebrut6.dispose();}
                    if (brut6.flip) {
                      planebrut6.scaling.x *= -1;
                    }
                    }
                    
                    var brut7 = new BABYLON.StandardMaterial("brut7", scene);
                    brut7.diffuseTexture = new BABYLON.Texture("./buildings/brut7.png", scene);
                    brut7.diffuseTexture.hasAlpha = true;
                    brut7.backFaceCulling = false;
                    brut7.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planebrut7 = BABYLON.MeshBuilder.CreatePlane("planebrut7", { width: 12.10, height: 40 }, scene);
                      planebrut7.material = brut7;
                      planebrut7.width = 12.10;
                      planebrut7.height = 40;
                      planebrut7.position.x = fxrand() * 300 - 150;
                      planebrut7.position.z = fxrand() * 300 - 150;
                      planebrut7.position.y = 20;
                    if (Math.sqrt(Math.pow(planebrut7.position.x, 2) + Math.pow(planebrut7.position.z, 2)) < 60)
                    {planebrut7.dispose();}
                    if (brut7.flip) {
                      planebrut7.scaling.x *= -1;
                    }
                    }
                    
                    var brut8 = new BABYLON.StandardMaterial("brut8", scene);
                    brut8.diffuseTexture = new BABYLON.Texture("./buildings/brut8.png", scene);
                    brut8.diffuseTexture.hasAlpha = true;
                    brut8.backFaceCulling = false;
                    brut8.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planebrut8 = BABYLON.MeshBuilder.CreatePlane("planebrut8", { width: 12.56, height: 40 }, scene);
                      planebrut8.material = brut8;
                      planebrut8.width = 12.56;
                      planebrut8.height = 40;
                      planebrut8.position.x = fxrand() * 300 - 150;
                      planebrut8.position.z = fxrand() * 300 - 150;
                      planebrut8.position.y = 20;
                    if (Math.sqrt(Math.pow(planebrut8.position.x, 2) + Math.pow(planebrut8.position.z, 2)) < 60)
                    {planebrut8.dispose();}
                    if (brut8.flip) {
                      planebrut8.scaling.x *= -1;
                    }
                    }
                    
                    var brut9 = new BABYLON.StandardMaterial("brut9", scene);
                    brut9.diffuseTexture = new BABYLON.Texture("./buildings/brut9.png", scene);
                    brut9.diffuseTexture.hasAlpha = true;
                    brut9.backFaceCulling = false;
                    brut9.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planebrut9 = BABYLON.MeshBuilder.CreatePlane("planebrut9", { width: 11.88, height: 40 }, scene);
                      planebrut9.material = brut9;
                      planebrut9.width = 11.88;
                      planebrut9.height = 40;
                      planebrut9.position.x = fxrand() * 300 - 150;
                      planebrut9.position.z = fxrand() * 300 - 150;
                      planebrut9.position.y = 20;
                    if (Math.sqrt(Math.pow(planebrut9.position.x, 2) + Math.pow(planebrut9.position.z, 2)) < 60)
                    {planebrut9.dispose();}
                    if (brut9.flip) {
                      planebrut9.scaling.x *= -1;
                    }
                    }
                    
                    var brut10 = new BABYLON.StandardMaterial("brut10", scene);
                    brut10.diffuseTexture = new BABYLON.Texture("./buildings/brut10.png", scene);
                    brut10.diffuseTexture.hasAlpha = true;
                    brut10.backFaceCulling = false;
                    brut10.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planebrut10 = BABYLON.MeshBuilder.CreatePlane("planebrut10", { width: 15.3, height: 40 }, scene);
                      planebrut10.material = brut10;
                      planebrut10.width = 15.3;
                      planebrut10.height = 40;
                      planebrut10.position.x = fxrand() * 300 - 150;
                      planebrut10.position.z = fxrand() * 300 - 150;
                      planebrut10.position.y = 20;
                    if (Math.sqrt(Math.pow(planebrut10.position.x, 2) + Math.pow(planebrut10.position.z, 2)) < 60)
                    {planebrut10.dispose();}
                    if (brut10.flip) {
                      planebrut10.scaling.x *= -1;
                    }
                    }
                    
                    var brut11 = new BABYLON.StandardMaterial("brut11", scene);
                    brut11.diffuseTexture = new BABYLON.Texture("./buildings/brut11.png", scene);
                    brut11.diffuseTexture.hasAlpha = true;
                    brut11.backFaceCulling = false;
                    brut11.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,16); i++) {
                      var planebrut11 = BABYLON.MeshBuilder.CreatePlane("planebrut11", { width: 35.65, height: 80 }, scene);
                      planebrut11.material = brut11;
                      planebrut11.width = 35.65;
                      planebrut11.height = 80;
                      planebrut11.position.x = fxrand() * 300 - 150;
                      planebrut11.position.z = fxrand() * 300 - 150;
                      planebrut11.position.y = 40;
                    if (Math.sqrt(Math.pow(planebrut11.position.x, 2) + Math.pow(planebrut11.position.z, 2)) < 90)
                    {planebrut11.dispose();}
                    if (brut11.flip) {
                      planebrut11.scaling.x *= -1;
                    }
                    }
                    
                    var brut12 = new BABYLON.StandardMaterial("brut12", scene);
                    brut12.diffuseTexture = new BABYLON.Texture("./buildings/brut12.png", scene);
                    brut12.diffuseTexture.hasAlpha = true;
                    brut12.backFaceCulling = false;
                    brut12.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,16); i++) {
                      var planebrut12 = BABYLON.MeshBuilder.CreatePlane("planebrut12", { width: 36.9, height: 80 }, scene);
                      planebrut12.material = brut12;
                      planebrut12.width = 36.9;
                      planebrut12.height = 80;
                      planebrut12.position.x = fxrand() * 300 - 150;
                      planebrut12.position.z = fxrand() * 300 - 150;
                      planebrut12.position.y = 40;
                    if (Math.sqrt(Math.pow(planebrut12.position.x, 2) + Math.pow(planebrut12.position.z, 2)) < 90)
                    {planebrut12.dispose();}
                    if (brut12.flip) {
                      planebrut12.scaling.x *= -1;
                    }
                    }
                    
                    buiVar="Brutalist";
                    }
                    
                    
                    if(buiNum>27 && buiNum<=39){
                    
                    var jugen1 = new BABYLON.StandardMaterial("jugen1", scene);
                    jugen1.diffuseTexture = new BABYLON.Texture("./buildings/jugen1.png", scene);
                    jugen1.diffuseTexture.hasAlpha = true;
                    jugen1.backFaceCulling = false;
                    jugen1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planejugen1 = BABYLON.MeshBuilder.CreatePlane("planejugen1", { width: 13.48, height: 40 }, scene);
                      planejugen1.material = jugen1;
                      planejugen1.width = 13.48;
                      planejugen1.height = 40;
                      planejugen1.position.x = fxrand() * 300 - 150;
                      planejugen1.position.z = fxrand() * 300 - 150;
                      planejugen1.position.y = 20;
                    if (Math.sqrt(Math.pow(planejugen1.position.x, 2) + Math.pow(planejugen1.position.z, 2)) < 60)
                    {planejugen1.dispose();}
                    if (jugen1.flip) {
                      planejugen1.scaling.x *= -1;
                    }
                    }
                    
                    var jugen2 = new BABYLON.StandardMaterial("jugen2", scene);
                    jugen2.diffuseTexture = new BABYLON.Texture("./buildings/jugen2.png", scene);
                    jugen2.diffuseTexture.hasAlpha = true;
                    jugen2.backFaceCulling = false;
                    jugen2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planejugen2 = BABYLON.MeshBuilder.CreatePlane("planejugen2", { width: 12.8, height: 40 }, scene);
                      planejugen2.material = jugen2;
                      planejugen2.width = 12.8;
                      planejugen2.height = 40;
                      planejugen2.position.x = fxrand() * 300 - 150;
                      planejugen2.position.z = fxrand() * 300 - 150;
                      planejugen2.position.y = 20;
                    if (Math.sqrt(Math.pow(planejugen2.position.x, 2) + Math.pow(planejugen2.position.z, 2)) < 60)
                    {planejugen2.dispose();}
                    if (jugen2.flip) {
                      planejugen2.scaling.x *= -1;
                    }
                    }
 
                    var jugen3 = new BABYLON.StandardMaterial("jugen3", scene);
                    jugen3.diffuseTexture = new BABYLON.Texture("./buildings/jugen3.png", scene);
                    jugen3.diffuseTexture.hasAlpha = true;
                    jugen3.backFaceCulling = false;
                    jugen3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planejugen3 = BABYLON.MeshBuilder.CreatePlane("planejugen3", { width: 12.45, height: 40 }, scene);
                      planejugen3.material = jugen3;
                      planejugen3.width = 12.45;
                      planejugen3.height = 40;
                      planejugen3.position.x = fxrand() * 300 - 150;
                      planejugen3.position.z = fxrand() * 300 - 150;
                      planejugen3.position.y = 20;
                    if (Math.sqrt(Math.pow(planejugen3.position.x, 2) + Math.pow(planejugen3.position.z, 2)) < 55)
                    {planejugen3.dispose();}
                    if (jugen3.flip) {
                      planejugen3.scaling.x *= -1;
                    }
                    }
                    
                    var jugen4 = new BABYLON.StandardMaterial("jugen4", scene);
                    jugen4.diffuseTexture = new BABYLON.Texture("./buildings/jugen4.png", scene);
                    jugen4.diffuseTexture.hasAlpha = true;
                    jugen4.backFaceCulling = false;
                    jugen4.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planejugen4 = BABYLON.MeshBuilder.CreatePlane("planejugen4", { width: 18.06, height: 55 }, scene);
                      planejugen4.material = jugen4;
                      planejugen4.width = 18.06;
                      planejugen4.height = 55;
                      planejugen4.position.x = fxrand() * 300 - 150;
                      planejugen4.position.z = fxrand() * 300 - 150;
                      planejugen4.position.y = 27.5;
                    if (Math.sqrt(Math.pow(planejugen4.position.x, 2) + Math.pow(planejugen4.position.z, 2)) < 70)
                    {planejugen4.dispose();}
                    if (jugen4.flip) {
                      planejugen4.scaling.x *= -1;
                    }
                    }
                    
                    var jugen5 = new BABYLON.StandardMaterial("jugen5", scene);
                    jugen5.diffuseTexture = new BABYLON.Texture("./buildings/jugen5.png", scene);
                    jugen5.diffuseTexture.hasAlpha = true;
                    jugen5.backFaceCulling = false;
                    jugen5.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planejugen5 = BABYLON.MeshBuilder.CreatePlane("planejugen5", { width: 18.76, height: 55 }, scene);
                      planejugen5.material = jugen5;
                      planejugen5.width = 18.76;
                      planejugen5.height = 55;
                      planejugen5.position.x = fxrand() * 300 - 150;
                      planejugen5.position.z = fxrand() * 300 - 150;
                      planejugen5.position.y = 27.5;
                    if (Math.sqrt(Math.pow(planejugen5.position.x, 2) + Math.pow(planejugen5.position.z, 2)) < 70)
                    {planejugen5.dispose();}
                    if (jugen5.flip) {
                      planejugen5.scaling.x *= -1;
                    }
                    }
                    
                    var jugen6 = new BABYLON.StandardMaterial("jugen6", scene);
                    jugen6.diffuseTexture = new BABYLON.Texture("./buildings/jugen6.png", scene);
                    jugen6.diffuseTexture.hasAlpha = true;
                    jugen6.backFaceCulling = false;
                    jugen6.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planejugen6 = BABYLON.MeshBuilder.CreatePlane("planejugen6", { width: 12.56, height: 40 }, scene);
                      planejugen6.material = jugen6;
                      planejugen6.width = 12.56;
                      planejugen6.height = 40;
                      planejugen6.position.x = fxrand() * 300 - 150;
                      planejugen6.position.z = fxrand() * 300 - 150;
                      planejugen6.position.y = 20;
                    if (Math.sqrt(Math.pow(planejugen6.position.x, 2) + Math.pow(planejugen6.position.z, 2)) < 60)
                    {planejugen6.dispose();}
                    if (jugen6.flip) {
                      planejugen6.scaling.x *= -1;
                    }
                    }
                    
                    var jugen7 = new BABYLON.StandardMaterial("jugen7", scene);
                    jugen7.diffuseTexture = new BABYLON.Texture("./buildings/jugen7.png", scene);
                    jugen7.diffuseTexture.hasAlpha = true;
                    jugen7.backFaceCulling = false;
                    jugen7.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planejugen7 = BABYLON.MeshBuilder.CreatePlane("planejugen7", { width: 13.13, height: 46 }, scene);
                      planejugen7.material = jugen7;
                      planejugen7.width = 13.13;
                      planejugen7.height = 46;
                      planejugen7.position.x = fxrand() * 300 - 150;
                      planejugen7.position.z = fxrand() * 300 - 150;
                      planejugen7.position.y = 23;
                    if (Math.sqrt(Math.pow(planejugen7.position.x, 2) + Math.pow(planejugen7.position.z, 2)) < 60)
                    {planejugen7.dispose();}
                    if (jugen7.flip) {
                      planejugen7.scaling.x *= -1;
                    }
                    }
                    
                    var jugen8 = new BABYLON.StandardMaterial("jugen8", scene);
                    jugen8.diffuseTexture = new BABYLON.Texture("./buildings/jugen8.png", scene);
                    jugen8.diffuseTexture.hasAlpha = true;
                    jugen8.backFaceCulling = false;
                    jugen8.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(26,50); i++) {
                      var planejugen8 = BABYLON.MeshBuilder.CreatePlane("planejugen8", { width: 12.22, height: 40 }, scene);
                      planejugen8.material = jugen8;
                      planejugen8.width = 12.22;
                      planejugen8.height = 40;
                      planejugen8.position.x = fxrand() * 300 - 150;
                      planejugen8.position.z = fxrand() * 300 - 150;
                      planejugen8.position.y = 20;
                    if (Math.sqrt(Math.pow(planejugen8.position.x, 2) + Math.pow(planejugen8.position.z, 2)) < 60)
                    {planejugen8.dispose();}
                    if (jugen8.flip) {
                      planejugen8.scaling.x *= -1;
                    }
                    }
                    
                    var jugen9 = new BABYLON.StandardMaterial("jugen9", scene);
                    jugen9.diffuseTexture = new BABYLON.Texture("./buildings/jugen9.png", scene);
                    jugen9.diffuseTexture.hasAlpha = true;
                    jugen9.backFaceCulling = false;
                    jugen9.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,24); i++) {
                      var planejugen9 = BABYLON.MeshBuilder.CreatePlane("planejugen9", { width: 19.11, height: 60 }, scene);
                      planejugen9.material = jugen9;
                      planejugen9.width = 19.11;
                      planejugen9.height = 60;
                      planejugen9.position.x = fxrand() * 300 - 150;
                      planejugen9.position.z = fxrand() * 300 - 150;
                      planejugen9.position.y = 30;
                    if (Math.sqrt(Math.pow(planejugen9.position.x, 2) + Math.pow(planejugen9.position.z, 2)) < 90)
                    {planejugen9.dispose();}
                    if (jugen9.flip) {
                      planejugen9.scaling.x *= -1;
                    }
                    }
                    
                    var jugen10 = new BABYLON.StandardMaterial("jugen10", scene);
                    jugen10.diffuseTexture = new BABYLON.Texture("./buildings/jugen10.png", scene);
                    jugen10.diffuseTexture.hasAlpha = true;
                    jugen10.backFaceCulling = false;
                    jugen10.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,24); i++) {
                      var planejugen10 = BABYLON.MeshBuilder.CreatePlane("planejugen10", { width: 19.97, height: 60 }, scene);
                      planejugen10.material = jugen10;
                      planejugen10.width = 19.97;
                      planejugen10.height = 60;
                      planejugen10.position.x = fxrand() * 300 - 150;
                      planejugen10.position.z = fxrand() * 300 - 150;
                      planejugen10.position.y = 30;
                    if (Math.sqrt(Math.pow(planejugen10.position.x, 2) + Math.pow(planejugen10.position.z, 2)) < 90)
                    {planejugen10.dispose();}
                    if (jugen10.flip) {
                      planejugen10.scaling.x *= -1;
                    }
                    }
 
                    buiVar="Jugendstil";
                    }
                    
                    
                    if(buiNum>39 && buiNum<=50){
                    
                    var neofut1 = new BABYLON.StandardMaterial("neofut1", scene);
                    neofut1.diffuseTexture = new BABYLON.Texture("./buildings/neofut1.png", scene);
                    neofut1.diffuseTexture.hasAlpha = true;
                    neofut1.backFaceCulling = false;
                    neofut1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,20); i++) {
                      var planeneofut1 = BABYLON.MeshBuilder.CreatePlane("planeneofut1", { width: 11.88, height: 40 }, scene);
                      planeneofut1.material = neofut1;
                      planeneofut1.width = 11.88;
                      planeneofut1.height = 40;
                      planeneofut1.position.x = fxrand() * 300 - 150;
                      planeneofut1.position.z = fxrand() * 300 - 150;
                      planeneofut1.position.y = 20;
                    if (Math.sqrt(Math.pow(planeneofut1.position.x, 2) + Math.pow(planeneofut1.position.z, 2)) < 60)
                    {planeneofut1.dispose();}
                    if (neofut1.flip) {
                      planeneofut1.scaling.x *= -1;
                    }
                    }
 
                     var neofut2 = new BABYLON.StandardMaterial("neofut2", scene);
                    neofut2.diffuseTexture = new BABYLON.Texture("./buildings/neofut2.png", scene);
                    neofut2.diffuseTexture.hasAlpha = true;
                    neofut2.backFaceCulling = false;
                    neofut2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,20); i++) {
                      var planeneofut2 = BABYLON.MeshBuilder.CreatePlane("planeneofut2", { width: 16.45, height: 60 }, scene);
                      planeneofut2.material = neofut2;
                      planeneofut2.width = 16.45;
                      planeneofut2.height = 60;
                      planeneofut2.position.x = fxrand() * 300 - 150;
                      planeneofut2.position.z = fxrand() * 300 - 150;
                      planeneofut2.position.y = 30;
                    if (Math.sqrt(Math.pow(planeneofut2.position.x, 2) + Math.pow(planeneofut2.position.z, 2)) < 80)
                    {planeneofut2.dispose();}
                    if (neofut2.flip) {
                      planeneofut2.scaling.x *= -1;
                    }
                    }
                    
                    var neofut3 = new BABYLON.StandardMaterial("neofut3", scene);
                    neofut3.diffuseTexture = new BABYLON.Texture("./buildings/neofut3.png", scene);
                    neofut3.diffuseTexture.hasAlpha = true;
                    neofut3.backFaceCulling = false;
                    neofut3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,16); i++) {
                      var planeneofut3 = BABYLON.MeshBuilder.CreatePlane("planeneofut3", { width: 23.1, height: 70 }, scene);
                      planeneofut3.material = neofut3;
                      planeneofut3.width = 23.1;
                      planeneofut3.height = 70;
                      planeneofut3.position.x = fxrand() * 300 - 150;
                      planeneofut3.position.z = fxrand() * 300 - 150;
                      planeneofut3.position.y = 35;
                    if (Math.sqrt(Math.pow(planeneofut3.position.x, 2) + Math.pow(planeneofut3.position.z, 2)) < 90)
                    {planeneofut3.dispose();}
                    if (neofut3.flip) {
                      planeneofut3.scaling.x *= -1;
                    }
                    }
                    
                    var neofut4 = new BABYLON.StandardMaterial("neofut4", scene);
                    neofut4.diffuseTexture = new BABYLON.Texture("./buildings/neofut4.png", scene);
                    neofut4.diffuseTexture.hasAlpha = true;
                    neofut4.backFaceCulling = false;
                    neofut4.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,24); i++) {
                      var planeneofut4 = BABYLON.MeshBuilder.CreatePlane("planeneofut4", { width: 12.22, height: 40 }, scene);
                      planeneofut4.material = neofut4;
                      planeneofut4.width = 12.22;
                      planeneofut4.height = 40;
                      planeneofut4.position.x = fxrand() * 300 - 150;
                      planeneofut4.position.z = fxrand() * 300 - 150;
                      planeneofut4.position.y = 20;
                    if (Math.sqrt(Math.pow(planeneofut4.position.x, 2) + Math.pow(planeneofut4.position.z, 2)) < 60)
                    {planeneofut4.dispose();}
                    if (neofut4.flip) {
                      planeneofut4.scaling.x *= -1;
                    }
                    }
                    
                    var neofut5 = new BABYLON.StandardMaterial("neofut5", scene);
                    neofut5.diffuseTexture = new BABYLON.Texture("./buildings/neofut5.png", scene);
                    neofut5.diffuseTexture.hasAlpha = true;
                    neofut5.backFaceCulling = false;
                    neofut5.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,20); i++) {
                      var planeneofut5 = BABYLON.MeshBuilder.CreatePlane("planeneofut5", { width: 14.58, height: 46 }, scene);
                      planeneofut5.material = neofut5;
                      planeneofut5.width = 14.58;
                      planeneofut5.height = 46;
                      planeneofut5.position.x = fxrand() * 300 - 150;
                      planeneofut5.position.z = fxrand() * 300 - 150;
                      planeneofut5.position.y = 23;
                    if (Math.sqrt(Math.pow(planeneofut5.position.x, 2) + Math.pow(planeneofut5.position.z, 2)) < 60)
                    {planeneofut5.dispose();}
                    if (neofut5.flip) {
                      planeneofut5.scaling.x *= -1;
                    }
                    }
                    
                    var neofut6 = new BABYLON.StandardMaterial("neofut6", scene);
                    neofut6.diffuseTexture = new BABYLON.Texture("./buildings/neofut6.png", scene);
                    neofut6.diffuseTexture.hasAlpha = true;
                    neofut6.backFaceCulling = false;
                    neofut6.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,20); i++) {
                      var planeneofut6 = BABYLON.MeshBuilder.CreatePlane("planeneofut6", { width: 13.32, height: 44 }, scene);
                      planeneofut6.material = neofut6;
                      planeneofut6.width = 13.32;
                      planeneofut6.height = 44;
                      planeneofut6.position.x = fxrand() * 300 - 150;
                      planeneofut6.position.z = fxrand() * 300 - 150;
                      planeneofut6.position.y = 22;
                    if (Math.sqrt(Math.pow(planeneofut6.position.x, 2) + Math.pow(planeneofut6.position.z, 2)) < 60)
                    {planeneofut6.dispose();}
                    if (neofut6.flip) {
                      planeneofut6.scaling.x *= -1;
                    }
                    }
                    
                    var neofut7 = new BABYLON.StandardMaterial("neofut7", scene);
                    neofut7.diffuseTexture = new BABYLON.Texture("./buildings/neofut7.png", scene);
                    neofut7.diffuseTexture.hasAlpha = true;
                    neofut7.backFaceCulling = false;
                    neofut7.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,22); i++) {
                      var planeneofut7 = BABYLON.MeshBuilder.CreatePlane("planeneofut7", { width: 13.95, height: 44 }, scene);
                      planeneofut7.material = neofut7;
                      planeneofut7.width = 13.95;
                      planeneofut7.height = 44;
                      planeneofut7.position.x = fxrand() * 300 - 150;
                      planeneofut7.position.z = fxrand() * 300 - 150;
                      planeneofut7.position.y = 22;
                    if (Math.sqrt(Math.pow(planeneofut7.position.x, 2) + Math.pow(planeneofut7.position.z, 2)) < 60)
                    {planeneofut7.dispose();}
                    if (neofut7.flip) {
                      planeneofut7.scaling.x *= -1;
                    }
                    }
                    
                    var neofut8 = new BABYLON.StandardMaterial("neofut8", scene);
                    neofut8.diffuseTexture = new BABYLON.Texture("./buildings/neofut8.png", scene);
                    neofut8.diffuseTexture.hasAlpha = true;
                    neofut8.backFaceCulling = false;
                    neofut8.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,20); i++) {
                      var planeneofut8 = BABYLON.MeshBuilder.CreatePlane("planeneofut8", { width: 16.07, height: 50 }, scene);
                      planeneofut8.material = neofut8;
                      planeneofut8.width = 16.07;
                      planeneofut8.height = 50;
                      planeneofut8.position.x = fxrand() * 300 - 150;
                      planeneofut8.position.z = fxrand() * 300 - 150;
                      planeneofut8.position.y = 25;
                    if (Math.sqrt(Math.pow(planeneofut8.position.x, 2) + Math.pow(planeneofut8.position.z, 2)) < 70)
                    {planeneofut8.dispose();}
                    if (neofut8.flip) {
                      planeneofut8.scaling.x *= -1;
                    }
                    }
                    
                    var neofut9 = new BABYLON.StandardMaterial("neofut9", scene);
                    neofut9.diffuseTexture = new BABYLON.Texture("./buildings/neofut9.png", scene);
                    neofut9.diffuseTexture.hasAlpha = true;
                    neofut9.backFaceCulling = false;
                    neofut9.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,20); i++) {
                      var planeneofut9 = BABYLON.MeshBuilder.CreatePlane("planeneofut9", { width: 12.88, height: 44 }, scene);
                      planeneofut9.material = neofut9;
                      planeneofut9.width = 12.88;
                      planeneofut9.height = 44;
                      planeneofut9.position.x = fxrand() * 300 - 150;
                      planeneofut9.position.z = fxrand() * 300 - 150;
                      planeneofut9.position.y = 22;
                    if (Math.sqrt(Math.pow(planeneofut9.position.x, 2) + Math.pow(planeneofut9.position.z, 2)) < 60)
                    {planeneofut9.dispose();}
                    if (neofut9.flip) {
                      planeneofut9.scaling.x *= -1;
                    }
                    }
                    
                    var neofut10 = new BABYLON.StandardMaterial("neofut10", scene);
                    neofut10.diffuseTexture = new BABYLON.Texture("./buildings/neofut10.png", scene);
                    neofut10.diffuseTexture.hasAlpha = true;
                    neofut10.backFaceCulling = false;
                    neofut10.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,20); i++) {
                      var planeneofut10 = BABYLON.MeshBuilder.CreatePlane("planeneofut10", { width: 10.81, height: 44 }, scene);
                      planeneofut10.material = neofut10;
                      planeneofut10.width = 10.81;
                      planeneofut10.height = 44;
                      planeneofut10.position.x = fxrand() * 300 - 150;
                      planeneofut10.position.z = fxrand() * 300 - 150;
                      planeneofut10.position.y = 22;
                    if (Math.sqrt(Math.pow(planeneofut10.position.x, 2) + Math.pow(planeneofut10.position.z, 2)) < 60)
                    {planeneofut10.dispose();}
                    if (neofut10.flip) {
                      planeneofut10.scaling.x *= -1;
                    }
                    }
                    
                    var neofut11 = new BABYLON.StandardMaterial("neofut11", scene);
                    neofut11.diffuseTexture = new BABYLON.Texture("./buildings/neofut11.png", scene);
                    neofut11.diffuseTexture.hasAlpha = true;
                    neofut11.backFaceCulling = false;
                    neofut11.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,20); i++) {
                      var planeneofut11 = BABYLON.MeshBuilder.CreatePlane("planeneofut11", { width: 12.63, height: 44 }, scene);
                      planeneofut11.material = neofut11;
                      planeneofut11.width = 12.63;
                      planeneofut11.height = 44;
                      planeneofut11.position.x = fxrand() * 300 - 150;
                      planeneofut11.position.z = fxrand() * 300 - 150;
                      planeneofut11.position.y = 22;
                    if (Math.sqrt(Math.pow(planeneofut11.position.x, 2) + Math.pow(planeneofut11.position.z, 2)) < 60)
                    {planeneofut11.dispose();}
                    if (neofut11.flip) {
                      planeneofut11.scaling.x *= -1;
                    }
                    }
                    
                    var neofut12 = new BABYLON.StandardMaterial("neofut12", scene);
                    neofut12.diffuseTexture = new BABYLON.Texture("./buildings/neofut12.png", scene);
                    neofut12.diffuseTexture.hasAlpha = true;
                    neofut12.backFaceCulling = false;
                    neofut12.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,20); i++) {
                      var planeneofut12 = BABYLON.MeshBuilder.CreatePlane("planeneofut12", { width: 15.37, height: 46 }, scene);
                      planeneofut12.material = neofut12;
                      planeneofut12.width = 15.37;
                      planeneofut12.height = 46;
                      planeneofut12.position.x = fxrand() * 300 - 150;
                      planeneofut12.position.z = fxrand() * 300 - 150;
                      planeneofut12.position.y = 23;
                    if (Math.sqrt(Math.pow(planeneofut12.position.x, 2) + Math.pow(planeneofut12.position.z, 2)) < 60)
                    {planeneofut12.dispose();}
                    if (neofut12.flip) {
                      planeneofut12.scaling.x *= -1;
                    }
                    }
                    
                    var neofut13 = new BABYLON.StandardMaterial("neofut13", scene);
                    neofut13.diffuseTexture = new BABYLON.Texture("./buildings/neofut13.png", scene);
                    neofut13.diffuseTexture.hasAlpha = true;
                    neofut13.backFaceCulling = false;
                    neofut13.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,22); i++) {
                      var planeneofut13 = BABYLON.MeshBuilder.CreatePlane("planeneofut13", { width: 14.98, height: 46 }, scene);
                      planeneofut13.material = neofut13;
                      planeneofut13.width = 14.98;
                      planeneofut13.height = 46;
                      planeneofut13.position.x = fxrand() * 300 - 150;
                      planeneofut13.position.z = fxrand() * 300 - 150;
                      planeneofut13.position.y = 23;
                    if (Math.sqrt(Math.pow(planeneofut13.position.x, 2) + Math.pow(planeneofut13.position.z, 2)) < 60)
                    {planeneofut13.dispose();}
                    if (neofut13.flip) {
                      planeneofut13.scaling.x *= -1;
                    }
                    }
                    
                    var neofut14 = new BABYLON.StandardMaterial("neofut14", scene);
                    neofut14.diffuseTexture = new BABYLON.Texture("./buildings/neofut14.png", scene);
                    neofut14.diffuseTexture.hasAlpha = true;
                    neofut14.backFaceCulling = false;
                    neofut14.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,24); i++) {
                      var planeneofut14 = BABYLON.MeshBuilder.CreatePlane("planeneofut14", { width: 16.78, height: 50 }, scene);
                      planeneofut14.material = neofut14;
                      planeneofut14.width = 16.78;
                      planeneofut14.height = 50;
                      planeneofut14.position.x = fxrand() * 300 - 150;
                      planeneofut14.position.z = fxrand() * 300 - 150;
                      planeneofut14.position.y = 25;
                    if (Math.sqrt(Math.pow(planeneofut14.position.x, 2) + Math.pow(planeneofut14.position.z, 2)) < 70)
                    {planeneofut14.dispose();}
                    if (neofut14.flip) {
                      planeneofut14.scaling.x *= -1;
                    }
                    }
 
                    buiVar="Neo-futurism";
                    }
                    
                    
                    //Houses
                    
                    var houNum;
                    var houVar;
   
                    houNum=Math.round(genR(0,50));
   
                    if(houNum<=14){
                    
                    var hA = new BABYLON.StandardMaterial("houseA", scene);
                    hA.diffuseTexture = new BABYLON.Texture("./houses/houseA1.png", scene);
                    hA.diffuseTexture.hasAlpha = true;
                    hA.backFaceCulling = false;
                    hA.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(9,24); i++) {
                      var planehA = BABYLON.MeshBuilder.CreatePlane("planehA", { width: 10, height: 16 }, scene);
                      planehA.material = hA;
                      planehA.width = 10;
                      planehA.height = 16;
                      planehA.position.x = fxrand() * 200 - 100;
                      planehA.position.z = fxrand() * 200 - 100;
                      planehA.position.y = 8;
                    if (Math.sqrt(Math.pow(planehA.position.x, 2) + Math.pow(planehA.position.z, 2)) < 40)
                    {planehA.dispose();}
                    if (hA.flip) {
                      planehA.scaling.x *= -1;
                    }
                    }
                    
                    var hB1 = new BABYLON.StandardMaterial("houseB1", scene);
                    hB1.diffuseTexture = new BABYLON.Texture("./houses/houseB1.png", scene);
                    hB1.diffuseTexture.hasAlpha = true;
                    hB1.backFaceCulling = false;
                    hB1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(9,24); i++) {
                      var planehB1 = BABYLON.MeshBuilder.CreatePlane("planehB1", { width: 10, height: 16 }, scene);
                      planehB1.material = hB1;
                      planehB1.width = 10;
                      planehB1.height = 16;
                      planehB1.position.x = fxrand() * 200 - 100;
                      planehB1.position.z = fxrand() * 200 - 100;
                      planehB1.position.y = 8;
                    if (Math.sqrt(Math.pow(planehB1.position.x, 2) + Math.pow(planehB1.position.z, 2)) < 38)
                    {planehB1.dispose();}
                    if (hB1.flip) {
                      planehB1.scaling.x *= -1;
                    }
                    }
                    
                    var hB2 = new BABYLON.StandardMaterial("houseB2", scene);
                    hB2.diffuseTexture = new BABYLON.Texture("./houses/houseB2.png", scene);
                    hB2.diffuseTexture.hasAlpha = true;
                    hB2.backFaceCulling = false;
                    hB2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(9,24); i++) {
                      var planehB2 = BABYLON.MeshBuilder.CreatePlane("planehB2", { width: 10, height: 16 }, scene);
                      planehB2.material = hB2;
                      planehB2.width = 10;
                      planehB2.height = 16;
                      planehB2.position.x = fxrand() * 200 - 100;
                      planehB2.position.z = fxrand() * 200 - 100;
                      planehB2.position.y = 8;
                    if (Math.sqrt(Math.pow(planehB2.position.x, 2) + Math.pow(planehB2.position.z, 2)) < 40)
                    {planehB2.dispose();}
                    if (hB2.flip) {
                      planehB2.scaling.x *= -1;
                    }
                    }
                    
                    var hB3 = new BABYLON.StandardMaterial("houseB3", scene);
                    hB3.diffuseTexture = new BABYLON.Texture("./houses/houseB3.png", scene);
                    hB3.diffuseTexture.hasAlpha = true;
                    hB3.backFaceCulling = false;
                    hB3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(9,24); i++) {
                      var planehB3 = BABYLON.MeshBuilder.CreatePlane("planehB3", { width: 10, height: 16 }, scene);
                      planehB3.material = hB3;
                      planehB3.width = 10;
                      planehB3.height = 16;
                      planehB3.position.x = fxrand() * 200 - 100;
                      planehB3.position.z = fxrand() * 200 - 100;
                      planehB3.position.y = 8;
                    if (Math.sqrt(Math.pow(planehB3.position.x, 2) + Math.pow(planehB3.position.z, 2)) < 35)
                    {planehB3.dispose();}
                    if (hB3.flip) {
                      planehB3.scaling.x *= -1;
                    }
                    }
                    
                    var hC1 = new BABYLON.StandardMaterial("houseC1", scene);
                    hC1.diffuseTexture = new BABYLON.Texture("./houses/houseC1.png", scene);
                    hC1.diffuseTexture.hasAlpha = true;
                    hC1.backFaceCulling = false;
                    hC1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(9,22); i++) {
                      var planehC1 = BABYLON.MeshBuilder.CreatePlane("planehC1", { width: 10, height: 16 }, scene);
                      planehC1.material = hC1;
                      planehC1.width = 10;
                      planehC1.height = 16;
                      planehC1.position.x = fxrand() * 200 - 100;
                      planehC1.position.z = fxrand() * 200 - 100;
                      planehC1.position.y = 8;
                    if (Math.sqrt(Math.pow(planehC1.position.x, 2) + Math.pow(planehC1.position.z, 2)) < 35)
                    {planehC1.dispose();}
                    if (hC1.flip) {
                      planehC1.scaling.x *= -1;
                    }
                    }
                    
                    var hC2 = new BABYLON.StandardMaterial("houseC2", scene);
                    hC2.diffuseTexture = new BABYLON.Texture("./houses/houseC2.png", scene);
                    hC2.diffuseTexture.hasAlpha = true;
                    hC2.backFaceCulling = false;
                    hC2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planehC2 = BABYLON.MeshBuilder.CreatePlane("planehC2", { width: 10, height: 16 }, scene);
                      planehC2.material = hC2;
                      planehC2.width = 10;
                      planehC2.height = 16;
                      planehC2.position.x = fxrand() * 200 - 100;
                      planehC2.position.z = fxrand() * 200 - 100;
                      planehC2.position.y = 8;
                    if (Math.sqrt(Math.pow(planehC2.position.x, 2) + Math.pow(planehC2.position.z, 2)) < 38)
                    {planehC2.dispose();}
                    if (hC2.flip) {
                      planehC2.scaling.x *= -1;
                    }
                    }
                    
                    var hD2 = new BABYLON.StandardMaterial("houseD2", scene);
                    hD2.diffuseTexture = new BABYLON.Texture("./houses/houseD2.png", scene);
                    hD2.diffuseTexture.hasAlpha = true;
                    hD2.backFaceCulling = false;
                    hD2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planehD2 = BABYLON.MeshBuilder.CreatePlane("planehD2", { width: 10, height: 16 }, scene);
                      planehD2.material = hD2;
                      planehD2.width = 10;
                      planehD2.height = 16;
                      planehD2.position.x = fxrand() * 200 - 100;
                      planehD2.position.z = fxrand() * 200 - 100;
                      planehD2.position.y = 8;
                    if (Math.sqrt(Math.pow(planehD2.position.x, 2) + Math.pow(planehD2.position.z, 2)) < 38)
                    {planehD2.dispose();}
                    if (hD2.flip) {
                      planehD2.scaling.x *= -1;
                    }
                    }
                    
                    var hD3 = new BABYLON.StandardMaterial("houseD3", scene);
                    hD3.diffuseTexture = new BABYLON.Texture("./houses/houseD3.png", scene);
                    hD3.diffuseTexture.hasAlpha = true;
                    hD3.backFaceCulling = false;
                    hD3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planehD3 = BABYLON.MeshBuilder.CreatePlane("planehD3", { width: 10, height: 16 }, scene);
                      planehD3.material = hD3;
                      planehD3.width = 10;
                      planehD3.height = 16;
                      planehD3.position.x = fxrand() * 200 - 100;
                      planehD3.position.z = fxrand() * 200 - 100;
                      planehD3.position.y = 8;
                    if (Math.sqrt(Math.pow(planehD3.position.x, 2) + Math.pow(planehD3.position.z, 2)) < 38)
                    {planehD3.dispose();}
                    if (hD3.flip) {
                      planehD3.scaling.x *= -1;
                    }
                    }
                    
                    var hE1 = new BABYLON.StandardMaterial("houseE1", scene);
                    hE1.diffuseTexture = new BABYLON.Texture("./houses/houseE1.png", scene);
                    hE1.diffuseTexture.hasAlpha = true;
                    hE1.backFaceCulling = false;
                    hE1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planehE1 = BABYLON.MeshBuilder.CreatePlane("planehE1", { width: 10, height: 16 }, scene);
                      planehE1.material = hE1;
                      planehE1.width = 10;
                      planehE1.height = 16;
                      planehE1.position.x = fxrand() * 200 - 100;
                      planehE1.position.z = fxrand() * 200 - 100;
                      planehE1.position.y = 8;
                    if (Math.sqrt(Math.pow(planehE1.position.x, 2) + Math.pow(planehE1.position.z, 2)) < 40)
                    {planehE1.dispose();}
                    if (hE1.flip) {
                      planehE1.scaling.x *= -1;
                    }
                    }
                    
                    var hE2 = new BABYLON.StandardMaterial("houseE2", scene);
                    hE2.diffuseTexture = new BABYLON.Texture("./houses/houseE2.png", scene);
                    hE2.diffuseTexture.hasAlpha = true;
                    hE2.backFaceCulling = false;
                    hE2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planehE2 = BABYLON.MeshBuilder.CreatePlane("planehE2", { width: 10, height: 16 }, scene);
                      planehE2.material = hE2;
                      planehE2.width = 10;
                      planehE2.height = 16;
                      planehE2.position.x = fxrand() * 200 - 100;
                      planehE2.position.z = fxrand() * 200 - 100;
                      planehE2.position.y = 8;
                    if (Math.sqrt(Math.pow(planehE2.position.x, 2) + Math.pow(planehE2.position.z, 2)) < 40)
                    {planehE2.dispose();}
                    if (hE2.flip) {
                      planehE2.scaling.x *= -1;
                    }
                    }
                    
                    var hE3 = new BABYLON.StandardMaterial("houseE3", scene);
                    hE3.diffuseTexture = new BABYLON.Texture("./houses/houseE3.png", scene);
                    hE3.diffuseTexture.hasAlpha = true;
                    hE3.backFaceCulling = false;
                    hE3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planehE3 = BABYLON.MeshBuilder.CreatePlane("planehE3", { width: 10, height: 16 }, scene);
                      planehE3.material = hE3;
                      planehE3.width = 10;
                      planehE3.height = 16;
                      planehE3.position.x = fxrand() * 200 - 100;
                      planehE3.position.z = fxrand() * 200 - 100;
                      planehE3.position.y = 8;
                    if (Math.sqrt(Math.pow(planehE3.position.x, 2) + Math.pow(planehE3.position.z, 2)) < 40)
                    {planehE3.dispose();}
                    if (hE3.flip) {
                      planehE3.scaling.x *= -1;
                    }
                    }
                    
                    var hF1 = new BABYLON.StandardMaterial("houseF1", scene);
                    hF1.diffuseTexture = new BABYLON.Texture("./houses/houseF1.png", scene);
                    hF1.diffuseTexture.hasAlpha = true;
                    hF1.backFaceCulling = false;
                    hF1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planehF1 = BABYLON.MeshBuilder.CreatePlane("planehF1", { width: 10, height: 16 }, scene);
                      planehF1.material = hF1;
                      planehF1.width = 10;
                      planehF1.height = 16;
                      planehF1.position.x = fxrand() * 200 - 100;
                      planehF1.position.z = fxrand() * 200 - 100;
                      planehF1.position.y = 8;
                    if (Math.sqrt(Math.pow(planehF1.position.x, 2) + Math.pow(planehF1.position.z, 2)) < 40)
                    {planehF1.dispose();}
                    if (hF1.flip) {
                      planehF1.scaling.x *= -1;
                    }
                    }
                    
                    var hF2 = new BABYLON.StandardMaterial("houseF2", scene);
                    hF2.diffuseTexture = new BABYLON.Texture("./houses/houseF2.png", scene);
                    hF2.diffuseTexture.hasAlpha = true;
                    hF2.backFaceCulling = false;
                    hF2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planehF2 = BABYLON.MeshBuilder.CreatePlane("planehF2", { width: 10, height: 16 }, scene);
                      planehF2.material = hF2;
                      planehF2.width = 10;
                      planehF2.height = 16;
                      planehF2.position.x = fxrand() * 200 - 100;
                      planehF2.position.z = fxrand() * 200 - 100;
                      planehF2.position.y = 8;
                    if (Math.sqrt(Math.pow(planehF2.position.x, 2) + Math.pow(planehF2.position.z, 2)) < 40)
                    {planehF2.dispose();}
                    if (hF2.flip) {
                      planehF2.scaling.x *= -1;
                    }
                    }
                    
                    var hF3 = new BABYLON.StandardMaterial("houseF3", scene);
                    hF3.diffuseTexture = new BABYLON.Texture("./houses/houseF3.png", scene);
                    hF3.diffuseTexture.hasAlpha = true;
                    hF3.backFaceCulling = false;
                    hF3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planehF3 = BABYLON.MeshBuilder.CreatePlane("planehF3", { width: 10, height: 16 }, scene);
                      planehF3.material = hF3;
                      planehF3.width = 10;
                      planehF3.height = 16;
                      planehF3.position.x = fxrand() * 200 - 100;
                      planehF3.position.z = fxrand() * 200 - 100;
                      planehF3.position.y = 8;
                    if (Math.sqrt(Math.pow(planehF3.position.x, 2) + Math.pow(planehF3.position.z, 2)) < 40)
                    {planehF3.dispose();}
                    if (hF3.flip) {
                      planehF3.scaling.x *= -1;
                    }
                    }
                    
                    houVar="Colorful";
                    }
                    
                    
                    if(houNum>14 && houNum<=27){
                    
                    var ken1 = new BABYLON.StandardMaterial("ken1", scene);
                    ken1.diffuseTexture = new BABYLON.Texture("./houses/japouse1.png", scene);
                    ken1.diffuseTexture.hasAlpha = true;
                    ken1.backFaceCulling = false;
                    ken1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(9,21); i++) {
                      var planeken1 = BABYLON.MeshBuilder.CreatePlane("planeken1", { width: 11.53, height: 12 }, scene);
                      planeken1.material = ken1;
                      planeken1.width = 11.53;
                      planeken1.height = 12;
                      planeken1.position.x = fxrand() * 200 - 100;
                      planeken1.position.z = fxrand() * 200 - 100;
                      planeken1.position.y = 6;
                    if (Math.sqrt(Math.pow(planeken1.position.x, 2) + Math.pow(planeken1.position.z, 2)) < 35)
                    {planeken1.dispose();}
                    if (ken1.flip) {
                      planeken1.scaling.x *= -1;
                    }
                    }
                    
                    var ken2 = new BABYLON.StandardMaterial("ken2", scene);
                    ken2.diffuseTexture = new BABYLON.Texture("./houses/japouse2.png", scene);
                    ken2.diffuseTexture.hasAlpha = true;
                    ken2.backFaceCulling = false;
                    ken2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(9,21); i++) {
                      var planeken2 = BABYLON.MeshBuilder.CreatePlane("planeken2", { width: 11.81, height: 12 }, scene);
                      planeken2.material = ken2;
                      planeken2.width = 11.81;
                      planeken2.height = 12;
                      planeken2.position.x = fxrand() * 200 - 100;
                      planeken2.position.z = fxrand() * 200 - 100;
                      planeken2.position.y = 6;
                    if (Math.sqrt(Math.pow(planeken2.position.x, 2) + Math.pow(planeken2.position.z, 2)) < 35)
                    {planeken2.dispose();}
                    if (ken2.flip) {
                      planeken2.scaling.x *= -1;
                    }
                    }
                    
                    var ken3 = new BABYLON.StandardMaterial("ken3", scene);
                    ken3.diffuseTexture = new BABYLON.Texture("./houses/japouse3.png", scene);
                    ken3.diffuseTexture.hasAlpha = true;
                    ken3.backFaceCulling = false;
                    ken3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planeken3 = BABYLON.MeshBuilder.CreatePlane("planeken3", { width: 10, height: 12 }, scene);
                      planeken3.material = ken3;
                      planeken3.width = 10;
                      planeken3.height = 12;
                      planeken3.position.x = fxrand() * 200 - 100;
                      planeken3.position.z = fxrand() * 200 - 100;
                      planeken3.position.y = 6;
                    if (Math.sqrt(Math.pow(planeken3.position.x, 2) + Math.pow(planeken3.position.z, 2)) < 37)
                    {planeken3.dispose();}
                    if (ken3.flip) {
                      planeken3.scaling.x *= -1;
                    }
                    }
                    
                    var ken4 = new BABYLON.StandardMaterial("ken4", scene);
                    ken4.diffuseTexture = new BABYLON.Texture("./houses/japouse4.png", scene);
                    ken4.diffuseTexture.hasAlpha = true;
                    ken4.backFaceCulling = false;
                    ken4.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planeken4 = BABYLON.MeshBuilder.CreatePlane("planeken4", { width: 10.56, height: 12 }, scene);
                      planeken4.material = ken4;
                      planeken4.width = 10.56;
                      planeken4.height = 12;
                      planeken4.position.x = fxrand() * 200 - 100;
                      planeken4.position.z = fxrand() * 200 - 100;
                      planeken4.position.y = 6;
                    if (Math.sqrt(Math.pow(planeken4.position.x, 2) + Math.pow(planeken4.position.z, 2)) < 37)
                    {planeken4.dispose();}
                    if (ken4.flip) {
                      planeken4.scaling.x *= -1;
                    }
                    }
                    
                    var ken5 = new BABYLON.StandardMaterial("ken5", scene);
                    ken5.diffuseTexture = new BABYLON.Texture("./houses/japouse5.png", scene);
                    ken5.diffuseTexture.hasAlpha = true;
                    ken5.backFaceCulling = false;
                    ken5.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planeken5 = BABYLON.MeshBuilder.CreatePlane("planeken5", { width: 11.41, height: 12 }, scene);
                      planeken5.material = ken5;
                      planeken5.width = 11.41;
                      planeken5.height = 12;
                      planeken5.position.x = fxrand() * 200 - 100;
                      planeken5.position.z = fxrand() * 200 - 100;
                      planeken5.position.y = 6;
                    if (Math.sqrt(Math.pow(planeken5.position.x, 2) + Math.pow(planeken5.position.z, 2)) < 37)
                    {planeken5.dispose();}
                    if (ken5.flip) {
                      planeken5.scaling.x *= -1;
                    }
                    }
                    
                    var ken6 = new BABYLON.StandardMaterial("ken6", scene);
                    ken6.diffuseTexture = new BABYLON.Texture("./houses/japouse6.png", scene);
                    ken6.diffuseTexture.hasAlpha = true;
                    ken6.backFaceCulling = false;
                    ken6.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planeken6 = BABYLON.MeshBuilder.CreatePlane("planeken6", { width: 11.72, height: 12 }, scene);
                      planeken6.material = ken6;
                      planeken6.width = 11.72;
                      planeken6.height = 12;
                      planeken6.position.x = fxrand() * 200 - 100;
                      planeken6.position.z = fxrand() * 200 - 100;
                      planeken6.position.y = 6;
                    if (Math.sqrt(Math.pow(planeken6.position.x, 2) + Math.pow(planeken6.position.z, 2)) < 37)
                    {planeken6.dispose();}
                    if (ken6.flip) {
                      planeken6.scaling.x *= -1;
                    }
                    }
                    
                    var ken7 = new BABYLON.StandardMaterial("ken7", scene);
                    ken7.diffuseTexture = new BABYLON.Texture("./houses/japouse7.png", scene);
                    ken7.diffuseTexture.hasAlpha = true;
                    ken7.backFaceCulling = false;
                    ken7.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planeken7 = BABYLON.MeshBuilder.CreatePlane("planeken7", { width: 9.85, height: 12 }, scene);
                      planeken7.material = ken7;
                      planeken7.width = 9.85;
                      planeken7.height = 12;
                      planeken7.position.x = fxrand() * 200 - 100;
                      planeken7.position.z = fxrand() * 200 - 100;
                      planeken7.position.y = 6;
                    if (Math.sqrt(Math.pow(planeken7.position.x, 2) + Math.pow(planeken7.position.z, 2)) < 37)
                    {planeken7.dispose();}
                    if (ken7.flip) {
                      planeken7.scaling.x *= -1;
                    }
                    }
                    
                    var ken8 = new BABYLON.StandardMaterial("ken8", scene);
                    ken8.diffuseTexture = new BABYLON.Texture("./houses/japouse8.png", scene);
                    ken8.diffuseTexture.hasAlpha = true;
                    ken8.backFaceCulling = false;
                    ken8.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planeken8 = BABYLON.MeshBuilder.CreatePlane("planeken8", { width: 10.36, height: 14 }, scene);
                      planeken8.material = ken8;
                      planeken8.width = 10.36;
                      planeken8.height = 14;
                      planeken8.position.x = fxrand() * 200 - 100;
                      planeken8.position.z = fxrand() * 200 - 100;
                      planeken8.position.y = 7;
                    if (Math.sqrt(Math.pow(planeken8.position.x, 2) + Math.pow(planeken8.position.z, 2)) < 40)
                    {planeken8.dispose();}
                    if (ken8.flip) {
                      planeken8.scaling.x *= -1;
                    }
                    }
                    
                    var ken9 = new BABYLON.StandardMaterial("ken9", scene);
                    ken9.diffuseTexture = new BABYLON.Texture("./houses/japouse9.png", scene);
                    ken9.diffuseTexture.hasAlpha = true;
                    ken9.backFaceCulling = false;
                    ken9.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planeken9 = BABYLON.MeshBuilder.CreatePlane("planeken9", { width: 10, height: 14 }, scene);
                      planeken9.material = ken9;
                      planeken9.width = 10;
                      planeken9.height = 14;
                      planeken9.position.x = fxrand() * 200 - 100;
                      planeken9.position.z = fxrand() * 200 - 100;
                      planeken9.position.y = 7;
                    if (Math.sqrt(Math.pow(planeken9.position.x, 2) + Math.pow(planeken9.position.z, 2)) < 40)
                    {planeken9.dispose();}
                    if (ken9.flip) {
                      planeken9.scaling.x *= -1;
                    }
                    }
                    
                    var ken10 = new BABYLON.StandardMaterial("ken10", scene);
                    ken10.diffuseTexture = new BABYLON.Texture("./houses/japouse10.png", scene);
                    ken10.diffuseTexture.hasAlpha = true;
                    ken10.backFaceCulling = false;
                    ken10.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planeken10 = BABYLON.MeshBuilder.CreatePlane("planeken10", { width: 10, height: 14 }, scene);
                      planeken10.material = ken10;
                      planeken10.width = 10;
                      planeken10.height = 14;
                      planeken10.position.x = fxrand() * 200 - 100;
                      planeken10.position.z = fxrand() * 200 - 100;
                      planeken10.position.y = 7;
                    if (Math.sqrt(Math.pow(planeken10.position.x, 2) + Math.pow(planeken10.position.z, 2)) < 40)
                    {planeken10.dispose();}
                    if (ken10.flip) {
                      planeken10.scaling.x *= -1;
                    }
                    }
                    
                    var ken11 = new BABYLON.StandardMaterial("ken11", scene);
                    ken11.diffuseTexture = new BABYLON.Texture("./houses/japouse11.png", scene);
                    ken11.diffuseTexture.hasAlpha = true;
                    ken11.backFaceCulling = false;
                    ken11.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planeken11 = BABYLON.MeshBuilder.CreatePlane("planeken11", { width: 11.52, height: 14 }, scene);
                      planeken11.material = ken11;
                      planeken11.width = 11.52;
                      planeken11.height = 14;
                      planeken11.position.x = fxrand() * 200 - 100;
                      planeken11.position.z = fxrand() * 200 - 100;
                      planeken11.position.y = 7;
                    if (Math.sqrt(Math.pow(planeken11.position.x, 2) + Math.pow(planeken11.position.z, 2)) < 40)
                    {planeken11.dispose();}
                    if (ken11.flip) {
                      planeken11.scaling.x *= -1;
                    }
                    }
                    
                    var ken12 = new BABYLON.StandardMaterial("ken12", scene);
                    ken12.diffuseTexture = new BABYLON.Texture("./houses/japouse12.png", scene);
                    ken12.diffuseTexture.hasAlpha = true;
                    ken12.backFaceCulling = false;
                    ken12.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planeken12 = BABYLON.MeshBuilder.CreatePlane("planeken12", { width: 9.66, height: 14 }, scene);
                      planeken12.material = ken12;
                      planeken12.width = 9.66;
                      planeken12.height = 14;
                      planeken12.position.x = fxrand() * 200 - 100;
                      planeken12.position.z = fxrand() * 200 - 100;
                      planeken12.position.y = 7;
                    if (Math.sqrt(Math.pow(planeken12.position.x, 2) + Math.pow(planeken12.position.z, 2)) < 40)
                    {planeken12.dispose();}
                    if (ken12.flip) {
                      planeken12.scaling.x *= -1;
                    }
                    }
                    
                    var ken13 = new BABYLON.StandardMaterial("ken13", scene);
                    ken13.diffuseTexture = new BABYLON.Texture("./houses/japouse13.png", scene);
                    ken13.diffuseTexture.hasAlpha = true;
                    ken13.backFaceCulling = false;
                    ken13.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planeken13 = BABYLON.MeshBuilder.CreatePlane("planeken13", { width: 9.8, height: 14 }, scene);
                      planeken13.material = ken13;
                      planeken13.width = 9.8;
                      planeken13.height = 14;
                      planeken13.position.x = fxrand() * 200 - 100;
                      planeken13.position.z = fxrand() * 200 - 100;
                      planeken13.position.y = 7;
                    if (Math.sqrt(Math.pow(planeken13.position.x, 2) + Math.pow(planeken13.position.z, 2)) < 40)
                    {planeken13.dispose();}
                    if (ken13.flip) {
                      planeken13.scaling.x *= -1;
                    }
                    }
                    
                    var ken14 = new BABYLON.StandardMaterial("ken14", scene);
                    ken14.diffuseTexture = new BABYLON.Texture("./houses/japouse14.png", scene);
                    ken14.diffuseTexture.hasAlpha = true;
                    ken14.backFaceCulling = false;
                    ken14.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planeken14 = BABYLON.MeshBuilder.CreatePlane("planeken14", { width: 10, height: 14 }, scene);
                      planeken14.material = ken14;
                      planeken14.width = 10;
                      planeken14.height = 14;
                      planeken14.position.x = fxrand() * 200 - 100;
                      planeken14.position.z = fxrand() * 200 - 100;
                      planeken14.position.y = 7;
                    if (Math.sqrt(Math.pow(planeken14.position.x, 2) + Math.pow(planeken14.position.z, 2)) < 40)
                    {planeken14.dispose();}
                    if (ken14.flip) {
                      planeken14.scaling.x *= -1;
                    }
                    }
                    
                    houVar="Kenchiku";
                    }
                    
                    
                    if(houNum>27 && houNum<=39){
                    
                    var bru1 = new BABYLON.StandardMaterial("bru1", scene);
                    bru1.diffuseTexture = new BABYLON.Texture("./houses/house1.png", scene);
                    bru1.diffuseTexture.hasAlpha = true;
                    bru1.backFaceCulling = false;
                    bru1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planebru1 = BABYLON.MeshBuilder.CreatePlane("planebru1", { width: 11.16, height: 20 }, scene);
                      planebru1.material = bru1;
                      planebru1.width = 11.16;
                      planebru1.height = 20;
                      planebru1.position.x = fxrand() * 200 - 100;
                      planebru1.position.z = fxrand() * 200 - 100;
                      planebru1.position.y = 10;
                    if (Math.sqrt(Math.pow(planebru1.position.x, 2) + Math.pow(planebru1.position.z, 2)) < 37)
                    {planebru1.dispose();}
                    if (bru1.flip) {
                      planebru1.scaling.x *= -1;
                    }
                    }
                    
                    var bru2 = new BABYLON.StandardMaterial("bru2", scene);
                    bru2.diffuseTexture = new BABYLON.Texture("./houses/house2.png", scene);
                    bru2.diffuseTexture.hasAlpha = true;
                    bru2.backFaceCulling = false;
                    bru2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planebru2 = BABYLON.MeshBuilder.CreatePlane("planebru2", { width: 10.76, height: 20 }, scene);
                      planebru2.material = bru2;
                      planebru2.width = 10.76;
                      planebru2.height = 20;
                      planebru2.position.x = fxrand() * 200 - 100;
                      planebru2.position.z = fxrand() * 200 - 100;
                      planebru2.position.y = 10;
                    if (Math.sqrt(Math.pow(planebru2.position.x, 2) + Math.pow(planebru2.position.z, 2)) < 37)
                    {planebru2.dispose();}
                    if (bru2.flip) {
                      planebru2.scaling.x *= -1;
                    }
                    }
                    
                    var bru3 = new BABYLON.StandardMaterial("bru3", scene);
                    bru3.diffuseTexture = new BABYLON.Texture("./houses/house3.png", scene);
                    bru3.diffuseTexture.hasAlpha = true;
                    bru3.backFaceCulling = false;
                    bru3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planebru3 = BABYLON.MeshBuilder.CreatePlane("planebru3", { width: 21.3, height: 24 }, scene);
                      planebru3.material = bru3;
                      planebru3.width = 21.3;
                      planebru3.height = 24;
                      planebru3.position.x = fxrand() * 200 - 100;
                      planebru3.position.z = fxrand() * 200 - 100;
                      planebru3.position.y = 12;
                    if (Math.sqrt(Math.pow(planebru3.position.x, 2) + Math.pow(planebru3.position.z, 2)) < 40)
                    {planebru3.dispose();}
                    if (bru3.flip) {
                      planebru3.scaling.x *= -1;
                    }
                    }
                    
                    var bru4 = new BABYLON.StandardMaterial("bru4", scene);
                    bru4.diffuseTexture = new BABYLON.Texture("./houses/house4.png", scene);
                    bru4.diffuseTexture.hasAlpha = true;
                    bru4.backFaceCulling = false;
                    bru4.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(10,20); i++) {
                      var planebru4 = BABYLON.MeshBuilder.CreatePlane("planebru4", { width: 8.48, height: 18 }, scene);
                      planebru4.material = bru4;
                      planebru4.width = 8.48;
                      planebru4.height = 18;
                      planebru4.position.x = fxrand() * 200 - 100;
                      planebru4.position.z = fxrand() * 200 - 100;
                      planebru4.position.y = 9;
                    if (Math.sqrt(Math.pow(planebru4.position.x, 2) + Math.pow(planebru4.position.z, 2)) < 35)
                    {planebru4.dispose();}
                    if (bru4.flip) {
                      planebru4.scaling.x *= -1;
                    }
                    }
                    
                    var bru5 = new BABYLON.StandardMaterial("bru5", scene);
                    bru5.diffuseTexture = new BABYLON.Texture("./houses/house5.png", scene);
                    bru5.diffuseTexture.hasAlpha = true;
                    bru5.backFaceCulling = false;
                    bru5.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planebru5 = BABYLON.MeshBuilder.CreatePlane("planebru5", { width: 16.12, height: 24 }, scene);
                      planebru5.material = bru5;
                      planebru5.width = 16.12;
                      planebru5.height = 24;
                      planebru5.position.x = fxrand() * 200 - 100;
                      planebru5.position.z = fxrand() * 200 - 100;
                      planebru5.position.y = 12;
                    if (Math.sqrt(Math.pow(planebru5.position.x, 2) + Math.pow(planebru5.position.z, 2)) < 40)
                    {planebru5.dispose();}
                    if (bru5.flip) {
                      planebru5.scaling.x *= -1;
                    }
                    }
                    
                    var bru6 = new BABYLON.StandardMaterial("bru6", scene);
                    bru6.diffuseTexture = new BABYLON.Texture("./houses/house6.png", scene);
                    bru6.diffuseTexture.hasAlpha = true;
                    bru6.backFaceCulling = false;
                    bru6.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(10,20); i++) {
                      var planebru6 = BABYLON.MeshBuilder.CreatePlane("planebru6", { width: 8.03, height: 18 }, scene);
                      planebru6.material = bru6;
                      planebru6.width = 8.03;
                      planebru6.height = 18;
                      planebru6.position.x = fxrand() * 200 - 100;
                      planebru6.position.z = fxrand() * 200 - 100;
                      planebru6.position.y = 9;
                    if (Math.sqrt(Math.pow(planebru6.position.x, 2) + Math.pow(planebru6.position.z, 2)) < 35)
                    {planebru6.dispose();}
                    if (bru6.flip) {
                      planebru6.scaling.x *= -1;
                    }
                    }
                    
                    var bru7 = new BABYLON.StandardMaterial("bru7", scene);
                    bru7.diffuseTexture = new BABYLON.Texture("./houses/house7.png", scene);
                    bru7.diffuseTexture.hasAlpha = true;
                    bru7.backFaceCulling = false;
                    bru7.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(10,20); i++) {
                      var planebru7 = BABYLON.MeshBuilder.CreatePlane("planebru7", { width: 8.05, height: 18 }, scene);
                      planebru7.material = bru7;
                      planebru7.width = 8.05;
                      planebru7.height = 18;
                      planebru7.position.x = fxrand() * 200 - 100;
                      planebru7.position.z = fxrand() * 200 - 100;
                      planebru7.position.y = 9;
                    if (Math.sqrt(Math.pow(planebru7.position.x, 2) + Math.pow(planebru7.position.z, 2)) < 35)
                    {planebru7.dispose();}
                    if (bru7.flip) {
                      planebru7.scaling.x *= -1;
                    }
                    }
                    
                    var bru8 = new BABYLON.StandardMaterial("bru8", scene);
                    bru8.diffuseTexture = new BABYLON.Texture("./houses/house8.png", scene);
                    bru8.diffuseTexture.hasAlpha = true;
                    bru8.backFaceCulling = false;
                    bru8.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planebru8 = BABYLON.MeshBuilder.CreatePlane("planebru8", { width: 11.64, height: 20 }, scene);
                      planebru8.material = bru8;
                      planebru8.width = 11.64;
                      planebru8.height = 20;
                      planebru8.position.x = fxrand() * 200 - 100;
                      planebru8.position.z = fxrand() * 200 - 100;
                      planebru8.position.y = 10;
                    if (Math.sqrt(Math.pow(planebru8.position.x, 2) + Math.pow(planebru8.position.z, 2)) < 37)
                    {planebru8.dispose();}
                    if (bru8.flip) {
                      planebru8.scaling.x *= -1;
                    }
                    }
                    
                    var bru9 = new BABYLON.StandardMaterial("bru9", scene);
                    bru9.diffuseTexture = new BABYLON.Texture("./houses/house9.png", scene);
                    bru9.diffuseTexture.hasAlpha = true;
                    bru9.backFaceCulling = false;
                    bru9.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(10,20); i++) {
                      var planebru9 = BABYLON.MeshBuilder.CreatePlane("planebru9", { width: 9.92, height: 18 }, scene);
                      planebru9.material = bru9;
                      planebru9.width = 9.92;
                      planebru9.height = 18;
                      planebru9.position.x = fxrand() * 200 - 100;
                      planebru9.position.z = fxrand() * 200 - 100;
                      planebru9.position.y = 9;
                    if (Math.sqrt(Math.pow(planebru9.position.x, 2) + Math.pow(planebru9.position.z, 2)) < 35)
                    {planebru9.dispose();}
                    if (bru9.flip) {
                      planebru9.scaling.x *= -1;
                    }
                    }
                    
                    var bru10 = new BABYLON.StandardMaterial("bru10", scene);
                    bru10.diffuseTexture = new BABYLON.Texture("./houses/house10.png", scene);
                    bru10.diffuseTexture.hasAlpha = true;
                    bru10.backFaceCulling = false;
                    bru10.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(10,20); i++) {
                      var planebru10 = BABYLON.MeshBuilder.CreatePlane("planebru10", { width: 8.59, height: 18 }, scene);
                      planebru10.material = bru10;
                      planebru10.width = 8.59;
                      planebru10.height = 18;
                      planebru10.position.x = fxrand() * 200 - 100;
                      planebru10.position.z = fxrand() * 200 - 100;
                      planebru10.position.y = 9;
                    if (Math.sqrt(Math.pow(planebru10.position.x, 2) + Math.pow(planebru10.position.z, 2)) < 35)
                    {planebru10.dispose();}
                    if (bru10.flip) {
                      planebru10.scaling.x *= -1;
                    }
                    }
                    
                    var bru11 = new BABYLON.StandardMaterial("bru11", scene);
                    bru11.diffuseTexture = new BABYLON.Texture("./houses/house11.png", scene);
                    bru11.diffuseTexture.hasAlpha = true;
                    bru11.backFaceCulling = false;
                    bru11.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planebru11 = BABYLON.MeshBuilder.CreatePlane("planebru11", { width: 12.66, height: 24 }, scene);
                      planebru11.material = bru11;
                      planebru11.width = 12.66;
                      planebru11.height = 24;
                      planebru11.position.x = fxrand() * 200 - 100;
                      planebru11.position.z = fxrand() * 200 - 100;
                      planebru11.position.y = 12;
                    if (Math.sqrt(Math.pow(planebru11.position.x, 2) + Math.pow(planebru11.position.z, 2)) < 40)
                    {planebru11.dispose();}
                    if (bru11.flip) {
                      planebru11.scaling.x *= -1;
                    }
                    }
                    
                    var bru12 = new BABYLON.StandardMaterial("bru12", scene);
                    bru12.diffuseTexture = new BABYLON.Texture("./houses/house12.png", scene);
                    bru12.diffuseTexture.hasAlpha = true;
                    bru12.backFaceCulling = false;
                    bru12.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(10,20); i++) {
                      var planebru12 = BABYLON.MeshBuilder.CreatePlane("planebru12", { width: 14.75, height: 20 }, scene);
                      planebru12.material = bru12;
                      planebru12.width = 14.75;
                      planebru12.height = 20;
                      planebru12.position.x = fxrand() * 200 - 100;
                      planebru12.position.z = fxrand() * 200 - 100;
                      planebru12.position.y = 10;
                    if (Math.sqrt(Math.pow(planebru12.position.x, 2) + Math.pow(planebru12.position.z, 2)) < 35)
                    {planebru12.dispose();}
                    if (bru12.flip) {
                      planebru12.scaling.x *= -1;
                    }
                    }
                    
                    var bru13 = new BABYLON.StandardMaterial("bru13", scene);
                    bru13.diffuseTexture = new BABYLON.Texture("./houses/house13.png", scene);
                    bru13.diffuseTexture.hasAlpha = true;
                    bru13.backFaceCulling = false;
                    bru13.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planebru13 = BABYLON.MeshBuilder.CreatePlane("planebru13", { width: 13.36, height: 22 }, scene);
                      planebru13.material = bru13;
                      planebru13.width = 13.36;
                      planebru13.height = 22;
                      planebru13.position.x = fxrand() * 200 - 100;
                      planebru13.position.z = fxrand() * 200 - 100;
                      planebru13.position.y = 11;
                    if (Math.sqrt(Math.pow(planebru13.position.x, 2) + Math.pow(planebru13.position.z, 2)) < 40)
                    {planebru13.dispose();}
                    if (bru13.flip) {
                      planebru13.scaling.x *= -1;
                    }
                    }
                    
                    var bru14 = new BABYLON.StandardMaterial("bru14", scene);
                    bru14.diffuseTexture = new BABYLON.Texture("./houses/house14.png", scene);
                    bru14.diffuseTexture.hasAlpha = true;
                    bru14.backFaceCulling = false;
                    bru14.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planebru14 = BABYLON.MeshBuilder.CreatePlane("planebru14", { width: 13.32, height: 22 }, scene);
                      planebru14.material = bru14;
                      planebru14.width = 13.32;
                      planebru14.height = 22;
                      planebru14.position.x = fxrand() * 200 - 100;
                      planebru14.position.z = fxrand() * 200 - 100;
                      planebru14.position.y = 11;
                    if (Math.sqrt(Math.pow(planebru14.position.x, 2) + Math.pow(planebru14.position.z, 2)) < 40)
                    {planebru14.dispose();}
                    if (bru14.flip) {
                      planebru14.scaling.x *= -1;
                    }
                    }

                    houVar="Brutalist";
                    }
                    
                    
                    if(houNum>39 && houNum<=50){
                    
                    var jug1 = new BABYLON.StandardMaterial("jug1", scene);
                    jug1.diffuseTexture = new BABYLON.Texture("./houses/jug1.png", scene);
                    jug1.diffuseTexture.hasAlpha = true;
                    jug1.backFaceCulling = false;
                    jug1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planejug1 = BABYLON.MeshBuilder.CreatePlane("planejug1", { width: 11.28, height: 14 }, scene);
                      planejug1.material = jug1;
                      planejug1.width = 11.28;
                      planejug1.height = 14;
                      planejug1.position.x = fxrand() * 200 - 100;
                      planejug1.position.z = fxrand() * 200 - 100;
                      planejug1.position.y = 7;
                    if (Math.sqrt(Math.pow(planejug1.position.x, 2) + Math.pow(planejug1.position.z, 2)) < 35)
                    {planejug1.dispose();}
                    if (jug1.flip) {
                      planejug1.scaling.x *= -1;
                    }
                    }
                    
                    var jug2 = new BABYLON.StandardMaterial("jug2", scene);
                    jug2.diffuseTexture = new BABYLON.Texture("./houses/jug2.png", scene);
                    jug2.diffuseTexture.hasAlpha = true;
                    jug2.backFaceCulling = false;
                    jug2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planejug2 = BABYLON.MeshBuilder.CreatePlane("planejug2", { width: 9.10, height: 14.5 }, scene);
                      planejug2.material = jug2;
                      planejug2.width = 9.10;
                      planejug2.height = 14.5;
                      planejug2.position.x = fxrand() * 200 - 100;
                      planejug2.position.z = fxrand() * 200 - 100;
                      planejug2.position.y = 7.25;
                    if (Math.sqrt(Math.pow(planejug2.position.x, 2) + Math.pow(planejug2.position.z, 2)) < 35)
                    {planejug2.dispose();}
                    if (jug2.flip) {
                      planejug2.scaling.x *= -1;
                    }
                    }
                    
                    var jug3 = new BABYLON.StandardMaterial("jug3", scene);
                    jug3.diffuseTexture = new BABYLON.Texture("./houses/jug3.png", scene);
                    jug3.diffuseTexture.hasAlpha = true;
                    jug3.backFaceCulling = false;
                    jug3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planejug3 = BABYLON.MeshBuilder.CreatePlane("planejug3", { width: 11.57, height: 14.5 }, scene);
                      planejug3.material = jug3;
                      planejug3.width = 11.57;
                      planejug3.height = 14.5;
                      planejug3.position.x = fxrand() * 200 - 100;
                      planejug3.position.z = fxrand() * 200 - 100;
                      planejug3.position.y = 7.25;
                    if (Math.sqrt(Math.pow(planejug3.position.x, 2) + Math.pow(planejug3.position.z, 2)) < 35)
                    {planejug3.dispose();}
                    if (jug3.flip) {
                      planejug3.scaling.x *= -1;
                    }
                    }
                    
                    var jug4 = new BABYLON.StandardMaterial("jug4", scene);
                    jug4.diffuseTexture = new BABYLON.Texture("./houses/jug4.png", scene);
                    jug4.diffuseTexture.hasAlpha = true;
                    jug4.backFaceCulling = false;
                    jug4.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planejug4 = BABYLON.MeshBuilder.CreatePlane("planejug4", { width: 8.88, height: 15 }, scene);
                      planejug4.material = jug4;
                      planejug4.width = 8.88;
                      planejug4.height = 15;
                      planejug4.position.x = fxrand() * 200 - 100;
                      planejug4.position.z = fxrand() * 200 - 100;
                      planejug4.position.y = 7.5;
                    if (Math.sqrt(Math.pow(planejug4.position.x, 2) + Math.pow(planejug4.position.z, 2)) < 35)
                    {planejug4.dispose();}
                    if (jug4.flip) {
                      planejug4.scaling.x *= -1;
                    }
                    }
                    
                    var jug5 = new BABYLON.StandardMaterial("jug5", scene);
                    jug5.diffuseTexture = new BABYLON.Texture("./houses/jug5.png", scene);
                    jug5.diffuseTexture.hasAlpha = true;
                    jug5.backFaceCulling = false;
                    jug5.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planejug5 = BABYLON.MeshBuilder.CreatePlane("planejug5", { width: 10, height: 16 }, scene);
                      planejug5.material = jug5;
                      planejug5.width = 10;
                      planejug5.height = 16;
                      planejug5.position.x = fxrand() * 200 - 100;
                      planejug5.position.z = fxrand() * 200 - 100;
                      planejug5.position.y = 8;
                    if (Math.sqrt(Math.pow(planejug5.position.x, 2) + Math.pow(planejug5.position.z, 2)) < 35)
                    {planejug5.dispose();}
                    if (jug5.flip) {
                      planejug5.scaling.x *= -1;
                    }
                    }
                    
                    var jug6 = new BABYLON.StandardMaterial("jug6", scene);
                    jug6.diffuseTexture = new BABYLON.Texture("./houses/jug6.png", scene);
                    jug6.diffuseTexture.hasAlpha = true;
                    jug6.backFaceCulling = false;
                    jug6.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planejug6 = BABYLON.MeshBuilder.CreatePlane("planejug6", { width: 9.82, height: 16 }, scene);
                      planejug6.material = jug6;
                      planejug6.width = 9.82;
                      planejug6.height = 16;
                      planejug6.position.x = fxrand() * 200 - 100;
                      planejug6.position.z = fxrand() * 200 - 100;
                      planejug6.position.y = 8;
                    if (Math.sqrt(Math.pow(planejug6.position.x, 2) + Math.pow(planejug6.position.z, 2)) < 35)
                    {planejug6.dispose();}
                    if (jug6.flip) {
                      planejug6.scaling.x *= -1;
                    }
                    }
                    
                    var jug7 = new BABYLON.StandardMaterial("jug7", scene);
                    jug7.diffuseTexture = new BABYLON.Texture("./houses/jug7.png", scene);
                    jug7.diffuseTexture.hasAlpha = true;
                    jug7.backFaceCulling = false;
                    jug7.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planejug7 = BABYLON.MeshBuilder.CreatePlane("planejug7", { width: 9.75, height: 18 }, scene);
                      planejug7.material = jug7;
                      planejug7.width = 9.75;
                      planejug7.height = 18;
                      planejug7.position.x = fxrand() * 200 - 100;
                      planejug7.position.z = fxrand() * 200 - 100;
                      planejug7.position.y = 9;
                    if (Math.sqrt(Math.pow(planejug7.position.x, 2) + Math.pow(planejug7.position.z, 2)) < 37)
                    {planejug7.dispose();}
                    if (jug7.flip) {
                      planejug7.scaling.x *= -1;
                    }
                    }
                    
                    var jug8 = new BABYLON.StandardMaterial("jug8", scene);
                    jug8.diffuseTexture = new BABYLON.Texture("./houses/jug8.png", scene);
                    jug8.diffuseTexture.hasAlpha = true;
                    jug8.backFaceCulling = false;
                    jug8.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planejug8 = BABYLON.MeshBuilder.CreatePlane("planejug8", { width: 8.06, height: 18 }, scene);
                      planejug8.material = jug8;
                      planejug8.width = 8.06;
                      planejug8.height = 18;
                      planejug8.position.x = fxrand() * 200 - 100;
                      planejug8.position.z = fxrand() * 200 - 100;
                      planejug8.position.y = 9;
                    if (Math.sqrt(Math.pow(planejug8.position.x, 2) + Math.pow(planejug8.position.z, 2)) < 40)
                    {planejug8.dispose();}
                    if (jug8.flip) {
                      planejug8.scaling.x *= -1;
                    }
                    }
                    
                    var jug9 = new BABYLON.StandardMaterial("jug9", scene);
                    jug9.diffuseTexture = new BABYLON.Texture("./houses/jug9.png", scene);
                    jug9.diffuseTexture.hasAlpha = true;
                    jug9.backFaceCulling = false;
                    jug9.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planejug9 = BABYLON.MeshBuilder.CreatePlane("planejug9", { width: 7.53, height: 18 }, scene);
                      planejug9.material = jug9;
                      planejug9.width = 7.53;
                      planejug9.height = 18;
                      planejug9.position.x = fxrand() * 200 - 100;
                      planejug9.position.z = fxrand() * 200 - 100;
                      planejug9.position.y = 9;
                    if (Math.sqrt(Math.pow(planejug9.position.x, 2) + Math.pow(planejug9.position.z, 2)) < 40)
                    {planejug9.dispose();}
                    if (jug9.flip) {
                      planejug9.scaling.x *= -1;
                    }
                    }
                    
                    var jug10 = new BABYLON.StandardMaterial("jug10", scene);
                    jug10.diffuseTexture = new BABYLON.Texture("./houses/jug10.png", scene);
                    jug10.diffuseTexture.hasAlpha = true;
                    jug10.backFaceCulling = false;
                    jug10.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planejug10 = BABYLON.MeshBuilder.CreatePlane("planejug10", { width: 9.38, height: 17 }, scene);
                      planejug10.material = jug10;
                      planejug10.width = 9.38;
                      planejug10.height = 17;
                      planejug10.position.x = fxrand() * 200 - 100;
                      planejug10.position.z = fxrand() * 200 - 100;
                      planejug10.position.y = 8.5;
                    if (Math.sqrt(Math.pow(planejug10.position.x, 2) + Math.pow(planejug10.position.z, 2)) < 37)
                    {planejug10.dispose();}
                    if (jug10.flip) {
                      planejug10.scaling.x *= -1;
                    }
                    }
                    
                    var jug11 = new BABYLON.StandardMaterial("jug11", scene);
                    jug11.diffuseTexture = new BABYLON.Texture("./houses/jug11.png", scene);
                    jug11.diffuseTexture.hasAlpha = true;
                    jug11.backFaceCulling = false;
                    jug11.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planejug11 = BABYLON.MeshBuilder.CreatePlane("planejug11", { width: 8.19, height: 17 }, scene);
                      planejug11.material = jug11;
                      planejug11.width = 8.19;
                      planejug11.height = 17;
                      planejug11.position.x = fxrand() * 200 - 100;
                      planejug11.position.z = fxrand() * 200 - 100;
                      planejug11.position.y = 8.5;
                    if (Math.sqrt(Math.pow(planejug11.position.x, 2) + Math.pow(planejug11.position.z, 2)) < 37)
                    {planejug11.dispose();}
                    if (jug11.flip) {
                      planejug11.scaling.x *= -1;
                    }
                    }
                    
                    var jug12 = new BABYLON.StandardMaterial("jug12", scene);
                    jug12.diffuseTexture = new BABYLON.Texture("./houses/jug12.png", scene);
                    jug12.diffuseTexture.hasAlpha = true;
                    jug12.backFaceCulling = false;
                    jug12.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planejug12 = BABYLON.MeshBuilder.CreatePlane("planejug12", { width: 8.44, height: 20 }, scene);
                      planejug12.material = jug12;
                      planejug12.width = 8.44;
                      planejug12.height = 20;
                      planejug12.position.x = fxrand() * 200 - 100;
                      planejug12.position.z = fxrand() * 200 - 100;
                      planejug12.position.y = 10;
                    if (Math.sqrt(Math.pow(planejug12.position.x, 2) + Math.pow(planejug12.position.z, 2)) < 40)
                    {planejug12.dispose();}
                    if (jug12.flip) {
                      planejug12.scaling.x *= -1;
                    }
                    }
                    
                    var jug13 = new BABYLON.StandardMaterial("jug13", scene);
                    jug13.diffuseTexture = new BABYLON.Texture("./houses/jug13.png", scene);
                    jug13.diffuseTexture.hasAlpha = true;
                    jug13.backFaceCulling = false;
                    jug13.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planejug13 = BABYLON.MeshBuilder.CreatePlane("planejug13", { width: 8.09, height: 17 }, scene);
                      planejug13.material = jug13;
                      planejug13.width = 8.09;
                      planejug13.height = 15;
                      planejug13.position.x = fxrand() * 200 - 100;
                      planejug13.position.z = fxrand() * 200 - 100;
                      planejug13.position.y = 8.5;
                    if (Math.sqrt(Math.pow(planejug13.position.x, 2) + Math.pow(planejug13.position.z, 2)) < 40)
                    {planejug13.dispose();}
                    if (jug13.flip) {
                      planejug13.scaling.x *= -1;
                    }
                    }
                    
                    var jug14 = new BABYLON.StandardMaterial("jug14", scene);
                    jug14.diffuseTexture = new BABYLON.Texture("./houses/jug14.png", scene);
                    jug14.diffuseTexture.hasAlpha = true;
                    jug14.backFaceCulling = false;
                    jug14.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(11,24); i++) {
                      var planejug14 = BABYLON.MeshBuilder.CreatePlane("planejug14", { width: 8.05, height: 17 }, scene);
                      planejug14.material = jug14;
                      planejug14.width = 8.05;
                      planejug14.height = 17;
                      planejug14.position.x = fxrand() * 200 - 100;
                      planejug14.position.z = fxrand() * 200 - 100;
                      planejug14.position.y = 8.5;
                    if (Math.sqrt(Math.pow(planejug14.position.x, 2) + Math.pow(planejug14.position.z, 2)) < 40)
                    {planejug14.dispose();}
                    if (jug14.flip) {
                      planejug14.scaling.x *= -1;
                    }
                    }
                    
                    houVar="Jugendstil";
                    }
                    
                    
                    //Cars
                    
                    var cA = new BABYLON.StandardMaterial("carA", scene);
                    cA.diffuseTexture = new BABYLON.Texture("./cars/carA" + rnd3 + ".png", scene);
                    cA.diffuseTexture.hasAlpha = true;
                    cA.backFaceCulling = false;
                    cA.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,4); i++) {
                      var planecA = BABYLON.MeshBuilder.CreatePlane("planecA", { width: 7, height: 2.33 }, scene);
                      planecA.material = cA;
                      planecA.width = 7;
                      planecA.height = 2.33;
                      planecA.position.x = fxrand() * 150 - 75;
                      planecA.position.z = fxrand() * 150 - 75;
                      planecA.position.y = 1.2;
                    if (Math.sqrt(Math.pow(planecA.position.x, 2) + Math.pow(planecA.position.z, 2)) < 15)
                    {planecA.dispose();}
                    if (cA.flip) {
                      planecA.scaling.x *= -1;
                    }
                    }
                    
                    var cB = new BABYLON.StandardMaterial("carB", scene);
                    cB.diffuseTexture = new BABYLON.Texture("./cars/carB" + rnd3 + ".png", scene);
                    cB.diffuseTexture.hasAlpha = true;
                    cB.backFaceCulling = false;
                    cB.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,4); i++) {
                      var planecB = BABYLON.MeshBuilder.CreatePlane("planecB", { width: 7.5, height: 3.83 }, scene);
                      planecB.material = cB;
                      planecB.width = 7.5;
                      planecB.height = 3.83;
                      planecB.position.x = fxrand() * 150 - 75;
                      planecB.position.z = fxrand() * 150 - 75;
                      planecB.position.y = 1.9;
                    if (Math.sqrt(Math.pow(planecB.position.x, 2) + Math.pow(planecB.position.z, 2)) < 15)
                    {planecB.dispose();}
                    if (cB.flip) {
                      planecB.scaling.x *= -1;
                    }
                    }
                    
                    var cC = new BABYLON.StandardMaterial("carC", scene);
                    cC.diffuseTexture = new BABYLON.Texture("./cars/carC" + rnd3 + ".png", scene);
                    cC.diffuseTexture.hasAlpha = true;
                    cC.backFaceCulling = false;
                    cC.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,4); i++) {
                    var planecC = BABYLON.MeshBuilder.CreatePlane("planecC", { width: 5.63, height: 3.8 }, scene);
                      planecC.material = cC;
                      planecC.width = 5.63;
                      planecC.height = 3.8;
                      planecC.position.x = fxrand() * 150 - 75;
                      planecC.position.z = fxrand() * 150 - 75;
                      planecC.position.y = 1.9;
                    if (Math.sqrt(Math.pow(planecC.position.x, 2) + Math.pow(planecC.position.z, 2)) < 15)
                    {planecC.dispose();}
                    if (cC.flip) {
                      planecC.scaling.x *= -1;
                    }
                    }
                    
                    
                    var busE5;
                    busE5=Math.round(genR(0,90));

                    if(busE5<=10){
                    var bus1 = new BABYLON.StandardMaterial("bus1", scene);
                    bus1.diffuseTexture = new BABYLON.Texture("./cars/bus1.png", scene);
                    bus1.diffuseTexture.hasAlpha = true;
                    bus1.backFaceCulling = false;
                    bus1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,4); i++) {
                      var planebus1 = BABYLON.MeshBuilder.CreatePlane("planebus1", { width: 13.18, height: 4 }, scene);
                      planebus1.material = bus1;
                      planebus1.width = 13.18;
                      planebus1.height = 4;
                      planebus1.position.x = fxrand() * 150 - 75;
                      planebus1.position.z = fxrand() * 150 - 75;
                      planebus1.position.y = 1.97;
                    if (Math.sqrt(Math.pow(planebus1.position.x, 2) + Math.pow(planebus1.position.z, 2)) < 20)
                    {planebus1.dispose();}
                    if (bus1.flip) {
                      planebus1.scaling.x *= -1;
                    }
                    }
                    }
                    
                    if(busE5>10 && busE5<=20){
                    var bus2 = new BABYLON.StandardMaterial("bus2", scene);
                    bus2.diffuseTexture = new BABYLON.Texture("./cars/bus2.png", scene);
                    bus2.diffuseTexture.hasAlpha = true;
                    bus2.backFaceCulling = false;
                    bus2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,4); i++) {
                      var planebus2 = BABYLON.MeshBuilder.CreatePlane("planebus2", { width: 13.18, height: 4 }, scene);
                      planebus2.material = bus2;
                      planebus2.width = 13.18;
                      planebus2.height = 4;
                      planebus2.position.x = fxrand() * 150 - 75;
                      planebus2.position.z = fxrand() * 150 - 75;
                      planebus2.position.y = 1.97;
                    if (Math.sqrt(Math.pow(planebus2.position.x, 2) + Math.pow(planebus2.position.z, 2)) < 20)
                    {planebus2.dispose();}
                    if (bus2.flip) {
                      planebus2.scaling.x *= -1;
                    }
                    }
                    }
                                    
                    if(busE5>20 && busE5<=30){
                    var bus3 = new BABYLON.StandardMaterial("bus3", scene);
                    bus3.diffuseTexture = new BABYLON.Texture("./cars/bus3.png", scene);
                    bus3.diffuseTexture.hasAlpha = true;
                    bus3.backFaceCulling = false;
                    bus3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,4); i++) {
                      var planebus3 = BABYLON.MeshBuilder.CreatePlane("planebus3", { width: 13.18, height: 4 }, scene);
                      planebus3.material = bus3;
                      planebus3.width = 13.18;
                      planebus3.height = 4;
                      planebus3.position.x = fxrand() * 150 - 75;
                      planebus3.position.z = fxrand() * 150 - 75;
                      planebus3.position.y = 1.97;
                    if (Math.sqrt(Math.pow(planebus3.position.x, 2) + Math.pow(planebus3.position.z, 2)) < 20)
                    {planebus3.dispose();}
                    if (bus3.flip) {
                      planebus3.scaling.x *= -1;
                    }
                    }
                    }

                    if(busE5>30 && busE5<=40){
                    var bus4 = new BABYLON.StandardMaterial("bus4", scene);
                    bus4.diffuseTexture = new BABYLON.Texture("./cars/bus4.png", scene);
                    bus4.diffuseTexture.hasAlpha = true;
                    bus4.backFaceCulling = false;
                    bus4.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,4); i++) {
                      var planebus4 = BABYLON.MeshBuilder.CreatePlane("planebus4", { width: 13.18, height: 4 }, scene);
                      planebus4.material = bus4;
                      planebus4.width = 13.18;
                      planebus4.height = 4;
                      planebus4.position.x = fxrand() * 150 - 75;
                      planebus4.position.z = fxrand() * 150 - 75;
                      planebus4.position.y = 1.97;
                    if (Math.sqrt(Math.pow(planebus4.position.x, 2) + Math.pow(planebus4.position.z, 2)) < 20)
                    {planebus4.dispose();}
                    if (bus4.flip) {
                      planebus4.scaling.x *= -1;
                    }
                    }
                    }

                    if(busE5>40 && busE5<=50){
                    var bus5 = new BABYLON.StandardMaterial("bus5", scene);
                    bus5.diffuseTexture = new BABYLON.Texture("./cars/bus5.png", scene);
                    bus5.diffuseTexture.hasAlpha = true;
                    bus5.backFaceCulling = false;
                    bus5.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,4); i++) {
                      var planebus5 = BABYLON.MeshBuilder.CreatePlane("planebus5", { width: 13.18, height: 4 }, scene);
                      planebus5.material = bus5;
                      planebus5.width = 13.18;
                      planebus5.height = 4;
                      planebus5.position.x = fxrand() * 150 - 75;
                      planebus5.position.z = fxrand() * 150 - 75;
                      planebus5.position.y = 1.97;
                    if (Math.sqrt(Math.pow(planebus5.position.x, 2) + Math.pow(planebus5.position.z, 2)) < 20)
                    {planebus5.dispose();}
                    if (bus5.flip) {
                      planebus5.scaling.x *= -1;
                    }
                    }
                    }

                    if(busE5>50 && busE5<=60){
                    var bus6 = new BABYLON.StandardMaterial("bus6", scene);
                    bus6.diffuseTexture = new BABYLON.Texture("./cars/bus6.png", scene);
                    bus6.diffuseTexture.hasAlpha = true;
                    bus6.backFaceCulling = false;
                    bus6.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,4); i++) {
                      var planebus6 = BABYLON.MeshBuilder.CreatePlane("planebus6", { width: 13.18, height: 4 }, scene);
                      planebus6.material = bus6;
                      planebus6.width = 13.18;
                      planebus6.height = 4;
                      planebus6.position.x = fxrand() * 150 - 75;
                      planebus6.position.z = fxrand() * 150 - 75;
                      planebus6.position.y = 1.97;
                    if (Math.sqrt(Math.pow(planebus6.position.x, 2) + Math.pow(planebus6.position.z, 2)) < 20)
                    {planebus6.dispose();}
                    if (bus6.flip) {
                      planebus6.scaling.x *= -1;
                    }
                    }
                    }

                    if(busE5>60 && busE5<=70){
                    var bus7 = new BABYLON.StandardMaterial("bus7", scene);
                    bus7.diffuseTexture = new BABYLON.Texture("./cars/bus7.png", scene);
                    bus7.diffuseTexture.hasAlpha = true;
                    bus7.backFaceCulling = false;
                    bus7.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,4); i++) {
                      var planebus7 = BABYLON.MeshBuilder.CreatePlane("planebus7", { width: 13.18, height: 4 }, scene);
                      planebus7.material = bus7;
                      planebus7.width = 13.18;
                      planebus7.height = 4;
                      planebus7.position.x = fxrand() * 150 - 75;
                      planebus7.position.z = fxrand() * 150 - 75;
                      planebus7.position.y = 1.97;
                    if (Math.sqrt(Math.pow(planebus7.position.x, 2) + Math.pow(planebus7.position.z, 2)) < 20)
                    {planebus7.dispose();}
                    if (bus7.flip) {
                      planebus7.scaling.x *= -1;
                    }
                    }
                    }

                    if(busE5>70 && busE5<=90){
                    }
                    
                    
                    //Rubble
                    
                    var rA = new BABYLON.StandardMaterial("rubbleA", scene);
                    rA.diffuseTexture = new BABYLON.Texture("./rubbles/rubbleA" + rnd3 + ".png", scene);
                    rA.diffuseTexture.hasAlpha = true;
                    rA.backFaceCulling = false;
                    rA.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(9,18); i++) {
                      var planerA = BABYLON.MeshBuilder.CreatePlane("planerA", { width: 20, height: 10 }, scene);
                      planerA.material = rA;
                      planerA.width = 20;
                      planerA.height = 10;
                      planerA.position.x = fxrand() * 200 - 100;
                      planerA.position.z = fxrand() * 200 - 100;
                      planerA.position.y = 5;
                    if (Math.sqrt(Math.pow(planerA.position.x, 2) + Math.pow(planerA.position.z, 2)) < 50)
                    {planerA.dispose();}
                    if (rA.flip) {
                      planerA.scaling.x *= -1;
                    }
                    }
                    
                    var rB = new BABYLON.StandardMaterial("rubbleB", scene);
                    rB.diffuseTexture = new BABYLON.Texture("./rubbles/rubbleB" + rnd3 + ".png", scene);
                    rB.diffuseTexture.hasAlpha = true;
                    rB.backFaceCulling = false;
                    rB.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(9,18); i++) {
                      var planerB = BABYLON.MeshBuilder.CreatePlane("planerB", { width: 20, height: 7.6 }, scene);
                      planerB.material = rB;
                      planerB.width = 20;
                      planerB.height = 7.6;
                      planerB.position.x = fxrand() * 200 - 100;
                      planerB.position.z = fxrand() * 200 - 100;
                      planerB.position.y = 3.8;
                    if (Math.sqrt(Math.pow(planerB.position.x, 2) + Math.pow(planerB.position.z, 2)) < 50)
                    {planerB.dispose();}
                    if (rB.flip) {
                      planerB.scaling.x *= -1;
                    }
                    }
                    
                    var rC = new BABYLON.StandardMaterial("rubbleC", scene);
                    rC.diffuseTexture = new BABYLON.Texture("./rubbles/rubbleC" + rnd3 + ".png", scene);
                    rC.diffuseTexture.hasAlpha = true;
                    rC.backFaceCulling = false;
                    rC.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(9,18); i++) {
                      var planerC = BABYLON.MeshBuilder.CreatePlane("planerC", { width: 20, height: 7 }, scene);
                      planerC.material = rC;
                      planerC.width = 20;
                      planerC.height = 7;
                      planerC.position.x = fxrand() * 200 - 100;
                      planerC.position.z = fxrand() * 200 - 100;
                      planerC.position.y = 3.5;
                    if (Math.sqrt(Math.pow(planerC.position.x, 2) + Math.pow(planerC.position.z, 2)) < 50)
                    {planerC.dispose();}
                    if (rC.flip) {
                      planerC.scaling.x *= -1;
                    }
                    }
                    
                    var rD = new BABYLON.StandardMaterial("rubbleD", scene);
                    rD.diffuseTexture = new BABYLON.Texture("./rubbles/rubbleD" + rnd3 + ".png", scene);
                    rD.diffuseTexture.hasAlpha = true;
                    rD.backFaceCulling = false;
                    rD.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(9,18); i++) {
                      var planerD = BABYLON.MeshBuilder.CreatePlane("planerD", { width: 20, height: 13 }, scene);
                      planerD.material = rD;
                      planerD.width = 20;
                      planerD.height = 13;
                      planerD.position.x = fxrand() * 200 - 100;
                      planerD.position.z = fxrand() * 200 - 100;
                      planerD.position.y = 6.5;
                    if (Math.sqrt(Math.pow(planerD.position.x, 2) + Math.pow(planerD.position.z, 2)) < 50)
                    {planerD.dispose();}
                    if (rD.flip) {
                      planerD.scaling.x *= -1;
                    }
                    }
                    
                    var rE = new BABYLON.StandardMaterial("rubbleE", scene);
                    rE.diffuseTexture = new BABYLON.Texture("./rubbles/rubbleE" + rnd3 + ".png", scene);
                    rE.diffuseTexture.hasAlpha = true;
                    rE.backFaceCulling = false;
                    rE.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(9,18); i++) {
                      var planerE = BABYLON.MeshBuilder.CreatePlane("planerE", { width: 20, height: 12.6 }, scene);
                      planerE.material = rE;
                      planerE.width = 20;
                      planerE.height = 12.6;
                      planerE.position.x = fxrand() * 200 - 100;
                      planerE.position.z = fxrand() * 200 - 100;
                      planerE.position.y = 6.3;
                    if (Math.sqrt(Math.pow(planerE.position.x, 2) + Math.pow(planerE.position.z, 2)) < 50)
                    {planerE.dispose();}
                    if (rE.flip) {
                      planerE.scaling.x *= -1;
                    }
                    }
                            
                    var rF = new BABYLON.StandardMaterial("rubbleF", scene);
                    rF.diffuseTexture = new BABYLON.Texture("./rubbles/rubbleF" + rnd3 + ".png", scene);
                    rF.diffuseTexture.hasAlpha = true;
                    rF.backFaceCulling = false;
                    rF.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(9,18); i++) {
                      var planerF = BABYLON.MeshBuilder.CreatePlane("planerF", { width: 20, height: 11.6 }, scene);
                      planerF.material = rF;
                      planerF.width = 20;
                      planerF.height = 11.6;
                      planerF.position.x = fxrand() * 200 - 100;
                      planerF.position.z = fxrand() * 200 - 100;
                      planerF.position.y = 5.8;
                    if (Math.sqrt(Math.pow(planerF.position.x, 2) + Math.pow(planerF.position.z, 2)) < 50)
                    {planerF.dispose();}
                    if (rF.flip) {
                      planerF.scaling.x *= -1;
                    }
                    }
                    
                    
                    //Flower Outgrowth
                    
                    var floNum;
                    var floVar;

                    floNum=Math.round(genR(0,100));
                  
                    if(floNum<=30){
    
                    var pB = new BABYLON.StandardMaterial("plantB", scene);
                    pB.diffuseTexture = new BABYLON.Texture("./plants/plant2.png", scene);
                    pB.diffuseTexture.hasAlpha = true;
                    pB.backFaceCulling = false;
                    pB.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(5,11); i++) {
                      var planepB = BABYLON.MeshBuilder.CreatePlane("planepB", { width: 12, height: 12 }, scene);
                      planepB.material = pB;
                      planepB.width = 12;
                      planepB.height = 12;
                      planepB.position.x = fxrand() * 200 - 100;
                      planepB.position.z = fxrand() * 200 - 100;
                      planepB.position.y = 6;
                    if (Math.sqrt(Math.pow(planepB.position.x, 2) + Math.pow(planepB.position.z, 2)) < 50)
                    {planepB.dispose();}
                    if (pB.flip) {
                      planepB.scaling.x *= -1;
                    }
                    }
                    
                    var pE = new BABYLON.StandardMaterial("plantE", scene);
                    pE.diffuseTexture = new BABYLON.Texture("./plants/plant5.png", scene);
                    pE.diffuseTexture.hasAlpha = true;
                    pE.backFaceCulling = false;
                    pE.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(5,11); i++) {
                      var planepE = BABYLON.MeshBuilder.CreatePlane("planepE", { width: 10.8, height: 18 }, scene);
                      planepE.material = pE;
                      planepE.width = 10.8;
                      planepE.height = 18;
                      planepE.position.x = fxrand() * 200 - 100;
                      planepE.position.z = fxrand() * 200 - 100;
                      planepE.position.y = 9;
                    if (Math.sqrt(Math.pow(planepE.position.x, 2) + Math.pow(planepE.position.z, 2)) < 50)
                    {planepE.dispose();}
                    if (pE.flip) {
                      planepE.scaling.x *= -1;
                    }
                    }
                    
                    var pF = new BABYLON.StandardMaterial("plantF", scene);
                    pF.diffuseTexture = new BABYLON.Texture("./plants/plant6.png", scene);
                    pF.diffuseTexture.hasAlpha = true;
                    pF.backFaceCulling = false;
                    pF.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(5,11); i++) {
                      var planepF = BABYLON.MeshBuilder.CreatePlane("planepF", { width: 15, height: 20 }, scene);
                      planepF.material = pF;
                      planepF.width = 15;
                      planepF.height = 20;
                      planepF.position.x = fxrand() * 200 - 100;
                      planepF.position.z = fxrand() * 200 - 100;
                      planepF.position.y = 10;
                    if (Math.sqrt(Math.pow(planepF.position.x, 2) + Math.pow(planepF.position.z, 2)) < 50)
                    {planepF.dispose();}
                    if (pF.flip) {
                      planepF.scaling.x *= -1;
                    }
                    }
                    
                    var pG = new BABYLON.StandardMaterial("plantG", scene);
                    pG.diffuseTexture = new BABYLON.Texture("./plants/plant7.png", scene);
                    pG.diffuseTexture.hasAlpha = true;
                    pG.backFaceCulling = false;
                    pG.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(12,22); i++) {
                      var planepG = BABYLON.MeshBuilder.CreatePlane("planepG", { width: 1.25, height: 1.1 }, scene);
                      planepG.material = pG;
                      planepG.width = 1.25;
                      planepG.height = 1.1;
                      planepG.position.x = fxrand() * 100 - 50;
                      planepG.position.z = fxrand() * 100 - 50;
                      planepG.position.y = 0.55;
                    if (Math.sqrt(Math.pow(planepG.position.x, 2) + Math.pow(planepG.position.z, 2)) < 13)
                    {planepG.dispose();}
                    if (pG.flip) {
                      planepG.scaling.x *= -1;
                    }
                    }
                    
                    var pH = new BABYLON.StandardMaterial("plantH", scene);
                    pH.diffuseTexture = new BABYLON.Texture("./plants/plant8.png", scene);
                    pH.diffuseTexture.hasAlpha = true;
                    pH.backFaceCulling = false;
                    pH.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(12,22); i++) {
                      var planepH = BABYLON.MeshBuilder.CreatePlane("planepH", { width: 0.8, height: 0.75 }, scene);
                      planepH.material = pH;
                      planepH.width = 0.8;
                      planepH.height = 0.75;
                      planepH.position.x = fxrand() * 100 - 50;
                      planepH.position.z = fxrand() * 100 - 50;
                      planepH.position.y = 0.375;
                    if (Math.sqrt(Math.pow(planepH.position.x, 2) + Math.pow(planepH.position.z, 2)) < 13)
                    {planepH.dispose();}
                    if (pH.flip) {
                      planepH.scaling.x *= -1;
                    }
                    }

                    var pI = new BABYLON.StandardMaterial("plantI", scene);
                    pI.diffuseTexture = new BABYLON.Texture("./plants/plant9.png", scene);
                    pI.diffuseTexture.hasAlpha = true;
                    pI.backFaceCulling = false;
                    pI.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,13); i++) {
                      var planepI = BABYLON.MeshBuilder.CreatePlane("planepI", { width: 8, height: 11.4 }, scene);
                      planepI.material = pI;
                      planepI.width = 8;
                      planepI.height = 11.4;
                      planepI.position.x = fxrand() * 200 - 100;
                      planepI.position.z = fxrand() * 200 - 100;
                      planepI.position.y = 5.7;
                    if (Math.sqrt(Math.pow(planepI.position.x, 2) + Math.pow(planepI.position.z, 2)) < 45)
                    {planepI.dispose();}
                    if (pI.flip) {
                      planepI.scaling.x *= -1;
                    }
                    }
                    
                    var pJ = new BABYLON.StandardMaterial("plantJ", scene);
                    pJ.diffuseTexture = new BABYLON.Texture("./plants/plant10.png", scene);
                    pJ.diffuseTexture.hasAlpha = true;
                    pJ.backFaceCulling = false;
                    pJ.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,13); i++) {
                      var planepJ = BABYLON.MeshBuilder.CreatePlane("planepJ", { width: 11.08, height: 23 }, scene);
                      planepJ.material = pJ;
                      planepJ.width = 11.08;
                      planepJ.height = 23;
                      planepJ.position.x = fxrand() * 200 - 100;
                      planepJ.position.z = fxrand() * 200 - 100;
                      planepJ.position.y = 11.5;
                    if (Math.sqrt(Math.pow(planepJ.position.x, 2) + Math.pow(planepJ.position.z, 2)) < 55)
                    {planepJ.dispose();}
                    if (pJ.flip) {
                      planepJ.scaling.x *= -1;
                    }
                    }

                    var pK = new BABYLON.StandardMaterial("plantK", scene);
                    pK.diffuseTexture = new BABYLON.Texture("./plants/plant11.png", scene);
                    pK.diffuseTexture.hasAlpha = true;
                    pK.backFaceCulling = false;
                    pK.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,13); i++) {
                      var planepK = BABYLON.MeshBuilder.CreatePlane("planepK", { width: 8, height: 12 }, scene);
                      planepK.material = pK;
                      planepK.width = 8;
                      planepK.height = 12;
                      planepK.position.x = fxrand() * 200 - 100;
                      planepK.position.z = fxrand() * 200 - 100;
                      planepK.position.y = 6;
                    if (Math.sqrt(Math.pow(planepK.position.x, 2) + Math.pow(planepK.position.z, 2)) < 50)
                    {planepK.dispose();}
                    if (pK.flip) {
                      planepK.scaling.x *= -1;
                    }
                    }
                    
                    var pL = new BABYLON.StandardMaterial("plantL", scene);
                    pL.diffuseTexture = new BABYLON.Texture("./plants/plant12.png", scene);
                    pL.diffuseTexture.hasAlpha = true;
                    pL.backFaceCulling = false;
                    pL.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7,13); i++) {
                      var planepL = BABYLON.MeshBuilder.CreatePlane("planepL", { width: 8, height: 12 }, scene);
                      planepL.material = pL;
                      planepL.width = 8;
                      planepL.height = 12;
                      planepL.position.x = fxrand() * 200 - 100;
                      planepL.position.z = fxrand() * 200 - 100;
                      planepL.position.y = 6;
                    if (Math.sqrt(Math.pow(planepL.position.x, 2) + Math.pow(planepL.position.z, 2)) < 50)
                    {planepL.dispose();}
                    if (pL.flip) {
                      planepL.scaling.x *= -1;
                    }
                    }
                    
                    floVar="Yes";
                    }
                    
                    if(floNum>30 && floNum<=100){
                    floVar="No";
                    }
                    
                    
                    //Plants
                    
                    var pA = new BABYLON.StandardMaterial("plantA", scene);
                    pA.diffuseTexture = new BABYLON.Texture("./plants/plant1.png", scene);
                    pA.diffuseTexture.hasAlpha = true;
                    pA.backFaceCulling = false;
                    pA.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(15,27); i++) {
                      var planepA = BABYLON.MeshBuilder.CreatePlane("planepA", { width: 1, height: 1.4 }, scene);
                      planepA.material = pA;
                      planepA.width = 1;
                      planepA.height = 1.4;
                      planepA.position.x = fxrand() * 100 - 50;
                      planepA.position.z = fxrand() * 100 - 50;
                      planepA.position.y = 0.7;
                    if (Math.sqrt(Math.pow(planepA.position.x, 2) + Math.pow(planepA.position.z, 2)) < 10)
                    {planepA.dispose();}
                    if (pA.flip) {
                      planepA.scaling.x *= -1;
                    }
                    }
                    
                    var pC = new BABYLON.StandardMaterial("plantC", scene);
                    pC.diffuseTexture = new BABYLON.Texture("./plants/plant3.png", scene);
                    pC.diffuseTexture.hasAlpha = true;
                    pC.backFaceCulling = false;
                    pC.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(15,27); i++) {
                      var planepC = BABYLON.MeshBuilder.CreatePlane("planepC", { width: 1.5, height: 0.9 }, scene);
                      planepC.material = pC;
                      planepC.width = 1.5;
                      planepC.height = 0.9;
                      planepC.position.x = fxrand() * 100 - 50;
                      planepC.position.z = fxrand() * 100 - 50;
                      planepC.position.y = 0.45;
                    if (Math.sqrt(Math.pow(planepC.position.x, 2) + Math.pow(planepC.position.z, 2)) < 10)
                    {planepC.dispose();}
                    if (pC.flip) {
                      planepC.scaling.x *= -1;
                    }
                    }
                    
                    var pD = new BABYLON.StandardMaterial("plantD", scene);
                    pD.diffuseTexture = new BABYLON.Texture("./plants/plant4.png", scene);
                    pD.diffuseTexture.hasAlpha = true;
                    pD.backFaceCulling = false;
                    pD.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(15,27); i++) {
                      var planepD = BABYLON.MeshBuilder.CreatePlane("planepD", { width: 1.1, height: 2.15 }, scene);
                      planepD.material = pD;
                      planepD.width = 1.1;
                      planepD.height = 2.15;
                      planepD.position.x = fxrand() * 100 - 50;
                      planepD.position.z = fxrand() * 100 - 50;
                      planepD.position.y = 1.075;
                    if (Math.sqrt(Math.pow(planepD.position.x, 2) + Math.pow(planepD.position.z, 2)) < 10)
                    {planepD.dispose();}
                    if (pD.flip) {
                      planepD.scaling.x *= -1;
                    }
                    }
                    
                    
                    //Trees
                    
                    var tA = new BABYLON.StandardMaterial("treeA", scene);
                    tA.diffuseTexture = new BABYLON.Texture("./trees/tree1.png", scene);
                    tA.diffuseTexture.hasAlpha = true;
                    tA.backFaceCulling = false;
                    for (let i = 0; i < genR(14,22); i++) {
                      var planetA = BABYLON.MeshBuilder.CreatePlane("planetA", { width: 7, height: 12.8 }, scene);
                      planetA.material = tA;
                      planetA.width = 7;
                      planetA.height = 12.8;
                      planetA.position.x = fxrand() * 150 - 75;
                      planetA.position.z = fxrand() * 150 - 75;
                      planetA.position.y = 6.4;
                    if (Math.sqrt(Math.pow(planetA.position.x, 2) + Math.pow(planetA.position.z, 2)) < 45)
                    {planetA.dispose();}
                    }
                    
                    var tB = new BABYLON.StandardMaterial("treeB", scene);
                    tB.diffuseTexture = new BABYLON.Texture("./trees/tree2.png", scene);
                    tB.diffuseTexture.hasAlpha = true;
                    tB.backFaceCulling = false;
                    for (let i = 0; i < genR(10,14); i++) {
                      var planetB = BABYLON.MeshBuilder.CreatePlane("planetB", { width: 7, height: 18.6 }, scene);
                      planetB.material = tB;
                      planetB.width = 7;
                      planetB.height = 18.6;
                      planetB.position.x = fxrand() * 150 - 75;
                      planetB.position.z = fxrand() * 150 - 75;
                      planetB.position.y = 9.3;
                    if (Math.sqrt(Math.pow(planetB.position.x, 2) + Math.pow(planetB.position.z, 2)) < 45)
                    {planetB.dispose();}
                    }
                    
                    var tC = new BABYLON.StandardMaterial("treeC", scene);
                    tC.diffuseTexture = new BABYLON.Texture("./trees/tree3.png", scene);
                    tC.diffuseTexture.hasAlpha = true;
                    tC.backFaceCulling = false;
                    for (let i = 0; i < genR(12,20); i++) {
                      var planetC = BABYLON.MeshBuilder.CreatePlane("planetC", { width: 8, height: 17.2 }, scene);
                      planetC.material = tC;
                      planetC.width = 8;
                      planetC.height = 17.2;
                      planetC.position.x = fxrand() * 150 - 75;
                      planetC.position.z = fxrand() * 150 - 75;
                      planetC.position.y = 8.6;
                    if (Math.sqrt(Math.pow(planetC.position.x, 2) + Math.pow(planetC.position.z, 2)) < 45)
                    {planetC.dispose();}
                    }
                    
                    var tD = new BABYLON.StandardMaterial("treeD", scene);
                    tD.diffuseTexture = new BABYLON.Texture("./trees/tree4.png", scene);
                    tD.diffuseTexture.hasAlpha = true;
                    tD.backFaceCulling = false;
                    for (let i = 0; i < genR(8,15); i++) {
                      var planetD = BABYLON.MeshBuilder.CreatePlane("planetD", { width: 7, height: 15.4 }, scene);
                      planetD.material = tD;
                      planetD.width = 7;
                      planetD.height = 15.4;
                      planetD.position.x = fxrand() * 150 - 75;
                      planetD.position.z = fxrand() * 150 - 75;
                      planetD.position.y = 7.7;
                    if (Math.sqrt(Math.pow(planetD.position.x, 2) + Math.pow(planetD.position.z, 2)) < 45)
                    {planetD.dispose();}
                    }
                    
                    var tE = new BABYLON.StandardMaterial("treeE", scene);
                    tE.diffuseTexture = new BABYLON.Texture("./trees/tree5.png", scene);
                    tE.diffuseTexture.hasAlpha = true;
                    tE.backFaceCulling = false;
                    for (let i = 0; i < genR(4,11); i++) {
                      var planetE = BABYLON.MeshBuilder.CreatePlane("planetE", { width: 6, height: 12 }, scene);
                      planetE.material = tE;
                      planetE.width = 6;
                      planetE.height = 12;
                      planetE.position.x = fxrand() * 150 - 75;
                      planetE.position.z = fxrand() * 150 - 75;
                      planetE.position.y = 6;
                    if (Math.sqrt(Math.pow(planetE.position.x, 2) + Math.pow(planetE.position.z, 2)) < 45)
                    {planetE.dispose();}
                    }
                    
                    var tF = new BABYLON.StandardMaterial("treeF", scene);
                    tF.diffuseTexture = new BABYLON.Texture("./trees/tree6.png", scene);
                    tF.diffuseTexture.hasAlpha = true;
                    tF.backFaceCulling = false;
                    for (let i = 0; i < genR(5,11); i++) {
                      var planetF = BABYLON.MeshBuilder.CreatePlane("planetF", { width: 8, height: 16 }, scene);
                      planetF.material = tF;
                      planetF.width = 8;
                      planetF.height = 16;
                      planetF.position.x = fxrand() * 150 - 75;
                      planetF.position.z = fxrand() * 150 - 75;
                      planetF.position.y = 8;
                    if (Math.sqrt(Math.pow(planetF.position.x, 2) + Math.pow(planetF.position.z, 2)) < 45)
                    {planetF.dispose();}
                    }
                    
                    var tG = new BABYLON.StandardMaterial("treeG", scene);
                    tG.diffuseTexture = new BABYLON.Texture("./trees/tree7.png", scene);
                    tG.diffuseTexture.hasAlpha = true;
                    tG.backFaceCulling = false;
                    for (let i = 0; i < genR(7,13); i++) {
                      var planetG = BABYLON.MeshBuilder.CreatePlane("planetG", { width: 6, height: 12.6 }, scene);
                      planetG.material = tG;
                      planetG.width = 6;
                      planetG.height = 12.6;
                      planetG.position.x = fxrand() * 150 - 75;
                      planetG.position.z = fxrand() * 150 - 75;
                      planetG.position.y = 6.3;
                    if (Math.sqrt(Math.pow(planetG.position.x, 2) + Math.pow(planetG.position.z, 2)) < 45)
                    {planetG.dispose();}
                    }
                    
                    var tH = new BABYLON.StandardMaterial("treeH", scene);
                    tH.diffuseTexture = new BABYLON.Texture("./trees/tree8.png", scene);
                    tH.diffuseTexture.hasAlpha = true;
                    tH.backFaceCulling = false;
                    for (let i = 0; i < genR(3,11); i++) {
                      var planetH = BABYLON.MeshBuilder.CreatePlane("planetH", { width: 7, height: 15.4 }, scene);
                      planetH.material = tH;
                      planetH.width = 7;
                      planetH.height = 15.4;
                      planetH.position.x = fxrand() * 150 - 75;
                      planetH.position.z = fxrand() * 150 - 75;
                      planetH.position.y = 7.7;
                    if (Math.sqrt(Math.pow(planetH.position.x, 2) + Math.pow(planetH.position.z, 2)) < 45)
                    {planetH.dispose();}
                    }
                    
                    var tI = new BABYLON.StandardMaterial("treeI", scene);
                    tI.diffuseTexture = new BABYLON.Texture("./trees/tree9.png", scene);
                    tI.diffuseTexture.hasAlpha = true;
                    tI.backFaceCulling = false;
                    for (let i = 0; i < genR(10,18); i++) {
                      var planetI = BABYLON.MeshBuilder.CreatePlane("planetI", { width: 6, height: 13.8 }, scene);
                      planetI.material = tI;
                      planetI.width = 6;
                      planetI.height = 13.8;
                      planetI.position.x = fxrand() * 150 - 75;
                      planetI.position.z = fxrand() * 150 - 75;
                      planetI.position.y = 6.9;
                    if (Math.sqrt(Math.pow(planetI.position.x, 2) + Math.pow(planetI.position.z, 2)) < 45)
                    {planetI.dispose();}
                    }
                    
                    
                    //Mushrooms
                    
                    var mA = new BABYLON.StandardMaterial("mushroomA", scene);
                    mA.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom1.png", scene);
                    mA.diffuseTexture.hasAlpha = true;
                    mA.backFaceCulling = false;
                    for (let i = 0; i < genR(1,13); i++) {
                      var planemA = BABYLON.MeshBuilder.CreatePlane("planemA", { width: 0.25, height: 0.78 }, scene);
                      planemA.material = mA;
                      planemA.width = 0.25;
                      planemA.height = 0.78;
                      planemA.position.x = fxrand() * 80 - 40;
                      planemA.position.z = fxrand() * 80 - 40;
                      planemA.position.y = 0.39;
                    if (Math.sqrt(Math.pow(planemA.position.x, 2) + Math.pow(planemA.position.z, 2)) < 5)
                    {planemA.dispose();}
                    }
                    
                    var mB = new BABYLON.StandardMaterial("mushroomB", scene);
                    mB.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom2.png", scene);
                    mB.diffuseTexture.hasAlpha = true;
                    mB.backFaceCulling = false;
                    for (let i = 0; i < genR(1,13); i++) {
                      var planemB = BABYLON.MeshBuilder.CreatePlane("planemB", { width: 0.25, height: 0.6 }, scene);
                      planemB.material = mB;
                      planemB.width = 0.25;
                      planemB.height = 0.6;
                      planemB.position.x = fxrand() * 80 - 40;
                      planemB.position.z = fxrand() * 80 - 40;
                      planemB.position.y = 0.3;
                    if (Math.sqrt(Math.pow(planemB.position.x, 2) + Math.pow(planemB.position.z, 2)) < 5)
                    {planemB.dispose();}
                    }
                    
                    var mC = new BABYLON.StandardMaterial("mushroomC", scene);
                    mC.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom3.png", scene);
                    mC.diffuseTexture.hasAlpha = true;
                    mC.backFaceCulling = false;
                    for (let i = 0; i < genR(1,13); i++) {
                      var planemC = BABYLON.MeshBuilder.CreatePlane("planemC", { width: 0.4, height: 0.6 }, scene);
                      planemC.material = mC;
                      planemC.width = 0.4;
                      planemC.height = 0.6;
                      planemC.position.x = fxrand() * 80 - 40;
                      planemC.position.z = fxrand() * 80 - 40;
                      planemC.position.y = 0.3;
                    if (Math.sqrt(Math.pow(planemC.position.x, 2) + Math.pow(planemC.position.z, 2)) < 5)
                    {planemC.dispose();}
                    }
                    
                    var mD = new BABYLON.StandardMaterial("mushroomD", scene);
                    mD.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom4.png", scene);
                    mD.diffuseTexture.hasAlpha = true;
                    mD.backFaceCulling = false;
                    for (let i = 0; i < genR(1,13); i++) {
                      var planemD = BABYLON.MeshBuilder.CreatePlane("planemD", { width: 0.35, height: 0.6 }, scene);
                      planemD.material = mD;
                      planemD.width = 0.35;
                      planemD.height = 0.6;
                      planemD.position.x = fxrand() * 80 - 40;
                      planemD.position.z = fxrand() * 80 - 40;
                      planemD.position.y = 0.3;
                    if (Math.sqrt(Math.pow(planemD.position.x, 2) + Math.pow(planemD.position.z, 2)) < 5)
                    {planemD.dispose();}
                    }
                    
                    var mE = new BABYLON.StandardMaterial("mushroomE", scene);
                    mE.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom5.png", scene);
                    mE.diffuseTexture.hasAlpha = true;
                    mE.backFaceCulling = false;
                    for (let i = 0; i < genR(1,13); i++) {
                      var planemE = BABYLON.MeshBuilder.CreatePlane("planemE", { width: 0.4, height: 0.66 }, scene);
                      planemE.material = mE;
                      planemE.width = 0.4;
                      planemE.height = 0.66;
                      planemE.position.x = fxrand() * 80 - 40;
                      planemE.position.z = fxrand() * 80 - 40;
                      planemE.position.y = 0.33;
                    if (Math.sqrt(Math.pow(planemE.position.x, 2) + Math.pow(planemE.position.z, 2)) < 5)
                    {planemE.dispose();}
                    }
                    
                    var mF = new BABYLON.StandardMaterial("mushroomF", scene);
                    mF.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom6.png", scene);
                    mF.diffuseTexture.hasAlpha = true;
                    mF.backFaceCulling = false;
                    for (let i = 0; i < genR(1,13); i++) {
                      var planemF = BABYLON.MeshBuilder.CreatePlane("planemF", { width: 0.3, height: 0.66 }, scene);
                      planemF.material = mF;
                      planemF.width = 0.3;
                      planemF.height = 0.66;
                      planemF.position.x = fxrand() * 80 - 40;
                      planemF.position.z = fxrand() * 80 - 40;
                      planemF.position.y = 0.33;
                    if (Math.sqrt(Math.pow(planemF.position.x, 2) + Math.pow(planemF.position.z, 2)) < 5)
                    {planemF.dispose();}
                    }
                    
                    var mG = new BABYLON.StandardMaterial("mushroomG", scene);
                    mG.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom7.png", scene);
                    mG.diffuseTexture.hasAlpha = true;
                    mG.backFaceCulling = false;
                    for (let i = 0; i < genR(1,13); i++) {
                      var planemG = BABYLON.MeshBuilder.CreatePlane("planemG", { width: 0.5, height: 0.54 }, scene);
                      planemG.material = mG;
                      planemG.width = 0.5;
                      planemG.height = 0.54;
                      planemG.position.x = fxrand() * 80 - 40;
                      planemG.position.z = fxrand() * 80 - 40;
                      planemG.position.y = 0.27;
                    if (Math.sqrt(Math.pow(planemG.position.x, 2) + Math.pow(planemG.position.z, 2)) < 5)
                    {planemG.dispose();}
                    }
                    
                    var mH = new BABYLON.StandardMaterial("mushroomH", scene);
                    mH.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom8.png", scene);
                    mH.diffuseTexture.hasAlpha = true;
                    mH.backFaceCulling = false;
                    for (let i = 0; i < genR(1,13); i++) {
                      var planemH = BABYLON.MeshBuilder.CreatePlane("planemH", { width: 0.35, height: 0.54 }, scene);
                      planemH.material = mH;
                      planemH.width = 0.35;
                      planemH.height = 0.54;
                      planemH.position.x = fxrand() * 80 - 40;
                      planemH.position.z = fxrand() * 80 - 40;
                      planemH.position.y = 0.27;
                    if (Math.sqrt(Math.pow(planemH.position.x, 2) + Math.pow(planemH.position.z, 2)) < 5)
                    {planemH.dispose();}
                    }
                    
                    var mI = new BABYLON.StandardMaterial("mushroomI", scene);
                    mI.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom9.png", scene);
                    mI.diffuseTexture.hasAlpha = true;
                    mI.backFaceCulling = false;
                    for (let i = 0; i < genR(1,13); i++) {
                      var planemI = BABYLON.MeshBuilder.CreatePlane("planemI", { width: 0.4, height: 0.68 }, scene);
                      planemI.material = mI;
                      planemI.width = 0.4;
                      planemI.height = 0.68;
                      planemI.position.x = fxrand() * 80 - 40;
                      planemI.position.z = fxrand() * 80 - 40;
                      planemI.position.y = 0.34;
                    if (Math.sqrt(Math.pow(planemI.position.x, 2) + Math.pow(planemI.position.z, 2)) < 3)
                    {planemI.dispose();}
                    }
                    
                    var mJ = new BABYLON.StandardMaterial("mushroomJ", scene);
                    mJ.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom10.png", scene);
                    mJ.diffuseTexture.hasAlpha = true;
                    mJ.backFaceCulling = false;
                    for (let i = 0; i < genR(1,13); i++) {
                      var planemJ = BABYLON.MeshBuilder.CreatePlane("planemJ", { width: 0.4, height: 0.66 }, scene);
                      planemJ.material = mJ;
                      planemJ.width = 0.4;
                      planemJ.height = 0.66;
                      planemJ.position.x = fxrand() * 80 - 40;
                      planemJ.position.z = fxrand() * 80 - 40;
                      planemJ.position.y = 0.33;
                    if (Math.sqrt(Math.pow(planemJ.position.x, 2) + Math.pow(planemJ.position.z, 2)) < 3)
                    {planemJ.dispose();}
                    }
                    
                    var gA = new BABYLON.StandardMaterial("grassA", scene);
                    gA.diffuseTexture = new BABYLON.Texture("./grass/grass1.png", scene);
                    gA.diffuseTexture.hasAlpha = true;
                    gA.backFaceCulling = false;
                    gA.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(10,30); i++) {
                      var planegA = BABYLON.MeshBuilder.CreatePlane("planegA", { width: 0.35, height: 0.5 }, scene);
                      planegA.material = gA;
                      planegA.width = 0.35;
                      planegA.height = 0.5;
                      planegA.position.x = fxrand() * 80 - 40;
                      planegA.position.z = fxrand() * 80 - 40;
                      planegA.position.y = 0.25;
                    if (Math.sqrt(Math.pow(planegA.position.x, 2) + Math.pow(planegA.position.z, 2)) < 5)
                    {planegA.dispose();}
                      if (gA.flip) {
                      planegA.scaling.x *= -1;
                    }
                    }
                    
                    var gB = new BABYLON.StandardMaterial("grassB", scene);
                    gB.diffuseTexture = new BABYLON.Texture("./grass/grass2.png", scene);
                    gB.diffuseTexture.hasAlpha = true;
                    gB.backFaceCulling = false;
                    gB.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(10,30); i++) {
                      var planegB = BABYLON.MeshBuilder.CreatePlane("planegB", { width: 0.9, height: 1.25 }, scene);
                      planegB.material = gB;
                      planegB.width = 0.9;
                      planegB.height = 1.25;
                      planegB.position.x = fxrand() * 80 - 40;
                      planegB.position.z = fxrand() * 80 - 40;
                      planegB.position.y = 0.625;
                    if (Math.sqrt(Math.pow(planegB.position.x, 2) + Math.pow(planegB.position.z, 2)) < 10)
                    {planegB.dispose();}
                      if (gB.flip) {
                      planegB.scaling.x *= -1;
                    }
                    }
                    
                    var gD = new BABYLON.StandardMaterial("grassD", scene);
                    gD.diffuseTexture = new BABYLON.Texture("./grass/grass4.png", scene);
                    gD.diffuseTexture.hasAlpha = true;
                    gD.backFaceCulling = false;
                    gD.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(10,30); i++) {
                      var planegD = BABYLON.MeshBuilder.CreatePlane("planegD", { width: 0.8, height: 0.4 }, scene);
                      planegD.material = gD;
                      planegD.width = 0.8;
                      planegD.height = 0.4;
                      planegD.position.x = fxrand() * 80 - 40;
                      planegD.position.z = fxrand() * 80 - 40;
                      planegD.position.y = 0.2;
                    if (Math.sqrt(Math.pow(planegD.position.x, 2) + Math.pow(planegD.position.z, 2)) < 5)
                    {planegD.dispose();}
                      if (gD.flip) {
                      planegD.scaling.x *= -1;
                    }
                    }
                    
                    var gE = new BABYLON.StandardMaterial("grassE", scene);
                    gE.diffuseTexture = new BABYLON.Texture("./grass/grass5.png", scene);
                    gE.diffuseTexture.hasAlpha = true;
                    gE.backFaceCulling = false;
                    gE.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(10,30); i++) {
                      var planegE = BABYLON.MeshBuilder.CreatePlane("planegE", { width: 0.45, height: 0.65 }, scene);
                      planegE.material = gE;
                      planegE.width = 0.45;
                      planegE.height = 0.65;
                      planegE.position.x = fxrand() * 80 - 40;
                      planegE.position.z = fxrand() * 80 - 40;
                      planegE.position.y = 0.325;
                    if (Math.sqrt(Math.pow(planegE.position.x, 2) + Math.pow(planegE.position.z, 2)) < 5)
                    {planegE.dispose();}
                      if (gE.flip) {
                      planegE.scaling.x *= -1;
                    }
                    }
                    
                    
                    //Statues
                    
                    var stat1;
                    stat1=Math.round(genR(0,100));

                    if(stat1<=25){
                    var sA = new BABYLON.StandardMaterial("statueA1", scene);
                    sA.diffuseTexture = new BABYLON.Texture("./statues/statueA1.png", scene);
                    sA.diffuseTexture.hasAlpha = true;
                    sA.backFaceCulling = false;
                    sA.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(1,6); i++) {
                      var planesA = BABYLON.MeshBuilder.CreatePlane("planesA", { width: 3, height: 7 }, scene);
                      planesA.material = sA;
                      planesA.width = 3;
                      planesA.height = 7;
                      planesA.position.x = fxrand() * 100 - 50;
                      planesA.position.z = fxrand() * 100 - 50;
                      planesA.position.y = 3.5;
                    if (Math.sqrt(Math.pow(planesA.position.x, 2) + Math.pow(planesA.position.z, 2)) < 20)
                    {planesA.dispose();}
                    if (sA.flip) {
                      planesA.scaling.x *= -1;
                    }
                    }
                    }
                  
                    if(stat1>25 && stat1<=50){
                    var sA2 = new BABYLON.StandardMaterial("statueA2", scene);
                    sA2.diffuseTexture = new BABYLON.Texture("./statues/statueA2.png", scene);
                    sA2.diffuseTexture.hasAlpha = true;
                    sA2.backFaceCulling = false;
                    sA2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(1,6); i++) {
                      var planesA2 = BABYLON.MeshBuilder.CreatePlane("planesA2", { width: 2.95, height: 7 }, scene);
                      planesA2.material = sA2;
                      planesA2.width = 2.95;
                      planesA2.height = 7;
                      planesA2.position.x = fxrand() * 100 - 50;
                      planesA2.position.z = fxrand() * 100 - 50;
                      planesA2.position.y = 3.5;
                    if (Math.sqrt(Math.pow(planesA2.position.x, 2) + Math.pow(planesA2.position.z, 2)) < 20)
                    {planesA2.dispose();}
                    if (sA2.flip) {
                      planesA2.scaling.x *= -1;
                    }
                    }
                    }
                    
                    if(stat1>50 && stat1<=75){
                    var sA3 = new BABYLON.StandardMaterial("statueA3", scene);
                    sA3.diffuseTexture = new BABYLON.Texture("./statues/statueA3.png", scene);
                    sA3.diffuseTexture.hasAlpha = true;
                    sA3.backFaceCulling = false;
                    sA3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(1,6); i++) {
                      var planesA3 = BABYLON.MeshBuilder.CreatePlane("planesA3", { width: 2.94, height: 7 }, scene);
                      planesA3.material = sA3;
                      planesA3.width = 2.94;
                      planesA3.height = 7;
                      planesA3.position.x = fxrand() * 100 - 50;
                      planesA3.position.z = fxrand() * 100 - 50;
                      planesA3.position.y = 3.5;
                    if (Math.sqrt(Math.pow(planesA3.position.x, 2) + Math.pow(planesA3.position.z, 2)) < 20)
                    {planesA3.dispose();}
                    if (sA3.flip) {
                      planesA3.scaling.x *= -1;
                    }
                    }
                    }
                    
                    if(stat1>75 && stat1<=100){
                    }
                    
                    
                    var stat2;
                    stat2=Math.round(genR(0,100));

                    if(stat2<=25){
                    var sC1 = new BABYLON.StandardMaterial("statueC1", scene);
                    sC1.diffuseTexture = new BABYLON.Texture("./statues/statueC1.png", scene);
                    sC1.diffuseTexture.hasAlpha = true;
                    sC1.backFaceCulling = false;
                    sC1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(1,6); i++) {
                      var planesC1 = BABYLON.MeshBuilder.CreatePlane("planesC1", { width: 5, height: 8 }, scene);
                      planesC1.material = sC1;
                      planesC1.width = 5;
                      planesC1.height = 8;
                      planesC1.position.x = fxrand() * 100 - 50;
                      planesC1.position.z = fxrand() * 100 - 50;
                      planesC1.position.y = 4;
                    if (Math.sqrt(Math.pow(planesC1.position.x, 2) + Math.pow(planesC1.position.z, 2)) < 20)
                    {planesC1.dispose();}
                    if (sC1.flip) {
                      planesC1.scaling.x *= -1;
                    }
                    }
                    }
                  
                    if(stat2>25 && stat2<=50){
                    var sC2 = new BABYLON.StandardMaterial("statueC2", scene);
                    sC2.diffuseTexture = new BABYLON.Texture("./statues/statueC2.png", scene);
                    sC2.diffuseTexture.hasAlpha = true;
                    sC2.backFaceCulling = false;
                    sC2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(1,6); i++) {
                      var planesC2 = BABYLON.MeshBuilder.CreatePlane("planesC2", { width: 4.4, height: 8 }, scene);
                      planesC2.material = sC2;
                      planesC2.width = 4.4;
                      planesC2.height = 8;
                      planesC2.position.x = fxrand() * 100 - 50;
                      planesC2.position.z = fxrand() * 100 - 50;
                      planesC2.position.y = 4;
                    if (Math.sqrt(Math.pow(planesC2.position.x, 2) + Math.pow(planesC2.position.z, 2)) < 20)
                    {planesC2.dispose();}
                    if (sC2.flip) {
                      planesC2.scaling.x *= -1;
                    }
                    }
                    }
                    
                    if(stat2>50 && stat2<=75){
                    var sC3 = new BABYLON.StandardMaterial("statueC3", scene);
                    sC3.diffuseTexture = new BABYLON.Texture("./statues/statueC3.png", scene);
                    sC3.diffuseTexture.hasAlpha = true;
                    sC3.backFaceCulling = false;
                    sC3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(1,6); i++) {
                      var planesC3 = BABYLON.MeshBuilder.CreatePlane("planesC3", { width: 4.4, height: 8 }, scene);
                      planesC3.material = sC3;
                      planesC3.width = 4.4;
                      planesC3.height = 8;
                      planesC3.position.x = fxrand() * 100 - 50;
                      planesC3.position.z = fxrand() * 100 - 50;
                      planesC3.position.y = 4;
                    if (Math.sqrt(Math.pow(planesC3.position.x, 2) + Math.pow(planesC3.position.z, 2)) < 20)
                    {planesC3.dispose();}
                    if (sC3.flip) {
                      planesC3.scaling.x *= -1;
                    }
                    }
                    }
                    
                    if(stat2>75 && stat2<=100){
                    }

                    
                    var stat3;
                    stat3=Math.round(genR(0,100));

                    if(stat3<=25){
                    var sB = new BABYLON.StandardMaterial("statueB", scene);
                    sB.diffuseTexture = new BABYLON.Texture("./statues/statueB1.png", scene);
                    sB.diffuseTexture.hasAlpha = true;
                    sB.backFaceCulling = false;
                    sB.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(1,6); i++) {
                      var planesB = BABYLON.MeshBuilder.CreatePlane("planesB", { width: 3, height: 8.2 }, scene);
                      planesB.material = sB;
                      planesB.width = 3;
                      planesB.height = 8.2;
                      planesB.position.x = fxrand() * 100 - 50;
                      planesB.position.z = fxrand() * 100 - 50;
                      planesB.position.y = 4.1;
                    if (Math.sqrt(Math.pow(planesB.position.x, 2) + Math.pow(planesB.position.z, 2)) < 20)
                    {planesB.dispose();}
                    if (sB.flip) {
                      planesB.scaling.x *= -1;
                    }
                    }
                    }
                    
                    if(stat3>25 && stat3<=50){
                    var sB2 = new BABYLON.StandardMaterial("statueB2", scene);
                    sB2.diffuseTexture = new BABYLON.Texture("./statues/statueB2.png", scene);
                    sB2.diffuseTexture.hasAlpha = true;
                    sB2.backFaceCulling = false;
                    sB2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(1,6); i++) {
                      var planesB2 = BABYLON.MeshBuilder.CreatePlane("planesB2", { width: 5, height: 10 }, scene);
                      planesB2.material = sB2;
                      planesB2.width = 5;
                      planesB2.height = 10;
                      planesB2.position.x = fxrand() * 100 - 50;
                      planesB2.position.z = fxrand() * 100 - 50;
                      planesB2.position.y = 5;
                    if (Math.sqrt(Math.pow(planesB2.position.x, 2) + Math.pow(planesB2.position.z, 2)) < 20)
                    {planesB2.dispose();}
                    if (sB2.flip) {
                      planesB2.scaling.x *= -1;
                    }
                    }
                    }
                    
                    if(stat3>50 && stat3<=75){
                    var sB3 = new BABYLON.StandardMaterial("statueB3", scene);
                    sB3.diffuseTexture = new BABYLON.Texture("./statues/statueB3.png", scene);
                    sB3.diffuseTexture.hasAlpha = true;
                    sB3.backFaceCulling = false;
                    sB3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(1,6); i++) {
                      var planesB3 = BABYLON.MeshBuilder.CreatePlane("planesB3", { width: 4.95, height: 10 }, scene);
                      planesB3.material = sB3;
                      planesB3.width = 4.95;
                      planesB3.height = 10;
                      planesB3.position.x = fxrand() * 100 - 50;
                      planesB3.position.z = fxrand() * 100 - 50;
                      planesB3.position.y = 5;
                    if (Math.sqrt(Math.pow(planesB3.position.x, 2) + Math.pow(planesB3.position.z, 2)) < 20)
                    {planesB3.dispose();}
                    if (sB3.flip) {
                      planesB3.scaling.x *= -1;
                    }
                    }
                    }
                    
                    if(stat3>75 && stat3<=100){
                    }
                    
                     
                    var stat4;
                    stat4=Math.round(genR(0,100));

                    if(stat4<=25){
                    var sD1 = new BABYLON.StandardMaterial("statueD1", scene);
                    sD1.diffuseTexture = new BABYLON.Texture("./statues/statueD1.png", scene);
                    sD1.diffuseTexture.hasAlpha = true;
                    sD1.backFaceCulling = false;
                    sD1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(1,6); i++) {
                      var planesD1 = BABYLON.MeshBuilder.CreatePlane("planesD1", { width: 2.55, height: 6 }, scene);
                      planesD1.material = sD1;
                      planesD1.width = 2.55;
                      planesD1.height = 6;
                      planesD1.position.x = fxrand() * 100 - 50;
                      planesD1.position.z = fxrand() * 100 - 50;
                      planesD1.position.y = 3;
                    if (Math.sqrt(Math.pow(planesD1.position.x, 2) + Math.pow(planesD1.position.z, 2)) < 20)
                    {planesD1.dispose();}
                    if (sD1.flip) {
                      planesD1.scaling.x *= -1;
                    }
                    }
                    }
                    
                    if(stat4>25 && stat4<=50){
                    var sD2 = new BABYLON.StandardMaterial("statueD2", scene);
                    sD2.diffuseTexture = new BABYLON.Texture("./statues/statueD2.png", scene);
                    sD2.diffuseTexture.hasAlpha = true;
                    sD2.backFaceCulling = false;
                    sD2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(1,6); i++) {
                      var planesD2 = BABYLON.MeshBuilder.CreatePlane("planesD2", { width: 3.33, height: 7 }, scene);
                      planesD2.material = sD2;
                      planesD2.width = 3.33;
                      planesD2.height = 7;
                      planesD2.position.x = fxrand() * 100 - 50;
                      planesD2.position.z = fxrand() * 100 - 50;
                      planesD2.position.y = 3.5;
                    if (Math.sqrt(Math.pow(planesD2.position.x, 2) + Math.pow(planesD2.position.z, 2)) < 20)
                    {planesD2.dispose();}
                    if (sD2.flip) {
                      planesD2.scaling.x *= -1;
                    }
                    }
                    }
                    
                    if(stat4>50 && stat4<=75){
                    var sD3 = new BABYLON.StandardMaterial("statueD3", scene);
                    sD3.diffuseTexture = new BABYLON.Texture("./statues/statueD3.png", scene);
                    sD3.diffuseTexture.hasAlpha = true;
                    sD3.backFaceCulling = false;
                    sD3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(1,6); i++) {
                      var planesD3 = BABYLON.MeshBuilder.CreatePlane("planesD3", { width: 3.37, height: 7 }, scene);
                      planesD3.material = sD3;
                      planesD3.width = 3.37;
                      planesD3.height = 7;
                      planesD3.position.x = fxrand() * 100 - 50;
                      planesD3.position.z = fxrand() * 100 - 50;
                      planesD3.position.y = 3.5;
                    if (Math.sqrt(Math.pow(planesD3.position.x, 2) + Math.pow(planesD3.position.z, 2)) < 20)
                    {planesD3.dispose();}
                    if (sD3.flip) {
                      planesD3.scaling.x *= -1;
                    }
                    }
                    }
                    
                    if(stat4>75 && stat4<=100){
                    }
                    
                    
                    //Arches
                    
                    var arcNum;
                    var arcVar;

                    arcNum=Math.round(genR(0,100));
                    
                    if(arcNum<=20){
                    var arc1 = new BABYLON.StandardMaterial("arch1", scene);
                    arc1.diffuseTexture = new BABYLON.Texture("./elements/arch1.png", scene);
                    arc1.diffuseTexture.hasAlpha = true;
                    arc1.backFaceCulling = false;
                    arc1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                      var planearc1 = BABYLON.MeshBuilder.CreatePlane("planearc1", { width: 6.82, height: 10 }, scene);
                      planearc1.material = arc1;
                      planearc1.width = 6.82;
                      planearc1.height = 10;
                      planearc1.position.x = fxrand() * 60 - 30;
                      planearc1.position.z = fxrand() * 60 - 30;
                      planearc1.position.y = 5;
                    if (Math.sqrt(Math.pow(planearc1.position.x, 2) + Math.pow(planearc1.position.z, 2)) < 20)
                    {planearc1.dispose();}
                    if (arc1.flip) {
                      planearc1.scaling.x *= -1;
                    }
                    }
                    arcVar="Tudor";
                    }
                    
                    if(arcNum>20 && arcNum<=40){
                    var arc2 = new BABYLON.StandardMaterial("arch2", scene);
                    arc2.diffuseTexture = new BABYLON.Texture("./elements/arch2.png", scene);
                    arc2.diffuseTexture.hasAlpha = true;
                    arc2.backFaceCulling = false;
                    arc2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                      var planearc2 = BABYLON.MeshBuilder.CreatePlane("planearc2", { width: 6, height: 10 }, scene);
                      planearc2.material = arc2;
                      planearc2.width = 6;
                      planearc2.height = 10;
                      planearc2.position.x = fxrand() * 60 - 30;
                      planearc2.position.z = fxrand() * 60 - 30;
                      planearc2.position.y = 5;
                    if (Math.sqrt(Math.pow(planearc2.position.x, 2) + Math.pow(planearc2.position.z, 2)) < 20)
                    {planearc2.dispose();}
                    if (arc2.flip) {
                      planearc2.scaling.x *= -1;
                    }
                    }
                    arcVar="Basket";
                    }
                    
                    if(arcNum>40 && arcNum<=60){
                    var arc3 = new BABYLON.StandardMaterial("arch3", scene);
                    arc3.diffuseTexture = new BABYLON.Texture("./elements/arch3.png", scene);
                    arc3.diffuseTexture.hasAlpha = true;
                    arc3.backFaceCulling = false;
                    arc3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                      var planearc3 = BABYLON.MeshBuilder.CreatePlane("planearc3", { width: 7.72, height: 10 }, scene);
                      planearc3.material = arc3;
                      planearc3.width = 7.72;
                      planearc3.height = 10;
                      planearc3.position.x = fxrand() * 60 - 30;
                      planearc3.position.z = fxrand() * 60 - 30;
                      planearc3.position.y = 5;
                    if (Math.sqrt(Math.pow(planearc3.position.x, 2) + Math.pow(planearc3.position.z, 2)) < 20)
                    {planearc3.dispose();}
                    if (arc3.flip) {
                      planearc3.scaling.x *= -1;
                    }
                    }
                    arcVar="Round";
                    }
                    
                    if(arcNum>60 && arcNum<=80){
                    var arc4 = new BABYLON.StandardMaterial("arch4", scene);
                    arc4.diffuseTexture = new BABYLON.Texture("./elements/arch4.png", scene);
                    arc4.diffuseTexture.hasAlpha = true;
                    arc4.backFaceCulling = false;
                    arc4.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                      var planearc4 = BABYLON.MeshBuilder.CreatePlane("planearc4", { width: 8.96, height: 10 }, scene);
                      planearc4.material = arc4;
                      planearc4.width = 8.96;
                      planearc4.height = 10;
                      planearc4.position.x = fxrand() * 60 - 30;
                      planearc4.position.z = fxrand() * 60 - 30;
                      planearc4.position.y = 5;
                    if (Math.sqrt(Math.pow(planearc4.position.x, 2) + Math.pow(planearc4.position.z, 2)) < 20)
                    {planearc4.dispose();}
                    if (arc4.flip) {
                      planearc4.scaling.x *= -1;
                    }
                    }
                    arcVar="Stone";
                    }

                    if(arcNum>80 && arcNum<=100){
                    var arc5 = new BABYLON.StandardMaterial("arch5", scene);
                    arc5.diffuseTexture = new BABYLON.Texture("./elements/arch5.png", scene);
                    arc5.diffuseTexture.hasAlpha = true;
                    arc5.backFaceCulling = false;
                    arc5.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                      var planearc5 = BABYLON.MeshBuilder.CreatePlane("planearc5", { width: 11.52, height: 10 }, scene);
                      planearc5.material = arc5;
                      planearc5.width = 11.52;
                      planearc5.height = 10;
                      planearc5.position.x = fxrand() * 60 - 30;
                      planearc5.position.z = fxrand() * 60 - 30;
                      planearc5.position.y = 5;
                    if (Math.sqrt(Math.pow(planearc5.position.x, 2) + Math.pow(planearc5.position.z, 2)) < 20)
                    {planearc5.dispose();}
                    if (arc5.flip) {
                      planearc5.scaling.x *= -1;
                    }
                    }
                    arcVar="Parabolic";
                    }
                    
                    
                    //Tech
                    
                    var tech1;
                    tech1=Math.round(genR(0,75));

                    if(tech1<=25){
                    var tec1 = new BABYLON.StandardMaterial("booth1", scene);
                    tec1.diffuseTexture = new BABYLON.Texture("./elements/booth1.png", scene);
                    tec1.diffuseTexture.hasAlpha = true;
                    tec1.backFaceCulling = false;
                    tec1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,7); i++) {
                      var planetec1 = BABYLON.MeshBuilder.CreatePlane("planetec1", { width: 0.69, height: 3 }, scene);
                      planetec1.material = tec1;
                      planetec1.width = 0.69;
                      planetec1.height = 3;
                      planetec1.position.x = fxrand() * 100 - 50;
                      planetec1.position.z = fxrand() * 100 - 50;
                      planetec1.position.y = 1.5;
                    if (Math.sqrt(Math.pow(planetec1.position.x, 2) + Math.pow(planetec1.position.z, 2)) < 10)
                    {planetec1.dispose();}
                    if (tec1.flip) {
                      planetec1.scaling.x *= -1;
                    }
                    }
                    }
                    
                    if(tech1>25 && tech1<=50){
                    var tec2 = new BABYLON.StandardMaterial("booth2", scene);
                    tec2.diffuseTexture = new BABYLON.Texture("./elements/booth2.png", scene);
                    tec2.diffuseTexture.hasAlpha = true;
                    tec2.backFaceCulling = false;
                    tec2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,7); i++) {
                      var planetec2 = BABYLON.MeshBuilder.CreatePlane("planetec2", { width: 0.62, height: 3.2 }, scene);
                      planetec2.material = tec2;
                      planetec2.width = 0.62;
                      planetec2.height = 3.2;
                      planetec2.position.x = fxrand() * 100 - 50;
                      planetec2.position.z = fxrand() * 100 - 50;
                      planetec2.position.y = 1.6;
                    if (Math.sqrt(Math.pow(planetec2.position.x, 2) + Math.pow(planetec2.position.z, 2)) < 10)
                    {planetec2.dispose();}
                    if (tec2.flip) {
                      planetec2.scaling.x *= -1;
                    }
                    }
                    }
                                    
                    if(tech1>50 && tech1<=75){
                    }
                    
                    
                    var tech2;
                    tech2=Math.round(genR(0,75));

                    if(tech2<=25){
                    var tec3 = new BABYLON.StandardMaterial("booth3", scene);
                    tec3.diffuseTexture = new BABYLON.Texture("./elements/booth3.png", scene);
                    tec3.diffuseTexture.hasAlpha = true;
                    tec3.backFaceCulling = false;
                    tec3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,7); i++) {
                      var planetec3 = BABYLON.MeshBuilder.CreatePlane("planetec3", { width: 0.84, height: 3 }, scene);
                      planetec3.material = tec3;
                      planetec3.width = 0.84;
                      planetec3.height = 3;
                      planetec3.position.x = fxrand() * 100 - 50;
                      planetec3.position.z = fxrand() * 100 - 50;
                      planetec3.position.y = 1.5;
                    if (Math.sqrt(Math.pow(planetec3.position.x, 2) + Math.pow(planetec3.position.z, 2)) < 10)
                    {planetec3.dispose();}
                    if (tec3.flip) {
                      planetec3.scaling.x *= -1;
                    }
                    }
                    }
                    
                    if(tech2>25 && tech2<=50){
                    var tec4 = new BABYLON.StandardMaterial("booth4", scene);
                    tec4.diffuseTexture = new BABYLON.Texture("./elements/booth4.png", scene);
                    tec4.diffuseTexture.hasAlpha = true;
                    tec4.backFaceCulling = false;
                    tec4.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,7); i++) {
                      var planetec4 = BABYLON.MeshBuilder.CreatePlane("planetec4", { width: 0.72, height: 3.2 }, scene);
                      planetec4.material = tec4;
                      planetec4.width = 0.72;
                      planetec4.height = 3.2;
                      planetec4.position.x = fxrand() * 100 - 50;
                      planetec4.position.z = fxrand() * 100 - 50;
                      planetec4.position.y = 1.6;
                    if (Math.sqrt(Math.pow(planetec4.position.x, 2) + Math.pow(planetec4.position.z, 2)) < 10)
                    {planetec4.dispose();}
                    if (tec4.flip) {
                      planetec4.scaling.x *= -1;
                    }
                    }
                    }
                                    
                    if(tech2>50 && tech2<=75){
                    }
                    

                    var tech3;
                    tech3=Math.round(genR(0,75));

                    if(tech3<=25){
                    var tec5 = new BABYLON.StandardMaterial("booth5", scene);
                    tec5.diffuseTexture = new BABYLON.Texture("./elements/booth5.png", scene);
                    tec5.diffuseTexture.hasAlpha = true;
                    tec5.backFaceCulling = false;
                    tec5.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,7); i++) {
                      var planetec5 = BABYLON.MeshBuilder.CreatePlane("planetec5", { width: 0.64, height: 3 }, scene);
                      planetec5.material = tec5;
                      planetec5.width = 0.64;
                      planetec5.height = 3;
                      planetec5.position.x = fxrand() * 100 - 50;
                      planetec5.position.z = fxrand() * 100 - 50;
                      planetec5.position.y = 1.5;
                    if (Math.sqrt(Math.pow(planetec5.position.x, 2) + Math.pow(planetec5.position.z, 2)) < 10)
                    {planetec5.dispose();}
                    if (tec5.flip) {
                      planetec5.scaling.x *= -1;
                    }
                    }
                    }
                    
                    if(tech3>25 && tech3<=50){
                    var tec6 = new BABYLON.StandardMaterial("booth6", scene);
                    tec6.diffuseTexture = new BABYLON.Texture("./elements/booth6.png", scene);
                    tec6.diffuseTexture.hasAlpha = true;
                    tec6.backFaceCulling = false;
                    tec6.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,7); i++) {
                      var planetec6 = BABYLON.MeshBuilder.CreatePlane("planetec6", { width: 1.16, height: 2.5 }, scene);
                      planetec6.material = tec6;
                      planetec6.width = 1.16;
                      planetec6.height = 2.5;
                      planetec6.position.x = fxrand() * 100 - 50;
                      planetec6.position.z = fxrand() * 100 - 50;
                      planetec6.position.y = 1.25;
                    if (Math.sqrt(Math.pow(planetec6.position.x, 2) + Math.pow(planetec6.position.z, 2)) < 10)
                    {planetec6.dispose();}
                    if (tec6.flip) {
                      planetec6.scaling.x *= -1;
                    }
                    }
                    }
                                    
                    if(tech3>50 && tech3<=75){
                    }
                    
                    
                    var tech4;
                    tech4=Math.round(genR(0,75));

                    if(tech4<=25){
                    var tec7 = new BABYLON.StandardMaterial("post1", scene);
                    tec7.diffuseTexture = new BABYLON.Texture("./elements/post1.png", scene);
                    tec7.diffuseTexture.hasAlpha = true;
                    tec7.backFaceCulling = false;
                    tec7.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,7); i++) {
                      var planetec7 = BABYLON.MeshBuilder.CreatePlane("planetec7", { width: 0.5, height: 3 }, scene);
                      planetec7.material = tec7;
                      planetec7.width = 0.5;
                      planetec7.height = 3;
                      planetec7.position.x = fxrand() * 100 - 50;
                      planetec7.position.z = fxrand() * 100 - 50;
                      planetec7.position.y = 1.5;
                    if (Math.sqrt(Math.pow(planetec7.position.x, 2) + Math.pow(planetec7.position.z, 2)) < 10)
                    {planetec7.dispose();}
                    if (tec7.flip) {
                      planetec7.scaling.x *= -1;
                    }
                    }
                    }
                    
                    if(tech4>25 && tech4<=50){
                    var tec8 = new BABYLON.StandardMaterial("post2", scene);
                    tec8.diffuseTexture = new BABYLON.Texture("./elements/post2.png", scene);
                    tec8.diffuseTexture.hasAlpha = true;
                    tec8.backFaceCulling = false;
                    tec8.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,7); i++) {
                      var planetec8 = BABYLON.MeshBuilder.CreatePlane("planetec8", { width: 0.71, height: 2.5 }, scene);
                      planetec8.material = tec8;
                      planetec8.width = 0.71;
                      planetec8.height = 2.5;
                      planetec8.position.x = fxrand() * 100 - 50;
                      planetec8.position.z = fxrand() * 100 - 50;
                      planetec8.position.y = 1.25;
                    if (Math.sqrt(Math.pow(planetec8.position.x, 2) + Math.pow(planetec8.position.z, 2)) < 10)
                    {planetec8.dispose();}
                    if (tec8.flip) {
                      planetec8.scaling.x *= -1;
                    }
                    }
                    }
                                    
                    if(tech4>50 && tech4<=75){
                    }
                    
                    
                    var tech5;
                    tech5=Math.round(genR(0,75));

                    if(tech5<=25){
                    var tec9 = new BABYLON.StandardMaterial("post3", scene);
                    tec9.diffuseTexture = new BABYLON.Texture("./elements/post3.png", scene);
                    tec9.diffuseTexture.hasAlpha = true;
                    tec9.backFaceCulling = false;
                    tec9.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,7); i++) {
                      var planetec9 = BABYLON.MeshBuilder.CreatePlane("planetec9", { width: 0.81, height: 3 }, scene);
                      planetec9.material = tec9;
                      planetec9.width = 0.81;
                      planetec9.height = 3;
                      planetec9.position.x = fxrand() * 100 - 50;
                      planetec9.position.z = fxrand() * 100 - 50;
                      planetec9.position.y = 1.5;
                    if (Math.sqrt(Math.pow(planetec9.position.x, 2) + Math.pow(planetec9.position.z, 2)) < 10)
                    {planetec9.dispose();}
                    if (tec9.flip) {
                      planetec9.scaling.x *= -1;
                    }
                    }
                    }
                    
                    if(tech5>25 && tech5<=50){
                    var tec10 = new BABYLON.StandardMaterial("post4", scene);
                    tec10.diffuseTexture = new BABYLON.Texture("./elements/post4.png", scene);
                    tec10.diffuseTexture.hasAlpha = true;
                    tec10.backFaceCulling = false;
                    tec10.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,7); i++) {
                      var planetec10 = BABYLON.MeshBuilder.CreatePlane("planetec10", { width: 1.05, height: 2.5 }, scene);
                      planetec10.material = tec10;
                      planetec10.width = 1.05;
                      planetec10.height = 2.5;
                      planetec10.position.x = fxrand() * 100 - 50;
                      planetec10.position.z = fxrand() * 100 - 50;
                      planetec10.position.y = 1.25;
                    if (Math.sqrt(Math.pow(planetec10.position.x, 2) + Math.pow(planetec10.position.z, 2)) < 10)
                    {planetec10.dispose();}
                    if (tec10.flip) {
                      planetec10.scaling.x *= -1;
                    }
                    }
                    }
                                    
                    if(tech5>50 && tech5<=75){
                    }
                    
                    
                    var tech6;
                    tech6=Math.round(genR(0,75));

                    if(tech6<=25){
                    var tec11 = new BABYLON.StandardMaterial("post5", scene);
                    tec11.diffuseTexture = new BABYLON.Texture("./elements/post5.png", scene);
                    tec11.diffuseTexture.hasAlpha = true;
                    tec11.backFaceCulling = false;
                    tec11.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,7); i++) {
                      var planetec11 = BABYLON.MeshBuilder.CreatePlane("planetec11", { width: 0.77, height: 4 }, scene);
                      planetec11.material = tec11;
                      planetec11.width = 0.77;
                      planetec11.height = 4;
                      planetec11.position.x = fxrand() * 100 - 50;
                      planetec11.position.z = fxrand() * 100 - 50;
                      planetec11.position.y = 2;
                    if (Math.sqrt(Math.pow(planetec11.position.x, 2) + Math.pow(planetec11.position.z, 2)) < 10)
                    {planetec11.dispose();}
                    if (tec11.flip) {
                      planetec11.scaling.x *= -1;
                    }
                    }
                    }
                    
                    if(tech6>25 && tech6<=50){
                    var tec12 = new BABYLON.StandardMaterial("post6", scene);
                    tec12.diffuseTexture = new BABYLON.Texture("./elements/post6.png", scene);
                    tec12.diffuseTexture.hasAlpha = true;
                    tec12.backFaceCulling = false;
                    tec12.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(2,7); i++) {
                      var planetec12 = BABYLON.MeshBuilder.CreatePlane("planetec12", { width: 0.95, height: 4.5 }, scene);
                      planetec12.material = tec12;
                      planetec12.width = 0.95;
                      planetec12.height = 4.5;
                      planetec12.position.x = fxrand() * 100 - 50;
                      planetec12.position.z = fxrand() * 100 - 50;
                      planetec12.position.y = 2.25;
                    if (Math.sqrt(Math.pow(planetec12.position.x, 2) + Math.pow(planetec12.position.z, 2)) < 10)
                    {planetec12.dispose();}
                    if (tec12.flip) {
                      planetec12.scaling.x *= -1;
                    }
                    }
                    }
                                    
                    if(tech6>50 && tech6<=75){
                    }
                    
                    
                    //Characters
                    
                    var elem1;
                    elem1=Math.round(genR(0,200));

                    if(elem1<=40){
                    var spriteManager = new BABYLON.SpriteManager("spriteManager", "elements/tipo1.png", 7, {width: 189, height: 500}, scene);
                    spriteManager.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite = new BABYLON.Sprite("sprite", spriteManager);
                    sprite.playAnimation(0, 4, true, animationSpeed);
                    sprite.width = 1.32;
                    sprite.height = 3.5;
                    sprite.position.x = fxrand() * 40 - 20;
                    sprite.position.z = fxrand() * 40 - 20;
                    sprite.position.y = 1.75;
                    if (Math.sqrt(Math.pow(sprite.position.x, 2) + Math.pow(sprite.position.z, 2)) < 8)
                    {sprite.dispose();}
                    if (spriteManager.flip) {
                    sprite.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });  
                    }
                  
                    if(elem1>40 && elem1<=80){
                    var spriteManager2 = new BABYLON.SpriteManager("spriteManager2", "elements/tipo2.png", 7, {width: 192, height: 500}, scene);
                    spriteManager2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite2 = new BABYLON.Sprite("sprite2", spriteManager2);
                    sprite2.playAnimation(0, 4, true, animationSpeed);
                    sprite2.width = 1.14;
                    sprite2.height = 3;
                    sprite2.position.x = fxrand() * 40 - 20;
                    sprite2.position.z = fxrand() * 40 - 20;
                    sprite2.position.y = 1.5;
                    if (Math.sqrt(Math.pow(sprite2.position.x, 2) + Math.pow(sprite2.position.z, 2)) < 8)
                    {sprite2.dispose();}
                    if (spriteManager2.flip) {
                    sprite2.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem1>80 && elem1<=200){
                    }
                    
                    
                    var elem2;
                    elem2=Math.round(genR(0,200));

                    if(elem2<=40){
                    var spriteManager1 = new BABYLON.SpriteManager("spriteManager1", "elements/virgen.png", 7, {width: 204, height: 500}, scene);
                    spriteManager1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite1 = new BABYLON.Sprite("sprite1", spriteManager1);
                    sprite1.playAnimation(0, 4, true, animationSpeed);
                    sprite1.width = 1.13;
                    sprite1.height = 2.8;
                    sprite1.position.x = fxrand() * 40 - 20;
                    sprite1.position.z = fxrand() * 40 - 20;
                    sprite1.position.y = 1.4;
                    if (Math.sqrt(Math.pow(sprite1.position.x, 2) + Math.pow(sprite1.position.z, 2)) < 8)
                    {sprite1.dispose();}
                    if (spriteManager1.flip) {
                    sprite1.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                  
                    if(elem2>40 && elem2<=80){
                    var spriteManager20 = new BABYLON.SpriteManager("spriteManager20", "elements/nun2.png", 7, {width: 205, height: 500}, scene);
                    spriteManager20.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite20 = new BABYLON.Sprite("sprite20", spriteManager20);
                    sprite20.playAnimation(0, 4, true, animationSpeed);
                    sprite20.width = 1.06;
                    sprite20.height = 2.6;
                    sprite20.position.x = fxrand() * 40 - 20;
                    sprite20.position.z = fxrand() * 40 - 20;
                    sprite20.position.y = 1.3;
                    if (Math.sqrt(Math.pow(sprite20.position.x, 2) + Math.pow(sprite20.position.z, 2)) < 8)
                    {sprite20.dispose();}
                    if (spriteManager20.flip) {
                    sprite20.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem2>80 && elem2<=200){
                    }
                    
                    
                    var elem3;
                    elem3=Math.round(genR(0,200));

                    if(elem3<=40){
                    var spriteManager3 = new BABYLON.SpriteManager("spriteManager3", "elements/back1.png", 20, {width: 157, height: 500}, scene);
                    spriteManager3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite3 = new BABYLON.Sprite("sprite3", spriteManager3);
                    sprite3.playAnimation(0, 4, true, animationSpeed);
                    sprite3.width = 0.93;
                    sprite3.height = 3;
                    sprite3.position.x = fxrand() * 40 - 20;
                    sprite3.position.z = fxrand() * 40 - 20;
                    sprite3.position.y = 1.5;
                    if (Math.sqrt(Math.pow(sprite3.position.x, 2) + Math.pow(sprite3.position.z, 2)) < 8)
                    {sprite3.dispose();}
                    if (spriteManager3.flip) {
                    sprite3.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                  
                    if(elem3>40 && elem3<=80){
                    var spriteManager4 = new BABYLON.SpriteManager("spriteManager4", "elements/back2.png", 7, {width: 138, height: 500}, scene);
                    spriteManager4.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite4 = new BABYLON.Sprite("sprite4", spriteManager4);
                    sprite4.playAnimation(0, 4, true, animationSpeed);
                    sprite4.width = 0.82;
                    sprite4.height = 3;
                    sprite4.position.x = fxrand() * 40 - 20;
                    sprite4.position.z = fxrand() * 40 - 20;
                    sprite4.position.y = 1.5;
                    if (Math.sqrt(Math.pow(sprite4.position.x, 2) + Math.pow(sprite4.position.z, 2)) < 8)
                    {sprite4.dispose();}
                    if (spriteManager4.flip) {
                    sprite4.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem3>80 && elem3<=200){
                    }
                    
                    
                    var elem4;
                    elem4=Math.round(genR(0,200));

                    if(elem4<=40){
                    var spriteManager6 = new BABYLON.SpriteManager("spriteManager6", "elements/chill1.png", 7, {width: 199, height: 500}, scene);
                    spriteManager6.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite6 = new BABYLON.Sprite("sprite6", spriteManager6);
                    sprite6.playAnimation(0, 4, true, animationSpeed);
                    sprite6.width = 1.1;
                    sprite6.height = 2.8;
                    sprite6.position.x = fxrand() * 40 - 20;
                    sprite6.position.z = fxrand() * 40 - 20;
                    sprite6.position.y = 1.4;
                    if (Math.sqrt(Math.pow(sprite6.position.x, 2) + Math.pow(sprite6.position.z, 2)) < 8)
                    {sprite6.dispose();}
                    if (spriteManager6.flip) {
                    sprite6.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                  
                    if(elem4>40 && elem4<=80){
                    var spriteManager7 = new BABYLON.SpriteManager("spriteManager7", "elements/backgirl.png", 7, {width: 199, height: 500}, scene);
                    spriteManager7.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite7 = new BABYLON.Sprite("sprite7", spriteManager7);
                    sprite7.playAnimation(0, 4, true, animationSpeed);
                    sprite7.width = 1.07;
                    sprite7.height = 2.7;
                    sprite7.position.x = fxrand() * 40 - 20;
                    sprite7.position.z = fxrand() * 40 - 20;
                    sprite7.position.y = 1.35;
                    if (Math.sqrt(Math.pow(sprite7.position.x, 2) + Math.pow(sprite7.position.z, 2)) < 8)
                    {sprite7.dispose();}
                    if (spriteManager7.flip) {
                    sprite7.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem4>80 && elem4<=200){
                    }

                    
                    var elem5;
                    elem5=Math.round(genR(0,200));

                    if(elem5<=40){
                    var spriteManager5 = new BABYLON.SpriteManager("spriteManager5", "elements/hood1.png", 7, {width: 191, height: 500}, scene);
                    spriteManager5.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite5 = new BABYLON.Sprite("sprite5", spriteManager5);
                    sprite5.playAnimation(0, 4, true, animationSpeed);
                    sprite5.width = 1.21;
                    sprite5.height = 3.2;
                    sprite5.position.x = fxrand() * 40 - 20;
                    sprite5.position.z = fxrand() * 40 - 20;
                    sprite5.position.y = 1.6;
                    if (Math.sqrt(Math.pow(sprite5.position.x, 2) + Math.pow(sprite5.position.z, 2)) < 8)
                    {sprite5.dispose();}
                    if (spriteManager5.flip) {
                    sprite5.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                  
                    if(elem5>40 && elem5<=80){
                    var spriteManager10 = new BABYLON.SpriteManager("spriteManager10", "elements/hat1.png", 7, {width: 154, height: 500}, scene);
                    spriteManager10.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite10 = new BABYLON.Sprite("sprite10", spriteManager10);
                    sprite10.playAnimation(0, 4, true, animationSpeed);
                    sprite10.width = 0.9;
                    sprite10.height = 3;
                    sprite10.position.x = fxrand() * 40 - 20;
                    sprite10.position.z = fxrand() * 40 - 20;
                    sprite10.position.y = 1.5;
                    if (Math.sqrt(Math.pow(sprite10.position.x, 2) + Math.pow(sprite10.position.z, 2)) < 8)
                    {sprite10.dispose();}
                    if (spriteManager10.flip) {
                    sprite10.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem5>80 && elem5<=200){
                    }
                    
                    
                    var elem6;
                    elem6=Math.round(genR(0,200));

                    if(elem6<=40){
                    var spriteManager8 = new BABYLON.SpriteManager("spriteManager8", "elements/twins1.png", 7, {width: 256, height: 500}, scene);
                    spriteManager8.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite8 = new BABYLON.Sprite("sprite8", spriteManager8);
                    sprite8.playAnimation(0, 4, true, animationSpeed);
                    sprite8.width = 1.5;
                    sprite8.height = 3;
                    sprite8.position.x = fxrand() * 40 - 20;
                    sprite8.position.z = fxrand() * 40 - 20;
                    sprite8.position.y = 1.5;
                    if (Math.sqrt(Math.pow(sprite8.position.x, 2) + Math.pow(sprite8.position.z, 2)) < 8)
                    {sprite8.dispose();}
                    if (spriteManager8.flip) {
                    sprite8.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                  
                    if(elem6>40 && elem6<=80){
                    var spriteManager9 = new BABYLON.SpriteManager("spriteManager9", "elements/twins2.png", 7, {width: 383, height: 500}, scene);
                    spriteManager9.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite9 = new BABYLON.Sprite("sprite9", spriteManager9);
                    sprite9.playAnimation(0, 4, true, animationSpeed);
                    sprite9.width = 2.25;
                    sprite9.height = 3;
                    sprite9.position.x = fxrand() * 40 - 20;
                    sprite9.position.z = fxrand() * 40 - 20;
                    sprite9.position.y = 1.5;
                    if (Math.sqrt(Math.pow(sprite9.position.x, 2) + Math.pow(sprite9.position.z, 2)) < 8)
                    {sprite9.dispose();}
                    if (spriteManager9.flip) {
                    sprite9.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem6>80 && elem6<=200){
                    }
                    
                    
                    var elem7;
                    elem7=Math.round(genR(0,200));

                    if(elem7<=40){
                    var spriteManager11 = new BABYLON.SpriteManager("spriteManager11", "elements/baggy1.png", 7, {width: 196, height: 500}, scene);
                    spriteManager11.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite11 = new BABYLON.Sprite("sprite11", spriteManager11);
                    sprite11.playAnimation(0, 4, true, animationSpeed);
                    sprite11.width = 1.17;
                    sprite11.height = 3;
                    sprite11.position.x = fxrand() * 40 - 20;
                    sprite11.position.z = fxrand() * 40 - 20;
                    sprite11.position.y = 1.5;
                    if (Math.sqrt(Math.pow(sprite11.position.x, 2) + Math.pow(sprite11.position.z, 2)) < 8)
                    {sprite11.dispose();}
                    if (spriteManager11.flip) {
                    sprite11.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                  
                    if(elem7>40 && elem7<=80){
                    var spriteManager12 = new BABYLON.SpriteManager("spriteManager12", "elements/baggy2.png", 7, {width: 194, height: 500}, scene);
                    spriteManager12.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite12 = new BABYLON.Sprite("sprite12", spriteManager12);
                    sprite12.playAnimation(0, 4, true, animationSpeed);
                    sprite12.width = 1.16;
                    sprite12.height = 3;
                    sprite12.position.x = fxrand() * 40 - 20;
                    sprite12.position.z = fxrand() * 40 - 20;
                    sprite12.position.y = 1.5;
                    if (Math.sqrt(Math.pow(sprite12.position.x, 2) + Math.pow(sprite12.position.z, 2)) < 8)
                    {sprite12.dispose();}
                    if (spriteManager12.flip) {
                    sprite12.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem7>80 && elem7<=200){
                    }
                    
                    
                    var elem8;
                    elem8=Math.round(genR(0,200));

                    if(elem8<=40){
                    var spriteManager14 = new BABYLON.SpriteManager("spriteManager14", "elements/beggar1.png", 7, {width: 199, height: 500}, scene);
                    spriteManager14.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite14 = new BABYLON.Sprite("sprite14", spriteManager14);
                    sprite14.playAnimation(0, 4, true, animationSpeed);
                    sprite14.width = 1.2;
                    sprite14.height = 3;
                    sprite14.position.x = fxrand() * 40 - 20;
                    sprite14.position.z = fxrand() * 40 - 20;
                    sprite14.position.y = 1.5;
                    if (Math.sqrt(Math.pow(sprite14.position.x, 2) + Math.pow(sprite14.position.z, 2)) < 8)
                    {sprite14.dispose();}
                    if (spriteManager14.flip) {
                    sprite14.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                  
                    if(elem8>40 && elem8<=80){
                    var spriteManager13 = new BABYLON.SpriteManager("spriteManager13", "elements/beggar2.png", 7, {width: 277, height: 500}, scene);
                    spriteManager13.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite13 = new BABYLON.Sprite("sprite13", spriteManager13);
                    sprite13.playAnimation(0, 4, true, animationSpeed);
                    sprite13.width = 1.16;
                    sprite13.height = 2.1;
                    sprite13.position.x = fxrand() * 40 - 20;
                    sprite13.position.z = fxrand() * 40 - 20;
                    sprite13.position.y = 1.05;
                    if (Math.sqrt(Math.pow(sprite13.position.x, 2) + Math.pow(sprite13.position.z, 2)) < 8)
                    {sprite13.dispose();}
                    if (spriteManager13.flip) {
                    sprite13.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem8>80 && elem8<=200){
                    }
                    
                    
                    var elem9;
                    elem9=Math.round(genR(0,200));

                    if(elem9<=40){
                    var spriteManager15 = new BABYLON.SpriteManager("spriteManager15", "elements/cholita1.png", 7, {width: 195, height: 500}, scene);
                    spriteManager15.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite15 = new BABYLON.Sprite("sprite15", spriteManager15);
                    sprite15.playAnimation(0, 4, true, animationSpeed);
                    sprite15.width = 0.96;
                    sprite15.height = 2.5;
                    sprite15.position.x = fxrand() * 40 - 20;
                    sprite15.position.z = fxrand() * 40 - 20;
                    sprite15.position.y = 1.25;
                    if (Math.sqrt(Math.pow(sprite15.position.x, 2) + Math.pow(sprite15.position.z, 2)) < 8)
                    {sprite15.dispose();}
                    if (spriteManager15.flip) {
                    sprite15.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                  
                    if(elem9>40 && elem9<=80){
                    var spriteManager16 = new BABYLON.SpriteManager("spriteManager16", "elements/cholita2.png", 7, {width: 187, height: 500}, scene);
                    spriteManager16.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite16 = new BABYLON.Sprite("sprite16", spriteManager16);
                    sprite16.playAnimation(0, 4, true, animationSpeed);
                    sprite16.width = 0.93;
                    sprite16.height = 2.5;
                    sprite16.position.x = fxrand() * 40 - 20;
                    sprite16.position.z = fxrand() * 40 - 20;
                    sprite16.position.y = 1.25;
                    if (Math.sqrt(Math.pow(sprite16.position.x, 2) + Math.pow(sprite16.position.z, 2)) < 8)
                    {sprite16.dispose();}
                    if (spriteManager16.flip) {
                    sprite16.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem9>80 && elem9<=200){
                    }
                    
                    
                    var elem10;
                    elem10=Math.round(genR(0,200));

                    if(elem10<=40){
                    var spriteManager17 = new BABYLON.SpriteManager("spriteManager17", "elements/mutant1.png", 7, {width: 217, height: 500}, scene);
                    spriteManager17.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite17 = new BABYLON.Sprite("sprite17", spriteManager17);
                    sprite17.playAnimation(0, 4, true, animationSpeed);
                    sprite17.width = 1.64;
                    sprite17.height = 3.8;
                    sprite17.position.x = fxrand() * 40 - 20;
                    sprite17.position.z = fxrand() * 40 - 20;
                    sprite17.position.y = 1.9;
                    if (Math.sqrt(Math.pow(sprite17.position.x, 2) + Math.pow(sprite17.position.z, 2)) < 8)
                    {sprite17.dispose();}
                    if (spriteManager17.flip) {
                    sprite17.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                  
                    if(elem10>40 && elem10<=80){
                    var spriteManager18 = new BABYLON.SpriteManager("spriteManager18", "elements/mutant2.png", 7, {width: 153, height: 500}, scene);
                    spriteManager18.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite18 = new BABYLON.Sprite("sprite18", spriteManager18);
                    sprite18.playAnimation(0, 4, true, animationSpeed);
                    sprite18.width = 0.69;
                    sprite18.height = 2.3;
                    sprite18.position.x = fxrand() * 40 - 20;
                    sprite18.position.z = fxrand() * 40 - 20;
                    sprite18.position.y = 1.15;
                    if (Math.sqrt(Math.pow(sprite18.position.x, 2) + Math.pow(sprite18.position.z, 2)) < 8)
                    {sprite18.dispose();}
                    if (spriteManager18.flip) {
                    sprite18.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem10>80 && elem10<=200){
                    }
                    
                    
                    var elem11;
                    elem11=Math.round(genR(0,200));

                    if(elem11<=40){
                    var spriteManager19 = new BABYLON.SpriteManager("spriteManager19", "elements/nun1.png", 7, {width: 177, height: 500}, scene);
                    spriteManager19.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite19 = new BABYLON.Sprite("sprite19", spriteManager19);
                    sprite19.playAnimation(0, 4, true, animationSpeed);
                    sprite19.width = 1.09;
                    sprite19.height = 3.1;
                    sprite19.position.x = fxrand() * 40 - 20;
                    sprite19.position.z = fxrand() * 40 - 20;
                    sprite19.position.y = 1.55;
                    if (Math.sqrt(Math.pow(sprite19.position.x, 2) + Math.pow(sprite19.position.z, 2)) < 8)
                    {sprite19.dispose();}
                    if (spriteManager19.flip) {
                    sprite19.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                  
                    if(elem11>40 && elem11<=80){
                    var spriteManager21 = new BABYLON.SpriteManager("spriteManager21", "elements/nun3.png", 7, {width: 279, height: 500}, scene);
                    spriteManager21.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite21 = new BABYLON.Sprite("sprite21", spriteManager21);
                    sprite21.playAnimation(0, 4, true, animationSpeed);
                    sprite21.width = 1.83;
                    sprite21.height = 3.3;
                    sprite21.position.x = fxrand() * 40 - 20;
                    sprite21.position.z = fxrand() * 40 - 20;
                    sprite21.position.y = 1.65;
                    if (Math.sqrt(Math.pow(sprite21.position.x, 2) + Math.pow(sprite21.position.z, 2)) < 8)
                    {sprite21.dispose();}
                    if (spriteManager21.flip) {
                    sprite21.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem11>80 && elem11<=200){
                    }

                    
                    var elem12;
                    elem12=Math.round(genR(0,200));

                    if(elem12<=40){
                    var spriteManager22 = new BABYLON.SpriteManager("spriteManager22", "elements/selknam1.png", 7, {width: 201, height: 500}, scene);
                    spriteManager22.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite22 = new BABYLON.Sprite("sprite22", spriteManager22);
                    sprite22.playAnimation(0, 4, true, animationSpeed);
                    sprite22.width = 1.24;
                    sprite22.height = 3.1;
                    sprite22.position.x = fxrand() * 40 - 20;
                    sprite22.position.z = fxrand() * 40 - 20;
                    sprite22.position.y = 1.55;
                    if (Math.sqrt(Math.pow(sprite22.position.x, 2) + Math.pow(sprite22.position.z, 2)) < 8)
                    {sprite22.dispose();}
                    if (spriteManager22.flip) {
                    sprite22.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                  
                    if(elem12>40 && elem12<=80){
                    var spriteManager23 = new BABYLON.SpriteManager("spriteManager23", "elements/selknam2.png", 7, {width: 189, height: 500}, scene);
                    spriteManager23.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite23 = new BABYLON.Sprite("sprite23", spriteManager23);
                    sprite23.playAnimation(0, 4, true, animationSpeed);
                    sprite23.width = 1.16;
                    sprite23.height = 3.1;
                    sprite23.position.x = fxrand() * 40 - 20;
                    sprite23.position.z = fxrand() * 40 - 20;
                    sprite23.position.y = 1.55;
                    if (Math.sqrt(Math.pow(sprite23.position.x, 2) + Math.pow(sprite23.position.z, 2)) < 8)
                    {sprite23.dispose();}
                    if (spriteManager23.flip) {
                    sprite23.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem12>80 && elem12<=200){
                    }
                    
                    
                    var elem13;
                    elem13=Math.round(genR(0,200));

                    if(elem13<=40){
                    var spriteManager24 = new BABYLON.SpriteManager("spriteManager24", "elements/girl1.png", 7, {width: 184, height: 500}, scene);
                    spriteManager24.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite24 = new BABYLON.Sprite("sprite24", spriteManager24);
                    sprite24.playAnimation(0, 4, true, animationSpeed);
                    sprite24.width = 1.03;
                    sprite24.height = 2.8;
                    sprite24.position.x = fxrand() * 40 - 20;
                    sprite24.position.z = fxrand() * 40 - 20;
                    sprite24.position.y = 1.4;
                    if (Math.sqrt(Math.pow(sprite24.position.x, 2) + Math.pow(sprite24.position.z, 2)) < 8)
                    {sprite24.dispose();}
                    if (spriteManager24.flip) {
                    sprite24.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                  
                    if(elem13>40 && elem13<=80){
                    var spriteManager25 = new BABYLON.SpriteManager("spriteManager25", "elements/girl2.png", 7, {width: 183, height: 500}, scene);
                    spriteManager25.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite25 = new BABYLON.Sprite("sprite25", spriteManager25);
                    sprite25.playAnimation(0, 4, true, animationSpeed);
                    sprite25.width = 1.02;
                    sprite25.height = 2.8;
                    sprite25.position.x = fxrand() * 40 - 20;
                    sprite25.position.z = fxrand() * 40 - 20;
                    sprite25.position.y = 1.4;
                    if (Math.sqrt(Math.pow(sprite25.position.x, 2) + Math.pow(sprite25.position.z, 2)) < 8)
                    {sprite25.dispose();}
                    if (spriteManager25.flip) {
                    sprite25.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem13>80 && elem13<=200){
                    }

                    
                    var elem14;
                    elem14=Math.round(genR(0,200));

                    if(elem14<=40){
                    var spriteManager26 = new BABYLON.SpriteManager("spriteManager26", "elements/girl3.png", 7, {width: 180, height: 500}, scene);
                    spriteManager26.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite26 = new BABYLON.Sprite("sprite26", spriteManager26);
                    sprite26.playAnimation(0, 4, true, animationSpeed);
                    sprite26.width = 1.04;
                    sprite26.height = 2.9;
                    sprite26.position.x = fxrand() * 40 - 20;
                    sprite26.position.z = fxrand() * 40 - 20;
                    sprite26.position.y = 1.45;
                    if (Math.sqrt(Math.pow(sprite26.position.x, 2) + Math.pow(sprite26.position.z, 2)) < 8)
                    {sprite26.dispose();}
                    if (spriteManager26.flip) {
                    sprite26.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                  
                    if(elem14>40 && elem14<=80){
                    var spriteManager27 = new BABYLON.SpriteManager("spriteManager27", "elements/girl4.png", 7, {width: 193, height: 500}, scene);
                    spriteManager27.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite27 = new BABYLON.Sprite("sprite27", spriteManager27);
                    sprite27.playAnimation(0, 4, true, animationSpeed);
                    sprite27.width = 1.11;
                    sprite27.height = 2.9;
                    sprite27.position.x = fxrand() * 40 - 20;
                    sprite27.position.z = fxrand() * 40 - 20;
                    sprite27.position.y = 1.45;
                    if (Math.sqrt(Math.pow(sprite27.position.x, 2) + Math.pow(sprite27.position.z, 2)) < 8)
                    {sprite27.dispose();}
                    if (spriteManager27.flip) {
                    sprite27.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem14>80 && elem14<=200){
                    }
                    
                    
                    var elem15;
                    elem15=Math.round(genR(0,200));

                    if(elem15<=40){
                    var spriteManager28 = new BABYLON.SpriteManager("spriteManager28", "elements/girl5.png", 7, {width: 194, height: 500}, scene);
                    spriteManager28.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite28 = new BABYLON.Sprite("sprite28", spriteManager28);
                    sprite28.playAnimation(0, 4, true, animationSpeed);
                    sprite28.width = 1.16;
                    sprite28.height = 3;
                    sprite28.position.x = fxrand() * 40 - 20;
                    sprite28.position.z = fxrand() * 40 - 20;
                    sprite28.position.y = 1.5;
                    if (Math.sqrt(Math.pow(sprite28.position.x, 2) + Math.pow(sprite28.position.z, 2)) < 8)
                    {sprite28.dispose();}
                    if (spriteManager28.flip) {
                    sprite28.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                  
                    if(elem15>40 && elem15<=80){
                    var spriteManager29 = new BABYLON.SpriteManager("spriteManager29", "elements/girl6.png", 7, {width: 219, height: 500}, scene);
                    spriteManager29.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite29 = new BABYLON.Sprite("sprite29", spriteManager29);
                    sprite29.playAnimation(0, 4, true, animationSpeed);
                    sprite29.width = 1.4;
                    sprite29.height = 3.2;
                    sprite29.position.x = fxrand() * 40 - 20;
                    sprite29.position.z = fxrand() * 40 - 20;
                    sprite29.position.y = 1.6;
                    if (Math.sqrt(Math.pow(sprite29.position.x, 2) + Math.pow(sprite29.position.z, 2)) < 8)
                    {sprite29.dispose();}
                    if (spriteManager29.flip) {
                    sprite29.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem15>80 && elem15<=200){
                    }
                    
                    
                    var elem16;
                    elem16=Math.round(genR(0,200));
                    
                    if(elem16<=40){
                    var spriteManager50 = new BABYLON.SpriteManager("spriteManager50", "elements/goat1.png", 7, {width: 427, height: 418}, scene);
                    spriteManager50.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite50 = new BABYLON.Sprite("sprite50", spriteManager50);
                    sprite50.playAnimation(0, 4, true, animationSpeed);
                    sprite50.width = 1.63;
                    sprite50.height = 1.6;
                    sprite50.position.x = fxrand() * 40 - 20;
                    sprite50.position.z = fxrand() * 40 - 20;
                    sprite50.position.y = 0.8;
                    if (Math.sqrt(Math.pow(sprite50.position.x, 2) + Math.pow(sprite50.position.z, 2)) < 8)
                    {sprite50.dispose();}
                    if (spriteManager50.flip) {
                    sprite50.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem16>40 && elem16<=80){
                    var spriteManager51 = new BABYLON.SpriteManager("spriteManager51", "elements/dog1.png", 7, {width: 500, height: 365}, scene);
                    spriteManager51.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite51 = new BABYLON.Sprite("sprite51", spriteManager51);
                    sprite51.playAnimation(0, 4, true, animationSpeed);
                    sprite51.width = 1.36;
                    sprite51.height = 1;
                    sprite51.position.x = fxrand() * 40 - 20;
                    sprite51.position.z = fxrand() * 40 - 20;
                    sprite51.position.y = 0.5;
                    if (Math.sqrt(Math.pow(sprite51.position.x, 2) + Math.pow(sprite51.position.z, 2)) < 8)
                    {sprite51.dispose();}
                    if (spriteManager51.flip) {
                    sprite51.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem16>80 && elem16<=200){
                    }
                    
                    
                    var elem17;
                    elem17=Math.round(genR(0,200));

                    if(elem17<=40){
                    var spriteManager52 = new BABYLON.SpriteManager("spriteManager52", "elements/cat1.png", 7, {width: 288, height: 500}, scene);
                    spriteManager52.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite52 = new BABYLON.Sprite("sprite52", spriteManager52);
                    sprite52.playAnimation(0, 4, true, animationSpeed);
                    sprite52.width = 0.57;
                    sprite52.height = 1;
                    sprite52.position.x = fxrand() * 40 - 20;
                    sprite52.position.z = fxrand() * 40 - 20;
                    sprite52.position.y = 0.5;
                    if (Math.sqrt(Math.pow(sprite52.position.x, 2) + Math.pow(sprite52.position.z, 2)) < 8)
                    {sprite52.dispose();}
                    if (spriteManager52.flip) {
                    sprite52.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem17>40 && elem17<=80){
                    var spriteManager53 = new BABYLON.SpriteManager("spriteManager53", "elements/capy1.png", 7, {width: 529, height: 500}, scene);
                    spriteManager53.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite53 = new BABYLON.Sprite("sprite53", spriteManager53);
                    sprite53.playAnimation(0, 4, true, animationSpeed);
                    sprite53.width = 1.05;
                    sprite53.height = 1;
                    sprite53.position.x = fxrand() * 40 - 20;
                    sprite53.position.z = fxrand() * 40 - 20;
                    sprite53.position.y = 0.5;
                    if (Math.sqrt(Math.pow(sprite53.position.x, 2) + Math.pow(sprite53.position.z, 2)) < 8)
                    {sprite53.dispose();}
                    if (spriteManager53.flip) {
                    sprite53.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem17>80 && elem17<=200){
                    }
                    
                    
                    var elem18;
                    elem18=Math.round(genR(0,200));

                    if(elem18<=40){
                    var spriteManager54 = new BABYLON.SpriteManager("spriteManager54", "elements/cow1.png", 7, {width: 657, height: 500}, scene);
                    spriteManager54.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite54 = new BABYLON.Sprite("sprite54", spriteManager54);
                    sprite54.playAnimation(0, 4, true, animationSpeed);
                    sprite54.width = 3.15;
                    sprite54.height = 2.4;
                    sprite54.position.x = fxrand() * 40 - 20;
                    sprite54.position.z = fxrand() * 40 - 20;
                    sprite54.position.y = 1.2;
                    if (Math.sqrt(Math.pow(sprite54.position.x, 2) + Math.pow(sprite54.position.z, 2)) < 8)
                    {sprite54.dispose();}
                    if (spriteManager54.flip) {
                    sprite54.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem18>40 && elem18<=80){
                    var spriteManager55 = new BABYLON.SpriteManager("spriteManager55", "elements/sheep1.png", 7, {width: 556, height: 500}, scene);
                    spriteManager55.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite55 = new BABYLON.Sprite("sprite55", spriteManager55);
                    sprite55.playAnimation(0, 4, true, animationSpeed);
                    sprite55.width = 2.22;
                    sprite55.height = 2;
                    sprite55.position.x = fxrand() * 40 - 20;
                    sprite55.position.z = fxrand() * 40 - 20;
                    sprite55.position.y = 1;
                    if (Math.sqrt(Math.pow(sprite55.position.x, 2) + Math.pow(sprite55.position.z, 2)) < 8)
                    {sprite55.dispose();}
                    if (spriteManager55.flip) {
                    sprite55.invertU = true;
                    }
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }

                    if(elem18>80 && elem18<=200){
                    }
                    
                    
                    var elem19;
                    elem19=Math.round(genR(0,200));

                    if(elem19<=40){
                    var spriteManager56 = new BABYLON.SpriteManager("spriteManager56", "elements/monk.png", 7, {width: 332, height: 500}, scene);
                    spriteManager56.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite56 = new BABYLON.Sprite("sprite56", spriteManager56);
                    sprite56.playAnimation(0, 4, true, animationSpeed);
                    sprite56.width = 1.26;
                    sprite56.height = 1.9;
                    sprite56.position.x = fxrand() * 40 - 20;
                    sprite56.position.z = fxrand() * 40 - 20;
                    sprite56.position.y = 0.95;
                    if (Math.sqrt(Math.pow(sprite56.position.x, 2) + Math.pow(sprite56.position.z, 2)) < 8)
                    {sprite56.dispose();}
                    if (spriteManager56.flip) {
                    sprite56.invertU = true;
                    }
                              var posYAnimation5 = new BABYLON.Animation("posYAnimation", "position.y", 5, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                              var keys5 = []; 
                              keys5.push({ frame: 0, value: sprite56.position.y });
                              keys5.push({ frame: 50, value: sprite56.position.y + genR(0.5,1) });
                              keys5.push({ frame: 100, value: sprite56.position.y });
                              posYAnimation5.setKeys(keys5);
                              sprite56.animations.push(posYAnimation5);
                              scene.beginAnimation(sprite56, 0, 100, true);
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }
                    
                    if(elem19>40 && elem19<=80){
                    var spriteManager57 = new BABYLON.SpriteManager("spriteManager57", "elements/fire.png", 7, {width: 389, height: 500}, scene);
                    spriteManager57.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var sprite57 = new BABYLON.Sprite("sprite57", spriteManager57);
                    sprite57.playAnimation(0, 4, true, animationSpeed);
                    sprite57.width = 1.4;
                    sprite57.height = 1.8;
                    sprite57.position.x = fxrand() * 40 - 20;
                    sprite57.position.z = fxrand() * 40 - 20;
                    sprite57.position.y = 0.9;
                    if (Math.sqrt(Math.pow(sprite57.position.x, 2) + Math.pow(sprite57.position.z, 2)) < 8)
                    {sprite57.dispose();}
                    if (spriteManager57.flip) {
                    sprite57.invertU = true;
                    }
                              var posYAnimation6 = new BABYLON.Animation("posYAnimation", "position.y", 5, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                              var keys6 = []; 
                              keys6.push({ frame: 0, value: sprite57.position.y });
                              keys6.push({ frame: 50, value: sprite57.position.y + genR(0.5,1) });
                              keys6.push({ frame: 100, value: sprite57.position.y });
                              posYAnimation6.setKeys(keys6);
                              sprite57.animations.push(posYAnimation6);
                              scene.beginAnimation(sprite57, 0, 100, true);
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    }

                    if(elem19>80 && elem19<=200){
                    }
           
                    
                    //Moon
                    
                    var skyelem;
                    skyelem=Math.round(genR(0,40));
   
                    if(skyelem<=10){
                    var sky1 = new BABYLON.StandardMaterial("sky1", scene);
                    sky1.diffuseTexture = new BABYLON.Texture("./elements/moon1.png");
                    sky1.diffuseTexture.hasAlpha = true;
                    sky1.backFaceCulling = false;
                    sky1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var planesky1 = BABYLON.MeshBuilder.CreateGround("planesky1", { width: 10, height: 10 }, scene);
                      planesky1.material = sky1;
                      planesky1.width = 10;
                      planesky1.height = 10;
                      planesky1.position.x = fxrand() * 20 - 10;
                      planesky1.position.z = fxrand() * 20 - 10;
                      planesky1.position.y = genR(100,150);
                    if (sky1.flip) {
                    sky1.invertU = true;
                    }
                    }
                    }
                     
                    if(skyelem>10 && skyelem<=20){
                    var sky2 = new BABYLON.StandardMaterial("sky2", scene);
                    sky2.diffuseTexture = new BABYLON.Texture("./elements/moon2.png");
                    sky2.diffuseTexture.hasAlpha = true;
                    sky2.backFaceCulling = false;
                    sky2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var planesky2 = BABYLON.MeshBuilder.CreateGround("planesky2", { width: 10, height: 10 }, scene);
                      planesky2.material = sky2;
                      planesky2.width = 10;
                      planesky2.height = 10;
                      planesky2.position.x = fxrand() * 20 - 10;
                      planesky2.position.z = fxrand() * 20 - 10;
                      planesky2.position.y = genR(100,150);
                    if (sky2.flip) {
                    sky2.invertU = true;
                    }
                    }
                    }
                    
                    if(skyelem>20 && skyelem<=30){
                    var sky3 = new BABYLON.StandardMaterial("sky3", scene);
                    sky3.diffuseTexture = new BABYLON.Texture("./elements/moon3.png");
                    sky3.diffuseTexture.hasAlpha = true;
                    sky3.backFaceCulling = false;
                    sky3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 1; i++) {
                    var planesky3 = BABYLON.MeshBuilder.CreateGround("planesky3", { width: 10, height: 10 }, scene);
                      planesky3.material = sky3;
                      planesky3.width = 10;
                      planesky3.height = 10;
                      planesky3.position.x = fxrand() * 20 - 10;
                      planesky3.position.z = fxrand() * 20 - 10;
                      planesky3.position.y = genR(100,150);
                    if (sky3.flip) {
                    sky3.invertU = true;
                    }
                    }
                    }
                    
                    if(skyelem>30 && skyelem<=40){
                    }
                    
                    
                    //Flying Objects
                    
                    var flyNum;
                    var flyVar;

                    flyNum=Math.round(genR(0,100));

                    if(flyNum<=18){
                    var pla1 = new BABYLON.StandardMaterial("plane1", scene);
                    pla1.diffuseTexture = new BABYLON.Texture("./elements/plane3.png", scene);
                    pla1.diffuseTexture.hasAlpha = true;
                    pla1.backFaceCulling = false;
                    
                    var planepla1 = BABYLON.MeshBuilder.CreatePlane("planepla1", { width: 14.88, height: 5 }, scene);
                    planepla1.material = pla1;
                    planepla1.position.y = genR(80,90);
                    
                    var angle22 = 0;
                    scene.registerBeforeRender(function () {
                        angle22 += 0.0001;
                        planepla1.position.x = 100 * Math.cos(angle22);
                        planepla1.position.z = 100 * Math.sin(angle22);
                        planepla1.lookAt(camera.position);
                    });
                    flyVar="Airplane";
                    }
                    
                    if(flyNum>18 && flyNum<=37){  
                    var pla2 = new BABYLON.StandardMaterial("spaceship", scene);
                    pla2.diffuseTexture = new BABYLON.Texture("./elements/spaceship.png", scene);
                    pla2.diffuseTexture.hasAlpha = true;
                    pla2.backFaceCulling = false;
                    
                    var planepla2 = BABYLON.MeshBuilder.CreatePlane("planepla2", { width: 17.66, height: 7 }, scene);
                    planepla2.material = pla2;
                    planepla2.position.y = genR(80,90);
                    
                    var angle23 = 0;
                    scene.registerBeforeRender(function () {
                        angle23 += 0.0001;
                        planepla2.position.x = 100 * Math.cos(angle23);
                        planepla2.position.z = 100 * Math.sin(angle23);
                        planepla2.lookAt(camera.position);
                    });
                    flyVar="Spaceship";
                    }
                    
                    if(flyNum>37 && flyNum<=57){  
                    var pla3 = new BABYLON.StandardMaterial("condor", scene);
                    pla3.diffuseTexture = new BABYLON.Texture("./elements/condor.png", scene);
                    pla3.diffuseTexture.hasAlpha = true;
                    pla3.backFaceCulling = false;
                    
                    var planepla3 = BABYLON.MeshBuilder.CreatePlane("planepla3", { width: 8.84, height: 4 }, scene);
                    planepla3.material = pla3;
                    planepla3.position.y = genR(80,90);
                    
                    var angle24 = 0;
                    scene.registerBeforeRender(function () {
                        angle24 += 0.00015;
                        planepla3.position.x = 100 * Math.cos(angle24);
                        planepla3.position.z = 100 * Math.sin(angle24);
                        planepla3.lookAt(camera.position);
                    });
                    flyVar="Giant Condor";
                    }
                    
                    if(flyNum>57 && flyNum<=78){  
                    var pla4 = new BABYLON.StandardMaterial("eagle", scene);
                    pla4.diffuseTexture = new BABYLON.Texture("./elements/eagle.png", scene);
                    pla4.diffuseTexture.hasAlpha = true;
                    pla4.backFaceCulling = false;
                    
                    var planepla4 = BABYLON.MeshBuilder.CreatePlane("planepla4", { width: 8.62, height: 4 }, scene);
                    planepla4.material = pla4;
                    planepla4.position.y = genR(80,90);
                    
                    var angle25 = 0;
                    scene.registerBeforeRender(function () {
                        angle25 += 0.00015;
                        planepla4.position.x = 100 * Math.cos(angle25);
                        planepla4.position.z = 100 * Math.sin(angle25);
                        planepla4.lookAt(camera.position);
                    });
                    flyVar="Giant Eagle";
                    }
                    
                    if(flyNum>78 && flyNum<=100){  
                    var pla5 = new BABYLON.StandardMaterial("dragonfly", scene);
                    pla5.diffuseTexture = new BABYLON.Texture("./elements/dragonfly.png", scene);
                    pla5.diffuseTexture.hasAlpha = true;
                    pla5.backFaceCulling = false;
                    
                    var planepla5 = BABYLON.MeshBuilder.CreatePlane("planepla5", { width: 5.39, height: 3 }, scene);
                    planepla5.material = pla5;
                    planepla5.position.y = genR(80,90);
                    
                    var angle26 = 0;
                    scene.registerBeforeRender(function () {
                        angle26 += 0.00015;
                        planepla5.position.x = 100 * Math.cos(angle26);
                        planepla5.position.z = 100 * Math.sin(angle26);
                        planepla5.lookAt(camera.position);
                    });
                    flyVar="Giant Dragonfly";
                    }
                    
                    
                  //Powers

                  var powNum;
                  var powVar;

                  powNum=Math.round(genR(0,166));

                  if(powNum<=42){
                  powVar="None";
                  }
                    
                  if(powNum>42 && powNum<=70){
                      var m1 = new BABYLON.StandardMaterial("mushroom1", scene);
                      m1.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom1.png", scene);
                      m1.diffuseTexture.hasAlpha = true;
                      m1.backFaceCulling = false;
                      for (let i = 0; i < 23; i++) {
                        var planem1 = BABYLON.MeshBuilder.CreatePlane("planem1", { width: 25, height: 78 }, scene);
                        planem1.material = m1;
                        planem1.width = 25;
                        planem1.height = 78;
                        planem1.position.x = fxrand() * 300 - 150;
                        planem1.position.z = fxrand() * 300 - 150;
                        planem1.position.y = 39;
                      if (Math.sqrt(Math.pow(planem1.position.x, 2) + Math.pow(planem1.position.z, 2)) < 90)
                      {planem1.dispose();}
                      }
                      var m2 = new BABYLON.StandardMaterial("mushroom2", scene);
                      m2.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom2.png", scene);
                      m2.diffuseTexture.hasAlpha = true;
                      m2.backFaceCulling = false;
                      for (let i = 0; i < 23; i++) {
                        var planem2 = BABYLON.MeshBuilder.CreatePlane("planem2", { width: 25, height: 60 }, scene);
                        planem2.material = m2;
                        planem2.width = 25;
                        planem2.height = 60;
                        planem2.position.x = fxrand() * 300 - 150;
                        planem2.position.z = fxrand() * 300 - 150;
                        planem2.position.y = 30;
                      if (Math.sqrt(Math.pow(planem2.position.x, 2) + Math.pow(planem2.position.z, 2)) < 80)
                      {planem2.dispose();}
                      }
                      var m3 = new BABYLON.StandardMaterial("mushroom3", scene);
                      m3.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom3.png", scene);
                      m3.diffuseTexture.hasAlpha = true;
                      m3.backFaceCulling = false;
                      for (let i = 0; i < 23; i++) {
                        var planem3 = BABYLON.MeshBuilder.CreatePlane("planem3", { width: 20, height: 30 }, scene);
                        planem3.material = m3;
                        planem3.width = 20;
                        planem3.height = 30;
                        planem3.position.x = fxrand() * 300 - 150;
                        planem3.position.z = fxrand() * 300 - 150;
                        planem3.position.y = 15;
                      if (Math.sqrt(Math.pow(planem3.position.x, 2) + Math.pow(planem3.position.z, 2)) < 60)
                      {planem3.dispose();}
                      }
                      var m4 = new BABYLON.StandardMaterial("mushroom4", scene);
                      m4.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom4.png", scene);
                      m4.diffuseTexture.hasAlpha = true;
                      m4.backFaceCulling = false;
                      for (let i = 0; i < 23; i++) {
                        var planem4 = BABYLON.MeshBuilder.CreatePlane("planem4", { width: 17.5, height: 30 }, scene);
                        planem4.material = m4;
                        planem4.width = 17.5;
                        planem4.height = 30;
                        planem4.position.x = fxrand() * 300 - 150;
                        planem4.position.z = fxrand() * 300 - 150;
                        planem4.position.y = 15;
                      if (Math.sqrt(Math.pow(planem4.position.x, 2) + Math.pow(planem4.position.z, 2)) < 45)
                      {planem4.dispose();}
                      }                     
                      var m5 = new BABYLON.StandardMaterial("mushroom5", scene);
                      m5.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom5.png", scene);
                      m5.diffuseTexture.hasAlpha = true;
                      m5.backFaceCulling = false;
                      for (let i = 0; i < 23; i++) {
                        var planem5 = BABYLON.MeshBuilder.CreatePlane("planem5", { width: 30, height: 33 }, scene);
                        planem5.material = m5;
                        planem5.width = 20;
                        planem5.height = 33;
                        planem5.position.x = fxrand() * 300 - 150;
                        planem5.position.z = fxrand() * 300 - 150;
                        planem5.position.y = 16.5;
                      if (Math.sqrt(Math.pow(planem5.position.x, 2) + Math.pow(planem5.position.z, 2)) < 60)
                      {planem5.dispose();}
                      }
                      var m6 = new BABYLON.StandardMaterial("mushroom6", scene);
                      m6.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom6.png", scene);
                      m6.diffuseTexture.hasAlpha = true;
                      m6.backFaceCulling = false;
                      for (let i = 0; i < 23; i++) {
                        var planem6 = BABYLON.MeshBuilder.CreatePlane("planem6", { width: 22.5, height: 49.5 }, scene);
                        planem6.material = m6;
                        planem6.width = 22.5;
                        planem6.height = 49.5;
                        planem6.position.x = fxrand() * 300 - 150;
                        planem6.position.z = fxrand() * 300 - 150;
                        planem6.position.y = 24.75;
                      if (Math.sqrt(Math.pow(planem6.position.x, 2) + Math.pow(planem6.position.z, 2)) < 75)
                      {planem6.dispose();}
                      }                      
                      var m7 = new BABYLON.StandardMaterial("mushroom7", scene);
                      m7.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom7.png", scene);
                      m7.diffuseTexture.hasAlpha = true;
                      m7.backFaceCulling = false;
                      for (let i = 0; i < 23; i++) {
                        var planem7 = BABYLON.MeshBuilder.CreatePlane("planem7", { width: 25, height: 27 }, scene);
                        planem7.material = m7;
                        planem7.width = 25;
                        planem7.height = 27;
                        planem7.position.x = fxrand() * 300 - 150;
                        planem7.position.z = fxrand() * 300 - 150;
                        planem7.position.y = 13.5;
                      if (Math.sqrt(Math.pow(planem7.position.x, 2) + Math.pow(planem7.position.z, 2)) < 60)
                      {planem7.dispose();}
                      }
                      var m8 = new BABYLON.StandardMaterial("mushroom8", scene);
                      m8.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom8.png", scene);
                      m8.diffuseTexture.hasAlpha = true;
                      m8.backFaceCulling = false;
                      for (let i = 0; i < 23; i++) {
                        var planem8 = BABYLON.MeshBuilder.CreatePlane("planem8", { width: 17.5, height: 27 }, scene);
                        planem8.material = m8;
                        planem8.width = 17.5;
                        planem8.height = 27;
                        planem8.position.x = fxrand() * 300 - 150;
                        planem8.position.z = fxrand() * 300 - 150;
                        planem8.position.y = 13.5;
                      if (Math.sqrt(Math.pow(planem8.position.x, 2) + Math.pow(planem8.position.z, 2)) < 50)
                      {planem8.dispose();}
                      }
                      var m9 = new BABYLON.StandardMaterial("mushroom9", scene);
                      m9.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom9.png", scene);
                      m9.diffuseTexture.hasAlpha = true;
                      m9.backFaceCulling = false;
                      for (let i = 0; i < 33; i++) {
                        var planem9 = BABYLON.MeshBuilder.CreatePlane("planem9", { width: 30, height: 51 }, scene);
                        planem9.material = m9;
                        planem9.width = 30;
                        planem9.height = 51;
                        planem9.position.x = fxrand() * 300 - 150;
                        planem9.position.z = fxrand() * 300 - 150;
                        planem9.position.y = 25.5;
                      if (Math.sqrt(Math.pow(planem9.position.x, 2) + Math.pow(planem9.position.z, 2)) < 65)
                      {planem9.dispose();}
                      }                      
                      var m10 = new BABYLON.StandardMaterial("mushroom10", scene);
                      m10.diffuseTexture = new BABYLON.Texture("./mushrooms/mushroom10.png", scene);
                      m10.diffuseTexture.hasAlpha = true;
                      m10.backFaceCulling = false;
                      for (let i = 0; i < 33; i++) {
                        var planem10 = BABYLON.MeshBuilder.CreatePlane("planem10", { width: 30, height: 49.5 }, scene);
                        planem10.material = m10;
                        planem10.width = 30;
                        planem10.height = 49.5;
                        planem10.position.x = fxrand() * 300 - 150;
                        planem10.position.z = fxrand() * 300 - 150;
                        planem10.position.y = 24.75;
                      if (Math.sqrt(Math.pow(planem10.position.x, 2) + Math.pow(planem10.position.z, 2)) < 70)
                      {planem10.dispose();}
                      }
                    powVar="Giant Shrooms";
                    }
                    
                   if(powNum>70 && powNum<=95){                   
                    var t1 = new BABYLON.StandardMaterial("tree1", scene);
                    t1.diffuseTexture = new BABYLON.Texture("./trees/tree1.png", scene);
                    t1.diffuseTexture.hasAlpha = true;
                    t1.backFaceCulling = false;
                    for (let i = 0; i < 30; i++) {
                      var planet1 = BABYLON.MeshBuilder.CreatePlane("planet1", { width: 24, height: 44 }, scene);
                      planet1.material = t1;
                      planet1.width = 24;
                      planet1.height = 44;
                      planet1.position.x = fxrand() * 300 - 150;
                      planet1.position.z = fxrand() * 300 - 150;
                      planet1.position.y = 22;
                    if (Math.sqrt(Math.pow(planet1.position.x, 2) + Math.pow(planet1.position.z, 2)) < 85)
                    {planet1.dispose();}
                    }
                    
                    var t2 = new BABYLON.StandardMaterial("tree2", scene);
                    t2.diffuseTexture = new BABYLON.Texture("./trees/tree2.png", scene);
                    t2.diffuseTexture.hasAlpha = true;
                    t2.backFaceCulling = false;
                    for (let i = 0; i < 20; i++) {
                      var planet2 = BABYLON.MeshBuilder.CreatePlane("planet2", { width: 24, height: 64 }, scene);
                      planet2.material = t2;
                      planet2.width = 24;
                      planet2.height = 64;
                      planet2.position.x = fxrand() * 300 - 150;
                      planet2.position.z = fxrand() * 300 - 150;
                      planet2.position.y = 32;
                    if (Math.sqrt(Math.pow(planet2.position.x, 2) + Math.pow(planet2.position.z, 2)) < 100)
                    {planet2.dispose();}
                    }
                    
                    var t3 = new BABYLON.StandardMaterial("tree3", scene);
                    t3.diffuseTexture = new BABYLON.Texture("./trees/tree3.png", scene);
                    t3.diffuseTexture.hasAlpha = true;
                    t3.backFaceCulling = false;
                    for (let i = 0; i < 20; i++) {
                      var planet3 = BABYLON.MeshBuilder.CreatePlane("planet3", { width: 27, height: 58 }, scene);
                      planet3.material = t3;
                      planet3.width = 27;
                      planet3.height = 58;
                      planet3.position.x = fxrand() * 300 - 150;
                      planet3.position.z = fxrand() * 300 - 150;
                      planet3.position.y = 29;
                    if (Math.sqrt(Math.pow(planet3.position.x, 2) + Math.pow(planet3.position.z, 2)) < 75)
                    {planet3.dispose();}
                    }
                    
                    var t4 = new BABYLON.StandardMaterial("tree4", scene);
                    t4.diffuseTexture = new BABYLON.Texture("./trees/tree4.png", scene);
                    t4.diffuseTexture.hasAlpha = true;
                    t4.backFaceCulling = false;
                    for (let i = 0; i < 23; i++) {
                      var planet4 = BABYLON.MeshBuilder.CreatePlane("planet4", { width: 24, height: 53 }, scene);
                      planet4.material = t4;
                      planet4.width = 24;
                      planet4.height = 53;
                      planet4.position.x = fxrand() * 300 - 150;
                      planet4.position.z = fxrand() * 300 - 150;
                      planet4.position.y = 26.5;
                    if (Math.sqrt(Math.pow(planet4.position.x, 2) + Math.pow(planet4.position.z, 2)) < 80)
                    {planet4.dispose();}
                    }
                    
                    var t5 = new BABYLON.StandardMaterial("tree5", scene);
                    t5.diffuseTexture = new BABYLON.Texture("./trees/tree5.png", scene);
                    t5.diffuseTexture.hasAlpha = true;
                    t5.backFaceCulling = false;
                    for (let i = 0; i < 13; i++) {
                      var planet5 = BABYLON.MeshBuilder.CreatePlane("planet5", { width: 20, height: 40 }, scene);
                      planet5.material = t5;
                      planet5.width = 30;
                      planet5.height = 40;
                      planet5.position.x = fxrand() * 300 - 150;
                      planet5.position.z = fxrand() * 300 - 150;
                      planet5.position.y = 20;
                    if (Math.sqrt(Math.pow(planet5.position.x, 2) + Math.pow(planet5.position.z, 2)) < 75)
                    {planet5.dispose();}
                    }
                    
                    var t6 = new BABYLON.StandardMaterial("tree6", scene);
                    t6.diffuseTexture = new BABYLON.Texture("./trees/tree6.png", scene);
                    t6.diffuseTexture.hasAlpha = true;
                    t6.backFaceCulling = false;
                    for (let i = 0; i < 20; i++) {
                      var planet6 = BABYLON.MeshBuilder.CreatePlane("planet6", { width: 27, height: 54 }, scene);
                      planet6.material = t6;
                      planet6.width = 40;
                      planet6.height = 54;
                      planet6.position.x = fxrand() * 300 - 150;
                      planet6.position.z = fxrand() * 300 - 150;
                      planet6.position.y = 27;
                    if (Math.sqrt(Math.pow(planet6.position.x, 2) + Math.pow(planet6.position.z, 2)) < 78)
                    {planet6.dispose();}
                    }
                    
                    var t7 = new BABYLON.StandardMaterial("tree7", scene);
                    t7.diffuseTexture = new BABYLON.Texture("./trees/tree7.png", scene);
                    t7.diffuseTexture.hasAlpha = true;
                    t7.backFaceCulling = false;
                    for (let i = 0; i < 22; i++) {
                      var planet7 = BABYLON.MeshBuilder.CreatePlane("planet7", { width: 20, height: 42 }, scene);
                      planet7.material = t7;
                      planet7.width = 20;
                      planet7.height = 42;
                      planet7.position.x = fxrand() * 300 - 150;
                      planet7.position.z = fxrand() * 300 - 150;
                      planet7.position.y = 21;
                    if (Math.sqrt(Math.pow(planet7.position.x, 2) + Math.pow(planet7.position.z, 2)) < 74)
                    {planet7.dispose();}
                    }
                    
                    var t8 = new BABYLON.StandardMaterial("tree8", scene);
                    t8.diffuseTexture = new BABYLON.Texture("./trees/tree8.png", scene);
                    t8.diffuseTexture.hasAlpha = true;
                    t8.backFaceCulling = false;
                    for (let i = 0; i < 12; i++) {
                      var planet8 = BABYLON.MeshBuilder.CreatePlane("planet8", { width: 24, height: 53 }, scene);
                      planet8.material = t8;
                      planet8.width = 24;
                      planet8.height = 53;
                      planet8.position.x = fxrand() * 300 - 150;
                      planet8.position.z = fxrand() * 300 - 150;
                      planet8.position.y = 26.5;
                    if (Math.sqrt(Math.pow(planet8.position.x, 2) + Math.pow(planet8.position.z, 2)) < 77)
                    {planet8.dispose();}
                    }
                    
                    var t9 = new BABYLON.StandardMaterial("tree9", scene);
                    t9.diffuseTexture = new BABYLON.Texture("./trees/tree9.png", scene);
                    t9.diffuseTexture.hasAlpha = true;
                    t9.backFaceCulling = false;
                    for (let i = 0; i < 25; i++) {
                      var planet9 = BABYLON.MeshBuilder.CreatePlane("planet9", { width: 20, height: 46 }, scene);
                      planet9.material = t9;
                      planet9.width = 20;
                      planet9.height = 46;
                      planet9.position.x = fxrand() * 300 - 150;
                      planet9.position.z = fxrand() * 300 - 150;
                      planet9.position.y = 23;
                    if (Math.sqrt(Math.pow(planet9.position.x, 2) + Math.pow(planet9.position.z, 2)) < 72)
                    {planet9.dispose();}
                    }
                    powVar="Giant Trees";
                    }
                    
                                 
                    if(powNum>95 && powNum<=115){
                              
                    var lineMat = new BABYLON.StandardMaterial("lineMat", scene);
                    lineMat.diffuseColor = new BABYLON.Color3(1, 1, 1);

                    var pointCloud = new BABYLON.PointsCloudSystem("pointCloud", 0, scene);
                    var pointCloudPoints = [];
                    for (let i = 0; i < 150; i++) {
                      let point = new BABYLON.Vector3(fxrand() * 100 - 50, fxrand() * 100 - 50, fxrand() * 100 - 50);
                      pointCloudPoints.push(point);
                    }
                    pointCloud.addPoints(pointCloudPoints);
                    
                    var lines = BABYLON.MeshBuilder.CreateLines("lines", { points: pointCloudPoints }, scene);
                    lines.color = new BABYLON.Color3(0, 0, 0);
                    lines.material = lineMat;
                    

                    var lineMat2 = new BABYLON.StandardMaterial("lineMat2", scene);
                    lineMat.diffuseColor = new BABYLON.Color3(1, 1, 1);
                    
                    var pointCloud2 = new BABYLON.PointsCloudSystem("pointCloud2", 0, scene);
                    var pointCloudPoints2 = [];
                    for (let i = 0; i < 150; i++) {
                      let point = new BABYLON.Vector3(fxrand() * 100 - 50, fxrand() * 100 - 50, fxrand() * 100 - 50);
                      pointCloudPoints2.push(point);
                    }
                    pointCloud2.addPoints(pointCloudPoints2);
                    
                    var lines2 = BABYLON.MeshBuilder.CreateLines("lines2", { points: pointCloudPoints2 }, scene);
                    lines2.color = new BABYLON.Color3(1, 1, 1);
                    lines2.material = lineMat2;
                    powVar="Mycelium";
                    }
                    
                    
                    if(powNum>115 && powNum<=130){ 
                    var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {diameter: 200}, scene);
                    var sphereMat = new BABYLON.StandardMaterial("sphereMat", scene);
                    sphereMat.alpha = 0;
                    sphere.material = sphereMat;
                    var particleSystem = new BABYLON.ParticleSystem("particles", 300, scene);
                    particleSystem.particleTexture = new BABYLON.Texture("./elements/eyes" + rnd3 + ".png", scene);    
                    particleSystem.emitter = sphere;
                    particleSystem.minEmitBox = new BABYLON.Vector3(-1, 1, -1);
                    particleSystem.maxEmitBox = new BABYLON.Vector3(1, 1, 1);
                    particleSystem.color1 = new BABYLON.Color4(genR(0,1), genR(0,1), genR(0,1), genR(0,1));
                    particleSystem.color2 = new BABYLON.Color4(genR(0,1), genR(0,1), genR(0,1), genR(0,1));
                    particleSystem.color3 = new BABYLON.Color4(genR(0,1), genR(0,1), genR(0,1), genR(0,1));
                    particleSystem.colorDead = new BABYLON.Color4(genR(0,1), genR(0,1), genR(0,1), genR(0,1));
                    particleSystem.minSize = 0.1;
                    particleSystem.maxSize = 0.3;
                    particleSystem.minLifeTime = 2.5;
                    particleSystem.maxLifeTime = 7.5;
                    particleSystem.emitRate = 100;
                    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
                    particleSystem.gravity = new BABYLON.Vector3(0, 0, 0);
                    particleSystem.direction1 = new BABYLON.Vector3(-1, -1, -1);
                    particleSystem.direction2 = new BABYLON.Vector3(1, 1, 1);
                    particleSystem.minEmitPower = 1;
                    particleSystem.maxEmitPower = 2;
                    particleSystem.updateSpeed = 0.0005;
                    particleSystem.start();
                    powVar="Vision";
                    }
                    
                    
                   if(powNum>130 && powNum<=150){                   
                    var tit1 = new BABYLON.StandardMaterial("titan1", scene);
                    tit1.diffuseTexture = new BABYLON.Texture("./titans/titan1.png", scene);
                    tit1.diffuseTexture.hasAlpha = true;
                    tit1.backFaceCulling = false;
                    tit1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 6; i++) {
                      var planetit1 = BABYLON.MeshBuilder.CreatePlane("planetit1", { width: 27.75, height: 55 }, scene);
                      planetit1.material = tit1;
                      planetit1.width = 27.75;
                      planetit1.height = 55;
                      planetit1.position.x = fxrand() * 300 - 150;
                      planetit1.position.z = fxrand() * 300 - 150;
                      planetit1.position.y = 27.5;
                    if (Math.sqrt(Math.pow(planetit1.position.x, 2) + Math.pow(planetit1.position.z, 2)) < 78)
                    {planetit1.dispose();}
                    if (tit1.flip) {
                      planetit1.scaling.x *= -1;
                    }
                    }
                    
                    var tit2 = new BABYLON.StandardMaterial("titan2", scene);
                    tit2.diffuseTexture = new BABYLON.Texture("./titans/titan2.png", scene);
                    tit2.diffuseTexture.hasAlpha = true;
                    tit2.backFaceCulling = false;
                    tit2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 6; i++) {
                      var planetit2 = BABYLON.MeshBuilder.CreatePlane("planetit2", { width: 26.7, height: 55 }, scene);
                      planetit2.material = tit2;
                      planetit2.width = 26.7;
                      planetit2.height = 55;
                      planetit2.position.x = fxrand() * 300 - 150;
                      planetit2.position.z = fxrand() * 300 - 150;
                      planetit2.position.y = 25;
                    if (Math.sqrt(Math.pow(planetit2.position.x, 2) + Math.pow(planetit2.position.z, 2)) < 79)
                    {planetit2.dispose();}
                    if (tit2.flip) {
                      planetit2.scaling.x *= -1;
                    }
                    }
                    
                    var tit3 = new BABYLON.StandardMaterial("titan3", scene);
                    tit3.diffuseTexture = new BABYLON.Texture("./titans/titan3.png", scene);
                    tit3.diffuseTexture.hasAlpha = true;
                    tit3.backFaceCulling = false;
                    tit3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 6; i++) {
                      var planetit3 = BABYLON.MeshBuilder.CreatePlane("planetit3", { width: 27.3, height: 58 }, scene);
                      planetit3.material = tit3;
                      planetit3.width = 27.3;
                      planetit3.height = 50;
                      planetit3.position.x = fxrand() * 300 - 150;
                      planetit3.position.z = fxrand() * 300 - 150;
                      planetit3.position.y = 25;
                    if (Math.sqrt(Math.pow(planetit3.position.x, 2) + Math.pow(planetit3.position.z, 2)) < 74)
                    {planetit3.dispose();}
                    if (tit3.flip) {
                      planetit3.scaling.x *= -1;
                    }
                    }
                    
                    var tit4 = new BABYLON.StandardMaterial("titan4", scene);
                    tit4.diffuseTexture = new BABYLON.Texture("./titans/titan4.png", scene);
                    tit4.diffuseTexture.hasAlpha = true;
                    tit4.backFaceCulling = false;
                    tit4.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 6; i++) {
                      var planetit4 = BABYLON.MeshBuilder.CreatePlane("planetit4", { width: 26.8, height: 50 }, scene);
                      planetit4.material = tit4;
                      planetit4.width = 26.8;
                      planetit4.height = 50;
                      planetit4.position.x = fxrand() * 300 - 150;
                      planetit4.position.z = fxrand() * 300 - 150;
                      planetit4.position.y = 25;
                    if (Math.sqrt(Math.pow(planetit4.position.x, 2) + Math.pow(planetit4.position.z, 2)) < 76)
                    {planetit4.dispose();}
                    if (tit4.flip) {
                      planetit4.scaling.x *= -1;
                    }
                    }
                    
                    var tit5 = new BABYLON.StandardMaterial("titan5", scene);
                    tit5.diffuseTexture = new BABYLON.Texture("./titans/titan5.png", scene);
                    tit5.diffuseTexture.hasAlpha = true;
                    tit5.backFaceCulling = false;
                    tit5.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 6; i++) {
                      var planetit5 = BABYLON.MeshBuilder.CreatePlane("planetit5", { width: 28.5, height: 50 }, scene);
                      planetit5.material = tit5;
                      planetit5.width = 28.5;
                      planetit5.height = 50;
                      planetit5.position.x = fxrand() * 300 - 150;
                      planetit5.position.z = fxrand() * 300 - 150;
                      planetit5.position.y = 25;
                    if (Math.sqrt(Math.pow(planetit5.position.x, 2) + Math.pow(planetit5.position.z, 2)) < 74)
                    {planetit5.dispose();}
                    if (tit5.flip) {
                      planetit5.scaling.x *= -1;
                    }
                    }
                    
                    var tit6 = new BABYLON.StandardMaterial("titan6", scene);
                    tit6.diffuseTexture = new BABYLON.Texture("./titans/titan6.png", scene);
                    tit6.diffuseTexture.hasAlpha = true;
                    tit6.backFaceCulling = false;
                    tit6.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 6; i++) {
                      var planetit6 = BABYLON.MeshBuilder.CreatePlane("planetit6", { width: 24.2, height: 50 }, scene);
                      planetit6.material = tit6;
                      planetit6.width = 24.2;
                      planetit6.height = 50;
                      planetit6.position.x = fxrand() * 300 - 150;
                      planetit6.position.z = fxrand() * 300 - 150;
                      planetit6.position.y = 25;
                    if (Math.sqrt(Math.pow(planetit6.position.x, 2) + Math.pow(planetit6.position.z, 2)) < 73)
                    {planetit6.dispose();}
                    if (tit6.flip) {
                      planetit6.scaling.x *= -1;
                    }
                    }
                    
                    var tit7 = new BABYLON.StandardMaterial("titan7", scene);
                    tit7.diffuseTexture = new BABYLON.Texture("./titans/titan7.png", scene);
                    tit7.diffuseTexture.hasAlpha = true;
                    tit7.backFaceCulling = false;
                    tit7.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 7; i++) {
                      var planetit7 = BABYLON.MeshBuilder.CreatePlane("planetit7", { width: 21.7, height: 50 }, scene);
                      planetit7.material = tit7;
                      planetit7.width = 21.7;
                      planetit7.height = 50;
                      planetit7.position.x = fxrand() * 300 - 150;
                      planetit7.position.z = fxrand() * 300 - 150;
                      planetit7.position.y = 25;
                    if (Math.sqrt(Math.pow(planetit7.position.x, 2) + Math.pow(planetit7.position.z, 2)) < 74)
                    {planetit7.dispose();}
                    if (tit7.flip) {
                      planetit7.scaling.x *= -1;
                    }
                    }
                    
                    var tit8 = new BABYLON.StandardMaterial("titan8", scene);
                    tit8.diffuseTexture = new BABYLON.Texture("./titans/titan8.png", scene);
                    tit8.diffuseTexture.hasAlpha = true;
                    tit8.backFaceCulling = false;
                    tit8.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 7; i++) {
                      var planetit8 = BABYLON.MeshBuilder.CreatePlane("planetit8", { width: 29.9, height: 50 }, scene);
                      planetit8.material = tit8;
                      planetit8.width = 29.9;
                      planetit8.height = 50;
                      planetit8.position.x = fxrand() * 300 - 150;
                      planetit8.position.z = fxrand() * 300 - 150;
                      planetit8.position.y = 25;
                    if (Math.sqrt(Math.pow(planetit8.position.x, 2) + Math.pow(planetit8.position.z, 2)) < 75)
                    {planetit8.dispose();}
                    if (tit8.flip) {
                      planetit8.scaling.x *= -1;
                    }
                    }
                    
                    var tit9 = new BABYLON.StandardMaterial("titan9", scene);
                    tit9.diffuseTexture = new BABYLON.Texture("./titans/titan9.png", scene);
                    tit9.diffuseTexture.hasAlpha = true;
                    tit9.backFaceCulling = false;
                    tit9.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 7; i++) {
                      var planetit9 = BABYLON.MeshBuilder.CreatePlane("planetit9", { width: 29.4, height: 50 }, scene);
                      planetit9.material = tit9;
                      planetit9.width = 29.4;
                      planetit9.height = 50;
                      planetit9.position.x = fxrand() * 300 - 150;
                      planetit9.position.z = fxrand() * 300 - 150;
                      planetit9.position.y = 25;
                    if (Math.sqrt(Math.pow(planetit9.position.x, 2) + Math.pow(planetit9.position.z, 2)) < 72)
                    {planetit9.dispose();}
                    if (tit9.flip) {
                      planetit9.scaling.x *= -1;
                    }
                    }

                    var tit10 = new BABYLON.StandardMaterial("titan10", scene);
                    tit10.diffuseTexture = new BABYLON.Texture("./titans/titan10.png", scene);
                    tit10.diffuseTexture.hasAlpha = true;
                    tit10.backFaceCulling = false;
                    tit10.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 7; i++) {
                      var planetit10 = BABYLON.MeshBuilder.CreatePlane("planetit10", { width: 29.6, height: 50 }, scene);
                      planetit10.material = tit10;
                      planetit10.width = 29.6;
                      planetit10.height = 50;
                      planetit10.position.x = fxrand() * 300 - 150;
                      planetit10.position.z = fxrand() * 300 - 150;
                      planetit10.position.y = 25;
                    if (Math.sqrt(Math.pow(planetit10.position.x, 2) + Math.pow(planetit10.position.z, 2)) < 73)
                    {planetit10.dispose();}
                    if (tit10.flip) {
                      planetit10.scaling.x *= -1;
                    }
                    }
                    
                    var tit11 = new BABYLON.StandardMaterial("titan11", scene);
                    tit11.diffuseTexture = new BABYLON.Texture("./titans/titan11.png", scene);
                    tit11.diffuseTexture.hasAlpha = true;
                    tit11.backFaceCulling = false;
                    tit11.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 7; i++) {
                      var planetit11 = BABYLON.MeshBuilder.CreatePlane("planetit11", { width: 25.8, height: 50 }, scene);
                      planetit11.material = tit11;
                      planetit11.width = 25.8;
                      planetit11.height = 50;
                      planetit11.position.x = fxrand() * 300 - 150;
                      planetit11.position.z = fxrand() * 300 - 150;
                      planetit11.position.y = 20;
                    if (Math.sqrt(Math.pow(planetit11.position.x, 2) + Math.pow(planetit11.position.z, 2)) < 72)
                    {planetit11.dispose();}
                    if (tit11.flip) {
                      planetit11.scaling.x *= -1;
                    }
                    }
                    
                    var tit12 = new BABYLON.StandardMaterial("titan12", scene);
                    tit12.diffuseTexture = new BABYLON.Texture("./titans/titan12.png", scene);
                    tit12.diffuseTexture.hasAlpha = true;
                    tit12.backFaceCulling = false;
                    tit12.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 6; i++) {
                      var planetit12 = BABYLON.MeshBuilder.CreatePlane("planetit12", { width: 29.9, height: 65 }, scene);
                      planetit12.material = tit12;
                      planetit12.width = 29.9;
                      planetit12.height = 65;
                      planetit12.position.x = fxrand() * 300 - 150;
                      planetit12.position.z = fxrand() * 300 - 150;
                      planetit12.position.y = 32.5;
                    if (Math.sqrt(Math.pow(planetit12.position.x, 2) + Math.pow(planetit12.position.z, 2)) < 86)
                    {planetit12.dispose();}
                    if (tit12.flip) {
                      planetit12.scaling.x *= -1;
                    }
                    }
                    
                    var tit13 = new BABYLON.StandardMaterial("titan13", scene);
                    tit13.diffuseTexture = new BABYLON.Texture("./titans/titan13.png", scene);
                    tit13.diffuseTexture.hasAlpha = true;
                    tit13.backFaceCulling = false;
                    tit13.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 6; i++) {
                      var planetit13 = BABYLON.MeshBuilder.CreatePlane("planetit13", { width: 20.5, height: 63 }, scene);
                      planetit13.material = tit13;
                      planetit13.width = 20.5;
                      planetit13.height = 63;
                      planetit13.position.x = fxrand() * 300 - 150;
                      planetit13.position.z = fxrand() * 300 - 150;
                      planetit13.position.y = 31.5;
                    if (Math.sqrt(Math.pow(planetit13.position.x, 2) + Math.pow(planetit13.position.z, 2)) < 84)
                    {planetit13.dispose();}
                    if (tit13.flip) {
                      planetit13.scaling.x *= -1;
                    }
                    }
                    
                    var tit14 = new BABYLON.StandardMaterial("titan14", scene);
                    tit14.diffuseTexture = new BABYLON.Texture("./titans/titan14.png", scene);
                    tit14.diffuseTexture.hasAlpha = true;
                    tit14.backFaceCulling = false;
                    tit14.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 7; i++) {
                      var planetit14 = BABYLON.MeshBuilder.CreatePlane("planetit14", { width: 24.5, height: 55 }, scene);
                      planetit14.material = tit14;
                      planetit14.width = 24.5;
                      planetit14.height = 55;
                      planetit14.position.x = fxrand() * 300 - 150;
                      planetit14.position.z = fxrand() * 300 - 150;
                      planetit14.position.y = 27.5;
                    if (Math.sqrt(Math.pow(planetit14.position.x, 2) + Math.pow(planetit14.position.z, 2)) < 71)
                    {planetit14.dispose();}
                    if (tit14.flip) {
                      planetit14.scaling.x *= -1;
                    }
                    }
                    
                    var tit15 = new BABYLON.StandardMaterial("titan15", scene);
                    tit15.diffuseTexture = new BABYLON.Texture("./titans/titan15.png", scene);
                    tit15.diffuseTexture.hasAlpha = true;
                    tit15.backFaceCulling = false;
                    tit15.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 7; i++) {
                      var planetit15 = BABYLON.MeshBuilder.CreatePlane("planetit15", { width: 23.2, height: 55 }, scene);
                      planetit15.material = tit15;
                      planetit15.width = 23.2;
                      planetit15.height = 55;
                      planetit15.position.x = fxrand() * 300 - 150;
                      planetit15.position.z = fxrand() * 300 - 150;
                      planetit15.position.y = 27.5;
                    if (Math.sqrt(Math.pow(planetit15.position.x, 2) + Math.pow(planetit15.position.z, 2)) < 73)
                    {planetit15.dispose();}
                    if (tit15.flip) {
                      planetit15.scaling.x *= -1;
                    }
                    }
                    
                    var tit16 = new BABYLON.StandardMaterial("titan16", scene);
                    tit16.diffuseTexture = new BABYLON.Texture("./titans/titan16.png", scene);
                    tit16.diffuseTexture.hasAlpha = true;
                    tit16.backFaceCulling = false;
                    tit16.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 9; i++) {
                      var planetit16 = BABYLON.MeshBuilder.CreatePlane("planetit16", { width: 24, height: 55 }, scene);
                      planetit16.material = tit16;
                      planetit16.width = 24;
                      planetit16.height = 55;
                      planetit16.position.x = fxrand() * 300 - 150;
                      planetit16.position.z = fxrand() * 300 - 150;
                      planetit16.position.y = 27.5;
                    if (Math.sqrt(Math.pow(planetit16.position.x, 2) + Math.pow(planetit16.position.z, 2)) < 72)
                    {planetit16.dispose();}
                    if (tit16.flip) {
                      planetit16.scaling.x *= -1;
                    }
                    }
                    
                    var tit17 = new BABYLON.StandardMaterial("titan17", scene);
                    tit17.diffuseTexture = new BABYLON.Texture("./titans/titan17.png", scene);
                    tit17.diffuseTexture.hasAlpha = true;
                    tit17.backFaceCulling = false;
                    tit17.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 8; i++) {
                      var planetit17 = BABYLON.MeshBuilder.CreatePlane("planetit17", { width: 30.2, height: 50 }, scene);
                      planetit17.material = tit17;
                      planetit17.width = 30.2;
                      planetit17.height = 50;
                      planetit17.position.x = fxrand() * 300 - 150;
                      planetit17.position.z = fxrand() * 300 - 150;
                      planetit17.position.y = 20;
                    if (Math.sqrt(Math.pow(planetit17.position.x, 2) + Math.pow(planetit17.position.z, 2)) < 74)
                    {planetit17.dispose();}
                    if (tit17.flip) {
                      planetit17.scaling.x *= -1;
                    }
                    }
                    
                    var tit18 = new BABYLON.StandardMaterial("titan18", scene);
                    tit18.diffuseTexture = new BABYLON.Texture("./titans/titan18.png", scene);
                    tit18.diffuseTexture.hasAlpha = true;
                    tit18.backFaceCulling = false;
                    tit18.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 8; i++) {
                      var planetit18 = BABYLON.MeshBuilder.CreatePlane("planetit18", { width: 30.1, height: 50 }, scene);
                      planetit18.material = tit18;
                      planetit18.width = 30.1;
                      planetit18.height = 50;
                      planetit18.position.x = fxrand() * 300 - 150;
                      planetit18.position.z = fxrand() * 300 - 150;
                      planetit18.position.y = 20;
                    if (Math.sqrt(Math.pow(planetit18.position.x, 2) + Math.pow(planetit18.position.z, 2)) < 72)
                    {planetit18.dispose();}
                    if (tit18.flip) {
                      planetit18.scaling.x *= -1;
                    }
                    }
                    
                    var tit19 = new BABYLON.StandardMaterial("titan19", scene);
                    tit19.diffuseTexture = new BABYLON.Texture("./titans/titan19.png", scene);
                    tit19.diffuseTexture.hasAlpha = true;
                    tit19.backFaceCulling = false;
                    tit19.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 8; i++) {
                      var planetit19 = BABYLON.MeshBuilder.CreatePlane("planetit19", { width: 30.2, height: 50 }, scene);
                      planetit19.material = tit19;
                      planetit19.width = 30.2;
                      planetit19.height = 50;
                      planetit19.position.x = fxrand() * 300 - 150;
                      planetit19.position.z = fxrand() * 300 - 150;
                      planetit19.position.y = 20;
                    if (Math.sqrt(Math.pow(planetit19.position.x, 2) + Math.pow(planetit19.position.z, 2)) < 73)
                    {planetit19.dispose();}
                    if (tit19.flip) {
                      planetit19.scaling.x *= -1;
                    }
                    }
                    
                    powVar="Titans";
                    }
                    
                    
                    if(powNum>150 && powNum<=160){

                    var sAG = new BABYLON.StandardMaterial("statueAG1", scene);
                    sAG.diffuseTexture = new BABYLON.Texture("./statues/statueA1.png", scene);
                    sAG.diffuseTexture.hasAlpha = true;
                    sAG.backFaceCulling = false;
                    sAG.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 8; i++) {
                      var planesAG = BABYLON.MeshBuilder.CreatePlane("planesAG", { width: 30, height: 70 }, scene);
                      planesAG.material = sAG;
                      planesAG.width = 30;
                      planesAG.height = 70;
                      planesAG.position.x = fxrand() * 300 - 150;
                      planesAG.position.z = fxrand() * 300 - 150;
                      planesAG.position.y = 35;
                    if (Math.sqrt(Math.pow(planesAG.position.x, 2) + Math.pow(planesAG.position.z, 2)) < 75)
                    {planesAG.dispose();}
                    if (sAG.flip) {
                      planesAG.scaling.x *= -1;
                    }
                    }

                    var sAG2 = new BABYLON.StandardMaterial("statueAG2", scene);
                    sAG2.diffuseTexture = new BABYLON.Texture("./statues/statueA2.png", scene);
                    sAG2.diffuseTexture.hasAlpha = true;
                    sAG2.backFaceCulling = false;
                    sAG2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 8; i++) {
                      var planesAG2 = BABYLON.MeshBuilder.CreatePlane("planesAG2", { width: 29.5, height: 70 }, scene);
                      planesAG2.material = sAG2;
                      planesAG2.width = 29.5;
                      planesAG2.height = 70;
                      planesAG2.position.x = fxrand() * 300 - 150;
                      planesAG2.position.z = fxrand() * 300 - 150;
                      planesAG2.position.y = 35;
                    if (Math.sqrt(Math.pow(planesAG2.position.x, 2) + Math.pow(planesAG2.position.z, 2)) < 75)
                    {planesAG2.dispose();}
                    if (sAG2.flip) {
                      planesAG2.scaling.x *= -1;
                    }
                    }

                    var sAG3 = new BABYLON.StandardMaterial("statueAG3", scene);
                    sAG3.diffuseTexture = new BABYLON.Texture("./statues/statueA3.png", scene);
                    sAG3.diffuseTexture.hasAlpha = true;
                    sAG3.backFaceCulling = false;
                    sAG3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 8; i++) {
                      var planesAG3 = BABYLON.MeshBuilder.CreatePlane("planesAG3", { width: 29.4, height: 70 }, scene);
                      planesAG3.material = sAG3;
                      planesAG3.width = 29.4;
                      planesAG3.height = 70;
                      planesAG3.position.x = fxrand() * 300 - 150;
                      planesAG3.position.z = fxrand() * 300 - 150;
                      planesAG3.position.y = 35;
                    if (Math.sqrt(Math.pow(planesAG3.position.x, 2) + Math.pow(planesAG3.position.z, 2)) < 75)
                    {planesAG3.dispose();}
                    if (sAG3.flip) {
                      planesAG3.scaling.x *= -1;
                    }
                    }

                    var sCG1 = new BABYLON.StandardMaterial("statueCG1", scene);
                    sCG1.diffuseTexture = new BABYLON.Texture("./statues/statueC1.png", scene);
                    sCG1.diffuseTexture.hasAlpha = true;
                    sCG1.backFaceCulling = false;
                    sCG1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 8; i++) {
                      var planesCG1 = BABYLON.MeshBuilder.CreatePlane("planesCG1", { width: 37.5, height: 60 }, scene);
                      planesCG1.material = sCG1;
                      planesCG1.width = 37.5;
                      planesCG1.height = 60;
                      planesCG1.position.x = fxrand() * 300 - 150;
                      planesCG1.position.z = fxrand() * 300 - 150;
                      planesCG1.position.y = 30;
                    if (Math.sqrt(Math.pow(planesCG1.position.x, 2) + Math.pow(planesCG1.position.z, 2)) < 75)
                    {planesCG1.dispose();}
                    if (sCG1.flip) {
                      planesCG1.scaling.x *= -1;
                    }
                    }

                    var sCG2 = new BABYLON.StandardMaterial("statueCG2", scene);
                    sCG2.diffuseTexture = new BABYLON.Texture("./statues/statueC2.png", scene);
                    sCG2.diffuseTexture.hasAlpha = true;
                    sCG2.backFaceCulling = false;
                    sCG2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 8; i++) {
                      var planesCG2 = BABYLON.MeshBuilder.CreatePlane("planesCG2", { width: 38.5, height: 70 }, scene);
                      planesCG2.material = sCG2;
                      planesCG2.width = 38.5;
                      planesCG2.height = 70;
                      planesCG2.position.x = fxrand() * 300 - 150;
                      planesCG2.position.z = fxrand() * 300 - 150;
                      planesCG2.position.y = 35;
                    if (Math.sqrt(Math.pow(planesCG2.position.x, 2) + Math.pow(planesCG2.position.z, 2)) < 75)
                    {planesCG2.dispose();}
                    if (sCG2.flip) {
                      planesCG2.scaling.x *= -1;
                    }
                    }

                    var sCG3 = new BABYLON.StandardMaterial("statueCG3", scene);
                    sCG3.diffuseTexture = new BABYLON.Texture("./statues/statueC3.png", scene);
                    sCG3.diffuseTexture.hasAlpha = true;
                    sCG3.backFaceCulling = false;
                    sCG3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 8; i++) {
                      var planesCG3 = BABYLON.MeshBuilder.CreatePlane("planesCG3", { width: 35.75, height: 65 }, scene);
                      planesCG3.material = sCG3;
                      planesCG3.width = 35.75;
                      planesCG3.height = 65;
                      planesCG3.position.x = fxrand() * 300 - 150;
                      planesCG3.position.z = fxrand() * 300 - 150;
                      planesCG3.position.y = 32.5;
                    if (Math.sqrt(Math.pow(planesCG3.position.x, 2) + Math.pow(planesCG3.position.z, 2)) < 75)
                    {planesCG3.dispose();}
                    if (sCG3.flip) {
                      planesCG3.scaling.x *= -1;
                    }
                    }

                    var sBG = new BABYLON.StandardMaterial("statueBG", scene);
                    sBG.diffuseTexture = new BABYLON.Texture("./statues/statueB1.png", scene);
                    sBG.diffuseTexture.hasAlpha = true;
                    sBG.backFaceCulling = false;
                    sBG.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 8; i++) {
                      var planesBG = BABYLON.MeshBuilder.CreatePlane("planesBG", { width: 23.78, height: 65 }, scene);
                      planesBG.material = sBG;
                      planesBG.width = 23.78;
                      planesBG.height = 65;
                      planesBG.position.x = fxrand() * 300 - 150;
                      planesBG.position.z = fxrand() * 300 - 150;
                      planesBG.position.y = 32.5;
                    if (Math.sqrt(Math.pow(planesBG.position.x, 2) + Math.pow(planesBG.position.z, 2)) < 75)
                    {planesBG.dispose();}
                    if (sBG.flip) {
                      planesBG.scaling.x *= -1;
                    }
                    }

                    var sBG2 = new BABYLON.StandardMaterial("statueBG2", scene);
                    sBG2.diffuseTexture = new BABYLON.Texture("./statues/statueB2.png", scene);
                    sBG2.diffuseTexture.hasAlpha = true;
                    sBG2.backFaceCulling = false;
                    sBG2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 8; i++) {
                      var planesBG2 = BABYLON.MeshBuilder.CreatePlane("planesBG2", { width: 35, height: 70 }, scene);
                      planesBG2.material = sBG2;
                      planesBG2.width = 35;
                      planesBG2.height = 70;
                      planesBG2.position.x = fxrand() * 300 - 150;
                      planesBG2.position.z = fxrand() * 300 - 150;
                      planesBG2.position.y = 35;
                    if (Math.sqrt(Math.pow(planesBG2.position.x, 2) + Math.pow(planesBG2.position.z, 2)) < 75)
                    {planesBG2.dispose();}
                    if (sBG2.flip) {
                      planesBG2.scaling.x *= -1;
                    }
                    }

                    var sBG3 = new BABYLON.StandardMaterial("statueBG3", scene);
                    sBG3.diffuseTexture = new BABYLON.Texture("./statues/statueB3.png", scene);
                    sBG3.diffuseTexture.hasAlpha = true;
                    sBG3.backFaceCulling = false;
                    sBG3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 8; i++) {
                      var planesBG3 = BABYLON.MeshBuilder.CreatePlane("planesBG3", { width: 49.5, height: 100 }, scene);
                      planesBG3.material = sBG3;
                      planesBG3.width = 49.5;
                      planesBG3.height = 100;
                      planesBG3.position.x = fxrand() * 300 - 150;
                      planesBG3.position.z = fxrand() * 300 - 150;
                      planesBG3.position.y = 50;
                    if (Math.sqrt(Math.pow(planesBG3.position.x, 2) + Math.pow(planesBG3.position.z, 2)) < 75)
                    {planesBG3.dispose();}
                    if (sBG3.flip) {
                      planesBG3.scaling.x *= -1;
                    }
                    }

                    var sDG1 = new BABYLON.StandardMaterial("statueDG1", scene);
                    sDG1.diffuseTexture = new BABYLON.Texture("./statues/statueD1.png", scene);
                    sDG1.diffuseTexture.hasAlpha = true;
                    sDG1.backFaceCulling = false;
                    sDG1.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 8; i++) {
                      var planesDG1 = BABYLON.MeshBuilder.CreatePlane("planesDG1", { width: 25.5, height: 60 }, scene);
                      planesDG1.material = sDG1;
                      planesDG1.width = 25.5;
                      planesDG1.height = 60;
                      planesDG1.position.x = fxrand() * 300 - 150;
                      planesDG1.position.z = fxrand() * 300 - 150;
                      planesDG1.position.y = 30;
                    if (Math.sqrt(Math.pow(planesDG1.position.x, 2) + Math.pow(planesDG1.position.z, 2)) < 75)
                    {planesDG1.dispose();}
                    if (sDG1.flip) {
                      planesDG1.scaling.x *= -1;
                    }
                    }

                    var sDG2 = new BABYLON.StandardMaterial("statueDG2", scene);
                    sDG2.diffuseTexture = new BABYLON.Texture("./statues/statueD2.png", scene);
                    sDG2.diffuseTexture.hasAlpha = true;
                    sDG2.backFaceCulling = false;
                    sDG2.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 8; i++) {
                      var planesDG2 = BABYLON.MeshBuilder.CreatePlane("planesDG2", { width: 33.3, height: 70 }, scene);
                      planesDG2.material = sDG2;
                      planesDG2.width = 33.3;
                      planesDG2.height = 70;
                      planesDG2.position.x = fxrand() * 300 - 150;
                      planesDG2.position.z = fxrand() * 300 - 150;
                      planesDG2.position.y = 35;
                    if (Math.sqrt(Math.pow(planesDG2.position.x, 2) + Math.pow(planesDG2.position.z, 2)) < 75)
                    {planesDG2.dispose();}
                    if (sDG2.flip) {
                      planesDG2.scaling.x *= -1;
                    }
                    }

                    var sDG3 = new BABYLON.StandardMaterial("statueDG3", scene);
                    sDG3.diffuseTexture = new BABYLON.Texture("./statues/statueD3.png", scene);
                    sDG3.diffuseTexture.hasAlpha = true;
                    sDG3.backFaceCulling = false;
                    sDG3.flip = fxrand() >= 0.5;
                    for (let i = 0; i < 8; i++) {
                      var planesDG3 = BABYLON.MeshBuilder.CreatePlane("planesDG3", { width: 28.88, height: 60 }, scene);
                      planesDG3.material = sDG3;
                      planesDG3.width = 28.88;
                      planesDG3.height = 60;
                      planesDG3.position.x = fxrand() * 300 - 150;
                      planesDG3.position.z = fxrand() * 300 - 150;
                      planesDG3.position.y = 30;
                    if (Math.sqrt(Math.pow(planesDG3.position.x, 2) + Math.pow(planesDG3.position.z, 2)) < 75)
                    {planesDG3.dispose();}
                    if (sDG3.flip) {
                      planesDG3.scaling.x *= -1;
                    }
                    }
                    
                    powVar="Giant Statues";
                    }
                    
                    
                    if(powNum>160 && powNum<=166){
                              
                    const smokeParticleSystem = new BABYLON.ParticleSystem("smoke", 2000, scene);
                    
                    smokeParticleSystem.particleTexture = new BABYLON.Texture("elements/smoke.png", scene);
                    smokeParticleSystem.emitter = new BABYLON.Vector3(0, 0, 0); 
                    
                    smokeParticleSystem.minEmitBox = new BABYLON.Vector3(-50, 0, -50); 
                    smokeParticleSystem.maxEmitBox = new BABYLON.Vector3(50, 0, 50); 
                    
                    smokeParticleSystem.color1 = new BABYLON.Color4(0.1, 0.1, 0.1, 1);
                    smokeParticleSystem.color2 = new BABYLON.Color4(0.1, 0.1, 0.1, 1);
                    smokeParticleSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.5);
                    
                    smokeParticleSystem.minSize = 0.8;
                    smokeParticleSystem.maxSize = 3;
                    
                    smokeParticleSystem.minLifeTime = 0.8;
                    smokeParticleSystem.maxLifeTime = 1.9;
                    
                    smokeParticleSystem.emitRate = 700;
                    
                    smokeParticleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
                    
                    smokeParticleSystem.gravity = new BABYLON.Vector3(0, 1, 0);
                    smokeParticleSystem.direction1 = new BABYLON.Vector3(-1.5, 8, -1.5);
                    smokeParticleSystem.direction2 = new BABYLON.Vector3(1.5, 8, 1.5);
                    
                    smokeParticleSystem.minAngularSpeed = 0;
                    smokeParticleSystem.maxAngularSpeed = Math.PI / 2;
                    
                    smokeParticleSystem.minEmitPower = 0.8;
                    smokeParticleSystem.maxEmitPower = 3;
                    smokeParticleSystem.updateSpeed = 0.0008;
                    
                    smokeParticleSystem.start();

                    powVar="Local Warming";
                    }
                    

                    //Entities
                    
                    var entNum;
                    var entVar;

                    entNum=Math.round(genR(0,250));
                    
                    var material = new BABYLON.StandardMaterial("mat", scene);
                    var createDodecahedron = function(position, size) {
                        material.diffuseColor = new BABYLON.Color3(genR(0,1), genR(0,1), genR(0,1));
                        var dodecahedron = BABYLON.MeshBuilder.CreatePolyhedron("dodecahedron", { type: 2, size: size }, scene);
                        dodecahedron.position = position;
                        dodecahedron.material = material;
                        var spinAnimation = new BABYLON.Animation("spinAnimation", "rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                        var spinKeyFrames = [];
                        spinKeyFrames.push({ frame: 0, value: 0 });
                        var spinEndFrame = genR(20, 60);
                        spinKeyFrames.push({ frame: spinEndFrame, value: 2 * Math.PI });
                        spinAnimation.setKeys(spinKeyFrames);
                        dodecahedron.animations.push(spinAnimation);
                        scene.beginAnimation(dodecahedron, 0, spinEndFrame, true);
                        return dodecahedron;
                    };
                    
                    if(entNum<=43){
                        var position = new BABYLON.Vector3(genR(20,30), -15, genR(20,30));
                        var size = 0.03;
                        for (let i = 0; i < 250; i++) {
                            var angle = i * Math.PI / 100;
                            var spiralOffset = new BABYLON.Vector3(Math.sin(angle) * i, i, Math.cos(angle) * i);
                            createDodecahedron(position.add(spiralOffset), size + i/10);
                        }
                        entVar="Space Tentacle";
                    }
                    
                    if(entNum>43 && entNum<=80){
                    var spriteManager30 = new BABYLON.SpriteManager("spriteManager30", "elements/alien1.png", 20, {width: 572, height: 636}, scene);
                    spriteManager30.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7, 20); i++) {
                    var sprite30 = new BABYLON.Sprite("sprite28", spriteManager30);
                    sprite30.playAnimation(0, 4, true, animationSpeed);
                    sprite30.width = 5.4;
                    sprite30.height = 6;
                    sprite30.position.x = fxrand() * 300 - 150;
                    sprite30.position.z = fxrand() * 300 - 150;
                    sprite30.position.y = genR(15,50);
                    if (Math.sqrt(Math.pow(sprite30.position.x, 2) + Math.pow(sprite30.position.z, 2)) < 25)
                    {sprite30.dispose();}
                    if (spriteManager30.flip) {
                    sprite30.invertU = true;
                    }
                              var posYAnimation = new BABYLON.Animation("posYAnimation", "position.y", genR(25,35), BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                              var keys = []; 
                              keys.push({ frame: 0, value: sprite30.position.y });
                              keys.push({ frame: 50, value: sprite30.position.y + genR(2,4) });
                              keys.push({ frame: 100, value: sprite30.position.y });
                              posYAnimation.setKeys(keys);
                              sprite30.animations.push(posYAnimation);
                              scene.beginAnimation(sprite30, 0, 100, true);
                    }
                    engine.runRenderLoop(function() {
                    scene.render();
                    });          
                    window.addEventListener("resize", function() {
                    engine.resize();
                    });

                                        
                    var spriteManager31 = new BABYLON.SpriteManager("spriteManager31", "elements/alien2.png", 20, {width: 624, height: 500}, scene);
                    spriteManager31.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7, 20); i++) {
                    var sprite31 = new BABYLON.Sprite("sprite31", spriteManager31);
                    sprite31.playAnimation(0, 4, true, animationSpeed);
                    sprite31.width = 6.24;
                    sprite31.height = 5;
                    sprite31.position.x = fxrand() * 300 - 150;
                    sprite31.position.z = fxrand() * 300 - 150;
                    sprite31.position.y = genR(15,50);
                    if (Math.sqrt(Math.pow(sprite31.position.x, 2) + Math.pow(sprite31.position.z, 2)) < 25)
                    {sprite31.dispose();}
                    if (spriteManager31.flip) {
                    sprite31.invertU = true;
                    }
                              var posYAnimation1 = new BABYLON.Animation("posYAnimation", "position.y", genR(25,35), BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                              var keys1 = []; 
                              keys1.push({ frame: 0, value: sprite31.position.y });
                              keys1.push({ frame: 50, value: sprite31.position.y + genR(2,4) });
                              keys1.push({ frame: 100, value: sprite31.position.y });
                              posYAnimation1.setKeys(keys1);
                              sprite31.animations.push(posYAnimation1);
                              scene.beginAnimation(sprite31, 0, 100, true);
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    
                    var spriteManager32 = new BABYLON.SpriteManager("spriteManager32", "elements/alien3.png", 20, {width: 500, height: 533}, scene);
                    spriteManager32.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7, 20); i++) {
                    var sprite32 = new BABYLON.Sprite("sprite32", spriteManager32);
                    sprite32.playAnimation(0, 4, true, animationSpeed);
                    sprite32.width = 5;
                    sprite32.height = 5.33;
                    sprite32.position.x = fxrand() * 300 - 150;
                    sprite32.position.z = fxrand() * 300 - 150;
                    sprite32.position.y = genR(15,50);
                    if (Math.sqrt(Math.pow(sprite32.position.x, 2) + Math.pow(sprite32.position.z, 2)) < 25)
                    {sprite32.dispose();}
                    if (spriteManager32.flip) {
                    sprite32.invertU = true;
                    }
                              var posYAnimation2 = new BABYLON.Animation("posYAnimation", "position.y", genR(25,35), BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                              var keys2 = []; 
                              keys2.push({ frame: 0, value: sprite32.position.y });
                              keys2.push({ frame: 50, value: sprite32.position.y + genR(2,4) });
                              keys2.push({ frame: 100, value: sprite32.position.y });
                              posYAnimation2.setKeys(keys2);
                              sprite32.animations.push(posYAnimation2);
                              scene.beginAnimation(sprite32, 0, 100, true);
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    
                    var spriteManager33 = new BABYLON.SpriteManager("spriteManager33", "elements/alien4.png", 20, {width: 414, height: 600}, scene);
                    spriteManager33.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7, 20); i++) {
                    var sprite33 = new BABYLON.Sprite("sprite33", spriteManager33);
                    sprite33.playAnimation(0, 4, true, animationSpeed);
                    sprite33.width = 4.14;
                    sprite33.height = 6;
                    sprite33.position.x = fxrand() * 300 - 150;
                    sprite33.position.z = fxrand() * 300 - 150;
                    sprite33.position.y = genR(15,50);
                    if (Math.sqrt(Math.pow(sprite33.position.x, 2) + Math.pow(sprite33.position.z, 2)) < 25)
                    {sprite33.dispose();}
                    if (spriteManager33.flip) {
                    sprite33.invertU = true;
                    }
                              var posYAnimation3 = new BABYLON.Animation("posYAnimation", "position.y", genR(25,35), BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                              var keys3 = []; 
                              keys3.push({ frame: 0, value: sprite33.position.y });
                              keys3.push({ frame: 50, value: sprite33.position.y + genR(2,4) });
                              keys3.push({ frame: 100, value: sprite33.position.y });
                              posYAnimation3.setKeys(keys3);
                              sprite33.animations.push(posYAnimation3);
                              scene.beginAnimation(sprite33, 0, 100, true);
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });
                    
                    var spriteManager34 = new BABYLON.SpriteManager("spriteManager34", "elements/alien5.png", 20, {width: 514, height: 500}, scene);
                    spriteManager34.flip = fxrand() >= 0.5;
                    for (let i = 0; i < genR(7, 20); i++) {
                    var sprite34 = new BABYLON.Sprite("sprite34", spriteManager34);
                    sprite34.playAnimation(0, 4, true, animationSpeed);
                    sprite34.width = 5.14;
                    sprite34.height = 5;
                    sprite34.position.x = fxrand() * 300 - 150;
                    sprite34.position.z = fxrand() * 300 - 150;
                    sprite34.position.y = genR(15,50);
                    if (Math.sqrt(Math.pow(sprite34.position.x, 2) + Math.pow(sprite34.position.z, 2)) < 25)
                    {sprite34.dispose();}
                    if (spriteManager34.flip) {
                    sprite34.invertU = true;
                    }
                              var posYAnimation4 = new BABYLON.Animation("posYAnimation", "position.y", genR(25,35), BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                              var keys4 = []; 
                              keys4.push({ frame: 0, value: sprite34.position.y });
                              keys4.push({ frame: 50, value: sprite34.position.y + genR(2,4) });
                              keys4.push({ frame: 100, value: sprite34.position.y });
                              posYAnimation4.setKeys(keys4);
                              sprite34.animations.push(posYAnimation4);
                              scene.beginAnimation(sprite34, 0, 100, true);
                    }
                    engine.runRenderLoop(function() {
                        scene.render();
                    });
                    window.addEventListener("resize", function() {
                        engine.resize();
                    });     
                    entVar="Organic";
                    }
                    
                    if(entNum>80 && entNum<=107){
                    const numSpheres = genR(15, 30);
                    
                    class Sphere {
                        constructor(mesh, speed, initialPos, waveAmplitude) {
                            this.mesh = mesh;
                            this.speed = speed;
                            this.initialPos = initialPos;
                            this.time = genR(0, 2 * Math.PI);
                            this.waveAmplitude = waveAmplitude;
                        }
                        
                        update() {
                            this.time += this.speed;
                            this.mesh.position.y = Math.abs(Math.sin(this.time) * this.waveAmplitude);
                        }
                    }
                    
                    const sphereMeshes = Array.from({ length: numSpheres }, () => {
                        let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: genR(0.3, 1.4)}, scene);
                        sphere.position = new BABYLON.Vector3(genR(-25, 25), genR(-25, 25), genR(-25, 25));
                    
                        let noiseTexture = new BABYLON.NoiseProceduralTexture("perlin", 256, scene);
                        noiseTexture.animationSpeedFactor = genR(3, 7); 
                        noiseTexture.persistence = genR(0.3, 0.7);
                        noiseTexture.brightness = genR(0.3, 0.7);
                        
                        let material = new BABYLON.StandardMaterial("mat", scene);
                        material.diffuseTexture = noiseTexture;
                        material.specularColor = new BABYLON.Color3(genR(0.3, 0.7), genR(0.3, 0.7), genR(0.3, 0.7));
                        material.emissiveColor = new BABYLON.Color3(genR(0.1, 0.3), genR(0.1, 0.3), genR(0.1, 0.3));
                        material.ambientColor = new BABYLON.Color3(genR(0.3, 0.7), genR(0.3, 0.7), genR(0.3, 0.7));
                        sphere.material = material;
                    
                        return sphere;
                    });
                    
                    const spheres = sphereMeshes.map(sphere => new Sphere(
                        sphere,
                        genR(0.0005, 0.002),
                        sphere.position.clone(),
                        genR(5, 15)
                    ));
                    
                    scene.registerBeforeRender(() => {
                        for (const sphere of spheres) {
                            sphere.update();
                        }
                    });
                    entVar="Bouncing Spheres";
                    }
                    
                    
                    class Branch {
                        constructor(mesh, trunk, speed, radius, rotationSpeed) {
                            this.mesh = mesh;
                            this.trunk = trunk;
                            this.speed = speed;
                            this.radius = radius;
                            this.rotationSpeed = rotationSpeed;
                            this.time = Math.random() * (2 * Math.PI);
                        }
                        update() {
                            this.time += this.speed;
                            this.mesh.position.x = this.trunk.position.x + Math.cos(this.time) * this.radius;
                            this.mesh.position.z = this.trunk.position.z + Math.sin(this.time) * this.radius;
                            this.mesh.position.y = this.trunk.position.y + Math.sin(this.time) * this.radius;
                            this.mesh.rotate(BABYLON.Axis.Y, this.rotationSpeed, BABYLON.Space.WORLD);
                        }
                    }
                    
                    function createTree(scene, position, branches) {
                        let trunkHeight = genR(8, 16);
                        let trunkTessellation = genR(8, 20);
                        let trunk = BABYLON.MeshBuilder.CreateCylinder('trunk', {
                            diameterTop: genR(0.1, 0.3), 
                            diameterBottom: genR(0.4, 0.6), 
                            height: trunkHeight,
                            tessellation: trunkTessellation
                        }, scene);
                        trunk.position = position.clone();
                        trunk.position.y += trunkHeight / 2;
                        let noiseTexture = new BABYLON.NoiseProceduralTexture("perlin", 256, scene);
                        noiseTexture.animationSpeedFactor = genR(3, 7); 
                        noiseTexture.persistence = genR(0.3, 0.7);
                        noiseTexture.brightness = genR(0.3, 0.7);
                        let material = new BABYLON.StandardMaterial("treeMaterial", scene);
                        material.diffuseTexture = noiseTexture;
                        material.specularColor = new BABYLON.Color3(genR(0.3, 0.7), genR(0.3, 0.7), genR(0.3, 0.7));
                        material.emissiveColor = new BABYLON.Color3(genR(0.1, 0.3), genR(0.1, 0.3), genR(0.1, 0.3));
                        material.ambientColor = new BABYLON.Color3(genR(0.3, 0.7), genR(0.3, 0.7), genR(0.3, 0.7));
                        trunk.material = material;
                        for (let i = 0; i < genR(5, 15); i++) {
                            let branchHeight = genR(1, 3);
                            let branchTessellation = genR(6, 20);
                            let branch = BABYLON.MeshBuilder.CreateCylinder('branch', {
                                diameterTop: genR(0.03, 0.07),
                                diameterBottom: genR(0.08, 0.12), 
                                height: branchHeight,
                                tessellation: branchTessellation
                            }, scene);     
                            branch.position.y = genR(trunkHeight / 2, trunkHeight);
                            branch.position.x = genR(-1, 1);
                            branch.position.z = genR(-1, 1);
                            branch.rotation.z = genR(-Math.PI / 4, Math.PI / 4);
                            branch.rotation.x = genR(-Math.PI / 4, Math.PI / 4);
                            branch.material = material;
                            branches.push(new Branch(branch, trunk, genR(0.005, 0.01), genR(0.5, 1.5), genR(0.01, 0.03)));
                        }
                    }
                    
                    if(entNum>107 && entNum<=141){
                        let branches = [];
                        const numTrees = genR(10, 20);
                        for (let i = 0; i < numTrees; i++) {
                            let treePos = new BABYLON.Vector3(genR(-50, 50), 0, genR(-50, 50));
                            while (treePos.length() < genR(10, 20)) {
                                treePos = new BABYLON.Vector3(genR(-50, 50), 0, genR(-50, 50));
                            }
                            createTree(scene, treePos, branches);
                        }
                        scene.registerBeforeRender(function() {
                            for(let branch of branches) {
                                branch.update();
                            }
                        });
                        entVar="Obelisks";
                    }
                    
                    if(entNum>141 && entNum<=250){
                        entVar="None";
                    }

 

 
 

          //VR
          
	var helper = scene.createDefaultVRExperience({createDeviceOrientationCamera: false});
	helper.enableInteractions();
                    
                    
                var shapes = scene.meshes;
                for (let i = 0; i < shapes.length; i++) {
                let names = ["planea1", "planea2"];
                for(let i = 5; i <= 21; i++){
                names.push(`planea${i}`);
                }
                if (!names.includes(shapes[i].name)) {
                const pos = shapes[i].position;
                const targetPos = new BABYLON.Vector3(0, pos.y, 0);
                shapes[i].lookAt(targetPos);
                }
                }            
                    
                  
              $fx.features({
                    "Sky": skyVar,
                    "Flying Objects": flyVar,
                    "Power": powVar,
                    "Filter": filVar,
                    "Houses": houVar,
                    "Buildings": buiVar,
                    "Light": ligVar,
                    "Floor": floorVar,
                    "Music": musVar,                   
                    "Entities": entVar,
                    "Flower Outgrowth": floVar,
                    "Arch": arcVar,
              });

              console.log($fx.getFeatures());
              
              
              return scene;
          };

          var scene = createScene();

          engine.runRenderLoop(function () {
                  scene.render();
          });

          window.addEventListener("resize", function () {
                  engine.resize();
          });

          function genR(min, max) {
          let result = 0;
          if (!max) {
          result = fxrand() * (min - 0) + 0; }
          else {
          result = fxrand() * (max - min) + min; }
          return result;
          }

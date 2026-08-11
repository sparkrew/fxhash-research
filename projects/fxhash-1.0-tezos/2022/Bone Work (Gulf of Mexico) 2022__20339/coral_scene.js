class CoralScene
{
    constructor()
    {
        this.sun = new Sun();     
        this.allCorals = [];  

        this.camRight = new BABYLON.Vector3(1,0,0);
        this.camUp = new BABYLON.Vector3(0,1,0);
        this.targetPosition = new BABYLON.Vector3(0,0,0);
        this.startPosition = new BABYLON.Vector3(0,0,0);
        this.isDragging = false;
        this.selectedCoral = null;

        this.config = new Config();

        this.shadowGenerator = null;
    }

    async createScene(scene, adt, canvas, dateAndTime, engine)
    {
        //this.ground = BABYLON.MeshBuilder.CreateGround("ground_surface", { width: 10, height: 10, subdivisions: 8 }, scene);
        //this.ground.scaling = new BABYLON.Vector3(400, 400, 400);

        scene.enablePhysics(new BABYLON.Vector3(0,0,0), new BABYLON.AmmoJSPlugin());

        const cameraLookAtTarget = new BABYLON.Vector3(0, Coral_Height, 0);
        const models = await loadModels(scene);
        await loadOceanGeo(scene);
        
        this.camera = new BABYLON.ArcRotateCamera("camera", 0, Math.PI / 3, 10, new BABYLON.Vector3(0, 0, 0), scene);
        this.camera.lowerRadiusLimit = 4;
        this.camera.upperRadiusLimit = 14;
        this.camera.minZ = 1.0;
        this.camera.maxZ = 30000 * 2;
        this.camera.wheelDeltaPercentage = 0.005;        
        this.camera.checkCollisions = false;
        this.camera.useNaturalPinchZoom = true;
        this.camera.lockedTarget = cameraLookAtTarget;
        this.camera.alpha = 6.329;
        this.camera.beta = 1.75;
        this.camera.lowerBetaLimit = this.camera.beta;
        this.camera.upperBetaLimit = this.camera.beta;
        this.camera.radius = 4.5;
        this.camera.attachControl(canvas, true);
        /*
        this.camera.useAutoRotationBehavior = false;
        this.camera.autoRotationBehavior.idleRotationSpeed = 0.1;
        this.camera.autoRotationBehavior.idleRotationWaitTime = 10000;
        */
        this.camera.useAutoRotationBehavior = true;
        this.camera.autoRotationBehavior.idleRotationSpeed = 0.015;

        const dirLight = new BABYLON.DirectionalLight("dir_light", new BABYLON.Vector3(0,-1,0), scene);
        dirLight.intensity = 2.5;
        dirLight.position = new BABYLON.Vector3(0,10,0)
        dirLight.direction = new BABYLON.Vector3(0,-1,0);
        //dirLight.diffuse = new BABYLON.Color3(1, 0.9, 0.8);
        //dirLight.diffuse = new BABYLON.Color3(206/255, 160/255, 119/255);
        dirLight.diffuse = new BABYLON.Color3(195/255, 182/255, 169/255);
        dirLight.autoCalcShadowZBounds = true;

        const dirBackLight = new BABYLON.DirectionalLight("dir_back_light", new BABYLON.Vector3(0,-1,0), scene);
        dirBackLight.intensity = 0;
        dirBackLight.diffuse = new BABYLON.Color3(15/255, 15/255, 15/255);

        this.sky = new Sky(scene, adt, this.config);
        this.ocean = new Ocean(scene);

 
        this.addCubeLight(0, scene);      
        this.addCubeLight(1, scene);
               /*
        this.addCubeLight(2, scene);      
        this.addCubeLight(3, scene);        
        this.addCubeLight(4, scene);      
        this.addCubeLight(5, scene);
        */

        let timer=new Timer(); // define as global variable

        this.shadowDarkness_calc = 0.05;
        if(this.config.requestingShadowMap())
        {
            //console.log("Shadowmap is ON");
            this.shadowGenerator = new BABYLON.ShadowGenerator(1024, dirLight);
            //this.shadowGenerator.usePoissonSampling = true;
           // this.shadowGenerator.useBlurExponentialShadowMap = true;
            this.shadowGenerator.usePercentageCloserFiltering = true;
            this.shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_HIGH;
            this.shadowGenerator.blurScale = 2;
            //this.shadowGenerator.useKernelBlur = true;
            this.shadowGenerator.setDarkness(this.shadowDarkness_calc);
            this.shadowGenerator.bias = 0.01;
        } else
        {
            //console.log("Shadowmap is OFF");
        }

        for(let i=0;i<N_Models;i++)
        {
            let cg = new Coral(i, scene, this.allCorals, models);
            cg.mesh.receiveShadows = true;
            this.allCorals.push(cg);         
            if(this.shadowGenerator != null)
            {
                this.shadowGenerator.getShadowMap().renderList.push(cg.mesh);
            }
            
        }

        this.createInvisibleFullscreenButton(engine, adt);

        let frameCtr = 0;
        /*
        scene.registerAfterRender(() => {

        });
        */

        scene.registerBeforeRender(() => {

            timer.update();
            let sunAngles = this.sun.calc(dateAndTime.getLocalDate());
            let sd = this.sun.getDirFromAngles(sunAngles);
            //let sd = this.sun.getDir(dateAndTime.getLocalDate());
            dirLight.direction = new BABYLON.Vector3(sd.x, sd.y, sd.z);

            //let reflectionPlane = BABYLON.Plane.FromPositionAndNormal(cameraLookAtTarget, dirLight.direction);
            dirBackLight.direction = new BABYLON.Vector3(-sd.x, -sd.y, -sd.z);

            const sun_radius = -20.0;
            let sunPos = new BABYLON.Vector3(sd.x * sun_radius, sd.y * sun_radius, sd.z * sun_radius);
            let cr = this.camera.alpha;
            let skyrotation = new BABYLON.Vector3(0, -cr, 0);            
            this.sky.update(sunPos, skyrotation, sunAngles.y / dToR);

            this.camUp = this.camera.getDirection(new BABYLON.Vector3(0,1,0));
            this.camRight = this.camera.getDirection(new BABYLON.Vector3(1,0,0));

            frameCtr++;
            if(frameCtr == 20)
            {
                //console.log(`Stopping all ${this.allCorals.length} corals again at frame ${frameCtr}`);
                for(let i=0;i<this.allCorals.length;i++)
                {
                    this.allCorals[i].mesh.physicsImpostor.setLinearVelocity(BABYLON.Vector3.Zero());
                    this.allCorals[i].mesh.physicsImpostor.setAngularVelocity(BABYLON.Vector3.Zero());
                    this.allCorals[i].mesh.physicsImpostor.setMass(fixedMass);
                }
            }

            if(this.isDragging)
            {
                let oldPos = this.selectedCoral.mesh.position;
                this.selectedCoral.mesh.physicsImpostor.setMass(1);
                let imp = new BABYLON.Vector3(this.targetPosition.x - oldPos.x, this.targetPosition.y - oldPos.y, this.targetPosition.z - oldPos.z);
                imp.x *= 10.5;
                imp.y *= 10.5;
                imp.z *= 10.5;
                this.selectedCoral.mesh.physicsImpostor.setLinearVelocity(imp);                
            }

            if(frameCtr >= 2)
            {
                this.ocean.setEnvCubemap(this.sky.rp.cubeTexture);
            }
            if(frameCtr >= 30)
            {
                for(let i=0;i<this.allCorals.length;i++)
                {
                    this.allCorals[i].mesh.isVisible = true;
                }
            }
            this.ocean.update(this.camera.position, dirLight.direction, timer);

            for(let i=0;i<this.allCorals.length;i++)
            {
                if(this.allCorals[i] != this.selectedCoral)
                {
                    this.allCorals[i].mesh.physicsImpostor.setLinearVelocity(BABYLON.Vector3.Zero());
                    this.allCorals[i].mesh.physicsImpostor.setAngularVelocity(BABYLON.Vector3.Zero());
                }
            }

            let vertSunAngle = sunAngles.y / dToR;
            this.shadowDarkness_calc = (1-Math.max(Math.min( (-1-vertSunAngle)/3, 1), 0)) * 0.05;
            this.shadowGenerator.setDarkness(this.shadowDarkness_calc);

            /*
            if(frameCtr <= 500)
            {
             this.camera.useAutoRotationBehavior = false;
            }
            else
            {
             this.camera.useAutoRotationBehavior = true;
            }
            */

            if(frameCtr < 5) this.camera.alpha = 2.5*Math.PI-sunAngles.x;

        });

        scene.onPointerDown = () =>
        {
                if(this.isDragging)
                {
                    // maybe we are zooming?
                    //console.log("Multitouch??");
                    this.selectedCoral.mesh.physicsImpostor.setLinearVelocity(BABYLON.Vector3.Zero());
                    this.selectedCoral.mesh.physicsImpostor.setAngularVelocity(BABYLON.Vector3.Zero());
                    this.selectedCoral.mesh.physicsImpostor.setMass(fixedMass);
                    this.isDragging = false;                    
                    this.camera.attachControl();
                    return;
                }

                // hit test
                let pickInfo = scene.pick(scene.pointerX, scene.pointerY, (mesh) =>
                {
                    for(let i=0;i<this.allCorals.length;i++)
                    {
                        if(mesh == this.allCorals[i].mesh) return true;
                    }       
                    return false;
                });

                if((pickInfo != null) && pickInfo.hit)
                {
                    this.selectedCoral = this.findCoral(pickInfo.pickedMesh);
                    this.isDragging = true;
                    this.camera.detachControl();
                    this.startPosition = new BABYLON.Vector3(this.selectedCoral.mesh.position.x, this.selectedCoral.mesh.position.y, this.selectedCoral.mesh.position.z);
                    this.targetPosition = new BABYLON.Vector3(this.selectedCoral.mesh.position.x, this.selectedCoral.mesh.position.y, this.selectedCoral.mesh.position.z);            
                } else
                {
                    this.selectedCoral = null;
                }

                //console.log("Pointer down");

        };   
        
        scene.onPointerUp = () =>
        {
            //console.log("Pointer up");
            if(this.isDragging)
            {
                this.selectedCoral.mesh.physicsImpostor.setLinearVelocity(BABYLON.Vector3.Zero());
                this.selectedCoral.mesh.physicsImpostor.setAngularVelocity(BABYLON.Vector3.Zero());
                this.selectedCoral.mesh.physicsImpostor.setMass(fixedMass);
                this.selectedCoral = null;
                this.isDragging = false;
                this.camera.attachControl();
            }
        };

        scene.onPointerMove = (evt, pickInfo, type) =>
        {
            if(pickInfo.ray != null)
            {
                if(this.isDragging)
                {
                    const w = 3 * 1.2; // bounding box for moving corals
                    this.targetPosition = rayPlaneIntersection(this.startPosition, this.camRight, this.camUp, pickInfo.ray);
                    this.targetPosition.x = Math.min(Math.max(this.targetPosition.x, -w), w);
                    this.targetPosition.y = Math.min(Math.max(this.targetPosition.y, -w + Coral_Height), w + Coral_Height);
                    this.targetPosition.z = Math.min(Math.max(this.targetPosition.z, -w), w);
                }                
            }
        }
        
        if(this.config.requestingSSAO())
        {
            //console.log("SSAO is on");
            let ssao = new BABYLON.SSAO2RenderingPipeline("ssao2",
            scene,
            {
                ssaoRatio: 1.0,
                blurRatio: 1
            }
            );
    
            ssao.radius = 0.65;
            ssao.base = 0.1;
            ssao.totalStrength = 2;
            ssao.expensiveBlur = false;
            ssao.samples = 32;
            //these are important to avoid z-fighting. Tweak them according to the size of the scene
            ssao.maxZ = 50;
            ssao.minZAspect = 0.5;
      
            // Attach camera to the SSAO render pipeline
            
            scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline(
              "ssao2",
              scene.activeCamera
            );
        } else
        {
            //console.log("SSAO is OFF");
        }

        
        //this.postEffects = new PostEffects(this.camera, scene, engine);
    }

    findCoral(mesh)
    {
        for(let i=0;i<this.allCorals.length;i++)
        {
            if(this.allCorals[i].mesh == mesh) return this.allCorals[i];
        }

        return null;        
    }

    addCubeLight(idx, scene)
    {
        //let intensity = [1.5, 0.25, 1.5, 0.25, 1.5, 0.25];
        let intensity = [0.5, 0.25, 0.3, 0.3, 0.3, 0.3];
        let light_direction = [new BABYLON.Vector3(0.2, 1, 0), new BABYLON.Vector3(-0.2, -1, 0),
            new BABYLON.Vector3(-1, 0.1, 0), new BABYLON.Vector3(1, -0.1, 0),
            new BABYLON.Vector3(0, 0, 1), new BABYLON.Vector3(0, 0, -1)];

        let light_color = [new BABYLON.Color3(1, 242/255, 210/255)
            , new BABYLON.Color3(210/255, 232/255, 255/255), new BABYLON.Color3(255/255, 235/255, 150/255), new BABYLON.Color3(255/255, 235/255, 150/255), BABYLON.Color3.White(), BABYLON.Color3.White()];

        const dirLight = new BABYLON.DirectionalLight(
            "cube_light_" + idx ,
            light_direction[idx],
            scene
        );
        dirLight.intensity = intensity[idx];
        dirLight.diffuse = light_color[idx];
        dirLight.specular = light_color[idx];
    }

    createInvisibleFullscreenButton(engine, advancedTexture)
    {
        let panel = new BABYLON.GUI.StackPanel()
        panel.width="220px";
        panel.fontSize="16px";
        panel.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        panel.verticalAlignment=BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        panel.left="0px";
    
        advancedTexture.addControl(panel)

        let FSbutton = BABYLON.GUI.Button.CreateSimpleButton("but1","");
        FSbutton.width="100px";
        FSbutton.horizontalAlignment=BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        FSbutton.height="100px";
        FSbutton.color="black";
        FSbutton.alpha = 0;
        FSbutton.thickness = 0;
        panel.addControl(FSbutton)
    
        FSbutton.onPointerDownObservable.add(function(){
            engine.switchFullscreen(false)
            FSbutton.alpha=0;
        })

    }
}

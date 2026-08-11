var nightSkyVSrc = `
precision highp float;

attribute vec3 position;
uniform mat4 worldViewProjection;

varying vec3 vPosition;

void main(void)
{
    vec3 p = position;
    vPosition = p;
    gl_Position = worldViewProjection * vec4(p, 1.);
}
`;

var nightSkyFSrc = `
uniform mat4 world;
uniform float opacity;
//uniform samplerCube envCubemapSampler;

varying vec3 vPosition;
void main(void)
{
    vec3 vPositionW = vec3(world * vec4(vPosition, 1.0));
    
    //vec4 skyCol = textureCube(envCubemapSampler, vPositionW);
    //skyCol.w = opacity;

    vec3 viewDir = normalize(vPositionW);
    vec4 skyCol;
    vec3 skyBottomCol = vec3(0.2,0.2,0.2);
    vec3 skyTopCol = vec3(0.055,0.05,0.1);
    float w = smoothstep(-0.2,0.4,viewDir.y);
    skyCol.xyz = mix(skyBottomCol, skyTopCol, w);
    skyCol.w = opacity;
    

    gl_FragColor = skyCol;
}
`;

const SKYBOX_SCALING = 15;

class Sky
{    
    constructor(scene, adt, config)
    {
        this.fullScreenUITexture = adt;
        const skyboxSize = 3100;
        this.skybox = BABYLON.Mesh.CreateBox("skybox", skyboxSize, scene, false, BABYLON.Mesh.BACKSIDE);
        this.skybox.scaling = new BABYLON.Vector3(SKYBOX_SCALING, SKYBOX_SCALING, SKYBOX_SCALING);
        this.skyMaterial = new BABYLON.SkyMaterial("skyMaterial", scene);
        //this.skyMaterial.backFaceCulling = false;
        this.skyMaterial.useSunPosition = true;
        this.skyMaterial.cameraOffset.y = 47;
        //this.skyMaterial.turbidity = 0.1;
        //this.skyMaterial.luminance = 0.8;
        //this.skyMaterial.rayleigh = 20;        
        this.skybox.material = this.skyMaterial;
        //this.skybox.renderingGroupId = 1;

/*         this.turbity = [this.skyMaterial.turbidity];
        this.luminance = [this.skyMaterial.luminance];
        this.rayleigh = [this.skyMaterial.rayleigh];
        this.mieDirectionalG = [this.skyMaterial.mieDirectionalG];
        this.mieCoefficient = [this.skyMaterial.mieCoefficient]; */

        let skySettings = config.getSkySettings();
        //console.log("Initial sky settings: ", skySettings);
        this.turbity = [skySettings.turbidity];
        this.luminance = [skySettings.luminance];
        this.rayleigh = [skySettings.rayleigh];
        this.mieDirectionalG = [skySettings.mieDirectionalG];
        this.mieCoefficient = [skySettings.mieCoefficient]; 
        this.cameraOffset = [this.skyMaterial.cameraOffset.y];
        this.nightsky_opacity = [0];
        this.nightsky_calc_opacity = 0;
        this.rayleigh_calc = 0;
        this.cameraOffset_calc = 0;
        this.mie_calc = 0;

        this.rp = new BABYLON.ReflectionProbe('reflection_probe', 1024, scene, true, true);
        //this.rp.position.y = 50000;
    
        this.rp.renderList.push(this.skybox);    
        scene.environmentTexture = this.rp.cubeTexture;

        //let nightSkyCubeMap = new BABYLON.CubeTexture("./assets/environment.env", scene);


        //this.nightSkySphere = BABYLON.Mesh.CreateSphere("nightSkySphere", 32, 800, scene, false, BABYLON.Mesh.BACKSIDE);
        this.nightSkySphere = BABYLON.Mesh.CreateBox("nightskybox", skyboxSize * 0.975, scene, false, BABYLON.Mesh.BACKSIDE);
        this.nightSkySphere.scaling = new BABYLON.Vector3(SKYBOX_SCALING, SKYBOX_SCALING, SKYBOX_SCALING);
        //scene.removeMesh(this.nightSkySphere);

        addVS(nightSkyVSrc, "nightsky");
        addFS(nightSkyFSrc, "nightsky");
        this.shadMat = new BABYLON.ShaderMaterial("nightsky_shader", scene, {
            vertex: "nightsky",
            fragment: "nightsky",
            },
            {
                attributes: ["position"],
                uniforms: ["world", "worldView", "worldViewProjection", "view", "projection","opacity"],
                samplers: ["envCubemapSampler"]
            });      
        //this.shadMat.setTexture("envCubemapSampler", nightSkyCubeMap);
        this.shadMat.alpha = 0.98;
        this.shadMat.transparencyMode = 2; //AlphaBlend
        this.shadMat.alphaMode = 1; // add

        this.nightSkySphere.material = this.shadMat;
        //this.nightSkySphere.renderingGroupId = 1;

        //this.nightSkySphere.material = new BABYLON.PBRMaterial("nightSkyMat", scene);
        //this.nightSkySphere.unlit = true;
        //this.nightSkySphere.material.reflectionTexture = nightSkyCubeMap;
        //this.nightSkySphere.material.ambientColor = new BABYLON.Color3(0, 29/255, 81/255);
        //this.nightSkySphere.material.disableLighting = true;
        //this.nightSkySphere.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
        this.rp.renderList.push(this.nightSkySphere);   
        //scene.removeMesh(this.nightSkySphere);
    }

    update(sunPosition, skyRotationVec3, sunAngleDeg)
    {
        this.skyMaterial.sunPosition = sunPosition;
        this.skybox.rotation = skyRotationVec3;
        this.nightSkySphere.rotation = skyRotationVec3;
        this.nightSkySphere.computeWorldMatrix(true);
        this.skybox.computeWorldMatrix(true);

        this.rayleigh_calc = this.rayleigh[0];
        if(sunAngleDeg < 20)
        {
            let w = Math.min(Math.max((sunAngleDeg-5)/15, 0), 1);
            this.rayleigh_calc = lerp(4, this.rayleigh[0], w);
        }

        this.cameraOffset_calc = this.cameraOffset[0];
    /*
        if(sunAngleDeg < 5)
        {
            let w = Math.min(Math.max(sunAngleDeg/5, 0), 1);
            this.cameraOffset_calc = lerp(120, this.cameraOffset[0], w);
        }
        */

        this.mie_calc = this.mieCoefficient[0];
       /* if(sunAngleDeg < 10)
        {
            let w = Math.min(Math.max((sunAngleDeg-5)/5, 0), 1);
            this.mie_calc = lerp(0.058, this.mieCoefficient[0], w);
        }
*/
        this.skyMaterial.turbidity = this.turbity[0];
        this.skyMaterial.luminance = this.luminance[0];
        this.skyMaterial.rayleigh = this.rayleigh_calc;
        this.skyMaterial.mieDirectionalG = this.mieDirectionalG[0];
        this.skyMaterial.mieCoefficient = this.mieCoefficient[0];
        this.skyMaterial.cameraOffset.y = this.cameraOffset_calc;
        
        this.nightsky_calc_opacity = 1-Math.min(Math.max(sunAngleDeg/7, 0), 1);
        this.shadMat.setFloat("opacity", this.nightsky_calc_opacity);        
    }

    isVisible()
    {
        if(this.panel == null) return false;
        return this.panel.isVisible;
    }

    show()
    {
        if(this.panel == null)
        {
            this.panel = new BABYLON.GUI.StackPanel("SkySettingsPanel");
            this.panel.width = "520px";
            this.panel.top = "-300px";
            this.panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            this.panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            this.fullScreenUITexture.addControl(this.panel);

            this.addArraySliders(this.panel, this.turbity, "turbidy", 0, 20);
            this.addArraySliders(this.panel, this.luminance, "luminance", 0, 2);
            this.addArraySliders(this.panel, this.rayleigh, "rayleigh", 0, 20);
            this.addArraySliders(this.panel, this.mieDirectionalG, "mieDirectionalG", -1, 1);
            this.addArraySliders(this.panel, this.mieCoefficient, "mieCoefficient", 0, 0.001);
            this.addArraySliders(this.panel, this.cameraOffset, "cameraOffset", -3000, 3000);
            this.addArraySliders(this.panel, this.nightsky_opacity, "nsky_opacity", 0, 1);

        } else
        {
            this.panel.isVisible = true;
        }
        //console.log("Sky: showing ui");
    }

    hide()
    {
        if(this.panel != null)
        {
            this.panel.isVisible = false;
        }
        //console.log("Sky: hiding ui");
    }    

    addArraySliders(panel, array, title, minVal, maxVal)
    {
        var header = new BABYLON.GUI.TextBlock();
        header.text = title + " " + array[0].toFixed(3);
        header.height = "25px";
        header.color = "white";
        panel.addControl(header);
    
        for (let i = 0; i < array.length; i++) {
            let local_i = i;
            const slider = new BABYLON.GUI.Slider();
            slider.minimum = minVal;
            slider.maximum = maxVal;
            slider.displayThumb = false;
            slider.borderColor = "black";
            slider.color = "gray";
            slider.alpha = 1;
            slider.background = "white";
            slider.value = array[local_i];
            slider.height = "15px";
            slider.width = "500px";
            slider.onValueChangedObservable.add((value) => {
                array[local_i] = slider.value;
                if(local_i == 0)
                {
                    header.text = title +  " " + array[0].toFixed(5);
                }
            });
            panel.addControl(slider);
        }
    }  
}

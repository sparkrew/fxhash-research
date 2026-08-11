const N_Models = 17;
const Coral_Height = 51;
const fixedMass = 10000000;
const positioner = new PositionerConvex(Coral_Height);
//console.log("Positioner:", positioner);

async function loadModels(scene)
{
    let models = [];
    
    for(let i=0;i<N_Models;i++)
    {
        let path = `./assets/Coral_${i+1}.glb`;
        let importResult = await BABYLON.SceneLoader.ImportMeshAsync("", "", path, scene, undefined, ".glb");

        let allRootChildren = importResult.meshes[0].getChildMeshes(true);
        let mesh = allRootChildren[0];
        let collPrims = allRootChildren.slice(1, allRootChildren.length);

        for(let i=0;i<collPrims.length;i++)
        {
            collPrims[i].isVisible = false;
            collPrims[i].setParent(mesh);
        }

        mesh.setParent(null);
        models.push(mesh);
    }

    return models;
}

class Coral
{
    constructor(idx, scene, allCorals, models)
    {
        this.idx = idx;
        this.scene = scene;
        
        this.mesh = models[idx];

        //let rotQuart = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Z, fxrand()*300);
        for(let j=0;j<1;j++)
        {
            let pos = positioner.sampleVector();
            this.mesh.rotation = new BABYLON.Vector3(fxrand()* Math.PI*2 , fxrand()* Math.PI*2, fxrand()* Math.PI*2);
            this.mesh.position = pos;
            this.mesh.computeWorldMatrix(true);
            let foundInter = false;
            for(let i=0;i<allCorals.length;i++)
            {
                if(this.mesh.intersectsMesh(allCorals[i].mesh))
                {
                    foundInter = true;
                    //console.log(`Coral ${idx}: attempt ${j} collision with coral ${i}`);
                    break;
                }
            }
            if(!foundInter)
            {
                //initialPos = pos;
                break;
            }
        }

        this.mesh.getChildMeshes().forEach((m) =>
        {
            m.physicsImpostor = new BABYLON.PhysicsImpostor(m, BABYLON.PhysicsImpostor.BoxImpostor, 
            {
                mass : 0
            }, scene);
        });

        this.mesh.physicsImpostor = new BABYLON.PhysicsImpostor(this.mesh, BABYLON.PhysicsImpostor.NoImpostor, 
            {
                mass : Coral.fixedMass,
                friction : 0,
//                damping : 0.01,
                restitution : 0.0
            }, scene);
            
        //console.log(`Coral ${this.mesh.name} is at ${this.mesh.position.x},${this.mesh.position.y},${this.mesh.position.z}`);

        let pbrMaterial = this.mesh.material;
        this.mesh.isVisible = false;
        this.setupCoralMaterial(pbrMaterial);
    }

    setupCoralMaterial(material)
    {
        var albedoBr = 1.0;
        material.alpha = 1.0;
        material.albedoColor = new BABYLON.Color3((255/255)*albedoBr, (249/255)*albedoBr, (229/255)*albedoBr);
        material.sheen.isEnabled = true;
        material.sheen.intensity = 0.5;//0.5;
        material.environmentIntensity = 0.13;
        material.roughness = 0.8;//0.65;
        material.maxSimultaneousLights = 8;
        material.bumpTexture.level = 1.0;
    }
}

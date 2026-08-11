async function main()
{
    const canvas = document.getElementById("renderCanvas"); // Get the canvas element
    const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
    const scene = new BABYLON.Scene(engine);
    canvas.style.outline = "none";

    const adt = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    let dateAndTime = new DateAndTime(adt);
    dateAndTime.useRealDate = true;

    await Ammo();

    let mainScene = new CoralScene();
    await mainScene.createScene(scene, adt, canvas, dateAndTime, engine);

    let resizeWaitCountDown = -1;
    engine.runRenderLoop(function () {
        scene.render();

        /* Rate limited resize
        if ((canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) &&
        (resizeWaitCountDown < 0))
        {
            //console.log(`requesting resizing`);
            //engine.resize();
            resizeWaitCountDown = 30;
          } 
        if(resizeWaitCountDown > -1) resizeWaitCountDown = resizeWaitCountDown-1;

          if(resizeWaitCountDown == 0)
          {
            //console.log(`resizing`);
            engine.resize();
          }

          */

          if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
            //console.log("resizing the engine");
            engine.resize();
          }          
    });

    // hide/show the Inspector
    window.addEventListener("keydown", (ev) => {

        if(ev.keyCode === 82) //'r' auto rotate ON
        {
            if(!mainScene.camera.useAutoRotationBehavior)
            {
                mainScene.camera.useAutoRotationBehavior = true;
                mainScene.camera.autoRotationBehavior.idleRotationSpeed = 0.015;
                //mainScene.camera.autoRotationBehavior.idleRotationWaitTime = 10000;
                console.log("Auto rotate ON");
            } else
            {
                mainScene.camera.useAutoRotationBehavior = false;
                console.log("Auto rotate OFF");              
            }
        }
    });
    
}

main();

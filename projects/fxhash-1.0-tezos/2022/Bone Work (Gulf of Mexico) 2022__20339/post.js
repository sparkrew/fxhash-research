class PostEffects
{
    constructor(camera, scene, engine)
    {
        //let coarlScenePipeline = new BABYLON.PostProcessRenderPipeline(engine, "coralScenePipeline");

        /*
        let blackAndWhite = new BABYLON.BlackAndWhitePostProcess("bw", 1.0, null, null, engine, false);
        let horizontalBlur = new BABYLON.BlurPostProcess("hb", new BABYLON.Vector2(1.0, 0), 20, 1.0, null, null, engine, false)
        let blackAndWhiteThenBlur = new BABYLON.PostProcessRenderEffect(engine, "blackAndWhiteThenBlur", function() { return [blackAndWhite, horizontalBlur] });
        coarlScenePipeline.addEffect(blackAndWhiteThenBlur);
        */

        let colorCorrection = new BABYLON.ColorCorrectionPostProcess("color_correction", "./assets/lut-default.png", 1.0, camera);
        /*
        let effect = new BABYLON.PostProcessRenderEffect(engine, "coral_post_effect", function() { return [colorCorrection] });
        coarlScenePipeline.addEffect(effect);

        scene.postProcessRenderPipelineManager.addPipeline(coarlScenePipeline);
        scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline("coralScenePipeline", camera);
        */
    }
}

gdjs._304simsiz_32sahneCode = {};

gdjs._304simsiz_32sahneCode.conditionTrue_0 = {val:false};
gdjs._304simsiz_32sahneCode.condition0IsTrue_0 = {val:false};
gdjs._304simsiz_32sahneCode.condition1IsTrue_0 = {val:false};


gdjs._304simsiz_32sahneCode.eventsList0 = function(runtimeScene) {

{


gdjs._304simsiz_32sahneCode.condition0IsTrue_0.val = false;
{
gdjs._304simsiz_32sahneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._304simsiz_32sahneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(Math.floor(fxrand()*10));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), false);
}}

}


};

gdjs._304simsiz_32sahneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs._304simsiz_32sahneCode.eventsList0(runtimeScene);
return;

}

gdjs['_304simsiz_32sahneCode'] = gdjs._304simsiz_32sahneCode;

gdjs._49Code = {};
gdjs._49Code.GDp5Objects1= [];
gdjs._49Code.GDp5Objects2= [];
gdjs._49Code.GDmouseObjects1= [];
gdjs._49Code.GDmouseObjects2= [];
gdjs._49Code.GDNewObjectObjects1= [];
gdjs._49Code.GDNewObjectObjects2= [];
gdjs._49Code.GDp2Objects1= [];
gdjs._49Code.GDp2Objects2= [];
gdjs._49Code.GDp4Objects1= [];
gdjs._49Code.GDp4Objects2= [];
gdjs._49Code.GDp1Objects1= [];
gdjs._49Code.GDp1Objects2= [];
gdjs._49Code.GDNewObject5Objects1= [];
gdjs._49Code.GDNewObject5Objects2= [];
gdjs._49Code.GDNewObject6Objects1= [];
gdjs._49Code.GDNewObject6Objects2= [];
gdjs._49Code.GDNewObject2Objects1= [];
gdjs._49Code.GDNewObject2Objects2= [];
gdjs._49Code.GDNewSprite2Objects1= [];
gdjs._49Code.GDNewSprite2Objects2= [];
gdjs._49Code.GDNewSpriteObjects1= [];
gdjs._49Code.GDNewSpriteObjects2= [];
gdjs._49Code.GDNewSprite3Objects1= [];
gdjs._49Code.GDNewSprite3Objects2= [];
gdjs._49Code.GDMagicObjects1= [];
gdjs._49Code.GDMagicObjects2= [];
gdjs._49Code.GDp3Objects1= [];
gdjs._49Code.GDp3Objects2= [];
gdjs._49Code.GDp32Objects1= [];
gdjs._49Code.GDp32Objects2= [];
gdjs._49Code.GDStarSparksObjects1= [];
gdjs._49Code.GDStarSparksObjects2= [];

gdjs._49Code.conditionTrue_0 = {val:false};
gdjs._49Code.condition0IsTrue_0 = {val:false};
gdjs._49Code.condition1IsTrue_0 = {val:false};


gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDmouseObjects1Objects = Hashtable.newFrom({"mouse": gdjs._49Code.GDmouseObjects1});
gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDp4Objects1Objects = Hashtable.newFrom({"p4": gdjs._49Code.GDp4Objects1});
gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDp3Objects1Objects = Hashtable.newFrom({"p3": gdjs._49Code.GDp3Objects1});
gdjs._49Code.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, 70));
}}

}


{


{
gdjs._49Code.GDmouseObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDmouseObjects1Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "at");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("p3"), gdjs._49Code.GDp3Objects1);
gdjs.copyArray(runtimeScene.getObjects("p32"), gdjs._49Code.GDp32Objects1);
gdjs.copyArray(runtimeScene.getObjects("p4"), gdjs._49Code.GDp4Objects1);
{for(var i = 0, len = gdjs._49Code.GDp4Objects1.length ;i < len;++i) {
    gdjs._49Code.GDp4Objects1[i].addPolarForce(gdjs.randomInRange(0, 360), 100, 1);
}
}{for(var i = 0, len = gdjs._49Code.GDp3Objects1.length ;i < len;++i) {
    gdjs._49Code.GDp3Objects1[i].addPolarForce(gdjs.randomInRange(0, 360), 100, 1);
}
}{for(var i = 0, len = gdjs._49Code.GDp32Objects1.length ;i < len;++i) {
    gdjs._49Code.GDp32Objects1[i].addPolarForce(gdjs.randomInRange(0, 360), 100, 1);
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs._49Code.GDp4Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDp4Objects1Objects, gdjs.randomInRange(0, 800), gdjs.randomInRange(0, 400), "");
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs._49Code.GDp3Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDp3Objects1Objects, gdjs.randomInRange(0, 800), gdjs.randomInRange(0, 800), "");
}}

}


};

gdjs._49Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49Code.GDp5Objects1.length = 0;
gdjs._49Code.GDp5Objects2.length = 0;
gdjs._49Code.GDmouseObjects1.length = 0;
gdjs._49Code.GDmouseObjects2.length = 0;
gdjs._49Code.GDNewObjectObjects1.length = 0;
gdjs._49Code.GDNewObjectObjects2.length = 0;
gdjs._49Code.GDp2Objects1.length = 0;
gdjs._49Code.GDp2Objects2.length = 0;
gdjs._49Code.GDp4Objects1.length = 0;
gdjs._49Code.GDp4Objects2.length = 0;
gdjs._49Code.GDp1Objects1.length = 0;
gdjs._49Code.GDp1Objects2.length = 0;
gdjs._49Code.GDNewObject5Objects1.length = 0;
gdjs._49Code.GDNewObject5Objects2.length = 0;
gdjs._49Code.GDNewObject6Objects1.length = 0;
gdjs._49Code.GDNewObject6Objects2.length = 0;
gdjs._49Code.GDNewObject2Objects1.length = 0;
gdjs._49Code.GDNewObject2Objects2.length = 0;
gdjs._49Code.GDNewSprite2Objects1.length = 0;
gdjs._49Code.GDNewSprite2Objects2.length = 0;
gdjs._49Code.GDNewSpriteObjects1.length = 0;
gdjs._49Code.GDNewSpriteObjects2.length = 0;
gdjs._49Code.GDNewSprite3Objects1.length = 0;
gdjs._49Code.GDNewSprite3Objects2.length = 0;
gdjs._49Code.GDMagicObjects1.length = 0;
gdjs._49Code.GDMagicObjects2.length = 0;
gdjs._49Code.GDp3Objects1.length = 0;
gdjs._49Code.GDp3Objects2.length = 0;
gdjs._49Code.GDp32Objects1.length = 0;
gdjs._49Code.GDp32Objects2.length = 0;
gdjs._49Code.GDStarSparksObjects1.length = 0;
gdjs._49Code.GDStarSparksObjects2.length = 0;

gdjs._49Code.eventsList0(runtimeScene);
return;

}

gdjs['_49Code'] = gdjs._49Code;

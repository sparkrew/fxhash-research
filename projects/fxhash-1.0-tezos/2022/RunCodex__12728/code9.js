gdjs._48Code = {};
gdjs._48Code.GDp5Objects1= [];
gdjs._48Code.GDp5Objects2= [];
gdjs._48Code.GDmouseObjects1= [];
gdjs._48Code.GDmouseObjects2= [];
gdjs._48Code.GDNewObjectObjects1= [];
gdjs._48Code.GDNewObjectObjects2= [];
gdjs._48Code.GDp2Objects1= [];
gdjs._48Code.GDp2Objects2= [];
gdjs._48Code.GDp4Objects1= [];
gdjs._48Code.GDp4Objects2= [];
gdjs._48Code.GDp1Objects1= [];
gdjs._48Code.GDp1Objects2= [];
gdjs._48Code.GDNewObject5Objects1= [];
gdjs._48Code.GDNewObject5Objects2= [];
gdjs._48Code.GDNewObject6Objects1= [];
gdjs._48Code.GDNewObject6Objects2= [];
gdjs._48Code.GDNewObject2Objects1= [];
gdjs._48Code.GDNewObject2Objects2= [];
gdjs._48Code.GDNewSprite2Objects1= [];
gdjs._48Code.GDNewSprite2Objects2= [];
gdjs._48Code.GDNewSpriteObjects1= [];
gdjs._48Code.GDNewSpriteObjects2= [];
gdjs._48Code.GDNewSprite3Objects1= [];
gdjs._48Code.GDNewSprite3Objects2= [];
gdjs._48Code.GDMagicObjects1= [];
gdjs._48Code.GDMagicObjects2= [];
gdjs._48Code.GDp3Objects1= [];
gdjs._48Code.GDp3Objects2= [];
gdjs._48Code.GDp32Objects1= [];
gdjs._48Code.GDp32Objects2= [];
gdjs._48Code.GDStarSparksObjects1= [];
gdjs._48Code.GDStarSparksObjects2= [];

gdjs._48Code.conditionTrue_0 = {val:false};
gdjs._48Code.condition0IsTrue_0 = {val:false};
gdjs._48Code.condition1IsTrue_0 = {val:false};


gdjs._48Code.mapOfGDgdjs_46_9548Code_46GDmouseObjects1Objects = Hashtable.newFrom({"mouse": gdjs._48Code.GDmouseObjects1});
gdjs._48Code.mapOfGDgdjs_46_9548Code_46GDp4Objects1Objects = Hashtable.newFrom({"p4": gdjs._48Code.GDp4Objects1});
gdjs._48Code.mapOfGDgdjs_46_9548Code_46GDp3Objects1Objects = Hashtable.newFrom({"p3": gdjs._48Code.GDp3Objects1});
gdjs._48Code.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, 70));
}}

}


{


{
gdjs._48Code.GDmouseObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._48Code.mapOfGDgdjs_46_9548Code_46GDmouseObjects1Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "at");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("p3"), gdjs._48Code.GDp3Objects1);
gdjs.copyArray(runtimeScene.getObjects("p32"), gdjs._48Code.GDp32Objects1);
gdjs.copyArray(runtimeScene.getObjects("p4"), gdjs._48Code.GDp4Objects1);
{for(var i = 0, len = gdjs._48Code.GDp4Objects1.length ;i < len;++i) {
    gdjs._48Code.GDp4Objects1[i].addPolarForce(gdjs.randomInRange(0, 360), 100, 1);
}
}{for(var i = 0, len = gdjs._48Code.GDp3Objects1.length ;i < len;++i) {
    gdjs._48Code.GDp3Objects1[i].addPolarForce(gdjs.randomInRange(0, 360), 100, 1);
}
}{for(var i = 0, len = gdjs._48Code.GDp32Objects1.length ;i < len;++i) {
    gdjs._48Code.GDp32Objects1[i].addPolarForce(gdjs.randomInRange(0, 360), 100, 1);
}
}}

}


{


gdjs._48Code.condition0IsTrue_0.val = false;
{
gdjs._48Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
}if (gdjs._48Code.condition0IsTrue_0.val) {
gdjs._48Code.GDp4Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._48Code.mapOfGDgdjs_46_9548Code_46GDp4Objects1Objects, gdjs.randomInRange(0, 800), gdjs.randomInRange(0, 400), "");
}}

}


{


gdjs._48Code.condition0IsTrue_0.val = false;
{
gdjs._48Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs._48Code.condition0IsTrue_0.val) {
gdjs._48Code.GDp3Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._48Code.mapOfGDgdjs_46_9548Code_46GDp3Objects1Objects, gdjs.randomInRange(0, 800), gdjs.randomInRange(0, 800), "");
}}

}


};

gdjs._48Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._48Code.GDp5Objects1.length = 0;
gdjs._48Code.GDp5Objects2.length = 0;
gdjs._48Code.GDmouseObjects1.length = 0;
gdjs._48Code.GDmouseObjects2.length = 0;
gdjs._48Code.GDNewObjectObjects1.length = 0;
gdjs._48Code.GDNewObjectObjects2.length = 0;
gdjs._48Code.GDp2Objects1.length = 0;
gdjs._48Code.GDp2Objects2.length = 0;
gdjs._48Code.GDp4Objects1.length = 0;
gdjs._48Code.GDp4Objects2.length = 0;
gdjs._48Code.GDp1Objects1.length = 0;
gdjs._48Code.GDp1Objects2.length = 0;
gdjs._48Code.GDNewObject5Objects1.length = 0;
gdjs._48Code.GDNewObject5Objects2.length = 0;
gdjs._48Code.GDNewObject6Objects1.length = 0;
gdjs._48Code.GDNewObject6Objects2.length = 0;
gdjs._48Code.GDNewObject2Objects1.length = 0;
gdjs._48Code.GDNewObject2Objects2.length = 0;
gdjs._48Code.GDNewSprite2Objects1.length = 0;
gdjs._48Code.GDNewSprite2Objects2.length = 0;
gdjs._48Code.GDNewSpriteObjects1.length = 0;
gdjs._48Code.GDNewSpriteObjects2.length = 0;
gdjs._48Code.GDNewSprite3Objects1.length = 0;
gdjs._48Code.GDNewSprite3Objects2.length = 0;
gdjs._48Code.GDMagicObjects1.length = 0;
gdjs._48Code.GDMagicObjects2.length = 0;
gdjs._48Code.GDp3Objects1.length = 0;
gdjs._48Code.GDp3Objects2.length = 0;
gdjs._48Code.GDp32Objects1.length = 0;
gdjs._48Code.GDp32Objects2.length = 0;
gdjs._48Code.GDStarSparksObjects1.length = 0;
gdjs._48Code.GDStarSparksObjects2.length = 0;

gdjs._48Code.eventsList0(runtimeScene);
return;

}

gdjs['_48Code'] = gdjs._48Code;

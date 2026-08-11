gdjs._53Code = {};
gdjs._53Code.GDp5Objects1= [];
gdjs._53Code.GDp5Objects2= [];
gdjs._53Code.GDmouseObjects1= [];
gdjs._53Code.GDmouseObjects2= [];
gdjs._53Code.GDNewObjectObjects1= [];
gdjs._53Code.GDNewObjectObjects2= [];
gdjs._53Code.GDp2Objects1= [];
gdjs._53Code.GDp2Objects2= [];
gdjs._53Code.GDp4Objects1= [];
gdjs._53Code.GDp4Objects2= [];
gdjs._53Code.GDp1Objects1= [];
gdjs._53Code.GDp1Objects2= [];
gdjs._53Code.GDNewObject5Objects1= [];
gdjs._53Code.GDNewObject5Objects2= [];
gdjs._53Code.GDNewObject6Objects1= [];
gdjs._53Code.GDNewObject6Objects2= [];
gdjs._53Code.GDNewObject2Objects1= [];
gdjs._53Code.GDNewObject2Objects2= [];
gdjs._53Code.GDNewSprite2Objects1= [];
gdjs._53Code.GDNewSprite2Objects2= [];
gdjs._53Code.GDNewSpriteObjects1= [];
gdjs._53Code.GDNewSpriteObjects2= [];
gdjs._53Code.GDNewSprite3Objects1= [];
gdjs._53Code.GDNewSprite3Objects2= [];
gdjs._53Code.GDMagicObjects1= [];
gdjs._53Code.GDMagicObjects2= [];
gdjs._53Code.GDp3Objects1= [];
gdjs._53Code.GDp3Objects2= [];
gdjs._53Code.GDp32Objects1= [];
gdjs._53Code.GDp32Objects2= [];
gdjs._53Code.GDStarSparksObjects1= [];
gdjs._53Code.GDStarSparksObjects2= [];

gdjs._53Code.conditionTrue_0 = {val:false};
gdjs._53Code.condition0IsTrue_0 = {val:false};
gdjs._53Code.condition1IsTrue_0 = {val:false};


gdjs._53Code.mapOfGDgdjs_46_9553Code_46GDmouseObjects1Objects = Hashtable.newFrom({"mouse": gdjs._53Code.GDmouseObjects1});
gdjs._53Code.mapOfGDgdjs_46_9553Code_46GDp3Objects1Objects = Hashtable.newFrom({"p3": gdjs._53Code.GDp3Objects1});
gdjs._53Code.mapOfGDgdjs_46_9553Code_46GDp32Objects1Objects = Hashtable.newFrom({"p32": gdjs._53Code.GDp32Objects1});
gdjs._53Code.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, 70));
}}

}


{


{
gdjs._53Code.GDmouseObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._53Code.mapOfGDgdjs_46_9553Code_46GDmouseObjects1Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "at");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("p3"), gdjs._53Code.GDp3Objects1);
gdjs.copyArray(runtimeScene.getObjects("p32"), gdjs._53Code.GDp32Objects1);
gdjs.copyArray(runtimeScene.getObjects("p4"), gdjs._53Code.GDp4Objects1);
{for(var i = 0, len = gdjs._53Code.GDp4Objects1.length ;i < len;++i) {
    gdjs._53Code.GDp4Objects1[i].addPolarForce(gdjs.randomInRange(0, 360), 100, 1);
}
}{for(var i = 0, len = gdjs._53Code.GDp3Objects1.length ;i < len;++i) {
    gdjs._53Code.GDp3Objects1[i].addPolarForce(gdjs.randomInRange(0, 360), 100, 1);
}
}{for(var i = 0, len = gdjs._53Code.GDp32Objects1.length ;i < len;++i) {
    gdjs._53Code.GDp32Objects1[i].addPolarForce(gdjs.randomInRange(0, 360), 100, 1);
}
}}

}


{


gdjs._53Code.condition0IsTrue_0.val = false;
{
gdjs._53Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
}if (gdjs._53Code.condition0IsTrue_0.val) {
gdjs._53Code.GDp3Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._53Code.mapOfGDgdjs_46_9553Code_46GDp3Objects1Objects, gdjs.randomInRange(0, 800), gdjs.randomInRange(0, 400), "");
}}

}


{


gdjs._53Code.condition0IsTrue_0.val = false;
{
gdjs._53Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs._53Code.condition0IsTrue_0.val) {
gdjs._53Code.GDp32Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._53Code.mapOfGDgdjs_46_9553Code_46GDp32Objects1Objects, gdjs.randomInRange(0, 800), gdjs.randomInRange(0, 800), "");
}}

}


};

gdjs._53Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._53Code.GDp5Objects1.length = 0;
gdjs._53Code.GDp5Objects2.length = 0;
gdjs._53Code.GDmouseObjects1.length = 0;
gdjs._53Code.GDmouseObjects2.length = 0;
gdjs._53Code.GDNewObjectObjects1.length = 0;
gdjs._53Code.GDNewObjectObjects2.length = 0;
gdjs._53Code.GDp2Objects1.length = 0;
gdjs._53Code.GDp2Objects2.length = 0;
gdjs._53Code.GDp4Objects1.length = 0;
gdjs._53Code.GDp4Objects2.length = 0;
gdjs._53Code.GDp1Objects1.length = 0;
gdjs._53Code.GDp1Objects2.length = 0;
gdjs._53Code.GDNewObject5Objects1.length = 0;
gdjs._53Code.GDNewObject5Objects2.length = 0;
gdjs._53Code.GDNewObject6Objects1.length = 0;
gdjs._53Code.GDNewObject6Objects2.length = 0;
gdjs._53Code.GDNewObject2Objects1.length = 0;
gdjs._53Code.GDNewObject2Objects2.length = 0;
gdjs._53Code.GDNewSprite2Objects1.length = 0;
gdjs._53Code.GDNewSprite2Objects2.length = 0;
gdjs._53Code.GDNewSpriteObjects1.length = 0;
gdjs._53Code.GDNewSpriteObjects2.length = 0;
gdjs._53Code.GDNewSprite3Objects1.length = 0;
gdjs._53Code.GDNewSprite3Objects2.length = 0;
gdjs._53Code.GDMagicObjects1.length = 0;
gdjs._53Code.GDMagicObjects2.length = 0;
gdjs._53Code.GDp3Objects1.length = 0;
gdjs._53Code.GDp3Objects2.length = 0;
gdjs._53Code.GDp32Objects1.length = 0;
gdjs._53Code.GDp32Objects2.length = 0;
gdjs._53Code.GDStarSparksObjects1.length = 0;
gdjs._53Code.GDStarSparksObjects2.length = 0;

gdjs._53Code.eventsList0(runtimeScene);
return;

}

gdjs['_53Code'] = gdjs._53Code;

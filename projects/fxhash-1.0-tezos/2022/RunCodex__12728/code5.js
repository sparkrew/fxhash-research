gdjs._52Code = {};
gdjs._52Code.GDp5Objects1= [];
gdjs._52Code.GDp5Objects2= [];
gdjs._52Code.GDmouseObjects1= [];
gdjs._52Code.GDmouseObjects2= [];
gdjs._52Code.GDNewObjectObjects1= [];
gdjs._52Code.GDNewObjectObjects2= [];
gdjs._52Code.GDp2Objects1= [];
gdjs._52Code.GDp2Objects2= [];
gdjs._52Code.GDp4Objects1= [];
gdjs._52Code.GDp4Objects2= [];
gdjs._52Code.GDp1Objects1= [];
gdjs._52Code.GDp1Objects2= [];
gdjs._52Code.GDNewObject5Objects1= [];
gdjs._52Code.GDNewObject5Objects2= [];
gdjs._52Code.GDNewObject6Objects1= [];
gdjs._52Code.GDNewObject6Objects2= [];
gdjs._52Code.GDNewObject2Objects1= [];
gdjs._52Code.GDNewObject2Objects2= [];
gdjs._52Code.GDNewSprite2Objects1= [];
gdjs._52Code.GDNewSprite2Objects2= [];
gdjs._52Code.GDNewSpriteObjects1= [];
gdjs._52Code.GDNewSpriteObjects2= [];
gdjs._52Code.GDNewSprite3Objects1= [];
gdjs._52Code.GDNewSprite3Objects2= [];
gdjs._52Code.GDMagicObjects1= [];
gdjs._52Code.GDMagicObjects2= [];
gdjs._52Code.GDp3Objects1= [];
gdjs._52Code.GDp3Objects2= [];
gdjs._52Code.GDp32Objects1= [];
gdjs._52Code.GDp32Objects2= [];
gdjs._52Code.GDStarSparksObjects1= [];
gdjs._52Code.GDStarSparksObjects2= [];

gdjs._52Code.conditionTrue_0 = {val:false};
gdjs._52Code.condition0IsTrue_0 = {val:false};
gdjs._52Code.condition1IsTrue_0 = {val:false};


gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDmouseObjects1Objects = Hashtable.newFrom({"mouse": gdjs._52Code.GDmouseObjects1});
gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDp3Objects1Objects = Hashtable.newFrom({"p3": gdjs._52Code.GDp3Objects1});
gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDp32Objects1Objects = Hashtable.newFrom({"p32": gdjs._52Code.GDp32Objects1});
gdjs._52Code.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, 70));
}}

}


{


{
gdjs._52Code.GDmouseObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDmouseObjects1Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "at");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("p3"), gdjs._52Code.GDp3Objects1);
gdjs.copyArray(runtimeScene.getObjects("p32"), gdjs._52Code.GDp32Objects1);
gdjs.copyArray(runtimeScene.getObjects("p4"), gdjs._52Code.GDp4Objects1);
{for(var i = 0, len = gdjs._52Code.GDp4Objects1.length ;i < len;++i) {
    gdjs._52Code.GDp4Objects1[i].addPolarForce(gdjs.randomInRange(0, 360), 100, 1);
}
}{for(var i = 0, len = gdjs._52Code.GDp3Objects1.length ;i < len;++i) {
    gdjs._52Code.GDp3Objects1[i].addPolarForce(gdjs.randomInRange(0, 360), 100, 1);
}
}{for(var i = 0, len = gdjs._52Code.GDp32Objects1.length ;i < len;++i) {
    gdjs._52Code.GDp32Objects1[i].addPolarForce(gdjs.randomInRange(0, 360), 100, 1);
}
}}

}


{


gdjs._52Code.condition0IsTrue_0.val = false;
{
gdjs._52Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
}if (gdjs._52Code.condition0IsTrue_0.val) {
gdjs._52Code.GDp3Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDp3Objects1Objects, gdjs.randomInRange(0, 800), gdjs.randomInRange(0, 400), "");
}}

}


{


gdjs._52Code.condition0IsTrue_0.val = false;
{
gdjs._52Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs._52Code.condition0IsTrue_0.val) {
gdjs._52Code.GDp32Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._52Code.mapOfGDgdjs_46_9552Code_46GDp32Objects1Objects, gdjs.randomInRange(0, 800), gdjs.randomInRange(0, 800), "");
}}

}


};

gdjs._52Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._52Code.GDp5Objects1.length = 0;
gdjs._52Code.GDp5Objects2.length = 0;
gdjs._52Code.GDmouseObjects1.length = 0;
gdjs._52Code.GDmouseObjects2.length = 0;
gdjs._52Code.GDNewObjectObjects1.length = 0;
gdjs._52Code.GDNewObjectObjects2.length = 0;
gdjs._52Code.GDp2Objects1.length = 0;
gdjs._52Code.GDp2Objects2.length = 0;
gdjs._52Code.GDp4Objects1.length = 0;
gdjs._52Code.GDp4Objects2.length = 0;
gdjs._52Code.GDp1Objects1.length = 0;
gdjs._52Code.GDp1Objects2.length = 0;
gdjs._52Code.GDNewObject5Objects1.length = 0;
gdjs._52Code.GDNewObject5Objects2.length = 0;
gdjs._52Code.GDNewObject6Objects1.length = 0;
gdjs._52Code.GDNewObject6Objects2.length = 0;
gdjs._52Code.GDNewObject2Objects1.length = 0;
gdjs._52Code.GDNewObject2Objects2.length = 0;
gdjs._52Code.GDNewSprite2Objects1.length = 0;
gdjs._52Code.GDNewSprite2Objects2.length = 0;
gdjs._52Code.GDNewSpriteObjects1.length = 0;
gdjs._52Code.GDNewSpriteObjects2.length = 0;
gdjs._52Code.GDNewSprite3Objects1.length = 0;
gdjs._52Code.GDNewSprite3Objects2.length = 0;
gdjs._52Code.GDMagicObjects1.length = 0;
gdjs._52Code.GDMagicObjects2.length = 0;
gdjs._52Code.GDp3Objects1.length = 0;
gdjs._52Code.GDp3Objects2.length = 0;
gdjs._52Code.GDp32Objects1.length = 0;
gdjs._52Code.GDp32Objects2.length = 0;
gdjs._52Code.GDStarSparksObjects1.length = 0;
gdjs._52Code.GDStarSparksObjects2.length = 0;

gdjs._52Code.eventsList0(runtimeScene);
return;

}

gdjs['_52Code'] = gdjs._52Code;

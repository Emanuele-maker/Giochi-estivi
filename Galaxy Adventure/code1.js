gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDGalaxyObjects1= [];
gdjs.MainMenuCode.GDGalaxyObjects2= [];
gdjs.MainMenuCode.GDAdventureObjects1= [];
gdjs.MainMenuCode.GDAdventureObjects2= [];
gdjs.MainMenuCode.GDPlayObjects1= [];
gdjs.MainMenuCode.GDPlayObjects2= [];
gdjs.MainMenuCode.GDLeaderboardsObjects1= [];
gdjs.MainMenuCode.GDLeaderboardsObjects2= [];
gdjs.MainMenuCode.GDLabelObjects1= [];
gdjs.MainMenuCode.GDLabelObjects2= [];
gdjs.MainMenuCode.GDLabelNameObjects1= [];
gdjs.MainMenuCode.GDLabelNameObjects2= [];
gdjs.MainMenuCode.GDNickHeaderObjects1= [];
gdjs.MainMenuCode.GDNickHeaderObjects2= [];
gdjs.MainMenuCode.GDNicknameObjects1= [];
gdjs.MainMenuCode.GDNicknameObjects2= [];
gdjs.MainMenuCode.GDEntryObjects1= [];
gdjs.MainMenuCode.GDEntryObjects2= [];
gdjs.MainMenuCode.GDCreditObjects1= [];
gdjs.MainMenuCode.GDCreditObjects2= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_0 = {val:false};


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MainMenuCode.GDPlayObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MainMenuCode.GDPlayObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MainMenuCode.GDPlayObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDLabelObjects1Objects = Hashtable.newFrom({"Label": gdjs.MainMenuCode.GDLabelObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDLabelObjects1Objects = Hashtable.newFrom({"Label": gdjs.MainMenuCode.GDLabelObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDLabelObjects1Objects = Hashtable.newFrom({"Label": gdjs.MainMenuCode.GDLabelObjects1});gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MainMenuCode.GDPlayObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MainMenuCode.GDPlayObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MainMenuCode.GDPlayObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameplay", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Label"), gdjs.MainMenuCode.GDLabelObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDLabelObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDLabelObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Leaderboards"), gdjs.MainMenuCode.GDLeaderboardsObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDLabelObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDLabelObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDLeaderboardsObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDLeaderboardsObjects1[i].setColor("253;208;58");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Label"), gdjs.MainMenuCode.GDLabelObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDLabelObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDLabelObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Leaderboards"), gdjs.MainMenuCode.GDLeaderboardsObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDLabelObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDLabelObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDLeaderboardsObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDLeaderboardsObjects1[i].setColor("255;255;255");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("LabelName"), gdjs.MainMenuCode.GDLabelNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Nickname"), gdjs.MainMenuCode.GDNicknameObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDNicknameObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNicknameObjects1[i].setPosition((( gdjs.MainMenuCode.GDLabelNameObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDLabelNameObjects1[0].getCenterXInScene()) - (gdjs.MainMenuCode.GDNicknameObjects1[i].getWidth()) / 2,(( gdjs.MainMenuCode.GDLabelNameObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDLabelNameObjects1[0].getCenterYInScene()) - (gdjs.MainMenuCode.GDNicknameObjects1[i].getHeight()) / 2);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Entry"), gdjs.MainMenuCode.GDEntryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Nickname"), gdjs.MainMenuCode.GDNicknameObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name").setString((( gdjs.MainMenuCode.GDEntryObjects1.length === 0 ) ? "" :gdjs.MainMenuCode.GDEntryObjects1[0].getString()));
}{for(var i = 0, len = gdjs.MainMenuCode.GDNicknameObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNicknameObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("name")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Label"), gdjs.MainMenuCode.GDLabelObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDLabelObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboards", false);
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDGalaxyObjects1.length = 0;
gdjs.MainMenuCode.GDGalaxyObjects2.length = 0;
gdjs.MainMenuCode.GDAdventureObjects1.length = 0;
gdjs.MainMenuCode.GDAdventureObjects2.length = 0;
gdjs.MainMenuCode.GDPlayObjects1.length = 0;
gdjs.MainMenuCode.GDPlayObjects2.length = 0;
gdjs.MainMenuCode.GDLeaderboardsObjects1.length = 0;
gdjs.MainMenuCode.GDLeaderboardsObjects2.length = 0;
gdjs.MainMenuCode.GDLabelObjects1.length = 0;
gdjs.MainMenuCode.GDLabelObjects2.length = 0;
gdjs.MainMenuCode.GDLabelNameObjects1.length = 0;
gdjs.MainMenuCode.GDLabelNameObjects2.length = 0;
gdjs.MainMenuCode.GDNickHeaderObjects1.length = 0;
gdjs.MainMenuCode.GDNickHeaderObjects2.length = 0;
gdjs.MainMenuCode.GDNicknameObjects1.length = 0;
gdjs.MainMenuCode.GDNicknameObjects2.length = 0;
gdjs.MainMenuCode.GDEntryObjects1.length = 0;
gdjs.MainMenuCode.GDEntryObjects2.length = 0;
gdjs.MainMenuCode.GDCreditObjects1.length = 0;
gdjs.MainMenuCode.GDCreditObjects2.length = 0;

gdjs.MainMenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;

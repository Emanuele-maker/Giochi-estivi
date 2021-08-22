gdjs.evtsExt__SplashLoad__SplashScreen = {};
gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects1= [];
gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects2= [];
gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects3= [];

gdjs.evtsExt__SplashLoad__SplashScreen.conditionTrue_0 = {val:false};
gdjs.evtsExt__SplashLoad__SplashScreen.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SplashLoad__SplashScreen.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SplashLoad__SplashScreen.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__SplashLoad__SplashScreen.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SplashLoad__SplashScreen.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__SplashLoad__SplashScreen.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.evtsExt__SplashLoad__SplashScreen.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Logo"), gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects2);
{for(var i = 0, len = gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects2[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Logo");
}}

}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Logo"), gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects2);
{for(var i = 0, len = gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects2[i].setOpacity(gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects2[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 80));
}
}{for(var i = 0, len = gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects2[i].getWidth()) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - (gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects2[i].getHeight()) / 2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Logo"), gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects1);

gdjs.evtsExt__SplashLoad__SplashScreen.condition0IsTrue_0.val = false;
gdjs.evtsExt__SplashLoad__SplashScreen.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects1[i].getOpacity() >= 255 ) {
        gdjs.evtsExt__SplashLoad__SplashScreen.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects1[k] = gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects1.length = k;}if ( gdjs.evtsExt__SplashLoad__SplashScreen.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__SplashLoad__SplashScreen.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "Logo");
}}
if (gdjs.evtsExt__SplashLoad__SplashScreen.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Scene") : ""), false);
}}

}


};gdjs.evtsExt__SplashLoad__SplashScreen.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SplashLoad__SplashScreen.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__SplashLoad__SplashScreen.func = function(runtimeScene, Logo, Scene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Logo": Logo
},
  _objectArraysMap: {
"Logo": gdjs.objectsListsToArray(Logo)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Scene") return Scene;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects1.length = 0;
gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects2.length = 0;
gdjs.evtsExt__SplashLoad__SplashScreen.GDLogoObjects3.length = 0;

gdjs.evtsExt__SplashLoad__SplashScreen.eventsList1(runtimeScene, eventsFunctionContext);
return;
}


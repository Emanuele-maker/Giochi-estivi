gdjs.evtsExt__GalaxyExtension__SpawnBullet = {};
gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDbulletObjects1= [];
gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDbulletObjects2= [];
gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDshipObjects1= [];
gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDshipObjects2= [];

gdjs.evtsExt__GalaxyExtension__SpawnBullet.conditionTrue_0 = {val:false};
gdjs.evtsExt__GalaxyExtension__SpawnBullet.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__GalaxyExtension__SpawnBullet.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__GalaxyExtension__SpawnBullet.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__GalaxyExtension__SpawnBullet.conditionTrue_1 = {val:false};
gdjs.evtsExt__GalaxyExtension__SpawnBullet.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__GalaxyExtension__SpawnBullet.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__GalaxyExtension__SpawnBullet.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__GalaxyExtension__SpawnBullet.mapOfGDgdjs_46evtsExt_95_95GalaxyExtension_95_95SpawnBullet_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDbulletObjects1});gdjs.evtsExt__GalaxyExtension__SpawnBullet.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("ship"), gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDshipObjects1);
gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDbulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__GalaxyExtension__SpawnBullet.mapOfGDgdjs_46evtsExt_95_95GalaxyExtension_95_95SpawnBullet_46GDbulletObjects1Objects, (( gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDshipObjects1.length === 0 ) ? 0 :gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDshipObjects1[0].getPointX("")) + (( gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDshipObjects1.length === 0 ) ? 0 :gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDshipObjects1[0].getWidth()) / 2, (( gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDshipObjects1.length === 0 ) ? 0 :gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDshipObjects1[0].getPointY("")) + (( gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDshipObjects1.length === 0 ) ? 0 :gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDshipObjects1[0].getHeight()), "");
}{for(var i = 0, len = gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDbulletObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDbulletObjects1[i].rotateTowardAngle((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("angle")) || 0 : 0), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDbulletObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDbulletObjects1[i].setScale(1.1);
}
}{for(var i = 0, len = gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDbulletObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDbulletObjects1[i].setZOrder((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("z_order")) || 0 : 0));
}
}}

}


{


gdjs.evtsExt__GalaxyExtension__SpawnBullet.condition0IsTrue_0.val = false;
gdjs.evtsExt__GalaxyExtension__SpawnBullet.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__GalaxyExtension__SpawnBullet.conditionTrue_1 = gdjs.evtsExt__GalaxyExtension__SpawnBullet.condition0IsTrue_0;
gdjs.evtsExt__GalaxyExtension__SpawnBullet.conditionTrue_1.val = ("instant" == (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("forceType") : ""));
}
}if ( gdjs.evtsExt__GalaxyExtension__SpawnBullet.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__GalaxyExtension__SpawnBullet.conditionTrue_1 = gdjs.evtsExt__GalaxyExtension__SpawnBullet.condition1IsTrue_0;
gdjs.evtsExt__GalaxyExtension__SpawnBullet.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(9296284);
}
}}
if (gdjs.evtsExt__GalaxyExtension__SpawnBullet.condition1IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("bullet"), gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDbulletObjects1);
{for(var i = 0, len = gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDbulletObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDbulletObjects1[i].addForce(0, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0), 0);
}
}}

}


{


gdjs.evtsExt__GalaxyExtension__SpawnBullet.condition0IsTrue_0.val = false;
gdjs.evtsExt__GalaxyExtension__SpawnBullet.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__GalaxyExtension__SpawnBullet.conditionTrue_1 = gdjs.evtsExt__GalaxyExtension__SpawnBullet.condition0IsTrue_0;
gdjs.evtsExt__GalaxyExtension__SpawnBullet.conditionTrue_1.val = ("instant" != (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("forceType") : ""));
}
}if ( gdjs.evtsExt__GalaxyExtension__SpawnBullet.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__GalaxyExtension__SpawnBullet.conditionTrue_1 = gdjs.evtsExt__GalaxyExtension__SpawnBullet.condition1IsTrue_0;
gdjs.evtsExt__GalaxyExtension__SpawnBullet.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(9297212);
}
}}
if (gdjs.evtsExt__GalaxyExtension__SpawnBullet.condition1IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("bullet"), gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDbulletObjects1);
{for(var i = 0, len = gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDbulletObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDbulletObjects1[i].addForce(0, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0), 1);
}
}}

}


};

gdjs.evtsExt__GalaxyExtension__SpawnBullet.func = function(runtimeScene, bullet, ship, angle, speedType, speed, z_order, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"bullet": bullet
, "ship": ship
},
  _objectArraysMap: {
"bullet": gdjs.objectsListsToArray(bullet)
, "ship": gdjs.objectsListsToArray(ship)
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
if (argName === "angle") return angle;
if (argName === "speedType") return speedType;
if (argName === "speed") return speed;
if (argName === "z_order") return z_order;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDbulletObjects1.length = 0;
gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDbulletObjects2.length = 0;
gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDshipObjects1.length = 0;
gdjs.evtsExt__GalaxyExtension__SpawnBullet.GDshipObjects2.length = 0;

gdjs.evtsExt__GalaxyExtension__SpawnBullet.eventsList0(runtimeScene, eventsFunctionContext);
return;
}


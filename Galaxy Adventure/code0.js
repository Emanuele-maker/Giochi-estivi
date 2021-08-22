gdjs.Splash_32LogoCode = {};
gdjs.Splash_32LogoCode.GDLogoObjects1= [];
gdjs.Splash_32LogoCode.GDLogoObjects2= [];

gdjs.Splash_32LogoCode.conditionTrue_0 = {val:false};
gdjs.Splash_32LogoCode.condition0IsTrue_0 = {val:false};


gdjs.Splash_32LogoCode.mapOfGDgdjs_46Splash_9532LogoCode_46GDLogoObjects1Objects = Hashtable.newFrom({"Logo": gdjs.Splash_32LogoCode.GDLogoObjects1});gdjs.Splash_32LogoCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.Splash_32LogoCode.GDLogoObjects1);
{gdjs.evtsExt__SplashLoad__SplashScreen.func(runtimeScene, gdjs.Splash_32LogoCode.mapOfGDgdjs_46Splash_9532LogoCode_46GDLogoObjects1Objects, "MainMenu", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.Splash_32LogoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Splash_32LogoCode.GDLogoObjects1.length = 0;
gdjs.Splash_32LogoCode.GDLogoObjects2.length = 0;

gdjs.Splash_32LogoCode.eventsList0(runtimeScene);
return;

}

gdjs['Splash_32LogoCode'] = gdjs.Splash_32LogoCode;

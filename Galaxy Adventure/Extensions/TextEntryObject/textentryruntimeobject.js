var gdjs;
(function(gdjs2) {
  class TextEntryRuntimeObject extends gdjs2.RuntimeObject {
    constructor(runtimeScene, textEntryObjectData) {
      super(runtimeScene, textEntryObjectData);
      this._str = "";
      this._activated = true;
      this._renderer = new gdjs2.TextEntryRuntimeObjectRenderer(this);
      this.onCreated();
    }
    updateFromObjectData(oldObjectData, newObjectData) {
      return true;
    }
    onDestroyFromScene(runtimeScene) {
      super.onDestroyFromScene(runtimeScene);
      if (this._renderer.onDestroy) {
        this._renderer.onDestroy();
      }
    }
    update() {
      if (this._renderer.getString) {
        this._str = this._renderer.getString();
      }
    }
    getString() {
      return this._str;
    }
    setString(str) {
      this._str = str;
      this._renderer.updateString();
    }
    isActivated() {
      return this._activated;
    }
    activate(enable) {
      this._activated = enable;
      this._renderer.activate(this._activated);
    }
  }
  gdjs2.TextEntryRuntimeObject = TextEntryRuntimeObject;
  gdjs2.registerObject("TextEntryObject::TextEntry", gdjs2.TextEntryRuntimeObject);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=textentryruntimeobject.js.map

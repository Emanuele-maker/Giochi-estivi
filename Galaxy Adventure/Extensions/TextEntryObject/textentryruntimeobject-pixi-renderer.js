var gdjs;
(function(gdjs2) {
  class TextEntryRuntimeObjectPixiRenderer {
    constructor(runtimeObject) {
      this._object = runtimeObject;
      this._pressHandler = function(evt) {
        if (!runtimeObject.isActivated()) {
          return;
        }
        evt = evt || window.event;
        const charCode = evt.which || evt.keyCode;
        const charTyped = String.fromCharCode(charCode);
        if (charTyped !== void 0 && charCode !== 8) {
          runtimeObject.setString(runtimeObject.getString() + charTyped);
        }
        if (evt.preventDefault) {
          evt.preventDefault();
        }
        return false;
      };
      this._upHandler = function(evt) {
        if (!runtimeObject.isActivated()) {
          return;
        }
        evt = evt || window.event;
        const charCode = evt.which || evt.keyCode;
        if (charCode === 8) {
          runtimeObject.setString(runtimeObject.getString().slice(0, -1));
        }
        if (evt.preventDefault) {
          evt.preventDefault();
        }
        return false;
      };
      this._downHandler = function(evt) {
        evt = evt || window.event;
        const charCode = evt.which || evt.keyCode;
        if (charCode === 8) {
          if (evt.preventDefault) {
            evt.preventDefault();
          }
          return false;
        }
      };
      document.addEventListener("keypress", this._pressHandler);
      document.addEventListener("keyup", this._upHandler);
      document.addEventListener("keydown", this._downHandler);
    }
    onDestroy() {
      document.removeEventListener("keypress", this._pressHandler);
      document.removeEventListener("keyup", this._upHandler);
      document.removeEventListener("keydown", this._downHandler);
    }
    updateString() {
    }
    activate(enable) {
    }
  }
  gdjs2.TextEntryRuntimeObjectRenderer = TextEntryRuntimeObjectPixiRenderer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=textentryruntimeobject-pixi-renderer.js.map

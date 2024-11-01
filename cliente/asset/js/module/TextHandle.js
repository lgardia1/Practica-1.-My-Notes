import { TextHandleClass } from "./TextHandleClass.js";

export const TextHandle = (function () {
    let instance;
  
    function createInstance(url) {
      const object = new TextHandleClass(url);
      return object;
    }
  
    return {
      getInstance: function (url) {
        if (!instance) {
          instance = createInstance(url);
        }
        return instance;
      }
    };
})();
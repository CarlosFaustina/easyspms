"use strict";
import common from "./utils/common.js";
import storage from "./utils/storage.js";
import builder from "./builder.mjs";

let _options = {
  
  modules: {
    builder: true
  },
  session: {
    persistent: true,
  },
};

let self = null;
export class Accessibility {
  
  constructor(options = {}) {
    self = this;
    this.options = _options;
    builder();
    //$('body').load('src/builder.html');
    
  }

}

Accessibility.init = (opt) => {
  common.warn(
    '"Accessibility.init()" is deprecated! Please use "new Accessibility()" instead'
  );
  new Accessibility(opt);

};

export default Accessibility;

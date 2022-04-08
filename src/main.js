"use strict";
import common from "./utils/common.js";
import storage from "./utils/storage.js";
import theme from "./theme/theme.mjs";
import addListeners from './utils/addListeners/addListeners.mjs';
import textToSpeech from "./textToSpeech/textToSpeech.mjs";

let _options = {
  
  modules: {
    theme: true,
    textToSpeech: true,
  },
  session: {
    persistent: true,
  },
};

let self = null;
export class Accessibility {
  
  constructor(options = {}) {
    self          = this;
    this.options  = _options;

    theme(); 
    addListeners(this);
  }

}

Accessibility.init = (opt) => {
  common.warn(
    '"Accessibility.init()" is deprecated! Please use "new Accessibility()" instead'
  );
  new Accessibility(opt);

};

export default Accessibility;

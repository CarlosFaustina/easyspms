"use strict";
//import common from "./utils/common.js";
//import storage from "./utils/storage.js";
import theme from "./theme/theme.mjs";
import addListeners from './utils/addListeners/addListeners.mjs';
import textToSpeech from "./textToSpeech/textToSpeech.mjs";

let _options = {
  
  modules: {
    theme: true,
    textToSpeech: true,
  },
};

let self = null;
export class Accessibility {

  funcionalidades = {
    theme: new theme(),
  }
  
  constructor(options = {}) {
    self          = this;
    this.options  = _options;

    this.render(() => {
      addListeners(this);
      //textToSpeech();
    }); 
  }

  render(callback) {
    if (this.funcionalidades.theme.render()) {
      callback();
    } else {
      console.log('erro ao renderizar template');
    }
  }
}

Accessibility.init = (opt) => {
  common.warn(
    '"Accessibility.init()" is deprecated! Please use "new Accessibility()" instead'
  );
  new Accessibility(opt);
};

export default Accessibility;

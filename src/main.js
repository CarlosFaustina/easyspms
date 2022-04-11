"use strict";
import common from "./utils/common.js";
import storage from "./utils/storage.js";
import theme from "./theme/theme.mjs";
import addListeners from './utils/addListeners/addListeners.mjs';

import textToSpeech from "./textToSpeech/textToSpeech.mjs";
import bigCursorReset from "./bigCursorReset/bigCursorReset.mjs";
import bigCursorWhite from "./bigCursorWhite/bigCursorWhite.mjs";
import bigCursorBlack from "./bigCursorBlack/bigCursorBlack.mjs";
import grayHues from "./grayHues/grayHues.mjs";
import protanopia from "./protanopia/protanopia.mjs";
import deuteranopia from "./deutanopia/deutanopia.mjs";
import tritanopia from "./tritanopia/tritanopia.mjs";

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
    });
  }

  render(callback) {
    if (this.funcionalidades.theme.render()) {
      callback();
    } else {
      console.log('erro ao renderizar template');
    }
  }

  menuInterface = {
    textToSpeech: (destroy) => {
      textToSpeech(this, destroy);
    },
    bigCursorReset: () => {
      bigCursorReset(this);
    },
    bigCursorWhite: (destroy) => {
      bigCursorWhite(this, destroy);
    },
    bigCursorBlack: (destroy) => {
      bigCursorBlack(this, destroy);
    },
    grayHues: (destroy) => {
      grayHues(this, destroy);
    },
    protanopia: (destroy) => {
      protanopia(this, destroy);
    },
    deuteranopia: (destroy) => {
      deuteranopia(this, destroy);
    },
    tritanopia: (destroy) => {
      tritanopia(this, destroy);
    },
  }

  sessionState = {
    leiaFocus: false,
    dicionario: false,
    customTranslate: false,
    keyboardNav: false,
    callTecladoVirtual: false,
    imageSpeaker: false,
    textSize: 0,
    lineHeight: 0,
    textSpace: 0,
    deuteranopia: false,
    tritanopia: false,
    protanopia: false,
    grayHues: false,
    linkHighlight: false,
    bigCursorReset: true,
    bigCursorWhite: false,
    bigCursorBlack: false,
    readingGuide: false,
    voiceTotext: false,
  }

  onChange(updateSession) {
    if (updateSession && this.options.session.persistent)
      storage.set("_accessState", this.sessionState);
  }
}

Accessibility.init = (opt) => {
  common.warn(
    '"Accessibility.init()" is deprecated! Please use "new Accessibility()" instead'
  );
  new Accessibility(opt);
};

export default Accessibility;

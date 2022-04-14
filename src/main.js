"use strict";
import common from "./utils/common.js";
import storage from "./utils/storage.js";
import theme from "./theme/theme.mjs";
import addListeners from './utils/addListeners/addListeners.mjs';

import intermitenciaBrilho from "./colorsAdjustment/intermitenciaBrilho.mjs";
import textToSpeech from "./textToSpeech/textToSpeech.mjs";
import bigCursorReset from "./bigCursorReset/bigCursorReset.mjs";
import bigCursorWhite from "./bigCursorWhite/bigCursorWhite.mjs";
import bigCursorBlack from "./bigCursorBlack/bigCursorBlack.mjs";
import grayHues from "./grayHues/grayHues.mjs";
import {
    contrasteEscuro,
    contrasteClaro,
    baixaSaturacao,
    altaSaturacao,
    altoContraste
} from "./colorsAdjustment/contrasteSaturacao.mjs";
import protanopia from "./protanopia/protanopia.mjs";
import deuteranopia from "./deutanopia/deutanopia.mjs";
import tritanopia from "./tritanopia/tritanopia.mjs";
import mudaCorFundo from "./colorsAdjustment/mudaCorFundo.mjs";
import { toogleImageSpeaker, describeImgCss} from "./describeImg/describeImg.mjs";
import leiaFocus from "./leiaFocus/leiaFocus.mjs";
import readingGuide from "./readingGuide/readingGuide.mjs";
import dicionario from "./dicionario/dicionario.mjs";
import virtualKeyboard from "./virtualKeyboard/virtualKeyboard.js";
import linkHighlight from "./linkHighlight/linkHighlight.mjs";
import ampliadorTexto from "./ampliadorDeTexto/ampliadottexto.mjs";


let body;
let html;
let self = null;
let baseUrl = 'http://easy.test:88/';
export class Accessibility {
  
    constructor() {
        self = this;

        this.render(() => {
            addListeners(this);

            // add params to modules
            this.body = document.body || document.getElementsByTagName("body")[0];
            this.html = document.html || document.getElementsByTagName("html")[0];

            // funções não reativas
            self.menuInterface.mudaCorFundo(false);

        });
    }

    render(callback) {
        if (this.menuInterface.theme.render()) {
            callback();
        } else {
            console.log('erro ao renderizar template');
        }
    }

    menuInterface = {
        theme: new theme(),

        intermitenciaBrilho: (destroy) => {
            intermitenciaBrilho(this, destroy);
        },

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

        altoContrasteEscuro: (destroy) => {
            contrasteEscuro(this, destroy);
        },
        
        altoContrasteClaro: (destroy) => {
            contrasteClaro(this, destroy);
        },

        baixaSaturacao: (destroy) => {
            baixaSaturacao(this, destroy);
        },

        altaSaturacao: (destroy) => {
            altaSaturacao(this, destroy);
        },

        modoContraste: (destroy) => {
            altoContraste(this, destroy);
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

        mudaCorFundo: (destroy) => {
            mudaCorFundo(this, destroy);
        },

        imageSpeaker: (destroy) => {
            toogleImageSpeaker(this, destroy);
        },

        leiaFocus: (destroy) => {
            leiaFocus(this, destroy);
        },

        readingGuide: (destroy) => {
            readingGuide(this, destroy);
        },

        dicionario: (destroy) => {
            dicionario(this, destroy);
        },

        tecladoVirtual: () => {
            callTecladoVirtual();
        },

        linkHighlight: (destroy) => {
            linkHighlight(this, destroy);
        },

        ampliadorTexto: (destroy) => {
            addHasText(destroy);
            ampliadorTexto(this, destroy);
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

    initialValues = {
        leiaFocus: false,
        dicionario: false,
        linkHighlight: false,
        textToSpeech: false,
        bigCursorReset: true,
        bigCursorWhite: false,
        bigCursorBlack: false,
        readingGuide: false,
        ampliadorTexto: false,
        voiceTotext: false,
        body: {},
        html: {},
    }

    onChange(updateSession) {
        if (updateSession) {
            storage.set("_accessState", this.sessionState);
        }
    }
}

// Starting EasyApp
Accessibility.init = (opt) => {
  common.warn(
    '"Accessibility.init()" is deprecated! Please use "new Accessibility()" instead'
  );
  new Accessibility(opt);
};

export default Accessibility;

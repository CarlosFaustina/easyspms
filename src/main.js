"use strict";
import common from "./utils/common.js";
import storage from "./utils/storage.js";
import theme from "./theme/theme.mjs";
import addListeners from './utils/addListeners/addListeners.mjs';

import intermitenciaBrilho from "./modules/intermitenciaBrilho/module.mjs"
import {
    ponteiroBranco,
    ponteiroPreto,
    ponteiroNormal
} from './modules/ponteiroRato/module.mjs';
import modoMonocromatico from './modules/ajustesCor/modoMonocromatico.mjs';
import {
    contrasteEscuro,
    contrasteClaro,
    altoContraste
} from './modules/ajustesCor/contrastes.mjs';
import {
    baixaSaturacao,
    altaSaturacao
} from './modules/ajustesCor/saturacao.mjs';
import {
    deuteranopia,
    protanopia,
    tritanopia
} from './modules/daltonismo/module.mjs';


import textToSpeech from "./textToSpeech/textToSpeech.mjs";
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
            // add params to modules
            this.body = document.body || document.getElementsByTagName("body")[0];
            this.html = document.html || document.getElementsByTagName("html")[0];
            
            addListeners(this);

            // funções não reativas
            self.actions.mudaCorFundo(false);

        });
    }

    render(callback) {
        if (this.actions.theme.render()) {
            callback();
        } else {
            console.log('erro ao renderizar template');
        }
    }

    parseStatus(module, turnOff = false) {
        if (turnOff) {
            this.initialValues[module]  = false;
            this.sessionState[module]   = false;

            $('[data-access-action="'+module+'"]').removeClass("active");

            storage.set("_accessState", this.sessionState);

            return;
        }

        this.initialValues[module]  = !this.initialValues[module];
        this.sessionState[module]   = this.initialValues[module];

        if (this.sessionState[module]) {
            $('[data-access-action="'+module+'"]').addClass("active");
            $('[data-access-action="'+module+'"]').parent().find('.check').addClass('check_show');
        } else {
            $('[data-access-action="'+module+'"]').removeClass("active");
            $('[data-access-action="'+module+'"]').parent().find('.check').removeClass('check_show');
        }

        

        storage.set("_accessState", this.sessionState);
    }

    actions = {
        theme: new theme(),

        intermitenciaBrilho: (destroy) => {
            intermitenciaBrilho(this, destroy);
        },

        textToSpeech: (destroy) => {
            textToSpeech(this, destroy);
        },

        ponteiroNormal: (destroy) => {
            ponteiroNormal(this, destroy);
        },

        ponteiroBranco: (destroy) => {
            ponteiroBranco(this, destroy);
        },

        ponteiroPreto: (destroy) => {
            ponteiroPreto(this, destroy);
        },

        modoMonocromatico: (destroy) => {
            modoMonocromatico(this, destroy);
        },

        contrasteEscuro: (destroy) => {
            contrasteEscuro(this, destroy);
        },
        
        contrasteClaro: (destroy) => {
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
        modoMonocromatico: false,
        baixaSaturacao: false,
        altaSaturacao: false,
        protanopia: false,
        deuteranopia: false,
        tritanopia: false,
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

"use strict";
import common from "./utils/common.js";
import storage from "./utils/storage.js";
import { easyNavCss } from "./utils/easyNavCss.mjs";
import {
  keyboardCss,
  virtualKeyboard,
  construtor_teclado_virtual,
  vai_buscar_todos_campos_texto,
} from "./virtualKeyboard/virtualKeyboard.js";
import {
  keyboardNavigation,
  keyboardNavCss,
} from "./keyboardNavigation/keyboardNavigation.mjs";
import disabledUnsupportedFeatures from "../src/utils/disabledUnsupportedFeatures/disabledUnsupportedFeatures.mjs";
import disableUnsupportedModules from "../src/utils/disableUnsupportedModules/disableUnsupportedModules.mjs";
import setSessionFromCache from "../src/utils/setSessionFromCache/setSessionFromCache.mjs";
import {
  toogleImageSpeaker,
  describeImgCss,
} from "../src/describeImg/describeImg.mjs";
import customTranslate, {
  customTranslateCss,
} from "../src/customTranslate/customTranslate.mjs";
import voiceTotext from "./VoiceTotext/VoiceToText.mjs";
import leiaFocus from "../src/leiaFocus/leiaFocus.mjs";
import dicionario from "../src/dicionario/dicionario.mjs";
import addHasText from "../src/addHasText/addHasText.mjs";
import bigCursorWhite from "../src/bigCursorWhite/bigCursorWhite.mjs";
import bigCursorBlack from "../src/bigCursorBlack/bigCursorBlack.mjs";
import readingGuide from "../src/readingGuide/readingGuide.mjs";
import protanopia from "../src/protanopia/protanopia.mjs";
import deutanopia from "../src/deutanopia/deutanopia.mjs";
import tritanopia from "../src/tritanopia/tritanopia.mjs";
import grayHues from "../src/grayHues/grayHues.mjs";
import parseKeys from "../src/utils/parseKeys/parseKeys.mjs";
import runHotkey from "../src/utils/parseKeys/runHotkey.mjs";
import resetLineHeight from "../src/fontAdjustment/resetLineHeight.mjs";
import resetTextSpace from "../src/fontAdjustment/resetTextSpace.mjs";
import resetTextSize from "../src/fontAdjustment/resetTextSize.mjs";
import initFontSize from "../src/fontAdjustment/initFontSize.mjs";
import alterLineHeight from "../src/fontAdjustment/alternateLineHeight.mjs";
import alterTextSpace from "../src/fontAdjustment/alternateTextSpace.mjs";
import alterTextSize from "../src/fontAdjustment/alternateTextSize.mjs";
import linkHighlight from "../src/linkHighlight/linkHighlight.mjs";
import textToSpeech from "../src/textToSpeech/textToSpeech.mjs";
import ampliadorTexto from "./AmpliadorDeTexto/ampliadottexto.mjs";
import addListeners from "../src/utils/addListeners/addListeners.mjs";
import { injectColorAdjustmentsCss } from "./colorAdjustments/colorAdjustmentCss.mjs";
import mudaCorFundo, {
  injectColorAdjustmentsBackgroundCss,
} from "./colorAdjustments/colorAdjustmentBackground.mjs";
import mudaCorConteudo, {
  injectColorAdjustmentsContentCss,
} from "./colorAdjustments/colorAdjustmentContent.mjs";
import mudaCorCabecalho, {
  injectColorAdjustmentsHeadersCss,
} from "./colorAdjustments/colorAdjustmentHeaders.mjs";
import { audioPlayerSyles } from "./audioPlayer/styles.mjs";
import resetIfDefined from "../src/utils/resetIfDefined/resetIfDefined.mjs";
import destroyAll from "../src/utils/destroyAll/destroyAll.mjs";
import fontFallback from "../src/fontAdjustment/fontFallback.mjs";

// Default options
let _options = {
  icon: {
    position: {
      bottom: { size: 50, units: "px" },
      left: { size: 10, units: "px" },
      type: "fixed",
    },
    dimensions: {
      width: { size: 50, units: "px" },
      height: { size: 50, units: "px" },
    },
    zIndex: "9999",
    backgroundColor: "#4054b2",
    color: "#fff",
    circular: false,
    circularBorder: false,
    fontFaceSrc: ["https://fonts.googleapis.com/icon?family=Material+Icons"],
    fontFamily: "Material Icons",
    fontClass: "material-icons",
    useEmojis: false,
  },
  ///
  hotkeys: {
    enabled: true,
    helpTitles: true,
    keys: {
      toggleMenu: ["ctrlKey", "altKey", 65], // Toggle Menu	CTRL + ALT + A
      grayHues: ["ctrlKey", "altKey", 71], // Gray Hues	CTRL + ALT + G
      linkHighlight: ["ctrlKey", "altKey", 85], // Underline Links	CTRL + ALT + U
      bigCursorWhite: ["ctrlKey", "altKey", 67], // Big Cursor	CTRL + ALT + C
      bigCursorBlack: ["ctrlKey", "altKey", 68], // Big Cursor	CTRL + ALT + C
      readingGuide: ["ctrlKey", "altKey", 82], // Reading Guide	CTRL + ALT + R
      textToSpeech: ["ctrlKey", "altKey", 84], // Text To Speech	CTRL + ALT + T
      // speechToText: ["ctrlKey", "altKey", 83], // Speech To Text	CTRL + ALT + S
    },
  },
  buttons: {
    font: { size: 16, units: "px" },
  },
  guide: {
    cBorder: "#20ff69",
    cBackground: "#000000",
    height: "12px",
  },
  menu: {
    dimensions: {
      width: { size: 27, units: "vw" },
      height: { size: 100, units: "vh" },
    },
    fontFamily: "RobotoDraft, Roboto, sans-serif, Arial",
  },
  labels: {
    leiaFocus: "leiaFocus",
    resetTitle: "Redefinir",
    closeTitle: "Fechar",
    menuTitle: "Opções de accessibilidade",
    keyboardNav: "Navegação por Teclado 2x click",
    increaseText: "Aumentar texto",
    decreaseText: "Diminuir texto",
    increaselineHeight: "Aumentar expaço entre linhas",
    decreaselineHeight: "Diminuir expaço entre linhas",
    increaseTextSpacing: "Aumentar expaço do texto",
    decreaseTextSpacing: "Diminuir expaço do texto",
    grayHues: "Modo mono-cromatico",
    bigCursorWhite: "Ponteiro do Rato Branco",
    bigCursorBlack: "Ponteiro do Rato Preto",
    readingGuide: "Guia de leitura",
    linkHighlight: "Destaque e inks",
    textToSpeech: "Leia Texto",
    ampliadorTexto: "Ampliador do texto",
    voiceTotext: "Voice to Text",
  },
  textToSpeechLang: "pt-PT",
  // speechToTextLang: "pt-PT",
  textPixelMode: false,
  textEmlMode: true,
  animations: {
    buttons: true,
  },
  modules: {
    leiaFocus: true,
    dicionario: true,
    customTranslate: true,
    keyboardNav: true,
    increaseText: true,
    imageSpeaker: true,
    decreaseText: true,
    increaselineHeight: true,
    decreaselineHeight: false,
    increaseTextSpacing: true,
    decreaseTextSpacing: true,
    grayHues: true,
    deutanopia: true,
    tritanopia: true,
    protanopia: true,
    bigCursorWhite: true,
    bigCursorBlack: true,
    readingGuide: true,
    linkHighlight: true,
    textToSpeech: true,
    ampliadorTexto: true,
    voiceTotext: true,
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

    if (
      !options.textToSpeechLang &&
      document.querySelector("html").getAttribute("lang")
    ) {
      this.options.textToSpeechLang = document
        .querySelector("html")
        .getAttribute("lang");
    }

    disabledUnsupportedFeatures(this);
    this.sessionState = {
      leiaFocus: false,
      dicionario: false,
      customTranslate: false,
      keyboardNav: false,
      callTecladoVirtual: false,
      imageSpeaker: false,
      textSize: 0,
      lineHeight: 0,
      textSpace: 0,
      deutanopia: false,
      tritanopia: false,
      protanopia: false,
      grayHues: false,
      linkHighlight: false,
      bigCursorWhite: false,
      bigCursorBlack: false,
      readingGuide: false,
      voiceTotext: false,
    };

    //Adiciona classe "hasText" em todos os elementos da pagina que contem texto
    addHasText(false);

    //inicialize Virtual Keyboard
    vai_buscar_todos_campos_texto();
    construtor_teclado_virtual._isMobile();

    // customTranslate.init();
    customTranslate(this);

    common.injectFont(this.options.icon.fontFaceSrc, () => {
      this.build();
    });
  }

  //injetar estilos
  injectCss() {
    let css =
      `
      ${easyNavCss}

    
    ${injectColorAdjustmentsCss}
    ${injectColorAdjustmentsBackgroundCss}
    ${injectColorAdjustmentsContentCss}
    ${injectColorAdjustmentsHeadersCss}

      ${customTranslateCss}
      ${keyboardCss}
      ${keyboardNavCss}
      ${describeImgCss}
      ${audioPlayerSyles}
        ._access-scrollbar::-webkit-scrollbar-track, .mat-autocomplete-panel::-webkit-scrollbar-track, .mat-tab-body-content::-webkit-scrollbar-track, .mat-select-panel:not([class*='mat-elevation-z'])::-webkit-scrollbar-track, .mat-menu-panel::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            background-color: #F5F5F5;
        }
        ._access-scrollbar::-webkit-scrollbar, .mat-autocomplete-panel::-webkit-scrollbar, .mat-tab-body-content::-webkit-scrollbar, .mat-select-panel:not([class*='mat-elevation-z'])::-webkit-scrollbar, .mat-menu-panel::-webkit-scrollbar {
            width: 6px;
            background-color: #F5F5F5;
        }
        ._access-scrollbar::-webkit-scrollbar-thumb, .mat-autocomplete-panel::-webkit-scrollbar-thumb, .mat-tab-body-content::-webkit-scrollbar-thumb, .mat-select-panel:not([class*='mat-elevation-z'])::-webkit-scrollbar-thumb, .mat-menu-panel::-webkit-scrollbar-thumb {
            background-color: #999999;
        }
        ._access-icon {
            position: fixed;
            background-repeat: no-repeat;
            background-size: contain;
            cursor: pointer;
            opacity: 0;
            transition-duration: .5s;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
            box-shadow: 1px 1px 5px rgba(0,0,0,.5);
            transform: scale(1);
        }
        ._access-icon:hover {
            box-shadow: 1px 1px 10px rgba(0,0,0,.9);
            transform: scale(1.1);
        }
        .circular._access-icon {
            border-radius: 50%;
            border: .5px solid white;
        }
        ` +
      (this.options.animations.buttons && this.options.icon.circularBorder
        ? `
        .circular._access-icon:hover {
            border: 5px solid white;
            border-style: double;
            font-size: 35px!important;
            vertical-align: middle;
            padding-top: 2px;
            text-align: center;
        }
        `
        : "") +
      `
        .access_read_guide_bar{
            box-sizing: border-box;
            background: ${this.options.guide.cBackground};
            width: 100%!important;
            min-width: 100%!important;
            position: fixed!important;
            height: ${this.options.guide.height} !important;
            border: solid 3px ${this.options.guide.cBorder};
            border-radius: 5px;
            top: 15px;
            z-index: 2147483647;
        }
        .access-high-contrast *{
            background-color: #000 !important;
            background-image: none !important;
            border-color: #fff !important;
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
            color: #fff !important;
            text-indent: 0 !important;
            text-shadow: none !important;
        }
        ._access-menu {
          box-sizing:border-box;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
            position: fixed;
            width: ${this.options.menu.dimensions.width.size +
      this.options.menu.dimensions.width.units
      };
            height: ${this.options.menu.dimensions.height.size +
      this.options.menu.dimensions.height.units
      };
            transition-duration: .5s;
            z-index: ${this.options.icon.zIndex + 1};
            opacity: 1;
            background-color: #fff;
            color: #000;
            border-radius: 3px;
            border: solid 1px #f1f0f1;
            font-family: ${this.options.menu.fontFamily};
            min-width: 300px;
            box-shadow: 0px 0px 1px #aaa;
            max-height: 100vh;
            overflow: auto;
            ${getComputedStyle(this.body).direction == "rtl"
        ? "text-indent: -5px"
        : ""
      }
        }
        ._access-menu.close {
            z-index: -1;
            width: 0;
            opacity: 0;
            background-color: transparent;
        }
        ._access-menu.bottom {
            bottom: 0;
        }
        ._access-menu.top {
            top: 0;
        }
        ._access-menu.left {
            left: 0;
        }
        ._access-menu.close.left {
            left: -${this.options.menu.dimensions.width.size +
      this.options.menu.dimensions.width.units
      };
        }
        ._access-menu.right {
            right: 0;
        }
        ._access-menu.close.right {
            right: -${this.options.menu.dimensions.width.size +
      this.options.menu.dimensions.width.units
      };
        }
        ._access-menu ._text-center {
            text-align: center;
        }
        ._access-menu h3 {
            font-size: 20px !important;
            margin-top: 10px;
            margin-bottom: 10px;
            padding: 0;
            color: rgba(0,0,0,.87);
            line-height: initial!important;
            letter-spacing: initial!important;
            word-spacing: initial!important;
        }
        ._access-menu ._menu-close-btn {
            left: 5px;
            color: #d63c3c;
            transition: .3s ease;
            line-height: initial!important;
            transform: rotate(0deg);
        }
        ._access-menu ._menu-reset-btn:hover,._access-menu ._menu-close-btn:hover {
            ${this.options.animations.buttons
        ? "transform: rotate(180deg);"
        : ""
      }
        }
        ._access-menu ._menu-reset-btn {
            right: 5px;
            color: #4054b2;
            transition: .3s ease;
            line-height: initial!important;
            transform: rotate(0deg);
        }
        ._access-menu ._menu-btn {
            position: absolute;
            top: 5px;
            cursor: pointer;
            font-size: 24px !important;
            font-weight: bold;
        }
        ._access-menu ul {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          flex-direction: row;
          padding: 1rem;
          position: relative;
          font-size: 12px !important;
          margin: 0;
          line-height: initial!important;
          overflow: auto;
        }
        html._access_cursor_white * {
            cursor: url(https://slimeasy.pt/api/White.cur),auto!important;
        }
        html._access_cursor_black * {
            cursor: url(https://slimeasy.pt/api/Black.cur),auto!important;
        }
        ._access-menu ul li {
          display:inline;
            list-style-type: none;
            cursor: pointer;
            -ms-user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            user-select: none;
            height: 80px;
            width:100px;
            border: solid 1px #f1f0f1;
            padding: 5px;
            margin: 10px auto;
            border-radius: 4px;
            text-align: center;
            transition-duration: .5s;
            transition-timing-function: ease-in-out;
            font-size: ${this.options.buttons.font.size + this.options.buttons.font.units
      } !important;
            
            text-indent: 5px;
            background: #f9f9f9;
            color: rgba(0,0,0,.6);
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
            line-height: initial!important;
            letter-spacing: initial!important;
            word-spacing: initial!important;
        }
        ._access-menu ul.before-collapse li {
            opacity: 0.05;
        }
        ._access-menu ul li.active, ._access-menu ul li.active:hover {
            color: #fff;
            background-color: #000;
        }
        ._access-menu ul li:hover {
            color: rgba(0,0,0,.8);
            background-color: #eaeaea;
        }
        ._access-menu ul li.not-supported {
            display: none;
        }

        ._access-menu ul li svg path {
            fill: rgba(0,0,0,.6);
        }
        ._access-menu ul li:hover svg path {
            fill: rgba(0,0,0,.8);
        }
        ._access-menu ul li.active svg path {
            fill: #fff;
        }

        
        `;
    let className = "_access-main-css";
    common.injectStyle(css, { className: className });
    common.deployedObjects.set("." + className, false);
  }

  injectIcon() {
    // culculations for incon`s:font size,  line height and text indent, based on whidth of the icon
    let width = 60;
    let fontSize = width * 0.8;
    let lineHeight = width * 0.9;
    let textIndent = width * 0.1;
    let iconStyles = `
            width: ${width}px;
            height: auto;
            font-size: ${fontSize + "px"};
            line-height: ${lineHeight + "px"};
            text-indent: ${textIndent + "px"};
            background-color: aliceblue;
            color: "#fff";
            z-index: 10;
            type: "fixed";
            bottom: ${fontSize}px;
            left: ${fontSize}px;
    `;

    let className = `_access-icon _access circular`;
    let iconElem = common.jsonToHtml({
      type: "img",
      attrs: {
        src: "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-bc250.appspot.com/o/images%2Feasy.svg?alt=media&token=22652293-8c96-440f-84fe-eeebc4f2c902",
        class: className,
        style: iconStyles,
        title: "Opções de accessibilidade",
      },
      children: [
        {
          type: "#text",
          text: "accessible",
        },
      ],
    });

    this.body.appendChild(iconElem);
    common.deployedObjects.set("._access-icon", false);
    return iconElem;
  }

  injectTooltipBox() {
    let menuElem = common.jsonToHtml({
      type: "div",
      attrs: {
        class: "accessibilityTootipBox",
      },
    });

    for (let i in this.options.icon.position) {
      menuElem.classList.add(i);
    }

    this.body.appendChild(menuElem);

    return menuElem;
  }

  injectDatltonosmoProtanopia() {
    const startingPoint = document.getElementById("protanopia");
    startingPoint.innerHTML = `
        <div class="col-12  grid_big_2 d-flex justify-content-center flex-wrap flex-row mt-7" >
          <div id="modo_protanopia_dk" class="col-12 d-flex justify-content-between flex-wrap flex-row">
            <div class="info"> <abbr class="tooltip" data-toggle="tooltip" data-placement="right" title="" data-original-title="-------------------">&nbsp;</abbr></div>
            <div class="check_show"></div>
            <div class="col-12 easy_inside_btns_big" >
              <div class="d-flex justify-content-center flex-wrap flex-column align-items-center h-100">
<svg class="mb-3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Daltonismo protanopia</title><defs><polygon id="a" points="0 0 18.12 0 18.12 18.074 0 18.074"></polygon></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="white"><use xlink:href="#a"></use></mask><path d="m9.0256 0.0018c1.674 1e-3 3.348 1e-3 5.021 1e-3 1.778-1e-3 3.061 0.792 3.748 2.437 0.653 1.567 0.3 3.013-0.852 4.185-3.409 3.466-6.846 6.907-10.316 10.312-1.18 1.157-2.66 1.449-4.202 0.794-1.53-0.65-2.368-1.875-2.384-3.548-0.034-3.427-0.076-6.856 8e-3 -10.282 0.059-2.386 1.564-3.77 3.956-3.899 0.079-4e-3 0.159-1e-3 0.238-1e-3 1.595 0 3.188 0 4.783 1e-3" fill="#0F4E64" mask="url(#b)"></path></g></svg>
                <span class="_access-menu-temp text-center d-flex align-items-center" data-access-action="protanopia">Daltonismo<br>
                Protanopia</span></div>
            </div>
          </div>
        </div>
    `;
  }
  injectDatltonosmoDeutanopia() {
    const startingPoint = document.getElementById("deutanopia");
    startingPoint.innerHTML = `
        <div class="col-12  grid_big_2 d-flex justify-content-center flex-wrap flex-row mt-7" >
          <div id="modo_deutanopia_dk" class="col-12 d-flex justify-content-between flex-wrap flex-row">
            <div class="info"> <abbr class="tooltip" data-toggle="tooltip" data-placement="right" title="" data-original-title="-------------------">&nbsp;</abbr></div>
            <div class="check_show"></div>
            <div class="col-12 easy_inside_btns_big">
              <div class="d-flex justify-content-center flex-wrap flex-column align-items-center h-100">
<svg class="mb-3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Daltonismo deutanopia</title><g fill="none" fill-rule="evenodd"><g transform="translate(-9.3e-5 -.000116)" fill="#0F4E64"><path d="m32.088 3.1807c0.014 1.121-0.284 1.932-0.894 2.614-0.426 0.476-0.887 0.921-1.339 1.373-7.577 7.58-15.154 15.159-22.737 22.733-0.563 0.563-1.118 1.162-1.774 1.599-1.319 0.88-3.084 0.678-4.207-0.374-1.243-1.162-1.511-2.912-0.583-4.364 0.382-0.598 0.909-1.112 1.416-1.619 7.742-7.753 15.491-15.501 23.243-23.244 0.451-0.45 0.904-0.917 1.426-1.274 1.159-0.792 2.428-0.811 3.639-0.17 1.137 0.602 1.698 1.646 1.81 2.726"></path><path d="m22.897 31.986c-1.68 0-3.36 5e-3 -5.04-1e-3 -1.687-7e-3 -2.913-0.766-3.599-2.312-0.69-1.556-0.414-3.028 0.745-4.212 3.415-3.486 6.88-6.922 10.343-10.359 1.204-1.195 2.683-1.408 4.219-0.838 1.494 0.554 2.34 1.784 2.38 3.319 0.095 3.595 0.155 7.201-0.014 10.791-0.108 2.308-1.649 3.533-3.994 3.602-1.679 0.05-3.36 0.01-5.04 0.01"></path></g></g></svg>
                <span class="_access-menu-temp text-center d-flex align-items-center" data-access-action="deutanopia">Daltonismo<br>
                Deutanopia</span></div>
            </div>
          </div>
        </div>
    `;
  }
  injectDatltonosmoTritanopia() {
    const startingPoint = document.getElementById("tritanopia");
    startingPoint.innerHTML = `
        <div class="col-12  grid_big_2 d-flex justify-content-center flex-wrap flex-row mt-7">
          <div id="modo_tritanopia_dk" class="col-12 d-flex justify-content-between flex-wrap flex-row">
            <div class="info"> <abbr class="tooltip" data-toggle="tooltip" data-placement="right" title="" data-original-title="-------------------">&nbsp;</abbr></div>
            <div class="check_show"></div>
            <div class="col-12 easy_inside_btns_big">
              <div class="d-flex justify-content-center flex-wrap flex-column align-items-center h-100">
<svg class="mb-3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Daltonismo tritanopia</title><g fill="none" fill-rule="evenodd"><g transform="translate(13.885 13.962)" fill="#0F4E64"><path d="m9.0125 18.024c-1.68 0-3.36 5e-3 -5.04-1e-3 -1.687-7e-3 -2.913-0.766-3.599-2.312-0.69-1.556-0.414-3.028 0.745-4.212 3.415-3.486 6.88-6.922 10.343-10.359 1.204-1.195 2.683-1.408 4.219-0.838 1.494 0.554 2.34 1.784 2.38 3.319 0.095 3.595 0.155 7.201-0.014 10.791-0.108 2.308-1.649 3.533-3.994 3.602-1.679 0.05-3.36 0.01-5.04 0.01"></path></g></g></svg>
                <span class="_access-menu-temp text-center d-flex align-items-center" data-access-action="tritanopia">Daltonismo<br>
                Tritanopia</span></div>
            </div>
          </div>
        </div>
    `;
  }
  injectcolrAdjustments() {
    const startingDiv = document.getElementById("color-adjustments");
    startingDiv.innerHTML = `
        <div class="btn_geral" id="btn_mudaCorCabecalho">
      <div class="btn_particular">
        <div class="info">
          <span
            data-tooltip="Esta funcionalidade permite que o utilizador mude a cor dos cabeçalhos"
            data-tooltip-position="bottom"
            ><i class="fas fa-info"></i
          ></span>
        </div>

        <div class="check" id="mudaCorCabecalho">
        </div>
      </div>

      <div class="AdjustColorCabecalho" id="AdjustColorCabecalho">
        <div class="input-color"></div>
      </div>
    </div>
<div class="RadioEditaCores">
    <input
      type="radio"
      name="editaCor"
      value="cabecalho"
      class="editarCores"
      id="Cabecalho"
    />
     <label for="Cabecalho">Cabeçalho</label>
    <input
      type="radio"
      name="editaCor"
      value="fundo"
      class="editarCores"
      id="Fundo"
    /><label for="Fundo">Fundo</label>
    <input
      type="radio"
      name="editaCor"
      value="conteudo"
      class="editarCores"
      id="Conteudo"
    />
    <label for="Conteudo">Conteudo</label>
</div>
    <br />
    <div class="RadioCores">
      <input
        type="radio"
        name="Cor"
        id="corBranco"
        value="white"
        class="cores"
      />
      <label for="corBranco"></label>

      <input
        type="radio"
        name="Cor"
        id="corPreto"
        value="black"
        class="cores"
      />
      <label for="corPreto"></label>

      <input
        type="radio"
        name="Cor"
        id="corVerde"
        value="green"
        class="cores"
      />
      <label for="corVerde"></label>

      <input
        type="radio"
        name="Cor"
        id="corRoxo"
        value="purple"
        class="cores"
      />
      <label for="corRoxo"></label>

      <input
        type="radio"
        name="Cor"
        id="corVermelho"
        value="red"
        class="cores"
      />
      <label for="corVermelho"></label>

      <input
        type="radio"
        name="Cor"
        value="yellow"
        id="corAmarelo"
        class="cores"
      />
      <label for="corAmarelo"></label>

      <input type="radio" name="Cor" id="corAzul" value="blue" class="cores" />
      <label for="corAzul"></label>

      <input type="radio" name="Cor" value="pink" id="corRosa" class="cores" />
      <label for="corRosa"></label>
    </div>

    <div class="btn_geral" id="btn_mudaCorFundo">
      <div class="btn_particular">
        <div class="info">
          <span
            data-tooltip="Esta funcionalidade permite que o utilizador mude a cor dos fundos"
            data-tooltip-position="bottom"
            ><i class="fas fa-info"></i
          ></span>
        </div>

        <div class="check" id="mudaCorFundo">
          
        </div>
      </div>

      <div id="AdjustColorFundo">
        <p style="font-size: 10px">Fundo</p>
      </div>

      <div class="input-color">
        <div class="color-box" style="background-color: #ff850a"></div>
      </div>
    </div>

    <div class="btn_geral" id="btn_mudaCorConteudo">
      <div class="btn_particular">
        <div class="info">
          <span
            data-tooltip="Esta funcionalidade permite que o utilizador mude a cor do Conteudo"
            data-tooltip-position="bottom"
            ><i class="fas fa-info"></i
          ></span>
        </div>

        <div class="check" id="mudaCorConteudo">
          
        </div>
      </div>

      <div id="AdjustColorConteudo">
        <p style="font-size: 10px">Conteudo</p>
      </div>

      <div class="input-color">
        <div class="color-box" style="background-color: #ff850a"></div>
      </div>
      <!--Inicio do slider de saturação-->
      <div class="col-12 d-flex justify-content-center flex-wrap flex-row mb-3">
            <div class="col-12 sub_titulo_nav mb-3">Saturação (<span id="saturation_percent">0</span>%)</div>
            <div class="col-12 d-flex justify-content-between flex-wrap flex-row align-items-center lh-1">
              <div class="trazzo col-10 col-md-10 col-lg-auto mx-auto"></div>
              <div class="col-1 col-md-1 col-lg-auto lh-1 sat_less easy_basic_color d-flex justify-content-start align-items-center">-</div>
              <div id="slider_saturation" class="lh-1 d-flex justify-content-center align-items-center col-10 col-md-10 col-lg-auto">
                <!-- <div class="test"><br><br><br><br><br></div> -->
                <input id="r" type="range" />
              </div>
              <div class="col-1 col-md-1 col-lg-auto text-end lh-1 sat_plus easy_basic_color d-flex justify-content-end align-items-center">+</div>
            </div>
          </div>
<!--Fim do slider de saturação-->
    </div>
    `;
  }

  injectMenu() {
    let menuElem = common.jsonToHtml({
      type: "div",
      attrs: {
        class: "_access-menu close _access",
      },
      children: [
        {
          type: "div",
          attrs: {
            class: "_text-center sticky-top p-3 mb-2 bg-dark text-white",
          },
          children: [
            {
              type: "i",
              attrs: {
                class: `_menu-close-btn _menu-btn ${this.options.icon.fontClass}`,
                title: this.options.labels.closeTitle,
                tabindex: "0",
              },
              children: [
                {
                  type: "#text",
                  text: "close",
                },
              ],
            },
            {
              type: "#text",
              text: this.options.labels.menuTitle,
            },
            {
              type: "i",
              attrs: {
                class: `_menu-reset-btn _menu-btn ${this.options.icon.fontClass}`,
                title: this.options.labels.resetTitle,
                tabindex: "0",
              },
              children: [
                {
                  type: "#text",
                  text: "refresh",
                },
              ],
            },
          ],
        },
        {
          type: "div",
          attrs: {
            class: "d-none",
            id: "google_translate_element",
          },
        },

        {
          type: "div",
          attrs: {
            class: "col-auto",
          },
          children: [
            {
              type: "label",
              attrs: {
                for: "comboBoxLanguages",
                class: "form-label",
              },
              children: [
                {
                  type: "#text",
                  text: "Tradutor",
                },
              ],
            },
            {
              type: "select",
              attrs: {
                class: "form-select notranslate",
                id: "comboBoxLanguages",
                tabindex: "0",
              },
              children: [
                {
                  type: "option",
                  attrs: {
                    value: "ar",
                  },
                  children: [
                    {
                      type: "#text",
                      text: "árabe",
                    },
                  ],
                },
                {
                  type: "option",
                  attrs: {
                    value: "bg",
                  },
                  children: [
                    {
                      type: "#text",
                      text: "búlgaro",
                    },
                  ],
                },
                {
                  type: "option",
                  attrs: {
                    value: "da",
                  },
                  children: [
                    {
                      type: "#text",
                      text: "dinamarques",
                    },
                  ],
                },
                {
                  type: "option",
                  attrs: {
                    value: "de",
                  },
                  children: [
                    {
                      type: "#text",
                      text: "alemão",
                    },
                  ],
                },
                {
                  type: "option",
                  attrs: {
                    value: "el",
                  },
                  children: [
                    {
                      type: "#text",
                      text: "grego",
                    },
                  ],
                },
                {
                  type: "option",
                  attrs: {
                    value: "en",
                  },
                  children: [
                    {
                      type: "#text",
                      text: "Ingles",
                    },
                  ],
                },
                {
                  type: "option",
                  attrs: {
                    value: "pt",
                    selected: true,
                  },
                  children: [
                    {
                      type: "#text",
                      text: "Português (Brasileiro)",
                    },
                  ],
                },
                {
                  type: "option",
                  attrs: {
                    value: "es",
                  },
                  children: [
                    {
                      type: "#text",
                      text: "Espanhol",
                    },
                  ],
                },
                {
                  type: "option",
                  attrs: {
                    value: "fr",
                  },
                  children: [
                    {
                      type: "#text",
                      text: "Frances",
                    },
                  ],
                },
                {
                  type: "option",
                  attrs: {
                    value: "it",
                  },
                  children: [
                    {
                      type: "#text",
                      text: "Italiano",
                    },
                  ],
                },
                {
                  type: "option",
                  attrs: {
                    value: "ja",
                  },
                  children: [
                    {
                      type: "#text",
                      text: "chinês",
                    },
                  ],
                },
                {
                  type: "option",
                  attrs: {
                    value: "ko",
                  },
                  children: [
                    {
                      type: "#text",
                      text: "coreano",
                    },
                  ],
                },
                {
                  type: "option",
                  attrs: {
                    value: "nb",
                  },
                  children: [
                    {
                      type: "#text",
                      text: "norueguês",
                    },
                  ],
                },
                {
                  type: "option",
                  attrs: {
                    value: "pl",
                  },
                  children: [
                    {
                      type: "#text",
                      text: "esloveno",
                    },
                  ],
                },
                {
                  type: "option",
                  attrs: {
                    value: "sv",
                  },
                  children: [
                    {
                      type: "#text",
                      text: "sueco",
                    },
                  ],
                },
                {
                  type: "option",
                  attrs: {
                    value: "tr",
                  },
                  children: [
                    {
                      type: "#text",
                      text: "turco",
                    },
                  ],
                },
                {
                  type: "option",
                  attrs: {
                    value: "uk",
                  },
                  children: [
                    {
                      type: "#text",
                      text: "ucraniano",
                    },
                  ],
                },
                {
                  type: "option",
                  attrs: {
                    value: "zh",
                  },
                  children: [
                    {
                      type: "#text",
                      text: "japones",
                    },
                  ],
                },
                {
                  type: "option",
                  attrs: {
                    value: "ru",
                  },
                  children: [
                    {
                      type: "#text",
                      text: "Russo",
                    },
                  ],
                },
                {
                  type: "option",
                  attrs: {
                    value: "bn",
                  },
                  children: [
                    {
                      type: "#text",
                      text: "Bengali",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "div",
          attrs: {
            class: "btn btn-primary",
            style: "margin-top: 2rem; display: none;",
            id: "resetTranslate",
          },
          children: [
            {
              type: "#text",
              text: "Mostrar original",
            },
          ],
        },
        {
          type: "div",
          attrs: {
            class: "d-block",
            id: "color-adjustments",
          },
        },
        {
          type: "ul",
          attrs: {
            class: this.options.animations.buttons
              ? "before-collapse _access-scrollbar"
              : "_access-scrollbar",
          },
          children: [
            {
              type: "div",
              attrs: {
                id: "protanopia",
                class: "btn_geral",
                tabindex: "0",
              },
            },
            {
              type: "div",
              attrs: {
                id: "deutanopia",
                class: "btn_geral",
                tabindex: "0",
              },
            },
            {
              type: "div",
              attrs: {
                id: "tritanopia",
                class: "btn_geral",
                tabindex: "0",
              },
            },
            {
              type: "li",
              attrs: {
                "data-access-action": "leiaFocus",
                class: "btn_geral",
                tabindex: "0",
              },
              children: [
                {
                  type: "#text",
                  text: "Leia Focus",
                },
              ],
            },
            {
              type: "li",
              attrs: {
                "data-access-action": "dicionario",
                class: "btn_geral",
                tabindex: "0",
              },
              children: [
                {
                  type: "#text",
                  text: "Ativar dicionário",
                },
              ],
            },
            {
              type: "li",
              attrs: {
                "data-access-action": "keyboardNav",
                class: "btn_geral",
                id: "btn_keyboardnav",
                tabindex: "0",
              },
              children: [
                {
                  type: "#text",
                  text: this.options.labels.keyboardNav,
                },
              ],
            },
            {
              type: "li",
              attrs: {
                "data-access-action": "decreaselineHeight",
                tabindex: "0",
              },
              children: [
                {
                  type: "#text",
                  text: this.options.labels.decreaselineHeight,
                },
              ],
            },
            {
              type: "li",
              attrs: {
                "data-access-action": "increaselineHeight",
                tabindex: "0",
              },
              children: [
                {
                  type: "#text",
                  text: this.options.labels.increaselineHeight,
                },
              ],
            },
            {
              type: "li",
              attrs: {
                "data-access-action": "increaseText",
                tabindex: "0",
              },
              children: [
                {
                  type: "#text",
                  text: this.options.labels.increaseText,
                },
              ],
            },
            {
              type: "li",
              attrs: {
                "data-access-action": "decreaseText",
                tabindex: "0",
              },
              children: [
                {
                  type: "#text",
                  text: this.options.labels.decreaseText,
                },
              ],
            },
            {
              type: "li",
              attrs: {
                id: "virtual-keyboard",
                "data-access-action": "tecladoVirtual",
                tabindex: "0",
              },
              children: [
                {
                  type: "#text",
                  text: "Teclado Virtual",
                },
              ],
            },

            {
              type: "li",
              attrs: {
                id: "virtual-keyboard",
                "data-access-action": "imageSpeaker",
                tabindex: "0",
              },
              children: [
                {
                  type: "#text",
                  text: "Image Speaker",
                },
              ],
            },
            {
              type: "li",
              attrs: {
                "data-access-action": "increaseTextSpacing",
                tabindex: "0",
              },
              children: [
                {
                  type: "#text",
                  text: this.options.labels.increaseTextSpacing,
                },
              ],
            },
            {
              type: "li",
              attrs: {
                "data-access-action": "decreaseTextSpacing",
                tabindex: "0",
              },
              children: [
                {
                  type: "#text",
                  text: this.options.labels.decreaseTextSpacing,
                },
              ],
            },

            {
              type: "li",
              attrs: {
                "data-access-action": "grayHues",
                title: parseKeys(this, this.options.hotkeys.keys.grayHues),
                tabindex: "0",
              },
              children: [
                {
                  type: "#text",
                  text: this.options.labels.grayHues,
                },
              ],
            },
            {
              type: "li",
              attrs: {
                "data-access-action": "linkHighlight",
                tabindex: "0",
                title: parseKeys(this, this.options.hotkeys.keys.linkHighlight),
              },
              children: [
                {
                  type: "#text",
                  text: this.options.labels.linkHighlight,
                },
              ],
            },
            {
              type: "li",
              attrs: {
                "data-access-action": "bigCursorWhite",
                tabindex: "0",
                title: parseKeys(
                  this,
                  this.options.hotkeys.keys.bigCursorWhite
                ),
              },
              children: [
                {
                  type: "div",
                  attrs: {
                    id: "iconBigCursorWhite",
                  },
                },
                {
                  type: "#text",
                  text: this.options.labels.bigCursorWhite,
                },
              ],
            },
            {
              type: "li",
              attrs: {
                "data-access-action": "bigCursorBlack",
                tabindex: "0",
                title: parseKeys(
                  this,
                  this.options.hotkeys.keys.bigCursorBlack
                ),
              },
              children: [
                {
                  type: "div",
                  attrs: {
                    id: "iconbigCursorBlack",
                  },
                },
                {
                  type: "#text",
                  text: this.options.labels.bigCursorBlack,
                },
              ],
            },
            {
              type: "li",
              attrs: {
                "data-access-action": "readingGuide",
                tabindex: "0",
                title: parseKeys(this, this.options.hotkeys.keys.readingGuide),
              },
              children: [
                {
                  type: "#text",
                  text: this.options.labels.readingGuide,
                },
              ],
            },
            {
              type: "li",
              attrs: {
                "data-access-action": "textToSpeech",
                tabindex: "0",
              },
              children: [
                {
                  type: "#text",
                  text: this.options.labels.textToSpeech,
                },
              ],
            },
            {
              type: "li",
              attrs: {
                "data-access-action": "ampliadorTexto",
                tabindex: "0",
              },
              children: [
                {
                  type: "#text",
                  text: this.options.labels.ampliadorTexto,
                },
              ],
            },

            {
              type: "li",
              attrs: {
                "data-access-action": "voiceTotext",
                tabindex: "0",
              },
              children: [
                {
                  type: "#text",
                  text: this.options.labels.voiceTotext,
                },
              ],
            },
          ],
        },
      ],
    });

    for (let i in this.options.icon.position) {
      menuElem.classList.add(i);
    }

    this.body.appendChild(menuElem);

    common.deployedObjects.set("._access-menu", false);
    let closeBtn = document.querySelector("._access-menu ._menu-close-btn");
    closeBtn.addEventListener(
      "click",
      () => {
        this.toggleMenu();
      },
      false
    );
    let resetBtn = document.querySelector("._access-menu ._menu-reset-btn");
    resetBtn.addEventListener(
      "click",
      () => {
        this.resetAll();
      },
      false
    );

    return menuElem;
  }

  resetAll() {
    //window.location.reload();
    this.menuInterface.ampliadorTexto(true);
    this.menuInterface.leiaFocus(true);
    this.menuInterface.textToSpeech(true);
    this.menuInterface.linkHighlight(true);
    this.menuInterface.deutanopia(true);
    this.menuInterface.tritanopia(true);
    this.menuInterface.protanopia(true);
    this.menuInterface.grayHues(true);
    this.menuInterface.imageSpeaker(true);
    this.menuInterface.dicionario(true);
    this.menuInterface.bigCursorWhite(true);
    this.menuInterface.bigCursorBlack(true);
    this.menuInterface.readingGuide(true);
    this.menuInterface.voiceTotext(true);

    resetLineHeight(this);
    resetTextSize(this);
    resetTextSpace(this);
    // cor cabecalho
    mudaCorCabecalho(this, true);

    // cor mudaCorFundo
    mudaCorFundo(this, true);

    // cor mudaCorConteudo
    mudaCorConteudo(this, true);
    for (let i of document.querySelectorAll("._access-menu ul li.active")) {
      i.classList.remove("active");
    }
    // Following code, will destroy all Accessebility Elements (Icon amd side menu)
    // destroy(); //call from the outer folder
  }

  callTecladoVirtual() {
    virtualKeyboard();
  }
  callKeyboardNav() {
    keyboardNavigation(this);
  }

  toggleMenu() {
    if (this.menu.classList.contains("close")) {
      if (this.options.animations && this.options.animations.buttons)
        setTimeout(() => {
          this.menu.querySelector("ul").classList.toggle("before-collapse");
        }, 500);
      setTimeout(() => {
        this.menu.classList.toggle("close");
      }, 10);
    } else {
      if (this.options.animations && this.options.animations.buttons) {
        setTimeout(() => {
          this.menu.classList.toggle("close");
        }, 500);
        setTimeout(() => {
          this.menu.querySelector("ul").classList.toggle("before-collapse");
        }, 10);
      } else {
        this.menu.classList.toggle("close");
      }
    }
  }

  build() {
    this.initialValues = {
      leiaFocus: false,
      dicionario: false,
      linkHighlight: false,
      textToSpeech: false,
      bigCursorWhite: false,
      bigCursorBlack: false,
      readingGuide: false,
      ampliadorTexto: false,
      voiceTotext: false,
      body: {},
      html: {},
    };
    this.body = document.body || document.getElementsByTagName("body")[0];
    this.html =
      document.documentElement || document.getElementsByTagName("html")[0];
    if (this.options.textEmlMode) {
      initFontSize(this);
    }
    this.injectCss();
    this.injectTooltipBox();
    this.icon = this.injectIcon();
    this.menu = this.injectMenu();
    this.injectcolrAdjustments();
    this.injectDatltonosmoProtanopia();
    this.injectDatltonosmoDeutanopia();
    this.injectDatltonosmoTritanopia();
    addListeners(this);
    disableUnsupportedModules(this);

    // cor cabecalho
    mudaCorCabecalho();

    // cor mudaCorFundo
    mudaCorFundo();

    // cor mudaCorConteudo
    mudaCorConteudo();

    if (this.options.hotkeys.enabled) {
      document.onkeydown = function (e) {
        let act = Object.entries(self.options.hotkeys.keys).find(function (
          val
        ) {
          let pass = true;
          for (var i = 0; i < val[1].length; i++) {
            if (Number.isInteger(val[1][i])) {
              if (e.keyCode != val[1][i]) {
                pass = false;
              }
            } else {
              if (e[val[1][i]] == undefined || e[val[1][i]] == false) {
                pass = false;
              }
            }
          }
          return pass;
        });
        if (act != undefined) {
          runHotkey(self, act[0]);
        }
      };
    }

    this.icon.addEventListener(
      "click",
      () => {
        this.toggleMenu();
      },
      false
    );
    setTimeout(() => {
      this.icon.style.opacity = "1";
    }, 10);

    this.menuInterface = {
      leiaFocus: (destroy) => {
        leiaFocus(this, destroy);
      },
      increaselineHeight: () => {
        alterLineHeight(this, true);
      },
      decreaselineHeight: () => {
        alterLineHeight(this, false);
      },
      increaseText: () => {
        alterTextSize(this, true);
      },
      decreaseText: () => {
        alterTextSize(this, false);
      },
      linkHighlight: (destroy) => {
        linkHighlight(this, destroy);
      },
      increaseTextSpacing: () => {
        alterTextSpace(this, true);
      },
      decreaseTextSpacing: () => {
        alterTextSpace(this, false);
      },
      keyboardNav: () => {
        this.callKeyboardNav();
      },
      tecladoVirtual: () => {
        this.callTecladoVirtual();
      },
      dicionario: (destroy) => {
        dicionario(this, destroy);
      },
      imageSpeaker: (destroy) => {
        toogleImageSpeaker(this, destroy);
      },
      grayHues: (destroy) => {
        grayHues(this, destroy);
      },
      tritanopia: (destroy) => {
        tritanopia(this, destroy);
      },
      deutanopia: (destroy) => {
        deutanopia(this, destroy);
      },
      protanopia: (destroy) => {
        protanopia(this, destroy);
      },
      bigCursorWhite: (destroy) => {
        bigCursorWhite(this, destroy);
      },
      bigCursorBlack: (destroy) => {
        bigCursorBlack(this, destroy);
      },
      readingGuide: (destroy) => {
        readingGuide(this, destroy);
      },
      textToSpeech: (destroy) => {
        textToSpeech(this, destroy);
      },
      ampliadorTexto: (destroy) => {
        addHasText(destroy);
        ampliadorTexto(this, destroy);
      },

      voiceTotext: (destroy) => {
        voiceTotext(this, destroy);
      },
    };

    if (this.options.session.persistent) setSessionFromCache(this);
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

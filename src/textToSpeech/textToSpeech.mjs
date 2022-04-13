"use strict";
import common from "../utils/common.js";
import read from "./read.mjs";
import { toogleAudioPlayer } from "../audioPlayer/index.mjs";

export default function textToSpeech(self, destroy) {
    const allTexts = document.querySelectorAll(".hasText");
    self.sessionState.textToSpeech = typeof destroy === "undefined" ? true : false;
    self.onChange(false);
    let className = "_access-text-to-speech";
    let el = $('._access-menu [data-access-action="textToSpeech"]');
  
    let remove = () => {
        let style = document.querySelector("." + className);
        if (style) {
            style.parentElement.removeChild(style);
                for (const text of allTexts) {
                    text.removeEventListener("click", read);
                }
      
            common.deployedObjects.remove("." + className);
        }
    };
  
    if (destroy) {
        if (el) {
            el.classList.remove("active");
        }
        
        self.initialValues.textToSpeech = false;
        console.log("pause");

        return remove();
    }

    el.toggleClass("active");

    self.initialValues.textToSpeech = !self.initialValues.textToSpeech;
    if (self.initialValues.textToSpeech) {
    let css = `
                        .hasText:hover {
                            box-shadow: 2px 2px 2px rgba(180,180,180,0.7);
                            background-color: rgba(0,0,0,0.7);
                            color:white;
                        }
                    `;
    common.injectStyle(css, { className: className });
    common.deployedObjects.set("." + className, true);
    for (const text of allTexts) {
      text.addEventListener("click", read);
    }
    // document.addEventListener("click", read, false);
    toogleAudioPlayer(true);
  } else {
    console.log("parar leitura");
    window.speechSynthesis.cancel();
    toogleAudioPlayer(false);
    remove();
  }
}

function injectReaderBtns(self) {
  let readerBtns = common.jsonToHtml({
    type: "div",
    attrs: {
      class: "_access-read-btns-wrapper sticky-top",
      // style: "position: sticky; top:0; right:0;",
    },
    children: [
      {
        type: "button",
        attrs: {
          onclick: "() => {window.speechSynthesis.pause();}",
          class: "btn btn-success",
          title: "Ler",
          tabindex: "0",
        },
        children: [
          {
            type: "#text",
            text: "Ler",
          },
        ],
      },
      {
        type: "button",
        attrs: {
          onclick: "() => window.speechSynthesis.pause()",
          class: "btn btn-warning",
          title: "Pause",
          tabindex: "0",
        },
        children: [
          {
            type: "#text",
            text: "Pause",
          },
        ],
      },
      {
        type: "button",
        attrs: {
          class: "btn btn-danger",
          title: "Parar",
          tabindex: "0",
        },
        children: [
          {
            type: "#text",
            text: "Parar",
          },
        ],
      },
    ],
  });

  self.body.appendChild(readerBtns);

  return readerBtns;
}

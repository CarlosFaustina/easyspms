"use strict";
import common from "../utils/common.js";
import read from "./read.mjs";

export default function textToSpeech(self, destroy) {
  self.sessionState.textToSpeech =
    typeof destroy === "undefined" ? true : false;
  self.onChange(false);
  let className = "_access-text-to-speech";
  let remove = () => {
    let style = document.querySelector("." + className);
    if (style) {
      style.parentElement.removeChild(style);
      document.removeEventListener("click", read, false);
      common.deployedObjects.remove("." + className);
    }
  };

  if (destroy) {
    document
      .querySelector('._access-menu [data-access-action="textToSpeech"]')
      .classList.remove("active");
    self.initialValues.textToSpeech = false;
    console.log("pause");

    return remove();
  }

  document
    .querySelector('._access-menu [data-access-action="textToSpeech"]')
    .classList.toggle("active");

  self.initialValues.textToSpeech = !self.initialValues.textToSpeech;
  if (self.initialValues.textToSpeech) {
    let css = `
                        *:hover {
                            box-shadow: 2px 2px 2px rgba(180,180,180,0.7);
                        }
                    `;
    common.injectStyle(css, { className: className });
    common.deployedObjects.set("." + className, true);
    document.addEventListener("click", read, false);

    // injectReaderBtns(self);
  } else {
    console.log("parar leitura");
    // window.speechSynthesis.pause();
    window.speechSynthesis.cancel();
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

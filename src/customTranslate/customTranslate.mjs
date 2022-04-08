import common from "../utils/common.js";

export default function customTranslate(self, destroy) {
  var selectGoogleTranslate = null;
  var resetTranslate = null;
  var comboBoxLanguages = null;

  /**
   * Incia google tradutor
   */
  const googleTranslateAPI = [
    "https://translate.google.com/translate_a/element.js?cb=translateInit",
  ];
  common.injectScript(googleTranslateAPI);

  setTimeout(() => {
    new google.translate.TranslateElement(
      {
        pageLanguage: "pt-PT",
        includedLanguages:
          "ar,bg,ca,cs,da,de,el,en,en-GB,en-CA,en-AU,en-ZA,es,es-MX,et,eu,fi,fr,gl,he,hr,hu,it,ja,ko,lt,lv,nb,nl,pl,pt,pt-PT,ro,ru,sk,sl,sv,tr,uk,zh,zh-CN",
        // layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
      },
      "google_translate_element"
    );
    selectGoogleTranslate = document
      .getElementById("google_translate_element")
      .querySelector(".goog-te-combo");

    comboBoxLanguages = document.getElementById("comboBoxLanguages");
    resetTranslate = document.getElementById("resetTranslate");

    //Escuta evento do combobox do tradutor
    comboBoxLanguages.addEventListener("change", _onChangeLanguage);

    //Restora para linguagem padrão
    resetTranslate.addEventListener("click", _handleRestoreLanguage);
    console.log(comboBoxLanguages);
  }, 2000);

  /**
   *
   * @param {Event} event
   */
  function _onChangeLanguage(event) {
    console.log(event.target.value);

    if (!!event.target.value) {
      changeLanguage(event.target.value);
      resetTranslate.style.display = "block";
    } else {
      _handleRestoreLanguage();
    }
  }

  /**
   * Função que será chamada para realizar a troca de idioma
   * @param {String} lang
   */
  function changeLanguage(lang) {
    if (selectGoogleTranslate) {
      selectGoogleTranslate.value = lang;
      changeTranslateEvent(selectGoogleTranslate); //Dispara a troca
    }
  }

  /**
   * Dispara evento para trocar o idioma
   * @param {Element} el
   */
  function changeTranslateEvent(el) {
    if (el.fireEvent) {
      el.fireEvent("onchange");
    } else {
      var evt = new Event("change", { bubbles: false, cancelable: true });
      el.dispatchEvent(evt);
      console.log(el);
    }
  }

  /**
   * Restora para a linguagem original
   */
  function restoreLanguage() {
    var iframe = document.getElementsByClassName("goog-te-banner-frame")[0];
    if (!iframe) return;

    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    var restore_el = innerDoc.getElementsByTagName("button");

    for (var i = 0; i < restore_el.length; i++) {
      if (restore_el[i].id.indexOf("restore") >= 0) {
        restore_el[i].click();
        var close_el = innerDoc.getElementsByClassName("goog-close-link");
        close_el[0].click();
        return;
      }
    }
  }

  function _handleRestoreLanguage() {
    restoreLanguage();
    resetTranslate.style.display = "none";
    comboBoxLanguages.value = "";
  }
}

export const customTranslateCss = `

#accessibilityTootipBox {
  display: block;
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
  color: transparent;
  font-size: 1rem;
  white-space: pre-wrap;
  padding: 10px;
  line-height: 1 !important;
  width: auto;
  max-width: 50%;
  border-radius: 3px;
  max-height: auto;
  z-index: 45454564;
  overflow: auto;
}

.goog-te-banner-frame {
  display: none !important;
}
#goog-gt-tt {
  display: none !important;
  visibility: hidden !important;
}
.goog-text-highlight {
  background-color: transparent !important;
  box-shadow: 0px 0px 0px transparent !important;
}

`;

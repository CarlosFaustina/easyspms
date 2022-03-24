var selectGoogleTranslate = null;

/**
 * Incia google tradutor
 */
function translateInit() {
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

let customTranslate = {
  elements: {
    comboBoxLanguages: document.getElementById("comboBoxLanguages"),
    resetTranslate: document.getElementById("resetTranslate"),
  },
  _handleRestoreLanguage() {
    restoreLanguage();
    customTranslate.elements.resetTranslate.style.display = "none";
    customTranslate.elements.comboBoxLanguages.value = "";
  },
  /**
   * 
   * @param {Event} event 
   */
  _onChangeLanguage(event) {
    if (!!event.target.value) {
      changeLanguage(event.target.value);
      customTranslate.elements.resetTranslate.style.display = "block";
    } else {
      customTranslate._handleRestoreLanguage();
    }
  },
  init() {
    //Escuta evento do combobox do tradutor
    customTranslate.elements.comboBoxLanguages.addEventListener(
      "change",
      customTranslate._onChangeLanguage
    );

    //Restora para linguagem padrão
    resetTranslate.addEventListener(
      "click",
      customTranslate._handleRestoreLanguage
    );
  },
};
